import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

// Basic email validation (required + format)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.trim() !== "" && EMAIL_REGEX.test(value.trim());
}

// Best-effort in-memory rate limit per IP (5/min). Serverless: per-instance only.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? null;
  return request.headers.get("x-real-ip") ?? null;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (now >= entry.resetAt) {
    entry.count = 1;
    entry.resetAt = now + RATE_LIMIT_WINDOW_MS;
    return false;
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) return true;
  return false;
}

// Prune expired entries to avoid unbounded growth
function pruneRateLimitMap(): void {
  const now = Date.now();
  Array.from(rateLimitMap.entries()).forEach(([key, value]) => {
    if (now >= value.resetAt) rateLimitMap.delete(key);
  });
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (ip && isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again in a minute." },
        { status: 429 }
      );
    }
    if (rateLimitMap.size > 500) pruneRateLimitMap();

    const body = await request.json();
    const {
      email,
      childAgeRange,
      biggestChallenge,
      utm_source,
      utm_medium,
      utm_campaign,
      referrer,
      source: legacySource,
    } = body ?? {};

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const trimmedEmail = (email as string).trim();
    const supabase = createSupabaseServerClient();

    const hasAttribution =
      utm_source != null ||
      utm_medium != null ||
      utm_campaign != null ||
      referrer != null;
    const sourceValue = hasAttribution
      ? JSON.stringify({
          utm_source: utm_source ?? null,
          utm_medium: utm_medium ?? null,
          utm_campaign: utm_campaign ?? null,
          referrer: referrer ?? null,
        })
      : legacySource ?? null;

    const { error } = await supabase
      .schema("DigiCompass")
      .from("waitlist_signups")
      .insert({
        email: trimmedEmail,
        child_age_range: childAgeRange ?? null,
        biggest_challenge: biggestChallenge ?? null,
        source: sourceValue,
      });

    if (error) {
      // PostgreSQL unique violation (unique index on lower(email))
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, alreadyExists: true });
      }
      console.error("[waitlist] Supabase insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, alreadyExists: false });
  } catch (e) {
    console.error("[waitlist] Unexpected error:", e);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/track";

const CHILD_AGE_OPTIONS = [
  { value: "", label: "Select age range (optional)" },
  { value: "<6", label: "<6" },
  { value: "6–9", label: "6–9" },
  { value: "10–13", label: "10–13" },
  { value: "14–17", label: "14–17" },
];

const CHALLENGE_OPTIONS = [
  { value: "", label: "Select biggest challenge (optional)" },
  { value: "Too much YouTube/short-form", label: "Too much YouTube/short-form" },
  { value: "Constant negotiation", label: "Constant negotiation" },
  { value: "Hard to build study habits", label: "Hard to build study habits" },
  { value: "Late-night usage", label: "Late-night usage" },
  { value: "Other", label: "Other" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: string): boolean {
  return value.trim() !== "" && EMAIL_REGEX.test(value.trim());
}

function getCaptureSource(): string {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source")?.trim() ?? "";
  const utmMedium = params.get("utm_medium")?.trim() ?? "";
  const utmCampaign = params.get("utm_campaign")?.trim() ?? "";
  if (utmSource || utmMedium || utmCampaign) {
    return `utm_source=${utmSource};utm_medium=${utmMedium};utm_campaign=${utmCampaign}`;
  }
  const referrer = document.referrer?.trim();
  if (!referrer) return "";
  try {
    const hostname = new URL(referrer).hostname;
    return hostname ? `referrerHost=${hostname}` : "";
  } catch {
    return "";
  }
}

export function WaitlistSection() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    setSource(getCaptureSource());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim() ?? "";

    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          childAgeRange: formData.get("childAgeRange") || undefined,
          biggestChallenge: formData.get("biggestChallenge") || undefined,
          source: source || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      const alreadyExists = Boolean(data.alreadyExists);
      track("waitlist_submit_success", { alreadyExists });

      router.push(`/thanks?email=${encodeURIComponent(email)}`);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="waitlist"
      className="py-10 sm:py-14 scroll-mt-24"
      aria-labelledby="waitlist-heading"
    >
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm max-w-xl">
        <h2
          id="waitlist-heading"
          className="text-xl font-semibold text-foreground tracking-tight prose-heading"
        >
          Be One of the First Families
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Join early access and get one month free when beta launches.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          noValidate
          aria-describedby={errorMessage ? "waitlist-email-error" : undefined}
        >
          <div>
            <label htmlFor="waitlist-email" className="block text-sm font-medium text-foreground mb-1">
              Email <span className="text-muted-foreground">(required)</span>
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              disabled={status === "loading"}
              aria-invalid={!!errorMessage}
              aria-describedby={errorMessage ? "waitlist-email-error" : undefined}
              className={`w-full rounded-lg border px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50 ${errorMessage ? "border-red-400" : "border-slate-300"}`}
            />
          </div>
          <div>
            <label htmlFor="waitlist-age" className="block text-sm font-medium text-foreground mb-1">
              Child age range <span className="text-muted-foreground">(optional)</span>
            </label>
            <select
              id="waitlist-age"
              name="childAgeRange"
              disabled={status === "loading"}
              aria-label="Child age range (optional)"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-foreground bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50"
            >
              {CHILD_AGE_OPTIONS.map((opt) => (
                <option key={opt.value || "empty"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="waitlist-challenge" className="block text-sm font-medium text-foreground mb-1">
              Biggest screen time challenge <span className="text-muted-foreground">(optional)</span>
            </label>
            <select
              id="waitlist-challenge"
              name="biggestChallenge"
              disabled={status === "loading"}
              aria-label="Biggest screen time challenge (optional)"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-foreground bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50"
            >
              {CHALLENGE_OPTIONS.map((opt) => (
                <option key={opt.value || "empty"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {errorMessage && (
            <p id="waitlist-email-error" className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-accent text-white px-4 py-3 text-sm font-medium hover:bg-accent/90 active:bg-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Joining…" : "Join Early Access"}
          </button>
        </form>
      </div>
    </section>
  );
}

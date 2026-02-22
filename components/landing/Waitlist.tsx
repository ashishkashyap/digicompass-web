"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/track";
import { Button } from "@/components/ui/Button";
import {
  WAITLIST,
  CHILD_AGE_OPTIONS,
  CHALLENGE_OPTIONS,
} from "@/lib/constants";
import { getAttributionForSend } from "@/lib/attribution";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: string): boolean {
  return value.trim() !== "" && EMAIL_REGEX.test(value.trim());
}

export function Waitlist() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim() ?? "";

    if (!email) {
      setStatus("error");
      setErrorMessage(WAITLIST.errors.emptyEmail);
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("error");
      setErrorMessage(WAITLIST.errors.invalidEmail);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const attribution = getAttributionForSend();
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          childAgeRange: formData.get("childAgeRange") || undefined,
          biggestChallenge: formData.get("biggestChallenge") || undefined,
          utm_source: attribution.utm_source,
          utm_medium: attribution.utm_medium,
          utm_campaign: attribution.utm_campaign,
          referrer: attribution.referrer,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || WAITLIST.errors.generic);
        return;
      }

      const alreadyExists = Boolean(data.alreadyExists);
      track("waitlist_submit_success", {
        alreadyExists,
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        referrer: attribution.referrer,
      });

      router.push(`/thanks?email=${encodeURIComponent(email)}`);
    } catch {
      setStatus("error");
      setErrorMessage(WAITLIST.errors.generic);
    }
  }

  return (
    <div className="rounded-3xl border border-stone-200/60 bg-white p-4 sm:p-6 shadow-card max-w-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="min-w-0">
          <h2
            id="waitlist-heading"
            className="text-xl font-bold text-foreground tracking-tight prose-heading section-title"
          >
            {WAITLIST.heading}
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground leading-loose max-w-lg">
            {WAITLIST.subline}
          </p>
          <p className="mt-1 text-sm text-foreground/85 leading-relaxed max-w-lg">
            {WAITLIST.reassuranceLine}
          </p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
            {WAITLIST.aboveFormLine}
          </p>
          <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-3.5"
        noValidate
        aria-describedby={errorMessage ? "waitlist-email-error" : undefined}
      >
        <div>
          <label
            htmlFor="waitlist-email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            {WAITLIST.emailLabel}{" "}
            <span className="text-muted-foreground">{WAITLIST.emailRequired}</span>
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={WAITLIST.emailPlaceholder}
            disabled={status === "loading"}
            aria-invalid={!!errorMessage}
            aria-describedby={errorMessage ? "waitlist-email-error" : undefined}
            className={`w-full rounded-xl border px-3 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-stone-50 ${errorMessage ? "border-red-400" : "border-stone-300"}`}
          />
        </div>
        <div>
          <label
            htmlFor="waitlist-age"
            className="block text-sm font-medium text-foreground mb-1"
          >
            {WAITLIST.childAgeLabel}{" "}
            <span className="text-muted-foreground">
              {WAITLIST.childAgeOptional}
            </span>
          </label>
          <select
            id="waitlist-age"
            name="childAgeRange"
            disabled={status === "loading"}
            aria-label={`${WAITLIST.childAgeLabel} ${WAITLIST.childAgeOptional}`}
            className="w-full rounded-xl border border-stone-300 px-3 py-2.5 text-foreground bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-stone-50"
          >
            {CHILD_AGE_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="waitlist-challenge"
            className="block text-sm font-medium text-foreground mb-1"
          >
            {WAITLIST.biggestChallengeLabel}{" "}
            <span className="text-muted-foreground">
              {WAITLIST.biggestChallengeOptional}
            </span>
          </label>
          <select
            id="waitlist-challenge"
            name="biggestChallenge"
            disabled={status === "loading"}
            aria-label={`${WAITLIST.biggestChallengeLabel} ${WAITLIST.biggestChallengeOptional}`}
            className="w-full rounded-xl border border-stone-300 px-3 py-2.5 text-foreground bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-stone-50"
          >
            {CHALLENGE_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {errorMessage && (
          <p
            id="waitlist-email-error"
            className="text-sm text-red-600"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={status === "loading"}
        >
          {status === "loading" ? WAITLIST.submitLoading : WAITLIST.submitLabel}
        </Button>
      </form>
          <p className="mt-3 text-xs text-muted-foreground/90 max-w-md leading-relaxed">
            {WAITLIST.belowButtonLine}
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80 max-w-md leading-relaxed">
            {WAITLIST.privacyLine}
          </p>
        </div>

        <div className="lg:pt-0 pt-2 border-t lg:border-t-0 lg:border-l border-stone-200/60 lg:pl-8">
          <h3 className="text-sm font-bold text-foreground tracking-tight mb-2.5">
            {WAITLIST.earlyAccessIncludesTitle}
          </h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground" role="list">
            {WAITLIST.earlyAccessIncludesBullets.map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {text}
              </li>
            ))}
          </ul>
          <p className="mt-2.5 text-xs text-muted-foreground/80 leading-relaxed">
            {WAITLIST.earlyAccessTrustLine}
          </p>
        </div>
      </div>
    </div>
  );
}

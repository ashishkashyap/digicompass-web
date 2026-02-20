"use client";

import { track } from "@/lib/track";

const BULLETS = [
  "Incentives, not just restrictions",
  "Parent-approved guardrails",
  "Built for real family life",
];

export function HeroSection() {
  const scrollTo = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinEarlyAccess = () => {
    track("cta_click_join_early_access");
    scrollTo("waitlist")();
  };

  const handleWatchDemo = () => {
    track("cta_click_watch_demo");
    scrollTo("demo")();
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16" aria-labelledby="hero-heading">
      <div className="max-w-3xl">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight leading-[1.15] prose-heading"
        >
          Guide Screen Time With Purpose.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          DigiCompass helps families build healthier digital habits through structure, incentives, and calm parental guidance.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleJoinEarlyAccess}
            className="rounded-lg bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent/90 active:bg-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Join Early Access
          </button>
          <button
            type="button"
            onClick={handleWatchDemo}
            className="rounded-lg border border-slate-300 bg-white text-foreground px-5 py-2.5 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Watch 60-sec demo
          </button>
        </div>
        <ul className="mt-7 space-y-2" role="list">
          {BULLETS.map((text, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent mt-0.5" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import { track } from "@/lib/track";
import { Section } from "@/components/landing/Section";
import { HERO } from "@/lib/constants";

export function Hero() {
  const scrollTo = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinEarlyAccess = () => {
    track("cta_click_join_early_access", { location: "hero" });
    scrollTo("waitlist")();
  };

  const handleSeeHowItWorks = () => {
    track("cta_click_see_how", { location: "hero" });
    scrollTo("how")();
  };

  return (
    <Section ariaLabelledBy="hero-heading" className="pt-14 sm:pt-12">
      <div className="max-w-3xl">
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-foreground tracking-tight leading-[1.2] prose-heading"
        >
          {HERO.heading}
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {HERO.subline}
        </p>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {HERO.clarifier}
        </p>
        <p className="mt-3 text-base font-medium text-foreground italic">
          {HERO.emotionalLine}
        </p>
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleJoinEarlyAccess}
            className="rounded-lg bg-accent text-white px-5 py-2.5 sm:py-3 text-sm font-semibold shadow-sm hover:bg-accent/90 hover:shadow active:bg-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {HERO.ctaPrimary}
          </button>
          <button
            type="button"
            onClick={handleSeeHowItWorks}
            className="rounded-lg border border-slate-300 bg-white text-foreground px-5 py-2.5 sm:py-3 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {HERO.ctaSecondary}
          </button>
        </div>
        <ul className="mt-5 space-y-1.5" role="list">
          {HERO.bullets.map((text, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-sm text-muted-foreground leading-relaxed"
            >
              <span
                className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent mt-0.5"
                aria-hidden
              />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

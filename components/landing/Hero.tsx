"use client";

import { track } from "@/lib/track";
import { Section } from "@/components/landing/Section";
import { Button } from "@/components/ui/Button";
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
    <Section ariaLabelledBy="hero-heading" className="pt-11 sm:pt-10 hero-bg overflow-hidden">
      <div className="max-w-3xl">
        <p className="text-sm text-muted-foreground tracking-tight mb-1.5">
          {HERO.kicker}
        </p>
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground tracking-tight leading-[1.12] prose-heading"
        >
          {HERO.heading}
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-loose max-w-xl">
          {HERO.subline}
        </p>
        <div className="mt-2.5 space-y-1.5">
          {HERO.clarifierLines.map((line, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-loose max-w-xl">
              {line}
            </p>
          ))}
        </div>
        <p className="mt-3 text-base font-medium text-foreground italic">
          {HERO.emotionalLine}
        </p>
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" onClick={handleJoinEarlyAccess}>
            {HERO.ctaPrimary}
          </Button>
          <Button variant="secondary" onClick={handleSeeHowItWorks}>
            {HERO.ctaSecondary}
          </Button>
        </div>
        <ul className="mt-5 space-y-1.5" role="list">
          {HERO.bullets.map((text, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-sm text-muted-foreground leading-loose"
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

"use client";

import { track } from "@/lib/track";
import { Section } from "@/components/landing/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DEMO } from "@/lib/constants";

export function DemoPlaceholder() {
  const scrollToWaitlist = () => {
    track("cta_click_join_early_access", { location: "demo" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="demo" ariaLabelledBy="demo-heading" className="pt-12 sm:pt-14">
      <Reveal>
      <h2
        id="demo-heading"
        className="text-xl font-bold text-foreground tracking-tight mb-5 prose-heading section-title"
      >
        {DEMO.heading}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground leading-loose max-w-xl mb-4">
        {DEMO.subtitle}
      </p>
      <div className="group max-w-2xl">
        <div className="rounded-3xl border border-stone-200/60 bg-stone-200/50 overflow-hidden shadow-demo-frame transition-all duration-300 group-hover-safe:scale-[1.01] group-hover-safe:shadow-demo-frame-hover">
          {/* Browser-like top bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-stone-200/50">
            <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
            <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
            <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
          </div>
          {/* Video frame with play icon */}
          <div className="aspect-video flex flex-col items-center justify-center gap-3 min-h-[160px] sm:min-h-[200px]">
            <div
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white border border-stone-200/60 shadow-card opacity-90 transition-all duration-300 group-hover-safe:opacity-100"
              aria-hidden
            >
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7 text-primary ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          <p className="text-sm text-muted-foreground">
            {DEMO.placeholderText}
          </p>
        </div>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground" role="list">
        {DEMO.previewBullets.map((text, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="flex h-1 w-1 rounded-full bg-stone-400" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Button variant="primary" onClick={scrollToWaitlist}>
          {DEMO.ctaLabel}
        </Button>
      </div>
      </Reveal>
    </Section>
  );
}

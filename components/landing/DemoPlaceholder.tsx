"use client";

import { track } from "@/lib/track";
import { Section } from "@/components/landing/Section";
import { DEMO } from "@/lib/constants";

export function DemoPlaceholder() {
  const scrollToWaitlist = () => {
    track("cta_click_join_early_access", { location: "demo" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="demo" ariaLabelledBy="demo-heading">
      <h2
        id="demo-heading"
        className="text-xl font-semibold text-foreground tracking-tight prose-heading"
      >
        {DEMO.heading}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground mb-4">
        {DEMO.subtitle}
      </p>
      <div className="rounded-2xl border border-stone-200 bg-stone-100/60 overflow-hidden shadow-sm max-w-2xl">
        {/* Browser-like top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-stone-200">
          <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
          <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
          <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
        </div>
        {/* Video frame with play icon */}
        <div className="aspect-video flex flex-col items-center justify-center gap-2 min-h-[160px] sm:min-h-[200px]">
          <div
            className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white border border-stone-200 shadow-sm"
            aria-hidden
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-primary ml-0.5"
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
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground" role="list">
        {DEMO.previewBullets.map((text, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="flex h-1 w-1 rounded-full bg-accent/80" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          type="button"
          onClick={scrollToWaitlist}
          className="rounded-xl bg-accent text-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-accent/90 hover:shadow active:bg-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {DEMO.ctaLabel}
        </button>
      </div>
    </Section>
  );
}

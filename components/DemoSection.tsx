"use client";

import { track } from "@/lib/track";

export function DemoSection() {
  const scrollToWaitlist = () => {
    track("cta_click_notify_demo");
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="demo"
      className="py-10 sm:py-14 scroll-mt-24"
      aria-labelledby="demo-heading"
    >
      <h2
        id="demo-heading"
        className="text-xl font-semibold text-foreground tracking-tight mb-5 prose-heading"
      >
        See DigiCompass in Action
      </h2>
      <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 overflow-hidden shadow-sm">
        <div className="aspect-video flex flex-col items-center justify-center gap-3 min-h-[180px] sm:min-h-[260px]">
          <div
            className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm"
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
          <p className="text-sm font-medium text-foreground px-4 text-center">
            Demo video coming soon (60–90 sec walkthrough).
          </p>
        </div>
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={scrollToWaitlist}
          className="rounded-lg border border-slate-300 bg-white text-foreground px-4 py-2.5 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Notify me when the demo is live
        </button>
      </div>
    </section>
  );
}

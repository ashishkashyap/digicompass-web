"use client";

import Link from "next/link";
import { track } from "@/lib/track";

export function SiteHeader() {
  const scrollToWaitlist = () => {
    track("cta_click_join_early_access", { location: "header" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-stone-200 bg-background/98 backdrop-blur-sm supports-[backdrop-filter]:bg-background/95"
      role="banner"
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14 sm:h-16 gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          DigiCompass
        </Link>
        <button
          type="button"
          onClick={scrollToWaitlist}
          className="shrink-0 rounded-xl bg-accent text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-accent/90 hover:shadow active:bg-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Join Early Access
        </button>
      </div>
    </header>
  );
}

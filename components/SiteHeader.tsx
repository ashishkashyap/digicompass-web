"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { track } from "@/lib/track";
import { Button } from "@/components/ui/Button";

const SCROLL_THRESHOLD = 10;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const now = window.scrollY > SCROLL_THRESHOLD;
      setScrolled((prev) => (prev !== now ? now : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWaitlist = () => {
    track("cta_click_join_early_access", { location: "header" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-stone-200 transition-[box-shadow,background-color] duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-background/85"
          : "bg-background/98 backdrop-blur-sm supports-[backdrop-filter]:bg-background/95"
      }`}
      role="banner"
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14 sm:h-16 gap-4">
        <Link
          href="/"
          className="text-lg sm:text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded inline-flex items-baseline gap-0.5"
        >
          Digi<span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-[-0.15em] align-middle" aria-hidden />Compass
        </Link>
        <Button variant="primary" size="sm" onClick={scrollToWaitlist} className="shrink-0">
          Request Early Access
        </Button>
      </div>
    </header>
  );
}

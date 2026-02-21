"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/**
 * Fires view_waitlist when the waitlist section enters the viewport.
 * Client-side only; uses IntersectionObserver. Disconnects after first view.
 */
export function TrackWaitlistView() {
  useEffect(() => {
    const el = document.getElementById("waitlist");
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          track("view_waitlist");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return null;
}

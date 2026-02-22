"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/track";
import { captureFromUrl } from "@/lib/attribution";

/**
 * Captures UTM params from URL into localStorage (7 days) and fires landing_view once.
 * Uses captureFromUrl() return value so landing_view always reflects current URL (e.g. ?utm_source=reddit).
 */
export function TrackLandingView() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const attribution = captureFromUrl();
    track("landing_view", {
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      referrer: attribution.referrer,
    });
  }, []);

  return null;
}

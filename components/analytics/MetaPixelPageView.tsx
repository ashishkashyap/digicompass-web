"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (action: string, eventName: string, ...args: unknown[]) => void;
  }
}

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;
    window.fbq("track", "PageView");
    if (process.env.NODE_ENV !== "production") {
      console.log("[Meta Pixel] PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

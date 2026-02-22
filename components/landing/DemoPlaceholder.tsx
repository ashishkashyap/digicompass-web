"use client";

import { useRef, useState, useEffect } from "react";
import { track } from "@/lib/track";
import { Section } from "@/components/landing/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DEMO } from "@/lib/constants";
import { getAttributionForSend } from "@/lib/attribution";

const DEMO_VIDEO_SRC = "/demo.mp4";

export function DemoPlaceholder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayOverlay, setShowPlayOverlay] = useState(true);

  const scrollToWaitlist = () => {
    track("cta_click_join_early_access", { location: "demo" });
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayClick = () => {
    const attribution = getAttributionForSend();
    track("video_play", {
      location: "demo",
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      referrer: attribution.referrer,
    });
    videoRef.current?.play();
    setShowPlayOverlay(false);
  };

  const handleWatchVideo = () => {
    const attribution = getAttributionForSend();
    track("video_play", {
      location: "hero_cta",
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      referrer: attribution.referrer,
    });
    document.getElementById("demo-video-frame")?.scrollIntoView({ behavior: "smooth" });
    videoRef.current?.play();
    setShowPlayOverlay(false);
  };

  const handleVideoEnded = () => {
    setShowPlayOverlay(true);
  };

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  }, []);

  return (
    <Section id="demo" ariaLabelledBy="demo-heading" className="pt-6 sm:pt-10">
      <Reveal>
      <h2
        id="demo-heading"
        className="text-xl font-bold text-foreground tracking-tight mb-3 sm:mb-5 prose-heading section-title"
      >
        {DEMO.heading}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground leading-loose max-w-xl mb-3 sm:mb-4">
        {DEMO.subtitle}
      </p>
      <div className="group max-w-2xl">
        <div className="rounded-3xl border border-stone-200/60 bg-stone-200/50 overflow-hidden shadow-demo-frame transition-all duration-300 group-hover-safe:scale-[1.01] group-hover-safe:shadow-lg">
          {/* Browser-like top bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white border-b border-stone-200/50">
            <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
            <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
            <span className="flex h-2.5 w-2.5 rounded-full bg-stone-300" aria-hidden />
          </div>
          {/* Video: aspect-ratio container + max-height on mobile to avoid dominating viewport; space reserved to prevent layout shift */}
          <div
            id="demo-video-frame"
            className="aspect-video relative w-full max-h-[240px] sm:max-h-none min-h-[160px] sm:min-h-[200px] bg-stone-900"
          >
            {/* Click-to-play only; no autoplay (required for mobile and Reddit). Sound on when user presses play. */}
            <video
              ref={videoRef}
              src={DEMO_VIDEO_SRC}
              className="absolute inset-0 z-0 h-full w-full object-contain"
              preload="metadata"
              controls
              playsInline
              onEnded={handleVideoEnded}
              onLoadedData={handleLoadedData}
              aria-label="DigiCompass product walkthrough"
            />
            {showPlayOverlay && (
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="pointer-events-auto flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white/95 border border-stone-200/60 shadow-card opacity-90 transition-all duration-300 hover:opacity-100 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Play video"
                  title="Play video"
                >
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-primary ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="mt-3 sm:mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground" role="list">
        {DEMO.previewBullets.map((text, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="flex h-1 w-1 rounded-full bg-stone-400" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3">
        <Button variant="secondary" onClick={handleWatchVideo}>
          Watch Video
        </Button>
        <Button variant="primary" onClick={scrollToWaitlist}>
          {DEMO.ctaLabel}
        </Button>
      </div>

      {/* Reinforcement block: emotion → logic → signup (tighter on mobile so CTA is reachable) */}
      <div className="mt-6 sm:mt-10 max-w-2xl">
        <h3 className="text-base font-bold text-foreground tracking-tight mb-2 sm:mb-3">
          {DEMO.reinforcementTitle}
        </h3>
        <ul className="space-y-1.5 sm:space-y-2 text-sm text-muted-foreground" role="list">
          {DEMO.reinforcementBullets.map((text, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {text}
            </li>
          ))}
        </ul>
        <div className="mt-3 sm:mt-4">
          <Button variant="primary" onClick={scrollToWaitlist}>
            {DEMO.ctaLabel}
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            {DEMO.reinforcementCtaCopy}
          </p>
        </div>
      </div>
      </Reveal>
    </Section>
  );
}

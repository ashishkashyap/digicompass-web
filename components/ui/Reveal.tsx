"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before transition runs */
  delay?: number;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[400ms] ease-out ${
        hasRevealed
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
      style={delay > 0 ? { transitionDelay: hasRevealed ? `${delay}ms` : "0ms" } : undefined}
    >
      {children}
    </div>
  );
}

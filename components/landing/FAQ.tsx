"use client";

import { useState, useCallback } from "react";
import { Section } from "@/components/landing/Section";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setOpenIndex((prev) => (prev === i ? null : i));
      }
    },
    []
  );

  return (
    <Section
      className="pb-14 sm:pb-16"
      ariaLabelledBy="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-xl font-bold text-foreground tracking-tight mb-5 prose-heading section-title"
      >
        FAQ
      </h2>
      <dl className="space-y-2">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-3xl border border-stone-200/60 bg-white shadow-card overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-full flex items-center justify-between gap-3 text-left px-4 sm:px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-stone-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{item.q}</span>
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-100 text-muted-foreground"
                    aria-hidden
                  >
                    {isOpen ? (
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`border-t border-stone-100 ${isOpen ? "block" : "hidden"}`}
              >
                <p className="px-4 sm:px-5 py-2.5 text-sm text-muted-foreground leading-loose max-w-xl">
                  {item.a}
                </p>
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}

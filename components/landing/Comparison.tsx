import { Section } from "@/components/landing/Section";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  return (
    <Section ariaLabelledBy="comparison-heading" className="pt-8 sm:pt-9">
      <h2
        id="comparison-heading"
        className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-4 prose-heading section-title"
      >
        {COMPARISON.heading}
      </h2>
      <div className="max-w-2xl rounded-xl border border-stone-200/60 bg-white overflow-hidden">
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/60">
          <div className="px-4 py-3 sm:py-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Traditional
            </h3>
            <ul className="space-y-1.5" role="list">
              {COMPARISON.traditional.map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-snug"
                >
                  <span
                    className="mt-1.5 flex h-1 w-1 shrink-0 rounded-full bg-stone-300"
                    aria-hidden
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-3 sm:py-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              DigiCompass
            </h3>
            <ul className="space-y-1.5" role="list">
              {COMPARISON.digicompass.map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-snug"
                >
                  <span
                    className="mt-1.5 flex h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

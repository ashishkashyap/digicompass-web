import { Section } from "@/components/landing/Section";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  return (
    <Section ariaLabelledBy="comparison-heading">
      <h2
        id="comparison-heading"
        className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-6 prose-heading"
      >
        {COMPARISON.heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground tracking-tight mb-3">
            {COMPARISON.left.title}
          </h3>
          <ul className="space-y-2" role="list">
            {COMPARISON.left.bullets.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <span
                  className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300"
                  aria-hidden
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border-2 border-accent/40 bg-accent/[0.07] p-4 sm:p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground tracking-tight mb-3">
            {COMPARISON.right.title}
          </h3>
          <ul className="space-y-2" role="list">
            {COMPARISON.right.bullets.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
              >
                <span
                  className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/landing/Section";
import { PILLARS } from "@/lib/constants";

export function Pillars() {
  return (
    <Section ariaLabelledBy="pillars-heading">
      <h2
        id="pillars-heading"
        className="text-xl font-semibold text-foreground tracking-tight mb-5 prose-heading"
      >
        {PILLARS.heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {PILLARS.items.map((item, i) => (
          <article
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow transition-shadow"
          >
            <h3 className="text-base font-semibold text-foreground tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground max-w-xl mx-auto">
        {PILLARS.disclaimer}
      </p>
    </Section>
  );
}

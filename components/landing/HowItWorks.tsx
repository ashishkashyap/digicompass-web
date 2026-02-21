import { Section } from "@/components/landing/Section";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how" ariaLabelledBy="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="text-xl font-semibold text-foreground tracking-tight mb-5 prose-heading"
      >
        {HOW_IT_WORKS.heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {HOW_IT_WORKS.steps.map((card, i) => (
          <article
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow transition-shadow"
          >
            <h3 className="text-base font-semibold text-foreground tracking-tight">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

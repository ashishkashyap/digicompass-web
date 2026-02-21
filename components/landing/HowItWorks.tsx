import { Section } from "@/components/landing/Section";
import { Reveal } from "@/components/ui/Reveal";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <Section id="how" ariaLabelledBy="how-it-works-heading">
      <Reveal>
      <h2
        id="how-it-works-heading"
        className="text-xl font-bold text-foreground tracking-tight mb-5 prose-heading section-title"
      >
        {HOW_IT_WORKS.heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {HOW_IT_WORKS.steps.map((card, i) => (
          <article
            key={i}
            className="rounded-3xl border border-stone-200/60 bg-white p-5 sm:p-6 shadow-card transition-shadow duration-200"
          >
            <h3 className="text-base font-medium text-foreground tracking-tight">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-loose">
              {card.description}
            </p>
          </article>
        ))}
      </div>
      </Reveal>
    </Section>
  );
}

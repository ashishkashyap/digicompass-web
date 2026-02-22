import { Section } from "@/components/landing/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/constants";

export function Pillars() {
  return (
    <Section ariaLabelledBy="pillars-heading" className="mid-section-tint pt-12 sm:pt-14">
      <Reveal>
      <h2
        id="pillars-heading"
        className="text-xl font-bold text-foreground tracking-tight mb-5 prose-heading section-title"
      >
        {PILLARS.heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {PILLARS.items.map((item, i) => (
          <article
            key={i}
            className="rounded-3xl border border-stone-200/60 bg-white p-5 sm:p-6 shadow-card transition-shadow duration-200"
          >
            <h3 className="text-base font-medium text-foreground tracking-tight">
              {item.title}
            </h3>
            {item.description ? (
              <p className="mt-1.5 text-sm text-muted-foreground leading-loose">
                {item.description}
              </p>
            ) : null}
            {"bullets" in item && item.bullets && item.bullets.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground max-w-lg leading-relaxed">
        {PILLARS.disclaimer}
      </p>
      </Reveal>
    </Section>
  );
}

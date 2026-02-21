import { Section } from "@/components/landing/Section";
import { TRUST_SECTION } from "@/lib/constants";

export function TrustSection() {
  return (
    <Section ariaLabelledBy="trust-heading">
      <h2
        id="trust-heading"
        className="text-xl font-semibold text-foreground tracking-tight mb-3 prose-heading"
      >
        {TRUST_SECTION.heading}
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
        {TRUST_SECTION.paragraph}
      </p>
      <ul className="mt-3 space-y-1.5" role="list">
        {TRUST_SECTION.bullets.map((text, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm text-muted-foreground leading-relaxed"
          >
            <span
              className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
              aria-hidden
            />
            {text}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted-foreground italic">
        {TRUST_SECTION.scarcityLine}
      </p>
    </Section>
  );
}

import { Section } from "@/components/landing/Section";
import { SOCIAL_PROOF } from "@/lib/constants";

export function SocialProof() {
  return (
    <Section ariaLabelledBy="social-proof-heading" className="py-6 sm:py-7">
      <h2
        id="social-proof-heading"
        className="sr-only"
      >
        Why families trust DigiCompass
      </h2>
      <ul
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        role="list"
      >
        {SOCIAL_PROOF.signals.map((text, i) => (
          <li key={i} className="flex items-center gap-2">
            <span
              className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400"
              aria-hidden
            />
            {text}
          </li>
        ))}
      </ul>
    </Section>
  );
}

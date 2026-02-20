const BULLETS = [
  "Encourages progress instead of punishment",
  "Makes screen time predictable",
  "Turns negotiation into structured decisions",
  "Supports balance, not control",
];

export function DifferentiatorsSection() {
  return (
    <section className="py-10 sm:py-14" aria-labelledby="differentiators-heading">
      <h2
        id="differentiators-heading"
        className="text-xl sm:text-2xl font-bold text-foreground tracking-tight max-w-xl prose-heading"
      >
        Most tools block. DigiCompass guides.
      </h2>
      <ul className="mt-5 space-y-2.5" role="list">
        {BULLETS.map((text, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            <span
              className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

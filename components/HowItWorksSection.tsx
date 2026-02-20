const CARDS = [
  {
    title: "Set Clear Boundaries",
    description:
      "Create limits and schedules that fit your family's routine.",
  },
  {
    title: "Kids Earn Extra Time",
    description:
      "Fun time can be unlocked through meaningful activities and progress.",
  },
  {
    title: "Stay In Control",
    description:
      "Approve requests, set caps, and guide — not fight — screen time decisions.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-10 sm:py-14" aria-labelledby="how-it-works-heading">
      <h2
        id="how-it-works-heading"
        className="text-xl font-semibold text-foreground tracking-tight mb-6 prose-heading"
      >
        How it works
      </h2>
      <div className="grid gap-5 sm:grid-cols-3">
        {CARDS.map((card, i) => (
          <article
            key={i}
            className="rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md"
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
    </section>
  );
}

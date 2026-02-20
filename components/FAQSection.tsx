const ITEMS = [
  {
    q: "Is DigiCompass a monitoring tool?",
    a: "No. DigiCompass focuses on guidance and structured boundaries, not surveillance.",
  },
  {
    q: "Does it read my child's messages?",
    a: "No. DigiCompass focuses on screen time structure and habits.",
  },
  {
    q: "When will beta launch?",
    a: "We're onboarding families in small groups to ensure quality.",
  },
];

export function FAQSection() {
  return (
    <section className="py-10 sm:py-14 pb-14 sm:pb-16" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-xl font-semibold text-foreground tracking-tight mb-5 prose-heading"
      >
        FAQ
      </h2>
      <dl className="space-y-4">
        {ITEMS.map((item, i) => (
          <div key={i} className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
            <dt className="text-sm font-semibold text-foreground">
              {item.q}
            </dt>
            <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

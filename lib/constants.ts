/**
 * Landing page copy and form options. Single source of truth for maintainability.
 */

// ——— Hero (A/B-ready headline) ———
export const HERO_VARIANT = "default" as "default" | "structure";

export const HERO = {
  kicker: "Structure, not power struggles.",
  heading: "Guide Screen Time With Purpose.",
  headingStructure: "Guide Screen Time With Structure — Not Power Struggles.",
  subline:
    "Healthier digital habits through structure, incentives, and calm guidance.",
  clarifierLines: [
    "e.g. 20 mins learning = 10 mins YouTube. Set limits; you control caps.",
    "Nudges in the moment; green/yellow/red insights for parents.",
  ],
  emotionalLine: "Screen time doesn't have to be a daily battle.",
  bullets: [
    "Earn time for learning + nudges",
    "Green / yellow / red parent insights",
    "Fine-grained rules + schedules + categories",
    "No content surveillance",
  ],
  ctaPrimary: "Join Early Access",
  ctaSecondary: "See how it works",
} as const;

// ——— Social proof: "Why we're building this" + trust signals ———
export const SOCIAL_PROOF = {
  whyHeading: "Why we're building this",
  whyLine: "70% of parents say screen time battles are a daily struggle. We're building DigiCompass to help families find a calmer path — with structure and incentives, not just limits.",
  signals: [
    "Privacy-first — we don't read messages",
    "No content surveillance",
    "Designed with real families",
  ],
} as const;

// ——— Nudges (shared intro + examples for skimmable section) ———
export const NUDGES = {
  intro: "Smart prompts before limits hit — kids can adjust without a hard stop.",
  examples: [
    "“10 mins left” warning",
    "“Earn more time” when they do learning",
    "Wind-down reminder before bed",
    "Category almost used up",
    "Optional heads-up for parents",
  ],
} as const;

// ——— How it works ———
export const HOW_IT_WORKS = {
  heading: "How it works",
  steps: [
    {
      title: "Set boundaries that match your routine",
      description: "",
      bullets: [
        "Per app & per domain",
        "Categories (e.g. entertainment, games)",
        "Weekday vs weekend",
        "Intra-day time windows",
      ],
    },
    {
      title: "Earn time for learning",
      description:
        "e.g. 20 mins Khan Academy = 10 mins YouTube. Caps and cooldowns you control.",
    },
    {
      title: "Nudges",
      description: NUDGES.intro,
      bullets: NUDGES.examples,
    },
  ],
} as const;

// ——— The DigiCompass Approach (4 pillars) ———
export const PILLARS = {
  heading: "The DigiCompass Approach",
  items: [
    {
      title: "Incentives",
      description:
        "Earn bonus time for learning; caps you control.",
      bullets: [
        "e.g. 20 mins learning = 10 mins YouTube",
        "Caps and cooldowns you set",
        "You choose what counts as learning",
      ],
    },
    {
      title: "Nudges",
      description: NUDGES.intro,
      bullets: NUDGES.examples,
    },
    {
      title: "Insights",
      description:
        "Green, yellow, red for usage patterns.",
      bullets: [
        "Green: on track, within your goals",
        "Yellow: approaching limits or shifting patterns",
        "Red: over limits or needs attention",
      ],
    },
    {
      title: "Fine-Grained Control",
      description: "",
      bullets: [
        "Per app",
        "Per domain",
        "Categories (e.g. entertainment, games)",
        "Weekday vs weekend rules",
        "Intra-day time windows",
      ],
    },
  ],
  disclaimer:
    "Structure and guidance only — no content surveillance.",
} as const;

// ——— Comparison: Incentives, Not Just Restrictions ———
export const COMPARISON = {
  heading: "Incentives, Not Just Restrictions.",
  intro: "e.g. 20 mins learning = 10 mins YouTube. You set caps and cooldowns.",
  traditional: [
    "Hard stop when time runs out",
    "Parents stuck negotiating",
    "Less habit formation",
  ],
  digicompass: [
    "Earn bonus time for learning",
    "Nudges before limits hit",
    "Insights + fine-grained schedules",
  ],
} as const;

// ——— Demo ———
export const DEMO = {
  heading: "See DigiCompass in Action",
  subtitle: "Watch a 60–90 second walkthrough.",
  challengeExample: "e.g. 20 mins Khan Academy = 10 mins YouTube.",
  previewBullets: [
    "Nudges in the moment",
    "Green/yellow/red parent insights",
    "Schedules + categories + per-site/app rules",
  ],
  ctaLabel: "Join Early Access",
  reinforcementTitle: "Why families are joining early access",
  reinforcementBullets: [
    "Earn bonus time for learning",
    "Nudges before limits hit",
    "Green / yellow / red insights",
    "Fine-grained control + schedules",
    "No content surveillance",
  ],
  reinforcementCtaCopy: "One month free at launch.",
} as const;

// ——— Early access strip (tiny, near waitlist) ———
export const EARLY_ACCESS_STRIP = {
  items: ["One month free at launch", "Early input on features", "No spam"],
} as const;

// ——— What you'll get in Early Access (compact strip above form) ———
export const EARLY_ACCESS_INCLUDES = {
  title: "What you'll get in Early Access",
  items: [
    { text: "Incentive-based earning model", rollingOut: false },
    { text: "Nudges + reminders", rollingOut: true },
    { text: "Green/yellow/red insights", rollingOut: true },
    { text: "Schedules + categories", rollingOut: false },
    { text: "Fine-grained per-site/app rules", rollingOut: false },
  ],
} as const;

// ——— Waitlist ———
export const WAITLIST = {
  heading: "Join the First 100 Families",
  subline:
    "Onboarding in small groups. One month free.",
  reassuranceLine:
    "Among the first to shape a calmer digital routine.",
  belowButtonLine: "Limited beta spots available.",
  privacyLine: "We'll only email about early access. No spam.",
  emailLabel: "Email",
  emailRequired: "(required)",
  emailPlaceholder: "you@example.com",
  childAgeLabel: "Child age range",
  childAgeOptional: "(optional)",
  biggestChallengeLabel: "Biggest screen-time challenge",
  biggestChallengeOptional: "(optional)",
  submitLabel: "Join Early Access",
  submitLoading: "Joining…",
  errors: {
    emptyEmail: "Please enter your email.",
    invalidEmail: "Please enter a valid email address.",
    generic: "Something went wrong. Please try again.",
  },
  earlyAccessIncludesTitle: "What early access includes",
  earlyAccessIncludesBullets: [
    "Beta access before public launch",
    "One month free at launch",
    "Help shape features with feedback",
    "No content surveillance",
  ],
  earlyAccessTrustLine: "We don't share your email. Unsubscribe anytime.",
} as const;

export const CHILD_AGE_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select age range (optional)" },
  { value: "<6", label: "<6" },
  { value: "6–9", label: "6–9" },
  { value: "10–13", label: "10–13" },
  { value: "14–17", label: "14–17" },
];

export const CHALLENGE_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select biggest challenge (optional)" },
  { value: "Too much YouTube/short-form", label: "Too much YouTube/short-form" },
  { value: "Constant negotiation", label: "Constant negotiation" },
  { value: "Hard to build study habits", label: "Hard to build study habits" },
  { value: "Late-night usage", label: "Late-night usage" },
  { value: "Other", label: "Other" },
];

// ——— FAQ ———
export const FAQ_ITEMS = [
  {
    q: "Is DigiCompass a monitoring tool?",
    a: "No. We focus on time and habits, not monitoring.",
  },
  {
    q: "Does it read my child's messages?",
    a: "No. Screen time and habits only.",
  },
  {
    q: "When will beta launch?",
    a: "Small groups first; we'll expand with feedback.",
  },
  {
    q: "What are nudges?",
    a: "Smart prompts before limits hit so kids can adjust without a hard stop.",
  },
  {
    q: "What do green/yellow/red insights mean?",
    a: "Patterns and trends for guidance, not surveillance.",
  },
  {
    q: "Can I control specific sites/apps and categories?",
    a: "Yes. Per-site/app rules, categories, and schedules.",
  },
  {
    q: "Does DigiCompass read messages or private content?",
    a: "No. Time and behavior only, not private content.",
  },
  {
    q: "Is DigiCompass a replacement for traditional parental control apps?",
    a: "It can complement them — earning and guidance.",
  },
  {
    q: "Will it work across devices?",
    a: "Rolling out in stages; more platforms with feedback.",
  },
] as const;

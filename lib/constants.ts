/**
 * Landing page copy and form options. Single source of truth for maintainability.
 */

// ——— Hero ———
export const HERO = {
  heading: "Guide Screen Time With Purpose.",
  subline:
    "DigiCompass helps families build healthier digital habits through structure, incentives, and calm parental guidance.",
  clarifierLines: [
    "Set limits and schedules. Kids earn flexibility through approved learning or productive time.",
    "Nudges guide in the moment; parents see green/yellow/red insights.",
  ],
  emotionalLine: "Screen time doesn't have to be a daily battle.",
  bullets: [
    "Incentives + nudges (not just blocking)",
    "Green / yellow / red parent insights",
    "Fine-grained rules + schedules + categories",
  ],
  ctaPrimary: "Join Early Access",
  ctaSecondary: "See how it works",
} as const;

// ——— Social proof (trust signals, no testimonials) ———
export const SOCIAL_PROOF = {
  heading: null as string | null,
  signals: [
    "Privacy-first — we don't read messages",
    "Designed with real families",
    "Focus on habits, not surveillance",
  ],
} as const;

// ——— How it works ———
export const HOW_IT_WORKS = {
  heading: "How it works",
  steps: [
    {
      title: "Set boundaries that match your routine",
      description:
        "Create daily/weekly limits, time windows, and category rules (entertainment, games, music, and more).",
    },
    {
      title: "Kids earn flexibility through progress",
      description:
        "Approved challenges and productive time can unlock bonus minutes — with caps you control.",
    },
    {
      title: "Nudges reduce friction",
      description:
        "Gentle reminders and choice prompts help kids stop earlier, switch tasks, or earn time — before conflict starts.",
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
        "Turn fun time into something earned — not endlessly negotiated.",
    },
    {
      title: "Nudges",
      description:
        "Guidance in the moment: heads-ups, stopping points, and better choices.",
    },
    {
      title: "Insights",
      description:
        "Green/yellow/red signals show patterns and trends at a glance.",
    },
    {
      title: "Fine-Grained Control",
      description:
        "Per-site/app limits plus schedules and parent-defined categories.",
    },
  ],
  disclaimer:
    "Designed for behavior guidance and structure — not content surveillance.",
} as const;

// ——— Comparison: Incentives, Not Just Restrictions ———
export const COMPARISON = {
  heading: "Incentives, Not Just Restrictions.",
  left: {
    title: "Traditional Controls",
    bullets: [
      "Time runs out → hard stop",
      "Parents stuck negotiating",
      "Limited flexibility",
      "Less habit formation",
    ],
  },
  right: {
    title: "DigiCompass",
    bullets: [
      "Earn bonus minutes via approved activities or productive time",
      "Nudges guide before limits hit",
      "Green/yellow/red insights for trends",
      "Fine-grained rules + schedules + categories",
    ],
  },
} as const;

// ——— Demo ———
export const DEMO = {
  heading: "See DigiCompass in Action",
  subtitle: "A 60–90 second walkthrough is coming soon.",
  placeholderText: "Demo video coming soon",
  previewBullets: [
    "Nudges in the moment",
    "Green/yellow/red parent insights",
    "Schedules + categories + per-site/app rules",
  ],
  ctaLabel: "Join Early Access",
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
    "We're onboarding early families in small groups. Early access includes one month free.",
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
    a: "No. We focus on guidance and structured boundaries, not surveillance.",
  },
  {
    q: "Does it read my child's messages?",
    a: "No. We focus on screen time structure and habits.",
  },
  {
    q: "When will beta launch?",
    a: "We're onboarding families in small groups.",
  },
  {
    q: "What are nudges?",
    a: "Gentle, timely prompts that help kids make better choices before limits become conflict.",
  },
  {
    q: "What do green/yellow/red insights mean?",
    a: "Simple signals for patterns and trends. For guidance, not surveillance.",
  },
  {
    q: "Can I control specific sites/apps and categories?",
    a: "Yes. Per-site/app rules, parent-defined categories, and daily/weekly schedules.",
  },
  {
    q: "Does DigiCompass read messages or private content?",
    a: "No. We focus on time structure and behavior patterns, not private content.",
  },
  {
    q: "Is DigiCompass a replacement for traditional parental control apps?",
    a: "It can complement them with an earning-and-guidance model.",
  },
  {
    q: "Will it work across devices?",
    a: "Early access is rolling out in stages; platform support will expand with feedback.",
  },
] as const;

import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Optional aria-labelledby for accessibility */
  ariaLabelledBy?: string;
  /** Extra class for scroll-margin (e.g. scroll-mt-24 for fixed headers) */
  className?: string;
}

export function Section({
  children,
  id,
  ariaLabelledBy,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto px-4 py-10 sm:py-12 ${id ? "scroll-mt-24" : ""} ${className}`.trim()}
      {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {})}
    >
      {children}
    </section>
  );
}

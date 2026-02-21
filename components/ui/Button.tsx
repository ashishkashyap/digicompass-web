"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** Full width (e.g. for form submit) */
  fullWidth?: boolean;
  /** Compact padding for header; lg for hero CTA */
  size?: "default" | "sm" | "lg";
}

const base =
  "inline-flex items-center justify-center font-medium rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed";

const primaryStyles =
  "bg-accent text-white shadow-sm hover:bg-accent/90 active:bg-accent/80 focus-visible:ring-accent hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] disabled:shadow-none disabled:translate-y-0";

const secondaryStyles =
  "border border-stone-300/80 bg-white text-foreground hover:bg-stone-50 hover:border-stone-400/80 active:bg-stone-100 focus-visible:ring-primary relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-stone-400/60 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-200 after:rounded-b-xl";

const sizeStyles: Record<"default" | "sm" | "lg", string> = {
  default: "px-5 py-2.5 sm:py-3 text-sm",
  sm: "px-4 py-2 text-sm",
  lg: "px-6 py-3 sm:py-3.5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      fullWidth = false,
      size = "default",
      className = "",
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = variant === "primary" ? primaryStyles : secondaryStyles;
    const widthClass = fullWidth ? "w-full" : "";
    const sizeClass = sizeStyles[size];

    return (
      <button
        ref={ref}
        type={type}
        className={`${base} ${variantClass} ${sizeClass} ${widthClass} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

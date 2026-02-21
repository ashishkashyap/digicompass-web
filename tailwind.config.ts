import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "muted-foreground": "var(--muted-foreground)",
        primary: "var(--primary)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 2px 6px -2px rgb(0 0 0 / 0.04)",
        "demo-frame": "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 2px 6px -2px rgb(0 0 0 / 0.04), inset 0 2px 8px 0 rgb(0 0 0 / 0.04)",
        "demo-frame-hover": "0 4px 12px -2px rgb(0 0 0 / 0.06), 0 6px 16px -4px rgb(0 0 0 / 0.04), inset 0 2px 8px 0 rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [
    function ({ addVariant }: { addVariant: (name: string, rule: string) => void }) {
      addVariant("group-hover-safe", "@media (hover: hover) { .group:hover & }");
    },
  ],
};
export default config;

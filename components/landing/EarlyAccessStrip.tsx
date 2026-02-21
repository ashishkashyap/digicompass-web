import { EARLY_ACCESS_STRIP } from "@/lib/constants";

export function EarlyAccessStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground mb-4">
      {EARLY_ACCESS_STRIP.items.map((text, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="text-stone-500" aria-hidden>✓</span>
          {text}
        </span>
      ))}
    </div>
  );
}

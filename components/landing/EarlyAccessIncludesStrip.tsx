import { EARLY_ACCESS_INCLUDES } from "@/lib/constants";

export function EarlyAccessIncludesStrip() {
  return (
    <div className="mb-4 max-w-xl">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
        {EARLY_ACCESS_INCLUDES.title}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground" role="list">
        {EARLY_ACCESS_INCLUDES.items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="flex h-1 w-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
            <span>{item.text}</span>
            {item.rollingOut && (
              <span className="text-[10px] text-muted-foreground/75 font-normal normal-case italic">
                — rolling out
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Client-side event tracking. Use only in 'use client' components.
 * In prod we'll swap to PostHog; for now we log in dev and prod.
 */
export function track(name: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const payload = props ? { name, ...props } : { name };
  console.log("[track]", payload);
}

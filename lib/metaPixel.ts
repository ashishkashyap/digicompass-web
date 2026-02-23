/**
 * Track a Lead event with optional form fields for Meta Pixel.
 * Only fires when fbq is available (client-side).
 */
export function trackMetaLead(payload: {
  childAgeRange?: string;
  biggestChallenge?: string;
}): void {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: (a: string, b: string, c?: object) => void }).fbq;
  if (typeof fbq !== "function") return;
  fbq("track", "Lead", {
    child_age: payload.childAgeRange || "",
    parent_pain: payload.biggestChallenge || "",
  });
  if (process.env.NODE_ENV !== "production") {
    console.log("[Meta Pixel] Lead");
  }
}

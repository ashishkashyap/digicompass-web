/**
 * Lightweight source attribution for waitlist (Reddit/LinkedIn/FB/IG).
 * Parses UTM from URL, stores in localStorage for 7 days, no dependencies.
 */

const STORAGE_KEY = "dc_utm";
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
};

function getStored(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Attribution & { expiresAt?: number };
    if (data.expiresAt && Date.now() > data.expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- strip expiresAt from stored payload
    const { expiresAt: _, ...attribution } = data;
    return attribution as Attribution;
  } catch {
    return null;
  }
}

/**
 * Parse utm_source, utm_medium, utm_campaign from URL and referrer;
 * store in localStorage for 7 days. Call on page load (client).
 */
export function captureFromUrl(): Attribution {
  const out: Attribution = {};
  if (typeof window === "undefined") return out;

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source")?.trim();
  const utmMedium = params.get("utm_medium")?.trim();
  const utmCampaign = params.get("utm_campaign")?.trim();
  let referrer: string | undefined;
  try {
    const r = document.referrer?.trim();
    if (r) referrer = r;
  } catch {
    // ignore
  }

  if (utmSource) out.utm_source = utmSource;
  if (utmMedium) out.utm_medium = utmMedium;
  if (utmCampaign) out.utm_campaign = utmCampaign;
  if (referrer) out.referrer = referrer;

  if (Object.keys(out).length > 0) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...out, expiresAt: Date.now() + TTL_MS })
      );
    } catch {
      // quota or disabled
    }
  }

  return out;
}

/**
 * Read stored attribution (from localStorage, valid for 7 days). Client-only.
 */
export function getAttribution(): Attribution | null {
  return getStored();
}

/**
 * Get attribution for API/analytics: stored value or capture from URL now.
 * Use when submitting waitlist or firing events.
 */
export function getAttributionForSend(): Attribution {
  const stored = getStored();
  if (stored && Object.keys(stored).length > 0) return stored;
  const fresh = captureFromUrl();
  return Object.keys(fresh).length > 0 ? fresh : {};
}

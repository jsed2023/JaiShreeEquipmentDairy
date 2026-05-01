export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID || "";

// ✅ Strong typing for gtag
type GtagCommand = "event" | "config" | "js";

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: GtagCommand, action: string, params?: GtagParams) => void;
  }
}

// ✅ Track custom events ONLY
export const trackEvent = (
  eventName: string,
  params?: GtagParams
): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, {
    ...params,

    // 🚫 Disable ads signals
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
};
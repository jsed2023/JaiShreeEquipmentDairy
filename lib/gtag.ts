

export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID || ""

// Extend window type safely
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

// ✅ Track custom events ONLY
export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
): void => {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("event", eventName, {
    ...params,

    // ❌ Ensure no ads signals accidentally
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}
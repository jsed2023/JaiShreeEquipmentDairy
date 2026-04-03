// lib/gtag.ts

export const GA_TRACKING_ID =
  process.env.NEXT_PUBLIC_GA_ID || ""

// Extend window type
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// ✅ Initialize gtag
export const initGA = () => {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []

  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  window.gtag = gtag

  window.gtag("js", new Date())

  window.gtag("config", GA_TRACKING_ID, {
    page_path: window.location.pathname,

    // ✅ Ads + Google Signals ENABLED (default behavior)
    // (no restrictions here)
  })
}

// ✅ Pageview tracking
export const pageview = (url: string): void => {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// ✅ Event tracking
export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
): void => {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("event", eventName, params)
}
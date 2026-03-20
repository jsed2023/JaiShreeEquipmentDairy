export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string

interface Gtag {
  (command: "config", targetId: string, config?: GtagConfig): void
  (command: "event", eventName: string, eventParams?: GtagEventParams): void
  (command: "js", config: Date): void
}

interface GtagConfig {
  page_path?: string
}

type GtagEventParams = Record<
  string,
  string | number | boolean | undefined
>

declare global {
  interface Window {
    gtag?: Gtag
  }
}

// ✅ Pageview
export const pageview = (url: string): void => {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// ✅ Event
export const trackEvent = (
  eventName: string,
  params?: GtagEventParams
): void => {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("event", eventName, params)
}
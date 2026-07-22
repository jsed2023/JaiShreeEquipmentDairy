import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import clsx from "clsx"
import { cld } from "@/utils/cloudinary"
import { Providers } from "./providers"
import { metaKeywords, siteConfig } from "@/config/site"
import { fontSans } from "@/config/fonts"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import WhatsAppButton from "@/components/WhatsAppButton"
import PageLoader from "@/components/PageLoader"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: metaKeywords[0].keywords,

  authors: [{ name: siteConfig.name }],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  category:
    "dairy equipment, milk testing equipment, milk  analyzer machices, automatic milk collection system",

  alternates: {
    canonical: siteConfig.url,
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "szRN11DRRCd9NtuijX2dAAtPfaV_EGAfuwSv_iM7t94",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,

    images: [
  {
    url: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902101/bp2mmtxztn5xuzjdeuop.png",
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  },
],
  },

  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: [cld(`${siteConfig.url}/logo.png`)],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">


      <body
        className={clsx(
          "min-h-screen flex flex-col",
          fontSans.variable
        )}
      >

        <LocalBusinessSchema />

        <Providers>
          <PageLoader>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />

              <main className="flex-grow max-w-7xl mx-auto w-full px-4">
                  {children}
              </main>

              <Footer />

              <WhatsAppButton />
            </div>
          </PageLoader>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-TX57822QFZ" />

      <GoogleTagManager gtmId=" GTM-N7N5234Q" />
    </html>
  )
}

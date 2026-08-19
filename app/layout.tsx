import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { GoogleTagManager } from "@next/third-parties/google"

import { cld } from "@/utils/cloudinary"
import { Providers } from "./providers"

import { metaKeywords, siteConfig } from "@/config/site"

import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import WhatsAppButton from "@/components/WhatsAppButton"
import PageLoader from "@/components/PageLoader"


const GTM_ID = "GTM-P3FFNTJ9"
const GA_ID = "G-RBFDTF7PWV"


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: metaKeywords[0].keywords,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.name,

  category:
    "dairy equipment, milk testing equipment, milk analyzer machines, automatic milk collection system",

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
        url:
          "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902101/bp2mmtxztn5xuzjdeuop.png",

        width: 1200,

        height: 630,

        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    description: siteConfig.description,

    images: [
      cld(`${siteConfig.url}/logo.png`),
    ],
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={GTM_ID} />

        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag(){
                dataLayer.push(arguments);
              }

              gtag('js', new Date());

              gtag('config', '${GA_ID}');
            `,
          }}
        />

        <LocalBusinessSchema />

        <Providers>
          <PageLoader>
            <div className="relative flex min-h-screen flex-col">

              <Navbar />

              <main className="grow max-w-7xl mx-auto w-full px-4">
                {children}
              </main>

              <Footer />

              <WhatsAppButton />

            </div>
          </PageLoader>
        </Providers>

      </body>
    </html>
  )
}
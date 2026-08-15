import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { cld } from "@/utils/cloudinary"
import { Providers } from "./providers"
import { metaKeywords, siteConfig } from "@/config/site"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import WhatsAppButton from "@/components/WhatsAppButton"
import PageLoader from "@/components/PageLoader"
import Script from "next/script"

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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* ================================================== */}
        {/* Google Tag Manager (Must be the FIRST item in head) */}
        {/* ================================================== */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6QSC89J');
          `}
        </Script>

        {/* ================================================== */}
        {/* Google Analytics 4 */}
        {/* ================================================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RBFDTF7PWV"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-RBFDTF7PWV');
          `}
        </Script>
      </head>

      <body>
        {/* ================================================== */}
        {/* Google Tag Manager - NOSCRIPT (Must be immediately after body) */}
        {/* ================================================== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6QSC89J"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

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
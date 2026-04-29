import "./globals.css"
import type { Metadata, Viewport } from "next"
import clsx from "clsx"
import Script from "next/script"
import { cld } from "@/utils/cloudinary"
import { Providers } from "./providers"
import { metaKeywords, siteConfig } from "@/config/site"
import { fontSans } from "@/config/fonts"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import WhatsAppButton from "@/components/WhatsAppButton"
import PageLoader from "@/components/PageLoader"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const GTM_ID = "GTM-K3VGDWGP"
const isProduction = process.env.NODE_ENV === "production"

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
category: "dairy equipment",
alternates: { canonical: siteConfig.url },
icons: { icon: "/favicon.ico" },
verification: {
google: "Pwgrtmz4YYu7wvKICR3xPoHIa52SsSz4bQwyBb9EG0A",
},
openGraph: {
type: "website",
locale: "en_IN",
url: siteConfig.url,
siteName: siteConfig.name,
description: siteConfig.description,
images: [
{
url: cld(`${siteConfig.url}/logo.png`),
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
return ( <html lang="en" suppressHydrationWarning> <head>
{/* ✅ Google Analytics — MUST be beforeInteractive */} <Script
       src="https://www.googletagmanager.com/gtag/js?id=G-RW4MD5X6R1"
       strategy="beforeInteractive"
     />
<Script
id="ga-init"
strategy="beforeInteractive"
dangerouslySetInnerHTML={{
__html: `               window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-RW4MD5X6R1');
            `,
}}
/>

```
    {/* ✅ Google Tag Manager (optional) */}
    {isProduction && (
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    )}
  </head>

  <body className={clsx("min-h-screen flex flex-col", fontSans.variable)}>
    
    {/* ✅ GTM fallback */}
    {isProduction && (
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    )}

    <LocalBusinessSchema />

    <Providers>
      <PageLoader>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-grow pt-20 pb-36">
            {children}
          </main>

          <Footer />
          <WhatsAppButton />
        </div>
      </PageLoader>
    </Providers>

    {isProduction && <SpeedInsights />}
    {isProduction && <Analytics />}
  </body>
</html>
)
}

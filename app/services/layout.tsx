import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Milk Analyzer Repair & Dairy Equipment Services in Rajasthan",

  description:
    "Jai Shree Equipment Dairy provides expert milk analyzer repair, AMCS installation, dairy equipment maintenance, calibration, and dairy machinery services in Rajasthan. Get fast, reliable, and affordable support for milk testing machines, ultrasonic milk stirrers, weighing scales, and dairy automation systems in Sri Ganganagar, Bikaner, Hanumangarh, Suratgarh, and nearby areas.",

  keywords: metaKeywords[4].keywords,

  authors: [
    {
      name: metaKeywords[4].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/services`,
  },

  openGraph: {
    title:
      "Milk Analyzer Repair & Dairy Equipment Services in Rajasthan",
    description:
      "Expert milk analyzer repair, AMCS installation, dairy equipment maintenance, calibration, and dairy machinery services in Rajasthan.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Milk Analyzer Repair & Dairy Equipment Services in Rajasthan",
    description:
      "Professional milk analyzer repair, dairy equipment installation, calibration, and maintenance services in Rajasthan.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
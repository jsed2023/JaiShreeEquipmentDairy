import { Metadata } from "next";
import { metaKeywords, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Jai Shree Equipment Dairy",
    template: "%s | Jai Shree Equipment Dairy",
  },

  description:
    "Jai Shree Equipment Dairy supplies milk analyzer machines and dairy equipment across Rajasthan.",

  keywords: metaKeywords[10]?.keywords,
authors: [
    {
      name: metaKeywords[10].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Dairy Equipment Locations | Jai Shree Equipment Dairy",
    description:
      "Find Jai Shree Equipment Dairy services across Rajasthan.",
    url: `${siteConfig.url}/locations`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export const revalidate = 86400;

export default function LocationsLayout({
  children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        {children}
      </section>
    );
  }
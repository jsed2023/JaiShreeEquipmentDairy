import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milk Analyzer Machines",

  description:
    "Explore advanced milk testing equipment including milk analyzers, lactometers, and dairy quality testing machines supplied by Jai Shree Equipment Dairy.",

  keywords: metaKeywords[14].keywords,

  authors: [
    {
      name: metaKeywords[14].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/milk-analyzer-machines`,
  },

  openGraph: {
    title: "Milk Anlayzer Machines | Jai Shree Equipment Dairy",
    description:
      "High-quality milk testing machines and analyzers for accurate dairy quality testing supplied by Jai Shree Equipment Dairy.",
    url: `${siteConfig.url}/milk-analyzer-machines`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milk Anlayzer Machines",
    description:
      "Reliable milk testing machines and analyzers for dairy farms and milk collection centers.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MilkAnlayzerMachinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
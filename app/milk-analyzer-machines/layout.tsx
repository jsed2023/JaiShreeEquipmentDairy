import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milk Analyzer Machines",

  description:
    "Explore advance Milk Analyzer Machines, Milk Fat Testing Machines , Lactoscan Milk Analyzers, Ekomilk Ultra Machines, FAT & SNF Testing Machines, and Dairy Quality Testing Equipment from Jai Shree Equipment Dairy. Get accurate milk analysis, fast testing results, dairy automation solutions, and reliable milk testing machines for dairy farms, milk collection centers, laboratories, and dairy processing units across Rajasthan and India.",

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
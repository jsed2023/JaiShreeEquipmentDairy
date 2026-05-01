import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {

  title: "Milk Rate Chart Generator",

  description:
    "Milk Rate Chart Generator – Upload your Excel file and instantly convert it into a digital FAT & SNF milk rate chart for DPU & dairy software | Jai Shree Equipment Dairy.",

  keywords: metaKeywords[6].keywords,

  authors: [
    {
      name: metaKeywords[6].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/milk-rate-chart`,
  },

  openGraph: {
    title: "Milk Rate Chart Generator",
    description:
      "Upload your Excel file and generate FAT & SNF milk rate chart instantly for DPU & dairy software.",
    url: `${siteConfig.url}/milk-rate-chart`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milk Rate Chart Generator",
    description:
      "Convert Excel into digital FAT & SNF milk rate chart for dairy software instantly.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MilkRateChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-gray-80">{children}</div>;
}
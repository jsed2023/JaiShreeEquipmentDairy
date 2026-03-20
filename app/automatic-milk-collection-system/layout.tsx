import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatic Milk Collection Systems",

  description:
    "Automatic Milk Collection Systems (AMCS) improve milk quality, transparency, and efficiency in dairy collection centers. Jai Shree Equipment Dairy supplies advanced AMCS solutions across Sri Ganganagar, Bikaner, Hanumangarh, and Anupgarh.",

  keywords: metaKeywords[1].keywords,

  authors: [
    {
      name: metaKeywords[1].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/automatic-milk-collection-system`,
  },

  openGraph: {
    title: "Automatic Milk Collection Systems | Jai Shree Equipment Dairy",
    description:
      "Upgrade dairy operations with Automatic Milk Collection Systems supplied by Jai Shree Equipment Dairy across Rajasthan.",
    url: `${siteConfig.url}/automatic-milk-collection-system`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Automatic Milk Collection Systems",
    description:
      "Advanced AMCS solutions for dairy farms and milk collection centers in Rajasthan.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AutomaticMilkCollectionSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
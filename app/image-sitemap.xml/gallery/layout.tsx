import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",

  description:
    "Explore the gallery of Jai Shree Equipment Dairy showcasing dairy equipment, installation work, machinery setup, and service activities in Sri Ganganagar, Rajasthan.",

  keywords: metaKeywords[8].keywords,

  authors: [
    {
      name: metaKeywords[8].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },

  openGraph: {
    title: "Dairy Equipment Gallery",
    description:
      "View photos of dairy equipment installations, machinery, and services by Jai Shree Equipment Dairy.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dairy Equipment Gallery",
    description:
      "Gallery of dairy equipment installations and machinery services by Jai Shree Equipment Dairy.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
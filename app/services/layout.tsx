import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dairy Equipment Services",

  description:
    "Professional dairy equipment services including installation, maintenance, and repair. Get reliable dairy machinery support from Jai Shree Equipment Dairy.",

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
    title: "Dairy Equipment Services",
    description:
      "Installation, maintenance, and repair services for dairy equipment. Trusted dairy machinery services from Jai Shree Equipment Dairy.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dairy Equipment Services",
    description:
      "Professional dairy equipment installation, maintenance and repair services.",
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
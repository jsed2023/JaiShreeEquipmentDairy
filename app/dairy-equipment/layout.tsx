import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dairy Equipment",

  description:
    "Explore high-quality dairy equipment including cream separators machines, milking machines, dairy automation systems supplied by Jai Shree Equipment Dairy.",

  keywords: metaKeywords[2].keywords,

  authors: [
    {
      name: metaKeywords[2].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/dairy-equipment`,
  },

  openGraph: {
    title: "Dairy Equipment | Jai Shree Equipment Dairy",
    description:
      "Buy reliable dairy equipment such as milking machines, cream separators from Jai Shree Equipment Dairy.",
    url: `${siteConfig.url}/dairy-equipment`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dairy Equipment",
    description:
      "High-quality dairy equipment including milking machines, cream separators.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DairyEquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
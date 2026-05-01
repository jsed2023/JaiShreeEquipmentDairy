import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",

  description:
    "Founded with a commitment to innovation and quality, Jai Shree Equipment Dairy is a trusted supplier of dairy equipment across Rajasthan, delivering reliable, efficient, and durable solutions for dairy farms and milk collection centers.",

  keywords: metaKeywords[7].keywords,

  authors: [
    {
      name: metaKeywords[7].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/about`,
  },

  openGraph: {
    title: "About Jai Shree Equipment Dairy",
    description:
      "Learn about the journey, mission, and expertise of Jai Shree Equipment Dairy in providing high-quality dairy equipment solutions.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Jai Shree Equipment Dairy",
    description:
      "Discover the story and mission behind Jai Shree Equipment Dairy and its commitment to the dairy industry.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
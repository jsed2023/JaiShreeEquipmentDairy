import { metaKeywords, siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dairy Blogs, Milk Testing Guides & Dairy Equipment Insights",

  description:
    "Read the latest dairy industry blogs, milk testing guides, dairy farming tips, milk analyzer insights, dairy automation articles, and dairy equipment knowledge from Jai Shree Equipment Dairy. Explore expert content on milk analyzers, AMCS systems, dairy machinery, milk collection units, and dairy processing equipment in Rajasthan.",

  keywords: metaKeywords[13].keywords,

  authors: [
    {
      name: metaKeywords[13].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },

  openGraph: {
    title:
      "Dairy Blogs, Milk Testing Guides & Dairy Equipment Insights",

    description:
      "Explore dairy farming blogs, milk testing equipment guides, dairy automation articles, and dairy machinery insights from Jai Shree Equipment Dairy.",

    url: `${siteConfig.url}/blog`,

    siteName: siteConfig.name,

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Dairy Blogs, Milk Testing Guides & Dairy Equipment Insights",

    description:
      "Latest dairy blogs, milk analyzer guides, dairy automation articles, and dairy equipment updates from Jai Shree Equipment Dairy.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      {children}
    </div>
  );
}
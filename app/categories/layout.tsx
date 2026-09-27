import { metaKeywords, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",

  description:
    "Explore dairy equipment, milk analyzers, spare parts, cream separators, milk collection systems, and automation. Find the right solution today!",

  keywords: metaKeywords[12].keywords,

  authors: [
    {
      name: metaKeywords[12].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/categories`,
  },

  openGraph: {
    title: "Dairy Equipment Categories | Jai Shree Equipment Dairy",
    description:
      "Explore milk analyzers, testing machine spare parts, cream separators, milk collection systems, and dairy automation solutions.",
    url: `${siteConfig.url}/categories`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dairy Equipment Categories | Jai Shree Equipment Dairy",
    description:
      "Explore dairy equipment, milk analyzers, spare parts, cream separators, milk collection systems, and automation solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CategoriesLayout({
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
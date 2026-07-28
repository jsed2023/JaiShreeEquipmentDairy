import { metaKeywords, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",

  description:
    "Explore advanced dairy equipment machines and milk testing solutions from Jai Shree Equipment Dairy including milk analyzers, milking machines, cream separators, and automation systems.",

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
      "Browse dairy equipment categories including milk testing machines, milking machines, cream separators and dairy automation systems.",
    url: `${siteConfig.url}/categories`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dairy Equipment Categories",
    description:
      "Explore categories of dairy equipment and milk testing machines from Jai Shree Equipment Dairy.",
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
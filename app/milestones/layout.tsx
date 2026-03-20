import { metaKeywords, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestones",

  description:
    "Explore the journey, growth, and achievements of Jai Shree Equipment Dairy and how it has supported dairy farmers with quality equipment and services.",

  keywords: metaKeywords[11].keywords,

  authors: [
    {
      name: metaKeywords[11].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/milestones`,
  },

  openGraph: {
    title: "Milestones - Jai Shree Equipment Dairy",
    description:
      "Discover the key milestones, achievements, and growth journey of Jai Shree Equipment Dairy.",
    url: `${siteConfig.url}/milestones`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milestones",
    description:
      "The journey and achievements of Jai Shree Equipment Dairy supporting dairy farmers with modern equipment.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MilestonesLayout({
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
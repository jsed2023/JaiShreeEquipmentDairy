import { metaKeywords, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials",

  description:
    "Read genuine customer testimonials for Jai Shree Equipment Dairy. Trusted by dairy farmers and dairy processing units across Sri Ganganagar, Bikaner, Hanumangarh, and Anupgarh.",

  keywords: metaKeywords[9].keywords,

  authors: [
    {
      name: metaKeywords[9].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/testimonials`,
  },

  openGraph: {
    title: "Customer Testimonials - Jai Shree Equipment Dairy",
    description:
      "See what dairy farmers and dairy businesses say about Jai Shree Equipment Dairy products and services.",
    url: `${siteConfig.url}/testimonials`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Customer Testimonials",
    description:
      "Real customer reviews and testimonials for dairy equipment supplied by Jai Shree Equipment Dairy.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
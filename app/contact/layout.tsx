import { metaKeywords } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Jai Shree Equipment Dairy for milk analyzers, DPU milk collection units, milking machines and dairy equipment in Sri Ganganagar, Bikaner, Hanumangarh and Anupgarh. Call or WhatsApp for price and service support.",

  keywords: metaKeywords[5].keywords,
  authors: [{ name: metaKeywords[5].name }],
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://jaishreeequipmentdairy.in/contact",
  },

  openGraph: {
    title: "Contact",
    description:
      "Contact for milk analyzer, DPU and dairy equipment sales & service across Rajasthan.",
    url: "https://jaishreeequipmentdairy.in/contact",
    siteName: "Jai Shree Equipment Dairy",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}

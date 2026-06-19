import { metaKeywords, siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milk Testing Machine Spare Parts",

  description:
    "Buy genuine milk testing machine spare parts including PCB, sensors, displays and accessories for Ekomilk, Advance and Lactoscan analyzers. Available across Rajasthan and India.",

  keywords: metaKeywords[15].keywords,

  authors: [
    {
      name: metaKeywords[15].name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/milk-testing-machine-spare-parts`,
  },

  openGraph: {
    title: "Milk Testing Machine Spare Parts - Jai Shree Equipment Dairy",
    description:
      "Premium quality milk analyzer spare parts, dairy equipment spare parts, AMCU spare parts and milk testing machine accessories available across India.",
    url: `${siteConfig.url}/milk-testing-machine-spare-parts`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milk Testing Machine Spare Parts",
    description:
      "Shop milk analyzer spare parts, sensors, pumps, PCB boards, thermal printers, LCD displays and dairy equipment components.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MilkTestingMachineSparePartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
      {children}
    </section>
  );
}
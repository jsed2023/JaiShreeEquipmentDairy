import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

type Props = {
  children: ReactNode;
  params: {
    "location-name": string;
  };
};

// =========================
// Generate Static Params
// =========================

export async function generateStaticParams() {
  return rajasthanLocations.map((city) => ({
    "location-name": `milk-analyzer-${city.slug}`,
  }));
}

// =========================
// Prevent Random URLs
// =========================

export const dynamicParams = false;

// =========================
// ISR
// =========================

export const revalidate = 86400;

// =========================
// Dynamic Metadata
// =========================

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  // =========================
  // Decode URL
  // =========================

  const rawParam = decodeURIComponent(params["location-name"]);

  // =========================
  // Normalize URL
  // =========================

  const normalizedParam = rawParam.toLowerCase().trim();

  // =========================
  // URL Prefix
  // =========================

  const prefix = "milk-analyzer-";

  // =========================
  // Validate Prefix
  // =========================

  if (!normalizedParam.startsWith(prefix)) {
    notFound();
  }

  // =========================
  // Extract Slug
  // =========================

  const locationSlug = normalizedParam.replace(prefix, "");

  // =========================
  // Validate Location
  // =========================

  const validLocation = rajasthanLocations.find(
    (city) => city.slug === locationSlug
  );

  if (!validLocation) {
    notFound();
  }

  // =========================
  // City Name
  // =========================

  const cityName = validLocation.city;

  // =========================
  // Canonical URL
  // =========================

  const url = `${siteConfig.url}/locations/${normalizedParam}`;

  return {
    // =========================
    // Title
    // =========================

    title: `Milk Analyzer Machine Supplier in ${cityName}`,

    // =========================
    // Description
    // =========================

    description: `Jai Shree Equipment Dairy supplies milk analyzer machines, dairy equipment, milking machines and automatic milk collection systems in ${cityName}.`,

    // =========================
    // Keywords
    // =========================

    keywords: [
      `Milk Analyzer Machine ${cityName}`,
      `Milk Analyzer Supplier ${cityName}`,
      `Milk Testing Machine ${cityName}`,
      `Dairy Equipment ${cityName}`,
      `Automatic Milk Collection System ${cityName}`,
      `Milk Analyzer Dealer ${cityName}`,
      `Milk Analyzer Price ${cityName}`,
      `Milk Collection Machine ${cityName}`,
      `Milk Testing Equipment ${cityName}`,
      `Dairy Machine Supplier ${cityName}`,
    ],

    // =========================
    // Canonical
    // =========================

    alternates: {
      canonical: url,
    },

    // =========================
    // Robots
    // =========================

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    // =========================
    // Open Graph
    // =========================

    openGraph: {
      title: `Milk Analyzer Machine Supplier in ${cityName}`,

      description: `Buy Milk Analyzer Machines, Milking Machines, Cream Separator Machines and Automatic Milk Collection Systems in ${cityName}.`,

      url,

      siteName: siteConfig.name,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
          width: 1200,
          height: 630,
          alt: `Milk Analyzer Machine Supplier in ${cityName}`,
        },
      ],
    },

    // =========================
    // Twitter
    // =========================

    twitter: {
      card: "summary_large_image",

      title: `Milk Analyzer Machine Supplier in ${cityName}`,

      description: `Trusted supplier of Milk Analyzer Machines and Dairy Equipment in ${cityName}.`,

      images: [
        "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
      ],
    },
  };
}

// =========================
// Layout
// =========================

export default function LocationLayout({
  children,
}: Props) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {children}
    </section>
  );
}
import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";

import { rajasthanLocations }
from "@/lib/rajasthan-locations";

type Props = {
  children: React.ReactNode;

  params: {
    location: string;
  };
};

// =========================
// Format City Name
// =========================

function formatCityName(slug: string) {

  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
}

// =========================
// Generate Static Params
// =========================

export async function generateStaticParams() {

  return rajasthanLocations.map(
    (city) => ({
      location:
        `milk-analyzer-${city.slug}`,
    })
  );
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

  const rawParam =
    decodeURIComponent(
      params.location
    );

  const normalizedParam =
    rawParam
      .toLowerCase()
      .trim();

  const prefix =
    "milk-analyzer-";

  // Validate Prefix
  if (
    !normalizedParam.startsWith(prefix)
  ) {
    notFound();
  }

  // Extract Slug
  const locationSlug =
    normalizedParam.replace(
      prefix,
      ""
    );

  // Validate Location
  const validLocation =
    rajasthanLocations.find(
      (city) =>
        city.slug === locationSlug
    );

  if (!validLocation) {
    notFound();
  }

  // Use Real City Name
  const cityName =
    validLocation.city;

  // Canonical URL
  const url =
    `${siteConfig.url}/${normalizedParam}`;

  return {

    // =========================
    // Title
    // =========================

    title:
      `Milk Analyzer Machine Supplier in ${cityName} | Jai Shree Equipment Dairy`,

    // =========================
    // Description
    // =========================

    description:
      `Jai Shree Equipment Dairy supplies milk analyzer machines, dairy equipment, milking machines and automatic milk collection systems in ${cityName}.`,

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
      },
    },

    // =========================
    // Open Graph
    // =========================

    openGraph: {

      title:
        `Milk Analyzer Machine Supplier in ${cityName}`,

      description:
        `Dairy equipment and milk analyzer machine supplier in ${cityName}.`,

      url,

      siteName:
        siteConfig.name,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url:
            "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",

          width: 1200,

          height: 630,

          alt:
            `Milk Analyzer Machine in ${cityName}`,
        },
      ],
    },

    // =========================
    // Twitter
    // =========================

    twitter: {

      card:
        "summary_large_image",

      title:
        `Milk Analyzer Machine Supplier in ${cityName}`,

      description:
        `Milk analyzer machine and dairy equipment supplier in ${cityName}.`,

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
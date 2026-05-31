import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { metaKeywords, siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

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
  return rajasthanLocations.map((city) => ({
    location: `milk-analyzer-${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
  }));
}

// =========================
// Prevent Random Dynamic URLs
// =========================
export const dynamicParams = false;

// =========================
// Dynamic Metadata
// =========================
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  // Decode URL param
  const rawParam = decodeURIComponent(
    params.location
  );

  // Normalize URL
  const normalizedParam = rawParam
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  // URL Prefix
  const prefix = "milk-analyzer-";

  // Validate Prefix
  if (!normalizedParam.startsWith(prefix)) {
    notFound();
  }

  // Extract City Slug
  const locationSlug = normalizedParam.slice(
    prefix.length
  );

  // Validate City Exists
  const validCity = rajasthanLocations.find(
    (city) =>
      city.toLowerCase().replace(/\s+/g, "-") ===
      locationSlug
  );

  // Invalid City → 404
  if (!validCity) {
    notFound();
  }

  // Format City Name
  const cityName = formatCityName(
    locationSlug
  );

  // =========================
  // IMPORTANT
  // Because you are using rewrites,
  // canonical should NOT contain /locations
  // =========================

  const url =
    `https://jaishreeequipmentdairy.in/${normalizedParam}`;

  // SEO Keywords
  const keywords = [
    `milk analyzer in ${cityName}`,
    `milk analyzer machine in ${cityName}`,
    `milk analyzer price in ${cityName}`,
    `milk analyzer supplier in ${cityName}`,
    `milk analyzer dealer in ${cityName}`,
    `buy milk analyzer machine in ${cityName}`,
    `milk testing machine in ${cityName}`,
    `milk fat testing machine in ${cityName}`,
    `dairy equipment in ${cityName}`,
    `dairy equipment supplier in ${cityName}`,
    `milking machine in ${cityName}`,
    `cow milking machine in ${cityName}`,
    `buffalo milking machine in ${cityName}`,
    `cream separator machine in ${cityName}`,
    `automatic milk collection system in ${cityName}`,
    `dpu milk collection unit in ${cityName}`,
    `milk analyzer installation in ${cityName}`,
    `milk analyzer repair service in ${cityName}`,
  ];

  return {

    // =========================
    // Title
    // =========================
    title:
      `Milk Analyzer Machine in ${cityName} | Dairy Equipment Supplier`,

    // =========================
    // Description
    // =========================
    description:
      `Buy milk analyzer machine in ${cityName} at best price. We provide milk testing machines, dairy equipment, milking machines, cream separator machines, DPU systems, installation and repair services in ${cityName}.`,

    // =========================
    // Keywords
    // =========================
    keywords,

    // =========================
    // Authors
    // =========================
    authors: [
      {
        name:
          metaKeywords?.[10]?.name ||
          "Jai Shree Equipment Dairy",
      },
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
      },
    },

    // =========================
    // Open Graph
    // =========================
    openGraph: {

      title:
        `Milk Analyzer Machine in ${cityName}`,

      description:
        `Best milk analyzer and dairy equipment supplier in ${cityName}.`,

      url,

      siteName: siteConfig.name,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url:
            "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",

          width: 1200,

          height: 630,

          alt:
            `Milk Analyzer in ${cityName}`,
        },
      ],
    },

    // =========================
    // Twitter
    // =========================
    twitter: {

      card: "summary_large_image",

      title:
        `Milk Analyzer Machine in ${cityName}`,

      description:
        `Buy milk analyzer machine in ${cityName} with installation and repair service.`,

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

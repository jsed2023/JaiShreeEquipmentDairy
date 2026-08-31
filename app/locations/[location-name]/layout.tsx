import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

/* =========================
   TYPES
========================= */

type LocationParams = {
  "location-name": string;
};

type LayoutProps = {
  children: ReactNode;
  params: Promise<LocationParams>;
};

type MetadataProps = {
  params: Promise<LocationParams>;
};

/* =========================
   CONSTANTS
========================= */

const PREFIX = "milk-analyzer-";

const LOCATION_IMAGE =
  "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png";

/* =========================
   FORCE DYNAMIC
========================= */

export const dynamic = "force-dynamic";

/* =========================
   LOCATION VALIDATION
========================= */

function getValidLocation(locationName: string) {
  const normalizedParam = locationName
    .toLowerCase()
    .trim();

  if (!normalizedParam.startsWith(PREFIX)) {
    notFound();
  }

  const locationSlug =
    normalizedParam.slice(PREFIX.length);

  if (!locationSlug) {
    notFound();
  }

  const validLocation =
    rajasthanLocations.find(
      (location) =>
        location.slug.toLowerCase() === locationSlug
    );

  if (!validLocation) {
    notFound();
  }

  return validLocation;
}

/* =========================
   DYNAMIC METADATA
========================= */

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const {
    "location-name": locationName,
  } = await params;

  if (!locationName) {
    notFound();
  }

  const validLocation =
    getValidLocation(locationName);

  const cityName = validLocation.city;

  /* =========================
     CANONICAL URL
  ========================= */

  const url =
    `${siteConfig.url}/${PREFIX}${validLocation.slug}`;

  /* =========================
     SEO TITLE
  ========================= */

  const title =
    `Milk Analyzer Machine Supplier in ${cityName}`;

  /* =========================
     DESCRIPTION
  ========================= */

  const description =
    `Jai Shree Equipment Dairy supplies milk analyzer machines, dairy equipment, milk cream separator machines and automatic milk collection systems in ${cityName}.`;

  /* =========================
     OPEN GRAPH
  ========================= */

  const ogDescription =
    `Buy Milk Analyzer Machines, Milking Machines, Cream Separator Machines and Automatic Milk Collection Systems in ${cityName}.`;

  /* =========================
     TWITTER
  ========================= */

  const twitterDescription =
    `Trusted supplier of Milk Analyzer Machines and Dairy Equipment in ${cityName}.`;

  /* =========================
     RETURN METADATA
  ========================= */

  return {
    title,

    description,

    keywords: [
      `Milk Analyzer Machine ${cityName}`,
      `Milk Analyzer Supplier ${cityName}`,
      `Milk Testing Machine ${cityName}`,
      `Milk Testing Instrument ${cityName}`,
      `Dairy Equipment ${cityName}`,
      `Automatic Milk Collection System ${cityName}`,
      `Milk Analyzer Dealer ${cityName}`,
      `Milk Analyzer Price ${cityName}`,
      `Milk Collection Machine ${cityName}`,
      `Milk Testing Equipment ${cityName}`,
      `Dairy Machine Supplier ${cityName}`,
      `Ekomilk Machine ${cityName}`,
      `Cream Separator Machine ${cityName}`,
    ],

    alternates: {
      canonical: url,
    },

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

    openGraph: {
      title,

      description: ogDescription,

      url,

      siteName: siteConfig.name,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: LOCATION_IMAGE,
          width: 1200,
          height: 630,
          alt:
            `Milk Analyzer Machine Supplier in ${cityName}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description: twitterDescription,

      images: [LOCATION_IMAGE],
    },
  };
}

/* =========================
   LAYOUT
========================= */

export default async function LocationLayout({
  children,
  params,
}: LayoutProps) {
  const {
    "location-name": locationName,
  } = await params;

  if (!locationName) {
    notFound();
  }

  /*
   * Validate the requested location.
   * Invalid location URLs return 404.
   */

  getValidLocation(locationName);

  return (
    <section
      className="
        min-h-screen
        bg-linear-to-b
        from-slate-50
        to-white
        dark:from-zinc-950
        dark:to-zinc-900
      "
    >
      {children}
    </section>
  );
}
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
   GENERATE STATIC PARAMS
========================= */

export async function generateStaticParams() {
  return rajasthanLocations.map((location) => ({
    "location-name": `milk-analyzer-${location.slug}`,
  }));
}

/* =========================
   PREVENT RANDOM URLS
========================= */

export const dynamicParams = false;

/* =========================
   ISR
========================= */

export const revalidate = 86400;

/* =========================
   DYNAMIC METADATA
========================= */

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  /* =========================
     UNWRAP PARAMS
  ========================= */

  const { "location-name": locationName } = await params;

  if (!locationName) {
    notFound();
  }

  /* =========================
     DECODE URL
  ========================= */

  let rawParam: string;

  try {
    rawParam = decodeURIComponent(locationName);
  } catch {
    notFound();
  }

  /* =========================
     NORMALIZE URL
  ========================= */

  const normalizedParam = rawParam
    .toLowerCase()
    .trim();

  /* =========================
     URL PREFIX
  ========================= */

  const prefix = "milk-analyzer-";

  /* =========================
     VALIDATE PREFIX
  ========================= */

  if (!normalizedParam.startsWith(prefix)) {
    notFound();
  }

  /* =========================
     EXTRACT SLUG
  ========================= */

  const locationSlug = normalizedParam.slice(
    prefix.length
  );

  if (!locationSlug) {
    notFound();
  }

  /* =========================
     VALIDATE LOCATION
  ========================= */

  const validLocation = rajasthanLocations.find(
    (location) =>
      location.slug.toLowerCase() ===
      locationSlug.toLowerCase()
  );

  if (!validLocation) {
    notFound();
  }

  /* =========================
     CITY NAME
  ========================= */

  const cityName = validLocation.city;

  /* =========================
     CANONICAL URL
  ========================= */

  const url =
    `${siteConfig.url}/locations/milk-analyzer-${validLocation.slug}`;

  /* =========================
     SEO TITLE
  ========================= */

  const title =
    `Milk Analyzer Machine Supplier in ${cityName}`;

  /* =========================
     SEO DESCRIPTION
  ========================= */

  const description =
    `Jai Shree Equipment Dairy supplies milk analyzer machines, dairy equipment, milking machines and automatic milk collection systems in ${cityName}.`;

  /* =========================
     METADATA
  ========================= */

  return {
    title,

    description,

    /* =========================
       KEYWORDS
    ========================= */

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
      `milk testing instrument ${cityName}`,
    ],

    /* =========================
       CANONICAL
    ========================= */

    alternates: {
      canonical: url,
    },

    /* =========================
       ROBOTS
    ========================= */

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

    /* =========================
       OPEN GRAPH
    ========================= */

    openGraph: {
      title,

      description:
        `Buy Milk Analyzer Machines, Milking Machines, Cream Separator Machines and Automatic Milk Collection Systems in ${cityName}.`,

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

    /* =========================
       TWITTER
    ========================= */

    twitter: {
      card: "summary_large_image",

      title,

      description:
        `Trusted supplier of Milk Analyzer Machines and Dairy Equipment in ${cityName}.`,

      images: [
        "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
      ],
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
  /* =========================
     UNWRAP PARAMS
  ========================= */

  const { "location-name": locationName } = await params;

  if (!locationName) {
    notFound();
  }

  /* =========================
     DECODE PARAM
  ========================= */

  let rawParam: string;

  try {
    rawParam = decodeURIComponent(locationName);
  } catch {
    notFound();
  }

  /* =========================
     NORMALIZE
  ========================= */

  const normalizedParam = rawParam
    .toLowerCase()
    .trim();

  const prefix = "milk-analyzer-";

  /* =========================
     VALIDATE PREFIX
  ========================= */

  if (!normalizedParam.startsWith(prefix)) {
    notFound();
  }

  /* =========================
     EXTRACT LOCATION
  ========================= */

  const locationSlug = normalizedParam.slice(
    prefix.length
  );

  if (!locationSlug) {
    notFound();
  }

  /* =========================
     CHECK LOCATION
  ========================= */

  const validLocation = rajasthanLocations.find(
    (location) =>
      location.slug.toLowerCase() ===
      locationSlug.toLowerCase()
  );

  if (!validLocation) {
    notFound();
  }

  /* =========================
     RETURN
  ========================= */

  return (
    <section
      className="
        min-h-screen
        bg-linear-to-b
        from-slate-50 to-white
        dark:from-zinc-950
        dark:to-zinc-900
      "
    >
      {children}
    </section>
  );
}
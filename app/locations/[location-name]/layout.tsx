import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { getLocationSEOContent } from "@/lib/location-seo-content";


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


const PREFIX = "milk-analyzer-";

const LOCATION_IMAGE =
  "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png";


function getValidLocation(locationName: string) {
  const normalizedParam = locationName.toLowerCase().trim();

  if (!normalizedParam.startsWith(PREFIX)) {
    return null;
  }

  const locationSlug = normalizedParam.slice(PREFIX.length);

  if (!locationSlug) {
    return null;
  }

  const validLocation = rajasthanLocations.find(
    (location) =>
      location.slug.toLowerCase() === locationSlug,
  );

  return validLocation ?? null;
}


export function generateStaticParams() {
  return rajasthanLocations.map((location) => ({
    "location-name": `${PREFIX}${location.slug}`,
  }));
}
export const dynamicParams = false;


export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { "location-name": locationName } = await params;

  if (!locationName) {
    notFound();
  }

  const validLocation = getValidLocation(locationName);

  if (!validLocation) {
    notFound();
  }

  const cityName = validLocation.city;
  const locationSlug = validLocation.slug;

  const seo = getLocationSEOContent(locationSlug);

  if (!seo) {
    notFound();
  }


  const url =
    `${siteConfig.url}/${PREFIX}${locationSlug}`;


  return {
    
    title: seo.title,
    description: seo.description,

    
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
      title: seo.title,

      description: seo.description,

      url,

      siteName: siteConfig.name,

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: LOCATION_IMAGE,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },

    
    twitter: {
      card: "summary_large_image",

      title: seo.title,

      description: seo.description,

      images: [LOCATION_IMAGE],
    },
    authors: [
      {
        name: "Jai Shree Equipment Dairy",
      },
    ],

    creator: "Jai Shree Equipment Dairy",

    publisher: "Jai Shree Equipment Dairy",

    category: "Dairy Equipment",
  };
}

/* =========================
   LAYOUT
========================= */

export default async function LocationLayout({
  children,
  params,
}: LayoutProps) {
  const { "location-name": locationName } = await params;

  if (!locationName) {
    notFound();
  }

  const validLocation = getValidLocation(locationName);

  if (!validLocation) {
    notFound();
  }

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
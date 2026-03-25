import { metaKeywords, siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: {
    location: string;
  };
};

// 🔥 slug → readable city name
function formatCityName(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// 🔥 normalize slug
function normalizeLocation(slug: string) {
  return slug.toLowerCase().trim().replace(/\/+$/, "");
}

// 🔥 Dynamic Metadata per location
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const normalizedLocation = normalizeLocation(params.location);

  // ✅ FIX: use 404 instead of noindex
  if (!rajasthanLocations.includes(normalizedLocation)) {
    notFound(); // 🔥 best practice
  }

  const cityName = formatCityName(normalizedLocation);
  const path = `/milk-analyzer-${normalizedLocation}`;

  return {
    metadataBase: new URL(siteConfig.url),

    title: `Milk Analyzer in ${cityName}`,

    description: `Buy milk analyzer in ${cityName} with accurate milk testing technology. Best dairy equipment supplier in ${cityName}.`,

    keywords: [
      `milk analyzer machine in ${cityName}`,
      `milk analyzer price in ${cityName}`,
      `milk analyzer supplier in ${cityName}`,
      `milk analyzer dealer in ${cityName}`,
      `buy milk analyzer machine in ${cityName}`,

      `advance milk analyzer in ${cityName}`,
      `advance milk analyzer plus in ${cityName}`,
      `advance milk analyzer max in ${cityName}`,

      `ekomilk ultra milk analyzer in ${cityName}`,
      `milk testing machine in ${cityName}`,
      `milk fat testing machine in ${cityName}`,

      `dpu milk collection unit in ${cityName}`,
      `automatic milk collection system in ${cityName}`,

      `dairy equipment in ${cityName}`,
      `dairy equipment supplier in ${cityName}`,

      `milking machine in ${cityName}`,
      `cow milking machine in ${cityName}`,
      `buffalo milking machine in ${cityName}`,

      `cream separator machine in ${cityName}`,

      `milk analyzer installation in ${cityName}`,
      `milk analyzer repair service in ${cityName}`,

      ...metaKeywords[10].keywords,
    ],

    authors: [
      {
        name: metaKeywords[10].name,
      },
    ],

    // ✅ Perfect canonical
    alternates: {
      canonical: path,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `Milk Analyzer in ${cityName}`,
      description: `Trusted milk analyzer and dairy equipment supplier in ${cityName}.`,
      url: path,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Milk Analyzer in ${cityName}`,
      description: `Best milk analyzer supplier in ${cityName}.`,
    },

    // 🔥 Extra SEO signals
    other: {
      "geo.region": "IN-RJ",
      "geo.placename": cityName,
    },
  };
}

// 🔥 Layout
export default function LocationLayout({ children }: Props) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {children}
    </section>
  );
}
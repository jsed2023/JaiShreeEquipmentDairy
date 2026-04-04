import { metaKeywords, siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: {
    location: string;
  };
};

// 🔹 Format slug → city name
function formatCityName(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// 🔹 Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const rawUrlParam = decodeURIComponent(params.location);
  const normalizedParam = rawUrlParam.toLowerCase().replace(/\s+/g, "-");

  const prefix = "milk-analyzer-";

  // Validate prefix
  if (!normalizedParam.startsWith(prefix)) {
    notFound();
  }

  // Extract city slug
  const locationSlug = normalizedParam.slice(prefix.length);

  // Validate city
  const validCity = rajasthanLocations.find(
    (city) => city.toLowerCase().replace(/\s+/g, "-") === locationSlug
  );

  if (!validCity) {
    notFound();
  }

  const cityName = formatCityName(locationSlug);

  // ✅ FIXED URL (no duplication bug)
  const url = `https://jaishreeequipmentdairy.in/${normalizedParam}`;

  return {
    // ✅ Improved Title (CTR boost)
    title: `Milk Analyzer Machine in ${cityName} | Best Price & Service`,

    // ✅ Better Description (conversion focused)
    description: `Buy milk analyzer machine in ${cityName} at best price. We provide installation, repair, and dairy equipment including milk testing machines, DPU systems, and milking machines in ${cityName}.`,

    // ✅ Clean keywords (no spam)
    keywords: [
      `milk analyzer in ${cityName}`,
      `milk testing machine ${cityName}`,
      `dairy equipment ${cityName}`,
      `milk analyzer supplier ${cityName}`,
      `buy milk analyzer ${cityName}`,
    ],

    authors: [
      {
        name: metaKeywords[10]?.name || "Jai Shree Equipment Dairy",
      },
    ],

    // ✅ Canonical FIXED
    alternates: {
      canonical: url,
    },

    // ✅ OpenGraph (for WhatsApp / Facebook)
    openGraph: {
      title: `Milk Analyzer Machine in ${cityName}`,
      description: `Best milk analyzer and dairy equipment supplier in ${cityName}.`,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
          width: 1200,
          height: 630,
          alt: `Milk Analyzer in ${cityName}`,
        },
      ],
    },

    // ✅ Twitter preview
    twitter: {
      card: "summary_large_image",
      title: `Milk Analyzer in ${cityName}`,
      description: `Buy milk analyzer machine in ${cityName} with best price and service.`,
      images: [
        "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
      ],
    },

    // ✅ Indexing allowed
    robots: {
      index: true,
      follow: true,
    },
  };
}

// 🔹 Layout wrapper
export default function LocationLayout({ children }: Props) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {children}
    </section>
  );
}
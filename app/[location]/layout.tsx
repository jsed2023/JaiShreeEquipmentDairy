import { metaKeywords, siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import type { Metadata } from "next";

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

// 🔥 Dynamic Metadata per location
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isValid = rajasthanLocations.includes(params.location);

  if (!isValid) {
    return {};
  }

  const cityName = formatCityName(params.location);
  const url = `${siteConfig.url}/milk-analyzer-${params.location}`;

  return {
    title: `Milk Analyzer in ${cityName}`,

    description: `Buy milk analyzer in ${cityName} with accurate milk testing technology. Best dairy equipment supplier in ${cityName} offering milk analyzers, testing machines and solutions.`,

    keywords: [
      `milk analyzer machine in ${cityName}`,
  `milk analyzer price in ${cityName}`,
  `milk analyzer supplier in ${cityName}`,
  `milk analyzer dealer in ${cityName}`,
  `buy milk analyzer machine in ${cityName}`,

  `advance milk analyzer in ${cityName}`,
  `advance milk analyzer plus in ${cityName}`,
  `advance milk analyzer max in ${cityName}`,
  `advance milk analyzer price in ${cityName}`,

  `ekomilk ultra milk analyzer in ${cityName}`,
  `milk testing machine in ${cityName}`,
  `milk fat testing machine in ${cityName}`,

  `dpu milk collection unit in ${cityName}`,
  `automatic milk collection system in ${cityName}`,
  `dairy khata milk collection unit in ${cityName}`,

  `dairy equipment in ${cityName}`,
  `dairy equipment supplier in ${cityName}`,

  `milking machine in ${cityName}`,
  `cow milking machine in ${cityName}`,
  `buffalo milking machine in ${cityName}`,

  `cream separator machine in ${cityName}`,
  `paras cream separator machine in ${cityName}`,

  `milk analyzer installation in ${cityName}`,
  `milk analyzer repair service in ${cityName}`,
      ...metaKeywords[10].keywords,
    ],

    authors: [
      {
        name: metaKeywords[10].name,
      },
    ],

    alternates: {
      canonical: `${siteConfig.url}/milk-analyzer-${cityName}`,
    },

    openGraph: {
      title: `Milk Analyzer in ${cityName}`,
      description: `Get high-quality milk analyzer and dairy equipment in ${cityName}. Trusted supplier of milk testing machines.`,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Milk Analyzer in ${cityName}`,
      description: `Best milk analyzer and dairy equipment supplier in ${cityName}.`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function LocationLayout({ children }: Props) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {children}
    </section>
  );
}
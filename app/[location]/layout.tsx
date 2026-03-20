import { Metadata } from "next";
import { metaKeywords } from "@/config/site";

type Props = {
  params?: {
    slug?: string;
  };
};

/* ================= HELPERS ================= */

const formatCity = (slug?: string) => {
  if (!slug || typeof slug !== "string") return "";

  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

/* ================= SEO ================= */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug;

  // 🔥 SAFE CITY
  const city = formatCity(slug) || "Rajasthan";

  return {
    title: `Milk Analyzer Machine in ${city} | Service Available`,
    description: `Buy milk analyzer machine in ${city}. Best price, fast delivery & service available.`,

    keywords: metaKeywords?.[10]?.keywords || [],

    authors: [
      {
        name: metaKeywords?.[10]?.name || "Jai Shree Equipment Dairy",
      },
    ],

    openGraph: {
      title: `Milk Analyzer in ${city}`,
      description: `Milk analyzer machine available in ${city}`,
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Milk Analyzer in ${city}`,
      description: `Milk analyzer machine available in ${city}`,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ================= LAYOUT ================= */

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-x-hidden">{children}</div>;
}
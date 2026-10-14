import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { spareParts } from "@/config/spareparts";
import { siteConfig } from "@/config/site";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    "spare-parts-name": string;
  }>;
};

function getSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { "spare-parts-name": slug } = await params;

  const part = spareParts.find(
    (item) => getSlug(item.name) === slug
  );

  if (!part) {
    return {
      title: "Spare Part Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${part.name}`;

  const description = `Buy ${part.name} for milk testing machines. Contact Jai Shree Equipment Dairy for pricing, availability and product details.`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}/spare-parts/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/spare-parts/${slug}`,
      siteName: "Jai Shree Equipment Dairy",
      type: "website",
    },
  };
}

export default async function SparePartsDetailLayout({
  children,
  params,
}: LayoutProps) {
  const { "spare-parts-name": slug } = await params;

  const part = spareParts.find(
    (item) => getSlug(item.name) === slug
  );

  if (!part) {
    notFound();
  }

  return <>{children}</>;
}
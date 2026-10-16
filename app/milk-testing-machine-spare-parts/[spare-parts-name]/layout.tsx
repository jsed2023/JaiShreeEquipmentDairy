import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { spareParts } from "@/config/spareparts";
import { siteConfig } from "@/config/site";

type Params = {
  "spare-parts-name": string;
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<Params>;
};

/* =========================
   GET SPARE PART
========================= */

function getSparePart(slug: string) {
  const normalizedSlug = decodeURIComponent(slug)
    .trim()
    .toLowerCase();

  return spareParts.find(
    (item) => item.slug.trim().toLowerCase() === normalizedSlug
  );
}

/* =========================
   NOT FOUND METADATA
========================= */

const notFoundMetadata: Metadata = {
  title: "Spare Part Not Found",
  description: "The requested spare part could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

/* =========================
   GENERATE METADATA
========================= */

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { "spare-parts-name": slug } = await params;

  if (!slug) {
    return notFoundMetadata;
  }

  const product = getSparePart(slug);

  if (!product) {
    return notFoundMetadata;
  }

  const productUrl =
    `${siteConfig.url}/milk-testing-machine-spare-parts/${product.slug}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,

    authors: [
      {
        name: `${product.name} - ${siteConfig.name}`,
      },
    ],

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: productUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: product.photo,
          alt: product.alt || product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.photo],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================
   LAYOUT
========================= */

export default async function SparePartsDetailLayout({
  children,
  params,
}: LayoutProps) {
  const { "spare-parts-name": slug } = await params;

  if (!getSparePart(slug)) {
    notFound();
  }

  return (
    <div className="overflow-x-hidden">
      {children}
    </div>
  );
}
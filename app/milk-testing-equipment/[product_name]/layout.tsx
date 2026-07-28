import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MilkTestingEquipment } from "@/config/products";
import { siteConfig } from "@/config/site";

/* =========================
   TYPES
========================= */

type ProductParams = {
  product_name: string;
};

type MetadataProps = {
  params: Promise<ProductParams>;
};

type ProductLayoutProps = {
  children: React.ReactNode;
  params: Promise<ProductParams>;
};

/* =========================
   PRODUCT HELPER
========================= */

function getProduct(productName: string) {
  const normalizedProductName = decodeURIComponent(productName)
    .trim()
    .toLowerCase();

  return MilkTestingEquipment.find(
    (item) =>
      item.url.trim().toLowerCase() === normalizedProductName
  );
}

/* =========================
   NOT FOUND METADATA
========================= */

const notFoundMetadata: Metadata = {
  title: "Product Not Found",
  description: "The requested product could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

/* =========================
   METADATA
========================= */

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { product_name } = await params;

  if (!product_name) {
    return notFoundMetadata;
  }

  const product = getProduct(product_name);

  if (!product) {
    return notFoundMetadata;
  }

  const productUrl =
    `${siteConfig.url}/milk-testing-equipment/${product.url}`;

  return {
    title: product.name,

    description: product.desc,

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
      title: product.name,
      description: product.desc,
      url: productUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.desc,
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

export default async function ProductLayout({
  children,
  params,
}: ProductLayoutProps) {
  const { product_name } = await params;

  if (!product_name) {
    notFound();
  }

  const product = getProduct(product_name);

  if (!product) {
    notFound();
  }

  return (
    <div className="overflow-x-hidden">
      {children}
    </div>
  );
}
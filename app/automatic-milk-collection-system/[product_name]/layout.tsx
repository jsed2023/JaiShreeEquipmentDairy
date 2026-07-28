import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { automaticMilkCollectionSystem } from "@/config/products";
import { siteConfig } from "@/config/site";

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

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { product_name } = await params;

  if (!product_name) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const productName = decodeURIComponent(product_name);

  const product = automaticMilkCollectionSystem.find(
    (item) =>
      item.url.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const productUrl =
    `${siteConfig.url}/automatic-milk-collection-system/${product.url}`;

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

export default async function ProductLayout({
  children,
  params,
}: ProductLayoutProps) {
  const { product_name } = await params;

  if (!product_name) {
    notFound();
  }

  const productName = decodeURIComponent(product_name);

  const product = automaticMilkCollectionSystem.find(
    (item) =>
      item.url.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="overflow-x-hidden">
      {children}
    </div>
  );
}
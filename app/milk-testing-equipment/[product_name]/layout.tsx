import { MilkTestingEquipment } from "@/config/products";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { product_name: string };
}): Promise<Metadata> {

  const productName = params.product_name;

  const product = MilkTestingEquipment.find(
    (item) => item.url.toLowerCase() === productName.toLowerCase()
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

  const productUrl = `${siteConfig.url}/milk-testing-equipment/${product.url}`;

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
}: {
  children: React.ReactNode;
  params: { product_name: string };
}) {

  const productName = params.product_name;

  const product = MilkTestingEquipment.find(
    (item) => item.url.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return notFound();
  }

  return <div className="overflow-x-hidden">{children}</div>;
}
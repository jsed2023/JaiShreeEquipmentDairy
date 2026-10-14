
import { metaKeywords, siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { spareParts } from "@/config/spareparts";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    "spare-parts-name": string;
  }>;
};

function getSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProductBySlug(slug: string) {
  return spareParts.find(
    (product) => getSlug(product.name) === slug
  );
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { "spare-parts-name": slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${product.name}`;

  const description =
    product.metaDescription?.trim() ||
    `Explore ${product.name} for milk testing and dairy equipment. Contact Jai Shree Equipment Dairy for pricing, availability and delivery across India.`;

  const canonicalUrl =
    `${siteConfig.url}/milk-testing-machine-spare-parts/${slug}`;

  const keywords = [
    product.name,
    `${product.name} price`,
    `${product.name} supplier`,
    `${product.name} spare parts`,
    "Milk Testing Machine Spare Parts",
    "Milk Analyzer Spare Parts",
    "Dairy Equipment Spare Parts",
    ...(metaKeywords[15]?.keywords
      ? Array.isArray(metaKeywords[15].keywords)
        ? metaKeywords[15].keywords
        : [metaKeywords[15].keywords]
      : []),
  ];

  const imageUrl =
    typeof product.photo === "string" &&
    product.photo.startsWith("http")
      ? product.photo
      : product.photo
        ? `${siteConfig.url.replace(/\/$/, "")}${
            product.photo.startsWith("/") ? "" : "/"
          }${product.photo}`
        : undefined;

  return {
    title,
    description,
    keywords,

    authors: [
      {
        name: metaKeywords[15]?.name || siteConfig.name,
      },
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                alt: product.alt || product.name,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SparePartsDetailLayout({
  children,
  params,
}: LayoutProps) {
  const { "spare-parts-name": slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      {children}
    </section>
  );
}

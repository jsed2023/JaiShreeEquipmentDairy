
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { spareParts } from "@/config/spareparts";
import { siteConfig } from "@/config/site";

type Params = {
  "spare-parts-name": string;
};

type RouteProps = {
  params: Promise<Params>;
};

type LayoutProps = RouteProps & {
  children: React.ReactNode;
};

/* =========================
   STATIC GENERATION
========================= */

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return spareParts.map((item) => ({
    "spare-parts-name": item.url,
  }));
}

/* =========================
   GET SPARE PART
========================= */

function getSparePart(url: string) {
  let normalizedUrl: string;

  try {
    normalizedUrl = decodeURIComponent(url).trim().toLowerCase();
  } catch {
    return undefined;
  }

  return spareParts.find(
    (item) => item.url.trim().toLowerCase() === normalizedUrl
  );
}

/* =========================
   IMAGE URL
========================= */

function getAbsoluteImageUrl(photo: string): string {
  return new URL(photo, `${siteConfig.url}/`).toString();
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
}: RouteProps): Promise<Metadata> {
  const { "spare-parts-name": url } = await params;
  const product = getSparePart(url);

  if (!product) {
    return notFoundMetadata;
  }

  const productUrl =
    `${siteConfig.url}/milk-testing-machine-spare-parts/${product.url}`;

  const imageUrl = getAbsoluteImageUrl(product.photo);

  const imageAlt =
    product.alt?.trim() ||
    `${product.name} - ${product.category} spare part from ${siteConfig.name}`;

  const title = product.metaTitle || product.name;

  const description =
    product.metaDescription ||
    `Explore ${product.name} spare parts from ${siteConfig.name}. Contact us for pricing and compatibility.`;

  return {
    title,
    description,
    keywords: product.keywords,

    alternates: {
      canonical: productUrl,
    },

    openGraph: {
      type: "website",
      title,
      description,
      url: productUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
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
  const { "spare-parts-name": url } = await params;

  if (!getSparePart(url)) {
    notFound();
  }

  return <div className="overflow-x-hidden">{children}</div>;
}

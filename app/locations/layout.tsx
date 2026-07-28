import { Metadata } from "next";

import { metaKeywords, siteConfig,} from "@/config/site";

// =========================
// SEO Metadata
// =========================

export const metadata: Metadata = {
  title: "Dairy Equipment Locations | Jai Shree Equipment Dairy",

  description:
    "Jai Shree Equipment Dairy supplies milk analyzer machines, dairy equipment, milking machines, cream separator machines and automatic milk collection systems across Rajasthan.",

  keywords: metaKeywords?.[10]?.keywords,

  authors: [
    {
      name: metaKeywords?.[10]?.name,
    },
  ],

  alternates: {
    canonical: `${siteConfig.url}/locations`,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Dairy Equipment Locations",
    description: "Find Jai Shree Equipment Dairy services across Rajasthan.",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
        width: 1200,
        height: 630,
        alt: "Dairy Equipment Locations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dairy Equipment Locations",
    description: "Milk analyzer and dairy equipment services across Rajasthan.",
    images: [
      "https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png",
    ],
  },
};

// =========================
// ISR
// =========================
export const revalidate = 86400;

// =========================
// Layout
// =========================
export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {children}
    </section>
  );
}

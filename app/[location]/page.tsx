import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { generateLocationSEOContent } from "@/lib/location-seo-content";
import { productImages } from "@/lib/product-images";
import { generateKeywords } from "@/lib/location-keyword-matrix";
import { locationPages } from "@/lib/location-pages";

/* ================= PERFORMANCE ================= */

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return locationPages
    ?.filter((loc) => typeof loc === "string" && loc.trim() !== "")
    .slice(0, 30)
    .map((location) => ({
      location,
    }));
}

/* ================= WHATSAPP ================= */

const WHATSAPP_NUMBER = "918112294173";

const createWhatsAppLink = (city: string) => {
  const message = `Hello, I need Milk Analyzer Machine price in ${city}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/* ================= TYPES ================= */

type Props = {
  params: { location?: string };
};

/* ================= HELPERS ================= */

const formatName = (slug?: string) => {
  if (!slug || typeof slug !== "string") return "";

  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

const extractCity = (slug?: string) => {
  if (!slug || typeof slug !== "string") return "";

  const parts = slug.split("-");
  return parts.length >= 2 ? parts.slice(-2).join("-") : slug;
};

const getNearbyLocations = (current: string) =>
  rajasthanLocations
    ?.filter((l) => typeof l === "string" && l !== current)
    .slice(0, 15);

/* ================= SEO ================= */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.location;

  if (!slug || !locationPages?.includes(slug)) {
    notFound();
  }

  const citySlug = extractCity(slug);
  const city = formatName(citySlug);

  const url = `https://jaishreeequipmentdairy.in/milk-analyzer-${slug}`;

  return {
    title: `Milk Analyzer Machine in ${city}`,
    description: `Looking for milk analyzer near me in ${city}? Jai Shree Equipment Dairy supplies milk analyzer, milking machine, cream separator and dairy machines in ${city}, Rajasthan.`,
    alternates: { canonical: url },
    openGraph: {
      title: `Milk Analyzer Machine in ${city}`,
      description: `Best dairy equipment supplier in ${city}, Rajasthan.`,
      url,
      type: "website",
    },
  };
}

/* ================= PAGE ================= */

export default function LocationPage({ params }: Props) {
  const slug = params?.location;

  // 🔥 HARD VALIDATION (no crash possible)
  if (!slug || typeof slug !== "string" || !locationPages?.includes(slug)) {
    notFound();
  }

  const citySlug = extractCity(slug);
  const city = formatName(citySlug) || "Rajasthan";

  const seo = generateLocationSEOContent(city) || {};
  const nearby = getNearbyLocations(citySlug) || [];
  const keywords = generateKeywords(city) || [];

  return (
    <section className="container mx-auto px-4 py-10">

      {/* H1 */}
      <div className="flex items-center justify-center px-2 py-1.5 rounded-full text-sm font-semibold
      bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10
      text-purple-700 dark:text-purple-300 border border-purple-400/30 backdrop-blur-sm">

        <h1 className="text-lg md:text-xl font-bold text-center">
          Milk Analyzer Machine in {city}
        </h1>
      </div>

      {/* HERO IMAGE */}
      <div className="flex justify-center my-6">
        <Image
          src="https://res.cloudinary.com/dddhtbuzs/image/upload/f_auto,q_auto,w_1200,c_limit/Our_Service_Locations_in_Rajasthan_y9d4qn.png"
          alt={`Milk Analyzer Machine & Dairy Machine in ${city}`}
          width={1200}
          height={400}
          priority
          quality={80}
          sizes="(max-width:768px)100vw,(max-width:1280px)90vw,1200px"
          className="w-full max-w-5xl h-auto"
        />
      </div>

      {/* INTRO */}
      <div className="space-y-4 text-gray-700">
        <p>
          {seo?.intro || ""}
          {" "}For quick price details and machine availability in {city},
          contact us on WhatsApp at +91 81122 94173.
        </p>

        <p>{seo?.about || ""}</p>
        <p>{seo?.products || ""}</p>
        <p>{seo?.industry || ""}</p>
      </div>

      {/* SERVICE */}
      <h2 className="text-xl font-semibold mt-10 mb-3">
        Milk Analyzer Machine Service in {city}
      </h2>

      <p className="text-gray-700 mb-6">
        Our team provides fast delivery, installation, training and repair
        support in {city} and nearby villages.
      </p>

      {/* WHY */}
      <h2 className="text-xl font-semibold mb-3">
        Why Choose Us in {city}
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
        <li>Fast delivery in {city}</li>
        <li>On-site installation in {city}</li>
        <li>Reliable support in {city}</li>
        <li>Best price in {city}</li>
      </ul>

      {/* KEYWORDS */}
      <h2 className="text-xl font-semibold mb-4">
        Dairy Machine Available in {city}
      </h2>

      <div className="text-gray-700 mb-12">
        {keywords.map((kw) => (
          <p key={kw}>
            <strong>{kw}</strong> with complete service, sale and support.
          </p>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 py-4">
        <h2 className="text-center mx-auto py-1 rounded-lg md:text-2xl text-lg font-bold mb-4">
          Dairy Machines Available in {city}
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-12">
        {productImages?.map((item) => (
          <div
            key={item.productUrl}
            className="bg-white rounded shadow p-3 text-center max-w-[180px] mx-auto"
          >
            <Link href={item.productUrl}>
              <Image
                src={item.url}
                alt={`${item.name} in ${city}`}
                width={400}
                height={400}
                className="rounded mb-2 object-contain mx-auto"
              />
            </Link>

            <p className="font-medium text-gray-600 text-sm mb-2">
              {item.name}
            </p>

            <Link
              href={item.productUrl}
              className="inline-block bg-sky-600 text-white text-xs px-4 py-2 rounded hover:bg-sky-700"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>

      {/* NEARBY */}
      <h2 className="text-xl font-semibold mb-3">
        Nearby Cities We Serve
      </h2>

      <div className="flex flex-wrap gap-3 mb-12">
        {nearby.map((citySlug) => (
          <Link
            key={citySlug}
            href={`/milk-analyzer-${citySlug}`}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Milk Analyzer in {formatName(citySlug)}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <div className="bg-blue-600 text-white px-6 py-3 rounded inline-block">
          Contact for Best Price in {city}
        </div>

        <Link
          href={createWhatsAppLink(city)}
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          WhatsApp for Milk Analyzer in {city}
        </Link>
      </div>

    </section>
  );
}
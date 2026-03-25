import { notFound } from "next/navigation";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { generateLocationSEOContent } from "@/lib/location-seo-content";
import { productImages } from "@/lib/product-images";
import { locationGroups } from "@/lib/location-groups";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    location: string;
  };
};

// 🔥 Static pages
export async function generateStaticParams() {
  return rajasthanLocations.map((loc) => ({
    location: `milk-analyzer-${loc}`,
  }));
}

// 🔥 format name
function formatName(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// 🔥 WhatsApp
function createWhatsAppLink(city: string) {
  const msg = `Hello, I want to buy Milk Analyzer in ${city}`;
  return `https://wa.me/918112294173?text=${encodeURIComponent(msg)}`;
}

// 🔥 Nearby
function getNearbyCities(current: string) {
  const group = Object.values(locationGroups).find((cities) =>
    cities.includes(current)
  );

  if (!group) return [];

  return group
    .filter((city) => city !== current)
    .slice(0, 15);
}

export default function LocationPage({ params }: Props) {
  // 1. Decode and normalize the URL parameter
  const rawUrlParam = decodeURIComponent(params.location);
  const normalizedParam = rawUrlParam.toLowerCase().replace(/\s+/g, "-");
  const prefix = "milk-analyzer-";

  // 2. Validate the prefix and strip it to get the raw city slug
  if (!normalizedParam.startsWith(prefix)) {
    return notFound();
  }
  const locationSlug = normalizedParam.slice(prefix.length);

  // 3. BULLETPROOF CHECK: Match against the array using the clean city slug
  const validCity = rajasthanLocations.find(
    (city) => city.toLowerCase().replace(/\s+/g, "-") === locationSlug
  );

  // 4. Trigger 404 if the city is not in the array
  if (!validCity) {
    return notFound();
  }

  // Create the readable city name
  const city = formatName(locationSlug);

  const seo = generateLocationSEOContent(city) || {
    intro: `We provide milk analyzer machine in ${city}.`,
    about: "",
    products: "",
    industry: "",
  };

  const nearby = getNearbyCities(locationSlug);

  const keywords = [
    `milk analyzer in ${city}`,
    `Best milk analyzer in ${cityName}`
    `milk testing machine ${city}`,
    `dairy equipment ${city}`,
    `milk analyzer machine in ${city}`,
    `milk analyzer price in ${city}`,
    `milk analyzer supplier in ${city}`,
    `milk analyzer dealer in ${city}`,
    `buy milk analyzer machine in ${city}`,
    `advance milk analyzer in ${city}`,
    `advance milk analyzer plus in ${city}`,
    `advance milk analyzer max in ${city}`,
    `advance milk analyzer price in ${city}`,
    `ekomilk ultra milk analyzer in ${city}`,
    `milk testing machine in ${city}`,
    `milk fat testing machine in ${city}`,
    `dpu milk collection unit in ${city}`,
    `automatic milk collection system in ${city}`,
    `dairy khata milk collection unit in ${city}`,
    `dairy equipment in ${city}`,
    `dairy equipment supplier in ${city}`,
    `milking machine in ${city}`,
    `cow milking machine in ${city}`,
    `buffalo milking machine in ${city}`,
    `cream separator machine in ${city}`,
    `paras cream separator machine in ${city}`,
    `milk analyzer installation in ${city}`,
    `milk analyzer repair service in ${city}`,
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6 md:p-10 rounded-2xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Milk Analyzer in {city}
        </h1>
        <p className="max-w-2xl">{seo.intro}</p>

        <Link
          href={createWhatsAppLink(city)}
          className="inline-block mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          WhatsApp Now
        </Link>
      </div>

      {/* ABOUT */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p>{seo.about}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Industry Use</h2>
          <p>{seo.industry}</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Us in {city}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Fast Delivery", "Installation", "Support", "Best Price"].map((f) => (
            <div key={f} className="bg-white p-5 rounded-xl shadow">
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Dairy Machines in {city}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {productImages.map((item) => (
            <div
              key={item.productUrl}
              className="bg-white border rounded-xl shadow p-4 flex flex-col"
            >
              <Link href={item.productUrl}>
                <div className="h-[150px] flex items-center justify-center">
                  <Image
                    src={item.url}
                    alt={`${item.name} in ${city}`}
                    width={300}
                    height={300}
                    className="object-contain max-h-[140px]"
                  />
                </div>
              </Link>

              <p className="text-sm mt-3 text-center">{item.name}</p>

              <Link
                href={item.productUrl}
                className="mt-auto bg-blue-600 text-white px-3 py-2 rounded text-center text-sm"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* KEYWORDS */}
      <div className="bg-gray-50 p-6 rounded-xl mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Dairy Equipment in {city}
        </h2>

        <div className="flex flex-wrap gap-3">
          {keywords.map((kw) => (
            <span key={kw} className="bg-white px-3 py-1 rounded shadow text-sm">
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* NEARBY */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Nearby Cities We Serve
        </h2>

        <div className="flex flex-wrap gap-3">
          {nearby.map((slug) => (
            <Link
              key={slug}
              href={`/milk-analyzer-${slug}`}
              className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:scale-105 transition"
            >
              {formatName(slug)}
            </Link>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Get Milk Analyzer in {city}
        </h3>

        <Link
          href={createWhatsAppLink(city)}
          className="bg-green-500 px-6 py-3 rounded-lg inline-block"
        >
          WhatsApp Now
        </Link>
      </div>
    </section>
  );
}

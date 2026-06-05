import { notFound } from "next/navigation";

import Image from "next/image";

import Link from "next/link";

import { rajasthanLocations }
from "@/lib/rajasthan-locations";

import { generateLocationSEOContent }
from "@/lib/location-seo-content";

import { productImages }
from "@/lib/product-images";

type Props = {
  params: {
    location: string;
  };
};

// =========================
// Generate Static Params
// =========================

export async function generateStaticParams() {

  return rajasthanLocations.map(
    (loc) => ({
      location:
        `milk-analyzer-${loc.slug}`,
    })
  );
}

// =========================
// Prevent Random URLs
// =========================

export const dynamicParams = false;

// =========================
// WhatsApp Link
// =========================

function createWhatsAppLink(
  city: string
) {

  const msg =
    `Hello, I want to buy Milk Analyzer in ${city}`;

  return `https://wa.me/917375082341?text=${encodeURIComponent(
    msg
  )}`;
}

// =========================
// Page
// =========================

export default function LocationPage({
  params,
}: Props) {

  // =========================
  // Decode URL
  // =========================

  const rawUrlParam =
    decodeURIComponent(
      params.location
    );

  // =========================
  // Normalize URL
  // =========================

  const normalizedParam =
    rawUrlParam
      .toLowerCase()
      .trim();

  const prefix =
    "milk-analyzer-";

  // =========================
  // Validate Prefix
  // =========================

  if (
    !normalizedParam.startsWith(prefix)
  ) {
    return notFound();
  }

  // =========================
  // Extract Slug
  // =========================

  const locationSlug =
    normalizedParam.replace(
      prefix,
      ""
    );

  // =========================
  // Validate Location
  // =========================

  const validLocation =
    rajasthanLocations.find(
      (city) =>
        city.slug === locationSlug
    );

  if (!validLocation) {
    return notFound();
  }

  // =========================
  // City Name
  // =========================

  const city =
    validLocation.city;

  // =========================
  // SEO Content
  // =========================

  const seo =
    generateLocationSEOContent(
      city
    ) || {

      intro:
        `We provide milk analyzer machines in ${city}.`,

      about:
        `We are a leading supplier of milk analyzer machines and dairy equipment in ${city}.`,

      products:
        `Milk analyzer machines, milking machines, cream separator machines and dairy equipment available in ${city}.`,

      industry:
        `Milk collection centers and dairy farms in ${city} use milk analyzer machines for accurate milk testing.`,
    };

  // =========================
  // Keywords
  // =========================

  const keywords = [
    `milk analyzer in ${city}`,
    `milk testing machine in ${city}`,
    `dairy equipment in ${city}`,
    `milking machine in ${city}`,
    `cream separator machine in ${city}`,
    `automatic milk collection system in ${city}`,
  ];

  return (

    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-6 md:p-10 rounded-2xl mb-10 text-center flex flex-col items-center">

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Milk Analyzer Machine in {city}
        </h1>

        <p className="max-w-3xl text-base md:text-lg leading-7">
          {seo.intro}
        </p>

        <Link
          href={createWhatsAppLink(city)}
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          WhatsApp Now
        </Link>

      </div>

      {/* ABOUT */}

      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            About Milk Analyzer in {city}
          </h2>

          <p className="text-gray-700 leading-7">
            {seo.about}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            Dairy Industry in {city}
          </h2>

          <p className="text-gray-700 leading-7">
            {seo.industry}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            Dairy Equipment Supplier
          </h2>

          <p className="text-gray-700 leading-7">
            {seo.products}
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            Installation & Support
          </h2>

          <p className="text-gray-700 leading-7">

            We provide installation,
            maintenance and support services
            for milk analyzer machines,
            automatic milk collection systems,
            milking machines and cream
            separator machines in {city}.

          </p>

        </div>

      </div>

      {/* FEATURES */}

      <div className="mb-14 text-center">

        <h2 className="text-3xl font-bold mb-8">
          Why Choose Us in {city}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "Fast Delivery",
            "Installation Support",
            "Best Price",
            "Technical Service",
          ].map((feature) => (

            <div
              key={feature}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <p className="font-semibold">
                {feature}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="mb-14">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Dairy Machines in {city}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {productImages.map((item) => (

            <div
              key={item.productUrl}
              className="bg-white border rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition"
            >

              <Link href={item.productUrl}>

                <div className="h-[170px] flex items-center justify-center">

                  <Image
                    src={item.url}
                    alt={`${item.name} in ${city}`}
                    width={300}
                    height={300}
                    className="object-contain max-h-[150px]"
                  />

                </div>

              </Link>

              <p className="text-sm mt-4 text-center font-medium">
                {item.name}
              </p>

              <Link
                href={item.productUrl}
                className="mt-4 bg-blue-600 text-white px-3 py-2 rounded text-center text-sm hover:bg-blue-700 transition"
              >
                View Product
              </Link>

            </div>

          ))}

        </div>

      </div>

      {/* POPULAR SEARCHES */}

      <div className="bg-gray-50 p-6 rounded-xl mb-14">

        <h2 className="text-2xl font-semibold mb-6">
          Popular Searches in {city}
        </h2>

        <div className="flex flex-wrap gap-3">

          {keywords.map((kw) => (

            <span
              key={kw}
              className="bg-white px-4 py-2 rounded-full shadow text-sm"
            >
              {kw}
            </span>

          ))}

        </div>

      </div>

      {/* NEARBY CITIES */}

      <div className="mb-14">

        <h2 className="text-2xl font-semibold mb-6">
          Nearby Cities We Serve
        </h2>

        <div className="flex flex-wrap gap-3">

          {rajasthanLocations
            .filter(
              (location) =>
                location.slug !==
                locationSlug
            )
            .slice(0, 20)
            .map((location) => (

              <Link
                key={location.slug}
                href={`/locations/milk-analyzer-${location.slug}`}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition"
              >
                {location.city}
              </Link>

            ))}

        </div>

      </div>

      {/* CTA */}

      <div className="bg-blue-600 text-white p-8 rounded-2xl text-center">

        <h3 className="text-3xl font-bold mb-4">
          Buy Milk Analyzer Machine in {city}
        </h3>

        <p className="mb-6 text-lg">
          Contact us for best price,
          installation and support.
        </p>

        <Link
          href={createWhatsAppLink(city)}
          className="bg-green-500 px-6 py-3 rounded-lg inline-block font-semibold hover:bg-green-600 transition"
        >
          WhatsApp Now
        </Link>

      </div>

    </section>
  );
}
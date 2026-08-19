import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { generateLocationSEOContent } from "@/lib/location-seo-content";
import { productImages } from "@/lib/product-images";

/* =========================
   TYPES
========================= */

type LocationParams = {
  "location-name": string;
};

type Props = {
  params: Promise<LocationParams>;
};

/* =========================
   FORCE DYNAMIC
========================= */

export const dynamic = "force-dynamic";

/* =========================
   WHATSAPP LINK
========================= */

function createWhatsAppLink(city: string) {
  const message = `Hello, I want to buy Milk Analyzer in ${city}`;

  return `https://wa.me/917375082341?text=${encodeURIComponent(
    message
  )}`;
}

/* =========================
   PAGE
========================= */

export default async function LocationPage({
  params,
}: Props) {
  /* =========================
     GET PARAM
  ========================= */

  const { "location-name": locationName } = await params;

  if (!locationName) {
    notFound();
  }

  /* =========================
     DECODE + NORMALIZE
  ========================= */

  let rawUrlParam: string;

  try {
    rawUrlParam = decodeURIComponent(locationName);
  } catch {
    notFound();
  }

  const normalizedParam = rawUrlParam
    .toLowerCase()
    .trim();

  const prefix = "milk-analyzer-";

  /* =========================
     VALIDATE PREFIX
  ========================= */

  if (!normalizedParam.startsWith(prefix)) {
    notFound();
  }

  /* =========================
     EXTRACT LOCATION SLUG
  ========================= */

  const locationSlug = normalizedParam.slice(
    prefix.length
  );

  if (!locationSlug) {
    notFound();
  }

  /* =========================
     FIND LOCATION
  ========================= */

  const validLocation = rajasthanLocations.find(
    (location) =>
      location.slug.toLowerCase() ===
      locationSlug.toLowerCase()
  );

  if (!validLocation) {
    notFound();
  }

  /* =========================
     CITY
  ========================= */

  const city = validLocation.city;

  /* =========================
     SEO CONTENT
  ========================= */

  const seo =
    generateLocationSEOContent(city) || {
      intro: `We provide milk analyzer machines in ${city}.`,

      about: `We are a leading supplier of milk analyzer machines and dairy equipment in ${city}.`,

      products: `Milk analyzer machines, milking machines, cream separator machines and dairy equipment are available in ${city}.`,

      industry: `Milk collection centers and dairy farms in ${city} use milk analyzer machines for accurate milk testing.`,
    };

  /* =========================
     KEYWORDS
  ========================= */

  const keywords = [
    `milk analyzer ${city}`,
    `milk testing instrument ${city}`,
    `milk testing machine ${city}`,
    `dairy equipment ${city}`,
    `milking machine ${city}`,
    `cream separator machine ${city}`,
    `automatic milk collection system ${city}`,
  ];

  /* =========================
     RETURN
  ========================= */

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* =========================
          HERO
      ========================= */}

      <div
        className="
          mb-10 flex flex-col items-center
          rounded-2xl
          bg-linear-to-r
          from-blue-400 to-sky-300
          p-6 text-center text-black
          md:p-10
        "
      >
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">
          Milk Analyzer Machine in {city}
        </h1>

        <p className="max-w-3xl text-base leading-7 md:text-lg">
          {seo.intro}
        </p>

        <Link
          href={createWhatsAppLink(city)}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 inline-block rounded-lg
            bg-white px-6 py-3
            font-semibold text-blue-300
            transition
            hover:bg-gray-100
          "
        >
          WhatsApp Now
        </Link>
      </div>

      {/* =========================
          ABOUT
      ========================= */}

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {/* ABOUT MILK ANALYZER */}

        <div
          className="
            rounded-xl border border-gray-200
            bg-white p-6 shadow-sm
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <h2
            className="
              mb-4 text-2xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            About Milk Analyzer in {city}
          </h2>

          <p
            className="
              leading-7 text-gray-700
              dark:text-gray-300
            "
          >
            {seo.about}
          </p>
        </div>

        {/* DAIRY INDUSTRY */}

        <div
          className="
            rounded-xl border border-gray-200
            bg-white p-6 shadow-sm
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <h2
            className="
              mb-4 text-2xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Dairy Industry in {city}
          </h2>

          <p
            className="
              leading-7 text-gray-700
              dark:text-gray-300
            "
          >
            {seo.industry}
          </p>
        </div>

        {/* EQUIPMENT SUPPLIER */}

        <div
          className="
            rounded-xl border border-gray-200
            bg-white p-6 shadow-sm
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <h2
            className="
              mb-4 text-2xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Dairy Equipment Supplier in {city}
          </h2>

          <p
            className="
              leading-7 text-gray-700
              dark:text-gray-300
            "
          >
            {seo.products}
          </p>
        </div>

        {/* SUPPORT */}

        <div
          className="
            rounded-xl border border-gray-200
            bg-white p-6 shadow-sm
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <h2
            className="
              mb-4 text-2xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Installation &amp; Support in {city}
          </h2>

          <p
            className="
              leading-7 text-gray-700
              dark:text-gray-300
            "
          >
            We provide installation, maintenance and
            support services for milk analyzer machines,
            automatic milk collection systems, milking
            machines and cream separator machines in{" "}
            {city}.
          </p>
        </div>
      </div>

      {/* =========================
          FEATURES
      ========================= */}

      <div className="mb-14 text-center">
        <h2
          className="
            mb-8 text-3xl font-bold
            text-gray-900
            dark:text-white
          "
        >
          Why Choose Us in {city}
        </h2>

        <div
          className="
            grid grid-cols-2 gap-4
            md:grid-cols-4 md:gap-6
          "
        >
          {[
            "Fast Delivery",
            "Installation Support",
            "Best Price",
            "Technical Service",
          ].map((feature) => (
            <div
              key={feature}
              className="
                rounded-xl border border-gray-200
                bg-white p-5 shadow-sm
                transition-shadow
                hover:shadow-lg
                dark:border-zinc-700
                dark:bg-zinc-800
              "
            >
              <p
                className="
                  font-semibold text-gray-900
                  dark:text-white
                "
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          PRODUCTS
      ========================= */}

      <div className="mb-14">
        <h2
          className="
            mb-8 text-center text-3xl
            font-bold text-gray-900
            dark:text-white
          "
        >
          Dairy Machines in {city}
        </h2>

        <div
          className="
            grid grid-cols-2 gap-4
            sm:grid-cols-3
            md:grid-cols-4 md:gap-6
          "
        >
          {productImages.map((item, index) => (
            <div
              key={`${item.productUrl}-${index}`}
              className="
                flex flex-col overflow-hidden
                rounded-xl border border-gray-200
                bg-white p-3 shadow-sm
                transition-shadow
                hover:shadow-lg
                sm:p-4
                dark:border-zinc-700
                dark:bg-zinc-800
              "
            >
              {/* PRODUCT IMAGE */}

              <Link
                href={item.productUrl}
                className="block"
              >
                <div
                  className="
                    flex h-44 items-center
                    justify-center overflow-hidden
                    rounded-lg bg-gray-50 p-2
                    sm:h-52
                    dark:bg-zinc-900
                  "
                >
                  <Image
                    src={item.url}
                    alt={`${item.name} in ${city}`}
                    width={400}
                    height={400}
                    priority={index === 0}
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 768px) 33vw,
                      25vw
                    "
                    className="
                      max-h-40 w-auto max-w-full
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-105
                      sm:max-h-48
                    "
                  />
                </div>
              </Link>

              {/* PRODUCT NAME */}

              <Link
                href={item.productUrl}
                className="
                  mt-4 block
                  text-center text-sm
                  font-semibold
                  text-gray-900
                  hover:text-blue-600
                  dark:text-white
                  dark:hover:text-blue-400
                "
              >
                <span className="line-clamp-2">
                  {item.name}
                </span>
              </Link>

              {/* PRODUCT BUTTON */}

              <Link
                href={item.productUrl}
                className="
                  mt-4 rounded-lg
                  bg-blue-600 px-3 py-2
                  text-center text-sm
                  font-semibold text-white
                  transition
                  hover:bg-blue-700
                "
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          POPULAR SEARCHES
      ========================= */}

      <div
        className="
          mb-14 rounded-xl
          bg-gray-50 p-6
          dark:bg-zinc-900
        "
      >
        <h2
          className="
            mb-6 text-2xl font-semibold
            text-gray-900
            dark:text-white
          "
        >
          Popular Searches in {city}
        </h2>

        <div className="flex flex-wrap gap-3">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="
                rounded-full
                border border-gray-200
                bg-white px-4 py-2
                text-sm text-gray-700
                shadow-sm
                dark:border-zinc-700
                dark:bg-zinc-800
                dark:text-gray-200
              "
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* =========================
          NEARBY CITIES
      ========================= */}

      <div className="mb-14">
        <h2
          className="
            mb-6 text-2xl font-semibold
            text-gray-900
            dark:text-white
          "
        >
          Nearby Cities We Serve
        </h2>

        <div className="flex flex-wrap gap-3">
          {rajasthanLocations
            .filter(
              (location) =>
                location.slug !== locationSlug
            )
            .slice(0, 20)
            .map((location) => (
              <Link
                key={location.slug}
                href={`/locations/milk-analyzer-${location.slug}`}
                className="
                  rounded-full
                  bg-blue-100
                  px-4 py-2
                  text-sm font-medium
                  text-blue-700
                  transition
                  hover:bg-blue-200
                  dark:bg-blue-950
                  dark:text-blue-300
                  dark:hover:bg-blue-900
                "
              >
                {location.city}
              </Link>
            ))}
        </div>
      </div>

      {/* =========================
          CTA
      ========================= */}

      <div
        className="
          rounded-2xl bg-blue-200
          p-8 text-center text-black
          md:p-10
        "
      >
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Buy Milk Analyzer Machine in {city}
        </h2>

        <p className="mb-6 text-base md:text-lg">
          Contact us for best price, installation and
          technical support in {city}.
        </p>

        <Link
          href={createWhatsAppLink(city)}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block rounded-lg
            bg-green-300 px-6 py-3
            font-semibold text-black
            transition
            hover:bg-green-400
          "
        >
          WhatsApp Now
        </Link>
      </div>
    </section>
  );
}
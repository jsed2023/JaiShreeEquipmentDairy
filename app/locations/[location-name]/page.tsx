"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Milk,
  Factory,
  Settings,
  Wrench,
  Truck,
  BadgeCheck,
  IndianRupee,
  Headphones,
  Package,
  Search,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

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

  const normalizedParam = rawUrlParam.toLowerCase().trim();

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

  const locationSlug = normalizedParam.slice(prefix.length);

  if (!locationSlug) {
    notFound();
  }

  /* =========================
     FIND LOCATION
  ========================= */

  const validLocation = rajasthanLocations.find(
    (location) =>
      location.slug.toLowerCase() === locationSlug.toLowerCase()
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
     FEATURES
  ========================= */

  const features = [
    {
      title: "Fast Delivery",
      icon: Truck,
    },
    {
      title: "Installation Support",
      icon: Settings,
    },
    {
      title: "Best Price",
      icon: IndianRupee,
    },
    {
      title: "Technical Service",
      icon: Headphones,
    },
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
        <div
          className="
            mb-4 flex h-16 w-16
            items-center justify-center
            rounded-full bg-white/80
            shadow-sm
          "
        >
          <Milk
            className="h-9 w-9 text-blue-600"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div className="mb-3 flex items-center gap-2">
          <MapPin
            className="h-5 w-5 text-blue-700"
            aria-hidden="true"
          />

          <span className="font-semibold text-blue-800">
            {city}, Rajasthan
          </span>
        </div>

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
            mt-6 inline-flex
            items-center gap-2
            rounded-lg
            bg-white px-6 py-3
            font-semibold text-blue-600
            transition
            hover:bg-gray-100
          "
        >
          <MessageCircle
            className="h-5 w-5"
            aria-hidden="true"
          />

          WhatsApp Now

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
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
            transition-shadow hover:shadow-md
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className="
                flex h-11 w-11
                shrink-0 items-center justify-center
                rounded-lg bg-blue-100
                dark:bg-blue-950
              "
            >
              <Milk
                className="h-6 w-6 text-blue-600"
                aria-hidden="true"
              />
            </div>

            <h2
              className="
                text-2xl font-semibold
                text-gray-900
                dark:text-white
              "
            >
              About Milk Analyzer in {city}
            </h2>
          </div>

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
            transition-shadow hover:shadow-md
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className="
                flex h-11 w-11
                shrink-0 items-center justify-center
                rounded-lg bg-green-100
                dark:bg-green-950
              "
            >
              <Factory
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
              />
            </div>

            <h2
              className="
                text-2xl font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Dairy Industry in {city}
            </h2>
          </div>

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
            transition-shadow hover:shadow-md
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className="
                flex h-11 w-11
                shrink-0 items-center justify-center
                rounded-lg bg-orange-100
                dark:bg-orange-950
              "
            >
              <Package
                className="h-6 w-6 text-orange-600"
                aria-hidden="true"
              />
            </div>

            <h2
              className="
                text-2xl font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Dairy Equipment Supplier in {city}
            </h2>
          </div>

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
            transition-shadow hover:shadow-md
            dark:border-zinc-700
            dark:bg-zinc-800
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className="
                flex h-11 w-11
                shrink-0 items-center justify-center
                rounded-lg bg-purple-100
                dark:bg-purple-950
              "
            >
              <Wrench
                className="h-6 w-6 text-purple-600"
                aria-hidden="true"
              />
            </div>

            <h2
              className="
                text-2xl font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Installation &amp; Support in {city}
            </h2>
          </div>

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
        <div className="mb-8 flex flex-col items-center">
          <div
            className="
              mb-3 flex h-12 w-12
              items-center justify-center
              rounded-full bg-blue-100
              dark:bg-blue-950
            "
          >
            <ShieldCheck
              className="h-7 w-7 text-blue-600"
              aria-hidden="true"
            />
          </div>

          <h2
            className="
              text-3xl font-bold
              text-gray-900
              dark:text-white
            "
          >
            Why Choose Us in {city}
          </h2>
        </div>

        <div
          className="
            grid grid-cols-2 gap-4
            md:grid-cols-4 md:gap-6
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  rounded-xl border border-gray-200
                  bg-white p-5 shadow-sm
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-lg
                  dark:border-zinc-700
                  dark:bg-zinc-800
                "
              >
                <div
                  className="
                    mx-auto mb-3 flex h-12 w-12
                    items-center justify-center
                    rounded-full bg-blue-100
                    dark:bg-blue-950
                  "
                >
                  <Icon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <p
                  className="
                    font-semibold text-gray-900
                    dark:text-white
                  "
                >
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================
          PRODUCTS
      ========================= */}

      <div className="mb-14">
        <div className="mb-8 flex flex-col items-center">
          <div
            className="
              mb-3 flex h-12 w-12
              items-center justify-center
              rounded-full bg-orange-100
              dark:bg-orange-950
            "
          >
            <Package
              className="h-7 w-7 text-orange-600"
              aria-hidden="true"
            />
          </div>

          <h2
            className="
              text-center text-3xl
              font-bold text-gray-900
              dark:text-white
            "
          >
            Dairy Machines in {city}
          </h2>
        </div>

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
                transition-all
                hover:-translate-y-1
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
                  mt-4 flex items-start justify-center gap-1
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
                  mt-4 inline-flex
                  items-center justify-center gap-2
                  rounded-lg
                  bg-blue-600 px-3 py-2
                  text-center text-sm
                  font-semibold text-white
                  transition
                  hover:bg-blue-700
                "
              >
                View Product

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
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
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
              flex h-11 w-11
              shrink-0 items-center justify-center
              rounded-lg bg-blue-100
              dark:bg-blue-950
            "
          >
            <Search
              className="h-6 w-6 text-blue-600"
              aria-hidden="true"
            />
          </div>

          <h2
            className="
              text-2xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Popular Searches in {city}
          </h2>
        </div>

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
        <div className="mb-6 flex items-center gap-3">
          <div
            className="
              flex h-11 w-11
              shrink-0 items-center justify-center
              rounded-lg bg-green-100
              dark:bg-green-950
            "
          >
            <MapPin
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>

          <h2
            className="
              text-2xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Nearby Cities We Serve
          </h2>
        </div>

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
                  inline-flex
                  items-center gap-2
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
                <MapPin
                  className="h-4 w-4"
                  aria-hidden="true"
                />

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
        <div
          className="
            mx-auto mb-4 flex h-14 w-14
            items-center justify-center
            rounded-full bg-white/80
          "
        >
          <Milk
            className="h-7 w-7 text-blue-600"
            aria-hidden="true"
          />
        </div>

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
            inline-flex
            items-center justify-center gap-2
            rounded-lg
            bg-green-300 px-6 py-3
            font-semibold text-black
            transition
            hover:bg-green-400
          "
        >
          <MessageCircle
            className="h-5 w-5"
            aria-hidden="true"
          />

          WhatsApp Now

          <ArrowRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
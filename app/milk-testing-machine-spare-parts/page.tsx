"use client";

import Image from "next/image";
import Link from "next/link";
import { spareParts } from "@/config/spareparts";

export default function SparePartsPage() {
  // Generate a URL-friendly product slug
  const getSlug = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // WhatsApp enquiry URL
  const getWhatsAppUrl = (productName: string): string => {
    const message = `Hello, I am interested in ${productName}`;
    return `https://wa.me/917375082341?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      {/* HERO */}
      <section className="mb-8 sm:mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-sky-100 to-blue-100 p-6 shadow dark:from-sky-900 dark:to-zinc-900 sm:p-10">
          <h1 className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-5xl">
            Milk Testing Machine Spare Parts
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-600 dark:text-slate-300 sm:leading-8">
            Genuine spare parts for milk analyzers, automatic milk
            collection systems and dairy testing equipment.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mb-10 sm:mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-sky-100 to-blue-100 p-6 shadow dark:from-sky-900 dark:to-zinc-900 sm:p-10">
          <p className="mx-auto max-w-4xl text-center text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            Jai Shree Equipment Dairy supplies genuine spare parts for
            Milk Analyzer Machines, Automatic Milk Collection Systems,
            Milk Testing Equipment and Dairy Processing Machines.

            We provide pumps, PCB boards, sensors, valves, thermal
            printers, LCD displays, motors, power supplies and
            replacement components with delivery across India.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="rounded-2xl bg-zinc-100 p-6 shadow-sm dark:bg-zinc-900 sm:p-8">
        <div className="space-y-4 leading-7 text-stone-700 dark:text-gray-300 sm:leading-8">
          <p>
            <strong>Jai Shree Equipment Dairy</strong> supplies dairy
            equipment spare parts in Rajasthan and across India. We
            offer replacement components for compatible milk analyzer
            machines and automatic milk collection systems.
          </p>

          <p>
            Our product range supports dairy farms, milk collection
            centres and dairy processing plants. Please confirm the
            model and compatibility before ordering replacement parts.
          </p>

          <p>
            Contact our team for product availability, pricing,
            installation guidance and technical support.
          </p>
        </div>
      </section>

      {/* PRODUCTS TITLE */}
      <section className="mb-8 mt-12">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow dark:border-zinc-700 dark:bg-zinc-900">
          <h2 className="animate-title-gradient bg-clip-text text-center text-xl font-bold text-transparent underline sm:text-4xl">
            Available Milk Analyzer Spare Parts
          </h2>

          <p className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:text-base">
            Browse spare parts, accessories and testing equipment
            for dairy applications.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
        {spareParts.map((product) => {
          const productUrl = `/milk-testing-machine-spare-parts/${getSlug(
            product.name
          )}`;

          return (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              {/* CLICKABLE PRODUCT IMAGE */}
              <Link
                href={productUrl}
                aria-label={`View ${product.name} details`}
                className="block"
              >
                <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:h-72">
                  <Image
                    src={product.photo}
                    alt={product.alt || product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    priority={product.id <= 3}
                  />
                </div>
              </Link>

              {/* PRODUCT CONTENT */}
              <div className="p-5 sm:p-6">
                {/* CLICKABLE PRODUCT NAME */}
                <h3 className="text-center text-lg font-bold leading-7 text-zinc-900 dark:text-white sm:text-xl">
                  <Link
                    href={productUrl}
                    className="transition-colors hover:text-sky-600"
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* PRICE */}
                <p className="mt-3 text-center text-xl font-bold text-sky-600 sm:text-2xl">
                  {product.price}
                </p>

                {/* STOCK STATUS */}
                <div className="mt-3 flex justify-center">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="mr-1" aria-hidden="true">
                      ●
                    </span>
                    {product.stockStatus}
                  </span>
                </div>

                {/* SHORT DESCRIPTION */}
                <p className="mt-4 line-clamp-3 text-center text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {product.metaDescription}
                </p>

                {/* BASIC PRODUCT INFORMATION */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                    <span className="block text-zinc-500 dark:text-zinc-400">
                      SKU
                    </span>

                    <span className="break-all font-semibold text-zinc-800 dark:text-zinc-200">
                      {product.sku}
                    </span>
                  </div>

                  <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                    <span className="block text-zinc-500 dark:text-zinc-400">
                      Warranty
                    </span>

                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {product.warranty}
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {/* OPENS PRODUCT DETAIL PAGE */}
                  <Link
                    href={productUrl}
                    className="flex-1 rounded-xl bg-sky-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-sky-700 active:scale-[0.98]"
                  >
                    View Details
                  </Link>

                  {/* WHATSAPP ENQUIRY */}
                  <a
                    href={getWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-green-600 px-4 py-3 text-center font-semibold text-green-600 transition hover:bg-green-600 hover:text-white"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-16 sm:mt-20">
        <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl">
          Why Choose Our Dairy Equipment Spare Parts?
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {[
            {
              icon: "✅",
              title: "Genuine Parts",
              description:
                "Quality replacement parts for dairy equipment.",
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              description:
                "Delivery options for customers across India.",
            },
            {
              icon: "🛠️",
              title: "Technical Support",
              description:
                "Installation guidance and product assistance.",
            },
            {
              icon: "💯",
              title: "Wide Compatibility",
              description:
                "Parts for compatible milk analyzers and dairy systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow dark:border-zinc-700 dark:bg-zinc-900"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="mt-16 sm:mt-20">
        <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl">
          Applications of Milk Testing Machine Spare Parts
        </h2>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow dark:border-zinc-700 dark:bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold">
              🥛 Dairy Farms
            </h3>

            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              Replacement parts for milk analyzers, milking machines
              and dairy equipment used on dairy farms.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow dark:border-zinc-700 dark:bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold">
              🏭 Milk Collection Centers
            </h3>

            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              Spare parts for compatible AMCS systems, thermal
              printers, weighing systems and milk testing equipment.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow dark:border-zinc-700 dark:bg-zinc-900">
            <h3 className="mb-3 text-xl font-bold">
              ⚙️ Dairy Processing Plants
            </h3>

            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              Replacement components for dairy processing and
              milk quality testing applications.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-16 sm:mt-20">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-7 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-4xl">
            Looking for Genuine Dairy Spare Parts?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-sky-50 sm:mt-5 sm:text-lg sm:leading-8">
            Contact Jai Shree Equipment Dairy for milk analyzer
            spare parts, AMCS components, testing equipment accessories
            and product support.
          </p>

          <a
            href="https://wa.me/917375082341?text=Hello%2C%20I%20am%20interested%20in%20dairy%20equipment%20spare%20parts."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-xl bg-white px-8 py-3.5 font-bold text-sky-700 transition hover:scale-105 sm:mt-8 sm:px-10 sm:py-4"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}

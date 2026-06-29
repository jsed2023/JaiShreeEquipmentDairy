"use client";

import { useState } from "react";
import { Image } from "@nextui-org/react";
import { spareParts } from "@/config/spareparts";
import { cld } from "@/utils/cloudinary";
export default function SparePartsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* ================= HERO ================= */}

      <section className="mb-12">

        <div className="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900 dark:to-zinc-900 rounded-3xl p-10 shadow">

          <h1
            className="text-center text-3xl sm:text-5xl font-extrabold
            bg-gradient-to-r from-sky-600 to-blue-700
            bg-clip-text text-transparent"
          >
            Milk Testing Machine Spare Parts
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-center text-lg leading-8 text-slate-600 dark:text-slate-300">
            Jai Shree Equipment Dairy supplies genuine spare parts for
            Milk Analyzer Machines, Automatic Milk Collection Systems,
            Milk Testing Equipment and Dairy Processing Machines.

            We provide premium pumps, PCB boards, sensors,
            valves, thermal printers, LCD displays, motors,
            power supplies and original replacement components
            with fast delivery across India.
          </p>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="rounded-2xl bg-[rgb(244,244,245)] dark:bg-zinc-900 p-8 shadow-sm">

        <p className="text-stone-700 dark:text-gray-300 leading-8 flex flex-col gap-4">

          <span>
            <b>Jai Shree Equipment Dairy</b> is one of the trusted suppliers
            of genuine dairy equipment spare parts in Rajasthan.
            We provide high-quality replacement components compatible
            with leading Milk Analyzer Machines and Automatic Milk
            Collection Systems.
          </span>

          <span>
            Our spare parts are manufactured using premium materials,
            ensuring excellent durability, accurate performance,
            long service life and easy installation for dairy farms,
            milk collection centres and dairy processing plants.
          </span>

          <span>
            We offer nationwide delivery, technical support,
            installation guidance and genuine replacement parts
            at competitive prices.
          </span>

        </p>

      </section>

      {/* ================= PRODUCTS TITLE ================= */}

      <section className="mt-12 mb-8">

        <div className="border rounded-2xl p-5 bg-white dark:bg-zinc-900 shadow">

          <h2
            className="text-center font-bold underline sm:text-4xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Available Milk Analyzer Spare Parts
          </h2>

        </div>

      </section>

      {/* ================= PRODUCTS GRID ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {spareParts.map((product) => (

          <article
            key={product.id}
            className="group overflow-hidden rounded-2xl
            bg-white dark:bg-zinc-900
            border border-gray-200 dark:border-zinc-700
            shadow-md hover:shadow-2xl
            transition-all duration-300 hover:-translate-y-2"
          >

            {/* Product Image */}

            <div className="bg-gray-100 dark:bg-zinc-800 h-72 flex justify-center items-center p-6 overflow-hidden">

              <Image
                src={cld(product.photo)}
                alt={product.name}
                width={260}
                height={220}
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

            </div>

            {/* Product Content */}

            <div className="p-6">

              <h3 className="text-xl font-bold text-center text-zinc-900 dark:text-white">
                {product.name}
              </h3>

              <p className="text-center text-2xl font-bold text-sky-600 mt-3">
                {product.price}
              </p>

              <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-4 leading-6">
                Genuine replacement spare part for milk analyzer and dairy
                equipment with excellent quality and long service life.
              </p>

              {/* Buttons */}

              <div className="mt-6 flex gap-3">

                <button
                  onClick={() =>
                    setOpenId(openId === product.id ? null : product.id)
                  }
                  className="flex-1 bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 transition"
                >
                  {openId === product.id
                    ? "Hide Details"
                    : "View Details"}
                </button>

                <a
                  href={`https://wa.me/917375082341?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-green-600 text-green-600
                  text-center py-3 rounded-xl font-semibold
                  hover:bg-green-600 hover:text-white transition"
                >
                  Enquire
                </a>

              </div>

              {/* Details */}

              {openId === product.id && (

                <div className="mt-6 border-t border-zinc-200 dark:border-zinc-700 pt-5">

                  <div className="space-y-2 text-sm">

                    <p>
                      <strong>SKU :</strong> {product.sku}
                    </p>

                    <p>
                      <strong>Category :</strong> {product.category}
                    </p>

                    <p>
                      <strong>Stock :</strong> {product.stockStatus}
                    </p>

                    <p>
                      <strong>Warranty :</strong> {product.warranty}
                    </p>

                  </div>

                  <p className="mt-5 text-zinc-600 dark:text-zinc-400 leading-7">
                    {product.description}
                  </p>

                  <h4 className="font-bold text-lg mt-6 mb-3">
                    Specifications
                  </h4>

                  <table className="w-full text-sm rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700">

                    <tbody>

                      {Object.entries(product.specifications).map(
                        ([key, value]) => (

                          <tr key={key}>

                            <td className="border px-3 py-2 font-medium bg-slate-100 dark:bg-zinc-800">
                              {key}
                            </td>

                            <td className="border px-3 py-2">
                              {String(value)}
                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                  <a
                    href={`https://wa.me/917375082341?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 bg-green-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                  >
                    WhatsApp Enquiry
                  </a>

                </div>

              )}

            </div>

          </article>

        ))}

      </div>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Our Dairy Equipment Spare Parts?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-bold text-lg">Genuine Parts</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Original quality spare parts with long service life.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="font-bold text-lg">Fast Delivery</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Safe and quick delivery across India.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="font-bold text-lg">Technical Support</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Installation guidance and expert after-sales support.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">💯</div>
            <h3 className="font-bold text-lg">100% Compatible</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Compatible with leading milk analyzers and dairy equipment.
            </p>
          </div>

        </div>

      </section>

      {/* ================= APPLICATIONS ================= */}

      <section className="mt-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Applications of Milk Testing Machine Spare Parts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6">
            <h3 className="text-xl font-bold mb-3">
              🥛 Dairy Farms
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              Genuine replacement parts for milk analyzers,
              milking machines and dairy equipment used in
              modern dairy farms.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6">
            <h3 className="text-xl font-bold mb-3">
              🏭 Milk Collection Centers
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              Reliable spare parts for AMCS systems,
              thermal printers, weighing systems and
              milk testing equipment.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6">
            <h3 className="text-xl font-bold mb-3">
              ⚙ Dairy Processing Plants
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              Durable replacement components for continuous
              dairy processing operations and quality control.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="mt-20">

        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 text-white p-12 text-center">

          <h2 className="text-4xl font-bold">
            Looking for Genuine Dairy Spare Parts?
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8">
            Contact Jai Shree Equipment Dairy today for genuine
            Milk Analyzer spare parts, AMCS components,
            Milk Testing Equipment accessories and expert support.
          </p>

          <a
            href="https://wa.me/917375082341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-sky-700 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Get Free Quote
          </a>

        </div>

      </section>

    </section>
  );
}


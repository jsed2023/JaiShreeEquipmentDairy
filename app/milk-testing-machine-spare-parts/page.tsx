"use client";

import Image from "next/image";
import { useState } from "react";
import { spareParts } from "@/config/spareparts";

export default function SparePartsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const getWhatsAppUrl = (productName: string) => {
    const message = `Hello, I am interested in ${productName}`;
    return `https://wa.me/917375082341?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:py-10">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mb-8 sm:mb-12">
        <div
          className="
            rounded-3xl
            bg-linear-to-r
            from-sky-100
            to-blue-100
            dark:from-sky-900
            dark:to-zinc-900
            p-6
            sm:p-10
            shadow
          "
        >
          <h1
            className="
              text-center
              text-3xl
              sm:text-5xl
              font-extrabold
              bg-linear-to-r
              from-sky-600
              to-blue-700
              bg-clip-text
              text-transparent
            "
          >
            Milk Testing Machine Spare Parts
          </h1>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="mb-10 sm:mb-12">
        <div
          className="
            rounded-3xl
            bg-linear-to-r
            from-sky-100
            to-blue-100
            dark:from-sky-900
            dark:to-zinc-900
            p-6
            sm:p-10
            shadow
          "
        >
          <p
            className="
              max-w-4xl
              mx-auto
              text-center
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-slate-600
              dark:text-slate-300
            "
          >
            Jai Shree Equipment Dairy supplies genuine spare parts for
            Milk Analyzer Machines, Automatic Milk Collection Systems,
            Milk Testing Equipment and Dairy Processing Machines.

            We provide premium pumps, PCB boards, sensors, valves,
            thermal printers, LCD displays, motors, power supplies
            and original replacement components with fast delivery
            across India.
          </p>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        className="
          rounded-2xl
          bg-zinc-100
          dark:bg-zinc-900
          p-6
          sm:p-8
          shadow-sm
        "
      >
        <div
          className="
            text-stone-700
            dark:text-gray-300
            leading-7
            sm:leading-8
            space-y-4
          "
        >
          <p>
            <b>Jai Shree Equipment Dairy</b> is one of the trusted
            suppliers of genuine dairy equipment spare parts in Rajasthan.
            We provide high-quality replacement components compatible
            with leading Milk Analyzer Machines and Automatic Milk
            Collection Systems.
          </p>

          <p>
            Our spare parts are manufactured using premium materials,
            ensuring excellent durability, accurate performance,
            long service life and easy installation for dairy farms,
            milk collection centres and dairy processing plants.
          </p>

          <p>
            We offer nationwide delivery, technical support,
            installation guidance and genuine replacement parts
            at competitive prices.
          </p>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS TITLE
      ========================================================= */}

      <section className="mt-12 mb-8">
        <div
          className="
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-700
            bg-white
            dark:bg-zinc-900
            p-5
            shadow
          "
        >
          <h2
            className="
              animate-title-gradient
              bg-clip-text
              text-center
              text-xl
              sm:text-4xl
              font-bold
              text-transparent
              underline
            "
          >
            Available Milk Analyzer Spare Parts
          </h2>

          <p className="text-center text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-3">
            Genuine spare parts, accessories and testing equipment
            for dairy applications.
          </p>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS GRID
      ========================================================= */}

      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          sm:gap-8
        "
      >
        {spareParts.map((product) => {
          const isOpen = openId === product.id;

          return (
            <article
              key={product.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                bg-white
                dark:bg-zinc-900
                border
                border-zinc-200
                dark:border-zinc-700
                shadow-md
                hover:shadow-xl
                transition-shadow
                duration-300
              "
            >

              {/* =================================================
                  PRODUCT IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-64
                  sm:h-72
                  overflow-hidden
                  bg-zinc-100
                  dark:bg-zinc-800
                "
              >
                <Image
                  src={product.photo}
                  alt={product.alt || product.name}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1280px) 50vw,
                    33vw
                  "
                  className="
                    object-contain
                    p-4
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  loading={product.id <= 3 ? "eager" : "lazy"}
                />
              </div>

              {/* =================================================
                  PRODUCT CONTENT
              ================================================= */}

              <div className="p-5 sm:p-6">

                {/* Product Name */}

                <h3
                  className="
                    text-lg
                    sm:text-xl
                    font-bold
                    text-center
                    text-zinc-900
                    dark:text-white
                    leading-7
                  "
                >
                  {product.name}
                </h3>

                {/* Price */}

                <p
                  className="
                    text-center
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-sky-600
                    mt-3
                  "
                >
                  {product.price}
                </p>

                {/* Stock */}

                <div className="flex justify-center mt-3">
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-green-100
                      dark:bg-green-900/30
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-green-700
                      dark:text-green-400
                    "
                  >
                    ● {product.stockStatus}
                  </span>
                </div>

                {/* Short Description */}

                <p
                  className="
                    text-sm
                    text-center
                    text-zinc-500
                    dark:text-zinc-400
                    mt-4
                    leading-6
                    line-clamp-3
                  "
                >
                  {product.metaDescription}
                </p>

                {/* =================================================
                    BASIC PRODUCT INFO
                ================================================= */}

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-2
                    text-xs
                    sm:text-sm
                  "
                >
                  <div
                    className="
                      rounded-lg
                      bg-zinc-100
                      dark:bg-zinc-800
                      p-2
                    "
                  >
                    <span className="block text-zinc-500 dark:text-zinc-400">
                      SKU
                    </span>

                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 break-all">
                      {product.sku}
                    </span>
                  </div>

                  <div
                    className="
                      rounded-lg
                      bg-zinc-100
                      dark:bg-zinc-800
                      p-2
                    "
                  >
                    <span className="block text-zinc-500 dark:text-zinc-400">
                      Warranty
                    </span>

                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {product.warranty}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="mt-5 flex flex-col sm:flex-row gap-3">

                  <button
                    type="button"
                    onClick={() => toggleDetails(product.id)}
                    aria-expanded={isOpen}
                    aria-controls={`product-details-${product.id}`}
                    className="
                      flex-1
                      bg-sky-600
                      text-white
                      py-3
                      px-4
                      rounded-xl
                      font-semibold
                      hover:bg-sky-700
                      active:scale-[0.98]
                      transition
                    "
                  >
                    {isOpen ? "Hide Details" : "View Details"}
                  </button>

                  <a
                    href={getWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      border
                      border-green-600
                      text-green-600
                      text-center
                      py-3
                      px-4
                      rounded-xl
                      font-semibold
                      hover:bg-green-600
                      hover:text-white
                      transition
                    "
                  >
                    Enquire
                  </a>

                </div>

                {/* =================================================
                    PRODUCT DETAILS
                ================================================= */}

                {isOpen && (
                  <div
                    id={`product-details-${product.id}`}
                    className="
                      mt-6
                      border-t
                      border-zinc-200
                      dark:border-zinc-700
                      pt-5
                    "
                  >

                    {/* =============================================
                        KEY FEATURES
                    ============================================= */}

                    {product.keyFeatures?.length > 0 && (
                      <div>

                        <h4
                          className="
                            text-lg
                            font-bold
                            text-zinc-900
                            dark:text-white
                            mb-4
                          "
                        >
                          Key Features
                        </h4>

                        <ul className="space-y-2">
                          {product.keyFeatures.map(
                            (feature, index) => (
                              <li
                                key={`${product.id}-feature-${index}`}
                                className="
                                  flex
                                  items-start
                                  gap-2
                                  text-sm
                                  leading-6
                                  text-zinc-700
                                  dark:text-zinc-300
                                "
                              >
                                <span
                                  className="
                                    mt-1
                                    flex
                                    h-5
                                    w-5
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-green-100
                                    dark:bg-green-900/30
                                    text-green-600
                                    text-xs
                                    font-bold
                                  "
                                >
                                  ✓
                                </span>

                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>

                      </div>
                    )}

                    {/* =============================================
                        BASIC INFORMATION
                    ============================================= */}

                    <div className="mt-6">

                      <h4
                        className="
                          text-lg
                          font-bold
                          text-zinc-900
                          dark:text-white
                          mb-3
                        "
                      >
                        Product Information
                      </h4>

                      <div className="space-y-2 text-sm">

                        <p className="flex justify-between gap-4">
                          <strong>SKU:</strong>
                          <span className="text-right break-all">
                            {product.sku}
                          </span>
                        </p>

                        <p className="flex justify-between gap-4">
                          <strong>Category:</strong>
                          <span className="text-right">
                            {product.category}
                          </span>
                        </p>

                        <p className="flex justify-between gap-4">
                          <strong>Stock:</strong>
                          <span className="text-right text-green-600">
                            {product.stockStatus}
                          </span>
                        </p>

                        <p className="flex justify-between gap-4">
                          <strong>Warranty:</strong>
                          <span className="text-right">
                            {product.warranty}
                          </span>
                        </p>

                      </div>

                    </div>

                    {/* =============================================
                        DESCRIPTION
                    ============================================= */}

                    <div className="mt-6">

                      <h4
                        className="
                          text-lg
                          font-bold
                          text-zinc-900
                          dark:text-white
                          mb-3
                        "
                      >
                        Description
                      </h4>

                      <p
                        className="
                          text-sm
                          text-zinc-600
                          dark:text-zinc-400
                          leading-7
                        "
                      >
                        {product.description}
                      </p>

                    </div>

                    {/* =============================================
                        SPECIFICATIONS
                    ============================================= */}

                    {product.specifications &&
                      Object.keys(product.specifications).length > 0 && (
                        <div className="mt-6">

                          <h4
                            className="
                              text-lg
                              font-bold
                              text-zinc-900
                              dark:text-white
                              mb-3
                            "
                          >
                            Specifications
                          </h4>

                          <div
                            className="
                              overflow-x-auto
                              rounded-xl
                              border
                              border-zinc-200
                              dark:border-zinc-700
                            "
                          >
                            <table
                              className="
                                w-full
                                min-w-70
                                text-sm
                                border-collapse
                              "
                            >
                              <tbody>
                                {Object.entries(
                                  product.specifications
                                ).map(([key, value]) => (
                                  <tr
                                    key={`${product.id}-${key}`}
                                    className="
                                      border-b
                                      last:border-b-0
                                      border-zinc-200
                                      dark:border-zinc-700
                                    "
                                  >
                                    <td
                                      className="
                                        w-2/5
                                        px-3
                                        py-2.5
                                        font-medium
                                        bg-zinc-100
                                        dark:bg-zinc-800
                                        text-zinc-700
                                        dark:text-zinc-300
                                      "
                                    >
                                      {key}
                                    </td>

                                    <td
                                      className="
                                        px-3
                                        py-2.5
                                        text-zinc-600
                                        dark:text-zinc-400
                                      "
                                    >
                                      {String(value)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                        </div>
                      )}

                    {/* =============================================
                        WHATSAPP ENQUIRY
                    ============================================= */}

                    <a
                      href={getWhatsAppUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block
                        mt-6
                        bg-green-600
                        text-white
                        text-center
                        py-3
                        rounded-xl
                        font-semibold
                        hover:bg-green-700
                        active:scale-[0.98]
                        transition
                      "
                    >
                      WhatsApp Enquiry
                    </a>

                  </div>
                )}

              </div>
            </article>
          );
        })}
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="mt-16 sm:mt-20">

        <h2
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-center
            mb-8
            sm:mb-10
          "
        >
          Why Choose Our Dairy Equipment Spare Parts?
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-6
          "
        >

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">✅</div>

            <h3 className="font-bold text-lg">
              Genuine Parts
            </h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Original quality spare parts with long service life.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">🚚</div>

            <h3 className="font-bold text-lg">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Safe and quick delivery across India.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">🛠️</div>

            <h3 className="font-bold text-lg">
              Technical Support
            </h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Installation guidance and expert after-sales support.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow p-6 text-center">
            <div className="text-5xl mb-4">💯</div>

            <h3 className="font-bold text-lg">
              Wide Compatibility
            </h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Compatible with leading milk analyzers and dairy equipment.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================
          APPLICATIONS
      ========================================================= */}

      <section className="mt-16 sm:mt-20">

        <h2
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-center
            mb-8
            sm:mb-10
          "
        >
          Applications of Milk Testing Machine Spare Parts
        </h2>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">

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
              ⚙️ Dairy Processing Plants
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              Durable replacement components for continuous
              dairy processing operations and quality control.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="mt-16 sm:mt-20">

        <div
          className="
            rounded-3xl
            bg-linear-to-r
            from-sky-600
            to-blue-700
            text-white
            p-7
            sm:p-12
            text-center
          "
        >

          <h2 className="text-2xl sm:text-4xl font-bold">
            Looking for Genuine Dairy Spare Parts?
          </h2>

          <p
            className="
              mt-4
              sm:mt-5
              max-w-3xl
              mx-auto
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-sky-50
            "
          >
            Contact Jai Shree Equipment Dairy today for genuine
            Milk Analyzer spare parts, AMCS components,
            Milk Testing Equipment accessories and expert support.
          </p>

          <a
            href="https://wa.me/917375082341"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-7
              sm:mt-8
              bg-white
              text-sky-700
              px-8
              sm:px-10
              py-3.5
              sm:py-4
              rounded-xl
              font-bold
              hover:scale-105
              transition
            "
          >
            Get Free Quote
          </a>

        </div>

      </section>

    </main>
  );
}
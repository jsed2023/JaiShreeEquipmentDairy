"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { GalleryImage } from "@/types";
import { cld } from "@/utils/cloudinary";


/* =========================
   GALLERY IMAGES
========================= */

const images: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1757013349/Advance_Milk_Analyzer_plus.png",
    name: "Advance Milk Analyzer Plus",
    altText:
      "Advance Milk Analyzer Plus for milk fat and SNF testing in dairy farms.",
    href: "/milk-testing-equipment/advance-milk-analyzer-plus",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1736160426/DPU_Milk_Collection_Unit_%28DAIRY%20KHATA%29.png",
    name: "DPU Milk Collection Unit",
    altText:
      "DPU Milk Collection Unit Dairy Khata for automated milk collection and digital records.",
    href: "/automatic-milk-collection-system/dpu-for-milk-collection",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1751737335/advance_milk_analyzer_max.png",
    name: "Advance Milk Analyzer Max",
    altText:
      "Advance Milk Analyzer Max for fast milk measurement at collection centers.",
    href: "/automatic-milk-collection-system/advance-milk-analyzer-max",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1765479086/Advance_Milk_Analyzer_Pro20.png",
    name: "Advance Milk Analyzer Pro20",
    altText:
      "Advance Milk Analyzer Pro20 for commercial dairy milk testing and quality control.",
    href: "/milk-testing-equipment/advance-milk-analyzer-pro20",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902688/Ultrasonic-Milk-Stirrer-Normal.jpg",
    name: "Ultrasonic Milk Stirrer Normal",
    altText:
      "Ultrasonic Milk Stirrer for preparing milk samples before testing.",
    href: "/automatic-milk-collection-system/ultrasonic-milk-stirrer-normal",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902601/Ekomilk%20ULTRA%20PRO.jpg",
    name: "Ekomilk ULTRA PRO",
    altText:
      "Ekomilk ULTRA PRO milk analyzer for dairy milk quality testing.",
    href: "/milk-testing-equipment/ekomilk-ultra-pro",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766061561/Ekomilk-Ultra-Analyzer.jpg",
    name: "Ekomilk Ultra Analyzer",
    altText:
      "Ekomilk Ultra Analyzer for testing milk parameters including density and added water.",
    href: "/milk-analyzer-machines/ekomilk-ultra-analyzer",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766085143/KREI_Ultrasonic_Milk_Stirrer.jpg",
    name: "KREI Ultrasonic Milk Stirrer",
    altText:
      "KREI Ultrasonic Milk Stirrer for preparing milk samples at collection centers.",
    href: "/automatic-milk-collection-system/ultrasonic-milk-stirrer",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902682/Advance%20Milk%20Analyzer.jpg",
    name: "Advance Milk Analyzer",
    altText:
      "Advance Milk Analyzer for daily milk quality testing on dairy farms.",
    href: "/milk-analyzer-machines/advance-milk-analyzer",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766092196/Milk_Analyzer_PCB_Motherboard_Front.png",
    name: "Milk Analyzer PCB Motherboard Front",
    altText:
      "Front view of a replacement PCB motherboard for milk analyzer repair.",
    href: "/milk-testing-machine-spare-parts",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766091579/Milk_Analyzer_PCB_Motherboard_back.png",
    name: "Milk Analyzer PCB Motherboard Back",
    altText:
      "Back view of a replacement PCB motherboard for milk analyzer servicing.",
    href: "/milk-testing-machine-spare-parts",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766090508/Milk_Analyzer_Plastic_Body_Cabinet.png",
    name: "Milk Analyzer Plastic Body Cabinet",
    altText:
      "Plastic body cabinet replacement part for Ekomilk and Advance milk analyzers.",
    href: "/milk-testing-machine-spare-parts",
  },
];

/* =========================
   CLOUDINARY OPTIMIZATION
========================= */

const getCldUrl = (src: string, width: number) =>
  cld(src, {
    width,
    quality: "auto",
    format: "auto",
    dpr: "auto",
  });

/* =========================
   PAGE
========================= */

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  return (
    <main className="mx-auto max-w-5xl px-5 py-6">

      {/* =========================
          SEO HEADER
      ========================= */}

      <header className="mb-7 text-center">

        <div
          className="
            mx-auto mb-4 flex w-fit
            items-center justify-center
            rounded-full
            border border-purple-400/30
            bg-linear-to-r
            from-purple-500/10
            via-blue-500/10
            to-cyan-500/10
            px-4 py-1.5
            backdrop-blur-sm
          "
        >
          <h1
            className="
              bg-linear-to-r
              from-purple-600
              via-blue-600
              to-cyan-500
              bg-clip-text
              text-center
              text-lg
              font-bold
              text-transparent
              md:text-xl
            "
          >
             Milk Analyzer Machines & Milk collection system Gallery
          </h1>
        </div>

        <p
          className="
            mx-auto
            max-w-3xl
            text-sm
            leading-6
            text-gray-600
            dark:text-gray-300
            md:text-base
          "
        >
          Explore our range of milk analyzers, milk collection
          equipment, ultrasonic milk stirrers and milk analyzer
          spare parts for dairy farms, milk collection centers
          and dairy businesses.
        </p>

      </header>

      {/* =========================
          GALLERY SECTION
      ========================= */}
<section
        <h2
          
          className="
            mb-4
            text-center
            text-xl
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          Milk Analyzer Machines & Milk collection system Gallery Products
        </h2>

        {/* =========================
            GALLERY GRID
        ========================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-4
            md:grid-cols-3
          "
        >
          {images.map((item, index) => {
            const isActive =
              activeIndex === index;

            /*
             * Product pages should be crawlable.
             * If a product URL is not available yet,
             * the card remains a button.
             */

            const cardContent = (
              <>
                {/* =========================
                    IMAGE
                ========================= */}

                <div
                  className="
                    relative
                    h-35
                    w-full
                    overflow-hidden
                    bg-[#f3f3f3]
                    sm:h-40
                    md:h-42.5
                    dark:bg-neutral-800
                  "
                >
                  <Image
                    src={getCldUrl(item.src, 800)}
                    alt={item.altText}
                    fill
                    priority={index === 0}
                    loading={
                      index === 0
                        ? undefined
                        : "lazy"
                    }
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 1024px) 33vw,
                      320px
                    "
                    className="
                      object-contain
                      p-3
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* =========================
                    PRODUCT NAME
                ========================= */}

                <div
                  className="
                    border-t
                    bg-[#e9e9fb]
                    px-2
                    py-3
                    dark:border-neutral-700
                    dark:bg-neutral-800
                  "
                >
                  <h3
                    className="
                      min-h-10
                      line-clamp-2
                      text-center
                      text-sm
                      font-semibold
                      leading-5
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {item.name}
                  </h3>
                </div>
              </>
            );

            /* =========================
               CRAWLABLE PRODUCT LINK
            ========================= */

            if (item.href) {
              return (
                <Link
                  key={item.src}
                  href={item.href}
                  aria-label={`View ${item.name}`}
                  className="
                    group
                    block
                    w-full
                    cursor-pointer
                    overflow-hidden
                    rounded-xl
                    bg-white
                    text-left
                    shadow
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-purple-500
                    dark:bg-neutral-900
                  "
                >
                  {cardContent}
                </Link>
              );
            }

            /* =========================
               FALLBACK BUTTON
            ========================= */

            return (
              <button
                key={item.src}
                type="button"
                aria-label={`View ${item.name}`}
                aria-pressed={isActive}
                onClick={() =>
                  setActiveIndex(
                    isActive
                      ? null
                      : index
                  )
                }
                className={`
                  group
                  block
                  w-full
                  cursor-pointer
                  overflow-hidden
                  rounded-xl
                  bg-white
                  text-left
                  transition-all
                  duration-300
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-purple-500
                  dark:bg-neutral-900

                  ${
                    isActive
                      ? "scale-105 shadow-2xl ring-4 ring-rose-400"
                      : "shadow hover:-translate-y-1 hover:shadow-lg"
                  }
                `}
              >
                {cardContent}
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================
          SEO / CTA SECTION
      ========================= */}

      <section
        className="
          mt-10
          rounded-2xl
          border
          border-purple-200
          bg-linear-to-r
          from-purple-50
          via-blue-50
          to-cyan-50
          p-6
          text-center
          dark:border-neutral-700
          dark:from-neutral-900
          dark:via-neutral-900
          dark:to-neutral-800
        "
        aria-labelledby="gallery-help"
      >
        <h2
          id="gallery-help"
          className="
            text-lg
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          Looking for Dairy Equipment?
        </h2>

        <p
          className="
            mx-auto
            mt-2
            max-w-2xl
            text-sm
            leading-6
            text-gray-600
            dark:text-gray-300
          "
        >
          Browse our dairy equipment and milk testing
          solutions or contact us for product information,
          availability and support.
        </p>

        <div
          className="
            mt-4
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          <Link
            href="/milk-analyzer-machines"
            className="
              rounded-lg
              bg-purple-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-purple-700
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-purple-500
            "
          >
            View All Products
          </Link>

          <Link
            href="/contact"
            className="
              rounded-lg
              border
              border-purple-300
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-purple-700
              transition
              hover:bg-purple-50
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-purple-500
              dark:border-neutral-600
              dark:bg-neutral-800
              dark:text-purple-300
              dark:hover:bg-neutral-700
            "
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}
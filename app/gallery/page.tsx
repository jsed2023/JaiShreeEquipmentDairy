"use client";

import { useState } from "react";
import Image from "next/image";

import { cld } from "@/utils/cloudinary";

/* =========================
   TYPES
========================= */

interface GalleryImage {
  src: string;
  name: string;
  altText: string;
}

/* =========================
   GALLERY IMAGES
========================= */

const images: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1757013349/Advance_Milk_Analyzer_plus.png",
    name: "Advance Milk Analyzer Plus",
    altText:
      "Advance Milk Analyzer Plus machine for accurate milk fat and SNF testing in dairy farms.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1736160426/DPU_Milk_Collection_Unit_%28DAIRY%20KHATA%29.png",
    name: "DPU Milk Collection Unit",
    altText:
      "DPU Milk Collection Unit Dairy Khata for automated milk collection and digital record keeping.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1751737335/advance_milk_analyzer_max.png",
    name: "Advance Milk Analyzer Max",
    altText:
      "Advance Milk Analyzer Max equipment for fast, high-volume milk measurement at collection centers.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1765479086/Advance_Milk_Analyzer_Pro20.png",
    name: "Advance Milk Analyzer Pro",
    altText:
      "Advance Milk Analyzer Pro for commercial dairy milk testing and quality control.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902688/Ultrasonic-Milk-Stirrer-Normal.jpg",
    name: "Ultrasonic Milk Stirrer Normal",
    altText:
      "Standard Ultrasonic Milk Stirrer for removing air bubbles from milk samples before testing.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902601/Ekomilk%20ULTRA%20PRO.jpg",
    name: "Ekomilk ULTRA PRO",
    altText:
      "Ekomilk ULTRA PRO advanced milk analyzer providing precise biological data for dairy cooperatives.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766061561/Ekomilk-Ultra-Analyzer.jpg",
    name: "Ekomilk Ultra Analyzer",
    altText:
      "Ekomilk Ultra Analyzer machine testing milk parameters like added water and density.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766085143/KREI_Ultrasonic_Milk_Stirrer.jpg",
    name: "KREI Ultrasonic Milk Stirrer",
    altText:
      "KREI Ultrasonic Milk Stirrer equipment for preparing milk samples at local collection centers.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902682/Advance%20Milk%20Analyzer.jpg",
    name: "Advance Milk Analyzer",
    altText:
      "Advance Milk Analyzer machine for reliable daily testing on regional dairy farms.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766092196/Milk_Analyzer_PCB_Motherboard_Front.png",
    name: "Milk Analyzer PCB Motherboard Front",
    altText:
      "Front view of a replacement PCB Motherboard used for expert milk analyzer machine repairs.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766091579/Milk_Analyzer_PCB_Motherboard_back.png",
    name: "Milk Analyzer PCB Motherboard Back",
    altText:
      "Back view of a replacement PCB Motherboard for servicing dairy testing equipment.",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766090508/Milk_Analyzer_Plastic_Body_Cabinet.png",
    name: "Milk Analyzer Plastic Body Cabinet",
    altText:
      "Durable plastic body cabinet replacement part for repairing Ekomilk and Advance milk analyzers.",
  },
];

/* =========================
   PAGE
========================= */

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  /* =========================
     CLOUDINARY URL
  ========================= */

  const getCldUrl = (
    src: string,
    width: number
  ) =>
    cld(src, {
      width,
      quality: "auto",
      format: "auto",
      dpr: "auto",
    });

  return (
    <main className="mx-auto max-w-5xl p-5">

      {/* =========================
          PAGE TITLE
      ========================= */}

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
          font-semibold
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
    underline
    md:text-xl
  "
>
  Product Gallery
</h1>
      </div>

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

          return (
            <div
              key={item.src}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.name}`}
              onClick={() =>
                setActiveIndex(
                  isActive ? null : index
                )
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();

                  setActiveIndex(
                    isActive ? null : index
                  );
                }
              }}
              className={`
                cursor-pointer
                overflow-hidden
                rounded-xl
                bg-white
                transition-all
                duration-300
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-purple-500
                dark:bg-neutral-900

                ${
                  isActive
                    ? "scale-105 shadow-2xl ring-4 ring-rose-400"
                    : "shadow hover:shadow-lg"
                }
              `}
            >

              {/* =========================
                  IMAGE
              ========================= */}

              <div
                className="
                  relative
                  h-35
                  w-full
                  bg-[#f3f3f3]
                  sm:h-40
                  md:h-42.5
                  dark:bg-neutral-800
                "
              >
                <Image
                  src={getCldUrl(
                    item.src,
                    600
                  )}
                  alt={item.altText}
                  fill
                  priority={index === 0}
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    320px
                  "
                  className="
                    object-contain
                    p-3
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
                <p
  className="
    min-h-10
    line-clamp-2
    text-center
    text-sm
    font-semibold
    text-gray-900
    dark:text-white
  "
>
  {item.name}
</p>
              </div>

            </div>
          );
        })}
      </div>

    </main>
  );
}
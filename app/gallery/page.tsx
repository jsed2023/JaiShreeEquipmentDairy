"use client";

import { useState } from "react";
import Image from "next/image";
import { cld } from "@/utils/cloudinary";

interface GalleryImage {
  src: string;
  name: string;
}

const images: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1757013349/Advance_Milk_Analyzer_plus.png",
    name: "Advance Milk Analyzer Plus",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1736160426/DPU_Milk_Collection_Unit_%28DAIRY%20KHATA%29.png",
    name: "DPU Milk Collection Unit",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1751737335/advance_milk_analyzer_max.png",
    name: "Advance Milk Analyzer Max",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1765479086/Advance_Milk_Analyzer_Pro20.png",
    name: "Advance Milk Analyzer Pro",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902688/Ultrasonic-Milk-Stirrer-Normal.jpg",
    name: "Ultrasonic Milk Stirrer Normal",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902601/Ekomilk%20ULTRA%20PRO.jpg",
    name: "Ekomilk ULTRA PRO",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766061561/Ekomilk-Ultra-Analyzer.jpg",
    name: "Ekomilk Ultra Analyzer",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766085143/KREI_Ultrasonic_Milk_Stirrer.jpg",
    name: "KREI Ultrasonic Milk Stirrer",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902682/Advance%20Milk%20Analyzer.jpg",
    name: "Advance Milk Analyzer",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766092196/Milk_Analyzer_PCB_Motherboard_Front.png",
    name: "Milk Analyzer PCB Motherboard Front",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766091579/Milk_Analyzer_PCB_Motherboard_back.png",
    name: "Milk Analyzer PCB Motherboard back",
  },
  {
    src: "https://res.cloudinary.com/dddhtbuzs/image/upload/v1766090508/Milk_Analyzer_Plastic_Body_Cabinet.png",
    name: "Milk Analyzer Plastic Body Cabinet",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getCldUrl = (src: string, width: number) =>
    cld(src, {
      width,
      quality: "auto",
      format: "auto",
      dpr: "auto",
    });

  return (
    <div className="p-5 max-w-5xl mx-auto">

      {/* ✅ Preload LCP image */}
      <link rel="preload" as="image" href={getCldUrl(images[0].src, 800)} />

      <h1 className="text-center font-bold underline sm:text-4xl text-lg mb-6 bg-clip-text text-transparent animate-title-gradient">
        Product Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300
              ${
                isActive
                  ? "ring-4 ring-rose-400 scale-105 shadow-2xl"
                  : "shadow hover:shadow-lg"
              }
              bg-white dark:bg-neutral-900`}
            >

              {/* IMAGE BOX */}
              <div className="relative w-full h-[140px] sm:h-[160px] md:h-[170px] bg-[#f3f3f3] dark:bg-neutral-800">
                <Image
                  src={getCldUrl(item.src, 600)}
                  alt={item.name}
                  fill
                  priority={index === 0}
                  sizes="(max-width:640px) 50vw,
                         (max-width:1024px) 33vw,
                         320px"
                  className="object-contain p-3"
                />
              </div>

              {/* NAME BOX */}
              <div className="border-t bg-[#e9e9fb] dark:bg-neutral-800 px-2 py-3">
                <p className="text-sm font-semibold text-center line-clamp-2 min-h-[40px]
                              bg-clip-text text-transparent animate-title-gradient">
                  {item.name}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

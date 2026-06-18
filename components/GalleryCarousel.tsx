"use client";

import { Image } from "@nextui-org/react";
import { cld } from "@/utils/cloudinary";

export default function Gallerycarousel() {
  const imageData = [
    {
      src: "v1757013349/Advance_Milk_Analyzer_plus.png",
      alt: "Advance Milk Analyzer Plus",
    },
    {
      src: "v1766063713/advance_milk_analyzer_max.png",
      alt: "Advance Milk Analyzer Max",
    },
    {
      src: "v1728902682/Advance Milk Analyzer.jpg",
      alt: "Advance Milk Analyzer",
    },
    {
      src: "v1736160426/DPU_Milk_Collection_Unit_(DAIRY KHATA).png",
      alt: "DPU Milk Collection Unit Dairy Khata",
    },
    {
      src: "v1731935014/Vansan_Trolly_Cow_And_Buff_milking_machine.jpg",
      alt: "Vansan Trolley Cow and Buffalo Milking Machine",
    },
    {
      src: "v1731934091/Paras_Milk_Cream_Separator_AED_165_LHP.jpg",
      alt: "Paras Milk Cream Separator AED 165 LHP",
    },
    {
      src: "v1766085143/KREI_Ultrasonic_Milk_Stirrer.jpg",
      alt: "KREI Ultrasonic Milk Stirrer",
    },
    {
      src: "v1765479086/Advance_Milk_Analyzer_Pro20.png",
      alt: "Advance Milk Analyzer Pro 20",
    },
    {
      src: "v1766061561/Ekomilk-Ultra-Analyzer.jpg",
      alt: "Ekomilk Ultra Milk Analyzer",
    },
  ];

  const images = imageData.map((item) => ({
    src: cld(item.src, {
      width: 320,
      height: 260,
      crop: "fit",
    }),
    alt: item.alt,
  }));

  return (
    <section className="py-8 bg-gradient-to-br from-sky-400 via-sky-100 to-sky-50">
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-8 bg-white dark:bg-[#27272a] py-2 rounded-lg shadow mx-auto w-11/12 bg-clip-text text-transparent animate-title-gradient">
        Company Product Gallery
      </h2>

      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {images.concat(images).map((image, idx) => (
            <div
              key={idx}
              className="min-w-[18rem] flex items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={260}
                removeWrapper
                loading={idx < 4 ? "eager" : "lazy"}
                className="rounded-xl shadow-lg object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
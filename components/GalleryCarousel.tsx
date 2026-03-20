"use client";

import { Image } from "@nextui-org/react";
import { cld } from "@/utils/cloudinary";

export default function Gallerycarousel() {
  const rawImages = [
    "v1757013349/Advance_Milk_Analyzer_plus.png",
    "v1766063713/advance_milk_analyzer_max.png",
    "v1728902682/Advance Milk Analyzer.jpg",
    "v1736160426/DPU_Milk_Collection_Unit_(DAIRY KHATA).png",
    "v1731935014/Vansan_Trolly_Cow_And_Buff_milking_machine.jpg",
    "v1731934091/Paras_Milk_Cream_Separator_AED_165_LHP.jpg",
    "v1766085143/KREI_Ultrasonic_Milk_Stirrer.jpg",
    "v1765479086/Advance_Milk_Analyzer_Pro20.png",
    "v1766061561/Ekomilk-Ultra-Analyzer.jpg",
  ];

  /// Match actual display size (~18rem ≈ 288px)
  const images = rawImages.map((publicId) =>
    cld(publicId, {
      width: 320,
      height: 260,
      crop: "fit",
    })
  );

  return (
    <section className="py-8 bg-gradient-to-br from-sky-400 via-sky-100 to-sky-50">
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-8 bg-white dark:bg-[#27272a] py-2 rounded-lg shadow mx-auto w-11/12 bg-clip-text text-transparent animate-title-gradient">
        Company Product Gallery
      </h2>

      <div className="overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {images.concat(images).map((src, idx) => (
            <div
              key={idx}
              className="min-w-[18rem] flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Gallery product ${idx + 1}`}
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
      `}</style>
    </section>
  );
}
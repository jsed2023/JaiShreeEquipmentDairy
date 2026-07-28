"use client";

import { Image } from "@/components/Image";
import { cld } from "@/utils/cloudinary";

export default function GalleryCarousel() {
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
      quality: "auto",
      format: "auto",
    }),
    alt: item.alt,
  }));

  const carouselImages = [...images, ...images];

  return (
    <section className="bg-linear-to-br from-sky-400 via-sky-100 to-sky-50 py-8">
      <h2 className="animate-title-gradient mx-auto mb-8 w-11/12 rounded-lg bg-white bg-clip-text py-2 text-center text-2xl font-bold text-transparent shadow dark:bg-[#27272a] md:text-3xl">
        Company Product Gallery
      </h2>

      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-8">
          {carouselImages.map((image, idx) => (
            <div
              key={`${image.alt}-${idx}`}
              className="flex min-w-72 items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={260}
                loading="lazy"
                sizes="320px"
                className="max-h-65 max-w-80 rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
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
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Image } from "@/components/Image";
import { cld } from "@/utils/cloudinary";
import type { ImageSliderProps } from "@/types";

export default function ImageSlider({
  images,
  productName,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // No images available
  if (!images?.length) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const currentImage = images[currentIndex];

  const altText = currentImage.alt || productName;

  return (
    <div className="relative mx-auto mt-4 w-full">
      <div className="relative mx-12">
        <Image
          src={cld(currentImage.src, {
            width: 400,
            height: 400,
            crop: "fit",
            quality: "auto",
            format: "auto",
          })}
          alt={altText}
          title={altText}
          width={400}
          height={400}
          fetchPriority={currentIndex === 0 ? "high" : "auto"}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, 400px"
          className="
            my-5
            size-100
            object-contain
            transition-all
            duration-500
            ease-in-out
          "
        />

        <div className="mt-2 flex justify-center">
          <p
            className="
              text-center
              text-sm
              font-bold
              tracking-wide
              text-black
              dark:text-white
            "
          >
            {productName}
          </p>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="
              absolute
              top-1/2
              left-0
              mx-1
              -translate-y-1/2
              cursor-pointer
              rounded-xl
              p-2
            "
          >
            <ChevronLeft
              className="text-gray-400"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="
              absolute
              top-1/2
              right-0
              mx-1
              -translate-y-1/2
              cursor-pointer
              rounded-xl
              p-2
            "
          >
            <ChevronRight
              className="text-gray-400"
              aria-hidden="true"
            />
          </button>

          <div className="mt-4 flex justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                aria-hidden="true"
                className={`
                  mx-1
                  h-2
                  w-10
                  rounded-xl
                  transition-all
                  duration-500
                  ease-in-out
                  ${
                    index === currentIndex
                      ? "bg-[#004493]"
                      : "bg-stone-700 dark:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
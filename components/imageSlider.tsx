"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageSliderProps } from "@/types";
import { Image } from "@nextui-org/react";
import { cld } from "@/utils/cloudinary";

export default function ImageSlider({ images }: ImageSliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="relative mx-12">
        <Image
          src={cld(currentImage.src)}
          isBlurred
          alt={`Slider Image ${currentIndex + 1}`}
          fetchPriority="high"
          loading="eager"
          className="transition-all duration-500 ease-in-out w-[25rem] h-[25rem] object-contain my-5"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl mx-1 p-2"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft className="text-gray-400" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl mx-1 p-2"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight className="text-gray-400" />
          </button>

          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-10 mx-1 transition-all duration-500 ease-in-out rounded-xl ${
                  index === currentIndex
                    ? "bg-[#004493]"
                    : "dark:bg-gray-400 bg-stone-700"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

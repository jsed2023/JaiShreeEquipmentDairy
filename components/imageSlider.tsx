"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageSliderProps } from "@/types";
import { Image } from "@nextui-org/react";
import { cld } from "@/utils/cloudinary";

export default function ImageSlider({
images,
productName,
}: ImageSliderProps): JSX.Element {
const [currentIndex, setCurrentIndex] =
useState<number>(0);

const prevSlide = (): void => {
setCurrentIndex(
(prevIndex) =>
(prevIndex - 1 + images.length) %
images.length
);
};

const nextSlide = (): void => {
setCurrentIndex(
(prevIndex) =>
(prevIndex + 1) % images.length
);
};

const currentImage =
images[currentIndex];

// SEO Alt Text
const altText =
currentImage.alt || productName;

// Caption below image
const caption = productName;

return (
<div className="relative w-full mx-auto mt-4">
<div className="relative mx-12">
<Image
src={cld(currentImage.src)}
isBlurred
alt={altText}
title={altText}
width={400}
height={400}
fetchPriority={
currentIndex === 0
? "high"
: undefined
}
loading={
currentIndex === 0
? "eager"
: "lazy"
}
className="
transition-all
duration-500
ease-in-out
w-[25rem]
h-[25rem]
object-contain
my-5
"
/>

    <div className="flex justify-center mt-2">
      <p
        className="
          text-sm
          font-bold
          text-black
          text-center
          tracking-wide
        "
      >
        {caption}
      </p>
    </div>
  </div>

  {images.length > 1 && (
    <>
      <button
        className="
          absolute left-0
          top-1/2
          -translate-y-1/2
          rounded-xl
          mx-1 p-2
        "
        onClick={prevSlide}
        aria-label="Previous image"
      >
        <ChevronLeft className="text-gray-400" />
      </button>

      <button
        className="
          absolute right-0
          top-1/2
          -translate-y-1/2
          rounded-xl
          mx-1 p-2
        "
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
import { Image } from "@/components/Image";
import { cld } from "@/utils/cloudinary";

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
] as const;

const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 260;

const imageWidths = [320, 480, 640];

const images = imageData.map((item) => ({
  alt: item.alt,

  src: cld(item.src, {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    crop: "fit",
    quality: "auto",
    format: "auto",
    dpr: "auto",
  }),

  srcSet: imageWidths
    .map((width) => {
      const height = Math.round(
        (width * IMAGE_HEIGHT) / IMAGE_WIDTH
      );

      const url = cld(item.src, {
        width,
        height,
        crop: "fit",
        quality: "auto",
        format: "auto",
        dpr: "auto",
      });

      return `${url} ${width}w`;
    })
    .join(", "),
}));

export default function GalleryCarousel() {
  return (
    <section
      className="bg-linear-to-br from-sky-400 via-sky-100 to-sky-50 py-8"
      aria-labelledby="company-gallery-title"
    >
      <h2
        id="company-gallery-title"
        className="animate-title-gradient mx-auto mb-8 w-11/12 rounded-lg bg-white bg-clip-text py-2 text-center text-2xl font-bold text-transparent shadow dark:bg-[#27272a] md:text-3xl"
      >
        Company Product Gallery
      </h2>

      <div
        className="overflow-hidden"
        aria-label="Dairy equipment product images"
      >
        <div className="gallery-marquee-track flex w-max gap-0">
          {/* Original images */}
          <div className="flex shrink-0 gap-8">
            {images.map((image) => (
              <div
                key={image.alt}
                className="flex min-w-72 items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  loading="lazy"
                  sizes="320px"
                  className="max-h-65 max-w-80 rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
                  srcSet={image.srcSet}
                />
              </div>
            ))}
          </div>

          {/* Duplicate images for seamless animation */}
          <div
            className="flex shrink-0 gap-8"
            aria-hidden="true"
          >
            {images.map((image) => (
              <div
                key={`duplicate-${image.alt}`}
                className="flex min-w-72 items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt=""
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                  loading="lazy"
                  sizes="320px"
                  className="max-h-65 max-w-80 rounded-xl object-contain shadow-lg"
                  srcSet={image.srcSet}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

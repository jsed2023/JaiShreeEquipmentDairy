// utils/cloudinary.ts

/**
 * Cloudinary Optimized URL Generator
 * -----------------------------------
 * ✔ Automatic modern format delivery (AVIF/WebP)
 * ✔ Smart compression control
 * ✔ Responsive width support
 * ✔ Optional height + crop
 * ✔ DPR auto optimization
 */

interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: number | "auto" | "auto:eco" | "auto:good" | "auto:best";
  crop?: "fill" | "fit" | "scale" | "crop";
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  dpr?: number | "auto";
  extra?: string;
}

const CLOUD_NAME = "dddhtbuzs";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const cld = (
  src: string,
  options: CloudinaryOptions = {}
): string => {
  if (!src) {
    throw new Error("Cloudinary source (src) is required");
  }

  const {
    width,
    height,
    quality = "auto:eco",
    crop = "scale",
    format = "auto",
    dpr = "auto",
    extra = "",
  } = options;

  // Extract public ID if full URL is passed
  const publicId = src.includes("/upload/")
    ? src.split("/upload/")[1]
    : src;

  const transformations: string[] = [];

  // Format (WebP / AVIF auto)
  transformations.push(`f_${format}`);

  // Quality optimization
  transformations.push(`q_${quality}`);

  // DPR (retina optimization)
  transformations.push(`dpr_${dpr}`);

  // Width handling (only if provided)
  if (width) {
    transformations.push(`w_${width}`);
  }

  // Height + crop only if height exists
  if (height) {
    transformations.push(`h_${height}`, `c_${crop}`);
  }

  // Extra transformations if needed
  if (extra) {
    transformations.push(extra);
  }

  return `${BASE_URL}/${transformations.join(",")}/${publicId}`;
};

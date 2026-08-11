// utils/cloudinary.ts

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

function getPublicId(src: string): string {
  let value = src.trim();

  // Remove query/hash
  value = value.split("?")[0].split("#")[0];

  // If full Cloudinary URL, get everything after /upload/
  if (value.includes("/upload/")) {
    value = value.split("/upload/")[1];
  }

  return value;
}

export const cld = (
  src: string,
  options: CloudinaryOptions = {}
): string => {
  if (!src) {
    throw new Error("Cloudinary source is required");
  }

  const {
    width,
    height,
    quality,
    crop,
    format,
    dpr,
    extra = "",
  } = options;

  const publicId = getPublicId(src);

  const transformations: string[] = [];

  // Add only transformations explicitly requested
  if (format) {
    transformations.push(`f_${format}`);
  }

  if (quality !== undefined) {
    transformations.push(`q_${quality}`);
  }

  if (dpr !== undefined) {
    transformations.push(`dpr_${dpr}`);
  }

  if (width) {
    transformations.push(`w_${width}`);
  }

  if (height) {
    transformations.push(`h_${height}`);

    if (crop) {
      transformations.push(`c_${crop}`);
    }
  }

  if (extra) {
    transformations.push(extra);
  }

  if (transformations.length === 0) {
    return `${BASE_URL}/${publicId}`;
  }

  return `${BASE_URL}/${transformations.join(",")}/${publicId}`;
};
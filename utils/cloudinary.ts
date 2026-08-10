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

  if (value.includes("/upload/")) {
    value = value.split("/upload/")[1];
  }

  const parts = value.split("/");

  // Remove existing Cloudinary transformations
  while (
    parts.length > 1 &&
    (
      parts[0].startsWith("f_") ||
      parts[0].startsWith("q_") ||
      parts[0].startsWith("w_") ||
      parts[0].startsWith("h_") ||
      parts[0].startsWith("c_") ||
      parts[0].startsWith("dpr_")
    )
  ) {
    parts.shift();
  }

  return parts.join("/");
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
    quality = "auto:eco",
    crop = "scale",
    format = "auto",
    dpr = "auto",
    extra = "",
  } = options;

  const publicId = getPublicId(src);

  const transformations: string[] = [
    `f_${format}`,
    `q_${quality}`,
    `dpr_${dpr}`,
  ];

  if (width) {
    transformations.push(`w_${width}`);
  }

  if (height) {
    transformations.push(`h_${height}`);
    transformations.push(`c_${crop}`);
  }

  if (extra) {
    transformations.push(extra);
  }

  return `${BASE_URL}/${transformations.join(",")}/${publicId}`;
};
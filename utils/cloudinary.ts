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

/**
 * Check whether a Cloudinary path segment is a transformation segment.
 */
const isTransformationSegment = (segment: string): boolean => {
  if (!segment) return false;

  const transformationKeys = [
    "f_",
    "q_",
    "dpr_",
    "w_",
    "h_",
    "c_",
    "ar_",
    "g_",
    "x_",
    "y_",
    "z_",
    "e_",
    "fl_",
    "d_",
    "pg_",
    "so_",
    "du_",
    "fps_",
    "vc_",
    "ac_",
  ];

  return segment
    .split(",")
    .some((part) =>
      transformationKeys.some((key) => part.startsWith(key))
    );
};

/**
 * Extract the Cloudinary public ID from either:
 *
 * 1. A full Cloudinary URL
 * 2. A Cloudinary public ID
 *
 * Existing Cloudinary transformations are removed so they
 * are never applied twice.
 */
const getPublicId = (src: string): string => {
  const cleanSrc = src.split("?")[0].split("#")[0];

  if (!cleanSrc.includes("/upload/")) {
    return cleanSrc.replace(/^\/+/, "");
  }

  const afterUpload = cleanSrc.split("/upload/")[1];

  if (!afterUpload) {
    throw new Error(`Invalid Cloudinary URL: ${src}`);
  }

  const parts = afterUpload.split("/");

  // Remove existing transformation segment(s)
  while (parts.length > 1 && isTransformationSegment(parts[0])) {
    parts.shift();
  }

  return parts.join("/");
};

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

  const publicId = getPublicId(src);

  const transformations: string[] = [];

  // Automatic format delivery
  transformations.push(`f_${format}`);

  // Quality optimization
  transformations.push(`q_${quality}`);

  // DPR optimization
  transformations.push(`dpr_${dpr}`);

  // Responsive width
  if (width) {
    transformations.push(`w_${width}`);
  }

  // Height + crop
  if (height) {
    transformations.push(`h_${height}`);
    transformations.push(`c_${crop}`);
  }

  // Additional transformations
  if (extra) {
    transformations.push(extra);
  }

  return `${BASE_URL}/${transformations.join(",")}/${publicId}`;
};
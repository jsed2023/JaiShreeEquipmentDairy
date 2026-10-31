
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
  const value = src.trim().split(/[?#]/)[0];

  if (!value) {
    throw new Error("Cloudinary source is required");
  }

  let publicId = value;

  // Support complete Cloudinary URLs.
  if (value.includes("/upload/")) {
    publicId = value.split("/upload/").slice(1).join("/upload/");
  }

  // Remove leading slash.
  publicId = publicId.replace(/^\/+/, "");

  if (!publicId) {
    throw new Error("Invalid Cloudinary public ID");
  }

  return publicId;
}

function validateDimension(
  value: number | undefined,
  name: string
): void {
  if (
    value !== undefined &&
    (!Number.isInteger(value) || value <= 0)
  ) {
    throw new Error(`${name} must be a positive integer`);
  }
}

export const cld = (
  src: string,
  options: CloudinaryOptions = {}
): string => {
  if (!src?.trim()) {
    throw new Error("Cloudinary source is required");
  }

  const {
    width,
    height,
    quality = "auto",
    crop = "fit",
    format = "auto",
    dpr = "auto",
    extra = "",
  } = options;

  validateDimension(width, "width");
  validateDimension(height, "height");

  const publicId = getPublicId(src);

  const transformations: string[] = [
    `f_${format}`,
    `q_${quality}`,
    `dpr_${dpr}`,
  ];

  if (width !== undefined) {
    transformations.push(`w_${width}`);
  }

  if (height !== undefined) {
    transformations.push(`h_${height}`);
  }

  if (width !== undefined || height !== undefined) {
    transformations.push(`c_${crop}`);
  }

  if (extra.trim()) {
    transformations.push(extra.trim());
  }

  return `${BASE_URL}/${transformations.join(",")}/${publicId}`;
};

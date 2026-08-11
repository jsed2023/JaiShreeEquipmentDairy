// utils/cloudinary.ts

const CLOUD_NAME = "dddhtbuzs";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

function getPublicId(src: string): string {
  let value = src.trim();

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

export const cld = (src: string): string => {
  if (!src) {
    throw new Error("Cloudinary source is required");
  }

  const publicId = getPublicId(src);

  return `${BASE_URL}/${publicId}`;
};
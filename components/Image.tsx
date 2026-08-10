"use client";

import NextImage, {
  type ImageProps as NextImageProps,
} from "next/image";

type ImageProps = Omit<
  NextImageProps,
  "width" | "height"
> & {
  width?: number;
  height?: number;
  removeWrapper?: boolean;
};

export function Image({
  width,
  height,
  fill,
  removeWrapper: _removeWrapper,
  alt,
  className = "",
  style,
  sizes,
  src,
  ...props
}: ImageProps) {
  // Cloudinary already handles:
  // format, quality, width, height and DPR.
  // Therefore don't send Cloudinary images through
  // Next.js /_next/image optimization again.
  const isCloudinaryImage =
    typeof src === "string" &&
    src.includes("res.cloudinary.com/dddhtbuzs/");

  // Phone → Tablet → Laptop → Desktop
  const responsiveSizes =
    sizes ??
    "(max-width: 640px) 100vw, " +
      "(max-width: 768px) 90vw, " +
      "(max-width: 1024px) 70vw, " +
      "(max-width: 1280px) 50vw, " +
      "40vw";

  // ==============================
  // FILL MODE
  // ==============================

  if (fill) {
    return (
      <NextImage
        {...props}
        src={src}
        alt={alt}
        fill
        sizes={responsiveSizes}
        unoptimized={isCloudinaryImage || props.unoptimized}
        className={`object-contain ${className}`}
        style={{
          maxWidth: "100%",
          ...style,
        }}
      />
    );
  }

  // ==============================
  // NORMAL RESPONSIVE IMAGE
  // ==============================

  return (
    <NextImage
      {...props}
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={responsiveSizes}
      unoptimized={isCloudinaryImage || props.unoptimized}
      className={`max-w-full object-contain ${className}`}
      style={{
        height: "auto",
        maxWidth: "100%",
        ...style,
      }}
    />
  );
}

export default Image;
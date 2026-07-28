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
  ...props
}: ImageProps) {
  // ==========================================
  // DEFAULT RESPONSIVE SIZES
  // ==========================================

  const responsiveSizes =
    sizes ??
    "(max-width: 640px) 100vw, " +
      "(max-width: 768px) 100vw, " +
      "(max-width: 1024px) 75vw, " +
      "(max-width: 1280px) 60vw, " +
      "50vw";

  // ==========================================
  // FILL IMAGE
  // width + height are NEVER passed
  // ==========================================

  if (fill) {
    return (
      <NextImage
        {...props}
        alt={alt}
        fill
        sizes={responsiveSizes}
        className={`object-contain ${className}`}
        style={{
          maxWidth: "100%",
          ...style,
        }}
      />
    );
  }

  // ==========================================
  // NORMAL IMAGE
  // Automatically responsive
  // ==========================================

  return (
    <NextImage
      {...props}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={responsiveSizes}
      className={`max-w-full object-contain ${className}`}
      style={{
        maxWidth: "100%",
        height: "auto",
        ...style,
      }}
    />
  );
}

export default Image;
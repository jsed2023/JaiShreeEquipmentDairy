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
  // Parent controls dimensions
  // ==============================

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

  // ==============================
  // NORMAL RESPONSIVE IMAGE
  // ==============================

  return (
    <NextImage
      {...props}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={responsiveSizes}
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
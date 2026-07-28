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
  className,
  style,
  sizes,
  ...props
}: ImageProps) {
  // ==========================================
  // FILL MODE
  // Do NOT pass width / height with fill
  // ==========================================

  if (fill) {
    return (
      <NextImage
        {...props}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        className={className}
        style={style}
      />
    );
  }

  // ==========================================
  // NORMAL MODE
  // Keeps original aspect ratio
  // ==========================================

  return (
    <NextImage
      {...props}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={sizes}
      className={className}
      style={style}
    />
  );
}

export default Image;
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
  ...props
}: ImageProps) {
  // ==========================================
  // FILL IMAGE
  // width / height must NOT be passed
  // ==========================================
  if (fill) {
    return (
      <NextImage
        {...props}
        alt={alt}
        fill
        className={className}
        style={style}
      />
    );
  }

  // ==========================================
  // NORMAL IMAGE
  // width / height are required
  // ==========================================
  return (
    <NextImage
      {...props}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      style={{
        width: "auto",
        height: "auto",
        ...style,
      }}
    />
  );
}

export default Image;
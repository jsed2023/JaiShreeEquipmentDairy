
import React from "react";

type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "width" | "height" | "src" | "alt" | "loading" | "sizes"
> & {
  width?: number;
  height?: number;
  fill?: boolean;
  alt: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  removeWrapper?: boolean;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

export function Image({
  width,
  height,
  fill = false,
  alt,
  className = "",
  style,
  sizes,
  src,
  srcSet,
  priority = false,
  loading,
  removeWrapper: _removeWrapper,
  ...props
}: ImageProps) {
  const imageLoading = loading ?? (priority ? "eager" : "lazy");

  return (
    <img
      {...props}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={fill ? undefined : width ?? 800}
      height={fill ? undefined : height ?? 600}
      loading={imageLoading}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={[
        "max-w-full",
        fill ? "absolute inset-0 h-full w-full" : "h-auto",
        "object-contain",
        className,
      ].filter(Boolean).join(" ")}
      style={{
        maxWidth: "100%",
        ...(fill ? { width: "100%", height: "100%" } : {}),
        ...style,
      }}
    />
  );
}

export default Image;

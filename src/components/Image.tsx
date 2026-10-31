import React from "react";

type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "width" | "height" | "src" | "alt" | "loading"
> & {
  width?: number;
  height?: number;
  fill?: boolean;
  alt: string;
  src: string;
  removeWrapper?: boolean;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
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
  priority = false,
  loading,
  removeWrapper: _removeWrapper,
  ...props
}: ImageProps) {
  const responsiveSizes =
    sizes ??
    "(max-width: 640px) 100vw, " +
      "(max-width: 768px) 90vw, " +
      "(max-width: 1024px) 70vw, " +
      "(max-width: 1280px) 50vw, " +
      "40vw";

  const imageLoading =
    loading ?? (priority ? "eager" : "lazy");

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      width={fill ? undefined : width ?? 800}
      height={fill ? undefined : height ?? 600}
      sizes={responsiveSizes}
      loading={imageLoading}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={[
        "max-w-full",
        fill ? "absolute inset-0 h-full w-full" : "h-auto",
        "object-contain",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        maxWidth: "100%",
        ...(fill
          ? {
              width: "100%",
              height: "100%",
            }
          : {}),
        ...style,
      }}
    />
  );
}

export default Image;

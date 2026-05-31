/** @type {import('next').NextConfig} */

const nextConfig = {

  trailingSlash: false,

  compress: true,

  reactStrictMode: true,

  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dddhtbuzs/**",
      },
    ],

    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 31536000,
  },

  experimental: {
    scrollRestoration: true,
  },

  // =========================
  // REWRITES
  // =========================
  async rewrites() {
    return [
      {
        source: "/milk-analyzer-:city",

        destination:
          "/locations/milk-analyzer-:city",
      },
    ];
  },

  // =========================
  // REDIRECTS
  // =========================
  async redirects() {
    return [
      {
        source: "/locations/:location",

        destination: "/:location",

        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

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
        pathname: "/dddhtbuzs/image/upload/**",
      },
    ],
    minimumCacheTTL: 3600,
  },

  async rewrites() {
    return [
      {
        source: "/milk-analyzer-:slug",
        destination: "/locations/milk-analyzer-:slug",
      },
    ];
  },
};

module.exports = nextConfig;
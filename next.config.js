/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // ✅ important (no trailing slash issues)

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

  swcMinify: true,

  // ⚠️ TEMP: use only during debugging
  typescript: {
    ignoreBuildErrors: false, // 🔥 change this
  },

  eslint: {
    ignoreDuringBuilds: false, // 🔥 change this
  },

  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
      {
        source: "/:path*.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
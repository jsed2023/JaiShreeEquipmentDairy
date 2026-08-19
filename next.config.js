const nextConfig = {
  trailingSlash: false,
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,

  // Prevent metadata streaming for Google crawlers.
  // This makes the server-rendered HTML more predictable
  // for Google Search Console verification.
  htmlLimitedBots: /Googlebot|Google-InspectionTool/i,

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
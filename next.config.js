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
  
  // Note: robots.ts और sitemap.ts के लिए Headers की आवश्यकता 
  // Next.js (App Router) में नहीं होती, यह खुद मैनेज करता है।
};

module.exports = nextConfig;
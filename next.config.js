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
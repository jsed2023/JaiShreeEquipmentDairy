import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: [
      "https://jaishreeequipmentdairy.in/sitemap.xml",
      "https://jaishreeequipmentdairy.in/image-sitemap.xml",
      "https://jaishreeequipmentdairy.in/location-sitemap.xml",
    ],
  };
}
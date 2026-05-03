import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: [
      "https://jaishreeequipmentdairy.in/sitemap.xml",
      "https://jaishreeequipmentdairy.in/image-sitemap.xml",
    ],
    host: "https://jaishreeequipmentdairy.in",
  };
}
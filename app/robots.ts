import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://jaishreeequipmentdairy.in",
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/private/",
        ],
      },
    ],
    sitemap: [
      "https://jaishreeequipmentdairy.in/sitemap.xml",
      "https://jaishreeequipmentdairy.in/image-sitemap.xml",
    ],
  };
}
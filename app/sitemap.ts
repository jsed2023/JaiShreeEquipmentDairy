import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";

import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const dynamic = "force-static";
export const revalidate = 86400;

const SITE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ================= STATIC PAGES ================= */

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/categories",
    "/gallery",
    "/testimonials",
    "/locations",
    "/milestones",
    "/milk-rate-chart",
    "/services",
    "/automatic-milk-collection-system",
    "/milk-testing-equipment",
    "/dairy-equipment",
  ].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/milk-rate-chart"
        ? "daily"
        : "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));

  /* ================= AUTOMATIC MILK COLLECTION ================= */

  const automaticMilkCollectionPages =
    automaticMilkCollectionSystem.map((product) => ({
      url: `${SITE_URL}/automatic-milk-collection-system/${product.url}`,
      lastModified: product.updatedAt ?? now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  /* ================= DAIRY EQUIPMENT ================= */

  const dairyEquipmentPages = [
    ...creamSeparatorMachine,
    ...milkingMachine,
  ].map((product) => ({
    url: `${SITE_URL}/dairy-equipment/${product.url}`,
    lastModified: product.updatedAt ?? now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  /* ================= MILK TESTING EQUIPMENT ================= */

  const milkTestingEquipmentPages =
    MilkTestingEquipment.map((product) => ({
      url: `${SITE_URL}/milk-testing-equipment/${product.url}`,
      lastModified: product.updatedAt ?? now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  /* ================= LOCATION PAGES ================= */

  const locationPages = rajasthanLocations.map((location) => {
    const slug = location
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    return {
      url: `${SITE_URL}/milk-analyzer-${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  /* ================= FINAL SITEMAP ================= */

  return [
    ...staticPages,
    ...automaticMilkCollectionPages,
    ...dairyEquipmentPages,
    ...milkTestingEquipmentPages,
    ...locationPages,
  ];
}
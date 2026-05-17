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
export const revalidate = 86400; // Revalidate every 24 hours

// Ensure SITE_URL doesn't end with a slash to prevent double slashes
const SITE_URL = siteConfig.url.endsWith("/") 
  ? siteConfig.url.slice(0, -1) 
  : siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ================= STATIC PAGES ================= */
  const staticPages = [
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
    changeFrequency: (path === "" || path === "/milk-rate-chart" ? "daily" : "weekly") as "daily" | "weekly",
    priority: index === 0 ? 1.0 : 0.8,
  }));

  /* ================= AUTOMATIC MILK COLLECTION ================= */
  const automaticMilkCollectionPages = automaticMilkCollectionSystem
    .filter(p => p?.url) // Prevent crashes on undefined data
    .map((product) => ({
      url: `${SITE_URL}/automatic-milk-collection-system/${product.url}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  /* ================= DAIRY EQUIPMENT ================= */
  const dairyEquipmentPages = [...creamSeparatorMachine, ...milkingMachine]
    .filter(p => p?.url)
    .map((product) => ({
      url: `${SITE_URL}/dairy-equipment/${product.url}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  /* ================= MILK TESTING EQUIPMENT ================= */
  const milkTestingEquipmentPages = MilkTestingEquipment
    .filter(p => p?.url)
    .map((product) => ({
      url: `${SITE_URL}/milk-testing-equipment/${product.url}`,
      lastModified: product.updatedAt ? new Date(product.updatedAt) : now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  /* ================= LOCATION PAGES ================= */
  const locationPages = rajasthanLocations.map((location) => {
    const slug = location
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // Strip out special characters that break URLs
      .replace(/\s+/g, "-");

    return {
      url: `${SITE_URL}/milk-analyzer-${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7, // Slightly lowered so Google prioritizes actual products
    };
  });

  return [
    ...staticPages,
    ...automaticMilkCollectionPages,
    ...dairyEquipmentPages,
    ...milkTestingEquipmentPages,
    ...locationPages,
  ];
}
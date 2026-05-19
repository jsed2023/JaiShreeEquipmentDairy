import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";

import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const revalidate = 86400;

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

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
  ];

  const sitemap: MetadataRoute.Sitemap = staticPages.map((path, index) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/milk-rate-chart"
        ? "daily"
        : "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));

  // Automatic Milk Collection Products
  automaticMilkCollectionSystem
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      sitemap.push({
        url: `${BASE_URL}/automatic-milk-collection-system/${product.url}`,
        lastModified: product?.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  // Dairy Equipment Products
  [...creamSeparatorMachine, ...milkingMachine]
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      sitemap.push({
        url: `${BASE_URL}/dairy-equipment/${product.url}`,
        lastModified: product?.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  // Milk Testing Equipment
  MilkTestingEquipment
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      sitemap.push({
        url: `${BASE_URL}/milk-testing-equipment/${product.url}`,
        lastModified: product?.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  // Rajasthan Locations
  rajasthanLocations?.forEach((location) => {
    sitemap.push({
      url: `${BASE_URL}/milk-analyzer-${slugify(location)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return sitemap;
}
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

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  // Static Pages
  const staticPages = [
    "/",
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

  staticPages.forEach((path, index) => {
    routes.push({
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency:
        path === "/" || path === "/milk-rate-chart"
          ? "daily"
          : "weekly",
      priority: index === 0 ? 1 : 0.8,
    });
  });

  // Automatic Milk Collection System
  automaticMilkCollectionSystem
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      routes.push({
        url: `${BASE_URL}/automatic-milk-collection-system/${product.url}`,
        lastModified: product?.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  // Dairy Equipment
  [...creamSeparatorMachine, ...milkingMachine]
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      routes.push({
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
      routes.push({
        url: `${BASE_URL}/milk-testing-equipment/${product.url}`,
        lastModified: product?.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  // Location Pages
  rajasthanLocations?.forEach((location) => {
    const slug = createSlug(location);

    routes.push({
      url: `${BASE_URL}/milk-analyzer-${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return routes;
}
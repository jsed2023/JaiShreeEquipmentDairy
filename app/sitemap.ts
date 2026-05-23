import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";

import { blogs } from "@/config/blogs";

import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const dynamic = "force-static";
export const revalidate = 86400;

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    "",
    "/about",
    "/automatic-milk-collection-system",
    "/blog",
    "/contact",
    "/categories",
    "/dairy-equipment",
    "/gallery",
    "/testimonials",
    "/locations",
    "/milestones",
    "/milk-rate-chart",
    "/milk-testing-equipment",
    "/services",
  ];

  const sitemap: MetadataRoute.Sitemap =
    staticPages.map((path, index) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency:
        path === "" || path === "/milk-rate-chart"
          ? "daily"
          : "weekly",
      priority: index === 0 ? 1 : 0.8,
    }));

  /* Automatic Milk Collection System */
  automaticMilkCollectionSystem
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      sitemap.push({
        url: `${BASE_URL}/automatic-milk-collection-system/${product.url}`,
        lastModified: product?.updatedAt || now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  /* Dairy Equipment */
  [...creamSeparatorMachine, ...milkingMachine]
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      sitemap.push({
        url: `${BASE_URL}/dairy-equipment/${product.url}`,
        lastModified: product?.updatedAt || now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  /* Milk Testing Equipment */
  MilkTestingEquipment
    ?.filter((product) => product?.url)
    ?.forEach((product) => {
      sitemap.push({
        url: `${BASE_URL}/milk-testing-equipment/${product.url}`,
        lastModified: product?.updatedAt || now,
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });

  /* Blog Pages */
  Object.values(blogs)?.forEach((blog) => {
    sitemap.push({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  /* Rajasthan Locations */
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
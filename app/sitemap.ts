import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
  MilkAnalyzerMachines,
} from "@/config/products";
import { blogs } from "@/config/blogs";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const revalidate = 3600;

const BASE_URL = siteConfig.url.replace(/\/$/, "");

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type BlogType = {
  slug: string;
  updatedAt?: string | Date;
};

type SitemapOptions = {
  priority?: number;
  changeFrequency?: ChangeFrequency;
  lastModified?: string | Date;
};

/**
 * Safely converts a date value to Date.
 * Invalid or missing dates are ignored.
 */
function parseDate(date?: string | Date): Date | undefined {
  if (!date) return undefined;

  const parsed = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];
  const addedUrls = new Set<string>();

  /**
   * Adds a URL while preventing duplicates.
   */
  const addUrl = (
    path: string,
    {
      priority = 0.7,
      changeFrequency = "weekly",
      lastModified,
    }: SitemapOptions = {}
  ) => {
    // Ensure path starts with /
    const normalizedPath = path.startsWith("/")
      ? path
      : `/${path}`;

    const url =
      normalizedPath === "/"
        ? `${BASE_URL}/`
        : `${BASE_URL}${normalizedPath}`;

    if (addedUrls.has(url)) {
      return;
    }

    addedUrls.add(url);

    const parsedLastModified = parseDate(lastModified);

    sitemap.push({
      url,
      changeFrequency,
      priority,
      ...(parsedLastModified
        ? { lastModified: parsedLastModified }
        : {}),
    });
  };

  // --------------------------------------------------
  // Main / Static Pages
  // --------------------------------------------------

  addUrl("/", {
    priority: 1,
    changeFrequency: "daily",
  });

  addUrl("/about", {
    priority: 0.5,
    changeFrequency: "monthly",
  });

  addUrl("/contact", {
    priority: 0.5,
    changeFrequency: "monthly",
  });

  addUrl("/blog", {
    priority: 0.8,
    changeFrequency: "daily",
  });

  addUrl("/services", {
    priority: 0.7,
    changeFrequency: "monthly",
  });

  addUrl("/gallery", {
    priority: 0.5,
    changeFrequency: "monthly",
  });

  addUrl("/testimonials", {
    priority: 0.5,
    changeFrequency: "monthly",
  });

  addUrl("/locations", {
    priority: 0.6,
    changeFrequency: "weekly",
  });

  addUrl("/categories", {
    priority: 0.7,
    changeFrequency: "weekly",
  });

  addUrl("/milestones", {
    priority: 0.5,
    changeFrequency: "monthly",
  });

  addUrl("/dairy-equipment", {
    priority: 0.8,
    changeFrequency: "weekly",
  });

  addUrl("/milk-testing-equipment", {
    priority: 0.8,
    changeFrequency: "weekly",
  });

  addUrl("/milk-analyzer-machines", {
    priority: 0.8,
    changeFrequency: "weekly",
  });

  addUrl("/milk-testing-machine-spare-parts", {
    priority: 0.8,
    changeFrequency: "weekly",
  });

  addUrl("/automatic-milk-collection-system", {
    priority: 0.8,
    changeFrequency: "weekly",
  });

  addUrl("/milk-rate-chart", {
    priority: 0.7,
    changeFrequency: "daily",
  });

  // --------------------------------------------------
  // Automatic Milk Collection System
  // --------------------------------------------------

  automaticMilkCollectionSystem?.forEach((product) => {
    if (!product?.url) return;

    addUrl(
      `/automatic-milk-collection-system/${product.url}`,
      {
        priority: 0.7,
        changeFrequency: "weekly",
        lastModified: product.updatedAt,
      }
    );
  });

  // --------------------------------------------------
  // Dairy Equipment
  // --------------------------------------------------

  const dairyEquipment = [
    ...(creamSeparatorMachine ?? []),
    ...(milkingMachine ?? []),
  ];

  dairyEquipment.forEach((product) => {
    if (!product?.url) return;

    addUrl(`/dairy-equipment/${product.url}`, {
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: product.updatedAt,
    });
  });

  // --------------------------------------------------
  // Milk Testing Equipment
  // --------------------------------------------------

  MilkTestingEquipment?.forEach((product) => {
    if (!product?.url) return;

    addUrl(`/milk-testing-equipment/${product.url}`, {
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: product.updatedAt,
    });
  });

  // --------------------------------------------------
  // Milk Analyzer Machines
  // --------------------------------------------------

  MilkAnalyzerMachines?.forEach((product) => {
    if (!product?.url) return;

    addUrl(`/milk-analyzer-machines/${product.url}`, {
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: product.updatedAt,
    });
  });

  // --------------------------------------------------
  // Blog Posts
  // --------------------------------------------------

  Object.values(
    blogs as Record<string, BlogType>
  ).forEach((blog) => {
    if (!blog?.slug) return;

    addUrl(`/blog/${blog.slug}`, {
      priority: 0.8,
      changeFrequency: "weekly",
      lastModified: blog.updatedAt,
    });
  });

  // --------------------------------------------------
  // Rajasthan Location Landing Pages
  // --------------------------------------------------

  rajasthanLocations?.forEach((location) => {
    if (!location?.slug) return;

    addUrl(`/milk-analyzer-${location.slug}`, {
      priority: 0.5,
      changeFrequency: "monthly",
    });
  });

  return sitemap;
}
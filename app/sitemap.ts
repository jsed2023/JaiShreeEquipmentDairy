import type { MetadataRoute } from "next";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
  MilkAnalyzerMachines,
} from "@/config/products";

import { blogs } from "@/config/blogs";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

/**
 * Re-generate sitemap every hour.
 */
export const revalidate = 3600;

/**
 * Keep the production canonical domain fixed here.
 * This prevents an invalid siteConfig/environment value
 * from breaking sitemap generation.
 */
const BASE_URL = "https://jaishreeequipmentdairy.co.in";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type SitemapOptions = {
  priority?: number;
  changeFrequency?: ChangeFrequency;
  lastModified?: string | Date;
};

type BlogType = {
  slug?: string;
  updatedAt?: string | Date;
};

/**
 * Safely parse dates.
 * Invalid/missing dates will simply be excluded
 * from the generated XML.
 */
function parseDate(value?: string | Date): Date | undefined {
  if (!value) return undefined;

  const date = value instanceof Date ? value : new Date(value);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

/**
 * Normalize URL path segments.
 *
 * Prevents:
 * - accidental leading/trailing spaces
 * - duplicate slashes
 * - leading/trailing slashes in slugs
 */
function normalizePath(path: string): string {
  const cleaned = String(path)
    .trim()
    .replace(/^\/+|\/+$/g, "");

  if (!cleaned) {
    return "/";
  }

  return `/${cleaned}`;
}

/**
 * Generate sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  /**
   * Prevent duplicate URLs.
   */
  const addedUrls = new Set<string>();

  const addUrl = (
    path: string,
    {
      priority = 0.7,
      changeFrequency = "weekly",
      lastModified,
    }: SitemapOptions = {}
  ) => {
    if (!path) return;

    const normalizedPath = normalizePath(path);

    const url =
      normalizedPath === "/"
        ? `${BASE_URL}/`
        : `${BASE_URL}${normalizedPath}`;

    /**
     * Skip duplicates.
     */
    if (addedUrls.has(url)) {
      return;
    }

    addedUrls.add(url);

    const parsedLastModified = parseDate(lastModified);

    const entry: MetadataRoute.Sitemap[number] = {
      url,
      changeFrequency,
      priority,
    };

    if (parsedLastModified) {
      entry.lastModified = parsedLastModified;
    }

    entries.push(entry);
  };

  // ==================================================
  // HOME
  // ==================================================

  addUrl("/", {
    priority: 1,
    changeFrequency: "daily",
  });

  // ==================================================
  // STATIC PAGES
  // ==================================================

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

  // ==================================================
  // MAIN CATEGORY PAGES
  // ==================================================

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

  // ==================================================
  // AUTOMATIC MILK COLLECTION SYSTEM
  // ==================================================

  if (Array.isArray(automaticMilkCollectionSystem)) {
    automaticMilkCollectionSystem.forEach((product) => {
      if (!product?.url) return;

      const slug = String(product.url)
        .trim()
        .replace(/^\/+|\/+$/g, "");

      if (!slug) return;

      addUrl(
        `/automatic-milk-collection-system/${slug}`,
        {
          priority: 0.7,
          changeFrequency: "weekly",
          lastModified: product.updatedAt,
        }
      );
    });
  }

  // ==================================================
  // DAIRY EQUIPMENT
  // ==================================================

  const dairyEquipment = [
    ...(Array.isArray(creamSeparatorMachine)
      ? creamSeparatorMachine
      : []),

    ...(Array.isArray(milkingMachine)
      ? milkingMachine
      : []),
  ];

  dairyEquipment.forEach((product) => {
    if (!product?.url) return;

    const slug = String(product.url)
      .trim()
      .replace(/^\/+|\/+$/g, "");

    if (!slug) return;

    addUrl(`/dairy-equipment/${slug}`, {
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: product.updatedAt,
    });
  });

  // ==================================================
  // MILK TESTING EQUIPMENT
  // ==================================================

  if (Array.isArray(MilkTestingEquipment)) {
    MilkTestingEquipment.forEach((product) => {
      if (!product?.url) return;

      const slug = String(product.url)
        .trim()
        .replace(/^\/+|\/+$/g, "");

      if (!slug) return;

      addUrl(`/milk-testing-equipment/${slug}`, {
        priority: 0.7,
        changeFrequency: "weekly",
        lastModified: product.updatedAt,
      });
    });
  }

  // ==================================================
  // MILK ANALYZER MACHINES
  // ==================================================

  if (Array.isArray(MilkAnalyzerMachines)) {
    MilkAnalyzerMachines.forEach((product) => {
      if (!product?.url) return;

      const slug = String(product.url)
        .trim()
        .replace(/^\/+|\/+$/g, "");

      if (!slug) return;

      addUrl(`/milk-analyzer-machines/${slug}`, {
        priority: 0.7,
        changeFrequency: "weekly",
        lastModified: product.updatedAt,
      });
    });
  }

  // ==================================================
  // BLOG POSTS
  // ==================================================

  if (blogs && typeof blogs === "object") {
    Object.values(
      blogs as Record<string, BlogType>
    ).forEach((blog) => {
      if (!blog?.slug) return;

      const slug = String(blog.slug)
        .trim()
        .replace(/^\/+|\/+$/g, "");

      if (!slug) return;

      addUrl(`/blog/${slug}`, {
        priority: 0.8,
        changeFrequency: "weekly",
        lastModified: blog.updatedAt,
      });
    });
  }

  // ==================================================
  // RAJASTHAN LOCATION LANDING PAGES
  // ==================================================

  if (Array.isArray(rajasthanLocations)) {
    rajasthanLocations.forEach((location) => {
      if (!location?.slug) return;

      const slug = String(location.slug)
        .trim()
        .replace(/^\/+|\/+$/g, "");

      if (!slug) return;

      addUrl(`/milk-analyzer-${slug}`, {
        priority: 0.5,
        changeFrequency: "monthly",
      });
    });
  }

  // ==================================================
  // RETURN FINAL SITEMAP
  // ==================================================

  return entries;
}
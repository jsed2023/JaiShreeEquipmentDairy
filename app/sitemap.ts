import type { MetadataRoute } from "next";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  automaticMilkCollectionSystem,
  MilkAnalyzerMachines,
} from "@/config/products";

import { blogs } from "@/config/blogs";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

/**
 * Production canonical domain.
 */
const BASE_URL = "https://jaishreeequipmentdairy.co.in";

/**
 * Next.js will revalidate the sitemap every hour.
 *
 * NOTE:
 * This does not mean Google will crawl/index URLs every hour.
 */
export const revalidate = 3600;

/**
 * Last meaningful update date for static pages.
 *
 * Change this only when these static/category pages
 * have actually received meaningful content updates.
 */
const STATIC_LAST_MODIFIED = "2026-07-09";

type SitemapItem = {
  url?: string;
  slug?: string;
  updatedAt?: string | Date;
};

type BlogItem = {
  slug?: string;
  updatedAt?: string | Date;
};

type LocationItem = {
  slug?: string;
  city?: string;
  updatedAt?: string | Date;
};

/**
 * Safely convert a date into a valid Date object.
 *
 * Invalid or missing dates are excluded from sitemap.xml.
 */
function parseDate(
  value?: string | Date
): Date | undefined {
  if (!value) {
    return undefined;
  }

  const date =
    value instanceof Date
      ? value
      : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date;
}

/**
 * Clean individual URL segments.
 *
 * Examples:
 *
 * "/abc/"   -> "abc"
 * " abc "   -> "abc"
 * "//abc//" -> "abc"
 */
function cleanSegment(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .replace(/^\/+|\/+$/g, "");
}


function normalizePath(path: string): string {
  const cleaned = path
    .trim()
    .replace(/^\/+|\/+$/g, "");

  if (!cleaned) {
    return "/";
  }

  return `/${cleaned}`;
}

/**
 * Build an absolute canonical URL.
 */
function buildUrl(path: string): string {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${normalizedPath}`;
}

/**
 * Generate sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  /**
   * Prevent duplicate URLs.
   */
  const addedUrls = new Set<string>();

  /**
   * Add a URL to sitemap.
   *
   * lastModified should represent a genuine
   * content modification date.
   */
  const addUrl = (
    path: string,
    lastModified?: string | Date
  ): void => {
    if (!path) {
      return;
    }

    const url = buildUrl(path);

    /**
     * Skip duplicate URLs.
     */
    if (addedUrls.has(url)) {
      return;
    }

    addedUrls.add(url);

    const entry: MetadataRoute.Sitemap[number] = {
      url,
    };

    const parsedLastModified =
      parseDate(lastModified);

    if (parsedLastModified) {
      entry.lastModified = parsedLastModified;
    }

    entries.push(entry);
  };

  // ==================================================
  // HOME
  // ==================================================

  addUrl(
    "/",
    STATIC_LAST_MODIFIED
  );

  // ==================================================
  // STATIC PAGES
  // ==================================================

  addUrl(
    "/about",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/contact",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/blog",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/services",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/gallery",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/testimonials",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/locations",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/categories",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/milestones",
    STATIC_LAST_MODIFIED
  );

  // ==================================================
  // MAIN CATEGORY PAGES
  // ==================================================

  addUrl(
    "/dairy-equipment",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/milk-testing-equipment",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/milk-analyzer-machines",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/milk-testing-machine-spare-parts",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/automatic-milk-collection-system",
    STATIC_LAST_MODIFIED
  );

  addUrl(
    "/milk-rate-chart",
    STATIC_LAST_MODIFIED
  );

  // ==================================================
  // AUTOMATIC MILK COLLECTION SYSTEM
  // ==================================================

  if (Array.isArray(automaticMilkCollectionSystem)) {
    (
      automaticMilkCollectionSystem as SitemapItem[]
    ).forEach((product) => {
      const slug = cleanSegment(product?.url);

      if (!slug) {
        return;
      }

      addUrl(
        `/automatic-milk-collection-system/${slug}`,
        product.updatedAt
      );
    });
  }

  // ==================================================
  // DAIRY EQUIPMENT
  // ==================================================

  const dairyEquipment: SitemapItem[] = [
    ...(Array.isArray(creamSeparatorMachine)
      ? (creamSeparatorMachine as SitemapItem[])
      : []),
  ];

  dairyEquipment.forEach((product) => {
    const slug = cleanSegment(product?.url);

    if (!slug) {
      return;
    }

    addUrl(
      `/dairy-equipment/${slug}`,
      product.updatedAt
    );
  });

  // ==================================================
  // MILK TESTING EQUIPMENT
  // ==================================================

  if (Array.isArray(MilkTestingEquipment)) {
    (
      MilkTestingEquipment as SitemapItem[]
    ).forEach((product) => {
      const slug = cleanSegment(product?.url);

      if (!slug) {
        return;
      }

      addUrl(
        `/milk-testing-equipment/${slug}`,
        product.updatedAt
      );
    });
  }

  // ==================================================
  // MILK ANALYZER MACHINES
  // ==================================================

  if (Array.isArray(MilkAnalyzerMachines)) {
    (
      MilkAnalyzerMachines as SitemapItem[]
    ).forEach((product) => {
      const slug = cleanSegment(product?.url);

      if (!slug) {
        return;
      }

      addUrl(
        `/milk-analyzer-machines/${slug}`,
        product.updatedAt
      );
    });
  }

  // ==================================================
  // BLOG POSTS
  // ==================================================

  if (
    blogs &&
    typeof blogs === "object"
  ) {
    Object.values(
      blogs as Record<string, BlogItem>
    ).forEach((blog) => {
      const slug = cleanSegment(blog?.slug);

      if (!slug) {
        return;
      }

      addUrl(
        `/blog/${slug}`,
        blog.updatedAt
      );
    });
  }

  // ==================================================
  // RAJASTHAN LOCATION LANDING PAGES
  // ==================================================

  if (Array.isArray(rajasthanLocations)) {
    (
      rajasthanLocations as readonly LocationItem[]
    ).forEach((location) => {
      const slug = cleanSegment(location?.slug);

      if (!slug) {
        return;
      }

      addUrl(
        `/milk-analyzer-${slug}`,
        location.updatedAt
      );
    });
  }

  // ==================================================
  // RETURN FINAL SITEMAP
  // ==================================================

  return entries;
}
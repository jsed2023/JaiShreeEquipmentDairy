import type { MetadataRoute } from "next";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  automaticMilkCollectionSystem,
  MilkAnalyzerMachines,
} from "@/config/products";

import { blogs } from "@/config/blogs";
import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { spareParts } from "@/config/spareparts";
/**
 * Production canonical domain.
 */
const BASE_URL = "https://jaishreeequipmentdairy.co.in";

export const revalidate = 3600;

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


  const addedUrls = new Set<string>();

 
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
// MILK TESTING MACHINE SPARE PARTS
// ==================================================

if (Array.isArray(spareParts)) {
  spareParts.forEach((product) => {
    const name =
      typeof product?.name === "string"
        ? product.name
        : "";

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!slug) {
      return;
    }

    addUrl(
      `/milk-testing-machine-spare-parts/${slug}`,
      new Date("2026-10-14")
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
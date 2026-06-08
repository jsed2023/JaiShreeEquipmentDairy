import { MetadataRoute } from "next";

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

// ========================================
// Revalidate Sitemap Cache
// ========================================

export const revalidate = 86400;

// ========================================
// Base URL
// ========================================

const BASE_URL = siteConfig.url.replace(/\/$/, "");

// ========================================
// Change Frequency Type
// ========================================

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// ========================================
// Blog Type
// ========================================

type BlogType = {
  slug: string;
  updatedAt?: string | Date;
};

// ========================================
// Product Type
// ========================================

type ProductType = {
  url?: string;
  updatedAt?: string | Date;
};

// ========================================
// Static Page Type
// ========================================

type StaticPageType = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

// ========================================
// Get Safe Current UTC Date
// ========================================

const getSafeDate = () => {
  const now = new Date();

  return new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate()
    )
  );
};

// ========================================
// Sanitize Date
// ========================================

const sanitizeDate = (
  date?: string | Date
) => {
  if (!date) {
    return getSafeDate();
  }

  const parsed = new Date(date);

  if (isNaN(parsed.getTime())) {
    return getSafeDate();
  }

  const now = new Date();

  // Prevent future dates
  if (parsed > now) {
    return getSafeDate();
  }

  return parsed;
};

// ========================================
// Default Static Date
// ========================================

const STATIC_DATE = new Date("2025-06-08");

// ========================================
// Sitemap Generator
// ========================================

export default function sitemap():
  MetadataRoute.Sitemap {

  const sitemap:
    MetadataRoute.Sitemap = [];

  const addedUrls =
    new Set<string>();

  // ========================================
  // Add URL Helper
  // ========================================

  const addUrl = (
    path: string,
    priority = 0.7,
    changeFrequency:
      ChangeFrequency = "weekly",
    lastModified: Date =
      STATIC_DATE
  ) => {

    const fullUrl = encodeURI(
      `${BASE_URL}${path}`
    );

    // Prevent duplicate URLs
    if (addedUrls.has(fullUrl)) {
      return;
    }

    addedUrls.add(fullUrl);

    sitemap.push({
      url: fullUrl,
      lastModified,
      changeFrequency,
      priority,
    });
  };

  // ========================================
  // Static Pages
  // ========================================

  const staticPages:
    StaticPageType[] = [

    {
      path: "/",
      priority: 1.0,
      changeFrequency: "daily",
    },

    {
      path: "/about",
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      path: "/contact",
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "daily",
    },

    {
      path: "/services",
      priority: 0.7,
      changeFrequency: "monthly",
    },

    {
      path: "/gallery",
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      path: "/testimonials",
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      path: "/locations",
      priority: 0.6,
      changeFrequency: "weekly",
    },

    {
      path: "/categories",
      priority: 0.7,
      changeFrequency: "weekly",
    },

    {
      path: "/milestones",
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      path: "/dairy-equipment",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path:
        "/milk-testing-equipment",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path:
        "/milk-analyzer-machines",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path:
        "/automatic-milk-collection-system",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path:
        "/milk-rate-chart",
      priority: 0.7,
      changeFrequency: "daily",
    },
  ];

  // ========================================
  // Add Static Pages
  // ========================================

  staticPages.forEach((page) => {

    addUrl(
      page.path,
      page.priority,
      page.changeFrequency,
      STATIC_DATE
    );
  });

  // ========================================
  // Automatic Milk Collection System
  // ========================================

  automaticMilkCollectionSystem?.forEach(
    (product: ProductType) => {

      if (!product?.url) {
        return;
      }

      addUrl(
        `/automatic-milk-collection-system/${product.url}`,
        0.7,
        "weekly",
        sanitizeDate(
          product.updatedAt
        )
      );
    }
  );

  // ========================================
  // Dairy Equipment
  // ========================================

  [
    ...creamSeparatorMachine,
    ...milkingMachine,
  ].forEach(
    (product: ProductType) => {

      if (!product?.url) {
        return;
      }

      addUrl(
        `/dairy-equipment/${product.url}`,
        0.7,
        "weekly",
        sanitizeDate(
          product.updatedAt
        )
      );
    }
  );

  // ========================================
  // Milk Testing Equipment
  // ========================================

  MilkTestingEquipment?.forEach(
    (product: ProductType) => {

      if (!product?.url) {
        return;
      }

      addUrl(
        `/milk-testing-equipment/${product.url}`,
        0.7,
        "weekly",
        sanitizeDate(
          product.updatedAt
        )
      );
    }
  );

  // ========================================
  // Milk Analyzer Machines
  // ========================================

  MilkAnalyzerMachines?.forEach(
    (product: ProductType) => {

      if (!product?.url) {
        return;
      }

      addUrl(
        `/milk-analyzer-machines/${product.url}`,
        0.7,
        "weekly",
        sanitizeDate(
          product.updatedAt
        )
      );
    }
  );

  // ========================================
  // Blog Pages
  // ========================================

  Object.values(blogs || {})
    .forEach((blog) => {

      const typedBlog =
        blog as BlogType;

      if (!typedBlog?.slug) {
        return;
      }

      addUrl(
        `/blog/${typedBlog.slug}`,
        0.6,
        "weekly",
        sanitizeDate(
          typedBlog.updatedAt
        )
      );
    });

  // ========================================
  // Rajasthan Location Pages
  // ========================================

  rajasthanLocations?.forEach(
    (location) => {

      if (!location?.slug) {
        return;
      }

      addUrl(
        `/milk-analyzer-${location.slug}`,
        0.5,
        "monthly",
        STATIC_DATE
      );
    }
  );

  // ========================================
  // Return Clean Sitemap
  // ========================================

  return sitemap;
}
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

// =========================
// Base URL
// =========================

const BASE_URL =
  siteConfig.url.replace(/\/$/, "");

// =========================
// Change Frequency Type
// =========================

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// =========================
// Blog Type
// =========================

type BlogType = {
  slug: string;
  updatedAt?: string | Date;
};

// =========================
// Safe Date Helper
// =========================

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

// =========================
// Sanitize Date
// =========================

const sanitizeDate = (
  date?: string | Date
) => {

  if (!date) {
    return getSafeDate();
  }

  const parsed =
    new Date(date);

  if (
    isNaN(parsed.getTime())
  ) {
    return getSafeDate();
  }

  const now =
    new Date();

  return parsed > now
    ? getSafeDate()
    : parsed;
};

// =========================
// Sitemap
// =========================

export default function sitemap():
MetadataRoute.Sitemap {

  const sitemap:
    MetadataRoute.Sitemap = [];

  const addedUrls =
    new Set<string>();

  // =========================
  // Add URL Helper
  // =========================

  const addUrl = (
    path: string,
    priority = 0.7,
    changeFrequency:
      ChangeFrequency = "weekly",
    lastModified: Date =
      getSafeDate()
  ) => {

    const fullUrl =
      encodeURI(
        `${BASE_URL}${path}`
      );

    // Prevent duplicates
    if (
      addedUrls.has(fullUrl)
    ) {
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

  // =========================
  // Static Pages
  // =========================

  const staticPages = [

    {
      path: "/",
      priority: 1.0,
      changeFrequency: "daily",
    },

    {
      path: "/about",
      priority: 0.4,
      changeFrequency: "monthly",
    },

    {
      path:
        "/automatic-milk-collection-system",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path: "/blog",
      priority: 0.8,
      changeFrequency: "daily",
    },

    {
      path: "/contact",
      priority: 0.4,
      changeFrequency: "monthly",
    },

    {
      path: "/categories",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path: "/dairy-equipment",
      priority: 0.8,
      changeFrequency: "weekly",
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
      path: "/milestones",
      priority: 0.5,
      changeFrequency: "monthly",
    },

    {
      path:
        "/milk-analyzer-machines",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path:
        "/milk-rate-chart",
      priority: 0.7,
      changeFrequency: "daily",
    },

    {
      path:
        "/milk-testing-equipment",
      priority: 0.8,
      changeFrequency: "weekly",
    },

    {
      path: "/services",
      priority: 0.6,
      changeFrequency: "monthly",
    },
  ];

  // =========================
  // Add Static Pages
  // =========================

  staticPages.forEach(
    (page) => {

      addUrl(
        page.path,
        page.priority,
        page.changeFrequency,
        getSafeDate()
      );
    }
  );

  // =========================
  // Automatic Milk Collection
  // =========================

  automaticMilkCollectionSystem?.forEach(
    (product) => {

      if (product?.url) {

        addUrl(
          `/automatic-milk-collection-system/${product.url}`,
          0.7,
          "weekly",
          sanitizeDate(
            product.updatedAt
          )
        );
      }
    }
  );

  // =========================
  // Dairy Equipment
  // =========================

  [
    ...creamSeparatorMachine,
    ...milkingMachine,
  ].forEach((product) => {

    if (product?.url) {

      addUrl(
        `/dairy-equipment/${product.url}`,
        0.7,
        "weekly",
        sanitizeDate(
          product.updatedAt
        )
      );
    }
  });

  // =========================
  // Milk Testing Equipment
  // =========================

  MilkTestingEquipment?.forEach(
    (product) => {

      if (product?.url) {

        addUrl(
          `/milk-testing-equipment/${product.url}`,
          0.7,
          "weekly",
          sanitizeDate(
            product.updatedAt
          )
        );
      }
    }
  );

  // =========================
  // Milk Analyzer Machines
  // =========================

  MilkAnalyzerMachines?.forEach(
    (product) => {

      if (product?.url) {

        addUrl(
          `/milk-analyzer-machines/${product.url}`,
          0.7,
          "weekly",
          sanitizeDate(
            product.updatedAt
          )
        );
      }
    }
  );

  // =========================
  // Blogs
  // =========================

  Object.values(
    blogs || {}
  ).forEach((blog) => {

    const typedBlog =
      blog as BlogType;

    if (typedBlog?.slug) {

      addUrl(
        `/blog/${typedBlog.slug}`,
        0.6,
        "weekly",
        sanitizeDate(
          typedBlog.updatedAt
        )
      );
    }
  });

  // =========================
  // Location Pages
  // =========================

  rajasthanLocations?.forEach(
    (location) => {

      addUrl(
        `/milk-analyzer-${location.slug}`,
        0.5,
        "monthly",
        getSafeDate()
      );
    }
  );

  return sitemap;
}
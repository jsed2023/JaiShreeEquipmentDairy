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

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

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

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  // Prevent duplicate URLs
  const addedUrls = new Set<string>();

  const addUrl = (
    path: string,
    priority = 0.8,
    changeFrequency: ChangeFrequency = "weekly",
    lastModified: Date = new Date()
  ) => {
    const fullUrl = `${BASE_URL}${path}`;

    // Skip duplicates
    if (addedUrls.has(fullUrl)) return;

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
      priority: 1,
      changeFrequency: "daily" as ChangeFrequency,
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/automatic-milk-collection-system",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/blog",
      priority: 0.9,
      changeFrequency: "daily" as ChangeFrequency,
    },
    {
      path: "/contact",
      priority: 0.6,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/categories",
      priority: 0.8,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/dairy-equipment",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/gallery",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/testimonials",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/locations",
      priority: 0.8,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/milestones",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/milk-analyzer-machines",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/milk-rate-chart",
      priority: 0.8,
      changeFrequency: "daily" as ChangeFrequency,
    },
    {
      path: "/milk-testing-equipment",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/services",
      priority: 0.8,
      changeFrequency: "monthly" as ChangeFrequency,
    },
  ];

  staticPages.forEach((page) => {
    addUrl(
      page.path,
      page.priority,
      page.changeFrequency
    );
  });

  // =========================
  // Automatic Milk Collection System
  // =========================
  automaticMilkCollectionSystem?.forEach((product) => {
    if (product?.url) {
      addUrl(
        `/automatic-milk-collection-system/${product.url}`,
        0.9,
        "weekly"
      );
    }
  });

  // =========================
  // Dairy Equipment
  // =========================
  [...creamSeparatorMachine, ...milkingMachine].forEach(
    (product) => {
      if (product?.url) {
        addUrl(
          `/dairy-equipment/${product.url}`,
          0.9,
          "weekly"
        );
      }
    }
  );

  // =========================
  // Milk Testing Equipment
  // =========================
  MilkTestingEquipment?.forEach((product) => {
    if (product?.url) {
      addUrl(
        `/milk-testing-equipment/${product.url}`,
        0.9,
        "weekly"
      );
    }
  });

  // =========================
  // Milk Analyzer Machines
  // =========================
  MilkAnalyzerMachines?.forEach((product) => {
    if (product?.url) {
      addUrl(
        `/milk-analyzer-machines/${product.url}`,
        0.9,
        "weekly"
      );
    }
  });

  // =========================
  // Blogs
  // =========================
  Object.values(blogs || {}).forEach((blog) => {
    const typedBlog = blog as BlogType;

    if (typedBlog?.slug) {
      addUrl(
        `/blog/${typedBlog.slug}`,
        0.8,
        "weekly",
        typedBlog.updatedAt
          ? new Date(typedBlog.updatedAt)
          : new Date()
      );
    }
  });

  // =========================
  // Rajasthan Location Pages
  // =========================
  rajasthanLocations?.forEach((location) => {
    addUrl(
      `/milk-analyzer-${slugify(location)}`,
      0.7,
      "monthly"
    );
  });

  return sitemap;
}
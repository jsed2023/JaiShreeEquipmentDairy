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

export const revalidate = 86400;

const BASE_URL = siteConfig.url.replace(/\/$/, "");

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const getLastModified = (
  date?: string | Date
) => {
  if (!date) {
    return new Date();
  }

  const parsed = new Date(date);

  if (isNaN(parsed.getTime())) {
    return new Date();
  }

  return parsed > new Date()
    ? new Date()
    : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  const addedUrls = new Set<string>();

  const addUrl = (
    path: string,
    priority: number = 0.7,
    changeFrequency: ChangeFrequency = "weekly",
    lastModified: Date = new Date()
  ) => {
    const url = encodeURI(
      `${BASE_URL}${path}`
    );

    if (addedUrls.has(url)) {
      return;
    }

    addedUrls.add(url);

    sitemap.push({
      url,
      lastModified,
      changeFrequency,
      priority,
    });
  };

  // Static Pages

  [
    ["/", 1, "daily"],
    ["/about", 0.5, "monthly"],
    ["/contact", 0.5, "monthly"],
    ["/blog", 0.8, "daily"],
    ["/services", 0.7, "monthly"],
    ["/gallery", 0.5, "monthly"],
    ["/testimonials", 0.5, "monthly"],
    ["/locations", 0.6, "weekly"],
    ["/categories", 0.7, "weekly"],
    ["/milestones", 0.5, "monthly"],
    ["/dairy-equipment", 0.8, "weekly"],
    ["/milk-testing-equipment", 0.8, "weekly"],
    ["/milk-analyzer-machines", 0.8, "weekly"],
    ["/milk-testing-machine-spare-parts", 0.8,"weekly"],
    ["/automatic-milk-collection-system", 0.8, "weekly"],
    ["/milk-rate-chart", 0.7, "daily"],
  ].forEach(
    ([path, priority, changeFrequency]) => {
      addUrl(
        path as string,
        priority as number,
        changeFrequency as ChangeFrequency,
        new Date()
      );
    }
  );

  // Automatic Milk Collection System

  automaticMilkCollectionSystem?.forEach(
    (product) => {
      if (!product?.url) return;

      addUrl(
        `/automatic-milk-collection-system/${product.url}`,
        0.7,
        "weekly",
        getLastModified(
          product.updatedAt
        )
      );
    }
  );

  // Dairy Equipment

  [
    ...creamSeparatorMachine,
    ...milkingMachine,
  ].forEach((product) => {
    if (!product?.url) return;

    addUrl(
      `/dairy-equipment/${product.url}`,
      0.7,
      "weekly",
      getLastModified(
        product.updatedAt
      )
    );
  });

  // Milk Testing Equipment

  MilkTestingEquipment?.forEach(
    (product) => {
      if (!product?.url) return;

      addUrl(
        `/milk-testing-equipment/${product.url}`,
        0.7,
        "weekly",
        getLastModified(
          product.updatedAt
        )
      );
    }
  );

  // Milk Analyzer Machines

  MilkAnalyzerMachines?.forEach(
    (product) => {
      if (!product?.url) return;

      addUrl(
        `/milk-analyzer-machines/${product.url}`,
        0.7,
        "weekly",
        getLastModified(
          product.updatedAt
        )
      );
    }
  );

  // Blogs

  Object.values(blogs || {}).forEach(
    (blog: any) => {
      if (!blog?.slug) return;

      addUrl(
        `/blog/${blog.slug}`,
        0.8,
        "weekly",
        getLastModified(
          blog.updatedAt
        )
      );
    }
  );

  // Rajasthan Location Pages

  rajasthanLocations?.forEach(
    (location) => {
      if (!location?.slug) return;

      addUrl(
        `/milk-analyzer-${location.slug}`,
        0.5,
        "monthly",
        new Date()
      );
    }
  );

  return sitemap;
}
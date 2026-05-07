import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";

import { rajasthanLocations } from "@/lib/rajasthan-locations";

const SITE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/testimonials`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/milestones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/milk-rate-chart`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/automatic-milk-collection-system`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/milk-testing-equipment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/dairy-equipment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  /* ================= PRODUCTS ================= */

  const automaticMilkCollectionPages: MetadataRoute.Sitemap =
    automaticMilkCollectionSystem.map((product) => ({
      url: `${SITE_URL}/automatic-milk-collection-system/${product.url}`,
      lastModified: product.updatedAt || now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  const dairyEquipmentPages: MetadataRoute.Sitemap = [
    ...creamSeparatorMachine,
    ...milkingMachine,
  ].map((product) => ({
    url: `${SITE_URL}/dairy-equipment/${product.url}`,
    lastModified: product.updatedAt || now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const milkTestingPages: MetadataRoute.Sitemap =
    MilkTestingEquipment.map((product) => ({
      url: `${SITE_URL}/milk-testing-equipment/${product.url}`,
      lastModified: product.updatedAt || now,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  /* ================= LOCATIONS ================= */

  const locationPages: MetadataRoute.Sitemap =
    rajasthanLocations.map((location) => {
      const slug = location
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      return {
        url: `${SITE_URL}/milk-analyzer-${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      };
    });

  /* ================= FINAL ================= */

  return [
    ...staticPages,
    ...automaticMilkCollectionPages,
    ...dairyEquipmentPages,
    ...milkTestingPages,
    ...locationPages,
  ];
}
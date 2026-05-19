import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const dynamic = "force-static";
export const revalidate = 86400;

const SITE_URL = siteConfig.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/categories",
    "/gallery",
    "/testimonials",
    "/locations",
    "/milestones",
    "/milk-rate-chart",
    "/services",
    "/automatic-milk-collection-system",
    "/milk-testing-equipment",
    "/dairy-equipment",
  ].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/milk-rate-chart"
        ? ("daily" as const)
        : ("weekly" as const),
    priority: index === 0 ? 1 : 0.8,
  }));

  const automaticMilkCollectionPages =
    automaticMilkCollectionSystem
      ?.filter((product) => product?.url)
      ?.map((product) => ({
        url: `${SITE_URL}/automatic-milk-collection-system/${product.url}`,
        lastModified: product.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })) || [];

  const dairyEquipmentPages =
    [...creamSeparatorMachine, ...milkingMachine]
      ?.filter((product) => product?.url)
      ?.map((product) => ({
        url: `${SITE_URL}/dairy-equipment/${product.url}`,
        lastModified: product.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })) || [];

  const milkTestingEquipmentPages =
    MilkTestingEquipment
      ?.filter((product) => product?.url)
      ?.map((product) => ({
        url: `${SITE_URL}/milk-testing-equipment/${product.url}`,
        lastModified: product.updatedAt
          ? new Date(product.updatedAt)
          : now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      })) || [];

  const locationPages =
    rajasthanLocations?.map((location) => {
      const slug = location
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      return {
        url: `${SITE_URL}/milk-analyzer-${slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    }) || [];

  return [
    ...staticPages,
    ...automaticMilkCollectionPages,
    ...dairyEquipmentPages,
    ...milkTestingEquipmentPages,
    ...locationPages,
  ];
}
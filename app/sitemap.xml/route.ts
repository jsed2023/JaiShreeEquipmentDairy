import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";

import { blogs } from "@/config/blogs";

import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const dynamic = "force-dynamic";

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function GET() {
  const now = new Date().toISOString();

  const urls: string[] = [];

  const addUrl = (
    path: string,
    priority = 0.8,
    changefreq = "weekly"
  ) => {
    urls.push(`
      <url>
        <loc>${BASE_URL}${encodeURI(path)}</loc>
        <lastmod>${now}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>
    `);
  };

  // Static pages
  [
    "",
    "/about",
    "/automatic-milk-collection-system",
    "/blog",
    "/contact",
    "/categories",
    "/dairy-equipment",
    "/gallery",
    "/testimonials",
    "/locations",
    "/milestones",
    "/milk-rate-chart",
    "/milk-testing-equipment",
    "/services",
  ].forEach((path, index) => {
    addUrl(path, index === 0 ? 1 : 0.8);
  });

  // Automatic Milk Collection System
  automaticMilkCollectionSystem?.forEach((p) => {
    if (p.url) {
      addUrl(
        `/automatic-milk-collection-system/${p.url}`,
        0.9
      );
    }
  });

  // Dairy Equipment
  [...creamSeparatorMachine, ...milkingMachine].forEach(
    (p) => {
      if (p.url) {
        addUrl(`/dairy-equipment/${p.url}`, 0.9);
      }
    }
  );

  // Milk Testing Equipment
  MilkTestingEquipment?.forEach((p) => {
    if (p.url) {
      addUrl(
        `/milk-testing-equipment/${p.url}`,
        0.9
      );
    }
  });

  // Blogs
  Object.values(blogs).forEach((blog) => {
    if (
      blog &&
      typeof blog === "object" &&
      "slug" in blog &&
      typeof blog.slug === "string"
    ) {
      addUrl(`/blog/${blog.slug}`, 0.8);
    }
  });

  // Rajasthan location pages
  rajasthanLocations?.forEach((location) => {
    addUrl(
      `/milk-analyzer-${slugify(location)}`,
      0.7
    );
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
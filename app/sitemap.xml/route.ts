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

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function GET() {
  // Safer sitemap date format
  const now = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const addUrl = (
    url: string,
    lastMod: string = now,
    freq: string = "weekly",
    priority: number = 0.5
  ) => {
    xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  };

  const staticPages = [
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
  ];

  staticPages.forEach((path, i) =>
    addUrl(`${BASE_URL}${path}`, now, "weekly", i === 0 ? 1 : 0.8)
  );

  automaticMilkCollectionSystem?.forEach(
    (p) =>
      p.url &&
      addUrl(
        `${BASE_URL}/automatic-milk-collection-system/${p.url}`,
        now,
        "weekly",
        0.9
      )
  );

  [...creamSeparatorMachine, ...milkingMachine]?.forEach(
    (p) =>
      p.url &&
      addUrl(
        `${BASE_URL}/dairy-equipment/${p.url}`,
        now,
        "weekly",
        0.9
      )
  );

  MilkTestingEquipment?.forEach(
    (p) =>
      p.url &&
      addUrl(
        `${BASE_URL}/milk-testing-equipment/${p.url}`,
        now,
        "weekly",
        0.9
      )
  );

  Object.values(blogs)?.forEach(
    (b) =>
      b.slug &&
      addUrl(`${BASE_URL}/blog/${b.slug}`, now, "weekly", 0.8)
  );

  rajasthanLocations?.forEach((loc) =>
    addUrl(
      `${BASE_URL}/milk-analyzer-${slugify(loc)}`,
      now,
      "weekly",
      0.7
    )
  );

  xml += `
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}

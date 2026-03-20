import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";

const SITE_URL = siteConfig.url;

type SitemapEntry = {
  path: string;
  updatedAt?: string | Date;
  priority?: number;
  changefreq?: string;
};

const formatDate = (date?: string | Date) =>
  date ? new Date(date).toISOString() : "";

export async function GET() {
  const LAST_UPDATED = new Date();

  /* STATIC PAGES */
  const pages: SitemapEntry[] = [
    { path: "/", priority: 1, updatedAt: LAST_UPDATED, changefreq: "daily" },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/categories", priority: 0.8 },
    { path: "/gallery", priority: 0.7 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/locations", priority: 0.9, updatedAt: LAST_UPDATED },
    { path: "/milestones", priority: 0.7 },
    { path: "/milk-rate-chart", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/automatic-milk-collection-system", priority: 0.9 },
    { path: "/milk-testing-equipment", priority: 0.9 },
    { path: "/dairy-equipment", priority: 0.9 },
  ];

  /* PRODUCT PAGES */
  const productPages: SitemapEntry[] = [
    ...automaticMilkCollectionSystem.map((p) => ({
      path: `/automatic-milk-collection-system/${p.url}`,
      updatedAt: p.updatedAt,
      priority: 0.9,
    })),

    ...[...creamSeparatorMachine, ...milkingMachine].map((p) => ({
      path: `/dairy-equipment/${p.url}`,
      updatedAt: p.updatedAt,
      priority: 0.9,
    })),

    ...MilkTestingEquipment.map((p) => ({
      path: `/milk-testing-equipment/${p.url}`,
      updatedAt: p.updatedAt,
      priority: 0.9,
    })),
  ];

  /* LOCATION PAGES (AUTO UPDATE 🔥) */
  const locationPages: SitemapEntry[] = rajasthanLocations.map((slug) => ({
    path: `/milk-analyzer-${slug}`,
    updatedAt: LAST_UPDATED,
    priority: 0.8,
    changefreq: "weekly",
  }));

  const urls = [...pages, ...productPages, ...locationPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls
  .map(
    ({ path, updatedAt, priority, changefreq }) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    ${updatedAt ? `<lastmod>${formatDate(updatedAt)}</lastmod>` : ""}
    <changefreq>${changefreq ?? "weekly"}</changefreq>
    <priority>${priority ?? 0.7}</priority>
  </url>`
  )
  .join("")}

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store", // 🔥 MUST
    },
  });
}
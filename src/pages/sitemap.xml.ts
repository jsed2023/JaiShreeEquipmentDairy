
import type { APIRoute } from "astro";

import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  automaticMilkCollectionSystem,
  MilkAnalyzerMachines,
} from "@/config/products";

import { rajasthanLocations } from "@/lib/rajasthan-locations";
import { spareParts } from "@/config/spareparts";

const BASE_URL = "https://jaishreeequipmentdairy.co.in";
const STATIC_LAST_MODIFIED = "2026-07-09";

type SitemapItem = {
  url?: string;
  slug?: string;
  name?: string;
  updatedAt?: string | Date;
};

type SitemapEntry = {
  url: string;
  lastModified?: Date;
};

function parseDate(value?: string | Date): Date | undefined {
  if (!value) return undefined;

  const date = value instanceof Date ? value : new Date(value);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

function cleanSegment(value: unknown): string {
  if (typeof value !== "string") return "";

  return value.trim().replace(/^\/+|\/+$/g, "");
}

function normalizePath(path: string): string {
  const cleaned = path.trim().replace(/^\/+|\/+$/g, "");
  return cleaned ? `/${cleaned}` : "/";
}

function buildUrl(path: string): string {
  return `${BASE_URL}${normalizePath(path)}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
  const entries: SitemapEntry[] = [];
  const addedUrls = new Set<string>();

  const addUrl = (
    path: string,
    lastModified?: string | Date,
  ): void => {
    if (!path) return;

    const url = buildUrl(path);

    if (addedUrls.has(url)) return;

    addedUrls.add(url);

    const entry: SitemapEntry = { url };
    const parsedDate = parseDate(lastModified);

    if (parsedDate) {
      entry.lastModified = parsedDate;
    }

    entries.push(entry);
  };

  // HOME PAGE
  addUrl("/", STATIC_LAST_MODIFIED);

  // STATIC PAGES
  const staticPages = [
    "/about",
    "/contact",
    "/services",
    "/gallery",
    "/testimonials",
    "/locations",
    "/categories",
    "/milestones",
  ];

  staticPages.forEach((path) => addUrl(path, STATIC_LAST_MODIFIED));

  // MAIN CATEGORY PAGES
  const categoryPages = [
    "/dairy-equipment",
    "/milk-testing-equipment",
    "/milk-analyzer-machines",
    "/milk-testing-machine-spare-parts",
    "/automatic-milk-collection-system",
    "/milk-rate-chart",
  ];

  categoryPages.forEach((path) => addUrl(path, STATIC_LAST_MODIFIED));

  // AUTOMATIC MILK COLLECTION SYSTEM
  (automaticMilkCollectionSystem as SitemapItem[]).forEach((product) => {
    const slug = cleanSegment(product?.url);
    if (!slug) return;

    addUrl(
      `/automatic-milk-collection-system/${slug}`,
      product.updatedAt,
    );
  });

  // DAIRY EQUIPMENT
  (creamSeparatorMachine as SitemapItem[]).forEach((product) => {
    const slug = cleanSegment(product?.url);
    if (!slug) return;

    addUrl(`/dairy-equipment/${slug}`, product.updatedAt);
  });

  // MILK TESTING EQUIPMENT
  (MilkTestingEquipment as SitemapItem[]).forEach((product) => {
    const slug = cleanSegment(product?.url);
    if (!slug) return;

    addUrl(`/milk-testing-equipment/${slug}`, product.updatedAt);
  });

  // MILK ANALYZER MACHINES
  (MilkAnalyzerMachines as SitemapItem[]).forEach((product) => {
    const slug = cleanSegment(product?.url);
    if (!slug) return;

    addUrl(`/milk-analyzer-machines/${slug}`, product.updatedAt);
  });

  // SPARE PARTS
  spareParts.forEach((product) => {
    const name = typeof product?.name === "string" ? product.name : "";

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!slug) return;

    addUrl(
      `/milk-testing-machine-spare-parts/${slug}`,
      "2026-10-14",
    );
  });

  // RAJASTHAN LOCATION PAGES
  rajasthanLocations.forEach((location) => {
    const slug = cleanSegment(location?.slug);
    if (!slug) return;

    addUrl(`/milk-analyzer-${slug}`, location.updatedAt);
  });

  // GENERATE XML
  const xmlUrls = entries
    .map((entry) => {
      const lastmod = entry.lastModified
        ? `\n    <lastmod>${entry.lastModified.toISOString()}</lastmod>`
        : "";

      return `  <url>
    <loc>${escapeXml(entry.url)}</loc>${lastmod}
  </url>`;
    })
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};

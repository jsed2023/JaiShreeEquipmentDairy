import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

const SITE_URL = siteConfig.url;

type SitemapEntry = {
  path: string;
  updatedAt?: string | Date;
  priority?: number;
  changefreq?: string;
};

const formatDate = (date?: string | Date) =>
  new Date(date || new Date()).toISOString();

export async function GET() {
  const LAST_UPDATED = new Date();

  /* 🔥 LOCATION PAGES */
  const locationPages: SitemapEntry[] = rajasthanLocations.map((loc) => {
    const slug = loc.toLowerCase().replace(/\s+/g, "-");

    return {
      path: `/milk-analyzer-${slug}`, // ✅ YOUR URL FORMAT
      updatedAt: LAST_UPDATED,
      priority: 0.85,
      changefreq: "weekly",
    };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${locationPages
  .map(
    ({ path, updatedAt, priority, changefreq }) => `
  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${formatDate(updatedAt)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate",
    },
  });
}
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { rajasthanLocations } from "@/lib/rajasthan-locations";

export const runtime = "nodejs";

const SITE_URL = siteConfig.url;

const formatDate = (date?: string | Date) =>
  new Date(date || new Date()).toISOString();

export async function GET() {
  const now = new Date();
  const LAST_UPDATED = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const locationPages = rajasthanLocations.map((loc) => {
    const slug = loc.toLowerCase().replace(/\s+/g, "-");

    return {
      url: `${SITE_URL}/milk-analyzer-${slug}`,
      lastModified: formatDate(LAST_UPDATED),
    };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationPages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
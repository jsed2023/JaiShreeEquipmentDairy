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

/* ✅ Format date as YYYY-MM-DD (SEO friendly) */
const formatDate = (date?: string | Date) =>
  new Date(date || new Date()).toISOString().split("T")[0];

export async function GET() {
  /* ✅ Midnight-based date (changes once per day) */
  const now = new Date();
  const LAST_UPDATED = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  /* 🔥 LOCATION PAGES */
  const locationPages: SitemapEntry[] = rajasthanLocations.map((loc) => {
    const slug = loc.toLowerCase().replace(/\s+/g, "-");

    return {
      path: `/milk-analyzer-${slug}`,
      updatedAt: LAST_UPDATED,
      priority: 0.85,
      changefreq: "weekly",
    };
  });

  /* 🔥 OPTIONAL: STATIC PAGES */
  const staticPages: SitemapEntry[] = [
    {
      path: "/",
      updatedAt: LAST_UPDATED,
      priority: 1.0,
      changefreq: "daily",
    },
    {
      path: "/about",
      updatedAt: LAST_UPDATED,
      priority: 0.7,
      changefreq: "monthly",
    },
    {
      path: "/contact",
      updatedAt: LAST_UPDATED,
      priority: 0.7,
      changefreq: "monthly",
    },
  ];

  /* 🔥 MERGE ALL PAGES */
  const allPages = [...staticPages, ...locationPages];

  /* 🔥 XML GENERATION */
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${allPages
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
      /* ✅ Cache for 24h (best for SEO + performance) */
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate",
    },
  });
}
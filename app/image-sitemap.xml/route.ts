import { NextResponse } from "next/server";
import { sitemapUrls, SitemapUrl, SitemapItem } from "@/lib/sitemap-urls";
import { siteConfig } from "@/config/site";

type ImageType = string | { src?: string; url?: string };

export async function GET() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  // ---------------- IMAGE RESOLVER ----------------

  const resolveImages = (item?: SitemapItem): string[] => {
    if (!item) return [];

    const images: ImageType[] = [];

    if (Array.isArray(item.images)) images.push(...item.images);
    if (item.image) images.push(item.image);

    return images
      .map((img) => {
        if (typeof img === "string") return img;
        if (typeof img === "object" && img.src) return img.src;
        if (typeof img === "object" && img.url) return img.url;
        return null;
      })
      .filter((img): img is string => Boolean(img));
  };

  // --------------- NORMALIZER ----------------

  const normalizeImageUrl = (img: string) => {
    if (img.startsWith("http")) return img;
    return `${baseUrl}${img.startsWith("/") ? img : `/${img}`}`;
  };

  // --------------- XML HEADER ----------------

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // --------------- LOOP ALL URLS ----------------

  sitemapUrls.forEach((entry: SitemapUrl) => {

    let images: string[] = [];

    // Case 1: item-based pages (products, content)
    if ("item" in entry && entry.item) {
      images = resolveImages(entry.item);
    }

    // Skip only if no images at all
    if (!images.length) return;

    xml += `  <url>\n`;
    xml += `    <loc>${entry.loc}</loc>\n`;

    images.forEach((img) => {
      const imageUrl = normalizeImageUrl(img);

      xml += `    <image:image>\n`;
      xml += `      <image:loc>${imageUrl}</image:loc>\n`;

      if ("item" in entry && entry.item?.name) {
        const safeName = escapeXml(entry.item.name);
        xml += `      <image:title>${safeName}</image:title>\n`;
        xml += `      <image:caption>${safeName}</image:caption>\n`;
      }

      xml += `    </image:image>\n`;
    });

    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

// ---------------- XML ESCAPE ----------------

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

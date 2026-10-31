
import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

Sitemap: https://jaishreeequipmentdairy.co.in/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

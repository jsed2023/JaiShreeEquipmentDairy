import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // 🚫 Skip SEO files
  if (
    url.pathname.startsWith("/robots.txt") ||
    url.pathname.startsWith("/sitemap.xml") ||
    url.pathname.startsWith("/location-sitemap.xml") ||
    url.pathname.startsWith("/image-sitemap.xml")
  ) {
    return NextResponse.next();
  }

  // ✅ Remove trailing slash (except root & files)
  if (
    url.pathname !== "/" &&
    url.pathname.endsWith("/") &&
    !url.pathname.includes(".")
  ) {
    return NextResponse.redirect(
      new URL(url.pathname.slice(0, -1), request.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|location-sitemap.xml|image-sitemap.xml).*)",
  ],
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // ✅ Allow SEO files without touching
  if (
    url.pathname === "/robots.txt" ||
    url.pathname === "/sitemap.xml" ||
    url.pathname === "/location-sitemap.xml" ||
    url.pathname === "/image-sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // ✅ Remove trailing slash (safe)
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
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
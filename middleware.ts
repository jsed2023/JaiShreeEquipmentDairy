import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Ignore SEO & static files
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname === "/favicon.ico" ||
    url.pathname === "/robots.txt" ||
    url.pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Remove trailing slash
  if (
    url.pathname !== "/" &&
    url.pathname.endsWith("/")
  ) {
    url.pathname = url.pathname.slice(0, -1);

    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
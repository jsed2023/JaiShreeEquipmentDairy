import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // remove trailing slash (except root)
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    return NextResponse.redirect(
      new URL(url.pathname.slice(0, -1), request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!robots.txt|sitemap.xml|location-sitemap.xml|image-sitemap.xml).*)",
  ],
};
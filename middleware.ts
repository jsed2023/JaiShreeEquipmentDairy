import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Remove trailing slash
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
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
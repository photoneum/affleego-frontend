import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

import { auth } from "@/auth";

import { SIGN_IN_PAGE_ROUTE } from "@/lib/constants";
import { createRouteMatcher } from "@/lib/utils";

const protectedRoutes = ["/dashboard(.*)"];

// Define protected routes
const isProtectedRoute = createRouteMatcher(protectedRoutes);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Check if the path matches any protected route pattern
  if (isProtectedRoute(pathname)) {
    // Get the auth session
    const session = await auth();

    // If no session exists, redirect to the login page
    if (!session) {
      const loginUrl = new URL(SIGN_IN_PAGE_ROUTE, request.url);
      // Add the current path as a redirect parameter
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Continue with the request if authenticated or not a protected route
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

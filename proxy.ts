// middleware.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authOptions } from "./app/lib/nextauthOptions";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("🔄 Middleware running for:", pathname);
  
  // ✅ Get session with authOptions
  const session = await getServerSession(authOptions);
  console.log("📋 Session:", session?.user);

  // ✅ Check if user is authenticated
  if (!session?.user) {
    console.log("❌ No session, redirecting to login");
    
    // Create login URL with callback
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    
    return NextResponse.redirect(loginUrl);
  }

  // ✅ Check if user has admin role for admin routes
  if (pathname.startsWith("/admin") && session.user.email) {
    console.log("❌ Not admin, redirecting to home");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Allow access
  console.log("✅ Access granted");
  return NextResponse.next();
}

// ✅ Correct matcher configuration
export const config = {
  matcher: [
    "/dashboard/:path*",     // ✅ Matches /dashboard and /dashboard/*
    "/admin/:path*",         // ✅ Also protect admin routes
  ],
};
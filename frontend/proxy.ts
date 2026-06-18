// middleware.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authOptions } from "./app/lib/nextauthOptions";

export default async function middleware(request: NextRequest) {
  console.log("🔄 Middleware running for:", request.nextUrl.pathname);
  
  // ✅ Get session with authOptions
  const session = await getServerSession(authOptions);
  
  console.log("📋 Session in middleware:", session?.user);

  // ✅ Check if user is authenticated and has admin role
  if (!session) {
    console.log("❌ No session, redirecting to login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Check role
  if (session.user?.role !== "admin") {
    console.log(`❌ User role is "${session.user?.role}", not admin. Redirecting to home.`);
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Allow access
  console.log("✅ Admin access granted");
  return NextResponse.next();
}

// ✅ Correct matcher configuration
export const config = {
  matcher: [
    "/dashboard/:path*",     // ✅ Matches /dashboard and /dashboard/*
    "/admin/:path*",         // ✅ Also protect admin routes
  ],
};
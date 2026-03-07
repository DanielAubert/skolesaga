import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth/config";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const nextAuthHandler = NextAuth(authOptions);

// Wrap POST to add rate limiting on login attempts
async function POST(
  request: NextRequest,
  context: { params: Promise<{ nextauth: string[] }> }
) {
  // Only rate limit credential sign-in attempts (POST with body)
  const url = new URL(request.url);
  if (url.pathname.includes("callback/credentials")) {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`login:${ip}`, { limit: 5, windowSeconds: 60 });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: "For mange innloggingsforsøk. Prøv igjen om litt." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rateLimit.resetAt - Date.now()) / 1000)) } }
      );
    }
  }

  // Pass the actual context with params to NextAuth
  return nextAuthHandler(request, context) as unknown as Response;
}

export { nextAuthHandler as GET, POST };

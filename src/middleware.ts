import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Routes that require authentication
const protectedRoutes = [
  '/bok',
  '/book',
  '/geogebra',
  '/hoderegning',
  '/dashboard',
  '/profil',
  '/join',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path starts with any protected route
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtectedRoute) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });

    if (!token) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/bok/:path*',
    '/book/:path*',
    '/geogebra/:path*',
    '/hoderegning/:path*',
    '/dashboard/:path*',
    '/profil/:path*',
    '/join/:path*',
  ],
};

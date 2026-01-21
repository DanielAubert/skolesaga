import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Routes that require authentication
const protectedRoutes = [
  '/bok',
  '/book',
  '/quiz',
  '/geogebra',
  '/hoderegning',
  '/dashboard',
  '/profil',
];

// Map grade levels to URL paths
function getGradeUrl(gradeLevel: string): string | null {
  const gradeMap: Record<string, string> = {
    '5': '/bok/trinn/5',
    '6': '/bok/trinn/6',
    '7': '/bok/trinn/7',
    '8': '/bok/trinn/8',
    '9': '/bok/trinn/9',
    '10': '/bok/trinn/10',
    'vg1': '/bok/trinn/vg1',
    'vg2': '/bok/trinn/vg2',
    'vg3': '/bok/trinn/vg3',
  };
  return gradeMap[gradeLevel] || null;
}

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

    // Redirect students to their grade-specific page when accessing /bok directly
    if (pathname === '/bok' && token.role === 'student' && token.gradeLevel) {
      const gradeUrl = getGradeUrl(token.gradeLevel as string);
      if (gradeUrl) {
        return NextResponse.redirect(new URL(gradeUrl, request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/bok/:path*',
    '/book/:path*',
    '/quiz/:path*',
    '/geogebra/:path*',
    '/hoderegning/:path*',
    '/dashboard/:path*',
    '/profil/:path*',
  ],
};

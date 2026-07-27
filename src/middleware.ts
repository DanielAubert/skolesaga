import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profil',
  '/join',
  '/endre-passord',
];

/**
 * Nynorsk ligger på `/nn/<sti>` og skrives om internt til `<sti>`, med
 * målformen sendt videre i headeren `x-malform` (se src/lib/i18n/malform.ts).
 *
 * Hvorfor rewrite og ikke egne ruter: hele rutetreet ville måttet dupliseres,
 * og hver ny side måtte huskes to steder. Med omskriving finnes én rute per
 * side, og målformen er et lag utenpå.
 *
 * Merk at dette er en REWRITE, ikke en redirect — adressefeltet skal fortsatt
 * vise /nn/…, ellers finnes det ingen egen URL å indeksere, som var hele
 * grunnen til at nynorsk var usynlig for Google.
 */
function nynorskRewrite(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (pathname !== '/nn' && !pathname.startsWith('/nn/')) return null;

  const url = request.nextUrl.clone();
  url.pathname = pathname.slice('/nn'.length) || '/';

  const headers = new Headers(request.headers);
  headers.set('x-malform', 'nn');

  const res = NextResponse.rewrite(new URL(`${url.pathname}${search}`, request.url), {
    request: { headers },
  });
  // Samme innhold på to adresser skal ikke caches om hverandre.
  res.headers.set('Vary', 'x-malform');
  return res;
}

export async function middleware(request: NextRequest) {
  const nn = nynorskRewrite(request);
  if (nn) return nn;

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
    '/nn',
    '/nn/:path*',
    '/dashboard/:path*',
    '/profil/:path*',
    '/join/:path*',
    '/endre-passord/:path*',
  ],
};

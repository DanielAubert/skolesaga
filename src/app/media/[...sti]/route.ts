import { NextRequest, NextResponse } from 'next/server';

/**
 * Medie-proxy (17.9.2026): Supabase Storage svarer «cache-control: no-cache» på alle objekter uansett upload-innstilling,
 * så hvert bilde ble hentet på nytt ved hver sidevisning. Denne ruta henter fra Storage og svarer med lang cache
 * (Vercel-CDN + nettleser). Versjonsstempelet `?v=<bygg>` i mediaUrl() sørger for at byttede filer med samme navn hentes på nytt.
 */
export const dynamic = 'force-dynamic';

const BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media`
  : '';

export async function GET(req: NextRequest, ctx: { params: Promise<{ sti: string[] }> }) {
  const { sti } = await ctx.params;
  const rel = sti.map(encodeURIComponent).join('/');
  if (!BASE || !/^(images|audio)\//.test(sti.join('/')) || sti.some((s) => s === '..')) {
    return new NextResponse('Ikke funnet', { status: 404 });
  }
  // 22.9.2026: var `no-store` — da gikk HVER CDN-bom helt til Supabase. Med
  // force-cache serverer Next sitt eget datalager oppstrøms, så en bom koster
  // ett Supabase-treff i stedet for ett per forespørsel. Innholdet er
  // uforanderlig per versjonsmerke (se NEXT_PUBLIC_MEDIA_VERSION), så det er trygt.
  const opp = await fetch(`${BASE}/${rel}`, { cache: 'force-cache' });
  if (!opp.ok) return new NextResponse('Ikke funnet', { status: opp.status === 400 ? 404 : opp.status });
  const type = opp.headers.get('content-type') || 'application/octet-stream';
  const body = await opp.arrayBuffer();
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': type,
      'Content-Length': String(body.byteLength),
      'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
      'CDN-Cache-Control': 'public, s-maxage=31536000',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=31536000',
    },
  });
}

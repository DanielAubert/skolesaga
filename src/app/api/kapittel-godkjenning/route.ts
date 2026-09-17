import { NextRequest, NextResponse } from 'next/server';
import { erAdminSesjon, erGodkjent, lesGodkjenninger, lokalGodkjenningsmodus, skrivGodkjenning } from '@/lib/kapittel-godkjenning';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const chapterId = req.nextUrl.searchParams.get('chapterId');
  const alle = lesGodkjenninger().kapitler;
  const erAdmin = await erAdminSesjon();
  if (!chapterId) return NextResponse.json({ kanGodkjenne: lokalGodkjenningsmodus(), erAdmin, kapitler: alle });
  return NextResponse.json({ chapterId, godkjent: erGodkjent(chapterId), detaljer: alle[chapterId] ?? null, kanGodkjenne: lokalGodkjenningsmodus(), erAdmin });
}

export async function POST(req: NextRequest) {
  if (!lokalGodkjenningsmodus()) return NextResponse.json({ error: 'Godkjenning kan bare settes på den lokale vurderingsserveren.' }, { status: 403 });
  const body = (await req.json().catch(() => null)) as { chapterId?: string; godkjent?: boolean; merknad?: string } | null;
  if (!body?.chapterId || typeof body.godkjent !== 'boolean') return NextResponse.json({ error: 'chapterId og godkjent (bool) kreves' }, { status: 400 });
  const d = skrivGodkjenning(body.chapterId, {
    godkjent: body.godkjent,
    dato: new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Oslo' }).slice(0, 16),   // norsk tid, «2026-09-17 15:59»
    av: 'Daniel',
    ...(body.merknad ? { merknad: body.merknad } : {}),
  });
  return NextResponse.json({ ok: true, chapterId: body.chapterId, detaljer: d.kapitler[body.chapterId] });
}

/**
 * Refusjonsflyt for KI-sensor-vurderinger.
 *
 * POST  (student): be om refusjon på en vurdering — { vurderingId, begrunnelse }.
 *        Identifisert med vurderings-id (uuid, ugjettbar) + ev. innlogget bruker;
 *        er vurderingen knyttet til en bruker, må samme bruker være innlogget.
 * GET   (admin): list refusjonsforespørsler.
 * PATCH (admin): avgjør — { id, avgjorelse: 'godkjent'|'avvist', svar? }.
 *        Godkjent = klippene skal tilbakeføres (stubb til betalingsløsningen
 *        finnes; frem til da er statusen selve kvitteringen).
 *
 * Følger samme flagg som hoved-ruta (AI_SENSOR_ENABLED).
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const MAX_BEGRUNNELSE = 2000;

export async function POST(req: NextRequest) {
  if (process.env.AI_SENSOR_ENABLED !== 'true') {
    return NextResponse.json({ error: 'AI-sensor er ikke aktivert.' }, { status: 403 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Tjenesten er ikke konfigurert.' }, { status: 503 });
  }

  let body: { vurderingId?: string; begrunnelse?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 });
  }
  const vurderingId = (body.vurderingId ?? '').trim();
  const begrunnelse = (body.begrunnelse ?? '').trim();
  if (!/^[0-9a-f-]{36}$/i.test(vurderingId)) {
    return NextResponse.json({ error: 'Ugyldig vurderings-id.' }, { status: 400 });
  }
  if (begrunnelse.length < 10) {
    return NextResponse.json(
      { error: 'Skriv en kort begrunnelse (minst én setning) — den hjelper oss å forbedre sensoren.' },
      { status: 400 }
    );
  }

  const { data: row } = await supabase
    .from('ai_sensor_vurderinger')
    .select('id, user_id, refusjon_status')
    .eq('id', vurderingId)
    .single();
  if (!row) {
    return NextResponse.json({ error: 'Fant ikke vurderingen.' }, { status: 404 });
  }
  if (row.refusjon_status !== 'ingen') {
    return NextResponse.json(
      { error: 'Det er allerede sendt inn en refusjonsforespørsel for denne vurderingen.' },
      { status: 409 }
    );
  }
  // Er vurderingen knyttet til en konto, må samme konto be om refusjonen.
  if (row.user_id) {
    const session = await getServerSession(authOptions).catch(() => null);
    if (!session?.user?.id || session.user.id !== row.user_id) {
      return NextResponse.json({ error: 'Du må være innlogget som eieren av vurderingen.' }, { status: 401 });
    }
  }

  const { error } = await supabase
    .from('ai_sensor_vurderinger')
    .update({
      refusjon_status: 'forespurt',
      refusjon_begrunnelse: begrunnelse.slice(0, MAX_BEGRUNNELSE),
    })
    .eq('id', vurderingId);
  if (error) {
    console.error('Refusjonsforespørsel feilet', error);
    return NextResponse.json({ error: 'Kunne ikke sende forespørselen — prøv igjen.' }, { status: 500 });
  }
  return NextResponse.json({ ok: true, status: 'forespurt' });
}

// GET - refusjonsforespørsler (kun admin)
export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Ikke innlogget' }, { status: 401 });
  }
  if (session.user.role !== 'admin') {
    return NextResponse.json({ message: 'Kun admin har tilgang' }, { status: 403 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ message: 'Tjenesten er ikke konfigurert.' }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'forespurt';
  let query = supabase
    .from('ai_sensor_vurderinger')
    .select(
      'id, user_id, course_id, chapter_id, exercise_id, tier, model, question, answer, karakter_bokstav, verdict, klipp_kostnad, refusjon_status, refusjon_begrunnelse, refusjon_svar, created_at'
    )
    .order('created_at', { ascending: false })
    .limit(200);
  query = status === 'alle' ? query.neq('refusjon_status', 'ingen') : query.eq('refusjon_status', status);

  const { data, error } = await query;
  if (error) {
    console.error('Henting av refusjoner feilet', error);
    return NextResponse.json({ message: 'Kunne ikke hente forespørsler.' }, { status: 500 });
  }
  return NextResponse.json({ forespørsler: data ?? [] });
}

// PATCH - avgjør refusjon (kun admin)
export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Ikke innlogget' }, { status: 401 });
  }
  if (session.user.role !== 'admin') {
    return NextResponse.json({ message: 'Kun admin har tilgang' }, { status: 403 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ message: 'Tjenesten er ikke konfigurert.' }, { status: 503 });
  }

  let body: { id?: string; avgjorelse?: string; svar?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Ugyldig forespørsel.' }, { status: 400 });
  }
  const { id, avgjorelse } = body;
  if (!id || !['godkjent', 'avvist'].includes(avgjorelse ?? '')) {
    return NextResponse.json({ message: 'Mangler id eller gyldig avgjørelse.' }, { status: 400 });
  }

  // STUBB: ved 'godkjent' skal klipp_kostnad tilbakeføres brukerens saldo når
  // betalingsløsningen er koblet på (user_credits). Frem til da er status kvittering.
  const { error } = await supabase
    .from('ai_sensor_vurderinger')
    .update({
      refusjon_status: avgjorelse,
      refusjon_svar: (body.svar ?? '').slice(0, MAX_BEGRUNNELSE) || null,
    })
    .eq('id', id)
    .eq('refusjon_status', 'forespurt');
  if (error) {
    console.error('Avgjørelse feilet', error);
    return NextResponse.json({ message: 'Kunne ikke oppdatere.' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

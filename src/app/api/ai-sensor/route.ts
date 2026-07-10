/**
 * AI-sensor: vurder en studentbesvarelse med KI (ett knappetrykk).
 *
 * SKJULT BAK FEATURE-FLAGG: settes AI_SENSOR_ENABLED=true (server) og
 * NEXT_PUBLIC_AI_SENSOR_ENABLED=true (klient-synlighet) for å aktivere.
 * Begge er AV som standard — funksjonen er IKKE ute på siden.
 *
 * To nivåer (se src/lib/ai-sensor/tiers.ts):
 *  1 «Karakter + hvorfor» (Sonnet, 1 klipp) — standard OG gratis-smaken.
 *  2 «Ditt avsnitt til A» (Opus, 3 klipp) — premium.
 * Ingen synlig Haiku-tier (panel-testet: tynt gratisnivå skader tilliten);
 * AI_SENSOR_MODEL_OVERRIDE finnes som skjult kostnads-nødbrems.
 *
 * Vurderinger LAGRES i ai_sensor_vurderinger (delt Supabase, RLS på, kun
 * service-nøkkel) — gir historikk og refusjonsflyt (/api/ai-sensor/refusjon).
 *
 * Betaling per klipp: kredittsjekken er et bevisst stubb-punkt (checkCredits) —
 * kobles til betalingsløsningen før lansering.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { createClient } from '@supabase/supabase-js';
import { buildSensorContext, buildSensorPrompt } from '@/lib/ai-sensor/context';
import { getTier } from '@/lib/ai-sensor/tiers';

const MAX_ANSWER_CHARS = 12_000;

// Enkel i-minne rate-limit (per prosess): maks N vurderinger per IP per minutt.
const RATE_LIMIT_PER_MIN = 6;
const hits = new Map<string, { count: number; resetAt: number }>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now > h.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  h.count += 1;
  return h.count > RATE_LIMIT_PER_MIN;
}

// STUBB: betaling per klipp. Koble til betalings-/kredittløsning før lansering.
// Skal da trekke `klipp` fra brukerens saldo (gratis: 3 vurderinger totalt).
async function checkCredits(_userKey: string, _klipp: number): Promise<boolean> {
  return true;
}

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export interface SensorVerdict {
  karakterBokstav: string;
  karakter: string;
  kortDom: string;
  styrker: string[];
  mangler: string[];
  forbedring: string;
  // Kun tier 2:
  rubrikk?: string[];
  omskriving?: string;
  nesteOvelse?: string;
}

function parseVerdict(text: string): SensorVerdict | null {
  // Modellen bes svare med ren JSON; tål ev. omkringliggende tekst.
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    const obj = JSON.parse(text.slice(start, end + 1));
    if (typeof obj.karakter !== 'string' || typeof obj.kortDom !== 'string') return null;
    // karakterBokstav: nøyaktig én bokstav A-F; utled fra karakter ved behov.
    let bokstav = String(obj.karakterBokstav ?? '').trim().toUpperCase();
    if (!/^[A-F]$/.test(bokstav)) {
      const m = String(obj.karakter).toUpperCase().match(/\b([A-F])\b/);
      bokstav = m ? m[1] : '';
    }
    return {
      karakterBokstav: bokstav,
      karakter: obj.karakter,
      kortDom: obj.kortDom,
      styrker: Array.isArray(obj.styrker) ? obj.styrker.map(String) : [],
      mangler: Array.isArray(obj.mangler) ? obj.mangler.map(String) : [],
      forbedring: typeof obj.forbedring === 'string' ? obj.forbedring : '',
      rubrikk: Array.isArray(obj.rubrikk) ? obj.rubrikk.map(String) : undefined,
      omskriving: typeof obj.omskriving === 'string' ? obj.omskriving : undefined,
      nesteOvelse: typeof obj.nesteOvelse === 'string' ? obj.nesteOvelse : undefined,
    };
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  if (process.env.AI_SENSOR_ENABLED !== 'true') {
    return NextResponse.json({ error: 'AI-sensor er ikke aktivert.' }, { status: 403 });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Tjenesten er ikke konfigurert.' }, { status: 503 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'ukjent';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'For mange vurderinger på kort tid — prøv igjen om litt.' },
      { status: 429 }
    );
  }

  let body: {
    courseId?: string;
    chapterId?: string;
    exerciseId?: string;
    question?: string;
    answer?: string;
    tier?: number;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 });
  }

  const { courseId, chapterId, exerciseId, question, answer } = body;
  const tier = getTier(body.tier);
  if (!courseId || !chapterId || (!exerciseId && !question)) {
    return NextResponse.json({ error: 'Mangler courseId/chapterId/oppgave.' }, { status: 400 });
  }
  const trimmed = (answer ?? '').trim();
  if (trimmed.length < 20) {
    return NextResponse.json(
      { error: 'Skriv et litt lengre svar før du ber om vurdering (minst noen setninger).' },
      { status: 400 }
    );
  }
  if (trimmed.length > MAX_ANSWER_CHARS) {
    return NextResponse.json(
      { error: `Svaret er for langt (maks ${MAX_ANSWER_CHARS} tegn).` },
      { status: 400 }
    );
  }

  if (!(await checkCredits(ip, tier.klipp))) {
    return NextResponse.json({ error: 'Ingen KI-klipp igjen.' }, { status: 402 });
  }

  const ctx = buildSensorContext({ courseId, chapterId, exerciseId, questionOverride: question });
  if (!ctx) {
    return NextResponse.json({ error: 'Fant ikke kurs/kapittel/oppgave.' }, { status: 404 });
  }

  const { system, user } = buildSensorPrompt(ctx, trimmed, tier.id);

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: tier.model,
        max_tokens: tier.maxOutputTokens,
        system,
        messages: [{ role: 'user', content: user }],
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('AI-sensor API-feil', res.status, detail.slice(0, 300));
      return NextResponse.json(
        { error: 'Vurderingen feilet — prøv igjen om litt.' },
        { status: 502 }
      );
    }
    const data = await res.json();
    const text: string =
      data?.content?.map((b: { type: string; text?: string }) => b.text ?? '').join('') ?? '';
    const verdict = parseVerdict(text);
    if (!verdict) {
      // Fall tilbake til råtekst hvis JSON-parsing feiler — bedre enn ingenting.
      return NextResponse.json({ raw: text.slice(0, 4000) });
    }

    // Lagre vurderingen (best effort — svaret til studenten skal ikke feile på lagring).
    let vurderingId: string | null = null;
    try {
      const supabase = getSupabaseAdmin();
      if (supabase) {
        const session = await getServerSession(authOptions).catch(() => null);
        const { data: row } = await supabase
          .from('ai_sensor_vurderinger')
          .insert({
            user_id: session?.user?.id ?? null,
            course_id: courseId,
            chapter_id: chapterId,
            exercise_id: exerciseId ?? null,
            tier: tier.id,
            model: tier.model,
            question: (ctx.question || '').slice(0, 4000),
            answer: trimmed,
            karakter_bokstav: verdict.karakterBokstav,
            verdict,
            klipp_kostnad: tier.klipp,
          })
          .select('id')
          .single();
        vurderingId = row?.id ?? null;
      }
    } catch (e) {
      console.error('AI-sensor lagringsfeil (ignorert)', e);
    }

    return NextResponse.json({ verdict, vurderingId, tier: tier.id });
  } catch (e) {
    console.error('AI-sensor nettverksfeil', e);
    return NextResponse.json({ error: 'Vurderingen feilet — prøv igjen om litt.' }, { status: 502 });
  }
}

/**
 * AI-sensor: vurder en studentbesvarelse med KI (ett knappetrykk).
 *
 * SKJULT BAK FEATURE-FLAGG: settes AI_SENSOR_ENABLED=true (server) og
 * NEXT_PUBLIC_AI_SENSOR_ENABLED=true (klient-synlighet) for å aktivere.
 * Begge er AV som standard — funksjonen er IKKE ute på siden.
 *
 * Modell: billigst fornuftige — Claude Haiku 4.5 (~0,05–0,15 kr/vurdering
 * med dette token-budsjettet). Overstyr med AI_SENSOR_MODEL ved behov.
 *
 * Betaling per trykk: kredittsjekken er et bevisst stubb-punkt (se
 * `checkCredits`) — kobles til betalingsløsningen før lansering.
 */

import { NextRequest, NextResponse } from 'next/server';
import { buildSensorContext, buildSensorPrompt } from '@/lib/ai-sensor/context';

const MODEL = process.env.AI_SENSOR_MODEL || 'claude-haiku-4-5-20251001';
const MAX_ANSWER_CHARS = 12_000;
const MAX_OUTPUT_TOKENS = 900;

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

// STUBB: betaling per trykk. Koble til betalings-/kredittløsning før lansering.
// Returner false for å avvise (402). Nå: alltid tillatt (flagget er uansett av).
async function checkCredits(_userKey: string): Promise<boolean> {
  return true;
}

export interface SensorVerdict {
  karakter: string;
  kortDom: string;
  styrker: string[];
  mangler: string[];
  forbedring: string;
}

function parseVerdict(text: string): SensorVerdict | null {
  // Modellen bes svare med ren JSON; tål ev. omkringliggende tekst.
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    const obj = JSON.parse(text.slice(start, end + 1));
    if (typeof obj.karakter !== 'string' || typeof obj.kortDom !== 'string') return null;
    return {
      karakter: obj.karakter,
      kortDom: obj.kortDom,
      styrker: Array.isArray(obj.styrker) ? obj.styrker.map(String) : [],
      mangler: Array.isArray(obj.mangler) ? obj.mangler.map(String) : [],
      forbedring: typeof obj.forbedring === 'string' ? obj.forbedring : '',
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
  if (!(await checkCredits(ip))) {
    return NextResponse.json({ error: 'Ingen KI-kreditter igjen.' }, { status: 402 });
  }

  let body: {
    courseId?: string;
    chapterId?: string;
    exerciseId?: string;
    question?: string;
    answer?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 });
  }

  const { courseId, chapterId, exerciseId, question, answer } = body;
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

  const ctx = buildSensorContext({ courseId, chapterId, exerciseId, questionOverride: question });
  if (!ctx) {
    return NextResponse.json({ error: 'Fant ikke kurs/kapittel/oppgave.' }, { status: 404 });
  }

  const { system, user } = buildSensorPrompt(ctx, trimmed);

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_OUTPUT_TOKENS,
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
    return NextResponse.json({ verdict });
  } catch (e) {
    console.error('AI-sensor nettverksfeil', e);
    return NextResponse.json({ error: 'Vurderingen feilet — prøv igjen om litt.' }, { status: 502 });
  }
}

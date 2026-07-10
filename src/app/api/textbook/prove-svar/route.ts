/**
 * Prøve-besvarelser: kontosynk for innloggede brukere.
 *
 * Svarfeltet på prøvene lagres alltid lokalt (localStorage); er brukeren
 * innlogget, synkes teksten også hit slik at den følger kontoen på tvers av
 * enheter (studentpanel-krav: «besvarelsen må følge kontoen, ikke enheten»).
 *
 * Gjenbruker textbook_submissions (exercise_id = 'prove:<prøvetittel>',
 * answer = { text }) — ingen skjemaendring.
 */

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const MAX_TEXT = 20_000;

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Ikke innlogget' }, { status: 401 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ message: 'Ikke konfigurert' }, { status: 503 });
  }
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get('courseId');
  const chapterId = searchParams.get('chapterId');
  const prove = searchParams.get('prove');
  if (!courseId || !chapterId || !prove) {
    return NextResponse.json({ message: 'Mangler parametre' }, { status: 400 });
  }
  const { data } = await supabase
    .from('textbook_submissions')
    .select('answer, created_at')
    .eq('user_id', session.user.id)
    .eq('course_id', courseId)
    .eq('chapter_id', chapterId)
    .eq('exercise_id', `prove:${prove}`.slice(0, 200))
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  const text =
    data && typeof (data.answer as { text?: unknown })?.text === 'string'
      ? ((data.answer as { text: string }).text as string)
      : '';
  return NextResponse.json({ text });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Ikke innlogget' }, { status: 401 });
  }
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ message: 'Ikke konfigurert' }, { status: 503 });
  }
  let body: { courseId?: string; chapterId?: string; prove?: string; text?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Ugyldig forespørsel' }, { status: 400 });
  }
  const { courseId, chapterId, prove } = body;
  const text = (body.text ?? '').slice(0, MAX_TEXT);
  if (!courseId || !chapterId || !prove) {
    return NextResponse.json({ message: 'Mangler parametre' }, { status: 400 });
  }
  const exerciseId = `prove:${prove}`.slice(0, 200);

  // Én rad per (bruker, prøve): oppdater hvis den finnes, ellers sett inn.
  const { data: eksisterende } = await supabase
    .from('textbook_submissions')
    .select('id')
    .eq('user_id', session.user.id)
    .eq('course_id', courseId)
    .eq('chapter_id', chapterId)
    .eq('exercise_id', exerciseId)
    .limit(1)
    .maybeSingle();

  if (eksisterende?.id) {
    const { error } = await supabase
      .from('textbook_submissions')
      .update({ answer: { text } })
      .eq('id', eksisterende.id);
    if (error) return NextResponse.json({ message: 'Lagring feilet' }, { status: 500 });
  } else {
    const { error } = await supabase.from('textbook_submissions').insert({
      user_id: session.user.id,
      course_id: courseId,
      chapter_id: chapterId,
      exercise_id: exerciseId,
      answer: { text },
    });
    if (error) return NextResponse.json({ message: 'Lagring feilet' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

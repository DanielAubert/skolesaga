import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { getCourse, getChapterMeta } from '@/lib/data/textbook-courses';
import { getChapterContentLocalized } from '@/lib/data/textbook-content';
import { SmeReview, type SpellFlag, type GrammarNote } from '@/components/textbook/sme-review';

export const metadata = { title: 'Nordsamisk review' };

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

// Åpen review-side (ingen innlogging) – ment for å vise/dele nordsamisk-utkast
// med revisorer. Innrapportering går til Supabase (anon insert).
export default async function SmeReviewPage({ params }: PageProps) {
  const { courseId, chapterId } = await params;
  const course = getCourse(courseId);
  const sme = await getChapterContentLocalized(chapterId, 'sme');
  const nb = await getChapterContentLocalized(chapterId, 'nb');

  if (!course || !sme) {
    notFound();
  }

  const meta = getChapterMeta(courseId, chapterId);

  // Automatisk språksjekk (Divvun-stavekontroll), forhåndskjørt offline av
  // scripts/sme-validate.mjs og lagret som <id>.flags.json.
  let flags: SpellFlag[] = [];
  let grammar: GrammarNote[] = [];
  try {
    const p = path.join(process.cwd(), 'src', 'lib', 'data', 'chapters', 'sme', `${chapterId}.flags.json`);
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    flags = (data.flagged ?? []) as SpellFlag[];
    grammar = (data.grammar ?? []) as GrammarNote[];
  } catch {
    // ingen flags-fil for dette kapittelet ennå
  }

  return (
    <SmeReview
      courseId={courseId}
      chapterId={chapterId}
      courseTitle={course.title}
      chapterTitle={meta?.title ?? chapterId}
      sme={sme}
      nb={nb}
      flags={flags}
      grammar={grammar}
    />
  );
}

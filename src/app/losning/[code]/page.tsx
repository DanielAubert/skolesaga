import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowLeft, Lightbulb, Lock } from 'lucide-react';
import losningIndexJson from '@/lib/data/losning-index.json';
import { getChapterContent } from '@/lib/data/textbook-content';
import { getCourse, getChapterMeta } from '@/lib/data/textbook-courses';
import { LatexRenderer } from '@/components/textbook/latex-renderer';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { BreadcrumbHomeLink } from '@/components/book/breadcrumb-home-link';
import type { TextbookContentBlock } from '@/lib/types/textbook';

/**
 * Enkeltløsningsside: /losning/<kode>. Hver oppgave og hver prøve-/øvings-
 * eksamen-fasit har en kort, stabil kode (src/lib/data/losning-index.json,
 * generert av scripts/hoyskolebok/gen-losning-index.mjs). Den trykte PDF-en
 * viser bare oppgaven + en QR/URL hit — løsningen bor her, slik at PDF-en
 * holdes kompakt. Respekterer fasit-muren (NEXT_PUBLIC_FASIT_MUR_ENABLED).
 */

interface Entry {
  courseId: string;
  chapterId: string;
  targetId: string;
  kind: 'exercise' | 'losning';
}
const INDEX = losningIndexJson as Record<string, Entry>;

// Trygg tilgang til felter som bare finnes på enkelte blokkvarianter.
function childBlocks(b: TextbookContentBlock): TextbookContentBlock[] | null {
  const c = (b as { content?: unknown }).content;
  return Array.isArray(c) ? (c as TextbookContentBlock[]) : null;
}
function strField(b: TextbookContentBlock, key: string): string | null {
  const v = (b as Record<string, unknown>)[key];
  return typeof v === 'string' ? v : null;
}

// Finn en exercise- eller collapsible-blokk (også nøstet) ved id.
function findById(blocks: TextbookContentBlock[], id: string): TextbookContentBlock | null {
  for (const b of blocks) {
    if (b.type === 'exercise' && b.exercise?.id === id) return b;
    if (b.type === 'collapsible' && b.id === id) return b;
    const kids = childBlocks(b);
    if (kids) {
      const found = findById(kids, id);
      if (found) return found;
    }
  }
  return null;
}

interface PageProps {
  params: Promise<{ code: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const entry = INDEX[code];
  if (!entry) return { title: 'Løsningsforslag ikke funnet' };
  const course = getCourse(entry.courseId);
  return {
    title: `Løsningsforslag — ${course?.title ?? entry.courseId} | Skolesaga`,
    robots: { index: false }, // enkeltløsninger skal ikke indekseres
  };
}

function BlokkTekst({ block }: { block: TextbookContentBlock }) {
  const t = block.type;
  const title = strField(block, 'title');
  const content = strField(block, 'content');
  if (t === 'text' && content) {
    return <div className="prose-sm"><LatexRenderer content={content} /></div>;
  }
  if ((t === 'definition' || t === 'theorem' || t === 'tip' || t === 'warning') && content) {
    return (
      <div className="my-3 rounded-md border-l-4 border-primary/40 bg-muted/40 px-3 py-2">
        {title && <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>}
        <LatexRenderer content={content} />
      </div>
    );
  }
  if (t === 'example') {
    const problem = strField(block, 'problem');
    const solution = strField(block, 'solution');
    return (
      <div className="my-3 rounded-md border bg-card px-3 py-2">
        {title && <p className="text-sm font-medium">{title}</p>}
        {problem && <LatexRenderer content={problem} />}
        {solution && <div className="mt-2 border-t pt-2"><LatexRenderer content={solution} /></div>}
      </div>
    );
  }
  const kids = childBlocks(block);
  if (kids) {
    return <>{kids.map((c, i) => <BlokkTekst key={i} block={c} />)}</>;
  }
  return null;
}

export default async function LosningPage({ params }: PageProps) {
  const { code } = await params;
  const entry = INDEX[code];
  if (!entry) notFound();

  const chapter = getChapterContent(entry.chapterId);
  const course = getCourse(entry.courseId);
  if (!chapter || !course) notFound();
  const target = findById(chapter.content, entry.targetId);
  if (!target) notFound();

  const chapterMeta = getChapterMeta(entry.courseId, entry.chapterId);
  const chapterLabel = chapterMeta ? `${chapterMeta.number} ${chapterMeta.title}` : chapter.title;
  const fasitMur = process.env.NEXT_PUBLIC_FASIT_MUR_ENABLED === 'true';

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <BreadcrumbHomeLink className="hover:text-foreground" />
            <ChevronRight className="h-4 w-4" />
            <Link href={`/bok/${entry.courseId}`} className="hover:text-foreground">{course.title}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Løsningsforslag</span>
          </nav>

          <h1 className="mb-1 text-2xl font-bold">Løsningsforslag</h1>
          <p className="mb-6 text-sm text-muted-foreground">
            {course.title} · <Link href={`/bok/${entry.courseId}/${entry.chapterId}`} className="underline hover:text-foreground">{chapterLabel}</Link>
          </p>

          {fasitMur ? (
            <div className="rounded-lg border bg-muted/40 px-5 py-8 text-center">
              <Lock className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
              <p className="font-medium">Løsningsforslaget er en del av premium-innholdet.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Lås opp fasit og løsningsforslag for å se hele utregningen.
              </p>
              <Link href="/priser" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Se abonnement
              </Link>
            </div>
          ) : (
            <article className="rounded-lg border bg-card p-5">
              {target.type === 'exercise' && target.exercise && (
                <>
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Oppgave {target.exercise.number ?? ''}
                      {target.exercise.difficulty ? ` · ${target.exercise.difficulty}` : ''}
                    </p>
                    <LatexRenderer content={target.exercise.task} />
                  </div>
                  {Array.isArray(target.exercise.hints) && target.exercise.hints.length > 0 && (
                    <details className="mb-3 rounded-md bg-muted/40 px-3 py-2">
                      <summary className="cursor-pointer text-sm font-medium">
                        <Lightbulb className="mr-1 inline h-4 w-4 text-amber-500" /> Hint
                      </summary>
                      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
                        {target.exercise.hints.map((h, i) => <li key={i}><LatexRenderer content={h} inline /></li>)}
                      </ol>
                    </details>
                  )}
                  <div className="border-t pt-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Løsningsforslag</p>
                    <LatexRenderer content={target.exercise.solution ?? ''} />
                  </div>
                </>
              )}
              {target.type === 'collapsible' && (
                <>
                  {strField(target, 'title') && <p className="mb-2 text-sm font-semibold">{strField(target, 'title')}</p>}
                  {(childBlocks(target) ?? []).map((c, i) => <BlokkTekst key={i} block={c} />)}
                </>
              )}
            </article>
          )}

          <p className="mt-6 text-xs text-muted-foreground">
            Innholdet er skrevet av Anthropics toppmodeller (Claude Opus og Claude Fable) og kvalitetskontrollert av uavhengige KI-agenter — se{' '}
            <Link href="/vilkar" className="underline hover:text-foreground">KI-deklarasjonen</Link>. Løsningsforslaget er nyskrevet, ikke en offisiell sensorveiledning.
          </p>

          <Link href={`/bok/${entry.courseId}/${entry.chapterId}`} className="mt-6 inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted">
            <ArrowLeft className="h-4 w-4" /> Til kapitlet
          </Link>
        </div>
      </div>
    </div>
  );
}

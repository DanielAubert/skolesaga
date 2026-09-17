import Link from 'next/link';
import { Lock } from 'lucide-react';
import { ContentBlockRenderer } from './content-block-renderer';
import { VarsleMeg } from './varsle-meg';
import { AAPNINGSPLAN } from '@/lib/kapittel-godkjenning';
import type { TextbookChapter, TextbookChapterMeta, TextbookCourse } from '@/lib/types/textbook';

/** Smakebitside for et sperret kapittel (Daniel 17.9.2026): beskrivelse, kompetansemål, nøkkelbegreper og første eksempel. */
export function KapittelSmakebit({ course, chapterMeta, chapterContent }: { course: TextbookCourse; chapterMeta: TextbookChapterMeta; chapterContent?: TextbookChapter }) {
  const blokker = chapterContent?.content ?? [];
  const forsteEksempel = blokker.find((b) => b.type === 'example');
  const maal = (chapterContent as { competenceGoals?: string[] } | undefined)?.competenceGoals ?? [];
  const begreper = ((chapterContent as { keyTerms?: { term: string; definition: string }[] } | undefined)?.keyTerms ?? []).slice(0, 8);
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <p className="text-sm text-muted-foreground mb-1"><Link href={`/${course.id}`} className="underline">{course.title}</Link> · kapittel {chapterMeta.number}</p>
      <h1 className="text-3xl font-bold mb-3">{chapterMeta.title}</h1>
      <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-950/30 px-4 py-3 text-sm">
        <Lock className="h-5 w-5 mt-0.5 shrink-0 text-amber-600" />
        <div>
          <p className="font-medium">Dette kapittelet er ikke åpnet ennå.</p>
          <p className="text-muted-foreground">{AAPNINGSPLAN} Her ser du hva kapittelet dekker, og det første eksempelet.</p>
        </div>
      </div>
      {chapterMeta.description && <p className="text-lg mb-6">{chapterMeta.description}</p>}
      {maal.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Kompetansemål kapittelet dekker</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">{maal.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </section>
      )}
      {begreper.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Nøkkelbegreper</h2>
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {begreper.map((b) => (<div key={b.term}><dt className="font-medium">{b.term}</dt><dd className="text-muted-foreground">{b.definition}</dd></div>))}
          </dl>
        </section>
      )}
      {forsteEksempel && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Smakebit: første eksempel</h2>
          <ContentBlockRenderer block={forsteEksempel} chapterId={chapterMeta.id} courseId={course.id} />
        </section>
      )}
      <section className="rounded-lg border px-4 py-4">
        <h2 className="text-base font-semibold mb-1">Vil du lese hele kapittelet?</h2>
        <p className="text-sm text-muted-foreground mb-2">Legg igjen e-posten din, så får du beskjed når hele boka er åpen.</p>
        <VarsleMeg courseId={course.id} courseTitle={course.title} />
      </section>
      <p className="mt-6 text-sm"><Link href={`/${course.id}`} className="underline">Tilbake til innholdsfortegnelsen</Link></p>
    </main>
  );
}

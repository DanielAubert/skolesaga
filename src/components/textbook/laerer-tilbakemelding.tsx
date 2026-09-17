import { FeedbackDialog } from './feedback-dialog';

/** Tydelig tilbakemeldingsboks i kapitlene i de nye bøkene (Daniel 17.9.2026: «Fant du en feil, eller savner du noe?»). */
export function LaererTilbakemelding({ courseId, chapterId, chapterTitle }: { courseId: string; chapterId: string; chapterTitle: string }) {
  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="flex flex-wrap items-center gap-3 rounded-lg border px-4 py-2 text-sm bg-muted/40">
        <span className="font-medium">Fant du en feil, eller savner du noe i dette kapittelet?</span>
        <span className="text-muted-foreground">Alt leses, og feil rettes fortløpende.</span>
        <div className="ml-auto"><FeedbackDialog courseId={courseId} chapterId={chapterId} chapterTitle={chapterTitle} /></div>
      </div>
    </div>
  );
}

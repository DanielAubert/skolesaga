import { BookOpen } from 'lucide-react';
import { VarsleMeg } from './varsle-meg';
import { AAPNINGSPLAN } from '@/lib/kapittel-godkjenning';

/** Lærerinngang øverst på bokas forside (Daniel 17.9.2026: boka vises fram for matematikklærere kapittel for kapittel). */
export function LaererInngang({ courseId, courseTitle, aapne, totalt, fagkode }: { courseId: string; courseTitle: string; aapne: number; totalt: number; fagkode?: string }) {
  return (
    <section className="mb-8 rounded-lg border px-5 py-4 bg-muted/40">
      <div className="flex items-start gap-3">
        <BookOpen className="h-5 w-5 mt-1 shrink-0 text-primary" />
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold">Til deg som skal undervise i {courseTitle}{fagkode ? ` (${fagkode})` : ''}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Dette er en komplett lærebok etter den nye læreplanen: teori, gjennomregnede eksempler, oppgaver med løsning, figurer
            laget for hvert eksempel, og videoer til teori, eksempler og oppgaver. Hele innholdsfortegnelsen står under, så du ser
            hva som skal gjennomgås. {AAPNINGSPLAN}
          </p>
          <p className="text-sm mt-2"><span className="font-medium">{aapne} av {totalt} kapitler er kvalitetssikret så langt.</span> Alle kapitlene er åpne for lesing.</p>
          <p className="text-sm mt-2 text-muted-foreground">Fant du en feil, eller savner du noe? Hvert kapittel har en knapp for å melde fra, og alt leses.</p>
          <div className="mt-3"><VarsleMeg courseId={courseId} courseTitle={courseTitle} kompakt /></div>
        </div>
      </div>
    </section>
  );
}

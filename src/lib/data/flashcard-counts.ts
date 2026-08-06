/**
 * Antall flashcards per kurs — uten å laste kapittelinnholdet.
 *
 * ⚠ HVORFOR EGEN FIL: kursforsiden viste «Flashcards (N definisjoner)» ved å
 * kalle `getFlashcardDefinitionCount()` i `flashcard-definitions.ts`. Den
 * modulen importerer `textbook-content`, som leser `_all.json` — 215 MB
 * bokmålskatalog. Én badge dro altså hele katalogen inn i `/[courseId]`, som
 * havnet på 259,8 MB og sprakk Vercels 250 MB-grense.
 *
 * Her summeres i stedet en forhåndsberegnet telling per kapittel
 * (`_definition-counts.json`, ~0,1 MB, skrevet av `scripts/combine-chapters.js`)
 * over kursets egne kapitler i METADATAEN. Ingen kapittelinnhold lastes.
 *
 * ⚠ Importer ALDRI `flashcard-definitions` herfra — da er poenget borte.
 * Ruter som faktisk trenger selve definisjonene (`/[courseId]/flashcards`)
 * bruker den modulen direkte og bærer kostnaden bevisst.
 */
import definitionCounts from '@/lib/data/chapters/_definition-counts.json';
import { getCourse } from '@/lib/data/textbook-courses';

const counts = definitionCounts as Record<string, number>;

/**
 * Rask telling av definisjoner i et kurs (for badge-visning).
 *
 * Narrative versjoner hoppes over, slik `getFlashcardDefinitions()` gjør —
 * ellers telles hvert begrep to ganger.
 */
export function getFlashcardDefinitionCount(courseId: string): number {
  const course = getCourse(courseId);
  if (!course) return 0;

  let sum = 0;
  for (const chapterMeta of course.chapters) {
    if (chapterMeta.isNarrativeVersion) continue;
    sum += counts[chapterMeta.id] ?? 0;
  }
  return sum;
}

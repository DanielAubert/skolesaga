/**
 * Flashcard-definisjoner utvinnet fra lærebøkenes DefinitionBlock-innhold
 *
 * Traverserer alle kapitler i et kurs og samler definisjoner
 * som kan brukes som flashcards med spaced repetition.
 */

import { getCourse } from '@/lib/data/textbook-courses';
import { getChapterContent } from '@/lib/data/textbook-content';
import type { DefinitionBlock } from '@/lib/types/textbook';

export interface FlashcardDefinition {
  id: string;           // Unik ID basert på blokk-ID
  chapterId: string;
  chapterNumber: string;
  chapterTitle: string;
  sectionNumber: string; // F.eks. "3" fra "3.2"
  title: string;         // Begrep (forside)
  content: string;       // Forklaring (bakside)
}

/**
 * Henter alle definisjoner fra et kurs som flashcard-data.
 * Traverserer alle kapitler og filtrerer ut DefinitionBlock-er.
 */
export function getFlashcardDefinitions(courseId: string): FlashcardDefinition[] {
  const course = getCourse(courseId);
  if (!course) return [];

  const definitions: FlashcardDefinition[] = [];

  for (const chapterMeta of course.chapters) {
    // Hopp over narrative versjoner for å unngå duplikater
    if (chapterMeta.isNarrativeVersion) continue;

    const chapter = getChapterContent(chapterMeta.id);
    if (!chapter) continue;

    const sectionNumber = chapterMeta.number.split('.')[0];

    for (const block of chapter.content) {
      if (block.type === 'definition') {
        const defBlock = block as DefinitionBlock;
        definitions.push({
          id: defBlock.id,
          chapterId: chapterMeta.id,
          chapterNumber: chapterMeta.number,
          chapterTitle: chapterMeta.title,
          sectionNumber,
          title: defBlock.title,
          content: defBlock.content,
        });
      }
    }
  }

  return definitions;
}

/**
 * Rask telling av definisjoner i et kurs (for badge-visning).
 */
export function getFlashcardDefinitionCount(courseId: string): number {
  return getFlashcardDefinitions(courseId).length;
}

/**
 * Telling av definisjoner per seksjon i et kurs.
 * Returnerer en map fra seksjonsnummer til antall definisjoner.
 */
export function getFlashcardCountsBySection(courseId: string): Record<string, number> {
  const definitions = getFlashcardDefinitions(courseId);
  const counts: Record<string, number> = {};

  for (const def of definitions) {
    counts[def.sectionNumber] = (counts[def.sectionNumber] ?? 0) + 1;
  }

  return counts;
}

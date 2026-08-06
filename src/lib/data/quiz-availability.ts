/**
 * Finnes det quiz for et kapittel? — uten å laste quizlaget.
 *
 * ⚠ HVORFOR EGEN FIL: kapittelsiden viste «Ta quiz»-knappen ved å kalle
 * `hasQuizQuestions()` i `quiz-data.ts`. Den modulen samler alle 189
 * quizfilene — 24 MB — og drar i tillegg inn nynorskquizen på 8,7 MB. Én
 * boolsk sjekk kostet altså 33 MB, og `/[courseId]/[chapterId]` endte på
 * 260,7 MB, over Vercels 250 MB-grense.
 *
 * Her leses en forhåndsberegnet telling per kapittel (`_quiz-counts.json`,
 * ~0,12 MB, skrevet av `scripts/combine-chapters.js`).
 *
 * ⚠ Terskelen er den samme som i `hasQuizQuestions()`: minst 4 spørsmål.
 * Endres den ene, må den andre endres med.
 *
 * ⚠ Importer ALDRI `quiz-data` herfra. Ruter som faktisk skal VISE spørsmål
 * (`[chapterId]/quiz`) bruker den modulen direkte og bærer kostnaden bevisst.
 */
import quizCounts from '@/lib/data/chapters/_quiz-counts.json';

const counts = quizCounts as Record<string, number>;

export function hasQuizQuestions(chapterId: string): boolean {
  return (counts[chapterId] ?? 0) >= 4;
}

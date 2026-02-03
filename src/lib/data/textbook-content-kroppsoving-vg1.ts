/**
 * Kroppsøving VG1 - Aggregatorfil
 *
 * Samler alle kapitler fra delfiler for Kroppsøving VG1.
 * Dekker LK20 læreplan med 55 kapitler fordelt på 8 enheter.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer kapitler fra delfiler
import { KROPPSOVING_VG1_DEL1_CHAPTERS } from './textbook-content-kroppsoving-vg1-del1';
import { KROPPSOVING_VG1_DEL2_CHAPTERS } from './textbook-content-kroppsoving-vg1-del2';
import { KROPPSOVING_VG1_DEL3_CHAPTERS } from './textbook-content-kroppsoving-vg1-del3';
import { KROPPSOVING_VG1_DEL4_CHAPTERS } from './textbook-content-kroppsoving-vg1-del4';

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const KROPPSOVING_VG1_CHAPTERS: TextbookChapter[] = [
  ...KROPPSOVING_VG1_DEL1_CHAPTERS, // Kapittel 1.1-2.6: Trening og treningslære, Kropp og helse
  ...KROPPSOVING_VG1_DEL2_CHAPTERS, // Kapittel 3.1-4.7: Kosthold og restitusjon, Individuelle idretter
  ...KROPPSOVING_VG1_DEL3_CHAPTERS, // Kapittel 5.1-6.6: Lagidretter og samspill, Dans og bevegelsesaktiviteter
  ...KROPPSOVING_VG1_DEL4_CHAPTERS, // Kapittel 7.1-8.8: Friluftsliv og naturopplevelser, Helse, livsstil og samfunn
];

// Re-eksporter individuelle kapitler for bakoverkompatibilitet
export * from './textbook-content-kroppsoving-vg1-del1';
export * from './textbook-content-kroppsoving-vg1-del2';
export * from './textbook-content-kroppsoving-vg1-del3';
export * from './textbook-content-kroppsoving-vg1-del4';

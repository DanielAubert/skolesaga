/**
 * Naturbruk VG1 - Tekstbokinnhold (Aggregator)
 *
 * Samler alle kapitler fra del-filene.
 * Dekker LK20 læreplan for Naturbruk på VG1 (NAB01-03)
 *
 * Struktur:
 * - Kapittel 1: Økosystemer og naturmangfold (1.1-1.7) - kap1
 * - Kapittel 2: Skogbruk og trevirke (2.1-2.7) - kap2
 * - Kapittel 3: Landbruk og planteproduksjon (3.1-3.8) - del2
 * - Kapittel 4: Dyrehold og dyrevelferd (4.1-4.6) - del2
 * - Kapittel 5: Akvakultur og fiske (5.1-5.6) - del3
 * - Kapittel 6: Utmark og friluftsliv (6.1-6.7) - del3
 * - Kapittel 7: Maskiner og teknologi (7.1-7.6) - del4
 * - Kapittel 8: Bærekraft og miljø (8.1-8.8) - del4
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapittelgrupper fra del-filer
import { NATURBRUK_VG1_KAP1_CHAPTERS } from './textbook-content-naturbruk-vg1-kap1';
import { NATURBRUK_VG1_KAP2_CHAPTERS } from './textbook-content-naturbruk-vg1-kap2';
import { NATURBRUK_VG1_DEL2_CHAPTERS } from './textbook-content-naturbruk-vg1-del2';
import { NATURBRUK_VG1_DEL3_CHAPTERS } from './textbook-content-naturbruk-vg1-del3';
import { NATURBRUK_VG1_DEL4_CHAPTERS } from './textbook-content-naturbruk-vg1-del4';

// Eksporter alle kapitler som én samlet array
export const NATURBRUK_VG1_CHAPTERS: TextbookChapter[] = [
  ...NATURBRUK_VG1_KAP1_CHAPTERS, // Kap 1.1-1.7
  ...NATURBRUK_VG1_KAP2_CHAPTERS, // Kap 2.1-2.7
  ...NATURBRUK_VG1_DEL2_CHAPTERS, // Kap 3.1-3.8, 4.1-4.6
  ...NATURBRUK_VG1_DEL3_CHAPTERS, // Kap 5.1-5.6, 6.1-6.7
  ...NATURBRUK_VG1_DEL4_CHAPTERS, // Kap 7.1-7.6, 8.1-8.8
];

// Alias for bakoverkompatibilitet med textbook-content.ts
export const CHAPTERS_NATURBRUK_VG1 = NATURBRUK_VG1_CHAPTERS;

// Re-eksporter del-arrays for bakoverkompatibilitet
export { NATURBRUK_VG1_KAP1_CHAPTERS } from './textbook-content-naturbruk-vg1-kap1';
export { NATURBRUK_VG1_KAP2_CHAPTERS } from './textbook-content-naturbruk-vg1-kap2';
export { NATURBRUK_VG1_DEL2_CHAPTERS } from './textbook-content-naturbruk-vg1-del2';
export { NATURBRUK_VG1_DEL3_CHAPTERS } from './textbook-content-naturbruk-vg1-del3';
export { NATURBRUK_VG1_DEL4_CHAPTERS } from './textbook-content-naturbruk-vg1-del4';

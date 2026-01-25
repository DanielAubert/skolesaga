/**
 * Tekstbok kapittelinnhold - hovedfil
 *
 * Denne filen importerer og samler alle kapitler fra separate filer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Importer kapitler fra separate filer
import { CHAPTERS_1T } from './textbook-content-1t';
import { CHAPTERS_R1 } from './textbook-content-r1';
import { CHAPTERS_R2 } from './textbook-content-r2';
import { CHAPTERS_S1 } from './textbook-content-s1';
import { CHAPTERS_S2 } from './textbook-content-s2';
import { CHAPTERS_8KLASSE } from './textbook-content-8klasse';
import { CHAPTERS_9KLASSE } from './textbook-content-9klasse';
import { CHAPTERS_10KLASSE } from './textbook-content-10klasse';
import { CHAPTERS_NAT_VG1 } from './textbook-content-nat-vg1';
import { CHAPTERS_BI_OKONOMI } from './textbook-content-bi-okonomi';
import { NATURFAG_10_CHAPTERS } from './textbook-content-naturfag-10';
import { FYSIKK1_CHAPTERS } from './textbook-content-fysikk1';
import { FYSIKK2_CHAPTERS } from './textbook-content-fysikk2';
import { KJEMI1_CHAPTERS } from './textbook-content-kjemi1';
import { KJEMI2_CHAPTERS } from './textbook-content-kjemi2';
import { NORSK_8_CHAPTERS } from './textbook-content-norsk-8';
import { ENGELSK_8_CHAPTERS } from './textbook-content-engelsk-8';
import { NATURFAG_8_CHAPTERS } from './textbook-content-naturfag-8';
import { SAMFUNNSFAG_8_CHAPTERS } from './textbook-content-samfunnsfag-8';
import { KRLE_8_CHAPTERS } from './textbook-content-krle-8';
import { KUNST_8_CHAPTERS } from './textbook-content-kunst-8';
import { MUSIKK_8_CHAPTERS } from './textbook-content-musikk-8';
import { MAT_8_CHAPTERS } from './textbook-content-mat-og-helse-8';
import { KROPPSOVING_8_CHAPTERS } from './textbook-content-kroppsoving-8';
import { NORSK_9_CHAPTERS } from './textbook-content-norsk-9';
import { ENGELSK_9_CHAPTERS } from './textbook-content-engelsk-9';
import { SAMFUNNSFAG_9_CHAPTERS } from './textbook-content-samfunnsfag-9';
import { KRLE_9_CHAPTERS } from './textbook-content-krle-9';
import { NATURFAG_9_CHAPTERS } from './textbook-content-naturfag-9';
import { KUNST_9_CHAPTERS } from './textbook-content-kunst-9';
import { MUSIKK_9_CHAPTERS } from './textbook-content-musikk-9';
import { MAT_9_CHAPTERS } from './textbook-content-mat-og-helse-9';
import { KROPPSOVING_9_CHAPTERS } from './textbook-content-kroppsoving-9';
import { SPANSK_1_CHAPTERS } from './textbook-content-spansk-1';
import { TYSK_1_CHAPTERS } from './textbook-content-tysk-1';
import { FRANSK_1_CHAPTERS } from './textbook-content-fransk-1';
import { NORSK_10_CHAPTERS } from './textbook-content-norsk-10';
import { ENGELSK_10_CHAPTERS } from './textbook-content-engelsk-10';
import { SAMFUNNSFAG_10_CHAPTERS } from './textbook-content-samfunnsfag-10';
import { KRLE_10_CHAPTERS } from './textbook-content-krle-10';
import { KUNST_10_CHAPTERS } from './textbook-content-kunst-10';
import { MUSIKK_10_CHAPTERS } from './textbook-content-musikk-10';
import { MAT_10_CHAPTERS } from './textbook-content-mat-og-helse-10';
import { KROPPSOVING_10_CHAPTERS } from './textbook-content-kroppsoving-10';
import { NORSK_VG1_CHAPTERS } from './textbook-content-norsk-vg1';
import { ENGELSK_VG1_CHAPTERS } from './textbook-content-engelsk-vg1';
import { SAMFUNNSKUNNSKAP_CHAPTERS } from './textbook-content-samfunnskunnskap';
import { GEOGRAFI_CHAPTERS } from './textbook-content-geografi';
import { KROPPSOVING_VG1_CHAPTERS } from './textbook-content-kroppsoving-vg1';
import { NORSK_VG2_CHAPTERS } from './textbook-content-norsk-vg2';
import { HISTORIE_CHAPTERS } from './textbook-content-historie';
import { HISTORIE_NARRATIV_CHAPTERS } from './textbook-content-historie-narrativ';
import { KROPPSOVING_VG2_CHAPTERS } from './textbook-content-kroppsoving-vg2';
import { NORSK_VG3_CHAPTERS } from './textbook-content-norsk-vg3';
import { RELIGION_ETIKK_CHAPTERS } from './textbook-content-religion-etikk';
import { KROPPSOVING_VG3_CHAPTERS } from './textbook-content-kroppsoving-vg3';

// Valgfag VG1/VG2/VG3
import { IT_1_CHAPTERS } from './textbook-content-it-1';
import { IT_2_CHAPTERS } from './textbook-content-it-2';
import { BIOLOGI_1_CHAPTERS } from './textbook-content-biologi-1';
import { BIOLOGI_2_CHAPTERS } from './textbook-content-biologi-2';
import { PSYKOLOGI_1_CHAPTERS } from './textbook-content-psykologi-1';
import { PSYKOLOGI_2_CHAPTERS } from './textbook-content-psykologi-2';
import { GEOFAG_1_CHAPTERS } from './textbook-content-geofag-1';
import { GEOFAG_2_CHAPTERS } from './textbook-content-geofag-2';
import { TOF_1_CHAPTERS } from './textbook-content-tof-1';
import { TOF_2_CHAPTERS } from './textbook-content-tof-2';
import { SOSIOLOGI_CHAPTERS } from './textbook-content-sosiologi';
import { RETTSLAERE_1_CHAPTERS } from './textbook-content-rettslaere-1';
import { RETTSLAERE_2_CHAPTERS } from './textbook-content-rettslaere-2';
import { OKONOMISTYRING_CHAPTERS } from './textbook-content-okonomistyring';
import { MARKEDSFORING_CHAPTERS } from './textbook-content-markedsforing';
import { SPANSK_2_CHAPTERS } from './textbook-content-spansk-2';
import { SPANSK_3_CHAPTERS } from './textbook-content-spansk-3';
import { TYSK_2_CHAPTERS } from './textbook-content-tysk-2';
import { TYSK_3_CHAPTERS } from './textbook-content-tysk-3';
import { FRANSK_2_CHAPTERS } from './textbook-content-fransk-2';
import { FRANSK_3_CHAPTERS } from './textbook-content-fransk-3';
import { CHAPTERS_5KLASSE } from './textbook-content-5klasse';
import { CHAPTERS_6KLASSE } from './textbook-content-6klasse';
import { CHAPTERS_7KLASSE } from './textbook-content-7klasse';

// 5. klasse fag (andre fag enn matematikk)
import { NORSK_5_CHAPTERS } from './textbook-content-norsk-5';
import { ENGELSK_5_CHAPTERS } from './textbook-content-engelsk-5';
import { NATURFAG_5_CHAPTERS } from './textbook-content-naturfag-5';
import { SAMFUNNSFAG_5_CHAPTERS } from './textbook-content-samfunnsfag-5';
import { KRLE_5_CHAPTERS } from './textbook-content-krle-5';
import { KUNST_5_CHAPTERS } from './textbook-content-kunst-5';
import { MUSIKK_5_CHAPTERS } from './textbook-content-musikk-5';
import { MAT_5_CHAPTERS } from './textbook-content-mat-5';
import { KROPPSOVING_5_CHAPTERS } from './textbook-content-kroppsoving-5';

// 6. klasse fag (andre fag enn matematikk)
import { NORSK_6_CHAPTERS } from './textbook-content-norsk-6';
import { ENGELSK_6_CHAPTERS } from './textbook-content-engelsk-6';
import { NATURFAG_6_CHAPTERS } from './textbook-content-naturfag-6';
import { SAMFUNNSFAG_6_CHAPTERS } from './textbook-content-samfunnsfag-6';
import { KRLE_6_CHAPTERS } from './textbook-content-krle-6';
import { KUNST_6_CHAPTERS } from './textbook-content-kunst-6';
import { MUSIKK_6_CHAPTERS } from './textbook-content-musikk-6';
import { MAT_6_CHAPTERS } from './textbook-content-mat-6';
import { KROPPSOVING_6_CHAPTERS } from './textbook-content-kroppsoving-6';

// 7. klasse fag (andre fag enn matematikk)
import { NORSK_7_CHAPTERS } from './textbook-content-norsk-7';
import { ENGELSK_7_CHAPTERS } from './textbook-content-engelsk-7';
import { NATURFAG_7_CHAPTERS } from './textbook-content-naturfag-7';
import { SAMFUNNSFAG_7_CHAPTERS } from './textbook-content-samfunnsfag-7';
import { KRLE_7_CHAPTERS } from './textbook-content-krle-7';
import { KUNST_7_CHAPTERS } from './textbook-content-kunst-7';
import { MUSIKK_7_CHAPTERS } from './textbook-content-musikk-7';
import { MAT_7_CHAPTERS } from './textbook-content-mat-7';
import { KROPPSOVING_7_CHAPTERS } from './textbook-content-kroppsoving-7';

// Importer enkeltstående kapitler fra Naturfag VG1 (de som har egne filer)
import { CHAPTER_NAT_VG1_3_1 } from './textbook-chapter-nat-vg1-3-1';
import { CHAPTER_NAT_VG1_3_2 } from './textbook-chapter-nat-vg1-3-2';
import { CHAPTER_NAT_VG1_3_3 } from './textbook-chapter-nat-vg1-3-3';
import { CHAPTER_NAT_VG1_3_4 } from './textbook-chapter-nat-vg1-3-4';
import { CHAPTER_NAT_VG1_3_5 } from './textbook-chapter-nat-vg1-3-5';
import { CHAPTER_NAT_VG1_2_3 } from './textbook-chapter-nat-vg1-2-3';
import { CHAPTER_NAT_VG1_2_4 } from './textbook-chapter-nat-vg1-2-4';
import { CHAPTER_NAT_VG1_2_5 } from './textbook-chapter-nat-vg1-2-5';
import { CHAPTER_NAT_VG1_4_1 } from './textbook-chapter-nat-vg1-4-1';
import { CHAPTER_NAT_VG1_4_2 } from './textbook-chapter-nat-vg1-4-2';
import { CHAPTER_NAT_VG1_5_1 } from './textbook-chapter-nat-vg1-5-1';
import { CHAPTER_NAT_VG1_5_2 } from './textbook-chapter-nat-vg1-5-2';
import { CHAPTER_NAT_VG1_4_3 } from './textbook-chapter-nat-vg1-4-3';
import { CHAPTER_NAT_VG1_4_4 } from './textbook-chapter-nat-vg1-4-4';
import { CHAPTER_NAT_VG1_5_3 } from './textbook-chapter-nat-vg1-5-3';
import { CHAPTER_NAT_VG1_5_4 } from './textbook-chapter-nat-vg1-5-4';

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const ALL_CHAPTERS: Record<string, TextbookChapter> = {
  // Matematikk 5. klasse
  ...Object.fromEntries(CHAPTERS_5KLASSE.map(c => [c.id, c])),

  // Norsk 5. klasse
  ...Object.fromEntries(NORSK_5_CHAPTERS.map(c => [c.id, c])),

  // Engelsk 5. klasse
  ...Object.fromEntries(ENGELSK_5_CHAPTERS.map(c => [c.id, c])),

  // Naturfag 5. klasse
  ...Object.fromEntries(NATURFAG_5_CHAPTERS.map(c => [c.id, c])),

  // Samfunnsfag 5. klasse
  ...Object.fromEntries(SAMFUNNSFAG_5_CHAPTERS.map(c => [c.id, c])),

  // KRLE 5. klasse
  ...Object.fromEntries(KRLE_5_CHAPTERS.map(c => [c.id, c])),

  // Kunst og håndverk 5. klasse
  ...Object.fromEntries(KUNST_5_CHAPTERS.map(c => [c.id, c])),

  // Musikk 5. klasse
  ...Object.fromEntries(MUSIKK_5_CHAPTERS.map(c => [c.id, c])),

  // Mat og helse 5. klasse
  ...Object.fromEntries(MAT_5_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving 5. klasse
  ...Object.fromEntries(KROPPSOVING_5_CHAPTERS.map(c => [c.id, c])),

  // Matematikk 6. klasse
  ...Object.fromEntries(CHAPTERS_6KLASSE.map(c => [c.id, c])),

  // Norsk 6. klasse
  ...Object.fromEntries(NORSK_6_CHAPTERS.map(c => [c.id, c])),

  // Engelsk 6. klasse
  ...Object.fromEntries(ENGELSK_6_CHAPTERS.map(c => [c.id, c])),

  // Naturfag 6. klasse
  ...Object.fromEntries(NATURFAG_6_CHAPTERS.map(c => [c.id, c])),

  // Samfunnsfag 6. klasse
  ...Object.fromEntries(SAMFUNNSFAG_6_CHAPTERS.map(c => [c.id, c])),

  // KRLE 6. klasse
  ...Object.fromEntries(KRLE_6_CHAPTERS.map(c => [c.id, c])),

  // Kunst og håndverk 6. klasse
  ...Object.fromEntries(KUNST_6_CHAPTERS.map(c => [c.id, c])),

  // Musikk 6. klasse
  ...Object.fromEntries(MUSIKK_6_CHAPTERS.map(c => [c.id, c])),

  // Mat og helse 6. klasse
  ...Object.fromEntries(MAT_6_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving 6. klasse
  ...Object.fromEntries(KROPPSOVING_6_CHAPTERS.map(c => [c.id, c])),

  // Matematikk 7. klasse
  ...Object.fromEntries(CHAPTERS_7KLASSE.map(c => [c.id, c])),

  // Norsk 7. klasse
  ...Object.fromEntries(NORSK_7_CHAPTERS.map(c => [c.id, c])),

  // Engelsk 7. klasse
  ...Object.fromEntries(ENGELSK_7_CHAPTERS.map(c => [c.id, c])),

  // Naturfag 7. klasse
  ...Object.fromEntries(NATURFAG_7_CHAPTERS.map(c => [c.id, c])),

  // Samfunnsfag 7. klasse
  ...Object.fromEntries(SAMFUNNSFAG_7_CHAPTERS.map(c => [c.id, c])),

  // KRLE 7. klasse
  ...Object.fromEntries(KRLE_7_CHAPTERS.map(c => [c.id, c])),

  // Kunst og håndverk 7. klasse
  ...Object.fromEntries(KUNST_7_CHAPTERS.map(c => [c.id, c])),

  // Musikk 7. klasse
  ...Object.fromEntries(MUSIKK_7_CHAPTERS.map(c => [c.id, c])),

  // Mat og helse 7. klasse
  ...Object.fromEntries(MAT_7_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving 7. klasse
  ...Object.fromEntries(KROPPSOVING_7_CHAPTERS.map(c => [c.id, c])),

  // Matematikk 1T
  ...CHAPTERS_1T,

  // Matematikk R1
  ...CHAPTERS_R1,

  // Matematikk R2
  ...CHAPTERS_R2,

  // Matematikk S1
  ...CHAPTERS_S1,

  // Matematikk S2
  ...CHAPTERS_S2,

  // 8. klasse
  ...CHAPTERS_8KLASSE,

  // 9. klasse
  ...CHAPTERS_9KLASSE,

  // 10. klasse matematikk
  ...CHAPTERS_10KLASSE,

  // BI Økonomi
  ...CHAPTERS_BI_OKONOMI,

  // Naturfag VG1 (fra egen fil)
  ...CHAPTERS_NAT_VG1,

  // Naturfag VG1 - enkeltstående kapitler (override med mer detaljerte versjoner)
  'nat-vg1-2-3': CHAPTER_NAT_VG1_2_3,
  'nat-vg1-2-4': CHAPTER_NAT_VG1_2_4,
  'nat-vg1-2-5': CHAPTER_NAT_VG1_2_5,
  'nat-vg1-3-1': CHAPTER_NAT_VG1_3_1,
  'nat-vg1-3-2': CHAPTER_NAT_VG1_3_2,
  'nat-vg1-3-3': CHAPTER_NAT_VG1_3_3,
  'nat-vg1-3-4': CHAPTER_NAT_VG1_3_4,
  'nat-vg1-3-5': CHAPTER_NAT_VG1_3_5,
  'nat-vg1-4-1': CHAPTER_NAT_VG1_4_1,
  'nat-vg1-4-2': CHAPTER_NAT_VG1_4_2,
  'nat-vg1-4-3': CHAPTER_NAT_VG1_4_3,
  'nat-vg1-4-4': CHAPTER_NAT_VG1_4_4,
  'nat-vg1-5-1': CHAPTER_NAT_VG1_5_1,
  'nat-vg1-5-2': CHAPTER_NAT_VG1_5_2,
  'nat-vg1-5-3': CHAPTER_NAT_VG1_5_3,
  'nat-vg1-5-4': CHAPTER_NAT_VG1_5_4,

  // Naturfag 10. klasse
  ...NATURFAG_10_CHAPTERS,

  // Fysikk 1
  ...FYSIKK1_CHAPTERS,

  // Fysikk 2
  ...FYSIKK2_CHAPTERS,

  // Kjemi 1
  ...Object.fromEntries(KJEMI1_CHAPTERS.map(c => [c.id, c])),

  // Kjemi 2
  ...Object.fromEntries(KJEMI2_CHAPTERS.map(c => [c.id, c])),

  // Norsk 8. klasse
  ...Object.fromEntries(NORSK_8_CHAPTERS.map(c => [c.id, c])),

  // Engelsk 8. klasse
  ...Object.fromEntries(ENGELSK_8_CHAPTERS.map(c => [c.id, c])),

  // Naturfag 8. klasse
  ...Object.fromEntries(NATURFAG_8_CHAPTERS.map(c => [c.id, c])),

  // Samfunnsfag 8. klasse
  ...Object.fromEntries(SAMFUNNSFAG_8_CHAPTERS.map(c => [c.id, c])),

  // KRLE 8. klasse
  ...Object.fromEntries(KRLE_8_CHAPTERS.map(c => [c.id, c])),

  // Kunst og håndverk 8. klasse
  ...Object.fromEntries(KUNST_8_CHAPTERS.map(c => [c.id, c])),

  // Musikk 8. klasse
  ...Object.fromEntries(MUSIKK_8_CHAPTERS.map(c => [c.id, c])),

  // Mat og helse 8. klasse
  ...Object.fromEntries(MAT_8_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving 8. klasse
  ...Object.fromEntries(KROPPSOVING_8_CHAPTERS.map(c => [c.id, c])),

  // Norsk 9. klasse
  ...Object.fromEntries(NORSK_9_CHAPTERS.map(c => [c.id, c])),

  // Engelsk 9. klasse
  ...Object.fromEntries(ENGELSK_9_CHAPTERS.map(c => [c.id, c])),

  // Samfunnsfag 9. klasse
  ...Object.fromEntries(SAMFUNNSFAG_9_CHAPTERS.map(c => [c.id, c])),

  // KRLE 9. klasse
  ...Object.fromEntries(KRLE_9_CHAPTERS.map(c => [c.id, c])),

  // Naturfag 9. klasse
  ...Object.fromEntries(NATURFAG_9_CHAPTERS.map(c => [c.id, c])),

  // Kunst og håndverk 9. klasse
  ...Object.fromEntries(KUNST_9_CHAPTERS.map(c => [c.id, c])),

  // Musikk 9. klasse
  ...Object.fromEntries(MUSIKK_9_CHAPTERS.map(c => [c.id, c])),

  // Mat og helse 9. klasse
  ...Object.fromEntries(MAT_9_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving 9. klasse
  ...Object.fromEntries(KROPPSOVING_9_CHAPTERS.map(c => [c.id, c])),

  // Norsk 10. klasse
  ...Object.fromEntries(NORSK_10_CHAPTERS.map(c => [c.id, c])),

  // Engelsk 10. klasse
  ...Object.fromEntries(ENGELSK_10_CHAPTERS.map(c => [c.id, c])),

  // Samfunnsfag 10. klasse
  ...Object.fromEntries(SAMFUNNSFAG_10_CHAPTERS.map(c => [c.id, c])),

  // KRLE 10. klasse
  ...Object.fromEntries(KRLE_10_CHAPTERS.map(c => [c.id, c])),

  // Kunst og håndverk 10. klasse
  ...Object.fromEntries(KUNST_10_CHAPTERS.map(c => [c.id, c])),

  // Musikk 10. klasse
  ...Object.fromEntries(MUSIKK_10_CHAPTERS.map(c => [c.id, c])),

  // Mat og helse 10. klasse
  ...Object.fromEntries(MAT_10_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving 10. klasse
  ...Object.fromEntries(KROPPSOVING_10_CHAPTERS.map(c => [c.id, c])),

  // Spansk nivå 1
  ...Object.fromEntries(SPANSK_1_CHAPTERS.map(c => [c.id, c])),

  // Tysk nivå 1
  ...Object.fromEntries(TYSK_1_CHAPTERS.map(c => [c.id, c])),

  // Fransk nivå 1
  ...Object.fromEntries(FRANSK_1_CHAPTERS.map(c => [c.id, c])),

  // Norsk VG1
  ...Object.fromEntries(NORSK_VG1_CHAPTERS.map(c => [c.id, c])),

  // Engelsk VG1
  ...Object.fromEntries(ENGELSK_VG1_CHAPTERS.map(c => [c.id, c])),

  // Samfunnskunnskap
  ...Object.fromEntries(SAMFUNNSKUNNSKAP_CHAPTERS.map(c => [c.id, c])),

  // Geografi
  ...Object.fromEntries(GEOGRAFI_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving VG1
  ...Object.fromEntries(KROPPSOVING_VG1_CHAPTERS.map(c => [c.id, c])),

  // Norsk VG2
  ...Object.fromEntries(NORSK_VG2_CHAPTERS.map(c => [c.id, c])),

  // Historie
  ...Object.fromEntries(HISTORIE_CHAPTERS.map(c => [c.id, c])),

  // Historie - Narrativ versjon (lesevennlig)
  ...Object.fromEntries(HISTORIE_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving VG2
  ...Object.fromEntries(KROPPSOVING_VG2_CHAPTERS.map(c => [c.id, c])),

  // Norsk VG3
  ...Object.fromEntries(NORSK_VG3_CHAPTERS.map(c => [c.id, c])),

  // Religion og etikk
  ...Object.fromEntries(RELIGION_ETIKK_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving VG3
  ...Object.fromEntries(KROPPSOVING_VG3_CHAPTERS.map(c => [c.id, c])),

  // Valgfag VG1/VG2/VG3

  // IT 1
  ...Object.fromEntries(IT_1_CHAPTERS.map(c => [c.id, c])),

  // IT 2
  ...Object.fromEntries(IT_2_CHAPTERS.map(c => [c.id, c])),

  // Biologi 1
  ...Object.fromEntries(BIOLOGI_1_CHAPTERS.map(c => [c.id, c])),

  // Biologi 2
  ...Object.fromEntries(BIOLOGI_2_CHAPTERS.map(c => [c.id, c])),

  // Psykologi 1
  ...Object.fromEntries(PSYKOLOGI_1_CHAPTERS.map(c => [c.id, c])),

  // Psykologi 2
  ...Object.fromEntries(PSYKOLOGI_2_CHAPTERS.map(c => [c.id, c])),

  // Geofag 1
  ...Object.fromEntries(GEOFAG_1_CHAPTERS.map(c => [c.id, c])),

  // Geofag 2
  ...Object.fromEntries(GEOFAG_2_CHAPTERS.map(c => [c.id, c])),

  // Teknologi og forskningslære 1
  ...Object.fromEntries(TOF_1_CHAPTERS.map(c => [c.id, c])),

  // Teknologi og forskningslære 2
  ...Object.fromEntries(TOF_2_CHAPTERS.map(c => [c.id, c])),

  // Sosiologi og sosialantropologi
  ...Object.fromEntries(SOSIOLOGI_CHAPTERS.map(c => [c.id, c])),

  // Rettslære 1
  ...Object.fromEntries(RETTSLAERE_1_CHAPTERS.map(c => [c.id, c])),

  // Rettslære 2
  ...Object.fromEntries(RETTSLAERE_2_CHAPTERS.map(c => [c.id, c])),

  // Økonomistyring
  ...Object.fromEntries(OKONOMISTYRING_CHAPTERS.map(c => [c.id, c])),

  // Markedsføring og ledelse
  ...Object.fromEntries(MARKEDSFORING_CHAPTERS.map(c => [c.id, c])),

  // Spansk nivå 2
  ...Object.fromEntries(SPANSK_2_CHAPTERS.map(c => [c.id, c])),

  // Spansk nivå 3
  ...Object.fromEntries(SPANSK_3_CHAPTERS.map(c => [c.id, c])),

  // Tysk nivå 2
  ...Object.fromEntries(TYSK_2_CHAPTERS.map(c => [c.id, c])),

  // Tysk nivå 3
  ...Object.fromEntries(TYSK_3_CHAPTERS.map(c => [c.id, c])),

  // Fransk nivå 2
  ...Object.fromEntries(FRANSK_2_CHAPTERS.map(c => [c.id, c])),

  // Fransk nivå 3
  ...Object.fromEntries(FRANSK_3_CHAPTERS.map(c => [c.id, c])),
};

// ============================================================================
// Hjelpefunksjoner
// ============================================================================

export function getChapterContent(chapterId: string): TextbookChapter | undefined {
  return ALL_CHAPTERS[chapterId];
}

export function getAllChapterIds(): string[] {
  return Object.keys(ALL_CHAPTERS);
}

export function isChapterImplemented(chapterId: string): boolean {
  return chapterId in ALL_CHAPTERS;
}

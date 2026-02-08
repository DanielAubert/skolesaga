/**
 * Tekstbok kapittelinnhold - hovedfil
 *
 * Denne filen importerer og samler alle kapitler fra separate filer.
 */

import type { TextbookChapter, TextbookContentBlock } from '@/lib/types/textbook';

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
import { NORSK_VG1_NARRATIV_CHAPTERS } from './textbook-content-norsk-vg1-narrativ';
import { ENGELSK_VG1_CHAPTERS } from './textbook-content-engelsk-vg1';
import { ENGELSK_VG1_NARRATIV_CHAPTERS } from './textbook-content-engelsk-vg1-narrativ';
import { SAMFUNNSKUNNSKAP_CHAPTERS } from './textbook-content-samfunnskunnskap';
import { GEOGRAFI_CHAPTERS } from './textbook-content-geografi';
import { GEOGRAFI_NARRATIV_CHAPTERS } from './textbook-content-geografi-narrativ';
import { KROPPSOVING_VG1_CHAPTERS } from './textbook-content-kroppsoving-vg1';
import { NORSK_VG2_CHAPTERS } from './textbook-content-norsk-vg2';
import { NORSK_VG2_NARRATIV_CHAPTERS } from './textbook-content-norsk-vg2-narrativ';
import { HISTORIE_CHAPTERS } from './textbook-content-historie';
import { HISTORIE_NARRATIV_CHAPTERS } from './textbook-content-historie-narrativ';
import { KROPPSOVING_VG2_CHAPTERS } from './textbook-content-kroppsoving-vg2';
import { NORSK_VG3_CHAPTERS } from './textbook-content-norsk-vg3';
import { NORSK_VG3_DEL2_EXTENDED_CHAPTERS } from './textbook-content-norsk-vg3-del2';
import { NORSK_VG3_SPRAAKHISTORIE_CHAPTERS } from './textbook-content-norsk-vg3-spraakhistorie';
import { NORSK_VG3_SAMTID_CHAPTERS } from './textbook-content-norsk-vg3-samtid';
import { NORSK_VG3_ANALYSE_CHAPTERS } from './textbook-content-norsk-vg3-analyse';
import { NORSK_VG3_LYRIKK_DRAMA_CHAPTERS } from './textbook-content-norsk-vg3-lyrikk-drama';
import { NORSK_VG3_NARRATIV_CHAPTERS } from './textbook-content-norsk-vg3-narrativ';
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

// Matematikk 1P
import { CHAPTERS_1P } from './textbook-content-1p';
import { CHAPTERS_1P_TALLREGNING } from './textbook-content-1p-tallregning';
import { CHAPTERS_1P_POTENSER } from './textbook-content-1p-potenser';
import { CHAPTERS_1P_FUNKSJONER } from './textbook-content-1p-funksjoner';
import { CHAPTERS_1P_GEOMETRI } from './textbook-content-1p-geometri';
import { CHAPTERS_1P_MODELLERING } from './textbook-content-1p-modellering';
import { CHAPTERS_1P_OKONOMI } from './textbook-content-1p-okonomi';
import { CHAPTERS_1P_PROGRAMMERING } from './textbook-content-1p-programmering';
import { CHAPTERS_1T_MODELLERING } from './textbook-content-1t-modellering';

// Matematikk 2P
import { MATEMATIKK_2P_DEL1_CHAPTERS } from './textbook-content-2p-del1';
import { MATEMATIKK_2P_DEL2_CHAPTERS } from './textbook-content-2p-del2';
import { MATEMATIKK_2P_DEL3_CHAPTERS } from './textbook-content-2p-del3';
import { MATEMATIKK_2P_DEL4_CHAPTERS } from './textbook-content-2p-del4';
import { MATEMATIKK_2P_DEL5_CHAPTERS } from './textbook-content-2p-del5';
import { MATEMATIKK_2P_NARRATIV_CHAPTERS } from './textbook-content-2p-narrativ';

// Matematikk 2P-Y
import { CHAPTERS_2PY } from './textbook-content-2py';

// Yrkesfag VG1
import { CHAPTERS_ELEKTRO_DATA_VG1_PART1 } from './textbook-content-elektro-data-vg1';
import { CHAPTERS_ELEKTRO_DATA_VG1_PART2 } from './textbook-content-elektro-data-vg1-del2';
import { CHAPTERS_ELEKTRO_DATA_VG1_PART3 } from './textbook-content-elektro-data-vg1-del3';
import { CHAPTERS_ELEKTRO_DATA_VG1_PART4 } from './textbook-content-elektro-data-vg1-del4';
import { CHAPTERS_ELEKTRO_DATA_VG1_PART5 } from './textbook-content-elektro-data-vg1-del5';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP1_NY } from './textbook-content-elektro-data-vg1-kap1-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP2_NY } from './textbook-content-elektro-data-vg1-kap2-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP3A_NY } from './textbook-content-elektro-data-vg1-kap3a-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP3B_NY } from './textbook-content-elektro-data-vg1-kap3b-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP4_NY } from './textbook-content-elektro-data-vg1-kap4-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP5_NY } from './textbook-content-elektro-data-vg1-kap5-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP6_NY } from './textbook-content-elektro-data-vg1-kap6-ny';
import { CHAPTERS_ELEKTRO_DATA_VG1_KAP78_NY } from './textbook-content-elektro-data-vg1-kap78-ny';
import { CHAPTERS_BYGG_ANLEGG_VG1 } from './textbook-content-bygg-anlegg-vg1';
import { CHAPTERS_TIF_VG1_PART1 } from './textbook-content-tif-vg1';
import { TEXTBOOK_CONTENT_HANDVERK_DESIGN_VG1_PART1 } from './textbook-content-handverk-design-vg1';
import { CHAPTERS_NATURBRUK_VG1 } from './textbook-content-naturbruk-vg1';
import { CHAPTERS_RESTAURANT_MAT_VG1 } from './textbook-content-restaurant-mat-vg1';
import { SALG_SERVICE_VG1_DEL1_CHAPTERS } from './textbook-content-salg-service-vg1-del1';
import { SALG_SERVICE_VG1_DEL2_CHAPTERS } from './textbook-content-salg-service-vg1-del2';
import { SALG_SERVICE_VG1_DEL3_CHAPTERS } from './textbook-content-salg-service-vg1-del3';
import { SALG_SERVICE_VG1_DEL4_CHAPTERS } from './textbook-content-salg-service-vg1-del4';
import { SALG_SERVICE_VG1_DEL5_CHAPTERS } from './textbook-content-salg-service-vg1-del5';
import { SALG_SERVICE_VG1_DEL6_CHAPTERS } from './textbook-content-salg-service-vg1-del6';
import { SALG_SERVICE_VG1_DEL7_CHAPTERS } from './textbook-content-salg-service-vg1-del7';
import { SALG_SERVICE_VG1_DEL8_CHAPTERS } from './textbook-content-salg-service-vg1-del8';
import { HELSEOPPVEKST_VG1_CHAPTERS } from './textbook-content-helseoppvekst-vg1';

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
import { CHAPTER_NAT_VG1_2_3 } from './textbook-chapter-nat-vg1-2-3';
import { CHAPTER_NAT_VG1_3_1 } from './textbook-chapter-nat-vg1-3-1';
import { CHAPTER_NAT_VG1_3_2 } from './textbook-chapter-nat-vg1-3-2';
import { CHAPTER_NAT_VG1_3_3 } from './textbook-chapter-nat-vg1-3-3';
import { CHAPTER_NAT_VG1_3_4 } from './textbook-chapter-nat-vg1-3-4';
import { CHAPTER_NAT_VG1_3_5 } from './textbook-chapter-nat-vg1-3-5';
import { CHAPTER_NAT_VG1_4_1 } from './textbook-chapter-nat-vg1-4-1';
import { CHAPTER_NAT_VG1_4_2 } from './textbook-chapter-nat-vg1-4-2';
import { CHAPTER_NAT_VG1_4_3 } from './textbook-chapter-nat-vg1-4-3';
import { CHAPTER_NAT_VG1_4_4 } from './textbook-chapter-nat-vg1-4-4';

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

  // Matematikk 1P
  ...CHAPTERS_1P,
  ...Object.fromEntries(CHAPTERS_1P_TALLREGNING.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_1P_POTENSER.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_1P_FUNKSJONER.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_1P_GEOMETRI.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_1P_MODELLERING.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_1P_OKONOMI.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_1P_PROGRAMMERING.map(c => [c.id, c])),

  // Matematikk 1T
  ...CHAPTERS_1T,
  ...Object.fromEntries(CHAPTERS_1T_MODELLERING.map(c => [c.id, c])),

  // Matematikk 2P
  ...Object.fromEntries(MATEMATIKK_2P_DEL1_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(MATEMATIKK_2P_DEL2_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(MATEMATIKK_2P_DEL3_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(MATEMATIKK_2P_DEL4_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(MATEMATIKK_2P_DEL5_CHAPTERS.map(c => [c.id, c])),

  // Matematikk 2P - Narrativ versjon
  ...Object.fromEntries(MATEMATIKK_2P_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Matematikk 2P-Y
  ...CHAPTERS_2PY,

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
  'nat-vg1-3-1': CHAPTER_NAT_VG1_3_1,
  'nat-vg1-3-2': CHAPTER_NAT_VG1_3_2,
  'nat-vg1-3-3': CHAPTER_NAT_VG1_3_3,
  'nat-vg1-3-4': CHAPTER_NAT_VG1_3_4,
  'nat-vg1-3-5': CHAPTER_NAT_VG1_3_5,
  'nat-vg1-4-1': CHAPTER_NAT_VG1_4_1,
  'nat-vg1-4-2': CHAPTER_NAT_VG1_4_2,
  'nat-vg1-4-3': CHAPTER_NAT_VG1_4_3,
  'nat-vg1-4-4': CHAPTER_NAT_VG1_4_4,

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
  ...Object.fromEntries(NORSK_VG1_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Engelsk VG1
  ...Object.fromEntries(ENGELSK_VG1_CHAPTERS.map(c => [c.id, c])),

  // Engelsk VG1 - Narrativ versjon (lesevennlig)
  ...Object.fromEntries(ENGELSK_VG1_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Samfunnskunnskap
  ...Object.fromEntries(SAMFUNNSKUNNSKAP_CHAPTERS.map(c => [c.id, c])),

  // Geografi
  ...Object.fromEntries(GEOGRAFI_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(GEOGRAFI_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving VG1
  ...Object.fromEntries(KROPPSOVING_VG1_CHAPTERS.map(c => [c.id, c])),

  // Yrkesfag VG1
  // Elektro og datateknologi VG1
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_PART1.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_PART2.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_PART3.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_PART4.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_PART5.map(c => [c.id, c])),
  // Nye kapitler for Elektro og datateknologi VG1
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP1_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP2_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP3A_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP3B_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP4_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP5_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP6_NY.map(c => [c.id, c])),
  ...Object.fromEntries(CHAPTERS_ELEKTRO_DATA_VG1_KAP78_NY.map(c => [c.id, c])),

  // Bygg- og anleggsteknikk VG1
  ...Object.fromEntries(CHAPTERS_BYGG_ANLEGG_VG1.map(c => [c.id, c])),

  // Teknologi- og industrifag VG1
  ...Object.fromEntries(CHAPTERS_TIF_VG1_PART1.map(c => [c.id, c])),

  // Håndverk, design og produktutvikling VG1
  ...Object.fromEntries(TEXTBOOK_CONTENT_HANDVERK_DESIGN_VG1_PART1.map(c => [c.id, c])),

  // Naturbruk VG1
  ...Object.fromEntries(CHAPTERS_NATURBRUK_VG1.map(c => [c.id, c])),

  // Restaurant- og matfag VG1
  ...Object.fromEntries(CHAPTERS_RESTAURANT_MAT_VG1.map(c => [c.id, c])),

  // Salg, service og reiseliv VG1
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL1_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL2_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL3_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL4_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL5_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL6_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL7_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(SALG_SERVICE_VG1_DEL8_CHAPTERS.map(c => [c.id, c])),

  // Helse- og oppvekstfag VG1
  ...HELSEOPPVEKST_VG1_CHAPTERS,

  // Norsk VG2
  ...Object.fromEntries(NORSK_VG2_CHAPTERS.map(c => [c.id, c])),

  // Norsk VG2 - Narrativ versjon (lesevennlig)
  ...Object.fromEntries(NORSK_VG2_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Historie
  ...Object.fromEntries(HISTORIE_CHAPTERS.map(c => [c.id, c])),

  // Historie - Narrativ versjon (lesevennlig)
  ...Object.fromEntries(HISTORIE_NARRATIV_CHAPTERS.map(c => [c.id, c])),

  // Kroppsøving VG2
  ...Object.fromEntries(KROPPSOVING_VG2_CHAPTERS.map(c => [c.id, c])),

  // Norsk VG3
  ...Object.fromEntries(NORSK_VG3_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(NORSK_VG3_DEL2_EXTENDED_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(NORSK_VG3_SPRAAKHISTORIE_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(NORSK_VG3_SAMTID_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(NORSK_VG3_ANALYSE_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(NORSK_VG3_LYRIKK_DRAMA_CHAPTERS.map(c => [c.id, c])),
  ...Object.fromEntries(NORSK_VG3_NARRATIV_CHAPTERS.map(c => [c.id, c])),

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
// Alias-mapping: nye hierarkiske kapittel-ID-er → gamle innholds-ID-er
// Brukes for fag som ble utvidet fra flat nummerering (1,2,3...)
// til hierarkisk nummerering (1.1, 1.2, ...) etter at innholdet ble skrevet.
// ============================================================================

const CHAPTER_ID_ALIASES: Record<string, string> = {
  // Restaurant og matfag VG1 (28 kapitler med innhold)
  'restaurant-mat-vg1-1-1': 'restaurant-mat-vg1-15',  // Kjøtt - kvalitet, stykking og tilberedning
  'restaurant-mat-vg1-1-2': 'restaurant-mat-vg1-16',  // Fisk og sjømat
  'restaurant-mat-vg1-1-3': 'restaurant-mat-vg1-17',  // Grønnsaker og frukt
  'restaurant-mat-vg1-1-4': 'restaurant-mat-vg1-18',  // Melk og meieriprodukter
  'restaurant-mat-vg1-1-5': 'restaurant-mat-vg1-19',  // Korn, mel og bakevarer
  'restaurant-mat-vg1-1-7': 'restaurant-mat-vg1-28',  // Lokal og kortreist mat
  'restaurant-mat-vg1-1-8': 'restaurant-mat-vg1-27',  // Vegetarisk og vegansk mat
  'restaurant-mat-vg1-1-9': 'restaurant-mat-vg1-21',  // Smak og sensorikk
  'restaurant-mat-vg1-2-4': 'restaurant-mat-vg1-3',   // Grunnleggende matlagingsteknikker
  'restaurant-mat-vg1-3-1': 'restaurant-mat-vg1-4',   // Bakst og desserter
  'restaurant-mat-vg1-4-1': 'restaurant-mat-vg1-5',   // Ernæring og kosthold
  'restaurant-mat-vg1-4-3': 'restaurant-mat-vg1-10',  // Allergener og spesialkost
  'restaurant-mat-vg1-5-1': 'restaurant-mat-vg1-7',   // Servering og vertskap
  'restaurant-mat-vg1-5-3': 'restaurant-mat-vg1-25',  // Drikke og drikkekultur
  'restaurant-mat-vg1-5-4': 'restaurant-mat-vg1-6',   // Menyplanlegging
  'restaurant-mat-vg1-5-5': 'restaurant-mat-vg1-26',  // Catering og selskapsmeny
  'restaurant-mat-vg1-6-1': 'restaurant-mat-vg1-8',   // Norsk matkultur og tradisjoner
  'restaurant-mat-vg1-6-4': 'restaurant-mat-vg1-9',   // Internasjonal mat
  'restaurant-mat-vg1-6-5': 'restaurant-mat-vg1-20',  // Konservering og foredling
  'restaurant-mat-vg1-7-2': 'restaurant-mat-vg1-2',   // Hygiene og mattrygghet
  'restaurant-mat-vg1-7-4': 'restaurant-mat-vg1-24',  // Matmerking og lovverk
  'restaurant-mat-vg1-7-5': 'restaurant-mat-vg1-13',  // HMS i kjøkken
  'restaurant-mat-vg1-7-6': 'restaurant-mat-vg1-23',  // Matsvinn og bærekraftig kjøkkendrift
  'restaurant-mat-vg1-7-7': 'restaurant-mat-vg1-11',  // Bærekraftig matproduksjon
  'restaurant-mat-vg1-8-1': 'restaurant-mat-vg1-22',  // Profesjonell kjøkkendrift
  'restaurant-mat-vg1-8-2': 'restaurant-mat-vg1-12',  // Økonomi og drift
  'restaurant-mat-vg1-8-4': 'restaurant-mat-vg1-14',  // Yrkesmuligheter

  // Elektro og datateknologi VG1 (18 kapitler med innhold)
  'elektro-data-vg1-1-1': 'elektro-data-vg1-1',   // Elektronikk grunnleggende
  'elektro-data-vg1-1-3': 'elektro-data-vg1-2',   // Kretser og komponenter
  'elektro-data-vg1-1-9': 'elektro-data-vg1-18',  // Signalbehandling og filtre
  'elektro-data-vg1-2-1': 'elektro-data-vg1-3',   // Digital elektronikk
  'elektro-data-vg1-2-2': 'elektro-data-vg1-15',  // Digitalteknikk - logiske porter
  'elektro-data-vg1-2-5': 'elektro-data-vg1-16',  // Digitalteknikk - flip-flops
  'elektro-data-vg1-3-1': 'elektro-data-vg1-4',   // Programmering grunnleggende
  'elektro-data-vg1-3-6': 'elektro-data-vg1-17',  // Mikrokontrollere og Arduino
  'elektro-data-vg1-4-1': 'elektro-data-vg1-5',   // Nettverk og kommunikasjon
  'elektro-data-vg1-5-1': 'elektro-data-vg1-6',   // Elektrisk energi
  'elektro-data-vg1-5-2': 'elektro-data-vg1-11',  // Energiforsyning
  'elektro-data-vg1-6-1': 'elektro-data-vg1-8',   // Måleteknikk
  'elektro-data-vg1-6-4': 'elektro-data-vg1-10',  // Styringssystemer
  'elektro-data-vg1-6-5': 'elektro-data-vg1-9',   // Automasjon
  'elektro-data-vg1-7-1': 'elektro-data-vg1-7',   // Sikkerhet og HMS
  'elektro-data-vg1-7-4': 'elektro-data-vg1-13',  // Bærekraft og teknologi
  'elektro-data-vg1-8-2': 'elektro-data-vg1-12',  // Dokumentasjon og tegning
  'elektro-data-vg1-8-4': 'elektro-data-vg1-14',  // Yrkesmuligheter

  // Bygg og anleggsteknikk VG1 (15 kapitler med innhold)
  'bygg-anlegg-vg1-1-1': 'bygg-anlegg-vg1-1',   // Byggematerialer
  'bygg-anlegg-vg1-2-1': 'bygg-anlegg-vg1-4',   // Trekonstruksjoner
  'bygg-anlegg-vg1-3-1': 'bygg-anlegg-vg1-3',   // Grunnarbeid og betong
  'bygg-anlegg-vg1-3-6': 'bygg-anlegg-vg1-5',   // Muring og pussing
  'bygg-anlegg-vg1-3-8': 'bygg-anlegg-vg1-13',  // Drenering og fuktsikring
  'bygg-anlegg-vg1-4-1': 'bygg-anlegg-vg1-15',  // Takarbeid og taktekking
  'bygg-anlegg-vg1-4-3': 'bygg-anlegg-vg1-8',   // Isolasjon og tetting
  'bygg-anlegg-vg1-4-5': 'bygg-anlegg-vg1-9',   // Bygningsfysikk
  'bygg-anlegg-vg1-7-1': 'bygg-anlegg-vg1-7',   // HMS og sikkerhet
  'bygg-anlegg-vg1-7-3': 'bygg-anlegg-vg1-14',  // Stillas og fallsikring
  'bygg-anlegg-vg1-7-4': 'bygg-anlegg-vg1-6',   // Verktøy og maskiner
  'bygg-anlegg-vg1-7-6': 'bygg-anlegg-vg1-11',  // Miljø og bærekraft
  'bygg-anlegg-vg1-8-1': 'bygg-anlegg-vg1-2',   // Tegning og BIM
  'bygg-anlegg-vg1-8-3': 'bygg-anlegg-vg1-10',  // Prosjektplanlegging
  'bygg-anlegg-vg1-8-5': 'bygg-anlegg-vg1-12',  // Yrkesmuligheter

  // Naturbruk VG1 - Fullstendig med 55 kapitler (1.1-8.8)
  // ID-er matcher direkte - ingen mapping nødvendig

  // Teknologi- og industrifag VG1 (5 kapitler med innhold)
  'tif-vg1-1-1': 'tif-vg1-1',   // Materiallære (Metaller og legeringer)
  'tif-vg1-2-1': 'tif-vg1-2',   // Sveising og sammenføyning
  'tif-vg1-3-1': 'tif-vg1-3',   // Maskinering
  'tif-vg1-4-1': 'tif-vg1-4',   // Tegning og dokumentasjon
  'tif-vg1-6-1': 'tif-vg1-5',   // HMS og sikkerhet

  // Kroppsøving VG1 (10 kapitler med innhold)
  'kroppsoving-vg1-1-1': 'kroppsoving-vg1-1',   // Trening og treningsprinsipper
  'kroppsoving-vg1-2-1': 'kroppsoving-vg1-2',   // Anatomi og fysiologi
  'kroppsoving-vg1-3-1': 'kroppsoving-vg1-3',   // Kosthold og restitusjon
  'kroppsoving-vg1-4-1': 'kroppsoving-vg1-4',   // Individuelle idretter
  'kroppsoving-vg1-5-1': 'kroppsoving-vg1-5',   // Lagidretter og samspill
  'kroppsoving-vg1-6-1': 'kroppsoving-vg1-6',   // Dans og bevegelsesaktiviteter
  'kroppsoving-vg1-7-1': 'kroppsoving-vg1-7',   // Friluftsliv og naturopplevelser
  'kroppsoving-vg1-8-4': 'kroppsoving-vg1-8',   // Fair play og idrettsetikk
  'kroppsoving-vg1-8-1': 'kroppsoving-vg1-9',   // Helse og livsstil
  'kroppsoving-vg1-1-5': 'kroppsoving-vg1-10',  // Egentrening og treningsplanlegging

  // Kroppsøving VG2 (10 kapitler med innhold)
  'kroppsoving-vg2-1-1': 'kroppsoving-vg2-1',   // Avansert treningslære
  'kroppsoving-vg2-1-2': 'kroppsoving-vg2-2',   // Periodisering og treningsplanlegging
  'kroppsoving-vg2-2-1': 'kroppsoving-vg2-3',   // Idrettspsykologi og mental trening
  'kroppsoving-vg2-2-3': 'kroppsoving-vg2-4',   // Prestasjon og mestring
  'kroppsoving-vg2-3-1': 'kroppsoving-vg2-5',   // Skadeforebygging og rehabilitering
  'kroppsoving-vg2-4-1': 'kroppsoving-vg2-6',   // Alternative treningsformer
  'kroppsoving-vg2-5-1': 'kroppsoving-vg2-7',   // Friluftsliv og ekspedisjon
  'kroppsoving-vg2-7-1': 'kroppsoving-vg2-8',   // Idrett, samfunn og etikk
  'kroppsoving-vg2-8-1': 'kroppsoving-vg2-9',   // Helse, livsstil og motivasjon
  'kroppsoving-vg2-8-4': 'kroppsoving-vg2-10',  // Egenvurdering og dokumentasjon

  // IT 1 (10 kapitler med innhold)
  'it-1-1-1': 'it-1-1',   // Digital kompetanse og samfunn
  'it-1-3-1': 'it-1-2',   // Grunnleggende programmering
  'it-1-4-5': 'it-1-3',   // Algoritmer og problemløsning
  'it-1-5-1': 'it-1-4',   // Webteknologi - HTML og CSS
  'it-1-6-1': 'it-1-5',   // JavaScript og dynamiske nettsider
  'it-1-7-1': 'it-1-6',   // Databaser og datamodellering
  'it-1-5-5': 'it-1-7',   // Brukergrensesnitt og design
  'it-1-8-1': 'it-1-8',   // Nettverk og sikkerhet
  'it-1-8-2': 'it-1-9',   // Personvern og etikk
  'it-1-3-8': 'it-1-10',  // Prosjektarbeid og dokumentasjon

  // Biologi 1 (10 kapitler med innhold)
  'biologi-1-1-1': 'biologi-1-1',   // Cellebiologi og cellens oppbygging
  'biologi-1-2-1': 'biologi-1-2',   // Celleånding og fotosyntese
  'biologi-1-3-1': 'biologi-1-3',   // DNA og gener
  'biologi-1-3-4': 'biologi-1-4',   // Celledeling (mitose og meiose)
  'biologi-1-3-7': 'biologi-1-5',   // Arv og genetikk
  'biologi-1-6-1': 'biologi-1-6',   // Evolusjon og naturlig utvalg
  'biologi-1-7-1': 'biologi-1-7',   // Økologi og økosystemer
  'biologi-1-8-1': 'biologi-1-8',   // Biologisk mangfold
  'biologi-1-3-8': 'biologi-1-9',   // Bioteknologi grunnlag
  'biologi-1-5-1': 'biologi-1-10',  // Kropp og helse

  // Psykologi 1 (10 kapitler med innhold)
  'psykologi-1-1-1': 'psykologi-1-1',   // Hva er psykologi?
  'psykologi-1-2-1': 'psykologi-1-2',   // Biologisk psykologi
  'psykologi-1-3-1': 'psykologi-1-3',   // Kognitiv psykologi
  'psykologi-1-4-1': 'psykologi-1-4',   // Læring og atferd
  'psykologi-1-6-1': 'psykologi-1-5',   // Motivasjon og emosjoner
  'psykologi-1-5-1': 'psykologi-1-6',   // Utviklingspsykologi
  'psykologi-1-5-5': 'psykologi-1-7',   // Personlighetspsykologi
  'psykologi-1-6-2': 'psykologi-1-8',   // Sosialpsykologi
  'psykologi-1-7-1': 'psykologi-1-9',   // Psykisk helse og lidelser
  'psykologi-1-8-1': 'psykologi-1-10',  // Anvendt psykologi og metode

  // Geofag 1 (10 kapitler med innhold)
  'geofag-1-1-1': 'geofag-1-1',   // Jordens system og sfærer
  'geofag-1-2-1': 'geofag-1-2',   // Bergarter og mineraler
  'geofag-1-3-1': 'geofag-1-3',   // Platetektonikk
  'geofag-1-3-3': 'geofag-1-4',   // Vulkaner og jordskjelv
  'geofag-1-4-1': 'geofag-1-5',   // Forvitring og erosjon
  'geofag-1-4-3': 'geofag-1-6',   // Landformer og landskapsutvikling
  'geofag-1-7-1': 'geofag-1-7',   // Klima og klimasoner (mapped to naturfarer chapter which covers weather)
  'geofag-1-5-1': 'geofag-1-9',   // Hydrologi og vannkretsløpet
  'geofag-1-8-1': 'geofag-1-10',  // Geofaglige undersøkelser

  // Teknologi og forskningslære 1 (10 kapitler med innhold)
  'tof-1-1-1': 'tof-1-1',   // Vitenskapelig metode
  'tof-1-2-1': 'tof-1-2',   // Datainnsamling og analyse
  'tof-1-6-1': 'tof-1-3',   // Teknologihistorie
  'tof-1-5-1': 'tof-1-4',   // Innovasjon og design
  'tof-1-3-1': 'tof-1-5',   // Elektronikk og mikrokontrollere
  'tof-1-4-1': 'tof-1-6',   // Programmering og styresystemer
  'tof-1-7-1': 'tof-1-7',   // Energi og bærekraft
  'tof-1-5-5': 'tof-1-8',   // Materialer og konstruksjon
  'tof-1-8-1': 'tof-1-9',   // Prosjektarbeid
  'tof-1-8-4': 'tof-1-10',  // Presentasjon og formidling

  // Rettslære 1 (10 kapitler med innhold)
  'rettslaere-1-1-1': 'rettslaere-1-1',   // Rettssystemets oppbygging
  'rettslaere-1-2-1': 'rettslaere-1-2',   // Rettskilder og lovtolkning
  'rettslaere-1-8-1': 'rettslaere-1-3',   // Menneskerettigheter
  'rettslaere-1-6-1': 'rettslaere-1-4',   // Avtalerett
  'rettslaere-1-6-4': 'rettslaere-1-5',   // Kjøpsrett og forbrukerrett
  'rettslaere-1-7-6': 'rettslaere-1-6',   // Erstatningsrett
  'rettslaere-1-7-1': 'rettslaere-1-7',   // Strafferett grunnleggende
  'rettslaere-1-5-1': 'rettslaere-1-8',   // Arbeidsrett
  'rettslaere-1-3-1': 'rettslaere-1-9',   // Familie- og arverett
  'rettslaere-1-8-5': 'rettslaere-1-10',  // Rettsprosess og konfliktløsning
};

// ============================================================================
// Hjelpefunksjoner
// ============================================================================

export function getChapterContent(chapterId: string): TextbookChapter | undefined {
  const chapter = ALL_CHAPTERS[chapterId] || ALL_CHAPTERS[CHAPTER_ID_ALIASES[chapterId]];
  if (!chapter) return undefined;

  // Adapter: konverter gammel sections-format til content-format
  // Mange innholdsfiler bruker { sections: [...], exercises: [...] } i stedet for { content: [...] }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chapterAny = chapter as any;
  if (!chapter.content && chapterAny.sections) {
    const sections = chapterAny.sections as Array<Record<string, unknown>>;
    const contentBlocks: TextbookContentBlock[] = sections.map((section, i) => {
      const block: TextbookContentBlock = {
        id: (section.id as string) || `${chapter.id}-text-${i + 1}`,
        type: 'text' as const,
        content: section.content as string,
      };
      if (section.title) {
        (block as any).title = section.title as string;
      }
      return block;
    });

    // Flytt exercises inn som exercise-blokker i content
    if (chapter.exercises?.length) {
      for (const ex of chapter.exercises) {
        contentBlocks.push({
          id: ex.id,
          type: 'exercise' as const,
          exercise: ex,
        });
      }
    }

    chapter.content = contentBlocks;
  }

  return chapter;
}

export function getAllChapterIds(): string[] {
  return Object.keys(ALL_CHAPTERS);
}

export function isChapterImplemented(chapterId: string): boolean {
  return chapterId in ALL_CHAPTERS || chapterId in CHAPTER_ID_ALIASES;
}

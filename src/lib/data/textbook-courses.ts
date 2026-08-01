/**
 * Tekstbok kursdata
 *
 * Definerer alle tilgjengelige kurs og deres kapitler.
 * Kursdata er splittet i separate filer per nivå/gruppe.
 */

import type { TextbookCourse, TextbookChapterMeta } from '@/lib/types/textbook';
import type { Malform } from './textbook-content';

// 5. klasse (unntatt matematikk)
import {
  COURSE_NORSK_5,
  COURSE_ENGELSK_5,
  COURSE_NATURFAG_5,
  COURSE_SAMFUNNSFAG_5,
  COURSE_KRLE_5,
  COURSE_KUNST_5,
  COURSE_MUSIKK_5,
  COURSE_MAT_5,
  COURSE_KROPPSOVING_5,
} from './textbook-courses-5';

// 6. klasse (unntatt matematikk)
import {
  COURSE_NORSK_6,
  COURSE_ENGELSK_6,
  COURSE_NATURFAG_6,
  COURSE_SAMFUNNSFAG_6,
  COURSE_KRLE_6,
  COURSE_KUNST_6,
  COURSE_MUSIKK_6,
  COURSE_MAT_6,
  COURSE_KROPPSOVING_6,
} from './textbook-courses-6';

// 7. klasse (unntatt matematikk)
import {
  COURSE_NORSK_7,
  COURSE_ENGELSK_7,
  COURSE_NATURFAG_7,
  COURSE_SAMFUNNSFAG_7,
  COURSE_KRLE_7,
  COURSE_KUNST_7,
  COURSE_MUSIKK_7,
  COURSE_MAT_7,
  COURSE_KROPPSOVING_7,
} from './textbook-courses-7';

// 8. klasse (unntatt matematikk)
import {
  COURSE_NORSK_8,
  COURSE_ENGELSK_8,
  COURSE_NATURFAG_8,
  COURSE_SAMFUNNSFAG_8,
  COURSE_KRLE_8,
  COURSE_KUNST_8,
  COURSE_MUSIKK_8,
  COURSE_MAT_8,
  COURSE_KROPPSOVING_8,
} from './textbook-courses-8';

// 9. klasse (unntatt matematikk)
import {
  COURSE_NORSK_9,
  COURSE_ENGELSK_9,
  COURSE_SAMFUNNSFAG_9,
  COURSE_KRLE_9,
  COURSE_NATURFAG_9,
  COURSE_KUNST_9,
  COURSE_MUSIKK_9,
  COURSE_MAT_9,
  COURSE_KROPPSOVING_9,
} from './textbook-courses-9';

// 10. klasse (unntatt matematikk)
import {
  COURSE_NATURFAG_10,
  COURSE_NORSK_10,
  COURSE_ENGELSK_10,
  COURSE_SAMFUNNSFAG_10,
  COURSE_KRLE_10,
  COURSE_KUNST_10,
  COURSE_MUSIKK_10,
  COURSE_MAT_10,
  COURSE_KROPPSOVING_10,
} from './textbook-courses-10';

// Matematikk (alle nivåer)
import {
  COURSE_1T,
  COURSE_5,
  COURSE_6,
  COURSE_7,
  COURSE_8,
  COURSE_9,
  COURSE_10,
  COURSE_1P,
  COURSE_S1,
  COURSE_S2,
  COURSE_2P,
  COURSE_2PY,
  COURSE_R1,
  COURSE_R2,
  COURSE_BI_OKONOMI,
} from './textbook-courses-matte';

// Høyskole
import { COURSE_ECON1310, COURSE_JUS1111, COURSE_STV1100, COURSE_EXPHIL03, COURSE_PSY1010, COURSE_ECON1210, COURSE_MAT1100, COURSE_TMA4245, COURSE_MAT1110, COURSE_STK1110, COURSE_STK1100, COURSE_MAT1120, COURSE_MAT111_UIB, COURSE_TMA4110, COURSE_FYS1001, COURSE_ECON2220, COURSE_ECON2310, COURSE_IN1900, COURSE_ECON1100, COURSE_IN1020, COURSE_IN1000, COURSE_FIL1001, COURSE_FYS1100, COURSE_SOSANT1000, COURSE_LING1100, COURSE_TDT4110, COURSE_MED1100, COURSE_IN2010, COURSE_TMA4135, COURSE_MA1301, COURSE_TFY4115, COURSE_SGO1001, COURSE_PSYC1202, COURSE_STV1400, COURSE_STV1200 } from './textbook-courses-hoyskole';

// VG1 fellesfag
import {
  COURSE_NORSK_VG1,
  COURSE_ENGELSK_VG1,
  COURSE_SAMFUNNSKUNNSKAP,
  COURSE_GEOGRAFI,
  COURSE_NAT_VG1,
  COURSE_FYS1,
  COURSE_KJEMI1,
  COURSE_KROPPSOVING_VG1,
} from './textbook-courses-vg1';

// VG2 fellesfag
import {
  COURSE_NORSK_VG2,
  COURSE_HISTORIE_VG2,
  COURSE_KJEMI2,
  COURSE_FYSIKK2,
  COURSE_KROPPSOVING_VG2,
} from './textbook-courses-vg2';

// VG3 fellesfag
import {
  COURSE_NORSK_VG3,
  COURSE_HISTORIE_VG3,
  COURSE_RELIGION_ETIKK,
  COURSE_KROPPSOVING_VG3,
} from './textbook-courses-vg3';

// Fremmedspråk
import {
  COURSE_SPANSK_1,
  COURSE_SPANSK_2,
  COURSE_SPANSK_3,
  COURSE_TYSK_1,
  COURSE_TYSK_2,
  COURSE_TYSK_3,
  COURSE_FRANSK_1,
  COURSE_FRANSK_2,
  COURSE_FRANSK_3,
} from './textbook-courses-spraak';

// Valgfag
import {
  COURSE_IT_1,
  COURSE_IT_2,
  COURSE_BIOLOGI_1,
  COURSE_BIOLOGI_2,
  COURSE_PSYKOLOGI_1,
  COURSE_PSYKOLOGI_2,
  COURSE_GEOFAG_1,
  COURSE_GEOFAG_2,
  COURSE_TOF_1,
  COURSE_TOF_2,
  COURSE_SOSIOLOGI,
  COURSE_RETTSLAERE_1,
  COURSE_RETTSLAERE_2,
  COURSE_OKONOMISTYRING,
  COURSE_MARKEDSFORING,
  COURSE_KOMKULT_1,
  COURSE_KOMKULT_2,
  COURSE_KOMKULT_3,
  COURSE_MEDIEINFO_1,
  COURSE_MEDIEINFO_2,
  COURSE_POLITIKK_MENNESKERETT,
  COURSE_ENTREBED_1,
  COURSE_ENTREBED_2,
  COURSE_TRENING_1,
  COURSE_TRENING_2,
  COURSE_TRENING_3,
  COURSE_INT_ENGELSK,
  COURSE_SAMF_ENGELSK,
  COURSE_FILOSOFI_ETIKK,
  COURSE_SAMFOKONOMI_1,
  COURSE_SAMFOKONOMI_2,
  COURSE_OKONOMI_LEDELSE,
  COURSE_REGNSKAP_REVISJON,
  COURSE_OKONOMI_DRIFT,
  COURSE_SIKKERHETSFAG,
} from './textbook-courses-valgfag';

// Yrkesfag
import {
  COURSE_HELSEOPPVEKST_VG1,
  COURSE_HELSEOPPVEKST_VG2,
  COURSE_HELSEOPPVEKST_VG3,
  COURSE_ELEKTRO_DATA_VG1,
  COURSE_TIF_VG1,
  COURSE_BYGG_ANLEGG_VG1,
  COURSE_RESTAURANT_MAT_VG1,
  COURSE_NATURBRUK_VG1,
  COURSE_IM_VG1,
  COURSE_SALG_SERVICE_VG1,
  COURSE_HANDVERK_DESIGN_VG1,
  COURSE_FRISOR_BLOMSTER_VG1,
} from './textbook-courses-yrkesfag';

// ============================================================================
// TEXTBOOK_COURSES - Samler alle kurs i én array
// ============================================================================

export const TEXTBOOK_COURSES: TextbookCourse[] = [
  COURSE_5,
  COURSE_NORSK_5,
  COURSE_ENGELSK_5,
  COURSE_NATURFAG_5,
  COURSE_SAMFUNNSFAG_5,
  COURSE_KRLE_5,
  COURSE_KUNST_5,
  COURSE_MUSIKK_5,
  COURSE_MAT_5,
  COURSE_KROPPSOVING_5,
  COURSE_6,
  COURSE_NORSK_6,
  COURSE_ENGELSK_6,
  COURSE_NATURFAG_6,
  COURSE_SAMFUNNSFAG_6,
  COURSE_KRLE_6,
  COURSE_KUNST_6,
  COURSE_MUSIKK_6,
  COURSE_MAT_6,
  COURSE_KROPPSOVING_6,
  COURSE_7,
  COURSE_NORSK_7,
  COURSE_ENGELSK_7,
  COURSE_NATURFAG_7,
  COURSE_SAMFUNNSFAG_7,
  COURSE_KRLE_7,
  COURSE_KUNST_7,
  COURSE_MUSIKK_7,
  COURSE_MAT_7,
  COURSE_KROPPSOVING_7,
  COURSE_8,
  COURSE_NORSK_8,
  COURSE_ENGELSK_8,
  COURSE_NATURFAG_8,
  COURSE_SAMFUNNSFAG_8,
  COURSE_KRLE_8,
  COURSE_KUNST_8,
  COURSE_MUSIKK_8,
  COURSE_MAT_8,
  COURSE_KROPPSOVING_8,
  COURSE_NORSK_9,
  COURSE_ENGELSK_9,
  COURSE_SAMFUNNSFAG_9,
  COURSE_KRLE_9,
  COURSE_NATURFAG_9,
  COURSE_KUNST_9,
  COURSE_MUSIKK_9,
  COURSE_MAT_9,
  COURSE_KROPPSOVING_9,
  COURSE_NORSK_10,
  COURSE_ENGELSK_10,
  COURSE_SAMFUNNSFAG_10,
  COURSE_KRLE_10,
  COURSE_KUNST_10,
  COURSE_MUSIKK_10,
  COURSE_MAT_10,
  COURSE_KROPPSOVING_10,
  COURSE_SPANSK_1,
  COURSE_TYSK_1,
  COURSE_FRANSK_1,
  COURSE_9,
  COURSE_10,
  COURSE_1P,
  COURSE_1T,
  COURSE_2P,
  COURSE_2PY,
  COURSE_S1,
  COURSE_S2,
  COURSE_R1,
  COURSE_R2,
  COURSE_BI_OKONOMI,
  COURSE_ECON1310,
  COURSE_JUS1111,
  COURSE_STV1100,
  COURSE_EXPHIL03,
  COURSE_PSY1010,
  COURSE_ECON1210,
  COURSE_MAT1100,
  COURSE_TMA4245,
  COURSE_MAT1110,
  COURSE_STK1110,
  COURSE_STK1100,
  COURSE_MAT1120,
  COURSE_MAT111_UIB,
  COURSE_TMA4110,
  COURSE_FYS1001,
  COURSE_ECON2220,
  COURSE_ECON2310,
  COURSE_IN1900,
  COURSE_ECON1100,
  COURSE_IN1020,
  COURSE_IN1000,
  COURSE_FIL1001,
  COURSE_FYS1100,
  COURSE_SOSANT1000,
  COURSE_LING1100,
  COURSE_TDT4110,
  COURSE_MED1100,
  COURSE_IN2010,
  COURSE_TMA4135,
  COURSE_MA1301,
  COURSE_TFY4115,
  COURSE_SGO1001,
  COURSE_PSYC1202,
  COURSE_STV1400,
  COURSE_STV1200,
  COURSE_NATURFAG_10,
  COURSE_NAT_VG1,
  COURSE_KJEMI1,
  COURSE_KJEMI2,
  COURSE_FYS1,
  COURSE_FYSIKK2,
  COURSE_NORSK_VG1,
  COURSE_ENGELSK_VG1,
  COURSE_SAMFUNNSKUNNSKAP,
  COURSE_GEOGRAFI,
  COURSE_KROPPSOVING_VG1,
  COURSE_NORSK_VG2,
  COURSE_HISTORIE_VG2,
  COURSE_HISTORIE_VG3,
  COURSE_KROPPSOVING_VG2,
  COURSE_NORSK_VG3,
  COURSE_RELIGION_ETIKK,
  COURSE_KROPPSOVING_VG3,
  // Valgfag VG1/VG2/VG3
  COURSE_IT_1,
  COURSE_IT_2,
  COURSE_BIOLOGI_1,
  COURSE_BIOLOGI_2,
  COURSE_PSYKOLOGI_1,
  COURSE_PSYKOLOGI_2,
  COURSE_GEOFAG_1,
  COURSE_GEOFAG_2,
  COURSE_TOF_1,
  COURSE_TOF_2,
  COURSE_SOSIOLOGI,
  COURSE_RETTSLAERE_1,
  COURSE_RETTSLAERE_2,
  COURSE_OKONOMISTYRING,
  COURSE_MARKEDSFORING,
  COURSE_SPANSK_2,
  COURSE_SPANSK_3,
  COURSE_TYSK_2,
  COURSE_TYSK_3,
  COURSE_FRANSK_2,
  COURSE_FRANSK_3,
  // Nye valgfag
  COURSE_KOMKULT_1,
  COURSE_KOMKULT_2,
  COURSE_KOMKULT_3,
  COURSE_MEDIEINFO_1,
  COURSE_MEDIEINFO_2,
  COURSE_POLITIKK_MENNESKERETT,
  COURSE_ENTREBED_1,
  COURSE_ENTREBED_2,
  COURSE_TRENING_1,
  COURSE_TRENING_2,
  COURSE_TRENING_3,
  COURSE_INT_ENGELSK,
  COURSE_SAMF_ENGELSK,
  COURSE_FILOSOFI_ETIKK,
  // Økonomi- og ledelsesfag
  COURSE_SAMFOKONOMI_1,
  COURSE_SAMFOKONOMI_2,
  COURSE_OKONOMI_LEDELSE,
  COURSE_REGNSKAP_REVISJON,
  COURSE_OKONOMI_DRIFT,
  // Sikkerhetsfag
  COURSE_SIKKERHETSFAG,
  // Helse- og oppvekstfag
  COURSE_HELSEOPPVEKST_VG1,
  COURSE_HELSEOPPVEKST_VG2,
  COURSE_HELSEOPPVEKST_VG3,
  // Elektro og datateknologi
  COURSE_ELEKTRO_DATA_VG1,
  // Teknologi- og industrifag
  COURSE_TIF_VG1,
  // Bygg- og anleggsteknikk
  COURSE_BYGG_ANLEGG_VG1,
  // Restaurant- og matfag
  COURSE_RESTAURANT_MAT_VG1,
  // Naturbruk
  COURSE_NATURBRUK_VG1,
  // Informasjonsteknologi og medieproduksjon
  COURSE_IM_VG1,
  // Salg, service og reiseliv
  COURSE_SALG_SERVICE_VG1,
  // Håndverk, design og produktutvikling
  COURSE_HANDVERK_DESIGN_VG1,
  // Frisør, blomster, interiør og eksponeringsdesign
  COURSE_FRISOR_BLOMSTER_VG1,
];

// ============================================================================
// Hjelpefunksjoner
// ============================================================================

export function getCourse(courseId: string): TextbookCourse | undefined {
  return TEXTBOOK_COURSES.find((c) => c.id === courseId);
}

// ----------------------------------------------------------------------------
// Nynorsk chapterMeta (nav-titlar) frå meta/_all.nn.json — lazy, fs-basert.
// Overlay title/subtitle/description/topics; resten (number/competenceGoals m.m.)
// står som i bokmål-metadataen.
// ----------------------------------------------------------------------------
type MetaNn = { title?: string; subtitle?: string; description?: string; topics?: string[] };
let metaNn: Record<string, MetaNn> | null = null;
function getMetaNn(): Record<string, MetaNn> {
  if (!metaNn) {
    try {
      // Lazy, server-only innlasting. `eval('require')` hindrar at bundleren
      // prøver å resolve 'fs'/'path' i klient-bundelen (denne fila vert importert
      // av klientkomponentar via getCourse o.l.).
      const nodeRequire = eval('require') as NodeRequire;
      const fs = nodeRequire('fs') as typeof import('fs');
      const path = nodeRequire('path') as typeof import('path');
      const p = path.join(process.cwd(), 'src', 'lib', 'data', 'meta', '_all.nn.json');
      metaNn = JSON.parse(fs.readFileSync(p, 'utf-8'));
    } catch {
      metaNn = {};
    }
  }
  return metaNn!;
}

export function getChapterMeta(
  courseId: string,
  chapterId: string,
  malform: Malform = 'nb',
): TextbookChapterMeta | undefined {
  const course = getCourse(courseId);
  let meta = course?.chapters.find((c) => c.id === chapterId);
  // Fallback: narrativ-kapittel som ikke har en egen metadata-oppføring. Syntetiser
  // meta fra originalkapittelet som peker hit via linkedChapterId, slik at både
  // «Lesevennlig versjon»-toggle og selve narrativ-ruten virker — uten å måtte
  // duplisere en metadata-oppføring for hvert eneste narrativ-kapittel.
  if (!meta && chapterId.endsWith('-narrativ')) {
    const original = course?.chapters.find((c) => c.linkedChapterId === chapterId);
    if (original) {
      meta = {
        ...original,
        id: chapterId,
        subtitle: 'Lesevennlig versjon',
        linkedChapterId: original.id,
        isNarrativeVersion: true,
      };
    }
  }
  if (!meta || malform !== 'nn') return meta;
  const nn = getMetaNn()[chapterId];
  if (!nn) return meta;
  return {
    ...meta,
    ...(nn.title ? { title: nn.title } : {}),
    ...(nn.subtitle ? { subtitle: nn.subtitle } : {}),
    ...(nn.description ? { description: nn.description } : {}),
    ...(nn.topics ? { topics: nn.topics } : {}),
  };
}

export function getNextChapter(courseId: string, currentChapterId: string): string | undefined {
  const course = getCourse(courseId);
  if (!course) return undefined;

  const currentIndex = course.chapters.findIndex((c) => c.id === currentChapterId);
  if (currentIndex === -1 || currentIndex >= course.chapters.length - 1) return undefined;

  return course.chapters[currentIndex + 1].id;
}

export function getPrevChapter(courseId: string, currentChapterId: string): string | undefined {
  const course = getCourse(courseId);
  if (!course) return undefined;

  const currentIndex = course.chapters.findIndex((c) => c.id === currentChapterId);
  if (currentIndex <= 0) return undefined;

  return course.chapters[currentIndex - 1].id;
}

/**
 * Henter forutsetningene (prerequisites) til et kapittel som meta-objekter.
 * Returnerer tom liste hvis kapittelet ikke har prerequisites eller ikke finnes.
 */
export function getChapterPrerequisites(courseId: string, chapterId: string) {
  const course = getCourse(courseId);
  if (!course) return [];
  const chapter = course.chapters.find((c) => c.id === chapterId);
  if (!chapter?.prerequisites) return [];

  return chapter.prerequisites
    .map((preId) => course.chapters.find((c) => c.id === preId))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);
}

/**
 * Henter kapitler som har dette kapittelet som prerequisite (invers-graf).
 * Brukes til å vise "Brukes videre i ..."-seksjonen.
 */
export function getDependentChapters(courseId: string, chapterId: string) {
  const course = getCourse(courseId);
  if (!course) return [];

  return course.chapters.filter((c) => c.prerequisites?.includes(chapterId));
}

export function getChaptersBySection(courseId: string): Map<string, typeof COURSE_1T.chapters> {
  const course = getCourse(courseId);
  if (!course) return new Map();

  const sections = new Map<string, typeof course.chapters>();

  course.chapters.forEach((chapter) => {
    const section = chapter.number.split('.')[0];
    if (!sections.has(section)) {
      sections.set(section, []);
    }
    sections.get(section)!.push(chapter);
  });

  return sections;
}

// ============================================================================
// Seksjonsnavn (SECTION_NAMES)
// ============================================================================

// Seksjonsnavn for Fysikk 2
export const SECTION_NAMES_FYSIKK2: Record<string, string> = {
  '1': 'Mekanikk i to dimensjoner',
  '2': 'Gravitasjon',
  '3': 'Elektriske felt',
  '4': 'Magnetisme',
  '5': 'Induksjon',
  '6': 'Relativitetsteori',
  '7': 'Kvantefysikk',
  '8': 'Eksperimentelt arbeid',
};

// Seksjonsnavn for 8. klasse
export const SECTION_NAMES_8: Record<string, string> = {
  '1': 'Tall og tallforståelse',
  '2': 'Algebra',
  '3': 'Geometri',
  '4': 'Funksjoner og grafer',
  '5': 'Statistikk og sannsynlighet',
};

// Seksjonsnavn for 9. klasse
export const SECTION_NAMES_9: Record<string, string> = {
  '1': 'Tall og algebra',
  '2': 'Algebra',
  '3': 'Funksjoner',
  '4': 'Geometri',
  '5': 'Økonomi',
  '6': 'Statistikk og sannsynlighet',
};

// Seksjonsnavn for 10. klasse
export const SECTION_NAMES_10: Record<string, string> = {
  '1': 'Tall og algebra',
  '2': 'Likninger og ulikheter',
  '3': 'Funksjoner',
  '4': 'Geometri',
  '5': 'Sannsynlighet og statistikk',
  '6': 'Økonomi',
};

// Seksjonsnavn for 1T
export const SECTION_NAMES_1T: Record<string, string> = {
  '1': 'Tall og algebra',
  '2': 'Likninger',
  '3': 'Funksjoner',
  '4': 'Likningssett og ulikheter',
  '5': 'Geometri og trigonometri',
  '6': 'Bevis og argumentasjon',
  '7': 'Vekstfart og derivasjon',
  '8': 'Modellering og regresjon',
};

// Seksjonsnavn for 1P
export const SECTION_NAMES_1P: Record<string, string> = {
  '1': 'Tall og økonomi',
  '2': 'Algebra og likninger',
  '3': 'Funksjoner',
  '4': 'Geometri og måling',
  '5': 'Statistikk',
  '6': 'Sannsynlighet',
  '7': 'Modellering og funksjoner',
  '8': 'Personlig økonomi',
  '9': 'Algoritmisk tenkning og programmering',
};

// Seksjonsnavn for S1
export const SECTION_NAMES_S1: Record<string, string> = {
  '1': 'Algebra',
  '2': 'Funksjoner',
  '3': 'Derivasjon',
  '4': 'Økonomi',
  '5': 'Sannsynlighet',
  '6': 'Statistikk',
  '7': 'Regresjon og korrelasjon',
  '8': 'Modellering og anvendelser',
};

// Seksjonsnavn for S2
export const SECTION_NAMES_S2: Record<string, string> = {
  '1': 'Integrasjon',
  '2': 'Differensiallikninger',
  '3': 'Funksjonsdrøfting',
  '4': 'Statistikk og sannsynlighet',
  '5': 'Statistisk inferens',
  '6': 'Regresjon og korrelasjon',
  '7': 'Rekker og serier',
  '8': 'Økonomi og matematisk modellering',
  '9': 'Følger og programmering',
};

// Seksjonsnavn for 2P
export const SECTION_NAMES_2P: Record<string, string> = {
  '1': 'Økonomi',
  '2': 'Funksjoner i praksis',
  '3': 'Statistikk',
  '4': 'Sannsynlighet',
  '5': 'Geometri i praksis',
  '6': 'Modellering',
  '7': 'Algebra',
  '8': 'Måling og enheter',
  '9': 'Tallregning',
};

// Seksjonsnavn for 2P-Y
export const SECTION_NAMES_2PY: Record<string, string> = {
  '1': 'Økonomi i hverdagen',
  '2': 'Funksjoner og grafer',
  '3': 'Geometri og beregninger',
  '4': 'Statistikk',
  '5': 'Sannsynlighet',
  '6': 'Yrkesfaglige beregninger',
  '7': 'Måling og enheter',
  '8': 'Problemløsning i praksis',
  '9': 'Algebra og likninger',
  '10': 'Personlig økonomi',
  '11': 'Utvidet statistikk',
  '12': 'Tallforståelse og tallsystemer',
};

// Seksjonsnavn for R1
export const SECTION_NAMES_R1: Record<string, string> = {
  '1': 'Algebra',
  '2': 'Funksjoner',
  '3': 'Grenseverdi og kontinuitet',
  '4': 'Derivasjon',
  '5': 'Vekstmodeller og modellering',
  '6': 'Vektorer og parameterframstilling',
  '7': 'Trigonometri',
  '8': 'Kombinatorikk og sannsynlighet',
  '9': 'Bevisføring',
};

// Seksjonsnavn for R2
export const SECTION_NAMES_R2: Record<string, string> = {
  '1': 'Følger og rekker',
  '2': 'Integralregning',
  '3': 'Integrasjonsmetoder',
  '4': 'Trigonometri',
  '5': 'Vektorer i rommet',
  '6': 'Kurver og modellering',
};

// Seksjonsnavn for BI Økonomi
export const SECTION_NAMES_BI_OKONOMI: Record<string, string> = {
  '1': 'Algebra',
  '2': 'Likninger',
  '3': 'Funksjoner',
  '4': 'Finansmatematikk',
  '5': 'Derivasjon',
  '6': 'Økonomiske funksjoner og marginalanalyse',
};

// Seksjonsnavn for Naturfag 10. klasse
export const SECTION_NAMES_NATURFAG_10: Record<string, string> = {
  '1': 'Naturvitenskapelige praksiser',
  '2': 'Kjemi',
  '3': 'Fysikk',
  '4': 'Jorda og livet på jorda',
  '5': 'Kropp og helse',
  '6': 'Teknologi og programmering',
};

// Seksjonsnavn for Naturfag VG1
export const SECTION_NAMES_NAT_VG1: Record<string, string> = {
  '1': 'Naturvitenskapens tenkemåte',
  '2': 'Stråling og bølger',
  '3': 'Universet',
  '4': 'Kjemi - stoffer og bindinger',
  '5': 'Miljø og bærekraft',
  '6': 'Helse og livsstil',
  '7': 'Arv, evolusjon og bioteknologi',
};

// Seksjonsnavn for Samfunnskunnskap VG1-VG2 (LK20-rekkefølge)
export const SECTION_NAMES_SAMFUNNSKUNNSKAP: Record<string, string> = {
  '1': 'Individ og samfunn',
  '2': 'Identitet og mangfold',
  '3': 'Arbeidsliv og rettigheter',
  '4': 'Demokrati og medborgerskap',
  '5': 'Politiske ideologier og Det norske politiske systemet',
  '6': 'Menneskerettigheter',
  '7': 'Medier og ytringsfrihet',
  '8': 'Økonomi og velferdsstat',
  '9': 'Bærekraftig utvikling',
  '10': 'Internasjonale forhold (del 1)',
  '11': 'Internasjonale forhold (del 2)',
};

// Seksjonsnavn for Historie VG2
export const SECTION_NAMES_HISTORIE_VG2: Record<string, string> = {
  '1': 'Historisk metode',
  '2': 'Å arbeide med historie',
  '3': 'Antikken',
  '4': 'Middelalderen',
  '5': 'Renessanse og reformasjon',
  '6': 'Opplysningstid og revolusjoner',
  '7': 'Industrialisering og samfunnsendring',
  '8': 'Nasjonalisme og nasjonsbygging',
  '9': 'Imperialisme og kolonialisme',
  '10': 'Kulturmøter og kommunikasjon',
};

// Seksjonsnavn for Historie VG3
export const SECTION_NAMES_HISTORIE_VG3: Record<string, string> = {
  '11': 'Første verdenskrig',
  '12': 'Mellomkrigstiden',
  '13': 'Andre verdenskrig og Holocaust',
  '14': 'Den kalde krigen',
  '15': 'Velferdsstaten Norge',
  '16': 'Norsk og samisk identitet',
  '17': 'Globalisering og samtidshistorie',
};

// Seksjonsnavn for Norsk VG1
export const SECTION_NAMES_NORSK_VG1: Record<string, string> = {
  '1': 'Retorikk og sakprosa',
  '2': 'Skjønnlitteratur',
  '3': 'Litteraturhistorie',
  '4': 'Språk og identitet',
  '5': 'Skriving og kommunikasjon',
  '6': 'Sammensatte tekster og medier',
  '7': 'Samisk språk og kultur',
  '8': 'Grammatikk og rettskriving',
};

// Seksjonsnavn for Engelsk VG1
export const SECTION_NAMES_ENGELSK_VG1: Record<string, string> = {
  '1': 'Language Learning and Communication',
  '2': 'Oral Communication',
  '3': 'Grammar and Text Structure',
  '4': 'Reading and Literature',
  '5': 'Non-fiction and Critical Reading',
  '6': 'Writing Skills',
  '7': 'English as a World Language',
  '8': 'The United Kingdom',
  '9': 'The United States',
  '10': 'Other English-speaking Countries',
  '11': 'Cultural Expressions',
  '12': 'Exam Preparation',
};

// Seksjonsnavn for Kjemi 1
export const SECTION_NAMES_KJEMI1: Record<string, string> = {
  '1': 'Atomets oppbygging',
  '2': 'Atommodeller og spektroskopi',
  '3': 'Kjemiske bindinger',
  '4': 'Kjemiske reaksjoner',
  '5': 'Støkiometri',
  '6': 'Termokjemi',
  '7': 'Kjemisk likevekt',
  '8': 'Løsninger',
  '9': 'Syrer og baser',
  '10': 'Organisk kjemi',
  '11': 'Miljøkjemi og anvendt kjemi',
  '12': 'Laboratoriearbeid',
};

// Seksjonsnavn for Kjemi 2
export const SECTION_NAMES_KJEMI2: Record<string, string> = {
  '1': 'Grunnleggende kjemiske prinsipper',
  '2': 'Kjemisk termodynamikk',
  '3': 'Kjemisk likevekt',
  '4': 'Syrer og baser',
  '5': 'Løselighet og fellingsreaksjoner',
  '6': 'Elektrokjemi',
  '7': 'Kjemisk kinetikk',
  '8': 'Organisk kjemi',
  '9': 'Analytisk kjemi',
  '10': 'Biokjemi og bærekraftig kjemi',
};

// Seksjonsnavn for Fysikk 1
export const SECTION_NAMES_FYSIKK1: Record<string, string> = {
  '1': 'Fysikkens metoder',
  '2': 'Bevegelse',
  '3': 'Krefter',
  '4': 'Energi',
  '5': 'Varme og termofysikk',
  '6': 'Elektrisitet',
};

// Hjelpefunksjon for å hente seksjonsnavn basert på kurs
export function getSectionNames(courseId: string): Record<string, string> {
  // Generell regel: kurs kan definere seksjonstitler direkte i metadata (sectionNames).
  // De hardkodede SECTION_NAMES_*-mappene under er legacy for eldre kurs.
  const course = getCourse(courseId);
  if (course?.sectionNames) {
    return course.sectionNames;
  }
  switch (courseId) {
    case '8':
      return SECTION_NAMES_8;
    case '9':
      return SECTION_NAMES_9;
    case '10':
      return SECTION_NAMES_10;
    case '1t':
      return SECTION_NAMES_1T;
    case '1p':
      return SECTION_NAMES_1P;
    case '2p':
      return SECTION_NAMES_2P;
    case '2py':
      return SECTION_NAMES_2PY;
    case 's1':
      return SECTION_NAMES_S1;
    case 's2':
      return SECTION_NAMES_S2;
    case 'r1':
      return SECTION_NAMES_R1;
    case 'r2':
      return SECTION_NAMES_R2;
    case 'bi-okonomi':
      return SECTION_NAMES_BI_OKONOMI;
    case 'naturfag-10':
      return SECTION_NAMES_NATURFAG_10;
    case 'nat-vg1':
      return SECTION_NAMES_NAT_VG1;
    case 'fysikk2':
      return SECTION_NAMES_FYSIKK2;
    case 'samfunnskunnskap':
      return SECTION_NAMES_SAMFUNNSKUNNSKAP;
    case 'historie-vg2':
      return SECTION_NAMES_HISTORIE_VG2;
    case 'historie-vg3':
      return SECTION_NAMES_HISTORIE_VG3;
    case 'norsk-vg1':
      return SECTION_NAMES_NORSK_VG1;
    case 'engelsk-vg1':
      return SECTION_NAMES_ENGELSK_VG1;
    case 'kjemi1':
      return SECTION_NAMES_KJEMI1;
    case 'kjemi2':
      return SECTION_NAMES_KJEMI2;
    case 'fys1':
      return SECTION_NAMES_FYSIKK1;
    default:
      return {};
  }
}

/**
 * Generisk Quiz Data System
 *
 * Flervalgsoppgaver for "Test deg selv"-funksjonen for alle lærebøker.
 * Første alternativ er alltid riktig svar (vil bli shufflet ved visning).
 */

import * as fs from 'fs';
import * as path from 'path';
import { getChapterContent } from './textbook-content';
import type { Malform } from './textbook-content';

export interface QuizQuestion {
  question: string;
  options: string[];  // First option is always correct
  explanation?: string;
}

// ----------------------------------------------------------------------------
// Nynorsk-quiz lastast lazy frå quiz/_all.nn.json (sidecar bygd av combine-quiz).
// Fell tilbake til bokmål dersom nn-versjon manglar.
// ----------------------------------------------------------------------------
let quizDataNn: Record<string, QuizQuestion[]> | null = null;
function getQuizDataNn(): Record<string, QuizQuestion[]> {
  if (!quizDataNn) {
    try {
      const p = path.join(process.cwd(), 'src', 'lib', 'data', 'quiz', '_all.nn.json');
      quizDataNn = JSON.parse(fs.readFileSync(p, 'utf-8'));
    } catch {
      quizDataNn = {};
    }
  }
  return quizDataNn!;
}

// Quiz questions organized by chapter ID (works for all subjects)
// Import quiz data from per-subject files
import quizData_1p from './quiz-data-1p';
import quizData_biologi_1 from './quiz-data-biologi-1';
import quizData_1t from './quiz-data-1t';
import quizData_2p from './quiz-data-2p';
import quizData_2py from './quiz-data-2py';
import quizData_engelsk_5 from './quiz-data-engelsk-5';
import quizData_engelsk_6 from './quiz-data-engelsk-6';
import quizData_engelsk_7 from './quiz-data-engelsk-7';
import quizData_engelsk_8 from './quiz-data-engelsk-8';
import quizData_engelsk_9 from './quiz-data-engelsk-9';
import quizData_engelsk_10 from './quiz-data-engelsk-10';
import quizData_engelsk_vg1 from './quiz-data-engelsk-vg1';
import quizData_entrebed from './quiz-data-entrebed';
import quizData_filosofi_etikk from './quiz-data-filosofi-etikk';
import quizData_fransk_1 from './quiz-data-fransk-1';
import quizData_fransk_2 from './quiz-data-fransk-2';
import quizData_fransk_3 from './quiz-data-fransk-3';
import quizData_fysikk from './quiz-data-fysikk';
import quizData_geofag from './quiz-data-geofag';
import quizData_geografi from './quiz-data-geografi';
import quizData_helseoppvekst_vg1 from './quiz-data-helseoppvekst-vg1';
import quizData_helseoppvekst_vg2 from './quiz-data-helseoppvekst-vg2';
import quizData_helseoppvekst_vg3 from './quiz-data-helseoppvekst-vg3';
import quizData_historie from './quiz-data-historie';
import quizData_int_engelsk from './quiz-data-int-engelsk';
import quizData_it from './quiz-data-it';
import quizData_kjemi1 from './quiz-data-kjemi1';
import quizData_kjemi2 from './quiz-data-kjemi2';
import quizData_komkult from './quiz-data-komkult';
import quizData_krle_10 from './quiz-data-krle-10';
import quizData_krle_5 from './quiz-data-krle-5';
import quizData_krle_6 from './quiz-data-krle-6';
import quizData_krle_7 from './quiz-data-krle-7';
import quizData_krle_8 from './quiz-data-krle-8';
import quizData_krle_9 from './quiz-data-krle-9';
import quizData_kroppsoving_10 from './quiz-data-kroppsoving-10';
import quizData_kroppsoving_5 from './quiz-data-kroppsoving-5';
import quizData_kroppsoving_6 from './quiz-data-kroppsoving-6';
import quizData_kroppsoving_7 from './quiz-data-kroppsoving-7';
import quizData_kroppsoving_8 from './quiz-data-kroppsoving-8';
import quizData_kroppsoving_9 from './quiz-data-kroppsoving-9';
import quizData_kroppsoving_vg1 from './quiz-data-kroppsoving-vg1';
import quizData_kroppsoving_vg2 from './quiz-data-kroppsoving-vg2';
import quizData_kroppsoving_vg3 from './quiz-data-kroppsoving-vg3';
import quizData_kunst_10 from './quiz-data-kunst-10';
import quizData_kunst_9 from './quiz-data-kunst-9';
import quizData_kunst_8 from './quiz-data-kunst-8';
import quizData_kunst_7 from './quiz-data-kunst-7';
import quizData_kunst_6 from './quiz-data-kunst-6';
import quizData_kunst_5 from './quiz-data-kunst-5';
import quizData_markedsforing from './quiz-data-markedsforing';
import quizData_mat_og_helse_5 from './quiz-data-mat-og-helse-5';
import quizData_mat_og_helse_6 from './quiz-data-mat-og-helse-6';
import quizData_mat_og_helse_7 from './quiz-data-mat-og-helse-7';
import quizData_mat_og_helse_8 from './quiz-data-mat-og-helse-8';
import quizData_mat_og_helse_9 from './quiz-data-mat-og-helse-9';
import quizData_mat_og_helse_10 from './quiz-data-mat-og-helse-10';
import quizData_matematikk_5 from './quiz-data-matematikk-5';
import quizData_matematikk_6 from './quiz-data-matematikk-6';
import quizData_matematikk_7 from './quiz-data-matematikk-7';
import quizData_medieinfo from './quiz-data-medieinfo';
import quizData_musikk_10 from './quiz-data-musikk-10';
import quizData_musikk_5 from './quiz-data-musikk-5';
import quizData_musikk_6 from './quiz-data-musikk-6';
import quizData_musikk_7 from './quiz-data-musikk-7';
import quizData_musikk_8 from './quiz-data-musikk-8';
import quizData_musikk_9 from './quiz-data-musikk-9';
import quizData_naturfag_10 from './quiz-data-naturfag-10';
import quizData_naturfag_5 from './quiz-data-naturfag-5';
import quizData_naturfag_6 from './quiz-data-naturfag-6';
import quizData_naturfag_7 from './quiz-data-naturfag-7';
import quizData_naturfag_8 from './quiz-data-naturfag-8';
import quizData_naturfag_9 from './quiz-data-naturfag-9';
import quizData_naturfag_vg1 from './quiz-data-naturfag-vg1';
import quizData_norsk_5 from './quiz-data-norsk-5';
import quizData_norsk_6 from './quiz-data-norsk-6';
import quizData_norsk_7 from './quiz-data-norsk-7';
import quizData_norsk_8 from './quiz-data-norsk-8';
import quizData_norsk_9 from './quiz-data-norsk-9';
import quizData_norsk_10 from './quiz-data-norsk-10';
import quizData_norsk_vg1 from './quiz-data-norsk-vg1';
import quizData_norsk_vg2 from './quiz-data-norsk-vg2';
import quizData_norsk_vg3 from './quiz-data-norsk-vg3';
import quizData_politikk_menneskerett from './quiz-data-politikk-menneskerett';
import quizData_psykologi from './quiz-data-psykologi';
import quizData_regnskap_revisjon from './quiz-data-regnskap-revisjon';
import quizData_religion_etikk from './quiz-data-religion-etikk';
import quizData_rettslaere from './quiz-data-rettslære';
import quizData_r1 from './quiz-data-r1';
import quizData_r2 from './quiz-data-r2';
import quizData_s1 from './quiz-data-s1';
import quizData_s2 from './quiz-data-s2';
import quizData_samfunnsfag_5 from './quiz-data-samfunnsfag-5';
import quizData_samfunnsfag_6 from './quiz-data-samfunnsfag-6';
import quizData_samfunnsfag_7 from './quiz-data-samfunnsfag-7';
import quizData_samfunnsfag_8 from './quiz-data-samfunnsfag-8';
import quizData_samfunnsfag_9 from './quiz-data-samfunnsfag-9';
import quizData_samfunnsfag_10 from './quiz-data-samfunnsfag-10';
import quizData_samfunnskunnskap from './quiz-data-samfunnskunnskap';
import quizData_samfokonomi from './quiz-data-samføkonomi';
import quizData_sikkerhetsfag from './quiz-data-sikkerhetsfag';
import quizData_sosiologi from './quiz-data-sosiologi';
import quizData_spansk_1 from './quiz-data-spansk-1';
import quizData_spansk_2 from './quiz-data-spansk-2';
import quizData_spansk_3 from './quiz-data-spansk-3';
import quizData_tof from './quiz-data-tof';
import quizData_trening from './quiz-data-trening';
import quizData_tysk_1 from './quiz-data-tysk-1';
import quizData_tysk_2 from './quiz-data-tysk-2';
import quizData_tysk_3 from './quiz-data-tysk-3';
import quizData_okonomi_drift from './quiz-data-økonomi-drift';
import quizData_okonomi_ledelse from './quiz-data-økonomi-ledelse';
import quizData_byggAnleggVg1 from './quiz-data-bygg-anlegg-vg1';
import quizData_elektroDataVg1 from './quiz-data-elektro-data-vg1';
import quizData_frisor_blomster_vg1 from './quiz-data-frisor-blomster-vg1';
import quizData_im_vg1 from './quiz-data-im-vg1';
import quizData_naturbruk_vg1 from './quiz-data-naturbruk-vg1';
import quizData_restaurant_mat_vg1 from './quiz-data-restaurant-mat-vg1';
import quizDataSalgServiceVg1 from './quiz-data-salg-service-vg1';
import quizData_samf_engelsk from './quiz-data-samf-engelsk';
import quizData_tif_vg1 from './quiz-data-tif-vg1';
import quizData_biOkonomi from './quiz-data-bi-okonomi';
import quizData_econ1310 from './quiz-data-econ1310';
import quizData_jus1111 from './quiz-data-jus1111';
import quizData_biologi_2 from './quiz-data-biologi-2';
import quizData_it_1 from './quiz-data-it-1';
import quizData_it_2 from './quiz-data-it-2';
import quizData_komkult_1 from './quiz-data-komkult-1';
import quizData_komkult_2 from './quiz-data-komkult-2';
import quizData_komkult_3 from './quiz-data-komkult-3';
import quizData_matematikk_10 from './quiz-data-matematikk-10';
import quizData_matematikk_8 from './quiz-data-matematikk-8';
import quizData_matematikk_9 from './quiz-data-matematikk-9';
import quizData_medieinfo_1 from './quiz-data-medieinfo-1';
import quizData_medieinfo_2 from './quiz-data-medieinfo-2';
import quizData_okonomistyring from './quiz-data-okonomistyring';
import quizData_psykologi_1 from './quiz-data-psykologi-1';
import quizData_psykologi_2 from './quiz-data-psykologi-2';
import quizData_samfokonomi_2 from './quiz-data-samfokonomi-2';
import quizData_sosiologi_full from './quiz-data-sosiologi-full';
import quizData_tof_1 from './quiz-data-tof-1';
import quizData_tof_2 from './quiz-data-tof-2';
import quizData_trening_1 from './quiz-data-trening-1';
import quizData_trening_2 from './quiz-data-trening-2';
import quizData_trening_3 from './quiz-data-trening-3';
import quizData_handverk_design_vg1 from './quiz-data-handverk-design-vg1';
import quizData_samfokonomi_1 from './quiz-data-samfokonomi-1';
import quizData_stv1100 from './quiz-data-stv1100';
import quizData_exphil03 from './quiz-data-exphil03';
import quizData_psy1010 from './quiz-data-psy1010';
import quizData_econ1210 from './quiz-data-econ1210';
import quizData_mat1100 from './quiz-data-mat1100';
import quizData_tma4245 from './quiz-data-tma4245';
import quizData_mat1110 from './quiz-data-mat1110';
import quizData_mat1120 from './quiz-data-mat1120';

// Merged quiz data from all subject files
export const quizData: Record<string, QuizQuestion[]> = {
  ...quizData_1p,
  ...quizData_biologi_1,
  ...quizData_1t,
  ...quizData_2p,
  ...quizData_2py,
  ...quizData_engelsk_5,
  ...quizData_engelsk_6,
  ...quizData_engelsk_7,
  ...quizData_engelsk_8,
  ...quizData_engelsk_9,
  ...quizData_engelsk_10,
  ...quizData_engelsk_vg1,
  ...quizData_entrebed,
  ...quizData_filosofi_etikk,
  ...quizData_fransk_1,
  ...quizData_fransk_2,
  ...quizData_fransk_3,
  ...quizData_fysikk,
  ...quizData_geofag,
  ...quizData_geografi,
  ...quizData_helseoppvekst_vg1,
  ...quizData_helseoppvekst_vg2,
  ...quizData_helseoppvekst_vg3,
  ...quizData_historie,
  ...quizData_int_engelsk,
  ...quizData_it,
  ...quizData_kjemi1,
  ...quizData_kjemi2,
  ...quizData_komkult,
  ...quizData_krle_10,
  ...quizData_krle_5,
  ...quizData_krle_6,
  ...quizData_krle_7,
  ...quizData_krle_8,
  ...quizData_krle_9,
  ...quizData_kroppsoving_10,
  ...quizData_kroppsoving_5,
  ...quizData_kroppsoving_6,
  ...quizData_kroppsoving_7,
  ...quizData_kroppsoving_8,
  ...quizData_kroppsoving_9,
  ...quizData_kroppsoving_vg1,
  ...quizData_kroppsoving_vg2,
  ...quizData_kroppsoving_vg3,
  ...quizData_kunst_10,
  ...quizData_kunst_9,
  ...quizData_kunst_8,
  ...quizData_kunst_7,
  ...quizData_kunst_6,
  ...quizData_kunst_5,
  ...quizData_markedsforing,
  ...quizData_mat_og_helse_5,
  ...quizData_mat_og_helse_6,
  ...quizData_mat_og_helse_7,
  ...quizData_mat_og_helse_8,
  ...quizData_mat_og_helse_9,
  ...quizData_mat_og_helse_10,
  ...quizData_matematikk_5,
  ...quizData_matematikk_6,
  ...quizData_matematikk_7,
  ...quizData_medieinfo,
  ...quizData_musikk_10,
  ...quizData_musikk_5,
  ...quizData_musikk_6,
  ...quizData_musikk_7,
  ...quizData_musikk_8,
  ...quizData_musikk_9,
  ...quizData_naturfag_10,
  ...quizData_naturfag_5,
  ...quizData_naturfag_6,
  ...quizData_naturfag_7,
  ...quizData_naturfag_8,
  ...quizData_naturfag_9,
  ...quizData_naturfag_vg1,
  ...quizData_norsk_5,
  ...quizData_norsk_6,
  ...quizData_norsk_7,
  ...quizData_norsk_8,
  ...quizData_norsk_9,
  ...quizData_norsk_10,
  ...quizData_norsk_vg1,
  ...quizData_norsk_vg2,
  ...quizData_norsk_vg3,
  ...quizData_politikk_menneskerett,
  ...quizData_psykologi,
  ...quizData_regnskap_revisjon,
  ...quizData_religion_etikk,
  ...quizData_rettslaere,
  ...quizData_r1,
  ...quizData_r2,
  ...quizData_s1,
  ...quizData_s2,
  ...quizData_samfunnsfag_5,
  ...quizData_samfunnsfag_6,
  ...quizData_samfunnsfag_7,
  ...quizData_samfunnsfag_8,
  ...quizData_samfunnsfag_9,
  ...quizData_samfunnsfag_10,
  ...quizData_samfunnskunnskap,
  ...quizData_samfokonomi,
  ...quizData_sikkerhetsfag,
  ...quizData_sosiologi,
  ...quizData_spansk_1,
  ...quizData_spansk_2,
  ...quizData_spansk_3,
  ...quizData_tof,
  ...quizData_trening,
  ...quizData_tysk_1,
  ...quizData_tysk_2,
  ...quizData_tysk_3,
  ...quizData_okonomi_drift,
  ...quizData_okonomi_ledelse,
  ...quizData_byggAnleggVg1,
  ...quizData_elektroDataVg1,
  ...quizData_frisor_blomster_vg1,
  ...quizData_im_vg1,
  ...quizData_naturbruk_vg1,
  ...quizData_restaurant_mat_vg1,
  ...quizDataSalgServiceVg1,
  ...quizData_samf_engelsk,
  ...quizData_tif_vg1,
  ...quizData_biOkonomi,
  ...quizData_econ1310,
  ...quizData_jus1111,
  ...quizData_biologi_2,
  ...quizData_it_1,
  ...quizData_it_2,
  ...quizData_komkult_1,
  ...quizData_komkult_2,
  ...quizData_komkult_3,
  ...quizData_matematikk_10,
  ...quizData_matematikk_8,
  ...quizData_matematikk_9,
  ...quizData_medieinfo_1,
  ...quizData_medieinfo_2,
  ...quizData_okonomistyring,
  ...quizData_psykologi_1,
  ...quizData_psykologi_2,
  ...quizData_samfokonomi_2,
  ...quizData_sosiologi_full,
  ...quizData_tof_1,
  ...quizData_tof_2,
  ...quizData_trening_1,
  ...quizData_trening_2,
  ...quizData_trening_3,
  ...quizData_handverk_design_vg1,
  ...quizData_samfokonomi_1,
  ...quizData_stv1100,
  ...quizData_exphil03,
  ...quizData_psy1010,
  ...quizData_econ1210,
  ...quizData_mat1100,
  ...quizData_tma4245,
  ...quizData_mat1110,
  ...quizData_mat1120,
};

/**
 * Henter quiz-spørsmål for et spesifikt kapittel
 */
export function getQuizQuestions(chapterId: string, malform: Malform = 'nb'): QuizQuestion[] {
  if (malform === 'nn') {
    const nn = getQuizDataNn()[chapterId];
    if (nn && nn.length) return nn;
    // fall tilbake til bokmål
  }
  return quizData[chapterId] || [];
}

/**
 * Sjekker om et kapittel har quiz-spørsmål
 */
export function hasQuizQuestions(chapterId: string): boolean {
  return chapterId in quizData && quizData[chapterId].length >= 4;
}

/**
 * Liste over alle kapittel-IDer med quiz
 */
export function getChapterIdsWithQuiz(): string[] {
  return Object.keys(quizData).filter(id => quizData[id].length >= 10);
}

/**
 * Metadata for fag med norske navn og farger
 */
export interface SubjectMeta {
  id: string;
  name: string;
  color: string;
  icon?: string;
}

const subjectMetadata: Record<string, SubjectMeta> = {
  'norsk': { id: 'norsk', name: 'Norsk', color: 'from-red-500 to-rose-600' },
  'engelsk': { id: 'engelsk', name: 'Engelsk', color: 'from-blue-500 to-indigo-600' },
  'matematikk': { id: 'matematikk', name: 'Matematikk', color: 'from-purple-500 to-violet-600' },
  'naturfag': { id: 'naturfag', name: 'Naturfag', color: 'from-green-500 to-emerald-600' },
  'samfunnsfag': { id: 'samfunnsfag', name: 'Samfunnsfag', color: 'from-amber-500 to-orange-600' },
  'krle': { id: 'krle', name: 'KRLE', color: 'from-cyan-500 to-teal-600' },
  'kunst': { id: 'kunst', name: 'Kunst og håndverk', color: 'from-pink-500 to-rose-600' },
  'musikk': { id: 'musikk', name: 'Musikk', color: 'from-fuchsia-500 to-purple-600' },
  'kroppsoving': { id: 'kroppsoving', name: 'Kroppsøving', color: 'from-lime-500 to-green-600' },
  'mat-og-helse': { id: 'mat-og-helse', name: 'Mat og helse', color: 'from-orange-500 to-red-600' },
  'spansk': { id: 'spansk', name: 'Spansk', color: 'from-yellow-500 to-orange-600' },
  'tysk': { id: 'tysk', name: 'Tysk', color: 'from-gray-600 to-slate-700' },
  'fransk': { id: 'fransk', name: 'Fransk', color: 'from-blue-600 to-indigo-700' },
  'fysikk': { id: 'fysikk', name: 'Fysikk', color: 'from-slate-500 to-gray-600' },
  'kjemi': { id: 'kjemi', name: 'Kjemi', color: 'from-emerald-500 to-teal-600' },
  'biologi': { id: 'biologi', name: 'Biologi', color: 'from-green-600 to-lime-600' },
  'geofag': { id: 'geofag', name: 'Geofag', color: 'from-stone-500 to-amber-600' },
  'geografi': { id: 'geografi', name: 'Geografi', color: 'from-emerald-600 to-green-700' },
  'historie': { id: 'historie', name: 'Historie', color: 'from-amber-600 to-yellow-700' },
  'samfunnskunnskap': { id: 'samfunnskunnskap', name: 'Samfunnskunnskap', color: 'from-blue-600 to-cyan-700' },
  'sosiologi': { id: 'sosiologi', name: 'Sosiologi', color: 'from-violet-500 to-purple-600' },
  'psykologi': { id: 'psykologi', name: 'Psykologi', color: 'from-pink-600 to-rose-700' },
  'it': { id: 'it', name: 'Informasjonsteknologi', color: 'from-cyan-600 to-blue-700' },
  'tof': { id: 'tof', name: 'Teknologi og forskningslære', color: 'from-indigo-500 to-violet-600' },
  'rettslære': { id: 'rettslære', name: 'Rettslære', color: 'from-slate-600 to-gray-700' },
  'samføkonomi': { id: 'samføkonomi', name: 'Samfunnsøkonomi', color: 'from-emerald-600 to-cyan-700' },
  'økonomi-drift': { id: 'økonomi-drift', name: 'Økonomi og administrasjon', color: 'from-green-600 to-teal-700' },
  'økonomi-ledelse': { id: 'økonomi-ledelse', name: 'Økonomi og ledelse', color: 'from-teal-600 to-cyan-700' },
  'markedsforing': { id: 'markedsforing', name: 'Markedsføring', color: 'from-orange-600 to-red-700' },
  'regnskap-revisjon': { id: 'regnskap-revisjon', name: 'Regnskap og revisjon', color: 'from-slate-500 to-blue-600' },
  'entrebed': { id: 'entrebed', name: 'Entreprenørskap', color: 'from-yellow-500 to-amber-600' },
  'medieinfo': { id: 'medieinfo', name: 'Medieproduksjon', color: 'from-purple-600 to-pink-700' },
  'komkult': { id: 'komkult', name: 'Kommunikasjon og kultur', color: 'from-rose-500 to-pink-600' },
  'religion-etikk': { id: 'religion-etikk', name: 'Religion og etikk', color: 'from-indigo-600 to-purple-700' },
  'filosofi-etikk': { id: 'filosofi-etikk', name: 'Filosofi og etikk', color: 'from-violet-600 to-indigo-700' },
  'politikk-menneskerett': { id: 'politikk-menneskerett', name: 'Politikk og menneskerettigheter', color: 'from-blue-700 to-indigo-800' },
  'int-engelsk': { id: 'int-engelsk', name: 'Internasjonal engelsk', color: 'from-blue-500 to-cyan-600' },
  'helseoppvekst': { id: 'helseoppvekst', name: 'Helse- og oppvekstfag', color: 'from-pink-500 to-red-600' },
  'trening': { id: 'trening', name: 'Treningslære', color: 'from-lime-600 to-green-700' },
  'sikkerhetsfag': { id: 'sikkerhetsfag', name: 'Sikkerhetsfag', color: 'from-red-600 to-orange-700' },
};

/**
 * Organiserer quiz-data etter fag og klassetrinn
 */
export interface OrganizedQuizData {
  subject: SubjectMeta;
  grades: {
    grade: string;
    gradeName: string;
    chapters: {
      chapterId: string;
      chapterName: string;
      questionCount: number;
    }[];
  }[];
}

function parseGradeFromId(id: string): { subject: string; grade: string; chapter: string } {
  const parts = id.split('-');

  // Handle compound subjects like "mat-og-helse" or "økonomi-drift"
  const subjectParts: string[] = [];
  let gradeIndex = -1;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    // Check if this looks like a grade (number or vgX)
    if (/^\d+$/.test(part) || /^vg\d+$/i.test(part)) {
      gradeIndex = i;
      break;
    }
    subjectParts.push(part);
  }

  if (gradeIndex === -1) {
    // No grade found, might be like "geografi-1" format
    const lastPart = parts[parts.length - 1];
    if (/^\d+$/.test(lastPart)) {
      return {
        subject: parts.slice(0, -1).join('-'),
        grade: 'vg',
        chapter: lastPart,
      };
    }
    return { subject: id, grade: 'unknown', chapter: '1' };
  }

  const subject = subjectParts.join('-');
  const grade = parts[gradeIndex];
  const chapter = parts.slice(gradeIndex + 1).join('-');

  return { subject, grade, chapter };
}

function getGradeName(grade: string): string {
  if (grade === 'vg' || grade === 'vg1') return 'VG1';
  if (grade === 'vg2') return 'VG2';
  if (grade === 'vg3') return 'VG3';
  if (/^\d+$/.test(grade)) {
    const num = parseInt(grade, 10);
    if (num <= 10) return `${num}. klasse`;
    // For subjects like fysikk-2 where 2 means VG2
    return `VG${num}`;
  }
  return grade.toUpperCase();
}

function getChapterDisplayName(chapterId: string, chapter: string): string {
  // First, try to get the actual chapter title from textbook content
  const textbookChapter = getChapterContent(chapterId);
  if (textbookChapter?.title) {
    // Return "X.Y: Title" format for better readability
    const parts = chapter.split('-');
    if (parts.length === 2) {
      return `${parts[0]}.${parts[1]}: ${textbookChapter.title}`;
    }
    return `${chapter}: ${textbookChapter.title}`;
  }

  // Fallback to generic "Kapittel X.Y" format
  const parts = chapter.split('-');
  if (parts.length === 2) {
    return `Kapittel ${parts[0]}.${parts[1]}`;
  }
  return `Kapittel ${chapter}`;
}

export function getOrganizedQuizData(): OrganizedQuizData[] {
  const chapterIds = Object.keys(quizData).filter(id => quizData[id].length >= 4);

  // Group by subject, then by grade
  const grouped: Record<string, Record<string, { chapterId: string; chapter: string; questionCount: number }[]>> = {};

  for (const id of chapterIds) {
    const { subject, grade, chapter } = parseGradeFromId(id);

    if (!grouped[subject]) {
      grouped[subject] = {};
    }
    if (!grouped[subject][grade]) {
      grouped[subject][grade] = [];
    }

    grouped[subject][grade].push({
      chapterId: id,
      chapter,
      questionCount: quizData[id].length,
    });
  }

  // Convert to array format
  const result: OrganizedQuizData[] = [];

  for (const [subjectId, grades] of Object.entries(grouped)) {
    const subjectMeta = subjectMetadata[subjectId] || {
      id: subjectId,
      name: subjectId.charAt(0).toUpperCase() + subjectId.slice(1).replace(/-/g, ' '),
      color: 'from-gray-500 to-slate-600',
    };

    const gradeArray = Object.entries(grades)
      .map(([grade, chapters]) => ({
        grade,
        gradeName: getGradeName(grade),
        chapters: chapters
          .sort((a, b) => a.chapter.localeCompare(b.chapter, 'nb', { numeric: true }))
          .map(c => ({
            chapterId: c.chapterId,
            chapterName: getChapterDisplayName(c.chapterId, c.chapter),
            questionCount: c.questionCount,
          })),
      }))
      .sort((a, b) => {
        // Sort grades: 5, 6, 7, 8, 9, 10, vg1, vg2, vg3
        const aNum = parseInt(a.grade.replace('vg', ''), 10);
        const bNum = parseInt(b.grade.replace('vg', ''), 10);
        const aIsVg = a.grade.startsWith('vg');
        const bIsVg = b.grade.startsWith('vg');

        if (aIsVg && !bIsVg) return 1;
        if (!aIsVg && bIsVg) return -1;
        return aNum - bNum;
      });

    result.push({
      subject: subjectMeta,
      grades: gradeArray,
    });
  }

  // Sort subjects alphabetically by Norwegian name
  result.sort((a, b) => a.subject.name.localeCompare(b.subject.name, 'nb'));

  return result;
}

/**
 * Henter total antall quiz-spørsmål
 */
export function getTotalQuizQuestionCount(): number {
  return Object.values(quizData).reduce((sum, questions) => sum + questions.length, 0);
}

/**
 * Henter antall unike fag med quiz
 */
export function getUniqueSubjectCount(): number {
  const subjects = new Set<string>();
  for (const id of Object.keys(quizData)) {
    const { subject } = parseGradeFromId(id);
    subjects.add(subject);
  }
  return subjects.size;
}


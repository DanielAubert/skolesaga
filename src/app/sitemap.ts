import chapterDates from '@/lib/data/chapters/_dates.json';
import type { MetadataRoute } from 'next';
import { TEXTBOOK_COURSES } from '@/lib/data/textbook-courses';

const BASE_URL = 'https://www.skolesaga.no';

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/bok', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quiz', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/quiz/gigaquiz', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/test-deg-selv', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ressurser', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/poengkalkulator', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geogebra', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/hoderegning', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/personlighetstest', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personlighetstest/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personlighetstyper', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personlighetstyper/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/enneagram', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/enneagram/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/laeringsstil', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/laeringsstil/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/yrkesinteresser', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/yrkesinteresser/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/iq-test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/iq-test/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/eq-test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/eq-test/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personvern', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/vilkar', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/tilgjengelighet', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/kontakt', changeFrequency: 'yearly', priority: 0.2 },
];

const GRADE_LEVELS = ['5', '6', '7', '8', '9', '10', 'vg1', 'vg2', 'vg3', 'hoyere'];

// ============================================================================
// lastModified — ekte endringstidspunkt per kapittel
// ============================================================================
//
// Tidligere fikk alle 13 500+ URL-ene `new Date()`. Google lærer fort å ignorere
// et <lastmod> som alltid er «nå», så feltet var i praksis bortkastet.
//
// Kildevalg (enkleste kilde som faktisk finnes, i denne rekkefølgen):
//
//   1. GIT-tidspunkt for kapittelfila. Kapittel-JSON-en har INGEN dato-felter
//      (verken `updatedAt`, `lastModified` eller `sistOppdatert` — verifisert
//      mot alle 11 304 filene i src/lib/data/chapters/), så git er den eneste
//      kilden som er ekte per kapittel OG stabil på tvers av bygg: en commit-tid
//      endrer seg aldri i ettertid. Ett enkelt `git log`-kall over hele
//      kapittelmappa (~5 s, ~1,4 MB output) dekker alle 11 304 kapitlene.
//   2. FILAS mtime. Brukes når git ikke svarer (ingen .git i byggemiljøet, eller
//      shallow clone der historikken ikke rekker tilbake til kapittelet).
//   3. BYGGETIDSPUNKT. Siste utvei, og bevisst valg for statiske sider og
//      trinn-oversikter — de er indekssider uten egen innholdsfil.
//
// Kurssider (/bok/<id>, /flashcards, /kompetansemal) arver nyeste tidspunkt
// blant kursets egne kapitler; quiz-sida arver kapittelets eget tidspunkt.

// Datoene er forhandsberegnet av scripts/combine-chapters.js (prebuild) og
// ligger i _dates.json. De MA importeres statisk.
//
// Slar vi dem opp med fs her, avvises deployen: et interpolert filnavn som
// `${stem}.json` kan ikke spores av Turbopack, sa den pakker hele mappa inn i
// funksjonen. 26. juli 2026 ble sitemap-funksjonen 597 MB mot en grense pa 250,
// og tre produksjonsdeployer feilet pa rad. Se kommentaren i combine-chapters.js.
const DATES = chapterDates as Record<string, string>;

function createChapterDateLookup(buildTime: Date) {
  const cache = new Map<string, Date>();
  return function chapterDate(chapterId: string): Date {
    const cached = cache.get(chapterId);
    if (cached) return cached;
    const iso = DATES[chapterId];
    const date = iso ? new Date(iso) : buildTime;
    cache.set(chapterId, date);
    return date;
  };
}

/**
 * Narrativ-kapitler («Lesevennlig versjon») holdes UTE av sitemapet med vilje.
 * De er nesten-duplikater av originalkapittelet — samme pensum, omskrevet som
 * fortelling — og hører hjemme som canonical-pekere mot originalen, ikke som
 * egne indekseringskandidater. Filteret ser både på metadata-flagget og på
 * id-en, siden noen narrativ-oppføringer mangler flagget.
 */
function isNarrative(chapter: { id: string; isNarrativeVersion?: boolean }): boolean {
  return chapter.isNarrativeVersion === true || chapter.id.includes('narrativ');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  const chapterDate = createChapterDateLookup(buildTime);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: buildTime,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const gradeEntries: MetadataRoute.Sitemap = GRADE_LEVELS.map((grade) => ({
    url: `${BASE_URL}/bok/trinn/${grade}`,
    lastModified: buildTime,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = [];
  const chapterEntries: MetadataRoute.Sitemap = [];

  for (const course of TEXTBOOK_COURSES) {
    // Kun kapitler som faktisk har en publisert URL: sitemapet itererer
    // `course.chapters` fordi getChapterMeta() slår opp nettopp der — en id som
    // ikke står i kursets metadata gir «Kapittel ikke funnet», uansett om det
    // finnes en innholdsfil med den id-en. (Verifisert: alle 111 innholds-id-er
    // som ikke står i course.chapters — hov2-*/hov3-*/elektro-data-vg1-N — er
    // interne filnavn; 106 av dem serveres allerede via alias-id-en som ligger
    // i sitemapet, og de 5 siste er bevisste dubletter uten publisert rute.)
    const published = course.chapters.filter((c) => !isNarrative(c));

    // Kurs uten publiserte kapitler beholder landingssida, men får byggetid.
    let newest = published.length === 0 ? buildTime : new Date(0);
    for (const chapter of published) {
      const date = chapterDate(chapter.id);
      if (date > newest) newest = date;

      chapterEntries.push({
        url: `${BASE_URL}/bok/${course.id}/${chapter.id}`,
        lastModified: date,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
      chapterEntries.push({
        url: `${BASE_URL}/bok/${course.id}/${chapter.id}/quiz`,
        lastModified: date,
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    }

    courseEntries.push(
      {
        url: `${BASE_URL}/bok/${course.id}`,
        lastModified: newest,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/bok/${course.id}/flashcards`,
        lastModified: newest,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/bok/${course.id}/kompetansemal`,
        lastModified: newest,
        changeFrequency: 'yearly',
        priority: 0.4,
      },
    );
  }

  return [...staticEntries, ...gradeEntries, ...courseEntries, ...chapterEntries];
}

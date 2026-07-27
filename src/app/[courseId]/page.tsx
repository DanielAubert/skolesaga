import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AddCourseButton } from '@/components/student/add-course-button';
import { BreadcrumbHomeLink } from '@/components/book/breadcrumb-home-link';
import { TrackRecentVisit } from '@/components/track-recent-visit';
import {
  Clock, ChevronRight, GraduationCap,
  Calculator, Variable, Divide, Grid3X3, Sigma, Binary,
  LineChart, TrendingUp, ArrowRightLeft, Scale,
  Triangle, Circle, Ruler, Move,
  Waypoints, GitBranch, Zap,
  Laptop, Superscript, Plus,
  Radical, FunctionSquare, Target, Compass,
  PenTool, Lightbulb, Brain, CheckCircle2,
  Waves, Activity, Hexagon, BookOpen, Layers, FileCheck, Archive
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { TextbookChapterMeta } from '@/lib/types/textbook';
import { getFlashcardDefinitionCount } from '@/lib/data/flashcard-definitions';
import { hasQuizQuestions } from '@/lib/data/quiz-data';
import { getKildegrunnlag } from '@/lib/data/kildegrunnlag';
import { HoyskoleDisclaimer } from '@/components/textbook/hoyskole-disclaimer';
import { INSTITUSJONER } from '@/app/trinn/hoyere/institusjoner';

// Én aksentfarge per bok (designspråk regel 1): kapittelkortene i samme bok
// bruker samme fagfarge — aldri tilfeldig farge per kort.
interface Accent {
  solid: string;   // fylt flate (ikon-chip, nummer-chip)
  text: string;    // aksentfarget tekst
  soft: string;    // svak bakgrunn (dempet variant / lenker)
  softHover: string;
  border: string;  // kortkant
}

const ACCENTS: Record<string, Accent> = {
  blue:    { solid: 'bg-blue-600',    text: 'text-blue-700 dark:text-blue-400',       soft: 'bg-blue-50 dark:bg-blue-950/30',       softHover: 'hover:bg-blue-100 dark:hover:bg-blue-900/40',       border: 'border-blue-200 dark:border-blue-900' },
  emerald: { solid: 'bg-emerald-600', text: 'text-emerald-700 dark:text-emerald-400', soft: 'bg-emerald-50 dark:bg-emerald-950/30', softHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/40', border: 'border-emerald-200 dark:border-emerald-900' },
  violet:  { solid: 'bg-violet-600',  text: 'text-violet-700 dark:text-violet-400',   soft: 'bg-violet-50 dark:bg-violet-950/30',   softHover: 'hover:bg-violet-100 dark:hover:bg-violet-900/40',   border: 'border-violet-200 dark:border-violet-900' },
  orange:  { solid: 'bg-orange-600',  text: 'text-orange-700 dark:text-orange-400',   soft: 'bg-orange-50 dark:bg-orange-950/30',   softHover: 'hover:bg-orange-100 dark:hover:bg-orange-900/40',   border: 'border-orange-200 dark:border-orange-900' },
  teal:    { solid: 'bg-teal-600',    text: 'text-teal-700 dark:text-teal-400',       soft: 'bg-teal-50 dark:bg-teal-950/30',       softHover: 'hover:bg-teal-100 dark:hover:bg-teal-900/40',       border: 'border-teal-200 dark:border-teal-900' },
  indigo:  { solid: 'bg-indigo-600',  text: 'text-indigo-700 dark:text-indigo-400',   soft: 'bg-indigo-50 dark:bg-indigo-950/30',   softHover: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/40',   border: 'border-indigo-200 dark:border-indigo-900' },
  rose:    { solid: 'bg-rose-600',    text: 'text-rose-700 dark:text-rose-400',       soft: 'bg-rose-50 dark:bg-rose-950/30',       softHover: 'hover:bg-rose-100 dark:hover:bg-rose-900/40',       border: 'border-rose-200 dark:border-rose-900' },
  cyan:    { solid: 'bg-cyan-600',    text: 'text-cyan-700 dark:text-cyan-400',       soft: 'bg-cyan-50 dark:bg-cyan-950/30',       softHover: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/40',       border: 'border-cyan-200 dark:border-cyan-900' },
  amber:   { solid: 'bg-amber-600',   text: 'text-amber-700 dark:text-amber-400',     soft: 'bg-amber-50 dark:bg-amber-950/30',     softHover: 'hover:bg-amber-100 dark:hover:bg-amber-900/40',     border: 'border-amber-200 dark:border-amber-900' },
  red:     { solid: 'bg-red-600',     text: 'text-red-700 dark:text-red-400',         soft: 'bg-red-50 dark:bg-red-950/30',         softHover: 'hover:bg-red-100 dark:hover:bg-red-900/40',         border: 'border-red-200 dark:border-red-900' },
  slate:   { solid: 'bg-slate-600',   text: 'text-slate-700 dark:text-slate-300',     soft: 'bg-slate-100 dark:bg-slate-800/40',    softHover: 'hover:bg-slate-200 dark:hover:bg-slate-800/60',     border: 'border-slate-200 dark:border-slate-700' },
};

// Rekkefølgen deterministisk hash plukker fra (kun for bøker uten
// institusjonsfarge). Endres rekkefølgen, bytter bøker farge.
const ACCENT_KEYS = ['blue', 'emerald', 'violet', 'orange', 'teal', 'indigo', 'rose', 'cyan', 'amber'];

function getCourseAccent(courseId: string): Accent {
  // Høyskole: bruk fagets gradient fra institusjoner.ts (f.eks. «from-slate-600 …»).
  for (const inst of INSTITUSJONER) {
    const fag = inst.subjects.find((s) => s.courseId === courseId);
    if (fag) {
      const family = fag.color.match(/from-([a-z]+)-/)?.[1];
      if (family && ACCENTS[family]) return ACCENTS[family];
    }
  }
  // Ellers: deterministisk fra courseId — samme bok gir alltid samme farge.
  let hash = 0;
  for (const ch of courseId) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return ACCENTS[ACCENT_KEYS[hash % ACCENT_KEYS.length]];
}

function formatMinutes(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m > 0 ? `${h} t ${m} min` : `${h} t`;
}

// Høyskole-beskrivelsene følger mønsteret
// «<intro> — kalibrert mot <kalibrering>: <temaliste>».
// Vi løfter kalibreringen ut som salgslinje uten å hardkode tall.
function parseHoyskoleDescription(description: string): {
  intro: string;
  calibration?: string;
  topics?: string[];
} {
  const m = description.match(/^(.*?)\s*—\s*kalibrert mot\s+([^:]+?)\s*(?::\s*(.+?))?\.?$/);
  if (!m) return { intro: description };
  return {
    intro: m[1].trim(),
    calibration: m[2].trim(),
    topics: m[3]?.split(/,\s*|\s+og\s+/).map((t) => t.trim()).filter(Boolean),
  };
}

// Ikonmapping basert på emner og kapitteltitler - mer spesifikke ikoner
function getChapterIcon(chapter: TextbookChapterMeta): LucideIcon {
  const title = chapter.title.toLowerCase();
  const topics = chapter.topics.map(t => t.toLowerCase()).join(' ');
  const combined = `${title} ${topics}`;

  // Kapittel 1: Tall og algebra - spesifikke ikoner
  if (combined.includes('fortegn') || combined.includes('regnerekkefølge')) return Calculator;
  if (combined.includes('potens') && !combined.includes('eksponential')) return Superscript;
  if (combined.includes('algebra') && !combined.includes('brøk')) return Variable;
  if (combined.includes('brøkregning') && !combined.includes('algebraisk')) return Divide;
  if (combined.includes('faktorisering') || combined.includes('kvadratsetning')) return Grid3X3;
  if (combined.includes('brøker med algebraiske') || combined.includes('rasjonale uttrykk')) return Hexagon;
  if (combined.includes('logaritme') && !combined.includes('likning') && !combined.includes('funksjon')) return Binary;

  // Kapittel 2: Likninger og ulikheter - spesifikke ikoner
  if (combined.includes('grunnleggende likning')) return Scale;
  if (combined.includes('likningssett')) return Target;
  if (combined.includes('andregradslkning') || combined.includes('abc-formel')) return Waypoints;
  if (combined.includes('fullstendig kvadrat')) return CheckCircle2;
  if (combined.includes('rasjonale likninger') || combined.includes('brøklikning')) return Divide;
  if (combined.includes('røtter') && combined.includes('likning')) return Radical;
  if (combined.includes('eksponentiallikning')) return Zap;
  if (combined.includes('logaritmelikning')) return Activity;
  if (combined.includes('ulikhet')) return ArrowRightLeft;

  // Kapittel 3: Funksjoner - spesifikke ikoner
  if (combined.includes('hva er en funksjon')) return FunctionSquare;
  if (combined.includes('lineær')) return TrendingUp;
  if (combined.includes('andregradsfunksjon') || combined.includes('parabel')) return Waves;
  if (combined.includes('nullpunkt') && combined.includes('fortegn')) return Target;
  if (combined.includes('polynom')) return GitBranch;
  if (combined.includes('rasjonale funksjoner')) return Divide;
  if (combined.includes('eksponentialfunksjon') || combined.includes('vekst')) return Zap;
  if (combined.includes('logaritmefunksjon')) return Activity;
  if (combined.includes('funksjonsdrøfting')) return LineChart;

  // Kapittel 4: Geometri - spesifikke ikoner
  if (combined.includes('vinkel') || combined.includes('trekant')) return Triangle;
  if (combined.includes('kongruens') || combined.includes('formlikhet')) return Hexagon;
  if (combined.includes('pytagoras')) return Ruler;
  if (combined.includes('areal')) return PenTool;
  if (combined.includes('sinus') && combined.includes('setning')) return Waves;
  if (combined.includes('cosinus') && combined.includes('setning')) return Activity;

  // Kapittel 5: Vektorer - spesifikke ikoner
  if (combined.includes('vektor') && combined.includes('introduksjon')) return Move;
  if (combined.includes('addisjon') || combined.includes('subtraksjon')) return Plus;
  if (combined.includes('skalar') && combined.includes('multiplikasjon')) return Sigma;
  if (combined.includes('koordinatsystem')) return Target;
  if (combined.includes('lengde') && combined.includes('vektor')) return Ruler;
  if (combined.includes('skalarprodukt')) return Hexagon;

  // Kapittel 6: Trigonometri - spesifikke ikoner
  if (combined.includes('rettvinklet') || combined.includes('sin') || combined.includes('cos') || combined.includes('tan')) return Triangle;
  if (combined.includes('enhetssirkel')) return Circle;
  if (combined.includes('radian') || combined.includes('grad')) return Compass;
  if (combined.includes('identitet')) return CheckCircle2;
  if (combined.includes('trigonometriske likninger')) return Scale;
  if (combined.includes('grafer') && combined.includes('trigonometrisk')) return Waves;

  // Kapittel 7: Bevis og argumentasjon - spesifikke ikoner
  if (combined.includes('argumentasjon')) return Brain;
  if (combined.includes('direkte bevis')) return CheckCircle2;
  if (combined.includes('kontraposisjon')) return ArrowRightLeft;
  if (combined.includes('moteksempel')) return Target;

  // GeoGebra / CAS - spesifikt ikon
  if (combined.includes('geogebra') || combined.includes('cas') || combined.includes('digital')) return Laptop;

  // Generelle fallbacks
  if (combined.includes('funksjon') || combined.includes('graf')) return LineChart;
  if (combined.includes('geometri')) return Triangle;
  if (combined.includes('vektor')) return Move;
  if (combined.includes('likning')) return Scale;

  // Default
  return Lightbulb;
}
import { getCourse, getChaptersBySection, getSectionNames } from '@/lib/data/textbook-courses';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { mediaUrl } from '@/lib/media';
import { courseJsonLd, jsonLdScript, pageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);

  // Fail fast når innholdet ikke finnes — se soft-404-merknaden i
  // [chapterId]/page.tsx for hvorfor statuskoden er skjør her.
  if (!course) {
    notFound();
  }

  const title = `${course.title} | Interaktiv Matematikkbok`;

  return {
    title,
    description: course.description,
    ...pageMetadata({
      path: `/${courseId}`,
      title,
      description: course.description,
      image: course.coverImage,
    }),
  };
}

export default async function CourseOverviewPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = getCourse(courseId);

  if (!course) {
    notFound();
  }

  const sections = getChaptersBySection(courseId);
  const sectionNames = getSectionNames(courseId);
  const accent = getCourseAccent(courseId);
  const erHoyskole = course.level === 'Høyskole';
  const hoyskoleDesc = erHoyskole ? parseHoyskoleDescription(course.description) : null;

  // Antall quizspørsmål på tvers av kapitlene — avgjør om eksamenstrening tilbys.
  const eksamensbankAntall = course.chapters
    .filter((ch) => !ch.isNarrativeVersion && hasQuizQuestions(ch.id))
    .length;
  const harEksamenstrening = eksamensbankAntall >= 4;
  const harKildegrunnlag = getKildegrunnlag(courseId) !== null;

  const structuredData = courseJsonLd(course, sectionNames);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(structuredData) }}
      />
      <TextbookHeader />
      <TrackRecentVisit itemType="book" itemId={courseId} title={course.title} url={`/${courseId}`} />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <BreadcrumbHomeLink className="hover:text-foreground" />
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{course.title}</span>
        </nav>

        {/* Hero Image */}
        {course.coverImage && (
          <div className="relative w-full h-44 sm:h-56 md:h-72 lg:h-96 rounded-xl overflow-hidden mb-8 bg-muted">
            {/* Med forsidebilde vises ingen tekstlig tittel — <h1> for skjermlesere */}
            <h1 className="sr-only">{course.title}</h1>
            <Image
              src={mediaUrl(course.coverImage)}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
            {/* Add to dashboard button */}
            <AddCourseButton courseId={courseId} className="top-4 right-4" />
          </div>
        )}

        {/* Header (fallback if no cover image) */}
        {!course.coverImage && (
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold flex items-center gap-3">
                {course.icon && <span>{course.icon}</span>}
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground mt-2">{course.level}</p>
            </div>
            <div className="flex items-center gap-3">
              <AddCourseButton courseId={courseId} variant="full" />
              {/* LK20/LK06 gjelder grunnskole/VGS — høyskolebøker er eksamensrettede */}
              <Badge variant="outline" className="text-sm">
                {course.level === 'Høyskole' ? 'Eksamensrettet' : course.curriculum}
              </Badge>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">
            {hoyskoleDesc ? hoyskoleDesc.intro : course.description}
          </p>
        </div>
        )}

        {/* Høyskole: kalibreringen mot ekte eksamenssett løftes ut som salgslinje */}
        {hoyskoleDesc?.calibration && (
          <div className={`mb-8 rounded-lg border ${accent.border} ${accent.soft} px-4 py-3`}>
            <div className="flex items-start gap-3">
              <FileCheck className={`h-5 w-5 mt-0.5 shrink-0 ${accent.text}`} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">Bygget på {hoyskoleDesc.calibration}</span>
                  <span className="text-muted-foreground"> — hvert kapittel er kalibrert mot det som faktisk gis til eksamen.</span>
                  {harKildegrunnlag && (
                    <>
                      {' '}
                      <Link
                        href={`/${courseId}/kildegrunnlag`}
                        className={`font-medium underline ${accent.text}`}
                      >
                        Se hele kildegrunnlaget
                      </Link>
                    </>
                  )}
                </p>
                {hoyskoleDesc.topics && hoyskoleDesc.topics.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {hoyskoleDesc.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs font-normal bg-background/60">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Handlinger: én primær (fylt), resten sekundære (outline) — designspråk regel 2 */}
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href={`/${courseId}/kompetansemal`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Target className="h-5 w-5" />
            <span className="font-medium">
              {erHoyskole ? 'Se læringsmål' : 'Se kompetansemål (LK20)'}
            </span>
            <ChevronRight className="h-4 w-4" />
          </Link>
          {getFlashcardDefinitionCount(courseId) > 0 && (
            <Link
              href={`/${courseId}/flashcards`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-input bg-background text-foreground hover:bg-muted transition-colors"
            >
              <Layers className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">
                Flashcards ({getFlashcardDefinitionCount(courseId)} definisjoner)
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}
          {harEksamenstrening && (
            <Link
              href={`/${courseId}/eksamen`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-input bg-background text-foreground hover:bg-muted transition-colors"
            >
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Eksamenstrening</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}
          {harKildegrunnlag && (
            <Link
              href={`/${courseId}/kildegrunnlag`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-input bg-background text-foreground hover:bg-muted transition-colors"
            >
              <Archive className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Kildegrunnlag</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}
        </div>

        {/* Kapitler etter seksjon */}
        <div className="space-y-8">
          {Array.from(sections.entries()).map(([sectionNumber, chapters]) => {
            // Filtrer ut narrative versjoner fra hovedlisten
            const mainChapters = chapters.filter(ch => !ch.isNarrativeVersion);

            if (mainChapters.length === 0) return null;

            // Del 0 (introduksjon/metode) er nøytral grå; del 1–N bruker fagfargen
            const erDelNull = Number(sectionNumber) === 0;
            const totalMinutes = mainChapters.reduce((sum, ch) => sum + (ch.estimatedMinutes || 0), 0);

            return (
            <section key={sectionNumber}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg text-base font-bold shrink-0 ${
                    erDelNull ? 'bg-muted text-muted-foreground' : `${accent.solid} text-white`
                  }`}
                  aria-hidden="true"
                >
                  {sectionNumber}
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold leading-tight">
                    Kapittel {sectionNumber}: {sectionNames[sectionNumber] || `Seksjon ${sectionNumber}`}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {mainChapters.length} {mainChapters.length === 1 ? 'delkapittel' : 'delkapitler'}
                    {totalMinutes > 0 && <> · ca. {formatMinutes(totalMinutes)}</>}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {mainChapters.map((chapter) => {
                  const Icon = getChapterIcon(chapter);
                  const hasNarrativeVersion = chapter.linkedChapterId;
                  // Prøve-kapitler får dempet variant av fagfargen
                  const erProve = chapter.id.endsWith('-prove');
                  const dempet = erProve || erDelNull;

                  return (
                    <div key={chapter.id} className="flex flex-col">
                      <Link href={`/${courseId}/${chapter.id}`}>
                        <Card className={`h-full transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg group border ${erDelNull ? 'border-border' : accent.border} ${erProve ? 'border-dashed' : ''} overflow-hidden`}>
                          {/* Cover image or colored top-bar */}
                          {chapter.coverImage ? (
                            <div className="relative h-32 w-full overflow-hidden bg-muted">
                              <Image
                                src={mediaUrl(chapter.coverImage)}
                                alt={chapter.title}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                className={`object-contain transition-transform duration-300 group-hover:scale-105 ${chapter.wip ? 'grayscale opacity-70' : ''}`}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                              <div className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-xs font-mono font-semibold text-white ${erDelNull ? 'bg-slate-600' : accent.solid}`}>
                                {chapter.number}
                              </div>
                              {chapter.wip && (
                                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-500 text-white">
                                  Under utvikling
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className={`h-1.5 w-full ${erDelNull ? 'bg-muted' : dempet ? accent.soft : accent.solid}`} />
                          )}

                          <CardHeader className="p-3">
                            <div className="flex items-start gap-2">
                              {/* Kompakt ikon — fylt i fagfargen, dempet for del 0 og prøver */}
                              <div className={`p-2 rounded-lg shrink-0 ${
                                erDelNull
                                  ? 'bg-muted text-muted-foreground'
                                  : dempet
                                    ? `${accent.soft} ${accent.text}`
                                    : `${accent.solid} text-white`
                              }`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <CardTitle className="text-xs sm:text-sm leading-tight">
                                  {!chapter.coverImage && (
                                    <span className={`font-mono text-xs font-semibold ${erDelNull ? 'text-muted-foreground' : accent.text}`}>{chapter.number}</span>
                                  )}
                                  <span className="font-medium ml-1 line-clamp-2 break-words">{chapter.title}</span>
                                </CardTitle>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="p-3 pt-0">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <GraduationCap className="h-3 w-3" />
                                {chapter.exerciseCount}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {chapter.estimatedMinutes}m
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>

                      {/* Lenke til lesevennlig versjon */}
                      {hasNarrativeVersion && (
                        <Link
                          href={`/${courseId}/${chapter.linkedChapterId}`}
                          className={`mt-1 px-2 py-1 text-xs text-center rounded-md ${accent.soft} ${accent.text} ${accent.softHover} transition-colors flex items-center justify-center gap-1`}
                        >
                          <BookOpen className="h-3 w-3" />
                          Lesevennlig versjon
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
          })}
        </div>

        {/* Høyskole: uavhengighet + fagspesifikke ansvarslinjer */}
        {course.level === 'Høyskole' && (
          <HoyskoleDisclaimer courseId={course.id} courseTitle={course.title} />
        )}
      </div>
      </div>
    </div>
  );
}

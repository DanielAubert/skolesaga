import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Clock, ChevronRight, GraduationCap,
  Calculator, Variable, Divide, Grid3X3, Sigma, Binary,
  LineChart, TrendingUp, ArrowRightLeft, Scale,
  Triangle, Circle, Ruler, Move,
  Waypoints, GitBranch, Zap,
  Laptop, Superscript, Plus,
  Radical, FunctionSquare, Target, Compass,
  PenTool, Lightbulb, Brain, CheckCircle2,
  Waves, Activity, Hexagon, BookOpen
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { TextbookChapterMeta } from '@/lib/types/textbook';

// Fargepalett for individuelle kort - hver kort får sin egen farge
const CARD_COLORS = [
  { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', light: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
  { bg: 'bg-emerald-500', hover: 'hover:bg-emerald-600', light: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800' },
  { bg: 'bg-violet-500', hover: 'hover:bg-violet-600', light: 'bg-violet-50 dark:bg-violet-950/30', text: 'text-violet-600 dark:text-violet-400', border: 'border-violet-200 dark:border-violet-800' },
  { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', light: 'bg-orange-50 dark:bg-orange-950/30', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
  { bg: 'bg-pink-500', hover: 'hover:bg-pink-600', light: 'bg-pink-50 dark:bg-pink-950/30', text: 'text-pink-600 dark:text-pink-400', border: 'border-pink-200 dark:border-pink-800' },
  { bg: 'bg-cyan-500', hover: 'hover:bg-cyan-600', light: 'bg-cyan-50 dark:bg-cyan-950/30', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-200 dark:border-cyan-800' },
  { bg: 'bg-amber-500', hover: 'hover:bg-amber-600', light: 'bg-amber-50 dark:bg-amber-950/30', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
  { bg: 'bg-rose-500', hover: 'hover:bg-rose-600', light: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-800' },
  { bg: 'bg-indigo-500', hover: 'hover:bg-indigo-600', light: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' },
  { bg: 'bg-teal-500', hover: 'hover:bg-teal-600', light: 'bg-teal-50 dark:bg-teal-950/30', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-800' },
  { bg: 'bg-fuchsia-500', hover: 'hover:bg-fuchsia-600', light: 'bg-fuchsia-50 dark:bg-fuchsia-950/30', text: 'text-fuchsia-600 dark:text-fuchsia-400', border: 'border-fuchsia-200 dark:border-fuchsia-800' },
  { bg: 'bg-lime-500', hover: 'hover:bg-lime-600', light: 'bg-lime-50 dark:bg-lime-950/30', text: 'text-lime-600 dark:text-lime-400', border: 'border-lime-200 dark:border-lime-800' },
];

function getCardColor(index: number) {
  return CARD_COLORS[index % CARD_COLORS.length];
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

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);

  if (!course) {
    return { title: 'Kurs ikke funnet' };
  }

  return {
    title: `${course.title} | Interaktiv Matematikkbok`,
    description: course.description,
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

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/bok" className="hover:text-foreground">
            Bøker
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{course.title}</span>
        </nav>

        {/* Hero Image */}
        {course.coverImage && (
          <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden mb-8">
            <Image
              src={course.coverImage}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
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
            <Badge variant="outline" className="text-sm">
              {course.curriculum}
            </Badge>
          </div>

          <p className="text-lg text-muted-foreground">{course.description}</p>
        </div>
        )}

        {/* Kapitler etter seksjon */}
        <div className="space-y-10">
          {Array.from(sections.entries()).map(([sectionNumber, chapters]) => {
            // Filtrer ut narrative versjoner fra hovedlisten
            const mainChapters = chapters.filter(ch => !ch.isNarrativeVersion);

            // Beregn start-indeks for farger i denne seksjonen
            let colorStartIndex = 0;
            Array.from(sections.entries()).forEach(([secNum, chs]) => {
              if (Number(secNum) < Number(sectionNumber)) {
                const mainChs = chs.filter(ch => !ch.isNarrativeVersion);
                colorStartIndex += mainChs.length;
              }
            });

            if (mainChapters.length === 0) return null;

            return (
            <div key={sectionNumber}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-muted text-muted-foreground text-sm font-bold">
                  {sectionNumber}
                </span>
                <span>Kapittel {sectionNumber}: {sectionNames[sectionNumber] || `Seksjon ${sectionNumber}`}</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {mainChapters.map((chapter, idx) => {
                  const Icon = getChapterIcon(chapter);
                  const color = getCardColor(colorStartIndex + idx);
                  const hasNarrativeVersion = chapter.linkedChapterId;

                  return (
                    <div key={chapter.id} className="flex flex-col">
                      <Link href={`/bok/${courseId}/${chapter.id}`}>
                        <Card className={`h-full transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg group border ${color.border} overflow-hidden`}>
                          {/* Cover image or colored top-bar */}
                          {chapter.coverImage ? (
                            <div className="relative h-24 w-full overflow-hidden">
                              <Image
                                src={chapter.coverImage}
                                alt={chapter.title}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${chapter.wip ? 'grayscale opacity-70' : ''}`}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                              <div className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-xs font-mono font-semibold text-white ${color.bg}`}>
                                {chapter.number}
                              </div>
                              {chapter.wip && (
                                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-500 text-white">
                                  Under utvikling
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className={`h-1.5 w-full ${color.bg}`} />
                          )}

                          <CardHeader className="p-3">
                            <div className="flex items-start gap-2">
                              {/* Kompakt ikon */}
                              <div className={`p-2 rounded-lg ${color.bg} text-white shrink-0`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <CardTitle className="text-sm leading-tight">
                                  {!chapter.coverImage && (
                                    <span className={`font-mono text-xs font-semibold ${color.text}`}>{chapter.number}</span>
                                  )}
                                  <span className="font-medium ml-1 line-clamp-2">{chapter.title}</span>
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
                          href={`/bok/${courseId}/${chapter.linkedChapterId}`}
                          className="mt-1 px-2 py-1 text-xs text-center rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center justify-center gap-1"
                        >
                          <BookOpen className="h-3 w-3" />
                          Lesevennlig versjon
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

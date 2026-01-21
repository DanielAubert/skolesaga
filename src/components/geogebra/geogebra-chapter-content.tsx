'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GeoGebraLayout } from './geogebra-layout';
import { GeoGebraEmbed } from './geogebra-embed';
import { GeoGebraExercisesSection } from './geogebra-exercises-section';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import type { GeoGebraCourse, GeoGebraChapter } from '@/lib/data/geogebra-chapters';
import { CHAPTER_CONTENT } from '@/lib/data/geogebra-content';
import { GEOGEBRA_EXERCISES_8KLASSE } from '@/lib/data/geogebra-exercises-8klasse';
import { GEOGEBRA_EXERCISES_9KLASSE } from '@/lib/data/geogebra-exercises-9klasse';
import { GEOGEBRA_EXERCISES_10KLASSE } from '@/lib/data/geogebra-exercises-10klasse';
import { GEOGEBRA_EXERCISES_1P } from '@/lib/data/geogebra-exercises-1p';
import { GEOGEBRA_EXERCISES_1T } from '@/lib/data/geogebra-exercises-1t';
import { GEOGEBRA_EXERCISES_S1 } from '@/lib/data/geogebra-exercises-s1';
import { GEOGEBRA_EXERCISES_S2 } from '@/lib/data/geogebra-exercises-s2';
import { GEOGEBRA_EXERCISES_R1 } from '@/lib/data/geogebra-exercises-r1';
import { GEOGEBRA_EXERCISES_R2 } from '@/lib/data/geogebra-exercises-r2';
import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

// Combined exercises from all grade levels
const ALL_EXERCISES: Record<string, ValidatedExercise[]> = {
  ...GEOGEBRA_EXERCISES_8KLASSE,
  ...GEOGEBRA_EXERCISES_9KLASSE,
  ...GEOGEBRA_EXERCISES_10KLASSE,
  ...GEOGEBRA_EXERCISES_1P,
  ...GEOGEBRA_EXERCISES_1T,
  ...GEOGEBRA_EXERCISES_S1,
  ...GEOGEBRA_EXERCISES_S2,
  ...GEOGEBRA_EXERCISES_R1,
  ...GEOGEBRA_EXERCISES_R2,
};

interface GeoGebraChapterContentProps {
  course: GeoGebraCourse;
  chapter: GeoGebraChapter;
  prevChapter: GeoGebraChapter | null;
  nextChapter: GeoGebraChapter | null;
}

export function GeoGebraChapterContent({
  course,
  chapter,
  prevChapter,
  nextChapter,
}: GeoGebraChapterContentProps) {
  const content = CHAPTER_CONTENT[chapter.id];
  const hasContent = !!content;

  return (
    <GeoGebraLayout currentChapterId={chapter.id} courseId={course.id}>
      <div className="container max-w-6xl mx-auto py-8 px-4 sm:px-6">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/geogebra" className="hover:text-foreground transition-colors">
              GeoGebra
            </Link>
            <span>/</span>
            <Link href="/geogebra" className="hover:text-foreground transition-colors">
              {course.title}
            </Link>
            <span>/</span>
            <span>{chapter.number}</span>
          </div>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary">{course.title}</Badge>
                <span className="text-sm font-medium text-muted-foreground">
                  Kapittel {chapter.number}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{chapter.title}</h1>
            </div>
          </div>

          {/* Introduction */}
          <div className="text-lg text-muted-foreground mb-6">
            {hasContent ? content.introduction : <p>{chapter.description}</p>}
          </div>

          {/* Chapter info */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{chapter.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="h-4 w-4" />
              <span>{chapter.exercises} oppgaver</span>
            </div>
          </div>

          {/* Topics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Dette skal du lære</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-2">
                {chapter.topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Render actual content if available */}
          {hasContent ? (
            <>
              {/* Sections with content */}
              {content.sections.map((section, index) => (
                <section key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <div className="prose dark:prose-invert max-w-none mb-6">
                    {section.content}
                  </div>
                  {section.geogebra && (
                    <GeoGebraEmbed
                      title={section.geogebra.title}
                      description={section.geogebra.description}
                      appName={section.geogebra.appName || 'classic'}
                      width={section.geogebra.appName === 'cas' ? 1200 : 800}
                      height={section.geogebra.appName === 'cas' ? 550 : 450}
                      algebraWidth={section.geogebra.appName === 'cas' ? 550 : undefined}
                      showToolBar={true}
                      showAlgebraInput={true}
                      showMenuBar={false}
                      showResetIcon={true}
                      initialCommands={section.geogebra.initialCommands}
                    />
                  )}
                </section>
              ))}

              {/* Exercises */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{content.exercises.title}</h2>

                {/* Interactive exercises with validation */}
                {ALL_EXERCISES[chapter.id] && (
                  <div className="mb-8">
                    <GeoGebraExercisesSection
                      chapterId={chapter.id}
                      exercises={ALL_EXERCISES[chapter.id]}
                      title="Interaktive øvelser"
                    />
                  </div>
                )}

                {/* Original text exercises */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Ekstra oppgaver</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ol className="list-decimal list-inside space-y-3">
                      {content.exercises.tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
                <GeoGebraEmbed
                  title="Øvingsvindu"
                  description="Løs oppgavene over."
                  appName="classic"
                  width={800}
                  height={450}
                  showToolBar={true}
                  showAlgebraInput={true}
                />
              </section>

              {/* Commands reference */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Nyttige kommandoer</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold">Kommando</th>
                            <th className="text-left py-3 px-4 font-semibold">Beskrivelse</th>
                            <th className="text-left py-3 px-4 font-semibold">Eksempel</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {content.commands.map((cmd, index) => (
                            <tr key={index}>
                              <td className="py-3 px-4">
                                <code className="text-blue-600">{cmd.command}</code>
                              </td>
                              <td className="py-3 px-4">{cmd.description}</td>
                              <td className="py-3 px-4">
                                <code>{cmd.example}</code>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {content.summary.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </>
          ) : (
            <>
              {/* GeoGebra Workspace - for chapters without content */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Arbeidsområde</h2>
                <p className="text-muted-foreground mb-6">
                  Bruk GeoGebra-vinduet under til å utforske temaene i dette kapittelet.
                  Du kan skrive kommandoer i inputfeltet, eller bruke verktøyene i verktøylinjen.
                </p>
                <GeoGebraEmbed
                  title={chapter.title}
                  description="Prøv selv! Skriv kommandoer i inputfeltet eller bruk verktøylinjen."
                  appName="classic"
                  width={800}
                  height={500}
                  showToolBar={true}
                  showAlgebraInput={true}
                  showMenuBar={false}
                  showResetIcon={true}
                />
              </section>

              {/* Placeholder for actual content */}
              <section className="mb-12">
                <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800">
                  <CardContent className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Kapittelinnhold kommer</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Dette kapittelet er under utvikling. Snart vil du finne detaljerte forklaringer,
                      eksempler og oppgaver for {chapter.title.toLowerCase()}.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Quick commands reference based on chapter topics */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Tips for GeoGebra</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        For å komme i gang med {chapter.title.toLowerCase()}, kan du prøve disse kommandoene:
                      </p>
                      <div className="grid gap-2">
                        {getCommandsForChapter(chapter.id).map((cmd, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <code className="text-blue-600 font-mono text-sm">{cmd.command}</code>
                            <span className="text-sm text-muted-foreground">- {cmd.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t">
            {prevChapter ? (
              <Link href={prevChapter.url}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Forrige:</span> {prevChapter.title}
                </Button>
              </Link>
            ) : (
              <Link href="/geogebra">
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Tilbake til oversikt
                </Button>
              </Link>
            )}
            {nextChapter ? (
              <Link href={nextChapter.url}>
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <span className="hidden sm:inline">Neste:</span> {nextChapter.title}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href="/geogebra">
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  Fullfør og gå til oversikt
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </GeoGebraLayout>
  );
}

// Helper function to get relevant commands for each chapter type
function getCommandsForChapter(chapterId: string): { command: string; description: string }[] {
  const commandsByTopic: Record<string, { command: string; description: string }[]> = {
    'koordinatsystem': [
      { command: 'A = (2, 3)', description: 'Lager et punkt A i koordinat (2, 3)' },
      { command: 'Avstand(A, B)', description: 'Beregner avstanden mellom to punkter' },
      { command: 'Midtpunkt(A, B)', description: 'Finner midtpunktet mellom to punkter' },
    ],
    'geometri': [
      { command: 'Polygon(A, B, C)', description: 'Tegner en trekant med hjørnene A, B og C' },
      { command: 'Sirkel(M, r)', description: 'Tegner en sirkel med sentrum M og radius r' },
      { command: 'Areal(poly)', description: 'Beregner arealet av en polygon' },
    ],
    'funksjoner': [
      { command: 'f(x) = 2x + 1', description: 'Definerer en lineær funksjon' },
      { command: 'Nullpunkt(f)', description: 'Finner nullpunktene til funksjonen' },
      { command: 'Ekstremalpunkt(f)', description: 'Finner toppunkt/bunnpunkt' },
    ],
    'lineaere': [
      { command: 'f(x) = 2x + 3', description: 'Definerer en lineær funksjon y = 2x + 3' },
      { command: 'Linje(A, B)', description: 'Tegner en linje gjennom to punkter' },
      { command: 'Stigning(f)', description: 'Finner stigningstallet til linjen' },
    ],
    'andregrads': [
      { command: 'f(x) = x^2 - 4x + 3', description: 'Definerer en andregradsfunksjon' },
      { command: 'Nullpunkt(f)', description: 'Finner nullpunktene til parabelen' },
      { command: 'Toppunkt(f)', description: 'Finner toppunktet (ekstremalpunktet)' },
    ],
    'algebra': [
      { command: 'Løs(2x + 3 = 7)', description: 'Løser en likning' },
      { command: 'Forenkle((x+1)^2)', description: 'Forenkler et algebraisk uttrykk' },
      { command: 'Faktoriser(x^2 - 4)', description: 'Faktoriserer et uttrykk' },
    ],
    'derivasjon': [
      { command: 'f\'(x)', description: 'Den deriverte av funksjonen f' },
      { command: 'Tangent(f, a)', description: 'Tangentlinje til f i punktet a' },
      { command: 'Derivert(f, x)', description: 'Deriverer f med hensyn på x' },
    ],
    'integrasjon': [
      { command: 'Integral(f)', description: 'Ubestemt integral av f' },
      { command: 'Integral(f, a, b)', description: 'Bestemt integral fra a til b' },
      { command: 'IntegralMellom(f, g, a, b)', description: 'Areal mellom to kurver' },
    ],
    'vektorer': [
      { command: 'u = (3, 4)', description: 'Definerer en vektor' },
      { command: 'u + v', description: 'Adderer to vektorer' },
      { command: 'u * v', description: 'Skalarprodukt av to vektorer' },
    ],
    'statistikk': [
      { command: 'Gjennomsnitt({1,2,3,4,5})', description: 'Beregner gjennomsnittet' },
      { command: 'Median({1,2,3,4,5})', description: 'Finner medianen' },
      { command: 'Boksplott({1,2,3,4,5})', description: 'Lager et boksplott' },
    ],
    'regresjon': [
      { command: 'RegLin(liste)', description: 'Finner regresjonslinjen' },
      { command: 'RegPoly(liste, n)', description: 'Polynomregresjon av grad n' },
      { command: 'R2(f, liste)', description: 'Beregner R²-verdien' },
    ],
    'sannsynlighet': [
      { command: 'Binomialfordeling(n, p)', description: 'Binomisk sannsynlighetsfordeling' },
      { command: 'Normalfordeling(μ, σ)', description: 'Normalfordeling med gitte parametre' },
      { command: 'P(X < a)', description: 'Beregner sannsynlighet' },
    ],
    'trigonometri': [
      { command: 'sin(30°)', description: 'Beregner sinus til 30 grader' },
      { command: 'cos(x)', description: 'Cosinusfunksjonen' },
      { command: 'arctan(1)', description: 'Invers tangens' },
    ],
    '3d': [
      { command: 'A = (1, 2, 3)', description: 'Punkt i 3D' },
      { command: 'Plan(A, B, C)', description: 'Planet gjennom tre punkter' },
      { command: 'Avstand(punkt, plan)', description: 'Avstand fra punkt til plan' },
    ],
    'difflikning': [
      { command: 'LøsDL(y\' = y)', description: 'Løser en differensiallikning' },
      { command: 'Retningsfelt(y\' = x + y)', description: 'Tegner retningsfelt' },
      { command: 'IntegralKurve(felt, (x0, y0))', description: 'Tegner en løsningskurve' },
    ],
  };

  for (const [topic, commands] of Object.entries(commandsByTopic)) {
    if (chapterId.toLowerCase().includes(topic)) {
      return commands;
    }
  }

  return [
    { command: 'f(x) = x^2', description: 'Definerer en funksjon' },
    { command: 'A = (2, 3)', description: 'Lager et punkt' },
    { command: 'Løs(likning)', description: 'Løser en likning med CAS' },
  ];
}

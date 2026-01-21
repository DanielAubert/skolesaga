import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Play, BookOpen, GraduationCap, School, Clock, Construction } from "lucide-react";
import type { Metadata } from "next";
import { GEOGEBRA_LEVELS, GEOGEBRA_COURSES } from "@/lib/data/geogebra-chapters";

export const metadata: Metadata = {
  title: "GeoGebra-lærebok - Fra 8. klasse til R2",
  description: "Lær GeoGebra fra bunnen av. Interaktiv lærebok tilpasset hvert klassetrinn fra 8. klasse til R2. CAS-regning, grafer og geometri.",
  keywords: "GeoGebra, CAS, kalkulator, matematikk, grafer, geometri, lærebok, VGS, ungdomsskole, 1P, 1T, 2P, S1, S2, R1, R2",
};

const levelColors: Record<string, string> = {
  'Ungdomsskole': 'bg-emerald-500',
  'VG1': 'bg-blue-500',
  'VG2': 'bg-purple-500',
  'VG3': 'bg-orange-500',
};

const courseColors: Record<string, string> = {
  '8-klasse': 'bg-emerald-400',
  '9-klasse': 'bg-emerald-500',
  '10-klasse': 'bg-emerald-600',
  '1p': 'bg-blue-400',
  '1t': 'bg-blue-600',
  '2p': 'bg-purple-400',
  's1': 'bg-purple-500',
  'r1': 'bg-purple-600',
  's2': 'bg-orange-500',
  'r2': 'bg-orange-600',
};

export default function GeoGebraIndexPage() {
  const totalChapters = GEOGEBRA_COURSES.reduce((acc, course) => acc + course.chapters.length, 0);
  const totalCourses = GEOGEBRA_COURSES.length;

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-muted/5">
      <MainNav />

      <main className="flex-1">
        <div className="container max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                <Calculator className="h-12 w-12 text-white" />
              </div>
              <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                GeoGebra-lærebok
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Mestre GeoGebra tilpasset ditt klassetrinn. Fra grunnleggende koordinatsystem
                i 8. klasse til avansert analyse i R2.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  {totalCourses} matematikkfag
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {totalChapters} kapitler
                </Badge>
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  <Calculator className="h-4 w-4 mr-1" />
                  Interaktive øvelser
                </Badge>
              </div>

              {/* Quick start button */}
              <Link href="/geogebra/8-klasse/koordinatsystem">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                  <Play className="h-5 w-5 mr-2" />
                  Start fra begynnelsen
                </Button>
              </Link>
            </div>

            {/* Levels */}
            {GEOGEBRA_LEVELS.map((level) => {
              const colorClass = levelColors[level.title] || 'bg-gray-500';

              return (
                <section key={level.title} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${colorClass}`}>
                      <School className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{level.title}</h2>
                    <Badge variant="secondary">{level.courses.length} fag</Badge>
                  </div>

                  {/* Courses within this level */}
                  {level.courses.map((course) => {
                    const courseColor = courseColors[course.id] || 'bg-gray-500';

                    return (
                      <div key={course.id} className="mb-8">
                        {/* Course header */}
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className={`${courseColor} text-white`}>{course.title}</Badge>
                          <span className="text-sm text-muted-foreground">{course.description}</span>
                        </div>

                        {/* Chapter cards grid */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {course.chapters.map((chapter) => (
                            <Link key={chapter.id} href={chapter.url}>
                              <Card className="h-full hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group">
                                <CardHeader className="pb-2">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-sm font-mono text-muted-foreground">{chapter.number}</span>
                                    {chapter.wip && (
                                      <Badge variant="outline" className="text-amber-600 border-amber-500 bg-amber-50 dark:bg-amber-950/50 text-xs">
                                        <Construction className="h-3 w-3 mr-1" />
                                        Under arbeid, men ta gjerne en titt!
                                      </Badge>
                                    )}
                                  </div>
                                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                                    {chapter.title}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                    {chapter.description}
                                  </p>
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <BookOpen className="h-3 w-3" />
                                      {chapter.exercises} oppgaver
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {chapter.duration}
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </section>
              );
            })}

            {/* Info Section */}
            <section className="mt-12 bg-muted/50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Om GeoGebra-læreboken</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Tilpasset hvert klassetrinn</h3>
                  <p className="text-sm text-muted-foreground">
                    Innholdet er nøye tilpasset læreplanen for hvert matematikkfag,
                    fra 8. klasse til VG3.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Eksamensforberedelse</h3>
                  <p className="text-sm text-muted-foreground">
                    Lær de viktigste GeoGebra-funksjonene du trenger til eksamen i ditt fag.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interaktive øvelser</h3>
                  <p className="text-sm text-muted-foreground">
                    Alle kapitlene har innebygde GeoGebra-applets der du kan
                    eksperimentere direkte i nettleseren.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Target, BookOpen, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getCourse, getChaptersBySection, getSectionNames } from '@/lib/data/textbook-courses';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { BreadcrumbHomeLink } from '@/components/book/breadcrumb-home-link';
import { pageMetadata } from '@/lib/seo';

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

  const title = `Kompetansemål - ${course.title} | Skolesaga`;
  const description =
    course.level === 'Høyskole'
      ? `Oversikt over alle læringsmål dekket i ${course.title}`
      : `Oversikt over alle kompetansemål (LK20) dekket i ${course.title}`;

  return {
    title,
    description,
    ...pageMetadata({
      path: `/bok/${courseId}/kompetansemal`,
      title,
      description,
      image: course.coverImage,
    }),
  };
}

export default async function CompetenceGoalsPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = getCourse(courseId);

  if (!course) {
    notFound();
  }

  const sections = getChaptersBySection(courseId);
  const sectionNames = getSectionNames(courseId);

  // Samle alle unike kompetansemål
  const allGoals = new Set<string>();
  const goalToChapters = new Map<string, Array<{ id: string; number: string; title: string }>>();

  course.chapters.forEach((chapter) => {
    if (chapter.competenceGoals) {
      chapter.competenceGoals.forEach((goal) => {
        allGoals.add(goal);
        if (!goalToChapters.has(goal)) {
          goalToChapters.set(goal, []);
        }
        goalToChapters.get(goal)!.push({
          id: chapter.id,
          number: chapter.number,
          title: chapter.title,
        });
      });
    }
  });

  // Tell kapitler med og uten kompetansemål
  const chaptersWithGoals = course.chapters.filter(
    (ch) => ch.competenceGoals && ch.competenceGoals.length > 0 && !ch.isNarrativeVersion
  ).length;
  const mainChapters = course.chapters.filter((ch) => !ch.isNarrativeVersion).length;

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <BreadcrumbHomeLink className="hover:text-foreground" />
            <ChevronRight className="h-4 w-4" />
            <Link href={`/bok/${courseId}`} className="hover:text-foreground">
              {course.title}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Kompetansemål</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
              <Target className="h-8 w-8 text-primary" />
              {course.level === 'Høyskole' ? 'Læringsmål' : 'Kompetansemål'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {course.level === 'Høyskole'
                ? `Oversikt over læringsmål dekket i ${course.title}`
                : `Oversikt over LK20-kompetansemål dekket i ${course.title}`}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {course.level === 'Høyskole'
                ? 'Kilde: Læringsmålene er utformet av Skolesaga på grunnlag av emnets eksamensoppgaver, sensorveiledninger og emnebeskrivelse. De er ikke institusjonens offisielle læringsutbyttebeskrivelser.'
                : 'Kilde: Kompetansemål fra læreplanverket LK20 (Utdanningsdirektoratet, udir.no).'}
            </p>

            {/* Statistikk */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <CheckCircle2 className="h-4 w-4 mr-1" />
                {allGoals.size} kompetansemål
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                <BookOpen className="h-4 w-4 mr-1" />
                {chaptersWithGoals} av {mainChapters} kapitler har kompetansemål
              </Badge>
            </div>
          </div>

          {/* Liste over kompetansemål */}
          <div className="space-y-4 mb-12">
            <h2 className="text-xl font-semibold mb-4">Alle kompetansemål</h2>
            {Array.from(goalToChapters.entries()).map(([goal, chapters], index) => (
              <Card key={index} className="border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium flex items-start gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span className="capitalize">{goal}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.id}
                        href={`/bok/${courseId}/${chapter.id}`}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <span className="font-mono text-primary">{chapter.number}</span>
                        <span className="text-muted-foreground">{chapter.title}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Kapitler etter seksjon med kompetansemål */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">Kapitler med kompetansemål</h2>
            {Array.from(sections.entries()).map(([sectionNumber, chapters]) => {
              const mainChapters = chapters.filter((ch) => !ch.isNarrativeVersion);
              if (mainChapters.length === 0) return null;

              return (
                <div key={sectionNumber}>
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-muted text-muted-foreground text-sm font-bold">
                      {sectionNumber}
                    </span>
                    <span>{sectionNames[sectionNumber] || `Seksjon ${sectionNumber}`}</span>
                  </h3>

                  <div className="space-y-3 pl-9">
                    {mainChapters.map((chapter) => (
                      <div key={chapter.id} className="border rounded-lg p-4">
                        <Link
                          href={`/bok/${courseId}/${chapter.id}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          <span className="font-mono text-primary mr-2">{chapter.number}</span>
                          {chapter.title}
                        </Link>

                        {chapter.competenceGoals && chapter.competenceGoals.length > 0 ? (
                          <ul className="mt-2 space-y-1">
                            {chapter.competenceGoals.map((goal, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <Target className="h-3 w-3 mt-1 shrink-0 text-primary" />
                                <span className="capitalize">{goal}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-2 text-sm text-muted-foreground italic">
                            Ingen kompetansemål registrert
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tilbake-knapp */}
          <div className="mt-12 pt-8 border-t">
            <Link
              href={`/bok/${courseId}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Tilbake til {course.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

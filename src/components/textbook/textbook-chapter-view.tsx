'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock, BookOpen, GraduationCap, AlertCircle, BookCheck, ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { TextbookCourse, TextbookChapterMeta, TextbookChapter, TextbookExercise } from '@/lib/types/textbook';
import { ContentBlockRenderer } from './content-block-renderer';
import { TextbookExerciseList } from './textbook-exercise-list';
import { ExerciseAnswerKey } from './exercise-answer-key';
import { ThemeToggle } from '@/components/theme-toggle';
import { StudentSelector } from './student-selector';
import { UserMenu } from '@/components/auth/user-menu';
import { useUser } from '@/lib/auth/hooks';
import { SkillLevelIndicator } from './skill-level-indicator';
import { getTextbookChapterCompletedCount, getSubTaskProgress } from '@/lib/textbook/progress';

interface ChapterNavInfo {
  id: string;
  number: string;
  title: string;
}

interface LinkedChapterInfo {
  id: string;
  title: string;
  isNarrativeVersion?: boolean;
}

interface TextbookChapterViewProps {
  course: TextbookCourse;
  chapterMeta: TextbookChapterMeta;
  chapterContent?: TextbookChapter;
  nextChapter?: ChapterNavInfo;
  prevChapter?: ChapterNavInfo;
  linkedChapter?: LinkedChapterInfo;
  isNarrativeVersion?: boolean;
  hasQuiz?: boolean;
}

export function TextbookChapterView({
  course,
  chapterMeta,
  chapterContent,
  nextChapter,
  prevChapter,
  linkedChapter,
  isNarrativeVersion = false,
  hasQuiz = false,
}: TextbookChapterViewProps) {
  const hasContent = !!chapterContent;
  const { user } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Hent studentId fra URL (for lærervisning)
  const urlStudentId = searchParams.get('studentId');
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(urlStudentId);

  // Sjekk om bruker er lærer
  const isTeacher = user?.role === 'teacher' || user?.role === 'admin';

  // Oppdater URL når elev velges
  const handleSelectStudent = (studentId: string | null) => {
    setSelectedStudentId(studentId);

    const params = new URLSearchParams(searchParams.toString());
    if (studentId) {
      params.set('studentId', studentId);
    } else {
      params.delete('studentId');
    }

    const newUrl = params.toString() ? `${pathname}?${params}` : pathname;
    router.replace(newUrl);
  };

  // Synkroniser med URL ved endringer
  useEffect(() => {
    setSelectedStudentId(urlStudentId);
  }, [urlStudentId]);

  // Track completed exercises for progress display
  const [completedExercisesCount, setCompletedExercisesCount] = useState(0);
  const [subTaskStats, setSubTaskStats] = useState({ completed: 0, skipped: 0, total: 0 });

  // Track quiz result
  const [quizResult, setQuizResult] = useState<{ score: number; total: number; percentage: number; completedAt: string } | null>(null);

  // Load quiz result from database
  useEffect(() => {
    if (hasQuiz) {
      const fetchQuizResult = async () => {
        try {
          let url = `/api/textbook/quiz-results?quizId=${chapterMeta.id}&courseId=${course.id}`;
          if (selectedStudentId) {
            url += `&studentId=${selectedStudentId}`;
          }
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            if (data.result) {
              setQuizResult(data.result);
            }
          }
        } catch (error) {
          console.error('Failed to fetch quiz result:', error);
        }
      };

      fetchQuizResult();
    }
  }, [hasQuiz, chapterMeta.id, course.id, selectedStudentId]);

  useEffect(() => {
    // Fetch progress from database API
    const fetchProgressFromDatabase = async (studentId?: string | null) => {
      try {
        let url = `/api/textbook/chapter-progress?courseId=${course.id}&chapterId=${chapterMeta.id}`;
        if (studentId) {
          url += `&studentId=${studentId}`;
        }
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCompletedExercisesCount(data.stats?.completedExercises || 0);
          setSubTaskStats({
            completed: data.stats?.completedSubtasks || 0,
            skipped: data.stats?.skippedSubtasks || 0,
            total: data.stats?.totalSubtasks || 0,
          });
          return true;
        }
      } catch (error) {
        console.error('Failed to fetch chapter progress from database:', error);
      }
      return false;
    };

    // Get progress from localStorage
    const updateProgressFromLocal = () => {
      const count = getTextbookChapterCompletedCount(course.id, chapterMeta.id);
      setCompletedExercisesCount(count);

      // Calculate subtask stats
      const allProgress = getSubTaskProgress();
      const chapterProgress = allProgress[course.id]?.[chapterMeta.id] || {};

      let completed = 0;
      let skipped = 0;
      let total = 0;

      // Count all subtasks from main exercises only (exclude repetition exercises)
      for (const exerciseId of Object.keys(chapterProgress)) {
        // Skip repetition exercises (de har "rep" i ID-en)
        if (exerciseId.includes('-rep-')) {
          continue;
        }
        const exerciseSubTasks = chapterProgress[exerciseId];
        for (const label of Object.keys(exerciseSubTasks)) {
          total++;
          if (exerciseSubTasks[label] === 'completed') {
            completed++;
          } else if (exerciseSubTasks[label] === 'skipped') {
            skipped++;
          }
        }
      }

      setSubTaskStats({ completed, skipped, total });
    };

    // Hovedlogikk for å oppdatere fremgang
    const updateProgress = async () => {
      // Hvis lærer ser på en elev, hent fra database
      if (selectedStudentId) {
        await fetchProgressFromDatabase(selectedStudentId);
        return;
      }

      // Prøv å hente fra database først (for innlogget bruker)
      if (user?.id) {
        const success = await fetchProgressFromDatabase();
        if (success) return;
      }

      // Fallback til localStorage
      updateProgressFromLocal();
    };

    updateProgress();

    // Listen for exercise completion events
    const handleExerciseCompleted = () => {
      updateProgress();
    };

    const handleSubTaskUpdated = () => {
      updateProgress();
    };

    window.addEventListener('textbookExerciseCompleted', handleExerciseCompleted);
    window.addEventListener('subtaskProgressUpdated', handleSubTaskUpdated);
    window.addEventListener('storage', handleExerciseCompleted);

    // Polling for å holde synkronisert
    const pollInterval = setInterval(() => {
      updateProgress();
    }, 5000);

    return () => {
      window.removeEventListener('textbookExerciseCompleted', handleExerciseCompleted);
      window.removeEventListener('subtaskProgressUpdated', handleSubTaskUpdated);
      window.removeEventListener('storage', handleExerciseCompleted);
      clearInterval(pollInterval);
    };
  }, [course.id, chapterMeta.id, selectedStudentId, user?.id]);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Tilbake til kurs */}
            <Link
              href={`/bok/${course.id}`}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{course.title}</span>
              <span className="sm:hidden">Tilbake</span>
            </Link>

            {/* Kapittelnummer og tittel */}
            <div className="text-center">
              <span className="font-semibold">
                <span className="text-primary">{chapterMeta.number}</span>{' '}
                <span className="hidden sm:inline">{chapterMeta.title}</span>
              </span>
            </div>

            {/* Navigasjon og tema */}
            <div className="flex items-center gap-1">
              {prevChapter ? (
                <Link href={`/bok/${course.id}/${prevChapter.id}`}>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">{prevChapter.number}</span>
                  </Button>
                </Link>
              ) : (
                <Button variant="ghost" size="sm" disabled className="opacity-50">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
              {nextChapter ? (
                <Link href={`/bok/${course.id}/${nextChapter.id}`}>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <span className="hidden sm:inline">{nextChapter.number}</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button variant="ghost" size="sm" disabled className="opacity-50">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
              <ThemeToggle />
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Lærer: Elevvelger */}
      {isTeacher && (
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 py-2">
            <StudentSelector
              selectedStudentId={selectedStudentId}
              onSelectStudent={handleSelectStudent}
            />
          </div>
        </div>
      )}

      {/* Hero image */}
      {chapterMeta.coverImage && (
        <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
          <Image
            src={chapterMeta.coverImage}
            alt={chapterMeta.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-16 pb-6 px-6">
              <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                    <span className="text-primary-foreground/90">{chapterMeta.number}</span>{' '}
                    {chapterMeta.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hovedinnhold */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Kapitteltittel - bare hvis ingen hero image */}
          <div className="mb-8">
            {!chapterMeta.coverImage && (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    <span className="text-primary">{chapterMeta.number}</span>{' '}
                    {chapterMeta.title}
                  </h1>
                </div>
              </div>
            )}
            <p className={`text-lg text-muted-foreground ${chapterMeta.coverImage ? '' : 'mt-2'}`}>{chapterMeta.description}</p>

            {/* Metadata */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{chapterMeta.estimatedMinutes} min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                <span>{chapterMeta.exerciseCount} oppgaver</span>
              </div>
            </div>

            {/* Emner */}
            {chapterMeta.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {chapterMeta.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            )}

            {/* Versjonsvelger */}
            {linkedChapter && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
                    <ArrowLeftRight className="h-4 w-4" />
                    <span>
                      {isNarrativeVersion
                        ? 'Du leser den lesevennlige versjonen'
                        : 'Du leser den tradisjonelle versjonen'}
                    </span>
                  </div>
                  <Link href={`/bok/${course.id}/${linkedChapter.id}`}>
                    <Button variant="outline" size="sm" className="gap-2 bg-white dark:bg-background">
                      <BookOpen className="h-4 w-4" />
                      {linkedChapter.isNarrativeVersion
                        ? 'Lesevennlig versjon'
                        : 'Tradisjonell versjon'}
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Fremgang */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>{selectedStudentId ? 'Elevens fremgang i kapitlet' : 'Din fremgang i kapitlet'}</span>
                <div className="flex items-center gap-3 text-muted-foreground">
                  {subTaskStats.total > 0 && (
                    <span className="flex items-center gap-1.5">
                      <span className="text-green-600 dark:text-green-400 font-medium">{subTaskStats.completed}</span>
                      {subTaskStats.skipped > 0 && (
                        <>
                          <span>/</span>
                          <span className="text-red-500 dark:text-red-400 font-medium">{subTaskStats.skipped}</span>
                        </>
                      )}
                      <span>deloppgaver</span>
                    </span>
                  )}
                  <span>{completedExercisesCount} / {chapterMeta.exerciseCount} oppgaver</span>
                </div>
              </div>
              {/* Progress bar: width based on exercises, color split based on subtasks */}
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                {(() => {
                  // Width based on exercises completed
                  const progressPercent = chapterMeta.exerciseCount > 0
                    ? (completedExercisesCount / chapterMeta.exerciseCount) * 100
                    : 0;

                  // Color distribution based on subtasks
                  const attemptedSubtasks = subTaskStats.completed + subTaskStats.skipped;
                  const greenRatio = attemptedSubtasks > 0 ? subTaskStats.completed / attemptedSubtasks : 1;

                  return (
                    <div
                      className="h-full flex transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    >
                      {/* Green portion: completed subtasks ratio */}
                      <div
                        className="bg-green-500 h-full"
                        style={{ width: `${greenRatio * 100}%` }}
                      />
                      {/* Red portion: skipped subtasks ratio */}
                      {attemptedSubtasks > 0 && subTaskStats.skipped > 0 && (
                        <div
                          className="bg-red-500 h-full"
                          style={{ width: `${(1 - greenRatio) * 100}%` }}
                        />
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Quiz-knapp - vises for alle fag med quiz-data */}
            {hasQuiz && (
              <div className="mt-4">
                <Link href={`/bok/${course.id}/${chapterMeta.id}/quiz`}>
                  <Button className="w-full gap-2 bg-purple-600 hover:bg-purple-700 text-white">
                    <BookCheck className="h-5 w-5" />
                    Test deg selv
                  </Button>
                </Link>
                {quizResult && (
                  <div className="mt-2 text-center text-sm text-muted-foreground">
                    <span className={`font-medium ${quizResult.percentage >= 70 ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                      {quizResult.percentage}% riktig
                    </span>
                    <span className="mx-1">•</span>
                    <span>{quizResult.score}/{quizResult.total} poeng</span>
                  </div>
                )}
              </div>
            )}

            {/* Adaptiv vanskelighetsgrad - kun for 8. klasse */}
            {course.id === '8' && (
              <div className="mt-4">
                <SkillLevelIndicator
                  courseId={course.id}
                  chapterId={chapterContent?.id || chapterMeta.id}
                />
              </div>
            )}
          </div>

          {/* Innhold eller placeholder */}
          {hasContent ? (
            (() => {
              // Hent alle oppgaver fra både exercises-arrayet og content-arrayet
              const contentExercises: TextbookExercise[] = chapterContent.content
                .filter((block): block is { type: 'exercise'; exercise: TextbookExercise; id: string } => block.type === 'exercise')
                .map((block) => block.exercise);

              // Hent oppgaver fra collapsible-blokker (f.eks. repetisjonsoppgaver)
              const collapsibleExercises: TextbookExercise[] = chapterContent.content
                .filter((block) => block.type === 'collapsible')
                .flatMap((block) => {
                  if (block.type !== 'collapsible') return [];
                  return block.content
                    .filter((innerBlock) => innerBlock.type === 'exercise')
                    .map((innerBlock) => {
                      if (innerBlock.type !== 'exercise') return null;
                      return innerBlock.exercise;
                    })
                    .filter((ex): ex is TextbookExercise => ex !== null);
                });

              const allExercises = [...chapterContent.exercises, ...contentExercises, ...collapsibleExercises];

              return (
                <>
                  {/* Teoriinnhold */}
                  <section className="mb-12">
                    <div className="space-y-6">
                      {chapterContent.content.map((block) => (
                        <ContentBlockRenderer
                          key={block.id}
                          block={block}
                          chapterId={chapterContent.id}
                          courseId={course.id}
                          viewingAsStudentId={selectedStudentId}
                        />
                      ))}
                    </div>
                  </section>

                  {/* Oppgaver (bare hvis exercises-arrayet har oppgaver) */}
                  {chapterContent.exercises.length > 0 && (
                    <section>
                      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <BookOpen className="h-6 w-6" />
                        Oppgaver
                      </h2>
                      <TextbookExerciseList
                        exercises={chapterContent.exercises}
                        chapterId={chapterContent.id}
                        courseId={course.id}
                        viewingAsStudentId={selectedStudentId}
                      />
                    </section>
                  )}

                  {/* Fasit */}
                  <ExerciseAnswerKey exercises={allExercises} />
                </>
              );
            })()

          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Innholdet for dette kapitlet er under utvikling. Sjekk tilbake snart!
              </AlertDescription>
            </Alert>
          )}

          {/* Navigasjon nederst */}
          <nav className="mt-12 pt-8 border-t">
            <div className="flex justify-between gap-4">
              {prevChapter ? (
                <Link href={`/bok/${course.id}/${prevChapter.id}`} className="flex-1">
                  <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                    <ChevronLeft className="h-4 w-4 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Forrige</div>
                      <div className="font-medium">{prevChapter.number} {prevChapter.title}</div>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextChapter ? (
                <Link href={`/bok/${course.id}/${nextChapter.id}`} className="flex-1">
                  <Button variant="outline" className="w-full justify-end gap-2 h-auto py-3">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Neste</div>
                      <div className="font-medium">{nextChapter.number} {nextChapter.title}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </Button>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}

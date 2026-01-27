'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Upload,
  Pencil,
  Play,
  Clock,
  User,
  Star,
  Dumbbell,
  Type,
  Table,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import type { TextbookExercise } from '@/lib/types/textbook';
import { LatexRenderer } from './latex-renderer';
import { ImageUpload } from './image-upload';
import { CanvasDrawing } from './canvas-drawing';
import { SpreadsheetInput } from './spreadsheet-input';
import { MultipleChoiceExercise } from './multiple-choice-exercise';
import { TeacherCommentPanel, TeacherCommentDisplay } from './teacher-comment-panel';
import { useExerciseSubmission, useSubmitAnswer, useRecordAttempt, Submission } from '@/lib/textbook/hooks';
import { useUser } from '@/lib/auth/hooks';
import { CheckCircle2 } from 'lucide-react';
import { getExerciseSubTaskProgress, type SubTaskStatus } from '@/lib/textbook/progress';
import { Exercise } from '@/components/book/exercise';
import dynamic from 'next/dynamic';

// Dynamisk import av GeoGebra for å unngå SSR-problemer
const GeoGebraExercise = dynamic(
  () => import('@/components/geogebra/geogebra-exercise').then((mod) => mod.GeoGebraExercise),
  { ssr: false, loading: () => <div className="h-64 bg-muted animate-pulse rounded-lg" /> }
);

interface TextbookExerciseItemProps {
  exercise: TextbookExercise;
  chapterId: string;
  courseId: string;
  viewingAsStudentId?: string | null;
  isRecommended?: boolean;  // Fra adaptiv vanskelighetsgrad
  recommendedDifficulty?: 'lett' | 'medium' | 'vanskelig';
}

export function TextbookExerciseItem({
  exercise,
  chapterId,
  courseId,
  viewingAsStudentId,
  isRecommended,
  recommendedDifficulty: _recommendedDifficulty,
}: TextbookExerciseItemProps) {
  const { user } = useUser();
  const [showHints, setShowHints] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<'none' | 'upload' | 'canvas' | 'text' | 'spreadsheet'>('none');
  const [textAnswer, setTextAnswer] = useState('');
  const [showSolutionVideo, setShowSolutionVideo] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Hent lagret besvarelse
  const { submission, isLoading: _isLoadingSubmission, refetch: refetchSubmission } = useExerciseSubmission(
    exercise.id,
    chapterId,
    courseId,
    viewingAsStudentId || undefined
  );
  const { submitAnswer, isSubmitting: _isSubmitting } = useSubmitAnswer();
  const { recordAttempt, isSubmitting: isRecording } = useRecordAttempt();
  const [isMarkedComplete, setIsMarkedComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [subTaskProgress, setSubTaskProgress] = useState<Record<string, SubTaskStatus>>({});

  // Hydration fix - kun render klient-spesifikke elementer etter mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Last inn eksisterende tekstsvar når submission er lastet
  useEffect(() => {
    if (submission?.submission_type === 'text' && submission.content) {
      setTextAnswer(submission.content);
    }
  }, [submission]);

  // Hent og lytt på deloppgave-status (fra database og localStorage)
  useEffect(() => {
    if (!isMounted) return;

    // Bestem hvilken bruker vi henter fremgang for
    const targetUserId = viewingAsStudentId || user?.id;

    // Last inn lagret status fra database hvis innlogget, ellers localStorage
    const loadProgress = async () => {
      if (targetUserId) {
        try {
          // Hvis lærer ser på elev, inkluder studentId i forespørselen
          let url = `/api/textbook/subtask-progress?courseId=${courseId}&chapterId=${chapterId}&exerciseId=${exercise.id}`;
          if (viewingAsStudentId) {
            url += `&studentId=${viewingAsStudentId}`;
          }

          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            // Sett fremgang fra database (kan være tom for elever uten fremgang)
            setSubTaskProgress(data.subtaskDetails || {});
            return;
          }
        } catch (error) {
          console.error('Failed to load progress from database:', error);
        }
      }
      // Fallback til localStorage (kun for egen bruker, ikke ved lærervisning)
      if (!viewingAsStudentId) {
        const progress = getExerciseSubTaskProgress(courseId, chapterId, exercise.id);
        setSubTaskProgress(progress);
      } else {
        // Ved lærervisning uten data, vis tom fremgang
        setSubTaskProgress({});
      }
    };

    loadProgress();

    // Polling for sanntidsoppdatering (hvert 5. sekund)
    let pollInterval: NodeJS.Timeout | null = null;
    if (targetUserId) {
      pollInterval = setInterval(loadProgress, 5000);
    }

    // Lytt på oppdateringer fra andre komponenter (kun for egen bruker)
    const handleProgressUpdate = (event: CustomEvent) => {
      if (!viewingAsStudentId && event.detail.exerciseId === exercise.id) {
        loadProgress();
      }
    };

    window.addEventListener('subtaskProgressUpdated', handleProgressUpdate as EventListener);
    return () => {
      window.removeEventListener('subtaskProgressUpdated', handleProgressUpdate as EventListener);
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [isMounted, courseId, chapterId, exercise.id, user?.id, viewingAsStudentId]);

  // Er dette 8. klasse? (adaptiv vanskelighetsgrad)
  const is8thGrade = courseId === '8';

  // Er vi i lærervisning?
  const isTeacher = user?.role === 'teacher' || user?.role === 'admin';
  const isViewingAsStudent = isTeacher && !!viewingAsStudentId;

  // Bygg komplett oppgavetekst inkludert deloppgaver for AI-verifisering
  const buildFullExerciseContent = () => {
    let content = exercise.task;
    if (exercise.subTasks && exercise.subTasks.length > 0) {
      content += '\n\nDeloppgaver:\n';
      exercise.subTasks.forEach((subTask) => {
        content += `${subTask.label}) ${subTask.task}\n`;
      });
    }
    return content;
  };

  // Registrer forsøk for adaptiv vanskelighetsgrad (kun 8. klasse)
  const handleRecordAttempt = async (isCorrect: boolean) => {
    if (!is8thGrade || isViewingAsStudent) return;

    try {
      await recordAttempt({
        exerciseId: exercise.id,
        chapterId,
        courseId,
        difficulty: exercise.difficulty as 'lett' | 'medium' | 'vanskelig',
        exerciseType: exercise.type as 'interactive' | 'classic' | 'upload' | 'multiple-choice' | 'step-by-step',
        isCorrect,
        attemptCount: 1,
      });
      if (isCorrect) {
        setIsMarkedComplete(true);
      }
    } catch (error) {
      console.error('Kunne ikke registrere forsøk:', error);
    }
  };

  // Lagre besvarelse
  const handleSaveSubmission = async (
    type: Submission['submission_type'],
    content?: string,
    imageUrl?: string,
    canvasData?: Record<string, unknown>,
    isCorrect?: boolean
  ) => {
    if (isViewingAsStudent) return; // Lærere kan ikke lagre for elever

    try {
      await submitAnswer({
        exerciseId: exercise.id,
        chapterId,
        courseId,
        submissionType: type,
        content,
        imageUrl,
        canvasData,
        isCorrect,
      });
      refetchSubmission();
    } catch {
      // Error håndteres i hook
    }
  };

  // Håndter flervalgsoppgaver
  if (exercise.type === 'multiple-choice' && exercise.options) {
    return (
      <div className="space-y-4">
        {/* Anbefalt-badge */}
        {isRecommended && exercise.difficulty && (
          <RecommendedBadge difficulty={exercise.difficulty} />
        )}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <LatexRenderer content={exercise.task} />
        </div>
        {/* Oppgaveillustrasjon - rendres alltid for å unngå hydration mismatch */}
        <div className="my-4" style={{ display: exercise.image ? 'block' : 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exercise.image || ''}
            alt={exercise.image ? `Illustrasjon til oppgave ${exercise.number || ''}` : ''}
            className="max-w-md mx-auto"
          />
        </div>
        <MultipleChoiceExercise
          options={exercise.options}
          exerciseId={exercise.id}
          chapterId={chapterId}
          courseId={courseId}
          viewingAsStudentId={viewingAsStudentId}
          onSave={(selectedId, isCorrect) => {
            handleSaveSubmission('multiple-choice', selectedId, undefined, undefined, isCorrect);
            // Registrer forsøk for adaptiv vanskelighetsgrad
            if (is8thGrade && isCorrect !== undefined) {
              handleRecordAttempt(isCorrect);
            }
          }}
        />

        {/* Lagret besvarelse info */}
        {submission && (
          <SavedSubmissionDisplay submission={submission} isViewingAsStudent={isViewingAsStudent} />
        )}

        {/* Lærerkommentar */}
        {isViewingAsStudent && submission && (
          <TeacherCommentPanel submission={submission} onCommentSaved={refetchSubmission} />
        )}
        {!isViewingAsStudent && submission?.teacher_grade_feedback && (
          <TeacherCommentDisplay submission={submission} />
        )}
      </div>
    );
  }

  // Håndter interaktive Python-oppgaver
  if (exercise.type === 'interactive' && exercise.tool === 'python') {
    return (
      <div className="space-y-4">
        {/* Anbefalt-badge */}
        {isRecommended && exercise.difficulty && (
          <RecommendedBadge difficulty={exercise.difficulty} />
        )}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <LatexRenderer content={exercise.task} />
        </div>
        {/* Oppgaveillustrasjon - rendres alltid for å unngå hydration mismatch */}
        <div className="my-4" style={{ display: exercise.image ? 'block' : 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exercise.image || ''}
            alt={exercise.image ? `Illustrasjon til oppgave ${exercise.number || ''}` : ''}
            className="max-w-md mx-auto"
          />
        </div>
        <Exercise
          title={`Oppgave ${exercise.number}`}
          description=""
          initialCode={exercise.initialCode || '# Skriv din kode her\n'}
          testCases={exercise.testCases}
          hints={exercise.hints}
          difficulty={exercise.difficulty}
          storageKey={`textbook-${courseId}-${exercise.id}`}
          chapterId={chapterId}
          exerciseId={exercise.id}
        />
      </div>
    );
  }

  // Håndter interaktive GeoGebra-oppgaver
  if (exercise.type === 'interactive' && exercise.tool?.startsWith('geogebra')) {
    const appType = exercise.geogebraAppType || 'graphing';

    return (
      <div className="space-y-4">
        {/* Anbefalt-badge */}
        {isRecommended && exercise.difficulty && (
          <RecommendedBadge difficulty={exercise.difficulty} />
        )}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <LatexRenderer content={exercise.task} />
        </div>
        {/* Oppgaveillustrasjon - rendres alltid for å unngå hydration mismatch */}
        <div className="my-4" style={{ display: exercise.image ? 'block' : 'none' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exercise.image || ''}
            alt={exercise.image ? `Illustrasjon til oppgave ${exercise.number || ''}` : ''}
            className="max-w-md mx-auto"
          />
        </div>
        <GeoGebraExercise
          exercise={{
            id: exercise.id,
            task: '',
            validations: exercise.validation || [],
            initialCommands: exercise.initialCommands,
            appName: appType,
          }}
          chapterId={chapterId}
        />
        {exercise.hints && exercise.hints.length > 0 && (
          <HintsSection hints={exercise.hints} showHints={showHints} setShowHints={setShowHints} />
        )}
      </div>
    );
  }

  // Klassiske oppgaver (papir og blyant)
  return (
    <div className="space-y-4">
      {/* Anbefalt-badge */}
      {isRecommended && (
        <RecommendedBadge difficulty={exercise.difficulty} />
      )}

      {/* Undersøkelsesoppgave-badge */}
      {exercise.isInvestigation && (
        <InvestigationBadge />
      )}

      {/* Oppgavetekst */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <LatexRenderer content={exercise.task} />
      </div>

      {/* Oppgaveillustrasjon - rendres alltid for å unngå hydration mismatch */}
      <div className="my-4" style={{ display: exercise.image ? 'block' : 'none' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={exercise.image || ''}
          alt={exercise.image ? `Illustrasjon til oppgave ${exercise.number || ''}` : ''}
          className="max-w-md mx-auto"
        />
      </div>

      {/* Deloppgaver - vises alltid som liste */}
      {exercise.subTasks && exercise.subTasks.length > 0 && (() => {
        // Sjekk om eleven har prøvd på oppgaven (minst én deloppgave er forsøkt)
        const hasAttempted = Object.keys(subTaskProgress).length > 0;

        return (
          <div className="space-y-2">
            {exercise.subTasks.map((subTask) => {
              const status = subTaskProgress[subTask.label];
              let badgeClasses = 'shrink-0 h-5 w-5 flex items-center justify-center rounded-full text-sm';

              if (status === 'completed') {
                badgeClasses += ' bg-green-500 text-white border-green-500';
              } else if (status === 'skipped' || (hasAttempted && !status)) {
                // Vis som rød hvis: eksplisitt hoppet over ELLER eleven har prøvd på oppgaven men ikke denne deloppgaven
                badgeClasses += ' bg-red-500 text-white border-red-500';
              }

              return (
                <div key={subTask.label} className="flex gap-2 items-baseline">
                  <Badge variant="outline" className={badgeClasses}>
                    {subTask.label}
                  </Badge>
                  <div className="prose prose-slate dark:prose-invert max-w-none flex-1 text-sm sm:text-base">
                    <LatexRenderer content={subTask.task} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })()}

      {/* Innleveringsalternativer - tastatur er alltid tilgjengelig */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
            {exercise.allowsUpload && (
              <Button
                variant={submissionMode === 'upload' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSubmissionMode(submissionMode === 'upload' ? 'none' : 'upload')}
              >
                <Upload className="h-4 w-4 mr-1" />
                Last opp bilde
              </Button>
            )}
            {exercise.allowsCanvasDrawing && (
              <Button
                variant={submissionMode === 'canvas' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSubmissionMode(submissionMode === 'canvas' ? 'none' : 'canvas')}
              >
                <Pencil className="h-4 w-4 mr-1" />
                Tegn løsning
              </Button>
            )}
            {/* Skriv svar - alltid tilgjengelig for klassiske oppgaver */}
            <Button
              variant={submissionMode === 'text' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSubmissionMode(submissionMode === 'text' ? 'none' : 'text')}
            >
              <Type className="h-4 w-4 mr-1" />
              Skriv svar
            </Button>

            {/* Regneark - for budsjett og tabelloppgaver */}
            {exercise.allowsSpreadsheet && (
              <Button
                variant={submissionMode === 'spreadsheet' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSubmissionMode(submissionMode === 'spreadsheet' ? 'none' : 'spreadsheet')}
              >
                <Table className="h-4 w-4 mr-1" />
                Regneark
              </Button>
            )}

            {/* Løs oppgaven og Tren-knapper - vises for oppgaver med svarsjekk (numerisk, algebraisk eller multipleChoice) */}
            {(exercise.multipleChoiceOptions || (exercise.subTasks && exercise.subTasks.some(st => st.answer !== undefined || st.expressionAnswer !== undefined || st.multipleChoiceOptions))) && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-green-50 dark:bg-green-950/30 border-green-300 dark:border-green-700 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50"
                  asChild
                >
                  <Link href={`/bok/${courseId}/${chapterId}/oppgave/${exercise.id}`}>
                    <Pencil className="h-4 w-4 mr-1" />
                    Løs oppgaven
                  </Link>
                </Button>
                {/* Tren-knapp - alle oppgaver med svar går til trening-siden (skjult for kjemi1 da oppgavene er matematikk) */}
                {courseId !== 'kjemi1' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    asChild
                  >
                    <Link href={`/bok/${courseId}/${chapterId}/trening/${exercise.id}`}>
                      <Dumbbell className="h-4 w-4 mr-1" />
                      Tren
                    </Link>
                  </Button>
                )}
              </>
            )}
          </div>

          {/* Opplastingskomponent */}
          {submissionMode === 'upload' && (
            <ImageUpload
              exerciseId={exercise.id}
              chapterId={chapterId}
              courseId={courseId}
              existingUrls={
                submission?.submission_type === 'image' && submission.image_url
                  ? parseImageUrls(submission.image_url)
                  : []
              }
              onUpload={(urls) => {
                if (urls.length > 0) {
                  handleSaveSubmission('image', undefined, JSON.stringify(urls));
                }
              }}
            />
          )}

          {/* Tegnekomponent */}
          {submissionMode === 'canvas' && (
            <CanvasDrawing
              exerciseId={exercise.id}
              chapterId={chapterId}
              courseId={courseId}
              exerciseContent={buildFullExerciseContent()}
              viewingAsStudentId={viewingAsStudentId}
              onSave={(dataUrl) => {
                console.log('Canvas saved:', dataUrl.substring(0, 50) + '...');
                handleSaveSubmission('canvas-drawing', undefined, undefined, { dataUrl });
              }}
            />
          )}

          {/* Tekstsvar */}
          {submissionMode === 'text' && (
            <div className="space-y-3 p-4 border rounded-lg bg-card">
              <label className="text-sm font-medium">Skriv ditt svar:</label>
              <textarea
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                placeholder="Skriv svaret ditt her..."
                className="w-full min-h-[150px] p-3 border rounded-md bg-background text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => {
                    if (textAnswer.trim()) {
                      handleSaveSubmission('text', textAnswer);
                      setSubmissionMode('none');
                    }
                  }}
                  disabled={!textAnswer.trim()}
                >
                  Lagre svar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setTextAnswer('');
                    setSubmissionMode('none');
                  }}
                >
                  Avbryt
                </Button>
              </div>
            </div>
          )}

          {/* Regneark */}
          {submissionMode === 'spreadsheet' && (
            <SpreadsheetInput
              exerciseId={exercise.id}
              chapterId={chapterId}
              courseId={courseId}
              template={exercise.spreadsheetTemplate || 'budget'}
              onSave={(data) => {
                console.log('Spreadsheet saved:', data);
                handleSaveSubmission('spreadsheet', JSON.stringify(data));
              }}
            />
          )}

          {/* Marker som fullført - kun 8. klasse elever (ikke lærere) */}
          {isMounted && is8thGrade && !isTeacher && (
            <div className="flex items-center gap-2 pt-2 border-t">
              {isMarkedComplete ? (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Fullført!</span>
                </div>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRecordAttempt(true)}
                    disabled={isRecording}
                    className="text-green-600 border-green-300 hover:bg-green-50 dark:text-green-400 dark:border-green-700 dark:hover:bg-green-950"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    {isRecording ? 'Lagrer...' : 'Jeg klarte det!'}
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    Marker oppgaven som fullført for å oppdatere ditt nivå
                  </span>
                </>
              )}
            </div>
          )}
      </div>

      {/* Hint */}
      {exercise.hints && exercise.hints.length > 0 && (
        <HintsSection hints={exercise.hints} showHints={showHints} setShowHints={setShowHints} />
      )}

      {/* Videoløsning */}
      {exercise.solutionVideo && (
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSolutionVideo(!showSolutionVideo)}
            className="text-red-600 dark:text-red-400"
          >
            <Play className="h-4 w-4 mr-1" />
            {showSolutionVideo ? 'Skjul video' : 'Se videoløsning'}
          </Button>

          {showSolutionVideo && (
            <div className="mt-3 aspect-video max-w-2xl rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${exercise.solutionVideo}`}
                title={`Videoløsning for oppgave ${exercise.number}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Lagret besvarelse info */}
      {submission && (
        <SavedSubmissionDisplay submission={submission} isViewingAsStudent={isViewingAsStudent} />
      )}

      {/* Lærerkommentar */}
      {isViewingAsStudent && submission && (
        <TeacherCommentPanel submission={submission} onCommentSaved={refetchSubmission} />
      )}
      {!isViewingAsStudent && submission?.teacher_grade_feedback && (
        <TeacherCommentDisplay submission={submission} />
      )}

      {/* AI-grading badge */}
      {exercise.aiGradingEnabled && (
        <Badge variant="outline" className="gap-1">
          <span className="text-lg">🤖</span>
          AI-tilbakemelding tilgjengelig
        </Badge>
      )}

      {/* Vis løsning */}
      {!exercise.hideInlineSolution && (exercise.solution || (exercise.subTasks && exercise.subTasks.some(st => st.solution))) && (
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSolution(!showSolution)}
            className="text-green-700 dark:text-green-300"
          >
            {showSolution ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Skjul løsning
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Vis løsning
              </>
            )}
          </Button>

          {showSolution && (
            <div className="mt-3 p-4 bg-green-50/50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Løsning</h4>
              {exercise.subTasks && exercise.subTasks.some(st => st.solution) ? (
                <div className="space-y-2">
                  {exercise.subTasks.map((subTask) => (
                    subTask.solution && (
                      <div key={subTask.label} className="flex gap-2 items-baseline">
                        <Badge variant="outline" className="shrink-0 h-5 w-5 flex items-center justify-center rounded-full text-sm bg-green-100 dark:bg-green-900">
                          {subTask.label}
                        </Badge>
                        <div className="prose prose-slate dark:prose-invert max-w-none flex-1">
                          <LatexRenderer content={subTask.solution} />
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ) : exercise.solution ? (
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <LatexRenderer content={exercise.solution} />
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Hint-seksjon
function HintsSection({
  hints,
  showHints,
  setShowHints,
}: {
  hints: string[];
  showHints: boolean;
  setShowHints: (show: boolean) => void;
}) {
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowHints(!showHints)}
        className="text-amber-700 dark:text-amber-300"
      >
        <Lightbulb className="h-4 w-4 mr-1" />
        {showHints ? 'Skjul hint' : `Vis hint (${hints.length})`}
      </Button>

      {showHints && (
        <div className="mt-2 space-y-2 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
          {hints.map((hint, index) => (
            <p key={index} className="text-sm text-amber-800 dark:text-amber-200">
              💡 <LatexRenderer content={hint} />
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// Anbefalt-badge komponent
function RecommendedBadge({ difficulty }: { difficulty?: string }) {
  const difficultyLabels: Record<string, string> = {
    lett: 'Lett',
    medium: 'Middels',
    vanskelig: 'Vanskelig',
  };

  return (
    <div className="flex items-center gap-2">
      <Badge
        variant="outline"
        className="gap-1 bg-yellow-50 dark:bg-yellow-950/30 border-yellow-300 dark:border-yellow-700 text-yellow-700 dark:text-yellow-300"
      >
        <Star className="h-3 w-3 fill-current" />
        Anbefalt for deg
      </Badge>
      {difficulty && (
        <span className="text-xs text-muted-foreground">
          ({difficultyLabels[difficulty] || difficulty})
        </span>
      )}
    </div>
  );
}

// Undersøkelsesoppgave-badge komponent
function InvestigationBadge() {
  return (
    <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
      <Badge
        variant="outline"
        className="gap-1 bg-blue-100 dark:bg-blue-900/50 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"
      >
        <Search className="h-3 w-3" />
        Undersøkelsesoppgave
      </Badge>
      <span className="text-xs text-blue-600 dark:text-blue-400">
        Denne oppgaven krever at du undersøker kilder utenfor læreboka
      </span>
    </div>
  );
}

// Hjelpefunksjon for å parse image_url som kan være en enkelt URL eller JSON-array
function parseImageUrls(imageUrl: string): string[] {
  try {
    const parsed = JSON.parse(imageUrl);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // Ikke JSON - returner som enkelt URL
  }
  return [imageUrl];
}

// Vis lagret besvarelse
function SavedSubmissionDisplay({
  submission,
  isViewingAsStudent,
}: {
  submission: Submission;
  isViewingAsStudent: boolean;
}) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString('nb-NO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getSubmissionTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'text': 'Tekstsvar',
      'multiple-choice': 'Flervalg',
      'canvas-drawing': 'Tegning',
      'image': 'Opplastet bilde',
      'code': 'Kode',
      'geogebra-xml': 'GeoGebra',
    };
    return labels[type] || type;
  };

  const renderSubmissionContent = () => {
    switch (submission.submission_type) {
      case 'text':
        if (!submission.content) return null;
        return (
          <div className="mt-2 p-3 bg-white dark:bg-background rounded border">
            <LatexRenderer content={submission.content} />
          </div>
        );
      case 'multiple-choice':
        if (!submission.content) return null;
        return (
          <div className="mt-2">
            <span className="text-sm">Valgt svar: </span>
            <Badge variant={submission.is_correct ? 'default' : 'destructive'}>
              {submission.content}
            </Badge>
            {submission.is_correct !== null && (
              <span className="ml-2 text-sm">
                {submission.is_correct ? '✓ Riktig' : '✗ Feil'}
              </span>
            )}
          </div>
        );
      case 'canvas-drawing':
        const canvasUrl = submission.image_url || (submission.canvas_data?.dataUrl as string | undefined);
        if (!canvasUrl) return null;
        return (
          <div className="mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={canvasUrl}
              alt="Tegning"
              className="max-w-full max-h-64 rounded border"
            />
          </div>
        );
      case 'image':
        if (!submission.image_url) return null;
        const imageUrls = parseImageUrls(submission.image_url);
        return (
          <div className="mt-2 grid gap-2">
            {imageUrls.map((url, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={url}
                alt={`Opplastet bilde ${i + 1}`}
                className="max-w-full max-h-64 rounded border"
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20">
      <CardContent className="pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300 mb-2">
              {isViewingAsStudent ? (
                <>
                  <User className="h-4 w-4" />
                  <span className="font-medium">Elevens svar</span>
                </>
              ) : (
                <>
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Ditt lagrede svar</span>
                </>
              )}
              <Badge variant="outline" className="ml-2 text-xs">
                {getSubmissionTypeLabel(submission.submission_type)}
              </Badge>
            </div>

            {/* Vis innhold basert på type */}
            {renderSubmissionContent()}
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          Sist oppdatert: {formatDate(submission.updated_at || submission.created_at)}
        </p>
      </CardContent>
    </Card>
  );
}

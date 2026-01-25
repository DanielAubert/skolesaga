'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Play,
  Headphones,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TextbookContentBlock, TextbookExercise, SignDiagramBlock, ExampleSolutionBlock, IllustrationBlock, ImageBlock } from '@/lib/types/textbook';
import { useIllustrationApproval } from '@/lib/illustration-approval-context';
import { LatexRenderer } from './latex-renderer';
import { TextbookExerciseItem } from './textbook-exercise-item';
import { SignDiagram, createSignDiagram } from './sign-diagram';
import { getExerciseSubTaskProgress } from '@/lib/textbook/progress';
import dynamic from 'next/dynamic';
import {
  AngleIntroIllustration,
  AngleTypesIllustration,
  ProtractorIllustration,
  SupplementaryAnglesIllustration,
  ComplementaryAnglesIllustration,
  VerticalAnglesIllustration,
  AngleTypesOverviewIllustration,
} from './illustrations/angle-illustrations';
import {
  TriangleAngleSumIllustration,
  EquilateralTriangleIllustration,
  IsoscelesTriangleIllustration,
  RightTriangleIllustration,
  TriangleTypesOverviewIllustration,
} from './illustrations/triangle-illustrations';

// Dynamisk import av GeoGebra for å unngå SSR-problemer
const GeoGebraEmbed = dynamic(
  () => import('@/components/geogebra/geogebra-embed').then((mod) => mod.GeoGebraEmbed),
  { ssr: false, loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" /> }
);

interface ContentBlockRendererProps {
  block: TextbookContentBlock;
  chapterId?: string;
  courseId?: string;
  viewingAsStudentId?: string | null;
}

// Wrapper komponent for å filtrere bilder - kun godkjente vises
function FilteredImageBlock({ block }: { block: ImageBlock }) {
  const { approvals, isLoading } = useIllustrationApproval();

  // Sjekk om bildet er godkjent
  const approval = approvals[block.id];
  const isApproved = approval?.status === 'approved';

  // Mens vi laster, vis ingenting (for å unngå flash av ikke-godkjente bilder)
  if (isLoading) {
    return null;
  }

  // Kun vis godkjente bilder
  if (!isApproved) {
    return null;
  }

  return <ImageBlockComponent block={block} />;
}

// Wrapper komponent for å filtrere illustrasjoner - kun godkjente vises
function FilteredIllustrationBlock({ block }: { block: IllustrationBlock }) {
  const { approvals, isLoading } = useIllustrationApproval();

  // Sjekk om illustrasjonen er godkjent
  const approval = approvals[block.id];
  const isApproved = approval?.status === 'approved';

  // Mens vi laster, vis ingenting (for å unngå flash av ikke-godkjente illustrasjoner)
  if (isLoading) {
    return null;
  }

  // Kun vis godkjente illustrasjoner
  if (!isApproved) {
    return null;
  }

  return <IllustrationBlockComponent block={block} />;
}

export function ContentBlockRenderer({ block, chapterId, courseId, viewingAsStudentId }: ContentBlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <TextBlock content={block.content} />;
    case 'definition':
      return <DefinitionBlock title={block.title} content={block.content} />;
    case 'theorem':
      return <TheoremBlock title={block.title} content={block.content} proof={block.proof} />;
    case 'proof':
      return <ProofBlock title={block.title} content={block.content} />;
    case 'example':
      return <ExampleBlock title={block.title} problem={block.problem || block.content || ''} solution={block.solution || ''} solutionContent={block.solutionContent} steps={block.steps} solutionVideo={block.solutionVideo} />;
    case 'note':
      return <NoteBlock content={block.content} />;
    case 'warning':
      return <WarningBlock title={block.title} content={block.content} />;
    case 'tip':
      return <TipBlock content={block.content} />;
    case 'video':
      return <VideoBlock title={block.title} youtubeId={block.youtubeId} description={block.description} />;
    case 'audio':
      return <AudioBlockComponent title={block.title} src={block.src} description={block.description} />;
    case 'geogebra':
      return <GeoGebraBlockComponent title={block.title} description={block.description} materialId={block.materialId} commands={block.commands} appType={block.appType} />;
    case 'image':
      return <FilteredImageBlock block={block} />;
    case 'formula':
      return <FormulaBlock title={block.title} latex={block.latex || block.content || ''} description={block.description} />;
    case 'exercise':
      if (!block.exercise) return null;
      return <ExerciseBlockComponent exercise={block.exercise} chapterId={chapterId || ''} courseId={courseId || ''} viewingAsStudentId={viewingAsStudentId} />;
    case 'collapsible':
      return <CollapsibleBlockComponent title={block.title} buttonText={block.buttonText} content={block.content} chapterId={chapterId} courseId={courseId} viewingAsStudentId={viewingAsStudentId} />;
    case 'sign-diagram':
      return <SignDiagramBlockComponent block={block} />;
    case 'illustration':
      return <FilteredIllustrationBlock block={block} />;
    default:
      return null;
  }
}

// ============================================================================
// Tekstblokk
// ============================================================================

function TextBlock({ content }: { content: string }) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <LatexRenderer content={content} />
    </div>
  );
}

// ============================================================================
// Definisjon
// ============================================================================

function DefinitionBlock({ title, content }: { title: string; content: string }) {
  return (
    <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20 pt-3 pb-4 !gap-0">
      <CardHeader className="px-4 py-0">
        <CardTitle className="text-lg flex items-center gap-2 text-blue-700 dark:text-blue-300">
          <BookOpen className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pt-1 pb-0">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-0 text-left [&_.katex-display]:!my-0 [&_.katex-display]:!pt-0 [&_.katex]:!mt-0">
          <LatexRenderer content={content} />
        </div>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Setning/Teorem
// ============================================================================

function TheoremBlock({ title, content, proof }: { title: string; content: string; proof?: string }) {
  const [showProof, setShowProof] = useState(false);

  return (
    <Card className="border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2 text-purple-700 dark:text-purple-300">
          <span className="text-xl">📜</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-2">
          <LatexRenderer content={content} />
        </div>
        {proof && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowProof(!showProof)}
              className="text-purple-700 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-200"
            >
              {showProof ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Skjul bevis
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Vis bevis
                </>
              )}
            </Button>
            {showProof && (
              <div className="mt-2 p-4 bg-purple-100/50 dark:bg-purple-900/20 rounded-lg">
                <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-2">
                  <LatexRenderer content={proof} />
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Bevis
// ============================================================================

function ProofBlock({ title, content }: { title?: string; content: string }) {
  return (
    <Card className="border-l-4 border-l-gray-400 bg-gray-50/50 dark:bg-gray-900/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-gray-700 dark:text-gray-300">
          {title || 'Bevis'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-2 italic">
          <LatexRenderer content={content} />
        </div>
        <div className="text-right text-gray-500 mt-2">∎</div>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Eksempel
// ============================================================================

function ExampleBlock({
  title,
  problem,
  solution,
  solutionContent,
  steps,
  solutionVideo,
}: {
  title?: string;
  problem: string;
  solution: string;
  solutionContent?: ExampleSolutionBlock[];
  steps?: string[];
  solutionVideo?: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  // Render solution content blocks (text and sign-diagrams)
  const renderSolutionContent = () => {
    if (!solutionContent || solutionContent.length === 0) {
      return (
        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-1">
          <LatexRenderer content={solution} />
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {solutionContent.map((block, index) => {
          if (block.type === 'text') {
            return (
              <div key={index} className="prose prose-slate dark:prose-invert max-w-none prose-p:my-1">
                <LatexRenderer content={block.content} />
              </div>
            );
          }
          if (block.type === 'sign-diagram') {
            const diagramData = createSignDiagram(
              block.criticalPoints,
              block.factors,
              block.resultLabel
            );
            return (
              <SignDiagram
                key={index}
                criticalPoints={diagramData.criticalPoints}
                rows={diagramData.rows}
                title={block.title}
              />
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <Card className="border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-950/20 py-4 gap-3">
      <CardHeader className="px-4">
        <CardTitle className="text-lg flex items-center gap-2 text-green-700 dark:text-green-300">
          <span className="text-xl">✏️</span>
          {title || 'Eksempel'}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 space-y-2 text-sm sm:text-base">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-1">
          <LatexRenderer content={problem} />
        </div>

        <div className="p-2 bg-green-100/50 dark:bg-green-900/20 rounded">
          {steps && steps.length > 0 ? (
            <ol className="list-decimal list-inside space-y-1">
              {steps.map((step, index) => (
                <li key={index} className="prose prose-slate dark:prose-invert max-w-none">
                  <LatexRenderer content={step} />
                </li>
              ))}
            </ol>
          ) : (
            renderSolutionContent()
          )}
        </div>

        {solutionVideo && (
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowVideo(!showVideo)}
              className="text-red-600 dark:text-red-400 p-0 h-auto"
            >
              <Play className="h-4 w-4 mr-1" />
              {showVideo ? 'Skjul video' : 'Se videogjennomgang'}
            </Button>

            {showVideo && (
              <YouTubeEmbed videoId={solutionVideo} title={title} />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Info/Note
// ============================================================================

function NoteBlock({ content }: { content: string }) {
  return (
    <Alert className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
      <Info className="h-4 w-4 text-blue-500" />
      <AlertDescription className="text-blue-800 dark:text-blue-200">
        <LatexRenderer content={content} />
      </AlertDescription>
    </Alert>
  );
}

// ============================================================================
// Advarsel
// ============================================================================

function WarningBlock({ title, content }: { title?: string; content: string }) {
  return (
    <Alert className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
      <AlertTriangle className="h-4 w-4 text-amber-500" />
      {title && <AlertTitle className="text-amber-800 dark:text-amber-200">{title}</AlertTitle>}
      <AlertDescription className="text-amber-800 dark:text-amber-200">
        <LatexRenderer content={content} />
      </AlertDescription>
    </Alert>
  );
}

// ============================================================================
// Tips
// ============================================================================

function TipBlock({ content }: { content: string }) {
  return (
    <Alert className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20">
      <Lightbulb className="h-4 w-4 text-emerald-500" />
      <AlertDescription className="text-emerald-800 dark:text-emerald-200">
        <LatexRenderer content={content} />
      </AlertDescription>
    </Alert>
  );
}

// ============================================================================
// Video
// ============================================================================

function VideoBlock({
  title,
  youtubeId,
  description,
}: {
  title?: string;
  youtubeId: string;
  description?: string;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Play className="h-5 w-5 text-red-500" />
          {title || 'Video'}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">
            <LatexRenderer content={description} inline />
          </p>
        )}
      </CardHeader>
      <CardContent>
        <YouTubeEmbed videoId={youtubeId} title={title} />
      </CardContent>
    </Card>
  );
}

// YouTube embed component - viser thumbnail først, laster iframe ved klikk
function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="mt-2 max-w-2xl">
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-red-500 mt-1 inline-block"
        >
          Åpne i YouTube →
        </a>
      </div>
    );
  }

  return (
    <div className="mt-2 max-w-2xl">
      <button
        onClick={() => setIsPlaying(true)}
        className="w-full aspect-video rounded-lg overflow-hidden bg-cover bg-center relative group cursor-pointer"
        style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
        </div>
      </button>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground hover:text-red-500 mt-1 inline-block"
      >
        Åpne i YouTube →
      </a>
    </div>
  );
}

// ============================================================================
// Audio
// ============================================================================

function AudioBlockComponent({
  title,
  src,
  description,
}: {
  title?: string;
  src: string;
  description?: string;
}) {
  return (
    <Card className="border-2 border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2 text-teal-700 dark:text-teal-300">
          <Headphones className="h-5 w-5" />
          {title || 'Lytt til kapitlet'}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <audio
          controls
          className="w-full"
          preload="metadata"
        >
          <source src={src} type="audio/mpeg" />
          Nettleseren din støtter ikke lydavspilling.
        </audio>
      </CardContent>
    </Card>
  );
}

// ============================================================================
// GeoGebra
// ============================================================================

function GeoGebraBlockComponent({
  title,
  description,
  materialId,
  commands,
  appType,
}: {
  title?: string;
  description?: string;
  materialId?: string;
  commands?: string[];
  appType?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific';
}) {
  return (
    <Card className="border-2 border-orange-200 dark:border-orange-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2 text-orange-700 dark:text-orange-300">
          <span className="text-xl">📊</span>
          {title || 'GeoGebra'}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">
            <LatexRenderer content={description} inline />
          </p>
        )}
      </CardHeader>
      <CardContent>
        <GeoGebraEmbed
          materialId={materialId}
          appName={appType || 'graphing'}
          initialCommands={commands}
          height={400}
          showToolBar={true}
          showAlgebraInput={true}
          showResetIcon={true}
          enableRightClick={true}
        />
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Bilde
// ============================================================================

function ImageBlockComponent({ block }: { block: ImageBlock }) {
  // Sjekk om bildet er designet for mørk bakgrunn og trenger mørk bakgrunn i lys modus
  const needsDarkBackground = block.src.includes('fortegnsregler');

  return (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={block.src}
        alt={block.alt}
        className={cn(
          'rounded-lg mx-auto',
          block.caption && 'mb-2',
          needsDarkBackground && 'dark:bg-transparent dark:p-0 bg-gray-900 p-4 rounded-xl'
        )}
      />
      {block.caption && (
        <figcaption className="text-center text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

// ============================================================================
// Formel
// ============================================================================

function FormulaBlock({
  title,
  latex,
  description,
}: {
  title?: string;
  latex: string;
  description?: string;
}) {
  return (
    <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20">
      {title && (
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-indigo-700 dark:text-indigo-300">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn(!title && 'pt-6')}>
        <div className="text-center text-xl py-4">
          <LatexRenderer content={`$$${latex}$$`} />
        </div>
        {description && (
          <p className="text-sm text-muted-foreground text-center mt-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Oppgaveblokk (innebygd i innholdsstrømmen)
// ============================================================================

function ExerciseBlockComponent({
  exercise,
  chapterId,
  courseId,
  viewingAsStudentId,
}: {
  exercise: TextbookExercise;
  chapterId: string;
  courseId: string;
  viewingAsStudentId?: string | null;
}) {
  return (
    <Card className="border-l-4 border-l-orange-500 bg-orange-50/50 dark:bg-orange-950/20 py-4 gap-3">
      <CardHeader className="px-4">
        <CardTitle className="text-lg flex items-center gap-2 text-orange-700 dark:text-orange-300">
          <span className="text-xl">📝</span>
          Oppgave {exercise.number}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <TextbookExerciseItem
          exercise={exercise}
          chapterId={chapterId}
          courseId={courseId}
          viewingAsStudentId={viewingAsStudentId}
        />
      </CardContent>
    </Card>
  );
}

// ============================================================================
// Collapsible (Sammenleggbar seksjon)
// ============================================================================

function CollapsibleBlockComponent({
  title,
  buttonText,
  content,
  chapterId,
  courseId,
  viewingAsStudentId,
}: {
  title: string;
  buttonText?: string;
  content: TextbookContentBlock[];
  chapterId?: string;
  courseId?: string;
  viewingAsStudentId?: string | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [progressVersion, setProgressVersion] = useState(0);

  // Lytt til endringer i fremgang
  useEffect(() => {
    const handleProgressUpdate = () => {
      setProgressVersion(v => v + 1);
    };
    window.addEventListener('textbookExerciseCompleted', handleProgressUpdate);
    window.addEventListener('subtaskProgressUpdated', handleProgressUpdate);
    return () => {
      window.removeEventListener('textbookExerciseCompleted', handleProgressUpdate);
      window.removeEventListener('subtaskProgressUpdated', handleProgressUpdate);
    };
  }, []);

  // Hent oppgaver fra collapsible innholdet
  const exercises = useMemo(() => {
    return content
      .filter((block): block is { type: 'exercise'; exercise: TextbookExercise; id: string } =>
        block.type === 'exercise'
      )
      .map(block => block.exercise);
  }, [content]);

  // Beregn fremgang for oppgavene i collapsible
  const progressStats = useMemo(() => {
    if (!courseId || !chapterId || exercises.length === 0) {
      return { completed: 0, skipped: 0, total: 0, totalSubTasks: 0 };
    }

    let completedSubTasks = 0;
    let skippedSubTasks = 0;
    let totalSubTasks = 0;
    let completedExercises = 0;

    for (const exercise of exercises) {
      const subTasks = exercise.subTasks || [];
      totalSubTasks += subTasks.length;

      const progress = getExerciseSubTaskProgress(courseId, chapterId, exercise.id);
      let exerciseCompleted = subTasks.length > 0;

      for (const subTask of subTasks) {
        const status = progress[subTask.label];
        if (status === 'completed') {
          completedSubTasks++;
        } else if (status === 'skipped') {
          skippedSubTasks++;
        } else {
          exerciseCompleted = false;
        }
      }

      if (exerciseCompleted && subTasks.length > 0) {
        completedExercises++;
      }
    }

    return {
      completed: completedSubTasks,
      skipped: skippedSubTasks,
      total: totalSubTasks,
      completedExercises,
      totalExercises: exercises.length,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, chapterId, exercises, progressVersion]);

  const percentage = progressStats.total > 0
    ? ((progressStats.completed + progressStats.skipped) / progressStats.total) * 100
    : 0;

  return (
    <Card className="border-2 border-dashed border-muted-foreground/30">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="gap-2"
          >
            {isOpen ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Skjul
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                {buttonText || 'Vis oppgaver'}
              </>
            )}
          </Button>
        </div>

        {/* Progressjonsbar for repetisjonsoppgaver */}
        {exercises.length > 0 && (
          <div className="mt-3 pt-3 border-t">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Din fremgang</span>
              <div className="flex items-center gap-3 text-muted-foreground">
                {progressStats.total > 0 && (
                  <span className="flex items-center gap-1.5">
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {progressStats.completed}
                    </span>
                    {progressStats.skipped > 0 && (
                      <>
                        <span>/</span>
                        <span className="text-red-500 dark:text-red-400 font-medium">
                          {progressStats.skipped}
                        </span>
                      </>
                    )}
                    <span>deloppgaver</span>
                  </span>
                )}
                <span>
                  {progressStats.completedExercises} / {progressStats.totalExercises} oppgaver
                </span>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${percentage}%`,
                  background: progressStats.skipped > 0
                    ? `linear-gradient(to right, rgb(34 197 94) ${(progressStats.completed / (progressStats.completed + progressStats.skipped)) * 100}%, rgb(239 68 68) ${(progressStats.completed / (progressStats.completed + progressStats.skipped)) * 100}%)`
                    : 'rgb(34 197 94)',
                }}
              />
            </div>
          </div>
        )}
      </CardHeader>
      {isOpen && (
        <CardContent className="space-y-6 pt-4">
          {content.map((block) => (
            <ContentBlockRenderer
              key={block.id}
              block={block}
              chapterId={chapterId}
              courseId={courseId}
              viewingAsStudentId={viewingAsStudentId}
            />
          ))}
        </CardContent>
      )}
    </Card>
  );
}

// ============================================================================
// Fortegnsskjema
// ============================================================================

function SignDiagramBlockComponent({ block }: { block: SignDiagramBlock }) {
  const { criticalPoints, rows } = createSignDiagram(
    block.criticalPoints,
    block.factors,
    block.resultLabel
  );

  return (
    <SignDiagram
      criticalPoints={criticalPoints}
      rows={rows}
      title={block.title}
    />
  );
}

// ============================================================================
// Illustrasjon (SVG-komponenter)
// ============================================================================

// Register av tilgjengelige illustrasjoner
const ILLUSTRATIONS: Record<string, React.ComponentType<{ className?: string }>> = {
  // Vinkel-illustrasjoner
  'angle-intro': AngleIntroIllustration,
  'angle-types': AngleTypesIllustration,
  'protractor': ProtractorIllustration,
  'supplementary-angles': SupplementaryAnglesIllustration,
  'complementary-angles': ComplementaryAnglesIllustration,
  'vertical-angles': VerticalAnglesIllustration,
  'angle-types-overview': AngleTypesOverviewIllustration,
  // Trekant-illustrasjoner
  'triangle-angle-sum': TriangleAngleSumIllustration,
  'triangle-equilateral': EquilateralTriangleIllustration,
  'triangle-isosceles': IsoscelesTriangleIllustration,
  'triangle-right': RightTriangleIllustration,
  'triangle-types-overview': TriangleTypesOverviewIllustration,
};

function IllustrationBlockComponent({ block }: { block: IllustrationBlock }) {
  // Handle both string IDs and inline illustrations
  const illustrationId = typeof block.illustrationId === 'string'
    ? block.illustrationId
    : block.illustrationId.id;

  // Check for inline SVG illustration
  if (typeof block.illustrationId !== 'string' && block.illustrationId.svgContent) {
    return (
      <figure className="my-6">
        <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: block.illustrationId.svgContent }} />
        {block.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  const IllustrationComponent = ILLUSTRATIONS[illustrationId];

  if (!IllustrationComponent) {
    console.warn(`Unknown illustration: ${illustrationId}`);
    return null;
  }

  return (
    <figure className="my-6">
      <div className="flex justify-center">
        <IllustrationComponent className="max-w-full h-auto" />
      </div>
      {block.caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

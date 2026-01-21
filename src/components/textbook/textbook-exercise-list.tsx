'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Code,
  FileImage,
  Pencil,
  Star,
} from 'lucide-react';
import type { TextbookExercise } from '@/lib/types/textbook';
import { TextbookExerciseItem } from './textbook-exercise-item';
import { useSkillLevel, type Difficulty } from '@/lib/textbook/hooks';

interface TextbookExerciseListProps {
  exercises: TextbookExercise[];
  chapterId: string;
  courseId: string;
  viewingAsStudentId?: string | null;
}

export function TextbookExerciseList({
  exercises,
  chapterId,
  courseId,
  viewingAsStudentId,
}: TextbookExerciseListProps) {
  const [expandedExercises, setExpandedExercises] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<'all' | 'recommended' | 'interactive' | 'classic' | 'upload'>('all');

  // Hent ferdighetsnivå kun for 8. klasse
  const is8thGrade = courseId === '8';
  const { recommendedDifficulty } = useSkillLevel(courseId, chapterId);

  const toggleExercise = (exerciseId: string) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedExercises(new Set(exercises.map((e) => e.id)));
  };

  const collapseAll = () => {
    setExpandedExercises(new Set());
  };

  // Sjekk om en oppgave er anbefalt
  const isExerciseRecommended = (exercise: TextbookExercise): boolean => {
    if (!is8thGrade) return false;
    return exercise.difficulty === recommendedDifficulty;
  };

  // Tell anbefalte oppgaver
  const recommendedCount = is8thGrade
    ? exercises.filter(e => e.difficulty === recommendedDifficulty).length
    : 0;

  // Filtrer oppgaver
  const filteredExercises = exercises.filter((exercise) => {
    if (filter === 'all') return true;
    if (filter === 'recommended') return isExerciseRecommended(exercise);
    if (filter === 'interactive') return exercise.type === 'interactive';
    if (filter === 'classic') return exercise.type === 'classic' || exercise.type === 'multiple-choice';
    if (filter === 'upload') return exercise.allowsUpload || exercise.allowsCanvasDrawing;
    return true;
  });

  // Gruppér etter vanskelighetsgrad
  const easyExercises = filteredExercises.filter((e) => e.difficulty === 'lett');
  const mediumExercises = filteredExercises.filter((e) => e.difficulty === 'medium');
  const hardExercises = filteredExercises.filter((e) => e.difficulty === 'vanskelig');

  const difficultyColor = {
    lett: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    vanskelig: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <div className="space-y-6">
      {/* Filter og kontroller */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
          <TabsList>
            <TabsTrigger value="all" className="gap-1.5">
              Alle
              <Badge variant="secondary" className="ml-1">{exercises.length}</Badge>
            </TabsTrigger>
            {is8thGrade && recommendedCount > 0 && (
              <TabsTrigger value="recommended" className="gap-1.5">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="hidden sm:inline">Anbefalt</span>
                <Badge variant="secondary" className="ml-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  {recommendedCount}
                </Badge>
              </TabsTrigger>
            )}
            <TabsTrigger value="interactive" className="gap-1.5">
              <Code className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Interaktive</span>
            </TabsTrigger>
            <TabsTrigger value="classic" className="gap-1.5">
              <Pencil className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Klassiske</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="gap-1.5">
              <FileImage className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Opplasting</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            <ChevronDown className="h-4 w-4 mr-1" />
            Utvid alle
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            <ChevronUp className="h-4 w-4 mr-1" />
            Skjul alle
          </Button>
        </div>
      </div>

      {/* Oppgaveliste */}
      <div className="space-y-8">
        {/* Lette oppgaver */}
        {easyExercises.length > 0 && (
          <ExerciseSection
            title="Lett"
            exercises={easyExercises}
            expandedExercises={expandedExercises}
            toggleExercise={toggleExercise}
            chapterId={chapterId}
            courseId={courseId}
            badgeClass={difficultyColor.lett}
            viewingAsStudentId={viewingAsStudentId}
            isRecommendedSection={is8thGrade && recommendedDifficulty === 'lett'}
            recommendedDifficulty={is8thGrade ? recommendedDifficulty : undefined}
          />
        )}

        {/* Medium oppgaver */}
        {mediumExercises.length > 0 && (
          <ExerciseSection
            title="Medium"
            exercises={mediumExercises}
            expandedExercises={expandedExercises}
            toggleExercise={toggleExercise}
            chapterId={chapterId}
            courseId={courseId}
            badgeClass={difficultyColor.medium}
            viewingAsStudentId={viewingAsStudentId}
            isRecommendedSection={is8thGrade && recommendedDifficulty === 'medium'}
            recommendedDifficulty={is8thGrade ? recommendedDifficulty : undefined}
          />
        )}

        {/* Vanskelige oppgaver */}
        {hardExercises.length > 0 && (
          <ExerciseSection
            title="Vanskelig"
            exercises={hardExercises}
            expandedExercises={expandedExercises}
            toggleExercise={toggleExercise}
            chapterId={chapterId}
            courseId={courseId}
            badgeClass={difficultyColor.vanskelig}
            viewingAsStudentId={viewingAsStudentId}
            isRecommendedSection={is8thGrade && recommendedDifficulty === 'vanskelig'}
            recommendedDifficulty={is8thGrade ? recommendedDifficulty : undefined}
          />
        )}

        {filteredExercises.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            Ingen oppgaver matcher filteret.
          </p>
        )}
      </div>
    </div>
  );
}

// Seksjon for en vanskelighetsgrad
function ExerciseSection({
  title,
  exercises,
  expandedExercises,
  toggleExercise,
  chapterId,
  courseId,
  badgeClass,
  viewingAsStudentId,
  isRecommendedSection,
  recommendedDifficulty,
}: {
  title: string;
  exercises: TextbookExercise[];
  expandedExercises: Set<string>;
  toggleExercise: (id: string) => void;
  chapterId: string;
  courseId: string;
  badgeClass: string;
  viewingAsStudentId?: string | null;
  isRecommendedSection?: boolean;
  recommendedDifficulty?: Difficulty;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Badge className={badgeClass}>{title}</Badge>
        {isRecommendedSection && (
          <Badge className="gap-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300">
            <Star className="h-3 w-3 fill-current" />
            Anbefalt for deg
          </Badge>
        )}
        <span className="text-sm text-muted-foreground">
          {exercises.length} {exercises.length === 1 ? 'oppgave' : 'oppgaver'}
        </span>
      </div>

      <div className="space-y-3">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isExpanded={expandedExercises.has(exercise.id)}
            onToggle={() => toggleExercise(exercise.id)}
            chapterId={chapterId}
            courseId={courseId}
            viewingAsStudentId={viewingAsStudentId}
            isRecommended={isRecommendedSection}
            recommendedDifficulty={recommendedDifficulty}
          />
        ))}
      </div>
    </div>
  );
}

// Enkelt oppgavekort
function ExerciseCard({
  exercise,
  isExpanded,
  onToggle,
  chapterId,
  courseId,
  viewingAsStudentId,
  isRecommended,
  recommendedDifficulty,
}: {
  exercise: TextbookExercise;
  isExpanded: boolean;
  onToggle: () => void;
  chapterId: string;
  courseId: string;
  viewingAsStudentId?: string | null;
  isRecommended?: boolean;
  recommendedDifficulty?: Difficulty;
}) {
  // TODO: Hent faktisk completion status fra localStorage eller database
  const isCompleted = false;

  const getTypeIcon = () => {
    switch (exercise.type) {
      case 'interactive':
        return <Code className="h-4 w-4" />;
      case 'upload':
        return <FileImage className="h-4 w-4" />;
      default:
        return <Pencil className="h-4 w-4" />;
    }
  };

  const getToolBadge = () => {
    if (!exercise.tool || exercise.tool === 'none') return null;
    const toolLabels: Record<string, string> = {
      'geogebra-graph': 'GeoGebra',
      'geogebra-cas': 'CAS',
      'geogebra-geometry': 'Geometri',
      'geogebra-3d': '3D',
      python: 'Python',
    };
    return (
      <Badge variant="outline" className="text-xs">
        {toolLabels[exercise.tool] || exercise.tool}
      </Badge>
    );
  };

  return (
    <Card className={isExpanded ? 'ring-2 ring-primary/50' : ''}>
      <CardHeader
        className="py-3 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isCompleted ? (
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
            )}
            <div className="flex items-center gap-2">
              <span className="font-mono font-semibold text-primary">
                {exercise.number}
              </span>
              {getTypeIcon()}
              {getToolBadge()}
              {(exercise.allowsUpload || exercise.allowsCanvasDrawing) && (
                <Badge variant="outline" className="text-xs gap-1">
                  <FileImage className="h-3 w-3" />
                  Opplasting
                </Badge>
              )}
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
          <TextbookExerciseItem
            exercise={exercise}
            chapterId={chapterId}
            courseId={courseId}
            viewingAsStudentId={viewingAsStudentId}
            isRecommended={isRecommended}
            recommendedDifficulty={recommendedDifficulty}
          />
        </CardContent>
      )}
    </Card>
  );
}

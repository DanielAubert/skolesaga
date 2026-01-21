'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  Trophy,
  RotateCcw,
} from 'lucide-react';
import { GeoGebraExercise } from './geogebra-exercise';
import { useGeoGebraProgress } from '@/hooks/use-geogebra-progress';
import type { ValidatedExercise } from '@/lib/geogebra/validation-types';
import { cn } from '@/lib/utils';

interface GeoGebraExercisesSectionProps {
  chapterId: string;
  exercises: ValidatedExercise[];
  title?: string;
}

export function GeoGebraExercisesSection({
  chapterId,
  exercises,
  title = 'Øvelser med sjekk',
}: GeoGebraExercisesSectionProps) {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const {
    getExerciseStatus,
    markExerciseCompleted,
    getChapterCompletionPercent,
    resetChapterProgress,
    isLoading,
  } = useGeoGebraProgress();

  const completionPercent = getChapterCompletionPercent(chapterId, exercises.length);
  const allCompleted = completionPercent === 100;

  const handleExerciseComplete = (exerciseId: string) => {
    markExerciseCompleted(chapterId, exerciseId);
  };

  const toggleExercise = (exerciseId: string) => {
    setExpandedExercise(expandedExercise === exerciseId ? null : exerciseId);
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          Laster øvelser...
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {/* Progress header */}
      <Card
        className={cn(
          'transition-colors',
          allCompleted && 'border-green-500 bg-green-50 dark:bg-green-900/20'
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {allCompleted ? (
                <Trophy className="h-5 w-5 text-yellow-500" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              {title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {exercises.filter((e) => getExerciseStatus(chapterId, e.id)?.completed).length} /{' '}
                {exercises.length} fullført
              </span>
              {completionPercent > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => resetChapterProgress(chapterId)}
                  title="Nullstill fremgang"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <Progress value={completionPercent} className="h-2" />
            {allCompleted && (
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Gratulerer! Du har fullført alle øvelsene i dette kapittelet!
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Exercise list */}
      <div className="space-y-2">
        {exercises.map((exercise, index) => {
          const status = getExerciseStatus(chapterId, exercise.id);
          const isExpanded = expandedExercise === exercise.id;
          const isCompleted = status?.completed || false;

          return (
            <div key={exercise.id} className="space-y-2">
              {/* Exercise header (collapsible) */}
              <button
                onClick={() => toggleExercise(exercise.id)}
                className={cn(
                  'w-full flex items-center gap-3 p-4 rounded-lg border transition-colors text-left',
                  isCompleted
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30'
                    : 'bg-card hover:bg-muted/50'
                )}
              >
                {/* Status icon */}
                <div
                  className={cn(
                    'flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0',
                    isCompleted
                      ? 'bg-green-100 dark:bg-green-800'
                      : 'bg-muted'
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                  )}
                </div>

                {/* Exercise title */}
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      'font-medium',
                      isCompleted && 'text-green-700 dark:text-green-300'
                    )}
                  >
                    {exercise.task}
                  </p>
                  {status?.attempts && status.attempts > 0 && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {status.attempts} forsøk
                      {status.completedAt && (
                        <>
                          {' '}
                          · Fullført{' '}
                          {new Date(status.completedAt).toLocaleDateString('nb-NO')}
                        </>
                      )}
                    </p>
                  )}
                </div>

                {/* Expand/collapse icon */}
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Expanded exercise content */}
              {isExpanded && (
                <GeoGebraExercise
                  exercise={exercise}
                  chapterId={chapterId}
                  onComplete={handleExerciseComplete}
                  isCompleted={isCompleted}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

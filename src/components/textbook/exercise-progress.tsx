'use client';

import { Badge } from '@/components/ui/badge';
import { LatexRenderer } from './latex-renderer';
import type { SubTaskStatus } from '@/lib/textbook/progress';

interface SubTask {
  label: string;
  task: string;
  answer?: number | number[];
  expressionAnswer?: string | string[];
}

interface ExerciseProgressBarProps {
  completed: number;
  total: number;
  exerciseNumber?: string;
  totalExercises?: number;
  currentExercise?: number;
  className?: string;
}

/**
 * Fremgangsbar for kapittel/oppgave
 * Viser "Din fremgang" med antall fullførte deloppgaver og oppgaver
 */
export function ExerciseProgressBar({
  completed,
  total,
  exerciseNumber: _exerciseNumber,
  totalExercises,
  currentExercise,
  className = '',
}: ExerciseProgressBarProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className={`p-4 bg-muted/50 rounded-lg ${className}`}>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-medium">Din fremgang</span>
        <div className="flex items-center gap-3 text-muted-foreground">
          {total > 0 && (
            <span className="flex items-center gap-1.5">
              <span className="text-green-600 dark:text-green-400 font-medium">{completed}</span>
              <span>deloppgaver</span>
            </span>
          )}
          {totalExercises && currentExercise && (
            <span className="flex items-center gap-1.5">
              <span className="font-medium">{currentExercise}</span>
              <span>/</span>
              <span>{totalExercises}</span>
              <span>oppgaver</span>
            </span>
          )}
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface SubTaskGridProps {
  subTasks: SubTask[];
  progress: Record<string, SubTaskStatus>;
  currentLabel?: string;
  onSubTaskClick?: (label: string) => void;
  showTask?: boolean;
  className?: string;
}

/**
 * Grid med deloppgave-sirkler (a, b, c, d...)
 * Viser status med farge: grønn=fullført, grå=hoppet over, kant=ikke startet
 */
export function SubTaskGrid({
  subTasks,
  progress,
  currentLabel,
  onSubTaskClick,
  showTask = true,
  className = '',
}: SubTaskGridProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-x-6 sm:gap-x-12 gap-y-3 ${className}`}>
      {subTasks.map((subTask) => {
        const status = progress[subTask.label];
        const isCurrent = currentLabel === subTask.label;

        let badgeClasses = 'shrink-0 h-6 w-6 flex items-center justify-center rounded-full text-sm font-medium transition-all';

        if (status === 'completed') {
          badgeClasses += ' bg-green-500 text-white border-2 border-green-500';
        } else if (status === 'skipped') {
          badgeClasses += ' bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-2 border-gray-300 dark:border-gray-600';
        } else if (isCurrent) {
          badgeClasses += ' bg-blue-500 text-white border-2 border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800';
        } else {
          badgeClasses += ' bg-transparent text-green-600 dark:text-green-400 border-2 border-green-500';
        }

        const isClickable = !!onSubTaskClick;
        if (isClickable) {
          badgeClasses += ' cursor-pointer hover:scale-110';
        }

        return (
          <div
            key={subTask.label}
            className={`flex gap-2 items-baseline ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={() => onSubTaskClick?.(subTask.label)}
          >
            <Badge variant="outline" className={badgeClasses}>
              {subTask.label}
            </Badge>
            {showTask && (
              <div className="prose prose-slate dark:prose-invert max-w-none flex-1 whitespace-nowrap text-sm sm:text-base">
                <LatexRenderer content={subTask.task} inline />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface SubTaskCirclesProps {
  subTasks: SubTask[];
  progress: Record<string, SubTaskStatus>;
  currentLabel?: string;
  onSubTaskClick?: (label: string) => void;
  className?: string;
}

/**
 * Kompakt visning av deloppgave-sirkler (kun bokstaver, ingen oppgavetekst)
 * Perfekt for header/navigasjon
 */
export function SubTaskCircles({
  subTasks,
  progress,
  currentLabel,
  onSubTaskClick,
  className = '',
}: SubTaskCirclesProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {subTasks.map((subTask) => {
        const status = progress[subTask.label];
        const isCurrent = currentLabel === subTask.label;

        let badgeClasses = 'h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold transition-all';

        if (status === 'completed') {
          badgeClasses += ' bg-green-500 text-white';
        } else if (status === 'skipped') {
          badgeClasses += ' bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400';
        } else if (isCurrent) {
          badgeClasses += ' bg-blue-500 text-white ring-2 ring-blue-200 dark:ring-blue-800';
        } else {
          badgeClasses += ' bg-transparent text-green-600 dark:text-green-400 border-2 border-green-500';
        }

        const isClickable = !!onSubTaskClick;
        if (isClickable) {
          badgeClasses += ' cursor-pointer hover:scale-110';
        }

        return (
          <button
            key={subTask.label}
            type="button"
            className={badgeClasses}
            onClick={() => onSubTaskClick?.(subTask.label)}
            disabled={!isClickable}
          >
            {subTask.label}
          </button>
        );
      })}
    </div>
  );
}

interface ExerciseHeaderProps {
  exerciseNumber: string;
  title?: string;
  subTasks: SubTask[];
  progress: Record<string, SubTaskStatus>;
  currentLabel?: string;
  onSubTaskClick?: (label: string) => void;
  className?: string;
}

/**
 * Kombinert header med oppgavetittel og deloppgave-sirkler
 */
export function ExerciseHeader({
  exerciseNumber,
  title,
  subTasks,
  progress,
  currentLabel,
  onSubTaskClick,
  className = '',
}: ExerciseHeaderProps) {
  const completedCount = Object.values(progress).filter(s => s === 'completed').length;
  const totalCount = subTasks.length;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Oppgave {exerciseNumber}
          {title && <span className="font-normal text-muted-foreground ml-2">- {title}</span>}
        </h2>
        <span className="text-sm text-muted-foreground">
          {completedCount} / {totalCount} fullført
        </span>
      </div>
      <SubTaskCircles
        subTasks={subTasks}
        progress={progress}
        currentLabel={currentLabel}
        onSubTaskClick={onSubTaskClick}
      />
    </div>
  );
}

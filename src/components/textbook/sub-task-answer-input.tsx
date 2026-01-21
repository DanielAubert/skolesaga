'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';
import type { SubTask } from '@/lib/types/textbook';
import { LatexRenderer } from './latex-renderer';
import { cn } from '@/lib/utils';

interface SubTaskAnswerInputProps {
  subTasks: SubTask[];
  onAllCorrect?: () => void;
  onAttempt?: (label: string, isCorrect: boolean) => void;
}

interface SubTaskState {
  value: string;
  isCorrect: boolean | null;
  attempts: number;
}

export function SubTaskAnswerInput({ subTasks, onAllCorrect, onAttempt }: SubTaskAnswerInputProps) {
  // Filter to only tasks that have answers
  const answeredTasks = subTasks.filter(task => task.answer !== undefined);

  const [states, setStates] = useState<Record<string, SubTaskState>>(() => {
    const initial: Record<string, SubTaskState> = {};
    answeredTasks.forEach(task => {
      initial[task.label] = { value: '', isCorrect: null, attempts: 0 };
    });
    return initial;
  });

  const [allCorrect, setAllCorrect] = useState(false);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const hasCalledOnAllCorrect = useRef(false);

  // Check if all tasks are correct
  const checkAllCorrect = useCallback(() => {
    const allDone = answeredTasks.every(task => states[task.label]?.isCorrect === true);
    if (allDone && !hasCalledOnAllCorrect.current) {
      setAllCorrect(true);
      hasCalledOnAllCorrect.current = true;
      onAllCorrect?.();
    }
  }, [answeredTasks, states, onAllCorrect]);

  useEffect(() => {
    checkAllCorrect();
  }, [checkAllCorrect]);

  // Focus first input on mount
  useEffect(() => {
    if (answeredTasks.length > 0) {
      const firstTask = answeredTasks[0];
      setTimeout(() => {
        inputRefs.current[firstTask.label]?.focus();
      }, 100);
    }
  }, [answeredTasks]);

  // Check if answer is correct
  const isAnswerCorrect = (task: SubTask, value: string): boolean => {
    const numValue = parseFloat(value.replace(',', '.').trim());
    if (isNaN(numValue)) return false;

    if (Array.isArray(task.answer)) {
      return task.answer.includes(numValue);
    }
    return task.answer === numValue;
  };

  // Handle input change
  const handleInputChange = (label: string, value: string) => {
    setStates(prev => ({
      ...prev,
      [label]: { ...prev[label], value, isCorrect: null }
    }));
  };

  // Handle submit (Enter or blur)
  const handleSubmit = (task: SubTask) => {
    const state = states[task.label];
    if (!state.value.trim()) return;

    const correct = isAnswerCorrect(task, state.value);

    setStates(prev => ({
      ...prev,
      [task.label]: {
        ...prev[task.label],
        isCorrect: correct,
        attempts: prev[task.label].attempts + 1
      }
    }));

    onAttempt?.(task.label, correct);

    // If correct, focus next unanswered task
    if (correct) {
      const currentIndex = answeredTasks.findIndex(t => t.label === task.label);
      const nextTask = answeredTasks.slice(currentIndex + 1).find(t =>
        states[t.label]?.isCorrect !== true
      );
      if (nextTask) {
        setTimeout(() => {
          inputRefs.current[nextTask.label]?.focus();
        }, 100);
      }
    }
  };

  // Handle key down
  const handleKeyDown = (e: React.KeyboardEvent, task: SubTask) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(task);
    }
  };

  if (answeredTasks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Success banner */}
      {allCorrect && (
        <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900">
            <Trophy className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-300">Godkjent!</p>
            <p className="text-sm text-green-600 dark:text-green-400">
              Du har svart riktig på alle deloppgavene.
            </p>
          </div>
        </div>
      )}

      {/* SubTask inputs in grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {answeredTasks.map((task) => {
          const state = states[task.label];
          const isCorrect = state?.isCorrect === true;
          const isIncorrect = state?.isCorrect === false;

          return (
            <div
              key={task.label}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg border transition-all duration-200",
                isCorrect && "bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-700",
                isIncorrect && "bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-700",
                !isCorrect && !isIncorrect && "bg-muted/50 border-border"
              )}
            >
              {/* Label badge */}
              <Badge
                variant="outline"
                className={cn(
                  "shrink-0 h-7 w-7 flex items-center justify-center rounded-full text-sm font-medium",
                  isCorrect && "bg-green-100 dark:bg-green-900 border-green-400",
                  isIncorrect && "bg-red-100 dark:bg-red-900 border-red-400"
                )}
              >
                {task.label}
              </Badge>

              {/* Task expression */}
              <div className="flex-1 text-sm font-medium whitespace-nowrap">
                <LatexRenderer content={task.task} />
              </div>

              {/* Equals sign */}
              <span className="text-muted-foreground">=</span>

              {/* Input or result */}
              {isCorrect ? (
                <div className="flex items-center gap-2">
                  <span className="font-bold text-green-700 dark:text-green-300">
                    {state.value}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Input
                    ref={(el) => { inputRefs.current[task.label] = el; }}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9,.-]*"
                    placeholder="?"
                    value={state?.value || ''}
                    onChange={(e) => handleInputChange(task.label, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, task)}
                    onBlur={() => handleSubmit(task)}
                    className={cn(
                      "w-16 h-8 text-center font-mono",
                      isIncorrect && "border-red-400 focus-visible:ring-red-400"
                    )}
                    disabled={allCorrect}
                  />
                  {isIncorrect && (
                    <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Show unanswered tasks (without answer field) */}
      {subTasks.filter(t => t.answer === undefined).length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">Andre deloppgaver:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {subTasks.filter(t => t.answer === undefined).map((task) => (
              <div key={task.label} className="flex gap-2 items-baseline">
                <Badge variant="outline" className="shrink-0 h-5 w-5 flex items-center justify-center rounded-full text-sm">
                  {task.label}
                </Badge>
                <div className="prose prose-slate dark:prose-invert max-w-none flex-1 whitespace-nowrap text-sm">
                  <LatexRenderer content={task.task} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

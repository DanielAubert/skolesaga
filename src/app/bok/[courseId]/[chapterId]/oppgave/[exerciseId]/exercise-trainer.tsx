"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { ArrowLeft, RefreshCw, Pencil, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { LatexRenderer } from "@/components/textbook/latex-renderer";
import { ExerciseProgressBar } from "@/components/textbook/exercise-progress";
import { incrementProblems } from "@/lib/hoderegning/stats";
import { StatsCounter } from "@/components/hoderegning/stats-counter";
import { validateExpressionAnswer } from "@/lib/math-engine/parser";
import { markTextbookExerciseCompleted, updateSubTaskStatus, getExerciseSubTaskProgress } from "@/lib/textbook/progress";
import type { SubTaskStatus } from "@/lib/textbook/progress";
import type { TextbookExercise, TextbookChapter, TextbookCourse } from "@/lib/types/textbook";

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Convert user input like "x^5" or "a^8*b^2" to LaTeX format
function toLatex(input: string): string {
  if (!input) return '';

  let latex = input;

  // First, handle any trailing ^ by adding a placeholder
  // This must happen before other transformations
  // e.g., "x^" → "x^{\square}", "4/x^" → "4/x^{\square}"
  latex = latex.replace(/\^(?=$|[^\d\w])/g, '^{\\square}');

  // Replace ^ followed by digits with ^{digits}
  // e.g., x^5 → x^{5}, x^15 → x^{15}
  latex = latex.replace(/\^(\d+)/g, '^{$1}');

  // Replace ^ followed by letters with ^{letters}
  // e.g., x^n → x^{n}
  latex = latex.replace(/\^([a-zA-Z]+)/g, '^{$1}');

  // Replace * with \cdot for multiplication
  latex = latex.replace(/\*/g, ' \\cdot ');

  // Convert fractions a/b to \frac{a}{b}
  // Handle patterns like: 3/4, a^8/b^8, 2y^6/x^5, 1/(4x^3)
  // Also handle partial input like "3/" (show empty denominator box)
  if (latex.includes('/')) {
    // Split on first / only
    const slashIndex = latex.indexOf('/');
    const numerator = latex.substring(0, slashIndex).trim();
    const denominator = latex.substring(slashIndex + 1).trim();

    // Use \square as placeholder for empty parts
    const num = numerator || '\\square';
    const den = denominator || '\\square';
    latex = `\\frac{${num}}{${den}}`;
  }

  return latex;
}

interface Problem {
  id: number;
  label: string;
  expression: string;
  answer?: number | string;               // Numerisk eller tekstbasert svar
  expressionAnswer?: string | string[];   // Algebraisk svar
  multipleChoiceOptions?: string[];       // Shuffled flervalgsalternativer
  correctOptionIndex?: number;            // Indeks til riktig svar i shuffled array
  userAnswer: string;
  isCorrect?: boolean;
  status: SubTaskStatus;                  // 'completed' | 'skipped' | 'pending'
}

interface ExerciseTrainerProps {
  course: TextbookCourse;
  chapter: TextbookChapter;
  exercise: TextbookExercise;
  nextExercise: TextbookExercise | null;
  courseId: string;
  chapterId: string;
  exerciseId: string;
}

export function ExerciseTrainer({
  course,
  chapter,
  exercise,
  nextExercise,
  courseId,
  chapterId,
  exerciseId,
}: ExerciseTrainerProps) {
  const { data: session } = useSession();
  // Use a ref for sessionStartTime to avoid hydration issues (Date differs on server vs client)
  const sessionStartTimeRef = useRef<string>('');

  // All state initialized with static values to avoid hydration mismatch
  const [problems, setProblems] = useState<Problem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [_completedAnswers, setCompletedAnswers] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [wrongOrderMessage, setWrongOrderMessage] = useState<string | null>(null);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Include numeric, algebraic, and multiple choice answers
  const subTasksWithAnswers = useMemo(() => {
    // If exercise has multipleChoiceOptions directly (no subTasks), create a synthetic subTask
    if (exercise.multipleChoiceOptions && exercise.multipleChoiceOptions.length > 0 && (!exercise.subTasks || exercise.subTasks.length === 0)) {
      return [{
        label: '1',
        task: exercise.task,
        multipleChoiceOptions: exercise.multipleChoiceOptions,
        solution: exercise.solution,
      }];
    }
    return exercise.subTasks?.filter(st => st.answer !== undefined || st.expressionAnswer !== undefined || st.multipleChoiceOptions) || [];
  }, [exercise]);

  // Check if this exercise has algebraic answers
  const hasAlgebraicAnswers = useMemo(() => {
    return subTasksWithAnswers.some(st => st.expressionAnswer !== undefined);
  }, [subTasksWithAnswers]);

  // Check if numeric exercises need a minus key (e.g. chapter 1.1: Fortegn og regnerekkefølge)
  const needsNumericKeyboard = useMemo(() => {
    if (hasAlgebraicAnswers) return false;
    // Chapter 1.1 (1t-1-1) is about negative numbers - all exercises can have negative answers
    return chapterId === '1t-1-1';
  }, [chapterId, hasAlgebraicAnswers]);

  // Convert subtasks to problems format, restoring saved progress
  const createProblems = (): Problem[] => {
    const savedProgress = getExerciseSubTaskProgress(courseId, chapterId, exerciseId);

    return subTasksWithAnswers.map((st, idx) => {
      const answer = st.answer !== undefined
        ? (Array.isArray(st.answer) ? st.answer[0] : st.answer)
        : undefined;
      const savedStatus = savedProgress[st.label] || 'pending';

      // Shuffle multiple choice options if present (first option is always correct)
      let multipleChoiceOptions: string[] | undefined;
      let correctOptionIndex: number | undefined;
      if (st.multipleChoiceOptions && st.multipleChoiceOptions.length > 0) {
        const shuffled = shuffleArray(st.multipleChoiceOptions);
        multipleChoiceOptions = shuffled;
        correctOptionIndex = shuffled.indexOf(st.multipleChoiceOptions[0]);
      }

      return {
        id: idx + 1,
        label: st.label,
        expression: st.task,
        answer,
        expressionAnswer: st.expressionAnswer,
        multipleChoiceOptions,
        correctOptionIndex,
        userAnswer: '',
        status: savedStatus,
      };
    });
  };

  // Sync subtask progress to database (non-blocking)
  const syncSubtaskToDatabase = async (label: string, status: SubTaskStatus, totalSubtasks: number) => {
    if (!session?.user?.id) return;

    try {
      await fetch('/api/textbook/subtask-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          chapterId,
          exerciseId,
          subtaskLabel: label,
          status,
          totalSubtasks,
        }),
      });
    } catch (error) {
      console.error('Failed to sync subtask to database:', error);
    }
  };

  // Single useEffect to initialize everything after mount - prevents hydration issues
  useEffect(() => {
    // Set session start time on client only
    sessionStartTimeRef.current = new Date().toISOString();

    // Detect touch device
    const checkMobileDevice = () => {
      setIsTouchDevice(window.innerWidth < 1024);
    };
    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);

    // Initialize problems - fetch from database if logged in
    const initializeProblems = async () => {
      if (subTasksWithAnswers.length === 0) {
        setIsInitialized(true);
        return;
      }

      // Try to load progress from database if logged in
      let dbProgress: Record<string, 'completed' | 'skipped' | 'pending'> = {};
      if (session?.user?.id) {
        try {
          const response = await fetch(
            `/api/textbook/subtask-progress?courseId=${courseId}&chapterId=${chapterId}&exerciseId=${exerciseId}`
          );
          if (response.ok) {
            const data = await response.json();
            if (data.subtaskDetails && Object.keys(data.subtaskDetails).length > 0) {
              dbProgress = data.subtaskDetails;
              // Also update localStorage to keep in sync
              Object.entries(dbProgress).forEach(([label, status]) => {
                updateSubTaskStatus(courseId, chapterId, exerciseId, label, status as SubTaskStatus);
              });
            }
          }
        } catch (error) {
          console.error('Failed to load progress from database:', error);
        }
      }

      // Create problems with saved progress (from DB or localStorage)
      const savedProgress = Object.keys(dbProgress).length > 0
        ? dbProgress
        : getExerciseSubTaskProgress(courseId, chapterId, exerciseId);

      const newProblems = subTasksWithAnswers.map((st, idx) => {
        const answer = st.answer !== undefined
          ? (Array.isArray(st.answer) ? st.answer[0] : st.answer)
          : undefined;
        const savedStatus = savedProgress[st.label] || 'pending';

        // Shuffle multiple choice options if present
        let multipleChoiceOptions: string[] | undefined;
        let correctOptionIndex: number | undefined;
        if (st.multipleChoiceOptions && st.multipleChoiceOptions.length > 0) {
          const shuffled = shuffleArray(st.multipleChoiceOptions);
          multipleChoiceOptions = shuffled;
          correctOptionIndex = shuffled.indexOf(st.multipleChoiceOptions[0]);
        }

        return {
          id: idx + 1,
          label: st.label,
          expression: st.task,
          answer,
          expressionAnswer: st.expressionAnswer,
          multipleChoiceOptions,
          correctOptionIndex,
          userAnswer: '',
          status: savedStatus,
        };
      });

      setProblems(newProblems);
      setCurrentIndex(0);
      setIsActive(true);
      setCompletedAnswers(0);
      setShowResults(false);
      setWrongOrderMessage(null);

      // Auto-show keyboard on touch devices for algebraic or numeric-with-minus exercises
      const isMobile = window.innerWidth < 1024;
      if ((hasAlgebraicAnswers || chapterId === '1t-1-1') && isMobile) {
        setTimeout(() => setKeyboardVisible(true), 300);
      }

      // Mark as initialized to show content
      setIsInitialized(true);
    };

    initializeProblems();

    return () => window.removeEventListener('resize', checkMobileDevice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);

  // Real-time sync: Poll database every 5 seconds for updates from other devices
  useEffect(() => {
    if (!session?.user?.id || !isInitialized || showResults) return;

    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(
          `/api/textbook/subtask-progress?courseId=${courseId}&chapterId=${chapterId}&exerciseId=${exerciseId}`
        );
        if (!response.ok) return;

        const data = await response.json();
        if (!data.subtaskDetails || Object.keys(data.subtaskDetails).length === 0) return;

        // Check if there are any updates from other devices
        setProblems(currentProblems => {
          let hasChanges = false;
          const updatedProblems = currentProblems.map(problem => {
            const dbStatus = data.subtaskDetails[problem.label] as SubTaskStatus | undefined;
            if (dbStatus && dbStatus !== problem.status) {
              // Only update if the new status is "more complete" (completed > skipped > pending)
              const statusPriority: Record<SubTaskStatus, number> = { completed: 3, skipped: 2, pending: 1 };
              if (statusPriority[dbStatus] > statusPriority[problem.status]) {
                hasChanges = true;
                // Also update localStorage to keep in sync
                updateSubTaskStatus(courseId, chapterId, exerciseId, problem.label, dbStatus);
                return { ...problem, status: dbStatus };
              }
            }
            return problem;
          });

          return hasChanges ? updatedProblems : currentProblems;
        });
      } catch (error) {
        // Silently ignore polling errors
      }
    }, 5000); // Poll every 5 seconds

    return () => clearInterval(pollInterval);
  }, [session?.user?.id, isInitialized, showResults, courseId, chapterId, exerciseId]);

  // Focus input (skip on touch devices with custom keyboard to prevent native keyboard)
  useEffect(() => {
    if (isActive && inputRef.current && !(isTouchDevice && needsNumericKeyboard)) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [currentIndex, isActive, isTouchDevice, needsNumericKeyboard]);

  // Restart training (used by "Prøv igjen" button) - keeps progress in localStorage
  const restartTraining = () => {
    const newProblems = createProblems();
    // Clear user answers but keep status from localStorage
    newProblems.forEach(p => p.userAnswer = '');
    setProblems(newProblems);
    setCurrentIndex(0);
    setIsActive(true);
    setCompletedAnswers(0);
    setShowResults(false);
    setWrongOrderMessage(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleInputChange = (value: string) => {
    const currentProblem = problems[currentIndex];
    const isAlgebraic = currentProblem?.expressionAnswer !== undefined;

    // Tillat ulike tegn basert på oppgavetype
    if (isAlgebraic) {
      // Algebraiske svar: tillat bokstaver, tall, ^, *, /, +, -, (, )
      if (!/^[-\d\^a-zA-Z\*\/\+\(\)\s]*$/.test(value)) return;
    } else {
      // Numeriske svar: kun tall og komma/punktum
      if (!/^-?[\d,\.]*$/.test(value)) return;
    }

    const newProblems = [...problems];
    newProblems[currentIndex].userAnswer = value;
    setProblems(newProblems);
    setWrongOrderMessage(null);

    // Sjekk numerisk svar
    if (currentProblem.answer !== undefined) {
      const userAnswer = parseFloat(value.replace(',', '.'));
      if (!isNaN(userAnswer) && userAnswer === currentProblem.answer) {
        markCorrectAndProceed(newProblems);
      }
    }

    // Sjekk algebraisk svar (autocomplete ved riktig svar)
    if (currentProblem.expressionAnswer !== undefined) {
      const result = validateExpressionAnswer(value, currentProblem.expressionAnswer);
      if (result.isCorrect) {
        markCorrectAndProceed(newProblems);
      }
      // Ikke vis feil rekkefølge-melding ved autocomplete, kun ved "Neste"-klikk
    }
  };

  const markCorrectAndProceed = (newProblems: Problem[]) => {
    incrementProblems(1);
    setWrongAnswer(false);
    setWrongOrderMessage(null);
    newProblems[currentIndex].isCorrect = true;
    newProblems[currentIndex].status = 'completed';
    setProblems(newProblems);

    // Save progress to localStorage
    updateSubTaskStatus(courseId, chapterId, exerciseId, newProblems[currentIndex].label, 'completed');

    // Sync to database (non-blocking)
    syncSubtaskToDatabase(newProblems[currentIndex].label, 'completed', problems.length);

    setTimeout(() => {
      if (currentIndex < problems.length - 1) {
        setCurrentIndex(currentIndex + 1);
        const resetProblems = [...newProblems];
        resetProblems[currentIndex + 1].userAnswer = '';
        setProblems(resetProblems);
      } else {
        finishTraining();
      }
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') nextProblem();
  };

  // Insert text at cursor position in input field
  const insertAtCursor = (text: string) => {
    if (!inputRef.current) return;
    const input = inputRef.current;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const currentValue = problems[currentIndex]?.userAnswer || '';
    const newValue = currentValue.slice(0, start) + text + currentValue.slice(end);

    handleInputChange(newValue);

    // Set cursor position after inserted text
    setTimeout(() => {
      input.focus();
      const newPos = start + text.length;
      input.setSelectionRange(newPos, newPos);
    }, 10);
  };

  // Delete character before cursor (backspace)
  const deleteAtCursor = () => {
    if (!inputRef.current) return;
    const input = inputRef.current;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const currentValue = problems[currentIndex]?.userAnswer || '';

    let newValue: string;
    let newPos: number;

    if (start !== end) {
      // If there's a selection, delete the selection
      newValue = currentValue.slice(0, start) + currentValue.slice(end);
      newPos = start;
    } else if (start > 0) {
      // Delete character before cursor
      newValue = currentValue.slice(0, start - 1) + currentValue.slice(start);
      newPos = start - 1;
    } else {
      // Cursor at beginning, nothing to delete
      return;
    }

    handleInputChange(newValue);

    setTimeout(() => {
      input.focus();
      input.setSelectionRange(newPos, newPos);
    }, 10);
  };

  const nextProblem = () => {
    const currentProblem = problems[currentIndex];

    // Sjekk numerisk svar
    if (currentProblem.answer !== undefined) {
      const userAnswer = parseFloat(currentProblem.userAnswer.replace(',', '.'));
      if (isNaN(userAnswer) || userAnswer !== currentProblem.answer) {
        showWrongAnswerFeedback();
        return;
      }
    }

    // Sjekk algebraisk svar
    if (currentProblem.expressionAnswer !== undefined) {
      const result = validateExpressionAnswer(currentProblem.userAnswer, currentProblem.expressionAnswer);
      if (result.isCorrect) {
        // Riktig - fortsett
      } else if (result.isEquivalentButWrongOrder) {
        // Matematisk riktig, men feil rekkefølge
        setWrongAnswer(false);
        setWrongOrderMessage(`Matematisk riktig, men skriv i alfabetisk rekkefølge: ${result.expectedAnswer}`);
        return;
      } else {
        showWrongAnswerFeedback();
        return;
      }
    }

    setWrongAnswer(false);
    setWrongOrderMessage(null);
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      finishTraining();
    }
  };

  const showWrongAnswerFeedback = () => {
    setWrongAnswer(true);
    setWrongOrderMessage(null);
    const newProblems = [...problems];
    newProblems[currentIndex].userAnswer = '';
    setProblems(newProblems);
    setTimeout(() => {
      setWrongAnswer(false);
      inputRef.current?.focus();
    }, 1000);
  };

  // Skip current problem and move to next (don't overwrite completed status)
  const skipProblem = () => {
    const newProblems = [...problems];

    // Only mark as skipped if not already completed
    if (newProblems[currentIndex].status !== 'completed') {
      newProblems[currentIndex].status = 'skipped';
      setProblems(newProblems);
      // Save skipped status to localStorage
      updateSubTaskStatus(courseId, chapterId, exerciseId, newProblems[currentIndex].label, 'skipped');
      // Sync to database (non-blocking)
      syncSubtaskToDatabase(newProblems[currentIndex].label, 'skipped', problems.length);
    }

    setWrongAnswer(false);
    setWrongOrderMessage(null);

    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      finishTraining();
    }
  };

  // Navigate to a specific problem (just navigate, don't mark as skipped)
  const goToProblem = (idx: number) => {
    if (idx < 0 || idx >= problems.length || idx === currentIndex) return;

    setCurrentIndex(idx);
    setWrongAnswer(false);
    setWrongOrderMessage(null);
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  // Handle multiple choice selection
  const handleMultipleChoiceSelect = (optionIndex: number) => {
    const currentProblem = problems[currentIndex];
    if (!currentProblem.multipleChoiceOptions || currentProblem.correctOptionIndex === undefined) return;

    const newProblems = [...problems];
    const selectedOption = currentProblem.multipleChoiceOptions[optionIndex];
    newProblems[currentIndex].userAnswer = selectedOption;
    setProblems(newProblems);

    if (optionIndex === currentProblem.correctOptionIndex) {
      // Correct answer
      markCorrectAndProceed(newProblems);
    } else {
      // Wrong answer
      showWrongAnswerFeedback();
    }
  };

  const finishTraining = async () => {
    setIsActive(false);
    const completed = problems.filter(p => p.status === 'completed').length;
    const skipped = problems.filter(p => p.status === 'skipped').length;
    setCompletedAnswers(completed);
    setShowResults(true);
    // Mark exercise as completed in localStorage
    markTextbookExerciseCompleted(courseId, chapterId, exerciseId);

    // Save to database if logged in
    if (session?.user?.id) {
      try {
        // Build subtask details object
        const subtaskDetails: Record<string, 'completed' | 'skipped' | 'pending'> = {};
        problems.forEach(p => {
          subtaskDetails[p.label] = p.status;
        });

        await fetch('/api/textbook/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            exerciseId,
            chapterId,
            courseId,
            totalSubtasks: problems.length,
            completedSubtasks: completed,
            skippedSubtasks: skipped,
            subtaskDetails,
            startedAt: sessionStartTimeRef.current,
          }),
        });
      } catch (error) {
        console.error('Failed to save completion:', error);
      }
    }
  };

  const renderCurrentProblem = () => {
    // Always show loading on server and before client initialization to ensure consistent hydration
    if (!isInitialized || !problems.length || currentIndex >= problems.length) {
      return (
        <div className="text-center py-8">
          <div className="text-muted-foreground">Laster oppgave...</div>
        </div>
      );
    }
    const currentProblem = problems[currentIndex];
    const isAlgebraic = currentProblem.expressionAnswer !== undefined;

    return (
      <div className="text-center space-y-3 md:space-y-6">
        {/* Progress indicator with clickable colored circles */}
        <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
          {problems.map((problem, idx) => {
            const isCurrent = idx === currentIndex;
            let bgColor = 'bg-muted text-muted-foreground hover:bg-muted/80'; // pending
            let ringColor = '';

            if (problem.status === 'completed') {
              bgColor = 'bg-green-500 text-white hover:bg-green-600';
            } else if (problem.status === 'skipped') {
              bgColor = 'bg-red-500 text-white hover:bg-red-600';
            }

            if (isCurrent) {
              ringColor = 'ring-2 ring-blue-500 ring-offset-2';
            }

            return (
              <button
                key={problem.id}
                type="button"
                onClick={() => goToProblem(idx)}
                disabled={!isActive}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-medium ${bgColor} ${ringColor} transition-all cursor-pointer disabled:cursor-not-allowed`}
              >
                {problem.label}
              </button>
            );
          })}
        </div>

        <Badge variant="outline" className="text-sm md:text-base lg:text-base px-3 py-1">
          Deloppgave {currentProblem.label} av {problems.length}
        </Badge>

        {(() => {
          // Multiple choice: show options as buttons
          if (currentProblem.multipleChoiceOptions && currentProblem.multipleChoiceOptions.length > 0) {
            return (
              <div className="space-y-4 md:space-y-6">
                {/* The question/expression */}
                <div className="text-xl md:text-2xl lg:text-2xl font-serif">
                  <LatexRenderer content={currentProblem.expression} />
                </div>

                {/* Multiple choice options */}
                <div className="grid gap-3 max-w-md mx-auto">
                  {currentProblem.multipleChoiceOptions.map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleMultipleChoiceSelect(idx)}
                      disabled={!isActive}
                      className={`w-full px-6 py-3 text-base md:text-lg lg:text-lg rounded-lg border-2 transition-all
                        ${wrongAnswer
                          ? 'border-red-300 bg-red-50 dark:bg-red-950/20'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20'
                        }
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      <LatexRenderer content={option} />
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          // Check if expression is an equation (contains =)
          // Also check if we're in the equations chapter (2-1) as a fallback
          const isEquationChapter = exercise?.id?.includes('2-1') || false;
          const hasEqualsSign = currentProblem.expression.includes('=') ||
                                currentProblem.expression.indexOf('=') !== -1;
          const isEquation = hasEqualsSign || isEquationChapter;

          // For equations: show equation, then "x = [input]" below
          if (isEquation) {
            return (
              <div className="space-y-4 md:space-y-6">
                {/* The equation */}
                <div className="text-2xl md:text-3xl lg:text-3xl font-mono font-bold">
                  <LatexRenderer content={currentProblem.expression} />
                </div>

                {/* x = [input] */}
                <div className="text-2xl md:text-3xl lg:text-3xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4">
                  <span>x =</span>
                  <Input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    value={currentProblem.userAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={() => isTouchDevice && setKeyboardVisible(true)}
                    className={`w-20 md:w-24 lg:w-28 h-12 md:h-14 lg:h-14 text-center text-xl md:text-2xl lg:text-2xl font-mono border-2 ${
                      wrongAnswer
                        ? 'border-red-500 bg-red-50 dark:bg-red-950/30 focus:border-red-600'
                        : 'border-blue-300 focus:border-blue-500'
                    }`}
                    disabled={!isActive}
                    autoFocus
                    readOnly={isTouchDevice}
                    placeholder="?"
                  />
                </div>
              </div>
            );
          }

          // For regular expressions: show "expression = [input]"
          return (
            <div className="text-2xl md:text-3xl lg:text-3xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <span className="inline-block">
                <LatexRenderer content={currentProblem.expression} />
              </span>
              <span>=</span>
              {isAlgebraic ? (
                (() => {
                  // Sjekk om input inneholder brøk for å justere bokshøyde
                  const hasFraction = currentProblem.userAnswer.includes('/');
                  const heightClass = hasFraction
                    ? 'h-20 md:h-24 lg:h-24'  // Større boks for brøker
                    : 'h-12 md:h-14 lg:h-14'; // Normal størrelse

                  return isTouchDevice ? (
                    /* Touch device: Custom input with virtual keyboard */
                    <div
                      className={`relative w-32 md:w-40 lg:w-44 ${heightClass} border-2 rounded-md cursor-text transition-all duration-200 ${
                        wrongAnswer
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                          : wrongOrderMessage
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                            : keyboardVisible
                              ? 'border-blue-500 ring-2 ring-blue-500/20'
                              : 'border-blue-300'
                      }`}
                      onClick={() => setKeyboardVisible(true)}
                    >
                      {/* Hidden input - prevents native keyboard from appearing */}
                      <input
                        ref={inputRef}
                        type="text"
                        inputMode="none"
                        value={currentProblem.userAnswer}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                        disabled={!isActive}
                        readOnly
                        onFocus={() => setKeyboardVisible(true)}
                      />
                      {/* Rendered LaTeX preview */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-1">
                        {currentProblem.userAnswer ? (
                          <LatexRenderer content={`$${toLatex(currentProblem.userAnswer)}$`} />
                        ) : (
                          <span className="text-muted-foreground/50 text-xl md:text-2xl lg:text-2xl">x⁵</span>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Desktop: Same style as mobile - LaTeX preview inside input box */
                    <div
                      className={`relative w-32 md:w-40 lg:w-44 ${heightClass} border-2 rounded-md cursor-text transition-all duration-200 ${
                        wrongAnswer
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/30'
                          : wrongOrderMessage
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30'
                            : 'border-blue-300 focus-within:border-blue-500'
                      }`}
                    >
                      {/* Hidden input for keyboard input */}
                      <input
                        ref={inputRef}
                        type="text"
                        value={currentProblem.userAnswer}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                        disabled={!isActive}
                        autoFocus
                      />
                      {/* Rendered LaTeX preview */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-1">
                        {currentProblem.userAnswer ? (
                          <LatexRenderer content={`$${toLatex(currentProblem.userAnswer)}$`} />
                        ) : (
                          <span className="text-muted-foreground/50 text-xl md:text-2xl lg:text-2xl">x⁵</span>
                        )}
                      </div>
                    </div>
                  );
                })()
              ) : needsNumericKeyboard && isTouchDevice ? (
                /* Touch device: Numeric input with custom keyboard (no native keyboard) */
                <Input
                  ref={inputRef}
                  type="text"
                  inputMode="none"
                  value={currentProblem.userAnswer}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setKeyboardVisible(true)}
                  className={`w-16 md:w-20 lg:w-24 h-12 md:h-14 lg:h-14 text-center text-xl md:text-2xl lg:text-2xl font-mono border-2 ${
                    wrongAnswer
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30 focus:border-red-600'
                      : 'border-blue-300 focus:border-blue-500'
                  }`}
                  disabled={!isActive}
                  readOnly
                />
              ) : (
                /* Desktop or standard numeric input */
                <Input
                  ref={inputRef}
                  type="text"
                  inputMode="numeric"
                  value={currentProblem.userAnswer}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className={`w-16 md:w-20 lg:w-24 h-12 md:h-14 lg:h-14 text-center text-xl md:text-2xl lg:text-2xl font-mono border-2 ${
                    wrongAnswer
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30 focus:border-red-600'
                      : 'border-blue-300 focus:border-blue-500'
                  }`}
                  disabled={!isActive}
                  autoFocus
                />
              )}
            </div>
          );
        })()}

        {wrongAnswer && (
          <Badge variant="destructive" className="text-sm md:text-base lg:text-base px-3 py-1 animate-pulse">
            Feil svar! Prøv igjen
          </Badge>
        )}

        {wrongOrderMessage && (
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 rounded-lg px-4 py-3 text-amber-800 dark:text-amber-200">
            <span className="font-medium">Nesten!</span> {wrongOrderMessage}
          </div>
        )}

        <Button onClick={skipProblem} disabled={!isActive} size="lg" variant="outline">
          {currentIndex < problems.length - 1 ? 'Hopp over' : 'Fullfør uten å løse'}
        </Button>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-3 md:py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Hjem</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href={`/bok/${courseId}`}>{course.title}</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href={`/bok/${courseId}/${chapterId}`}>{chapter.chapterNumber} {chapter.title}</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Oppgave {exercise.number}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Fremgangsbar */}
        <div className="container mb-4">
          <ExerciseProgressBar
            completed={problems.filter(p => p.status === 'completed').length}
            total={problems.length}
            currentExercise={parseInt(exercise.number || '0')}
            totalExercises={chapter.content.filter(b => b.type === 'exercise').length}
          />
        </div>

        <section className="container pb-12">
          <div className="mb-3 md:mb-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-1.5 md:p-2">
                <Pencil className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <h1 className="text-lg md:text-2xl font-bold">
                Oppgave {exercise.number}: {exercise.task}
              </h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {showResults ? (
              <Card>
                <CardContent className="p-8 text-center space-y-6">
                  {/* Progress indicator showing final status */}
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {problems.map((problem) => {
                      let bgColor = 'bg-muted text-muted-foreground';
                      if (problem.status === 'completed') {
                        bgColor = 'bg-green-500 text-white';
                      } else if (problem.status === 'skipped') {
                        bgColor = 'bg-red-500 text-white';
                      }
                      return (
                        <div
                          key={problem.id}
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-medium ${bgColor} transition-all`}
                        >
                          {problem.label}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-center">
                    <div className={`rounded-full p-6 ${
                      problems.some(p => p.status === 'skipped')
                        ? 'bg-amber-100 dark:bg-amber-900'
                        : 'bg-green-100 dark:bg-green-900'
                    }`}>
                      <Trophy className={`h-16 w-16 ${
                        problems.some(p => p.status === 'skipped')
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-green-600 dark:text-green-400'
                      }`} />
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold mb-2 ${
                      problems.some(p => p.status === 'skipped')
                        ? 'text-amber-700 dark:text-amber-300'
                        : 'text-green-700 dark:text-green-300'
                    }`}>
                      Oppgave {exercise.number} fullført!
                    </h2>
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-lg">
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {problems.filter(p => p.status === 'completed').length}
                        </span> løst riktig
                        {problems.some(p => p.status === 'skipped') && (
                          <>
                            {' · '}
                            <span className="text-red-600 dark:text-red-400 font-medium">
                              {problems.filter(p => p.status === 'skipped').length}
                            </span> hoppet over
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    {nextExercise && (
                      <Button asChild size="lg" className="bg-gradient-to-br from-green-500 to-emerald-600">
                        <Link href={`/bok/${courseId}/${chapterId}/oppgave/${nextExercise.id}`}>
                          Neste oppgave
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                    <Button onClick={restartTraining} variant="outline" size="lg">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Prøv igjen
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href={`/bok/${courseId}/${chapterId}/trening/${exercise.id}`}>
                        Tren mer
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="lg">
                      <Link href={`/bok/${courseId}/${chapterId}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Tilbake til kapittel
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-4 md:p-8">
                  {renderCurrentProblem()}
                </CardContent>
              </Card>
            )}

            {/* Stats below exercise */}
            <StatsCounter className="mx-auto w-fit" />
          </div>
        </section>
      </main>

      <Footer />

      {/* Fixed iOS-style keyboard at bottom - only on touch devices */}
      {isTouchDevice && (hasAlgebraicAnswers || needsNumericKeyboard) && isActive && !showResults && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
            keyboardVisible ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Keyboard backdrop/handle area */}
          <div
            className="h-8 bg-gradient-to-b from-transparent to-[#D1D3D9] dark:to-zinc-800 flex items-end justify-center pb-1"
            onClick={() => setKeyboardVisible(false)}
          >
            <div className="w-10 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
          </div>

          {/* Keyboard */}
          <div className="bg-[#D1D3D9] dark:bg-zinc-800 p-1.5 pb-6 safe-area-inset-bottom">
            {/* Main keyboard grid - layout varies by chapter */}
            <div className="flex gap-1.5 max-w-md mx-auto">
              {needsNumericKeyboard ? (
                /* Numerisk tastatur for kap 1.1: tall + minus/komma/slett */
                <>
                  {/* Number pad - 3 column grid */}
                  <div className="grid grid-cols-3 gap-1.5 flex-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => insertAtCursor(String(n))}
                        className="h-12 text-2xl font-light rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-300 dark:active:bg-zinc-600 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                        disabled={!isActive}
                      >
                        {n}
                      </button>
                    ))}
                    {/* Row 4: (tom), 0, (tom) */}
                    <div />
                    <button
                      type="button"
                      onClick={() => insertAtCursor('0')}
                      className="h-12 text-2xl font-light rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-300 dark:active:bg-zinc-600 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                      disabled={!isActive}
                    >
                      0
                    </button>
                    <div />
                  </div>

                  {/* Right column: −, komma, ⌫ */}
                  <div className="grid grid-cols-1 gap-1.5">
                    <button
                      type="button"
                      onClick={() => insertAtCursor('-')}
                      className="w-14 h-12 text-2xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                      disabled={!isActive}
                    >
                      −
                    </button>
                    <button
                      type="button"
                      onClick={() => insertAtCursor(',')}
                      className="w-14 h-12 text-2xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                      disabled={!isActive}
                    >
                      ,
                    </button>
                    <button
                      type="button"
                      onClick={deleteAtCursor}
                      className="w-14 h-12 text-xl rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation flex items-center justify-center"
                      disabled={!isActive}
                    >
                      ⌫
                    </button>
                  </div>
                </>
              ) : (
                /* Algebraisk tastatur (kap 1.2+) */
                <>
              {/* Left column: Variables (x, y, a, b) */}
              <div className="grid grid-cols-1 gap-1.5">
                {['x', 'y', 'a', 'b'].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => insertAtCursor(v)}
                    className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {/* Center: Number pad - 3 column grid */}
              <div className="grid grid-cols-3 gap-1.5 flex-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => insertAtCursor(String(n))}
                    className="h-12 text-2xl font-light rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-300 dark:active:bg-zinc-600 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    {n}
                  </button>
                ))}

                {/* Row 4: (, 0, ) */}
                <button
                  type="button"
                  onClick={() => insertAtCursor('(')}
                  className="h-12 text-2xl font-light rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  (
                </button>
                <button
                  type="button"
                  onClick={() => insertAtCursor('0')}
                  className="h-12 text-2xl font-light rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-300 dark:active:bg-zinc-600 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={() => insertAtCursor(')')}
                  className="h-12 text-2xl font-light rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                  disabled={!isActive}
                >
                  )
                </button>
              </div>

              {/* Right column(s): operators */}
              {chapterId === '1t-1-2' ? (
                /* Algebra-tastatur: +, -, ×, ÷, ^, ⌫ i 2x3 grid */
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => insertAtCursor('+')}
                    className="w-12 h-12 text-2xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('*')}
                    className="w-12 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    ×
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('-')}
                    className="w-12 h-12 text-2xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('/')}
                    className="w-12 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    ÷
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('^')}
                    className="w-12 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    ^
                  </button>
                  <button
                    type="button"
                    onClick={deleteAtCursor}
                    className="w-12 h-12 text-xl rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation flex items-center justify-center"
                    disabled={!isActive}
                  >
                    ⌫
                  </button>
                </div>
              ) : (
                /* Standard potens-tastatur: ^, ×, ÷, ⌫ */
                <div className="grid grid-cols-1 gap-1.5">
                  <button
                    type="button"
                    onClick={() => insertAtCursor('^')}
                    className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    ^
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('*')}
                    className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    ×
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor('/')}
                    className="w-14 h-12 text-xl font-medium rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation"
                    disabled={!isActive}
                  >
                    ÷
                  </button>
                  <button
                    type="button"
                    onClick={deleteAtCursor}
                    className="w-14 h-12 text-xl rounded-lg bg-[#AEB3BD] dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 shadow-[0_1px_0_0_rgba(0,0,0,0.3)] active:bg-zinc-400 dark:active:bg-zinc-500 active:shadow-none transition-all duration-75 select-none touch-manipulation flex items-center justify-center"
                    disabled={!isActive}
                  >
                    ⌫
                  </button>
                </div>
              )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

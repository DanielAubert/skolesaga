'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle2, RotateCcw, BookOpen } from 'lucide-react';
import {
  getChapterById,
  getOverallProgressPercentage,
  getChapterCompletionPercentage,
  getCompletedExercisesCount,
  resetExerciseProgress
} from '@/lib/data/book-chapters';

interface ChapterProgressBarProps {
  currentChapterId: string;
}

export function ChapterProgressBar({ currentChapterId }: ChapterProgressBarProps) {
  const [overallProgress, setOverallProgress] = useState(0);
  const [chapterProgress, setChapterProgress] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);
  const [, forceUpdate] = useState(0);

  const currentChapter = getChapterById(currentChapterId);

  // Update progress when component mounts or currentChapterId changes
  useEffect(() => {
    const updateProgress = () => {
      setOverallProgress(getOverallProgressPercentage());
      setChapterProgress(getChapterCompletionPercentage(currentChapterId));
      setCompletedExercises(getCompletedExercisesCount(currentChapterId));
      setTotalExercises(currentChapter?.exercises || 0);
    };

    updateProgress();

    // Listen for storage changes (when exercises are completed)
    const handleStorageChange = () => {
      updateProgress();
      forceUpdate(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);

    // Also update on a custom event (for same-tab updates)
    window.addEventListener('exerciseCompleted', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('exerciseCompleted', handleStorageChange);
    };
  }, [currentChapterId, currentChapter]);

  const resetProgress = () => {
    if (confirm('Er du sikker på at du vil tilbakestille all fremgang? Dette vil slette all fremgang for alle øvelser.')) {
      resetExerciseProgress();
      setOverallProgress(0);
      setChapterProgress(0);
      setCompletedExercises(0);
      forceUpdate(prev => prev + 1);
    }
  };

  const isChapterComplete = chapterProgress === 100;

  return (
    <Card className="sticky top-4 z-10 shadow-md bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <CardContent className="pt-3 pb-3 px-3 sm:pt-4 sm:pb-4 sm:px-6">
        <div className="space-y-3">
          {/* Overall Progress */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2 gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    Total fremgang
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground shrink-0">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-2 sm:h-2" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={resetProgress}
              className="ml-2 h-9 w-9 sm:h-8 sm:w-8 shrink-0"
              title="Tilbakestill fremgang"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {/* Current Chapter Progress */}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between mb-2 gap-2">
              <span className="text-xs sm:text-sm font-medium truncate">
                {currentChapter?.number || currentChapterId}: Øvelser bestått
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground shrink-0">
                {completedExercises} av {totalExercises}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={chapterProgress} className="h-2 sm:h-2 flex-1" />
              {isChapterComplete && (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {chapterProgress}% fullført
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

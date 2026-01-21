'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, RotateCcw } from 'lucide-react';

interface Chapter {
  id: string;
  title: string;
  sections?: string[];
}

export interface ProgressTrackerProps {
  bookId: string;
  chapters: Chapter[];
  currentChapterId?: string;
  showDetails?: boolean;
}

export function ProgressTracker({
  bookId,
  chapters,
  currentChapterId,
  showDetails = true
}: ProgressTrackerProps) {
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(new Set());
  const storageKey = `book-progress-${bookId}`;

  // Load progress from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setCompletedChapters(new Set(parsed));
        } catch (error) {
          console.error('Failed to load progress:', error);
        }
      }
    }
  }, [storageKey]);

  // Save progress to localStorage
  const saveProgress = (chapters: Set<string>) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(Array.from(chapters)));
    }
  };

  const toggleChapter = (chapterId: string) => {
    const newCompleted = new Set(completedChapters);
    if (newCompleted.has(chapterId)) {
      newCompleted.delete(chapterId);
    } else {
      newCompleted.add(chapterId);
    }
    setCompletedChapters(newCompleted);
    saveProgress(newCompleted);
  };

  const resetProgress = () => {
    setCompletedChapters(new Set());
    saveProgress(new Set());
  };

  const totalChapters = chapters.length;
  const completedCount = completedChapters.size;
  const progressPercentage = totalChapters > 0 ? (completedCount / totalChapters) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Fremdrift</CardTitle>
            <CardDescription>
              {completedCount} av {totalChapters} kapitler fullført
            </CardDescription>
          </div>
          <Badge variant={progressPercentage === 100 ? 'default' : 'secondary'}>
            {Math.round(progressPercentage)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Progress value={progressPercentage} className="h-2" />
          {progressPercentage === 100 && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              Gratulerer! Du har fullført alle kapitlene!
            </p>
          )}
        </div>

        {showDetails && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">Kapitler</h4>
              {completedCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetProgress}
                  className="h-8 text-xs"
                >
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Nullstill
                </Button>
              )}
            </div>
            <div className="space-y-1">
              {chapters.map((chapter) => {
                const isCompleted = completedChapters.has(chapter.id);
                const isCurrent = currentChapterId === chapter.id;

                return (
                  <button
                    key={chapter.id}
                    onClick={() => toggleChapter(chapter.id)}
                    className={`w-full flex items-start gap-3 p-2 rounded-lg text-left transition-colors ${
                      isCurrent
                        ? 'bg-primary/10 border border-primary/20'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-medium ${
                          isCompleted
                            ? 'text-green-900 dark:text-green-200'
                            : 'text-foreground'
                        }`}
                      >
                        {chapter.title}
                      </p>
                      {chapter.sections && chapter.sections.length > 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {chapter.sections.length} seksjoner
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

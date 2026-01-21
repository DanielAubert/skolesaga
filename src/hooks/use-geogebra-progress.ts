'use client';

import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, ChapterProgress, ExerciseStatus } from '@/lib/geogebra/validation-types';

const STORAGE_KEY = 'geogebra-progress';

/**
 * Hook for tracking GeoGebra exercise progress
 *
 * Stores progress in localStorage and can sync with Supabase when user is logged in.
 */
export function useGeoGebraProgress(userId?: string) {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const loadProgress = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as UserProgress;
          setProgress(parsed);
        } else {
          // Initialize empty progress
          setProgress({
            userId,
            chapters: {},
            updatedAt: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error('Failed to load progress:', error);
        setProgress({
          userId,
          chapters: {},
          updatedAt: new Date().toISOString(),
        });
      }
      setIsLoading(false);
    };

    loadProgress();
  }, [userId]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (progress && !isLoading) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Failed to save progress:', error);
      }
    }
  }, [progress, isLoading]);

  // Get progress for a specific chapter
  const getChapterProgress = useCallback(
    (chapterId: string): ChapterProgress | undefined => {
      return progress?.chapters[chapterId];
    },
    [progress]
  );

  // Get progress for a specific exercise
  const getExerciseStatus = useCallback(
    (chapterId: string, exerciseId: string): ExerciseStatus | undefined => {
      return progress?.chapters[chapterId]?.exercises[exerciseId];
    },
    [progress]
  );

  // Mark an exercise as completed
  const markExerciseCompleted = useCallback(
    (chapterId: string, exerciseId: string) => {
      setProgress((prev) => {
        if (!prev) return prev;

        const chapterProgress = prev.chapters[chapterId] || {
          chapterId,
          exercises: {},
        };

        const existingExercise = chapterProgress.exercises[exerciseId];

        return {
          ...prev,
          chapters: {
            ...prev.chapters,
            [chapterId]: {
              ...chapterProgress,
              exercises: {
                ...chapterProgress.exercises,
                [exerciseId]: {
                  exerciseId,
                  completed: true,
                  completedAt: new Date().toISOString(),
                  attempts: (existingExercise?.attempts || 0) + 1,
                },
              },
              lastVisited: new Date().toISOString(),
            },
          },
          updatedAt: new Date().toISOString(),
        };
      });
    },
    []
  );

  // Record an attempt (even if failed)
  const recordAttempt = useCallback(
    (chapterId: string, exerciseId: string) => {
      setProgress((prev) => {
        if (!prev) return prev;

        const chapterProgress = prev.chapters[chapterId] || {
          chapterId,
          exercises: {},
        };

        const existingExercise = chapterProgress.exercises[exerciseId];

        // Don't increment attempts if already completed
        if (existingExercise?.completed) return prev;

        return {
          ...prev,
          chapters: {
            ...prev.chapters,
            [chapterId]: {
              ...chapterProgress,
              exercises: {
                ...chapterProgress.exercises,
                [exerciseId]: {
                  exerciseId,
                  completed: false,
                  attempts: (existingExercise?.attempts || 0) + 1,
                },
              },
              lastVisited: new Date().toISOString(),
            },
          },
          updatedAt: new Date().toISOString(),
        };
      });
    },
    []
  );

  // Mark chapter as visited
  const markChapterVisited = useCallback((chapterId: string) => {
    setProgress((prev) => {
      if (!prev) return prev;

      const chapterProgress = prev.chapters[chapterId] || {
        chapterId,
        exercises: {},
      };

      return {
        ...prev,
        chapters: {
          ...prev.chapters,
          [chapterId]: {
            ...chapterProgress,
            lastVisited: new Date().toISOString(),
          },
        },
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  // Calculate completion percentage for a chapter
  const getChapterCompletionPercent = useCallback(
    (chapterId: string, totalExercises: number): number => {
      const chapter = progress?.chapters[chapterId];
      if (!chapter || totalExercises === 0) return 0;

      const completedCount = Object.values(chapter.exercises).filter(
        (e) => e.completed
      ).length;

      return Math.round((completedCount / totalExercises) * 100);
    },
    [progress]
  );

  // Get total completed exercises across all chapters
  const getTotalCompleted = useCallback((): number => {
    if (!progress) return 0;

    return Object.values(progress.chapters).reduce((total, chapter) => {
      return (
        total + Object.values(chapter.exercises).filter((e) => e.completed).length
      );
    }, 0);
  }, [progress]);

  // Reset progress for a chapter
  const resetChapterProgress = useCallback((chapterId: string) => {
    setProgress((prev) => {
      if (!prev) return prev;

      const { [chapterId]: _, ...restChapters } = prev.chapters;

      return {
        ...prev,
        chapters: restChapters,
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  // Reset all progress
  const resetAllProgress = useCallback(() => {
    setProgress({
      userId,
      chapters: {},
      updatedAt: new Date().toISOString(),
    });
  }, [userId]);

  // Sync with Supabase (to be implemented when user auth is added)
  const syncWithSupabase = useCallback(async () => {
    if (!userId || !progress) return;

    setIsSyncing(true);
    try {
      // TODO: Implement Supabase sync
      // const { error } = await supabase
      //   .from('geogebra_progress')
      //   .upsert({
      //     user_id: userId,
      //     progress: progress,
      //     updated_at: new Date().toISOString(),
      //   });

      console.log('Syncing with Supabase...', progress);
    } catch (error) {
      console.error('Failed to sync with Supabase:', error);
    } finally {
      setIsSyncing(false);
    }
  }, [userId, progress]);

  return {
    progress,
    isLoading,
    isSyncing,
    getChapterProgress,
    getExerciseStatus,
    markExerciseCompleted,
    recordAttempt,
    markChapterVisited,
    getChapterCompletionPercent,
    getTotalCompleted,
    resetChapterProgress,
    resetAllProgress,
    syncWithSupabase,
  };
}

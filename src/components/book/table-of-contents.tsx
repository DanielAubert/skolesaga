'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BOOK_CHAPTERS,
  getChapterCompletionPercentage,
  getOverallProgressPercentage
} from '@/lib/data/book-chapters';
import { cn } from '@/lib/utils';
import { BookOpen, CheckCircle2, Menu, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface TableOfContentsProps {
  currentChapterId?: string;
  className?: string;
}

export function TableOfContents({ currentChapterId, className }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [chapterProgress, setChapterProgress] = useState<Map<string, number>>(new Map());
  const [_overallProgress, setOverallProgress] = useState(0);
  const [_completedChaptersCount, setCompletedChaptersCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [, forceUpdate] = useState(0);

  // Update all chapter progress
  const updateProgress = () => {
    const progressMap = new Map<string, number>();
    let completed = 0;

    BOOK_CHAPTERS.forEach(chapter => {
      const percentage = getChapterCompletionPercentage(chapter.id);
      progressMap.set(chapter.id, percentage);
      if (percentage === 100) completed++;
    });

    setChapterProgress(progressMap);
    setOverallProgress(getOverallProgressPercentage());
    setCompletedChaptersCount(completed);
  };

  // Load progress on mount and listen for updates
  useEffect(() => {
    updateProgress();

    // Listen for storage changes (when exercises are completed)
    const handleStorageChange = () => {
      updateProgress();
      forceUpdate(prev => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('exerciseCompleted', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('exerciseCompleted', handleStorageChange);
    };
  }, []);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-close mobile menu when chapter changes
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [currentChapterId, isMobile]);

  const getChapterProgressPercentage = (chapterId: string) => chapterProgress.get(chapterId) || 0;
  const isCompleted = (chapterId: string) => getChapterProgressPercentage(chapterId) === 100;

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 z-50 lg:hidden shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      )}

      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Table of Contents */}
      <aside
        className={cn(
          "bg-card border-r transition-transform duration-300",
          // Desktop: Always visible, sticky
          "hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:flex-shrink-0",
          // Mobile: Slide in from left
          isMobile && isOpen && "fixed inset-y-0 left-0 w-80 z-50 flex flex-col",
          isMobile && !isOpen && "hidden",
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b bg-primary/5">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-lg">Innholdsfortegnelse</h2>
            </div>
          </div>

          {/* Chapters List */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {BOOK_CHAPTERS.map((chapter) => {
                const isCurrent = chapter.id === currentChapterId;
                const completed = isCompleted(chapter.id);
                const progressPercentage = getChapterProgressPercentage(chapter.id);
                const hasProgress = progressPercentage > 0;

                return (
                  <li key={chapter.id}>
                    <Link
                      href={chapter.url}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        isCurrent && "bg-primary/10 border border-primary/20",
                        !isCurrent && "border border-transparent"
                      )}
                    >
                      {/* Completion indicator */}
                      <div className="flex-shrink-0 mt-0.5">
                        {completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                        )}
                      </div>

                      {/* Chapter info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            "text-xs font-semibold px-1.5 py-0.5 rounded",
                            isCurrent
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}>
                            {chapter.number}
                          </span>
                        </div>
                        <p className={cn(
                          "text-sm line-clamp-2 mb-1",
                          isCurrent ? "font-semibold" : "font-medium"
                        )}>
                          {chapter.title}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1.5">
                          {chapter.exercises > 0 && (
                            <span>{chapter.exercises} øvelser</span>
                          )}
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {chapter.readingTimeMinutes} min
                          </span>
                        </div>
                        {/* Progress bar for chapters with progress */}
                        {hasProgress && (
                          <div className="space-y-0.5">
                            <Progress value={progressPercentage} className="h-1" />
                            <p className="text-[10px] text-muted-foreground">
                              {progressPercentage}% fullført
                            </p>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t bg-muted/30">
            <p className="text-xs text-muted-foreground text-center">
              Bruk ← → piltaster for navigasjon
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

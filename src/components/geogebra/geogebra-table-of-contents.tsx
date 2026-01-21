'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GEOGEBRA_COURSES } from '@/lib/data/geogebra-chapters';
import { GEOGEBRA_EXERCISES_8KLASSE } from '@/lib/data/geogebra-exercises-8klasse';
import { GEOGEBRA_EXERCISES_9KLASSE } from '@/lib/data/geogebra-exercises-9klasse';
import { GEOGEBRA_EXERCISES_10KLASSE } from '@/lib/data/geogebra-exercises-10klasse';
import { GEOGEBRA_EXERCISES_1P } from '@/lib/data/geogebra-exercises-1p';
import { GEOGEBRA_EXERCISES_1T } from '@/lib/data/geogebra-exercises-1t';
import { GEOGEBRA_EXERCISES_S1 } from '@/lib/data/geogebra-exercises-s1';
import { GEOGEBRA_EXERCISES_S2 } from '@/lib/data/geogebra-exercises-s2';
import { GEOGEBRA_EXERCISES_R1 } from '@/lib/data/geogebra-exercises-r1';
import { GEOGEBRA_EXERCISES_R2 } from '@/lib/data/geogebra-exercises-r2';
import type { ValidatedExercise } from '@/lib/geogebra/validation-types';
import { useGeoGebraProgress } from '@/hooks/use-geogebra-progress';
import { cn } from '@/lib/utils';

// Combined exercises from all grade levels
const ALL_EXERCISES: Record<string, ValidatedExercise[]> = {
  ...GEOGEBRA_EXERCISES_8KLASSE,
  ...GEOGEBRA_EXERCISES_9KLASSE,
  ...GEOGEBRA_EXERCISES_10KLASSE,
  ...GEOGEBRA_EXERCISES_1P,
  ...GEOGEBRA_EXERCISES_1T,
  ...GEOGEBRA_EXERCISES_S1,
  ...GEOGEBRA_EXERCISES_S2,
  ...GEOGEBRA_EXERCISES_R1,
  ...GEOGEBRA_EXERCISES_R2,
};

interface GeoGebraTableOfContentsProps {
  currentChapterId?: string;
  courseId?: string;
}

export function GeoGebraTableOfContents({ currentChapterId, courseId }: GeoGebraTableOfContentsProps) {
  const pathname = usePathname();
  const { getChapterCompletionPercent, isLoading } = useGeoGebraProgress();

  // Find the current course based on courseId or pathname
  const currentCourse = courseId
    ? GEOGEBRA_COURSES.find(c => c.id === courseId)
    : GEOGEBRA_COURSES.find(course =>
        course.chapters.some(chapter => pathname.startsWith(chapter.url.split('/').slice(0, -1).join('/')))
      );

  // Track which course is expanded (default to current course)
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(currentCourse?.id || null);

  // Get exercise count for a chapter (from validated exercises)
  const getExerciseCount = (chapterId: string): number => {
    return ALL_EXERCISES[chapterId]?.length || 0;
  };

  // Group courses by level for the full navigation
  const coursesByLevel = [
    { title: 'Ungdomsskole', courses: GEOGEBRA_COURSES.filter(c => c.level === 'Ungdomsskole') },
    { title: 'VG1', courses: GEOGEBRA_COURSES.filter(c => c.level === 'VG1') },
    { title: 'VG2', courses: GEOGEBRA_COURSES.filter(c => c.level === 'VG2') },
    { title: 'VG3', courses: GEOGEBRA_COURSES.filter(c => c.level === 'VG3') },
  ];

  return (
    <aside className="hidden lg:block w-72 xl:w-80 shrink-0 border-r border-border bg-muted/20">
      <div className="sticky top-0 h-screen overflow-y-auto p-4">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold text-lg">Innholdsfortegnelse</h2>
        </div>

        <nav className="space-y-6">
          {coursesByLevel.map((level) => (
            <div key={level.title}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {level.title}
              </h3>
              <ul className="space-y-1">
                {level.courses.map((course) => {
                  const isCourseActive = currentCourse?.id === course.id;
                  const isExpanded = expandedCourseId === course.id;

                  return (
                    <li key={course.id}>
                      {/* Course header */}
                      <div
                        className={cn(
                          'rounded-lg transition-colors',
                          isCourseActive ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                        )}
                      >
                        <button
                          onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                          className={cn(
                            'w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors group',
                            isCourseActive
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'hover:bg-muted hover:text-foreground'
                          )}
                        >
                          <span className="text-sm font-medium text-left">
                            {course.title}
                          </span>
                          <ChevronRight className={cn(
                            'h-4 w-4 transition-transform',
                            isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5'
                          )} />
                        </button>

                        {/* Show chapters if this course is expanded */}
                        {isExpanded && (
                          <ul className="pb-2 space-y-0.5">
                            {course.chapters.map((chapter) => {
                              const isChapterActive = pathname === chapter.url || currentChapterId === chapter.id;
                              const exerciseCount = getExerciseCount(chapter.id);
                              const completionPercent = !isLoading && exerciseCount > 0
                                ? getChapterCompletionPercent(chapter.id, exerciseCount)
                                : 0;
                              const isChapterComplete = completionPercent === 100;

                              return (
                                <li key={chapter.id}>
                                  <Link
                                    href={chapter.url}
                                    className={cn(
                                      'block rounded-md px-3 py-2 mx-2 transition-colors',
                                      isChapterActive
                                        ? 'bg-blue-100 dark:bg-blue-900/40 border-l-2 border-blue-600'
                                        : 'hover:bg-muted'
                                    )}
                                  >
                                    <div className="flex items-start gap-2">
                                      {/* Progress indicator or chapter number */}
                                      {isChapterComplete ? (
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                      ) : (
                                        <span className={cn(
                                          'text-xs font-mono',
                                          isChapterActive
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-muted-foreground'
                                        )}>
                                          {chapter.number}
                                        </span>
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <p className={cn(
                                          'text-sm truncate',
                                          isChapterActive && 'font-medium text-blue-600 dark:text-blue-400',
                                          isChapterComplete && 'text-green-700 dark:text-green-400'
                                        )}>
                                          {chapter.title}
                                        </p>
                                        <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                                          {exerciseCount > 0 && completionPercent > 0 && !isChapterComplete && (
                                            <span className="text-blue-600 dark:text-blue-400">
                                              {completionPercent}%
                                            </span>
                                          )}
                                          <span>{chapter.exercises} øvelser</span>
                                          <span className="flex items-center gap-0.5">
                                            <Clock className="h-3 w-3" />
                                            {chapter.duration}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          Bruk ← → piltaster for navigasjon
        </p>
      </div>
    </aside>
  );
}

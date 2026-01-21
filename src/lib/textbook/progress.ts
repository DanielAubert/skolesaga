/**
 * Textbook exercise progress tracking
 * Stores completed exercises in localStorage
 */

export interface TextbookProgress {
  [courseId: string]: {
    [chapterId: string]: string[]; // array of completed exerciseIds
  };
}

export type SubTaskStatus = 'completed' | 'skipped' | 'pending';

export interface SubTaskProgress {
  [exerciseId: string]: {
    [subTaskLabel: string]: SubTaskStatus;
  };
}

export interface TextbookSubTaskProgress {
  [courseId: string]: {
    [chapterId: string]: SubTaskProgress;
  };
}

const TEXTBOOK_PROGRESS_KEY = 'textbook-exercise-progress';
const TEXTBOOK_SUBTASK_PROGRESS_KEY = 'textbook-subtask-progress';

/**
 * Get all completed exercises from localStorage
 */
export function getTextbookProgress(): TextbookProgress {
  if (typeof window === 'undefined') return {};

  try {
    const saved = localStorage.getItem(TEXTBOOK_PROGRESS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load textbook progress:', error);
    return {};
  }
}

/**
 * Mark an exercise as completed
 */
export function markTextbookExerciseCompleted(
  courseId: string,
  chapterId: string,
  exerciseId: string
): void {
  if (typeof window === 'undefined') return;

  const progress = getTextbookProgress();

  if (!progress[courseId]) {
    progress[courseId] = {};
  }
  if (!progress[courseId][chapterId]) {
    progress[courseId][chapterId] = [];
  }

  if (!progress[courseId][chapterId].includes(exerciseId)) {
    progress[courseId][chapterId].push(exerciseId);
    localStorage.setItem(TEXTBOOK_PROGRESS_KEY, JSON.stringify(progress));

    // Dispatch custom event for real-time updates in other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('textbookExerciseCompleted', {
        detail: { courseId, chapterId, exerciseId }
      }));
    }
  }
}

/**
 * Check if an exercise is completed
 */
export function isTextbookExerciseCompleted(
  courseId: string,
  chapterId: string,
  exerciseId: string
): boolean {
  const progress = getTextbookProgress();
  return progress[courseId]?.[chapterId]?.includes(exerciseId) || false;
}

/**
 * Get number of completed exercises for a chapter
 * Excludes repetition exercises (those with "-rep-" in their ID)
 */
export function getTextbookChapterCompletedCount(
  courseId: string,
  chapterId: string
): number {
  const progress = getTextbookProgress();
  const completedExercises = progress[courseId]?.[chapterId] || [];
  // Filter out repetition exercises
  return completedExercises.filter(id => !id.includes('-rep-')).length;
}

/**
 * Get list of completed exercise IDs for a chapter
 */
export function getTextbookChapterCompletedExercises(
  courseId: string,
  chapterId: string
): string[] {
  const progress = getTextbookProgress();
  return progress[courseId]?.[chapterId] || [];
}

/**
 * Reset progress for a specific chapter
 */
export function resetTextbookChapterProgress(
  courseId: string,
  chapterId: string
): void {
  if (typeof window === 'undefined') return;

  const progress = getTextbookProgress();
  if (progress[courseId]?.[chapterId]) {
    progress[courseId][chapterId] = [];
    localStorage.setItem(TEXTBOOK_PROGRESS_KEY, JSON.stringify(progress));
  }
}

/**
 * Reset all textbook progress
 */
export function resetAllTextbookProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TEXTBOOK_PROGRESS_KEY);
  localStorage.removeItem(TEXTBOOK_SUBTASK_PROGRESS_KEY);
}

// ============================================
// SubTask Progress Functions
// ============================================

/**
 * Get all subtask progress from localStorage
 */
export function getSubTaskProgress(): TextbookSubTaskProgress {
  if (typeof window === 'undefined') return {};

  try {
    const saved = localStorage.getItem(TEXTBOOK_SUBTASK_PROGRESS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load subtask progress:', error);
    return {};
  }
}

/**
 * Save subtask progress to localStorage
 */
function saveSubTaskProgress(progress: TextbookSubTaskProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(TEXTBOOK_SUBTASK_PROGRESS_KEY, JSON.stringify(progress));
}

/**
 * Update a single subtask's status
 */
export function updateSubTaskStatus(
  courseId: string,
  chapterId: string,
  exerciseId: string,
  subTaskLabel: string,
  status: SubTaskStatus
): void {
  if (typeof window === 'undefined') return;

  const progress = getSubTaskProgress();

  if (!progress[courseId]) {
    progress[courseId] = {};
  }
  if (!progress[courseId][chapterId]) {
    progress[courseId][chapterId] = {};
  }
  if (!progress[courseId][chapterId][exerciseId]) {
    progress[courseId][chapterId][exerciseId] = {};
  }

  progress[courseId][chapterId][exerciseId][subTaskLabel] = status;
  saveSubTaskProgress(progress);

  // Dispatch event for real-time updates
  window.dispatchEvent(new CustomEvent('subtaskProgressUpdated', {
    detail: { courseId, chapterId, exerciseId, subTaskLabel, status }
  }));
}

/**
 * Get subtask progress for an exercise
 */
export function getExerciseSubTaskProgress(
  courseId: string,
  chapterId: string,
  exerciseId: string
): Record<string, SubTaskStatus> {
  const progress = getSubTaskProgress();
  return progress[courseId]?.[chapterId]?.[exerciseId] || {};
}

/**
 * Get a single subtask's status
 */
export function getSubTaskStatus(
  courseId: string,
  chapterId: string,
  exerciseId: string,
  subTaskLabel: string
): SubTaskStatus {
  const exerciseProgress = getExerciseSubTaskProgress(courseId, chapterId, exerciseId);
  return exerciseProgress[subTaskLabel] || 'pending';
}

/**
 * Reset subtask progress for an exercise
 */
export function resetExerciseSubTaskProgress(
  courseId: string,
  chapterId: string,
  exerciseId: string
): void {
  if (typeof window === 'undefined') return;

  const progress = getSubTaskProgress();
  if (progress[courseId]?.[chapterId]?.[exerciseId]) {
    delete progress[courseId][chapterId][exerciseId];
    saveSubTaskProgress(progress);
  }
}

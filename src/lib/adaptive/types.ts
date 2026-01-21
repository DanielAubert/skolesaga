/**
 * TypeScript-typer for adaptivt læringssystem
 */

export type Difficulty = 'lett' | 'medium' | 'vanskelig';
export type ExerciseType = 'interactive' | 'classic' | 'upload' | 'multiple-choice' | 'step-by-step';

// Database-modeller (mapper til Supabase-tabeller)

export interface TextbookExerciseAttempt {
  id: string;
  student_id: string;
  exercise_id: string;
  chapter_id: string;
  course_id: string;
  difficulty: Difficulty;
  exercise_type: ExerciseType;
  is_correct: boolean;
  attempt_count: number;
  time_spent_ms: number | null;
  steps_data: StepsData | null;
  created_at: string;
}

export interface TextbookSkillLevel {
  id: string;
  student_id: string;
  course_id: string;
  chapter_id: string | null;
  skill_level: number;
  recommended_difficulty: Difficulty;
  total_attempts: number;
  correct_attempts: number;
  streak_current: number;
  streak_longest: number;
  created_at: string;
  updated_at: string;
}

// Steg-for-steg data fra matematikkmotor

export interface StepsData {
  steps: string[];
  validationResults: StepValidationResult[];
}

export interface StepValidationResult {
  stepIndex: number;
  isValid: boolean;
  feedback: string;
  rule?: string;
}

// API Request/Response typer

export interface CreateAttemptRequest {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  difficulty: Difficulty;
  exerciseType: ExerciseType;
  isCorrect: boolean;
  attemptCount?: number;
  timeSpentMs?: number;
  stepsData?: StepsData;
}

export interface CreateAttemptResponse {
  attempt: TextbookExerciseAttempt;
  skillLevel: TextbookSkillLevel;
  feedback: string;
}

export interface GetSkillLevelRequest {
  courseId: string;
  chapterId?: string;
}

export interface GetSkillLevelResponse {
  skillLevel: TextbookSkillLevel | null;
  recommendedExercises: RecommendedExercise[];
}

export interface RecommendedExercise {
  exerciseId: string;
  chapterId: string;
  difficulty: Difficulty;
  isRecommended: boolean;
  reason?: string;
}

// UI-typer

export interface SkillLevelDisplay {
  level: number;              // 0-100 for visning
  difficulty: Difficulty;
  label: string;              // f.eks. "Nybegynner", "Øvet", "Mester"
  color: string;              // CSS-farge
  progress: number;           // 0-100 progress til neste nivå
}

export function getSkillLevelDisplay(skillLevel: number): SkillLevelDisplay {
  const level = Math.round(skillLevel * 100);

  if (skillLevel < 0.25) {
    return {
      level,
      difficulty: 'lett',
      label: 'Nybegynner',
      color: 'text-blue-500',
      progress: (skillLevel / 0.25) * 100,
    };
  }
  if (skillLevel < 0.5) {
    return {
      level,
      difficulty: 'lett',
      label: 'Under utvikling',
      color: 'text-green-500',
      progress: ((skillLevel - 0.25) / 0.25) * 100,
    };
  }
  if (skillLevel < 0.75) {
    return {
      level,
      difficulty: 'medium',
      label: 'Øvet',
      color: 'text-yellow-500',
      progress: ((skillLevel - 0.5) / 0.25) * 100,
    };
  }
  return {
    level,
    difficulty: 'vanskelig',
    label: 'Mester',
    color: 'text-purple-500',
    progress: ((skillLevel - 0.75) / 0.25) * 100,
  };
}

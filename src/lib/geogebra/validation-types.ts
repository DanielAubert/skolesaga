/**
 * GeoGebra Exercise Validation Types
 *
 * These types define how to validate user answers in GeoGebra applets.
 */

// Base validation rule
export interface BaseValidation {
  id: string;
  description: string;
  hint?: string;
}

// Check if a point exists at specific coordinates
export interface PointValidation extends BaseValidation {
  type: 'point';
  name: string;  // Variable name in GeoGebra (e.g., 'A')
  expected: {
    x: number;
    y: number;
  };
  tolerance?: number;  // Default 0.1
}

// Check if a numeric value matches
export interface ValueValidation extends BaseValidation {
  type: 'value';
  name: string;  // Variable name in GeoGebra
  expected: number;
  tolerance?: number;  // Default 0.01
}

// Check if an object exists (any type)
export interface ExistsValidation extends BaseValidation {
  type: 'exists';
  name: string;  // Variable name in GeoGebra
}

// Check if a function/expression matches
export interface FunctionValidation extends BaseValidation {
  type: 'function';
  name: string;  // Variable name in GeoGebra
  // Test points to verify the function
  testPoints: { x: number; expectedY: number; tolerance?: number }[];
}

// Check if point is in a specific quadrant
export interface QuadrantValidation extends BaseValidation {
  type: 'quadrant';
  name: string;  // Point name
  quadrant: 1 | 2 | 3 | 4;
}

// Check if a line passes through specific points
export interface LineValidation extends BaseValidation {
  type: 'line';
  name: string;
  passesThroughPoints: { x: number; y: number }[];
  tolerance?: number;
}

// Check if circle has correct center and radius
export interface CircleValidation extends BaseValidation {
  type: 'circle';
  name: string;
  center: { x: number; y: number };
  radius: number;
  tolerance?: number;
}

// Check if polygon has correct vertices
export interface PolygonValidation extends BaseValidation {
  type: 'polygon';
  name: string;
  vertexCount: number;
  area?: number;
  perimeter?: number;
  tolerance?: number;
}

// Union type for all validations
export type ExerciseValidation =
  | PointValidation
  | ValueValidation
  | ExistsValidation
  | FunctionValidation
  | QuadrantValidation
  | LineValidation
  | CircleValidation
  | PolygonValidation;

// Exercise with validation
export interface ValidatedExercise {
  id: string;
  task: string;
  validations: ExerciseValidation[];
  initialCommands?: string[];  // Pre-populate the applet
  appName?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific' | 'suite';
}

// Validation result
export interface ValidationResult {
  validationId: string;
  passed: boolean;
  message?: string;
}

// Exercise completion status
export interface ExerciseStatus {
  exerciseId: string;
  completed: boolean;
  completedAt?: string;  // ISO date string
  attempts: number;
}

// Chapter progress
export interface ChapterProgress {
  chapterId: string;
  exercises: Record<string, ExerciseStatus>;
  lastVisited?: string;
}

// User's complete progress
export interface UserProgress {
  userId?: string;  // If logged in
  chapters: Record<string, ChapterProgress>;
  updatedAt: string;
}

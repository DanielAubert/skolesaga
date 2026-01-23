"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@/lib/auth/hooks";

// Types
export interface Submission {
  id: string;
  exercise_id: string;
  chapter_id: string;
  course_id: string;
  student_id: string;
  submission_type: "code" | "geogebra-xml" | "image" | "canvas-drawing" | "text" | "multiple-choice" | "spreadsheet";
  content: string | null;
  image_url: string | null;
  canvas_data: Record<string, unknown> | null;
  is_correct: boolean | null;
  validation_results: Record<string, unknown> | null;
  ai_grade_score: number | null;
  ai_grade_is_correct: boolean | null;
  ai_grade_feedback: string | null;
  ai_grade_suggestions: string[] | null;
  ai_graded_at: string | null;
  teacher_grade_score: number | null;
  teacher_grade: string | null;
  teacher_grade_feedback: string | null;
  teacher_graded_at: string | null;
  teacher_graded_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  classes: { id: string; name: string }[];
}

export interface TeacherClass {
  id: string;
  name: string;
  grade_level: string | null;
  subject: string | null;
}

// Hook: Hent besvarelser for en oppgave
export function useExerciseSubmission(
  exerciseId: string,
  chapterId: string,
  courseId: string,
  studentId?: string
) {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmission = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        exerciseId,
        chapterId,
        courseId,
      });

      if (studentId) {
        params.set("studentId", studentId);
      }

      const response = await fetch(`/api/textbook/submissions?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Kunne ikke hente besvarelse");
      }

      // Returner første (nyeste) besvarelse for denne oppgaven
      setSubmission(data.submissions?.[0] || null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "En feil oppstod");
    } finally {
      setIsLoading(false);
    }
  }, [exerciseId, chapterId, courseId, studentId]);

  useEffect(() => {
    fetchSubmission();
  }, [fetchSubmission]);

  return { submission, isLoading, error, refetch: fetchSubmission };
}

// Hook: Hent alle besvarelser for et kapittel
export function useChapterSubmissions(
  chapterId: string,
  courseId: string,
  studentId?: string
) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        chapterId,
        courseId,
      });

      if (studentId) {
        params.set("studentId", studentId);
      }

      const response = await fetch(`/api/textbook/submissions?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Kunne ikke hente besvarelser");
      }

      setSubmissions(data.submissions || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "En feil oppstod");
    } finally {
      setIsLoading(false);
    }
  }, [chapterId, courseId, studentId]);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  return { submissions, isLoading, error, refetch: fetchSubmissions };
}

// Hook: Lagre besvarelse
export function useSubmitAnswer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAnswer = useCallback(async (data: {
    exerciseId: string;
    chapterId: string;
    courseId: string;
    submissionType: Submission["submission_type"];
    content?: string;
    imageUrl?: string;
    canvasData?: Record<string, unknown>;
    isCorrect?: boolean;
    validationResults?: Record<string, unknown>;
  }) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/textbook/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Kunne ikke lagre besvarelse");
      }

      return result.submission as Submission;
    } catch (err) {
      const message = err instanceof Error ? err.message : "En feil oppstod";
      setError(message);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { submitAnswer, isSubmitting, error };
}

// Hook: Oppdater besvarelse (for elev)
export function useUpdateAnswer() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateAnswer = useCallback(async (
    submissionId: string,
    data: {
      content?: string;
      imageUrl?: string;
      canvasData?: Record<string, unknown>;
      isCorrect?: boolean;
      validationResults?: Record<string, unknown>;
    }
  ) => {
    setIsUpdating(true);
    setError(null);

    try {
      const response = await fetch(`/api/textbook/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Kunne ikke oppdatere besvarelse");
      }

      return result.submission as Submission;
    } catch (err) {
      const message = err instanceof Error ? err.message : "En feil oppstod";
      setError(message);
      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, []);

  return { updateAnswer, isUpdating, error };
}

// Hook: Legg til lærer-kommentar
export function useAddTeacherComment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addComment = useCallback(async (
    submissionId: string,
    feedback: string
  ) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/textbook/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teacherFeedback: feedback }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Kunne ikke legge til kommentar");
      }

      return result.submission as Submission;
    } catch (err) {
      const message = err instanceof Error ? err.message : "En feil oppstod";
      setError(message);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { addComment, isSubmitting, error };
}

// Hook: Hent elever (for lærere)
export function useTeacherStudents(classId?: string) {
  const { user, isLoading: isUserLoading } = useUser();
  const [students, setStudents] = useState<Student[]>([]);
  const [classes, setClasses] = useState<TeacherClass[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudents = useCallback(async () => {
    if (!user || (user.role !== "teacher" && user.role !== "admin")) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (classId) {
        params.set("classId", classId);
      }

      const response = await fetch(`/api/textbook/students?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Kunne ikke hente elever");
      }

      setStudents(data.students || []);
      setClasses(data.classes || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "En feil oppstod");
    } finally {
      setIsLoading(false);
    }
  }, [user, classId]);

  useEffect(() => {
    if (!isUserLoading) {
      fetchStudents();
    }
  }, [fetchStudents, isUserLoading]);

  return { students, classes, isLoading: isLoading || isUserLoading, error, refetch: fetchStudents };
}

// Hook: Sjekk om bruker er lærer og ser som elev
export function useViewingAsStudent() {
  const { user } = useUser();
  const [viewingAsStudentId, setViewingAsStudentId] = useState<string | null>(null);

  const isTeacher = user?.role === "teacher" || user?.role === "admin";
  const isViewingAsStudent = isTeacher && viewingAsStudentId !== null;

  return {
    isTeacher,
    isViewingAsStudent,
    viewingAsStudentId,
    setViewingAsStudentId,
  };
}

// ============================================================================
// Adaptiv læring hooks
// ============================================================================

export type Difficulty = "lett" | "medium" | "vanskelig";

export interface SkillLevel {
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

export interface ExerciseAttemptInput {
  exerciseId: string;
  chapterId: string;
  courseId: string;
  difficulty: Difficulty;
  exerciseType: "interactive" | "classic" | "upload" | "multiple-choice" | "step-by-step";
  isCorrect: boolean;
  attemptCount?: number;
  timeSpentMs?: number;
  stepsData?: {
    steps: string[];
    validationResults: { stepIndex: number; isValid: boolean; feedback: string }[];
  };
}

// Hook: Hent ferdighetsnivå
export function useSkillLevel(courseId: string, chapterId?: string) {
  const [skillLevel, setSkillLevel] = useState<SkillLevel | null>(null);
  const [recommendedDifficulty, setRecommendedDifficulty] = useState<Difficulty>("medium");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkillLevel = useCallback(async () => {
    if (!courseId) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ courseId });
      if (chapterId) {
        params.set("chapterId", chapterId);
      }

      const response = await fetch(`/api/textbook/skill-level?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Kunne ikke hente ferdighetsnivå");
      }

      setSkillLevel(data.skillLevel || null);
      setRecommendedDifficulty(data.recommendedDifficulty || "medium");
    } catch (err) {
      setError(err instanceof Error ? err.message : "En feil oppstod");
    } finally {
      setIsLoading(false);
    }
  }, [courseId, chapterId]);

  useEffect(() => {
    fetchSkillLevel();
  }, [fetchSkillLevel]);

  return {
    skillLevel,
    recommendedDifficulty,
    isLoading,
    error,
    refetch: fetchSkillLevel,
  };
}

// Hook: Registrer oppgaveforsøk og få oppdatert ferdighetsnivå
export function useRecordAttempt() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const recordAttempt = useCallback(async (data: ExerciseAttemptInput) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/textbook/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Kunne ikke registrere forsøk");
      }

      return {
        attempt: result.attempt,
        skillLevel: result.skillLevel as SkillLevel,
        feedback: result.feedback as string,
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : "En feil oppstod";
      setError(message);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { recordAttempt, isSubmitting, error };
}

// Hook: Sjekk om en oppgave er anbefalt basert på elevens nivå
export function useIsExerciseRecommended(
  exerciseDifficulty: Difficulty,
  recommendedDifficulty: Difficulty
): boolean {
  return exerciseDifficulty === recommendedDifficulty;
}

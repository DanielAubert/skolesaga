"use client";

import { useState, useCallback } from "react";
import { useSession } from "next-auth/react";

interface ExerciseAttempt {
  exerciseType: string;
  exerciseId: string;
  subject?: string;
  level?: string;
  score?: number;
  maxScore?: number;
  correct?: boolean;
  timeSpentMs?: number;
}

interface ProgressStats {
  totalAttempts: number;
  correctAttempts: number;
  correctRate: number;
  totalScore: number;
  totalMaxScore: number;
  scoreRate: number;
  totalTimeMinutes: number;
}

interface ProgressData {
  attempts: Array<{
    id: string;
    exercise_type: string;
    exercise_id: string;
    subject: string | null;
    level: string | null;
    score: number | null;
    max_score: number | null;
    correct: boolean | null;
    time_spent_ms: number | null;
    created_at: string;
    completed_at: string | null;
  }>;
  stats: ProgressStats;
}

// Hook for å lagre øvelseforsøk
export function useTrackProgress() {
  // Handle undefined return during static prerendering
  const sessionResult = useSession();
  const session = sessionResult?.data;
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trackAttempt = useCallback(async (attempt: ExerciseAttempt) => {
    // Ikke track hvis ikke innlogget
    if (!session?.user) {
      return { success: false, reason: "not_logged_in" };
    }

    setIsTracking(true);
    setError(null);

    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attempt),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Kunne ikke lagre fremgang");
      }

      const data = await response.json();
      return { success: true, attempt: data.attempt };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Ukjent feil";
      setError(message);
      return { success: false, reason: message };
    } finally {
      setIsTracking(false);
    }
  }, [session]);

  return { trackAttempt, isTracking, error };
}

// Hook for å hente brukerens fremgang
export function useProgress(options?: {
  exerciseType?: string;
  subject?: string;
  level?: string;
  period?: "today" | "week" | "month" | "all";
}) {
  // Handle undefined return during static prerendering
  const sessionResult = useSession();
  const session = sessionResult?.data;
  const [data, setData] = useState<ProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!session?.user) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (options?.exerciseType) params.set("exerciseType", options.exerciseType);
      if (options?.subject) params.set("subject", options.subject);
      if (options?.level) params.set("level", options.level);
      if (options?.period) params.set("period", options.period);

      const response = await fetch(`/api/progress?${params.toString()}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Kunne ikke hente fremgang");
      }

      const progressData = await response.json();
      setData(progressData);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Ukjent feil";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [session, options?.exerciseType, options?.subject, options?.level, options?.period]);

  return { data, isLoading, error, refetch: fetchProgress };
}

// Enkel funksjon for å tracke uten hook (for bruk utenfor komponenter)
export async function trackExerciseAttempt(attempt: ExerciseAttempt): Promise<boolean> {
  try {
    const response = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attempt),
    });
    return response.ok;
  } catch {
    return false;
  }
}

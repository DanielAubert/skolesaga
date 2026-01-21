"use client";

import dynamic from "next/dynamic";
import type { TextbookExercise, TextbookChapter, TextbookCourse } from "@/lib/types/textbook";

// Use dynamic import with ssr: false to avoid hydration issues
const ExerciseTrainer = dynamic(
  () => import("./exercise-trainer").then(mod => mod.ExerciseTrainer),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-muted-foreground">Laster oppgave...</div>
      </div>
    ),
  }
);

interface ExerciseTrainerWrapperProps {
  course: TextbookCourse;
  chapter: TextbookChapter;
  exercise: TextbookExercise;
  nextExercise: TextbookExercise | null;
  courseId: string;
  chapterId: string;
  exerciseId: string;
}

export function ExerciseTrainerWrapper(props: ExerciseTrainerWrapperProps) {
  return <ExerciseTrainer {...props} />;
}

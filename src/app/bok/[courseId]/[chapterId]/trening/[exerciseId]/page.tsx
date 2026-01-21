import { notFound } from "next/navigation";
import { getChapterContent } from "@/lib/data/textbook-content";
import { getCourse } from "@/lib/data/textbook-courses";
import { TrainingClient } from "./training-client";
import type { TextbookExercise, TextbookContentBlock } from "@/lib/types/textbook";

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string; exerciseId: string }>;
}

// Hjelpefunksjon for å finne alle oppgaver i content (inkludert i collapsible-blokker)
function findAllExercises(content: TextbookContentBlock[]): TextbookExercise[] {
  const exercises: TextbookExercise[] = [];

  for (const block of content) {
    if (block.type === 'exercise' && block.exercise) {
      exercises.push(block.exercise);
    } else if (block.type === 'collapsible' && block.content) {
      // Søk rekursivt i collapsible-blokker
      exercises.push(...findAllExercises(block.content));
    }
  }

  return exercises;
}

export default async function TreningPage({ params }: PageProps) {
  const { courseId, chapterId, exerciseId } = await params;

  // Get chapter and course data
  const chapter = getChapterContent(chapterId);
  const course = getCourse(courseId);

  if (!chapter || !course) {
    notFound();
  }

  // Find all exercises including those in collapsible blocks
  const allExercises = findAllExercises(chapter.content);

  // Find the exercise by ID
  let exercise: TextbookExercise | null = allExercises.find(ex => ex.id === exerciseId) || null;

  // Also check in exercises array if not found
  if (!exercise) {
    exercise = chapter.exercises?.find(ex => ex.id === exerciseId) || null;
  }

  if (!exercise) {
    notFound();
  }

  return (
    <TrainingClient
      exercise={exercise}
      courseId={courseId}
      chapterId={chapterId}
      exerciseId={exerciseId}
      courseTitle={course.title}
      chapterTitle={chapter.title}
    />
  );
}

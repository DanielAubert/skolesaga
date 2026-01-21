import { notFound } from "next/navigation";
import { getChapterContent } from "@/lib/data/textbook-content";
import { getCourse } from "@/lib/data/textbook-courses";
import { ExerciseTrainerWrapper } from "./exercise-trainer-wrapper";
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

export default async function OppgavePage({ params }: PageProps) {
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

  // Check if exercise has answers (numeric, algebraic, or multiple choice)
  const hasMultipleChoiceAtExerciseLevel = exercise.multipleChoiceOptions && exercise.multipleChoiceOptions.length > 0;
  const subTasksWithAnswers = exercise.subTasks?.filter(
    st => st.answer !== undefined || st.expressionAnswer !== undefined || st.multipleChoiceOptions
  ) || [];

  if (!hasMultipleChoiceAtExerciseLevel && subTasksWithAnswers.length === 0) {
    notFound();
  }

  // Find all exercises with answers for navigation
  const exercisesWithAnswers = allExercises.filter(ex =>
    ex.multipleChoiceOptions?.length ||
    ex.subTasks?.some(st => st.answer !== undefined || st.expressionAnswer !== undefined || st.multipleChoiceOptions)
  );

  // Find next exercise
  const currentIdx = exercisesWithAnswers.findIndex(ex => ex.id === exerciseId);
  const nextExercise = currentIdx >= 0 && currentIdx < exercisesWithAnswers.length - 1
    ? exercisesWithAnswers[currentIdx + 1]
    : null;

  return (
    <ExerciseTrainerWrapper
      course={course}
      chapter={chapter}
      exercise={exercise}
      nextExercise={nextExercise}
      courseId={courseId}
      chapterId={chapterId}
      exerciseId={exerciseId}
    />
  );
}

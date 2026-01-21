import { notFound } from "next/navigation";
import { getChapterContent } from "@/lib/data/textbook-content";
import { getCourse, getChapterMeta } from "@/lib/data/textbook-courses";
import { QuizClient } from "./quiz-client";
import { getQuizQuestions } from "@/lib/data/quiz-data";
import { getChemistryQuizQuestions } from "@/lib/data/chemistry-quiz-data";

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

export default async function QuizPage({ params }: PageProps) {
  const { courseId, chapterId } = await params;

  // Get chapter and course data
  const chapter = getChapterContent(chapterId);
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId);

  if (!chapter || !course || !chapterMeta) {
    notFound();
  }

  // Get quiz questions - try generic first, then chemistry-specific
  let quizQuestions = getQuizQuestions(chapterId);

  // Fallback to chemistry quiz data for kjemi1/kjemi2
  if (quizQuestions.length === 0 && (courseId === 'kjemi1' || courseId === 'kjemi2')) {
    const chemQuestions = getChemistryQuizQuestions(chapterId);
    quizQuestions = chemQuestions.map(q => ({
      question: q.question,
      options: q.options,
      explanation: q.explanation,
    }));
  }

  return (
    <QuizClient
      courseId={courseId}
      chapterId={chapterId}
      courseTitle={course.title}
      chapterTitle={chapter.title}
      chapterNumber={chapterMeta.number}
      questions={quizQuestions}
    />
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourse, getChapterMeta, getNextChapter, getPrevChapter } from '@/lib/data/textbook-courses';
import { getChapterContent } from '@/lib/data/textbook-content';
import { TextbookChapterView } from '@/components/textbook/textbook-chapter-view';
import { hasQuizQuestions } from '@/lib/data/quiz-data';
import { hasChemistryQuiz } from '@/lib/data/chemistry-quiz-data';

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId, chapterId } = await params;
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId);

  if (!course || !chapterMeta) {
    return { title: 'Kapittel ikke funnet' };
  }

  return {
    title: `${chapterMeta.number} ${chapterMeta.title} | ${course.title}`,
    description: chapterMeta.description,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { courseId, chapterId } = await params;
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId);

  if (!course || !chapterMeta) {
    notFound();
  }

  // Hent kapittelinnhold (kan være undefined hvis ikke implementert ennå)
  const chapterContent = getChapterContent(chapterId);

  // Navigasjon
  const nextChapterId = getNextChapter(courseId, chapterId);
  const prevChapterId = getPrevChapter(courseId, chapterId);

  const nextChapter = nextChapterId ? getChapterMeta(courseId, nextChapterId) : undefined;
  const prevChapter = prevChapterId ? getChapterMeta(courseId, prevChapterId) : undefined;

  // Check quiz availability on the server to avoid hydration mismatch
  const hasQuiz = hasQuizQuestions(chapterId) || hasChemistryQuiz(chapterId);

  return (
    <TextbookChapterView
      course={course}
      chapterMeta={chapterMeta}
      chapterContent={chapterContent}
      nextChapter={nextChapter ? { id: nextChapter.id, number: nextChapter.number, title: nextChapter.title } : undefined}
      prevChapter={prevChapter ? { id: prevChapter.id, number: prevChapter.number, title: prevChapter.title } : undefined}
      hasQuiz={hasQuiz}
    />
  );
}

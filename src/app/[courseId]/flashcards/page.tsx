import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourse, getSectionNames } from '@/lib/data/textbook-courses';
import { getFlashcardDefinitions } from '@/lib/data/flashcard-definitions';
import { FlashcardClient } from './flashcard-client';
import { pageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ seksjon?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);

  // Fail fast når innholdet ikke finnes — se soft-404-merknaden i
  // [chapterId]/page.tsx for hvorfor statuskoden er skjør her.
  if (!course || getFlashcardDefinitions(courseId).length === 0) {
    notFound();
  }

  const title = `Flashcards – ${course.title} | Skolesaga`;
  const description = `Øv på begreper og definisjoner fra ${course.title} med spaced repetition flashcards.`;

  return {
    title,
    description,
    // ?seksjon=… filtrerer bare det samme kortsettet — canonical uten query.
    ...pageMetadata({
      path: `/${courseId}/flashcards`,
      title,
      description,
      image: course.coverImage,
    }),
  };
}

export default async function FlashcardsPage({ params, searchParams }: PageProps) {
  const { courseId } = await params;
  const { seksjon } = await searchParams;
  const course = getCourse(courseId);

  if (!course) {
    notFound();
  }

  const definitions = getFlashcardDefinitions(courseId);
  const sectionNames = getSectionNames(courseId);

  if (definitions.length === 0) {
    notFound();
  }

  return (
    <FlashcardClient
      courseId={courseId}
      courseTitle={course.title}
      definitions={definitions}
      sectionNames={sectionNames}
      initialSection={seksjon}
    />
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourse, getSectionNames } from '@/lib/data/textbook-courses';
import { getFlashcardDefinitions } from '@/lib/data/flashcard-definitions';
import { FlashcardClient } from './flashcard-client';

interface PageProps {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ seksjon?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);

  if (!course) {
    return { title: 'Kurs ikke funnet' };
  }

  return {
    title: `Flashcards – ${course.title} | Skolesaga`,
    description: `Øv på begreper og definisjoner fra ${course.title} med spaced repetition flashcards.`,
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

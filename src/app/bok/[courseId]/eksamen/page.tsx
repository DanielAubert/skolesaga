import { notFound } from "next/navigation";
import { getCourse } from "@/lib/data/textbook-courses";
import { getQuizQuestions, hasQuizQuestions } from "@/lib/data/quiz-data";
import { getFagprofilOrFallback, hasFagprofil } from "@/lib/data/fagprofil";
import { getMalform } from "@/lib/i18n/malform";
import { EksamenClient } from "./eksamen-client";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);
  // Fail fast når innholdet ikke finnes — se soft-404-merknaden i
  // [chapterId]/page.tsx for hvorfor statuskoden er skjør her.
  if (!course) notFound();
  const title = `Eksamenstrening – ${course.title}`;
  const description = `Tren under eksamensbetingelser: tidspress og fagets faktiske scoring-regler for ${course.title}.`;
  return {
    title,
    description,
    ...pageMetadata({
      path: `/bok/${courseId}/eksamen`,
      title,
      description,
      image: course.coverImage,
    }),
  };
}

export default async function EksamenPage({ params }: PageProps) {
  const { courseId } = await params;
  const malform = await getMalform();

  const course = getCourse(courseId);
  if (!course) {
    notFound();
  }

  const fagprofil = getFagprofilOrFallback(courseId, course.title);
  const harEgenProfil = hasFagprofil(courseId);

  // Samle hele fagets quizbank på tvers av kapitlene. Vi går gjennom
  // course.chapters (rekkefølge = kapittelrekkefølge) og tar med alle
  // spørsmål fra kapitler som faktisk har quiz.
  const bank = course.chapters
    .filter((ch) => !ch.isNarrativeVersion && hasQuizQuestions(ch.id))
    .flatMap((ch) =>
      getQuizQuestions(ch.id, malform).map((q) => ({
        question: q.question,
        options: q.options,
        explanation: q.explanation,
      })),
    );

  return (
    <EksamenClient
      courseId={courseId}
      courseTitle={course.title}
      fagprofil={fagprofil}
      harEgenProfil={harEgenProfil}
      bank={bank}
    />
  );
}

import { notFound } from "next/navigation";
import { getCourse, getChapterMeta } from "@/lib/data/textbook-courses";
import { QuizClient } from "./quiz-client";
import { getQuizQuestions } from "@/lib/data/quiz-data";
import { getChemistryQuizQuestions } from "@/lib/data/chemistry-quiz-data";
import { getSamfunnskunnskapQuizQuestions } from "@/lib/data/samfunnskunnskap-quiz-data";
import { getMalform } from "@/lib/i18n/malform";
import { canonicalChapterId, chapterImagePath, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId, chapterId } = await params;
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId);

  // Fail fast når innholdet ikke finnes — se soft-404-merknaden i
  // [chapterId]/page.tsx for hvorfor statuskoden er skjør her.
  if (!course || !chapterMeta) {
    notFound();
  }

  // Quiz på et narrativkapittel er samme quiz som på originalen — kanoniser dit.
  const canonicalId = canonicalChapterId(course, chapterMeta);
  const title = `Quiz: ${chapterMeta.number} ${chapterMeta.title} | ${course.title}`;
  const description = `Test deg selv på ${chapterMeta.number} ${chapterMeta.title} i ${course.title}.`;

  return {
    title,
    description,
    ...pageMetadata({
      path: `/${courseId}/${chapterId}/quiz`,
      canonicalPath: `/${courseId}/${canonicalId}/quiz`,
      title,
      description,
      image: chapterImagePath(course, chapterMeta),
    }),
  };
}

export default async function QuizPage({ params }: PageProps) {
  const { courseId, chapterId } = await params;
  const malform = await getMalform();

  // ⚠ Denne ruta henter IKKE kapittelinnholdet, og skal ikke gjøre det.
  //
  // Den gjorde det fram til 6. august 2026, og brukte de 215 MB i `_all.json`
  // til nøyaktig to ting: en eksistenssjekk og `chapter.title`. Importen
  // bundlet hele bokmålskatalogen inn i quiz-funksjonen, som dermed passerte
  // Vercels 250 MB-grense og blokkerte alle deployer.
  //
  // Tittelen ligger allerede i metadataen — og DET er tittelen resten av
  // plattformen viser: både kapittelsiden (`[chapterId]/page.tsx`) og
  // kursoversikten bruker `chapterMeta.title`. Målt på 900 kapitler avvek
  // innholdsfilas tittel fra metadataens i 145 av dem, så quizsiden viste en
  // annen tittel enn siden studenten nettopp kom fra. Byttet retter begge deler.
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId, malform);

  if (!course || !chapterMeta) {
    notFound();
  }

  // Get quiz questions - try generic first, then chemistry-specific
  let quizQuestions = getQuizQuestions(chapterId, malform);

  // Fallback to chemistry quiz data for kjemi1/kjemi2
  if (quizQuestions.length === 0 && (courseId === 'kjemi1' || courseId === 'kjemi2')) {
    const chemQuestions = getChemistryQuizQuestions(chapterId);
    quizQuestions = chemQuestions.map(q => ({
      question: q.question,
      options: q.options,
      explanation: q.explanation,
    }));
  }

  // Fallback to samfunnskunnskap quiz data
  if (quizQuestions.length === 0 && courseId === 'samfunnskunnskap') {
    const samfQuestions = getSamfunnskunnskapQuizQuestions(chapterId);
    quizQuestions = samfQuestions.map(q => ({
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
      chapterTitle={chapterMeta.title}
      chapterNumber={chapterMeta.number}
      questions={quizQuestions}
    />
  );
}

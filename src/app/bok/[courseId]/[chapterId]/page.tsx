import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourse, getChapterMeta, getNextChapter, getPrevChapter, getChapterPrerequisites, getDependentChapters } from '@/lib/data/textbook-courses';
import { getChapterContent, hasNynorskVersion } from '@/lib/data/textbook-content';
import { getMalform } from '@/lib/i18n/malform';
import { TextbookChapterView } from '@/components/textbook/textbook-chapter-view';
import { hasQuizQuestions } from '@/lib/data/quiz-data';
import { hasChemistryQuiz } from '@/lib/data/chemistry-quiz-data';
import { hasSamfunnskunnskapQuiz } from '@/lib/data/samfunnskunnskap-quiz-data';

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
  // Målform (bokmål/nynorsk) fra cookie
  const malform = await getMalform();
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId, malform);

  if (!course || !chapterMeta) {
    notFound();
  }

  // Hent kapittelinnhold (kan være undefined hvis ikke implementert ennå)
  const chapterContent = getChapterContent(chapterId, malform);
  const nynorskAvailable = hasNynorskVersion(chapterId);

  // Navigasjon
  const nextChapterId = getNextChapter(courseId, chapterId);
  const prevChapterId = getPrevChapter(courseId, chapterId);

  const nextChapter = nextChapterId ? getChapterMeta(courseId, nextChapterId, malform) : undefined;
  const prevChapter = prevChapterId ? getChapterMeta(courseId, prevChapterId, malform) : undefined;

  // Hent alternativ versjon hvis den finnes
  const linkedChapter = chapterMeta.linkedChapterId
    ? getChapterMeta(courseId, chapterMeta.linkedChapterId, malform)
    : undefined;

  // Arv hero-bilde fra tilknyttet kapittel hvis dette kapittelet mangler ett
  const resolvedChapterMeta = !chapterMeta.coverImage && linkedChapter?.coverImage
    ? { ...chapterMeta, coverImage: linkedChapter.coverImage }
    : chapterMeta;

  // Check quiz availability on the server to avoid hydration mismatch
  const hasQuiz = hasQuizQuestions(chapterId) || hasChemistryQuiz(chapterId) || hasSamfunnskunnskapQuiz(chapterId);

  // Kapitler med prøve
  const chaptersWithExam = ['historie-1-2'];
  const hasExam = chaptersWithExam.includes(chapterId);

  // Tverrkapittel-binding: forutsetninger og avhengige kapitler
  const prerequisites = getChapterPrerequisites(courseId, chapterId).map((c) => ({
    id: c.id,
    number: c.number,
    title: c.title,
  }));
  const dependents = getDependentChapters(courseId, chapterId).map((c) => ({
    id: c.id,
    number: c.number,
    title: c.title,
  }));

  return (
    <TextbookChapterView
      course={course}
      chapterMeta={resolvedChapterMeta}
      chapterContent={chapterContent}
      nextChapter={nextChapter ? { id: nextChapter.id, number: nextChapter.number, title: nextChapter.title } : undefined}
      prevChapter={prevChapter ? { id: prevChapter.id, number: prevChapter.number, title: prevChapter.title } : undefined}
      linkedChapter={linkedChapter ? { id: linkedChapter.id, title: linkedChapter.title, isNarrativeVersion: linkedChapter.isNarrativeVersion } : undefined}
      isNarrativeVersion={chapterMeta.isNarrativeVersion}
      malform={malform === 'sme' ? 'nb' : malform}
      nynorskAvailable={nynorskAvailable}
      hasQuiz={hasQuiz}
      hasExam={hasExam}
      prerequisites={prerequisites}
      dependents={dependents}
    />
  );
}

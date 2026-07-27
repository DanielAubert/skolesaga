import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourse, getChapterMeta, getNextChapter, getPrevChapter, getChapterPrerequisites, getDependentChapters } from '@/lib/data/textbook-courses';
import { getChapterContentLocalized, hasNynorskVersion } from '@/lib/data/textbook-content';
import { getMalform } from '@/lib/i18n/malform';
import { TextbookChapterView } from '@/components/textbook/textbook-chapter-view';
import { hasQuizQuestions } from '@/lib/data/quiz-data';
import { hasChemistryQuiz } from '@/lib/data/chemistry-quiz-data';
import { hasSamfunnskunnskapQuiz } from '@/lib/data/samfunnskunnskap-quiz-data';
import { TrackRecentVisit } from '@/components/track-recent-visit';
import {
  absoluteUrl,
  canonicalChapterId,
  chapterImagePath,
  chapterJsonLd,
  jsonLdScript,
  pageMetadata,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId, chapterId } = await params;
  const malform = await getMalform();
  const course = getCourse(courseId);
  const chapterMeta = getChapterMeta(courseId, chapterId, malform);

  // ⚠️ SOFT-404-FELLE (regresjonsvern): en `loading.tsx` i et FORELDRESEGMENT
  // lager en Suspense-grense rundt hele siden. Da skylles skallet — og dermed
  // HTTP-statuskoden 200 — ut FØR notFound() rekker å kjøre, verken herfra
  // eller fra sidekomponenten. Resultatet er en «soft 404»: Google indekserer
  // uendelig mange ikke-eksisterende kapitler som gyldige sider.
  // `src/app/loading.tsx` ble fjernet nettopp derfor. Skal en loading-skjelett
  // gjeninnføres, må den scopes til en rutegruppe som IKKE omslutter /bok
  // (f.eks. app/(hjem)/loading.tsx) — og statuskodene må verifiseres med curl
  // mot prod-server etterpå, ikke bare i koden.
  if (!course || !chapterMeta) {
    notFound();
  }

  const title = `${chapterMeta.number} ${chapterMeta.title} | ${course.title}`;
  // Narrativkapitler kanoniserer til originalen — se canonicalChapterId().
  const canonicalId = canonicalChapterId(course, chapterMeta);

  return {
    title,
    description: chapterMeta.description,
    ...pageMetadata({
      path: `/${courseId}/${chapterId}`,
      canonicalPath: `/${courseId}/${canonicalId}`,
      title,
      description: chapterMeta.description,
      image: chapterImagePath(course, chapterMeta),
      ogType: 'article',
      malform,
      // hreflang settes bare når kapitlet faktisk er oversatt. 966 av 11 475
      // kapitler mangler nynorsk, og et par som peker på en uoversatt side
      // er en påstand Google kontrollerer.
      harNynorsk: await hasNynorskVersion(chapterId),
    }),
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
  const chapterContent = await getChapterContentLocalized(chapterId, malform);
  const nynorskAvailable = await hasNynorskVersion(chapterId);

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

  // Strukturerte data bygges alltid på bokmålsmetadataen — søkemotorer setter
  // ingen målform-cookie og ser derfor bokmålsversjonen. Samme kilde som
  // generateMetadata bruker, så <title> og JSON-LD ikke spriker.
  const seoMetaBase = getChapterMeta(courseId, chapterId) ?? chapterMeta;
  const seoMeta = seoMetaBase.coverImage
    ? seoMetaBase
    : { ...seoMetaBase, coverImage: chapterImagePath(course, seoMetaBase) };
  const canonicalUrl = absoluteUrl(`/${courseId}/${canonicalChapterId(course, seoMeta)}`);
  const structuredData = chapterJsonLd(course, seoMeta, canonicalUrl);

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(structuredData) }}
    />
    <TrackRecentVisit
      itemType="chapter"
      itemId={`${courseId}/${chapterId}`}
      title={`${course.title}: ${chapterMeta.number} ${chapterMeta.title}`}
      url={`/${courseId}/${chapterId}`}
    />
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
    </>
  );
}

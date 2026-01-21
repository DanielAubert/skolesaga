import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GEOGEBRA_COURSES, getGeoGebraCourse, type GeoGebraChapter } from '@/lib/data/geogebra-chapters';
import { GeoGebraChapterContent } from '@/components/geogebra/geogebra-chapter-content';

interface PageProps {
  params: Promise<{
    courseId: string;
    chapterId: string;
  }>;
}

// Generate static params for all chapters
export async function generateStaticParams() {
  const params: { courseId: string; chapterId: string }[] = [];

  for (const course of GEOGEBRA_COURSES) {
    for (const chapter of course.chapters) {
      // Extract chapterId from the URL
      const urlParts = chapter.url.split('/');
      const chapterId = urlParts[urlParts.length - 1];
      params.push({
        courseId: course.id,
        chapterId,
      });
    }
  }

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId, chapterId } = await params;
  const course = getGeoGebraCourse(courseId);

  if (!course) {
    return { title: 'Ikke funnet' };
  }

  const chapter = course.chapters.find(ch => {
    const urlParts = ch.url.split('/');
    return urlParts[urlParts.length - 1] === chapterId;
  });

  if (!chapter) {
    return { title: 'Ikke funnet' };
  }

  return {
    title: `${chapter.title} - ${course.title} | GeoGebra-lærebok`,
    description: chapter.description,
    keywords: [
      'GeoGebra',
      course.title,
      chapter.title,
      ...chapter.topics,
      'matematikk',
      'lærebok',
    ].join(', '),
  };
}

function findChapterAndNeighbors(courseId: string, chapterId: string): {
  course: typeof GEOGEBRA_COURSES[0] | null;
  chapter: GeoGebraChapter | null;
  prevChapter: GeoGebraChapter | null;
  nextChapter: GeoGebraChapter | null;
} {
  const course = getGeoGebraCourse(courseId);

  if (!course) {
    return { course: null, chapter: null, prevChapter: null, nextChapter: null };
  }

  const chapterIndex = course.chapters.findIndex(ch => {
    const urlParts = ch.url.split('/');
    return urlParts[urlParts.length - 1] === chapterId;
  });

  if (chapterIndex === -1) {
    return { course, chapter: null, prevChapter: null, nextChapter: null };
  }

  const chapter = course.chapters[chapterIndex];
  const prevChapter = chapterIndex > 0 ? course.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < course.chapters.length - 1 ? course.chapters[chapterIndex + 1] : null;

  return { course, chapter, prevChapter, nextChapter };
}

export default async function GeoGebraChapterPage({ params }: PageProps) {
  const { courseId, chapterId } = await params;
  const { course, chapter, prevChapter, nextChapter } = findChapterAndNeighbors(courseId, chapterId);

  if (!course || !chapter) {
    notFound();
  }

  return (
    <GeoGebraChapterContent
      course={course}
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}

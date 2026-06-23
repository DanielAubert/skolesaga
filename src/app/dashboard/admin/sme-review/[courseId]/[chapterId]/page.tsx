import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { getCourse, getChapterMeta } from '@/lib/data/textbook-courses';
import { getChapterContentLocalized } from '@/lib/data/textbook-content';
import { SmeReview } from './sme-review';

export const metadata = { title: 'Nordsamisk review (admin)' };

interface PageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

export default async function SmeReviewPage({ params }: PageProps) {
  // Server-side admin-gate: kun synlig for admin.
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') {
    notFound();
  }

  const { courseId, chapterId } = await params;
  const course = getCourse(courseId);
  const sme = await getChapterContentLocalized(chapterId, 'sme');
  const nb = await getChapterContentLocalized(chapterId, 'nb');

  if (!course || !sme) {
    notFound();
  }

  const meta = getChapterMeta(courseId, chapterId);

  return (
    <SmeReview
      courseId={courseId}
      chapterId={chapterId}
      courseTitle={course.title}
      chapterTitle={meta?.title ?? chapterId}
      sme={sme}
      nb={nb}
    />
  );
}

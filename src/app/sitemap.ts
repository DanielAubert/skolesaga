import type { MetadataRoute } from 'next';
import { TEXTBOOK_COURSES } from '@/lib/data/textbook-courses';

const BASE_URL = 'https://skolesaga.no';

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/bok', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quiz', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/quiz/gigaquiz', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/test-deg-selv', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ressurser', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/poengkalkulator', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/geogebra', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/hoderegning', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/personlighetstest', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personlighetstest/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personlighetstyper', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personlighetstyper/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/enneagram', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/enneagram/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/laeringsstil', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/laeringsstil/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/yrkesinteresser', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/yrkesinteresser/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/iq-test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/iq-test/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/eq-test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/eq-test/test', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/personvern', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/vilkar', changeFrequency: 'yearly', priority: 0.2 },
];

const GRADE_LEVELS = ['5', '6', '7', '8', '9', '10', 'vg1', 'vg2', 'vg3', 'hoyere'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const gradeEntries: MetadataRoute.Sitemap = GRADE_LEVELS.map((grade) => ({
    url: `${BASE_URL}/bok/trinn/${grade}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = TEXTBOOK_COURSES.flatMap((course) => [
    {
      url: `${BASE_URL}/bok/${course.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/bok/${course.id}/flashcards`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/bok/${course.id}/kompetansemal`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ]);

  const chapterEntries: MetadataRoute.Sitemap = TEXTBOOK_COURSES.flatMap((course) =>
    course.chapters.flatMap((chapter) => [
      {
        url: `${BASE_URL}/bok/${course.id}/${chapter.id}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: chapter.isNarrativeVersion ? 0.6 : 0.7,
      },
      {
        url: `${BASE_URL}/bok/${course.id}/${chapter.id}/quiz`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      },
    ]),
  );

  return [...staticEntries, ...gradeEntries, ...courseEntries, ...chapterEntries];
}

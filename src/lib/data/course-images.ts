/**
 * Kursbilder mapping
 *
 * Samler alle kursbilder fra GRADE_CONFIG for bruk i dashboard og andre steder
 */

export const COURSE_IMAGES: Record<string, string> = {
  // 5. klasse
  '5': '/images/subjects/matematikk-hero.webp',
  'norsk-5': '/images/subjects/norsk-hero.webp',
  'engelsk-5': '/images/subjects/engelsk-hero.webp',
  'naturfag-5': '/images/subjects/naturfag-hero.webp',

  // 6. klasse
  '6': '/images/subjects/matematikk-hero.webp',
  'norsk-6': '/images/subjects/norsk-hero.webp',
  'engelsk-6': '/images/subjects/engelsk-hero.webp',
  'naturfag-6': '/images/subjects/naturfag-hero.webp',

  // 7. klasse
  '7': '/images/subjects/matematikk-hero.webp',
  'norsk-7': '/images/subjects/norsk-hero.webp',
  'engelsk-7': '/images/subjects/engelsk-hero.webp',
  'naturfag-7': '/images/subjects/naturfag-hero.webp',

  // 8. klasse
  '8': '/images/subjects/matematikk-hero.webp',
  'norsk-8': '/images/subjects/norsk-hero.webp',
  'engelsk-8': '/images/subjects/engelsk-hero.webp',
  'naturfag-8': '/images/subjects/naturfag-hero.webp',

  // 9. klasse
  '9': '/images/subjects/matematikk-hero.webp',
  'norsk-9': '/images/subjects/norsk-hero.webp',
  'engelsk-9': '/images/subjects/engelsk-hero.webp',
  'naturfag-9': '/images/subjects/naturfag-hero.webp',

  // 10. klasse
  '10': '/images/subjects/matematikk-hero.webp',
  'norsk-10': '/images/subjects/norsk-hero.webp',
  'engelsk-10': '/images/subjects/engelsk-hero.webp',
  'naturfag-10': '/images/subjects/naturfag-hero.webp',

  // VG1
  '1p': '/images/subjects/matematikk-1p-hero.webp',
  '1t': '/images/textbook/1t/course-hero.webp',
  'norsk-vg1': '/images/courses/norsk-vg1.png',
  'engelsk-vg1': '/images/subjects/engelsk-vg1-hero.webp',
  'nat-vg1': '/images/subjects/naturfag-vg1-hero.webp',
  'samfunnskunnskap': '/images/subjects/samfunnskunnskap-hero.webp',
  'geografi': '/images/subjects/geografi-hero.webp',
  'kroppsoving-vg1': '/images/subjects/kroppsoving-vg1-hero.webp',
  'spansk-1': '/images/subjects/spansk-1-hero.webp',
  'tysk-1': '/images/subjects/tysk-1-hero.webp',
  'fransk-1': '/images/subjects/fransk-1-hero.webp',

  // VG2
  'norsk-vg2': '/images/courses/norsk-vg2.png',
  'historie-vg2': '/images/subjects/historie-vg2-hero.webp',
  'kroppsoving-vg2': '/images/textbook-covers/kroppsoving-vg2-hero.png',
  '2p': '/images/subjects/matematikk-2p-hero.webp',
  '2py': '/images/courses/matematikk-2p-y.png',
  's1': '/images/subjects/matematikk-s1-hero.webp',
  'r1': '/images/subjects/matematikk-r1-hero.webp',
  'fys1': '/images/subjects/fysikk1-hero.webp',
  'kjemi1': '/images/subjects/kjemi1-hero.webp',
  'biologi-1': '/images/textbook-covers/biologi-1-hero.png',
  'geofag-1': '/images/textbook-covers/geofag-1-hero.png',

  // VG3
  'norsk-vg3': '/images/courses/norsk-vg3.png',
  'historie-vg3': '/images/subjects/historie-vg3-hero.webp',
  'kroppsoving-vg3': '/images/textbook-covers/kroppsoving-vg3-hero.png',
  's2': '/images/subjects/matematikk-s2-hero.webp',
  'r2': '/images/subjects/matematikk-r2-hero.webp',
  'fysikk2': '/images/subjects/fysikk2-hero.webp',
  'kjemi2': '/images/subjects/kjemi2-hero.webp',
  'biologi-2': '/images/textbook-covers/biologi-2-hero.png',
  'geofag-2': '/images/textbook-covers/geofag-2-hero.png',
};

/**
 * Hent bilde for et kurs
 * Sjekker først COURSE_IMAGES, deretter TEXTBOOK_COURSES.coverImage
 */
export function getCourseImage(courseId: string): string | undefined {
  return COURSE_IMAGES[courseId];
}

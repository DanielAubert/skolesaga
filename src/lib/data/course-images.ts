/**
 * Kursbilder mapping
 *
 * Samler alle kursbilder fra GRADE_CONFIG for bruk i dashboard og andre steder
 */

export const COURSE_IMAGES: Record<string, string> = {
  // 5. klasse
  '5': '/images/subjects/matematikk-hero.png',
  'norsk-5': '/images/subjects/norsk-hero.png',
  'engelsk-5': '/images/subjects/engelsk-hero.png',
  'naturfag-5': '/images/subjects/naturfag-hero.png',

  // 6. klasse
  '6': '/images/subjects/matematikk-hero.png',
  'norsk-6': '/images/subjects/norsk-hero.png',
  'engelsk-6': '/images/subjects/engelsk-hero.png',
  'naturfag-6': '/images/subjects/naturfag-hero.png',

  // 7. klasse
  '7': '/images/subjects/matematikk-hero.png',
  'norsk-7': '/images/subjects/norsk-hero.png',
  'engelsk-7': '/images/subjects/engelsk-hero.png',
  'naturfag-7': '/images/subjects/naturfag-hero.png',

  // 8. klasse
  '8': '/images/subjects/matematikk-hero.png',
  'norsk-8': '/images/subjects/norsk-hero.png',
  'engelsk-8': '/images/subjects/engelsk-hero.png',
  'naturfag-8': '/images/subjects/naturfag-hero.png',

  // 9. klasse
  '9': '/images/subjects/matematikk-hero.png',
  'norsk-9': '/images/subjects/norsk-hero.png',
  'engelsk-9': '/images/subjects/engelsk-hero.png',
  'naturfag-9': '/images/subjects/naturfag-hero.png',

  // 10. klasse
  '10': '/images/subjects/matematikk-hero.png',
  'norsk-10': '/images/subjects/norsk-hero.png',
  'engelsk-10': '/images/subjects/engelsk-hero.png',
  'naturfag-10': '/images/subjects/naturfag-hero.png',

  // VG1
  '1p': '/images/subjects/matematikk-1p-hero.png',
  '1t': '/images/textbook/1t/course-hero.jpg',
  'norsk-vg1': '/images/courses/norsk-vg1.png',
  'engelsk-vg1': '/images/subjects/engelsk-vg1-hero.png',
  'nat-vg1': '/images/subjects/naturfag-vg1-hero.png',
  'samfunnskunnskap': '/images/subjects/samfunnskunnskap-hero.png',
  'geografi': '/images/subjects/geografi-hero.png',
  'kroppsoving-vg1': '/images/subjects/kroppsoving-vg1-hero.png',
  'spansk-1': '/images/subjects/spansk-1-hero.png',
  'tysk-1': '/images/subjects/tysk-1-hero.png',
  'fransk-1': '/images/subjects/fransk-1-hero.png',

  // VG2
  'norsk-vg2': '/images/courses/norsk-vg2.png',
  'historie-vg2': '/images/subjects/historie-vg2-hero.png',
  'kroppsoving-vg2': '/images/textbook-covers/kroppsoving-vg2-hero.png',
  '2p': '/images/subjects/matematikk-2p-hero.png',
  '2py': '/images/courses/matematikk-2p-y.png',
  's1': '/images/subjects/matematikk-s1-hero.png',
  'r1': '/images/subjects/matematikk-r1-hero.png',
  'fys1': '/images/subjects/fysikk1-hero.png',
  'kjemi1': '/images/subjects/kjemi1-hero.png',
  'biologi-1': '/images/textbook-covers/biologi-1-hero.png',
  'geofag-1': '/images/textbook-covers/geofag-1-hero.png',

  // VG3
  'norsk-vg3': '/images/courses/norsk-vg3.png',
  'historie-vg3': '/images/subjects/historie-vg3-hero.png',
  'kroppsoving-vg3': '/images/textbook-covers/kroppsoving-vg3-hero.png',
  's2': '/images/subjects/matematikk-s2-hero.png',
  'r2': '/images/subjects/matematikk-r2-hero.png',
  'fysikk2': '/images/subjects/fysikk2-hero.png',
  'kjemi2': '/images/subjects/kjemi2-hero.png',
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

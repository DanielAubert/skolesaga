import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { TEXTBOOK_COURSES } from '@/lib/data/textbook-courses';

// Define grade configurations
const GRADE_CONFIG: Record<string, {
  title: string;
  subtitle: string;
  ageRange: string;
  gradient: string;
  image?: string;
  subjects: { courseId: string; name: string; icon: string; color: string; image?: string }[];
}> = {
  '5': {
    title: '5. klasse',
    subtitle: 'Barneskole',
    ageRange: '10–11 år',
    gradient: 'from-lime-400 to-green-500',
    image: '/images/grades/5-klasse.jpg',
    subjects: [
      { courseId: '5', name: 'Matematikk', icon: '📐', color: 'from-blue-500 to-blue-600', image: '/images/subjects/matematikk-hero.png' },
      { courseId: 'norsk-5', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/subjects/norsk-hero.png' },
      { courseId: 'engelsk-5', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-hero.png' },
      { courseId: 'naturfag-5', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-hero.png' },
      { courseId: 'samfunnsfag-5', name: 'Samfunnsfag', icon: '🌍', color: 'from-amber-500 to-orange-600' },
      { courseId: 'krle-5', name: 'KRLE', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kunst-5', name: 'Kunst og håndverk', icon: '🎨', color: 'from-pink-500 to-rose-600' },
      { courseId: 'musikk-5', name: 'Musikk', icon: '🎵', color: 'from-violet-500 to-purple-600' },
      { courseId: 'mat-5', name: 'Mat og helse', icon: '🍳', color: 'from-orange-500 to-amber-600' },
      { courseId: 'kroppsoving-5', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  '6': {
    title: '6. klasse',
    subtitle: 'Barneskole',
    ageRange: '11–12 år',
    gradient: 'from-green-400 to-emerald-500',
    image: '/images/grades/6-klasse.jpg',
    subjects: [
      { courseId: '6', name: 'Matematikk', icon: '📐', color: 'from-blue-500 to-blue-600', image: '/images/subjects/matematikk-hero.png' },
      { courseId: 'norsk-6', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/subjects/norsk-hero.png' },
      { courseId: 'engelsk-6', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-hero.png' },
      { courseId: 'naturfag-6', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-hero.png' },
      { courseId: 'samfunnsfag-6', name: 'Samfunnsfag', icon: '🌍', color: 'from-amber-500 to-orange-600' },
      { courseId: 'krle-6', name: 'KRLE', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kunst-6', name: 'Kunst og håndverk', icon: '🎨', color: 'from-pink-500 to-rose-600' },
      { courseId: 'musikk-6', name: 'Musikk', icon: '🎵', color: 'from-violet-500 to-purple-600' },
      { courseId: 'mat-6', name: 'Mat og helse', icon: '🍳', color: 'from-orange-500 to-amber-600' },
      { courseId: 'kroppsoving-6', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  '7': {
    title: '7. klasse',
    subtitle: 'Barneskole',
    ageRange: '12–13 år',
    gradient: 'from-emerald-400 to-teal-500',
    image: '/images/grades/7-klasse.jpg',
    subjects: [
      { courseId: '7', name: 'Matematikk', icon: '📐', color: 'from-blue-500 to-blue-600', image: '/images/subjects/matematikk-hero.png' },
      { courseId: 'norsk-7', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/subjects/norsk-hero.png' },
      { courseId: 'engelsk-7', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-hero.png' },
      { courseId: 'naturfag-7', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-hero.png' },
      { courseId: 'samfunnsfag-7', name: 'Samfunnsfag', icon: '🌍', color: 'from-amber-500 to-orange-600' },
      { courseId: 'krle-7', name: 'KRLE', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kunst-7', name: 'Kunst og håndverk', icon: '🎨', color: 'from-pink-500 to-rose-600' },
      { courseId: 'musikk-7', name: 'Musikk', icon: '🎵', color: 'from-violet-500 to-purple-600' },
      { courseId: 'mat-7', name: 'Mat og helse', icon: '🍳', color: 'from-orange-500 to-amber-600' },
      { courseId: 'kroppsoving-7', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  '8': {
    title: '8. klasse',
    subtitle: 'Ungdomsskole',
    ageRange: '13–14 år',
    gradient: 'from-sky-400 to-blue-500',
    image: '/images/grades/8-klasse.png',
    subjects: [
      { courseId: '8', name: 'Matematikk', icon: '📐', color: 'from-blue-500 to-indigo-600', image: '/images/subjects/matematikk-hero.png' },
      { courseId: 'norsk-8', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/subjects/norsk-hero.png' },
      { courseId: 'engelsk-8', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-hero.png' },
      { courseId: 'naturfag-8', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-hero.png' },
      { courseId: 'samfunnsfag-8', name: 'Samfunnsfag', icon: '🌍', color: 'from-amber-500 to-orange-600' },
      { courseId: 'krle-8', name: 'KRLE', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kunst-8', name: 'Kunst og håndverk', icon: '🎨', color: 'from-pink-500 to-rose-600' },
      { courseId: 'musikk-8', name: 'Musikk', icon: '🎵', color: 'from-violet-500 to-purple-600' },
      { courseId: 'mat-8', name: 'Mat og helse', icon: '🍳', color: 'from-orange-500 to-amber-600' },
      { courseId: 'kroppsoving-8', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  '9': {
    title: '9. klasse',
    subtitle: 'Ungdomsskole',
    ageRange: '14–15 år',
    gradient: 'from-blue-400 to-indigo-500',
    image: '/images/grades/9-klasse.png',
    subjects: [
      { courseId: '9', name: 'Matematikk', icon: '📐', color: 'from-blue-500 to-indigo-600', image: '/images/subjects/matematikk-hero.png' },
      { courseId: 'norsk-9', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/subjects/norsk-hero.png' },
      { courseId: 'engelsk-9', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-hero.png' },
      { courseId: 'naturfag-9', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-hero.png' },
      { courseId: 'samfunnsfag-9', name: 'Samfunnsfag', icon: '🌍', color: 'from-amber-500 to-orange-600' },
      { courseId: 'krle-9', name: 'KRLE', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kunst-9', name: 'Kunst og håndverk', icon: '🎨', color: 'from-pink-500 to-rose-600' },
      { courseId: 'musikk-9', name: 'Musikk', icon: '🎵', color: 'from-violet-500 to-purple-600' },
      { courseId: 'mat-9', name: 'Mat og helse', icon: '🍳', color: 'from-orange-500 to-amber-600' },
      { courseId: 'kroppsoving-9', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  '10': {
    title: '10. klasse',
    subtitle: 'Ungdomsskole',
    ageRange: '15–16 år',
    gradient: 'from-indigo-400 to-violet-500',
    image: '/images/grades/10-klasse.jpg',
    subjects: [
      { courseId: '10', name: 'Matematikk', icon: '📐', color: 'from-blue-500 to-indigo-600', image: '/images/subjects/matematikk-hero.png' },
      { courseId: 'norsk-10', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/subjects/norsk-hero.png' },
      { courseId: 'engelsk-10', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-hero.png' },
      { courseId: 'naturfag-10', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-hero.png' },
      { courseId: 'samfunnsfag-10', name: 'Samfunnsfag', icon: '🌍', color: 'from-amber-500 to-orange-600' },
      { courseId: 'krle-10', name: 'KRLE', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kunst-10', name: 'Kunst og håndverk', icon: '🎨', color: 'from-pink-500 to-rose-600' },
      { courseId: 'musikk-10', name: 'Musikk', icon: '🎵', color: 'from-violet-500 to-purple-600' },
      { courseId: 'mat-10', name: 'Mat og helse', icon: '🍳', color: 'from-orange-500 to-amber-600' },
      { courseId: 'kroppsoving-10', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  'vg1': {
    title: 'VG1',
    subtitle: 'Videregående trinn 1',
    ageRange: '16–17 år',
    gradient: 'from-purple-400 to-fuchsia-500',
    image: '/images/grades/vg1.png',
    subjects: [
      { courseId: '1p', name: 'Matematikk 1P', icon: '📐', color: 'from-blue-500 to-indigo-600', image: '/images/subjects/matematikk-1p-hero.png' },
      { courseId: '1t', name: 'Matematikk 1T', icon: '📐', color: 'from-indigo-500 to-violet-600', image: '/images/textbook/1t/course-hero.jpg' },
      { courseId: 'norsk-vg1', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/courses/norsk-vg1.png' },
      { courseId: 'engelsk-vg1', name: 'Engelsk', icon: '🇬🇧', color: 'from-indigo-500 to-purple-600', image: '/images/subjects/engelsk-vg1-hero.png' },
      { courseId: 'nat-vg1', name: 'Naturfag', icon: '🔬', color: 'from-green-500 to-emerald-600', image: '/images/subjects/naturfag-vg1-hero.png' },
      { courseId: 'samfunnskunnskap', name: 'Samfunnskunnskap', icon: '🏛️', color: 'from-amber-500 to-orange-600', image: '/images/subjects/samfunnskunnskap-hero.png' },
      { courseId: 'geografi', name: 'Geografi', icon: '🗺️', color: 'from-emerald-500 to-teal-600' },
      { courseId: 'kroppsoving-vg1', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
      { courseId: 'spansk-1', name: 'Spansk nivå 1', icon: '🇪🇸', color: 'from-red-500 to-orange-600' },
      { courseId: 'tysk-1', name: 'Tysk nivå 1', icon: '🇩🇪', color: 'from-gray-600 to-gray-700' },
      { courseId: 'fransk-1', name: 'Fransk nivå 1', icon: '🇫🇷', color: 'from-blue-500 to-red-500' },
    ],
  },
  'vg2': {
    title: 'VG2',
    subtitle: 'Videregående trinn 2',
    ageRange: '17–18 år',
    gradient: 'from-fuchsia-400 to-pink-500',
    image: '/images/grades/vg2.png',
    subjects: [
      { courseId: '2p', name: 'Matematikk 2P', icon: '📐', color: 'from-blue-500 to-indigo-600', image: '/images/subjects/matematikk-2p-hero.png' },
      { courseId: '2py', name: 'Matematikk 2P-Y', icon: '📐', color: 'from-slate-500 to-gray-600', image: '/images/courses/matematikk-2p-y.png' },
      { courseId: 's1', name: 'Matematikk S1', icon: '📐', color: 'from-purple-500 to-violet-600', image: '/images/subjects/matematikk-s1-hero.png' },
      { courseId: 'r1', name: 'Matematikk R1', icon: '📐', color: 'from-rose-500 to-pink-600', image: '/images/subjects/matematikk-r1-hero.png' },
      { courseId: 'norsk-vg2', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/courses/norsk-vg2.png' },
      { courseId: 'historie-vg2', name: 'Historie', icon: '📜', color: 'from-amber-500 to-orange-600', image: '/images/subjects/historie-vg2-hero.png' },
      { courseId: 'samfunnskunnskap', name: 'Samfunnskunnskap', icon: '🏛️', color: 'from-amber-500 to-orange-600', image: '/images/subjects/samfunnskunnskap-hero.png' },
      { courseId: 'kroppsoving-vg2', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
      { courseId: 'fys1', name: 'Fysikk 1', icon: '⚛️', color: 'from-indigo-500 to-blue-600', image: '/images/subjects/fysikk1-hero.png' },
      { courseId: 'kjemi1', name: 'Kjemi 1', icon: '🧪', color: 'from-orange-500 to-amber-600', image: '/images/subjects/kjemi1-hero.png' },
    ],
  },
  'vg3': {
    title: 'VG3',
    subtitle: 'Videregående trinn 3',
    ageRange: '18–19 år',
    gradient: 'from-pink-400 to-rose-500',
    image: '/images/grades/vg3.png',
    subjects: [
      { courseId: 's2', name: 'Matematikk S2', icon: '📐', color: 'from-violet-500 to-purple-600', image: '/images/subjects/matematikk-s2-hero.png' },
      { courseId: 'r2', name: 'Matematikk R2', icon: '📐', color: 'from-pink-500 to-rose-600', image: '/images/subjects/matematikk-r2-hero.png' },
      { courseId: 'norsk-vg3', name: 'Norsk', icon: '📚', color: 'from-red-500 to-rose-600', image: '/images/courses/norsk-vg3.png' },
      { courseId: 'historie-vg3', name: 'Historie', icon: '📜', color: 'from-amber-500 to-orange-600', image: '/images/subjects/historie-vg3-hero.png' },
      { courseId: 'religion-etikk', name: 'Religion og etikk', icon: '🕊️', color: 'from-purple-500 to-violet-600' },
      { courseId: 'kroppsoving-vg3', name: 'Kroppsøving', icon: '🏃', color: 'from-cyan-500 to-teal-600' },
      { courseId: 'fysikk2', name: 'Fysikk 2', icon: '⚛️', color: 'from-indigo-500 to-blue-600', image: '/images/subjects/fysikk2-hero.png' },
      { courseId: 'kjemi2', name: 'Kjemi 2', icon: '🧪', color: 'from-orange-500 to-amber-600', image: '/images/subjects/kjemi2-hero.png' },
    ],
  },
  'hoyere': {
    title: 'Høyere utdanning',
    subtitle: 'Universitet og høyskole',
    ageRange: '19+ år',
    gradient: 'from-amber-400 to-orange-500',
    subjects: [
      { courseId: 'bi-okonomi', name: 'BI Økonomi', icon: '📊', color: 'from-amber-500 to-orange-600' },
    ],
  },
};

interface PageProps {
  params: Promise<{ grade: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { grade } = await params;
  const config = GRADE_CONFIG[grade];

  if (!config) {
    return { title: 'Klassetrinn ikke funnet' };
  }

  return {
    title: `${config.title} | Interaktive Lærebøker`,
    description: `Alle lærebøker for ${config.title}. ${config.subjects.length} fag tilgjengelig.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(GRADE_CONFIG).map((grade) => ({ grade }));
}

function getCourseStats(courseId: string) {
  const course = TEXTBOOK_COURSES.find(c => c.id === courseId);
  if (!course) return { chapters: 0, exercises: 0 };
  const totalExercises = course.chapters.reduce((sum, ch) => sum + ch.exerciseCount, 0);
  return {
    chapters: course.chapters.length,
    exercises: totalExercises,
  };
}

interface SubjectCardProps {
  courseId: string;
  name: string;
  icon: string;
  color: string;
  image?: string;
}

function SubjectCard({ courseId, name, icon, color, image }: SubjectCardProps) {
  const stats = getCourseStats(courseId);
  const isAvailable = stats.chapters > 0;

  if (!isAvailable) {
    return (
      <div className="group relative">
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 h-48 opacity-40`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="text-4xl">{icon}</div>
            <div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm opacity-80 mt-1">Kommer snart</p>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          Kommer
        </div>
      </div>
    );
  }

  return (
    <Link href={`/bok/${courseId}`} className="group block">
      <div className={`relative overflow-hidden rounded-2xl ${image ? '' : `bg-gradient-to-br ${color}`} h-48 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-black/20`}>
        {/* Background image if provided */}
        {image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Decorative elements (only when no image) */}
        {!image && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-black/20 blur-2xl" />
          </div>
        )}

        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between text-white p-6">
          <div className="flex items-start justify-between">
            {!image && <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>}
            {image && <div />}
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">
              <span>{stats.chapters} kapitler</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <div className="flex items-center gap-3 text-sm opacity-80">
              <span>{stats.exercises} oppgaver</span>
            </div>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default async function GradePage({ params }: PageProps) {
  const { grade } = await params;
  const config = GRADE_CONFIG[grade];

  if (!config) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />

      {/* Hero Section with image or gradient */}
      {config.image ? (
        <div className="relative overflow-hidden h-48 md:h-64 lg:h-72">
          {/* Background image - cropped and centered */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={config.image}
            alt={config.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ) : (
        <div className={`relative overflow-hidden bg-gradient-to-br ${config.gradient}`}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative container mx-auto px-4 py-12 md:py-20">
            <Link
              href="/bok"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Tilbake til alle trinn</span>
            </Link>

            <div className="text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                  {config.subtitle}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                  {config.ageRange}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                {config.title}
              </h1>
              <p className="text-xl text-white/80 max-w-xl">
                {config.subjects.length} fag tilgjengelig. Velg et fag for å se alle kapitler og oppgaver.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Subjects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Velg fag</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.subjects.map((subject) => (
              <SubjectCard
                key={subject.courseId}
                courseId={subject.courseId}
                name={subject.name}
                icon={subject.icon}
                color={subject.color}
                image={subject.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick info */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground">{config.subjects.length}</div>
                <div className="text-sm text-muted-foreground">Fag</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {config.subjects.reduce((sum, s) => sum + getCourseStats(s.courseId).chapters, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Kapitler</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {config.subjects.reduce((sum, s) => sum + getCourseStats(s.courseId).exercises, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Oppgaver</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">LK20</div>
                <div className="text-sm text-muted-foreground">Læreplan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

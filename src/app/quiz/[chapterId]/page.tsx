import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getQuizQuestions, hasQuizQuestions } from '@/lib/data/quiz-data';
import { getChemistryQuizQuestions, hasChemistryQuiz } from '@/lib/data/chemistry-quiz-data';
import { StandaloneQuizClient } from './standalone-quiz-client';

interface Props {
  params: Promise<{ chapterId: string }>;
}

// Parse chapter ID to get human-readable title
function parseChapterInfo(chapterId: string): { subjectName: string; gradeName: string; chapterName: string } {
  const subjectNames: Record<string, string> = {
    'norsk': 'Norsk',
    'engelsk': 'Engelsk',
    'matematikk': 'Matematikk',
    'naturfag': 'Naturfag',
    'samfunnsfag': 'Samfunnsfag',
    'krle': 'KRLE',
    'kunst': 'Kunst og håndverk',
    'musikk': 'Musikk',
    'kroppsoving': 'Kroppsøving',
    'mat-og-helse': 'Mat og helse',
    'spansk': 'Spansk',
    'tysk': 'Tysk',
    'fransk': 'Fransk',
    'fysikk': 'Fysikk',
    'kjemi': 'Kjemi',
    'biologi': 'Biologi',
    'geofag': 'Geofag',
    'geografi': 'Geografi',
    'historie': 'Historie',
    'samfunnskunnskap': 'Samfunnskunnskap',
    'sosiologi': 'Sosiologi',
    'psykologi': 'Psykologi',
    'it': 'IT',
    'tof': 'Teknologi og forskningslære',
    'rettslaere': 'Rettslære',
    'samfokonomi': 'Samfunnsøkonomi',
    'okonomi-drift': 'Økonomi og administrasjon',
    'okonomi-ledelse': 'Økonomi og ledelse',
    'markedsforing': 'Markedsføring',
    'regnskap-revisjon': 'Regnskap og revisjon',
    'entrebed': 'Entreprenørskap',
    'medieinfo': 'Medieproduksjon',
    'komkult': 'Kommunikasjon og kultur',
    'religion-etikk': 'Religion og etikk',
    'filosofi-etikk': 'Filosofi og etikk',
    'politikk-menneskerett': 'Politikk og menneskerettigheter',
    'int-engelsk': 'Internasjonal engelsk',
    'helseoppvekst': 'Helse- og oppvekstfag',
    'trening': 'Treningslære',
    'sikkerhetsfag': 'Sikkerhetsfag',
  };

  const parts = chapterId.split('-');

  // Find where the grade starts
  const subjectParts: string[] = [];
  let gradeIndex = -1;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (/^\d+$/.test(part) || /^vg\d+$/i.test(part)) {
      gradeIndex = i;
      break;
    }
    subjectParts.push(part);
  }

  const subjectId = subjectParts.join('-');
  const subjectName = subjectNames[subjectId] || subjectId.charAt(0).toUpperCase() + subjectId.slice(1);

  let gradeName = '';
  let chapterName = 'Kapittel';

  if (gradeIndex !== -1) {
    const grade = parts[gradeIndex];
    if (/^vg\d+$/i.test(grade)) {
      gradeName = grade.toUpperCase();
    } else {
      const num = parseInt(grade, 10);
      if (num <= 10) {
        gradeName = `${num}. klasse`;
      } else {
        gradeName = `VG${num}`;
      }
    }

    const chapterParts = parts.slice(gradeIndex + 1);
    if (chapterParts.length > 0) {
      chapterName = `Kapittel ${chapterParts.join('.')}`;
    }
  }

  return { subjectName, gradeName, chapterName };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { chapterId } = await params;
  const { subjectName, gradeName, chapterName } = parseChapterInfo(chapterId);

  return {
    title: `Quiz: ${subjectName} ${gradeName} - ${chapterName}`,
    description: `Test deg selv med interaktiv quiz for ${subjectName} ${gradeName}, ${chapterName.toLowerCase()}.`,
  };
}

export default async function QuizPage({ params }: Props) {
  const { chapterId } = await params;

  // Get questions - try generic first, then chemistry-specific
  let questions = getQuizQuestions(chapterId);
  if (questions.length === 0 && chapterId.startsWith('kjemi')) {
    questions = getChemistryQuizQuestions(chapterId);
  }

  // Check if quiz exists
  const hasQuiz = hasQuizQuestions(chapterId) || hasChemistryQuiz(chapterId);
  if (!hasQuiz && questions.length < 4) {
    notFound();
  }

  const { subjectName, gradeName, chapterName } = parseChapterInfo(chapterId);

  return (
    <StandaloneQuizClient
      chapterId={chapterId}
      subjectName={subjectName}
      gradeName={gradeName}
      chapterName={chapterName}
      questions={questions}
    />
  );
}

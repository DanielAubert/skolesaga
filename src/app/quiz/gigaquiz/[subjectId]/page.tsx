import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GIGAQUIZ_HISTORIE } from '@/lib/data/gigaquiz-data-historie';
import type { GigaquizConfig } from '@/lib/data/gigaquiz-data-historie';
import { QuizWrapper } from './quiz-wrapper';

const GIGAQUIZ_REGISTRY: Record<string, GigaquizConfig> = {
  historie: GIGAQUIZ_HISTORIE,
};

interface Props {
  params: Promise<{ subjectId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subjectId } = await params;
  const config = GIGAQUIZ_REGISTRY[subjectId];

  if (!config) {
    return { title: 'Diagnostisk quiz ikke funnet' };
  }

  const totalQuestions = config.chapters.reduce((sum, ch) => sum + ch.questions.length, 0);

  return {
    title: `${config.title.replace('Gigaquiz', 'Diagnostisk quiz')} – Eksamensforberedelse`,
    description: `${config.description} ${totalQuestions} spørsmål fordelt på ${config.chapters.length} kapitler.`,
  };
}

export function generateStaticParams() {
  return Object.keys(GIGAQUIZ_REGISTRY).map((subjectId) => ({ subjectId }));
}

export default async function GigaquizPage({ params }: Props) {
  const { subjectId } = await params;
  const config = GIGAQUIZ_REGISTRY[subjectId];

  if (!config) {
    notFound();
  }

  return <QuizWrapper config={config} />;
}

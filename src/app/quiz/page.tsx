import { Metadata } from 'next';
import Link from 'next/link';
import { BookCheck, GraduationCap, Layers, HelpCircle } from 'lucide-react';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import {
  getOrganizedQuizData,
  getTotalQuizQuestionCount,
  getUniqueSubjectCount,
} from '@/lib/data/quiz-data';
import { QuizBrowser } from './quiz-browser';

export const metadata: Metadata = {
  title: 'Prøvequiz - Test deg selv',
  description: 'Øv til kapittelprøver med interaktive quizer for alle fag fra 5. klasse til VG3.',
};

export default function QuizOverviewPage() {
  const quizData = getOrganizedQuizData();
  const totalQuestions = getTotalQuizQuestionCount();
  const subjectCount = getUniqueSubjectCount();
  const chapterCount = quizData.reduce((sum, s) => sum + s.grades.reduce((gs, g) => gs + g.chapters.length, 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-violet-950/30 dark:via-purple-950/30 dark:to-indigo-950/30" />
        <div className="relative container mx-auto px-4 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 mb-6">
            <BookCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Prøvequiz
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Test kunnskapen din med interaktive quizer tilpasset hvert kapittel
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                <HelpCircle className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{totalQuestions.toLocaleString('nb-NO')}+</div>
                <div className="text-xs text-muted-foreground">spørsmål</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{subjectCount}</div>
                <div className="text-xs text-muted-foreground">fag</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">{chapterCount}</div>
                <div className="text-xs text-muted-foreground">kapitler</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <QuizBrowser data={quizData} />
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Layers, HelpCircle } from 'lucide-react';
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
        <Image
          src="/home/prove-quiz.jpg"
          alt="Prøve Quiz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-12 md:py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Prøvequiz
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Test kunnskapen din med interaktive quizer tilpasset hvert kapittel
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{totalQuestions.toLocaleString('nb-NO')}+</div>
                <div className="text-xs text-white/70">spørsmål</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{subjectCount}</div>
                <div className="text-xs text-white/70">fag</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{chapterCount}</div>
                <div className="text-xs text-white/70">kapitler</div>
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

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Layers, HelpCircle, Trophy, ArrowRight } from 'lucide-react';
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

      {/* Hero Section with Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home/prove-quiz-hero.png"
            alt="Prøve Quiz"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
            Prøvequiz
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow">
            Test kunnskapen din med interaktive quizer tilpasset hvert kapittel
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
              <HelpCircle className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{totalQuestions.toLocaleString('nb-NO')}+</div>
                <div className="text-xs text-white/80">spørsmål</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
              <GraduationCap className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{subjectCount}</div>
                <div className="text-xs text-white/80">fag</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
              <Layers className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{chapterCount}</div>
                <div className="text-xs text-white/80">kapitler</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gigaquiz Banner */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/quiz/gigaquiz/historie" className="block">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 p-6 md:p-8 text-white hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold mb-1">Historie Gigaquiz</h2>
                <p className="text-white/80 text-sm md:text-base">
                  51 spørsmål over 17 kapitler – finn ut hva du kan og hva du bør repetere
                </p>
              </div>
              <ArrowRight className="w-6 h-6 shrink-0 hidden sm:block" />
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <QuizBrowser data={quizData} />
      </div>
    </div>
  );
}

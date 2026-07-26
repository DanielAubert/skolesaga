'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  GraduationCap, Clock, Loader2, Eye, Ear, BookOpen, Hand,
  RotateCcw, AlertTriangle, Lightbulb,
} from 'lucide-react';
import { allLearningItems, TOTAL_LEARNING_ITEMS } from '@/lib/data/learning-style/all-items';
import { calculateLearningResult, getEffectiveScore } from '@/lib/data/learning-style/scoring';
import type { LearningStyle, LearningAnswer, LearningResult } from '@/lib/types/learning-style';
import {
  STYLE_LABELS, STYLE_COLORS, STYLE_DESCRIPTIONS, STYLE_TIPS,
  STYLE_ORDER,
} from '@/lib/types/learning-style';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer,
} from 'recharts';

const LIKERT_LABELS = ['Helt uenig', 'Litt uenig', 'Nøytral', 'Litt enig', 'Helt enig'] as const;

const STYLE_ICONS: Record<LearningStyle, typeof Eye> = {
  visual: Eye,
  auditory: Ear,
  readwrite: BookOpen,
  kinesthetic: Hand,
};

type Phase = 'testing' | 'calculating' | 'results';

export default function LearningStyleTestPage() {
  const [phase, setPhase] = useState<Phase>('testing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<LearningAnswer[]>([]);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testStartTime] = useState<number>(Date.now());
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [result, setResult] = useState<LearningResult | null>(null);

  useEffect(() => {
    if (phase !== 'testing') return;
    const timer = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - testStartTime) / 60000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, testStartTime]);

  const handleAnswer = useCallback((score: number) => {
    if (selectedScore !== null) return;

    const item = allLearningItems[currentIndex];
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const effectiveScore = getEffectiveScore(score, item.reversed);

    setSelectedScore(score);

    const newAnswer: LearningAnswer = {
      itemId: item.id,
      style: item.style,
      score,
      effectiveScore,
      timeSpent,
    };

    const newAnswers = [...answers, newAnswer];

    setTimeout(() => {
      setAnswers(newAnswers);

      if (currentIndex + 1 >= TOTAL_LEARNING_ITEMS) {
        setPhase('calculating');
        const finalResult = calculateLearningResult(newAnswers);
        setResult(finalResult);

        setPhase('results');
      } else {
        setCurrentIndex(currentIndex + 1);
        setQuestionStartTime(Date.now());
        setSelectedScore(null);
      }
    }, 400);
  }, [currentIndex, answers, selectedScore, questionStartTime]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedScore(null);
    setQuestionStartTime(Date.now());
    setPhase('testing');
    setResult(null);
  };

  // Calculating phase
  if (phase === 'calculating') {
    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main id="main-content" className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-indigo-600" />
            <h1 className="text-2xl font-bold">Analyserer din læringstil...</h1>
            <p className="text-muted-foreground">Finner dine sterkeste læringspreferanser</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results phase
  if (phase === 'results' && result) {
    const radarData = STYLE_ORDER.map(style => ({
      style: STYLE_LABELS[style],
      percentile: result.styleScores[style].percentile,
      fullMark: 100,
    }));

    const sortedStyles = STYLE_ORDER
      .map(s => result.styleScores[s])
      .sort((a, b) => b.percentile - a.percentile);

    const DominantIcon = STYLE_ICONS[result.dominantStyle];

    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8 max-w-4xl">
            {/* Dominant style */}
            <Card className="mb-8 overflow-hidden">
              <div className={`bg-gradient-to-br ${STYLE_COLORS[result.dominantStyle]} p-8 text-center text-white`}>
                <p className="text-sm uppercase tracking-wider mb-2 text-white/80">Din dominerende læringstil</p>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                  <DominantIcon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold mb-2">{STYLE_LABELS[result.dominantStyle]}</h1>
                <p className="text-white/90 max-w-md mx-auto">{STYLE_DESCRIPTIONS[result.dominantStyle]}</p>
              </div>
            </Card>

            {/* Radar Chart */}
            <Card className="mb-8">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">Læringstilprofil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis
                        dataKey="style"
                        tick={{ fontSize: 14, fontWeight: 600 }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={{ fontSize: 10 }}
                        tickCount={6}
                      />
                      <Radar
                        name="Persentil"
                        dataKey="percentile"
                        stroke="#6366f1"
                        fill="#6366f1"
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Style breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Dine læringstiler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sortedStyles.map(score => {
                  const StyleIcon = STYLE_ICONS[score.style];
                  return (
                    <div key={score.style} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded bg-gradient-to-br ${STYLE_COLORS[score.style]} flex items-center justify-center`}>
                            <StyleIcon className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium">{STYLE_LABELS[score.style]}</span>
                          <span className="text-xs text-muted-foreground hidden sm:inline">{STYLE_DESCRIPTIONS[score.style]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{score.label}</span>
                          <span className="font-semibold">{score.percentile}%</span>
                        </div>
                      </div>
                      <Progress value={score.percentile} className="h-2" aria-label="Persentil" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Study tips for top 2 styles */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  Studietips for deg
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[result.dominantStyle, result.secondaryStyle].map(style => {
                    const StyleIcon = STYLE_ICONS[style];
                    const tips = STYLE_TIPS[style];
                    return (
                      <div key={style}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-6 h-6 rounded bg-gradient-to-br ${STYLE_COLORS[style]} flex items-center justify-center`}>
                            <StyleIcon className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-semibold text-sm">{STYLE_LABELS[style]}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {tips.map(tip => (
                            <li key={tip} className="text-sm text-muted-foreground flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0 mt-2" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 mb-8">
              <CardContent className="p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  De fleste bruker en kombinasjon av læringstiler. Resultatet viser dine preferanser, men det betyr ikke at du kun kan lære på én måte.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="outline" size="lg" onClick={handleRestart}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Ta testen på nytt
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Testing phase
  const currentItem = allLearningItems[currentIndex];
  const progressPercent = (currentIndex / TOTAL_LEARNING_ITEMS) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container py-6 max-w-2xl">
          {/* Testfasen har ingen synlig tittel — <h1> for skjermlesere */}
          <h1 className="sr-only">Læringstiltest</h1>
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur py-3 mb-6 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Påstand {currentIndex + 1} av {TOTAL_LEARNING_ITEMS}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{elapsedMinutes} min</span>
              </div>
            </div>
            <Progress value={progressPercent} className="h-1.5" aria-label="Framdrift i testen" />
          </div>

          <Card className={`transition-all duration-300 ${selectedScore !== null ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
            <CardContent className="p-8">
              <p className="text-xl font-medium text-center leading-relaxed mb-10">
                &ldquo;{currentItem.text}&rdquo;
              </p>

              <div className="flex justify-center items-end gap-3 sm:gap-4">
                {LIKERT_LABELS.map((label, index) => {
                  const score = index + 1;
                  const isSelected = selectedScore === score;
                  const sizes = [
                    'w-11 h-11 sm:w-12 sm:h-12',
                    'w-12 h-12 sm:w-13 sm:h-13',
                    'w-13 h-13 sm:w-14 sm:h-14',
                    'w-12 h-12 sm:w-13 sm:h-13',
                    'w-11 h-11 sm:w-12 sm:h-12',
                  ];
                  const colors = [
                    'border-red-300 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20',
                    'border-orange-300 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20',
                    'border-gray-300 hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800',
                    'border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/20',
                    'border-teal-300 hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950/20',
                  ];
                  const selectedColors = [
                    'border-red-500 bg-red-500 text-white',
                    'border-orange-500 bg-orange-500 text-white',
                    'border-gray-500 bg-gray-500 text-white',
                    'border-emerald-500 bg-emerald-500 text-white',
                    'border-teal-500 bg-teal-500 text-white',
                  ];

                  return (
                    <button
                      key={score}
                      onClick={() => handleAnswer(score)}
                      disabled={selectedScore !== null}
                      aria-pressed={isSelected}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div
                        className={`${sizes[index]} rounded-full border-2 flex items-center justify-center transition-all duration-200 font-bold text-sm ${
                          isSelected ? selectedColors[index] : colors[index]
                        }`}
                      >
                        {score}
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight max-w-[60px]">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

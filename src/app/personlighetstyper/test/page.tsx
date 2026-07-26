'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  Users, Clock, Loader2, RotateCcw, AlertTriangle, Zap, Eye, Heart, Compass,
} from 'lucide-react';
import { allP16Items, TOTAL_P16_ITEMS } from '@/lib/data/personality-16/all-items';
import { calculateP16Result } from '@/lib/data/personality-16/scoring';
import type { Dimension, P16Answer, P16Result } from '@/lib/types/personality-16';
import {
  DIMENSION_LABELS, DIMENSION_COLORS, DIMENSION_ORDER,
  DIMENSION_DESCRIPTIONS, TYPE_NICKNAMES, TYPE_DESCRIPTIONS,
} from '@/lib/types/personality-16';

const LIKERT_LABELS = ['Helt uenig', 'Litt uenig', 'Nøytral', 'Litt enig', 'Helt enig'] as const;

const DIMENSION_ICONS: Record<Dimension, typeof Zap> = {
  EI: Zap,
  SN: Eye,
  TF: Heart,
  JP: Compass,
};

type Phase = 'testing' | 'calculating' | 'results';

export default function P16TestPage() {
  const [phase, setPhase] = useState<Phase>('testing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<P16Answer[]>([]);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testStartTime] = useState<number>(Date.now());
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [result, setResult] = useState<P16Result | null>(null);

  useEffect(() => {
    if (phase !== 'testing') return;
    const timer = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - testStartTime) / 60000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, testStartTime]);

  const handleAnswer = useCallback((score: number) => {
    if (selectedScore !== null) return;

    const item = allP16Items[currentIndex];
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);

    setSelectedScore(score);

    const newAnswer: P16Answer = {
      itemId: item.id,
      dimension: item.dimension,
      pole: item.pole,
      score,
      timeSpent,
    };

    const newAnswers = [...answers, newAnswer];

    setTimeout(() => {
      setAnswers(newAnswers);

      if (currentIndex + 1 >= TOTAL_P16_ITEMS) {
        setPhase('calculating');
        const finalResult = calculateP16Result(newAnswers);
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
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-orange-600" />
            <h1 className="text-2xl font-bold">Finner din personlighetstype...</h1>
            <p className="text-muted-foreground">Analyserer dine preferanser på 4 dimensjoner</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results phase
  if (phase === 'results' && result) {
    const nickname = TYPE_NICKNAMES[result.type] || result.type;
    const description = TYPE_DESCRIPTIONS[result.type] || '';

    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8 max-w-4xl">
            {/* Type result */}
            <Card className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-br from-orange-500 to-rose-600 p-8 text-center text-white">
                <p className="text-sm uppercase tracking-wider mb-2 text-white/80">Din personlighetstype</p>
                <h1 className="text-6xl font-bold mb-2 tracking-widest">{result.type}</h1>
                <p className="text-2xl font-semibold mb-2">{nickname}</p>
                <p className="text-white/90 max-w-md mx-auto">{description}</p>
              </div>
            </Card>

            {/* Dimension breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Dimensjoner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {DIMENSION_ORDER.map(dim => {
                  const score = result.dimensions[dim];
                  const DimIcon = DIMENSION_ICONS[dim];
                  const [labelA, labelB] = DIMENSION_LABELS[dim];

                  return (
                    <div key={dim} className="space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-7 h-7 rounded bg-gradient-to-br ${DIMENSION_COLORS[dim]} flex items-center justify-center`}>
                          <DimIcon className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-xs text-muted-foreground">{DIMENSION_DESCRIPTIONS[dim]}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-semibold w-36 text-right ${score.winner === score.poleA ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {labelA}
                        </span>
                        <div className="flex-1 relative h-6 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${DIMENSION_COLORS[dim]} transition-all duration-500 rounded-full`}
                            style={{ width: `${score.scoreA}%` }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                            <span className={score.scoreA > 50 ? 'text-white' : 'text-foreground'}>
                              {score.scoreA}% / {score.scoreB}%
                            </span>
                          </div>
                        </div>
                        <span className={`text-sm font-semibold w-36 ${score.winner === score.poleB ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {labelB}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 mb-8">
              <CardContent className="p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Dette er ikke en offisiell MBTI-test. Resultatet gir en indikasjon basert på Jungs typeteori, men personlighetstyper er forenklinger av komplekse mennesker.
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
  const currentItem = allP16Items[currentIndex];
  const progressPercent = (currentIndex / TOTAL_P16_ITEMS) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container py-6 max-w-2xl">
          {/* Testfasen har ingen synlig tittel — <h1> for skjermlesere */}
          <h1 className="sr-only">Personlighetstypetest</h1>
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur py-3 mb-6 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Påstand {currentIndex + 1} av {TOTAL_P16_ITEMS}
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

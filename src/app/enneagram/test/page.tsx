'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  CircleDot, Clock, Loader2, Sparkles, RotateCcw, AlertTriangle,
} from 'lucide-react';
import { allEnneagramItems, TOTAL_ENNEAGRAM_ITEMS } from '@/lib/data/enneagram/all-items';
import { calculateEnneagramResult, getEffectiveScore } from '@/lib/data/enneagram/scoring';
import type { EnneagramType, EnneagramAnswer, EnneagramResult } from '@/lib/types/enneagram';
import {
  TYPE_NAMES, TYPE_SUBTITLES, TYPE_DESCRIPTIONS, TYPE_COLORS,
  ENNEAGRAM_ORDER,
} from '@/lib/types/enneagram';
import ReactMarkdown from 'react-markdown';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer,
} from 'recharts';

const LIKERT_LABELS = ['Helt uenig', 'Litt uenig', 'Nøytral', 'Litt enig', 'Helt enig'] as const;

type Phase = 'testing' | 'calculating' | 'results';

export default function EnneagramTestPage() {
  const [phase, setPhase] = useState<Phase>('testing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<EnneagramAnswer[]>([]);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testStartTime] = useState<number>(Date.now());
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [result, setResult] = useState<EnneagramResult | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (phase !== 'testing') return;
    const timer = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - testStartTime) / 60000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, testStartTime]);

  const handleAnswer = useCallback((score: number) => {
    if (selectedScore !== null) return;

    const item = allEnneagramItems[currentIndex];
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const effectiveScore = getEffectiveScore(score, item.reversed);

    setSelectedScore(score);

    const newAnswer: EnneagramAnswer = {
      itemId: item.id,
      type: item.type,
      score,
      effectiveScore,
      timeSpent,
    };

    const newAnswers = [...answers, newAnswer];

    setTimeout(() => {
      setAnswers(newAnswers);

      if (currentIndex + 1 >= TOTAL_ENNEAGRAM_ITEMS) {
        setPhase('calculating');
        const finalResult = calculateEnneagramResult(newAnswers);
        setResult(finalResult);

        setAiLoading(true);
        fetch('/api/enneagram/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalResult),
        })
          .then(res => res.json())
          .then(data => {
            if (data.analysis) {
              setAiAnalysis(data.analysis);
              setResult(prev => prev ? { ...prev, aiAnalysis: data.analysis } : prev);
            }
          })
          .catch(() => setAiAnalysis(null))
          .finally(() => {
            setAiLoading(false);
            setPhase('results');
          });

        setTimeout(() => setPhase('results'), 1500);
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
    setAiAnalysis(null);
  };

  // Calculating phase
  if (phase === 'calculating') {
    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-amber-600" />
            <h2 className="text-2xl font-bold">Analyserer din enneagramtype...</h2>
            <p className="text-muted-foreground">Finner din dominerende type og vinge</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results phase
  if (phase === 'results' && result) {
    const radarData = ENNEAGRAM_ORDER.map(t => ({
      type: `${t}`,
      percentile: result.typeScores[t].percentile,
      fullMark: 100,
    }));

    const sortedTypes = ENNEAGRAM_ORDER
      .map(t => result.typeScores[t])
      .sort((a, b) => b.percentile - a.percentile);

    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8 max-w-4xl">
            {/* Dominant type hero */}
            <Card className="mb-8 overflow-hidden">
              <div className={`bg-gradient-to-br ${TYPE_COLORS[result.dominantType]} p-8 text-center text-white`}>
                <p className="text-sm uppercase tracking-wider mb-2 text-white/80">Din enneagramtype</p>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                  <span className="text-4xl font-bold">{result.dominantType}</span>
                </div>
                <h1 className="text-3xl font-bold mb-1">{TYPE_NAMES[result.dominantType]}</h1>
                <p className="text-white/90 text-sm mb-3">{TYPE_SUBTITLES[result.dominantType]}</p>
                <p className="text-white/80 text-sm max-w-lg mx-auto mb-4">{TYPE_DESCRIPTIONS[result.dominantType]}</p>
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm">
                  <span className="text-white/70">Vinge:</span>
                  <span className="font-semibold">{result.wing} — {TYPE_NAMES[result.wing]}</span>
                </div>
              </div>
            </Card>

            {/* Radar Chart */}
            <Card className="mb-8">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">Typeprofil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis
                        dataKey="type"
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
                        stroke="#f59e0b"
                        fill="#f59e0b"
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Type breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CircleDot className="h-5 w-5" />
                  Alle 9 typer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sortedTypes.map(score => (
                  <div key={score.type} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded bg-gradient-to-br ${TYPE_COLORS[score.type]} flex items-center justify-center`}>
                          <span className="text-xs font-bold text-white">{score.type}</span>
                        </div>
                        <span className="font-medium">{TYPE_NAMES[score.type]}</span>
                        <span className="text-xs text-muted-foreground hidden sm:inline">{TYPE_SUBTITLES[score.type]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{score.label}</span>
                        <span className="font-semibold">{score.percentile}%</span>
                      </div>
                    </div>
                    <Progress value={score.percentile} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI analysis */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-600" />
                  AI-analyse
                </CardTitle>
              </CardHeader>
              <CardContent>
                {aiLoading && !aiAnalysis ? (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Henter personlig analyse...</span>
                  </div>
                ) : aiAnalysis ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Kunne ikke hente AI-analyse. Prøv å laste siden på nytt.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 mb-8">
              <CardContent className="p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Enneagrammet er et verktøy for selvrefleksjon. Alle har trekk fra flere typer — resultatet viser dine sterkeste tendenser.
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
  const currentItem = allEnneagramItems[currentIndex];
  const progressPercent = (currentIndex / TOTAL_ENNEAGRAM_ITEMS) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6 max-w-2xl">
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur py-3 mb-6 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Påstand {currentIndex + 1} av {TOTAL_ENNEAGRAM_ITEMS}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{elapsedMinutes} min</span>
              </div>
            </div>
            <Progress value={progressPercent} className="h-1.5" />
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

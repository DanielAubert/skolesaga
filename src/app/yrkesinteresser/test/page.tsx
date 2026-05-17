'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  GraduationCap, Clock, Loader2, Wrench, Microscope, Palette,
  Heart, TrendingUp, ClipboardList, RotateCcw, AlertTriangle,
} from 'lucide-react';
import { allRIASECItems, TOTAL_RIASEC_ITEMS } from '@/lib/data/riasec/all-items';
import { calculateRIASECResult, getEffectiveScore } from '@/lib/data/riasec/scoring';
import type { RIASECArea, RIASECAnswer, RIASECResult } from '@/lib/types/riasec';
import {
  AREA_LABELS, AREA_COLORS, AREA_DESCRIPTIONS, AREA_CAREERS,
  AREA_ORDER, AREA_CHART_COLORS,
} from '@/lib/types/riasec';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer,
} from 'recharts';

const LIKERT_LABELS = ['Helt uenig', 'Litt uenig', 'Nøytral', 'Litt enig', 'Helt enig'] as const;

const AREA_ICONS: Record<RIASECArea, typeof Wrench> = {
  R: Wrench,
  I: Microscope,
  A: Palette,
  S: Heart,
  E: TrendingUp,
  C: ClipboardList,
};

type Phase = 'testing' | 'calculating' | 'results';

export default function RIASECTestPage() {
  const [phase, setPhase] = useState<Phase>('testing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<RIASECAnswer[]>([]);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testStartTime] = useState<number>(Date.now());
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [result, setResult] = useState<RIASECResult | null>(null);

  useEffect(() => {
    if (phase !== 'testing') return;
    const timer = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - testStartTime) / 60000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, testStartTime]);

  const handleAnswer = useCallback((score: number) => {
    if (selectedScore !== null) return;

    const item = allRIASECItems[currentIndex];
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const effectiveScore = getEffectiveScore(score, item.reversed);

    setSelectedScore(score);

    const newAnswer: RIASECAnswer = {
      itemId: item.id,
      area: item.area,
      score,
      effectiveScore,
      timeSpent,
    };

    const newAnswers = [...answers, newAnswer];

    setTimeout(() => {
      setAnswers(newAnswers);

      if (currentIndex + 1 >= TOTAL_RIASEC_ITEMS) {
        setPhase('calculating');
        const finalResult = calculateRIASECResult(newAnswers);
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
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
            <h2 className="text-2xl font-bold">Analyserer dine interesser...</h2>
            <p className="text-muted-foreground">Finner dine sterkeste interesseområder og karriereforslag</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results phase
  if (phase === 'results' && result) {
    const radarData = AREA_ORDER.map(area => ({
      area: AREA_LABELS[area],
      percentile: result.areaScores[area].percentile,
      fullMark: 100,
    }));

    const sortedAreas = AREA_ORDER
      .map(a => result.areaScores[a])
      .sort((a, b) => b.percentile - a.percentile);

    const topAreas = sortedAreas.slice(0, 3);

    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8 max-w-4xl">
            {/* Holland Code */}
            <Card className="mb-8 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-emerald-600 p-8 text-center text-white">
                <p className="text-sm uppercase tracking-wider mb-2 text-white/80">Din Holland-kode</p>
                <h1 className="text-6xl font-bold mb-4 tracking-[0.3em]">{result.hollandCode}</h1>
                <div className="flex justify-center gap-3 flex-wrap">
                  {topAreas.map(s => {
                    const AreaIcon = AREA_ICONS[s.area];
                    return (
                      <Badge key={s.area} variant="secondary" className="bg-white/20 text-white border-0 text-sm py-1 px-3">
                        <AreaIcon className="h-3.5 w-3.5 mr-1.5" />
                        {AREA_LABELS[s.area]}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Radar Chart */}
            <Card className="mb-8">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">Interesseprofil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis
                        dataKey="area"
                        tick={{ fontSize: 13, fontWeight: 600 }}
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
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Area breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Interesseområder
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sortedAreas.map(score => {
                  const AreaIcon = AREA_ICONS[score.area];
                  return (
                    <div key={score.area} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded bg-gradient-to-br ${AREA_COLORS[score.area]} flex items-center justify-center`}>
                            <AreaIcon className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium">{AREA_LABELS[score.area]}</span>
                          <span className="text-xs text-muted-foreground hidden sm:inline">{AREA_DESCRIPTIONS[score.area]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{score.label}</span>
                          <span className="font-semibold">{score.percentile}%</span>
                        </div>
                      </div>
                      <Progress value={score.percentile} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Career suggestions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Yrker som kan passe deg</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {topAreas.map(score => {
                    const AreaIcon = AREA_ICONS[score.area];
                    const careers = AREA_CAREERS[score.area];
                    return (
                      <div key={score.area}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-5 h-5 rounded bg-gradient-to-br ${AREA_COLORS[score.area]} flex items-center justify-center`}>
                            <AreaIcon className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span className="font-semibold text-sm">{AREA_LABELS[score.area]}</span>
                        </div>
                        <ul className="space-y-1">
                          {careers.map(career => (
                            <li key={career} className="text-sm text-muted-foreground flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                              {career}
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
                  Dette er en indikativ yrkesinteressetest. For profesjonell karriereveiledning, kontakt en rådgiver. Interesser kan forandre seg over tid.
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
  const currentItem = allRIASECItems[currentIndex];
  const progressPercent = (currentIndex / TOTAL_RIASEC_ITEMS) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6 max-w-2xl">
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur py-3 mb-6 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Påstand {currentIndex + 1} av {TOTAL_RIASEC_ITEMS}
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

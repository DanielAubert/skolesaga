'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import {
  Fingerprint, Clock, Loader2, Palette, ListChecks, Users,
  Heart, CloudLightning, RotateCcw, AlertTriangle,
  CheckCircle2, AlertCircle,
} from 'lucide-react';
import { allPersonalityItems, TOTAL_ITEMS } from '@/lib/data/personality-test/all-items';
import { calculatePersonalityResult, getEffectiveScore } from '@/lib/data/personality-test/scoring';
import type { PersonalityTrait, PersonalityAnswer, PersonalityResult } from '@/lib/types/personality-test';
import {
  TRAIT_LABELS, TRAIT_COLORS, TRAIT_DESCRIPTIONS,
  TRAIT_ORDER, FACET_LABELS, LIKERT_LABELS,
} from '@/lib/types/personality-test';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer,
} from 'recharts';

const TRAIT_ICONS: Record<PersonalityTrait, typeof Fingerprint> = {
  openness: Palette,
  conscientiousness: ListChecks,
  extraversion: Users,
  agreeableness: Heart,
  neuroticism: CloudLightning,
};

type Phase = 'testing' | 'calculating' | 'results';

export default function PersonlighetsTestPage() {
  const [phase, setPhase] = useState<Phase>('testing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<PersonalityAnswer[]>([]);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testStartTime] = useState<number>(Date.now());
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [result, setResult] = useState<PersonalityResult | null>(null);

  // Timer
  useEffect(() => {
    if (phase !== 'testing') return;
    const timer = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - testStartTime) / 60000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, testStartTime]);

  const handleAnswer = useCallback((score: number) => {
    if (selectedScore !== null) return;

    const item = allPersonalityItems[currentIndex];
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const effectiveScore = getEffectiveScore(score, item.reversed);

    setSelectedScore(score);

    const newAnswer: PersonalityAnswer = {
      itemId: item.id,
      trait: item.trait,
      facet: item.facet,
      rawScore: score,
      effectiveScore,
      timeSpent,
    };

    const newAnswers = [...answers, newAnswer];

    setTimeout(() => {
      setAnswers(newAnswers);

      if (currentIndex + 1 >= TOTAL_ITEMS) {
        // Test complete
        setPhase('calculating');
        const finalResult = calculatePersonalityResult(newAnswers);
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
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-teal-600" />
            <h1 className="text-2xl font-bold">Beregner din personlighetsprofil...</h1>
            <p className="text-muted-foreground">Analyserer dine svar på tvers av 5 trekk og 15 fasetter</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results phase
  if (phase === 'results' && result) {
    const radarData = TRAIT_ORDER.map(trait => ({
      trait: TRAIT_LABELS[trait],
      percentile: result.traitScores[trait].percentile,
      fullMark: 100,
    }));

    const sortedTraits = TRAIT_ORDER
      .map(t => result.traitScores[t])
      .sort((a, b) => b.percentile - a.percentile);

    const strengths = sortedTraits.slice(0, 2);
    const developmentAreas = sortedTraits.slice(-2).reverse();

    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Din personlighetsprofil</h1>
              <p className="text-muted-foreground">Basert på Big Five-modellen (OCEAN)</p>
            </div>

            {/* Radar Chart */}
            <Card className="mb-8">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">Personlighetsprofil</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis
                        dataKey="trait"
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
                        stroke="#0d9488"
                        fill="#0d9488"
                        fillOpacity={0.25}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Trait breakdown */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Fingerprint className="h-5 w-5" />
                  Trekk-nedbrytning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {TRAIT_ORDER.map(trait => {
                  const score = result.traitScores[trait];
                  const TraitIcon = TRAIT_ICONS[trait];
                  return (
                    <div key={trait} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded bg-gradient-to-br ${TRAIT_COLORS[trait]} flex items-center justify-center`}>
                            <TraitIcon className="h-3.5 w-3.5 text-white" />
                          </div>
                          <div>
                            <span className="font-semibold text-sm">{TRAIT_LABELS[trait]}</span>
                            <span className="text-xs text-muted-foreground ml-2">{TRAIT_DESCRIPTIONS[trait]}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{score.label}</span>
                          <span className="font-bold text-sm">{score.percentile}%</span>
                        </div>
                      </div>
                      <Progress value={score.percentile} className="h-2" aria-label="Persentil" />
                      {/* Facets */}
                      <div className="grid grid-cols-3 gap-2 pl-9">
                        {score.facetScores.map(fs => (
                          <div key={fs.facet} className="text-xs text-muted-foreground">
                            <span>{FACET_LABELS[fs.facet]}: </span>
                            <span className="font-medium text-foreground">{fs.mean.toFixed(1)}/5</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Strengths & development areas */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Dine styrker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {strengths.map(s => (
                      <li key={s.trait} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded bg-gradient-to-br ${TRAIT_COLORS[s.trait]} flex items-center justify-center`}>
                          {(() => { const I = TRAIT_ICONS[s.trait]; return <I className="h-2.5 w-2.5 text-white" />; })()}
                        </div>
                        <span className="font-medium">{TRAIT_LABELS[s.trait]}</span>
                        <span className="text-muted-foreground">({s.percentile}. persentil)</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    Utviklingsområder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {developmentAreas.map(s => (
                      <li key={s.trait} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded bg-gradient-to-br ${TRAIT_COLORS[s.trait]} flex items-center justify-center`}>
                          {(() => { const I = TRAIT_ICONS[s.trait]; return <I className="h-2.5 w-2.5 text-white" />; })()}
                        </div>
                        <span className="font-medium">{TRAIT_LABELS[s.trait]}</span>
                        <span className="text-muted-foreground">({s.percentile}. persentil)</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Disclaimer */}
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 mb-8">
              <CardContent className="p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Dette er ikke en klinisk personlighetsvurdering. Resultatet gir en indikasjon basert på Big Five-modellen, men kan ikke erstatte en profesjonell psykologisk evaluering.
                </p>
              </CardContent>
            </Card>

            {/* Restart */}
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
  const currentItem = allPersonalityItems[currentIndex];
  const progressPercent = (currentIndex / TOTAL_ITEMS) * 100;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container py-6 max-w-2xl">
          {/* Testfasen har ingen synlig tittel — <h1> for skjermlesere */}
          <h1 className="sr-only">Personlighetstest</h1>
          {/* Header with progress */}
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur py-3 mb-6 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Påstand {currentIndex + 1} av {TOTAL_ITEMS}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{elapsedMinutes} min</span>
              </div>
            </div>
            <Progress value={progressPercent} className="h-1.5" aria-label="Framdrift i testen" />
          </div>

          {/* Statement */}
          <Card className={`transition-all duration-300 ${selectedScore !== null ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
            <CardContent className="p-8">
              <p className="text-xl font-medium text-center leading-relaxed mb-10">
                &ldquo;{currentItem.text}&rdquo;
              </p>

              {/* Likert scale */}
              <div className="flex justify-center items-end gap-3 sm:gap-4">
                {LIKERT_LABELS.map((label, index) => {
                  const score = index + 1;
                  const isSelected = selectedScore === score;
                  // Size increases from disagree to agree
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
                          isSelected
                            ? selectedColors[index]
                            : colors[index]
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

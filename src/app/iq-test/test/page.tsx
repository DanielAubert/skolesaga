'use client';

import { useState, useEffect, useCallback } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Brain, Clock, Loader2, Hash, MessageSquare, GitBranch,
  Eye, Boxes, MemoryStick, CheckCircle2, AlertCircle,
  RotateCcw, AlertTriangle,
} from 'lucide-react';
import { allQuestions } from '@/lib/data/iq-test/all-questions';
import { initCAT, selectNextQuestion, updateTheta, shouldStop, calculateResult } from '@/lib/data/iq-test/cat-algorithm';
import type { CATState, IQResult, IQQuestion, CognitiveDomain } from '@/lib/types/iq-test';
import { DOMAIN_LABELS, DOMAIN_COLORS } from '@/lib/types/iq-test';

const DOMAIN_ICONS: Record<CognitiveDomain, typeof Brain> = {
  tallresonnering: Hash,
  verbal: MessageSquare,
  logisk: GitBranch,
  monstergjenkjenning: Eye,
  romlig: Boxes,
  arbeidsminne: MemoryStick,
};

type Phase = 'testing' | 'calculating' | 'results';

export default function IQTestPage() {
  const [phase, setPhase] = useState<Phase>('testing');
  const [catState, setCatState] = useState<CATState>(() => initCAT(allQuestions));
  const [currentQuestion, setCurrentQuestion] = useState<IQQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testStartTime] = useState<number>(Date.now());
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [result, setResult] = useState<IQResult | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Pick first question
  useEffect(() => {
    const first = selectNextQuestion(catState, allQuestions);
    setCurrentQuestion(first);
    setQuestionStartTime(Date.now());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer
  useEffect(() => {
    if (phase !== 'testing') return;
    const timer = setInterval(() => {
      setElapsedMinutes(Math.floor((Date.now() - testStartTime) / 60000));
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, testStartTime]);

  const handleAnswer = useCallback((optionIndex: number) => {
    if (!currentQuestion || isTransitioning) return;

    setSelectedOption(optionIndex);
    setIsTransitioning(true);

    const correct = optionIndex === currentQuestion.correctIndex;
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);

    // Update CAT state
    const newState = updateTheta(catState, currentQuestion, correct, timeSpent);
    // Fix selectedIndex in the last answer
    const lastAnswer = newState.answeredQuestions[newState.answeredQuestions.length - 1];
    lastAnswer.selectedIndex = optionIndex;

    setTimeout(() => {
      setCatState(newState);

      if (shouldStop(newState)) {
        // Test complete
        setPhase('calculating');
        const finalResult = calculateResult(newState);
        setResult(finalResult);

        setPhase('results');
      } else {
        // Next question
        const next = selectNextQuestion(newState, allQuestions);
        setCurrentQuestion(next);
        setQuestionStartTime(Date.now());
        setSelectedOption(null);
        setIsTransitioning(false);
      }
    }, 800);
  }, [currentQuestion, catState, questionStartTime, isTransitioning]);

  const handleRestart = () => {
    const newState = initCAT(allQuestions);
    setCatState(newState);
    setCurrentQuestion(selectNextQuestion(newState, allQuestions));
    setQuestionStartTime(Date.now());
    setSelectedOption(null);
    setPhase('testing');
    setResult(null);
    setIsTransitioning(false);
  };

  const getIQColor = (iq: number): string => {
    if (iq >= 130) return 'text-emerald-500';
    if (iq >= 115) return 'text-green-500';
    if (iq >= 85) return 'text-blue-500';
    if (iq >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  const getIQRingColor = (iq: number): string => {
    if (iq >= 130) return 'border-emerald-500';
    if (iq >= 115) return 'border-green-500';
    if (iq >= 85) return 'border-blue-500';
    if (iq >= 70) return 'border-amber-500';
    return 'border-red-500';
  };

  const getIQLabel = (iq: number): string => {
    if (iq >= 145) return 'Eksepsjonelt';
    if (iq >= 130) return 'Svært høy';
    if (iq >= 115) return 'Over gjennomsnitt';
    if (iq >= 85) return 'Gjennomsnittlig';
    if (iq >= 70) return 'Under gjennomsnitt';
    return 'Lav';
  };

  // Calculating phase
  if (phase === 'calculating') {
    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-violet-600" />
            <h2 className="text-2xl font-bold">Beregner resultat...</h2>
            <p className="text-muted-foreground">Analyserer dine svar med adaptiv algoritme</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Results phase
  if (phase === 'results' && result) {
    const sortedDomains = (Object.entries(result.domainScores) as [CognitiveDomain, typeof result.domainScores[CognitiveDomain]][])
      .sort((a, b) => b[1].percentile - a[1].percentile);

    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <div className="container py-8 max-w-4xl">
            {/* IQ Score */}
            <Card className="mb-8">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">Ditt resultat</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className={`w-32 h-32 rounded-full border-4 ${getIQRingColor(result.estimatedIQ)} flex items-center justify-center`}>
                    <div className="text-center">
                      <span className={`text-4xl font-bold ${getIQColor(result.estimatedIQ)}`}>
                        {result.estimatedIQ}
                      </span>
                      <p className="text-xs text-muted-foreground">IQ</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Badge variant="secondary" className="text-sm">
                    {getIQLabel(result.estimatedIQ)}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground">
                  95% konfidensintervall: {result.confidenceInterval.low}–{result.confidenceInterval.high}
                </p>

                <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                  <span>{result.totalQuestions} spørsmål besvart</span>
                  <span>{result.correctCount} riktige ({Math.round(result.correctCount / result.totalQuestions * 100)}%)</span>
                </div>

                {/* IQ skala */}
                <div className="max-w-lg mx-auto mt-4">
                  <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-red-400 via-amber-400 via-blue-400 via-green-400 to-emerald-400">
                    <div
                      className="absolute top-0 w-1 h-full bg-black dark:bg-white rounded-full"
                      style={{ left: `${Math.max(0, Math.min(100, ((result.estimatedIQ - 55) / 90) * 100))}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>70</span>
                    <span>85</span>
                    <span>100</span>
                    <span>115</span>
                    <span>130</span>
                    <span>145</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Domene-nedbrytning */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Kognitive domener
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sortedDomains.map(([domain, score]) => {
                  const DomainIcon = DOMAIN_ICONS[domain];
                  return (
                    <div key={domain} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded bg-gradient-to-br ${DOMAIN_COLORS[domain]} flex items-center justify-center`}>
                            <DomainIcon className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium">{DOMAIN_LABELS[domain]}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <span>{score.correct}/{score.total} riktige</span>
                          <span className="font-semibold text-foreground">{score.percentile}%</span>
                        </div>
                      </div>
                      <Progress value={score.percentile} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Styrker og svakheter */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Sterkeste domener
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {sortedDomains.slice(0, 2).map(([domain, score]) => (
                      <li key={domain} className="flex items-center gap-2">
                        <span className="font-medium">{DOMAIN_LABELS[domain]}</span>
                        <span className="text-muted-foreground">({score.percentile}. persentil)</span>
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
                  <ul className="space-y-1 text-sm">
                    {sortedDomains.slice(-2).map(([domain, score]) => (
                      <li key={domain} className="flex items-center gap-2">
                        <span className="font-medium">{DOMAIN_LABELS[domain]}</span>
                        <span className="text-muted-foreground">({score.percentile}. persentil)</span>
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
                  Dette er ikke en klinisk IQ-test. Resultatet gir en indikasjon, men kan ikke erstatte en profesjonell psykologisk vurdering.
                </p>
              </CardContent>
            </Card>

            {/* Prøv igjen */}
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
  if (!currentQuestion) {
    return (
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  const answeredCount = catState.answeredQuestions.length;
  const progressPercent = Math.min(95, (answeredCount / 35) * 100);
  const DomainIcon = DOMAIN_ICONS[currentQuestion.domain];

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6 max-w-2xl">
          {/* Header med progress */}
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur py-3 mb-6 border-b">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={`bg-gradient-to-r ${DOMAIN_COLORS[currentQuestion.domain]} text-white border-0`}>
                  <DomainIcon className="h-3 w-3 mr-1" />
                  {DOMAIN_LABELS[currentQuestion.domain]}
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Spørsmål {answeredCount + 1}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{elapsedMinutes} min</span>
                </div>
              </div>
            </div>
            <Progress value={progressPercent} className="h-1.5" />
          </div>

          {/* Spørsmål */}
          <Card className={`transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}`}>
            <CardHeader>
              <CardTitle className="text-lg leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = selectedOption !== null && index === currentQuestion.correctIndex;
                const isWrong = isSelected && index !== currentQuestion.correctIndex;

                let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
                if (selectedOption === null) {
                  buttonClass += 'border-border hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/20 cursor-pointer';
                } else if (isCorrect) {
                  buttonClass += 'border-green-500 bg-green-50 dark:bg-green-950/20';
                } else if (isWrong) {
                  buttonClass += 'border-red-500 bg-red-50 dark:bg-red-950/20';
                } else {
                  buttonClass += 'border-border opacity-50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                    className={buttonClass}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                        isCorrect
                          ? 'bg-green-500 text-white'
                          : isWrong
                            ? 'bg-red-500 text-white'
                            : isSelected
                              ? 'bg-violet-500 text-white'
                              : 'bg-muted text-muted-foreground'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-sm leading-relaxed pt-0.5">{option}</span>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {/* Forklaring etter svar */}
          {selectedOption !== null && (
            <Card className="mt-4 border-violet-200 bg-violet-50 dark:bg-violet-950/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  {selectedOption === currentQuestion.correctIndex ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm font-semibold mb-1">
                      {selectedOption === currentQuestion.correctIndex ? 'Riktig!' : 'Feil'}
                    </p>
                    <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

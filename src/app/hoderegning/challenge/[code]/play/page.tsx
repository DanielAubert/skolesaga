"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import React, { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import { Timer, Users, Loader2, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  useChallengeSubscription,
  usePlayerId,
  updatePlayerProgress,
  finishChallenge,
  findChallengeByCode,
} from "@/lib/challenge/hooks";
import type { ChallengeProblem } from "@/lib/supabase/types";
import { incrementProblems } from "@/lib/hoderegning/stats";

interface PageProps {
  params: Promise<{ code: string }>;
}

export default function PlayPage({ params }: PageProps) {
  const { code } = use(params);
  const router = useRouter();
  const playerId = usePlayerId();
  const inputRef = useRef<HTMLInputElement>(null);

  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const { challenge, players, isLoading } = useChallengeSubscription(challengeId);

  const problems: ChallengeProblem[] = challenge?.problems || [];
  const currentProblem = problems[currentProblemIndex];

  // Find challenge on mount
  useEffect(() => {
    const findAndSetChallenge = async () => {
      const found = await findChallengeByCode(code);
      if (found) {
        setChallengeId(found.id);
        // Verify game has started
        if (found.status !== 'playing' && found.status !== 'finished') {
          router.push(`/hoderegning/challenge/${code}`);
        }
      } else {
        router.push('/hoderegning/challenge');
      }
      setInitialLoading(false);
    };
    findAndSetChallenge();
  }, [code, router]);

  // Start timer when component mounts
  useEffect(() => {
    if (!initialLoading && challenge?.status === 'playing') {
      setStartTime(Date.now());
    }
  }, [initialLoading, challenge?.status]);

  // Update elapsed time
  useEffect(() => {
    if (!startTime || isFinished) return;

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 100);

    return () => clearInterval(interval);
  }, [startTime, isFinished]);

  // Auto-focus input
  useEffect(() => {
    if (inputRef.current && !isFinished) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [currentProblemIndex, isFinished]);

  // Check if all players finished
  useEffect(() => {
    if (isFinished && players.every((p) => p.finished_at)) {
      // All done, redirect to results
      setTimeout(() => {
        router.push(`/hoderegning/challenge/${code}/results`);
      }, 1000);
    }
  }, [isFinished, players, code, router]);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const tenths = Math.floor((ms % 1000) / 100);
    return `${seconds}.${tenths}s`;
  };

  const advanceToNext = async (nextIndex: number) => {
    if (!playerId || !challengeId) return;

    // Update progress in database
    await updatePlayerProgress(playerId, challengeId, nextIndex);

    if (nextIndex >= problems.length) {
      // Finished!
      const finalTime = Date.now() - (startTime || Date.now());
      await finishChallenge(playerId, challengeId, finalTime);
      setIsFinished(true);
    } else {
      setCurrentProblemIndex(nextIndex);
      setUserAnswer('');
    }
  };

  const handleAnswerChange = async (value: string) => {
    if (!currentProblem || !playerId || !challengeId) return;

    // Allow negative sign, numbers, and comma for decimals
    const cleaned = value.replace(/[^0-9,\-]/g, '');
    setUserAnswer(cleaned);
    setWrongAnswer(false);

    // Auto-check if the answer is correct
    if (cleaned) {
      const parsedAnswer = parseFloat(cleaned.replace(',', '.'));
      const correctAnswer = currentProblem.answer;
      const isCorrect = !isNaN(parsedAnswer) && Math.abs(parsedAnswer - correctAnswer) < 0.01;

      if (isCorrect) {
        incrementProblems(1);
        await advanceToNext(currentProblemIndex + 1);
      }
    }
  };

  const handleGiveUp = async () => {
    if (!playerId || !challengeId) return;
    // End the game - record current progress as final and mark as finished with no time (lost)
    setGaveUp(true);
    setIsFinished(true);
    // Finish with null time to indicate gave up, and record how far they got
    await finishChallenge(playerId, challengeId, null, currentProblemIndex);
  };

  const toggleNegative = async () => {
    if (!currentProblem || !playerId || !challengeId) return;

    const newValue = userAnswer.startsWith('-')
      ? userAnswer.slice(1)
      : '-' + userAnswer;

    setUserAnswer(newValue);
    inputRef.current?.focus();

    // Check if the toggled answer is now correct
    if (newValue && newValue !== '-') {
      const parsedAnswer = parseFloat(newValue.replace(',', '.'));
      const correctAnswer = currentProblem.answer;
      const isCorrect = !isNaN(parsedAnswer) && Math.abs(parsedAnswer - correctAnswer) < 0.01;

      if (isCorrect) {
        incrementProblems(1);
        await advanceToNext(currentProblemIndex + 1);
      }
    }
  };

  const addComma = () => {
    // Only add comma if there isn't one already
    if (!userAnswer.includes(',')) {
      setUserAnswer(userAnswer + ',');
    }
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow Enter to submit (in case auto-advance didn't trigger)
    if (e.key === 'Enter' && userAnswer) {
      const parsedAnswer = parseFloat(userAnswer.replace(',', '.'));
      const correctAnswer = currentProblem?.answer ?? 0;
      const isCorrect = !isNaN(parsedAnswer) && Math.abs(parsedAnswer - correctAnswer) < 0.01;

      if (!isCorrect) {
        setWrongAnswer(true);
        setTimeout(() => {
          setUserAnswer('');
          setWrongAnswer(false);
          inputRef.current?.focus();
        }, 300);
      }
    }
  };

  // Get other players' progress
  const otherPlayers = players.filter((p) => p.player_id !== playerId);

  if (initialLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            {gaveUp ? (
              <>
                <div className="text-6xl mb-4">🏳️</div>
                <h2 className="text-2xl font-bold mb-2">Ga opp</h2>
                <p className="text-muted-foreground mb-4">
                  Du kom til {currentProblemIndex}/{problems.length} oppgaver
                </p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-2">Ferdig!</h2>
                <p className="text-3xl font-mono text-primary mb-4">
                  {formatTime(elapsedTime)}
                </p>
              </>
            )}
            <p className="text-muted-foreground">
              Venter på at alle skal bli ferdige...
            </p>
            <div className="mt-4 space-y-2">
              {otherPlayers.map((p) => (
                <div key={p.id} className="flex items-center justify-between text-sm">
                  <span>{p.player_name}</span>
                  <span>
                    {p.finished_at ? (
                      <span className="text-green-500">✓ Ferdig</span>
                    ) : (
                      <span className="text-muted-foreground">
                        {p.current_problem}/15
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header bar */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-3 max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-muted-foreground" />
              <span className="font-mono text-xl font-bold">
                {formatTime(elapsedTime)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                {currentProblemIndex + 1}/{problems.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main game area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <Card className="w-full max-w-lg">
          <CardContent className="pt-8 pb-8">
            {/* Problem display with inline input */}
            <div className="text-center mb-8">
              <div className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-6">
                {currentProblem?.expression.includes('__') ? (
                  // Expression with placeholder (e.g., "3 + __ = 10")
                  currentProblem.expression.split('__').map((part, index, array) => (
                    <React.Fragment key={index}>
                      <span>{part}</span>
                      {index < array.length - 1 && (
                        <Input
                          ref={inputRef}
                          type="text"
                          inputMode="numeric"
                          value={userAnswer}
                          onChange={(e) => handleAnswerChange(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className={`w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-3xl md:text-5xl lg:text-6xl font-mono border-2 md:border-4 ${
                            wrongAnswer ? 'border-red-500 bg-red-50 dark:bg-red-950' : 'border-primary/50 focus:border-primary'
                          }`}
                          autoComplete="off"
                          autoFocus
                        />
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  // Expression ending with = (e.g., "3 + 5 = ")
                  <>
                    <span>{currentProblem?.expression || ''}</span>
                    <Input
                      ref={inputRef}
                      type="text"
                      inputMode="numeric"
                      value={userAnswer}
                      onChange={(e) => handleAnswerChange(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className={`w-20 h-14 md:w-28 md:h-16 lg:w-32 lg:h-20 text-center text-3xl md:text-5xl lg:text-6xl font-mono border-2 md:border-4 ${
                        wrongAnswer ? 'border-red-500 bg-red-50 dark:bg-red-950' : 'border-primary/50 focus:border-primary'
                      }`}
                      autoComplete="off"
                      autoFocus
                    />
                  </>
                )}
              </div>

              {/* Helper buttons for mobile - +/- and comma */}
              <div className="flex justify-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={toggleNegative}
                  className="h-12 px-4 text-xl font-mono"
                >
                  ±
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={addComma}
                  className="h-12 px-4 text-xl font-mono"
                >
                  ,
                </Button>
              </div>
            </div>

            {/* Progress bar */}
            <Progress
              value={(currentProblemIndex / problems.length) * 100}
              className="h-2"
            />

            {/* Give up button */}
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleGiveUp}
                className="text-muted-foreground hover:text-destructive"
              >
                <Flag className="w-4 h-4 mr-1" />
                Gi opp
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Other players' progress */}
        {otherPlayers.length > 0 && (
          <div className="mt-6 w-full max-w-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Users className="w-4 h-4" />
              <span>Andre spillere</span>
            </div>
            <div className="space-y-2">
              {otherPlayers.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <span className="text-sm w-24 truncate">{p.player_name}</span>
                  <Progress
                    value={(p.current_problem / problems.length) * 100}
                    className="flex-1 h-2"
                  />
                  <span className="text-xs text-muted-foreground w-12 text-right">
                    {p.finished_at ? '✓' : `${p.current_problem}/15`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

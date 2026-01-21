"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useState, useEffect, useRef, useCallback } from "react";
import { Brain, Trophy, Timer, Target, RefreshCw, Play, Pause, Clock, Award } from "lucide-react";

interface Problem {
  expression: string;
  answer: number;
  blanks: number[];
  userInput: string[];
  difficulty: Difficulty;
  operation: string;
}

type Difficulty = 'lett' | 'medium' | 'vanskelig' | 'blandet';
type GameMode = 'fritt' | '30sek' | '1min' | '3min';

interface GameRecord {
  score: number;
  problems: number;
  date: string;
  difficulty: Difficulty;
  operations: string[];
}

interface OperationSettings {
  addisjon: boolean;
  subtraksjon: boolean;
  multiplikasjon: boolean;
  divisjon: boolean;
}

interface DifficultySettings {
  lett: boolean;
  medium: boolean;
  vanskelig: boolean;
}

interface ProblemCounter {
  [key: string]: number; // Format: "addisjon-lett", "subtraksjon-medium", etc.
}

export default function MatematikkspillPage() {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0); // 0 = no limit
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulties, setDifficulties] = useState<DifficultySettings>({
    lett: true,
    medium: false,
    vanskelig: false
  });
  const [gameMode, setGameMode] = useState<GameMode>('fritt');
  const [operations, setOperations] = useState<OperationSettings>({
    addisjon: true,
    subtraksjon: true,
    multiplikasjon: true,
    divisjon: true
  });
  const [problemsSolved, setProblemsSolved] = useState(0);
  const [records, setRecords] = useState<Record<string, GameRecord[]>>({});
  const [showRecords, setShowRecords] = useState(false);
  const [problemCounter, setProblemCounter] = useState<ProblemCounter>({});
  const [dailyStreak, setDailyStreak] = useState(0);
  const [lifetimeStreak, setLifetimeStreak] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const difficultySettings = {
    lett: { min: 1, max: 10 },
    medium: { min: 5, max: 25 },
    vanskelig: { min: 10, max: 50 }
  };

  const gameModeSettings = {
    'fritt': { time: 0, label: 'Fritt spill' },
    '30sek': { time: 30, label: '30 sekunder' },
    '1min': { time: 60, label: '1 minutt' },
    '3min': { time: 180, label: '3 minutter' }
  };

  // Load records and counter from localStorage on component mount
  useEffect(() => {
    const savedRecords = localStorage.getItem('hoderegning-records');
    if (savedRecords) {
      try {
        setRecords(JSON.parse(savedRecords));
        console.log('Loaded records:', JSON.parse(savedRecords));
      } catch (e) {
        console.error('Error loading records:', e);
        localStorage.removeItem('hoderegning-records');
      }
    }

    const savedCounter = localStorage.getItem('hoderegning-counter');
    if (savedCounter) {
      try {
        setProblemCounter(JSON.parse(savedCounter));
        console.log('Loaded problem counter:', JSON.parse(savedCounter));
      } catch (e) {
        console.error('Error loading counter:', e);
        localStorage.removeItem('hoderegning-counter');
      }
    }

    const savedDailyStreak = localStorage.getItem('hoderegning-daily-streak');
    if (savedDailyStreak) {
      try {
        const streakData = JSON.parse(savedDailyStreak);
        const today = new Date().toDateString();

        // Check if the streak is from today
        if (streakData.date === today) {
          setDailyStreak(streakData.streak);
        } else {
          // Reset streak if it's a new day
          setDailyStreak(0);
          localStorage.setItem('hoderegning-daily-streak', JSON.stringify({
            streak: 0,
            date: today
          }));
        }
      } catch (e) {
        console.error('Error loading daily streak:', e);
        localStorage.removeItem('hoderegning-daily-streak');
      }
    }

    const savedLifetimeStreak = localStorage.getItem('hoderegning-lifetime-streak');
    if (savedLifetimeStreak) {
      try {
        setLifetimeStreak(parseInt(savedLifetimeStreak));
      } catch (e) {
        console.error('Error loading lifetime streak:', e);
        localStorage.removeItem('hoderegning-lifetime-streak');
      }
    }
  }, []);

  // Clear all records and counter (for testing)
  const clearAllRecords = () => {
    localStorage.removeItem('hoderegning-records');
    localStorage.removeItem('hoderegning-counter');
    localStorage.removeItem('hoderegning-daily-streak');
    localStorage.removeItem('hoderegning-lifetime-streak');
    setRecords({});
    setProblemCounter({});
    setDailyStreak(0);
    setLifetimeStreak(0);
    console.log('All records and counter cleared');
  };


  // Update problem counter
  const updateProblemCounter = (operation: string, difficulty: Difficulty) => {
    const key = `${operation}-${difficulty}`;
    const newCounter = { ...problemCounter };
    newCounter[key] = (newCounter[key] || 0) + 1;
    setProblemCounter(newCounter);
    localStorage.setItem('hoderegning-counter', JSON.stringify(newCounter));
  };

  // Save records to localStorage
  const saveRecord = useCallback((newRecord: GameRecord) => {
    const gameKey = `${gameMode}-${newRecord.difficulty}`;
    const updatedRecords = { ...records };

    if (!updatedRecords[gameKey]) {
      updatedRecords[gameKey] = [];
    }

    updatedRecords[gameKey].push(newRecord);
    updatedRecords[gameKey].sort((a, b) => b.score - a.score);
    updatedRecords[gameKey] = updatedRecords[gameKey].slice(0, 10); // Keep top 10

    setRecords(updatedRecords);
    localStorage.setItem('hoderegning-records', JSON.stringify(updatedRecords));

    // Debug logging
    console.log('Saved record:', newRecord);
    console.log('Game key:', gameKey);
    console.log('All records:', updatedRecords);
  }, [gameMode, records]);

  const endGame = useCallback((currentScore?: number, currentProblems?: number) => {
    const finalScore = currentScore ?? score;
    const finalProblems = currentProblems ?? problemsSolved;

    console.log('endGame called with finalScore:', finalScore, 'finalProblems:', finalProblems);
    setIsPlaying(false);

    // Save record if score > 0
    if (finalScore > 0) {
      const selectedOps = Object.entries(operations)
        .filter(([, selected]) => selected)
        .map(([op]) => op);

      // For records, use the first selected difficulty or create a mix label
      const selectedDifficultyList = Object.entries(difficulties)
        .filter(([, selected]) => selected)
        .map(([diff]) => diff);
      const recordDifficulty = selectedDifficultyList.length === 1
        ? selectedDifficultyList[0] as Difficulty
        : 'blandet' as Difficulty; // Mix of difficulties

      const newRecord: GameRecord = {
        score: finalScore,
        problems: finalProblems,
        date: new Date().toISOString(),
        difficulty: recordDifficulty,
        operations: selectedOps
      };

      console.log('Saving record:', newRecord);
      saveRecord(newRecord);
    } else {
      console.log('Score is 0, not saving record');
    }
  }, [score, problemsSolved, difficulties, operations, saveRecord]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeElapsed(prev => {
          const newTime = prev + 1;
          // Check if time limit reached
          if (timeLimit > 0 && newTime >= timeLimit) {
            endGame();
            return newTime;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLimit, endGame]);

  const generateProblem = (): Problem => {
    // Get selected difficulties (excluding 'blandet' which is only for records)
    const selectedDifficulties = Object.entries(difficulties)
      .filter(([, selected]) => selected)
      .map(([diff]) => diff as Difficulty)
      .filter((diff): diff is 'lett' | 'medium' | 'vanskelig' => diff !== 'blandet');

    if (selectedDifficulties.length === 0) {
      // Default to easy if nothing selected
      selectedDifficulties.push('lett');
    }

    // Choose random difficulty from selected ones
    const currentDifficulty = selectedDifficulties[Math.floor(Math.random() * selectedDifficulties.length)];
    const settings = difficultySettings[currentDifficulty];

    let expression: string;
    let answer: number;

    // Get selected operations from checkboxes
    const selectedOperations = Object.entries(operations)
      .filter(([, selected]) => selected)
      .map(([op]) => op);

    if (selectedOperations.length === 0) {
      // Default to addition if nothing selected
      selectedOperations.push('addisjon');
    }

    const selectedOp = selectedOperations[Math.floor(Math.random() * selectedOperations.length)];

    // Current operation stored in the problem object

    switch (selectedOp) {
      case 'addisjon': {
        const a = Math.floor(Math.random() * settings.max) + settings.min;
        const b = Math.floor(Math.random() * settings.max) + settings.min;
        answer = a + b;

        // Randomly choose which number to hide
        if (Math.random() < 0.33) {
          expression = `__ + ${b} = ${answer}`;
          return { expression, answer, blanks: [a], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else if (Math.random() < 0.5) {
          expression = `${a} + __ = ${answer}`;
          return { expression, answer, blanks: [b], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else {
          expression = `${a} + ${b} = __`;
          return { expression, answer, blanks: [answer], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        }
      }

      case 'subtraksjon': {
        const a = Math.floor(Math.random() * settings.max) + settings.min;
        const b = Math.floor(Math.random() * a) + 1; // Ensure positive result
        answer = a - b;

        if (Math.random() < 0.33) {
          expression = `__ - ${b} = ${answer}`;
          return { expression, answer, blanks: [a], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else if (Math.random() < 0.5) {
          expression = `${a} - __ = ${answer}`;
          return { expression, answer, blanks: [b], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else {
          expression = `${a} - ${b} = __`;
          return { expression, answer, blanks: [answer], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        }
      }

      case 'multiplikasjon': {
        const maxFactor = currentDifficulty === 'lett' ? 5 : currentDifficulty === 'medium' ? 8 : 12;
        const a = Math.floor(Math.random() * maxFactor) + 1;
        const b = Math.floor(Math.random() * maxFactor) + 1;
        answer = a * b;

        if (Math.random() < 0.33) {
          expression = `__ × ${b} = ${answer}`;
          return { expression, answer, blanks: [a], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else if (Math.random() < 0.5) {
          expression = `${a} × __ = ${answer}`;
          return { expression, answer, blanks: [b], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else {
          expression = `${a} × ${b} = __`;
          return { expression, answer, blanks: [answer], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        }
      }

      case 'divisjon': {
        const maxDivisor = currentDifficulty === 'lett' ? 5 : currentDifficulty === 'medium' ? 8 : 10;
        const maxQuotient = currentDifficulty === 'lett' ? 8 : currentDifficulty === 'medium' ? 10 : 12;
        const b = Math.floor(Math.random() * maxDivisor) + 2; // divisor 2-maxDivisor+1
        const quotient = Math.floor(Math.random() * maxQuotient) + 1; // quotient 1-maxQuotient
        const a = b * quotient; // ensure clean division
        answer = quotient;

        if (Math.random() < 0.33) {
          expression = `__ ÷ ${b} = ${answer}`;
          return { expression, answer, blanks: [a], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else if (Math.random() < 0.5) {
          expression = `${a} ÷ __ = ${answer}`;
          return { expression, answer, blanks: [b], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        } else {
          expression = `${a} ÷ ${b} = __`;
          return { expression, answer, blanks: [answer], userInput: [''], difficulty: currentDifficulty, operation: selectedOp };
        }
      }

      default:
        return generateProblem(); // fallback
    }
  };

  const startGame = () => {
    // Save previous game record if there was a score
    if (score > 0 && isPlaying) {
      console.log('Starting new game, saving previous record first');
      endGame();
    }

    console.log('Starting new game with mode:', gameMode, 'difficulties:', difficulties);
    setIsPlaying(true);
    setScore(0);
    setStreak(0);
    setTimeElapsed(0);
    setProblemsSolved(0);
    setTimeLimit(gameModeSettings[gameMode].time);
    setCurrentProblem(generateProblem());
  };

  const pauseGame = () => {
    console.log('pauseGame called with score:', score);
    // Save record before pausing
    if (score > 0) {
      console.log('Pausing game, saving record first');
      endGame();
    } else {
      console.log('Score is 0, just pausing');
      setIsPlaying(false);
    }
  };

  const checkAnswer = (index: number) => {
    if (!currentProblem || !isPlaying) return;

    const userAnswer = parseInt(currentProblem.userInput[index]);
    const correctAnswer = currentProblem.blanks[index];

    if (userAnswer === correctAnswer) {
      // Correct answer - immediately go to next problem
      const problemDifficulty = currentProblem.difficulty;
      const basePoints = problemDifficulty === 'lett' ? 10 : problemDifficulty === 'medium' ? 15 : 20;
      const newScore = score + basePoints + streak;
      const newStreak = streak + 1;
      console.log('Correct answer! Old score:', score, 'New score:', newScore, 'Points for', problemDifficulty + ':', basePoints);
      setScore(newScore);
      setStreak(newStreak);
      setProblemsSolved(prev => prev + 1);

      // Update daily streak if this is a new record
      if (newStreak > dailyStreak) {
        setDailyStreak(newStreak);
        const today = new Date().toDateString();
        localStorage.setItem('hoderegning-daily-streak', JSON.stringify({
          streak: newStreak,
          date: today
        }));
      }

      // Update lifetime streak if this is a new record
      if (newStreak > lifetimeStreak) {
        setLifetimeStreak(newStreak);
        localStorage.setItem('hoderegning-lifetime-streak', newStreak.toString());
      }

      // Update problem counter
      updateProblemCounter(currentProblem.operation, currentProblem.difficulty);

      // Generate new problem
      setTimeout(() => {
        setCurrentProblem(generateProblem());
      }, 100);
    } else {
      // Wrong answer - reset streak
      console.log('Wrong answer, resetting streak');
      setStreak(0);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    if (!currentProblem || !isPlaying) return;

    // Only allow numbers and negative sign
    if (value !== '' && !/^-?\d+$/.test(value)) return;

    const newUserInput = [...currentProblem.userInput];
    newUserInput[index] = value;
    setCurrentProblem({ ...currentProblem, userInput: newUserInput });

    // Check answer immediately when user types a complete number
    if (value !== '' && !value.endsWith('-')) {
      setTimeout(() => checkAnswer(index), 50); // Small delay to ensure state is updated
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter') {
      checkAnswer(index);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatTimeRemaining = () => {
    if (timeLimit === 0) return formatTime(timeElapsed);
    const remaining = Math.max(0, timeLimit - timeElapsed);
    return formatTime(remaining);
  };

  const getTimeProgress = () => {
    if (timeLimit === 0) return 0;
    return (timeElapsed / timeLimit) * 100;
  };

  // Format problem counter for display
  const formatProblemCounter = () => {
    const operationLabels = {
      addisjon: 'Pluss',
      subtraksjon: 'Minus',
      multiplikasjon: 'Gange',
      divisjon: 'Deling'
    };

    const difficultyLabels = {
      lett: 'Lett',
      medium: 'Medium',
      vanskelig: 'Vanskelig'
    };

    return Object.entries(problemCounter)
      .filter(([, count]) => count > 0)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, count]) => {
        const [operation, difficulty] = key.split('-') as [keyof typeof operationLabels, keyof typeof difficultyLabels];
        return `${operationLabels[operation]} (${difficultyLabels[difficulty]}): ${count}`;
      });
  };

  const renderProblemWithBlanks = () => {
    if (!currentProblem) return null;

    const parts = currentProblem.expression.split('__');
    const result = [];

    for (let i = 0; i < parts.length; i++) {
      result.push(<span key={`text-${i}`}>{parts[i]}</span>);

      if (i < parts.length - 1) {
        result.push(
          <Input
            key={`input-${i}`}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            value={currentProblem.userInput[i] || ''}
            onChange={(e) => handleInputChange(i, e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            className="inline-block w-16 h-12 text-center text-2xl font-bold mx-2 border-2 border-blue-300 focus:border-blue-500"
            autoFocus={i === 0}
            disabled={!isPlaying}
          />
        );
      }
    }

    return result;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/hoderegning">Hoderegning</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Matematikkspill</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Matematikkspill
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Tren rask hoderegning! Fyll inn det manglende tallet og gå automatisk til neste oppgave.
            </p>
          </div>

          <div className="grid lg:grid-cols-[300px,1fr] gap-8">
            {/* Left Sidebar - Game Settings */}
            <div className="space-y-4">
              {!isPlaying && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Spillinnstillinger</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Spillmodus:</label>
                      <div className="flex gap-2 flex-wrap">
                        {(Object.keys(gameModeSettings) as GameMode[]).map((mode) => (
                          <Button
                            key={mode}
                            variant={gameMode === mode ? 'default' : 'outline'}
                            onClick={() => setGameMode(mode)}
                            className="flex items-center gap-2 text-xs px-2 py-1"
                          >
                            <Clock className="h-3 w-3" />
                            {gameModeSettings[mode].label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Vanskelighetsgrad:</label>
                      <div className="space-y-2">
                        {(Object.keys(difficulties) as (keyof DifficultySettings)[]).map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox
                              id={level}
                              checked={difficulties[level]}
                              onCheckedChange={(checked) =>
                                setDifficulties(prev => ({ ...prev, [level]: !!checked }))
                              }
                            />
                            <label htmlFor={level} className="text-sm font-medium capitalize">
                              {level} ({level === 'lett' ? '10p' : level === 'medium' ? '15p' : '20p'})
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Regneoperasjoner:</label>
                      <div className="space-y-2">
                        {(Object.keys(operations) as (keyof OperationSettings)[]).map((op) => (
                          <div key={op} className="flex items-center space-x-2">
                            <Checkbox
                              id={op}
                              checked={operations[op]}
                              onCheckedChange={(checked) =>
                                setOperations(prev => ({ ...prev, [op]: !!checked }))
                              }
                            />
                            <label htmlFor={op} className="text-sm font-medium capitalize">
                              {op === 'multiplikasjon' ? 'Multiplikasjon (×)' :
                               op === 'divisjon' ? 'Divisjon (÷)' :
                               op === 'addisjon' ? 'Addisjon (+)' :
                               'Subtraksjon (-)'}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Start Game Button */}
                    <div className="pt-4 border-t">
                      <Button
                        onClick={startGame}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        size="lg"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Start spill
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Records Card - Always visible in sidebar */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <CardTitle className="text-lg">Rekorder</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowRecords(!showRecords)}
                      className="w-full text-sm"
                    >
                      {showRecords ? 'Skjul' : 'Vis rekorder'}
                    </Button>
                    {showRecords && Object.entries(records).length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllRecords}
                        className="w-full text-xs text-red-600 hover:text-red-700"
                      >
                        Tøm alle rekorder
                      </Button>
                    )}
                  </div>

                  {showRecords && (
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {Object.entries(records).length === 0 ? (
                        <p className="text-xs text-muted-foreground text-center">
                          Ingen rekorder ennå.
                        </p>
                      ) : (
                        Object.entries(records).map(([key, recordList]) => {
                          const [mode, diff] = key.split('-');
                          return (
                            <div key={key} className="space-y-1">
                              <h4 className="text-xs font-semibold">
                                {gameModeSettings[mode as GameMode]?.label} - {diff}
                              </h4>
                              <div className="space-y-1">
                                {recordList.slice(0, 3).map((record, index) => (
                                  <div key={index} className="flex justify-between text-xs">
                                    <span>#{index + 1}</span>
                                    <span>{record.score}p</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Game Area */}
            <div className="space-y-6">
              {/* Game Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-600" />
                <div>
                  <p className="text-2xl font-bold">{score}</p>
                  <p className="text-sm text-muted-foreground">Poeng</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-green-600" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">{streak}</p>
                    <div className="text-right">
                      <p className="text-lg text-green-600 font-semibold">🏆 {dailyStreak}</p>
                      <p className="text-sm text-purple-600 font-semibold">👑 {lifetimeStreak}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">På rad</p>
                    <div className="text-right">
                      <p className="text-xs text-green-600">Dagsrekord</p>
                      <p className="text-xs text-purple-600">Livstidsrekord</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Timer className={`h-6 w-6 ${timeLimit > 0 && timeElapsed >= timeLimit * 0.8 ? 'text-red-600' : 'text-blue-600'}`} />
                <div className="flex-1">
                  <p className="text-2xl font-bold">{formatTimeRemaining()}</p>
                  <p className="text-sm text-muted-foreground">
                    {timeLimit === 0 ? 'Tid' : 'Tid igjen'}
                  </p>
                  {timeLimit > 0 && (
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${getTimeProgress()}%` }}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Brain className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">{problemsSolved}</p>
                  <p className="text-sm text-muted-foreground">Løst</p>
                </div>
              </CardContent>
            </Card>
              </div>

              {/* Game Area */}
              <div>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                {!isPlaying && !currentProblem ? (
                  <div className="text-center space-y-4">
                    <div className="text-4xl">🧮</div>
                    <p className="text-muted-foreground">
                      Bruk spillinnstillingene til venstre og trykk &quot;Start spill&quot; for å begynne.
                    </p>
                  </div>
                ) : currentProblem ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl md:text-6xl font-mono font-bold flex items-center justify-center flex-wrap gap-2 mb-6">
                        {renderProblemWithBlanks()}
                      </div>

                      <div className="flex justify-center gap-4 mt-6">
                        {isPlaying ? (
                          <Button variant="outline" onClick={pauseGame}>
                            <Pause className="mr-2 h-4 w-4" />
                            Pause
                          </Button>
                        ) : (
                          <Button onClick={() => setIsPlaying(true)}>
                            <Play className="mr-2 h-4 w-4" />
                            Fortsett
                          </Button>
                        )}

                        <Button variant="outline" onClick={startGame}>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Nytt spill
                        </Button>

                        {gameMode === 'fritt' && (
                          <Button variant="destructive" onClick={() => endGame()}>
                            Avslutt spill
                          </Button>
                        )}
                      </div>
                    </div>

                    {streak >= 5 && (
                      <div className="text-center">
                        <Badge variant="secondary" className="text-lg px-4 py-2 bg-yellow-100 text-yellow-800">
                          🔥 {streak} på rad! Flott jobba!
                        </Badge>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="text-6xl mb-4">⏸️</div>
                    <h2 className="text-2xl font-bold">Spillet er pauset</h2>
                    <Button onClick={() => setIsPlaying(true)}>
                      <Play className="mr-2 h-4 w-4" />
                      Fortsett spill
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

              {/* Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hvordan spille:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Spillmodus:</strong> Velg mellom fritt spill eller tidsbaserte utfordringer (30 sek, 1 min, 3 min)</li>
                    <li>• <strong>Regneoperasjoner:</strong> Kryss av for hvilke operasjoner du vil øve på</li>
                    <li>• <strong>Automatisk progresjon:</strong> Skriv riktig tall og gå umiddelbart til neste oppgave</li>
                    <li>• <strong>Poeng:</strong> Få poeng for riktige svar og bonuspoeng for streak</li>
                    <li>• <strong>Rekorder:</strong> Dine beste resultater lagres og vises i top 10-lister</li>
                    <li>• <strong>Tips:</strong> Jo raskere du svarer, desto høyere poengsum!</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Problem Counter */}
              {formatProblemCounter().length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      Kontinuerlig Teller
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {formatProblemCounter().map((item, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded p-2">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-muted-foreground">
                      <strong>Total oppgaver løst:</strong> {Object.values(problemCounter).reduce((sum, count) => sum + count, 0)}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

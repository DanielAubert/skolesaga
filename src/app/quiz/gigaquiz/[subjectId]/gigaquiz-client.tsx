'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { LatexRenderer } from '@/components/textbook/latex-renderer';
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Trophy,
  BookOpen,
  CheckCircle2,
  XCircle,
  Play,
  RotateCcw,
  Clock,
  Layers,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import type { GigaquizConfig } from '@/lib/data/gigaquiz-data-historie';

// ─── Helpers ─────────────────────────────────────────

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ─── Types ───────────────────────────────────────────

interface QuizProblem {
  chapterIndex: number;
  questionIndex: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  userAnswer?: number;
  isCorrect?: boolean;
  wasUnsure?: boolean;
}

interface ChapterResult {
  chapterNumber: number;
  title: string;
  level: 'VG2' | 'VG3';
  courseId: string;
  textbookChapterId: string;
  correct: number;
  total: number;
  unsure: number;
}

type QuizMode = 'full' | 'vg2' | 'vg3';

interface SavedProgress {
  configId: string;
  problems: QuizProblem[];
  currentFlatIndex: number;
  chapterResults: ChapterResult[];
  timestamp: number;
  quizMode?: QuizMode;
}

type View = 'start' | 'quiz' | 'chapter-transition' | 'results';

const STORAGE_KEY = 'gigaquiz-progress';

// ─── Component ───────────────────────────────────────

export function GigaquizClient({ config }: { config: GigaquizConfig }) {
  const [view, setView] = useState<View>('start');
  const [problems, setProblems] = useState<QuizProblem[]>([]);
  const [currentFlatIndex, setCurrentFlatIndex] = useState(0);
  const [chapterResults, setChapterResults] = useState<ChapterResult[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [savedQuizMode, setSavedQuizMode] = useState<QuizMode>('full');
  const [transitionResult, setTransitionResult] = useState<ChapterResult | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>('full');

  const totalQuestions = config.chapters.reduce((sum, ch) => sum + ch.questions.length, 0);
  const estimatedMinutes = Math.ceil(totalQuestions * 0.6);

  const vg2Chapters = config.chapters.filter(ch => ch.level === 'VG2');
  const vg3Chapters = config.chapters.filter(ch => ch.level === 'VG3');
  const vg2Questions = vg2Chapters.reduce((sum, ch) => sum + ch.questions.length, 0);
  const vg3Questions = vg3Chapters.reduce((sum, ch) => sum + ch.questions.length, 0);

  const getFilteredChapters = useCallback((mode: QuizMode) => {
    if (mode === 'vg2') return config.chapters.filter(ch => ch.level === 'VG2');
    if (mode === 'vg3') return config.chapters.filter(ch => ch.level === 'VG3');
    return config.chapters;
  }, [config.chapters]);

  // ─── Persistence ─────────────────────────────────

  const saveProgress = useCallback((p: QuizProblem[], idx: number, cr: ChapterResult[], mode: QuizMode) => {
    try {
      const data: SavedProgress = {
        configId: config.id,
        problems: p,
        currentFlatIndex: idx,
        chapterResults: cr,
        timestamp: Date.now(),
        quizMode: mode,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // localStorage may be unavailable
    }
  }, [config.id]);

  const loadProgress = useCallback((): SavedProgress | null => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data: SavedProgress = JSON.parse(raw);
      if (data.configId !== config.id) return null;
      // expire after 7 days
      if (Date.now() - data.timestamp > 7 * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return data;
    } catch {
      return null;
    }
  }, [config.id]);

  const clearProgress = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  // ─── Initialize ──────────────────────────────────

  useEffect(() => {
    const saved = loadProgress();
    if (saved && saved.currentFlatIndex < saved.problems.length) {
      setHasSavedProgress(true);
      setSavedQuizMode(saved.quizMode ?? 'full');
    }
  }, [loadProgress]);

  const createProblems = useCallback((mode: QuizMode): QuizProblem[] => {
    const filteredChapters = getFilteredChapters(mode);
    const allProblems: QuizProblem[] = [];
    filteredChapters.forEach((chapter, chapterIdx) => {
      chapter.questions.forEach((q, qIdx) => {
        const shuffledOptions = shuffleArray(q.options);
        const correctIndex = shuffledOptions.indexOf(q.options[0]);
        allProblems.push({
          chapterIndex: chapterIdx,
          questionIndex: qIdx,
          question: q.question,
          options: shuffledOptions,
          correctOptionIndex: correctIndex,
          explanation: q.explanation,
        });
      });
    });
    return allProblems;
  }, [getFilteredChapters]);

  const startFresh = (mode: QuizMode) => {
    setQuizMode(mode);
    const newProblems = createProblems(mode);
    setProblems(newProblems);
    setCurrentFlatIndex(0);
    setChapterResults([]);
    setShowExplanation(false);
    setView('quiz');
    clearProgress();
  };

  const resumeProgress = () => {
    const saved = loadProgress();
    if (saved) {
      setQuizMode(saved.quizMode ?? 'full');
      setProblems(saved.problems);
      setCurrentFlatIndex(saved.currentFlatIndex);
      setChapterResults(saved.chapterResults);
      setShowExplanation(false);
      setView('quiz');
    }
  };

  // ─── Current state derived ───────────────────────

  const activeChapters = getFilteredChapters(quizMode);
  const activeTotalQuestions = activeChapters.reduce((sum, ch) => sum + ch.questions.length, 0);

  const currentProblem = problems[currentFlatIndex];
  const currentChapter = currentProblem ? activeChapters[currentProblem.chapterIndex] : null;
  const answeredCount = problems.filter(p => p.userAnswer !== undefined).length;
  const correctCount = problems.filter(p => p.isCorrect).length;

  // Current chapter's question index (1-indexed, e.g. "Spørsmål 2 av 3")
  const currentChapterQuestionNum = currentProblem
    ? currentProblem.questionIndex + 1
    : 0;
  const currentChapterTotalQuestions = currentChapter
    ? currentChapter.questions.length
    : 0;

  // ─── Handlers ────────────────────────────────────

  const handleOptionClick = (optionIndex: number) => {
    if (!currentProblem || currentProblem.userAnswer !== undefined) return;

    const isCorrect = optionIndex === currentProblem.correctOptionIndex;

    setProblems(prev => {
      const updated = [...prev];
      updated[currentFlatIndex] = {
        ...updated[currentFlatIndex],
        userAnswer: optionIndex,
        isCorrect,
      };
      // Save after answer
      saveProgress(updated, currentFlatIndex, chapterResults, quizMode);
      return updated;
    });

    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);

    // Check if we just finished a chapter
    const nextIndex = currentFlatIndex + 1;
    const isLastInChapter = currentProblem && (
      nextIndex >= problems.length ||
      problems[nextIndex]?.chapterIndex !== currentProblem.chapterIndex
    );

    if (isLastInChapter && currentProblem) {
      // Calculate chapter result
      const chapterProblems = problems.filter(p => p.chapterIndex === currentProblem.chapterIndex);
      const chapterCorrect = chapterProblems.filter(p => p.isCorrect).length;
      const chapterUnsure = chapterProblems.filter(p => p.isCorrect && p.wasUnsure).length;
      const chapter = activeChapters[currentProblem.chapterIndex];
      const result: ChapterResult = {
        chapterNumber: chapter.chapterNumber,
        title: chapter.title,
        level: chapter.level,
        courseId: chapter.courseId,
        textbookChapterId: chapter.textbookChapterId,
        correct: chapterCorrect,
        total: chapterProblems.length,
        unsure: chapterUnsure,
      };
      const newResults = [...chapterResults, result];
      setChapterResults(newResults);
      setTransitionResult(result);

      if (nextIndex >= problems.length) {
        // All done!
        clearProgress();
        setView('results');
      } else {
        setView('chapter-transition');
        saveProgress(problems, nextIndex, newResults, quizMode);
      }
    } else {
      setCurrentFlatIndex(nextIndex);
      saveProgress(problems, nextIndex, chapterResults, quizMode);
    }
  };

  const handleUnsure = () => {
    // Flag current problem as unsure, then proceed like handleNext
    setProblems(prev => {
      const updated = [...prev];
      updated[currentFlatIndex] = { ...updated[currentFlatIndex], wasUnsure: true };
      return updated;
    });
    // Use a microtask-safe approach: we need the updated problems for chapter calc
    // Since setState is batched, we do the chapter logic with the flag applied manually
    const updatedProblems = [...problems];
    updatedProblems[currentFlatIndex] = { ...updatedProblems[currentFlatIndex], wasUnsure: true };

    setShowExplanation(false);
    const nextIndex = currentFlatIndex + 1;
    const isLastInChapter = currentProblem && (
      nextIndex >= updatedProblems.length ||
      updatedProblems[nextIndex]?.chapterIndex !== currentProblem.chapterIndex
    );

    if (isLastInChapter && currentProblem) {
      const chapterProblems = updatedProblems.filter(p => p.chapterIndex === currentProblem.chapterIndex);
      const chapterCorrect = chapterProblems.filter(p => p.isCorrect).length;
      const chapterUnsure = chapterProblems.filter(p => p.isCorrect && p.wasUnsure).length;
      const chapter = activeChapters[currentProblem.chapterIndex];
      const result: ChapterResult = {
        chapterNumber: chapter.chapterNumber,
        title: chapter.title,
        level: chapter.level,
        courseId: chapter.courseId,
        textbookChapterId: chapter.textbookChapterId,
        correct: chapterCorrect,
        total: chapterProblems.length,
        unsure: chapterUnsure,
      };
      const newResults = [...chapterResults, result];
      setChapterResults(newResults);
      setTransitionResult(result);

      if (nextIndex >= updatedProblems.length) {
        clearProgress();
        setView('results');
      } else {
        setView('chapter-transition');
        saveProgress(updatedProblems, nextIndex, newResults, quizMode);
      }
    } else {
      setCurrentFlatIndex(nextIndex);
      saveProgress(updatedProblems, nextIndex, chapterResults, quizMode);
    }
  };

  const handleContinueAfterTransition = () => {
    setCurrentFlatIndex(prev => prev + 1);
    setTransitionResult(null);
    setView('quiz');
  };

  const handleRestart = () => {
    clearProgress();
    startFresh(quizMode);
  };

  // ─── Progress bar helpers ────────────────────────

  const getSegmentedProgress = () => {
    return activeChapters.map((chapter, idx) => {
      const chapterProblems = problems.filter(p => p.chapterIndex === idx);
      const answered = chapterProblems.filter(p => p.userAnswer !== undefined).length;
      const correct = chapterProblems.filter(p => p.isCorrect).length;
      const total = chapterProblems.length;
      const isCurrent = currentProblem?.chapterIndex === idx;
      return { answered, correct, total, isCurrent, chapterNumber: chapter.chapterNumber };
    });
  };

  // ─── VIEWS ───────────────────────────────────────

  // ═══ START ═══
  if (view === 'start') {
    const modeLabel: Record<QuizMode, string> = { full: 'Komplett quiz', vg2: 'VG2-seksjonen', vg3: 'VG3-seksjonen' };

    return (
      <div className="min-h-screen bg-background">
        <TextbookHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/quiz/gigaquiz"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Tilbake til gigaquiz-oversikt
            </Link>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-center text-white">
                <Trophy className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h1 className="text-3xl font-bold mb-2">{config.title}</h1>
                <p className="text-white/80">{config.subtitle}</p>
              </div>

              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{config.description}</p>

                {/* Saved progress banner */}
                {hasSavedProgress && (
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                      Du har en pågående {modeLabel[savedQuizMode].toLowerCase()}
                    </p>
                    <Button onClick={resumeProgress} variant="outline" size="sm" className="w-full">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Fortsett der du slapp
                    </Button>
                  </div>
                )}

                {/* Full quiz card */}
                <div className="border rounded-lg p-5 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Komplett quiz</h3>
                    <p className="text-sm text-muted-foreground">
                      {config.chapters.length} kapitler &middot; {totalQuestions} spørsmål &middot; ~{estimatedMinutes} min
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <Layers className="w-4 h-4 mx-auto mb-0.5 text-muted-foreground" />
                      <div className="text-xl font-bold">{config.chapters.length}</div>
                      <div className="text-[10px] text-muted-foreground">kapitler</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <HelpCircle className="w-4 h-4 mx-auto mb-0.5 text-muted-foreground" />
                      <div className="text-xl font-bold">{totalQuestions}</div>
                      <div className="text-[10px] text-muted-foreground">spørsmål</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <Clock className="w-4 h-4 mx-auto mb-0.5 text-muted-foreground" />
                      <div className="text-xl font-bold">~{estimatedMinutes}</div>
                      <div className="text-[10px] text-muted-foreground">minutter</div>
                    </div>
                  </div>
                  <Button onClick={() => startFresh('full')} size="lg" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Start komplett quiz
                  </Button>
                </div>

                {/* Section cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border rounded-lg p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold">VG2-seksjon</h3>
                      <p className="text-xs text-muted-foreground">
                        {vg2Chapters.length} kap &middot; {vg2Questions} spm &middot; ~{Math.ceil(vg2Questions * 0.6)} min
                      </p>
                    </div>
                    <Button onClick={() => startFresh('vg2')} variant="outline" size="sm" className="w-full">
                      <Play className="w-3.5 h-3.5 mr-1.5" />
                      Start VG2
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold">VG3-seksjon</h3>
                      <p className="text-xs text-muted-foreground">
                        {vg3Chapters.length} kap &middot; {vg3Questions} spm &middot; ~{Math.ceil(vg3Questions * 0.6)} min
                      </p>
                    </div>
                    <Button onClick={() => startFresh('vg3')} variant="outline" size="sm" className="w-full">
                      <Play className="w-3.5 h-3.5 mr-1.5" />
                      Start VG3
                    </Button>
                  </div>
                </div>

                {/* Chapter list */}
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">Kapitler som testes</h3>
                  <div className="space-y-1">
                    {config.chapters.map((ch) => (
                      <div key={ch.chapterNumber} className="flex items-center gap-2 text-sm py-1">
                        <Badge variant="outline" className="text-xs shrink-0">
                          {ch.level}
                        </Badge>
                        <span className="text-muted-foreground shrink-0">Kap {ch.chapterNumber}:</span>
                        <span>{ch.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ═══ CHAPTER TRANSITION ═══
  if (view === 'chapter-transition' && transitionResult) {
    const { correct, total, title, chapterNumber, level, unsure } = transitionResult;
    const color = correct >= 2 ? 'text-green-600 dark:text-green-400' :
                  correct === 1 ? 'text-yellow-600 dark:text-yellow-400' :
                  'text-red-600 dark:text-red-400';
    const bgColor = correct >= 2 ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800' :
                    correct === 1 ? 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800' :
                    'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800';

    const nextChapterIdx = (problems[currentFlatIndex + 1]?.chapterIndex ?? -1);
    const nextChapter = nextChapterIdx >= 0 ? activeChapters[nextChapterIdx] : null;

    return (
      <div className="min-h-screen bg-background">
        <TextbookHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className={`border ${bgColor}`}>
              <CardContent className="p-6 text-center space-y-4">
                <Badge variant="outline">{level} – Kapittel {chapterNumber}</Badge>
                <h1 className="text-xl font-bold">{title}</h1>
                <div className={`text-4xl font-bold ${color}`}>
                  {correct}/{total} riktig
                </div>
                {unsure > 0 && (
                  <p className="text-amber-600 dark:text-amber-400 text-sm">
                    {unsure} usikre
                  </p>
                )}
                <p className="text-muted-foreground text-sm">
                  {correct >= 2 && unsure === 0 ? 'Godt jobbet! Du har god kontroll på dette kapittelet.' :
                   correct >= 2 && unsure > 0 ? 'Du svarte riktig, men var usikker. Vurder å repetere.' :
                   correct === 1 ? 'Du bør repetere dette kapittelet litt mer.' :
                   'Dette kapittelet trenger du å jobbe mer med.'}
                </p>

                {nextChapter && (
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-3">
                      Neste: Kapittel {nextChapter.chapterNumber} – {nextChapter.title}
                    </p>
                    <Button onClick={handleContinueAfterTransition} className="w-full">
                      Fortsett
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ═══ RESULTS ═══
  if (view === 'results') {
    const allResults = chapterResults.length > 0 ? chapterResults : (() => {
      return activeChapters.map((ch, idx) => {
        const chProblems = problems.filter(p => p.chapterIndex === idx);
        return {
          chapterNumber: ch.chapterNumber,
          title: ch.title,
          level: ch.level as 'VG2' | 'VG3',
          courseId: ch.courseId,
          textbookChapterId: ch.textbookChapterId,
          correct: chProblems.filter(p => p.isCorrect).length,
          total: chProblems.length,
          unsure: chProblems.filter(p => p.isCorrect && p.wasUnsure).length,
        };
      });
    })();

    const totalCorrect = allResults.reduce((sum, r) => sum + r.correct, 0);
    const totalQ = allResults.reduce((sum, r) => sum + r.total, 0);
    const percentage = Math.round((totalCorrect / totalQ) * 100);

    const strong = allResults.filter(r => r.correct >= 2 && r.unsure === 0);
    const unsureResults = allResults.filter(r => r.correct >= 2 && r.unsure > 0);
    const medium = allResults.filter(r => r.correct === 1);
    const weak = allResults.filter(r => r.correct === 0);

    const otherSection: QuizMode | null = quizMode === 'vg2' ? 'vg3' : quizMode === 'vg3' ? 'vg2' : null;
    const sectionLabel: Record<QuizMode, string> = { full: 'Komplett quiz', vg2: 'VG2-seksjonen', vg3: 'VG3-seksjonen' };
    const completedLabel = quizMode === 'full' ? 'Gigaquiz fullført!' :
      `${sectionLabel[quizMode]} fullført!`;

    return (
      <div className="min-h-screen bg-background">
        <TextbookHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/quiz/gigaquiz"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Tilbake til gigaquiz-oversikt
            </Link>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-center text-white">
                <Trophy className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h1 className="text-3xl font-bold mb-2">{completedLabel}</h1>
                <p className="text-white/80">{config.title}</p>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Total score */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground mb-2">
                    {totalCorrect}/{totalQ}
                  </div>
                  <div className="text-lg text-muted-foreground">{percentage} % riktig</div>
                </div>

                {/* Summary badges */}
                <div className={`grid gap-3 text-center ${unsureResults.length > 0 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                  <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{strong.length}</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Sterke</div>
                  </div>
                  {unsureResults.length > 0 && (
                    <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{unsureResults.length}</div>
                      <div className="text-xs text-amber-700 dark:text-amber-300">Usikre</div>
                    </div>
                  )}
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{medium.length}</div>
                    <div className="text-xs text-yellow-700 dark:text-yellow-300">Middels</div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-3 border border-red-200 dark:border-red-800">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">{weak.length}</div>
                    <div className="text-xs text-red-700 dark:text-red-300">Svake</div>
                  </div>
                </div>

                {/* Per-chapter breakdown */}
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-3">Resultat per kapittel</h3>
                  <div className="space-y-2">
                    {allResults.map((r) => {
                      const isUnsure = r.correct >= 2 && r.unsure > 0;
                      const colorClass = r.correct >= 2 && r.unsure === 0
                        ? 'border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20'
                        : isUnsure
                          ? 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20'
                          : r.correct === 1
                            ? 'border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20'
                            : 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20';
                      const scoreColor = r.correct >= 2 && r.unsure === 0
                        ? 'text-green-600 dark:text-green-400'
                        : isUnsure
                          ? 'text-amber-600 dark:text-amber-400'
                          : r.correct === 1
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-red-600 dark:text-red-400';

                      return (
                        <Link
                          key={r.chapterNumber}
                          href={`/laerebok/${r.courseId}/${r.textbookChapterId}`}
                          className={`flex items-center gap-3 p-3 rounded-lg border ${colorClass} hover:opacity-80 transition-opacity`}
                        >
                          <Badge variant="outline" className="text-xs shrink-0">{r.level}</Badge>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium">
                              Kap {r.chapterNumber}: {r.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className={`font-bold text-sm ${scoreColor}`}>
                              {r.correct}/{r.total}
                            </span>
                            {r.unsure > 0 && (
                              <span className="text-xs text-amber-600 dark:text-amber-400">
                                ({r.unsure} usikre)
                              </span>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Recommendations */}
                {weak.length > 0 && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-medium text-red-700 dark:text-red-300 mb-2">
                      Anbefalt repetisjon
                    </h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-3">
                      Du fikk 0 av 3 riktige på disse kapitlene. Klikk for å lese kapittelet:
                    </p>
                    <div className="space-y-1">
                      {weak.map((r) => (
                        <Link
                          key={r.chapterNumber}
                          href={`/laerebok/${r.courseId}/${r.textbookChapterId}`}
                          className="flex items-center gap-2 text-sm text-red-700 dark:text-red-300 hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Kapittel {r.chapterNumber}: {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {unsureResults.length > 0 && (
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <h4 className="font-medium text-amber-700 dark:text-amber-300 mb-2">
                      Usikre kapitler
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400 mb-3">
                      Du svarte riktig, men var usikker. Vurder å repetere:
                    </p>
                    <div className="space-y-1">
                      {unsureResults.map((r) => (
                        <Link
                          key={r.chapterNumber}
                          href={`/laerebok/${r.courseId}/${r.textbookChapterId}`}
                          className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300 hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Kapittel {r.chapterNumber}: {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {medium.length > 0 && (
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                      Kan forbedres
                    </h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-3">
                      Du fikk 1 av 3 riktige på disse kapitlene:
                    </p>
                    <div className="space-y-1">
                      {medium.map((r) => (
                        <Link
                          key={r.chapterNumber}
                          href={`/laerebok/${r.courseId}/${r.textbookChapterId}`}
                          className="flex items-center gap-2 text-sm text-yellow-700 dark:text-yellow-300 hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Kapittel {r.chapterNumber}: {r.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleRestart} className="flex-1">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Start på nytt
                  </Button>
                  <Link href="/quiz" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Tilbake til quizer
                    </Button>
                  </Link>
                </div>

                {/* Take other section */}
                {otherSection && (
                  <Button
                    onClick={() => startFresh(otherSection)}
                    variant="outline"
                    className="w-full"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ta {sectionLabel[otherSection].toLowerCase()}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ═══ QUIZ ═══
  const segments = getSegmentedProgress();

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Selve quizen har ingen synlig tittel — <h1> for skjermlesere */}
          <h1 className="sr-only">{config.title}</h1>
          {/* Back link */}
          <Link
            href="/quiz/gigaquiz"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Tilbake til gigaquiz-oversikt
          </Link>

          {/* Chapter header */}
          {currentChapter && (
            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                <Badge variant="outline" className="text-xs">{currentChapter.level}</Badge>
                <span>Kapittel {currentChapter.chapterNumber}: {currentChapter.title}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Spørsmål {currentChapterQuestionNum} av {currentChapterTotalQuestions} i dette kapittelet
              </div>
            </div>
          )}

          {/* Segmented progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">
                Totalt: {answeredCount} av {activeTotalQuestions} besvart
              </span>
              <span className="font-medium text-green-600 dark:text-green-400">
                {correctCount} riktige
              </span>
            </div>
            <div className="flex gap-0.5 h-2 rounded-full overflow-hidden bg-muted">
              {segments.map((seg, idx) => {
                const width = (seg.total / activeTotalQuestions) * 100;
                let bgClass = 'bg-muted-foreground/20';
                if (seg.answered === seg.total) {
                  // Fully answered
                  bgClass = seg.correct >= 2
                    ? 'bg-green-500'
                    : seg.correct === 1
                      ? 'bg-yellow-500'
                      : 'bg-red-500';
                } else if (seg.isCurrent) {
                  bgClass = 'bg-amber-400 animate-pulse';
                }
                return (
                  <div
                    key={idx}
                    className={`h-full ${bgClass} transition-colors`}
                    style={{ width: `${width}%` }}
                    title={`Kap ${seg.chapterNumber}: ${seg.answered}/${seg.total}`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>Kap {activeChapters[0]?.chapterNumber}</span>
              <span>Kap {activeChapters[activeChapters.length - 1]?.chapterNumber}</span>
            </div>
          </div>

          {/* Question card */}
          {currentProblem && (
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Question */}
                <div className="text-lg font-medium">
                  <LatexRenderer content={currentProblem.question} />
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {currentProblem.options.map((option, idx) => {
                    const isSelected = currentProblem.userAnswer === idx;
                    const isCorrect = idx === currentProblem.correctOptionIndex;
                    const hasAnswered = currentProblem.userAnswer !== undefined;

                    let optionClass = 'border-border hover:border-primary hover:bg-muted/50';
                    if (hasAnswered) {
                      if (isCorrect) {
                        optionClass = 'border-green-500 bg-green-50 dark:bg-green-950/30';
                      } else if (isSelected && !isCorrect) {
                        optionClass = 'border-red-500 bg-red-50 dark:bg-red-950/30';
                      } else {
                        optionClass = 'border-border opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        disabled={hasAnswered}
                        aria-pressed={isSelected}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${optionClass} ${!hasAnswered ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${hasAnswered && isCorrect ? 'bg-green-500 text-white' : hasAnswered && isSelected ? 'bg-red-500 text-white' : 'bg-muted'}`}>
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1 pt-0.5">
                            <LatexRenderer content={option} />
                          </span>
                          {hasAnswered && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          )}
                          {hasAnswered && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && currentProblem.explanation && (
                  <div className={`p-4 rounded-lg ${currentProblem.isCorrect ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800' : 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800'}`}>
                    <h4 className={`font-medium mb-2 ${currentProblem.isCorrect ? 'text-green-700 dark:text-green-400' : 'text-amber-700 dark:text-amber-400'}`}>
                      {currentProblem.isCorrect ? 'Riktig!' : 'Forklaring'}
                    </h4>
                    <p className="text-sm text-foreground">
                      <LatexRenderer content={currentProblem.explanation} />
                    </p>
                  </div>
                )}

                {/* Next / Unsure buttons */}
                {currentProblem.userAnswer !== undefined && (
                  <div className="space-y-2">
                    <Button onClick={handleNext} className="w-full">
                      {currentFlatIndex < problems.length - 1 ? (
                        <>
                          Neste spørsmål
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Se resultater
                          <Trophy className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                    {currentProblem.isCorrect && (
                      <Button onClick={handleUnsure} variant="ghost" className="w-full text-muted-foreground">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Jeg var usikker på dette
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

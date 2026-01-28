"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  RefreshCw,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  LogIn,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { LatexRenderer } from "@/components/textbook/latex-renderer";
import type { FlashcardDefinition } from "@/lib/data/flashcard-definitions";
import {
  buildSessionDeck,
  computeNextReview,
} from "@/lib/flashcard/spaced-repetition";
import type {
  FlashcardProgress,
  FlashcardRating,
} from "@/lib/flashcard/spaced-repetition";

interface FlashcardClientProps {
  courseId: string;
  courseTitle: string;
  definitions: FlashcardDefinition[];
  sectionNames: Record<string, string>;
  initialSection?: string;
}

export function FlashcardClient({
  courseId,
  courseTitle,
  definitions,
  sectionNames,
  initialSection,
}: FlashcardClientProps) {
  // Tilstand
  const [sectionFilter, setSectionFilter] = useState<string>(initialSection ?? "all");
  const [sessionCards, setSessionCards] = useState<FlashcardDefinition[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progressMap, setProgressMap] = useState<Map<string, FlashcardProgress>>(
    new Map()
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [sessionReviewed, setSessionReviewed] = useState(0);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [swipeRating, setSwipeRating] = useState<FlashcardRating | null>(null);

  // Swipe-refs
  const pointerStartX = useRef(0);
  const isDragging = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Filtrer definisjoner basert på seksjon
  const filteredDefinitions =
    sectionFilter === "all"
      ? definitions
      : definitions.filter((d) => d.sectionNumber === sectionFilter);

  // Hent unike seksjoner fra definisjonene
  const availableSections = Array.from(
    new Set(definitions.map((d) => d.sectionNumber))
  ).sort((a, b) => Number(a) - Number(b));

  // Hent fremgang fra API ved oppstart
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch(
          `/api/textbook/flashcards?courseId=${courseId}`
        );
        if (res.ok) {
          const data = await res.json();
          const map = new Map<string, FlashcardProgress>();
          for (const p of data.progress) {
            map.set(p.definition_id, {
              definitionId: p.definition_id,
              intervalDays: p.interval_days,
              easeFactor: p.ease_factor,
              repetitions: p.repetitions,
              nextReviewAt: p.next_review_at,
              lastReviewedAt: p.last_reviewed_at,
              totalReviews: p.total_reviews,
              easyCount: p.easy_count,
              okCount: p.ok_count,
              hardCount: p.hard_count,
            });
          }
          setProgressMap(map);
          setIsLoggedIn(true);
        } else if (res.status === 401) {
          setIsLoggedIn(false);
        }
      } catch {
        setIsLoggedIn(false);
      }
      setIsInitialized(true);
    };

    fetchProgress();
  }, [courseId]);

  // Bygg sessionsdeck når filter eller fremgang endres
  useEffect(() => {
    if (!isInitialized) return;
    const deck = buildSessionDeck(filteredDefinitions, progressMap, 20);
    setSessionCards(deck);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionReviewed(0);
  }, [sectionFilter, isInitialized]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentCard = sessionCards[currentIndex];

  // Flip kort
  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Naviger til forrige/neste kort
  const goToCard = useCallback(
    (direction: "prev" | "next") => {
      setIsFlipped(false);
      setSwipeOffset(0);
      setSwipeRating(null);
      if (direction === "prev" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (
        direction === "next" &&
        currentIndex < sessionCards.length - 1
      ) {
        setCurrentIndex((prev) => prev + 1);
      }
    },
    [currentIndex, sessionCards.length]
  );

  // Vurder kort
  const handleRate = useCallback(
    async (rating: FlashcardRating) => {
      if (!currentCard) return;

      setSessionReviewed((prev) => prev + 1);

      // Oppdater lokal fremgang
      const existing = progressMap.get(currentCard.id);
      const current = existing
        ? {
            intervalDays: existing.intervalDays,
            easeFactor: existing.easeFactor,
            repetitions: existing.repetitions,
          }
        : null;

      const result = computeNextReview(current, rating);
      const now = new Date().toISOString();

      const updatedProgress: FlashcardProgress = {
        definitionId: currentCard.id,
        intervalDays: result.intervalDays,
        easeFactor: result.easeFactor,
        repetitions: result.repetitions,
        nextReviewAt: result.nextReviewAt,
        lastReviewedAt: now,
        totalReviews: (existing?.totalReviews ?? 0) + 1,
        easyCount: (existing?.easyCount ?? 0) + (rating === "easy" ? 1 : 0),
        okCount: (existing?.okCount ?? 0) + (rating === "ok" ? 1 : 0),
        hardCount: (existing?.hardCount ?? 0) + (rating === "hard" ? 1 : 0),
      };

      setProgressMap((prev) => {
        const next = new Map(prev);
        next.set(currentCard.id, updatedProgress);
        return next;
      });

      // Lagre til API om innlogget
      if (isLoggedIn) {
        try {
          await fetch("/api/textbook/flashcards/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              courseId,
              definitionId: currentCard.id,
              chapterId: currentCard.chapterId,
              rating,
            }),
          });
        } catch (error) {
          console.error("Failed to save flashcard review:", error);
        }
      }

      // Gå til neste kort
      setIsFlipped(false);
      setSwipeOffset(0);
      setSwipeRating(null);

      if (currentIndex < sessionCards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Siste kort — bygg nytt deck
        const newDeck = buildSessionDeck(filteredDefinitions, progressMap, 20);
        if (newDeck.length > 0) {
          setSessionCards(newDeck);
          setCurrentIndex(0);
        }
      }
    },
    [
      currentCard,
      currentIndex,
      sessionCards.length,
      progressMap,
      isLoggedIn,
      courseId,
      filteredDefinitions,
    ]
  );

  // Start nytt deck
  const handleRestart = useCallback(() => {
    const deck = buildSessionDeck(filteredDefinitions, progressMap, 20);
    setSessionCards(deck);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionReviewed(0);
    setSwipeOffset(0);
    setSwipeRating(null);
  }, [filteredDefinitions, progressMap]);

  // Tastatur-navigasjon
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleFlip();
      } else if (e.key === "ArrowLeft") {
        if (isFlipped) {
          handleRate("hard");
        } else {
          goToCard("prev");
        }
      } else if (e.key === "ArrowRight") {
        if (isFlipped) {
          handleRate("easy");
        } else {
          goToCard("next");
        }
      } else if (e.key === "ArrowDown" && isFlipped) {
        handleRate("ok");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFlipped, handleFlip, handleRate, goToCard]);

  // Swipe-håndtering (kun når kortet er flippet)
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!isFlipped) return;
      pointerStartX.current = e.clientX;
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [isFlipped]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current || !isFlipped) return;
      const dx = e.clientX - pointerStartX.current;
      setSwipeOffset(dx);

      if (dx > 80) {
        setSwipeRating("easy");
      } else if (dx < -80) {
        setSwipeRating("hard");
      } else {
        setSwipeRating(null);
      }
    },
    [isFlipped]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (swipeRating) {
      handleRate(swipeRating);
    } else {
      setSwipeOffset(0);
      setSwipeRating(null);
    }
  }, [swipeRating, handleRate]);

  // Laster...
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Laster flashcards...
        </div>
      </div>
    );
  }

  // Ingen kort
  if (sessionCards.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNav />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-lg mx-auto text-center">
            <Layers className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Alle kort gjennomgått!</h2>
            <p className="text-muted-foreground mb-6">
              Du har gjennomgått alle tilgjengelige kort
              {sectionFilter !== "all" ? " i denne seksjonen" : ""}.
              Kom tilbake senere for å repetere.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleRestart} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Start på nytt
              </Button>
              <Link href={`/bok/${courseId}`}>
                <Button variant="outline" className="gap-2 w-full">
                  <ArrowLeft className="h-4 w-4" />
                  Tilbake til boken
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Beregn statistikk
  const reviewedInSession = Math.min(sessionReviewed, sessionCards.length);
  const progressPercent =
    sessionCards.length > 0
      ? Math.round((reviewedInSession / sessionCards.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNav />

      <main className="flex-1 container mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/bok">Bøker</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/bok/${courseId}`}>
                {courseTitle}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Flashcards</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Filtrer & info */}
        <div className="max-w-lg mx-auto mb-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <h1 className="text-lg font-bold">Flashcards</h1>
            <Select value={sectionFilter} onValueChange={setSectionFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Alle seksjoner" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  Alle seksjoner ({definitions.length})
                </SelectItem>
                {availableSections.map((sec) => {
                  const count = definitions.filter(
                    (d) => d.sectionNumber === sec
                  ).length;
                  const name = sectionNames[sec] || `Seksjon ${sec}`;
                  return (
                    <SelectItem key={sec} value={sec}>
                      {sec}: {name} ({count})
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Fremgangsindikator */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>
              Kort {currentIndex + 1} av {sessionCards.length}
            </span>
            <span>{reviewedInSession} gjennomgått</span>
          </div>
          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Innlogging-varsel */}
        {isLoggedIn === false && (
          <div className="max-w-lg mx-auto mb-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-sm text-amber-800 dark:text-amber-200 flex items-center gap-2">
            <LogIn className="h-4 w-4 shrink-0" />
            <span>
              <Link
                href="/logg-inn"
                className="font-medium underline underline-offset-2"
              >
                Logg inn
              </Link>{" "}
              for å lagre fremgangen din mellom økter.
            </span>
          </div>
        )}

        {/* Flashcard */}
        {currentCard && (
          <div className="max-w-sm sm:max-w-lg mx-auto">
            {/* 3D flip-container */}
            <div
              className="relative w-full h-[60vh] sm:h-[400px] cursor-pointer select-none"
              style={{ perspective: "1000px" }}
              onClick={() => {
                if (!isDragging.current) handleFlip();
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              ref={cardRef}
            >
              {/* Swipe-overlay */}
              {isFlipped && swipeOffset !== 0 && (
                <div
                  className={`absolute inset-0 z-20 rounded-xl pointer-events-none transition-opacity ${
                    swipeRating === "easy"
                      ? "bg-green-500/20"
                      : swipeRating === "hard"
                        ? "bg-red-500/20"
                        : "bg-transparent"
                  }`}
                  style={{ opacity: Math.min(Math.abs(swipeOffset) / 120, 1) }}
                />
              )}

              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${isFlipped ? 180 : 0}deg)${
                    swipeOffset
                      ? ` translateX(${swipeOffset}px) rotate(${swipeOffset * 0.05}deg)`
                      : ""
                  }`,
                }}
              >
                {/* Forside — begrep */}
                <div
                  className="absolute inset-0 rounded-xl border-2 bg-card shadow-lg flex flex-col items-center justify-center p-6 sm:p-8"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Badge variant="outline" className="mb-4 text-xs">
                    {currentCard.chapterNumber} {currentCard.chapterTitle}
                  </Badge>
                  <div className="text-xl sm:text-2xl font-bold text-center">
                    <LatexRenderer content={currentCard.title} />
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Trykk for å vise definisjon
                  </p>
                </div>

                {/* Bakside — definisjon + vurdering */}
                <div
                  className="absolute inset-0 rounded-xl border-2 bg-card shadow-lg flex flex-col p-6 sm:p-8 overflow-y-auto"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Badge variant="outline" className="mb-3 text-xs self-start">
                    {currentCard.chapterNumber} {currentCard.chapterTitle}
                  </Badge>
                  <h3 className="text-lg font-bold mb-3">
                    <LatexRenderer content={currentCard.title} />
                  </h3>
                  <div className="text-sm sm:text-base leading-relaxed flex-1">
                    <LatexRenderer content={currentCard.content} />
                  </div>

                  {/* Vurderingsknapper */}
                  <div
                    className="flex gap-2 mt-4 pt-4 border-t"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="outline"
                      className="flex-1 border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/30"
                      onClick={() => handleRate("hard")}
                    >
                      Vanskelig
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-amber-300 text-amber-600 hover:bg-amber-50 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-950/30"
                      onClick={() => handleRate("ok")}
                    >
                      OK
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-300 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-950/30"
                      onClick={() => handleRate("easy")}
                    >
                      Lett
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigasjon under kortet */}
            <div className="flex items-center justify-between mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => goToCard("prev")}
                disabled={currentIndex === 0}
                className="gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Forrige
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsFlipped(false);
                }}
                className="gap-1"
              >
                <RotateCcw className="h-4 w-4" />
                Snu
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => goToCard("next")}
                disabled={currentIndex === sessionCards.length - 1}
                className="gap-1"
              >
                Neste
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Tastatur-tips (desktop) */}
            <p className="hidden sm:block text-center text-xs text-muted-foreground mt-3">
              Mellomrom: snu kort &middot; Piltaster: naviger/vurder
            </p>
          </div>
        )}

        {/* Tilbake-lenke */}
        <div className="max-w-lg mx-auto mt-6 text-center">
          <Link
            href={`/bok/${courseId}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 inline mr-1" />
            Tilbake til boken
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useStudentCourses } from "@/lib/contexts/student-courses-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  ArrowLeft,
  RefreshCw,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  LogIn,
  Layers,
  Brain,
  CheckCircle2,
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
import {
  loadStore,
  saveStore,
  schedule,
  buildSrsSession,
  computeStats,
  NEW_CARDS_PER_SESSION,
} from "@/lib/flashcard/srs";
import type { SrsStore, SrsRating } from "@/lib/flashcard/srs";

interface FlashcardClientProps {
  courseId: string;
  courseTitle: string;
  definitions: FlashcardDefinition[];
  sectionNames: Record<string, string>;
  initialSection?: string;
}

type StudyMode = "browse" | "srs";

export function FlashcardClient({
  courseId,
  courseTitle,
  definitions,
  sectionNames,
  initialSection,
}: FlashcardClientProps) {
  const { courses: studentCourses } = useStudentCourses();
  const hasCourses = studentCourses.length > 0;

  // Modus: "browse" = bla gjennom (uendret standard), "srs" = smart repetisjon
  const [mode, setMode] = useState<StudyMode>("browse");

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

  // Smart repetisjon (localStorage-basert, klient-side)
  const [srsStore, setSrsStore] = useState<SrsStore>({});
  const [srsSessionDone, setSrsSessionDone] = useState(0);
  const [srsSessionTotal, setSrsSessionTotal] = useState(0);
  const [srsFinished, setSrsFinished] = useState(false);
  const [srsNow, setSrsNow] = useState<Date | null>(null);

  // Swipe-refs
  const pointerStartX = useRef(0);
  const isDragging = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Filtrer definisjoner basert på seksjon
  const filteredDefinitions = useMemo(
    () =>
      sectionFilter === "all"
        ? definitions
        : definitions.filter((d) => d.sectionNumber === sectionFilter),
    [definitions, sectionFilter]
  );

  // Hent unike seksjoner fra definisjonene
  const availableSections = Array.from(
    new Set(definitions.map((d) => d.sectionNumber))
  ).sort((a, b) => Number(a) - Number(b));

  // Hent fremgang fra API ved oppstart (kun brukt av "browse"-modus)
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

  // Last SRS-tilstand fra localStorage (klient-side, SSR-trygt)
  useEffect(() => {
    setSrsStore(loadStore(courseId));
    setSrsNow(new Date());
  }, [courseId]);

  // Bygg sessionsdeck for "browse"-modus når filter eller fremgang endres
  useEffect(() => {
    if (!isInitialized || mode !== "browse") return;
    const deck = buildSessionDeck(filteredDefinitions, progressMap, 20);
    setSessionCards(deck);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionReviewed(0);
  }, [sectionFilter, isInitialized, mode]); // eslint-disable-line react-hooks/exhaustive-deps

  // SRS-statistikk for gjeldende filter (memoisert)
  const srsStats = useMemo(() => {
    if (!srsNow) return { dueCount: 0, newAvailable: 0, newInSession: 0 };
    return computeStats(filteredDefinitions, srsStore, srsNow);
  }, [filteredDefinitions, srsStore, srsNow]);

  // Start / gjenoppbygg en SRS-økt
  const startSrsSession = useCallback(() => {
    const now = new Date();
    setSrsNow(now);
    const deck = buildSrsSession(filteredDefinitions, srsStore, now);
    setSessionCards(deck);
    setSrsSessionTotal(deck.length);
    setSrsSessionDone(0);
    setSrsFinished(deck.length === 0);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [filteredDefinitions, srsStore]);

  // Bygg SRS-økt når man bytter til SRS-modus eller seksjon endres
  useEffect(() => {
    if (mode !== "srs" || !srsNow) return;
    startSrsSession();
  }, [mode, sectionFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentCard = sessionCards[currentIndex];

  // Flip kort
  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Naviger til forrige/neste kort (kun "browse")
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

  // Vurder kort — "browse"-modus (uendret oppførsel, API + 3-trinns)
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

  // Vurder kort — SRS-modus (4-trinns, localStorage)
  const handleSrsRate = useCallback(
    (rating: SrsRating) => {
      if (!currentCard) return;

      const now = new Date();
      const prevState = srsStore[currentCard.id] ?? null;
      const nextState = schedule(prevState, rating, now);

      const nextStore: SrsStore = { ...srsStore, [currentCard.id]: nextState };
      setSrsStore(nextStore);
      saveStore(courseId, nextStore);

      setSrsSessionDone((prev) => prev + 1);
      setIsFlipped(false);
      setSwipeOffset(0);
      setSwipeRating(null);

      // «Igjen» legger kortet bakerst i køen slik at det dukker opp på nytt
      if (rating === "again") {
        setSessionCards((prev) => {
          const rest = prev.slice(0, currentIndex).concat(prev.slice(currentIndex + 1));
          const next = [...rest, currentCard];
          return next;
        });
        setSrsSessionTotal((prev) => prev + 1);
        // currentIndex peker nå på neste kort (kortet ble flyttet bakover)
        if (currentIndex >= sessionCards.length - 1) {
          setCurrentIndex(0);
        }
        return;
      }

      if (currentIndex < sessionCards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setSrsFinished(true);
      }
    },
    [currentCard, currentIndex, sessionCards.length, srsStore, courseId]
  );

  // Start nytt deck (browse)
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
        return;
      }

      if (mode === "srs") {
        if (!isFlipped) return;
        if (e.key === "1") handleSrsRate("again");
        else if (e.key === "2") handleSrsRate("hard");
        else if (e.key === "3") handleSrsRate("good");
        else if (e.key === "4") handleSrsRate("easy");
        return;
      }

      if (e.key === "ArrowLeft") {
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
  }, [isFlipped, mode, handleFlip, handleRate, handleSrsRate, goToCard]);

  // Swipe-håndtering (kun "browse", kun når kortet er flippet)
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!isFlipped || mode !== "browse") return;
      pointerStartX.current = e.clientX;
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [isFlipped, mode]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current || !isFlipped || mode !== "browse") return;
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
    [isFlipped, mode]
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

  const modeSwitcher = (
    <Tabs
      value={mode}
      onValueChange={(v) => {
        setMode(v as StudyMode);
        setIsFlipped(false);
        setSwipeOffset(0);
        setSwipeRating(null);
      }}
    >
      <TabsList className="w-full">
        <TabsTrigger value="browse" className="gap-1.5">
          <Layers className="h-4 w-4" />
          Bla gjennom
        </TabsTrigger>
        <TabsTrigger value="srs" className="gap-1.5">
          <Brain className="h-4 w-4" />
          Smart repetisjon
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );

  const sectionSelect = (
    <Select value={sectionFilter} onValueChange={setSectionFilter}>
      <SelectTrigger className="w-[200px]" aria-label="Filtrer kort på seksjon">
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
  );

  const breadcrumb = (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={hasCourses ? "/dashboard/student" : "/bok"}>
            {hasCourses ? "Dashbord" : "Bøker"}
          </BreadcrumbLink>
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
  );

  const backLink = (
    <div className="max-w-lg mx-auto mt-6 text-center">
      <Link
        href={`/bok/${courseId}`}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 inline mr-1" />
        Tilbake til boken
      </Link>
    </div>
  );

  // ---------------------------------------------------------------------------
  // SRS-modus: fullført-skjerm
  // ---------------------------------------------------------------------------
  if (mode === "srs" && (srsFinished || sessionCards.length === 0)) {
    const nothingDue = srsStats.dueCount === 0 && srsStats.newAvailable === 0;
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNav />
        <main id="main-content" className="flex-1 container mx-auto px-4 py-4">
          {breadcrumb}
          <div className="max-w-lg mx-auto mb-4 space-y-3">
            {modeSwitcher}
            <div className="flex items-center justify-end">{sectionSelect}</div>
          </div>
          <div className="max-w-lg mx-auto text-center py-8">
            <CheckCircle2 className="h-16 w-16 mx-auto text-green-600 mb-4" />
            <h1 className="text-2xl font-bold mb-2">
              {srsSessionDone > 0 ? "Økt fullført!" : "Ingenting å repetere nå"}
            </h1>
            <p className="text-muted-foreground mb-6">
              {srsSessionDone > 0 ? (
                <>Du repeterte {srsSessionDone} kort. Godt jobbet!</>
              ) : nothingDue ? (
                <>
                  Ingen kort forfaller
                  {sectionFilter !== "all" ? " i denne seksjonen" : ""} akkurat
                  nå. Kom tilbake senere.
                </>
              ) : (
                <>
                  {srsStats.dueCount > 0 && (
                    <>
                      {srsStats.dueCount} kort forfaller i dag.{" "}
                    </>
                  )}
                  {srsStats.newInSession > 0 && (
                    <>{srsStats.newInSession} nye kort er klare. </>
                  )}
                  Start en økt for å repetere.
                </>
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {(srsStats.dueCount > 0 || srsStats.newInSession > 0) && (
                <Button onClick={startSrsSession} className="gap-2">
                  <Brain className="h-4 w-4" />
                  {srsSessionDone > 0 ? "Ny økt" : "Start økt"}
                </Button>
              )}
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

  // ---------------------------------------------------------------------------
  // Browse-modus: ingen kort igjen
  // ---------------------------------------------------------------------------
  if (mode === "browse" && sessionCards.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <MainNav />
        <main id="main-content" className="flex-1 container mx-auto px-4 py-4">
          {breadcrumb}
          <div className="max-w-lg mx-auto mb-4 space-y-3">
            {modeSwitcher}
            <div className="flex items-center justify-end">{sectionSelect}</div>
          </div>
          <div className="max-w-lg mx-auto text-center py-8">
            <Layers className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Alle kort gjennomgått!</h1>
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

  // Beregn statistikk (browse)
  const reviewedInSession = Math.min(sessionReviewed, sessionCards.length);
  const browseProgressPercent =
    sessionCards.length > 0
      ? Math.round((reviewedInSession / sessionCards.length) * 100)
      : 0;

  const srsProgressPercent =
    srsSessionTotal > 0
      ? Math.round((srsSessionDone / srsSessionTotal) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNav />

      <main className="flex-1 container mx-auto px-4 py-4">
        {breadcrumb}

        {/* Modusvelger + seksjonsfilter */}
        <div className="max-w-lg mx-auto mb-4 space-y-3">
          {modeSwitcher}
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-lg font-bold">
              {mode === "srs" ? "Smart repetisjon" : "Flashcards"}
            </h1>
            {sectionSelect}
          </div>

          {/* SRS: forfalt/nye-oversikt */}
          {mode === "srs" && (
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="secondary" className="gap-1">
                Forfalt i dag: {srsStats.dueCount}
              </Badge>
              <Badge variant="outline" className="gap-1">
                Nye kort: {srsStats.newInSession}
              </Badge>
              <span className="text-muted-foreground ml-auto">
                {srsSessionDone}/{srsSessionTotal} i økten
              </span>
            </div>
          )}

          {/* Fremgangsindikator */}
          {mode === "browse" ? (
            <>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Kort {currentIndex + 1} av {sessionCards.length}
                </span>
                <span>{reviewedInSession} gjennomgått</span>
              </div>
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${browseProgressPercent}%` }}
                />
              </div>
            </>
          ) : (
            <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${srsProgressPercent}%` }}
              />
            </div>
          )}
        </div>

        {/* Innlogging-varsel */}
        {mode === "browse" && isLoggedIn === false && (
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
        {mode === "srs" && (
          <div className="max-w-lg mx-auto mb-4 p-3 rounded-lg bg-muted/50 border text-xs text-muted-foreground flex items-center gap-2">
            <Brain className="h-4 w-4 shrink-0" />
            <span>
              Fremgangen lagres på denne enheten. Kort du kan godt, kommer
              sjeldnere igjen.
            </span>
          </div>
        )}

        {/* Flashcard */}
        {currentCard && (
          <div className="max-w-sm sm:max-w-lg mx-auto">
            {/* 3D flip-container */}
            <div
              className="relative w-full h-[60vh] sm:h-[400px] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
              style={{ perspective: "1000px" }}
              role="button"
              tabIndex={0}
              aria-label={isFlipped ? "Snu kortet tilbake" : "Snu kortet for å se svaret"}
              onClick={() => {
                if (!isDragging.current) handleFlip();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleFlip();
                }
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              ref={cardRef}
            >
              {/* Swipe-overlay (kun browse) */}
              {mode === "browse" && isFlipped && swipeOffset !== 0 && (
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
                  <h2 className="text-lg font-bold mb-3">
                    <LatexRenderer content={currentCard.title} />
                  </h2>
                  <div className="text-sm sm:text-base leading-relaxed flex-1">
                    <LatexRenderer content={currentCard.content} />
                  </div>

                  {/* Vurderingsknapper */}
                  {mode === "srs" ? (
                    <div
                      className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        variant="outline"
                        className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/30 px-1"
                        onClick={() => handleSrsRate("again")}
                      >
                        Igjen
                      </Button>
                      <Button
                        variant="outline"
                        className="border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-400 dark:hover:bg-orange-950/30 px-1"
                        onClick={() => handleSrsRate("hard")}
                      >
                        Vanskelig
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/30 px-1"
                        onClick={() => handleSrsRate("good")}
                      >
                        Bra
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-300 text-green-600 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-950/30 px-1"
                        onClick={() => handleSrsRate("easy")}
                      >
                        Lett
                      </Button>
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>

            {/* Navigasjon under kortet (kun browse) */}
            {mode === "browse" ? (
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
            ) : (
              <div className="flex items-center justify-center mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFlipped(false)}
                  className="gap-1"
                >
                  <RotateCcw className="h-4 w-4" />
                  Snu
                </Button>
              </div>
            )}

            {/* Tastatur-tips (desktop) */}
            <p className="hidden sm:block text-center text-xs text-muted-foreground mt-3">
              {mode === "srs"
                ? "Mellomrom: snu kort · Tallene 1–4: Igjen / Vanskelig / Bra / Lett"
                : "Mellomrom: snu kort · Piltaster: naviger/vurder"}
            </p>
          </div>
        )}

        {backLink}
      </main>

      <Footer />
    </div>
  );
}

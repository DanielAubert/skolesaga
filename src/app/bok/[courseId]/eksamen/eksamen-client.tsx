"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LatexRenderer } from "@/components/textbook/latex-renderer";
import {
  ArrowLeft, ArrowRight, Clock, Timer, Trophy, GraduationCap,
  BookOpen, AlertTriangle, SkipForward, CheckCircle2, XCircle,
  MinusCircle, Lightbulb, ClipboardList, Globe, ScrollText,
} from "lucide-react";
import type { Fagprofil } from "@/lib/data/fagprofil";
import { feilstraffFraRegel } from "@/lib/data/fagprofil";
import type { QuizQuestion } from "@/lib/data/quiz-data";

// ---------------------------------------------------------------------------
// Konfig
// ---------------------------------------------------------------------------
const MIN_ANTALL = 20;
const MAKS_ANTALL = 30;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTid(sekunder: number): string {
  const s = Math.max(0, sekunder);
  const t = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sek = s % 60;
  if (t > 0) return `${t}:${String(m).padStart(2, "0")}:${String(sek).padStart(2, "0")}`;
  return `${m}:${String(sek).padStart(2, "0")}`;
}

interface EksamenOppgave {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  userAnswer?: number; // valgt alternativ-indeks
  skipped?: boolean;    // bevisst stått over
}

interface EksamenClientProps {
  courseId: string;
  courseTitle: string;
  fagprofil: Fagprofil;
  harEgenProfil: boolean;
  bank: QuizQuestion[];
}

type Fase = "intro" | "pagaende" | "resultat";

export function EksamenClient({
  courseId,
  courseTitle,
  fagprofil,
  harEgenProfil,
  bank,
}: EksamenClientProps) {
  const harNokQuiz = bank.length >= 4;
  const minuspoeng = fagprofil.scoring.minuspoeng;
  const feilstraff = useMemo(() => feilstraffFraRegel(fagprofil.scoring), [fagprofil.scoring]);

  // Antall spørsmål i økten (begrenset av bankstørrelse).
  const antall = useMemo(
    () => Math.min(MAKS_ANTALL, Math.max(MIN_ANTALL, Math.min(bank.length, MAKS_ANTALL))),
    [bank.length],
  );
  const oktantall = Math.min(antall, bank.length);

  // Skalert tid: fagets fulle tid proporsjonalt med hvor stor andel av en
  // «full eksamen» økten utgjør. Vi bruker en referanse på ~40 flervalgsspørsmål
  // som en hel eksamensøkt, men aldri mindre enn 30 s/spm.
  const fullTidMin = fagprofil.eksamensform.varighetMinutter ?? 60;
  const REFERANSE_SPM = 40;
  const oktSekunder = useMemo(() => {
    const proporsjonal = (fullTidMin * 60 * oktantall) / REFERANSE_SPM;
    const minimum = oktantall * 30; // minst 30 s per spørsmål
    return Math.round(Math.max(proporsjonal, minimum));
  }, [fullTidMin, oktantall]);

  const [fase, setFase] = useState<Fase>("intro");
  const [oppgaver, setOppgaver] = useState<EksamenOppgave[]>([]);
  const [indeks, setIndeks] = useState(0);
  const [gjenstaende, setGjenstaende] = useState(oktSekunder);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resultatLagret = useRef(false);

  const byggOppgaver = useCallback((): EksamenOppgave[] => {
    const valgte = shuffleArray(bank).slice(0, oktantall);
    return valgte.map((q, idx) => {
      const stokket = shuffleArray(q.options);
      const correctIndex = stokket.indexOf(q.options[0]); // options[0] er alltid riktig
      return {
        id: idx + 1,
        question: q.question,
        options: stokket,
        correctOptionIndex: correctIndex,
        explanation: q.explanation,
      };
    });
  }, [bank, oktantall]);

  const avsluttOkt = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setFase("resultat");
  }, []);

  // Nedtelling
  useEffect(() => {
    if (fase !== "pagaende") return;
    timerRef.current = setInterval(() => {
      setGjenstaende((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setFase("resultat");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fase]);

  const startEksamen = () => {
    setOppgaver(byggOppgaver());
    setIndeks(0);
    setGjenstaende(oktSekunder);
    resultatLagret.current = false;
    setFase("pagaende");
  };

  // ------------------------------------------------------------------
  // Scoring
  // ------------------------------------------------------------------
  const beregning = useMemo(() => {
    let riktige = 0;
    let feil = 0;
    let blanke = 0;
    let poeng = 0;
    for (const o of oppgaver) {
      const besvart = o.userAnswer !== undefined;
      if (!besvart) {
        blanke += 1; // blankt (stått over eller ikke rukket) = 0
        continue;
      }
      if (o.userAnswer === o.correctOptionIndex) {
        riktige += 1;
        poeng += 1;
      } else {
        feil += 1;
        poeng += minuspoeng ? feilstraff : 0; // feilstraff er negativt
      }
    }
    const maks = oppgaver.length; // +1 per riktig
    return { riktige, feil, blanke, poeng, maks };
  }, [oppgaver, minuspoeng, feilstraff]);

  // Lagre resultat (gjenbruker quiz-results-endepunktet; egen quizId).
  useEffect(() => {
    if (fase !== "resultat" || oppgaver.length === 0 || resultatLagret.current) return;
    resultatLagret.current = true;
    const lagre = async () => {
      try {
        const answers = oppgaver.map((o) => ({
          questionId: o.id,
          selectedOption: o.userAnswer ?? -1,
          isCorrect: o.userAnswer === o.correctOptionIndex,
        }));
        await fetch("/api/textbook/quiz-results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            quizId: `${courseId}-eksamen`,
            courseId,
            score: beregning.riktige,
            totalQuestions: oppgaver.length,
            answers,
          }),
        });
      } catch (e) {
        console.error("Kunne ikke lagre eksamensresultat:", e);
      }
    };
    lagre();
  }, [fase, oppgaver, beregning.riktige, courseId]);

  const aktiv = oppgaver[indeks];

  const svar = (optionIndex: number) => {
    if (!aktiv || aktiv.userAnswer !== undefined || aktiv.skipped) return;
    setOppgaver((prev) => {
      const kopi = [...prev];
      kopi[indeks] = { ...kopi[indeks], userAnswer: optionIndex, skipped: false };
      return kopi;
    });
  };

  const staOver = () => {
    if (!aktiv) return;
    setOppgaver((prev) => {
      const kopi = [...prev];
      kopi[indeks] = { ...kopi[indeks], skipped: true, userAnswer: undefined };
      return kopi;
    });
    neste();
  };

  const neste = () => {
    if (indeks < oppgaver.length - 1) setIndeks((i) => i + 1);
    else avsluttOkt();
  };

  const forrige = () => {
    if (indeks > 0) setIndeks((i) => i - 1);
  };

  const besvartAntall = oppgaver.filter((o) => o.userAnswer !== undefined).length;

  const lavTid = gjenstaende <= 60;

  // =================================================================
  // Tom-tilstand: faget har ikke nok quizdata
  // =================================================================
  if (!harNokQuiz) {
    return (
      <div className="min-h-screen bg-background">
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6 text-center">
              <ClipboardList className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h1 className="text-2xl font-bold mb-2">Eksamenstrening kommer snart</h1>
              <p className="text-muted-foreground mb-6">
                Dette faget har ikke nok quizspørsmål til en eksamensøkt ennå.
                Eksamenssimulatoren åpner så snart quizbanken er på plass.
              </p>
              <Link href={`/bok/${courseId}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Tilbake til boka
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Felles breadcrumb
  const breadcrumb = (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/bok">Bøker</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/bok/${courseId}`}>{courseTitle}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Eksamenstrening</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );

  // =================================================================
  // INTRO – startskjerm
  // =================================================================
  if (fase === "intro") {
    const ef = fagprofil.eksamensform;
    return (
      <div className="min-h-screen bg-background">
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {breadcrumb}

            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Eksamenstrening</h1>
            </div>
            <p className="text-muted-foreground mb-6">
              {courseTitle} — tren under fagets ekte eksamensbetingelser: tidspress og fagets
              faktiske scoring-regler.
            </p>

            {/* Eksamensform */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ScrollText className="h-5 w-5 text-primary" />
                  Slik ser den ekte eksamenen ut
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>{ef.beskrivelse}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                    <span>
                      <span className="font-medium">Full tid: </span>
                      {ef.varighetMinutter ? `${ef.varighetMinutter} min` : "varierer"}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                    <span>
                      <span className="font-medium">Språk: </span>
                      {ef.sprak}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <BookOpen className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                    <span>
                      <span className="font-medium">Hjelpemidler: </span>
                      {ef.hjelpemidler}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:col-span-2">
                    <ClipboardList className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                    <span>
                      <span className="font-medium">Struktur: </span>
                      {ef.struktur}
                    </span>
                  </div>
                </div>

                {/* Karakter/scoring-oppsummering */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge variant="outline">Karakter: {fagprofil.scoring.karakterskala}</Badge>
                  {minuspoeng ? (
                    <Badge variant="destructive" className="gap-1">
                      <MinusCircle className="h-3 w-3" />
                      Minuspoeng: {fagprofil.scoring.minuspoengRegel ?? "feil trekker"}
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Ingen minuspoeng</Badge>
                  )}
                  {fagprofil.scoring.bestaattKrav && (
                    <Badge variant="outline">Bestått-krav gjelder</Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Ærlig note om dekning */}
            <div className="mb-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Simulatoren dekker <span className="font-medium">flervalgsdelen</span> —
                begreps- og forståelseskunnskapen under tidspress og fagets scoring-regler.
                Essay, drøfting, praktikum og regneutledning trenes i selve boka med
                modellbesvarelser og «typiske feil».
                {!harEgenProfil && (
                  <>
                    {" "}
                    <span className="font-medium">
                      NB: Fagprofil er ikke registrert ennå — standard betingelser (60 min,
                      ingen minuspoeng) brukes.
                    </span>
                  </>
                )}
              </p>
            </div>

            {/* Øktoppsett */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">Denne økten</h2>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">{oktantall}</div>
                    <div className="text-xs text-muted-foreground">spørsmål</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">{formatTid(oktSekunder)}</div>
                    <div className="text-xs text-muted-foreground">
                      nedtelling (skalert fra {ef.varighetMinutter ?? 60} min)
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> Riktig svar: +1 poeng
                  </p>
                  {minuspoeng ? (
                    <>
                      <p className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500 shrink-0" /> Feil svar:{" "}
                        {feilstraff.toLocaleString("nb-NO")} poeng
                      </p>
                      <p className="flex items-center gap-2">
                        <MinusCircle className="h-4 w-4 text-muted-foreground shrink-0" /> Stått
                        over / blankt: 0 poeng — bruk «Stå over» når du er usikker
                      </p>
                    </>
                  ) : (
                    <p className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground shrink-0" /> Feil eller
                      blankt: 0 poeng
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2" onClick={startEksamen}>
                <Timer className="h-5 w-5" />
                Start eksamensøkt
              </Button>
              <Link href={`/bok/${courseId}`}>
                <Button size="lg" variant="outline" className="gap-2 w-full">
                  <ArrowLeft className="h-4 w-4" />
                  Tilbake til boka
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // =================================================================
  // RESULTAT
  // =================================================================
  if (fase === "resultat") {
    const { riktige, feil, blanke, poeng, maks } = beregning;
    const prosent = maks > 0 ? Math.round((riktige / maks) * 100) : 0;

    // «Hva om»-innsikt ved minuspoeng: forventet verdi av å gjette blindt vs. stå over.
    // Ved 4 alternativer: EV(gjett) = 0,25·(+1) + 0,75·(feilstraff).
    const antAlt = aktiv?.options.length ?? 4;
    const evGjett = (1 / antAlt) * 1 + ((antAlt - 1) / antAlt) * feilstraff;
    // Poeng du faktisk «tapte/vant» på de blanke om du hadde gjettet i stedet.
    const blanktSomGjett = blanke * evGjett;

    return (
      <div className="min-h-screen bg-background">
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {breadcrumb}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Trophy
                    className={`h-16 w-16 mx-auto mb-3 ${
                      prosent >= 60 ? "text-yellow-500" : "text-muted-foreground"
                    }`}
                  />
                  <h1 className="text-2xl font-bold mb-1">Eksamensøkt fullført</h1>
                  <p className="text-muted-foreground">{courseTitle}</p>
                </div>

                {/* Poengsum */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary">
                    {poeng.toLocaleString("nb-NO")} / {maks}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    poeng ({prosent}% riktige)
                  </div>
                </div>

                {/* Fordeling */}
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                      {riktige}
                    </div>
                    <div className="text-xs text-muted-foreground">riktige</div>
                  </div>
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30">
                    <div className="text-xl font-bold text-red-600 dark:text-red-400">{feil}</div>
                    <div className="text-xs text-muted-foreground">feil</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-xl font-bold">{blanke}</div>
                    <div className="text-xs text-muted-foreground">blanke</div>
                  </div>
                </div>

                {/* Gjettestrategi-innsikt (kun ved minuspoeng) */}
                {minuspoeng && (
                  <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Gjettestrategi
                    </h2>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                      Med {feilstraff.toLocaleString("nb-NO")} for feil og 0 for blankt er
                      forventet verdi av å gjette blindt på {antAlt} alternativer{" "}
                      <span className="font-medium">
                        {evGjett >= 0 ? "+" : ""}
                        {evGjett.toFixed(2)} poeng per spørsmål
                      </span>
                      .{" "}
                      {evGjett < 0
                        ? "Det lønner seg altså å stå over når du er helt blank."
                        : "Ren gjetting lønner seg i snitt — men eliminer gale alternativer først."}
                    </p>
                    {blanke > 0 && (
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Du sto over {blanke} spørsmål. Hadde du gjettet blindt på alle, ville du i
                        snitt {blanktSomGjett >= 0 ? "tjent" : "tapt"}{" "}
                        <span className="font-medium">
                          {Math.abs(blanktSomGjett).toFixed(2)} poeng
                        </span>{" "}
                        på det.
                      </p>
                    )}
                  </div>
                )}

                {/* Sensornøkler som lesetips */}
                {fagprofil.sensornokler.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2">
                      <ClipboardList className="h-4 w-4 text-primary" />
                      Sensornøkler å ta med videre
                    </h2>
                    <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                      {fagprofil.sensornokler.slice(0, 6).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {fagprofil.typiskeFeil.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      Typiske feil sensor trekker for
                    </h2>
                    <ul className="space-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                      {fagprofil.typiskeFeil.slice(0, 6).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <Separator className="my-4" />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2" onClick={startEksamen}>
                    <Timer className="h-4 w-4" />
                    Ny økt
                  </Button>
                  <Link href={`/bok/${courseId}`}>
                    <Button variant="outline" className="gap-2 w-full">
                      <ArrowLeft className="h-4 w-4" />
                      Tilbake til boka
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // =================================================================
  // PÅGÅENDE ØKT
  // =================================================================
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNav />
      <main id="main-content" className="flex-1 container mx-auto px-4 py-4">
        <div className="max-w-2xl mx-auto">
          {/* Eksamensøkten har ingen synlig tittel — <h1> for skjermlesere */}
          <h1 className="sr-only">Eksamenstrening — {courseTitle}</h1>
          {/* Topplinje: nedtelling + framdrift */}
          <div className="flex items-center justify-between mb-3">
            <div
              className={`flex items-center gap-2 font-mono text-lg font-semibold ${
                lavTid ? "text-red-600 dark:text-red-400 animate-pulse" : ""
              }`}
            >
              <Timer className="h-5 w-5" />
              {formatTid(gjenstaende)}
            </div>
            <div className="text-sm text-muted-foreground">
              Spørsmål {indeks + 1} av {oppgaver.length} · {besvartAntall} besvart
            </div>
          </div>

          <div className="h-2 bg-primary/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((indeks + 1) / oppgaver.length) * 100}%` }}
            />
          </div>

          {/* Spørsmålskort */}
          <Card>
            <CardContent className="pt-6">
              {aktiv?.skipped && (
                <div className="mb-3 text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <SkipForward className="h-3.5 w-3.5" />
                  Du sto over dette spørsmålet (blankt = 0 poeng)
                </div>
              )}
              <div className="text-lg font-medium mb-4">
                <LatexRenderer content={aktiv?.question || ""} />
              </div>

              <div className="space-y-2">
                {aktiv?.options.map((option, idx) => {
                  const valgt = aktiv.userAnswer === idx;
                  let klasse =
                    "w-full px-4 py-2.5 text-sm md:text-base rounded-lg border-2 transition-all text-left";
                  if (valgt) {
                    klasse += " border-primary bg-primary/10";
                  } else {
                    klasse += " border-muted hover:border-primary hover:bg-primary/5";
                  }
                  return (
                    <button
                      key={idx}
                      className={klasse}
                      onClick={() => svar(idx)}
                      disabled={aktiv.skipped}
                      aria-pressed={valgt}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">
                          <LatexRenderer content={option} />
                        </span>
                        {valgt && <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigasjon */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                <Button variant="ghost" onClick={forrige} disabled={indeks === 0} className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Forrige
                </Button>

                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={staOver} className="gap-1">
                    <SkipForward className="h-4 w-4" />
                    Stå over
                  </Button>
                  <Button onClick={neste} className="gap-1">
                    {indeks < oppgaver.length - 1 ? (
                      <>
                        Neste
                        <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Lever
                        <Trophy className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lever tidlig */}
          <div className="mt-4 text-center">
            <button
              onClick={avsluttOkt}
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Lever eksamen nå
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

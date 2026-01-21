"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Users,
  Plus,
  LogIn,
  Trophy,
  Timer,
  Zap,
  Target,
  Brain,
  Award,
  Calculator,
  Minus,
  Divide,
  X,
} from "lucide-react";
import { generateChallengeCode, generateChallengeProblems, CHALLENGE_TYPES } from "@/lib/challenge/problems";
import { createChallenge, joinChallenge, findChallengeByCode, usePlayerId, usePlayerName } from "@/lib/challenge/hooks";
import type { ChallengeType } from "@/lib/supabase/types";

const currentModules = [
  { id: 1, name: "Grunnleggende", description: "Regning med negative tall", gradient: "from-blue-400 to-blue-600", icon: Target },
  { id: 2, name: "Ligninger", description: "Finn manglende tall", gradient: "from-purple-400 to-purple-600", icon: Calculator },
  { id: 3, name: "Multiplikasjon", description: "Ganging med negative tall", gradient: "from-green-400 to-green-600", icon: X },
  { id: 4, name: "Regnerekkefølge", description: "Rekkefølge av operasjoner", gradient: "from-orange-400 to-orange-600", icon: Brain },
  { id: 5, name: "Divisjon", description: "Deling med negative tall", gradient: "from-indigo-400 to-indigo-600", icon: Divide },
  { id: 6, name: "Desimaltall", description: "Negative desimaltall", gradient: "from-pink-400 to-pink-600", icon: Minus },
  { id: 7, name: "Vanskelig", description: "Komplekse desimaltall ⭐⭐⭐", gradient: "from-red-400 to-red-600", icon: Award },
];

function getModuleFromSlug(slug: string) {
  const match = slug.match(/^oppgave-(\d+)$/);
  if (!match) return null;
  const id = parseInt(match[1]);
  return currentModules.find(m => m.id === id) || null;
}

export default function ChallengePage() {
  const router = useRouter();
  const params = useParams();
  const oppgaveSlug = params.oppgave as string;
  const currentModule = getModuleFromSlug(oppgaveSlug);

  const playerId = usePlayerId();
  const [playerName, setPlayerName] = usePlayerName();

  const [mode, setMode] = useState<'select' | 'create' | 'join'>('select');
  const [joinCode, setJoinCode] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);

  // Get the challenge type for this currentModule
  const challengeType = currentModule ? `negative-${currentModule.id}` as ChallengeType : 'negative';
  const challengeTypeInfo = CHALLENGE_TYPES[challengeType as keyof typeof CHALLENGE_TYPES];

  useEffect(() => {
    if (playerName) {
      setNameInput(playerName);
    }
  }, [playerName]);

  // Autofocus on code input when join mode is selected
  useEffect(() => {
    if (mode === 'join' && codeInputRef.current) {
      setTimeout(() => codeInputRef.current?.focus(), 100);
    }
  }, [mode]);

  // Auto-join when code is 6 digits and name is filled
  const autoJoinTriggered = useRef(false);
  useEffect(() => {
    if (joinCode.length === 6 && nameInput.trim() && !isLoading && !autoJoinTriggered.current && mode === 'join') {
      autoJoinTriggered.current = true;
      const timer = setTimeout(() => {
        document.getElementById('join-button')?.click();
      }, 150);
      return () => clearTimeout(timer);
    }
    if (joinCode.length < 6) {
      autoJoinTriggered.current = false;
    }
  }, [joinCode, nameInput, isLoading, mode]);

  const handleCreateChallenge = async () => {
    if (!playerId || !nameInput.trim()) {
      setError('Vennligst skriv inn navn');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const code = generateChallengeCode();
      const problems = generateChallengeProblems(challengeType, code);

      const challenge = await createChallenge(challengeType, problems, code, playerId);

      if (!challenge) {
        throw new Error('Kunne ikke opprette challenge');
      }

      // Save player name
      setPlayerName(nameInput.trim());

      // Join as host
      await joinChallenge(challenge.id, playerId, nameInput.trim(), true);

      // Redirect to lobby
      router.push(`/hoderegning/challenge/${code}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'En feil oppstod');
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinChallenge = async () => {
    if (!joinCode.trim() || !playerId || !nameInput.trim()) {
      setError('Vennligst skriv inn kode og navn');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const challenge = await findChallengeByCode(joinCode.trim().toUpperCase());

      if (!challenge) {
        throw new Error('Fant ikke challenge med denne koden');
      }

      if (challenge.status !== 'waiting') {
        throw new Error('Denne challengen har allerede startet');
      }

      // Save player name
      setPlayerName(nameInput.trim());

      // Join the challenge
      await joinChallenge(challenge.id, playerId, nameInput.trim(), false);

      // Redirect to lobby
      router.push(`/hoderegning/challenge/${challenge.code}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'En feil oppstod');
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentModule) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <MainNav />
        <main className="flex-1 container mx-auto px-4 py-8">
          <p>Oppgave ikke funnet</p>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = currentModule.icon;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNav />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb className="mb-6">
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
              <BreadcrumbLink href="/hoderegning/gh-negative-tall-regnerekkefolge">Negative tall</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Challenge: Oppgave {currentModule.id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`rounded-lg bg-gradient-to-br ${currentModule.gradient} p-3`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Challenge: Oppgave {currentModule.id}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {currentModule.name} - {currentModule.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-4">
            <Users className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-sm font-medium">Multiplayer</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Timer className="w-8 h-8 text-orange-500 mb-2" />
            <span className="text-sm font-medium">15 oppgaver</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-sm font-medium">Raskest vinner</span>
          </div>
        </div>

        {mode === 'select' && (
          <>
            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button
                size="lg"
                className={`h-24 text-lg bg-gradient-to-br ${currentModule.gradient} hover:opacity-90`}
                onClick={() => setMode('create')}
              >
                <Plus className="w-6 h-6 mr-2" />
                Opprett Challenge
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-24 text-lg"
                onClick={() => setMode('join')}
              >
                <LogIn className="w-6 h-6 mr-2" />
                Bli med
              </Button>
            </div>
          </>
        )}

        {mode === 'create' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Opprett Challenge - Oppgave {currentModule.id}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ditt navn
                </label>
                <Input
                  placeholder="Skriv inn navnet ditt..."
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  maxLength={20}
                />
              </div>

              {/* Challenge type info */}
              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${challengeTypeInfo?.gradient || currentModule.gradient} flex items-center justify-center text-2xl text-white`}
                  >
                    {challengeTypeInfo?.icon || '🎯'}
                  </div>
                  <div>
                    <div className="font-semibold">{currentModule.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {currentModule.description}
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMode('select');
                    setError(null);
                  }}
                >
                  Tilbake
                </Button>
                <Button
                  className={`flex-1 bg-gradient-to-br ${currentModule.gradient} hover:opacity-90`}
                  onClick={handleCreateChallenge}
                  disabled={!nameInput.trim() || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Zap className="w-4 h-4 mr-2 animate-pulse" />
                      Oppretter...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Opprett Challenge
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {mode === 'join' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogIn className="w-5 h-5" />
                Bli med i Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ditt navn
                </label>
                <Input
                  placeholder="Skriv inn navnet ditt..."
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  maxLength={20}
                />
              </div>

              {/* Code input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Challenge-kode
                </label>
                <Input
                  ref={codeInputRef}
                  placeholder="000000"
                  value={joinCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    setJoinCode(value);
                  }}
                  maxLength={6}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="text-center text-3xl tracking-[0.5em] font-mono"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Skriv inn 6-sifret kode fra den som opprettet challengen
                </p>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMode('select');
                    setError(null);
                    setJoinCode('');
                  }}
                >
                  Tilbake
                </Button>
                <Button
                  id="join-button"
                  className={`flex-1 bg-gradient-to-br ${currentModule.gradient} hover:opacity-90`}
                  onClick={handleJoinChallenge}
                  disabled={joinCode.length !== 6 || !nameInput.trim() || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Zap className="w-4 h-4 mr-2 animate-pulse" />
                      Blir med...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Bli med
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* How it works */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Slik fungerer det</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">1</Badge>
                <span>En person oppretter en challenge og får en 6-sifret kode</span>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">2</Badge>
                <span>Del koden med vennene dine så de kan bli med</span>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">3</Badge>
                <span>Når alle er klare, starter den som opprettet spillet</span>
              </li>
              <li className="flex gap-3">
                <Badge variant="outline" className="shrink-0">4</Badge>
                <span>Alle løser de samme 15 oppgavene fra Oppgave {currentModule.id} - førstemann ferdig vinner!</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

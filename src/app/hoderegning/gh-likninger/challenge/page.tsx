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
import { useRouter } from "next/navigation";
import {
  Users,
  Plus,
  LogIn,
  Trophy,
  Timer,
  Zap,
  Equal,
} from "lucide-react";
import { generateChallengeCode, generateChallengeProblems, CHALLENGE_TYPES } from "@/lib/challenge/problems";
import { createChallenge, joinChallenge, findChallengeByCode, usePlayerId, usePlayerName } from "@/lib/challenge/hooks";
import type { ChallengeType } from "@/lib/supabase/types";

const MODULE_INFO = {
  name: "Likninger",
  description: "Løs likninger for x",
  gradient: "from-emerald-500 to-teal-600",
};

export default function LikningerChallengePage() {
  const router = useRouter();
  const playerId = usePlayerId();
  const [playerName, setPlayerName] = usePlayerName();

  const [mode, setMode] = useState<'select' | 'create' | 'join'>('select');
  const [joinCode, setJoinCode] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);

  const challengeType: ChallengeType = 'likninger';
  const challengeTypeInfo = CHALLENGE_TYPES[challengeType as keyof typeof CHALLENGE_TYPES];

  useEffect(() => {
    if (playerName) {
      setNameInput(playerName);
    }
  }, [playerName]);

  useEffect(() => {
    if (mode === 'join' && codeInputRef.current) {
      setTimeout(() => codeInputRef.current?.focus(), 100);
    }
  }, [mode]);

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

      setPlayerName(nameInput.trim());
      await joinChallenge(challenge.id, playerId, nameInput.trim(), true);
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

      setPlayerName(nameInput.trim());
      await joinChallenge(challenge.id, playerId, nameInput.trim(), false);
      router.push(`/hoderegning/challenge/${challenge.code}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'En feil oppstod');
    } finally {
      setIsLoading(false);
    }
  };

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
              <BreadcrumbLink href="/hoderegning/gh-likninger">Likninger</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Challenge</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`rounded-lg bg-gradient-to-br ${MODULE_INFO.gradient} p-3`}>
              <Equal className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Challenge: {MODULE_INFO.name}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {MODULE_INFO.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-4">
            <Users className="w-8 h-8 text-emerald-500 mb-2" />
            <span className="text-sm font-medium">Multiplayer</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Timer className="w-8 h-8 text-teal-500 mb-2" />
            <span className="text-sm font-medium">15 oppgaver</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-sm font-medium">Raskest vinner</span>
          </div>
        </div>

        {mode === 'select' && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Button
              size="lg"
              className={`h-24 text-lg bg-gradient-to-br ${MODULE_INFO.gradient} hover:opacity-90`}
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
        )}

        {mode === 'create' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Opprett Challenge - {MODULE_INFO.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${challengeTypeInfo?.gradient || MODULE_INFO.gradient} flex items-center justify-center text-2xl text-white`}
                  >
                    {challengeTypeInfo?.icon || '='}
                  </div>
                  <div>
                    <div className="font-semibold">{MODULE_INFO.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {MODULE_INFO.description}
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
                  className={`flex-1 bg-gradient-to-br ${MODULE_INFO.gradient} hover:opacity-90`}
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
                  className={`flex-1 bg-gradient-to-br ${MODULE_INFO.gradient} hover:opacity-90`}
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
                <span>Alle løser de samme 15 likningene - førstemann ferdig vinner!</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

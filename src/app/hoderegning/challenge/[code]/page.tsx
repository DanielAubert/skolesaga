"use client";

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Copy,
  Check,
  Crown,
  CheckCircle,
  Circle,
  Play,
  Loader2,
  Share2,
} from "lucide-react";
import { CHALLENGE_TYPES } from "@/lib/challenge/problems";
import {
  useChallengeSubscription,
  usePlayerId,
  setPlayerReady,
  startChallenge,
  findChallengeByCode,
} from "@/lib/challenge/hooks";
import type { ChallengeType } from "@/lib/supabase/types";

interface PageProps {
  params: Promise<{ code: string }>;
}

export default function LobbyPage({ params }: PageProps) {
  const { code } = use(params);
  const router = useRouter();
  const playerId = usePlayerId();

  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const { challenge, players, isLoading, error } = useChallengeSubscription(challengeId);

  // Find challenge by code on mount
  useEffect(() => {
    const findChallenge = async () => {
      const found = await findChallengeByCode(code);
      if (found) {
        setChallengeId(found.id);
      }
      setInitialLoading(false);
    };
    findChallenge();
  }, [code]);

  // Redirect to play when game starts
  useEffect(() => {
    if (challenge?.status === 'playing') {
      // Start countdown
      setCountdown(3);
    }
  }, [challenge?.status]);

  // Countdown timer
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      router.push(`/hoderegning/challenge/${code}/play`);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, code, router]);

  const currentPlayer = players.find((p) => p.player_id === playerId);
  const isHost = currentPlayer?.is_host ?? false;
  const allReady = players.length > 0 && players.every((p) => p.is_ready);
  const challengeInfo = challenge?.challenge_type
    ? CHALLENGE_TYPES[challenge.challenge_type as ChallengeType]
    : null;

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/hoderegning/challenge/${code}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bli med i hoderegnings-challenge!',
          text: `Bli med i min challenge! Kode: ${code}`,
          url,
        });
      } catch {
        handleCopyCode();
      }
    } else {
      handleCopyCode();
    }
  };

  const handleToggleReady = async () => {
    if (!playerId || !challengeId) return;
    await setPlayerReady(playerId, challengeId, !currentPlayer?.is_ready);
  };

  const handleStartGame = async () => {
    if (!challengeId || !isHost) return;
    await startChallenge(challengeId);
  };

  if (initialLoading || isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !challenge) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <MainNav />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">
                {error || 'Fant ikke denne challengen'}
              </p>
              <Button onClick={() => router.push('/hoderegning/challenge')}>
                Tilbake til Challenge
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Countdown overlay
  if (countdown !== null) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <MainNav />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-9xl font-bold text-primary animate-pulse">
              {countdown === 0 ? 'GO!' : countdown}
            </div>
            <p className="text-2xl text-muted-foreground mt-4">
              {countdown === 0 ? 'Spillet starter!' : 'Gjør deg klar...'}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <BreadcrumbLink href="/hoderegning/challenge">Challenge</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Lobby</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Challenge Code */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Del denne koden med andre:
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="text-4xl md:text-5xl font-mono font-bold tracking-widest bg-muted px-6 py-3 rounded-lg">
                  {code}
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleCopyCode}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenge Info */}
        {challengeInfo && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${challengeInfo.gradient} flex items-center justify-center text-3xl text-white`}
                >
                  {challengeInfo.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{challengeInfo.name}</h2>
                  <p className="text-muted-foreground">{challengeInfo.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    15 oppgaver - førstemann ferdig vinner!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Players */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Spillere ({players.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {players.map((player) => (
                <div
                  key={player.id}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    player.player_id === playerId
                      ? 'bg-primary/5 border-primary/20'
                      : 'bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {player.is_host && (
                      <Crown className="w-5 h-5 text-yellow-500" />
                    )}
                    <span className="font-medium">
                      {player.player_name}
                      {player.player_id === playerId && (
                        <span className="text-muted-foreground ml-2">(deg)</span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {player.is_ready ? (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Klar
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <Circle className="w-3 h-3 mr-1" />
                        Venter
                      </Badge>
                    )}
                  </div>
                </div>
              ))}

              {players.length === 1 && (
                <p className="text-center text-muted-foreground py-4">
                  Venter på flere spillere...
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          {!currentPlayer?.is_ready && (
            <Button
              size="lg"
              className="w-full"
              onClick={handleToggleReady}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Jeg er klar!
            </Button>
          )}

          {currentPlayer?.is_ready && !isHost && (
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={handleToggleReady}
            >
              <Circle className="w-5 h-5 mr-2" />
              Ikke klar likevel
            </Button>
          )}

          {isHost && (
            <Button
              size="lg"
              className="w-full"
              disabled={!allReady || players.length < 1}
              onClick={handleStartGame}
            >
              <Play className="w-5 h-5 mr-2" />
              {allReady
                ? 'Start spillet!'
                : `Venter på at alle skal bli klare (${players.filter((p) => p.is_ready).length}/${players.length})`}
            </Button>
          )}

          {!isHost && currentPlayer?.is_ready && (
            <p className="text-center text-muted-foreground">
              Venter på at verten skal starte spillet...
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

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
  Trophy,
  Medal,
  Timer,
  RotateCcw,
  Home,
  Loader2,
  Crown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { CHALLENGE_TYPES } from "@/lib/challenge/problems";
import {
  useChallengeSubscription,
  usePlayerId,
  findChallengeByCode,
} from "@/lib/challenge/hooks";
import type { ChallengeType } from "@/lib/supabase/types";

// Helper function to get next challenge info
function getNextChallengeInfo(challengeType: string | undefined): { url: string; name: string } | null {
  if (!challengeType) return null;

  // Parse challenge type like "pluss-minus-2" or "tallfolgere-5"
  const match = challengeType.match(/^(.+)-(\d+)$/);
  if (!match) return null;

  const [, prefix, numStr] = match;
  const currentNum = parseInt(numStr);
  const nextNum = currentNum + 1;
  const nextType = `${prefix}-${nextNum}` as ChallengeType;

  // Check if next challenge type exists
  if (!(nextType in CHALLENGE_TYPES)) return null;

  // Map prefix to route
  const routeMap: Record<string, string> = {
    'pluss-minus': 'gh-pluss-minus',
    'tallfolgere': 'gh-tallfolgere-ganging-kvadratrot',
    'divisjon-brok': 'gh-divisjon-brok',
    'negative-tall': 'gh-negative-tall-regnerekkefolge',
  };

  const route = routeMap[prefix];
  if (!route) return null;

  const nextInfo = CHALLENGE_TYPES[nextType];
  return {
    url: `/hoderegning/${route}/oppgave-${nextNum}/challenge`,
    name: nextInfo.name,
  };
}

interface PageProps {
  params: Promise<{ code: string }>;
}

export default function ResultsPage({ params }: PageProps) {
  const { code } = use(params);
  const router = useRouter();
  const playerId = usePlayerId();

  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  const { challenge, players, isLoading } = useChallengeSubscription(challengeId);

  // Find challenge on mount
  useEffect(() => {
    const findAndSetChallenge = async () => {
      const found = await findChallengeByCode(code);
      if (found) {
        setChallengeId(found.id);
      } else {
        router.push('/hoderegning/challenge');
      }
      setInitialLoading(false);
    };
    findAndSetChallenge();
  }, [code, router]);

  // Sort players by time (finished players first, then by time)
  const sortedPlayers = [...players].sort((a, b) => {
    // Both finished - sort by time
    if (a.time_ms !== null && b.time_ms !== null) {
      return a.time_ms - b.time_ms;
    }
    // Only a finished
    if (a.time_ms !== null) return -1;
    // Only b finished
    if (b.time_ms !== null) return 1;
    // Neither finished - sort by progress
    return b.current_problem - a.current_problem;
  });

  const challengeInfo = challenge?.challenge_type
    ? CHALLENGE_TYPES[challenge.challenge_type as ChallengeType]
    : null;

  const formatTime = (ms: number | null) => {
    if (ms === null) return '-';
    const seconds = (ms / 1000).toFixed(1);
    return `${seconds}s`;
  };

  const getPlacementIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">{index + 1}</span>;
    }
  };

  const getPlacementBg = (index: number, isCurrentPlayer: boolean) => {
    if (isCurrentPlayer) {
      return 'bg-primary/10 border-primary/30';
    }
    switch (index) {
      case 0:
        return 'bg-yellow-500/10 border-yellow-500/30';
      case 1:
        return 'bg-gray-400/10 border-gray-400/30';
      case 2:
        return 'bg-amber-600/10 border-amber-600/30';
      default:
        return 'bg-muted/50 border-border';
    }
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

  const winner = sortedPlayers[0];
  const currentPlayer = players.find((p) => p.player_id === playerId);
  const currentPlayerRank = sortedPlayers.findIndex((p) => p.player_id === playerId) + 1;

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
              <BreadcrumbPage>Resultater</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Winner announcement */}
        {winner && winner.time_ms !== null && (
          <Card className="mb-6 overflow-hidden">
            <div className={`bg-gradient-to-br ${challengeInfo?.gradient || 'from-yellow-400 to-yellow-600'} text-white p-8 text-center`}>
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">
                {winner.player_name} vant!
              </h1>
              <p className="text-xl opacity-90">
                {formatTime(winner.time_ms)}
              </p>
            </div>
          </Card>
        )}

        {/* Your result */}
        {currentPlayer && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Din plassering</p>
                  <p className="text-3xl font-bold">#{currentPlayerRank}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Din tid</p>
                  <p className="text-3xl font-mono font-bold text-primary">
                    {formatTime(currentPlayer.time_ms)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Challenge info */}
        {challengeInfo && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${challengeInfo.gradient} flex items-center justify-center text-2xl text-white`}
                >
                  {challengeInfo.icon}
                </div>
                <div>
                  <h2 className="font-bold">{challengeInfo.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    Kode: {code}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Full scoreboard */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Resultattavle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sortedPlayers.map((player, index) => (
                <div
                  key={player.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 ${getPlacementBg(
                    index,
                    player.player_id === playerId
                  )}`}
                >
                  <div className="flex items-center gap-4">
                    {getPlacementIcon(index)}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          {player.player_name}
                        </span>
                        {player.is_host && (
                          <Crown className="w-4 h-4 text-yellow-500" />
                        )}
                        {player.player_id === playerId && (
                          <Badge variant="outline" className="text-xs">
                            deg
                          </Badge>
                        )}
                      </div>
                      {player.time_ms === null && (
                        <p className="text-sm text-muted-foreground">
                          {player.current_problem}/15 oppgaver
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono text-lg">
                      {formatTime(player.time_ms)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push('/hoderegning/challenge')}
          >
            <Home className="w-4 h-4 mr-2" />
            Ny challenge
          </Button>
          {(() => {
            const nextChallenge = getNextChallengeInfo(challenge?.challenge_type);
            if (nextChallenge) {
              return (
                <Button asChild className="flex-1">
                  <Link href={nextChallenge.url}>
                    Neste challenge
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              );
            }
            return null;
          })()}
          <Button
            variant="ghost"
            className="flex-1"
            onClick={() => router.push('/hoderegning')}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Til Hoderegning
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

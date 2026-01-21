'use client';

import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TrendingUp, Flame, Target, Award } from 'lucide-react';
import { useSkillLevel, type SkillLevel, type Difficulty } from '@/lib/textbook/hooks';

interface SkillLevelIndicatorProps {
  courseId: string;
  chapterId?: string;
  compact?: boolean;  // For visning i sidebar
}

const difficultyLabels: Record<Difficulty, string> = {
  lett: 'Lett',
  medium: 'Middels',
  vanskelig: 'Vanskelig',
};

const difficultyColors: Record<Difficulty, string> = {
  lett: 'bg-green-500',
  medium: 'bg-yellow-500',
  vanskelig: 'bg-red-500',
};

function getSkillLabel(level: number): { label: string; color: string } {
  if (level < 0.25) return { label: 'Nybegynner', color: 'text-blue-500' };
  if (level < 0.5) return { label: 'Under utvikling', color: 'text-green-500' };
  if (level < 0.75) return { label: 'Øvet', color: 'text-yellow-500' };
  return { label: 'Mester', color: 'text-purple-500' };
}

export function SkillLevelIndicator({
  courseId,
  chapterId,
  compact = false,
}: SkillLevelIndicatorProps) {
  const { skillLevel, recommendedDifficulty, isLoading } = useSkillLevel(courseId, chapterId);

  if (isLoading) {
    return compact ? (
      <div className="h-6 w-24 bg-muted animate-pulse rounded" />
    ) : (
      <Card>
        <CardContent className="pt-4">
          <div className="space-y-3">
            <div className="h-4 w-32 bg-muted animate-pulse rounded" />
            <div className="h-2 bg-muted animate-pulse rounded" />
          </div>
        </CardContent>
      </Card>
    );
  }

  // Hvis ingen data ennå
  if (!skillLevel) {
    return compact ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="outline" className="gap-1">
              <Target className="h-3 w-3" />
              Start
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Løs oppgaver for å se ditt ferdighetsnivå</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Target className="h-4 w-4" />
            Ditt nivå
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Løs oppgaver for å se ditt ferdighetsnivå og få personlige anbefalinger.
          </p>
        </CardContent>
      </Card>
    );
  }

  const level = skillLevel.skill_level;
  const percentage = Math.round(level * 100);
  const { label, color } = getSkillLabel(level);

  if (compact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2">
              <div className="flex-1 max-w-[100px]">
                <Progress value={percentage} className="h-2" />
              </div>
              <Badge variant="outline" className={`gap-1 ${color}`}>
                {skillLevel.streak_current > 0 && (
                  <Flame className="h-3 w-3 text-orange-500" />
                )}
                {percentage}%
              </Badge>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-1">
              <p className="font-medium">{label}</p>
              <p className="text-xs">Anbefalt: {difficultyLabels[recommendedDifficulty]}</p>
              {skillLevel.streak_current > 0 && (
                <p className="text-xs">Streak: {skillLevel.streak_current} riktige på rad</p>
              )}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Ditt nivå
          </span>
          <span className={`text-lg font-bold ${color}`}>{percentage}%</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className={color}>{label}</span>
            <span className="text-muted-foreground">
              {skillLevel.correct_attempts}/{skillLevel.total_attempts} riktige
            </span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Anbefalt nivå:</span>
          </div>
          <Badge className={difficultyColors[recommendedDifficulty]}>
            {difficultyLabels[recommendedDifficulty]}
          </Badge>
        </div>

        {/* Streak */}
        {skillLevel.streak_current > 0 && (
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm">Streak</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-orange-500">{skillLevel.streak_current}</span>
              {skillLevel.streak_longest > skillLevel.streak_current && (
                <span className="text-xs text-muted-foreground">
                  (beste: {skillLevel.streak_longest})
                </span>
              )}
            </div>
          </div>
        )}

        {/* Badge for mestring */}
        {level >= 0.8 && (
          <div className="flex items-center justify-center pt-2 border-t">
            <Badge variant="outline" className="gap-1 bg-purple-50 dark:bg-purple-950/30 border-purple-300 dark:border-purple-700">
              <Award className="h-3 w-3 text-purple-500" />
              Mestrer dette emnet!
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Eksporter også en enkel versjon for bruk i oppgavelisten
export function SkillLevelBadge({
  skillLevel,
  recommendedDifficulty,
}: {
  skillLevel: SkillLevel | null;
  recommendedDifficulty: Difficulty;
}) {
  if (!skillLevel) return null;

  const percentage = Math.round(skillLevel.skill_level * 100);
  const { color } = getSkillLabel(skillLevel.skill_level);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className={`gap-1 ${color}`}>
            <TrendingUp className="h-3 w-3" />
            {percentage}%
            {skillLevel.streak_current > 0 && (
              <Flame className="h-3 w-3 text-orange-500 ml-1" />
            )}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p>Ferdighetsnivå: {percentage}%</p>
            <p className="text-xs">Anbefalt: {difficultyLabels[recommendedDifficulty]}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

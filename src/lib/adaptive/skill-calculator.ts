/**
 * Skill Calculator - Beregner elevens ferdighetsnivå basert på oppgaveforsøk
 *
 * Bruker en vektet algoritme som tar hensyn til:
 * - Vanskelighetsgrad (lett, medium, vanskelig)
 * - Antall forsøk
 * - Nylige prestasjoner (tidsvekting)
 * - Streak (riktige svar på rad)
 */

export type Difficulty = 'lett' | 'medium' | 'vanskelig';

export interface ExerciseAttempt {
  difficulty: Difficulty;
  isCorrect: boolean;
  attemptCount: number;
  createdAt: Date;
}

export interface SkillCalculationResult {
  skillLevel: number;           // 0.0 - 1.0
  recommendedDifficulty: Difficulty;
  confidence: number;           // 0.0 - 1.0 (hvor sikker vi er på nivået)
  streakCurrent: number;
  streakLongest: number;
  totalAttempts: number;
  correctAttempts: number;
}

// Vekting basert på vanskelighetsgrad
const DIFFICULTY_WEIGHTS: Record<Difficulty, number> = {
  lett: 0.3,
  medium: 0.6,
  vanskelig: 1.0,
};

// Poeng for riktig svar per vanskelighetsgrad
const CORRECT_POINTS: Record<Difficulty, number> = {
  lett: 0.1,
  medium: 0.15,
  vanskelig: 0.25,
};

// Trekk for feil svar per vanskelighetsgrad (mindre enn poeng for riktig)
const INCORRECT_PENALTY: Record<Difficulty, number> = {
  lett: 0.08,
  medium: 0.1,
  vanskelig: 0.05,  // Mindre straff for å feile på vanskelige oppgaver
};

// Tidsbasert vekting - nyere forsøk teller mer
function getTimeWeight(createdAt: Date, now: Date = new Date()): number {
  const daysDiff = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);

  if (daysDiff < 1) return 1.0;      // Siste dag: full vekt
  if (daysDiff < 7) return 0.8;      // Siste uke: 80%
  if (daysDiff < 30) return 0.5;     // Siste måned: 50%
  return 0.3;                         // Eldre: 30%
}

// Forsøksbasert justering - flere forsøk reduserer verdien
function getAttemptMultiplier(attemptCount: number): number {
  if (attemptCount === 1) return 1.0;
  if (attemptCount === 2) return 0.7;
  if (attemptCount === 3) return 0.5;
  return 0.3;
}

/**
 * Beregn ferdighetsnivå basert på oppgaveforsøk
 */
export function calculateSkillLevel(attempts: ExerciseAttempt[]): SkillCalculationResult {
  if (attempts.length === 0) {
    return {
      skillLevel: 0.5,  // Starter på midten
      recommendedDifficulty: 'medium',
      confidence: 0,
      streakCurrent: 0,
      streakLongest: 0,
      totalAttempts: 0,
      correctAttempts: 0,
    };
  }

  const now = new Date();
  let totalWeight = 0;
  let weightedScore = 0;
  let streakCurrent = 0;
  let streakLongest = 0;
  let currentStreak = 0;
  let correctAttempts = 0;

  // Sorter forsøk etter tid (nyeste først for streak-beregning)
  const sortedAttempts = [...attempts].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  for (const attempt of sortedAttempts) {
    const timeWeight = getTimeWeight(attempt.createdAt, now);
    const attemptMultiplier = getAttemptMultiplier(attempt.attemptCount);
    const difficultyWeight = DIFFICULTY_WEIGHTS[attempt.difficulty];

    const weight = timeWeight * attemptMultiplier * difficultyWeight;
    totalWeight += weight;

    if (attempt.isCorrect) {
      correctAttempts++;
      weightedScore += weight * CORRECT_POINTS[attempt.difficulty];

      // Streak-beregning (kun for nyeste forsøk i rekkefølge)
      if (currentStreak === sortedAttempts.indexOf(attempt)) {
        currentStreak++;
      }
    } else {
      weightedScore -= weight * INCORRECT_PENALTY[attempt.difficulty];

      // Streak brytes
      if (streakCurrent === 0) {
        streakCurrent = currentStreak;
      }
      currentStreak = 0;
    }
  }

  // Hvis alle er riktige
  if (streakCurrent === 0) {
    streakCurrent = currentStreak;
  }
  streakLongest = Math.max(streakLongest, streakCurrent, currentStreak);

  // Normaliser ferdighetsnivå til 0-1
  // Startpunkt er 0.5, og vi justerer basert på score
  const normalizedScore = Math.max(0, Math.min(1, 0.5 + (weightedScore / Math.max(totalWeight, 1))));

  // Konfidensberegning basert på antall forsøk
  const confidence = Math.min(1, attempts.length / 20);  // Full konfidensetter 20 forsøk

  return {
    skillLevel: normalizedScore,
    recommendedDifficulty: getRecommendedDifficulty(normalizedScore),
    confidence,
    streakCurrent,
    streakLongest: Math.max(streakLongest, streakCurrent),
    totalAttempts: attempts.length,
    correctAttempts,
  };
}

/**
 * Anbefal vanskelighetsgrad basert på ferdighetsnivå
 */
export function getRecommendedDifficulty(skillLevel: number): Difficulty {
  if (skillLevel < 0.35) return 'lett';
  if (skillLevel < 0.65) return 'medium';
  return 'vanskelig';
}

/**
 * Sjekk om en oppgave er anbefalt for eleven
 */
export function isExerciseRecommended(
  exerciseDifficulty: Difficulty,
  recommendedDifficulty: Difficulty
): boolean {
  return exerciseDifficulty === recommendedDifficulty;
}

/**
 * Beregn oppdatert ferdighetsnivå etter ett nytt forsøk
 * (Raskere enn å beregne hele historikken på nytt)
 */
export function updateSkillLevel(
  currentSkillLevel: number,
  attempt: ExerciseAttempt
): number {
  const difficultyWeight = DIFFICULTY_WEIGHTS[attempt.difficulty];
  const attemptMultiplier = getAttemptMultiplier(attempt.attemptCount);

  // Læringsrate - hvor raskt nivået justeres
  const learningRate = 0.1 * difficultyWeight * attemptMultiplier;

  if (attempt.isCorrect) {
    // Riktig svar: beveg mot 1.0, mer for vanskelige oppgaver
    const targetLevel = Math.min(1.0, currentSkillLevel + CORRECT_POINTS[attempt.difficulty]);
    return currentSkillLevel + learningRate * (targetLevel - currentSkillLevel);
  } else {
    // Feil svar: beveg mot 0.0, mindre for vanskelige oppgaver
    const targetLevel = Math.max(0.0, currentSkillLevel - INCORRECT_PENALTY[attempt.difficulty]);
    return currentSkillLevel - learningRate * (currentSkillLevel - targetLevel);
  }
}

/**
 * Generer tilbakemelding basert på prestasjon
 */
export function generateFeedback(result: SkillCalculationResult): string {
  const { skillLevel, streakCurrent, correctAttempts, totalAttempts } = result;
  const accuracy = totalAttempts > 0 ? (correctAttempts / totalAttempts) * 100 : 0;

  const messages: string[] = [];

  // Nivåbasert tilbakemelding
  if (skillLevel >= 0.8) {
    messages.push('Fantastisk! Du mestrer dette stoffet veldig bra.');
  } else if (skillLevel >= 0.6) {
    messages.push('Bra jobbet! Du er på god vei.');
  } else if (skillLevel >= 0.4) {
    messages.push('Du gjør fremgang. Fortsett å øve!');
  } else {
    messages.push('Ikke gi opp! Prøv noen lettere oppgaver først.');
  }

  // Streak-basert tilbakemelding
  if (streakCurrent >= 5) {
    messages.push(`Imponerende streak: ${streakCurrent} riktige på rad!`);
  } else if (streakCurrent >= 3) {
    messages.push(`Bra streak: ${streakCurrent} riktige på rad!`);
  }

  // Nøyaktighet
  if (accuracy >= 80 && totalAttempts >= 5) {
    messages.push(`${Math.round(accuracy)}% nøyaktighet - utmerket!`);
  }

  return messages.join(' ');
}

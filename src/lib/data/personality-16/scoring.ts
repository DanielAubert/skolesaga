import type { Dimension, TypeLetter, DimensionScore, P16Answer, P16Result } from '@/lib/types/personality-16';
import { DIMENSION_ORDER } from '@/lib/types/personality-16';

const DIMENSION_POLES: Record<Dimension, [TypeLetter, TypeLetter]> = {
  EI: ['E', 'I'],
  SN: ['S', 'N'],
  TF: ['T', 'F'],
  JP: ['J', 'P'],
};

export function calculateP16Result(answers: P16Answer[]): P16Result {
  const dimensions = {} as Record<Dimension, DimensionScore>;
  let typeCode = '';

  for (const dim of DIMENSION_ORDER) {
    const [poleA, poleB] = DIMENSION_POLES[dim];
    const dimAnswers = answers.filter(a => a.dimension === dim);

    // For each answer, a score of 5 on a poleA item means strong poleA,
    // a score of 1 on a poleA item means strong poleB
    let poleATotal = 0;
    let poleBTotal = 0;

    for (const a of dimAnswers) {
      if (a.pole === poleA) {
        // Agreeing with this item favors poleA
        poleATotal += a.score;
        poleBTotal += 6 - a.score;
      } else {
        // Agreeing with this item favors poleB
        poleBTotal += a.score;
        poleATotal += 6 - a.score;
      }
    }

    const total = poleATotal + poleBTotal;
    const scoreA = total > 0 ? Math.round((poleATotal / total) * 100) : 50;
    const scoreB = 100 - scoreA;
    const winner = scoreA >= scoreB ? poleA : poleB;

    dimensions[dim] = {
      dimension: dim,
      poleA,
      poleB,
      scoreA,
      scoreB,
      winner,
    };

    typeCode += winner;
  }

  return {
    type: typeCode,
    dimensions,
    answers,
    completedAt: new Date().toISOString(),
  };
}

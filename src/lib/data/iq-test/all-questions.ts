import type { IQQuestion } from '@/lib/types/iq-test';
import { questionsTallresonnering } from './questions-tallresonnering';
import { questionsVerbal } from './questions-verbal';
import { questionsLogisk } from './questions-logisk';
import { questionsMonstergjenkjenning } from './questions-monstergjenkjenning';
import { questionsRomlig } from './questions-romlig';
import { questionsArbeidsminne } from './questions-arbeidsminne';

export const allQuestions: IQQuestion[] = [
  ...questionsTallresonnering,
  ...questionsVerbal,
  ...questionsLogisk,
  ...questionsMonstergjenkjenning,
  ...questionsRomlig,
  ...questionsArbeidsminne,
];

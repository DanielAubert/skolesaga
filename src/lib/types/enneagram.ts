export type EnneagramType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface EnneagramItem {
  id: string;
  type: EnneagramType;
  text: string;
  reversed: boolean;
}

export interface EnneagramAnswer {
  itemId: string;
  type: EnneagramType;
  score: number; // 1-5
  effectiveScore: number;
  timeSpent: number;
}

export interface TypeScore {
  type: EnneagramType;
  rawMean: number;
  percentile: number;
  label: string;
}

export interface EnneagramResult {
  typeScores: Record<EnneagramType, TypeScore>;
  dominantType: EnneagramType;
  wing: EnneagramType;
  answers: EnneagramAnswer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const TYPE_NAMES: Record<EnneagramType, string> = {
  1: 'Reformatoren',
  2: 'Hjelperen',
  3: 'Prestereren',
  4: 'Individualisten',
  5: 'Observatøren',
  6: 'Lojallisten',
  7: 'Entusiasten',
  8: 'Utfordreren',
  9: 'Fredsmakeren',
};

export const TYPE_SUBTITLES: Record<EnneagramType, string> = {
  1: 'Den prinsippfaste idealisten',
  2: 'Den omsorgsfulle giveren',
  3: 'Den ambisiøse oppnåeren',
  4: 'Den kreative individualisten',
  5: 'Den analytiske tenkeren',
  6: 'Den lojale skeptikeren',
  7: 'Den entusiastiske optimisten',
  8: 'Den kraftfulle lederen',
  9: 'Den fredselskende diplomaten',
};

export const TYPE_DESCRIPTIONS: Record<EnneagramType, string> = {
  1: 'Du har en sterk indre kompassnål for rett og galt. Du er ansvarsfull, grundig og ønsker å forbedre verden rundt deg.',
  2: 'Du er varm, empatisk og opptatt av andres behov. Du finner mening i å hjelpe og støtte menneskene rundt deg.',
  3: 'Du er målbevisst, energisk og tilpasningsdyktig. Du motiveres av å oppnå resultater og bli anerkjent for innsatsen.',
  4: 'Du er kreativ, sensitiv og autentisk. Du søker dybde og mening, og uttrykker deg gjerne gjennom kunst og følelser.',
  5: 'Du er analytisk, nysgjerrig og uavhengig. Du trives med å forstå verden gjennom observasjon og kunnskap.',
  6: 'Du er lojal, ansvarsfull og forutseende. Du er god til å identifisere risikoer og planlegge for ulike scenarioer.',
  7: 'Du er optimistisk, spontan og eventyrlysten. Du søker nye opplevelser og ser muligheter overalt.',
  8: 'Du er sterk, handlekraftig og beskyttende. Du tar naturlig ansvar og står opp for deg selv og andre.',
  9: 'Du er fredelig, tålmodig og inkluderende. Du er en naturlig megler som ser alle sider av en sak.',
};

export const TYPE_COLORS: Record<EnneagramType, string> = {
  1: 'from-sky-500 to-blue-600',
  2: 'from-rose-400 to-pink-600',
  3: 'from-amber-400 to-yellow-600',
  4: 'from-purple-500 to-violet-600',
  5: 'from-cyan-500 to-teal-600',
  6: 'from-indigo-400 to-blue-600',
  7: 'from-orange-400 to-amber-600',
  8: 'from-red-500 to-rose-600',
  9: 'from-emerald-400 to-green-600',
};

export const TYPE_CHART_COLORS: Record<EnneagramType, string> = {
  1: '#0ea5e9',
  2: '#f43f5e',
  3: '#f59e0b',
  4: '#a855f7',
  5: '#06b6d4',
  6: '#6366f1',
  7: '#f97316',
  8: '#ef4444',
  9: '#10b981',
};

export const ENNEAGRAM_ORDER: EnneagramType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

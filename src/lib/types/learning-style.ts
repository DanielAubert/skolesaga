export type LearningStyle = 'visual' | 'auditory' | 'readwrite' | 'kinesthetic';

export interface LearningItem {
  id: string;
  style: LearningStyle;
  text: string;
  reversed: boolean;
}

export interface LearningAnswer {
  itemId: string;
  style: LearningStyle;
  score: number; // 1-5
  effectiveScore: number;
  timeSpent: number;
}

export interface StyleScore {
  style: LearningStyle;
  rawMean: number;
  percentile: number;
  label: string;
}

export interface LearningResult {
  styleScores: Record<LearningStyle, StyleScore>;
  dominantStyle: LearningStyle;
  secondaryStyle: LearningStyle;
  answers: LearningAnswer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const STYLE_LABELS: Record<LearningStyle, string> = {
  visual: 'Visuell',
  auditory: 'Auditiv',
  readwrite: 'Lese/skrive',
  kinesthetic: 'Kinestetisk',
};

export const STYLE_DESCRIPTIONS: Record<LearningStyle, string> = {
  visual: 'Lærer best gjennom bilder, diagrammer, kart og visuelle fremstillinger',
  auditory: 'Lærer best gjennom lytting, diskusjoner og muntlige forklaringer',
  readwrite: 'Lærer best gjennom å lese tekst, ta notater og skrive sammendrag',
  kinesthetic: 'Lærer best gjennom praksis, eksperimenter og fysisk aktivitet',
};

export const STYLE_COLORS: Record<LearningStyle, string> = {
  visual: 'from-blue-500 to-cyan-600',
  auditory: 'from-purple-500 to-violet-600',
  readwrite: 'from-emerald-500 to-green-600',
  kinesthetic: 'from-orange-500 to-amber-600',
};

export const STYLE_CHART_COLORS: Record<LearningStyle, string> = {
  visual: '#3b82f6',
  auditory: '#a855f7',
  readwrite: '#10b981',
  kinesthetic: '#f97316',
};

export const STYLE_TIPS: Record<LearningStyle, string[]> = {
  visual: [
    'Bruk farger og markeringer i notatene dine',
    'Lag tankekart og diagrammer',
    'Se videoer og animasjoner om emnet',
    'Tegn skisser og illustrasjoner',
    'Bruk tabeller og grafer for å organisere informasjon',
    'Sett deg fremme i klasserommet for å se tavlen godt',
  ],
  auditory: [
    'Les pensum høyt for deg selv',
    'Diskuter stoffet med medstudenter',
    'Hør på podkaster og lydbok om emnet',
    'Forklar konsepter til andre med egne ord',
    'Ta opp forelesninger og hør på dem igjen',
    'Bruk rim og rytme for å huske fakta',
  ],
  readwrite: [
    'Skriv utfyllende notater i timen',
    'Lag sammendrag av hvert kapittel',
    'Skriv om pensum med egne ord',
    'Les læreboken grundig og merk viktige avsnitt',
    'Bruk stikkord og definisjoner',
    'Lag egne quizer og øvingsoppgaver',
  ],
  kinesthetic: [
    'Ta pauser og beveg deg mens du studerer',
    'Bruk praktiske eksempler og eksperimenter',
    'Lag modeller eller bygg ting for å forstå',
    'Øv gjennom rollespill eller simulering',
    'Skriv for hånd istedenfor å taste',
    'Kombiner studiene med fysisk aktivitet',
  ],
};

export const STYLE_ORDER: LearningStyle[] = ['visual', 'auditory', 'readwrite', 'kinesthetic'];

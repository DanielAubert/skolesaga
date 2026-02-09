export type RIASECArea = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RIASECItem {
  id: string;
  area: RIASECArea;
  text: string;
  reversed: boolean;
}

export interface RIASECAnswer {
  itemId: string;
  area: RIASECArea;
  score: number; // 1-5
  effectiveScore: number;
  timeSpent: number;
}

export interface AreaScore {
  area: RIASECArea;
  rawMean: number;
  percentile: number;
  label: string;
}

export interface RIASECResult {
  areaScores: Record<RIASECArea, AreaScore>;
  hollandCode: string; // top-3 letter code, e.g. "SAE"
  answers: RIASECAnswer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const AREA_LABELS: Record<RIASECArea, string> = {
  R: 'Realistisk',
  I: 'Utforskende',
  A: 'Kunstnerisk',
  S: 'Sosial',
  E: 'Entreprenant',
  C: 'Konvensjonell',
};

export const AREA_DESCRIPTIONS: Record<RIASECArea, string> = {
  R: 'Praktisk arbeid med verktøy, maskiner og fysiske materialer',
  I: 'Forskning, analyse og utforsking av ideer og teorier',
  A: 'Kreativt uttrykk gjennom kunst, musikk, skriving og design',
  S: 'Hjelpe, undervise og ta vare på andre mennesker',
  E: 'Ledelse, salg, overtalelse og forretning',
  C: 'Organisering, data, detaljer og systematisk arbeid',
};

export const AREA_COLORS: Record<RIASECArea, string> = {
  R: 'from-orange-500 to-red-600',
  I: 'from-blue-500 to-indigo-600',
  A: 'from-purple-500 to-fuchsia-600',
  S: 'from-emerald-500 to-green-600',
  E: 'from-amber-500 to-yellow-600',
  C: 'from-slate-500 to-gray-600',
};

export const AREA_CHART_COLORS: Record<RIASECArea, string> = {
  R: '#f97316',
  I: '#3b82f6',
  A: '#a855f7',
  S: '#10b981',
  E: '#f59e0b',
  C: '#64748b',
};

export const AREA_CAREERS: Record<RIASECArea, string[]> = {
  R: ['Ingeniør', 'Elektriker', 'Mekaniker', 'Kokk', 'Bonde', 'Idrettsutøver'],
  I: ['Forsker', 'Lege', 'Programmerer', 'Biolog', 'Matematiker', 'Psykolog'],
  A: ['Designer', 'Musiker', 'Forfatter', 'Arkitekt', 'Fotograf', 'Skuespiller'],
  S: ['Lærer', 'Sykepleier', 'Sosialarbeider', 'Rådgiver', 'Terapeut', 'Prest'],
  E: ['Leder', 'Advokat', 'Selger', 'Politiker', 'Gründer', 'Markedsfører'],
  C: ['Regnskapsfører', 'Økonom', 'Administrator', 'Bibliotekar', 'Bankansatt', 'Analytiker'],
};

export const AREA_ORDER: RIASECArea[] = ['R', 'I', 'A', 'S', 'E', 'C'];

export const AREA_ICONS_MAP = {
  R: 'Wrench',
  I: 'Microscope',
  A: 'Palette',
  S: 'Heart',
  E: 'TrendingUp',
  C: 'ClipboardList',
} as const;

import type { PersonalityItem } from '@/lib/types/personality-test';

export const neuroticismItems: PersonalityItem[] = [
  // Engstelse (anxiety)
  {
    id: 'N1',
    trait: 'neuroticism',
    facet: 'anxiety',
    text: 'Jeg bekymrer meg mye for ting som kan gå galt.',
    reversed: false,
  },
  {
    id: 'N2',
    trait: 'neuroticism',
    facet: 'anxiety',
    text: 'Jeg er sjelden engstelig eller urolig.',
    reversed: true,
  },
  {
    id: 'N3',
    trait: 'neuroticism',
    facet: 'anxiety',
    text: 'Jeg føler meg ofte nervøs og anspent.',
    reversed: false,
  },
  {
    id: 'N4',
    trait: 'neuroticism',
    facet: 'anxiety',
    text: 'Jeg takler stressende situasjoner rolig.',
    reversed: true,
  },
  // Emosjonell ustabilitet (emotional_volatility)
  {
    id: 'N5',
    trait: 'neuroticism',
    facet: 'emotional_volatility',
    text: 'Humøret mitt svinger mye fra dag til dag.',
    reversed: false,
  },
  {
    id: 'N6',
    trait: 'neuroticism',
    facet: 'emotional_volatility',
    text: 'Jeg er følelsesmessig stabil og rolig.',
    reversed: true,
  },
  {
    id: 'N7',
    trait: 'neuroticism',
    facet: 'emotional_volatility',
    text: 'Jeg blir lett irritert eller frustrert.',
    reversed: false,
  },
  {
    id: 'N8',
    trait: 'neuroticism',
    facet: 'emotional_volatility',
    text: 'Det skal mye til for at jeg mister besinnelsen.',
    reversed: true,
  },
  // Selvbevissthet (self_consciousness)
  {
    id: 'N9',
    trait: 'neuroticism',
    facet: 'self_consciousness',
    text: 'Jeg føler meg ofte utilstrekkelig sammenlignet med andre.',
    reversed: false,
  },
  {
    id: 'N10',
    trait: 'neuroticism',
    facet: 'self_consciousness',
    text: 'Jeg er komfortabel med den jeg er.',
    reversed: true,
  },
  {
    id: 'N11',
    trait: 'neuroticism',
    facet: 'self_consciousness',
    text: 'Jeg tenker mye på hva andre synes om meg.',
    reversed: false,
  },
  {
    id: 'N12',
    trait: 'neuroticism',
    facet: 'self_consciousness',
    text: 'Jeg lar meg sjelden påvirke av andres meninger om meg.',
    reversed: true,
  },
];

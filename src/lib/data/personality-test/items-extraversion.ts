import type { PersonalityItem } from '@/lib/types/personality-test';

export const extraversionItems: PersonalityItem[] = [
  // Sosialitet (sociability)
  {
    id: 'E1',
    trait: 'extraversion',
    facet: 'sociability',
    text: 'Jeg trives i selskap med mange mennesker.',
    reversed: false,
  },
  {
    id: 'E2',
    trait: 'extraversion',
    facet: 'sociability',
    text: 'Jeg foretrekker å tilbringe tid alene.',
    reversed: true,
  },
  {
    id: 'E3',
    trait: 'extraversion',
    facet: 'sociability',
    text: 'Jeg blir kjent med nye mennesker lett.',
    reversed: false,
  },
  {
    id: 'E4',
    trait: 'extraversion',
    facet: 'sociability',
    text: 'Store fester gjør meg sliten.',
    reversed: true,
  },
  // Selvhevdelse (assertiveness)
  {
    id: 'E5',
    trait: 'extraversion',
    facet: 'assertiveness',
    text: 'Jeg tar ofte ledelsen i gruppesammenhenger.',
    reversed: false,
  },
  {
    id: 'E6',
    trait: 'extraversion',
    facet: 'assertiveness',
    text: 'Jeg holder meg gjerne i bakgrunnen.',
    reversed: true,
  },
  {
    id: 'E7',
    trait: 'extraversion',
    facet: 'assertiveness',
    text: 'Jeg sier tydelig fra om hva jeg mener.',
    reversed: false,
  },
  {
    id: 'E8',
    trait: 'extraversion',
    facet: 'assertiveness',
    text: 'Jeg synes det er vanskelig å ta ordet i forsamlinger.',
    reversed: true,
  },
  // Positive følelser (positive_emotions)
  {
    id: 'E9',
    trait: 'extraversion',
    facet: 'positive_emotions',
    text: 'Jeg føler meg ofte glad og entusiastisk.',
    reversed: false,
  },
  {
    id: 'E10',
    trait: 'extraversion',
    facet: 'positive_emotions',
    text: 'Jeg opplever sjelden intens glede.',
    reversed: true,
  },
  {
    id: 'E11',
    trait: 'extraversion',
    facet: 'positive_emotions',
    text: 'Jeg ler mye og har det gøy med andre.',
    reversed: false,
  },
  {
    id: 'E12',
    trait: 'extraversion',
    facet: 'positive_emotions',
    text: 'Jeg er mer reservert enn de fleste.',
    reversed: true,
  },
];

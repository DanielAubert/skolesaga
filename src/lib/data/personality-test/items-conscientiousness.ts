import type { PersonalityItem } from '@/lib/types/personality-test';

export const conscientiousnessItems: PersonalityItem[] = [
  // Selvdisiplin (self_discipline)
  {
    id: 'C1',
    trait: 'conscientiousness',
    facet: 'self_discipline',
    text: 'Jeg fullfører oppgaver grundig og systematisk.',
    reversed: false,
  },
  {
    id: 'C2',
    trait: 'conscientiousness',
    facet: 'self_discipline',
    text: 'Jeg utsetter ofte ting til siste liten.',
    reversed: true,
  },
  {
    id: 'C3',
    trait: 'conscientiousness',
    facet: 'self_discipline',
    text: 'Når jeg begynner på noe, gjør jeg det ferdig.',
    reversed: false,
  },
  {
    id: 'C4',
    trait: 'conscientiousness',
    facet: 'self_discipline',
    text: 'Jeg har vanskelig for å disiplinere meg selv.',
    reversed: true,
  },
  // Orden og struktur (orderliness)
  {
    id: 'C5',
    trait: 'conscientiousness',
    facet: 'orderliness',
    text: 'Jeg liker at ting er ryddige og organiserte.',
    reversed: false,
  },
  {
    id: 'C6',
    trait: 'conscientiousness',
    facet: 'orderliness',
    text: 'Rommet mitt er ofte rotete.',
    reversed: true,
  },
  {
    id: 'C7',
    trait: 'conscientiousness',
    facet: 'orderliness',
    text: 'Jeg følger en fast rutine i hverdagen.',
    reversed: false,
  },
  {
    id: 'C8',
    trait: 'conscientiousness',
    facet: 'orderliness',
    text: 'Jeg glemmer ofte hvor jeg har lagt ting.',
    reversed: true,
  },
  // Målrettethet (achievement_striving)
  {
    id: 'C9',
    trait: 'conscientiousness',
    facet: 'achievement_striving',
    text: 'Jeg setter meg høye mål og jobber hardt for å nå dem.',
    reversed: false,
  },
  {
    id: 'C10',
    trait: 'conscientiousness',
    facet: 'achievement_striving',
    text: 'Jeg gjør bare det som er absolutt nødvendig.',
    reversed: true,
  },
  {
    id: 'C11',
    trait: 'conscientiousness',
    facet: 'achievement_striving',
    text: 'Jeg streber etter å gjøre mitt beste i alt jeg gjør.',
    reversed: false,
  },
  {
    id: 'C12',
    trait: 'conscientiousness',
    facet: 'achievement_striving',
    text: 'Jeg mangler ofte motivasjon til å gjennomføre planer.',
    reversed: true,
  },
];

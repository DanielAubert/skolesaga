import type { PersonalityItem } from '@/lib/types/personality-test';

export const agreeablenessItems: PersonalityItem[] = [
  // Tillit (trust)
  {
    id: 'A1',
    trait: 'agreeableness',
    facet: 'trust',
    text: 'Jeg tror de fleste mennesker har gode intensjoner.',
    reversed: false,
  },
  {
    id: 'A2',
    trait: 'agreeableness',
    facet: 'trust',
    text: 'Jeg er skeptisk til andres motiver.',
    reversed: true,
  },
  {
    id: 'A3',
    trait: 'agreeableness',
    facet: 'trust',
    text: 'Jeg har tillit til at andre vil gjøre det rette.',
    reversed: false,
  },
  {
    id: 'A4',
    trait: 'agreeableness',
    facet: 'trust',
    text: 'Jeg synes det er vanskelig å stole på fremmede.',
    reversed: true,
  },
  // Samarbeidsvilje (cooperation)
  {
    id: 'A5',
    trait: 'agreeableness',
    facet: 'cooperation',
    text: 'Jeg prøver å unngå konflikter og finne kompromisser.',
    reversed: false,
  },
  {
    id: 'A6',
    trait: 'agreeableness',
    facet: 'cooperation',
    text: 'Jeg har lett for å krangle med andre.',
    reversed: true,
  },
  {
    id: 'A7',
    trait: 'agreeableness',
    facet: 'cooperation',
    text: 'Jeg tilpasser meg gjerne for å få ting til å fungere.',
    reversed: false,
  },
  {
    id: 'A8',
    trait: 'agreeableness',
    facet: 'cooperation',
    text: 'Jeg insisterer på å gjøre ting på min måte.',
    reversed: true,
  },
  // Empati (empathy)
  {
    id: 'A9',
    trait: 'agreeableness',
    facet: 'empathy',
    text: 'Jeg føler med andre som har det vanskelig.',
    reversed: false,
  },
  {
    id: 'A10',
    trait: 'agreeableness',
    facet: 'empathy',
    text: 'Andres problemer angår meg lite.',
    reversed: true,
  },
  {
    id: 'A11',
    trait: 'agreeableness',
    facet: 'empathy',
    text: 'Jeg gjør gjerne noe ekstra for å hjelpe andre.',
    reversed: false,
  },
  {
    id: 'A12',
    trait: 'agreeableness',
    facet: 'empathy',
    text: 'Jeg tenker først og fremst på mine egne behov.',
    reversed: true,
  },
];

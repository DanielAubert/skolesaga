import type { PersonalityItem } from '@/lib/types/personality-test';

export const opennessItems: PersonalityItem[] = [
  // Fantasi (imagination)
  {
    id: 'O1',
    trait: 'openness',
    facet: 'imagination',
    text: 'Jeg har en livlig fantasi.',
    reversed: false,
  },
  {
    id: 'O2',
    trait: 'openness',
    facet: 'imagination',
    text: 'Jeg dagdrømmer sjelden.',
    reversed: true,
  },
  {
    id: 'O3',
    trait: 'openness',
    facet: 'imagination',
    text: 'Jeg liker å forestille meg nye verdener og muligheter.',
    reversed: false,
  },
  {
    id: 'O4',
    trait: 'openness',
    facet: 'imagination',
    text: 'Jeg foretrekker å holde meg til det konkrete fremfor det abstrakte.',
    reversed: true,
  },
  // Estetisk sans (artistic_interests)
  {
    id: 'O5',
    trait: 'openness',
    facet: 'artistic_interests',
    text: 'Jeg setter stor pris på kunst og estetikk.',
    reversed: false,
  },
  {
    id: 'O6',
    trait: 'openness',
    facet: 'artistic_interests',
    text: 'Jeg har liten interesse for kunstutstillinger eller museer.',
    reversed: true,
  },
  {
    id: 'O7',
    trait: 'openness',
    facet: 'artistic_interests',
    text: 'Vakker musikk eller kunst kan berøre meg dypt.',
    reversed: false,
  },
  {
    id: 'O8',
    trait: 'openness',
    facet: 'artistic_interests',
    text: 'Jeg synes poesi er kjedelig.',
    reversed: true,
  },
  // Intellektuell nysgjerrighet (intellectual_curiosity)
  {
    id: 'O9',
    trait: 'openness',
    facet: 'intellectual_curiosity',
    text: 'Jeg liker å utforske nye ideer og konsepter.',
    reversed: false,
  },
  {
    id: 'O10',
    trait: 'openness',
    facet: 'intellectual_curiosity',
    text: 'Jeg har lite interesse for filosofiske diskusjoner.',
    reversed: true,
  },
  {
    id: 'O11',
    trait: 'openness',
    facet: 'intellectual_curiosity',
    text: 'Jeg er nysgjerrig på mange forskjellige ting.',
    reversed: false,
  },
  {
    id: 'O12',
    trait: 'openness',
    facet: 'intellectual_curiosity',
    text: 'Jeg foretrekker det kjente fremfor det ukjente.',
    reversed: true,
  },
];

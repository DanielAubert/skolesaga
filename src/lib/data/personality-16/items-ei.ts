import type { P16Item } from '@/lib/types/personality-16';

export const eiItems: P16Item[] = [
  // 6 items where agreeing = E (Extraversion)
  {
    id: 'EI1',
    dimension: 'EI',
    text: 'Jeg får energi av å tilbringe tid med andre mennesker.',
    pole: 'E',
  },
  {
    id: 'EI2',
    dimension: 'EI',
    text: 'Jeg liker å snakke med nye mennesker og bli kjent med fremmede.',
    pole: 'E',
  },
  {
    id: 'EI3',
    dimension: 'EI',
    text: 'Jeg foretrekker å jobbe i grupper fremfor alene.',
    pole: 'E',
  },
  {
    id: 'EI4',
    dimension: 'EI',
    text: 'Jeg tenker best når jeg kan diskutere ideene mine med andre.',
    pole: 'E',
  },
  {
    id: 'EI5',
    dimension: 'EI',
    text: 'Jeg trives med å ha mange sosiale aktiviteter i løpet av en uke.',
    pole: 'E',
  },
  {
    id: 'EI6',
    dimension: 'EI',
    text: 'Jeg tar ofte initiativ til samtaler og aktiviteter i sosiale settinger.',
    pole: 'E',
  },

  // 6 items where agreeing = I (Introversion)
  {
    id: 'EI7',
    dimension: 'EI',
    text: 'Jeg trenger tid alene for å lade opp etter sosiale sammenkomster.',
    pole: 'I',
  },
  {
    id: 'EI8',
    dimension: 'EI',
    text: 'Jeg foretrekker dype samtaler med en eller to personer fremfor store grupper.',
    pole: 'I',
  },
  {
    id: 'EI9',
    dimension: 'EI',
    text: 'Jeg liker å tenke grundig gjennom ting før jeg sier noe.',
    pole: 'I',
  },
  {
    id: 'EI10',
    dimension: 'EI',
    text: 'Jeg føler meg mer komfortabel med å lytte enn å stå i sentrum av oppmerksomheten.',
    pole: 'I',
  },
  {
    id: 'EI11',
    dimension: 'EI',
    text: 'Jeg foretrekker å tilbringe fritiden min i rolige omgivelser.',
    pole: 'I',
  },
  {
    id: 'EI12',
    dimension: 'EI',
    text: 'Jeg har en liten, nær vennekrets som jeg setter stor pris på.',
    pole: 'I',
  },
];

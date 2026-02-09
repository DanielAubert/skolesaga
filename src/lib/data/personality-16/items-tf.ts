import type { P16Item } from '@/lib/types/personality-16';

export const tfItems: P16Item[] = [
  // 6 items where agreeing = T (Thinking)
  {
    id: 'TF1',
    dimension: 'TF',
    text: 'Jeg tar beslutninger basert på logikk og fakta, ikke følelser.',
    pole: 'T',
  },
  {
    id: 'TF2',
    dimension: 'TF',
    text: 'Jeg synes det er viktigere å være rettferdig enn å være snill.',
    pole: 'T',
  },
  {
    id: 'TF3',
    dimension: 'TF',
    text: 'Jeg foretrekker å analysere et problem objektivt fremfor å gå etter magefølelsen.',
    pole: 'T',
  },
  {
    id: 'TF4',
    dimension: 'TF',
    text: 'Jeg sier heller sannheten direkte enn å pakke den inn for å skåne andres følelser.',
    pole: 'T',
  },
  {
    id: 'TF5',
    dimension: 'TF',
    text: 'Når jeg vurderer en sak, legger jeg mest vekt på hva som er logisk riktig.',
    pole: 'T',
  },
  {
    id: 'TF6',
    dimension: 'TF',
    text: 'Jeg klarer å holde meg nøytral og saklig, selv i emosjonelle situasjoner.',
    pole: 'T',
  },

  // 6 items where agreeing = F (Feeling)
  {
    id: 'TF7',
    dimension: 'TF',
    text: 'Jeg tar hensyn til andres følelser når jeg tar viktige avgjørelser.',
    pole: 'F',
  },
  {
    id: 'TF8',
    dimension: 'TF',
    text: 'Det er viktig for meg å opprettholde harmoni i gruppen, selv om det betyr kompromiss.',
    pole: 'F',
  },
  {
    id: 'TF9',
    dimension: 'TF',
    text: 'Jeg blir lett berørt av andres problemer og ønsker å hjelpe.',
    pole: 'F',
  },
  {
    id: 'TF10',
    dimension: 'TF',
    text: 'Jeg synes det er viktig at alle føler seg inkludert og verdsatt.',
    pole: 'F',
  },
  {
    id: 'TF11',
    dimension: 'TF',
    text: 'Jeg stoler ofte på magefølelsen min når jeg skal ta beslutninger.',
    pole: 'F',
  },
  {
    id: 'TF12',
    dimension: 'TF',
    text: 'Jeg foretrekker samarbeid og enighet fremfor konkurranse og debatt.',
    pole: 'F',
  },
];

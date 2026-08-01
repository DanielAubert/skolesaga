/**
 * Institusjoner og fag for Høyskole/universitet.
 * Hierarki: Høyskole/universitet → institusjon → fagkode + fagnavn.
 * Fagnavn vises som «FAGKODE Fagnavn» der faget har offisiell emnekode.
 */

export interface HoyskoleFag {
  courseId: string;
  name: string; // «ECON1310 Makroøkonomi I» — fagkode + fagnavn
  icon: string;
  color: string;
  image?: string;
}

export interface Institusjon {
  slug: string;
  name: string; // kort navn, f.eks. «UiO»
  fullName: string;
  icon: string;
  color: string;
  /** Forsidebilde til kortet. Bildet bærer kortnavnet, så kortet viser bare
   *  fullName som HTML — ellers står navnet to ganger. */
  image?: string;
  /** Samme illustrasjon i 2800 px, til fullbredde-heroet på institusjonssiden.
   *  Kortversjonen på 1600 px blir synlig myk der. */
  imageHero?: string;
  subjects: HoyskoleFag[];
}

export const INSTITUSJONER: Institusjon[] = [
  {
    slug: 'uio',
    name: 'UiO',
    fullName: 'Universitetet i Oslo',
    icon: '🎓',
    color: 'from-red-600 to-rose-700',
    image: '/images/institusjoner/uio.webp',
      imageHero: '/images/institusjoner/uio-hero.webp',
    subjects: [
      { courseId: 'stv1400', name: 'STV1400 Offentlig politikk og administrasjon', icon: '🏢', color: 'from-slate-500 to-slate-700' },
      { courseId: 'sgo1001', name: 'SGO1001 Innføring i samfunnsgeografi', icon: '🗺️', color: 'from-slate-500 to-slate-700' },
      { courseId: 'in2010', name: 'IN2010 Algoritmer og datastrukturer', icon: '🌳', color: 'from-slate-500 to-slate-700' },
      { courseId: 'med1100', name: 'MED1100 Medisinstudiet modul 1', icon: '🩺', color: 'from-slate-500 to-slate-700' },
      { courseId: 'ling1100', name: 'LING1100 Innføring i semantikk og pragmatikk', icon: '💬', color: 'from-slate-500 to-slate-700' },
      { courseId: 'sosant1000', name: 'SOSANT1000 Antropologisk samfunnsanalyse (Innføring i sosialantropologi)', icon: '🌍', color: 'from-slate-500 to-slate-700' },
      { courseId: 'fys1100', name: 'FYS1100 Mekanikk og modellering', icon: '🪐', color: 'from-slate-500 to-slate-700' },
      { courseId: 'fil1001', name: 'FIL1001 Innføring i metafysikk og bevissthetsfilosofi', icon: '🧠', color: 'from-slate-500 to-slate-700' },
      { courseId: 'in1000', name: 'IN1000 Introduksjon til objektorientert programmering', icon: '🧩', color: 'from-slate-500 to-slate-700' },
      { courseId: 'in1020', name: 'IN1020 Introduksjon til datateknologi', icon: '🖥️', color: 'from-slate-500 to-slate-700' },
      { courseId: 'econ1100', name: 'ECON1100 Matematikk I', icon: '∂', color: 'from-slate-500 to-slate-700' },
      { courseId: 'econ2310', name: 'ECON2310 Makroøkonomi 2', icon: '🌍', color: 'from-slate-500 to-slate-700' },
      { courseId: 'fys1001', name: 'FYS1001 Innføring i fysikk', icon: '⚛️', color: 'from-slate-500 to-slate-700' },
      { courseId: 'econ2220', name: 'ECON2220 Mikroøkonomi 2', icon: '⚖️', color: 'from-slate-500 to-slate-700' },
      { courseId: 'stk1110', name: 'STK1110 Statistiske metoder og dataanalyse', icon: '📊', color: 'from-slate-500 to-slate-700' },
      { courseId: 'stk1100', name: 'STK1100 Sannsynlighetsregning og statistisk modellering', icon: '📈', color: 'from-slate-500 to-slate-700' },
      { courseId: 'mat1120', name: 'MAT1120 Lineær algebra', icon: '🧮', color: 'from-slate-500 to-slate-700' },
      { courseId: 'mat1100', name: 'MAT1100 Kalkulus', icon: '∫', color: 'from-slate-500 to-slate-700' },
      { courseId: 'mat1110', name: 'MAT1110 Kalkulus og lineær algebra', icon: '📐', color: 'from-slate-500 to-slate-700' },
      { courseId: 'econ1210', name: 'ECON1210 Mikroøkonomi 1', icon: '📈', color: 'from-slate-500 to-slate-700' },
      { courseId: 'psy1010', name: 'PSY1010 Innføring i metode', icon: '🧠', color: 'from-slate-500 to-slate-700' },
      { courseId: 'exphil03', name: 'EXPHIL03 Examen philosophicum', icon: '🦉', color: 'from-slate-500 to-slate-700' },
      { courseId: 'stv1100', name: 'STV1100 Politisk teori', icon: '🏛️', color: 'from-slate-500 to-slate-700' },
      { courseId: 'econ1310', name: 'ECON1310 Makroøkonomi I', icon: '📈', color: 'from-emerald-500 to-teal-600' },
      { courseId: 'jus1111', name: 'JUS1111 Privatrett I', icon: '⚖️', color: 'from-slate-600 to-gray-700' },
      { courseId: 'in1900', name: 'IN1900 Introduksjon til programmering med vitenskapelige anvendelser', icon: '🐍', color: 'from-slate-500 to-slate-700' },
    ],
  },
  {
    slug: 'bi',
    name: 'BI',
    fullName: 'Handelshøyskolen BI',
    icon: '🏛️',
    color: 'from-blue-600 to-indigo-700',
    image: '/images/institusjoner/bi.webp',
      imageHero: '/images/institusjoner/bi-hero.webp',
    subjects: [
      { courseId: 'bi-okonomi', name: 'Matematikk for økonomer', icon: '📊', color: 'from-amber-500 to-orange-600' },
    ],
  },
  {
    slug: 'uib',
    name: 'UiB',
    fullName: 'Universitetet i Bergen',
    icon: '⛰️',
    color: 'from-cyan-700 to-blue-800',
    image: '/images/institusjoner/uib.webp',
      imageHero: '/images/institusjoner/uib-hero.webp',
    subjects: [
      { courseId: 'mat111-uib', name: 'MAT111 Grunnkurs i matematikk I', icon: '📐', color: 'from-slate-500 to-slate-700' },
    ],
  },
  {
    slug: 'ntnu',
    name: 'NTNU',
    fullName: 'Norges teknisk-naturvitenskapelige universitet',
    icon: '🔬',
    color: 'from-blue-700 to-cyan-700',
    image: '/images/institusjoner/ntnu.webp',
      imageHero: '/images/institusjoner/ntnu-hero.webp',
    subjects: [
      { courseId: 'tfy4115', name: 'TFY4115 Fysikk', icon: '🌡️', color: 'from-slate-500 to-slate-700' },
      { courseId: 'ma1301', name: 'MA1301 Tallteori', icon: '🔢', color: 'from-slate-500 to-slate-700' },
      { courseId: 'tma4135', name: 'TMA4135 Matematikk 4D', icon: '∫', color: 'from-slate-500 to-slate-700' },
      { courseId: 'tdt4110', name: 'TDT4110 Informasjonsteknologi grunnkurs', icon: '🐍', color: 'from-slate-500 to-slate-700' },
      { courseId: 'tma4110', name: 'TMA4110 Lineær algebra, komplekse tall og differensiallikninger', icon: '🧮', color: 'from-slate-500 to-slate-700' },
      { courseId: 'tma4245', name: 'TMA4245 Statistikk', icon: '📊', color: 'from-slate-500 to-slate-700' },
    ],
  },
];

export function getInstitusjon(slug: string): Institusjon | undefined {
  return INSTITUSJONER.find((i) => i.slug === slug);
}

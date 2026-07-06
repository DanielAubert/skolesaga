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
  subjects: HoyskoleFag[];
}

export const INSTITUSJONER: Institusjon[] = [
  {
    slug: 'uio',
    name: 'UiO',
    fullName: 'Universitetet i Oslo',
    icon: '🎓',
    color: 'from-red-600 to-rose-700',
    subjects: [
      { courseId: 'econ1310', name: 'ECON1310 Makroøkonomi I', icon: '📈', color: 'from-emerald-500 to-teal-600' },
    ],
  },
  {
    slug: 'bi',
    name: 'BI',
    fullName: 'Handelshøyskolen BI',
    icon: '🏛️',
    color: 'from-blue-600 to-indigo-700',
    subjects: [
      { courseId: 'bi-okonomi', name: 'Matematikk for økonomer', icon: '📊', color: 'from-amber-500 to-orange-600' },
    ],
  },
];

export function getInstitusjon(slug: string): Institusjon | undefined {
  return INSTITUSJONER.find((i) => i.slug === slug);
}

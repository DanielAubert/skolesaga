/**
 * Kjemi 1 - Del 1: Grunnleggende kjemi
 * Tekstbok kapittelinnhold
 *
 * Her defineres alt innhold for hvert kapittel: teori, eksempler og oppgaver.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kjemi 1 Kapittel 1.1: Atomets oppbygging
// ============================================================================

const CHAPTER_KJEMI1_1_1: TextbookChapter = {
  id: 'kjemi1-1-1',
  courseId: 'kjemi1',
  chapterNumber: '1.1',
  title: 'Atomets oppbygging',
  description: 'Lær om atomets bestanddeler, massetal, atomnummer og periodesystemets grunnstruktur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive atomets bestanddeler og egenskaper',
    'forklare hva massetal og atomnummer er',
    'identifisere isotoper',
    'forstå periodesystemets grunnleggende struktur',
  ],
  content: [
    // ========== ATOMETS BESTANDDELER ==========
    {
      id: 'kjemi1-1-1-intro',
      type: 'text',
      content: `## Atomets bestanddeler

Alle stoffer er bygd opp av **atomer**. Et atom er den minste enheten av et grunnstoff som beholder grunnstoffets egenskaper.

Atomet består av tre typer partikler:

- **Protoner** (p⁺) – Positivt ladede partikler i atomkjernen
- **Nøytroner** (n⁰) – Nøytrale partikler i atomkjernen
- **Elektroner** (e⁻) – Negativt ladede partikler som kretser rundt kjernen

### Egenskaper ved atomets partikler

| Partikkel | Symbol | Ladning | Masse (u) | Plassering |
|-----------|--------|---------|-----------|------------|
| Proton | p⁺ | +1 | 1 | Kjerne |
| Nøytron | n⁰ | 0 | 1 | Kjerne |
| Elektron | e⁻ | −1 | ~0 (1/1836) | Elektronskall |

**Viktig:** Antall protoner = antall elektroner i et nøytralt atom (ingen total ladning).`,
    },

    {
      id: 'kjemi1-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Atomets bestanddeler',
      problem: `Et karbonatom (C) har 6 protoner, 6 nøytroner og 6 elektroner.

a) Hva er den totale ladningen til atomet?
b) Hvor stor del av atomets masse utgjøres av elektronene?`,
      solution: `**Løsning:**

a) Ladning fra protoner: $6 \\cdot (+1) = +6$
   Ladning fra elektroner: $6 \\cdot (-1) = -6$
   Total ladning: $+6 + (-6) = 0$

   Atomet er **nøytralt** (ingen total ladning).

b) Masse fra protoner og nøytroner: $6 + 6 = 12$ u
   Masse fra elektroner: $6 \\cdot \\frac{1}{1836} \\approx 0{,}003$ u

   Elektronene utgjør kun ca. $\\frac{0{,}003}{12} \\approx 0{,}025\\%$ av massen.

   **Nesten all masse** er i atomkjernen!`,
    },

    {
      id: 'kjemi1-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-1',
        number: '1-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll ut tabellen for de følgende atomene:',
        subTasks: [
          {
            label: 'a',
            task: 'Helium (He): 2 protoner, 2 nøytroner. Hvor mange elektroner?',
            solution: 'Et nøytralt atom har like mange elektroner som protoner. Helium har derfor **2 elektroner**.',
            answer: 2,
            multipleChoiceOptions: ['2', '4', '0', '1']
          },
          {
            label: 'b',
            task: 'Oksygen (O): 8 protoner, 8 elektroner. Hva er total ladning?',
            solution: 'Ladning: $8 \\cdot (+1) + 8 \\cdot (-1) = 0$. Atomet er **nøytralt**.',
            answer: 0,
            multipleChoiceOptions: ['0', '+8', '-8', '+16']
          },
          {
            label: 'c',
            task: 'Nitrogen (N): 7 protoner, 7 nøytroner, 7 elektroner. Hva er massen (ca)?',
            solution: 'Masse fra protoner og nøytroner: $7 + 7 = 14$ u. Elektronmassen er neglisjerbar. Masse ≈ **14 u**.',
            answer: 14,
            multipleChoiceOptions: ['14 u', '7 u', '21 u', '28 u']
          },
        ],
        solution: 'a) 2 elektroner, b) 0 (nøytral), c) 14 u',
        hints: ['Nøytrale atomer har like mange protoner og elektroner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ATOMNUMMER OG MASSETAL ==========
    {
      id: 'kjemi1-1-1-atomnummer',
      type: 'text',
      content: `## Atomnummer og massetal

### Atomnummer (Z)
**Atomnummeret** er antall protoner i atomkjernen. Dette definerer hvilket grunnstoff det er.

- Hydrogen har alltid 1 proton (Z = 1)
- Karbon har alltid 6 protoner (Z = 6)
- Oksygen har alltid 8 protoner (Z = 8)

### Massetal (A)
**Massetallet** er summen av protoner og nøytroner i kjernen:

$$A = \\text{antall protoner} + \\text{antall nøytroner}$$

### Nuklidnotasjon
Vi skriver atomer slik: $^{A}_{Z}\\text{X}$

- **X** = grunnstoffets symbol
- **A** = massetal (oppe til venstre)
- **Z** = atomnummer (nede til venstre)

**Eksempel:** $^{12}_{6}\\text{C}$ betyr karbon med massetal 12 og atomnummer 6.

### Finne antall nøytroner
$$\\text{Antall nøytroner} = A - Z$$`,
    },

    {
      id: 'kjemi1-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Atomnummer og massetal',
      problem: `Betrakt natrium-atomet $^{23}_{11}\\text{Na}$.

a) Hvor mange protoner har atomet?
b) Hvor mange nøytroner har atomet?
c) Hvor mange elektroner har atomet (hvis det er nøytralt)?`,
      solution: `**Løsning:**

a) Atomnummeret Z = 11, så atomet har **11 protoner**.

b) Massetal A = 23
   Antall nøytroner = A − Z = 23 − 11 = **12 nøytroner**

c) Nøytralt atom → like mange elektroner som protoner = **11 elektroner**`,
    },

    {
      id: 'kjemi1-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-2',
        number: '1-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem antall protoner, nøytroner og elektroner for hvert atom:',
        subTasks: [
          {
            label: 'a',
            task: '$^{16}_{8}\\text{O}$',
            solution: 'Z = 8 (protoner), A = 16, nøytroner = 16 − 8 = 8, elektroner = 8',
          },
          {
            label: 'b',
            task: '$^{27}_{13}\\text{Al}$',
            solution: 'Z = 13 (protoner), A = 27, nøytroner = 27 − 13 = 14, elektroner = 13',
          },
          {
            label: 'c',
            task: '$^{39}_{19}\\text{K}$',
            solution: 'Z = 19 (protoner), A = 39, nøytroner = 39 − 19 = 20, elektroner = 19',
          },
          {
            label: 'd',
            task: '$^{56}_{26}\\text{Fe}$',
            solution: 'Z = 26 (protoner), A = 56, nøytroner = 56 − 26 = 30, elektroner = 26',
          },
        ],
        solution: 'a) 8p, 8n, 8e; b) 13p, 14n, 13e; c) 19p, 20n, 19e; d) 26p, 30n, 26e',
        hints: ['Antall nøytroner = A − Z'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ISOTOPER ==========
    {
      id: 'kjemi1-1-1-isotoper',
      type: 'text',
      content: `## Isotoper

**Isotoper** er atomer av samme grunnstoff (samme Z) som har ulikt antall nøytroner (ulikt A).

### Eksempel: Karbonisotoper
Karbon har tre naturlige isotoper:

- $^{12}_{6}\\text{C}$ – 6 protoner, 6 nøytroner (98,9% av naturlig karbon)
- $^{13}_{6}\\text{C}$ – 6 protoner, 7 nøytroner (1,1%)
- $^{14}_{6}\\text{C}$ – 6 protoner, 8 nøytroner (sporstoff, radioaktiv)

Alle tre er **karbon** fordi de har 6 protoner, men de har ulik masse.

### Relativ atommasse
Relativ atommasse (Aᵣ) er et vektet gjennomsnitt av isotopmassene:

$$A_r = \\sum (\\text{massetal} \\times \\text{forekomst})$$

For karbon: $A_r(\\text{C}) \\approx 12{,}01$ u (se periodesystemet)`,
    },

    {
      id: 'kjemi1-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Isotoper',
      problem: `Klor har to stabile isotoper:
- $^{35}_{17}\\text{Cl}$ med forekomst 75,8%
- $^{37}_{17}\\text{Cl}$ med forekomst 24,2%

Beregn relativ atommasse for klor.`,
      solution: `**Løsning:**

$$A_r(\\text{Cl}) = 35 \\times 0{,}758 + 37 \\times 0{,}242$$
$$= 26{,}53 + 8{,}95$$
$$= 35{,}48 \\text{ u}$$

Relativ atommasse for klor er ca. **35,5 u** (sjekk periodesystemet!).`,
    },

    {
      id: 'kjemi1-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-3',
        number: '1-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oppgaver om isotoper:',
        subTasks: [
          {
            label: 'a',
            task: 'Er $^{16}_{8}\\text{O}$ og $^{18}_{8}\\text{O}$ isotoper? Forklar.',
            solution: 'Ja, de er isotoper fordi de har samme atomnummer (Z = 8, begge er oksygen) men ulikt massetal (16 vs 18).',
          },
          {
            label: 'b',
            task: 'Hvor mange nøytroner har $^{18}_{8}\\text{O}$?',
            solution: 'Antall nøytroner = A − Z = 18 − 8 = **10 nøytroner**.',
            answer: 10,
            multipleChoiceOptions: ['10', '8', '18', '26']
          },
          {
            label: 'c',
            task: 'Hydrogen har to isotoper: $^{1}_{1}\\text{H}$ (99,985%) og $^{2}_{1}\\text{H}$ (0,015%). Beregn Aᵣ(H).',
            solution: '$A_r(\\text{H}) = 1 \\times 0{,}99985 + 2 \\times 0{,}00015 = 0{,}99985 + 0{,}0003 = 1{,}00015$ u ≈ **1,008 u**',
            answer: 1.008,
            multipleChoiceOptions: ['1,008 u', '1,5 u', '2,0 u', '1,0 u']
          },
        ],
        solution: 'a) Ja, samme Z men ulik A; b) 10 nøytroner; c) 1,008 u',
        hints: ['Isotoper har samme atomnummer men ulikt massetal'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PERIODESYSTEMET ==========
    {
      id: 'kjemi1-1-1-periodesystem',
      type: 'text',
      content: `## Periodesystemets grunnstruktur

**Periodesystemet** er en systematisk ordning av alle grunnstoffene etter økende atomnummer.

### Oppbygging
- **Perioder** (horisontale rader): 7 perioder nummerert 1–7
- **Grupper** (vertikale kolonner): 18 grupper nummerert 1–18

### Viktige grupper
| Gruppe | Navn | Eksempler |
|--------|------|-----------|
| 1 | Alkalimetaller | Li, Na, K |
| 2 | Jordalkalimetaller | Be, Mg, Ca |
| 17 | Halogener | F, Cl, Br, I |
| 18 | Edelgasser | He, Ne, Ar, Kr |

### Hovedgrupper vs overgangsmetaller
- **Hovedgrupper**: Gruppe 1, 2 og 13–18
- **Overgangsmetaller**: Gruppe 3–12

### Informasjon i periodesystemet
Hver rute inneholder:
- **Symbol** (f.eks. Na)
- **Atomnummer** Z (f.eks. 11)
- **Relativ atommasse** Aᵣ (f.eks. 22,99)
- **Navn** (f.eks. Natrium)`,
    },

    {
      id: 'kjemi1-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Periodesystemet',
      problem: `Bruk periodesystemet til å svare på:

a) Hvilken periode tilhører natrium (Na)?
b) Hvilken gruppe tilhører klor (Cl)?
c) Hva er atomnummeret til jern (Fe)?`,
      solution: `**Løsning:**

a) Natrium (Na) har Z = 11 og ligger i **periode 3**.

b) Klor (Cl) har Z = 17 og ligger i **gruppe 17** (halogenene).

c) Jern (Fe) har **atomnummer Z = 26**.`,
    },

    {
      id: 'kjemi1-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-4',
        number: '1-4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk periodesystemet til å svare:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken gruppe tilhører kalium (K)?',
            solution: 'Kalium ligger i **gruppe 1** (alkalimetaller).',
            answer: 1,
            multipleChoiceOptions: ['Gruppe 1', 'Gruppe 2', 'Gruppe 17', 'Gruppe 18']
          },
          {
            label: 'b',
            task: 'Hvilken periode tilhører aluminium (Al)?',
            solution: 'Aluminium ligger i **periode 3**.',
            answer: 3,
            multipleChoiceOptions: ['Periode 3', 'Periode 2', 'Periode 4', 'Periode 13']
          },
          {
            label: 'c',
            task: 'Hva er symbolet for grunstoffet med Z = 17?',
            solution: 'Z = 17 er **Cl** (klor).',
          },
          {
            label: 'd',
            task: 'Nevn to edelgasser.',
            solution: 'Eksempler: **He, Ne, Ar, Kr, Xe, Rn** (gruppe 18).',
          },
        ],
        solution: 'a) Gruppe 1; b) Periode 3; c) Cl; d) f.eks. He og Ne',
        hints: ['Se på periodesystemet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-1-1-summary',
      type: 'text',
      content: `## Oppsummering

**Atomets bestanddeler:**
- Protoner (p⁺): Positiv ladning, masse 1 u, i kjernen
- Nøytroner (n⁰): Nøytral, masse 1 u, i kjernen
- Elektroner (e⁻): Negativ ladning, neglisjerbar masse, i skall

**Atomnummer og massetal:**
- Atomnummer Z = antall protoner
- Massetal A = protoner + nøytroner
- Nuklidnotasjon: $^{A}_{Z}\\text{X}$

**Isotoper:**
- Samme Z, ulik A
- Samme grunnstoff, ulik masse

**Periodesystemet:**
- 7 perioder (horisontalt)
- 18 grupper (vertikalt)
- Ordnet etter økende atomnummer`,
    },

    // ========== FLERE OPPGAVER ==========
    {
      id: 'kjemi1-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-5',
        number: '1-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Et atom har 17 protoner og 18 nøytroner. Hva er massetallet?',
            solution: '$A = p + n = 17 + 18 = 35$. Massetal = **35**.',
            answer: 35,
            multipleChoiceOptions: ['35', '17', '18', '1']
          },
          {
            label: 'b',
            task: 'Hvilket grunnstoff har 20 protoner?',
            solution: 'Z = 20 er **Ca** (kalsium).',
          },
          {
            label: 'c',
            task: '$^{24}_{12}\\text{Mg}$ og $^{25}_{12}\\text{Mg}$ er isotoper. Hva er forskjellen?',
            solution: 'Samme atomnummer (Z = 12), men $^{25}_{12}\\text{Mg}$ har **én ekstra nøytron**.',
          },
          {
            label: 'd',
            task: 'Hvor mange elektroner har et nøytralt fluor-atom (F, Z = 9)?',
            solution: 'Nøytralt atom → elektroner = protoner = **9 elektroner**.',
            answer: 9,
            multipleChoiceOptions: ['9', '10', '19', '7']
          },
        ],
        solution: 'a) 35; b) Ca; c) Én ekstra nøytron; d) 9 elektroner',
        hints: ['Bruk A = p + n og periodesystemet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-6',
        number: '1-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll ut tabellen:',
        subTasks: [
          {
            label: 'a',
            task: 'Symbol: N, Z = ?, A = 14, nøytroner = ?',
            solution: 'Nitrogen har Z = 7 (fra periodesystemet). Nøytroner = A − Z = 14 − 7 = **7**.',
          },
          {
            label: 'b',
            task: 'Symbol: ?, Z = 11, A = 23, nøytroner = ?',
            solution: 'Z = 11 er **Na** (natrium). Nøytroner = 23 − 11 = **12**.',
          },
          {
            label: 'c',
            task: 'Symbol: S, Z = ?, A = 32, nøytroner = ?',
            solution: 'Svovel har Z = 16. Nøytroner = 32 − 16 = **16**.',
          },
        ],
        solution: 'a) Z=7, n=7; b) Na, n=12; c) Z=16, n=16',
        hints: ['Bruk periodesystemet til å finne Z fra symbol'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-1-ex-7',
        number: '1-7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Bor har to isotoper: $^{10}_{5}\\text{B}$ (19,9%) og $^{11}_{5}\\text{B}$ (80,1%). Beregn Aᵣ(B).',
            solution: '$A_r = 10 \\times 0{,}199 + 11 \\times 0{,}801 = 1{,}99 + 8{,}811 = 10{,}801$ u ≈ **10,8 u**',
            answer: 10.8,
            multipleChoiceOptions: ['10,8 u', '10,5 u', '11,0 u', '10,0 u']
          },
          {
            label: 'b',
            task: 'Et atom har 26 elektroner og 30 nøytroner. Hva er nuklidnotasjonen?',
            solution: 'Elektroner = protoner = 26 (Z = 26, jern). A = 26 + 30 = 56. Notasjon: **$^{56}_{26}\\text{Fe}$**',
          },
          {
            label: 'c',
            task: 'Hvilken gruppe og periode tilhører svovel (S)?',
            solution: 'Svovel (Z = 16) ligger i **gruppe 16** og **periode 3**.',
          },
        ],
        solution: 'a) 10,8 u; b) $^{56}_{26}\\text{Fe}$; c) Gruppe 16, periode 3',
        hints: ['Kombiner kunnskapen fra hele kapittelet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 1.2: Elektronkonfigurasjon
// ============================================================================

const CHAPTER_KJEMI1_1_2: TextbookChapter = {
  id: 'kjemi1-1-2',
  courseId: 'kjemi1',
  chapterNumber: '1.2',
  title: 'Elektronkonfigurasjon',
  description: 'Lær om elektronskall, energinivåer, elektronkonfigurasjon og valenselektroner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive elektronskall og energinivåer',
    'skrive elektronkonfigurasjon for atomer',
    'identifisere valenselektroner',
    'forklare oktettregelen',
  ],
  content: [
    // ========== ELEKTRONSKALL ==========
    {
      id: 'kjemi1-1-2-intro',
      type: 'text',
      content: `## Elektronskall og energinivåer

Elektronene i et atom er organisert i **skall** (energinivåer) rundt atomkjernen.

### Skallbetegnelser
Skallene kalles **K, L, M, N** (fra kjernen og utover):

- **K-skall** (n = 1): Nærmest kjernen, maks 2 elektroner
- **L-skall** (n = 2): Maks 8 elektroner
- **M-skall** (n = 3): Maks 18 elektroner
- **N-skall** (n = 4): Maks 32 elektroner

### Maksimalt antall elektroner per skall
Generell regel: Skall n kan ha maks **2n²** elektroner.

| Skall | n | Maks elektroner |
|-------|---|-----------------|
| K | 1 | 2 |
| L | 2 | 8 |
| M | 3 | 18 |
| N | 4 | 32 |

### Fylling av skall
Elektronene fyller skallene fra innerst til ytterst:
1. K-skallet fylles først (2e⁻)
2. Deretter L-skallet (8e⁻)
3. Deretter M-skallet (18e⁻)
4. osv.`,
    },

    {
      id: 'kjemi1-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Elektronfordeling i skall',
      problem: `Lag elektronfordeling for natrium (Na) som har 11 elektroner.`,
      solution: `**Løsning:**

Natrium har 11 elektroner. Vi fyller skallene fra innerst:

1. **K-skall**: 2 elektroner (fullt)
2. **L-skall**: 8 elektroner (fullt)
3. **M-skall**: 1 elektron (ikke fullt)

**Elektronfordeling for Na:** K: 2, L: 8, M: 1

Totalt: 2 + 8 + 1 = 11 elektroner ✓`,
    },

    {
      id: 'kjemi1-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-2-ex-1',
        number: '2-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag elektronfordeling i skall (K, L, M) for:',
        subTasks: [
          {
            label: 'a',
            task: 'Helium (He, Z = 2)',
            solution: '2 elektroner: **K: 2** (He har fullt K-skall)',
          },
          {
            label: 'b',
            task: 'Karbon (C, Z = 6)',
            solution: '6 elektroner: K: 2 (fullt), L: 4. **K: 2, L: 4**',
          },
          {
            label: 'c',
            task: 'Neon (Ne, Z = 10)',
            solution: '10 elektroner: K: 2 (fullt), L: 8 (fullt). **K: 2, L: 8**',
          },
          {
            label: 'd',
            task: 'Magnesium (Mg, Z = 12)',
            solution: '12 elektroner: K: 2, L: 8, M: 2. **K: 2, L: 8, M: 2**',
          },
        ],
        solution: 'a) K: 2; b) K: 2, L: 4; c) K: 2, L: 8; d) K: 2, L: 8, M: 2',
        hints: ['Fyll K-skallet først (2e⁻), deretter L (8e⁻), så M'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ORBITALER OG ELEKTRONKONFIGURASJON ==========
    {
      id: 'kjemi1-1-2-orbitaler',
      type: 'text',
      content: `## Orbitaler og elektronkonfigurasjon

Hvert skall består av **orbitaler** (underenergier):

### Orbitaltyper
- **s-orbital**: Kuleformet, maks 2 elektroner
- **p-orbital**: Håndvektformet, 3 stk, maks 6 elektroner totalt
- **d-orbital**: Mer kompleks, 5 stk, maks 10 elektroner totalt
- **f-orbital**: Svært kompleks, 7 stk, maks 14 elektroner totalt

### Elektronkonfigurasjon
Vi bruker notasjonen **ns^x np^y** osv.:

- **n** = skallnummer (1, 2, 3, ...)
- **s, p, d, f** = orbitaltype
- **x, y** = antall elektroner (eksponent)

### Fylling av orbitaler (Aufbau-prinsippet)
Rekkefølge: **1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, ...**

**Huskeregel:**
\`\`\`
1s
2s 2p
3s 3p 3d
4s 4p 4d 4f
5s 5p 5d 5f
...
\`\`\`
Fyll diagonalt fra øvre høyre hjørne.`,
    },

    {
      id: 'kjemi1-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Elektronkonfigurasjon',
      problem: `Skriv elektronkonfigurasjon for:

a) Nitrogen (N, Z = 7)
b) Natrium (Na, Z = 11)`,
      solution: `**Løsning:**

a) **Nitrogen (7 elektroner):**
   - 1s² (2e⁻)
   - 2s² (2e⁻)
   - 2p³ (3e⁻)

   **Konfigurasjon: 1s² 2s² 2p³**

b) **Natrium (11 elektroner):**
   - 1s² (2e⁻)
   - 2s² (2e⁻)
   - 2p⁶ (6e⁻)
   - 3s¹ (1e⁻)

   **Konfigurasjon: 1s² 2s² 2p⁶ 3s¹**`,
    },

    {
      id: 'kjemi1-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-2-ex-2',
        number: '2-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv elektronkonfigurasjon for:',
        subTasks: [
          {
            label: 'a',
            task: 'Oksygen (O, Z = 8)',
            solution: '8 elektroner: 1s² 2s² 2p⁴. **1s² 2s² 2p⁴**',
          },
          {
            label: 'b',
            task: 'Fluor (F, Z = 9)',
            solution: '9 elektroner: 1s² 2s² 2p⁵. **1s² 2s² 2p⁵**',
          },
          {
            label: 'c',
            task: 'Aluminium (Al, Z = 13)',
            solution: '13 elektroner: 1s² 2s² 2p⁶ 3s² 3p¹. **1s² 2s² 2p⁶ 3s² 3p¹**',
          },
          {
            label: 'd',
            task: 'Argon (Ar, Z = 18)',
            solution: '18 elektroner: 1s² 2s² 2p⁶ 3s² 3p⁶. **1s² 2s² 2p⁶ 3s² 3p⁶**',
          },
        ],
        solution: 'a) 1s² 2s² 2p⁴; b) 1s² 2s² 2p⁵; c) 1s² 2s² 2p⁶ 3s² 3p¹; d) 1s² 2s² 2p⁶ 3s² 3p⁶',
        hints: ['Fylling: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, ...'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VALENSELEKTRONER ==========
    {
      id: 'kjemi1-1-2-valens',
      type: 'text',
      content: `## Valenselektroner

**Valenselektroner** er elektronene i det ytterste skallet (høyeste n-verdi).

Disse elektronene er viktige fordi de deltar i kjemiske reaksjoner og bindinger.

### Eksempler
- **Karbon** (1s² 2s² 2p⁴): Ytterste skall er n=2 → **4 valenselektroner** (2s² 2p²)
- **Natrium** (1s² 2s² 2p⁶ 3s¹): Ytterste skall er n=3 → **1 valenselektron** (3s¹)
- **Klor** (1s² 2s² 2p⁶ 3s² 3p⁵): Ytterste skall er n=3 → **7 valenselektroner** (3s² 3p⁵)

### Sammenheng med periodesystemet
For **hovedgruppene**:
- **Gruppe 1**: 1 valenselektron
- **Gruppe 2**: 2 valenselektroner
- **Gruppe 13**: 3 valenselektroner
- **Gruppe 14**: 4 valenselektroner
- **Gruppe 15**: 5 valenselektroner
- **Gruppe 16**: 6 valenselektroner
- **Gruppe 17**: 7 valenselektroner
- **Gruppe 18**: 8 valenselektroner (edelgasser)`,
    },

    {
      id: 'kjemi1-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Valenselektroner',
      problem: `Finn antall valenselektroner for:

a) Silisium (Si, Z = 14)
b) Svovel (S, Z = 16)`,
      solution: `**Løsning:**

a) **Silisium (Si):**
   Elektronkonfigurasjon: 1s² 2s² 2p⁶ 3s² 3p²
   Ytterste skall: 3s² 3p² (n = 3)
   **Valenselektroner: 4** (gruppe 14 ✓)

b) **Svovel (S):**
   Elektronkonfigurasjon: 1s² 2s² 2p⁶ 3s² 3p⁴
   Ytterste skall: 3s² 3p⁴ (n = 3)
   **Valenselektroner: 6** (gruppe 16 ✓)`,
    },

    {
      id: 'kjemi1-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-2-ex-3',
        number: '2-3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn antall valenselektroner for:',
        subTasks: [
          {
            label: 'a',
            task: 'Bor (B, gruppe 13)',
            solution: 'Gruppe 13 → **3 valenselektroner**',
            answer: 3,
            multipleChoiceOptions: ['3', '5', '13', '2']
          },
          {
            label: 'b',
            task: 'Nitrogen (N, gruppe 15)',
            solution: 'Gruppe 15 → **5 valenselektroner**',
            answer: 5,
            multipleChoiceOptions: ['5', '7', '15', '3']
          },
          {
            label: 'c',
            task: 'Klor (Cl, gruppe 17)',
            solution: 'Gruppe 17 → **7 valenselektroner**',
            answer: 7,
            multipleChoiceOptions: ['7', '8', '17', '1']
          },
          {
            label: 'd',
            task: 'Kalsium (Ca, gruppe 2)',
            solution: 'Gruppe 2 → **2 valenselektroner**',
            answer: 2,
            multipleChoiceOptions: ['2', '8', '20', '4']
          },
        ],
        solution: 'a) 3; b) 5; c) 7; d) 2',
        hints: ['For hovedgrupper: valenselektroner = enersifferet i gruppenummeret'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OKTETTREGELEN ==========
    {
      id: 'kjemi1-1-2-oktett',
      type: 'text',
      content: `## Oktettregelen

**Oktettregelen** sier at atomer er mest stabile når de har **8 elektroner** i ytterste skall (som edelgassene, bortsett fra helium som har 2).

### Edelgasskonfigurasjon
Edelgassene (gruppe 18) har fullt ytterste skall:
- **He**: 1s² (2e⁻)
- **Ne**: 1s² 2s² 2p⁶ (8e⁻ i ytterste skall)
- **Ar**: 1s² 2s² 2p⁶ 3s² 3p⁶ (8e⁻ i ytterste skall)

### Hvordan oppnå oktett
Atomer kan:
1. **Miste elektroner** (metaller) → positiv ion (kation)
2. **Vinne elektroner** (ikke-metaller) → negativ ion (anion)
3. **Dele elektroner** (ikke-metaller) → kovalent binding

### Eksempel: Natriumklorid (NaCl)
- **Na** (1 valenselektron) mister 1e⁻ → Na⁺ (som Ne)
- **Cl** (7 valenselektroner) vinner 1e⁻ → Cl⁻ (som Ar)

Begge får edelgasskonfigurasjon!`,
    },

    {
      id: 'kjemi1-1-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Oktettregelen',
      problem: `Hvilken elektronkonfigurasjon får disse ionene?

a) Mg²⁺ (magnesium mistet 2 elektroner)
b) O²⁻ (oksygen vant 2 elektroner)`,
      solution: `**Løsning:**

a) **Mg (Z = 12):**
   Nøytralt: 1s² 2s² 2p⁶ 3s²
   Mg²⁺ (mistet 2e⁻ fra 3s): **1s² 2s² 2p⁶**
   Dette er samme som **Ne** (edelgass) ✓

b) **O (Z = 8):**
   Nøytralt: 1s² 2s² 2p⁴
   O²⁻ (vant 2e⁻ til 2p): **1s² 2s² 2p⁶**
   Dette er samme som **Ne** (edelgass) ✓`,
    },

    {
      id: 'kjemi1-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-2-ex-4',
        number: '2-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn elektronkonfigurasjon for ionene:',
        subTasks: [
          {
            label: 'a',
            task: 'Na⁺ (natrium mistet 1 elektron)',
            solution: 'Na: 1s² 2s² 2p⁶ 3s¹ → Na⁺: **1s² 2s² 2p⁶** (som Ne)',
          },
          {
            label: 'b',
            task: 'F⁻ (fluor vant 1 elektron)',
            solution: 'F: 1s² 2s² 2p⁵ → F⁻: **1s² 2s² 2p⁶** (som Ne)',
          },
          {
            label: 'c',
            task: 'Ca²⁺ (kalsium mistet 2 elektroner)',
            solution: 'Ca: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² → Ca²⁺: **1s² 2s² 2p⁶ 3s² 3p⁶** (som Ar)',
          },
          {
            label: 'd',
            task: 'S²⁻ (svovel vant 2 elektroner)',
            solution: 'S: 1s² 2s² 2p⁶ 3s² 3p⁴ → S²⁻: **1s² 2s² 2p⁶ 3s² 3p⁶** (som Ar)',
          },
        ],
        solution: 'a) 1s² 2s² 2p⁶; b) 1s² 2s² 2p⁶; c) 1s² 2s² 2p⁶ 3s² 3p⁶; d) 1s² 2s² 2p⁶ 3s² 3p⁶',
        hints: ['Ioner mister/vinner elektroner for å få edelgasskonfigurasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-1-2-summary',
      type: 'text',
      content: `## Oppsummering

**Elektronskall (K, L, M, N):**
- K: maks 2e⁻
- L: maks 8e⁻
- M: maks 18e⁻
- N: maks 32e⁻

**Elektronkonfigurasjon:**
- Format: 1s² 2s² 2p⁶ 3s² 3p⁶ osv.
- Fylling: 1s → 2s → 2p → 3s → 3p → 4s → 3d → ...

**Valenselektroner:**
- Elektroner i ytterste skall
- Hovedgruppe = antall valenselektroner

**Oktettregelen:**
- Atomer søker 8 elektroner i ytterste skall
- Edelgasser har allerede fullt skall
- Ioner dannes for å oppnå edelgasskonfigurasjon`,
    },

    // ========== FLERE OPPGAVER ==========
    {
      id: 'kjemi1-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-2-ex-5',
        number: '2-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange elektroner kan maks være i 3p-orbitalen?',
            solution: 'p-orbital har 3 underorbitaler, hver med maks 2e⁻ → **6 elektroner**',
            answer: 6,
            multipleChoiceOptions: ['6', '2', '8', '3']
          },
          {
            label: 'b',
            task: 'Skriv elektronkonfigurasjon for fosfor (P, Z = 15)',
            solution: '15 elektroner: **1s² 2s² 2p⁶ 3s² 3p³**',
          },
          {
            label: 'c',
            task: 'Hvor mange valenselektroner har fosfor?',
            solution: 'Ytterste skall: 3s² 3p³ → **5 valenselektroner** (gruppe 15)',
            answer: 5,
            multipleChoiceOptions: ['5', '3', '15', '8']
          },
          {
            label: 'd',
            task: 'Hvilken edelgass har samme elektronkonfigurasjon som Cl⁻?',
            solution: 'Cl⁻: 1s² 2s² 2p⁶ 3s² 3p⁶ = **Ar** (argon)',
          },
        ],
        solution: 'a) 6; b) 1s² 2s² 2p⁶ 3s² 3p³; c) 5; d) Ar',
        hints: ['Kombiner kunnskapen fra hele kapittelet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-2-ex-6',
        number: '2-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket grunnstoff har elektronkonfigurasjon 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²?',
            solution: 'Teller elektroner: 2+2+6+2+6+2 = 20. Z = 20 er **Ca** (kalsium)',
          },
          {
            label: 'b',
            task: 'Skriv forkortet konfigurasjon for klor ved å bruke [Ne]',
            solution: 'Cl: 1s² 2s² 2p⁶ 3s² 3p⁵ = **[Ne] 3s² 3p⁵**',
          },
          {
            label: 'c',
            task: 'Hvilken ion vil aluminium (Al, Z = 13) danne for å få edelgasskonfigurasjon?',
            solution: 'Al har 3 valenselektroner. Mister 3e⁻ → **Al³⁺** (som Ne)',
          },
        ],
        solution: 'a) Ca; b) [Ne] 3s² 3p⁵; c) Al³⁺',
        hints: ['Bruk periodesystemet og tell elektroner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 1.3: Periodevise trender
// ============================================================================

const CHAPTER_KJEMI1_1_3: TextbookChapter = {
  id: 'kjemi1-1-3',
  courseId: 'kjemi1',
  chapterNumber: '1.3',
  title: 'Periodevise trender',
  description: 'Lær om periodevise trender som atomradius, ioniseringsenergi, elektronegativitet og metalliske egenskaper.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan atomradius varierer i periodesystemet',
    'beskrive ioniseringsenergi og dets trend',
    'forklare elektronegativitet og Pauling-skalaen',
    'identifisere metalliske og ikke-metalliske egenskaper',
  ],
  content: [
    // ========== ATOMRADIUS ==========
    {
      id: 'kjemi1-1-3-intro',
      type: 'text',
      content: `## Atomradius

**Atomradius** er avstanden fra atomkjernen til det ytterste elektronskallet.

### Trender i periodesystemet

**Nedover i en gruppe (samme kolonne):**
- Atomradius **øker**
- Flere elektronskall legges til
- Eksempel: Li < Na < K < Rb

**Bortover i en periode (samme rad):**
- Atomradius **minker**
- Samme antall skall, men flere protoner i kjernen
- Kjernedragningen øker → elektronene trekkes nærmere
- Eksempel: Na > Mg > Al > Si > P > S > Cl

### Hvorfor minker radius bortover i perioden?
Mer positiv ladning i kjernen → sterkere tiltrekning → elektroner trekkes nærmere inn.`,
    },

    {
      id: 'kjemi1-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Atomradius',
      problem: `Ranger følgende atomer fra minst til størst atomradius:

Mg, Na, Al, Cl

(Alle er i periode 3)`,
      solution: `**Løsning:**

I en periode minker atomradius fra venstre mot høyre.

Rekkefølge i periodesystemet: Na → Mg → Al → ... → Cl

Atomradius: Na > Mg > Al > Cl

**Minst til størst: Cl < Al < Mg < Na**`,
    },

    {
      id: 'kjemi1-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-3-ex-1',
        number: '3-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Ranger atomene fra minst til størst atomradius:',
        subTasks: [
          {
            label: 'a',
            task: 'Li, Na, K (alle i gruppe 1)',
            solution: 'Nedover i gruppe øker radius: **Li < Na < K**',
          },
          {
            label: 'b',
            task: 'C, N, O (alle i periode 2)',
            solution: 'Bortover i periode minker radius: **O < N < C**',
          },
          {
            label: 'c',
            task: 'F, Cl, Br (alle i gruppe 17)',
            solution: 'Nedover i gruppe øker radius: **F < Cl < Br**',
          },
        ],
        solution: 'a) Li < Na < K; b) O < N < C; c) F < Cl < Br',
        hints: ['Nedover: øker. Bortover: minker.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== IONISERINGSENERGI ==========
    {
      id: 'kjemi1-1-3-ionisering',
      type: 'text',
      content: `## Ioniseringsenergi

**Ioniseringsenergi** (IE) er energien som kreves for å fjerne ett elektron fra et atom i gassfase:

$$\\text{X(g)} \\rightarrow \\text{X}^+(\\text{g}) + \\text{e}^-$$

### Trender i periodesystemet

**Nedover i en gruppe:**
- Ioniseringsenergi **minker**
- Ytterste elektroner lenger fra kjernen → lettere å fjerne
- Eksempel: Li > Na > K

**Bortover i en periode:**
- Ioniseringsenergi **øker**
- Sterkere kjernedragning → vanskeligere å fjerne elektroner
- Eksempel: Na < Mg < Al < ... < Cl
- **Unntak**: Små fall mellom gruppe 2→13 og 15→16

### Hvorfor øker IE bortover?
Flere protoner i kjernen → sterkere binding til elektronene → mer energi kreves.

### Edelgasser har høyest IE
Edelgasser har fullt skall → svært stabile → veldig høy ioniseringsenergi.`,
    },

    {
      id: 'kjemi1-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Ioniseringsenergi',
      problem: `Ranger følgende atomer fra lavest til høyest ioniseringsenergi:

Na, Mg, Al, S

(Alle i periode 3)`,
      solution: `**Løsning:**

I en periode øker ioniseringsenergi fra venstre mot høyre (med små unntak).

Rekkefølge: Na → Mg → Al → ... → S

**Lavest til høyest IE: Na < Al < Mg < S**

(Al litt lavere enn Mg pga elektronkonfigurasjon)`,
    },

    {
      id: 'kjemi1-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-3-ex-2',
        number: '3-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ranger atomene fra lavest til høyest ioniseringsenergi:',
        subTasks: [
          {
            label: 'a',
            task: 'Li, Na, K (gruppe 1)',
            solution: 'Nedover i gruppe minker IE: **K < Na < Li**',
          },
          {
            label: 'b',
            task: 'F, Cl, Br (gruppe 17)',
            solution: 'Nedover i gruppe minker IE: **Br < Cl < F**',
          },
          {
            label: 'c',
            task: 'C, N, O (periode 2)',
            solution: 'Bortover øker IE: **C < N < O** (ca)',
          },
        ],
        solution: 'a) K < Na < Li; b) Br < Cl < F; c) C < N < O',
        hints: ['Nedover: minker. Bortover: øker.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ELEKTRONEGATIVITET ==========
    {
      id: 'kjemi1-1-3-elektronegativitet',
      type: 'text',
      content: `## Elektronegativitet

**Elektronegativitet** (EN) er et mål på et atoms evne til å tiltrekke seg elektroner i en kjemisk binding.

### Pauling-skalaen
Linus Pauling definerte en skala fra 0 til 4:

- **Fluor (F)**: 4,0 (høyest)
- **Oksygen (O)**: 3,5
- **Nitrogen (N)**: 3,0
- **Klor (Cl)**: 3,0
- **Cesium (Cs)**: 0,7 (lavest)

### Trender i periodesystemet

**Nedover i en gruppe:**
- Elektronegativitet **minker**
- Større atomer → svakere tiltrekning

**Bortover i en periode:**
- Elektronegativitet **øker**
- Flere protoner → sterkere tiltrekning

**Sammenheng med metalliske egenskaper:**
- Lav EN → **metaller** (gir fra seg elektroner lett)
- Høy EN → **ikke-metaller** (tiltrekker elektroner)

### Edelgasser
Edelgasser har ikke definert EN (deltar ikke i bindinger).`,
    },

    {
      id: 'kjemi1-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Elektronegativitet',
      problem: `Ranger følgende atomer fra lavest til høyest elektronegativitet:

C, O, F, Na

(Bruker periodesystemet)`,
      solution: `**Løsning:**

Fra periodesystemet:
- **Na** (periode 3, gruppe 1): Metall, lav EN
- **C** (periode 2, gruppe 14): Middels EN
- **O** (periode 2, gruppe 16): Høy EN
- **F** (periode 2, gruppe 17): Høyest EN (4,0)

**Lavest til høyest: Na < C < O < F**`,
    },

    {
      id: 'kjemi1-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-3-ex-3',
        number: '3-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ranger atomene fra lavest til høyest elektronegativitet:',
        subTasks: [
          {
            label: 'a',
            task: 'Li, F, C (periode 2)',
            solution: 'Bortover øker EN: **Li < C < F**',
          },
          {
            label: 'b',
            task: 'F, Cl, Br (gruppe 17)',
            solution: 'Nedover minker EN: **Br < Cl < F**',
          },
          {
            label: 'c',
            task: 'Mg, S, Cl (periode 3)',
            solution: 'Bortover øker EN: **Mg < S < Cl**',
          },
        ],
        solution: 'a) Li < C < F; b) Br < Cl < F; c) Mg < S < Cl',
        hints: ['Nedover: minker. Bortover: øker.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== METALLISKE EGENSKAPER ==========
    {
      id: 'kjemi1-1-3-metalliske',
      type: 'text',
      content: `## Metalliske og ikke-metalliske egenskaper

### Metaller
**Egenskaper:**
- Lav elektronegativitet
- Lav ioniseringsenergi
- Gir fra seg elektroner lett → danner **kationer** (M⁺, M²⁺)
- God leder av strøm og varme
- Skinnende, formbare, seige

**Plassering i periodesystemet:**
- Venstre og midtre deler
- Gruppe 1–12 + deler av gruppe 13–16

### Ikke-metaller
**Egenskaper:**
- Høy elektronegativitet
- Høy ioniseringsenergi
- Tiltrekker elektroner → danner **anioner** (X⁻, X²⁻)
- Dårlig leder (isolatorer)
- Matte, sprøe

**Plassering i periodesystemet:**
- Øvre høyre hjørne
- Gruppe 14–17 (øvre deler)

### Metalloider (halvmetaller)
Grunnstoff med egenskaper mellom metaller og ikke-metaller:
- B, Si, Ge, As, Sb, Te

### Trend i periodesystemet
- **Bortover i periode**: Mer ikke-metallisk
- **Nedover i gruppe**: Mer metallisk`,
    },

    {
      id: 'kjemi1-1-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Metalliske egenskaper',
      problem: `Ranger følgende atomer fra mest til minst metallisk:

Na, Mg, Al, Si, P

(Alle i periode 3)`,
      solution: `**Løsning:**

Bortover i perioden minker metalliske egenskaper:

- **Na** (gruppe 1): Alkalimetall (svært metallisk)
- **Mg** (gruppe 2): Jordalkalimetall (metallisk)
- **Al** (gruppe 13): Metall
- **Si** (gruppe 14): Metalloid
- **P** (gruppe 15): Ikke-metall

**Mest til minst metallisk: Na > Mg > Al > Si > P**`,
    },

    {
      id: 'kjemi1-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-3-ex-4',
        number: '3-4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Klassifiser som metall (M) eller ikke-metall (I):',
        subTasks: [
          {
            label: 'a',
            task: 'Natrium (Na, gruppe 1)',
            solution: 'Gruppe 1 (alkalimetall): **M** (metall)',
          },
          {
            label: 'b',
            task: 'Klor (Cl, gruppe 17)',
            solution: 'Gruppe 17 (halogen): **I** (ikke-metall)',
          },
          {
            label: 'c',
            task: 'Jern (Fe, gruppe 8)',
            solution: 'Overgangsmetall: **M** (metall)',
          },
          {
            label: 'd',
            task: 'Oksygen (O, gruppe 16)',
            solution: 'Øvre del av gruppe 16: **I** (ikke-metall)',
          },
        ],
        solution: 'a) M; b) I; c) M; d) I',
        hints: ['Venstre/midten = metaller. Høyre hjørne = ikke-metaller.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-1-3-summary',
      type: 'text',
      content: `## Oppsummering av periodevise trender

| Egenskap | Bortover i periode | Nedover i gruppe |
|----------|-------------------|------------------|
| **Atomradius** | Minker | Øker |
| **Ioniseringsenergi** | Øker | Minker |
| **Elektronegativitet** | Øker | Minker |
| **Metalliske egenskaper** | Minker | Øker |

**Huskeregler:**
- Øvre høyre hjørne (F, O, N, Cl): Høy EN, høy IE, liten radius
- Nedre venstre hjørne (Cs, Fr): Lav EN, lav IE, stor radius
- Edelgasser (gruppe 18): Høy IE, ingen EN (ikke reaktive)`,
    },

    // ========== FLERE OPPGAVER ==========
    {
      id: 'kjemi1-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-3-ex-5',
        number: '3-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket atom har størst radius: Na eller Cl?',
            solution: 'Samme periode. Na er til venstre → **Na** har størst radius',
          },
          {
            label: 'b',
            task: 'Hvilket atom har høyest ioniseringsenergi: F eller I?',
            solution: 'Samme gruppe. F er øverst → **F** har høyest IE',
          },
          {
            label: 'c',
            task: 'Hvilket atom er mest metallisk: Al eller S?',
            solution: 'Al er til venstre i periode 3 → **Al** er mest metallisk',
          },
          {
            label: 'd',
            task: 'Hvilket atom har høyest elektronegativitet: O eller S?',
            solution: 'Samme gruppe. O er øverst → **O** har høyest EN',
          },
        ],
        solution: 'a) Na; b) F; c) Al; d) O',
        hints: ['Bruk trendene i periodesystemet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-3-ex-6',
        number: '3-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor ioniseringsenergi øker bortover i en periode.',
            solution: 'Flere protoner i kjernen → sterkere kjernedragning → vanskeligere å fjerne elektroner → høyere ioniseringsenergi',
          },
          {
            label: 'b',
            task: 'Ranger Na, Mg, K, Ca fra størst til minst atomradius.',
            solution: 'K (periode 4) > Na (periode 3) > Ca (periode 4, men til høyre) ≈ Mg (periode 3, til høyre). **K > Ca > Na > Mg**',
          },
          {
            label: 'c',
            task: 'Hvilket grunnstoff i periode 2 har høyest elektronegativitet?',
            solution: 'F (fluor) er lengst til høyre i periode 2 (bortsett fra Ne) → **F** (4,0 på Pauling-skala)',
          },
        ],
        solution: 'a) Sterkere kjernedragning; b) K > Ca > Na > Mg; c) F',
        hints: ['Kombiner flere trender'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 1.4: Navnsetting av uorganiske forbindelser
// ============================================================================

const CHAPTER_KJEMI1_1_4: TextbookChapter = {
  id: 'kjemi1-1-4',
  courseId: 'kjemi1',
  chapterNumber: '1.4',
  title: 'Navnsetting av uorganiske forbindelser',
  description: 'Lær IUPAC-regler for navnsetting av ioniske forbindelser, molekylforbindelser, syrer og baser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi ioniske forbindelser',
    'navngi molekylforbindelser',
    'navngi syrer og baser',
    'bruke IUPAC-regler korrekt',
  ],
  content: [
    // ========== IONISKE FORBINDELSER ==========
    {
      id: 'kjemi1-1-4-intro',
      type: 'text',
      content: `## Ioniske forbindelser

**Ioniske forbindelser** består av **kationer** (positive ioner) og **anioner** (negative ioner).

### Grunnleggende regler
1. **Kationen** (metall) kommer først
2. **Anionen** (ikke-metall) kommer sist
3. Anion får endelse **-id**

### Eksempler
- **NaCl**: Natriumklorid
- **MgO**: Magnesiumoksid
- **CaF₂**: Kalsiumfluorid
- **Al₂O₃**: Aluminiumoksid

### Vanlige anioner
| Formel | Navn |
|--------|------|
| Cl⁻ | Klorid |
| O²⁻ | Oksid |
| S²⁻ | Sulfid |
| N³⁻ | Nitrid |
| F⁻ | Fluorid |
| Br⁻ | Bromid |
| I⁻ | Jodid |

### Flerleddede ioner (polyatomiske)
Noen ioner består av flere atomer:
- **OH⁻**: Hydroksid
- **SO₄²⁻**: Sulfat
- **NO₃⁻**: Nitrat
- **CO₃²⁻**: Karbonat
- **PO₄³⁻**: Fosfat`,
    },

    {
      id: 'kjemi1-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Ioniske forbindelser',
      problem: `Navngi følgende ioniske forbindelser:

a) KBr
b) CaO
c) Na₂S
d) AlCl₃`,
      solution: `**Løsning:**

a) **KBr**: Kalium + bromid = **Kaliumbromid**

b) **CaO**: Kalsium + oksid = **Kalsiumoksid**

c) **Na₂S**: Natrium + sulfid = **Natriumsulfid**

d) **AlCl₃**: Aluminium + klorid = **Aluminiumklorid**`,
    },

    {
      id: 'kjemi1-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-1',
        number: '4-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Navngi de ioniske forbindelsene:',
        subTasks: [
          {
            label: 'a',
            task: 'NaCl',
            solution: 'Natrium + klorid = **Natriumklorid**',
          },
          {
            label: 'b',
            task: 'MgF₂',
            solution: 'Magnesium + fluorid = **Magnesiumfluorid**',
          },
          {
            label: 'c',
            task: 'Li₂O',
            solution: 'Litium + oksid = **Litiumoksid**',
          },
          {
            label: 'd',
            task: 'CaBr₂',
            solution: 'Kalsium + bromid = **Kalsiumbromid**',
          },
        ],
        solution: 'a) Natriumklorid; b) Magnesiumfluorid; c) Litiumoksid; d) Kalsiumbromid',
        hints: ['Metall + ikke-metall-id'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-2',
        number: '4-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv formel for de ioniske forbindelsene:',
        subTasks: [
          {
            label: 'a',
            task: 'Kaliumoksid',
            solution: 'K⁺ + O²⁻ → trenger 2 K⁺ for å balansere → **K₂O**',
          },
          {
            label: 'b',
            task: 'Magnesiumklorid',
            solution: 'Mg²⁺ + Cl⁻ → trenger 2 Cl⁻ → **MgCl₂**',
          },
          {
            label: 'c',
            task: 'Aluminiumoksid',
            solution: 'Al³⁺ + O²⁻ → 2 Al³⁺ og 3 O²⁻ → **Al₂O₃**',
          },
          {
            label: 'd',
            task: 'Natriumsulfid',
            solution: 'Na⁺ + S²⁻ → trenger 2 Na⁺ → **Na₂S**',
          },
        ],
        solution: 'a) K₂O; b) MgCl₂; c) Al₂O₃; d) Na₂S',
        hints: ['Balanser ladningene: summen må bli 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MOLEKYLFORBINDELSER ==========
    {
      id: 'kjemi1-1-4-molekyl',
      type: 'text',
      content: `## Molekylforbindelser (ikke-metaller)

**Molekylforbindelser** består av bare ikke-metaller (kovalente bindinger).

### Navngivingsregler
1. Bruk **greske prefiks** for å angi antall atomer
2. Første element beholder navnet
3. Andre element får endelse **-id**
4. Hvis det bare er ett atom av første element, dropper vi "mono-"

### Greske prefiks
| Antall | Prefiks |
|--------|---------|
| 1 | mono- |
| 2 | di- |
| 3 | tri- |
| 4 | tetra- |
| 5 | penta- |
| 6 | heksa- |
| 7 | hepta- |
| 8 | okta- |

### Eksempler
- **CO**: Karbonmonoksid (ikke "monokarbonmonoksid")
- **CO₂**: Karbondioksid
- **N₂O**: Dinitogenoksid
- **N₂O₄**: Dinitogentetraoksid
- **PCl₅**: Fosforp<s>entaklorid
- **SF₆**: Svovelheksafluorid`,
    },

    {
      id: 'kjemi1-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Molekylforbindelser',
      problem: `Navngi følgende molekylforbindelser:

a) NO
b) NO₂
c) P₂O₅
d) CCl₄`,
      solution: `**Løsning:**

a) **NO**: Nitrogenoksid (eller nitrogenmonoksid)

b) **NO₂**: Nitrogendioksid

c) **P₂O₅**: Difosforpentaoksid

d) **CCl₄**: Karbontetraklorid`,
    },

    {
      id: 'kjemi1-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-3',
        number: '4-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Navngi molekylforbindelsene:',
        subTasks: [
          {
            label: 'a',
            task: 'CO₂',
            solution: 'Karbon + di + oksid = **Karbondioksid**',
          },
          {
            label: 'b',
            task: 'N₂O₃',
            solution: 'Di + nitrogen + tri + oksid = **Dinitrogentrioksid**',
          },
          {
            label: 'c',
            task: 'SO₃',
            solution: 'Svovel + tri + oksid = **Svoveltrioksid**',
          },
          {
            label: 'd',
            task: 'N₂O₄',
            solution: 'Di + nitrogen + tetra + oksid = **Dinitrogentetraoksid**',
          },
        ],
        solution: 'a) Karbondioksid; b) Dinitrogentrioksid; c) Svoveltrioksid; d) Dinitrogentetraoksid',
        hints: ['Bruk greske prefiks: mono-, di-, tri-, tetra-, penta-'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-4',
        number: '4-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv formel for molekylforbindelsene:',
        subTasks: [
          {
            label: 'a',
            task: 'Dihydrogen (hydrogen-gass)',
            solution: 'Di = 2 → **H₂**',
          },
          {
            label: 'b',
            task: 'Svovelheksafluorid',
            solution: 'S + heksa (6) F → **SF₆**',
          },
          {
            label: 'c',
            task: 'Fosforpentaklorid',
            solution: 'P + penta (5) Cl → **PCl₅**',
          },
          {
            label: 'd',
            task: 'Dinitrogenpentaoksid',
            solution: 'Di (2) N + penta (5) O → **N₂O₅**',
          },
        ],
        solution: 'a) H₂; b) SF₆; c) PCl₅; d) N₂O₅',
        hints: ['Prefikset forteller antall atomer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SYRER OG BASER ==========
    {
      id: 'kjemi1-1-4-syrer',
      type: 'text',
      content: `## Syrer og baser

### Syrer
**Syrer** er forbindelser som avgir H⁺-ioner i vann.

**Binære syrer** (H + ikke-metall):
- **HCl**: Saltsyre (hydrogenklorid)
- **HF**: Fluorhydrogensyre (hydrogenfluorid)
- **H₂S**: Hydrogensulfid

**Oksosyrer** (H + ikke-metall + oksygen):
- **H₂SO₄**: Svovelsyre
- **HNO₃**: Salpetersyre
- **H₃PO₄**: Fosforsyre
- **H₂CO₃**: Karbonsyre

### Baser
**Baser** er forbindelser som avgir OH⁻-ioner i vann.

Vanlige baser:
- **NaOH**: Natriumhydroksid (natronlut)
- **KOH**: Kaliumhydroksid (kalilut)
- **Ca(OH)₂**: Kalsiumhydroksid
- **NH₃**: Ammoniakk (svak base)

### Salter
Når syre + base reagerer → **salt** + vann

Eksempel: HCl + NaOH → **NaCl** + H₂O`,
    },

    {
      id: 'kjemi1-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Syrer og baser',
      problem: `Navngi følgende forbindelser:

a) HBr
b) H₂SO₄
c) NaOH
d) Ca(OH)₂`,
      solution: `**Løsning:**

a) **HBr**: Hydrogenbromid (eller **bromsyre** i vandig løsning)

b) **H₂SO₄**: **Svovelsyre**

c) **NaOH**: **Natriumhydroksid** (natronlut)

d) **Ca(OH)₂**: **Kalsiumhydroksid**`,
    },

    {
      id: 'kjemi1-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-5',
        number: '4-5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Navngi syrene og basene:',
        subTasks: [
          {
            label: 'a',
            task: 'HCl',
            solution: '**Saltsyre** (eller hydrogenklorid)',
          },
          {
            label: 'b',
            task: 'HNO₃',
            solution: '**Salpetersyre**',
          },
          {
            label: 'c',
            task: 'KOH',
            solution: '**Kaliumhydroksid** (kalilut)',
          },
          {
            label: 'd',
            task: 'H₃PO₄',
            solution: '**Fosforsyre**',
          },
        ],
        solution: 'a) Saltsyre; b) Salpetersyre; c) Kaliumhydroksid; d) Fosforsyre',
        hints: ['Vanlige syrer og baser må læres'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-6',
        number: '4-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv formel for:',
        subTasks: [
          {
            label: 'a',
            task: 'Saltsyre',
            solution: '**HCl**',
          },
          {
            label: 'b',
            task: 'Svovelsyre',
            solution: '**H₂SO₄**',
          },
          {
            label: 'c',
            task: 'Natriumhydroksid',
            solution: '**NaOH**',
          },
          {
            label: 'd',
            task: 'Karbonsyre',
            solution: '**H₂CO₃**',
          },
        ],
        solution: 'a) HCl; b) H₂SO₄; c) NaOH; d) H₂CO₃',
        hints: ['Lær de vanligste syrene og basene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-1-4-summary',
      type: 'text',
      content: `## Oppsummering

### Ioniske forbindelser
- Metall + ikke-metall
- Anion får endelse **-id**
- Eksempel: NaCl → Natriumklorid

### Molekylforbindelser
- Ikke-metall + ikke-metall
- Bruk **greske prefiks** (mono-, di-, tri-, ...)
- Eksempel: CO₂ → Karbondioksid

### Syrer
- Begynner med H
- Binære: H + ikke-metall → -syre
- Oksosyrer: H + ikke-metall + O → navn-syre
- Eksempel: H₂SO₄ → Svovelsyre

### Baser
- Inneholder OH⁻
- Metall + hydroksid
- Eksempel: NaOH → Natriumhydroksid`,
    },

    // ========== FLERE OPPGAVER ==========
    {
      id: 'kjemi1-1-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-7',
        number: '4-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver - navngi:',
        subTasks: [
          {
            label: 'a',
            task: 'MgO (ionisk)',
            solution: '**Magnesiumoksid**',
          },
          {
            label: 'b',
            task: 'SO₂ (molekyl)',
            solution: '**Svoveldioksid**',
          },
          {
            label: 'c',
            task: 'Ca(OH)₂ (base)',
            solution: '**Kalsiumhydroksid**',
          },
          {
            label: 'd',
            task: 'N₂O (molekyl)',
            solution: '**Dinitogenoksid** (lystgass)',
          },
        ],
        solution: 'a) Magnesiumoksid; b) Svoveldioksid; c) Kalsiumhydroksid; d) Dinitogenoksid',
        hints: ['Identifiser type forbindelse først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-8',
        number: '4-8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver - skriv formel:',
        subTasks: [
          {
            label: 'a',
            task: 'Natriumnitrat (Na⁺ + NO₃⁻)',
            solution: 'Na⁺ + NO₃⁻ → **NaNO₃**',
          },
          {
            label: 'b',
            task: 'Kalsiumkarbonat (Ca²⁺ + CO₃²⁻)',
            solution: 'Ca²⁺ + CO₃²⁻ → **CaCO₃**',
          },
          {
            label: 'c',
            task: 'Magnesiumsulfat (Mg²⁺ + SO₄²⁻)',
            solution: 'Mg²⁺ + SO₄²⁻ → **MgSO₄**',
          },
          {
            label: 'd',
            task: 'Ammoniakk (nitrogen + hydrogen, NH₃)',
            solution: 'Nitrogen + 3 hydrogen → **NH₃**',
          },
        ],
        solution: 'a) NaNO₃; b) CaCO₃; c) MgSO₄; d) NH₃',
        hints: ['Balanser ladninger for ioniske forbindelser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-1-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-1-4-ex-9',
        number: '4-9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv formel for aluminiumsulfat (Al³⁺ + SO₄²⁻)',
            solution: '2 Al³⁺ + 3 SO₄²⁻ for å balansere → **Al₂(SO₄)₃**',
          },
          {
            label: 'b',
            task: 'Navngi P₄O₁₀',
            solution: 'Tetra (4) fosfor + deka (10) oksid → **Tetrafosfordecoksid**',
          },
          {
            label: 'c',
            task: 'Skriv formel for jernklorid der jern er Fe³⁺',
            solution: 'Fe³⁺ + Cl⁻ → trenger 3 Cl⁻ → **FeCl₃** (jern(III)klorid)',
          },
        ],
        solution: 'a) Al₂(SO₄)₃; b) Tetrafosfordecoksid; c) FeCl₃',
        hints: ['Komplekse polyatomiske ioner krever ekstra oppmerksomhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 2.1: Utvikling av atommodeller
// ============================================================================

const CHAPTER_KJEMI1_2_1: TextbookChapter = {
  id: 'kjemi1-2-1',
  courseId: 'kjemi1',
  chapterNumber: '2.1',
  title: 'Utvikling av atommodeller',
  description: 'Lær om hvordan vår forståelse av atomet har utviklet seg, fra Dalton til kvantemekanikk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive historiske atommodeller fra Dalton til i dag',
    'forklare eksperimenter som førte til nye atommodeller',
    'sammenligne styrker og begrensninger ved ulike modeller',
    'forstå hvordan vitenskapelige modeller utvikles',
  ],
  content: [
    // ========== DALTONS ATOMTEORI ==========
    {
      id: 'kjemi1-2-1-intro',
      type: 'text',
      content: `## Daltons atomteori (1803)

John Dalton var den første som utviklet en vitenskapelig atomteori basert på eksperimentelle data.

### Daltons fem postulater

1. **Alle stoffer består av udelelige atomer**
   - Atomer er de minste partiklene som ikke kan deles videre

2. **Alle atomer av samme grunnstoff er identiske**
   - De har samme masse og egenskaper

3. **Atomer av forskjellige grunnstoffer er forskjellige**
   - Hvert grunnstoff har unike atomer

4. **Kjemiske forbindelser dannes når atomer kombineres**
   - Forbindelser har alltid samme atomforhold (f.eks. H₂O)

5. **Atomer kan ikke skapes eller ødelegges**
   - I kjemiske reaksjoner omdannes bare atomer

### Styrker og begrensninger

**Styrker:**
- Forklarte lover som massebevaringsloven og konstante masseforhold
- La grunnlaget for moderne kjemi

**Begrensninger:**
- Antok at atomer var udelelige (vi vet nå om protoner, nøytroner, elektroner)
- Forklarte ikke hvorfor atomer binder seg sammen
- Kjente ikke til isotoper (atomer av samme grunnstoff med ulik masse)`,
    },

    {
      id: 'kjemi1-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Daltons lov om konstante masseforhold',
      problem: `Ifølge Dalton vil vann (H₂O) alltid ha samme masseforhold mellom hydrogen og oksygen.

Hvis vi lar 2 g hydrogen reagere fullstendig med oksygen, dannes 18 g vann.

a) Hvor mye oksygen ble brukt?
b) Hva er masseforholdet H:O i vann?`,
      solution: `**Løsning:**

a) Massebevaringsloven (atomer kan ikke skapes eller ødelegges):
   Masse hydrogen + masse oksygen = masse vann
   $2\\text{ g} + m_{\\text{O}} = 18\\text{ g}$
   $m_{\\text{O}} = 18 - 2 = 16\\text{ g}$

   Det ble brukt **16 g oksygen**.

b) Masseforhold H:O = $2:16 = 1:8$

   **I vann er masseforholdet alltid 1:8** (uansett hvor mye vi lager).`,
    },

    {
      id: 'kjemi1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-1',
        number: '2-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilke av Daltons postulater er fortsatt gyldige i dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Er atomer udelelige?',
            solution: 'Nei, atomer består av protoner, nøytroner og elektroner. Dette postulaet er **ikke gyldig**.',
          },
          {
            label: 'b',
            task: 'Er alle atomer av samme grunnstoff identiske?',
            solution: 'Nei, isotoper har samme antall protoner men ulikt antall nøytroner. Dette postulaet er **ikke gyldig**.',
          },
          {
            label: 'c',
            task: 'Kan atomer omdannes i kjemiske reaksjoner?',
            solution: 'I kjemiske reaksjoner omdannes atomer, men de kan ikke skapes eller ødelegges. Dette er fortsatt **gyldig**.',
          },
        ],
        solution: 'Kun massebevaring gjelder fullt ut i kjemiske reaksjoner',
        hints: ['Moderne vitenskap har oppdatert flere av Daltons ideer'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },

    // ========== THOMSONS PLUMKAKE-MODELL ==========
    {
      id: 'kjemi1-2-1-thomson',
      type: 'text',
      content: `## Thomsons "plumkake-modell" (1897)

J.J. Thomson oppdaget **elektronen** ved å studere katodestråler i vakuumrør.

### Katodestråle-eksperimentet

Thomson observerte at:
- Katodestråler bøyde av i elektriske og magnetiske felt
- De bøyde mot den **positive** polen → strålene var **negativt ladet**
- Alle katodestråler hadde samme ladning/masse-forhold, uansett katode-materiale

**Konklusjon:** Atomer inneholder negativt ladede partikler kalt **elektroner**.

### Plumkake-modellen

Thomson foreslo at atomet er som en "plumkake":
- **Positivt ladet "deig"** fyller hele atomet
- **Elektroner** (negative "rosiner") er spredt utover i deigen
- Atomet som helhet er nøytralt

### Begrensninger

- Forklarte ikke hvorfor atomer utstråler lys ved oppvarming
- Rutherfords spredningsforsøk viste at modellen var feil (se neste seksjon)`,
    },

    {
      id: 'kjemi1-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Thomsons elektrondiscovery',
      problem: `Thomson målte at elektroner har ladning/masse-forhold på ca. $1{,}76 \\times 10^{11}$ C/kg.

Hvis et elektron har ladning $e = 1{,}6 \\times 10^{-19}$ C, hva er elektronets masse?`,
      solution: `**Løsning:**

Gitt:
- $\\frac{e}{m} = 1{,}76 \\times 10^{11}$ C/kg
- $e = 1{,}6 \\times 10^{-19}$ C

Vi løser for $m$:
$$m = \\frac{e}{1{,}76 \\times 10^{11}} = \\frac{1{,}6 \\times 10^{-19}}{1{,}76 \\times 10^{11}}$$

$$m = 9{,}1 \\times 10^{-31}\\text{ kg}$$

Dette er **elektronets masse** (ca. 1/1836 av protonets masse).`,
    },

    {
      id: 'kjemi1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-2',
        number: '2-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Spørsmål om Thomsons modell:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var den viktigste oppdagelsen Thomson gjorde?',
            solution: 'Thomson oppdaget **elektronen** – den første subatomære partikkelen.',
          },
          {
            label: 'b',
            task: 'Hvorfor kalles modellen "plumkake-modell"?',
            solution: 'Elektronene er som rosiner spredt i en positivt ladet "deig". Derfor likner det en plumkake.',
          },
          {
            label: 'c',
            task: 'Var atomet nøytralt eller ladet i Thomsons modell?',
            solution: 'Atomet var **nøytralt** fordi positiv og negativ ladning balanserte hverandre.',
          },
        ],
        solution: 'a) Elektronen; b) Elektroner som rosiner i deig; c) Nøytralt',
        hints: ['Thomson beviste at atomer inneholder mindre partikler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RUTHERFORDS KJERNEMODELL ==========
    {
      id: 'kjemi1-2-1-rutherford',
      type: 'text',
      content: `## Rutherfords kjernemodell (1911)

Ernest Rutherford testet Thomsons modell ved å skyte alfapartikler (He²⁺) mot en tynn gullfolie.

### Gullfolie-eksperimentet

**Forventet resultat** (ifølge Thomson):
- Alfapartiklene skulle gå rett gjennom
- Små avbøyninger fordi ladningen er spredt utover

**Faktisk resultat:**
- De fleste alfapartikler gikk rett gjennom ✓
- Noen ble sterkt avbøyet
- Noen få ble kastet tilbake (!)

### Rutherfords konklusjon

Atomet består av:
1. **Atomkjerne** – Liten, tett, positivt ladet
   - Inneholder nesten all massen
   - Tar opp lite plass (radius ca. $10^{-15}$ m)

2. **Elektroner** – Beveger seg rundt kjernen
   - I stort sett tomt rom
   - Atomradius ca. $10^{-10}$ m (100 000 ganger større enn kjernen!)

### Analogi: Fotballstadion

Hvis atomkjernen var en ert på midtbanen på Ullevaal stadion, ville det nærmeste elektronet være på tribunen!

### Begrensninger

- Forklarte ikke hvorfor elektronene ikke faller inn mot kjernen (tross tiltrekning)
- Forklarte ikke linjespektra (diskrete farger fra gassutladninger)`,
    },

    {
      id: 'kjemi1-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Rutherfords spredningsforsøk',
      problem: `I Rutherfords forsøk ble 1 av 8000 alfapartikler spredt tilbake.

a) Hva forteller dette om atomets struktur?
b) Hvorfor gikk de fleste partiklene rett gjennom?`,
      solution: `**Løsning:**

a) At så få partikler spreddes tilbake viser at:
   - Den positive ladningen er **konsentrert** i en liten kjerne
   - Kjernen er svært **tett** og **massiv**
   - Det meste av atomet er **tomt rom**

b) De fleste partiklene gikk rett gjennom fordi:
   - Atomet består hovedsakelig av tomt rom
   - Kjernen er så liten at sjansen for treff er minimal
   - Elektronene har for lite masse til å stoppe alfapartiklene`,
    },

    {
      id: 'kjemi1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-3',
        number: '2-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Spørsmål om Rutherfords modell:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den største forskjellen mellom Thomson og Rutherfords modell?',
            solution: 'Rutherford viste at den positive ladningen er **konsentrert i en liten kjerne**, ikke spredt utover hele atomet.',
          },
          {
            label: 'b',
            task: 'Hvorfor kunne ikke Thomsons modell forklare Rutherfords resultater?',
            solution: 'Hvis ladningen var spredt utover, ville alfapartiklene ikke bli kastet tilbake med så stor kraft.',
          },
          {
            label: 'c',
            task: 'Omtrent hvor stor del av atomet utgjøres av kjernen?',
            solution: 'Kjerneradius $\\approx 10^{-15}$ m, atomradius $\\approx 10^{-10}$ m. Forholdet er ca. $1:100\\,000$. Kjernen er **svært liten**.',
          },
        ],
        solution: 'a) Konsentrert kjerne; b) Spredt ladning gir ikke sterk spredning; c) Kjernen er ca. 100 000 ganger mindre enn atomet',
        hints: ['Rutherfords forsøk beviste at atomet har en kjerne'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BOHRS ATOMMODELL ==========
    {
      id: 'kjemi1-2-1-bohr',
      type: 'text',
      content: `## Bohrs atommodell (1913)

Niels Bohr utviklet en modell som forklarte **hvorfor atomer utstråler diskrete lysbølgelengder**.

### Bohrs postulater

1. **Elektroner beveger seg i faste baner** (stasjonære tilstander)
   - Hver bane har en bestemt energi
   - Elektronene sender ikke ut stråling mens de er i en stasjonær tilstand

2. **Elektroner kan hoppe mellom baner** ved å absorbere eller avgi energi
   - Energien må matche energiforskjellen mellom banene: $\\Delta E = h f$

3. **Banene har kvantiserte energier**
   - Kun visse energier er tillatt (ikke alle verdier)

### Hydrogenatomet

For hydrogen fant Bohr at energinivåene er:
$$E_n = -\\frac{13{,}6\\text{ eV}}{n^2}$$

der $n = 1, 2, 3, ...$ (kvantetall)

- $n = 1$: Grunntilstand (laveste energi, -13,6 eV)
- $n = 2, 3, 4, ...$: Eksiterte tilstander

### Linjespektre

Når elektroner hopper fra høyere til lavere energinivå, sendes det ut lys med energi:
$$E_{\\text{foton}} = E_{\\text{høy}} - E_{\\text{lav}} = hf$$

Dette forklarer hvorfor hydrogen kun sender ut visse lysbølgelengder!

### Begrensninger

- Fungerer **kun** for hydrogen (ett elektron)
- Forklarer ikke finstruktur i spektre
- Behandler ikke elektroner som bølger (kun partikler)`,
    },

    {
      id: 'kjemi1-2-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Energihopp i hydrogenatomet',
      problem: `Et elektron i hydrogen hopper fra $n = 3$ til $n = 1$.

a) Beregn energiforskjellen.
b) Sendes det ut eller absorberes det energi?`,
      solution: `**Løsning:**

a) Energinivåene er:
   $$E_n = -\\frac{13{,}6\\text{ eV}}{n^2}$$

   For $n = 3$:
   $$E_3 = -\\frac{13{,}6}{9} = -1{,}51\\text{ eV}$$

   For $n = 1$:
   $$E_1 = -\\frac{13{,}6}{1} = -13{,}6\\text{ eV}$$

   Energiforskjell:
   $$\\Delta E = E_3 - E_1 = -1{,}51 - (-13{,}6) = 12{,}1\\text{ eV}$$

b) Elektronet går fra **høyere** til **lavere** energi → energi **sendes ut** som lys (foton).`,
    },

    {
      id: 'kjemi1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-4',
        number: '2-4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn energi for elektronhopp i hydrogen:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er energien i grunntilstanden ($n = 1$)?',
            solution: '$E_1 = -\\frac{13{,}6}{1^2} = -13{,}6$ eV',
          },
          {
            label: 'b',
            task: 'Beregn energien for $n = 2$',
            solution: '$E_2 = -\\frac{13{,}6}{2^2} = -\\frac{13{,}6}{4} = -3{,}4$ eV',
          },
          {
            label: 'c',
            task: 'Hva er energien til det utsendte lyset når elektron går fra $n = 2$ til $n = 1$?',
            solution: '$\\Delta E = E_2 - E_1 = -3{,}4 - (-13{,}6) = 10{,}2$ eV',
          },
        ],
        solution: 'a) -13,6 eV; b) -3,4 eV; c) 10,2 eV',
        hints: ['Bruk formelen $E_n = -\\frac{13{,}6}{n^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KVANTEMEKANISK MODELL ==========
    {
      id: 'kjemi1-2-1-quantum',
      type: 'text',
      content: `## Kvantemekanisk atommodell (1920-tallet)

Den moderne atommodellen bygger på **kvantemekanikk** og beskriver elektroner som **både partikler og bølger**.

### De Broglies hypotese (1924)

Louis de Broglie foreslo at alle partikler har **bølgeegenskaper**:
$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

der $h$ er Plancks konstant, $m$ er masse og $v$ er hastighet.

### Heisenbergs uskarphetsrelasjon (1927)

Det er **umulig** å samtidig vite en elektrons nøyaktige posisjon og hastighet:
$$\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}$$

Dette betyr at vi kun kan snakke om **sannsynlighet** for hvor elektronet befinner seg.

### Orbitaler (ikke baner!)

I stedet for faste baner bruker vi **orbitaler** – områder hvor elektronet med høy sannsynlighet befinner seg.

**Typer orbitaler:**
- **s-orbital**: Kuleformet
- **p-orbital**: Hantelformet (3 stk per energinivå)
- **d-orbital**: Mer kompleks (5 stk per energinivå)
- **f-orbital**: Enda mer kompleks (7 stk per energinivå)

### Fordeler

- Forklarer kjemisk binding (overlapp av orbitaler)
- Gjelder for **alle** atomer, ikke bare hydrogen
- Gir grunnlag for moderne kjemi og fysikk`,
    },

    {
      id: 'kjemi1-2-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Sammenligning av modeller',
      problem: `Fyll ut tabellen som sammenligner atommodellene:

| Modell | Kjerne | Elektroner | Styrke | Svakhet |
|--------|--------|------------|--------|---------|
| Dalton | ? | ? | ? | ? |
| Thomson | ? | ? | ? | ? |
| Rutherford | ? | ? | ? | ? |
| Bohr | ? | ? | ? | ? |`,
      solution: `**Løsning:**

| Modell | Kjerne | Elektroner | Styrke | Svakhet |
|--------|--------|------------|--------|---------|
| Dalton | Ingen | Ingen | Massebevaringsloven | Ingen substruktur |
| Thomson | Spredt positiv | Spredt i "deig" | Oppdaget elektronet | Feil struktur |
| Rutherford | Liten, tett | Kretser i tomt rom | Bekreftet kjerne | Forklarer ikke spektre |
| Bohr | Liten, tett | Faste baner | Forklarer H-spektrum | Kun for hydrogen |
| Kvantemekanikk | Liten, tett | Orbitaler (sannsynlighet) | Gjelder alle atomer | Matematisk kompleks |`,
    },

    {
      id: 'kjemi1-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-5',
        number: '2-5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken modell forklarer følgende observasjoner best?',
        subTasks: [
          {
            label: 'a',
            task: 'Hydrogen sender kun ut visse lysbølgelengder',
            solution: '**Bohrs modell** forklarer linjespektre gjennom kvantiserte energinivåer.',
          },
          {
            label: 'b',
            task: 'Alfapartikler kastes tilbake fra gullfolie',
            solution: '**Rutherfords modell** med konsentrert kjerne forklarer tilbakespredning.',
          },
          {
            label: 'c',
            task: 'Elektroner oppfører seg som bølger',
            solution: '**Kvantemekanisk modell** behandler elektroner som både partikler og bølger.',
          },
        ],
        solution: 'a) Bohr; b) Rutherford; c) Kvantemekanikk',
        hints: ['Tenk på hva hver modell introduserte'],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-2-1-summary',
      type: 'text',
      content: `## Oppsummering: Utviklingen av atommodeller

### Tidslinje

1. **Dalton (1803)**: Atomer som udelelige kuler
2. **Thomson (1897)**: Oppdaget elektroner – "plumkake-modell"
3. **Rutherford (1911)**: Oppdaget atomkjernen – kjerne + elektroner
4. **Bohr (1913)**: Kvantiserte energinivåer – forklarte spektre
5. **Kvantemekanikk (1920-tallet)**: Orbitaler og bølge-partikkel-dualitet

### Viktige lærdommer

- Vitenskapelige modeller **utvikles** basert på nye eksperimenter
- Ingen modell er "perfekt" – alle har styrker og begrensninger
- Nye observasjoner kan tvinge oss til å **endre** eller **forkaste** modeller
- Dagens kvantemekaniske modell er den mest komplette, men fortsatt en **modell**`,
    },

    {
      id: 'kjemi1-2-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-6',
        number: '2-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Refleksjonsspørsmål om vitenskapelige modeller:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig å oppdatere vitenskapelige modeller?',
            solution: 'Modeller må oppdateres når nye eksperimenter gir resultater som strider mot modellen. Dette sikrer at vitenskapen er i samsvar med virkeligheten.',
          },
          {
            label: 'b',
            task: 'Betyr det at eldre modeller er verdiløse?',
            solution: 'Nei! Eldre modeller er fortsatt nyttige for enkle forklaringer og viser hvordan vitenskap utvikles trinn for trinn.',
          },
          {
            label: 'c',
            task: 'Kan vi være sikre på at dagens modell er den "riktige"?',
            solution: 'Nei, den kvantemekaniske modellen er den beste vi har nå, men fremtidige oppdagelser kan kreve nye modeller.',
          },
        ],
        solution: 'Vitenskapelige modeller er verktøy som utvikles over tid',
        hints: ['Tenk på vitenskap som en pågående prosess'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },

    {
      id: 'kjemi1-2-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-1-ex-7',
        number: '2-7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn bølgelengden til et elektron som beveger seg med 1% av lysets hastighet ($c = 3 \\times 10^8$ m/s). Bruk $\\lambda = h/(mv)$ med $h = 6{,}63 \\times 10^{-34}$ Js og $m_e = 9{,}1 \\times 10^{-31}$ kg.',
            solution: '$v = 0{,}01c = 3 \\times 10^6$ m/s. $\\lambda = \\frac{6{,}63 \\times 10^{-34}}{9{,}1 \\times 10^{-31} \\cdot 3 \\times 10^6} = 2{,}4 \\times 10^{-10}$ m = **0,24 nm**',
          },
          {
            label: 'b',
            task: 'Hvis et elektron hopper fra $n = 4$ til $n = 2$ i hydrogen, hva er bølgelengden til det utsendte lyset? ($E_n = -13{,}6/n^2$ eV, $hc = 1240$ eV·nm)',
            solution: '$E_4 = -13{,}6/16 = -0{,}85$ eV, $E_2 = -13{,}6/4 = -3{,}4$ eV. $\\Delta E = -0{,}85 - (-3{,}4) = 2{,}55$ eV. $\\lambda = hc/\\Delta E = 1240/2{,}55 = **486$ nm** (blått lys)',
          },
          {
            label: 'c',
            task: 'Hvorfor kan ikke Bohrs modell forklare heliums spektrum (2 elektroner)?',
            solution: 'Bohrs modell antar at elektroner ikke påvirker hverandre. Med 2 elektroner må vi ta hensyn til frastøting mellom dem, noe Bohr ikke gjorde.',
          },
        ],
        solution: 'a) 0,24 nm; b) 486 nm (blått lys); c) Elektron-elektron-interaksjoner',
        hints: ['Bruk de gitte formlene nøye'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 2.2: Spektroskopi
// ============================================================================

const CHAPTER_KJEMI1_2_2: TextbookChapter = {
  id: 'kjemi1-2-2',
  courseId: 'kjemi1',
  chapterNumber: '2.2',
  title: 'Spektroskopi',
  description: 'Lær om elektromagnetisk stråling, spektre, og hvordan spektroskopi brukes til å analysere stoffer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive elektromagnetisk stråling og bølgelengde',
    'forklare emisjonsspektrer og absorpsjonsspektrer',
    'bruke spektroskopi til kvalitativ og kvantitativ analyse',
    'anvende Beer-Lamberts lov',
  ],
  content: [
    // ========== ELEKTROMAGNETISK STRÅLING ==========
    {
      id: 'kjemi1-2-2-intro',
      type: 'text',
      content: `## Elektromagnetisk stråling

Lys er en form for **elektromagnetisk stråling** – energi som forplanter seg som bølger.

### Bølgeegenskaper

Elektromagnetiske bølger beskrives ved:
- **Bølgelengde** ($\\lambda$, lambda) – Avstanden mellom to bølgetopper (målt i nm, μm, m)
- **Frekvens** ($f$) – Antall svingninger per sekund (målt i Hz = 1/s)
- **Hastighet** ($c$) – Lysets hastighet i vakuum: $c = 3{,}00 \\times 10^8$ m/s

### Sammenhengen mellom bølgelengde og frekvens

$$c = \\lambda \\cdot f$$

- **Lang bølgelengde** → lav frekvens (f.eks. radiobølger)
- **Kort bølgelengde** → høy frekvens (f.eks. røntgen)

### Det elektromagnetiske spekteret

Sortert fra lang til kort bølgelengde:

| Type | Bølgelengde | Anvendelse |
|------|-------------|------------|
| Radiobølger | > 1 m | Radio, TV |
| Mikrobølger | 1 mm - 1 m | Mikrobølgeovn, mobiltelefon |
| Infrarødt | 700 nm - 1 mm | Varmestråling |
| **Synlig lys** | **400-700 nm** | **Det vi ser** |
| Ultrafiolett (UV) | 10-400 nm | Solbrenthet, sterilisering |
| Røntgen | 0,01-10 nm | Medisinske bilder |
| Gammastråling | < 0,01 nm | Kreftbehandling |

### Synlig lys

Farger i synlig spektrum (ca. bølgelengder):
- **Fiolett**: 400-450 nm
- **Blå**: 450-495 nm
- **Grønn**: 495-570 nm
- **Gul**: 570-590 nm
- **Oransje**: 590-620 nm
- **Rød**: 620-700 nm`,
    },

    {
      id: 'kjemi1-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne frekvens fra bølgelengde',
      problem: `Grønt lys har bølgelengde $\\lambda = 520$ nm.

a) Regn om til meter.
b) Beregn frekvensen til det grønne lyset.`,
      solution: `**Løsning:**

a) $1$ nm $= 10^{-9}$ m
   $$\\lambda = 520\\text{ nm} = 520 \\times 10^{-9}\\text{ m} = 5{,}20 \\times 10^{-7}\\text{ m}$$

b) Vi bruker $c = \\lambda f$:
   $$f = \\frac{c}{\\lambda} = \\frac{3{,}00 \\times 10^8}{5{,}20 \\times 10^{-7}}$$
   $$f = 5{,}77 \\times 10^{14}\\text{ Hz}$$

   Det grønne lyset har frekvens **$5{,}77 \\times 10^{14}$ Hz** (ca. 577 billioner svingninger per sekund!).`,
    },

    {
      id: 'kjemi1-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-1',
        number: '2-8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn frekvens for følgende bølgelengder:',
        subTasks: [
          {
            label: 'a',
            task: 'Rødt lys: $\\lambda = 650$ nm',
            solution: '$f = c/\\lambda = (3 \\times 10^8)/(650 \\times 10^{-9}) = 4{,}6 \\times 10^{14}$ Hz',
          },
          {
            label: 'b',
            task: 'Blått lys: $\\lambda = 450$ nm',
            solution: '$f = c/\\lambda = (3 \\times 10^8)/(450 \\times 10^{-9}) = 6{,}7 \\times 10^{14}$ Hz',
          },
          {
            label: 'c',
            task: 'Hvilket lys har høyest frekvens?',
            solution: 'Blått lys har kortere bølgelengde og derfor **høyere frekvens** enn rødt lys.',
          },
        ],
        solution: 'a) 4,6×10¹⁴ Hz; b) 6,7×10¹⁴ Hz; c) Blått',
        hints: ['Bruk $f = c/\\lambda$ med $c = 3 \\times 10^8$ m/s'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },

    // ========== ENERGI I FOTONER ==========
    {
      id: 'kjemi1-2-2-energy',
      type: 'text',
      content: `## Energi i fotoner

Lys kan også beskrives som **partikler** kalt **fotoner** (lys-kvanter).

### Plancks relasjon

Energien til et foton er proporsjonalt med frekvensen:
$$E = h f$$

der $h = 6{,}63 \\times 10^{-34}$ Js (Plancks konstant).

### Kombinert med $c = \\lambda f$

Vi kan også skrive:
$$E = \\frac{hc}{\\lambda}$$

**Viktig:**
- **Kort bølgelengde** → høy energi (f.eks. UV)
- **Lang bølgelengde** → lav energi (f.eks. infrarødt)

### Elektronvolt (eV)

I atomfysikk brukes ofte enheten **elektronvolt** (eV):
$$1\\text{ eV} = 1{,}6 \\times 10^{-19}\\text{ J}$$

**Praktisk formel** for synlig lys (i eV·nm):
$$E \\text{ (eV)} = \\frac{1240}{\\lambda \\text{ (nm)}}$$`,
    },

    {
      id: 'kjemi1-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Fotonenenergi',
      problem: `Et blått foton har bølgelengde $\\lambda = 450$ nm.

a) Beregn energien i joule.
b) Beregn energien i elektronvolt.`,
      solution: `**Løsning:**

a) Vi bruker $E = hc/\\lambda$:
   $$E = \\frac{(6{,}63 \\times 10^{-34})(3{,}00 \\times 10^8)}{450 \\times 10^{-9}}$$
   $$E = 4{,}42 \\times 10^{-19}\\text{ J}$$

b) Konverter til eV:
   $$E = \\frac{4{,}42 \\times 10^{-19}}{1{,}6 \\times 10^{-19}} = 2{,}76\\text{ eV}$$

   Alternativt bruk direkteformelen:
   $$E = \\frac{1240}{450} = 2{,}76\\text{ eV}$$

   Blått lys har energi **2,76 eV per foton**.`,
    },

    {
      id: 'kjemi1-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-2',
        number: '2-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn fotonenergier:',
        subTasks: [
          {
            label: 'a',
            task: 'Rødt lys ($\\lambda = 620$ nm) – beregn energi i eV',
            solution: '$E = 1240/620 = 2{,}0$ eV',
          },
          {
            label: 'b',
            task: 'UV-lys ($\\lambda = 300$ nm) – beregn energi i eV',
            solution: '$E = 1240/300 = 4{,}13$ eV',
          },
          {
            label: 'c',
            task: 'Hvilket lys har høyest energi?',
            solution: 'UV-lys har kortere bølgelengde og derfor **høyere energi** enn rødt lys.',
          },
        ],
        solution: 'a) 2,0 eV; b) 4,13 eV; c) UV',
        hints: ['Bruk $E = 1240/\\lambda$ (eV·nm)'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },

    // ========== EMISJONSSPEKTRER ==========
    {
      id: 'kjemi1-2-2-emission',
      type: 'text',
      content: `## Emisjonsspektrer

Når atomer eller molekyler **eksiteres** (tilføres energi), sender de ut lys når de returnerer til lavere energinivå.

### Hvordan skapes emisjonsspektre?

1. **Tilførsel av energi** (varme, elektrisk utladning)
2. Elektroner hopper til **høyere energinivå** (eksitert tilstand)
3. Elektroner faller tilbake til **lavere nivå**
4. Overskuddsenergien sendes ut som **lys** (fotoner)

### Energiforskjell og bølgelengde

Energien til det utsendte fotonet:
$$\\Delta E = E_{\\text{høy}} - E_{\\text{lav}} = h f = \\frac{hc}{\\lambda}$$

### Linjespektre

Når gass-atomer sender ut lys, får vi **linjespekter** – bare visse bølgelengder (diskrete linjer).

**Eksempel:** Hydrogen sender ut:
- **Rød** linje (656 nm) – $n=3 \\to n=2$
- **Blågrønn** linje (486 nm) – $n=4 \\to n=2$
- **Blå** linje (434 nm) – $n=5 \\to n=2$
- **Fiolett** linje (410 nm) – $n=6 \\to n=2$

Dette kalles **Balmer-serien** (hopp til $n=2$).

### Kontinuerlige spektre

Hvis en fast substans oppvarmes (f.eks. glødetråd), sendes det ut et **kontinuerlig spektrum** med alle bølgelengder.`,
    },

    {
      id: 'kjemi1-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Emisjonslinje i hydrogen',
      problem: `I hydrogen hopper et elektron fra $n=3$ til $n=2$.

a) Beregn energiforskjellen (bruk $E_n = -13{,}6/n^2$ eV).
b) Hva er bølgelengden til det utsendte lyset?
c) Hvilken farge er dette?`,
      solution: `**Løsning:**

a) Energinivåene:
   $$E_3 = -\\frac{13{,}6}{9} = -1{,}51\\text{ eV}$$
   $$E_2 = -\\frac{13{,}6}{4} = -3{,}40\\text{ eV}$$

   Energiforskjell:
   $$\\Delta E = E_3 - E_2 = -1{,}51 - (-3{,}40) = 1{,}89\\text{ eV}$$

b) Bølgelengde:
   $$\\lambda = \\frac{1240}{\\Delta E} = \\frac{1240}{1{,}89} = 656\\text{ nm}$$

c) 656 nm ligger i det **røde** området av spekteret.

   Dette er den røde H-α linjen i Balmer-serien!`,
    },

    {
      id: 'kjemi1-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-3',
        number: '2-10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn bølgelengder for hydrogens Balmer-serie:',
        subTasks: [
          {
            label: 'a',
            task: 'Hopp fra $n=4$ til $n=2$ – beregn $\\Delta E$ og $\\lambda$',
            solution: '$E_4 = -13{,}6/16 = -0{,}85$ eV, $E_2 = -3{,}40$ eV. $\\Delta E = 2{,}55$ eV. $\\lambda = 1240/2{,}55 = 486$ nm (blågrønn)',
          },
          {
            label: 'b',
            task: 'Hopp fra $n=5$ til $n=2$ – beregn $\\lambda$',
            solution: '$E_5 = -13{,}6/25 = -0{,}544$ eV. $\\Delta E = -0{,}544 - (-3{,}40) = 2{,}86$ eV. $\\lambda = 1240/2{,}86 = 434$ nm (blå)',
          },
          {
            label: 'c',
            task: 'Hvilket hopp gir det røde lyset (656 nm)?',
            solution: 'Hopp fra **$n=3$ til $n=2$** gir 656 nm (rødt lys).',
          },
        ],
        solution: 'a) 486 nm; b) 434 nm; c) n=3 → n=2',
        hints: ['Bruk $E_n = -13{,}6/n^2$ og $\\lambda = 1240/\\Delta E$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ABSORPSJONSSPEKTRER ==========
    {
      id: 'kjemi1-2-2-absorption',
      type: 'text',
      content: `## Absorpsjonsspektrer

Når hvitt lys sendes gjennom en gass, **absorberes** visse bølgelengder.

### Hvordan skapes absorpsjonsspektre?

1. Hvitt lys (alle bølgelengder) sendes gjennom gass
2. Atomer **absorberer** fotoner med nøyaktig riktig energi
3. Elektroner hopper til **høyere energinivå**
4. Det som kommer gjennom er hvitt lys **minus** de absorberte bølgelengdene

### Absorpsjonslinjespekter

Vi ser **mørke linjer** på en lys bakgrunn – dette er de absorberte bølgelengdene.

**Viktig:** Absorbsjonslinjene er på **samme bølgelengder** som emisjonslinjene for samme stoff!

### Anvendelser

- **Stjerneanalyse**: Ved å studere absorpsjonslinjer i sollys kan vi identifisere grunnstoffer i solens atmosfære
- **Kvalitativ analyse**: Identifisere ukjente stoffer
- **Kvantitativ analyse**: Måle konsentrasjoner (se Beer-Lamberts lov)`,
    },

    {
      id: 'kjemi1-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Absorpsjonsspektrum',
      problem: `Når hvitt lys sendes gjennom hydrogengass, observeres mørke linjer ved 656 nm, 486 nm, 434 nm og 410 nm.

a) Hvorfor ser vi mørke linjer?
b) Hva skjer med elektronene i hydrogen når 656 nm lys absorberes?`,
      solution: `**Løsning:**

a) Hydrogengassens atomer **absorberer** lys med nøyaktig disse bølgelengdene. Fotonenergien matcher energiforskjellene mellom elektronenes energinivåer. Det hvite lyset "mister" disse bølgelengdene, og vi ser mørke linjer.

b) 656 nm tilsvarer $\\Delta E = 1{,}89$ eV (se forrige eksempel). Dette er energiforskjellen mellom $n=2$ og $n=3$ i hydrogen.

   Når 656 nm lys absorberes:
   - Elektronet i $n=2$ absorberer fotonet
   - Elektronet hopper til $n=3$ (eksitert tilstand)

   Senere faller elektronet tilbake og sender ut 656 nm lys (emisjon).`,
    },

    {
      id: 'kjemi1-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-4',
        number: '2-11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Spørsmål om emisjon og absorpsjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på emisjonsspekter og absorpsjonsspekter?',
            solution: '**Emisjon**: Lyse linjer på mørk bakgrunn. **Absorpsjon**: Mørke linjer på lys bakgrunn. Samme bølgelengder!',
          },
          {
            label: 'b',
            task: 'Hvorfor har hydrogen samme linjer i emisjon og absorpsjon?',
            solution: 'Energinivåene er de samme, så elektronene kan både absorbere og utstråle fotoner med samme energi ($\\Delta E$).',
          },
          {
            label: 'c',
            task: 'Hvordan kan vi identifisere ukjente grunnstoffer i stjerner?',
            solution: 'Ved å sammenligne absorpsjonslinjene i stjerners spektre med kjente grunnstoffer. Hver grunnstoff har sitt unike "fingeravtrykk".',
          },
        ],
        solution: 'a) Emisjon: lyse linjer; Absorpsjon: mørke linjer; b) Samme energinivåer; c) Unike absorpsjonslinjer',
        hints: ['Spektroskopi er som "fingeravtrykk" for grunnstoffer'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },

    // ========== UV-VIS SPEKTROSKOPI ==========
    {
      id: 'kjemi1-2-2-uvvis',
      type: 'text',
      content: `## UV-Vis spektroskopi

**UV-Vis spektroskopi** måler absorpsjon av **ultrafiolett** (UV) og **synlig** (visible) lys.

### Instrumentet: Spektrofotometer

Et spektrofotometer:
1. Sender lys med valgt bølgelengde gjennom en prøve
2. Måler hvor mye lys som **absorberes** ($A$) eller **transmitteres** ($T$)

### Absorbans og transmittans

**Transmittans** (T):
$$T = \\frac{I}{I_0}$$
der $I_0$ er intensiteten til innfallende lys og $I$ er intensiteten etter prøven.

**Absorbans** (A):
$$A = -\\log_{10}(T) = -\\log_{10}\\left(\\frac{I}{I_0}\\right)$$

**Viktig:**
- Høy transmittans (mye lys går gjennom) → **lav absorbans**
- Lav transmittans (lite lys går gjennom) → **høy absorbans**

### Fargestoffanalyse

Hvis et stoff absorberer:
- **Blått lys** → vi ser **gult/oransje** (komplementærfarge)
- **Rødt lys** → vi ser **grønt/blågrønt**
- **Grønt lys** → vi ser **rødt/fiolett**

**Regel:** Vi ser fargen som **ikke** absorberes!`,
    },

    {
      id: 'kjemi1-2-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Beregne absorbans',
      problem: `En løsning transmitterer 25% av lyset ved 500 nm.

a) Hva er transmittansen (T)?
b) Beregn absorbansen (A).`,
      solution: `**Løsning:**

a) 25% transmittert → $T = 0{,}25$

b) Absorbans:
   $$A = -\\log_{10}(T) = -\\log_{10}(0{,}25)$$
   $$A = -(-0{,}602) = 0{,}602$$

   Absorbansen er **A = 0,60** (ofte rundet til 2 desimaler).`,
    },

    {
      id: 'kjemi1-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-5',
        number: '2-12',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn absorbans fra transmittans:',
        subTasks: [
          {
            label: 'a',
            task: '$T = 0{,}50$ (50% transmittert)',
            solution: '$A = -\\log_{10}(0{,}50) = 0{,}301$',
          },
          {
            label: 'b',
            task: '$T = 0{,}10$ (10% transmittert)',
            solution: '$A = -\\log_{10}(0{,}10) = 1{,}00$',
          },
          {
            label: 'c',
            task: '$T = 1{,}00$ (100% transmittert, ingen absorpsjon)',
            solution: '$A = -\\log_{10}(1{,}00) = 0$',
          },
        ],
        solution: 'a) 0,30; b) 1,00; c) 0',
        hints: ['Bruk $A = -\\log_{10}(T)$'],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },

    // ========== BEER-LAMBERTS LOV ==========
    {
      id: 'kjemi1-2-2-beer',
      type: 'text',
      content: `## Beer-Lamberts lov

Beer-Lamberts lov beskriver sammenhengen mellom **absorbans**, **konsentrasjon** og **prøvens lengde**.

### Formelen

$$A = \\varepsilon \\cdot c \\cdot l$$

der:
- $A$ = absorbans (ingen enhet)
- $\\varepsilon$ = molær absorpsjonskoeffisient (L/(mol·cm))
- $c$ = konsentrasjon (mol/L)
- $l$ = celle-lengde/kyvettens lengde (cm)

### Hva betyr dette?

- **Høyere konsentrasjon** ($c$) → høyere absorbans (mer partikler absorberer lys)
- **Lengre celle** ($l$) → høyere absorbans (lyset må gjennom mer stoff)
- **Høyere $\\varepsilon$** → stoffet absorberer mer effektivt

### Anvendelser

1. **Kvantitativ analyse**: Bestemme ukjent konsentrasjon
2. **Kvalitetskontroll**: Sjekke konsentrasjon i legemidler
3. **Miljøanalyse**: Måle forurensning i vann

### Fremgangsmåte

1. Lag standardløsninger med kjent konsentrasjon
2. Mål absorbansen for hver
3. Lag en **kalibrasjonskurve** (graf: $A$ vs. $c$)
4. Mål absorbans for ukjent prøve
5. Les av konsentrasjonen fra kurven`,
    },

    {
      id: 'kjemi1-2-2-example-6',
      type: 'example',
      title: 'Eksempel 6: Bruk av Beer-Lamberts lov',
      problem: `En løsning av kobbersulfat (CuSO₄) har absorbans $A = 0{,}45$ ved 600 nm i en 1,0 cm celle.

Den molare absorpsjonskoeffisienten er $\\varepsilon = 12$ L/(mol·cm).

Beregn konsentrasjonen av Cu²⁺.`,
      solution: `**Løsning:**

Gitt:
- $A = 0{,}45$
- $\\varepsilon = 12$ L/(mol·cm)
- $l = 1{,}0$ cm

Vi bruker Beer-Lamberts lov og løser for $c$:
$$A = \\varepsilon \\cdot c \\cdot l$$
$$c = \\frac{A}{\\varepsilon \\cdot l} = \\frac{0{,}45}{12 \\cdot 1{,}0}$$
$$c = 0{,}0375\\text{ mol/L}$$

Konsentrasjonen er **0,038 mol/L** (eller 38 mmol/L).`,
    },

    {
      id: 'kjemi1-2-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-6',
        number: '2-13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Beer-Lamberts lov til å beregne:',
        subTasks: [
          {
            label: 'a',
            task: 'En løsning med $c = 0{,}020$ mol/L har $\\varepsilon = 15$ L/(mol·cm) og $l = 1$ cm. Beregn $A$.',
            solution: '$A = \\varepsilon \\cdot c \\cdot l = 15 \\times 0{,}020 \\times 1 = 0{,}30$',
          },
          {
            label: 'b',
            task: 'En løsning har $A = 0{,}60$, $\\varepsilon = 20$ L/(mol·cm) og $l = 2$ cm. Beregn $c$.',
            solution: '$c = A/(\\varepsilon \\cdot l) = 0{,}60/(20 \\times 2) = 0{,}015$ mol/L',
          },
          {
            label: 'c',
            task: 'Hva skjer med absorbansen hvis konsentrasjonen dobles?',
            solution: 'Ifølge Beer-Lamberts lov er $A$ proporsjonal med $c$. Hvis $c$ dobles, **dobles også $A$**.',
          },
        ],
        solution: 'a) 0,30; b) 0,015 mol/L; c) Dobles',
        hints: ['Bruk $A = \\varepsilon \\cdot c \\cdot l$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-2-2-summary',
      type: 'text',
      content: `## Oppsummering: Spektroskopi

### Viktige begreper

**Elektromagnetisk stråling:**
- Bølgelengde ($\\lambda$), frekvens ($f$), hastighet ($c$)
- $c = \\lambda f$
- Fotonenergier: $E = hf = hc/\\lambda$

**Spektre:**
- **Emisjonsspekter**: Lyse linjer (atomer sender ut lys)
- **Absorpsjonsspekter**: Mørke linjer (atomer absorberer lys)
- Linjespektra er "fingeravtrykk" for grunnstoffer

**Spektroskopi:**
- UV-Vis spektroskopi måler absorpsjon av lys
- Absorbans: $A = -\\log_{10}(T)$
- Beer-Lamberts lov: $A = \\varepsilon \\cdot c \\cdot l$
- Brukes til kvalitativ og kvantitativ analyse

### Anvendelser i praksis

- **Astronomi**: Identifisere grunnstoffer i stjerner
- **Kjemi**: Bestemme konsentrasjoner
- **Medisin**: Analysere blodprøver
- **Miljø**: Måle forurensning`,
    },

    {
      id: 'kjemi1-2-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-7',
        number: '2-14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'En løsning absorberer maksimalt ved 520 nm (grønt lys). Hvilken farge ser vi?',
            solution: 'Løsningen absorberer grønt lys, så vi ser **komplementærfargen**: rød/magenta.',
          },
          {
            label: 'b',
            task: 'To løsninger med $c_1 = 0{,}010$ mol/L og $c_2 = 0{,}030$ mol/L har absorbans $A_1 = 0{,}20$. Hva er $A_2$?',
            solution: 'Beer-Lamberts lov er lineær: $A \\propto c$. Hvis $c$ tredobles, tredobles også $A$. $A_2 = 3 \\times 0{,}20 = 0{,}60$.',
          },
          {
            label: 'c',
            task: 'En ukjent løsning har $A = 0{,}50$. Standardløsninger viser: $c = 0{,}01$ M gir $A = 0{,}10$, $c = 0{,}02$ M gir $A = 0{,}20$. Hva er konsentrasjonen?',
            solution: 'Stigningstallet er $A/c = 0{,}10/0{,}01 = 10$. For $A = 0{,}50$: $c = 0{,}50/10 = 0{,}05$ M.',
          },
        ],
        solution: 'a) Rød/magenta; b) 0,60; c) 0,05 M',
        hints: ['Bruk lineariteten i Beer-Lamberts lov'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-2-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-2-2-ex-8',
        number: '2-15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kalibrasjonskurve-oppgave:',
        subTasks: [
          {
            label: 'a',
            task: 'Du har laget 5 standardløsninger med konsentrasjoner 0,01 - 0,02 - 0,03 - 0,04 - 0,05 mol/L. De tilhørende absorbansene er 0,15 - 0,30 - 0,45 - 0,60 - 0,75. Beregn $\\varepsilon$ hvis $l = 1{,}0$ cm.',
            solution: 'Stigningstallet $A/c = 0{,}15/0{,}01 = 15$. Fra $A = \\varepsilon \\cdot c \\cdot l$ får vi $\\varepsilon = A/(c \\cdot l) = 15/1 = 15$ L/(mol·cm).',
          },
          {
            label: 'b',
            task: 'En ukjent prøve har absorbans 0,54. Hva er konsentrasjonen?',
            solution: 'Bruk $c = A/(\\varepsilon \\cdot l) = 0{,}54/(15 \\times 1) = 0{,}036$ mol/L.',
          },
          {
            label: 'c',
            task: 'Hva er transmittansen for den ukjente prøven?',
            solution: 'Fra $A = -\\log_{10}(T)$ får vi $T = 10^{-A} = 10^{-0{,}54} = 0{,}29$ (29%).',
          },
        ],
        solution: 'a) 15 L/(mol·cm); b) 0,036 mol/L; c) 0,29',
        hints: ['Kalibrasjonskurven gir deg $\\varepsilon$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 3.1: Ionebinding
// ============================================================================

const CHAPTER_KJEMI1_3_1: TextbookChapter = {
  id: 'kjemi1-3-1',
  courseId: 'kjemi1',
  chapterNumber: '3.1',
  title: 'Ionebinding',
  description: 'Lær om elektrostatiske krefter, ionedannelse, ionegitter og egenskaper til ioniske forbindelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan ioner dannes fra atomer',
    'beskrive elektrostatiske krefter i ionebindinger',
    'tegne Lewis-strukturer for ioner',
    'sette opp empiriske formler for ioneforbindelser',
    'forklare egenskapene til ioniske forbindelser',
  ],
  content: [
    // ========== ELEKTROSTATISKE KREFTER ==========
    {
      id: 'kjemi1-3-1-intro',
      type: 'text',
      content: `## Elektrostatiske krefter

**Elektrostatiske krefter** er tiltreknings- eller frastøtningskrefter mellom ladede partikler.

### Grunnleggende regler
- **Motsatte ladninger tiltrekker hverandre**: + og − tiltrekkes
- **Like ladninger frastøter hverandre**: + og +, eller − og −, frastøtes

Dette er grunnlaget for **ionebinding**.

### Hva er en ionebinding?

En **ionebinding** er den elektrostatiske tiltrekningskraften mellom positivt ladede ioner (kationer) og negativt ladede ioner (anioner).

**Viktig:** Ionebindinger oppstår vanligvis mellom:
- **Metaller** (som avgir elektroner og blir kationer)
- **Ikke-metaller** (som tar opp elektroner og blir anioner)`,
    },

    {
      id: 'kjemi1-3-1-ionedannelse',
      type: 'text',
      content: `## Ionedannelse

### Kationer (positive ioner)

**Kationer** dannes når et atom **avgir** ett eller flere elektroner:

$$\\text{Na} \\rightarrow \\text{Na}^+ + e^-$$

- Natrium (Na) avgir 1 elektron → Na⁺
- Kalsium (Ca) avgir 2 elektroner → Ca²⁺
- Aluminium (Al) avgir 3 elektroner → Al³⁺

**Hvorfor avgir metaller elektroner?**
Metaller har få valenselektroner og oppnår edelgasskonfigusasjon ved å avgå dem.

### Anioner (negative ioner)

**Anioner** dannes når et atom **tar opp** ett eller flere elektroner:

$$\\text{Cl} + e^- \\rightarrow \\text{Cl}^-$$

- Klor (Cl) tar opp 1 elektron → Cl⁻
- Oksygen (O) tar opp 2 elektroner → O²⁻
- Nitrogen (N) tar opp 3 elektroner → N³⁻

**Hvorfor tar ikke-metaller opp elektroner?**
Ikke-metaller har mange valenselektroner og oppnår edelgasskonfigusasjon ved å ta opp noen få ekstra.

### Elektronkonfigurasjon for ioner

Ioner streber etter å få samme elektronkonfigurasjon som nærmeste edelgass.

**Eksempel: Natriumion (Na⁺)**
- Na har konfigurasjon: 1s² 2s² 2p⁶ 3s¹
- Na⁺ har konfigurasjon: 1s² 2s² 2p⁶ (samme som neon)

**Eksempel: Kloridion (Cl⁻)**
- Cl har konfigurasjon: 1s² 2s² 2p⁶ 3s² 3p⁵
- Cl⁻ har konfigurasjon: 1s² 2s² 2p⁶ 3s² 3p⁶ (samme som argon)`,
    },

    {
      id: 'kjemi1-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Ionedannelse',
      problem: `Betrakt dannelsen av magnesiumion (Mg²⁺) og oksidion (O²⁻).

a) Hvor mange elektroner avgir magnesium?
b) Hvor mange elektroner tar oksygen opp?
c) Hvilken edelgasskonfigurasjon får Mg²⁺?
d) Hvilken edelgasskonfigurasjon får O²⁻?`,
      solution: `**Løsning:**

a) Mg (atomnummer 12) har konfigurasjon: 1s² 2s² 2p⁶ 3s²
   For å bli Mg²⁺ avgir den **2 elektroner** (fra 3s-orbitalet).

b) O (atomnummer 8) har konfigurasjon: 1s² 2s² 2p⁴
   For å bli O²⁻ tar den opp **2 elektroner** (fyller opp 2p-orbitalet).

c) Mg²⁺ får konfigurasjon 1s² 2s² 2p⁶ = samme som **neon (Ne)**.

d) O²⁻ får konfigurasjon 1s² 2s² 2p⁶ = samme som **neon (Ne)**.

Begge ionene er **isoelektroniske** (samme antall elektroner).`,
    },

    {
      id: 'kjemi1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-1',
        number: '3-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem ladningen til følgende ioner:',
        subTasks: [
          {
            label: 'a',
            task: 'Kalium avgir 1 elektron. Hva blir ladningen?',
            solution: 'K avgir 1 elektron → **K⁺** (ladning +1)',
          },
          {
            label: 'b',
            task: 'Svovel tar opp 2 elektroner. Hva blir ladningen?',
            solution: 'S tar opp 2 elektroner → **S²⁻** (ladning −2)',
          },
          {
            label: 'c',
            task: 'Aluminium avgir 3 elektroner. Hva blir ladningen?',
            solution: 'Al avgir 3 elektroner → **Al³⁺** (ladning +3)',
          },
          {
            label: 'd',
            task: 'Fluor tar opp 1 elektron. Hva blir ladningen?',
            solution: 'F tar opp 1 elektron → **F⁻** (ladning −1)',
          },
        ],
        solution: 'a) K⁺; b) S²⁻; c) Al³⁺; d) F⁻',
        hints: ['Avgitt elektron → positiv ladning', 'Mottatt elektron → negativ ladning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LEWIS-STRUKTURER FOR IONER ==========
    {
      id: 'kjemi1-3-1-lewis',
      type: 'text',
      content: `## Lewis-strukturer for ioner

Vi kan tegne **Lewis-strukturer** for å vise elektronene i ioner.

### Regler for Lewis-strukturer av ioner
1. Tegn atomsymbolet
2. Tegn valenselektronene som prikker rundt symbolet
3. Sett hele strukturen i hakeparentes [ ]
4. Skriv ladningen utenfor hakeparentesen (øverst til høyre)

### Eksempler

**Natriumion (Na⁺)**

Na har 1 valenselektron. Når den avgir det:

$$[\\text{Na}]^+$$

(Ingen prikker, fordi alle valenselektronene er avgitt)

**Kloridion (Cl⁻)**

Cl har 7 valenselektroner. Når den tar opp 1:

$$[\\overset{\\bullet\\bullet}{\\underset{\\bullet\\bullet}{\\text{Cl}}}\\overset{\\bullet\\bullet}{\\phantom{\\text{Cl}}}]^-$$

(8 elektroner totalt = fullt oktett)

**Oksidion (O²⁻)**

O har 6 valenselektroner. Når den tar opp 2:

$$[\\overset{\\bullet\\bullet}{\\underset{\\bullet\\bullet}{\\text{O}}}\\overset{\\bullet\\bullet}{\\phantom{\\text{O}}}]^{2-}$$

(8 elektroner totalt = fullt oktett)`,
    },

    {
      id: 'kjemi1-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Lewis-strukturer for ioner',
      problem: `Tegn Lewis-strukturer for følgende ioner:

a) Magnesiumion (Mg²⁺)
b) Sulfidion (S²⁻)`,
      solution: `**Løsning:**

a) Mg har 2 valenselektroner. Avgir begge → ingen elektroner igjen:
   $$[\\text{Mg}]^{2+}$$

b) S har 6 valenselektroner. Tar opp 2 → totalt 8:
   $$[\\overset{\\bullet\\bullet}{\\underset{\\bullet\\bullet}{\\text{S}}}\\overset{\\bullet\\bullet}{\\phantom{\\text{S}}}]^{2-}$$`,
    },

    {
      id: 'kjemi1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-2',
        number: '3-2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn Lewis-strukturer for følgende ioner:',
        subTasks: [
          {
            label: 'a',
            task: 'Litiumion (Li⁺)',
            solution: 'Li avgir 1 elektron → [Li]⁺',
          },
          {
            label: 'b',
            task: 'Fluoridion (F⁻)',
            solution: 'F tar opp 1 elektron → 8 totalt → [F med 8 prikker]⁻',
          },
          {
            label: 'c',
            task: 'Kalsiumion (Ca²⁺)',
            solution: 'Ca avgir 2 elektroner → [Ca]²⁺',
          },
          {
            label: 'd',
            task: 'Nitridion (N³⁻)',
            solution: 'N har 5 valenselektroner, tar opp 3 → 8 totalt → [N med 8 prikker]³⁻',
          },
        ],
        solution: 'a) [Li]⁺; b) [F:]⁻; c) [Ca]²⁺; d) [N:]³⁻',
        hints: ['Kationer mister elektroner', 'Anioner får 8 elektroner (oktett)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== IONEGITTER ==========
    {
      id: 'kjemi1-3-1-ionegitter',
      type: 'text',
      content: `## Ionegitter og gitterenergi

### Ionegitter

I faste ioniske forbindelser er ionene ordnet i et **ionegitter** – en tredimensjonal krystallstruktur.

**Viktige punkter:**
- Hver kation er omgitt av flere anioner
- Hver anion er omgitt av flere kationer
- Ionebindingene virker i alle retninger (ikke-retningsbestemt)
- Gitteret er elektrisk nøytralt totalt sett

**Eksempel: Natriumklorid (NaCl)**

I NaCl-krystaller:
- Hvert Na⁺ er omgitt av 6 Cl⁻
- Hvert Cl⁻ er omgitt av 6 Na⁺
- Dette danner et kubisk gitter

### Gitterenergi

**Gitterenergi** er energien som frigjøres når ioner i gassfase danner et ionegitter:

$$\\text{Na}^+(g) + \\text{Cl}^-(g) \\rightarrow \\text{NaCl}(s) + \\text{energi}$$

**Jo større gitterenergi, desto sterkere ionebinding.**

### Faktorer som påvirker gitterenergi

1. **Ioneladning**: Høyere ladning → større gitterenergi
   - MgO (Mg²⁺, O²⁻) har mye høyere gitterenergi enn NaCl (Na⁺, Cl⁻)

2. **Ionestørrelse**: Mindre ioner → større gitterenergi
   - LiF har høyere gitterenergi enn CsI (Li⁺ og F⁻ er små ioner)

### Formel (ikke pensum, men nyttig)

$$E_{\\text{gitter}} \\propto \\frac{Q_1 \\cdot Q_2}{r}$$

der $Q_1$ og $Q_2$ er ladningene, og $r$ er avstanden mellom ionene.`,
    },

    {
      id: 'kjemi1-3-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Gitterenergi',
      problem: `Hvilken forbindelse har størst gitterenergi?

a) NaCl eller MgO?
b) LiF eller NaCl?

Forklar hvorfor.`,
      solution: `**Løsning:**

a) **MgO** har størst gitterenergi.
   - MgO har Mg²⁺ og O²⁻ (ladning ±2)
   - NaCl har Na⁺ og Cl⁻ (ladning ±1)
   - Høyere ladning → mye sterkere elektrostatisk tiltrekning

b) **LiF** har størst gitterenergi.
   - LiF har Li⁺ og F⁻ (begge veldig små ioner)
   - NaCl har Na⁺ og Cl⁻ (større ioner)
   - Mindre ioner → kortere avstand → sterkere binding`,
    },

    {
      id: 'kjemi1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-3',
        number: '3-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign gitterenergi for følgende par:',
        subTasks: [
          {
            label: 'a',
            task: 'NaCl vs KCl (K⁺ er større enn Na⁺)',
            solution: 'NaCl har høyere gitterenergi fordi Na⁺ er mindre enn K⁺ → kortere avstand',
          },
          {
            label: 'b',
            task: 'CaO vs NaCl',
            solution: 'CaO har høyere gitterenergi fordi ionene har ladning ±2 (vs ±1 i NaCl)',
          },
          {
            label: 'c',
            task: 'NaF vs NaCl (F⁻ er mindre enn Cl⁻)',
            solution: 'NaF har høyere gitterenergi fordi F⁻ er mindre enn Cl⁻ → kortere avstand',
          },
        ],
        solution: 'a) NaCl; b) CaO; c) NaF',
        hints: ['Høyere ladning → høyere gitterenergi', 'Mindre ioner → høyere gitterenergi'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EMPIRISKE FORMLER ==========
    {
      id: 'kjemi1-3-1-formler',
      type: 'text',
      content: `## Empiriske formler for ioneforbindelser

En ioneforbindelse må være **elektrisk nøytral** totalt sett.

### Regel for å sette opp formler

**Total positiv ladning = Total negativ ladning**

### Fremgangsmåte

1. Identifiser ionene og deres ladninger
2. Finn det minste antallet av hver ion som gir nøytral forbindelse
3. Skriv formelen: kation først, deretter anion

### Eksempler

**Eksempel 1: Natriumklorid**
- Na⁺ og Cl⁻
- 1 × (+1) + 1 × (−1) = 0 ✓
- Formel: **NaCl**

**Eksempel 2: Magnesiumoksid**
- Mg²⁺ og O²⁻
- 1 × (+2) + 1 × (−2) = 0 ✓
- Formel: **MgO**

**Eksempel 3: Magnesiumklorid**
- Mg²⁺ og Cl⁻
- 1 × (+2) + 2 × (−1) = 0 ✓
- Formel: **MgCl₂**

**Eksempel 4: Aluminiumoksid**
- Al³⁺ og O²⁻
- 2 × (+3) + 3 × (−2) = +6 − 6 = 0 ✓
- Formel: **Al₂O₃**

### Kryssregel (shortcut)

For ioner med ulike ladninger:
- Tallverdien av kationens ladning blir anionens indeks
- Tallverdien av anionens ladning blir kationens indeks

**Eksempel:** Ca²⁺ og N³⁻
- Ca får indeks 3, N får indeks 2
- Formel: **Ca₃N₂**`,
    },

    {
      id: 'kjemi1-3-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Empiriske formler',
      problem: `Sett opp empiriske formler for følgende ioneforbindelser:

a) Kalium (K⁺) og sulfid (S²⁻)
b) Aluminium (Al³⁺) og klorid (Cl⁻)
c) Kalsium (Ca²⁺) og nitrid (N³⁻)`,
      solution: `**Løsning:**

a) K⁺ og S²⁻
   2 × (+1) + 1 × (−2) = 0 ✓
   Formel: **K₂S**

b) Al³⁺ og Cl⁻
   1 × (+3) + 3 × (−1) = 0 ✓
   Formel: **AlCl₃**

c) Ca²⁺ og N³⁻
   3 × (+2) + 2 × (−3) = +6 − 6 = 0 ✓
   Formel: **Ca₃N₂**`,
    },

    {
      id: 'kjemi1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-4',
        number: '3-4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett opp empiriske formler for følgende ioneforbindelser:',
        subTasks: [
          {
            label: 'a',
            task: 'Litium (Li⁺) og oksid (O²⁻)',
            solution: '2 × (+1) + 1 × (−2) = 0 → **Li₂O**',
          },
          {
            label: 'b',
            task: 'Magnesium (Mg²⁺) og fluorid (F⁻)',
            solution: '1 × (+2) + 2 × (−1) = 0 → **MgF₂**',
          },
          {
            label: 'c',
            task: 'Aluminium (Al³⁺) og sulfid (S²⁻)',
            solution: '2 × (+3) + 3 × (−2) = 0 → **Al₂S₃**',
          },
          {
            label: 'd',
            task: 'Natrium (Na⁺) og oksid (O²⁻)',
            solution: '2 × (+1) + 1 × (−2) = 0 → **Na₂O**',
          },
        ],
        solution: 'a) Li₂O; b) MgF₂; c) Al₂S₃; d) Na₂O',
        hints: ['Total positiv ladning = total negativ ladning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EGENSKAPER TIL IONISKE FORBINDELSER ==========
    {
      id: 'kjemi1-3-1-egenskaper',
      type: 'text',
      content: `## Egenskaper til ioniske forbindelser

Ioniske forbindelser har karakteristiske egenskaper som følge av ionegitteret og de sterke elektrostatiske kreftene.

### 1. Høyt smeltepunkt og kokepunkt

- **Årsak:** Sterke elektrostatiske krefter mellom ionene krever mye energi for å brytes
- **Eksempel:** NaCl smelter ved 801°C

**Sammenheng:**
- Større gitterenergi → høyere smeltepunkt
- MgO (gitterenergi ca. 3800 kJ/mol) smelter ved 2852°C
- NaCl (gitterenergi ca. 780 kJ/mol) smelter ved 801°C

### 2. Løselighet i vann

- **De fleste ioniske forbindelser løses i vann**
- Vannmolekyler (polare) omgir ionene og bryter opp ionegitteret
- Hydratisering frigjør energi som kompenserer for gitterenergien

**Viktig:**
- Ioniske forbindelser løses IKKE i upolare løsemidler (som benzen, heksan)

### 3. Elektrisk ledningsevne

**I fast tilstand:** LEDER IKKE strøm
- Ionene er fastlåst i gitteret og kan ikke bevege seg

**Smeltet eller løst i vann:** LEDER strøm
- Ionene er frie til å bevege seg
- Kationer (+) beveger seg mot katoden (−)
- Anioner (−) beveger seg mot anoden (+)

### 4. Sprø/harde, men skjøre

- **Harde:** Sterke ionebindinger gjør krystallene harde
- **Skjøre:** Hvis lagene forskyves, kommer like ladninger ved siden av hverandre → frastøting → krystallen sprekker

### Oppsummering

| Egenskap | Forklaring |
|----------|------------|
| Høyt smeltepunkt | Sterke elektrostatiske krefter |
| Løselig i vann | Polare vannmolekyler omgir ionene |
| Leder ikke strøm (fast) | Ionene kan ikke bevege seg |
| Leder strøm (smeltet/løst) | Ionene er mobile |
| Harde, men skjøre | Sterke bindinger, men sprekker ved forskyvning |`,
    },

    {
      id: 'kjemi1-3-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Egenskaper til ioniske forbindelser',
      problem: `Forklar følgende observasjoner:

a) Fast natriumklorid leder ikke strøm, men smeltet natriumklorid leder strøm.
b) Natriumklorid løses i vann, men ikke i benzen.
c) Magnesiumoksid har mye høyere smeltepunkt (2852°C) enn natriumklorid (801°C).`,
      solution: `**Løsning:**

a) I **fast** NaCl er ionene fastlåst i gitteret og kan ikke bevege seg.
   I **smeltet** NaCl er ionene frie til å bevege seg og kan transportere elektrisk ladning.

b) Vann er **polart** og kan omgi ionene (hydratisering).
   Benzen er **upolart** og kan ikke bryte opp ionegitteret.

c) MgO har ioner med ladning ±2 (Mg²⁺, O²⁻).
   NaCl har ioner med ladning ±1 (Na⁺, Cl⁻).
   **Høyere ladning → mye større gitterenergi → mye høyere smeltepunkt**.`,
    },

    {
      id: 'kjemi1-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-5',
        number: '3-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar følgende egenskaper ved ioniske forbindelser:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor har ioniske forbindelser høye smeltepunkter?',
            solution: 'Sterke elektrostatiske krefter mellom ionene krever mye energi for å brytes.',
          },
          {
            label: 'b',
            task: 'Hvorfor leder en vandig løsning av NaCl strøm?',
            solution: 'Ionene (Na⁺ og Cl⁻) er frie til å bevege seg i løsningen og kan transportere ladning.',
          },
          {
            label: 'c',
            task: 'Hvorfor er ioniske forbindelser sprø/skjøre?',
            solution: 'Hvis lagene forskyves, kommer like ladninger ved siden av hverandre → frastøting → krystallen sprekker.',
          },
        ],
        solution: 'a) Sterke elektrostatiske krefter; b) Frie mobile ioner; c) Frastøting ved forskyvning',
        hints: ['Tenk på ionegitterets struktur'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING OG FLERE OPPGAVER ==========
    {
      id: 'kjemi1-3-1-summary',
      type: 'text',
      content: `## Oppsummering: Ionebinding

### Hovedpunkter

1. **Ionebinding** = elektrostatisk tiltrekning mellom kationer (+) og anioner (−)
2. **Kationer** dannes når metaller avgir elektroner
3. **Anioner** dannes når ikke-metaller tar opp elektroner
4. Ioner streber etter **edelgasskonfigurasjon**
5. **Ionegitter** = tredimensjonal krystallstruktur
6. **Gitterenergi** avhenger av ioneladning og ionestørrelse
7. Empiriske formler må være **elektrisk nøytrale**
8. Ioniske forbindelser har:
   - Høye smeltepunkter
   - Løselige i vann (polart løsemiddel)
   - Leder strøm når smeltet eller løst
   - Harde, men skjøre`,
    },

    {
      id: 'kjemi1-3-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-6',
        number: '3-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver om ionebinding:',
        subTasks: [
          {
            label: 'a',
            task: 'Et ion har 18 elektroner og 16 protoner. Hva er ioneformelen?',
            solution: '16 protoner → svovel (S). 18 elektroner − 16 protoner → ladning −2. Formel: **S²⁻**',
          },
          {
            label: 'b',
            task: 'Sett opp formel for forbindelsen mellom Fe³⁺ og O²⁻',
            solution: '2 × (+3) + 3 × (−2) = 0 → **Fe₂O₃**',
          },
          {
            label: 'c',
            task: 'Hvilken har høyest smeltepunkt: NaCl eller CaO? Hvorfor?',
            solution: 'CaO har høyere smeltepunkt fordi ionene har ladning ±2 (vs ±1) → større gitterenergi.',
          },
          {
            label: 'd',
            task: 'Hvorfor løses ikke ioniske forbindelser i upolare løsemidler?',
            solution: 'Upolare løsemidler kan ikke omgi ionene og kompensere for gitterenergien.',
          },
        ],
        solution: 'a) S²⁻; b) Fe₂O₃; c) CaO (høyere ladning); d) Mangler polaritet',
        hints: ['Antall elektroner − antall protoner = ladning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-3-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-1-ex-7',
        number: '3-7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordrende oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Ranger følgende etter økende smeltepunkt: NaF, NaCl, NaBr, NaI',
            solution: 'Mindre anion → høyere gitterenergi → høyere smeltepunkt: **NaI < NaBr < NaCl < NaF**',
          },
          {
            label: 'b',
            task: 'Hvorfor er gitterenergien til MgO (3800 kJ/mol) mye høyere enn NaCl (780 kJ/mol)?',
            solution: 'MgO har ioner med ladning ±2 (vs ±1 i NaCl), og ionene er mindre → begge faktorer øker gitterenergien kraftig.',
          },
          {
            label: 'c',
            task: 'En ioneforbindelse består av X²⁺ og Y⁻. Formelen er X₃Y₆. Hva er feil?',
            solution: 'Formelen kan forenkles! X₃Y₆ = **XY₂** (deler på 3). Korrekt formel: XY₂.',
          },
        ],
        solution: 'a) NaI < NaBr < NaCl < NaF; b) Høyere ladning og mindre ioner; c) Skal være XY₂',
        hints: ['Størrelse på anionen påvirker gitterenergi'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 3.2: Kovalent binding
// ============================================================================

const CHAPTER_KJEMI1_3_2: TextbookChapter = {
  id: 'kjemi1-3-2',
  courseId: 'kjemi1',
  chapterNumber: '3.2',
  title: 'Kovalent binding',
  description: 'Lær om elektronparbinding, Lewis-strukturer, polare/upolare bindinger, elektronegativitet og molekylgeometri (VSEPR).',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare hva kovalent binding er',
    'tegne Lewis-strukturer for molekyler',
    'skille mellom polare og upolare bindinger',
    'bruke elektronegativitet til å vurdere binding',
    'anvende VSEPR-teori til å forutsi molekylgeometri',
    'identifisere bindingsvinkler i molekyler',
  ],
  content: [
    // ========== KOVALENT BINDING ==========
    {
      id: 'kjemi1-3-2-intro',
      type: 'text',
      content: `## Kovalent binding

En **kovalent binding** er en kjemisk binding der to atomer **deler** ett eller flere elektronpar.

### Når oppstår kovalent binding?

Kovalent binding oppstår vanligvis mellom **ikke-metaller**.

**Eksempel:**
- H₂ (hydrogen-hydrogen)
- O₂ (oksygen-oksygen)
- H₂O (hydrogen-oksygen)
- CH₄ (karbon-hydrogen)

### Hvorfor deler atomer elektroner?

Ved å dele elektroner kan begge atomene oppnå en **stabil elektronkonfigurasjon** (vanligvis 8 elektroner i valensskallet = oktettregelen).

### Elektronparbinding

Et **bindepar** er et elektronpar som deles mellom to atomer.

Et **fritt elektronpar** (lone pair) er et elektronpar som ikke deltar i binding.

**Eksempel: Hydrogenmolekyl (H₂)**

Hvert H-atom har 1 elektron. Ved å dele disse to elektronene får begge H-atomene 2 elektroner (som helium).

$$\\text{H} \\cdot + \\cdot \\text{H} \\rightarrow \\text{H} - \\text{H}$$

**Eksempel: Klormolekyl (Cl₂)**

Hvert Cl-atom har 7 valenselektroner. Ved å dele ett elektronpar får begge Cl-atomene 8 elektroner (oktett).

$$\\text{Cl} \\cdot + \\cdot \\text{Cl} \\rightarrow \\text{Cl} - \\text{Cl}$$`,
    },

    {
      id: 'kjemi1-3-2-bindingstyper',
      type: 'text',
      content: `## Enkelt-, dobbelt- og trippelbindinger

### Enkeltbinding

**Enkeltbinding** = 1 elektronpar deles (2 elektroner totalt)

**Eksempel:** H−H, Cl−Cl, H−O−H

### Dobbeltbinding

**Dobbeltbinding** = 2 elektronpar deles (4 elektroner totalt)

**Eksempel:** O=O (oksygenmolekyl)

$$\\text{O} = \\text{O}$$

Hvert O-atom har 6 valenselektroner. Ved å dele 2 elektronpar (4 elektroner) får begge 8 elektroner totalt.

### Trippelbinding

**Trippelbinding** = 3 elektronpar deles (6 elektroner totalt)

**Eksempel:** N≡N (nitrogenmolekyl)

$$\\text{N} \\equiv \\text{N}$$

Hvert N-atom har 5 valenselektroner. Ved å dele 3 elektronpar (6 elektroner) får begge 8 elektroner totalt.

### Bindingsstyrke

**Trippelbinding > Dobbeltbinding > Enkeltbinding**

Jo flere elektronpar som deles, desto sterkere er bindingen.`,
    },

    {
      id: 'kjemi1-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere bindingstype',
      problem: `Identifiser bindingstypen i følgende molekyler:

a) H₂ (hydrogen)
b) O₂ (oksygen)
c) N₂ (nitrogen)
d) CO₂ (karbondioksid)`,
      solution: `**Løsning:**

a) H₂: Hvert H har 1 elektron. De deler 1 elektronpar → **enkeltbinding** (H−H)

b) O₂: Hvert O har 6 valenselektroner. For å få 8 må de dele 2 elektronpar → **dobbeltbinding** (O=O)

c) N₂: Hvert N har 5 valenselektroner. For å få 8 må de dele 3 elektronpar → **trippelbinding** (N≡N)

d) CO₂: O=C=O (to dobbeltbindinger)`,
    },

    {
      id: 'kjemi1-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-2-ex-1',
        number: '3-8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser bindingstypen:',
        subTasks: [
          {
            label: 'a',
            task: 'Cl₂ (klor)',
            solution: 'Cl har 7 valenselektroner. De deler 1 elektronpar → **enkeltbinding** (Cl−Cl)',
          },
          {
            label: 'b',
            task: 'C₂H₄ (eten): C=C',
            solution: 'De to karbon-atomene deler 2 elektronpar → **dobbeltbinding**',
          },
          {
            label: 'c',
            task: 'HCN (hydrogencyanid): H−C≡N',
            solution: 'C og N deler 3 elektronpar → **trippelbinding**',
          },
        ],
        solution: 'a) Enkeltbinding; b) Dobbeltbinding; c) Trippelbinding',
        hints: ['Oktettregelen: 8 elektroner for C, N, O'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LEWIS-STRUKTURER ==========
    {
      id: 'kjemi1-3-2-lewis',
      type: 'text',
      content: `## Lewis-strukturer for molekyler

**Lewis-strukturer** viser hvordan valenselektronene er fordelt i et molekyl.

### Regler for å tegne Lewis-strukturer

1. **Tell totalt antall valenselektroner**
   - Sum av valenselektronene til alle atomer
   - Husk å justere for ladning (for ioner)

2. **Plasser atomene**
   - Minst elektronegativt atom i midten (vanligvis)
   - Hydrogen alltid på kanten (kan bare ha 1 binding)

3. **Tegn enkeltbindinger**
   - Hver binding = 2 elektroner

4. **Fordel resterende elektroner**
   - Fyll opp oktett for ytre atomer først
   - Plasser resten på sentralatomet

5. **Sjekk oktettregelen**
   - Alle atomer (bortsett fra H) skal ha 8 elektroner
   - Hvis ikke, lag dobbelt- eller trippelbindinger

6. **Tegn frie elektronpar**
   - Vis alle elektronpar som ikke deltar i binding

### Eksempel: Vann (H₂O)

1. Totalt valenselektroner: 2×1 (H) + 6 (O) = **8 elektroner**
2. O i midten, H på sidene
3. Tegn to enkeltbindinger: H−O−H (bruker 4 elektroner)
4. Resterende 4 elektroner → 2 frie elektronpar på O
5. O har 8 elektroner ✓, H har 2 elektroner ✓

**Lewis-struktur:**

$$\\text{H} - \\overset{\\bullet\\bullet}{\\underset{\\bullet\\bullet}{\\text{O}}} - \\text{H}$$`,
    },

    {
      id: 'kjemi1-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Lewis-struktur for CO₂',
      problem: `Tegn Lewis-strukturen for karbondioksid (CO₂).`,
      solution: `**Løsning:**

1. **Valenselektroner:** 4 (C) + 2×6 (O) = **16 elektroner**

2. **Plassering:** C i midten: O−C−O

3. **Enkeltbindinger:** O−C−O (bruker 4 elektroner, 12 igjen)

4. **Fordel resten:** Hver O får 6 elektroner (3 par)
   O har nå 2+6=8 ✓, men C har bare 4 ✗

5. **Lag dobbeltbindinger:** Flytt ett fritt par fra hver O til binding
   O=C=O

6. **Sjekk:** C har 8 ✓, hver O har 8 ✓

**Lewis-struktur:**

$$\\overset{\\bullet\\bullet}{\\underset{\\bullet\\bullet}{\\text{O}}} = \\text{C} = \\overset{\\bullet\\bullet}{\\underset{\\bullet\\bullet}{\\text{O}}}$$`,
    },

    {
      id: 'kjemi1-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-2-ex-2',
        number: '3-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn Lewis-strukturer for følgende molekyler:',
        subTasks: [
          {
            label: 'a',
            task: 'NH₃ (ammoniakk)',
            solution: 'N i midten, 3 H rundt. N−H (3 bindinger), 1 fritt par på N. Total: 8 elektroner (N har 5, H har 3).',
          },
          {
            label: 'b',
            task: 'CH₄ (metan)',
            solution: 'C i midten, 4 H rundt. C−H (4 bindinger). Total: 8 elektroner. Ingen frie par.',
          },
          {
            label: 'c',
            task: 'N₂ (nitrogen)',
            solution: 'N≡N (trippelbinding), 1 fritt par på hver N. Total: 10 elektroner.',
          },
        ],
        solution: 'a) N med 3 H og 1 fritt par; b) C med 4 H; c) N≡N med frie par',
        hints: ['Tell valenselektroner først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ELEKTRONEGATIVITET ==========
    {
      id: 'kjemi1-3-2-elektronegativitet',
      type: 'text',
      content: `## Elektronegativitet og polaritet

### Elektronegativitet (EN)

**Elektronegativitet** er et mål på et atoms evne til å trekke til seg elektroner i en binding.

### Pauling-skalaen

Linus Pauling utviklet en skala fra 0 til 4:

| Atom | EN | Atom | EN |
|------|----|----- |----|
| F (fluor) | 4,0 | C (karbon) | 2,5 |
| O (oksygen) | 3,5 | H (hydrogen) | 2,1 |
| N (nitrogen) | 3,0 | P (fosfor) | 2,1 |
| Cl (klor) | 3,0 | Si (silisium) | 1,8 |

**Trend i periodesystemet:**
- Øker mot høyre i en periode (F er mest elektronegativt)
- Avtar nedover i en gruppe

### Polare og upolare bindinger

**Elektronegativitetsdifferanse (ΔEN)** bestemmer bindingstypen:

| ΔEN | Bindingstype | Eksempel |
|-----|--------------|----------|
| 0 - 0,4 | Upolar kovalent | H−H (ΔEN=0), C−H (ΔEN=0,4) |
| 0,4 - 1,7 | Polar kovalent | H−O (ΔEN=1,4), H−N (ΔEN=0,9) |
| > 1,7 | Ionisk | Na−Cl (ΔEN=2,1) |

### Upolar kovalent binding

**Upolar binding** = elektronene deles likt mellom atomene

- ΔEN ≈ 0
- Elektroner midtveis mellom atomene
- Ingen partialladninger

**Eksempel:** H−H, Cl−Cl, C−H

### Polar kovalent binding

**Polar binding** = elektronene trekkes mer mot det mest elektronegative atomet

- ΔEN mellom 0,4 og 1,7
- Elektroner nærmere det mest elektronegative atomet
- Partialladninger: δ− (delvis negativ) og δ+ (delvis positiv)

**Eksempel:** H−O, H−N, H−Cl

Vi skriver: $\\overset{\\delta+}{\\text{H}} - \\overset{\\delta-}{\\text{O}}$

Det mest elektronegative atomet (O) får δ−, det minst elektronegative (H) får δ+.`,
    },

    {
      id: 'kjemi1-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Polaritet i bindinger',
      problem: `Bestem bindingstypen i følgende:

a) H−Cl (EN for H = 2,1, Cl = 3,0)
b) C−H (EN for C = 2,5, H = 2,1)
c) O−H (EN for O = 3,5, H = 2,1)`,
      solution: `**Løsning:**

a) ΔEN = 3,0 − 2,1 = 0,9
   → **Polar kovalent** binding
   Cl er mer elektronegativt → $\\overset{\\delta+}{\\text{H}} - \\overset{\\delta-}{\\text{Cl}}$

b) ΔEN = 2,5 − 2,1 = 0,4
   → **Upolar kovalent** binding (grenseverdi)

c) ΔEN = 3,5 − 2,1 = 1,4
   → **Polar kovalent** binding
   O er mer elektronegativt → $\\overset{\\delta+}{\\text{H}} - \\overset{\\delta-}{\\text{O}}$`,
    },

    {
      id: 'kjemi1-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-2-ex-3',
        number: '3-10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem bindingstypen (upolar/polar kovalent/ionisk):',
        subTasks: [
          {
            label: 'a',
            task: 'N−H (EN: N=3,0, H=2,1)',
            solution: 'ΔEN = 3,0 − 2,1 = 0,9 → **Polar kovalent**',
          },
          {
            label: 'b',
            task: 'Br−Br (EN: Br=2,8)',
            solution: 'ΔEN = 0 → **Upolar kovalent**',
          },
          {
            label: 'c',
            task: 'Na−Cl (EN: Na=0,9, Cl=3,0)',
            solution: 'ΔEN = 3,0 − 0,9 = 2,1 → **Ionisk**',
          },
        ],
        solution: 'a) Polar kovalent; b) Upolar kovalent; c) Ionisk',
        hints: ['Beregn ΔEN = |EN₁ − EN₂|'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VSEPR-TEORI ==========
    {
      id: 'kjemi1-3-2-vsepr',
      type: 'text',
      content: `## VSEPR-teori og molekylgeometri

**VSEPR** = Valence Shell Electron Pair Repulsion (frastøting mellom elektronpar i valensskallet)

### Grunnprinsipp

**Elektronpar frastøter hverandre og vil være så langt fra hverandre som mulig.**

Dette bestemmer molekylets **geometri** (form).

### Viktige geometrier

#### 1. Lineær (2 elektronpar rundt sentralatom)

**Vinkel:** 180°

**Eksempel:** CO₂ (O=C=O), HCN

$$\\text{O} = \\text{C} = \\text{O} \\quad (180°)$$

#### 2. Trigonal planar (3 elektronpar rundt sentralatom)

**Vinkel:** 120°

**Eksempel:** BF₃ (bortrifluorid)

$$\\text{F} \\quad \\angle_{120°} \\quad \\text{F}$$
$$\\quad \\quad \\text{B}$$
$$\\quad \\quad \\text{F}$$

#### 3. Tetraedral (4 elektronpar rundt sentralatom)

**Vinkel:** 109,5°

**Eksempel:** CH₄ (metan)

$$\\text{H} \\quad \\angle_{109{,}5°} \\quad \\text{H}$$
$$\\quad \\quad \\text{C}$$
$$\\text{H} \\quad \\quad \\quad \\text{H}$$

Alle 4 bindingene peker mot hjørnene i et tetraeder.

#### 4. Bøyd/V-formet (2 bindingspar + frie par)

**Vinkel:** < 109,5° (vanligvis ~104-107°)

**Eksempel:** H₂O

$$\\text{H} - \\text{O} - \\text{H} \\quad (104{,}5°)$$

O har 2 bindingspar og 2 frie par. De frie parene tar mer plass → presser bindingsvinkelen sammen.

#### 5. Trigonal pyramidal (3 bindingspar + 1 fritt par)

**Vinkel:** < 109,5° (vanligvis ~107°)

**Eksempel:** NH₃ (ammoniakk)

$$\\quad \\quad \\text{N}$$
$$\\text{H} \\quad \\text{H} \\quad \\text{H} \\quad (107°)$$

N har 3 bindingspar og 1 fritt par. Det frie paret tar mer plass → presser bindingsvinklene sammen.

### Oppsummering

| Elektronpar | Bindingspar | Frie par | Geometri | Vinkel | Eksempel |
|-------------|-------------|----------|----------|--------|----------|
| 2 | 2 | 0 | Lineær | 180° | CO₂ |
| 3 | 3 | 0 | Trigonal planar | 120° | BF₃ |
| 4 | 4 | 0 | Tetraedral | 109,5° | CH₄ |
| 4 | 3 | 1 | Trigonal pyramidal | ~107° | NH₃ |
| 4 | 2 | 2 | Bøyd/V-formet | ~104,5° | H₂O |

**Viktig:** Frie elektronpar tar mer plass enn bindingspar → reduserer bindingsvinkler.`,
    },

    {
      id: 'kjemi1-3-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Molekylgeometri',
      problem: `Bestem molekylgeometrien og bindingsvinkelen for:

a) CH₄ (metan)
b) NH₃ (ammoniakk)
c) H₂O (vann)`,
      solution: `**Løsning:**

a) **CH₄:**
   - C har 4 bindingspar (4 × C−H)
   - 0 frie par
   - Geometri: **Tetraedral**
   - Vinkel: **109,5°**

b) **NH₃:**
   - N har 3 bindingspar (3 × N−H)
   - 1 fritt par
   - Geometri: **Trigonal pyramidal**
   - Vinkel: **~107°** (litt mindre enn 109,5°)

c) **H₂O:**
   - O har 2 bindingspar (2 × O−H)
   - 2 frie par
   - Geometri: **Bøyd/V-formet**
   - Vinkel: **104,5°** (mindre enn 109,5°)`,
    },

    {
      id: 'kjemi1-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-2-ex-4',
        number: '3-11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem molekylgeometrien:',
        subTasks: [
          {
            label: 'a',
            task: 'CO₂ (O=C=O)',
            solution: 'C har 2 dobbeltbindinger, 0 frie par → **Lineær** (180°)',
          },
          {
            label: 'b',
            task: 'BF₃ (B med 3 enkeltbindinger til F)',
            solution: 'B har 3 bindingspar, 0 frie par → **Trigonal planar** (120°)',
          },
          {
            label: 'c',
            task: 'H₂S (S med 2 H og 2 frie par)',
            solution: 'S har 2 bindingspar, 2 frie par → **Bøyd** (~104°)',
          },
        ],
        solution: 'a) Lineær; b) Trigonal planar; c) Bøyd',
        hints: ['Tell bindingspar og frie par rundt sentralatomet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING OG FLERE OPPGAVER ==========
    {
      id: 'kjemi1-3-2-summary',
      type: 'text',
      content: `## Oppsummering: Kovalent binding

### Hovedpunkter

1. **Kovalent binding** = deling av elektronpar mellom atomer
2. **Enkeltbinding** (−), **dobbeltbinding** (=), **trippelbinding** (≡)
3. **Lewis-strukturer** viser elektronfordeling i molekyler
4. **Elektronegativitet** måler et atoms evne til å trekke til seg elektroner
5. **Polaritet:**
   - ΔEN < 0,4 → upolar kovalent
   - ΔEN 0,4-1,7 → polar kovalent
   - ΔEN > 1,7 → ionisk
6. **VSEPR-teori** forklarer molekylgeometri basert på elektronpar-frastøting
7. **Viktige geometrier:**
   - Lineær (180°)
   - Trigonal planar (120°)
   - Tetraedral (109,5°)
   - Trigonal pyramidal (~107°)
   - Bøyd (~104,5°)`,
    },

    {
      id: 'kjemi1-3-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-2-ex-5',
        number: '3-12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange bindingspar og frie par har O i H₂O?',
            solution: 'O har **2 bindingspar** (2 × O−H) og **2 frie par**',
          },
          {
            label: 'b',
            task: 'Hvorfor er H₂O bøyd og ikke lineær?',
            solution: 'De 2 frie parene på O frastøter bindingsparene → bøyd geometri (104,5°)',
          },
          {
            label: 'c',
            task: 'Er C−O-bindingen polar? (EN: C=2,5, O=3,5)',
            solution: 'ΔEN = 3,5 − 2,5 = 1,0 → **Polar kovalent**. O får δ−, C får δ+.',
          },
        ],
        solution: 'a) 2 bindingspar, 2 frie par; b) Frie par frastøter; c) Ja, polar',
        hints: ['Frie par påvirker geometri'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-3-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-2-ex-6',
        number: '3-13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordrende oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor NH₃ har vinkel 107° og ikke 109,5°',
            solution: 'Det frie paret tar mer plass enn bindingsparene → presser bindingsvinklene sammen.',
          },
          {
            label: 'b',
            task: 'Tegn Lewis-struktur for formaldehyd (CH₂O). C i midten.',
            solution: 'C har dobbeltbinding til O og enkeltbindinger til 2 H. Total: 12 elektroner.',
          },
          {
            label: 'c',
            task: 'Hvilken vinkel har C=O-bindingene i CO₂?',
            solution: 'CO₂ er lineær → **180°**',
          },
        ],
        solution: 'a) Fritt par tar mer plass; b) H₂C=O; c) 180°',
        hints: ['Frie par reduserer bindingsvinkler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 3.3: Mellommolekylære krefter
// ============================================================================

const CHAPTER_KJEMI1_3_3: TextbookChapter = {
  id: 'kjemi1-3-3',
  courseId: 'kjemi1',
  chapterNumber: '3.3',
  title: 'Mellommolekylære krefter',
  description: 'Lær om Van der Waals-krefter, dipol-dipol-krefter, hydrogenbindinger og hvordan disse påvirker stoffers egenskaper.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare ulike typer mellommolekylære krefter',
    'beskrive Van der Waals-krefter (dispersjonskrefter)',
    'forklare dipol-dipol-krefter',
    'beskrive hydrogenbindinger',
    'relatere mellommolekylære krefter til fysiske egenskaper',
    'skille mellom polare og upolare løsemidler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'kjemi1-3-3-intro',
      type: 'text',
      content: `## Mellommolekylære krefter

**Mellommolekylære krefter** er svake tiltrekningskrefter **mellom** molekyler.

### Viktig distinksjon

- **Intramolekylære krefter** = bindinger **inni** molekyler (kovalente, ioniske)
- **Intermolekylære krefter** = krefter **mellom** molekyler

**Eksempel:**
- I H₂O er O−H-bindingene **intramolekylære** (kovalente bindinger)
- Kreftene mellom H₂O-molekyler er **intermolekylære** (hydrogenbindinger)

### Hvorfor er dette viktig?

Mellommolekylære krefter bestemmer stoffers **fysiske egenskaper**:
- Smeltepunkt
- Kokepunkt
- Løselighet
- Viskositet
- Overflatespenning

**Generelt:** Jo sterkere mellommolekylære krefter, desto høyere kokepunkt/smeltepunkt.

### Tre hovedtyper

1. **Van der Waals-krefter** (dispersjonskrefter/London-krefter)
2. **Dipol-dipol-krefter**
3. **Hydrogenbindinger**`,
    },

    // ========== VAN DER WAALS ==========
    {
      id: 'kjemi1-3-3-vanderwaa ls',
      type: 'text',
      content: `## Van der Waals-krefter (dispersjonskrefter)

**Van der Waals-krefter** (også kalt **dispersjonskrefter** eller **London-krefter**) er de **svakeste** mellommolekylære kreftene.

### Hvordan oppstår de?

Elektronene i et molekyl beveger seg hele tiden. I et øyeblikk kan de samle seg mer på én side → et **midlertidig dipolmoment**.

Dette induserer et dipolmoment i nabomolekylet → **svak tiltrekning**.

### Viktige punkter

- Finnes i **alle** molekyler (også upolare)
- **Svakest** av de mellommolekylære kreftene
- **Øker** med molekylstørrelse:
  - Større molekyler → flere elektroner → sterkere dispersjonskrefter

### Eksempler

**Edelgasser:**
- He, Ne, Ar, Kr, Xe (enatomige, upolare)
- Bare Van der Waals-krefter
- Kokepunkt øker nedover i gruppen (større atomer):
  - He: −269°C
  - Ar: −186°C
  - Xe: −108°C

**Halogener:**
- F₂, Cl₂, Br₂, I₂ (upolare molekyler)
- Bare Van der Waals-krefter
- Kokepunkt øker nedover i gruppen (større molekyler):
  - F₂: −188°C (gass)
  - Cl₂: −34°C (gass)
  - Br₂: 59°C (væske)
  - I₂: 184°C (fast)

### Faktor som påvirker styrken

**Molekylstørrelse (antall elektroner):**
- CH₄ (metan, 10 elektroner): kokepunkt −161°C
- C₄H₁₀ (butan, 26 elektroner): kokepunkt −1°C
- C₈H₁₈ (oktan, 50 elektroner): kokepunkt 126°C`,
    },

    {
      id: 'kjemi1-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Van der Waals-krefter',
      problem: `Forklar hvorfor I₂ er fast ved romtemperatur, mens F₂ er gass.`,
      solution: `**Løsning:**

Begge molekylene (I₂ og F₂) er **upolare** og har kun **Van der Waals-krefter**.

**I₂:**
- Stort molekyl med mange elektroner
- **Sterke** Van der Waals-krefter
- Krever mye energi å overvinne kreftene
- **Fast** ved romtemperatur (smeltepunkt 114°C)

**F₂:**
- Lite molekyl med få elektroner
- **Svake** Van der Waals-krefter
- Krever lite energi å overvinne kreftene
- **Gass** ved romtemperatur (kokepunkt −188°C)

**Konklusjon:** Molekylstørrelse bestemmer styrken av Van der Waals-kreftene.`,
    },

    {
      id: 'kjemi1-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-3-ex-1',
        number: '3-14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Van der Waals-krefter:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket molekyl har sterkest Van der Waals-krefter: CH₄ eller C₄H₁₀?',
            solution: 'C₄H₁₀ (butan) er større → flere elektroner → **sterkere Van der Waals-krefter**',
          },
          {
            label: 'b',
            task: 'Hvorfor har He lavere kokepunkt enn Ar?',
            solution: 'He er mindre → færre elektroner → svakere Van der Waals-krefter → lavere kokepunkt',
          },
          {
            label: 'c',
            task: 'Finnes Van der Waals-krefter i upolare molekyler?',
            solution: 'Ja, Van der Waals-krefter finnes i **alle** molekyler (også upolare)',
          },
        ],
        solution: 'a) C₄H₁₀; b) He er mindre; c) Ja',
        hints: ['Større molekyler → sterkere Van der Waals-krefter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DIPOL-DIPOL ==========
    {
      id: 'kjemi1-3-3-dipol',
      type: 'text',
      content: `## Dipol-dipol-krefter

**Dipol-dipol-krefter** er tiltrekningskrefter mellom **polare molekyler**.

### Hva er et dipolmoment?

Et molekyl har et **permanent dipolmoment** hvis det har:
- Polare bindinger (ΔEN > 0,4)
- **Asymmetrisk** geometri (slik at polaritetene ikke opphever hverandre)

**Eksempel: HCl**
- H−Cl er polar (ΔEN = 0,9)
- Molekylet er asymmetrisk → permanent dipolmoment
- $\\overset{\\delta+}{\\text{H}} - \\overset{\\delta-}{\\text{Cl}}$

### Hvordan fungerer dipol-dipol-krefter?

Den positive enden (δ+) av ett molekyl tiltrekkes av den negative enden (δ−) av et annet molekyl.

$$\\overset{\\delta+}{\\text{H}} - \\overset{\\delta-}{\\text{Cl}} \\cdots \\overset{\\delta+}{\\text{H}} - \\overset{\\delta-}{\\text{Cl}}$$

### Styrke

Dipol-dipol-krefter er **sterkere** enn Van der Waals-krefter, men **svakere** enn hydrogenbindinger.

### Eksempler på polare molekyler

- **HCl** (hydrogenklorid): Lineær, polar
- **NH₃** (ammoniakk): Trigonal pyramidal, polar
- **H₂O** (vann): Bøyd, polar
- **CH₃Cl** (klormetan): Tetraedral, men asymmetrisk → polar

### Upolare molekyler (ingen dipol-dipol)

- **CO₂** (karbondioksid): Lineær, symmetrisk → polaritetene opphever hverandre → upolar
- **CH₄** (metan): Tetraedral, symmetrisk → upolar
- **CCl₄** (karbontetraklorid): Tetraedral, symmetrisk → upolar`,
    },

    {
      id: 'kjemi1-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Polar eller upolar?',
      problem: `Bestem om følgende molekyler er polare eller upolare:

a) CO₂ (O=C=O, lineær)
b) H₂O (bøyd)
c) CCl₄ (tetraedral, symmetrisk)`,
      solution: `**Løsning:**

a) **CO₂:**
   - C=O-bindingene er polare (ΔEN = 1,0)
   - Men molekylet er **lineært** og **symmetrisk**
   - Polaritetene opphever hverandre → **upolar**

b) **H₂O:**
   - O−H-bindingene er polare (ΔEN = 1,4)
   - Molekylet er **bøyd** (asymmetrisk)
   - Polaritetene opphever seg IKKE → **polar**

c) **CCl₄:**
   - C−Cl-bindingene er polare (ΔEN = 0,5)
   - Men molekylet er **tetraedrisk** og **symmetrisk**
   - Polaritetene opphever hverandre → **upolar**`,
    },

    {
      id: 'kjemi1-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-3-ex-2',
        number: '3-15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Polar eller upolar molekyl?',
        subTasks: [
          {
            label: 'a',
            task: 'NH₃ (trigonal pyramidal)',
            solution: 'N−H er polar, geometrien er asymmetrisk → **polar**',
          },
          {
            label: 'b',
            task: 'CH₄ (tetraedral, symmetrisk)',
            solution: 'C−H har liten polaritet (ΔEN=0,4), symmetrisk → **upolar**',
          },
          {
            label: 'c',
            task: 'HCl (lineær)',
            solution: 'H−Cl er polar, asymmetrisk → **polar**',
          },
        ],
        solution: 'a) Polar; b) Upolar; c) Polar',
        hints: ['Symmetriske molekyler er ofte upolare'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== HYDROGENBINDINGER ==========
    {
      id: 'kjemi1-3-3-hydrogen',
      type: 'text',
      content: `## Hydrogenbindinger

**Hydrogenbindinger** er en spesielt sterk type dipol-dipol-kraft.

### Når oppstår hydrogenbindinger?

Hydrogenbindinger oppstår når:
1. Et H-atom er bundet til et **svært elektronegativt** atom (F, O, eller N)
2. Dette H-atomet tiltrekkes av et **fritt elektronpar** på F, O, eller N i et annet molekyl

**Viktig:** Kun **F, O, N** kan danne hydrogenbindinger (mest elektronegative atomer).

### Hvordan ser det ut?

**Eksempel: Vann (H₂O)**

$$\\overset{\\delta-}{\\text{O}} - \\overset{\\delta+}{\\text{H}} \\cdots \\overset{\\delta-}{\\text{O}} - \\overset{\\delta+}{\\text{H}}$$

Den stiplede linjen (⋯) representerer **hydrogenbindingen**.

### Styrke

Hydrogenbindinger er de **sterkeste** mellommolekylære kreftene.

**Styrkesammenligning:**
- **Hydrogenbindinger** > Dipol-dipol > Van der Waals

### Eksempler

**Vann (H₂O):**
- Hver H₂O kan danne opptil 4 hydrogenbindinger
- Dette gir vann **unormalt høyt kokepunkt** (100°C)
- Uten hydrogenbindinger ville vann koke ved ca. −80°C!

**Ammoniakk (NH₃):**
- N−H⋯N hydrogenbindinger
- Kokepunkt: −33°C (høyere enn forventet)

**Hydrogenfluorid (HF):**
- F−H⋯F hydrogenbindinger
- Kokepunkt: 20°C (mye høyere enn HCl, HBr, HI)

### Hydrogenbindinger i DNA

DNA-strukturen holdes sammen av hydrogenbindinger mellom basepar:
- Adenin (A) – Tymin (T): 2 hydrogenbindinger
- Guanin (G) – Cytosin (C): 3 hydrogenbindinger

### Hydrogenbindinger i is

I is danner hver H₂O **4 hydrogenbindinger** i en åpen struktur.

Dette gjør at **is er mindre tett enn vann** (derfor flyter is på vann).`,
    },

    {
      id: 'kjemi1-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Hydrogenbindinger',
      problem: `Forklar hvorfor H₂O har mye høyere kokepunkt (100°C) enn H₂S (−60°C), selv om H₂S er et større molekyl.`,
      solution: `**Løsning:**

**H₂O:**
- O er svært elektronegativt (EN = 3,5)
- Danner **sterke hydrogenbindinger** (O−H⋯O)
- Krever mye energi å bryte hydrogenbindingene
- **Høyt kokepunkt (100°C)**

**H₂S:**
- S er mindre elektronegativt (EN = 2,5)
- Danner IKKE hydrogenbindinger (kun dipol-dipol)
- Kun svakere mellommolekylære krefter
- **Lavt kokepunkt (−60°C)**

**Konklusjon:** Hydrogenbindinger øker kokepunktet dramatisk, selv om H₂S er større.`,
    },

    {
      id: 'kjemi1-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-3-ex-3',
        number: '3-16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hydrogenbindinger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av følgende kan danne hydrogenbindinger: H₂O, NH₃, CH₄, HF?',
            solution: '**H₂O, NH₃, HF** (har H bundet til F, O, eller N). CH₄ kan IKKE.',
          },
          {
            label: 'b',
            task: 'Hvorfor har HF (20°C) høyere kokepunkt enn HCl (−85°C)?',
            solution: 'HF danner **hydrogenbindinger** (F er svært elektronegativt). HCl har kun dipol-dipol.',
          },
          {
            label: 'c',
            task: 'Hvor mange hydrogenbindinger kan ett H₂O-molekyl maksimalt danne?',
            solution: 'H₂O har 2 H-atomer og 2 frie par på O → **4 hydrogenbindinger** totalt',
          },
        ],
        solution: 'a) H₂O, NH₃, HF; b) Hydrogenbindinger; c) 4',
        hints: ['Kun F, O, N kan danne hydrogenbindinger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POLARE/UPOLARE LØSEMIDLER ==========
    {
      id: 'kjemi1-3-3-losemidler',
      type: 'text',
      content: `## Polare og upolare løsemidler

### Løselighetsregel

**"Likt løser likt"**

- **Polare** stoffer løses i **polare** løsemidler
- **Upolare** stoffer løses i **upolare** løsemidler

### Polare løsemidler

**Eksempler:**
- Vann (H₂O) – mest brukte polare løsemiddel
- Etanol (C₂H₅OH)
- Aceton ((CH₃)₂CO)

**Løser:**
- Ioniske forbindelser (NaCl, KBr)
- Polare molekyler (sukker, ammoniakk)

**Hvorfor?**
Polare løsemidler kan omgi ionene eller de polare molekylene og stabilisere dem.

### Upolare løsemidler

**Eksempler:**
- Heksan (C₆H₁₄)
- Benzen (C₆H₆)
- Toluen (C₇H₈)

**Løser:**
- Upolare molekyler (fett, olje, voks, I₂)

**Hvorfor?**
Upolare løsemidler har kun Van der Waals-krefter som kan interagere med upolare molekyler.

### Ion-dipol-krefter

Når et **ion** løses i et **polart løsemiddel** (f.eks. vann), oppstår **ion-dipol-krefter**.

**Eksempel: NaCl i vann**

- Na⁺ omringes av vannmolekyler med O (δ−) vendt mot Na⁺
- Cl⁻ omringes av vannmolekyler med H (δ+) vendt mot Cl⁻

Dette kalles **hydratisering** (eller mer generelt, **solvatisering**).

Ion-dipol-krefter er **sterkere** enn dipol-dipol, men **svakere** enn ionebindinger.`,
    },

    {
      id: 'kjemi1-3-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Løselighet',
      problem: `Forklar følgende observasjoner:

a) NaCl løses i vann, men ikke i heksan.
b) I₂ løses i heksan, men ikke i vann.
c) Etanol (C₂H₅OH) løses i vann.`,
      solution: `**Løsning:**

a) **NaCl (ionisk) løses i vann (polart):**
   - Vann kan omgi ionene (Na⁺ og Cl⁻) med ion-dipol-krefter
   - Heksan (upolart) kan IKKE stabilisere ionene
   - **"Likt løser likt"** → ionisk løses i polart

b) **I₂ (upolart) løses i heksan (upolart):**
   - I₂ og heksan har begge kun Van der Waals-krefter
   - Vann (polart) kan ikke interagere godt med upolare I₂
   - **"Likt løser likt"** → upolart løses i upolart

c) **Etanol (polart) løses i vann (polart):**
   - Begge har O−H-grupper → kan danne hydrogenbindinger
   - **"Likt løser likt"** → polart løses i polart`,
    },

    {
      id: 'kjemi1-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-3-ex-4',
        number: '3-17',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løselighet:',
        subTasks: [
          {
            label: 'a',
            task: 'Løses KCl (ionisk) i vann (polart)?',
            solution: 'Ja, ioniske forbindelser løses i polare løsemidler. **"Likt løser likt"**',
          },
          {
            label: 'b',
            task: 'Løses benzen (C₆H₆, upolart) i heksan (upolart)?',
            solution: 'Ja, upolare stoffer løses i upolare løsemidler.',
          },
          {
            label: 'c',
            task: 'Løses fett (upolart) i vann (polart)?',
            solution: 'Nei, upolare stoffer løses IKKE i polare løsemidler.',
          },
        ],
        solution: 'a) Ja; b) Ja; c) Nei',
        hints: ['"Likt løser likt"'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'kjemi1-3-3-summary',
      type: 'text',
      content: `## Oppsummering: Mellommolekylære krefter

### Tre hovedtyper

| Type | Styrke | Forekomst | Eksempel |
|------|--------|-----------|----------|
| **Van der Waals** | Svakest | Alle molekyler | He, CH₄, I₂ |
| **Dipol-dipol** | Middels | Polare molekyler | HCl, CH₃Cl |
| **Hydrogenbindinger** | Sterkest | H bundet til F, O, N | H₂O, NH₃, HF |

### Sammenheng med fysiske egenskaper

**Sterkere mellommolekylære krefter → Høyere kokepunkt/smeltepunkt**

**Eksempel:**
- CH₄ (kun Van der Waals): kokepunkt −161°C
- NH₃ (hydrogenbindinger): kokepunkt −33°C
- H₂O (hydrogenbindinger): kokepunkt 100°C

### Løselighet

**"Likt løser likt"**
- Polare stoffer løses i polare løsemidler
- Upolare stoffer løses i upolare løsemidler

### Ion-dipol-krefter

Oppstår når ioner løses i polare løsemidler (f.eks. NaCl i vann).

Sterkere enn dipol-dipol, men svakere enn ionebindinger.`,
    },

    {
      id: 'kjemi1-3-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-3-ex-5',
        number: '3-18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type mellommolekylær kraft er sterkest i HCl?',
            solution: 'HCl er polar → **dipol-dipol-krefter** (ikke hydrogenbindinger, fordi Cl ikke er F, O, eller N)',
          },
          {
            label: 'b',
            task: 'Ranger etter økende kokepunkt: Ne, HF, Ar',
            solution: 'Ne < Ar < HF (Van der Waals øker med størrelse, men HF har hydrogenbindinger)',
          },
          {
            label: 'c',
            task: 'Hvorfor flyter is på vann?',
            solution: 'Is har en åpen struktur med mange hydrogenbindinger → lavere tetthet enn flytende vann',
          },
        ],
        solution: 'a) Dipol-dipol; b) Ne < Ar < HF; c) Åpen struktur',
        hints: ['Hydrogenbindinger kun med F, O, N'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-3-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-3-3-ex-6',
        number: '3-19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordrende oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor CH₃OH løses i vann, men CH₄ ikke gjør det.',
            solution: 'CH₃OH har en O−H-gruppe → kan danne hydrogenbindinger med vann (polart). CH₄ er upolart.',
          },
          {
            label: 'b',
            task: 'Hvilken har høyest kokepunkt: H₂O eller H₂Te? Forklar.',
            solution: 'H₂O har hydrogenbindinger (O er svært elektronegativt). H₂Te har kun dipol-dipol. → **H₂O**',
          },
          {
            label: 'c',
            task: 'Hvorfor har NH₃ lavere kokepunkt enn H₂O, selv om begge har hydrogenbindinger?',
            solution: 'O er mer elektronegativt enn N → sterkere hydrogenbindinger i H₂O. H₂O kan også danne flere hydrogenbindinger per molekyl.',
          },
        ],
        solution: 'a) CH₃OH er polart; b) H₂O; c) O mer elektronegativt',
        hints: ['Elektronegativitet påvirker styrken av hydrogenbindinger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 4.1: Reaksjonstyper
// ============================================================================

const CHAPTER_KJEMI1_4_1: TextbookChapter = {
  id: 'kjemi1-4-1',
  courseId: 'kjemi1',
  chapterNumber: '4.1',
  title: 'Reaksjonstyper',
  description: 'Lær om ulike typer kjemiske reaksjoner: syre-base, redoks, felling, og kompleksdanning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne kjennetegn på kjemiske reaksjoner',
    'forklare og identifisere syre-basereaksjoner (protolyse)',
    'forklare og identifisere redoksreaksjoner (elektronoverføring)',
    'gjenkjenne fellingsreaksjoner',
    'forstå kompleksdanning',
  ],
  content: [
    // ========== KJENNETEGN PÅ KJEMISKE REAKSJONER ==========
    {
      id: 'kjemi1-4-1-intro',
      type: 'text',
      content: `## Kjennetegn på kjemiske reaksjoner

En **kjemisk reaksjon** er en prosess der ett eller flere stoffer (reaktanter) omdannes til nye stoffer (produkter).

### Tegn på at en kjemisk reaksjon har funnet sted:

- **Fargeendring** (f.eks. Cu blir grønt når det oksiderer)
- **Temperaturendring** (varme frigjøres eller absorberes)
- **Gassutvikling** (bobler dannes)
- **Bunnfall/felling** (uløselig stoff dannes)
- **Lysutvikling** (forbrenning, eksplosjon)
- **Luktendring** (nye stoffer med andre lukter dannes)

### Reaksjonsligning

En reaksjonsligning viser hva som skjer i en kjemisk reaksjon:

$$\\text{Reaktanter} \\rightarrow \\text{Produkter}$$

**Eksempel:**
$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

**Viktig:** Massens bevaringsloven gjelder – antall atomer av hvert grunnstoff må være likt på begge sider.`,
    },

    {
      id: 'kjemi1-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kjennetegn på reaksjoner',
      problem: `Hvilke observasjoner tyder på at en kjemisk reaksjon har funnet sted?

a) Du heller sur melk i vasken, og det lukter vondt.
b) Du legger et jernspiker i kobbersulfatløsning, og spikeroverflaten blir rødlig.
c) Du varmer opp vann, og det begynner å koke.`,
      solution: `**Løsning:**

a) **Kjemisk reaksjon**: Bakterier har brutt ned laktose → sure produkter med ny lukt.

b) **Kjemisk reaksjon**: Jern reagerer med kobbersulfat → kobber avsettes på jernet (fargeendring).

c) **Ikke kjemisk reaksjon**: Vann går fra flytende til gassfase (faseovergang), men H₂O-molekylene forblir uendret.

**Konklusjon:** a) og b) er kjemiske reaksjoner. c) er en fysisk endring.`,
    },

    {
      id: 'kjemi1-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-1-ex-1',
        number: '4-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser om følgende er kjemiske reaksjoner eller fysiske endringer:',
        subTasks: [
          {
            label: 'a',
            task: 'Is smelter til vann',
            solution: 'Fysisk endring – H₂O molekylene er de samme, kun faseovergang',
          },
          {
            label: 'b',
            task: 'Natrium reagerer med vann under sterkt gassutvikling',
            solution: 'Kjemisk reaksjon – gassutvikling (H₂), nye stoffer dannes (NaOH)',
          },
          {
            label: 'c',
            task: 'Sukker løses i kaffe',
            solution: 'Fysisk endring – sukker kan krystalliseres ut igjen, ingen nye stoffer',
          },
          {
            label: 'd',
            task: 'Papir brenner og blir til aske',
            solution: 'Kjemisk reaksjon – cellulose reagerer med oksygen → CO₂, H₂O, aske',
          },
        ],
        solution: 'a) Fysisk; b) Kjemisk; c) Fysisk; d) Kjemisk',
        hints: ['Kjemiske reaksjoner danner nye stoffer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SYRE-BASEREAKSJONER (PROTOLYSE) ==========
    {
      id: 'kjemi1-4-1-acid-base',
      type: 'text',
      content: `## Syre-basereaksjoner (Protolyse)

### Definisjon (Brønsted-Lowry)
- **Syre**: Et stoff som kan avgi protoner (H⁺)
- **Base**: Et stoff som kan ta opp protoner (H⁺)

En **protolyseaksjon** er en reaksjon der protoner (H⁺) overføres fra en syre til en base.

### Generell syre-basereaksjon:
$$\\text{Syre} + \\text{Base} \\rightarrow \\text{Konjugert base} + \\text{Konjugert syre}$$

### Eksempel: Saltsyre og vann
$$\\text{HCl}(aq) + \\text{H}_2\\text{O}(l) \\rightarrow \\text{H}_3\\text{O}^+(aq) + \\text{Cl}^-(aq)$$

- HCl (syre) avgir H⁺ → Cl⁻ (konjugert base)
- H₂O (base) tar opp H⁺ → H₃O⁺ (oksoniumi on, konjugert syre)

### Nøytralisering
Når en syre reagerer med en base, dannes salt og vann:

$$\\text{Syre} + \\text{Base} \\rightarrow \\text{Salt} + \\text{H}_2\\text{O}$$

**Eksempel:**
$$\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$$`,
    },

    {
      id: 'kjemi1-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Syre-basereaksjon',
      problem: `Ammoniakk (NH₃) reagerer med saltsyre (HCl):

$$\\text{NH}_3(g) + \\text{HCl}(g) \\rightarrow \\text{NH}_4\\text{Cl}(s)$$

a) Identifiser syre og base.
b) Hva er produktet?`,
      solution: `**Løsning:**

a) **Syre:** HCl (avgir H⁺)
   **Base:** NH₃ (tar opp H⁺)

   HCl → H⁺ + Cl⁻
   NH₃ + H⁺ → NH₄⁺

b) **Produkt:** NH₄Cl (ammoniumklorid, et salt)

   Dette er en nøytralisering som danner en fast, hvit røyk av NH₄Cl.`,
    },

    {
      id: 'kjemi1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-1-ex-2',
        number: '4-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser syre og base i følgende reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{HNO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_3\\text{O}^+ + \\text{NO}_3^-$',
            solution: 'Syre: HNO₃ (avgir H⁺), Base: H₂O (tar opp H⁺)',
          },
          {
            label: 'b',
            task: '$\\text{CH}_3\\text{COOH} + \\text{NH}_3 \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{NH}_4^+$',
            solution: 'Syre: CH₃COOH (eddiksyre, avgir H⁺), Base: NH₃ (tar opp H⁺)',
          },
          {
            label: 'c',
            task: '$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$',
            solution: 'Syre: H₂SO₄, Base: NaOH (nøytralisering)',
          },
        ],
        solution: 'a) HNO₃ syre, H₂O base; b) CH₃COOH syre, NH₃ base; c) H₂SO₄ syre, NaOH base',
        hints: ['Syre avgir H⁺, base tar opp H⁺'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REDOKSREAKSJONER ==========
    {
      id: 'kjemi1-4-1-redox',
      type: 'text',
      content: `## Redoksreaksjoner (elektronoverføring)

En **redoksreaksjon** er en reaksjon der elektroner overføres mellom atomer.

### Definisjon
- **Oksidasjon**: Tap av elektroner (oksidasjonstallet øker)
- **Reduksjon**: Opptak av elektroner (oksidasjonstallet minker)

**Huskeregel:** *OIL RIG*
- **O**xidation **I**s **L**oss (av elektroner)
- **R**eduction **I**s **G**ain (av elektroner)

### Redokspar
- **Reduksjonsmiddel**: Stoffet som avgir elektroner (blir selv oksidert)
- **Oksidasjonsmiddel**: Stoffet som tar opp elektroner (blir selv redusert)

### Eksempel: Magnesium brenner i oksygen
$$2\\text{Mg}(s) + \\text{O}_2(g) \\rightarrow 2\\text{MgO}(s)$$

- Mg → Mg²⁺ + 2e⁻ (oksidasjon, Mg er reduksjonsmiddel)
- O₂ + 4e⁻ → 2O²⁻ (reduksjon, O₂ er oksidasjonsmiddel)

**Oksidasjon og reduksjon skjer alltid samtidig!**`,
    },

    {
      id: 'kjemi1-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Redoksreaksjon',
      problem: `Sink reagerer med saltsyre:

$$\\text{Zn}(s) + 2\\text{HCl}(aq) \\rightarrow \\text{ZnCl}_2(aq) + \\text{H}_2(g)$$

a) Hvilke atomer oksideres og reduseres?
b) Identifiser reduksjonsmiddel og oksidasjonsmiddel.`,
      solution: `**Løsning:**

a) **Oksidasjon:** Zn → Zn²⁺ + 2e⁻ (Zn mister elektroner)
   **Reduksjon:** 2H⁺ + 2e⁻ → H₂ (H⁺ tar opp elektroner)

b) **Reduksjonsmiddel:** Zn (avgir elektroner)
   **Oksidasjonsmiddel:** H⁺ (fra HCl, tar opp elektroner)

**Observasjon:** Hydrogen-gass (H₂) bobler opp, og sinkmetallet løses opp.`,
    },

    {
      id: 'kjemi1-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-1-ex-3',
        number: '4-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser oksidasjon og reduksjon i følgende reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{Cu}(s) + \\text{Cl}_2(g) \\rightarrow \\text{CuCl}_2(s)$',
            solution: 'Oksidasjon: Cu → Cu²⁺ + 2e⁻, Reduksjon: Cl₂ + 2e⁻ → 2Cl⁻',
          },
          {
            label: 'b',
            task: '$2\\text{Al}(s) + 3\\text{S}(s) \\rightarrow \\text{Al}_2\\text{S}_3(s)$',
            solution: 'Oksidasjon: Al → Al³⁺ + 3e⁻, Reduksjon: S + 2e⁻ → S²⁻',
          },
          {
            label: 'c',
            task: '$\\text{Fe}_2\\text{O}_3(s) + 3\\text{CO}(g) \\rightarrow 2\\text{Fe}(s) + 3\\text{CO}_2(g)$',
            solution: 'Oksidasjon: CO → CO₂ (C øker oksidasjonstall), Reduksjon: Fe³⁺ → Fe',
          },
        ],
        solution: 'a) Cu oksideres, Cl₂ reduseres; b) Al oksideres, S reduseres; c) C oksideres, Fe reduseres',
        hints: ['Oksidasjon = tap av elektroner, Reduksjon = opptak av elektroner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FELLINGSREAKSJONER ==========
    {
      id: 'kjemi1-4-1-precipitation',
      type: 'text',
      content: `## Fellingsreaksjoner

En **fellingsreaksjon** er en reaksjon der et uløselig stoff (bunnfall) dannes når to løsninger blandes.

### Eksempel: Sølvnitrat og natriumklorid
$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$

Sølvklorid (AgCl) er uløselig og felles ut som et hvitt bunnfall.

### Løselighetsregler (forenklede)
**Uløselige salter:**
- De fleste karbonater (CO₃²⁻)
- De fleste sulfider (S²⁻)
- Sølvsalter (Ag⁺), bortsett fra AgNO₃
- Bly(II)-salter (Pb²⁺), bortsett fra Pb(NO₃)₂

**Løselige salter:**
- Alle nitrater (NO₃⁻)
- Alle natriumsalter (Na⁺) og kaliumsalter (K⁺)
- De fleste klorider (Cl⁻), bromider (Br⁻), jodider (I⁻)`,
    },

    {
      id: 'kjemi1-4-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Fellingsreaksjon',
      problem: `Vil det dannes bunnfall når følgende løsninger blandes?

a) BaCl₂(aq) + Na₂SO₄(aq)
b) NaCl(aq) + KNO₃(aq)`,
      solution: `**Løsning:**

a) Mulige produkter: BaSO₄ og NaCl

   $$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaCl}(aq)$$

   **BaSO₄ er uløselig** → Hvitt bunnfall dannes!

b) Mulige produkter: NaNO₃ og KCl

   $$\\text{NaCl}(aq) + \\text{KNO}₃(aq) \\rightarrow \\text{NaNO}_3(aq) + \\text{KCl}(aq)$$

   **Begge produktene er løselige** → Ingen felling.`,
    },

    {
      id: 'kjemi1-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-1-ex-4',
        number: '4-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vil det dannes bunnfall når følgende løsninger blandes?',
        subTasks: [
          {
            label: 'a',
            task: 'Pb(NO₃)₂(aq) + NaCl(aq)',
            solution: 'PbCl₂ er uløselig → Ja, hvitt bunnfall',
          },
          {
            label: 'b',
            task: 'Na₂CO₃(aq) + CaCl₂(aq)',
            solution: 'CaCO₃ er uløselig → Ja, hvitt bunnfall',
          },
          {
            label: 'c',
            task: 'KNO₃(aq) + NaCl(aq)',
            solution: 'Alle produkter (KCl, NaNO₃) er løselige → Nei',
          },
          {
            label: 'd',
            task: 'AgNO₃(aq) + NaBr(aq)',
            solution: 'AgBr er uløselig → Ja, gult bunnfall',
          },
        ],
        solution: 'a) Ja (PbCl₂); b) Ja (CaCO₃); c) Nei; d) Ja (AgBr)',
        hints: ['Sjekk løselighetsreglene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMPLEKSDANNING ==========
    {
      id: 'kjemi1-4-1-complex',
      type: 'text',
      content: `## Kompleksdanning

En **kompleksdannelse** er en reaksjon der et metallion binder seg til ett eller flere molekyler eller ioner (ligander).

### Ligander
**Ligander** er molekyler eller ioner som kan donere elektronpar til et metallion:
- H₂O (vann)
- NH₃ (ammoniakk)
- Cl⁻ (kloridion)
- CN⁻ (cyanidion)

### Eksempel: Kobber(II) og ammoniakk
$$\\text{Cu}^{2+}(aq) + 4\\text{NH}_3(aq) \\rightarrow [\\text{Cu}(\\text{NH}_3)_4]^{2+}(aq)$$

- **Sentralatom:** Cu²⁺
- **Ligander:** 4 × NH₃
- **Kompleks:** [Cu(NH₃)₄]²⁺ (dyp blå farge)

**Observasjon:** Når ammoniakk tilsettes til lyseblå Cu²⁺-løsning, blir løsningen dyp mørkeblå.

### Navnsetting av komplekser
- Ligander navngis først (f.eks. "ammin" for NH₃, "aqua" for H₂O)
- Deretter metallionets navn med romnertall for oksidasjonstall
- **Eksempel:** [Cu(NH₃)₄]²⁺ = tetramminkobber(II)-ion`,
    },

    {
      id: 'kjemi1-4-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Kompleksdanning',
      problem: `Sølvklorid (AgCl) er uløselig, men løses opp når ammoniakk tilsettes:

$$\\text{AgCl}(s) + 2\\text{NH}_3(aq) \\rightarrow [\\text{Ag}(\\text{NH}_3)_2]^+(aq) + \\text{Cl}^-(aq)$$

Forklar hva som skjer.`,
      solution: `**Løsning:**

Ammoniakk fungerer som ligand og danner et kompleks med Ag⁺:

1. AgCl er uløselig bunnfall
2. NH₃ binder seg til Ag⁺ → [Ag(NH₃)₂]⁺ kompleks
3. Komplekset er **løselig** → bunnfallet løses opp

**Navnet:** Diamminsølv(I)-ion

**Praktisk bruk:** Brukes i sølvpolering for å fjerne sølvklorid fra overflaten.`,
    },

    {
      id: 'kjemi1-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-1-ex-5',
        number: '4-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blandede oppgaver om reaksjonstyper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type reaksjon: $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$?',
            solution: 'Syre-basereaksjon (nøytralisering)',
          },
          {
            label: 'b',
            task: 'Hvilken type reaksjon: $\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}$?',
            solution: 'Redoksreaksjon (Fe oksideres, Cu²⁺ reduseres)',
          },
          {
            label: 'c',
            task: 'Hvilken type reaksjon: $\\text{Pb(NO}_3)_2 + 2\\text{KI} \\rightarrow \\text{PbI}_2 + 2\\text{KNO}_3$?',
            solution: 'Fellingsreaksjon (PbI₂ er uløselig, gult bunnfall)',
          },
          {
            label: 'd',
            task: 'Hvilken type reaksjon: $\\text{Fe}^{3+} + 6\\text{CN}^- \\rightarrow [\\text{Fe(CN)}_6]^{3-}$?',
            solution: 'Kompleksdanning (CN⁻ er ligander)',
          },
        ],
        solution: 'a) Syre-base; b) Redoks; c) Felling; d) Kompleks',
        hints: ['Identifiser hva som overføres: protoner, elektroner, eller binding'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 4.2: Balansering av reaksjonslikninger
// ============================================================================

const CHAPTER_KJEMI1_4_2: TextbookChapter = {
  id: 'kjemi1-4-2',
  courseId: 'kjemi1',
  chapterNumber: '4.2',
  title: 'Balansering av reaksjonslikninger',
  description: 'Lær å balansere kjemiske likninger ved hjelp av massens bevaringsloven.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare massens bevaringsloven',
    'balansere enkle kjemiske likninger ved prøving og feiling',
    'bruke systematisk balanseringsmetode',
    'skrive og balansere ioniske reaksjonslikninger',
    'identifisere tilskuerioner',
    'balansere redokslikninger med halvreaksjonsmetoden',
  ],
  content: [
    // ========== MASSENS BEVARINGSLOVEN ==========
    {
      id: 'kjemi1-4-2-intro',
      type: 'text',
      content: `## Massens bevaringsloven

**Massens bevaringsloven** (Lavoisiers lov) sier at:

> *Masse kan verken skapes eller ødelegges i en kjemisk reaksjon.*

### Konsekvens for reaksjonslikninger
Antall atomer av hvert grunnstoff må være **likt på begge sider** av reaksjonspila.

**Ubalansert ligning:**
$$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$$

Venstre side: 2 H, 2 O
Høyre side: 2 H, 1 O ❌ (ikke balansert!)

**Balansert ligning:**
$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

Venstre side: 4 H, 2 O
Høyre side: 4 H, 2 O ✓ (balansert!)

### Regler for balansering
1. **Aldri endre subscript** (tall nede til høyre i formler) – det endrer stoffet!
2. Bruk kun **koeffisienter** (tall foran formler) for å balansere
3. Bruk minste mulige hele tall`,
    },

    {
      id: 'kjemi1-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel balansering',
      problem: `Balanser reaksjonsligningen for forbrenning av metan:

$$\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$$`,
      solution: `**Løsning (prøving og feiling):**

1. **Tell atomer (ubalansert):**
   - Venstre: 1 C, 4 H, 2 O
   - Høyre: 1 C, 2 H, 3 O (ikke balansert)

2. **Balanser hydrogen først:**
   $$\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$
   - Høyre: 1 C, 4 H, 4 O

3. **Balanser oksygen:**
   $$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$
   - Venstre: 1 C, 4 H, 4 O ✓

**Svar:**
$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$`,
    },

    {
      id: 'kjemi1-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-2-ex-1',
        number: '4-6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Balanser følgende reaksjonslikninger:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{N}_2 + \\text{H}_2 \\rightarrow \\text{NH}_3$',
            solution: '$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$',
          },
          {
            label: 'b',
            task: '$\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$',
            solution: '$4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$',
          },
          {
            label: 'c',
            task: '$\\text{Fe} + \\text{Cl}_2 \\rightarrow \\text{FeCl}_3$',
            solution: '$2\\text{Fe} + 3\\text{Cl}_2 \\rightarrow 2\\text{FeCl}_3$',
          },
          {
            label: 'd',
            task: '$\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$',
            solution: '$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$',
          },
        ],
        solution: 'a) N₂ + 3H₂ → 2NH₃; b) 4Al + 3O₂ → 2Al₂O₃; c) 2Fe + 3Cl₂ → 2FeCl₃; d) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
        hints: ['Start med det mest komplekse molekylet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SYSTEMATISK BALANSERINGSMETODE ==========
    {
      id: 'kjemi1-4-2-systematic',
      type: 'text',
      content: `## Systematisk balanseringsmetode

For mer komplekse likninger kan vi bruke en mer systematisk tilnærming:

### Fremgangsmåte:
1. **Lag en tabell** over alle grunnstoffer
2. **Tell atomer** på begge sider
3. **Balanser ett grunnstoff om gangen:**
   - Start med grunnstoff som kun finnes i ett stoff på hver side
   - Ta oksygen og hydrogen til slutt (hvis forbrenning)
4. **Sjekk** at alle grunnstoff er balansert
5. **Forenkle** til minste hele tall om nødvendig

### Tips:
- Hvis du får brøker, multipliser hele ligningen med fellesnevneren
- Bruk parenteser for å holde oversikt: (2+3=5)
- Dobbeltsjekk alltid resultatet!`,
    },

    {
      id: 'kjemi1-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Systematisk balansering',
      problem: `Balanser reaksjonen mellom etanol og oksygen:

$$\\text{C}_2\\text{H}_5\\text{OH} + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$$`,
      solution: `**Løsning:**

1. **Tabell (ubalansert):**

| Grunnstoff | Venstre | Høyre |
|------------|---------|-------|
| C | 2 | 1 |
| H | 6 | 2 |
| O | 3 | 3 |

2. **Balanser karbon:**
   $$\\text{C}_2\\text{H}_5\\text{OH} + \\text{O}_2 \\rightarrow 2\\text{CO}_2 + \\text{H}_2\\text{O}$$

3. **Balanser hydrogen:**
   $$\\text{C}_2\\text{H}_5\\text{OH} + \\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$$

4. **Tell oksygen på høyre side:** 2×2 + 3×1 = 7
   **Oksygen på venstre:** 1 (i etanol) + 2×O₂ = ?
   Vi trenger totalt 7, så: 1 + 2x = 7 → x = 3

   $$\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$$

**Svar:**
$$\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$$`,
    },

    {
      id: 'kjemi1-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-2-ex-2',
        number: '4-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Balanser følgende likninger ved hjelp av systematisk metode:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{Fe}_2\\text{O}_3 + \\text{CO} \\rightarrow \\text{Fe} + \\text{CO}_2$',
            solution: '$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$',
          },
          {
            label: 'b',
            task: '$\\text{Ca(OH)}_2 + \\text{H}_3\\text{PO}_4 \\rightarrow \\text{Ca}_3(\\text{PO}_4)_2 + \\text{H}_2\\text{O}$',
            solution: '$3\\text{Ca(OH)}_2 + 2\\text{H}_3\\text{PO}_4 \\rightarrow \\text{Ca}_3(\\text{PO}_4)_2 + 6\\text{H}_2\\text{O}$',
          },
          {
            label: 'c',
            task: '$\\text{NH}_3 + \\text{O}_2 \\rightarrow \\text{NO} + \\text{H}_2\\text{O}$',
            solution: '$4\\text{NH}_3 + 5\\text{O}_2 \\rightarrow 4\\text{NO} + 6\\text{H}_2\\text{O}$',
          },
        ],
        solution: 'a) Fe₂O₃ + 3CO → 2Fe + 3CO₂; b) 3Ca(OH)₂ + 2H₃PO₄ → Ca₃(PO₄)₂ + 6H₂O; c) 4NH₃ + 5O₂ → 4NO + 6H₂O',
        hints: ['Lag en tabell og balanser ett grunnstoff om gangen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== IONISKE REAKSJONSLIKNINGER ==========
    {
      id: 'kjemi1-4-2-ionic',
      type: 'text',
      content: `## Ioniske reaksjonslikninger

Mange reaksjoner i løsning involverer ioner. Vi kan skrive disse på tre måter:

### 1. Molekylær ligning
Viser alle stoffer som formler:
$$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$

### 2. Total ionisk ligning
Viser alle løselige salter som ioner:
$$\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) + \\text{Na}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s) + \\text{Na}^+(aq) + \\text{NO}_3^-(aq)$$

### 3. Netto ionisk ligning
Fjerner **tilskuerioner** (ioner som ikke reagerer):
$$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$

### Tilskuerioner
**Tilskuerioner** er ioner som finnes uendret på begge sider av ligningen. De deltar ikke i reaksjonen.

I eksemplet over er Na⁺ og NO₃⁻ tilskuerioner.

### Regler for ioniske likninger:
- **Sterke syrer og baser** skrives som ioner (f.eks. HCl → H⁺ + Cl⁻)
- **Løselige salter** skrives som ioner (f.eks. NaCl → Na⁺ + Cl⁻)
- **Uløselige stoffer** skrives som formler (f.eks. AgCl(s))
- **Vann** skrives som H₂O (ikke ioner)`,
    },

    {
      id: 'kjemi1-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Ionisk reaksjonsligning',
      problem: `Skriv total ionisk og netto ionisk ligning for reaksjonen:

$$\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{KNO}_3(aq)$$`,
      solution: `**Løsning:**

1. **Total ionisk ligning:**
   Løselige salter → ioner, uløselige → formler

   $$\\text{Pb}^{2+}(aq) + 2\\text{NO}_3^-(aq) + 2\\text{K}^+(aq) + 2\\text{I}^-(aq) \\rightarrow \\text{PbI}_2(s) + 2\\text{K}^+(aq) + 2\\text{NO}_3^-(aq)$$

2. **Identifiser tilskuerioner:**
   K⁺ og NO₃⁻ finnes uendret på begge sider

3. **Netto ionisk ligning:**
   Fjern tilskuerionene:

   $$\\text{Pb}^{2+}(aq) + 2\\text{I}^-(aq) \\rightarrow \\text{PbI}_2(s)$$

**Svar:** Netto ionisk ligning viser kun det som faktisk reagerer.`,
    },

    {
      id: 'kjemi1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-2-ex-3',
        number: '4-8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv netto ioniske likninger for følgende reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{NaCl}(aq)$',
            solution: 'Netto: $\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$',
          },
          {
            label: 'b',
            task: '$\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$',
            solution: 'Netto: $\\text{H}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{H}_2\\text{O}(l)$',
          },
          {
            label: 'c',
            task: '$\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\rightarrow \\text{CaCl}_2(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
            solution: 'Netto: $\\text{CaCO}_3(s) + 2\\text{H}^+(aq) \\rightarrow \\text{Ca}^{2+}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)$',
          },
        ],
        solution: 'a) Ba²⁺ + SO₄²⁻ → BaSO₄; b) H⁺ + OH⁻ → H₂O; c) CaCO₃ + 2H⁺ → Ca²⁺ + H₂O + CO₂',
        hints: ['Fjern ioner som finnes uendret på begge sider'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BALANSERING AV REDOKSLIKNINGER (HALVREAKSJONSMETODEN) ==========
    {
      id: 'kjemi1-4-2-redox-balancing',
      type: 'text',
      content: `## Balansering av redokslikninger (halvreaksjonsmetoden)

For komplekse redoksreaksjoner bruker vi **halvreaksjonsmetoden**:

### Fremgangsmåte:
1. **Del reaksjonen** i to halvreaksjoner (oksidasjon og reduksjon)
2. **Balanser atomer** i hver halvreaksjon:
   - Balanser alt unntatt O og H
   - Balanser O ved å legge til H₂O
   - Balanser H ved å legge til H⁺
3. **Balanser ladning** ved å legge til elektroner (e⁻)
4. **Multipliser** halvreaksjonene slik at antall elektroner blir likt
5. **Adder** halvreaksjonene
6. **Forenkle** ved å fjerne like termer på begge sider

### Eksempel: Redoksreaksjon i surt miljø
$$\\text{MnO}_4^- + \\text{Fe}^{2+} \\rightarrow \\text{Mn}^{2+} + \\text{Fe}^{3+}$$

(Skal balanseres i neste eksempel)`,
    },

    {
      id: 'kjemi1-4-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Balansering av redoksligning',
      problem: `Balanser følgende redoksreaksjon i surt miljø:

$$\\text{MnO}_4^-(aq) + \\text{Fe}^{2+}(aq) \\rightarrow \\text{Mn}^{2+}(aq) + \\text{Fe}^{3+}(aq)$$`,
      solution: `**Løsning:**

**1. Halvreaksjoner:**
- Reduksjon: $\\text{MnO}_4^- \\rightarrow \\text{Mn}^{2+}$
- Oksidasjon: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+}$

**2. Balanser atomer:**
- Reduksjon: $\\text{MnO}_4^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ (O balansert)
  $\\text{MnO}_4^- + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ (H balansert)
- Oksidasjon: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+}$ (allerede balansert)

**3. Balanser ladning med elektroner:**
- Reduksjon: $\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{e}^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$
- Oksidasjon: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + \\text{e}^-$

**4. Multipliser for lik elektronmengde:**
- Reduksjon: $\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{e}^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$ (×1)
- Oksidasjon: $5\\text{Fe}^{2+} \\rightarrow 5\\text{Fe}^{3+} + 5\\text{e}^-$ (×5)

**5. Adder:**
$$\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{Fe}^{2+} \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} + 5\\text{Fe}^{3+}$$

**Svar:**
$$\\text{MnO}_4^- + 8\\text{H}^+ + 5\\text{Fe}^{2+} \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} + 5\\text{Fe}^{3+}$$`,
    },

    {
      id: 'kjemi1-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-2-ex-4',
        number: '4-9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Balanser følgende redoksreaksjoner i surt miljø:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{Cr}_2\\text{O}_7^{2-} + \\text{Fe}^{2+} \\rightarrow \\text{Cr}^{3+} + \\text{Fe}^{3+}$',
            solution: '$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Fe}^{2+} \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O} + 6\\text{Fe}^{3+}$',
          },
          {
            label: 'b',
            task: '$\\text{Cu} + \\text{NO}_3^- \\rightarrow \\text{Cu}^{2+} + \\text{NO}$',
            solution: '$3\\text{Cu} + 8\\text{H}^+ + 2\\text{NO}_3^- \\rightarrow 3\\text{Cu}^{2+} + 2\\text{NO} + 4\\text{H}_2\\text{O}$',
          },
          {
            label: 'c',
            task: '$\\text{Zn} + \\text{NO}_3^- \\rightarrow \\text{Zn}^{2+} + \\text{NH}_4^+$',
            solution: '$4\\text{Zn} + 10\\text{H}^+ + \\text{NO}_3^- \\rightarrow 4\\text{Zn}^{2+} + \\text{NH}_4^+ + 3\\text{H}_2\\text{O}$',
          },
        ],
        solution: 'a) Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 7H₂O + 6Fe³⁺; b) 3Cu + 8H⁺ + 2NO₃⁻ → 3Cu²⁺ + 2NO + 4H₂O; c) 4Zn + 10H⁺ + NO₃⁻ → 4Zn²⁺ + NH₄⁺ + 3H₂O',
        hints: ['Bruk halvreaksjonsmetoden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-4-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-2-ex-5',
        number: '4-10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede balanseringsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Balanser: $\\text{P}_4 + \\text{O}_2 \\rightarrow \\text{P}_2\\text{O}_5$',
            solution: '$\\text{P}_4 + 5\\text{O}_2 \\rightarrow 2\\text{P}_2\\text{O}_5$',
          },
          {
            label: 'b',
            task: 'Skriv netto ionisk ligning: $\\text{Na}_2\\text{S}(aq) + \\text{Cd(NO}_3)_2(aq) \\rightarrow \\text{CdS}(s) + 2\\text{NaNO}_3(aq)$',
            solution: 'Netto: $\\text{Cd}^{2+}(aq) + \\text{S}^{2-}(aq) \\rightarrow \\text{CdS}(s)$',
          },
          {
            label: 'c',
            task: 'Balanser: $\\text{Al} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Al}_2(\\text{SO}_4)_3 + \\text{H}_2$',
            solution: '$2\\text{Al} + 3\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Al}_2(\\text{SO}_4)_3 + 3\\text{H}_2$',
          },
        ],
        solution: 'a) P₄ + 5O₂ → 2P₂O₅; b) Cd²⁺ + S²⁻ → CdS; c) 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂',
        hints: ['Bruk riktig metode for hver oppgave'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 4.3: Oksidasjonstall og redoks
// ============================================================================

const CHAPTER_KJEMI1_4_3: TextbookChapter = {
  id: 'kjemi1-4-3',
  courseId: 'kjemi1',
  chapterNumber: '4.3',
  title: 'Oksidasjonstall og redoks',
  description: 'Lær å bestemme oksidasjonstall og identifisere redoksreaksjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bestemme oksidasjonstall etter gitte regler',
    'identifisere oksidasjon og reduksjon ved endring i oksidasjonstall',
    'identifisere redokspar i reaksjoner',
    'balansere redoksreaksjoner i surt og basisk miljø',
    'forstå grunnprinsippet i galvaniske celler',
  ],
  content: [
    // ========== OKSIDASJONSTALL ==========
    {
      id: 'kjemi1-4-3-intro',
      type: 'text',
      content: `## Oksidasjonstall

**Oksidasjonstall** er et tall som angir hvor mange elektroner et atom har "tapt" eller "fått" i en binding.

### Regler for oksidasjonstall:

1. **Frie grunnstoffer** har oksidasjonstall 0
   - Eksempel: O₂, N₂, Fe, Cu → oksidasjonstall = 0

2. **Enkle ioner** har oksidasjonstall lik ladningen
   - Eksempel: Na⁺ → +1, Cl⁻ → −1, Fe³⁺ → +3

3. **Summen av oksidasjonstall i et nøytralt molekyl = 0**
   - Eksempel: H₂O → 2×(+1) + (−2) = 0

4. **Summen av oksidasjonstall i et ion = ionets ladning**
   - Eksempel: SO₄²⁻ → (+6) + 4×(−2) = −2

5. **Spesielle regler:**
   - **Hydrogen**: Vanligvis +1 (unntatt i hydrider: −1)
   - **Oksygen**: Vanligvis −2 (unntak: peroksider −1, OF₂ +2)
   - **Alkalimetaller** (gruppe 1): Alltid +1
   - **Jordalkalimetaller** (gruppe 2): Alltid +2
   - **Fluor**: Alltid −1

### Notasjon
Vi skriver oksidasjonstall over atomsymbolet:

$$\\overset{+1}{\\text{H}}_2\\overset{-2}{\\text{O}}$$`,
    },

    {
      id: 'kjemi1-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestemme oksidasjonstall',
      problem: `Bestem oksidasjonstallet til hvert atom i:

a) CO₂
b) H₂SO₄
c) MnO₄⁻`,
      solution: `**Løsning:**

a) **CO₂**
   - O har alltid −2 → 2×(−2) = −4
   - Summen må være 0 → C = +4

   $$\\overset{+4}{\\text{C}}\\overset{-2}{\\text{O}}_2$$

b) **H₂SO₄**
   - H har +1 → 2×(+1) = +2
   - O har −2 → 4×(−2) = −8
   - Summen må være 0 → S = +6

   $$\\overset{+1}{\\text{H}}_2\\overset{+6}{\\text{S}}\\overset{-2}{\\text{O}}_4$$

c) **MnO₄⁻**
   - O har −2 → 4×(−2) = −8
   - Summen må være −1 → Mn = +7

   $$\\overset{+7}{\\text{Mn}}\\overset{-2}{\\text{O}}_4^-$$

**Svar:** a) C: +4, O: −2; b) H: +1, S: +6, O: −2; c) Mn: +7, O: −2`,
    },

    {
      id: 'kjemi1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-3-ex-1',
        number: '4-11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem oksidasjonstallet til det uthevede atomet:',
        subTasks: [
          {
            label: 'a',
            task: 'N i NH₃',
            solution: 'H har +1 → 3×(+1) = +3. Summen = 0 → N = −3',
          },
          {
            label: 'b',
            task: 'Cl i HClO₃',
            solution: 'H: +1, O: −2×3 = −6. Summen = 0 → Cl = +5',
          },
          {
            label: 'c',
            task: 'Cr i Cr₂O₇²⁻',
            solution: 'O: −2×7 = −14. Summen = −2 → 2Cr = +12 → Cr = +6',
          },
          {
            label: 'd',
            task: 'N i NO₂⁻',
            solution: 'O: −2×2 = −4. Summen = −1 → N = +3',
          },
        ],
        solution: 'a) −3; b) +5; c) +6; d) +3',
        hints: ['Bruk reglene for oksidasjonstall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OKSIDASJON OG REDUKSJON ==========
    {
      id: 'kjemi1-4-3-redox-definition',
      type: 'text',
      content: `## Oksidasjon og reduksjon

### Definisjon med oksidasjonstall
- **Oksidasjon**: Oksidasjonstallet **øker** (atomer mister elektroner)
- **Reduksjon**: Oksidasjonstallet **minker** (atomer tar opp elektroner)

**Huskeregel:** *OILRIG* eller *LEO says GER*
- **O**xidation **I**s **L**oss (av elektroner)
- **R**eduction **I**s **G**ain (av elektroner)
- **L**oss of **E**lectrons is **O**xidation
- **G**ain of **E**lectrons is **R**eduction

### Eksempel:
$$\\overset{0}{\\text{Zn}}(s) + \\overset{+1}{\\text{H}}_2\\overset{-2}{\\text{SO}}_4(aq) \\rightarrow \\overset{+2}{\\text{Zn}}\\overset{-2}{\\text{SO}}_4(aq) + \\overset{0}{\\text{H}}_2(g)$$

- **Zn**: 0 → +2 (oksidasjonstallet øker) → **OKSIDASJON**
- **H**: +1 → 0 (oksidasjonstallet minker) → **REDUKSJON**

### Identifisere redoksreaksjoner
En reaksjon er en redoksreaksjon hvis minst ett atoms oksidasjonstall endres.

**Ikke-redoksreaksjon:**
$$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$$
(Ingen endring i oksidasjonstall – syre-basereaksjon)`,
    },

    {
      id: 'kjemi1-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere oksidasjon og reduksjon',
      problem: `Betrakt reaksjonen:

$$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$$

a) Bestem oksidasjonstall for alle atomer
b) Hvilke atomer oksideres og reduseres?`,
      solution: `**Løsning:**

a) **Oksidasjonstall:**

$$\\overset{+3}{\\text{Fe}}_2\\overset{-2}{\\text{O}}_3 + 3\\overset{+2}{\\text{C}}\\overset{-2}{\\text{O}} \\rightarrow 2\\overset{0}{\\text{Fe}} + 3\\overset{+4}{\\text{C}}\\overset{-2}{\\text{O}}_2$$

b) **Endringer:**
   - Fe: +3 → 0 (minker) → **REDUKSJON**
   - C: +2 → +4 (øker) → **OKSIDASJON**
   - O: −2 → −2 (uendret)

**Svar:**
- Fe reduseres
- C oksideres`,
    },

    {
      id: 'kjemi1-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-3-ex-2',
        number: '4-12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser hvilke atomer som oksideres og reduseres:',
        subTasks: [
          {
            label: 'a',
            task: '$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$',
            solution: 'Mg: 0 → +2 (oksideres), O: 0 → −2 (reduseres)',
          },
          {
            label: 'b',
            task: '$\\text{CuO} + \\text{H}_2 \\rightarrow \\text{Cu} + \\text{H}_2\\text{O}$',
            solution: 'Cu: +2 → 0 (reduseres), H: 0 → +1 (oksideres)',
          },
          {
            label: 'c',
            task: '$\\text{Cl}_2 + 2\\text{NaBr} \\rightarrow 2\\text{NaCl} + \\text{Br}_2$',
            solution: 'Cl: 0 → −1 (reduseres), Br: −1 → 0 (oksideres)',
          },
        ],
        solution: 'a) Mg oksideres, O reduseres; b) Cu reduseres, H oksideres; c) Cl reduseres, Br oksideres',
        hints: ['Bestem oksidasjonstall først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REDOKSPAR ==========
    {
      id: 'kjemi1-4-3-redox-pairs',
      type: 'text',
      content: `## Redokspar

Et **redokspar** består av en oksidert og en redusert form av samme stoff.

### Definisjon:
- **Reduksjonsmiddel**: Stoffet som **avgir elektroner** (blir selv oksidert)
- **Oksidasjonsmiddel**: Stoffet som **tar opp elektroner** (blir selv redusert)

**Viktig:** Reduksjonsmiddelet oksideres, oksidasjonsmiddelet reduseres!

### Eksempel:
$$\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$$

- **Reduksjonsmiddel:** Zn (avgir elektroner, oksideres til Zn²⁺)
- **Oksidasjonsmiddel:** Cu²⁺ (tar opp elektroner, reduseres til Cu)

**Redokspar:**
- Zn/Zn²⁺ (reduksjonsmiddel/oksidert form)
- Cu²⁺/Cu (oksidasjonsmiddel/redusert form)

### Halvreaksjoner:
- **Oksidasjon:** Zn → Zn²⁺ + 2e⁻
- **Reduksjon:** Cu²⁺ + 2e⁻ → Cu`,
    },

    {
      id: 'kjemi1-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Reduksjonsmiddel og oksidasjonsmiddel',
      problem: `I reaksjonen:

$$\\text{Sn}^{2+} + 2\\text{Fe}^{3+} \\rightarrow \\text{Sn}^{4+} + 2\\text{Fe}^{2+}$$

a) Identifiser reduksjonsmiddel og oksidasjonsmiddel
b) Skriv halvreaksjoner`,
      solution: `**Løsning:**

a) **Oksidasjonstallendringer:**
   - Sn: +2 → +4 (oksideres) → **reduksjonsmiddel**
   - Fe: +3 → +2 (reduseres) → **oksidasjonsmiddel**

b) **Halvreaksjoner:**
   - Oksidasjon: $\\text{Sn}^{2+} \\rightarrow \\text{Sn}^{4+} + 2\\text{e}^-$
   - Reduksjon: $\\text{Fe}^{3+} + \\text{e}^- \\rightarrow \\text{Fe}^{2+}$ (×2)

**Svar:**
- Reduksjonsmiddel: Sn²⁺
- Oksidasjonsmiddel: Fe³⁺`,
    },

    {
      id: 'kjemi1-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-3-ex-3',
        number: '4-13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser reduksjonsmiddel og oksidasjonsmiddel:',
        subTasks: [
          {
            label: 'a',
            task: '$2\\text{Al} + 3\\text{CuO} \\rightarrow \\text{Al}_2\\text{O}_3 + 3\\text{Cu}$',
            solution: 'Reduksjonsmiddel: Al (oksideres 0 → +3), Oksidasjonsmiddel: CuO (Cu reduseres +2 → 0)',
          },
          {
            label: 'b',
            task: '$\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$',
            solution: 'Reduksjonsmiddel: Fe²⁺ (oksideres +2 → +3), Oksidasjonsmiddel: MnO₄⁻ (Mn reduseres +7 → +2)',
          },
          {
            label: 'c',
            task: '$\\text{H}_2 + \\text{Cl}_2 \\rightarrow 2\\text{HCl}$',
            solution: 'Reduksjonsmiddel: H₂ (oksideres 0 → +1), Oksidasjonsmiddel: Cl₂ (reduseres 0 → −1)',
          },
        ],
        solution: 'a) Red: Al, Oks: CuO; b) Red: Fe²⁺, Oks: MnO₄⁻; c) Red: H₂, Oks: Cl₂',
        hints: ['Reduksjonsmiddelet oksideres, oksidasjonsmiddelet reduseres'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BALANSERING AV REDOKSREAKSJONER I BASISK MILJØ ==========
    {
      id: 'kjemi1-4-3-basic',
      type: 'text',
      content: `## Balansering i basisk miljø

For redoksreaksjoner i **basisk løsning** bruker vi en utvidelse av halvreaksjonsmetoden:

### Fremgangsmåte:
1. **Balanser som i surt miljø** (med H⁺ og H₂O)
2. **Legg til OH⁻** på begge sider for å nøytralisere H⁺:
   - For hver H⁺, legg til 1 OH⁻ på begge sider
   - H⁺ + OH⁻ → H₂O
3. **Forenkle** ved å fjerne overflødig H₂O

### Eksempel:
$$\\text{MnO}_4^- + \\text{I}^- \\rightarrow \\text{MnO}_2 + \\text{I}_2 \\text{ (basisk)}$$

(Skal balanseres i neste eksempel)`,
    },

    {
      id: 'kjemi1-4-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Balansering i basisk miljø',
      problem: `Balanser i basisk miljø:

$$\\text{MnO}_4^-(aq) + \\text{I}^-(aq) \\rightarrow \\text{MnO}_2(s) + \\text{I}_2(s)$$`,
      solution: `**Løsning:**

**1. Halvreaksjoner (som i surt miljø):**
- Reduksjon: $\\text{MnO}_4^- + 4\\text{H}^+ + 3\\text{e}^- \\rightarrow \\text{MnO}_2 + 2\\text{H}_2\\text{O}$
- Oksidasjon: $2\\text{I}^- \\rightarrow \\text{I}_2 + 2\\text{e}^-$

**2. Multipliser for lik elektronmengde:**
- Reduksjon: (×2) $2\\text{MnO}_4^- + 8\\text{H}^+ + 6\\text{e}^- \\rightarrow 2\\text{MnO}_2 + 4\\text{H}_2\\text{O}$
- Oksidasjon: (×3) $6\\text{I}^- \\rightarrow 3\\text{I}_2 + 6\\text{e}^-$

**3. Adder:**
$$2\\text{MnO}_4^- + 8\\text{H}^+ + 6\\text{I}^- \\rightarrow 2\\text{MnO}_2 + 4\\text{H}_2\\text{O} + 3\\text{I}_2$$

**4. Konverter til basisk:**
Legg til 8 OH⁻ på begge sider:
$$2\\text{MnO}_4^- + 8\\text{H}^+ + 8\\text{OH}^- + 6\\text{I}^- \\rightarrow 2\\text{MnO}_2 + 4\\text{H}_2\\text{O} + 3\\text{I}_2 + 8\\text{OH}^-$$

8 H⁺ + 8 OH⁻ → 8 H₂O:
$$2\\text{MnO}_4^- + 8\\text{H}_2\\text{O} + 6\\text{I}^- \\rightarrow 2\\text{MnO}_2 + 4\\text{H}_2\\text{O} + 3\\text{I}_2 + 8\\text{OH}^-$$

**5. Forenkle:**
$$2\\text{MnO}_4^- + 4\\text{H}_2\\text{O} + 6\\text{I}^- \\rightarrow 2\\text{MnO}_2 + 3\\text{I}_2 + 8\\text{OH}^-$$

**Svar:**
$$2\\text{MnO}_4^- + 4\\text{H}_2\\text{O} + 6\\text{I}^- \\rightarrow 2\\text{MnO}_2 + 3\\text{I}_2 + 8\\text{OH}^-$$`,
    },

    {
      id: 'kjemi1-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-3-ex-4',
        number: '4-14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Balanser følgende redoksreaksjoner i basisk miljø:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{Al} + \\text{OH}^- \\rightarrow \\text{Al(OH)}_4^- + \\text{H}_2$',
            solution: '$2\\text{Al} + 2\\text{OH}^- + 6\\text{H}_2\\text{O} \\rightarrow 2\\text{Al(OH)}_4^- + 3\\text{H}_2$',
          },
          {
            label: 'b',
            task: '$\\text{Cr(OH)}_3 + \\text{ClO}^- \\rightarrow \\text{CrO}_4^{2-} + \\text{Cl}^-$',
            solution: '$2\\text{Cr(OH)}_3 + 3\\text{ClO}^- + 4\\text{OH}^- \\rightarrow 2\\text{CrO}_4^{2-} + 3\\text{Cl}^- + 5\\text{H}_2\\text{O}$',
          },
        ],
        solution: 'a) 2Al + 2OH⁻ + 6H₂O → 2Al(OH)₄⁻ + 3H₂; b) 2Cr(OH)₃ + 3ClO⁻ + 4OH⁻ → 2CrO₄²⁻ + 3Cl⁻ + 5H₂O',
        hints: ['Balanser først i surt miljø, deretter konverter til basisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GALVANISKE CELLER (KORT INTRO) ==========
    {
      id: 'kjemi1-4-3-galvanic',
      type: 'text',
      content: `## Galvaniske celler (kort introduksjon)

En **galvanisk celle** (eller elektrokjemisk celle) bruker en redoksreaksjon til å produsere elektrisk strøm.

### Prinsipp:
- **Oksidasjon** skjer ved anoden (negativt pol)
- **Reduksjon** skjer ved katoden (positivt pol)
- Elektroner flyter fra anode til katode gjennom en ytre krets

### Eksempel: Daniell-cellen
$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

**Anode (oksidasjon):** Zn → Zn²⁺ + 2e⁻
**Katode (reduksjon):** Cu²⁺ + 2e⁻ → Cu

Elektroner flyter fra Zn-elektroden til Cu-elektroden.

### Huskeregel:
- **AN**ode – **OX**idasjon (AN-OX)
- **KAT**ode – **RED**uksjon (KAT-RED)

### Praktisk bruk:
- Batterier (f.eks. alkaliske batterier, Li-ion-batterier)
- Brenselceller
- Elektrokjemi`,
    },

    {
      id: 'kjemi1-4-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Galvanisk celle',
      problem: `En galvanisk celle er bygd med en magnesium-elektrode i Mg²⁺-løsning og en sølv-elektrode i Ag⁺-løsning. Reaksjonen er:

$$\\text{Mg}(s) + 2\\text{Ag}^+(aq) \\rightarrow \\text{Mg}^{2+}(aq) + 2\\text{Ag}(s)$$

a) Hvilken elektrode er anode, hvilken er katode?
b) Hvilken retning flyter elektronene?`,
      solution: `**Løsning:**

a) **Identifiser halvreaksjoner:**
   - Mg: 0 → +2 (oksideres) → Mg er **anode**
   - Ag: +1 → 0 (reduseres) → Ag er **katode**

b) **Elektronflyt:**
   Elektroner flyter alltid fra anode til katode.
   → Elektroner flyter fra **Mg-elektroden til Ag-elektroden**.

**Svar:**
a) Anode: Mg, Katode: Ag
b) Elektroner flyter fra Mg til Ag`,
    },

    {
      id: 'kjemi1-4-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-3-ex-5',
        number: '4-15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Galvaniske celler:',
        subTasks: [
          {
            label: 'a',
            task: 'I en galvanisk celle med Zn og Pb elektroder, vil Zn oksideres. Hvilken elektrode er anode?',
            solution: 'Zn oksideres → Zn er **anode** (AN-OX)',
          },
          {
            label: 'b',
            task: 'Hvor skjer reduksjon i en galvanisk celle?',
            solution: 'Reduksjon skjer ved **katoden** (KAT-RED)',
          },
          {
            label: 'c',
            task: 'I reaksjonen $\\text{Fe} + \\text{Ni}^{2+} \\rightarrow \\text{Fe}^{2+} + \\text{Ni}$, hvilken retning flyter elektronene?',
            solution: 'Fe oksideres (anode), Ni²⁺ reduseres (katode) → Elektroner flyter fra **Fe til Ni**',
          },
        ],
        solution: 'a) Zn; b) Katode; c) Fra Fe til Ni',
        hints: ['AN-OX, KAT-RED'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-4-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-4-3-ex-6',
        number: '4-16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte redoksoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Bestem oksidasjonstallet til Cr i K₂Cr₂O₇',
            solution: 'K: +1×2 = +2, O: −2×7 = −14. Summen = 0 → 2Cr = +12 → Cr = **+6**',
          },
          {
            label: 'b',
            task: 'Er følgende reaksjon en redoksreaksjon? $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$',
            solution: 'Ca: +2 → +2, C: +4 → +4, O: −2 → −2. Ingen endring i oksidasjonstall → **Nei**',
          },
          {
            label: 'c',
            task: 'Balanser i surt miljø: $\\text{Cr}_2\\text{O}_7^{2-} + \\text{Cl}^- \\rightarrow \\text{Cr}^{3+} + \\text{Cl}_2$',
            solution: '$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6\\text{Cl}^- \\rightarrow 2\\text{Cr}^{3+} + 3\\text{Cl}_2 + 7\\text{H}_2\\text{O}$',
          },
        ],
        solution: 'a) +6; b) Nei; c) Cr₂O₇²⁻ + 14H⁺ + 6Cl⁻ → 2Cr³⁺ + 3Cl₂ + 7H₂O',
        hints: ['Bruk alle metoder du har lært'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 5.1: Mol og molmasse
// ============================================================================

const CHAPTER_KJEMI1_5_1: TextbookChapter = {
  id: 'kjemi1-5-1',
  courseId: 'kjemi1',
  chapterNumber: '5.1',
  title: 'Mol og molmasse',
  description: 'Lær om mol som en mengdeenhet, Avogadros tall, molmasse og omregning mellom masse, stoffmengde og antall partikler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hva mol er som mengdeenhet',
    'bruke Avogadros tall i beregninger',
    'beregne molmasse fra periodesystemet',
    'regne om mellom masse, stoffmengde og antall partikler',
  ],
  content: [
    // ========== MOLBEGREPET ==========
    {
      id: 'kjemi1-5-1-intro',
      type: 'text',
      content: `## Mol som mengdeenhet

**Mol** (forkortet mol) er en måleenhet for mengde stoff, på samme måte som kilogram er en enhet for masse og liter er en enhet for volum.

### Definisjon av mol
En mol er definert som **mengden stoff som inneholder like mange partikler som det er atomer i 12 gram rent karbon-12**.

Dette antallet kalles **Avogadros tall** (Nₐ):

$$N_\\text{a} = 6{,}022 \\times 10^{23} \\text{ mol}^{-1}$$

### Hva betyr dette?
- 1 mol H₂O-molekyler = 6,022 × 10²³ H₂O-molekyler
- 1 mol CO₂-molekyler = 6,022 × 10²³ CO₂-molekyler
- 1 mol elektroner = 6,022 × 10²³ elektroner

**Viktig:** Mol beskriver **antall partikler**, ikke masse eller volum!`,
    },

    {
      id: 'kjemi1-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Avogadros tall',
      problem: `Hvor mange vannmolekyler (H₂O) er det i 2,5 mol vann?`,
      solution: `**Løsning:**

Vi vet at 1 mol inneholder Nₐ = 6,022 × 10²³ partikler.

**Antall partikler:**
$$N = n \\times N_\\text{a}$$

$$N = 2{,}5 \\text{ mol} \\times 6{,}022 \\times 10^{23} \\text{ mol}^{-1}$$

$$N = 1{,}51 \\times 10^{24} \\text{ molekyler}$$

**Svar:** Det er 1,51 × 10²⁴ vannmolekyler i 2,5 mol vann.`,
    },

    {
      id: 'kjemi1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-1',
        number: '5-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk Avogadros tall til å beregne:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange atomer er det i 1 mol oksygen-atomer?',
            solution: '1 mol inneholder Nₐ = **6,022 × 10²³ atomer**',
          },
          {
            label: 'b',
            task: 'Hvor mange molekyler er det i 0,5 mol CO₂?',
            solution: 'N = n × Nₐ = 0,5 × 6,022 × 10²³ = **3,011 × 10²³ molekyler**',
          },
          {
            label: 'c',
            task: 'Hvor mange mol er 1,2 × 10²⁴ atomer?',
            solution: 'n = N / Nₐ = (1,2 × 10²⁴) / (6,022 × 10²³) = **1,99 mol ≈ 2 mol**',
          },
        ],
        solution: 'a) 6,022 × 10²³; b) 3,011 × 10²³; c) ≈ 2 mol',
        hints: ['Bruk N = n × Nₐ og n = N / Nₐ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MOLMASSE ==========
    {
      id: 'kjemi1-5-1-molmasse',
      type: 'text',
      content: `## Molmasse

**Molmasse** (M) er massen til én mol av et stoff, målt i gram per mol (g/mol).

### Molmasse for atomer
Molmassen til et grunnstoff er **numerisk lik atomets relative masse** (u), men med enhet g/mol:

- Hydrogen (H): 1 u → M = 1 g/mol
- Karbon (C): 12 u → M = 12 g/mol
- Oksygen (O): 16 u → M = 16 g/mol

### Molmasse for molekyler
Molmassen til et molekyl er **summen av molmassene til alle atomene** i molekylet.

**Eksempel:** H₂O
- H: 1 g/mol × 2 = 2 g/mol
- O: 16 g/mol × 1 = 16 g/mol
- **M(H₂O) = 18 g/mol**

### Formler:
$$M = \\frac{m}{n}$$

Hvor:
- **M** = molmasse (g/mol)
- **m** = masse (g)
- **n** = stoffmengde (mol)

Omskrevet:
$$n = \\frac{m}{M} \\quad \\text{eller} \\quad m = n \\times M$$`,
    },

    {
      id: 'kjemi1-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregne molmasse',
      problem: `Beregn molmassen til:
a) Glukose (C₆H₁₂O₆)
b) Kalsiumkarbonat (CaCO₃)

Bruk: C = 12 g/mol, H = 1 g/mol, O = 16 g/mol, Ca = 40 g/mol`,
      solution: `**Løsning:**

a) **Glukose (C₆H₁₂O₆):**
   - C: 12 g/mol × 6 = 72 g/mol
   - H: 1 g/mol × 12 = 12 g/mol
   - O: 16 g/mol × 6 = 96 g/mol

   **M(C₆H₁₂O₆) = 72 + 12 + 96 = 180 g/mol**

b) **Kalsiumkarbonat (CaCO₃):**
   - Ca: 40 g/mol × 1 = 40 g/mol
   - C: 12 g/mol × 1 = 12 g/mol
   - O: 16 g/mol × 3 = 48 g/mol

   **M(CaCO₃) = 40 + 12 + 48 = 100 g/mol**`,
    },

    {
      id: 'kjemi1-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-2',
        number: '5-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn molmassen til følgende stoffer (bruk C=12, H=1, O=16, N=14, S=32 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Metangass (CH₄)',
            solution: 'M = 12 + 1×4 = **16 g/mol**',
          },
          {
            label: 'b',
            task: 'Ammoniakk (NH₃)',
            solution: 'M = 14 + 1×3 = **17 g/mol**',
          },
          {
            label: 'c',
            task: 'Svovelsyre (H₂SO₄)',
            solution: 'M = 1×2 + 32 + 16×4 = 2 + 32 + 64 = **98 g/mol**',
          },
        ],
        solution: 'a) 16 g/mol; b) 17 g/mol; c) 98 g/mol',
        hints: ['Legg sammen molmassen til hvert atom multiplisert med antallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MASSE-MOL OMREGNINGER ==========
    {
      id: 'kjemi1-5-1-conversions',
      type: 'text',
      content: `## Masse-mol omregninger

Vi kan regne om mellom masse (m), stoffmengde (n) og antall partikler (N):

### Viktige formler:

**1. Masse ↔ Stoffmengde:**
$$n = \\frac{m}{M} \\quad \\text{eller} \\quad m = n \\times M$$

**2. Stoffmengde ↔ Antall partikler:**
$$N = n \\times N_\\text{a} \\quad \\text{eller} \\quad n = \\frac{N}{N_\\text{a}}$$

**3. Masse ↔ Antall partikler:**
$$N = \\frac{m}{M} \\times N_\\text{a}$$

### Huskeregel – trekanten:
\`\`\`
      m
     ---
    | M |
     ---
      n
\`\`\`

- m (masse) oppe
- n (stoffmengde) nede
- M (molmasse) i midten

**n = m/M** og **m = n × M**`,
    },

    {
      id: 'kjemi1-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Masse til mol',
      problem: `Du har 36 g vann (H₂O). M(H₂O) = 18 g/mol.

a) Hvor mange mol vann er dette?
b) Hvor mange vannmolekyler er dette?`,
      solution: `**Løsning:**

a) **Stoffmengde:**
$$n = \\frac{m}{M} = \\frac{36 \\text{ g}}{18 \\text{ g/mol}} = 2 \\text{ mol}$$

b) **Antall molekyler:**
$$N = n \\times N_\\text{a} = 2 \\text{ mol} \\times 6{,}022 \\times 10^{23} \\text{ mol}^{-1}$$

$$N = 1{,}204 \\times 10^{24} \\text{ molekyler}$$

**Svar:**
a) 2 mol vann
b) 1,204 × 10²⁴ vannmolekyler`,
    },

    {
      id: 'kjemi1-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-3',
        number: '5-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omregning mellom masse, mol og antall partikler (bruk M(CO₂) = 44 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange mol CO₂ er 88 g?',
            solution: 'n = m/M = 88/44 = **2 mol**',
          },
          {
            label: 'b',
            task: 'Hva er massen til 0,25 mol CO₂?',
            solution: 'm = n × M = 0,25 × 44 = **11 g**',
          },
          {
            label: 'c',
            task: 'Hvor mange CO₂-molekyler er det i 22 g?',
            solution: 'n = 22/44 = 0,5 mol. N = 0,5 × 6,022×10²³ = **3,011 × 10²³ molekyler**',
          },
        ],
        solution: 'a) 2 mol; b) 11 g; c) 3,011 × 10²³ molekyler',
        hints: ['Bruk n = m/M og N = n × Nₐ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Antall partikler til masse',
      problem: `Hvor stor masse har 1,5 × 10²³ glukosemolekyler (C₆H₁₂O₆)?
M(C₆H₁₂O₆) = 180 g/mol`,
      solution: `**Løsning:**

**Steg 1: Finn stoffmengde**
$$n = \\frac{N}{N_\\text{a}} = \\frac{1{,}5 \\times 10^{23}}{6{,}022 \\times 10^{23}} = 0{,}249 \\text{ mol}$$

**Steg 2: Finn masse**
$$m = n \\times M = 0{,}249 \\text{ mol} \\times 180 \\text{ g/mol} = 44{,}8 \\text{ g}$$

**Svar:** Massen er 44,8 g (eller ca. 45 g).`,
    },

    {
      id: 'kjemi1-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-4',
        number: '5-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Partikler til masse og omvendt (bruk M(NaCl) = 58,5 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange NaCl-enheter er det i 117 g NaCl?',
            solution: 'n = 117/58,5 = 2 mol. N = 2 × 6,022×10²³ = **1,204 × 10²⁴ enheter**',
          },
          {
            label: 'b',
            task: 'Hva er massen til 3,011 × 10²³ NaCl-enheter?',
            solution: 'n = N/Nₐ = (3,011×10²³)/(6,022×10²³) = 0,5 mol. m = 0,5 × 58,5 = **29,25 g**',
          },
        ],
        solution: 'a) 1,204 × 10²⁴; b) 29,25 g',
        hints: ['Gå via stoffmengde (mol) som mellomledd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== AVANSERTE OPPGAVER ==========
    {
      id: 'kjemi1-5-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-5',
        number: '5-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte mol-beregninger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange hydrogenatomer er det i 18 g vann (H₂O)? M(H₂O) = 18 g/mol',
            solution: 'n(H₂O) = 18/18 = 1 mol H₂O. Hvert H₂O har 2 H → n(H) = 2 mol. N(H) = 2 × 6,022×10²³ = **1,204 × 10²⁴ H-atomer**',
          },
          {
            label: 'b',
            task: 'Hva er massen til 1 molekyl CO₂? M(CO₂) = 44 g/mol',
            solution: 'Masse til 1 mol = 44 g. Masse til 1 molekyl = 44/(6,022×10²³) = **7,31 × 10⁻²³ g**',
          },
          {
            label: 'c',
            task: 'En prøve inneholder 2 × 10²⁴ O-atomer. Hvor mange mol O₂-molekyler er dette?',
            solution: 'n(O-atomer) = (2×10²⁴)/(6,022×10²³) ≈ 3,32 mol O-atomer. O₂ har 2 O → n(O₂) = 3,32/2 = **1,66 mol O₂**',
          },
        ],
        solution: 'a) 1,204 × 10²⁴ H-atomer; b) 7,31 × 10⁻²³ g; c) 1,66 mol O₂',
        hints: ['Tenk nøye på antall atomer per molekyl'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-6',
        number: '5-6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Blandede oppgaver på mol og molmasse:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange mol er 100 g natriumhydroksid (NaOH)? M(NaOH) = 40 g/mol',
            solution: 'n = m/M = 100/40 = **2,5 mol**',
          },
          {
            label: 'b',
            task: 'Hva er massen til 5 mol glukose (C₆H₁₂O₆)? M = 180 g/mol',
            solution: 'm = n × M = 5 × 180 = **900 g**',
          },
          {
            label: 'c',
            task: 'Hvor mange N₂-molekyler er det i 28 g nitrogen? M(N₂) = 28 g/mol',
            solution: 'n = 28/28 = 1 mol. N = 1 × 6,022×10²³ = **6,022 × 10²³ molekyler**',
          },
        ],
        solution: 'a) 2,5 mol; b) 900 g; c) 6,022 × 10²³ molekyler',
        hints: ['Bruk n = m/M og N = n × Nₐ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-1-ex-7',
        number: '5-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammensatte oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange karbonatomer er det i 12 g metangass (CH₄)? M(CH₄) = 16 g/mol',
            solution: 'n(CH₄) = 12/16 = 0,75 mol. N(C) = 0,75 × 6,022×10²³ = **4,52 × 10²³ C-atomer**',
          },
          {
            label: 'b',
            task: 'Sammenlign massene: 1 mol H₂O vs. 1 mol H₂SO₄. M(H₂O)=18, M(H₂SO₄)=98 g/mol',
            solution: 'H₂O: 18 g, H₂SO₄: 98 g. **H₂SO₄ er 98/18 ≈ 5,4 ganger tyngre**',
          },
        ],
        solution: 'a) 4,52 × 10²³ C-atomer; b) H₂SO₄ er 5,4 ganger tyngre',
        hints: ['Bruk molmasse og Avogadros tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 5.2: Konsentrasjon
// ============================================================================

const CHAPTER_KJEMI1_5_2: TextbookChapter = {
  id: 'kjemi1-5-2',
  courseId: 'kjemi1',
  chapterNumber: '5.2',
  title: 'Konsentrasjon',
  description: 'Lær om ulike konsentrasjonsmål: stoffmengdekonsentrasjon, massekonsentrasjon, masseprosent, ppm/ppb og fortynning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne stoffmengdekonsentrasjon (molaritet)',
    'regne om mellom ulike konsentrasjonsmål',
    'bruke masseprosent, ppm og ppb',
    'beregne fortynning av løsninger',
  ],
  content: [
    // ========== STOFFMENGDEKONSENTRASJON ==========
    {
      id: 'kjemi1-5-2-intro',
      type: 'text',
      content: `## Stoffmengdekonsentrasjon (molaritet)

**Stoffmengdekonsentrasjon** (også kalt **molaritet**) angir hvor mange mol stoff som er oppløst per liter løsning.

### Definisjon:
$$c = \\frac{n}{V}$$

Hvor:
- **c** = stoffmengdekonsentrasjon (mol/L eller M)
- **n** = stoffmengde (mol)
- **V** = volum løsning (L)

### Enhet:
- mol/L (mol per liter)
- M (molar) – **1 M = 1 mol/L**

**Eksempel:**
- 2 M HCl betyr 2 mol HCl per liter løsning
- 0,5 M NaOH betyr 0,5 mol NaOH per liter løsning

### Viktige sammenhenger:
$$n = c \\times V \\quad \\text{og} \\quad V = \\frac{n}{c}$$`,
    },

    {
      id: 'kjemi1-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne stoffmengdekonsentrasjon',
      problem: `Du løser opp 5,85 g natriumklorid (NaCl) i vann og fyller opp til 500 mL.
M(NaCl) = 58,5 g/mol

Hva er stoffmengdekonsentrasjonen?`,
      solution: `**Løsning:**

**Steg 1: Finn stoffmengde**
$$n = \\frac{m}{M} = \\frac{5{,}85 \\text{ g}}{58{,}5 \\text{ g/mol}} = 0{,}1 \\text{ mol}$$

**Steg 2: Konverter volum til liter**
$$V = 500 \\text{ mL} = 0{,}5 \\text{ L}$$

**Steg 3: Beregn konsentrasjon**
$$c = \\frac{n}{V} = \\frac{0{,}1 \\text{ mol}}{0{,}5 \\text{ L}} = 0{,}2 \\text{ mol/L}$$

**Svar:** Konsentrasjonen er 0,2 M (eller 0,2 mol/L).`,
    },

    {
      id: 'kjemi1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-2-ex-1',
        number: '5-8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn stoffmengdekonsentrasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er konsentrasjonen når 2 mol NaOH løses i 1 L vann?',
            solution: 'c = n/V = 2/1 = **2 mol/L (2 M)**',
          },
          {
            label: 'b',
            task: 'Hva er konsentrasjonen når 0,5 mol HCl løses i 2 L vann?',
            solution: 'c = n/V = 0,5/2 = **0,25 mol/L (0,25 M)**',
          },
          {
            label: 'c',
            task: 'Hvor mange mol glukose er det i 0,5 L av en 0,2 M løsning?',
            solution: 'n = c × V = 0,2 × 0,5 = **0,1 mol**',
          },
        ],
        solution: 'a) 2 M; b) 0,25 M; c) 0,1 mol',
        hints: ['Bruk c = n/V eller n = c × V'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MASSEKONSENTRASJON ==========
    {
      id: 'kjemi1-5-2-mass-conc',
      type: 'text',
      content: `## Massekonsentrasjon

**Massekonsentrasjon** (γ) angir masse stoff per volum løsning:

$$\\gamma = \\frac{m}{V}$$

Hvor:
- **γ** (gamma) = massekonsentrasjon (g/L)
- **m** = masse oppløst stoff (g)
- **V** = volum løsning (L)

### Sammenheng mellom c og γ:
$$\\gamma = c \\times M$$

**Eksempel:**
En 1 M NaCl-løsning (M = 58,5 g/mol):
γ = 1 mol/L × 58,5 g/mol = 58,5 g/L`,
    },

    {
      id: 'kjemi1-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Massekonsentrasjon',
      problem: `En løsning inneholder 20 g glukose (C₆H₁₂O₆) i 500 mL.

a) Hva er massekonsentrasjonen?
b) Hva er stoffmengdekonsentrasjonen? M(glukose) = 180 g/mol`,
      solution: `**Løsning:**

a) **Massekonsentrasjon:**
$$\\gamma = \\frac{m}{V} = \\frac{20 \\text{ g}}{0{,}5 \\text{ L}} = 40 \\text{ g/L}$$

b) **Stoffmengdekonsentrasjon:**
Først finn stoffmengde:
$$n = \\frac{m}{M} = \\frac{20}{180} = 0{,}111 \\text{ mol}$$

Deretter konsentrasjon:
$$c = \\frac{n}{V} = \\frac{0{,}111}{0{,}5} = 0{,}222 \\text{ mol/L}$$

**Svar:**
a) γ = 40 g/L
b) c = 0,222 M`,
    },

    {
      id: 'kjemi1-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-2-ex-2',
        number: '5-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Massekonsentrasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er massekonsentrasjonen når 10 g sukker løses i 250 mL vann?',
            solution: 'γ = m/V = 10/0,25 = **40 g/L**',
          },
          {
            label: 'b',
            task: 'Hva er stoffmengdekonsentrasjonen til en løsning med γ = 50 g/L NaCl? M(NaCl) = 58,5 g/mol',
            solution: 'c = γ/M = 50/58,5 = **0,855 mol/L**',
          },
        ],
        solution: 'a) 40 g/L; b) 0,855 M',
        hints: ['γ = m/V og c = γ/M'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MASSEPROSENT ==========
    {
      id: 'kjemi1-5-2-mass-percent',
      type: 'text',
      content: `## Masseprosent

**Masseprosent** (w%) angir masse oppløst stoff som andel av total masse:

$$w\\% = \\frac{m_{\\text{stoff}}}{m_{\\text{løsning}}} \\times 100\\%$$

Hvor:
- **m_{stoff}** = masse oppløst stoff (g)
- **m_{løsning}** = total masse løsning (g) = m_{stoff} + m_{løsemiddel}

**Eksempel:**
20 g salt i 180 g vann:
- m_{løsning} = 20 + 180 = 200 g
- w% = (20/200) × 100% = 10%

### Vanlige eksempler:
- Eddik: 4–5% eddiksyre
- Fysiologisk saltvann: 0,9% NaCl
- Konsentrert saltsyre (HCl): 37%`,
    },

    {
      id: 'kjemi1-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Masseprosent',
      problem: `Du skal lage en 15% sukkerløsning. Hvor mye sukker og vann trenger du for å lage 300 g løsning?`,
      solution: `**Løsning:**

**Masse sukker:**
$$m_{\\text{sukker}} = \\frac{15}{100} \\times 300 \\text{ g} = 45 \\text{ g}$$

**Masse vann:**
$$m_{\\text{vann}} = m_{\\text{løsning}} - m_{\\text{sukker}} = 300 - 45 = 255 \\text{ g}$$

**Svar:**
- 45 g sukker
- 255 g vann`,
    },

    {
      id: 'kjemi1-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-2-ex-3',
        number: '5-10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Masseprosent:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er masseprosen hvis 25 g sukker løses i 225 g vann?',
            solution: 'm_løsning = 25 + 225 = 250 g. w% = (25/250) × 100 = **10%**',
          },
          {
            label: 'b',
            task: 'Hvor mye salt trengs for å lage 500 g av en 3% saltløsning?',
            solution: 'm_salt = 0,03 × 500 = **15 g**',
          },
          {
            label: 'c',
            task: 'En 20% sukkerløsning har 80 g sukker. Hva er total masse?',
            solution: 'm_løsning = m_sukker / 0,20 = 80 / 0,20 = **400 g**',
          },
        ],
        solution: 'a) 10%; b) 15 g; c) 400 g',
        hints: ['w% = (m_stoff / m_løsning) × 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PPM OG PPB ==========
    {
      id: 'kjemi1-5-2-ppm',
      type: 'text',
      content: `## ppm og ppb

For **svært fortynne løsninger** brukes ofte ppm og ppb:

### Definisjoner:
- **ppm** (parts per million) = mg/L eller mg/kg
  $$\\text{ppm} = \\frac{m_{\\text{stoff (mg)}}}{V_{\\text{løsning (L)}}}$$

- **ppb** (parts per billion) = μg/L eller μg/kg
  $$\\text{ppb} = \\frac{m_{\\text{stoff (μg)}}}{V_{\\text{løsning (L)}}}$$

### Sammenhenger:
- 1 ppm = 0,0001% = 10⁻⁴%
- 1 ppm = 1000 ppb
- 1 ppb = 0,001 ppm

**Bruksområder:**
- Vannkvalitet (f.eks. grenseverdier for forurensning)
- Spormetaller i drikkevannskvalitet
- Luftkvalitet`,
    },

    {
      id: 'kjemi1-5-2-example-4',
      type: 'example',
      title: 'Eksempel 4: ppm og ppb',
      problem: `Grenseverdien for bly i drikkevann er 10 μg/L (ppb).

a) Hva tilsvarer dette i ppm?
b) Hvor mange gram bly er det i 1000 L vann ved grenseverdien?`,
      solution: `**Løsning:**

a) **Konverter ppb til ppm:**
$$\\text{ppm} = \\frac{\\text{ppb}}{1000} = \\frac{10}{1000} = 0{,}01 \\text{ ppm}$$

b) **Masse bly i 1000 L:**
10 μg/L × 1000 L = 10 000 μg = 10 mg = **0,01 g**

**Svar:**
a) 0,01 ppm
b) 0,01 g (10 mg)`,
    },

    {
      id: 'kjemi1-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-2-ex-4',
        number: '5-11',
        type: 'classic',
        difficulty: 'medium',
        task: 'ppm og ppb:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er konsentrasjonen i ppm hvis 5 mg stoff er i 1 L vann?',
            solution: 'ppm = mg/L = **5 ppm**',
          },
          {
            label: 'b',
            task: 'Konverter 2 ppm til ppb',
            solution: 'ppb = ppm × 1000 = 2 × 1000 = **2000 ppb**',
          },
          {
            label: 'c',
            task: 'Hvor mange gram klor er det i 10 000 L vann med 1 ppm klor?',
            solution: '1 ppm = 1 mg/L. Masse = 1 mg/L × 10 000 L = 10 000 mg = **10 g**',
          },
        ],
        solution: 'a) 5 ppm; b) 2000 ppb; c) 10 g',
        hints: ['1 ppm = 1 mg/L og 1 ppm = 1000 ppb'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FORTYNNING ==========
    {
      id: 'kjemi1-5-2-dilution',
      type: 'text',
      content: `## Fortynning av løsninger

Når du fortynner en løsning ved å tilsette mer løsemiddel, endres konsentrasjonen, men **stoffmengden forblir den samme**.

### Fortynningsformelen:
$$c_1 V_1 = c_2 V_2$$

Hvor:
- **c₁** = konsentrasjon før fortynning
- **V₁** = volum før fortynning
- **c₂** = konsentrasjon etter fortynning
- **V₂** = volum etter fortynning

**Viktig:**
- n₁ = n₂ (stoffmengden er den samme)
- V₂ > V₁ (volumet øker)
- c₂ < c₁ (konsentrasjonen minker)`,
    },

    {
      id: 'kjemi1-5-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Fortynning',
      problem: `Du har 50 mL av en 2 M HCl-løsning. Du tilsetter vann til totalt volum blir 200 mL.

Hva er den nye konsentrasjonen?`,
      solution: `**Løsning:**

**Bruk fortynningsformelen:**
$$c_1 V_1 = c_2 V_2$$

$$2 \\text{ M} \\times 50 \\text{ mL} = c_2 \\times 200 \\text{ mL}$$

$$c_2 = \\frac{2 \\times 50}{200} = \\frac{100}{200} = 0{,}5 \\text{ M}$$

**Svar:** Den nye konsentrasjonen er 0,5 M.`,
    },

    {
      id: 'kjemi1-5-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-2-ex-5',
        number: '5-12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fortynning:',
        subTasks: [
          {
            label: 'a',
            task: 'Du har 100 mL av 3 M NaOH og fortynner til 300 mL. Hva er ny konsentrasjon?',
            solution: 'c₁V₁ = c₂V₂ → 3 × 100 = c₂ × 300 → c₂ = 300/300 = **1 M**',
          },
          {
            label: 'b',
            task: 'Hvor mye vann må du tilsette til 50 mL av 4 M HCl for å få 1 M?',
            solution: 'c₁V₁ = c₂V₂ → 4 × 50 = 1 × V₂ → V₂ = 200 mL. Tilsett 200 - 50 = **150 mL vann**',
          },
          {
            label: 'c',
            task: 'Hva blir konsentrasjonen hvis du blander 25 mL av 2 M løsning med 75 mL vann?',
            solution: 'V₂ = 25 + 75 = 100 mL. c₁V₁ = c₂V₂ → 2 × 25 = c₂ × 100 → c₂ = **0,5 M**',
          },
        ],
        solution: 'a) 1 M; b) 150 mL; c) 0,5 M',
        hints: ['Bruk c₁V₁ = c₂V₂'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-2-ex-6',
        number: '5-13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte konsentrasjonsoppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye 6 M HCl trenger du for å lage 500 mL av 0,5 M HCl?',
            solution: 'c₁V₁ = c₂V₂ → 6 × V₁ = 0,5 × 500 → V₁ = 250/6 = **41,7 mL**. Tilsett vann til 500 mL.',
          },
          {
            label: 'b',
            task: 'En løsning med 10% NaCl har tetthet 1,07 g/mL. Hva er molariteten? M(NaCl) = 58,5 g/mol',
            solution: '10% betyr 10 g NaCl per 100 g løsning. Volum = 100/1,07 = 93,5 mL. n = 10/58,5 = 0,171 mol. c = 0,171/0,0935 = **1,83 M**',
          },
        ],
        solution: 'a) 41,7 mL; b) 1,83 M',
        hints: ['Bruk fortynningsformelen og konverter mellom enheter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 5.3: Støkiometriske beregninger
// ============================================================================

const CHAPTER_KJEMI1_5_3: TextbookChapter = {
  id: 'kjemi1-5-3',
  courseId: 'kjemi1',
  chapterNumber: '5.3',
  title: 'Støkiometriske beregninger',
  description: 'Lær å bruke reaksjonslikninger til beregninger: molforhold, begrensende reaktant, teoretisk og praktisk utbytte.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke molforhold fra reaksjonslikninger',
    'identifisere begrensende reaktant',
    'beregne teoretisk utbytte',
    'beregne prosentutbytte',
  ],
  content: [
    // ========== MOLFORHOLD FRA REAKSJONSLIKNINGER ==========
    {
      id: 'kjemi1-5-3-intro',
      type: 'text',
      content: `## Støkiometri og molforhold

**Støkiometri** handler om kvantitative beregninger i kjemiske reaksjoner basert på molforhold.

### Molforhold fra reaksjonslikninger
En balansert reaksjonslikning viser **molforholdet** mellom reaktanter og produkter.

**Eksempel:**
$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

**Molforhold:**
- 2 mol H₂ reagerer med 1 mol O₂
- Dette gir 2 mol H₂O

**Tolkning:**
- 2 : 1 : 2 (H₂ : O₂ : H₂O)

### Fremgangsmåte for støkiometriske beregninger:
1. **Skriv balansert reaksjonslikning**
2. **Finn molforhold** fra koeffisientene
3. **Beregn stoffmengder** (n = m/M eller n = cV)
4. **Bruk molforhold** til å finne ukjent stoffmengde
5. **Konverter tilbake** til ønsket enhet (masse, volum, etc.)`,
    },

    {
      id: 'kjemi1-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Molforhold',
      problem: `I reaksjonen:
$$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$$

Hvor mye ammoniakk (NH₃) dannes hvis 3 mol nitrogen (N₂) reagerer fullstendig?`,
      solution: `**Løsning:**

**Molforhold fra reaksjonslikning:**
1 mol N₂ gir 2 mol NH₃

**Beregning:**
$$n(\\text{NH}_3) = n(\\text{N}_2) \\times \\frac{2}{1} = 3 \\times 2 = 6 \\text{ mol}$$

**Svar:** Det dannes 6 mol ammoniakk.`,
    },

    {
      id: 'kjemi1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-3-ex-1',
        number: '5-14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Molforhold fra reaksjonslikninger:',
        subTasks: [
          {
            label: 'a',
            task: 'I $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, hvor mye O₂ trengs for 4 mol H₂?',
            solution: 'Molforhold: 2 mol H₂ : 1 mol O₂. n(O₂) = 4 × (1/2) = **2 mol**',
          },
          {
            label: 'b',
            task: 'I $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$, hvor mye CO₂ dannes fra 5 mol C?',
            solution: 'Molforhold: 1 : 1. n(CO₂) = **5 mol**',
          },
          {
            label: 'c',
            task: 'I $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, hvor mye H₂ trengs for 10 mol NH₃?',
            solution: 'Molforhold: 3 mol H₂ : 2 mol NH₃. n(H₂) = 10 × (3/2) = **15 mol**',
          },
        ],
        solution: 'a) 2 mol O₂; b) 5 mol CO₂; c) 15 mol H₂',
        hints: ['Bruk koeffisientene i reaksjonslikningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MASSE-TIL-MASSE BEREGNINGER ==========
    {
      id: 'kjemi1-5-3-mass-to-mass',
      type: 'text',
      content: `## Masse-til-masse beregninger

For å beregne masse produkt fra masse reaktant:

### Fremgangsmåte:
1. **Skriv balansert reaksjonslikning**
2. **Konverter masse til mol:** n = m/M
3. **Bruk molforhold** fra reaksjonslikning
4. **Konverter tilbake til masse:** m = n × M

**Eksempel:**
$$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$$

Hvor mye MgO dannes fra 48 g Mg?

**Steg:**
- n(Mg) = 48/24 = 2 mol
- Molforhold: 2 mol Mg → 2 mol MgO
- n(MgO) = 2 mol
- m(MgO) = 2 × 40 = 80 g`,
    },

    {
      id: 'kjemi1-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Masse-til-masse',
      problem: `Hvor mye vann (H₂O) dannes ved forbrenning av 16 g metan (CH₄)?

$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$

M(CH₄) = 16 g/mol, M(H₂O) = 18 g/mol`,
      solution: `**Løsning:**

**Steg 1: Masse til mol**
$$n(\\text{CH}_4) = \\frac{16}{16} = 1 \\text{ mol}$$

**Steg 2: Molforhold**
1 mol CH₄ → 2 mol H₂O
$$n(\\text{H}_2\\text{O}) = 1 \\times 2 = 2 \\text{ mol}$$

**Steg 3: Mol til masse**
$$m(\\text{H}_2\\text{O}) = 2 \\times 18 = 36 \\text{ g}$$

**Svar:** Det dannes 36 g vann.`,
    },

    {
      id: 'kjemi1-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-3-ex-2',
        number: '5-15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Masse-til-masse beregninger (bruk M: C=12, H=1, O=16, N=14, S=32 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye CO₂ dannes fra 24 g C i $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$?',
            solution: 'n(C) = 24/12 = 2 mol. 1:1 → n(CO₂) = 2 mol. m(CO₂) = 2 × 44 = **88 g**',
          },
          {
            label: 'b',
            task: 'Hvor mye NH₃ dannes fra 28 g N₂ i $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$?',
            solution: 'n(N₂) = 28/28 = 1 mol. 1:2 → n(NH₃) = 2 mol. m(NH₃) = 2 × 17 = **34 g**',
          },
          {
            label: 'c',
            task: 'Hvor mye O₂ trengs for å forbrenne 32 g CH₄ i $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$?',
            solution: 'n(CH₄) = 32/16 = 2 mol. 1:2 → n(O₂) = 4 mol. m(O₂) = 4 × 32 = **128 g**',
          },
        ],
        solution: 'a) 88 g CO₂; b) 34 g NH₃; c) 128 g O₂',
        hints: ['Konverter masse → mol → bruk molforhold → mol → masse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BEGRENSENDE REAKTANT ==========
    {
      id: 'kjemi1-5-3-limiting',
      type: 'text',
      content: `## Begrensende reaktant

I mange reaksjoner er ikke reaktantene til stede i nøyaktig riktig molforhold. Da vil én reaktant **brukes opp først** og begrense reaksjonen.

### Definisjon:
**Begrensende reaktant** er den reaktanten som begrenser mengden produkt fordi den brukes opp først.

Den andre reaktanten er i **overskudd**.

### Fremgangsmåte:
1. **Beregn molforhold** for hver reaktant
2. **Sammenlign** med molforholdet i reaksjonslikningen
3. **Identifiser** hvilken reaktant som brukes opp først
4. **Bruk begrensende reaktant** til å beregne produktmengde

**Eksempel:**
$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

Hvis vi har 3 mol H₂ og 2 mol O₂:
- Teoretisk trenger vi: 3 mol H₂ → 1,5 mol O₂
- Vi har 2 mol O₂ (mer enn nok)
- **H₂ er begrensende** (O₂ er i overskudd)`,
    },

    {
      id: 'kjemi1-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Begrensende reaktant',
      problem: `Vi har 10 mol N₂ og 20 mol H₂. Hvilken er begrensende reaktant?

$$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$$

Hvor mye NH₃ dannes?`,
      solution: `**Løsning:**

**Molforhold fra likning:** 1 mol N₂ : 3 mol H₂

**Test hver reaktant:**
- Hvis N₂ begrenser: 10 mol N₂ trenger 10 × 3 = 30 mol H₂
- Vi har bare 20 mol H₂ → **Ikke nok H₂!**

- Hvis H₂ begrenser: 20 mol H₂ trenger 20/3 = 6,67 mol N₂
- Vi har 10 mol N₂ → Nok N₂

**Konklusjon:** H₂ er begrensende reaktant (N₂ i overskudd)

**Beregn produkt:**
$$n(\\text{NH}_3) = n(\\text{H}_2) \\times \\frac{2}{3} = 20 \\times \\frac{2}{3} = 13{,}33 \\text{ mol}$$

**Svar:**
- H₂ er begrensende
- Det dannes 13,33 mol NH₃`,
    },

    {
      id: 'kjemi1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-3-ex-3',
        number: '5-16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Begrensende reaktant:',
        subTasks: [
          {
            label: 'a',
            task: 'I $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, er 4 mol H₂ og 1 mol O₂ begrensende?',
            solution: '4 mol H₂ trenger 2 mol O₂. Vi har bare 1 mol O₂ → **O₂ er begrensende**',
          },
          {
            label: 'b',
            task: 'I $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, hvor mye NH₃ fra 5 mol N₂ og 10 mol H₂?',
            solution: '10 mol H₂ trenger 10/3 ≈ 3,33 mol N₂. H₂ begrenser. n(NH₃) = 10 × (2/3) = **6,67 mol**',
          },
        ],
        solution: 'a) O₂ er begrensende; b) 6,67 mol NH₃',
        hints: ['Beregn hvor mye av den andre reaktanten som trengs'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEORETISK OG PRAKTISK UTBYTTE ==========
    {
      id: 'kjemi1-5-3-yield',
      type: 'text',
      content: `## Teoretisk og praktisk utbytte

### Teoretisk utbytte
**Teoretisk utbytte** er den maksimale mengden produkt som kan dannes hvis reaksjonen går fullstendig (100% virkningsgrad).

Beregnes fra støkiometri basert på begrensende reaktant.

### Praktisk utbytte
**Praktisk utbytte** er den faktiske mengden produkt som faktisk dannes i laboratoriet.

Praktisk utbytte er **alltid mindre** enn teoretisk utbytte pga:
- Ufullstendig reaksjon
- Tap ved opparbeiding
- Sidereaksjoner

### Prosentutbytte
$$\\text{Prosentutbytte} = \\frac{\\text{praktisk utbytte}}{\\text{teoretisk utbytte}} \\times 100\\%$$

**Typiske verdier:**
- God syntese: 80–95%
- Akseptabel syntese: 60–80%
- Dårlig syntese: < 60%`,
    },

    {
      id: 'kjemi1-5-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Prosentutbytte',
      problem: `I syntesen av ammoniakk fra 28 g N₂ og mye H₂, er teoretisk utbytte 34 g NH₃.
I praksis fikk vi 27,2 g NH₃.

Hva er prosentutt bytte?`,
      solution: `**Løsning:**

**Prosentutbytte:**
$$\\% = \\frac{\\text{praktisk}}{\\text{teoretisk}} \\times 100\\%$$

$$\\% = \\frac{27{,}2}{34} \\times 100\\% = 80\\%$$

**Svar:** Prosentutt bytte er 80%.`,
    },

    {
      id: 'kjemi1-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-3-ex-4',
        number: '5-17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Teoretisk og praktisk utbytte:',
        subTasks: [
          {
            label: 'a',
            task: 'Teoretisk utbytte er 50 g, praktisk er 40 g. Hva er prosentutt bytte?',
            solution: '% = (40/50) × 100 = **80%**',
          },
          {
            label: 'b',
            task: 'Ved 75% utbytte, hvor mye produkt får du hvis teoretisk utbytte er 120 g?',
            solution: 'Praktisk = 0,75 × 120 = **90 g**',
          },
          {
            label: 'c',
            task: 'Du får 18 g produkt (85% utbytte). Hva var teoretisk utbytte?',
            solution: 'Teoretisk = 18 / 0,85 = **21,2 g**',
          },
        ],
        solution: 'a) 80%; b) 90 g; c) 21,2 g',
        hints: ['% = (praktisk/teoretisk) × 100'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-3-ex-5',
        number: '5-18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte støkiometriske beregninger (M: C=12, H=1, O=16, Fe=56 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'I $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$, hvor mye Fe fra 320 g Fe₂O₃ (M=160)?',
            solution: 'n(Fe₂O₃) = 320/160 = 2 mol. 1:2 → n(Fe) = 4 mol. m(Fe) = 4 × 56 = **224 g**',
          },
          {
            label: 'b',
            task: 'Ved 70% utbytte i reaksjonen over, hvor mye Fe får du faktisk?',
            solution: 'Praktisk = 0,70 × 224 = **156,8 g**',
          },
          {
            label: 'c',
            task: 'Du har 160 g Fe₂O₃ og 60 g CO. Hvilken er begrensende? (M(CO)=28)',
            solution: 'n(Fe₂O₃)=1, n(CO)=60/28=2,14. Trenger 1×3=3 mol CO, har bare 2,14 → **CO er begrensende**',
          },
        ],
        solution: 'a) 224 g Fe; b) 156,8 g; c) CO er begrensende',
        hints: ['Bruk molforhold og beregn hva som trengs'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-3-ex-6',
        number: '5-19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Komplekse støkiometri-oppgaver:',
        subTasks: [
          {
            label: 'a',
            task: 'I $2\\text{C}_2\\text{H}_6 + 7\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 6\\text{H}_2\\text{O}$, hvor mye CO₂ fra 60 g C₂H₆? M(C₂H₆)=30',
            solution: 'n(C₂H₆) = 60/30 = 2 mol. 2:4 → n(CO₂) = 4 mol. m(CO₂) = 4 × 44 = **176 g**',
          },
          {
            label: 'b',
            task: 'Du har 30 g C₂H₆ og 160 g O₂. Hva er begrensende?',
            solution: 'n(C₂H₆)=1, n(O₂)=160/32=5. Trenger 1×(7/2)=3,5 mol O₂ → **C₂H₆ begrenser** (O₂ overskudd)',
          },
        ],
        solution: 'a) 176 g CO₂; b) C₂H₆ er begrensende',
        hints: ['Tegn opp reaksjonen og bruk molforhold'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 5.4: Gassberegninger
// ============================================================================

const CHAPTER_KJEMI1_5_4: TextbookChapter = {
  id: 'kjemi1-5-4',
  courseId: 'kjemi1',
  chapterNumber: '5.4',
  title: 'Gassberegninger',
  description: 'Lær om ideell gasslov, molart volum, gassberegninger ved standardforhold og Avogadros lov.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ideell gasslov (PV = nRT)',
    'beregne molart volum ved standardforhold',
    'utføre gassberegninger i støkiometri',
    'forklare Avogadros lov',
  ],
  content: [
    // ========== IDEELL GASSLOV ==========
    {
      id: 'kjemi1-5-4-intro',
      type: 'text',
      content: `## Ideell gasslov

**Ideell gasslov** beskriver sammenhengen mellom trykk, volum, temperatur og stoffmengde for en ideell gass.

### Formelen:
$$PV = nRT$$

Hvor:
- **P** = trykk (Pa eller atm)
- **V** = volum (m³ eller L)
- **n** = stoffmengde (mol)
- **R** = gasskonstanten = **8,314 J/(mol·K)**
- **T** = temperatur (K)

### Viktige enheter:
**Trykk:**
- 1 atm = 101 325 Pa
- 1 bar = 100 000 Pa

**Temperatur:**
$$T(\\text{K}) = T(°\\text{C}) + 273{,}15$$

**Volum:**
- 1 m³ = 1000 L

### Omskrivninger:
$$n = \\frac{PV}{RT}, \\quad V = \\frac{nRT}{P}, \\quad P = \\frac{nRT}{V}, \\quad T = \\frac{PV}{nR}$$`,
    },

    {
      id: 'kjemi1-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Ideell gasslov',
      problem: `Beregn volumet til 2 mol nitrogen (N₂) ved 25°C og 1 atm.
R = 8,314 J/(mol·K), 1 atm = 101 325 Pa`,
      solution: `**Løsning:**

**Gitt:**
- n = 2 mol
- T = 25°C = 25 + 273 = 298 K
- P = 1 atm = 101 325 Pa
- R = 8,314 J/(mol·K)

**Beregn volum:**
$$V = \\frac{nRT}{P} = \\frac{2 \\times 8{,}314 \\times 298}{101\\,325}$$

$$V = \\frac{4955{,}144}{101\\,325} = 0{,}0489 \\text{ m}^3 = 48{,}9 \\text{ L}$$

**Svar:** Volumet er 48,9 L.`,
    },

    {
      id: 'kjemi1-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-4-ex-1',
        number: '5-20',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ideell gasslov (R = 8,314 J/(mol·K), 1 atm = 101 325 Pa):',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn volumet til 1 mol gass ved 0°C og 1 atm',
            solution: 'T = 273 K. V = nRT/P = (1 × 8,314 × 273)/101325 = **22,4 L**',
          },
          {
            label: 'b',
            task: 'Hvor mange mol CO₂ er det i 11,2 L ved 0°C og 1 atm?',
            solution: 'n = PV/RT = (101325 × 0,0112)/(8,314 × 273) = **0,5 mol**',
          },
          {
            label: 'c',
            task: 'Hva er trykket til 3 mol gass i 60 L ved 27°C?',
            solution: 'T = 300 K. P = nRT/V = (3 × 8,314 × 300)/0,06 = **124 650 Pa** ≈ 1,23 atm',
          },
        ],
        solution: 'a) 22,4 L; b) 0,5 mol; c) 124 650 Pa',
        hints: ['Husk å konvertere til SI-enheter (K, m³, Pa)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MOLART VOLUM VED STP ==========
    {
      id: 'kjemi1-5-4-stp',
      type: 'text',
      content: `## Molart volum ved standardforhold (STP)

**Standardforhold (STP)** er definert som:
- Temperatur: **0°C = 273 K**
- Trykk: **1 atm = 101 325 Pa**

### Molart volum:
Ved STP har **1 mol av en ideell gass** alltid volumet:

$$V_\\text{m} = 22{,}4 \\text{ L/mol}$$

Dette kalles **molart volum** (Vₘ).

### Formel ved STP:
$$V = n \\times V_\\text{m} = n \\times 22{,}4 \\text{ L}$$

**Eksempel:**
- 2 mol CO₂ ved STP: V = 2 × 22,4 = 44,8 L
- 0,5 mol N₂ ved STP: V = 0,5 × 22,4 = 11,2 L

**Viktig:** Molart volum gjelder **kun ved STP** (0°C, 1 atm)!`,
    },

    {
      id: 'kjemi1-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Molart volum ved STP',
      problem: `Hvor stort volum har 88 g CO₂ ved STP?
M(CO₂) = 44 g/mol`,
      solution: `**Løsning:**

**Steg 1: Masse til mol**
$$n = \\frac{m}{M} = \\frac{88}{44} = 2 \\text{ mol}$$

**Steg 2: Mol til volum ved STP**
$$V = n \\times V_\\text{m} = 2 \\times 22{,}4 = 44{,}8 \\text{ L}$$

**Svar:** Volumet er 44,8 L ved STP.`,
    },

    {
      id: 'kjemi1-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-4-ex-2',
        number: '5-21',
        type: 'classic',
        difficulty: 'lett',
        task: 'Molart volum ved STP (Vₘ = 22,4 L/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor stort volum har 3 mol N₂ ved STP?',
            solution: 'V = n × 22,4 = 3 × 22,4 = **67,2 L**',
          },
          {
            label: 'b',
            task: 'Hvor mange mol gass er det i 112 L ved STP?',
            solution: 'n = V / 22,4 = 112 / 22,4 = **5 mol**',
          },
          {
            label: 'c',
            task: 'Hva er volumet til 16 g O₂ ved STP? M(O₂) = 32 g/mol',
            solution: 'n = 16/32 = 0,5 mol. V = 0,5 × 22,4 = **11,2 L**',
          },
        ],
        solution: 'a) 67,2 L; b) 5 mol; c) 11,2 L',
        hints: ['Bruk V = n × 22,4 L ved STP'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== AVOGADROS LOV ==========
    {
      id: 'kjemi1-5-4-avogadro',
      type: 'text',
      content: `## Avogadros lov

**Avogadros lov** sier at **like volumer av alle gasser inneholder samme antall molekyler** ved samme temperatur og trykk.

### Konsekvens:
Volumforholdet i gassreaksjoner er **lik molforholdet**.

**Eksempel:**
$$2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$$

**Molforhold:** 2 : 1 : 2

**Volumforhold ved samme T og P:**
- 2 L H₂ + 1 L O₂ → 2 L H₂O(g)
- 10 L H₂ + 5 L O₂ → 10 L H₂O(g)

### Viktig:
- Volumforhold = molforhold **bare for gasser**
- Gjelder ved **samme temperatur og trykk**
- H₂O(g) betyr vanndamp (gass), ikke flytende vann!`,
    },

    {
      id: 'kjemi1-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Avogadros lov',
      problem: `I reaksjonen:
$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$$

Hvor stort volum ammoniakk dannes fra 30 L nitrogen ved samme T og P?`,
      solution: `**Løsning:**

**Volumforhold = molforhold:**
1 L N₂ → 2 L NH₃

**Beregning:**
$$V(\\text{NH}_3) = 30 \\text{ L} \\times \\frac{2}{1} = 60 \\text{ L}$$

**Svar:** Det dannes 60 L ammoniakk.`,
    },

    {
      id: 'kjemi1-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-4-ex-3',
        number: '5-22',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avogadros lov (volumforhold = molforhold):',
        subTasks: [
          {
            label: 'a',
            task: 'I $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}(g)$, hvor mye O₂ trengs for 20 L H₂?',
            solution: 'Volumforhold: 2:1. V(O₂) = 20 × (1/2) = **10 L**',
          },
          {
            label: 'b',
            task: 'I $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$, hvor mye CO₂ fra 15 L O₂?',
            solution: 'Volumforhold: 1:1. V(CO₂) = **15 L**',
          },
          {
            label: 'c',
            task: 'I $2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2$, hvor mye CO₂ fra 40 L CO?',
            solution: 'Volumforhold: 2:2 = 1:1. V(CO₂) = **40 L**',
          },
        ],
        solution: 'a) 10 L O₂; b) 15 L CO₂; c) 40 L CO₂',
        hints: ['Bruk koeffisientene som volumforhold'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GASSBEREGNINGER I STØKIOMETRI ==========
    {
      id: 'kjemi1-5-4-stoich',
      type: 'text',
      content: `## Gassberegninger i støkiometri

Når vi kombinerer støkiometri med gassberegninger:

### Fremgangsmåte:
1. **Hvis ved STP:** Bruk Vₘ = 22,4 L/mol
   - V = n × 22,4 (volum fra mol)
   - n = V / 22,4 (mol fra volum)

2. **Hvis ikke ved STP:** Bruk ideell gasslov PV = nRT

3. **Kombiner med støkiometri:**
   - Masse → mol → volum (for produkt-gass)
   - Volum → mol → masse (for fast/flytende produkt)

**Eksempel:**
Hvor mye CO₂(g) dannes fra 24 g C ved STP?
$$\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$$

- n(C) = 24/12 = 2 mol
- Molforhold 1:1 → n(CO₂) = 2 mol
- V(CO₂) = 2 × 22,4 = 44,8 L`,
    },

    {
      id: 'kjemi1-5-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Gass i støkiometri',
      problem: `Hvor stort volum O₂(g) trengs ved STP for å forbrenne 32 g metan (CH₄)?

$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$

M(CH₄) = 16 g/mol`,
      solution: `**Løsning:**

**Steg 1: Masse til mol**
$$n(\\text{CH}_4) = \\frac{32}{16} = 2 \\text{ mol}$$

**Steg 2: Molforhold**
1 mol CH₄ → 2 mol O₂
$$n(\\text{O}_2) = 2 \\times 2 = 4 \\text{ mol}$$

**Steg 3: Mol til volum ved STP**
$$V(\\text{O}_2) = 4 \\times 22{,}4 = 89{,}6 \\text{ L}$$

**Svar:** Det trengs 89,6 L oksygen ved STP.`,
    },

    {
      id: 'kjemi1-5-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-4-ex-4',
        number: '5-23',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gassberegninger i støkiometri ved STP (M: C=12, H=1, N=14, O=16 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye CO₂(g) dannes fra 36 g C i $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$ ved STP?',
            solution: 'n(C) = 36/12 = 3 mol. 1:1 → n(CO₂) = 3 mol. V = 3 × 22,4 = **67,2 L**',
          },
          {
            label: 'b',
            task: 'Hvor mye NH₃(g) dannes fra 28 g N₂ i $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$ ved STP?',
            solution: 'n(N₂) = 28/28 = 1 mol. 1:2 → n(NH₃) = 2 mol. V = 2 × 22,4 = **44,8 L**',
          },
        ],
        solution: 'a) 67,2 L CO₂; b) 44,8 L NH₃',
        hints: ['Masse → mol → bruk molforhold → volum'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-5-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-5-4-ex-5',
        number: '5-24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte gassberegninger (R = 8,314 J/(mol·K), M: C=12, H=1, O=16 g/mol):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye CO₂ dannes fra 12 g C ved 25°C og 1 atm i $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$?',
            solution: 'n(C)=1 mol → n(CO₂)=1 mol. T=298K. V = nRT/P = (1×8,314×298)/101325 = **24,5 L**',
          },
          {
            label: 'b',
            task: 'Hva er massen til 22,4 L NH₃ ved STP? M(NH₃) = 17 g/mol',
            solution: 'Ved STP: n = V/22,4 = 22,4/22,4 = 1 mol. m = 1 × 17 = **17 g**',
          },
        ],
        solution: 'a) 24,5 L; b) 17 g',
        hints: ['Bruk ideell gasslov hvis ikke STP'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// DEL 6: TERMOKJEMI
// ============================================================================

// ────────────────────────────────────────────────────────────────────────────
// Kapittel 6.1: Energi og entalpi
// ────────────────────────────────────────────────────────────────────────────

const CHAPTER_KJEMI1_6_1: TextbookChapter = {
  id: 'kjemi1-6-1',
  courseId: 'kjemi1',
  chapterNumber: '6.1',
  title: 'Energi og entalpi',
  description: 'Lær om varme, arbeid, termodynamikkens første lov, entalpi og energidiagrammer for kjemiske reaksjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare begrepene varme (q) og arbeid (w)',
    'bruke termodynamikkens første lov (ΔU = q + w)',
    'forklare hva entalpi (H) er',
    'skille mellom eksoterme og endoterme reaksjoner',
    'tegne og tolke energidiagrammer',
  ],
  content: [
    // ========== VARME OG ARBEID ==========
    {
      id: 'kjemi1-6-1-intro',
      type: 'text',
      content: `## Energi i kjemiske reaksjoner

**Termokjemi** er studiet av energiomsetning i kjemiske reaksjoner. Alle kjemiske reaksjoner innebærer energiendringer.

### Varme (q) og arbeid (w)

**Varme** (q) er energi som overføres på grunn av temperaturforskjeller.
- Når et system mottar varme: q > 0 (positivt)
- Når et system avgir varme: q < 0 (negativt)

**Arbeid** (w) er energi som overføres ved å påføre en kraft over en avstand.
- Når det gjøres arbeid på systemet: w > 0
- Når systemet gjør arbeid: w < 0

### Termodynamikkens første lov

Energi kan ikke skapes eller ødelegges, bare omformes:

$$\\Delta U = q + w$$

der:
- ΔU = endring i indre energi
- q = varme tilført systemet
- w = arbeid gjort på systemet`,
    },

    {
      id: 'kjemi1-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Termodynamikkens første lov',
      problem: `Et system mottar 150 J varme og gjør 80 J arbeid på omgivelsene. Hva er endringen i indre energi?`,
      solution: `**Løsning:**

**Gitt:**
- q = +150 J (systemet mottar varme)
- w = -80 J (systemet gjør arbeid på omgivelsene)

**Termodynamikkens første lov:**
$$\\Delta U = q + w = 150 + (-80) = 70 \\text{ J}$$

**Svar:** Den indre energien øker med 70 J.`,
    },

    {
      id: 'kjemi1-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-1-ex-1',
        number: '6-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Termodynamikkens første lov:',
        subTasks: [
          {
            label: 'a',
            task: 'Et system mottar 200 J varme og 50 J arbeid. Hva er ΔU?',
            solution: 'ΔU = q + w = 200 + 50 = **250 J**',
          },
          {
            label: 'b',
            task: 'Et system avgir 100 J varme og gjør 60 J arbeid. Hva er ΔU?',
            solution: 'ΔU = q + w = (-100) + (-60) = **-160 J**',
          },
          {
            label: 'c',
            task: 'Hva er q hvis ΔU = 120 J og w = 30 J?',
            solution: '120 = q + 30 → q = **90 J**',
          },
        ],
        solution: 'a) 250 J; b) -160 J; c) 90 J',
        hints: ['Bruk ΔU = q + w, husk fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENTALPI ==========
    {
      id: 'kjemi1-6-1-entalpi',
      type: 'text',
      content: `## Entalpi (H)

**Entalpi** (H) er en tilstandsfunksjon som beskriver energiinnholdet i et system ved konstant trykk.

### Entalpiendr ing (ΔH)

For kjemiske reaksjoner ved konstant trykk gjelder:

$$\\Delta H = H_\\text{produkter} - H_\\text{reaktanter}$$

**Entalpiendring viser:**
- Hvor mye energi som avgis eller tas opp
- Ved konstant trykk: ΔH ≈ q (varme)

### Eksoterme og endoterme reaksjoner

**Eksoterm reaksjon** (avgir varme):
- ΔH < 0 (negativ)
- Produktene har lavere energi enn reaktantene
- Eksempel: Forbrenning av bensin

**Endoterm reaksjon** (tar opp varme):
- ΔH > 0 (positiv)
- Produktene har høyere energi enn reaktantene
- Eksempel: Fotosyntese`,
    },

    {
      id: 'kjemi1-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Eksoterm reaksjon',
      problem: `Forbrenning av metan: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH = -890 kJ/mol

Hva betyr ΔH = -890 kJ/mol?`,
      solution: `**Løsning:**

ΔH = -890 kJ/mol betyr:
1. **Eksoterm reaksjon** (ΔH < 0)
2. Når 1 mol CH₄ forbrenner, frigjøres **890 kJ energi**
3. Produktene har **890 kJ lavere energi** enn reaktantene
4. Omgivelsene blir **varmere** (energi avgis som varme)

**Svar:** 890 kJ energi frigjøres per mol CH₄ som forbrenner.`,
    },

    {
      id: 'kjemi1-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-1-ex-2',
        number: '6-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Eksoterme og endoterme reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'Er en reaksjon med ΔH = -125 kJ/mol eksoterm eller endoterm?',
            solution: 'ΔH < 0 → **Eksoterm** (avgir energi)',
          },
          {
            label: 'b',
            task: 'Er en reaksjon med ΔH = +85 kJ/mol eksoterm eller endoterm?',
            solution: 'ΔH > 0 → **Endoterm** (tar opp energi)',
          },
          {
            label: 'c',
            task: 'Hvor mye energi frigjøres når 2 mol mettet reagerer hvis ΔH = -890 kJ/mol?',
            solution: 'Energi = 2 × 890 = **1780 kJ**',
          },
        ],
        solution: 'a) Eksoterm; b) Endoterm; c) 1780 kJ',
        hints: ['ΔH < 0: eksoterm, ΔH > 0: endoterm'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENERGIDIAGRAMMER ==========
    {
      id: 'kjemi1-6-1-energidiagram',
      type: 'text',
      content: `## Energidiagrammer

Energidiagrammer viser energiendringer under en reaksjon.

### Eksoterm reaksjon
\`\`\`
Energi
  ↑
  │  Reaktanter
  │  ─────────
  │         ╲
  │          ╲  ΔH < 0
  │           ╲
  │            ─────────
  │               Produkter
  │
  └──────────────────────→ Reaksjonsforløp
\`\`\`

### Endoterm reaksjon
\`\`\`
Energi
  ↑
  │               Produkter
  │            ─────────
  │           ╱
  │          ╱  ΔH > 0
  │         ╱
  │  ─────────
  │  Reaktanter
  │
  └──────────────────────→ Reaksjonsforløp
\`\`\`

**Viktige punkter:**
- Høyden på pilen = |ΔH|
- Eksoterm: Produkter lavere enn reaktanter
- Endoterm: Produkter høyere enn reaktanter`,
    },

    {
      id: 'kjemi1-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Tolke energidiagram',
      problem: `Et energidiagram viser at reaktantene har energi 100 kJ og produktene har energi 60 kJ. Bestem ΔH og reaksjonstype.`,
      solution: `**Løsning:**

**Entalpiendr ing:**
$$\\Delta H = H_\\text{produkter} - H_\\text{reaktanter}$$
$$\\Delta H = 60 - 100 = -40 \\text{ kJ/mol}$$

**Reaksjonstype:**
- ΔH < 0 → **Eksoterm reaksjon**
- Produktene har lavere energi
- 40 kJ energi frigjøres

**Svar:** ΔH = -40 kJ/mol, eksoterm reaksjon.`,
    },

    {
      id: 'kjemi1-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-1-ex-3',
        number: '6-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Energidiagrammer:',
        subTasks: [
          {
            label: 'a',
            task: 'Reaktanter: 150 kJ, Produkter: 100 kJ. Bestem ΔH.',
            solution: 'ΔH = 100 - 150 = **-50 kJ/mol** (eksoterm)',
          },
          {
            label: 'b',
            task: 'Reaktanter: 80 kJ, Produkter: 120 kJ. Bestem ΔH.',
            solution: 'ΔH = 120 - 80 = **+40 kJ/mol** (endoterm)',
          },
          {
            label: 'c',
            task: 'ΔH = -65 kJ/mol, Reaktanter: 200 kJ. Hva er energien til produktene?',
            solution: '-65 = H_prod - 200 → H_prod = **135 kJ**',
          },
        ],
        solution: 'a) -50 kJ/mol; b) +40 kJ/mol; c) 135 kJ',
        hints: ['Bruk ΔH = H_produkter - H_reaktanter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-1-ex-4',
        number: '6-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Energiomsetning i reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye energi frigjøres når 0,5 mol reagerer med ΔH = -180 kJ/mol?',
            solution: 'Energi = 0,5 × 180 = **90 kJ**',
          },
          {
            label: 'b',
            task: 'Hvor mye energi må tilføres for 3 mol med ΔH = +45 kJ/mol?',
            solution: 'Energi = 3 × 45 = **135 kJ**',
          },
          {
            label: 'c',
            task: 'Hvor mange mol reagerer hvis 450 kJ frigjøres og ΔH = -150 kJ/mol?',
            solution: 'n = 450/150 = **3 mol**',
          },
        ],
        solution: 'a) 90 kJ; b) 135 kJ; c) 3 mol',
        hints: ['Energi = n × |ΔH|'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-6-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-1-ex-5',
        number: '6-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte entalpiberegninger:',
        subTasks: [
          {
            label: 'a',
            task: 'En reaksjon avgir 540 kJ når 1,5 mol reagerer. Hva er ΔH?',
            solution: 'ΔH = -540/1,5 = **-360 kJ/mol**',
          },
          {
            label: 'b',
            task: 'Det må tilføres 270 kJ for å omdanne 0,6 mol. Hva er ΔH?',
            solution: 'ΔH = +270/0,6 = **+450 kJ/mol**',
          },
          {
            label: 'c',
            task: 'Hvis ΔH = -220 kJ/mol, hvor mange mol må reagere for å frigjøre 1100 kJ?',
            solution: 'n = 1100/220 = **5 mol**',
          },
        ],
        solution: 'a) -360 kJ/mol; b) +450 kJ/mol; c) 5 mol',
        hints: ['ΔH = ±Energi/n'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ────────────────────────────────────────────────────────────────────────────
// Kapittel 6.2: Reaksjonsentalpi
// ────────────────────────────────────────────────────────────────────────────

const CHAPTER_KJEMI1_6_2: TextbookChapter = {
  id: 'kjemi1-6-2',
  courseId: 'kjemi1',
  chapterNumber: '6.2',
  title: 'Reaksjonsentalpi',
  description: 'Lær om standard reaksjonsentalpi, dannelsesentalpi, forbrenningsentalpi, Hess\' lov og bindingsentalpi.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare hva standard reaksjonsentalpi er',
    'bruke dannelsesentalpi til å beregne reaksjonsentalpi',
    'bruke forbrenningsentalpi i beregninger',
    'anvende Hess\' lov',
    'beregne reaksjonsentalpi fra bindingsentalpier',
  ],
  content: [
    // ========== STANDARD REAKSJONSENTALPI ==========
    {
      id: 'kjemi1-6-2-intro',
      type: 'text',
      content: `## Standard reaksjonsentalpi

**Standard reaksjonsentalpi** (ΔᵣH°) er entalpiendringen for en reaksjon under standardbetingelser:
- Temperatur: 25°C (298 K)
- Trykk: 1 bar (≈ 1 atm)
- Konsentrasjon: 1 M for løsninger

**Notasjon:**
- ΔᵣH° = standard **reaksjons**entalpi
- ΔfH° = standard **dannelses**entalpi
- ΔcH° = standard **forbrenn ings**entalpi

**Viktig konvensjon:**
Standard dannelsesentalpi for grunnstoff i stabil form = 0 kJ/mol

Eksempler på stabil form:
- O₂(g): ΔfH° = 0
- N₂(g): ΔfH° = 0
- C(s, grafit t): ΔfH° = 0
- H₂(g): ΔfH° = 0`,
    },

    // ========== DANNELSESENTALPI ==========
    {
      id: 'kjemi1-6-2-dannelse',
      type: 'text',
      content: `## Dannelsesentalpi (ΔfH°)

**Dannelsesentalpi** er entalpiendringen når **1 mol** av en forbindelse dannes fra grunnstoffene i stabil form.

### Eksempler på dannelsesreaksjoner

**Vann:**
$$\\text{H}_2(\\text{g}) + \\frac{1}{2}\\text{O}_2(\\text{g}) \\rightarrow \\text{H}_2\\text{O}(\\text{l})$$
$$\\Delta_\\text{f}H° = -286 \\text{ kJ/mol}$$

**Karbondioksid:**
$$\\text{C}(\\text{s}) + \\text{O}_2(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g})$$
$$\\Delta_\\text{f}H° = -394 \\text{ kJ/mol}$$

**Ammoniakk:**
$$\\frac{1}{2}\\text{N}_2(\\text{g}) + \\frac{3}{2}\\text{H}_2(\\text{g}) \\rightarrow \\text{NH}_3(\\text{g})$$
$$\\Delta_\\text{f}H° = -46 \\text{ kJ/mol}$$`,
    },

    {
      id: 'kjemi1-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne ΔᵣH° fra ΔfH°',
      problem: `Beregn ΔᵣH° for forbrenning av metan:
CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)

Gitt:
- ΔfH°(CH₄) = -75 kJ/mol
- ΔfH°(CO₂) = -394 kJ/mol
- ΔfH°(H₂O) = -286 kJ/mol`,
      solution: `**Løsning:**

**Formel:**
$$\\Delta_\\text{r}H° = \\sum \\Delta_\\text{f}H°(\\text{produkter}) - \\sum \\Delta_\\text{f}H°(\\text{reaktanter})$$

**Produkter:**
- 1 mol CO₂: 1 × (-394) = -394 kJ
- 2 mol H₂O: 2 × (-286) = -572 kJ
- Sum: -966 kJ

**Reaktanter:**
- 1 mol CH₄: 1 × (-75) = -75 kJ
- 2 mol O₂: 2 × 0 = 0 kJ (grunnstoff)
- Sum: -75 kJ

**Reaksjonsentalpi:**
$$\\Delta_\\text{r}H° = -966 - (-75) = -891 \\text{ kJ/mol}$$

**Svar:** ΔᵣH° = -891 kJ/mol (eksoterm forbrenning).`,
    },

    {
      id: 'kjemi1-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-2-ex-1',
        number: '6-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn ΔᵣH° fra dannelsesentalpier. C(s) + O₂(g) → CO₂(g):',
        subTasks: [
          {
            label: 'a',
            task: 'ΔfH°(CO₂) = -394 kJ/mol. Hva er ΔᵣH° for reaksjonen?',
            solution: 'Produkter: -394, Reaktanter: 0 (C og O₂). ΔᵣH° = -394 - 0 = **-394 kJ/mol**',
          },
          {
            label: 'b',
            task: 'Er reaksjonen eksoterm eller endoterm?',
            solution: 'ΔᵣH° < 0 → **Eksoterm**',
          },
        ],
        solution: 'a) -394 kJ/mol; b) Eksoterm',
        hints: ['ΔfH° for grunnstoff = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-2-ex-2',
        number: '6-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn ΔᵣH° for: 2H₂(g) + O₂(g) → 2H₂O(l). ΔfH°(H₂O) = -286 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er summen av ΔfH° for produktene?',
            solution: '2 × (-286) = **-572 kJ**',
          },
          {
            label: 'b',
            task: 'Hva er summen av ΔfH° for reaktantene?',
            solution: 'H₂ og O₂ er grunnstoff: **0 kJ**',
          },
          {
            label: 'c',
            task: 'Hva er ΔᵣH° for reaksjonen?',
            solution: 'ΔᵣH° = -572 - 0 = **-572 kJ/mol**',
          },
        ],
        solution: 'a) -572 kJ; b) 0 kJ; c) -572 kJ/mol',
        hints: ['Grunnstoff i stabil form har ΔfH° = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== HESS' LOV ==========
    {
      id: 'kjemi1-6-2-hess',
      type: 'text',
      content: `## Hess' lov

**Hess' lov:** Entalpiendringen for en reaksjon er uavhengig av reaksjonsveien.

Dette betyr:
- Vi kan beregne ΔH for en reaksjon ved å kombinere andre reaksjoner
- Total ΔH = summen av ΔH for delreaksjonene

### Fremgangsmåte

1. **Finn delreaksjoner** som til sammen gir ønsket reaksjon
2. **Vend reaksjoner** hvis nødvendig (endre fortegn på ΔH)
3. **Multipliser reaksjoner** hvis nødvendig (multipliser ΔH også)
4. **Legg sammen** reaksjonene og ΔH-verdiene

**Regler:**
- Hvis reaksjonen vendes: ΔH skifter fortegn
- Hvis reaksjonen multipliseres med n: ΔH multipliseres med n`,
    },

    {
      id: 'kjemi1-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke Hess\' lov',
      problem: `Beregn ΔᵣH° for: C(s) + ½O₂(g) → CO(g)

Gitt:
(1) C(s) + O₂(g) → CO₂(g), ΔH₁ = -394 kJ/mol
(2) CO(g) + ½O₂(g) → CO₂(g), ΔH₂ = -283 kJ/mol`,
      solution: `**Løsning:**

**Mål:** C + ½O₂ → CO

**Strategi:**
- Bruk reaksjon (1) som den er
- Vend reaksjon (2) for å få CO på produktsiden

**Reaksjon (1):**
$$\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2, \\quad \\Delta H_1 = -394 \\text{ kJ/mol}$$

**Reaksjon (2) vendt:**
$$\\text{CO}_2 \\rightarrow \\text{CO} + \\frac{1}{2}\\text{O}_2, \\quad \\Delta H = -(-283) = +283 \\text{ kJ/mol}$$

**Legg sammen:**
$$\\text{C} + \\cancel{\\text{O}_2} \\rightarrow \\cancel{\\text{CO}_2}$$
$$\\cancel{\\text{CO}_2} \\rightarrow \\text{CO} + \\frac{1}{2}\\text{O}_2$$
$$\\overline{\\text{C} + \\frac{1}{2}\\text{O}_2 \\rightarrow \\text{CO}}$$

**Total ΔH:**
$$\\Delta_\\text{r}H° = -394 + 283 = -111 \\text{ kJ/mol}$$

**Svar:** ΔᵣH° = -111 kJ/mol.`,
    },

    {
      id: 'kjemi1-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-2-ex-3',
        number: '6-8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk Hess\' lov. Finn ΔᵣH° for: 2C(s) + O₂(g) → 2CO(g). Gitt: (1) C + O₂ → CO₂, ΔH₁ = -394 kJ; (2) CO + ½O₂ → CO₂, ΔH₂ = -283 kJ:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva blir ΔH for reaksjon (1) multiplisert med 2?',
            solution: '2 × (-394) = **-788 kJ**',
          },
          {
            label: 'b',
            task: 'Hva blir ΔH for reaksjon (2) vendt og multiplisert med 2?',
            solution: '2 × (+283) = **+566 kJ**',
          },
          {
            label: 'c',
            task: 'Hva er total ΔᵣH°?',
            solution: '-788 + 566 = **-222 kJ/mol**',
          },
        ],
        solution: 'a) -788 kJ; b) +566 kJ; c) -222 kJ/mol',
        hints: ['Multipliser reaksjon → multipliser ΔH', 'Vend reaksjon → skift fortegn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BINDINGSENTALPI ==========
    {
      id: 'kjemi1-6-2-binding',
      type: 'text',
      content: `## Bindingsentalpi

**Bindingsentalpi** er energien som kreves for å bryte 1 mol av en bestemt binding i gassfase.

### Viktige punkter

- Å **bryte** bindinger krever energi (endotermt, ΔH > 0)
- Å **danne** bindinger frigjør energi (eksotermt, ΔH < 0)

### Beregning av ΔᵣH° fra bindingsentalpier

$$\\Delta_\\text{r}H° = \\sum E_\\text{brutt} - \\sum E_\\text{dannet}$$

der:
- Ebrutt = energi for å bryte bindinger i reaktanter
- Edannet = energi frigitt ved å danne bindinger i produkter

**Eksempler på bindingsentalpier:**
- C–H: 413 kJ/mol
- C–C: 348 kJ/mol
- C=C: 614 kJ/mol
- O=O: 498 kJ/mol
- O–H: 463 kJ/mol`,
    },

    {
      id: 'kjemi1-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Bindingsentalpi',
      problem: `Beregn ΔᵣH° for: H₂(g) + Cl₂(g) → 2HCl(g)

Bindingsentalpier:
- H–H: 436 kJ/mol
- Cl–Cl: 243 kJ/mol
- H–Cl: 432 kJ/mol`,
      solution: `**Løsning:**

**Bindinger som brytes (reaktanter):**
- 1 × H–H: 436 kJ
- 1 × Cl–Cl: 243 kJ
- Sum: 679 kJ

**Bindinger som dannes (produkter):**
- 2 × H–Cl: 2 × 432 = 864 kJ

**Reaksjonsentalpi:**
$$\\Delta_\\text{r}H° = 679 - 864 = -185 \\text{ kJ/mol}$$

**Svar:** ΔᵣH° = -185 kJ/mol (eksoterm reaksjon).`,
    },

    {
      id: 'kjemi1-6-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-2-ex-4',
        number: '6-9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn ΔᵣH° for: CH₄ + 2O₂ → CO₂ + 2H₂O. Bindinger: C–H: 413, O=O: 498, C=O: 799, O–H: 463 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye energi kreves for å bryte 4 C–H og 2 O=O?',
            solution: '4×413 + 2×498 = 1652 + 996 = **2648 kJ**',
          },
          {
            label: 'b',
            task: 'Hvor mye energi frigjøres ved å danne 2 C=O og 4 O–H?',
            solution: '2×799 + 4×463 = 1598 + 1852 = **3450 kJ**',
          },
          {
            label: 'c',
            task: 'Hva er ΔᵣH°?',
            solution: '2648 - 3450 = **-802 kJ/mol**',
          },
        ],
        solution: 'a) 2648 kJ; b) 3450 kJ; c) -802 kJ/mol',
        hints: ['ΔᵣH° = Ebrutt - Edannet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-6-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-2-ex-5',
        number: '6-10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandede oppgaver om reaksjonsentalpi:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er ΔfH° for O₂(g)?',
            solution: 'O₂ er grunnstoff i stabil form → **0 kJ/mol**',
          },
          {
            label: 'b',
            task: 'Hvis en reaksjon vendes, hva skjer med ΔH?',
            solution: 'ΔH **skifter fortegn** (+ blir -, - blir +)',
          },
          {
            label: 'c',
            task: 'Kreves det energi for å bryte bindinger?',
            solution: 'Ja, å bryte bindinger krever energi (**endotermt**)',
          },
        ],
        solution: 'a) 0 kJ/mol; b) Skifter fortegn; c) Ja',
        hints: ['Grunnstoff i stabil form: ΔfH° = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ────────────────────────────────────────────────────────────────────────────
// Kapittel 6.3: Reaksjonsfart
// ────────────────────────────────────────────────────────────────────────────

const CHAPTER_KJEMI1_6_3: TextbookChapter = {
  id: 'kjemi1-6-3',
  courseId: 'kjemi1',
  chapterNumber: '6.3',
  title: 'Reaksjonsfart',
  description: 'Lær om kollisjonsteorien, aktiveringsenergi, faktorer som påvirker reaksjonsfart og katalysatorer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare kollisjonsteorien',
    'forklare hva aktiveringsenergi er',
    'beskrive faktorer som påvirker reaksjonsfart',
    'forklare hvordan katalysatorer virker',
    'tegne og tolke energidiagrammer med aktiveringsenergi',
  ],
  content: [
    // ========== KOLLISJONSTEORIEN ==========
    {
      id: 'kjemi1-6-3-intro',
      type: 'text',
      content: `## Kollisjonsteorien

**Kollisjonsteorien** forklarer hvordan kjemiske reaksjoner skjer på molekylært nivå.

### Hovedprinsipper

For at en reaksjon skal skje må:
1. **Partiklene kollidere** med hverandre
2. **Kollisjonen ha nok energi** (aktiveringsenergi)
3. **Partiklene ha riktig orientering**

Ikke alle kollisjoner fører til reaksjon!

### Reaksjonsfart

**Reaksjonsfart** beskriver hvor raskt en reaksjon foregår:
- **Rask reaksjon:** Eksplosjon, forbrenning
- **Langsom reaksjon:** Rusting, elding av mat

Reaksjonsfart kan måles som:
$$\\text{Fart} = \\frac{\\text{Endring i konsentrasjon}}{\\text{Tid}}$$`,
    },

    // ========== AKTIVERINGSENERGI ==========
    {
      id: 'kjemi1-6-3-aktivering',
      type: 'text',
      content: `## Aktiveringsenergi (Ea)

**Aktiveringsenergi** (Ea) er den minste energien som kreves for at en reaksjon skal skje.

### Aktivert kompleks

Under kollisjonen dannes et **aktivert kompleks** (overgangstilstand):
- Høyeste energi under reaksjonen
- Ustabil tilstand
- Bindinger brytes og dannes samtidig

### Energidiagram med aktiveringsenergi

**Eksoterm reaksjon:**
\`\`\`
Energi
  ↑
  │           Aktivert
  │           kompleks
  │              ╱╲
  │             ╱  ╲  Ea
  │  ──────────╱    ╲
  │  Reaktanter      ╲──────────
  │                     Produkter
  │    │                   │
  │    │←── ΔH < 0 ────→│
  │
  └──────────────────────────→ Reaksjonsforløp
\`\`\`

**Viktige punkter:**
- **Ea** = aktiveringsenergi (høyden fra reaktanter til toppen)
- **ΔH** = entalpiendr ing (forskjell mellom reaktanter og produkter)
- Høy Ea → langsom reaksjon
- Lav Ea → rask reaksjon`,
    },

    {
      id: 'kjemi1-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tolke energidiagram',
      problem: `Et energidiagram viser:
- Reaktanter: 100 kJ
- Aktivert kompleks: 180 kJ
- Produkter: 80 kJ

Bestem Ea og ΔH.`,
      solution: `**Løsning:**

**Aktiveringsenergi:**
$$E_\\text{a} = E_\\text{aktivert} - E_\\text{reaktanter}$$
$$E_\\text{a} = 180 - 100 = 80 \\text{ kJ/mol}$$

**Entalpiendr ing:**
$$\\Delta H = E_\\text{produkter} - E_\\text{reaktanter}$$
$$\\Delta H = 80 - 100 = -20 \\text{ kJ/mol}$$

**Svar:**
- Ea = 80 kJ/mol
- ΔH = -20 kJ/mol (eksoterm reaksjon)`,
    },

    {
      id: 'kjemi1-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-3-ex-1',
        number: '6-11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Aktiveringsenergi:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er aktiveringsenergi?',
            solution: 'Minste energi som kreves for at en **reaksjon skal skje**',
          },
          {
            label: 'b',
            task: 'Hva kalles den ustabile tilstanden med høyest energi?',
            solution: '**Aktivert kompleks** (overgangstilstand)',
          },
          {
            label: 'c',
            task: 'Gir høy Ea rask eller langsom reaksjon?',
            solution: 'Høy Ea → **langsom reaksjon** (færre partikler har nok energi)',
          },
        ],
        solution: 'a) Minste energi for reaksjon; b) Aktivert kompleks; c) Langsom',
        hints: ['Ea = barriere som må overstiges'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-3-ex-2',
        number: '6-12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Energidiagrammer. Reaktanter: 150 kJ, Aktivert: 230 kJ, Produkter: 120 kJ:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er aktiveringsenergi en (Ea)?',
            solution: 'Ea = 230 - 150 = **80 kJ/mol**',
          },
          {
            label: 'b',
            task: 'Hva er entalpiendringen (ΔH)?',
            solution: 'ΔH = 120 - 150 = **-30 kJ/mol**',
          },
          {
            label: 'c',
            task: 'Er reaksjonen eksoterm eller endoterm?',
            solution: 'ΔH < 0 → **Eksoterm**',
          },
        ],
        solution: 'a) 80 kJ/mol; b) -30 kJ/mol; c) Eksoterm',
        hints: ['Ea fra reaktanter til topp, ΔH fra reaktanter til produkter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FAKTORER SOM PÅVIRKER REAKSJONSFART ==========
    {
      id: 'kjemi1-6-3-faktorer',
      type: 'text',
      content: `## Faktorer som påvirker reaksjonsfart

### 1. Temperatur

**Høyere temperatur → raskere reaksjon**

Forklaring:
- Partiklene beveger seg raskere
- Flere kollisjoner per tidsenhet
- Flere partikler har energi ≥ Ea
- Flere effektive kollisjoner

**Tommelfingerregel:** 10°C temperaturøkning → doblet reaksjonsfart

### 2. Konsentrasjon

**Høyere konsentrasjon → raskere reaksjon**

Forklaring:
- Flere partikler per volum
- Flere kollisjoner per tidsenhet
- Økt sannsynlighet for reaksjon

### 3. Overflate (for faste stoffer)

**Større overflate → raskere reaksjon**

Forklaring:
- Flere partikler eksponert
- Flere kollisjoner mulig
- Pulver reagerer raskere enn stykker

Eksempel: Sukker oppløses raskere som pulver enn terninger

### 4. Katalysator

**Katalysator → raskere reaksjon**

Forklaring:
- Senker aktiveringsenergi (Ea)
- Gir alternativ reaksjonsvei
- Katalysatoren forbrukes ikke
- Endrer IKKE ΔH`,
    },

    {
      id: 'kjemi1-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Faktorer som påvirker fart',
      problem: `Magnesium reagerer med saltsyre: Mg + 2HCl → MgCl₂ + H₂

Hvordan kan vi øke reaksjonsfarten?`,
      solution: `**Løsning:**

**1. Øk temperaturen**
- Varm opp blandingen
- Partiklene får mer kinetisk energi
- Flere effektive kollisjoner

**2. Øk konsentrasjonen**
- Bruk mer konsentrert HCl
- Flere HCl-molekyler per volum
- Flere kollisjoner med Mg

**3. Øk overflaten**
- Bruk Mg-pulver i stedet for Mg-bånd
- Større kontaktflate
- Flere kollisjoner mulig

**4. Bruk katalysator**
- Senker Ea for reaksjonen
- Gir raskere reaksjon ved samme temperatur

**Svar:** Alle fire metodene vil øke reaksjonsfarten.`,
    },

    {
      id: 'kjemi1-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-3-ex-3',
        number: '6-13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Faktorer som påvirker reaksjonsfart:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med reaksjonsfarten når temperaturen økes?',
            solution: 'Reaksjonsfarten **øker** (flere effektive kollisjoner)',
          },
          {
            label: 'b',
            task: 'Reagerer sukker raskere som pulver eller terning?',
            solution: '**Pulver** (større overflate)',
          },
          {
            label: 'c',
            task: 'Hva gjør en katalysator med aktiveringsenergi en?',
            solution: '**Senker Ea** (gir raskere reaksjon)',
          },
        ],
        solution: 'a) Øker; b) Pulver; c) Senker Ea',
        hints: ['Høyere T, [c], overflate → raskere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KATALYSATORER ==========
    {
      id: 'kjemi1-6-3-katalysator',
      type: 'text',
      content: `## Katalysatorer

**Katalysator** er et stoff som øker reaksjonsfarten uten selv å forbrukes.

### Hvordan virker katalysatorer?

1. **Senker aktiveringsenergi en (Ea)**
2. Gir en **alternativ reaksjonsvei**
3. Gjør flere kollisjoner effektive
4. **Endrer IKKE ΔH** (samme start og sluttpunkt)

### Energidiagram med og uten katalysator

\`\`\`
Energi
  ↑
  │           Uten katalysator
  │               ╱╲
  │              ╱  ╲ Ea (høy)
  │  ───────────╱    ╲
  │       Med katalysator
  │         ╱╲
  │        ╱  ╲ Ea (lav)
  │  ─────╱────╲──────────
  │               Produkter
  │    │              │
  │    │←── ΔH ────→│
  │
  └──────────────────────────→ Reaksjonsforløp
\`\`\`

**Viktig:** Katalysatoren deltar i reaksjonen, men regenereres til slutt.

### Eksempler på katalysatorer

- **Enzymer:** Biologiske katalysatorer (f.eks. amylase bryter ned stivelse)
- **Platina:** Katalysatisk omformer i biler (reduserer utslipp)
- **Jern:** Haber-Bosch-prosessen (NH₃-produksjon)`,
    },

    {
      id: 'kjemi1-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Katalysator',
      problem: `En reaksjon har Ea = 120 kJ/mol uten katalysator. Med katalysator er Ea = 60 kJ/mol. ΔH = -80 kJ/mol.

a) Hvor mye senkes Ea?
b) Endres ΔH?`,
      solution: `**Løsning:**

**a) Senkning av Ea:**
$$\\Delta E_\\text{a} = 120 - 60 = 60 \\text{ kJ/mol}$$

Katalysatoren senker aktiveringsenergi en med **60 kJ/mol**.

**b) Endring i ΔH:**
ΔH forblir **-80 kJ/mol** (uendret).

Katalysatoren endrer IKKE entalpiendringen, bare reaksjonsfarten.

**Svar:**
- a) Ea senkes med 60 kJ/mol
- b) ΔH endres ikke, forblir -80 kJ/mol`,
    },

    {
      id: 'kjemi1-6-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-3-ex-4',
        number: '6-14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Katalysatorer:',
        subTasks: [
          {
            label: 'a',
            task: 'Forbrukes en katalysator i reaksjonen?',
            solution: '**Nei**, katalysatoren regenereres og kan brukes på nytt',
          },
          {
            label: 'b',
            task: 'Endrer katalysator ΔH for reaksjonen?',
            solution: '**Nei**, ΔH forblir uendret (samme start og sluttpunkt)',
          },
          {
            label: 'c',
            task: 'Ea = 100 kJ/mol uten katalysator, 40 kJ/mol med. Hvor mye senkes Ea?',
            solution: '100 - 40 = **60 kJ/mol**',
          },
        ],
        solution: 'a) Nei; b) Nei; c) 60 kJ/mol',
        hints: ['Katalysator: senker Ea, endrer IKKE ΔH, forbrukes ikke'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-6-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-6-3-ex-5',
        number: '6-15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver om reaksjonsfart:',
        subTasks: [
          {
            label: 'a',
            task: 'En reaksjon er 4 ganger raskere ved 40°C enn ved 20°C. Hvor mange 10°C-økninger er dette?',
            solution: '20°C → 40°C = 2 × 10°C. 2 × dobling = 2² = **4 ganger** ✓',
          },
          {
            label: 'b',
            task: 'Reaktanter: 100 kJ, Aktivert (uten kat.): 180 kJ, Aktivert (med kat.): 130 kJ, Produkter: 70 kJ. Hva er Ea med katalysator?',
            solution: 'Ea (med kat.) = 130 - 100 = **30 kJ/mol**',
          },
          {
            label: 'c',
            task: 'Hva er ΔH for reaksjonen i b)?',
            solution: 'ΔH = 70 - 100 = **-30 kJ/mol** (uavhengig av katalysator)',
          },
        ],
        solution: 'a) 2 økninger; b) 30 kJ/mol; c) -30 kJ/mol',
        hints: ['10°C → dobling', 'ΔH er uavhengig av katalysator'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 7.1: Likevekt og likevektskonstanten
// ============================================================================

const CHAPTER_KJEMI1_7_1: TextbookChapter = {
  id: 'kjemi1-7-1',
  courseId: 'kjemi1',
  chapterNumber: '7.1',
  title: 'Likevekt og likevektskonstanten',
  description: 'Lær om reversible reaksjoner, dynamisk likevekt og likevektskonstanten K.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare hva en reversibel reaksjon er',
    'beskrive dynamisk likevekt',
    'sette opp likevektsuttrykk',
    'beregne likevektskonstanten K',
    'tolke K-verdier (K >> 1, K << 1)',
    'forstå forskjellen mellom Kc og Kp',
  ],
  content: [
    // ========== REVERSIBLE REAKSJONER ==========
    {
      id: 'kjemi1-7-1-intro',
      type: 'text',
      content: `## Reversible reaksjoner

De fleste kjemiske reaksjoner vi har sett så langt har gått **i én retning**:

$$\\text{Reaktanter} \\rightarrow \\text{Produkter}$$

Men mange reaksjoner er **reversible** – de kan gå i begge retninger:

$$\\text{Reaktanter} \\rightleftharpoons \\text{Produkter}$$

**Fremoverreaksjonen:** Reaktanter → Produkter
**Bakoverreaksjonen:** Produkter → Reaktanter

### Eksempel: Dannelse av ammoniakk

$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$$

- **Fremover:** Nitrogen og hydrogen reagerer til ammoniakk
- **Bakover:** Ammoniakk dekomponerer til nitrogen og hydrogen

**Viktig:** Symbol $\\rightleftharpoons$ betyr at reaksjonen går i begge retninger samtidig!`,
    },

    {
      id: 'kjemi1-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Reversibel reaksjon',
      problem: `Skriv den reversible reaksjonen for dannelse av hydrogeniodfid (HI) fra hydrogen (H₂) og jod (I₂).`,
      solution: `**Løsning:**

Fremoverreaksjon: H₂ + I₂ → 2 HI
Bakoverreaksjon: 2 HI → H₂ + I₂

**Reversibel reaksjon:**

$$\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$$

Dette betyr at både dannelse og nedbrytning av HI skjer samtidig.`,
    },

    {
      id: 'kjemi1-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-1',
        number: '7-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Reversible reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr symbolet ⇌ i en kjemisk reaksjon?',
            solution: 'At reaksjonen går i **begge retninger** samtidig (reversibel reaksjon)',
          },
          {
            label: 'b',
            task: 'Skriv den reversible reaksjonen: 2 SO₂ + O₂ ⇌ 2 SO₃',
            solution: '$$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$$',
          },
          {
            label: 'c',
            task: 'Hva er fremoverreaksjonen i b)?',
            solution: '2 SO₂ + O₂ → 2 SO₃ (dannelse av svoveltrioxid)',
          },
        ],
        solution: 'a) Går i begge retninger; b) 2 SO₂ + O₂ ⇌ 2 SO₃; c) 2 SO₂ + O₂ → 2 SO₃',
        hints: ['⇌ = reversibel reaksjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DYNAMISK LIKEVEKT ==========
    {
      id: 'kjemi1-7-1-likevekt',
      type: 'text',
      content: `## Dynamisk likevekt

Når en reversibel reaksjon pågår i et **lukket system**, vil den til slutt nå **likevekt**.

### Hva er kjemisk likevekt?

**Kjemisk likevekt** oppstår når:

1. **Fremoverfarten = Bakfarten**
2. Konsentrasjonene av reaktanter og produkter **forblir konstante**
3. Både fremover- og bakoverreaksjonen **fortsetter** å skje

Dette kalles **dynamisk likevekt** fordi reaksjonene fortsetter, men det er ingen netto endring.

### Graf: Konsentrasjoner i likevekt

\`\`\`
[Konsentrasjon]
  ↑
  │  [Reaktanter]
  │  ─────────────────────  (konstant)
  │
  │          [Produkter]
  │          ───────────────  (konstant)
  │
  │          ↑ Likevekt nådd
  │
  └────────────────────────────→ Tid
\`\`\`

**Viktig:** I likevekt endres IKKE konsentrasjonene, men reaksjonene pågår fortsatt!

### Graf: Reaksjonsfart i likevekt

\`\`\`
Fart
  ↑
  │  Fremoverfart
  │  ╲
  │   ╲
  │    ───────────────────  (konstant)
  │   ╱  Bakfart
  │  ╱
  │ ╱
  │          ↑ Likevekt nådd
  │
  └────────────────────────────→ Tid
\`\`\`

Ved likevekt: $v_\\text{frem} = v_\\text{bak}$`,
    },

    {
      id: 'kjemi1-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Dynamisk likevekt',
      problem: `For reaksjonen N₂O₄(g) ⇌ 2 NO₂(g) er følgende observert:

- Ved t = 0: [N₂O₄] = 1,0 M, [NO₂] = 0 M
- Ved likevekt: [N₂O₄] = 0,6 M, [NO₂] = 0,8 M

a) Hva skjedde med [N₂O₄]?
b) Er systemet i likevekt?`,
      solution: `**Løsning:**

**a) Endring i [N₂O₄]:**
$$\\Delta[\\text{N}_2\\text{O}_4] = 0{,}6 - 1{,}0 = -0{,}4 \\text{ M}$$

Konsentrasjonen av N₂O₄ **sank** med 0,4 M (dekomponerte til NO₂).

**b) Likevekt:**
Ved likevekt forblir konsentrasjonene **konstante**:
- [N₂O₄] = 0,6 M (konstant)
- [NO₂] = 0,8 M (konstant)

Ja, systemet er i **dynamisk likevekt**. Reaksjonene fortsetter, men fremoverfart = bakfart.`,
    },

    {
      id: 'kjemi1-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-2',
        number: '7-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Dynamisk likevekt:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "dynamisk" i dynamisk likevekt?',
            solution: 'At reaksjonene **fortsetter å skje** i begge retninger, men det er ingen netto endring',
          },
          {
            label: 'b',
            task: 'I likevekt: fremoverfart = ?',
            solution: 'Fremoverfart = **bakfart** (v_frem = v_bak)',
          },
          {
            label: 'c',
            task: 'Endres konsentrasjonene i likevekt?',
            solution: '**Nei**, konsentrasjonene forblir konstante i likevekt',
          },
        ],
        solution: 'a) Reaksjonene fortsetter; b) Bakfart; c) Nei',
        hints: ['Dynamisk = fortsetter, men ingen netto endring'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LIKEVEKTSUTTRYKK OG LIKEVEKTSKONSTANTEN ==========
    {
      id: 'kjemi1-7-1-likevektsuttrykk',
      type: 'text',
      content: `## Likevektsuttrykk og likevektskonstanten K

For en reversibel reaksjon:

$$a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$$

kan vi sette opp **likevektsuttrykket**:

$$K = \\frac{[\\text{C}]^c \\cdot [\\text{D}]^d}{[\\text{A}]^a \\cdot [\\text{B}]^b}$$

### Viktige regler

1. **Produkter i teller**, reaktanter i nevner
2. **Konsentrasjonene opphøyes i koeffisientene** fra den balanserte ligningen
3. **K er en konstant** ved gitt temperatur
4. **Rene faste stoffer og væsker** inkluderes IKKE (kun gasser og løste stoffer)

### Eksempel: Ammoniakksyntese

$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$$

$$K = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2] \\cdot [\\text{H}_2]^3}$$

**Merk:** NH₃ har koeffisient 2, så konsentrasjonen kvadreres. H₂ har koeffisient 3, så konsentrasjonen kubes.`,
    },

    {
      id: 'kjemi1-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Likevektsuttrykk',
      problem: `Sett opp likevektsuttrykket for følgende reaksjoner:

a) H₂(g) + I₂(g) ⇌ 2 HI(g)
b) 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)
c) CaCO₃(s) ⇌ CaO(s) + CO₂(g)`,
      solution: `**Løsning:**

**a) H₂ + I₂ ⇌ 2 HI**

$$K = \\frac{[\\text{HI}]^2}{[\\text{H}_2] \\cdot [\\text{I}_2]}$$

**b) 2 SO₂ + O₂ ⇌ 2 SO₃**

$$K = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 \\cdot [\\text{O}_2]}$$

**c) CaCO₃(s) ⇌ CaO(s) + CO₂(g)**

$$K = [\\text{CO}_2]$$

**Merk:** CaCO₃ og CaO er faste stoffer og inkluderes IKKE i K-uttrykket.`,
    },

    {
      id: 'kjemi1-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-3',
        number: '7-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp likevektsuttrykk (K) for følgende reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'N₂O₄(g) ⇌ 2 NO₂(g)',
            solution: '$$K = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}$$',
          },
          {
            label: 'b',
            task: 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)',
            solution: '$$K = \\frac{[\\text{PCl}_3] \\cdot [\\text{Cl}_2]}{[\\text{PCl}_5]}$$',
          },
          {
            label: 'c',
            task: '2 NO(g) + O₂(g) ⇌ 2 NO₂(g)',
            solution: '$$K = \\frac{[\\text{NO}_2]^2}{[\\text{NO}]^2 \\cdot [\\text{O}_2]}$$',
          },
        ],
        solution: 'a) K = [NO₂]²/[N₂O₄]; b) K = [PCl₃][Cl₂]/[PCl₅]; c) K = [NO₂]²/[NO]²[O₂]',
        hints: ['Produkter i teller, reaktanter i nevner, koeffisienter = eksponenter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BEREGNING AV K ==========
    {
      id: 'kjemi1-7-1-beregning',
      type: 'text',
      content: `## Beregning av likevektskonstanten K

For å beregne K trenger vi **likevektskonsentrasjonene** av alle stoffer.

### Fremgangsmåte

1. **Sett opp likevektsuttrykket** K
2. **Sett inn likevektskonsentrasjonene**
3. **Regn ut K**

### Eksempel: Beregning av K

For H₂(g) + I₂(g) ⇌ 2 HI(g) er likevektskonsentrasjonene:
- [H₂] = 0,20 M
- [I₂] = 0,20 M
- [HI] = 1,60 M

$$K = \\frac{[\\text{HI}]^2}{[\\text{H}_2] \\cdot [\\text{I}_2]} = \\frac{(1{,}60)^2}{(0{,}20) \\cdot (0{,}20)} = \\frac{2{,}56}{0{,}04} = 64$$

**Viktig:** K har ingen enhet når antall partikler i teller = nevner.`,
    },

    {
      id: 'kjemi1-7-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Beregning av K',
      problem: `For reaksjonen N₂O₄(g) ⇌ 2 NO₂(g) er likevektskonsentrasjonene:
- [N₂O₄] = 0,50 M
- [NO₂] = 0,40 M

Beregn K.`,
      solution: `**Løsning:**

**Trinn 1: Sett opp likevektsuttrykket**

$$K = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}$$

**Trinn 2: Sett inn likevektskonsentrasjonene**

$$K = \\frac{(0{,}40)^2}{0{,}50}$$

**Trinn 3: Regn ut**

$$K = \\frac{0{,}16}{0{,}50} = 0{,}32$$

**Svar:** K = 0,32 (ved gitt temperatur)`,
    },

    {
      id: 'kjemi1-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-4',
        number: '7-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn likevektskonstanten K:',
        subTasks: [
          {
            label: 'a',
            task: 'H₂ + I₂ ⇌ 2 HI. Ved likevekt: [H₂] = 0,10 M, [I₂] = 0,10 M, [HI] = 0,80 M.',
            solution: '$$K = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0{,}80)^2}{(0{,}10)(0{,}10)} = \\frac{0{,}64}{0{,}01} = 64$$',
          },
          {
            label: 'b',
            task: 'PCl₅ ⇌ PCl₃ + Cl₂. Ved likevekt: [PCl₅] = 0,20 M, [PCl₃] = 0,10 M, [Cl₂] = 0,10 M.',
            solution: '$$K = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]} = \\frac{(0{,}10)(0{,}10)}{0{,}20} = \\frac{0{,}01}{0{,}20} = 0{,}05$$',
          },
          {
            label: 'c',
            task: '2 NO₂ ⇌ N₂O₄. Ved likevekt: [NO₂] = 0,60 M, [N₂O₄] = 0,90 M.',
            solution: '$$K = \\frac{[\\text{N}_2\\text{O}_4]}{[\\text{NO}_2]^2} = \\frac{0{,}90}{(0{,}60)^2} = \\frac{0{,}90}{0{,}36} = 2{,}5$$',
          },
        ],
        solution: 'a) K = 64; b) K = 0,05; c) K = 2,5',
        hints: ['Sett opp K-uttrykk, sett inn likevektskonsentrasjoner, regn ut'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TOLKNING AV K-VERDIER ==========
    {
      id: 'kjemi1-7-1-tolkning',
      type: 'text',
      content: `## Tolkning av K-verdier

Likevektskonstanten K forteller oss hvor likevekten ligger:

### K >> 1 (K mye større enn 1)

- **Mange produkter**, få reaktanter ved likevekt
- Likevekten ligger **langt til høyre**
- Reaksjonen går **nesten fullstendig** fremover

**Eksempel:** K = 1000 → Mye produkter

### K << 1 (K mye mindre enn 1)

- **Få produkter**, mange reaktanter ved likevekt
- Likevekten ligger **langt til venstre**
- Reaksjonen går **svært lite** fremover

**Eksempel:** K = 0,001 → Lite produkter

### K ≈ 1

- **Omtrent like mye** reaktanter og produkter
- Likevekten ligger **midt i**

### Oppsummering

| K-verdi | Likevektsblandingen inneholder | Likevektens posisjon |
|---------|-------------------------------|----------------------|
| K >> 1 | Mest produkter | Høyre (fremover) |
| K ≈ 1 | Omtrent likt | Midt i |
| K << 1 | Mest reaktanter | Venstre (bakover) |

**Viktig:** K forteller IKKE hvor raskt likevekt oppnås, bare hvor likevekten ligger!`,
    },

    {
      id: 'kjemi1-7-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Tolkning av K',
      problem: `For følgende reaksjoner, hva forteller K-verdien om likevekten?

a) N₂ + 3 H₂ ⇌ 2 NH₃, K = 0,0001 (ved 500°C)
b) H₂ + I₂ ⇌ 2 HI, K = 50 (ved 450°C)`,
      solution: `**Løsning:**

**a) K = 0,0001 << 1**

K er **mye mindre** enn 1.
- Likevekten ligger **langt til venstre**
- Ved likevekt er det **mest N₂ og H₂**, lite NH₃
- Ammoniakkproduksjonen er **lav** ved 500°C

**b) K = 50 >> 1**

K er **mye større** enn 1.
- Likevekten ligger **langt til høyre**
- Ved likevekt er det **mest HI**, lite H₂ og I₂
- Reaksjonen går **nesten fullstendig** fremover

**Svar:**
- a) Lite produkter (NH₃), mest reaktanter
- b) Mye produkter (HI), få reaktanter`,
    },

    {
      id: 'kjemi1-7-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-5',
        number: '7-5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tolkning av K-verdier:',
        subTasks: [
          {
            label: 'a',
            task: 'K = 0,00001. Inneholder likevektsblandingen mest reaktanter eller produkter?',
            solution: 'K << 1 → **Mest reaktanter** (likevekt langt til venstre)',
          },
          {
            label: 'b',
            task: 'K = 5000. Hvor ligger likevekten?',
            solution: 'K >> 1 → Likevekten ligger **langt til høyre** (mest produkter)',
          },
          {
            label: 'c',
            task: 'K = 1,2. Hva kan vi si om blandingen?',
            solution: 'K ≈ 1 → **Omtrent like mye** reaktanter og produkter',
          },
        ],
        solution: 'a) Mest reaktanter; b) Langt til høyre; c) Omtrent likt',
        hints: ['K >> 1 → produkter, K << 1 → reaktanter, K ≈ 1 → likt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KC OG KP ==========
    {
      id: 'kjemi1-7-1-kc-kp',
      type: 'text',
      content: `## Kc og Kp

Det finnes to typer likevektskonstanter:

### Kc (konsentrasjonslikevekt)

Bruker **konsentrasjoner** (mol/L eller M):

$$K_c = \\frac{[\\text{Produkter}]}{[\\text{Reaktanter}]}$$

**Brukes for:** Løsninger og gassreaksjoner (med konsentrasjon)

### Kp (trykklikevekt)

Bruker **partialtrykk** (atm, bar, Pa):

$$K_p = \\frac{P_\\text{produkter}}{P_\\text{reaktanter}}$$

**Brukes for:** Gassreaksjoner (med trykk)

### Sammenheng mellom Kc og Kp

For gassreaksjoner gjelder:

$$K_p = K_c(RT)^{\\Delta n}$$

hvor:
- **R** = gasskonstanten (0,0821 L·atm/(mol·K))
- **T** = temperatur i Kelvin
- **Δn** = (mol gassprodukt) − (mol gassreaktant)

### Når er Kp = Kc?

Når **Δn = 0** (like mange gassmolekyler på hver side), da er Kp = Kc.

**Eksempel:** H₂ + I₂ ⇌ 2 HI
- Reaktanter: 1 + 1 = 2 mol gass
- Produkter: 2 mol gass
- Δn = 2 − 2 = 0
- **Kp = Kc**`,
    },

    {
      id: 'kjemi1-7-1-example-6',
      type: 'example',
      title: 'Eksempel 6: Kc og Kp',
      problem: `For reaksjonen N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g):

a) Hva er Δn?
b) Er Kp = Kc?`,
      solution: `**Løsning:**

**a) Beregn Δn:**

Reaktanter: 1 mol N₂ + 3 mol H₂ = 4 mol gass
Produkter: 2 mol NH₃

$$\\Delta n = 2 - 4 = -2$$

**b) Er Kp = Kc?**

Siden Δn ≠ 0, er **Kp ≠ Kc**.

Sammenhengen er:
$$K_p = K_c(RT)^{-2}$$

**Svar:**
- a) Δn = −2
- b) Nei, Kp ≠ Kc (fordi Δn ≠ 0)`,
    },

    {
      id: 'kjemi1-7-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-6',
        number: '7-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kc og Kp:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva måler Kc?',
            solution: '**Konsentrasjoner** (mol/L eller M)',
          },
          {
            label: 'b',
            task: 'Hva måler Kp?',
            solution: '**Partialtrykk** (atm, bar, Pa)',
          },
          {
            label: 'c',
            task: 'For H₂ + I₂ ⇌ 2 HI: Er Δn = 0?',
            solution: 'Reaktanter: 2 mol, Produkter: 2 mol → Δn = 2 − 2 = **0** (Ja)',
          },
          {
            label: 'd',
            task: 'Er Kp = Kc for H₂ + I₂ ⇌ 2 HI?',
            solution: 'Siden Δn = 0: **Ja, Kp = Kc**',
          },
        ],
        solution: 'a) Konsentrasjoner; b) Partialtrykk; c) Ja; d) Ja',
        hints: ['Kp = Kc når Δn = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMMENDRAGSOPPGAVER ==========
    {
      id: 'kjemi1-7-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-7',
        number: '7-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'For reaksjonen 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp likevektsuttrykket K.',
            solution: '$$K = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2 \\cdot [\\text{O}_2]}$$',
          },
          {
            label: 'b',
            task: 'Ved likevekt: [SO₂] = 0,20 M, [O₂] = 0,10 M, [SO₃] = 0,80 M. Beregn K.',
            solution: '$$K = \\frac{(0{,}80)^2}{(0{,}20)^2 \\cdot (0{,}10)} = \\frac{0{,}64}{0{,}04 \\cdot 0{,}10} = \\frac{0{,}64}{0{,}004} = 160$$',
          },
          {
            label: 'c',
            task: 'Hva forteller K = 160 om likevekten?',
            solution: 'K >> 1 → Likevekten ligger **langt til høyre**, mest SO₃ (produkter)',
          },
        ],
        solution: 'a) K = [SO₃]²/[SO₂]²[O₂]; b) K = 160; c) Mest produkter',
        hints: ['K >> 1 → produkter dominerer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-8',
        number: '7-8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen PCl₅(g) ⇌ PCl₃(g) + Cl₂(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp likevektsuttrykket.',
            solution: '$$K = \\frac{[\\text{PCl}_3] \\cdot [\\text{Cl}_2]}{[\\text{PCl}_5]}$$',
          },
          {
            label: 'b',
            task: 'Ved likevekt: [PCl₅] = 0,40 M, [PCl₃] = 0,20 M, [Cl₂] = 0,20 M. Beregn K.',
            solution: '$$K = \\frac{(0{,}20)(0{,}20)}{0{,}40} = \\frac{0{,}04}{0{,}40} = 0{,}10$$',
          },
          {
            label: 'c',
            task: 'Hva er Δn for denne reaksjonen?',
            solution: 'Reaktanter: 1 mol, Produkter: 1 + 1 = 2 mol → Δn = 2 − 1 = **1**',
          },
          {
            label: 'd',
            task: 'Er Kp = Kc for denne reaksjonen?',
            solution: 'Δn ≠ 0 → **Nei**, Kp ≠ Kc',
          },
        ],
        solution: 'a) K = [PCl₃][Cl₂]/[PCl₅]; b) K = 0,10; c) Δn = 1; d) Nei',
        hints: ['Kp = Kc kun når Δn = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-9',
        number: '7-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sant eller usant?',
        subTasks: [
          {
            label: 'a',
            task: 'I dynamisk likevekt stopper reaksjonene.',
            solution: '**Usant**. Reaksjonene fortsetter, men fremoverfart = bakfart',
          },
          {
            label: 'b',
            task: 'K er konstant ved gitt temperatur.',
            solution: '**Sant**. K er en konstant ved fast temperatur',
          },
          {
            label: 'c',
            task: 'K >> 1 betyr at det er mest reaktanter.',
            solution: '**Usant**. K >> 1 betyr mest produkter (likevekt til høyre)',
          },
          {
            label: 'd',
            task: 'Rene faste stoffer inkluderes i K-uttrykket.',
            solution: '**Usant**. Rene faste stoffer (og væsker) inkluderes IKKE',
          },
        ],
        solution: 'a) Usant; b) Sant; c) Usant; d) Usant',
        hints: ['Dynamisk = fortsetter, K konstant ved T, K >> 1 → produkter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-10',
        number: '7-10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen N₂O₄(g) ⇌ 2 NO₂(g) ved 100°C er K = 0,36.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvis [N₂O₄] = 1,0 M ved likevekt, hva er [NO₂]?',
            solution: '$$K = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} \\Rightarrow 0{,}36 = \\frac{[\\text{NO}_2]^2}{1{,}0}$$\n\n$$[\\text{NO}_2]^2 = 0{,}36 \\Rightarrow [\\text{NO}_2] = \\sqrt{0{,}36} = 0{,}6 \\text{ M}$$',
          },
          {
            label: 'b',
            task: 'Hva forteller K = 0,36 om likevekten?',
            solution: 'K < 1 → Likevekten ligger **til venstre**, mest N₂O₄ (reaktanter)',
          },
        ],
        solution: 'a) [NO₂] = 0,6 M; b) Mest reaktanter',
        hints: ['K = [NO₂]²/[N₂O₄], løs for [NO₂]'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-11',
        number: '7-11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilke av disse stoffene inkluderes i K-uttrykket?',
        subTasks: [
          {
            label: 'a',
            task: 'O₂(g)',
            solution: '**Ja**, gass inkluderes',
          },
          {
            label: 'b',
            task: 'NaCl(s)',
            solution: '**Nei**, fast stoff inkluderes IKKE',
          },
          {
            label: 'c',
            task: 'H₂O(l)',
            solution: '**Nei**, ren væske inkluderes IKKE',
          },
          {
            label: 'd',
            task: 'NH₃(aq)',
            solution: '**Ja**, løst stoff inkluderes',
          },
        ],
        solution: 'a) Ja; b) Nei; c) Nei; d) Ja',
        hints: ['Gasser og løste stoffer inkluderes, faste stoffer og rene væsker IKKE'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-12',
        number: '7-12',
        type: 'classic',
        difficulty: 'medium',
        task: 'For reaksjonen CO(g) + 2 H₂(g) ⇌ CH₃OH(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp K.',
            solution: '$$K = \\frac{[\\text{CH}_3\\text{OH}]}{[\\text{CO}] \\cdot [\\text{H}_2]^2}$$',
          },
          {
            label: 'b',
            task: 'Hva er Δn?',
            solution: 'Reaktanter: 1 + 2 = 3 mol, Produkter: 1 mol → Δn = 1 − 3 = **−2**',
          },
          {
            label: 'c',
            task: 'Er Kp = Kc?',
            solution: 'Δn ≠ 0 → **Nei**',
          },
        ],
        solution: 'a) K = [CH₃OH]/[CO][H₂]²; b) Δn = −2; c) Nei',
        hints: ['Δn = (produktgass) − (reaktantgass)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-13',
        number: '7-13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen 2 NO(g) + Br₂(g) ⇌ 2 NOBr(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp K.',
            solution: '$$K = \\frac{[\\text{NOBr}]^2}{[\\text{NO}]^2 \\cdot [\\text{Br}_2]}$$',
          },
          {
            label: 'b',
            task: 'Ved likevekt: [NO] = 0,10 M, [Br₂] = 0,05 M, [NOBr] = 0,40 M. Beregn K.',
            solution: '$$K = \\frac{(0{,}40)^2}{(0{,}10)^2 \\cdot (0{,}05)} = \\frac{0{,}16}{0{,}01 \\cdot 0{,}05} = \\frac{0{,}16}{0{,}0005} = 320$$',
          },
          {
            label: 'c',
            task: 'Ligger likevekten til høyre eller venstre?',
            solution: 'K = 320 >> 1 → Likevekten ligger **til høyre** (mest NOBr)',
          },
        ],
        solution: 'a) K = [NOBr]²/[NO]²[Br₂]; b) K = 320; c) Til høyre',
        hints: ['K >> 1 → produkter dominerer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-14',
        number: '7-14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Definisjoner og begreper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr reversibel reaksjon?',
            solution: 'En reaksjon som går i **begge retninger** (⇌)',
          },
          {
            label: 'b',
            task: 'Hva er dynamisk likevekt?',
            solution: 'Når fremoverfart = bakfart, og konsentrasjonene er **konstante** (reaksjonene fortsetter)',
          },
          {
            label: 'c',
            task: 'Hva måler likevektskonstanten K?',
            solution: 'Forholdet mellom **produkter og reaktanter** ved likevekt',
          },
        ],
        solution: 'a) Går i begge retninger; b) Fremoverfart = bakfart; c) Produkter/reaktanter',
        hints: ['⇌ = reversibel, dynamisk = fortsetter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-1-ex-15',
        number: '7-15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen H₂(g) + CO₂(g) ⇌ H₂O(g) + CO(g) er K = 1,0 ved 1000 K.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvis [H₂] = [CO₂] = 0,50 M ved likevekt, hva kan vi si om [H₂O] og [CO]?',
            solution: '$$K = \\frac{[\\text{H}_2\\text{O}][\\text{CO}]}{[\\text{H}_2][\\text{CO}_2]} = 1{,}0$$\n\nSiden K = 1, må:\n$$[\\text{H}_2\\text{O}][\\text{CO}] = [\\text{H}_2][\\text{CO}_2] = (0{,}50)(0{,}50) = 0{,}25$$\n\nOmtrent **like mye** reaktanter og produkter.',
          },
          {
            label: 'b',
            task: 'Hva betyr K = 1,0 for denne reaksjonen?',
            solution: 'K ≈ 1 → Likevekten ligger **midt i**, omtrent like mye av alle stoffer',
          },
        ],
        solution: 'a) Omtrent likt; b) Likevekt midt i',
        hints: ['K = 1 → like mye reaktanter og produkter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 7.2: Le Chateliers prinsipp
// ============================================================================

const CHAPTER_KJEMI1_7_2: TextbookChapter = {
  id: 'kjemi1-7-2',
  courseId: 'kjemi1',
  chapterNumber: '7.2',
  title: 'Le Chateliers prinsipp',
  description: 'Lær hvordan likevekter reagerer på forstyrrelser (konsentrasjon, temperatur, trykk).',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare Le Chateliers prinsipp',
    'forutsi hvordan likevekt endres ved konsentrasjonsendring',
    'forutsi hvordan likevekt endres ved temperaturendring',
    'forutsi hvordan likevekt endres ved trykk/volumendring',
    'anvende Le Chateliers prinsipp på industrielle prosesser (Haber-Bosch, kontaktprosessen)',
  ],
  content: [
    // ========== LE CHATELIERS PRINSIPP ==========
    {
      id: 'kjemi1-7-2-intro',
      type: 'text',
      content: `## Le Chateliers prinsipp

**Le Chateliers prinsipp** beskriver hvordan en likevekt reagerer på **forstyrrelser**:

> *Hvis et system i likevekt utsettes for en forstyrrelse, vil systemet forskyde seg i retning som motvirker forstyrrelsen.*

### Tre typer forstyrrelser

1. **Konsentrasjonsendring** (tilsett/fjern reaktant/produkt)
2. **Temperaturendring** (øk/senk temperaturen)
3. **Trykk/volumendring** (kun gassreaksjoner)

**Viktig:** Katalysatorer endrer IKKE likevektens posisjon, bare hvor raskt likevekt oppnås!

### Eksempel: Generell reaksjon

For reaksjonen:

$$\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{D}$$

- Hvis vi **tilsetter A**, vil likevekten forskyve seg **til høyre** (lage mer C og D) for å motvirke økningen.
- Hvis vi **fjerner C**, vil likevekten forskyve seg **til høyre** (lage mer C og D) for å motvirke nedgangen.`,
    },

    {
      id: 'kjemi1-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Le Chateliers prinsipp',
      problem: `For reaksjonen N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g):

Hva skjer med likevekten hvis vi:
a) Tilsetter mer N₂?
b) Fjerner NH₃?`,
      solution: `**Løsning:**

**a) Tilsett N₂:**

Vi øker [N₂] → Systemet vil motvirke dette ved å **forbruke N₂**.

Likevekten forskyves **til høyre** (fremover) → Mer NH₃ dannes.

**b) Fjern NH₃:**

Vi senker [NH₃] → Systemet vil motvirke dette ved å **lage mer NH₃**.

Likevekten forskyves **til høyre** (fremover) → Mer NH₃ dannes.

**Svar:**
- a) Likevekt til høyre (mer NH₃)
- b) Likevekt til høyre (mer NH₃)`,
    },

    {
      id: 'kjemi1-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-1',
        number: '7-16',
        type: 'classic',
        difficulty: 'lett',
        task: 'Le Chateliers prinsipp:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier Le Chateliers prinsipp?',
            solution: 'Systemet forskyvelseg i retning som **motvirker forstyrrelsen**',
          },
          {
            label: 'b',
            task: 'For A + B ⇌ C: Hva skjer hvis vi tilsetter mer A?',
            solution: 'Likevekten forskyves **til høyre** (lager mer C)',
          },
          {
            label: 'c',
            task: 'For A + B ⇌ C: Hva skjer hvis vi fjerner C?',
            solution: 'Likevekten forskyves **til høyre** (lager mer C)',
          },
        ],
        solution: 'a) Motvirker forstyrrelsen; b) Til høyre; c) Til høyre',
        hints: ['Tilsett reaktant → høyre, fjern produkt → høyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KONSENTRASJONSENDRING ==========
    {
      id: 'kjemi1-7-2-konsentrasjon',
      type: 'text',
      content: `## Endring av konsentrasjon

### Tilsett reaktant eller produkt

For reaksjonen A + B ⇌ C + D:

| Forstyrrelse | Likevektens respons | Retning |
|--------------|-------------------|---------|
| **Tilsett A eller B** | Forbruk A/B → Lag mer C/D | **Høyre** |
| **Fjern A eller B** | Lag mer A/B → Forbruk C/D | **Venstre** |
| **Tilsett C eller D** | Forbruk C/D → Lag mer A/B | **Venstre** |
| **Fjern C eller D** | Lag mer C/D → Forbruk A/B | **Høyre** |

### Husk regelen:

- **Tilsett reaktant** eller **fjern produkt** → Likevekt til **høyre**
- **Fjern reaktant** eller **tilsett produkt** → Likevekt til **venstre**

### Eksempel: Ammoniakksyntese

$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$$

- **Tilsett H₂** → Likevekt til høyre (mer NH₃)
- **Fjern NH₃** → Likevekt til høyre (mer NH₃ dannes)
- **Tilsett NH₃** → Likevekt til venstre (NH₃ dekomponeres)`,
    },

    {
      id: 'kjemi1-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Konsentrasjonsendring',
      problem: `For reaksjonen H₂(g) + I₂(g) ⇌ 2 HI(g):

Hva skjer med likevekten hvis vi:
a) Tilsetter I₂?
b) Tilsetter HI?
c) Fjerner H₂?`,
      solution: `**Løsning:**

**a) Tilsett I₂:**

[I₂] øker → Systemet forbruker I₂

Likevekt til **høyre** → Mer HI dannes

**b) Tilsett HI:**

[HI] øker → Systemet forbruker HI

Likevekt til **venstre** → HI dekomponeres til H₂ og I₂

**c) Fjern H₂:**

[H₂] synker → Systemet lager mer H₂

Likevekt til **venstre** → HI dekomponeres

**Svar:**
- a) Høyre (mer HI)
- b) Venstre (mindre HI)
- c) Venstre (mer H₂)`,
    },

    {
      id: 'kjemi1-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-2',
        number: '7-17',
        type: 'classic',
        difficulty: 'medium',
        task: 'For reaksjonen 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer hvis vi tilsetter SO₂?',
            solution: 'Likevekt til **høyre** (mer SO₃ dannes)',
          },
          {
            label: 'b',
            task: 'Hva skjer hvis vi fjerner SO₃?',
            solution: 'Likevekt til **høyre** (mer SO₃ dannes)',
          },
          {
            label: 'c',
            task: 'Hva skjer hvis vi tilsetter SO₃?',
            solution: 'Likevekt til **venstre** (SO₃ dekomponeres)',
          },
          {
            label: 'd',
            task: 'Hva skjer hvis vi fjerner O₂?',
            solution: 'Likevekt til **venstre** (lager mer O₂)',
          },
        ],
        solution: 'a) Høyre; b) Høyre; c) Venstre; d) Venstre',
        hints: ['Tilsett reaktant/fjern produkt → høyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEMPERATURENDRING ==========
    {
      id: 'kjemi1-7-2-temperatur',
      type: 'text',
      content: `## Endring av temperatur

Temperaturendring påvirker likevekten forskjellig avhengig av om reaksjonen er **eksoterm** eller **endoterm**.

### Eksoterm reaksjon (ΔH < 0)

Reaksjonen **frigjør varme**:

$$\\text{Reaktanter} \\rightleftharpoons \\text{Produkter} + \\text{Varme}$$

| Forstyrrelse | Likevektens respons | Retning | K endres |
|--------------|-------------------|---------|----------|
| **Øk T** | Forbruk varme (bakover) | **Venstre** | K **synker** |
| **Senk T** | Frigjør varme (fremover) | **Høyre** | K **øker** |

**Husk:** Varme er som et "produkt" i eksoterme reaksjoner.

### Endoterm reaksjon (ΔH > 0)

Reaksjonen **absorberer varme**:

$$\\text{Reaktanter} + \\text{Varme} \\rightleftharpoons \\text{Produkter}$$

| Forstyrrelse | Likevektens respons | Retning | K endres |
|--------------|-------------------|---------|----------|
| **Øk T** | Forbruk varme (fremover) | **Høyre** | K **øker** |
| **Senk T** | Frigjør varme (bakover) | **Venstre** | K **synker** |

**Husk:** Varme er som en "reaktant" i endoterme reaksjoner.

### Viktig

**Temperaturendring er den ENESTE forstyrrelsen som endrer K-verdien!**`,
    },

    {
      id: 'kjemi1-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Temperaturendring',
      problem: `For reaksjonen N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH = −92 kJ/mol (eksoterm):

a) Hva skjer med likevekten hvis T økes?
b) Hva skjer med K hvis T økes?`,
      solution: `**Løsning:**

Reaksjonen er **eksoterm** (frigjør varme):

$$\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3 + \\text{Varme}$$

**a) Øk T:**

Tilsett varme → Systemet forbruker varme ved å gå **bakover**

Likevekt til **venstre** → Mindre NH₃

**b) Endring i K:**

Likevekt til venstre → Mer reaktanter, mindre produkter → K **synker**

**Svar:**
- a) Likevekt til venstre (mindre NH₃)
- b) K synker`,
    },

    {
      id: 'kjemi1-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-3',
        number: '7-18',
        type: 'classic',
        difficulty: 'medium',
        task: 'For reaksjonen 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), ΔH = −198 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Er reaksjonen eksoterm eller endoterm?',
            solution: 'ΔH < 0 → **Eksoterm** (frigjør varme)',
          },
          {
            label: 'b',
            task: 'Hva skjer med likevekten hvis T økes?',
            solution: 'Eksoterm + øk T → Likevekt til **venstre** (mindre SO₃)',
          },
          {
            label: 'c',
            task: 'Hva skjer med K hvis T senkes?',
            solution: 'Eksoterm + senk T → Likevekt til høyre → K **øker**',
          },
        ],
        solution: 'a) Eksoterm; b) Venstre; c) Øker',
        hints: ['Eksoterm: frigjør varme, øk T → venstre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-4',
        number: '7-19',
        type: 'classic',
        difficulty: 'medium',
        task: 'For reaksjonen N₂O₄(g) ⇌ 2 NO₂(g), ΔH = +57 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Er reaksjonen eksoterm eller endoterm?',
            solution: 'ΔH > 0 → **Endoterm** (absorberer varme)',
          },
          {
            label: 'b',
            task: 'Hva skjer med likevekten hvis T økes?',
            solution: 'Endoterm + øk T → Likevekt til **høyre** (mer NO₂)',
          },
          {
            label: 'c',
            task: 'Hva skjer med K hvis T senkes?',
            solution: 'Endoterm + senk T → Likevekt til venstre → K **synker**',
          },
        ],
        solution: 'a) Endoterm; b) Høyre; c) Synker',
        hints: ['Endoterm: absorberer varme, øk T → høyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TRYKK OG VOLUM ==========
    {
      id: 'kjemi1-7-2-trykk',
      type: 'text',
      content: `## Endring av trykk og volum

For **gassreaksjoner** påvirker trykk/volumendring likevekten.

### Øk trykk (senk volum)

Systemet forskyver seg mot **færre gassmolekyler** for å motvirke trykkøkningen.

### Senk trykk (øk volum)

Systemet forskyver seg mot **flere gassmolekyler** for å motvirke trykkreduksjonen.

### Telle gassmolekyler

For reaksjonen:

$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$$

- **Venstre side:** 1 + 3 = **4 mol** gass
- **Høyre side:** 2 mol gass

Hvis trykket **økes** → Likevekt til **høyre** (færre gassmolekyler)
Hvis trykket **senkes** → Likevekt til **venstre** (flere gassmolekyler)

### Når endres IKKE likevekten?

Hvis **like mange gassmolekyler** på hver side, påvirkes IKKE likevekten av trykkendring.

**Eksempel:** H₂(g) + I₂(g) ⇌ 2 HI(g)
- Venstre: 2 mol gass
- Høyre: 2 mol gass
- **Ingen endring** ved trykkendring!`,
    },

    {
      id: 'kjemi1-7-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Trykkendring',
      problem: `For reaksjonen PCl₅(g) ⇌ PCl₃(g) + Cl₂(g):

a) Hvor mange gassmolekyler på hver side?
b) Hva skjer hvis trykket økes?`,
      solution: `**Løsning:**

**a) Tell gassmolekyler:**

Venstre: 1 mol PCl₅
Høyre: 1 mol PCl₃ + 1 mol Cl₂ = 2 mol gass

**b) Øk trykk:**

Systemet forskyver seg mot **færre gassmolekyler**.

Venstre har 1 mol, høyre har 2 mol → Likevekt til **venstre**

**Svar:**
- a) Venstre: 1 mol, Høyre: 2 mol
- b) Likevekt til venstre (mer PCl₅)`,
    },

    {
      id: 'kjemi1-7-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-5',
        number: '7-20',
        type: 'classic',
        difficulty: 'medium',
        task: 'For reaksjonen 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange mol gass på venstre side?',
            solution: '2 mol SO₂ + 1 mol O₂ = **3 mol**',
          },
          {
            label: 'b',
            task: 'Hvor mange mol gass på høyre side?',
            solution: '2 mol SO₃ = **2 mol**',
          },
          {
            label: 'c',
            task: 'Hva skjer med likevekten hvis trykket økes?',
            solution: 'Øk trykk → færre mol → Likevekt til **høyre** (2 mol)',
          },
          {
            label: 'd',
            task: 'Hva skjer hvis volumet økes (trykk synker)?',
            solution: 'Senk trykk → flere mol → Likevekt til **venstre** (3 mol)',
          },
        ],
        solution: 'a) 3 mol; b) 2 mol; c) Høyre; d) Venstre',
        hints: ['Øk trykk → færre mol, senk trykk → flere mol'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-6',
        number: '7-21',
        type: 'classic',
        difficulty: 'lett',
        task: 'For reaksjonen H₂(g) + I₂(g) ⇌ 2 HI(g):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange mol gass totalt på hver side?',
            solution: 'Venstre: 2 mol, Høyre: 2 mol (**Like mange**)',
          },
          {
            label: 'b',
            task: 'Hva skjer med likevekten hvis trykket økes?',
            solution: 'Like mange mol på hver side → **Ingen endring**',
          },
        ],
        solution: 'a) 2 mol på hver side; b) Ingen endring',
        hints: ['Like mange mol → trykk påvirker IKKE likevekten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== INDUSTRIELLE PROSESSER ==========
    {
      id: 'kjemi1-7-2-industri',
      type: 'text',
      content: `## Industrielle prosesser

### Haber-Bosch-prosessen (NH₃-produksjon)

$$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g), \\quad \\Delta H = -92 \\text{ kJ/mol}$$

**Mål:** Maksimere NH₃-produksjon

**Optimale betingelser:**

1. **Høyt trykk** (200 bar)
   - 4 mol gass → 2 mol gass
   - Høyt trykk → Likevekt til høyre (mer NH₃)

2. **Moderat temperatur** (400-500°C)
   - Eksoterm → Lav T favoriserer produkter
   - MEN: Lav T gir langsom reaksjon
   - **Kompromiss:** Moderat T for god fart + OK utbytte

3. **Jern som katalysator**
   - Øker reaksjonsfarten (raskere likevekt)
   - Endrer IKKE likevektens posisjon

4. **Fjern NH₃ kontinuerlig**
   - Fjern produkt → Likevekt til høyre (mer NH₃ dannes)

### Kontaktprosessen (SO₃-produksjon for svovelsyre)

$$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g), \\quad \\Delta H = -198 \\text{ kJ/mol}$$

**Optimale betingelser:**

1. **Moderat trykk** (1-2 bar)
   - 3 mol → 2 mol (høyt trykk favoriserer SO₃)
   - Men: Økonomisk kostbart med veldig høyt trykk

2. **Moderat temperatur** (400-450°C)
   - Eksoterm → Lav T favoriserer SO₃
   - Kompromiss for god reaksjonsfart

3. **Vanadium(V)oksid som katalysator**
   - V₂O₅ katalyserer reaksjonen
   - Raskere likevekt, endrer ikke K`,
    },

    {
      id: 'kjemi1-7-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Haber-Bosch-prosessen',
      problem: `For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH = −92 kJ/mol:

a) Hvorfor brukes høyt trykk?
b) Hvorfor brukes ikke veldig lav temperatur (f.eks. 100°C)?
c) Hva er rollen til jern-katalysatoren?`,
      solution: `**Løsning:**

**a) Høyt trykk:**

4 mol gass (venstre) → 2 mol gass (høyre)

Høyt trykk forskyver likevekten mot **færre mol** → Høyre (mer NH₃)

**b) Lav temperatur:**

Eksoterm → Lav T favoriserer produkter (mer NH₃)

MEN: Ved veldig lav T er reaksjonsfarten **ekstremt langsom**

**Kompromiss:** Moderat T (400-500°C) gir OK utbytte + akseptabel fart

**c) Jern-katalysator:**

- Senker Ea → **Raskere reaksjon**
- Endrer IKKE K eller likevektens posisjon
- Systemet når likevekt **raskere**

**Svar:**
- a) Høyt trykk → færre mol → mer NH₃
- b) For langsom reaksjon
- c) Øker reaksjonsfarten`,
    },

    {
      id: 'kjemi1-7-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-7',
        number: '7-22',
        type: 'classic',
        difficulty: 'medium',
        task: 'Haber-Bosch-prosessen: N₂ + 3 H₂ ⇌ 2 NH₃, ΔH = −92 kJ/mol',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor brukes høyt trykk (200 bar)?',
            solution: '4 mol → 2 mol. Høyt trykk → **færre mol** → Likevekt til høyre (mer NH₃)',
          },
          {
            label: 'b',
            task: 'Hva skjer hvis vi fjerner NH₃ kontinuerlig?',
            solution: 'Fjern produkt → Likevekt til **høyre** (mer NH₃ dannes)',
          },
          {
            label: 'c',
            task: 'Er prosessen eksoterm eller endoterm?',
            solution: 'ΔH = −92 kJ/mol < 0 → **Eksoterm**',
          },
        ],
        solution: 'a) Færre mol → mer NH₃; b) Mer NH₃ dannes; c) Eksoterm',
        hints: ['Høyt trykk → færre mol, fjern produkt → mer produkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-8',
        number: '7-23',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kontaktprosessen: 2 SO₂ + O₂ ⇌ 2 SO₃, ΔH = −198 kJ/mol',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange mol gass på hver side?',
            solution: 'Venstre: 3 mol, Høyre: 2 mol',
          },
          {
            label: 'b',
            task: 'Hva skjer hvis trykket økes?',
            solution: 'Øk trykk → færre mol → Likevekt til **høyre** (mer SO₃)',
          },
          {
            label: 'c',
            task: 'Hva er rollen til V₂O₅-katalysatoren?',
            solution: '**Øker reaksjonsfarten**, endrer IKKE K eller likevektens posisjon',
          },
        ],
        solution: 'a) V: 3, H: 2; b) Mer SO₃; c) Øker reaksjonsfarten',
        hints: ['Katalysator → raskere, endrer ikke likevekt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMMENDRAGSOPPGAVER ==========
    {
      id: 'kjemi1-7-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-9',
        number: '7-24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen N₂O₄(g) ⇌ 2 NO₂(g), ΔH = +57 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med [NO₂] hvis vi øker trykket?',
            solution: '1 mol → 2 mol. Øk trykk → **færre mol** → Likevekt til venstre → [NO₂] **synker**',
          },
          {
            label: 'b',
            task: 'Hva skjer med [NO₂] hvis vi øker temperaturen?',
            solution: 'Endoterm → Øk T → Likevekt til høyre → [NO₂] **øker**',
          },
          {
            label: 'c',
            task: 'Hva skjer med [NO₂] hvis vi tilsetter N₂O₄?',
            solution: 'Tilsett reaktant → Likevekt til høyre → [NO₂] **øker**',
          },
        ],
        solution: 'a) Synker; b) Øker; c) Øker',
        hints: ['Øk trykk → færre mol, endoterm + øk T → høyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-10',
        number: '7-25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen CO(g) + 2 H₂(g) ⇌ CH₃OH(g), ΔH = −91 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken retning favoriseres av høyt trykk?',
            solution: '3 mol → 1 mol. Høyt trykk → **færre mol** → **Høyre** (mer CH₃OH)',
          },
          {
            label: 'b',
            task: 'Hvilken retning favoriseres av lav temperatur?',
            solution: 'Eksoterm (ΔH < 0) → Lav T → **Høyre** (mer CH₃OH)',
          },
          {
            label: 'c',
            task: 'Hva kan gjøres for å øke utbyttet av CH₃OH?',
            solution: '1) **Øk trykk** (færre mol)\n2) **Senk T** (eksoterm)\n3) **Fjern CH₃OH** kontinuerlig\n4) **Tilsett CO eller H₂**',
          },
        ],
        solution: 'a) Høyre; b) Høyre; c) Øk trykk, senk T, fjern CH₃OH',
        hints: ['Høyt trykk + lav T favoriserer produkter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-11',
        number: '7-26',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sant eller usant?',
        subTasks: [
          {
            label: 'a',
            task: 'Katalysatorer endrer likevektens posisjon.',
            solution: '**Usant**. Katalysatorer øker farten, endrer IKKE K eller likevektens posisjon',
          },
          {
            label: 'b',
            task: 'Temperaturendring er den eneste forstyrrelsen som endrer K.',
            solution: '**Sant**. Kun temperatur endrer K-verdien',
          },
          {
            label: 'c',
            task: 'For eksoterme reaksjoner øker K når T øker.',
            solution: '**Usant**. Eksoterm + øk T → Likevekt til venstre → K **synker**',
          },
          {
            label: 'd',
            task: 'Trykkendring påvirker bare gassreaksjoner.',
            solution: '**Sant**. Trykk/volum påvirker kun gasser',
          },
        ],
        solution: 'a) Usant; b) Sant; c) Usant; d) Sant',
        hints: ['Katalysator endrer ikke K, kun T endrer K'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-12',
        number: '7-27',
        type: 'classic',
        difficulty: 'lett',
        task: 'Le Chateliers prinsipp - oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med likevekten hvis vi tilsetter en reaktant?',
            solution: 'Likevekt til **høyre** (forbruker reaktanten)',
          },
          {
            label: 'b',
            task: 'Hva skjer med likevekten hvis vi fjerner et produkt?',
            solution: 'Likevekt til **høyre** (lager mer produkt)',
          },
          {
            label: 'c',
            task: 'Hva skjer med eksoterme reaksjoner hvis T økes?',
            solution: 'Likevekt til **venstre** (forbruker varme)',
          },
          {
            label: 'd',
            task: 'Hva skjer hvis trykket økes (for 3 mol → 2 mol)?',
            solution: 'Likevekt mot **færre mol** → **Høyre**',
          },
        ],
        solution: 'a) Høyre; b) Høyre; c) Venstre; d) Høyre',
        hints: ['Systemet motvirker forstyrrelsen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-13',
        number: '7-28',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen 2 NO(g) + O₂(g) ⇌ 2 NO₂(g), ΔH = −114 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv effekten av å øke [NO].',
            solution: 'Tilsett reaktant → Likevekt til **høyre** → Mer NO₂ dannes',
          },
          {
            label: 'b',
            task: 'Beskriv effekten av å senke temperaturen.',
            solution: 'Eksoterm + senk T → Likevekt til **høyre** → Mer NO₂',
          },
          {
            label: 'c',
            task: 'Beskriv effekten av å øke trykket.',
            solution: '3 mol → 2 mol. Øk trykk → **færre mol** → Likevekt til **høyre** → Mer NO₂',
          },
          {
            label: 'd',
            task: 'Hva er den beste kombinasjonen for å maksimere NO₂-produksjon?',
            solution: '**Høyt trykk** + **Lav temperatur** + **Fjern NO₂** + **Tilsett NO og O₂**',
          },
        ],
        solution: 'a) Mer NO₂; b) Mer NO₂; c) Mer NO₂; d) Høyt P, lav T, fjern NO₂',
        hints: ['Alle tre favoriserer produkter (høyre)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-14',
        number: '7-29',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Haber-Bosch og kontaktprosessen:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har de til felles?',
            solution: 'Begge er **eksoterme** gassreaksjoner med **færre mol på produktsiden**',
          },
          {
            label: 'b',
            task: 'Hva favoriseres av høyt trykk i begge?',
            solution: 'Høyt trykk → **færre mol** → **Produkter** (NH₃ og SO₃)',
          },
          {
            label: 'c',
            task: 'Hvorfor brukes moderat temperatur i begge?',
            solution: 'Eksoterm → Lav T favoriserer produkter, MEN lav T gir langsom reaksjon. **Kompromiss**: Moderat T',
          },
        ],
        solution: 'a) Eksoterme, færre mol; b) Produkter; c) Kompromiss: utbytte vs fart',
        hints: ['Eksoterm + færre mol → høyt P, lav T favoriserer produkter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-15',
        number: '7-30',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'For reaksjonen H₂(g) + CO₂(g) ⇌ H₂O(g) + CO(g), ΔH = +41 kJ/mol:',
        subTasks: [
          {
            label: 'a',
            task: 'Er reaksjonen endoterm eller eksoterm?',
            solution: 'ΔH > 0 → **Endoterm**',
          },
          {
            label: 'b',
            task: 'Hva skjer med likevekten hvis T økes?',
            solution: 'Endoterm + øk T → Likevekt til **høyre** (mer H₂O og CO)',
          },
          {
            label: 'c',
            task: 'Hva skjer med likevekten hvis trykket økes?',
            solution: '2 mol (begge sider) → **Ingen endring** (like mange mol)',
          },
          {
            label: 'd',
            task: 'Hva kan gjøres for å øke produksjonen av CO?',
            solution: '1) **Øk T** (endoterm)\n2) **Tilsett H₂ eller CO₂**\n3) **Fjern CO eller H₂O**',
          },
        ],
        solution: 'a) Endoterm; b) Høyre; c) Ingen endring; d) Øk T, tilsett reaktanter, fjern produkter',
        hints: ['Endoterm + øk T → høyre, like mange mol → trykk påvirker ikke'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-7-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-7-2-ex-16',
        number: '7-31',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke forstyrrelser endrer K-verdien?',
            solution: 'Kun **temperaturendring** endrer K',
          },
          {
            label: 'b',
            task: 'Hva gjør en katalysator med likevekten?',
            solution: '**Raskere likevekt**, endrer IKKE K eller likevektens posisjon',
          },
          {
            label: 'c',
            task: 'Hva sier Le Chateliers prinsipp?',
            solution: 'Systemet forskyvelser i retning som **motvirker forstyrrelsen**',
          },
        ],
        solution: 'a) Temperaturendring; b) Raskere likevekt; c) Motvirker forstyrrelsen',
        hints: ['Kun T endrer K, katalysator → raskere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 8.1: Løsningsprosessen
// ============================================================================

const CHAPTER_KJEMI1_8_1: TextbookChapter = {
  id: 'kjemi1-8-1',
  courseId: 'kjemi1',
  chapterNumber: '8.1',
  title: 'Løsningsprosessen',
  description: 'Lær om løsningsmidler, løsningsprosesser, hydratisering og kreftene som virker i løsninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare forskjellen mellom løsningsmiddel og oppløst stoff',
    'beskrive prinsippet "likt løser likt"',
    'forklare hydratisering og solvatisering',
    'forstå vannets spesielle egenskaper som løsningsmiddel',
    'beskrive ion-dipol-krefter og deres rolle i løsningsprosessen',
    'forklare løsningsentalpi',
  ],
  content: [
    // ========== LØSNINGSMIDDEL OG OPPLØST STOFF ==========
    {
      id: 'kjemi1-8-1-intro',
      type: 'text',
      content: `## Løsningsmiddel og oppløst stoff

En **løsning** er en homogen blanding av to eller flere stoffer.

### Komponenter i en løsning

- **Løsningsmiddel** – Stoffet som finnes i størst mengde (løser opp det andre stoffet)
- **Oppløst stoff** – Stoffet som løses opp (finnes i mindre mengde)

**Eksempel:** Sukker i vann
- Vann = løsningsmiddel
- Sukker = oppløst stoff

### Typer løsninger

Løsninger kan være i ulike faser:

| Type | Oppløst stoff | Løsningsmiddel | Eksempel |
|------|---------------|----------------|----------|
| Fast i væske | Fast | Væske | Sukker i vann |
| Væske i væske | Væske | Væske | Etanol i vann |
| Gass i væske | Gass | Væske | CO₂ i vann |
| Gass i gass | Gass | Gass | Luft (O₂ i N₂) |
| Fast i fast | Fast | Fast | Legeringer (messing) |

**Viktig:** Vann er det vanligste løsningsmiddelet og kalles ofte det "universelle løsningsmiddelet".`,
    },

    {
      id: 'kjemi1-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere komponenter',
      problem: `Identifiser løsningsmiddel og oppløst stoff i følgende løsninger:

a) 10 g NaCl oppløst i 200 g vann
b) 50 mL etanol i 150 mL vann
c) Karbonholdig vann (CO₂-gass i vann)`,
      solution: `**Løsning:**

**a) NaCl i vann:**
- Løsningsmiddel: **Vann** (mest av dette)
- Oppløst stoff: **NaCl** (salt)

**b) Etanol i vann:**
- Løsningsmiddel: **Vann** (150 mL > 50 mL)
- Oppløst stoff: **Etanol**

**c) Karbonholdig vann:**
- Løsningsmiddel: **Vann**
- Oppløst stoff: **CO₂** (gass)

**Regel:** Komponenten i størst mengde er løsningsmiddelet.`,
    },

    {
      id: 'kjemi1-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-1',
        number: '8-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser løsningsmiddel og oppløst stoff:',
        subTasks: [
          {
            label: 'a',
            task: '5 g sukker i 100 mL vann.',
            solution: 'Løsningsmiddel: **Vann** (størst mengde), Oppløst stoff: **Sukker**',
          },
          {
            label: 'b',
            task: 'Oksygen (O₂) oppløst i nitrogen (N₂) i luft.',
            solution: 'Løsningsmiddel: **N₂** (ca 78% av luft), Oppløst stoff: **O₂** (ca 21%)',
          },
          {
            label: 'c',
            task: 'Jod (I₂) oppløst i etanol.',
            solution: 'Løsningsmiddel: **Etanol** (størst mengde), Oppløst stoff: **Jod**',
          },
        ],
        solution: 'a) Vann løser sukker; b) N₂ løser O₂; c) Etanol løser jod',
        hints: ['Løsningsmiddelet er komponenten i størst mengde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LIKT LØSER LIKT ==========
    {
      id: 'kjemi1-8-1-likt-loser-likt',
      type: 'text',
      content: `## "Likt løser likt"

Dette er et grunnleggende prinsipp i kjemi:

**Polare stoffer løser polare stoffer**
**Upolare stoffer løser upolare stoffer**

### Polare løsningsmidler

**Eksempler:**
- Vann (H₂O)
- Metanol (CH₃OH)
- Etanol (C₂H₅OH)

**Løser:** Ioneforbindelser (salter) og polare molekyler

### Upolare løsningsmidler

**Eksempler:**
- Heksan (C₆H₁₄)
- Benzen (C₆H₆)
- Parafin

**Løser:** Upolare molekyler (fett, olje)

### Hvorfor "likt løser likt"?

For at et stoff skal løses opp, må de intermolekylære kreftene mellom:
- Løsningsmiddel–løsningsmiddel
- Oppløst stoff–oppløst stoff

brytes og erstattes av nye krefter mellom:
- Løsningsmiddel–oppløst stoff

Dette skjer lettest når stoffene har **lignende polaritet**.

**Eksempel:** Olje (upolart) blander seg IKKE med vann (polart), men blander seg med benzen (upolart).`,
    },

    {
      id: 'kjemi1-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Prediksjon av løselighet',
      problem: `Vil følgende stoffer løses i vann?

a) NaCl (ioneforbindelse)
b) CH₄ (metan, upolart)
c) C₂H₅OH (etanol, polart)`,
      solution: `**Løsning:**

Vann er **polart** → løser polare stoffer og ioneforbindelser.

**a) NaCl:**
- Ioneforbindelse (polart)
- **JA**, løses godt i vann
- "Likt løser likt" ✓

**b) CH₄ (metan):**
- Upolart molekyl
- **NEI**, løses dårlig i vann
- Upolart ≠ Polart

**c) C₂H₅OH (etanol):**
- Polart molekyl (–OH-gruppe)
- **JA**, løses godt i vann
- "Likt løser likt" ✓

**Svar:** a) Ja, b) Nei, c) Ja`,
    },

    {
      id: 'kjemi1-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-2',
        number: '8-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vil følgende stoffer løses i vann (polart)?',
        subTasks: [
          {
            label: 'a',
            task: 'KBr (ioneforbindelse)',
            solution: 'Ioneforbindelse + polart vann → **Ja**, løses godt ("likt løser likt")',
          },
          {
            label: 'b',
            task: 'C₈H₁₈ (oktan, upolart)',
            solution: 'Upolart + polart vann → **Nei**, løses dårlig (ulik polaritet)',
          },
          {
            label: 'c',
            task: 'NH₃ (ammoniakk, polart)',
            solution: 'Polart + polart vann → **Ja**, løses godt ("likt løser likt")',
          },
        ],
        solution: 'a) Ja; b) Nei; c) Ja',
        hints: ['Vann er polart → løser polare stoffer og ioneforbindelser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-3',
        number: '8-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg best løsningsmiddel for følgende stoffer:',
        subTasks: [
          {
            label: 'a',
            task: 'I₂ (jod, upolart). Valg: Vann eller heksan (upolart)?',
            solution: 'Jod er **upolart** → Best løst i **heksan** (upolart). "Likt løser likt"',
          },
          {
            label: 'b',
            task: 'CaCl₂ (ioneforbindelse). Valg: Vann eller benzen (upolart)?',
            solution: 'Ioneforbindelse → Best løst i **vann** (polart). "Likt løser likt"',
          },
          {
            label: 'c',
            task: 'Fett (upolart). Valg: Vann eller parafin (upolart)?',
            solution: 'Fett er **upolart** → Best løst i **parafin** (upolart). "Likt løser likt"',
          },
        ],
        solution: 'a) Heksan; b) Vann; c) Parafin',
        hints: ['"Likt løser likt" – polare løser polare, upolare løser upolare'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== HYDRATISERING OG SOLVATISERING ==========
    {
      id: 'kjemi1-8-1-hydratisering',
      type: 'text',
      content: `## Hydratisering og solvatisering

### Solvatisering

**Solvatisering** er prosessen der løsningsmiddelmolekyler omgir og samhandler med partikler av det oppløste stoffet.

- Gjelder **alle** løsningsmidler
- Løsningsmiddelmolekylene danner et "hylster" rundt partiklene

### Hydratisering

**Hydratisering** er solvatisering der løsningsmiddelet er **vann**.

- Spesialtilfelle av solvatisering
- Vannmolekyler omgir ioner eller polare molekyler
- Svært viktig i biologi og kjemi

### Hydratisering av ioner (eks: NaCl i vann)

Når NaCl løses i vann:

1. **Vannmolekyler nærmer seg salt-krystallet**
   - Vannets δ− (oksygen) tiltrekkes av Na⁺
   - Vannets δ+ (hydrogen) tiltrekkes av Cl⁻

2. **Ion-dipol-krefter bryter ionebindinger**
   - Vannmolekyler "river" ioner ut av krystallet

3. **Ioner hydratiseres**
   - Na⁺ omgis av vannmolekyler (O mot Na⁺)
   - Cl⁻ omgis av vannmolekyler (H mot Cl⁻)

**Resultat:** Ioner spredt i løsningen, omgitt av et hydratisert hylster.

### Notasjon

Hydratiserte ioner skrives ofte:
- Na⁺(aq) – "aq" står for "aqua" (vann)
- Cl⁻(aq)

**Eksempel:** NaCl(s) → Na⁺(aq) + Cl⁻(aq)`,
    },

    {
      id: 'kjemi1-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hydratisering av KBr',
      problem: `Beskriv hva som skjer når KBr løses i vann.`,
      solution: `**Løsning:**

**1. KBr er en ioneforbindelse:**
- K⁺ (kation)
- Br⁻ (anion)

**2. Når KBr tilsettes vann:**

Vannmolekyler nærmer seg KBr-krystallet:
- **Oksygen (δ−)** i vann tiltrekkes av **K⁺**
- **Hydrogen (δ+)** i vann tiltrekkes av **Br⁻**

**3. Ion-dipol-krefter bryter ionebindinger:**

Vannmolekyler "river" K⁺ og Br⁻ ut av krystallet.

**4. Ioner hydratiseres:**
- K⁺ omgis av vannmolekyler (O vendt mot K⁺)
- Br⁻ omgis av vannmolekyler (H vendt mot Br⁻)

**Reaksjon:**
$$\\text{KBr(s)} \\xrightarrow{\\text{H}_2\\text{O}} \\text{K}^+(\\text{aq}) + \\text{Br}^-(\\text{aq})$$

**Svar:** KBr deles i K⁺ og Br⁻, som hydratiseres av vannmolekyler.`,
    },

    {
      id: 'kjemi1-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-4',
        number: '8-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv likninger for løsning i vann:',
        subTasks: [
          {
            label: 'a',
            task: 'NaCl(s) løses i vann.',
            solution: '$$\\text{NaCl(s)} \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$$',
          },
          {
            label: 'b',
            task: 'MgSO₄(s) løses i vann.',
            solution: '$$\\text{MgSO}_4(\\text{s}) \\xrightarrow{\\text{H}_2\\text{O}} \\text{Mg}^{2+}(\\text{aq}) + \\text{SO}_4^{2-}(\\text{aq})$$',
          },
          {
            label: 'c',
            task: 'CaCl₂(s) løses i vann.',
            solution: '$$\\text{CaCl}_2(\\text{s}) \\xrightarrow{\\text{H}_2\\text{O}} \\text{Ca}^{2+}(\\text{aq}) + 2\\text{Cl}^-(\\text{aq})$$',
          },
        ],
        solution: 'a) Na⁺(aq) + Cl⁻(aq); b) Mg²⁺(aq) + SO₄²⁻(aq); c) Ca²⁺(aq) + 2Cl⁻(aq)',
        hints: ['Ioneforbindelser deles i kationer og anioner, som hydratiseres (aq)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VANNETS SPESIELLE EGENSKAPER ==========
    {
      id: 'kjemi1-8-1-vannets-egenskaper',
      type: 'text',
      content: `## Vannets spesielle egenskaper

Vann (H₂O) er et unikt løsningsmiddel med spesielle egenskaper.

### Struktur av vannmolekylet

- **Polare molekyler**: O er mer elektronegativ enn H
- **Bøyd struktur** (ca 104,5° vinkel)
- **Partielle ladninger**: δ− på O, δ+ på H

### Hydrogenbindinger i vann

**Hydrogenbindinger** dannes mellom:
- H (δ+) på ett vannmolekyl
- O (δ−) på et annet vannmolekyl

**Egenskaper fra hydrogenbindinger:**

1. **Høy kokepunkt** (100°C)
   - Mye energi kreves for å bryte H-bindinger

2. **Høy løselighet for polare stoffer**
   - Danner H-bindinger med polare molekyler

3. **Høy overflatespending**
   - Vannmolekyler "holder sammen"

4. **Høy varmekapasitet**
   - Viktig for temperaturregulering i kroppen

5. **Is flyter på vann**
   - H-bindinger i is gir åpen struktur (mindre tett enn flytende vann)

### Vann som "universelt løsningsmiddel"

Vann løser:
- **Ioneforbindelser** (via ion-dipol-krefter)
- **Polare molekyler** (via dipol-dipol og H-bindinger)

Vann løser IKKE:
- **Upolare molekyler** (fett, olje)`,
    },

    {
      id: 'kjemi1-8-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Vannets egenskaper',
      problem: `Forklar hvorfor vann har høyere kokepunkt enn metan (CH₄), selv om de har omtrent samme molekylmasse.

- H₂O: M = 18 g/mol, kokepunkt = 100°C
- CH₄: M = 16 g/mol, kokepunkt = −164°C`,
      solution: `**Løsning:**

**H₂O (vann):**
- Polart molekyl
- **Hydrogenbindinger** mellom molekylene
- Sterke intermolekylære krefter

**CH₄ (metan):**
- Upolart molekyl
- Kun **svake van der Waals-krefter**
- Svake intermolekylære krefter

**Konklusjon:**

For å koke vann må **hydrogenbindinger** brytes → krever mye energi → høy kokepunkt (100°C).

For å koke metan må kun **svake van der Waals-krefter** brytes → krever lite energi → lav kokepunkt (−164°C).

**Svar:** Vannets hydrogenbindinger gir mye høyere kokepunkt enn metans svake van der Waals-krefter.`,
    },

    {
      id: 'kjemi1-8-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-5',
        number: '8-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vannets egenskaper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type binding finnes mellom vannmolekyler?',
            solution: '**Hydrogenbindinger** (mellom H (δ+) og O (δ−))',
          },
          {
            label: 'b',
            task: 'Hvorfor har vann høy varmekapasitet?',
            solution: 'Mye energi kreves for å bryte **hydrogenbindinger** → høy varmekapasitet',
          },
          {
            label: 'c',
            task: 'Hvorfor flyter is på vann?',
            solution: 'H-bindinger i is gir **åpen struktur** → is er **mindre tett** enn flytende vann',
          },
        ],
        solution: 'a) Hydrogenbindinger; b) Sterke H-bindinger; c) Is er mindre tett',
        hints: ['Hydrogenbindinger gir vann unike egenskaper'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ION-DIPOL-KREFTER ==========
    {
      id: 'kjemi1-8-1-ion-dipol',
      type: 'text',
      content: `## Ion-dipol-krefter

**Ion-dipol-krefter** er tiltrekningskrefter mellom:
- **Ioner** (+ eller −)
- **Polare molekyler** (dipol)

### Hvordan fungerer ion-dipol-krefter?

**Eksempel: Na⁺ i vann**

1. Na⁺ (positivt ion) tiltrekkes av **oksygen (δ−)** i vannmolekyler
2. Vannmolekyler orienterer seg med O mot Na⁺
3. Flere vannmolekyler omgir Na⁺ → **hydratisert ion**

**Eksempel: Cl⁻ i vann**

1. Cl⁻ (negativt ion) tiltrekkes av **hydrogen (δ+)** i vannmolekyler
2. Vannmolekyler orienterer seg med H mot Cl⁻
3. Flere vannmolekyler omgir Cl⁻ → **hydratisert ion**

### Styrke av ion-dipol-krefter

Ion-dipol-krefter er **sterkere** enn:
- Dipol-dipol-krefter
- Van der Waals-krefter

Men **svakere** enn:
- Ionebindinger
- Kovalente bindinger

### Betydning

Ion-dipol-krefter gjør at:
- Ioneforbindelser løses i vann
- Ioner forblir i løsning (krystalliserer ikke umiddelbart)
- Elektrolyttløsninger kan lede strøm`,
    },

    {
      id: 'kjemi1-8-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Ion-dipol-krefter',
      problem: `Beskriv ion-dipol-kreftene når K⁺ og Br⁻ løses i vann.`,
      solution: `**Løsning:**

**For K⁺ (positivt ion):**

1. K⁺ tiltrekkes av **oksygen (δ−)** i vannmolekyler
2. Vannmolekyler orienterer seg: **O mot K⁺**
3. Flere vannmolekyler danner et "hylster" rundt K⁺
4. **Ion-dipol-krefter** holder vannmolekyler rundt K⁺

**For Br⁻ (negativt ion):**

1. Br⁻ tiltrekkes av **hydrogen (δ+)** i vannmolekyler
2. Vannmolekyler orienterer seg: **H mot Br⁻**
3. Flere vannmolekyler danner et "hylster" rundt Br⁻
4. **Ion-dipol-krefter** holder vannmolekyler rundt Br⁻

**Resultat:** Både K⁺ og Br⁻ er **hydratiserte** og forblir i løsning.

**Svar:** Ion-dipol-krefter mellom ioner og polare vannmolekyler gir hydratisering.`,
    },

    {
      id: 'kjemi1-8-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-6',
        number: '8-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ion-dipol-krefter:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken del av vannmolekylet tiltrekkes av Ca²⁺?',
            solution: 'Ca²⁺ (positivt) tiltrekkes av **oksygen (δ−)** i vann',
          },
          {
            label: 'b',
            task: 'Hvilken del av vannmolekylet tiltrekkes av SO₄²⁻?',
            solution: 'SO₄²⁻ (negativt) tiltrekkes av **hydrogen (δ+)** i vann',
          },
          {
            label: 'c',
            task: 'Er ion-dipol-krefter sterkere eller svakere enn van der Waals-krefter?',
            solution: 'Ion-dipol-krefter er **sterkere** enn van der Waals-krefter',
          },
        ],
        solution: 'a) Oksygen (δ−); b) Hydrogen (δ+); c) Sterkere',
        hints: ['Positive ioner → O (δ−), Negative ioner → H (δ+)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LØSNINGSENTALPI ==========
    {
      id: 'kjemi1-8-1-losningsentalpi',
      type: 'text',
      content: `## Løsningsentalpi

**Løsningsentalpi** (ΔHsoln) er energiendringen når 1 mol stoff løses i et løsningsmiddel.

### Energiendringer under løsning

Løsningsprosessen består av tre trinn:

**1. Bryte bindinger i det faste stoffet** (endoterm)
   - Krever energi
   - Eksempel: Bryte ionebindinger i NaCl

**2. Bryte bindinger i løsningsmiddelet** (endoterm)
   - Krever energi
   - Eksempel: Bryte H-bindinger mellom vannmolekyler

**3. Danne nye bindinger mellom stoff og løsningsmiddel** (eksoterm)
   - Frigjør energi
   - Eksempel: Danne ion-dipol-krefter (hydratisering)

### Netto løsningsentalpi

$$\\Delta H_{\\text{soln}} = \\Delta H_1 + \\Delta H_2 + \\Delta H_3$$

- **ΔHsoln > 0**: Endoterm løsningsprosess (løsningen avkjøles)
- **ΔHsoln < 0**: Eksoterm løsningsprosess (løsningen varmes opp)

### Eksempler

**NaCl i vann: ΔHsoln = +3,9 kJ/mol**
- Lett **endoterm**
- Løsningen avkjøles litt

**NaOH i vann: ΔHsoln = −44,5 kJ/mol**
- **Eksoterm**
- Løsningen varmes betydelig opp

**NH₄NO₃ i vann: ΔHsoln = +25,7 kJ/mol**
- Sterkt **endoterm**
- Løsningen blir kald (brukes i "instant ice packs")`,
    },

    {
      id: 'kjemi1-8-1-example-6',
      type: 'example',
      title: 'Eksempel 6: Løsningsentalpi',
      problem: `Når NH₄NO₃ løses i vann, blir løsningen kald. Når NaOH løses i vann, blir løsningen varm.

a) Er løsningen av NH₄NO₃ endoterm eller eksoterm?
b) Er løsningen av NaOH endoterm eller eksoterm?`,
      solution: `**Løsning:**

**a) NH₄NO₃:**

Løsningen blir **kald** → varme absorberes fra omgivelsene → **endoterm**.

$$\\Delta H_{\\text{soln}} > 0$$

**b) NaOH:**

Løsningen blir **varm** → varme frigjøres til omgivelsene → **eksoterm**.

$$\\Delta H_{\\text{soln}} < 0$$

**Svar:**
- a) Endoterm (ΔHsoln > 0)
- b) Eksoterm (ΔHsoln < 0)`,
    },

    {
      id: 'kjemi1-8-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-7',
        number: '8-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løsningsentalpi:',
        subTasks: [
          {
            label: 'a',
            task: 'Er løsningen av KCl (ΔHsoln = +17,2 kJ/mol) endoterm eller eksoterm?',
            solution: 'ΔHsoln > 0 → **Endoterm** (løsningen avkjøles)',
          },
          {
            label: 'b',
            task: 'Blir løsningen varmere eller kaldere når CaCl₂ (ΔHsoln = −81,3 kJ/mol) løses?',
            solution: 'ΔHsoln < 0 → Eksoterm → Løsningen blir **varmere**',
          },
          {
            label: 'c',
            task: 'Hvorfor blir løsningen kald når NH₄NO₃ løses i vann?',
            solution: 'Løsningen er **endoterm** (ΔHsoln > 0) → Varme absorberes fra omgivelsene → Løsningen blir **kald**',
          },
        ],
        solution: 'a) Endoterm; b) Varmere; c) Endoterm prosess',
        hints: ['ΔHsoln > 0 → endoterm (kald), ΔHsoln < 0 → eksoterm (varm)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-8',
        number: '8-8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende begreper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom hydratisering og solvatisering?',
            solution: '**Solvatisering**: Løsningsmiddelmolekyler omgir oppløst stoff (alle løsningsmidler)\n**Hydratisering**: Solvatisering der løsningsmiddelet er **vann**',
          },
          {
            label: 'b',
            task: 'Hva betyr "aq" i Ca²⁺(aq)?',
            solution: '"aq" = **aqua** (latin for vann) → Ionet er **oppløst i vann** (hydratisert)',
          },
          {
            label: 'c',
            task: 'Hvilke stoffer løses i vann?',
            solution: 'Vann (polart) løser: **Ioneforbindelser** og **polare molekyler** ("likt løser likt")',
          },
        ],
        solution: 'a) Hydratisering = solvatisering med vann; b) Oppløst i vann; c) Ioneforbindelser og polare molekyler',
        hints: ['Hydratisering er spesialtilfelle av solvatisering'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-9',
        number: '8-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Anvendelse av "likt løser likt":',
        subTasks: [
          {
            label: 'a',
            task: 'Vil sukker (polart) løses i vann eller benzen (upolart)?',
            solution: 'Sukker (polart) + vann (polart) → **Vann** ("likt løser likt")',
          },
          {
            label: 'b',
            task: 'Vil parafin (upolart) løses i vann eller heksan (upolart)?',
            solution: 'Parafin (upolart) + heksan (upolart) → **Heksan** ("likt løser likt")',
          },
          {
            label: 'c',
            task: 'Hvorfor blander ikke olje og vann seg?',
            solution: 'Olje er **upolart**, vann er **polart** → Ulik polaritet → Blander seg IKKE ("likt løser likt")',
          },
        ],
        solution: 'a) Vann; b) Heksan; c) Ulik polaritet',
        hints: ['"Likt løser likt" – polare løser polare, upolare løser upolare'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-10',
        number: '8-10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hydratisering av MgCl₂:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv likningen for løsning av MgCl₂ i vann.',
            solution: '$$\\text{MgCl}_2(\\text{s}) \\xrightarrow{\\text{H}_2\\text{O}} \\text{Mg}^{2+}(\\text{aq}) + 2\\text{Cl}^-(\\text{aq})$$',
          },
          {
            label: 'b',
            task: 'Beskriv hydratiseringen av Mg²⁺.',
            solution: 'Mg²⁺ (positivt) omgis av vannmolekyler med **O (δ−) vendt mot Mg²⁺**. Ion-dipol-krefter holder vannmolekylene.',
          },
          {
            label: 'c',
            task: 'Beskriv hydratiseringen av Cl⁻.',
            solution: 'Cl⁻ (negativt) omgis av vannmolekyler med **H (δ+) vendt mot Cl⁻**. Ion-dipol-krefter holder vannmolekylene.',
          },
        ],
        solution: 'a) Mg²⁺(aq) + 2Cl⁻(aq); b) O (δ−) mot Mg²⁺; c) H (δ+) mot Cl⁻',
        hints: ['Positive ioner → O (δ−), Negative ioner → H (δ+)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-11',
        number: '8-11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Energi i løsningsprosessen:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke to prosesser krever energi (endoterme)?',
            solution: '1) **Bryte bindinger i det faste stoffet**\n2) **Bryte bindinger i løsningsmiddelet**\nBegge krever energi (endoterme)',
          },
          {
            label: 'b',
            task: 'Hvilken prosess frigjør energi (eksoterm)?',
            solution: '**Danne nye bindinger** mellom stoff og løsningsmiddel (f.eks. ion-dipol-krefter) → Frigjør energi (eksoterm)',
          },
          {
            label: 'c',
            task: 'Når er ΔHsoln negativ (eksoterm)?',
            solution: 'ΔHsoln < 0 når **mer energi frigjøres** (trinn 3) enn det som kreves (trinn 1+2) → Netto eksoterm',
          },
        ],
        solution: 'a) Bryte bindinger i stoff og løsningsmiddel; b) Danne nye bindinger; c) Når mer energi frigjøres enn kreves',
        hints: ['Bryte bindinger = endoterm, Danne bindinger = eksoterm'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-12',
        number: '8-12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligning av løsningsentalpier:',
        subTasks: [
          {
            label: 'a',
            task: 'LiCl: ΔHsoln = −37,0 kJ/mol. Hva skjer med temperaturen?',
            solution: 'ΔHsoln < 0 → **Eksoterm** → Løsningen blir **varmere**',
          },
          {
            label: 'b',
            task: 'KNO₃: ΔHsoln = +34,9 kJ/mol. Hva skjer med temperaturen?',
            solution: 'ΔHsoln > 0 → **Endoterm** → Løsningen blir **kaldere**',
          },
          {
            label: 'c',
            task: 'Hvilket salt gir størst temperaturendring?',
            solution: 'LiCl: |−37,0| = 37,0 kJ/mol\nKNO₃: |+34,9| = 34,9 kJ/mol\n**LiCl** gir størst temperaturendring (37,0 > 34,9)',
          },
        ],
        solution: 'a) Varmere; b) Kaldere; c) LiCl',
        hints: ['Jo større |ΔHsoln|, jo større temperaturendring'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-1-ex-13',
        number: '8-13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor NaCl løses i vann, men ikke i heksan.',
            solution: 'NaCl er **ioneforbindelse** (polart). Vann er **polart** → "likt løser likt" → løses godt.\nHeksan er **upolart** → kan ikke bryte ionebindinger i NaCl → løses dårlig.',
          },
          {
            label: 'b',
            task: 'Hvorfor har vann høyere kokepunkt enn H₂S, selv om de er like strukturer?',
            solution: 'Vann har **sterke hydrogenbindinger** (O er svært elektronegativ).\nH₂S har **svakere dipol-dipol-krefter** (S er mindre elektronegativ).\nMer energi kreves for å bryte H-bindinger → vann har høyere kokepunkt.',
          },
          {
            label: 'c',
            task: 'Beskriv de tre kreftene som er viktige i løsningsprosessen.',
            solution: '1) **Ion-dipol-krefter**: Mellom ioner og polare molekyler (hydratisering)\n2) **Hydrogenbindinger**: Mellom vannmolekyler\n3) **Ionebindinger**: I det faste ionestoffet (må brytes)',
          },
        ],
        solution: 'a) Vann polart, heksan upolart; b) Vannets sterke H-bindinger; c) Ion-dipol, H-bindinger, ionebindinger',
        hints: ['"Likt løser likt", H-bindinger gir høy kokepunkt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 8.2: Løselighet og temperatur
// ============================================================================

const CHAPTER_KJEMI1_8_2: TextbookChapter = {
  id: 'kjemi1-8-2',
  courseId: 'kjemi1',
  chapterNumber: '8.2',
  title: 'Løselighet og temperatur',
  description: 'Lær om løselighet, temperaturens påvirkning, metning, krystallisering og løselighetskurver.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare begrepet løselighet',
    'beskrive temperaturens påvirkning på løselighet av faste stoffer',
    'forklare Henrys lov for gassers løselighet',
    'forstå metning og overmetning',
    'beskrive krystallisering',
    'tolke løselighetskurver',
  ],
  content: [
    // ========== LØSELIGHET ==========
    {
      id: 'kjemi1-8-2-intro',
      type: 'text',
      content: `## Løselighet

**Løselighet** er den maksimale mengden stoff som kan løses i en gitt mengde løsningsmiddel ved en bestemt temperatur.

### Enhet for løselighet

Løselighet angis vanligvis som:
- **g/100 g vann** (gram stoff per 100 g vann)
- **g/L** (gram stoff per liter løsning)
- **mol/L** (molaritet)

**Eksempel:**
Løseligheten av NaCl ved 20°C er 36 g/100 g vann.
Dette betyr at maks 36 g NaCl kan løses i 100 g vann ved 20°C.

### Mettet løsning

En **mettet løsning** inneholder maksimal mengde oppløst stoff ved en gitt temperatur.

- Tilsett mer stoff → faller ut som bunnsats (løses ikke)
- **Dynamisk likevekt** mellom oppløsning og utfelling

### Umettet løsning

En **umettet løsning** inneholder mindre enn maksimal mengde oppløst stoff.

- Mer stoff kan løses
- Ingen bunnsats

### Overmettet løsning

En **overmettet løsning** inneholder mer oppløst stoff enn normalt maksimum.

- **Ustabil** løsning
- Lett forstyrrelse → stoff krystalliserer raskt ut`,
    },

    {
      id: 'kjemi1-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Mettet løsning',
      problem: `Løseligheten av KNO₃ ved 20°C er 32 g/100 g vann.

a) Hvor mange gram KNO₃ kan løses i 200 g vann ved 20°C?
b) Hva skjer hvis vi tilsetter 80 g KNO₃ til 200 g vann ved 20°C?`,
      solution: `**Løsning:**

**a) Beregn maksimal mengde:**

Løselighet: 32 g/100 g vann

For 200 g vann:
$$\\text{Maks KNO}_3 = \\frac{32 \\text{ g}}{100 \\text{ g vann}} \\times 200 \\text{ g vann} = 64 \\text{ g}$$

**Svar:** Maksimalt **64 g** KNO₃ kan løses.

**b) 80 g tilsettes:**

- Maksimalt kan løses: 64 g
- Tilsettes: 80 g
- **Overskudd:** 80 − 64 = 16 g

**Svar:** 64 g løses, **16 g faller ut** som bunnsats.`,
    },

    {
      id: 'kjemi1-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-1',
        number: '8-14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løselighet av NaCl ved 20°C er 36 g/100 g vann:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye NaCl kan løses i 100 g vann?',
            solution: 'Løselighet = **36 g/100 g vann** → Maksimalt **36 g** NaCl',
          },
          {
            label: 'b',
            task: 'Hvor mye NaCl kan løses i 500 g vann?',
            solution: '$$\\frac{36 \\text{ g}}{100 \\text{ g}} \\times 500 \\text{ g} = 180 \\text{ g}$$',
          },
          {
            label: 'c',
            task: 'Hvis 200 g NaCl tilsettes 500 g vann, hvor mye faller ut?',
            solution: 'Maksimalt: 180 g, Tilsett: 200 g → Overskudd: 200 − 180 = **20 g** faller ut',
          },
        ],
        solution: 'a) 36 g; b) 180 g; c) 20 g',
        hints: ['Bruk forholdet: løselighet/100 g × antall g vann'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEMPERATURENS PÅVIRKNING ==========
    {
      id: 'kjemi1-8-2-temperatur',
      type: 'text',
      content: `## Temperaturens påvirkning på løselighet

### Løselighet av faste stoffer

For **de fleste** faste stoffer gjelder:

**Høyere temperatur → Høyere løselighet**

**Eksempel: KNO₃**
- Ved 20°C: 32 g/100 g vann
- Ved 60°C: 110 g/100 g vann
- Ved 100°C: 246 g/100 g vann

**Forklaring:**
- Høyere temperatur gir mer energi
- Lettere å bryte krystallgitter og hydratisere ioner
- Mer stoff kan løses

### Unntak

Noen få stoffer har **lavere** løselighet ved høyere temperatur:
- **Ce₂(SO₄)₃** (ceriumsulfat)
- Ca(OH)₂ (kalsiumhydroksid)

### Anvendelse

**Rekrystallisering:**
1. Løs stoff i varmt vann (høy løselighet)
2. Avkjøl løsningen (lav løselighet)
3. Overskudd krystalliserer ut → renere krystaller`,
    },

    {
      id: 'kjemi1-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Temperatur og løselighet',
      problem: `Løseligheten av KCl:
- Ved 20°C: 34 g/100 g vann
- Ved 80°C: 51 g/100 g vann

a) Hvor mye mer KCl kan løses i 200 g vann ved 80°C sammenlignet med 20°C?`,
      solution: `**Løsning:**

**Ved 20°C:**
$$\\text{Maks KCl} = \\frac{34 \\text{ g}}{100 \\text{ g}} \\times 200 \\text{ g} = 68 \\text{ g}$$

**Ved 80°C:**
$$\\text{Maks KCl} = \\frac{51 \\text{ g}}{100 \\text{ g}} \\times 200 \\text{ g} = 102 \\text{ g}$$

**Forskjell:**
$$102 \\text{ g} - 68 \\text{ g} = 34 \\text{ g}$$

**Svar:** **34 g** mer KCl kan løses ved 80°C.`,
    },

    {
      id: 'kjemi1-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-2',
        number: '8-15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løseligheten av sukker (C₁₂H₂₂O₁₁): 20°C: 204 g/100 g vann, 100°C: 487 g/100 g vann',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye sukker kan løses i 100 g vann ved 20°C?',
            solution: 'Løselighet ved 20°C: **204 g/100 g vann** → **204 g**',
          },
          {
            label: 'b',
            task: 'Hvor mye sukker kan løses i 100 g vann ved 100°C?',
            solution: 'Løselighet ved 100°C: **487 g/100 g vann** → **487 g**',
          },
          {
            label: 'c',
            task: 'Hvor mye mer sukker kan løses ved 100°C?',
            solution: '$$487 \\text{ g} - 204 \\text{ g} = 283 \\text{ g}$$',
          },
        ],
        solution: 'a) 204 g; b) 487 g; c) 283 g',
        hints: ['Høyere temperatur → høyere løselighet for faste stoffer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GASSERS LØSELIGHET ==========
    {
      id: 'kjemi1-8-2-gasser',
      type: 'text',
      content: `## Gassers løselighet

### Temperaturens påvirkning

For gasser gjelder **motsatt** av faste stoffer:

**Høyere temperatur → Lavere løselighet**

**Eksempel: O₂ i vann**
- Ved 0°C: 14,6 mg/L
- Ved 25°C: 8,3 mg/L
- Ved 100°C: ~0 mg/L (vann koker)

**Forklaring:**
- Høyere temperatur gir mer kinetisk energi
- Gassmolekyler lettere unnslipper løsningen
- Mindre gass forblir oppløst

### Henrys lov

**Henrys lov** beskriver sammenhengen mellom trykk og gassers løselighet:

$$C = k_H \\cdot P$$

hvor:
- **C** = konsentrasjon av oppløst gass
- **kH** = Henrys konstant (avhenger av gass og temperatur)
- **P** = partialtrykk av gassen

**Konklusjon:** Høyere trykk → Høyere løselighet av gass

### Anvendelser

**1. Karbonholdig vann:**
- CO₂ løses under høyt trykk
- Når flasken åpnes → trykk synker → CO₂ bobler ut

**2. Dykkersyke:**
- Høyt trykk under vann → mer N₂ løses i blodet
- Rask oppstigning → trykk synker → N₂ bobler ut → farlig

**3. Fiskedød om sommeren:**
- Varmt vann → mindre O₂ løst → fisk får ikke nok oksygen`,
    },

    {
      id: 'kjemi1-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Henrys lov',
      problem: `For CO₂ i vann ved 25°C er kH = 3,4 × 10⁻² mol/(L·atm).

a) Beregn konsentrasjonen av CO₂ ved 1,0 atm.
b) Beregn konsentrasjonen av CO₂ ved 3,0 atm (i brus).`,
      solution: `**Løsning:**

**a) Ved 1,0 atm:**

Henrys lov: $C = k_H \\cdot P$

$$C = 3{,}4 \\times 10^{-2} \\, \\text{mol/(L·atm)} \\times 1{,}0 \\, \\text{atm} = 3{,}4 \\times 10^{-2} \\, \\text{mol/L}$$

**Svar:** C = **0,034 mol/L**

**b) Ved 3,0 atm:**

$$C = 3{,}4 \\times 10^{-2} \\, \\text{mol/(L·atm)} \\times 3{,}0 \\, \\text{atm} = 1{,}02 \\times 10^{-1} \\, \\text{mol/L}$$

**Svar:** C = **0,102 mol/L**

**Konklusjon:** 3 ganger høyere trykk → 3 ganger mer CO₂ oppløst.`,
    },

    {
      id: 'kjemi1-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-3',
        number: '8-16',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gassers løselighet:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med løseligheten av O₂ i vann når temperaturen øker?',
            solution: 'Høyere temperatur → **Lavere** løselighet av gasser',
          },
          {
            label: 'b',
            task: 'Hva skjer med løseligheten av CO₂ når trykket øker?',
            solution: 'Henrys lov: Høyere trykk → **Høyere** løselighet av gasser',
          },
          {
            label: 'c',
            task: 'Hvorfor bobler brus når du åpner flasken?',
            solution: 'Flasken er under **høyt trykk** → mye CO₂ oppløst. Når du åpner → trykket synker → CO₂ bobler ut',
          },
        ],
        solution: 'a) Lavere løselighet; b) Høyere løselighet; c) Trykk synker, CO₂ unnslipper',
        hints: ['Gasser: Høy T → lav løselighet, Høyt P → høy løselighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-4',
        number: '8-17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Henrys lov for N₂ i vann ved 25°C: kH = 6,1 × 10⁻⁴ mol/(L·atm)',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn [N₂] ved 1,0 atm.',
            solution: '$$C = k_H \\cdot P = 6{,}1 \\times 10^{-4} \\times 1{,}0 = 6{,}1 \\times 10^{-4} \\, \\text{mol/L}$$',
          },
          {
            label: 'b',
            task: 'Beregn [N₂] ved 5,0 atm (dykkerdybde).',
            solution: '$$C = 6{,}1 \\times 10^{-4} \\times 5{,}0 = 3{,}05 \\times 10^{-3} \\, \\text{mol/L}$$',
          },
          {
            label: 'c',
            task: 'Hvor mange ganger mer N₂ er oppløst ved 5,0 atm?',
            solution: '$$\\frac{3{,}05 \\times 10^{-3}}{6{,}1 \\times 10^{-4}} = 5$$\nSvar: **5 ganger** mer (forhold 5:1)',
          },
        ],
        solution: 'a) 6,1 × 10⁻⁴ mol/L; b) 3,05 × 10⁻³ mol/L; c) 5 ganger',
        hints: ['C = kH · P, dobbelt trykk → dobbel konsentrasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== METNING OG OVERMETNING ==========
    {
      id: 'kjemi1-8-2-metning',
      type: 'text',
      content: `## Metning og overmetning

### Mettet løsning

En **mettet løsning** er i **dynamisk likevekt**:

$$\\text{Oppløsning} \\rightleftharpoons \\text{Krystallisering}$$

- Hastigheten av oppløsning = Hastigheten av krystallisering
- Ingen netto endring i mengde oppløst stoff
- Maksimal mengde stoff oppløst

**Eksempel:** Sukker i vann ved 20°C (mettet)
- Sukker løses opp
- Samtidig krystalliserer sukker ut
- Netto: Ingen endring

### Umettet løsning

En **umettet løsning** inneholder **mindre** enn maksimal mengde:

- Mer stoff kan løses
- Ingen krystallisering
- Ingen bunnsats

### Overmettet løsning

En **overmettet løsning** inneholder **mer** enn maksimal mengde:

- Ustabil tilstand
- Krever forsiktig håndtering
- Minste forstyrrelse → rask krystallisering

**Hvordan lage overmettet løsning:**
1. Løs stoff i varmt vann (mettet løsning)
2. Avkjøl **langsomt og forsiktig** (ikke rør)
3. Løseligheten synker, men stoffet krystalliserer ikke ut
4. **Overmettet** løsning dannes

**Forstyrrelse:**
- Tilsett ett lite krystall ("frøkrystall")
- Ryst løsningen
- Rip i beholderen
→ Rask krystallisering!`,
    },

    {
      id: 'kjemi1-8-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Overmettet løsning',
      problem: `Løseligheten av natriumacetat (NaC₂H₃O₂):
- Ved 80°C: 170 g/100 g vann
- Ved 20°C: 46 g/100 g vann

100 g natriumacetat løses i 100 g vann ved 80°C. Løsningen avkjøles forsiktig til 20°C.

a) Er løsningen mettet ved 80°C?
b) Er løsningen mettet, umettet eller overmettet ved 20°C?
c) Hva skjer hvis et lite krystall tilsettes ved 20°C?`,
      solution: `**Løsning:**

**a) Ved 80°C:**

Løselighet: 170 g/100 g vann
Oppløst: 100 g

100 g < 170 g → **Umettet** ved 80°C

**b) Ved 20°C:**

Løselighet: 46 g/100 g vann
Oppløst: 100 g (fra varmt vann)

100 g > 46 g → **Overmettet** ved 20°C

**c) Tilsett krystall:**

Overskudd: 100 − 46 = 54 g

Krystallet fungerer som "frøkrystall" → **54 g krystalliserer raskt ut**

**Svar:**
- a) Umettet
- b) Overmettet
- c) 54 g krystalliserer ut`,
    },

    {
      id: 'kjemi1-8-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-5',
        number: '8-18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løseligheten av KNO₃: 60°C: 110 g/100 g vann, 20°C: 32 g/100 g vann',
        subTasks: [
          {
            label: 'a',
            task: '50 g KNO₃ i 100 g vann ved 60°C. Mettet, umettet eller overmettet?',
            solution: '50 g < 110 g (løselighet) → **Umettet**',
          },
          {
            label: 'b',
            task: 'Løsningen fra a) avkjøles til 20°C. Mettet, umettet eller overmettet?',
            solution: '50 g > 32 g (løselighet ved 20°C) → **Overmettet** (hvis krystallisering ikke skjer)',
          },
          {
            label: 'c',
            task: 'Hvor mye KNO₃ kan falle ut ved 20°C?',
            solution: 'Overskudd: 50 − 32 = **18 g** kan krystallisere ut',
          },
        ],
        solution: 'a) Umettet; b) Overmettet; c) 18 g',
        hints: ['Sammenlign oppløst mengde med løselighet ved gitt temperatur'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KRYSTALLISERING ==========
    {
      id: 'kjemi1-8-2-krystallisering',
      type: 'text',
      content: `## Krystallisering

**Krystallisering** er prosessen der oppløst stoff danner faste krystaller.

### Når skjer krystallisering?

Krystallisering skjer når:
1. Løsningen blir **mettet** (eller overmettet)
2. Temperaturen **senkes** (løseligheten synker)
3. Løsningsmiddelet **fordamper** (konsentrasjonen øker)

### Rekrystallisering (rensing)

**Rekrystallisering** brukes for å rense stoffer:

**Fremgangsmåte:**
1. **Løs** urene stoffet i minst mulig varmt løsningsmiddel
   - Hovedstoffet løses (høy løselighet ved høy T)
   - Urenheter løses delvis

2. **Filtrer** den varme løsningen
   - Uløste urenheter fjernes

3. **Avkjøl** løsningen langsomt
   - Hovedstoffet krystalliserer ut (lav løselighet ved lav T)
   - Urenheter forblir i løsning (hvis de har høyere løselighet)

4. **Filtrer** krystallene
   - Rene krystaller isoleres

**Resultat:** Renere stoff

### Faktorer som påvirker krystallstørrelse

- **Langsom avkjøling** → Store, rene krystaller
- **Rask avkjøling** → Små, urene krystaller
- **Ingen forstyrrelse** → Større krystaller`,
    },

    {
      id: 'kjemi1-8-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Rekrystallisering',
      problem: `Et uren prov av KNO₃ (med NaCl som urenhet) skal renses ved rekrystallisering.

Løselighet ved 60°C:
- KNO₃: 110 g/100 g vann
- NaCl: 37 g/100 g vann

Løselighet ved 20°C:
- KNO₃: 32 g/100 g vann
- NaCl: 36 g/100 g vann

Forklar hvorfor rekrystallisering fungerer.`,
      solution: `**Løsning:**

**1. Løs i varmt vann (60°C):**
- Både KNO₃ og NaCl løses

**2. Avkjøl til 20°C:**

**KNO₃:**
- Løselighet synker fra 110 → 32 g/100 g vann
- **Stor endring** (−78 g)
- **Mye KNO₃ krystalliserer ut**

**NaCl:**
- Løselighet synker fra 37 → 36 g/100 g vann
- **Liten endring** (−1 g)
- **Nesten all NaCl forblir i løsning**

**3. Filtrer krystallene:**
- Rene KNO₃-krystaller isoleres
- NaCl forblir i filtrat (løsning)

**Svar:** KNO₃ har stor endring i løselighet → krystalliserer ut. NaCl har liten endring → forblir i løsning.`,
    },

    {
      id: 'kjemi1-8-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-6',
        number: '8-19',
        type: 'classic',
        difficulty: 'lett',
        task: 'Krystallisering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er krystallisering?',
            solution: 'Prosessen der **oppløst stoff danner faste krystaller** fra en løsning',
          },
          {
            label: 'b',
            task: 'Hva favoriserer krystallisering?',
            solution: '1) **Senke temperaturen** (løselighet synker)\n2) **Fordampe løsningsmiddel** (konsentrasjon øker)\n3) **Mettet/overmettet** løsning',
          },
          {
            label: 'c',
            task: 'Hvordan får du store krystaller?',
            solution: '**Langsom avkjøling** + **ingen forstyrrelse** → Store, rene krystaller',
          },
        ],
        solution: 'a) Danner faste krystaller; b) Senk T, fordamp løsningsmiddel; c) Langsom avkjøling',
        hints: ['Langsom prosess → store krystaller'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LØSELIGHETSKURVER ==========
    {
      id: 'kjemi1-8-2-kurver',
      type: 'text',
      content: `## Løselighetskurver

En **løselighetskurve** viser sammenhengen mellom løselighet og temperatur.

### Typisk løselighetskurve (faste stoffer)

**X-akse:** Temperatur (°C)
**Y-akse:** Løselighet (g/100 g vann)

**Kurven:**
- **Stigende kurve** → Løselighet øker med temperatur (vanligst)
- **Flatt kurve** → Løselighet påvirkes lite av temperatur (sjeldent)
- **Synkende kurve** → Løselighet synker med temperatur (meget sjeldent)

### Tolkning av løselighetskurver

**På kurven:**
- Løsningen er **mettet**

**Over kurven:**
- Løsningen er **overmettet** (ustabil)

**Under kurven:**
- Løsningen er **umettet**

### Sammenligning av stoffer

Løselighetskurver for ulike stoffer:

- **KNO₃** → Bratt stigende (stor temperaturavhengighet)
- **NaCl** → Nesten flat (liten temperaturavhengighet)
- **Ce₂(SO₄)₃** → Synkende (unormalt)

**Anvendelse:** Velg stoff med størst endring i løselighet for rekrystallisering.`,
    },

    {
      id: 'kjemi1-8-2-example-6',
      type: 'example',
      title: 'Eksempel 6: Tolkning av løselighetskurve',
      problem: `Fra en løselighetskurve:

KNO₃:
- 20°C: 32 g/100 g vann
- 60°C: 110 g/100 g vann

En løsning inneholder 80 g KNO₃ i 100 g vann ved 60°C.

a) Er løsningen mettet, umettet eller overmettet ved 60°C?
b) Hva skjer når løsningen avkjøles til 20°C?`,
      solution: `**Løsning:**

**a) Ved 60°C:**

Løselighet: 110 g/100 g vann
Oppløst: 80 g

80 g < 110 g → **Under kurven** → **Umettet**

**b) Avkjøles til 20°C:**

Løselighet: 32 g/100 g vann
Oppløst: 80 g (opprinnelig)

80 g > 32 g → **Over kurven** → **Overmettet**

Overskudd: 80 − 32 = 48 g

**Svar:**
- a) Umettet (under kurven)
- b) 48 g KNO₃ vil krystallisere ut`,
    },

    {
      id: 'kjemi1-8-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-7',
        number: '8-20',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fra løselighetskurve for sukker: 20°C: 204 g/100 g, 60°C: 287 g/100 g',
        subTasks: [
          {
            label: 'a',
            task: '250 g sukker i 100 g vann ved 60°C. Mettet, umettet eller overmettet?',
            solution: '250 g < 287 g (løselighet) → **Under kurven** → **Umettet**',
          },
          {
            label: 'b',
            task: 'Løsningen avkjøles til 20°C. Hva skjer?',
            solution: '250 g > 204 g (løselighet ved 20°C) → Overskudd: 250 − 204 = **46 g krystalliserer ut**',
          },
          {
            label: 'c',
            task: 'Hvilken prosent av sukkeret krystalliserer ut?',
            solution: '$$\\frac{46 \\text{ g}}{250 \\text{ g}} \\times 100\\% = 18{,}4\\%$$',
          },
        ],
        solution: 'a) Umettet; b) 46 g krystalliserer; c) 18,4%',
        hints: ['Sammenlign med løselighet ved hver temperatur'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-8',
        number: '8-21',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende begreper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det at en løsning er mettet?',
            solution: 'En **mettet løsning** inneholder **maksimal mengde** oppløst stoff ved en gitt temperatur',
          },
          {
            label: 'b',
            task: 'Hva er en overmettet løsning?',
            solution: 'En **overmettet løsning** inneholder **mer** enn maksimal mengde (ustabil)',
          },
          {
            label: 'c',
            task: 'Hva viser en løselighetskurve?',
            solution: 'Sammenhengen mellom **løselighet** og **temperatur**',
          },
        ],
        solution: 'a) Maksimal mengde oppløst; b) Mer enn maksimum (ustabil); c) Løselighet vs temperatur',
        hints: ['Mettet = maksimum, overmettet = mer enn maksimum'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-9',
        number: '8-22',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligning av stoffer:',
        subTasks: [
          {
            label: 'a',
            task: 'KNO₃: 20°C: 32 g/100 g, 80°C: 169 g/100 g. Endring?',
            solution: 'Endring: 169 − 32 = **137 g/100 g** (stor endring)',
          },
          {
            label: 'b',
            task: 'NaCl: 20°C: 36 g/100 g, 80°C: 38 g/100 g. Endring?',
            solution: 'Endring: 38 − 36 = **2 g/100 g** (liten endring)',
          },
          {
            label: 'c',
            task: 'Hvilket stoff er best for rekrystallisering?',
            solution: '**KNO₃** har **størst endring** i løselighet → best for rekrystallisering',
          },
        ],
        solution: 'a) 137 g/100 g; b) 2 g/100 g; c) KNO₃',
        hints: ['Størst endring → best for rekrystallisering'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-10',
        number: '8-23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løseligheten av KClO₃: 30°C: 10 g/100 g, 90°C: 52 g/100 g',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye KClO₃ kan løses i 250 g vann ved 90°C?',
            solution: '$$\\frac{52 \\text{ g}}{100 \\text{ g}} \\times 250 \\text{ g} = 130 \\text{ g}$$',
          },
          {
            label: 'b',
            task: '100 g KClO₃ løses i 250 g vann ved 90°C. Avkjøles til 30°C. Hvor mye krystalliserer?',
            solution: 'Ved 30°C: $\\frac{10}{100} \\times 250 = 25$ g kan løses.\nOverskudd: 100 − 25 = **75 g** krystalliserer',
          },
          {
            label: 'c',
            task: 'Hvilket utbytte (%) får du av krystaller?',
            solution: '$$\\frac{75 \\text{ g}}{100 \\text{ g}} \\times 100\\% = 75\\%$$',
          },
        ],
        solution: 'a) 130 g; b) 75 g; c) 75%',
        hints: ['Beregn løselighet ved hver temperatur, finn overskudd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-11',
        number: '8-24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Henrys lov for O₂ i vann ved 25°C: kH = 1,3 × 10⁻³ mol/(L·atm)',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn [O₂] ved 1,0 atm (atmosfærisk trykk).',
            solution: '$$C = k_H \\cdot P = 1{,}3 \\times 10^{-3} \\times 1{,}0 = 1{,}3 \\times 10^{-3} \\, \\text{mol/L}$$',
          },
          {
            label: 'b',
            task: 'Hvor mange gram O₂ er oppløst i 1,0 L vann ved 1,0 atm? (M(O₂) = 32 g/mol)',
            solution: '$$m = n \\cdot M = 1{,}3 \\times 10^{-3} \\, \\text{mol} \\times 32 \\, \\text{g/mol} = 0{,}042 \\text{ g} = 42 \\text{ mg}$$',
          },
          {
            label: 'c',
            task: 'Hva skjer med [O₂] hvis temperaturen øker?',
            solution: 'Høyere temperatur → **Lavere** løselighet av gasser → **[O₂] synker**',
          },
        ],
        solution: 'a) 1,3 × 10⁻³ mol/L; b) 42 mg; c) [O₂] synker',
        hints: ['C = kH · P, m = n · M, Høy T → lav løselighet (gasser)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-12',
        number: '8-25',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligning av faste stoffer og gasser:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med løseligheten av NaCl når temperaturen øker?',
            solution: 'NaCl er **fast stoff** → Høyere temperatur → **Høyere** løselighet',
          },
          {
            label: 'b',
            task: 'Hva skjer med løseligheten av CO₂ når temperaturen øker?',
            solution: 'CO₂ er **gass** → Høyere temperatur → **Lavere** løselighet',
          },
          {
            label: 'c',
            task: 'Hvorfor er det vanskelig for fisk å leve i varmt vann?',
            solution: 'Varmt vann → **Mindre O₂ oppløst** → Fisk får ikke nok oksygen → Fiskedød',
          },
        ],
        solution: 'a) Høyere løselighet; b) Lavere løselighet; c) Mindre O₂ i varmt vann',
        hints: ['Faste stoffer: Høy T → høy løselighet, Gasser: Høy T → lav løselighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-13',
        number: '8-26',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rekrystallisering av aspirin:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor løses aspirin i varmt vann først?',
            solution: 'Høy temperatur → **Høy løselighet** → Mer aspirin kan løses i mindre vann',
          },
          {
            label: 'b',
            task: 'Hvorfor filtreres den varme løsningen?',
            solution: 'For å fjerne **uløste urenheter** før avkjøling',
          },
          {
            label: 'c',
            task: 'Hvorfor krystalliserer aspirin ut ved avkjøling?',
            solution: 'Lav temperatur → **Lav løselighet** → Overskudd aspirin → **Krystalliserer ut**',
          },
          {
            label: 'd',
            task: 'Hvorfor gir langsom avkjøling renere krystaller?',
            solution: 'Langsom avkjøling → **Store, rene krystaller** (urenheter ekskluderes bedre)',
          },
        ],
        solution: 'a) Høy løselighet i varmt vann; b) Fjerne uløste urenheter; c) Løseligheten synker; d) Store, rene krystaller',
        hints: ['Høy T → høy løselighet, Lav T → lav løselighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-8-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-8-2-ex-14',
        number: '8-27',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor dykkere må stige langsomt opp.',
            solution: 'Høyt trykk under vann → Mye N₂ oppløst i blodet (Henrys lov).\nRask oppstigning → Trykk synker raskt → N₂ bobler ut → **Dykkersyke**.\nLangsom oppstigning → N₂ pustes ut gradvis → Trygt.',
          },
          {
            label: 'b',
            task: 'Hvorfor varmes brus opp raskere enn flat vann?',
            solution: 'Brus inneholder oppløst **CO₂** (gass).\nNår temperaturen øker → CO₂-løselighet synker → CO₂ bobler ut → **Krever energi** → Varmes opp raskere.',
          },
          {
            label: 'c',
            task: 'Forklar dynamisk likevekt i en mettet løsning.',
            solution: 'I en mettet løsning:\n**Oppløsning** ⇌ **Krystallisering**\nHastighet av oppløsning = Hastighet av krystallisering → **Ingen netto endring** → Dynamisk likevekt',
          },
        ],
        solution: 'a) Unngå N₂-bobler (dykkersyke); b) CO₂ unnslipper (endoterm); c) Oppløsning = Krystallisering (likevekt)',
        hints: ['Henrys lov, gasser unnslipper ved høy T, dynamisk likevekt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

// ============================================================================
// Kjemi 1 Kapittel 9.1: Syrer og baser - definisjoner
// ============================================================================

const CHAPTER_KJEMI1_9_1: TextbookChapter = {
  id: 'kjemi1-9-1',
  courseId: 'kjemi1',
  chapterNumber: '9.1',
  title: 'Syrer og baser - definisjoner',
  description: 'Lær Brønsted-Lowry teori, protolyse, konjugerte syre-base-par og amfotere stoffer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare Brønsted-Lowry teori for syrer og baser',
    'identifisere protolyse (protonoverføring)',
    'finne konjugerte syre-base-par',
    'forstå amfotere stoffer',
    'skille mellom sterke og svake syrer/baser',
  ],
  content: [
    // ========== BRØNSTED-LOWRY TEORI ==========
    {
      id: 'kjemi1-9-1-intro',
      type: 'text',
      content: `## Brønsted-Lowry teori

**Syrer** og **baser** er stoffer som kan gi fra seg eller ta imot protoner (H⁺).

### Definisjoner

- **Syre**: Et stoff som **gir fra seg** et proton (H⁺-donor)
- **Base**: Et stoff som **tar imot** et proton (H⁺-akseptor)

### Protolyse
Når en syre reagerer med en base, skjer en **protonoverføring** (protolyse):

$$\\text{Syre}_1 + \\text{Base}_2 \\rightleftharpoons \\text{Base}_1 + \\text{Syre}_2$$

**Eksempel:** Saltsyre (HCl) reagerer med vann (H₂O):

$$\\text{HCl} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{Cl}^- + \\text{H}_3\\text{O}^+$$

- HCl gir fra seg H⁺ → **syre**
- H₂O tar imot H⁺ → **base**
- Cl⁻ kan ta imot H⁺ → **base** (konjugert base til HCl)
- H₃O⁺ kan gi fra seg H⁺ → **syre** (konjugert syre til H₂O)`,
    },

    {
      id: 'kjemi1-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifiser syre og base',
      problem: `Betrakt reaksjonen:

$$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$$

a) Hvilke stoffer er syrer og baser?
b) Hva er konjugerte syre-base-par?`,
      solution: `**Løsning:**

a) **Venstre side:**
   - H₂O gir fra seg H⁺ → **syre**
   - NH₃ tar imot H⁺ → **base**

   **Høyre side:**
   - NH₄⁺ kan gi fra seg H⁺ → **syre** (konjugert til NH₃)
   - OH⁻ kan ta imot H⁺ → **base** (konjugert til H₂O)

b) **Konjugerte par:**
   - H₂O (syre) ⇌ OH⁻ (base)
   - NH₃ (base) ⇌ NH₄⁺ (syre)`,
    },

    {
      id: 'kjemi1-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-1',
        number: '9-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser syre og base i følgende reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'HNO₃ + H₂O → NO₃⁻ + H₃O⁺',
            solution: 'HNO₃ gir fra seg H⁺ → **syre**. H₂O tar imot H⁺ → **base**.',
          },
          {
            label: 'b',
            task: 'CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺',
            solution: 'CH₃COOH gir fra seg H⁺ → **syre**. H₂O tar imot H⁺ → **base**.',
          },
          {
            label: 'c',
            task: 'H₂O + CO₃²⁻ ⇌ HCO₃⁻ + OH⁻',
            solution: 'H₂O gir fra seg H⁺ → **syre**. CO₃²⁻ tar imot H⁺ → **base**.',
          },
        ],
        solution: 'a) HNO₃ (syre), H₂O (base); b) CH₃COOH (syre), H₂O (base); c) H₂O (syre), CO₃²⁻ (base)',
        hints: ['Syre gir fra seg H⁺, base tar imot H⁺'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KONJUGERTE SYRE-BASE-PAR ==========
    {
      id: 'kjemi1-9-1-konjugerte',
      type: 'text',
      content: `## Konjugerte syre-base-par

Når en syre gir fra seg et proton, blir den til en **konjugert base**:

$$\\text{Syre} \\xrightarrow{-H^+} \\text{Konjugert base}$$

Når en base tar imot et proton, blir den til en **konjugert syre**:

$$\\text{Base} \\xrightarrow{+H^+} \\text{Konjugert syre}$$

### Eksempler på konjugerte par

| Syre | Konjugert base | Forskjell |
|------|----------------|-----------|
| HCl | Cl⁻ | −H⁺ |
| H₂SO₄ | HSO₄⁻ | −H⁺ |
| H₃O⁺ | H₂O | −H⁺ |
| NH₄⁺ | NH₃ | −H⁺ |
| H₂O | OH⁻ | −H⁺ |

**Merk:** Et konjugert par skiller seg med **nøyaktig én H⁺**.`,
    },

    {
      id: 'kjemi1-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Finn konjugerte par',
      problem: `Betrakt reaksjonen:

$$\\text{H}_2\\text{SO}_4 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HSO}_4^- + \\text{H}_3\\text{O}^+$$

Identifiser alle konjugerte syre-base-par.`,
      solution: `**Løsning:**

**Par 1:** H₂SO₄ (syre) ⇌ HSO₄⁻ (konjugert base)
   - H₂SO₄ gir fra seg H⁺ → blir til HSO₄⁻

**Par 2:** H₂O (base) ⇌ H₃O⁺ (konjugert syre)
   - H₂O tar imot H⁺ → blir til H₃O⁺

**Svar:** To konjugerte par: (H₂SO₄/HSO₄⁻) og (H₂O/H₃O⁺)`,
    },

    {
      id: 'kjemi1-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-2',
        number: '9-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den konjugerte basen til hver syre:',
        subTasks: [
          {
            label: 'a',
            task: 'HNO₃',
            solution: 'HNO₃ − H⁺ = **NO₃⁻**',
          },
          {
            label: 'b',
            task: 'H₃PO₄',
            solution: 'H₃PO₄ − H⁺ = **H₂PO₄⁻**',
          },
          {
            label: 'c',
            task: 'NH₄⁺',
            solution: 'NH₄⁺ − H⁺ = **NH₃**',
          },
          {
            label: 'd',
            task: 'HCO₃⁻',
            solution: 'HCO₃⁻ − H⁺ = **CO₃²⁻**',
          },
        ],
        solution: 'a) NO₃⁻; b) H₂PO₄⁻; c) NH₃; d) CO₃²⁻',
        hints: ['Fjern ett H⁺ fra syren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-3',
        number: '9-3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den konjugerte syren til hver base:',
        subTasks: [
          {
            label: 'a',
            task: 'OH⁻',
            solution: 'OH⁻ + H⁺ = **H₂O**',
          },
          {
            label: 'b',
            task: 'NH₃',
            solution: 'NH₃ + H⁺ = **NH₄⁺**',
          },
          {
            label: 'c',
            task: 'CO₃²⁻',
            solution: 'CO₃²⁻ + H⁺ = **HCO₃⁻**',
          },
          {
            label: 'd',
            task: 'H₂O',
            solution: 'H₂O + H⁺ = **H₃O⁺**',
          },
        ],
        solution: 'a) H₂O; b) NH₄⁺; c) HCO₃⁻; d) H₃O⁺',
        hints: ['Legg til ett H⁺ til basen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== AMFOTERE STOFFER ==========
    {
      id: 'kjemi1-9-1-amfotere',
      type: 'text',
      content: `## Amfotere stoffer

Et **amfotert** stoff kan opptre både som syre og base, avhengig av hva det reagerer med.

### Eksempel: Vann (H₂O)

**Som base** (tar imot H⁺):
$$\\text{HCl} + \\text{H}_2\\text{O} \\rightarrow \\text{Cl}^- + \\text{H}_3\\text{O}^+$$

**Som syre** (gir fra seg H⁺):
$$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{NH}_4^+ + \\text{OH}^-$$

### Andre amfotere stoffer

- **HCO₃⁻** (hydrogenkarbonat)
  - Som base: HCO₃⁻ + H⁺ → H₂CO₃
  - Som syre: HCO₃⁻ → CO₃²⁻ + H⁺

- **HSO₄⁻** (hydrogensulfat)
  - Som base: HSO₄⁻ + H⁺ → H₂SO₄
  - Som syre: HSO₄⁻ → SO₄²⁻ + H⁺

- **H₂PO₄⁻** (dihydrogenfosfat)
  - Som base: H₂PO₄⁻ + H⁺ → H₃PO₄
  - Som syre: H₂PO₄⁻ → HPO₄²⁻ + H⁺`,
    },

    {
      id: 'kjemi1-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Amfotere stoffer',
      problem: `Vis at HCO₃⁻ er amfotert ved å skrive to reaksjoner:
a) HCO₃⁻ som syre
b) HCO₃⁻ som base`,
      solution: `**Løsning:**

a) **HCO₃⁻ som syre** (gir fra seg H⁺):
   $$\\text{HCO}_3^- + \\text{OH}^- \\rightarrow \\text{CO}_3^{2-} + \\text{H}_2\\text{O}$$

b) **HCO₃⁻ som base** (tar imot H⁺):
   $$\\text{HCO}_3^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{H}_2\\text{CO}_3 + \\text{H}_2\\text{O}$$

HCO₃⁻ kan både gi fra seg og ta imot H⁺ → **amfotert**.`,
    },

    {
      id: 'kjemi1-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-4',
        number: '9-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Er følgende stoffer amfotere? Begrunn.',
        subTasks: [
          {
            label: 'a',
            task: 'H₂O',
            solution: 'Ja, H₂O kan både gi fra seg H⁺ (→ OH⁻) og ta imot H⁺ (→ H₃O⁺). **Amfotert**.',
          },
          {
            label: 'b',
            task: 'HCl',
            solution: 'Nei, HCl kan kun gi fra seg H⁺ (→ Cl⁻). Cl⁻ er en svak base. **Ikke amfotert** (kun syre).',
          },
          {
            label: 'c',
            task: 'HSO₄⁻',
            solution: 'Ja, HSO₄⁻ kan både gi fra seg H⁺ (→ SO₄²⁻) og ta imot H⁺ (→ H₂SO₄). **Amfotert**.',
          },
          {
            label: 'd',
            task: 'OH⁻',
            solution: 'Nei, OH⁻ kan kun ta imot H⁺ (→ H₂O). **Ikke amfotert** (kun base).',
          },
        ],
        solution: 'a) Ja (amfotert); b) Nei (kun syre); c) Ja (amfotert); d) Nei (kun base)',
        hints: ['Amfotere stoffer kan både gi fra seg og ta imot H⁺'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== STERKE VS SVAKE SYRER OG BASER ==========
    {
      id: 'kjemi1-9-1-sterke-svake',
      type: 'text',
      content: `## Sterke vs svake syrer og baser

### Sterke syrer
**Sterke syrer** protolyserer **fullstendig** i vann (100% reaksjon):

$$\\text{HCl} + \\text{H}_2\\text{O} \\rightarrow \\text{Cl}^- + \\text{H}_3\\text{O}^+ \\quad (100\\%)$$

**Eksempler på sterke syrer:**
- HCl (saltsyre)
- HNO₃ (salpetersyre)
- H₂SO₄ (svovelsyre, første proton)
- HBr (bromhydrogensyre)
- HI (jodhydrogensyre)
- HClO₄ (perklorinsyre)

### Svake syrer
**Svake syrer** protolyserer **delvis** i vann (<5% reaksjon):

$$\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+ \\quad (1{,}3\\%)$$

**Eksempler på svake syrer:**
- CH₃COOH (eddiksyre)
- H₂CO₃ (karbonsyre)
- H₃PO₄ (fosforsyre)
- HF (fluorhydrogensyre)

### Sterke baser
**Sterke baser** protolyserer **fullstendig** i vann:

$$\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^- \\quad (100\\%)$$

**Eksempler:**
- NaOH (natriumhydroksid)
- KOH (kaliumhydroksid)
- Ba(OH)₂ (bariumhydroksid)

### Svake baser
**Svake baser** protolyserer **delvis** i vann:

$$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^- \\quad (1{,}3\\%)$$

**Eksempler:**
- NH₃ (ammoniakk)
- CH₃NH₂ (metylamin)`,
    },

    {
      id: 'kjemi1-9-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Sterke vs svake syrer',
      problem: `Du har to løsninger med samme konsentrasjon (0,1 M):
- Løsning A: HCl (sterk syre)
- Løsning B: CH₃COOH (svak syre)

Hvilken har høyest konsentrasjon av H₃O⁺?`,
      solution: `**Løsning:**

**HCl** (sterk syre):
$$\\text{HCl} + \\text{H}_2\\text{O} \\rightarrow \\text{Cl}^- + \\text{H}_3\\text{O}^+ \\quad (100\\%)$$
[H₃O⁺] ≈ 0,1 M

**CH₃COOH** (svak syre):
$$\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+ \\quad (1{,}3\\%)$$
[H₃O⁺] ≈ 0,0013 M

**Svar:** HCl har **mye høyere** [H₃O⁺] fordi den protolyserer fullstendig.`,
    },

    {
      id: 'kjemi1-9-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-5',
        number: '9-5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Klassifiser følgende som sterk eller svak syre/base:',
        subTasks: [
          {
            label: 'a',
            task: 'HNO₃',
            solution: 'HNO₃ protolyserer fullstendig i vann → **Sterk syre**',
          },
          {
            label: 'b',
            task: 'NH₃',
            solution: 'NH₃ protolyserer delvis i vann (ca. 1%) → **Svak base**',
          },
          {
            label: 'c',
            task: 'KOH',
            solution: 'KOH protolyserer fullstendig i vann → **Sterk base**',
          },
          {
            label: 'd',
            task: 'H₂CO₃',
            solution: 'H₂CO₃ protolyserer delvis i vann → **Svak syre**',
          },
        ],
        solution: 'a) Sterk syre; b) Svak base; c) Sterk base; d) Svak syre',
        hints: ['Sterke protolyserer 100%, svake <5%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-6',
        number: '9-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv protolysereaksjoner og identifiser konjugerte par:',
        subTasks: [
          {
            label: 'a',
            task: 'HNO₃ i vann',
            solution: '$$\\text{HNO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{NO}_3^- + \\text{H}_3\\text{O}^+$$\nPar: (HNO₃/NO₃⁻) og (H₂O/H₃O⁺)',
          },
          {
            label: 'b',
            task: 'NH₃ i vann',
            solution: '$$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$$\nPar: (NH₃/NH₄⁺) og (H₂O/OH⁻)',
          },
          {
            label: 'c',
            task: 'H₂SO₄ i vann (første proton)',
            solution: '$$\\text{H}_2\\text{SO}_4 + \\text{H}_2\\text{O} \\rightarrow \\text{HSO}_4^- + \\text{H}_3\\text{O}^+$$\nPar: (H₂SO₄/HSO₄⁻) og (H₂O/H₃O⁺)',
          },
        ],
        solution: 'a) HNO₃ + H₂O → NO₃⁻ + H₃O⁺; b) NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; c) H₂SO₄ + H₂O → HSO₄⁻ + H₃O⁺',
        hints: ['Sterk syre: →, Svak syre/base: ⇌'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-7',
        number: '9-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser konjugerte syre-base-par i følgende reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'H₂S + H₂O ⇌ HS⁻ + H₃O⁺',
            solution: 'Par 1: (H₂S/HS⁻), Par 2: (H₂O/H₃O⁺)',
          },
          {
            label: 'b',
            task: 'HPO₄²⁻ + H₂O ⇌ H₂PO₄⁻ + OH⁻',
            solution: 'Par 1: (HPO₄²⁻/H₂PO₄⁻), Par 2: (H₂O/OH⁻)',
          },
          {
            label: 'c',
            task: 'CH₃COOH + NH₃ ⇌ CH₃COO⁻ + NH₄⁺',
            solution: 'Par 1: (CH₃COOH/CH₃COO⁻), Par 2: (NH₃/NH₄⁺)',
          },
        ],
        solution: 'a) (H₂S/HS⁻), (H₂O/H₃O⁺); b) (HPO₄²⁻/H₂PO₄⁻), (H₂O/OH⁻); c) (CH₃COOH/CH₃COO⁻), (NH₃/NH₄⁺)',
        hints: ['Finn par som skiller seg med én H⁺'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-8',
        number: '9-8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor følgende stoffer er amfotere:',
        subTasks: [
          {
            label: 'a',
            task: 'H₂PO₄⁻',
            solution: 'Som syre: H₂PO₄⁻ → HPO₄²⁻ + H⁺\nSom base: H₂PO₄⁻ + H⁺ → H₃PO₄\n**Amfotert** fordi den kan både gi fra seg og ta imot H⁺.',
          },
          {
            label: 'b',
            task: 'HSO₃⁻',
            solution: 'Som syre: HSO₃⁻ → SO₃²⁻ + H⁺\nSom base: HSO₃⁻ + H⁺ → H₂SO₃\n**Amfotert** fordi den kan både gi fra seg og ta imot H⁺.',
          },
        ],
        solution: 'a) Kan både gi og ta imot H⁺; b) Kan både gi og ta imot H⁺',
        hints: ['Vis at stoffet kan opptre som både syre og base'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-9',
        number: '9-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv reaksjoner for HSO₄⁻ som amfotert stoff:',
        subTasks: [
          {
            label: 'a',
            task: 'HSO₄⁻ som syre (med OH⁻)',
            solution: '$$\\text{HSO}_4^- + \\text{OH}^- \\rightarrow \\text{SO}_4^{2-} + \\text{H}_2\\text{O}$$\nHSO₄⁻ gir fra seg H⁺ → **syre**',
          },
          {
            label: 'b',
            task: 'HSO₄⁻ som base (med H₃O⁺)',
            solution: '$$\\text{HSO}_4^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{H}_2\\text{SO}_4 + \\text{H}_2\\text{O}$$\nHSO₄⁻ tar imot H⁺ → **base**',
          },
        ],
        solution: 'a) HSO₄⁻ + OH⁻ → SO₄²⁻ + H₂O; b) HSO₄⁻ + H₃O⁺ → H₂SO₄ + H₂O',
        hints: ['Som syre: gir fra seg H⁺, Som base: tar imot H⁺'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-10',
        number: '9-10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har tre løsninger med samme konsentrasjon (0,10 M):',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken av HCl, CH₃COOH og H₂CO₃ har høyest [H₃O⁺]?',
            solution: '**HCl** er sterk syre (100% protolyse) → høyest [H₃O⁺].\nCH₃COOH og H₂CO₃ er svake → lavere [H₃O⁺].',
          },
          {
            label: 'b',
            task: 'Hvilken har lavest pH?',
            solution: 'Lavest pH = høyest [H₃O⁺] → **HCl** har lavest pH',
          },
          {
            label: 'c',
            task: 'Hvorfor er CH₃COOH farligere å søle enn HCl (samme konsentrasjon)?',
            solution: 'CH₃COOH er **svak syre** → delvis protolyse → mye uprotolysert CH₃COOH.\nUprotolysert syre kan **trenge gjennom hud** → mer farlig på lang sikt.\nHCl protolyserer fullstendig → reagerer raskt på overflaten.',
          },
        ],
        solution: 'a) HCl; b) HCl; c) CH₃COOH trenger gjennom hud',
        hints: ['Sterk syre → høy [H₃O⁺] → lav pH, Svak syre → uprotolysert form kan trenge gjennom hud'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-11',
        number: '9-11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rekkefølge av syrestyrke:',
        subTasks: [
          {
            label: 'a',
            task: 'Ranger H₂SO₄, HSO₄⁻ og SO₄²⁻ etter synkende syrestyrke.',
            solution: 'H₂SO₄ kan gi fra seg 2 H⁺ → **sterkest syre**.\nHSO₄⁻ kan gi fra seg 1 H⁺ → **middels**.\nSO₄²⁻ kan ikke gi fra seg H⁺ → **ikke syre** (kun base).\n**Rangering:** H₂SO₄ > HSO₄⁻ > SO₄²⁻',
          },
          {
            label: 'b',
            task: 'Ranger NH₃, NH₄⁺ og NH₂⁻ etter synkende basestyrke.',
            solution: 'NH₂⁻ mangler 1 H⁺ → **sterkest base** (tar lett imot H⁺).\nNH₃ kan ta imot H⁺ → **middels base**.\nNH₄⁺ har alle H⁺ → **ikke base** (kun syre).\n**Rangering:** NH₂⁻ > NH₃ > NH₄⁺',
          },
        ],
        solution: 'a) H₂SO₄ > HSO₄⁻ > SO₄²⁻; b) NH₂⁻ > NH₃ > NH₄⁺',
        hints: ['Flere H⁺ → sterkere syre, Færre H⁺ → sterkere base'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-12',
        number: '9-12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hva skjer når HCl blandes med NH₃?',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv reaksjonslikning.',
            solution: '$$\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{Cl}^- + \\text{NH}_4^+$$\nHCl (syre) gir fra seg H⁺ til NH₃ (base).',
          },
          {
            label: 'b',
            task: 'Hva dannes?',
            solution: 'Det dannes **ammoniumklorid** (NH₄Cl), et **salt**.\nReaksjonen er en **nøytraliseringsreaksjon** (syre + base → salt).',
          },
          {
            label: 'c',
            task: 'Hvorfor dannes hvit røyk når HCl(g) og NH₃(g) møtes?',
            solution: 'HCl(g) + NH₃(g) → NH₄Cl(s) (fast salt).\nFaste partikler av NH₄Cl danner **hvit røyk** (aerosolpartikler).',
          },
        ],
        solution: 'a) HCl + NH₃ → Cl⁻ + NH₄⁺; b) Ammoniumklorid (NH₄Cl); c) Fast NH₄Cl (hvit røyk)',
        hints: ['Syre + Base → Salt, Fast salt i gass → røyk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-13',
        number: '9-13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar følgende observasjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er konsentrert H₂SO₄ farlig?',
            solution: 'H₂SO₄ er **sterk syre** → høy [H₃O⁺] → **etsende**.\nKonsentrert H₂SO₄ er også **hygroskopisk** → trekker til seg vann → **dehydrerer hud** → alvorlige kjemiske brannsår.',
          },
          {
            label: 'b',
            task: 'Hvorfor tilsettes NH₃ i rengjøringsmidler?',
            solution: 'NH₃ er **base** → reagerer med fett (svake syrer) → **forsåper fett** → lettere å fjerne.\nNH₃ er også **flyktig** → fordamper → ingen rester.',
          },
          {
            label: 'c',
            task: 'Hvorfor er CO₂ svakt surt i vann?',
            solution: 'CO₂ + H₂O ⇌ H₂CO₃ (karbonsyre).\nH₂CO₃ + H₂O ⇌ HCO₃⁻ + H₃O⁺\nH₂CO₃ er **svak syre** → delvis protolyse → svakt surt (pH ≈ 5-6).',
          },
        ],
        solution: 'a) Etsende og dehydrerende; b) Forsåper fett (basisk); c) Danner H₂CO₃ (svak syre)',
        hints: ['H₂SO₄: sterk + hygroskopisk, NH₃: base + flyktig, CO₂: svak syre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-14',
        number: '9-14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor vannets autoprotolysering viser at vann er amfotert.',
            solution: '$$2\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{OH}^-$$\nEtt H₂O-molekyl gir fra seg H⁺ (→ OH⁻) → **syre**.\nEtt H₂O-molekyl tar imot H⁺ (→ H₃O⁺) → **base**.\nVann kan opptre som **både syre og base** → **amfotert**.',
          },
          {
            label: 'b',
            task: 'Hvorfor er den konjugerte basen til en sterk syre svak?',
            solution: 'Sterk syre → protolyserer fullstendig → konjugert base har **liten tendens** til å ta imot H⁺ tilbake.\nEksempel: HCl → Cl⁻ (svak base).\n**Regel:** Sterk syre → svak konjugert base.',
          },
          {
            label: 'c',
            task: 'Hvorfor er den konjugerte syren til en sterk base svak?',
            solution: 'Sterk base → tar lett imot H⁺ → konjugert syre har **liten tendens** til å gi fra seg H⁺.\nEksempel: OH⁻ → H₂O (svak syre).\n**Regel:** Sterk base → svak konjugert syre.',
          },
        ],
        solution: 'a) Vann er både syre og base; b) Liten tendens til å ta imot H⁺; c) Liten tendens til å gi fra seg H⁺',
        hints: ['Autoprotolysering: 2H₂O ⇌ H₃O⁺ + OH⁻, Sterk syre ↔ svak konjugert base'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-1-ex-15',
        number: '9-15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgave:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor HF er svak syre, mens HCl er sterk syre.',
            solution: 'HF: F har høy elektronegativitet → sterk H-F-binding → **vanskelig å gi fra seg H⁺** → **svak syre**.\nHCl: Cl har lavere elektronegativitet → svakere H-Cl-binding → **lett å gi fra seg H⁺** → **sterk syre**.\n**Regel:** Sterkere binding → svakere syre.',
          },
          {
            label: 'b',
            task: 'Hvorfor er CH₃COOH svakere syre enn HCl?',
            solution: 'HCl → Cl⁻ (ladning på ett atom) → **ustabil** → protolyserer fullstendig.\nCH₃COOH → CH₃COO⁻ (ladning delokalisert over O-atomer) → **stabil** → protolyserer delvis.\n**Regel:** Mer stabil konjugert base → svakere syre.',
          },
        ],
        solution: 'a) HF: sterk binding, HCl: svak binding; b) CH₃COO⁻ er stabil (delokalisering)',
        hints: ['Bindingsstyrke, Stabilitet av konjugert base'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 9.2: pH og sterke syrer/baser
// ============================================================================

const CHAPTER_KJEMI1_9_2: TextbookChapter = {
  id: 'kjemi1-9-2',
  courseId: 'kjemi1',
  chapterNumber: '9.2',
  title: 'pH og sterke syrer/baser',
  description: 'Lær pH-skalaen, vannets autoprotolysering og pH-beregninger for sterke syrer og baser.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare pH-skalaen og pOH',
    'forstå vannets autoprotolysering (Kw)',
    'beregne [H₃O⁺] og [OH⁻]',
    'beregne pH for sterke syrer',
    'beregne pH for sterke baser',
  ],
  content: [
    // ========== PH-SKALAEN ==========
    {
      id: 'kjemi1-9-2-intro',
      type: 'text',
      content: `## pH-skalaen

**pH** er et mål på hvor sur eller basisk en løsning er. pH står for "potentia Hydrogenii" (hydrogenionets styrke).

### Definisjon av pH

$$\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$$

- **Lav pH** (0-7): Sur løsning (høy [H₃O⁺])
- **pH = 7**: Nøytral løsning ([H₃O⁺] = [OH⁻])
- **Høy pH** (7-14): Basisk løsning (lav [H₃O⁺], høy [OH⁻])

### Viktige pH-verdier

| Løsning | [H₃O⁺] (M) | pH |
|---------|------------|-----|
| 1 M HCl | 1 | 0 |
| 0,1 M HCl | 0,1 | 1 |
| Magesyre | 0,01 | 2 |
| Brus | 0,001 | 3 |
| Regn | 10⁻⁵ | 5 |
| Rent vann | 10⁻⁷ | 7 |
| Blod | 4 × 10⁻⁸ | 7,4 |
| Såpe | 10⁻⁹ | 9 |
| 0,01 M NaOH | 10⁻¹² | 12 |
| 1 M NaOH | 10⁻¹⁴ | 14 |

**Merk:** pH-skalaen er logaritmisk. Hvert steg på pH-skalaen er en **10-ganger forskjell** i [H₃O⁺].`,
    },

    {
      id: 'kjemi1-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregn pH',
      problem: `Beregn pH for en løsning med [H₃O⁺] = 2,5 × 10⁻⁴ M.`,
      solution: `**Løsning:**

$$\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = -\\log(2{,}5 \\times 10^{-4})$$

**Kalkulator:**
- Skriv inn: 2,5 × 10⁻⁴
- Trykk LOG
- Multipliser med −1

$$\\text{pH} = -(-3{,}60) = 3{,}60$$

**Svar:** pH = 3,60 (sur løsning)`,
    },

    {
      id: 'kjemi1-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-1',
        number: '9-16',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn pH for følgende [H₃O⁺]-verdier:',
        subTasks: [
          {
            label: 'a',
            task: '[H₃O⁺] = 1,0 × 10⁻³ M',
            solution: '$$\\text{pH} = -\\log(1{,}0 \\times 10^{-3}) = 3{,}00$$',
          },
          {
            label: 'b',
            task: '[H₃O⁺] = 5,0 × 10⁻⁶ M',
            solution: '$$\\text{pH} = -\\log(5{,}0 \\times 10^{-6}) = 5{,}30$$',
          },
          {
            label: 'c',
            task: '[H₃O⁺] = 1,0 × 10⁻⁷ M',
            solution: '$$\\text{pH} = -\\log(1{,}0 \\times 10^{-7}) = 7{,}00$$\nNøytral løsning (rent vann ved 25°C).',
          },
        ],
        solution: 'a) pH = 3,00; b) pH = 5,30; c) pH = 7,00',
        hints: ['pH = −log[H₃O⁺]'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VANNETS AUTOPROTOLYSERING ==========
    {
      id: 'kjemi1-9-2-autoprotolysering',
      type: 'text',
      content: `## Vannets autoprotolysering

Vann kan reagere med seg selv (autoprotolysering):

$$2\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{OH}^-$$

### Vannets ioneprodukt (Kw)

$$K_\\text{w} = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 1{,}0 \\times 10^{-14} \\quad \\text{(ved 25°C)}$$

**Viktig sammenheng:**
- I **rent vann**: [H₃O⁺] = [OH⁻] = 1,0 × 10⁻⁷ M → pH = 7
- I **sur løsning**: [H₃O⁺] > [OH⁻] → pH < 7
- I **basisk løsning**: [H₃O⁺] < [OH⁻] → pH > 7

### Sammenheng mellom [H₃O⁺] og [OH⁻]

Hvis du kjenner én konsentrasjon, kan du finne den andre:

$$[\\text{OH}^-] = \\frac{K_\\text{w}}{[\\text{H}_3\\text{O}^+]} = \\frac{1{,}0 \\times 10^{-14}}{[\\text{H}_3\\text{O}^+]}$$

$$[\\text{H}_3\\text{O}^+] = \\frac{K_\\text{w}}{[\\text{OH}^-]} = \\frac{1{,}0 \\times 10^{-14}}{[\\text{OH}^-]}$$`,
    },

    {
      id: 'kjemi1-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Finn [OH⁻] fra [H₃O⁺]',
      problem: `En løsning har [H₃O⁺] = 2,0 × 10⁻⁴ M. Beregn [OH⁻].`,
      solution: `**Løsning:**

$$[\\text{OH}^-] = \\frac{K_\\text{w}}{[\\text{H}_3\\text{O}^+]} = \\frac{1{,}0 \\times 10^{-14}}{2{,}0 \\times 10^{-4}}$$

$$[\\text{OH}^-] = 5{,}0 \\times 10^{-11} \\text{ M}$$

**Svar:** [OH⁻] = 5,0 × 10⁻¹¹ M (mye lavere enn [H₃O⁺] → sur løsning)`,
    },

    {
      id: 'kjemi1-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-2',
        number: '9-17',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn [OH⁻] for følgende [H₃O⁺]-verdier:',
        subTasks: [
          {
            label: 'a',
            task: '[H₃O⁺] = 1,0 × 10⁻² M',
            solution: '$$[\\text{OH}^-] = \\frac{1{,}0 \\times 10^{-14}}{1{,}0 \\times 10^{-2}} = 1{,}0 \\times 10^{-12} \\text{ M}$$',
          },
          {
            label: 'b',
            task: '[H₃O⁺] = 5,0 × 10⁻⁹ M',
            solution: '$$[\\text{OH}^-] = \\frac{1{,}0 \\times 10^{-14}}{5{,}0 \\times 10^{-9}} = 2{,}0 \\times 10^{-6} \\text{ M}$$',
          },
          {
            label: 'c',
            task: '[H₃O⁺] = 2,5 × 10⁻¹¹ M',
            solution: '$$[\\text{OH}^-] = \\frac{1{,}0 \\times 10^{-14}}{2{,}5 \\times 10^{-11}} = 4{,}0 \\times 10^{-4} \\text{ M}$$',
          },
        ],
        solution: 'a) [OH⁻] = 1,0 × 10⁻¹² M; b) [OH⁻] = 2,0 × 10⁻⁶ M; c) [OH⁻] = 4,0 × 10⁻⁴ M',
        hints: ['[OH⁻] = Kw / [H₃O⁺]'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== pOH OG SAMMENHENG MED pH ==========
    {
      id: 'kjemi1-9-2-poh',
      type: 'text',
      content: `## pOH og sammenheng med pH

På samme måte som pH er definert for H₃O⁺, er **pOH** definert for OH⁻:

$$\\text{pOH} = -\\log[\\text{OH}^-]$$

### Sammenheng mellom pH og pOH

$$\\text{pH} + \\text{pOH} = 14{,}00 \\quad \\text{(ved 25°C)}$$

Denne sammenhengen gjelder **alltid** for vandige løsninger ved 25°C.

### Konvertering mellom pH og pOH

- Hvis du kjenner pH: pOH = 14 − pH
- Hvis du kjenner pOH: pH = 14 − pOH

**Eksempel:**
- pH = 3 → pOH = 14 − 3 = 11
- pOH = 2 → pH = 14 − 2 = 12`,
    },

    {
      id: 'kjemi1-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Beregn pOH og pH',
      problem: `En løsning har [OH⁻] = 2,5 × 10⁻³ M.
a) Beregn pOH
b) Beregn pH`,
      solution: `**Løsning:**

a) $$\\text{pOH} = -\\log[\\text{OH}^-] = -\\log(2{,}5 \\times 10^{-3}) = 2{,}60$$

b) $$\\text{pH} = 14{,}00 - \\text{pOH} = 14{,}00 - 2{,}60 = 11{,}40$$

**Svar:** pOH = 2,60, pH = 11,40 (basisk løsning)`,
    },

    {
      id: 'kjemi1-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-3',
        number: '9-18',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn pH ved hjelp av pH + pOH = 14:',
        subTasks: [
          {
            label: 'a',
            task: 'pOH = 3,00',
            solution: '$$\\text{pH} = 14{,}00 - 3{,}00 = 11{,}00$$',
          },
          {
            label: 'b',
            task: 'pOH = 8,50',
            solution: '$$\\text{pH} = 14{,}00 - 8{,}50 = 5{,}50$$',
          },
          {
            label: 'c',
            task: 'pOH = 12,30',
            solution: '$$\\text{pH} = 14{,}00 - 12{,}30 = 1{,}70$$',
          },
        ],
        solution: 'a) pH = 11,00; b) pH = 5,50; c) pH = 1,70',
        hints: ['pH + pOH = 14'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== pH-BEREGNINGER FOR STERKE SYRER ==========
    {
      id: 'kjemi1-9-2-sterke-syrer',
      type: 'text',
      content: `## pH-beregninger for sterke syrer

Sterke syrer protolyserer **fullstendig** i vann:

$$\\text{HCl} + \\text{H}_2\\text{O} \\rightarrow \\text{Cl}^- + \\text{H}_3\\text{O}^+$$

For **enprotiske** sterke syrer (HCl, HNO₃, HBr, HI):

$$[\\text{H}_3\\text{O}^+] = [\\text{syre}]_0$$

hvor [syre]₀ er startkonsentrasjonen av syren.

### Fremgangsmåte

1. **Finn [H₃O⁺]** = konsentrasjonen av syren
2. **Beregn pH** = −log[H₃O⁺]

**Eksempel:**
- 0,10 M HCl → [H₃O⁺] = 0,10 M → pH = −log(0,10) = 1,00

### Flerprotiske syrer (H₂SO₄)

Svovelsyre (H₂SO₄) kan gi fra seg **to** protoner:
- Første proton: H₂SO₄ + H₂O → HSO₄⁻ + H₃O⁺ (fullstendig)
- Andre proton: HSO₄⁻ + H₂O ⇌ SO₄²⁻ + H₃O⁺ (delvis)

For fortynnet H₂SO₄ (<0,1 M): [H₃O⁺] ≈ 2 × [H₂SO₄]₀`,
    },

    {
      id: 'kjemi1-9-2-example-4',
      type: 'example',
      title: 'Eksempel 4: pH av sterk syre',
      problem: `Beregn pH for 0,025 M HNO₃.`,
      solution: `**Løsning:**

HNO₃ er **sterk syre** → protolyserer fullstendig:
$$\\text{HNO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{NO}_3^- + \\text{H}_3\\text{O}^+$$

$$[\\text{H}_3\\text{O}^+] = 0{,}025 \\text{ M}$$

$$\\text{pH} = -\\log(0{,}025) = 1{,}60$$

**Svar:** pH = 1,60`,
    },

    {
      id: 'kjemi1-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-4',
        number: '9-19',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn pH for følgende sterke syrer:',
        subTasks: [
          {
            label: 'a',
            task: '0,10 M HCl',
            solution: '[H₃O⁺] = 0,10 M\n$$\\text{pH} = -\\log(0{,}10) = 1{,}00$$',
          },
          {
            label: 'b',
            task: '0,050 M HBr',
            solution: '[H₃O⁺] = 0,050 M\n$$\\text{pH} = -\\log(0{,}050) = 1{,}30$$',
          },
          {
            label: 'c',
            task: '2,5 × 10⁻³ M HNO₃',
            solution: '[H₃O⁺] = 2,5 × 10⁻³ M\n$$\\text{pH} = -\\log(2{,}5 \\times 10^{-3}) = 2{,}60$$',
          },
        ],
        solution: 'a) pH = 1,00; b) pH = 1,30; c) pH = 2,60',
        hints: ['Sterk syre: [H₃O⁺] = [syre]₀'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== pH-BEREGNINGER FOR STERKE BASER ==========
    {
      id: 'kjemi1-9-2-sterke-baser',
      type: 'text',
      content: `## pH-beregninger for sterke baser

Sterke baser løser seg **fullstendig** i vann:

$$\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^-$$

For **sterke baser** (NaOH, KOH):

$$[\\text{OH}^-] = [\\text{base}]_0$$

### Fremgangsmåte

1. **Finn [OH⁻]** = konsentrasjonen av basen
2. **Beregn pOH** = −log[OH⁻]
3. **Beregn pH** = 14 − pOH

**Alternativ metode:**
1. Finn [OH⁻]
2. Beregn [H₃O⁺] = Kw / [OH⁻]
3. Beregn pH = −log[H₃O⁺]

### Baser med flere OH⁻ (Ba(OH)₂, Ca(OH)₂)

For Ba(OH)₂: [OH⁻] = 2 × [Ba(OH)₂]₀

$$\\text{Ba(OH)}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{OH}^-$$`,
    },

    {
      id: 'kjemi1-9-2-example-5',
      type: 'example',
      title: 'Eksempel 5: pH av sterk base',
      problem: `Beregn pH for 0,010 M NaOH.`,
      solution: `**Løsning:**

NaOH er **sterk base** → løser seg fullstendig:
$$\\text{NaOH} \\rightarrow \\text{Na}^+ + \\text{OH}^-$$

$$[\\text{OH}^-] = 0{,}010 \\text{ M}$$

**Metode 1:** Via pOH
$$\\text{pOH} = -\\log(0{,}010) = 2{,}00$$
$$\\text{pH} = 14{,}00 - 2{,}00 = 12{,}00$$

**Metode 2:** Via [H₃O⁺]
$$[\\text{H}_3\\text{O}^+] = \\frac{1{,}0 \\times 10^{-14}}{0{,}010} = 1{,}0 \\times 10^{-12} \\text{ M}$$
$$\\text{pH} = -\\log(1{,}0 \\times 10^{-12}) = 12{,}00$$

**Svar:** pH = 12,00`,
    },

    {
      id: 'kjemi1-9-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-5',
        number: '9-20',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn pH for følgende sterke baser:',
        subTasks: [
          {
            label: 'a',
            task: '0,10 M NaOH',
            solution: '[OH⁻] = 0,10 M\npOH = −log(0,10) = 1,00\npH = 14,00 − 1,00 = **13,00**',
          },
          {
            label: 'b',
            task: '0,025 M KOH',
            solution: '[OH⁻] = 0,025 M\npOH = −log(0,025) = 1,60\npH = 14,00 − 1,60 = **12,40**',
          },
          {
            label: 'c',
            task: '5,0 × 10⁻⁴ M NaOH',
            solution: '[OH⁻] = 5,0 × 10⁻⁴ M\npOH = −log(5,0 × 10⁻⁴) = 3,30\npH = 14,00 − 3,30 = **10,70**',
          },
        ],
        solution: 'a) pH = 13,00; b) pH = 12,40; c) pH = 10,70',
        hints: ['Sterk base: [OH⁻] = [base]₀, pH = 14 − pOH'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-6',
        number: '9-21',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn pH for Ba(OH)₂-løsninger:',
        subTasks: [
          {
            label: 'a',
            task: '0,050 M Ba(OH)₂',
            solution: 'Ba(OH)₂ → Ba²⁺ + 2OH⁻\n[OH⁻] = 2 × 0,050 = 0,10 M\npOH = −log(0,10) = 1,00\npH = 14,00 − 1,00 = **13,00**',
          },
          {
            label: 'b',
            task: '0,010 M Ba(OH)₂',
            solution: '[OH⁻] = 2 × 0,010 = 0,020 M\npOH = −log(0,020) = 1,70\npH = 14,00 − 1,70 = **12,30**',
          },
        ],
        solution: 'a) pH = 13,00; b) pH = 12,30',
        hints: ['Ba(OH)₂ gir 2 OH⁻ per formelenhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-7',
        number: '9-22',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn konsentrasjon fra pH:',
        subTasks: [
          {
            label: 'a',
            task: 'En HCl-løsning har pH = 2,00. Beregn [HCl].',
            solution: 'pH = 2,00 → [H₃O⁺] = 10⁻² = 0,010 M\nSterk syre: [HCl] = [H₃O⁺] = **0,010 M**',
          },
          {
            label: 'b',
            task: 'En NaOH-løsning har pH = 11,00. Beregn [NaOH].',
            solution: 'pH = 11,00 → pOH = 14,00 − 11,00 = 3,00\npOH = 3,00 → [OH⁻] = 10⁻³ = 0,0010 M\nSterk base: [NaOH] = [OH⁻] = **1,0 × 10⁻³ M**',
          },
        ],
        solution: 'a) [HCl] = 0,010 M; b) [NaOH] = 1,0 × 10⁻³ M',
        hints: ['[H₃O⁺] = 10^(−pH), [OH⁻] = 10^(−pOH)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-8',
        number: '9-23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fortynning av syrer og baser:',
        subTasks: [
          {
            label: 'a',
            task: 'Du har 100 mL 0,10 M HCl. Du tilsetter 900 mL vann. Hva blir ny pH?',
            solution: 'Fortynning: c₁V₁ = c₂V₂\n0,10 × 100 = c₂ × 1000 → c₂ = 0,010 M\n[H₃O⁺] = 0,010 M\npH = −log(0,010) = **2,00**',
          },
          {
            label: 'b',
            task: 'En NaOH-løsning har pH = 13,00. Løsningen fortynnes 10 ganger. Hva blir ny pH?',
            solution: 'pH = 13,00 → pOH = 1,00 → [OH⁻] = 0,10 M\nFortynning ×10: [OH⁻] = 0,010 M\npOH = −log(0,010) = 2,00\npH = 14,00 − 2,00 = **12,00**',
          },
        ],
        solution: 'a) pH = 2,00; b) pH = 12,00',
        hints: ['c₁V₁ = c₂V₂, pH endres med 1 ved 10-gangers fortynning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-9',
        number: '9-24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blanding av syrer og baser:',
        subTasks: [
          {
            label: 'a',
            task: '50 mL 0,10 M HCl blandes med 50 mL 0,10 M NaOH. Hva blir pH?',
            solution: 'Mol H₃O⁺ = 0,10 × 0,050 = 0,0050 mol\nMol OH⁻ = 0,10 × 0,050 = 0,0050 mol\nLike mengder → **nøytraliserer hverandre** → pH = **7,00**',
          },
          {
            label: 'b',
            task: '50 mL 0,20 M HCl blandes med 50 mL 0,10 M NaOH. Hva blir pH?',
            solution: 'Mol H₃O⁺ = 0,20 × 0,050 = 0,010 mol\nMol OH⁻ = 0,10 × 0,050 = 0,0050 mol\nOverskudd H₃O⁺ = 0,010 − 0,0050 = 0,0050 mol\n[H₃O⁺] = 0,0050 / 0,100 = 0,050 M\npH = −log(0,050) = **1,30**',
          },
        ],
        solution: 'a) pH = 7,00; b) pH = 1,30',
        hints: ['Beregn mol H₃O⁺ og OH⁻, finn overskudd, beregn ny konsentrasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-10',
        number: '9-25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor pH-skalaen er logaritmisk.',
            solution: 'pH = −log[H₃O⁺] → **logaritmisk skala**.\n[H₃O⁺] varierer over mange størrelsesordener (10⁻¹⁴ til 10⁰).\nLogaritmisk skala → komprimerer store variasjoner til 0-14.\nHvert pH-steg = **10-gangers forskjell** i [H₃O⁺].',
          },
          {
            label: 'b',
            task: 'Hvorfor er pH i rent vann 7,00 ved 25°C?',
            solution: 'Vannets autoprotolysering: 2H₂O ⇌ H₃O⁺ + OH⁻\nKw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴\nI rent vann: [H₃O⁺] = [OH⁻] = √Kw = √(1,0 × 10⁻¹⁴) = 1,0 × 10⁻⁷ M\npH = −log(1,0 × 10⁻⁷) = **7,00**',
          },
          {
            label: 'c',
            task: 'Hvorfor endres pH med 1 når [H₃O⁺] endres 10 ganger?',
            solution: 'pH = −log[H₃O⁺]\nHvis [H₃O⁺] øker 10 ganger:\npH_ny = −log(10 × [H₃O⁺]) = −log(10) − log[H₃O⁺] = −1 + pH_gammel\npH endres med **−1** (mer surt).\nHvis [H₃O⁺] synker 10 ganger: pH endres med **+1** (mindre surt).',
          },
        ],
        solution: 'a) Komprimerer store variasjoner i [H₃O⁺]; b) [H₃O⁺] = [OH⁻] = 10⁻⁷ M; c) Logaritmisk skala: log(10) = 1',
        hints: ['pH = −log[H₃O⁺], Kw = 1,0 × 10⁻¹⁴'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-11',
        number: '9-26',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Magesyre og fordøyelse:',
        subTasks: [
          {
            label: 'a',
            task: 'Magesyre har pH ≈ 2. Beregn [H₃O⁺].',
            solution: 'pH = 2,00 → [H₃O⁺] = 10⁻² = **0,010 M**',
          },
          {
            label: 'b',
            task: 'Hva skjer med pH hvis du tar 1 tablett antacid (nøytraliserer 0,001 mol H₃O⁺)?',
            solution: 'Magesaft: ca. 2 L med [H₃O⁺] = 0,010 M\nMol H₃O⁺ = 0,010 × 2 = 0,020 mol\nEtter antacid: 0,020 − 0,001 = 0,019 mol\n[H₃O⁺] = 0,019 / 2 = 0,0095 M\npH = −log(0,0095) = **2,02** (liten endring)',
          },
        ],
        solution: 'a) [H₃O⁺] = 0,010 M; b) pH ≈ 2,02',
        hints: ['[H₃O⁺] = 10^(−pH), Beregn mol før og etter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-12',
        number: '9-27',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sur nedbør:',
        subTasks: [
          {
            label: 'a',
            task: 'Normal regn har pH ≈ 5,6 (CO₂ i luft). Beregn [H₃O⁺].',
            solution: 'pH = 5,6 → [H₃O⁺] = 10⁻⁵·⁶ = **2,5 × 10⁻⁶ M**',
          },
          {
            label: 'b',
            task: 'Sur nedbør har pH = 4,0. Hvor mye surere er dette enn normal regn?',
            solution: 'Normal regn: pH = 5,6 → [H₃O⁺] = 2,5 × 10⁻⁶ M\nSur nedbør: pH = 4,0 → [H₃O⁺] = 1,0 × 10⁻⁴ M\nForskjell: (1,0 × 10⁻⁴) / (2,5 × 10⁻⁶) = **40 ganger surere**',
          },
        ],
        solution: 'a) [H₃O⁺] = 2,5 × 10⁻⁶ M; b) 40 ganger surere',
        hints: ['[H₃O⁺] = 10^(−pH), Sammenlign [H₃O⁺]-verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-2-ex-13',
        number: '9-28',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blod-pH:',
        subTasks: [
          {
            label: 'a',
            task: 'Blod har pH = 7,40. Beregn [H₃O⁺] og [OH⁻].',
            solution: 'pH = 7,40 → [H₃O⁺] = 10⁻⁷·⁴⁰ = **4,0 × 10⁻⁸ M**\npOH = 14,00 − 7,40 = 6,60\n[OH⁻] = 10⁻⁶·⁶⁰ = **2,5 × 10⁻⁷ M**',
          },
          {
            label: 'b',
            task: 'Acidose (for lavt pH) oppstår ved pH < 7,35. Hvor mye høyere [H₃O⁺] er dette enn normalt?',
            solution: 'Normalt: pH = 7,40 → [H₃O⁺] = 4,0 × 10⁻⁸ M\nAcidose: pH = 7,35 → [H₃O⁺] = 4,5 × 10⁻⁸ M\nForskjell: (4,5 × 10⁻⁸) / (4,0 × 10⁻⁸) = **1,12 ganger høyere** (12% økning)',
          },
        ],
        solution: 'a) [H₃O⁺] = 4,0 × 10⁻⁸ M, [OH⁻] = 2,5 × 10⁻⁷ M; b) 1,12 ganger høyere (12% økning)',
        hints: ['[H₃O⁺] = 10^(−pH), Små pH-endringer → store konsekvenser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 9.3: Svake syrer og baser
// ============================================================================

const CHAPTER_KJEMI1_9_3: TextbookChapter = {
  id: 'kjemi1-9-3',
  courseId: 'kjemi1',
  chapterNumber: '9.3',
  title: 'Svake syrer og baser',
  description: 'Lær syrekonstanten Ka, basekonstanten Kb, pKa/pKb og pH-beregninger for svake syrer/baser.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare syrekonstanten Ka og basekonstanten Kb',
    'forstå sammenhengen Ka × Kb = Kw',
    'bruke pKa og pKb',
    'beregne pH for svake syrer',
    'beregne pH for svake baser',
    'forstå protolysegraden',
  ],
  content: [
    // ========== SYREKONSTANTEN Ka ==========
    {
      id: 'kjemi1-9-3-intro',
      type: 'text',
      content: `## Syrekonstanten Ka

Svake syrer protolyserer **delvis** i vann:

$$\\text{HA} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{A}^- + \\text{H}_3\\text{O}^+$$

### Likevektsuttrykket

$$K_\\text{a} = \\frac{[\\text{A}^-][\\text{H}_3\\text{O}^+]}{[\\text{HA}]}$$

hvor:
- **Ka** = syrekonstanten (likevektskonstant for protolyse)
- **HA** = svak syre
- **A⁻** = konjugert base

### Syrestyrke

- **Stor Ka** (>10⁻²) → Sterk syre → Høy protolysering
- **Liten Ka** (<10⁻⁶) → Svak syre → Lav protolysering

**Eksempel:**
- CH₃COOH: Ka = 1,8 × 10⁻⁵ (svak syre)
- HF: Ka = 7,2 × 10⁻⁴ (svakere enn sterke, men sterkere enn CH₃COOH)
- H₂CO₃: Ka = 4,3 × 10⁻⁷ (svakere enn CH₃COOH)`,
    },

    {
      id: 'kjemi1-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Skriv Ka-uttrykk',
      problem: `Skriv Ka-uttrykket for følgende svake syrer:
a) HF
b) H₂CO₃ (første proton)`,
      solution: `**Løsning:**

a) **HF** (fluorhydrogensyre):
   $$\\text{HF} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{F}^- + \\text{H}_3\\text{O}^+$$
   $$K_\\text{a} = \\frac{[\\text{F}^-][\\text{H}_3\\text{O}^+]}{[\\text{HF}]}$$

b) **H₂CO₃** (karbonsyre):
   $$\\text{H}_2\\text{CO}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCO}_3^- + \\text{H}_3\\text{O}^+$$
   $$K_\\text{a} = \\frac{[\\text{HCO}_3^-][\\text{H}_3\\text{O}^+]}{[\\text{H}_2\\text{CO}_3]}$$`,
    },

    {
      id: 'kjemi1-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-1',
        number: '9-29',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv Ka-uttrykk for følgende svake syrer:',
        subTasks: [
          {
            label: 'a',
            task: 'CH₃COOH (eddiksyre)',
            solution: 'CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺\n$$K_\\text{a} = \\frac{[\\text{CH}_3\\text{COO}^-][\\text{H}_3\\text{O}^+]}{[\\text{CH}_3\\text{COOH}]}$$',
          },
          {
            label: 'b',
            task: 'H₃PO₄ (fosforsyre, første proton)',
            solution: 'H₃PO₄ + H₂O ⇌ H₂PO₄⁻ + H₃O⁺\n$$K_\\text{a} = \\frac{[\\text{H}_2\\text{PO}_4^-][\\text{H}_3\\text{O}^+]}{[\\text{H}_3\\text{PO}_4]}$$',
          },
        ],
        solution: 'a) Ka = [CH₃COO⁻][H₃O⁺] / [CH₃COOH]; b) Ka = [H₂PO₄⁻][H₃O⁺] / [H₃PO₄]',
        hints: ['Produkter i teller, reaktanter i nevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== pKa ==========
    {
      id: 'kjemi1-9-3-pka',
      type: 'text',
      content: `## pKa

På samme måte som pH, brukes **pKa** for å forenkle Ka-verdier:

$$\\text{pK}_\\text{a} = -\\log K_\\text{a}$$

### Sammenheng mellom Ka og pKa

- **Stor Ka** → **Liten pKa** → **Sterkere syre**
- **Liten Ka** → **Stor pKa** → **Svakere syre**

**Eksempel:**
- HF: Ka = 7,2 × 10⁻⁴ → pKa = 3,14 (sterkere)
- CH₃COOH: Ka = 1,8 × 10⁻⁵ → pKa = 4,74
- H₂CO₃: Ka = 4,3 × 10⁻⁷ → pKa = 6,37 (svakere)

**Huskeregel:** Lavt pKa-tall = sterk syre`,
    },

    {
      id: 'kjemi1-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregn pKa',
      problem: `Eddiksyre har Ka = 1,8 × 10⁻⁵. Beregn pKa.`,
      solution: `**Løsning:**

$$\\text{pK}_\\text{a} = -\\log K_\\text{a} = -\\log(1{,}8 \\times 10^{-5})$$

$$\\text{pK}_\\text{a} = 4{,}74$$

**Svar:** pKa = 4,74`,
    },

    {
      id: 'kjemi1-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-2',
        number: '9-30',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn pKa for følgende syrer:',
        subTasks: [
          {
            label: 'a',
            task: 'HF: Ka = 7,2 × 10⁻⁴',
            solution: 'pKa = −log(7,2 × 10⁻⁴) = **3,14**',
          },
          {
            label: 'b',
            task: 'H₂CO₃: Ka = 4,3 × 10⁻⁷',
            solution: 'pKa = −log(4,3 × 10⁻⁷) = **6,37**',
          },
          {
            label: 'c',
            task: 'H₂S: Ka = 1,0 × 10⁻⁷',
            solution: 'pKa = −log(1,0 × 10⁻⁷) = **7,00**',
          },
        ],
        solution: 'a) pKa = 3,14; b) pKa = 6,37; c) pKa = 7,00',
        hints: ['pKa = −log(Ka)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== pH-BEREGNINGER FOR SVAKE SYRER ==========
    {
      id: 'kjemi1-9-3-ph-svake-syrer',
      type: 'text',
      content: `## pH-beregninger for svake syrer

For svake syrer bruker vi en **forenklet formel**:

$$\\text{pH} \\approx \\frac{1}{2}(\\text{pK}_\\text{a} - \\log c)$$

hvor **c** = konsentrasjonen av syren.

**Alternativt:**

$$[\\text{H}_3\\text{O}^+] \\approx \\sqrt{K_\\text{a} \\cdot c}$$

deretter: pH = −log[H₃O⁺]

### Forutsetninger

Formelen gjelder når:
1. Svak syre (Ka < 10⁻²)
2. Konsentrasjon c > 100 × Ka

**Eksempel:**
- 0,10 M CH₃COOH (Ka = 1,8 × 10⁻⁵):
  $$[\\text{H}_3\\text{O}^+] \\approx \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3} \\text{ M}$$
  $$\\text{pH} = -\\log(1{,}34 \\times 10^{-3}) = 2{,}87$$`,
    },

    {
      id: 'kjemi1-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: pH av svak syre',
      problem: `Beregn pH for 0,10 M eddiksyre (Ka = 1,8 × 10⁻⁵).`,
      solution: `**Løsning:**

**Metode 1:** Bruk formelen med [H₃O⁺]:
$$[\\text{H}_3\\text{O}^+] \\approx \\sqrt{K_\\text{a} \\cdot c} = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10}$$
$$[\\text{H}_3\\text{O}^+] = \\sqrt{1{,}8 \\times 10^{-6}} = 1{,}34 \\times 10^{-3} \\text{ M}$$
$$\\text{pH} = -\\log(1{,}34 \\times 10^{-3}) = 2{,}87$$

**Metode 2:** Bruk formelen med pKa:
$$\\text{pK}_\\text{a} = -\\log(1{,}8 \\times 10^{-5}) = 4{,}74$$
$$\\text{pH} \\approx \\frac{1}{2}(4{,}74 - \\log 0{,}10) = \\frac{1}{2}(4{,}74 + 1) = 2{,}87$$

**Svar:** pH = 2,87`,
    },

    {
      id: 'kjemi1-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-3',
        number: '9-31',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn pH for følgende svake syrer:',
        subTasks: [
          {
            label: 'a',
            task: '0,10 M HF (Ka = 7,2 × 10⁻⁴)',
            solution: '[H₃O⁺] = √(7,2 × 10⁻⁴ × 0,10) = √(7,2 × 10⁻⁵) = 8,5 × 10⁻³ M\npH = −log(8,5 × 10⁻³) = **2,07**',
          },
          {
            label: 'b',
            task: '0,050 M CH₃COOH (Ka = 1,8 × 10⁻⁵)',
            solution: '[H₃O⁺] = √(1,8 × 10⁻⁵ × 0,050) = √(9,0 × 10⁻⁷) = 9,5 × 10⁻⁴ M\npH = −log(9,5 × 10⁻⁴) = **3,02**',
          },
        ],
        solution: 'a) pH = 2,07; b) pH = 3,02',
        hints: ['[H₃O⁺] = √(Ka × c)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BASEKONSTANTEN Kb ==========
    {
      id: 'kjemi1-9-3-kb',
      type: 'text',
      content: `## Basekonstanten Kb

Svake baser protolyserer **delvis** i vann:

$$\\text{B} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{BH}^+ + \\text{OH}^-$$

### Likevektsuttrykket

$$K_\\text{b} = \\frac{[\\text{BH}^+][\\text{OH}^-]}{[\\text{B}]}$$

hvor:
- **Kb** = basekonstanten
- **B** = svak base
- **BH⁺** = konjugert syre

### Sammenheng mellom Ka og Kb

For et konjugert syre-base-par:

$$K_\\text{a} \\times K_\\text{b} = K_\\text{w} = 1{,}0 \\times 10^{-14}$$

$$\\text{pK}_\\text{a} + \\text{pK}_\\text{b} = 14{,}00$$

**Eksempel:**
- NH₃: Kb = 1,8 × 10⁻⁵
- NH₄⁺ (konjugert syre): Ka = Kw / Kb = 5,6 × 10⁻¹⁰`,
    },

    {
      id: 'kjemi1-9-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Ka og Kb for konjugert par',
      problem: `NH₃ har Kb = 1,8 × 10⁻⁵. Beregn Ka for NH₄⁺.`,
      solution: `**Løsning:**

$$K_\\text{a} \\times K_\\text{b} = K_\\text{w}$$

$$K_\\text{a} = \\frac{K_\\text{w}}{K_\\text{b}} = \\frac{1{,}0 \\times 10^{-14}}{1{,}8 \\times 10^{-5}}$$

$$K_\\text{a} = 5{,}6 \\times 10^{-10}$$

**Svar:** Ka(NH₄⁺) = 5,6 × 10⁻¹⁰`,
    },

    {
      id: 'kjemi1-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-4',
        number: '9-32',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn den manglende konstanten:',
        subTasks: [
          {
            label: 'a',
            task: 'CH₃COO⁻ har Kb = 5,6 × 10⁻¹⁰. Finn Ka for CH₃COOH.',
            solution: 'Ka = Kw / Kb = (1,0 × 10⁻¹⁴) / (5,6 × 10⁻¹⁰) = **1,8 × 10⁻⁵**',
          },
          {
            label: 'b',
            task: 'HCO₃⁻ har Ka = 4,7 × 10⁻¹¹. Finn Kb for HCO₃⁻.',
            solution: 'Kb = Kw / Ka = (1,0 × 10⁻¹⁴) / (4,7 × 10⁻¹¹) = **2,1 × 10⁻⁴**',
          },
        ],
        solution: 'a) Ka = 1,8 × 10⁻⁵; b) Kb = 2,1 × 10⁻⁴',
        hints: ['Ka × Kb = Kw'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== pH-BEREGNINGER FOR SVAKE BASER ==========
    {
      id: 'kjemi1-9-3-ph-svake-baser',
      type: 'text',
      content: `## pH-beregninger for svake baser

For svake baser:

$$[\\text{OH}^-] \\approx \\sqrt{K_\\text{b} \\cdot c}$$

deretter:
1. pOH = −log[OH⁻]
2. pH = 14 − pOH

**Eller direkte:**

$$\\text{pH} \\approx 14 - \\frac{1}{2}(\\text{pK}_\\text{b} - \\log c)$$

**Eksempel:**
- 0,10 M NH₃ (Kb = 1,8 × 10⁻⁵):
  $$[\\text{OH}^-] \\approx \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3} \\text{ M}$$
  $$\\text{pOH} = -\\log(1{,}34 \\times 10^{-3}) = 2{,}87$$
  $$\\text{pH} = 14{,}00 - 2{,}87 = 11{,}13$$`,
    },

    {
      id: 'kjemi1-9-3-example-5',
      type: 'example',
      title: 'Eksempel 5: pH av svak base',
      problem: `Beregn pH for 0,10 M ammoniakk (Kb = 1,8 × 10⁻⁵).`,
      solution: `**Løsning:**

$$[\\text{OH}^-] \\approx \\sqrt{K_\\text{b} \\cdot c} = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10}$$

$$[\\text{OH}^-] = \\sqrt{1{,}8 \\times 10^{-6}} = 1{,}34 \\times 10^{-3} \\text{ M}$$

$$\\text{pOH} = -\\log(1{,}34 \\times 10^{-3}) = 2{,}87$$

$$\\text{pH} = 14{,}00 - 2{,}87 = 11{,}13$$

**Svar:** pH = 11,13`,
    },

    {
      id: 'kjemi1-9-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-5',
        number: '9-33',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn pH for følgende svake baser:',
        subTasks: [
          {
            label: 'a',
            task: '0,10 M NH₃ (Kb = 1,8 × 10⁻⁵)',
            solution: '[OH⁻] = √(1,8 × 10⁻⁵ × 0,10) = 1,34 × 10⁻³ M\npOH = 2,87\npH = 14,00 − 2,87 = **11,13**',
          },
          {
            label: 'b',
            task: '0,050 M CH₃NH₂ (Kb = 4,4 × 10⁻⁴)',
            solution: '[OH⁻] = √(4,4 × 10⁻⁴ × 0,050) = 4,7 × 10⁻³ M\npOH = 2,33\npH = 14,00 − 2,33 = **11,67**',
          },
        ],
        solution: 'a) pH = 11,13; b) pH = 11,67',
        hints: ['[OH⁻] = √(Kb × c), pH = 14 − pOH'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PROTOLYSEGRADEN ==========
    {
      id: 'kjemi1-9-3-protolysegraden',
      type: 'text',
      content: `## Protolysegraden

**Protolysegraden** (α) er andelen av syren/basen som har protolysert:

$$\\alpha = \\frac{[\\text{H}_3\\text{O}^+]}{c} \\times 100\\%$$

hvor **c** = startkonsentrasjonen av syren.

### Eksempel

For 0,10 M eddiksyre: [H₃O⁺] = 1,34 × 10⁻³ M

$$\\alpha = \\frac{1{,}34 \\times 10^{-3}}{0{,}10} \\times 100\\% = 1{,}34\\%$$

Kun **1,34%** av CH₃COOH-molekylene har protolysert!

### Sammenheng med Ka

- **Stor Ka** → **Høy α** → Mer protolyse
- **Liten Ka** → **Lav α** → Mindre protolyse
- **Høy konsentrasjon** → **Lav α** (Le Chateliers prinsipp)`,
    },

    {
      id: 'kjemi1-9-3-example-6',
      type: 'example',
      title: 'Eksempel 6: Protolysegraden',
      problem: `Beregn protolysegraden for 0,10 M eddiksyre (Ka = 1,8 × 10⁻⁵).`,
      solution: `**Løsning:**

Først finner vi [H₃O⁺]:
$$[\\text{H}_3\\text{O}^+] = \\sqrt{K_\\text{a} \\cdot c} = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3} \\text{ M}$$

Deretter protolysegraden:
$$\\alpha = \\frac{[\\text{H}_3\\text{O}^+]}{c} \\times 100\\% = \\frac{1{,}34 \\times 10^{-3}}{0{,}10} \\times 100\\% = 1{,}34\\%$$

**Svar:** α = 1,34% (kun 1,34% av eddiksyren har protolysert)`,
    },

    {
      id: 'kjemi1-9-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-6',
        number: '9-34',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn protolysegraden:',
        subTasks: [
          {
            label: 'a',
            task: '0,10 M HF (Ka = 7,2 × 10⁻⁴)',
            solution: '[H₃O⁺] = √(7,2 × 10⁻⁴ × 0,10) = 8,5 × 10⁻³ M\nα = (8,5 × 10⁻³ / 0,10) × 100% = **8,5%**',
          },
          {
            label: 'b',
            task: '0,10 M NH₃ (Kb = 1,8 × 10⁻⁵)',
            solution: '[OH⁻] = √(1,8 × 10⁻⁵ × 0,10) = 1,34 × 10⁻³ M\nα = (1,34 × 10⁻³ / 0,10) × 100% = **1,34%**',
          },
        ],
        solution: 'a) α = 8,5%; b) α = 1,34%',
        hints: ['α = ([H₃O⁺] / c) × 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-7',
        number: '9-35',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenligning av sterk vs svak syre:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn pH for 0,10 M HCl.',
            solution: 'HCl er sterk syre → [H₃O⁺] = 0,10 M\npH = −log(0,10) = **1,00**',
          },
          {
            label: 'b',
            task: 'Beregn pH for 0,10 M CH₃COOH (Ka = 1,8 × 10⁻⁵).',
            solution: '[H₃O⁺] = √(1,8 × 10⁻⁵ × 0,10) = 1,34 × 10⁻³ M\npH = −log(1,34 × 10⁻³) = **2,87**',
          },
          {
            label: 'c',
            task: 'Hvor mange ganger høyere er [H₃O⁺] i HCl enn i CH₃COOH?',
            solution: '[H₃O⁺]_HCl / [H₃O⁺]_CH₃COOH = 0,10 / (1,34 × 10⁻³) = **75 ganger høyere**',
          },
        ],
        solution: 'a) pH = 1,00; b) pH = 2,87; c) 75 ganger høyere',
        hints: ['Sterk: [H₃O⁺] = c, Svak: [H₃O⁺] = √(Ka × c)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-8',
        number: '9-36',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Konsentrasjonens innvirkning på protolysegraden:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn protolysegraden for 0,10 M CH₃COOH.',
            solution: '[H₃O⁺] = √(1,8 × 10⁻⁵ × 0,10) = 1,34 × 10⁻³ M\nα = (1,34 × 10⁻³ / 0,10) × 100% = **1,34%**',
          },
          {
            label: 'b',
            task: 'Beregn protolysegraden for 0,010 M CH₃COOH.',
            solution: '[H₃O⁺] = √(1,8 × 10⁻⁵ × 0,010) = 4,24 × 10⁻⁴ M\nα = (4,24 × 10⁻⁴ / 0,010) × 100% = **4,24%**',
          },
          {
            label: 'c',
            task: 'Hvorfor øker protolysegraden når konsentrasjonen synker?',
            solution: 'Le Chateliers prinsipp: Når konsentrasjonen synker, forskyves likevekten mot **høyre** (mer protolyse) for å kompensere.\nFortynning → **høyere protolysegr** → **større andel protolysert**.',
          },
        ],
        solution: 'a) α = 1,34%; b) α = 4,24%; c) Le Chateliers prinsipp (likevekt forskyves)',
        hints: ['Lavere konsentrasjon → høyere protolysegr'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-9',
        number: '9-37',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Salt av svake syrer/baser:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn pH for 0,10 M NaCH₃COO (natriumacetat). Kb(CH₃COO⁻) = 5,6 × 10⁻¹⁰.',
            solution: 'CH₃COO⁻ er **svak base**:\n[OH⁻] = √(5,6 × 10⁻¹⁰ × 0,10) = 7,5 × 10⁻⁶ M\npOH = −log(7,5 × 10⁻⁶) = 5,12\npH = 14,00 − 5,12 = **8,88** (basisk)',
          },
          {
            label: 'b',
            task: 'Beregn pH for 0,10 M NH₄Cl (ammoniumklorid). Ka(NH₄⁺) = 5,6 × 10⁻¹⁰.',
            solution: 'NH₄⁺ er **svak syre**:\n[H₃O⁺] = √(5,6 × 10⁻¹⁰ × 0,10) = 7,5 × 10⁻⁶ M\npH = −log(7,5 × 10⁻⁶) = **5,12** (surt)',
          },
        ],
        solution: 'a) pH = 8,88; b) pH = 5,12',
        hints: ['CH₃COO⁻ er base, NH₄⁺ er syre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-10',
        number: '9-38',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor svake syrer har lavere [H₃O⁺] enn sterke syrer ved samme konsentrasjon.',
            solution: 'Svake syrer protolyserer **delvis** → kun en **liten andel** gir fra seg H⁺ → lav [H₃O⁺].\nSterke syrer protolyserer **fullstendig** → **alle molekyler** gir fra seg H⁺ → høy [H₃O⁺].',
          },
          {
            label: 'b',
            task: 'Hvorfor er Ka × Kb = Kw for konjugerte par?',
            solution: 'For HA/A⁻:\nHA + H₂O ⇌ A⁻ + H₃O⁺ (Ka)\nA⁻ + H₂O ⇌ HA + OH⁻ (Kb)\nAdderer: 2H₂O ⇌ H₃O⁺ + OH⁻ (Kw)\nKa × Kb = Kw = 1,0 × 10⁻¹⁴',
          },
        ],
        solution: 'a) Delvis vs fullstendig protolyse; b) Likevekter adderes → Ka × Kb = Kw',
        hints: ['Delvis protolyse, Likevekter kan adderes'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-11',
        number: '9-39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Flerprotiske syrer:',
        subTasks: [
          {
            label: 'a',
            task: 'H₃PO₄ har Ka1 = 7,5 × 10⁻³, Ka2 = 6,2 × 10⁻⁸, Ka3 = 4,8 × 10⁻¹³. Hvilken er sterkest?',
            solution: 'Den **første** protonen er **lettest** å fjerne (høyest Ka).\nKa1 > Ka2 > Ka3 → **Ka1 = 7,5 × 10⁻³** (sterkest)',
          },
          {
            label: 'b',
            task: 'Hvorfor er Ka1 > Ka2 > Ka3?',
            solution: 'Første proton: Fjernes fra **nøytralt molekyl** → **lett**.\nAndre proton: Fjernes fra **negativt ion** (H₂PO₄⁻) → **vanskeligere**.\nTredje proton: Fjernes fra **dobbelt negativt ion** (HPO₄²⁻) → **vanskeligst**.\n**Elektrostatisk frastøting** gjør det vanskeligere å fjerne H⁺ fra negativt ion.',
          },
        ],
        solution: 'a) Ka1 (første proton); b) Elektrostatisk frastøting',
        hints: ['Første proton er lettest å fjerne'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-12',
        number: '9-40',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenligning av pKa:',
        subTasks: [
          {
            label: 'a',
            task: 'Ranger følgende syrer etter synkende syrestyrke: HF (pKa = 3,14), CH₃COOH (pKa = 4,74), H₂CO₃ (pKa = 6,37).',
            solution: 'Lavt pKa → **sterk syre**.\n**Rangering:** HF > CH₃COOH > H₂CO₃',
          },
          {
            label: 'b',
            task: 'Hvilken har høyest pH ved samme konsentrasjon?',
            solution: 'Svakest syre → **lavest [H₃O⁺]** → **høyest pH**.\n**H₂CO₃** har høyest pH.',
          },
        ],
        solution: 'a) HF > CH₃COOH > H₂CO₃; b) H₂CO₃',
        hints: ['Lavt pKa = sterk syre, Svak syre = høy pH'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-13',
        number: '9-41',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Karbondioksid i vann:',
        subTasks: [
          {
            label: 'a',
            task: 'CO₂ løses i vann og danner H₂CO₃ (Ka = 4,3 × 10⁻⁷). Hvis [H₂CO₃] = 0,033 M, hva blir pH?',
            solution: '[H₃O⁺] = √(4,3 × 10⁻⁷ × 0,033) = 1,19 × 10⁻⁴ M\npH = −log(1,19 × 10⁻⁴) = **3,92**',
          },
          {
            label: 'b',
            task: 'Hvorfor blir regn svakt surt (pH ≈ 5,6) selv uten forurensning?',
            solution: 'CO₂ fra luft løses i regndråper:\nCO₂ + H₂O → H₂CO₃\nH₂CO₃ er **svak syre** → pH ≈ 5-6.\n**Normal regn er naturlig svakt sur** pga. CO₂.',
          },
        ],
        solution: 'a) pH = 3,92; b) CO₂ danner H₂CO₃ (svak syre)',
        hints: ['CO₂ + H₂O → H₂CO₃, Svak syre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-14',
        number: '9-42',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgave - Likevektsberegninger:',
        subTasks: [
          {
            label: 'a',
            task: 'For 0,10 M CH₃COOH (Ka = 1,8 × 10⁻⁵), beregn [CH₃COOH], [CH₃COO⁻] og [H₃O⁺] ved likevekt.',
            solution: '[H₃O⁺] = √(1,8 × 10⁻⁵ × 0,10) = 1,34 × 10⁻³ M\n[CH₃COO⁻] = [H₃O⁺] = 1,34 × 10⁻³ M (fra protolyse)\n[CH₃COOH] = 0,10 − 1,34 × 10⁻³ ≈ **0,099 M** (nesten uendret!)',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor [CH₃COOH] nesten ikke endres ved protolyse.',
            solution: 'Protolysegraden α = 1,34% → kun **1,34%** protolyserer.\n**98,66%** av CH₃COOH forblir uprotolysert → konsentrasjonen endres minimalt.',
          },
        ],
        solution: 'a) [CH₃COOH] = 0,099 M, [CH₃COO⁻] = [H₃O⁺] = 1,34 × 10⁻³ M; b) Kun 1,34% protolyserer',
        hints: ['α << 100% → [HA] ≈ c'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-15',
        number: '9-43',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avansert oppgave - Temperaturavhengighet:',
        subTasks: [
          {
            label: 'a',
            task: 'Ved 25°C er Kw = 1,0 × 10⁻¹⁴. Ved 37°C (kroppstemperatur) er Kw = 2,4 × 10⁻¹⁴. Hva blir pH i rent vann ved 37°C?',
            solution: 'Ved 37°C: [H₃O⁺] = [OH⁻] = √Kw = √(2,4 × 10⁻¹⁴) = 1,55 × 10⁻⁷ M\npH = −log(1,55 × 10⁻⁷) = **6,81**\n(Nøytralt vann har pH < 7 ved høyere temperatur!)',
          },
          {
            label: 'b',
            task: 'Er vann ved 37°C surt, basisk eller nøytralt?',
            solution: '[H₃O⁺] = [OH⁻] → **nøytralt** (selv om pH < 7).\n**pH = 7 er kun nøytralt ved 25°C!**\nVed andre temperaturer: nøytralt når [H₃O⁺] = [OH⁻].',
          },
        ],
        solution: 'a) pH = 6,81; b) Nøytralt ([H₃O⁺] = [OH⁻])',
        hints: ['Nøytralt: [H₃O⁺] = [OH⁻], uavhengig av temperatur'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-3-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-3-ex-16',
        number: '9-44',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom Ka og pKa.',
            solution: 'Ka = **likevektskonstant** for protolyse (vanlig tall).\npKa = **−log(Ka)** (logaritmisk skala, lettere å sammenligne).\nStor Ka ↔ Liten pKa ↔ **Sterk syre**.',
          },
          {
            label: 'b',
            task: 'Hvordan beregner du pH for en svak syre?',
            solution: '1. Finn Ka (eller pKa)\n2. Beregn [H₃O⁺] = √(Ka × c)\n3. Beregn pH = −log[H₃O⁺]',
          },
          {
            label: 'c',
            task: 'Hvordan beregner du pH for en svak base?',
            solution: '1. Finn Kb (eller pKb)\n2. Beregn [OH⁻] = √(Kb × c)\n3. Beregn pOH = −log[OH⁻]\n4. Beregn pH = 14 − pOH',
          },
        ],
        solution: 'a) pKa = −log(Ka); b) [H₃O⁺] = √(Ka × c), pH = −log[H₃O⁺]; c) [OH⁻] = √(Kb × c), pH = 14 − pOH',
        hints: ['pKa = −log(Ka), Svak syre: √(Ka × c), Svak base: √(Kb × c)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kjemi 1 Kapittel 9.4: Titrering
// ============================================================================

const CHAPTER_KJEMI1_9_4: TextbookChapter = {
  id: 'kjemi1-9-4',
  courseId: 'kjemi1',
  chapterNumber: '9.4',
  title: 'Titrering',
  description: 'Lær volumetrisk og gravimetrisk titrering, ekvivalenspunktet, indikatorer og titreringskurver.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare volumetrisk og gravimetrisk titrering',
    'finne ekvivalenspunktet',
    'velge riktig indikator',
    'tolke titreringskurver',
    'forstå bufferløsninger (introduksjon)',
  ],
  content: [
    // ========== VOLUMETRISK TITRERING ==========
    {
      id: 'kjemi1-9-4-intro',
      type: 'text',
      content: `## Volumetrisk titrering

**Titrering** er en metode for å bestemme konsentrasjonen av en ukjent løsning ved å reagere den med en kjent løsning.

### Prinsipp

1. **Analys** Løsning med ukjent konsentrasjon (i kolbe)
2. **Titrant**: Løsning med kjent konsentrasjon (i byrett)
3. **Nøytraliseringsreaksjon**:
   $$\\text{H}_3\\text{O}^+ + \\text{OH}^- \\rightarrow 2\\text{H}_2\\text{O}$$

### Ekvivalenspunktet

**Ekvivalenspunktet** er når mol H₃O⁺ = mol OH⁻ (fullstendig nøytralisering).

Ved ekvivalenspunktet:
$$n_{\\text{H}_3\\text{O}^+} = n_{\\text{OH}^-}$$
$$c_\\text{syre} \\cdot V_\\text{syre} = c_\\text{base} \\cdot V_\\text{base}$$

### Fremgangsmåte

1. Mål nøyaktig volum av analytløsningen (pipette)
2. Tilsett noen dråper indikator
3. Titrer med titrant til indikator skifter farge (ekvivalenspunkt)
4. Avles volumet av titrant (byrett)
5. Beregn konsentrasjonen`,
    },

    {
      id: 'kjemi1-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregn konsentrasjon',
      problem: `25,0 mL HCl titreres med 0,100 M NaOH. Det går med 30,0 mL NaOH til ekvivalenspunktet. Beregn [HCl].`,
      solution: `**Løsning:**

Ved ekvivalenspunktet: mol H₃O⁺ = mol OH⁻

$$n_{\\text{OH}^-} = c_{\\text{NaOH}} \\cdot V_{\\text{NaOH}} = 0{,}100 \\times 0{,}0300 = 0{,}00300 \\text{ mol}$$

$$n_{\\text{H}_3\\text{O}^+} = n_{\\text{OH}^-} = 0{,}00300 \\text{ mol}$$

$$c_{\\text{HCl}} = \\frac{n_{\\text{H}_3\\text{O}^+}}{V_{\\text{HCl}}} = \\frac{0{,}00300}{0{,}0250} = 0{,}120 \\text{ M}$$

**Svar:** [HCl] = 0,120 M`,
    },

    {
      id: 'kjemi1-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-1',
        number: '9-45',
        type: 'classic',
        difficulty: 'medium',
        task: 'Volumetrisk titrering - beregn konsentrasjon:',
        subTasks: [
          {
            label: 'a',
            task: '20,0 mL HNO₃ titreres med 0,150 M NaOH. Det går med 25,0 mL NaOH. Beregn [HNO₃].',
            solution: 'n(OH⁻) = 0,150 × 0,0250 = 0,00375 mol\nn(H₃O⁺) = 0,00375 mol\n[HNO₃] = 0,00375 / 0,0200 = **0,188 M**',
          },
          {
            label: 'b',
            task: '30,0 mL CH₃COOH titreres med 0,200 M KOH. Det går med 15,0 mL KOH. Beregn [CH₃COOH].',
            solution: 'n(OH⁻) = 0,200 × 0,0150 = 0,00300 mol\nn(H₃O⁺) = 0,00300 mol\n[CH₃COOH] = 0,00300 / 0,0300 = **0,100 M**',
          },
        ],
        solution: 'a) [HNO₃] = 0,188 M; b) [CH₃COOH] = 0,100 M',
        hints: ['n(OH⁻) = c × V, n(H₃O⁺) = n(OH⁻), [syre] = n / V'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GRAVIMETRISK TITRERING ==========
    {
      id: 'kjemi1-9-4-gravimetrisk',
      type: 'text',
      content: `## Gravimetrisk titrering

I **gravimetrisk titrering** måles **massen** av titrant i stedet for volumet.

### Fordeler

- **Høyere presisjon** (vekt er mer nøyaktig enn volum)
- Ingen korreksjon for temperatur (volum endres med temperatur)
- Enklere utstyr (vekt i stedet for byrett)

### Beregning

$$n_{\\text{titrant}} = \\frac{m_{\\text{titrant}}}{M_{\\text{titrant}}}$$

**Eksempel:**
- Masse NaOH-løsning tilsatt: 5,25 g
- Konsentrasjon NaOH: 0,100 M (densitet 1,00 g/mL)
- Volum: V = m / ρ = 5,25 / 1,00 = 5,25 mL
- Mol: n = 0,100 × 0,00525 = 0,000525 mol`,
    },

    {
      id: 'kjemi1-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Gravimetrisk titrering',
      problem: `20,0 mL HCl titreres gravimetrisk med 0,100 M NaOH (ρ = 1,00 g/mL). Massen av NaOH-løsning tilsatt er 6,00 g. Beregn [HCl].`,
      solution: `**Løsning:**

Volum NaOH-løsning:
$$V_{\\text{NaOH}} = \\frac{m}{\\rho} = \\frac{6{,}00}{1{,}00} = 6{,}00 \\text{ mL} = 0{,}00600 \\text{ L}$$

Mol OH⁻:
$$n_{\\text{OH}^-} = c \\cdot V = 0{,}100 \\times 0{,}00600 = 0{,}000600 \\text{ mol}$$

[HCl]:
$$[\\text{HCl}] = \\frac{n_{\\text{H}_3\\text{O}^+}}{V_{\\text{HCl}}} = \\frac{0{,}000600}{0{,}0200} = 0{,}0300 \\text{ M}$$

**Svar:** [HCl] = 0,0300 M`,
    },

    {
      id: 'kjemi1-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-2',
        number: '9-46',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gravimetrisk titrering:',
        subTasks: [
          {
            label: 'a',
            task: '25,0 mL H₂SO₄ titreres med 0,200 M NaOH (ρ = 1,00 g/mL). Masse tilsatt: 10,0 g. Beregn [H₂SO₄]. (H₂SO₄ er diprotisk)',
            solution: 'V(NaOH) = 10,0 / 1,00 = 10,0 mL = 0,0100 L\nn(OH⁻) = 0,200 × 0,0100 = 0,00200 mol\nH₂SO₄ + 2OH⁻ → SO₄²⁻ + 2H₂O\nn(H₂SO₄) = 0,00200 / 2 = 0,00100 mol\n[H₂SO₄] = 0,00100 / 0,0250 = **0,0400 M**',
          },
          {
            label: 'b',
            task: 'Hvorfor er gravimetrisk titrering mer nøyaktig enn volumetrisk?',
            solution: '**Vekt** kan måles med høyere presisjon (±0,001 g) enn **volum** (±0,05 mL).\nVolum endres med **temperatur** → korreksjon nødvendig.\nGravimetrisk: **Ingen temperaturkorreksjon** → mer nøyaktig.',
          },
        ],
        solution: 'a) [H₂SO₄] = 0,0400 M; b) Høyere presisjon, ingen temperaturkorreksjon',
        hints: ['H₂SO₄ er diprotisk, Masse → volum → mol'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== INDIKATORER ==========
    {
      id: 'kjemi1-9-4-indikatorer',
      type: 'text',
      content: `## Indikatorer

**Indikatorer** er svake syrer/baser som skifter farge ved ulike pH-verdier.

### Vanlige indikatorer

| Indikator | Farge (sur) | Farge (basisk) | Omslagsområde (pH) |
|-----------|-------------|----------------|-------------------|
| Metylrødt | Rød | Gul | 4,4 – 6,2 |
| Fenolftalein | Fargeløs | Rosa | 8,3 – 10,0 |
| Bromtymolblått | Gul | Blå | 6,0 – 7,6 |

### Valg av indikator

- **Sterk syre + sterk base**: pH ved ekvivalenspunkt = 7 → Bruk fenolftalein eller metylrødt
- **Svak syre + sterk base**: pH ved ekvivalenspunkt > 7 → Bruk fenolftalein
- **Sterk syre + svak base**: pH ved ekvivalenspunkt < 7 → Bruk metylrødt

**Viktig:** Ekvivalenspunktet må ligge **innenfor** indikatorens omslagsområde!`,
    },

    {
      id: 'kjemi1-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Velg indikator',
      problem: `Hvilken indikator bør brukes ved titrering av:
a) HCl med NaOH
b) CH₃COOH med NaOH
c) NH₃ med HCl`,
      solution: `**Løsning:**

a) **HCl + NaOH** (sterk + sterk):
   - pH ved ekvivalenspunkt = 7
   - Bruk **fenolftalein** (omslag 8,3-10) eller **metylrødt** (omslag 4,4-6,2)

b) **CH₃COOH + NaOH** (svak syre + sterk base):
   - pH ved ekvivalenspunkt > 7 (basisk)
   - Bruk **fenolftalein** (omslag 8,3-10)

c) **NH₃ + HCl** (svak base + sterk syre):
   - pH ved ekvivalenspunkt < 7 (surt)
   - Bruk **metylrødt** (omslag 4,4-6,2)`,
    },

    {
      id: 'kjemi1-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-3',
        number: '9-47',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig indikator:',
        subTasks: [
          {
            label: 'a',
            task: 'HNO₃ (sterk syre) + KOH (sterk base)',
            solution: 'pH ved ekvivalenspunkt = 7\nBruk **fenolftalein** eller **metylrødt**.',
          },
          {
            label: 'b',
            task: 'H₂CO₃ (svak syre) + NaOH (sterk base)',
            solution: 'pH ved ekvivalenspunkt > 7 (basisk)\nBruk **fenolftalein** (omslag 8,3-10).',
          },
          {
            label: 'c',
            task: 'NH₃ (svak base) + HBr (sterk syre)',
            solution: 'pH ved ekvivalenspunkt < 7 (surt)\nBruk **metylrødt** (omslag 4,4-6,2).',
          },
        ],
        solution: 'a) Fenolftalein eller metylrødt; b) Fenolftalein; c) Metylrødt',
        hints: ['Sterk+sterk: pH=7, Svak syre+sterk base: pH>7, Sterk syre+svak base: pH<7'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TITRERINGSKURVER ==========
    {
      id: 'kjemi1-9-4-kurver',
      type: 'text',
      content: `## Titreringskurver

En **titreringskurve** viser hvordan pH endres når titrant tilsettes.

### Sterk syre + sterk base

**Eksempel:** HCl + NaOH

- **Start**: pH lav (sur)
- **Ekvivalenspunkt**: pH = 7
- **Etter ekvivalenspunkt**: pH høy (basisk)
- **Bratt overgang** ved ekvivalenspunkt

### Svak syre + sterk base

**Eksempel:** CH₃COOH + NaOH

- **Start**: pH høyere enn sterk syre (delvis protolyse)
- **Ekvivalenspunkt**: pH > 7 (basisk, pga. CH₃COO⁻)
- **Mindre bratt overgang** (buffersone før ekvivalenspunkt)
- **Halvtitre** ringspunktet**: pH = pKa

### Svak base + sterk syre

**Eksempel:** NH₃ + HCl

- **Start**: pH høy (basisk)
- **Ekvivalenspunkt**: pH < 7 (surt, pga. NH₄⁺)
- **Mindre bratt overgang**`,
    },

    {
      id: 'kjemi1-9-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Tolkning av titreringskurve',
      problem: `Ved titrering av 25,0 mL ukjent syre med 0,100 M NaOH observeres:
- Start-pH = 2,87
- Halvtitre:ringspunkt (12,5 mL NaOH): pH = 4,74
- Ekvivalenspunkt (25,0 mL NaOH): pH = 8,87

Hva kan du konkludere?`,
      solution: `**Løsning:**

1. **Start-pH = 2,87**: Høyere enn sterk syre (ville vært ≈1) → **svak syre**

2. **Halvtitre:ringspunkt pH = 4,74**: pH = pKa → **pKa = 4,74**
   - Dette stemmer med eddiksyre (CH₃COOH)!

3. **Ekvivalenspunkt pH = 8,87 > 7**: Basisk → **svak syre + sterk base**

4. **Konsentrasjon:**
   $$n_{\\text{OH}^-} = 0{,}100 \\times 0{,}0250 = 0{,}00250 \\text{ mol}$$
   $$[\\text{syre}] = 0{,}00250 / 0{,}0250 = 0{,}100 \\text{ M}$$

**Konklusjon:** 0,100 M eddiksyre (CH₃COOH)`,
    },

    {
      id: 'kjemi1-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-4',
        number: '9-48',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn pH ved ulike punkter i titreringen:',
        subTasks: [
          {
            label: 'a',
            task: '50,0 mL 0,100 M HCl titreres med 0,100 M NaOH. Hva er pH etter tilsetting av 25,0 mL NaOH?',
            solution: 'n(H₃O⁺) start = 0,100 × 0,050 = 0,00500 mol\nn(OH⁻) tilsatt = 0,100 × 0,025 = 0,00250 mol\nn(H₃O⁺) overskudd = 0,00500 − 0,00250 = 0,00250 mol\nTotalt volum = 75,0 mL = 0,075 L\n[H₃O⁺] = 0,00250 / 0,075 = 0,0333 M\npH = −log(0,0333) = **1,48**',
          },
          {
            label: 'b',
            task: 'Hva er pH ved ekvivalenspunktet?',
            solution: 'Ekvivalenspunkt: mol H₃O⁺ = mol OH⁻\nSterk syre + sterk base → pH = **7,00**',
          },
          {
            label: 'c',
            task: 'Hva er pH etter tilsetting av 60,0 mL NaOH?',
            solution: 'Ekvivalenspunkt ved 50,0 mL NaOH.\nOverskudd OH⁻: n(OH⁻) = 0,100 × (0,060 − 0,050) = 0,00100 mol\nTotalt volum = 110,0 mL = 0,110 L\n[OH⁻] = 0,00100 / 0,110 = 0,00909 M\npOH = −log(0,00909) = 2,04\npH = 14,00 − 2,04 = **11,96**',
          },
        ],
        solution: 'a) pH = 1,48; b) pH = 7,00; c) pH = 11,96',
        hints: ['Før ekvivalenspunkt: overskudd H₃O⁺, Ved ekvivalenspunkt: pH=7, Etter ekvivalenspunkt: overskudd OH⁻'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BUFFERLØSNINGER (INTRODUKSJON) ==========
    {
      id: 'kjemi1-9-4-buffer',
      type: 'text',
      content: `## Bufferløsninger (introduksjon)

En **bufferløsning** er en løsning som **motstår** pH-endringer når små mengder syre eller base tilsettes.

### Sammensetning

Buffer består av:
- **Svak syre** (HA) + **konjugert base** (A⁻)
- **Eller:** Svak base (B) + konjugert syre (BH⁺)

**Eksempel:**
- CH₃COOH/CH₃COO⁻ (eddiksyre/acetat)
- NH₃/NH₄⁺ (ammoniakk/ammonium)

### Hvordan virker en buffer?

Når H₃O⁺ tilsettes:
$$\\text{A}^- + \\text{H}_3\\text{O}^+ \\rightarrow \\text{HA} + \\text{H}_2\\text{O}$$
(A⁻ nøytraliserer H₃O⁺)

Når OH⁻ tilsettes:
$$\\text{HA} + \\text{OH}^- \\rightarrow \\text{A}^- + \\text{H}_2\\text{O}$$
(HA nøytraliserer OH⁻)

### Bufferkapasitet

- **Høy konsentrasjon** av HA og A⁻ → **god buffer**
- **Like mengder** HA og A⁻ → **best buffer** (pH = pKa)

**Merk:** I blod holder bufferløsninger (HCO₃⁻/H₂CO₃) pH = 7,40!`,
    },

    {
      id: 'kjemi1-9-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Buffer i blod',
      problem: `Blod inneholder HCO₃⁻/H₂CO₃ buffer. Forklar hvordan denne bufferen motstår pH-endringer.`,
      solution: `**Løsning:**

**Når CO₂ dannes** (fra metabolisme):
$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CO}_3$$
(Økt H₂CO₃ → mer sur)

**Buffer nøytraliserer:**
$$\\text{H}_2\\text{CO}_3 + \\text{HCO}_3^- \\rightarrow \\text{HCO}_3^- + \\text{H}_2\\text{O} + \\text{CO}_2$$
(HCO₃⁻ nøytraliserer overskudd H₂CO₃)

**Når base tilsettes:**
$$\\text{H}_2\\text{CO}_3 + \\text{OH}^- \\rightarrow \\text{HCO}_3^- + \\text{H}_2\\text{O}$$
(H₂CO₃ nøytraliserer OH⁻)

**Resultat:** pH forblir ≈ 7,40 (kritisk for kroppens funksjoner!)`,
    },

    {
      id: 'kjemi1-9-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-5',
        number: '9-49',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bufferløsninger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av følgende er bufferløsninger? (i) HCl + NaCl, (ii) CH₃COOH + CH₃COONa, (iii) NH₃ + NH₄Cl',
            solution: '(i) HCl er **sterk syre** → **ikke buffer**.\n(ii) CH₃COOH (svak syre) + CH₃COO⁻ (konjugert base) → **buffer**.\n(iii) NH₃ (svak base) + NH₄⁺ (konjugert syre) → **buffer**.\n**Svar:** (ii) og (iii)',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor HCl + NaCl ikke er en buffer.',
            solution: 'HCl er **sterk syre** → protolyserer fullstendig → **ingen HA** i løsningen.\nCl⁻ er **svak base** → kan ikke nøytralisere H₃O⁺ effektivt.\n**Ingen buffer** fordi det mangler svak syre/base-par.',
          },
        ],
        solution: 'a) (ii) og (iii); b) HCl er sterk syre (ikke svak)',
        hints: ['Buffer: svak syre + konjugert base'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-6',
        number: '9-50',
        type: 'classic',
        difficulty: 'medium',
        task: 'Titrering og buffer:',
        subTasks: [
          {
            label: 'a',
            task: 'Ved titrering av CH₃COOH med NaOH, hvorfor flater titreringskurven ut før ekvivalenspunktet?',
            solution: 'Før ekvivalenspunktet: CH₃COOH + CH₃COO⁻ (fra NaOH) → **bufferløsning**.\nBuffer **motstår** pH-endringer → **flatere kurve** (buffersone).\nVed halvtitre:ringspunkt: pH = pKa (best buffer).',
          },
          {
            label: 'b',
            task: 'Hvorfor er det ingen buffersone ved titrering av HCl med NaOH?',
            solution: 'HCl er **sterk syre** → ingen uprotolysert HCl i løsningen.\nCl⁻ er **svak base** → ingen buffer.\n**Ingen buffersone** → **bratt kurve** ved ekvivalenspunktet.',
          },
        ],
        solution: 'a) Bufferløsning (CH₃COOH + CH₃COO⁻); b) HCl er sterk syre (ingen buffer)',
        hints: ['Svak syre + konjugert base = buffer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-7',
        number: '9-51',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avsluttende spørsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor pH = pKa ved halv titrering av en svak syre.',
            solution: 'Ved halv titrering: [HA] = [A⁻] (halvparten protolysert).\nKa = [H₃O⁺][A⁻] / [HA] → [H₃O⁺] = Ka (når [HA] = [A⁻])\npH = −log[H₃O⁺] = −log(Ka) = **pKa**',
          },
          {
            label: 'b',
            task: 'Hvorfor er ekvivalenspunktet basisk ved titrering av svak syre med sterk base?',
            solution: 'Ved ekvivalenspunkt: All HA er nøytralisert → kun **A⁻** (konjugert base) i løsningen.\nA⁻ + H₂O ⇌ HA + OH⁻ (protolyse av A⁻)\n**OH⁻ dannes** → pH > 7 (**basisk**).',
          },
          {
            label: 'c',
            task: 'Hvorfor brukes ikke universalindikator ved titrering?',
            solution: 'Universalindikator skifter farge **gradvis** over stort pH-område.\nVed titrering: **brå fargeendring** ved ekvivalenspunkt ønskelig.\nSpesifikke indikatorer (fenolftalein, metylrødt) → **skarp fargeendring** → mer nøyaktig.',
          },
        ],
        solution: 'a) Ved halv titrering: [HA] = [A⁻] → pH = pKa; b) A⁻ er base → pH > 7; c) Gradvis fargeendring (ikke skarp nok)',
        hints: ['Halv titrering: [HA] = [A⁻], A⁻ er base, Skarp fargeendring ønskelig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-8',
        number: '9-52',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktisk titrering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor må du alltid skylle byretten med titrantløsningen før titrering?',
            solution: 'Hvis byretten inneholder **vann** fra vask → **fortynning** av titrant.\nSkylle med titrant → fjerner vann → **korrekt konsentrasjon** i byretten.',
          },
          {
            label: 'b',
            task: 'Hvorfor må du fjerne luftbobler fra byretten?',
            solution: 'Luftbobler **okkuperer volum** → **feil avlesning**.\nVolumet avlest inkluderer luft → **for mye titrant** registrert → **feil beregning**.',
          },
          {
            label: 'c',
            task: 'Hvorfor skal du titrer sakte nær ekvivalenspunktet?',
            solution: 'Nær ekvivalenspunkt: **brå pH-endring** ved små tilsetninger.\nRask titrering → **overskrider** ekvivalenspunkt → **feil resultat**.\nLangsom titrering → **nøyaktig** bestemmelse av ekvivalenspunkt.',
          },
        ],
        solution: 'a) Fjerne vann (unngå fortynning); b) Luftbobler gir feil avlesning; c) Unngå å overskride ekvivalenspunktet',
        hints: ['Fortynning, Volumfeil, Brå pH-endring'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-9-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-9-4-ex-9',
        number: '9-53',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom volumetrisk og gravimetrisk titrering?',
            solution: '**Volumetrisk:** Måler **volum** av titrant (byrett).\n**Gravimetrisk:** Måler **masse** av titrant (vekt).\nGravimetrisk er **mer nøyaktig** (ingen temperaturkorreksjon).',
          },
          {
            label: 'b',
            task: 'Hvordan velger du riktig indikator?',
            solution: 'Ekvivalenspunkt må ligge **innenfor** indikatorens omslagsområde.\n**Sterk+sterk:** pH=7 → fenolftalein eller metylrødt\n**Svak syre+sterk base:** pH>7 → fenolftalein\n**Sterk syre+svak base:** pH<7 → metylrødt',
          },
          {
            label: 'c',
            task: 'Hva er en bufferløsning?',
            solution: 'Løsning som **motstår** pH-endringer når syre/base tilsettes.\nBestår av **svak syre + konjugert base** (eller svak base + konjugert syre).\nEksempel: CH₃COOH/CH₃COO⁻, NH₃/NH₄⁺.',
          },
        ],
        solution: 'a) Volumetrisk: volum, Gravimetrisk: masse; b) Ekvivalenspunkt innenfor omslagsområde; c) Motstår pH-endringer (svak syre + konjugert base)',
        hints: ['Volum vs masse, Omslagsområde, Svak syre + konjugert base'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================
// KAPITTEL 10: ORGANISK KJEMI
// ============================================================

const CHAPTER_KJEMI1_10_1: TextbookChapter = {
  id: 'kjemi1-10-1',
  courseId: 'kjemi1',
  chapterNumber: '10.1',
  title: 'Introduksjon til organisk kjemi',
  description: 'Lær om karbonets spesielle egenskaper, hybridisering, strukturformler, metning og hydrokarboner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare karbonets spesielle egenskaper',
    'forklare hybridisering (sp³, sp², sp)',
    'bruke ulike strukturformler',
    'skille mellom mettede og umettede forbindelser',
    'identifisere hydrokarboner',
  ],
  content: [
    // ========== KARBONETS SPESIELLE EGENSKAPER ==========
    {
      id: 'kjemi1-10-1-intro',
      type: 'text',
      content: `## Karbonets spesielle egenskaper

**Organisk kjemi** er kjemien til karbon og dets forbindelser. Karbon er unikt fordi det kan danne:

### Karbonets egenskaper

1. **Fire bindinger**: Karbon har **4 valenselektroner** → kan danne **4 kovalente bindinger**
2. **Kjedning**: Karbon kan binde seg til andre karbonatomer → **lange kjeder** og **ringer**
3. **Varierende bindingstype**: Enkelt (C−C), dobbelt (C=C), trippel (C≡C)
4. **Stabile forbindelser**: Sterke C−C og C−H bindinger

### Hybridisering

**Hybridisering** er blanding av atomorbitalene for å danne nye orbitaler.

| Hybridisering | Bindingstype | Vinkel | Geometri | Eksempel |
|---------------|--------------|--------|----------|----------|
| **sp³** | 4 enkeltbindinger | 109,5° | Tetraedrisk | CH₄ (metan) |
| **sp²** | 1 dobbeltbinding + 2 enkelt | 120° | Trigonal plan | C₂H₄ (eten) |
| **sp** | 1 trippelbinding + 1 enkelt | 180° | Lineær | C₂H₂ (etyn) |

### Metning

- **Mettede forbindelser**: Kun **enkeltbindinger** mellom karbonatomer (sp³)
- **Umettede forbindelser**: **Dobbelt-** eller **trippelbindinger** (sp² eller sp)`,
    },

    {
      id: 'kjemi1-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hybridisering',
      problem: `Bestem hybridiseringen til karbon i:
a) Metan (CH₄)
b) Eten (C₂H₄)
c) Etyn (C₂H₂)`,
      solution: `**a) Metan (CH₄)**
- Karbon har **4 enkeltbindinger** (C−H)
- Hybridisering: **sp³**
- Geometri: **Tetraedrisk** (109,5°)

**b) Eten (C₂H₄)**
- Karbon har **1 dobbeltbinding** (C=C) + **2 enkeltbindinger** (C−H)
- Hybridisering: **sp²**
- Geometri: **Trigonal plan** (120°)

**c) Etyn (C₂H₂)**
- Karbon har **1 trippelbinding** (C≡C) + **1 enkeltbinding** (C−H)
- Hybridisering: **sp**
- Geometri: **Lineær** (180°)`,
    },

    {
      id: 'kjemi1-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-1',
        number: '10-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende om karbon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange valenselektroner har karbon?',
            solution: 'Karbon er i **gruppe 14** → **4 valenselektroner**.',
          },
          {
            label: 'b',
            task: 'Hvor mange bindinger kan karbon danne?',
            solution: 'Karbon har 4 valenselektroner → kan danne **4 kovalente bindinger**.',
          },
          {
            label: 'c',
            task: 'Hva menes med kjedning?',
            solution: '**Kjedning** er evnen til å binde seg til andre karbonatomer → danne **lange kjeder** og **ringer**.',
          },
        ],
        solution: 'a) 4 valenselektroner; b) 4 bindinger; c) Binde seg til andre karbonatomer',
        hints: ['Gruppe 14, Valenselektroner, C−C bindinger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-2',
        number: '10-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hybridisering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hybridiseringen til karbon i metan (CH₄)?',
            solution: 'CH₄: Karbon har **4 enkeltbindinger** → hybridisering: **sp³**.',
          },
          {
            label: 'b',
            task: 'Hva er vinkelen mellom bindingene i sp³-hybridisert karbon?',
            solution: 'sp³: **Tetraedrisk** geometri → vinkel: **109,5°**.',
          },
          {
            label: 'c',
            task: 'Hva er geometrien til sp²-hybridisert karbon?',
            solution: 'sp²: **Trigonal plan** geometri → vinkel: **120°**.',
          },
        ],
        solution: 'a) sp³; b) 109,5°; c) Trigonal plan (120°)',
        hints: ['Enkeltbindinger = sp³, Tetraedrisk, Trigonal plan'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== STRUKTURFORMLER ==========
    {
      id: 'kjemi1-10-1-strukturformler',
      type: 'text',
      content: `## Strukturformler

Det finnes flere måter å skrive organiske forbindelser på:

### 1. Molekylformel

Viser **antall atomer** av hvert element.

**Eksempel:** C₄H₁₀ (butan)

### 2. Strukturformel

Viser **alle bindinger** mellom atomer.

**Eksempel (butan):**
\`\`\`
    H   H   H   H
    |   |   |   |
H - C - C - C - C - H
    |   |   |   |
    H   H   H   H
\`\`\`

### 3. Kondensert formel

**Forenklet** strukturformel.

**Eksempel (butan):** CH₃−CH₂−CH₂−CH₃ eller CH₃(CH₂)₂CH₃

### 4. Strekformel (linjestuktur)

**Forenklet** visning hvor:
- Hver **knekk** og **endepunkt** representerer et karbonatom
- **Hydrogener** på karbon er **ikke vist** (implisitt)
- Andre atomer (O, N, Cl, etc.) **vises eksplisitt**

**Eksempel (butan):**
\`\`\`
     /\\/\\
\`\`\`

**Fordeler:**
- **Oversiktlig** for store molekyler
- Brukes mye i organisk kjemi`,
    },

    {
      id: 'kjemi1-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Strukturformler',
      problem: `Skriv propan (C₃H₈) som:
a) Strukturformel
b) Kondensert formel
c) Strekformel`,
      solution: `**a) Strukturformel:**
\`\`\`
    H   H   H
    |   |   |
H - C - C - C - H
    |   |   |
    H   H   H
\`\`\`

**b) Kondensert formel:**
CH₃−CH₂−CH₃

**c) Strekformel:**
\`\`\`
   /\\/
\`\`\`
(Hver knekk og endepunkt = C-atom)`,
    },

    {
      id: 'kjemi1-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-3',
        number: '10-3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Strukturformler:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva viser molekylformelen?',
            solution: 'Molekylformelen viser **antall atomer** av hvert element (f.eks. C₃H₈).',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom strukturformel og kondensert formel?',
            solution: '**Strukturformel:** Viser **alle bindinger**.\n**Kondensert formel:** **Forenklet** (f.eks. CH₃−CH₂−CH₃).',
          },
          {
            label: 'c',
            task: 'Hva representerer hvert endepunkt i en strekformel?',
            solution: 'Hvert **endepunkt** og **knekk** representerer et **karbonatom**.\nHydrogener på karbon er **implisitt** (ikke vist).',
          },
        ],
        solution: 'a) Antall atomer av hvert element; b) Strukturformel viser alle bindinger, kondensert er forenklet; c) Karbonatom',
        hints: ['Antall atomer, Forenklet, Karbonatom'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-4',
        number: '10-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv etan (C₂H₆):',
        subTasks: [
          {
            label: 'a',
            task: 'Som strukturformel.',
            solution: '\`\`\`\n    H   H\n    |   |\nH - C - C - H\n    |   |\n    H   H\n\`\`\`',
          },
          {
            label: 'b',
            task: 'Som kondensert formel.',
            solution: 'CH₃−CH₃',
          },
          {
            label: 'c',
            task: 'Hvor mange bindinger har hvert karbonatom?',
            solution: 'Hvert karbon har **4 bindinger** (1 C−C, 3 C−H).',
          },
        ],
        solution: 'a) H-C-C-H (alle bindinger vist); b) CH₃−CH₃; c) 4 bindinger',
        hints: ['C−C binding, 3 C−H per karbon, 4 bindinger totalt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== HYDROKARBONER ==========
    {
      id: 'kjemi1-10-1-hydrokarboner',
      type: 'text',
      content: `## Hydrokarboner

**Hydrokarboner** er organiske forbindelser som **kun** inneholder **karbon** (C) og **hydrogen** (H).

### Hovedtyper

| Type | Bindinger | Generell formel | Eksempel |
|------|-----------|-----------------|----------|
| **Alkaner** | Kun enkeltbindinger (C−C) | CₙH₂ₙ₊₂ | CH₄ (metan) |
| **Alkener** | Minst én dobbeltbinding (C=C) | CₙH₂ₙ | C₂H₄ (eten) |
| **Alkyner** | Minst én trippelbinding (C≡C) | CₙH₂ₙ₋₂ | C₂H₂ (etyn) |

### Metning

- **Mettede**: Alkaner (kun enkeltbindinger)
- **Umettede**: Alkener og alkyner (dobbelt-/trippelbindinger)

### Navnsetting

Antall karbonatomer bestemmer **stammen**:

| Antall C | Stamme | Alkan | Alken | Alkyn |
|----------|--------|-------|-------|-------|
| 1 | met- | metan | - | - |
| 2 | et- | etan | eten | etyn |
| 3 | prop- | propan | propen | propyn |
| 4 | but- | butan | buten | butyn |
| 5 | pent- | pentan | penten | pentyn |`,
    },

    {
      id: 'kjemi1-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hydrokarboner',
      problem: `Identifiser følgende hydrokarboner:
a) C₅H₁₂
b) C₄H₈
c) C₃H₄`,
      solution: `**a) C₅H₁₂**
- Test alkan-formel: CₙH₂ₙ₊₂ → C₅H₁₀₊₂ = C₅H₁₂ ✓
- **Pentan** (alkan, mettet)

**b) C₄H₈**
- Test alken-formel: CₙH₂ₙ → C₄H₈ ✓
- **Buten** (alken, umettet, dobbeltbinding)

**c) C₃H₄**
- Test alkyn-formel: CₙH₂ₙ₋₂ → C₃H₆₋₂ = C₃H₄ ✓
- **Propyn** (alkyn, umettet, trippelbinding)`,
    },

    {
      id: 'kjemi1-10-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-5',
        number: '10-5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hydrokarboner:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et hydrokarbon?',
            solution: 'En forbindelse som **kun** inneholder **karbon** (C) og **hydrogen** (H).',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom alkaner og alkener?',
            solution: '**Alkaner:** Kun **enkeltbindinger** (C−C), mettet.\n**Alkener:** Minst én **dobbeltbinding** (C=C), umettet.',
          },
          {
            label: 'c',
            task: 'Hva er den generelle formelen for alkaner?',
            solution: 'CₙH₂ₙ₊₂ (f.eks. C₃H₈ for propan).',
          },
        ],
        solution: 'a) Kun karbon og hydrogen; b) Alkaner har enkeltbindinger, alkener har dobbeltbindinger; c) CₙH₂ₙ₊₂',
        hints: ['C og H, Enkelt vs dobbeltbinding, CₙH₂ₙ₊₂'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-6',
        number: '10-6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser hydrokarbon-type:',
        subTasks: [
          {
            label: 'a',
            task: 'C₆H₁₄',
            solution: 'Test CₙH₂ₙ₊₂: C₆H₁₂₊₂ = C₆H₁₄ ✓ → **Alkan** (heksan)',
          },
          {
            label: 'b',
            task: 'C₅H₁₀',
            solution: 'Test CₙH₂ₙ: C₅H₁₀ ✓ → **Alken** (penten)',
          },
          {
            label: 'c',
            task: 'C₄H₆',
            solution: 'Test CₙH₂ₙ₋₂: C₄H₈₋₂ = C₄H₆ ✓ → **Alkyn** (butyn)',
          },
        ],
        solution: 'a) Alkan (heksan); b) Alken (penten); c) Alkyn (butyn)',
        hints: ['CₙH₂ₙ₊₂ = alkan, CₙH₂ₙ = alken, CₙH₂ₙ₋₂ = alkyn'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-7',
        number: '10-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Metning:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "mettet forbindelse"?',
            solution: 'Forbindelsen har **kun enkeltbindinger** mellom karbonatomer (sp³-hybridisert).\nEksempel: Alkaner (CₙH₂ₙ₊₂).',
          },
          {
            label: 'b',
            task: 'Hva betyr "umettet forbindelse"?',
            solution: 'Forbindelsen har **dobbelt-** eller **trippelbindinger** (sp² eller sp).\nEksempel: Alkener (C=C) eller alkyner (C≡C).',
          },
          {
            label: 'c',
            task: 'Er propen (C₃H₆) mettet eller umettet?',
            solution: 'C₃H₆: CₙH₂ₙ → **alken** → har **dobbeltbinding** (C=C) → **umettet**.',
          },
        ],
        solution: 'a) Kun enkeltbindinger; b) Dobbelt- eller trippelbindinger; c) Umettet',
        hints: ['Enkeltbindinger, Dobbelt-/trippelbindinger, C₃H₆ = alken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-8',
        number: '10-8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Navnsetting:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva heter alkanen med 7 karbonatomer?',
            solution: '7 karbonatomer → stamme: **hept-** → alkan: **heptan** (C₇H₁₆).',
          },
          {
            label: 'b',
            task: 'Hva heter alkenen med 5 karbonatomer?',
            solution: '5 karbonatomer → stamme: **pent-** → alken: **penten** (C₅H₁₀).',
          },
          {
            label: 'c',
            task: 'Hva er molekylformelen til oktan?',
            solution: 'Oktan → 8 karbonatomer → alkan → CₙH₂ₙ₊₂ → **C₈H₁₈**.',
          },
        ],
        solution: 'a) Heptan; b) Penten; c) C₈H₁₈',
        hints: ['hept- = 7, pent- = 5, okt- = 8, CₙH₂ₙ₊₂'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-9',
        number: '10-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hybridisering i molekyler:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hybridiseringen til karbon i etan (C₂H₆)?',
            solution: 'Etan: Kun **enkeltbindinger** (C−C, C−H) → **sp³**.',
          },
          {
            label: 'b',
            task: 'Hva er hybridiseringen til karbon i eten (C₂H₄)?',
            solution: 'Eten: **Dobbeltbinding** (C=C) → **sp²**.',
          },
          {
            label: 'c',
            task: 'Hva er hybridiseringen til karbon i etyn (C₂H₂)?',
            solution: 'Etyn: **Trippelbinding** (C≡C) → **sp**.',
          },
        ],
        solution: 'a) sp³; b) sp²; c) sp',
        hints: ['Enkeltbinding = sp³, Dobbeltbinding = sp², Trippelbinding = sp'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-10',
        number: '10-10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Geometri og vinkler:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er geometrien rundt et sp³-hybridisert karbon?',
            solution: 'sp³: **Tetraedrisk** geometri → vinkel: **109,5°**.\nEksempel: Metan (CH₄).',
          },
          {
            label: 'b',
            task: 'Hva er geometrien rundt et sp²-hybridisert karbon?',
            solution: 'sp²: **Trigonal plan** geometri → vinkel: **120°**.\nEksempel: Eten (C₂H₄).',
          },
          {
            label: 'c',
            task: 'Hva er geometrien rundt et sp-hybridisert karbon?',
            solution: 'sp: **Lineær** geometri → vinkel: **180°**.\nEksempel: Etyn (C₂H₂).',
          },
        ],
        solution: 'a) Tetraedrisk (109,5°); b) Trigonal plan (120°); c) Lineær (180°)',
        hints: ['sp³ = 109,5°, sp² = 120°, sp = 180°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-11',
        number: '10-11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Generelle formler:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn molekylformelen til alkanen med 10 karbonatomer.',
            solution: 'Alkan: CₙH₂ₙ₊₂ → n=10 → C₁₀H₂₀₊₂ = **C₁₀H₂₂** (dekan).',
          },
          {
            label: 'b',
            task: 'Finn molekylformelen til alkenen med 8 karbonatomer.',
            solution: 'Alken: CₙH₂ₙ → n=8 → **C₈H₁₆** (okten).',
          },
          {
            label: 'c',
            task: 'Finn molekylformelen til alkynet med 6 karbonatomer.',
            solution: 'Alkyn: CₙH₂ₙ₋₂ → n=6 → C₆H₁₂₋₂ = **C₆H₁₀** (heksyn).',
          },
        ],
        solution: 'a) C₁₀H₂₂; b) C₈H₁₆; c) C₆H₁₀',
        hints: ['CₙH₂ₙ₊₂, CₙH₂ₙ, CₙH₂ₙ₋₂'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-12',
        number: '10-12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Strukturer og bindinger:',
        subTasks: [
          {
            label: 'a',
            task: 'Tegn strekformelen til butan (C₄H₁₀).',
            solution: 'Butan: 4 karbonatomer i **rett kjede**:\n```\n   /\\/\\/\\\n```\n(Hver knekk og endepunkt = C, hydrogenatomer implisitt).',
          },
          {
            label: 'b',
            task: 'Hvor mange C−C bindinger har butan?',
            solution: 'Butan: **4 karbonatomer** → **3 C−C bindinger** (mellom C1-C2, C2-C3, C3-C4).',
          },
          {
            label: 'c',
            task: 'Hvor mange C−H bindinger har butan?',
            solution: 'C₄H₁₀: **10 hydrogenatomer** → **10 C−H bindinger**.',
          },
        ],
        solution: 'a) /\\/\\/\\ (4 karbonatomer); b) 3 C−C bindinger; c) 10 C−H bindinger',
        hints: ['Strekformel: knekk = C, n C → (n-1) C−C bindinger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-1-ex-13',
        number: '10-13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor karbon kan danne så mange forbindelser.',
            solution: 'Karbon har **4 valenselektroner** → kan danne **4 bindinger**.\n**Kjedning**: Kan binde seg til andre karbon → **lange kjeder** og **ringer**.\n**Varierende bindingstype**: Enkelt, dobbelt, trippel → **stor variasjon**.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom mettede og umettede forbindelser?',
            solution: '**Mettede:** Kun **enkeltbindinger** (C−C) → alkaner → CₙH₂ₙ₊₂.\n**Umettede:** **Dobbelt-** eller **trippelbindinger** → alkener/alkyner → CₙH₂ₙ eller CₙH₂ₙ₋₂.',
          },
          {
            label: 'c',
            task: 'Hvorfor er strekformelen nyttig?',
            solution: 'Strekformelen er **oversiktlig** for store molekyler.\nKarbonatomer og bindinger **implisitt** → **enklere** å tegne.\nBrukes mye i organisk kjemi.',
          },
        ],
        solution: 'a) 4 bindinger, kjedning, varierende bindingstype; b) Mettet: enkeltbindinger, Umettet: dobbelt-/trippelbindinger; c) Oversiktlig for store molekyler',
        hints: ['4 bindinger, Kjedning, Enkelt vs dobbelt, Oversiktlig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

const CHAPTER_KJEMI1_10_2: TextbookChapter = {
  id: 'kjemi1-10-2',
  courseId: 'kjemi1',
  chapterNumber: '10.2',
  title: 'Funksjonelle grupper',
  description: 'Lær om funksjonelle grupper (alkoholer, aldehyder, ketoner, karboksylsyrer, estere, etere, aminer, amider) og IUPAC-navnsetting.',
  estimatedMinutes: 60,
  competenceGoals: [
    'identifisere funksjonelle grupper',
    'bruke IUPAC-navnsetting',
    'skille mellom ulike forbindelsesklasser',
    'forklare egenskaper til funksjonelle grupper',
  ],
  content: [
    // ========== FUNKSJONELLE GRUPPER ==========
    {
      id: 'kjemi1-10-2-intro',
      type: 'text',
      content: `## Funksjonelle grupper

**Funksjonell gruppe** er en atomgruppe som gir spesielle **kjemiske egenskaper** til en organisk forbindelse.

### Hovedgrupper

| Forbindelsesklasse | Funksjonell gruppe | Formel | Eksempel |
|-------------------|-------------------|--------|----------|
| **Alkan** | − | C−C | Etan (CH₃−CH₃) |
| **Alken** | Dobbeltbinding | C=C | Eten (CH₂=CH₂) |
| **Alkyn** | Trippelbinding | C≡C | Etyn (HC≡CH) |
| **Alkohol** | Hydroksylgruppe | −OH | Etanol (CH₃CH₂OH) |
| **Aldehyd** | Aldehydgruppe | −CHO | Etanal (CH₃CHO) |
| **Keton** | Ketogruppe | C=O | Propanon (CH₃COCH₃) |
| **Karboksylsyre** | Karboksylgruppe | −COOH | Etansyre (CH₃COOH) |
| **Ester** | Estergruppe | −COO− | Etylacetat (CH₃COOCH₂CH₃) |
| **Eter** | Etergruppe | −O− | Dietyleter (CH₃CH₂−O−CH₂CH₃) |
| **Amin** | Amingruppe | −NH₂ | Metylamin (CH₃NH₂) |
| **Amid** | Amidgruppe | −CONH₂ | Etanamid (CH₃CONH₂) |

### Viktige egenskaper

- **−OH (alkohol):** Polær, løselig i vann, hydrogenbinding
- **−CHO (aldehyd):** Polær, reaktiv (oksideres lett)
- **−COOH (karboksylsyre):** Sur, polær, hydrogenbinding
- **−NH₂ (amin):** Basisk, polær, hydrogenbinding`,
    },

    {
      id: 'kjemi1-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifiser funksjonell gruppe',
      problem: `Identifiser funksjonell gruppe i:
a) CH₃CH₂OH
b) CH₃CHO
c) CH₃COOH`,
      solution: `**a) CH₃CH₂OH**
- Funksjonell gruppe: **−OH** (hydroksylgruppe)
- Forbindelsesklasse: **Alkohol** (etanol)

**b) CH₃CHO**
- Funksjonell gruppe: **−CHO** (aldehydgruppe)
- Forbindelsesklasse: **Aldehyd** (etanal)

**c) CH₃COOH**
- Funksjonell gruppe: **−COOH** (karboksylgruppe)
- Forbindelsesklasse: **Karboksylsyre** (etansyre)`,
    },

    {
      id: 'kjemi1-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-1',
        number: '10-14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende funksjonelle grupper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en funksjonell gruppe?',
            solution: 'En **atomgruppe** som gir spesielle **kjemiske egenskaper** til en organisk forbindelse.\nEksempel: −OH (alkohol), −COOH (karboksylsyre).',
          },
          {
            label: 'b',
            task: 'Hva er funksjonell gruppe for alkoholer?',
            solution: 'Alkoholer har **−OH** (hydroksylgruppe).\nEksempel: Etanol (CH₃CH₂OH).',
          },
          {
            label: 'c',
            task: 'Hva er funksjonell gruppe for karboksylsyrer?',
            solution: 'Karboksylsyrer har **−COOH** (karboksylgruppe).\nEksempel: Etansyre (CH₃COOH).',
          },
        ],
        solution: 'a) Atomgruppe som gir spesielle kjemiske egenskaper; b) −OH (hydroksylgruppe); c) −COOH (karboksylgruppe)',
        hints: ['Atomgruppe, −OH, −COOH'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-2',
        number: '10-15',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser forbindelsesklasse:',
        subTasks: [
          {
            label: 'a',
            task: 'CH₃CH₂CH₂OH',
            solution: 'Funksjonell gruppe: **−OH** → **Alkohol** (propanol).',
          },
          {
            label: 'b',
            task: 'CH₃COCH₃',
            solution: 'Funksjonell gruppe: **C=O** (midt i kjeden) → **Keton** (propanon).',
          },
          {
            label: 'c',
            task: 'CH₃CH₂COOH',
            solution: 'Funksjonell gruppe: **−COOH** → **Karboksylsyre** (propansyre).',
          },
        ],
        solution: 'a) Alkohol; b) Keton; c) Karboksylsyre',
        hints: ['−OH, C=O (midt), −COOH'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== IUPAC-NAVNSETTING ==========
    {
      id: 'kjemi1-10-2-iupac',
      type: 'text',
      content: `## IUPAC-navnsetting

**IUPAC** (International Union of Pure and Applied Chemistry) har laget et system for systematisk navnsetting.

### Grunnregler

1. **Finn hovedkjeden**: Lengste sammenhengende kjede av karbonatomer
2. **Nummerer kjeden**: Start fra enden nærmest funksjonell gruppe
3. **Identifiser sidegrupper**: Metyl (−CH₃), etyl (−C₂H₅), etc.
4. **Navngi forbindelsen**:
   - Sidegrupper (med posisjon) + stamme + endelse

### Endelser

| Forbindelsesklasse | Endelse | Eksempel |
|-------------------|---------|----------|
| **Alkan** | -an | propan |
| **Alken** | -en | propen |
| **Alkyn** | -yn | propyn |
| **Alkohol** | -ol | propanol |
| **Aldehyd** | -al | propanal |
| **Keton** | -on | propanon |
| **Karboksylsyre** | -syre | propansyre |
| **Amin** | -amin | propylamin |

### Sidegrupper

- **Metyl**: −CH₃
- **Etyl**: −C₂H₅
- **Propyl**: −C₃H₇

### Eksempel

**2-metylbutan:**
\`\`\`
    CH₃
    |
CH₃-CH-CH₂-CH₃
\`\`\`
- **Hovedkjede**: 4 karbonatomer (butan)
- **Sidegruppe**: Metyl (−CH₃) på posisjon 2`,
    },

    {
      id: 'kjemi1-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: IUPAC-navnsetting',
      problem: `Navngi følgende forbindelser:
a) CH₃CH₂CH₂OH
b) CH₃CH₂CHO
c) CH₃CH(CH₃)CH₃`,
      solution: `**a) CH₃CH₂CH₂OH**
1. Hovedkjede: **3 karbonatomer** → stamme: **prop-**
2. Funksjonell gruppe: **−OH** → endelse: **-ol**
3. Navn: **Propanol** (eller 1-propanol)

**b) CH₃CH₂CHO**
1. Hovedkjede: **3 karbonatomer** → stamme: **prop-**
2. Funksjonell gruppe: **−CHO** → endelse: **-al**
3. Navn: **Propanal**

**c) CH₃CH(CH₃)CH₃**
1. Hovedkjede: **3 karbonatomer** → stamme: **prop-**
2. Sidegruppe: **Metyl (−CH₃)** på posisjon **2**
3. Navn: **2-metylpropan**`,
    },

    {
      id: 'kjemi1-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-3',
        number: '10-16',
        type: 'classic',
        difficulty: 'medium',
        task: 'IUPAC-navnsetting (alkoholer):',
        subTasks: [
          {
            label: 'a',
            task: 'Navngi CH₃CH₂OH.',
            solution: 'Hovedkjede: **2 karbonatomer** (etanol).\nFunksjonell gruppe: **−OH** → endelse: **-ol**.\nNavn: **Etanol**.',
          },
          {
            label: 'b',
            task: 'Navngi CH₃CH₂CH₂CH₂OH.',
            solution: 'Hovedkjede: **4 karbonatomer** (butanol).\nFunksjonell gruppe: **−OH** → endelse: **-ol**.\nNavn: **Butanol** (eller 1-butanol).',
          },
          {
            label: 'c',
            task: 'Skriv strukturformelen til pentanol.',
            solution: 'Pentanol: **5 karbonatomer** + **−OH**.\nCH₃CH₂CH₂CH₂CH₂OH (1-pentanol).',
          },
        ],
        solution: 'a) Etanol; b) Butanol; c) CH₃CH₂CH₂CH₂CH₂OH',
        hints: ['2 C = etanol, 4 C = butanol, 5 C = pentanol'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-4',
        number: '10-17',
        type: 'classic',
        difficulty: 'medium',
        task: 'IUPAC-navnsetting (aldehyder og ketoner):',
        subTasks: [
          {
            label: 'a',
            task: 'Navngi CH₃CHO.',
            solution: 'Hovedkjede: **2 karbonatomer** (etanal).\nFunksjonell gruppe: **−CHO** → endelse: **-al**.\nNavn: **Etanal** (acetaldehyd).',
          },
          {
            label: 'b',
            task: 'Navngi CH₃COCH₃.',
            solution: 'Hovedkjede: **3 karbonatomer** (propanon).\nFunksjonell gruppe: **C=O** (midt) → endelse: **-on**.\nNavn: **Propanon** (aceton).',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom aldehyd og keton?',
            solution: '**Aldehyd:** C=O på **enden** av kjeden (−CHO).\n**Keton:** C=O **midt** i kjeden (C−CO−C).',
          },
        ],
        solution: 'a) Etanal; b) Propanon; c) Aldehyd: C=O på enden, Keton: C=O midt i',
        hints: ['−CHO = aldehyd, C=O (midt) = keton'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-5',
        number: '10-18',
        type: 'classic',
        difficulty: 'medium',
        task: 'IUPAC-navnsetting (karboksylsyrer):',
        subTasks: [
          {
            label: 'a',
            task: 'Navngi HCOOH.',
            solution: 'Hovedkjede: **1 karbonatom** (metansyre).\nFunksjonell gruppe: **−COOH** → endelse: **-syre**.\nNavn: **Metansyre** (maursyre).',
          },
          {
            label: 'b',
            task: 'Navngi CH₃COOH.',
            solution: 'Hovedkjede: **2 karbonatomer** (etansyre).\nFunksjonell gruppe: **−COOH** → endelse: **-syre**.\nNavn: **Etansyre** (eddiksyre).',
          },
          {
            label: 'c',
            task: 'Skriv strukturformelen til butansyre.',
            solution: 'Butansyre: **4 karbonatomer** + **−COOH**.\nCH₃CH₂CH₂COOH.',
          },
        ],
        solution: 'a) Metansyre; b) Etansyre; c) CH₃CH₂CH₂COOH',
        hints: ['1 C = metansyre, 2 C = etansyre, 4 C = butansyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-6',
        number: '10-19',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sidegrupper:',
        subTasks: [
          {
            label: 'a',
            task: 'Navngi CH₃CH(CH₃)CH₂CH₃.',
            solution: 'Hovedkjede: **4 karbonatomer** (butan).\nSidegruppe: **Metyl (−CH₃)** på posisjon **2**.\nNavn: **2-metylbutan**.',
          },
          {
            label: 'b',
            task: 'Navngi CH₃CH₂CH(CH₃)CH₃.',
            solution: 'Hovedkjede: **4 karbonatomer** (butan).\nSidegruppe: **Metyl (−CH₃)** på posisjon **2** (eller **3** fra andre enden).\nNummer fra nærmeste ende → **2-metylbutan**.',
          },
          {
            label: 'c',
            task: 'Tegn strukturformelen til 3-metylheksan.',
            solution: '3-metylheksan: **6 karbonatomer** (heksan) + metyl på posisjon **3**.\n```\nCH₃CH₂CH(CH₃)CH₂CH₂CH₃\n```',
          },
        ],
        solution: 'a) 2-metylbutan; b) 2-metylbutan; c) CH₃CH₂CH(CH₃)CH₂CH₂CH₃',
        hints: ['Nummerer fra nærmeste ende, Metyl = −CH₃'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-7',
        number: '10-20',
        type: 'classic',
        difficulty: 'medium',
        task: 'Estere:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonell gruppe for estere?',
            solution: 'Estere har **−COO−** (estergruppe).\nEksempel: CH₃COOCH₂CH₃ (etylacetat).',
          },
          {
            label: 'b',
            task: 'Hvordan dannes en ester?',
            solution: 'Ester dannes ved **kondensasjonsreaksjon** mellom:\n**Karboksylsyre** (−COOH) + **Alkohol** (−OH) → **Ester** (−COO−) + **Vann** (H₂O).\nEksempel: CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O.',
          },
          {
            label: 'c',
            task: 'Navngi CH₃COOCH₃.',
            solution: 'Ester: **CH₃COO** (acetat) + **CH₃** (metyl).\nNavn: **Metylacetat**.',
          },
        ],
        solution: 'a) −COO− (estergruppe); b) Karboksylsyre + Alkohol → Ester + Vann; c) Metylacetat',
        hints: ['−COO−, Kondensasjon, Metylacetat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-8',
        number: '10-21',
        type: 'classic',
        difficulty: 'medium',
        task: 'Etere:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonell gruppe for etere?',
            solution: 'Etere har **−O−** (etergruppe).\nEksempel: CH₃−O−CH₃ (dimetyleter).',
          },
          {
            label: 'b',
            task: 'Navngi CH₃CH₂−O−CH₂CH₃.',
            solution: 'Eter: **Etyl** + **O** + **Etyl**.\nNavn: **Dietyleter**.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom eter og alkohol?',
            solution: '**Eter:** C−**O**−C (oksygen mellom to karboner).\n**Alkohol:** C−**OH** (oksygen på enden).\nAlkoholer har **hydrogenatom** på oksygen, etere har **ikke**.',
          },
        ],
        solution: 'a) −O− (etergruppe); b) Dietyleter; c) Eter: C−O−C, Alkohol: C−OH',
        hints: ['−O−, Dietyleter, C−O−C vs C−OH'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-9',
        number: '10-22',
        type: 'classic',
        difficulty: 'medium',
        task: 'Aminer:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonell gruppe for aminer?',
            solution: 'Aminer har **−NH₂** (amingruppe).\nEksempel: CH₃NH₂ (metylamin).',
          },
          {
            label: 'b',
            task: 'Navngi CH₃CH₂NH₂.',
            solution: 'Amin: **Etyl** + **amin**.\nNavn: **Etylamin**.',
          },
          {
            label: 'c',
            task: 'Er aminer sure eller basiske?',
            solution: 'Aminer er **basiske** (kan ta opp H⁺).\n−NH₂ + H⁺ → −NH₃⁺.',
          },
        ],
        solution: 'a) −NH₂ (amingruppe); b) Etylamin; c) Basiske',
        hints: ['−NH₂, Etylamin, Basiske'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-10',
        number: '10-23',
        type: 'classic',
        difficulty: 'medium',
        task: 'Amider:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonell gruppe for amider?',
            solution: 'Amider har **−CONH₂** (amidgruppe).\nEksempel: CH₃CONH₂ (etanamid).',
          },
          {
            label: 'b',
            task: 'Navngi CH₃CONH₂.',
            solution: 'Amid: **2 karbonatomer** (etanamid).\nNavn: **Etanamid** (acetamid).',
          },
          {
            label: 'c',
            task: 'Hvordan dannes et amid?',
            solution: 'Amid dannes ved **kondensasjon** mellom:\n**Karboksylsyre** (−COOH) + **Amin** (−NH₂) → **Amid** (−CONH₂) + **Vann** (H₂O).',
          },
        ],
        solution: 'a) −CONH₂ (amidgruppe); b) Etanamid; c) Karboksylsyre + Amin → Amid + Vann',
        hints: ['−CONH₂, Etanamid, Kondensasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-11',
        number: '10-24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenligning av funksjonelle grupper:',
        subTasks: [
          {
            label: 'a',
            task: 'Ranger følgende etter økende surhet: Alkohol, Karboksylsyre, Amin.',
            solution: '**Amin** (basisk, lavest surhet) < **Alkohol** (svært svak syre) < **Karboksylsyre** (sur).\n**Rangering:** Amin < Alkohol < Karboksylsyre.',
          },
          {
            label: 'b',
            task: 'Hvilken funksjonell gruppe gir hydrogenbinding: −OH, −NH₂, eller −O−?',
            solution: '**−OH** (alkohol) og **−NH₂** (amin) gir **hydrogenbinding** (H bundet til O eller N).\n**−O−** (eter) gir **ikke** hydrogenbinding (ingen H på O).',
          },
          {
            label: 'c',
            task: 'Hvilken er mest løselig i vann: eter eller alkohol med samme antall karbonatomer?',
            solution: '**Alkohol** er **mer løselig** enn eter.\nAlkoholer danner **hydrogenbinding** med vann (−OH) → bedre løselighet.\nEtere kan **ikke** danne hydrogenbinding.',
          },
        ],
        solution: 'a) Amin < Alkohol < Karboksylsyre; b) −OH og −NH₂; c) Alkohol (hydrogenbinding)',
        hints: ['Surhet: COOH > OH > NH₂, Hydrogenbinding: H−O, H−N'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-12',
        number: '10-25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Komplekse strukturer:',
        subTasks: [
          {
            label: 'a',
            task: 'Navngi CH₃CH(OH)CH₃.',
            solution: 'Hovedkjede: **3 karbonatomer** (propanol).\n−OH på posisjon **2** → **2-propanol** (isopropanol).',
          },
          {
            label: 'b',
            task: 'Navngi CH₃CH₂CH(CH₃)COOH.',
            solution: 'Hovedkjede: **4 karbonatomer** + **−COOH** (butansyre).\nMetyl på posisjon **2** → **2-metylbutansyre**.',
          },
          {
            label: 'c',
            task: 'Tegn strukturformelen til 3-pentanon.',
            solution: '3-pentanon: **5 karbonatomer** + **C=O** på posisjon **3**.\nCH₃CH₂**CO**CH₂CH₃.',
          },
        ],
        solution: 'a) 2-propanol; b) 2-metylbutansyre; c) CH₃CH₂COCH₂CH₃',
        hints: ['Nummerer fra nærmeste ende, −COOH prioriteres'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-13',
        number: '10-26',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oksydasjon og reduksjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer når en primær alkohol oksyderes?',
            solution: 'Primær alkohol oksyderes til **aldehyd** (−CHO).\nEksempel: CH₃CH₂OH → CH₃CHO (etanol → etanal).\nVidere oksydasjon → **karboksylsyre** (−COOH).',
          },
          {
            label: 'b',
            task: 'Hva skjer når en sekundær alkohol oksyderes?',
            solution: 'Sekundær alkohol oksyderes til **keton** (C=O).\nEksempel: CH₃CH(OH)CH₃ → CH₃COCH₃ (2-propanol → propanon).\n**Ingen videre oksydasjon** (keton er endepunkt).',
          },
          {
            label: 'c',
            task: 'Kan tertiær alkohol oksyderes lett?',
            solution: 'Tertiær alkohol kan **ikke** oksyderes lett (ingen H på C−OH).\nKrever **kraftig oksydasjon** → bryter C−C bindinger.',
          },
        ],
        solution: 'a) Alkohol → Aldehyd → Karboksylsyre; b) Alkohol → Keton (endepunkt); c) Nei (ingen H på C−OH)',
        hints: ['Primær → Aldehyd → Karboksylsyre, Sekundær → Keton, Tertiær: vanskelig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-14',
        number: '10-27',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Reaksjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv reaksjonslikningen for dannelse av etylacetat.',
            solution: 'Etylacetat: **Etansyre** + **Etanol** → **Etylacetat** + **Vann**.\nCH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O.',
          },
          {
            label: 'b',
            task: 'Hva kalles reaksjonen i oppgave a?',
            solution: '**Kondensasjonsreaksjon** (eller **esterifisering**).\nTo molekyler kobles sammen + vann frigis.',
          },
          {
            label: 'c',
            task: 'Hva er omvendt reaksjon av esterifisering?',
            solution: '**Hydrolyse**: Ester + Vann → Karboksylsyre + Alkohol.\nCH₃COOCH₂CH₃ + H₂O → CH₃COOH + CH₃CH₂OH.\nKatalysator: Syre eller base.',
          },
        ],
        solution: 'a) CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O; b) Kondensasjon (esterifisering); c) Hydrolyse',
        hints: ['Kondensasjon, Esterifisering, Hydrolyse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-15',
        number: '10-28',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser og navngi:',
        subTasks: [
          {
            label: 'a',
            task: 'CH₃CH₂CH₂CHO',
            solution: 'Funksjonell gruppe: **−CHO** (aldehyd).\nHovedkjede: **4 karbonatomer** → **Butanal**.',
          },
          {
            label: 'b',
            task: 'CH₃CH₂COOCH₃',
            solution: 'Funksjonell gruppe: **−COO−** (ester).\n**Propanoat** (3 C) + **Metyl** → **Metylpropanoat**.',
          },
          {
            label: 'c',
            task: 'CH₃CH₂CH₂NH₂',
            solution: 'Funksjonell gruppe: **−NH₂** (amin).\n**Propyl** + **amin** → **Propylamin**.',
          },
        ],
        solution: 'a) Butanal (aldehyd); b) Metylpropanoat (ester); c) Propylamin (amin)',
        hints: ['−CHO, −COO−, −NH₂'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-16',
        number: '10-29',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prioritering av funksjonelle grupper:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvis et molekyl har både −OH og −CHO, hvilken prioriteres i navnsetting?',
            solution: 'IUPAC-prioritering (høy → lav): **COOH > CHO > CO > OH > NH₂**.\n**−CHO** (aldehyd) prioriteres over **−OH** (alkohol).\nNavngi som aldehyd + hydroksyl som sidegruppe.',
          },
          {
            label: 'b',
            task: 'Navngi HOCH₂CHO.',
            solution: 'Prioritet: **−CHO** (aldehyd) → endelse: **-al**.\n2 karbonatomer → **etanal**.\n−OH på posisjon 2 → **2-hydroksyetanal** (glykolaldehyd).',
          },
          {
            label: 'c',
            task: 'Navngi CH₃COCH₂OH.',
            solution: 'Prioritet: **C=O** (keton) → endelse: **-on**.\n3 karbonatomer → **propanon**.\n−OH på posisjon 3 → **3-hydroksypropanon**.',
          },
        ],
        solution: 'a) −CHO (aldehyd); b) 2-hydroksyetanal; c) 3-hydroksypropanon',
        hints: ['Prioritet: COOH > CHO > CO > OH > NH₂'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-2-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-2-ex-17',
        number: '10-30',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvordan IUPAC-navnsetting fungerer.',
            solution: '1. **Finn hovedkjeden** (lengste kjede med funksjonell gruppe)\n2. **Nummerer** fra enden nærmest funksjonell gruppe\n3. **Identifiser sidegrupper** (metyl, etyl, etc.)\n4. **Navngi**: Sidegrupper (med posisjon) + stamme + endelse.\nEksempel: 2-metylpropan.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom aldehyd, keton og karboksylsyre?',
            solution: '**Aldehyd:** C=O på **enden** (−CHO).\n**Keton:** C=O **midt** i kjeden (C−CO−C).\n**Karboksylsyre:** C=O + OH (−COOH).',
          },
          {
            label: 'c',
            task: 'Hvordan dannes estere?',
            solution: 'Estere dannes ved **kondensasjon** (esterifisering):\n**Karboksylsyre** + **Alkohol** → **Ester** + **Vann**.\nEksempel: CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O.\nKatalysator: Syre (H₂SO₄).',
          },
        ],
        solution: 'a) Hovedkjede, nummerer, sidegrupper, stamme + endelse; b) Aldehyd: −CHO (ende), Keton: C=O (midt), Karboksylsyre: −COOH; c) Karboksylsyre + Alkohol → Ester + Vann',
        hints: ['IUPAC-system, −CHO vs C=O vs −COOH, Kondensasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

const CHAPTER_KJEMI1_10_3: TextbookChapter = {
  id: 'kjemi1-10-3',
  courseId: 'kjemi1',
  chapterNumber: '10.3',
  title: 'Isomeri',
  description: 'Lær om strukturisomeri, geometrisk isomeri (cis/trans), optisk isomeri (kiralitet, enantiomerer) og R/S-notasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare strukturisomeri',
    'identifisere geometrisk isomeri (cis/trans)',
    'forklare optisk isomeri og kiralitet',
    'identifisere kirale sentre',
    'bruke R/S-notasjon (introduksjon)',
  ],
  content: [
    // ========== STRUKTURISOMERI ==========
    {
      id: 'kjemi1-10-3-intro',
      type: 'text',
      content: `## Isomeri

**Isomerer** er forbindelser med **samme molekylformel** men **ulik struktur** eller **romlig orientering**.

### Hovedtyper

1. **Strukturisomeri** (konstitusjonisomeri): Ulik **bindingsrekkefølge**
2. **Geometrisk isomeri**: Ulik **romlig orientering** rundt dobbeltbinding
3. **Optisk isomeri**: Ulik **tredimensjonal struktur** (kiralitet)

## Strukturisomeri (konstitusjonisomeri)

**Strukturisomerer** har samme molekylformel men **ulik bindingsrekkefølge**.

### Eksempel: Butan (C₄H₁₀)

**n-butan (normalbutan):**
\`\`\`
CH₃-CH₂-CH₂-CH₃
\`\`\`
(Rett kjede)

**2-metylpropan (isobutan):**
\`\`\`
    CH₃
    |
CH₃-CH-CH₃
\`\`\`
(Forgrenet kjede)

### Egenskaper

- **Samme molekylformel**: Begge er C₄H₁₀
- **Ulik struktur**: Rett kjede vs forgrenet
- **Ulike egenskaper**: Kokepunkt, smeltepunkt, etc.`,
    },

    {
      id: 'kjemi1-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Strukturisomerer',
      problem: `Tegn alle strukturisomerer av C₅H₁₂ (pentan).`,
      solution: `**1. n-pentan (normalpropan):**
\`\`\`
CH₃-CH₂-CH₂-CH₂-CH₃
\`\`\`
(5 C i rett kjede)

**2. 2-metylbutan (isopropan):**
\`\`\`
    CH₃
    |
CH₃-CH-CH₂-CH₃
\`\`\`
(4 C hovedkjede + metyl på posisjon 2)

**3. 2,2-dimetylpropan (neopropan):**
\`\`\`
    CH₃
    |
CH₃-C-CH₃
    |
    CH₃
\`\`\`
(3 C hovedkjede + to metyl på posisjon 2)

**Totalt:** **3 strukturisomerer** av C₅H₁₂.`,
    },

    {
      id: 'kjemi1-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-1',
        number: '10-31',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende isomeri:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er isomerer?',
            solution: 'Forbindelser med **samme molekylformel** men **ulik struktur** eller **romlig orientering**.',
          },
          {
            label: 'b',
            task: 'Hva er strukturisomeri?',
            solution: 'Strukturisomeri (konstitusjonisomeri): Samme molekylformel men **ulik bindingsrekkefølge**.\nEksempel: n-butan vs 2-metylpropan (begge C₄H₁₀).',
          },
          {
            label: 'c',
            task: 'Har strukturisomerer samme egenskaper?',
            solution: 'Strukturisomerer har **ulike egenskaper** (kokepunkt, smeltepunkt, tetthet, etc.).',
          },
        ],
        solution: 'a) Samme molekylformel, ulik struktur; b) Ulik bindingsrekkefølge; c) Nei (ulike egenskaper)',
        hints: ['Samme formel, Ulik rekkefølge, Ulike egenskaper'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-2',
        number: '10-32',
        type: 'classic',
        difficulty: 'medium',
        task: 'Strukturisomerer av C₄H₁₀:',
        subTasks: [
          {
            label: 'a',
            task: 'Tegn n-butan.',
            solution: 'n-butan: **Rett kjede** med 4 karbonatomer.\nCH₃-CH₂-CH₂-CH₃.',
          },
          {
            label: 'b',
            task: 'Tegn 2-metylpropan.',
            solution: '2-metylpropan: **3 C hovedkjede** + metyl på posisjon 2.\n```\n    CH₃\n    |\nCH₃-CH-CH₃\n```',
          },
          {
            label: 'c',
            task: 'Har de samme molekylformel?',
            solution: 'Ja, begge har **C₄H₁₀** (samme molekylformel).\nMen **ulik struktur** (strukturisomerer).',
          },
        ],
        solution: 'a) CH₃-CH₂-CH₂-CH₃; b) CH₃-CH(CH₃)-CH₃; c) Ja (C₄H₁₀)',
        hints: ['Rett kjede, Forgrenet, C₄H₁₀'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== GEOMETRISK ISOMERI ==========
    {
      id: 'kjemi1-10-3-geometrisk',
      type: 'text',
      content: `## Geometrisk isomeri (cis/trans)

**Geometrisk isomeri** oppstår når det er **dobbeltbinding** (C=C) og **ulike grupper** på hvert karbon.

### Krav

1. **Dobbeltbinding** (C=C) → **ingen rotasjon**
2. **To ulike grupper** på hvert karbon

### Cis/trans-notasjon

- **Cis**: Like grupper på **samme side** av dobbeltbindingen
- **Trans**: Like grupper på **motsatt side** av dobbeltbindingen

### Eksempel: 2-buten (C₄H₈)

**Cis-2-buten:**
\`\`\`
    H       H
     \\     /
      C = C
     /     \\
  CH₃     CH₃
\`\`\`
(Metylgrupper på **samme side**)

**Trans-2-buten:**
\`\`\`
    H      CH₃
     \\     /
      C = C
     /     \\
  CH₃      H
\`\`\`
(Metylgrupper på **motsatt side**)

### Egenskaper

- **Ulik geometri** → **ulike egenskaper** (kokepunkt, smeltepunkt, dipolmoment)
- **Kan ikke** rotere rundt dobbeltbinding → **stabile isomerer**`,
    },

    {
      id: 'kjemi1-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Geometrisk isomeri',
      problem: `Kan følgende forbindelser ha geometrisk isomeri?
a) 1-buten (CH₂=CH−CH₂−CH₃)
b) 2-buten (CH₃−CH=CH−CH₃)`,
      solution: `**a) 1-buten (CH₂=CH−CH₂−CH₃)**
- Dobbeltbinding mellom C1 og C2
- C1: **2 hydrogenatomer** (H, H) → **ikke to ulike grupper**
- **Nei**: Kan ikke ha geometrisk isomeri

**b) 2-buten (CH₃−CH=CH−CH₃)**
- Dobbeltbinding mellom C2 og C3
- C2: H og CH₃ (ulike)
- C3: H og CH₃ (ulike)
- **Ja**: Kan ha geometrisk isomeri (cis og trans)`,
    },

    {
      id: 'kjemi1-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-3',
        number: '10-33',
        type: 'classic',
        difficulty: 'medium',
        task: 'Geometrisk isomeri:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kravene for geometrisk isomeri?',
            solution: '1. **Dobbeltbinding** (C=C) → ingen rotasjon.\n2. **To ulike grupper** på hvert karbon i dobbeltbindingen.',
          },
          {
            label: 'b',
            task: 'Hva betyr "cis"?',
            solution: '**Cis**: Like grupper på **samme side** av dobbeltbindingen.',
          },
          {
            label: 'c',
            task: 'Hva betyr "trans"?',
            solution: '**Trans**: Like grupper på **motsatt side** av dobbeltbindingen.',
          },
        ],
        solution: 'a) Dobbeltbinding + to ulike grupper på hvert C; b) Like grupper på samme side; c) Like grupper på motsatt side',
        hints: ['C=C, To ulike, Samme side, Motsatt side'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-4',
        number: '10-34',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kan følgende ha geometrisk isomeri?',
        subTasks: [
          {
            label: 'a',
            task: 'Propen (CH₃−CH=CH₂)',
            solution: 'Dobbeltbinding: C2=C3.\nC3: **2 hydrogenatomer** (H, H) → **ikke to ulike grupper**.\n**Nei**: Kan ikke ha geometrisk isomeri.',
          },
          {
            label: 'b',
            task: '2-penten (CH₃−CH=CH−CH₂−CH₃)',
            solution: 'Dobbeltbinding: C2=C3.\nC2: H og CH₃ (ulike), C3: H og CH₂CH₃ (ulike).\n**Ja**: Kan ha geometrisk isomeri (cis og trans).',
          },
          {
            label: 'c',
            task: 'Etyn (HC≡CH)',
            solution: 'Etyn har **trippelbinding** (C≡C), ikke dobbeltbinding.\n**Nei**: Kan ikke ha geometrisk isomeri (krever C=C).',
          },
        ],
        solution: 'a) Nei (2 H på samme C); b) Ja (cis/trans); c) Nei (trippelbinding)',
        hints: ['To ulike på hvert C, C=C kreves'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPTISK ISOMERI ==========
    {
      id: 'kjemi1-10-3-optisk',
      type: 'text',
      content: `## Optisk isomeri (kiralitet)

**Optisk isomeri** oppstår når et molekyl er **kiralt** (ikke-superponerbart med sitt speilbilde).

### Kiralitet

**Kiralt molekyl:**
- Har **kiralt senter** (asymmetrisk karboniatom)
- Karbon bundet til **4 ulike grupper**
- Ikke-superponerbart med speilbilde

**Akiralt molekyl:**
- Har **symmetri** (speilplan)
- Superponerbart med speilbilde

### Enantiomerer

**Enantiomerer** er to optiske isomerer som er **speilbilder** av hverandre.

**Egenskaper:**
- **Samme** fysiske egenskaper (kokepunkt, smeltepunkt)
- **Ulik** optisk aktivitet (roterer polarisert lys)
- **Ulik** biologisk aktivitet (f.eks. lukt, smak, medisinsk effekt)

### R/S-notasjon

**Cahn-Ingold-Prelog (CIP) system:**

1. **Prioriter** de 4 gruppene rundt kiralt senter (høyere atomnummer → høyere prioritet)
2. **Orienter** molekylet med laveste prioritet (4) **bak**
3. **Tegn pil** fra 1 → 2 → 3:
   - **Høyre (clockwise)** → **R** (rectus)
   - **Venstre (counterclockwise)** → **S** (sinister)

### Eksempel: 2-butanol

**Kiralt senter:** C2 (bundet til 4 ulike grupper: −H, −OH, −CH₃, −CH₂CH₃)

**To enantiomerer:**
- **(R)-2-butanol**
- **(S)-2-butanol**`,
    },

    {
      id: 'kjemi1-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Identifiser kiralt senter',
      problem: `Identifiser kirale sentre i:
a) 2-propanol (CH₃−CH(OH)−CH₃)
b) 2-butanol (CH₃−CH(OH)−CH₂−CH₃)`,
      solution: `**a) 2-propanol**
- C2 bundet til: H, OH, CH₃, CH₃
- **To like grupper** (CH₃, CH₃) → **ikke kiralt**
- **Ikke kiralt senter**

**b) 2-butanol**
- C2 bundet til: H, OH, CH₃, CH₂CH₃
- **Fire ulike grupper** → **kiralt**
- **Kiralt senter** ved C2
- To enantiomerer: (R)-2-butanol og (S)-2-butanol`,
    },

    {
      id: 'kjemi1-10-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-5',
        number: '10-35',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kiralitet:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et kiralt molekyl?',
            solution: 'Et molekyl som er **ikke-superponerbart** med sitt **speilbilde**.\nHar **kiralt senter** (karbon bundet til 4 ulike grupper).',
          },
          {
            label: 'b',
            task: 'Hva er et kiralt senter?',
            solution: 'Et **asymmetrisk karboniatom** bundet til **4 ulike grupper**.\nMerkert med **asterisk** (*) i strukturformel.',
          },
          {
            label: 'c',
            task: 'Hva er enantiomerer?',
            solution: '**Enantiomerer** er to optiske isomerer som er **speilbilder** av hverandre.\nIkke-superponerbare.',
          },
        ],
        solution: 'a) Ikke-superponerbart med speilbilde; b) Karbon bundet til 4 ulike grupper; c) Speilbilder (ikke-superponerbare)',
        hints: ['Speilbilde, 4 ulike grupper, Enantiomerer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-6',
        number: '10-36',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser kirale sentre:',
        subTasks: [
          {
            label: 'a',
            task: '2-klorpropan (CH₃−CHCl−CH₃)',
            solution: 'C2 bundet til: H, Cl, CH₃, CH₃.\n**To like grupper** (CH₃, CH₃) → **ikke kiralt senter**.',
          },
          {
            label: 'b',
            task: '2-klorpentan (CH₃−CHCl−CH₂−CH₂−CH₃)',
            solution: 'C2 bundet til: H, Cl, CH₃, CH₂CH₂CH₃.\n**Fire ulike grupper** → **kiralt senter** ved C2.',
          },
          {
            label: 'c',
            task: '2,3-diklorpentan',
            solution: 'C2 og C3 kan være **kirale sentre** (begge bundet til ulike grupper).\n**To kirale sentre** → **4 stereoisomerer** (2²).',
          },
        ],
        solution: 'a) Nei (to like grupper); b) Ja (kiralt senter ved C2); c) Ja (C2 og C3)',
        hints: ['4 ulike grupper, n kirale sentre → 2ⁿ stereoisomerer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-7',
        number: '10-37',
        type: 'classic',
        difficulty: 'medium',
        task: 'Optisk aktivitet:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "optisk aktiv"?',
            solution: '**Optisk aktiv**: Molekylet **roterer** planet til **polarisert lys**.\nKirale molekyler er optisk aktive.',
          },
          {
            label: 'b',
            task: 'Har enantiomerer samme optiske aktivitet?',
            solution: 'Enantiomerer roterer polarisert lys **like mye** men i **motsatt retning**.\nEn roterer **høyre** (+), den andre **venstre** (−).',
          },
          {
            label: 'c',
            task: 'Hva er en racemisk blanding?',
            solution: '**Racemisk blanding**: 50/50 blanding av **to enantiomerer**.\n**Optisk inaktiv** (rotasjonene kansellerer hverandre).',
          },
        ],
        solution: 'a) Roterer polarisert lys; b) Nei (motsatt retning); c) 50/50 blanding (optisk inaktiv)',
        hints: ['Rotasjon, Motsatt retning, Racemisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-8',
        number: '10-38',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'R/S-notasjon (introduksjon):',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr R og S?',
            solution: '**R** (rectus): Høyre (clockwise) pil fra 1 → 2 → 3.\n**S** (sinister): Venstre (counterclockwise) pil fra 1 → 2 → 3.',
          },
          {
            label: 'b',
            task: 'Hvordan prioriteres grupper i CIP-systemet?',
            solution: 'Prioritering basert på **atomnummer** (høyere → høyere prioritet).\nEksempel: Br (35) > Cl (17) > O (8) > N (7) > C (6) > H (1).',
          },
          {
            label: 'c',
            task: 'Hvordan bestemmes R/S?',
            solution: '1. Prioriter gruppene (1 = høyest, 4 = lavest)\n2. Orienter molekylet med gruppe 4 **bak**\n3. Tegn pil fra 1 → 2 → 3:\n   - **Høyre** → **R**\n   - **Venstre** → **S**',
          },
        ],
        solution: 'a) R = høyre, S = venstre; b) Høyere atomnummer → høyere prioritet; c) Pil fra 1 → 2 → 3: Høyre = R, Venstre = S',
        hints: ['R = rectus, S = sinister, Atomnummer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-9',
        number: '10-39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Antall stereoisomerer:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange stereoisomerer har et molekyl med 1 kiralt senter?',
            solution: '1 kiralt senter → **2 enantiomerer** (2¹ = 2).',
          },
          {
            label: 'b',
            task: 'Hvor mange stereoisomerer har et molekyl med 2 kirale sentre?',
            solution: '2 kirale sentre → **4 stereoisomerer** (2² = 4).\n2 par enantiomerer (diastereomerer).',
          },
          {
            label: 'c',
            task: 'Hvor mange stereoisomerer har et molekyl med n kirale sentre?',
            solution: 'n kirale sentre → **2ⁿ stereoisomerer**.\nEksempel: 3 kirale sentre → 2³ = 8 stereoisomerer.',
          },
        ],
        solution: 'a) 2 enantiomerer; b) 4 stereoisomerer; c) 2ⁿ stereoisomerer',
        hints: ['2ⁿ regel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-10',
        number: '10-40',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Biologisk betydning:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er kiralitet viktig i biologi?',
            solution: '**Biologiske molekyler** (enzymer, reseptorer) er **kirale**.\nKun **én enantiomer** passer i aktivt sete → **ulik biologisk effekt**.\nEksempel: Én enantiomer kan være medisin, den andre giftig.',
          },
          {
            label: 'b',
            task: 'Hva er eksempel på kiralt medikament?',
            solution: '**Ibuprofen**: (S)-ibuprofen er **aktiv** (smertestillende).\n(R)-ibuprofen er **inaktiv** (ingen effekt).\n**Racemisk ibuprofen** (50/50) selges, men kun S-form virker.',
          },
          {
            label: 'c',
            task: 'Hva er talidomid-tragedien?',
            solution: '**Talidomid** (1950-tallet): Medikament mot kvalme hos gravide.\n(R)-talidomid: **Effektiv** mot kvalme.\n(S)-talidomid: **Teratogen** (fosterskade).\nRacemisk blanding solgt → **fosterskader** → **trukket fra markedet**.',
          },
        ],
        solution: 'a) Kun én enantiomer passer i aktivt sete; b) Ibuprofen (S-form aktiv); c) Racemisk talidomid → fosterskader',
        hints: ['Kiralitet i biologi, Ibuprofen, Talidomid'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-11',
        number: '10-41',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenligning av isomeri-typer:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom strukturisomeri og stereoisomeri?',
            solution: '**Strukturisomeri**: Ulik **bindingsrekkefølge** (f.eks. n-butan vs 2-metylpropan).\n**Stereoisomeri**: Samme bindingsrekkefølge, ulik **romlig orientering** (geometrisk og optisk isomeri).',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom geometrisk og optisk isomeri?',
            solution: '**Geometrisk isomeri**: Ulik orientering rundt **dobbeltbinding** (cis/trans).\n**Optisk isomeri**: Ulik **3D-struktur** (kiralitet, enantiomerer).',
          },
          {
            label: 'c',
            task: 'Kan et molekyl ha både geometrisk og optisk isomeri?',
            solution: 'Ja, et molekyl kan ha både **dobbeltbinding** (geometrisk) og **kiralt senter** (optisk).\nEksempel: 3-klor-2-buten kan ha både cis/trans og R/S.',
          },
        ],
        solution: 'a) Strukturisomeri: bindingsrekkefølge, Stereoisomeri: romlig orientering; b) Geometrisk: dobbeltbinding, Optisk: kiralitet; c) Ja (dobbeltbinding + kiralt senter)',
        hints: ['Bindingsrekkefølge vs romlig, C=C vs kiralitet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-12',
        number: '10-42',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Komplekse molekyler:',
        subTasks: [
          {
            label: 'a',
            task: 'Har 2-metyl-2-buten geometrisk isomeri?',
            solution: '2-metyl-2-buten: (CH₃)₂C=CH−CH₃.\nC2: **To metylgrupper** (CH₃, CH₃) → **ikke to ulike grupper**.\n**Nei**: Kan ikke ha geometrisk isomeri.',
          },
          {
            label: 'b',
            task: 'Har 3-metyl-1-penten kirale sentre?',
            solution: '3-metyl-1-penten: CH₂=CH−CH(CH₃)−CH₂−CH₃.\nC3: H, CH₃, CH=CH₂, CH₂CH₃ → **4 ulike grupper** → **kiralt senter**.',
          },
          {
            label: 'c',
            task: 'Hvor mange stereoisomerer har 3-metyl-2-penten?',
            solution: '3-metyl-2-penten: CH₃−CH=C(CH₃)−CH₂−CH₃.\n**Dobbeltbinding** mellom C2 og C3 (geometrisk isomeri: cis/trans).\nC3: **To metylgrupper** → **ikke kiralt**.\n**2 stereoisomerer** (cis og trans).',
          },
        ],
        solution: 'a) Nei (to like grupper på C2); b) Ja (C3 er kiralt senter); c) 2 (cis og trans)',
        hints: ['To ulike på hvert C, 4 ulike grupper, Geometrisk vs optisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-13',
        number: '10-43',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praksis med R/S:',
        subTasks: [
          {
            label: 'a',
            task: 'Prioriter gruppene: −OH, −CH₃, −H, −CH₂CH₃.',
            solution: 'Prioritering basert på **atomnummer** av første atom:\n1. **−OH** (O: 8)\n2. **−CH₂CH₃** (C: 6, men mer kompleks)\n3. **−CH₃** (C: 6)\n4. **−H** (H: 1)\n**Rekkefølge:** −OH > −CH₂CH₃ > −CH₃ > −H.',
          },
          {
            label: 'b',
            task: 'Hvis pil fra 1 → 2 → 3 går høyre (gruppe 4 bak), hva er konfigurasjon?',
            solution: 'Pil går **høyre** (clockwise) → **R** (rectus).',
          },
          {
            label: 'c',
            task: 'Hvis pil fra 1 → 2 → 3 går venstre (gruppe 4 bak), hva er konfigurasjon?',
            solution: 'Pil går **venstre** (counterclockwise) → **S** (sinister).',
          },
        ],
        solution: 'a) −OH > −CH₂CH₃ > −CH₃ > −H; b) R; c) S',
        hints: ['Atomnummer, Høyre = R, Venstre = S'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-10-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-10-3-ex-14',
        number: '10-44',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de tre hovedtypene av isomeri?',
            solution: '1. **Strukturisomeri**: Ulik bindingsrekkefølge.\n2. **Geometrisk isomeri**: Ulik orientering rundt dobbeltbinding (cis/trans).\n3. **Optisk isomeri**: Ulik 3D-struktur (kiralitet, enantiomerer).',
          },
          {
            label: 'b',
            task: 'Hva kreves for geometrisk isomeri?',
            solution: '1. **Dobbeltbinding** (C=C) → ingen rotasjon.\n2. **To ulike grupper** på hvert karbon i dobbeltbindingen.',
          },
          {
            label: 'c',
            task: 'Hva kreves for optisk isomeri?',
            solution: '**Kiralt senter**: Karbon bundet til **4 ulike grupper**.\nMolekylet er **ikke-superponerbart** med sitt speilbilde.',
          },
        ],
        solution: 'a) Strukturisomeri, Geometrisk isomeri, Optisk isomeri; b) C=C + to ulike grupper på hvert C; c) Kiralt senter (4 ulike grupper)',
        hints: ['Tre typer, C=C + ulike, 4 ulike grupper'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};


const CHAPTER_KJEMI1_11_1: TextbookChapter = {
  id: 'kjemi1-11-1',
  courseId: 'kjemi1',
  chapterNumber: '11.1',
  title: 'Vann- og luftkvalitet',
  description: 'Lær om drikkevann, renseprosesser, vannkvalitetsindikatorer, luftforurensning, klimagasser, ozonlaget, sur nedbør og konsentrasjonsberegninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare drikkevann og renseprosesser',
    'identifisere vannkvalitetsindikatorer (pH, hardhet, oksygeninnhold)',
    'forklare luftforurensning (NOₓ, SO₂, partikler)',
    'forklare klimagasser (CO₂, CH₄, N₂O)',
    'forklare ozonlaget og ozonnedbrytende stoffer',
    'beregne konsentrasjoner (ppm, mg/L)',
  ],
  content: [
    {
      id: 'kjemi1-11-1-intro',
      type: 'text',
      content: `## Vann- og luftkvalitet

**Miljøkjemi** studerer kjemiske prosesser i miljøet. Dette kapitlet dekker vannkvalitet, luftforurensning, klimagasser og konsentrasjonsberegninger.

### Hovedtemaer
- Drikkevann og renseprosesser
- Vannkvalitetsindikatorer (pH, hardhet, O₂)
- Luftforurensning (NOₓ, SO₂, PM)
- Klimagasser og drivhuseffekt
- Ozonlaget
- Konsentrasjonsberegninger`,
    },
    {
      id: 'kjemi1-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-11-1-ex-1',
        number: '11-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oppgave 11-1: Vannkvalitet',
        solution: 'Se læreboken for fullstendig løsning.',
        hints: ['Vannkvalitet', 'pH', 'Hardhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

const CHAPTER_KJEMI1_11_2: TextbookChapter = {
  id: 'kjemi1-11-2',
  courseId: 'kjemi1',
  chapterNumber: '11.2',
  title: 'Grønn kjemi',
  description: 'Lær om de 12 prinsippene for grønn kjemi, atomøkonomi, fornybare råstoffer, energieffektivitet, katalyse og bærekraftig utvikling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare de 12 prinsippene for grønn kjemi',
    'beregne atomøkonomi',
    'forklare fornybare råstoffer',
    'forklare energieffektivitet og katalyse',
    'forklare LCA (livssyklusanalyse)',
  ],
  content: [
    {
      id: 'kjemi1-11-2-intro',
      type: 'text',
      content: `## Grønn kjemi

**Grønn kjemi** handler om å designe kjemiske produkter og prosesser som reduserer eller eliminerer farlige stoffer.

### Hovedtemaer
- De 12 prinsippene for grønn kjemi
- Atomøkonomi
- Fornybare råstoffer
- Katalyse
- LCA (livssyklusanalyse)`,
    },
    {
      id: 'kjemi1-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-11-2-ex-1',
        number: '11-14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oppgave 11-14: Grønn kjemi grunnleggende',
        solution: 'Se læreboken for fullstendig løsning.',
        hints: ['Grønn kjemi', 'Bærekraft'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};


const CHAPTER_KJEMI1_12_1: TextbookChapter = {
  id: 'kjemi1-12-1',
  courseId: 'kjemi1',
  chapterNumber: '12.1',
  title: 'Laboratoriesikkerhet og metoder',
  description: 'Lær om sikkerhetsdatablad (SDS), faresymboler (GHS-systemet), personlig verneutstyr, avfallshåndtering og grunnleggende laboratorieteknikker som pipettering, volummåling, filtrering og destillasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'tolke sikkerhetsdatablad (SDS)',
    'identifisere faresymboler (GHS-systemet)',
    'bruke personlig verneutstyr (PPE)',
    'håndtere kjemisk avfall korrekt',
    'utføre pipettering og volummåling',
    'utføre filtrering og destillasjon',
  ],
  content: [
    {
      id: 'kjemi1-12-1-intro',
      type: 'text',
      content: `## Laboratoriesikkerhet og metoder

**Sikkerhet** er den viktigste faktoren i laboratoriearbeid. Dette kapitlet dekker grunnleggende sikkerhetsprinsipper og laboratorieteknikker.

### Hovedtemaer
- Sikkerhetsdatablad (SDS)
- Faresymboler (GHS-systemet)
- Personlig verneutstyr (PPE)
- Avfallshåndtering
- Pipettering og volummåling
- Filtrering og destillasjon`,
    },

    // ========== SIKKERHETSDATABLAD (SDS) ==========
    {
      id: 'kjemi1-12-1-sds',
      type: 'text',
      content: `## Sikkerhetsdatablad (SDS)

**Safety Data Sheet (SDS)** inneholder detaljert sikkerhetsinformasjon om kjemikalier.

### Innhold i SDS
1. **Identifikasjon**: Produkt- og leverandørinformasjon
2. **Fareidentifikasjon**: Faresymboler og faresetninger
3. **Sammensetning**: Kjemisk innhold
4. **Førstehjelpstiltak**: Prosedyrer ved eksponering
5. **Brannslukningstiltak**: Egnet slokkeutstyr
6. **Utslipps- og søltiltak**: Oppryddingsprosedyrer
7. **Håndtering og lagring**: Sikker praksis
8. **Eksponeringskontroll/personlig beskyttelse**: PPE-krav
9. **Fysisk-kjemiske egenskaper**: Smeltepunkt, kokepunkt, etc.
10. **Stabilitet og reaktivitet**: Reaktive egenskaper
11. **Toksikologisk informasjon**: Helseeffekter
12. **Miljøinformasjon**: Miljøpåvirkning
13. **Avfallshåndtering**: Kassering
14. **Transportinformasjon**: UN-nummer, etc.
15. **Regulatorisk informasjon**: Lover og regler
16. **Andre opplysninger**: Referanser`,
    },

    {
      id: 'kjemi1-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-1',
        number: '12-1',
        type: 'classic',
        difficulty: 'lett',
        task: 'SDS-grunnleggende:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står SDS for?',
            solution: '**Safety Data Sheet** (sikkerhetsdatablad).\nTidligere kalt **MSDS** (Material Safety Data Sheet).',
          },
          {
            label: 'b',
            task: 'Hvilke seksjoner finnes i et SDS?',
            solution: '**16 seksjoner**: Fra identifikasjon (seksjon 1) til andre opplysninger (seksjon 16).\nViktige seksjoner: **Fareidentifikasjon (2)**, **Førstehjelpstiltak (4)**, **Eksponeringskontroll (8)**.',
          },
          {
            label: 'c',
            task: 'Hvorfor er SDS viktig?',
            solution: 'SDS gir **sikkerhetsinformasjon** om kjemikalier:\n- Fareidentifikasjon\n- Førstehjelpstiltak\n- Håndtering og lagring\n- Personlig beskyttelse\n- Avfallshåndtering',
          },
        ],
        solution: 'a) Safety Data Sheet; b) 16 seksjoner (identifikasjon → andre opplysninger); c) Gir sikkerhetsinformasjon om kjemikalier',
        hints: ['Safety Data Sheet, 16 seksjoner, Sikkerhetsinformasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FARESYMBOLER (GHS) ==========
    {
      id: 'kjemi1-12-1-ghs',
      type: 'text',
      content: `## Faresymboler (GHS-systemet)

**Globally Harmonized System of Classification and Labelling of Chemicals (GHS)** er et internasjonalt system for faremerking.

### GHS-faresymboler (piktogrammer)

**Fysiske farer:**
- **Eksplosiv** (💥): Kan eksplodere
- **Brannfarlig** (🔥): Kan antennes
- **Oksiderende** (🔥 med O): Kan forsterke brann
- **Trykk** (⚠️ med sylinder): Gass under trykk

**Helsefarer:**
- **Giftig/meget giftig** (☠️): Dødelig ved inntak/innånding/hudkontakt
- **Helsefare** (⚠️): Irriterende, sensibiliserende, narkotisk
- **Alvorlig helsefare** (⚠️): Kreft, mutagen, reproduksjonstoksisk, organskade
- **Etsende** (⚠️ med hånd): Etsende for hud/øyne

**Miljøfare:**
- **Miljøskadelig** (🐟🌳): Giftig for akvatisk miljø

### Faresetninger
- **H-setninger** (Hazard): Beskriver faren (f.eks. H225: Meget brannfarlig væske og damp)
- **P-setninger** (Precautionary): Forholdsregler (f.eks. P210: Holdes vekk fra varme/gnister/åpen flamme)`,
    },

    {
      id: 'kjemi1-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-2',
        number: '12-2',
        type: 'classic',
        difficulty: 'lett',
        task: 'GHS-symboler:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr symbolet med flamme (🔥)?',
            solution: '**Brannfarlig**: Stoffet kan antennes lett.\nEksempler: Etanol, aceton, bensin.',
          },
          {
            label: 'b',
            task: 'Hva betyr symbolet med dødninghode (☠️)?',
            solution: '**Giftig/meget giftig**: Dødelig eller meget skadelig ved inntak/innånding/hudkontakt.\nEksempler: Cyanider, arsenforbindelser.',
          },
          {
            label: 'c',
            task: 'Hva betyr symbolet med utropstegn (⚠️)?',
            solution: '**Helsefare**: Irriterende, sensibiliserende, eller narkotisk.\nMindre alvorlig enn dødninghode (☠️).\nEksempler: Isopropanol, natriumhydroksid (lav konsentrasjon).',
          },
        ],
        solution: 'a) Brannfarlig; b) Giftig/meget giftig; c) Helsefare (irriterende, sensibiliserende)',
        hints: ['🔥 = Brannfarlig, ☠️ = Giftig, ⚠️ = Helsefare'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-3',
        number: '12-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faresetninger:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr H225?',
            solution: '**H225**: Meget brannfarlig væske og damp.\n**H-setninger** (Hazard) beskriver faren.',
          },
          {
            label: 'b',
            task: 'Hva betyr P210?',
            solution: '**P210**: Holdes vekk fra varme/gnister/åpen flamme/varme overflater. Røyking forbudt.\n**P-setninger** (Precautionary) beskriver forholdsregler.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen mellom H- og P-setninger?',
            solution: '**H-setninger** (Hazard): Beskriver **faren** (hva kan skje).\n**P-setninger** (Precautionary): Beskriver **forholdsregler** (hva du skal gjøre).',
          },
        ],
        solution: 'a) Meget brannfarlig væske og damp; b) Holdes vekk fra varme/gnister/flamme; c) H = fare, P = forholdsregler',
        hints: ['H = Hazard, P = Precautionary'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PERSONLIG VERNEUTSTYR (PPE) ==========
    {
      id: 'kjemi1-12-1-ppe',
      type: 'text',
      content: `## Personlig verneutstyr (PPE)

**Personal Protective Equipment (PPE)** beskytter mot eksponering for kjemikalier.

### Standard PPE i kjemilaboratoriet
1. **Vernebriller**: Beskytter øynene mot sprut og damp
2. **Labfrakk**: Beskytter klær og hud mot søl
3. **Hansker**: Beskytter hender mot kjemisk kontakt
   - Nitrilhansker: Allsidig, beskytter mot de fleste kjemikalier
   - Latekshansker: Vanlig, men ikke mot organiske løsemidler
   - Neopren: For sterke syrer og baser
4. **Sko**: Lukket fottøy (ikke sandaler)

### Ekstra PPE ved behov
- **Ansiktsvisir**: Ved sprut-risiko
- **Støvmaske/åndedrettsvern**: Ved arbeid med støv eller giftige damper
- **Hørselsvern**: Ved støyende utstyr

### Generelle regler
- **Ingen mat eller drikke** i laboratoriet
- **Langt hår** skal være samlet
- **Ingen løse klær** (kan henge seg fast i utstyr)`,
    },

    {
      id: 'kjemi1-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-4',
        number: '12-4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Personlig verneutstyr:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er standard PPE i kjemilaboratoriet?',
            solution: 'Standard PPE:\n1. **Vernebriller**\n2. **Labfrakk**\n3. **Hansker** (nitril)\n4. **Lukket fottøy**',
          },
          {
            label: 'b',
            task: 'Hvorfor bruker vi nitrilhansker i stedet for latekshansker?',
            solution: '**Nitrilhansker** beskytter mot **organiske løsemidler** (aceton, etanol, etc.).\n**Latekshansker** beskytter **ikke** mot organiske løsemidler (blir oppløst).',
          },
          {
            label: 'c',
            task: 'Når trenger vi ekstra PPE som ansiktsvisir?',
            solution: '**Ansiktsvisir** brukes ved **sprut-risiko**:\n- Arbeid med sterke syrer/baser\n- Reaksjoner med sprut-potensial\n- Ekstra beskyttelse utover vernebriller.',
          },
        ],
        solution: 'a) Vernebriller, labfrakk, hansker, lukket fottøy; b) Nitril beskytter mot organiske løsemidler; c) Ved sprut-risiko (sterke syrer/baser)',
        hints: ['Standard PPE, Nitril vs latex, Sprut-risiko'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== AVFALLSHÅNDTERING ==========
    {
      id: 'kjemi1-12-1-waste',
      type: 'text',
      content: `## Avfallshåndtering

**Kjemisk avfall** må håndteres forsvarlig for å unngå miljøskade og helserisiko.

### Kategorier av kjemisk avfall
1. **Uorganisk avfall**: Salter, metallioner (Cu²⁺, Pb²⁺), syrer, baser
2. **Organisk avfall**: Løsemidler (aceton, etanol), organiske forbindelser
3. **Halogenert avfall**: Kloroform, diklormetan (inneholder Cl, Br, I)
4. **Tungt metall-avfall**: Kvikksølv (Hg), bly (Pb), kadmium (Cd)
5. **Syre/base-avfall**: Konsentrerte syrer (HCl, H₂SO₄), baser (NaOH)

### Prosedyrer
- **Merk beholderen** tydelig (innhold, dato)
- **Ikke bland** ulike typer avfall
- **Ikke hell i vasken** (med mindre tillatt, f.eks. fortynnet NaCl)
- **Leverér til godkjent avfallsmottak**

### Nøytralisering
- **Syrer og baser** kan nøytraliseres før kassering:
  - Syre + Base → Salt + Vann
  - Eksempel: HCl + NaOH → NaCl + H₂O (kan helles i vasken hvis fortynnet)`,
    },

    {
      id: 'kjemi1-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-5',
        number: '12-5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avfallshåndtering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de fem hovedkategoriene av kjemisk avfall?',
            solution: '1. **Uorganisk avfall** (salter, syrer, baser)\n2. **Organisk avfall** (løsemidler, organiske forbindelser)\n3. **Halogenert avfall** (kloroform, diklormetan)\n4. **Tungt metall-avfall** (Hg, Pb, Cd)\n5. **Syre/base-avfall** (konsentrerte syrer/baser)',
          },
          {
            label: 'b',
            task: 'Kan vi blande uorganisk og organisk avfall?',
            solution: '**Nei**: Ulike typer avfall skal **ikke blandes**.\nGrunn: Ulike avfallstyper krever ulike behandlingsmetoder.',
          },
          {
            label: 'c',
            task: 'Hvordan nøytraliserer vi syrer?',
            solution: 'Syre + Base → Salt + Vann.\nEksempel: **HCl** + **NaOH** → **NaCl** + **H₂O**.\nFortynn først, tilsett base sakte, kontroller pH.',
          },
        ],
        solution: 'a) Uorganisk, Organisk, Halogenert, Tungt metall, Syre/base; b) Nei (ikke bland avfallstyper); c) Tilsett base (f.eks. NaOH), danner salt + vann',
        hints: ['5 kategorier, Ikke bland, Nøytralisering'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PIPETTERING OG VOLUMMÅLING ==========
    {
      id: 'kjemi1-12-1-pipetting',
      type: 'text',
      content: `## Pipettering og volummåling

**Nøyaktig volummåling** er essensielt i kjemi.

### Volumetrisk utstyr
1. **Målesylinder**: ±1-5 mL presisjon
   - Brukes for grove volummål
   - Les av ved meniskens bunn (konkav)
2. **Pipetter**: ±0.1-0.5 mL presisjon
   - **Volumetrisk pipette**: Målerpipette for ett volum (f.eks. 25.0 mL)
   - **Gradert pipette**: Målepipette med graderinger
3. **Byrett**: ±0.05 mL presisjon
   - Brukes i titreringer
   - Kontinuerlig volummåling
4. **Målekolbe**: ±0.1 mL presisjon
   - Brukes til å lage løsninger med nøyaktig volum
   - Merk: "25.00 mL ved 20°C"

### Pipetteringsteknikk
1. **Skyll pipette** med løsning først (3 ganger)
2. **Fyll pipette** over merket
3. **Juster til merket** (meniskens bunn)
4. **Overfør** til beholder
5. **La dryppe ut** (ikke blås ut siste dråpe i volumetrisk pipette)

### Lesing av menisk
- **Konkav menisk** (vann): Les av ved **bunn** av menisk
- **Konveks menisk** (kvikksølv): Les av ved **topp** av menisk`,
    },

    {
      id: 'kjemi1-12-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-6',
        number: '12-6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Volummåling:',
        subTasks: [
          {
            label: 'a',
            task: 'Ranger følgende etter økende presisjon: Målesylinder, Pipette, Byrett.',
            solution: '**Målesylinder** (±1-5 mL) < **Pipette** (±0.1-0.5 mL) < **Byrett** (±0.05 mL).\n**Byrett** har høyest presisjon.',
          },
          {
            label: 'b',
            task: 'Hvordan leser vi av en konkav menisk?',
            solution: '**Konkav menisk** (vann): Les av ved **bunnen** av menisk.\nØyet på samme høyde som menisk (unngå parallaksefeil).',
          },
          {
            label: 'c',
            task: 'Hvorfor skyller vi pipette med løsning før bruk?',
            solution: 'Skylling fjerner **resterende vann eller tidligere løsning**.\nSikrer at pipetten inneholder **kun løsningen** vi skal måle.\nSkyll **3 ganger** for best resultat.',
          },
        ],
        solution: 'a) Målesylinder < Pipette < Byrett; b) Les av ved bunnen av menisk; c) Fjerner vann/tidligere løsning',
        hints: ['Byrett mest nøyaktig, Bunn av menisk, Skyll 3 ganger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-7',
        number: '12-7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Pipetteringsberegning:',
        subTasks: [
          {
            label: 'a',
            task: 'En volumetrisk pipette er merket "25.00 mL ± 0.03 mL". Hva betyr dette?',
            solution: '**25.00 mL**: Nominelt volum (målvolum).\n**± 0.03 mL**: Toleranse (usikkerhet).\nPipetten leverer **25.00 ± 0.03 mL** (24.97 - 25.03 mL).',
          },
          {
            label: 'b',
            task: 'Hva er relativ usikkerhet i prosent?',
            solution: 'Relativ usikkerhet = (Absolutt usikkerhet / Verdi) × 100%.\n= (0.03 mL / 25.00 mL) × 100% = **0.12%**.',
          },
          {
            label: 'c',
            task: 'Hvis vi bruker en målesylinder med ± 1 mL usikkerhet for 25 mL, hva er relativ usikkerhet?',
            solution: 'Relativ usikkerhet = (1 mL / 25 mL) × 100% = **4%**.\n**Målesylinder** har **mye høyere** relativ usikkerhet enn pipette (0.12%).',
          },
        ],
        solution: 'a) Leverer 25.00 ± 0.03 mL; b) 0.12%; c) 4% (mye høyere enn pipette)',
        hints: ['Toleranse = usikkerhet, Relativ = (absolutt/verdi) × 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FILTRERING OG DESTILLASJON ==========
    {
      id: 'kjemi1-12-1-separation',
      type: 'text',
      content: `## Filtrering og destillasjon

**Separasjonsteknikker** brukes til å skille blandinger.

### Filtrering
**Separerer fast stoff fra væske.**

**Utstyr:**
- Filterpapir (trakt)
- Vakuumfiltrering (Büchner-trakt)

**Prosedyre:**
1. Brett filterpapir (konisk trakt) eller bruk Büchner-trakt
2. Hell blanding på filteret
3. **Residuet** (fast stoff) blir igjen på filteret
4. **Filtratet** (væske) går gjennom

**Eksempler:**
- Separere utfelt salt (f.eks. AgCl) fra vannløsning
- Rense produkter i organisk syntese

### Destillasjon
**Separerer væsker basert på forskjellig kokepunkt.**

**Prinsipper:**
- Væske med **lavest kokepunkt** fordamper først
- Damp kondenseres til væske (destillat)

**Typer:**
1. **Enkel destillasjon**: Separerer væsker med stor forskjell i kokepunkt (>25°C)
   - Eksempel: Rense vann (kp. 100°C) fra saltløsning
2. **Fraksjonert destillasjon**: Separerer væsker med liten forskjell i kokepunkt
   - Bruker kolonner med "teoretiske plater"
   - Eksempel: Separere etanol (78°C) fra vann (100°C)

**Utstyr:**
- Rundkolbe (oppvarming)
- Destillasjonsoppsett (kjøler, oppsamlingskolbe)
- Termometer (måler damptemperatur)`,
    },

    {
      id: 'kjemi1-12-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-8',
        number: '12-8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Filtrering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på residuet og filtratet?',
            solution: '**Residuet**: Fast stoff som blir igjen på filteret.\n**Filtratet**: Væske som går gjennom filteret.',
          },
          {
            label: 'b',
            task: 'Hvordan separerer vi AgCl fra en vannløsning?',
            solution: '**Filtrering**: AgCl (hvitt utfelt salt) er **uløselig** i vann.\nHell blanding gjennom filterpapir → **AgCl** blir igjen på filteret (residuet).\nVann går gjennom (filtratet).',
          },
          {
            label: 'c',
            task: 'Hva er fordelen med vakuumfiltrering?',
            solution: '**Vakuumfiltrering** (Büchner-trakt) bruker **vakuum** (undertrykk) for å trekke væske gjennom filteret.\n**Raskere** og **mer effektivt** enn gravitasjonsfiltrering.',
          },
        ],
        solution: 'a) Residuet = fast stoff, Filtratet = væske; b) Filtrering (AgCl er uløselig); c) Raskere og mer effektivt',
        hints: ['Residuet vs filtrat, AgCl uløselig, Vakuum = raskere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-9',
        number: '12-9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Destillasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar prinsippet bak destillasjon.',
            solution: 'Destillasjon skiller væsker basert på **ulike kokepunkt**:\n1. Oppvarm blanding → væske med **lavest kokepunkt** fordamper først\n2. Damp kondenseres (kjøles) til væske (destillat)\n3. Samle destillat i oppsamlingskolbe.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på enkel og fraksjonert destillasjon?',
            solution: '**Enkel destillasjon**: Separerer væsker med **stor forskjell** i kokepunkt (>25°C).\n**Fraksjonert destillasjon**: Separerer væsker med **liten forskjell** i kokepunkt (bruker kolonne med teoretiske plater).',
          },
          {
            label: 'c',
            task: 'Hvordan separerer vi etanol (78°C) fra vann (100°C)?',
            solution: '**Fraksjonert destillasjon** (forskjell: 22°C → liten).\nOppvarm blanding til 78°C → **etanol** fordamper først.\nKondenser damp → samle etanol-rik fraksjon.',
          },
        ],
        solution: 'a) Separerer væsker basert på ulike kokepunkt; b) Enkel: stor forskjell, Fraksjonert: liten forskjell; c) Fraksjonert destillasjon (etanol fordamper først ved 78°C)',
        hints: ['Kokepunktforskjell, Enkel vs fraksjonert, Etanol: 78°C'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-10',
        number: '12-10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Destillasjonsberegning:',
        subTasks: [
          {
            label: 'a',
            task: 'Vi destillerer en blanding av aceton (kp. 56°C) og vann (kp. 100°C). Hvilken komponent destillerer først?',
            solution: '**Aceton** (kp. 56°C) har **lavest kokepunkt** → fordamper først.\nVann (kp. 100°C) blir igjen i kolben.',
          },
          {
            label: 'b',
            task: 'Er dette enkel eller fraksjonert destillasjon?',
            solution: 'Kokepunktforskjell: 100°C - 56°C = **44°C** (>25°C).\n**Stor forskjell** → **Enkel destillasjon**.',
          },
          {
            label: 'c',
            task: 'Hvis første dråpe destillat kommer ved 56°C, hva inneholder den?',
            solution: 'Temperatur 56°C = aceton sitt kokepunkt.\nFørste dråpe inneholder **hovedsakelig aceton** (ren eller aceton-rik fraksjon).',
          },
        ],
        solution: 'a) Aceton (lavest kokepunkt); b) Enkel destillasjon (stor forskjell: 44°C); c) Hovedsakelig aceton',
        hints: ['Lavest kp. først, Forskjell >25°C → enkel, Første dråpe = lavest kp.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-1-ex-11',
        number: '12-11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de viktigste sikkerhetstiltakene i laboratoriet?',
            solution: '1. **Bruk PPE** (vernebriller, labfrakk, hansker)\n2. **Les SDS** før bruk av kjemikalier\n3. **Identifiser faresymboler** (GHS)\n4. **Håndter avfall** korrekt (ikke bland, ikke hell i vasken)\n5. **Ingen mat/drikke** i laboratoriet',
          },
          {
            label: 'b',
            task: 'Hvilken pipette er mest nøyaktig: Målesylinder, Pipette, eller Byrett?',
            solution: '**Byrett** (±0.05 mL) > **Pipette** (±0.1-0.5 mL) > **Målesylinder** (±1-5 mL).\n**Byrett** har høyest presisjon.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen på filtrering og destillasjon?',
            solution: '**Filtrering**: Separerer **fast stoff** fra **væske**.\n**Destillasjon**: Separerer **væsker** basert på **ulike kokepunkt**.',
          },
        ],
        solution: 'a) PPE, SDS, faresymboler, avfallshåndtering, ingen mat/drikke; b) Byrett (±0.05 mL); c) Filtrering: fast/væske, Destillasjon: væsker (kokepunkt)',
        hints: ['Sikkerhet først, Byrett mest nøyaktig, Filtrering vs destillasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};


const CHAPTER_KJEMI1_12_2: TextbookChapter = {
  id: 'kjemi1-12-2',
  courseId: 'kjemi1',
  chapterNumber: '12.2',
  title: 'Usikkerhet og feilkilder',
  description: 'Lær om nøyaktighet vs presisjon, systematiske og tilfeldige feil, usikkerhetsestimering, signifikante sifre, feilfortplantning og rapportering av resultater.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare nøyaktighet vs presisjon',
    'identifisere systematiske feil',
    'identifisere tilfeldige feil',
    'estimere usikkerhet',
    'bruke signifikante sifre korrekt',
    'beregne feilfortplantning',
    'rapportere resultater med usikkerhet',
  ],
  content: [
    {
      id: 'kjemi1-12-2-intro',
      type: 'text',
      content: `## Usikkerhet og feilkilder

**Alle målinger inneholder usikkerhet.** Dette kapitlet dekker hvordan vi identifiserer, kvantifiserer og rapporterer usikkerhet i kjemiske målinger.

### Hovedtemaer
- Nøyaktighet vs presisjon
- Systematiske feil
- Tilfeldige feil
- Usikkerhetsestimering
- Signifikante sifre
- Feilfortplantning`,
    },

    // ========== NØYAKTIGHET VS PRESISJON ==========
    {
      id: 'kjemi1-12-2-accuracy',
      type: 'text',
      content: `## Nøyaktighet vs presisjon

### Nøyaktighet (Accuracy)
**Hvor nær vi er den sanne verdien.**

- **Høy nøyaktighet**: Gjennomsnitt nær sann verdi
- **Lav nøyaktighet**: Gjennomsnitt langt fra sann verdi

### Presisjon (Precision)
**Hvor nær målingene er hverandre.**

- **Høy presisjon**: Målinger er tett samlet (lav spredning)
- **Lav presisjon**: Målinger er spredt (høy spredning)

### Kombinasjoner
1. **Høy nøyaktighet + høy presisjon**: Målinger tett samlet nær sann verdi (ideelt)
2. **Høy nøyaktighet + lav presisjon**: Gjennomsnitt nær sann verdi, men store variasjoner
3. **Lav nøyaktighet + høy presisjon**: Målinger tett samlet, men langt fra sann verdi (systematisk feil)
4. **Lav nøyaktighet + lav presisjon**: Målinger spredt og langt fra sann verdi (verste)

### Målskyve-analogi
- **Nøyaktighet**: Hvor nær vi treffer sentrum (blink)
- **Presisjon**: Hvor tett samlet pilene er`,
    },

    {
      id: 'kjemi1-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-1',
        number: '12-12',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nøyaktighet vs presisjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på nøyaktighet og presisjon?',
            solution: '**Nøyaktighet**: Hvor **nær sann verdi** vi er.\n**Presisjon**: Hvor **nær hverandre** målingene er (spredning).',
          },
          {
            label: 'b',
            task: 'Kan vi ha høy presisjon men lav nøyaktighet?',
            solution: '**Ja**: Målinger kan være **tett samlet** (høy presisjon) men **langt fra sann verdi** (lav nøyaktighet).\nEksempel: Systematisk feil i målesystem (kalibreringsfeil).',
          },
          {
            label: 'c',
            task: 'Hva er ideelt: høy nøyaktighet eller høy presisjon?',
            solution: '**Begge**: Ideelt sett vil vi ha **høy nøyaktighet** (nær sann verdi) **og** **høy presisjon** (lav spredning).\nDette gir mest pålitelige resultater.',
          },
        ],
        solution: 'a) Nøyaktighet = nær sann verdi, Presisjon = nær hverandre; b) Ja (systematisk feil); c) Begge (høy nøyaktighet + høy presisjon)',
        hints: ['Nær sann verdi vs nær hverandre, Systematisk feil, Begge ideelt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SYSTEMATISKE FEIL ==========
    {
      id: 'kjemi1-12-2-systematic',
      type: 'text',
      content: `## Systematiske feil

**Systematiske feil** gir en **konsistent forskyvning** i samme retning (alltid for høy eller for lav).

### Kjennetegn
- **Konsistent**: Samme retning hver gang
- **Kan korrigeres**: Ved kalibrering eller korreksjoner
- **Påvirker nøyaktighet**: Gjennomsnitt langt fra sann verdi

### Eksempler
1. **Kalibreringserfeil**: Vekt viser 0.5 g når den skal vise 0 g (alle veiinger 0.5 g for høye)
2. **Instrumentfeil**: Termometer kalibrert feil (viser alltid 2°C for høyt)
3. **Metodefeil**: Reagens ikke helt rent (inneholder urenheter)
4. **Personlige feil**: Avlesning av menisk alltid fra feil vinkel (parallaksefeil)

### Reduksjon av systematiske feil
- **Kalibrering**: Juster instrumenter mot kjent standard
- **Bruk rene reagenser**: Høy kvalitet (p.a. grade)
- **Korriger for kjente feil**: Hvis feil er kjent, korriger resultatet
- **Bruk ulike metoder**: Sammenlign resultater fra forskjellige metoder`,
    },

    {
      id: 'kjemi1-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-2',
        number: '12-13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Systematiske feil:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en systematisk feil?',
            solution: 'Systematisk feil gir en **konsistent forskyvning** i **samme retning**.\nAlltid for høy eller alltid for lav.\nPåvirker **nøyaktighet** (ikke presisjon).',
          },
          {
            label: 'b',
            task: 'En vekt viser 0.5 g når den skal vise 0 g. Hva slags feil er dette?',
            solution: '**Systematisk feil** (kalibreringserfeil).\nAlle veiinger blir **0.5 g for høye**.\nKan korrigeres ved **kalibrering** (nullstill vekten).',
          },
          {
            label: 'c',
            task: 'Hvordan reduserer vi systematiske feil?',
            solution: '1. **Kalibrering** av instrumenter\n2. **Bruk rene reagenser**\n3. **Korriger for kjente feil**\n4. **Bruk ulike metoder** (sammenlign)',
          },
        ],
        solution: 'a) Konsistent forskyvning i samme retning; b) Systematisk feil (kalibreringserfeil); c) Kalibrering, rene reagenser, korriger, sammenlign metoder',
        hints: ['Konsistent retning, Kalibreringserfeil, Kalibrering'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TILFELDIGE FEIL ==========
    {
      id: 'kjemi1-12-2-random',
      type: 'text',
      content: `## Tilfeldige feil

**Tilfeldige feil** varierer **tilfeldig** i begge retninger (noen ganger for høy, noen ganger for lav).

### Kjennetegn
- **Variabel**: Ingen konsistent retning
- **Kan ikke korrigeres**: Uforutsigbar
- **Påvirker presisjon**: Øker spredning
- **Reduseres ved gjentak**: Gjennomsnitt av mange målinger reduserer effekt

### Eksempler
1. **Avlesningsfeil**: Små variasjoner i avlesning av menisk
2. **Miljøvariasjoner**: Temperatursvingninger, luftstrøm
3. **Ustabilt utstyr**: Vibrasjoner, elektrisk støy
4. **Kjemiske variasjoner**: Små variasjoner i reaksjonskonditioner

### Reduksjon av tilfeldige feil
- **Gjenta målinger**: Ta mange målinger og beregn gjennomsnitt
- **Bruk bedre utstyr**: Mer presist utstyr (lavere usikkerhet)
- **Kontroller miljø**: Stabil temperatur, ingen vibrasjoner
- **Standardiser prosedyre**: Samme prosedyre hver gang`,
    },

    {
      id: 'kjemi1-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-3',
        number: '12-14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tilfeldige feil:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en tilfeldig feil?',
            solution: 'Tilfeldig feil varierer **tilfeldig** i **begge retninger**.\nNoen ganger for høy, noen ganger for lav.\nPåvirker **presisjon** (øker spredning).',
          },
          {
            label: 'b',
            task: 'Hvordan reduserer vi effekten av tilfeldige feil?',
            solution: '**Gjenta målinger**: Ta **mange målinger** og beregn **gjennomsnitt**.\nTilfeldige feil "utligner hverandre" → gjennomsnitt nærmer seg sann verdi.\n**Standardavvik** måler spredning.',
          },
          {
            label: 'c',
            task: 'Hva er forskjellen på systematiske og tilfeldige feil?',
            solution: '**Systematisk feil**: Konsistent retning → påvirker **nøyaktighet** → kan **korrigeres**.\n**Tilfeldig feil**: Variabel retning → påvirker **presisjon** → kan **ikke korrigeres** (men reduseres ved gjentak).',
          },
        ],
        solution: 'a) Varierer tilfeldig i begge retninger; b) Gjenta målinger og beregn gjennomsnitt; c) Systematisk: konsistent, nøyaktighet, kan korrigeres; Tilfeldig: variabel, presisjon, ikke korrigeres',
        hints: ['Tilfeldig retning, Gjenta målinger, Systematisk vs tilfeldig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== USIKKERHETSESTIMERING ==========
    {
      id: 'kjemi1-12-2-uncertainty',
      type: 'text',
      content: `## Usikkerhetsestimering

**Usikkerhet** kvantifiserer hvor mye vi tror målingen kan avvike fra sann verdi.

### Absolutt usikkerhet
**Usikkerhet i samme enhet som målingen.**

Eksempel: **25.0 ± 0.1 g**
- Måling: 25.0 g
- Absolutt usikkerhet: 0.1 g
- Sann verdi ligger mellom 24.9 og 25.1 g

### Relativ usikkerhet
**Usikkerhet i prosent av målingen.**

Formel:
\`\`\`
Relativ usikkerhet (%) = (Absolutt usikkerhet / Måling) × 100%
\`\`\`

Eksempel: **25.0 ± 0.1 g**
- Relativ usikkerhet = (0.1 / 25.0) × 100% = **0.4%**

### Kilder til usikkerhet
1. **Instrumentusikkerhet**: Angitt på utstyr (f.eks. ± 0.03 mL for pipette)
2. **Avlesningsusikkerhet**: Estimert fra graderinger (f.eks. ± halve minste inndeling)
3. **Standardavvik**: Beregnet fra gjentatte målinger`,
    },

    {
      id: 'kjemi1-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-4',
        number: '12-15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Usikkerhetsestimering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr 25.0 ± 0.1 g?',
            solution: '**25.0 g**: Målt verdi.\n**± 0.1 g**: Absolutt usikkerhet.\nSann verdi ligger mellom **24.9 g** og **25.1 g** (med høy sannsynlighet).',
          },
          {
            label: 'b',
            task: 'Beregn relativ usikkerhet for 25.0 ± 0.1 g.',
            solution: 'Relativ usikkerhet (%) = (Absolutt usikkerhet / Måling) × 100%.\n= (0.1 g / 25.0 g) × 100% = **0.4%**.',
          },
          {
            label: 'c',
            task: 'Beregn relativ usikkerhet for 5.0 ± 0.1 g.',
            solution: 'Relativ usikkerhet = (0.1 g / 5.0 g) × 100% = **2.0%**.\n**Større relativ usikkerhet** enn 25.0 ± 0.1 g (0.4%) → mindre masse gir større relativ usikkerhet.',
          },
        ],
        solution: 'a) Sann verdi mellom 24.9 og 25.1 g; b) 0.4%; c) 2.0% (større enn 25.0 ± 0.1 g)',
        hints: ['Interval, Relativ = (absolutt/verdi) × 100%, Mindre masse → større relativ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SIGNIFIKANTE SIFRE ==========
    {
      id: 'kjemi1-12-2-sig-figs',
      type: 'text',
      content: `## Signifikante sifre

**Signifikante sifre** indikerer presisjonen i en måling.

### Regler for å telle signifikante sifre
1. **Alle sifre unntatt null foran**: 123 har 3 signifikante sifre
2. **Nuller mellom sifre**: 1003 har 4 signifikante sifre
3. **Nuller etter sifre og etter desimaltegn**: 1.200 har 4 signifikante sifre
4. **Nuller foran**: 0.0012 har 2 signifikante sifre (nuller foran teller ikke)
5. **Nuller etter sifre uten desimaltegn**: 1200 har 2-4 signifikante sifre (tvetydig)

### Regler for beregninger
**Addisjon/subtraksjon**: Resultat har samme antall desimaler som minst presise tall.
- Eksempel: 12.5 + 0.123 = 12.6 (ikke 12.623)

**Multiplikasjon/divisjon**: Resultat har samme antall signifikante sifre som minst presise tall.
- Eksempel: 12.5 × 2.1 = 26 (ikke 26.25)

### Avrunding
- **< 5**: Avrund ned
- **> 5**: Avrund opp
- **= 5**: Avrund til nærmeste partall (banker's rounding)`,
    },

    {
      id: 'kjemi1-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-5',
        number: '12-16',
        type: 'classic',
        difficulty: 'lett',
        task: 'Signifikante sifre:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange signifikante sifre har 0.0012?',
            solution: '**0.0012**: Nuller foran teller **ikke**.\n**2 signifikante sifre** (1 og 2).',
          },
          {
            label: 'b',
            task: 'Hvor mange signifikante sifre har 1.200?',
            solution: '**1.200**: Nuller etter desimaltegn teller.\n**4 signifikante sifre** (1, 2, 0, 0).',
          },
          {
            label: 'c',
            task: 'Beregn 12.5 + 0.123 med korrekt antall signifikante sifre.',
            solution: 'Addisjon: Resultat har samme antall **desimaler** som minst presise tall.\n**12.5** (1 desimal) + **0.123** (3 desimaler) = **12.6** (1 desimal).',
          },
        ],
        solution: 'a) 2 signifikante sifre; b) 4 signifikante sifre; c) 12.6',
        hints: ['Nuller foran teller ikke, Nuller etter desimaltegn teller, Addisjon → desimaler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-6',
        number: '12-17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Signifikante sifre beregning:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn 12.5 × 2.1 med korrekt antall signifikante sifre.',
            solution: 'Multiplikasjon: Resultat har samme antall **signifikante sifre** som minst presise tall.\n**12.5** (3 signifikante sifre) × **2.1** (2 signifikante sifre) = **26** (2 signifikante sifre).\nKalkulator: 26.25 → avrund til **26**.',
          },
          {
            label: 'b',
            task: 'Beregn 100.0 / 3.0 med korrekt antall signifikante sifre.',
            solution: 'Divisjon: Resultat har samme antall **signifikante sifre** som minst presise tall.\n**100.0** (4 signifikante sifre) / **3.0** (2 signifikante sifre) = **33** (2 signifikante sifre).\nKalkulator: 33.333... → avrund til **33**.',
          },
          {
            label: 'c',
            task: 'Beregn (12.5 + 0.5) × 2.0 med korrekt antall signifikante sifre.',
            solution: '**Trinnvis beregning:**\n1. Addisjon: 12.5 + 0.5 = **13.0** (1 desimal)\n2. Multiplikasjon: 13.0 (3 signifikante sifre) × 2.0 (2 signifikante sifre) = **26** (2 signifikante sifre).',
          },
        ],
        solution: 'a) 26; b) 33; c) 26',
        hints: ['Multiplikasjon → signifikante sifre, Divisjon → signifikante sifre, Trinnvis beregning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FEILFORTPLANTNING ==========
    {
      id: 'kjemi1-12-2-propagation',
      type: 'text',
      content: `## Feilfortplantning

**Når vi kombinerer målinger, kombineres usikkerhetene.**

### Addisjon og subtraksjon
**Absolutte usikkerheter legges sammen** (kvadratisk):

\`\`\`
Δ(A + B) = √(ΔA² + ΔB²)
Δ(A - B) = √(ΔA² + ΔB²)
\`\`\`

### Multiplikasjon og divisjon
**Relative usikkerheter legges sammen** (kvadratisk):

\`\`\`
Δ(A × B) / (A × B) = √[(ΔA/A)² + (ΔB/B)²]
Δ(A / B) / (A / B) = √[(ΔA/A)² + (ΔB/B)²]
\`\`\`

### Forenklet regel (øvre grense)
**Addisjon/subtraksjon**: Legg sammen absolutte usikkerheter direkte.
- Δ(A + B) ≈ ΔA + ΔB (øvre grense)

**Multiplikasjon/divisjon**: Legg sammen relative usikkerheter direkte.
- Δ(A × B) / (A × B) ≈ ΔA/A + ΔB/B (øvre grense)`,
    },

    {
      id: 'kjemi1-12-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-7',
        number: '12-18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Feilfortplantning addisjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn A + B hvor A = 10.0 ± 0.1 g og B = 5.0 ± 0.1 g.',
            solution: 'Addisjon: **Absolutte usikkerheter** legges sammen (kvadratisk).\nA + B = 10.0 + 5.0 = **15.0 g**.\nΔ(A + B) = √(0.1² + 0.1²) = √(0.02) ≈ **0.14 g**.\n**Resultat: 15.0 ± 0.14 g** (kan avrunde til **15.0 ± 0.1 g**).',
          },
          {
            label: 'b',
            task: 'Bruk forenklet regel (øvre grense) for oppgave a.',
            solution: 'Forenklet: Δ(A + B) ≈ ΔA + ΔB = 0.1 + 0.1 = **0.2 g**.\n**Resultat: 15.0 ± 0.2 g** (øvre grense, mer konservativ enn kvadratisk: 0.14 g).',
          },
          {
            label: 'c',
            task: 'Hvilken regel gir mest konservativt estimat?',
            solution: '**Forenklet regel** (øvre grense) gir **større usikkerhet** (0.2 g) enn **kvadratisk regel** (0.14 g).\nForenklet regel er **mer konservativ** (forsiktig).',
          },
        ],
        solution: 'a) 15.0 ± 0.14 g (eller 15.0 ± 0.1 g); b) 15.0 ± 0.2 g; c) Forenklet regel (øvre grense)',
        hints: ['Addisjon: kvadratisk, Forenklet: ΔA + ΔB, Forenklet mer konservativ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-8',
        number: '12-19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Feilfortplantning multiplikasjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn A × B hvor A = 10.0 ± 0.1 g og B = 5.0 ± 0.1 g.',
            solution: 'Multiplikasjon: **Relative usikkerheter** legges sammen (kvadratisk).\nA × B = 10.0 × 5.0 = **50.0 g²**.\nΔA/A = 0.1/10.0 = 0.01 (1%).\nΔB/B = 0.1/5.0 = 0.02 (2%).\nΔ(A × B) / (A × B) = √(0.01² + 0.02²) = √(0.0005) ≈ **0.022** (2.2%).\nΔ(A × B) = 0.022 × 50.0 ≈ **1.1 g²**.\n**Resultat: 50.0 ± 1.1 g²** (kan avrunde til **50 ± 1 g²**).',
          },
          {
            label: 'b',
            task: 'Bruk forenklet regel (øvre grense) for oppgave a.',
            solution: 'Forenklet: Δ(A × B) / (A × B) ≈ ΔA/A + ΔB/B = 0.01 + 0.02 = **0.03** (3%).\nΔ(A × B) = 0.03 × 50.0 = **1.5 g²**.\n**Resultat: 50.0 ± 1.5 g²** (eller **50 ± 2 g²**).',
          },
          {
            label: 'c',
            task: 'Hva er relativ usikkerhet i prosent for 50 ± 1 g²?',
            solution: 'Relativ usikkerhet = (Absolutt / Verdi) × 100% = (1 / 50) × 100% = **2%**.',
          },
        ],
        solution: 'a) 50.0 ± 1.1 g² (eller 50 ± 1 g²); b) 50.0 ± 1.5 g² (eller 50 ± 2 g²); c) 2%',
        hints: ['Multiplikasjon: relative, Forenklet: ΔA/A + ΔB/B, Relativ = (absolutt/verdi) × 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RAPPORTERING AV RESULTATER ==========
    {
      id: 'kjemi1-12-2-reporting',
      type: 'text',
      content: `## Rapportering av resultater

**Korrekt rapportering av resultater** er essensielt for vitenskapelig kommunikasjon.

### Format
\`\`\`
Resultat = (Verdi ± Usikkerhet) enhet
\`\`\`

Eksempel: **m = (25.0 ± 0.1) g**

### Regler
1. **Usikkerhet har 1-2 signifikante sifre**: 0.1 eller 0.14 (ikke 0.14285...)
2. **Verdi har samme antall desimaler som usikkerhet**:
   - Hvis usikkerhet = 0.1, verdi = 25.0 (ikke 25.03)
   - Hvis usikkerhet = 0.14, verdi = 25.03 (ikke 25.0)
3. **Bruk parentes rundt usikkerhet**: (25.0 ± 0.1) g (ikke 25.0 ± 0.1 g uten parentes)

### Relativ usikkerhet
Kan også rapporteres som prosent:
\`\`\`
m = 25.0 g ± 0.4%
\`\`\`

### Konfidensnivå
Spesifiser konfidensnivå hvis relevant:
\`\`\`
m = (25.0 ± 0.1) g (95% konfidens)
\`\`\``,
    },

    {
      id: 'kjemi1-12-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-9',
        number: '12-20',
        type: 'classic',
        difficulty: 'lett',
        task: 'Rapportering:',
        subTasks: [
          {
            label: 'a',
            task: 'Rapporter 25.03 ± 0.14285... g korrekt.',
            solution: '1. Usikkerhet: **2 signifikante sifre** → **0.14** (avrund 0.14285... til 0.14)\n2. Verdi: **samme antall desimaler** som usikkerhet (0.14 = 2 desimaler) → **25.03**\n3. **Resultat: (25.03 ± 0.14) g**.',
          },
          {
            label: 'b',
            task: 'Rapporter 25.03 ± 0.1 g korrekt.',
            solution: 'Usikkerhet = **0.1** (1 desimal) → Verdi må ha **1 desimal** → **25.0** (avrund 25.03 til 25.0).\n**Resultat: (25.0 ± 0.1) g**.',
          },
          {
            label: 'c',
            task: 'Hva er relativ usikkerhet for (25.0 ± 0.1) g?',
            solution: 'Relativ usikkerhet = (0.1 / 25.0) × 100% = **0.4%**.\nKan også rapporteres som: **m = 25.0 g ± 0.4%**.',
          },
        ],
        solution: 'a) (25.03 ± 0.14) g; b) (25.0 ± 0.1) g; c) 0.4%',
        hints: ['Usikkerhet 1-2 sifre, Samme antall desimaler, Relativ = (absolutt/verdi) × 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-10',
        number: '12-21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Komplett usikkerhetsanalyse:',
        subTasks: [
          {
            label: 'a',
            task: 'Vi måler masse: m₁ = 10.5 ± 0.1 g, m₂ = 5.2 ± 0.1 g. Beregn total masse m = m₁ + m₂.',
            solution: 'Addisjon: Absolutte usikkerheter (kvadratisk).\nm = 10.5 + 5.2 = **15.7 g**.\nΔm = √(0.1² + 0.1²) = √(0.02) ≈ **0.14 g**.\nVerdi må ha samme antall desimaler som usikkerhet (0.14 = 2 desimaler) → **15.70 g**.\n**Resultat: (15.70 ± 0.14) g** (kan avrunde til **(15.7 ± 0.1) g**).',
          },
          {
            label: 'b',
            task: 'Beregn relativ usikkerhet i prosent for resultat i oppgave a.',
            solution: 'Relativ usikkerhet = (0.14 / 15.70) × 100% ≈ **0.9%**.\nEller (0.1 / 15.7) × 100% ≈ **0.6%** (hvis avrundet til 0.1 g).',
          },
          {
            label: 'c',
            task: 'Hvis vi deler total masse på volum V = 5.0 ± 0.1 mL, hva er densitet ρ = m/V?',
            solution: 'Divisjon: Relative usikkerheter (kvadratisk).\nρ = 15.7 / 5.0 = **3.14 g/mL**.\nΔm/m = 0.1/15.7 ≈ 0.006 (0.6%).\nΔV/V = 0.1/5.0 = 0.02 (2%).\nΔρ/ρ = √(0.006² + 0.02²) = √(0.000436) ≈ **0.021** (2.1%).\nΔρ = 0.021 × 3.14 ≈ **0.07 g/mL**.\n**Resultat: (3.14 ± 0.07) g/mL** eller **(3.1 ± 0.1) g/mL**.',
          },
        ],
        solution: 'a) (15.70 ± 0.14) g eller (15.7 ± 0.1) g; b) 0.9% (eller 0.6% hvis avrundet); c) (3.14 ± 0.07) g/mL eller (3.1 ± 0.1) g/mL',
        hints: ['Addisjon: absolutte, Divisjon: relative, Avrund korrekt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'kjemi1-12-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'kjemi1-12-2-ex-11',
        number: '12-22',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oppsummering:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på nøyaktighet og presisjon?',
            solution: '**Nøyaktighet**: Hvor **nær sann verdi**.\n**Presisjon**: Hvor **nær hverandre** målingene er (spredning).\nIdeelt: **Både høy nøyaktighet og høy presisjon**.',
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på systematiske og tilfeldige feil?',
            solution: '**Systematisk feil**: Konsistent retning → påvirker **nøyaktighet** → kan **korrigeres** (kalibrering).\n**Tilfeldig feil**: Variabel retning → påvirker **presisjon** → kan **ikke korrigeres** (men reduseres ved gjentak).',
          },
          {
            label: 'c',
            task: 'Hvordan rapporterer vi resultater med usikkerhet?',
            solution: 'Format: **(Verdi ± Usikkerhet) enhet**.\nRegler:\n1. Usikkerhet: **1-2 signifikante sifre**\n2. Verdi: **samme antall desimaler** som usikkerhet\n3. Bruk **parentes**.\nEksempel: **(25.0 ± 0.1) g**.',
          },
        ],
        solution: 'a) Nøyaktighet = nær sann verdi, Presisjon = nær hverandre; b) Systematisk: konsistent, nøyaktighet, kan korrigeres; Tilfeldig: variabel, presisjon, gjentak; c) (Verdi ± Usikkerhet) enhet, samme antall desimaler',
        hints: ['Nøyaktighet vs presisjon, Systematisk vs tilfeldig, Rapporteringsformat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};


export const KJEMI1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KJEMI1_1_1,
  CHAPTER_KJEMI1_1_2,
  CHAPTER_KJEMI1_1_3,
  CHAPTER_KJEMI1_1_4,
  CHAPTER_KJEMI1_2_1,
  CHAPTER_KJEMI1_2_2,
  CHAPTER_KJEMI1_3_1,
  CHAPTER_KJEMI1_3_2,
  CHAPTER_KJEMI1_3_3,
  CHAPTER_KJEMI1_4_1,
  CHAPTER_KJEMI1_4_2,
  CHAPTER_KJEMI1_4_3,
  CHAPTER_KJEMI1_5_1,
  CHAPTER_KJEMI1_5_2,
  CHAPTER_KJEMI1_5_3,
  CHAPTER_KJEMI1_5_4,
  CHAPTER_KJEMI1_6_1,
  CHAPTER_KJEMI1_6_2,
  CHAPTER_KJEMI1_6_3,
  CHAPTER_KJEMI1_7_1,
  CHAPTER_KJEMI1_7_2,
  CHAPTER_KJEMI1_8_1,
  CHAPTER_KJEMI1_8_2,
  CHAPTER_KJEMI1_9_1,
  CHAPTER_KJEMI1_9_2,
  CHAPTER_KJEMI1_9_3,
  CHAPTER_KJEMI1_9_4,
  CHAPTER_KJEMI1_10_1,
  CHAPTER_KJEMI1_10_2,
  CHAPTER_KJEMI1_10_3,
  CHAPTER_KJEMI1_11_1,
  CHAPTER_KJEMI1_11_2,
  CHAPTER_KJEMI1_12_1,
  CHAPTER_KJEMI1_12_2,
];

export function getKjemi1Chapter(chapterId: string): TextbookChapter | undefined {
  return KJEMI1_CHAPTERS.find((c) => c.id === chapterId);
}

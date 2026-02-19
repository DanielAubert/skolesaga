/**
 * Tekstbok kapitler for S1 - Kapittel 4b (Økonomi forts.), 5.4 (Sannsynlighet), 6.4 (Sannsynlighetsfordelinger)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.4: Tilbud og etterspørsel
// ============================================================================

export const CHAPTER_S1_4_4: TextbookChapter = {
  id: 's1-4-4',
  courseId: 's1',
  chapterNumber: '4.4',
  title: 'Tilbud og etterspørsel',
  description: 'Lær om tilbuds- og etterspørselsfunksjoner, markedslikevekt og hvordan pris bestemmes i et marked.',
  estimatedMinutes: 50,
  competenceGoals: [
    'modellere praktiske situasjoner med funksjoner og tolke resultater i økonomi',
  ],
  content: [
    {
      id: 's1-4-4-intro',
      type: 'text',
      content: `## Tilbud og etterspørsel

I et fritt marked bestemmes prisen av **tilbud** og **etterspørsel**. Etterspørselen viser hvor mye kundene ønsker å kjøpe ved ulike priser, mens tilbudet viser hvor mye produsentene vil selge.

- **Etterspørselsfunksjonen** $E(x)$ er avtagende: høyere pris gir lavere etterspørsel.
- **Tilbudsfunksjonen** $T(x)$ er voksende: høyere pris gir høyere tilbud.

Her er $x$ antall enheter og funksjonsverdien er prisen per enhet.`,
    },
    {
      id: 's1-4-4-def-likevekt',
      type: 'definition',
      title: 'Markedslikevekt',
      content: `**Markedslikevekt** oppstår når tilbud er lik etterspørsel:

$$T(x) = E(x)$$

Løsningen gir **likevektsmengden** $x_0$ og **likevektsprisen** $p_0 = T(x_0) = E(x_0)$.`,
    },
    {
      id: 's1-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Finn markedslikevekt',
      problem: `Etterspørselsfunksjonen er $E(x) = 400 - 2x$ og tilbudsfunksjonen er $T(x) = 100 + x$. Finn likevektspris og likevektsmengde.`,
      solution: `**Løsning:**

Setter $T(x) = E(x)$:

$$100 + x = 400 - 2x$$
$$3x = 300$$
$$x_0 = 100$$

Likevektsprisen: $p_0 = T(100) = 100 + 100 = 200$ kr.

**Svar:** Likevektsmengden er 100 enheter og likevektsprisen er 200 kr.`,
    },
    {
      id: 's1-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Overskudd og underskudd',
      problem: `Med $E(x) = 400 - 2x$ og $T(x) = 100 + x$. Hva skjer hvis prisen settes til 250 kr?`,
      solution: `**Løsning:**

Ved $p = 250$: Etterspørsel: $250 = 400 - 2x \\Rightarrow x = 75$. Tilbud: $250 = 100 + x \\Rightarrow x = 150$.

Tilbudet (150) er større enn etterspørselen (75), så det er et **overskudd** på $150 - 75 = 75$ enheter. Prisen vil presses ned mot likevektsprisen.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Gitt $E(x) = 500 - 5x$ og $T(x) = 50 + 2x$. Finn likevektsmengden.',
            solution: '$500 - 5x = 50 + 2x \\Rightarrow 7x = 450 \\Rightarrow x_0 \\approx 64{,}3$',
          },
          {
            label: 'b',
            task: 'Finn likevektsprisen.',
            solution: '$p_0 = 50 + 2 \\cdot 64{,}3 \\approx 178{,}6$ kr',
          },
        ],
        solution: 'a) $x_0 \\approx 64{,}3$, b) $p_0 \\approx 178{,}6$ kr',
        hints: ['Sett $E(x) = T(x)$ og løs for $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gitt $E(x) = 300 - 3x$ og $T(x) = 60 + 2x$. Avgjør om det er overskudd eller underskudd i markedet når prisen er 120 kr.',
        solution: 'Etterspørsel: $120 = 300 - 3x \\Rightarrow x = 60$. Tilbud: $120 = 60 + 2x \\Rightarrow x = 30$. Etterspørselen (60) > tilbudet (30), altså **underskudd** på 30 enheter.',
        hints: ['Finn mengden etterspurt og mengden tilbudt ved $p = 120$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et marked har $E(x) = 1000 - 4x$ og $T(x) = 200 + 2x$. Finn likevektspunkt.',
            solution: '$1000 - 4x = 200 + 2x \\Rightarrow 6x = 800 \\Rightarrow x_0 \\approx 133{,}3$, $p_0 \\approx 466{,}7$ kr',
          },
          {
            label: 'b',
            task: 'Staten innfører en minstepris på 600 kr. Beregn overskuddet i markedet.',
            solution: 'Etterspørsel: $600 = 1000 - 4x \\Rightarrow x = 100$. Tilbud: $600 = 200 + 2x \\Rightarrow x = 200$. Overskudd: $200 - 100 = 100$ enheter.',
          },
        ],
        solution: 'a) $(133{,}3,\\ 466{,}7)$, b) Overskudd på 100 enheter',
        hints: ['Bruk likevektsbetingelsen først, deretter sett inn minsteprisen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har etterspørselsfunksjon $E(x) = 800 - 10x$ og tilbudsfunksjon $T(x) = 80 + 5x$. Finn likevektspunkt og tegn begge grafene i et koordinatsystem.',
        solution: '$800 - 10x = 80 + 5x \\Rightarrow 15x = 720 \\Rightarrow x_0 = 48$, $p_0 = 80 + 5 \\cdot 48 = 320$ kr. Likevektspunktet er $(48, 320)$.',
        hints: ['Likevektspunktet er skjæringspunktet mellom de to grafene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Gitt $E(x) = \\frac{600}{x+1}$ og $T(x) = 2x + 10$. Finn likevektsmengden.',
            solution: '$\\frac{600}{x+1} = 2x + 10 \\Rightarrow 600 = (2x+10)(x+1) = 2x^2 + 12x + 10 \\Rightarrow 2x^2 + 12x - 590 = 0 \\Rightarrow x^2 + 6x - 295 = 0$. $x = \\frac{-6 + \\sqrt{36 + 1180}}{2} = \\frac{-6 + \\sqrt{1216}}{2} \\approx 14{,}4$',
          },
          {
            label: 'b',
            task: 'Finn likevektsprisen.',
            solution: '$p_0 = 2 \\cdot 14{,}4 + 10 \\approx 38{,}9$ kr',
          },
        ],
        solution: 'a) $x_0 \\approx 14{,}4$, b) $p_0 \\approx 38{,}9$ kr',
        hints: ['Multipliser begge sider med $(x+1)$ og løs andregradslikningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5: Konsument- og produsentoverskudd
// ============================================================================

export const CHAPTER_S1_4_5: TextbookChapter = {
  id: 's1-4-5',
  courseId: 's1',
  chapterNumber: '4.5',
  title: 'Konsument- og produsentoverskudd',
  description: 'Lær å beregne konsument- og produsentoverskudd ved hjelp av integraler og arealer mellom grafer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne konsumentoverskudd og produsentoverskudd og tolke dem i en økonomisk sammenheng',
  ],
  content: [
    {
      id: 's1-4-5-intro',
      type: 'text',
      content: `## Konsument- og produsentoverskudd

Ved markedslikevekt betaler alle kunder likevektsprisen. Men noen kunder ville vært villige til å betale mer, og noen produsenter ville solgt for mindre. Denne gevinsten kalles **overskudd**.

- **Konsumentoverskudd (KO):** Forskjellen mellom hva kunden var villig til å betale og hva de faktisk betaler.
- **Produsentoverskudd (PO):** Forskjellen mellom hva produsenten mottar og hva de minimum ville akseptert.`,
    },
    {
      id: 's1-4-5-def-ko',
      type: 'definition',
      title: 'Konsument- og produsentoverskudd',
      content: `Med likevektsmengde $x_0$ og likevektspris $p_0$:

$$\\text{KO} = \\int_0^{x_0} E(x)\\, dx - p_0 \\cdot x_0$$

$$\\text{PO} = p_0 \\cdot x_0 - \\int_0^{x_0} T(x)\\, dx$$

KO er arealet mellom etterspørselskurven og likevektsprisen. PO er arealet mellom likevektsprisen og tilbudskurven.`,
    },
    {
      id: 's1-4-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Lineære funksjoner',
      problem: `Gitt $E(x) = 400 - 2x$ og $T(x) = 100 + x$ med likevekt $(100, 200)$. Beregn KO og PO.`,
      solution: `**Løsning:**

**KO:**
$$\\text{KO} = \\int_0^{100}(400 - 2x)\\,dx - 200 \\cdot 100$$
$$= \\left[400x - x^2\\right]_0^{100} - 20\\,000 = (40\\,000 - 10\\,000) - 20\\,000 = 10\\,000$$

**PO:**
$$\\text{PO} = 200 \\cdot 100 - \\int_0^{100}(100 + x)\\,dx$$
$$= 20\\,000 - \\left[100x + \\frac{x^2}{2}\\right]_0^{100} = 20\\,000 - (10\\,000 + 5\\,000) = 5\\,000$$

KO = 10 000 kr og PO = 5 000 kr.`,
    },
    {
      id: 's1-4-5-tip',
      type: 'text',
      content: `### Tips: Trekantsformel for lineære funksjoner

For lineære tilbuds- og etterspørselsfunksjoner er KO og PO trekanter:

$$\\text{KO} = \\frac{1}{2} \\cdot x_0 \\cdot (E(0) - p_0)$$

$$\\text{PO} = \\frac{1}{2} \\cdot x_0 \\cdot (p_0 - T(0))$$`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-4-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Gitt $E(x) = 300 - 3x$ og $T(x) = 60 + 2x$. Finn likevektspunktet.',
            solution: '$300 - 3x = 60 + 2x \\Rightarrow 5x = 240 \\Rightarrow x_0 = 48$, $p_0 = 60 + 96 = 156$',
          },
          {
            label: 'b',
            task: 'Beregn konsumentoverskuddet.',
            solution: '$\\text{KO} = \\frac{1}{2} \\cdot 48 \\cdot (300 - 156) = \\frac{1}{2} \\cdot 48 \\cdot 144 = 3\\,456$ kr',
          },
        ],
        solution: 'a) $(48, 156)$, b) KO = 3 456 kr',
        hints: ['Bruk trekantsformelen for lineære funksjoner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Med samme funksjoner som i oppgave 1, beregn produsentoverskuddet.',
        solution: '$\\text{PO} = \\frac{1}{2} \\cdot 48 \\cdot (156 - 60) = \\frac{1}{2} \\cdot 48 \\cdot 96 = 2\\,304$ kr',
        hints: ['PO er arealet mellom likevektsprisen og tilbudskurven'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt $E(x) = 200 - 0{,}5x$ og $T(x) = 20 + 0{,}3x$. Beregn totaloverskuddet (KO + PO) ved likevekt.',
        solution: 'Likevekt: $200 - 0{,}5x = 20 + 0{,}3x \\Rightarrow 0{,}8x = 180 \\Rightarrow x_0 = 225$, $p_0 = 87{,}5$. KO $= \\frac{1}{2} \\cdot 225 \\cdot (200 - 87{,}5) = 12\\,656{,}25$. PO $= \\frac{1}{2} \\cdot 225 \\cdot (87{,}5 - 20) = 7\\,593{,}75$. Totalt $= 20\\,250$ kr.',
        hints: ['Finn likevekt først, deretter bruk trekantsformelen for begge'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Gitt $E(x) = 500 - x^2$ (for $x \\geq 0$) og $T(x) = 50 + 2x$. Finn likevektsmengden.',
            solution: '$500 - x^2 = 50 + 2x \\Rightarrow x^2 + 2x - 450 = 0 \\Rightarrow x = \\frac{-2 + \\sqrt{4 + 1800}}{2} = \\frac{-2 + \\sqrt{1804}}{2} \\approx 20{,}2$',
          },
          {
            label: 'b',
            task: 'Beregn KO med integral.',
            solution: '$p_0 \\approx 50 + 2 \\cdot 20{,}2 = 90{,}5$. KO $= \\int_0^{20{,}2}(500 - x^2)\\,dx - 90{,}5 \\cdot 20{,}2 \\approx [500x - \\frac{x^3}{3}]_0^{20{,}2} - 1828 \\approx 7356 - 1828 = 5528$ kr',
          },
        ],
        solution: 'a) $x_0 \\approx 20{,}2$, b) KO $\\approx 5\\,528$ kr',
        hints: ['Bruk abc-formelen for andregradslikningen, deretter integrer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En vare har $E(x) = \\frac{800}{x+2}$ og $T(x) = 5x + 10$. Likevektsmengden er $x_0 = 10$. Beregn KO og PO ved hjelp av integraler.',
        solution: '$p_0 = 5 \\cdot 10 + 10 = 60$. KO $= \\int_0^{10} \\frac{800}{x+2}\\,dx - 60 \\cdot 10 = 800[\\ln(x+2)]_0^{10} - 600 = 800(\\ln 12 - \\ln 2) - 600 = 800 \\ln 6 - 600 \\approx 1432 - 600 = 832$ kr. PO $= 600 - \\int_0^{10}(5x+10)\\,dx = 600 - [\\frac{5x^2}{2} + 10x]_0^{10} = 600 - 350 = 250$ kr.',
        hints: ['Husk at $\\int \\frac{1}{x+a}\\,dx = \\ln|x+a| + C$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.6: Indeksregulering
// ============================================================================

export const CHAPTER_S1_4_6: TextbookChapter = {
  id: 's1-4-6',
  courseId: 's1',
  chapterNumber: '4.6',
  title: 'Indeksregulering',
  description: 'Lær om prisindeks, konsumprisindeks (KPI), kjøpekraft og indeksregulering av beløp.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke indeks til å analysere prisutvikling og kjøpekraft',
  ],
  content: [
    {
      id: 's1-4-6-intro',
      type: 'text',
      content: `## Indeks og prisutvikling

En **indeks** er et forholdstall som viser endring i en størrelse over tid i forhold til et **basisår** (referanseår). Indeksen i basisåret settes til 100.

**Konsumprisindeksen (KPI)** utgis av SSB og måler den gjennomsnittlige prisutviklingen for varer og tjenester i Norge.`,
    },
    {
      id: 's1-4-6-def-indeks',
      type: 'definition',
      title: 'Indeks',
      content: `Indeksen i år $t$ med basisår $0$:

$$I_t = \\frac{\\text{Verdi i år } t}{\\text{Verdi i basisåret}} \\cdot 100$$

**Omregning av beløp** fra år $a$ til år $b$:

$$\\text{Beløp i år } b = \\text{Beløp i år } a \\cdot \\frac{I_b}{I_a}$$`,
    },
    {
      id: 's1-4-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Indeksregulering av lønn',
      problem: `En ansatt hadde 450 000 kr i årslønn i 2018. KPI var 109,8 i 2018 og 119,5 i 2023 (basisår 2015 = 100). Hva tilsvarer lønnen i 2023-kroner?`,
      solution: `**Løsning:**

$$\\text{Lønn i 2023-kr} = 450\\,000 \\cdot \\frac{119{,}5}{109{,}8} \\approx 450\\,000 \\cdot 1{,}0883 \\approx 489\\,740 \\text{ kr}$$

Lønnen tilsvarer ca. 489 740 kr i 2023-kroner.`,
    },
    {
      id: 's1-4-6-def-reallonn',
      type: 'definition',
      title: 'Reallønnsvekst',
      content: `**Reallønnsvekst** viser om lønnen har økt mer enn prisnivået:

$$\\text{Reallønnsvekst} = \\frac{\\text{Ny lønn}}{\\text{Gammel lønn}} \\cdot \\frac{I_{\\text{gammel}}}{I_{\\text{ny}}} - 1$$

Positiv reallønnsvekst betyr økt kjøpekraft.`,
    },
    {
      id: 's1-4-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Reallønnsvekst',
      problem: `Lønnen økte fra 450 000 kr i 2018 til 520 000 kr i 2023. KPI var 109,8 og 119,5. Har kjøpekraften økt?`,
      solution: `**Løsning:**

Nominell lønnsvekst: $\\frac{520\\,000}{450\\,000} = 1{,}1556$, altså 15,6 %.

Prisvekst: $\\frac{119{,}5}{109{,}8} = 1{,}0883$, altså 8,8 %.

Reallønnsvekst: $\\frac{1{,}1556}{1{,}0883} - 1 \\approx 0{,}062 = 6{,}2\\%$.

Ja, kjøpekraften har økt med ca. 6,2 %.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-4-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En vare kostet 85 kr i 2015. I 2023 er KPI = 119,5 (basisår 2015 = 100). Hva bør varen koste i 2023?',
            solution: '$85 \\cdot \\frac{119{,}5}{100} = 85 \\cdot 1{,}195 = 101{,}58$ kr',
          },
          {
            label: 'b',
            task: 'Varen koster faktisk 95 kr i 2023. Har den blitt relativt billigere eller dyrere?',
            solution: 'Indeksregulert pris er 101,58 kr. Faktisk pris er 95 kr. Varen har blitt relativt **billigere**.',
          },
        ],
        solution: 'a) 101,58 kr, b) Relativt billigere',
        hints: ['Bruk formelen: nytt beløp = gammelt beløp $\\cdot \\frac{I_{ny}}{I_{gammel}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'KPI i 2010 var 88,1 og i 2020 var 112,2 (basisår 2015). Hva tilsvarer 350 000 kr fra 2010 i 2020-kroner?',
        solution: '$350\\,000 \\cdot \\frac{112{,}2}{88{,}1} = 350\\,000 \\cdot 1{,}2737 \\approx 445\\,795$ kr',
        hints: ['Del indeksen for det nye året på indeksen for det gamle året'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En husleie var 8 000 kr/mnd i 2017 (KPI = 105,5). I 2023 (KPI = 119,5) indeksreguleres leien. Finn ny husleie.',
            solution: '$8\\,000 \\cdot \\frac{119{,}5}{105{,}5} \\approx 8\\,000 \\cdot 1{,}1327 \\approx 9\\,062$ kr/mnd',
          },
          {
            label: 'b',
            task: 'Husleien ble faktisk satt til 9 500 kr. Hvor stor er den reelle husleieøkningen ut over prisveksten?',
            solution: 'Indeksregulert: 9 062 kr. Faktisk: 9 500 kr. Ekstra økning: $9\\,500 - 9\\,062 = 438$ kr, dvs. $\\frac{438}{9\\,062} \\approx 4{,}8\\%$ ut over prisveksten.',
          },
        ],
        solution: 'a) Ca. 9 062 kr/mnd, b) 438 kr (4,8 %) ut over prisvekst',
        hints: ['Indeksregulering bruker forholdet mellom KPI-verdiene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En lønnsavtale sier at lønnen skal indeksreguleres med KPI pluss 1 prosentpoeng. Lønnen er 480 000 kr i 2022 (KPI = 116,0). KPI i 2023 er 119,5. Hva blir ny lønn?',
        solution: 'KPI-vekst: $\\frac{119{,}5}{116{,}0} - 1 = 0{,}0302 = 3{,}02\\%$. Regulering: $3{,}02\\% + 1\\% = 4{,}02\\%$. Ny lønn: $480\\,000 \\cdot 1{,}0402 \\approx 499\\,296$ kr.',
        hints: ['Beregn prosentvis KPI-vekst først, legg til 1 prosentpoeng'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-4-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en indeks med 2018 som basisår gitt prisene: 2018: 250 kr, 2019: 260 kr, 2020: 275 kr, 2021: 290 kr.',
            solution: '2018: 100, 2019: $\\frac{260}{250} \\cdot 100 = 104{,}0$, 2020: $\\frac{275}{250} \\cdot 100 = 110{,}0$, 2021: $\\frac{290}{250} \\cdot 100 = 116{,}0$',
          },
          {
            label: 'b',
            task: 'Beregn gjennomsnittlig årlig prosentvis prisvekst fra 2018 til 2021.',
            solution: 'Vekstfaktor over 3 år: $\\frac{290}{250} = 1{,}16$. Årlig: $1{,}16^{1/3} - 1 \\approx 0{,}0507 = 5{,}1\\%$',
          },
        ],
        solution: 'a) 100, 104, 110, 116, b) Ca. 5,1 % per år',
        hints: ['Indeks = (verdi/basisverdi) ganger 100. Årlig vekst: bruk n-te rot.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-4-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I 1990 kostet en bolig 600 000 kr. I 2023 koster tilsvarende bolig 4 200 000 kr. KPI i 1990 var 55,3 og i 2023 var 119,5 (basisår 2015). Hvor mye av prisveksten skyldes generell prisvekst, og hvor mye er reell boligprisvekst?',
        solution: 'Indeksregulert 1990-pris: $600\\,000 \\cdot \\frac{119{,}5}{55{,}3} \\approx 1\\,296\\,565$ kr. Generell prisvekst forklarer $1\\,296\\,565 - 600\\,000 = 696\\,565$ kr. Reell boligprisvekst: $4\\,200\\,000 - 1\\,296\\,565 = 2\\,903\\,435$ kr. Altså ca. 81 % av veksten er reell boligprisvekst.',
        hints: ['Beregn hva boligen burde kostet med bare generell prisvekst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Hypergeometrisk fordeling
// ============================================================================

export const CHAPTER_S1_5_4: TextbookChapter = {
  id: 's1-5-4',
  courseId: 's1',
  chapterNumber: '5.4',
  title: 'Hypergeometrisk fordeling',
  description: 'Lær om hypergeometrisk fordeling for trekking uten tilbakelegging fra en populasjon med to kategorier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne sannsynligheter med hypergeometrisk fordeling',
  ],
  content: [
    {
      id: 's1-5-4-intro',
      type: 'text',
      content: `## Hypergeometrisk fordeling

Tenk deg en urne med kuler av to farger. Du trekker et visst antall kuler **uten tilbakelegging**. Hvor mange av en bestemt farge får du? Sannsynligheten for dette beskrives av den **hypergeometriske fordelingen**.

Situasjonen oppstår når vi:
- Har en populasjon med to kategorier (f.eks. rød/blå, defekt/ok, gutt/jente)
- Trekker et utvalg **uten tilbakelegging**
- Er interessert i antall av den ene kategorien`,
    },
    {
      id: 's1-5-4-def',
      type: 'definition',
      title: 'Hypergeometrisk fordeling',
      content: `La $N$ = totalt antall, $M$ = antall med ønsket egenskap, $n$ = antall vi trekker. Da er $X$ = antall med ønsket egenskap i utvalget hypergeometrisk fordelt:

$$P(X = k) = \\frac{\\binom{M}{k} \\cdot \\binom{N-M}{n-k}}{\\binom{N}{n}}$$

der $k = 0, 1, 2, \\ldots, \\min(n, M)$.

**Forventningsverdi:** $E(X) = n \\cdot \\frac{M}{N}$

**Varians:** $\\text{Var}(X) = n \\cdot \\frac{M}{N} \\cdot \\frac{N-M}{N} \\cdot \\frac{N-n}{N-1}$`,
    },
    {
      id: 's1-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Trekking av kuler',
      problem: `En urne har 12 kuler: 5 røde og 7 blå. Du trekker 4 kuler uten tilbakelegging. Finn sannsynligheten for nøyaktig 2 røde.`,
      solution: `**Løsning:**

$N = 12$, $M = 5$ (røde), $n = 4$, $k = 2$.

$$P(X = 2) = \\frac{\\binom{5}{2} \\cdot \\binom{7}{2}}{\\binom{12}{4}} = \\frac{10 \\cdot 21}{495} = \\frac{210}{495} \\approx 0{,}424$$

Sannsynligheten er ca. 42,4 %.`,
    },
    {
      id: 's1-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kvalitetskontroll',
      problem: `Et parti med 20 enheter inneholder 3 defekte. Vi trekker 5 for kontroll. Finn $P(X \\geq 1)$.`,
      solution: `**Løsning:**

Det er enklest å bruke komplementsetningen: $P(X \\geq 1) = 1 - P(X = 0)$.

$$P(X = 0) = \\frac{\\binom{3}{0} \\cdot \\binom{17}{5}}{\\binom{20}{5}} = \\frac{1 \\cdot 6188}{15504} \\approx 0{,}399$$

$$P(X \\geq 1) = 1 - 0{,}399 = 0{,}601$$

Det er ca. 60,1 % sjanse for å oppdage minst en defekt.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En kortstokk har 52 kort. Du trekker 5 kort. Finn sannsynligheten for nøyaktig 2 ess ($M = 4$ ess).',
            solution: '$P(X=2) = \\frac{\\binom{4}{2}\\binom{48}{3}}{\\binom{52}{5}} = \\frac{6 \\cdot 17\\,296}{2\\,598\\,960} = \\frac{103\\,776}{2\\,598\\,960} \\approx 0{,}0399$',
          },
          {
            label: 'b',
            task: 'Finn forventningsverdien $E(X)$.',
            solution: '$E(X) = 5 \\cdot \\frac{4}{52} = \\frac{20}{52} \\approx 0{,}385$',
          },
        ],
        solution: 'a) Ca. 0,040 (4,0 %), b) $E(X) \\approx 0{,}385$',
        hints: ['Bruk formelen med binomialkoeffisienter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En klasse har 18 jenter og 12 gutter. Det trekkes 5 elever tilfeldig til et utvalg. Finn sannsynligheten for nøyaktig 3 jenter.',
        solution: '$P(X=3) = \\frac{\\binom{18}{3}\\binom{12}{2}}{\\binom{30}{5}} = \\frac{816 \\cdot 66}{142\\,506} = \\frac{53\\,856}{142\\,506} \\approx 0{,}378$',
        hints: ['$N=30$, $M=18$, $n=5$, $k=3$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et lotteri har 50 lodd der 8 er gevinst. Du kjøper 6 lodd. Finn $P(X = 0)$.',
            solution: '$P(X=0) = \\frac{\\binom{8}{0}\\binom{42}{6}}{\\binom{50}{6}} = \\frac{1 \\cdot 5\\,245\\,786}{15\\,890\\,700} \\approx 0{,}330$',
          },
          {
            label: 'b',
            task: 'Finn $P(X \\geq 2)$.',
            solution: '$P(X=1) = \\frac{\\binom{8}{1}\\binom{42}{5}}{\\binom{50}{6}} = \\frac{8 \\cdot 850\\,668}{15\\,890\\,700} \\approx 0{,}428$. $P(X \\geq 2) = 1 - 0{,}330 - 0{,}428 = 0{,}242$',
          },
        ],
        solution: 'a) Ca. 0,330, b) Ca. 0,242',
        hints: ['Bruk komplementsetningen: $P(X \\geq 2) = 1 - P(X=0) - P(X=1)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-5-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et lager har 100 produkter der 10 er defekte. Kvalitetskontrollen trekker 8 produkter. Finn forventningsverdi og standardavvik for antall defekte i utvalget.',
        solution: '$E(X) = 8 \\cdot \\frac{10}{100} = 0{,}8$. $\\text{Var}(X) = 8 \\cdot \\frac{10}{100} \\cdot \\frac{90}{100} \\cdot \\frac{92}{99} \\approx 0{,}669$. $\\text{SD}(X) = \\sqrt{0{,}669} \\approx 0{,}818$.',
        hints: ['Bruk formlene for forventningsverdi og varians for hypergeometrisk fordeling'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-5-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp hele sannsynlighetsfordelingen for antall røde kuler ($X$) når vi trekker 3 kuler fra en urne med 4 røde og 6 blå.',
            solution: '$P(X=0) = \\frac{\\binom{4}{0}\\binom{6}{3}}{\\binom{10}{3}} = \\frac{20}{120} = \\frac{1}{6}$. $P(X=1) = \\frac{\\binom{4}{1}\\binom{6}{2}}{\\binom{10}{3}} = \\frac{60}{120} = \\frac{1}{2}$. $P(X=2) = \\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}} = \\frac{36}{120} = \\frac{3}{10}$. $P(X=3) = \\frac{\\binom{4}{3}\\binom{6}{0}}{\\binom{10}{3}} = \\frac{4}{120} = \\frac{1}{30}$.',
          },
          {
            label: 'b',
            task: 'Kontroller at $E(X) = n \\cdot \\frac{M}{N}$ ved å beregne forventningsverdien fra fordelingen.',
            solution: '$E(X) = 0 \\cdot \\frac{1}{6} + 1 \\cdot \\frac{1}{2} + 2 \\cdot \\frac{3}{10} + 3 \\cdot \\frac{1}{30} = 0 + \\frac{1}{2} + \\frac{3}{5} + \\frac{1}{10} = 1{,}2$. Formel: $3 \\cdot \\frac{4}{10} = 1{,}2$',
          },
        ],
        solution: 'a) Se fordeling over, b) $E(X) = 1{,}2$ fra begge metoder',
        hints: ['Husk å sjekke at sannsynlighetene summerer til 1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: Normalfordelingen
// ============================================================================

export const CHAPTER_S1_6_4: TextbookChapter = {
  id: 's1-6-4',
  courseId: 's1',
  chapterNumber: '6.4',
  title: 'Normalfordelingen',
  description: 'Lær om normalfordelingen, standardnormalfordelingen, 68-95-99,7-regelen og bruk av digitale verktøy.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke normalfordelingen som modell og beregne sannsynligheter med digitale verktøy',
  ],
  content: [
    {
      id: 's1-6-4-intro',
      type: 'text',
      content: `## Normalfordelingen

**Normalfordelingen** er den viktigste kontinuerlige sannsynlighetsfordelingen. Mange naturlige fenomener (høyde, vekt, testresultater, målefeil) er tilnærmet normalfordelt.

Kurven er **klokkeformet** og symmetrisk om forventningsverdien $\\mu$. Spredningen bestemmes av standardavviket $\\sigma$.

Vi skriver $X \\sim N(\\mu, \\sigma^2)$ for en normalfordelt variabel.`,
    },
    {
      id: 's1-6-4-def',
      type: 'definition',
      title: 'Normalfordelingen',
      content: `Tetthetsfunksjonen til normalfordelingen:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

Sannsynligheten beregnes som arealet under kurven:

$$P(a < X < b) = \\int_a^b f(x)\\,dx$$

I praksis bruker vi digitale verktøy (GeoGebra, kalkulator) for å beregne disse integralene.`,
    },
    {
      id: 's1-6-4-regel',
      type: 'definition',
      title: '68-95-99,7-regelen',
      content: `For $X \\sim N(\\mu, \\sigma^2)$:

- $P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 0{,}683$ (ca. 68 %)
- $P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 0{,}954$ (ca. 95 %)
- $P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) \\approx 0{,}997$ (ca. 99,7 %)`,
    },
    {
      id: 's1-6-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Høyde',
      problem: `Høyden til voksne menn i Norge er tilnærmet normalfordelt med $\\mu = 180$ cm og $\\sigma = 7$ cm. Finn sannsynligheten for at en tilfeldig mann er mellom 173 og 187 cm.`,
      solution: `**Løsning:**

Intervallet $[173, 187]$ er $[\\mu - \\sigma,\\ \\mu + \\sigma]$.

Ifølge 68-95-99,7-regelen: $P(173 < X < 187) \\approx 0{,}683 = 68{,}3\\%$.`,
    },
    {
      id: 's1-6-4-standardisering',
      type: 'text',
      content: `### Standardisering (z-score)

Vi kan omgjøre enhver normalfordelt variabel til **standardnormalfordelingen** $Z \\sim N(0, 1)$:

$$Z = \\frac{X - \\mu}{\\sigma}$$

$z$-verdien forteller hvor mange standardavvik $X$ er fra gjennomsnittet.`,
    },
    {
      id: 's1-6-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av z-score',
      problem: `Med $\\mu = 180$ og $\\sigma = 7$. Finn $P(X > 190)$ ved standardisering.`,
      solution: `**Løsning:**

$$z = \\frac{190 - 180}{7} = \\frac{10}{7} \\approx 1{,}43$$

$P(X > 190) = P(Z > 1{,}43) \\approx 0{,}0764$ (fra tabell eller kalkulator).

Ca. 7,6 % av mennene er over 190 cm.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vekten av epler fra en gård er normalfordelt med $\\mu = 200$ g og $\\sigma = 30$ g. Bruk 68-95-99,7-regelen til å finne $P(170 < X < 230)$.',
            solution: '$[170, 230] = [\\mu - \\sigma, \\mu + \\sigma]$. Altså $P \\approx 0{,}683 = 68{,}3\\%$.',
          },
          {
            label: 'b',
            task: 'Finn $P(140 < X < 260)$.',
            solution: '$[140, 260] = [\\mu - 2\\sigma, \\mu + 2\\sigma]$. Altså $P \\approx 0{,}954 = 95{,}4\\%$.',
          },
        ],
        solution: 'a) Ca. 68,3 %, b) Ca. 95,4 %',
        hints: ['Sjekk hvor mange standardavvik grensene er fra $\\mu$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn z-scoren for $X = 165$ cm når $\\mu = 180$ og $\\sigma = 7$. Hva forteller denne verdien?',
        solution: '$z = \\frac{165 - 180}{7} = \\frac{-15}{7} \\approx -2{,}14$. Verdien er ca. 2,14 standardavvik **under** gjennomsnittet.',
        hints: ['$z = \\frac{X - \\mu}{\\sigma}$. Negativt fortegn betyr under gjennomsnittet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Resultater på en prøve er normalfordelt med $\\mu = 65$ og $\\sigma = 12$. Finn sannsynligheten for å score over 80.',
            solution: '$z = \\frac{80 - 65}{12} = 1{,}25$. $P(X > 80) = P(Z > 1{,}25) \\approx 0{,}106 = 10{,}6\\%$',
          },
          {
            label: 'b',
            task: 'Finn sannsynligheten for å score mellom 50 og 80.',
            solution: '$z_1 = \\frac{50-65}{12} = -1{,}25$, $z_2 = 1{,}25$. $P(50 < X < 80) = P(-1{,}25 < Z < 1{,}25) \\approx 0{,}789 = 78{,}9\\%$',
          },
        ],
        solution: 'a) Ca. 10,6 %, b) Ca. 78,9 %',
        hints: ['Standardiser med z-score og bruk symmetrien til normalfordelingen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Levetiden til en type lyspære er normalfordelt med $\\mu = 1200$ timer og $\\sigma = 150$ timer. En produsent gir garanti for de første 900 timene. Hvor stor andel av lyspærene vil gå i stykker innen garantitiden?',
        solution: '$z = \\frac{900 - 1200}{150} = -2{,}0$. $P(X < 900) = P(Z < -2{,}0) \\approx 0{,}023 = 2{,}3\\%$. Ca. 2,3 % av pærene vil gå i stykker innen garantitiden.',
        hints: ['Finn $P(X < 900)$ ved standardisering'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vekten av pakker fra en fabrikk er normalfordelt med $\\mu = 500$ g og $\\sigma = 8$ g. Pakker under 485 g kasseres. Finn andelen som kasseres.',
            solution: '$z = \\frac{485-500}{8} = -1{,}875$. $P(X < 485) \\approx 0{,}030 = 3{,}0\\%$',
          },
          {
            label: 'b',
            task: 'Fabrikken ønsker at maks 1 % kasseres. Hvilken $\\mu$ bør de ha (med samme $\\sigma$)?',
            solution: '$P(Z < z) = 0{,}01$ gir $z \\approx -2{,}326$. $\\frac{485 - \\mu}{8} = -2{,}326 \\Rightarrow \\mu = 485 + 8 \\cdot 2{,}326 = 503{,}6$ g',
          },
        ],
        solution: 'a) Ca. 3,0 %, b) $\\mu \\approx 503{,}6$ g',
        hints: ['For b: Bruk invers normalfordeling for å finne z-verdien som gir 1 %'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-6-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'IQ-score er normalfordelt med $\\mu = 100$ og $\\sigma = 15$. Mensa krever IQ over 130 for medlemskap. Hvor stor andel av befolkningen kvalifiserer? Hvor mange i en by med 100 000 innbyggere?',
        solution: '$z = \\frac{130-100}{15} = 2{,}0$. $P(X > 130) = P(Z > 2{,}0) \\approx 0{,}0228 = 2{,}28\\%$. I en by med 100 000: $100\\,000 \\cdot 0{,}0228 \\approx 2\\,280$ personer.',
        hints: ['Standardiser og finn arealet i halen over $z = 2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const S1_KAP4B_CHAPTERS = [
  CHAPTER_S1_4_4,
  CHAPTER_S1_4_5,
  CHAPTER_S1_4_6,
  CHAPTER_S1_5_4,
  CHAPTER_S1_6_4,
];

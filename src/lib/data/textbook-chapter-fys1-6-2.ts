/**
 * Fysikk 1 - Kapittel 6.2: Elektriske kretser
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_6_2: TextbookChapter = {
  id: 'fys1-6-2',
  courseId: 'fys1',
  chapterNumber: '6.2',
  title: 'Elektriske kretser',
  description: 'Lær om elektrisk strøm, spenning, resistans, Ohms lov, og hvordan komponenter kobles i serie og parallell.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare elektrisk strøm og spenning',
    'bruke Ohms lov til beregninger',
    'analysere serie- og parallellkoblinger',
    'anvende Kirchhoffs lover',
  ],
  content: [
    {
      id: 'fys1-6-2-intro',
      type: 'text',
      content: `# Elektriske kretser

En **elektrisk krets** er en lukket bane hvor elektrisk ladning kan strømme. Kretser er grunnlaget for all moderne elektronikk.

## Elektrisk strøm

**Elektrisk strøm** er bevegelse av elektrisk ladning:

$$I = \\frac{Q}{t}$$

hvor:
- $I$ = strøm (ampere, A)
- $Q$ = ladning som passerer (coulomb, C)
- $t$ = tid (sekunder, s)

**Enhet:** 1 ampere (A) = 1 coulomb per sekund (C/s)

**Retning:**
- **Konvensjonell strømretning:** Fra positiv til negativ pol (historisk konvensjon)
- **Elektronbevegelse:** Fra negativ til positiv pol (faktisk bevegelse)

Vi bruker konvensjonell strømretning i kretser.

**Eksempel:** Hvis 10 C ladning passerer et punkt på 2 sekunder:

$$I = \\frac{10}{2} = 5 \\text{ A}$$`,
    },
    {
      id: 'fys1-6-2-def-strom',
      type: 'definition',
      title: 'Elektrisk strøm',
      content: 'Elektrisk strøm er ladning per tidsenhet: $I = \\frac{Q}{t}$. Måles i ampere (A). 1 A = 1 C/s.',
    },
    {
      id: 'fys1-6-2-spenning',
      type: 'text',
      content: `# Spenning

**Spenning** (eller **elektromotorisk kraft**, emf) er "trykket" som driver ladninger gjennom en krets.

**Analogi:** Spenning er som høydeforskjell i et vannrør. Vann strømmer fra høyt til lavt. Elektroner strømmer fra lavt til høyt potensial (negativ til positiv), men konvensjonell strøm går fra høyt til lavt.

**Spenningskilder:**
- **Batteri:** Kjemisk energi → elektrisk energi
- **Generator:** Mekanisk energi → elektrisk energi
- **Solcelle:** Lysenergi → elektrisk energi

**Symboler:**
- Batteri: ─┤├─ (lang strek = positiv pol)
- Spenningskilde: ⊖ ⊕ eller bare ε

**Viktig:** Spenning er alltid **mellom to punkter** (potensialdifferanse).`,
    },
    {
      id: 'fys1-6-2-resistans',
      type: 'text',
      content: `# Resistans

**Resistans** (motstand) er en komponents evne til å "motstå" strøm.

**Analogi:** Resistans er som friksjon i et vannrør. Smale rør har høy motstand.

**Faktorer som påvirker resistans:**

For en leder (f.eks. tråd):

$$R = \\rho \\frac{L}{A}$$

hvor:
- $R$ = resistans (ohm, Ω)
- $\\rho$ = resistivitet (Ω·m) - materialavhengig
- $L$ = lengde (m)
- $A$ = tverrsnitt (m²)

**Betydning:**
- Lang tråd → høy resistans
- Tykk tråd → lav resistans
- Materiale med høy resistivitet → høy resistans

**Typiske resistiviteter (ved 20°C):**
- Sølv: $1.6 \\times 10^{-8}$ Ω·m (best leder)
- Kobber: $1.7 \\times 10^{-8}$ Ω·m
- Aluminium: $2.8 \\times 10^{-8}$ Ω·m
- Jern: $1.0 \\times 10^{-7}$ Ω·m
- Gummi: $\\sim 10^{13}$ Ω·m (isolator)`,
    },
    {
      id: 'fys1-6-2-def-resistans',
      type: 'definition',
      title: 'Resistans',
      content: 'Resistans er motstanden mot elektrisk strøm: $R = \\rho \\frac{L}{A}$. Måles i ohm (Ω).',
    },
    {
      id: 'fys1-6-2-ohm',
      type: 'text',
      content: `# Ohms lov

**Ohms lov** er den viktigste sammenhengen i elektriske kretser:

$$U = RI$$

hvor:
- $U$ = spenning (volt, V)
- $R$ = resistans (ohm, Ω)
- $I$ = strøm (ampere, A)

**Alternative former:**

$$I = \\frac{U}{R}, \\quad R = \\frac{U}{I}$$

**Tolkning:**
- **Høy spenning → høy strøm** (hvis $R$ konstant)
- **Høy resistans → lav strøm** (hvis $U$ konstant)

**Historisk:** Oppdaget av den tyske fysikeren **Georg Ohm** (1789-1854) i 1827.

**Ohmsk leder:** En komponent som følger Ohms lov (lineær $U$-$I$-sammenheng).

**Eksempler:**
- Resistorer (ohmske)
- Ledninger (ohmske)
- Dioder (ikke-ohmske)
- Glødelamper (ikke perfekt ohmske, resistansen øker med temperatur)`,
    },
    {
      id: 'fys1-6-2-def-ohm',
      type: 'definition',
      title: 'Ohms lov',
      content: 'Ohms lov: $U = RI$. Spenning er lik resistans ganger strøm.',
    },
    {
      id: 'fys1-6-2-ex-ohm',
      type: 'example',
      title: 'Eksempel: Ohms lov',
      problem: 'En resistor på 220 Ω er koblet til et 12 V batteri. Hva er strømmen gjennom resistoren?',
      solution: `**Gitt:**
- $R = 220$ Ω
- $U = 12$ V

**Søkt:** $I$

**Løsning:**

Ohms lov:

$$I = \\frac{U}{R} = \\frac{12}{220} = 0.0545 \\text{ A} \\approx 55 \\text{ mA}$$

**Svar:** Strømmen er 55 mA.`,
    },
    {
      id: 'fys1-6-2-serie',
      type: 'text',
      content: `# Seriekobling

**Seriekobling:** Komponenter kobles etter hverandre, slik at samme strøm går gjennom alle.

## Egenskaper ved seriekobling

**1. Samme strøm:**

$$I_{\\text{total}} = I_1 = I_2 = I_3 = \\ldots$$

**2. Spenningene legges sammen:**

$$U_{\\text{total}} = U_1 + U_2 + U_3 + \\ldots$$

**3. Resistansene legges sammen:**

$$R_{\\text{total}} = R_1 + R_2 + R_3 + \\ldots$$

**Eksempel:**

Tre resistorer på 10 Ω, 20 Ω, og 30 Ω i serie:

$$R_{\\text{total}} = 10 + 20 + 30 = 60 \\text{ Ω}$$

**Analogi:** Som å stå i kø. Samme "strøm" av mennesker gjennom hver person.

**Ulempe:** Hvis én komponent svikter (f.eks. lyspære brenner ut), brytes hele kretsen.`,
    },
    {
      id: 'fys1-6-2-parallell',
      type: 'text',
      content: `# Parallellkobling

**Parallellkobling:** Komponenter kobles side om side, slik at samme spenning ligger over alle.

## Egenskaper ved parallellkobling

**1. Samme spenning:**

$$U_{\\text{total}} = U_1 = U_2 = U_3 = \\ldots$$

**2. Strømmene legges sammen:**

$$I_{\\text{total}} = I_1 + I_2 + I_3 + \\ldots$$

**3. Resistanser (invers sammenheng):**

$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots$$

**For to resistorer:**

$$R_{\\text{total}} = \\frac{R_1 R_2}{R_1 + R_2}$$

**Eksempel:**

To resistorer på 6 Ω og 3 Ω i parallell:

$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6}$$

$$R_{\\text{total}} = 2 \\text{ Ω}$$

**Analogi:** Som parallelle veier. Strømmen fordeler seg.

**Fordel:** Hvis én komponent svikter, fungerer de andre fortsatt.

**Viktig:** Total resistans i parallell er alltid **mindre** enn den minste resistansen.`,
    },
    {
      id: 'fys1-6-2-ex-krets',
      type: 'example',
      title: 'Eksempel: Kombinert krets',
      problem: 'To resistorer på $R_1 = 30$ Ω og $R_2 = 20$ Ω er koblet i parallell. Denne kombinasjonen er så koblet i serie med en tredje resistor $R_3 = 10$ Ω. Hele kretsen er koblet til et 24 V batteri. Beregn: a) total resistans, b) total strøm, c) spenning over $R_3$, d) strøm gjennom $R_1$.',
      solution: `**Gitt:**
- $R_1 = 30$ Ω, $R_2 = 20$ Ω (parallell)
- $R_3 = 10$ Ω (serie med parallellkombinasjon)
- $U = 24$ V

**a) Total resistans:**

Parallellkombinasjon av $R_1$ og $R_2$:

$$\\frac{1}{R_{12}} = \\frac{1}{30} + \\frac{1}{20} = \\frac{2}{60} + \\frac{3}{60} = \\frac{5}{60}$$

$$R_{12} = 12 \\text{ Ω}$$

Eller: $R_{12} = \\frac{30 \\cdot 20}{30 + 20} = \\frac{600}{50} = 12$ Ω

Total resistans (serie):

$$R_{\\text{total}} = R_{12} + R_3 = 12 + 10 = 22 \\text{ Ω}$$

**b) Total strøm:**

$$I_{\\text{total}} = \\frac{U}{R_{\\text{total}}} = \\frac{24}{22} = 1.09 \\text{ A}$$

**c) Spenning over $R_3$:**

$$U_3 = I_{\\text{total}} \\cdot R_3 = 1.09 \\cdot 10 = 10.9 \\text{ V}$$

**d) Spenning over parallellkombinasjon:**

$$U_{12} = U - U_3 = 24 - 10.9 = 13.1 \\text{ V}$$

Strøm gjennom $R_1$:

$$I_1 = \\frac{U_{12}}{R_1} = \\frac{13.1}{30} = 0.44 \\text{ A}$$

**Svar:**
a) $R_{\\text{total}} = 22$ Ω
b) $I_{\\text{total}} = 1.09$ A
c) $U_3 = 10.9$ V
d) $I_1 = 0.44$ A`,
    },
    {
      id: 'fys1-6-2-kirchhoff',
      type: 'text',
      content: `# Kirchhoffs lover

**Gustav Kirchhoff** (1824-1887) formulerte to fundamentale lover for elektriske kretser.

## Kirchhoffs strømlov (1. lov)

**Sum av strømmer inn i et knutepunkt = sum av strømmer ut:**

$$\\sum I_{\\text{inn}} = \\sum I_{\\text{ut}}$$

**Alternativ formulering:** Sum av alle strømmer i et knutepunkt er null:

$$\\sum I = 0$$

(hvor inn-strømmer er positive, ut-strømmer er negative)

**Tolkning:** Ladning kan ikke akkumuleres i et knutepunkt.

**Eksempel:** Tre ledninger møtes i et punkt. $I_1 = 2$ A inn, $I_2 = 3$ A inn, $I_3$ ut:

$$I_1 + I_2 = I_3$$
$$2 + 3 = 5 \\text{ A}$$

$I_3 = 5$ A ut.

## Kirchhoffs spenningslov (2. lov)

**Sum av spenninger i en lukket sløyfe er null:**

$$\\sum U = 0$$

**Konvensjon:**
- Spenning over batteri (i strømretning): positiv
- Spenning over resistor (i strømretning): negativ

**Tolkning:** Energibevarelse. Energien fra batteriet brukes opp i resistorer.

**Eksempel:** Krets med batteri 12 V og to resistorer med spenninger 5 V og 7 V:

$$12 - 5 - 7 = 0 \\quad ✓$$`,
    },
    {
      id: 'fys1-6-2-def-kirchhoff',
      type: 'definition',
      title: 'Kirchhoffs lover',
      content: '**Strømlov:** $\\sum I_{\\text{inn}} = \\sum I_{\\text{ut}}$ (i knutepunkt). **Spenningslov:** $\\sum U = 0$ (i lukket sløyfe).',
    },
    {
      id: 'fys1-6-2-ex-kirchhoff',
      type: 'example',
      title: 'Eksempel: Kirchhoffs lover',
      problem: 'En krets har et 18 V batteri og tre resistorer i serie: $R_1 = 10$ Ω, $R_2 = 20$ Ω, $R_3 = 15$ Ω. Bruk Kirchhoffs spenningslov til å verifisere beregningene.',
      solution: `**Gitt:**
- $U_{\\text{batteri}} = 18$ V
- $R_1 = 10$ Ω, $R_2 = 20$ Ω, $R_3 = 15$ Ω (serie)

**Beregninger:**

Total resistans:

$$R_{\\text{total}} = 10 + 20 + 15 = 45 \\text{ Ω}$$

Strøm:

$$I = \\frac{18}{45} = 0.4 \\text{ A}$$

Spenninger:

$$U_1 = IR_1 = 0.4 \\cdot 10 = 4 \\text{ V}$$
$$U_2 = IR_2 = 0.4 \\cdot 20 = 8 \\text{ V}$$
$$U_3 = IR_3 = 0.4 \\cdot 15 = 6 \\text{ V}$$

**Kirchhoffs spenningslov:**

Går rundt sløyfen (med klokken):

$$U_{\\text{batteri}} - U_1 - U_2 - U_3 = 0$$
$$18 - 4 - 8 - 6 = 0$$
$$0 = 0 \\quad ✓$$

**Svar:** Kirchhoffs spenningslov bekreftes.`,
    },
    {
      id: 'fys1-6-2-note-historisk',
      type: 'note',
      title: 'Historisk: Thomas Edison vs. Nikola Tesla',
      content: `På slutten av 1800-tallet raste "**strømkrigen**" (War of Currents) mellom **Thomas Edison** (DC - likestrøm) og **Nikola Tesla** (AC - vekselstrøm).

**Edison:** Forkjemper for likestrøm (DC). Trygt, men krever kraftstasjon hver 1-2 km.

**Tesla/Westinghouse:** Forkjemper for vekselstrøm (AC). Kan transformeres til høy spenning for effektiv overføring over lange avstander.

**Resultat:** Tesla vant. Vekselstrøm brukes i kraftnettet i dag. Men DC er på vei tilbake for lange undersjøiske kabler og elektronikk!`,
    },
  ],
  exercises: [
    {
      id: 'fys1-6-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En strøm på 0.50 A går gjennom en ledning. Hvor mye ladning passerer et punkt på 10 sekunder?',
      solution: `**Gitt:**
- $I = 0.50$ A
- $t = 10$ s

**Søkt:** $Q$

**Løsning:**

$$Q = It = 0.50 \\cdot 10 = 5.0 \\text{ C}$$

**Svar:** 5.0 coulomb.`,
      hints: ['Bruk $I = \\frac{Q}{t}$', 'Løs for $Q$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En resistor på 100 Ω har en strøm på 0.20 A gjennom seg. Hva er spenningen over resistoren?',
      solution: `**Gitt:**
- $R = 100$ Ω
- $I = 0.20$ A

**Søkt:** $U$

**Løsning:**

$$U = RI = 100 \\cdot 0.20 = 20 \\text{ V}$$

**Svar:** 20 V.`,
      hints: ['Bruk Ohms lov: $U = RI$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En kobbertråd har lengde 5.0 m og tverrsnitt $2.0 \\times 10^{-6}$ m². Hva er resistansen? (Resistivitet for kobber: $\\rho = 1.7 \\times 10^{-8}$ Ω·m)',
      solution: `**Gitt:**
- $L = 5.0$ m
- $A = 2.0 \\times 10^{-6}$ m²
- $\\rho = 1.7 \\times 10^{-8}$ Ω·m

**Søkt:** $R$

**Løsning:**

$$R = \\rho \\frac{L}{A} = 1.7 \\times 10^{-8} \\cdot \\frac{5.0}{2.0 \\times 10^{-6}}$$

$$R = 1.7 \\times 10^{-8} \\cdot 2.5 \\times 10^6 = 4.25 \\times 10^{-2} \\text{ Ω}$$

$$R = 0.043 \\text{ Ω} = 43 \\text{ mΩ}$$

**Svar:** 43 mΩ.`,
      hints: ['Bruk $R = \\rho \\frac{L}{A}$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Tre resistorer på 10 Ω, 20 Ω og 30 Ω er koblet i serie. Hva er total resistans?',
      solution: `**Gitt:**
- $R_1 = 10$ Ω, $R_2 = 20$ Ω, $R_3 = 30$ Ω (serie)

**Søkt:** $R_{\\text{total}}$

**Løsning:**

$$R_{\\text{total}} = R_1 + R_2 + R_3 = 10 + 20 + 30 = 60 \\text{ Ω}$$

**Svar:** 60 Ω.`,
      hints: ['Serie: $R_{\\text{total}} = R_1 + R_2 + R_3$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'To resistorer på 12 Ω og 6 Ω er koblet i parallell. Hva er total resistans?',
      solution: `**Gitt:**
- $R_1 = 12$ Ω, $R_2 = 6$ Ω (parallell)

**Søkt:** $R_{\\text{total}}$

**Løsning:**

Metode 1 (invers):

$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{12} + \\frac{1}{6} = \\frac{1}{12} + \\frac{2}{12} = \\frac{3}{12}$$

$$R_{\\text{total}} = 4 \\text{ Ω}$$

Metode 2 (produktformel):

$$R_{\\text{total}} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{12 \\cdot 6}{12 + 6} = \\frac{72}{18} = 4 \\text{ Ω}$$

**Svar:** 4 Ω.`,
      hints: ['Parallell: $\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2}$', 'Eller: $R = \\frac{R_1 R_2}{R_1 + R_2}$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En krets har et 9.0 V batteri og en resistor på 18 Ω. a) Hva er strømmen? b) Hvor mye ladning passerer gjennom batteriet på 1 minutt?',
      solution: `**Gitt:**
- $U = 9.0$ V
- $R = 18$ Ω
- $t = 60$ s

**a) Strøm:**

$$I = \\frac{U}{R} = \\frac{9.0}{18} = 0.50 \\text{ A}$$

**b) Ladning:**

$$Q = It = 0.50 \\cdot 60 = 30 \\text{ C}$$

**Svar:**
a) 0.50 A
b) 30 C`,
      hints: ['Bruk Ohms lov', 'Bruk $Q = It$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'To resistorer på $R_1 = 40$ Ω og $R_2 = 60$ Ω er koblet i parallell til et 12 V batteri. Beregn: a) total resistans, b) total strøm, c) strøm gjennom hver resistor.',
      solution: `**Gitt:**
- $R_1 = 40$ Ω, $R_2 = 60$ Ω (parallell)
- $U = 12$ V

**a) Total resistans:**

$$R_{\\text{total}} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{40 \\cdot 60}{40 + 60} = \\frac{2400}{100} = 24 \\text{ Ω}$$

**b) Total strøm:**

$$I_{\\text{total}} = \\frac{U}{R_{\\text{total}}} = \\frac{12}{24} = 0.50 \\text{ A}$$

**c) Strømmer:**

I parallell har begge samme spenning (12 V):

$$I_1 = \\frac{U}{R_1} = \\frac{12}{40} = 0.30 \\text{ A}$$

$$I_2 = \\frac{U}{R_2} = \\frac{12}{60} = 0.20 \\text{ A}$$

**Sjekk:** $I_1 + I_2 = 0.30 + 0.20 = 0.50$ A ✓

**Svar:**
a) 24 Ω
b) 0.50 A
c) $I_1 = 0.30$ A, $I_2 = 0.20$ A`,
      hints: ['Parallell: samme spenning', 'Kirchhoffs strømlov: $I_{\\text{total}} = I_1 + I_2$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Tre resistorer på 5.0 Ω, 10 Ω og 15 Ω er koblet i serie til et 15 V batteri. Beregn spenningen over hver resistor.',
      solution: `**Gitt:**
- $R_1 = 5.0$ Ω, $R_2 = 10$ Ω, $R_3 = 15$ Ω (serie)
- $U = 15$ V

**Løsning:**

Total resistans:

$$R_{\\text{total}} = 5.0 + 10 + 15 = 30 \\text{ Ω}$$

Strøm (samme i alle):

$$I = \\frac{U}{R_{\\text{total}}} = \\frac{15}{30} = 0.50 \\text{ A}$$

Spenninger:

$$U_1 = IR_1 = 0.50 \\cdot 5.0 = 2.5 \\text{ V}$$
$$U_2 = IR_2 = 0.50 \\cdot 10 = 5.0 \\text{ V}$$
$$U_3 = IR_3 = 0.50 \\cdot 15 = 7.5 \\text{ V}$$

**Sjekk:** $U_1 + U_2 + U_3 = 2.5 + 5.0 + 7.5 = 15$ V ✓

**Svar:** $U_1 = 2.5$ V, $U_2 = 5.0$ V, $U_3 = 7.5$ V`,
      hints: ['Serie: samme strøm', 'Kirchhoffs spenningslov'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'I et knutepunkt møtes fire ledninger. Strømmene er: $I_1 = 2.0$ A (inn), $I_2 = 1.5$ A (inn), $I_3 = 0.8$ A (ut), $I_4$ (ut). Bruk Kirchhoffs strømlov til å finne $I_4$.',
      solution: `**Gitt:**
- $I_1 = 2.0$ A (inn)
- $I_2 = 1.5$ A (inn)
- $I_3 = 0.8$ A (ut)
- $I_4$ (ut)

**Kirchhoffs strømlov:**

$$I_{\\text{inn}} = I_{\\text{ut}}$$

$$I_1 + I_2 = I_3 + I_4$$

$$2.0 + 1.5 = 0.8 + I_4$$

$$3.5 = 0.8 + I_4$$

$$I_4 = 3.5 - 0.8 = 2.7 \\text{ A}$$

**Svar:** $I_4 = 2.7$ A (ut).`,
      hints: ['Kirchhoffs strømlov: inn = ut'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En krets har to parallelle grener koblet til et 12 V batteri. Første gren har $R_1 = 6.0$ Ω, andre gren har to resistorer i serie: $R_2 = 4.0$ Ω og $R_3 = 8.0$ Ω. Beregn: a) total resistans, b) total strøm, c) strøm i hver gren.',
      solution: `**Gitt:**
- Batteri: 12 V
- Gren 1: $R_1 = 6.0$ Ω
- Gren 2: $R_2 = 4.0$ Ω og $R_3 = 8.0$ Ω (serie)

**Løsning:**

**Gren 2:** Serie-resistans:

$$R_{23} = R_2 + R_3 = 4.0 + 8.0 = 12 \\text{ Ω}$$

**a) Total resistans (parallell):**

$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_{23}} = \\frac{1}{6.0} + \\frac{1}{12}$$

$$\\frac{1}{R_{\\text{total}}} = \\frac{2}{12} + \\frac{1}{12} = \\frac{3}{12}$$

$$R_{\\text{total}} = 4.0 \\text{ Ω}$$

**b) Total strøm:**

$$I_{\\text{total}} = \\frac{U}{R_{\\text{total}}} = \\frac{12}{4.0} = 3.0 \\text{ A}$$

**c) Strømmer i hver gren:**

Begge grener har samme spenning (12 V):

$$I_1 = \\frac{U}{R_1} = \\frac{12}{6.0} = 2.0 \\text{ A}$$

$$I_{23} = \\frac{U}{R_{23}} = \\frac{12}{12} = 1.0 \\text{ A}$$

**Sjekk:** $I_1 + I_{23} = 2.0 + 1.0 = 3.0$ A ✓

**Svar:**
a) $R_{\\text{total}} = 4.0$ Ω
b) $I_{\\text{total}} = 3.0$ A
c) $I_1 = 2.0$ A, $I_{23} = 1.0$ A`,
      hints: ['Finn resistans i hver gren først', 'Kombiner som parallell', 'Samme spenning i parallell'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En leder har resistans 50 Ω ved 20°C. Når temperaturen øker til 100°C, blir resistansen 58 Ω. Hva er temperaturkoeffisienten $\\alpha$? (Bruk $R_T = R_0(1 + \\alpha \\Delta T)$)',
      solution: `**Gitt:**
- $R_0 = 50$ Ω (ved 20°C)
- $R_T = 58$ Ω (ved 100°C)
- $\\Delta T = 100 - 20 = 80$ K

**Søkt:** $\\alpha$

**Løsning:**

$$R_T = R_0(1 + \\alpha \\Delta T)$$

$$58 = 50(1 + \\alpha \\cdot 80)$$

$$\\frac{58}{50} = 1 + 80\\alpha$$

$$1.16 = 1 + 80\\alpha$$

$$0.16 = 80\\alpha$$

$$\\alpha = \\frac{0.16}{80} = 0.002 \\text{ K}^{-1} = 2.0 \\times 10^{-3} \\text{ K}^{-1}$$

**Svar:** $\\alpha = 2.0 \\times 10^{-3}$ K⁻¹`,
      hints: ['Bruk $R_T = R_0(1 + \\alpha \\Delta T)$', 'Løs for $\\alpha$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-2-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En strøm på 5.0 A går gjennom en kobbertråd med tverrsnitt 1.0 mm². a) Hva er strømtettheten (strøm per arealenhet)? b) Hva er driftshastigheten til elektronene? (Antall frie elektroner per volum i kobber: $n = 8.5 \\times 10^{28}$ m⁻³)',
      solution: `**Gitt:**
- $I = 5.0$ A
- $A = 1.0$ mm² $= 1.0 \\times 10^{-6}$ m²
- $n = 8.5 \\times 10^{28}$ m⁻³
- $e = 1.602 \\times 10^{-19}$ C

**a) Strømtetthet:**

$$J = \\frac{I}{A} = \\frac{5.0}{1.0 \\times 10^{-6}} = 5.0 \\times 10^6 \\text{ A/m}^2$$

**b) Driftshastighet:**

Strøm kan skrives som:

$$I = nAev_d$$

hvor $v_d$ = driftshastighet.

$$v_d = \\frac{I}{nAe} = \\frac{5.0}{8.5 \\times 10^{28} \\cdot 1.0 \\times 10^{-6} \\cdot 1.602 \\times 10^{-19}}$$

$$v_d = \\frac{5.0}{1.36 \\times 10^4} = 3.7 \\times 10^{-4} \\text{ m/s}$$

$$v_d = 0.37 \\text{ mm/s}$$

**Svar:**
a) $J = 5.0$ MA/m²
b) $v_d = 0.37$ mm/s (veldig langsom!)`,
      hints: ['Strømtetthet: $J = \\frac{I}{A}$', 'Bruk $I = nAev_d$'],
      allowsUpload: true,
    },
  ],
};

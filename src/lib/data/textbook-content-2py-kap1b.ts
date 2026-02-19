/**
 * Tekstbok kapitler for 2P-Y (Matematikk for yrkesfag VG2)
 * Utvidelse: Nye kapitler i seksjon 1-5
 * 1.4 Bedriftsøkonomi grunnlag
 * 2.4 Eksponentielle sammenhenger
 * 3.4 Målestokk og teknisk tegning
 * 4.3 Frekvenstabeller og klassifisering
 * 5.3 Kombinatorikk i praksis
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.4: BEDRIFTSØKONOMI GRUNNLAG
// ============================================================================

export const CHAPTER_2PY_1_4: TextbookChapter = {
  id: '2py-1-4',
  courseId: '2py',
  chapterNumber: '1.4',
  title: 'Bedriftsøkonomi grunnlag',
  description: 'Lær å sette opp enkle inntekts- og kostnadsoppstillinger, forstå resultatregnskap og holde orden på økonomien i en liten bedrift.',
  estimatedMinutes: 55,
  competenceGoals: [
    'sette opp enkle inntekts- og kostnadsoppstillinger',
    'beregne resultat for en liten bedrift',
    'skille mellom faste og variable kostnader',
  ],
  content: [
    {
      id: '2py-1-4-intro',
      type: 'text',
      content: `## Økonomi i en liten bedrift

Enten du driver en frisørsalong, et bilverksted, en snekkervirksomhet eller en kafe, trenger du oversikt over pengene som kommer inn og går ut.

**Inntekter** er pengene du tjener ved å selge varer eller tjenester. **Kostnader** er pengene du bruker for å drive bedriften. Differansen mellom inntekter og kostnader kalles **resultat**.

$$\\text{Resultat} = \\text{Inntekter} - \\text{Kostnader}$$

Hvis resultatet er positivt, har bedriften **overskudd** (fortjeneste). Hvis det er negativt, har bedriften **underskudd** (tap).`,
    },
    {
      id: '2py-1-4-def-1',
      type: 'definition',
      title: 'Faste og variable kostnader',
      content: `**Faste kostnader** er kostnader som er de samme uansett hvor mye du produserer eller selger. Eksempler: husleie, forsikring, lån, abonnementer.

**Variable kostnader** er kostnader som endrer seg med aktiviteten. Eksempler: råvarer, materialer, strøm til produksjon, emballasje.

**Totale kostnader** $= $ faste kostnader $+$ variable kostnader.`,
    },
    {
      id: '2py-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Kostnadsoppstilling for et bilverksted',
      problem: `Et bilverksted har disse månedskostnadene:
- Husleie: 18 000 kr
- Forsikring: 3 500 kr
- Strøm (fast): 2 200 kr
- Deler og materialer: 45 000 kr
- Olje og væsker: 8 500 kr

Sorter i faste og variable kostnader, og finn totale kostnader.`,
      solution: `**Løsning:**

**Faste kostnader:**
| Post | Beløp |
|------|------:|
| Husleie | 18 000 kr |
| Forsikring | 3 500 kr |
| Strøm (fast) | 2 200 kr |
| **Sum faste** | **23 700 kr** |

**Variable kostnader:**
| Post | Beløp |
|------|------:|
| Deler og materialer | 45 000 kr |
| Olje og væsker | 8 500 kr |
| **Sum variable** | **53 500 kr** |

**Totale kostnader:** $23\\,700 + 53\\,500 = 77\\,200$ kr`,
    },
    {
      id: '2py-1-4-text-2',
      type: 'text',
      content: `## Enkelt resultatregnskap

Et **resultatregnskap** viser om bedriften har gått med overskudd eller underskudd i en periode. For en liten bedrift kan det se slik ut:

| Post | Beløp |
|------|------:|
| Salgsinntekter | + |
| $-$ Varekostnad | $-$ |
| $=$ **Bruttofortjeneste** | |
| $-$ Lønnskostnader | $-$ |
| $-$ Andre driftskostnader | $-$ |
| $=$ **Driftsresultat** | |

**Bruttofortjeneste** viser hva du sitter igjen med etter at varene er betalt. **Driftsresultat** viser hva du sitter igjen med etter alle driftskostnader.`,
    },
    {
      id: '2py-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Resultatregnskap for en kafe',
      problem: `En kafe hadde i januar:
- Salgsinntekter: 185 000 kr
- Varekostnad (mat og drikke): 62 000 kr
- Lønn til ansatte: 78 000 kr
- Husleie: 22 000 kr
- Strøm og vann: 4 500 kr
- Diverse: 3 200 kr

Sett opp resultatregnskapet.`,
      solution: `**Løsning:**

| Post | Beløp |
|------|------:|
| Salgsinntekter | 185 000 kr |
| $-$ Varekostnad | 62 000 kr |
| $=$ **Bruttofortjeneste** | **123 000 kr** |
| $-$ Lønn | 78 000 kr |
| $-$ Husleie | 22 000 kr |
| $-$ Strøm og vann | 4 500 kr |
| $-$ Diverse | 3 200 kr |
| $=$ **Driftsresultat** | **15 300 kr** |

Kafeen hadde et driftsresultat (overskudd) på **15 300 kr** i januar.`,
    },
    {
      id: '2py-1-4-tip-1',
      type: 'tip',
      title: 'Fortjenestemargin',
      content: `**Fortjenestemargin** viser hvor stor andel av inntektene som er overskudd:

$$\\text{Fortjenestemargin} = \\frac{\\text{Driftsresultat}}{\\text{Salgsinntekter}} \\cdot 100\\,\\%$$

For kafeen: $\\frac{15\\,300}{185\\,000} \\cdot 100\\,\\% \\approx 8{,}3\\,\\%$

En tommelfingerregel er at en sunn liten bedrift bør ha en fortjenestemargin på minst 5-10 %.`,
    },
    {
      id: '2py-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-1-4-ex-1',
        number: '1.13',
        type: 'classic',
        difficulty: 'lett',
        task: `En frisørsalong har disse månedskostnadene:
- Husleie: 14 000 kr
- Forsikring: 1 800 kr
- Sjampo og produkter: 6 200 kr
- Hårfarger og kjemikalier: 4 800 kr

a) Sorter kostnadene i faste og variable kostnader.
b) Finn totale faste kostnader.
c) Finn totale variable kostnader.
d) Finn totale kostnader for måneden.`,
        subTasks: [
          { label: 'a', task: 'Sorter kostnadene', solution: 'Faste: husleie (14 000 kr), forsikring (1 800 kr). Variable: sjampo og produkter (6 200 kr), hårfarger og kjemikalier (4 800 kr).' },
          { label: 'b', task: 'Totale faste kostnader', solution: '$14\\,000 + 1\\,800 = 15\\,800$ kr', answer: 15800 },
          { label: 'c', task: 'Totale variable kostnader', solution: '$6\\,200 + 4\\,800 = 11\\,000$ kr', answer: 11000 },
          { label: 'd', task: 'Totale kostnader', solution: '$15\\,800 + 11\\,000 = 26\\,800$ kr', answer: 26800 },
        ],
        hints: ['Faste kostnader er de som ikke endrer seg med antall kunder', 'Legg sammen alle kostnadene i hver kategori'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-1-4-ex-2',
        number: '1.14',
        type: 'classic',
        difficulty: 'lett',
        task: `En pizzarestaurant hadde i februar:
- Salgsinntekter: 210 000 kr
- Varekostnad (ingredienser): 68 000 kr
- Lønn: 82 000 kr
- Husleie: 25 000 kr
- Strøm: 6 500 kr
- Diverse kostnader: 4 200 kr

a) Beregn bruttofortjenesten.
b) Finn sum driftskostnader (lønn, husleie, strøm, diverse).
c) Beregn driftsresultatet.
d) Gikk restauranten med overskudd eller underskudd?`,
        subTasks: [
          { label: 'a', task: 'Bruttofortjeneste', solution: '$210\\,000 - 68\\,000 = 142\\,000$ kr', answer: 142000 },
          { label: 'b', task: 'Sum driftskostnader', solution: '$82\\,000 + 25\\,000 + 6\\,500 + 4\\,200 = 117\\,700$ kr', answer: 117700 },
          { label: 'c', task: 'Driftsresultat', solution: '$142\\,000 - 117\\,700 = 24\\,300$ kr', answer: 24300 },
          { label: 'd', task: 'Overskudd eller underskudd?', solution: 'Driftsresultatet er positivt (24 300 kr), så restauranten gikk med **overskudd**.' },
        ],
        hints: ['Bruttofortjeneste = inntekter minus varekostnad', 'Driftsresultat = bruttofortjeneste minus alle andre driftskostnader'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-1-4-ex-3',
        number: '1.15',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektrikerbedrift har faste kostnader på 35 000 kr per måned. Variable kostnader er i gjennomsnitt 280 kr per oppdrag. Bedriften tar 950 kr per oppdrag.

a) Skriv et uttrykk for totale kostnader $K$ ved $x$ oppdrag per måned.
b) Skriv et uttrykk for inntektene $I$ ved $x$ oppdrag per måned.
c) Hvor mange oppdrag trengs for at inntektene dekker kostnadene (nullpunkt)?
d) Hva blir resultatet hvis bedriften har 60 oppdrag i en måned?`,
        subTasks: [
          { label: 'a', task: 'Uttrykk for totale kostnader', solution: '$K = 35\\,000 + 280x$' },
          { label: 'b', task: 'Uttrykk for inntekter', solution: '$I = 950x$' },
          { label: 'c', task: 'Nullpunkt (break-even)', solution: '$950x = 35\\,000 + 280x$, $670x = 35\\,000$, $x = \\frac{35\\,000}{670} \\approx 52{,}2$. Bedriften trenger minst **53 oppdrag** for å gå i pluss.', answer: 53 },
          { label: 'd', task: 'Resultat ved 60 oppdrag', solution: '$I = 950 \\cdot 60 = 57\\,000$ kr. $K = 35\\,000 + 280 \\cdot 60 = 51\\,800$ kr. Resultat $= 57\\,000 - 51\\,800 = 5\\,200$ kr overskudd.', answer: 5200 },
        ],
        hints: ['Totale kostnader = faste + variable per oppdrag ganger antall', 'Sett inntekter lik kostnader for å finne nullpunktet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-1-4-ex-4',
        number: '1.16',
        type: 'classic',
        difficulty: 'medium',
        task: `To måneder for en snekkervirksomhet:

**Mars:** Inntekter 320 000 kr, varekostnad 95 000 kr, lønn 145 000 kr, husleie 18 000 kr, diverse 12 000 kr.
**April:** Inntekter 280 000 kr, varekostnad 82 000 kr, lønn 145 000 kr, husleie 18 000 kr, diverse 9 500 kr.

a) Sett opp resultatregnskap for mars og finn driftsresultatet.
b) Sett opp resultatregnskap for april og finn driftsresultatet.
c) Beregn fortjenestemarginen for begge måneder.
d) Hvilken måned gikk best, og hvorfor?`,
        subTasks: [
          { label: 'a', task: 'Resultatregnskap mars', solution: 'Brutto: $320\\,000 - 95\\,000 = 225\\,000$ kr. Driftskostnader: $145\\,000 + 18\\,000 + 12\\,000 = 175\\,000$ kr. Driftsresultat: $225\\,000 - 175\\,000 = 50\\,000$ kr.', answer: 50000 },
          { label: 'b', task: 'Resultatregnskap april', solution: 'Brutto: $280\\,000 - 82\\,000 = 198\\,000$ kr. Driftskostnader: $145\\,000 + 18\\,000 + 9\\,500 = 172\\,500$ kr. Driftsresultat: $198\\,000 - 172\\,500 = 25\\,500$ kr.', answer: 25500 },
          { label: 'c', task: 'Fortjenestemargin begge måneder', solution: 'Mars: $\\frac{50\\,000}{320\\,000} \\cdot 100\\,\\% = 15{,}6\\,\\%$. April: $\\frac{25\\,500}{280\\,000} \\cdot 100\\,\\% \\approx 9{,}1\\,\\%$.' },
          { label: 'd', task: 'Hvilken måned gikk best?', solution: 'Mars gikk best med 50 000 kr i overskudd og 15,6 % margin, mot 25 500 kr og 9,1 % i april. Høyere inntekter og lavere andel kostnader ga bedre resultat.' },
        ],
        hints: ['Sett opp tabeller med inntekter minus kostnader', 'Fortjenestemargin = driftsresultat delt på inntekter ganger 100 %'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: EKSPONENTIELLE SAMMENHENGER
// ============================================================================

export const CHAPTER_2PY_2_4: TextbookChapter = {
  id: '2py-2-4',
  courseId: '2py',
  chapterNumber: '2.4',
  title: 'Eksponentielle sammenhenger',
  description: 'Lær om eksponentiell vekst og nedgang, vekstfaktor, halveringstid og fordoblingstid. Bruk dette til praktiske beregninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå eksponentiell vekst og nedgang',
    'beregne med vekstfaktor',
    'finne halveringstid og fordoblingstid',
  ],
  content: [
    {
      id: '2py-2-4-intro',
      type: 'text',
      content: `## Eksponentiell vekst og nedgang

Noen størrelser vokser eller minker med en fast **prosentandel** i hver periode. Da sier vi at utviklingen er **eksponentiell**.

Eksempler fra yrkeslivet:
- Verditap på en varebil (f.eks. 15 % per år)
- Bakterievekst i matvarer
- Prisstigning over tid
- Nedbrytning av medisiner i kroppen

Forskjellen fra lineær vekst er at endringen ikke er et fast **tall**, men en fast **prosent**.`,
    },
    {
      id: '2py-2-4-def-1',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `Når en størrelse endrer seg med en fast prosent, bruker vi en **vekstfaktor**:

- **Økning** på $p\\,\\%$: vekstfaktor $= 1 + \\frac{p}{100}$
- **Nedgang** på $p\\,\\%$: vekstfaktor $= 1 - \\frac{p}{100}$

Eksempel: 8 % økning gir vekstfaktor $1{,}08$. 15 % nedgang gir vekstfaktor $0{,}85$.

**Formelen** for eksponentiell utvikling:
$$N = N_0 \\cdot a^x$$

der $N_0$ er startverdien, $a$ er vekstfaktoren og $x$ er antall perioder.`,
    },
    {
      id: '2py-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Verditap på en varebil',
      problem: `En håndverker kjøper en varebil til 420 000 kr. Bilen mister 18 % av verdien hvert år. Hva er bilen verdt etter 5 år?`,
      solution: `**Løsning:**

Startverdi: $N_0 = 420\\,000$ kr
Nedgang: 18 %, vekstfaktor $a = 1 - 0{,}18 = 0{,}82$
Antall år: $x = 5$

$$N = 420\\,000 \\cdot 0{,}82^5$$
$$N = 420\\,000 \\cdot 0{,}3707$$
$$N \\approx 155\\,700 \\text{ kr}$$

Etter 5 år er bilen verdt ca. **155 700 kr**.

Bilen har tapt $420\\,000 - 155\\,700 = 264\\,300$ kr i verdi.`,
    },
    {
      id: '2py-2-4-text-2',
      type: 'text',
      content: `## Halveringstid og fordoblingstid

**Halveringstid** er tiden det tar for en størrelse å bli halvert (redusert til halvparten). Brukes f.eks. om medisin i kroppen eller radioaktivt avfall.

**Fordoblingstid** er tiden det tar for en størrelse å bli doblet. Brukes f.eks. om bakterievekst eller investeringer.

For å finne halveringstid ved jevn prosentvis nedgang:
$$\\text{Halveringstid} = \\frac{\\log(0{,}5)}{\\log(a)}$$

For å finne fordoblingstid ved jevn prosentvis økning:
$$\\text{Fordoblingstid} = \\frac{\\log(2)}{\\log(a)}$$

der $a$ er vekstfaktoren.`,
    },
    {
      id: '2py-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bakterievekst i mat',
      problem: `Et parti kyllingfilet har 200 bakterier ved levering. Antall bakterier dobles hver 30. minutt ved romtemperatur. Hvor mange bakterier er det etter 3 timer?`,
      solution: `**Løsning:**

Startverdi: $N_0 = 200$
Fordoblingstid: 30 minutter
Vekstfaktor per 30 min: $a = 2$
Antall perioder (30-min): $x = \\frac{3 \\text{ timer}}{0{,}5 \\text{ timer}} = 6$

$$N = 200 \\cdot 2^6 = 200 \\cdot 64 = 12\\,800$$

Etter 3 timer er det **12 800 bakterier** på kyllingen.

Dette viser hvorfor det er viktig med riktig kjølelagring!`,
    },
    {
      id: '2py-2-4-tip-1',
      type: 'tip',
      title: 'Bruk kalkulatoren',
      content: `For å beregne $0{,}82^5$ på kalkulatoren:
1. Tast inn $0{,}82$
2. Trykk potenstegnet ($x^y$ eller $\\hat{}$)
3. Tast inn $5$
4. Trykk $=$

De fleste kalkulatorer har en $\\log$-knapp for å beregne halveringstid og fordoblingstid.`,
    },
    {
      id: '2py-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-2-4-ex-1',
        number: '2.13',
        type: 'classic',
        difficulty: 'lett',
        task: `Finn vekstfaktoren:

a) 5 % økning
b) 12 % nedgang
c) 3,5 % økning
d) 20 % nedgang`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor ved 5 % økning', solution: '$1 + 0{,}05 = 1{,}05$', answer: 1.05 },
          { label: 'b', task: 'Vekstfaktor ved 12 % nedgang', solution: '$1 - 0{,}12 = 0{,}88$', answer: 0.88 },
          { label: 'c', task: 'Vekstfaktor ved 3,5 % økning', solution: '$1 + 0{,}035 = 1{,}035$', answer: 1.035 },
          { label: 'd', task: 'Vekstfaktor ved 20 % nedgang', solution: '$1 - 0{,}20 = 0{,}80$', answer: 0.80 },
        ],
        hints: ['Økning: 1 + prosenten som desimaltall', 'Nedgang: 1 minus prosenten som desimaltall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-2-4-ex-2',
        number: '2.14',
        type: 'classic',
        difficulty: 'lett',
        task: `En anleggsmaskin ble kjøpt for 850 000 kr. Den mister 20 % av verdien hvert år.

a) Hva er vekstfaktoren?
b) Hva er maskinen verdt etter 1 år?
c) Hva er maskinen verdt etter 3 år?
d) Hvor mye har maskinen tapt i verdi etter 3 år?`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor', solution: '$1 - 0{,}20 = 0{,}80$', answer: 0.80 },
          { label: 'b', task: 'Verdi etter 1 år', solution: '$850\\,000 \\cdot 0{,}80 = 680\\,000$ kr', answer: 680000 },
          { label: 'c', task: 'Verdi etter 3 år', solution: '$850\\,000 \\cdot 0{,}80^3 = 850\\,000 \\cdot 0{,}512 = 435\\,200$ kr', answer: 435200 },
          { label: 'd', task: 'Verditap etter 3 år', solution: '$850\\,000 - 435\\,200 = 414\\,800$ kr', answer: 414800 },
        ],
        hints: ['20 % nedgang gir vekstfaktor 0,80', 'Bruk formelen N = N₀ · aˣ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-2-4-ex-3',
        number: '2.15',
        type: 'classic',
        difficulty: 'medium',
        task: `En pasient får en dose smertestillende medisin. Kroppen bryter ned 30 % av medisinen per time. Pasienten fikk 400 mg.

a) Hva er vekstfaktoren for medisinmengden?
b) Hvor mye medisin er igjen etter 2 timer?
c) Hvor mye medisin er igjen etter 5 timer?
d) Bruk formelen for halveringstid til å finne hvor lang tid det tar før halvparten er borte.`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor', solution: '$1 - 0{,}30 = 0{,}70$', answer: 0.70 },
          { label: 'b', task: 'Mengde etter 2 timer', solution: '$400 \\cdot 0{,}70^2 = 400 \\cdot 0{,}49 = 196$ mg', answer: 196 },
          { label: 'c', task: 'Mengde etter 5 timer', solution: '$400 \\cdot 0{,}70^5 = 400 \\cdot 0{,}1681 \\approx 67$ mg', answer: 67 },
          { label: 'd', task: 'Halveringstid', solution: '$t = \\frac{\\log(0{,}5)}{\\log(0{,}70)} = \\frac{-0{,}301}{-0{,}155} \\approx 1{,}94$ timer, altså ca. **2 timer**.', answer: 1.94 },
        ],
        hints: ['30 % nedbrytning betyr at 70 % er igjen', 'Halveringstid = log(0,5) / log(vekstfaktor)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-2-4-ex-4',
        number: '2.16',
        type: 'classic',
        difficulty: 'medium',
        task: `En bonde starter med 500 høner. Antall egg produsert per dag er 420. Bonden planlegger å utvide med 10 % flere høner hvert år.

a) Hvor mange høner har bonden etter 2 år?
b) Hvor mange høner har bonden etter 4 år?
c) Finn fordoblingstiden for antall høner.
d) Hvor mange egg kan bonden forvente per dag etter 4 år, hvis hver høne legger like mange egg? (Avrund til nærmeste hele egg.)`,
        subTasks: [
          { label: 'a', task: 'Antall høner etter 2 år', solution: '$500 \\cdot 1{,}10^2 = 500 \\cdot 1{,}21 = 605$ høner', answer: 605 },
          { label: 'b', task: 'Antall høner etter 4 år', solution: '$500 \\cdot 1{,}10^4 = 500 \\cdot 1{,}4641 \\approx 732$ høner', answer: 732 },
          { label: 'c', task: 'Fordoblingstid', solution: '$t = \\frac{\\log(2)}{\\log(1{,}10)} = \\frac{0{,}301}{0{,}0414} \\approx 7{,}3$ år', answer: 7.3 },
          { label: 'd', task: 'Egg per dag etter 4 år', solution: 'Egg per høne per dag: $\\frac{420}{500} = 0{,}84$. Etter 4 år: $732 \\cdot 0{,}84 \\approx 615$ egg per dag.', answer: 615 },
        ],
        hints: ['10 % økning gir vekstfaktor 1,10', 'Fordoblingstid = log(2) / log(vekstfaktor)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: MÅLESTOKK OG TEKNISK TEGNING
// ============================================================================

export const CHAPTER_2PY_3_4: TextbookChapter = {
  id: '2py-3-4',
  courseId: '2py',
  chapterNumber: '3.4',
  title: 'Målestokk og teknisk tegning',
  description: 'Lær å bruke målestokk i tegninger, kart og konstruksjonsplaner. Beregn virkelige mål fra tegninger og omvendt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke målestokk',
    'beregne virkelige mål fra tegninger',
    'bruke målestokk i kart og planer',
  ],
  content: [
    {
      id: '2py-3-4-intro',
      type: 'text',
      content: `## Målestokk

Når vi lager tegninger av bygninger, maskindeler, møbler eller kart, må vi forminske eller forstørre virkeligheten. Vi bruker **målestokk** for å angi forholdet mellom tegningen og virkeligheten.

Målestokk brukes i mange yrker:
- Tømrere og snekkere leser byggetegninger
- Rørleggere jobber med rørtegninger
- Bilmekanikere bruker tekniske skisser
- Kokker bruker tegninger av kjøkkenplanlegging
- Helsepersonell leser plantegninger av sykehjem og avdelinger`,
    },
    {
      id: '2py-3-4-def-1',
      type: 'definition',
      title: 'Målestokk',
      content: `**Målestokk** angir forholdet mellom lengde på tegning og lengde i virkeligheten.

Skrives som $1 : n$ (forminskning) eller $n : 1$ (forstørring).

**Forminskning** ($1 : n$, der $n > 1$):
- $1 : 100$ betyr at 1 cm på tegning tilsvarer 100 cm (= 1 m) i virkeligheten
- $1 : 50$ betyr at 1 cm på tegning tilsvarer 50 cm i virkeligheten
- $1 : 20\\,000$ betyr at 1 cm på kart tilsvarer 20 000 cm (= 200 m) i virkeligheten

**Forstørring** ($n : 1$, der $n > 1$):
- $2 : 1$ betyr at 2 cm på tegning tilsvarer 1 cm i virkeligheten
- $5 : 1$ betyr at tegningen er 5 ganger større enn virkeligheten`,
    },
    {
      id: '2py-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Byggetegning',
      problem: `En byggetegning av et garasjeverksted har målestokk $1 : 50$. På tegningen er verkstedet 18 cm langt og 12 cm bredt. Hva er de virkelige målene?`,
      solution: `**Løsning:**

Målestokk $1 : 50$ betyr at 1 cm på tegning $= 50$ cm i virkeligheten.

**Lengde:**
$$18 \\text{ cm} \\cdot 50 = 900 \\text{ cm} = 9{,}0 \\text{ m}$$

**Bredde:**
$$12 \\text{ cm} \\cdot 50 = 600 \\text{ cm} = 6{,}0 \\text{ m}$$

Verkstedet er **9,0 m langt** og **6,0 m bredt**.

Areal: $9{,}0 \\cdot 6{,}0 = 54 \\text{ m}^2$.`,
    },
    {
      id: '2py-3-4-text-2',
      type: 'text',
      content: `## Beregne mål på tegning

Noen ganger må vi gå den andre veien: vi kjenner de virkelige målene og vil finne ut hvor stort noe blir på tegningen.

$$\\text{Mål på tegning} = \\frac{\\text{Virkelig mål}}{\\text{Målestokk-tall}}$$

For eksempel med målestokk $1 : 50$:

$$\\text{Mål på tegning} = \\frac{\\text{Virkelig mål}}{50}$$`,
    },
    {
      id: '2py-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kart og avstand',
      problem: `Et turkart har målestokk $1 : 25\\,000$. Avstanden mellom to hytter på kartet er 8,4 cm. Hvor langt er det i virkeligheten?`,
      solution: `**Løsning:**

Målestokk $1 : 25\\,000$ betyr at 1 cm på kartet $= 25\\,000$ cm i virkeligheten.

$$8{,}4 \\text{ cm} \\cdot 25\\,000 = 210\\,000 \\text{ cm}$$

Gjør om til meter og kilometer:
$$210\\,000 \\text{ cm} = 2\\,100 \\text{ m} = 2{,}1 \\text{ km}$$

Avstanden mellom hyttene er **2,1 km**.`,
    },
    {
      id: '2py-3-4-warning-1',
      type: 'warning',
      title: 'Husk enhetene',
      content: `Når du regner med målestokk, er det viktig å holde styr på enhetene:
- $100$ cm $= 1$ m
- $1\\,000$ m $= 1$ km
- $100\\,000$ cm $= 1$ km

Start alltid med cm (som er måleenheten på tegningen), regn ut i cm, og gjør om til meter eller kilometer til slutt.`,
    },
    {
      id: '2py-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-3-4-ex-1',
        number: '3.13',
        type: 'classic',
        difficulty: 'lett',
        task: `En plantegning av en leilighet har målestokk $1 : 100$. På tegningen måler du:
- Stue: 5,2 cm × 4,0 cm
- Soverom: 3,6 cm × 3,0 cm

a) Hva er stuens virkelige lengde og bredde?
b) Hva er soverommets virkelige lengde og bredde?
c) Hva er arealet av stuen?
d) Hva er arealet av soverommet?`,
        subTasks: [
          { label: 'a', task: 'Stuens virkelige mål', solution: 'Lengde: $5{,}2 \\cdot 100 = 520$ cm $= 5{,}2$ m. Bredde: $4{,}0 \\cdot 100 = 400$ cm $= 4{,}0$ m.' },
          { label: 'b', task: 'Soverommets virkelige mål', solution: 'Lengde: $3{,}6 \\cdot 100 = 360$ cm $= 3{,}6$ m. Bredde: $3{,}0 \\cdot 100 = 300$ cm $= 3{,}0$ m.' },
          { label: 'c', task: 'Areal av stue', solution: '$5{,}2 \\cdot 4{,}0 = 20{,}8$ m$^2$', answer: 20.8 },
          { label: 'd', task: 'Areal av soverom', solution: '$3{,}6 \\cdot 3{,}0 = 10{,}8$ m$^2$', answer: 10.8 },
        ],
        hints: ['Gang tegningsmål med 100 for å finne virkelig mål i cm', 'Gjør om cm til m ved å dele på 100'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-3-4-ex-2',
        number: '3.14',
        type: 'classic',
        difficulty: 'lett',
        task: `Et kart over et hytteområde har målestokk $1 : 50\\,000$.

a) Hvor langt er det i virkeligheten mellom to punkter som er 3,6 cm fra hverandre på kartet? Oppgi svaret i meter.
b) Hvor langt er det mellom to punkter som er 7,2 cm fra hverandre? Oppgi svaret i km.
c) En sti er 2,5 km lang i virkeligheten. Hvor lang er stien på kartet?
d) Et vann er 800 m langt. Hvor langt er vannet på kartet?`,
        subTasks: [
          { label: 'a', task: 'Avstand ved 3,6 cm', solution: '$3{,}6 \\cdot 50\\,000 = 180\\,000$ cm $= 1\\,800$ m', answer: 1800 },
          { label: 'b', task: 'Avstand ved 7,2 cm i km', solution: '$7{,}2 \\cdot 50\\,000 = 360\\,000$ cm $= 3\\,600$ m $= 3{,}6$ km', answer: 3.6 },
          { label: 'c', task: '2,5 km på kartet', solution: '$2{,}5$ km $= 250\\,000$ cm. På kartet: $\\frac{250\\,000}{50\\,000} = 5{,}0$ cm', answer: 5.0 },
          { label: 'd', task: '800 m på kartet', solution: '$800$ m $= 80\\,000$ cm. På kartet: $\\frac{80\\,000}{50\\,000} = 1{,}6$ cm', answer: 1.6 },
        ],
        hints: ['Virkelighet = tegningsmål × målestokk-tall', 'Tegningsmål = virkelig mål ÷ målestokk-tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-3-4-ex-3',
        number: '3.15',
        type: 'classic',
        difficulty: 'medium',
        task: `En tømrer skal bygge en terrasse. Byggetegningen har målestokk $1 : 20$.

a) Terrassen er 15 cm lang på tegningen. Hvor lang er den i virkeligheten?
b) Terrassen er 10 cm bred på tegningen. Hvor bred er den i virkeligheten?
c) Tømreren trenger terrassebord som dekker hele flaten. Hva er arealet av terrassen?
d) Terrassebordene koster 389 kr per m$^2$. Hva koster bordene totalt?`,
        subTasks: [
          { label: 'a', task: 'Lengde i virkeligheten', solution: '$15 \\cdot 20 = 300$ cm $= 3{,}0$ m', answer: 3.0 },
          { label: 'b', task: 'Bredde i virkeligheten', solution: '$10 \\cdot 20 = 200$ cm $= 2{,}0$ m', answer: 2.0 },
          { label: 'c', task: 'Areal av terrassen', solution: '$3{,}0 \\cdot 2{,}0 = 6{,}0$ m$^2$', answer: 6.0 },
          { label: 'd', task: 'Pris for terrassebord', solution: '$6{,}0 \\cdot 389 = 2\\,334$ kr', answer: 2334 },
        ],
        hints: ['Bruk målestokken til å finne virkelige mål', 'Areal = lengde × bredde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-3-4-ex-4',
        number: '3.16',
        type: 'classic',
        difficulty: 'medium',
        task: `En rørlegger har en tegning av et bad med målestokk $1 : 25$. Badet er rektangulært, 7,5 cm × 5,0 cm på tegningen. Det skal legges fliser på gulvet og på alle fire vegger opp til 2,1 m høyde.

a) Finn badets virkelige lengde og bredde i meter.
b) Beregn gulvarealet.
c) Beregn veggarealet som skal flislegges (alle 4 vegger, opp til 2,1 m).
d) Fliser koster 495 kr per m$^2$ inkludert montering. Hva koster det å flislegge gulv og vegger?`,
        subTasks: [
          { label: 'a', task: 'Virkelige mål', solution: 'Lengde: $7{,}5 \\cdot 25 = 187{,}5$ cm $= 1{,}875$ m. Bredde: $5{,}0 \\cdot 25 = 125$ cm $= 1{,}25$ m.' },
          { label: 'b', task: 'Gulvareal', solution: '$1{,}875 \\cdot 1{,}25 \\approx 2{,}34$ m$^2$', answer: 2.34 },
          { label: 'c', task: 'Veggareal', solution: 'Omkrets: $2 \\cdot (1{,}875 + 1{,}25) = 6{,}25$ m. Veggareal: $6{,}25 \\cdot 2{,}1 = 13{,}125 \\approx 13{,}13$ m$^2$.', answer: 13.13 },
          { label: 'd', task: 'Total fliskostnad', solution: 'Totalt areal: $2{,}34 + 13{,}13 = 15{,}47$ m$^2$. Kostnad: $15{,}47 \\cdot 495 \\approx 7\\,658$ kr.', answer: 7658 },
        ],
        hints: ['Finn virkelige mål først med målestokken', 'Veggareal = omkrets × høyde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3: FREKVENSTABELLER OG KLASSIFISERING
// ============================================================================

export const CHAPTER_2PY_4_3: TextbookChapter = {
  id: '2py-4-3',
  courseId: '2py',
  chapterNumber: '4.3',
  title: 'Frekvenstabeller og klassifisering',
  description: 'Lær å gruppere data i klasser, lage frekvenstabeller med klassebredde og kumulative frekvenser for å analysere store datasett.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gruppere data i klasser',
    'lage frekvenstabeller',
    'beregne kumulative frekvenser',
  ],
  content: [
    {
      id: '2py-4-3-intro',
      type: 'text',
      content: `## Organisere store datasett

Når du har mange observasjoner, er det vanskelig å se mønstre i en lang tallrekke. Da grupperer vi dataene i **klasser** og lager en **frekvenstabell**.

Eksempler fra yrkeslivet:
- En elektriker måler strømforbruk i 50 boliger
- En helsefagarbeider registrerer blodtrykk for 30 pasienter
- En kokk noterer ventetid for 40 bestillinger
- En mekaniker registrerer kjørelengden til 60 biler som kommer til EU-kontroll`,
    },
    {
      id: '2py-4-3-def-1',
      type: 'definition',
      title: 'Klasser og frekvenser',
      content: `**Klasse**: Et intervall som verdiene grupperes i, f.eks. $[0, 10\\rangle$, $[10, 20\\rangle$, $[20, 30\\rangle$.

**Klassebredde**: Bredden på hver klasse (forskjellen mellom øvre og nedre grense). I eksempelet over er klassebredden 10.

**Frekvens**: Antall observasjoner i hver klasse.

**Relativ frekvens**: Andelen av observasjonene i en klasse, oppgitt som prosent eller desimaltall.
$$\\text{Relativ frekvens} = \\frac{\\text{Frekvens}}{\\text{Totalt antall}}$$

**Kumulativ frekvens**: Summen av frekvensene opp til og med en gitt klasse.`,
    },
    {
      id: '2py-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Ventetid på et verksted',
      problem: `Et bilverksted registrerte ventetiden (i minutter) for 20 kunder:

15, 8, 32, 45, 12, 28, 5, 22, 38, 18, 55, 10, 25, 42, 20, 35, 14, 48, 30, 7

Grupper dataene i klasser med klassebredde 10 og lag en frekvenstabell.`,
      solution: `**Løsning:**

Vi velger klassene $[0, 10\\rangle$, $[10, 20\\rangle$, $[20, 30\\rangle$, $[30, 40\\rangle$, $[40, 50\\rangle$, $[50, 60\\rangle$.

| Klasse (min) | Frekvens | Relativ frekvens | Kumulativ frekvens |
|:---:|:---:|:---:|:---:|
| $[0, 10\\rangle$ | 3 | 15 % | 3 |
| $[10, 20\\rangle$ | 5 | 25 % | 8 |
| $[20, 30\\rangle$ | 4 | 20 % | 12 |
| $[30, 40\\rangle$ | 4 | 20 % | 16 |
| $[40, 50\\rangle$ | 3 | 15 % | 19 |
| $[50, 60\\rangle$ | 1 | 5 % | 20 |
| **Sum** | **20** | **100 %** | |

Vi ser at flest kunder (5 stk, 25 %) ventet mellom 10 og 20 minutter. 60 % av kundene (12 av 20) ventet under 30 minutter.`,
    },
    {
      id: '2py-4-3-text-2',
      type: 'text',
      content: `## Velge klassebredde

Det finnes ingen fast regel for klassebredde, men noen tommelfingerregler:
- Bruk mellom 5 og 10 klasser
- Alle klasser bør ha **lik bredde**
- Velg «runde» tall som klassebredde (5, 10, 20, 50, 100)
- Klassene skal dekke alle observasjoner

En enkel formel:
$$\\text{Klassebredde} \\approx \\frac{\\text{Største verdi} - \\text{Minste verdi}}{\\text{Antall klasser}}$$

Rund opp til et praktisk tall.`,
    },
    {
      id: '2py-4-3-tip-1',
      type: 'tip',
      title: 'Halvåpne intervaller',
      content: `Vi bruker **halvåpne intervaller** slik at hver observasjon havner i nøyaktig en klasse:

$[10, 20\\rangle$ betyr **fra og med 10** til, men **ikke med**, 20.

Altså: 10, 15 og 19,9 hører til klassen $[10, 20\\rangle$, men 20 hører til klassen $[20, 30\\rangle$.`,
    },
    {
      id: '2py-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-4-3-ex-1',
        number: '4.9',
        type: 'classic',
        difficulty: 'lett',
        task: `En helsefagarbeider målte blodtrykk (systolisk, i mmHg) hos 15 pasienter:

128, 145, 132, 118, 156, 122, 138, 142, 115, 150, 135, 127, 148, 110, 140

a) Grupper dataene i klasser med klassebredde 10, fra $[110, 120\\rangle$ til $[150, 160\\rangle$.
b) Finn frekvensen i hver klasse.
c) Finn den relative frekvensen for hver klasse.
d) Hvor stor andel av pasientene hadde blodtrykk under 140?`,
        subTasks: [
          { label: 'a', task: 'Grupper i klasser', solution: '$[110, 120\\rangle$: 110, 115, 118. $[120, 130\\rangle$: 122, 127, 128. $[130, 140\\rangle$: 132, 135, 138. $[140, 150\\rangle$: 140, 142, 145, 148. $[150, 160\\rangle$: 150, 156.' },
          { label: 'b', task: 'Frekvenser', solution: '$[110, 120\\rangle$: 3, $[120, 130\\rangle$: 3, $[130, 140\\rangle$: 3, $[140, 150\\rangle$: 4, $[150, 160\\rangle$: 2. Sum = 15.' },
          { label: 'c', task: 'Relative frekvenser', solution: '$[110, 120\\rangle$: $\\frac{3}{15} = 20\\,\\%$, $[120, 130\\rangle$: $20\\,\\%$, $[130, 140\\rangle$: $20\\,\\%$, $[140, 150\\rangle$: $\\frac{4}{15} \\approx 26{,}7\\,\\%$, $[150, 160\\rangle$: $\\frac{2}{15} \\approx 13{,}3\\,\\%$.' },
          { label: 'd', task: 'Andel under 140', solution: 'Kumulativ frekvens til og med $[130, 140\\rangle$: $3 + 3 + 3 = 9$. Andel: $\\frac{9}{15} = 60\\,\\%$.', answer: 60 },
        ],
        hints: ['Tell verdiene i hvert intervall', 'Relativ frekvens = frekvens delt på totalt antall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-4-3-ex-2',
        number: '4.10',
        type: 'classic',
        difficulty: 'lett',
        task: `En kokk registrerte ventetiden (i minutter) for 20 middagsbestillinger:

12, 18, 24, 8, 15, 22, 30, 14, 26, 10, 20, 35, 16, 28, 11, 19, 32, 13, 25, 21

a) Finn den største og minste verdien, og beregn variasjonsbredden.
b) Foreslå en passende klassebredde med 5 klasser.
c) Lag en frekvenstabell med frekvens og kumulativ frekvens.
d) Hvor stor andel av bestillingene tok 20 minutter eller mer?`,
        subTasks: [
          { label: 'a', task: 'Variasjonsbredde', solution: 'Minst: 8 min, størst: 35 min. Variasjonsbredde: $35 - 8 = 27$ min.', answer: 27 },
          { label: 'b', task: 'Klassebredde', solution: '$\\frac{27}{5} = 5{,}4$. Vi runder opp til klassebredde **6**. Klasser: $[8, 14\\rangle$, $[14, 20\\rangle$, $[20, 26\\rangle$, $[26, 32\\rangle$, $[32, 38\\rangle$.' },
          { label: 'c', task: 'Frekvenstabell', solution: '$[8, 14\\rangle$: 5 (kum. 5), $[14, 20\\rangle$: 5 (kum. 10), $[20, 26\\rangle$: 5 (kum. 15), $[26, 32\\rangle$: 3 (kum. 18), $[32, 38\\rangle$: 2 (kum. 20).' },
          { label: 'd', task: 'Andel 20 min eller mer', solution: 'Frekvenser fra $[20, 26\\rangle$ og oppover: $5 + 3 + 2 = 10$. Andel: $\\frac{10}{20} = 50\\,\\%$.', answer: 50 },
        ],
        hints: ['Variasjonsbredde = største verdi minus minste verdi', 'Klassebredde = variasjonsbredde delt på ønsket antall klasser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-4-3-ex-3',
        number: '4.11',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektriker registrerte strømforbruk (i kWh) for 24 leiligheter i en blokk i desember:

320, 480, 215, 550, 390, 270, 610, 445, 180, 505, 365, 290,
425, 530, 240, 460, 350, 580, 310, 490, 200, 410, 560, 340

a) Grupper dataene i klasser med klassebredde 100, fra $[100, 200\\rangle$.
b) Lag en frekvenstabell med frekvens, relativ frekvens og kumulativ frekvens.
c) Hvor mange leiligheter brukte mindre enn 400 kWh?
d) Strømprisen er 1,85 kr per kWh. Hva er strømkostnaden for leiligheten med lavest og høyest forbruk?`,
        subTasks: [
          { label: 'a', task: 'Klasser med bredde 100', solution: '$[100, 200\\rangle$, $[200, 300\\rangle$, $[300, 400\\rangle$, $[400, 500\\rangle$, $[500, 600\\rangle$, $[600, 700\\rangle$.' },
          { label: 'b', task: 'Frekvenstabell', solution: '$[100, 200\\rangle$: 1 (4,2 %, kum. 1). $[200, 300\\rangle$: 4 (16,7 %, kum. 5). $[300, 400\\rangle$: 6 (25,0 %, kum. 11). $[400, 500\\rangle$: 5 (20,8 %, kum. 16). $[500, 600\\rangle$: 6 (25,0 %, kum. 22). $[600, 700\\rangle$: 2 (8,3 %, kum. 24).' },
          { label: 'c', task: 'Antall under 400 kWh', solution: 'Kumulativ frekvens til og med $[300, 400\\rangle$: $1 + 4 + 6 = 11$ leiligheter.', answer: 11 },
          { label: 'd', task: 'Strømkostnad lavest/høyest', solution: 'Lavest: $180 \\cdot 1{,}85 = 333$ kr. Høyest: $610 \\cdot 1{,}85 = 1\\,128{,}50$ kr.' },
        ],
        hints: ['Tell opp observasjoner i hvert 100-intervall', 'Kumulativ frekvens er summen av alle frekvenser opp til og med klassen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-4-3-ex-4',
        number: '4.12',
        type: 'classic',
        difficulty: 'medium',
        task: `En mekaniker registrerte kilometerstand (i tusen km) for 25 biler som kom til EU-kontroll:

45, 120, 88, 205, 67, 152, 95, 180, 32, 110, 145, 73, 190,
58, 135, 102, 168, 82, 215, 125, 48, 155, 92, 178, 115

a) Grupper i klasser med klassebredde 50 fra $[0, 50\\rangle$.
b) Lag en fullstendig frekvenstabell.
c) Finn medianen ved hjelp av den kumulative frekvensen (i hvilken klasse ligger den 13. bilen?).
d) En bil som har kjørt over 150 000 km regnes som «høy kilometerstand». Hvor stor andel av bilene har høy kilometerstand?`,
        subTasks: [
          { label: 'a', task: 'Klasser med bredde 50', solution: '$[0, 50\\rangle$, $[50, 100\\rangle$, $[100, 150\\rangle$, $[150, 200\\rangle$, $[200, 250\\rangle$.' },
          { label: 'b', task: 'Frekvenstabell', solution: '$[0, 50\\rangle$: 3 (kum. 3). $[50, 100\\rangle$: 7 (kum. 10). $[100, 150\\rangle$: 7 (kum. 17). $[150, 200\\rangle$: 6 (kum. 23). $[200, 250\\rangle$: 2 (kum. 25).' },
          { label: 'c', task: 'Median-klasse', solution: 'Median er den 13. verdien (av 25). Kumulativ frekvens: 3, 10, **17**. Den 13. verdien ligger i klassen $[100, 150\\rangle$.', answer: '100-150' },
          { label: 'd', task: 'Andel over 150 000 km', solution: 'Frekvens over 150: $6 + 2 = 8$ biler. Andel: $\\frac{8}{25} = 32\\,\\%$.', answer: 32 },
        ],
        hints: ['Medianen er den midterste verdien, her den 13. av 25', 'Bruk kumulativ frekvens for å finne hvilken klasse medianen ligger i'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: KOMBINATORIKK I PRAKSIS
// ============================================================================

export const CHAPTER_2PY_5_3: TextbookChapter = {
  id: '2py-5-3',
  courseId: '2py',
  chapterNumber: '5.3',
  title: 'Kombinatorikk i praksis',
  description: 'Lær multiplikasjonsprinsippet, systematisk opptelling og valgtre for å telle antall muligheter i praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke multiplikasjonsprinsippet',
    'telle systematisk med valgtre',
    'løse enkle kombinatoriske problemer',
  ],
  content: [
    {
      id: '2py-5-3-intro',
      type: 'text',
      content: `## Telle muligheter

I mange situasjoner i yrkeslivet trenger vi å vite hvor mange muligheter som finnes:
- Hvor mange ulike menyer kan en kantine sette sammen?
- Hvor mange ulike uniformkombinasjoner finnes?
- Hvor mange mulige ruter har en budbil?
- Hvor mange koder kan et alarmsystem ha?

For å telle riktig bruker vi **kombinatorikk** -- læren om å telle systematisk.`,
    },
    {
      id: '2py-5-3-def-1',
      type: 'definition',
      title: 'Multiplikasjonsprinsippet',
      content: `**Multiplikasjonsprinsippet**: Hvis et valg kan gjøres i $m$ trinn, der trinn 1 har $n_1$ muligheter, trinn 2 har $n_2$ muligheter, osv., er det totale antallet muligheter:

$$n_1 \\cdot n_2 \\cdot n_3 \\cdots n_m$$

**Eksempel:** Velge forrett (3 valg), hovedrett (4 valg) og dessert (2 valg): $3 \\cdot 4 \\cdot 2 = 24$ ulike menyer.`,
    },
    {
      id: '2py-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Uniformkombinasjoner',
      problem: `En hotellkjede har følgende uniformvalg for resepsjonistene:
- Skjorte: hvit, lyseblå, lys rosa (3 valg)
- Bukse/skjørt: svart, mørkeblå (2 valg)
- Slips/skjerf: rødt, gråstripert, ensfarget blått (3 valg)

Hvor mange ulike uniformkombinasjoner finnes?`,
      solution: `**Løsning:**

Vi bruker multiplikasjonsprinsippet:

$$\\text{Antall kombinasjoner} = 3 \\cdot 2 \\cdot 3 = 18$$

Det finnes **18 ulike uniformkombinasjoner**.`,
    },
    {
      id: '2py-5-3-text-2',
      type: 'text',
      content: `## Valgtre

Et **valgtre** er en visuell måte å telle muligheter på. Vi tegner grener for hvert valg, og teller endepunktene.

Valgtre er spesielt nyttig når:
- Det er få muligheter i hvert trinn
- Vi vil se alle mulighetene oversiktlig
- Noen kombinasjoner er ugyldige og skal utelukkes

For større tall er multiplikasjonsprinsippet raskere enn å tegne valgtre.`,
    },
    {
      id: '2py-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Kodelås',
      problem: `Et verktøyskap på et bygningsverksted har en kodelås med 4 sifre. Hvert siffer kan være 0-9.

a) Hvor mange mulige koder finnes?
b) Hvor mange koder finnes hvis alle sifrene må være forskjellige?`,
      solution: `**Løsning:**

**a)** Hvert siffer har 10 muligheter (0, 1, 2, ..., 9):
$$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000 \\text{ koder}$$

**b)** Hvis alle sifrene må være forskjellige:
- Siffer 1: 10 muligheter
- Siffer 2: 9 muligheter (en er brukt)
- Siffer 3: 8 muligheter
- Siffer 4: 7 muligheter

$$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5\\,040 \\text{ koder}$$`,
    },
    {
      id: '2py-5-3-tip-1',
      type: 'tip',
      title: 'Med eller uten tilbakelegging',
      content: `Et viktig skille i kombinatorikk:

**Med tilbakelegging**: Samme element kan velges flere ganger. Eksempel: kodelås der du kan bruke samme siffer flere ganger.

**Uten tilbakelegging**: Hvert element kan bare velges en gang. Eksempel: fordele arbeidsoppgaver -- en person kan bare ha en oppgave.

Husk: «uten tilbakelegging» gir alltid **færre** muligheter.`,
    },
    {
      id: '2py-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-5-3-ex-1',
        number: '5.9',
        type: 'classic',
        difficulty: 'lett',
        task: `En kantine tilbyr lunsj med følgende valg:
- Suppe: tomat, løk, ertesuppe (3 valg)
- Brød: lyst, grovt, knekkebrød (3 valg)
- Drikke: vann, juice, melk, kaffe (4 valg)

a) Bruk multiplikasjonsprinsippet til å finne antall ulike lunsjkombinasjoner.
b) Kantinen fjerner kaffe fra menyen. Hvor mange kombinasjoner er det nå?
c) Kantinen legger til en ny suppe (minestrone). Hvor mange kombinasjoner totalt (uten kaffe, med ny suppe)?
d) Hvor mange flere kombinasjoner ga den nye suppen?`,
        subTasks: [
          { label: 'a', task: 'Antall kombinasjoner', solution: '$3 \\cdot 3 \\cdot 4 = 36$ kombinasjoner', answer: 36 },
          { label: 'b', task: 'Uten kaffe', solution: '$3 \\cdot 3 \\cdot 3 = 27$ kombinasjoner', answer: 27 },
          { label: 'c', task: 'Med ny suppe, uten kaffe', solution: '$4 \\cdot 3 \\cdot 3 = 36$ kombinasjoner', answer: 36 },
          { label: 'd', task: 'Flere kombinasjoner fra ny suppe', solution: '$36 - 27 = 9$ flere kombinasjoner', answer: 9 },
        ],
        hints: ['Gang antall valg i hvert trinn med hverandre', 'Endre bare det tallet som endrer seg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-5-3-ex-2',
        number: '5.10',
        type: 'classic',
        difficulty: 'lett',
        task: `Et sikkerhetssystem bruker en PIN-kode med 3 sifre (0-9).

a) Hvor mange mulige PIN-koder finnes totalt?
b) Hvor mange PIN-koder starter med siffer 5?
c) Hvor mange PIN-koder har bare partall (0, 2, 4, 6, 8)?
d) Hvor mange PIN-koder har tre like sifre (f.eks. 444)?`,
        subTasks: [
          { label: 'a', task: 'Totalt antall koder', solution: '$10 \\cdot 10 \\cdot 10 = 1\\,000$ koder', answer: 1000 },
          { label: 'b', task: 'Koder som starter med 5', solution: '$1 \\cdot 10 \\cdot 10 = 100$ koder', answer: 100 },
          { label: 'c', task: 'Koder med bare partall', solution: '$5 \\cdot 5 \\cdot 5 = 125$ koder', answer: 125 },
          { label: 'd', task: 'Koder med tre like', solution: '10 muligheter (000, 111, 222, ..., 999)', answer: 10 },
        ],
        hints: ['Hvert siffer kan være 0-9 (10 muligheter)', 'Partall er 0, 2, 4, 6, 8 (5 muligheter)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-5-3-ex-3',
        number: '5.11',
        type: 'classic',
        difficulty: 'medium',
        task: `En bilforhandler tilbyr en varebil med følgende valg:
- Farge: hvit, grå, svart, blå, rød (5 valg)
- Motor: diesel, bensin, hybrid (3 valg)
- Utstyrspakke: basis, pluss, premium (3 valg)
- Hengerfeste: med, uten (2 valg)

a) Hvor mange ulike konfigurasjoner av varebilen finnes?
b) Kunden vil ha diesel. Hvor mange konfigurasjoner gjenstår?
c) Kunden vil ha diesel OG premium. Hvor mange gjenstår nå?
d) Kunden vil ha diesel, premium, og enten hvit eller svart. Hvor mange gjenstår?`,
        subTasks: [
          { label: 'a', task: 'Totalt antall konfigurasjoner', solution: '$5 \\cdot 3 \\cdot 3 \\cdot 2 = 90$ konfigurasjoner', answer: 90 },
          { label: 'b', task: 'Bare diesel', solution: '$5 \\cdot 1 \\cdot 3 \\cdot 2 = 30$ konfigurasjoner', answer: 30 },
          { label: 'c', task: 'Diesel og premium', solution: '$5 \\cdot 1 \\cdot 1 \\cdot 2 = 10$ konfigurasjoner', answer: 10 },
          { label: 'd', task: 'Diesel, premium, hvit/svart', solution: '$2 \\cdot 1 \\cdot 1 \\cdot 2 = 4$ konfigurasjoner', answer: 4 },
        ],
        hints: ['Hver begrensning låser et valg til færre muligheter', 'Gang sammen de gjenværende valgmulighetene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-5-3-ex-4',
        number: '5.12',
        type: 'classic',
        difficulty: 'medium',
        task: `På et sykehjem skal 5 ansatte fordeles på 5 ulike vakter (tidligvakt, dagvakt, seinvakt, nattevakt, bakvakt). Hver ansatt tar nøyaktig en vakt.

a) Hvor mange muligheter har lederen for tidligvakten (første valg)?
b) Når tidligvakten er bestemt, hvor mange muligheter er det for dagvakten?
c) Bruk multiplikasjonsprinsippet til å finne totalt antall måter å fordele vaktene.
d) Lederen bestemmer at Anna SKAL ha nattevakt. Hvor mange måter kan de resterende vaktene fordeles nå?`,
        subTasks: [
          { label: 'a', task: 'Muligheter for tidligvakt', solution: '5 personer kan ta tidligvakten, altså 5 muligheter.', answer: 5 },
          { label: 'b', task: 'Muligheter for dagvakt', solution: 'Etter at en person er tildelt tidligvakt, gjenstår 4 personer for dagvakt.', answer: 4 },
          { label: 'c', task: 'Totalt antall fordelinger', solution: '$5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 5! = 120$ måter', answer: 120 },
          { label: 'd', task: 'Fordelinger med Anna på nattevakt', solution: 'Anna er låst til nattevakt. De 4 gjenværende personene fordeles på 4 vakter: $4 \\cdot 3 \\cdot 2 \\cdot 1 = 4! = 24$ måter.', answer: 24 },
        ],
        hints: ['Uten tilbakelegging: en person kan bare ha en vakt', 'n! = n · (n-1) · (n-2) · ... · 2 · 1'],
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

export const PY_KAP1B_CHAPTERS = [
  CHAPTER_2PY_1_4,
  CHAPTER_2PY_2_4,
  CHAPTER_2PY_3_4,
  CHAPTER_2PY_4_3,
  CHAPTER_2PY_5_3,
];

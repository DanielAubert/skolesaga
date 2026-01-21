/**
 * Tekstbok kapitler for 1P (Matematikk 1P - Praktisk matematikk VG1)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: TALL OG ØKONOMI
// ============================================================================

export const CHAPTER_1P_1_1: TextbookChapter = {
  id: '1p-1-1',
  courseId: '1p',
  chapterNumber: '1.1',
  title: 'Prosent og prosentregning',
  description: 'Lær å regne med prosent, prosentpoeng og finne prosentvis endring.',
  estimatedMinutes: 45,
  competenceGoals: [
    'regne med prosent og prosentpoeng',
    'beregne prosentvis økning og nedgang',
  ],
  content: [
    {
      id: '1p-1-1-intro',
      type: 'text',
      content: `## Hva er prosent?

Prosent betyr "per hundre" og skrives med symbolet %.

- 1% betyr 1 av 100, altså $\\frac{1}{100} = 0{,}01$
- 50% betyr 50 av 100, altså $\\frac{50}{100} = 0{,}5$
- 100% betyr hele, altså 1

Prosent brukes overalt i hverdagen: rabatter, renter, skatt, statistikk og mye mer.`,
    },
    {
      id: '1p-1-1-def',
      type: 'definition',
      title: 'Prosent',
      content: `**Prosent** betyr hundredeler.

$$p\\% = \\frac{p}{100}$$

For å regne om fra prosent til desimaltall, deler vi på 100.
For å regne om fra desimaltall til prosent, ganger vi med 100.`,
    },
    {
      id: '1p-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Omregning mellom prosent og desimaltall',
      problem: `Skriv om til desimaltall:
a) 25%
b) 7%
c) 150%

Skriv om til prosent:
d) 0,45
e) 0,08
f) 1,2`,
      solution: `**Løsning:**

a) $25\\% = \\frac{25}{100} = 0{,}25$

b) $7\\% = \\frac{7}{100} = 0{,}07$

c) $150\\% = \\frac{150}{100} = 1{,}5$

d) $0{,}45 = 0{,}45 \\cdot 100\\% = 45\\%$

e) $0{,}08 = 0{,}08 \\cdot 100\\% = 8\\%$

f) $1{,}2 = 1{,}2 \\cdot 100\\% = 120\\%$`,
    },
    {
      id: '1p-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-1-1-ex-1',
        number: '1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv om til desimaltall:',
        subTasks: [
          { label: 'a', task: '40%', solution: '$40\\% = 0{,}40$', answer: 0.4, multipleChoiceOptions: ['0,40', '4,0', '0,04', '40'] },
          { label: 'b', task: '5%', solution: '$5\\% = 0{,}05$', answer: 0.05, multipleChoiceOptions: ['0,05', '0,5', '5,0', '0,005'] },
          { label: 'c', task: '125%', solution: '$125\\% = 1{,}25$', answer: 1.25, multipleChoiceOptions: ['1,25', '12,5', '0,125', '125'] },
          { label: 'd', task: '0,5%', solution: '$0{,}5\\% = 0{,}005$', answer: 0.005, multipleChoiceOptions: ['0,005', '0,05', '0,5', '5'] },
        ],
        solution: 'a) 0,40  b) 0,05  c) 1,25  d) 0,005',
        hints: ['Del prosenttallet på 100 for å få desimaltall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-1-andel',
      type: 'text',
      content: `## Finne prosentandel

Når vi skal finne hvor mange prosent en del utgjør av en helhet, bruker vi formelen:

$$\\text{Prosentandel} = \\frac{\\text{del}}{\\text{helhet}} \\cdot 100\\%$$`,
    },
    {
      id: '1p-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne prosentandel',
      problem: `a) I en klasse med 25 elever er 15 jenter. Hvor mange prosent av klassen er jenter?

b) En butikk har 80 ansatte. 12 av dem jobber deltid. Hvor stor prosentandel jobber deltid?`,
      solution: `**Løsning:**

a) Prosentandel jenter $= \\frac{15}{25} \\cdot 100\\% = 0{,}6 \\cdot 100\\% = 60\\%$

b) Prosentandel deltid $= \\frac{12}{80} \\cdot 100\\% = 0{,}15 \\cdot 100\\% = 15\\%$`,
    },
    {
      id: '1p-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-1-1-ex-2',
        number: '1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn prosentandelen:',
        subTasks: [
          { label: 'a', task: '18 av 90', solution: '$\\frac{18}{90} \\cdot 100\\% = 20\\%$', answer: 20, multipleChoiceOptions: ['20%', '18%', '5%', '25%'] },
          { label: 'b', task: '35 av 140', solution: '$\\frac{35}{140} \\cdot 100\\% = 25\\%$', answer: 25, multipleChoiceOptions: ['25%', '35%', '4%', '20%'] },
          { label: 'c', task: '8 av 32', solution: '$\\frac{8}{32} \\cdot 100\\% = 25\\%$', answer: 25, multipleChoiceOptions: ['25%', '8%', '32%', '4%'] },
          { label: 'd', task: '45 av 60', solution: '$\\frac{45}{60} \\cdot 100\\% = 75\\%$', answer: 75, multipleChoiceOptions: ['75%', '45%', '60%', '133%'] },
        ],
        solution: 'a) 20%  b) 25%  c) 25%  d) 75%',
        hints: ['Bruk formelen: del/helhet · 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-1-av',
      type: 'text',
      content: `## Finne prosent av et tall

Når vi skal finne en prosentandel av et tall, ganger vi tallet med prosenten som desimaltall.

$$p\\% \\text{ av } a = \\frac{p}{100} \\cdot a$$`,
    },
    {
      id: '1p-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne prosent av et tall',
      problem: `a) Finn 20% av 450 kr
b) En jakke koster 1200 kr. Hvor mye sparer du med 30% rabatt?`,
      solution: `**Løsning:**

a) $20\\%$ av $450 = 0{,}20 \\cdot 450 = 90$ kr

b) Rabatt $= 30\\%$ av $1200 = 0{,}30 \\cdot 1200 = 360$ kr`,
    },
    {
      id: '1p-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-1-1-ex-3',
        number: '1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut:',
        subTasks: [
          { label: 'a', task: '15% av 600', solution: '$0{,}15 \\cdot 600 = 90$', answer: 90, multipleChoiceOptions: ['90', '15', '60', '150'] },
          { label: 'b', task: '8% av 250', solution: '$0{,}08 \\cdot 250 = 20$', answer: 20, multipleChoiceOptions: ['20', '8', '25', '200'] },
          { label: 'c', task: '75% av 800', solution: '$0{,}75 \\cdot 800 = 600$', answer: 600, multipleChoiceOptions: ['600', '75', '80', '750'] },
          { label: 'd', task: '120% av 50', solution: '$1{,}20 \\cdot 50 = 60$', answer: 60, multipleChoiceOptions: ['60', '120', '50', '6'] },
        ],
        solution: 'a) 90  b) 20  c) 600  d) 60',
        hints: ['Gjør om prosenten til desimaltall først, så gang med tallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-1-vekstfaktor',
      type: 'text',
      content: `## Vekstfaktor

Når noe øker eller minker med en prosent, kan vi bruke **vekstfaktor** for å beregne den nye verdien direkte.

- **Økning med p%:** Vekstfaktor $= 1 + \\frac{p}{100}$
- **Nedgang med p%:** Vekstfaktor $= 1 - \\frac{p}{100}$

Ny verdi = Gammel verdi × Vekstfaktor`,
    },
    {
      id: '1p-1-1-def-vekst',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `**Vekstfaktor** er tallet vi ganger med for å finne ny verdi etter prosentvis endring.

- 10% økning → vekstfaktor 1,10
- 25% økning → vekstfaktor 1,25
- 15% nedgang → vekstfaktor 0,85
- 50% nedgang → vekstfaktor 0,50`,
    },
    {
      id: '1p-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Bruk av vekstfaktor',
      problem: `a) En vare koster 800 kr. Prisen øker med 15%. Finn ny pris.

b) En aksje verdt 1500 kr faller med 20%. Finn ny verdi.`,
      solution: `**Løsning:**

a) Vekstfaktor ved 15% økning: $1 + 0{,}15 = 1{,}15$
   Ny pris $= 800 \\cdot 1{,}15 = 920$ kr

b) Vekstfaktor ved 20% nedgang: $1 - 0{,}20 = 0{,}80$
   Ny verdi $= 1500 \\cdot 0{,}80 = 1200$ kr`,
    },
    {
      id: '1p-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-1-1-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk vekstfaktor til å beregne ny verdi:',
        subTasks: [
          { label: 'a', task: '500 kr øker med 12%', solution: '$500 \\cdot 1{,}12 = 560$ kr', answer: 560, multipleChoiceOptions: ['560 kr', '512 kr', '612 kr', '60 kr'] },
          { label: 'b', task: '1200 kr synker med 25%', solution: '$1200 \\cdot 0{,}75 = 900$ kr', answer: 900, multipleChoiceOptions: ['900 kr', '1175 kr', '300 kr', '975 kr'] },
          { label: 'c', task: '2000 kr øker med 5,5%', solution: '$2000 \\cdot 1{,}055 = 2110$ kr', answer: 2110, multipleChoiceOptions: ['2110 kr', '2055 kr', '110 kr', '2011 kr'] },
          { label: 'd', task: '850 kr synker med 8%', solution: '$850 \\cdot 0{,}92 = 782$ kr', answer: 782, multipleChoiceOptions: ['782 kr', '842 kr', '68 kr', '778 kr'] },
        ],
        solution: 'a) 560 kr  b) 900 kr  c) 2110 kr  d) 782 kr',
        hints: ['Vekstfaktor = 1 + p/100 for økning, 1 - p/100 for nedgang'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-1-prosentpoeng',
      type: 'text',
      content: `## Prosentpoeng

**Prosentpoeng** brukes når vi beskriver forskjellen mellom to prosenttall.

Hvis renten øker fra 3% til 5%, har den økt med **2 prosentpoeng** (ikke 2%).

Prosentvis økning ville vært: $\\frac{5-3}{3} \\cdot 100\\% = 66{,}7\\%$`,
    },
    {
      id: '1p-1-1-warning',
      type: 'warning',
      title: 'Viktig forskjell',
      content: `**Prosentpoeng** ≠ **Prosent**

- Renten økte fra 4% til 6%: økning på **2 prosentpoeng**
- Renten økte fra 4% til 6%: prosentvis økning på **50%** (fordi $\\frac{2}{4} = 0{,}5$)`,
    },
    {
      id: '1p-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1p-1-1-ex-5',
        number: '1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om prosentpoeng:',
        subTasks: [
          { label: 'a', task: 'Arbeidsledigheten økte fra 3% til 5%. Hvor mange prosentpoeng økte den?', solution: '$5\\% - 3\\% = 2$ prosentpoeng', answer: 2, multipleChoiceOptions: ['2 prosentpoeng', '2%', '66,7 prosentpoeng', '8 prosentpoeng'] },
          { label: 'b', task: 'En kandidat gikk fra 35% til 42% oppslutning. Hvor mange prosentpoeng økning?', solution: '$42\\% - 35\\% = 7$ prosentpoeng', answer: 7, multipleChoiceOptions: ['7 prosentpoeng', '7%', '20%', '77 prosentpoeng'] },
          { label: 'c', task: 'Strykprosenten sank fra 12% til 8%. Hvor mange prosentpoeng nedgang?', solution: '$12\\% - 8\\% = 4$ prosentpoeng', answer: 4, multipleChoiceOptions: ['4 prosentpoeng', '4%', '33,3%', '20 prosentpoeng'] },
        ],
        solution: 'a) 2 prosentpoeng  b) 7 prosentpoeng  c) 4 prosentpoeng',
        hints: ['Prosentpoeng er forskjellen mellom to prosenttall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Prosent betyr per hundre: $p\\% = \\frac{p}{100}$
- Prosentandel: $\\frac{\\text{del}}{\\text{helhet}} \\cdot 100\\%$
- Prosent av tall: $p\\% \\cdot \\text{tall}$
- Vekstfaktor: $1 \\pm \\frac{p}{100}$
- Prosentpoeng: forskjellen mellom to prosenttall`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_1_2: TextbookChapter = {
  id: '1p-1-2',
  courseId: '1p',
  chapterNumber: '1.2',
  title: 'Renter og sparing',
  description: 'Lær om renter, rentesrente og hvordan pengene dine kan vokse over tid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne renter og rentesrente',
    'forstå forskjellen på enkel rente og rentesrente',
  ],
  content: [
    {
      id: '1p-1-2-intro',
      type: 'text',
      content: `## Renter

Når du setter penger i banken, får du **renter**. Renten er bankens betaling til deg for å låne pengene dine.

**Innskudd** = beløpet du setter inn
**Rentesats** = prosenten du får i rente per år (p.a. = per annum = per år)
**Renter** = beløpet du tjener`,
    },
    {
      id: '1p-1-2-enkel',
      type: 'definition',
      title: 'Enkel rente',
      content: `Ved **enkel rente** beregnes renten bare av det opprinnelige beløpet.

$$\\text{Rente} = \\text{Innskudd} \\cdot \\text{rentesats} \\cdot \\text{antall år}$$

$$R = K \\cdot r \\cdot n$$

der $K$ = kapital/innskudd, $r$ = rentesats som desimaltall, $n$ = antall år`,
    },
    {
      id: '1p-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel rente',
      problem: `Du setter 10 000 kr i banken med 3% årlig rente. Hvor mye har du etter 4 år med enkel rente?`,
      solution: `**Løsning:**

Rente per år $= 10\\,000 \\cdot 0{,}03 = 300$ kr

Etter 4 år:
- Total rente $= 300 \\cdot 4 = 1\\,200$ kr
- Totalt beløp $= 10\\,000 + 1\\,200 = 11\\,200$ kr

Eller med formel: $R = 10\\,000 \\cdot 0{,}03 \\cdot 4 = 1\\,200$ kr`,
    },
    {
      id: '1p-1-2-rentesrente',
      type: 'text',
      content: `## Rentesrente (sammensatt rente)

I virkeligheten bruker bankene **rentesrente**. Det betyr at renten legges til kapitalen, og neste år beregnes renten av det nye, høyere beløpet.

Dette gir **eksponentiell vekst** - pengene dine vokser raskere og raskere!`,
    },
    {
      id: '1p-1-2-def-rentesrente',
      type: 'definition',
      title: 'Rentesrente',
      content: `Ved **rentesrente** beregnes renten av kapitalen inkludert tidligere opptjente renter.

$$K_n = K_0 \\cdot (1 + r)^n$$

der:
- $K_n$ = sluttkapital etter $n$ år
- $K_0$ = startkapital
- $r$ = årlig rentesats som desimaltall
- $n$ = antall år
- $(1 + r)$ = vekstfaktoren`,
    },
    {
      id: '1p-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Rentesrente',
      problem: `Du setter 10 000 kr i banken med 3% årlig rente og rentesrente. Hvor mye har du etter 4 år?`,
      solution: `**Løsning:**

$K_0 = 10\\,000$ kr, $r = 0{,}03$, $n = 4$

$K_4 = 10\\,000 \\cdot (1{,}03)^4 = 10\\,000 \\cdot 1{,}1255 = 11\\,255$ kr

**Sammenligning med enkel rente:**
- Enkel rente ga 11 200 kr
- Rentesrente ga 11 255 kr
- Forskjell: 55 kr mer med rentesrente`,
    },
    {
      id: '1p-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-1-2-ex-1',
        number: '2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn sluttkapital med rentesrente:',
        subTasks: [
          { label: 'a', task: '5000 kr i 3 år med 4% rente', solution: '$5000 \\cdot 1{,}04^3 = 5624{,}32$ kr', answer: 5624, multipleChoiceOptions: ['5624 kr', '5600 kr', '5200 kr', '6000 kr'] },
          { label: 'b', task: '20 000 kr i 5 år med 2,5% rente', solution: '$20\\,000 \\cdot 1{,}025^5 = 22\\,628{,}16$ kr', answer: 22628, multipleChoiceOptions: ['22 628 kr', '22 500 kr', '20 250 kr', '25 000 kr'] },
          { label: 'c', task: '8000 kr i 10 år med 3,5% rente', solution: '$8000 \\cdot 1{,}035^{10} = 11\\,282{,}02$ kr', answer: 11282, multipleChoiceOptions: ['11 282 kr', '10 800 kr', '8350 kr', '12 000 kr'] },
        ],
        solution: 'a) 5624 kr  b) 22 628 kr  c) 11 282 kr',
        hints: ['Bruk formelen K = K₀ · (1+r)ⁿ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-2-tip',
      type: 'tip',
      title: '72-regelen',
      content: `**72-regelen** er en enkel huskeregel for å anslå hvor lang tid det tar å doble pengene:

$$\\text{År for dobling} \\approx \\frac{72}{\\text{rentesats i prosent}}$$

Med 6% rente: $\\frac{72}{6} = 12$ år for å doble pengene.
Med 3% rente: $\\frac{72}{3} = 24$ år for å doble pengene.`,
    },
    {
      id: '1p-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-1-2-ex-2',
        number: '2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk 72-regelen til å anslå:',
        subTasks: [
          { label: 'a', task: 'Hvor mange år tar det å doble pengene med 4% rente?', solution: '$\\frac{72}{4} = 18$ år', answer: 18, multipleChoiceOptions: ['18 år', '4 år', '72 år', '25 år'] },
          { label: 'b', task: 'Hvor mange år tar det å doble pengene med 8% rente?', solution: '$\\frac{72}{8} = 9$ år', answer: 9, multipleChoiceOptions: ['9 år', '8 år', '72 år', '12 år'] },
          { label: 'c', task: 'Hvilken rente trengs for å doble på 6 år?', solution: '$\\frac{72}{6} = 12\\%$', answer: 12, multipleChoiceOptions: ['12%', '6%', '72%', '18%'] },
        ],
        solution: 'a) 18 år  b) 9 år  c) 12%',
        hints: ['72-regelen: År ≈ 72/rentesats'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-2-praktisk',
      type: 'text',
      content: `## Praktisk sparing

I praksis beregnes ofte renten månedlig, kvartalvis eller daglig. Da må vi justere formelen:

$$K_n = K_0 \\cdot \\left(1 + \\frac{r}{m}\\right)^{m \\cdot n}$$

der $m$ = antall ganger renten beregnes per år`,
    },
    {
      id: '1p-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Månedlig renteberegning',
      problem: `Du setter 15 000 kr i banken med 3,6% årlig rente som beregnes månedlig. Hvor mye har du etter 2 år?`,
      solution: `**Løsning:**

$r = 0{,}036$, $m = 12$ (månedlig), $n = 2$ år

Månedlig rente $= \\frac{0{,}036}{12} = 0{,}003$

$K_2 = 15\\,000 \\cdot (1{,}003)^{24} = 15\\,000 \\cdot 1{,}0745 = 16\\,117{,}50$ kr

(Med årlig beregning: $15\\,000 \\cdot 1{,}036^2 = 16\\,099{,}44$ kr - litt mindre)`,
    },
    {
      id: '1p-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-1-2-ex-3',
        number: '2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs praktiske renteoppgaver:',
        subTasks: [
          { label: 'a', task: 'Mari setter 25 000 kr i BSU med 5% rente. Hvor mye har hun etter 3 år?', solution: '$25\\,000 \\cdot 1{,}05^3 = 28\\,940{,}63$ kr', answer: 28941, multipleChoiceOptions: ['28 941 kr', '28 750 kr', '25 500 kr', '30 000 kr'] },
          { label: 'b', task: 'Ole har 50 000 kr. Med 4% rente, hvor mye har han etter 7 år?', solution: '$50\\,000 \\cdot 1{,}04^7 = 65\\,795{,}19$ kr', answer: 65795, multipleChoiceOptions: ['65 795 kr', '64 000 kr', '57 000 kr', '70 000 kr'] },
        ],
        solution: 'a) 28 941 kr  b) 65 795 kr',
        hints: ['Bruk rentesrenteformelen: K = K₀ · (1+r)ⁿ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Enkel rente: $R = K \\cdot r \\cdot n$
- Rentesrente: $K_n = K_0 \\cdot (1 + r)^n$
- 72-regelen: År for dobling ≈ 72/rentesats
- Rentesrente gir eksponentiell vekst`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_1_3: TextbookChapter = {
  id: '1p-1-3',
  courseId: '1p',
  chapterNumber: '1.3',
  title: 'Lån og nedbetaling',
  description: 'Lær om ulike lånetyper, avdrag og hvordan renter påvirker totalkostnaden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå forskjellen på serielån og annuitetslån',
    'beregne terminbeløp og totalkostnad',
  ],
  content: [
    {
      id: '1p-1-3-intro',
      type: 'text',
      content: `## Lån

Et **lån** er penger du låner og må betale tilbake med renter. De viktigste begrepene er:

- **Lånebeløp/hovedstol**: Beløpet du låner
- **Nominell rente**: Oppgitt rentesats
- **Effektiv rente**: Total rentekostnad inkl. gebyrer
- **Avdrag**: Del av lånet du betaler tilbake
- **Termin**: Betalingsperiode (ofte månedlig)
- **Terminbeløp**: Det du betaler hver termin (avdrag + renter)`,
    },
    {
      id: '1p-1-3-serielan',
      type: 'definition',
      title: 'Serielån',
      content: `Ved **serielån** er avdragene like store hver termin.

$$\\text{Avdrag per termin} = \\frac{\\text{Lånebeløp}}{\\text{Antall terminer}}$$

Rentene beregnes av gjenstående gjeld, så terminbeløpet synker over tid.`,
    },
    {
      id: '1p-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Serielån',
      problem: `Du låner 120 000 kr med 6% årlig rente. Lånet skal nedbetales over 4 år med årlige terminer. Lag en nedbetalingsplan for serielån.`,
      solution: `**Løsning:**

Avdrag per år $= \\frac{120\\,000}{4} = 30\\,000$ kr

| År | Gjeld start | Renter (6%) | Avdrag | Terminbeløp | Gjeld slutt |
|:--:|:-----------:|:-----------:|:------:|:-----------:|:-----------:|
| 1  | 120 000     | 7 200       | 30 000 | 37 200      | 90 000      |
| 2  | 90 000      | 5 400       | 30 000 | 35 400      | 60 000      |
| 3  | 60 000      | 3 600       | 30 000 | 33 600      | 30 000      |
| 4  | 30 000      | 1 800       | 30 000 | 31 800      | 0           |

**Totalt betalt**: 37 200 + 35 400 + 33 600 + 31 800 = **138 000 kr**
**Totale renter**: 138 000 - 120 000 = **18 000 kr**`,
    },
    {
      id: '1p-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-1-3-ex-1',
        number: '3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et serielån på 80 000 kr med 5% rente betales ned over 4 år:',
        subTasks: [
          { label: 'a', task: 'Finn årlig avdrag', solution: '$\\frac{80\\,000}{4} = 20\\,000$ kr', answer: 20000, multipleChoiceOptions: ['20 000 kr', '16 000 kr', '4 000 kr', '80 000 kr'] },
          { label: 'b', task: 'Finn renten første år', solution: '$80\\,000 \\cdot 0{,}05 = 4\\,000$ kr', answer: 4000, multipleChoiceOptions: ['4 000 kr', '5 000 kr', '1 000 kr', '20 000 kr'] },
          { label: 'c', task: 'Finn terminbeløp første år', solution: '$20\\,000 + 4\\,000 = 24\\,000$ kr', answer: 24000, multipleChoiceOptions: ['24 000 kr', '20 000 kr', '4 000 kr', '84 000 kr'] },
          { label: 'd', task: 'Finn renten andre år', solution: '$(80\\,000 - 20\\,000) \\cdot 0{,}05 = 3\\,000$ kr', answer: 3000, multipleChoiceOptions: ['3 000 kr', '4 000 kr', '2 000 kr', '5 000 kr'] },
        ],
        solution: 'a) 20 000 kr  b) 4 000 kr  c) 24 000 kr  d) 3 000 kr',
        hints: ['Renter beregnes av gjenstående gjeld'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-3-annuitet',
      type: 'definition',
      title: 'Annuitetslån',
      content: `Ved **annuitetslån** er terminbeløpet likt hver gang.

$$A = K \\cdot \\frac{r}{1 - (1+r)^{-n}}$$

der $A$ = terminbeløp, $K$ = lånebeløp, $r$ = rente per termin, $n$ = antall terminer

I starten er mesteparten renter, mot slutten er mesteparten avdrag.`,
    },
    {
      id: '1p-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Annuitetslån',
      problem: `Du låner 120 000 kr med 6% årlig rente som annuitetslån over 4 år. Finn årlig terminbeløp.`,
      solution: `**Løsning:**

$K = 120\\,000$, $r = 0{,}06$, $n = 4$

$A = 120\\,000 \\cdot \\frac{0{,}06}{1 - (1{,}06)^{-4}}$

$A = 120\\,000 \\cdot \\frac{0{,}06}{1 - 0{,}7921}$

$A = 120\\,000 \\cdot \\frac{0{,}06}{0{,}2079}$

$A = 120\\,000 \\cdot 0{,}2886 = 34\\,632$ kr per år

**Totalt betalt**: 4 × 34 632 = **138 528 kr**
**Totale renter**: 138 528 - 120 000 = **18 528 kr**`,
    },
    {
      id: '1p-1-3-sammenligning',
      type: 'text',
      content: `## Sammenligning av lånetyper

| Egenskap | Serielån | Annuitetslån |
|:---------|:---------|:-------------|
| Avdrag | Like | Varierer |
| Terminbeløp | Synker | Likt |
| Totale renter | Lavere | Høyere |
| Belastning i starten | Høyere | Lavere |`,
    },
    {
      id: '1p-1-3-tip',
      type: 'tip',
      title: 'Velge lånetype',
      content: `- **Serielån** passer hvis du tåler høyere kostnader i starten og vil spare på renter
- **Annuitetslån** passer hvis du ønsker forutsigbare kostnader og lavere belastning i starten
- Boliglån er vanligvis annuitetslån
- Studielån fra Lånekassen er serielån`,
    },
    {
      id: '1p-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-1-3-ex-2',
        number: '3.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign lånetypene:',
        subTasks: [
          { label: 'a', task: 'Hvilken lånetype gir lavest totale renter?', solution: 'Serielån gir lavest totale renter', multipleChoiceOptions: ['Serielån', 'Annuitetslån', 'De er like', 'Kommer an på renten'] },
          { label: 'b', task: 'Hvilken lånetype har synkende terminbeløp?', solution: 'Serielån har synkende terminbeløp', multipleChoiceOptions: ['Serielån', 'Annuitetslån', 'Begge', 'Ingen av dem'] },
          { label: 'c', task: 'Ved et annuitetslån på 100 000 kr over 5 år med 4% rente, ca hvor mye betales totalt?', solution: 'Terminbeløp ≈ 22 463 kr/år, totalt ≈ 112 315 kr', answer: 112315, multipleChoiceOptions: ['Ca 112 000 kr', 'Ca 104 000 kr', 'Ca 120 000 kr', 'Ca 100 000 kr'] },
        ],
        solution: 'a) Serielån  b) Serielån  c) Ca 112 000 kr',
        hints: ['Ved serielån betaler du mer i starten, så gjelden reduseres raskere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-1-3-effektiv',
      type: 'text',
      content: `## Effektiv rente

**Effektiv rente** tar hensyn til alle kostnader ved lånet:
- Nominell rente
- Etableringsgebyr
- Termingebyr
- Andre kostnader

Effektiv rente er alltid høyere enn nominell rente og gir et bedre bilde av hva lånet faktisk koster.`,
    },
    {
      id: '1p-1-3-warning',
      type: 'warning',
      title: 'Pass på!',
      content: `Når du sammenligner lån, se alltid på **effektiv rente**, ikke nominell rente!

Et lån med 5% nominell rente og høye gebyrer kan være dyrere enn et lån med 6% nominell rente og lave gebyrer.`,
    },
    {
      id: '1p-1-3-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- **Serielån**: Like avdrag, synkende terminbeløp, lavere totale renter
- **Annuitetslån**: Like terminbeløp, varierende avdrag, høyere totale renter
- **Effektiv rente** inkluderer alle kostnader og er best for sammenligning`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: ALGEBRA OG LIKNINGER
// ============================================================================

export const CHAPTER_1P_2_1: TextbookChapter = {
  id: '1p-2-1',
  courseId: '1p',
  chapterNumber: '2.1',
  title: 'Algebraiske uttrykk',
  description: 'Lær å forenkle og regne med algebraiske uttrykk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forenkle algebraiske uttrykk',
    'multiplisere inn i parenteser',
  ],
  content: [
    {
      id: '1p-2-1-intro',
      type: 'text',
      content: `## Hva er algebra?

**Algebra** er den delen av matematikken der vi bruker bokstaver (variabler) for å representere tall. Dette gjør at vi kan uttrykke generelle sammenhenger og løse problemer.

Eksempler på algebraiske uttrykk:
- $3x + 5$
- $2a - 4b$
- $x^2 + 2x - 1$`,
    },
    {
      id: '1p-2-1-def',
      type: 'definition',
      title: 'Grunnleggende begreper',
      content: `- **Variabel**: En bokstav som representerer et tall (f.eks. $x$, $y$, $a$)
- **Koeffisient**: Tallet foran variabelen (i $3x$ er 3 koeffisienten)
- **Konstantledd**: Et tall uten variabel (i $2x + 5$ er 5 konstantleddet)
- **Ledd**: Deler av uttrykket adskilt med + eller - (i $3x + 2y - 1$ er det 3 ledd)`,
    },
    {
      id: '1p-2-1-forenkle',
      type: 'text',
      content: `## Forenkle uttrykk

Når vi forenkler algebraiske uttrykk, slår vi sammen **like ledd**. Like ledd har samme variabel(er) med samme eksponent.

- $3x$ og $5x$ er like ledd
- $2x$ og $2y$ er IKKE like ledd
- $x^2$ og $x$ er IKKE like ledd`,
    },
    {
      id: '1p-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forenkle uttrykk',
      problem: `Forenkle:
a) $4x + 3x$
b) $5a - 2a + 3$
c) $2x + 3y - x + 4y$`,
      solution: `**Løsning:**

a) $4x + 3x = 7x$ (slår sammen like ledd)

b) $5a - 2a + 3 = 3a + 3$ (slår sammen a-leddene)

c) $2x + 3y - x + 4y = 2x - x + 3y + 4y = x + 7y$ (sorterer og slår sammen)`,
    },
    {
      id: '1p-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-2-1-ex-1',
        number: '2.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle uttrykkene:',
        subTasks: [
          { label: 'a', task: '$6x + 2x$', solution: '$8x$', multipleChoiceOptions: ['8x', '12x', '62x', '8x²'] },
          { label: 'b', task: '$9a - 4a$', solution: '$5a$', multipleChoiceOptions: ['5a', '13a', '5', '36a'] },
          { label: 'c', task: '$3x + 5 + 2x - 1$', solution: '$5x + 4$', multipleChoiceOptions: ['5x + 4', '5x + 6', '10x', '3x + 7'] },
          { label: 'd', task: '$4a + 2b - a + 3b$', solution: '$3a + 5b$', multipleChoiceOptions: ['3a + 5b', '5a + 5b', '7ab', '4a + 5b'] },
        ],
        solution: 'a) 8x  b) 5a  c) 5x + 4  d) 3a + 5b',
        hints: ['Slå sammen like ledd - ledd med samme variabel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-1-parentes',
      type: 'text',
      content: `## Multiplikasjon med parentes

Når vi ganger et tall med en parentes, ganger vi tallet med hvert ledd inni parentesen.

$$a(b + c) = ab + ac$$

Dette kalles **distributiv lov**.`,
    },
    {
      id: '1p-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Gange inn i parentes',
      problem: `Regn ut:
a) $3(x + 4)$
b) $-2(a - 5)$
c) $5(2x - 3) + 2x$`,
      solution: `**Løsning:**

a) $3(x + 4) = 3 \\cdot x + 3 \\cdot 4 = 3x + 12$

b) $-2(a - 5) = -2 \\cdot a + (-2) \\cdot (-5) = -2a + 10$

c) $5(2x - 3) + 2x = 10x - 15 + 2x = 12x - 15$`,
    },
    {
      id: '1p-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Multipliser inn i parentesen og forenkle:',
        subTasks: [
          { label: 'a', task: '$4(x + 2)$', solution: '$4x + 8$', multipleChoiceOptions: ['4x + 8', '4x + 2', 'x + 8', '8x'] },
          { label: 'b', task: '$-3(y - 4)$', solution: '$-3y + 12$', multipleChoiceOptions: ['-3y + 12', '-3y - 12', '3y - 12', '-7y'] },
          { label: 'c', task: '$2(3a + 1) - 4a$', solution: '$6a + 2 - 4a = 2a + 2$', multipleChoiceOptions: ['2a + 2', '6a + 2', '2a - 2', '10a'] },
          { label: 'd', task: '$5(x - 2) + 3(x + 1)$', solution: '$5x - 10 + 3x + 3 = 8x - 7$', multipleChoiceOptions: ['8x - 7', '8x - 13', '2x - 7', '8x + 7'] },
        ],
        solution: 'a) 4x + 8  b) -3y + 12  c) 2a + 2  d) 8x - 7',
        hints: ['Gang tallet med hvert ledd i parentesen', 'Husk fortegnsreglene: minus ganger minus gir pluss'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-1-warning',
      type: 'warning',
      title: 'Vanlig feil',
      content: `Pass på fortegnene når du ganger inn i parenteser!

$-2(x - 3) = -2x + 6$ (ikke $-2x - 6$)

Minus ganger minus gir pluss!`,
    },
    {
      id: '1p-2-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Slå sammen like ledd (samme variabel)
- Distributiv lov: $a(b + c) = ab + ac$
- Pass på fortegnene ved negative tall`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_2_2: TextbookChapter = {
  id: '1p-2-2',
  courseId: '1p',
  chapterNumber: '2.2',
  title: 'Lineære likninger',
  description: 'Lær å løse likninger med én ukjent.',
  estimatedMinutes: 45,
  competenceGoals: [
    'løse lineære likninger',
    'sette opp likninger fra tekstoppgaver',
  ],
  content: [
    {
      id: '1p-2-2-intro',
      type: 'text',
      content: `## Hva er en likning?

En **likning** er en matematisk setning som sier at to uttrykk er like. Å **løse** likningen betyr å finne verdien av den ukjente som gjør at likheten stemmer.

For eksempel: $2x + 3 = 11$

Løsningen er $x = 4$, fordi $2 \\cdot 4 + 3 = 11$ ✓`,
    },
    {
      id: '1p-2-2-def',
      type: 'definition',
      title: 'Lineær likning',
      content: `En **lineær likning** (førstegradslikning) har formen:

$$ax + b = c$$

der $x$ er den ukjente og $a$, $b$, $c$ er tall.

Eksempler: $3x + 5 = 14$, $2x - 7 = 3$, $x + 4 = 10$`,
    },
    {
      id: '1p-2-2-metode',
      type: 'text',
      content: `## Løse likninger

Målet er å få $x$ alene på venstre side. Vi bruker disse reglene:

1. **Addisjon/subtraksjon**: Vi kan legge til eller trekke fra det samme på begge sider
2. **Multiplikasjon/divisjon**: Vi kan gange eller dele med det samme på begge sider

**Viktig**: Det vi gjør på den ene siden, må vi gjøre på den andre siden også!`,
    },
    {
      id: '1p-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel likning',
      problem: 'Løs likningen $3x + 5 = 20$',
      solution: `**Løsning:**

$3x + 5 = 20$

Trekk fra 5 på begge sider:
$3x = 20 - 5$
$3x = 15$

Del på 3 på begge sider:
$x = \\frac{15}{3}$
$x = 5$

**Kontroll:** $3 \\cdot 5 + 5 = 15 + 5 = 20$ ✓`,
    },
    {
      id: '1p-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-2-2-ex-1',
        number: '2.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene:',
        subTasks: [
          { label: 'a', task: '$x + 7 = 12$', solution: '$x = 12 - 7 = 5$', answer: 5, multipleChoiceOptions: ['5', '19', '7', '-5'] },
          { label: 'b', task: '$2x = 16$', solution: '$x = 16 \\div 2 = 8$', answer: 8, multipleChoiceOptions: ['8', '32', '14', '4'] },
          { label: 'c', task: '$4x - 3 = 13$', solution: '$4x = 16$, $x = 4$', answer: 4, multipleChoiceOptions: ['4', '16', '2,5', '10'] },
          { label: 'd', task: '$5x + 2 = 27$', solution: '$5x = 25$, $x = 5$', answer: 5, multipleChoiceOptions: ['5', '25', '29', '5,8'] },
        ],
        solution: 'a) x = 5  b) x = 8  c) x = 4  d) x = 5',
        hints: ['Få x alene på venstre side', 'Det du gjør på én side, må du gjøre på den andre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Likning med x på begge sider',
      problem: 'Løs likningen $5x - 3 = 2x + 12$',
      solution: `**Løsning:**

$5x - 3 = 2x + 12$

Trekk fra $2x$ på begge sider (samle x-leddene):
$5x - 2x - 3 = 12$
$3x - 3 = 12$

Legg til 3 på begge sider:
$3x = 15$

Del på 3:
$x = 5$

**Kontroll:** Venstre: $5 \\cdot 5 - 3 = 22$. Høyre: $2 \\cdot 5 + 12 = 22$ ✓`,
    },
    {
      id: '1p-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-2-2-ex-2',
        number: '2.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene med x på begge sider:',
        subTasks: [
          { label: 'a', task: '$4x + 2 = 2x + 10$', solution: '$2x = 8$, $x = 4$', answer: 4, multipleChoiceOptions: ['4', '8', '6', '2'] },
          { label: 'b', task: '$6x - 5 = 3x + 7$', solution: '$3x = 12$, $x = 4$', answer: 4, multipleChoiceOptions: ['4', '12', '2', '6'] },
          { label: 'c', task: '$7x + 1 = 4x + 16$', solution: '$3x = 15$, $x = 5$', answer: 5, multipleChoiceOptions: ['5', '15', '3', '17'] },
          { label: 'd', task: '$3x - 8 = 5x - 20$', solution: '$-2x = -12$, $x = 6$', answer: 6, multipleChoiceOptions: ['6', '-6', '12', '4'] },
        ],
        solution: 'a) x = 4  b) x = 4  c) x = 5  d) x = 6',
        hints: ['Samle x-leddene på én side først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-2-parentes',
      type: 'text',
      content: `## Likninger med parenteser

Når likningen har parenteser, må vi først multiplisere dem ut før vi løser likningen.`,
    },
    {
      id: '1p-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Likning med parentes',
      problem: 'Løs likningen $3(x + 2) = 21$',
      solution: `**Løsning:**

$3(x + 2) = 21$

Gang ut parentesen:
$3x + 6 = 21$

Trekk fra 6:
$3x = 15$

Del på 3:
$x = 5$

**Kontroll:** $3(5 + 2) = 3 \\cdot 7 = 21$ ✓`,
    },
    {
      id: '1p-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene med parenteser:',
        subTasks: [
          { label: 'a', task: '$2(x + 4) = 14$', solution: '$2x + 8 = 14$, $x = 3$', answer: 3, multipleChoiceOptions: ['3', '7', '11', '5'] },
          { label: 'b', task: '$4(x - 3) = 20$', solution: '$4x - 12 = 20$, $x = 8$', answer: 8, multipleChoiceOptions: ['8', '32', '5', '2'] },
          { label: 'c', task: '$5(2x + 1) = 35$', solution: '$10x + 5 = 35$, $x = 3$', answer: 3, multipleChoiceOptions: ['3', '30', '6', '7'] },
          { label: 'd', task: '$3(x - 2) + 4 = 2x + 5$', solution: '$3x - 6 + 4 = 2x + 5$, $x = 7$', answer: 7, multipleChoiceOptions: ['7', '3', '5', '1'] },
        ],
        solution: 'a) x = 3  b) x = 8  c) x = 3  d) x = 7',
        hints: ['Gang ut parentesen først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-2-tip',
      type: 'tip',
      title: 'Kontroller alltid svaret!',
      content: `Sett svaret inn i den opprinnelige likningen og sjekk at begge sider blir like. Dette hjelper deg å oppdage regnefeil.`,
    },
    {
      id: '1p-2-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Få den ukjente alene på én side
- Det du gjør på én side, må du gjøre på den andre
- Gang ut parenteser før du løser
- Kontroller svaret ved å sette det inn i likningen`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_2_3: TextbookChapter = {
  id: '1p-2-3',
  courseId: '1p',
  chapterNumber: '2.3',
  title: 'Formler og likninger i praksis',
  description: 'Lær å sette opp og løse likninger fra praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'sette opp likninger fra tekstoppgaver',
    'omforme formler',
  ],
  content: [
    {
      id: '1p-2-3-intro',
      type: 'text',
      content: `## Fra tekst til likning

Mange praktiske problemer kan løses ved å sette opp en likning. Fremgangsmåte:

1. **Les oppgaven nøye** - hva er ukjent?
2. **Velg variabel** - la den ukjente være $x$
3. **Sett opp likningen** - oversett teksten til matematikk
4. **Løs likningen**
5. **Kontroller svaret** - gir det mening?`,
    },
    {
      id: '1p-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tekstoppgave',
      problem: 'Maria er 3 år eldre enn sin bror Lars. Til sammen er de 25 år. Hvor gamle er de?',
      solution: `**Løsning:**

La $x$ = Lars sin alder

Maria er 3 år eldre: $x + 3$

Til sammen 25 år:
$x + (x + 3) = 25$
$2x + 3 = 25$
$2x = 22$
$x = 11$

**Svar:** Lars er 11 år og Maria er 14 år.

**Kontroll:** $11 + 14 = 25$ ✓ og $14 - 11 = 3$ ✓`,
    },
    {
      id: '1p-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-2-3-ex-1',
        number: '2.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp og løs likning:',
        subTasks: [
          { label: 'a', task: 'Et tall pluss det dobbelte av tallet er 27. Finn tallet.', solution: '$x + 2x = 27$, $3x = 27$, $x = 9$', answer: 9, multipleChoiceOptions: ['9', '27', '13,5', '18'] },
          { label: 'b', task: 'Per har 50 kr mer enn Kari. Til sammen har de 230 kr. Hvor mye har Kari?', solution: '$x + (x + 50) = 230$, $x = 90$', answer: 90, multipleChoiceOptions: ['90 kr', '140 kr', '115 kr', '180 kr'] },
          { label: 'c', task: 'En bukse koster 200 kr mer enn en t-skjorte. Til sammen koster de 500 kr. Hva koster t-skjorten?', solution: '$x + (x + 200) = 500$, $x = 150$', answer: 150, multipleChoiceOptions: ['150 kr', '350 kr', '250 kr', '300 kr'] },
        ],
        solution: 'a) 9  b) Kari har 90 kr  c) T-skjorten koster 150 kr',
        hints: ['La x være det du skal finne', 'Skriv ned hva oppgaven sier matematisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-3-formler',
      type: 'text',
      content: `## Omforme formler

En **formel** viser sammenhengen mellom flere størrelser. Noen ganger må vi løse formelen for en annen variabel enn den som står alene.

Eksempel: Formelen for fart er $v = \\frac{s}{t}$

Hvis vi vil finne strekningen $s$: $s = v \\cdot t$
Hvis vi vil finne tiden $t$: $t = \\frac{s}{v}$`,
    },
    {
      id: '1p-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Omforme formel',
      problem: 'Formelen for omkrets av et rektangel er $O = 2l + 2b$. Løs formelen for $l$.',
      solution: `**Løsning:**

$O = 2l + 2b$

Trekk fra $2b$ på begge sider:
$O - 2b = 2l$

Del på 2:
$l = \\frac{O - 2b}{2}$

Eller: $l = \\frac{O}{2} - b$`,
    },
    {
      id: '1p-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-2-3-ex-2',
        number: '2.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omform formlene slik det er beskrevet:',
        subTasks: [
          { label: 'a', task: '$A = l \\cdot b$ - løs for $b$', solution: '$b = \\frac{A}{l}$', multipleChoiceOptions: ['b = A/l', 'b = A·l', 'b = A - l', 'b = l/A'] },
          { label: 'b', task: '$v = v_0 + at$ - løs for $t$', solution: '$t = \\frac{v - v_0}{a}$', multipleChoiceOptions: ['t = (v - v₀)/a', 't = v - v₀ - a', 't = a(v - v₀)', 't = v/a - v₀'] },
          { label: 'c', task: '$F = ma$ - løs for $m$', solution: '$m = \\frac{F}{a}$', multipleChoiceOptions: ['m = F/a', 'm = F·a', 'm = F - a', 'm = a/F'] },
          { label: 'd', task: '$P = 2a + 2b$ - løs for $a$', solution: '$a = \\frac{P - 2b}{2}$', multipleChoiceOptions: ['a = (P - 2b)/2', 'a = P - 2b', 'a = P/2 + b', 'a = 2(P - b)'] },
        ],
        solution: 'a) b = A/l  b) t = (v - v₀)/a  c) m = F/a  d) a = (P - 2b)/2',
        hints: ['Behandle formelen som en likning', 'Få den ønskede variabelen alene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-3-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Likninger brukes til å løse mange praktiske problemer:
- Beregne ukjente lengder og arealer
- Finne priser og rabatter
- Løse problemer med hastighet, tid og avstand
- Økonomiske beregninger`,
    },
    {
      id: '1p-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Prisoppgave',
      problem: 'En vare koster 450 kr etter 25% rabatt. Hva var prisen før rabatt?',
      solution: `**Løsning:**

La $x$ = pris før rabatt

Pris etter 25% rabatt = $x \\cdot 0{,}75$ (vekstfaktor for 25% nedgang)

$x \\cdot 0{,}75 = 450$

$x = \\frac{450}{0{,}75} = 600$

**Svar:** Prisen før rabatt var 600 kr.

**Kontroll:** $600 \\cdot 0{,}75 = 450$ ✓`,
    },
    {
      id: '1p-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de praktiske oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bok koster 180 kr etter 40% rabatt. Hva var originalprisen?', solution: '$x \\cdot 0{,}60 = 180$, $x = 300$ kr', answer: 300, multipleChoiceOptions: ['300 kr', '252 kr', '108 kr', '450 kr'] },
          { label: 'b', task: 'Ola kjører 120 km på 1,5 timer. Hva er gjennomsnittsfarten?', solution: '$v = \\frac{120}{1{,}5} = 80$ km/t', answer: 80, multipleChoiceOptions: ['80 km/t', '180 km/t', '60 km/t', '90 km/t'] },
          { label: 'c', task: 'En bil kjører 90 km/t. Hvor lang tid tar det å kjøre 225 km?', solution: '$t = \\frac{225}{90} = 2{,}5$ timer', answer: 2.5, multipleChoiceOptions: ['2,5 timer', '2 timer', '3 timer', '135 min'] },
        ],
        solution: 'a) 300 kr  b) 80 km/t  c) 2,5 timer',
        hints: ['Sett opp likning ut fra det du vet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-2-3-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Les oppgaven nøye og velg variabel for det ukjente
- Oversett tekst til likning
- Løs likningen og kontroller svaret
- Formler kan omformes for å løse for ulike variabler`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: LINEÆRE FUNKSJONER
// ============================================================================

export const CHAPTER_1P_3_1: TextbookChapter = {
  id: '1p-3-1',
  courseId: '1p',
  chapterNumber: '3.1',
  title: 'Hva er en funksjon?',
  description: 'Lær hva en funksjon er og hvordan vi kan fremstille funksjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forstå funksjonsbegrepet',
    'lese og tolke grafer',
  ],
  content: [
    {
      id: '1p-3-1-intro',
      type: 'text',
      content: `## Hva er en funksjon?

En **funksjon** er en sammenheng mellom to størrelser der hver inngangsverdi gir nøyaktig én utgangsverdi.

Tenk på en funksjon som en maskin:
- Du putter inn et tall (inngangsverdi, $x$)
- Maskinen gjør noe med tallet
- Du får ut et resultat (utgangsverdi, $f(x)$)`,
    },
    {
      id: '1p-3-1-def',
      type: 'definition',
      title: 'Funksjon',
      content: `En **funksjon** $f$ er en regel som til hver verdi av $x$ gir nøyaktig én verdi $f(x)$.

- $x$ kalles den **uavhengige variabelen** (input)
- $f(x)$ kalles den **avhengige variabelen** (output)
- $f(x)$ leses "f av x"`,
    },
    {
      id: '1p-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Funksjonsverdi',
      problem: `Gitt funksjonen $f(x) = 2x + 3$

Finn:
a) $f(0)$
b) $f(4)$
c) $f(-2)$`,
      solution: `**Løsning:**

a) $f(0) = 2 \\cdot 0 + 3 = 0 + 3 = 3$

b) $f(4) = 2 \\cdot 4 + 3 = 8 + 3 = 11$

c) $f(-2) = 2 \\cdot (-2) + 3 = -4 + 3 = -1$`,
    },
    {
      id: '1p-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-3-1-ex-1',
        number: '3.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gitt $f(x) = 3x - 2$. Finn:',
        subTasks: [
          { label: 'a', task: '$f(1)$', solution: '$f(1) = 3 \\cdot 1 - 2 = 1$', answer: 1, multipleChoiceOptions: ['1', '3', '-1', '5'] },
          { label: 'b', task: '$f(0)$', solution: '$f(0) = 3 \\cdot 0 - 2 = -2$', answer: -2, multipleChoiceOptions: ['-2', '0', '2', '-3'] },
          { label: 'c', task: '$f(5)$', solution: '$f(5) = 3 \\cdot 5 - 2 = 13$', answer: 13, multipleChoiceOptions: ['13', '15', '10', '17'] },
          { label: 'd', task: '$f(-3)$', solution: '$f(-3) = 3 \\cdot (-3) - 2 = -11$', answer: -11, multipleChoiceOptions: ['-11', '-9', '-7', '7'] },
        ],
        solution: 'a) 1  b) -2  c) 13  d) -11',
        hints: ['Sett inn x-verdien i funksjonsuttrykket'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-1-graf',
      type: 'text',
      content: `## Grafer

En **graf** er en visuell fremstilling av en funksjon i et koordinatsystem.

- **x-aksen** er den horisontale aksen
- **y-aksen** er den vertikale aksen
- Hvert punkt på grafen har koordinater $(x, y)$ der $y = f(x)$`,
    },
    {
      id: '1p-3-1-tip',
      type: 'tip',
      title: 'Lese av grafer',
      content: `For å finne $f(3)$ fra en graf:
1. Finn $x = 3$ på x-aksen
2. Gå loddrett opp til grafen
3. Les av y-verdien der du treffer grafen

Det er $y$-verdien du finner som er $f(3)$.`,
    },
    {
      id: '1p-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-3-1-ex-2',
        number: '3.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt $g(x) = -2x + 6$. Finn:',
        subTasks: [
          { label: 'a', task: '$g(0)$', solution: '$g(0) = -2 \\cdot 0 + 6 = 6$', answer: 6, multipleChoiceOptions: ['6', '0', '-6', '4'] },
          { label: 'b', task: '$g(3)$', solution: '$g(3) = -2 \\cdot 3 + 6 = 0$', answer: 0, multipleChoiceOptions: ['0', '6', '-6', '12'] },
          { label: 'c', task: 'Finn $x$ når $g(x) = 10$', solution: '$-2x + 6 = 10$, $-2x = 4$, $x = -2$', answer: -2, multipleChoiceOptions: ['-2', '2', '-8', '8'] },
          { label: 'd', task: 'Finn $x$ når $g(x) = 0$', solution: '$-2x + 6 = 0$, $x = 3$', answer: 3, multipleChoiceOptions: ['3', '-3', '6', '0'] },
        ],
        solution: 'a) 6  b) 0  c) x = -2  d) x = 3',
        hints: ['For c) og d): Sett opp og løs en likning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- En funksjon gir nøyaktig én utgangsverdi for hver inngangsverdi
- $f(x)$ betyr funksjonsverdien når vi setter inn $x$
- Grafen viser sammenhengen mellom $x$ og $f(x)$ visuelt`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_3_2: TextbookChapter = {
  id: '1p-3-2',
  courseId: '1p',
  chapterNumber: '3.2',
  title: 'Lineære funksjoner',
  description: 'Lær om lineære funksjoner, stigningstall og konstantledd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og tolke lineære funksjoner',
    'finne stigningstall og konstantledd',
  ],
  content: [
    {
      id: '1p-3-2-intro',
      type: 'text',
      content: `## Lineære funksjoner

En **lineær funksjon** har formen:

$$f(x) = ax + b$$

Grafen til en lineær funksjon er alltid en **rett linje**.

- $a$ kalles **stigningstallet** - forteller hvor bratt linjen er
- $b$ kalles **konstantleddet** - forteller hvor linjen krysser y-aksen`,
    },
    {
      id: '1p-3-2-def-stigning',
      type: 'definition',
      title: 'Stigningstall',
      content: `**Stigningstallet** $a$ forteller hvor mye $y$ endres når $x$ øker med 1.

$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

- $a > 0$: Linjen stiger (går oppover mot høyre)
- $a < 0$: Linjen synker (går nedover mot høyre)
- $a = 0$: Linjen er horisontal`,
    },
    {
      id: '1p-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne stigningstall',
      problem: 'Finn stigningstallet til linjen som går gjennom punktene $(1, 3)$ og $(4, 9)$.',
      solution: `**Løsning:**

$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$

Stigningstallet er $a = 2$.

Det betyr at $y$ øker med 2 hver gang $x$ øker med 1.`,
    },
    {
      id: '1p-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-3-2-ex-1',
        number: '3.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn stigningstallet til linjen gjennom punktene:',
        subTasks: [
          { label: 'a', task: '$(2, 5)$ og $(6, 13)$', solution: '$a = \\frac{13-5}{6-2} = \\frac{8}{4} = 2$', answer: 2, multipleChoiceOptions: ['2', '4', '8', '0,5'] },
          { label: 'b', task: '$(0, 4)$ og $(3, 10)$', solution: '$a = \\frac{10-4}{3-0} = \\frac{6}{3} = 2$', answer: 2, multipleChoiceOptions: ['2', '6', '3', '14'] },
          { label: 'c', task: '$(1, 8)$ og $(5, 0)$', solution: '$a = \\frac{0-8}{5-1} = \\frac{-8}{4} = -2$', answer: -2, multipleChoiceOptions: ['-2', '2', '-8', '8'] },
          { label: 'd', task: '$(3, 7)$ og $(9, 7)$', solution: '$a = \\frac{7-7}{9-3} = \\frac{0}{6} = 0$', answer: 0, multipleChoiceOptions: ['0', '7', '6', '14'] },
        ],
        solution: 'a) 2  b) 2  c) -2  d) 0',
        hints: ['Bruk formelen: a = (y₂ - y₁)/(x₂ - x₁)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-2-konstantledd',
      type: 'text',
      content: `## Konstantleddet

**Konstantleddet** $b$ er y-verdien når $x = 0$. Det er punktet der grafen krysser y-aksen.

For funksjonen $f(x) = 2x + 3$:
- Når $x = 0$: $f(0) = 2 \\cdot 0 + 3 = 3$
- Konstantleddet er $b = 3$`,
    },
    {
      id: '1p-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne funksjonsuttrykk',
      problem: 'Finn funksjonsuttrykket til linjen som går gjennom $(2, 5)$ og $(4, 9)$.',
      solution: `**Løsning:**

**Steg 1:** Finn stigningstallet
$a = \\frac{9 - 5}{4 - 2} = \\frac{4}{2} = 2$

**Steg 2:** Bruk formen $f(x) = ax + b$ og ett av punktene
$f(x) = 2x + b$

Sett inn $(2, 5)$: $5 = 2 \\cdot 2 + b$
$5 = 4 + b$
$b = 1$

**Svar:** $f(x) = 2x + 1$`,
    },
    {
      id: '1p-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-3-2-ex-2',
        number: '3.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket:',
        subTasks: [
          { label: 'a', task: 'Stigningstall 3, går gjennom $(0, 2)$', solution: '$f(x) = 3x + 2$', multipleChoiceOptions: ['f(x) = 3x + 2', 'f(x) = 2x + 3', 'f(x) = 3x - 2', 'f(x) = 3x'] },
          { label: 'b', task: 'Stigningstall -2, går gjennom $(0, 5)$', solution: '$f(x) = -2x + 5$', multipleChoiceOptions: ['f(x) = -2x + 5', 'f(x) = 2x + 5', 'f(x) = -2x - 5', 'f(x) = 5x - 2'] },
          { label: 'c', task: 'Går gjennom $(0, 4)$ og $(2, 10)$', solution: '$a = 3$, $f(x) = 3x + 4$', multipleChoiceOptions: ['f(x) = 3x + 4', 'f(x) = 4x + 3', 'f(x) = 2x + 4', 'f(x) = 10x'] },
          { label: 'd', task: 'Går gjennom $(1, 3)$ og $(3, 7)$', solution: '$a = 2$, $b = 1$, $f(x) = 2x + 1$', multipleChoiceOptions: ['f(x) = 2x + 1', 'f(x) = 2x + 3', 'f(x) = x + 2', 'f(x) = 4x'] },
        ],
        solution: 'a) f(x) = 3x + 2  b) f(x) = -2x + 5  c) f(x) = 3x + 4  d) f(x) = 2x + 1',
        hints: ['Finn stigningstallet først, deretter konstantleddet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-2-praktisk',
      type: 'text',
      content: `## Praktiske eksempler

Lineære funksjoner brukes ofte til å modellere praktiske sammenhenger:

- **Taxi**: Startpris + pris per km → $f(x) = ax + b$
- **Mobilabonnement**: Fastpris + pris per minutt
- **Strøm**: Fastbeløp + pris per kWh`,
    },
    {
      id: '1p-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Praktisk problem',
      problem: 'En taxi har startpris 50 kr og koster 15 kr per km. Sett opp en funksjon for totalpris og finn prisen for 8 km.',
      solution: `**Løsning:**

La $x$ = antall km

$f(x) = 15x + 50$

For 8 km:
$f(8) = 15 \\cdot 8 + 50 = 120 + 50 = 170$ kr`,
    },
    {
      id: '1p-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs de praktiske oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et mobilabonnement koster 99 kr/mnd pluss 0,50 kr per minutt. Sett opp funksjonen f(x) der x er antall minutter.', solution: '$f(x) = 0{,}50x + 99$', multipleChoiceOptions: ['f(x) = 0,50x + 99', 'f(x) = 99x + 0,50', 'f(x) = 99,50x', 'f(x) = 0,50x - 99'] },
          { label: 'b', task: 'Finn totalkostnaden for 200 minutter med abonnementet over.', solution: '$f(200) = 0{,}50 \\cdot 200 + 99 = 199$ kr', answer: 199, multipleChoiceOptions: ['199 kr', '299 kr', '100 kr', '99,50 kr'] },
          { label: 'c', task: 'Strømprisen er 1,20 kr/kWh pluss 50 kr fastbeløp. Hva koster 150 kWh?', solution: '$f(150) = 1{,}20 \\cdot 150 + 50 = 230$ kr', answer: 230, multipleChoiceOptions: ['230 kr', '180 kr', '200 kr', '170 kr'] },
        ],
        solution: 'a) f(x) = 0,50x + 99  b) 199 kr  c) 230 kr',
        hints: ['Identifiser hva som er stigningstall (pris per enhet) og konstantledd (fastpris)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Lineær funksjon: $f(x) = ax + b$
- $a$ = stigningstall (endring i y per enhet x)
- $b$ = konstantledd (skjæring med y-aksen)
- Stigningstall: $a = \\frac{y_2 - y_1}{x_2 - x_1}$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_3_3: TextbookChapter = {
  id: '1p-3-3',
  courseId: '1p',
  chapterNumber: '3.3',
  title: 'Tegne og tolke grafer',
  description: 'Lær å tegne lineære grafer og tolke hva de forteller.',
  estimatedMinutes: 45,
  competenceGoals: [
    'tegne grafer for lineære funksjoner',
    'tolke praktiske grafer',
  ],
  content: [
    {
      id: '1p-3-3-intro',
      type: 'text',
      content: `## Tegne grafer

For å tegne grafen til en lineær funksjon trenger vi bare **to punkter** (fordi linjen er rett).

**Metode 1:** Lag en verditabell med to x-verdier
**Metode 2:** Bruk konstantleddet og stigningstallet`,
    },
    {
      id: '1p-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tegne graf med verditabell',
      problem: 'Tegn grafen til $f(x) = 2x - 1$',
      solution: `**Løsning:**

Lag verditabell:

| $x$ | $f(x) = 2x - 1$ |
|:---:|:---------------:|
| 0   | $2 \\cdot 0 - 1 = -1$ |
| 2   | $2 \\cdot 2 - 1 = 3$ |
| 4   | $2 \\cdot 4 - 1 = 7$ |

Punktene $(0, -1)$, $(2, 3)$ og $(4, 7)$ ligger på linjen.

Tegn inn punktene og trekk en rett linje gjennom dem.`,
    },
    {
      id: '1p-3-3-tip',
      type: 'tip',
      title: 'Rask metode',
      content: `For $f(x) = ax + b$:
1. Start i punktet $(0, b)$ på y-aksen
2. Bruk stigningstallet: gå 1 til høyre, $a$ oppover (eller nedover hvis $a < 0$)
3. Trekk linjen gjennom punktene`,
    },
    {
      id: '1p-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-3-3-ex-1',
        number: '3.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag verditabell og tegn grafen for:',
        subTasks: [
          { label: 'a', task: '$f(x) = x + 2$', solution: 'Punkter: $(0, 2)$, $(2, 4)$, $(4, 6)$', multipleChoiceOptions: ['Starter i (0, 2), stiger med 1', 'Starter i (0, 1), stiger med 2', 'Starter i (2, 0), stiger med 1', 'Starter i (0, -2), stiger med 1'] },
          { label: 'b', task: '$f(x) = 3x - 2$', solution: 'Punkter: $(0, -2)$, $(1, 1)$, $(2, 4)$', multipleChoiceOptions: ['Starter i (0, -2), stiger med 3', 'Starter i (0, 3), stiger med -2', 'Starter i (-2, 0), stiger med 3', 'Starter i (0, 2), stiger med 3'] },
          { label: 'c', task: '$f(x) = -x + 4$', solution: 'Punkter: $(0, 4)$, $(2, 2)$, $(4, 0)$', multipleChoiceOptions: ['Starter i (0, 4), synker med 1', 'Starter i (0, -1), stiger med 4', 'Starter i (4, 0), synker med 1', 'Starter i (0, 4), stiger med 1'] },
        ],
        solution: 'Tegn punktene og trekk rett linje',
        hints: ['Velg x = 0, 1, 2 eller andre enkle verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-3-tolke',
      type: 'text',
      content: `## Tolke grafer

Grafer inneholder mye informasjon:

- **Skjæring med y-aksen**: Startverdien (når $x = 0$)
- **Skjæring med x-aksen**: Nullpunktet (når $f(x) = 0$)
- **Stigning**: Positiv = økende, negativ = synkende
- **Brattheten**: Jo større $|a|$, jo brattere linje`,
    },
    {
      id: '1p-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne nullpunkt',
      problem: 'Finn nullpunktet til $f(x) = 3x - 6$',
      solution: `**Løsning:**

Nullpunktet er der $f(x) = 0$:

$3x - 6 = 0$
$3x = 6$
$x = 2$

Nullpunktet er $(2, 0)$.

Grafen krysser x-aksen når $x = 2$.`,
    },
    {
      id: '1p-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-3-3-ex-2',
        number: '3.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktet (x-verdien der f(x) = 0):',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x - 8$', solution: '$2x = 8$, $x = 4$', answer: 4, multipleChoiceOptions: ['4', '8', '2', '-4'] },
          { label: 'b', task: '$f(x) = -3x + 9$', solution: '$-3x = -9$, $x = 3$', answer: 3, multipleChoiceOptions: ['3', '-3', '9', '-9'] },
          { label: 'c', task: '$f(x) = 4x + 12$', solution: '$4x = -12$, $x = -3$', answer: -3, multipleChoiceOptions: ['-3', '3', '12', '-12'] },
          { label: 'd', task: '$f(x) = \\frac{1}{2}x - 5$', solution: '$\\frac{1}{2}x = 5$, $x = 10$', answer: 10, multipleChoiceOptions: ['10', '5', '2,5', '-10'] },
        ],
        solution: 'a) x = 4  b) x = 3  c) x = -3  d) x = 10',
        hints: ['Sett f(x) = 0 og løs likningen for x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-3-praktisk',
      type: 'text',
      content: `## Skjæringspunkt mellom grafer

Når to linjer krysser hverandre, finner vi skjæringspunktet ved å sette funksjonene lik hverandre og løse likningen.`,
    },
    {
      id: '1p-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Skjæringspunkt',
      problem: 'Finn skjæringspunktet mellom $f(x) = 2x + 1$ og $g(x) = -x + 7$',
      solution: `**Løsning:**

Sett $f(x) = g(x)$:
$2x + 1 = -x + 7$
$3x = 6$
$x = 2$

Finn y-verdien: $f(2) = 2 \\cdot 2 + 1 = 5$

**Skjæringspunkt:** $(2, 5)$`,
    },
    {
      id: '1p-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn skjæringspunktet mellom grafene:',
        subTasks: [
          { label: 'a', task: '$f(x) = x + 3$ og $g(x) = 2x + 1$', solution: '$x + 3 = 2x + 1$, $x = 2$, punkt $(2, 5)$', multipleChoiceOptions: ['(2, 5)', '(1, 3)', '(3, 6)', '(2, 4)'] },
          { label: 'b', task: '$f(x) = 3x - 2$ og $g(x) = x + 4$', solution: '$3x - 2 = x + 4$, $x = 3$, punkt $(3, 7)$', multipleChoiceOptions: ['(3, 7)', '(2, 6)', '(4, 8)', '(3, 4)'] },
          { label: 'c', task: '$f(x) = -2x + 10$ og $g(x) = x + 1$', solution: '$-2x + 10 = x + 1$, $x = 3$, punkt $(3, 4)$', multipleChoiceOptions: ['(3, 4)', '(4, 5)', '(2, 3)', '(3, 3)'] },
        ],
        solution: 'a) (2, 5)  b) (3, 7)  c) (3, 4)',
        hints: ['Sett de to funksjonene lik hverandre og løs for x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-3-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Tegn graf med verditabell eller stigningstall + konstantledd
- Nullpunkt: løs $f(x) = 0$
- Skjæringspunkt: løs $f(x) = g(x)$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: GEOMETRI OG MÅLING
// ============================================================================

export const CHAPTER_1P_4_1: TextbookChapter = {
  id: '1p-4-1',
  courseId: '1p',
  chapterNumber: '4.1',
  title: 'Areal og omkrets',
  description: 'Lær å beregne areal og omkrets av vanlige figurer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beregne areal og omkrets av rektangler, trekanter og sirkler',
    'anvende formler i praktiske situasjoner',
  ],
  content: [
    {
      id: '1p-4-1-intro',
      type: 'text',
      content: `## Areal og omkrets

**Areal** er størrelsen på en flate, målt i kvadratenheter (m², cm², km²).

**Omkrets** er lengden rundt en figur, målt i lengdeenheter (m, cm, km).`,
    },
    {
      id: '1p-4-1-rektangel',
      type: 'definition',
      title: 'Rektangel',
      content: `For et rektangel med lengde $l$ og bredde $b$:

**Areal:** $A = l \\cdot b$

**Omkrets:** $O = 2l + 2b = 2(l + b)$`,
    },
    {
      id: '1p-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Rektangel',
      problem: 'Et rom er 5 m langt og 4 m bredt. Finn areal og omkrets.',
      solution: `**Løsning:**

$l = 5$ m, $b = 4$ m

Areal: $A = 5 \\cdot 4 = 20$ m²

Omkrets: $O = 2 \\cdot 5 + 2 \\cdot 4 = 10 + 8 = 18$ m`,
    },
    {
      id: '1p-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-4-1-ex-1',
        number: '4.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn areal og omkrets av rektanglene:',
        subTasks: [
          { label: 'a', task: 'Lengde 8 cm, bredde 3 cm', solution: '$A = 24$ cm², $O = 22$ cm', answer: 24, multipleChoiceOptions: ['A = 24 cm², O = 22 cm', 'A = 22 cm², O = 24 cm', 'A = 11 cm², O = 24 cm', 'A = 24 cm², O = 11 cm'] },
          { label: 'b', task: 'Lengde 12 m, bredde 5 m', solution: '$A = 60$ m², $O = 34$ m', answer: 60, multipleChoiceOptions: ['A = 60 m², O = 34 m', 'A = 34 m², O = 60 m', 'A = 17 m², O = 60 m', 'A = 60 m², O = 17 m'] },
          { label: 'c', task: 'Lengde 7,5 m, bredde 4 m', solution: '$A = 30$ m², $O = 23$ m', answer: 30, multipleChoiceOptions: ['A = 30 m², O = 23 m', 'A = 23 m², O = 30 m', 'A = 11,5 m², O = 30 m', 'A = 30 m², O = 11,5 m'] },
        ],
        solution: 'a) A = 24 cm², O = 22 cm  b) A = 60 m², O = 34 m  c) A = 30 m², O = 23 m',
        hints: ['Areal = lengde × bredde', 'Omkrets = 2 × lengde + 2 × bredde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-4-1-trekant',
      type: 'definition',
      title: 'Trekant',
      content: `For en trekant med grunnlinje $g$ og høyde $h$:

**Areal:** $A = \\frac{g \\cdot h}{2}$

Høyden står alltid vinkelrett på grunnlinjen.`,
    },
    {
      id: '1p-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av trekantene:',
        subTasks: [
          { label: 'a', task: 'Grunnlinje 8 cm, høyde 5 cm', solution: '$A = \\frac{8 \\cdot 5}{2} = 20$ cm²', answer: 20, multipleChoiceOptions: ['20 cm²', '40 cm²', '13 cm²', '6,5 cm²'] },
          { label: 'b', task: 'Grunnlinje 12 m, høyde 7 m', solution: '$A = \\frac{12 \\cdot 7}{2} = 42$ m²', answer: 42, multipleChoiceOptions: ['42 m²', '84 m²', '19 m²', '9,5 m²'] },
        ],
        solution: 'a) 20 cm²  b) 42 m²',
        hints: ['Areal av trekant = (grunnlinje × høyde) / 2'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-4-1-sirkel',
      type: 'definition',
      title: 'Sirkel',
      content: `For en sirkel med radius $r$:

**Areal:** $A = \\pi r^2$

**Omkrets:** $O = 2\\pi r$

$\\pi \\approx 3{,}14$`,
    },
    {
      id: '1p-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn areal og omkrets av sirklene:',
        subTasks: [
          { label: 'a', task: 'Radius 3 cm', solution: '$A \\approx 28{,}3$ cm², $O \\approx 18{,}8$ cm', multipleChoiceOptions: ['A ≈ 28,3 cm², O ≈ 18,8 cm', 'A ≈ 18,8 cm², O ≈ 28,3 cm', 'A ≈ 9 cm², O ≈ 6 cm', 'A ≈ 6 cm², O ≈ 9 cm'] },
          { label: 'b', task: 'Radius 10 m', solution: '$A \\approx 314$ m², $O \\approx 62{,}8$ m', multipleChoiceOptions: ['A ≈ 314 m², O ≈ 62,8 m', 'A ≈ 62,8 m², O ≈ 314 m', 'A ≈ 100 m², O ≈ 20 m', 'A ≈ 31,4 m², O ≈ 62,8 m'] },
        ],
        solution: 'a) A ≈ 28,3 cm², O ≈ 18,8 cm  b) A ≈ 314 m², O ≈ 62,8 m',
        hints: ['Areal = π·r²', 'Omkrets = 2·π·r'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-4-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Rektangel: $A = l \\cdot b$, $O = 2(l + b)$
- Trekant: $A = \\frac{g \\cdot h}{2}$
- Sirkel: $A = \\pi r^2$, $O = 2\\pi r$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_4_2: TextbookChapter = {
  id: '1p-4-2',
  courseId: '1p',
  chapterNumber: '4.2',
  title: 'Pytagoras setning',
  description: 'Lær å bruke Pytagoras setning til å finne ukjente sider.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke Pytagoras setning',
    'anvende Pytagoras i praktiske situasjoner',
  ],
  content: [
    {
      id: '1p-4-2-intro',
      type: 'text',
      content: `## Pytagoras setning

I en **rettvinklet trekant** gjelder:
- **Hypotenusen** ($c$) er den lengste siden
- **Katetene** ($a$ og $b$) er de to kortere sidene`,
    },
    {
      id: '1p-4-2-def',
      type: 'definition',
      title: 'Pytagoras setning',
      content: `$$a^2 + b^2 = c^2$$

Summen av katetenes kvadrater er lik hypotenusens kvadrat.`,
    },
    {
      id: '1p-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-4-2-ex-1',
        number: '4.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen:',
        subTasks: [
          { label: 'a', task: 'Kateter 6 cm og 8 cm', solution: '$c = \\sqrt{36 + 64} = 10$ cm', answer: 10, multipleChoiceOptions: ['10 cm', '14 cm', '100 cm', '7 cm'] },
          { label: 'b', task: 'Kateter 5 cm og 12 cm', solution: '$c = \\sqrt{25 + 144} = 13$ cm', answer: 13, multipleChoiceOptions: ['13 cm', '17 cm', '169 cm', '8,5 cm'] },
        ],
        solution: 'a) 10 cm  b) 13 cm',
        hints: ['c = √(a² + b²)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente kateten:',
        subTasks: [
          { label: 'a', task: 'Hypotenus 10 cm, katet 6 cm', solution: '$b = \\sqrt{100 - 36} = 8$ cm', answer: 8, multipleChoiceOptions: ['8 cm', '4 cm', '64 cm', '16 cm'] },
          { label: 'b', task: 'Hypotenus 17 m, katet 8 m', solution: '$b = \\sqrt{289 - 64} = 15$ m', answer: 15, multipleChoiceOptions: ['15 m', '9 m', '225 m', '25 m'] },
        ],
        solution: 'a) 8 cm  b) 15 m',
        hints: ['b = √(c² - a²)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-4-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Pytagoras: $a^2 + b^2 = c^2$
- Hypotenus: $c = \\sqrt{a^2 + b^2}$
- Katet: $a = \\sqrt{c^2 - b^2}$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_4_3: TextbookChapter = {
  id: '1p-4-3',
  courseId: '1p',
  chapterNumber: '4.3',
  title: 'Volum',
  description: 'Lær å beregne volum av romfigurer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beregne volum av prismer, sylindere og kuler',
  ],
  content: [
    {
      id: '1p-4-3-intro',
      type: 'text',
      content: `## Volum

**Volum** er størrelsen på rommet en gjenstand fyller.
- 1 m³ = 1000 L
- 1 L = 1 dm³ = 1000 cm³`,
    },
    {
      id: '1p-4-3-boks',
      type: 'definition',
      title: 'Rett prisme (boks)',
      content: `**Volum:** $V = l \\cdot b \\cdot h$`,
    },
    {
      id: '1p-4-3-sylinder',
      type: 'definition',
      title: 'Sylinder',
      content: `**Volum:** $V = \\pi r^2 h$`,
    },
    {
      id: '1p-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-4-3-ex-1',
        number: '4.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn volumet:',
        subTasks: [
          { label: 'a', task: 'Boks: 10 cm × 8 cm × 5 cm', solution: '$V = 400$ cm³', answer: 400, multipleChoiceOptions: ['400 cm³', '23 cm³', '80 cm³', '4000 cm³'] },
          { label: 'b', task: 'Sylinder: radius 5 cm, høyde 10 cm', solution: '$V = 250\\pi \\approx 785$ cm³', answer: 785, multipleChoiceOptions: ['≈ 785 cm³', '≈ 250 cm³', '≈ 157 cm³', '≈ 1570 cm³'] },
        ],
        solution: 'a) 400 cm³  b) ≈ 785 cm³',
        hints: ['Boks: V = l·b·h', 'Sylinder: V = π·r²·h'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-4-3-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Boks: $V = l \\cdot b \\cdot h$
- Sylinder: $V = \\pi r^2 h$
- Kule: $V = \\frac{4}{3}\\pi r^3$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: STATISTIKK
// ============================================================================

export const CHAPTER_1P_5_1: TextbookChapter = {
  id: '1p-5-1',
  courseId: '1p',
  chapterNumber: '5.1',
  title: 'Sentralmål',
  description: 'Lær om gjennomsnitt, median og typetall.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beregne og tolke sentralmål',
    'velge passende sentralmål for ulike datasett',
  ],
  content: [
    {
      id: '1p-5-1-intro',
      type: 'text',
      content: `## Sentralmål

**Sentralmål** er tall som beskriver sentrum i et datasett. De tre viktigste er:
- Gjennomsnitt
- Median
- Typetall (modus)`,
    },
    {
      id: '1p-5-1-def-snitt',
      type: 'definition',
      title: 'Gjennomsnitt',
      content: `**Gjennomsnitt** er summen av alle verdiene delt på antall verdier.

$$\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$$`,
    },
    {
      id: '1p-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjennomsnitt',
      problem: 'Finn gjennomsnittet av tallene: 4, 7, 8, 9, 12',
      solution: `**Løsning:**

$\\bar{x} = \\frac{4 + 7 + 8 + 9 + 12}{5} = \\frac{40}{5} = 8$`,
    },
    {
      id: '1p-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-5-1-ex-1',
        number: '5.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn gjennomsnittet:',
        subTasks: [
          { label: 'a', task: '5, 10, 15, 20', solution: '$\\bar{x} = \\frac{50}{4} = 12{,}5$', answer: 12.5, multipleChoiceOptions: ['12,5', '10', '15', '50'] },
          { label: 'b', task: '3, 5, 7, 9, 11', solution: '$\\bar{x} = \\frac{35}{5} = 7$', answer: 7, multipleChoiceOptions: ['7', '5', '9', '35'] },
          { label: 'c', task: '82, 75, 90, 68, 85', solution: '$\\bar{x} = \\frac{400}{5} = 80$', answer: 80, multipleChoiceOptions: ['80', '82', '75', '400'] },
        ],
        solution: 'a) 12,5  b) 7  c) 80',
        hints: ['Legg sammen alle tallene og del på antall tall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-5-1-def-median',
      type: 'definition',
      title: 'Median',
      content: `**Median** er den midterste verdien når dataene er sortert.

- Odde antall verdier: Medianen er det midterste tallet
- Like antall verdier: Medianen er gjennomsnittet av de to midterste`,
    },
    {
      id: '1p-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Median',
      problem: 'Finn medianen av: a) 3, 7, 9, 12, 15  b) 4, 6, 8, 10',
      solution: `**Løsning:**

a) Sortert: 3, 7, **9**, 12, 15 → Median = 9

b) Sortert: 4, 6, 8, 10 → Median = $\\frac{6 + 8}{2} = 7$`,
    },
    {
      id: '1p-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn medianen:',
        subTasks: [
          { label: 'a', task: '12, 5, 8, 15, 3', solution: 'Sortert: 3, 5, 8, 12, 15. Median = 8', answer: 8, multipleChoiceOptions: ['8', '5', '12', '8,6'] },
          { label: 'b', task: '4, 9, 2, 7, 5, 11', solution: 'Sortert: 2, 4, 5, 7, 9, 11. Median = 6', answer: 6, multipleChoiceOptions: ['6', '5', '7', '6,33'] },
          { label: 'c', task: '100, 50, 200, 150, 75', solution: 'Sortert: 50, 75, 100, 150, 200. Median = 100', answer: 100, multipleChoiceOptions: ['100', '75', '115', '150'] },
        ],
        solution: 'a) 8  b) 6  c) 100',
        hints: ['Sorter tallene først', 'Ved like antall: finn gjennomsnittet av de to midterste'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-5-1-def-typetall',
      type: 'definition',
      title: 'Typetall (modus)',
      content: `**Typetall** er verdien som forekommer oftest i datasettet.

Et datasett kan ha flere typetall, eller ingen (hvis alle verdier er unike).`,
    },
    {
      id: '1p-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn typetallet:',
        subTasks: [
          { label: 'a', task: '2, 3, 3, 4, 5, 3, 7', solution: 'Typetall = 3 (forekommer 3 ganger)', answer: 3, multipleChoiceOptions: ['3', '2', '4', '5'] },
          { label: 'b', task: '1, 2, 2, 3, 3, 4', solution: 'Typetall = 2 og 3 (begge forekommer 2 ganger)', multipleChoiceOptions: ['2 og 3', '2', '3', 'Ingen'] },
        ],
        solution: 'a) 3  b) 2 og 3',
        hints: ['Tell hvor mange ganger hver verdi forekommer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-5-1-tip',
      type: 'tip',
      title: 'Når bruke hvilket sentralmål?',
      content: `- **Gjennomsnitt**: Best for symmetriske data uten ekstremverdier
- **Median**: Best når det finnes ekstremverdier (f.eks. inntekt)
- **Typetall**: Best for kategoriske data (f.eks. favorittfarge)`,
    },
    {
      id: '1p-5-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Gjennomsnitt = sum / antall
- Median = midterste verdi (sorter først!)
- Typetall = hyppigste verdi`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_5_2: TextbookChapter = {
  id: '1p-5-2',
  courseId: '1p',
  chapterNumber: '5.2',
  title: 'Spredningsmål',
  description: 'Lær om variasjonsbredde og standardavvik.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beregne variasjonsbredde',
    'forstå og tolke spredning i data',
  ],
  content: [
    {
      id: '1p-5-2-intro',
      type: 'text',
      content: `## Spredningsmål

**Spredningsmål** beskriver hvor spredt dataene er rundt sentrum. Viktige spredningsmål er:
- Variasjonsbredde
- Standardavvik`,
    },
    {
      id: '1p-5-2-def',
      type: 'definition',
      title: 'Variasjonsbredde',
      content: `**Variasjonsbredde** er forskjellen mellom største og minste verdi.

$$R = x_{max} - x_{min}$$`,
    },
    {
      id: '1p-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-5-2-ex-1',
        number: '5.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn variasjonsbredden:',
        subTasks: [
          { label: 'a', task: '3, 7, 12, 5, 9', solution: '$R = 12 - 3 = 9$', answer: 9, multipleChoiceOptions: ['9', '12', '3', '7'] },
          { label: 'b', task: '45, 52, 38, 61, 49', solution: '$R = 61 - 38 = 23$', answer: 23, multipleChoiceOptions: ['23', '61', '38', '49'] },
          { label: 'c', task: '100, 105, 98, 102, 110', solution: '$R = 110 - 98 = 12$', answer: 12, multipleChoiceOptions: ['12', '110', '98', '103'] },
        ],
        solution: 'a) 9  b) 23  c) 12',
        hints: ['Finn største og minste verdi, trekk fra'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-5-2-standardavvik',
      type: 'text',
      content: `## Standardavvik

**Standardavvik** måler hvor mye verdiene i gjennomsnitt avviker fra gjennomsnittet. Jo større standardavvik, jo mer spredt er dataene.

På kalkulator bruker vi ofte funksjonene σ (sigma) eller s.`,
    },
    {
      id: '1p-5-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Variasjonsbredde = max - min
- Standardavvik måler gjennomsnittlig avvik fra gjennomsnittet
- Bruk kalkulator for standardavvik`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_5_3: TextbookChapter = {
  id: '1p-5-3',
  courseId: '1p',
  chapterNumber: '5.3',
  title: 'Diagrammer og tabeller',
  description: 'Lær å lage og tolke ulike diagramtyper.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lage og tolke søylediagram, sektordiagram og linjediagram',
    'velge passende diagramtype',
  ],
  content: [
    {
      id: '1p-5-3-intro',
      type: 'text',
      content: `## Diagramtyper

Ulike diagramtyper egner seg for ulike formål:
- **Søylediagram**: Sammenligne kategorier
- **Sektordiagram**: Vise andeler av en helhet
- **Linjediagram**: Vise utvikling over tid
- **Histogram**: Vise fordeling av kontinuerlige data`,
    },
    {
      id: '1p-5-3-soyle',
      type: 'text',
      content: `## Søylediagram

Brukes til å sammenligne verdier mellom ulike kategorier. Høyden på søylen viser verdien.`,
    },
    {
      id: '1p-5-3-sektor',
      type: 'text',
      content: `## Sektordiagram

Brukes til å vise hvordan en helhet er delt opp i deler. Hele sirkelen er 100% (360°).

For å finne vinkelen til en sektor:
$$\\text{Vinkel} = \\frac{\\text{andel}}{\\text{total}} \\cdot 360°$$`,
    },
    {
      id: '1p-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-5-3-ex-1',
        number: '5.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'En klasse har 30 elever. 12 liker fotball, 9 liker håndball, 6 liker svømming, 3 liker annet.',
        subTasks: [
          { label: 'a', task: 'Finn vinkelen for fotball i et sektordiagram', solution: '$\\frac{12}{30} \\cdot 360° = 144°$', answer: 144, multipleChoiceOptions: ['144°', '120°', '40°', '12°'] },
          { label: 'b', task: 'Finn vinkelen for håndball', solution: '$\\frac{9}{30} \\cdot 360° = 108°$', answer: 108, multipleChoiceOptions: ['108°', '90°', '30°', '9°'] },
          { label: 'c', task: 'Finn prosentandelen som liker svømming', solution: '$\\frac{6}{30} \\cdot 100\\% = 20\\%$', answer: 20, multipleChoiceOptions: ['20%', '6%', '60°', '30%'] },
        ],
        solution: 'a) 144°  b) 108°  c) 20%',
        hints: ['Vinkel = (andel/total) × 360°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-5-3-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Søylediagram: sammenligning
- Sektordiagram: andeler
- Linjediagram: utvikling over tid`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: SANNSYNLIGHET
// ============================================================================

export const CHAPTER_1P_6_1: TextbookChapter = {
  id: '1p-6-1',
  courseId: '1p',
  chapterNumber: '6.1',
  title: 'Grunnleggende sannsynlighet',
  description: 'Lær om sannsynlighet og hvordan beregne den.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beregne sannsynlighet for enkle hendelser',
    'bruke uniforme sannsynlighetsmodeller',
  ],
  content: [
    {
      id: '1p-6-1-intro',
      type: 'text',
      content: `## Hva er sannsynlighet?

**Sannsynlighet** er et tall mellom 0 og 1 som beskriver hvor sannsynlig en hendelse er.
- 0 = umulig
- 1 = helt sikkert
- 0,5 = 50% sjanse`,
    },
    {
      id: '1p-6-1-def',
      type: 'definition',
      title: 'Klassisk sannsynlighet',
      content: `Når alle utfall er like sannsynlige:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$`,
    },
    {
      id: '1p-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Terningkast',
      problem: 'Hva er sannsynligheten for å få 6 når du kaster en terning?',
      solution: `**Løsning:**

Gunstige utfall: 1 (bare 6)
Mulige utfall: 6 (tallene 1-6)

$P(6) = \\frac{1}{6} \\approx 0{,}167 = 16{,}7\\%$`,
    },
    {
      id: '1p-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-6-1-ex-1',
        number: '6.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn sannsynligheten ved terningkast:',
        subTasks: [
          { label: 'a', task: 'Få et partall', solution: '$P = \\frac{3}{6} = \\frac{1}{2} = 0{,}5$', answer: 0.5, multipleChoiceOptions: ['0,5 (50%)', '0,33 (33%)', '0,17 (17%)', '0,67 (67%)'] },
          { label: 'b', task: 'Få et tall større enn 4', solution: '$P = \\frac{2}{6} = \\frac{1}{3} \\approx 0{,}33$', answer: 0.33, multipleChoiceOptions: ['0,33 (33%)', '0,5 (50%)', '0,67 (67%)', '0,17 (17%)'] },
          { label: 'c', task: 'Få et tall mindre enn 7', solution: '$P = \\frac{6}{6} = 1 = 100\\%$', answer: 1, multipleChoiceOptions: ['1 (100%)', '0,83 (83%)', '6/7', '0 (0%)'] },
        ],
        solution: 'a) 0,5  b) 0,33  c) 1',
        hints: ['Tell gunstige utfall og del på 6'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-6-1-kort',
      type: 'text',
      content: `## Kortstokk

En standard kortstokk har 52 kort:
- 4 farger: hjerter, ruter, kløver, spar
- 13 verdier i hver farge: ess, 2-10, knekt, dame, konge`,
    },
    {
      id: '1p-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-6-1-ex-2',
        number: '6.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du trekker ett kort fra en kortstokk. Finn sannsynligheten for:',
        subTasks: [
          { label: 'a', task: 'Hjerter', solution: '$P = \\frac{13}{52} = \\frac{1}{4} = 0{,}25$', answer: 0.25, multipleChoiceOptions: ['0,25 (25%)', '0,5 (50%)', '0,13 (13%)', '0,04 (4%)'] },
          { label: 'b', task: 'Et ess', solution: '$P = \\frac{4}{52} = \\frac{1}{13} \\approx 0{,}077$', answer: 0.077, multipleChoiceOptions: ['≈ 0,08 (8%)', '0,25 (25%)', '0,04 (4%)', '0,02 (2%)'] },
          { label: 'c', task: 'En rød dame', solution: '$P = \\frac{2}{52} = \\frac{1}{26} \\approx 0{,}038$', answer: 0.038, multipleChoiceOptions: ['≈ 0,04 (4%)', '0,08 (8%)', '0,02 (2%)', '0,5 (50%)'] },
        ],
        solution: 'a) 0,25  b) ≈ 0,08  c) ≈ 0,04',
        hints: ['Det er 13 kort i hver farge', 'Det er 4 ess (ett i hver farge)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-6-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Sannsynlighet er mellom 0 og 1
- $P(A) = \\frac{\\text{gunstige}}{\\text{mulige}}$
- Summen av alle sannsynligheter = 1`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_6_2: TextbookChapter = {
  id: '1p-6-2',
  courseId: '1p',
  chapterNumber: '6.2',
  title: 'Kombinatorikk',
  description: 'Lær om permutasjoner og kombinasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'telle antall muligheter med multiplikasjonsprinsippet',
    'bruke valgtre og systematisk opptelling',
  ],
  content: [
    {
      id: '1p-6-2-intro',
      type: 'text',
      content: `## Multiplikasjonsprinsippet

Når vi skal gjøre flere valg etter hverandre, ganger vi antall muligheter.

Hvis vi har $n_1$ muligheter for valg 1 og $n_2$ muligheter for valg 2:

Totalt antall muligheter = $n_1 \\cdot n_2$`,
    },
    {
      id: '1p-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Klesvalg',
      problem: 'Du har 4 bukser og 5 skjorter. Hvor mange antrekk kan du lage?',
      solution: `**Løsning:**

Antall antrekk = 4 × 5 = 20`,
    },
    {
      id: '1p-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-6-2-ex-1',
        number: '6.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk multiplikasjonsprinsippet:',
        subTasks: [
          { label: 'a', task: '3 forrett og 4 hovedretter. Hvor mange menyer?', solution: '$3 \\cdot 4 = 12$', answer: 12, multipleChoiceOptions: ['12', '7', '24', '1'] },
          { label: 'b', task: '5 biler i 6 farger. Hvor mange kombinasjoner?', solution: '$5 \\cdot 6 = 30$', answer: 30, multipleChoiceOptions: ['30', '11', '25', '36'] },
          { label: 'c', task: 'PIN-kode med 4 siffer (0-9). Hvor mange muligheter?', solution: '$10^4 = 10000$', answer: 10000, multipleChoiceOptions: ['10 000', '40', '1000', '10'] },
        ],
        solution: 'a) 12  b) 30  c) 10 000',
        hints: ['Gang antall muligheter for hvert valg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-6-2-valgtre',
      type: 'text',
      content: `## Valgtre

Et **valgtre** er en visuell måte å vise alle muligheter på. Vi starter fra en rot og forgreiner for hvert valg.

Antall endepunkter = totalt antall muligheter`,
    },
    {
      id: '1p-6-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Multiplikasjonsprinsippet: gang antall muligheter
- Valgtre visualiserer alle muligheter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: MODELLERING
// ============================================================================

export const CHAPTER_1P_7_1: TextbookChapter = {
  id: '1p-7-1',
  courseId: '1p',
  chapterNumber: '7.1',
  title: 'Matematisk modellering',
  description: 'Lær å lage og bruke matematiske modeller.',
  estimatedMinutes: 50,
  competenceGoals: [
    'sette opp enkle matematiske modeller',
    'vurdere modellers gyldighet',
  ],
  content: [
    {
      id: '1p-7-1-intro',
      type: 'text',
      content: `## Hva er modellering?

**Matematisk modellering** handler om å bruke matematikk til å beskrive virkeligheten.

Prosessen:
1. **Identifisere** problemet
2. **Forenkle** og velge variabler
3. **Lage** matematisk modell
4. **Løse** modellen
5. **Tolke** og vurdere svaret`,
    },
    {
      id: '1p-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Taxipris',
      problem: 'En taxi har startpris 60 kr og koster 12 kr/km. Lag en modell for totalpris og finn prisen for 15 km.',
      solution: `**Løsning:**

La $x$ = antall km

**Modell:** $P(x) = 12x + 60$

For 15 km:
$P(15) = 12 \\cdot 15 + 60 = 180 + 60 = 240$ kr`,
    },
    {
      id: '1p-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag matematiske modeller:',
        subTasks: [
          { label: 'a', task: 'Leie av bil koster 500 kr/dag pluss 3 kr/km. Lag modell for totalpris T(x) der x er antall km.', solution: '$T(x) = 3x + 500$', multipleChoiceOptions: ['T(x) = 3x + 500', 'T(x) = 500x + 3', 'T(x) = 503x', 'T(x) = 500 - 3x'] },
          { label: 'b', task: 'Finn prisen for å kjøre 200 km på én dag', solution: '$T(200) = 3 \\cdot 200 + 500 = 1100$ kr', answer: 1100, multipleChoiceOptions: ['1100 kr', '600 kr', '1000 kr', '700 kr'] },
          { label: 'c', task: 'Hvor mange km kan du kjøre for 800 kr på én dag?', solution: '$3x + 500 = 800$, $x = 100$ km', answer: 100, multipleChoiceOptions: ['100 km', '300 km', '267 km', '200 km'] },
        ],
        solution: 'a) T(x) = 3x + 500  b) 1100 kr  c) 100 km',
        hints: ['Identifiser fast kostnad og variabel kostnad'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-7-1-warning',
      type: 'warning',
      title: 'Modellens begrensninger',
      content: `Husk at modeller er forenklinger av virkeligheten!

Vurder alltid:
- Gir svaret mening?
- Hvilke forutsetninger har modellen?
- For hvilke verdier gjelder modellen?`,
    },
    {
      id: '1p-7-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Modellering = bruke matematikk til å beskrive virkeligheten
- Lineære modeller: $y = ax + b$
- Vurder alltid modellens gyldighet`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_7_2: TextbookChapter = {
  id: '1p-7-2',
  courseId: '1p',
  chapterNumber: '7.2',
  title: 'Regneark og digital modellering',
  description: 'Lær å bruke regneark til matematisk modellering.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke regneark til beregninger',
    'lage enkle simuleringer',
  ],
  content: [
    {
      id: '1p-7-2-intro',
      type: 'text',
      content: `## Regneark

**Regneark** (som Excel eller Google Sheets) er nyttige verktøy for:
- Beregninger med formler
- Lage tabeller og grafer
- Simulere scenarier
- Analysere data`,
    },
    {
      id: '1p-7-2-formler',
      type: 'text',
      content: `## Grunnleggende formler

I regneark starter formler med =

- **Sum:** =SUM(A1:A10)
- **Gjennomsnitt:** =SNITT(A1:A10) eller =AVERAGE(A1:A10)
- **Maks/min:** =MAKS(A1:A10), =MIN(A1:A10)
- **Telling:** =ANTALL(A1:A10) eller =COUNT(A1:A10)`,
    },
    {
      id: '1p-7-2-tip',
      type: 'tip',
      title: 'Cellehenvising',
      content: `- **Relativ:** A1 (endres ved kopiering)
- **Absolutt:** $A$1 (forblir fast ved kopiering)
- **Blandet:** $A1 eller A$1`,
    },
    {
      id: '1p-7-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Bruk regneark til beregninger og modellering
- Formler starter med =
- Lær de viktigste funksjonene: SUM, SNITT, MAKS, MIN`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: ØKONOMI OG BUDSJETT
// ============================================================================

export const CHAPTER_1P_8_1: TextbookChapter = {
  id: '1p-8-1',
  courseId: '1p',
  chapterNumber: '8.1',
  title: 'Personlig økonomi',
  description: 'Lær om inntekt, utgifter og skatt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå grunnleggende begreper i personlig økonomi',
    'beregne netto inntekt etter skatt',
  ],
  content: [
    {
      id: '1p-8-1-intro',
      type: 'text',
      content: `## Personlig økonomi

**Personlig økonomi** handler om å håndtere egne penger:
- **Inntekt**: Penger du tjener (lønn, stipend, renter)
- **Utgifter**: Penger du bruker (mat, husleie, transport)
- **Skatt**: Andel av inntekten som går til fellesskapet`,
    },
    {
      id: '1p-8-1-def',
      type: 'definition',
      title: 'Brutto og netto',
      content: `- **Bruttolønn**: Lønn før skatt
- **Nettolønn**: Lønn etter skatt (det du får utbetalt)

$$\\text{Nettolønn} = \\text{Bruttolønn} - \\text{Skatt}$$`,
    },
    {
      id: '1p-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne nettolønn',
      problem: 'Sara tjener 35 000 kr i måneden og betaler 28% skatt. Hva er nettolønnen?',
      solution: `**Løsning:**

Skatt = 35 000 × 0,28 = 9 800 kr

Nettolønn = 35 000 - 9 800 = 25 200 kr`,
    },
    {
      id: '1p-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn nettolønn:',
        subTasks: [
          { label: 'a', task: 'Bruttolønn 40 000 kr, skatt 30%', solution: 'Netto = 40 000 × 0,70 = 28 000 kr', answer: 28000, multipleChoiceOptions: ['28 000 kr', '12 000 kr', '40 000 kr', '52 000 kr'] },
          { label: 'b', task: 'Bruttolønn 25 000 kr, skatt 25%', solution: 'Netto = 25 000 × 0,75 = 18 750 kr', answer: 18750, multipleChoiceOptions: ['18 750 kr', '6 250 kr', '31 250 kr', '20 000 kr'] },
          { label: 'c', task: 'Bruttolønn 50 000 kr, skatt 35%', solution: 'Netto = 50 000 × 0,65 = 32 500 kr', answer: 32500, multipleChoiceOptions: ['32 500 kr', '17 500 kr', '67 500 kr', '35 000 kr'] },
        ],
        solution: 'a) 28 000 kr  b) 18 750 kr  c) 32 500 kr',
        hints: ['Netto = Brutto × (1 - skatteprosent)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-8-1-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Bruttolønn = før skatt
- Nettolønn = etter skatt
- Skatt finansierer fellesgoder`,
    },
  ],
  exercises: [],
};

export const CHAPTER_1P_8_2: TextbookChapter = {
  id: '1p-8-2',
  courseId: '1p',
  chapterNumber: '8.2',
  title: 'Budsjett',
  description: 'Lær å lage og følge et budsjett.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sette opp et realistisk budsjett',
    'skille mellom faste og variable utgifter',
  ],
  content: [
    {
      id: '1p-8-2-intro',
      type: 'text',
      content: `## Hva er et budsjett?

Et **budsjett** er en plan for inntekter og utgifter over en periode.

**Formål:**
- Oversikt over økonomien
- Unngå overforbruk
- Spare til mål
- Oppdage unødvendige utgifter`,
    },
    {
      id: '1p-8-2-def',
      type: 'definition',
      title: 'Utgiftstyper',
      content: `- **Faste utgifter**: Samme beløp hver måned (husleie, forsikring, abonnementer)
- **Variable utgifter**: Varierer fra måned til måned (mat, klær, fritid)

$$\\text{Overskudd} = \\text{Inntekter} - \\text{Utgifter}$$`,
    },
    {
      id: '1p-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkelt budsjett',
      problem: 'Lag et månedsbudsjett med nettolønn 22 000 kr',
      solution: `**Løsning:**

| Utgiftspost | Beløp |
|:------------|------:|
| Husleie | 7 000 kr |
| Mat | 4 000 kr |
| Transport | 1 500 kr |
| Strøm/internett | 1 000 kr |
| Mobil | 400 kr |
| Forsikringer | 800 kr |
| Fritid | 2 000 kr |
| Klær | 500 kr |
| **Sum utgifter** | **17 200 kr** |

Overskudd = 22 000 - 17 200 = **4 800 kr** til sparing`,
    },
    {
      id: '1p-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Budsjettering:',
        subTasks: [
          { label: 'a', task: 'Inntekt 25 000 kr, utgifter 20 000 kr. Hva er overskuddet?', solution: '25 000 - 20 000 = 5 000 kr', answer: 5000, multipleChoiceOptions: ['5 000 kr', '20 000 kr', '45 000 kr', '25 000 kr'] },
          { label: 'b', task: 'Inntekt 30 000 kr, utgifter 32 000 kr. Hva er resultatet?', solution: '30 000 - 32 000 = -2 000 kr (underskudd)', answer: -2000, multipleChoiceOptions: ['-2 000 kr (underskudd)', '2 000 kr', '62 000 kr', '30 000 kr'] },
          { label: 'c', task: 'Du vil spare 3 000 kr/mnd med inntekt 28 000 kr. Hvor mye kan du bruke?', solution: '28 000 - 3 000 = 25 000 kr', answer: 25000, multipleChoiceOptions: ['25 000 kr', '31 000 kr', '3 000 kr', '28 000 kr'] },
        ],
        solution: 'a) 5 000 kr  b) -2 000 kr  c) 25 000 kr',
        hints: ['Overskudd = Inntekter - Utgifter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-8-2-tip',
      type: 'tip',
      title: 'Budsjett-tips',
      content: `- Sett av til sparing FØRST
- Ha en buffer for uforutsette utgifter
- Følg med på småkjøp (de utgjør mye!)
- Bruk regneark eller app for oversikt`,
    },
    {
      id: '1p-8-2-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Budsjett = plan for inntekter og utgifter
- Faste utgifter er forutsigbare
- Overskudd = Inntekter - Utgifter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER
// ============================================================================

export const CHAPTERS_1P: Record<string, TextbookChapter> = {
  // Kapittel 1: Tall og økonomi
  '1p-1-1': CHAPTER_1P_1_1,
  '1p-1-2': CHAPTER_1P_1_2,
  '1p-1-3': CHAPTER_1P_1_3,
  // Kapittel 2: Algebra og likninger
  '1p-2-1': CHAPTER_1P_2_1,
  '1p-2-2': CHAPTER_1P_2_2,
  '1p-2-3': CHAPTER_1P_2_3,
  // Kapittel 3: Lineære funksjoner
  '1p-3-1': CHAPTER_1P_3_1,
  '1p-3-2': CHAPTER_1P_3_2,
  '1p-3-3': CHAPTER_1P_3_3,
  // Kapittel 4: Geometri og måling
  '1p-4-1': CHAPTER_1P_4_1,
  '1p-4-2': CHAPTER_1P_4_2,
  '1p-4-3': CHAPTER_1P_4_3,
  // Kapittel 5: Statistikk
  '1p-5-1': CHAPTER_1P_5_1,
  '1p-5-2': CHAPTER_1P_5_2,
  '1p-5-3': CHAPTER_1P_5_3,
  // Kapittel 6: Sannsynlighet
  '1p-6-1': CHAPTER_1P_6_1,
  '1p-6-2': CHAPTER_1P_6_2,
  // Kapittel 7: Modellering
  '1p-7-1': CHAPTER_1P_7_1,
  '1p-7-2': CHAPTER_1P_7_2,
  // Kapittel 8: Økonomi og budsjett
  '1p-8-1': CHAPTER_1P_8_1,
  '1p-8-2': CHAPTER_1P_8_2,
};

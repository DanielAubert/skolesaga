/**
 * Tekstbok kapitler for S2 - Kapittel 6: Regresjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1 - Lineær regresjon
// ============================================================================

export const CHAPTER_S2_6_1: TextbookChapter = {
  id: 's2-6-1',
  courseId: 's2',
  chapterNumber: '6.1',
  title: 'Lineær regresjon',
  description: 'Lær om minste kvadraters metode, regresjonslinje, residualer og R².',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå og bruke minste kvadraters metode',
    'beregne og tolke regresjonskoeffisienter',
    'vurdere modellens tilpasning ved hjelp av residualer og R²'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-6-1-intro',
      type: 'text',
      content: `## Hva er lineær regresjon?

**Lineær regresjon** er en statistisk metode for å finne den rette linjen som best beskriver sammenhengen mellom to variabler.

**Forklaringsvariabel** $x$ (uavhengig variabel): den vi bruker til å forklare eller predikere.
**Responsvariabel** $y$ (avhengig variabel): den vi ønsker å forklare eller predikere.

Når vi har $n$ observasjonspar $(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)$, ønsker vi å finne den rette linjen:
$$\\hat{y} = ax + b$$

som passer best til dataene. Her er $\\hat{y}$ den predikerte verdien av $y$ for en gitt $x$.`
    },

    // ========== MINSTE KVADRATERS METODE ==========
    {
      id: 's2-6-1-def-mkm',
      type: 'definition',
      title: 'Minste kvadraters metode (MKM)',
      content: `**Minste kvadraters metode** finner koeffisientene $a$ og $b$ som minimerer summen av kvadrerte avvik mellom observerte og predikerte verdier:

$$\\text{SSE} = \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 = \\sum_{i=1}^{n} (y_i - ax_i - b)^2$$

SSE = Sum of Squared Errors (sum av kvadratavvik).

Metoden sikrer at den totale «avstanden» mellom datapunktene og linjen er så liten som mulig.`
    },
    {
      id: 's2-6-1-theorem-koeff',
      type: 'theorem',
      title: 'Regresjonskoeffisienter',
      content: `Stigningstallet (helningen) og konstantleddet i regresjonslinjen $\\hat{y} = ax + b$ er:

$$a = \\frac{n\\sum x_i y_i - \\sum x_i \\sum y_i}{n\\sum x_i^2 - (\\sum x_i)^2} = \\frac{S_{xy}}{S_{xx}}$$

$$b = \\bar{y} - a\\bar{x}$$

der:
- $S_{xy} = \\sum(x_i - \\bar{x})(y_i - \\bar{y})$
- $S_{xx} = \\sum(x_i - \\bar{x})^2$
- $\\bar{x}$ og $\\bar{y}$ er gjennomsnittene

**Regresjonslinjen går alltid gjennom punktet** $(\\bar{x}, \\bar{y})$.`
    },
    {
      id: 's2-6-1-example-1',
      type: 'example',
      title: 'Beregne regresjonslinje',
      problem: `En bedrift måler sammenhengen mellom annonsering ($x$, i tusen kroner) og salg ($y$, i tusen enheter):

| $x$ | 1 | 2 | 3 | 4 | 5 |
|:---|:---|:---|:---|:---|:---|
| $y$ | 3 | 5 | 6 | 8 | 9 |

Finn regresjonslinjen $\\hat{y} = ax + b$.`,
      solution: `**Beregn hjelpestørrelser:**
$n = 5$, $\\bar{x} = 3$, $\\bar{y} = 6{,}2$

$\\sum x_i y_i = 1 \\cdot 3 + 2 \\cdot 5 + 3 \\cdot 6 + 4 \\cdot 8 + 5 \\cdot 9 = 3 + 10 + 18 + 32 + 45 = 108$

$\\sum x_i = 15$, $\\sum y_i = 31$, $\\sum x_i^2 = 1 + 4 + 9 + 16 + 25 = 55$

**Stigningstall:**
$$a = \\frac{5 \\cdot 108 - 15 \\cdot 31}{5 \\cdot 55 - 15^2} = \\frac{540 - 465}{275 - 225} = \\frac{75}{50} = 1{,}5$$

**Konstantledd:**
$$b = 6{,}2 - 1{,}5 \\cdot 3 = 6{,}2 - 4{,}5 = 1{,}7$$

**Regresjonslinje:** $\\hat{y} = 1{,}5x + 1{,}7$

**Tolkning:** For hver ekstra tusen kroner i annonsering øker salget med ca. 1500 enheter.`
    },

    // ========== RESIDUALER ==========
    {
      id: 's2-6-1-residualer',
      type: 'text',
      content: `## Residualer

Et **residual** er forskjellen mellom observert og predikert verdi:
$$e_i = y_i - \\hat{y}_i$$

Residualene forteller oss hvor godt modellen passer til hvert datapunkt.

**Residualplott** er et diagram der residualene $e_i$ plottes mot $x_i$ (eller $\\hat{y}_i$). Et godt residualplott viser:
- Ingen systematisk mønster (tilfeldig spredning rundt null)
- Omtrent lik spredning over hele $x$-området

**Problematiske mønstre:**
- **Krumning**: Lineær modell passer ikke, prøv ikke-lineær regresjon
- **Vifte**: Økende variasjon, forutsetningen om konstant varians er brutt
- **Klynger**: Mulig gruppering i dataene`
    },
    {
      id: 's2-6-1-example-2',
      type: 'example',
      title: 'Beregne residualer',
      problem: `Med regresjonslinjen $\\hat{y} = 1{,}5x + 1{,}7$ fra forrige eksempel, beregn residualene for alle datapunktene.`,
      solution: `| $x_i$ | $y_i$ | $\\hat{y}_i = 1{,}5x_i + 1{,}7$ | $e_i = y_i - \\hat{y}_i$ |
|:---|:---|:---|:---|
| 1 | 3 | 3,2 | $-0{,}2$ |
| 2 | 5 | 4,7 | $0{,}3$ |
| 3 | 6 | 6,2 | $-0{,}2$ |
| 4 | 8 | 7,7 | $0{,}3$ |
| 5 | 9 | 9,2 | $-0{,}2$ |

**Kontroll:** $\\sum e_i = -0{,}2 + 0{,}3 - 0{,}2 + 0{,}3 - 0{,}2 = 0$ ✓

Residualene er små og veksler i fortegn, noe som tyder på en god tilpasning.`
    },

    // ========== R² ==========
    {
      id: 's2-6-1-def-r2',
      type: 'definition',
      title: 'Forklaringsgraden $R^2$',
      content: `**Forklaringsgraden** $R^2$ (R-kvadrat) måler hvor stor andel av variasjonen i $y$ som forklares av modellen:

$$R^2 = 1 - \\frac{\\text{SSE}}{\\text{SST}} = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$

der:
- $\\text{SSE} = \\sum(y_i - \\hat{y}_i)^2$ er uforklart variasjon
- $\\text{SST} = \\sum(y_i - \\bar{y})^2$ er total variasjon

**Tolkning:**
- $R^2 = 0$: Modellen forklarer ingenting
- $R^2 = 1$: Modellen forklarer alt (perfekt tilpasning)
- $R^2 = 0{,}85$: 85 % av variasjonen i $y$ forklares av $x$

For enkel lineær regresjon: $R^2 = r^2$ (kvadratet av korrelasjonskoeffisienten).`
    },
    {
      id: 's2-6-1-example-3',
      type: 'example',
      title: 'Beregne $R^2$',
      problem: `Beregn $R^2$ for eksempelet med annonsering og salg.`,
      solution: `**SSE (uforklart variasjon):**
$$\\text{SSE} = (-0{,}2)^2 + 0{,}3^2 + (-0{,}2)^2 + 0{,}3^2 + (-0{,}2)^2 = 0{,}04 + 0{,}09 + 0{,}04 + 0{,}09 + 0{,}04 = 0{,}30$$

**SST (total variasjon):** $\\bar{y} = 6{,}2$
$$\\text{SST} = (3-6{,}2)^2 + (5-6{,}2)^2 + (6-6{,}2)^2 + (8-6{,}2)^2 + (9-6{,}2)^2$$
$$= 10{,}24 + 1{,}44 + 0{,}04 + 3{,}24 + 7{,}84 = 22{,}80$$

**Forklaringsgrad:**
$$R^2 = 1 - \\frac{0{,}30}{22{,}80} = 1 - 0{,}0132 = 0{,}987$$

Hele 98,7 % av variasjonen i salg forklares av annonsering. Svært god tilpasning!`
    },

    // ========== PREDIKSJON ==========
    {
      id: 's2-6-1-prediksjon',
      type: 'text',
      content: `## Prediksjon og ekstrapolering

**Prediksjon** betyr å bruke regresjonsmodellen til å anslå $y$ for en gitt $x$-verdi.

**Interpolering**: Prediksjon for $x$-verdier **innenfor** området til observerte data. Vanligvis pålitelig.

**Ekstrapolering**: Prediksjon for $x$-verdier **utenfor** det observerte området. Kan være svært upålitelig fordi vi ikke vet om det lineære mønsteret fortsetter.

**Eksempel:** Hvis vi har data for annonsering mellom 1 og 5 tusen kroner, er det rimelig å predikere salg for $x = 3{,}5$ (interpolering), men risikabelt for $x = 20$ (ekstrapolering). Ved $x = 20$ ville modellen gi $\\hat{y} = 1{,}5 \\cdot 20 + 1{,}7 = 31{,}7$, men i virkeligheten kan det finnes en metningseffekt.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva betyr $a$ og $b$ i regresjonslinjen $\\hat{y} = ax + b$?', solution: '$a$ er stigningstallet og angir hvor mye $y$ endres når $x$ øker med 1 enhet. $b$ er konstantleddet og angir den predikerte verdien av $y$ når $x = 0$.' },
          { label: 'b', task: 'Regresjonslinjen er $\\hat{y} = 2{,}3x + 5$. Hva er predikert $y$ for $x = 4$?', solution: '$\\hat{y} = 2{,}3 \\cdot 4 + 5 = 9{,}2 + 5 = 14{,}2$' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva er et residual, og hva betyr det at residualet er positivt?', solution: 'Et residual er $e_i = y_i - \\hat{y}_i$, forskjellen mellom observert og predikert verdi. Positivt residual betyr at den observerte verdien er høyere enn modellen predikerer.' },
          { label: 'b', task: 'Hva er alltid $\\sum e_i$ for en regresjonslinje funnet med MKM?', solution: '$\\sum e_i = 0$. Summen av residualene er alltid null for MKM-regresjonslinjen.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva forteller $R^2 = 0{,}72$ oss?', solution: '72 % av variasjonen i responsvariabelen $y$ forklares av den lineære sammenhengen med $x$. De resterende 28 % skyldes andre faktorer eller tilfeldig variasjon.' },
          { label: 'b', task: 'Hva er forskjellen mellom interpolering og ekstrapolering?', solution: 'Interpolering er prediksjon innenfor det observerte $x$-området (pålitelig). Ekstrapolering er prediksjon utenfor (upålitelig, fordi sammenhengen kan endre seg).' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gitt $\\bar{x} = 5$, $\\bar{y} = 12$, $a = 1{,}8$. Finn $b$.', solution: '$b = \\bar{y} - a\\bar{x} = 12 - 1{,}8 \\cdot 5 = 12 - 9 = 3$. Regresjonslinje: $\\hat{y} = 1{,}8x + 3$.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Data: $(1, 2)$, $(2, 4)$, $(3, 5)$, $(4, 7)$. Finn regresjonslinjen.', solution: '$n = 4$, $\\bar{x} = 2{,}5$, $\\bar{y} = 4{,}5$. $\\sum x_iy_i = 2 + 8 + 15 + 28 = 53$. $\\sum x_i = 10$, $\\sum y_i = 18$, $\\sum x_i^2 = 30$. $a = \\frac{4 \\cdot 53 - 10 \\cdot 18}{4 \\cdot 30 - 100} = \\frac{212 - 180}{120 - 100} = \\frac{32}{20} = 1{,}6$. $b = 4{,}5 - 1{,}6 \\cdot 2{,}5 = 0{,}5$. Svar: $\\hat{y} = 1{,}6x + 0{,}5$.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk regresjonslinjen fra oppgave 5 til å beregne residualene for alle fire datapunkter.', solution: '$\\hat{y}_1 = 2{,}1$, $e_1 = 2 - 2{,}1 = -0{,}1$. $\\hat{y}_2 = 3{,}7$, $e_2 = 4 - 3{,}7 = 0{,}3$. $\\hat{y}_3 = 5{,}3$, $e_3 = 5 - 5{,}3 = -0{,}3$. $\\hat{y}_4 = 6{,}9$, $e_4 = 7 - 6{,}9 = 0{,}1$. Kontroll: $\\sum e_i = 0$ ✓' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $R^2$ for modellen fra oppgave 5.', solution: 'SSE $= 0{,}01 + 0{,}09 + 0{,}09 + 0{,}01 = 0{,}20$. SST $= (2-4{,}5)^2 + (4-4{,}5)^2 + (5-4{,}5)^2 + (7-4{,}5)^2 = 6{,}25 + 0{,}25 + 0{,}25 + 6{,}25 = 13{,}00$. $R^2 = 1 - 0{,}20/13{,}00 = 1 - 0{,}0154 = 0{,}985$. 98,5 % av variasjonen forklares.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Studietid ($x$, timer) og testresultat ($y$, poeng): $(2, 50)$, $(3, 60)$, $(5, 75)$, $(6, 80)$, $(8, 90)$. Finn regresjonslinjen og tolk stigningstallet.', solution: '$n = 5$, $\\bar{x} = 4{,}8$, $\\bar{y} = 71$. $\\sum x_iy_i = 100 + 180 + 375 + 480 + 720 = 1855$. $\\sum x_i = 24$, $\\sum y_i = 355$, $\\sum x_i^2 = 138$. $a = \\frac{5 \\cdot 1855 - 24 \\cdot 355}{5 \\cdot 138 - 576} = \\frac{9275 - 8520}{690 - 576} = \\frac{755}{114} \\approx 6{,}62$. $b = 71 - 6{,}62 \\cdot 4{,}8 \\approx 39{,}2$. $\\hat{y} = 6{,}62x + 39{,}2$. For hver ekstra studietime øker poengsummen med ca. 6,6 poeng.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk regresjonsmodellen $\\hat{y} = 6{,}62x + 39{,}2$ til å predikere poengsummen for en elev som studerer 7 timer. Er dette interpolering eller ekstrapolering?', solution: '$\\hat{y} = 6{,}62 \\cdot 7 + 39{,}2 = 46{,}34 + 39{,}2 = 85{,}5$ poeng. $x = 7$ ligger innenfor området $[2, 8]$, så dette er interpolering og pålitelig.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hva det betyr dersom residualplottet viser et buet mønster.', solution: 'Et buet mønster i residualplottet tyder på at den lineære modellen ikke passer dataene godt. Sammenhengen mellom $x$ og $y$ er sannsynligvis ikke-lineær (f.eks. kvadratisk eller eksponentiell). Man bør vurdere en ikke-lineær regresjonsmodell.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at regresjonslinjen alltid går gjennom punktet $(\\bar{x}, \\bar{y})$.', solution: 'Sett $x = \\bar{x}$ inn i $\\hat{y} = a\\bar{x} + b$. Siden $b = \\bar{y} - a\\bar{x}$, får vi $\\hat{y} = a\\bar{x} + \\bar{y} - a\\bar{x} = \\bar{y}$. Altså er $\\hat{y} = \\bar{y}$ når $x = \\bar{x}$, og linjen går gjennom $(\\bar{x}, \\bar{y})$.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Alder ($x$, år) og blodtrykk ($y$, mmHg): $(25, 118)$, $(30, 120)$, $(40, 128)$, $(50, 135)$, $(60, 142)$, $(65, 148)$. Finn regresjonslinjen, beregn $R^2$, og prediker blodtrykket for en 45-åring.', solution: '$n = 6$, $\\bar{x} = 45$, $\\bar{y} = 131{,}83$. $\\sum x_iy_i = 2950 + 3600 + 5120 + 6750 + 8520 + 9620 = 36560$. $\\sum x_i = 270$, $\\sum y_i = 791$, $\\sum x_i^2 = 13450$. $a = \\frac{6 \\cdot 36560 - 270 \\cdot 791}{6 \\cdot 13450 - 72900} = \\frac{219360 - 213570}{80700 - 72900} = \\frac{5790}{7800} \\approx 0{,}742$. $b = 131{,}83 - 0{,}742 \\cdot 45 = 98{,}44$. $\\hat{y} = 0{,}742x + 98{,}44$. For 45-åring: $\\hat{y} = 0{,}742 \\cdot 45 + 98{,}44 = 131{,}8$ mmHg. SSE $\\approx 6{,}3$, SST $\\approx 628{,}8$, $R^2 \\approx 0{,}990$.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I oppgave 12 fikk vi en modell for blodtrykk. Ville du brukt modellen til å predikere blodtrykket for en 5-åring? For en 90-åring? Begrunn svaret.', solution: 'Nei til begge. $x = 5$ og $x = 90$ ligger utenfor det observerte området $[25, 65]$, så dette er ekstrapolering. For $x = 5$: $\\hat{y} = 102{,}2$ mmHg, som er urimelig høyt for et barn. For $x = 90$: $\\hat{y} = 165{,}2$ mmHg, som kan virke rimelig men sammenhengen er neppe lineær for svært høy alder.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at SST = SSR + SSE, der SSR $= \\sum(\\hat{y}_i - \\bar{y})^2$ er variasjonen forklart av modellen. Forklar hva dette betyr.', solution: 'Dekomposisjonen $\\sum(y_i - \\bar{y})^2 = \\sum(\\hat{y}_i - \\bar{y})^2 + \\sum(y_i - \\hat{y}_i)^2$ deler totalvariasjonen (SST) i forklart variasjon (SSR) og uforklart variasjon (SSE). Beviset følger av at $y_i - \\bar{y} = (\\hat{y}_i - \\bar{y}) + (y_i - \\hat{y}_i)$, og kryssproduktet $\\sum(\\hat{y}_i - \\bar{y})(y_i - \\hat{y}_i) = 0$ for MKM-estimater.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Temperatur ($x$, °C) og iskremsalg ($y$, enheter): $(15, 200)$, $(20, 350)$, $(22, 400)$, $(25, 500)$, $(28, 620)$, $(30, 700)$. Finn regresjonslinjen og gi et 95 % prediksjonsintervall for salg ved 24°C (du kan anta at $R^2$ er svært høy).', solution: '$\\bar{x} = 23{,}33$, $\\bar{y} = 461{,}67$. $\\sum x_iy_i = 3000 + 7000 + 8800 + 12500 + 17360 + 21000 = 69660$. $a = \\frac{6 \\cdot 69660 - 140 \\cdot 2770}{6 \\cdot 3398 - 19600} = \\frac{417960 - 387800}{20388 - 19600} = \\frac{30160}{788} \\approx 38{,}27$. $b = 461{,}67 - 38{,}27 \\cdot 23{,}33 \\approx -431{,}0$. $\\hat{y} = 38{,}27x - 431{,}0$. Ved $x = 24$: $\\hat{y} = 38{,}27 \\cdot 24 - 431 = 487{,}5$ enheter.' }
        ]
      }
    },
    {
      id: 's2-6-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-6-1-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hvorfor $R^2$ alene ikke er tilstrekkelig for å vurdere en regresjonsmodell. Hvilke andre verktøy bør brukes?', solution: '$R^2$ kan være høy selv om modellen er feil (f.eks. lineær modell på ikke-lineære data). Andre verktøy: (1) Residualplott for å sjekke mønstre, (2) sjekk normalitet av residualer, (3) vurder ekstrapolering, (4) sjekk for innflytelsesrike observasjoner (uteliggere). Alltid kombinere numeriske mål med grafisk analyse.' }
        ]
      }
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 6.2 - Korrelasjon
// ============================================================================

export const CHAPTER_S2_6_2: TextbookChapter = {
  id: 's2-6-2',
  courseId: 's2',
  chapterNumber: '6.2',
  title: 'Korrelasjon',
  description: 'Lær om Pearsons korrelasjonskoeffisient, tolkning, og forskjellen mellom korrelasjon og kausalitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne og tolke Pearsons korrelasjonskoeffisient',
    'forstå at korrelasjon ikke innebærer kausalitet',
    'gjenkjenne spuriøs korrelasjon og konfunderende variabler'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-6-2-intro',
      type: 'text',
      content: `## Hva er korrelasjon?

**Korrelasjon** måler styrken og retningen på den lineære sammenhengen mellom to variabler. Til forskjell fra regresjon, der én variabel er «forklaringsvariabel» og den andre «respons», behandler korrelasjon begge variablene symmetrisk.

Spørsmålet er: Varierer $x$ og $y$ sammen? Og i så fall, hvor sterkt?`
    },

    // ========== PEARSONS r ==========
    {
      id: 's2-6-2-def-pearson',
      type: 'definition',
      title: 'Pearsons korrelasjonskoeffisient $r$',
      content: `**Pearsons korrelasjonskoeffisient** er:

$$r = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i - \\bar{x})^2 \\cdot \\sum(y_i - \\bar{y})^2}} = \\frac{S_{xy}}{\\sqrt{S_{xx} \\cdot S_{yy}}}$$

Ekvivalent:
$$r = \\frac{n\\sum x_iy_i - \\sum x_i \\sum y_i}{\\sqrt{[n\\sum x_i^2 - (\\sum x_i)^2][n\\sum y_i^2 - (\\sum y_i)^2]}}$$

**Egenskaper:**
- $-1 \\leq r \\leq 1$
- $r > 0$: positiv korrelasjon (begge øker sammen)
- $r < 0$: negativ korrelasjon (den ene øker, den andre synker)
- $r = 0$: ingen lineær sammenheng
- $|r| = 1$: perfekt lineær sammenheng
- $r^2 = R^2$ (forklaringsgraden i enkel lineær regresjon)`
    },

    // ========== TOLKNING ==========
    {
      id: 's2-6-2-tolkning',
      type: 'text',
      content: `## Tolkning av $r$

Styrken på korrelasjonen vurderes typisk slik:

| $|r|$ | Styrke |
|:---|:---|
| 0,00 - 0,19 | Svært svak |
| 0,20 - 0,39 | Svak |
| 0,40 - 0,59 | Moderat |
| 0,60 - 0,79 | Sterk |
| 0,80 - 1,00 | Svært sterk |

**Merk:** Disse grensene er retningslinjer, ikke absolutte regler. Hva som regnes som «sterk» avhenger av fagfeltet. I fysikk kan $r = 0{,}7$ anses som svak, mens det i samfunnsvitenskap kan regnes som sterkt.`
    },
    {
      id: 's2-6-2-example-1',
      type: 'example',
      title: 'Beregne korrelasjonskoeffisienten',
      problem: `Beregn $r$ for dataene: $(1, 3)$, $(2, 5)$, $(3, 6)$, $(4, 8)$, $(5, 9)$.`,
      solution: `$n = 5$, $\\bar{x} = 3$, $\\bar{y} = 6{,}2$

$\\sum x_iy_i = 3 + 10 + 18 + 32 + 45 = 108$
$\\sum x_i = 15$, $\\sum y_i = 31$
$\\sum x_i^2 = 55$, $\\sum y_i^2 = 9 + 25 + 36 + 64 + 81 = 215$

$$r = \\frac{5 \\cdot 108 - 15 \\cdot 31}{\\sqrt{(5 \\cdot 55 - 225)(5 \\cdot 215 - 961)}}$$
$$= \\frac{540 - 465}{\\sqrt{50 \\cdot 114}} = \\frac{75}{\\sqrt{5700}} = \\frac{75}{75{,}50} \\approx 0{,}993$$

Svært sterk positiv korrelasjon. Sjekk: $r^2 = 0{,}987 = R^2$ fra forrige kapittel ✓`
    },

    // ========== KORRELASJON ≠ KAUSALITET ==========
    {
      id: 's2-6-2-kausalitet',
      type: 'text',
      content: `## Korrelasjon betyr ikke kausalitet

En av de viktigste prinsippene i statistikk:

**Korrelasjon mellom $x$ og $y$ betyr IKKE at $x$ forårsaker $y$ (eller omvendt).**

Mulige forklaringer på korrelasjon:
1. **$x$ forårsaker $y$**: Røyking forårsaker lungekreft
2. **$y$ forårsaker $x$**: Omvendt kausalitet
3. **Felles årsak**: En tredje variabel påvirker begge (konfundering)
4. **Tilfeldighet**: Korrelasjonen er bare støy
5. **Spuriøs sammenheng**: Tilsynelatende korrelasjon uten reell forbindelse

For å påvise kausalitet trengs **kontrollerte eksperimenter** eller spesielle statistiske metoder (instrumentvariabler, naturlige eksperimenter, etc.).`
    },

    // ========== SPURIØS KORRELASJON ==========
    {
      id: 's2-6-2-def-spurios',
      type: 'definition',
      title: 'Spuriøs korrelasjon',
      content: `En **spuriøs korrelasjon** er en tilsynelatende sammenheng mellom to variabler som skyldes tilfeldigheter eller en felles underliggende faktor, og ikke en reell forbindelse.

**Klassiske eksempler:**
- Iskremssalg og drukningsulykker (begge øker om sommeren - felles årsak: varmt vær)
- Antall pirater og global temperatur (begge endres over tid - trendkorrelasjon)
- Forbruket av margarin og skilsmisserate i Maine (ren tilfeldighet)

Med nok variabler og data vil man **alltid** finne noen tilfeldige korrelasjoner. Derfor er det viktig å ha en teoretisk begrunnelse for sammenhengen.`
    },
    {
      id: 's2-6-2-example-2',
      type: 'example',
      title: 'Konfunderende variabel',
      problem: `En studie finner sterk positiv korrelasjon ($r = 0{,}82$) mellom antall brannbiler ved en brann og skadeomfanget. Betyr dette at flere brannbiler forårsaker mer skade?`,
      solution: `Nei, dette er et eksempel på **konfundering**. Den konfunderende variabelen er **brannens størrelse**:

- Store branner → mange brannbiler sendes ut
- Store branner → stort skadeomfang

Både antall brannbiler og skadeomfang er **konsekvenser** av brannens størrelse. Sammenhengen er reell, men tolkningen «brannbiler forårsaker skade» er feil.

Riktig forklaring: Brannens størrelse er en konfunderende variabel som påvirker begge de observerte variablene.`
    },

    // ========== KONFUNDERENDE VARIABLER ==========
    {
      id: 's2-6-2-konfundering',
      type: 'text',
      content: `## Konfunderende variabler

En **konfunderende variabel** (lurking variable) er en variabel som:
1. Påvirker både $x$ og $y$
2. Skaper en tilsynelatende sammenheng mellom $x$ og $y$
3. Ikke er inkludert i analysen

**Hvordan håndtere konfundering:**
- **Kontrollert eksperiment**: Tilfeldig tildeling (randomisering) eliminerer konfundering
- **Stratifisering**: Analysere innenfor undergrupper
- **Multippel regresjon**: Inkludere den konfunderende variabelen i modellen
- **Kritisk tenkning**: Vurder alltid om det finnes alternative forklaringer`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva betyr $r = -0{,}85$?', solution: 'Sterk negativ lineær korrelasjon. Når den ene variabelen øker, avtar den andre markant.' },
          { label: 'b', task: 'Hva betyr $r = 0{,}05$?', solution: 'Svært svak (tilnærmet ingen) lineær korrelasjon. Det er nesten ingen lineær sammenheng mellom variablene.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hvis $R^2 = 0{,}64$, hva er $|r|$?', solution: '$|r| = \\sqrt{0{,}64} = 0{,}80$. Fortegnet til $r$ bestemmes av stigningstallet $a$ i regresjonslinjen.' },
          { label: 'b', task: 'Hvis $r = 0{,}70$, hva er $R^2$?', solution: '$R^2 = 0{,}70^2 = 0{,}49$. 49 % av variasjonen forklares av den lineære sammenhengen.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva betyr uttrykket «korrelasjon innebærer ikke kausalitet»?', solution: 'At to variabler samvarierer (korrelerer) betyr ikke at den ene forårsaker den andre. Sammenhengen kan skyldes en felles bakenforliggende variabel, omvendt kausalitet eller ren tilfeldighet.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $r$ for $(1, 10)$, $(2, 8)$, $(3, 6)$, $(4, 4)$, $(5, 2)$. Hva slags sammenheng er dette?', solution: '$\\bar{x} = 3$, $\\bar{y} = 6$. $S_{xy} = (1-3)(10-6) + (2-3)(8-6) + (3-3)(6-6) + (4-3)(4-6) + (5-3)(2-6) = -8 - 2 + 0 - 2 - 8 = -20$. $S_{xx} = 10$, $S_{yy} = 40$. $r = -20/\\sqrt{10 \\cdot 40} = -20/20 = -1{,}00$. Perfekt negativ lineær sammenheng.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gi et eksempel på spuriøs korrelasjon og forklar hvorfor den er villedende.', solution: 'Eksempel: Det er positiv korrelasjon mellom antall svømmebasseng i en by og antall kriminalitetstilfeller. Begge variabler korrelerer med byens størrelse (konfunderende variabel). Store byer har flere basseng OG mer kriminalitet, men bassengene forårsaker selvsagt ikke kriminalitet.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En studie finner at barn som spiser frokost gjør det bedre på skolen ($r = 0{,}45$). Kan vi konkludere med at frokost forårsaker bedre skoleresultater?', solution: 'Nei, vi kan ikke konkludere med kausalitet fra en observasjonsstudie. Mulige konfunderende variabler: familiens sosioøkonomiske status (bedre økonomi → mer frokost OG bedre støtte hjemme), foreldres utdanningsnivå, generelle helsevaner. Det kan likevel være at frokost har en kausal effekt, men for å påvise dette trengs et kontrollert eksperiment.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar forskjellen mellom korrelasjon og regresjon. Når bruker vi hva?', solution: 'Korrelasjon måler styrken og retningen av lineær sammenheng (symmetrisk, ingen retning). Regresjon gir en modell for å predikere $y$ fra $x$ (asymmetrisk, $x$ forklarer $y$). Vi bruker korrelasjon for å undersøke om det finnes en sammenheng. Vi bruker regresjon når vi vil predikere eller forklare $y$ basert på $x$.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $r$ for: $(2, 15)$, $(4, 25)$, $(6, 30)$, $(8, 40)$, $(10, 45)$.', solution: '$n = 5$, $\\bar{x} = 6$, $\\bar{y} = 31$. $\\sum x_iy_i = 30 + 100 + 180 + 320 + 450 = 1080$. $\\sum x_i = 30$, $\\sum y_i = 155$, $\\sum x_i^2 = 220$, $\\sum y_i^2 = 225 + 625 + 900 + 1600 + 2025 = 5375$. $r = \\frac{5 \\cdot 1080 - 30 \\cdot 155}{\\sqrt{(5 \\cdot 220 - 900)(5 \\cdot 5375 - 24025)}} = \\frac{5400 - 4650}{\\sqrt{200 \\cdot 2850}} = \\frac{750}{\\sqrt{570000}} = \\frac{750}{754{,}98} \\approx 0{,}993$.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Kan $r = 0$ bety at det finnes en sterk sammenheng mellom $x$ og $y$? Gi et eksempel.', solution: 'Ja! $r$ måler bare lineær korrelasjon. En perfekt kvadratisk sammenheng som $y = (x-3)^2$ kan gi $r \\approx 0$ dersom dataene er symmetrisk fordelt rundt bunnpunktet. For eksempel: $(-2, 25)$, $(-1, 16)$, $(0, 9)$, $(1, 4)$, $(2, 1)$, $(3, 0)$, $(4, 1)$, $(5, 4)$, $(6, 9)$, $(7, 16)$, $(8, 25)$ gir $r \\approx 0$ men perfekt kurvet sammenheng.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Identifiser den konfunderende variabelen: «Det er positiv korrelasjon mellom antall kirker og antall forbrytelser i amerikanske byer.»', solution: 'Den konfunderende variabelen er byens befolkningsstørrelse. Store byer har naturlig flere kirker OG flere forbrytelser enn små byer. Sammenhengen mellom kirker og kriminalitet er spuriøs - ingen av dem forårsaker den andre.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at dersom vi bytter $x$ og $y$ (altså bytter rollene til variablene), forblir $r$ uendret. Hva skjer med stigningstallet $a$ i regresjonslinjen?', solution: 'Fra formelen: $r = \\frac{S_{xy}}{\\sqrt{S_{xx} \\cdot S_{yy}}}$. Siden $S_{xy}$ er symmetrisk i $x$ og $y$, og $\\sqrt{S_{xx} \\cdot S_{yy}} = \\sqrt{S_{yy} \\cdot S_{xx}}$, er $r$ uendret. Men stigningstallet endres: Opprinnelig $a = S_{xy}/S_{xx}$, mens det nye er $a^* = S_{xy}/S_{yy}$. Merk at $a \\cdot a^* = r^2$.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En forsker finner $r = 0{,}95$ mellom skostørrelse og leseferdighet hos barn i alderen 5-15 år. Hva er den mest sannsynlige forklaringen?', solution: 'Den konfunderende variabelen er **alder**. Eldre barn har både større føtter og bedre leseferdighet enn yngre barn. Korrelasjonen mellom skostørrelse og leseferdighet er spuriøs - den skyldes at begge variablene øker med alderen.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar Simpsons paradoks med et eksempel, og knytt det til konfunderende variabler.', solution: 'Simpsons paradoks: En trend som vises i delgruppene forsvinner eller reverseres i de sammenslåtte dataene. Eksempel: Behandling A har høyere suksessrate enn B i gruppen med mild sykdom (90 % vs 85 %) OG i gruppen med alvorlig sykdom (50 % vs 45 %). Men totalt kan B ha høyere suksessrate fordi B oftere brukes på milde tilfeller. Sykdomsgrad er den konfunderende variabelen. Paradokset viser hvorfor man må kontrollere for konfunderende variabler.' }
        ]
      }
    },
    {
      id: 's2-6-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-6-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hvorfor et kontrollert eksperiment med randomisering er den beste metoden for å påvise kausalitet. Hva gjør randomisering?', solution: 'Randomisering fordeler deltakere tilfeldig til behandlings- og kontrollgrupper. Dette sikrer at gruppene er like i alle variabler - både kjente og ukjente konfunderende variabler. Dermed er den eneste systematiske forskjellen mellom gruppene selve behandlingen. Hvis vi observerer en forskjell i utfall, kan den tilskrives behandlingen (kausal slutning). I observasjonsstudier er dette umulig fordi gruppene kan ha systematiske forskjeller.' }
        ]
      }
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 6.3 - Ikke-lineær regresjon
// ============================================================================

export const CHAPTER_S2_6_3: TextbookChapter = {
  id: 's2-6-3',
  courseId: 's2',
  chapterNumber: '6.3',
  title: 'Ikke-lineær regresjon',
  description: 'Lær om eksponentiell, potensiell og logaritmisk regresjon, modellvalg og linearisering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'tilpasse eksponentiell, potensiell og logaritmisk regresjonsmodell til data',
    'velge beste modell ved hjelp av R²-sammenligning',
    'linearisere ikke-lineære modeller ved hjelp av logaritmer'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-6-3-intro',
      type: 'text',
      content: `## Hvorfor ikke-lineær regresjon?

Mange fenomener i virkeligheten følger ikke et lineært mønster:
- Bakterievekst (eksponentiell)
- Planetbaner og skaleringslovene i biologi (potensiell)
- Avtakende avkastning i økonomi (logaritmisk)

Når residualplottet fra en lineær modell viser et systematisk buet mønster, bør vi vurdere en ikke-lineær modell.

De vanligste ikke-lineære modellene i S2:
1. **Eksponentiell**: $y = a \\cdot b^x$
2. **Potensiell**: $y = a \\cdot x^b$
3. **Logaritmisk**: $y = a + b \\cdot \\ln x$`
    },

    // ========== EKSPONENTIELL REGRESJON ==========
    {
      id: 's2-6-3-def-eksponentiell',
      type: 'definition',
      title: 'Eksponentiell regresjon',
      content: `En **eksponentiell modell** har formen:
$$y = a \\cdot b^x \\quad \\text{der } a > 0, \\; b > 0, \\; b \\neq 1$$

**Linearisering:** Tar vi logaritmen på begge sider:
$$\\ln y = \\ln a + x \\cdot \\ln b$$

Setter vi $Y = \\ln y$, $A = \\ln a$ og $B = \\ln b$, får vi:
$$Y = A + Bx$$

som er lineært i $x$ og $Y = \\ln y$. Vi kan bruke vanlig lineær regresjon på dataene $(x_i, \\ln y_i)$.

Deretter:
- $b = e^B$
- $a = e^A$`
    },
    {
      id: 's2-6-3-example-1',
      type: 'example',
      title: 'Eksponentiell regresjon',
      problem: `Antall bakterier i en kultur ble målt over tid:

| Tid $x$ (timer) | 0 | 1 | 2 | 3 | 4 |
|:---|:---|:---|:---|:---|:---|
| Antall $y$ | 100 | 150 | 220 | 340 | 500 |

Tilpass en eksponentiell modell $y = a \\cdot b^x$.`,
      solution: `**Steg 1: Lineariser** ved å ta $\\ln y$:

| $x$ | $y$ | $\\ln y$ |
|:---|:---|:---|
| 0 | 100 | 4,605 |
| 1 | 150 | 5,011 |
| 2 | 220 | 5,394 |
| 3 | 340 | 5,829 |
| 4 | 500 | 6,215 |

**Steg 2: Lineær regresjon** på $(x, \\ln y)$:
$\\bar{x} = 2$, $\\overline{\\ln y} = 5{,}411$

$a_{\\text{lin}} = \\frac{5 \\cdot 54{,}268 - 10 \\cdot 27{,}054}{5 \\cdot 30 - 100} = \\frac{271{,}34 - 270{,}54}{50} = \\frac{0{,}80}{50} \\cdot 50 \\approx 0{,}403$

(Mer presist beregnet: $B \\approx 0{,}403$ og $A \\approx 4{,}605$)

**Steg 3: Tilbake til opprinnelige parametre:**
$b = e^{0{,}403} \\approx 1{,}497$ og $a = e^{4{,}605} \\approx 100$

**Modell:** $y = 100 \\cdot 1{,}50^x$

**Tolkning:** Antall bakterier starter på 100 og øker med ca. 50 % per time.`
    },

    // ========== POTENSIELL REGRESJON ==========
    {
      id: 's2-6-3-def-potensiell',
      type: 'definition',
      title: 'Potensiell regresjon',
      content: `En **potensiell modell** (power model) har formen:
$$y = a \\cdot x^b \\quad \\text{der } a > 0, \\; x > 0$$

**Linearisering:** Tar vi logaritmen:
$$\\ln y = \\ln a + b \\cdot \\ln x$$

Setter vi $Y = \\ln y$ og $X = \\ln x$:
$$Y = \\ln a + bX$$

som er lineært i $X$ og $Y$. Bruk lineær regresjon på $(\\ln x_i, \\ln y_i)$.

Potensiell regresjon er nyttig for **skaleringslovene**: «Når $x$ dobles, mangedobles $y$ med $2^b$».`
    },
    {
      id: 's2-6-3-example-2',
      type: 'example',
      title: 'Potensiell regresjon',
      problem: `Kroppsvekt ($x$, kg) og hjertefrekvens ($y$, slag/min) for ulike pattedyr:

| Dyr | $x$ | $y$ |
|:---|:---|:---|
| Mus | 0,03 | 600 |
| Kanin | 2 | 200 |
| Hund | 20 | 100 |
| Menneske | 70 | 72 |
| Hest | 500 | 38 |

Tilpass en potensiell modell $y = a \\cdot x^b$.`,
      solution: `**Steg 1: Beregn $\\ln x$ og $\\ln y$:**

| $\\ln x$ | $\\ln y$ |
|:---|:---|
| $-3{,}507$ | 6,397 |
| 0,693 | 5,298 |
| 2,996 | 4,605 |
| 4,248 | 4,277 |
| 6,215 | 3,638 |

**Steg 2: Lineær regresjon** på $(\\ln x, \\ln y)$:
Gir $B \\approx -0{,}268$ og $A \\approx 5{,}295$

**Steg 3: Opprinnelige parametre:**
$b \\approx -0{,}27$ og $a = e^{5{,}295} \\approx 200$

**Modell:** $y \\approx 200 \\cdot x^{-0{,}27}$

**Tolkning:** Hjertefrekvensen avtar med ca. $x^{-0{,}27}$. Større dyr har lavere hjertefrekvens. Denne sammenhengen kalles **allometrisk skalering**.`
    },

    // ========== LOGARITMISK REGRESJON ==========
    {
      id: 's2-6-3-def-logaritmisk',
      type: 'definition',
      title: 'Logaritmisk regresjon',
      content: `En **logaritmisk modell** har formen:
$$y = a + b \\cdot \\ln x \\quad \\text{der } x > 0$$

Denne modellen er allerede lineær i $X = \\ln x$:
$$y = a + bX$$

Bruk lineær regresjon direkte på $(\\ln x_i, y_i)$.

**Kjennetegn:** Rask vekst i begynnelsen, deretter avtakende vekst. Nyttig for situasjoner med «avtakende grensenytte» eller metningseffekt (f.eks. sammenhengen mellom lønn og tilfredshet).`
    },
    {
      id: 's2-6-3-example-3',
      type: 'example',
      title: 'Logaritmisk regresjon',
      problem: `Erfaring ($x$, år) og lønn ($y$, tusen kr/år) for en gruppe ansatte:

| $x$ | 1 | 2 | 5 | 10 | 20 |
|:---|:---|:---|:---|:---|:---|
| $y$ | 400 | 450 | 520 | 570 | 620 |

Tilpass en logaritmisk modell $y = a + b \\cdot \\ln x$.`,
      solution: `**Steg 1: Beregn $\\ln x$:**

| $\\ln x$ | $y$ |
|:---|:---|
| 0 | 400 |
| 0,693 | 450 |
| 1,609 | 520 |
| 2,303 | 570 |
| 2,996 | 620 |

**Steg 2: Lineær regresjon** på $(\\ln x, y)$:
$\\overline{\\ln x} = 1{,}520$, $\\bar{y} = 512$

Beregning gir $b \\approx 72{,}6$ og $a \\approx 401{,}6$

**Modell:** $y = 401{,}6 + 72{,}6 \\cdot \\ln x$

**Tolkning:** Lønnen øker raskt de første årene, men veksten avtar etter hvert. Fra 1 til 2 år: $\\Delta y \\approx 50$ tusen. Fra 10 til 20 år: $\\Delta y \\approx 50$ tusen. Altså trengs det stadig flere år for å oppnå samme lønnsøkning.`
    },

    // ========== MODELLVALG ==========
    {
      id: 's2-6-3-modellvalg',
      type: 'text',
      content: `## Velge beste modell

For å avgjøre hvilken modell som passer best, bruker vi:

**1. $R^2$-sammenligning:**
Beregn $R^2$ for hver modell. Modellen med høyest $R^2$ gir best tilpasning.

**Viktig:** Sammenlign $R^2$ for $y$ mot $\\hat{y}$ (ikke for de lineariserte variablene). Alternativt kan man sammenligne $R^2$ for lineariserte modeller, men dette gir en tilnærmelse.

**2. Residualplott:**
Velg modellen der residualplottet viser minst systematisk mønster.

**3. Faglig vurdering:**
Hvilken modell gir mest mening i konteksten? For eksempel er eksponentiell vekst rimelig for bakterier, men ikke for befolkningsvekst over lang tid.

**4. Prediksjon:**
Hvilken modell gir rimelige prediksjoner for relevante $x$-verdier?`
    },
    {
      id: 's2-6-3-example-4',
      type: 'example',
      title: 'Modellsammenligning',
      problem: `For datasettet om bakterievekst, sammenlign lineær og eksponentiell modell.`,
      solution: `**Lineær modell:** $\\hat{y} = 98x + 72$
- $R^2 \\approx 0{,}970$

**Eksponentiell modell:** $\\hat{y} = 100 \\cdot 1{,}50^x$
- $R^2 \\approx 0{,}998$

Den eksponentiell modellen gir høyere $R^2$ og er også faglig begrunnet (bakterier deler seg med konstant rate).

**Residualplot:**
- Lineær: residualene viser et buet mønster (negativ-positiv-negativ-positiv-negativ)
- Eksponentiell: residualene er jevnt fordelt rundt null

**Konklusjon:** Eksponentiell modell passer klart bedre.`
    },

    // ========== LINEARISERING ==========
    {
      id: 's2-6-3-linearisering',
      type: 'text',
      content: `## Oppsummering: Linearisering

| Modell | Formel | Linearisering | Plot |
|:---|:---|:---|:---|
| Eksponentiell | $y = a \\cdot b^x$ | $\\ln y = \\ln a + x\\ln b$ | $(x, \\ln y)$ |
| Potensiell | $y = a \\cdot x^b$ | $\\ln y = \\ln a + b\\ln x$ | $(\\ln x, \\ln y)$ |
| Logaritmisk | $y = a + b\\ln x$ | $y = a + bX$ der $X = \\ln x$ | $(\\ln x, y)$ |

**Hvorfor linearisere?** Fordi lineær regresjon (MKM) er enkel, veletablert og har gode statistiske egenskaper. Ved å transformere dataene kan vi bruke de samme verktøyene som for lineær regresjon.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hvordan lineariserer man modellen $y = a \\cdot b^x$?', solution: 'Ta $\\ln$ på begge sider: $\\ln y = \\ln a + x \\cdot \\ln b$. Sett $Y = \\ln y$, $A = \\ln a$, $B = \\ln b$. Da er $Y = A + Bx$, som er lineær i $x$ og $Y$.' },
          { label: 'b', task: 'Hvordan lineariserer man modellen $y = a \\cdot x^b$?', solution: 'Ta $\\ln$ på begge sider: $\\ln y = \\ln a + b \\cdot \\ln x$. Sett $Y = \\ln y$, $X = \\ln x$. Da er $Y = \\ln a + bX$, lineær i $X$ og $Y$.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En eksponentiell modell gir $A = \\ln a = 3{,}2$ og $B = \\ln b = 0{,}15$. Finn $a$ og $b$.', solution: '$a = e^{3{,}2} \\approx 24{,}5$ og $b = e^{0{,}15} \\approx 1{,}162$. Modell: $y = 24{,}5 \\cdot 1{,}162^x$.' },
          { label: 'b', task: 'Tolk modellen: hva betyr $b = 1{,}162$?', solution: '$b = 1{,}162$ betyr at $y$ øker med ca. 16,2 % for hver enhet $x$ øker.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Når er en logaritmisk modell mer passende enn en lineær modell?', solution: 'Når $y$ øker raskt for lave $x$-verdier og deretter flater ut (avtakende vekst). For eksempel tilfredshet som funksjon av inntekt: stor økning fra lav til middels inntekt, men mindre effekt fra middels til høy.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En populasjon vokser: $(0, 50)$, $(5, 130)$, $(10, 350)$, $(15, 920)$, $(20, 2400)$. Vis at $\\ln y$ er tilnærmet lineær i $x$, og finn den eksponentielle modellen.', solution: '$\\ln y$-verdier: $3{,}912$, $4{,}868$, $5{,}858$, $6{,}825$, $7{,}783$. Differansene er omtrent konstante ($\\approx 0{,}97$), som bekrefter linearitet. Lineær regresjon på $(x, \\ln y)$ gir $B \\approx 0{,}194$ og $A \\approx 3{,}91$. Altså $b = e^{0{,}194} \\approx 1{,}214$ og $a = e^{3{,}91} \\approx 50$. Modell: $y = 50 \\cdot 1{,}214^x$. Populasjonen vokser med ca. 21,4 % per tidsenhet.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avstand fra solen ($x$, AU) og omløpstid ($y$, jordår) for planeter: $(0{,}39, 0{,}24)$, $(1, 1)$, $(1{,}52, 1{,}88)$, $(5{,}20, 11{,}86)$, $(9{,}54, 29{,}46)$. Tilpass en potensiell modell $y = a \\cdot x^b$.', solution: 'Linearisering: $(\\ln x, \\ln y)$: $(-0{,}942, -1{,}427)$, $(0, 0)$, $(0{,}419, 0{,}631)$, $(1{,}649, 2{,}473)$, $(2{,}255, 3{,}383)$. Lineær regresjon gir $b \\approx 1{,}50$ og $\\ln a \\approx 0{,}00$, altså $a \\approx 1$. Modell: $y = x^{1{,}5}$ eller $y^2 = x^3$. Dette er Keplers tredje lov!' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tilpass en logaritmisk modell $y = a + b\\ln x$ til: $(1, 20)$, $(3, 35)$, $(5, 42)$, $(10, 50)$, $(20, 58)$.', solution: 'Transformasjon: $(\\ln x, y)$: $(0, 20)$, $(1{,}099, 35)$, $(1{,}609, 42)$, $(2{,}303, 50)$, $(2{,}996, 58)$. $\\overline{\\ln x} = 1{,}601$, $\\bar{y} = 41$. Lineær regresjon gir $b \\approx 12{,}6$ og $a \\approx 20{,}8$. Modell: $y = 20{,}8 + 12{,}6 \\cdot \\ln x$.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tre modeller tilpasses til et datasett: Lineær ($R^2 = 0{,}82$), eksponentiell ($R^2 = 0{,}96$), logaritmisk ($R^2 = 0{,}88$). Hvilken modell velger du, og hvorfor?', solution: 'Eksponentiell modell fordi den har høyest $R^2 = 0{,}96$, som betyr at 96 % av variasjonen forklares. Man bør likevel sjekke residualplottet og vurdere om eksponentiell vekst er faglig rimelig i konteksten.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Verdien av en bil synker over tid: $(0, 350000)$, $(2, 280000)$, $(4, 225000)$, $(6, 180000)$, $(8, 145000)$. Tilpass en eksponentiell modell. Hva blir bilen verdt etter 10 år?', solution: '$\\ln y$: $12{,}766$, $12{,}543$, $12{,}324$, $12{,}101$, $11{,}884$. Differansene er konstante ($\\approx -0{,}110$ per år). $B \\approx -0{,}110$ og $A \\approx 12{,}766$, altså $b = e^{-0{,}110} \\approx 0{,}896$ og $a \\approx 350000$. Modell: $y = 350000 \\cdot 0{,}896^x$. Etter 10 år: $y = 350000 \\cdot 0{,}896^{10} \\approx 350000 \\cdot 0{,}334 \\approx 117000$ kr.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar forskjellen mellom eksponentiell ($y = a \\cdot b^x$) og potensiell ($y = a \\cdot x^b$) vekst. Gi et eksempel der hver modell er naturlig.', solution: 'Eksponentiell: vekstraten er proporsjonal med nåværende størrelse ($\\frac{dy}{dx} \\propto y$). Dobling skjer over faste tidsintervaller. Eksempel: rentes rente, radioaktivt henfall. Potensiell: sammenhengen mellom ulike dimensjonale størrelser. Dobling av $x$ gir $2^b$-dobling av $y$. Eksempel: areal og radius ($A = \\pi r^2$), Keplers lov.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hvorfor vi tar logaritmen for å linearisere, og diskuter en begrensning ved denne metoden.', solution: 'Logaritmen transformerer multiplikativ sammenheng ($y = a \\cdot b^x$) til additiv ($\\ln y = \\ln a + x\\ln b$), som kan løses med MKM. Begrensning: Logaritmen vekter observasjoner ulikt. Små $y$-verdier får relativt større vekt i den transformerte skalaen, fordi like store absolutte avvik i $y$ gir større avvik i $\\ln y$ for små $y$. Alternativt kan man bruke ikke-lineær MKM direkte på originalskalaen.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'BNP per innbygger ($x$, i tusen USD) og forventet levealder ($y$, år) for 6 land: $(2, 55)$, $(5, 65)$, $(10, 72)$, $(25, 77)$, $(40, 80)$, $(60, 82)$. Sammenlign lineær, logaritmisk og potensiell modell. Hvilken passer best?', solution: 'Lineær: $\\hat{y} \\approx 0{,}41x + 61{,}9$, $R^2 \\approx 0{,}82$. Logaritmisk: $\\hat{y} \\approx 7{,}9 \\ln x + 49{,}8$, $R^2 \\approx 0{,}99$. Potensiell: $\\ln y \\approx 0{,}103 \\ln x + 3{,}94$, $R^2 \\approx 0{,}98$. Logaritmisk passer best ($R^2 = 0{,}99$) og er faglig rimelig: velstandsøkning gir stor helsegevinst for fattige land, men avtakende gevinst for rike land.' }
        ]
      }
    },
    {
      id: 's2-6-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-6-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Halveringstiden til et radioaktivt stoff er 5 timer. Startverdien er 800 gram. Sett opp en eksponentiell modell og finn hvor mye som er igjen etter 12 timer.', solution: 'Modell: $y = 800 \\cdot b^x$ der $x$ er timer. Halveringstid 5 timer: $400 = 800 \\cdot b^5$, altså $b^5 = 0{,}5$ og $b = 0{,}5^{1/5} = 2^{-1/5} \\approx 0{,}8706$. Modell: $y = 800 \\cdot 0{,}8706^x$. Etter 12 timer: $y = 800 \\cdot 0{,}8706^{12} = 800 \\cdot 0{,}5^{12/5} = 800 \\cdot 0{,}5^{2{,}4} \\approx 800 \\cdot 0{,}1892 \\approx 151$ gram.' }
        ]
      }
    }
  ],
  exercises: []
};

// Eksporter alle kapitler i seksjon 6
export const S2_KAP6_CHAPTERS = [CHAPTER_S2_6_1, CHAPTER_S2_6_2, CHAPTER_S2_6_3];

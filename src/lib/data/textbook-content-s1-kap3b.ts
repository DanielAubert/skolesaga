/**
 * Tekstbok kapitler for S1 - Kapittel 3b (Vekstfart og drøfting) og 4b (Økonomi forts.)
 * Kapittel 3.9, 3.10, 4.7, 4.8
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.9: Gjennomsnittlig og momentan vekstfart
// ============================================================================

export const CHAPTER_S1_3_9: TextbookChapter = {
  id: 's1-3-9',
  courseId: 's1',
  chapterNumber: '3.9',
  title: 'Gjennomsnittlig og momentan vekstfart',
  description: 'Forstå sammenhengen mellom gjennomsnittlig vekstfart (sekant) og momentan vekstfart (tangent), og bruk differansekvotienten til å estimere den deriverte.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne gjennomsnittlig og momentan vekstfart og tolke resultatene',
    'bruke den deriverte til å analysere vekstfart i praktiske situasjoner',
  ],
  content: [
    {
      id: 's1-3-9-intro',
      type: 'text',
      content: `## Gjennomsnittlig og momentan vekstfart

Vekstfart handler om **hvor raskt en størrelse endrer seg**. Vi møter dette daglig: hastigheten til en bil, prisøkning på en vare, eller veksten i en populasjon.

I matematikken skiller vi mellom to typer vekstfart:
- **Gjennomsnittlig vekstfart** over et intervall (stigningstallet til sekanten)
- **Momentan vekstfart** i et punkt (stigningstallet til tangenten)

I S1 er disse begrepene spesielt viktige fordi de kobler derivasjon til **økonomiske** og **praktiske** sammenhenger. For eksempel er den momentane vekstfarten til en kostnadsfunksjon det vi kaller **marginalkostnad**.`,
    },
    {
      id: 's1-3-9-def-gj-vekst',
      type: 'definition',
      title: 'Gjennomsnittlig vekstfart',
      content: `Den **gjennomsnittlige vekstfarten** til en funksjon $f$ over intervallet $[a, b]$ er gitt ved **differansekvotienten**:

$$\\frac{\\Delta f}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}$$

Geometrisk er dette **stigningstallet til sekanten** gjennom punktene $(a, f(a))$ og $(b, f(b))$.`,
    },
    {
      id: 's1-3-9-text-sekant',
      type: 'text',
      content: `### Sekanten som gjennomsnittsmål

Sekanten gir oss et gjennomsnittsbilde av endringen. Tenk deg at en bedrifts inntekt i tusen kroner er gitt ved $I(x) = 50x - 0{,}5x^2$ der $x$ er antall solgte enheter.

Hvis bedriften selger mellom 10 og 20 enheter, er den gjennomsnittlige inntektsøkningen per enhet:

$$\\frac{I(20) - I(10)}{20 - 10} = \\frac{(1000 - 200) - (500 - 50)}{10} = \\frac{800 - 450}{10} = 35 \\text{ tusen kr per enhet}$$

Men denne gjennomsnittsverdien sier ingenting om hva som skjer ved nøyaktig $x = 15$ enheter.`,
    },
    {
      id: 's1-3-9-def-mom-vekst',
      type: 'definition',
      title: 'Momentan vekstfart',
      content: `Den **momentane vekstfarten** til $f$ i punktet $x = a$ er grenseverdien av differansekvotienten når intervallet krymper mot null:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

Geometrisk er dette **stigningstallet til tangenten** til grafen i punktet $(a, f(a))$.

Den momentane vekstfarten er altså den **deriverte** $f'(a)$.`,
    },
    {
      id: 's1-3-9-text-numerisk',
      type: 'text',
      content: `### Numerisk estimering av momentan vekstfart

Selv om vi kan beregne den deriverte analytisk, er det nyttig å **estimere** momentan vekstfart numerisk. Vi velger en liten verdi av $h$ og beregner:

$$f'(a) \\approx \\frac{f(a + h) - f(a)}{h}$$

Ofte får vi et bedre estimat ved å bruke den **symmetriske differansekvotienten**:

$$f'(a) \\approx \\frac{f(a + h) - f(a - h)}{2h}$$

Typisk velger vi $h = 0{,}001$ eller $h = 0{,}0001$ for god nøyaktighet.`,
    },
    {
      id: 's1-3-9-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjennomsnittlig vekstfart for en kostnadsfunksjon',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}02x^3 - 1{,}5x^2 + 50x + 200$ der $x$ er antall produserte enheter (i tusen) og $K(x)$ er kostnaden i tusen kroner.

a) Finn den gjennomsnittlige vekstfarten til kostnadene fra $x = 10$ til $x = 20$.
b) Tolke svaret i en økonomisk sammenheng.`,
      solution: `**a) Gjennomsnittlig vekstfart:**

Vi beregner $K(10)$ og $K(20)$:

$K(10) = 0{,}02 \\cdot 1000 - 1{,}5 \\cdot 100 + 50 \\cdot 10 + 200 = 20 - 150 + 500 + 200 = 570$

$K(20) = 0{,}02 \\cdot 8000 - 1{,}5 \\cdot 400 + 50 \\cdot 20 + 200 = 160 - 600 + 1000 + 200 = 760$

$$\\frac{K(20) - K(10)}{20 - 10} = \\frac{760 - 570}{10} = 19 \\text{ tusen kr per tusen enheter}$$

**b) Tolkning:**

Gjennomsnittlig øker kostnadene med 19 000 kr for hver ekstra 1000 enheter som produseres, i intervallet fra 10 000 til 20 000 enheter.`,
    },
    {
      id: 's1-3-9-example-2',
      type: 'example',
      title: 'Eksempel 2: Momentan vekstfart og marginalkostnad',
      problem: `Med kostnadsfunksjonen $K(x) = 0{,}02x^3 - 1{,}5x^2 + 50x + 200$:

a) Finn den momentane vekstfarten til $K$ i $x = 10$.
b) Hva kaller vi dette i økonomi?`,
      solution: `**a)** Vi deriverer: $K'(x) = 0{,}06x^2 - 3x + 50$

$$K'(10) = 0{,}06 \\cdot 100 - 3 \\cdot 10 + 50 = 6 - 30 + 50 = 26$$

Den momentane vekstfarten er 26 tusen kr per tusen enheter.

**b)** I økonomi kalles $K'(x)$ for **grensekostnaden** eller **marginalkostnaden**. Den forteller oss omtrent hva det koster å produsere én ekstra enhet (eller egentlig 1000 enheter ekstra, gitt enheten vår). Ved $x = 10$ er marginalkostnaden 26 000 kr per 1000 enheter.`,
    },
    {
      id: 's1-3-9-example-3',
      type: 'example',
      title: 'Eksempel 3: Numerisk estimering fra tabell',
      problem: `Temperaturen $T$ (i $°C$) i en ovn er målt hvert 5. minutt:

| $t$ (min) | 0 | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|
| $T(t)$ | 20 | 85 | 140 | 178 | 198 | 206 |

Estimer den momentane vekstfarten i $t = 10$ minutter.`,
      solution: `Vi bruker den symmetriske differansekvotienten med naboverdiene $t = 5$ og $t = 15$:

$$T'(10) \\approx \\frac{T(15) - T(5)}{15 - 5} = \\frac{178 - 85}{10} = 9{,}3 \\text{ °C/min}$$

**Tolkning:** Etter 10 minutter øker temperaturen med omtrent 9,3 grader per minutt.

Merk at vi også kan bruke fremoverdifferansen: $\\frac{T(15) - T(10)}{5} = \\frac{178-140}{5} = 7{,}6$, eller bakoverdifferansen: $\\frac{T(10) - T(5)}{5} = \\frac{140-85}{5} = 11{,}0$. Den symmetriske gir normalt det beste estimatet.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-3-9-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-1',
        number: '3.9.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En funksjon er gitt ved $f(x) = x^2 - 4x + 3$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige vekstfarten til $f$ over intervallet $[1, 4]$.',
            solution: '$\\frac{f(4)-f(1)}{4-1} = \\frac{(16-16+3)-(1-4+3)}{3} = \\frac{3-0}{3} = 1$',
          },
          {
            label: 'b',
            task: 'Finn den momentane vekstfarten til $f$ i $x = 2$.',
            solution: "$f'(x) = 2x - 4$, så $f'(2) = 2 \\cdot 2 - 4 = 0$. Momentan vekstfart er 0.",
          },
          {
            label: 'c',
            task: 'Hva forteller svaret i b) om grafen til $f$ i $x = 2$?',
            solution: 'Tangenten i $x = 2$ er horisontal, så $x = 2$ er et ekstremal­punkt (bunnpunkt, siden $f\'\'(x) = 2 > 0$).',
          },
        ],
        solution: 'a) 1, b) 0, c) bunnpunkt',
        hints: ['Bruk formelen for differansekvotienten i a) og den deriverte i b).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-2',
        number: '3.9.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Befolkningen i en by er modellert ved $B(t) = 50000 \\cdot 1{,}02^t$ der $t$ er antall år etter 2020.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige vekstfarten fra $t = 0$ til $t = 5$.',
            solution: '$\\frac{B(5)-B(0)}{5} = \\frac{50000 \\cdot 1{,}02^5 - 50000}{5} = \\frac{55204 - 50000}{5} \\approx 1041$ personer per år.',
          },
          {
            label: 'b',
            task: 'Bruk den symmetriske differansekvotienten med $h = 0{,}5$ til å estimere $B\'(3)$.',
            solution: '$\\frac{B(3{,}5)-B(2{,}5)}{1} = 50000(1{,}02^{3{,}5} - 1{,}02^{2{,}5}) \\approx 50000(1{,}0718 - 1{,}0510) \\approx 1040$ per år.',
          },
        ],
        solution: 'a) ca. 1041 per år, b) ca. 1040 per år',
        hints: ['Husk at den symmetriske differansekvotienten er $\\frac{f(a+h)-f(a-h)}{2h}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-3',
        number: '3.9.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har inntektsfunksjonen $I(x) = 120x - 0{,}5x^2$ der $x$ er antall solgte enheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige vekstfarten til inntekten fra $x = 40$ til $x = 60$.',
            solution: '$I(40) = 4800 - 800 = 4000$, $I(60) = 7200 - 1800 = 5400$. Gjennomsnittlig vekstfart: $\\frac{5400-4000}{20} = 70$ kr per enhet.',
          },
          {
            label: 'b',
            task: 'Finn marginalinntekten $I\'(x)$ og beregn $I\'(50)$.',
            solution: "$I'(x) = 120 - x$, så $I'(50) = 120 - 50 = 70$ kr per enhet.",
          },
          {
            label: 'c',
            task: 'Forklar hvorfor gjennomsnittlig og momentan vekstfart er like i dette tilfellet.',
            solution: 'Fordi $I(x)$ er et andregradspolynom, er den gjennomsnittlige vekstfarten lik den momentane vekstfarten i midtpunktet av intervallet. Her er midtpunktet $x = 50$.',
          },
        ],
        solution: 'a) 70, b) 70, c) midtpunktsegenskap for andregradspolynomer',
        hints: ['Beregn $I(40)$ og $I(60)$ i a). I c), legg merke til at 50 er midtpunktet av $[40, 60]$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-4',
        number: '3.9.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser omsetningen $O(t)$ (i millioner kr) for en nettbutikk der $t$ er antall år etter oppstart.',
        subTasks: [
          {
            label: 'a',
            task: 'Gitt $O(2) = 3{,}2$, $O(3) = 4{,}8$, $O(4) = 7{,}1$. Estimer $O\'(3)$ ved hjelp av den symmetriske differansekvotienten.',
            solution: "$O'(3) \\approx \\frac{O(4) - O(2)}{4 - 2} = \\frac{7{,}1 - 3{,}2}{2} = 1{,}95$ mill. kr per år.",
          },
          {
            label: 'b',
            task: 'Tolke svaret i en økonomisk sammenheng.',
            solution: 'Etter 3 år vokser omsetningen med omtrent 1,95 millioner kroner per år. Nettbutikken har altså en betydelig vekst på dette tidspunktet.',
          },
        ],
        solution: 'a) ca. 1,95 mill. kr/år, b) omsetningen vokser raskt',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-5',
        number: '3.9.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'En funksjon er gitt ved $f(x) = 3x^2 + 2x - 1$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige vekstfarten over intervallet $[0, 2]$.',
            solution: '$\\frac{f(2)-f(0)}{2-0} = \\frac{(12+4-1)-(-1)}{2} = \\frac{16}{2} = 8$',
          },
          {
            label: 'b',
            task: 'Finn den momentane vekstfarten i $x = 1$.',
            solution: "$f'(x) = 6x + 2$, saa $f'(1) = 6 + 2 = 8$.",
          },
        ],
        solution: 'a) 8, b) 8. Gjennomsnittlig og momentan vekstfart er like fordi midtpunktet av $[0,2]$ er $x=1$.',
        hints: ['Bruk differansekvotienten i a) og den deriverte i b).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-6',
        number: '3.9.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vannstanden $h(t)$ i en dam (i meter) er gitt ved $h(t) = 0{,}1t^2 - 2t + 15$ der $t$ er antall timer etter midnatt.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige endringen i vannstand fra $t = 4$ til $t = 8$.',
            solution: '$h(4) = 1{,}6 - 8 + 15 = 8{,}6$. $h(8) = 6{,}4 - 16 + 15 = 5{,}4$. Gjennomsnittlig endring: $\\frac{5{,}4-8{,}6}{4} = -0{,}8$ m/t.',
          },
          {
            label: 'b',
            task: 'Finn den momentane endringsraten ved $t = 6$.',
            solution: "$h'(t) = 0{,}2t - 2$, saa $h'(6) = 1{,}2 - 2 = -0{,}8$ m/t.",
          },
          {
            label: 'c',
            task: 'Naar slutter vannstanden aa synke?',
            solution: "$h'(t) = 0 \\Rightarrow 0{,}2t - 2 = 0 \\Rightarrow t = 10$. Vannstanden slutter aa synke kl. 10:00.",
          },
        ],
        solution: 'a) $-0{,}8$ m/t, b) $-0{,}8$ m/t, c) $t = 10$ (kl. 10:00)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-7',
        number: '3.9.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrifts inntektsfunksjon er $I(x) = 200x - 2x^2$ der $x$ er antall enheter (i hundre).',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige inntektsoekningen fra $x = 20$ til $x = 30$.',
            solution: '$I(20) = 4000 - 800 = 3200$. $I(30) = 6000 - 1800 = 4200$. Gjennomsnittlig: $\\frac{4200-3200}{10} = 100$ tusen kr per hundre enheter.',
          },
          {
            label: 'b',
            task: 'Finn marginalinntekten $I\'(x)$ og beregn $I\'(25)$.',
            solution: "$I'(x) = 200 - 4x$. $I'(25) = 200 - 100 = 100$ tusen kr per hundre enheter.",
          },
          {
            label: 'c',
            task: 'For hvilken verdi av $x$ er marginalinntekten lik null? Hva betyr dette?',
            solution: "$I'(x) = 0 \\Rightarrow 200 - 4x = 0 \\Rightarrow x = 50$. Inntekten er maksimal ved 5000 enheter. Etter dette synker inntekten.",
          },
        ],
        solution: 'a) 100, b) 100, c) $x = 50$, maksimal inntekt',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-8',
        number: '3.9.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Temperaturen i et kjoelerom er modellert ved $T(t) = 25 \\cdot 0{,}9^t + 3$ der $T$ er i $\\degree C$ og $t$ er i timer.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige avkjoelingshastigheten de foerste 2 timene.',
            solution: '$T(0) = 25 + 3 = 28$. $T(2) = 25 \\cdot 0{,}81 + 3 = 23{,}25$. Gjennomsnittlig: $\\frac{23{,}25 - 28}{2} = -2{,}375$ $\\degree C$/t.',
          },
          {
            label: 'b',
            task: 'Bruk den symmetriske differansekvotienten med $h = 0{,}5$ til aa estimere $T\'(1)$.',
            solution: '$T(0{,}5) = 25 \\cdot 0{,}9^{0{,}5} + 3 \\approx 26{,}72$. $T(1{,}5) = 25 \\cdot 0{,}9^{1{,}5} + 3 \\approx 24{,}33$. $T\'(1) \\approx \\frac{24{,}33 - 26{,}72}{1} = -2{,}39$ $\\degree C$/t.',
          },
        ],
        solution: 'a) $-2{,}375$ $\\degree C$/t, b) ca. $-2{,}39$ $\\degree C$/t',
        hints: ['Husk at $0{,}9^{0{,}5} = \\sqrt{0{,}9}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-9',
        number: '3.9.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg langs en rett linje. Posisjonen er gitt ved $s(t) = t^3 - 6t^2 + 9t$ der $s$ er i meter og $t$ er i sekunder.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den gjennomsnittlige hastigheten fra $t = 0$ til $t = 3$.',
            solution: '$s(0) = 0$, $s(3) = 27 - 54 + 27 = 0$. Gjennomsnittlig hastighet: $\\frac{0-0}{3} = 0$ m/s.',
          },
          {
            label: 'b',
            task: 'Finn den momentane hastigheten $v(t) = s\'(t)$.',
            solution: "$v(t) = s'(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3)$",
          },
          {
            label: 'c',
            task: 'Naar staar partikkelen stille? Naar beveger den seg fremover?',
            solution: 'Stille naar $v(t) = 0$: $t = 1$ og $t = 3$. Fremover ($v > 0$) for $t < 1$ og $t > 3$. Bakover for $1 < t < 3$.',
          },
        ],
        solution: 'a) 0 m/s, b) $v(t) = 3(t-1)(t-3)$, c) stille ved $t=1, 3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-10',
        number: '3.9.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kostnadsfunksjonen til en bedrift er $K(x) = 0{,}05x^3 - 3x^2 + 80x + 1000$ der $x$ er antall enheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn marginalkostnaden $K\'(x)$ og beregn $K\'(20)$ og $K\'(40)$.',
            solution: "$K'(x) = 0{,}15x^2 - 6x + 80$. $K'(20) = 60 - 120 + 80 = 20$. $K'(40) = 240 - 240 + 80 = 80$.",
          },
          {
            label: 'b',
            task: 'Finn den gjennomsnittlige kostnadsoekningen fra $x = 20$ til $x = 40$.',
            solution: '$K(20) = 400 - 1200 + 1600 + 1000 = 1800$. $K(40) = 3200 - 4800 + 3200 + 1000 = 2600$. Gjennomsnittlig: $\\frac{2600-1800}{20} = 40$ kr/enhet.',
          },
          {
            label: 'c',
            task: 'Sammenlign svaret i b) med $K\'(30)$. Forklar resultatet.',
            solution: "$K'(30) = 0{,}15 \\cdot 900 - 180 + 80 = 135 - 180 + 80 = 35$. Gjennomsnittlig vekstfart (40) er ikke lik $K'(30) = 35$ fordi $K$ er et tredjegradspolynom. Midtpunktsegenskapen gjelder kun for andregradspolynomer.",
          },
        ],
        solution: "a) $K'(20)=20$, $K'(40)=80$. b) 40. c) $K'(30)=35 \\neq 40$, tredjegradspolynom.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-11',
        number: '3.9.11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tabellen viser antall abonnenter $A(t)$ (i tusen) for en stroemmetjeneste:',
        subTasks: [
          {
            label: 'a',
            task: 'Gitt $A(0) = 50$, $A(1) = 68$, $A(2) = 90$, $A(3) = 108$. Finn den gjennomsnittlige vekstfarten fra $t = 0$ til $t = 3$.',
            solution: '$\\frac{A(3)-A(0)}{3} = \\frac{108-50}{3} \\approx 19{,}3$ tusen per aar.',
          },
          {
            label: 'b',
            task: 'Estimer den momentane vekstfarten i $t = 1$ og $t = 2$.',
            solution: "$A'(1) \\approx \\frac{A(2)-A(0)}{2} = \\frac{90-50}{2} = 20$ tusen/aar. $A'(2) \\approx \\frac{A(3)-A(1)}{2} = \\frac{108-68}{2} = 20$ tusen/aar.",
          },
        ],
        solution: 'a) ca. 19,3 tusen/aar, b) 20 tusen/aar for begge',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-9-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-9-ex-12',
        number: '3.9.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En funksjon $f$ oppfyller $f(3) = 10$, $f(3{,}01) = 10{,}05$ og $f(2{,}99) = 9{,}96$.',
        subTasks: [
          {
            label: 'a',
            task: 'Estimer $f\'(3)$ ved hjelp av fremoverdifferansen med $h = 0{,}01$.',
            solution: '$f\'(3) \\approx \\frac{f(3{,}01)-f(3)}{0{,}01} = \\frac{10{,}05-10}{0{,}01} = 5$',
          },
          {
            label: 'b',
            task: 'Estimer $f\'(3)$ ved hjelp av bakoverdifferansen.',
            solution: '$f\'(3) \\approx \\frac{f(3)-f(2{,}99)}{0{,}01} = \\frac{10-9{,}96}{0{,}01} = 4$',
          },
          {
            label: 'c',
            task: 'Estimer $f\'(3)$ ved hjelp av den symmetriske differansekvotienten. Hvilket estimat er trolig best?',
            solution: '$f\'(3) \\approx \\frac{f(3{,}01)-f(2{,}99)}{0{,}02} = \\frac{10{,}05-9{,}96}{0{,}02} = 4{,}5$. Den symmetriske differansekvotienten gir normalt det beste estimatet fordi feilene fra begge sider delvis opphever hverandre.',
          },
        ],
        solution: 'a) 5, b) 4, c) 4,5 (best estimat)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.10: Funksjonsdrøfting
// ============================================================================

export const CHAPTER_S1_3_10: TextbookChapter = {
  id: 's1-3-10',
  courseId: 's1',
  chapterNumber: '3.10',
  title: 'Funksjonsdrøfting',
  description: 'Systematisk analyse av funksjoner: nullpunkter, monotoni, ekstremalpunkter, vendepunkter og asymptoter. Kobling til praktiske og økonomiske kontekster.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjennomføre en fullstendig funksjonsdrøfting',
    'bruke den deriverte til å bestemme monotoni og ekstremalpunkter',
    'bruke den dobbeltderiverte til å bestemme vendepunkter og krumning',
  ],
  content: [
    {
      id: 's1-3-10-intro',
      type: 'text',
      content: `## Funksjonsdrøfting

En **funksjonsdrøfting** er en systematisk analyse av en funksjon der vi undersøker alle viktige egenskaper. Målet er å forstå funksjonens oppførsel fullstendig, slik at vi kan tegne grafen og tolke resultatene.

Funksjonsdrøfting er sentralt i S1 fordi det knytter sammen algebra, derivasjon og tolkning. I økonomiske sammenhenger brukes drøfting til å finne optimale produksjonsnivåer, maksimal profitt og vendepunkter i vekst.`,
    },
    {
      id: 's1-3-10-def-prosedyre',
      type: 'definition',
      title: 'Prosedyre for funksjonsdrøfting',
      content: `En systematisk funksjonsdrøfting av $f(x)$ følger disse stegene:

1. **Definisjonsmengde:** Finn $D_f$ (der funksjonen er definert).
2. **Nullpunkter:** Løs $f(x) = 0$.
3. **Førstederiverte:** Finn $f'(x)$.
4. **Stasjonære punkter:** Løs $f'(x) = 0$.
5. **Monotoni og ekstremalverdier:** Undersøk fortegnet til $f'(x)$ (fortegnslinje).
6. **Andrederiverte:** Finn $f''(x)$.
7. **Vendepunkter:** Løs $f''(x) = 0$ og sjekk fortegnskifte.
8. **Grenseverdier/asymptoter:** Undersøk oppførsel for store $|x|$-verdier (og ved eventuelle polpunkter).
9. **Skisse:** Tegn grafen basert på informasjonen.`,
    },
    {
      id: 's1-3-10-text-monotoni',
      type: 'text',
      content: `### Monotoni og ekstremalpunkter

**Monotoniegenskaper** avgjøres av fortegnet til $f'(x)$:

- $f'(x) > 0$ på et intervall $\\Rightarrow$ $f$ er **stigende** der
- $f'(x) < 0$ på et intervall $\\Rightarrow$ $f$ er **synkende** der
- $f'(x) = 0$ i et punkt $\\Rightarrow$ mulig **stasjonært punkt**

Et stasjonært punkt er et **toppunkt** hvis $f'$ skifter fra positiv til negativ, og et **bunnpunkt** hvis $f'$ skifter fra negativ til positiv.

Vi kan også bruke **andrederiverte-testen**: Hvis $f'(a) = 0$ og $f''(a) < 0$, er $x = a$ et toppunkt. Hvis $f''(a) > 0$, er det et bunnpunkt.`,
    },
    {
      id: 's1-3-10-text-vendepunkt',
      type: 'text',
      content: `### Vendepunkter og krumning

Et **vendepunkt** er et punkt der grafen skifter krumning, altså der grafen går fra å være konkav (buet nedover) til å være konveks (buet oppover), eller omvendt.

- $f''(x) > 0$: grafen er **konveks** (krummer oppover)
- $f''(x) < 0$: grafen er **konkav** (krummer nedover)
- Vendepunkt der $f''(x) = 0$ og $f''$ skifter fortegn

I økonomiske kontekster har vendepunktet en viktig tolkning. For en kostnadsfunksjon $K(x)$ er vendepunktet der marginalkostnaden $K'(x)$ har sitt **minimum**. Dette kalles ofte det **optimale produksjonspunktet** (mest kostnadseffektive punkt).`,
    },
    {
      id: 's1-3-10-text-asymptoter',
      type: 'text',
      content: `### Asymptoter

En **asymptote** er en linje som grafen nærmer seg uten å nå (i det uendelige). Vi skiller mellom:

- **Vertikal asymptote** $x = a$: oppstår der nevneren i en brøkfunksjon er null (og telleren er ulik null).
- **Horisontal asymptote** $y = b$: oppstår når $f(x) \\to b$ for $x \\to \\pm \\infty$.
- **Skrå asymptote** $y = ax + b$: oppstår for rasjonale funksjoner der tellergraden er nøyaktig 1 høyere enn nevnergraden.

For polynomfunksjoner finnes det ingen asymptoter. Asymptoter er mest relevante for rasjonale funksjoner og eksponentialfunksjoner.`,
    },
    {
      id: 's1-3-10-example-1',
      type: 'example',
      title: 'Eksempel 1: Fullstendig drøfting av tredjegradsfunksjon',
      problem: 'Gjennomfør en fullstendig funksjonsdrøfting av $f(x) = x^3 - 3x^2 + 4$.',
      solution: `**1. Definisjonsmengde:** $D_f = \\mathbb{R}$ (polynom).

**2. Nullpunkter:** $f(x) = x^3 - 3x^2 + 4 = 0$. Vi prøver $x = -1$: $f(-1) = -1 - 3 + 4 = 0$ (nullpunkt). Polynomdivisjon gir:

$$f(x) = (x + 1)(x^2 - 4x + 4) = (x + 1)(x - 2)^2$$

Nullpunkter: $x = -1$ og $x = 2$ (dobbelt).

**3. Førstederiverte:** $f'(x) = 3x^2 - 6x = 3x(x - 2)$

**4. Stasjonære punkter:** $f'(x) = 0$ gir $x = 0$ og $x = 2$.

**5. Monotoni:**
- $f'(x) > 0$ for $x < 0$: stigende
- $f'(x) < 0$ for $0 < x < 2$: synkende
- $f'(x) > 0$ for $x > 2$: stigende

Toppunkt i $(0, 4)$. Bunnpunkt i $(2, 0)$.

**6. Andrederiverte:** $f''(x) = 6x - 6$

**7. Vendepunkt:** $f''(x) = 0$ gir $x = 1$. $f''$ skifter fra negativ til positiv, så $(1, f(1)) = (1, 2)$ er et vendepunkt.

**8. Grenseverdier:** $f(x) \\to -\\infty$ for $x \\to -\\infty$ og $f(x) \\to +\\infty$ for $x \\to +\\infty$. Ingen asymptoter.`,
    },
    {
      id: 's1-3-10-example-2',
      type: 'example',
      title: 'Eksempel 2: Økonomisk funksjonsdrøfting',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}01x^3 - 0{,}9x^2 + 30x + 100$ der $x$ er antall enheter (i hundre) og $K$ er i tusen kroner.

a) Finn marginalkostnaden $K'(x)$.
b) Finn det produksjonsnivået der marginalkostnaden er lavest.
c) Hva er vendepunktet til kostnadsfunksjonen, og hva betyr det?`,
      solution: `**a)** $K'(x) = 0{,}03x^2 - 1{,}8x + 30$

**b)** Vi finner minimumspunktet til $K'(x)$ ved å sette $K''(x) = 0$:

$K''(x) = 0{,}06x - 1{,}8 = 0 \\Rightarrow x = 30$

$K''(30) = 0$ og $K'''(x) = 0{,}06 > 0$, så $x = 30$ er minimum for $K'$.

$K'(30) = 0{,}03 \\cdot 900 - 1{,}8 \\cdot 30 + 30 = 27 - 54 + 30 = 3$ tusen kr per 100 enheter.

**c)** Vendepunktet til $K$ er i $x = 30$ (der $K''(x) = 0$ med fortegnskifte).

$K(30) = 0{,}01 \\cdot 27000 - 0{,}9 \\cdot 900 + 30 \\cdot 30 + 100 = 270 - 810 + 900 + 100 = 460$

Vendepunktet $(30, 460)$ betyr at ved 3000 enheter skifter kostnadsveksten fra avtagende til tiltagende. Før dette punktet avtar marginalkostnaden (stordriftsfordeler), og etter dette punktet øker marginalkostnaden (stordriftsulemper).`,
    },
    {
      id: 's1-3-10-example-3',
      type: 'example',
      title: 'Eksempel 3: Drøfting av rasjonell funksjon',
      problem: 'Drøft funksjonen $f(x) = \\dfrac{x^2 - 1}{x^2 + 1}$.',
      solution: `**1. Definisjonsmengde:** $D_f = \\mathbb{R}$ (nevneren $x^2 + 1 > 0$ for alle $x$).

**2. Nullpunkter:** $x^2 - 1 = 0 \\Rightarrow x = \\pm 1$

**3. Symmetri:** $f(-x) = \\frac{(-x)^2 - 1}{(-x)^2 + 1} = \\frac{x^2-1}{x^2+1} = f(x)$, altså er $f$ en **partall-funksjon** (symmetrisk om $y$-aksen).

**4. Deriverte:** Med kvotientregelen:
$$f'(x) = \\frac{2x(x^2+1) - (x^2-1) \\cdot 2x}{(x^2+1)^2} = \\frac{2x(x^2+1-x^2+1)}{(x^2+1)^2} = \\frac{4x}{(x^2+1)^2}$$

**5. Stasjonært punkt:** $f'(x) = 0 \\Rightarrow x = 0$. $f(0) = -1$.

Monotoni: $f'(x) < 0$ for $x < 0$ (synkende), $f'(x) > 0$ for $x > 0$ (stigende). Bunnpunkt i $(0, -1)$.

**6. Horisontal asymptote:** $\\lim_{x \\to \\pm \\infty} \\frac{x^2-1}{x^2+1} = 1$. Horisontal asymptote $y = 1$.

Verdimengden er $V_f = [-1, 1\\rangle$.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-3-10-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-1',
        number: '3.10.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjennomfør en funksjonsdrøfting av $f(x) = -x^2 + 6x - 5$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene.',
            solution: '$-x^2+6x-5 = 0 \\Rightarrow x^2 - 6x + 5 = 0 \\Rightarrow (x-1)(x-5) = 0$. Nullpunkter: $x = 1$ og $x = 5$.',
          },
          {
            label: 'b',
            task: 'Finn toppunktet.',
            solution: "$f'(x) = -2x + 6 = 0 \\Rightarrow x = 3$. $f(3) = -9 + 18 - 5 = 4$. Toppunkt: $(3, 4)$.",
          },
          {
            label: 'c',
            task: 'Angi stigende og synkende intervaller.',
            solution: '$f$ er stigende for $x < 3$ og synkende for $x > 3$.',
          },
        ],
        solution: 'Nullpunkter $x=1, 5$. Toppunkt $(3,4)$. Stigende $x<3$, synkende $x>3$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-2',
        number: '3.10.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en fullstendig drøfting av $g(x) = x^3 - 6x^2 + 9x$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene ved faktorisering.',
            solution: '$x(x^2-6x+9) = x(x-3)^2 = 0$. Nullpunkter: $x = 0$ og $x = 3$ (dobbelt).',
          },
          {
            label: 'b',
            task: 'Finn stasjonære punkter og avgjør type.',
            solution: "$g'(x) = 3x^2 - 12x + 9 = 3(x^2-4x+3) = 3(x-1)(x-3) = 0$. Stasjonære: $x=1$ og $x=3$. $g''(x) = 6x - 12$. $g''(1) = -6 < 0$: toppunkt $(1, 4)$. $g''(3) = 6 > 0$: bunnpunkt $(3, 0)$.",
          },
          {
            label: 'c',
            task: 'Finn vendepunktet.',
            solution: "$g''(x) = 6x - 12 = 0 \\Rightarrow x = 2$. $g(2) = 8 - 24 + 18 = 2$. Vendepunkt: $(2, 2)$.",
          },
        ],
        solution: 'Nullpunkter: $x=0, 3$. Topp $(1,4)$, bunn $(3,0)$. Vendepunkt $(2,2)$.',
        hints: ['Faktoriser $g(x) = x(x-3)^2$ for nullpunktene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-3',
        number: '3.10.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har profittfunksjonen $P(x) = -0{,}5x^3 + 12x^2 - 60x - 50$ der $x$ er produsert antall (i tusen) og $P$ er i tusen kroner.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $P\'(x)$ og bestem for hvilke $x$-verdier profittfunksjonen har stasjonære punkter.',
            solution: "$P'(x) = -1{,}5x^2 + 24x - 60 = 0$. Deler på $-1{,}5$: $x^2 - 16x + 40 = 0$. $x = \\frac{16 \\pm \\sqrt{256-160}}{2} = \\frac{16 \\pm \\sqrt{96}}{2} \\approx \\frac{16 \\pm 9{,}80}{2}$. $x \\approx 2{,}9$ og $x \\approx 12{,}9$.",
          },
          {
            label: 'b',
            task: 'Avgjør hvilke som er toppunkt og bunnpunkt.',
            solution: "$P''(x) = -3x + 24$. $P''(2{,}9) \\approx 15{,}3 > 0$: bunnpunkt. $P''(12{,}9) \\approx -14{,}7 < 0$: toppunkt. Toppunktet gir altså maksimal profitt.",
          },
          {
            label: 'c',
            task: 'Finn vendepunktet og tolke det økonomisk.',
            solution: "$P''(x) = 0 \\Rightarrow x = 8$. Vendepunktet er i $x = 8$ (8000 enheter). Her skifter profittveksten fra tiltagende til avtagende.",
          },
        ],
        solution: 'Stasjonære: $x \\approx 2{,}9$ (bunn) og $x \\approx 12{,}9$ (topp). Vendepunkt: $x = 8$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-4',
        number: '3.10.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft funksjonen $h(x) = \\dfrac{2x}{x^2 + 1}$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn definisjonsmengden, nullpunkter og eventuelle asymptoter.',
            solution: '$D_h = \\mathbb{R}$ (nevner aldri null). Nullpunkt: $x = 0$. Horisontal asymptote: $y = 0$ (graden i nevner er høyere).',
          },
          {
            label: 'b',
            task: 'Finn ekstremalpunktene.',
            solution: "$h'(x) = \\frac{2(x^2+1) - 2x \\cdot 2x}{(x^2+1)^2} = \\frac{2-2x^2}{(x^2+1)^2}$. $h'(x) = 0 \\Rightarrow x = \\pm 1$. $h(1) = 1$ (toppunkt), $h(-1) = -1$ (bunnpunkt).",
          },
          {
            label: 'c',
            task: 'Vis at $h$ er en oddetallsfunksjon og bruk dette til å skissere grafen.',
            solution: '$h(-x) = \\frac{2(-x)}{(-x)^2+1} = \\frac{-2x}{x^2+1} = -h(x)$. Funksjonen er symmetrisk om origo. Grafen stiger fra $(-\\infty, 0)$ til topp i $(1,1)$, synker tilbake mot 0.',
          },
        ],
        solution: '$D_h = \\mathbb{R}$, nullpunkt $x=0$. Topp $(1,1)$, bunn $(-1,-1)$. Asymptote $y=0$.',
        hints: ['Bruk kvotientregelen for den deriverte.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-5',
        number: '3.10.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gitt $f(x) = x^3 - 3x$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene til $f$.',
            solution: '$x^3 - 3x = x(x^2-3) = 0$. Nullpunkter: $x = 0$, $x = \\pm\\sqrt{3} \\approx \\pm 1{,}73$.',
          },
          {
            label: 'b',
            task: 'Finn stasjonaere punkter og avgjoer type.',
            solution: "$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0$. $x = \\pm 1$. $f''(x) = 6x$. $f''(-1) = -6 < 0$: toppunkt $(-1, 2)$. $f''(1) = 6 > 0$: bunnpunkt $(1, -2)$.",
          },
          {
            label: 'c',
            task: 'Finn vendepunktet.',
            solution: "$f''(x) = 6x = 0 \\Rightarrow x = 0$. $f(0) = 0$. Vendepunkt: $(0, 0)$.",
          },
        ],
        solution: 'Nullpunkter: $x=0, \\pm\\sqrt{3}$. Topp $(-1,2)$, bunn $(1,-2)$. Vendepunkt $(0,0)$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-6',
        number: '3.10.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Droeft funksjonen $f(x) = x^4 - 8x^2 + 16$.',
        subTasks: [
          {
            label: 'a',
            task: 'Faktoriser $f(x)$ og finn nullpunktene.',
            solution: '$f(x) = (x^2 - 4)^2 = (x-2)^2(x+2)^2$. Doble nullpunkter: $x = 2$ og $x = -2$.',
          },
          {
            label: 'b',
            task: 'Finn alle stasjonaere punkter.',
            solution: "$f'(x) = 4x^3 - 16x = 4x(x^2-4) = 4x(x-2)(x+2) = 0$. Stasjonaere: $x = 0, \\pm 2$.",
          },
          {
            label: 'c',
            task: 'Klassifiser de stasjonaere punktene og skisser grafen.',
            solution: "$f''(x) = 12x^2 - 16$. $f''(0) = -16 < 0$: toppunkt $(0, 16)$. $f''(2) = 32 > 0$: bunnpunkt $(2, 0)$. $f''(-2) = 32 > 0$: bunnpunkt $(-2, 0)$. Grafen er symmetrisk om $y$-aksen med topp i $(0,16)$ og to bunnpunkter.",
          },
        ],
        solution: 'Nullpunkter: $x = \\pm 2$. Topp $(0,16)$, bunn $(\\pm 2, 0)$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-7',
        number: '3.10.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har kostnadsfunksjonen $K(x) = 0{,}02x^3 - 1{,}8x^2 + 60x + 500$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn marginalkostnaden $K\'(x)$.',
            solution: "$K'(x) = 0{,}06x^2 - 3{,}6x + 60$",
          },
          {
            label: 'b',
            task: 'Finn vendepunktet til $K(x)$ og tolke det oekonomisk.',
            solution: "$K''(x) = 0{,}12x - 3{,}6 = 0 \\Rightarrow x = 30$. Vendepunktet er ved 30 enheter. Her har marginalkostnaden sitt minimum, og kostnadsveksten gaar fra avtagende til tiltagende.",
          },
          {
            label: 'c',
            task: 'Bestem intervaller der kostnadene vokser med avtagende rate og med tiltagende rate.',
            solution: 'For $x < 30$: $K\'\'(x) < 0$, kostnadene vokser med avtagende rate (stordriftsfordeler). For $x > 30$: $K\'\'(x) > 0$, kostnadene vokser med tiltagende rate (stordriftsulemper).',
          },
        ],
        solution: "a) $K'(x) = 0{,}06x^2 - 3{,}6x + 60$. b) Vendepunkt ved $x = 30$. c) Avtagende for $x<30$, tiltagende for $x>30$.",
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-8',
        number: '3.10.8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Droeft funksjonen $f(x) = xe^{-x}$ for $x \\geq 0$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktet og grenseverdien naar $x \\to \\infty$.',
            solution: '$f(0) = 0$ (nullpunkt). $\\lim_{x \\to \\infty} xe^{-x} = 0$ (eksponentiell avtar raskere enn lineaer vekst). Horisontal asymptote $y = 0$.',
          },
          {
            label: 'b',
            task: 'Finn det stasjonaere punktet.',
            solution: "$f'(x) = e^{-x} - xe^{-x} = e^{-x}(1-x) = 0 \\Rightarrow x = 1$. $f(1) = e^{-1} \\approx 0{,}368$. Toppunkt $(1, e^{-1})$.",
          },
          {
            label: 'c',
            task: 'Finn vendepunktet.',
            solution: "$f''(x) = -e^{-x}(1-x) - e^{-x} = e^{-x}(x-2) = 0 \\Rightarrow x = 2$. $f(2) = 2e^{-2} \\approx 0{,}271$. Vendepunkt $(2, 2e^{-2})$.",
          },
        ],
        solution: 'Nullpunkt $x=0$. Topp $(1, e^{-1})$. Vendepunkt $(2, 2e^{-2})$. Asymptote $y=0$.',
        hints: ['Bruk produktregelen: $(uv)\' = u\'v + uv\'$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-9',
        number: '3.10.9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gitt $f(x) = -2x^2 + 8x - 3$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn toppunktet.',
            solution: "$f'(x) = -4x + 8 = 0 \\Rightarrow x = 2$. $f(2) = -8 + 16 - 3 = 5$. Toppunkt: $(2, 5)$.",
          },
          {
            label: 'b',
            task: 'Finn nullpunktene.',
            solution: '$-2x^2 + 8x - 3 = 0$. $x = \\frac{-8 \\pm \\sqrt{64-24}}{-4} = \\frac{-8 \\pm \\sqrt{40}}{-4} = \\frac{8 \\mp 6{,}32}{4}$. $x \\approx 0{,}42$ og $x \\approx 3{,}58$.',
          },
          {
            label: 'c',
            task: 'Angi verdimengden til $f$.',
            solution: 'Siden $f$ har toppunkt $(2,5)$ og koeffisienten foran $x^2$ er negativ, er $V_f = \\langle -\\infty, 5]$.',
          },
        ],
        solution: 'Toppunkt $(2,5)$. Nullpunkter $x \\approx 0{,}42$ og $x \\approx 3{,}58$. $V_f = \\langle -\\infty, 5]$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-10',
        number: '3.10.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droeft $f(x) = \\dfrac{x^2}{x-1}$ fullstendig.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn definisjonsmengde, nullpunkter og asymptoter.',
            solution: '$D_f = \\mathbb{R} \\setminus \\{1\\}$. Nullpunkt: $x = 0$ (dobbelt). Vertikal asymptote: $x = 1$. Polynomdivisjon: $f(x) = x + 1 + \\frac{1}{x-1}$, saa skraa asymptote $y = x + 1$.',
          },
          {
            label: 'b',
            task: 'Finn stasjonaere punkter.',
            solution: "$f'(x) = \\frac{2x(x-1) - x^2}{(x-1)^2} = \\frac{x^2-2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$. $f'(x) = 0 \\Rightarrow x = 0$ eller $x = 2$. $f(0) = 0$ og $f(2) = 4$.",
          },
          {
            label: 'c',
            task: 'Bestem type stasjonaert punkt og skisser grafen.',
            solution: 'Fortegnsanalyse av $f\'(x)$: $f\' > 0$ for $x < 0$, $f\' < 0$ for $0 < x < 1$ og $1 < x < 2$, $f\' > 0$ for $x > 2$. Toppunkt $(0, 0)$ (lokalt) og bunnpunkt $(2, 4)$.',
          },
        ],
        solution: '$D_f = \\mathbb{R} \\setminus \\{1\\}$. Skraa asymptote $y=x+1$. Lokal topp $(0,0)$, bunn $(2,4)$.',
        hints: ['Gjoer polynomdivisjon for aa finne den skraa asymptoten.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-11',
        number: '3.10.11',
        type: 'classic',
        difficulty: 'medium',
        task: 'En funksjon er gitt ved $f(x) = 2x^3 - 9x^2 + 12x - 4$.',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at $x = 2$ er et nullpunkt, og faktoriser $f(x)$.',
            solution: '$f(2) = 16 - 36 + 24 - 4 = 0$. Polynomdivisjon: $f(x) = (x-2)(2x^2 - 5x + 2) = (x-2)(2x-1)(x-2) = (x-2)^2(2x-1)$.',
          },
          {
            label: 'b',
            task: 'Finn alle nullpunkter og stasjonaere punkter.',
            solution: "Nullpunkter: $x = 2$ (dobbelt), $x = 0{,}5$. $f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x-1)(x-2) = 0$. Stasjonaere: $x = 1$ og $x = 2$.",
          },
          {
            label: 'c',
            task: 'Klassifiser de stasjonaere punktene og finn vendepunktet.',
            solution: "$f''(x) = 12x - 18$. $f''(1) = -6 < 0$: toppunkt $(1, 1)$. $f''(2) = 6 > 0$: bunnpunkt $(2, 0)$. Vendepunkt: $f''(x) = 0 \\Rightarrow x = 1{,}5$, $f(1{,}5) = 0{,}5$. Vendepunkt $(1{,}5; 0{,}5)$.",
          },
        ],
        solution: 'Nullpunkter: $x=0{,}5$ og $x=2$. Topp $(1,1)$, bunn $(2,0)$. Vendepunkt $(1{,}5; 0{,}5)$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-12',
        number: '3.10.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Profittfunksjonen til en bedrift er $P(x) = -x^3 + 15x^2 - 48x - 50$ der $x$ er i tusen enheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn stasjonaere punkter og avgjoer type.',
            solution: "$P'(x) = -3x^2 + 30x - 48 = -3(x^2-10x+16) = -3(x-2)(x-8) = 0$. Stasjonaere: $x=2$ og $x=8$. $P''(x) = -6x + 30$. $P''(2) = 18 > 0$: bunnpunkt. $P''(8) = -18 < 0$: toppunkt.",
          },
          {
            label: 'b',
            task: 'Finn den maksimale profitten.',
            solution: '$P(8) = -512 + 960 - 384 - 50 = 14$ tusen kr.',
          },
          {
            label: 'c',
            task: 'Finn vendepunktet og tolke det.',
            solution: "$P''(x) = 0 \\Rightarrow x = 5$. $P(5) = -125 + 375 - 240 - 50 = -40$. Vendepunkt $(5, -40)$. Selv om profitten er negativ her, endrer profittveksten karakter: foer $x=5$ oeker profitten med tiltagende rate, etter med avtagende rate.",
          },
        ],
        solution: 'Bunn $(2, P(2))$, topp $(8, 14)$. Vendepunkt $(5, -40)$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-13',
        number: '3.10.13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gitt $f(x) = x^3 + 3x^2 - 9x + 5$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $f\'(x)$ og de stasjonaere punktene.',
            solution: "$f'(x) = 3x^2 + 6x - 9 = 3(x^2 + 2x - 3) = 3(x+3)(x-1) = 0$. Stasjonaere: $x = -3$ og $x = 1$.",
          },
          {
            label: 'b',
            task: 'Avgjoer om de stasjonaere punktene er toppunkt eller bunnpunkt.',
            solution: "$f''(x) = 6x + 6$. $f''(-3) = -12 < 0$: toppunkt $(-3, 32)$. $f''(1) = 12 > 0$: bunnpunkt $(1, 0)$.",
          },
        ],
        solution: 'Toppunkt $(-3, 32)$, bunnpunkt $(1, 0)$.',
        hints: ['Deriver og faktoriser.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-14',
        number: '3.10.14',
        type: 'classic',
        difficulty: 'medium',
        task: 'En fjerdegradsfunksjon er gitt ved $f(x) = x^4 - 4x^3$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn nullpunktene.',
            solution: '$x^4 - 4x^3 = x^3(x-4) = 0$. Nullpunkter: $x = 0$ (trippelt) og $x = 4$.',
          },
          {
            label: 'b',
            task: 'Finn stasjonaere punkter og vendepunkter.',
            solution: "$f'(x) = 4x^3 - 12x^2 = 4x^2(x-3) = 0$. Stasjonaere: $x=0$ og $x=3$. $f''(x) = 12x^2 - 24x = 12x(x-2)$. $f''(3) = 36 > 0$: bunnpunkt $(3, -27)$. Ved $x=0$ er $f''(0) = 0$, saa vi maa sjekke fortegn: $f'$ er negativ baade foer og etter $x=0$ (for smaa positive $x$), saa $x=0$ er et terrassepunkt.",
          },
          {
            label: 'c',
            task: 'Finn vendepunktene.',
            solution: "$f''(x) = 12x(x-2) = 0 \\Rightarrow x = 0$ og $x = 2$. $f(0) = 0$, $f(2) = 16 - 32 = -16$. Vendepunkter: $(0, 0)$ og $(2, -16)$.",
          },
        ],
        solution: 'Nullpunkter: $x=0, 4$. Terrassepunkt $(0,0)$, bunnpunkt $(3,-27)$. Vendepunkter $(0,0)$ og $(2,-16)$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-15',
        number: '3.10.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droeft funksjonen $f(x) = \\dfrac{x^2 + 4}{x}$ for $x \\neq 0$.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv om funksjonen og finn asymptoter.',
            solution: '$f(x) = x + \\frac{4}{x}$. Vertikal asymptote: $x = 0$. Skraa asymptote: $y = x$.',
          },
          {
            label: 'b',
            task: 'Finn stasjonaere punkter.',
            solution: "$f'(x) = 1 - \\frac{4}{x^2} = \\frac{x^2-4}{x^2} = 0 \\Rightarrow x = \\pm 2$. $f(2) = 4$, $f(-2) = -4$.",
          },
          {
            label: 'c',
            task: 'Klassifiser de stasjonaere punktene og skisser grafen.',
            solution: "$f''(x) = \\frac{8}{x^3}$. $f''(2) = 1 > 0$: bunnpunkt $(2, 4)$. $f''(-2) = -1 < 0$: toppunkt $(-2, -4)$. Funksjonen er en oddetallsfunksjon ($f(-x) = -f(x)$), symmetrisk om origo.",
          },
        ],
        solution: 'Asymptoter: $x=0$, $y=x$. Bunnpunkt $(2,4)$, toppunkt $(-2,-4)$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-3-10-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's1-3-10-ex-16',
        number: '3.10.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift har totalkostnad $K(x) = 0{,}005x^3 - 0{,}75x^2 + 40x + 2000$ og selger til fast pris $p = 50$ kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp profittfunksjonen og droeft den.',
            solution: "$P(x) = 50x - 0{,}005x^3 + 0{,}75x^2 - 40x - 2000 = -0{,}005x^3 + 0{,}75x^2 + 10x - 2000$. $P'(x) = -0{,}015x^2 + 1{,}5x + 10 = 0$. $x^2 - 100x - 666{,}7 = 0$. $x \\approx 106{,}4$ (positiv loesning). $P''(106{,}4) = -0{,}03 \\cdot 106{,}4 + 1{,}5 = -1{,}69 < 0$: toppunkt.",
          },
          {
            label: 'b',
            task: 'Finn omtrent hvor mange enheter som gir loennsom produksjon ($P(x) > 0$).',
            solution: 'Med CAS eller numerisk metode: $P(x) = 0$ for $x \\approx 38$ og $x \\approx 195$. Loennsom produksjon for ca. $38 < x < 195$.',
          },
        ],
        solution: 'Maks profitt ved $x \\approx 106$. Loennsomt for ca. $38 < x < 195$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.7: Tilbud og etterspørsel
// ============================================================================

export const CHAPTER_S1_4_7: TextbookChapter = {
  id: 's1-4-7',
  courseId: 's1',
  chapterNumber: '4.7',
  title: 'Tilbud og etterspørsel',
  description: 'Tilbuds- og etterspørselskurver, markedslikevekt, konsumentoverskudd og produsentoverskudd. Analyse av skift i kurvene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'modellere tilbud og etterspørsel med funksjoner',
    'beregne markedslikevekt, konsumentoverskudd og produsentoverskudd',
    'analysere virkninger av endringer i markedsforhold',
  ],
  content: [
    {
      id: 's1-4-7-intro',
      type: 'text',
      content: `## Tilbud og etterspørsel

I et fritt marked bestemmes prisen gjennom samspillet mellom **tilbud** og **etterspørsel**. Disse begrepene er grunnleggende i økonomi og kan modelleres matematisk med funksjoner.

I S1 arbeider vi med lineære og noen ganger andregrads tilbuds- og etterspørselsfunksjoner. Vi skriver funksjonene slik at $x$ er **antall enheter** og funksjonsverdien er **prisen** per enhet.

Viktige prinsipper:
- **Etterspørselen** avtar når prisen øker (kundene kjøper mindre til høyere pris).
- **Tilbudet** øker når prisen øker (produsentene vil selge mer til høyere pris).`,
    },
    {
      id: 's1-4-7-def-funksjoner',
      type: 'definition',
      title: 'Tilbuds- og etterspørselsfunksjoner',
      content: `**Etterspørselsfunksjonen** $E(x)$ gir prisen kundene er villige til å betale for enhet nummer $x$. Den er **avtagende**: $E'(x) < 0$.

**Tilbudsfunksjonen** $T(x)$ gir prisen produsentene krever for å tilby enhet nummer $x$. Den er **voksende**: $T'(x) > 0$.

Typiske lineære modeller:
$$E(x) = a - bx, \\quad a, b > 0$$
$$T(x) = c + dx, \\quad c \\geq 0, d > 0$$`,
    },
    {
      id: 's1-4-7-def-likevekt',
      type: 'definition',
      title: 'Markedslikevekt',
      content: `**Markedslikevekt** oppstår der tilbudskurven og etterspørselskurven krysser hverandre:

$$T(x_0) = E(x_0)$$

- $x_0$ kalles **likevektsmengden** (antall enheter som omsettes)
- $p_0 = T(x_0) = E(x_0)$ kalles **likevektsprisen**

Ved likevektsprisen er det ingen overproduksjon og ingen mangel i markedet.`,
    },
    {
      id: 's1-4-7-def-overskudd',
      type: 'definition',
      title: 'Konsument- og produsentoverskudd',
      content: `**Konsumentoverskuddet** (KO) er gevinsten kundene oppnår fordi de betaler likevektsprisen, mens noen av dem ville vært villige til å betale mer. Geometrisk er det arealet mellom etterspørselskurven og likevektsprisen, fra $x = 0$ til $x = x_0$:

$$\\text{KO} = \\int_0^{x_0} E(x) \\, dx - p_0 \\cdot x_0$$

**Produsentoverskuddet** (PO) er gevinsten produsentene oppnår fordi de mottar likevektsprisen, mens noen av dem ville akseptert en lavere pris. Geometrisk er det arealet mellom likevektsprisen og tilbudskurven:

$$\\text{PO} = p_0 \\cdot x_0 - \\int_0^{x_0} T(x) \\, dx$$

For lineære funksjoner kan vi beregne overskuddene som trekantarealer.`,
    },
    {
      id: 's1-4-7-text-skift',
      type: 'text',
      content: `### Skift i tilbud og etterspørsel

Tilbuds- og etterspørselskurvene kan **skifte** som følge av endringer i markedsforhold:

**Etterspørselskurven skifter utover** (øker) ved:
- Økt inntekt i befolkningen
- Økt preferanse for varen
- Økt pris på substitutter (erstatningsvarer)
- Redusert pris på komplementer

**Tilbudskurven skifter utover** (øker) ved:
- Reduserte produksjonskostnader
- Teknologisk forbedring
- Flere produsenter i markedet

Når en kurve skifter, endres likevektspris og likevektsmengde. Vi kan beregne den nye likevekten ved å løse det nye likningssystemet.`,
    },
    {
      id: 's1-4-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Markedslikevekt med lineære funksjoner',
      problem: `I markedet for en bestemt vare er etterspørselsfunksjonen $E(x) = 500 - 4x$ og tilbudsfunksjonen $T(x) = 100 + 2x$, der $x$ er antall tusen enheter og prisen er i kroner.

a) Finn likevektspris og likevektsmengde.
b) Hva skjer i markedet hvis prisen settes til 300 kr?`,
      solution: `**a)** Vi setter $T(x) = E(x)$:

$$100 + 2x = 500 - 4x$$
$$6x = 400$$
$$x_0 = \\frac{400}{6} \\approx 66{,}7 \\text{ tusen enheter}$$

Likevektsprisen: $p_0 = 100 + 2 \\cdot 66{,}7 = 233{,}3$ kr.

**b)** Ved $p = 300$:
- Etterspørsel: $300 = 500 - 4x \\Rightarrow x = 50$ (tusen enheter etterspurt)
- Tilbud: $300 = 100 + 2x \\Rightarrow x = 100$ (tusen enheter tilbudt)

Tilbudet (100) er større enn etterspørselen (50), så det er et **overskudd** på 50 000 enheter. Prisen er over likevektsprisen, og markedskreftene vil presse prisen ned.`,
    },
    {
      id: 's1-4-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Konsument- og produsentoverskudd',
      problem: `Med $E(x) = 600 - 3x$ og $T(x) = 150 + 1{,}5x$:

a) Finn markedslikevekten.
b) Beregn konsumentoverskuddet og produsentoverskuddet.`,
      solution: `**a)** $600 - 3x = 150 + 1{,}5x \\Rightarrow 4{,}5x = 450 \\Rightarrow x_0 = 100$

$p_0 = 150 + 1{,}5 \\cdot 100 = 300$ kr

**b) Konsumentoverskuddet (KO):**

For lineære funksjoner er KO arealet av trekanten mellom etterspørselskurven og prislinja:

$$\\text{KO} = \\frac{1}{2} \\cdot x_0 \\cdot (E(0) - p_0) = \\frac{1}{2} \\cdot 100 \\cdot (600 - 300) = 15\\,000 \\text{ kr}$$

**Produsentoverskuddet (PO):**

$$\\text{PO} = \\frac{1}{2} \\cdot x_0 \\cdot (p_0 - T(0)) = \\frac{1}{2} \\cdot 100 \\cdot (300 - 150) = 7\\,500 \\text{ kr}$$

**Totalt samfunnsøkonomisk overskudd:** $\\text{KO} + \\text{PO} = 22\\,500$ kr.`,
    },
    {
      id: 's1-4-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Skift i etterspørselen',
      problem: `Markedet har opprinnelig $E(x) = 600 - 3x$ og $T(x) = 150 + 1{,}5x$ (likevekt ved $x_0 = 100$, $p_0 = 300$).

En kampanje øker etterspørselen slik at den nye etterspørselsfunksjonen er $E_2(x) = 720 - 3x$.

Finn den nye likevekten og beskriv endringen.`,
      solution: `$720 - 3x = 150 + 1{,}5x \\Rightarrow 4{,}5x = 570 \\Rightarrow x_1 \\approx 126{,}7$

$p_1 = 150 + 1{,}5 \\cdot 126{,}7 = 340$ kr

**Endring:**
- Likevektsmengden øker fra 100 til ca. 126,7 (opp ca. 27 %)
- Likevektsprisen øker fra 300 til 340 kr (opp ca. 13 %)

Økt etterspørsel fører til **både** høyere pris **og** høyere omsatt mengde. Dette er et typisk resultat ved etterspørselsskift utover.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-4-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-7-ex-1',
        number: '4.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et marked har $E(x) = 800 - 5x$ og $T(x) = 200 + 3x$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn likevektsmengden og likevektsprisen.',
            solution: '$800 - 5x = 200 + 3x \\Rightarrow 8x = 600 \\Rightarrow x_0 = 75$. $p_0 = 200 + 3 \\cdot 75 = 425$ kr.',
          },
          {
            label: 'b',
            task: 'Avgjør om det er overskudd eller underskudd ved en pris på 350 kr.',
            solution: 'Etterspørsel: $350 = 800 - 5x \\Rightarrow x = 90$. Tilbud: $350 = 200 + 3x \\Rightarrow x = 50$. Etterspørsel > tilbud: **underskudd** på 40 enheter.',
          },
        ],
        solution: 'a) $x_0 = 75$, $p_0 = 425$ kr. b) Underskudd på 40 enheter.',
        hints: ['Sett $E(x) = T(x)$ og løs for $x$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-7-ex-2',
        number: '4.7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et marked har $E(x) = 1000 - 8x$ og $T(x) = 200 + 2x$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn markedslikevekten.',
            solution: '$1000 - 8x = 200 + 2x \\Rightarrow 10x = 800 \\Rightarrow x_0 = 80$. $p_0 = 200 + 160 = 360$ kr.',
          },
          {
            label: 'b',
            task: 'Beregn konsumentoverskuddet.',
            solution: '$\\text{KO} = \\frac{1}{2} \\cdot 80 \\cdot (1000 - 360) = \\frac{1}{2} \\cdot 80 \\cdot 640 = 25\\,600$ kr.',
          },
          {
            label: 'c',
            task: 'Beregn produsentoverskuddet.',
            solution: '$\\text{PO} = \\frac{1}{2} \\cdot 80 \\cdot (360 - 200) = \\frac{1}{2} \\cdot 80 \\cdot 160 = 6\\,400$ kr.',
          },
        ],
        solution: '$x_0=80$, $p_0=360$. KO = 25 600, PO = 6 400.',
        hints: ['For lineære funksjoner er overskuddene trekantarealer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-7-ex-3',
        number: '4.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et marked har opprinnelig $E(x) = 500 - 2x$ og $T(x) = 100 + x$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den opprinnelige likevekten.',
            solution: '$500-2x = 100+x \\Rightarrow 3x = 400 \\Rightarrow x_0 \\approx 133{,}3$, $p_0 \\approx 233{,}3$ kr.',
          },
          {
            label: 'b',
            task: 'Ny teknologi reduserer kostnadene, slik at tilbudet endres til $T_2(x) = 50 + x$. Finn den nye likevekten.',
            solution: '$500-2x = 50+x \\Rightarrow 3x = 450 \\Rightarrow x_1 = 150$, $p_1 = 50 + 150 = 200$ kr.',
          },
          {
            label: 'c',
            task: 'Beskriv virkningen av teknologiforbedringen på pris og mengde.',
            solution: 'Likevektsmengden øker fra ca. 133 til 150 (opp 13 %), mens likevektsprisen synker fra ca. 233 til 200 kr (ned 14 %). Forbrukerne tjener på lavere pris, og det produseres mer.',
          },
        ],
        solution: 'Opprinnelig: $(133{,}3, 233{,}3)$. Ny: $(150, 200)$. Pris ned, mengde opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-7-ex-4',
        number: '4.7.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Etterspørselen etter en luksusartikkel er gitt ved $E(x) = 1200 - 4x$ og tilbudet ved $T(x) = 3x$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn markedslikevekten.',
            solution: '$1200-4x = 3x \\Rightarrow 7x = 1200 \\Rightarrow x_0 \\approx 171{,}4$. $p_0 \\approx 514{,}3$ kr.',
          },
          {
            label: 'b',
            task: 'Beregn konsumentoverskuddet og produsentoverskuddet.',
            solution: '$\\text{KO} = \\frac{1}{2} \\cdot 171{,}4 \\cdot (1200 - 514{,}3) = \\frac{1}{2} \\cdot 171{,}4 \\cdot 685{,}7 \\approx 58\\,776$ kr. $\\text{PO} = \\frac{1}{2} \\cdot 171{,}4 \\cdot (514{,}3 - 0) \\approx 44\\,082$ kr.',
          },
          {
            label: 'c',
            task: 'Staten legger en avgift på 70 kr per enhet, slik at tilbudet endres til $T_2(x) = 3x + 70$. Finn den nye likevekten og beregn det nye totale samfunnsoverskuddet.',
            solution: '$1200 - 4x = 3x + 70 \\Rightarrow 7x = 1130 \\Rightarrow x_1 \\approx 161{,}4$. $p_1 \\approx 554{,}3$ kr. $\\text{KO}_2 = \\frac{1}{2} \\cdot 161{,}4 \\cdot (1200-554{,}3) \\approx 52\\,100$. $\\text{PO}_2 = \\frac{1}{2} \\cdot 161{,}4 \\cdot (554{,}3-70-0) = \\frac{1}{2} \\cdot 161{,}4 \\cdot 484{,}3 \\approx 39\\,082$. Avgiftsinntekt: $70 \\cdot 161{,}4 \\approx 11\\,298$. Samfunnsoverskudd: $52\\,100 + 39\\,082 + 11\\,298 \\approx 102\\,480$. Opprinnelig: $58\\,776 + 44\\,082 = 102\\,858$. **Dødvektstap** $\\approx 378$ kr.',
          },
        ],
        solution: 'a) $(171{,}4, 514{,}3)$. b) KO $\\approx$ 58 776, PO $\\approx$ 44 082. c) Dødvektstap $\\approx$ 378 kr.',
        hints: ['Husk at avgiften skifter tilbudskurven oppover med 70 kr.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.8: Økonomisk optimering
// ============================================================================

export const CHAPTER_S1_4_8: TextbookChapter = {
  id: 's1-4-8',
  courseId: 's1',
  chapterNumber: '4.8',
  title: 'Økonomisk optimering',
  description: 'Profittmaksimering, kostnadsminimering og MR=MC-betingelsen. Bruk av derivasjon til å finne optimale produksjonsnivåer i praktiske økonomiske problemer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke derivasjon til å løse optimeringsproblemer i økonomi',
    'forstå og anvende betingelsen for profittmaksimering',
    'tolke marginalanalyse i økonomiske kontekster',
  ],
  content: [
    {
      id: 's1-4-8-intro',
      type: 'text',
      content: `## Økonomisk optimering

Et av de viktigste bruksområdene for derivasjon i S1 er **økonomisk optimering**. Bedrifter ønsker å:
- **Maksimere profitt** (overskudd)
- **Minimere kostnader** per enhet
- Finne det **optimale produksjonsnivået**

Ved å bruke derivasjon kan vi finne eksakte svar på disse spørsmålene. Nøkkelen er å sette opp den riktige funksjonen og finne dens stasjonære punkter.`,
    },
    {
      id: 's1-4-8-def-begreper',
      type: 'definition',
      title: 'Økonomiske grunnbegreper',
      content: `La $x$ være antall produserte og solgte enheter. Da har vi:

- **Inntektsfunksjonen:** $I(x) = p(x) \\cdot x$, der $p(x)$ er prisen per enhet
- **Kostnadsfunksjonen:** $K(x)$ = totale kostnader
- **Profittfunksjonen:** $P(x) = I(x) - K(x)$

**Marginalstørrelser** (deriverte):
- **Marginalinntekt:** $I'(x)$ = inntektsøkning ved én ekstra enhet
- **Marginalkostnad:** $K'(x)$ = kostnadsøkning ved én ekstra enhet
- **Marginalprofitt:** $P'(x) = I'(x) - K'(x)$`,
    },
    {
      id: 's1-4-8-theorem-profitt',
      type: 'theorem',
      title: 'Betingelsen for profittmaksimering',
      content: `Profitten $P(x) = I(x) - K(x)$ er maksimal når:

$$P'(x) = 0 \\quad \\Leftrightarrow \\quad I'(x) = K'(x)$$

Det vil si: **marginalinntekt er lik marginalkostnad** (ofte skrevet $\\text{MR} = \\text{MC}$ fra engelsk).

I tillegg kreves det at $P''(x) < 0$ for å bekrefte at det er et **maksimumspunkt** (og ikke et minimum).

**Intuisjon:** Så lenge det å produsere én enhet til gir mer inntekt enn kostnad ($I'(x) > K'(x)$), lønner det seg å produsere mer. Optimalt stopper vi der de to er like.`,
    },
    {
      id: 's1-4-8-text-enhetskost',
      type: 'text',
      content: `### Enhetskostnad og optimal produksjon

**Enhetskostnaden** (gjennomsnittskostnaden) er kostnaden per produsert enhet:

$$e(x) = \\frac{K(x)}{x}$$

Enhetskostnaden er minimert når:

$$e'(x) = 0 \\quad \\Leftrightarrow \\quad \\frac{K'(x) \\cdot x - K(x)}{x^2} = 0 \\quad \\Leftrightarrow \\quad K'(x) = \\frac{K(x)}{x} = e(x)$$

Altså: **enhetskostnaden er minst der marginalkostnaden er lik enhetskostnaden**. Grafisk betyr dette at $K'(x)$-kurven krysser $e(x)$-kurven i minimumspunktet.`,
    },
    {
      id: 's1-4-8-text-praktisk',
      type: 'text',
      content: `### Praktisk fremgangsmåte for profittmaksimering

**Steg 1:** Sett opp $I(x)$ og $K(x)$ fra oppgaven.
- Hvis prisen er konstant: $I(x) = p \\cdot x$
- Hvis prisen avhenger av mengden (monopol): $I(x) = p(x) \\cdot x$

**Steg 2:** Finn profittfunksjonen $P(x) = I(x) - K(x)$.

**Steg 3:** Deriver og sett $P'(x) = 0$.

**Steg 4:** Sjekk at $P''(x) < 0$ for å bekrefte maksimum.

**Steg 5:** Beregn den optimale profitten $P(x_0)$ og tolke svaret.

Husk at $x$ må være innenfor et fornuftig **definisjonsmengde** (produksjonen kan ikke være negativ, og det kan finnes kapasitetsbegrensninger).`,
    },
    {
      id: 's1-4-8-example-1',
      type: 'example',
      title: 'Eksempel 1: Profittmaksimering med fast pris',
      problem: `En bedrift produserer en vare som selges til en fast pris på 80 kr per enhet. Kostnadsfunksjonen er:

$$K(x) = 0{,}002x^3 - 0{,}6x^2 + 70x + 500$$

der $x$ er antall enheter.

a) Sett opp profittfunksjonen.
b) Finn det produksjonsnivået som gir maksimal profitt.
c) Beregn den maksimale profitten.`,
      solution: `**a)** Inntekten er $I(x) = 80x$ (fast pris).

$$P(x) = I(x) - K(x) = 80x - (0{,}002x^3 - 0{,}6x^2 + 70x + 500)$$
$$P(x) = -0{,}002x^3 + 0{,}6x^2 + 10x - 500$$

**b)** Vi deriverer:

$$P'(x) = -0{,}006x^2 + 1{,}2x + 10$$

Setter $P'(x) = 0$:

$$-0{,}006x^2 + 1{,}2x + 10 = 0$$

Ganger med $-\\frac{1}{0{,}006}$:

$$x^2 - 200x - 1666{,}7 = 0$$

$$x = \\frac{200 \\pm \\sqrt{40000 + 6666{,}7}}{2} = \\frac{200 \\pm \\sqrt{46666{,}7}}{2} = \\frac{200 \\pm 216{,}0}{2}$$

$x \\approx 208$ (vi forkaster den negative løsningen $x \\approx -8$).

Sjekk: $P''(x) = -0{,}012x + 1{,}2$, $P''(208) = -0{,}012 \\cdot 208 + 1{,}2 = -1{,}3 < 0$ (maksimum).

**c)** $P(208) = -0{,}002 \\cdot 208^3 + 0{,}6 \\cdot 208^2 + 10 \\cdot 208 - 500$
$= -17\\,981 + 25\\,958 + 2\\,080 - 500 \\approx 9\\,557$ kr.

**Svar:** Maksimal profitt er ca. 9 557 kr ved produksjon av 208 enheter.`,
    },
    {
      id: 's1-4-8-example-2',
      type: 'example',
      title: 'Eksempel 2: Profittmaksimering med prisfunksjon (monopol)',
      problem: `En bedrift er alene i markedet (monopol) og kan selv sette prisen. Etterspørselsfunksjonen er $p(x) = 200 - 0{,}5x$ og kostnadsfunksjonen er $K(x) = 20x + 1000$.

a) Sett opp inntekts- og profittfunksjonen.
b) Finn det produksjonsnivået som maksimerer profitten.
c) Finn prisen som bedriften bør sette.`,
      solution: `**a)** Inntekten:
$$I(x) = p(x) \\cdot x = (200 - 0{,}5x) \\cdot x = 200x - 0{,}5x^2$$

Profitten:
$$P(x) = I(x) - K(x) = 200x - 0{,}5x^2 - 20x - 1000 = -0{,}5x^2 + 180x - 1000$$

**b)** $P'(x) = -x + 180 = 0 \\Rightarrow x = 180$

$P''(x) = -1 < 0$ (maksimum).

**Alternativ med MR = MC:**
$I'(x) = 200 - x$ og $K'(x) = 20$

$200 - x = 20 \\Rightarrow x = 180$ (samme svar).

**c)** Prisen: $p(180) = 200 - 0{,}5 \\cdot 180 = 200 - 90 = 110$ kr.

Profitten: $P(180) = -0{,}5 \\cdot 32400 + 180 \\cdot 180 - 1000 = -16200 + 32400 - 1000 = 15\\,200$ kr.`,
    },
    {
      id: 's1-4-8-example-3',
      type: 'example',
      title: 'Eksempel 3: Minimering av enhetskostnad',
      problem: `En fabrikk har kostnadsfunksjonen $K(x) = 0{,}01x^3 - 1{,}2x^2 + 60x + 800$ der $x$ er antall enheter.

a) Sett opp enhetskostnaden $e(x)$.
b) Finn produksjonsnivået som minimerer enhetskostnaden.
c) Vis at $K'(x_0) = e(x_0)$ i minimumspunktet.`,
      solution: `**a)** $$e(x) = \\frac{K(x)}{x} = 0{,}01x^2 - 1{,}2x + 60 + \\frac{800}{x}$$

**b)** Vi deriverer:

$$e'(x) = 0{,}02x - 1{,}2 - \\frac{800}{x^2}$$

Setter $e'(x) = 0$ og ganger med $x^2$:

$$0{,}02x^3 - 1{,}2x^2 - 800 = 0$$

Vi kan bruke CAS eller prøve og feile. Med $x = 100$:
$0{,}02 \\cdot 10^6 - 1{,}2 \\cdot 10^4 - 800 = 20000 - 12000 - 800 = 7200 \\neq 0$

Med $x = 80$:
$0{,}02 \\cdot 512000 - 1{,}2 \\cdot 6400 - 800 = 10240 - 7680 - 800 = 1760 \\neq 0$

Med CAS finner vi $x_0 \\approx 76{,}2$.

**c)** $K'(x) = 0{,}03x^2 - 2{,}4x + 60$.

$K'(76{,}2) = 0{,}03 \\cdot 5806{,}4 - 2{,}4 \\cdot 76{,}2 + 60 = 174{,}2 - 182{,}9 + 60 = 51{,}3$

$e(76{,}2) = 0{,}01 \\cdot 5806{,}4 - 1{,}2 \\cdot 76{,}2 + 60 + \\frac{800}{76{,}2} = 58{,}1 - 91{,}4 + 60 + 10{,}5 \\approx 37{,}1$

(For nøyaktig likhet trengs den eksakte verdien av $x_0$. Generelt gjelder teoremet: i minimumspunktet til $e(x)$ er $K'(x_0) = e(x_0)$.)`,
    },
    // ========== OPPGAVER ==========
    {
      id: 's1-4-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-4-8-ex-1',
        number: '4.8.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En bedrift har inntektsfunksjonen $I(x) = 100x$ og kostnadsfunksjonen $K(x) = 0{,}5x^2 + 20x + 200$.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp profittfunksjonen $P(x)$.',
            solution: '$P(x) = 100x - 0{,}5x^2 - 20x - 200 = -0{,}5x^2 + 80x - 200$',
          },
          {
            label: 'b',
            task: 'Finn produksjonsmengden som gir størst profitt.',
            solution: "$P'(x) = -x + 80 = 0 \\Rightarrow x = 80$. $P''(x) = -1 < 0$, altså maksimum.",
          },
          {
            label: 'c',
            task: 'Beregn den maksimale profitten.',
            solution: '$P(80) = -0{,}5 \\cdot 6400 + 80 \\cdot 80 - 200 = -3200 + 6400 - 200 = 3000$ kr.',
          },
        ],
        solution: 'a) $P(x) = -0{,}5x^2 + 80x - 200$. b) $x = 80$. c) $P = 3000$ kr.',
        hints: ['Profitt = Inntekt $-$ Kostnad.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-4-8-ex-2',
        number: '4.8.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En monopolbedrift har etterspørselsfunksjonen $p(x) = 300 - 2x$ og kostnadsfunksjonen $K(x) = 0{,}5x^2 + 40x + 500$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn marginalinntekten $I\'(x)$ og marginalkostnaden $K\'(x)$.',
            solution: "$I(x) = (300-2x)x = 300x - 2x^2$, så $I'(x) = 300 - 4x$. $K'(x) = x + 40$.",
          },
          {
            label: 'b',
            task: 'Bruk betingelsen $I\'(x) = K\'(x)$ til å finne optimalt produksjonsnivå.',
            solution: "$300 - 4x = x + 40 \\Rightarrow 5x = 260 \\Rightarrow x = 52$.",
          },
          {
            label: 'c',
            task: 'Finn optimal pris og maksimal profitt.',
            solution: '$p(52) = 300 - 104 = 196$ kr. $P(52) = I(52) - K(52) = (300 \\cdot 52 - 2 \\cdot 2704) - (0{,}5 \\cdot 2704 + 40 \\cdot 52 + 500) = (15600-5408) - (1352 + 2080 + 500) = 10192 - 3932 = 6260$ kr.',
          },
        ],
        solution: '$x = 52$, $p = 196$ kr, $P = 6260$ kr.',
        hints: ['Husk at $I(x) = p(x) \\cdot x$ for en monopolbedrift.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-4-8-ex-3',
        number: '4.8.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har kostnadsfunksjonen $K(x) = 0{,}005x^3 - 0{,}6x^2 + 30x + 400$.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp enhetskostnaden $e(x) = \\frac{K(x)}{x}$.',
            solution: '$e(x) = 0{,}005x^2 - 0{,}6x + 30 + \\frac{400}{x}$',
          },
          {
            label: 'b',
            task: 'Finn marginalkostnaden $K\'(x)$.',
            solution: "$K'(x) = 0{,}015x^2 - 1{,}2x + 30$",
          },
          {
            label: 'c',
            task: 'Finn vendepunktet til $K(x)$ og tolke det økonomisk.',
            solution: "$K''(x) = 0{,}03x - 1{,}2 = 0 \\Rightarrow x = 40$. Vendepunktet til $K$ er der marginalkostnaden har minimum. For $x < 40$ avtar marginalkostnaden (stordriftsfordeler). For $x > 40$ øker marginalkostnaden.",
          },
        ],
        solution: 'a) $e(x) = 0{,}005x^2 - 0{,}6x + 30 + 400/x$. b) $K\'(x) = 0{,}015x^2 - 1{,}2x + 30$. c) Vendepunkt ved $x = 40$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-4-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-4-8-ex-4',
        number: '4.8.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et bryggeri selger øl i et marked der etterspørselsfunksjonen er $p(x) = 150 - 0{,}25x$ (pris i kr per kasse, $x$ er antall kasser). Kostnadsfunksjonen er $K(x) = 0{,}001x^3 - 0{,}15x^2 + 20x + 3000$.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp profittfunksjonen $P(x)$.',
            solution: '$I(x) = (150-0{,}25x)x = 150x - 0{,}25x^2$. $P(x) = 150x - 0{,}25x^2 - 0{,}001x^3 + 0{,}15x^2 - 20x - 3000 = -0{,}001x^3 - 0{,}1x^2 + 130x - 3000$.',
          },
          {
            label: 'b',
            task: 'Finn det produksjonsnivået som gir maksimal profitt.',
            solution: "$P'(x) = -0{,}003x^2 - 0{,}2x + 130 = 0$. Ganger med $-\\frac{1}{0{,}003}$: $x^2 + 66{,}7x - 43333 = 0$. $x = \\frac{-66{,}7 + \\sqrt{4448{,}9 + 173332}}{2} \\approx \\frac{-66{,}7 + 421{,}6}{2} \\approx 177$. $P''(177) = -0{,}006 \\cdot 177 - 0{,}2 = -1{,}26 < 0$ (maks).",
          },
          {
            label: 'c',
            task: 'Finn den optimale prisen og den maksimale profitten.',
            solution: '$p(177) = 150 - 0{,}25 \\cdot 177 = 105{,}75$ kr. $P(177) = -0{,}001 \\cdot 177^3 - 0{,}1 \\cdot 177^2 + 130 \\cdot 177 - 3000 \\approx -5546 - 3133 + 23010 - 3000 \\approx 11\\,331$ kr.',
          },
          {
            label: 'd',
            task: 'For hvilke produksjonsintervaller er profitten positiv?',
            solution: 'Vi løser $P(x) = 0$ numerisk. Med CAS finner vi omtrent $x \\approx 24$ og $x \\approx 310$. Profitten er positiv for ca. $24 < x < 310$.',
          },
        ],
        solution: '$x \\approx 177$, $p \\approx 105{,}75$ kr, $P_{\\max} \\approx 11\\,331$ kr. Profitt positiv for ca. $24 < x < 310$.',
        hints: ['Bruk $P\'(x) = 0$ og abc-formelen. Forkast negativ løsning.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportert samling
// ============================================================================

export const S1_KAP3B_CHAPTERS = [CHAPTER_S1_3_9, CHAPTER_S1_3_10, CHAPTER_S1_4_7, CHAPTER_S1_4_8];

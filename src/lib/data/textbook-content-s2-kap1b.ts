/**
 * Tekstbok kapitler for s2 - Utvidelser til Kapittel 1 (Integrasjon) og Kapittel 3 (Funksjonsdrøfting)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S2_1_5: TextbookChapter = {
  id: 's2-1-5',
  courseId: 's2',
  chapterNumber: '1.5',
  title: 'Numerisk integrasjon',
  description: 'Lær trapesformelen, Simpsons regel, feilestimering og praktisk bruk av numerisk integrasjon når analytisk integrasjon er vanskelig eller umulig.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke numeriske metoder til å beregne tilnærmede verdier av bestemte integraler',
    'vurdere nøyaktigheten av numeriske tilnærminger'
  ],
  content: [
    {
      id: 's2-1-5-intro',
      type: 'text',
      content: `## Hvorfor numerisk integrasjon?

Mange funksjoner lar seg ikke integrere analytisk. For eksempel har $\\int e^{-x^2} \\, dx$ ingen elementær antiderivert. I slike tilfeller bruker vi **numeriske metoder** for å beregne tilnærmede verdier av bestemte integraler.

Numerisk integrasjon er også svært nyttig når vi bare har datapunkter (målinger) og ikke kjenner funksjonsuttrykket.`
    },
    {
      id: 's2-1-5-def-1',
      type: 'definition',
      title: 'Numerisk integrasjon',
      content: `**Numerisk integrasjon** er metoder for å beregne tilnærmede verdier av bestemte integraler $\\int_a^b f(x) \\, dx$.

Grunnideen er å dele intervallet $[a, b]$ inn i $n$ delintervaller, hver med bredde $h = \\frac{b - a}{n}$, og tilnærme arealet under grafen med enklere geometriske figurer.

Delingspunktene er $x_0 = a, \\ x_1 = a + h, \\ x_2 = a + 2h, \\ \\ldots, \\ x_n = b$.`
    },
    {
      id: 's2-1-5-theorem-1',
      type: 'theorem',
      title: 'Trapesformelen',
      content: `Med $n$ delintervaller og $h = \\frac{b-a}{n}$ er **trapesformelen**:

$$T_n = \\frac{h}{2}\\Big[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\Big]$$

$$= \\frac{h}{2}\\left[f(x_0) + f(x_n) + 2\\sum_{k=1}^{n-1} f(x_k)\\right]$$

Trapesformelen tilnærmer arealet ved å erstatte kurvebuen mellom to nabopunkter med en rett linje, slik at hvert delområde blir et trapes.`
    },
    {
      id: 's2-1-5-example-1',
      type: 'example',
      title: 'Trapesformelen med 4 delintervaller',
      problem: `Bruk trapesformelen med $n = 4$ til å tilnærme $\\int_0^2 e^{-x^2} \\, dx$.`,
      solution: `Vi har $a = 0$, $b = 2$, $n = 4$ og $h = \\frac{2-0}{4} = 0{,}5$.

Delingspunktene og funksjonsverdiene:

| $k$ | $x_k$ | $f(x_k) = e^{-x_k^2}$ |
|-----|--------|------------------------|
| 0 | 0 | $e^0 = 1$ |
| 1 | 0,5 | $e^{-0{,}25} \\approx 0{,}7788$ |
| 2 | 1,0 | $e^{-1} \\approx 0{,}3679$ |
| 3 | 1,5 | $e^{-2{,}25} \\approx 0{,}1054$ |
| 4 | 2,0 | $e^{-4} \\approx 0{,}0183$ |

$$T_4 = \\frac{0{,}5}{2}\\Big[1 + 2(0{,}7788) + 2(0{,}3679) + 2(0{,}1054) + 0{,}0183\\Big]$$

$$= 0{,}25 \\cdot [1 + 1{,}5576 + 0{,}7358 + 0{,}2108 + 0{,}0183]$$

$$= 0{,}25 \\cdot 3{,}5225 \\approx 0{,}8806$$

Den eksakte verdien er $\\approx 0{,}8821$, så tilnærmingen er ganske god.`
    },
    {
      id: 's2-1-5-theorem-2',
      type: 'theorem',
      title: 'Simpsons regel',
      content: `Med et **partall** $n$ delintervaller og $h = \\frac{b-a}{n}$ er **Simpsons regel**:

$$S_n = \\frac{h}{3}\\Big[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \\cdots + 4f(x_{n-1}) + f(x_n)\\Big]$$

Koeffisientene følger mønsteret $1, 4, 2, 4, 2, \\ldots, 4, 2, 4, 1$.

Simpsons regel tilnærmer kurvebuen mellom tre nabopunkter med en parabel (andregradsfunksjon), noe som gir langt bedre nøyaktighet enn trapesformelen.`
    },
    {
      id: 's2-1-5-example-2',
      type: 'example',
      title: 'Simpsons regel med 4 delintervaller',
      problem: `Bruk Simpsons regel med $n = 4$ til å tilnærme $\\int_0^2 e^{-x^2} \\, dx$.`,
      solution: `Vi bruker de samme verdiene som i forrige eksempel: $h = 0{,}5$.

$$S_4 = \\frac{0{,}5}{3}\\Big[f(0) + 4f(0{,}5) + 2f(1) + 4f(1{,}5) + f(2)\\Big]$$

$$= \\frac{0{,}5}{3}\\Big[1 + 4(0{,}7788) + 2(0{,}3679) + 4(0{,}1054) + 0{,}0183\\Big]$$

$$= \\frac{0{,}5}{3}\\Big[1 + 3{,}1152 + 0{,}7358 + 0{,}4216 + 0{,}0183\\Big]$$

$$= \\frac{0{,}5}{3} \\cdot 5{,}2909 \\approx 0{,}8818$$

Den eksakte verdien er $\\approx 0{,}8821$. Simpsons regel gir her en feil på bare $\\approx 0{,}0003$, mye bedre enn trapesformelen ($\\approx 0{,}0015$).`
    },
    {
      id: 's2-1-5-theorem-3',
      type: 'theorem',
      title: 'Feilestimering',
      content: `**Feil for trapesformelen:**
$$|E_T| \\leq \\frac{(b-a)^3}{12n^2} \\cdot M_2$$
der $M_2 = \\max_{a \\leq x \\leq b} |f''(x)|$.

**Feil for Simpsons regel:**
$$|E_S| \\leq \\frac{(b-a)^5}{180n^4} \\cdot M_4$$
der $M_4 = \\max_{a \\leq x \\leq b} |f^{(4)}(x)|$.

Simpsons regel konvergerer altså som $\\frac{1}{n^4}$, mens trapesformelen konvergerer som $\\frac{1}{n^2}$. Dobling av $n$ gir ca. 4 ganger bedre nøyaktighet for trapes, men 16 ganger bedre for Simpson.`
    },
    {
      id: 's2-1-5-example-3',
      type: 'example',
      title: 'Feilestimering og valg av n',
      problem: `Hvor mange delintervaller $n$ trenger vi i trapesformelen for å beregne $\\int_0^1 \\frac{1}{1+x^2} \\, dx$ med feil mindre enn $0{,}001$?`,
      solution: `Vi har $f(x) = \\frac{1}{1+x^2}$.

$f'(x) = \\frac{-2x}{(1+x^2)^2}$

$f''(x) = \\frac{-2(1+x^2)^2 + 2x \\cdot 2(1+x^2) \\cdot 2x}{(1+x^2)^4} = \\frac{6x^2 - 2}{(1+x^2)^3}$

For $x \\in [0, 1]$: $|f''(x)|$ har maksimum i $x = 0$ der $|f''(0)| = 2$. Altså $M_2 = 2$.

Feilgrensen: $|E_T| \\leq \\frac{(1-0)^3}{12n^2} \\cdot 2 = \\frac{1}{6n^2}$

Vi krever $\\frac{1}{6n^2} < 0{,}001$, altså $n^2 > \\frac{1}{0{,}006} \\approx 166{,}7$, som gir $n > 12{,}9$.

Vi trenger altså minst $n = 13$ delintervaller.`
    },
    {
      id: 's2-1-5-text-praktisk',
      type: 'text',
      content: `## Praktisk bruk

**Når bruker vi numerisk integrasjon?**

1. **Funksjonen har ingen elementær antiderivert:** $\\int e^{-x^2}\\,dx$, $\\int \\frac{\\sin x}{x}\\,dx$, $\\int \\sqrt{1 + x^3}\\,dx$
2. **Funksjonen er gitt som datapunkter:** Målinger fra eksperimenter, fartsmålinger, temperaturdatalogger
3. **Kontrollregning:** Sjekke analytiske svar med numerisk tilnærming

**Tommelregel for valg av metode:**
- Trapesformelen er enklest å huske og bruke
- Simpsons regel gir bedre nøyaktighet med samme antall beregninger
- Dobling av $n$ og sammenligning gir praktisk feilkontroll`
    },
    {
      id: 's2-1-5-warning-1',
      type: 'warning',
      title: 'Viktig å huske',
      content: `- Simpsons regel krever at $n$ er et **partall**
- Feilen avhenger av høyere deriverte - jo mer «krokete» grafen er, desto flere delintervaller trengs
- For data gitt som tabell: bruk trapesformelen dersom du har odde antall datapunkter, Simpsons regel dersom du har partall`
    },
    {
      id: 's2-1-5-example-4',
      type: 'example',
      title: 'Numerisk integrasjon fra tabell',
      problem: `Farten til en bil (i m/s) er målt hvert 2. sekund:

| $t$ (s) | 0 | 2 | 4 | 6 | 8 | 10 |
|---------|---|---|---|---|---|----|
| $v(t)$ (m/s) | 0 | 5 | 12 | 18 | 22 | 25 |

Beregn tilnærmet tilbakelagt strekning $s = \\int_0^{10} v(t)\\,dt$ med trapesformelen.`,
      solution: `Her er $n = 5$, $h = 2$ s, $a = 0$ og $b = 10$.

$$T_5 = \\frac{2}{2}\\Big[v(0) + 2v(2) + 2v(4) + 2v(6) + 2v(8) + v(10)\\Big]$$

$$= 1 \\cdot \\Big[0 + 2(5) + 2(12) + 2(18) + 2(22) + 25\\Big]$$

$$= 0 + 10 + 24 + 36 + 44 + 25 = 139 \\text{ m}$$

Bilen har tilbakelagt omtrent $139$ meter i løpet av $10$ sekunder.`
    },
    {
      id: 's2-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 x^2\\,dx$ med trapesformelen og $n = 4$. Sammenlign med eksakt verdi.', solution: '$h = 0{,}25$. $T_4 = \\frac{0{,}25}{2}[0 + 2(0{,}0625) + 2(0{,}25) + 2(0{,}5625) + 1] = 0{,}125 \\cdot [0 + 0{,}125 + 0{,}5 + 1{,}125 + 1] = 0{,}125 \\cdot 2{,}75 = 0{,}34375$. Eksakt: $\\frac{1}{3} \\approx 0{,}3333$. Feil $\\approx 0{,}010$.' },
          { label: 'b', task: 'Beregn samme integral med Simpsons regel og $n = 4$. Sammenlign feilen.', solution: '$S_4 = \\frac{0{,}25}{3}[0 + 4(0{,}0625) + 2(0{,}25) + 4(0{,}5625) + 1] = \\frac{0{,}25}{3}[0 + 0{,}25 + 0{,}5 + 2{,}25 + 1] = \\frac{0{,}25}{3} \\cdot 4 = \\frac{1}{3} \\approx 0{,}3333$. Feilen er $0$ fordi Simpsons regel er eksakt for polynomer av grad $\\leq 3$!' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_1^3 \\frac{1}{x}\\,dx$ med trapesformelen og $n = 4$.', solution: '$h = 0{,}5$. $x_k$-verdier: $1, 1{,}5, 2, 2{,}5, 3$. $T_4 = \\frac{0{,}5}{2}[1 + 2(\\frac{2}{3}) + 2(\\frac{1}{2}) + 2(\\frac{2}{5}) + \\frac{1}{3}] = 0{,}25[1 + 1{,}333 + 1 + 0{,}8 + 0{,}333] = 0{,}25 \\cdot 4{,}467 \\approx 1{,}117$.' },
          { label: 'b', task: 'Finn eksakt verdi av integralet og beregn feilen.', solution: '$\\int_1^3 \\frac{1}{x}\\,dx = [\\ln x]_1^3 = \\ln 3 - \\ln 1 = \\ln 3 \\approx 1{,}0986$. Feil: $|1{,}117 - 1{,}099| \\approx 0{,}018$.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Skriv opp formelen for $S_6$ (Simpsons regel med 6 delintervaller) for $\\int_0^3 f(x)\\,dx$.', solution: '$h = \\frac{3}{6} = 0{,}5$. $S_6 = \\frac{0{,}5}{3}[f(0) + 4f(0{,}5) + 2f(1) + 4f(1{,}5) + 2f(2) + 4f(2{,}5) + f(3)]$.' },
          { label: 'b', task: 'Hva er spesielt med Simpsons regel når funksjonen er et polynom av grad $\\leq 3$?', solution: 'Simpsons regel gir eksakt svar for polynomer av grad $\\leq 3$. Dette skyldes at tilnærmingen med parabler (andregradspolynomer) er nøyaktig nok til å fange opp polynomer opp til og med grad 3.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vannføringen i en elv (i $\\text{m}^3/\\text{s}$) er målt hver time:\n\n| $t$ (timer) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| $Q(t)$ | 10 | 14 | 20 | 18 | 12 |\n\nBeregn total vannmengde (i $\\text{m}^3$) som har passert i løpet av 4 timer, med trapesformelen.', solution: '$h = 1$ time $= 3600$ s. $T_4 = \\frac{3600}{2}[10 + 2(14) + 2(20) + 2(18) + 12] = 1800[10 + 28 + 40 + 36 + 12] = 1800 \\cdot 126 = 226\\,800 \\text{ m}^3$.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 e^{-x^2}\\,dx$ med trapesformelen for $n = 2$ og $n = 4$. Kommenter konvergensen.', solution: '$n = 2$: $h = 0{,}5$, $T_2 = 0{,}25[1 + 2 \\cdot 0{,}7788 + 0{,}3679] = 0{,}25 \\cdot 2{,}9256 = 0{,}7314$. $n = 4$: $h = 0{,}25$, $T_4 = 0{,}125[1 + 2(0{,}9394) + 2(0{,}7788) + 2(0{,}5698) + 0{,}3679] = 0{,}125 \\cdot 5{,}9439 = 0{,}7430$. Eksakt $\\approx 0{,}7468$. Feilen halveres omtrent når $n$ dobles, som forventet for trapesformelen.' },
          { label: 'b', task: 'Beregn samme integral med Simpsons regel for $n = 4$.', solution: '$S_4 = \\frac{0{,}25}{3}[1 + 4(0{,}9394) + 2(0{,}7788) + 4(0{,}5698) + 0{,}3679] = \\frac{0{,}25}{3}[1 + 3{,}7576 + 1{,}5576 + 2{,}2792 + 0{,}3679] = \\frac{0{,}25}{3} \\cdot 8{,}9623 = 0{,}7469$. Mye nærmere eksakt verdi!' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk feilformelen for trapesmetoden til å vise at $n \\geq 10$ delintervaller er nok for å beregne $\\int_0^1 e^x\\,dx$ med feil $< 0{,}001$.', solution: '$f(x) = e^x$, $f\'\'(x) = e^x$. $M_2 = \\max_{[0,1]} e^x = e \\approx 2{,}718$. Feilgrense: $\\frac{(1)^3}{12n^2} \\cdot e \\leq \\frac{2{,}718}{12n^2}$. Krav: $\\frac{2{,}718}{12n^2} < 0{,}001$, altså $n^2 > \\frac{2{,}718}{0{,}012} = 226{,}5$, som gir $n > 15{,}1$. Vi trenger altså $n \\geq 16$, ikke $n \\geq 10$. (Oppgaven viser at man må regne ut - gjetting holder ikke!)' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^{\\pi} \\sin x \\, dx$ med Simpsons regel og $n = 6$. Sammenlign med eksakt verdi.', solution: '$h = \\frac{\\pi}{6}$. $S_6 = \\frac{\\pi/6}{3}[\\sin 0 + 4\\sin\\frac{\\pi}{6} + 2\\sin\\frac{\\pi}{3} + 4\\sin\\frac{\\pi}{2} + 2\\sin\\frac{2\\pi}{3} + 4\\sin\\frac{5\\pi}{6} + \\sin\\pi]$. $= \\frac{\\pi}{18}[0 + 4(0{,}5) + 2(0{,}8660) + 4(1) + 2(0{,}8660) + 4(0{,}5) + 0] = \\frac{\\pi}{18}[0 + 2 + 1{,}732 + 4 + 1{,}732 + 2 + 0] = \\frac{\\pi}{18} \\cdot 11{,}464 \\approx 2{,}0009$. Eksakt: $[-\\cos x]_0^\\pi = 2$. Feil $\\approx 0{,}001$.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En funksjon $f$ er kjent i følgende punkter:\n\n| $x$ | 0 | 0,5 | 1 | 1,5 | 2 |\n|---|---|---|---|---|---|\n| $f(x)$ | 1,00 | 1,22 | 1,65 | 2,32 | 3,50 |\n\nBeregn $\\int_0^2 f(x)\\,dx$ med både trapesformelen og Simpsons regel.', solution: '$h = 0{,}5$, $n = 4$. Trapes: $T_4 = \\frac{0{,}5}{2}[1 + 2(1{,}22) + 2(1{,}65) + 2(2{,}32) + 3{,}5] = 0{,}25[1 + 2{,}44 + 3{,}3 + 4{,}64 + 3{,}5] = 0{,}25 \\cdot 14{,}88 = 3{,}72$. Simpson: $S_4 = \\frac{0{,}5}{3}[1 + 4(1{,}22) + 2(1{,}65) + 4(2{,}32) + 3{,}5] = \\frac{0{,}5}{3}[1 + 4{,}88 + 3{,}3 + 9{,}28 + 3{,}5] = \\frac{0{,}5}{3} \\cdot 21{,}96 = 3{,}66$.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at trapesformelen med $n = 1$ gir $T_1 = \\frac{b-a}{2}[f(a) + f(b)]$, og tegn en figur som illustrerer dette.', solution: 'Med $n = 1$: $h = b - a$. $T_1 = \\frac{h}{2}[f(x_0) + f(x_1)] = \\frac{b-a}{2}[f(a) + f(b)]$. Figuren viser et trapes med hjørner $(a, 0)$, $(a, f(a))$, $(b, f(b))$, $(b, 0)$. Arealet av dette trapeset er $\\frac{(f(a) + f(b))}{2} \\cdot (b-a)$, som er nettopp $T_1$.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn det minste $n$ slik at Simpsons regel gir $\\int_0^1 \\frac{1}{1+x^2}\\,dx$ med feil $< 10^{-6}$.', solution: '$f^{(4)}(x)$ for $f(x) = \\frac{1}{1+x^2}$: Etter beregning er $f^{(4)}(x) = \\frac{24(5x^4 - 10x^2 + 1)}{(1+x^2)^5}$. $|f^{(4)}(x)| \\leq 24$ for $x \\in [0,1]$ (maks i $x = 0$). Feilgrense: $\\frac{1}{180n^4} \\cdot 24 = \\frac{24}{180n^4} = \\frac{2}{15n^4}$. Krav: $\\frac{2}{15n^4} < 10^{-6}$, altså $n^4 > \\frac{2 \\cdot 10^6}{15} \\approx 133\\,333$, som gir $n > 19{,}1$. Vi trenger $n \\geq 20$ (partall).' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 \\sqrt{1 + x^3}\\,dx$ med Simpsons regel og $n = 4$.', solution: '$h = 0{,}25$. Funksjonsverdier: $f(0) = 1$, $f(0{,}25) = \\sqrt{1{,}015625} \\approx 1{,}0078$, $f(0{,}5) = \\sqrt{1{,}125} \\approx 1{,}0607$, $f(0{,}75) = \\sqrt{1{,}421875} \\approx 1{,}1924$, $f(1) = \\sqrt{2} \\approx 1{,}4142$. $S_4 = \\frac{0{,}25}{3}[1 + 4(1{,}0078) + 2(1{,}0607) + 4(1{,}1924) + 1{,}4142] = \\frac{0{,}25}{3}[1 + 4{,}0312 + 2{,}1214 + 4{,}7696 + 1{,}4142] = \\frac{0{,}25}{3} \\cdot 13{,}3364 \\approx 1{,}1114$.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hvorfor trapesformelen systematisk overestimerer integralet dersom $f$ er konveks ($f\'\'(x) > 0$) på hele $[a, b]$.', solution: 'Når $f$ er konveks, ligger grafen under sekantlinjen mellom to nabopunkter. Trapesformelen beregner arealet under sekantlinjen (trapeset), som dermed er større enn arealet under selve kurven. Formelt: $f(x) \\leq f(x_k) + f\'(x_k)(x - x_k) + \\frac{f\'\'(c)}{2}(x-x_k)^2$ gir et positivt feilbidrag i hvert delintervall.' },
          { label: 'b', task: 'Gjelder tilsvarende for Simpsons regel? Begrunn svaret.', solution: 'Nei. Simpsons regel bruker parabel-tilnærminger (ikke rette linjer), og parabelen kan ligge både over og under den faktiske kurven. Simpsons regel har derfor ingen systematisk over- eller underestimering for konvekse funksjoner generelt.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Akselerasjonen $a(t)$ til en rakett de første 10 sekundene er målt:\n\n| $t$ (s) | 0 | 2 | 4 | 6 | 8 | 10 |\n|---|---|---|---|---|---|---|\n| $a(t)$ (m/s$^2$) | 0 | 8 | 15 | 20 | 23 | 25 |\n\nRaketten starter fra ro. Beregn farten $v(10) = \\int_0^{10} a(t)\\,dt$ med Simpsons regel.', solution: '$h = 2$, $n = 5$ (oddetall - vi kan ikke bruke Simpson direkte). Vi bruker sammensatt Simpson med $n = 4$ for $[0, 8]$ og legger til trapes for $[8, 10]$. $S_4 = \\frac{2}{3}[0 + 4(8) + 2(15) + 4(20) + 23] = \\frac{2}{3}[0 + 32 + 30 + 80 + 23] = \\frac{2}{3} \\cdot 165 = 110$. $T_1 = \\frac{2}{2}[23 + 25] = 48$. Totalt: $v(10) \\approx 110 + 48 = 158$ m/s.' }
        ]
      }
    },
    {
      id: 's2-1-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-1-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Integralet $\\int_0^1 \\frac{\\sin x}{x}\\,dx$ kan ikke beregnes analytisk. Bruk Simpsons regel med $n = 6$ til å finne en tilnærmet verdi. (Hint: $\\frac{\\sin x}{x} \\to 1$ når $x \\to 0$.)', solution: '$h = \\frac{1}{6}$. Funksjonsverdier (med $f(0) = 1$): $f(0) = 1$, $f(\\frac{1}{6}) = \\frac{\\sin(0{,}1667)}{0{,}1667} \\approx 0{,}9954$, $f(\\frac{1}{3}) \\approx 0{,}9816$, $f(\\frac{1}{2}) = \\frac{\\sin 0{,}5}{0{,}5} \\approx 0{,}9589$, $f(\\frac{2}{3}) \\approx 0{,}9276$, $f(\\frac{5}{6}) \\approx 0{,}8882$, $f(1) = \\sin 1 \\approx 0{,}8415$. $S_6 = \\frac{1/6}{3}[1 + 4(0{,}9954) + 2(0{,}9816) + 4(0{,}9589) + 2(0{,}9276) + 4(0{,}8882) + 0{,}8415] = \\frac{1}{18}[1 + 3{,}9816 + 1{,}9632 + 3{,}8356 + 1{,}8552 + 3{,}5528 + 0{,}8415] = \\frac{1}{18} \\cdot 17{,}0299 \\approx 0{,}9461$.' }
        ]
      }
    },
    {
      id: 's2-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Trapesformelen:** $T_n = \\frac{h}{2}[f(x_0) + 2f(x_1) + \\cdots + 2f(x_{n-1}) + f(x_n)]$
- Koeffisienter: $1, 2, 2, \\ldots, 2, 1$
- Feil: $O(h^2)$ - konvergerer som $\\frac{1}{n^2}$

**Simpsons regel:** $S_n = \\frac{h}{3}[f(x_0) + 4f(x_1) + 2f(x_2) + \\cdots + 4f(x_{n-1}) + f(x_n)]$
- Koeffisienter: $1, 4, 2, 4, 2, \\ldots, 4, 1$ (krever partall $n$)
- Feil: $O(h^4)$ - konvergerer som $\\frac{1}{n^4}$
- Eksakt for polynomer av grad $\\leq 3$

**Praktisk:** Doble $n$ og sammenlign - dersom svaret endrer seg lite, har vi god nøyaktighet.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_1_6: TextbookChapter = {
  id: 's2-1-6',
  courseId: 's2',
  chapterNumber: '1.6',
  title: 'Delvis integrasjon',
  description: 'Lær delvis integrasjon (produktregelen baklengs), valg av u og dv, og gjentatt delvis integrasjon for å løse integraler av produkter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke delvis integrasjon til å beregne integraler',
    'velge hensiktsmessig strategi for integrasjon av produkter'
  ],
  content: [
    {
      id: 's2-1-6-intro',
      type: 'text',
      content: `## Fra produktregelen til delvis integrasjon

Produktregelen for derivasjon sier at $(uv)' = u'v + uv'$. Integrerer vi begge sider, får vi formelen for **delvis integrasjon** - en teknikk som er uunnværlig i S2 for å integrere produkter av funksjoner.`
    },
    {
      id: 's2-1-6-theorem-1',
      type: 'theorem',
      title: 'Delvis integrasjon',
      content: `**Ubestemt integral:**
$$\\int u \\, dv = uv - \\int v \\, du$$

**Bestemt integral:**
$$\\int_a^b u \\, dv = \\Big[uv\\Big]_a^b - \\int_a^b v \\, du$$

der $u = u(x)$ og $v = v(x)$ er deriverbare funksjoner.

**Alternativ skrivemåte:**
$$\\int u(x) \\cdot v'(x) \\, dx = u(x) \\cdot v(x) - \\int u'(x) \\cdot v(x) \\, dx$$`
    },
    {
      id: 's2-1-6-def-1',
      type: 'definition',
      title: 'LIATE-regelen for valg av u',
      content: `Når vi skal velge $u$ og $dv$ i delvis integrasjon, bruker vi **LIATE-regelen** (fra høyest til lavest prioritet for $u$):

1. **L**ogaritmiske funksjoner: $\\ln x$, $\\log x$
2. **I**nverse trigonometriske: $\\arctan x$, $\\arcsin x$
3. **A**lgebraiske funksjoner: $x^n$, polynomer
4. **T**rigonometriske funksjoner: $\\sin x$, $\\cos x$
5. **E**ksponentialfunksjoner: $e^x$, $a^x$

Velg $u$ som den funksjonen som står høyest på listen. Resten blir $dv$.`
    },
    {
      id: 's2-1-6-example-1',
      type: 'example',
      title: 'Grunnleggende delvis integrasjon',
      problem: `Beregn $\\int x \\cdot e^x \\, dx$.`,
      solution: `Vi velger (etter LIATE: algebraisk før eksponentiell):

$u = x \\quad \\Rightarrow \\quad du = dx$

$dv = e^x \\, dx \\quad \\Rightarrow \\quad v = e^x$

Delvis integrasjon:
$$\\int x \\cdot e^x \\, dx = x \\cdot e^x - \\int e^x \\, dx = xe^x - e^x + C = e^x(x - 1) + C$$

**Kontroll:** $(e^x(x-1))' = e^x(x-1) + e^x = xe^x$ ✓`
    },
    {
      id: 's2-1-6-example-2',
      type: 'example',
      title: 'Delvis integrasjon med logaritme',
      problem: `Beregn $\\int \\ln x \\, dx$.`,
      solution: `Her er det bare én faktor, men vi kan skrive $\\ln x = \\ln x \\cdot 1$.

$u = \\ln x \\quad \\Rightarrow \\quad du = \\frac{1}{x} \\, dx$

$dv = dx \\quad \\Rightarrow \\quad v = x$

$$\\int \\ln x \\, dx = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln x - \\int 1 \\, dx = x \\ln x - x + C$$

**Kontroll:** $(x\\ln x - x)' = \\ln x + x \\cdot \\frac{1}{x} - 1 = \\ln x$ ✓`
    },
    {
      id: 's2-1-6-example-3',
      type: 'example',
      title: 'Gjentatt delvis integrasjon',
      problem: `Beregn $\\int x^2 e^x \\, dx$.`,
      solution: `**Første runde:**
$u = x^2$, $du = 2x\\,dx$, $dv = e^x\\,dx$, $v = e^x$

$$\\int x^2 e^x \\, dx = x^2 e^x - \\int 2x e^x \\, dx$$

**Andre runde:**
$u = 2x$, $du = 2\\,dx$, $dv = e^x\\,dx$, $v = e^x$

$$\\int 2x e^x \\, dx = 2xe^x - \\int 2e^x \\, dx = 2xe^x - 2e^x$$

**Satt sammen:**
$$\\int x^2 e^x \\, dx = x^2 e^x - (2xe^x - 2e^x) + C = e^x(x^2 - 2x + 2) + C$$

**Mønster:** For $\\int x^n e^x \\, dx$ må vi utføre delvis integrasjon $n$ ganger.`
    },
    {
      id: 's2-1-6-text-sirkulaer',
      type: 'text',
      content: `## Sirkulær delvis integrasjon

Noen ganger må vi utføre delvis integrasjon **to ganger** og deretter løse en likning for det opprinnelige integralet. Dette skjer typisk ved integrasjon av $e^x \\sin x$ eller $e^x \\cos x$.`
    },
    {
      id: 's2-1-6-example-4',
      type: 'example',
      title: 'Sirkulær delvis integrasjon',
      problem: `Beregn $I = \\int e^x \\cos x \\, dx$.`,
      solution: `**Første runde:**
$u = \\cos x$, $du = -\\sin x\\,dx$, $dv = e^x\\,dx$, $v = e^x$

$$I = e^x \\cos x - \\int e^x \\cdot (-\\sin x) \\, dx = e^x \\cos x + \\int e^x \\sin x \\, dx$$

**Andre runde:**
$u = \\sin x$, $du = \\cos x\\,dx$, $dv = e^x\\,dx$, $v = e^x$

$$I = e^x \\cos x + e^x \\sin x - \\int e^x \\cos x \\, dx = e^x(\\cos x + \\sin x) - I$$

Nå har vi $I$ på begge sider! Løser vi for $I$:

$$2I = e^x(\\cos x + \\sin x) \\quad \\Rightarrow \\quad I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$$`
    },
    {
      id: 's2-1-6-tip-1',
      type: 'tip',
      title: 'Kontroller alltid svaret',
      content: `Etter delvis integrasjon bør du alltid **derivere svaret** for å kontrollere. Produktregelen gjør at du raskt kan verifisere. Husk: derivasjon er enklere enn integrasjon!`
    },
    {
      id: 's2-1-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x \\cos x \\, dx$ ved delvis integrasjon.', solution: '$u = x$, $dv = \\cos x\\,dx$, $du = dx$, $v = \\sin x$. $\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.' },
          { label: 'b', task: 'Beregn $\\int x \\sin x \\, dx$ ved delvis integrasjon.', solution: '$u = x$, $dv = \\sin x\\,dx$, $du = dx$, $v = -\\cos x$. $\\int x\\sin x\\,dx = -x\\cos x + \\int \\cos x\\,dx = -x\\cos x + \\sin x + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x e^{2x} \\, dx$.', solution: '$u = x$, $dv = e^{2x}\\,dx$, $du = dx$, $v = \\frac{1}{2}e^{2x}$. $\\int xe^{2x}\\,dx = \\frac{x}{2}e^{2x} - \\int \\frac{1}{2}e^{2x}\\,dx = \\frac{x}{2}e^{2x} - \\frac{1}{4}e^{2x} + C = \\frac{e^{2x}}{4}(2x - 1) + C$.' },
          { label: 'b', task: 'Beregn $\\int x e^{-x} \\, dx$.', solution: '$u = x$, $dv = e^{-x}\\,dx$, $du = dx$, $v = -e^{-x}$. $\\int xe^{-x}\\,dx = -xe^{-x} + \\int e^{-x}\\,dx = -xe^{-x} - e^{-x} + C = -e^{-x}(x + 1) + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x \\ln x \\, dx$.', solution: '$u = \\ln x$, $dv = x\\,dx$, $du = \\frac{1}{x}\\,dx$, $v = \\frac{x^2}{2}$. $\\int x\\ln x\\,dx = \\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{1}{2}\\int x\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$.' },
          { label: 'b', task: 'Beregn $\\int_1^e \\ln x \\, dx$.', solution: 'Fra eksempelet: $\\int \\ln x\\,dx = x\\ln x - x + C$. $\\int_1^e \\ln x\\,dx = [x\\ln x - x]_1^e = (e \\cdot 1 - e) - (1 \\cdot 0 - 1) = 0 + 1 = 1$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 xe^x \\, dx$.', solution: 'Fra eksempelet: $\\int xe^x\\,dx = e^x(x-1) + C$. $\\int_0^1 xe^x\\,dx = [e^x(x-1)]_0^1 = e^1(1-1) - e^0(0-1) = 0 - (-1) = 1$.' },
          { label: 'b', task: 'Beregn $\\int_0^{\\pi} x \\sin x \\, dx$.', solution: '$\\int x\\sin x\\,dx = -x\\cos x + \\sin x + C$. $\\int_0^\\pi x\\sin x\\,dx = [-x\\cos x + \\sin x]_0^\\pi = (-\\pi \\cdot (-1) + 0) - (0 + 0) = \\pi$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x^2 \\cos x \\, dx$ med gjentatt delvis integrasjon.', solution: 'Første runde: $u = x^2$, $dv = \\cos x\\,dx$. $= x^2\\sin x - \\int 2x\\sin x\\,dx$. Andre runde: $u = 2x$, $dv = \\sin x\\,dx$. $\\int 2x\\sin x\\,dx = -2x\\cos x + \\int 2\\cos x\\,dx = -2x\\cos x + 2\\sin x$. Totalt: $\\int x^2\\cos x\\,dx = x^2\\sin x + 2x\\cos x - 2\\sin x + C = (x^2 - 2)\\sin x + 2x\\cos x + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int e^x \\sin x \\, dx$ med sirkulær delvis integrasjon.', solution: 'La $I = \\int e^x\\sin x\\,dx$. Første runde: $u = \\sin x$, $dv = e^x\\,dx$. $I = e^x\\sin x - \\int e^x\\cos x\\,dx$. Andre runde: $u = \\cos x$, $dv = e^x\\,dx$. $\\int e^x\\cos x\\,dx = e^x\\cos x + \\int e^x\\sin x\\,dx = e^x\\cos x + I$. Altså $I = e^x\\sin x - e^x\\cos x - I$, som gir $2I = e^x(\\sin x - \\cos x)$, og $I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int (\\ln x)^2 \\, dx$.', solution: '$u = (\\ln x)^2$, $dv = dx$, $du = \\frac{2\\ln x}{x}\\,dx$, $v = x$. $\\int (\\ln x)^2\\,dx = x(\\ln x)^2 - 2\\int \\ln x\\,dx = x(\\ln x)^2 - 2(x\\ln x - x) + C = x(\\ln x)^2 - 2x\\ln x + 2x + C = x[(\\ln x)^2 - 2\\ln x + 2] + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x^2 e^{-x} \\, dx$ med gjentatt delvis integrasjon.', solution: 'Første: $u = x^2$, $dv = e^{-x}dx$, $v = -e^{-x}$. $= -x^2e^{-x} + 2\\int xe^{-x}\\,dx$. Andre: $u = x$, $dv = e^{-x}dx$, $v = -e^{-x}$. $\\int xe^{-x}dx = -xe^{-x} + \\int e^{-x}dx = -xe^{-x} - e^{-x}$. Totalt: $-x^2e^{-x} + 2(-xe^{-x} - e^{-x}) + C = -e^{-x}(x^2 + 2x + 2) + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_1^e x^2 \\ln x \\, dx$.', solution: '$u = \\ln x$, $dv = x^2\\,dx$, $du = \\frac{1}{x}dx$, $v = \\frac{x^3}{3}$. $\\int_1^e x^2\\ln x\\,dx = [\\frac{x^3}{3}\\ln x]_1^e - \\int_1^e \\frac{x^3}{3} \\cdot \\frac{1}{x}\\,dx = \\frac{e^3}{3} - 0 - \\frac{1}{3}\\int_1^e x^2\\,dx = \\frac{e^3}{3} - \\frac{1}{3}[\\frac{x^3}{3}]_1^e = \\frac{e^3}{3} - \\frac{e^3 - 1}{9} = \\frac{3e^3 - e^3 + 1}{9} = \\frac{2e^3 + 1}{9}$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x^3 e^x \\, dx$ med gjentatt delvis integrasjon.', solution: 'Tre runder med $u = x^3, x^2, x$ etter tur: $\\int x^3e^x\\,dx = x^3e^x - 3\\int x^2e^x\\,dx = x^3e^x - 3[x^2e^x - 2\\int xe^x\\,dx] = x^3e^x - 3x^2e^x + 6[xe^x - e^x] + C = e^x(x^3 - 3x^2 + 6x - 6) + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Utled en generell formel for $\\int x^n e^x \\, dx$ ved å bruke mønsteret fra gjentatt delvis integrasjon. (Hint: se på resultatene for $n = 1, 2, 3$.)', solution: 'Mønsteret gir: $\\int x^n e^x\\,dx = e^x \\sum_{k=0}^{n} (-1)^k \\frac{n!}{(n-k)!} x^{n-k} + C$. For eksempel $n = 2$: $e^x(x^2 - 2x + 2) + C = e^x(\\frac{2!}{2!}x^2 - \\frac{2!}{1!}x + \\frac{2!}{0!}) + C$. Generelt: $\\int x^n e^x\\,dx = e^x \\cdot n! \\sum_{k=0}^{n} \\frac{(-1)^{n-k} x^k}{k!} + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int e^{2x} \\cos 3x \\, dx$ med sirkulær delvis integrasjon.', solution: 'La $I = \\int e^{2x}\\cos 3x\\,dx$. Første: $u = \\cos 3x$, $dv = e^{2x}dx$. $I = \\frac{1}{2}e^{2x}\\cos 3x + \\frac{3}{2}\\int e^{2x}\\sin 3x\\,dx$. Andre: $u = \\sin 3x$, $dv = e^{2x}dx$. $\\int e^{2x}\\sin 3x\\,dx = \\frac{1}{2}e^{2x}\\sin 3x - \\frac{3}{2}\\int e^{2x}\\cos 3x\\,dx = \\frac{1}{2}e^{2x}\\sin 3x - \\frac{3}{2}I$. Settes inn: $I = \\frac{1}{2}e^{2x}\\cos 3x + \\frac{3}{2}(\\frac{1}{2}e^{2x}\\sin 3x - \\frac{3}{2}I) = \\frac{1}{2}e^{2x}\\cos 3x + \\frac{3}{4}e^{2x}\\sin 3x - \\frac{9}{4}I$. $\\frac{13}{4}I = \\frac{e^{2x}}{4}(2\\cos 3x + 3\\sin 3x)$. $I = \\frac{e^{2x}(2\\cos 3x + 3\\sin 3x)}{13} + C$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 \\arctan x \\, dx$ ved delvis integrasjon.', solution: '$u = \\arctan x$, $dv = dx$, $du = \\frac{1}{1+x^2}dx$, $v = x$. $\\int_0^1 \\arctan x\\,dx = [x\\arctan x]_0^1 - \\int_0^1 \\frac{x}{1+x^2}\\,dx = 1 \\cdot \\frac{\\pi}{4} - 0 - [\\frac{1}{2}\\ln(1+x^2)]_0^1 = \\frac{\\pi}{4} - \\frac{1}{2}\\ln 2 + 0 = \\frac{\\pi}{4} - \\frac{\\ln 2}{2}$.' }
        ]
      }
    },
    {
      id: 's2-1-6-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-1-6-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva bør du velge som $u$ og $dv$ for å integrere $\\int x^3 \\ln x \\, dx$? Begrunn med LIATE-regelen.', solution: 'LIATE: Logaritmisk ($\\ln x$) har høyere prioritet enn algebraisk ($x^3$), så $u = \\ln x$ og $dv = x^3\\,dx$. Da: $du = \\frac{1}{x}dx$ og $v = \\frac{x^4}{4}$. Resultatet: $\\frac{x^4}{4}\\ln x - \\int \\frac{x^3}{4}\\,dx = \\frac{x^4}{4}\\ln x - \\frac{x^4}{16} + C$.' },
          { label: 'b', task: 'Deriver svaret for å kontrollere at det stemmer.', solution: '$(\\frac{x^4}{4}\\ln x - \\frac{x^4}{16})\\prime = x^3\\ln x + \\frac{x^4}{4} \\cdot \\frac{1}{x} - \\frac{4x^3}{16} = x^3\\ln x + \\frac{x^3}{4} - \\frac{x^3}{4} = x^3\\ln x$ ✓.' }
        ]
      }
    },
    {
      id: 's2-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Delvis integrasjon:** $\\int u \\, dv = uv - \\int v \\, du$

**LIATE-regelen:** Velg $u$ som L > I > A > T > E

**Vanlige typer:**
- $\\int x^n e^{ax}\\,dx$: velg $u = x^n$ (gjentatt $n$ ganger)
- $\\int x^n \\ln x\\,dx$: velg $u = \\ln x$
- $\\int x^n \\sin(ax)\\,dx$ eller $\\int x^n \\cos(ax)\\,dx$: velg $u = x^n$
- $\\int e^{ax} \\sin(bx)\\,dx$ eller $\\int e^{ax} \\cos(bx)\\,dx$: sirkulær metode (2 runder)

**Kontroll:** Deriver alltid svaret for å sjekke!`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_1_7: TextbookChapter = {
  id: 's2-1-7',
  courseId: 's2',
  chapterNumber: '1.7',
  title: 'Volum av omdreiningslegemer',
  description: 'Lær skivemetoden og skallmetoden for å beregne volum av omdreiningslegemer ved rotasjon om x- og y-aksen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke integrasjon til å beregne volum av omdreiningslegemer',
    'velge mellom skivemetoden og skallmetoden avhengig av rotasjonsaksen'
  ],
  content: [
    {
      id: 's2-1-7-intro',
      type: 'text',
      content: `## Omdreiningslegemer

Når vi roterer et område i planet rundt en akse, får vi et tredimensjonalt objekt kalt et **omdreiningslegeme** (rotasjonslegeme). Volumet av slike legemer kan beregnes med integrasjon.

Tenk deg at du roterer området mellom grafen til $f(x)$ og $x$-aksen rundt $x$-aksen. Du får da en «vase»-lignende form der tverrsnittet i ethvert punkt er en sirkel.`
    },
    {
      id: 's2-1-7-theorem-1',
      type: 'theorem',
      title: 'Skivemetoden (rotasjon om x-aksen)',
      content: `Når området mellom $y = f(x)$ og $x$-aksen for $a \\leq x \\leq b$ roteres om **$x$-aksen**, er volumet:

$$V = \\pi \\int_a^b [f(x)]^2 \\, dx$$

**Forklaring:** I hvert punkt $x$ er tverrsnittet en sirkelskive med radius $|f(x)|$ og areal $\\pi [f(x)]^2$. Vi «summerer opp» alle slike skiver langs $x$-aksen.`
    },
    {
      id: 's2-1-7-example-1',
      type: 'example',
      title: 'Volum av kjegle',
      problem: `Finn volumet av kjeglen som fremkommer ved å rotere linjen $y = \\frac{r}{h}x$ for $0 \\leq x \\leq h$ om $x$-aksen. ($r$ er radius og $h$ er høyden.)`,
      solution: `Vi bruker skivemetoden:

$$V = \\pi \\int_0^h \\left(\\frac{r}{h}x\\right)^2 dx = \\pi \\cdot \\frac{r^2}{h^2} \\int_0^h x^2 \\, dx$$

$$= \\frac{\\pi r^2}{h^2} \\cdot \\left[\\frac{x^3}{3}\\right]_0^h = \\frac{\\pi r^2}{h^2} \\cdot \\frac{h^3}{3} = \\frac{\\pi r^2 h}{3}$$

Vi har utledet den kjente formelen for volumet av en kjegle: $V = \\frac{1}{3}\\pi r^2 h$.`
    },
    {
      id: 's2-1-7-example-2',
      type: 'example',
      title: 'Volum av kule',
      problem: `Vis at volumet av en kule med radius $R$ er $V = \\frac{4}{3}\\pi R^3$.`,
      solution: `En kule med radius $R$ kan sees som omdreiningslegemet til halvsirkelen $y = \\sqrt{R^2 - x^2}$ for $-R \\leq x \\leq R$ rotert om $x$-aksen.

$$V = \\pi \\int_{-R}^{R} (\\sqrt{R^2 - x^2})^2 \\, dx = \\pi \\int_{-R}^{R} (R^2 - x^2) \\, dx$$

$$= \\pi \\left[R^2 x - \\frac{x^3}{3}\\right]_{-R}^{R} = \\pi \\left[\\left(R^3 - \\frac{R^3}{3}\\right) - \\left(-R^3 + \\frac{R^3}{3}\\right)\\right]$$

$$= \\pi \\left[\\frac{2R^3}{3} + \\frac{2R^3}{3}\\right] = \\frac{4\\pi R^3}{3}$$`
    },
    {
      id: 's2-1-7-theorem-2',
      type: 'theorem',
      title: 'Rotasjon om y-aksen (skivemetoden)',
      content: `Når området mellom $x = g(y)$ og $y$-aksen for $c \\leq y \\leq d$ roteres om **$y$-aksen**, er volumet:

$$V = \\pi \\int_c^d [g(y)]^2 \\, dy$$

Alternativt, dersom funksjonen er gitt som $y = f(x)$, løser vi for $x = f^{-1}(y)$ og bruker dette uttrykket.`
    },
    {
      id: 's2-1-7-example-3',
      type: 'example',
      title: 'Rotasjon om y-aksen',
      problem: `Finn volumet av omdreiningslegemet som dannes når området mellom $y = x^2$ og $y$-aksen for $0 \\leq y \\leq 4$ roteres om $y$-aksen.`,
      solution: `Vi løser for $x$: $x = \\sqrt{y}$ (for $x \\geq 0$).

$$V = \\pi \\int_0^4 (\\sqrt{y})^2 \\, dy = \\pi \\int_0^4 y \\, dy = \\pi \\left[\\frac{y^2}{2}\\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$$`
    },
    {
      id: 's2-1-7-theorem-3',
      type: 'theorem',
      title: 'Skallmetoden (rotasjon om y-aksen)',
      content: `Når området mellom $y = f(x)$ og $x$-aksen for $a \\leq x \\leq b$ (med $a \\geq 0$) roteres om **$y$-aksen**, kan vi bruke **skallmetoden**:

$$V = 2\\pi \\int_a^b x \\cdot f(x) \\, dx$$

**Forklaring:** Vi deler området i tynne vertikale strimler. Når en stripe ved $x$ med høyde $f(x)$ og bredde $dx$ roteres om $y$-aksen, dannes et tynt sylindrisk skall med radius $x$, høyde $f(x)$ og tykkelse $dx$. Volumet av dette skallet er $\\approx 2\\pi x \\cdot f(x) \\cdot dx$.`
    },
    {
      id: 's2-1-7-example-4',
      type: 'example',
      title: 'Skallmetoden',
      problem: `Beregn volumet når området mellom $y = x^2$ og $x$-aksen for $0 \\leq x \\leq 2$ roteres om $y$-aksen. Bruk skallmetoden.`,
      solution: `$$V = 2\\pi \\int_0^2 x \\cdot x^2 \\, dx = 2\\pi \\int_0^2 x^3 \\, dx = 2\\pi \\left[\\frac{x^4}{4}\\right]_0^2 = 2\\pi \\cdot \\frac{16}{4} = 8\\pi$$

**Kontroll med skivemetoden:** $x = \\sqrt{y}$, $y$ går fra $0$ til $4$.
$V = \\pi \\int_0^4 y \\, dy = 8\\pi$ ✓

Begge metodene gir samme svar, som forventet.`
    },
    {
      id: 's2-1-7-text-valg',
      type: 'text',
      content: `## Valg av metode

**Skivemetoden** er best når:
- Tverrsnittet (vinkelrett på rotasjonsaksen) er lett å uttrykke
- Funksjonen er lett å invertere (for rotasjon om $y$-aksen)

**Skallmetoden** er best når:
- Rotasjonen er om $y$-aksen og funksjonen er gitt som $y = f(x)$
- Det er vanskelig å løse for $x$ som funksjon av $y$

**Huskeregel:** Skivemetoden integrerer vinkelrett på rotasjonsaksen, skallmetoden integrerer parallelt med rotasjonsaksen.`
    },
    {
      id: 's2-1-7-warning-1',
      type: 'warning',
      title: 'Husk pi-faktoren!',
      content: `En svært vanlig feil er å glemme $\\pi$ foran integralet i skivemetoden, eller å glemme $2\\pi$ i skallmetoden. Skriv opp formelen tydelig før du begynner å integrere.`
    },
    {
      id: 's2-1-7-example-5',
      type: 'example',
      title: 'Volum mellom to kurver',
      problem: `Finn volumet av omdreiningslegemet som dannes når området mellom $y = x$ og $y = x^2$ for $0 \\leq x \\leq 1$ roteres om $x$-aksen.`,
      solution: `Siden $x \\geq x^2$ for $0 \\leq x \\leq 1$, er den ytre kurven $y = x$ og den indre $y = x^2$.

Volumet blir forskjellen mellom de to omdreiningslegemene (skiver med hull = «ringer»):

$$V = \\pi \\int_0^1 \\left[(x)^2 - (x^2)^2\\right] dx = \\pi \\int_0^1 (x^2 - x^4) \\, dx$$

$$= \\pi \\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi \\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\pi \\cdot \\frac{2}{15} = \\frac{2\\pi}{15}$$`
    },
    {
      id: 's2-1-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet av omdreiningslegemet som dannes når $y = 2x$ for $0 \\leq x \\leq 3$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_0^3 (2x)^2\\,dx = 4\\pi\\int_0^3 x^2\\,dx = 4\\pi[\\frac{x^3}{3}]_0^3 = 4\\pi \\cdot 9 = 36\\pi$.' },
          { label: 'b', task: 'Hvilket geometrisk legeme er dette? Kontroller med den kjente volumformelen.', solution: 'Det er en kjegle med $r = 6$ og $h = 3$. $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\cdot 36 \\cdot 3 = 36\\pi$ ✓.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet når $y = \\sqrt{x}$ for $0 \\leq x \\leq 4$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi[\\frac{x^2}{2}]_0^4 = 8\\pi$.' },
          { label: 'b', task: 'Finn volumet når $y = x^3$ for $0 \\leq x \\leq 1$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_0^1 (x^3)^2\\,dx = \\pi\\int_0^1 x^6\\,dx = \\pi[\\frac{x^7}{7}]_0^1 = \\frac{\\pi}{7}$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet av omdreiningslegemet som dannes når $y = e^x$ for $0 \\leq x \\leq 1$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_0^1 (e^x)^2\\,dx = \\pi\\int_0^1 e^{2x}\\,dx = \\pi[\\frac{e^{2x}}{2}]_0^1 = \\frac{\\pi}{2}(e^2 - 1)$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet av omdreiningslegemet når $y = \\sin x$ for $0 \\leq x \\leq \\pi$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_0^\\pi \\sin^2 x\\,dx = \\pi\\int_0^\\pi \\frac{1-\\cos 2x}{2}\\,dx = \\frac{\\pi}{2}[x - \\frac{\\sin 2x}{2}]_0^\\pi = \\frac{\\pi}{2} \\cdot \\pi = \\frac{\\pi^2}{2}$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet av omdreiningslegemet som dannes når området mellom $y = x^2$ og $y = x$ roteres om $x$-aksen.', solution: 'Skjæringspunkter: $x^2 = x \\Rightarrow x = 0$ og $x = 1$. For $0 \\leq x \\leq 1$: $x \\geq x^2$. $V = \\pi\\int_0^1 [x^2 - (x^2)^2]\\,dx = \\pi\\int_0^1 (x^2 - x^4)\\,dx = \\pi[\\frac{x^3}{3} - \\frac{x^5}{5}]_0^1 = \\pi(\\frac{1}{3} - \\frac{1}{5}) = \\frac{2\\pi}{15}$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn volumet når $y = x^2$ for $0 \\leq x \\leq 2$ roteres om $y$-aksen ved bruk av skallmetoden.', solution: '$V = 2\\pi\\int_0^2 x \\cdot x^2\\,dx = 2\\pi\\int_0^2 x^3\\,dx = 2\\pi[\\frac{x^4}{4}]_0^2 = 2\\pi \\cdot 4 = 8\\pi$.' },
          { label: 'b', task: 'Kontroller svaret med skivemetoden (rotasjon om $y$-aksen).', solution: '$x = \\sqrt{y}$, $y$ fra $0$ til $4$. $V = \\pi\\int_0^4 (\\sqrt{y})^2\\,dy = \\pi\\int_0^4 y\\,dy = \\pi \\cdot 8 = 8\\pi$ ✓.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet når $y = \\frac{1}{x}$ for $1 \\leq x \\leq 3$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_1^3 \\frac{1}{x^2}\\,dx = \\pi[-\\frac{1}{x}]_1^3 = \\pi(-\\frac{1}{3} + 1) = \\frac{2\\pi}{3}$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn volumet av omdreiningslegemet som dannes når $y = xe^{-x}$ for $0 \\leq x \\leq 2$ roteres om $x$-aksen.', solution: '$V = \\pi\\int_0^2 x^2e^{-2x}\\,dx$. Med gjentatt delvis integrasjon: $\\int x^2e^{-2x}dx = -\\frac{e^{-2x}}{4}(2x^2 + 2x + 1)$. $V = \\pi[-\\frac{e^{-2x}}{4}(2x^2+2x+1)]_0^2 = \\pi[-\\frac{e^{-4}}{4}(8+4+1) + \\frac{1}{4}] = \\pi[\\frac{1}{4} - \\frac{13e^{-4}}{4}] = \\frac{\\pi}{4}(1 - 13e^{-4}) \\approx 0{,}726$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk skallmetoden til å finne volumet når $y = e^{-x^2}$ for $0 \\leq x \\leq 1$ roteres om $y$-aksen.', solution: '$V = 2\\pi\\int_0^1 x \\cdot e^{-x^2}\\,dx$. Substitusjon: $t = x^2$, $dt = 2x\\,dx$. $V = 2\\pi \\cdot \\frac{1}{2}\\int_0^1 e^{-t}\\,dt = \\pi[-e^{-t}]_0^1 = \\pi(1 - e^{-1}) = \\pi(1 - \\frac{1}{e})$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En vase har formen av omdreiningslegemet til $y = 1 + \\sin x$ for $0 \\leq x \\leq 2\\pi$ rundt $x$-aksen. Finn volumet av vasen.', solution: '$V = \\pi\\int_0^{2\\pi} (1+\\sin x)^2\\,dx = \\pi\\int_0^{2\\pi} (1 + 2\\sin x + \\sin^2 x)\\,dx$. $= \\pi\\int_0^{2\\pi} (1 + 2\\sin x + \\frac{1-\\cos 2x}{2})\\,dx = \\pi[\\frac{3}{2}x - 2\\cos x - \\frac{\\sin 2x}{4}]_0^{2\\pi} = \\pi(3\\pi - 2 + 0 - 0 + 2 - 0) = 3\\pi^2$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet av omdreiningslegemet som dannes når området mellom $y = e^x$, $x$-aksen, $x = 0$ og $x = 1$ roteres om $y$-aksen. Bruk skallmetoden.', solution: '$V = 2\\pi\\int_0^1 x \\cdot e^x\\,dx$. Delvis integrasjon: $u = x$, $dv = e^x\\,dx$. $\\int_0^1 xe^x\\,dx = [xe^x]_0^1 - \\int_0^1 e^x\\,dx = e - [e^x]_0^1 = e - (e-1) = 1$. Altså $V = 2\\pi \\cdot 1 = 2\\pi$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn volumet av en torus (smultring) med ytre radius $R$ og rørradius $r$ ($R > r$). (Hint: roter sirkelen $(x - R)^2 + y^2 = r^2$ om $y$-aksen med skallmetoden.)', solution: 'Sirkelen: $y = \\pm\\sqrt{r^2 - (x-R)^2}$ for $R-r \\leq x \\leq R+r$. Høyde av skall: $2\\sqrt{r^2-(x-R)^2}$. $V = 2\\pi\\int_{R-r}^{R+r} x \\cdot 2\\sqrt{r^2-(x-R)^2}\\,dx$. Substitusjon $t = x - R$: $V = 4\\pi\\int_{-r}^{r} (t+R)\\sqrt{r^2-t^2}\\,dt = 4\\pi R\\int_{-r}^{r}\\sqrt{r^2-t^2}\\,dt + 4\\pi\\int_{-r}^{r} t\\sqrt{r^2-t^2}\\,dt$. Det andre integralet er $0$ (odde funksjon). Det første er $R$ ganger arealet av halvsirkelen: $\\frac{\\pi r^2}{2}$. $V = 4\\pi R \\cdot \\frac{\\pi r^2}{2} = 2\\pi^2 R r^2$.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn volumet av en halvkule med radius $R = 5$ ved å rotere $y = \\sqrt{25 - x^2}$ for $0 \\leq x \\leq 5$ om $x$-aksen.', solution: '$V = \\pi\\int_0^5 (25 - x^2)\\,dx = \\pi[25x - \\frac{x^3}{3}]_0^5 = \\pi(125 - \\frac{125}{3}) = \\frac{250\\pi}{3}$. Kontroll: $\\frac{1}{2} \\cdot \\frac{4}{3}\\pi(5)^3 = \\frac{250\\pi}{3}$ ✓.' }
        ]
      }
    },
    {
      id: 's2-1-7-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-1-7-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Området mellom $y = \\ln x$ og $x$-aksen for $1 \\leq x \\leq e$ roteres om $x$-aksen. Finn volumet.', solution: '$V = \\pi\\int_1^e (\\ln x)^2\\,dx$. Delvis integrasjon to ganger: $\\int (\\ln x)^2\\,dx = x(\\ln x)^2 - 2x\\ln x + 2x + C$. $V = \\pi[x(\\ln x)^2 - 2x\\ln x + 2x]_1^e = \\pi[(e - 2e + 2e) - (0 - 0 + 2)] = \\pi(e - 2) \\approx 2{,}26$.' }
        ]
      }
    },
    {
      id: 's2-1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Skivemetoden (rotasjon om $x$-aksen):**
$$V = \\pi \\int_a^b [f(x)]^2 \\, dx$$

**Skivemetoden (rotasjon om $y$-aksen):**
$$V = \\pi \\int_c^d [g(y)]^2 \\, dy$$

**Skallmetoden (rotasjon om $y$-aksen):**
$$V = 2\\pi \\int_a^b x \\cdot f(x) \\, dx$$

**Volum mellom to kurver (rotasjon om $x$-aksen):**
$$V = \\pi \\int_a^b \\left([f(x)]^2 - [g(x)]^2\\right) dx$$

der $f(x) \\geq g(x) \\geq 0$ på $[a, b]$.

**Husk:** Velg metode basert på hva som er enklest å sette opp!`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_3_4: TextbookChapter = {
  id: 's2-3-4',
  courseId: 's2',
  chapterNumber: '3.4',
  title: 'Asymptoter og grenseatferd',
  description: 'Lær om vertikale, horisontale og skrå asymptoter, grenseverdier ved uendelig og systematisk analyse av funksjonens oppførsel for store og små verdier av x.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bestemme vertikale, horisontale og skrå asymptoter for rasjonale funksjoner og andre funksjonstyper',
    'analysere grenseatferden til funksjoner når x går mot uendelig eller mot singulære punkter'
  ],
  content: [
    {
      id: 's2-3-4-intro',
      type: 'text',
      content: `## Asymptotisk oppførsel

Når vi drøfter en funksjon, er det viktig å forstå hva som skjer når $x$ går mot uendelig eller nærmer seg punkter der funksjonen ikke er definert. **Asymptoter** beskriver linjer som grafen nærmer seg uten å nå.

I S2 møter vi tre typer asymptoter: vertikale, horisontale og skrå. Å identifisere disse korrekt er avgjørende for en fullstendig funksjonsdrøfting.`
    },
    {
      id: 's2-3-4-def-1',
      type: 'definition',
      title: 'Vertikal asymptote',
      content: `Linjen $x = a$ er en **vertikal asymptote** for $f$ dersom minst én av disse grenseverdiene er $\\pm\\infty$:

$$\\lim_{x \\to a^+} f(x) = \\pm\\infty \\quad \\text{eller} \\quad \\lim_{x \\to a^-} f(x) = \\pm\\infty$$

Vertikale asymptoter oppstår typisk der nevneren i en rasjonell funksjon er null (uten at telleren også er null i samme punkt).`
    },
    {
      id: 's2-3-4-def-2',
      type: 'definition',
      title: 'Horisontal asymptote',
      content: `Linjen $y = L$ er en **horisontal asymptote** for $f$ dersom:

$$\\lim_{x \\to \\infty} f(x) = L \\quad \\text{eller} \\quad \\lim_{x \\to -\\infty} f(x) = L$$

Funksjonen kan ha ulike horisontale asymptoter mot høyre og mot venstre.`
    },
    {
      id: 's2-3-4-def-3',
      type: 'definition',
      title: 'Skrå asymptote',
      content: `Linjen $y = ax + b$ (med $a \\neq 0$) er en **skrå asymptote** for $f$ dersom:

$$\\lim_{x \\to \\infty} [f(x) - (ax + b)] = 0 \\quad \\text{eller} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$$

**Slik finner du den skrå asymptoten:**
1. $a = \\lim_{x \\to \\infty} \\frac{f(x)}{x}$
2. $b = \\lim_{x \\to \\infty} [f(x) - ax]$

Skrå asymptoter oppstår typisk for rasjonale funksjoner der tellerens grad er nøyaktig 1 mer enn nevnerens grad.`
    },
    {
      id: 's2-3-4-theorem-1',
      type: 'theorem',
      title: 'Asymptoter for rasjonale funksjoner',
      content: `For $f(x) = \\frac{P(x)}{Q(x)}$ der $P$ har grad $m$ og $Q$ har grad $n$:

**Vertikale asymptoter:** I nullpunktene til $Q(x)$ som ikke også er nullpunkter for $P(x)$ (med samme eller høyere multiplisitet).

**Horisontale/skrå asymptoter:**
- Hvis $m < n$: Horisontal asymptote $y = 0$
- Hvis $m = n$: Horisontal asymptote $y = \\frac{a_m}{b_n}$ (forholdet mellom ledende koeffisienter)
- Hvis $m = n + 1$: Skrå asymptote $y = ax + b$ (finn med polynomdivisjon)
- Hvis $m > n + 1$: Ingen horisontal eller skrå asymptote`
    },
    {
      id: 's2-3-4-example-1',
      type: 'example',
      title: 'Alle tre asymptotetyper',
      problem: `Finn alle asymptoter til $f(x) = \\frac{x^2 + x - 6}{x - 1}$.`,
      solution: `**Vertikal asymptote:** Nevner $= 0$ når $x = 1$. Teller: $1 + 1 - 6 = -4 \\neq 0$. Altså er $x = 1$ en vertikal asymptote.

Sjekk: $\\lim_{x \\to 1^+} f(x) = \\frac{-4}{0^+} = -\\infty$, $\\lim_{x \\to 1^-} f(x) = \\frac{-4}{0^-} = +\\infty$.

**Skrå asymptote:** Graden i teller $(2)$ er nøyaktig 1 mer enn graden i nevner $(1)$. Vi utfører polynomdivisjon:

$$\\frac{x^2 + x - 6}{x - 1} = x + 2 + \\frac{-4}{x - 1}$$

Når $x \\to \\pm\\infty$: $\\frac{-4}{x-1} \\to 0$, så den skrå asymptoten er $y = x + 2$.

**Ingen horisontal asymptote** (graden i teller $>$ graden i nevner).`
    },
    {
      id: 's2-3-4-example-2',
      type: 'example',
      title: 'Horisontal asymptote',
      problem: `Finn alle asymptoter til $f(x) = \\frac{3x^2 - 1}{x^2 + 4}$.`,
      solution: `**Vertikale asymptoter:** $x^2 + 4 = 0$ har ingen reelle løsninger (alltid positiv). Ingen vertikale asymptoter.

**Horisontal asymptote:** Graden i teller $=$ graden i nevner $= 2$.

$$\\lim_{x \\to \\pm\\infty} \\frac{3x^2 - 1}{x^2 + 4} = \\lim_{x \\to \\pm\\infty} \\frac{3 - \\frac{1}{x^2}}{1 + \\frac{4}{x^2}} = \\frac{3}{1} = 3$$

Horisontal asymptote: $y = 3$ (begge retninger).`
    },
    {
      id: 's2-3-4-text-grenseverdier',
      type: 'text',
      content: `## Viktige grenseverdier ved uendelig

Disse bør du kunne utenat:

| Grenseverdi | Resultat | Forklaring |
|-------------|----------|------------|
| $\\lim_{x \\to \\infty} \\frac{1}{x^n}$ | $0$ | for $n > 0$ |
| $\\lim_{x \\to \\infty} \\frac{e^x}{x^n}$ | $\\infty$ | eksponentiell slår polynom |
| $\\lim_{x \\to \\infty} \\frac{x^n}{e^x}$ | $0$ | eksponentiell slår polynom |
| $\\lim_{x \\to \\infty} \\frac{\\ln x}{x^a}$ | $0$ | polynom slår logaritme (for $a > 0$) |
| $\\lim_{x \\to 0^+} x \\ln x$ | $0$ | $x \\to 0$ raskere enn $\\ln x \\to -\\infty$ |

**Veksthierarki:** $\\ln x \\ll x^a \\ll a^x \\ll x!$ for store $x$.`
    },
    {
      id: 's2-3-4-example-3',
      type: 'example',
      title: 'Grenseatferd for eksponentialfunksjon',
      problem: `Finn alle asymptoter til $f(x) = \\frac{e^x}{e^x + 1}$.`,
      solution: `**Vertikale asymptoter:** $e^x + 1 > 0$ for alle $x$ (aldri null). Ingen vertikale asymptoter.

**Når $x \\to \\infty$:**
$$\\lim_{x \\to \\infty} \\frac{e^x}{e^x + 1} = \\lim_{x \\to \\infty} \\frac{1}{1 + e^{-x}} = \\frac{1}{1 + 0} = 1$$

Horisontal asymptote $y = 1$ mot høyre.

**Når $x \\to -\\infty$:**
$$\\lim_{x \\to -\\infty} \\frac{e^x}{e^x + 1} = \\frac{0}{0 + 1} = 0$$

Horisontal asymptote $y = 0$ mot venstre.

Funksjonen har altså **to ulike horisontale asymptoter**: $y = 0$ og $y = 1$.`
    },
    {
      id: 's2-3-4-note-1',
      type: 'note',
      content: `**Kan grafen krysse en asymptote?**

- **Vertikale asymptoter:** Nei, grafen kan aldri krysse en vertikal asymptote (funksjonen er ikke definert der).
- **Horisontale og skrå asymptoter:** Ja! Grafen kan krysse horisontale og skrå asymptoter. Asymptoten beskriver oppførselen for store $|x|$, men grafen kan svinge rundt asymptoten for moderate $x$-verdier.`
    },
    {
      id: 's2-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle asymptoter til $f(x) = \\frac{1}{x - 3}$.', solution: 'Vertikal asymptote: $x = 3$ (nevner $= 0$). Horisontal asymptote: $y = 0$ (grad teller $<$ grad nevner).' },
          { label: 'b', task: 'Finn alle asymptoter til $g(x) = \\frac{2x + 5}{x + 1}$.', solution: 'Vertikal: $x = -1$. Horisontal: $y = \\frac{2}{1} = 2$ (lik grad, forhold mellom ledende koeffisienter). Alternativt: $\\frac{2x+5}{x+1} = 2 + \\frac{3}{x+1}$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn den skrå asymptoten til $f(x) = \\frac{x^2 + 3x + 1}{x + 2}$.', solution: 'Polynomdivisjon: $\\frac{x^2+3x+1}{x+2} = x + 1 + \\frac{-1}{x+2}$. Skrå asymptote: $y = x + 1$. Vertikal asymptote: $x = -2$.' },
          { label: 'b', task: 'Finn den skrå asymptoten til $g(x) = \\frac{2x^2 - x + 3}{x - 1}$.', solution: 'Polynomdivisjon: $\\frac{2x^2-x+3}{x-1} = 2x + 1 + \\frac{4}{x-1}$. Skrå asymptote: $y = 2x + 1$. Vertikal asymptote: $x = 1$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\lim_{x \\to \\infty} \\frac{5x^3 - 2x}{3x^3 + x^2 + 1}$.', solution: 'Divider teller og nevner med $x^3$: $\\lim_{x \\to \\infty} \\frac{5 - \\frac{2}{x^2}}{3 + \\frac{1}{x} + \\frac{1}{x^3}} = \\frac{5}{3}$.' },
          { label: 'b', task: 'Beregn $\\lim_{x \\to \\infty} \\frac{x^2 + 1}{x^3 - x}$.', solution: 'Divider med $x^3$: $\\lim_{x \\to \\infty} \\frac{\\frac{1}{x} + \\frac{1}{x^3}}{1 - \\frac{1}{x^2}} = \\frac{0}{1} = 0$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\lim_{x \\to \\infty} \\frac{e^x}{x^3}$ og forklar resultatet.', solution: '$\\lim_{x \\to \\infty} \\frac{e^x}{x^3} = \\infty$. Eksponentialfunksjonen vokser raskere enn ethvert polynom.' },
          { label: 'b', task: 'Beregn $\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}$.', solution: '$\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}} = \\lim_{x \\to \\infty} \\frac{\\ln x}{x^{1/2}} = 0$. Alle positive potenser av $x$ vokser raskere enn $\\ln x$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle asymptoter til $f(x) = \\frac{x^2 - 4}{x^2 - x - 2}$.', solution: 'Faktorisering: $f(x) = \\frac{(x-2)(x+2)}{(x-2)(x+1)} = \\frac{x+2}{x+1}$ for $x \\neq 2$. Vertikal asymptote: $x = -1$ (men ikke $x = 2$, som er et «hull»). Horisontal asymptote: $y = 1$. Merk: I $x = 2$ har $f$ et hull med $y$-verdi $\\frac{4}{3}$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle asymptoter til $f(x) = x + \\frac{1}{x}$ og skisser grafen.', solution: 'Vertikal asymptote: $x = 0$. Skrå asymptote: $y = x$ (fordi $\\frac{1}{x} \\to 0$ når $x \\to \\pm\\infty$). $f\'(x) = 1 - \\frac{1}{x^2} = 0 \\Rightarrow x = \\pm 1$. $f(1) = 2$ (bunnpunkt for $x > 0$), $f(-1) = -2$ (toppunkt for $x < 0$). Grafen nærmer seg den skrå asymptoten $y = x$ for store $|x|$.' },
          { label: 'b', task: 'Vis at grafen til $f$ aldri krysser den skrå asymptoten $y = x$.', solution: '$f(x) - x = \\frac{1}{x}$. Denne er $> 0$ for $x > 0$ og $< 0$ for $x < 0$, aldri $= 0$. Grafen krysser aldri asymptoten.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle asymptoter til $f(x) = \\frac{x}{\\sqrt{x^2 + 1}}$.', solution: 'Ingen vertikale asymptoter ($x^2 + 1 > 0$). Når $x \\to \\infty$: $\\frac{x}{\\sqrt{x^2+1}} = \\frac{x}{|x|\\sqrt{1+1/x^2}} = \\frac{1}{\\sqrt{1+1/x^2}} \\to 1$. Når $x \\to -\\infty$: $\\frac{x}{|x|\\sqrt{1+1/x^2}} = \\frac{-1}{\\sqrt{1+1/x^2}} \\to -1$. Horisontale asymptoter: $y = 1$ (høyre) og $y = -1$ (venstre).' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\lim_{x \\to 0^+} x \\ln x$.', solution: 'Skriv om: $x\\ln x = \\frac{\\ln x}{1/x}$. Når $x \\to 0^+$: teller $\\to -\\infty$, nevner $\\to \\infty$. L\'Hôpitals regel: $\\lim \\frac{1/x}{-1/x^2} = \\lim \\frac{-x^2}{x} = \\lim(-x) = 0$.' },
          { label: 'b', task: 'Beregn $\\lim_{x \\to 0^+} x^x$ ved å bruke resultatet fra a).', solution: '$x^x = e^{x\\ln x}$. Fra a) vet vi $x\\ln x \\to 0$. Altså $x^x = e^{x\\ln x} \\to e^0 = 1$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle asymptoter til $f(x) = xe^{-x}$ og beskriv grenseatferden.', solution: 'Ingen vertikale asymptoter. Når $x \\to \\infty$: $xe^{-x} = \\frac{x}{e^x} \\to 0$. Horisontal asymptote $y = 0$ mot høyre. Når $x \\to -\\infty$: $xe^{-x} \\to -\\infty \\cdot \\infty = -\\infty$. Ingen asymptote mot venstre.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $f(x) = \\frac{x^3}{x^2 - 1}$ har en skrå asymptote, og finn den.', solution: 'Polynomdivisjon: $\\frac{x^3}{x^2-1} = x + \\frac{x}{x^2-1}$. $\\lim_{x \\to \\infty} \\frac{x}{x^2-1} = 0$. Skrå asymptote: $y = x$. Vertikale asymptoter: $x = 1$ og $x = -1$.' },
          { label: 'b', task: 'Bestem om grafen nærmer seg asymptoten ovenfra eller nedenfra for $x \\to \\infty$.', solution: '$f(x) - x = \\frac{x}{x^2-1}$. For $x > 1$: $x > 0$ og $x^2 - 1 > 0$, altså $f(x) - x > 0$. Grafen nærmer seg asymptoten ovenfra når $x \\to \\infty$.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle asymptoter til $f(x) = \\frac{x^2 e^x}{e^x - 1}$ og analyser grenseatferden.', solution: 'Vertikal asymptote: $e^x - 1 = 0 \\Rightarrow x = 0$. Sjekk: $\\lim_{x \\to 0^+} \\frac{x^2 e^x}{e^x - 1}$. Siden $e^x - 1 \\approx x$ nær $0$: $\\lim_{x \\to 0^+} \\frac{x^2 e^x}{x} = 0$. Altså er $x = 0$ ikke en vertikal asymptote (grenseverdien eksisterer). $\\lim_{x \\to 0^-}$ er tilsvarende $0$. Når $x \\to \\infty$: $\\frac{x^2e^x}{e^x-1} = \\frac{x^2}{1-e^{-x}} \\to \\infty$. Når $x \\to -\\infty$: $\\frac{x^2e^x}{e^x-1} \\approx \\frac{x^2e^x}{-1} \\to 0$. Horisontal asymptote $y = 0$ mot venstre. Ingen vertikale asymptoter (funksjonen har et «hull» i $x = 0$).' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Funksjonen $f$ er gitt ved $f(x) = \\sqrt{x^2 + 4x} - x$. Finn $\\lim_{x \\to \\infty} f(x)$ og avgjør om $f$ har en horisontal asymptote.', solution: 'Multipliser med konjugat: $f(x) = \\frac{(\\sqrt{x^2+4x} - x)(\\sqrt{x^2+4x} + x)}{\\sqrt{x^2+4x} + x} = \\frac{x^2+4x - x^2}{\\sqrt{x^2+4x} + x} = \\frac{4x}{\\sqrt{x^2+4x} + x}$. For $x > 0$: $= \\frac{4x}{x(\\sqrt{1+4/x} + 1)} = \\frac{4}{\\sqrt{1+4/x} + 1} \\to \\frac{4}{2} = 2$. Horisontal asymptote $y = 2$ mot høyre.' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn asymptotene til $f(x) = \\frac{3}{(x-2)^2}$ og beskriv grenseatferden.', solution: 'Vertikal asymptote: $x = 2$. $\\lim_{x \\to 2^\\pm} f(x) = +\\infty$ (fra begge sider, fordi $(x-2)^2 > 0$). Horisontal asymptote: $y = 0$ (begge retninger, fordi graden i teller $<$ nevner).' },
          { label: 'b', task: 'Finn asymptotene til $g(x) = 2 - \\frac{1}{x+3}$.', solution: 'Vertikal asymptote: $x = -3$. Horisontal asymptote: $y = 2$ (fordi $\\frac{1}{x+3} \\to 0$ når $x \\to \\pm\\infty$).' }
        ]
      }
    },
    {
      id: 's2-3-4-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-3-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bestem alle asymptoter til $f(x) = \\frac{x^3 - 8}{x^2 - 4}$. Undersøk om det finnes hull i grafen.', solution: 'Faktorisering: $\\frac{(x-2)(x^2+2x+4)}{(x-2)(x+2)} = \\frac{x^2+2x+4}{x+2}$ for $x \\neq 2$. Vertikal asymptote: $x = -2$ (nevner $= 0$). Hull i $x = 2$: $f(2) = \\frac{12}{4} = 3$ (grenseverdi). Polynomdivisjon: $\\frac{x^2+2x+4}{x+2} = x + \\frac{4}{x+2}$. Skrå asymptote: $y = x$.' }
        ]
      }
    },
    {
      id: 's2-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Tre typer asymptoter:**
1. **Vertikal** ($x = a$): der $f(x) \\to \\pm\\infty$
2. **Horisontal** ($y = L$): der $f(x) \\to L$ når $x \\to \\pm\\infty$
3. **Skrå** ($y = ax + b$): finn med polynomdivisjon

**For rasjonale funksjoner $\\frac{P(x)}{Q(x)}$:**
- Vertikal: nullpunkter i $Q$ (der $P \\neq 0$)
- Grad teller $<$ grad nevner: $y = 0$
- Grad teller $=$ grad nevner: $y = \\frac{\\text{ledende koeff. teller}}{\\text{ledende koeff. nevner}}$
- Grad teller $=$ grad nevner $+ 1$: skrå asymptote

**Veksthierarki:** $\\ln x \\ll x^a \\ll e^x$ for store $x$`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_3_5: TextbookChapter = {
  id: 's2-3-5',
  courseId: 's2',
  chapterNumber: '3.5',
  title: 'Implisitt derivasjon',
  description: 'Lær implisitt differensiering av ligninger som definerer y som funksjon av x uten å løse eksplisitt, og bruk dette til å finne tangenter og analysere relaterte rater.',
  estimatedMinutes: 50,
  competenceGoals: [
    'derivere implisitt definerte funksjoner',
    'bruke implisitt derivasjon til å finne tangentlinjer og analysere sammenhenger mellom variable'
  ],
  content: [
    {
      id: 's2-3-5-intro',
      type: 'text',
      content: `## Når y ikke er løst for x

Hittil har vi derivert funksjoner gitt eksplisitt som $y = f(x)$. Men mange sammenhenger er gitt **implisitt** - som en ligning der $x$ og $y$ er blandet sammen, for eksempel $x^2 + y^2 = 25$ (en sirkel).

I slike tilfeller bruker vi **implisitt derivasjon**: vi deriverer begge sider av likningen med hensyn på $x$, og behandler $y$ som en funksjon av $x$.`
    },
    {
      id: 's2-3-5-def-1',
      type: 'definition',
      title: 'Implisitt derivasjon',
      content: `**Implisitt derivasjon** er en teknikk der vi deriverer begge sider av en ligning med hensyn på $x$, og bruker **kjerneregelen** for alle ledd som inneholder $y$:

$$\\frac{d}{dx}[g(y)] = g'(y) \\cdot \\frac{dy}{dx}$$

Deretter løser vi for $\\frac{dy}{dx}$.

**Nøkkelregel:** Hver gang vi deriverer et uttrykk med $y$, må vi multiplisere med $\\frac{dy}{dx}$ (fordi $y$ er en funksjon av $x$).`
    },
    {
      id: 's2-3-5-example-1',
      type: 'example',
      title: 'Derivasjon av sirkellikning',
      problem: `Finn $\\frac{dy}{dx}$ implisitt fra $x^2 + y^2 = 25$.`,
      solution: `Deriver begge sider med hensyn på $x$:

$$\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)$$

$$2x + 2y \\cdot \\frac{dy}{dx} = 0$$

Løs for $\\frac{dy}{dx}$:

$$\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}$$

**Kontroll:** For den øvre halvsirkelen $y = \\sqrt{25 - x^2}$: $y' = \\frac{-2x}{2\\sqrt{25-x^2}} = \\frac{-x}{\\sqrt{25-x^2}} = -\\frac{x}{y}$ ✓`
    },
    {
      id: 's2-3-5-example-2',
      type: 'example',
      title: 'Implisitt derivasjon med produkter',
      problem: `Finn $\\frac{dy}{dx}$ implisitt fra $x^2 y + xy^2 = 6$.`,
      solution: `Deriver begge sider med hensyn på $x$. Vi bruker produktregelen:

$$\\frac{d}{dx}(x^2 y) + \\frac{d}{dx}(xy^2) = 0$$

$$\\left(2xy + x^2 \\frac{dy}{dx}\\right) + \\left(y^2 + x \\cdot 2y \\frac{dy}{dx}\\right) = 0$$

$$2xy + y^2 + (x^2 + 2xy)\\frac{dy}{dx} = 0$$

$$\\frac{dy}{dx} = -\\frac{2xy + y^2}{x^2 + 2xy} = -\\frac{y(2x + y)}{x(x + 2y)}$$`
    },
    {
      id: 's2-3-5-example-3',
      type: 'example',
      title: 'Tangentlinje ved implisitt derivasjon',
      problem: `Finn tangentlinjen til kurven $x^3 + y^3 = 9$ i punktet $(1, 2)$.`,
      solution: `**Steg 1:** Sjekk at punktet ligger på kurven: $1^3 + 2^3 = 1 + 8 = 9$ ✓

**Steg 2:** Implisitt derivasjon:
$$3x^2 + 3y^2 \\frac{dy}{dx} = 0 \\quad \\Rightarrow \\quad \\frac{dy}{dx} = -\\frac{x^2}{y^2}$$

**Steg 3:** Stigningstallet i $(1, 2)$:
$$\\frac{dy}{dx}\\Big|_{(1,2)} = -\\frac{1^2}{2^2} = -\\frac{1}{4}$$

**Steg 4:** Tangentlinjen:
$$y - 2 = -\\frac{1}{4}(x - 1) \\quad \\Rightarrow \\quad y = -\\frac{1}{4}x + \\frac{9}{4}$$`
    },
    {
      id: 's2-3-5-text-relaterte',
      type: 'text',
      content: `## Relaterte rater

Implisitt derivasjon er grunnlaget for **relaterte rater** - problemer der flere variable endrer seg over tid og vi kjenner noen av endringsratene.

Fremgangsmåte:
1. Identifiser de variable og skriv opp sammenhengen mellom dem
2. Deriver implisitt med hensyn på tid $t$
3. Sett inn kjente verdier og løs for den ukjente raten`
    },
    {
      id: 's2-3-5-example-4',
      type: 'example',
      title: 'Relaterte rater',
      problem: `En ballong blåses opp slik at volumet øker med $100 \\text{ cm}^3/\\text{s}$. Hvor raskt øker radiusen når $r = 10$ cm?`,
      solution: `**Sammenheng:** $V = \\frac{4}{3}\\pi r^3$

**Deriver med hensyn på $t$:**
$$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$$

**Sett inn kjente verdier:** $\\frac{dV}{dt} = 100$ og $r = 10$:

$$100 = 4\\pi (10)^2 \\frac{dr}{dt} = 400\\pi \\frac{dr}{dt}$$

$$\\frac{dr}{dt} = \\frac{100}{400\\pi} = \\frac{1}{4\\pi} \\approx 0{,}080 \\text{ cm/s}$$`
    },
    {
      id: 's2-3-5-tip-1',
      type: 'tip',
      title: 'Vanlig feilkilde',
      content: `Glem aldri $\\frac{dy}{dx}$-faktoren (eller $\\frac{dr}{dt}$ etc.) når du deriverer et ledd som inneholder $y$ (eller $r$). Uten kjerneregelen blir svaret feil!`
    },
    {
      id: 's2-3-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $x^2 + y^2 = 16$.', solution: '$2x + 2y\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{y}$.' },
          { label: 'b', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $x^2 - y^2 = 9$.', solution: '$2x - 2y\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = \\frac{x}{y}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $3x + 2y^3 = 7$.', solution: '$3 + 6y^2\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{3}{6y^2} = -\\frac{1}{2y^2}$.' },
          { label: 'b', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $xy = 10$.', solution: 'Produktregel: $y + x\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{y}{x}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn tangentlinjen til $x^2 + y^2 = 25$ i punktet $(3, 4)$.', solution: '$\\frac{dy}{dx} = -\\frac{x}{y} = -\\frac{3}{4}$. Tangent: $y - 4 = -\\frac{3}{4}(x - 3)$, altså $y = -\\frac{3}{4}x + \\frac{25}{4}$.' },
          { label: 'b', task: 'Finn tangentlinjen til $x^2 + y^2 = 25$ i punktet $(0, 5)$.', solution: '$\\frac{dy}{dx} = -\\frac{0}{5} = 0$. Tangent: $y = 5$ (horisontal linje).' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $e^y = x + y$.', solution: '$e^y \\frac{dy}{dx} = 1 + \\frac{dy}{dx}$. $(e^y - 1)\\frac{dy}{dx} = 1$. $\\frac{dy}{dx} = \\frac{1}{e^y - 1}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $x^2y + xy^3 = 2$.', solution: 'Produktregel på begge ledd: $2xy + x^2\\frac{dy}{dx} + y^3 + 3xy^2\\frac{dy}{dx} = 0$. $(x^2 + 3xy^2)\\frac{dy}{dx} = -(2xy + y^3)$. $\\frac{dy}{dx} = -\\frac{2xy + y^3}{x^2 + 3xy^2} = -\\frac{y(2x + y^2)}{x(x + 3y^2)}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $\\ln y + xy = 1$.', solution: '$\\frac{1}{y}\\frac{dy}{dx} + y + x\\frac{dy}{dx} = 0$. $(\\frac{1}{y} + x)\\frac{dy}{dx} = -y$. $\\frac{dy}{dx} = \\frac{-y}{\\frac{1}{y} + x} = \\frac{-y^2}{1 + xy}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn tangentlinjen til kurven $x^2 + xy + y^2 = 7$ i punktet $(1, 2)$.', solution: 'Sjekk: $1 + 2 + 4 = 7$ ✓. Implisitt: $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$. $\\frac{dy}{dx} = -\\frac{2x+y}{x+2y}$. I $(1,2)$: $\\frac{dy}{dx} = -\\frac{2+2}{1+4} = -\\frac{4}{5}$. Tangent: $y - 2 = -\\frac{4}{5}(x-1)$, altså $y = -\\frac{4}{5}x + \\frac{14}{5}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ implisitt fra $\\sin(xy) = \\frac{1}{2}$.', solution: '$\\cos(xy) \\cdot (y + x\\frac{dy}{dx}) = 0$. Siden $\\cos(xy) \\neq 0$ generelt: $y + x\\frac{dy}{dx} = 0$, altså $\\frac{dy}{dx} = -\\frac{y}{x}$. (Merk: dette gjelder kun der $\\cos(xy) \\neq 0$.)' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En stige på 5 meter lener mot en vegg. Bunnen glir utover med 0,3 m/s. Hvor raskt synker toppen av stigen når bunnen er 3 meter fra veggen?', solution: '$x^2 + y^2 = 25$. Deriver med hensyn på $t$: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$. Når $x = 3$: $y = \\sqrt{25-9} = 4$. $2(3)(0{,}3) + 2(4)\\frac{dy}{dt} = 0$. $\\frac{dy}{dt} = -\\frac{1{,}8}{8} = -0{,}225$ m/s. Toppen synker med $0{,}225$ m/s.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{d^2y}{dx^2}$ implisitt fra $x^2 + y^2 = r^2$ (sirkel med radius $r$).', solution: 'Første deriverte: $\\frac{dy}{dx} = -\\frac{x}{y}$. Deriver en gang til: $\\frac{d^2y}{dx^2} = -\\frac{y - x\\frac{dy}{dx}}{y^2} = -\\frac{y - x(-\\frac{x}{y})}{y^2} = -\\frac{y + \\frac{x^2}{y}}{y^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{r^2}{y^3}$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn tangentlinjen til ellipsen $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ i punktet $(\\frac{3\\sqrt{3}}{2}, 1)$.', solution: 'Sjekk: $\\frac{27/4}{9} + \\frac{1}{4} = \\frac{3}{4} + \\frac{1}{4} = 1$ ✓. Implisitt: $\\frac{2x}{9} + \\frac{2y}{4}\\frac{dy}{dx} = 0$. $\\frac{dy}{dx} = -\\frac{4x}{9y}$. I punktet: $\\frac{dy}{dx} = -\\frac{4 \\cdot \\frac{3\\sqrt{3}}{2}}{9 \\cdot 1} = -\\frac{6\\sqrt{3}}{9} = -\\frac{2\\sqrt{3}}{3}$. Tangent: $y - 1 = -\\frac{2\\sqrt{3}}{3}(x - \\frac{3\\sqrt{3}}{2})$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Arealet av en sirkel øker med $10 \\text{ cm}^2/\\text{s}$. Hvor raskt øker radiusen når arealet er $50\\pi \\text{ cm}^2$?', solution: '$A = \\pi r^2$. Når $A = 50\\pi$: $r = \\sqrt{50} = 5\\sqrt{2}$. Deriver: $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. $10 = 2\\pi \\cdot 5\\sqrt{2} \\cdot \\frac{dr}{dt}$. $\\frac{dr}{dt} = \\frac{10}{10\\pi\\sqrt{2}} = \\frac{1}{\\pi\\sqrt{2}} = \\frac{\\sqrt{2}}{2\\pi} \\approx 0{,}225$ cm/s.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle punkter på kurven $x^2 + xy + y^2 = 3$ der tangentlinjen er horisontal.', solution: '$\\frac{dy}{dx} = -\\frac{2x+y}{x+2y} = 0 \\Rightarrow 2x + y = 0 \\Rightarrow y = -2x$. Inn i kurven: $x^2 + x(-2x) + (-2x)^2 = 3$, $x^2 - 2x^2 + 4x^2 = 3$, $3x^2 = 3$, $x = \\pm 1$. Punktene: $(1, -2)$ og $(-1, 2)$.' }
        ]
      }
    },
    {
      id: 's2-3-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-3-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ fra $y^2 = 4x$ (parabel).', solution: '$2y\\frac{dy}{dx} = 4$. $\\frac{dy}{dx} = \\frac{2}{y}$.' },
          { label: 'b', task: 'Finn tangentlinjen til parabelen $y^2 = 4x$ i punktet $(1, 2)$.', solution: '$\\frac{dy}{dx} = \\frac{2}{2} = 1$. Tangent: $y - 2 = 1 \\cdot (x - 1)$, altså $y = x + 1$.' }
        ]
      }
    },
    {
      id: 's2-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Implisitt derivasjon - fremgangsmåte:**
1. Deriver begge sider med hensyn på $x$
2. Bruk kjerneregelen: $\\frac{d}{dx}[g(y)] = g'(y) \\cdot \\frac{dy}{dx}$
3. Samle alle ledd med $\\frac{dy}{dx}$ på én side
4. Løs for $\\frac{dy}{dx}$

**Relaterte rater:**
1. Finn sammenhengen mellom variablene
2. Deriver med hensyn på tid $t$
3. Sett inn kjente verdier og løs

**Husk:** Svaret kan inneholde både $x$ og $y$ - det er helt greit!`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_3_6: TextbookChapter = {
  id: 's2-3-6',
  courseId: 's2',
  chapterNumber: '3.6',
  title: 'Avansert funksjonsanalyse',
  description: 'Lær fullstendig drøfting av sammensatte eksponential- og logaritmefunksjoner, inkludert funksjoner som kombinerer polynom, eksponential og logaritme.',
  estimatedMinutes: 65,
  competenceGoals: [
    'drøfte sammensatte funksjoner med eksponential- og logaritmeuttrykk',
    'gjennomføre fullstendig funksjonsdrøfting av avanserte funksjonstyper'
  ],
  content: [
    {
      id: 's2-3-6-intro',
      type: 'text',
      content: `## Sammensatte funksjoner i S2

I S2 møter vi ofte funksjoner som kombinerer flere typer: polynomer ganget med eksponentialfunksjoner, logaritmer av sammensatte uttrykk, og brøker med eksponentialfunksjoner. Disse krever at vi behersker kjerneregel, produktregel og brøkregel i kombinasjon.

Dette kapitlet handler om systematisk drøfting av slike funksjoner - en typisk eksamensoppgave.`
    },
    {
      id: 's2-3-6-text-strategier',
      type: 'text',
      content: `## Derivasjonsstrategier for sammensatte funksjoner

**Type 1: $f(x) = P(x) \\cdot e^{g(x)}$** (polynom ganger eksponential)
- Bruk produktregel + kjerneregel
- Faktoriser alltid ut $e^{g(x)}$ (som aldri er null)
- Nullpunktene til $f'$ bestemmes av den gjenværende faktoren

**Type 2: $f(x) = \\frac{P(x)}{e^{g(x)}}$** (polynom delt på eksponential)
- Skriv om til $f(x) = P(x) \\cdot e^{-g(x)}$ og bruk type 1
- Alternativt: bruk brøkregelen

**Type 3: $f(x) = \\ln(g(x))$** (logaritme av sammensatt uttrykk)
- $f'(x) = \\frac{g'(x)}{g(x)}$ (kjerneregel)
- Definisjonsmengde: $g(x) > 0$

**Type 4: $f(x) = x^a \\cdot \\ln(x)$** (potens ganger logaritme)
- Produktregel
- Spesiell oppmerksomhet på $x = 0$ (grenseverdi)`
    },
    {
      id: 's2-3-6-example-1',
      type: 'example',
      title: 'Drøfting av polynomisk-eksponentiell funksjon',
      problem: `Gjennomfør en fullstendig funksjonsdrøfting av $f(x) = (x^2 - 2x) \\cdot e^{-x}$.`,
      solution: `**1. Definisjonsmengde:** $D_f = \\mathbb{R}$

**2. Nullpunkter:** $(x^2 - 2x)e^{-x} = 0$. Siden $e^{-x} > 0$: $x^2 - 2x = x(x-2) = 0$, altså $x = 0$ og $x = 2$.

**3. Fortegn:** $f(x) > 0$ for $x < 0$ og $x > 2$; $f(x) < 0$ for $0 < x < 2$.

**4. Asymptoter:**
- Når $x \\to \\infty$: $f(x) = \\frac{x^2-2x}{e^x} \\to 0$. Horisontal asymptote $y = 0$ mot høyre.
- Når $x \\to -\\infty$: $f(x) \\to \\infty$ (polynomet dominerer, $e^{-x} \\to \\infty$). Ingen asymptote mot venstre.

**5. Derivasjon (produktregel):**
$$f'(x) = (2x - 2)e^{-x} + (x^2 - 2x)(-e^{-x}) = e^{-x}[(2x-2) - (x^2-2x)]$$
$$= e^{-x}(-x^2 + 4x - 2)$$

$f'(x) = 0 \\Rightarrow -x^2 + 4x - 2 = 0 \\Rightarrow x^2 - 4x + 2 = 0 \\Rightarrow x = 2 \\pm \\sqrt{2}$

Altså $x_1 = 2 - \\sqrt{2} \\approx 0{,}59$ og $x_2 = 2 + \\sqrt{2} \\approx 3{,}41$.

**6. Monotoni:** $f'(x) > 0$ for $2-\\sqrt{2} < x < 2+\\sqrt{2}$ (voksende), ellers avtagende.

**7. Ekstremalpunkter:**
- Bunnpunkt i $(2-\\sqrt{2}, f(2-\\sqrt{2})) \\approx (0{,}59, -0{,}19)$
- Toppunkt i $(2+\\sqrt{2}, f(2+\\sqrt{2})) \\approx (3{,}41, 0{,}38)$

**8. Andrederiverte:**
$$f''(x) = e^{-x}(x^2 - 6x + 6)$$
$f''(x) = 0 \\Rightarrow x = 3 \\pm \\sqrt{3} \\approx 1{,}27$ og $4{,}73$.

**9-10. Vendepunkter:** Vendepunkter i $x = 3 - \\sqrt{3}$ og $x = 3 + \\sqrt{3}$.`
    },
    {
      id: 's2-3-6-example-2',
      type: 'example',
      title: 'Drøfting av logaritmisk funksjon',
      problem: `Drøft $f(x) = x - \\ln x$ for $x > 0$.`,
      solution: `**1. Definisjonsmengde:** $D_f = (0, \\infty)$

**2. Nullpunkter:** $x - \\ln x = 0 \\Rightarrow x = \\ln x$. Grafisk løsning viser at det ikke finnes noen løsning (se monotonianalyse nedenfor - minimumsverdi er $1 > 0$).

**3. Grenseatferd:**
- Når $x \\to 0^+$: $\\ln x \\to -\\infty$, så $f(x) \\to +\\infty$
- Når $x \\to \\infty$: $x$ dominerer $\\ln x$, så $f(x) \\to \\infty$

**4. Derivasjon:**
$$f'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}$$

$f'(x) = 0 \\Rightarrow x = 1$

**5. Monotoni:** $f'(x) < 0$ for $0 < x < 1$ (avtagende), $f'(x) > 0$ for $x > 1$ (voksende).

**6. Ekstremalpunkt:** Bunnpunkt i $(1, f(1)) = (1, 1 - 0) = (1, 1)$.

**7. Andrederiverte:** $f''(x) = \\frac{1}{x^2} > 0$ for alle $x > 0$. Funksjonen er alltid konveks, ingen vendepunkter.

Siden minimumsverdi er $f(1) = 1 > 0$, har $f$ ingen nullpunkter.`
    },
    {
      id: 's2-3-6-theorem-1',
      type: 'theorem',
      title: 'Nyttige derivasjonsresultater',
      content: `**Sammensatte funksjoner:**

| $f(x)$ | $f'(x)$ |
|---------|---------|
| $e^{g(x)}$ | $g'(x) \\cdot e^{g(x)}$ |
| $\\ln(g(x))$ | $\\frac{g'(x)}{g(x)}$ |
| $a^{g(x)}$ | $g'(x) \\cdot \\ln a \\cdot a^{g(x)}$ |
| $[g(x)]^n$ | $n \\cdot g'(x) \\cdot [g(x)]^{n-1}$ |
| $x^n \\cdot e^{ax}$ | $e^{ax}(nx^{n-1} + ax^n)$ |
| $x^a \\cdot \\ln x$ | $x^{a-1}(a \\ln x + 1)$ |`
    },
    {
      id: 's2-3-6-example-3',
      type: 'example',
      title: 'Drøfting av sammensatt funksjon med brøk',
      problem: `Drøft $f(x) = \\frac{\\ln x}{x}$ for $x > 0$.`,
      solution: `**1. Definisjonsmengde:** $D_f = (0, \\infty)$

**2. Nullpunkter:** $\\ln x = 0 \\Rightarrow x = 1$. Nullpunkt: $(1, 0)$.

**3. Fortegn:** $f(x) < 0$ for $0 < x < 1$, $f(x) > 0$ for $x > 1$.

**4. Grenseatferd:**
- $x \\to 0^+$: $f(x) = \\frac{\\ln x}{x} \\to \\frac{-\\infty}{0^+} = -\\infty$
- $x \\to \\infty$: $\\frac{\\ln x}{x} \\to 0$ (polynom slår logaritme)

Horisontal asymptote $y = 0$ mot høyre.

**5. Derivasjon (brøkregel):**
$$f'(x) = \\frac{\\frac{1}{x} \\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$$

$f'(x) = 0 \\Rightarrow 1 - \\ln x = 0 \\Rightarrow x = e$

**6. Monotoni:** $f'(x) > 0$ for $x < e$, $f'(x) < 0$ for $x > e$.

**7. Ekstremalpunkt:** Toppunkt i $(e, f(e)) = (e, \\frac{1}{e}) \\approx (2{,}72, 0{,}37)$.

**8. Andrederiverte:**
$$f''(x) = \\frac{-\\frac{1}{x} \\cdot x^2 - (1-\\ln x) \\cdot 2x}{x^4} = \\frac{2\\ln x - 3}{x^3}$$

$f''(x) = 0 \\Rightarrow \\ln x = \\frac{3}{2} \\Rightarrow x = e^{3/2} \\approx 4{,}48$

Vendepunkt i $(e^{3/2}, \\frac{3}{2e^{3/2}}) \\approx (4{,}48, 0{,}33)$.`
    },
    {
      id: 's2-3-6-warning-1',
      type: 'warning',
      title: 'Vanlige feil ved sammensatte funksjoner',
      content: `- **Glemme kjerneregelen:** $(e^{2x})' = 2e^{2x}$, IKKE $e^{2x}$
- **Feil med logaritme:** $\\frac{d}{dx}[\\ln(x^2)] = \\frac{2x}{x^2} = \\frac{2}{x}$, IKKE $\\frac{1}{x^2}$
- **Definisjonsmengde:** $\\ln(g(x))$ krever $g(x) > 0$
- **Forenkling:** Faktoriser ut $e^{g(x)}$ (aldri null) for å finne nullpunkter til $f'(x)$`
    },
    {
      id: 's2-3-6-example-4',
      type: 'example',
      title: 'Fullstendig drøfting av eksamen-type oppgave',
      problem: `Drøft $f(x) = x^2 \\ln x$ for $x > 0$.`,
      solution: `**1. Definisjonsmengde:** $D_f = (0, \\infty)$

**2. Nullpunkter:** $x^2 \\ln x = 0$. Siden $x > 0$: $x^2 > 0$, så $\\ln x = 0 \\Rightarrow x = 1$.

**3. Fortegn:** $f(x) < 0$ for $0 < x < 1$ (fordi $\\ln x < 0$), $f(x) > 0$ for $x > 1$.

**4. Grenseatferd:**
- $x \\to 0^+$: $x^2 \\ln x \\to 0$ (polynomfaktoren «vinner» over logaritmen)
- $x \\to \\infty$: $f(x) \\to \\infty$

**5. Derivasjon (produktregel):**
$$f'(x) = 2x \\ln x + x^2 \\cdot \\frac{1}{x} = 2x \\ln x + x = x(2\\ln x + 1)$$

$f'(x) = 0$ for $x > 0$: $2\\ln x + 1 = 0 \\Rightarrow \\ln x = -\\frac{1}{2} \\Rightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}} \\approx 0{,}607$

**6. Monotoni:** $f'(x) < 0$ for $0 < x < \\frac{1}{\\sqrt{e}}$, $f'(x) > 0$ for $x > \\frac{1}{\\sqrt{e}}$.

**7. Bunnpunkt:** $(\\frac{1}{\\sqrt{e}}, f(\\frac{1}{\\sqrt{e}})) = (\\frac{1}{\\sqrt{e}}, \\frac{1}{e} \\cdot (-\\frac{1}{2})) = (\\frac{1}{\\sqrt{e}}, -\\frac{1}{2e}) \\approx (0{,}607, -0{,}184)$

**8. Andrederiverte:**
$$f''(x) = 2\\ln x + 1 + 2x \\cdot \\frac{1}{x} = 2\\ln x + 3$$

$f''(x) = 0 \\Rightarrow \\ln x = -\\frac{3}{2} \\Rightarrow x = e^{-3/2} \\approx 0{,}223$

**9. Vendepunkt:** $(e^{-3/2}, f(e^{-3/2})) = (e^{-3/2}, e^{-3}(-\\frac{3}{2})) = (e^{-3/2}, -\\frac{3}{2e^3}) \\approx (0{,}223, -0{,}075)$`
    },
    {
      id: 's2-3-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Deriver $f(x) = x^2 e^{-x}$.', solution: '$f\'(x) = 2xe^{-x} + x^2(-e^{-x}) = e^{-x}(2x - x^2) = xe^{-x}(2-x)$.' },
          { label: 'b', task: 'Deriver $g(x) = \\ln(x^2 + 1)$.', solution: '$g\'(x) = \\frac{2x}{x^2 + 1}$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Deriver $f(x) = (x+1)e^{2x}$.', solution: '$f\'(x) = e^{2x} + (x+1) \\cdot 2e^{2x} = e^{2x}(1 + 2x + 2) = e^{2x}(2x + 3)$.' },
          { label: 'b', task: 'Deriver $g(x) = x \\ln x - x$.', solution: '$g\'(x) = \\ln x + x \\cdot \\frac{1}{x} - 1 = \\ln x + 1 - 1 = \\ln x$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn nullpunkter, ekstremalpunkter og asymptoter til $f(x) = (x - 1)e^{-x}$.', solution: 'Nullpunkt: $x = 1$. $f\'(x) = e^{-x} - (x-1)e^{-x} = e^{-x}(2-x)$. $f\'(x) = 0 \\Rightarrow x = 2$. Toppunkt $(2, e^{-2}) \\approx (2, 0{,}14)$. Horisontal asymptote $y = 0$ mot høyre. $f(x) \\to \\infty$ når $x \\to -\\infty$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn definisjonsmengden til $f(x) = \\ln(4 - x^2)$.', solution: '$4 - x^2 > 0 \\Rightarrow x^2 < 4 \\Rightarrow -2 < x < 2$. $D_f = (-2, 2)$.' },
          { label: 'b', task: 'Deriver $f(x) = \\ln(4 - x^2)$ og finn eventuelle stasjonære punkter.', solution: '$f\'(x) = \\frac{-2x}{4-x^2}$. $f\'(x) = 0 \\Rightarrow x = 0$. $f(0) = \\ln 4$. $f\'\'(0) = \\frac{-2 \\cdot 4 - 0}{16} = -\\frac{1}{2} < 0$. Toppunkt $(0, \\ln 4)$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør en fullstendig drøfting av $f(x) = xe^{-x^2}$.', solution: '$D_f = \\mathbb{R}$. Nullpunkt: $x = 0$. $f(-x) = -f(x)$: odde funksjon. $f\'(x) = e^{-x^2} + x(-2x)e^{-x^2} = e^{-x^2}(1-2x^2)$. $f\'(x) = 0 \\Rightarrow x = \\pm\\frac{1}{\\sqrt{2}}$. Toppunkt $(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2e}}) \\approx (0{,}71, 0{,}43)$, bunnpunkt $(-\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2e}})$. Horisontal asymptote $y = 0$ begge retninger. Vendepunkt i $x = 0$ og $x = \\pm\\sqrt{\\frac{3}{2}}$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = x^2 e^{-x}$ for $x \\geq 0$. Finn ekstremalpunkter, vendepunkter og asymptote.', solution: 'Nullpunkt: $x = 0$. $f\'(x) = xe^{-x}(2-x)$. $f\'(x) = 0 \\Rightarrow x = 0$ eller $x = 2$. Toppunkt $(2, 4e^{-2}) \\approx (2, 0{,}54)$. $f\'\'(x) = e^{-x}(x^2 - 4x + 2)$. $f\'\'(x) = 0 \\Rightarrow x = 2 \\pm \\sqrt{2}$. For $x \\geq 0$: vendepunkter i $x = 2-\\sqrt{2} \\approx 0{,}59$ og $x = 2+\\sqrt{2} \\approx 3{,}41$. Asymptote: $y = 0$ mot høyre.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = \\frac{e^x}{x}$ for $x > 0$. Finn bunnpunkt og avgjør om $f$ har vendepunkter.', solution: '$f\'(x) = \\frac{e^x \\cdot x - e^x}{x^2} = \\frac{e^x(x-1)}{x^2}$. $f\'(x) = 0 \\Rightarrow x = 1$. Bunnpunkt $(1, e)$. $f\'\'(x) = \\frac{e^x(x^2-2x+2)}{x^3}$. $x^2-2x+2 = (x-1)^2+1 > 0$ for alle $x$. Altså $f\'\'(x) > 0$ for $x > 0$: alltid konveks, ingen vendepunkter.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $f(x) = x - \\ln x \\geq 1$ for alle $x > 0$.', solution: '$f\'(x) = 1 - \\frac{1}{x} = \\frac{x-1}{x}$. $f\'(x) = 0 \\Rightarrow x = 1$. $f\'\'(x) = \\frac{1}{x^2} > 0$: bunnpunkt. $f(1) = 1 - 0 = 1$. Siden eneste stasjonære punkt er et bunnpunkt med $f(1) = 1$, er $f(x) \\geq 1$ for alle $x > 0$.' },
          { label: 'b', task: 'Bruk resultatet til å vise at $\\ln x \\leq x - 1$ for alle $x > 0$.', solution: 'Fra a): $x - \\ln x \\geq 1$, altså $\\ln x \\leq x - 1$ for alle $x > 0$. Likhet kun for $x = 1$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør en fullstendig drøfting av $f(x) = (1 - x^2)e^x$.', solution: 'Nullpunkter: $x = \\pm 1$. $f\'(x) = -2xe^x + (1-x^2)e^x = e^x(1-2x-x^2) = -e^x(x^2+2x-1)$. $f\'(x) = 0 \\Rightarrow x = -1 \\pm \\sqrt{2}$. Bunnpunkt $x = -1-\\sqrt{2} \\approx -2{,}41$: $f(-1-\\sqrt{2}) = (-2\\sqrt{2}-2)e^{-1-\\sqrt{2}} \\approx -0{,}57$. Toppunkt $x = -1+\\sqrt{2} \\approx 0{,}41$: $f(-1+\\sqrt{2}) = (2\\sqrt{2}-2)e^{-1+\\sqrt{2}} \\approx 1{,}25$. Asymptote: $y = 0$ mot venstre ($e^x \\to 0$). $f \\to -\\infty$ når $x \\to \\infty$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = \\frac{\\ln x}{x^2}$ for $x > 0$. Finn toppunkt og vendepunkt.', solution: '$f\'(x) = \\frac{\\frac{1}{x} \\cdot x^2 - \\ln x \\cdot 2x}{x^4} = \\frac{1 - 2\\ln x}{x^3}$. $f\'(x) = 0 \\Rightarrow \\ln x = \\frac{1}{2} \\Rightarrow x = \\sqrt{e}$. Toppunkt $(\\sqrt{e}, \\frac{1}{2e}) \\approx (1{,}65, 0{,}18)$. $f\'\'(x) = \\frac{6\\ln x - 5}{x^4}$. $f\'\'(x) = 0 \\Rightarrow \\ln x = \\frac{5}{6} \\Rightarrow x = e^{5/6} \\approx 2{,}30$. Vendepunkt $(e^{5/6}, \\frac{5}{6e^{5/3}}) \\approx (2{,}30, 0{,}16)$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = e^x - ex$ fullstendig. Vis at $f(x) \\geq 0$ for alle $x$.', solution: 'Nullpunkt: $e^x = ex \\Rightarrow$ vanskelig å løse algebraisk. $f\'(x) = e^x - e = 0 \\Rightarrow e^x = e \\Rightarrow x = 1$. $f\'\'(1) = e > 0$: bunnpunkt. $f(1) = e - e = 0$. Bunnpunktet er $(1, 0)$. Siden dette er det eneste stasjonære punktet og det er et bunnpunkt med verdi $0$, er $f(x) \\geq 0$ for alle $x$. Altså $e^x \\geq ex$ for alle $x$, med likhet bare for $x = 1$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = x \\cdot 2^{-x}$ for $x \\geq 0$. Skriv om til naturlig eksponentialfunksjon og finn toppunkt.', solution: '$f(x) = xe^{-x\\ln 2}$. $f\'(x) = e^{-x\\ln 2} - x\\ln 2 \\cdot e^{-x\\ln 2} = e^{-x\\ln 2}(1 - x\\ln 2)$. $f\'(x) = 0 \\Rightarrow x = \\frac{1}{\\ln 2} \\approx 1{,}44$. Toppunkt: $(\\frac{1}{\\ln 2}, \\frac{1}{\\ln 2} \\cdot 2^{-1/\\ln 2}) = (\\frac{1}{\\ln 2}, \\frac{1}{e\\ln 2}) \\approx (1{,}44, 0{,}53)$. Horisontal asymptote $y = 0$ mot høyre.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn tangentlinjen til $f(x) = x \\cdot e^x$ i punktet der $x = 0$.', solution: '$f(0) = 0$. $f\'(x) = e^x + xe^x = e^x(1+x)$. $f\'(0) = 1$. Tangent: $y = x$.' },
          { label: 'b', task: 'Finn tangentlinjen til $g(x) = \\ln(x^2 + 1)$ i punktet der $x = 1$.', solution: '$g(1) = \\ln 2$. $g\'(x) = \\frac{2x}{x^2+1}$. $g\'(1) = \\frac{2}{2} = 1$. Tangent: $y - \\ln 2 = 1 \\cdot (x - 1)$, altså $y = x - 1 + \\ln 2$.' }
        ]
      }
    },
    {
      id: 's2-3-6-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-3-6-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Funksjonen $f(x) = ax^2 e^{bx}$ har toppunkt i $(2, 4e^{-2})$. Bestem $a$ og $b$.', solution: '$f(2) = 4a e^{2b} = 4e^{-2}$, altså $ae^{2b} = e^{-2}$ ... (1). $f\'(x) = e^{bx}(2ax + abx^2) = axe^{bx}(2 + bx)$. $f\'(2) = 0 \\Rightarrow 2 + 2b = 0 \\Rightarrow b = -1$. Fra (1): $ae^{-2} = e^{-2}$, altså $a = 1$. Kontroll: $f(x) = x^2e^{-x}$, $f(2) = 4e^{-2}$ ✓.' }
        ]
      }
    },
    {
      id: 's2-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Strategi for drøfting av sammensatte funksjoner:**

1. **Definisjonsmengde** - spesielt viktig for logaritmefunksjoner
2. **Faktoriser $f'(x)$** - trekk ut $e^{g(x)}$ (aldri null!) for å forenkle
3. **Grenseatferd** - bruk veksthierarkiet $\\ln x \\ll x^a \\ll e^x$
4. **Symmetri** - sjekk om $f$ er par ($f(-x) = f(x)$) eller odde ($f(-x) = -f(x)$)

**Huskeliste for eksamen:**
- $e^{g(x)} > 0$ alltid - nullpunkter til $f$ og $f'$ bestemmes av andre faktorer
- $\\ln x$ er definert kun for $x > 0$
- $\\lim_{x \\to 0^+} x^a \\ln x = 0$ for $a > 0$
- Deriver alltid med kjerneregel: $(e^{2x})' = 2e^{2x}$, $(\\ln(x^2))' = \\frac{2x}{x^2} = \\frac{2}{x}$`
    }
  ],
  exercises: []
};

export const S2_KAP1B_CHAPTERS: TextbookChapter[] = [CHAPTER_S2_1_5, CHAPTER_S2_1_6, CHAPTER_S2_1_7, CHAPTER_S2_3_4, CHAPTER_S2_3_5, CHAPTER_S2_3_6];

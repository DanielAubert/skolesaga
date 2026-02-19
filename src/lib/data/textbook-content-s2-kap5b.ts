/**
 * Tekstbok kapitler for S2 - Kapittel 5.4-5.5 (Inferens) og 6.4-6.5 (Regresjon)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.4 - Feilmargin og utvalgsstørrelse
// ============================================================================

export const CHAPTER_S2_5_4: TextbookChapter = {
  id: 's2-5-4',
  courseId: 's2',
  chapterNumber: '5.4',
  title: 'Feilmargin og utvalgsstørrelse',
  description: 'Lær å beregne nødvendig utvalgsstørrelse, forstå sammenhengen mellom feilmargin, konfidensnivå og presisjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne nødvendig utvalgsstørrelse for ønsket presisjon',
    'forstå sammenhengen mellom feilmargin, utvalgsstørrelse og konfidensnivå',
    'vurdere avveiningen mellom presisjon og kostnader i undersøkelser'
  ],
  content: [
    {
      id: 's2-5-4-intro',
      type: 'text',
      content: `## Presisjon i statistiske undersøkelser

Når vi planlegger en undersøkelse, er et av de viktigste spørsmålene: **Hvor mange observasjoner trenger vi?** Et for lite utvalg gir upresise resultater, mens et for stort utvalg koster unødvendig mye tid og penger.

Feilmarginen $E$ forteller oss hvor langt konfidensintervallet strekker seg fra punktestimatet. Jo smalere intervallet er, desto mer presist er estimatet.`
    },
    {
      id: 's2-5-4-def-feilmargin',
      type: 'definition',
      title: 'Feilmargin',
      content: `**Feilmarginen** $E$ er halvparten av bredden til konfidensintervallet.

For gjennomsnitt $\\mu$:
$$E = z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}$$

For andel $p$:
$$E = z_{\\alpha/2} \\cdot \\sqrt{\\frac{p(1-p)}{n}}$$

Feilmarginen påvirkes av tre faktorer:
1. **Konfidensnivå**: Høyere konfidens gir større $z_{\\alpha/2}$ og dermed større $E$
2. **Spredning**: Større $\\sigma$ (eller $p$ nær $0{,}5$) gir større $E$
3. **Utvalgsstørrelse**: Større $n$ gir mindre $E$ (kvadratrotsammenheng)`
    },
    {
      id: 's2-5-4-example-1',
      type: 'example',
      title: 'Effekten av utvalgsstørrelse på feilmargin',
      problem: `En produsent av lyspærer har $\\sigma = 60$ timer. Sammenlign feilmarginen ved 95 % konfidens for $n = 25$, $n = 100$ og $n = 400$.`,
      solution: `Vi bruker $E = 1{,}960 \\cdot \\frac{60}{\\sqrt{n}}$:

| $n$ | $\\sqrt{n}$ | $E$ |
|:---|:---|:---|
| 25 | 5 | $1{,}960 \\cdot 12 = 23{,}52$ |
| 100 | 10 | $1{,}960 \\cdot 6 = 11{,}76$ |
| 400 | 20 | $1{,}960 \\cdot 3 = 5{,}88$ |

Firedobling av $n$ halverer feilmarginen.`
    },
    {
      id: 's2-5-4-theorem-n-mu',
      type: 'theorem',
      title: 'Nødvendig utvalgsstørrelse for $\\mu$',
      content: `For å oppnå feilmargin $E$ ved konfidensnivå $(1-\\alpha)$:

$$n \\geq \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{E}\\right)^2$$

- Bruk et estimat for $\\sigma$ fra tidligere studier eller pilotstudie
- Rund alltid **opp** til nærmeste heltall`
    },
    {
      id: 's2-5-4-example-2',
      type: 'example',
      title: 'Planlegging av undersøkelse',
      problem: `En bedrift vil estimere gjennomsnittlig kundetilfredshet (skala 1-10) med feilmargin $E = 0{,}3$ og 95 % konfidens. Et pilotstudie ga $s = 1{,}8$. Hvor mange kunder trengs?`,
      solution: `**Gitt:** $E = 0{,}3$, $\\sigma \\approx 1{,}8$, $z_{0{,}025} = 1{,}960$

$$n \\geq \\left(\\frac{1{,}960 \\cdot 1{,}8}{0{,}3}\\right)^2 = 11{,}76^2 = 138{,}3$$

Rund opp: $n \\geq 139$. Bedriften trenger minst **139 kunder**.`
    },
    {
      id: 's2-5-4-theorem-n-p',
      type: 'theorem',
      title: 'Nødvendig utvalgsstørrelse for andel $p$',
      content: `For å estimere en andel $p$ med feilmargin $E$:

$$n \\geq \\frac{z_{\\alpha/2}^2 \\cdot p(1-p)}{E^2}$$

- Dersom $p$ er ukjent, bruk $p = 0{,}5$ (konservativt, gir størst $n$)
- Produktet $p(1-p)$ er størst når $p = 0{,}5$`
    },
    {
      id: 's2-5-4-example-3',
      type: 'example',
      title: 'Utvalgsstørrelse for valgundersøkelse',
      problem: `En avis vil estimere et partis oppslutning med feilmargin 2 prosentpoeng og 95 % konfidens. Partiet ligger trolig rundt 15 %. Finn nødvendig $n$.`,
      solution: `**Gitt:** $E = 0{,}02$, $p \\approx 0{,}15$, $z_{0{,}025} = 1{,}960$

$$n \\geq \\frac{1{,}960^2 \\cdot 0{,}15 \\cdot 0{,}85}{0{,}02^2} = \\frac{0{,}4898}{0{,}0004} \\approx 1224{,}5$$

Rund opp: $n \\geq 1225$. Med $p = 0{,}5$ ville vi fått $n \\geq 2401$.`
    },
    {
      id: 's2-5-4-avveining',
      type: 'text',
      content: `## Avveining mellom presisjon og kostnad

**Å halvere feilmarginen krever firedobling av utvalget** ($E \\propto 1/\\sqrt{n}$):

| Ønsket reduksjon i $E$ | Nødvendig økning i $n$ |
|:---|:---|
| Halvere $E$ | $4 \\times n$ |
| Tredele $E$ | $9 \\times n$ |
| Tidele $E$ | $100 \\times n$ |`
    },
    {
      id: 's2-5-4-ex-block-1', type: 'exercise',
      exercise: { id: 's2-5-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Beregn feilmarginen for $\\bar{x}$ med $s = 12$, $n = 144$ og 95 % konfidens.', solution: '$E = 1{,}960 \\cdot \\frac{12}{\\sqrt{144}} = 1{,}960$' },
        { label: 'b', task: 'Hva blir feilmarginen dersom $n$ økes til 576?', solution: '$E = 1{,}960 \\cdot \\frac{12}{\\sqrt{576}} = 0{,}980$. Firedobling av $n$ halverer $E$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-2', type: 'exercise',
      exercise: { id: 's2-5-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Finn $n$ for $E = 5$, $\\sigma = 20$, 95 % konfidens.', solution: '$n \\geq (1{,}960 \\cdot 20/5)^2 = 61{,}5$. Rund opp: $n \\geq 62$.' },
        { label: 'b', task: 'Hva blir $n$ ved 99 % konfidens?', solution: '$n \\geq (2{,}576 \\cdot 20/5)^2 = 106{,}2$. Rund opp: $n \\geq 107$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-3', type: 'exercise',
      exercise: { id: 's2-5-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Finn $n$ for andel med $E = 0{,}04$, 95 % konfidens, ukjent $p$.', solution: '$n \\geq \\frac{1{,}960^2 \\cdot 0{,}25}{0{,}04^2} = 600{,}25$. Rund opp: $n \\geq 601$.' },
        { label: 'b', task: 'Dersom $p \\approx 0{,}3$, hva blir $n$?', solution: '$n \\geq \\frac{1{,}960^2 \\cdot 0{,}21}{0{,}04^2} = 504{,}2$. Rund opp: $n \\geq 505$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-4', type: 'exercise',
      exercise: { id: 's2-5-4-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'KI for $\\mu$ er $[82{,}4 \\,,\\, 89{,}6]$ med $n = 64$. Finn $\\bar{x}$, $E$ og estimat for $\\sigma$.', solution: '$\\bar{x} = 86{,}0$, $E = 3{,}6$. Fra $3{,}6 = 1{,}960 \\cdot s/8$: $s \\approx 14{,}7$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-5', type: 'exercise',
      exercise: { id: 's2-5-4-ex-5', number: '5', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Med $n = 200$, $\\sigma = 10$, 95 % konfidens: hva er $E$?', solution: '$E = 1{,}960 \\cdot 10/\\sqrt{200} = 1{,}386$.' },
        { label: 'b', task: 'For $E \\leq 1{,}0$: minste $n$?', solution: '$n \\geq (19{,}6)^2 = 384{,}2$. Rund opp: $n \\geq 385$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-6', type: 'exercise',
      exercise: { id: 's2-5-4-ex-6', number: '6', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Vis algebraisk at halvering av $E$ firedobler $n$.', solution: '$n = (z\\sigma/E)^2$. Med $E/2$: $n_{ny} = (2z\\sigma/E)^2 = 4n$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-7', type: 'exercise',
      exercise: { id: 's2-5-4-ex-7', number: '7', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Returandel med $E = 0{,}015$, 99 % konfidens, $p \\approx 0{,}08$. Finn $n$.', solution: '$n \\geq \\frac{2{,}576^2 \\cdot 0{,}0736}{0{,}015^2} \\approx 2171$.' },
        { label: 'b', task: 'Hva med $p = 0{,}5$?', solution: '$n \\geq \\frac{6{,}636 \\cdot 0{,}25}{0{,}000225} \\approx 7373$.' }
      ] }
    },
    {
      id: 's2-5-4-ex-block-8', type: 'exercise',
      exercise: { id: 's2-5-4-ex-8', number: '8', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Forklar hvorfor det koster mer å gå fra $E = 2$ til $E = 1$ enn fra $E = 4$ til $E = 2$.', solution: 'Med $z = 1{,}96$, $\\sigma = 10$: $E=4 \\to n=25$, $E=2 \\to n=97$, $E=1 \\to n=385$. Økning 72 vs. 288.' }
      ] }
    },
    {
      id: 's2-5-4-oppsummering', type: 'text',
      content: `## Oppsummering

- **Feilmarginen** $E$ er halvparten av konfidensintervallets bredde
- For $\\mu$: $n \\geq (z_{\\alpha/2} \\cdot \\sigma / E)^2$
- For $p$: $n \\geq z_{\\alpha/2}^2 \\cdot p(1-p) / E^2$, bruk $p = 0{,}5$ hvis ukjent
- Halvering av $E$ krever **firedobling** av $n$`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.5 - Ikke-parametriske tester
// ============================================================================

export const CHAPTER_S2_5_5: TextbookChapter = {
  id: 's2-5-5',
  courseId: 's2',
  chapterNumber: '5.5',
  title: 'Ikke-parametriske tester',
  description: 'Lær om tester som ikke krever normalfordelingsantagelse: fortegnstesten, Wilcoxons test og kjikvadrattest.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå når ikke-parametriske tester er passende',
    'gjennomføre og tolke fortegnstesten',
    'gjennomføre og tolke kjikvadrattest for tilpasning og uavhengighet'
  ],
  content: [
    {
      id: 's2-5-5-intro', type: 'text',
      content: `## Når normalfordelingen ikke holder

Z-testen og t-testen forutsetter at dataene er (tilnærmet) normalfordelte. Men hva gjør vi når:
- Dataene er sterkt skjeve?
- Vi har ordinale data (rangordnede kategorier)?
- Vi vil teste om en fordeling passer en bestemt modell?

**Ikke-parametriske tester** krever ikke spesifikke fordelingsantagelser. De er robuste, men generelt noe svakere enn parametriske tester når normalfordelingen faktisk holder.`
    },
    {
      id: 's2-5-5-def-fortegn', type: 'definition', title: 'Fortegnstesten (tegntest)',
      content: `**Fortegnstesten** tester om medianen er lik en bestemt verdi $m_0$.

**Fremgangsmåte:**
1. Beregn $d_i = x_i - m_0$
2. Fjern observasjoner der $d_i = 0$
3. Tell $n_+$ (positive) og $n_-$ (negative)
4. Under $H_0$: $n_+ \\sim \\text{Bin}(n, 0{,}5)$

P-verdien beregnes fra binomisk fordeling.`
    },
    {
      id: 's2-5-5-example-1', type: 'example', title: 'Fortegnstest for median',
      problem: `Produsenten hevder median levetid er 1000 timer. 15 komponenter: 11 over, 4 under. Test med $\\alpha = 0{,}05$ (tosidig).`,
      solution: `$H_0: m = 1000$, $H_1: m \\neq 1000$. $n_+ = 11$, $n = 15$, $n_+ \\sim \\text{Bin}(15, 0{,}5)$.

$$P = 2 \\cdot P(X \\geq 11) = 2 \\cdot \\frac{1941}{32768} \\approx 0{,}118 > 0{,}05$$

Forkaster **ikke** $H_0$.`
    },
    {
      id: 's2-5-5-def-wilcoxon', type: 'definition', title: 'Wilcoxons rangtest',
      content: `**Wilcoxons rangtest** bruker **størrelsen** på differansene, ikke bare fortegnet.

1. Beregn $|d_i|$ og ranger fra minst til størst
2. $T_+ = $ sum av ranger med positivt fortegn
3. Under $H_0$: $E(T_+) = n(n+1)/4$

Mer effektiv enn fortegnstesten fordi den bruker mer informasjon.`
    },
    {
      id: 's2-5-5-kjikvadrat', type: 'text',
      content: `## Kjikvadrattest som ikke-parametrisk test

**Tilpasningstest:** Tester om observerte frekvenser passer en forventet fordeling.
$$\\chi^2 = \\sum_{i=1}^{k} \\frac{(O_i - E_i)^2}{E_i}, \\quad df = k - 1$$

**Uavhengighetstest:** Tester om to kategoriske variabler er uavhengige.
$$E_{ij} = \\frac{R_i \\cdot C_j}{N}, \\quad df = (r-1)(c-1)$$

**Krav:** Alle $E_i \\geq 5$.`
    },
    {
      id: 's2-5-5-example-2', type: 'example', title: 'Kjikvadrattest for uavhengighet',
      problem: `| | God søvn | Dårlig søvn | Sum |
|:---|:---|:---|:---|
| Trener | 45 | 15 | 60 |
| Trener ikke | 30 | 30 | 60 |
| Sum | 75 | 45 | 120 |

Test uavhengighet med $\\alpha = 0{,}05$.`,
      solution: `$E_{11} = 37{,}5$, $E_{12} = 22{,}5$, $E_{21} = 37{,}5$, $E_{22} = 22{,}5$.

$$\\chi^2 = 1{,}5 + 2{,}5 + 1{,}5 + 2{,}5 = 8{,}0$$

$df = 1$, $\\chi^2_{krit} = 3{,}841$. $8{,}0 > 3{,}841$ — forkaster $H_0$. Signifikant sammenheng.`
    },
    {
      id: 's2-5-5-ex-block-1', type: 'exercise',
      exercise: { id: 's2-5-5-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'I et utvalg på 20 er 14 over $m_0$ og 6 under. Hva er testobservatoren?', solution: '$n_+ = 14$. Under $H_0$: $n_+ \\sim \\text{Bin}(20, 0{,}5)$.' },
        { label: 'b', task: 'Nevn to situasjoner der ikke-parametriske tester passer bedre.', solution: '1. Sterkt skjeve data med lite utvalg. 2. Ordinale data.' }
      ] }
    },
    {
      id: 's2-5-5-ex-block-2', type: 'exercise',
      exercise: { id: 's2-5-5-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Mynt kastes 80 ganger: 50 krone, 30 mynt. Beregn $\\chi^2$.', solution: '$E = 40$. $\\chi^2 = 100/40 + 100/40 = 5{,}0$.' },
        { label: 'b', task: 'Signifikant ved $\\alpha = 0{,}05$? ($\\chi^2_{0{,}05;1} = 3{,}841$)', solution: '$5{,}0 > 3{,}841$. Ja, forkaster $H_0$.' }
      ] }
    },
    {
      id: 's2-5-5-ex-block-3', type: 'exercise',
      exercise: { id: 's2-5-5-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '200 fødselsdager over 4 kvartal: 58, 45, 52, 45. Test lik fordeling, $\\alpha = 0{,}05$. ($\\chi^2_{0{,}05;3} = 7{,}815$)', solution: '$E = 50$. $\\chi^2 = 1{,}28 + 0{,}50 + 0{,}08 + 0{,}50 = 2{,}36 < 7{,}815$. Forkaster ikke $H_0$.' }
      ] }
    },
    {
      id: 's2-5-5-ex-block-4', type: 'exercise',
      exercise: { id: 's2-5-5-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Krysstabell $r = 2$, $c = 4$. Frihetsgrader?', solution: '$df = (2-1)(4-1) = 3$.' },
        { label: 'b', task: '$R_i = 80$, $C_j = 50$, $N = 200$. Finn $E_{ij}$.', solution: '$E = 80 \\cdot 50/200 = 20$.' }
      ] }
    },
    {
      id: 's2-5-5-ex-block-5', type: 'exercise',
      exercise: { id: 's2-5-5-ex-5', number: '5', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '12 pasienter: 9 bedring, 2 forverring, 1 uendret. Fortegnstest, $\\alpha = 0{,}05$, ensidig.', solution: '$n = 11$, $n_+ = 9$. $P(X \\geq 9) = 67/2048 \\approx 0{,}033 < 0{,}05$. Forkaster $H_0$.' }
      ] }
    },
    {
      id: 's2-5-5-ex-block-6', type: 'exercise',
      exercise: { id: 's2-5-5-ex-6', number: '6', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Røyking vs. lungesykdom: Røyker+syk 40, Røyker+frisk 60, Ikke-røyker+syk 20, Ikke-røyker+frisk 80. Test med $\\alpha = 0{,}05$.', solution: '$E_{11}=E_{21}=30$, $E_{12}=E_{22}=70$. $\\chi^2 = 3{,}33+1{,}43+3{,}33+1{,}43 = 9{,}52 > 3{,}841$. Forkaster $H_0$.' }
      ] }
    },
    {
      id: 's2-5-5-ex-block-7', type: 'exercise',
      exercise: { id: 's2-5-5-ex-7', number: '7', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Forskjell mellom fortegnstesten og Wilcoxon? Når velge Wilcoxon?', solution: 'Fortegn: bare fortegn. Wilcoxon: også størrelse (ranger). Wilcoxon foretrekkes når differansene har meningsfull størrelse.' },
        { label: 'b', task: 'Fordel og ulempe med ikke-parametriske tester?', solution: 'Fordel: Ingen fordelingsantagelse, fungerer for ordinale data. Ulempe: Lavere styrke, trenger flere observasjoner.' }
      ] }
    },
    {
      id: 's2-5-5-oppsummering', type: 'text',
      content: `## Oppsummering

- **Fortegnstesten**: Tester medianen, $n_+ \\sim \\text{Bin}(n, 0{,}5)$ under $H_0$
- **Wilcoxons rangtest**: Sterkere, bruker rangert informasjon
- **Kjikvadrattest**: $\\chi^2 = \\sum (O_i - E_i)^2/E_i$, krav $E_i \\geq 5$
- Ikke-parametriske tester er robuste men har lavere styrke`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 6.4 - Ikke-lineær regresjon
// ============================================================================

export const CHAPTER_S2_6_4: TextbookChapter = {
  id: 's2-6-4',
  courseId: 's2',
  chapterNumber: '6.4',
  title: 'Ikke-lineær regresjon',
  description: 'Lær å tilpasse polynomiske, eksponentielle og logaritmiske modeller til data.',
  estimatedMinutes: 55,
  competenceGoals: [
    'tilpasse polynomiske, eksponentielle og logaritmiske regresjonsmodeller',
    'linearisere ikke-lineære modeller ved variabeltransformasjon',
    'bruke $R^2$ og residualplott til å vurdere modelltilpasning'
  ],
  content: [
    {
      id: 's2-6-4-intro', type: 'text',
      content: `## Utover den rette linjen

Lineær regresjon fungerer når sammenhengen er tilnærmet lineær. Men mange fenomener følger andre mønstre:
- **Eksponentiell vekst**: Befolkningsvekst, renters rente
- **Logaritmisk**: Desibel, Richter-skalaen
- **Polynomisk**: Kastebaner, kostnadsoptimering`
    },
    {
      id: 's2-6-4-def-polynom', type: 'definition', title: 'Polynomisk regresjon',
      content: `**Polynomisk regresjon** tilpasser:
$$y = a_0 + a_1 x + a_2 x^2 + \\cdots + a_k x^k$$

- **Grad 2** (kvadratisk): $y = a + bx + cx^2$
- **Grad 3** (kubisk): $y = a + bx + cx^2 + dx^3$

Koeffisientene bestemmes ved minste kvadraters metode.`
    },
    {
      id: 's2-6-4-example-1', type: 'example', title: 'Kvadratisk regresjon',
      problem: `Høyde $h$ (m) ved tid $t$ (s) for en ball:

| $t$ | 0 | 0,5 | 1,0 | 1,5 | 2,0 | 2,5 |
|:---|:---|:---|:---|:---|:---|:---|
| $h$ | 1,0 | 4,6 | 6,8 | 7,2 | 5,9 | 3,1 |

Regresjon gir $h = 0{,}95 + 7{,}62t - 3{,}18t^2$, $R^2 = 0{,}995$. Tolk.`,
      solution: `- $h(0) = 0{,}95$ m (starthøyde)
- Toppunkt: $t = 7{,}62/(2 \\cdot 3{,}18) = 1{,}20$ s
- $R^2 = 0{,}995$: 99,5 % forklares. Svært god tilpasning.`
    },
    {
      id: 's2-6-4-def-eksp', type: 'definition', title: 'Eksponentiell regresjon',
      content: `$$y = a \\cdot e^{kx}$$

**Linearisering:** $\\ln y = \\ln a + kx$ er lineær i $(x, \\ln y)$.

1. Beregn $\\ln y_i$ for alle datapunkter
2. Lineær regresjon på $(x_i, \\ln y_i)$
3. Konstantledd $= \\ln a$, stigningstall $= k$`
    },
    {
      id: 's2-6-4-example-2', type: 'example', title: 'Bakterievekst',
      problem: `| $t$ | 0 | 1 | 2 | 3 | 4 |
|:---|:---|:---|:---|:---|:---|
| $N$ | 100 | 150 | 220 | 340 | 500 |

Regresjon på $(t, \\ln N)$: $\\ln N = 4{,}61 + 0{,}403t$, $R^2 = 0{,}999$.`,
      solution: `$a = e^{4{,}61} \\approx 100{,}5$, $k = 0{,}403$.

**Modell:** $N(t) = 100{,}5 \\cdot e^{0{,}403t}$

**Doblingstid:** $\\ln 2 / 0{,}403 \\approx 1{,}72$ timer.`
    },
    {
      id: 's2-6-4-modellvalg', type: 'text',
      content: `## Modellvalg

**Potensregresjon:** $y = ax^b$ — lineariseres med $\\ln y = \\ln a + b\\ln x$

**Logaritmisk:** $y = a + b\\ln x$ — allerede lineær i $\\ln x$

| Mønster | Modell |
|:---|:---|
| Jevn stigning | Lineær |
| Krumning | Polynomisk |
| Rask vekst | Eksponentiell |
| Avtagende vekst | Logaritmisk |
| Log-log lineær | Potens |

Bruk $R^2$ og residualplott for å sammenligne.`
    },
    {
      id: 's2-6-4-ex-block-1', type: 'exercise',
      exercise: { id: 's2-6-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Hvilken modell passer for rask vekst som avtar?', solution: 'Logaritmisk ($y = a + b\\ln x$).' },
        { label: 'b', task: 'Hva betyr «linearisering» for $y = ae^{kx}$?', solution: 'Transformere til $\\ln y = \\ln a + kx$, lineær i $(x, \\ln y)$.' }
      ] }
    },
    {
      id: 's2-6-4-ex-block-2', type: 'exercise',
      exercise: { id: 's2-6-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '$\\ln y = 2{,}30 + 0{,}15x$. Skriv som $y = ae^{kx}$.', solution: '$a = e^{2{,}30} \\approx 9{,}97$, $k = 0{,}15$. $y = 9{,}97e^{0{,}15x}$.' },
        { label: 'b', task: 'Finn doblingstiden.', solution: '$\\ln 2/0{,}15 \\approx 4{,}62$.' }
      ] }
    },
    {
      id: 's2-6-4-ex-block-3', type: 'exercise',
      exercise: { id: 's2-6-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Konsentrasjon: $(1;8{,}1)$, $(2;6{,}6)$, $(3;5{,}4)$, $(4;4{,}4)$, $(5;3{,}6)$. Beregn $\\ln C$ og vurder eksponentiell modell.', solution: '$\\ln C$: $2{,}09$, $1{,}89$, $1{,}69$, $1{,}48$, $1{,}28$. Tilnærmet lineært — eksponentiell passer.' },
        { label: 'b', task: '$\\ln C = 2{,}29 - 0{,}203t$. Halveringstid?', solution: '$t_{1/2} = \\ln 2/0{,}203 \\approx 3{,}41$ timer.' }
      ] }
    },
    {
      id: 's2-6-4-ex-block-4', type: 'exercise',
      exercise: { id: 's2-6-4-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Forklar linearisering av $y = ax^b$.', solution: '$\\ln y = \\ln a + b\\ln x$. Stigningstallet $b$ er eksponenten.' }
      ] }
    },
    {
      id: 's2-6-4-ex-block-5', type: 'exercise',
      exercise: { id: 's2-6-4-ex-5', number: '5', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Kvadratisk $R^2 = 0{,}92$ vs. lineær $R^2 = 0{,}85$. Er kvadratisk nødvendigvis bedre?', solution: 'Ikke nødvendigvis. $R^2$ øker alltid med flere parametre. Sjekk residualplott og justert $R^2$.' }
      ] }
    },
    {
      id: 's2-6-4-ex-block-6', type: 'exercise',
      exercise: { id: 's2-6-4-ex-6', number: '6', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'BNP og levealder: $(50;72)$, $(80;76)$, $(120;79)$, $(200;81)$, $(350;82)$, $(600;84)$. Beregn $\\ln x$ og vurder logaritmisk modell.', solution: '$\\ln x$: $3{,}91$, $4{,}38$, $4{,}79$, $5{,}30$, $5{,}86$, $6{,}40$. Tilnærmet lineært — logaritmisk passer.' },
        { label: 'b', task: '$y = 53{,}1 + 4{,}88\\ln x$. Levealder ved BNP $= 1000$?', solution: '$y = 53{,}1 + 4{,}88 \\cdot 6{,}908 = 86{,}8$ år. Ekstrapolasjon.' }
      ] }
    },
    {
      id: 's2-6-4-oppsummering', type: 'text',
      content: `## Oppsummering

- **Polynomisk**: $y = a_0 + a_1 x + a_2 x^2 + \\cdots$
- **Eksponentiell**: $y = ae^{kx}$, lineariseres med $\\ln y = \\ln a + kx$
- **Potens**: $y = ax^b$, lineariseres med $\\ln y = \\ln a + b\\ln x$
- **Logaritmisk**: $y = a + b\\ln x$
- Bruk $R^2$ og residualplott for modellvalg`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 6.5 - Modellvalidering og residualanalyse
// ============================================================================

export const CHAPTER_S2_6_5: TextbookChapter = {
  id: 's2-6-5',
  courseId: 's2',
  chapterNumber: '6.5',
  title: 'Modellvalidering og residualanalyse',
  description: 'Lær å vurdere regresjonsmodeller med residualplott, uteliggere og justert R-kvadrat.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne og tolke residualer',
    'bruke residualplott for å vurdere modellforutsetninger',
    'identifisere uteliggere og innflytelsesrike observasjoner'
  ],
  content: [
    {
      id: 's2-6-5-intro', type: 'text',
      content: `## Er modellen god nok?

Høy $R^2$ betyr ikke nødvendigvis god modell. Vi må sjekke **forutsetningene** via **residualanalyse**.

Et **residual**: $e_i = y_i - \\hat{y}_i$ — det modellen ikke fanger opp.`
    },
    {
      id: 's2-6-5-def-residual', type: 'definition', title: 'Residualer og residualplott',
      content: `**Residualet** for observasjon $i$: $e_i = y_i - \\hat{y}_i$

**Residualplott**: $e_i$ mot $\\hat{y}_i$ (eller $x_i$).

God modell gir residualer som:
1. **Sprer seg tilfeldig** rundt null
2. Har **konstant spredning** (homoskedastisitet)
3. Er tilnærmet **normalfordelte**`
    },
    {
      id: 's2-6-5-example-1', type: 'example', title: 'Residualanalyse',
      problem: `$\\hat{y} = 2 + 3x$:

| $x$ | $y$ | $\\hat{y}$ | $e$ |
|:---|:---|:---|:---|
| 1 | 4,5 | 5 | $-0{,}5$ |
| 2 | 8,2 | 8 | $0{,}2$ |
| 3 | 10,8 | 11 | $-0{,}2$ |
| 4 | 14,5 | 14 | $0{,}5$ |
| 5 | 16,8 | 17 | $-0{,}2$ |`,
      solution: `Residualene veksler uten trend, jevn spredning ($-0{,}5$ til $0{,}5$), sum $\\approx 0$. Modellen er passende.`
    },
    {
      id: 's2-6-5-monstre', type: 'text',
      content: `## Vanlige mønstre i residualplott

**1. Buet mønster**: U-form — sammenhengen er **ikke-lineær**

**2. Traktform**: Spredning øker — **heteroskedastisitet**. Prøv log-transformasjon.

**3. Gruppering**: Klynger — manglende forklaringsvariabler.

**Ideelt**: Tilfeldig spredning rundt null.`
    },
    {
      id: 's2-6-5-def-uteligger', type: 'definition', title: 'Uteliggere og innflytelsesrike punkter',
      content: `**Uteligger**: $|e_i| > 2s_e$ (uvanlig stort residual)

**Innflytelsesrikt punkt**: Ekstrem $x$-verdi som trekker regresjonslinjen.

**Standardiserte residualer:** $z_i = e_i/s_e$. $|z_i| > 2$ undersøkes.

Uteliggere bør **undersøkes**, ikke automatisk fjernes.`
    },
    {
      id: 's2-6-5-example-2', type: 'example', title: 'Identifisere uteliggere',
      problem: `$s_e = 3{,}2$. Residualer: $-1{,}5$; $2{,}1$; $0{,}8$; $-9{,}4$; $-0{,}3$; $1{,}7$; $-2{,}4$; $0{,}9$.`,
      solution: `$z_i = e_i/3{,}2$: $-0{,}47$; $0{,}66$; $0{,}25$; $\\mathbf{-2{,}94}$; $-0{,}09$; $0{,}53$; $-0{,}75$; $0{,}28$.

Observasjon 4: $|z| = 2{,}94 > 2$ — uteligger. Undersøk årsak.`
    },
    {
      id: 's2-6-5-r2', type: 'text',
      content: `## $R^2$ og justert $R^2$

$$R^2 = 1 - \\frac{SS_E}{SS_T}, \\quad R^2_{adj} = 1 - \\frac{SS_E/(n-k-1)}{SS_T/(n-1)}$$

$R^2$ øker alltid med flere variabler. **Justert $R^2$** korrigerer for dette og kan synke om en variabel ikke bidrar.`
    },
    {
      id: 's2-6-5-ex-block-1', type: 'exercise',
      exercise: { id: 's2-6-5-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '$\\hat{y} = 16$ for $x = 3$, observert $y = 18$. Residual?', solution: '$e = 18 - 16 = 2$.' },
        { label: 'b', task: 'Hva betyr positivt residual?', solution: 'Modellen underpredikerer.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-2', type: 'exercise',
      exercise: { id: 's2-6-5-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '$SS_E = 40$, $SS_T = 200$. Finn $R^2$.', solution: '$R^2 = 1 - 40/200 = 0{,}80$.' },
        { label: 'b', task: '$n = 30$, $k = 2$. Justert $R^2$?', solution: '$R^2_{adj} = 1 - \\frac{40/27}{200/29} = 0{,}785$.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-3', type: 'exercise',
      exercise: { id: 's2-6-5-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Residualer: $-3, -1, 1, 3, 5$. Beregn $SS_E$ og tolk.', solution: '$SS_E = 9+1+1+9+25 = 45$. Stigende trend — behov for ikke-lineær modell.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-4', type: 'exercise',
      exercise: { id: 's2-6-5-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '$s_e = 4{,}5$, $e = 11{,}2$. Uteligger?', solution: '$z = 11{,}2/4{,}5 = 2{,}49 > 2$. Ja.' },
        { label: 'b', task: 'Bør den fjernes?', solution: 'Nei, ikke automatisk. Undersøk for feil først.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-5', type: 'exercise',
      exercise: { id: 's2-6-5-ex-5', number: '5', type: 'classic', difficulty: 'medium', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Forskjell uteligger vs. innflytelsesrikt punkt?', solution: 'Uteligger: stort residual. Innflytelsesrikt: ekstrem $x$-verdi som trekker linjen.' },
        { label: 'b', task: 'Forskjell $R^2$ vs. justert $R^2$?', solution: '$R^2$ øker alltid. Justert $R^2$ straffer overflødige variabler.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-6', type: 'exercise',
      exercise: { id: 's2-6-5-ex-6', number: '6', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '1 variabel: $R^2 = 0{,}82$, adj. $R^2 = 0{,}81$. 4 variabler: $R^2 = 0{,}84$, adj. $R^2 = 0{,}79$. Hvilken modell?', solution: 'Den enkle. Justert $R^2$ synker fra 0,81 til 0,79. Ekstra variabler bidrar ikke nok.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-7', type: 'exercise',
      exercise: { id: 's2-6-5-ex-7', number: '7', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: '$SS_T = 500$, $SS_E = 75$, $n = 25$, $k = 3$. Finn $R^2$ og justert $R^2$.', solution: '$R^2 = 0{,}85$. $R^2_{adj} = 1 - \\frac{75/21}{500/24} = 0{,}829$.' },
        { label: 'b', task: '4. variabel: $SS_E = 70$. Nye verdier? Nyttig?', solution: '$R^2 = 0{,}86$. $R^2_{adj} = 1 - \\frac{70/20}{500/24} = 0{,}832$. Marginal økning — minimal nytte.' }
      ] }
    },
    {
      id: 's2-6-5-ex-block-8', type: 'exercise',
      exercise: { id: 's2-6-5-ex-8', number: '8', type: 'classic', difficulty: 'vanskelig', task: 'Løs oppgavene:', subTasks: [
        { label: 'a', task: 'Residualplott viser U-form. Hva betyr det?', solution: 'Ikke-lineær sammenheng. Prøv kvadratisk modell og sjekk residualplottet på nytt.' }
      ] }
    },
    {
      id: 's2-6-5-oppsummering', type: 'text',
      content: `## Oppsummering

- **Residualer**: $e_i = y_i - \\hat{y}_i$
- **Residualplott**: Buet → ikke-lineær, traktform → heteroskedastisitet
- **Uteligger**: $|z_i| > 2$ — undersøk, ikke fjern automatisk
- **Justert $R^2$**: Bruk denne ved flere variabler`
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const S2_KAP5B_CHAPTERS = [CHAPTER_S2_5_4, CHAPTER_S2_5_5, CHAPTER_S2_6_4, CHAPTER_S2_6_5];

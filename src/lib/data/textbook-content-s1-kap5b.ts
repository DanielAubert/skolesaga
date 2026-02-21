/**
 * Tekstbok kapitler for S1 - Seksjon 5 og 6 (Statistikk/Sannsynlighet) og Seksjon 8 (Modellering)
 * Inkluderer: Stokastiske variabler, Simulering, Hypergeometrisk fordeling,
 * Normalfordelingsapproksimasjon, Statistisk prosjektarbeid,
 * Lineær optimering utvidet, Modellering med reelle datasett, Digitale verktøy
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.5: Stokastiske variabler og forventningsverdi
// ============================================================================

export const CHAPTER_S1_5_5: TextbookChapter = {
  id: 's1-5-5',
  courseId: 's1',
  chapterNumber: '5.5',
  title: 'Stokastiske variabler og forventningsverdi',
  description: 'Lær om stokastiske variabler, sannsynlighetsfordelinger, forventningsverdi E(X), varians og standardavvik med økonomieksempler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'definere og bruke stokastiske variabler',
    'sette opp sannsynlighetsfordelinger',
    'beregne forventningsverdi E(X)',
    'beregne varians og standardavvik',
    'tolke forventningsverdi i økonomisammenheng',
  ],
  content: [
    {
      id: 's1-5-5-intro',
      type: 'text',
      content: `## Stokastiske variabler

I dagliglivet møtes vi stadig med usikre utfall: hva blir morgendagens omsetning i bedriften, hvor mange kunder kommer i dag, eller hva blir avkastningen på en investering? For å analysere slike situasjoner bruker vi **stokastiske variabler**.

En stokastisk variabel $X$ er en variabel som kan ta ulike verdier avhengig av utfallet av et tilfeldig eksperiment. Vi skriver $P(X = x)$ for sannsynligheten for at $X$ tar verdien $x$.

**Eksempel fra næringslivet:** La $X$ være antall reklamasjoner en nettbutikk mottar på en tilfeldig valgt dag. Basert på historiske data kan butikken sette opp en sannsynlighetsfordeling og planlegge kundeservice-bemanningen deretter.`,
    },
    {
      id: 's1-5-5-def-fordeling',
      type: 'definition',
      title: 'Sannsynlighetsfordeling og forventningsverdi',
      content: `En **sannsynlighetsfordeling** for en diskret stokastisk variabel $X$ er en tabell eller formel som angir $P(X = x)$ for alle mulige verdier $x$.

Krav: $\\sum_x P(X = x) = 1$ og $P(X = x) \\geq 0$ for alle $x$.

**Forventningsverdien** (gjennomsnittet på lang sikt) er:

$$E(X) = \\sum_x x \\cdot P(X = x)$$

**Variansen** måler spredningen:

$$\\text{Var}(X) = E\\bigl[(X - E(X))^2\\bigr] = \\sum_x (x - E(X))^2 \\cdot P(X = x)$$

**Standardavviket:** $\\sigma = \\sqrt{\\text{Var}(X)}$`,
    },
    {
      id: 's1-5-5-theorem-regler',
      type: 'theorem',
      title: 'Regneregler for E og Var',
      content: `For konstanter $a$ og $b$ og stokastiske variabler $X$ og $Y$:

$$E(aX + b) = a \\cdot E(X) + b$$

$$\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$$

Dersom $X$ og $Y$ er **uavhengige**:

$$E(X + Y) = E(X) + E(Y)$$

$$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$$

Disse reglene er svært nyttige når vi analyserer sammensatte økonomiske størrelser, for eksempel totalinntekt fra flere uavhengige produkter.`,
    },
    {
      id: 's1-5-5-example-lott',
      type: 'example',
      title: 'Eksempel: Forventet gevinst i et lotteri',
      problem: `En bedrift arrangerer et internt lotteri for ansatte. Billetten koster 50 kr. Gevinststørrelsene og sannsynlighetene er:

| Gevinst (kr) | Sannsynlighet |
|---|---|
| 0 | 0,60 |
| 50 | 0,25 |
| 200 | 0,12 |
| 1000 | 0,03 |

a) Beregn forventet gevinst.
b) Beregn standardavviket.
c) Er det lurt å kjøpe en billett?`,
      solution: `**a) Forventet gevinst:**

$$E(X) = 0 \\cdot 0{,}60 + 50 \\cdot 0{,}25 + 200 \\cdot 0{,}12 + 1000 \\cdot 0{,}03$$
$$= 0 + 12{,}5 + 24 + 30 = 66{,}5 \\text{ kr}$$

**b) Varians og standardavvik:**

$$\\text{Var}(X) = (0-66{,}5)^2 \\cdot 0{,}60 + (50-66{,}5)^2 \\cdot 0{,}25 + (200-66{,}5)^2 \\cdot 0{,}12 + (1000-66{,}5)^2 \\cdot 0{,}03 \\approx 30989 \\text{ kr}^2$$

$$\\sigma = \\sqrt{30989} \\approx 176 \\text{ kr}$$

**c) Vurdering:**

Forventet gevinst (66,5 kr) er høyere enn billettpris (50 kr), så i gjennomsnitt tjener man 16,5 kr per billett. Men standardavviket er stort (176 kr), så det er stor usikkerhet. På lang sikt er det gunstig, men enkeltutfall varierer mye.`,
    },
    {
      id: 's1-5-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-5-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En selger har daglig salg $X$ (antall enheter) med følgende fordeling: $P(X=0)=0{,}10$, $P(X=1)=0{,}30$, $P(X=2)=0{,}40$, $P(X=3)=0{,}20$.',
        subTasks: [
          {
            label: 'a',
            task: 'Bekreft at dette er en gyldig sannsynlighetsfordeling.',
            solution: '$0{,}10 + 0{,}30 + 0{,}40 + 0{,}20 = 1{,}00$ ✓ og alle sannsynligheter $\\geq 0$ ✓',
          },
          {
            label: 'b',
            task: 'Beregn forventet daglig salg $E(X)$.',
            solution: '$E(X) = 0\\cdot0{,}10 + 1\\cdot0{,}30 + 2\\cdot0{,}40 + 3\\cdot0{,}20 = 0 + 0{,}30 + 0{,}80 + 0{,}60 = 1{,}70$ enheter',
          },
          {
            label: 'c',
            task: 'Hvis fortjeneste per enhet er 150 kr, hva er forventet daglig fortjeneste?',
            solution: 'La $Y = 150X$. Da er $E(Y) = 150 \\cdot E(X) = 150 \\cdot 1{,}70 = 255$ kr',
          },
        ],
        hints: ['Bruk formelen $E(X) = \\sum x \\cdot P(X=x)$', 'Bruk regneregelen $E(aX) = a \\cdot E(X)$'],
      },
    },
    {
      id: 's1-5-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-5-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et investeringsprosjekt gir følgende årlige avkastning (i tusen kr): $-50$ med $P=0{,}15$, $0$ med $P=0{,}20$, $100$ med $P=0{,}40$, $200$ med $P=0{,}25$.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn forventet årlig avkastning.',
            solution: '$E(X) = (-50)(0{,}15) + 0(0{,}20) + 100(0{,}40) + 200(0{,}25) = -7{,}5 + 0 + 40 + 50 = 82{,}5$ tusen kr',
          },
          {
            label: 'b',
            task: 'Beregn standardavviket til avkastningen.',
            solution: '$\\text{Var}(X) = (-50-82{,}5)^2(0{,}15) + (0-82{,}5)^2(0{,}20) + (100-82{,}5)^2(0{,}40) + (200-82{,}5)^2(0{,}25) \\approx 7577$ tusen kr${}^2$. $\\sigma \\approx 87{,}0$ tusen kr',
          },
          {
            label: 'c',
            task: 'Tolk resultatene i en økonomisk kontekst.',
            solution: 'Forventet gevinst er 82 500 kr, men med et standardavvik på ca. 87 000 kr er det stor risiko. Prosjektet har 15 % sjanse for tap. Investoren bør vurdere om risikoen er akseptabel.',
          },
        ],
        hints: ['Regn ut $(x - E(X))^2 \\cdot P(X=x)$ for hvert ledd', 'Standardavvik = kvadratroten av variansen'],
      },
    },
    {
      id: 's1-5-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To uavhengige produktlinjer: Produkt A: $E(X_A) = 120$ kr, $\\sigma_A = 30$ kr. Produkt B: $E(X_B) = 80$ kr, $\\sigma_B = 20$ kr. Daglig totalinntekt er $T = X_A + X_B$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $E(T)$.',
            solution: '$E(T) = E(X_A) + E(X_B) = 120 + 80 = 200$ kr',
          },
          {
            label: 'b',
            task: 'Finn $\\text{Var}(T)$ og $\\sigma_T$ (siden $X_A$ og $X_B$ er uavhengige).',
            solution: '$\\text{Var}(T) = \\text{Var}(X_A) + \\text{Var}(X_B) = 30^2 + 20^2 = 900 + 400 = 1300$ $\\Rightarrow \\sigma_T = \\sqrt{1300} \\approx 36{,}1$ kr',
          },
          {
            label: 'c',
            task: 'Forklar hvorfor $\\sigma_T < \\sigma_A + \\sigma_B$, og hva dette betyr for diversifisering.',
            solution: '$\\sigma_T \\approx 36{,}1 < 30 + 20 = 50$. Dette er diversifiseringseffekten: ved å spre risiko på uavhengige produkter reduseres den totale risikoen relativt til forventningsverdien. Grunnprinsippet bak porteføljeforvaltning.',
          },
        ],
        hints: ['Bruk addisjonsreglene for E og Var', 'Husk: $\\text{Var}(X) = \\sigma^2$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6: Simulering med digitale verktøy
// ============================================================================

export const CHAPTER_S1_5_6: TextbookChapter = {
  id: 's1-5-6',
  courseId: 's1',
  chapterNumber: '5.6',
  title: 'Simulering med digitale verktøy',
  description: 'Bruk simulering og Monte Carlo-metoden i GeoGebra og Python til å utforske sannsynlighet og store talls lov.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare prinsippene bak simulering',
    'bruke GeoGebra til enkle sannsynlighetssimulasjoner',
    'kjenne til Monte Carlo-metoden',
    'illustrere store talls lov gjennom simulering',
    'tolke simuleringsresultater kritisk',
  ],
  content: [
    {
      id: 's1-5-6-intro',
      type: 'text',
      content: `## Simulering -- å etterligne virkeligheten digitalt

Når analytiske beregninger blir kompliserte, eller når vi vil undersøke et system over tid, er **simulering** et kraftig verktøy. Vi lar datamaskinen gjenta et tilfeldig eksperiment tusenvis av ganger og studerer mønstrene som oppstår.

**Praktisk bruk i næringslivet:**
- Simulere kundeankomster i en butikk
- Estimere risiko i finansielle porteføljer
- Planlegge lagerbehold under usikker etterspørsel
- Teste prisstrategier

I denne seksjonen lærer du å bruke GeoGebra og grunnleggende Python til simulering.`,
    },
    {
      id: 's1-5-6-def-montecarlo',
      type: 'definition',
      title: 'Monte Carlo-metoden',
      content: `**Monte Carlo-simulering** er en teknikk der man bruker store mengder tilfeldige tall for å estimere sannsynligheter eller løse matematiske problemer.

**Prinsipp:** Gjenta eksperimentet $n$ ganger. La $f$ være antall gunstige utfall. Da er:

$$P(A) \\approx \\frac{f}{n}$$

Nøyaktigheten øker med $n$. Typisk usikkerhet er $\\approx \\frac{1}{\\sqrt{n}}$.

**Store talls lov:** Når $n \\to \\infty$ vil den relative hyppigheten nærme seg den teoretiske sannsynligheten:

$$\\frac{f}{n} \\xrightarrow{n \\to \\infty} P(A)$$`,
    },
    {
      id: 's1-5-6-example-geogebra',
      type: 'example',
      title: 'Eksempel: Simulere terningkast i GeoGebra',
      problem: `Simuler 1000 kast med to terninger og estimer sannsynligheten for at summen er 7.`,
      solution: `**GeoGebra-kommandoer:**

Bruk verktøyet "Ettlinje" / CAS-kalkulator:
\`\`\`
n = 1000
kast1 = RandomBetween(1, 6, n)
kast2 = RandomBetween(1, 6, n)
\`\`\`

**Python-tilnærming:**
\`\`\`python
import random
n = 10000
antall7 = sum(1 for _ in range(n)
               if random.randint(1,6) + random.randint(1,6) == 7)
print(f"Estimert P(sum=7) = {antall7/n:.4f}")
\`\`\`

**Teoretisk verdi:** $P(\\text{sum}=7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$

Med $n = 10000$ vil estimatet vanligvis ligge innenfor $\\pm 0{,}004$ av den sanne verdien.`,
    },
    {
      id: 's1-5-6-note-storetall',
      type: 'note',
      title: 'Store talls lov -- praktisk tolkning',
      content: `Store talls lov er grunnlaget for forsikringsmatematikk: selv om ett enkelt utfall er uforutsigbart, er gjennomsnittet over mange utfall svært forutsigbart.

Et forsikringsselskap kan ikke forutsi om akkurat deg får en skade, men kan forutsi svært nøyaktig hvor stor andel av 100 000 kunder som får skade. Dette gjør det mulig å fastsette riktige forsikringspremier.

**Konsekvens for simulering:** For å få to gyldige desimalers nøyaktighet trenger vi minst $n \\approx 10000$ repetisjoner.`,
    },
    {
      id: 's1-5-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-5-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En nettbutikk registrerer om en tilfeldig besøkende foretar et kjøp ($K$) eller ikke. Historisk sannsynlighet for kjøp er $p = 0{,}08$.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den teoretiske sannsynligheten for at minst 1 av 5 besøkende kjøper noe?',
            solution: '$P(X \\geq 1) = 1 - P(X=0) = 1 - (1-0{,}08)^5 = 1 - 0{,}92^5 \\approx 1 - 0{,}659 = 0{,}341$',
          },
          {
            label: 'b',
            task: 'Beskriv hvordan du ville simulere 1000 grupper på 5 besøkende i GeoGebra for å estimere sannsynligheten.',
            solution: 'Generer en $1000 \\times 5$ matrise med tilfeldige tall i $[1, 100]$. Tell rader der minst ett element $\\leq 8$. Andelen slike rader estimerer $P(X \\geq 1)$.',
          },
        ],
        hints: ['Husk komplementhendelsen $P(A) = 1 - P(A^c)$'],
      },
    },
    {
      id: 's1-5-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-5-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Store talls lov: En mynt kastes gjentatte ganger og vi registrerer kumulativ relativ hyppighet av "kron".',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva "kumulativ relativ hyppighet" betyr.',
            solution: 'Etter $n$ kast er kumulativ relativ hyppighet $f_n/n$, der $f_n$ er antall kron blant de $n$ kastene.',
          },
          {
            label: 'b',
            task: 'Hva forventer vi at den kumulative relative hyppigheten nærmer seg når $n$ blir stor?',
            solution: 'Den nærmer seg $p = 0{,}5$ (teoretisk sannsynlighet). Store talls lov garanterer denne konvergensen.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig for et kasino at alle spill spilles mange ganger?',
            solution: 'Med mange spill blir kasinoets faktiske inntekt svært nær forventet inntekt (husets fordel). Ved få spill kan tilfeldige svingninger gi tap. Mange spill gir forutsigbar profitt.',
          },
        ],
        hints: ['Tenk på hva som skjer med usikkerheten $1/\\sqrt{n}$ når $n$ vokser'],
      },
    },
    {
      id: 's1-5-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-5-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Monte Carlo-estimering av $\\pi$: Legg tilfeldige punkter i kvadratet $[0,1]\\times[0,1]$ og tell andelen som faller innenfor kvartsirkelen med radius 1.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor andelen punkter innenfor kvartsirkelen approksimerer $\\pi/4$.',
            solution: 'Areal av kvartsirkelen $= \\pi \\cdot 1^2/4 = \\pi/4$. Arealet av kvadratet $= 1$. Sannsynligheten for å lande innenfor kvartsirkelen (der $x^2 + y^2 \\leq 1$) er $\\pi/4$.',
          },
          {
            label: 'b',
            task: 'Skriv pseudokode for simuleringen med $n = 100000$ punkter.',
            solution: 'For $i$ fra 1 til $n$: generer $x, y \\in [0,1]$ tilfeldig. Hvis $x^2 + y^2 \\leq 1$, øk teller. Til slutt: $\\pi \\approx 4 \\cdot \\text{teller}/n$.',
          },
        ],
        hints: ['Punktet $(x, y)$ er innenfor kvartsirkelen når $x^2 + y^2 \\leq 1$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Hypergeometrisk fordeling
// ============================================================================

export const CHAPTER_S1_6_5: TextbookChapter = {
  id: 's1-6-5',
  courseId: 's1',
  chapterNumber: '6.5',
  title: 'Hypergeometrisk fordeling',
  description: 'Trekking uten tilbakelegging, hypergeometrisk formel, kvalitetskontroll og sammenligning med binomialfordeling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare trekking uten tilbakelegging',
    'anvende den hypergeometriske formelen',
    'bruke hypergeometrisk fordeling i kvalitetskontroll',
    'sammenligne hypergeometrisk og binomialfordeling',
    'vurdere når binomial er god approksimasjon',
  ],
  content: [
    {
      id: 's1-6-5-intro',
      type: 'text',
      content: `## Hypergeometrisk fordeling -- trekking uten tilbakelegging

I binomialfordelingen antar vi at sannsynligheten er konstant for hvert forsøk -- dette tilsvarer trekking **med** tilbakelegging. Men i mange praktiske situasjoner trekker vi **uten** tilbakelegging, og sannsynligheten endrer seg for hvert trekk.

**Typiske situasjoner:**
- Kvalitetskontroll: velg 10 produkter fra en batch på 100 for inspeksjon
- Meningsmålinger: velg 50 respondenter fra en gruppe på 500
- Lottotrekking: trekk 7 tall av 34 uten tilbakelegging

Disse situasjonene beskrives av den **hypergeometriske fordelingen**.`,
    },
    {
      id: 's1-6-5-def-hyper',
      type: 'definition',
      title: 'Hypergeometrisk fordeling',
      content: `Vi har en populasjon på $N$ objekter, der $M$ er av type "suksess" og $N - M$ av type "fiasko". Vi trekker $n$ objekter **uten tilbakelegging**. La $X$ være antall suksesser i utvalget.

Da er $X$ **hypergeometrisk fordelt** med parametre $N$, $M$, $n$, og:

$$P(X = k) = \\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$$

**Forventningsverdi og varians:**

$$E(X) = n \\cdot \\frac{M}{N}$$

$$\\text{Var}(X) = n \\cdot \\frac{M}{N} \\cdot \\frac{N-M}{N} \\cdot \\frac{N-n}{N-1}$$

Faktoren $\\frac{N-n}{N-1}$ kalles **endelig populasjonskorreksjon**.`,
    },
    {
      id: 's1-6-5-example-kvalitet',
      type: 'example',
      title: 'Eksempel: Kvalitetskontroll i industrien',
      problem: `En produksjonsbatch inneholder $N = 50$ enheter, der $M = 5$ er defekte. En kvalitetskontrollør trekker tilfeldig $n = 8$ enheter for inspeksjon.

a) Finn $P(X = 0)$ (ingen defekte i utvalget).
b) Finn $E(X)$.
c) Hva er sannsynligheten for at minst 2 defekte er i utvalget?`,
      solution: `**a) $P(X = 0)$:**

$$P(X=0) = \\frac{\\binom{5}{0}\\binom{45}{8}}{\\binom{50}{8}} = \\frac{1 \\cdot \\binom{45}{8}}{\\binom{50}{8}}$$

$\\binom{45}{8} = 215553195$, $\\binom{50}{8} = 536878650$

$$P(X=0) \\approx \\frac{215553195}{536878650} \\approx 0{,}401$$

**b) $E(X)$:**

$$E(X) = n \\cdot \\frac{M}{N} = 8 \\cdot \\frac{5}{50} = 0{,}80$$

**c) $P(X \\geq 2)$:**

$P(X=1) \\approx 0{,}395$. Dermed $P(X \\geq 2) = 1 - P(X=0) - P(X=1) \\approx 1 - 0{,}401 - 0{,}395 = 0{,}204$.`,
    },
    {
      id: 's1-6-5-note-approx',
      type: 'note',
      title: 'Når er binomial en god approksimasjon?',
      content: `Når $n$ er liten i forhold til $N$ (tommelfingerregel: $n < 0{,}05 \\cdot N$), er trekking uten tilbakelegging nesten det samme som med tilbakelegging.

I slike tilfeller kan vi approksimere den hypergeometriske fordelingen med en **binomialfordeling** med $p = M/N$:

$$X \\approx \\text{Bin}\\!\\left(n,\\, \\frac{M}{N}\\right)$$

**Eksempel:** Velger 10 fra en populasjon på 1000 -- binomial er god approksimasjon. Velger 10 fra en populasjon på 15 -- må bruke hypergeometrisk.`,
    },
    {
      id: 's1-6-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et lager inneholder 20 varer, der 4 er defekte. Du velger 3 varer uten tilbakelegging.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $P(X = 0)$ (ingen defekte).',
            solution: '$P(X=0) = \\frac{\\binom{4}{0}\\binom{16}{3}}{\\binom{20}{3}} = \\frac{1 \\cdot 560}{1140} = \\frac{560}{1140} \\approx 0{,}491$',
          },
          {
            label: 'b',
            task: 'Finn $P(X = 1)$ (eksakt 1 defekt).',
            solution: '$P(X=1) = \\frac{\\binom{4}{1}\\binom{16}{2}}{\\binom{20}{3}} = \\frac{4 \\cdot 120}{1140} = \\frac{480}{1140} \\approx 0{,}421$',
          },
          {
            label: 'c',
            task: 'Finn forventet antall defekte i utvalget.',
            solution: '$E(X) = n \\cdot M/N = 3 \\cdot 4/20 = 0{,}60$',
          },
        ],
        hints: ['$\\binom{16}{3} = \\frac{16 \\cdot 15 \\cdot 14}{6} = 560$', '$\\binom{20}{3} = \\frac{20 \\cdot 19 \\cdot 18}{6} = 1140$'],
      },
    },
    {
      id: 's1-6-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En revisor skal kontrollere 5 tilfeldige bilag fra et regnskap med 40 bilag totalt, der 3 inneholder feil.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sannsynligheten for at revisoren finner minst 1 bilag med feil?',
            solution: '$P(X \\geq 1) = 1 - P(X=0) = 1 - \\frac{\\binom{3}{0}\\binom{37}{5}}{\\binom{40}{5}} = 1 - \\frac{435897}{658008} \\approx 1 - 0{,}662 = 0{,}338$',
          },
          {
            label: 'b',
            task: 'Er $n = 5$ stor nok i forhold til $N = 40$ til at vi kan bruke binomialapproksimasjon?',
            solution: '$n/N = 5/40 = 0{,}125 = 12{,}5\\%$. Dette overstiger 5 %-grensen, så vi bør bruke den hypergeometriske fordelingen for presis beregning.',
          },
        ],
        hints: ['Bruk komplementhendelsen for "minst 1"', 'Sjekk om $n < 0{,}05N$'],
      },
    },
    {
      id: 's1-6-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenligning av hypergeometrisk og binomial: $N = 200$, $M = 20$, $n = 10$.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn $E(X)$ og $\\text{Var}(X)$ for den hypergeometriske fordelingen.',
            solution: '$E(X) = 10 \\cdot 20/200 = 1{,}0$. $\\text{Var}(X) = 10 \\cdot (20/200) \\cdot (180/200) \\cdot (190/199) \\approx 10 \\cdot 0{,}1 \\cdot 0{,}9 \\cdot 0{,}9548 \\approx 0{,}859$',
          },
          {
            label: 'b',
            task: 'Beregn $E(X)$ og $\\text{Var}(X)$ for $\\text{Bin}(10, 0{,}10)$.',
            solution: '$E(X) = np = 10 \\cdot 0{,}10 = 1{,}0$. $\\text{Var}(X) = np(1-p) = 10 \\cdot 0{,}10 \\cdot 0{,}90 = 0{,}90$',
          },
          {
            label: 'c',
            task: 'Forklar forskjellen i varians ved hjelp av endelig populasjonskorreksjon.',
            solution: 'Hypergeometrisk varians $= 0{,}90 \\times \\frac{190}{199} \\approx 0{,}859$. Faktoren $< 1$ fordi trekking uten tilbakelegging reduserer variabiliteten -- vi "garanterer" en viss spredning i utvalget.',
          },
        ],
        hints: ['$\\text{Var}_{\\text{hyp}} = \\text{Var}_{\\text{bin}} \\cdot \\frac{N-n}{N-1}$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.6: Normalfordelingsapproksimasjon
// ============================================================================

export const CHAPTER_S1_6_6: TextbookChapter = {
  id: 's1-6-6',
  courseId: 's1',
  chapterNumber: '6.6',
  title: 'Normalfordelingsapproksimasjon',
  description: 'Approksimer binomialfordelingen med normalfordelingen når np >= 5 og n(1-p) >= 5. Kontinuitetskorreksjon og z-verdier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere når normalapproksimasjon er gyldig',
    'approksimere binomial med normal',
    'anvende kontinuitetskorreksjon',
    'beregne z-verdier og bruke normaltabellen',
    'tolke resultater i praktiske situasjoner',
  ],
  content: [
    {
      id: 's1-6-6-intro',
      type: 'text',
      content: `## Normalfordelingsapproksimasjon

Når antall forsøk $n$ er stort, kan det være krevende å beregne binomialsannsynligheter eksakt. En svært nyttig tilnærming er å bruke **normalfordelingen** som approksimasjon.

Dette er mulig fordi binomialfordelingen nærmer seg normalfordelingens klokkeform når $n$ er stor -- et resultat av **sentralgrenseteoremet**.

**Praktisk nytte i økonomi og samfunnsfag:**
- Meningsmålinger: estimer prosentandeler med usikkerhet
- Kvalitetskontroll: vurdere om en batch er akseptabel
- Forsikring: modellere antall skader i en periode`,
    },
    {
      id: 's1-6-6-theorem-approx',
      type: 'theorem',
      title: 'Normalapproksimasjon av binomialfordelingen',
      content: `Hvis $X \\sim \\text{Bin}(n, p)$ og betingelsene

$$np \\geq 5 \\quad \\text{og} \\quad n(1-p) \\geq 5$$

er oppfylt, kan vi approksimere:

$$X \\approx N(\\mu, \\sigma^2) \\quad \\text{der} \\quad \\mu = np, \\quad \\sigma^2 = np(1-p)$$

**Standardisering (z-verdi):**

$$Z = \\frac{X - \\mu}{\\sigma} \\approx N(0,1)$$

**Kontinuitetskorreksjon** (forbedrer nøyaktigheten):

$$P(X \\leq k) \\approx P\\!\\left(Z \\leq \\frac{k + 0{,}5 - \\mu}{\\sigma}\\right)$$`,
    },
    {
      id: 's1-6-6-example-menig',
      type: 'example',
      title: 'Eksempel: Meningsmåling',
      problem: `I en meningsmåling svarer $n = 400$ tilfeldige velgere. Den sanne andelen som støtter parti A er $p = 0{,}35$.

a) Sjekk om normalapproksimasjon er gyldig.
b) Beregn $P(X \\leq 120)$.
c) Finn sannsynligheten for at andelen i utvalget overstiger 40 %.`,
      solution: `**a) Sjekk betingelsene:**

$np = 400 \\cdot 0{,}35 = 140 \\geq 5$ ✓

$n(1-p) = 400 \\cdot 0{,}65 = 260 \\geq 5$ ✓

Normalapproksimasjon er gyldig.

**b) $P(X \\leq 120)$:**

$\\mu = 140$, $\\sigma = \\sqrt{400 \\cdot 0{,}35 \\cdot 0{,}65} = \\sqrt{91} \\approx 9{,}54$

Med kontinuitetskorreksjon:

$$P(X \\leq 120) \\approx P\\!\\left(Z \\leq \\frac{120{,}5 - 140}{9{,}54}\\right) = P(Z \\leq -2{,}04) \\approx 0{,}0207$$

**c) $P(\\hat{p} > 0{,}40)$, dvs. $P(X > 160)$:**

$$P(X > 160) \\approx P\\!\\left(Z > \\frac{160{,}5 - 140}{9{,}54}\\right) = P(Z > 2{,}15) \\approx 0{,}0158$$`,
    },
    {
      id: 's1-6-6-tip-kont',
      type: 'tip',
      title: 'Når skal du bruke kontinuitetskorreksjon?',
      content: `Kontinuitetskorreksjon brukes når du approksimerer en **diskret** fordeling (binomial) med en **kontinuerlig** (normal).

**Tommelfingerregler:**
- $P(X \\leq k) \\Rightarrow$ bruk $k + 0{,}5$ (korreksjon oppover)
- $P(X \\geq k) \\Rightarrow$ bruk $k - 0{,}5$ (korreksjon nedover)
- $P(X = k) \\Rightarrow$ bruk intervallet $[k-0{,}5,\\, k+0{,}5]$

Korreksjonen er spesielt viktig når $n$ er moderat (50-200). For svært store $n$ utgjør den liten forskjell.`,
    },
    {
      id: 's1-6-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sjekk om normalapproksimasjon er gyldig for følgende binomialfordelinger:',
        subTasks: [
          {
            label: 'a',
            task: '$\\text{Bin}(100, 0{,}30)$',
            solution: '$np = 30 \\geq 5$ og $n(1-p) = 70 \\geq 5$. Gyldig.',
          },
          {
            label: 'b',
            task: '$\\text{Bin}(20, 0{,}05)$',
            solution: '$np = 1 < 5$. Ikke gyldig -- for liten $np$. Bruk eksakt binomialberegning.',
          },
          {
            label: 'c',
            task: '$\\text{Bin}(200, 0{,}98)$',
            solution: '$np = 196 \\geq 5$, men $n(1-p) = 4 < 5$. Ikke gyldig -- for få "fiaskoer".',
          },
        ],
        hints: ['Sjekk begge betingelser: $np \\geq 5$ OG $n(1-p) \\geq 5$'],
      },
    },
    {
      id: 's1-6-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En nettbutikk melder at 30 % av alle bestillinger returneres. I en periode mottas $n = 150$ bestillinger. La $X$ være antall returer.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $\\mu$ og $\\sigma$ for normalapproksimasjonen.',
            solution: '$\\mu = np = 150 \\cdot 0{,}30 = 45$. $\\sigma = \\sqrt{np(1-p)} = \\sqrt{150 \\cdot 0{,}30 \\cdot 0{,}70} = \\sqrt{31{,}5} \\approx 5{,}61$',
          },
          {
            label: 'b',
            task: 'Beregn $P(40 \\leq X \\leq 50)$ med normalapproksimasjon og kontinuitetskorreksjon.',
            solution: '$P(40 \\leq X \\leq 50) \\approx P\\left(\\frac{39{,}5-45}{5{,}61} \\leq Z \\leq \\frac{50{,}5-45}{5{,}61}\\right) = P(-0{,}98 \\leq Z \\leq 0{,}98) \\approx 0{,}6730$',
          },
        ],
        hints: ['For $P(a \\leq X \\leq b)$ bruk grenser $a - 0{,}5$ og $b + 0{,}5$'],
      },
    },
    {
      id: 's1-6-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et selskap vet at 8 % av leveransene er forsinket. I neste måned planlegges $n = 250$ leveranser.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn sannsynligheten for at mer enn 25 leveranser er forsinket.',
            solution: '$\\mu = 20$, $\\sigma = \\sqrt{250 \\cdot 0{,}08 \\cdot 0{,}92} = \\sqrt{18{,}4} \\approx 4{,}29$. $P(X > 25) \\approx P\\left(Z > \\frac{25{,}5-20}{4{,}29}\\right) = P(Z > 1{,}28) \\approx 0{,}1003$',
          },
          {
            label: 'b',
            task: 'Finn $k$ slik at $P(X \\leq k) \\approx 0{,}95$.',
            solution: '$P(Z \\leq 1{,}645) = 0{,}95 \\Rightarrow k + 0{,}5 = 20 + 1{,}645 \\cdot 4{,}29 \\approx 27{,}1 \\Rightarrow k = 27$. Med 95 % sikkerhet vil det være maks 27 forsinkede leveranser.',
          },
        ],
        hints: ['Bruk $z_{0{,}95} \\approx 1{,}645$ fra normaltabellen', 'Løs for $k$ fra $P(Z \\leq z) = 0{,}95$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.7: Statistisk prosjektarbeid
// ============================================================================

export const CHAPTER_S1_6_7: TextbookChapter = {
  id: 's1-6-7',
  courseId: 's1',
  chapterNumber: '6.7',
  title: 'Statistisk prosjektarbeid',
  description: 'Planlegging av statistiske undersokelser, datainnsamlingsmetoder, GDPR-hensyn, analyse og presentasjon av resultater.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre en statistisk undersøkelse',
    'velge egnede datainnsamlingsmetoder',
    'ivareta personvern og etiske hensyn',
    'analysere og tolke innsamlede data',
    'presentere resultater på en klar og riktig måte',
  ],
  content: [
    {
      id: 's1-6-7-intro',
      type: 'text',
      content: `## Statistisk prosjektarbeid

Statistikk er ikke bare formler -- det er en prosess for å svare på spørsmål om virkeligheten. Et godt statistisk prosjekt følger en systematisk arbeidsprosess fra problemformulering til presentasjon.

**Femtrinns-prosessen:**
1. **Formuler spørsmål** -- hva ønsker du å finne ut?
2. **Samle data** -- hvordan, fra hvem, i hvilken mengde?
3. **Bearbeid data** -- rens og organiser
4. **Analyser** -- bruk statistiske metoder
5. **Presenter** -- kommuniser funn tydelig og ærlig

I næringslivet brukes slike prosesser daglig: markedsundersøkelser, kundetilfredshetsmålinger, budsjettanalyser og evalueringer av tiltak.`,
    },
    {
      id: 's1-6-7-def-utvalg',
      type: 'definition',
      title: 'Utvalgsmetoder',
      content: `**Populasjon:** alle individer/objekter vi er interessert i.

**Utvalg:** den gruppen vi faktisk undersøker.

Vanlige utvalgsmetoder:

- **Tilfeldig utvalg (enkel trekning):** alle har lik sannsynlighet for å bli valgt. Gir representative resultater.

- **Stratifisert utvalg:** del populasjonen i grupper (strata), trekk tilfeldig fra hver gruppe. Brukes når ulike grupper må være representert.

- **Bekvemmelighetsutvalg:** velg de som er lettest å nå. Kan gi skjevheter, bruk med forsiktighet.

- **Klyngeutvalg:** del i klynger (f.eks. skoleklasser), velg tilfeldig noen klynger og undersøk alle i disse.`,
    },
    {
      id: 's1-6-7-note-gdpr',
      type: 'note',
      title: 'Personvern og GDPR',
      content: `Når du samler inn data om enkeltpersoner, gjelder **personvernforordningen (GDPR)**:

- Du må ha et **rettslig grunnlag** for innsamlingen (f.eks. samtykke)
- **Anonymiser** data så snart det er mulig
- Informer deltakerne om hva dataene brukes til
- Gi deltakerne rett til å trekke seg

For skoleprosjekter: unngå å samle sensitive opplysninger (helse, økonomi, politiske meninger). Bruk anonyme spørreskjemaer der det er mulig.

**Praktisk tips:** Bruk Google Forms med anonym innstilling, eller Nettskjema (UiO) som oppfyller norske personvernkrav.`,
    },
    {
      id: 's1-6-7-example-marked',
      type: 'example',
      title: 'Eksempel: Markedsundersøkelse for skolekantinen',
      problem: `Elevrådet vil undersøke hva elever ønsker av kantinen. Beskriv et statistisk prosjekt for dette.`,
      solution: `**1. Problemformulering:**
"Hvilke matprodukter ønsker elever ved skolen at kantinen tilbyr, og hva er elevenes betalingsvilje?"

**2. Datainnsamling:**
- Stratifisert utvalg: trekk proporsjonalt fra VG1, VG2, VG3
- Målstørrelse: minst 100 respondenter
- Metode: anonymt digitalt spørreskjema (Nettskjema)

**3. Analyse:**
- Beregn gjennomsnitt og standardavvik for rangering av hvert produkt
- Lag stolpediagram og frekvenstabeller
- Sammenlign mellom trinn

**4. Presentasjon:**
- Oppsummer med visuell infografikk
- Angi usikkerhet (feilmarginer)
- Gi konkrete anbefalinger basert på data`,
    },
    {
      id: 's1-6-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En elev ønsker å undersøke om gutter og jenter bruker ulikt antall timer per uke på sosiale medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler en presis problemstilling for dette prosjektet.',
            solution: 'Eksempel: "Er det en statistisk signifikant forskjell i gjennomsnittlig ukentlig tidsbruk på sosiale medier mellom gutter og jenter ved skolen?" Presist, testbart og avgrenset.',
          },
          {
            label: 'b',
            task: 'Beskriv en egnet utvalgsmetode og begrunnelse.',
            solution: 'Stratifisert tilfeldig utvalg med kjønn som strata. Dette sikrer at begge kjønn er representert. Trekk f.eks. 30 fra hvert stratum for totalt 60 respondenter.',
          },
          {
            label: 'c',
            task: 'List opp to GDPR-hensyn du må ivareta.',
            solution: '1) Anonymiser svarene -- ikke samle inn navn eller annen identifiserende informasjon. 2) Informer deltakerne om formål og gi dem mulighet til å trekke seg.',
          },
        ],
        hints: ['En god problemstilling er spesifikk, målbar og avgrenset'],
      },
    },
    {
      id: 's1-6-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kritisk lesing av statistikk: En nettavis melder at "80 % av nordmenn er fornøyde med helsetilbudet -- basert på 50 svar fra lesernes kommentarfelt".',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser minst to metodiske svakheter med denne undersøkelsen.',
            solution: '1) Bekvemmelighetsutvalg (lesere av en bestemt avis) -- ikke representativt for alle nordmenn. 2) Selvseleksjonsskjevhet: de som kommenterer er ikke tilfeldige. 3) Utvalget ($n=50$) er svært lite.',
          },
          {
            label: 'b',
            task: 'Beregn feilmarginen for et tilfeldig utvalg på $n = 50$ med $\\hat{p} = 0{,}80$.',
            solution: '$\\text{Feilmargin} \\approx 1{,}96 \\cdot \\sqrt{\\hat{p}(1-\\hat{p})/n} = 1{,}96 \\cdot \\sqrt{0{,}80 \\cdot 0{,}20/50} \\approx \\pm 11{,}1\\%$. Selv med tilfeldig utvalg er usikkerheten enorm.',
          },
        ],
        hints: ['Feilmargin for proporsjoner: $1{,}96 \\cdot \\sqrt{\\hat{p}(1-\\hat{p})/n}$'],
      },
    },
    {
      id: 's1-6-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektdesign: Design en fullstendig statistisk undersøkelse for å svare på: "Har innføring av selvbetjeningskasser i dagligvarebutikker påvirket kundenes tilfredshet?"',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv populasjon, utvalg og innsamlingsmetode.',
            solution: 'Populasjon: alle kunder i de aktuelle butikkene. Utvalg: stratifisert etter alder (18-30, 31-50, 51+) og butikk. Minst 200 respondenter totalt. Metode: QR-kode på kvittering leder til anonymt nettskjema rett etter handel.',
          },
          {
            label: 'b',
            task: 'Hvilke variabler bør måles, og hvilken måleskala bør brukes?',
            solution: 'Tilfredshet med handlingen (Likert 1-5), type kasse brukt (nominalt), ventetid opplevd (ordinalt), alder (intervall), handlingsfrekvens (ordinalt). Hoved-utfallsvariabel: Likert-skalatilfredshet.',
          },
          {
            label: 'c',
            task: 'Forklar hvordan du ville presentere resultatene for butikkledelsen.',
            solution: 'Stolpediagrammer med gjennomsnittlig tilfredshet fordelt på kassetyp og aldersgruppe. Boksplott for spredning. Konklusjonstabel med signifikant forskjell (ja/nei), effektstørrelse og anbefaling.',
          },
        ],
        hints: ['Tenk på hva som er relevant for butikkens beslutning'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Lineær optimering utvidet
// ============================================================================

export const CHAPTER_S1_8_3: TextbookChapter = {
  id: 's1-8-3',
  courseId: 's1',
  chapterNumber: '8.3',
  title: 'Lineær optimering utvidet',
  description: 'Sensitivitetsanalyse, heltallsbetingelser, skyggeprise og praktiske LP-problemer med flere variabler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjennomføre sensitivitetsanalyse av LP-problemer',
    'håndtere heltallsbetingelser i optimeringsproblemer',
    'tolke skyggepris i produksjonssammenheng',
    'løse LP-problemer med to variabler grafisk',
    'tolke og kommunisere optimeringsløsninger praktisk',
  ],
  content: [
    {
      id: 's1-8-3-intro',
      type: 'text',
      content: `## Lineær optimering -- videre analyse

I grunnleggende lineær programmering (LP) finner vi det optimale hjørnepunktet i det feasible området. Men i praksis er det like viktig å forstå **hvor robust** løsningen er: Hvor mye kan koeffisientene endre seg før en annen løsning blir optimal? Hva er kostnaden ved å ha begrenset kapasitet?

**Utvidede temaer:**
- **Sensitivitetsanalyse** -- stabilitetsområde for koeffisienter
- **Skyggepris** -- verdien av økt kapasitet
- **Heltallsprogrammering** -- når variablene må være hele tall

Disse verktøyene brukes i logistikk, produksjonsplanlegging, ressursallokering og finans.`,
    },
    {
      id: 's1-8-3-def-skyggepris',
      type: 'definition',
      title: 'Skyggepris (Shadow price)',
      content: `**Skyggeprisen** til en bibetingelse er den marginale forbedringen i målfunksjonsverdien dersom høyresiden av betingelsen øker med 1 enhet.

For et maksimeringsproblem: hvis bibetingelsen er $a_1 x_1 + a_2 x_2 \\leq b$ og skyggeprisen er $\\lambda$, da gir en økning av kapasiteten $b$ til $b+1$ en forbedring av den optimale $z$-verdien med $\\lambda$.

**Tolkning:** Skyggeprisen forteller deg hva det er verdt å betale for ekstra kapasitet. Dersom kapasitet kan kjøpes til en kostnad lavere enn skyggeprisen, er det lønnsomt å investere.

**Ikke-bindende betingelser** har skyggepris lik 0 -- det er ikke noe å vinne på å slakke dem ytterligere.`,
    },
    {
      id: 's1-8-3-example-produksjon',
      type: 'example',
      title: 'Eksempel: Produksjonsplanlegging med sensitivitetsanalyse',
      problem: `En møbelfabrikk produserer stoler ($x_1$) og bord ($x_2$).
- Fortjeneste: 400 kr per stol, 700 kr per bord
- Maskinkapasitet: $2x_1 + 3x_2 \\leq 120$ timer
- Trekapasitet: $x_1 + 2x_2 \\leq 60$ tonn
- $x_1, x_2 \\geq 0$

a) Finn den optimale produksjonsplanen.
b) Beregn skyggeprisen for maskinkapasiteten.
c) Er det lønnsomt å kjøpe 10 ekstra maskintimer til 150 kr/time?`,
      solution: `**a) Hjørnepunkter:**

$(0, 0)$: $z = 0$
$(60, 0)$: $z = 24000$
$(0, 30)$: Sjekk trekapasitet: $2(30)=60$ ✓. $z = 21000$
Skjæringspunkt: $2x_1+3x_2=120$ og $x_1+2x_2=60$. Fra andrе: $x_1=60-2x_2$. Setter inn: $120-4x_2+3x_2=120 \\Rightarrow x_2=0, x_1=60$.

**Optimal løsning:** $x_1 = 60$, $x_2 = 0$, $z = 24000$ kr.

**b) Skyggepris for maskinkapasitet:**

Øker til 121: $2x_1 = 121 \\Rightarrow x_1 = 60{,}5$, $z = 400 \\cdot 60{,}5 = 24200$.

Skyggepris $= 24200 - 24000 = 200$ kr per maskinttime.

**c) Lønnsomt?**

200 kr/time (skyggepris) > 150 kr/time (kostnad). Ja, det er lønnsomt.`,
    },
    {
      id: 's1-8-3-note-heltall',
      type: 'note',
      title: 'Heltallsbetingelser i praksis',
      content: `Mange praktiske problemer krever **hele tall**: du kan ikke produsere 3,7 biler, ansette 2,4 arbeidere, eller sende 1,6 lastebiler.

**Heltallsprogrammering (IP)** legger til betingelsen $x_1, x_2 \\in \\mathbb{Z}_{\\geq 0}$.

**Enkel metode for to variabler:**
1. Løs det kontinuerlige LP-problemet
2. Rund av til nærmeste heltallspunkt i det feasible området
3. Sjekk om avrundede verdier er feasible
4. Evaluer nabopunkter om nødvendig

**Obs:** Det avrundede punktet er ikke alltid optimalt! For store problemer kreves spesielle IP-algoritmer.`,
    },
    {
      id: 's1-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-8-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En baker produserer rundstykker ($x$) og brød ($y$) med fortjeneste 3 kr og 8 kr. Betingelser: $x + 2y \\leq 40$ (ovntid), $x + y \\leq 30$ (arbeidstid), $x, y \\geq 0$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle hjørnepunkter i det feasible området.',
            solution: '$(0,0)$, $(30,0)$, $(20,10)$ (skjæringspunkt), $(0,20)$',
          },
          {
            label: 'b',
            task: 'Finn det optimale punktet og maksimal fortjeneste.',
            solution: '$z(0,0)=0$, $z(30,0)=90$, $z(20,10)=140$, $z(0,20)=160$. Optimal: $(0,20)$ med $z=160$ kr.',
          },
          {
            label: 'c',
            task: 'Beregn skyggeprisen for ovnsbetingelsen.',
            solution: 'Øker til $x+2y \\leq 41$: nytt optimalt $y=20{,}5$, $z=164$. Skyggepris $= 164-160 = 4$ kr per ovnstime.',
          },
        ],
        hints: ['Finn skjæringspunktet mellom de to betingelseslinjene ved å løse likningssystemet'],
      },
    },
    {
      id: 's1-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-8-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et transportselskap fordeler transporter mellom to ruter. Rute 1: fortjeneste 500 kr, krever 2 sjåførtimer og 3 tonn brensel. Rute 2: fortjeneste 800 kr, krever 4 sjåførtimer og 2 tonn brensel. Tilgjengelig: 40 sjåførtimer og 30 tonn brensel.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler LP-problemet matematisk.',
            solution: 'Maks $z = 500x_1 + 800x_2$ s.t. $2x_1 + 4x_2 \\leq 40$, $3x_1 + 2x_2 \\leq 30$, $x_1, x_2 \\geq 0$.',
          },
          {
            label: 'b',
            task: 'Finn den optimale løsningen ved hjørnepunktanalyse.',
            solution: 'Hjørnepunkter: $(0,0)$, $(10,0)$, $(0,10)$, skjæringspunkt $(5, 7{,}5)$. $z(5,7{,}5)=2500+6000=8500$ kr. Optimal.',
          },
          {
            label: 'c',
            task: 'Heltallsbetingelse: Finn beste feasible heltallspunkt.',
            solution: 'Prøver $(5,7)$: $10+28=38 \\leq 40$ ✓, $15+14=29 \\leq 30$ ✓. $z=2500+5600=8100$ kr. Prøver $(5,8)$: $10+32=42 > 40$ ✗. Optimal heltallsløsning: $(5,7)$.',
          },
        ],
        hints: ['Løs systemet av betingelseslinjer for å finne skjæringspunktet'],
      },
    },
    {
      id: 's1-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-8-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sensitivitetsanalyse: LP-problemet Maks $z = cx_1 + 4x_2$ s.t. $x_1 + x_2 \\leq 6$, $2x_1 + x_2 \\leq 10$, $x_1, x_2 \\geq 0$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den optimale løsningen når $c = 2$.',
            solution: 'Hjørnepunkter: $(0,0)$, $(5,0)$, $(4,2)$, $(0,6)$. $z(4,2)=8+8=16$, $z(0,6)=24$. Optimal: $(0,6)$, $z=24$.',
          },
          {
            label: 'b',
            task: 'For hvilke verdier av $c$ er $(4, 2)$ optimalt?',
            solution: 'Vs $(0,6)$: $4c+8 \\geq 24 \\Rightarrow c \\geq 4$. Vs $(5,0)$: $4c+8 \\geq 5c \\Rightarrow c \\leq 8$. $(4,2)$ er optimalt når $4 \\leq c \\leq 8$.',
          },
          {
            label: 'c',
            task: 'Forklar hva sensitivitetsanalyse betyr for beslutningstakere.',
            solution: 'Den viser hvor robust løsningen er mot endringer i fortjenestemargin. Dersom $c$ holdes mellom 4 og 8, endres ikke den optimale produksjonsplanen -- nyttig når priser er usikre.',
          },
        ],
        hints: ['Sammenlign målfunksjonsverdien i ulike hjørnepunkter for ulike verdier av $c$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Modellering med reelle datasett
// ============================================================================

export const CHAPTER_S1_8_4: TextbookChapter = {
  id: 's1-8-4',
  courseId: 's1',
  chapterNumber: '8.4',
  title: 'Modellering med reelle datasett',
  description: 'Velg riktig modelltype (lineær, eksponensiell, potens, logaritmisk), vurder modellkvalitet med R^2 og residualer, og valider mot data.',
  estimatedMinutes: 50,
  competenceGoals: [
    'velge passende modelltype for et datasett',
    'tolke determinasjonskoeffisienten R²',
    'analysere residualer for å vurdere modellkvalitet',
    'validere modeller mot nye data',
    'kritisk vurdere modellers begrensninger',
  ],
  content: [
    {
      id: 's1-8-4-intro',
      type: 'text',
      content: `## Modellering med reelle datasett

Matematiske modeller er forenklinger av virkeligheten -- de fanger opp det viktigste og lar oss gjøre beregninger og prediksjoner. Utfordringen er å velge riktig modelltype og vurdere hvor godt modellen passer.

**Fire vanlige modelltyper i S1:**

| Modell | Formel | Typisk bruk |
|---|---|---|
| Lineær | $y = ax + b$ | Konstant vekst/reduksjon |
| Eksponensiel | $y = a \\cdot b^x$ | Prosentvis vekst (renter, befolkning) |
| Potens | $y = a \\cdot x^n$ | Skalaforhold (areal, volum) |
| Logaritmisk | $y = a \\cdot \\ln x + b$ | Avtakende vekst (læring, metning) |

Valget av modelltype bør være drevet av faglig forståelse -- ikke bare matematisk tilpasning.`,
    },
    {
      id: 's1-8-4-def-r2',
      type: 'definition',
      title: 'Determinasjonskoeffisienten R²',
      content: `**$R^2$** (R-kvadrert) måler hvor mye av variasjonen i dataene som forklares av modellen:

$$R^2 = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}}$$

der $\\text{SS}_{\\text{res}} = \\sum (y_i - \\hat{y}_i)^2$ (residualkvadrater) og $\\text{SS}_{\\text{tot}} = \\sum (y_i - \\bar{y})^2$ (total variasjon).

**Tolkning:**
- $R^2 = 1$: perfekt tilpasning -- alle punkter på kurven
- $R^2 = 0{,}95$: modellen forklarer 95 % av variasjonen
- $R^2 < 0{,}70$: modellen er svak -- vurder annen modelltype

**Advarsel:** Høy $R^2$ betyr ikke at modellen er riktig. En tredjegradsfunksjon kan gi $R^2 = 0{,}99$ men være meningsløs for prediksjon utenfor dataområdet.`,
    },
    {
      id: 's1-8-4-example-befolkning',
      type: 'example',
      title: 'Eksempel: Modellvalg for befolkningsvekst',
      problem: `Følgende data viser befolkning i en norsk kommune (i tusen):

| År | 2000 | 2005 | 2010 | 2015 | 2020 |
|---|---|---|---|---|---|
| Folketal | 12,0 | 13,2 | 14,7 | 16,3 | 18,1 |

Vurder om lineær eller eksponensiel modell passer best.`,
      solution: `**Lineær modell:**

Regresjon gir $y = 0{,}606t + 11{,}94$ (der $t$ er år etter 2000).

$R^2_{\\text{lin}} \\approx 0{,}9965$

**Eksponensiel modell:**

Regresjon: $y = 12{,}05 \\cdot 1{,}0199^t$, dvs. ca. 2 % årlig vekst.

$R^2_{\\text{exp}} \\approx 0{,}9992$

**Vurdering:**
- Begge modeller har høy $R^2$
- Eksponensiel er faglig mer forsvarlig (prosentvis vekst er typisk for befolkning)
- For prediksjon 20+ år frem er eksponensiel anbefalt`,
    },
    {
      id: 's1-8-4-tip-residualer',
      type: 'tip',
      title: 'Residualanalyse -- sjekk modellantakelsene',
      content: `**Residualer** er differansen mellom observert og modellert verdi: $e_i = y_i - \\hat{y}_i$.

En god modell har residualer som:
- Er tilfeldig fordelt rundt null (ikke et systematisk mønster)
- Har omtrent konstant spredning
- Ikke viser trender eller bølger

**Vanlige problemer:**
- U-form i residualplot $\\Rightarrow$ lineær modell passer ikke, prøv kvadratisk
- Voksende spredning $\\Rightarrow$ eksponensiel modell kan være bedre
- Et enkelt ekstremverdipunkt $\\Rightarrow$ sjekk for målfeil i dataene

Alltid plott residualene -- ikke stol blindt på $R^2$ alene!`,
    },
    {
      id: 's1-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-8-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En bedrift har hatt følgende årlig omsetning (mill. kr): 2018: 5,2; 2019: 5,8; 2020: 6,1; 2021: 6,9; 2022: 7,7.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn årlig prosentvis vekst for hvert intervall.',
            solution: '2018-19: $5{,}8/5{,}2 - 1 = 11{,}5\\%$. 2019-20: $5{,}3\\%$. 2020-21: $13{,}1\\%$. 2021-22: $11{,}6\\%$. Gjennomsnitt $\\approx 10{,}4\\%$ årlig.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor en eksponensiel modell kan være bedre enn en lineær for dette datasettet.',
            solution: 'Veksten er omtrentlig prosentvis konstant (ca. 10 % årlig), ikke absolutt konstant. Eksponensiel modell $y = a \\cdot b^t$ fanger prosentvis vekst, mens lineær bare fanger absolutt vekst.',
          },
        ],
        hints: ['Prosentvis vekst $= (y_t/y_{t-1} - 1) \\times 100\\%$'],
      },
    },
    {
      id: 's1-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-8-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Følgende data viser prisen $y$ (kr) for et produkt som funksjon av mengde $x$: $(1, 200)$, $(2, 141)$, $(4, 100)$, $(8, 71)$, $(16, 50)$.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hvilken modelltype som ser ut til å passe basert på datamønsteret.',
            solution: 'Dataene avtar raskt for små $x$ og langsommere for store $x$. Mønsteret ligner en potensmodell $y = a \\cdot x^b$ med $b < 0$ (negativ potens).',
          },
          {
            label: 'b',
            task: 'Sjekk om $y = 200 \\cdot x^{-1/2}$ passer ved å beregne modellverdiene og sammenligne.',
            solution: '$y(1)=200$, $y(2)=141{,}4$, $y(4)=100$, $y(8)=70{,}7$, $y(16)=50$. Alle treffer svært nær de observerte verdiene. Modellen $y = 200x^{-0{,}5}$ er en svært god tilpasning ($R^2 \\approx 1$).',
          },
        ],
        hints: ['$x^{-1/2} = 1/\\sqrt{x}$. Beregn $\\hat{y}$ for hvert punkt og sammenlign med observert.'],
      },
    },
    {
      id: 's1-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-8-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En lineær modell $\\hat{y} = 3x + 5$ er tilpasset 6 datapunkter: $(1, 9)$, $(2, 11)$, $(3, 14)$, $(4, 16)$, $(5, 21)$, $(6, 24)$.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn residualene $e_i = y_i - \\hat{y}_i$ for alle seks punkter.',
            solution: '$e_1 = 9-8=1$, $e_2 = 11-11=0$, $e_3 = 14-14=0$, $e_4 = 16-17=-1$, $e_5 = 21-20=1$, $e_6 = 24-23=1$',
          },
          {
            label: 'b',
            task: 'Beregn $R^2$ gitt at $\\bar{y} = 15{,}83$ og $\\text{SS}_{\\text{tot}} \\approx 166{,}8$.',
            solution: '$\\text{SS}_{\\text{res}} = 1^2+0^2+0^2+(-1)^2+1^2+1^2 = 4$. $R^2 = 1 - 4/166{,}8 \\approx 0{,}976$',
          },
          {
            label: 'c',
            task: 'Vurder modellen basert på $R^2$ og residualplot.',
            solution: '$R^2 = 0{,}976$ er høy -- modellen forklarer 97,6 % av variasjonen. Residualene er små og viser ikke systematisk mønster. Lineær modell passer godt for disse dataene.',
          },
        ],
        hints: ['$R^2 = 1 - \\text{SS}_{\\text{res}}/\\text{SS}_{\\text{tot}}$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Digitale verktøy i modellering
// ============================================================================

export const CHAPTER_S1_8_5: TextbookChapter = {
  id: 's1-8-5',
  courseId: 's1',
  chapterNumber: '8.5',
  title: 'Digitale verktøy i modellering',
  description: 'Bruk GeoGebra til regresjon, Excel til budsjettmodellering, og Python til dataanalyse. Sammenlign verktøyenes styrker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjennomføre regresjonsanalyse i GeoGebra',
    'bygge budsjett- og prognosemodeller i Excel',
    'bruke Python til grunnleggende dataanalyse',
    'velge riktig verktøy for ulike modelleringsoppgaver',
    'eksportere og presentere resultater fra digitale verktøy',
  ],
  content: [
    {
      id: 's1-8-5-intro',
      type: 'text',
      content: `## Digitale verktøy i modellering

I moderne matematikk og statistikk er digitale verktøy uunnværlige. De lar oss jobbe med store datasett, utføre komplekse beregninger og visualisere resultater på sekunder. For S1 er tre verktøy spesielt viktige:

**GeoGebra** -- interaktiv matematikk og statistikk
**Excel / regneark** -- budsjetter, tabeller, enkle analyser
**Python** -- programmering, automatisering, avansert analyse

Hvert verktøy har sine styrker. Å vite *når* man bruker *hvilke* verktøy er en viktig kompetanse -- både i matematikk og i arbeidslivet.`,
    },
    {
      id: 's1-8-5-example-geogebra',
      type: 'example',
      title: 'Regresjonsanalyse i GeoGebra',
      problem: `Bruk GeoGebra til å finne den beste regresjonsmodellen for datasettet: $(1,4)$, $(2,7)$, $(3,9)$, $(4,10)$, $(5,12)$, $(6,13)$.`,
      solution: `**Steg-for-steg i GeoGebra:**

1. Åpne GeoGebra og velg "Statistikk" eller skriv punktene i CAS
2. Skriv inn punktene: \`Liste1 = {(1,4),(2,7),(3,9),(4,10),(5,12),(6,13)}\`
3. Prøv ulike modeller:

**Lineær:** \`FitLine(Liste1)\` $\\Rightarrow y = 1{,}886x + 2{,}333$, $R^2 = 0{,}979$

**Logaritmisk:** \`FitLog(Liste1)\` $\\Rightarrow y = 4{,}326\\ln(x) + 3{,}835$, $R^2 = 0{,}993$

**Potensfunksjon:** \`FitPow(Liste1)\` $\\Rightarrow y = 3{,}827x^{0{,}586}$, $R^2 = 0{,}991$

**Konklusjon:** Logaritmisk modell gir høyest $R^2$ og passer mønsteret (avtakende vekst). Velg $y = 4{,}326 \\ln(x) + 3{,}835$.`,
    },
    {
      id: 's1-8-5-example-excel',
      type: 'example',
      title: 'Budsjettmodellering i Excel',
      problem: `Sett opp et enkelt driftsbudsjett for en kafé for 6 måneder, med prognoser basert på vekstrate.`,
      solution: `**Excel-oppsett:**

Celle A1: "Måned", B1: "Januar", C1: "Februar" ... G1: "Juni"

Celle A2: "Inntekter (kr)"
Celle B2: 80000 (startverdi januar)
Celle B3: Vekstrate i celle $I$1 = 0,05 (5 %)

**Formel i C2** (Februar): \`=B2*(1+$I$1)\`
Kopier til D2:G2 (mars-juni automatisk)

**Variable kostnader** (40 % av inntekt):
Celle B4: \`=B2*0,4\`

**Faste kostnader:**
Celle B5: \`=25000\` (fast alle måneder)

**Resultat (driftsresultat):**
Celle B6: \`=B2-B4-B5\`

**Fordelen:** Endre vekstraten i $I$1, og alle prognoser oppdateres automatisk -- "hva-hvis"-analyse på sekunder.`,
    },
    {
      id: 's1-8-5-example-python',
      type: 'example',
      title: 'Grunnleggende dataanalyse i Python',
      problem: `Bruk Python til å beregne deskriptiv statistikk og en lineær regresjonsmodell for månedlig salg.`,
      solution: `\`\`\`python
import statistics

# Månedlig salg (enheter)
salg = [45, 52, 48, 61, 58, 67, 71, 65, 73, 80, 77, 85]

# Deskriptiv statistikk
print(f"Gjennomsnitt:  {statistics.mean(salg):.1f}")
print(f"Median:        {statistics.median(salg):.1f}")
print(f"Standardavvik: {statistics.stdev(salg):.1f}")

# Lineær regresjon (minste kvadraters metode)
n = len(salg)
x = list(range(1, n + 1))
x_mean = statistics.mean(x)
y_mean = statistics.mean(salg)

teller = sum((x[i] - x_mean) * (salg[i] - y_mean) for i in range(n))
nevner = sum((x[i] - x_mean) ** 2 for i in range(n))
a = teller / nevner
b = y_mean - a * x_mean

print(f"Modell: y = {a:.2f}x + {b:.2f}")
\`\`\`

**Output:**
\`\`\`
Gjennomsnitt:  65.2
Median:        64.0
Standardavvik: 13.4
Modell: y = 3.55x + 42.27
\`\`\``,
    },
    {
      id: 's1-8-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-8-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sammenligning av verktøy: Knytt følgende oppgaver til riktig verktøy (GeoGebra, Excel, Python):',
        subTasks: [
          {
            label: 'a',
            task: 'Visualisere et spredningsdiagram og finne regresjonsmodell interaktivt.',
            solution: 'GeoGebra -- designet for interaktiv matematisk visualisering og har innebygde regresjonsverktøy.',
          },
          {
            label: 'b',
            task: 'Lage et budsjett med automatiske beregninger og "hva-hvis"-analyse.',
            solution: 'Excel -- regneark er ideelt for tabeller, formler og sensitivitetsanalyse.',
          },
          {
            label: 'c',
            task: 'Analysere et datasett med 10 000 rader og beregne korrelasjonsmatriser.',
            solution: 'Python -- håndterer store datasett effektivt og har kraftige biblioteker (pandas, numpy, scipy).',
          },
        ],
        hints: ['Tenk på hva hvert verktøy er designet for og hva det er best på'],
      },
    },
    {
      id: 's1-8-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-8-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'GeoGebra-kommandoer: Skriv GeoGebra-kommandoer for følgende operasjoner:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn den lineære regresjonslinjen for punktene $(1,3)$, $(2,5)$, $(3,8)$, $(4,9)$.',
            solution: '\`FitLine({(1,3),(2,5),(3,8),(4,9)})\` -- returnerer $y = ax + b$ med minste kvadraters tilpasning.',
          },
          {
            label: 'b',
            task: 'Beregn korrelasjonskoeffisienten for det samme datasettet.',
            solution: '\`r({(1,3),(2,5),(3,8),(4,9)})\` eller bruk \`CorrelationCoefficient\`. Høyere $|r|$ betyr sterkere lineær samvariasjon.',
          },
          {
            label: 'c',
            task: 'Plott eksponensiel regresjon for datasettet.',
            solution: '\`FitExp({(1,3),(2,5),(3,8),(4,9)})\` -- tilpasser en modell av formen $y = a \\cdot e^{bx}$.',
          },
        ],
        hints: ['GeoGebra-kommandoer skrives i inntastingsfeltet. Sjekk GeoGebra-hjelp for presis syntaks.'],
      },
    },
    {
      id: 's1-8-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-8-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Integreringsprosjekt: En bedrift har årlig omsetning (mill. kr) fra 2015 til 2024: 10,2; 11,0; 12,1; 13,4; 14,0; 15,8; 17,2; 18,5; 20,1; 22,0.',
        subTasks: [
          {
            label: 'a',
            task: 'Bruk GeoGebra til å finne best passende modell. Oppgi modellformelen og $R^2$.',
            solution: 'Eksponensiel modell passer best. GeoGebra FitExp gir typisk $y \\approx 10{,}2 \\cdot 1{,}089^t$ (ca. 8,9 % årlig vekst), $R^2 \\approx 0{,}999$.',
          },
          {
            label: 'b',
            task: 'Bruk modellen til å predikere omsetning i 2027 ($t = 12$). Diskuter usikkerheten.',
            solution: '$y(12) = 10{,}2 \\cdot 1{,}089^{12} \\approx 10{,}2 \\cdot 2{,}80 \\approx 28{,}6$ mill. kr. Usikkerhet: modellen ekstrapolerer 3 år frem. Eksterne sjokk fanges ikke opp. Rimelig intervall: 25-32 mill. kr.',
          },
          {
            label: 'c',
            task: 'Hvordan ville du bruke Excel til å vise ledelsen hva som skjer dersom vekstraten endres til 6 % eller 12 %?',
            solution: 'Lag en Excel-tabell med vekstrate som parameter i celle $I$1. Lag tre kolonner med 6%, 8,9% og 12% side om side. Legg til linjediagram for visuell sammenligning. Klassisk "hva-hvis"-analyse.',
          },
        ],
        hints: ['Bruk GeoGebra FitExp for eksponensiel modell', 'I Excel: bruk absolutt cellereferanse $\\$I\\$1$ for vekstraten'],
      },
    },
  ],
  exercises: [],
};

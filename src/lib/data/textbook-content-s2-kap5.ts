/**
 * Tekstbok kapitler for S2 - Kapittel 5: Statistisk inferens
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1 - Estimering
// ============================================================================

export const CHAPTER_S2_5_1: TextbookChapter = {
  id: 's2-5-1',
  courseId: 's2',
  chapterNumber: '5.1',
  title: 'Estimering',
  description: 'Lær om punktestimat, konfidensintervall og feilmargin for forventningsverdi og andel.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå forskjellen mellom punktestimat og intervallestimering',
    'beregne og tolke konfidensintervall for forventningsverdi og andel',
    'vurdere feilmargin og nødvendig utvalgsstørrelse'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-5-1-intro',
      type: 'text',
      content: `## Fra utvalg til populasjon

I statistikk ønsker vi ofte å si noe om en hel **populasjon** basert på et **utvalg**. For eksempel kan vi måle høyden til 200 tilfeldig valgte nordmenn for å si noe om gjennomsnittshøyden i hele befolkningen.

**Estimering** handler om å bruke utvalgsobservasjoner til å anslå ukjente populasjonsparametre. Vi skiller mellom:
- **Punktestimat**: Ett enkelt tall som anslår parameteren
- **Intervallestimering**: Et intervall som med stor sannsynlighet inneholder den sanne parameteren`
    },

    // ========== PUNKTESTIMAT ==========
    {
      id: 's2-5-1-def-punktestimat',
      type: 'definition',
      title: 'Punktestimat',
      content: `Et **punktestimat** er en enkelt tallverdi som brukes som beste gjetning for en populasjonsparameter.

De vanligste punktestimatene:
- Utvalgsgjennomsnittet $\\bar{x}$ er et punktestimat for populasjonsgjennomsnittet $\\mu$
- Utvalgsandelen $\\hat{p}$ er et punktestimat for populasjonsandelen $p$
- Utvalgsstandardavviket $s$ er et punktestimat for populasjonsstandardavviket $\\sigma$

Vi kaller $\\bar{x}$ en **estimator** for $\\mu$, og den konkrete verdien vi beregner er **estimatet**.`
    },
    {
      id: 's2-5-1-example-1',
      type: 'example',
      title: 'Punktestimat for gjennomsnitt',
      problem: `I en undersøkelse målte man antall timer søvn per natt for 50 elever. Utvalget ga $\\bar{x} = 7{,}2$ timer og $s = 1{,}1$ timer. Hva er punktestimatet for den gjennomsnittlige søvnlengden i populasjonen?`,
      solution: `Punktestimatet for populasjonsgjennomsnittet $\\mu$ er utvalgsgjennomsnittet:

$$\\hat{\\mu} = \\bar{x} = 7{,}2 \\text{ timer}$$

Vår beste gjetning er at elever i gjennomsnitt sover 7,2 timer per natt. Men dette ene tallet gir ingen informasjon om hvor usikkert estimatet er.`
    },

    // ========== KONFIDENSINTERVALL FOR μ ==========
    {
      id: 's2-5-1-konf-mu',
      type: 'text',
      content: `## Konfidensintervall for forventningsverdi $\\mu$

Et punktestimat alene forteller ikke hvor nøyaktig det er. Et **konfidensintervall** gir oss et intervall som med en angitt sannsynlighet inneholder den sanne parameteren.

Fra sentralgrenseteoremet vet vi at for store utvalg ($n \\geq 30$) er fordelingen til $\\bar{X}$ tilnærmet normalfordelt:
$$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma}{\\sqrt{n}}\\right)$$

**Standardfeilen** til gjennomsnittet er $\\text{SE} = \\frac{\\sigma}{\\sqrt{n}}$. Når $\\sigma$ er ukjent, bruker vi $s$ som estimat.`
    },
    {
      id: 's2-5-1-theorem-konf-mu',
      type: 'theorem',
      title: 'Konfidensintervall for $\\mu$ (stor $n$)',
      content: `Et $(1-\\alpha) \\cdot 100\\%$ konfidensintervall for $\\mu$ er:
$$\\bar{x} \\pm z_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{n}}$$

der:
- $\\bar{x}$ er utvalgsgjennomsnittet
- $s$ er utvalgsstandardavviket
- $n$ er utvalgsstørrelsen
- $z_{\\alpha/2}$ er den kritiske verdien fra standardnormalfordelingen

**Vanlige verdier:**
| Konfidensnivå | $\\alpha$ | $z_{\\alpha/2}$ |
|:---|:---|:---|
| 90 % | 0,10 | 1,645 |
| 95 % | 0,05 | 1,960 |
| 99 % | 0,01 | 2,576 |`
    },
    {
      id: 's2-5-1-example-2',
      type: 'example',
      title: '95 % konfidensintervall for gjennomsnitt',
      problem: `Et tilfeldig utvalg på $n = 64$ batterier testes. Gjennomsnittlig levetid er $\\bar{x} = 48{,}5$ timer med standardavvik $s = 4{,}2$ timer. Finn et 95 % konfidensintervall for den sanne gjennomsnittlige levetiden $\\mu$.`,
      solution: `**Gitt:** $n = 64$, $\\bar{x} = 48{,}5$, $s = 4{,}2$, konfidensnivå 95 % gir $z_{0{,}025} = 1{,}960$

**Beregning av feilmargin:**
$$E = z_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{n}} = 1{,}960 \\cdot \\frac{4{,}2}{\\sqrt{64}} = 1{,}960 \\cdot 0{,}525 = 1{,}03$$

**Konfidensintervall:**
$$48{,}5 \\pm 1{,}03 = [47{,}47 \\,,\\, 49{,}53]$$

Vi er 95 % sikre på at den sanne gjennomsnittlige levetiden ligger mellom 47,47 og 49,53 timer.`
    },

    // ========== KONFIDENSINTERVALL FOR p ==========
    {
      id: 's2-5-1-konf-p',
      type: 'text',
      content: `## Konfidensintervall for andel $p$

Når vi estimerer en populasjonsandel $p$ fra en utvalgsandel $\\hat{p} = \\frac{x}{n}$ (der $x$ er antall «suksesser» i utvalget), kan vi konstruere et konfidensintervall.

For store utvalg er $\\hat{p}$ tilnærmet normalfordelt med forventning $p$ og standardfeil $\\sqrt{\\frac{p(1-p)}{n}}$. Siden $p$ er ukjent, bruker vi $\\hat{p}$ i stedet.`
    },
    {
      id: 's2-5-1-theorem-konf-p',
      type: 'theorem',
      title: 'Konfidensintervall for andel $p$',
      content: `Et $(1-\\alpha) \\cdot 100\\%$ konfidensintervall for $p$ er:
$$\\hat{p} \\pm z_{\\alpha/2} \\cdot \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$

**Forutsetning:** $n\\hat{p} \\geq 5$ og $n(1-\\hat{p}) \\geq 5$ (normalapproksimasjon gyldig).`
    },
    {
      id: 's2-5-1-example-3',
      type: 'example',
      title: 'Konfidensintervall for andel',
      problem: `I en spørreundersøkelse svarte 240 av 800 spurte at de er enige i en påstand. Finn et 95 % konfidensintervall for den sanne andelen $p$ som er enig.`,
      solution: `**Gitt:** $x = 240$, $n = 800$

**Utvalgsandel:** $\\hat{p} = \\frac{240}{800} = 0{,}30$

**Sjekk forutsetning:** $n\\hat{p} = 240 \\geq 5$ og $n(1-\\hat{p}) = 560 \\geq 5$ ✓

**Standardfeil:**
$$\\text{SE} = \\sqrt{\\frac{0{,}30 \\cdot 0{,}70}{800}} = \\sqrt{\\frac{0{,}21}{800}} = \\sqrt{0{,}0002625} \\approx 0{,}0162$$

**Feilmargin:** $E = 1{,}960 \\cdot 0{,}0162 \\approx 0{,}032$

**Konfidensintervall:**
$$0{,}30 \\pm 0{,}032 = [0{,}268 \\,,\\, 0{,}332]$$

Vi er 95 % sikre på at den sanne andelen ligger mellom 26,8 % og 33,2 %.`
    },

    // ========== TOLKNING ==========
    {
      id: 's2-5-1-tolkning',
      type: 'text',
      content: `## Tolkning av konfidensintervall

Et 95 % konfidensintervall betyr **ikke** at det er 95 % sannsynlighet for at $\\mu$ ligger i dette bestemte intervallet. Den sanne $\\mu$ er en fast (ukjent) verdi, ikke en stokastisk variabel.

**Korrekt tolkning:** Hvis vi gjentar forsøket mange ganger og beregner et 95 % konfidensintervall hver gang, vil omtrent 95 % av alle intervallene inneholde den sanne verdien $\\mu$.

**Enklere formulering:** Vi er 95 % sikre på at metoden gir et intervall som fanger den sanne parameterverdien. Med andre ord: i det lange løp tar vi feil i omtrent 5 % av tilfellene.`
    },

    // ========== FEILMARGIN OG UTVALGSSTØRRELSE ==========
    {
      id: 's2-5-1-feilmargin',
      type: 'text',
      content: `## Feilmargin og utvalgsstørrelse

**Feilmarginen** er halvparten av konfidensintervallets bredde:
$$E = z_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{n}} \\quad \\text{(for } \\mu \\text{)}$$

Feilmarginen avtar når:
- Utvalgsstørrelsen $n$ øker (kvadratrotssammenhengen)
- Konfidensnivået reduseres (lavere $z_{\\alpha/2}$)
- Standardavviket $\\sigma$ er lite

**Nødvendig utvalgsstørrelse** for å oppnå en ønsket feilmargin $E$ ved estimering av $\\mu$:
$$n \\geq \\left(\\frac{z_{\\alpha/2} \\cdot \\sigma}{E}\\right)^2$$

For estimering av andel $p$ med ønsket feilmargin $E$:
$$n \\geq \\frac{z_{\\alpha/2}^2 \\cdot p(1-p)}{E^2}$$

Hvis $p$ er helt ukjent, bruker vi $p = 0{,}5$ (gir størst mulig $n$, konservativt estimat).`
    },
    {
      id: 's2-5-1-example-4',
      type: 'example',
      title: 'Nødvendig utvalgsstørrelse',
      problem: `En forsker ønsker å estimere gjennomsnittsscoren på en test med feilmargin $E = 2$ poeng og 95 % konfidens. Tidligere studier tyder på at $\\sigma \\approx 12$. Hvor stort utvalg trengs?`,
      solution: `**Gitt:** $E = 2$, $\\sigma = 12$, $z_{0{,}025} = 1{,}960$

$$n \\geq \\left(\\frac{1{,}960 \\cdot 12}{2}\\right)^2 = \\left(\\frac{23{,}52}{2}\\right)^2 = 11{,}76^2 = 138{,}3$$

Vi runder opp: $n \\geq 139$.

Forskeren trenger minst 139 deltakere i utvalget.`
    },
    {
      id: 's2-5-1-example-5',
      type: 'example',
      title: 'Utvalgsstørrelse for andel',
      problem: `Et politisk parti ønsker å estimere sin oppslutning med feilmargin $E = 0{,}03$ (3 prosentpoeng) og 95 % konfidens. Ingen forhåndsinformasjon om andelen. Hvor mange må spørres?`,
      solution: `**Gitt:** $E = 0{,}03$, $p = 0{,}5$ (verst tenkelig), $z_{0{,}025} = 1{,}960$

$$n \\geq \\frac{1{,}960^2 \\cdot 0{,}5 \\cdot 0{,}5}{0{,}03^2} = \\frac{3{,}8416 \\cdot 0{,}25}{0{,}0009} = \\frac{0{,}9604}{0{,}0009} \\approx 1067{,}1$$

Vi runder opp: $n \\geq 1068$.

Partiet trenger minst 1068 respondenter.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et utvalg på $n = 100$ gir $\\bar{x} = 52$ og $s = 8$. Finn punktestimatet for $\\mu$.', solution: '$\\hat{\\mu} = \\bar{x} = 52$' },
          { label: 'b', task: 'I et utvalg på 200 personer svarer 70 ja. Hva er punktestimatet for andelen?', solution: '$\\hat{p} = \\frac{70}{200} = 0{,}35$' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn standardfeilen til gjennomsnittet dersom $s = 10$ og $n = 25$.', solution: '$\\text{SE} = \\frac{s}{\\sqrt{n}} = \\frac{10}{\\sqrt{25}} = \\frac{10}{5} = 2$' },
          { label: 'b', task: 'Hva blir standardfeilen dersom $n$ firedobles til 100?', solution: '$\\text{SE} = \\frac{10}{\\sqrt{100}} = \\frac{10}{10} = 1$. Standardfeilen halveres når $n$ firedobles.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $z_{\\alpha/2}$ for et 90 % konfidensintervall.', solution: '$z_{0{,}05} = 1{,}645$' },
          { label: 'b', task: 'Finn $z_{\\alpha/2}$ for et 99 % konfidensintervall.', solution: '$z_{0{,}005} = 2{,}576$' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et utvalg på $n = 36$ gir $\\bar{x} = 120$ og $s = 18$. Finn et 95 % konfidensintervall for $\\mu$.', solution: '$E = 1{,}960 \\cdot \\frac{18}{\\sqrt{36}} = 1{,}960 \\cdot 3 = 5{,}88$. KI: $[120 - 5{,}88 \\,,\\, 120 + 5{,}88] = [114{,}12 \\,,\\, 125{,}88]$' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en undersøkelse svarte 180 av 600 at de bruker kollektivtransport daglig. Finn et 95 % konfidensintervall for den sanne andelen.', solution: '$\\hat{p} = 0{,}30$. $\\text{SE} = \\sqrt{\\frac{0{,}30 \\cdot 0{,}70}{600}} = \\sqrt{0{,}00035} \\approx 0{,}0187$. $E = 1{,}960 \\cdot 0{,}0187 \\approx 0{,}037$. KI: $[0{,}263 \\,,\\, 0{,}337]$' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomsnittlig ventetid ved en legevakt ble målt for 49 pasienter. $\\bar{x} = 42$ minutter og $s = 14$ minutter. Finn et 99 % konfidensintervall for gjennomsnittlig ventetid.', solution: '$E = 2{,}576 \\cdot \\frac{14}{\\sqrt{49}} = 2{,}576 \\cdot 2 = 5{,}15$. KI: $[42 - 5{,}15 \\,,\\, 42 + 5{,}15] = [36{,}85 \\,,\\, 47{,}15]$' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et 95 % konfidensintervall er $[34{,}2 \\,,\\, 37{,}8]$. Hva er punktestimatet og feilmarginen?', solution: 'Punktestimat: $\\bar{x} = \\frac{34{,}2 + 37{,}8}{2} = 36{,}0$. Feilmargin: $E = \\frac{37{,}8 - 34{,}2}{2} = 1{,}8$' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Sammenlign bredden på et 90 %, 95 % og 99 % konfidensintervall for $\\mu$ med $\\bar{x} = 50$, $s = 10$ og $n = 100$.', solution: '90 %: $E = 1{,}645 \\cdot 1 = 1{,}645$ → bredde 3,29. 95 %: $E = 1{,}960 \\cdot 1 = 1{,}960$ → bredde 3,92. 99 %: $E = 2{,}576 \\cdot 1 = 2{,}576$ → bredde 5,15. Høyere konfidens gir bredere intervall.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar forskjellen mellom et punktestimat og et konfidensintervall. Hvorfor foretrekker vi ofte konfidensintervaller?', solution: 'Et punktestimat gir én verdi, mens et konfidensintervall gir et område med tilhørende sikkerhetsgrad. KI gir informasjon om usikkerheten i estimatet, noe punktestimatet ikke gjør.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva er den korrekte tolkningen av et 95 % konfidensintervall?', solution: 'Hvis vi trekker mange utvalg og beregner et 95 % KI for hvert, vil omtrent 95 % av intervallene inneholde den sanne parameterverdien. Det er IKKE 95 % sannsynlighet for at den sanne verdien ligger i dette ene intervallet.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hvor stort utvalg trenger vi for å estimere et gjennomsnitt med feilmargin $E = 3$ og 95 % konfidens dersom $\\sigma \\approx 15$?', solution: '$n \\geq \\left(\\frac{1{,}960 \\cdot 15}{3}\\right)^2 = \\left(9{,}8\\right)^2 = 96{,}04$. Rund opp: $n \\geq 97$.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et politisk parti ønsker å estimere sin oppslutning med feilmargin $E = 0{,}02$ og 95 % konfidens. De antar $p \\approx 0{,}25$. Finn nødvendig utvalgsstørrelse.', solution: '$n \\geq \\frac{1{,}960^2 \\cdot 0{,}25 \\cdot 0{,}75}{0{,}02^2} = \\frac{3{,}8416 \\cdot 0{,}1875}{0{,}0004} = \\frac{0{,}7203}{0{,}0004} = 1800{,}75$. Rund opp: $n \\geq 1801$.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vekten av pakker fra en fabrikk ble målt: $n = 80$, $\\bar{x} = 502{,}3$ g, $s = 6{,}4$ g. Finn 90 %, 95 % og 99 % konfidensintervall for gjennomsnittsvekten.', solution: 'SE $= \\frac{6{,}4}{\\sqrt{80}} = 0{,}7155$. 90 %: $502{,}3 \\pm 1{,}645 \\cdot 0{,}7155 = [501{,}12 \\,,\\, 503{,}48]$. 95 %: $502{,}3 \\pm 1{,}960 \\cdot 0{,}7155 = [500{,}90 \\,,\\, 503{,}70]$. 99 %: $502{,}3 \\pm 2{,}576 \\cdot 0{,}7155 = [500{,}46 \\,,\\, 504{,}14]$.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Dersom vi dobler utvalgsstørrelsen, hva skjer med feilmarginen? Forklar algebraisk.', solution: 'Feilmarginen er $E = z_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{n}}$. Dersom $n$ erstattes av $2n$: $E_{ny} = z_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{2n}} = \\frac{E}{\\sqrt{2}} \\approx 0{,}707E$. Feilmarginen reduseres med en faktor $\\sqrt{2} \\approx 1{,}41$, altså omtrent 29 % reduksjon.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et firma hevder at produktet veier 500 g i gjennomsnitt. Du tester $n = 50$ og finner $\\bar{x} = 497{,}2$ g, $s = 8{,}5$ g. Finn et 95 % konfidensintervall. Støtter resultatet firmaets påstand?', solution: '$E = 1{,}960 \\cdot \\frac{8{,}5}{\\sqrt{50}} = 1{,}960 \\cdot 1{,}202 = 2{,}36$. KI: $[494{,}84 \\,,\\, 499{,}56]$. Verdien 500 ligger utenfor intervallet, så resultatet tyder på at den sanne vekten er lavere enn 500 g.' }
        ]
      }
    },
    {
      id: 's2-5-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-5-1-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en valgundersøkelse svarer 320 av 1200 at de stemmer parti A. Finn et 99 % konfidensintervall for partiets oppslutning. Kan partiet ha over 30 % oppslutning?', solution: '$\\hat{p} = \\frac{320}{1200} \\approx 0{,}267$. SE $= \\sqrt{\\frac{0{,}267 \\cdot 0{,}733}{1200}} \\approx 0{,}01277$. $E = 2{,}576 \\cdot 0{,}01277 \\approx 0{,}033$. KI: $[0{,}234 \\,,\\, 0{,}300]$. Grensen 0,30 er akkurat i toppen av intervallet, så det er lite sannsynlig at oppslutningen er over 30 %.' }
        ]
      }
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.2 - Hypotesetesting
// ============================================================================

export const CHAPTER_S2_5_2: TextbookChapter = {
  id: 's2-5-2',
  courseId: 's2',
  chapterNumber: '5.2',
  title: 'Hypotesetesting',
  description: 'Lær om nullhypotese, alternativ hypotese, p-verdi, signifikansnivå og z-test.',
  estimatedMinutes: 65,
  competenceGoals: [
    'formulere null- og alternativhypoteser',
    'gjennomføre og tolke z-tester for gjennomsnitt og andel',
    'forstå sammenhengen mellom p-verdi og signifikansnivå'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-5-2-intro',
      type: 'text',
      content: `## Hva er hypotesetesting?

**Hypotesetesting** er en systematisk metode for å avgjøre om data gir nok bevis til å forkaste en påstand om populasjonen.

**Eksempler på spørsmål:**
- Har en ny medisin bedre effekt enn placebo?
- Er det forskjell i gjennomsnittsinntekt mellom to grupper?
- Har et politisk parti mer enn 10 % oppslutning?

Vi starter med en antakelse (hypotese) og undersøker om dataene er forenlige med denne antakelsen.`
    },

    // ========== HYPOTESER ==========
    {
      id: 's2-5-2-def-hypoteser',
      type: 'definition',
      title: 'Nullhypotese og alternativ hypotese',
      content: `**Nullhypotesen** $H_0$ er den antakelsen vi starter med. Den uttrykker typisk «ingen effekt» eller «ingen forskjell».

**Alternativhypotesen** $H_1$ (eller $H_a$) er det vi ønsker å påvise. Den uttrykker at det finnes en effekt eller forskjell.

**Eksempler:**
| Situasjon | $H_0$ | $H_1$ |
|:---|:---|:---|
| Er gjennomsnittet lik 50? | $\\mu = 50$ | $\\mu \\neq 50$ |
| Er andelen over 0,30? | $p = 0{,}30$ | $p > 0{,}30$ |
| Er gjennomsnittet lavere enn 100? | $\\mu = 100$ | $\\mu < 100$ |

**Merk:** $H_0$ inneholder alltid likhetstegn ($=$, $\\leq$, $\\geq$), mens $H_1$ uttrykker ulikhet ($\\neq$, $>$, $<$).`
    },

    // ========== TESTOBSERVATOR ==========
    {
      id: 's2-5-2-testobservator',
      type: 'text',
      content: `## Testobservator og p-verdi

En **testobservator** (teststatistikk) er en verdi vi beregner fra utvalgsdata for å måle hvor langt unna $H_0$ resultatet er.

For testing av $\\mu$ (kjent $\\sigma$ eller stor $n$):
$$z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$$

For testing av andel $p$:
$$z = \\frac{\\hat{p} - p_0}{\\sqrt{\\frac{p_0(1 - p_0)}{n}}}$$

der $\\mu_0$ og $p_0$ er verdiene fra nullhypotesen.`
    },
    {
      id: 's2-5-2-def-pverdi',
      type: 'definition',
      title: 'P-verdi',
      content: `**P-verdien** er sannsynligheten for å observere et resultat like ekstremt eller mer ekstremt enn det observerte, gitt at $H_0$ er sann.

- **Lav p-verdi**: Data er usannsynlige under $H_0$ → bevis mot $H_0$
- **Høy p-verdi**: Data er forenlige med $H_0$ → ikke bevis mot $H_0$

**For tosidig test** ($H_1: \\mu \\neq \\mu_0$):
$$p\\text{-verdi} = 2 \\cdot P(Z > |z|)$$

**For ensidig test** ($H_1: \\mu > \\mu_0$):
$$p\\text{-verdi} = P(Z > z)$$

**For ensidig test** ($H_1: \\mu < \\mu_0$):
$$p\\text{-verdi} = P(Z < z)$$`
    },

    // ========== SIGNIFIKANSNIVÅ ==========
    {
      id: 's2-5-2-def-signifikans',
      type: 'definition',
      title: 'Signifikansnivå $\\alpha$',
      content: `**Signifikansnivået** $\\alpha$ er grensen vi setter for p-verdien før vi forkaster $H_0$.

**Beslutningsregel:**
- Hvis $p\\text{-verdi} \\leq \\alpha$: Forkast $H_0$ (resultatet er **statistisk signifikant**)
- Hvis $p\\text{-verdi} > \\alpha$: Ikke forkast $H_0$ (ikke nok bevis)

Vanlige verdier for $\\alpha$: 0,05 (5 %), 0,01 (1 %), 0,10 (10 %).

**Merk:** Vi sier aldri at vi «aksepterer $H_0$», bare at vi «ikke forkaster $H_0$». Mangel på bevis er ikke det samme som bevis for mangel.`
    },

    // ========== FREMGANGSMÅTE ==========
    {
      id: 's2-5-2-fremgangsmate',
      type: 'text',
      content: `## Fremgangsmåte for hypotesetest

**Steg 1:** Formuler hypotesene $H_0$ og $H_1$.

**Steg 2:** Velg signifikansnivå $\\alpha$ (vanligvis 0,05).

**Steg 3:** Beregn testobservatoren $z$.

**Steg 4:** Finn p-verdien.

**Steg 5:** Konkluder: Forkast eller ikke forkast $H_0$.

**Steg 6:** Tolk resultatet i kontekst.`
    },

    // ========== EKSEMPLER ==========
    {
      id: 's2-5-2-example-1',
      type: 'example',
      title: 'Tosidig z-test for gjennomsnitt',
      problem: `En produsent hevder at gjennomsnittsvekten er $\\mu = 500$ g. Et utvalg på $n = 64$ gir $\\bar{x} = 497{,}5$ g og $s = 8$ g. Test påstanden med $\\alpha = 0{,}05$.`,
      solution: `**Steg 1:** $H_0: \\mu = 500$ mot $H_1: \\mu \\neq 500$ (tosidig)

**Steg 2:** $\\alpha = 0{,}05$

**Steg 3:** Testobservator:
$$z = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}} = \\frac{497{,}5 - 500}{8/\\sqrt{64}} = \\frac{-2{,}5}{1} = -2{,}50$$

**Steg 4:** P-verdi (tosidig):
$$p\\text{-verdi} = 2 \\cdot P(Z > 2{,}50) = 2 \\cdot 0{,}0062 = 0{,}0124$$

**Steg 5:** Siden $p\\text{-verdi} = 0{,}0124 < 0{,}05 = \\alpha$, forkaster vi $H_0$.

**Steg 6:** Det er statistisk signifikant bevis for at gjennomsnittsvekten er forskjellig fra 500 g. Dataene tyder på at produktene er lettere enn oppgitt.`
    },
    {
      id: 's2-5-2-example-2',
      type: 'example',
      title: 'Ensidig z-test for andel',
      problem: `Et parti hevder de har minst 15 % oppslutning. I en undersøkelse svarte 52 av 400 at de ville stemt på partiet. Test om oppslutningen er lavere enn 15 % med $\\alpha = 0{,}05$.`,
      solution: `**Steg 1:** $H_0: p = 0{,}15$ mot $H_1: p < 0{,}15$ (ensidig, venstre)

**Steg 2:** $\\alpha = 0{,}05$

**Steg 3:** $\\hat{p} = \\frac{52}{400} = 0{,}13$

$$z = \\frac{0{,}13 - 0{,}15}{\\sqrt{\\frac{0{,}15 \\cdot 0{,}85}{400}}} = \\frac{-0{,}02}{\\sqrt{0{,}00031875}} = \\frac{-0{,}02}{0{,}01786} \\approx -1{,}12$$

**Steg 4:** P-verdi (ensidig, venstre):
$$p\\text{-verdi} = P(Z < -1{,}12) \\approx 0{,}131$$

**Steg 5:** Siden $p\\text{-verdi} = 0{,}131 > 0{,}05 = \\alpha$, forkaster vi **ikke** $H_0$.

**Steg 6:** Vi har ikke statistisk grunnlag for å hevde at oppslutningen er lavere enn 15 %. Resultatet er ikke signifikant.`
    },

    // ========== ENSIDIG VS TOSIDIG ==========
    {
      id: 's2-5-2-ensidig-tosidig',
      type: 'text',
      content: `## Ensidig vs. tosidig test

| Type | $H_1$ | P-verdi | Brukes når |
|:---|:---|:---|:---|
| Tosidig | $\\mu \\neq \\mu_0$ | $2P(Z > |z|)$ | Vi undersøker om det er forskjell, uavhengig av retning |
| Ensidig høyre | $\\mu > \\mu_0$ | $P(Z > z)$ | Vi undersøker om verdien er **større** enn antatt |
| Ensidig venstre | $\\mu < \\mu_0$ | $P(Z < z)$ | Vi undersøker om verdien er **mindre** enn antatt |

**Viktig:** Valget mellom ensidig og tosidig test gjøres **før** man ser på dataene. En ensidig test er mer «kraftfull» (lettere å forkaste $H_0$), men man kan bare oppdage avvik i én retning.`
    },
    {
      id: 's2-5-2-example-3',
      type: 'example',
      title: 'Ensidig z-test for gjennomsnitt',
      problem: `En ny undervisningsmetode hevdes å gi bedre resultater. Tradisjonell metode gir $\\mu_0 = 72$ poeng. Et utvalg på 50 elever med ny metode gir $\\bar{x} = 74{,}8$ og $s = 9{,}5$. Test om ny metode gir bedre resultater med $\\alpha = 0{,}05$.`,
      solution: `**Steg 1:** $H_0: \\mu = 72$ mot $H_1: \\mu > 72$ (ensidig, høyre)

**Steg 2:** $\\alpha = 0{,}05$

**Steg 3:**
$$z = \\frac{74{,}8 - 72}{9{,}5/\\sqrt{50}} = \\frac{2{,}8}{1{,}3435} \\approx 2{,}08$$

**Steg 4:** P-verdi (ensidig, høyre):
$$p\\text{-verdi} = P(Z > 2{,}08) \\approx 0{,}019$$

**Steg 5:** Siden $0{,}019 < 0{,}05$, forkaster vi $H_0$.

**Steg 6:** Det er statistisk signifikant bevis for at den nye undervisningsmetoden gir bedre resultater enn den tradisjonelle (på 5 % signifikansnivå).`
    },

    // ========== KONKLUSJON OG TOLKNING ==========
    {
      id: 's2-5-2-tolkning',
      type: 'text',
      content: `## Konklusjon og tolkning

Når vi formulerer konklusjonen, bør vi:

1. **Referere til signifikansnivået:** «På 5 % signifikansnivå...»
2. **Bruke riktig språk:** «forkaster/forkaster ikke $H_0$»
3. **Tolke i kontekst:** Oversett statistisk resultat til praktisk betydning

**Forkasting av $H_0$:** «Det er statistisk signifikant bevis for at [alternativhypotesen].»

**Ikke forkasting:** «Det er ikke tilstrekkelig bevis for å hevde at [alternativhypotesen]. Vi beholder $H_0$.»

Husk at et ikke-signifikant resultat betyr **ikke** at $H_0$ er sann - bare at dataene ikke gir nok bevis til å forkaste den.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Formuler $H_0$ og $H_1$ for: «Er gjennomsnittshøyden til norske menn forskjellig fra 180 cm?»', solution: '$H_0: \\mu = 180$ cm, $H_1: \\mu \\neq 180$ cm (tosidig test)' },
          { label: 'b', task: 'Formuler $H_0$ og $H_1$ for: «Har mer enn 40 % av elevene bestått?»', solution: '$H_0: p = 0{,}40$, $H_1: p > 0{,}40$ (ensidig test)' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Er $H_1: \\mu < 100$ en ensidig eller tosidig test?', solution: 'Ensidig test (venstre).' },
          { label: 'b', task: 'Er $H_1: p \\neq 0{,}5$ en ensidig eller tosidig test?', solution: 'Tosidig test.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En test gir $z = 1{,}85$ og du gjennomfører en tosidig test. Hva er p-verdien? (Bruk at $P(Z > 1{,}85) \\approx 0{,}032$)', solution: 'Tosidig: $p\\text{-verdi} = 2 \\cdot 0{,}032 = 0{,}064$' },
          { label: 'b', task: 'Ville du forkastet $H_0$ på 5 % nivå? På 10 % nivå?', solution: 'På 5 %: $0{,}064 > 0{,}05$, forkaster ikke. På 10 %: $0{,}064 < 0{,}10$, forkaster.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva betyr det at et resultat er «statistisk signifikant på 5 % nivå»?', solution: 'Det betyr at p-verdien er mindre enn 0,05. Sannsynligheten for å observere et like ekstremt eller mer ekstremt resultat, gitt at $H_0$ er sann, er under 5 %.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En mynt kastes 200 ganger og viser kron 115 ganger. Test om mynten er rettferdig ($p = 0{,}5$) med $\\alpha = 0{,}05$.', solution: '$H_0: p = 0{,}5$, $H_1: p \\neq 0{,}5$. $\\hat{p} = \\frac{115}{200} = 0{,}575$. $z = \\frac{0{,}575 - 0{,}5}{\\sqrt{\\frac{0{,}5 \\cdot 0{,}5}{200}}} = \\frac{0{,}075}{0{,}03536} \\approx 2{,}12$. $p\\text{-verdi} = 2P(Z > 2{,}12) \\approx 2 \\cdot 0{,}017 = 0{,}034 < 0{,}05$. Forkast $H_0$. Mynten er sannsynligvis ikke rettferdig.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomsnittlig reaksjonstid er normalt $\\mu_0 = 250$ ms. Etter trening gir 40 deltakere $\\bar{x} = 243$ ms og $s = 22$ ms. Test om treningen reduserer reaksjonstiden ($\\alpha = 0{,}05$).', solution: '$H_0: \\mu = 250$, $H_1: \\mu < 250$. $z = \\frac{243 - 250}{22/\\sqrt{40}} = \\frac{-7}{3{,}479} \\approx -2{,}01$. $p\\text{-verdi} = P(Z < -2{,}01) \\approx 0{,}022 < 0{,}05$. Forkast $H_0$. Treningen gir signifikant reduksjon i reaksjonstid.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En nettbutikk hevder at leveringstiden er 3 dager i gjennomsnitt. Du tester 100 leveranser og finner $\\bar{x} = 3{,}4$ dager og $s = 1{,}5$ dager. Test påstanden med tosidig test og $\\alpha = 0{,}05$.', solution: '$H_0: \\mu = 3$, $H_1: \\mu \\neq 3$. $z = \\frac{3{,}4 - 3}{1{,}5/\\sqrt{100}} = \\frac{0{,}4}{0{,}15} \\approx 2{,}67$. $p\\text{-verdi} = 2P(Z > 2{,}67) \\approx 2 \\cdot 0{,}0038 = 0{,}0076 < 0{,}05$. Forkast $H_0$. Leveringstiden er signifikant forskjellig fra 3 dager.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Av 500 spurte personer svarte 285 at de støtter et forslag. Test om mer enn halvparten støtter forslaget ($\\alpha = 0{,}05$).', solution: '$H_0: p = 0{,}50$, $H_1: p > 0{,}50$. $\\hat{p} = \\frac{285}{500} = 0{,}57$. $z = \\frac{0{,}57 - 0{,}50}{\\sqrt{\\frac{0{,}50 \\cdot 0{,}50}{500}}} = \\frac{0{,}07}{0{,}02236} \\approx 3{,}13$. $p\\text{-verdi} = P(Z > 3{,}13) \\approx 0{,}001 < 0{,}05$. Forkast $H_0$. Det er signifikant bevis for at mer enn halvparten støtter forslaget.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar sammenhengen mellom konfidensintervall og hypotesetesting (tosidig). Hint: Når forkaster vi $H_0: \\mu = \\mu_0$?', solution: 'Vi forkaster $H_0: \\mu = \\mu_0$ (tosidig, $\\alpha = 0{,}05$) hvis og bare hvis $\\mu_0$ ligger utenfor 95 % konfidensintervallet. Konfidensintervallet inneholder alle verdier som IKKE ville blitt forkastet.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hvorfor sier vi «forkaster ikke $H_0$» i stedet for «aksepterer $H_0$»?', solution: 'Fordi vi aldri kan bevise at $H_0$ er sann. Fravær av bevis mot $H_0$ betyr ikke at $H_0$ er korrekt - det kan skyldes for lite utvalg, for stor variasjon, eller at effekten er for liten til å oppdage. Vi kan bare konkludere med at dataene ikke gir tilstrekkelig grunnlag for å avvise $H_0$.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en kvalitetskontroll skal gjennomsnittslengden på bolter være 50 mm. Et utvalg på 80 bolter gir $\\bar{x} = 50{,}3$ mm og $s = 1{,}2$ mm. Test med $\\alpha = 0{,}01$ (tosidig). Er avviket bekymringsverdig?', solution: '$z = \\frac{50{,}3 - 50}{1{,}2/\\sqrt{80}} = \\frac{0{,}3}{0{,}1342} \\approx 2{,}24$. $p\\text{-verdi} = 2P(Z > 2{,}24) \\approx 0{,}025$. Siden $0{,}025 > 0{,}01$, forkaster vi ikke $H_0$ på 1 % nivå. Men på 5 % nivå ville vi forkastet. Avviket er lite (0,3 mm), men kan være viktig avhengig av toleransekravene.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et legemiddelfirma hevder at medisinen virker for mer enn 60 % av pasientene. I en studie ble 78 av 120 pasienter friske. Test påstanden med $\\alpha = 0{,}05$.', solution: '$H_0: p = 0{,}60$, $H_1: p > 0{,}60$. $\\hat{p} = 78/120 = 0{,}65$. $z = \\frac{0{,}65 - 0{,}60}{\\sqrt{\\frac{0{,}60 \\cdot 0{,}40}{120}}} = \\frac{0{,}05}{0{,}04472} \\approx 1{,}12$. $p\\text{-verdi} = P(Z > 1{,}12) \\approx 0{,}131 > 0{,}05$. Forkaster ikke $H_0$. Ikke tilstrekkelig bevis for at medisinen virker for mer enn 60 %.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En maskin skal fylle flasker med nøyaktig 330 ml. Testdata: $n = 50$, $\\bar{x} = 328{,}5$ ml, $s = 5$ ml. Gjennomfør en fullstendig hypotesetest med $\\alpha = 0{,}05$ og formuler en praktisk anbefaling.', solution: '$H_0: \\mu = 330$, $H_1: \\mu \\neq 330$. $z = \\frac{328{,}5 - 330}{5/\\sqrt{50}} = \\frac{-1{,}5}{0{,}707} \\approx -2{,}12$. $p\\text{-verdi} = 2P(Z > 2{,}12) \\approx 0{,}034 < 0{,}05$. Forkast $H_0$. Maskinen fyller signifikant for lite. Anbefaling: Kalibrere maskinen opp med ca. 1,5 ml for å sikre at forbrukerne får oppgitt mengde.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør samme test som i forrige oppgave, men nå med $n = 10$ (og samme $\\bar{x}$ og $s$). Hva blir resultatet? Hva betyr utvalgsstørrelsen for teststyrken?', solution: '$z = \\frac{328{,}5 - 330}{5/\\sqrt{10}} = \\frac{-1{,}5}{1{,}581} \\approx -0{,}95$. $p\\text{-verdi} = 2P(Z > 0{,}95) \\approx 0{,}342 > 0{,}05$. Forkaster ikke $H_0$. Samme avvik ($-1{,}5$ ml) oppdages ikke med lite utvalg. Større utvalg gir høyere teststyrke og evne til å oppdage virkelige forskjeller.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Temperaturmålinger i et drivhus over 36 dager gir $\\bar{x} = 22{,}8°$C og $s = 3{,}0°$C. Målet er 22°C. Test om faktisk temperatur avviker fra målet med $\\alpha = 0{,}10$.', solution: '$H_0: \\mu = 22$, $H_1: \\mu \\neq 22$. $z = \\frac{22{,}8 - 22}{3{,}0/\\sqrt{36}} = \\frac{0{,}8}{0{,}5} = 1{,}60$. $p\\text{-verdi} = 2P(Z > 1{,}60) \\approx 2 \\cdot 0{,}0548 = 0{,}110 > 0{,}10$. Forkaster ikke $H_0$ selv på 10 % nivå. Det er ikke tilstrekkelig bevis for at temperaturen avviker fra 22°C.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En nettside hevder konverteringsraten er 5 %. Etter en redesign konverterer 68 av 1000 besøkende. Test om redesignet har økt konverteringsraten ($\\alpha = 0{,}05$).', solution: '$H_0: p = 0{,}05$, $H_1: p > 0{,}05$. $\\hat{p} = 0{,}068$. $z = \\frac{0{,}068 - 0{,}05}{\\sqrt{\\frac{0{,}05 \\cdot 0{,}95}{1000}}} = \\frac{0{,}018}{0{,}00688} \\approx 2{,}61$. $p\\text{-verdi} = P(Z > 2{,}61) \\approx 0{,}0045 < 0{,}05$. Forkast $H_0$. Redesignet har gitt en signifikant økning i konverteringsraten.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-17',
        number: '17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomsnittlig score på en nasjonal prøve er normalt 500 poeng. En skole med 45 elever fikk $\\bar{x} = 518$ og $s = 65$. Test om skolen gjør det bedre enn gjennomsnittet med $\\alpha = 0{,}01$.', solution: '$H_0: \\mu = 500$, $H_1: \\mu > 500$. $z = \\frac{518 - 500}{65/\\sqrt{45}} = \\frac{18}{9{,}693} \\approx 1{,}86$. $p\\text{-verdi} = P(Z > 1{,}86) \\approx 0{,}031$. Siden $0{,}031 > 0{,}01$, forkaster vi ikke $H_0$ på 1 % nivå. Resultatet er signifikant på 5 % nivå, men ikke strengt nok for 1 % nivå.' }
        ]
      }
    },
    {
      id: 's2-5-2-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 's2-5-2-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En forsker finner p-verdi $= 0{,}048$ i en test med $\\alpha = 0{,}05$. Kollegaen bruker $\\alpha = 0{,}01$. De får ulik konklusjon. Hvordan er dette mulig, og hvem har «rett»?', solution: 'Med $\\alpha = 0{,}05$ forkastes $H_0$ ($0{,}048 < 0{,}05$), men med $\\alpha = 0{,}01$ forkastes ikke ($0{,}048 > 0{,}01$). Begge har rett gitt sitt valgte signifikansnivå. Valg av $\\alpha$ avhenger av konteksten og konsekvensene av en feil beslutning. I medisinsk forskning brukes ofte strengere krav ($\\alpha = 0{,}01$), mens i samfunnsforskning er $\\alpha = 0{,}05$ vanlig.' }
        ]
      }
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.3 - Feiltyper og teststyrke
// ============================================================================

export const CHAPTER_S2_5_3: TextbookChapter = {
  id: 's2-5-3',
  courseId: 's2',
  chapterNumber: '5.3',
  title: 'Feiltyper og teststyrke',
  description: 'Lær om Type I og Type II feil, teststyrke, og sammenhengen mellom signifikansnivå, utvalgsstørrelse og teststyrke.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå og skille mellom Type I og Type II feil',
    'forstå begrepet teststyrke',
    'vurdere sammenhengen mellom feiltyper, utvalgsstørrelse og signifikansnivå'
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's2-5-3-intro',
      type: 'text',
      content: `## To typer feil i hypotesetesting

Når vi tar en beslutning basert på en hypotesetest, kan vi gjøre feil. Siden vi baserer oss på et utvalg (ikke hele populasjonen), er det alltid en risiko for å trekke feil konklusjon.

Det finnes to typer feil:

| | $H_0$ er sann | $H_0$ er usann |
|:---|:---|:---|
| **Forkaster $H_0$** | Type I feil | Riktig beslutning |
| **Forkaster ikke $H_0$** | Riktig beslutning | Type II feil |`
    },

    // ========== TYPE I FEIL ==========
    {
      id: 's2-5-3-def-type1',
      type: 'definition',
      title: 'Type I feil (falsk positiv)',
      content: `En **Type I feil** oppstår når vi forkaster en sann nullhypotese.

Sannsynligheten for Type I feil er lik signifikansnivået:
$$P(\\text{Type I feil}) = \\alpha$$

**Eksempel:** Vi konkluderer med at en medisin har effekt, men i virkeligheten har den ikke det.

Type I feil kalles også **falsk alarm** eller **falsk positiv**.`
    },

    // ========== TYPE II FEIL ==========
    {
      id: 's2-5-3-def-type2',
      type: 'definition',
      title: 'Type II feil (falsk negativ)',
      content: `En **Type II feil** oppstår når vi ikke forkaster en usann nullhypotese.

Sannsynligheten for Type II feil betegnes:
$$P(\\text{Type II feil}) = \\beta$$

**Eksempel:** Vi konkluderer med at medisinen ikke har effekt, men i virkeligheten virker den.

Type II feil kalles også **glipp** eller **falsk negativ**.

$\\beta$ avhenger av den sanne verdien av parameteren (som vi ikke kjenner), og kan derfor ikke settes direkte som $\\alpha$ kan.`
    },

    // ========== TESTSTYRKE ==========
    {
      id: 's2-5-3-teststyrke',
      type: 'text',
      content: `## Teststyrke (power)

**Teststyrken** er sannsynligheten for å forkaste $H_0$ når $H_0$ faktisk er usann:

$$\\text{Teststyrke} = 1 - \\beta = P(\\text{forkaste } H_0 \\mid H_0 \\text{ er usann})$$

En høy teststyrke betyr at testen er god til å oppdage virkelige effekter.

**Tommelfingerregel:** Teststyrken bør være minst 0,80 (80 %). Det betyr at vi oppdager en virkelig effekt i minst 80 % av tilfellene.`
    },
    {
      id: 's2-5-3-theorem-styrke',
      type: 'theorem',
      title: 'Teststyrke for z-test',
      content: `For en ensidig test $H_0: \\mu = \\mu_0$ mot $H_1: \\mu > \\mu_0$ med signifikansnivå $\\alpha$:

$$\\text{Styrke} = P\\left(Z > z_\\alpha - \\frac{\\mu_1 - \\mu_0}{\\sigma/\\sqrt{n}}\\right)$$

der $\\mu_1$ er den sanne verdien av $\\mu$ under $H_1$.

For en tosidig test er formelen mer kompleks, men prinsippet er det samme.`
    },
    {
      id: 's2-5-3-example-1',
      type: 'example',
      title: 'Beregning av teststyrke',
      problem: `Vi tester $H_0: \\mu = 100$ mot $H_1: \\mu > 100$ med $\\alpha = 0{,}05$, $n = 36$, og $\\sigma = 12$. Hva er teststyrken hvis den sanne verdien er $\\mu_1 = 104$?`,
      solution: `**Kritisk verdi:** $z_{0{,}05} = 1{,}645$

**Beregning:**
$$\\text{Styrke} = P\\left(Z > 1{,}645 - \\frac{104 - 100}{12/\\sqrt{36}}\\right) = P\\left(Z > 1{,}645 - \\frac{4}{2}\\right) = P(Z > -0{,}355)$$

$$= 1 - P(Z < -0{,}355) = 1 - 0{,}361 = 0{,}639$$

Teststyrken er 63,9 %. Det betyr at vi bare oppdager effekten i omtrent 64 % av tilfellene - noe lavt!`
    },

    // ========== SAMMENHENG ==========
    {
      id: 's2-5-3-sammenheng',
      type: 'text',
      content: `## Sammenheng mellom $\\alpha$, $\\beta$ og $n$

De tre faktorene påvirker hverandre:

**1. Øke $\\alpha$ (signifikansnivå):**
- Lettere å forkaste $H_0$
- $\\beta$ reduseres → styrken øker
- Men risikoen for Type I feil øker

**2. Øke $n$ (utvalgsstørrelse):**
- Både $\\alpha$ og $\\beta$ kan holdes lave
- Styrken øker
- Men koster mer (tid, penger)

**3. Stor effektstørrelse (avvik fra $H_0$):**
- Lettere å oppdage → styrken øker
- Men vi kontrollerer ikke effektstørrelsen

**Oppsummering:**
- $\\alpha$ og $\\beta$ er i «konflikt»: å redusere den ene øker den andre (for fast $n$)
- Den eneste måten å redusere begge samtidig er å øke $n$`
    },
    {
      id: 's2-5-3-example-2',
      type: 'example',
      title: 'Nødvendig utvalgsstørrelse for gitt styrke',
      problem: `Vi ønsker å teste $H_0: \\mu = 100$ mot $H_1: \\mu > 100$ med $\\alpha = 0{,}05$ og styrke $= 0{,}80$. Vi antar at den sanne verdien er $\\mu_1 = 105$ og $\\sigma = 15$. Finn nødvendig utvalgsstørrelse.`,
      solution: `For ensidig test med styrke $1 - \\beta$:

$$n = \\left(\\frac{(z_\\alpha + z_\\beta) \\cdot \\sigma}{\\mu_1 - \\mu_0}\\right)^2$$

**Innsetting:** $z_{0{,}05} = 1{,}645$ og $z_{0{,}20} = 0{,}842$ (fra $\\beta = 0{,}20$)

$$n = \\left(\\frac{(1{,}645 + 0{,}842) \\cdot 15}{105 - 100}\\right)^2 = \\left(\\frac{2{,}487 \\cdot 15}{5}\\right)^2 = \\left(7{,}461\\right)^2 = 55{,}7$$

Vi trenger $n \\geq 56$ observasjoner.`
    },

    // ========== PRAKTISK VS STATISTISK ==========
    {
      id: 's2-5-3-praktisk-vs-statistisk',
      type: 'text',
      content: `## Praktisk vs. statistisk signifikans

Et resultat kan være **statistisk signifikant** uten å være **praktisk viktig**, og omvendt.

**Eksempel:** En studie med $n = 10\\,000$ finner at en ny medisin senker blodtrykket med 0,5 mmHg (p-verdi < 0,001). Resultatet er statistisk signifikant, men en forskjell på 0,5 mmHg har neppe noen klinisk betydning.

**Omvendt:** En liten studie med $n = 20$ finner at en behandling reduserer smerter med 40 % (p-verdi = 0,08). Resultatet er ikke statistisk signifikant, men effekten er potensielt klinisk viktig - problemet er for lite utvalg.

**Konfidensintervall hjelper:** De viser både estimert effekt (praktisk størrelse) og usikkerhet (statistisk). Rapporter alltid konfidensintervall i tillegg til p-verdier.`
    },

    // ========== OPPGAVER ==========
    {
      id: 's2-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar med egne ord hva en Type I feil er.', solution: 'En Type I feil er å forkaste nullhypotesen når den faktisk er sann. Man konkluderer med at det finnes en effekt eller forskjell som egentlig ikke eksisterer. Sannsynligheten er lik $\\alpha$.' },
          { label: 'b', task: 'Forklar med egne ord hva en Type II feil er.', solution: 'En Type II feil er å ikke forkaste nullhypotesen når den faktisk er usann. Man «overser» en reell effekt. Sannsynligheten er $\\beta$.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En brannalarm kan gi falsk alarm eller ikke varsle ved en ekte brann. Hvilken er Type I feil, og hvilken er Type II feil?', solution: 'La $H_0$: ingen brann. Type I feil: alarmen utløses uten brann (falsk alarm). Type II feil: alarmen utløses ikke under en ekte brann (farlig glipp).' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva er teststyrken, og hva er en god tommelfingerregel for styrke?', solution: 'Teststyrken er $1 - \\beta$, sannsynligheten for å korrekt forkaste en usann $H_0$. Tommelfingerregel: styrken bør være minst 0,80 (80 %).' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et rettssystem kan gjøre to typer feil: dømme en uskyldig (Type I) eller frikjenne en skyldig (Type II). Forklar hvorfor rettssystemet har lavt $\\alpha$ («hevet over enhver rimelig tvil»).', solution: 'Å dømme en uskyldig anses som verre enn å la en skyldig gå fri. Derfor settes $\\alpha$ svært lavt (strengt beviskrav). Konsekvensen er at $\\beta$ blir relativt høy - noen skyldige vil gå fri. Men dette anses som akseptabelt for å beskytte uskyldige.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hva skjer med teststyrken dersom vi øker utvalgsstørrelsen $n$? Forklar intuitivt.', solution: 'Styrken øker. Med større utvalg estimerer vi parameteren mer presist (lavere standardfeil). Det betyr at vi lettere oppdager virkelige avvik fra $H_0$, og $\\beta$ synker.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vi tester $H_0: \\mu = 50$ mot $H_1: \\mu > 50$ med $\\alpha = 0{,}05$, $n = 25$, $\\sigma = 10$. Finn teststyrken dersom $\\mu_1 = 54$.', solution: 'SE $= 10/\\sqrt{25} = 2$. Styrke $= P\\left(Z > 1{,}645 - \\frac{54-50}{2}\\right) = P(Z > 1{,}645 - 2) = P(Z > -0{,}355) = 0{,}639$.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Med samme parametre som oppgave 6, men $n = 100$, finn teststyrken.', solution: 'SE $= 10/\\sqrt{100} = 1$. Styrke $= P\\left(Z > 1{,}645 - \\frac{54-50}{1}\\right) = P(Z > 1{,}645 - 4) = P(Z > -2{,}355) \\approx 0{,}991$. Nesten garantert å oppdage effekten.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hvorfor man ikke kan redusere både $\\alpha$ og $\\beta$ uten å endre noe annet.', solution: 'For fast $n$ og effektstørrelse: å senke $\\alpha$ (strengere krav for forkasting) gjør det vanskeligere å forkaste $H_0$, noe som øker $\\beta$. Å senke $\\beta$ krever at vi forkaster oftere, som øker $\\alpha$. Den eneste løsningen er å øke $n$ eller ha en større effektstørrelse.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn nødvendig $n$ for å teste $H_0: \\mu = 200$ mot $H_1: \\mu > 200$ med $\\alpha = 0{,}05$, styrke $= 0{,}90$ og $\\sigma = 30$ dersom vi ønsker å oppdage $\\mu_1 = 210$.', solution: '$z_{0{,}05} = 1{,}645$ og $z_{0{,}10} = 1{,}282$ (for styrke 0,90). $n = \\left(\\frac{(1{,}645 + 1{,}282) \\cdot 30}{210 - 200}\\right)^2 = \\left(\\frac{2{,}927 \\cdot 30}{10}\\right)^2 = (8{,}781)^2 \\approx 77{,}1$. Trenger $n \\geq 78$.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En studie med $n = 50\\,000$ finner at en medisin senker kolesterolet med 0,1 mg/dL (p-verdi $< 0{,}001$). Klinisk relevant forskjell er minst 5 mg/dL. Diskuter statistisk vs. praktisk signifikans.', solution: 'Resultatet er sterkt statistisk signifikant (svært lav p-verdi), men effekten (0,1 mg/dL) er langt under den klinisk relevante grensen på 5 mg/dL. Det enorme utvalget gjør at selv trivielle forskjeller blir signifikante. Praktisk sett har medisinen ingen meningsfull effekt. Dette illustrerer at p-verdi alene er utilstrekkelig - man må også vurdere effektstørrelsen.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en medisinsk studie er konsekvensene av Type I og Type II feil ulike. Forklar hva som er konsekvensene av hver feiltype når man tester en ny behandling, og diskuter hvordan man bør velge $\\alpha$.', solution: 'Type I feil: godkjenner en uvirksom eller skadelig behandling (kan skade pasienter). Type II feil: avviser en virksom behandling (pasienter går glipp av hjelp). Begge har alvorlige konsekvenser. I medisin settes ofte $\\alpha = 0{,}01$ for å minimere risikoen for å godkjenne uvirksomme behandlinger. Samtidig kreves høy styrke (ofte 90 %) og store studier.' }
        ]
      }
    },
    {
      id: 's2-5-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-5-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar hva som menes med «effektstørrelse» og hvorfor denne er viktig i tillegg til p-verdien. Gi et eksempel.', solution: 'Effektstørrelsen måler hvor stor den praktiske forskjellen er, uavhengig av utvalgsstørrelsen. For eksempel: Cohens $d = \\frac{\\bar{x} - \\mu_0}{s}$ for et gjennomsnitt. P-verdien forteller bare om en effekt er «reell» (ikke skyldes tilfeldigheter), men ikke om den er stor nok til å ha praktisk betydning. Eksempel: $d = 0{,}02$ (minimal effekt) kan gi svært lav p-verdi med $n = 100\\,000$, men effekten er ubetydelig.' }
        ]
      }
    }
  ],
  exercises: []
};

// Eksporter alle kapitler i seksjon 5
export const S2_KAP5_CHAPTERS = [CHAPTER_S2_5_1, CHAPTER_S2_5_2, CHAPTER_S2_5_3];

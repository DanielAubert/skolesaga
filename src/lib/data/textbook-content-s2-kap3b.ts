/**
 * Tekstbok kapitler for s2 - Kapittel 3b (Integrasjon og implisitt derivasjon) og Kapittel 8b (Okonomiske anvendelser)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.7: Integrasjon i funksjonsdrøfting
// ============================================================================

export const CHAPTER_S2_3_7: TextbookChapter = {
  id: 's2-3-7',
  courseId: 's2',
  chapterNumber: '3.7',
  title: 'Integrasjon i funksjonsdrøfting',
  description: 'Laer aa bruke integrasjon i funksjonsdrøfting: beregn areal under og mellom kurver, rekonstruer f(x) fra f\'(x), og tolk bestemt integral grafisk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke integrasjon til å beregne areal under og mellom kurver',
    'tolke det bestemte integralet grafisk og i praktiske sammenhenger',
    'rekonstruere en funksjon fra den deriverte ved hjelp av integrasjon'
  ],
  content: [
    {
      id: 's2-3-7-intro',
      type: 'text',
      content: `## Integrasjon som verktøy i funksjonsdrøfting

Når vi drøfter funksjoner, handler det ikke bare om å finne nullpunkter, ekstremalpunkter og vendepunkter. Vi kan også stille spørsmål om **areal**: Hvor stort er arealet mellom grafen og $x$-aksen? Hva er arealet mellom to kurver?

Integrasjon gir oss verktøyet til å svare på slike spørsmål. I tillegg kan vi bruke integrasjon til å **rekonstruere** en funksjon $f(x)$ dersom vi kjenner den deriverte $f'(x)$ og én funksjonsverdi.

I dette kapittelet ser vi på tre viktige anvendelser:
1. **Areal under kurver** - bestemt integral og fortegn
2. **Areal mellom kurver** - differanse mellom funksjoner
3. **Rekonstruksjon av $f(x)$ fra $f'(x)$** - antiderivasjon med initialbetingelse`
    },
    {
      id: 's2-3-7-def-areal',
      type: 'definition',
      title: 'Areal under en kurve',
      content: `Arealet $A$ mellom grafen til $f(x)$ og $x$-aksen fra $x = a$ til $x = b$ er gitt ved:

$$A = \\int_a^b |f(x)| \\, dx$$

Dersom $f(x) \\geq 0$ på $[a, b]$, forenkles dette til:
$$A = \\int_a^b f(x) \\, dx$$

Dersom $f(x) \\leq 0$ på $[a, b]$, er arealet:
$$A = -\\int_a^b f(x) \\, dx = \\int_a^b (-f(x)) \\, dx$$

**Viktig:** Det bestemte integralet $\\int_a^b f(x) \\, dx$ kan bli negativt (det er et «fortegnsareal»), mens det geometriske arealet alltid er positivt.`
    },
    {
      id: 's2-3-7-theorem-areal-mellom',
      type: 'theorem',
      title: 'Areal mellom to kurver',
      content: `Dersom $f(x) \\geq g(x)$ for alle $x \\in [a, b]$, er arealet mellom grafene til $f$ og $g$ gitt ved:

$$A = \\int_a^b \\bigl(f(x) - g(x)\\bigr) \\, dx$$

Dersom kurvene krysser hverandre i intervallet, må vi dele opp integralet ved skjæringspunktene og ta absoluttverdien:

$$A = \\int_a^c \\bigl|f(x) - g(x)\\bigr| \\, dx + \\int_c^b \\bigl|f(x) - g(x)\\bigr| \\, dx$$

der $c$ er $x$-verdien der kurvene krysser hverandre, altså $f(c) = g(c)$.`
    },
    {
      id: 's2-3-7-example-1',
      type: 'example',
      title: 'Areal under en polynomfunksjon',
      problem: `Funksjonen $f(x) = x^3 - 4x$ har nullpunkter i $x = -2$, $x = 0$ og $x = 2$.

a) Beregn $\\int_{-2}^{2} f(x) \\, dx$. Tolk svaret.
b) Finn det totale arealet mellom grafen til $f$ og $x$-aksen for $x \\in [-2, 2]$.`,
      solution: `**a) Bestemt integral:**

$$\\int_{-2}^{2} (x^3 - 4x) \\, dx = \\left[\\frac{x^4}{4} - 2x^2\\right]_{-2}^{2}$$

$$= \\left(\\frac{16}{4} - 8\\right) - \\left(\\frac{16}{4} - 8\\right) = (4 - 8) - (4 - 8) = -4 - (-4) = 0$$

**Tolkning:** Integralet er null fordi $f(x) = x^3 - 4x$ er en odde funksjon ($f(-x) = -f(x)$), og vi integrerer over et symmetrisk intervall. Det positive og negative arealet kansellerer hverandre.

**b) Totalt areal:**

Vi må dele opp integralet ved nullpunktene. Vi undersøker fortegnet:
- For $x \\in [-2, 0]$: $f(x) \\geq 0$
- For $x \\in [0, 2]$: $f(x) \\leq 0$

$$A = \\int_{-2}^{0} f(x) \\, dx + \\left(-\\int_{0}^{2} f(x) \\, dx\\right)$$

$$\\int_{-2}^{0} (x^3 - 4x) \\, dx = \\left[\\frac{x^4}{4} - 2x^2\\right]_{-2}^{0} = 0 - (4 - 8) = 4$$

$$\\int_{0}^{2} (x^3 - 4x) \\, dx = \\left[\\frac{x^4}{4} - 2x^2\\right]_{0}^{2} = (4 - 8) - 0 = -4$$

$$A = 4 + (-(-4)) = 4 + 4 = 8$$

Det totale arealet mellom grafen og $x$-aksen er $8$ arealenheter.`
    },
    {
      id: 's2-3-7-example-2',
      type: 'example',
      title: 'Areal mellom to kurver',
      problem: `Finn arealet mellom grafene til $f(x) = x^2$ og $g(x) = 2x + 3$ for de $x$-verdiene der kurvene avgrenser et lukket område.`,
      solution: `**Finn skjæringspunktene:**

$x^2 = 2x + 3$
$x^2 - 2x - 3 = 0$
$(x - 3)(x + 1) = 0$
$x = -1$ eller $x = 3$

**Bestem hvilken funksjon som er størst:**

For $x \\in [-1, 3]$ sjekker vi $x = 0$: $g(0) = 3 > 0 = f(0)$, altså $g(x) \\geq f(x)$.

**Beregn arealet:**

$$A = \\int_{-1}^{3} \\bigl(g(x) - f(x)\\bigr) \\, dx = \\int_{-1}^{3} (2x + 3 - x^2) \\, dx$$

$$= \\left[x^2 + 3x - \\frac{x^3}{3}\\right]_{-1}^{3}$$

$$= \\left(9 + 9 - 9\\right) - \\left(1 - 3 + \\frac{1}{3}\\right) = 9 - \\left(-\\frac{5}{3}\\right) = 9 + \\frac{5}{3} = \\frac{32}{3} \\approx 10{,}67$$

Arealet mellom kurvene er $\\frac{32}{3}$ arealenheter.`
    },
    {
      id: 's2-3-7-text-rekonstruksjon',
      type: 'text',
      content: `## Rekonstruksjon av $f(x)$ fra $f'(x)$

I mange drøftingsoppgaver kjenner vi $f'(x)$ og skal finne $f(x)$. Dette er det «omvendte» av derivasjon, altså **integrasjon** (antiderivasjon).

Dersom $f'(x) = g(x)$, er:
$$f(x) = \\int g(x) \\, dx + C$$

der $C$ er en integrasjonskonstant. For å bestemme $C$ trenger vi én kjent funksjonsverdi, for eksempel $f(a) = b$. Vi setter dette inn og løser for $C$.

**Tolkning av integralet:**

Vi kan også bruke det bestemte integralet til å uttrykke sammenhengen:
$$f(b) - f(a) = \\int_a^b f'(x) \\, dx$$

Dette betyr at integralet av den deriverte over et intervall gir **endringen** i funksjonen over det intervallet. Denne sammenhengen er kjent som analysens fundamentalteorem.`
    },
    {
      id: 's2-3-7-example-3',
      type: 'example',
      title: 'Rekonstruksjon av funksjon fra den deriverte',
      problem: `En funksjon $f$ har den deriverte $f'(x) = 3x^2 - 6x + 2$, og vi vet at $f(1) = 3$.

a) Finn $f(x)$.
b) Bestem $f(0)$ og $f(3)$.
c) Beregn $\\int_0^3 f'(x) \\, dx$ og vis at dette er lik $f(3) - f(0)$.`,
      solution: `**a) Finn $f(x)$:**

$$f(x) = \\int (3x^2 - 6x + 2) \\, dx = x^3 - 3x^2 + 2x + C$$

Vi bruker $f(1) = 3$:
$$1 - 3 + 2 + C = 3 \\quad \\Rightarrow \\quad C = 3$$

$$f(x) = x^3 - 3x^2 + 2x + 3$$

**b) Funksjonsverdier:**

$$f(0) = 0 - 0 + 0 + 3 = 3$$
$$f(3) = 27 - 27 + 6 + 3 = 9$$

**c) Bestemt integral av $f'(x)$:**

$$\\int_0^3 (3x^2 - 6x + 2) \\, dx = \\left[x^3 - 3x^2 + 2x\\right]_0^3 = (27 - 27 + 6) - 0 = 6$$

$f(3) - f(0) = 9 - 3 = 6$ ✓

Integralet av den deriverte gir nettopp endringen i funksjonen.`
    },
    {
      id: 's2-3-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn arealet mellom grafen til $f(x) = x^2$ og $x$-aksen for $x \\in [0, 3]$.', solution: '$A = \\int_0^3 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{27}{3} = 9$ arealenheter.' },
          { label: 'b', task: 'Beregn arealet mellom grafen til $g(x) = x^2 - 4$ og $x$-aksen for $x \\in [-2, 2]$.', solution: '$g(x) \\leq 0$ på $[-2, 2]$. $A = -\\int_{-2}^{2} (x^2 - 4) \\, dx = -\\left[\\frac{x^3}{3} - 4x\\right]_{-2}^{2} = -\\left[(\\frac{8}{3} - 8) - (-\\frac{8}{3} + 8)\\right] = -\\left[-\\frac{16}{3} - \\frac{16}{3}\\right] = \\frac{32}{3} \\approx 10{,}67$.' },
          { label: 'c', task: 'Funksjonen $f(x) = x^2 - 1$ har nullpunkter i $x = \\pm 1$. Beregn det totale arealet mellom grafen og $x$-aksen for $x \\in [-1, 2]$.', solution: 'For $x \\in [-1, 1]$: $f(x) \\leq 0$. For $x \\in [1, 2]$: $f(x) \\geq 0$. $A = -\\int_{-1}^{1} (x^2-1) \\, dx + \\int_1^2 (x^2-1) \\, dx = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$.' }
        ]
      }
    },
    {
      id: 's2-3-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet mellom grafene til $f(x) = x^2$ og $g(x) = x + 2$.', solution: 'Skjæringspunkter: $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0 \\Rightarrow x = -1, x = 2$. For $x \\in [-1, 2]$: $g(x) \\geq f(x)$. $A = \\int_{-1}^{2} (x+2-x^2) \\, dx = [\\frac{x^2}{2} + 2x - \\frac{x^3}{3}]_{-1}^{2} = (2+4-\\frac{8}{3}) - (\\frac{1}{2}-2+\\frac{1}{3}) = \\frac{10}{3} + \\frac{7}{6} = \\frac{9}{2} = 4{,}5$.' },
          { label: 'b', task: 'Finn arealet mellom grafene til $f(x) = x^2 - 1$ og $g(x) = -x^2 + 3$.', solution: 'Skjæringspunkter: $x^2 - 1 = -x^2 + 3 \\Rightarrow 2x^2 = 4 \\Rightarrow x = \\pm\\sqrt{2}$. For $x \\in [-\\sqrt{2}, \\sqrt{2}]$: $g(x) \\geq f(x)$. $A = \\int_{-\\sqrt{2}}^{\\sqrt{2}} (4-2x^2) \\, dx = [4x - \\frac{2x^3}{3}]_{-\\sqrt{2}}^{\\sqrt{2}} = 2(4\\sqrt{2} - \\frac{4\\sqrt{2}}{3}) = 2 \\cdot \\frac{8\\sqrt{2}}{3} = \\frac{16\\sqrt{2}}{3} \\approx 7{,}54$.' }
        ]
      }
    },
    {
      id: 's2-3-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En funksjon $f$ har $f\'(x) = 4x - 6$ og $f(2) = 1$. Finn $f(x)$.', solution: '$f(x) = \\int (4x - 6) \\, dx = 2x^2 - 6x + C$. $f(2) = 8 - 12 + C = 1 \\Rightarrow C = 5$. $f(x) = 2x^2 - 6x + 5$.' },
          { label: 'b', task: 'Beregn $\\int_1^4 f\'(x) \\, dx$ og vis at det er lik $f(4) - f(1)$.', solution: '$\\int_1^4 (4x-6) \\, dx = [2x^2 - 6x]_1^4 = (32-24) - (2-6) = 8 + 4 = 12$. $f(4) = 32 - 24 + 5 = 13$. $f(1) = 2 - 6 + 5 = 1$. $f(4) - f(1) = 13 - 1 = 12$ ✓.' },
          { label: 'c', task: 'Funksjonen $f(x) = x^3 - 3x$ har toppunkt i $x = -1$ og bunnpunkt i $x = 1$. Beregn arealet mellom grafen til $f$ og $x$-aksen for $x \\in [-\\sqrt{3}, 0]$.', solution: 'For $x \\in [-\\sqrt{3}, 0]$: $f(x) \\geq 0$ (sjekk: $f(-1) = 2 > 0$). $A = \\int_{-\\sqrt{3}}^{0} (x^3 - 3x) \\, dx = [\\frac{x^4}{4} - \\frac{3x^2}{2}]_{-\\sqrt{3}}^{0} = 0 - (\\frac{9}{4} - \\frac{9}{2}) = \\frac{9}{4} = 2{,}25$.' }
        ]
      }
    },
    {
      id: 's2-3-7-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Det bestemte integralet $\\int_a^b f(x) \\, dx$ gir **fortegnsarealet** (kan være negativt).
- For å finne det **geometriske arealet** mellom en kurve og $x$-aksen, må du dele opp ved nullpunktene og ta absoluttverdien av hvert delintegral.
- Arealet mellom to kurver $f$ og $g$ finner du ved å integrere differansen $|f(x) - g(x)|$.
- **Rekonstruksjon:** $f(x) = \\int f'(x) \\, dx + C$, der $C$ bestemmes fra en kjent funksjonsverdi.
- **Analysens fundamentalteorem:** $\\int_a^b f'(x) \\, dx = f(b) - f(a)$.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.8: Implisitt derivasjon og relaterte rater
// ============================================================================

export const CHAPTER_S2_3_8: TextbookChapter = {
  id: 's2-3-8',
  courseId: 's2',
  chapterNumber: '3.8',
  title: 'Implisitt derivasjon og relaterte rater',
  description: 'Laer implisitt derivasjon for aa finne dy/dx uten aa loese for y eksplisitt, og bruk relaterte rater til aa loese praktiske problemer der flere stoerrelser endres over tid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'derivere implisitt gitte funksjoner',
    'bruke derivasjon til å analysere relaterte endringsrater',
    'modellere og løse praktiske problemer med relaterte rater'
  ],
  content: [
    {
      id: 's2-3-8-intro',
      type: 'text',
      content: `## Implisitt derivasjon

Hittil har vi derivert funksjoner der $y$ er gitt eksplisitt som en funksjon av $x$, for eksempel $y = x^2 + 3x$. Men noen ganger er sammenhengen mellom $x$ og $y$ gitt **implisitt**, det vil si som en likning der $x$ og $y$ opptrer sammen, for eksempel:

$$x^2 + y^2 = 25 \\qquad \\text{(sirkel med radius 5)}$$

Her er det vanskelig eller umulig å løse for $y$ som en enkel funksjon av $x$. I stedet kan vi derivere begge sider av likningen med hensyn på $x$ og behandle $y$ som en funksjon av $x$.

**Nøkkelregel:** Når vi deriverer et uttrykk som inneholder $y$, bruker vi kjerneregelen. Siden $y$ er en funksjon av $x$, blir den deriverte av $y$ med hensyn på $x$ lik $\\frac{dy}{dx}$.`
    },
    {
      id: 's2-3-8-def-implisitt',
      type: 'definition',
      title: 'Implisitt derivasjon',
      content: `**Implisitt derivasjon** er en metode for å finne $\\frac{dy}{dx}$ uten å løse likningen for $y$ eksplisitt.

**Fremgangsmåte:**
1. Deriver begge sider av likningen med hensyn på $x$.
2. Husk at $y = y(x)$ er en funksjon av $x$, så ved derivasjon av ledd med $y$ bruker vi kjerneregelen:
   $$\\frac{d}{dx}[y^n] = n \\cdot y^{n-1} \\cdot \\frac{dy}{dx}$$
3. Samle alle ledd med $\\frac{dy}{dx}$ på én side.
4. Løs for $\\frac{dy}{dx}$.

Svaret vil vanligvis inneholde både $x$ og $y$.`
    },
    {
      id: 's2-3-8-example-1',
      type: 'example',
      title: 'Implisitt derivasjon av en sirkel',
      problem: `Finn $\\frac{dy}{dx}$ for sirkelen $x^2 + y^2 = 25$.`,
      solution: `Vi deriverer begge sider med hensyn på $x$:

$$\\frac{d}{dx}[x^2] + \\frac{d}{dx}[y^2] = \\frac{d}{dx}[25]$$

$$2x + 2y \\cdot \\frac{dy}{dx} = 0$$

Vi løser for $\\frac{dy}{dx}$:

$$2y \\cdot \\frac{dy}{dx} = -2x$$

$$\\frac{dy}{dx} = -\\frac{x}{y}$$

**Tolkning:** Stigningstallet til tangenten i punktet $(x, y)$ på sirkelen er $-\\frac{x}{y}$. For eksempel i punktet $(3, 4)$: $\\frac{dy}{dx} = -\\frac{3}{4}$.

**Sjekk:** Vi kan også løse for $y = \\sqrt{25 - x^2}$ (øvre halvsirkel) og derivere eksplisitt: $y' = \\frac{-x}{\\sqrt{25-x^2}} = \\frac{-x}{y}$ ✓`
    },
    {
      id: 's2-3-8-example-2',
      type: 'example',
      title: 'Implisitt derivasjon med produktregel',
      problem: `Finn $\\frac{dy}{dx}$ dersom $x^2y + xy^2 = 6$.`,
      solution: `Vi deriverer begge sider med hensyn på $x$. Merk at vi trenger produktregelen for begge ledd:

**Ledd 1:** $\\frac{d}{dx}[x^2 y]$

Produktregelen: $2x \\cdot y + x^2 \\cdot \\frac{dy}{dx}$

**Ledd 2:** $\\frac{d}{dx}[xy^2]$

Produktregelen: $1 \\cdot y^2 + x \\cdot 2y \\cdot \\frac{dy}{dx}$

**Samlet:**

$$2xy + x^2 \\frac{dy}{dx} + y^2 + 2xy \\frac{dy}{dx} = 0$$

**Samle ledd med $\\frac{dy}{dx}$:**

$$\\frac{dy}{dx}(x^2 + 2xy) = -2xy - y^2$$

$$\\frac{dy}{dx} = \\frac{-2xy - y^2}{x^2 + 2xy} = \\frac{-y(2x + y)}{x(x + 2y)}$$`
    },
    {
      id: 's2-3-8-text-relaterte-rater',
      type: 'text',
      content: `## Relaterte rater

Når to eller flere størrelser som begge avhenger av tiden $t$ er knyttet sammen av en likning, endrer de seg med **relaterte rater**. Dersom vi kjenner endringsraten til én størrelse, kan vi finne endringsraten til en annen.

**Fremgangsmåte for problemer med relaterte rater:**
1. **Identifiser variablene** og hva som er gitt/etterspurt.
2. **Skriv opp likningen** som knytter variablene sammen.
3. **Deriver implisitt med hensyn på $t$** (tid).
4. **Sett inn kjente verdier** og løs for den ukjente raten.

**Viktig:** Ikke sett inn tallverdier *før* du deriverer! Derivasjon gjøres på den generelle likningen.`
    },
    {
      id: 's2-3-8-example-3',
      type: 'example',
      title: 'Relaterte rater - stige mot vegg',
      problem: `En 5 meter lang stige lener mot en vegg. Foten av stigen glir utover med fart $0{,}5$ m/s. Hvor raskt synker toppen av stigen når foten er 3 meter fra veggen?`,
      solution: `**1. Variablene:**
La $x$ være avstanden fra veggen til foten av stigen, og $y$ være høyden der stigen treffer veggen. Begge er funksjoner av tiden $t$.

**Gitt:** $\\frac{dx}{dt} = 0{,}5$ m/s. **Finn:** $\\frac{dy}{dt}$ når $x = 3$.

**2. Sammenhengen (Pytagoras):**
$$x^2 + y^2 = 5^2 = 25$$

Når $x = 3$: $y = \\sqrt{25 - 9} = 4$ m.

**3. Deriver med hensyn på $t$:**
$$2x \\cdot \\frac{dx}{dt} + 2y \\cdot \\frac{dy}{dt} = 0$$

**4. Sett inn verdier:**
$$2 \\cdot 3 \\cdot 0{,}5 + 2 \\cdot 4 \\cdot \\frac{dy}{dt} = 0$$

$$3 + 8 \\cdot \\frac{dy}{dt} = 0$$

$$\\frac{dy}{dt} = -\\frac{3}{8} = -0{,}375 \\text{ m/s}$$

Toppen av stigen synker med $0{,}375$ m/s (negativt fortegn betyr at $y$ avtar).`
    },
    {
      id: 's2-3-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ ved implisitt derivasjon av $x^2 + 4y^2 = 16$.', solution: '$2x + 8y \\cdot \\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{4y}$.' },
          { label: 'b', task: 'Finn stigningstallet til tangenten til ellipsen $x^2 + 4y^2 = 16$ i punktet $(2, \\sqrt{3})$.', solution: '$\\frac{dy}{dx} = -\\frac{2}{4\\sqrt{3}} = -\\frac{1}{2\\sqrt{3}} = -\\frac{\\sqrt{3}}{6}$.' },
          { label: 'c', task: 'Finn $\\frac{dy}{dx}$ for $x^3 + y^3 = 6xy$ og bestem stigningstallet i punktet $(3, 3)$.', solution: 'Deriver: $3x^2 + 3y^2 \\frac{dy}{dx} = 6y + 6x \\frac{dy}{dx}$. $(3y^2 - 6x)\\frac{dy}{dx} = 6y - 3x^2$. $\\frac{dy}{dx} = \\frac{2y - x^2}{y^2 - 2x}$. I $(3,3)$: $\\frac{dy}{dx} = \\frac{6-9}{9-6} = -1$.' }
        ]
      }
    },
    {
      id: 's2-3-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\frac{dy}{dx}$ for $\\sin(x) + \\cos(y) = 1$.', solution: '$\\cos(x) - \\sin(y) \\cdot \\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = \\frac{\\cos(x)}{\\sin(y)}$.' },
          { label: 'b', task: 'Finn $\\frac{dy}{dx}$ for $e^{xy} = x + y$.', solution: 'Deriver: $e^{xy}(y + x\\frac{dy}{dx}) = 1 + \\frac{dy}{dx}$. $ye^{xy} + xe^{xy}\\frac{dy}{dx} = 1 + \\frac{dy}{dx}$. $(xe^{xy} - 1)\\frac{dy}{dx} = 1 - ye^{xy}$. $\\frac{dy}{dx} = \\frac{1 - ye^{xy}}{xe^{xy} - 1}$.' }
        ]
      }
    },
    {
      id: 's2-3-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En sirkulær oljeflek på vann utvider seg slik at radiusen øker med $0{,}2$ m/s. Hvor raskt øker arealet av flekken når radiusen er 5 meter?', solution: '$A = \\pi r^2$. Deriver med hensyn på $t$: $\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt} = 2\\pi \\cdot 5 \\cdot 0{,}2 = 2\\pi \\approx 6{,}28$ m²/s.' },
          { label: 'b', task: 'To biler starter fra samme punkt. Bil A kjører nordover med 60 km/t og bil B kjører østover med 80 km/t. Hvor raskt øker avstanden mellom bilene etter 2 timer?', solution: 'Etter $t$ timer: $x = 80t$, $y = 60t$. Avstand: $s^2 = x^2 + y^2$. Etter 2 timer: $x = 160$, $y = 120$, $s = \\sqrt{160^2 + 120^2} = 200$ km. $2s \\frac{ds}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. $200 \\frac{ds}{dt} = 160 \\cdot 80 + 120 \\cdot 60 = 20000$. $\\frac{ds}{dt} = 100$ km/t.' },
          { label: 'c', task: 'En konisk haug med sand har alltid forholdet høyde:radius = 2:1. Sand tilføres med $3$ m³/min. Hvor raskt øker høyden når haugen er 4 meter høy?', solution: 'Med $h = 2r$: $V = \\frac{\\pi h^3}{12}$. $\\frac{dV}{dt} = \\frac{\\pi h^2}{4} \\cdot \\frac{dh}{dt}$. $3 = 4\\pi \\cdot \\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{3}{4\\pi} \\approx 0{,}24$ m/min.' }
        ]
      }
    },
    {
      id: 's2-3-8-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Implisitt derivasjon:**
- Brukes når $y$ ikke er gitt eksplisitt som funksjon av $x$.
- Deriver begge sider av likningen med hensyn på $x$, og bruk kjerneregelen for ledd med $y$.
- Løs for $\\frac{dy}{dx}$ - svaret kan inneholde både $x$ og $y$.

**Relaterte rater:**
- Brukes når flere variable endres over tid og er knyttet sammen av en likning.
- Deriver likningen implisitt med hensyn på $t$.
- Sett inn kjente verdier *etter* derivasjon.
- Negativt fortegn betyr at størrelsen avtar.`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 8.6: Kostnad, inntekt og overskudd
// ============================================================================

export const CHAPTER_S2_8_6: TextbookChapter = {
  id: 's2-8-6',
  courseId: 's2',
  chapterNumber: '8.6',
  title: 'Kostnad, inntekt og overskudd',
  description: 'Lær om sammenhengen mellom kostnadsfunksjoner, inntektsfunksjoner og overskuddsfunksjonen O(x)=I(x)-K(x). Forstaa nullpunktsanalyse (break-even), enhetskostnad og grafisk tolkning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'modellere og analysere økonomiske problemstillinger ved hjelp av funksjoner',
    'bruke derivasjon til å finne optimale løsninger i økonomi',
    'tolke funksjoner og grafer i økonomiske sammenhenger'
  ],
  content: [
    {
      id: 's2-8-6-intro',
      type: 'text',
      content: `## Overskudd som mål for lønnsomhet

En bedrift ønsker å tjene penger. For å analysere lønnsomheten trenger vi tre sentrale funksjoner:

- **Kostnadsfunksjonen** $K(x)$: totale kostnader ved å produsere $x$ enheter
- **Inntektsfunksjonen** $I(x)$: totale inntekter ved å selge $x$ enheter
- **Overskuddsfunksjonen** $O(x)$: forskjellen mellom inntekter og kostnader

Overskuddet er det som gjenstår etter at alle kostnader er dekket:

$$O(x) = I(x) - K(x)$$

En positiv verdi av $O(x)$ betyr at bedriften har **fortjeneste**, mens en negativ verdi betyr **tap**. De $x$-verdiene der $O(x) = 0$ kalles **nullpunkter** eller **break-even-punkter** - der inntektene er akkurat like store som kostnadene.`
    },
    {
      id: 's2-8-6-def-kostnadsfunksjoner',
      type: 'definition',
      title: 'Kostnadsfunksjoner',
      content: `**Totalkostnad:**
$$K(x) = \\text{faste kostnader} + \\text{variable kostnader}$$

- **Faste kostnader** $K(0)$: kostnader som ikke avhenger av produksjonsvolum (husleie, forsikring, lån)
- **Variable kostnader** $V(x) = K(x) - K(0)$: kostnader som øker med produksjonen (råvarer, lønn per enhet)

**Enhetskostnad** (gjennomsnittskostnad):
$$E(x) = \\frac{K(x)}{x}$$

Vanlige kostnadsfunksjonstyper i S2:
- **Lineær:** $K(x) = ax + b$ (konstant enhetskostnad for variable kostnader)
- **Kvadratisk:** $K(x) = ax^2 + bx + c$ (økende marginalkostnad)
- **Kubisk:** $K(x) = ax^3 + bx^2 + cx + d$ (S-formet kostnadsforløp med stordriftsfordeler og -ulemper)`
    },
    {
      id: 's2-8-6-def-inntekt-overskudd',
      type: 'definition',
      title: 'Inntekt og overskudd',
      content: `**Totalinntekt:**
$$I(x) = p(x) \\cdot x$$

der $p(x)$ er prisen per enhet. Hvis prisen er fast: $I(x) = p \\cdot x$.
Hvis etterspørselen er lineær: $p(x) = a - bx$, og $I(x) = ax - bx^2$.

**Overskuddsfunksjon (profittfunksjon):**
$$O(x) = I(x) - K(x)$$

**Break-even (nullpunkt for overskuddet):**
$O(x) = 0$, altså $I(x) = K(x)$.

Bedriften går med overskudd når $O(x) > 0$, det vil si når $I(x) > K(x)$.`
    },
    {
      id: 's2-8-6-theorem-maks-overskudd',
      type: 'theorem',
      title: 'Maksimalt overskudd',
      content: `Overskuddet $O(x) = I(x) - K(x)$ er maksimalt der:

$$O'(x) = 0 \\quad \\Leftrightarrow \\quad I'(x) - K'(x) = 0 \\quad \\Leftrightarrow \\quad I'(x) = K'(x)$$

Altså: **Overskuddet er størst der grenseinntekten er lik marginalkostnaden.**

Vi må sjekke at dette er et maksimum:
$$O''(x) < 0 \\quad \\Leftrightarrow \\quad I''(x) < K''(x)$$

**Grafisk tolkning:** Maksimalt overskudd oppnås der det vertikale avstanden mellom $I(x)$ og $K(x)$ er størst, med $I(x)$ over $K(x)$.`
    },
    {
      id: 's2-8-6-example-1',
      type: 'example',
      title: 'Overskuddsfunksjon med fast pris',
      problem: `En bedrift produserer en vare med kostnadsfunksjon $K(x) = 0{,}01x^3 - 0{,}9x^2 + 30x + 500$ kroner, der $x$ er antall enheter. Varen selges til fast pris $p = 50$ kroner per enhet.

a) Finn overskuddsfunksjonen $O(x)$.
b) Finn break-even-punktene.
c) For hvilken $x$ er overskuddet størst?
d) Beregn det maksimale overskuddet.`,
      solution: `**a) Overskuddsfunksjon:**

$I(x) = 50x$

$$O(x) = I(x) - K(x) = 50x - (0{,}01x^3 - 0{,}9x^2 + 30x + 500)$$
$$= -0{,}01x^3 + 0{,}9x^2 + 20x - 500$$

**b) Break-even:**

$O(x) = 0$, altså $-0{,}01x^3 + 0{,}9x^2 + 20x - 500 = 0$.

Med CAS eller numerisk løsning finner vi: $x \\approx 15{,}0$ og $x \\approx 75{,}1$.

Bedriften går med overskudd for $x \\in (15, 75)$ (tilnærmet).

**c) Maksimalt overskudd:**

$$O'(x) = -0{,}03x^2 + 1{,}8x + 20 = 0$$

$$0{,}03x^2 - 1{,}8x - 20 = 0$$

Kvadratisk formel: $x = \\frac{1{,}8 \\pm \\sqrt{3{,}24 + 2{,}4}}{0{,}06} = \\frac{1{,}8 \\pm \\sqrt{5{,}64}}{0{,}06}$

$$x = \\frac{1{,}8 + 2{,}375}{0{,}06} \\approx 69{,}6 \\quad \\text{(vi forkaster den negative løsningen)}$$

$O''(x) = -0{,}06x + 1{,}8$. $O''(69{,}6) = -0{,}06 \\cdot 69{,}6 + 1{,}8 = -2{,}38 < 0$ ✓ (maksimum)

**d) Maksimalt overskudd:**

$$O(69{,}6) \\approx -0{,}01 \\cdot 336697 + 0{,}9 \\cdot 4844 + 20 \\cdot 69{,}6 - 500$$
$$\\approx -3367 + 4360 + 1392 - 500 \\approx 1885 \\text{ kroner}$$`
    },
    {
      id: 's2-8-6-example-2',
      type: 'example',
      title: 'Overskudd med lineær etterspørsel',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = x^2 + 20x + 400$ og etterspørselsfunksjonen $p(x) = 100 - x$.

a) Finn inntektsfunksjonen og overskuddsfunksjonen.
b) Finn break-even-punktene.
c) Finn det produksjonsnivået som gir størst overskudd, og beregn overskuddet.`,
      solution: `**a) Funksjoner:**

$$I(x) = p(x) \\cdot x = (100 - x)x = 100x - x^2$$

$$O(x) = I(x) - K(x) = (100x - x^2) - (x^2 + 20x + 400) = -2x^2 + 80x - 400$$

**b) Break-even:**

$-2x^2 + 80x - 400 = 0$

$x^2 - 40x + 200 = 0$

$x = \\frac{40 \\pm \\sqrt{1600 - 800}}{2} = \\frac{40 \\pm \\sqrt{800}}{2} = 20 \\pm 10\\sqrt{2}$

$x_1 = 20 - 10\\sqrt{2} \\approx 5{,}9$ og $x_2 = 20 + 10\\sqrt{2} \\approx 34{,}1$

Bedriften går med overskudd for $x \\in (5{,}9, \\ 34{,}1)$.

**c) Maksimalt overskudd:**

$O'(x) = -4x + 80 = 0 \\Rightarrow x = 20$

$O''(x) = -4 < 0$ ✓ (maksimum)

$O(20) = -2 \\cdot 400 + 80 \\cdot 20 - 400 = -800 + 1600 - 400 = 400$ kroner.

Prisen ved optimalt volum: $p(20) = 100 - 20 = 80$ kroner per enhet.`
    },
    {
      id: 's2-8-6-example-3',
      type: 'example',
      title: 'Enhetskostnad og lønnsomhet',
      problem: `En bedrift har $K(x) = 0{,}5x^2 + 10x + 200$ og selger varen til fast pris $p = 40$ kroner per enhet.

a) Finn enhetskostnaden $E(x)$ og bestem for hvilken $x$ den er minst.
b) Er bedriften lønnsom ved minimum enhetskostnad? Begrunn svaret.`,
      solution: `**a) Enhetskostnad:**

$$E(x) = \\frac{K(x)}{x} = 0{,}5x + 10 + \\frac{200}{x}$$

$$E'(x) = 0{,}5 - \\frac{200}{x^2} = 0 \\quad \\Rightarrow \\quad x^2 = 400 \\quad \\Rightarrow \\quad x = 20$$

$$E(20) = 10 + 10 + 10 = 30 \\text{ kr/enhet}$$

**b) Lønnsomhet:**

Ved $x = 20$ er enhetskostnaden $E(20) = 30$ kr, som er lavere enn prisen $p = 40$ kr.

Overskudd per enhet: $p - E(20) = 40 - 30 = 10$ kr/enhet.

Totalt overskudd: $O(20) = 40 \\cdot 20 - K(20) = 800 - (200 + 200 + 200) = 800 - 600 = 200$ kr.

Ja, bedriften er lønnsom. Den minimale enhetskostnaden (30 kr) er lavere enn salgsprisen (40 kr), så bedriften tjener penger.`
    },
    {
      id: 's2-8-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 3x + 100$ og selger varen til $p = 8$ kr per enhet. Finn overskuddsfunksjonen $O(x)$.', solution: '$I(x) = 8x$. $O(x) = 8x - 3x - 100 = 5x - 100$.' },
          { label: 'b', task: 'Finn break-even-punktet. Hva betyr det?', solution: '$5x - 100 = 0 \\Rightarrow x = 20$. Bedriften må selge minst 20 enheter for å gå i null (dekke alle kostnader).' },
          { label: 'c', task: 'Hva er overskuddet ved salg av 50 enheter?', solution: '$O(50) = 5 \\cdot 50 - 100 = 150$ kroner.' }
        ]
      }
    },
    {
      id: 's2-8-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}5x^2 + 5x + 200$ og $I(x) = 35x$. Finn overskuddsfunksjonen.', solution: '$O(x) = 35x - 0{,}5x^2 - 5x - 200 = -0{,}5x^2 + 30x - 200$.' },
          { label: 'b', task: 'Finn det produksjonsvolumet som gir størst overskudd.', solution: '$O\'(x) = -x + 30 = 0 \\Rightarrow x = 30$. $O\'\'(x) = -1 < 0$ ✓. Størst overskudd ved $x = 30$.' },
          { label: 'c', task: 'Beregn det maksimale overskuddet.', solution: '$O(30) = -0{,}5 \\cdot 900 + 30 \\cdot 30 - 200 = -450 + 900 - 200 = 250$ kroner.' }
        ]
      }
    },
    {
      id: 's2-8-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 2x^2 + 10x + 800$ og etterspørselsfunksjonen $p(x) = 90 - x$. Finn $I(x)$ og $O(x)$.', solution: '$I(x) = (90-x)x = 90x - x^2$. $O(x) = 90x - x^2 - 2x^2 - 10x - 800 = -3x^2 + 80x - 800$.' },
          { label: 'b', task: 'Finn break-even-punktene (bruk diskriminanten).', solution: '$-3x^2 + 80x - 800 = 0 \\Rightarrow 3x^2 - 80x + 800 = 0$. Diskriminant: $6400 - 9600 = -3200 < 0$. Ingen reelle nullpunkter - bedriften går alltid med tap.' },
          { label: 'c', task: 'En bedrift har $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 300$ og fast pris $p = 25$ kr. Finn det optimale produksjonsvolumet ved å sette $O\'(x) = 0$ (bruk CAS).', solution: '$O(x) = 25x - 0{,}01x^3 + 0{,}6x^2 - 15x - 300 = -0{,}01x^3 + 0{,}6x^2 + 10x - 300$. $O\'(x) = -0{,}03x^2 + 1{,}2x + 10 = 0$. Numerisk: $x \\approx 47{,}1$.' }
        ]
      }
    },
    {
      id: 's2-8-6-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Overskuddsfunksjonen:** $O(x) = I(x) - K(x)$
- **Break-even:** $O(x) = 0$, der $I(x) = K(x)$
- **Maksimalt overskudd:** $O'(x) = 0 \\Leftrightarrow I'(x) = K'(x)$, det vil si grenseinntekt = marginalkostnad
- **Enhetskostnad:** $E(x) = \\frac{K(x)}{x}$. Bedriften er lønnsom når $p > E(x)$ (prisen overstiger enhetskostnaden)
- Grafisk viser den vertikale avstanden mellom $I$ og $K$ overskuddet`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 8.7: Grensekostnader og grenseinntekter
// ============================================================================

export const CHAPTER_S2_8_7: TextbookChapter = {
  id: 's2-8-7',
  courseId: 's2',
  chapterNumber: '8.7',
  title: 'Grensekostnader og grenseinntekter',
  description: 'Laer marginalanalyse med derivasjon: grensekostnad K\'(x), grenseinntekt I\'(x), betingelsen for optimalt produksjonsvolum (MC = MR), og okonomisk tolkning av den deriverte.',
  estimatedMinutes: 55,
  competenceGoals: [
    'tolke den deriverte i økonomiske sammenhenger som grensekostnad og grenseinntekt',
    'bruke derivasjon til å finne optimale produksjonsvolum',
    'forstå og anvende betingelsen MC = MR for profittmaksimering'
  ],
  content: [
    {
      id: 's2-8-7-intro',
      type: 'text',
      content: `## Marginalanalyse - den deriverte i økonomi

I økonomi er **marginalanalyse** studiet av hva som skjer ved en liten endring i produksjon eller salg. Den deriverte gir oss et presist verktøy for dette.

**Marginal** betyr «ved grensen» og refererer til effekten av å produsere eller selge én enhet til. I matematisk forstand:
- $K'(x)$ gir den tilnærmede kostnaden for enhet nr. $x + 1$
- $I'(x)$ gir den tilnærmede ekstrainntekten ved å selge enhet nr. $x + 1$
- $O'(x)$ gir den tilnærmede endringen i overskudd ved én enhet ekstra

Marginalanalyse gir oss svaret på det sentrale spørsmålet i bedriftsøkonomi: **Lønner det seg å produsere én enhet til?**`
    },
    {
      id: 's2-8-7-def-marginalstorrelser',
      type: 'definition',
      title: 'Grensekostnad og grenseinntekt',
      content: `**Grensekostnad** (marginalkostnad, MC):
$$K'(x) = \\frac{dK}{dx}$$
Tilnærmet kostnad for å produsere enhet nr. $x + 1$: $K'(x) \\approx K(x+1) - K(x)$.

**Grenseinntekt** (marginalinntekt, MR):
$$I'(x) = \\frac{dI}{dx}$$
Tilnærmet ekstrainntekt ved å selge enhet nr. $x + 1$: $I'(x) \\approx I(x+1) - I(x)$.

**Grenseoverskudd** (marginaloverskudd):
$$O'(x) = I'(x) - K'(x)$$
Tilnærmet endring i overskudd ved å produsere én enhet til.

**Beslutningsregel:**
- $O'(x) > 0$ (altså $I'(x) > K'(x)$): det lønner seg å øke produksjonen
- $O'(x) < 0$ (altså $I'(x) < K'(x)$): det lønner seg å redusere produksjonen
- $O'(x) = 0$ (altså $I'(x) = K'(x)$): optimalt produksjonsvolum`
    },
    {
      id: 's2-8-7-theorem-mc-mr',
      type: 'theorem',
      title: 'Profittmaksimering: MC = MR',
      content: `En bedrift maksimerer overskuddet der:

$$I'(x) = K'(x) \\qquad \\text{(MR = MC)}$$

det vil si der **grenseinntekten er lik grensekostnaden**.

**Begrunnelse:**
$O(x) = I(x) - K(x)$ er maksimalt når:
$$O'(x) = I'(x) - K'(x) = 0$$

og andrederivert-testen gir:
$$O''(x) = I''(x) - K''(x) < 0$$

**Spesialtilfelle med fast pris:**

Dersom prisen er fast ($p$ = konstant), er $I(x) = px$ og $I'(x) = p$. Da er betingelsen:
$$K'(x) = p$$

Altså: sett marginalkostnaden lik prisen.

**Grafisk tolkning:** I et diagram med $K'(x)$ og $I'(x)$ er det optimale produksjonsvolumet i skjæringspunktet der $K'(x)$ krysser $I'(x)$ nedenfra.`
    },
    {
      id: 's2-8-7-example-1',
      type: 'example',
      title: 'Optimalt produksjonsvolum med fast pris',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}02x^3 - 1{,}5x^2 + 50x + 1000$ og selger til fast pris $p = 80$ kr per enhet.

a) Finn grensekostnaden $K'(x)$.
b) Bestem det optimale produksjonsvolumet.
c) Beregn det maksimale overskuddet.`,
      solution: `**a) Grensekostnad:**

$$K'(x) = 0{,}06x^2 - 3x + 50$$

**b) Optimalt volum ($K'(x) = p$):**

$$0{,}06x^2 - 3x + 50 = 80$$

$$0{,}06x^2 - 3x - 30 = 0$$

$$x^2 - 50x - 500 = 0$$

$$x = \\frac{50 \\pm \\sqrt{2500 + 2000}}{2} = \\frac{50 \\pm \\sqrt{4500}}{2} = \\frac{50 \\pm 67{,}08}{2}$$

$x = \\frac{50 + 67{,}08}{2} \\approx 58{,}5$ (vi forkaster den negative løsningen)

Vi sjekker: $O''(x) = -K''(x) = -(0{,}12x - 3)$. $O''(58{,}5) = -(0{,}12 \\cdot 58{,}5 - 3) = -4{,}02 < 0$ ✓

**c) Maksimalt overskudd:**

$K(58{,}5) \\approx 0{,}02 \\cdot 200001 - 1{,}5 \\cdot 3422 + 50 \\cdot 58{,}5 + 1000 \\approx 4000 - 5133 + 2925 + 1000 = 2792$ kr

$I(58{,}5) = 80 \\cdot 58{,}5 = 4680$ kr

$O(58{,}5) = 4680 - 2792 = 1888$ kr`
    },
    {
      id: 's2-8-7-example-2',
      type: 'example',
      title: 'Marginalanalyse med variabel pris',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = 2x^2 + 20x + 500$ og etterspørselsfunksjonen $p(x) = 120 - x$.

a) Finn grensekostnaden og grenseinntekten.
b) Bestem det optimale produksjonsvolumet og den tilhørende prisen.
c) Er $O'(30)$ positiv eller negativ? Tolk svaret.`,
      solution: `**a) Marginalstørrelser:**

$K'(x) = 4x + 20$ (grensekostnad)

$I(x) = (120 - x)x = 120x - x^2$
$I'(x) = 120 - 2x$ (grenseinntekt)

**b) Optimalt volum ($I'(x) = K'(x)$):**

$120 - 2x = 4x + 20$
$100 = 6x$
$x = \\frac{100}{6} \\approx 16{,}7$

Siden $x$ bør være et helt tall, vurderer vi $x = 17$:
$p(17) = 120 - 17 = 103$ kr per enhet.

Sjekk: $O''(x) = I''(x) - K''(x) = -2 - 4 = -6 < 0$ ✓

**c) Grenseoverskudd ved $x = 30$:**

$O'(30) = I'(30) - K'(30) = (120 - 60) - (120 + 20) = 60 - 140 = -80$

$O'(30) < 0$: ved $x = 30$ lønner det seg ikke å øke produksjonen. Bedriften bør redusere til ca. 17 enheter.`
    },
    {
      id: 's2-8-7-example-3',
      type: 'example',
      title: 'Tilnærming versus eksakt beregning',
      problem: `En bedrift har $K(x) = 0{,}1x^2 + 5x + 100$.

a) Finn den eksakte kostnaden for den 21. enheten, det vil si $K(21) - K(20)$.
b) Finn grensekostnaden $K'(20)$.
c) Sammenlign svarene og kommenter presisjonen til tilnærmingen.`,
      solution: `**a) Eksakt kostnad:**

$K(21) = 0{,}1 \\cdot 441 + 105 + 100 = 44{,}1 + 105 + 100 = 249{,}1$ kr
$K(20) = 0{,}1 \\cdot 400 + 100 + 100 = 40 + 100 + 100 = 240$ kr

$K(21) - K(20) = 249{,}1 - 240 = 9{,}1$ kr

**b) Grensekostnad:**

$K'(x) = 0{,}2x + 5$
$K'(20) = 4 + 5 = 9$ kr

**c) Sammenligning:**

Den eksakte kostnaden er $9{,}1$ kr, mens grensekostnaden gir $9$ kr. Avviket er $0{,}1$ kr, ca. $1{,}1\\%$.

Tilnærmingen $K'(x) \\approx K(x+1) - K(x)$ er svært god. Forskjellen skyldes at vi erstatter sekanthelningen over $[20, 21]$ med tangenthelningen i $x = 20$. For funksjoner med liten krumning er tilnærmingen nesten eksakt.`
    },
    {
      id: 's2-8-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 3x^2 + 20x + 600$ og selger til fast pris $p = 80$ kr. Finn det optimale produksjonsvolumet.', solution: '$K\'(x) = 6x + 20$. $K\'(x) = p$: $6x + 20 = 80 \\Rightarrow x = 10$.' },
          { label: 'b', task: 'Beregn det maksimale overskuddet. Hva sier resultatet?', solution: '$O(10) = 80 \\cdot 10 - (300 + 200 + 600) = 800 - 1100 = -300$ kr. Bedriften går med tap! Prisen er for lav til å dekke kostnadene.' }
        ]
      }
    },
    {
      id: 's2-8-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = x^2 + 10x + 200$ og $p(x) = 60 - 0{,}5x$. Finn $I\'(x)$ og $K\'(x)$.', solution: '$I(x) = 60x - 0{,}5x^2$. $I\'(x) = 60 - x$. $K\'(x) = 2x + 10$.' },
          { label: 'b', task: 'Finn det optimale produksjonsvolumet og den tilhørende prisen.', solution: '$I\'(x) = K\'(x)$: $60 - x = 2x + 10 \\Rightarrow 50 = 3x \\Rightarrow x \\approx 16{,}7$. $p(16{,}7) = 60 - 8{,}3 = 51{,}7$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}005x^3 - 0{,}5x^2 + 25x + 800$. Finn for hvilken $x$ grensekostnaden er minst.', solution: '$K\'(x) = 0{,}015x^2 - x + 25$. $K\'\'(x) = 0{,}03x - 1 = 0 \\Rightarrow x = \\frac{100}{3} \\approx 33{,}3$. Minimum grensekostnad ved ca. 33 enheter.' },
          { label: 'b', task: 'En bedrift har $K(x) = 0{,}01x^3 - 0{,}9x^2 + 35x + 2000$ og etterspørsel $p(x) = 100 - 0{,}5x$. Finn det optimale produksjonsvolumet (bruk CAS eller numerisk metode).', solution: '$K\'(x) = 0{,}03x^2 - 1{,}8x + 35$. $I(x) = 100x - 0{,}5x^2$. $I\'(x) = 100 - x$. $I\'(x) = K\'(x)$: $0{,}03x^2 - 0{,}8x - 65 = 0$. Numerisk: $x \\approx 61{,}8$.' },
          { label: 'c', task: 'Beregn det maksimale overskuddet ved $x \\approx 62$ enheter i deloppgave b).', solution: '$p(62) = 100 - 31 = 69$ kr. $I(62) = 69 \\cdot 62 = 4278$ kr. $K(62) \\approx 0{,}01 \\cdot 238328 - 0{,}9 \\cdot 3844 + 35 \\cdot 62 + 2000 \\approx 3093$ kr. $O(62) = 4278 - 3093 = 1185$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-7-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Grensekostnad** $K'(x)$: tilnærmet kostnad for å produsere enhet nr. $x + 1$
- **Grenseinntekt** $I'(x)$: tilnærmet ekstrainntekt ved salg av enhet nr. $x + 1$
- **MC = MR-betingelsen:** Overskuddet er størst der $K'(x) = I'(x)$
- Med fast pris $p$: optimalt volum der $K'(x) = p$
- Så lenge $I'(x) > K'(x)$, lønner det seg å øke produksjonen
- Marginalstørrelsene er tilnærminger: $K'(x) \\approx K(x+1) - K(x)$, men tilnærmingen er vanligvis svært god`
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 8.8: Konsument- og produsentoverskudd
// ============================================================================

export const CHAPTER_S2_8_8: TextbookChapter = {
  id: 's2-8-8',
  courseId: 's2',
  chapterNumber: '8.8',
  title: 'Konsument- og produsentoverskudd',
  description: 'Laer aa beregne konsumentoverskudd og produsentoverskudd ved hjelp av integrasjon. Forstaa samfunnsokonomisk overskudd, grafisk tolkning og effekten av prisregulering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke integrasjon til å beregne konsument- og produsentoverskudd',
    'tolke samfunnsøkonomisk overskudd grafisk',
    'analysere effekten av prisregulering på overskudd'
  ],
  content: [
    {
      id: 's2-8-8-intro',
      type: 'text',
      content: `## Overskudd i markedet

I et marked finnes det både kjøpere og selgere, og begge parter kan oppnå en gevinst fra handel. Noen kjøpere ville vært villige til å betale mer enn markedsprisen, og noen selgere kunne levert til en lavere pris. Denne «ekstra gevinsten» kalles **overskudd**.

- **Konsumentoverskudd**: gevinsten for kjøperne - forskjellen mellom hva de var villige til å betale og hva de faktisk betaler.
- **Produsentoverskudd**: gevinsten for selgerne - forskjellen mellom hva de faktisk mottar og den laveste prisen de ville akseptert.
- **Samfunnsøkonomisk overskudd**: summen av konsument- og produsentoverskudd.

For å beregne disse overskuddene bruker vi **integrasjon** - de representeres som arealer i et tilbud-etterspørsels-diagram.`
    },
    {
      id: 's2-8-8-def-konsumentoverskudd',
      type: 'definition',
      title: 'Konsumentoverskudd',
      content: `La $p = D(x)$ være **etterspørselsfunksjonen** (avtagende), og la markedsprisen være $p_0$ ved omsatt mengde $x_0$ (der $D(x_0) = p_0$).

**Konsumentoverskuddet** (KO) er arealet mellom etterspørselskurven og prislinjen $p = p_0$ fra $x = 0$ til $x = x_0$:

$$\\text{KO} = \\int_0^{x_0} D(x) \\, dx - p_0 \\cdot x_0$$

**Tolkning:** Konsumentoverskuddet måler den totale «sparte» betalingen - summen av differansene mellom hva hver konsument var villig til å betale og den faktiske markedsprisen.

Grafisk er KO arealet av området mellom etterspørselskurven og den horisontale linjen $p = p_0$, til venstre for $x = x_0$.`
    },
    {
      id: 's2-8-8-def-produsentoverskudd',
      type: 'definition',
      title: 'Produsentoverskudd',
      content: `La $p = S(x)$ være **tilbudsfunksjonen** (stigende), og la markedsprisen være $p_0$ ved omsatt mengde $x_0$ (der $S(x_0) = p_0$).

**Produsentoverskuddet** (PO) er arealet mellom prislinjen $p = p_0$ og tilbudskurven fra $x = 0$ til $x = x_0$:

$$\\text{PO} = p_0 \\cdot x_0 - \\int_0^{x_0} S(x) \\, dx$$

**Tolkning:** Produsentoverskuddet måler den totale «ekstragevinsten» for produsentene - summen av differansene mellom den faktiske markedsprisen og den laveste prisen de ville akseptert for hver enhet.

**Samfunnsøkonomisk overskudd** er summen:
$$\\text{SO} = \\text{KO} + \\text{PO} = \\int_0^{x_0} D(x) \\, dx - \\int_0^{x_0} S(x) \\, dx = \\int_0^{x_0} \\bigl(D(x) - S(x)\\bigr) \\, dx$$`
    },
    {
      id: 's2-8-8-theorem-likevekt',
      type: 'theorem',
      title: 'Markedslikevekt og samfunnsøkonomisk effektivitet',
      content: `**Markedslikevekt** oppstår der etterspørselskurven og tilbudskurven krysser hverandre:
$$D(x^*) = S(x^*) = p^*$$

der $x^*$ er likevektsmengden og $p^*$ er likevektsprisen.

**Viktig resultat:** Det samfunnsøkonomiske overskuddet er **størst** ved markedslikevekt. Enhver annen pris (f.eks. ved prisregulering) reduserer det totale overskuddet.

Dersom prisen settes lavere enn likevekt:
- KO kan øke for de som får kjøpt, men mengden omsatt synker
- PO reduseres
- Det oppstår et **dødvektstap** - tapt overskudd som verken tilfaller kjøpere eller selgere`
    },
    {
      id: 's2-8-8-example-1',
      type: 'example',
      title: 'Konsument- og produsentoverskudd med lineære funksjoner',
      problem: `Etterspørselsfunksjonen er $D(x) = 100 - 2x$ og tilbudsfunksjonen er $S(x) = 20 + x$.

a) Finn markedslikevekten (likevektspris og -mengde).
b) Beregn konsumentoverskuddet.
c) Beregn produsentoverskuddet.
d) Finn det samfunnsøkonomiske overskuddet.`,
      solution: `**a) Markedslikevekt:**

$D(x) = S(x)$:
$100 - 2x = 20 + x$
$80 = 3x$
$x^* = \\frac{80}{3} \\approx 26{,}7$

$p^* = S(26{,}7) = 20 + 26{,}7 = 46{,}7$ kr

**b) Konsumentoverskudd:**

$$\\text{KO} = \\int_0^{80/3} (100 - 2x) \\, dx - p^* \\cdot x^*$$

$$= \\left[100x - x^2\\right]_0^{80/3} - \\frac{140}{3} \\cdot \\frac{80}{3}$$

$$= \\left(\\frac{8000}{3} - \\frac{6400}{9}\\right) - \\frac{11200}{9} = \\frac{17600}{9} - \\frac{11200}{9} = \\frac{6400}{9} \\approx 711 \\text{ kr}$$

Alternativt (trekantareal): $\\text{KO} = \\frac{1}{2} \\cdot \\frac{80}{3} \\cdot \\frac{160}{3} = \\frac{6400}{9} \\approx 711$ kr.

**c) Produsentoverskudd:**

$$\\text{PO} = p^* \\cdot x^* - \\int_0^{80/3} (20 + x) \\, dx$$

$$= \\frac{11200}{9} - \\left[20x + \\frac{x^2}{2}\\right]_0^{80/3} = \\frac{11200}{9} - \\frac{8000}{9} = \\frac{3200}{9} \\approx 356 \\text{ kr}$$

**d) Samfunnsøkonomisk overskudd:**

$$\\text{SO} = \\text{KO} + \\text{PO} = \\frac{6400}{9} + \\frac{3200}{9} = \\frac{9600}{9} = \\frac{3200}{3} \\approx 1067 \\text{ kr}$$`
    },
    {
      id: 's2-8-8-example-2',
      type: 'example',
      title: 'Konsumentoverskudd med ikke-lineær etterspørsel',
      problem: `Etterspørselsfunksjonen er $D(x) = \\frac{200}{x + 2}$, og markedsprisen er $p_0 = 20$ kr.

a) Finn den omsatte mengden $x_0$.
b) Beregn konsumentoverskuddet.`,
      solution: `**a) Omsatt mengde:**

$D(x_0) = p_0$:
$$\\frac{200}{x_0 + 2} = 20 \\quad \\Rightarrow \\quad x_0 + 2 = 10 \\quad \\Rightarrow \\quad x_0 = 8$$

**b) Konsumentoverskudd:**

$$\\text{KO} = \\int_0^{8} \\frac{200}{x + 2} \\, dx - 20 \\cdot 8$$

$$= 200 \\left[\\ln|x + 2|\\right]_0^{8} - 160$$

$$= 200 (\\ln 10 - \\ln 2) - 160$$

$$= 200 \\ln 5 - 160$$

$$\\approx 200 \\cdot 1{,}609 - 160 = 321{,}9 - 160 = 161{,}9 \\text{ kr}$$

Konsumentoverskuddet er omtrent $162$ kroner.`
    },
    {
      id: 's2-8-8-example-3',
      type: 'example',
      title: 'Effekt av prisregulering og dødvektstap',
      problem: `Bruk funksjonene $D(x) = 60 - 2x$ og $S(x) = x + 15$. Myndighetene setter et pristak på $p_1 = 25$ kr.

a) Finn markedslikevekten.
b) Finn den nye omsatte mengden ved pristakket.
c) Beregn det nye KO og PO, og finn dødvektstapet.`,
      solution: `**a) Markedslikevekt:**

$60 - 2x = x + 15 \\Rightarrow 45 = 3x \\Rightarrow x^* = 15$, $p^* = 30$ kr.

$\\text{SO}_{\\text{likevekt}} = \\frac{1}{2} \\cdot 15 \\cdot (60 - 15) = \\frac{1}{2} \\cdot 15 \\cdot 45 = 337{,}5$ kr.

**b) Ny omsatt mengde ved $p_1 = 25$ kr:**

Tilbudet bestemmer mengden (knappe side):
$S(x_1) = 25$: $x_1 + 15 = 25 \\Rightarrow x_1 = 10$.

**c) Nytt KO, PO og dødvektstap:**

$$\\text{KO}_{\\text{ny}} = \\int_0^{10} (60 - 2x) \\, dx - 25 \\cdot 10 = [60x - x^2]_0^{10} - 250 = 500 - 250 = 250 \\text{ kr}$$

$$\\text{PO}_{\\text{ny}} = 25 \\cdot 10 - \\int_0^{10} (x + 15) \\, dx = 250 - \\left[\\frac{x^2}{2} + 15x\\right]_0^{10} = 250 - 200 = 50 \\text{ kr}$$

$\\text{SO}_{\\text{ny}} = 250 + 50 = 300$ kr.

$$\\text{Dødvektstap} = \\text{SO}_{\\text{likevekt}} - \\text{SO}_{\\text{ny}} = 337{,}5 - 300 = 37{,}5 \\text{ kr}$$

Alternativt (trekantareal): $\\text{DT} = \\frac{1}{2} \\cdot (x^* - x_1) \\cdot (D(x_1) - S(x_1)) = \\frac{1}{2} \\cdot 5 \\cdot (40 - 25) = \\frac{1}{2} \\cdot 5 \\cdot 15 = 37{,}5$ kr ✓`
    },
    {
      id: 's2-8-8-text-prisregulering',
      type: 'text',
      content: `## Prisregulering og dødvektstap

Når myndighetene regulerer prisen (setter en pris som avviker fra markedslikevekten), endres fordelingen av overskudd, og det oppstår et **dødvektstap**.

**Pristak** (pris satt under likevektsprisen):
- Omsatt mengde bestemmes av tilbudet (som er minst): $x_1 = S^{-1}(p_1) < x^*$
- Noen av konsumentene tjener på lavere pris (de som fortsatt får kjøpt)
- Produsentene taper
- Dødvektstap = tapt SO = $\\int_{x_1}^{x^*} (D(x) - S(x)) \\, dx$

**Prisgulv** (pris satt over likevektsprisen):
- Omsatt mengde bestemmes av etterspørselen: $x_1 = D^{-1}(p_1) < x^*$
- Produsentene som selger tjener mer per enhet, men det selges færre enheter
- Konsumentene taper
- Igjen oppstår et dødvektstap

I begge tilfeller er det totale samfunnsøkonomiske overskuddet mindre enn ved likevekt.`
    },
    {
      id: 's2-8-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselsfunksjonen er $D(x) = 80 - 4x$ og markedsprisen er $p_0 = 20$ kr. Finn omsatt mengde $x_0$ og beregn konsumentoverskuddet.', solution: '$D(x_0) = 20$: $80 - 4x_0 = 20 \\Rightarrow x_0 = 15$. $\\text{KO} = \\int_0^{15} (80 - 4x) \\, dx - 20 \\cdot 15 = [80x - 2x^2]_0^{15} - 300 = (1200 - 450) - 300 = 450$ kr. Alternativt: $\\frac{1}{2} \\cdot 15 \\cdot (80-20) = 450$ kr.' },
          { label: 'b', task: 'Tilbudsfunksjonen er $S(x) = 5 + x$ og markedsprisen er $p_0 = 20$ kr. Finn omsatt mengde og beregn produsentoverskuddet.', solution: '$S(x_0) = 20$: $5 + x_0 = 20 \\Rightarrow x_0 = 15$. $\\text{PO} = 20 \\cdot 15 - \\int_0^{15} (5+x) \\, dx = 300 - [5x + \\frac{x^2}{2}]_0^{15} = 300 - (75 + 112{,}5) = 112{,}5$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $D(x) = 50 - x$ og tilbudet er $S(x) = 10 + 0{,}5x$. Finn markedslikevekten.', solution: '$50 - x = 10 + 0{,}5x \\Rightarrow 40 = 1{,}5x \\Rightarrow x^* = \\frac{80}{3} \\approx 26{,}7$. $p^* = 50 - 26{,}7 = 23{,}3$ kr.' },
          { label: 'b', task: 'Beregn konsumentoverskuddet, produsentoverskuddet og det samfunnsøkonomiske overskuddet ved likevekt.', solution: 'KO $= \\frac{1}{2} \\cdot \\frac{80}{3} \\cdot (50 - \\frac{70}{3}) = \\frac{3200}{9} \\approx 355{,}6$ kr. PO $= \\frac{1}{2} \\cdot \\frac{80}{3} \\cdot (\\frac{70}{3} - 10) = \\frac{1600}{9} \\approx 177{,}8$ kr. SO $= \\frac{4800}{9} \\approx 533{,}3$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $D(x) = 100 - 2x$ og tilbudet er $S(x) = 20 + x$ (samme som eksempel 1). Myndighetene setter et pristak på $p_1 = 35$ kr. Finn den nye omsatte mengden.', solution: 'Tilbudet ved $p_1 = 35$: $20 + x_1 = 35 \\Rightarrow x_1 = 15$. Etterspørsel ved $p_1 = 35$: $100 - 2x = 35 \\Rightarrow x = 32{,}5$. Siden tilbudet er knapt, selges bare 15 enheter.' },
          { label: 'b', task: 'Beregn det nye KO og PO ved pristakket $p_1 = 35$ kr.', solution: '$\\text{KO}_{\\text{ny}} = \\int_0^{15} (100 - 2x) \\, dx - 35 \\cdot 15 = [100x - x^2]_0^{15} - 525 = (1500 - 225) - 525 = 750$ kr. $\\text{PO}_{\\text{ny}} = 35 \\cdot 15 - \\int_0^{15} (20 + x) \\, dx = 525 - (300 + 112{,}5) = 112{,}5$ kr.' },
          { label: 'c', task: 'Beregn dødvektstapet. Forklar hva det representerer.', solution: '$\\text{SO}_{\\text{ny}} = 750 + 112{,}5 = 862{,}5$ kr. $\\text{SO}_{\\text{likevekt}} = \\frac{3200}{3} \\approx 1066{,}7$ kr. Dødvektstap $\\approx 1066{,}7 - 862{,}5 = 204{,}2$ kr. Dette er overskudd som forsvinner helt - det tilfaller verken kjøpere eller selgere - som følge av at prisreguleringen hindrer handel mellom $x = 15$ og $x^* \\approx 26{,}7$.' }
        ]
      }
    },
    {
      id: 's2-8-8-text-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Konsumentoverskudd** (KO): $\\int_0^{x_0} D(x) \\, dx - p_0 \\cdot x_0$ - gevinsten for kjøperne
- **Produsentoverskudd** (PO): $p_0 \\cdot x_0 - \\int_0^{x_0} S(x) \\, dx$ - gevinsten for selgerne
- **Samfunnsøkonomisk overskudd** (SO): $\\text{KO} + \\text{PO} = \\int_0^{x_0} (D(x) - S(x)) \\, dx$
- Ved **markedslikevekt** ($D(x^*) = S(x^*)$) er SO størst
- **Prisregulering** (pristak eller prisgulv) fører til:
  - Endret fordeling av overskudd mellom kjøpere og selgere
  - Redusert omsatt mengde
  - **Dødvektstap** - tapt samfunnsøkonomisk overskudd
- For lineære funksjoner kan overskuddene beregnes som trekantsarealer
- For ikke-lineære funksjoner kreves integrasjon`
    }
  ],
  exercises: []
};

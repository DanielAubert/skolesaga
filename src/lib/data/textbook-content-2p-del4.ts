/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 4: Sannsynlighet
 * Kapittel 4.1–4.3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Sannsynlighetsregning
// ============================================================================

export const CHAPTER_2P_4_1: TextbookChapter = {
  id: '2p-4-1',
  courseId: '2p',
  chapterNumber: '4.1',
  title: 'Sannsynlighetsregning',
  description: 'Grunnleggende sannsynlighet og sannsynlighetsregler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  content: [
    {
      id: '2p-4-1-intro',
      type: 'text',
      content: `## Sannsynlighetsregning

Sannsynlighet handler om å beregne sjansen for at noe skjer. Enten det er å vinne i Lotto, at det regner i morgen, eller at en tilfeldig valgt elev har brune øyne – alt kan beskrives med sannsynlighet.

I dette kapittelet skal du lære:
- Hva utfallsrom og hendelser er
- Hvordan beregne sannsynligheten for en hendelse
- Komplementsetningen
- Addisjonssetningen for forenlige og uforenlige hendelser
- Bruke valgtre og systematisk opptelling`,
    },

    // BLOKK 1: Utfallsrom, hendelse og sannsynlighet
    {
      id: '2p-4-1-def-sannsynlighet',
      type: 'definition',
      title: 'Utfallsrom, hendelse og sannsynlighet',
      content: `**Utfallsrommet** $\\Omega$ er mengden av alle mulige utfall i et forsøk.

En **hendelse** $A$ er en delmengde av utfallsrommet – ett eller flere utfall vi er interessert i.

Sannsynligheten for en hendelse $A$ er:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

Sannsynligheten er alltid et tall mellom 0 og 1:
- $P(A) = 0$: Hendelsen er umulig
- $P(A) = 1$: Hendelsen er sikker
- $0 < P(A) < 1$: Hendelsen kan skje, men er ikke sikker`,
    },
    {
      id: '2p-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Terningkast',
      problem: 'Du kaster en vanlig terning. Hva er sannsynligheten for å få a) 4, b) et partall, c) et tall større enn 4?',
      solution: `**Løsning:**

Utfallsrom: $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$, altså 6 mulige utfall.

a) Hendelse $A$: «få 4». Gunstige utfall: $\\{4\\}$ – 1 utfall.

$$P(A) = \\frac{1}{6}$$

b) Hendelse $B$: «partall». Gunstige utfall: $\\{2, 4, 6\\}$ – 3 utfall.

$$P(B) = \\frac{3}{6} = \\frac{1}{2}$$

c) Hendelse $C$: «tall større enn 4». Gunstige utfall: $\\{5, 6\\}$ – 2 utfall.

$$P(C) = \\frac{2}{6} = \\frac{1}{3}$$`,
    },
    {
      id: '2p-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Du trekker ett kort fra en vanlig kortstokk med 52 kort. Hva er sannsynligheten for å trekke et ess?',
        options: [
          { id: 'a', text: '$\\frac{1}{13}$', isCorrect: true },
          { id: 'b', text: '$\\frac{1}{52}$', isCorrect: false },
          { id: 'c', text: '$\\frac{1}{4}$', isCorrect: false },
          { id: 'd', text: '$\\frac{4}{13}$', isCorrect: false },
        ],
        solution: 'Det er 4 ess i en kortstokk med 52 kort. P(ess) = 4/52 = 1/13.',
      },
    },
    {
      id: '2p-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'I en pose ligger 5 røde, 3 blå og 2 grønne kuler. Du trekker én kule tilfeldig. a) Hva er sannsynligheten for å trekke en rød kule? b) Hva er sannsynligheten for å trekke en kule som ikke er blå?',
        hints: ['Totalt antall kuler: 5 + 3 + 2 = 10.'],
        solution: 'a) P(rød) = 5/10 = 1/2. b) Kuler som ikke er blå: 5 + 2 = 7. P(ikke blå) = 7/10.',
      },
    },

    // BLOKK 2: Komplementsetningen
    {
      id: '2p-4-1-def-komplement',
      type: 'definition',
      title: 'Komplementsetningen',
      content: `**Komplementhendelsen** $A'$ (leses «A komplement») er hendelsen «$A$ skjer ikke».

$$P(A') = 1 - P(A)$$

Denne regelen er nyttig når det er enklere å beregne sannsynligheten for at noe **ikke** skjer.

**Eksempel:** Sannsynligheten for å **ikke** få 6 på en terning er $P(\\text{ikke 6}) = 1 - \\frac{1}{6} = \\frac{5}{6}$.`,
    },
    {
      id: '2p-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Komplementsetningen',
      problem: 'Sannsynligheten for at det regner i morgen er 0,35. Hva er sannsynligheten for at det ikke regner?',
      solution: `**Løsning:**

La $A$ = «det regner». Da er $A'$ = «det regner ikke».

$$P(A') = 1 - P(A) = 1 - 0{,}35 = 0{,}65$$

**Svar:** Sannsynligheten for at det ikke regner er $0{,}65$ eller $65\\%$.`,
    },
    {
      id: '2p-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Sannsynligheten for at en tilfeldig valgt elev har bursdag i januar er $\\frac{31}{365}$. Hva er sannsynligheten for at eleven ikke har bursdag i januar?',
        options: [
          { id: 'a', text: '$\\frac{334}{365}$', isCorrect: true },
          { id: 'b', text: '$\\frac{31}{365}$', isCorrect: false },
          { id: 'c', text: '$\\frac{1}{12}$', isCorrect: false },
          { id: 'd', text: '$\\frac{11}{12}$', isCorrect: false },
        ],
        solution: 'P(ikke januar) = 1 − 31/365 = 334/365.',
      },
    },

    // BLOKK 3: Addisjonssetningen
    {
      id: '2p-4-1-def-addisjon',
      type: 'definition',
      title: 'Addisjonssetningen',
      content: `**Uforenlige hendelser** er hendelser som ikke kan skje samtidig (de har ingen felles utfall).

For **uforenlige** hendelser $A$ og $B$:
$$P(A \\cup B) = P(A) + P(B)$$

For **forenlige** hendelser (kan skje samtidig):
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

Vi trekker fra $P(A \\cap B)$ fordi de felles utfallene ellers telles dobbelt.`,
    },
    {
      id: '2p-4-1-example-3',
      type: 'example',
      title: 'Eksempel: Addisjonssetningen',
      problem: 'Du trekker ett kort fra en kortstokk. Hva er sannsynligheten for å trekke et ess eller et hjertekort?',
      solution: `**Løsning:**

$A$: «trekke ess» → $P(A) = \\frac{4}{52}$

$B$: «trekke hjerter» → $P(B) = \\frac{13}{52}$

Hendelsene er **forenlige** – hjerter-ess er både ess og hjerter.

$P(A \\cap B) = \\frac{1}{52}$ (hjerter-ess)

$$P(A \\cup B) = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

**Svar:** Sannsynligheten er $\\frac{4}{13} \\approx 0{,}31$.`,
    },
    {
      id: '2p-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'I en klasse er det 30 elever. 18 spiller fotball, 12 spiller håndball, og 5 spiller begge deler. a) Er hendelsene «spiller fotball» og «spiller håndball» forenlige eller uforenlige? b) Hva er sannsynligheten for at en tilfeldig valgt elev spiller fotball eller håndball?',
        hints: ['Bruk addisjonssetningen for forenlige hendelser.'],
        solution: 'a) Forenlige – 5 elever spiller begge deler. b) P(F ∪ H) = 18/30 + 12/30 − 5/30 = 25/30 = 5/6.',
      },
    },

    // BLOKK 4: Valgtre / treediagram
    {
      id: '2p-4-1-def-valgtre',
      type: 'definition',
      title: 'Valgtre (treediagram)',
      content: `Et **valgtre** (treediagram) er et verktøy for å visualisere alle mulige utfall i forsøk med flere trinn.

Regler for valgtre:
1. Hvert forgreningspunkt viser de mulige utfallene i ett trinn
2. Langs grenene skrives sannsynlighetene
3. **Multiplikasjonsregelen**: Sannsynligheten for en sti = produktet av sannsynlighetene langs stien
4. **Addisjonsregelen**: Sannsynligheten for en hendelse = summen av sannsynlighetene for alle stier som gir hendelsen

Summen av alle sannsynlighetene i endepunktene skal alltid bli 1.`,
    },
    {
      id: '2p-4-1-example-4',
      type: 'example',
      title: 'Eksempel: Valgtre med to myntkast',
      problem: 'Du kaster en mynt to ganger. Bruk et valgtre til å finne sannsynligheten for å få minst én mynt (krone).',
      solution: `**Løsning:**

Valgtreet:
- 1. kast: Krone ($\\frac{1}{2}$) eller Mynt ($\\frac{1}{2}$)
- 2. kast: Krone ($\\frac{1}{2}$) eller Mynt ($\\frac{1}{2}$) for hver gren

Alle stier:
| Utfall | Sannsynlighet |
|--------|---------------|
| KK | $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ |
| KM | $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ |
| MK | $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ |
| MM | $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ |

«Minst én krone» = KK, KM, MK → $P = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{3}{4}$

**Svar:** Sannsynligheten er $\\frac{3}{4} = 0{,}75$.`,
    },
    {
      id: '2p-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'En pose inneholder 3 røde og 2 blå kuler. Du trekker to kuler etter hverandre uten tilbakelegging. Tegn et valgtre og finn sannsynligheten for å trekke to røde kuler.',
        hints: ['Etter første trekk endres antall kuler i posen. Bruk betingede sannsynligheter i treet.'],
        solution: 'P(R₁) = 3/5. Etter rød: 2 røde, 2 blå igjen. P(R₂|R₁) = 2/4 = 1/2. P(RR) = 3/5 · 1/2 = 3/10.',
      },
    },

    // BLOKK 5: Systematisk opptelling
    {
      id: '2p-4-1-text-opptelling',
      type: 'text',
      content: `### Systematisk opptelling

Når vi skal finne antall mulige utfall, bruker vi **systematisk opptelling**. To viktige prinsipper:

**Multiplikasjonsprinsippet:** Hvis valg 1 kan gjøres på $m$ måter og valg 2 på $n$ måter, kan begge gjøres på $m \\cdot n$ måter.

**Eksempel:** En pizzarestaurant har 3 bunner og 5 fyllinger. Antall kombinasjoner: $3 \\cdot 5 = 15$.

Systematisk opptelling er grunnlaget for å finne utfallsrommet i mer sammensatte forsøk.`,
    },
    {
      id: '2p-4-1-example-5',
      type: 'example',
      title: 'Eksempel: Multiplikasjonsprinsippet',
      problem: 'En PIN-kode består av 4 siffer (0–9). Hvor mange mulige PIN-koder finnes? Hva er sannsynligheten for å gjette riktig på første forsøk?',
      solution: `**Løsning:**

Hvert siffer kan velges på 10 måter (0, 1, 2, ..., 9).

Antall mulige PIN-koder: $10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$

$$P(\\text{riktig gjett}) = \\frac{1}{10\\,000} = 0{,}0001 = 0{,}01\\%$$

**Svar:** Det er 10 000 mulige PIN-koder, og sannsynligheten for å gjette riktig er $0{,}01\\%$.`,
    },
    {
      id: '2p-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Et passord skal bestå av 2 bokstaver (A–Z, 26 muligheter) etterfulgt av 3 siffer (0–9). Hvor mange mulige passord finnes?',
        options: [
          { id: 'a', text: '$676\\,000$', isCorrect: true },
          { id: 'b', text: '$36^5 = 60\\,466\\,176$', isCorrect: false },
          { id: 'c', text: '$26 + 26 + 10 + 10 + 10 = 82$', isCorrect: false },
          { id: 'd', text: '$260\\,000$', isCorrect: false },
        ],
        solution: 'Multiplikasjonsprinsippet: 26 · 26 · 10 · 10 · 10 = 676 000.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sannsynlighet**: $P(A) = \\frac{\\text{gunstige}}{\\text{mulige}}$, alltid mellom 0 og 1
- **Komplementsetningen**: $P(A') = 1 - P(A)$
- **Uforenlige hendelser**: $P(A \\cup B) = P(A) + P(B)$
- **Forenlige hendelser**: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
- **Valgtre**: Multipliser langs stier, adder mellom stier
- **Multiplikasjonsprinsippet**: $m \\cdot n$ kombinasjoner for uavhengige valg

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Utfallsrom | Mengden av alle mulige utfall |
| Hendelse | En delmengde av utfallsrommet |
| Uforenlige hendelser | Hendelser som ikke kan skje samtidig |
| Komplement | Det motsatte av en hendelse |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-4-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'I et lotteri er det 100 lodd, hvorav 20 gevinster. Du kjøper 3 lodd. a) Hva er sannsynligheten for at det første loddet gir gevinst? b) Bruk et valgtre til å finne sannsynligheten for at nøyaktig 2 av 3 lodd gir gevinst (uten tilbakelegging). c) Hva er sannsynligheten for at du vinner minst én gevinst?',
        hints: ['c) Bruk komplementsetningen: P(minst 1 gevinst) = 1 − P(ingen gevinst).'],
        solution: 'a) P(gevinst) = 20/100 = 1/5. b) Tre stier gir nøyaktig 2 gevinster: GGI, GIG, IGG. P(GGI) = 20/100 · 19/99 · 80/98 ≈ 0,0314. P(GIG) = 20/100 · 80/99 · 19/98 ≈ 0,0314. P(IGG) = 80/100 · 20/99 · 19/98 ≈ 0,0314. P(nøyaktig 2) ≈ 3 · 0,0314 ≈ 0,094. c) P(ingen gevinst) = 80/100 · 79/99 · 78/98 ≈ 0,508. P(minst 1) = 1 − 0,508 ≈ 0,492.',
      },
    },
    {
      id: '2p-4-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en undersøkelse blant 200 elever viser det seg at 120 liker fotball, 90 liker håndball, 60 liker basketball, 40 liker både fotball og håndball, 30 liker både fotball og basketball, 20 liker både håndball og basketball, og 10 liker alle tre idretter. a) Tegn et Venn-diagram og fyll inn antall elever i hvert område. b) Hva er sannsynligheten for at en tilfeldig valgt elev liker minst én av idrettene? c) Hva er sannsynligheten for at eleven liker nøyaktig én idrett?',
        solution: 'a) Bruk inklusjon-eksklusjon. |F ∪ H ∪ B| = 120 + 90 + 60 − 40 − 30 − 20 + 10 = 190. Bare fotball: 120 − 40 − 30 + 10 = 60. Bare håndball: 90 − 40 − 20 + 10 = 40. Bare basketball: 60 − 30 − 20 + 10 = 20. b) P(minst én) = 190/200 = 19/20 = 0,95. c) Nøyaktig én: 60 + 40 + 20 = 120. P(nøyaktig én) = 120/200 = 3/5 = 0,60.',
      },
    },
    {
      id: '2p-4-1-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-4-1-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Du kaster to terninger. Hva er sannsynligheten for at summen er minst 10?',
        options: [
          { id: 'a', text: '$\\frac{6}{36} = \\frac{1}{6}$', isCorrect: true },
          { id: 'b', text: '$\\frac{3}{36} = \\frac{1}{12}$', isCorrect: false },
          { id: 'c', text: '$\\frac{4}{36} = \\frac{1}{9}$', isCorrect: false },
          { id: 'd', text: '$\\frac{10}{36} = \\frac{5}{18}$', isCorrect: false },
        ],
        solution: 'Totalt 36 utfall. Sum 10: (4,6), (5,5), (6,4) = 3 utfall. Sum 11: (5,6), (6,5) = 2 utfall. Sum 12: (6,6) = 1 utfall. Totalt gunstige: 3 + 2 + 1 = 6. P(sum ≥ 10) = 6/36 = 1/6.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Utfallsrom', definition: 'Mengden av alle mulige utfall i et forsøk' },
    { term: 'Hendelse', definition: 'En delmengde av utfallsrommet vi er interessert i' },
    { term: 'Sannsynlighet', definition: 'P(A) = gunstige utfall / mulige utfall' },
    { term: 'Komplementhendelse', definition: 'A\' – hendelsen «A skjer ikke»' },
    { term: 'Uforenlige hendelser', definition: 'Hendelser som ikke kan skje samtidig' },
    { term: 'Valgtre', definition: 'Diagram for å visualisere alle mulige utfall i flertrinns forsøk' },
  ],
};

// ============================================================================
// Kapittel 4.2: Betinget sannsynlighet
// ============================================================================

export const CHAPTER_2P_4_2: TextbookChapter = {
  id: '2p-4-2',
  courseId: '2p',
  chapterNumber: '4.2',
  title: 'Betinget sannsynlighet',
  description: 'Betinget sannsynlighet og uavhengige hendelser.',
  estimatedMinutes: 55,
  prerequisites: ['2p-4-1'],
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  content: [
    {
      id: '2p-4-2-intro',
      type: 'text',
      content: `## Betinget sannsynlighet

Noen ganger vet vi at noe allerede har skjedd, og vi vil finne sannsynligheten for noe annet gitt denne informasjonen. For eksempel: Hva er sannsynligheten for at en person er syk, gitt at en test er positiv?

I dette kapittelet skal du lære:
- Hva betinget sannsynlighet er og hvordan den beregnes
- Multiplikasjonssetningen
- Forskjellen mellom avhengige og uavhengige hendelser
- Bruke treediagram for betinget sannsynlighet
- Praktiske anvendelser som medisinsk testing og kvalitetskontroll`,
    },

    // BLOKK 1: Betinget sannsynlighet
    {
      id: '2p-4-2-def-betinget',
      type: 'definition',
      title: 'Betinget sannsynlighet',
      content: `**Betinget sannsynlighet** er sannsynligheten for en hendelse $B$, gitt at hendelse $A$ allerede har inntruffet. Vi skriver $P(B|A)$ og leser «sannsynligheten for $B$ gitt $A$».

$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$

Forutsetning: $P(A) > 0$.

**Tolkning:** Vi innskrenker utfallsrommet til bare de utfallene der $A$ har skjedd, og beregner andelen av disse der også $B$ skjer.`,
    },
    {
      id: '2p-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Betinget sannsynlighet med tabell',
      problem: 'I en klasse med 30 elever spiller 18 fotball og 8 spiller håndball. 4 elever spiller begge deler. En tilfeldig elev velges. Hva er sannsynligheten for at eleven spiller håndball, gitt at eleven spiller fotball?',
      solution: `**Løsning:**

$A$: «spiller fotball», $B$: «spiller håndball»

$P(A) = \\frac{18}{30}$, $P(A \\cap B) = \\frac{4}{30}$

$$P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{4/30}{18/30} = \\frac{4}{18} = \\frac{2}{9} \\approx 0{,}22$$

**Svar:** Gitt at eleven spiller fotball, er sannsynligheten for at eleven også spiller håndball $\\frac{2}{9} \\approx 22\\%$.`,
    },
    {
      id: '2p-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'I en undersøkelse svarer 60 % av elevene at de liker matte, og 20 % liker både matte og naturfag. Hva er sannsynligheten for at en elev liker naturfag, gitt at eleven liker matte?',
        options: [
          { id: 'a', text: '$\\frac{1}{3}$', isCorrect: true },
          { id: 'b', text: '$\\frac{1}{5}$', isCorrect: false },
          { id: 'c', text: '$\\frac{3}{5}$', isCorrect: false },
          { id: 'd', text: '$\\frac{2}{5}$', isCorrect: false },
        ],
        solution: 'P(naturfag | matte) = P(matte og naturfag) / P(matte) = 0,20 / 0,60 = 1/3.',
      },
    },
    {
      id: '2p-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Tabellen viser fordelingen av 200 elever etter kjønn og foretrukket fag:\n\n| | Matte | Norsk | Totalt |\n|---|---|---|---|\n| Gutt | 50 | 40 | 90 |\n| Jente | 60 | 50 | 110 |\n| Totalt | 110 | 90 | 200 |\n\na) Hva er sannsynligheten for at en tilfeldig valgt elev foretrekker matte, gitt at eleven er jente? b) Hva er sannsynligheten for at eleven er gutt, gitt at eleven foretrekker norsk?',
        solution: 'a) P(matte | jente) = 60/110 = 6/11 ≈ 0,545. b) P(gutt | norsk) = 40/90 = 4/9 ≈ 0,444.',
      },
    },

    // BLOKK 2: Multiplikasjonssetningen
    {
      id: '2p-4-2-def-multiplikasjon',
      type: 'definition',
      title: 'Multiplikasjonssetningen',
      content: `**Multiplikasjonssetningen** følger direkte fra definisjonen av betinget sannsynlighet:

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

Dette betyr: Sannsynligheten for at **både** $A$ og $B$ skjer er sannsynligheten for $A$ multiplisert med sannsynligheten for $B$ gitt at $A$ har skjedd.

**Generelt** for flere hendelser:
$$P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)$$`,
    },
    {
      id: '2p-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Trekke kuler uten tilbakelegging',
      problem: 'En pose inneholder 6 røde og 4 blå kuler. Du trekker to kuler uten tilbakelegging. Hva er sannsynligheten for at begge er røde?',
      solution: `**Løsning:**

$A$: «første kule er rød», $B$: «andre kule er rød»

$P(A) = \\frac{6}{10} = \\frac{3}{5}$

Etter at vi har trukket én rød kule, er det 5 røde og 4 blå igjen (9 kuler totalt):

$P(B|A) = \\frac{5}{9}$

$$P(A \\cap B) = P(A) \\cdot P(B|A) = \\frac{3}{5} \\cdot \\frac{5}{9} = \\frac{15}{45} = \\frac{1}{3}$$

**Svar:** Sannsynligheten for to røde kuler er $\\frac{1}{3} \\approx 0{,}33$.`,
    },
    {
      id: '2p-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'I en skål ligger 8 sjokolader: 5 med nøtter og 3 uten nøtter. Du tar tilfeldig to sjokolader etter hverandre (uten tilbakelegging). a) Hva er sannsynligheten for at begge har nøtter? b) Hva er sannsynligheten for at den andre sjokoladen har nøtter, gitt at den første ikke hadde nøtter?',
        hints: ['Bruk multiplikasjonssetningen. Husk at antallet endres etter første trekk.'],
        solution: 'a) P(N₁ og N₂) = 5/8 · 4/7 = 20/56 = 5/14 ≈ 0,357. b) Gitt at første ikke har nøtter: 5 nøtter og 2 uten igjen (7 totalt). P(N₂|ikke N₁) = 5/7 ≈ 0,714.',
      },
    },

    // BLOKK 3: Uavhengige hendelser
    {
      id: '2p-4-2-def-uavhengige',
      type: 'definition',
      title: 'Uavhengige hendelser',
      content: `To hendelser $A$ og $B$ er **uavhengige** dersom utfallet av den ene ikke påvirker sannsynligheten for den andre:

$$P(B|A) = P(B) \\quad \\text{og} \\quad P(A|B) = P(A)$$

For uavhengige hendelser forenkles multiplikasjonssetningen til:

$$P(A \\cap B) = P(A) \\cdot P(B)$$

**Eksempler på uavhengige hendelser:**
- To terningkast
- Trekke med tilbakelegging
- Myntkast og terningkast

**Eksempler på avhengige hendelser:**
- Trekke uten tilbakelegging
- Hendelser i samme populasjon som overlapper`,
    },
    {
      id: '2p-4-2-example-3',
      type: 'example',
      title: 'Eksempel: Uavhengige hendelser',
      problem: 'Sannsynligheten for at en buss er forsinket er 0,15. To busser kjører uavhengig av hverandre. Hva er sannsynligheten for at a) begge er forsinket, b) ingen er forsinket, c) nøyaktig én er forsinket?',
      solution: `**Løsning:**

La $p = 0{,}15$ (forsinket) og $q = 1 - 0{,}15 = 0{,}85$ (i rute).

a) $P(\\text{begge forsinket}) = p \\cdot p = 0{,}15^2 = 0{,}0225$

b) $P(\\text{ingen forsinket}) = q \\cdot q = 0{,}85^2 = 0{,}7225$

c) «Nøyaktig én» kan skje på to måter: første forsinket + andre i rute, eller omvendt.

$P(\\text{nøyaktig én}) = p \\cdot q + q \\cdot p = 2 \\cdot 0{,}15 \\cdot 0{,}85 = 0{,}255$

**Kontroll:** $0{,}0225 + 0{,}7225 + 0{,}255 = 1{,}00$ ✓`,
    },
    {
      id: '2p-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Sannsynligheten for å bestå en eksamen er 0,80. To elever tar eksamen uavhengig av hverandre. Hva er sannsynligheten for at begge består?',
        options: [
          { id: 'a', text: '$0{,}64$', isCorrect: true },
          { id: 'b', text: '$0{,}80$', isCorrect: false },
          { id: 'c', text: '$1{,}60$', isCorrect: false },
          { id: 'd', text: '$0{,}40$', isCorrect: false },
        ],
        solution: 'Uavhengige hendelser: P(begge består) = 0,80 · 0,80 = 0,64.',
      },
    },

    // BLOKK 4: Treediagram for betinget sannsynlighet
    {
      id: '2p-4-2-text-tre-betinget',
      type: 'text',
      content: `### Treediagram for betinget sannsynlighet

Treediagram er spesielt nyttig for å visualisere betinget sannsynlighet. Langs hver gren skriver vi den **betingede** sannsynligheten for det aktuelle utfallet.

For å finne sannsynligheten for en bestemt sti, multipliserer vi sannsynlighetene langs stien. For å finne den totale sannsynligheten for en hendelse, summerer vi alle stier som fører til hendelsen.

**Totalsetningen for sannsynlighet:**
$$P(B) = P(A) \\cdot P(B|A) + P(A') \\cdot P(B|A')$$`,
    },
    {
      id: '2p-4-2-example-4',
      type: 'example',
      title: 'Eksempel: Treediagram – kvalitetskontroll',
      problem: 'En fabrikk har to maskiner. Maskin A produserer 60 % av varene, og maskin B produserer 40 %. Maskin A har 2 % feilrate, mens maskin B har 5 % feilrate. Hva er sannsynligheten for at en tilfeldig valgt vare er defekt?',
      solution: `**Løsning:**

Treediagram:
- Maskin A (0,60): Defekt (0,02) | OK (0,98)
- Maskin B (0,40): Defekt (0,05) | OK (0,95)

Totalsetningen:
$$P(\\text{defekt}) = P(A) \\cdot P(D|A) + P(B) \\cdot P(D|B)$$
$$= 0{,}60 \\cdot 0{,}02 + 0{,}40 \\cdot 0{,}05$$
$$= 0{,}012 + 0{,}020 = 0{,}032$$

**Svar:** Sannsynligheten for at en tilfeldig vare er defekt er $3{,}2\\%$.`,
    },
    {
      id: '2p-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'En sykdom rammer 1 % av befolkningen. En test for sykdommen gir positivt resultat hos 95 % av de syke (sensitivitet), men gir også falskt positivt hos 3 % av de friske. a) Tegn et treediagram for situasjonen. b) Hva er sannsynligheten for at en tilfeldig person tester positivt? c) Hva er sannsynligheten for at en person faktisk er syk, gitt at testen er positiv?',
        hints: ['Bruk totalsetningen for b). For c), bruk definisjonen av betinget sannsynlighet: P(syk|positiv) = P(syk og positiv) / P(positiv).'],
        solution: 'a) Syk (0,01): Positiv (0,95) | Negativ (0,05). Frisk (0,99): Positiv (0,03) | Negativ (0,97). b) P(positiv) = 0,01 · 0,95 + 0,99 · 0,03 = 0,0095 + 0,0297 = 0,0392. c) P(syk|positiv) = P(syk og positiv) / P(positiv) = 0,0095 / 0,0392 ≈ 0,242 = 24,2 %. Merk: Selv med positiv test er det under 25 % sjanse for å faktisk være syk!',
      },
    },

    // BLOKK 5: Praktiske eksempler
    {
      id: '2p-4-2-text-praktisk',
      type: 'text',
      content: `### Praktisk anvendelse

Betinget sannsynlighet dukker opp i mange virkelige situasjoner:

**Medisinsk testing:** Selv en nøyaktig test kan gi mange falske positive resultater hvis sykdommen er sjelden. Dette kalles **den falske positive paradoksen**.

**Kvalitetskontroll:** Fabrikker bruker betinget sannsynlighet til å vurdere om en feil skyldes en bestemt maskin.

**Rettsvesen:** DNA-bevis og fingeravtrykk tolkes med betinget sannsynlighet – det er viktig å skille mellom $P(\\text{match}|\\text{uskyldig})$ og $P(\\text{uskyldig}|\\text{match})$.`,
    },

    // OPPSUMMERING
    {
      id: '2p-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Betinget sannsynlighet**: $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$
- **Multiplikasjonssetningen**: $P(A \\cap B) = P(A) \\cdot P(B|A)$
- **Uavhengige hendelser**: $P(A \\cap B) = P(A) \\cdot P(B)$ når $A$ og $B$ ikke påvirker hverandre
- **Totalsetningen**: $P(B) = P(A) \\cdot P(B|A) + P(A') \\cdot P(B|A')$
- Treediagram er et kraftig verktøy for å organisere betingede sannsynligheter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Betinget sannsynlighet | Sannsynlighet for $B$ gitt at $A$ har skjedd |
| Uavhengige hendelser | Hendelser der den ene ikke påvirker den andre |
| Totalsetningen | Beregner $P(B)$ ved å summere over alle mulige betingelser |
| Falsk positiv | Positiv test hos en frisk person |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et flyselskap har to ruter. Rute A har 70 % av avgangene, og rute B har 30 %. Sannsynligheten for forsinkelse på rute A er 0,10, og på rute B er den 0,20. a) Hva er sannsynligheten for at en tilfeldig avgang er forsinket? b) En avgang er forsinket. Hva er sannsynligheten for at den var på rute B?',
        solution: 'a) P(forsinket) = 0,70 · 0,10 + 0,30 · 0,20 = 0,07 + 0,06 = 0,13. b) P(rute B | forsinket) = P(B og forsinket) / P(forsinket) = 0,06 / 0,13 ≈ 0,462.',
      },
    },
    {
      id: '2p-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'To venner, Ole og Kari, skal uavhengig av hverandre ta teoriprøven for førerkort. Sannsynligheten for at Ole består er 0,75 og for Kari 0,85. a) Hva er sannsynligheten for at begge består? b) Hva er sannsynligheten for at ingen av dem består? c) Hva er sannsynligheten for at minst én av dem består?',
        solution: 'a) P(begge) = 0,75 · 0,85 = 0,6375. b) P(ingen) = (1 − 0,75) · (1 − 0,85) = 0,25 · 0,15 = 0,0375. c) P(minst én) = 1 − P(ingen) = 1 − 0,0375 = 0,9625.',
      },
    },
    {
      id: '2p-4-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift kjøper komponenter fra to leverandører. Leverandør X leverer 70 % av komponentene med 3 % feilrate. Leverandør Y leverer 30 % med 7 % feilrate. a) Hva er den totale feilraten for bedriftens komponenter? b) En komponent viser seg å være defekt. Hva er sannsynligheten for at den kom fra leverandør Y? c) Bedriften vurderer å bytte til kun leverandør X. Hvor mye ville feilraten synke?',
        solution: 'a) P(defekt) = 0,70 · 0,03 + 0,30 · 0,07 = 0,021 + 0,021 = 0,042 = 4,2 %. b) P(Y | defekt) = P(Y og defekt) / P(defekt) = 0,021 / 0,042 = 0,50 = 50 %. c) Med bare leverandør X: feilrate = 3,0 %. Reduksjon: 4,2 % − 3,0 % = 1,2 prosentpoeng.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Betinget sannsynlighet', definition: 'P(B|A) – sannsynligheten for B gitt at A har skjedd' },
    { term: 'Multiplikasjonssetningen', definition: 'P(A ∩ B) = P(A) · P(B|A)' },
    { term: 'Uavhengige hendelser', definition: 'Hendelser der P(B|A) = P(B)' },
    { term: 'Totalsetningen', definition: 'P(B) = P(A)·P(B|A) + P(A\')·P(B|A\')' },
    { term: 'Falsk positiv', definition: 'Positiv test hos en person som ikke har tilstanden' },
    { term: 'Sensitivitet', definition: 'Andel syke som tester positivt' },
  ],
};

// ============================================================================
// Kapittel 4.3: Binomisk sannsynlighet
// ============================================================================

export const CHAPTER_2P_4_3: TextbookChapter = {
  id: '2p-4-3',
  courseId: '2p',
  chapterNumber: '4.3',
  title: 'Binomisk sannsynlighet',
  description: 'Binomiske forsøk og binomisk sannsynlighetsmodell.',
  estimatedMinutes: 50,
  prerequisites: ['2p-4-1'],
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  content: [
    {
      id: '2p-4-3-intro',
      type: 'text',
      content: `## Binomisk sannsynlighet

Mange situasjoner handler om gjentatte forsøk med to mulige utfall: suksess eller fiasko. Kaster du en mynt 10 ganger – hvor sannsynlig er nøyaktig 7 krone? Tar du 20 skudd i basketball med 60 % treffprosent – hva er sjansen for minst 15 treff?

I dette kapittelet skal du lære:
- Hva et binomisk forsøk er
- Bruke den binomiske sannsynlighetsformelen
- Beregne forventningsverdi og standardavvik
- Bruke digitale verktøy for binomisk sannsynlighet`,
    },

    // BLOKK 1: Binomiske forsøk
    {
      id: '2p-4-3-def-binomisk',
      type: 'definition',
      title: 'Binomisk forsøk',
      content: `Et **binomisk forsøk** har fire kjennetegn:

1. **Fast antall forsøk** $n$
2. **To mulige utfall** i hvert forsøk: «suksess» eller «fiasko»
3. **Fast sannsynlighet** $p$ for suksess i hvert forsøk
4. **Uavhengige** forsøk – utfallet i ett forsøk påvirker ikke de andre

Den stokastiske variabelen $X$ = «antall suksesser» følger en **binomisk fordeling**.

Vi skriver $X \\sim \\text{Bin}(n, p)$.

**Eksempler:**
- Kaste mynt 10 ganger ($n = 10$, $p = 0{,}5$)
- 20 basketballskudd med 60 % treffprosent ($n = 20$, $p = 0{,}6$)
- 15 flervalgsoppgaver med 4 alternativer, ren gjetting ($n = 15$, $p = 0{,}25$)`,
    },
    {
      id: '2p-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Er forsøket binomisk?',
      problem: 'Avgjør om følgende forsøk er binomiske:\n\na) Du kaster en terning 8 ganger og teller antall seksere.\nb) Du trekker 5 kort fra en kortstokk uten tilbakelegging og teller antall ess.\nc) Du svarer på 12 sant/usant-spørsmål ved å gjette tilfeldig.',
      solution: `**Løsning:**

a) **Ja, binomisk.** $n = 8$, suksess = «6», $p = \\frac{1}{6}$. Kastene er uavhengige og $p$ er konstant.

b) **Nei, ikke binomisk.** Trekking uten tilbakelegging gjør forsøkene avhengige. $p$ endrer seg for hvert trekk (men kan tilnærmes som binomisk hvis kortstokken er stor nok).

c) **Ja, binomisk.** $n = 12$, suksess = «riktig svar», $p = 0{,}5$. Spørsmålene er uavhengige ved ren gjetting.`,
    },
    {
      id: '2p-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et binomisk forsøk?',
        options: [
          { id: 'a', text: 'Kaste en mynt 50 ganger og telle antall krone', isCorrect: true },
          { id: 'b', text: 'Trekke 10 kuler fra en pose med 20 kuler uten tilbakelegging', isCorrect: false },
          { id: 'c', text: 'Måle høyden til 30 tilfeldig valgte elever', isCorrect: false },
          { id: 'd', text: 'Telle antall biler som passerer et punkt i løpet av en time', isCorrect: false },
        ],
        solution: 'a) er binomisk: fast n = 50, to utfall (krone/mynt), fast p = 0,5, uavhengige kast. b) er ikke binomisk pga. avhengighet (uten tilbakelegging). c) har ikke to utfall. d) har ikke fast n.',
      },
    },

    // BLOKK 2: Binomisk sannsynlighetsformel
    {
      id: '2p-4-3-def-formel',
      type: 'definition',
      title: 'Binomisk sannsynlighetsformel',
      content: `Sannsynligheten for nøyaktig $k$ suksesser i $n$ forsøk med suksesssannsynlighet $p$:

$$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$$

der **binomialkoeffisienten** er:

$$\\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$$

Binomialkoeffisienten $\\binom{n}{k}$ forteller oss på hvor mange måter vi kan velge $k$ suksesser blant $n$ forsøk.

**Forklaring av formelen:**
- $p^k$: sannsynligheten for $k$ suksesser
- $(1-p)^{n-k}$: sannsynligheten for $n-k$ fiaskoer
- $\\binom{n}{k}$: antall rekkefølger dette kan skje på`,
    },
    {
      id: '2p-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Binomisk sannsynlighet',
      problem: 'Du kaster en terning 5 ganger. Hva er sannsynligheten for å få nøyaktig 2 seksere?',
      solution: `**Løsning:**

$n = 5$, $k = 2$, $p = \\frac{1}{6}$

Binomialkoeffisient: $\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{120}{2 \\cdot 6} = 10$

$$P(X = 2) = \\binom{5}{2} \\cdot \\left(\\frac{1}{6}\\right)^2 \\cdot \\left(\\frac{5}{6}\\right)^3$$

$$= 10 \\cdot \\frac{1}{36} \\cdot \\frac{125}{216} = 10 \\cdot \\frac{125}{7776} = \\frac{1250}{7776} \\approx 0{,}161$$

**Svar:** Sannsynligheten for nøyaktig 2 seksere er ca. $16{,}1\\%$.`,
    },
    {
      id: '2p-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'En flervalgsoppgave har 4 alternativer der ett er riktig. En elev gjetter tilfeldig på 8 oppgaver. a) Hva er sannsynligheten for å få nøyaktig 3 riktige? b) Hva er sannsynligheten for å få 0 riktige?',
        hints: ['n = 8, p = 1/4 = 0,25. Bruk binomisk formel.'],
        solution: 'a) P(X = 3) = C(8,3) · 0,25³ · 0,75⁵ = 56 · 0,015625 · 0,2373 ≈ 0,208. b) P(X = 0) = C(8,0) · 0,25⁰ · 0,75⁸ = 1 · 1 · 0,1001 ≈ 0,100.',
      },
    },
    {
      id: '2p-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er verdien av binomialkoeffisienten $\\binom{6}{2}$?',
        options: [
          { id: 'a', text: '15', isCorrect: true },
          { id: 'b', text: '12', isCorrect: false },
          { id: 'c', text: '30', isCorrect: false },
          { id: 'd', text: '36', isCorrect: false },
        ],
        solution: 'C(6,2) = 6! / (2! · 4!) = (6 · 5) / (2 · 1) = 30/2 = 15.',
      },
    },

    // BLOKK 3: Forventningsverdi og standardavvik
    {
      id: '2p-4-3-def-forventning',
      type: 'definition',
      title: 'Forventningsverdi og standardavvik',
      content: `For en binomisk fordeling $X \\sim \\text{Bin}(n, p)$:

**Forventningsverdi** (gjennomsnittlig antall suksesser):
$$E(X) = \\mu = n \\cdot p$$

**Standardavvik** (mål på spredning):
$$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$$

**Tolkning:**
- $E(X)$ er det antallet suksesser vi forventer «i snitt» over mange gjentakelser
- $\\sigma$ forteller hvor mye resultatet typisk avviker fra forventningen
- De fleste resultater vil ligge innenfor $\\mu \\pm 2\\sigma$`,
    },
    {
      id: '2p-4-3-example-3',
      type: 'example',
      title: 'Eksempel: Forventningsverdi og standardavvik',
      problem: 'En basketballspiller treffer 70 % av straffekastene. Hun tar 20 straffekast. Finn forventningsverdi og standardavvik for antall treff.',
      solution: `**Løsning:**

$X \\sim \\text{Bin}(20,\\; 0{,}70)$

Forventningsverdi:
$$E(X) = n \\cdot p = 20 \\cdot 0{,}70 = 14$$

Standardavvik:
$$\\sigma = \\sqrt{n \\cdot p \\cdot (1-p)} = \\sqrt{20 \\cdot 0{,}70 \\cdot 0{,}30} = \\sqrt{4{,}2} \\approx 2{,}05$$

**Tolkning:** Vi forventer ca. 14 treff, med typiske svingninger på $\\pm 2 \\cdot 2{,}05 \\approx \\pm 4$. De fleste gangene vil hun treffe mellom 10 og 18 av 20.`,
    },
    {
      id: '2p-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'En fabrikk produserer lyspærer med 4 % feilrate. I en pakke med 25 lyspærer: a) Hva er forventet antall defekte lyspærer? b) Hva er standardavviket? c) Ville det vært overraskende å finne 5 defekte lyspærer i en pakke? Begrunn svaret.',
        hints: ['c) Sammenlign med forventningsverdi og bruk tommelfingerregelen μ ± 2σ.'],
        solution: 'a) E(X) = 25 · 0,04 = 1,0. b) σ = √(25 · 0,04 · 0,96) = √0,96 ≈ 0,98. c) μ + 2σ = 1,0 + 2 · 0,98 = 2,96. Siden 5 > 2,96, er 5 defekte utenfor intervallet μ ± 2σ, og det ville vært overraskende.',
      },
    },
    {
      id: '2p-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En stokastisk variabel $X \\sim \\text{Bin}(100,\\; 0{,}3)$. Hva er forventningsverdien $E(X)$?',
        options: [
          { id: 'a', text: '30', isCorrect: true },
          { id: 'b', text: '70', isCorrect: false },
          { id: 'c', text: '21', isCorrect: false },
          { id: 'd', text: '0,3', isCorrect: false },
        ],
        solution: 'E(X) = n · p = 100 · 0,3 = 30.',
      },
    },

    // BLOKK 4: Digitale verktøy
    {
      id: '2p-4-3-text-digitale',
      type: 'text',
      content: `### Bruke digitale verktøy for binomisk sannsynlighet

For større verdier av $n$ og $k$ er det upraktisk å regne for hånd. Da bruker vi digitale verktøy.

**GeoGebra CAS:**
- $\\texttt{BinomialKoeffisient(n, k)}$ – beregner $\\binom{n}{k}$
- $\\texttt{Binomial(n, p, k)}$ – beregner $P(X = k)$
- $\\texttt{Binomial(n, p, k, true)}$ – beregner $P(X \\leq k)$ (kumulativ)

**Regneark / Excel:**
- \`=BINOM.FORDELING(k; n; p; USANN)\` for $P(X = k)$
- \`=BINOM.FORDELING(k; n; p; SANN)\` for $P(X \\leq k)$

**Tips:** For $P(X \\geq k)$, bruk komplementet:
$$P(X \\geq k) = 1 - P(X \\leq k-1)$$`,
    },
    {
      id: '2p-4-3-example-4',
      type: 'example',
      title: 'Eksempel: Bruke kumulativ binomisk sannsynlighet',
      problem: 'En elev gjetter tilfeldig på en prøve med 20 sant/usant-spørsmål ($p = 0{,}5$). Hva er sannsynligheten for å få minst 15 riktige?',
      solution: `**Løsning:**

$X \\sim \\text{Bin}(20,\\; 0{,}5)$

Vi skal finne $P(X \\geq 15) = 1 - P(X \\leq 14)$.

Med GeoGebra: $P(X \\leq 14) = \\texttt{Binomial(20, 0.5, 14, true)} \\approx 0{,}9793$

$$P(X \\geq 15) = 1 - 0{,}9793 = 0{,}0207$$

**Svar:** Sannsynligheten for minst 15 riktige ved ren gjetting er ca. $2{,}1\\%$. Det er svært usannsynlig.`,
    },
    {
      id: '2p-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'En spørreundersøkelse viser at 40 % av ungdommer foretrekker streaming fremfor tradisjonell TV. Du spør 15 tilfeldig valgte ungdommer. a) Hva er sannsynligheten for at nøyaktig 6 foretrekker streaming? b) Bruk digitale verktøy til å finne sannsynligheten for at færre enn 4 foretrekker streaming.',
        hints: ['a) Bruk formelen med n = 15, p = 0,40, k = 6. b) P(X < 4) = P(X ≤ 3). Bruk kumulativ binomisk.'],
        solution: 'a) P(X = 6) = C(15,6) · 0,40⁶ · 0,60⁹ = 5005 · 0,004096 · 0,01008 ≈ 0,207. b) P(X ≤ 3) = Binomial(15, 0.4, 3, true) ≈ 0,091.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Binomisk forsøk**: Fast $n$, to utfall, fast $p$, uavhengige forsøk
- **Binomisk formel**: $P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$
- **Forventningsverdi**: $E(X) = np$
- **Standardavvik**: $\\sigma = \\sqrt{np(1-p)}$
- **Kumulativ**: $P(X \\leq k)$ beregnes lettest med digitale verktøy
- **Komplement**: $P(X \\geq k) = 1 - P(X \\leq k-1)$

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Binomisk forsøk | Forsøk med $n$ uavhengige repetisjoner med to utfall |
| Binomialkoeffisient | $\\binom{n}{k}$ – antall måter å velge $k$ av $n$ |
| Forventningsverdi | Gjennomsnittlig antall suksesser: $np$ |
| Standardavvik | Typisk spredning rundt forventningen |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-4-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kvalitetskontrollør tester 10 produkter fra en produksjonslinje der 8 % er defekte. a) Hva er sannsynligheten for at ingen av de 10 produktene er defekte? b) Hva er sannsynligheten for at minst 1 produkt er defekt? c) Hva er forventet antall defekte produkter og standardavviket?',
        solution: 'a) P(X = 0) = C(10,0) · 0,08⁰ · 0,92¹⁰ = 0,92¹⁰ ≈ 0,434. b) P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,434 ≈ 0,566. c) E(X) = 10 · 0,08 = 0,8. σ = √(10 · 0,08 · 0,92) = √0,736 ≈ 0,858.',
      },
    },
    {
      id: '2p-4-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I et TV-quizshow svarer en deltaker på 12 spørsmål. Hvert spørsmål har 3 alternativer. Deltakeren gjetter tilfeldig på alle. a) Hva er sannsynligheten for å få nøyaktig 4 riktige? b) For å gå videre må deltakeren ha minst 8 riktige. Bruk digitale verktøy til å finne denne sannsynligheten. c) Hvor mange riktige svar er det rimelig å forvente? Begrunn svaret med forventningsverdi og standardavvik.',
        solution: 'X ~ Bin(12, 1/3). a) P(X = 4) = C(12,4) · (1/3)⁴ · (2/3)⁸ = 495 · (1/81) · (256/6561) = 495 · 256/531441 ≈ 0,238. b) P(X ≥ 8) = 1 − P(X ≤ 7). Med digitalt verktøy: P(X ≤ 7) ≈ 0,9972, så P(X ≥ 8) ≈ 0,0028 = 0,28 %. Svært usannsynlig! c) E(X) = 12 · 1/3 = 4. σ = √(12 · 1/3 · 2/3) = √(8/3) ≈ 1,63. Det er rimelig å forvente ca. 4 riktige, typisk mellom 1 og 7 (μ ± 2σ).',
      },
    },
    {
      id: '2p-4-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-4-3-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En stokastisk variabel $X \\sim \\text{Bin}(50,\\; 0{,}2)$. Hva er standardavviket $\\sigma$?',
        options: [
          { id: 'a', text: '$\\sqrt{8} \\approx 2{,}83$', isCorrect: true },
          { id: 'b', text: '$10$', isCorrect: false },
          { id: 'c', text: '$\\sqrt{10} \\approx 3{,}16$', isCorrect: false },
          { id: 'd', text: '$8$', isCorrect: false },
        ],
        solution: 'σ = √(np(1−p)) = √(50 · 0,2 · 0,8) = √8 ≈ 2,83.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Binomisk forsøk', definition: 'Forsøk med fast n, to utfall, fast p og uavhengighet' },
    { term: 'Binomialkoeffisient', definition: 'C(n,k) = n! / (k!(n−k)!) – antall måter å velge k av n' },
    { term: 'Binomisk formel', definition: 'P(X=k) = C(n,k) · p^k · (1−p)^(n−k)' },
    { term: 'Forventningsverdi', definition: 'E(X) = np – gjennomsnittlig antall suksesser' },
    { term: 'Standardavvik', definition: 'σ = √(np(1−p)) – mål på spredning' },
    { term: 'Kumulativ sannsynlighet', definition: 'P(X ≤ k) – sannsynligheten for høyst k suksesser' },
  ],
};

// Eksporter alle kapitler i seksjon 4
export const MATEMATIKK_2P_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_4_1,
  CHAPTER_2P_4_2,
  CHAPTER_2P_4_3,
];

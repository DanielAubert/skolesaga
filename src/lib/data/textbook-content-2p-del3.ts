/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 3: Statistikk
 * Kapittel 3.1–3.3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Beskrivende statistikk
// ============================================================================

export const CHAPTER_2P_3_1: TextbookChapter = {
  id: '2p-3-1',
  courseId: '2p',
  chapterNumber: '3.1',
  title: 'Beskrivende statistikk',
  description: 'Sentralmål, spredningsmål og grafisk fremstilling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke og vurdere valg av hensiktsmessige sentralmål og spredningsmål for statistisk datamateriale',
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  content: [
    {
      id: '2p-3-1-intro',
      type: 'text',
      content: `## Beskrivende statistikk

Statistikk handler om å samle inn, organisere og tolke data. Beskrivende statistikk gir oss verktøy for å oppsummere et datasett med noen få nøkkeltall og figurer, slik at vi raskt kan forstå hva dataene forteller oss.

I dette kapittelet skal du lære:
- Hva sentralmål er og når du bruker gjennomsnitt, median og typetall
- Spredningsmål: variasjonsbredde, kvartiler, IQR og standardavvik
- Grafisk fremstilling med stolpediagram, histogram og boksplott
- Frekvenstabeller og kumulativ frekvens`,
    },

    // BLOKK 1: Sentralmål
    {
      id: '2p-3-1-def-sentralmaal',
      type: 'definition',
      title: 'Sentralmål',
      content: `**Sentralmål** beskriver «sentrum» i et datasett. De tre viktigste er:

**Gjennomsnitt (middelverdi):**
$$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{\\sum x_i}{n}$$

**Median:** Den midterste verdien når observasjonene er sortert. Ved partall observasjoner er medianen gjennomsnittet av de to midterste.

**Typetall (modus):** Den verdien som forekommer oftest.

| Sentralmål | Når bruker vi det? |
|---|---|
| Gjennomsnitt | Symmetriske data uten uteliggere |
| Median | Skjeve data eller data med uteliggere |
| Typetall | Kategoriske data (f.eks. favorittfarge) |`,
    },
    {
      id: '2p-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Sentralmål',
      problem: 'Ni elever fikk følgende karakterer i matematikk: 2, 3, 3, 4, 4, 4, 5, 5, 6. Finn gjennomsnitt, median og typetall.',
      solution: `**Løsning:**

**Gjennomsnitt:** $\\bar{x} = \\frac{2 + 3 + 3 + 4 + 4 + 4 + 5 + 5 + 6}{9} = \\frac{36}{9} = 4{,}0$

**Median:** Vi har 9 verdier (oddetall). Den midterste er verdi nr. 5: **median = 4**

**Typetall:** Verdien 4 forekommer 3 ganger (flest): **typetall = 4**

**Svar:** Gjennomsnitt = 4,0, median = 4, typetall = 4. Her gir alle tre sentralmålene omtrent samme resultat fordi dataene er nokså symmetriske.`,
    },
    {
      id: '2p-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En bedrift har fem ansatte med månedslønninger: 30 000, 32 000, 34 000, 35 000 og 120 000 kr. Hvilket sentralmål gir best bilde av en «typisk» lønn?',
        options: [
          { id: 'a', text: 'Medianen (34 000 kr)', isCorrect: true },
          { id: 'b', text: 'Gjennomsnittet (50 200 kr)', isCorrect: false },
          { id: 'c', text: 'Typetallet', isCorrect: false },
          { id: 'd', text: 'Alle tre gir likt resultat', isCorrect: false },
        ],
        solution: 'Gjennomsnittet (50 200 kr) trekkes opp av den ene svært høye lønnen (120 000 kr), som er en uteligger. Medianen (34 000 kr) gir et mye bedre bilde av en typisk lønn. Typetallet er ikke definert her siden ingen verdi gjentas.',
      },
    },
    {
      id: '2p-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'En klasse med 10 elever fikk følgende antall poeng på en prøve: 12, 15, 18, 18, 20, 21, 22, 24, 25, 30. a) Finn gjennomsnitt, median og typetall. b) Hvis eleven med 30 poeng hadde fått 50 poeng i stedet, hva ville gjennomsnittet og medianen blitt? c) Hvilken av de to situasjonene viser best hvorfor medianen kan være mer robust enn gjennomsnittet?',
        hints: ['b) Du trenger bare å endre én verdi og beregne på nytt.'],
        solution: 'a) Gjennomsnitt = (12+15+18+18+20+21+22+24+25+30)/10 = 205/10 = 20,5. Median = (20+21)/2 = 20,5. Typetall = 18. b) Nytt gjennomsnitt = (205 - 30 + 50)/10 = 225/10 = 22,5. Medianen er uendret: (20+21)/2 = 20,5. c) Situasjon b) viser at en enkelt ekstremverdi endrer gjennomsnittet med 2 poeng, mens medianen ikke påvirkes. Medianen er mer robust mot uteliggere.',
      },
    },

    // BLOKK 2: Spredningsmål
    {
      id: '2p-3-1-def-spredningsmaal',
      type: 'definition',
      title: 'Spredningsmål',
      content: `**Spredningsmål** forteller hvor spredt dataene er rundt sentrum.

**Variasjonsbredde:** Differansen mellom største og minste verdi.
$$R = x_{\\text{maks}} - x_{\\text{min}}$$

**Kvartiler:** Deler de sorterte dataene i fire like store deler.
- $Q_1$ (nedre kvartil): Medianen av den nedre halvdelen
- $Q_2$ = medianen
- $Q_3$ (øvre kvartil): Medianen av den øvre halvdelen

**Interkvartilbredde (IQR):** Spredningen i de midterste 50 % av dataene.
$$\\text{IQR} = Q_3 - Q_1$$

**Standardavvik ($s$):** Gjennomsnittlig avstand fra gjennomsnittet.
$$s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$$

Lavt standardavvik betyr at verdiene ligger tett rundt gjennomsnittet. Høyt standardavvik betyr stor spredning.`,
    },
    {
      id: '2p-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Spredningsmål',
      problem: 'Et datasett: 3, 5, 7, 8, 10, 12, 14. Finn variasjonsbredde, kvartiler, IQR og standardavvik.',
      solution: `**Løsning:**

Dataene er allerede sortert: 3, 5, 7, **8**, 10, 12, 14

**Variasjonsbredde:** $R = 14 - 3 = 11$

**Median ($Q_2$):** 8 (midterste verdi)

**$Q_1$:** Median av nedre halvdel (3, 5, 7) = **5**

**$Q_3$:** Median av øvre halvdel (10, 12, 14) = **12**

**IQR:** $Q_3 - Q_1 = 12 - 5 = 7$

**Standardavvik:**
$\\bar{x} = \\frac{3+5+7+8+10+12+14}{7} = \\frac{59}{7} \\approx 8{,}43$

$s = \\sqrt{\\frac{(3-8{,}43)^2 + (5-8{,}43)^2 + \\cdots + (14-8{,}43)^2}{6}} \\approx \\sqrt{\\frac{88{,}86}{6}} \\approx \\sqrt{14{,}81} \\approx 3{,}85$`,
    },
    {
      id: '2p-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'To klasser fikk følgende resultater på en prøve (maks 20 poeng):\n\nKlasse A: 10, 12, 14, 15, 16, 17, 18\nKlasse B: 5, 8, 12, 15, 18, 20, 20\n\na) Finn gjennomsnitt, median og standardavvik for begge klasser. b) Hvilken klasse har mest jevne resultater? c) Bruk tallene til å sammenligne klassene.',
        hints: ['Bruk gjerne kalkulator eller regneark for standardavviket.'],
        solution: 'a) Klasse A: gjennomsnitt = 102/7 ≈ 14,6, median = 15, s ≈ 2,8. Klasse B: gjennomsnitt = 98/7 = 14,0, median = 15, s ≈ 5,9. b) Klasse A har mest jevne resultater (s ≈ 2,8 mot 5,9). c) Klassene har omtrent likt gjennomsnitt og lik median, men klasse B har mye større spredning. I klasse B er det noen som gjør det veldig bra og noen som gjør det svakt, mens klasse A er jevnere.',
      },
    },

    // BLOKK 3: Grafisk fremstilling
    {
      id: '2p-3-1-def-grafisk',
      type: 'definition',
      title: 'Grafisk fremstilling',
      content: `**Stolpediagram:** Brukes for kategoriske data eller diskrete verdier. Stolpene har mellomrom.

**Histogram:** Brukes for kontinuerlige data gruppert i klasser (intervaller). Stolpene står inntil hverandre. Arealet viser frekvensen.

**Boksplott (box-and-whisker):** Viser fordelingen av data med fem nøkkeltall:
- Minimum
- $Q_1$ (nedre kvartil)
- Median
- $Q_3$ (øvre kvartil)
- Maksimum

Boksen dekker IQR (de midterste 50 %), og strekene (whiskers) går ut til min og maks. Uteliggere markeres som egne punkter.

**Uteligger:** En observasjon som ligger mer enn $1{,}5 \\cdot \\text{IQR}$ under $Q_1$ eller over $Q_3$.`,
    },
    {
      id: '2p-3-1-example-3',
      type: 'example',
      title: 'Eksempel: Boksplott',
      problem: 'Tegn et boksplott for datasettet: 2, 4, 5, 7, 8, 9, 10, 12, 15. Finn de fem nøkkeltallene og undersøk om det finnes uteliggere.',
      solution: `**Løsning:**

Sorterte data: 2, 4, 5, 7, 8, 9, 10, 12, 15

**Fem nøkkeltall:**
- Minimum = 2
- $Q_1$ = median av (2, 4, 5, 7) = (4+5)/2 = 4,5
- Median = 8
- $Q_3$ = median av (9, 10, 12, 15) = (10+12)/2 = 11
- Maksimum = 15

**IQR** = 11 − 4,5 = 6,5

**Grenser for uteliggere:**
- Nedre grense: $Q_1 - 1{,}5 \\cdot \\text{IQR} = 4{,}5 - 9{,}75 = -5{,}25$
- Øvre grense: $Q_3 + 1{,}5 \\cdot \\text{IQR} = 11 + 9{,}75 = 20{,}75$

Alle verdier ligger innenfor grensene, så det er **ingen uteliggere**.`,
    },
    {
      id: '2p-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Et datasett har $Q_1 = 20$, $Q_3 = 40$ og IQR = 20. Hvilken verdi er en uteligger?',
        options: [
          { id: 'a', text: '72', isCorrect: true },
          { id: 'b', text: '55', isCorrect: false },
          { id: 'c', text: '42', isCorrect: false },
          { id: 'd', text: '15', isCorrect: false },
        ],
        solution: 'Øvre grense: Q₃ + 1,5 · IQR = 40 + 30 = 70. Nedre grense: Q₁ − 1,5 · IQR = 20 − 30 = −10. Verdien 72 > 70, altså er 72 en uteligger. De andre verdiene ligger innenfor grensene.',
      },
    },

    // BLOKK 4: Frekvenstabeller og kumulativ frekvens
    {
      id: '2p-3-1-def-frekvens',
      type: 'definition',
      title: 'Frekvenstabeller og kumulativ frekvens',
      content: `**Frekvens:** Antall ganger en verdi (eller en klasse) forekommer.

**Relativ frekvens:** Andelen av totalen.
$$\\text{Relativ frekvens} = \\frac{\\text{frekvens}}{\\text{totalt antall}}$$

**Kumulativ frekvens:** Summen av frekvensene opp til og med en bestemt verdi/klasse. Viser hvor mange observasjoner som er lik eller mindre enn en gitt verdi.

**Kumulativ relativ frekvens:** Kumulativ frekvens delt på totalt antall. Brukes til å finne medianen og kvartiler i grupperte data.`,
    },
    {
      id: '2p-3-1-example-4',
      type: 'example',
      title: 'Eksempel: Frekvenstabell',
      problem: '30 elever ble spurt om antall timer de trener per uke. Resultatene ble gruppert:\n\n| Timer | 0–2 | 3–5 | 6–8 | 9–11 |\n|-------|-----|-----|-----|------|\n| Frekvens | 8 | 12 | 7 | 3 |\n\nLag en utvidet frekvenstabell med relativ og kumulativ frekvens.',
      solution: `**Løsning:**

| Timer | Frekvens | Relativ frekvens | Kumulativ frekvens | Kumulativ relativ frekvens |
|-------|----------|------------------|--------------------|----------------------------|
| 0–2 | 8 | 8/30 ≈ 0,27 | 8 | 0,27 |
| 3–5 | 12 | 12/30 = 0,40 | 20 | 0,67 |
| 6–8 | 7 | 7/30 ≈ 0,23 | 27 | 0,90 |
| 9–11 | 3 | 3/30 = 0,10 | 30 | 1,00 |

**Tolkning:**
- 67 % av elevene trener 5 timer eller mindre per uke
- Medianen ligger i klassen 3–5 (fordi kumulativ relativ frekvens passerer 0,50 i denne klassen)
- Typetallsklassen er 3–5 (høyest frekvens)`,
    },
    {
      id: '2p-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'En undersøkelse blant 40 elever viste følgende antall timer skjermtid per dag:\n\n| Timer | 0–1 | 2–3 | 4–5 | 6–7 | 8+ |\n|-------|-----|-----|-----|-----|----|\n| Frekvens | 3 | 10 | 15 | 8 | 4 |\n\na) Lag en frekvenstabell med relativ og kumulativ frekvens. b) I hvilken klasse ligger medianen? c) Hvor stor andel av elevene har mer enn 5 timer skjermtid per dag?',
        hints: ['b) Medianen er der kumulativ relativ frekvens passerer 0,50.'],
        solution: 'a) Kumulativ frekvens: 3, 13, 28, 36, 40. Kumulativ relativ: 0,075, 0,325, 0,70, 0,90, 1,00. b) Medianen ligger i klassen 4–5 (kumulativ relativ passerer 0,50 her, fra 0,325 til 0,70). c) Andel med mer enn 5 timer: (8+4)/40 = 12/40 = 0,30 = 30 %.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sentralmål** beskriver «sentrum» i data: gjennomsnitt, median og typetall
- **Gjennomsnitt** påvirkes av uteliggere – bruk **median** når data er skjeve
- **Spredningsmål** beskriver spredningen: variasjonsbredde, IQR, standardavvik
- **Boksplott** viser fordeling med fem nøkkeltall (min, $Q_1$, median, $Q_3$, maks)
- **Uteliggere** er verdier mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor kvartilene
- **Frekvenstabeller** organiserer data med frekvens, relativ og kumulativ frekvens
- **Kumulativ frekvens** brukes til å bestemme median og kvartiler i grupperte data

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Gjennomsnitt | Sum av verdier delt på antall |
| Median | Midterste verdi i sortert datasett |
| Typetall | Verdien som forekommer oftest |
| Standardavvik | Gjennomsnittlig avstand fra gjennomsnittet |
| IQR | $Q_3 - Q_1$ – spredningen i midterste 50 % |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har 12 ansatte med følgende månedslønn (i 1 000 kr): 28, 30, 30, 32, 33, 35, 36, 38, 40, 42, 45, 85. a) Finn gjennomsnitt, median og typetall. b) Finn $Q_1$, $Q_3$ og IQR. c) Er det noen uteliggere? d) Tegn et boksplott. e) Bedriftens leder sier at «gjennomsnittslønnen er 39 500 kr». Er dette misvisende? Begrunn svaret ditt.',
        solution: 'a) Gjennomsnitt = 474/12 = 39,5 (39 500 kr). Median = (35+36)/2 = 35,5. Typetall = 30. b) Q₁ = (30+32)/2 = 31. Q₃ = (40+42)/2 = 41. IQR = 41 − 31 = 10. c) Øvre grense: 41 + 15 = 56. Nedre grense: 31 − 15 = 16. Verdien 85 > 56, altså er 85 en uteligger. d) Boksplott med min=28, Q₁=31, median=35,5, Q₃=41, maks=45 og uteligger ved 85. e) Ja, det er misvisende. Gjennomsnittet trekkes opp av uteliggeren (85). Medianen (35 500 kr) gir et bedre bilde av en typisk lønn.',
      },
    },
    {
      id: '2p-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En idrettslærer registrerte tiden (i sekunder) 20 elever brukte på 60 m sprint:\n\n| Tid (s) | 8,0–8,9 | 9,0–9,9 | 10,0–10,9 | 11,0–11,9 | 12,0–12,9 |\n|---------|---------|---------|-----------|-----------|----------|\n| Gutter | 1 | 4 | 3 | 1 | 0 |\n| Jenter | 0 | 2 | 4 | 3 | 2 |\n\na) Beregn et estimert gjennomsnitt for gutter og jenter (bruk klassemidtpunkt). b) I hvilken klasse ligger medianen for hver gruppe? c) Sammenlign fordelingene ved å bruke sentralmål og spredning. d) Lag histogrammer for begge grupper og beskriv formen på fordelingene.',
        hints: ['Klassemidtpunkt for 8,0–8,9 er 8,45. Totalt er det 9 gutter og 11 jenter.'],
        solution: 'a) Gutter: (1·8,45 + 4·9,45 + 3·10,45 + 1·11,45)/9 = (8,45 + 37,80 + 31,35 + 11,45)/9 = 89,05/9 ≈ 9,9 s. Jenter: (2·9,45 + 4·10,45 + 3·11,45 + 2·12,45)/11 = (18,90 + 41,80 + 34,35 + 24,90)/11 = 119,95/11 ≈ 10,9 s. b) Gutter: median i klassen 9,0–9,9 (kumulativ: 1, 5, 8, 9 – verdi nr. 5 av 9). Jenter: median i klassen 10,0–10,9 (kumulativ: 2, 6, 9, 11 – verdi nr. 6 av 11). c) Guttene har lavere gjennomsnitt og median, altså løper de generelt raskere. Begge grupper har relativt liten spredning, men jentene har en noe bredere fordeling. d) Guttene har en fordeling som er svakt venstreskjev, jentene har en fordeling som er tilnærmet symmetrisk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Gjennomsnitt', definition: 'Sum av alle verdier delt på antall observasjoner' },
    { term: 'Median', definition: 'Den midterste verdien i et sortert datasett' },
    { term: 'Typetall', definition: 'Verdien som forekommer oftest i datasettet' },
    { term: 'Variasjonsbredde', definition: 'Differansen mellom største og minste verdi' },
    { term: 'Kvartiler', definition: 'Verdiene som deler datasettet i fire like deler (Q₁, Q₂, Q₃)' },
    { term: 'IQR', definition: 'Interkvartilbredde: Q₃ − Q₁, spredningen i midterste 50 %' },
    { term: 'Standardavvik', definition: 'Mål på gjennomsnittlig avstand fra gjennomsnittet' },
    { term: 'Boksplott', definition: 'Figur som viser min, Q₁, median, Q₃ og maks' },
    { term: 'Kumulativ frekvens', definition: 'Sum av frekvensene opp til og med en gitt verdi' },
  ],
};

// ============================================================================
// Kapittel 3.2: Normalfordeling
// ============================================================================

export const CHAPTER_2P_3_2: TextbookChapter = {
  id: '2p-3-2',
  courseId: '2p',
  chapterNumber: '3.2',
  title: 'Normalfordeling',
  description: 'Normalfordelingen og bruk av standardavvik.',
  estimatedMinutes: 55,
  prerequisites: ['2p-3-1'],
  competenceGoals: [
    'bruke og vurdere valg av hensiktsmessige sentralmål og spredningsmål for statistisk datamateriale',
  ],
  content: [
    {
      id: '2p-3-2-intro',
      type: 'text',
      content: `## Normalfordeling

Mange naturlige fenomener følger et bestemt mønster: de fleste verdiene samler seg rundt gjennomsnittet, og det blir færre og færre verdier jo lenger vi kommer fra sentrum. Denne fordelingen kalles **normalfordelingen** og er en av de viktigste i statistikk.

I dette kapittelet skal du lære:
- Hva normalfordelingen er og hva som kjennetegner den
- Den empiriske regelen (68–95–99,7-regelen)
- Beregne og tolke z-skår
- Bruke normalfordelingen til å løse praktiske problemer`,
    },

    // BLOKK 1: Normalfordelingen
    {
      id: '2p-3-2-def-normalfordeling',
      type: 'definition',
      title: 'Normalfordelingen',
      content: `**Normalfordelingen** (også kalt Gausskurven eller «bell curve») er en symmetrisk, klokkeformet fordeling.

Kjennetegn:
- **Symmetrisk** rundt gjennomsnittet $\\mu$
- **Gjennomsnitt = median = typetall** (alle tre er like)
- Kurven nærmer seg, men berører aldri, $x$-aksen
- Formen bestemmes av **gjennomsnittet $\\mu$** (plassering) og **standardavviket $\\sigma$** (bredde)

Stort standardavvik $\\sigma$ gir en bred og flat kurve. Lite standardavvik gir en smal og høy kurve.

Mange størrelser i naturen er tilnærmet normalfordelt: høyder, vekt, IQ, blodtrykk, feilmarginer i produksjon.`,
    },
    {
      id: '2p-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Normalfordelt høyde',
      problem: 'Høyden til norske 18-årige gutter er tilnærmet normalfordelt med gjennomsnitt $\\mu = 180$ cm og standardavvik $\\sigma = 7$ cm. Beskriv hva dette betyr.',
      solution: `**Løsning:**

- De fleste guttene har en høyde nær 180 cm.
- Gjennomsnittet, medianen og typetallet er alle omtrent 180 cm.
- Standardavviket er 7 cm, som betyr at en «typisk» avstand fra gjennomsnittet er 7 cm.
- Kurven er symmetrisk: like mange er høyere enn 180 cm som lavere.

**Tolkning:** Fordelingen forteller oss at ca. halvparten av guttene er mellom 173 cm og 187 cm høye (innenfor ett standardavvik fra gjennomsnittet).`,
    },
    {
      id: '2p-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken påstand om normalfordelingen er korrekt?',
        options: [
          { id: 'a', text: 'Gjennomsnitt, median og typetall er like', isCorrect: true },
          { id: 'b', text: 'Kurven er skjev mot høyre', isCorrect: false },
          { id: 'c', text: 'Standardavviket bestemmer hvor sentrum er', isCorrect: false },
          { id: 'd', text: 'Alle datasett er normalfordelte', isCorrect: false },
        ],
        solution: 'Normalfordelingen er symmetrisk, så gjennomsnitt = median = typetall. Standardavviket bestemmer bredden (ikke sentrum), og langt fra alle datasett er normalfordelte.',
      },
    },

    // BLOKK 2: Empirisk regel
    {
      id: '2p-3-2-def-empirisk',
      type: 'definition',
      title: 'Den empiriske regelen (68–95–99,7)',
      content: `For en normalfordeling med gjennomsnitt $\\mu$ og standardavvik $\\sigma$ gjelder:

- Ca. **68 %** av verdiene ligger innenfor $\\mu \\pm 1\\sigma$ (dvs. mellom $\\mu - \\sigma$ og $\\mu + \\sigma$)
- Ca. **95 %** av verdiene ligger innenfor $\\mu \\pm 2\\sigma$
- Ca. **99,7 %** av verdiene ligger innenfor $\\mu \\pm 3\\sigma$

Dette betyr at nesten alle verdier (99,7 %) ligger innenfor tre standardavvik fra gjennomsnittet.

| Intervall | Andel |
|-----------|-------|
| $\\mu \\pm 1\\sigma$ | 68 % |
| $\\mu \\pm 2\\sigma$ | 95 % |
| $\\mu \\pm 3\\sigma$ | 99,7 % |`,
    },
    {
      id: '2p-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Empirisk regel',
      problem: 'Vekten til nyfødte barn er normalfordelt med $\\mu = 3{,}5$ kg og $\\sigma = 0{,}5$ kg. a) Mellom hvilke verdier ligger 95 % av fødselsvektene? b) Hvor stor andel veier mer enn 4,5 kg?',
      solution: `**Løsning:**

a) 95 % ligger innenfor $\\mu \\pm 2\\sigma$:
$$3{,}5 - 2 \\cdot 0{,}5 = 2{,}5 \\text{ kg}$$
$$3{,}5 + 2 \\cdot 0{,}5 = 4{,}5 \\text{ kg}$$

**Svar:** 95 % av fødselsvektene ligger mellom 2,5 kg og 4,5 kg.

b) 4,5 kg er $\\mu + 2\\sigma$. Siden 95 % ligger innenfor $\\mu \\pm 2\\sigma$, ligger 5 % utenfor. Fordelingen er symmetrisk, så 2,5 % ligger over $\\mu + 2\\sigma$.

**Svar:** Ca. 2,5 % av nyfødte veier mer enn 4,5 kg.`,
    },
    {
      id: '2p-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Levetiden til en bestemt type lyspære er normalfordelt med $\\mu = 1\\,200$ timer og $\\sigma = 100$ timer. a) Mellom hvilke verdier ligger 68 % av levetidene? b) Hvor stor andel av lyspærene varer lenger enn 1 400 timer? c) En produsent garanterer at lyspæren varer minst 900 timer. Hvor stor andel vil ikke oppfylle garantien?',
        hints: ['b) 1 400 timer = μ + 2σ. Bruk den empiriske regelen.', 'c) 900 timer = μ − 3σ.'],
        solution: 'a) μ ± 1σ: 1 200 ± 100, dvs. mellom 1 100 og 1 300 timer. b) 1 400 = 1 200 + 2·100 = μ + 2σ. Over μ + 2σ ligger 2,5 %. c) 900 = 1 200 − 3·100 = μ − 3σ. Under μ − 3σ ligger 0,15 %. Svært få (ca. 0,15 %) vil ikke oppfylle garantien.',
      },
    },
    {
      id: '2p-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'IQ-skårer er normalfordelt med $\\mu = 100$ og $\\sigma = 15$. Hvor stor andel har IQ mellom 85 og 115?',
        options: [
          { id: 'a', text: 'Ca. 68 %', isCorrect: true },
          { id: 'b', text: 'Ca. 95 %', isCorrect: false },
          { id: 'c', text: 'Ca. 50 %', isCorrect: false },
          { id: 'd', text: 'Ca. 99,7 %', isCorrect: false },
        ],
        solution: '85 = 100 − 15 = μ − σ og 115 = 100 + 15 = μ + σ. Intervallet μ ± 1σ inneholder ca. 68 % ifølge den empiriske regelen.',
      },
    },

    // BLOKK 3: Z-skår
    {
      id: '2p-3-2-def-z-skaar',
      type: 'definition',
      title: 'Z-skår (standardisert verdi)',
      content: `**Z-skåren** forteller hvor mange standardavvik en observasjon ligger fra gjennomsnittet:

$$z = \\frac{x - \\mu}{\\sigma}$$

- $z = 0$: Verdien er lik gjennomsnittet
- $z = 1$: Verdien ligger ett standardavvik over gjennomsnittet
- $z = -2$: Verdien ligger to standardavvik under gjennomsnittet

Z-skåren gjør det mulig å **sammenligne verdier fra ulike fordelinger**. En elev kan for eksempel sammenligne resultater på to ulike prøver med forskjellig gjennomsnitt og standardavvik.`,
    },
    {
      id: '2p-3-2-example-3',
      type: 'example',
      title: 'Eksempel: Sammenligne med z-skår',
      problem: 'Kari fikk 78 poeng på en norskprøve ($\\mu = 65$, $\\sigma = 10$) og 82 poeng på en matteprøve ($\\mu = 70$, $\\sigma = 8$). Hvilken prøve gjorde hun det relativt best på?',
      solution: `**Løsning:**

Z-skår for norsk: $z = \\frac{78 - 65}{10} = \\frac{13}{10} = 1{,}3$

Z-skår for matte: $z = \\frac{82 - 70}{8} = \\frac{12}{8} = 1{,}5$

**Tolkning:** Kari lå 1,3 standardavvik over gjennomsnittet i norsk og 1,5 standardavvik over gjennomsnittet i matte.

**Svar:** Kari gjorde det relativt best på matteprøven, selv om poengsummen var lavere i norsk. Z-skåren viser at hun var lenger over gjennomsnittet i matte.`,
    },
    {
      id: '2p-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Ola løp 100 m på 12,2 sekunder. Gjennomsnittstiden i klassen var $\\mu = 13{,}5$ s med $\\sigma = 1{,}0$ s. a) Beregn Olas z-skår. b) Hvor stor andel av klassen var raskere enn Ola? (Bruk den empiriske regelen.) c) En annen elev hadde z-skår $z = 0{,}5$. Hva var denne elevens tid?',
        hints: ['a) z = (x − μ) / σ. For 100 m er lavere tid bedre.', 'c) Snu formelen: x = μ + z · σ.'],
        solution: 'a) z = (12,2 − 13,5) / 1,0 = −1,3. Ola lå 1,3 standardavvik under gjennomsnittet (raskere). b) z = −1,3 er mellom −1 og −2. Ca. 68 % er innenfor ±1σ, dvs. 16 % er under −1σ. Mellom −1σ og −2σ er det ca. (95−68)/2 = 13,5 %. Ola med z = −1,3 har omtrent 10 % av klassen foran seg (raskere). c) x = 13,5 + 0,5 · 1,0 = 14,0 s.',
      },
    },

    // BLOKK 4: Normalfordelingen i praksis
    {
      id: '2p-3-2-text-praksis',
      type: 'text',
      content: `### Bruke normalfordelingen i praksis

Normalfordelingen brukes i mange sammenhenger:

**Kvalitetskontroll:** En fabrikk produserer skruer med diameter $\\mu = 10{,}0$ mm og $\\sigma = 0{,}05$ mm. Skruer utenfor $\\mu \\pm 2\\sigma$ (altså under 9,90 mm eller over 10,10 mm) kasseres. Ca. 5 % kasseres.

**Karakterer:** Resultater på nasjonale prøver er ofte tilnærmet normalfordelt. Z-skåren brukes til å plassere eleven på en skala.

**Medisin:** Blodtrykk, kolesterolnivå og andre mål er tilnærmet normalfordelt. Leger bruker normalfordelingen til å avgjøre om en verdi er «unormal».

**Viktig:** Ikke alt er normalfordelt! Inntekt, boligpriser og ventetider er typisk *skjevfordelt* og følger ikke normalfordelingen.`,
    },
    {
      id: '2p-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En fabrikk produserer bolter med lengde normalfordelt med $\\mu = 50$ mm og $\\sigma = 0{,}2$ mm. Bolter utenfor $50 \\pm 0{,}4$ mm kasseres. Hvor stor andel kasseres?',
        options: [
          { id: 'a', text: 'Ca. 5 %', isCorrect: true },
          { id: 'b', text: 'Ca. 32 %', isCorrect: false },
          { id: 'c', text: 'Ca. 0,3 %', isCorrect: false },
          { id: 'd', text: 'Ca. 10 %', isCorrect: false },
        ],
        solution: '0,4 mm = 2 · 0,2 mm = 2σ. Innenfor μ ± 2σ er 95 %. Utenfor er 5 %. Altså kasseres ca. 5 % av boltene.',
      },
    },
    {
      id: '2p-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Resultater på en landsdekkende matteprøve er normalfordelt med $\\mu = 45$ poeng og $\\sigma = 12$ poeng. a) Hva er z-skåren for en elev som fikk 60 poeng? b) Mellom hvilke poengverdier ligger 95 % av resultatene? c) En elev trenger minst 69 poeng for å kvalifisere seg til en konkurranse. Hvor mange standardavvik over gjennomsnittet er dette? d) Omtrent hvor stor andel kvalifiserer seg?',
        solution: 'a) z = (60 − 45)/12 = 15/12 = 1,25. b) μ ± 2σ: 45 ± 24, dvs. mellom 21 og 69 poeng. c) z = (69 − 45)/12 = 24/12 = 2,0 standardavvik over gjennomsnittet. d) Over μ + 2σ ligger ca. 2,5 %.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Normalfordelingen** er symmetrisk og klokkeformet med $\\mu =$ gjennomsnitt og $\\sigma =$ standardavvik
- **Empirisk regel:** 68 % innenfor $\\mu \\pm \\sigma$, 95 % innenfor $\\mu \\pm 2\\sigma$, 99,7 % innenfor $\\mu \\pm 3\\sigma$
- **Z-skår:** $z = (x - \\mu) / \\sigma$ – antall standardavvik fra gjennomsnittet
- Z-skår gjør det mulig å sammenligne verdier fra ulike fordelinger
- Normalfordelingen brukes i kvalitetskontroll, medisin, utdanning og forskning
- Ikke alt er normalfordelt – sjekk alltid at fordelingen passer`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Høyden til jenter i en VG2-klasse er tilnærmet normalfordelt med $\\mu = 167$ cm og $\\sigma = 6$ cm. a) Mellom hvilke høyder ligger 68 % av jentene? b) En jente er 179 cm. Beregn z-skåren og kommenter resultatet. c) Hvor stor andel av jentene er under 155 cm? d) Skolen skal bestille treningsdrakter. De planlegger å ha størrelser som dekker 95 % av jentene. Hvilket høydeintervall må de dekke?',
        solution: 'a) μ ± σ: 167 ± 6, dvs. mellom 161 cm og 173 cm. b) z = (179 − 167)/6 = 12/6 = 2,0. Hun er 2 standardavvik over gjennomsnittet – blant de høyeste 2,5 %. c) 155 = 167 − 12 = μ − 2σ. Under μ − 2σ er ca. 2,5 %. d) μ ± 2σ: 167 ± 12, dvs. fra 155 cm til 179 cm.',
      },
    },
    {
      id: '2p-3-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To elever sammenligner resultatene sine på tre ulike prøver:\n\n| Prøve | Oles resultat | Karis resultat | Gjennomsnitt (μ) | Standardavvik (σ) |\n|-------|---------------|----------------|------------------|--------------------|\n| Norsk | 72 | 68 | 60 | 8 |\n| Matte | 55 | 48 | 50 | 5 |\n| Engelsk | 80 | 85 | 75 | 10 |\n\na) Beregn z-skåren for begge elever på alle tre prøver. b) Hvem gjorde det relativt best totalt sett? Begrunn med z-skårer. c) På hvilken prøve var forskjellen mellom elevene størst (målt i z-skår)?',
        hints: ['Beregn alle seks z-skårer og sammenlign.'],
        solution: 'a) Ole: norsk z = (72−60)/8 = 1,5; matte z = (55−50)/5 = 1,0; engelsk z = (80−75)/10 = 0,5. Sum = 3,0. Kari: norsk z = (68−60)/8 = 1,0; matte z = (48−50)/5 = −0,4; engelsk z = (85−75)/10 = 1,0. Sum = 1,6. b) Ole gjør det relativt best totalt (sum z = 3,0 mot 1,6, gjennomsnittlig z = 1,0 mot 0,53). c) Størst forskjell i matte: Ole z = 1,0, Kari z = −0,4, forskjell = 1,4 standardavvik. I norsk er forskjellen 0,5 og i engelsk 0,5.',
      },
    },
    {
      id: '2p-3-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-ex-9',
        number: '9',
        type: 'multiple-choice',
        task: 'Blodtrykket (systolisk) hos friske voksne er normalfordelt med $\\mu = 120$ mmHg og $\\sigma = 15$ mmHg. En person har blodtrykk 150 mmHg. Hva er z-skåren, og hva betyr den?',
        options: [
          { id: 'a', text: 'z = 2,0 – blodtrykket er 2 standardavvik over gjennomsnittet, noe som er uvanlig høyt', isCorrect: true },
          { id: 'b', text: 'z = 1,0 – blodtrykket er normalt', isCorrect: false },
          { id: 'c', text: 'z = 30 – blodtrykket er ekstremt høyt', isCorrect: false },
          { id: 'd', text: 'z = −2,0 – blodtrykket er lavt', isCorrect: false },
        ],
        solution: 'z = (150 − 120) / 15 = 30/15 = 2,0. Personen har et blodtrykk som er 2 standardavvik over gjennomsnittet. Bare ca. 2,5 % av friske voksne har blodtrykk over dette.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Normalfordeling', definition: 'Symmetrisk, klokkeformet fordeling der gjennomsnitt = median = typetall' },
    { term: 'Empirisk regel', definition: '68–95–99,7-regelen for andeler innenfor 1, 2 og 3 standardavvik' },
    { term: 'Z-skår', definition: 'Antall standardavvik en verdi ligger fra gjennomsnittet: z = (x − μ) / σ' },
    { term: 'Standardavvik (σ)', definition: 'Mål på spredningen – bestemmer bredden på normalfordelingskurven' },
    { term: 'Gjennomsnitt (μ)', definition: 'Sentrum i normalfordelingen – bestemmer plasseringen av kurven' },
  ],
};

// ============================================================================
// Kapittel 3.3: Statistisk analyse
// ============================================================================

export const CHAPTER_2P_3_3: TextbookChapter = {
  id: '2p-3-3',
  courseId: '2p',
  chapterNumber: '3.3',
  title: 'Statistisk analyse',
  description: 'Kritisk vurdering av statistikk og presentasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  content: [
    {
      id: '2p-3-3-intro',
      type: 'text',
      content: `## Statistisk analyse

«Det finnes tre typer løgn: løgn, forbannet løgn og statistikk.» Sitatet tilskrives Mark Twain og minner oss om at statistikk kan brukes til å villede like mye som å opplyse.

I dette kapittelet skal du lære:
- Hvordan statistikk kan fremstilles misvisende
- Vanlige feilkilder i undersøkelser
- Forskjellen mellom korrelasjon og kausalitet
- Hvordan presentere statistikk på en ærlig og riktig måte`,
    },

    // BLOKK 1: Kritisk lesing av statistikk
    {
      id: '2p-3-3-def-misvisende',
      type: 'definition',
      title: 'Misvisende statistikk',
      content: `Statistikk kan fremstilles misvisende på flere måter:

**Avkuttet y-akse:** Når y-aksen ikke starter på 0, ser forskjeller mye større ut enn de er. En økning fra 100 til 105 kan se ut som en dobling hvis aksen går fra 98 til 106.

**Feil skala:** Ujevne intervaller på aksene forvrenger bildet.

**Cherry-picking:** Velge ut data som støtter et bestemt synspunkt og utelate resten. For eksempel: «Kriminaliteten økte fra 2019 til 2020» – uten å nevne at den har gått ned hvert år i 20 år.

**Misvisende sammenligninger:** Sammenligne grupper som ikke er sammenlignbare, eller bruke ulike målestokker.

**3D-diagrammer:** Gir ofte et forvrengt bilde fordi perspektivet gjør det vanskelig å lese av verdier korrekt.`,
    },
    {
      id: '2p-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Avkuttet y-akse',
      problem: 'En avis viser et stolpediagram over arbeidsledigheten i to kommuner. Kommune A har 4,2 % ledighet og kommune B har 4,8 % ledighet. Y-aksen starter på 4,0 %. Hva er problemet?',
      solution: `**Løsning:**

Når y-aksen starter på 4,0 % i stedet for 0 %, ser forskjellen mellom 4,2 % og 4,8 % dramatisk ut – stolpen for B ser nesten tre ganger så høy ut som stolpen for A.

I virkeligheten er forskjellen bare 0,6 prosentpoeng – relativt liten.

**Korrekt fremstilling:** Y-aksen bør starte på 0 %, eller det bør tydelig markeres at aksen er avkuttet (med bølgelinje). Leseren må alltid sjekke aksene.

**Tommelfingerregel:** Hvis noen viser deg et diagram – sjekk aksene først!`,
    },
    {
      id: '2p-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Et selskap viser i årsrapporten at omsetningen økte fra 50 millioner til 52 millioner kroner. I diagrammet starter y-aksen på 49 millioner. Hva er effekten av dette?',
        options: [
          { id: 'a', text: 'Økningen ser mye større ut enn den faktisk er (4 % økning fremstilt som dramatisk vekst)', isCorrect: true },
          { id: 'b', text: 'Diagrammet viser økningen korrekt', isCorrect: false },
          { id: 'c', text: 'Økningen ser mindre ut enn den er', isCorrect: false },
          { id: 'd', text: 'Det har ingen effekt på leserens oppfatning', isCorrect: false },
        ],
        solution: 'Økningen er 2 millioner av 50 millioner = 4 %. Men med y-akse fra 49 til 52+ ser stolpen for 52 nesten dobbelt så høy ut som stolpen for 50 (3 enheter vs. 1 enhet fra bunnen). Dette gir et falskt inntrykk av stor vekst.',
      },
    },
    {
      id: '2p-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn et eksempel på misvisende statistikk i mediene (nettaviser, reklame, sosiale medier). a) Beskriv hva som vises og hva som er misvisende. b) Forklar hvilken teknikk som brukes for å villede. c) Lag en mer ærlig fremstilling av de samme dataene.',
        hints: ['Se etter avkuttede akser, cherry-picking eller misvisende sammenligninger i nyhetsartikler eller reklame.'],
        solution: 'Oppgaven er åpen. Vurder om eleven identifiserer en korrekt teknikk (avkuttet akse, cherry-picking, misvisende sammenligning osv.), forklarer hvorfor den er misvisende, og foreslår en bedre fremstilling.',
      },
    },

    // BLOKK 2: Feilkilder
    {
      id: '2p-3-3-def-feilkilder',
      type: 'definition',
      title: 'Feilkilder i statistiske undersøkelser',
      content: `Feilkilder kan gjøre resultatene upålitelige:

**Utvalgsskjevhet:** Utvalget er ikke representativt for populasjonen. Eksempel: Å spørre folk på et kjøpesenter om handlevanene deres gir et skjevt utvalg – de som aldri handler der, er ikke med.

**Ledende spørsmål:** Spørsmålet er formulert slik at det styrer svaret. «Er du ikke enig i at ...?» gir andre svar enn «Hva mener du om ...?»

**Konfunderende variabler:** En tredje faktor påvirker begge variablene vi undersøker. Eksempel: Barn som spiser frokost, gjør det bedre på skolen – men kanskje handler det om familieforhold, ikke frokosten i seg selv.

**Selvseleksjon:** Bare de som er spesielt engasjerte, svarer på undersøkelsen. Nettavstemninger er et typisk eksempel.

**Lav svarprosent:** Hvis få svarer, kan vi ikke stole på resultatene.`,
    },
    {
      id: '2p-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Ledende spørsmål',
      problem: 'En interesseorganisasjon gjennomfører en undersøkelse med spørsmålet: «Synes du ikke at det er urettferdig at lærere tjener så lite?» 87 % svarte ja. Hva er problemet?',
      solution: `**Løsning:**

Spørsmålet er ledende av flere grunner:
1. «Synes du ikke at ...» forventer et «ja»-svar
2. «Urettferdig» er et ladet ord som styrer oppfatningen
3. «Så lite» er en påstand i seg selv – spørsmålet forutsetter at lærere tjener lite

**Bedre formulering:** «Hva synes du om norske lærerlønninger?» med valgalternativer som «for lave», «passende», «for høye».

**Konklusjon:** Resultatet (87 %) sier mer om spørsmålet enn om folks faktiske mening. Ledende spørsmål gir upålitelige data.`,
    },
    {
      id: '2p-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En nettavis lager en avstemning: «Bør Norge satse mer på fornybar energi?» 92 % svarer ja. Hva er den viktigste feilkilden?',
        options: [
          { id: 'a', text: 'Selvseleksjon – bare de som er engasjerte i temaet svarer', isCorrect: true },
          { id: 'b', text: 'Spørsmålet er ledende', isCorrect: false },
          { id: 'c', text: 'Utvalget er for stort', isCorrect: false },
          { id: 'd', text: 'Det er ingen feilkilde', isCorrect: false },
        ],
        solution: 'Nettavstemninger har selvseleksjon som viktigste feilkilde: bare de som er engasjerte nok til å klikke seg inn og stemme, deltar. Dette gir et skjevt utvalg som ikke representerer hele befolkningen. Spørsmålet er også noe ledende («satse mer» antyder at mer er positivt), men selvseleksjonen er det største problemet.',
      },
    },

    // BLOKK 3: Korrelasjon vs. kausalitet
    {
      id: '2p-3-3-def-korrelasjon-kausalitet',
      type: 'definition',
      title: 'Korrelasjon vs. kausalitet',
      content: `**Korrelasjon** betyr at to variabler samvarierer – når den ene endrer seg, endrer den andre seg også.

**Kausalitet** (årsakssammenheng) betyr at den ene variabelen faktisk *forårsaker* endringen i den andre.

**Korrelasjon betyr IKKE kausalitet!**

Klassisk eksempel: Iskremssalg og drukning korrelerer positivt – begge øker om sommeren. Men is forårsaker ikke drukning! Den konfunderende variabelen er **sommervarmen**, som øker både issalg og bading.

For å påvise kausalitet trenger vi:
1. Korrelasjon (samvariasjon)
2. Tidsrekkefølge (årsaken kommer før virkningen)
3. Utelukke alternative forklaringer (konfunderende variabler)
4. Gjerne et kontrollert eksperiment`,
    },
    {
      id: '2p-3-3-example-3',
      type: 'example',
      title: 'Eksempel: Korrelasjon eller kausalitet?',
      problem: 'En studie viser at elever som leser mer, har bedre karakterer. Kan vi konkludere med at lesing fører til bedre karakterer?',
      solution: `**Løsning:**

Vi vet at det er en **korrelasjon** mellom lesing og gode karakterer. Men vi kan ikke uten videre konkludere med **kausalitet** fordi:

**Mulige konfunderende variabler:**
- Motiverte elever leser kanskje mer *og* jobber hardere med skolearbeidet
- Foreldre som oppfordrer til lesing, følger kanskje også opp skolearbeidet mer
- Elever med gode evner finner det kanskje lettere å lese *og* får gode karakterer

**Mulig omvendt kausalitet:** Kanskje elever som gjør det bra på skolen, får bedre selvtillit og dermed leser mer?

**Konklusjon:** Vi kan si at lesing og gode karakterer **henger sammen**, men vi kan ikke påstå at det ene forårsaker det andre uten mer grundig forskning (f.eks. kontrollerte eksperimenter).`,
    },
    {
      id: '2p-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'For hvert par av variabler nedenfor: Forklar om det er korrelasjon, kausalitet, eller begge deler. Nevn eventuelle konfunderende variabler.\n\na) Antall brannmenn på stedet og skadeomfanget ved en brann.\nb) Røyking og lungekreft.\nc) Skostørrelse og leseferdighet hos barn.\nd) Antall timer med trening per uke og hvilepuls.',
        hints: ['Tenk over: Er det en tredje variabel som kan forklare sammenhengen?'],
        solution: 'a) Korrelasjon, men ikke kausalitet. Flere brannmenn sendes til store branner, men de forårsaker ikke skadene. Konfunderende variabel: brannens størrelse. b) Både korrelasjon og kausalitet. Grundig forskning (kontrollerte studier, biologisk mekanisme) har vist at røyking forårsaker lungekreft. c) Korrelasjon, ikke kausalitet. Konfunderende variabel: alder. Eldre barn har større føtter OG leser bedre. d) Trolig kausalitet: trening styrker hjertet og senker hvilepulsen. Men det kan også være selvseleksjon (folk med naturlig lav puls er mer aktive).',
      },
    },
    {
      id: '2p-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'En studie viser at land med høyere sjokoladeforbruk per innbygger har flere nobelprisvinnere. Hva er den mest sannsynlige forklaringen?',
        options: [
          { id: 'a', text: 'Konfunderende variabel: rike land har både høyere sjokoladeforbruk og bedre forskningsinstitusjoner', isCorrect: true },
          { id: 'b', text: 'Sjokolade gjør deg smartere', isCorrect: false },
          { id: 'c', text: 'Nobelprisvinnere spiser mer sjokolade', isCorrect: false },
          { id: 'd', text: 'Det er bare tilfeldig – ingen sammenheng', isCorrect: false },
        ],
        solution: 'Dette er en klassisk spuriøs korrelasjon. Den konfunderende variabelen er velstandsnivå: rike land har råd til mer sjokolade OG investerer mer i forskning og utdanning. Sjokolade forårsaker ikke nobelpriser!',
      },
    },

    // BLOKK 4: Presentere statistikk ærlig
    {
      id: '2p-3-3-def-aarlig',
      type: 'definition',
      title: 'Presentere statistikk på en ærlig måte',
      content: `Når du presenterer statistikk, bør du:

1. **La y-aksen starte på 0** (eller tydelig markere avkutting)
2. **Vise hele bildet** – ikke plukke ut perioder som støtter ett synspunkt
3. **Oppgi utvalgets størrelse og hvordan det ble valgt**
4. **Bruke riktig sentralmål** – median ved skjeve data, gjennomsnitt ved symmetriske
5. **Oppgi spredning** – ikke bare gjennomsnitt, men også standardavvik eller IQR
6. **Skille mellom korrelasjon og kausalitet**
7. **Oppgi feilmarginer** – spesielt ved spørreundersøkelser
8. **Bruke klare og ærlige overskrifter** som ikke overdriver funnene`,
    },
    {
      id: '2p-3-3-example-4',
      type: 'example',
      title: 'Eksempel: Forbedre en fremstilling',
      problem: 'En rapport sier: «Gjennomsnittsinntekten i kommunen er 650 000 kr.» Inntektene er: 350, 380, 400, 420, 440, 450, 480, 500, 550, 2 800 (i 1 000 kr). Hva er problemet, og hvordan bør det fremstilles?',
      solution: `**Løsning:**

**Problem:** Gjennomsnittet (677 000 kr) trekkes kraftig opp av én person med svært høy inntekt (2 800 000 kr). Det gir et feil bilde av en «typisk» inntekt.

**Bedre fremstilling:**
- Medianen = (440 + 450) / 2 = 445 000 kr – gir et bedre bilde av typisk inntekt
- Oppgi begge: «Medianinntekten er 445 000 kr (gjennomsnitt 677 000 kr)»
- Nevn at spredningen er stor (standardavvik ≈ 720 000 kr) og at én uteligger trekker gjennomsnittet opp
- Vis gjerne et boksplott som tydelig viser uteliggeren

**Konklusjon:** Rapporten bør bruke medianen og forklare at gjennomsnittet er påvirket av uteliggere.`,
    },
    {
      id: '2p-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Vurder følgende påstander kritisk. Forklar hva som er problematisk med hver:\n\na) «9 av 10 tannleger anbefaler vår tannkrem.»\nb) «Kriminaliteten doblet seg fra 2020 til 2021.» (Basert på 2 hendelser i 2020 og 4 i 2021.)\nc) «Elevene våre scorer 10 % over landsgjennomsnittet.» (Skolen har bare 15 elever.)',
        solution: 'a) Hvem er disse tannlegene? Utvalget er sannsynligvis håndplukket eller betalt. Spørsmålet kan ha vært ledende. 10 tannleger er et svært lite utvalg. b) Å gå fra 2 til 4 hendelser er en dobling, men tallene er så små at tilfeldigheter kan forklare hele endringen. Prosentvis endring er misvisende ved små tall. c) 15 elever er et for lite utvalg til å trekke konklusjoner. En eller to flinke elever kan trekke opp hele gjennomsnittet. Standardavviket bør oppgis.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Misvisende grafer** bruker avkuttede akser, skjeve skalaer eller 3D-effekter
- **Cherry-picking** er å velge ut data som støtter et bestemt synspunkt
- **Feilkilder:** utvalgsskjevhet, ledende spørsmål, selvseleksjon, konfunderende variabler
- **Korrelasjon ≠ kausalitet** – samvariasjon betyr ikke årsakssammenheng
- **Konfunderende variabler** kan forklare tilsynelatende sammenhenger
- For å vise kausalitet trenger man korrelasjon, tidsrekkefølge og utelukkelse av alternativer
- **Ærlig statistikk:** bruk riktig sentralmål, oppgi spredning, start y-aksen på 0, vis hele bildet`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal gjennomføre en undersøkelse blant elevene på skolen din om skjermtid. a) Formuler tre spørsmål som er nøytrale (ikke ledende). b) Forklar hvordan du ville valgt ut elever for å få et representativt utvalg. c) Nevn tre feilkilder som kan oppstå og forklar hvordan du ville redusert dem. d) Hvilke sentralmål og spredningsmål ville du brukt for å presentere resultatene?',
        solution: 'a) Eksempler: «Hvor mange timer bruker du på skjerm per dag utenom skoletid?» (med valgalternativer), «Hva bruker du mest tid på: sosiale medier, gaming, strømming eller annet?», «Har du forsøkt å redusere skjermtiden din det siste året?». b) Tilfeldig utvalg fra alle trinn og klasser (ikke bare egen klasse). Sørg for at begge kjønn og alle trinn er representert. c) Selvseleksjon (løsning: gjør det obligatorisk), sosial ønskbarhet (løsning: anonym undersøkelse), uklare spørsmål (løsning: pilottest). d) Median og IQR fordi skjermtid ofte er skjevfordelt (noen bruker veldig mye). Supplér med gjennomsnitt og standardavvik.',
      },
    },
    {
      id: '2p-3-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les følgende påstand og analyser den kritisk:\n\n«En ny studie viser at elever som bruker nettbrett i undervisningen scorer 15 % lavere på prøver enn elever som bruker papir og blyant. Studien ble gjennomført av Foreningen for Tradisjonell Undervisning og inkluderte 200 elever fra to ulike skoler.»\n\na) Identifiser minst tre potensielle feilkilder eller svakheter. b) Hvilke konfunderende variabler kan spille inn? c) Kan vi konkludere at nettbrett forårsaker dårligere resultater? Begrunn. d) Hva ville gjort studien mer pålitelig?',
        hints: ['Tenk over hvem som har gjennomført studien, utvalget, og hva som kan påvirke resultatene utenom nettbrettet.'],
        solution: 'a) 1) Interessekonflikt: Foreningen for Tradisjonell Undervisning har en agenda. 2) Utvalget: To skoler er lite – forskjellene kan skyldes forskjeller mellom skolene. 3) Ingen randomisering: Vi vet ikke om gruppene var like i utgangspunktet. b) Konfunderende variabler: sosioøkonomisk bakgrunn, lærerkvalitet, elevmotivasjon, fag som ble undervist, erfaringsnivå med nettbrett. c) Nei, vi kan ikke konkludere med kausalitet. Det er bare korrelasjon. Forskjellen kan skyldes skolene, lærerne, elevgruppen eller andre faktorer. d) Mer pålitelig: randomisert kontrollert studie, flere skoler, uavhengig forskergruppe, kontroll for konfunderende variabler, lengre tidsperiode, oppgi spredning i tillegg til gjennomsnitt.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Misvisende statistikk', definition: 'Statistikk fremstilt på en måte som gir feil inntrykk (avkuttet akse, cherry-picking)' },
    { term: 'Utvalgsskjevhet', definition: 'Utvalget er ikke representativt for populasjonen man vil uttale seg om' },
    { term: 'Ledende spørsmål', definition: 'Spørsmål formulert slik at det styrer svaret i en bestemt retning' },
    { term: 'Konfunderende variabel', definition: 'En tredje variabel som påvirker begge variablene vi undersøker' },
    { term: 'Korrelasjon', definition: 'To variabler samvarierer – når den ene endrer seg, endrer den andre seg også' },
    { term: 'Kausalitet', definition: 'En variabel forårsaker faktisk endring i en annen variabel' },
    { term: 'Selvseleksjon', definition: 'Bare engasjerte personer deltar – gir skjevt utvalg' },
  ],
};

// Eksporter alle kapitler i seksjon 3
export const MATEMATIKK_2P_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_3_1,
  CHAPTER_2P_3_2,
  CHAPTER_2P_3_3,
];

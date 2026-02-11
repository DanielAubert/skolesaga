/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 7: Budsjettering og økonomistyring
 *
 * Kapittel 7.1–7.5
 *
 * LK20-kompetansemål:
 * - utarbeide og tolke resultat- og likviditetsbudsjett
 * - gjennomføre avviksanalyse og foreslå tiltak
 * - bruke økonomiske nøkkeltall til å vurdere en virksomhets økonomi
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Hva er et budsjett?
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_7_1: TextbookChapter = {
  id: 'okonomi-ledelse-7-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '7.1',
  title: 'Hva er et budsjett?',
  description: 'En innføring i hva et budsjett er, hvilke typer budsjetter som finnes, og hvordan budsjettprosessen foregår i en virksomhet.',
  estimatedMinutes: 20,
  competenceGoals: ['utarbeide og tolke resultat- og likviditetsbudsjett'],
  keyTerms: [
    { term: 'Budsjett', definition: 'En tallmessig plan for en fremtidig periode som viser forventede inntekter, kostnader eller kontantstrømmer.' },
    { term: 'Resultatbudsjett', definition: 'Budsjett som viser forventede inntekter og kostnader og gir et estimert resultat (overskudd eller underskudd).' },
    { term: 'Likviditetsbudsjett', definition: 'Budsjett som viser forventede inn- og utbetalinger og viser om virksomheten har nok penger til å betale regningene sine.' },
    { term: 'Budsjettprosess', definition: 'Den strukturerte fremgangsmåten for å utarbeide, vedta og følge opp budsjetter i en virksomhet.' },
  ],
  content: [
    {
      id: 'ol-7-1-intro',
      type: 'text',
      content: `## Budsjettet som styringsverktøy

Et budsjett er en plan uttrykt i tall. Det viser hva virksomheten forventer av inntekter, kostnader og pengestrømmer i en kommende periode. Budsjettet er et av de viktigste verktøyene for å styre en bedrift, fordi det tvinger ledelsen til å tenke fremover, sette mål og planlegge ressursbruken.

I dette kapittelet skal du lære:
- Hva et budsjett er og hvorfor det er viktig
- Forskjellen på ulike typer budsjetter
- Hvordan budsjettprosessen foregår
- Sammenhengen mellom budsjett og regnskap`,
    },
    {
      id: 'ol-7-1-def-1',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en tallmessig handlingsplan for en fremtidig periode. Det uttrykker virksomhetens mål og planer i kroner og øre, og fungerer som en målestokk for å vurdere faktiske resultater i etterkant.`,
    },
    {
      id: 'ol-7-1-text-1',
      type: 'text',
      content: `### Hvorfor budsjettere?

Budsjetter har flere viktige funksjoner:

**1. Planlegging**
Budsjettet tvinger ledelsen til å tenke fremover. Hva forventer vi av salg? Hvilke kostnader vil vi ha? Trenger vi å ansette flere?

**2. Koordinering**
Ulike avdelinger må samarbeide om budsjettet. Salgsavdelingen melder inn forventet salg, produksjonen planlegger kapasitet, og økonomiavdelingen sammenstiller alt.

**3. Motivasjon**
Når medarbeidere har klare mål å jobbe mot, kan budsjettet virke motiverende. Salgsavdelingen vet hva de skal oppnå, og kan måle seg mot budsjettet.

**4. Kontroll**
Budsjettet brukes som referansepunkt når vi sammenligner med faktiske tall. Avvik mellom budsjett og regnskap gir verdifull informasjon.`,
    },
    {
      id: 'ol-7-1-def-2',
      type: 'definition',
      title: 'Typer budsjetter',
      content: `De viktigste budsjetttypene er:

- **Resultatbudsjett**: Viser forventede inntekter og kostnader for en periode. Svarer på: Vil vi gå med overskudd?
- **Likviditetsbudsjett**: Viser forventede inn- og utbetalinger. Svarer på: Har vi nok penger på konto?
- **Balansebudsjett**: Viser forventet balanse ved slutten av perioden. Svarer på: Hvordan ser eiendeler og gjeld ut?
- **Investeringsbudsjett**: Viser planlagte investeringer. Svarer på: Hva skal vi kjøpe av utstyr og anlegg?`,
    },
    {
      id: 'ol-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Forskjellen på resultat- og likviditetsbudsjett',
      problem: 'Kafeen «Bønna» selger kaffe for 100 000 kr i januar. 40 000 kr er kredittsalg som betales i februar. Varekostnaden er 35 000 kr, og husleie er 20 000 kr. Hvordan ser dette ut i de to budsjettene?',
      solution: `**Resultatbudsjettet (januar):**

| Post | Beløp |
|------|------:|
| Salgsinntekter | 100 000 |
| − Varekostnad | 35 000 |
| − Husleie | 20 000 |
| **= Resultat** | **45 000** |

Resultatbudsjettet viser *hele* salget i januar, uansett når pengene kommer inn.

**Likviditetsbudsjettet (januar):**

| Post | Beløp |
|------|------:|
| Innbetalinger fra salg | 60 000 |
| − Utbetaling varekjøp | 35 000 |
| − Utbetaling husleie | 20 000 |
| **= Likviditetsendring** | **5 000** |

Likviditetsbudsjettet viser bare pengene som faktisk *kommer inn og går ut* i januar. De 40 000 kr i kredittsalg dukker opp som innbetaling i februar.`,
    },
    {
      id: 'ol-7-1-text-2',
      type: 'text',
      content: `### Budsjettprosessen

Utarbeidelse av budsjett følger vanligvis disse stegene:

**Steg 1: Sett mål og forutsetninger**
Hva er virksomhetens mål for neste år? Hvilke forutsetninger legger vi til grunn for prisutvikling, markedsvekst og lønnsøkning?

**Steg 2: Innhent budsjettforslag**
Hver avdeling utarbeider sine egne forslag basert på målene. Salgsavdelingen lager salgsbudsjett, produksjonen lager produksjonsbudsjett osv.

**Steg 3: Sammenstill og juster**
Økonomiavdelingen setter sammen alle forslagene og sjekker at de henger sammen. Ofte må forslagene justeres for å bli realistiske.

**Steg 4: Vedta budsjettet**
Styret eller ledelsen godkjenner det endelige budsjettet.

**Steg 5: Følg opp**
Gjennom året sammenlignes faktiske tall med budsjettet, og avvik analyseres.`,
    },
    {
      id: 'ol-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hvilket budsjett viser om virksomheten har nok penger til å betale regningene sine?',
        options: [
          { id: 'a', text: 'Resultatbudsjett', isCorrect: false },
          { id: 'b', text: 'Likviditetsbudsjett', isCorrect: true },
          { id: 'c', text: 'Balansebudsjett', isCorrect: false },
          { id: 'd', text: 'Investeringsbudsjett', isCorrect: false },
        ],
        solution: 'Likviditetsbudsjettet viser inn- og utbetalinger og avdekker om virksomheten har nok likvide midler (penger) til å dekke sine forpliktelser til rett tid.',
      },
    },
    {
      id: 'ol-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er IKKE en funksjon ved budsjettering?',
        options: [
          { id: 'a', text: 'Planlegging av fremtidige aktiviteter', isCorrect: false },
          { id: 'b', text: 'Koordinering mellom avdelinger', isCorrect: false },
          { id: 'c', text: 'Garantere fremtidig overskudd', isCorrect: true },
          { id: 'd', text: 'Kontroll ved sammenligning med faktiske tall', isCorrect: false },
        ],
        solution: 'Et budsjett kan aldri garantere overskudd - det er en plan, ikke en garanti. Budsjettet hjelper med planlegging, koordinering, motivasjon og kontroll.',
      },
    },
    {
      id: 'ol-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'En bedrift selger varer for 200 000 kr i mars. Halvparten er kontantsalg, resten er kredittsalg med 30 dagers betalingsfrist. Varekostnaden på 80 000 kr betales kontant ved kjøp. Lønn på 60 000 kr utbetales i mars.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp et enkelt resultatbudsjett for mars.',
            solution: 'Salgsinntekter: 200 000 − Varekostnad: 80 000 − Lønn: 60 000 = Resultat: 60 000 kr.',
          },
          {
            label: 'b',
            task: 'Sett opp et enkelt likviditetsbudsjett for mars.',
            solution: 'Innbetalinger fra salg: 100 000 (kontantsalg) − Utbetaling varekjøp: 80 000 − Utbetaling lønn: 60 000 = Likviditetsendring: −40 000 kr. Kredittsalget på 100 000 kr kommer inn i april.',
          },
          {
            label: 'c',
            task: 'Forklar hvorfor resultat og likviditet er forskjellige.',
            solution: 'Resultatbudsjettet viser alle inntekter og kostnader uavhengig av betalingstidspunkt. Likviditetsbudsjettet viser kun faktiske pengestrømmer. Kredittsalget på 100 000 kr teller som inntekt i mars, men pengene kommer ikke inn før april.',
          },
        ],
        solution: 'Resultat i mars er 60 000 kr (overskudd), mens likviditetsendringen er −40 000 kr (underskudd på penger). Dette viser at en bedrift kan gå med overskudd og likevel ha likviditetsproblemer.',
      },
    },
    {
      id: 'ol-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Forklar de fire funksjonene et budsjett har i en virksomhet, og gi et eksempel på hver.',
        hints: ['Tenk på planlegging, koordinering, motivasjon og kontroll.'],
        solution: '1) Planlegging: Bedriften planlegger å ansette to nye selgere fordi budsjettet viser økt salg. 2) Koordinering: Salgsavdelingen og produksjonsavdelingen samarbeider om å sikre at produksjonen matcher forventet salg. 3) Motivasjon: Selgerne har et salgsmål på 500 000 kr per kvartal å strekke seg mot. 4) Kontroll: Etter kvartalet sammenligner man faktisk salg med budsjettert salg og analyserer avvik.',
      },
    },
    {
      id: 'ol-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        task: 'Beskriv budsjettprosessens fem steg med egne ord, og forklar hvorfor rekkefølgen er viktig.',
        solution: 'Steg 1: Sette mål og forutsetninger (uten mål vet man ikke hva man planlegger for). Steg 2: Innhente budsjettforslag fra avdelingene (de som kjenner driften best lager forslagene). Steg 3: Sammenstille og justere (sikre at alt henger sammen og er realistisk). Steg 4: Vedta budsjettet (formell godkjenning gir legitimitet). Steg 5: Følge opp gjennom året (uten oppfølging er budsjettet bare et papir). Rekkefølgen er viktig fordi hvert steg bygger på det forrige.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'Samleoppgave: Nettbutikken «TechShop» har følgende tall for januar: Salg 300 000 kr (60 % kontant, 40 % kreditt med 30 dagers frist). Varekjøp 150 000 kr (betales kontant). Lønn 80 000 kr. Husleie 15 000 kr. Markedsføring 10 000 kr. I tillegg har de en IB (inngående beholdning) på bankkonto på 50 000 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp resultatbudsjett for januar.',
            solution: 'Salgsinntekter 300 000 − Varekostnad 150 000 − Lønn 80 000 − Husleie 15 000 − Markedsføring 10 000 = Resultat 45 000 kr.',
          },
          {
            label: 'b',
            task: 'Sett opp likviditetsbudsjett for januar med IB og UB.',
            solution: 'IB bank: 50 000. Innbetalinger: 180 000 (60 % av 300 000). Utbetalinger: 150 000 + 80 000 + 15 000 + 10 000 = 255 000. Likviditetsendring: 180 000 − 255 000 = −75 000. UB bank: 50 000 − 75 000 = −25 000 kr.',
          },
          {
            label: 'c',
            task: 'Har TechShop et likviditetsproblem? Foreslå tiltak.',
            solution: 'Ja, UB bank er −25 000 kr, noe som betyr at de ikke har nok penger. Tiltak: 1) Forhandle kassekreditt med banken. 2) Forsøke å få leverandørkreditt på varekjøp. 3) Tilby kontantrabatt for å få inn kredittsalg raskere. 4) Redusere varelager.',
          },
        ],
        solution: 'Selv om TechShop har et resultatoverskudd på 45 000 kr, har de et likviditetsunderskudd fordi mye av salget er på kreditt mens kostnadene betales kontant.',
      },
    },
    {
      id: 'ol-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Et **budsjett** er en tallmessig plan for en fremtidig periode
- De viktigste typene er **resultatbudsjett** og **likviditetsbudsjett**
- Budsjettet har fire funksjoner: **planlegging, koordinering, motivasjon og kontroll**
- **Budsjettprosessen** har fem steg fra målsetting til oppfølging
- En bedrift kan ha positivt resultat men negativt likviditet, og omvendt`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Resultatbudsjett
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_7_2: TextbookChapter = {
  id: 'okonomi-ledelse-7-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '7.2',
  title: 'Resultatbudsjett',
  description: 'Lær hvordan du setter opp et resultatbudsjett med salgsbudsjett, kostnadsbudsjett og fullstendig oppstilling med konkrete talleksempler.',
  estimatedMinutes: 24,
  competenceGoals: ['utarbeide og tolke resultat- og likviditetsbudsjett'],
  keyTerms: [
    { term: 'Salgsbudsjett', definition: 'Delbudsjett som viser forventet salg i antall enheter og kroner for en periode.' },
    { term: 'Kostnadsbudsjett', definition: 'Delbudsjett som viser forventede kostnader fordelt på ulike kategorier.' },
    { term: 'Dekningsbidrag', definition: 'Salgsinntekter minus variable kostnader. Viser hva som er igjen til å dekke faste kostnader og gi overskudd.' },
    { term: 'Variable kostnader', definition: 'Kostnader som endrer seg med produksjons- eller salgsvolum, som varekostnad og provisjon.' },
    { term: 'Faste kostnader', definition: 'Kostnader som er uavhengige av produksjons- eller salgsvolum på kort sikt, som husleie og forsikring.' },
  ],
  content: [
    {
      id: 'ol-7-2-intro',
      type: 'text',
      content: `## Fra salgsplan til bunnlinje

Resultatbudsjettet er det mest kjente budsjettet og viser om virksomheten forventer å gå med overskudd eller underskudd i en gitt periode. Det bygges opp nedenfra med salgsbudsjett og kostnadsbudsjett, og sammenstilles til et komplett resultatbudsjett.

I dette kapittelet skal du lære:
- Hvordan lage et salgsbudsjett
- Hvordan lage et kostnadsbudsjett
- Forskjellen på variable og faste kostnader i budsjettet
- Hvordan sette opp et fullstendig resultatbudsjett`,
    },
    {
      id: 'ol-7-2-def-1',
      type: 'definition',
      title: 'Resultatbudsjett',
      content: `Et **resultatbudsjett** er en oppstilling som viser budsjetterte inntekter, variable kostnader, dekningsbidrag, faste kostnader og resultat for en kommende periode. Oppstillingen følger ofte bidragsmetoden:

Salgsinntekter − Variable kostnader = **Dekningsbidrag** − Faste kostnader = **Resultat**`,
    },
    {
      id: 'ol-7-2-text-1',
      type: 'text',
      content: `### Steg 1: Salgsbudsjettet

Salgsbudsjettet er utgangspunktet for hele resultatbudsjettet. Det viser hva vi forventer å selge i antall og kroner.

**For å lage et salgsbudsjett trenger du:**
- Forventet salgsvolum (antall enheter)
- Salgspris per enhet
- Eventuelt fordelt på måneder eller kvartaler

**Eksempel:** En butikk forventer å selge 500 enheter per måned til 200 kr per enhet.

| Måned | Antall | Pris | Salgsinntekt |
|-------|-------:|-----:|-------------:|
| Januar | 500 | 200 | 100 000 |
| Februar | 500 | 200 | 100 000 |
| Mars | 600 | 200 | 120 000 |
| **1. kvartal** | **1 600** | | **320 000** |

Salgsbudsjettet bygger på historiske tall, markedsanalyser, sesongvariasjoner og forventede endringer.`,
    },
    {
      id: 'ol-7-2-text-2',
      type: 'text',
      content: `### Steg 2: Kostnadsbudsjettet

Kostnadsbudsjettet deles i **variable** og **faste** kostnader:

**Variable kostnader** (endrer seg med volum):
- Varekostnad (innkjøpspris på varer)
- Provisjon til selgere
- Frakt og emballasje
- Energi knyttet til produksjon

**Faste kostnader** (uavhengige av volum):
- Husleie
- Lønn til fast ansatte
- Forsikring
- Avskrivninger
- Renter på lån
- Administrasjonskostnader`,
    },
    {
      id: 'ol-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Fullstendig resultatbudsjett for klesbutikken «Stil»',
      problem: 'Klesbutikken «Stil» skal lage resultatbudsjett for 1. kvartal. De forventer å selge 1 200 plagg til gjennomsnittspris 400 kr. Innkjøpsprisen per plagg er 160 kr. Faste kostnader per kvartal: Husleie 45 000 kr, lønn 120 000 kr, forsikring 6 000 kr, avskrivninger 9 000 kr, diverse 12 000 kr.',
      solution: `**Resultatbudsjett 1. kvartal – Klesbutikken Stil**

| Post | Beregning | Beløp |
|------|-----------|------:|
| Salgsinntekter | 1 200 × 400 kr | 480 000 |
| − Varekostnad | 1 200 × 160 kr | 192 000 |
| **= Dekningsbidrag** | | **288 000** |
| − Husleie | | 45 000 |
| − Lønn | | 120 000 |
| − Forsikring | | 6 000 |
| − Avskrivninger | | 9 000 |
| − Diverse | | 12 000 |
| **Sum faste kostnader** | | **192 000** |
| **= Resultat** | | **96 000** |

**Dekningsgrad** = 288 000 / 480 000 × 100 % = **60 %**

Butikken forventer et overskudd på 96 000 kr for kvartalet.`,
    },
    {
      id: 'ol-7-2-tip-1',
      type: 'tip',
      title: 'Dekningsgrad som kontrollverktøy',
      content: `Dekningsgraden viser hvor mange prosent av salgsinntektene som er igjen til å dekke faste kostnader og gi overskudd. En butikk med dekningsgrad på 60 % beholder 60 øre av hver krone solgt etter at variable kostnader er dekket. Denne prosentsatsen er nyttig for å vurdere lønnsomhet og gjøre raske overslag.`,
    },
    {
      id: 'ol-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Månedsfordelt resultatbudsjett',
      problem: 'Stil forventer 350 plagg i januar, 350 i februar og 500 i mars (vårslipp). Faste kostnader fordeles likt per måned (192 000 / 3 = 64 000 per måned).',
      solution: `| Post | Januar | Februar | Mars | Sum Q1 |
|------|-------:|--------:|-----:|-------:|
| Salgsinntekter | 140 000 | 140 000 | 200 000 | 480 000 |
| − Varekostnad | 56 000 | 56 000 | 80 000 | 192 000 |
| **= Dekningsbidrag** | **84 000** | **84 000** | **120 000** | **288 000** |
| − Faste kostnader | 64 000 | 64 000 | 64 000 | 192 000 |
| **= Resultat** | **20 000** | **20 000** | **56 000** | **96 000** |

Vi ser at mars er den beste måneden takket være vårslippet. Månedsfordelingen gir mer detaljert styringsinformasjon.`,
    },
    {
      id: 'ol-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er dekningsbidrag?',
        options: [
          { id: 'a', text: 'Salgsinntekter minus faste kostnader', isCorrect: false },
          { id: 'b', text: 'Salgsinntekter minus variable kostnader', isCorrect: true },
          { id: 'c', text: 'Salgsinntekter minus alle kostnader', isCorrect: false },
          { id: 'd', text: 'Faste kostnader minus variable kostnader', isCorrect: false },
        ],
        solution: 'Dekningsbidrag = Salgsinntekter − Variable kostnader. Det viser hva som er igjen til å dekke faste kostnader og gi overskudd.',
      },
    },
    {
      id: 'ol-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en variabel kostnad?',
        options: [
          { id: 'a', text: 'Husleie', isCorrect: false },
          { id: 'b', text: 'Varekostnad', isCorrect: true },
          { id: 'c', text: 'Forsikring', isCorrect: false },
          { id: 'd', text: 'Avskrivninger', isCorrect: false },
        ],
        solution: 'Varekostnad er en variabel kostnad fordi den øker når salget øker - jo flere varer du selger, desto mer koster innkjøpet. Husleie, forsikring og avskrivninger er faste kostnader.',
      },
    },
    {
      id: 'ol-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Blomsterbutikken «Floria» forventer å selge 800 buketter per måned til 250 kr per bukett. Innkjøpskostnaden per bukett er 100 kr. Faste kostnader per måned: Husleie 18 000 kr, lønn 55 000 kr, forsikring 2 000 kr, diverse 5 000 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn salgsinntektene per måned.',
            solution: '800 × 250 = 200 000 kr.',
          },
          {
            label: 'b',
            task: 'Beregn dekningsbidraget per måned.',
            solution: '200 000 − (800 × 100) = 200 000 − 80 000 = 120 000 kr.',
          },
          {
            label: 'c',
            task: 'Sett opp et fullstendig resultatbudsjett for én måned.',
            solution: 'Salgsinntekter 200 000 − Varekostnad 80 000 = DB 120 000 − Husleie 18 000 − Lønn 55 000 − Forsikring 2 000 − Diverse 5 000 = Sum faste 80 000. Resultat: 120 000 − 80 000 = 40 000 kr.',
          },
          {
            label: 'd',
            task: 'Beregn dekningsgraden.',
            solution: 'DG = 120 000 / 200 000 × 100 % = 60 %.',
          },
        ],
        solution: 'Floria har et forventet månedlig resultat på 40 000 kr med en dekningsgrad på 60 %.',
      },
    },
    {
      id: 'ol-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Floria vurderer å senke prisen til 220 kr per bukett for å øke salget til 1 000 buketter per måned. Faste kostnader er uendret.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp nytt resultatbudsjett med den nye prisen.',
            solution: 'Salgsinntekter: 1 000 × 220 = 220 000. Varekostnad: 1 000 × 100 = 100 000. DB: 120 000. Faste kostnader: 80 000. Resultat: 40 000 kr.',
          },
          {
            label: 'b',
            task: 'Sammenlign de to alternativene. Hvilket er mest lønnsomt?',
            solution: 'Begge gir samme resultat (40 000 kr), men med lavere pris er dekningsgraden lavere: 120 000/220 000 = 54,5 % mot 60 %. Alternativ 1 er tryggere fordi risikoen er lavere og det er mer rom for prissvingninger.',
          },
        ],
        solution: 'Selv om resultatet er likt, gir den lavere dekningsgraden i alternativ 2 mindre sikkerhet. Små endringer i volum eller kostnader vil ha større effekt på resultatet.',
      },
    },
    {
      id: 'ol-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'Forklar hvorfor salgsbudsjettet er utgangspunktet for hele resultatbudsjettet.',
        hints: ['Tenk på hva som styrer inntektene og de variable kostnadene.'],
        solution: 'Salgsbudsjettet er utgangspunktet fordi det bestemmer salgsinntektene (antall × pris) og de variable kostnadene (antall × variabel enhetskostnad). Uten å vite forventet salg kan vi verken beregne inntekter eller variable kostnader. De faste kostnadene er i hovedsak uavhengige av salg, men salgsbudsjettet bestemmer dekningsbidraget som avgjør om de faste kostnadene dekkes.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-7-2-ex-6',
        number: '7.2.6',
        type: 'classic',
        task: 'Samleoppgave: Sportsbutikken «Aktiv» selger tre produktkategorier. Sett opp et resultatbudsjett for 1. kvartal.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn salgsinntektene for hver kategori: Sko (400 par × 800 kr), klær (600 enheter × 500 kr), utstyr (200 enheter × 1 200 kr).',
            solution: 'Sko: 400 × 800 = 320 000. Klær: 600 × 500 = 300 000. Utstyr: 200 × 1 200 = 240 000. Sum: 860 000 kr.',
          },
          {
            label: 'b',
            task: 'Beregn variable kostnader med innkjøpspriser: Sko 400 kr/par, klær 200 kr/enhet, utstyr 600 kr/enhet.',
            solution: 'Sko: 400 × 400 = 160 000. Klær: 600 × 200 = 120 000. Utstyr: 200 × 600 = 120 000. Sum variable: 400 000 kr.',
          },
          {
            label: 'c',
            task: 'Faste kostnader for kvartalet: Husleie 75 000 kr, lønn 210 000 kr, forsikring 12 000 kr, avskrivninger 18 000 kr, markedsføring 30 000 kr. Sett opp fullstendig resultatbudsjett.',
            solution: 'Salgsinntekter 860 000 − Variable kostnader 400 000 = DB 460 000. Sum faste: 75 000 + 210 000 + 12 000 + 18 000 + 30 000 = 345 000. Resultat: 460 000 − 345 000 = 115 000 kr. DG = 460 000/860 000 × 100 % = 53,5 %.',
          },
        ],
        solution: 'Aktiv har et forventet kvartalsresultat på 115 000 kr med en samlet dekningsgrad på 53,5 %.',
      },
    },
    {
      id: 'ol-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Salgsbudsjettet** er utgangspunktet og viser forventet salg i antall og kroner
- **Kostnadsbudsjettet** skiller mellom variable og faste kostnader
- **Resultatbudsjettet** følger bidragsmetoden: Inntekter − VK = DB − FK = Resultat
- **Dekningsgraden** viser prosentandelen av inntektene som dekker faste kostnader og gir overskudd
- Månedsfordeling gir mer detaljert styringsinformasjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Likviditetsbudsjett
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_7_3: TextbookChapter = {
  id: 'okonomi-ledelse-7-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '7.3',
  title: 'Likviditetsbudsjett',
  description: 'Lær å sette opp et likviditetsbudsjett som viser inn- og utbetalinger, beregne likviditetsreserve og vurdere om virksomheten kan betale sine forpliktelser.',
  estimatedMinutes: 24,
  competenceGoals: ['utarbeide og tolke resultat- og likviditetsbudsjett'],
  keyTerms: [
    { term: 'Likviditet', definition: 'Evnen til å betale forpliktelser ved forfall. En virksomhet er likvid når den har nok penger til å betale regningene sine.' },
    { term: 'Innbetalinger', definition: 'Penger som faktisk kommer inn på konto - fra kontantsalg, innbetaling av kundefordringer, lån mv.' },
    { term: 'Utbetalinger', definition: 'Penger som faktisk går ut av konto - til varekjøp, lønn, husleie, skatt, avdrag på lån mv.' },
    { term: 'Likviditetsreserve', definition: 'En buffer av likvide midler som virksomheten holder for å håndtere uforutsette utbetalinger eller forsinkede innbetalinger.' },
    { term: 'Kassekreditt', definition: 'En kredittramme i banken som virksomheten kan trekke på ved behov, som en «buffer» for likviditeten.' },
  ],
  content: [
    {
      id: 'ol-7-3-intro',
      type: 'text',
      content: `## Har vi nok penger?

Mens resultatbudsjettet viser om vi tjener penger, viser likviditetsbudsjettet om vi har penger. Mange bedrifter som går med overskudd kan likevel gå konkurs fordi de ikke klarer å betale regningene til rett tid. Likviditetsbudsjettet avdekker nettopp dette problemet.

I dette kapittelet skal du lære:
- Forskjellen på inntekter/kostnader og innbetalinger/utbetalinger
- Hvordan sette opp et likviditetsbudsjett måned for måned
- Betydningen av likviditetsreserve
- Tiltak for å forbedre likviditeten`,
    },
    {
      id: 'ol-7-3-def-1',
      type: 'definition',
      title: 'Likviditetsbudsjett',
      content: `Et **likviditetsbudsjett** er en oppstilling som viser forventede inn- og utbetalinger for en kommende periode, vanligvis fordelt på måneder. Det viser saldoen på bankkontoen ved slutten av hver periode.

Oppstilling: IB bank + Innbetalinger − Utbetalinger = **UB bank**`,
    },
    {
      id: 'ol-7-3-text-1',
      type: 'text',
      content: `### Viktig forskjell: Inntekt vs. innbetaling

**Inntekt** oppstår når salget skjer (resultatbudsjettet).
**Innbetaling** skjer når pengene faktisk kommer inn på konto (likviditetsbudsjettet).

Forskjellen skyldes ofte **kredittsalg**: Kunden kjøper i januar, men betaler i februar. Januar har inntekten, februar har innbetalingen.

**Tilsvarende for kostnader:**
**Kostnad** oppstår når ressursen forbrukes.
**Utbetaling** skjer når pengene faktisk går ut.

**Poster som er med i resultatbudsjettet men IKKE i likviditetsbudsjettet:**
- Avskrivninger (ingen penger går ut)

**Poster som er med i likviditetsbudsjettet men IKKE i resultatbudsjettet:**
- Avdrag på lån (reduserer gjeld, ikke kostnad)
- MVA-innbetalinger til staten
- Uttak av egenkapital`,
    },
    {
      id: 'ol-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Likviditetsbudsjett for Kafeen «Bønna»',
      problem: 'Kafeen Bønna har følgende budsjetterte tall for 1. kvartal:\n\n- Kontantsalg: Jan 80 000, Feb 85 000, Mars 95 000\n- Kredittsalg (30 dager): Jan 40 000, Feb 45 000, Mars 50 000\n- Varekjøp (kontant): Jan 40 000, Feb 42 000, Mars 48 000\n- Lønn: 50 000 per måned\n- Husleie: 15 000 per måned\n- Avdrag lån: 5 000 per måned\n- MVA-betaling mars: 25 000\n- IB bank 1. januar: 30 000 kr\n\nSett opp likviditetsbudsjett.',
      solution: `**Likviditetsbudsjett 1. kvartal – Kafeen Bønna**

| Post | Januar | Februar | Mars |
|------|-------:|--------:|-----:|
| **IB bank** | **30 000** | **0** | **−2 000** |
| + Kontantsalg | 80 000 | 85 000 | 95 000 |
| + Innbetaling kundefordringer | 0 | 40 000 | 45 000 |
| **= Sum innbetalinger** | **80 000** | **125 000** | **140 000** |
| − Varekjøp | 40 000 | 42 000 | 48 000 |
| − Lønn | 50 000 | 50 000 | 50 000 |
| − Husleie | 15 000 | 15 000 | 15 000 |
| − Avdrag lån | 5 000 | 5 000 | 5 000 |
| − MVA | 0 | 0 | 25 000 |
| **= Sum utbetalinger** | **110 000** | **112 000** | **143 000** |
| **Likviditetsendring** | **−30 000** | **13 000** | **−3 000** |
| **UB bank** | **0** | **13 000** | **−5 000** |

UB bank i januar = 30 000 − 30 000 = 0
UB bank i februar = 0 + 13 000 = 13 000
UB bank i mars = 13 000 − 3 000 − 5 000... nei, la oss regne: 13 000 + (140 000 − 143 000) = 13 000 − 3 000 = 10 000.

**Korrigert:** UB mars = 13 000 + 140 000 − 143 000 = 10 000 kr.

Bønna klarer seg gjennom kvartalet, men januar er stram med UB = 0.`,
    },
    {
      id: 'ol-7-3-warning-1',
      type: 'warning',
      title: 'MVA og skatt',
      content: `Husk at merverdiavgift (MVA) og skattebetalinger er store utbetalinger som ofte kommer på bestemte tidspunkter. MVA betales annenhver måned (for de fleste) og skattetrekk betales annenhver måned. Disse kan skape store likviditetsutfordringer hvis du ikke planlegger for dem.`,
    },
    {
      id: 'ol-7-3-text-2',
      type: 'text',
      content: `### Likviditetsreserve og tiltak

**Likviditetsreserve** er en buffer av tilgjengelige midler. Tommelfingerregel: Ha nok til å dekke 1-2 måneders faste utbetalinger.

**Tiltak for å forbedre likviditeten:**

1. **Fremskynde innbetalinger:**
   - Gi kontantrabatt (f.eks. 2 % rabatt ved betaling innen 10 dager)
   - Kort betalingsfrist på fakturaer
   - Purring ved forfall
   - Forskuddsbetaling fra kunder

2. **Utsette utbetalinger:**
   - Forhandle lengre betalingsfrister med leverandører
   - Leie i stedet for å kjøpe utstyr
   - Utsette investeringer

3. **Øke tilgjengelige midler:**
   - Kassekreditt i banken
   - Selge unødvendige eiendeler
   - Redusere varelager`,
    },
    {
      id: 'ol-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hvilken post er med i likviditetsbudsjettet men IKKE i resultatbudsjettet?',
        options: [
          { id: 'a', text: 'Avskrivninger', isCorrect: false },
          { id: 'b', text: 'Varekostnad', isCorrect: false },
          { id: 'c', text: 'Avdrag på lån', isCorrect: true },
          { id: 'd', text: 'Lønn', isCorrect: false },
        ],
        solution: 'Avdrag på lån er en utbetaling (penger ut av kontoen), men det er ikke en kostnad - det reduserer gjelden. Derfor er det med i likviditetsbudsjettet men ikke i resultatbudsjettet. Avskrivninger er det motsatte: en kostnad (i resultatbudsjettet) men ingen utbetaling.',
      },
    },
    {
      id: 'ol-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hva betyr det at en bedrift er «illikvid»?',
        options: [
          { id: 'a', text: 'Bedriften har lavt overskudd', isCorrect: false },
          { id: 'b', text: 'Bedriften har ikke nok penger til å betale forpliktelsene ved forfall', isCorrect: true },
          { id: 'c', text: 'Bedriften har for mange ansatte', isCorrect: false },
          { id: 'd', text: 'Bedriften har for store salgsinntekter', isCorrect: false },
        ],
        solution: 'Illikvid betyr at bedriften ikke har nok likvide midler (penger) til å betale regninger og forpliktelser når de forfaller. Dette kan skje selv om bedriften er lønnsom.',
      },
    },
    {
      id: 'ol-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Nettbutikken «DataNett» har følgende budsjetterte tall for april-juni. IB bank 1. april: 45 000 kr.\n\nKontantsalg: April 60 000, Mai 70 000, Juni 80 000.\nKredittsalg (30 dager): April 90 000, Mai 100 000, Juni 110 000.\nKundefordringer fra mars som innbetales i april: 80 000.\nVarekjøp (30 dagers kreditt): April 70 000, Mai 75 000, Juni 80 000.\nLeverandørgjeld fra mars betales i april: 65 000.\nLønn: 65 000 per måned. Husleie: 12 000 per måned. Avdrag lån: 8 000 per måned.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp likviditetsbudsjett for april, mai og juni.',
            solution: 'April: IB 45 000. Innbetalinger: 60 000 + 80 000 = 140 000. Utbetalinger: 65 000 + 65 000 + 12 000 + 8 000 = 150 000. Likv.endring: −10 000. UB: 35 000.\n\nMai: IB 35 000. Innbetalinger: 70 000 + 90 000 = 160 000. Utbetalinger: 70 000 + 65 000 + 12 000 + 8 000 = 155 000. Likv.endring: 5 000. UB: 40 000.\n\nJuni: IB 40 000. Innbetalinger: 80 000 + 100 000 = 180 000. Utbetalinger: 75 000 + 65 000 + 12 000 + 8 000 = 160 000. Likv.endring: 20 000. UB: 60 000.',
          },
          {
            label: 'b',
            task: 'Vurder likviditeten i perioden. Er det noen kritiske måneder?',
            solution: 'Likviditeten er tilfredsstillende gjennom hele perioden. April er den strammeste måneden (UB 35 000), men det er fortsatt positiv saldo. Trenden er positiv med økende UB fra 35 000 til 60 000.',
          },
        ],
        solution: 'DataNett har tilfredsstillende likviditet i perioden, med en positiv trend fra 35 000 i april til 60 000 i juni.',
      },
    },
    {
      id: 'ol-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Forklar tre tiltak en bedrift kan gjennomføre for å forbedre likviditeten. Gi et konkret eksempel på hvert tiltak.',
        hints: ['Tenk på tiltak knyttet til innbetalinger, utbetalinger og finansiering.'],
        solution: '1) Kontantrabatt: Tilby 2 % rabatt ved betaling innen 10 dager. Kunder betaler raskere, og pengene kommer inn tidligere. 2) Leverandørkreditt: Forhandle 60 dagers betalingsfrist i stedet for 30 dager. Utsetter utbetalinger. 3) Kassekreditt: Avtale en kassekredittramme på 100 000 kr med banken. Gir en buffer når innbetalingene er sene.',
      },
    },
    {
      id: 'ol-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        task: 'Forklar hvorfor avskrivninger er en kostnad i resultatbudsjettet men ikke en utbetaling i likviditetsbudsjettet.',
        solution: 'Avskrivninger representerer verditapet på en eiendel over tid. Når en bedrift kjøper en maskin for 300 000 kr, skjer utbetalingen ved kjøpet. Men kostnaden fordeles over maskinens levetid, f.eks. 60 000 kr per år i 5 år. Hvert år er det en kostnad i resultatbudsjettet (60 000 kr avskrivning), men det er ingen utbetaling - pengene gikk ut da maskinen ble kjøpt.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Samleoppgave: Restauranten «Smak» har følgende tall for 1. kvartal. IB bank: 20 000 kr.\n\nKontantsalg: Jan 120 000, Feb 110 000, Mars 140 000.\nVarekjøp (kontant): Jan 55 000, Feb 50 000, Mars 65 000.\nLønn (inkl. skattetrekk): Jan 70 000, Feb 70 000, Mars 70 000.\nHusleie: 22 000 per måned.\nForsikring (betales i januar for hele kvartalet): 18 000.\nSkattetrekk ansatte (betales annenhver måned, jan+feb betales i mars): 28 000.\nAvdrag lån: 10 000 per måned.\nAvskrivninger: 8 000 per måned.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp likviditetsbudsjett for 1. kvartal. Husk: avskrivninger er IKKE med.',
            solution: 'Januar: IB 20 000. Inn: 120 000. Ut: 55 000 + 70 000 + 22 000 + 18 000 + 10 000 = 175 000. Endring: −55 000. UB: −35 000.\n\nFebruar: IB −35 000. Inn: 110 000. Ut: 50 000 + 70 000 + 22 000 + 10 000 = 152 000. Endring: −42 000. UB: −77 000.\n\nMars: IB −77 000. Inn: 140 000. Ut: 65 000 + 70 000 + 22 000 + 28 000 + 10 000 = 195 000. Endring: −55 000. UB: −132 000.',
          },
          {
            label: 'b',
            task: 'Har Smak et likviditetsproblem? Forklar.',
            solution: 'Ja, Smak har et alvorlig likviditetsproblem. Allerede i januar er UB negativ (−35 000), og det forverres gjennom kvartalet til −132 000 i mars. Uten tiltak (kassekreditt, lån, kapitaltilførsel) vil restauranten ikke kunne betale regningene sine.',
          },
          {
            label: 'c',
            task: 'Foreslå tre konkrete tiltak Smak kan gjennomføre.',
            solution: '1) Søke kassekreditt på minst 150 000 kr for å håndtere de negative periodene. 2) Forhandle med forsikringsselskapet om månedlig betaling (6 000/mnd i stedet for 18 000 på en gang). 3) Vurdere å øke prisene eller redusere varekostnaden for å bedre kontantstrømmen. 4) Forsøke å reforhandle lånet med lavere avdrag.',
          },
        ],
        solution: 'Smak har et alvorlig og forverrende likviditetsproblem gjennom kvartalet. Forsikringsbetalingen i januar og skattetrekk i mars forsterker problemene.',
      },
    },
    {
      id: 'ol-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Likviditetsbudsjettet** viser inn- og utbetalinger og bankbeholdning
- Det er viktig å skille mellom **inntekt/kostnad** og **innbetaling/utbetaling**
- **Avskrivninger** er en kostnad men ingen utbetaling, **avdrag** er en utbetaling men ingen kostnad
- En **likviditetsreserve** er viktig for å håndtere uforutsette hendelser
- Tiltak for bedre likviditet inkluderer raskere innbetalinger, utsatte utbetalinger og kassekreditt`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Avviksanalyse
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_7_4: TextbookChapter = {
  id: 'okonomi-ledelse-7-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '7.4',
  title: 'Avviksanalyse',
  description: 'Lær å sammenligne budsjett med regnskap, beregne avvik i kroner og prosent, analysere årsaker til avvik og foreslå korrigerende tiltak.',
  estimatedMinutes: 22,
  competenceGoals: ['gjennomføre avviksanalyse og foreslå tiltak'],
  keyTerms: [
    { term: 'Avviksanalyse', definition: 'Sammenligning av budsjetterte tall med faktiske regnskapstall for å identifisere og forklare forskjeller.' },
    { term: 'Positivt avvik', definition: 'Avvik som er gunstig for resultatet - enten høyere inntekter eller lavere kostnader enn budsjettert.' },
    { term: 'Negativt avvik', definition: 'Avvik som er ugunstig for resultatet - enten lavere inntekter eller høyere kostnader enn budsjettert.' },
    { term: 'Korrigerende tiltak', definition: 'Handlinger som settes i verk for å rette opp negative avvik og sikre at budsjettet nås.' },
  ],
  content: [
    {
      id: 'ol-7-4-intro',
      type: 'text',
      content: `## Budsjett møter virkelighet

Et budsjett har liten verdi hvis det bare legges i skuffen. Den virkelige nytten kommer når vi sammenligner budsjettet med faktiske regnskapstall og analyserer avvikene. Avviksanalysen gir oss informasjon om hva som gikk bra, hva som gikk dårlig, og hva vi bør gjøre annerledes.

I dette kapittelet skal du lære:
- Hvordan beregne avvik mellom budsjett og regnskap
- Forskjellen på positive og negative avvik
- Hvordan analysere årsaker til avvik
- Hvordan foreslå og iverksette korrigerende tiltak`,
    },
    {
      id: 'ol-7-4-def-1',
      type: 'definition',
      title: 'Avviksanalyse',
      content: `**Avviksanalyse** er prosessen med å sammenligne budsjetterte tall med faktiske regnskapstall, beregne forskjellen (avviket), analysere årsakene og foreslå tiltak. Avviket beregnes slik:

**Avvik = Regnskap − Budsjett**

For inntekter: Positivt avvik = bedre enn planlagt
For kostnader: Negativt avvik (høyere kostnad) = dårligere enn planlagt`,
    },
    {
      id: 'ol-7-4-text-1',
      type: 'text',
      content: `### Beregning av avvik

Avvik beregnes både i **kroner** og i **prosent**:

**Avvik i kroner** = Regnskapstall − Budsjettall

**Avvik i prosent** = (Avvik i kroner / Budsjettall) × 100 %

**Tolkning:**

| Post | Positivt avvik | Negativt avvik |
|------|---------------|---------------|
| Inntekter | Høyere enn budsjett (bra) | Lavere enn budsjett (dårlig) |
| Kostnader | Lavere enn budsjett (bra) | Høyere enn budsjett (dårlig) |
| Resultat | Høyere enn budsjett (bra) | Lavere enn budsjett (dårlig) |

Merk: For kostnader «snur» vi tolkningen - en høyere kostnad enn budsjettert er et **negativt avvik** (ugunstig), selv om tallet er positivt.`,
    },
    {
      id: 'ol-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Avviksanalyse for Klesbutikken «Stil»',
      problem: 'Klesbutikken Stil hadde følgende tall for 1. kvartal. Sammenlign budsjett med regnskap og analyser avvikene.',
      solution: `| Post | Budsjett | Regnskap | Avvik kr | Avvik % |
|------|--------:|---------:|---------:|--------:|
| Salgsinntekter | 480 000 | 456 000 | −24 000 | −5,0 % |
| − Varekostnad | 192 000 | 198 000 | −6 000 | −3,1 % |
| **= Dekningsbidrag** | **288 000** | **258 000** | **−30 000** | **−10,4 %** |
| − Husleie | 45 000 | 45 000 | 0 | 0 % |
| − Lønn | 120 000 | 125 000 | −5 000 | −4,2 % |
| − Forsikring | 6 000 | 6 000 | 0 | 0 % |
| − Avskrivninger | 9 000 | 9 000 | 0 | 0 % |
| − Diverse | 12 000 | 15 000 | −3 000 | −25,0 % |
| **Sum faste** | **192 000** | **200 000** | **−8 000** | **−4,2 %** |
| **= Resultat** | **96 000** | **58 000** | **−38 000** | **−39,6 %** |

**Analyse:**
- Salget var 5 % lavere enn budsjettert (mulig årsak: dårlig vær i mars reduserte vårslippet)
- Varekostnaden var høyere pga. prisøkning fra leverandør
- Lønn ble høyere pga. overtid for å kompensere sykefravær
- Diversekostnader økte pga. uforutsett vedlikehold
- Resultatavviket er stort (−39,6 %) og krever tiltak`,
    },
    {
      id: 'ol-7-4-text-2',
      type: 'text',
      content: `### Årsaker til avvik

Avvik kan ha mange årsaker:

**Volumavvik:** Solgte mer eller mindre enn planlagt
- "Vi solgte bare 1 100 plagg mot budsjetterte 1 200"

**Prisavvik:** Prisene ble annerledes enn antatt
- "Innkjøpsprisen økte fra 160 til 165 kr per plagg"

**Effektivitetsavvik:** Brukte mer eller mindre ressurser
- "Vi brukte mer arbeidstid per enhet enn planlagt"

**Eksterne årsaker:** Forhold utenfor virksomhetens kontroll
- Markedsendringer, konkurranse, vær, konjunkturer

**Interne årsaker:** Forhold virksomheten kan påvirke
- Dårlig planlegging, svikt i rutiner, feil prissetting`,
    },
    {
      id: 'ol-7-4-text-3',
      type: 'text',
      content: `### Korrigerende tiltak

Når avvik er identifisert og årsaker analysert, må ledelsen vurdere tiltak:

**Ved negative salgsavvik:**
- Øke markedsføringen
- Justere prisene
- Tilby kampanjer
- Forbedre kundeservicen

**Ved negative kostnadsavvik:**
- Reforhandle leverandøravtaler
- Effektivisere driften
- Redusere unødvendige kostnader
- Forbedre innkjøpsrutiner

**Ved positive avvik:**
- Forstå hva som fungerte bra
- Videreføre vellykkede tiltak
- Vurdere om budsjettet var for forsiktig

**Vurder også:** Er budsjettet urealistisk og bør revideres?`,
    },
    {
      id: 'ol-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Salgsinntektene er 520 000 kr i regnskapet mot 500 000 kr i budsjettet. Hva slags avvik er dette?',
        options: [
          { id: 'a', text: 'Negativt avvik på 20 000 kr', isCorrect: false },
          { id: 'b', text: 'Positivt avvik på 20 000 kr (4 %)', isCorrect: true },
          { id: 'c', text: 'Negativt avvik på 4 %', isCorrect: false },
          { id: 'd', text: 'Det er ikke noe avvik', isCorrect: false },
        ],
        solution: 'Avvik = 520 000 − 500 000 = +20 000 kr. Avvik i prosent = 20 000 / 500 000 × 100 % = 4 %. For inntekter er høyere enn budsjett et positivt (gunstig) avvik.',
      },
    },
    {
      id: 'ol-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Lønnskostnadene er 135 000 kr i regnskapet mot 120 000 kr i budsjettet. Hva slags avvik er dette?',
        options: [
          { id: 'a', text: 'Positivt avvik fordi regnskapstallet er høyere', isCorrect: false },
          { id: 'b', text: 'Negativt avvik på 15 000 kr (12,5 %)', isCorrect: true },
          { id: 'c', text: 'Positivt avvik på 12,5 %', isCorrect: false },
          { id: 'd', text: 'Nøytralt avvik', isCorrect: false },
        ],
        solution: 'For kostnader er høyere enn budsjettert et negativt (ugunstig) avvik. Avvik = 135 000 − 120 000 = 15 000 kr. Avvik % = 15 000 / 120 000 × 100 % = 12,5 %. Høyere kostnader reduserer resultatet.',
      },
    },
    {
      id: 'ol-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Blomsterbutikken Floria hadde følgende tall for mars:\n\nBudsjett: Salg 200 000, varekostnad 80 000, lønn 55 000, husleie 18 000, forsikring 2 000, diverse 5 000.\nRegnskap: Salg 185 000, varekostnad 82 000, lønn 55 000, husleie 18 000, forsikring 2 000, diverse 7 500.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp en avviksanalyse med avvik i kroner og prosent for alle poster.',
            solution: 'Salg: 185 000 − 200 000 = −15 000 (−7,5 %). Varekostnad: 82 000 − 80 000 = +2 000 (neg. avvik, +2,5 %). Lønn: 0 avvik. Husleie: 0 avvik. Forsikring: 0 avvik. Diverse: 7 500 − 5 000 = +2 500 (neg. avvik, +50 %). Resultat: Budsjett 40 000, Regnskap 20 500, Avvik −19 500 (−48,8 %).',
          },
          {
            label: 'b',
            task: 'Hvilke poster har de største avvikene? Hva kan være årsakene?',
            solution: 'Salget har et avvik på −7,5 %, mulig årsak: færre kunder pga. dårlig vær eller konkurranse. Diverse har +50 % avvik, mulig årsak: uforutsett reparasjon. Varekostnaden har +2,5 % avvik, mulig årsak: prisøkning på blomster (sesongvariasjon) eller mer svinn.',
          },
          {
            label: 'c',
            task: 'Foreslå to konkrete tiltak for å forbedre resultatet neste måned.',
            solution: '1) Markedsføringstiltak for å øke salget: annonsere på sosiale medier, tilby rabatt på store bestillinger, starte samarbeid med lokale bedrifter om leveranser. 2) Redusere svinn ved bedre innkjøpsplanlegging, bestille oftere men mindre mengder for å ha ferskere varer.',
          },
        ],
        solution: 'Floria har et resultatavvik på −48,8 %. Hovedårsaken er lavere salg og noe høyere kostnader. Tiltak bør rettes mot å øke salget og redusere svinn.',
      },
    },
    {
      id: 'ol-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'En bedrift budsjetterte med å selge 2 000 enheter til 150 kr, men solgte 1 800 enheter til 160 kr. Beregn volumavvik og prisavvik separat.',
        hints: ['Volumavvik = (faktisk antall − budsjettert antall) × budsjettert pris. Prisavvik = (faktisk pris − budsjettert pris) × faktisk antall.'],
        solution: 'Budsjettert salg: 2 000 × 150 = 300 000. Faktisk salg: 1 800 × 160 = 288 000. Totalavvik: −12 000 kr.\n\nVolumavvik: (1 800 − 2 000) × 150 = −200 × 150 = −30 000 kr (negativt - solgte færre).\nPrisavvik: (160 − 150) × 1 800 = 10 × 1 800 = +18 000 kr (positivt - solgte dyrere).\n\nKontroll: −30 000 + 18 000 = −12 000 kr (stemmer med totalavviket).\n\nKonklusjon: Bedriften solgte færre enheter, men til høyere pris. Nettoeffekten er et negativt avvik på 12 000 kr.',
      },
    },
    {
      id: 'ol-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom eksterne og interne årsaker til avvik, og gi to eksempler på hver.',
        solution: 'Interne årsaker er forhold bedriften kan påvirke: 1) Dårlig innkjøpsplanlegging som ga høyere varekostnad. 2) Sykefravær som krevde dyre vikarer.\n\nEksterne årsaker er utenfor bedriftens kontroll: 1) Ny konkurrent åpnet i nabolaget og tok markedsandeler. 2) Råvarepriser steg pga. internasjonal etterspørsel.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        task: 'Samleoppgave: Treningssenteret «FitForm» har følgende budsjett og regnskap for januar:\n\nBudsjett: Medlemsinntekter 180 000, PT-timer 40 000, kiosk 15 000. Lønn 110 000, husleie 35 000, strøm 8 000, utstyr/vedlikehold 5 000, markedsføring 10 000.\nRegnskap: Medlemsinntekter 175 000, PT-timer 52 000, kiosk 12 000. Lønn 115 000, husleie 35 000, strøm 11 000, utstyr/vedlikehold 14 000, markedsføring 10 000.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp fullstendig avviksanalyse med avvik i kroner og prosent.',
            solution: 'Inntekter: Medlemsinntekter −5 000 (−2,8 %), PT-timer +12 000 (+30 %), Kiosk −3 000 (−20 %). Sum inntekter: Budsjett 235 000, Regnskap 239 000, Avvik +4 000 (+1,7 %).\n\nKostnader: Lønn +5 000 (+4,5 %), Husleie 0, Strøm +3 000 (+37,5 %), Vedlikehold +9 000 (+180 %), Markedsføring 0. Sum kostnader: Budsjett 168 000, Regnskap 185 000, Avvik +17 000 (+10,1 %).\n\nResultat: Budsjett 67 000, Regnskap 54 000, Avvik −13 000 (−19,4 %).',
          },
          {
            label: 'b',
            task: 'Identifiser de tre viktigste avvikene og foreslå årsaker.',
            solution: '1) Vedlikehold +180 %: Uforutsett reparasjon av treningsutstyr. 2) PT-timer +30 %: Økt etterspørsel, kanskje pga. nyttårsforsetter. 3) Strøm +37,5 %: Kald januar ga høyere oppvarmingskostnader.',
          },
          {
            label: 'c',
            task: 'Foreslå tiltak for å forbedre resultatet resten av kvartalet.',
            solution: '1) Utnytte den økte etterspørselen etter PT-timer: markedsføre PT-pakker og kursmoduler. 2) Forebyggende vedlikehold for å unngå dyre havarier. 3) Energieffektivisering: justere termostater, investere i LED-belysning. 4) Vurdere å øke kioskutvalget for å løfte kiosksalget.',
          },
        ],
        solution: 'FitForm har et negativt resultatavvik på 13 000 kr, hovedsakelig drevet av høye vedlikeholds- og strømkostnader. PT-inntektene er en positiv overraskelse som bør utnyttes videre.',
      },
    },
    {
      id: 'ol-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Avviksanalyse** sammenligner budsjett med regnskap for å identifisere forskjeller
- Avvik beregnes i **kroner** og **prosent**: Avvik = Regnskap − Budsjett
- **Positivt avvik** er gunstig (høyere inntekter eller lavere kostnader)
- Avvik kan skyldes **volum**, **pris**, **effektivitet** eller **eksterne faktorer**
- **Korrigerende tiltak** iverksettes for å rette opp negative avvik`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Økonomistyring i praksis
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_7_5: TextbookChapter = {
  id: 'okonomi-ledelse-7-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '7.5',
  title: 'Økonomistyring i praksis',
  description: 'Lær om økonomiske nøkkeltall, lønnsomhetsanalyse, KPI-er og balansert målstyring som verktøy for å styre og vurdere en virksomhets økonomi.',
  estimatedMinutes: 24,
  competenceGoals: ['bruke økonomiske nøkkeltall til å vurdere en virksomhets økonomi'],
  keyTerms: [
    { term: 'Nøkkeltall', definition: 'Beregnede forholdstall som gir konsentrert informasjon om virksomhetens økonomiske stilling og utvikling.' },
    { term: 'Resultatgrad', definition: 'Nøkkeltall som viser hvor stor andel av omsetningen som blir igjen som overskudd: (Resultat / Omsetning) × 100 %.' },
    { term: 'Likviditetsgrad', definition: 'Nøkkeltall som viser evnen til å betale kortsiktig gjeld: Omløpsmidler / Kortsiktig gjeld.' },
    { term: 'Egenkapitalandel', definition: 'Nøkkeltall som viser hvor stor del av eiendelene som er finansiert med egenkapital: (Egenkapital / Totalkapital) × 100 %.' },
    { term: 'KPI', definition: 'Key Performance Indicator - målbare verdier som viser i hvilken grad virksomheten når sine mål.' },
    { term: 'Balansert målstyring', definition: 'Strategisk styringsverktøy som måler virksomhetens prestasjoner i fire perspektiver: økonomi, kunde, interne prosesser og læring/vekst.' },
  ],
  content: [
    {
      id: 'ol-7-5-intro',
      type: 'text',
      content: `## Fra tall til handling

God økonomistyring handler om mer enn å føre regnskap og lage budsjetter. Det handler om å bruke tallene aktivt til å ta beslutninger, sette mål og styre virksomheten i riktig retning. I dette kapittelet lærer du om verktøyene som gjør tall til nyttig styringsinformasjon.

I dette kapittelet skal du lære:
- De viktigste økonomiske nøkkeltallene
- Hvordan beregne og tolke nøkkeltall
- Hva KPI-er er og hvordan de brukes
- Prinsippene bak balansert målstyring`,
    },
    {
      id: 'ol-7-5-def-1',
      type: 'definition',
      title: 'Økonomiske nøkkeltall',
      content: `**Økonomiske nøkkeltall** er beregnede forholdstall som gir konsentrert informasjon om virksomhetens lønnsomhet, likviditet og soliditet. De gjør det mulig å sammenligne med tidligere perioder, med budsjett og med andre bedrifter i samme bransje.`,
    },
    {
      id: 'ol-7-5-text-1',
      type: 'text',
      content: `### Lønnsomhetstall

**Resultatgrad (overskuddsgrad):**
Viser hvor stor andel av omsetningen som blir til overskudd.
$$\\text{Resultatgrad} = \\frac{\\text{Driftsresultat}}{\\text{Driftsinntekter}} \\times 100\\,\\%$$

**Totalkapitalrentabilitet:**
Viser avkastningen på all kapital investert i bedriften.
$$\\text{TKR} = \\frac{\\text{Driftsresultat + Finansinntekter}}{\\text{Gjennomsnittlig totalkapital}} \\times 100\\,\\%$$

**Egenkapitalrentabilitet:**
Viser avkastningen eierne får på sin investerte kapital.
$$\\text{EKR} = \\frac{\\text{Resultat etter skatt}}{\\text{Gjennomsnittlig egenkapital}} \\times 100\\,\\%$$`,
    },
    {
      id: 'ol-7-5-text-2',
      type: 'text',
      content: `### Likviditetstall

**Likviditetsgrad 1:**
Viser om virksomheten kan betale kortsiktig gjeld med omløpsmidlene.
$$\\text{LG1} = \\frac{\\text{Omløpsmidler}}{\\text{Kortsiktig gjeld}}$$
Bør være over 2 (tommelfingerregel).

**Likviditetsgrad 2:**
Samme som LG1, men uten varelager (som kan være vanskelig å selge raskt).
$$\\text{LG2} = \\frac{\\text{Omløpsmidler} - \\text{Varelager}}{\\text{Kortsiktig gjeld}}$$
Bør være over 1.

### Soliditetstall

**Egenkapitalandel:**
Viser hvor stor andel av eiendelene som er finansiert med egenkapital.
$$\\text{EK-andel} = \\frac{\\text{Egenkapital}}{\\text{Totalkapital}} \\times 100\\,\\%$$
Bør være over 30 % for de fleste bransjer.

**Gjeldsgrad:**
Viser forholdet mellom gjeld og egenkapital.
$$\\text{Gjeldsgrad} = \\frac{\\text{Gjeld}}{\\text{Egenkapital}}$$
Jo lavere, desto bedre soliditet.`,
    },
    {
      id: 'ol-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Nøkkeltallsanalyse for SportAS',
      problem: 'SportAS har følgende tall:\n- Driftsinntekter: 5 000 000 kr\n- Driftsresultat: 400 000 kr\n- Omløpsmidler: 1 200 000 kr (herav varelager 400 000)\n- Kortsiktig gjeld: 800 000 kr\n- Egenkapital: 1 500 000 kr\n- Totalkapital: 3 500 000 kr\n\nBeregn de viktigste nøkkeltallene.',
      solution: `**Lønnsomhet:**
Resultatgrad = 400 000 / 5 000 000 × 100 % = **8 %**
(Bedriften beholder 8 øre av hver omsatt krone som overskudd)

**Likviditet:**
LG1 = 1 200 000 / 800 000 = **1,5**
(Under anbefalt nivå på 2 - noe stramt)

LG2 = (1 200 000 − 400 000) / 800 000 = **1,0**
(Akkurat på grensen - bør forbedres)

**Soliditet:**
EK-andel = 1 500 000 / 3 500 000 × 100 % = **42,9 %**
(Tilfredsstillende - godt over 30 %)

Gjeldsgrad = (3 500 000 − 1 500 000) / 1 500 000 = **1,33**
(Akseptabelt, men gjelden er 1,33 ganger egenkapitalen)

**Konklusjon:** SportAS har god lønnsomhet og soliditet, men likviditeten er noe stram. Tiltak bør rettes mot å forbedre likviditeten.`,
    },
    {
      id: 'ol-7-5-text-3',
      type: 'text',
      content: `### KPI-er (Key Performance Indicators)

KPI-er er målbare verdier som viser om virksomheten er på rett vei. De bør være:

- **Spesifikke:** Klart definert hva som måles
- **Målbare:** Kan uttrykkes i tall
- **Relevante:** Knyttet til virksomhetens mål
- **Tidsbestemte:** Har en tidsramme

**Eksempler på KPI-er:**

| Område | KPI | Mål |
|--------|-----|-----|
| Salg | Omsetning per ansatt | 1 200 000 kr/år |
| Kunder | Kundetilfredshet | Over 4,5/5 |
| Økonomi | Resultatgrad | Over 10 % |
| Drift | Svinn-prosent | Under 2 % |
| Ansatte | Sykefravær | Under 5 % |`,
    },
    {
      id: 'ol-7-5-def-2',
      type: 'definition',
      title: 'Balansert målstyring (BMS)',
      content: `**Balansert målstyring** (Balanced Scorecard) er et strategisk styringsverktøy utviklet av Kaplan og Norton. Det måler virksomheten i fire perspektiver:

1. **Finansielt perspektiv:** Lønnsomhet, vekst, kostnadseffektivitet
2. **Kundeperspektivet:** Tilfredshet, lojalitet, markedsandel
3. **Interne prosesser:** Kvalitet, effektivitet, innovasjon
4. **Læring og vekst:** Medarbeidertilfredshet, kompetanseutvikling

Poenget er at gode resultater på de tre siste perspektivene driver de finansielle resultatene.`,
    },
    {
      id: 'ol-7-5-example-2',
      type: 'example',
      title: 'Eksempel: Balansert målstyring for en klesbutikk',
      problem: 'Klesbutikken Stil vil innføre balansert målstyring. Sett opp mål og KPI-er for hvert perspektiv.',
      solution: `| Perspektiv | Mål | KPI | Målverdi |
|-----------|-----|-----|----------|
| **Finans** | Øke lønnsomheten | Resultatgrad | 12 % |
| | Vekst i omsetning | Omsetningsvekst | 8 % per år |
| **Kunde** | Øke kundetilfredshet | Kundescore | 4,5 / 5 |
| | Flere faste kunder | Kundeklubb-medlemmer | 500 |
| **Prosesser** | Redusere svinn | Svinn-prosent | Under 3 % |
| | Raskere varemottak | Tid fra mottak til hylle | Under 2 timer |
| **Læring** | Kompetente ansatte | Kurs per ansatt per år | 3 |
| | Motiverte ansatte | Medarbeidertilfredshet | Over 4/5 |

**Sammenheng:** Kompetente og motiverte ansatte (læring) gir bedre kundeservice (prosesser), som gir fornøyde kunder (kunde), som gir økt salg og lønnsomhet (finans).`,
    },
    {
      id: 'ol-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'En bedrift har omløpsmidler på 600 000 kr og kortsiktig gjeld på 400 000 kr. Hva er likviditetsgrad 1?',
        options: [
          { id: 'a', text: '0,67', isCorrect: false },
          { id: 'b', text: '1,0', isCorrect: false },
          { id: 'c', text: '1,5', isCorrect: true },
          { id: 'd', text: '2,0', isCorrect: false },
        ],
        solution: 'LG1 = Omløpsmidler / Kortsiktig gjeld = 600 000 / 400 000 = 1,5. Tommelfingerregelen sier at LG1 bør være over 2, så denne bedriften har noe stram likviditet.',
      },
    },
    {
      id: 'ol-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        task: 'Hvilke fire perspektiver inngår i balansert målstyring?',
        options: [
          { id: 'a', text: 'Finans, salg, produksjon og markedsføring', isCorrect: false },
          { id: 'b', text: 'Finans, kunde, interne prosesser og læring/vekst', isCorrect: true },
          { id: 'c', text: 'Inntekter, kostnader, likviditet og soliditet', isCorrect: false },
          { id: 'd', text: 'Planlegging, gjennomføring, kontroll og rapportering', isCorrect: false },
        ],
        solution: 'Balansert målstyring (Balanced Scorecard) måler virksomheten i fire perspektiver: finansielt, kunde, interne prosesser og læring/vekst. Ideen er at de tre siste driver de finansielle resultatene.',
      },
    },
    {
      id: 'ol-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'En bedrift har følgende tall: Driftsinntekter 3 200 000, driftsresultat 256 000, egenkapital 900 000, totalkapital 2 400 000.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn resultatgraden.',
            solution: 'Resultatgrad = 256 000 / 3 200 000 × 100 % = 8 %.',
          },
          {
            label: 'b',
            task: 'Beregn egenkapitalandelen.',
            solution: 'EK-andel = 900 000 / 2 400 000 × 100 % = 37,5 %.',
          },
          {
            label: 'c',
            task: 'Beregn gjeldsgraden.',
            solution: 'Gjeld = 2 400 000 − 900 000 = 1 500 000. Gjeldsgrad = 1 500 000 / 900 000 = 1,67.',
          },
          {
            label: 'd',
            task: 'Vurder bedriftens økonomiske stilling basert på nøkkeltallene.',
            solution: 'Resultatgraden på 8 % er akseptabel for mange bransjer. EK-andelen på 37,5 % er over anbefalte 30 %, noe som viser god soliditet. Gjeldsgraden på 1,67 betyr at gjelden er 1,67 ganger egenkapitalen, som er akseptabelt men det finnes rom for forbedring. Samlet sett har bedriften en tilfredsstillende økonomisk stilling.',
          },
        ],
        solution: 'Bedriften har tilfredsstillende lønnsomhet (8 % resultatgrad) og soliditet (37,5 % EK-andel).',
      },
    },
    {
      id: 'ol-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Forklar hvorfor balansert målstyring måler mer enn bare økonomiske resultater.',
        hints: ['Tenk på hva som driver de økonomiske resultatene.'],
        solution: 'Finansielle resultater er «etterpå-indikatorer» - de viser hva som allerede har skjedd. Kundetilfredshet, prosesseffektivitet og medarbeiderkompetanse er «drivere» som påvirker fremtidige finansielle resultater. En bedrift som bare måler økonomi, oppdager problemer for sent. Ved å måle alle fire perspektiver kan ledelsen gripe inn tidlig og styre mot bedre resultater.',
      },
    },
    {
      id: 'ol-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Gi tre eksempler på KPI-er for en nettbutikk, og forklar hvorfor hver KPI er nyttig.',
        solution: '1) Konverteringsrate (andel besøkende som kjøper): Viser hvor effektiv nettbutikken er til å gjøre besøkende til kunder. 2) Gjennomsnittlig ordreverdi: Viser hvor mye hver kunde handler for, nyttig for å vurdere mersalg-strategier. 3) Returprosent: Viser andelen varer som returneres, nyttig for å vurdere produktkvalitet og produktbeskrivelser.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        task: 'Samleoppgave: Møbelbutikken «HjemDesign» har følgende tall:\n\n- Driftsinntekter: 8 000 000 kr\n- Driftsresultat: 480 000 kr\n- Omløpsmidler: 2 000 000 kr (herav varelager 1 200 000 kr)\n- Kortsiktig gjeld: 1 400 000 kr\n- Egenkapital: 2 200 000 kr\n- Totalkapital: 5 800 000 kr\n- 8 ansatte',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn resultatgrad, LG1, LG2, egenkapitalandel og gjeldsgrad.',
            solution: 'Resultatgrad: 480 000/8 000 000 × 100 = 6 %. LG1: 2 000 000/1 400 000 = 1,43. LG2: (2 000 000−1 200 000)/1 400 000 = 0,57. EK-andel: 2 200 000/5 800 000 × 100 = 37,9 %. Gjeldsgrad: 3 600 000/2 200 000 = 1,64.',
          },
          {
            label: 'b',
            task: 'Vurder hvert nøkkeltall opp mot tommelfingerregler.',
            solution: 'Resultatgrad 6 % er moderat - lav margin. LG1 1,43 er under anbefalt 2 - stram likviditet. LG2 0,57 er under 1 - bekymringsverdig, mye kapital er bundet i varelager. EK-andel 37,9 % er over 30 % - tilfredsstillende soliditet. Gjeldsgrad 1,64 er akseptabel.',
          },
          {
            label: 'c',
            task: 'Beregn omsetning per ansatt og vurder om det er et godt nivå.',
            solution: 'Omsetning per ansatt: 8 000 000 / 8 = 1 000 000 kr. For en møbelbutikk er dette et rimelig nivå, men det avhenger av bransjenorm. Hvis bransjesnittet er 1 200 000, er det rom for forbedring.',
          },
          {
            label: 'd',
            task: 'Foreslå tiltak basert på nøkkeltallsanalysen.',
            solution: '1) Redusere varelager ved å forbedre innkjøpsplanlegging og ha utsalg på trege varer - dette bedrer LG2. 2) Vurdere å øke prisene eller redusere kostnader for å bedre resultatgraden. 3) Forhandle lengre betalingsfrister med leverandører for å bedre LG1. 4) Fokusere på å selge mer per ansatt gjennom opplæring og mersalg.',
          },
        ],
        solution: 'HjemDesign har tilfredsstillende soliditet men stram likviditet (spesielt LG2) og moderat lønnsomhet. Hovedutfordringen er mye kapital bundet i varelager.',
      },
    },
    {
      id: 'ol-7-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-7-5-ex-7',
        number: '7.5.7',
        type: 'classic',
        task: 'Samleoppgave: Lag et forslag til balansert målstyring for en kafé med 5 ansatte. Sett opp minst to mål og KPI-er for hvert av de fire perspektivene.',
        solution: 'Finansielt: 1) Øke omsetning med 10 % (KPI: månedlig omsetning). 2) Resultatgrad over 15 % (KPI: resultatgrad).\n\nKunde: 1) Øke kundetilfredshet (KPI: Google-anmeldelser over 4,5 stjerner). 2) Flere stammekunder (KPI: antall lojalitetskort i bruk > 200).\n\nInterne prosesser: 1) Redusere svinn (KPI: svinn under 3 % av varekjøp). 2) Rask service (KPI: gjennomsnittlig ventetid under 3 minutter).\n\nLæring og vekst: 1) Kompetanseheving (KPI: alle ansatte gjennomfører barista-kurs). 2) Lavt sykefravær (KPI: sykefravær under 4 %).',
      },
    },
    {
      id: 'ol-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Nøkkeltall** gir konsentrert informasjon om lønnsomhet, likviditet og soliditet
- **Resultatgrad** viser overskudd som andel av omsetningen
- **Likviditetsgrad** (1 og 2) viser evnen til å betale kortsiktig gjeld
- **Egenkapitalandel** viser hvor solid virksomheten er finansiert
- **KPI-er** er målbare indikatorer knyttet til virksomhetens mål
- **Balansert målstyring** måler fire perspektiver: finans, kunde, prosesser og læring`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_LEDELSE_DEL7_CHAPTERS = [
  CHAPTER_OKONOMI_LEDELSE_7_1,
  CHAPTER_OKONOMI_LEDELSE_7_2,
  CHAPTER_OKONOMI_LEDELSE_7_3,
  CHAPTER_OKONOMI_LEDELSE_7_4,
  CHAPTER_OKONOMI_LEDELSE_7_5,
];

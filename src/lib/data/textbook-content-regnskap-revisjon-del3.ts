/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - Del 3: Resultatregnskap
 *
 * Kapittel 3.1–3.5
 *
 * LK20-kompetansemål:
 * - sette opp og analysere resultatregnskap etter regnskapsloven
 * - forklare og beregne de ulike postene i et resultatregnskap
 * - tolke resultatregnskapet og bruke det som grunnlag for beslutningstaking
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Driftsinntekter
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_3_1: TextbookChapter = {
  id: 'regnskap-revisjon-3-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '3.1',
  title: 'Driftsinntekter',
  description: 'I dette kapittelet lærer du om salgsinntekter, andre driftsinntekter og regler for inntektsføring i resultatregnskapet.',
  estimatedMinutes: 22,
  competenceGoals: ['sette opp og analysere resultatregnskap etter regnskapsloven'],
  keyTerms: [
    { term: 'Salgsinntekter', definition: 'Inntekter fra virksomhetens hovedaktivitet, altså salg av varer og tjenester' },
    { term: 'Andre driftsinntekter', definition: 'Inntekter fra sekundær virksomhet som leieinntekter, gevinst ved salg av driftsmidler og offentlige tilskudd' },
    { term: 'Inntektsføring', definition: 'Tidspunktet og metoden for når en inntekt skal registreres i regnskapet' },
    { term: 'Opptjeningsprinsippet', definition: 'Inntekter skal resultatføres når de er opptjent, uavhengig av betalingstidspunktet' },
    { term: 'Netto salgsinntekter', definition: 'Salgsinntekter fratrukket merverdiavgift, rabatter og returer' },
  ],
  content: [
    {
      id: 'rr-3-1-intro',
      type: 'text',
      content: `## Driftsinntekter i resultatregnskapet

Resultatregnskapet starter alltid med virksomhetens inntekter. Driftsinntektene er de inntektene virksomheten genererer gjennom sin ordinære drift. Disse deles i to hovedkategorier: **salgsinntekter** og **andre driftsinntekter**.

I dette kapittelet skal du lære:
- Hva salgsinntekter og andre driftsinntekter er
- Hvordan inntekter føres etter opptjeningsprinsippet
- Forskjellen mellom brutto og netto salgsinntekter
- Hvordan driftsinntektene presenteres i resultatregnskapet`,
    },
    {
      id: 'rr-3-1-salgsinntekter',
      type: 'text',
      title: 'Salgsinntekter',
      content: `Salgsinntekter er inntekter fra virksomhetens hovedaktivitet. For en matvarebutikk er det salg av dagligvarer, for et regnskapsbyrå er det honorarer for regnskapstjenester, og for en industrivirksomhet er det salg av produserte varer.

**Brutto salgsinntekter** er det totale salgsbeløpet inkludert merverdiavgift (mva). I resultatregnskapet vises imidlertid **netto salgsinntekter**, som er brutto salg fratrukket:
- Merverdiavgift (mva)
- Rabatter og bonuser gitt til kunder
- Returer og reklamasjoner

| Post | Beløp |
|------|------:|
| Brutto salgsinntekter (inkl. mva) | 6 250 000 kr |
| - Merverdiavgift (25 %) | -1 250 000 kr |
| - Rabatter og bonuser | -200 000 kr |
| - Returer | -50 000 kr |
| **= Netto salgsinntekter** | **4 750 000 kr** |

Det er netto salgsinntekter som vises som topplinjen i resultatregnskapet. Denne posten kalles også ofte bare "salgsinntekter" eller "driftsinntekter".`,
    },
    {
      id: 'rr-3-1-andre',
      type: 'text',
      title: 'Andre driftsinntekter',
      content: `Andre driftsinntekter er inntekter som ikke kommer fra virksomhetens hovedaktivitet, men som likevel er en del av den ordinære driften. Typiske eksempler:

**Leieinntekter:** En produksjonsbedrift som leier ut deler av lokalene sine til andre virksomheter. Utleie er ikke hovedvirksomheten, men gir jevnlige inntekter.

**Gevinst ved salg av driftsmidler:** Når en bedrift selger en maskin for mer enn bokført verdi, oppstår en gevinst. Hvis en maskin har bokført verdi på 200 000 kr og selges for 280 000 kr, er gevinsten 80 000 kr.

**Offentlige tilskudd:** Støtte fra stat eller kommune, for eksempel innovasjonstilskudd fra Innovasjon Norge eller lønnstilskudd.

**Provisjonsinntekter:** Inntekter fra formidling av andres varer eller tjenester.

I resultatregnskapet vises andre driftsinntekter som en egen linje etter salgsinntektene:

| Post | Beløp |
|------|------:|
| Salgsinntekter | 4 750 000 kr |
| Andre driftsinntekter | 180 000 kr |
| **Sum driftsinntekter** | **4 930 000 kr** |`,
    },
    {
      id: 'rr-3-1-opptjening',
      type: 'definition',
      title: 'Opptjeningsprinsippet',
      content: `Inntekter skal resultatføres når de er **opptjent**, ikke når pengene mottas. Dette følger av regnskapslovens opptjeningsprinsipp.

For varesalg betyr dette at inntekten føres når varen er levert til kunden og risikoen er overført. For tjenester føres inntekten normalt etter hvert som tjenesten utføres (løpende inntektsføring).

**Eksempel:** Et rådgivningsfirma utfører et oppdrag i desember 2024, men sender faktura i januar 2025. Inntekten skal likevel føres i 2024 fordi tjenesten er opptjent da.`,
    },
    {
      id: 'rr-3-1-periodisering',
      type: 'example',
      title: 'Eksempel: Periodisering av inntekter',
      problem: `Byggmester Hansen AS har en kontrakt på 1 200 000 kr for å bygge en garasje. Arbeidet starter 1. november 2024 og er ferdig 28. februar 2025. Per 31. desember 2024 er 60 % av arbeidet utført. Hvor mye inntekt skal føres i 2024?`,
      solution: `Etter løpende avregningsmetode inntektsføres kontrakten etter fremdrift:

Kontraktsbeløp: 1 200 000 kr
Fullføringsgrad per 31.12.2024: 60 %

Inntekt 2024: 1 200 000 x 0,60 = **720 000 kr**
Inntekt 2025: 1 200 000 x 0,40 = **480 000 kr**

Opptjeningsprinsippet krever at inntekten fordeles over perioden arbeidet utføres, selv om hele beløpet kanskje faktureres ved ferdigstillelse.`,
    },
    {
      id: 'rr-3-1-kontant',
      type: 'warning',
      title: 'Kontantprinsippet vs. opptjeningsprinsippet',
      content: `En vanlig feil er å blande **kontantprinsippet** (inntektsføring når pengene mottas) med **opptjeningsprinsippet** (inntektsføring når inntekten er opptjent).

I regnskapsmessig sammenheng skal virksomheter som er regnskapspliktige alltid følge opptjeningsprinsippet. Kontantprinsippet brukes kun i skattemessig sammenheng for noen spesielle tilfeller.`,
    },
    {
      id: 'rr-3-1-note',
      type: 'note',
      title: 'Norsk regnskapsstandard (NRS)',
      content: `NRS 2 om anleggskontrakter gir detaljerte regler for inntektsføring av langsiktige tilvirkningskontrakter. Hovedregelen er løpende avregning basert på fullføringsgrad. For mindre virksomheter kan fullført kontrakt-metoden brukes, der hele inntekten føres når kontrakten er fullført.`,
    },
    {
      id: 'rr-3-1-sammendrag',
      type: 'text',
      title: 'Oppsummering',
      content: `**Driftsinntekter** er summen av salgsinntekter og andre driftsinntekter:

- **Salgsinntekter** kommer fra hovedvirksomheten og vises netto (etter fradrag for mva, rabatter og returer)
- **Andre driftsinntekter** er sekundære inntekter som leieinntekter, gevinst ved salg av driftsmidler og tilskudd
- Inntekter føres etter **opptjeningsprinsippet** – når de er opptjent, ikke når pengene mottas
- Sum driftsinntekter danner grunnlaget for resten av resultatregnskapet`,
    },
    {
      id: 'rr-3-1-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er forskjellen mellom brutto og netto salgsinntekter?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        'Brutto inkluderer mva, rabatter og returer – netto er etter fradrag for disse',
        'Netto inkluderer mva, brutto er uten mva',
        'Brutto gjelder varesalg, netto gjelder tjenestesalg',
        'Det er ingen forskjell, begrepene brukes om hverandre',
      ],
      correctAnswer: 0,
      explanation: 'Brutto salgsinntekter er totalbeløpet inkludert mva. Netto salgsinntekter er etter fradrag for mva, rabatter, bonuser og returer. Det er netto som vises i resultatregnskapet.',
    },
    {
      id: 'rr-3-1-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En bedrift har brutto salgsinntekter på 5 000 000 kr (inkl. 25 % mva). Rabatter utgjør 150 000 kr og returer 30 000 kr. Beregn netto salgsinntekter.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Brutto salg inkl. mva: 5 000 000 kr
Salg eksl. mva: 5 000 000 / 1,25 = 4 000 000 kr
Rabatter: -150 000 kr
Returer: -30 000 kr

**Netto salgsinntekter = 4 000 000 - 150 000 - 30 000 = 3 820 000 kr**`,
    },
    {
      id: 'rr-3-1-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'En regnskapsfører utfører et oppdrag i desember, men kunden betaler først i januar neste år. Når skal inntekten føres i regnskapet?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        'I januar, når pengene mottas',
        'I desember, når tjenesten er utført',
        'Halvparten i desember, halvparten i januar',
        'Når fakturaen sendes',
      ],
      correctAnswer: 1,
      explanation: 'Etter opptjeningsprinsippet føres inntekten når den er opptjent, altså i desember da tjenesten ble utført. Betalingstidspunktet er irrelevant for inntektsføringen.',
    },
    {
      id: 'rr-3-1-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Gi tre eksempler på andre driftsinntekter og forklar hvorfor de ikke regnes som salgsinntekter.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Tre eksempler på andre driftsinntekter:

1. **Leieinntekter:** En produksjonsbedrift leier ut ubrukte lokaler. Dette er ikke bedriftens hovedvirksomhet (produksjon), men en sekundær inntektskilde.

2. **Gevinst ved salg av driftsmidler:** Bedriften selger en gammel maskin med gevinst. Bedriften driver ikke med kjøp/salg av maskiner – det er en engangsgevinst.

3. **Offentlige tilskudd:** Innovasjon Norge gir støtte til et utviklingsprosjekt. Tilskuddet er ikke betaling for en levert vare eller tjeneste.

Felles for disse er at de ikke kommer fra virksomhetens **hovedaktivitet**. Salgsinntekter er derimot inntekter fra det virksomheten primært driver med.`,
    },
    {
      id: 'rr-3-1-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Et malerfirma har en kontrakt på 800 000 kr for å male et kontorbygg. Per 31.12 er 75 % av arbeidet utført. Firmaet har mottatt 400 000 kr i forskuddsbetaling. Hvor mye inntekt skal føres i resultatregnskapet for inneværende år?',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Etter opptjeningsprinsippet og løpende avregning:

Kontraktsbeløp: 800 000 kr
Fullføringsgrad: 75 %

**Inntekt inneværende år: 800 000 x 0,75 = 600 000 kr**

Merk: Forskuddsbetalingen på 400 000 kr påvirker ikke inntektsføringen. Inntekten er 600 000 kr uansett om firmaet har mottatt 400 000, 600 000 eller 0 kr i betaling. Forskjellen mellom opptjent inntekt (600 000) og mottatt betaling (400 000) vises som en fordring på 200 000 kr i balansen.`,
    },
    {
      id: 'rr-3-1-ex6',
      type: 'exercise',
      title: 'Oppgave 6',
      content: 'Sett opp driftsinntektene i resultatregnskapet for Nordvik AS basert på følgende informasjon: Varesalg inkl. 25 % mva: 3 750 000 kr, rabatter gitt: 80 000 kr, leieinntekter fra utleid lager: 120 000 kr, gevinst salg av varebil: 45 000 kr, innovasjonstilskudd: 60 000 kr.',
      exerciseType: 'classic',
      difficulty: 'hard',
      solution: `**Driftsinntekter – Nordvik AS:**

| Post | Beregning | Beløp |
|------|-----------|------:|
| Varesalg eksl. mva | 3 750 000 / 1,25 | 3 000 000 kr |
| - Rabatter | | -80 000 kr |
| **Netto salgsinntekter** | | **2 920 000 kr** |
| Leieinntekter | | 120 000 kr |
| Gevinst salg av driftsmiddel | | 45 000 kr |
| Innovasjonstilskudd | | 60 000 kr |
| **Andre driftsinntekter** | | **225 000 kr** |
| **Sum driftsinntekter** | | **3 145 000 kr** |

Merk: Mva trekkes fra først, deretter rabatter. Leieinntekter, gevinst på varebil og tilskudd er alle andre driftsinntekter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Driftskostnader
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_3_2: TextbookChapter = {
  id: 'regnskap-revisjon-3-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '3.2',
  title: 'Driftskostnader',
  description: 'I dette kapittelet lærer du om varekostnad, lønnskostnader, avskrivninger og andre driftskostnader i resultatregnskapet.',
  estimatedMinutes: 24,
  competenceGoals: ['forklare og beregne de ulike postene i et resultatregnskap'],
  keyTerms: [
    { term: 'Varekostnad', definition: 'Kostnaden for de varene som er solgt i perioden, beregnet som varekjøp justert for endring i varelager' },
    { term: 'Lønnskostnad', definition: 'Totale kostnader knyttet til ansatte, inkludert lønn, feriepenger, arbeidsgiveravgift og pensjon' },
    { term: 'Avskrivninger', definition: 'Planmessig fordeling av anskaffelseskost for varige driftsmidler over driftsmidlets levetid' },
    { term: 'Andre driftskostnader', definition: 'Driftskostnader som ikke er varekostnad, lønn eller avskrivninger, for eksempel husleie, strøm og kontorrekvisita' },
    { term: 'Sammenstillingsprinsippet', definition: 'Kostnader skal resultatføres i samme periode som tilhørende inntekter' },
  ],
  content: [
    {
      id: 'rr-3-2-intro',
      type: 'text',
      content: `## Driftskostnader i resultatregnskapet

Etter driftsinntektene kommer driftskostnadene i resultatregnskapet. Driftskostnadene viser hva det har kostet å skape inntektene i perioden. Regnskapsloven deler driftskostnadene inn i fire hovedkategorier:

1. Varekostnad (beholdningsendring og varekjøp)
2. Lønnskostnader
3. Avskrivninger på varige driftsmidler og immaterielle eiendeler
4. Andre driftskostnader

I dette kapittelet skal du lære hvordan hver av disse postene beregnes og presenteres.`,
    },
    {
      id: 'rr-3-2-varekostnad',
      type: 'text',
      title: 'Varekostnad',
      content: `Varekostnaden viser kostnaden for de varene som faktisk er solgt i perioden. Dette er ikke det samme som varekjøpet, fordi lagerbeholdningen kan endre seg.

**Beregning av varekostnad:**

| Post | Beløp |
|------|------:|
| Varelager 01.01 (IB) | 500 000 kr |
| + Varekjøp i perioden | 2 800 000 kr |
| - Varelager 31.12 (UB) | -600 000 kr |
| **= Varekostnad** | **2 700 000 kr** |

Formelen er: **Varekostnad = IB varelager + varekjøp - UB varelager**

Hvis lageret øker (UB > IB), blir varekostnaden lavere enn varekjøpet. Hvis lageret minker (UB < IB), blir varekostnaden høyere enn varekjøpet.

Etter **sammenstillingsprinsippet** skal kostnaden for solgte varer føres i samme periode som salgsinntekten. Derfor bruker vi varekostnad (kostnaden for solgte varer) og ikke varekjøp (hva vi har kjøpt inn) i resultatregnskapet.`,
    },
    {
      id: 'rr-3-2-lonnskostnader',
      type: 'text',
      title: 'Lønnskostnader',
      content: `Lønnskostnader er normalt den største enkeltposten i resultatregnskapet for tjenesteytende virksomheter. Posten omfatter mer enn bare brutto lønn:

| Post | Beløp |
|------|------:|
| Brutto lønn | 3 200 000 kr |
| + Feriepenger (12 %) | 384 000 kr |
| + Arbeidsgiveravgift (14,1 %) | 505 440 kr |
| + Pensjonskostnader (OTP, 2 %) | 64 000 kr |
| + Andre personalkostnader | 80 000 kr |
| **= Sum lønnskostnader** | **4 233 440 kr** |

**Arbeidsgiveravgiften** er en avgift arbeidsgiver betaler til staten, beregnet av brutto lønn og feriepenger. Satsen varierer fra 0 % i tiltakssonen (Nord-Troms og Finnmark) til 14,1 % i de fleste andre kommuner.

**Obligatorisk tjenestepensjon (OTP)** er lovpålagt for de fleste virksomheter og utgjør minimum 2 % av lønn mellom 1 G og 12 G.

I noter til regnskapet skal det opplyses om antall årsverk, lederlønn og revisorhonorarer.`,
    },
    {
      id: 'rr-3-2-avskrivninger',
      type: 'text',
      title: 'Avskrivninger',
      content: `Avskrivninger er en planmessig fordeling av anskaffelseskostnaden for varige driftsmidler over forventet økonomisk levetid. Avskrivninger er en kostnad i resultatregnskapet, men medfører ingen utbetaling – det er en ikke-kontant kostnad.

**Lineær avskrivning** er den vanligste metoden i norsk regnskap:

$$\\text{Årlig avskrivning} = \\frac{\\text{Anskaffelseskost} - \\text{Restverdi}}{\\text{Forventet levetid}}$$

**Eksempel:** En maskin kjøpes for 1 000 000 kr. Forventet levetid er 10 år og restverdi er 0 kr.

Årlig avskrivning: 1 000 000 / 10 = **100 000 kr per år**

Etter 4 år er bokført verdi: 1 000 000 - (4 x 100 000) = **600 000 kr**

Typiske levetider:
- Bygninger: 20–50 år
- Maskiner og utstyr: 5–15 år
- Biler og transportmidler: 5–8 år
- Kontormøbler: 5–10 år
- IT-utstyr: 3–5 år`,
    },
    {
      id: 'rr-3-2-andre-kostnader',
      type: 'text',
      title: 'Andre driftskostnader',
      content: `Andre driftskostnader er en samlepost for alle driftskostnader som ikke er varekostnad, lønn eller avskrivninger. Typiske poster:

- **Husleie og lokalkostnader:** Leie av kontor, lager eller produksjonslokaler
- **Strøm og energi:** Strøm, fjernvarme, gass
- **Kontorkostnader:** Kontorrekvisita, telefon, internett, programvare
- **Reise- og transportkostnader:** Tjenestereiser, frakt, bilkostnader
- **Markedsføring:** Annonsering, messer, sponsoravtaler
- **Forsikringer:** Bygningsforsikring, ansvarsforsikring, skadeforsikring
- **Reparasjoner og vedlikehold:** Vedlikehold av utstyr og bygninger
- **Revisjon og rådgivning:** Revisjonshonorar, advokatkostnader
- **Tap på fordringer:** Kundefordringer som ikke kan inndrives

I noter til regnskapet spesifiseres de viktigste postene. Regnskapsloven krever særskilt opplysning om revisjonshonorar.`,
    },
    {
      id: 'rr-3-2-eksempel',
      type: 'example',
      title: 'Eksempel: Driftskostnader i resultatregnskapet',
      problem: 'Sett opp driftskostnadene for Solberg Handel AS basert på følgende informasjon: Varelager 01.01: 400 000 kr, varekjøp: 2 100 000 kr, varelager 31.12: 350 000 kr, brutto lønn: 1 800 000 kr, feriepenger 12 %, arbeidsgiveravgift 14,1 %, pensjon 2 %, avskrivninger varebil: 80 000 kr, avskrivninger inventar: 40 000 kr, husleie: 240 000 kr, strøm: 48 000 kr, markedsføring: 95 000 kr, forsikring: 35 000 kr, revisjon: 52 000 kr.',
      solution: `**Varekostnad:**
IB varelager 400 000 + varekjøp 2 100 000 - UB varelager 350 000 = **2 150 000 kr**

**Lønnskostnader:**
Brutto lønn: 1 800 000 kr
Feriepenger: 1 800 000 x 0,12 = 216 000 kr
Arbeidsgiveravgift: (1 800 000 + 216 000) x 0,141 = 284 256 kr
Pensjon: 1 800 000 x 0,02 = 36 000 kr
**Sum lønnskostnader: 2 336 256 kr**

**Avskrivninger:** 80 000 + 40 000 = **120 000 kr**

**Andre driftskostnader:**
Husleie 240 000 + strøm 48 000 + markedsføring 95 000 + forsikring 35 000 + revisjon 52 000 = **470 000 kr**

| Post | Beløp |
|------|------:|
| Varekostnad | 2 150 000 kr |
| Lønnskostnader | 2 336 256 kr |
| Avskrivninger | 120 000 kr |
| Andre driftskostnader | 470 000 kr |
| **Sum driftskostnader** | **5 076 256 kr** |`,
    },
    {
      id: 'rr-3-2-tip',
      type: 'tip',
      title: 'Husk sammenstillingsprinsippet',
      content: `Når du setter opp driftskostnader, tenk alltid på sammenstillingsprinsippet: kostnadene som føres i resultatregnskapet skal samsvare med inntektene i samme periode. Varekostnaden er kostnaden for **solgte** varer (ikke innkjøpte), og avskrivningene fordeler investeringen over den perioden driftsmiddelet brukes til å generere inntekter.`,
    },
    {
      id: 'rr-3-2-sammendrag',
      type: 'text',
      title: 'Oppsummering',
      content: `Driftskostnadene i resultatregnskapet består av fire hovedkategorier:

- **Varekostnad** = IB varelager + varekjøp - UB varelager
- **Lønnskostnader** = lønn + feriepenger + arbeidsgiveravgift + pensjon + andre personalkostnader
- **Avskrivninger** = planmessig fordeling av investeringskost over levetid
- **Andre driftskostnader** = husleie, strøm, markedsføring, forsikring, revisjon m.m.

Sum driftskostnader trekkes fra sum driftsinntekter for å finne **driftsresultatet**.`,
    },
    {
      id: 'rr-3-2-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Beregn varekostnaden når varelager 01.01 er 300 000 kr, varekjøp er 1 500 000 kr og varelager 31.12 er 350 000 kr.',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        '1 450 000 kr',
        '1 500 000 kr',
        '1 550 000 kr',
        '1 850 000 kr',
      ],
      correctAnswer: 0,
      explanation: 'Varekostnad = IB 300 000 + varekjøp 1 500 000 - UB 350 000 = 1 450 000 kr. Lageret økte med 50 000 kr, så varekostnaden er lavere enn varekjøpet.',
    },
    {
      id: 'rr-3-2-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En bedrift har brutto lønn 2 400 000 kr. Beregn total lønnskostnad inkludert feriepenger (12 %), arbeidsgiveravgift (14,1 %) og pensjon (2 %).',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Brutto lønn: 2 400 000 kr
Feriepenger: 2 400 000 x 0,12 = 288 000 kr
Grunnlag for arbeidsgiveravgift: 2 400 000 + 288 000 = 2 688 000 kr
Arbeidsgiveravgift: 2 688 000 x 0,141 = 379 008 kr
Pensjon: 2 400 000 x 0,02 = 48 000 kr

**Total lønnskostnad = 2 400 000 + 288 000 + 379 008 + 48 000 = 3 115 008 kr**

Merk: Total lønnskostnad er ca. 30 % høyere enn brutto lønn. Dette er viktig å huske når man budsjetterer personalkostnader.`,
    },
    {
      id: 'rr-3-2-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hvilken av følgende påstander om avskrivninger er korrekt?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        'Avskrivninger medfører en utbetaling fra virksomheten hvert år',
        'Avskrivninger er en ikke-kontant kostnad som reduserer bokført verdi av driftsmidlet',
        'Avskrivninger beregnes kun for immaterielle eiendeler',
        'Avskrivninger øker verdien av driftsmidlet i balansen',
      ],
      correctAnswer: 1,
      explanation: 'Avskrivninger er en ikke-kontant kostnad. De representerer et verdifall på driftsmidlet og reduserer bokført verdi i balansen, men det skjer ingen utbetaling. Utbetalingen skjedde da driftsmidlet ble kjøpt.',
    },
    {
      id: 'rr-3-2-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'En bedrift kjøper en maskin for 600 000 kr. Forventet levetid er 8 år og restverdi er 40 000 kr. Beregn årlig lineær avskrivning og bokført verdi etter 3 år.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Årlig avskrivning = (Anskaffelseskost - Restverdi) / Levetid
= (600 000 - 40 000) / 8
= 560 000 / 8
= **70 000 kr per år**

Akkumulerte avskrivninger etter 3 år: 3 x 70 000 = 210 000 kr

**Bokført verdi etter 3 år = 600 000 - 210 000 = 390 000 kr**`,
    },
    {
      id: 'rr-3-2-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Forklar forskjellen mellom varekjøp og varekostnad. Hvorfor er det viktig å skille mellom disse begrepene i resultatregnskapet?',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `**Varekjøp** er det virksomheten har kjøpt inn av varer i perioden. **Varekostnad** er kostnaden for de varene som er solgt i perioden.

Forskjellen skyldes endring i varelager:
- Hvis lageret øker, er varekostnaden lavere enn varekjøpet (noen varer ble kjøpt inn men ikke solgt)
- Hvis lageret minker, er varekostnaden høyere enn varekjøpet (noen varer fra forrige periode ble solgt)

Det er viktig å bruke varekostnad (ikke varekjøp) i resultatregnskapet fordi:
1. **Sammenstillingsprinsippet** krever at kostnader matches med tilhørende inntekter
2. Bare kostnaden for solgte varer hører til periodens salgsinntekter
3. Innkjøpte varer som ikke er solgt, ligger på lager og er en eiendel i balansen`,
    },
    {
      id: 'rr-3-2-ex6',
      type: 'exercise',
      title: 'Oppgave 6',
      content: 'Fjord Interiør AS har følgende tall for 2024: Salgsinntekter 5 200 000 kr, varelager 01.01: 480 000 kr, varekjøp: 2 900 000 kr, varelager 31.12: 520 000 kr, brutto lønn 1 600 000 kr (feriepenger 12 %, arbeidsgiveravgift 14,1 %, pensjon 2 %), avskrivninger 180 000 kr, andre driftskostnader 620 000 kr. Sett opp resultatregnskapet ned til driftsresultat.',
      exerciseType: 'classic',
      difficulty: 'hard',
      solution: `**Resultatregnskap – Fjord Interiør AS 2024:**

Varekostnad: 480 000 + 2 900 000 - 520 000 = 2 860 000 kr

Lønnskostnader:
- Brutto lønn: 1 600 000
- Feriepenger: 192 000
- AGA: (1 600 000 + 192 000) x 0,141 = 252 672
- Pensjon: 1 600 000 x 0,02 = 32 000
- Sum: 2 076 672 kr

| Post | Beløp |
|------|------:|
| Salgsinntekter | 5 200 000 kr |
| Varekostnad | -2 860 000 kr |
| Lønnskostnader | -2 076 672 kr |
| Avskrivninger | -180 000 kr |
| Andre driftskostnader | -620 000 kr |
| **Sum driftskostnader** | **-5 736 672 kr** |
| **Driftsresultat** | **-536 672 kr** |

Driftsresultatet er negativt – virksomheten går med underskudd på driften. Enten må inntektene økes eller kostnadene reduseres.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Finansposter
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_3_3: TextbookChapter = {
  id: 'regnskap-revisjon-3-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '3.3',
  title: 'Finansposter',
  description: 'I dette kapittelet lærer du om finansinntekter og finanskostnader, inkludert renter, utbytte, valutagevinst og -tap i resultatregnskapet.',
  estimatedMinutes: 20,
  competenceGoals: ['forklare og beregne de ulike postene i et resultatregnskap'],
  keyTerms: [
    { term: 'Finansinntekter', definition: 'Inntekter fra finansielle aktiviteter, som renteinntekter, utbytte fra aksjer og valutagevinst' },
    { term: 'Finanskostnader', definition: 'Kostnader knyttet til finansiering, som rentekostnader på lån, valutatap og nedskrivning av finansielle eiendeler' },
    { term: 'Netto finansresultat', definition: 'Differansen mellom finansinntekter og finanskostnader' },
    { term: 'Agio', definition: 'Gevinst ved valutaomregning – oppstår når en utenlandsk valuta styrker seg i forhold til norske kroner' },
    { term: 'Disagio', definition: 'Tap ved valutaomregning – oppstår når en utenlandsk valuta svekker seg i forhold til norske kroner' },
  ],
  content: [
    {
      id: 'rr-3-3-intro',
      type: 'text',
      content: `## Finansposter i resultatregnskapet

Etter driftsresultatet kommer finanspostene. Disse viser inntekter og kostnader knyttet til virksomhetens finansielle aktiviteter, altså hvordan virksomheten plasserer overskuddslikviditet og finansierer driften.

Finanspostene deles i:
- **Finansinntekter** – renteinntekter, utbytte, valutagevinst, gevinst ved salg av aksjer
- **Finanskostnader** – rentekostnader, valutatap, nedskrivning av finansielle eiendeler

Driftsresultat pluss netto finansresultat gir **ordinært resultat før skatt**.`,
    },
    {
      id: 'rr-3-3-finansinntekter',
      type: 'text',
      title: 'Finansinntekter',
      content: `Finansinntekter er inntekter som stammer fra virksomhetens finansielle plasseringer og aktiviteter:

**Renteinntekter:** Renter på bankinnskudd, kundefordringer eller utlån. Eksempel: En bedrift har 2 000 000 kr på høyrentekonto med 4,5 % rente. Renteinntekten blir 2 000 000 x 0,045 = 90 000 kr per år.

**Utbytte fra aksjer:** Utbytte mottatt fra aksjer virksomheten eier i andre selskaper. Merk: Under fritaksmetoden er utbytte mellom selskaper i stor grad skattefritt (kun 3 % av utbyttet skattlegges).

**Gevinst ved salg av finansielle eiendeler:** Når aksjer, obligasjoner eller andre verdipapirer selges for mer enn bokført verdi.

**Valutagevinst (agio):** Gevinst som oppstår når virksomheten har fordringer eller gjeld i utenlandsk valuta, og valutakursen endrer seg gunstig.

| Eksempel på finansinntekter | Beløp |
|------------------------------|------:|
| Renteinntekter bankinnskudd | 90 000 kr |
| Utbytte fra aksjer | 50 000 kr |
| Valutagevinst (agio) | 25 000 kr |
| **Sum finansinntekter** | **165 000 kr** |`,
    },
    {
      id: 'rr-3-3-finanskostnader',
      type: 'text',
      title: 'Finanskostnader',
      content: `Finanskostnader er kostnader knyttet til virksomhetens finansiering:

**Rentekostnader:** Renter på lån, kassakreditt og leverandørgjeld. For mange virksomheter er dette den desidert største finanskostnaden.

**Eksempel:** En bedrift har et banklån på 5 000 000 kr med 6 % rente. Rentekostnaden blir 5 000 000 x 0,06 = 300 000 kr per år.

**Valutatap (disagio):** Tap som oppstår når virksomheten har fordringer eller gjeld i utenlandsk valuta og valutakursen endrer seg ugunstig.

**Nedskrivning av finansielle eiendeler:** Når verdien av aksjer eller andre verdipapirer faller varig under anskaffelseskost.

**Tap ved salg av finansielle eiendeler:** Når aksjer eller obligasjoner selges for mindre enn bokført verdi.

| Eksempel på finanskostnader | Beløp |
|-------------------------------|------:|
| Rentekostnader banklån | 300 000 kr |
| Rentekostnader kassakreditt | 45 000 kr |
| Valutatap (disagio) | 18 000 kr |
| **Sum finanskostnader** | **363 000 kr** |`,
    },
    {
      id: 'rr-3-3-valuta',
      type: 'example',
      title: 'Eksempel: Valutagevinst og -tap',
      problem: `Norsk Import AS kjøper varer fra en tysk leverandør for 100 000 EUR. På kjøpstidspunktet er kursen 11,20 NOK/EUR. Ved betalingstidspunktet 30 dager senere er kursen 11,50 NOK/EUR. Hva er resultatet?`,
      solution: `Gjeld ved kjøp: 100 000 x 11,20 = 1 120 000 NOK
Betaling: 100 000 x 11,50 = 1 150 000 NOK

**Valutatap (disagio): 1 150 000 - 1 120 000 = 30 000 kr**

Euroen har styrket seg mot kronen, og Norsk Import AS må betale 30 000 kr mer enn det som ble bokført ved kjøpet. Dette valutatapet føres som en finanskostnad i resultatregnskapet.

Hadde kursen i stedet falt til 11,00 NOK/EUR, ville betalingen blitt 1 100 000 NOK, og virksomheten hadde hatt en valutagevinst (agio) på 20 000 kr.`,
    },
    {
      id: 'rr-3-3-netto',
      type: 'text',
      title: 'Netto finansresultat',
      content: `Netto finansresultat er differansen mellom finansinntekter og finanskostnader. Denne posten legges til (eller trekkes fra) driftsresultatet for å finne ordinært resultat før skatt.

| Post | Beløp |
|------|------:|
| Driftsresultat | 850 000 kr |
| + Finansinntekter | 165 000 kr |
| - Finanskostnader | -363 000 kr |
| **= Netto finansresultat** | **-198 000 kr** |
| **= Ordinært resultat før skatt** | **652 000 kr** |

De fleste virksomheter har negativt netto finansresultat fordi finanskostnadene (særlig renter på lån) er høyere enn finansinntektene. Virksomheter med mye gjeld vil ha spesielt høye finanskostnader.`,
    },
    {
      id: 'rr-3-3-note',
      type: 'note',
      title: 'Skille mellom drift og finans',
      content: `Skillet mellom driftsresultat og finansresultat er viktig for analysen av regnskapet. Driftsresultatet viser hvor lønnsom selve driften er, uavhengig av hvordan virksomheten er finansiert. To identiske butikker kan ha samme driftsresultat, men ulikt resultat etter finans fordi den ene er gjeldsfinansiert og den andre er egenkapitalfinansiert.`,
    },
    {
      id: 'rr-3-3-sammendrag',
      type: 'text',
      title: 'Oppsummering',
      content: `Finanspostene i resultatregnskapet viser inntekter og kostnader fra finansielle aktiviteter:

- **Finansinntekter:** Renteinntekter, utbytte, valutagevinst, gevinst salg av verdipapirer
- **Finanskostnader:** Rentekostnader, valutatap, nedskrivning, tap salg av verdipapirer
- **Netto finansresultat** = finansinntekter - finanskostnader
- **Resultat før skatt** = driftsresultat + netto finansresultat
- Skillet mellom drift og finans er viktig for regnskapsanalysen`,
    },
    {
      id: 'rr-3-3-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er netto finansresultat når finansinntektene er 120 000 kr og finanskostnadene er 280 000 kr?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        '400 000 kr',
        '-160 000 kr',
        '160 000 kr',
        '-400 000 kr',
      ],
      correctAnswer: 1,
      explanation: 'Netto finansresultat = finansinntekter - finanskostnader = 120 000 - 280 000 = -160 000 kr. Negativt netto finansresultat betyr at virksomheten har høyere finanskostnader enn finansinntekter.',
    },
    {
      id: 'rr-3-3-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En bedrift har banklån på 3 000 000 kr med 5,5 % rente og bankinnskudd på 800 000 kr med 3,8 % rente. Beregn netto rentekostnad for året.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Rentekostnad på lån: 3 000 000 x 0,055 = 165 000 kr
Renteinntekt på innskudd: 800 000 x 0,038 = 30 400 kr

**Netto rentekostnad = 165 000 - 30 400 = 134 600 kr**

Dette er et typisk bilde for norske virksomheter: rentekostnadene er vesentlig høyere enn renteinntektene, fordi gjelden er større enn bankinnskuddene og renten på lån er høyere enn renten på innskudd.`,
    },
    {
      id: 'rr-3-3-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva er forskjellen mellom agio og disagio?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        'Agio er valutagevinst, disagio er valutatap',
        'Agio er valutatap, disagio er valutagevinst',
        'Begge betyr valutagevinst, men i ulike valutaer',
        'Agio gjelder eksport, disagio gjelder import',
      ],
      correctAnswer: 0,
      explanation: 'Agio betyr valutagevinst (gunstig kursendring) og føres som finansinntekt. Disagio betyr valutatap (ugunstig kursendring) og føres som finanskostnad.',
    },
    {
      id: 'rr-3-3-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Eksportbedriften Havbris AS selger varer til en britisk kunde for 50 000 GBP. Ved fakturering er kursen 13,20 NOK/GBP. Ved betaling 45 dager senere er kursen 12,90 NOK/GBP. Beregn valutagevinst eller -tap og forklar hvordan dette føres.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Fordring ved fakturering: 50 000 x 13,20 = 660 000 NOK
Betaling mottatt: 50 000 x 12,90 = 645 000 NOK

**Valutatap (disagio): 660 000 - 645 000 = 15 000 kr**

Pundet har svekket seg mot kronen. Havbris AS mottar færre kroner enn forventet.

Føring i resultatregnskapet:
- Salgsinntekten er 660 000 kr (bokført ved fakturering)
- Valutatapet på 15 000 kr føres som en **finanskostnad** under disagio
- Nettoresultatet av transaksjonen er 645 000 kr, men det fordeles på drift (660 000) og finans (-15 000)`,
    },
    {
      id: 'rr-3-3-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Et selskap har driftsresultat på 1 200 000 kr. Finansinntektene er: renteinntekter 45 000 kr, utbytte 80 000 kr, valutagevinst 12 000 kr. Finanskostnadene er: rentekostnader 320 000 kr, valutatap 8 000 kr. Beregn ordinært resultat før skatt.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `**Finansinntekter:**
Renteinntekter: 45 000 kr
Utbytte: 80 000 kr
Valutagevinst: 12 000 kr
Sum finansinntekter: 137 000 kr

**Finanskostnader:**
Rentekostnader: 320 000 kr
Valutatap: 8 000 kr
Sum finanskostnader: 328 000 kr

**Netto finansresultat: 137 000 - 328 000 = -191 000 kr**

| Post | Beløp |
|------|------:|
| Driftsresultat | 1 200 000 kr |
| + Finansinntekter | 137 000 kr |
| - Finanskostnader | -328 000 kr |
| **Ordinært resultat før skatt** | **1 009 000 kr** |`,
    },
    {
      id: 'rr-3-3-ex6',
      type: 'exercise',
      title: 'Oppgave 6',
      content: 'Forklar hvorfor det er viktig å skille mellom driftsresultat og finansresultat i regnskapsanalysen. Gi et eksempel som illustrerer betydningen av dette skillet.',
      exerciseType: 'classic',
      difficulty: 'hard',
      solution: `Skillet er viktig fordi driftsresultatet viser lønnsomheten av **selve virksomheten**, mens finansresultatet reflekterer **finansieringsstrukturen**.

**Eksempel:**
To møbelbutikker har identisk drift med driftsresultat 500 000 kr.

Butikk A (egenkapitalfinansiert):
- Finansinntekter: 20 000 kr (renter på innskudd)
- Finanskostnader: 0 kr
- Resultat før skatt: 520 000 kr

Butikk B (gjeldsfinansiert):
- Finansinntekter: 5 000 kr
- Finanskostnader: 250 000 kr (renter på lån)
- Resultat før skatt: 255 000 kr

Uten skillet mellom drift og finans ville man konkludere med at Butikk A er dobbelt så lønnsom. Men driften er like lønnsom – forskjellen skyldes kun finansieringsvalget. Ved å analysere driftsresultatet isolert kan man:
1. Vurdere selve driftens lønnsomhet uavhengig av finansiering
2. Sammenligne virksomheter med ulik kapitalstruktur
3. Identifisere om problemer ligger i driften eller i finansieringen`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Skattekostnad og årsresultat
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_3_4: TextbookChapter = {
  id: 'regnskap-revisjon-3-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '3.4',
  title: 'Skattekostnad og årsresultat',
  description: 'I dette kapittelet lærer du om betalbar skatt, utsatt skatt, disponering av årsresultatet og sammenhengen mellom regnskapsmessig og skattemessig resultat.',
  estimatedMinutes: 22,
  competenceGoals: ['forklare og beregne de ulike postene i et resultatregnskap'],
  keyTerms: [
    { term: 'Betalbar skatt', definition: 'Den skatten virksomheten faktisk skal betale til myndighetene for inneværende år, beregnet av skattemessig resultat' },
    { term: 'Utsatt skatt', definition: 'Skatt på midlertidige forskjeller mellom regnskapsmessige og skattemessige verdier som vil utlignes i fremtiden' },
    { term: 'Skattekostnad', definition: 'Total skatt i resultatregnskapet, bestående av betalbar skatt pluss endring i utsatt skatt' },
    { term: 'Årsresultat', definition: 'Virksomhetens endelige resultat etter skatt, som kan disponeres til utbytte eller overføres til egenkapitalen' },
    { term: 'Midlertidige forskjeller', definition: 'Forskjeller mellom regnskapsmessige og skattemessige verdier av eiendeler og gjeld som vil utlignes over tid' },
  ],
  content: [
    {
      id: 'rr-3-4-intro',
      type: 'text',
      content: `## Skattekostnad og årsresultat

Den siste store posten i resultatregnskapet er skattekostnaden. Etter at skattekostnaden er trukket fra ordinært resultat før skatt, sitter vi igjen med **årsresultatet** – det endelige resultatet som kan disponeres av eierne.

I dette kapittelet skal du lære:
- Forskjellen mellom betalbar skatt og utsatt skatt
- Hvordan skattekostnaden beregnes og presenteres
- Hva midlertidige forskjeller er og hvorfor de oppstår
- Hvordan årsresultatet disponeres`,
    },
    {
      id: 'rr-3-4-betalbar',
      type: 'text',
      title: 'Betalbar skatt',
      content: `Betalbar skatt er den skatten virksomheten faktisk skal betale til Skatteetaten for regnskapsåret. Den beregnes av **skattemessig resultat**, som kan avvike fra regnskapsmessig resultat.

Skattesatsen for aksjeselskaper i Norge er **22 %** (2024).

**Eksempel på beregning:**

| Post | Beløp |
|------|------:|
| Regnskapsmessig resultat før skatt | 1 000 000 kr |
| + Ikke-fradragsberettigede kostnader | 50 000 kr |
| - Skattefrie inntekter | -30 000 kr |
| + Forskjell avskrivninger (regnskapsmessig vs. skattemessig) | 80 000 kr |
| **= Skattemessig resultat** | **1 100 000 kr** |
| Betalbar skatt (22 %) | **242 000 kr** |

Det skattemessige resultatet avviker fra det regnskapsmessige fordi skattereglene ikke alltid er like regnskapsreglene. For eksempel har skatteloven egne avskrivningssatser (saldoavskrivning) som ofte er forskjellige fra regnskapsmessige avskrivninger (lineær).`,
    },
    {
      id: 'rr-3-4-utsatt',
      type: 'text',
      title: 'Utsatt skatt og utsatt skattefordel',
      content: `**Midlertidige forskjeller** oppstår når regnskapsmessig verdi og skattemessig verdi av en eiendel eller gjeld er forskjellig. Disse forskjellene vil utlignes over tid – derav begrepet "midlertidig".

Den vanligste kilden til midlertidige forskjeller er ulike avskrivningsmetoder:

**Eksempel:** En maskin kjøpes for 1 000 000 kr.
- Regnskapsmessig avskrivning (lineær, 10 år): 100 000 kr/år
- Skattemessig avskrivning (saldo, 20 %): 200 000 kr første år

| | Regnskapet | Skattemessig | Forskjell |
|--|----------:|------------:|---------:|
| Anskaffelseskost | 1 000 000 | 1 000 000 | 0 |
| Avskrivning år 1 | -100 000 | -200 000 | 100 000 |
| Bokført verdi etter år 1 | 900 000 | 800 000 | 100 000 |

Forskjellen på 100 000 kr er en **midlertidig forskjell**. Utsatt skatt på denne forskjellen er 100 000 x 0,22 = **22 000 kr**.

Denne utsatte skatten betyr at virksomheten i fremtiden må betale 22 000 kr mer i skatt enn det som følger av regnskapet, fordi de skattemessige avskrivningene er «brukt opp» raskere.`,
    },
    {
      id: 'rr-3-4-skattekostnad',
      type: 'definition',
      title: 'Skattekostnad i resultatregnskapet',
      content: `Skattekostnaden i resultatregnskapet består av to komponenter:

**Skattekostnad = Betalbar skatt + Endring i utsatt skatt**

Dersom utsatt skatt øker i løpet av året, blir skattekostnaden høyere enn betalbar skatt. Dersom utsatt skatt minker, blir skattekostnaden lavere.

Eksempel:
- Betalbar skatt: 242 000 kr
- Utsatt skatt 01.01: 150 000 kr
- Utsatt skatt 31.12: 172 000 kr
- Endring utsatt skatt: +22 000 kr
- **Skattekostnad: 242 000 + 22 000 = 264 000 kr**`,
    },
    {
      id: 'rr-3-4-eksempel',
      type: 'example',
      title: 'Eksempel: Fra resultat før skatt til årsresultat',
      problem: 'Kystverksted AS har ordinært resultat før skatt på 1 500 000 kr. Betalbar skatt er beregnet til 308 000 kr. Utsatt skatt øker med 22 000 kr i løpet av året. Beregn skattekostnad og årsresultat.',
      solution: `**Skattekostnad:**
Betalbar skatt: 308 000 kr
+ Endring utsatt skatt: 22 000 kr
= **Skattekostnad: 330 000 kr**

**Årsresultat:**
Ordinært resultat før skatt: 1 500 000 kr
- Skattekostnad: -330 000 kr
= **Årsresultat: 1 170 000 kr**

Effektiv skattesats: 330 000 / 1 500 000 = 22,0 %
I dette tilfellet er effektiv skattesats lik nominell skattesats, men det er ikke alltid tilfellet.`,
    },
    {
      id: 'rr-3-4-disponering',
      type: 'text',
      title: 'Disponering av årsresultatet',
      content: `Årsresultatet er det beløpet som disponeres av virksomhetens eiere. For aksjeselskaper skjer disponeringen normalt slik:

**Ved overskudd:**

| Post | Beløp |
|------|------:|
| Årsresultat | 1 170 000 kr |
| Avsatt utbytte | -500 000 kr |
| Overført til annen egenkapital | -670 000 kr |
| **Sum disponering** | **0 kr** |

Styret foreslår utbytte, og generalforsamlingen vedtar det. Resten overføres til egenkapitalen og styrker virksomhetens soliditet.

**Ved underskudd:**

| Post | Beløp |
|------|------:|
| Årsresultat | -200 000 kr |
| Overført fra annen egenkapital | 200 000 kr |
| **Sum disponering** | **0 kr** |

Ved underskudd dekkes tapet av tidligere opptjent egenkapital. Det kan ikke deles ut utbytte med mindre det er tilstrekkelig fri egenkapital i virksomheten.

Aksjeloven stiller krav til forsvarlig egenkapital og likviditet ved utbytteutdeling.`,
    },
    {
      id: 'rr-3-4-warning',
      type: 'warning',
      title: 'Betalbar skatt vs. skattekostnad',
      content: `En vanlig feil er å forveksle betalbar skatt og skattekostnad:

- **Betalbar skatt** = skatten som skal betales til Skatteetaten (basert på skattemessig resultat)
- **Skattekostnad** = skattebelastningen i resultatregnskapet (betalbar skatt + endring utsatt skatt)

Disse er sjelden helt like fordi midlertidige forskjeller endrer seg fra år til år. I eksamensoppgaver er det viktig å vise at du forstår forskjellen.`,
    },
    {
      id: 'rr-3-4-sammendrag',
      type: 'text',
      title: 'Oppsummering',
      content: `Skattekostnad og årsresultat avslutter resultatregnskapet:

- **Betalbar skatt** beregnes av skattemessig resultat (22 % for AS)
- **Utsatt skatt** skyldes midlertidige forskjeller mellom regnskap og skatt
- **Skattekostnad** = betalbar skatt + endring utsatt skatt
- **Årsresultat** = resultat før skatt - skattekostnad
- Årsresultatet disponeres til utbytte og/eller overføres til egenkapital`,
    },
    {
      id: 'rr-3-4-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er forskjellen mellom betalbar skatt og skattekostnad?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        'Det er ingen forskjell, begrepene brukes om hverandre',
        'Betalbar skatt er skatten som betales, skattekostnad inkluderer også endring i utsatt skatt',
        'Skattekostnad er skatten som betales, betalbar skatt er det som føres i regnskapet',
        'Betalbar skatt er 22 %, skattekostnad er 25 %',
      ],
      correctAnswer: 1,
      explanation: 'Betalbar skatt er det som faktisk betales til staten. Skattekostnaden i resultatregnskapet er betalbar skatt pluss endring i utsatt skatt, og kan derfor avvike fra betalbar skatt.',
    },
    {
      id: 'rr-3-4-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Et aksjeselskap har regnskapsmessig resultat før skatt på 2 000 000 kr. Det er ingen permanente forskjeller, men midlertidige forskjeller øker med 200 000 kr. Beregn betalbar skatt og skattekostnad.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `Skattemessig resultat: 2 000 000 - 200 000 = 1 800 000 kr
(Midlertidige forskjeller øker, noe som betyr at skattemessig resultat er lavere, f.eks. pga. høyere skattemessige avskrivninger.)

**Betalbar skatt: 1 800 000 x 0,22 = 396 000 kr**

Endring utsatt skatt: 200 000 x 0,22 = 44 000 kr

**Skattekostnad: 396 000 + 44 000 = 440 000 kr**

Kontroll: 2 000 000 x 0,22 = 440 000 kr. Skattekostnaden tilsvarer 22 % av regnskapsmessig resultat fordi det bare er midlertidige (ikke permanente) forskjeller.`,
    },
    {
      id: 'rr-3-4-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva er en midlertidig forskjell? Gi et eksempel.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `En **midlertidig forskjell** er en forskjell mellom regnskapsmessig verdi og skattemessig verdi av en eiendel eller gjeld som vil utlignes over tid.

**Eksempel – ulike avskrivningsmetoder:**
En lastebil kjøpes for 800 000 kr.
- Regnskapsmessig: lineær avskrivning over 8 år = 100 000 kr/år
- Skattemessig: saldoavskrivning 20 % = 160 000 kr første år

Etter år 1:
- Regnskapsmessig verdi: 800 000 - 100 000 = 700 000 kr
- Skattemessig verdi: 800 000 - 160 000 = 640 000 kr
- Midlertidig forskjell: 700 000 - 640 000 = 60 000 kr

Denne forskjellen er midlertidig fordi lastebilen til slutt skrives ned til 0 (eller restverdi) i begge systemer. Over levetiden blir totale avskrivninger like, men fordelingen mellom årene er forskjellig.`,
    },
    {
      id: 'rr-3-4-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Stein Industri AS har årsresultat på 3 400 000 kr. Styret foreslår utbytte på 1 500 000 kr. Vis hvordan årsresultatet disponeres.',
      exerciseType: 'classic',
      difficulty: 'easy',
      solution: `**Disponering av årsresultat – Stein Industri AS:**

| Post | Beløp |
|------|------:|
| Årsresultat | 3 400 000 kr |
| Avsatt utbytte | -1 500 000 kr |
| Overført til annen egenkapital | -1 900 000 kr |
| **Sum** | **0 kr** |

1 500 000 kr deles ut til aksjonærene som utbytte, og 1 900 000 kr beholdes i selskapet og styrker egenkapitalen.`,
    },
    {
      id: 'rr-3-4-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Vestfjord AS har resultat før skatt på 800 000 kr. Skattemessig resultat er 720 000 kr (pga. høyere skattemessige avskrivninger). Utsatt skatt 01.01 er 180 000 kr. Beregn betalbar skatt, endring i utsatt skatt, skattekostnad og årsresultat.',
      exerciseType: 'classic',
      difficulty: 'hard',
      solution: `**Betalbar skatt:** 720 000 x 0,22 = **158 400 kr**

Forskjell regnskap vs. skatt: 800 000 - 720 000 = 80 000 kr
Endring utsatt skatt: 80 000 x 0,22 = **17 600 kr**
Utsatt skatt 31.12: 180 000 + 17 600 = 197 600 kr

**Skattekostnad:** 158 400 + 17 600 = **176 000 kr**
Kontroll: 800 000 x 0,22 = 176 000 kr (stemmer)

| Post | Beløp |
|------|------:|
| Resultat før skatt | 800 000 kr |
| - Skattekostnad | -176 000 kr |
| **Årsresultat** | **624 000 kr** |`,
    },
    {
      id: 'rr-3-4-ex6',
      type: 'exercise',
      title: 'Oppgave 6',
      content: 'Et selskap har negativt årsresultat på -350 000 kr. Selskapet har 1 200 000 kr i annen egenkapital fra før. Kan selskapet dele ut utbytte? Vis disponeringen av årsresultatet.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `**Disponering av årsresultat:**

| Post | Beløp |
|------|------:|
| Årsresultat | -350 000 kr |
| Overført fra annen egenkapital | 350 000 kr |
| **Sum** | **0 kr** |

Annen egenkapital etter disponering: 1 200 000 - 350 000 = 850 000 kr

**Kan selskapet dele ut utbytte?**
Nei, ikke basert på årets resultat. Underskuddet dekkes av tidligere opptjent egenkapital. Selv om det fortsatt er 850 000 kr i annen egenkapital, stiller aksjeloven krav om at utbytte kun kan deles ut dersom selskapet etter utdelingen har forsvarlig egenkapital og likviditet. Ved negativt årsresultat er det normalt ikke grunnlag for å dele ut utbytte.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Resultatregnskapet i praksis
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_3_5: TextbookChapter = {
  id: 'regnskap-revisjon-3-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '3.5',
  title: 'Resultatregnskapet i praksis',
  description: 'I dette kapittelet lærer du å sette opp et komplett resultatregnskap, tolke resultatene og sammenligne med tidligere perioder og andre virksomheter.',
  estimatedMinutes: 24,
  competenceGoals: [
    'sette opp og analysere resultatregnskap etter regnskapsloven',
    'tolke resultatregnskapet og bruke det som grunnlag for beslutningstaking',
  ],
  keyTerms: [
    { term: 'Artsinndelingsmetoden', definition: 'Oppstillingsmetode der driftskostnadene grupperes etter art (varekostnad, lønn, avskrivninger, andre kostnader)' },
    { term: 'Funksjonsinndelingsmetoden', definition: 'Oppstillingsmetode der driftskostnadene grupperes etter funksjon (produksjon, salg, administrasjon)' },
    { term: 'Prosentanalyse', definition: 'Analyse der alle poster i resultatregnskapet uttrykkes som prosent av salgsinntektene (common size)' },
    { term: 'Trendanalyse', definition: 'Analyse der postene sammenlignes over tid for å identifisere utviklingstrekk og endringer' },
    { term: 'Driftsmargin', definition: 'Driftsresultat uttrykt som prosent av salgsinntektene – viser lønnsomheten av kjernevirksomheten' },
  ],
  content: [
    {
      id: 'rr-3-5-intro',
      type: 'text',
      content: `## Resultatregnskapet i praksis

I de forrige kapitlene har vi gått igjennom hver enkelt del av resultatregnskapet. Nå skal vi sette alt sammen og se hvordan et komplett resultatregnskap ser ut, hvordan det tolkes, og hvordan vi kan bruke det til å sammenligne virksomheter og perioder.

I dette kapittelet skal du lære:
- Oppstilling av et komplett resultatregnskap etter regnskapsloven
- Forskjellen mellom artsinndelings- og funksjonsinndelingsmetoden
- Prosentanalyse og trendanalyse av resultatregnskapet
- Praktisk tolkning og nøkkeltall`,
    },
    {
      id: 'rr-3-5-oppstilling',
      type: 'text',
      title: 'Oppstilling etter regnskapsloven',
      content: `Regnskapsloven tillater to oppstillingsmetoder for resultatregnskapet: **artsinndelingsmetoden** og **funksjonsinndelingsmetoden**. I Norge er artsinndelingsmetoden klart mest brukt.

**Artsinndelingsmetoden (regnskapsloven paragraf 6-1):**

| | Note | 2024 | 2023 |
|--|------|-----:|-----:|
| **Driftsinntekter og driftskostnader** | | | |
| Salgsinntekter | 1 | 8 500 000 | 7 800 000 |
| Andre driftsinntekter | 2 | 220 000 | 180 000 |
| **Sum driftsinntekter** | | **8 720 000** | **7 980 000** |
| | | | |
| Varekostnad | | 3 400 000 | 3 200 000 |
| Lønnskostnader | 3 | 2 800 000 | 2 600 000 |
| Avskrivninger | 4 | 350 000 | 320 000 |
| Andre driftskostnader | 5 | 1 200 000 | 1 100 000 |
| **Sum driftskostnader** | | **7 750 000** | **7 220 000** |
| | | | |
| **Driftsresultat** | | **970 000** | **760 000** |
| | | | |
| **Finansinntekter og finanskostnader** | | | |
| Finansinntekter | 6 | 85 000 | 72 000 |
| Finanskostnader | 7 | 280 000 | 260 000 |
| **Netto finansresultat** | | **-195 000** | **-188 000** |
| | | | |
| **Ordinært resultat før skatt** | | **775 000** | **572 000** |
| Skattekostnad | 8 | 170 500 | 125 840 |
| **Årsresultat** | | **604 500** | **446 160** |

Merk at regnskapsloven krever at fjorårets tall (sammenligningstall) vises i en egen kolonne.`,
    },
    {
      id: 'rr-3-5-funksjons',
      type: 'text',
      title: 'Funksjonsinndelingsmetoden',
      content: `Ved funksjonsinndelingsmetoden grupperes kostnadene etter hvilken funksjon de tilhører, i stedet for hvilken art de har:

| Post | 2024 |
|------|-----:|
| Salgsinntekter | 8 500 000 kr |
| Produksjonskostnad solgte varer | -4 200 000 kr |
| **Brutto fortjeneste** | **4 300 000 kr** |
| Salgskostnader | -1 400 000 kr |
| Administrasjonskostnader | -1 930 000 kr |
| **Driftsresultat** | **970 000 kr** |

Driftsresultatet blir det samme uansett metode. Forskjellen er at artsinndelingen viser **hva** kostnadene er (lønn, avskrivninger osv.), mens funksjonsinndelingen viser **hvor** kostnadene oppstår (produksjon, salg, administrasjon).

Funksjonsinndelingen gir bedre innsikt i hvor i virksomheten kostnadene oppstår, men brukes sjeldnere i Norge.`,
    },
    {
      id: 'rr-3-5-prosentanalyse',
      type: 'text',
      title: 'Prosentanalyse (common size)',
      content: `Ved prosentanalyse uttrykkes alle poster som prosent av salgsinntektene. Dette gjør det enkelt å sammenligne virksomheter av ulik størrelse og identifisere utviklingstrekk.

**Prosentanalyse av resultatregnskapet:**

| Post | 2024 | % | 2023 | % |
|------|-----:|--:|-----:|--:|
| Salgsinntekter | 8 500 000 | 100,0 | 7 800 000 | 100,0 |
| Varekostnad | 3 400 000 | 40,0 | 3 200 000 | 41,0 |
| Lønnskostnader | 2 800 000 | 32,9 | 2 600 000 | 33,3 |
| Avskrivninger | 350 000 | 4,1 | 320 000 | 4,1 |
| Andre driftskostnader | 1 200 000 | 14,1 | 1 100 000 | 14,1 |
| **Driftsresultat** | **970 000** | **11,4** | **760 000** | **9,7** |

Her ser vi at **driftsmarginen** har økt fra 9,7 % til 11,4 %. Varekostnadsandelen har sunket fra 41,0 % til 40,0 %, og lønnskostnadsandelen har sunket fra 33,3 % til 32,9 %. Virksomheten har altså blitt mer effektiv.`,
    },
    {
      id: 'rr-3-5-trendanalyse',
      type: 'example',
      title: 'Eksempel: Trendanalyse',
      problem: 'Gjør en trendanalyse (indeksering) av følgende utvikling for Nordfjord Handel AS over tre år, med 2022 som basisår (indeks = 100):',
      content: `| Post | 2022 | 2023 | 2024 |
|------|-----:|-----:|-----:|
| Salgsinntekter | 6 000 000 | 7 800 000 | 8 500 000 |
| Varekostnad | 2 520 000 | 3 200 000 | 3 400 000 |
| Lønnskostnader | 2 040 000 | 2 600 000 | 2 800 000 |
| Driftsresultat | 480 000 | 760 000 | 970 000 |

**Trendanalyse (indeks, 2022 = 100):**

| Post | 2022 | 2023 | 2024 |
|------|-----:|-----:|-----:|
| Salgsinntekter | 100 | 130 | 142 |
| Varekostnad | 100 | 127 | 135 |
| Lønnskostnader | 100 | 127 | 137 |
| Driftsresultat | 100 | 158 | 202 |

**Tolkning:**
Salgsinntektene har økt med 42 % fra 2022 til 2024. Varekostnaden har økt med 35 % og lønnskostnadene med 37 % – begge lavere enn inntektsveksten. Driftsresultatet har mer enn doblet seg (indeks 202). Virksomheten vokser raskt og klarer å holde kostnadsveksten lavere enn inntektsveksten.`,
    },
    {
      id: 'rr-3-5-nokkeltall',
      type: 'text',
      title: 'Viktige nøkkeltall fra resultatregnskapet',
      content: `Resultatregnskapet danner grunnlaget for flere viktige nøkkeltall:

**Bruttofortjeneste (dekningsgrad):**
$$\\text{Bruttofortjeneste} = \\frac{\\text{Salgsinntekter} - \\text{Varekostnad}}{\\text{Salgsinntekter}} \\times 100\\%$$

Eksempel: (8 500 000 - 3 400 000) / 8 500 000 = **60,0 %**

**Driftsmargin:**
$$\\text{Driftsmargin} = \\frac{\\text{Driftsresultat}}{\\text{Salgsinntekter}} \\times 100\\%$$

Eksempel: 970 000 / 8 500 000 = **11,4 %**

**Resultatmargin (resultatgrad):**
$$\\text{Resultatmargin} = \\frac{\\text{Ordinært resultat før skatt}}{\\text{Salgsinntekter}} \\times 100\\%$$

Eksempel: 775 000 / 8 500 000 = **9,1 %**

Disse nøkkeltallene brukes til benchmarking mot bransjen og til å måle utvikling over tid.`,
    },
    {
      id: 'rr-3-5-tip',
      type: 'tip',
      title: 'Praktiske tips for resultatregnskapsanalyse',
      content: `Når du analyserer et resultatregnskap, bør du:

1. **Start med trenden:** Øker eller minker inntektene? Utvikler kostnadene seg i takt med inntektene?
2. **Se på marginene:** Forbedres eller forverres bruttofortjeneste, driftsmargin og resultatmargin?
3. **Sammenlign med bransjen:** En driftsmargin på 5 % kan være utmerket i dagligvare, men dårlig i IT-konsulentbransjen.
4. **Se etter spesielle poster:** Har det vært store engangsgevinster eller -tap som forstyrrer bildet?
5. **Les notene:** Notene gir viktig tilleggsinformasjon om regnskapsprinsippene og sammensettingen av postene.`,
    },
    {
      id: 'rr-3-5-sammendrag',
      type: 'text',
      title: 'Oppsummering',
      content: `Resultatregnskapet i praksis handler om oppstilling, tolkning og sammenligning:

- **Artsinndelingsmetoden** er vanligst i Norge – kostnadene grupperes etter art
- **Funksjonsinndelingsmetoden** grupperer etter funksjon (produksjon, salg, administrasjon)
- **Prosentanalyse** uttrykker alle poster som prosent av salgsinntektene
- **Trendanalyse** viser utviklingen over tid med indekser
- **Nøkkeltall** som driftsmargin og resultatmargin brukes til benchmarking og beslutningstaking
- Sammenligningstall fra forrige år er lovpålagt å vise`,
    },
    {
      id: 'rr-3-5-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er hovedforskjellen mellom artsinndelingsmetoden og funksjonsinndelingsmetoden?',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        'Artsinndelingen gir et annet driftsresultat enn funksjonsinndelingen',
        'Artsinndelingen viser hva kostnadene er, funksjonsinndelingen viser hvor de oppstår',
        'Funksjonsinndelingen er den eneste lovlige metoden i Norge',
        'Artsinndelingen brukes kun for små virksomheter',
      ],
      correctAnswer: 1,
      explanation: 'Artsinndelingen grupperer kostnader etter art (varekostnad, lønn, avskrivninger osv.), mens funksjonsinndelingen grupperer etter funksjon (produksjon, salg, administrasjon). Driftsresultatet blir det samme uavhengig av metode.',
    },
    {
      id: 'rr-3-5-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Beregn driftsmarginen for en virksomhet med salgsinntekter 12 000 000 kr og driftsresultat 1 440 000 kr.',
      exerciseType: 'multiple-choice',
      difficulty: 'easy',
      options: [
        '8,3 %',
        '10,0 %',
        '12,0 %',
        '14,4 %',
      ],
      correctAnswer: 2,
      explanation: 'Driftsmargin = driftsresultat / salgsinntekter x 100 = 1 440 000 / 12 000 000 x 100 = 12,0 %.',
    },
    {
      id: 'rr-3-5-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Gjør en prosentanalyse av følgende resultatregnskap: Salgsinntekter 4 000 000 kr, varekostnad 1 600 000 kr, lønnskostnader 1 400 000 kr, avskrivninger 200 000 kr, andre driftskostnader 480 000 kr. Kommenter resultatet.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `**Prosentanalyse:**

| Post | Beløp | % av salg |
|------|------:|----------:|
| Salgsinntekter | 4 000 000 | 100,0 % |
| Varekostnad | -1 600 000 | 40,0 % |
| Lønnskostnader | -1 400 000 | 35,0 % |
| Avskrivninger | -200 000 | 5,0 % |
| Andre driftskostnader | -480 000 | 12,0 % |
| **Driftsresultat** | **320 000** | **8,0 %** |

**Kommentar:**
- **Bruttofortjeneste:** 60,0 % (100 - 40). En god bruttomargin som tyder på akseptable innkjøpspriser eller god prising.
- **Lønnskostnader:** 35,0 % – høyeste enkeltpost. Normalt for tjenesteintensive bransjer.
- **Driftsmargin:** 8,0 % – moderat. Virksomheten beholder 8 kroner i driftsresultat for hver 100 kroner i salg.
- **Sum driftskostnader:** 92,0 % av salgsinntektene, noe som gir lite rom for feil.`,
    },
    {
      id: 'rr-3-5-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Sett opp et komplett resultatregnskap for Saga Elektronikk AS 2024 basert på: Salgsinntekter 6 800 000 kr, leieinntekter 96 000 kr, varelager 01.01: 380 000 kr, varekjøp 3 200 000 kr, varelager 31.12: 420 000 kr, brutto lønn 1 900 000 kr (feriepenger 12 %, AGA 14,1 %, pensjon 2 %), avskrivninger 240 000 kr, andre driftskostnader 780 000 kr, renteinntekter 28 000 kr, rentekostnader 195 000 kr, skattekostnad 22 % av resultat før skatt.',
      exerciseType: 'classic',
      difficulty: 'hard',
      solution: `**Beregninger:**

Varekostnad: 380 000 + 3 200 000 - 420 000 = 3 160 000 kr

Lønnskostnader:
- Brutto lønn: 1 900 000
- Feriepenger: 228 000
- AGA: (1 900 000 + 228 000) x 0,141 = 300 048
- Pensjon: 1 900 000 x 0,02 = 38 000
- Sum: 2 466 048 kr

**Resultatregnskap – Saga Elektronikk AS 2024:**

| Post | Beløp |
|------|------:|
| Salgsinntekter | 6 800 000 |
| Andre driftsinntekter (leie) | 96 000 |
| **Sum driftsinntekter** | **6 896 000** |
| | |
| Varekostnad | 3 160 000 |
| Lønnskostnader | 2 466 048 |
| Avskrivninger | 240 000 |
| Andre driftskostnader | 780 000 |
| **Sum driftskostnader** | **6 646 048** |
| | |
| **Driftsresultat** | **249 952** |
| | |
| Finansinntekter | 28 000 |
| Finanskostnader | -195 000 |
| **Netto finansresultat** | **-167 000** |
| | |
| **Resultat før skatt** | **82 952** |
| Skattekostnad (22 %) | -18 249 |
| **Årsresultat** | **64 703** |

Driftsmargin: 249 952 / 6 800 000 = 3,7 % – lav margin. Finanskostnadene forverrer resultatet ytterligere.`,
    },
    {
      id: 'rr-3-5-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'Sammenlign følgende to bedrifter ved hjelp av prosentanalyse og kommenter forskjellene: Bedrift A – salgsinntekter 10 000 000, varekostnad 4 500 000, lønn 3 000 000, driftsresultat 1 200 000. Bedrift B – salgsinntekter 25 000 000, varekostnad 15 000 000, lønn 5 000 000, driftsresultat 2 500 000.',
      exerciseType: 'classic',
      difficulty: 'hard',
      solution: `**Prosentanalyse:**

| Post | Bedrift A | % | Bedrift B | % |
|------|----------:|--:|----------:|--:|
| Salgsinntekter | 10 000 000 | 100 | 25 000 000 | 100 |
| Varekostnad | 4 500 000 | 45 | 15 000 000 | 60 |
| Lønnskostnader | 3 000 000 | 30 | 5 000 000 | 20 |
| Andre kostnader | 1 300 000 | 13 | 2 500 000 | 10 |
| **Driftsresultat** | **1 200 000** | **12** | **2 500 000** | **10** |

**Kommentar:**
- **Bedrift A** har lavere varekostnad (45 % vs. 60 %), men høyere lønnskostnader (30 % vs. 20 %). Dette tyder på en mer tjenesteorientert virksomhet med høyere verdiskaping per enhet.
- **Bedrift B** har høy varekostnad (60 %) som tyder på lavmarginhandel. Lønnskostnadene er lave relativt sett (20 %), noe som kan bety mer automatisering eller enklere operasjoner.
- **Driftsmargin:** Bedrift A (12 %) er mer lønnsom enn Bedrift B (10 %), selv om B har høyere absolutt resultat.
- Bedrift B er 2,5 ganger større (omsetning), men bare 2,1 ganger høyere driftsresultat.
- Prosentanalysen gjør det mulig å sammenligne på tvers av ulik størrelse.`,
    },
    {
      id: 'rr-3-5-ex6',
      type: 'exercise',
      title: 'Oppgave 6',
      content: 'En virksomhet har driftsmargin 6 %, resultatmargin 3 % og bruttofortjeneste 55 %. Forklar hva hvert nøkkeltall forteller oss, og vurder virksomhetens lønnsomhet.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `**Bruttofortjeneste 55 %:**
For hver krone i salg beholder virksomheten 55 øre etter varekostnad. Varekostnaden utgjør 45 % av salget. God bruttomargin gir rom for å dekke øvrige kostnader.

**Driftsmargin 6 %:**
Etter alle driftskostnader (lønn, avskrivninger, andre kostnader) sitter virksomheten igjen med 6 øre per salgskrone. Forskjellen fra bruttofortjeneste (55 % - 6 % = 49 %) betyr at øvrige driftskostnader utgjør hele 49 % av salget.

**Resultatmargin 3 %:**
Etter finanskostnader sitter virksomheten igjen med kun 3 øre per salgskrone. Differansen mellom driftsmargin og resultatmargin (6 % - 3 % = 3 %) skyldes netto finanskostnader.

**Vurdering:**
Lønnsomheten er svak. Selv om bruttofortjenesten er god, spises marginene opp av høye driftskostnader og finanskostnader. Virksomheten bør:
- Vurdere om driftskostnadene (spesielt lønn og andre kostnader) kan reduseres
- Vurdere om gjelden kan reduseres for å senke finanskostnadene
- Vurdere om prisene kan økes for å forbedre topplinjen`,
    },
    {
      id: 'rr-3-5-ex7',
      type: 'exercise',
      title: 'Oppgave 7',
      content: 'Forklar hvorfor sammenligningstall fra forrige år er viktige i resultatregnskapet. Gi et eksempel der sammenligningstallene avslører noe viktig som årets tall alene ikke viser.',
      exerciseType: 'classic',
      difficulty: 'medium',
      solution: `**Hvorfor sammenligningstall er viktige:**
Sammenligningstall gjør det mulig å se utviklingen over tid. Et enkelt årsresultat i isolasjon gir begrenset informasjon – vi trenger kontekst for å vurdere om tallene er gode eller dårlige.

**Eksempel:**
Et selskap viser driftsresultat på 500 000 kr i 2024. Isolert sett ser det greit ut.

Men med sammenligningstall:

| Post | 2024 | 2023 |
|------|-----:|-----:|
| Salgsinntekter | 8 000 000 | 8 200 000 |
| Driftskostnader | -7 500 000 | -7 200 000 |
| **Driftsresultat** | **500 000** | **1 000 000** |
| Driftsmargin | 6,3 % | 12,2 % |

Nå ser vi at:
- Inntektene har falt med 200 000 kr (-2,4 %)
- Kostnadene har økt med 300 000 kr (+4,2 %)
- Driftsresultatet er halvert
- Driftsmarginen har falt dramatisk fra 12,2 % til 6,3 %

Uten sammenligningstall ville regnskapsbrukeren gått glipp av denne negative trenden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const REGNSKAP_REVISJON_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_3_1,
  CHAPTER_REGNSKAP_REVISJON_3_2,
  CHAPTER_REGNSKAP_REVISJON_3_3,
  CHAPTER_REGNSKAP_REVISJON_3_4,
  CHAPTER_REGNSKAP_REVISJON_3_5,
];

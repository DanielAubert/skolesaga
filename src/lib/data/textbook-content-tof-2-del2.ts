/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 2 VG3
 *
 * Seksjon 2: Statistisk analyse (Kapittel 2.1–2.7)
 * Denne filen inneholder kapittel 2.1–2.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1: Populasjoner, utvalg og sannsynlighet
// ============================================================================

export const CHAPTER_TOF_2_2_1: TextbookChapter = {
  id: 'tof-2-2-1',
  courseId: 'tof-2',
  chapterNumber: '2.1',
  title: 'Populasjoner, utvalg og sannsynlighet',
  description: 'Populasjon vs. utvalg, utvalgsfeil, sannsynlighetsfordeling.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå grunnleggende statistiske begreper',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-1-intro',
      type: 'text',
      content: `# Populasjoner, utvalg og sannsynlighet

I dette kapittelet skal du lære om grunnleggende statistiske begreper som er avgjørende for all empirisk forskning. Statistikk er verktøyet som gjør det mulig å trekke slutninger om store grupper basert på informasjon fra mindre grupper.

**Læringsmål:**
- Forklare forskjellen mellom populasjon og utvalg
- Forstå begrepene utvalgsfeil og skjevhet
- Beskrive sannsynlighetsfordelinger, spesielt normalfordelingen
- Beregne og tolke standardavvik og gjennomsnitt i kontekst`,
    },

    // --- BLOKK 1: Populasjon og utvalg ---
    {
      id: 'tof2-2-1-text-1',
      type: 'text',
      content: `## Populasjon og utvalg

All statistisk analyse starter med et fundamentalt skille: vi ønsker å si noe om en **populasjon**, men vi har som regel bare tilgang til et **utvalg**.

Tenk deg at du vil undersøke gjennomsnittlig skjermtid blant norske VG3-elever. Populasjonen er alle VG3-elever i Norge — kanskje 60 000 personer. Det er umulig å spørre alle, så du velger ut et utvalg på for eksempel 200 elever og måler deres skjermtid.

Utfordringen er å sikre at utvalget er **representativt** — at det gjenspeiler populasjonen godt nok til at vi kan generalisere resultatene. Hvordan vi velger utvalget er derfor helt avgjørende for kvaliteten på forskningen.

### Utvalgsteknikker

Det finnes flere metoder for å trekke utvalg:

**Sannsynlighetsutvalg** (tilfeldig utvalg):
- **Enkelt tilfeldig utvalg:** Alle i populasjonen har lik sannsynlighet for å bli valgt. Tilsvarer loddtrekning.
- **Stratifisert utvalg:** Populasjonen deles i undergrupper (strata), og det trekkes tilfeldig fra hvert stratum. Sikrer at viktige undergrupper er representert.
- **Klyngeutvalg:** Populasjonen deles i naturlige klynger (f.eks. skoler), og hele klynger velges tilfeldig. Praktisk, men gir større utvalgsfeil.

**Ikke-sannsynlighetsutvalg:**
- **Bekvemmelighetsutvalg:** Man bruker de som er lettest tilgjengelige. Vanlig, men gir størst risiko for skjevhet.
- **Snøballutvalg:** Deltakere rekrutterer andre deltakere. Nyttig for vanskelig tilgjengelige grupper.`,
    },
    {
      id: 'tof2-2-1-def-1',
      type: 'definition',
      title: 'Populasjon og utvalg',
      content: `**Populasjon** er den fullstendige mengden av alle enheter (personer, objekter, hendelser) som vi ønsker å si noe om. Populasjonen defineres av forskningsspørsmålet.

**Utvalg** er den delmengden av populasjonen som vi faktisk undersøker og samler inn data fra.

**Populasjonsparameter** er den sanne verdien i populasjonen (f.eks. det sanne gjennomsnittet $\\mu$ eller det sanne standardavviket $\\sigma$). Disse er vanligvis ukjente.

**Utvalgsstatistikk** er verdien beregnet fra utvalget (f.eks. utvalgsgjennomsnittet $\\bar{x}$ eller utvalgsstandardavviket $s$). Disse brukes som estimater for de ukjente parameterne.`,
    },
    {
      id: 'tof2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Populasjon vs. utvalg',
      problem: 'En forsker vil undersøke gjennomsnittlig reaksjonstid hos norske 18-åringer. Hun tester 150 tilfeldig valgte 18-åringer og finner et gjennomsnitt på $\\bar{x} = 245$ ms med standardavvik $s = 32$ ms. Identifiser populasjonen, utvalget, parameteren og statistikken.',
      solution: `**Populasjon:** Alle norske 18-åringer (ca. 60 000 personer).

**Utvalg:** De 150 tilfeldig valgte 18-åringene som ble testet.

**Populasjonsparameter:** Den sanne gjennomsnittlige reaksjonstiden $\\mu$ for alle norske 18-åringer — denne er ukjent.

**Utvalgsstatistikk:** $\\bar{x} = 245$ ms (utvalgsgjennomsnitt) og $s = 32$ ms (utvalgsstandardavvik). Disse er våre beste estimater for de ukjente parameterne $\\mu$ og $\\sigma$.

Legg merke til notasjonen: greske bokstaver ($\\mu$, $\\sigma$) brukes for populasjonsparametere, mens latinske bokstaver ($\\bar{x}$, $s$) brukes for utvalgsstatistikk.`,
    },
    {
      id: 'tof2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En kommune ønsker å kartlegge innbyggernes holdning til et nytt byutviklingsprosjekt. De sender spørreskjema til 500 tilfeldig valgte innbyggere. Hva er populasjonen i denne undersøkelsen?',
        options: [
          { id: 'a', text: 'De 500 innbyggerne som mottar spørreskjemaet', isCorrect: false },
          { id: 'b', text: 'Alle innbyggere i kommunen', isCorrect: true },
          { id: 'c', text: 'Alle som svarer på spørreskjemaet', isCorrect: false },
          { id: 'd', text: 'Kommunestyrets medlemmer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Populasjonen er den gruppen vi ønsker å si noe om — altså alle innbyggere i kommunen. De 500 som mottar spørreskjemaet er utvalget (A). De som faktisk svarer er respondentene, som kan være et skjevt underutvalg dersom det er systematisk frafall (C). Kommunestyret er beslutningstakerne, ikke studieobjektet (D).',
      },
    },

    // --- BLOKK 2: Utvalgsfeil og skjevhet ---
    {
      id: 'tof2-2-1-text-2',
      type: 'text',
      content: `## Utvalgsfeil og skjevhet

Selv med et godt utvalg vil utvalgsstatistikken aldri være nøyaktig lik populasjonsparameteren. Denne forskjellen kalles **utvalgsfeil**, og den oppstår uunngåelig fordi vi bare undersøker en del av populasjonen.

Utvalgsfeil kan deles i to hovedtyper:

**Tilfeldig utvalgsfeil (sampling error):**
Skyldes tilfeldigheter i hvilke enheter som havner i utvalget. Denne feilen er uunngåelig, men kan reduseres ved å øke utvalgsstørrelsen. Tilfeldig utvalgsfeil følger kjente statistiske lovmessigheter, og vi kan beregne hvor stor den sannsynligvis er.

**Systematisk skjevhet (bias):**
Skyldes at utvalget på en systematisk måte avviker fra populasjonen. Denne feilen kan *ikke* reduseres ved å øke utvalgsstørrelsen — et stort skjevt utvalg er like skjevt som et lite skjevt utvalg. Eksempler:
- **Seleksjonsskjevhet:** Ikke alle i populasjonen har lik sjanse for å bli valgt
- **Frafallsskjevhet:** De som svarer skiller seg systematisk fra de som ikke svarer
- **Responsskjevhet:** Deltakere svarer uærlig eller påvirkes av spørsmålsformulering

### Standardfeilen

**Standardfeilen** (standard error, SE) er et mål på den tilfeldige usikkerheten i et estimat. For gjennomsnittet er standardfeilen:

$$SE = \\frac{s}{\\sqrt{n}}$$

der $s$ er utvalgsstandardavviket og $n$ er utvalgsstørrelsen. Formelen viser at standardfeilen synker når utvalgsstørrelsen øker — et større utvalg gir mer presise estimater.`,
    },
    {
      id: 'tof2-2-1-def-2',
      type: 'definition',
      title: 'Standardfeil',
      content: `**Standardfeilen** (SE) er standardavviket til utvalgsfordelingen til en statistikk. Den angir hvor mye en utvalgsstatistikk typisk varierer fra den sanne populasjonsparameteren.

For gjennomsnittet:

$$SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}$$

En liten standardfeil betyr at estimatet er presist. En stor standardfeil betyr stor usikkerhet.

**Tommelregel:** Firedobling av utvalgsstørrelsen halverer standardfeilen ($\\sqrt{4} = 2$).`,
    },
    {
      id: 'tof2-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Beregning av standardfeil',
      problem: 'Et utvalg på $n = 64$ VG3-elever har gjennomsnittlig puls $\\bar{x} = 72$ slag per minutt med standardavvik $s = 8$ slag per minutt. Beregn standardfeilen, og forklar hva den betyr.',
      solution: `Vi bruker formelen for standardfeil:

$$SE = \\frac{s}{\\sqrt{n}} = \\frac{8}{\\sqrt{64}} = \\frac{8}{8} = 1{,}0 \\text{ slag/min}$$

**Tolkning:** Standardfeilen på 1,0 slag/min betyr at dersom vi gjentok undersøkelsen mange ganger med nye utvalg på 64 elever, ville gjennomsnittsverdiene typisk avvike med ca. 1 slag/min fra det sanne populasjonsgjennomsnittet.

Hadde vi i stedet hatt $n = 16$ elever:

$$SE = \\frac{8}{\\sqrt{16}} = \\frac{8}{4} = 2{,}0 \\text{ slag/min}$$

Med fire ganger færre deltakere er standardfeilen dobbelt så stor — estimatet er halvparten så presist.`,
    },
    {
      id: 'tof2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-1-ex-2',
        number: '2.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et utvalg på $n = 100$ har standardavvik $s = 20$. Hva skjer med standardfeilen dersom utvalgsstørrelsen øker til $n = 400$?',
        options: [
          { id: 'a', text: 'Standardfeilen halveres (fra 2,0 til 1,0)', isCorrect: true },
          { id: 'b', text: 'Standardfeilen firedobles (fra 2,0 til 8,0)', isCorrect: false },
          { id: 'c', text: 'Standardfeilen forblir uendret (2,0)', isCorrect: false },
          { id: 'd', text: 'Standardfeilen reduseres til en fjerdedel (fra 2,0 til 0,5)', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Med $n = 100$: $SE = 20 / \\sqrt{100} = 20/10 = 2{,}0$. Med $n = 400$: $SE = 20 / \\sqrt{400} = 20/20 = 1{,}0$. Firedobling av utvalget halverer standardfeilen fordi $\\sqrt{4} = 2$. Standardfeilen reduseres altså ikke proporsjonalt med utvalgsstørrelsen, men med kvadratroten av den.',
      },
    },

    // --- BLOKK 3: Sannsynlighetsfordeling og normalfordelingen ---
    {
      id: 'tof2-2-1-text-3',
      type: 'text',
      content: `## Sannsynlighetsfordelinger og normalfordelingen

En **sannsynlighetsfordeling** beskriver hvilke verdier en tilfeldig variabel kan ta, og med hvilken sannsynlighet. Den gir en matematisk modell for usikkerhet.

I statistisk analyse er **normalfordelingen** den viktigste sannsynlighetsfordelingen. Den er klokkekurve-formet og beskrevet av to parametere:
- **Gjennomsnittet** $\\mu$ (sentrum av fordelingen)
- **Standardavviket** $\\sigma$ (spredningen rundt sentrum)

Vi skriver $X \\sim N(\\mu, \\sigma^2)$ for å angi at variabelen $X$ er normalfordelt.

### 68-95-99,7-regelen

For normalfordelingen gjelder:
- Ca. **68 %** av verdiene ligger innenfor $\\mu \\pm 1\\sigma$
- Ca. **95 %** av verdiene ligger innenfor $\\mu \\pm 2\\sigma$
- Ca. **99,7 %** av verdiene ligger innenfor $\\mu \\pm 3\\sigma$

Denne regelen gir en rask måte å vurdere om en observasjon er «vanlig» eller «uvanlig». En verdi som ligger mer enn $2\\sigma$ fra gjennomsnittet forekommer bare i 5 % av tilfellene og regnes ofte som statistisk uvanlig.

### Sentralgrenseteoremet

**Sentralgrenseteoremet** (SGT) er et av statistikkens viktigste resultater: Uansett hvordan den opprinnelige fordelingen ser ut, vil **fordelingen av utvalgsgjennomsnittet** nærme seg en normalfordeling når utvalgsstørrelsen $n$ blir stor nok (tommelregel: $n \\geq 30$).

$$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$

Dette betyr at vi kan bruke normalfordelingen til å lage konfidensintervaller og utføre hypotesetester — selv når den underliggende variabelen ikke er normalfordelt.`,
    },
    {
      id: 'tof2-2-1-def-3',
      type: 'definition',
      title: 'Normalfordelingen',
      content: `**Normalfordelingen** $N(\\mu, \\sigma^2)$ er en symmetrisk, klokkekurve-formet sannsynlighetsfordeling definert av tetthetsfunksjonen:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

**Standardnormalfordelingen** $N(0, 1)$ har $\\mu = 0$ og $\\sigma = 1$. En vilkårlig normalfordelt variabel kan transformeres til standardnormalfordelingen ved **z-transformasjon**:

$$z = \\frac{x - \\mu}{\\sigma}$$

$z$-verdien angir hvor mange standardavvik en observasjon ligger fra gjennomsnittet.`,
    },
    {
      id: 'tof2-2-1-example-3',
      type: 'example',
      title: 'Eksempel: Normalfordeling og z-verdier',
      problem: 'Høyden til norske 18-årige gutter er tilnærmet normalfordelt med $\\mu = 180$ cm og $\\sigma = 7$ cm. (a) Hva er sannsynligheten for at en tilfeldig valgt gutt er høyere enn 194 cm? (b) Mellom hvilke verdier finner vi de midterste 95 % av fordelingen?',
      solution: `**(a)** Vi beregner z-verdien:

$$z = \\frac{194 - 180}{7} = \\frac{14}{7} = 2{,}0$$

En z-verdi på 2,0 betyr at 194 cm ligger 2 standardavvik over gjennomsnittet. Fra 68-95-99,7-regelen vet vi at ca. 95 % ligger innenfor $\\pm 2\\sigma$, så ca. 5 % ligger utenfor. Halvparten av disse (2,5 %) er over $\\mu + 2\\sigma$.

$$P(X > 194) \\approx 0{,}025 = 2{,}5\\%$$

Bare ca. 2,5 % av 18-årige gutter er høyere enn 194 cm.

**(b)** De midterste 95 % finnes innenfor $\\mu \\pm 2\\sigma$:

$$180 \\pm 2 \\cdot 7 = 180 \\pm 14$$

De midterste 95 % av høydene ligger altså mellom **166 cm** og **194 cm**.`,
    },
    {
      id: 'tof2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Kroppsvekten til voksne i en populasjon er normalfordelt med $\\mu = 75$ kg og $\\sigma = 10$ kg. Omtrent hvor mange prosent av populasjonen veier mellom 55 kg og 95 kg?',
        options: [
          { id: 'a', text: '68 %', isCorrect: false },
          { id: 'b', text: '95 %', isCorrect: true },
          { id: 'c', text: '99,7 %', isCorrect: false },
          { id: 'd', text: '50 %', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Vi beregner: $55 = 75 - 20 = \\mu - 2\\sigma$ og $95 = 75 + 20 = \\mu + 2\\sigma$. Intervallet $[55, 95]$ tilsvarer $\\mu \\pm 2\\sigma$. Ifølge 68-95-99,7-regelen ligger ca. 95 % av verdiene innenfor dette intervallet.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Populasjonen** er hele gruppen vi vil si noe om; **utvalget** er den delen vi faktisk undersøker.
- Greske bokstaver ($\\mu$, $\\sigma$) brukes for populasjonsparametere, latinske ($\\bar{x}$, $s$) for utvalgsstatistikk.
- **Tilfeldig utvalgsfeil** er uunngåelig, men kan reduseres med større utvalg. **Systematisk skjevhet** kan ikke reduseres ved å øke utvalget.
- **Standardfeilen** $SE = s / \\sqrt{n}$ angir presisjonen til et estimat og synker med kvadratroten av utvalgsstørrelsen.
- **Normalfordelingen** er klokkekurve-formet og beskrevet av $\\mu$ og $\\sigma$. 68-95-99,7-regelen gir en rask tommelregel.
- **Sentralgrenseteoremet** sikrer at utvalgsgjennomsnitt er tilnærmet normalfordelt for store nok utvalg, uavhengig av populasjonens form.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker måler stressnivået (skala 0–100) hos et tilfeldig utvalg på $n = 49$ VG3-elever og finner $\\bar{x} = 62$ og $s = 14$. (a) Beregn standardfeilen til gjennomsnittet. (b) Bruk sentralgrenseteoremet til å finne et 95 %-konfidensintervall for det sanne gjennomsnittlige stressnivået $\\mu$. (c) Forklar med egne ord hva dette konfidensintervallet betyr.',
        hints: ['Husk at et 95 %-konfidensintervall er $\\bar{x} \\pm 2 \\cdot SE$ (tilnærmet).'],
        solution: '(a) Standardfeilen: $SE = s / \\sqrt{n} = 14 / \\sqrt{49} = 14 / 7 = 2{,}0$.\n\n(b) 95 %-konfidensintervall: $\\bar{x} \\pm 2 \\cdot SE = 62 \\pm 2 \\cdot 2{,}0 = 62 \\pm 4{,}0$. Intervallet er $[58, 66]$.\n\n(c) Vi er 95 % sikre på at det sanne gjennomsnittlige stressnivået for alle VG3-elever i populasjonen ligger mellom 58 og 66 på skalaen. Dersom vi gjentok denne undersøkelsen 100 ganger med nye utvalg, ville ca. 95 av konfidensintervallene inneholde den sanne verdien $\\mu$.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En nettavis rapporterer: «Ny undersøkelse viser at norske ungdommer bruker i gjennomsnitt 4,2 timer daglig på skjerm.» Undersøkelsen er basert på et bekvemmelighetsutvalg av 300 elever fra tre skoler i Oslo. Drøft: (a) Hvilke typer skjevhet kan påvirke dette resultatet? (b) Kan vi generalisere til alle norske ungdommer? Begrunn svaret. (c) Foreslå en bedre utvalgsstrategi.',
        hints: ['Tenk på seleksjonsskjevhet, geografisk representativitet og responsskjevhet.'],
        solution: '(a) Mulige skjevheter:\n- Seleksjonsskjevhet: Bekvemmelighetsutvalg betyr at ikke alle ungdommer har lik sjanse for å bli valgt. Elever fra tre Oslo-skoler er ikke representative for hele landet.\n- Geografisk skjevhet: Byungdom kan ha annet skjermbruksmønster enn ungdom i distriktene.\n- Responsskjevhet: Selvrapportert skjermtid kan avvike fra faktisk bruk (sosial ønskelighet, huskeproblemer).\n\n(b) Nei, vi kan ikke generalisere til alle norske ungdommer. Utvalget er ikke representativt — det er begrenset til Oslo, bruker bekvemmelighetsutvalg, og tre skoler er for lite til å fange variasjonen i Norge.\n\n(c) Bedre strategi: Stratifisert tilfeldig utvalg der Norge deles i regioner (strata), og et tilfeldig utvalg skoler trekkes fra hver region. Deretter trekkes et tilfeldig utvalg elever fra hver skole. Dette gir et nasjonalt representativt utvalg med geografisk spredning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Hypotesetesting og p-verdier
// ============================================================================

export const CHAPTER_TOF_2_2_2: TextbookChapter = {
  id: 'tof-2-2-2',
  courseId: 'tof-2',
  chapterNumber: '2.2',
  title: 'Hypotesetesting og p-verdier',
  description: 'Nullhypotese, alternativ hypotese, signifikansnivå og type I/II-feil.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjennomføre hypotesetester',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-2-intro',
      type: 'text',
      content: `# Hypotesetesting og p-verdier

Hypotesetesting er det mest sentrale verktøyet i statistisk analyse. Det gir oss en systematisk metode for å avgjøre om et observert resultat er «ekte» eller bare kan skyldes tilfeldigheter.

**Læringsmål:**
- Formulere nullhypotese og alternativ hypotese
- Forstå og tolke p-verdier korrekt
- Forklare signifikansnivå og dets rolle
- Skille mellom type I-feil og type II-feil
- Gjennomføre en enkel hypotesetest steg for steg`,
    },

    // --- BLOKK 1: Nullhypotese og alternativ hypotese ---
    {
      id: 'tof2-2-2-text-1',
      type: 'text',
      content: `## Nullhypotese og alternativ hypotese

Hypotesetesting begynner alltid med to motstridende påstander:

**Nullhypotesen** $H_0$ er utgangspunktet — den representerer «status quo» eller antagelsen om at det *ikke* er noen effekt, forskjell eller sammenheng. Nullhypotesen er den påstanden vi prøver å motbevise.

**Alternativhypotesen** $H_1$ (eller $H_a$) er forskerens påstand — at det *er* en effekt, forskjell eller sammenheng. Det er denne vi ønsker å finne støtte for.

### Logikken bak hypotesetesting

Hypotesetesting følger en indirekte logikk som ligner **reductio ad absurdum** (bevis ved selvmotsigelse):

1. **Anta** at $H_0$ er sann (ingen effekt)
2. **Beregn** sannsynligheten for å observere et resultat like ekstremt eller mer ekstremt enn det vi faktisk observerte, *gitt at $H_0$ er sann*
3. **Konkluder:** Dersom denne sannsynligheten er veldig liten, er det usannsynlig at $H_0$ er sann → vi **forkaster** $H_0$ til fordel for $H_1$

Vi beviser aldri $H_1$ direkte. I stedet argumenterer vi for at dataene er så usannsynlige under $H_0$ at vi velger å forkaste den.`,
    },
    {
      id: 'tof2-2-2-def-1',
      type: 'definition',
      title: 'Nullhypotese og alternativhypotese',
      content: `**Nullhypotesen** $H_0$: En påstand om at det ikke er noen effekt, forskjell eller sammenheng. Formuleres vanligvis med likhetstegn:
- $H_0: \\mu = \\mu_0$ (gjennomsnittet er lik en bestemt verdi)
- $H_0: \\mu_1 = \\mu_2$ (ingen forskjell mellom grupper)
- $H_0: \\rho = 0$ (ingen korrelasjon)

**Alternativhypotesen** $H_1$: Den motstridende påstanden — at det *er* en effekt. Kan være:
- **Tosidig:** $H_1: \\mu \\neq \\mu_0$ (forskjell i begge retninger)
- **Ensidig:** $H_1: \\mu > \\mu_0$ eller $H_1: \\mu < \\mu_0$ (forskjell i én bestemt retning)`,
    },
    {
      id: 'tof2-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Formulere hypoteser',
      problem: 'En bilprodusent hevder at en ny motortype gir gjennomsnittlig drivstofforbruk på $\\mu_0 = 0{,}50$ liter per mil. En forbrukerorganisasjon mistenker at forbruket er høyere. Formuler passende hypoteser.',
      solution: `Siden forbrukerorganisasjonen mistenker at forbruket er *høyere* enn påstått, bruker vi en **ensidig test**:

$$H_0: \\mu = 0{,}50 \\text{ l/mil}$$
$$H_1: \\mu > 0{,}50 \\text{ l/mil}$$

$H_0$ sier at produsentens påstand stemmer. $H_1$ sier at det sanne forbruket er høyere.

Hadde vi ikke hatt noen spesifikk retning på mistanken — bare at forbruket er *annerledes* enn oppgitt — ville vi brukt en tosidig test:

$$H_0: \\mu = 0{,}50$$
$$H_1: \\mu \\neq 0{,}50$$

Valget mellom ensidig og tosidig test må gjøres *før* dataene analyseres.`,
    },
    {
      id: 'tof2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En forsker vil teste om et nytt medikament senker blodtrykket sammenlignet med placebo. Hva er riktig nullhypotese?',
        options: [
          { id: 'a', text: '$H_0$: Medikamentet senker blodtrykket', isCorrect: false },
          { id: 'b', text: '$H_0$: Medikamentet har ingen effekt på blodtrykket', isCorrect: true },
          { id: 'c', text: '$H_0$: Medikamentet øker blodtrykket', isCorrect: false },
          { id: 'd', text: '$H_0$: Blodtrykket varierer mellom personer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Nullhypotesen representerer alltid «ingen effekt» — at medikamentet ikke gjør noen forskjell. Alternativhypotesen $H_1$ er forskerens påstand om at medikamentet senker blodtrykket. Vi forkaster $H_0$ bare dersom dataene gir sterk nok støtte for $H_1$.',
      },
    },

    // --- BLOKK 2: P-verdier og signifikansnivå ---
    {
      id: 'tof2-2-2-text-2',
      type: 'text',
      content: `## P-verdier og signifikansnivå

**P-verdien** er nøkkeltallet i hypotesetesting. Den besvarer spørsmålet: «Dersom nullhypotesen er sann, hva er sannsynligheten for å observere et resultat like ekstremt eller mer ekstremt enn det vi faktisk observerte?»

En liten p-verdi betyr at resultatet er usannsynlig under $H_0$, noe som tyder på at $H_0$ kanskje ikke er sann.

### Signifikansnivå $\\alpha$

Før vi utfører testen, velger vi et **signifikansnivå** $\\alpha$ — den grensen vi bruker for å avgjøre om p-verdien er «liten nok». Det vanligste valget er $\\alpha = 0{,}05$ (5 %).

**Beslutningsregel:**
- Dersom $p \\leq \\alpha$: Vi **forkaster** $H_0$. Resultatet er **statistisk signifikant**.
- Dersom $p > \\alpha$: Vi **forkaster ikke** $H_0$. Vi har ikke nok evidens til å konkludere med at det er en effekt.

### Vanlige misforståelser om p-verdier

P-verdien er et av de mest misforståtte begrepene i vitenskap:

- P-verdien er **IKKE** sannsynligheten for at $H_0$ er sann
- P-verdien er **IKKE** sannsynligheten for at resultatet skyldes tilfeldigheter
- P-verdien sier **IKKE** noe om størrelsen på effekten
- Statistisk signifikans betyr **IKKE** nødvendigvis praktisk betydning

P-verdien er bare sannsynligheten for dataene (eller mer ekstreme data) *gitt at $H_0$ er sann*. Det er en betinget sannsynlighet: $P(\\text{data} \\mid H_0)$.`,
    },
    {
      id: 'tof2-2-2-def-2',
      type: 'definition',
      title: 'P-verdi',
      content: `**P-verdien** er sannsynligheten for å observere en teststatistikk like ekstrem eller mer ekstrem enn den observerte, gitt at nullhypotesen $H_0$ er sann.

$$p = P(\\text{observert eller mer ekstremt} \\mid H_0 \\text{ er sann})$$

**Signifikansnivå** $\\alpha$ er den forhåndsbestemte grensen for å forkaste $H_0$. Vanlige valg:
- $\\alpha = 0{,}05$ (5 %) — standard i de fleste fagfelt
- $\\alpha = 0{,}01$ (1 %) — strengere, brukes i medisin og partikkelfysikk
- $\\alpha = 0{,}10$ (10 %) — mer liberal, brukes i pilotstudier`,
    },
    {
      id: 'tof2-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Tolkning av p-verdi',
      problem: 'En forsker tester om et treningsprogram forbedrer løpstiden på 3000 m. Utvalget er $n = 25$ deltakere. Etter programmet er gjennomsnittlig forbedring $\\bar{x} = 18$ sekunder med standardavvik $s = 30$ sekunder. Forskeren utfører en t-test og får $p = 0{,}004$. Tolk resultatet med $\\alpha = 0{,}05$.',
      solution: `**Hypoteser:**
- $H_0$: Treningsprogrammet gir ingen forbedring ($\\mu = 0$)
- $H_1$: Treningsprogrammet gir forbedring ($\\mu > 0$)

**P-verdi:** $p = 0{,}004$

**Tolkning:** Dersom treningsprogrammet *ikke* hadde noen effekt ($H_0$ sann), er sannsynligheten for å observere en forbedring på 18 sekunder eller mer bare 0,4 %. Dette er svært usannsynlig.

**Konklusjon:** Siden $p = 0{,}004 < \\alpha = 0{,}05$, forkaster vi $H_0$. Resultatet er statistisk signifikant — det tyder på at treningsprogrammet gir en reell forbedring i løpstid.

**Viktig:** Vi sier *ikke* at det er 99,6 % sannsynlighet for at programmet virker. Vi sier bare at dataene er svært usannsynlige dersom programmet ikke virker.`,
    },
    {
      id: 'tof2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En forsker utfører en hypotesetest med $\\alpha = 0{,}05$ og får $p = 0{,}03$. Hvilken konklusjon er korrekt?',
        options: [
          { id: 'a', text: 'Det er 3 % sannsynlighet for at nullhypotesen er sann', isCorrect: false },
          { id: 'b', text: 'Resultatet er statistisk signifikant — vi forkaster $H_0$', isCorrect: true },
          { id: 'c', text: 'Effekten er stor og praktisk viktig', isCorrect: false },
          { id: 'd', text: 'Det er 97 % sannsynlighet for at alternativhypotesen er sann', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Siden $p = 0{,}03 < \\alpha = 0{,}05$, er resultatet statistisk signifikant, og vi forkaster $H_0$. Svar A og D er vanlige misforståelser — p-verdien er sannsynligheten for dataene gitt $H_0$, ikke sannsynligheten for at $H_0$ er sann eller usann. Svar C er feil fordi statistisk signifikans ikke sier noe om effektens størrelse eller praktiske betydning.',
      },
    },

    // --- BLOKK 3: Type I- og type II-feil ---
    {
      id: 'tof2-2-2-text-3',
      type: 'text',
      content: `## Type I-feil og type II-feil

Enhver statistisk beslutning kan være feil. Det finnes to typer feil:

**Type I-feil (falsk positiv):** Vi forkaster $H_0$ selv om den faktisk er sann. Vi konkluderer feilaktig med at det er en effekt når det ikke er det. Sannsynligheten for type I-feil er lik signifikansnivået $\\alpha$.

**Type II-feil (falsk negativ):** Vi forkaster *ikke* $H_0$ selv om den faktisk er usann. Vi overser en reell effekt. Sannsynligheten for type II-feil betegnes $\\beta$.

| | $H_0$ er sann | $H_0$ er usann |
|---|---|---|
| **Forkaster $H_0$** | Type I-feil ($\\alpha$) | Riktig beslutning (styrke = $1-\\beta$) |
| **Forkaster ikke $H_0$** | Riktig beslutning | Type II-feil ($\\beta$) |

### Teststyrke (power)

**Teststyrken** er sannsynligheten for å forkaste $H_0$ når den faktisk er usann — altså sannsynligheten for å oppdage en reell effekt:

$$\\text{Styrke} = 1 - \\beta$$

Teststyrken øker med:
- **Større utvalgsstørrelse** $n$ — mer data gir mer presis statistikk
- **Større effektstørrelse** — jo større den sanne effekten er, desto lettere er den å oppdage
- **Høyere signifikansnivå** $\\alpha$ — men dette øker også risikoen for type I-feil
- **Mindre variasjon** i dataene — mindre «støy» gjør det lettere å se «signalet»

En vanlig tommelregel er at teststyrken bør være minst 0,80 (80 %). Det betyr at vi aksepterer en 20 % risiko for å overse en reell effekt.`,
    },
    {
      id: 'tof2-2-2-def-3',
      type: 'definition',
      title: 'Type I-feil og type II-feil',
      content: `**Type I-feil** ($\\alpha$-feil): Forkaste en sann nullhypotese. Sannsynlighet: $P(\\text{type I-feil}) = \\alpha$.

**Type II-feil** ($\\beta$-feil): Ikke forkaste en usann nullhypotese. Sannsynlighet: $P(\\text{type II-feil}) = \\beta$.

**Teststyrke** (power): $1 - \\beta$ — sannsynligheten for å oppdage en reell effekt.

De to feiltypene står i et spenningsforhold: Å redusere $\\alpha$ (strengere krav for å forkaste $H_0$) øker $\\beta$ (større risiko for å overse reelle effekter), og omvendt. Den eneste måten å redusere begge samtidig er å øke utvalgsstørrelsen.`,
    },
    {
      id: 'tof2-2-2-example-3',
      type: 'example',
      title: 'Eksempel: Type I- og type II-feil i praksis',
      problem: 'Et legemiddelfirma tester et nytt smertestillende medikament. $H_0$: Medikamentet har ingen effekt. $H_1$: Medikamentet reduserer smerte. Forklar hva type I-feil og type II-feil betyr i denne konteksten, og drøft hvilken feil som har de mest alvorlige konsekvensene.',
      solution: `**Type I-feil (falsk positiv):** Vi konkluderer med at medikamentet virker, men det gjør det egentlig ikke. Konsekvens: Et uvirksomst medikament markedsføres. Pasienter får ingen reell smertelindring men tror de er behandlet. Potensielt farlig dersom pasienter erstatter effektiv behandling med dette medikamentet. Økonomisk tap for helsetjenesten.

**Type II-feil (falsk negativ):** Vi konkluderer med at medikamentet ikke virker, men det gjør det egentlig. Konsekvens: Et effektivt medikament forkastes. Pasienter går glipp av en behandling som kunne ha hjulpet dem.

**Hvilken er verst?** Det avhenger av konteksten. I medisin er type I-feil ofte ansett som mest alvorlig fordi det kan føre til at uvirksome (eller farlige) medikamenter tas i bruk. Derfor brukes ofte $\\alpha = 0{,}01$ i medisinsk forskning. Men type II-feil er også alvorlig — mange potensielt livreddende medikamenter kan bli forkastet fordi studiene var for små til å oppdage effekten.`,
    },
    {
      id: 'tof2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-2-ex-3',
        number: '2.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En forsker bruker signifikansnivå $\\alpha = 0{,}05$. Hva er sannsynligheten for å begå en type I-feil?',
        options: [
          { id: 'a', text: '5 %', isCorrect: true },
          { id: 'b', text: '95 %', isCorrect: false },
          { id: 'c', text: 'Det avhenger av utvalgsstørrelsen', isCorrect: false },
          { id: 'd', text: 'Det kan vi ikke vite uten mer informasjon', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Sannsynligheten for type I-feil er per definisjon lik signifikansnivået $\\alpha$. Når vi setter $\\alpha = 0{,}05$, aksepterer vi en 5 % risiko for å forkaste en sann $H_0$. Utvalgsstørrelsen påvirker type II-feil (og teststyrken), men ikke type I-feil — den er kontrollert direkte av valget av $\\alpha$.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nullhypotesen** $H_0$ representerer «ingen effekt» og er utgangspunktet for enhver hypotesetest.
- **Alternativhypotesen** $H_1$ er forskerens påstand om at det er en effekt. Den kan være tosidig eller ensidig.
- **P-verdien** er sannsynligheten for å observere data like ekstreme eller mer ekstreme enn de observerte, gitt at $H_0$ er sann.
- Vi forkaster $H_0$ dersom $p \\leq \\alpha$. Standard signifikansnivå er $\\alpha = 0{,}05$.
- **Type I-feil** (falsk positiv) er å forkaste en sann $H_0$ — sannsynlighet lik $\\alpha$.
- **Type II-feil** (falsk negativ) er å ikke forkaste en usann $H_0$ — sannsynlighet lik $\\beta$.
- **Teststyrken** $1 - \\beta$ bør være minst 0,80 og øker med utvalgsstørrelse, effektstørrelse og signifikansnivå.
- P-verdien sier *ikke* noe om sannsynligheten for at $H_0$ er sann, og heller ikke om effektens praktiske betydning.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En skole vil teste om en ny undervisningsmetode gir bedre resultater enn den tradisjonelle. 40 elever testes: 20 med ny metode (gjennomsnitt 74 poeng, $s = 10$) og 20 med tradisjonell metode (gjennomsnitt 68 poeng, $s = 12$). (a) Formuler $H_0$ og $H_1$. (b) Forskjellen er 6 poeng med $p = 0{,}07$. Er resultatet signifikant ved $\\alpha = 0{,}05$? (c) Hva kan forklare at vi ikke finner signifikant forskjell selv om forskjellen virker «stor»?',
        hints: ['Tenk på utvalgsstørrelse, teststyrke og standardfeil.'],
        solution: '(a) $H_0: \\mu_{\\text{ny}} = \\mu_{\\text{trad}}$ (ingen forskjell mellom metodene).\n$H_1: \\mu_{\\text{ny}} > \\mu_{\\text{trad}}$ (ny metode gir bedre resultater).\n\n(b) Nei, resultatet er ikke statistisk signifikant fordi $p = 0{,}07 > \\alpha = 0{,}05$. Vi kan ikke forkaste $H_0$.\n\n(c) Selv om forskjellen på 6 poeng virker praktisk betydningsfull, er utvalgsstørrelsen for liten (bare 20 per gruppe). Med stor variasjon ($s = 10$ og $s = 12$) og lite utvalg blir standardfeilen stor, noe som gjør testen «slapp» — den mangler teststyrke. Med for eksempel 50 elever per gruppe ville den samme forskjellen sannsynligvis blitt signifikant. Dette illustrerer at «ikke signifikant» ikke betyr «ingen effekt» — det kan bety at studien var for liten til å oppdage effekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med et dagligdags eksempel (f.eks. brannalarm, covid-test, rettsak) hva type I-feil og type II-feil betyr. Drøft hvilken feil som er verst i ditt eksempel, og hvordan man kan redusere risikoen for begge.',
        hints: ['I en rettsak: $H_0$ = tiltalte er uskyldig. Type I-feil = dømme en uskyldig.'],
        solution: 'Eksempel med brannalarm:\n\n$H_0$: Det er ingen brann.\n$H_1$: Det er brann.\n\nType I-feil (falsk alarm): Alarmen går selv om det ikke er brann. Konsekvens: Unødvendig evakuering, forstyrrelse, og over tid kan folk begynne å ignorere alarmen.\n\nType II-feil (uoppdaget brann): Alarmen går ikke selv om det er brann. Konsekvens: Potensielt livsfarlig — folk evakuerer ikke.\n\nHvilken er verst? Type II-feil er klart mest alvorlig fordi konsekvensen kan være dødsfall. Derfor er brannalarmer innstilt til å være svært sensitive — de aksepterer mange falske alarmer (type I-feil) for å minimere risikoen for å overse en reell brann (type II-feil).\n\nRedusere begge: Bedre sensorer som er flinkere til å skille røyk fra matlaging og brannrøyk. Det tilsvarer å øke utvalgsstørrelsen i statistikk — bedre data gir mer presise beslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En forsker finner $p = 0{,}048$ med $\\alpha = 0{,}05$. Hvilken påstand er MEST korrekt?',
        options: [
          { id: 'a', text: 'Det er 95,2 % sannsynlighet for at alternativhypotesen er sann', isCorrect: false },
          { id: 'b', text: 'Resultatet er så vidt statistisk signifikant, men vi bør vurdere effektstørrelse og replikasjon før vi trekker sterke konklusjoner', isCorrect: true },
          { id: 'c', text: 'Nullhypotesen er bevist å være usann', isCorrect: false },
          { id: 'd', text: 'Resultatet ville også vært signifikant med $\\alpha = 0{,}01$', isCorrect: false },
        ],
        solution: 'Riktig svar er B. P-verdien $0{,}048$ er *så vidt* under grensen $0{,}05$. Teknisk sett er resultatet signifikant, men en p-verdi nær grensen bør tolkes med forsiktighet. Vi bør se på effektstørrelsen (er effekten praktisk viktig?) og om resultatet lar seg replikere. A er feil — p-verdien er ikke sannsynligheten for $H_1$. C er feil — vi beviser aldri at $H_0$ er usann, vi finner bare nok evidens til å forkaste den. D er feil — $0{,}048 > 0{,}01$.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: t-test og kjikvadratstest
// ============================================================================

export const CHAPTER_TOF_2_2_3: TextbookChapter = {
  id: 'tof-2-2-3',
  courseId: 'tof-2',
  chapterNumber: '2.3',
  title: 't-test og kjikvadratstest',
  description: 'Uavhengig og paret t-test, kjikvadratstest for uavhengighet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'velge og utføre statistiske tester',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-3-intro',
      type: 'text',
      content: `# t-test og kjikvadratstest

I dette kapittelet skal du lære å bruke to av de mest brukte statistiske testene: **t-testen** for å sammenligne gjennomsnitt og **kjikvadratstesten** for å undersøke sammenhenger mellom kategoriske variabler. Du skal lære når hver test er egnet, hvordan den gjennomføres, og hvordan resultatene tolkes.

**Læringsmål:**
- Utføre en uavhengig t-test for to grupper
- Utføre en paret t-test for gjentatte målinger
- Utføre en kjikvadratstest for uavhengighet
- Velge riktig test basert på datatype og forskningsdesign
- Tolke testresultater med frihetsgrader, teststatistikk og p-verdi`,
    },

    // --- BLOKK 1: Uavhengig t-test ---
    {
      id: 'tof2-2-3-text-1',
      type: 'text',
      content: `## Uavhengig t-test (to utvalg)

Den **uavhengige t-testen** (også kalt «two-sample t-test» eller «uparet t-test») brukes når vi vil sammenligne gjennomsnittene i **to uavhengige grupper**. «Uavhengige» betyr at deltakerne i den ene gruppen ikke påvirker eller er koblet til deltakerne i den andre gruppen.

**Typiske bruksområder:**
- Sammenligne testresultater mellom to klasser som har brukt ulike undervisningsmetoder
- Sammenligne blodtrykk mellom en medikamentgruppe og en placebogruppe
- Sammenligne reaksjonstid mellom kvinner og menn

### Forutsetninger for t-testen

1. **Uavhengige observasjoner** — målingene er uavhengige av hverandre
2. **Normalfordelte data** — dataene i hver gruppe er tilnærmet normalfordelt (eller $n \\geq 30$ per gruppe, jf. sentralgrenseteoremet)
3. **Like varianser** — de to gruppene har omtrent lik spredning (kan sjekkes med Levenes test)

### Teststatistikken

For uavhengig t-test med antatt like varianser beregner vi:

$$t = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$$

der $s_p$ er den sammenslåtte (pooled) standardavviket:

$$s_p = \\sqrt{\\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}}$$

Antall **frihetsgrader** er $df = n_1 + n_2 - 2$.

T-verdien sammenlignes med den kritiske verdien fra t-fordelingen, eller vi beregner p-verdien direkte.`,
    },
    {
      id: 'tof2-2-3-def-1',
      type: 'definition',
      title: 'Uavhengig t-test',
      content: `Den **uavhengige t-testen** tester om gjennomsnittene i to uavhengige grupper er signifikant forskjellige.

**Hypoteser:**
- $H_0: \\mu_1 = \\mu_2$ (ingen forskjell)
- $H_1: \\mu_1 \\neq \\mu_2$ (tosidig) eller $H_1: \\mu_1 > \\mu_2$ (ensidig)

**Teststatistikk:**

$$t = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$$

**Frihetsgrader:** $df = n_1 + n_2 - 2$

Forkast $H_0$ dersom $|t| > t_{\\text{kritisk}}$ ved valgt $\\alpha$ og $df$, eller dersom $p \\leq \\alpha$.`,
    },
    {
      id: 'tof2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Uavhengig t-test',
      problem: 'En forsker vil teste om en ny studieteknikk gir bedre eksamensresultater. 15 elever bruker den nye teknikken ($\\bar{x}_1 = 78$, $s_1 = 8$) og 15 bruker tradisjonell teknikk ($\\bar{x}_2 = 72$, $s_2 = 10$). Utfør en tosidig t-test med $\\alpha = 0{,}05$.',
      solution: `**Steg 1: Formuler hypoteser**
- $H_0: \\mu_1 = \\mu_2$ (ingen forskjell)
- $H_1: \\mu_1 \\neq \\mu_2$ (forskjell)

**Steg 2: Beregn sammenslått standardavvik**

$$s_p = \\sqrt{\\frac{(15-1) \\cdot 8^2 + (15-1) \\cdot 10^2}{15+15-2}} = \\sqrt{\\frac{14 \\cdot 64 + 14 \\cdot 100}{28}} = \\sqrt{\\frac{896 + 1400}{28}} = \\sqrt{82} \\approx 9{,}06$$

**Steg 3: Beregn t-verdien**

$$t = \\frac{78 - 72}{9{,}06 \\cdot \\sqrt{\\frac{1}{15}+\\frac{1}{15}}} = \\frac{6}{9{,}06 \\cdot \\sqrt{0{,}133}} = \\frac{6}{9{,}06 \\cdot 0{,}365} = \\frac{6}{3{,}31} \\approx 1{,}81$$

**Steg 4: Finn frihetsgrader og kritisk verdi**
$df = 15 + 15 - 2 = 28$. Kritisk t-verdi (tosidig, $\\alpha = 0{,}05$, $df = 28$): $t_{\\text{krit}} \\approx 2{,}048$.

**Steg 5: Konklusjon**
$|t| = 1{,}81 < 2{,}048 = t_{\\text{krit}}$, altså $p > 0{,}05$.

Vi forkaster **ikke** $H_0$. Dataene gir ikke nok evidens til å konkludere med at den nye studieteknikken gir signifikant bedre resultater ved $\\alpha = 0{,}05$.`,
    },
    {
      id: 'tof2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når er det riktig å bruke en uavhengig t-test?',
        options: [
          { id: 'a', text: 'Når vi sammenligner gjennomsnittet i tre eller flere grupper', isCorrect: false },
          { id: 'b', text: 'Når vi sammenligner gjennomsnittet i to uavhengige grupper med kontinuerlige data', isCorrect: true },
          { id: 'c', text: 'Når vi sammenligner fordelinger av kategoriske variabler', isCorrect: false },
          { id: 'd', text: 'Når vi måler den samme gruppen før og etter en intervensjon', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Uavhengig t-test brukes for å sammenligne gjennomsnitt i to uavhengige grupper med kontinuerlige (kvantitative) data. For tre eller flere grupper (A) brukes ANOVA. For kategoriske variabler (C) brukes kjikvadratstest. For gjentatte målinger på samme gruppe (D) brukes paret t-test.',
      },
    },

    // --- BLOKK 2: Paret t-test ---
    {
      id: 'tof2-2-3-text-2',
      type: 'text',
      content: `## Paret t-test

Den **parede t-testen** brukes når vi sammenligner to sett med målinger som er **koblet** — enten fordi det er de *samme personene* målt to ganger (før og etter), eller fordi observasjonene er parvis sammenkoblet på en annen måte (f.eks. tvillinger, matchede kontroller).

**Typiske bruksområder:**
- Måle blodtrykk før og etter behandling hos de samme pasientene
- Sammenligne testresultater for samme elever på to tidspunkter
- Måle holdningsendring hos de samme respondentene over tid

### Beregning

I stedet for å sammenligne gruppene direkte, beregner vi **differansen** $d_i = x_{i,\\text{etter}} - x_{i,\\text{før}}$ for hvert par. Deretter utfører vi en én-utvalgs t-test på differansene:

$$t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}$$

der $\\bar{d}$ er gjennomsnittlig differanse, $s_d$ er standardavviket til differansene, og $n$ er antall par.

**Frihetsgrader:** $df = n - 1$

Fordelen med paret design er at hver person fungerer som sin egen kontroll. Individuelle forskjeller (som ulik utgangspuls, ulik motivasjon) elimineres automatisk fordi vi bare ser på *endringen* for hver person.`,
    },
    {
      id: 'tof2-2-3-def-2',
      type: 'definition',
      title: 'Paret t-test',
      content: `Den **parede t-testen** sammenligner gjennomsnitt i to sett med sammenkoblede målinger.

**Hypoteser:**
- $H_0: \\mu_d = 0$ (ingen gjennomsnittlig endring)
- $H_1: \\mu_d \\neq 0$ (tosidig) eller $H_1: \\mu_d > 0$ (ensidig)

**Teststatistikk:**

$$t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}$$

der $d_i$ er differansen for hvert par, $\\bar{d}$ er gjennomsnittlig differanse, og $s_d$ er standardavviket til differansene.

**Frihetsgrader:** $df = n - 1$ (der $n$ er antall par)`,
    },
    {
      id: 'tof2-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Paret t-test',
      problem: '8 pasienter får målt blodtrykk (mmHg) før og etter en behandling. Differansene (etter $-$ før) er: $-5, -8, -3, -12, -2, -7, -6, -9$. Test om behandlingen gir signifikant reduksjon i blodtrykk ($\\alpha = 0{,}05$).',
      solution: `**Steg 1: Hypoteser**
- $H_0: \\mu_d = 0$ (ingen effekt)
- $H_1: \\mu_d < 0$ (blodtrykket synker — ensidig test)

**Steg 2: Beregn gjennomsnittlig differanse**

$$\\bar{d} = \\frac{-5+(-8)+(-3)+(-12)+(-2)+(-7)+(-6)+(-9)}{8} = \\frac{-52}{8} = -6{,}5$$

**Steg 3: Beregn standardavviket til differansene**

$$s_d = \\sqrt{\\frac{\\sum(d_i - \\bar{d})^2}{n-1}}$$

Avvikene: $1{,}5;\\; -1{,}5;\\; 3{,}5;\\; -5{,}5;\\; 4{,}5;\\; -0{,}5;\\; 0{,}5;\\; -2{,}5$
Kvadrater: $2{,}25 + 2{,}25 + 12{,}25 + 30{,}25 + 20{,}25 + 0{,}25 + 0{,}25 + 6{,}25 = 74{,}0$

$$s_d = \\sqrt{\\frac{74{,}0}{7}} = \\sqrt{10{,}57} \\approx 3{,}25$$

**Steg 4: Beregn t-verdien**

$$t = \\frac{-6{,}5}{3{,}25 / \\sqrt{8}} = \\frac{-6{,}5}{3{,}25 / 2{,}83} = \\frac{-6{,}5}{1{,}149} \\approx -5{,}66$$

**Steg 5: Konklusjon**
$df = 8 - 1 = 7$. Kritisk t-verdi (ensidig, $\\alpha = 0{,}05$, $df = 7$): $t_{\\text{krit}} \\approx -1{,}895$.

Siden $t = -5{,}66 < -1{,}895$, er $p < 0{,}05$, og vi forkaster $H_0$. Behandlingen gir signifikant reduksjon i blodtrykk.`,
    },
    {
      id: 'tof2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En forsker måler stressnivå hos 30 ansatte før og etter et mindfulness-kurs. Hvilken test bør brukes?',
        options: [
          { id: 'a', text: 'Uavhengig t-test', isCorrect: false },
          { id: 'b', text: 'Paret t-test', isCorrect: true },
          { id: 'c', text: 'Kjikvadratstest', isCorrect: false },
          { id: 'd', text: 'Korrelasjonsanalyse', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Siden de *samme* 30 ansatte måles to ganger (før og etter), er målingene koblet/paret. Da bruker vi paret t-test, som analyserer endringen for hver person. Uavhengig t-test (A) krever to ulike grupper. Kjikvadratstest (C) brukes for kategoriske data. Korrelasjonsanalyse (D) brukes for å måle sammenheng mellom to variabler.',
      },
    },

    // --- BLOKK 3: Kjikvadratstest ---
    {
      id: 'tof2-2-3-text-3',
      type: 'text',
      content: `## Kjikvadratstesten for uavhengighet

T-testen er for kvantitative (kontinuerlige) data. Men hva om dataene er **kategoriske** — for eksempel kjønn, ja/nei, farge, utdanningsnivå? Da bruker vi **kjikvadratstesten** ($\\chi^2$-testen).

Kjikvadratstesten for uavhengighet tester om det er en **sammenheng** mellom to kategoriske variabler. Den baserer seg på å sammenligne **observerte frekvenser** (det vi faktisk ser i dataene) med **forventede frekvenser** (det vi ville forvente dersom det *ikke* var noen sammenheng).

### Teststatistikken

$$\\chi^2 = \\sum\\frac{(O - E)^2}{E}$$

der $O$ er observert frekvens og $E$ er forventet frekvens for hver celle i krysstabellen.

**Forventet frekvens** beregnes som:

$$E = \\frac{\\text{radtotal} \\times \\text{kolonnetotal}}{\\text{totalt antall}}$$

**Frihetsgrader:** $df = (r - 1)(k - 1)$, der $r$ er antall rader og $k$ er antall kolonner.

### Forutsetninger
- Observasjonene er uavhengige
- Forventet frekvens i hver celle bør være minst 5 (tommelregel)
- Kategoriene er gjensidig utelukkende og uttømmende`,
    },
    {
      id: 'tof2-2-3-def-3',
      type: 'definition',
      title: 'Kjikvadratstest for uavhengighet',
      content: `**Kjikvadratstesten** ($\\chi^2$-testen) tester om to kategoriske variabler er uavhengige av hverandre.

**Hypoteser:**
- $H_0$: Variablene er uavhengige (ingen sammenheng)
- $H_1$: Variablene er avhengige (det er en sammenheng)

**Teststatistikk:**

$$\\chi^2 = \\sum\\frac{(O - E)^2}{E}$$

**Forventet frekvens:** $E = \\frac{\\text{radtotal} \\times \\text{kolonnetotal}}{N}$

**Frihetsgrader:** $df = (r-1)(k-1)$

En stor $\\chi^2$-verdi betyr stort avvik mellom observerte og forventede frekvenser, noe som tyder på at variablene *ikke* er uavhengige.`,
    },
    {
      id: 'tof2-2-3-example-3',
      type: 'example',
      title: 'Eksempel: Kjikvadratstest',
      problem: 'En forsker undersøker om det er en sammenheng mellom kjønn og valg av programfag. 200 elever fordeler seg slik:\n\n|  | Realfag | Språkfag | Totalt |\n|---|---|---|---|\n| Gutter | 60 | 40 | 100 |\n| Jenter | 45 | 55 | 100 |\n| Totalt | 105 | 95 | 200 |\n\nUtfør en kjikvadratstest med $\\alpha = 0{,}05$.',
      solution: `**Steg 1: Hypoteser**
- $H_0$: Kjønn og valg av programfag er uavhengige
- $H_1$: Det er en sammenheng mellom kjønn og programfagsvalg

**Steg 2: Beregn forventede frekvenser**

$E_{\\text{gutter, realfag}} = \\frac{100 \\times 105}{200} = 52{,}5$

$E_{\\text{gutter, språk}} = \\frac{100 \\times 95}{200} = 47{,}5$

$E_{\\text{jenter, realfag}} = \\frac{100 \\times 105}{200} = 52{,}5$

$E_{\\text{jenter, språk}} = \\frac{100 \\times 95}{200} = 47{,}5$

**Steg 3: Beregn $\\chi^2$**

$$\\chi^2 = \\frac{(60-52{,}5)^2}{52{,}5} + \\frac{(40-47{,}5)^2}{47{,}5} + \\frac{(45-52{,}5)^2}{52{,}5} + \\frac{(55-47{,}5)^2}{47{,}5}$$

$$= \\frac{56{,}25}{52{,}5} + \\frac{56{,}25}{47{,}5} + \\frac{56{,}25}{52{,}5} + \\frac{56{,}25}{47{,}5} = 1{,}071 + 1{,}184 + 1{,}071 + 1{,}184 = 4{,}51$$

**Steg 4: Frihetsgrader og kritisk verdi**
$df = (2-1)(2-1) = 1$. Kritisk verdi ($\\alpha = 0{,}05$, $df = 1$): $\\chi^2_{\\text{krit}} = 3{,}841$.

**Steg 5: Konklusjon**
$\\chi^2 = 4{,}51 > 3{,}841$, altså $p < 0{,}05$. Vi forkaster $H_0$. Det er en statistisk signifikant sammenheng mellom kjønn og valg av programfag.`,
    },
    {
      id: 'tof2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-3-ex-3',
        number: '2.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I en kjikvadratstest med en $2 \\times 3$-krysstabell, hvor mange frihetsgrader har testen?',
        options: [
          { id: 'a', text: '$df = 6$', isCorrect: false },
          { id: 'b', text: '$df = 5$', isCorrect: false },
          { id: 'c', text: '$df = 2$', isCorrect: true },
          { id: 'd', text: '$df = 3$', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Frihetsgrader for en kjikvadratstest beregnes som $df = (r-1)(k-1)$, der $r$ er antall rader og $k$ er antall kolonner. For en $2 \\times 3$-tabell: $df = (2-1)(3-1) = 1 \\times 2 = 2$.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Uavhengig t-test** sammenligner gjennomsnitt i to uavhengige grupper: $t = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$
- **Paret t-test** sammenligner gjentatte målinger på samme individer: $t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}$
- **Kjikvadratstest** tester sammenheng mellom to kategoriske variabler: $\\chi^2 = \\sum\\frac{(O-E)^2}{E}$
- Velg test basert på datatype: t-test for kvantitative data, kjikvadratstest for kategoriske data
- Velg mellom uavhengig og paret t-test basert på om gruppene er uavhengige eller sammenkoblede
- Frihetsgrader: uavhengig t-test: $df = n_1 + n_2 - 2$; paret t-test: $df = n - 1$; kjikvadratstest: $df = (r-1)(k-1)$
- Alle tester krever at forutsetningene er oppfylt for at resultatene skal være gyldige`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En idrettsforsker vil undersøke om et nytt oppvarmingsprogram forbedrer sprinttid (100 m). 12 løpere kjører 100 m to ganger: først med vanlig oppvarming, deretter med det nye programmet. Tidene (sekunder) er:\n\nVanlig oppvarming: 12,4 – 11,8 – 13,1 – 12,0 – 11,5 – 12,7 – 13,3 – 12,2 – 11,9 – 12,6 – 12,8 – 11,7\nNytt program: 12,1 – 11,5 – 12,8 – 11,7 – 11,3 – 12,3 – 13,0 – 12,0 – 11,6 – 12,2 – 12,5 – 11,4\n\n(a) Begrunn hvorfor paret t-test er riktig her. (b) Beregn differansene og gjennomsnittlig differanse $\\bar{d}$. (c) Er det rimelig å konkludere med at det nye programmet gir kortere sprinttid?',
        hints: ['Differansene er nytt minus vanlig. Negative differanser betyr kortere tid med nytt program.'],
        solution: '(a) Paret t-test er riktig fordi de *samme* 12 løperne måles under begge betingelsene. Målingene er koblet — hver løper har to tider som hører sammen.\n\n(b) Differansene (nytt $-$ vanlig):\n$-0{,}3;\\; -0{,}3;\\; -0{,}3;\\; -0{,}3;\\; -0{,}2;\\; -0{,}4;\\; -0{,}3;\\; -0{,}2;\\; -0{,}3;\\; -0{,}4;\\; -0{,}3;\\; -0{,}3$\n\n$\\bar{d} = \\frac{-3{,}6}{12} = -0{,}30$ sekunder.\n\nAlle differansene er negative, noe som tyder på at det nye programmet konsistent gir kortere tid.\n\n(c) Med en gjennomsnittlig forbedring på 0,30 sekunder og svært liten variasjon i differansene ($s_d \\approx 0{,}06$), gir den parede t-testen $t = \\frac{-0{,}30}{0{,}06/\\sqrt{12}} \\approx -17{,}3$, som er svært signifikant ($p \\ll 0{,}001$). Det er sterkt grunnlag for å konkludere med at det nye oppvarmingsprogrammet gir kortere sprinttid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En forsker undersøker om det er en sammenheng mellom treningshyppighet (lite/moderat/mye) og forekomst av forkjølelse (ja/nei) blant 300 personer:\n\n|  | Forkjølelse | Ingen forkjølelse | Totalt |\n|---|---|---|---|\n| Lite trening | 40 | 60 | 100 |\n| Moderat trening | 25 | 75 | 100 |\n| Mye trening | 20 | 80 | 100 |\n| Totalt | 85 | 215 | 300 |\n\n(a) Beregn forventede frekvenser for alle celler. (b) Beregn $\\chi^2$. (c) Bestem frihetsgrader og konkluder med $\\alpha = 0{,}05$.',
        hints: ['$E = \\text{radtotal} \\times \\text{kolonnetotal} / N$. Kritisk $\\chi^2$ for $df = 2$ og $\\alpha = 0{,}05$ er $5{,}991$.'],
        solution: '(a) Alle rader har total 100 og $N = 300$, så:\n$E_{\\text{forkjølelse}} = 100 \\times 85 / 300 = 28{,}33$ for alle tre grupper.\n$E_{\\text{ingen}} = 100 \\times 215 / 300 = 71{,}67$ for alle tre grupper.\n\n(b) $\\chi^2 = \\frac{(40-28{,}33)^2}{28{,}33} + \\frac{(60-71{,}67)^2}{71{,}67} + \\frac{(25-28{,}33)^2}{28{,}33} + \\frac{(75-71{,}67)^2}{71{,}67} + \\frac{(20-28{,}33)^2}{28{,}33} + \\frac{(80-71{,}67)^2}{71{,}67}$\n\n$= \\frac{136{,}19}{28{,}33} + \\frac{136{,}19}{71{,}67} + \\frac{11{,}09}{28{,}33} + \\frac{11{,}09}{71{,}67} + \\frac{69{,}39}{28{,}33} + \\frac{69{,}39}{71{,}67}$\n\n$= 4{,}808 + 1{,}901 + 0{,}391 + 0{,}155 + 2{,}449 + 0{,}968 = 10{,}67$\n\n(c) $df = (3-1)(2-1) = 2$. Kritisk verdi: $\\chi^2_{\\text{krit}} = 5{,}991$. Siden $10{,}67 > 5{,}991$ forkaster vi $H_0$. Det er en statistisk signifikant sammenheng mellom treningshyppighet og forkjølelse ($p < 0{,}05$).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En forsker vil sammenligne gjennomsnittlig søvnlengde mellom tre aldersgrupper (18–25, 26–40, 41–60). Hvilken test er mest egnet?',
        options: [
          { id: 'a', text: 'Tre separate uavhengige t-tester', isCorrect: false },
          { id: 'b', text: 'Enveis ANOVA (variansanalyse)', isCorrect: true },
          { id: 'c', text: 'Kjikvadratstest', isCorrect: false },
          { id: 'd', text: 'Paret t-test', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Enveis ANOVA er designet for å sammenligne gjennomsnitt i *tre eller flere* uavhengige grupper. Å utføre tre separate t-tester (A) er problematisk fordi det øker risikoen for type I-feil (multippel testing-problemet). Med tre t-tester og $\\alpha = 0{,}05$ blir den samlede risikoen for minst én falsk positiv ca. $1 - (1-0{,}05)^3 \\approx 14{,}3\\%$, ikke 5 %. Kjikvadratstest (C) er for kategoriske data. Paret t-test (D) krever sammenkoblede målinger.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Korrelasjon og regresjon
// ============================================================================

export const CHAPTER_TOF_2_2_4: TextbookChapter = {
  id: 'tof-2-2-4',
  courseId: 'tof-2',
  chapterNumber: '2.4',
  title: 'Korrelasjon og regresjon',
  description: 'Pearsons r, lineær regresjon, R² og prediksjon.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utføre korrelasjons- og regresjonsanalyse',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-4-intro',
      type: 'text',
      content: `# Korrelasjon og regresjon

Mens t-tester og kjikvadratstester sammenligner grupper, handler **korrelasjon** og **regresjon** om å undersøke sammenhengen mellom to kvantitative variabler. Er det en sammenheng mellom studietid og eksamensresultat? Mellom temperatur og energiforbruk? Mellom alder og reaksjonstid?

**Læringsmål:**
- Beregne og tolke Pearsons korrelasjonskoeffisient $r$
- Forstå forskjellen mellom korrelasjon og kausalitet
- Utføre enkel lineær regresjon og tolke regresjonsligningen
- Forklare og tolke forklaringsgraden $R^2$
- Bruke regresjonsmodellen til prediksjon og forstå begrensningene`,
    },

    // --- BLOKK 1: Pearsons korrelasjonskoeffisient ---
    {
      id: 'tof2-2-4-text-1',
      type: 'text',
      content: `## Pearsons korrelasjonskoeffisient $r$

**Pearsons korrelasjonskoeffisient** $r$ er et mål på styrken og retningen av den **lineære** sammenhengen mellom to kvantitative variabler.

Verdien av $r$ ligger alltid mellom $-1$ og $+1$:
- $r = +1$: Perfekt positiv lineær sammenheng (begge variablene øker sammen)
- $r = 0$: Ingen lineær sammenheng
- $r = -1$: Perfekt negativ lineær sammenheng (den ene øker mens den andre synker)

### Tolkning av styrke

| $|r|$ | Styrke |
|---|---|
| 0,00 – 0,19 | Svak eller ingen |
| 0,20 – 0,39 | Svak |
| 0,40 – 0,59 | Moderat |
| 0,60 – 0,79 | Sterk |
| 0,80 – 1,00 | Svært sterk |

### Beregning

Pearsons $r$ beregnes med formelen:

$$r = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n}(x_i - \\bar{x})^2 \\cdot \\sum_{i=1}^{n}(y_i - \\bar{y})^2}}$$

Formelen måler i hvilken grad $x$ og $y$ varierer *sammen* (teller) i forhold til hvor mye de varierer *hver for seg* (nevner).`,
    },
    {
      id: 'tof2-2-4-def-1',
      type: 'definition',
      title: 'Pearsons korrelasjonskoeffisient',
      content: `**Pearsons korrelasjonskoeffisient** $r$ måler graden av lineær sammenheng mellom to kvantitative variabler $X$ og $Y$.

$$r = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum(x_i - \\bar{x})^2 \\cdot \\sum(y_i - \\bar{y})^2}}$$

**Egenskaper:**
- $-1 \\leq r \\leq 1$
- $r > 0$: positiv sammenheng (begge øker)
- $r < 0$: negativ sammenheng (en øker, den andre synker)
- $r$ måler bare **lineær** sammenheng — en sterk kurvilineær sammenheng kan gi $r \\approx 0$
- $r$ er **enhetsfri** — den påvirkes ikke av måleskala`,
    },
    {
      id: 'tof2-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Beregne og tolke Pearsons r',
      problem: 'Fem elever har følgende studietid (timer/uke) og eksamenspoeng:\n\n| Elev | Studietid $x$ | Poeng $y$ |\n|---|---|---|\n| 1 | 5 | 50 |\n| 2 | 10 | 65 |\n| 3 | 15 | 72 |\n| 4 | 20 | 80 |\n| 5 | 25 | 88 |\n\nBeregn $r$ og tolk resultatet.',
      solution: `**Steg 1: Beregn gjennomsnitt**
$\\bar{x} = (5+10+15+20+25)/5 = 15$
$\\bar{y} = (50+65+72+80+88)/5 = 71$

**Steg 2: Beregn avviksprodukter og kvadrater**

| Elev | $x_i - \\bar{x}$ | $y_i - \\bar{y}$ | $(x_i-\\bar{x})(y_i-\\bar{y})$ | $(x_i-\\bar{x})^2$ | $(y_i-\\bar{y})^2$ |
|---|---|---|---|---|---|
| 1 | $-10$ | $-21$ | $210$ | $100$ | $441$ |
| 2 | $-5$ | $-6$ | $30$ | $25$ | $36$ |
| 3 | $0$ | $1$ | $0$ | $0$ | $1$ |
| 4 | $5$ | $9$ | $45$ | $25$ | $81$ |
| 5 | $10$ | $17$ | $170$ | $100$ | $289$ |
| **Sum** | | | **455** | **250** | **848** |

**Steg 3: Beregn $r$**

$$r = \\frac{455}{\\sqrt{250 \\cdot 848}} = \\frac{455}{\\sqrt{212000}} = \\frac{455}{460{,}4} \\approx 0{,}988$$

**Tolkning:** $r = 0{,}99$ indikerer en svært sterk positiv lineær sammenheng mellom studietid og eksamenspoeng. Elever som studerer mer, får konsistent høyere poeng. Men husk: korrelasjon beviser ikke kausalitet — det kan finnes konfunderende variabler.`,
    },
    {
      id: 'tof2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En studie finner $r = -0{,}72$ mellom antall timer skjermtid og antall timer søvn per natt. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Mer skjermtid forårsaker mindre søvn', isCorrect: false },
          { id: 'b', text: 'Det er en sterk negativ lineær sammenheng — de som har mer skjermtid tenderer til å sove mindre', isCorrect: true },
          { id: 'c', text: 'Det er en svak sammenheng mellom skjermtid og søvn', isCorrect: false },
          { id: 'd', text: '72 % av variasjonen i søvn forklares av skjermtid', isCorrect: false },
        ],
        solution: 'Riktig svar er B. $r = -0{,}72$ indikerer en sterk negativ lineær sammenheng (jf. tabellen: $|r|$ mellom 0,60 og 0,79 er «sterk»). A er feil fordi korrelasjon ikke beviser kausalitet. C er feil fordi $|r| = 0{,}72$ er sterk, ikke svak. D er feil fordi det er $R^2 = r^2 = 0{,}72^2 = 0{,}52$ (52 %) som angir forklart variasjon, ikke $r$ direkte.',
      },
    },

    // --- BLOKK 2: Lineær regresjon ---
    {
      id: 'tof2-2-4-text-2',
      type: 'text',
      content: `## Lineær regresjon

Mens korrelasjon bare måler styrken av sammenhengen, gir **lineær regresjon** oss en matematisk modell for sammenhengen. Den gir oss en ligning vi kan bruke til å **predikere** verdien av $y$ basert på verdien av $x$.

Den lineære regresjonsmodellen er:

$$\\hat{y} = a + bx$$

der:
- $\\hat{y}$ er den predikerte verdien av $y$
- $a$ er **konstantleddet** (skjæringspunkt med $y$-aksen) — verdien av $\\hat{y}$ når $x = 0$
- $b$ er **stigningstallet** (regresjonskoeffisienten) — hvor mye $\\hat{y}$ endrer seg per enhet økning i $x$

### Minste kvadraters metode

Regresjonslinjen beregnes ved å minimere summen av kvadrerte avvik mellom observerte og predikerte verdier (residualene). Stigningstallet er:

$$b = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2} = r \\cdot \\frac{s_y}{s_x}$$

Konstantleddet er:

$$a = \\bar{y} - b\\bar{x}$$

Legg merke til sammenhengen: stigningstallet $b$ er knyttet til korrelasjonskoeffisienten $r$, men skalert med forholdet mellom standardavvikene. Mens $r$ er enhetsfri, har $b$ enheter ($y$-enheter per $x$-enhet).`,
    },
    {
      id: 'tof2-2-4-def-2',
      type: 'definition',
      title: 'Lineær regresjon',
      content: `**Enkel lineær regresjon** modellerer sammenhengen mellom en uavhengig variabel $x$ og en avhengig variabel $y$ med en rett linje:

$$\\hat{y} = a + bx$$

**Stigningstall:** $b = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$

**Konstantledd:** $a = \\bar{y} - b\\bar{x}$

**Residual:** $e_i = y_i - \\hat{y}_i$ (avviket mellom observert og predikert verdi)

Regresjonslinjen går alltid gjennom punktet $(\\bar{x}, \\bar{y})$ og minimerer summen av kvadrerte residualer $\\sum e_i^2$.`,
    },
    {
      id: 'tof2-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Lineær regresjon',
      problem: 'Bruk dataene fra forrige eksempel (studietid og poeng) til å finne regresjonslinjen, og prediker poengsummen for en elev som studerer 18 timer per uke.',
      solution: `Fra forrige eksempel har vi: $\\bar{x} = 15$, $\\bar{y} = 71$, $\\sum(x_i - \\bar{x})(y_i - \\bar{y}) = 455$ og $\\sum(x_i - \\bar{x})^2 = 250$.

**Steg 1: Beregn stigningstallet**

$$b = \\frac{455}{250} = 1{,}82$$

For hver time ekstra studietid per uke øker predikert poengsum med 1,82 poeng.

**Steg 2: Beregn konstantleddet**

$$a = 71 - 1{,}82 \\cdot 15 = 71 - 27{,}3 = 43{,}7$$

**Steg 3: Regresjonslinjen**

$$\\hat{y} = 43{,}7 + 1{,}82x$$

**Steg 4: Prediksjon for $x = 18$**

$$\\hat{y} = 43{,}7 + 1{,}82 \\cdot 18 = 43{,}7 + 32{,}76 = 76{,}5 \\text{ poeng}$$

En elev som studerer 18 timer per uke predikeres å få ca. 76,5 poeng. Men dette er bare en prediksjon — den faktiske poengsummen vil avvike noe fra dette.`,
    },
    {
      id: 'tof2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En regresjonsligning er $\\hat{y} = 20 + 3{,}5x$. Hva er den beste tolkningen av stigningstallet $b = 3{,}5$?',
        options: [
          { id: 'a', text: 'Korrelasjonen mellom $x$ og $y$ er 3,5', isCorrect: false },
          { id: 'b', text: 'Når $x$ øker med 1 enhet, øker den predikerte $y$-verdien med 3,5 enheter', isCorrect: true },
          { id: 'c', text: 'Når $y = 0$, er $x = 3{,}5$', isCorrect: false },
          { id: 'd', text: '3,5 % av variasjonen i $y$ forklares av $x$', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Stigningstallet $b$ angir endringen i $\\hat{y}$ for én enhets økning i $x$. A er feil fordi $r$ og $b$ er forskjellige størrelser ($r$ er enhetsfri mellom $-1$ og $1$, mens $b$ har enheter). C blander sammen $b$ og $a$. D blander sammen $b$ og $R^2$.',
      },
    },

    // --- BLOKK 3: R² og prediksjon ---
    {
      id: 'tof2-2-4-text-3',
      type: 'text',
      content: `## Forklaringsgrad $R^2$ og prediksjon

**Determinasjonskoeffisienten** $R^2$ angir hvor stor andel av variasjonen i $y$ som forklares av den lineære sammenhengen med $x$. Den beregnes enkelt som:

$$R^2 = r^2$$

For eksempel: dersom $r = 0{,}80$, er $R^2 = 0{,}64 = 64\\%$. Det betyr at 64 % av variasjonen i $y$ kan forklares av variasjonen i $x$ gjennom den lineære modellen. De resterende 36 % skyldes andre faktorer eller tilfeldig variasjon.

### Tolkning av $R^2$

- $R^2 = 0$: Modellen forklarer ingenting — $x$ gir ingen informasjon om $y$
- $R^2 = 1$: Modellen forklarer alt — alle punkter ligger nøyaktig på regresjonslinjen
- I praksis: $R^2 > 0{,}70$ regnes ofte som god forklaringsgrad i samfunnsvitenskap, mens naturvitenskap ofte krever høyere

### Begrensninger ved prediksjon

**Ekstrapolering:** Å predikere $y$ for $x$-verdier utenfor det observerte dataområdet er risikabelt. Sammenhengen vi observerer innenfor dataområdet trenger ikke gjelde utenfor.

**Korrelasjon $\\neq$ kausalitet:** En regresjonsmodell beskriver en *statistisk* sammenheng. Den sier ikke at endringer i $x$ *forårsaker* endringer i $y$. Konfunderende variabler kan forklare hele sammenhengen.

**Innflytelsesrike observasjoner:** Enkeltpunkter langt fra de andre (uteliggere) kan ha uforholdsmessig stor innflytelse på regresjonslinjen. Det er viktig å sjekke for slike punkter.`,
    },
    {
      id: 'tof2-2-4-def-3',
      type: 'definition',
      title: 'Determinasjonskoeffisienten R²',
      content: `**Determinasjonskoeffisienten** $R^2$ angir andelen av den totale variasjonen i $y$ som forklares av regresjonsmodellen.

$$R^2 = r^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}}$$

der:
- $SS_{\\text{res}} = \\sum(y_i - \\hat{y}_i)^2$ er residualvariasjonen (uforklart variasjon)
- $SS_{\\text{tot}} = \\sum(y_i - \\bar{y})^2$ er totalvariasjonen

$R^2$ ligger alltid mellom 0 og 1 (0 % og 100 %). En høy $R^2$ betyr at modellen passer godt til dataene, men garanterer *ikke* at modellen er riktig eller kausal.`,
    },
    {
      id: 'tof2-2-4-example-3',
      type: 'example',
      title: 'Eksempel: R² og modellvurdering',
      problem: 'For studietid-eksempelet fant vi $r = 0{,}988$. (a) Beregn $R^2$ og tolk verdien. (b) Drøft om vi kan konkludere med at mer studietid *forårsaker* bedre eksamensresultater.',
      solution: `**(a)** $R^2 = r^2 = 0{,}988^2 = 0{,}976 = 97{,}6\\%$

**Tolkning:** 97,6 % av variasjonen i eksamenspoeng kan forklares av variasjonen i studietid gjennom den lineære modellen. Bare 2,4 % skyldes andre faktorer. Dette er en svært høy forklaringsgrad.

**(b)** Selv med $R^2 = 97{,}6\\%$ kan vi **ikke** konkludere med kausalitet basert på korrelasjon/regresjon alene. Mulige konfunderende variabler:

- **Motivasjon:** Motiverte elever studerer mer *og* gjør det bedre på eksamen — men det er motivasjonen som driver begge deler.
- **Forkunnskaper:** Elever med gode forkunnskaper trenger kanskje mindre studietid for å gjøre det bra, men velger likevel å studere mye fordi de liker faget.
- **Sosioøkonomisk bakgrunn:** Kan påvirke både studievaner og prestasjoner.

For å påvise kausalitet trenger vi et eksperiment der studietid randomiseres — noe som er vanskelig i praksis. Regresjonsmodellen viser en sterk sammenheng, men ikke en årsakssammenheng.`,
    },
    {
      id: 'tof2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-4-ex-3',
        number: '2.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En forsker finner $r = 0{,}60$ mellom antall treningsøkter per uke og VO2-maks. Hva er $R^2$, og hva betyr det?',
        options: [
          { id: 'a', text: '$R^2 = 0{,}60$ — 60 % av variasjonen i VO2-maks forklares av trening', isCorrect: false },
          { id: 'b', text: '$R^2 = 0{,}36$ — 36 % av variasjonen i VO2-maks forklares av den lineære sammenhengen med trening', isCorrect: true },
          { id: 'c', text: '$R^2 = 0{,}36$ — 36 % av treningsøktene forklarer VO2-maks', isCorrect: false },
          { id: 'd', text: '$R^2 = 0{,}77$ — 77 % av variasjonen forklares', isCorrect: false },
        ],
        solution: 'Riktig svar er B. $R^2 = r^2 = 0{,}60^2 = 0{,}36$. Det betyr at 36 % av variasjonen i VO2-maks kan forklares av den lineære sammenhengen med antall treningsøkter. De resterende 64 % skyldes andre faktorer (genetikk, kosthold, alder, treningsintensitet osv.). A forveksler $r$ med $R^2$. D beregner $R^2$ feil ($\\sqrt{0{,}60} \\neq 0{,}77$).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Pearsons $r$** måler styrken og retningen av lineær sammenheng mellom to kvantitative variabler ($-1 \\leq r \\leq 1$).
- **Lineær regresjon** gir oss modellen $\\hat{y} = a + bx$ der $b$ er endringen i $\\hat{y}$ per enhet $x$ og $a$ er $y$-verdien når $x = 0$.
- **$R^2 = r^2$** angir andelen av variasjonen i $y$ som forklares av den lineære sammenhengen med $x$.
- Stigningstallet beregnes som $b = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2}$ og konstantleddet som $a = \\bar{y} - b\\bar{x}$.
- **Korrelasjon beviser ikke kausalitet** — konfunderende variabler kan forklare en observert sammenheng.
- **Ekstrapolering** (prediksjon utenfor dataområdet) er risikabelt og bør unngås.
- Sjekk alltid for **uteliggere** og vurder om forutsetningene for lineær regresjon er oppfylt.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker samler inn data om temperatur ($x$, i °C) og strømforbruk ($y$, i kWh) for 6 vinterdager:\n\n| Temperatur | $-10$ | $-5$ | $0$ | $5$ | $10$ | $15$ |\n|---|---|---|---|---|---|---|\n| Strømforbruk | 48 | 42 | 35 | 30 | 22 | 18 |\n\n(a) Beregn Pearsons $r$ og tolk verdien. (b) Finn regresjonslinjen $\\hat{y} = a + bx$. (c) Prediker strømforbruket ved $-3$ °C. (d) Ville det vært fornuftig å bruke modellen til å predikere strømforbruket ved $35$ °C? Begrunn.',
        hints: ['Bruk $\\bar{x} = 2{,}5$ og $\\bar{y} = 32{,}5$. Husk at ekstrapolering er risikabelt.'],
        solution: '(a) $\\bar{x} = 2{,}5$, $\\bar{y} = 32{,}5$.\n$\\sum(x_i-\\bar{x})(y_i-\\bar{y}) = (-12{,}5)(15{,}5)+(-7{,}5)(9{,}5)+(-2{,}5)(2{,}5)+(2{,}5)(-2{,}5)+(7{,}5)(-10{,}5)+(12{,}5)(-14{,}5)$\n$= -193{,}75 - 71{,}25 - 6{,}25 - 6{,}25 - 78{,}75 - 181{,}25 = -537{,}5$\n$\\sum(x_i-\\bar{x})^2 = 156{,}25+56{,}25+6{,}25+6{,}25+56{,}25+156{,}25 = 437{,}5$\n$\\sum(y_i-\\bar{y})^2 = 240{,}25+90{,}25+6{,}25+6{,}25+110{,}25+210{,}25 = 663{,}5$\n$r = \\frac{-537{,}5}{\\sqrt{437{,}5 \\cdot 663{,}5}} = \\frac{-537{,}5}{538{,}8} \\approx -0{,}998$\nTolkning: Svært sterk negativ lineær sammenheng — lavere temperatur gir høyere strømforbruk.\n\n(b) $b = -537{,}5/437{,}5 = -1{,}229$, $a = 32{,}5 - (-1{,}229)(2{,}5) = 35{,}57$.\n$\\hat{y} = 35{,}6 - 1{,}23x$\n\n(c) $\\hat{y} = 35{,}6 - 1{,}23 \\cdot (-3) = 35{,}6 + 3{,}69 = 39{,}3$ kWh.\n\n(d) Nei, 35 °C er langt utenfor dataområdet ($-10$ til $15$ °C). Ekstrapolering er risikabelt — sammenhengen mellom temperatur og strømforbruk endrer seg trolig ved høye temperaturer (f.eks. økt bruk av kjøleanlegg), slik at den lineære modellen ikke gjelder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En avisartikkel skriver: «Forskning viser sterk sammenheng mellom iskremsalg og drukningsulykker ($r = 0{,}85$, $R^2 = 0{,}72$). Jo mer iskrem som selges, desto flere drukner.» (a) Tolk $r$ og $R^2$ med korrekte statistiske begreper. (b) Forklar hvorfor det er feil å konkludere med at iskrem forårsaker drukning. (c) Hva er den sannsynlige konfunderende variabelen? (d) Foreslå et forskningsdesign som kunne teste kausalitet.',
        hints: ['Tenk på hva som påvirker både iskremsalg og drukningsulykker.'],
        solution: '(a) $r = 0{,}85$ betyr en svært sterk positiv lineær sammenheng mellom iskremsalg og drukningsulykker. $R^2 = 0{,}72$ betyr at 72 % av variasjonen i drukningsulykker kan forklares av den lineære sammenhengen med iskremsalg.\n\n(b) Korrelasjon beviser ikke kausalitet. Selv om $r$ er høy, kan sammenhengen skyldes en tredje variabel som påvirker begge. Det er ingen rimelig biologisk mekanisme for at iskrem forårsaker drukning.\n\n(c) Den konfunderende variabelen er **varmt vær/temperatur**. Om sommeren: (1) folk kjøper mer iskrem, og (2) flere bader, noe som øker risikoen for drukningsulykker. Temperaturen driver begge variablene, og skaper en spuriøs (falsk) korrelasjon mellom iskrem og drukning.\n\n(d) Et kontrollert eksperiment: tilfeldig fordele folk til å spise iskrem vs. ikke spise iskrem, og se om drukningsraten endres. Dette er naturligvis verken etisk eller praktisk, noe som illustrerer at korrelasjonsstudier noen ganger er det eneste mulige designet — men de kan aldri bevise kausalitet. Alternativt kan man bruke multivariat regresjon og kontrollere for temperatur statistisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Konfidensintervall og feilmarginer
// ============================================================================

export const CHAPTER_TOF_2_2_5: TextbookChapter = {
  id: 'tof-2-2-5',
  courseId: 'tof-2',
  chapterNumber: '2.5',
  title: 'Konfidensintervall og feilmarginer',
  description: 'Beregning av konfidensintervall, standardfeil og usikkerhet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beregne konfidensintervall',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-5-intro',
      type: 'text',
      content: `# Konfidensintervall og feilmarginer

Når vi estimerer en populasjonsparameter fra et utvalg, gir punktestimatet (for eksempel $\\bar{x}$) bare én enkelt verdi. Men hvor sikre kan vi være på at dette estimatet er nært den sanne verdien? **Konfidensintervaller** gir oss et intervall som med en bestemt sannsynlighet inneholder den sanne parameteren — og **feilmarginen** angir bredden av denne usikkerheten.

**Læringsmål:**
- Forstå forskjellen mellom punktestimat og intervallsestimat
- Beregne konfidensintervall for gjennomsnitt og proporsjoner
- Forklare begrepene standardfeil, konfidensnivå og feilmargin
- Tolke konfidensintervaller korrekt
- Forstå hvordan utvalgsstørrelse påvirker presisjon`,
    },

    // --- BLOKK 1: Fra punktestimat til intervallsestimat ---
    {
      id: 'tof2-2-5-text-1',
      type: 'text',
      content: `## Fra punktestimat til intervallsestimat

Et **punktestimat** er en enkelt verdi beregnet fra utvalget, for eksempel utvalgsgjennomsnittet $\\bar{x} = 72{,}3$. Problemet er at dette tallet alene ikke forteller oss noe om usikkerheten — hvor langt unna kan den sanne verdien $\\mu$ være?

Et **intervallsestimat** (konfidensintervall) løser dette ved å gi et intervall $[\\bar{x} - E, \\, \\bar{x} + E]$ der $E$ er feilmarginen. Intervallet er konstruert slik at det med en gitt sannsynlighet (konfidensnivået) inneholder den sanne parameteren.

### Byggeklossene i et konfidensintervall

Et konfidensintervall for gjennomsnittet er bygget opp av tre deler:

$$\\text{Konfidensintervall} = \\bar{x} \\pm z^* \\cdot \\frac{s}{\\sqrt{n}}$$

der:
- $\\bar{x}$ er utvalgsgjennomsnittet (sentrum av intervallet)
- $z^*$ er den kritiske verdien som avhenger av konfidensnivået
- $s / \\sqrt{n} = SE$ er standardfeilen
- $E = z^* \\cdot SE$ er **feilmarginen**

Feilmarginen bestemmer altså bredden av intervallet, og den avhenger av tre faktorer: spredningen i dataene ($s$), utvalgsstørrelsen ($n$), og konfidensnivået (via $z^*$).`,
    },
    {
      id: 'tof2-2-5-def-1',
      type: 'definition',
      title: 'Konfidensintervall',
      content: `Et **konfidensintervall** er et intervall beregnet fra utvalgsdata som med en angitt sannsynlighet (konfidensnivået) inneholder den sanne populasjonsparameteren.

For gjennomsnittet med kjent eller stor $n$:

$$\\text{KI} = \\bar{x} \\pm z^* \\cdot \\frac{s}{\\sqrt{n}}$$

**Konfidensnivå** er sannsynligheten for at metoden produserer et intervall som inneholder den sanne parameteren. Vanlige nivåer:
- 90 % → $z^* = 1{,}645$
- 95 % → $z^* = 1{,}960$
- 99 % → $z^* = 2{,}576$

**Feilmarginen** er $E = z^* \\cdot SE$, altså halve bredden av konfidensintervallet.`,
    },
    {
      id: 'tof2-2-5-example-1',
      type: 'example',
      title: 'Eksempel: 95 %-konfidensintervall for gjennomsnitt',
      problem: 'En forsker måler reaksjonstid hos $n = 100$ VG3-elever og finner $\\bar{x} = 248$ ms med $s = 30$ ms. Beregn et 95 %-konfidensintervall for den sanne gjennomsnittlige reaksjonstiden $\\mu$.',
      solution: `**Steg 1:** Beregn standardfeilen:
$$SE = \\frac{s}{\\sqrt{n}} = \\frac{30}{\\sqrt{100}} = \\frac{30}{10} = 3{,}0 \\text{ ms}$$

**Steg 2:** Finn den kritiske verdien for 95 %:
$$z^* = 1{,}960$$

**Steg 3:** Beregn feilmarginen:
$$E = z^* \\cdot SE = 1{,}960 \\cdot 3{,}0 = 5{,}88 \\text{ ms}$$

**Steg 4:** Konstruer konfidensintervallet:
$$\\text{KI} = 248 \\pm 5{,}88 = [242{,}1, \\; 253{,}9]$$

**Tolkning:** Vi er 95 % sikre på at den sanne gjennomsnittlige reaksjonstiden for alle VG3-elever ligger mellom 242,1 ms og 253,9 ms. Feilmarginen er ca. 5,9 ms.`,
    },
    {
      id: 'tof2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et 95 %-konfidensintervall for gjennomsnittlig daglig skjermtid er $[3{,}8, \\; 4{,}6]$ timer. Hva betyr dette?',
        options: [
          { id: 'a', text: '95 % av deltakerne bruker mellom 3,8 og 4,6 timer daglig', isCorrect: false },
          { id: 'b', text: 'Det er 95 % sannsynlighet for at det sanne gjennomsnittet ligger i dette intervallet', isCorrect: true },
          { id: 'c', text: 'Gjennomsnittet er nøyaktig 4,2 timer med 95 % sikkerhet', isCorrect: false },
          { id: 'd', text: '95 % av alle konfidensintervaller vil inneholde verdien 4,2', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Et 95 %-konfidensintervall betyr at dersom vi gjentok undersøkelsen mange ganger og beregnet nye konfidensintervaller, ville ca. 95 % av disse intervallene inneholde den sanne populasjonsverdien $\\mu$. Det sier ingenting om enkeltpersoner (A), gir ikke et eksakt tall (C), og refererer ikke til en bestemt utvalgsverdi (D).',
      },
    },

    // --- BLOKK 2: Standardfeil og konfidensnivå ---
    {
      id: 'tof2-2-5-text-2',
      type: 'text',
      content: `## Standardfeil og konfidensnivå

### Standardfeilens rolle

Standardfeilen $SE = s / \\sqrt{n}$ er nøkkelen til å forstå presisjon i statistikk. Den angir hvor mye utvalgsgjennomsnittet typisk varierer fra det sanne gjennomsnittet. Jo mindre standardfeil, desto smalere konfidensintervall og desto mer presist estimat.

Standardfeilen avhenger av to faktorer:
- **Spredningen $s$:** Mer variasjon i dataene gir større usikkerhet
- **Utvalgsstørrelsen $n$:** Større utvalg gir mindre usikkerhet

Sammenhengen med $n$ er ikke lineær — den følger kvadratroten. For å halvere standardfeilen (og dermed feilmarginen) må du firedoble utvalgsstørrelsen:

$$\\text{Halvere } SE \\implies n_{\\text{ny}} = 4 \\cdot n_{\\text{gammel}}$$

### Valg av konfidensnivå

Konfidensnivået bestemmer hvor «sikre» vi vil være, men det er en avveining:

| Konfidensnivå | $z^*$ | Konsekvens |
|---|---|---|
| 90 % | 1,645 | Smalere intervall, men lavere sikkerhet |
| 95 % | 1,960 | Standard — god balanse mellom presisjon og sikkerhet |
| 99 % | 2,576 | Bredere intervall, men høyere sikkerhet |

Høyere konfidensnivå gir bredere intervaller. Det er som å kaste et bredere nett — du er mer sikker på å fange fisken, men du fanger også mye vann.`,
    },
    {
      id: 'tof2-2-5-def-2',
      type: 'definition',
      title: 'Standardfeil og feilmargin',
      content: `**Standardfeil** (SE) er standardavviket til utvalgsfordelingen til en statistikk. For gjennomsnittet:

$$SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}$$

**Feilmargin** (E) er den maksimale forventede avstanden mellom estimatet og den sanne verdien ved et gitt konfidensnivå:

$$E = z^* \\cdot SE$$

**Sammenheng:** Konfidensintervallet er $\\bar{x} \\pm E$, der $E$ er feilmarginen.

**Øke presisjonen:** For å oppnå en ønsket feilmargin $E$ trenger vi utvalgsstørrelse:

$$n = \\left(\\frac{z^* \\cdot s}{E}\\right)^2$$`,
    },
    {
      id: 'tof2-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Nødvendig utvalgsstørrelse',
      problem: 'En forsker ønsker å estimere gjennomsnittlig puls hos VG3-elever med en feilmargin på maks 2 slag/min ved 95 % konfidensnivå. Fra en pilotstudie vet hun at $s \\approx 12$ slag/min. Hvor mange elever trenger hun i utvalget?',
      solution: `Vi bruker formelen for nødvendig utvalgsstørrelse:

$$n = \\left(\\frac{z^* \\cdot s}{E}\\right)^2 = \\left(\\frac{1{,}960 \\cdot 12}{2}\\right)^2 = \\left(\\frac{23{,}52}{2}\\right)^2 = (11{,}76)^2 = 138{,}3$$

Vi runder **opp** til nærmeste hele tall: $n = 139$.

**Tolkning:** Forskeren trenger minst 139 elever i utvalget for å oppnå en feilmargin på maks 2 slag/min med 95 % sikkerhet. Merk at vi alltid runder opp — å runde ned ville gi en feilmargin som er litt for stor.`,
    },
    {
      id: 'tof2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et konfidensintervall basert på $n = 64$ observasjoner har feilmargin $E = 3{,}0$. Hva skjer med feilmarginen dersom utvalgsstørrelsen økes til $n = 256$ (alt annet likt)?',
        options: [
          { id: 'a', text: 'Feilmarginen halveres til $E = 1{,}5$', isCorrect: true },
          { id: 'b', text: 'Feilmarginen blir en fjerdedel: $E = 0{,}75$', isCorrect: false },
          { id: 'c', text: 'Feilmarginen forblir uendret', isCorrect: false },
          { id: 'd', text: 'Feilmarginen dobles til $E = 6{,}0$', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Feilmarginen er $E = z^* \\cdot s / \\sqrt{n}$. Når $n$ firedobles fra 64 til 256, øker $\\sqrt{n}$ fra 8 til 16, altså dobles. Siden $E$ er omvendt proporsjonal med $\\sqrt{n}$, halveres feilmarginen: $E_{\\text{ny}} = 3{,}0 \\cdot (8/16) = 1{,}5$.',
      },
    },

    // --- BLOKK 3: Konfidensintervall for proporsjoner ---
    {
      id: 'tof2-2-5-text-3',
      type: 'text',
      content: `## Konfidensintervall for proporsjoner

Ofte er vi interessert i en **andel** (proporsjon) i stedet for et gjennomsnitt. For eksempel: «Hvilken andel av VG3-elever bruker mer enn 4 timer daglig på skjerm?» Da estimerer vi populasjonsproporsjon $p$ med utvalgsproporsjon $\\hat{p}$.

### Formel for konfidensintervall for proporsjon

$$\\text{KI} = \\hat{p} \\pm z^* \\cdot \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$$

Her er standardfeilen for en proporsjon:

$$SE_{\\hat{p}} = \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$$

### Forutsetninger

For at tilnærmingen skal være gyldig, kreves det at:
- $n \\cdot \\hat{p} \\geq 10$ og $n \\cdot (1 - \\hat{p}) \\geq 10$ (tilstrekkelig mange «suksesser» og «fiaskoer»)
- Utvalget er tilfeldig trukket fra populasjonen

### Feilmargin i meningsmålinger

I meningsmålinger og spørreundersøkelser oppgis gjerne en «feilmargin» på $\\pm 3$ prosentpoeng. Denne er feilmarginen $E$ ved 95 % konfidensnivå. For proporsjoner nær $\\hat{p} = 0{,}5$ (verste tilfelle) er:

$$E \\approx \\frac{1}{\\sqrt{n}}$$

For $n = 1000$: $E \\approx 1/\\sqrt{1000} \\approx 0{,}032 \\approx 3{,}2$ prosentpoeng, noe som forklarer den typiske feilmarginen i norske meningsmålinger.`,
    },
    {
      id: 'tof2-2-5-def-3',
      type: 'definition',
      title: 'Konfidensintervall for proporsjon',
      content: `For en utvalgsproporsjon $\\hat{p}$ basert på $n$ observasjoner er konfidensintervallet:

$$\\text{KI} = \\hat{p} \\pm z^* \\cdot \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$$

**Nødvendig utvalgsstørrelse** for en ønsket feilmargin $E$ (med verste tilfelle $\\hat{p} = 0{,}5$):

$$n = \\left(\\frac{z^*}{2E}\\right)^2$$

For 95 % konfidensnivå og $E = 0{,}03$:
$$n = \\left(\\frac{1{,}96}{0{,}06}\\right)^2 = (32{,}67)^2 \\approx 1068$$`,
    },
    {
      id: 'tof2-2-5-example-3',
      type: 'example',
      title: 'Eksempel: Konfidensintervall for en andel',
      problem: 'I en undersøkelse blant 400 VG3-elever svarer 240 at de trener minst 3 ganger i uken. Beregn et 95 %-konfidensintervall for den sanne andelen som trener minst 3 ganger i uken.',
      solution: `**Steg 1:** Beregn utvalgsproporsjon:
$$\\hat{p} = \\frac{240}{400} = 0{,}60$$

**Steg 2:** Sjekk forutsetningene:
$n \\hat{p} = 400 \\cdot 0{,}60 = 240 \\geq 10$ ✓
$n(1-\\hat{p}) = 400 \\cdot 0{,}40 = 160 \\geq 10$ ✓

**Steg 3:** Beregn standardfeilen:
$$SE = \\sqrt{\\frac{0{,}60 \\cdot 0{,}40}{400}} = \\sqrt{\\frac{0{,}24}{400}} = \\sqrt{0{,}0006} = 0{,}0245$$

**Steg 4:** Beregn feilmarginen:
$$E = 1{,}960 \\cdot 0{,}0245 = 0{,}048$$

**Steg 5:** Konstruer konfidensintervallet:
$$\\text{KI} = 0{,}60 \\pm 0{,}048 = [0{,}552, \\; 0{,}648]$$

**Tolkning:** Vi er 95 % sikre på at den sanne andelen VG3-elever som trener minst 3 ganger i uken er mellom 55,2 % og 64,8 %. Feilmarginen er ca. 4,8 prosentpoeng.`,
    },
    {
      id: 'tof2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-5-ex-3',
        number: '2.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En meningsmåling basert på $n = 1000$ respondenter viser at 45 % støtter et forslag, med feilmargin $\\pm 3{,}1$ prosentpoeng. Hvilken utvalgsstørrelse trengs for å halvere feilmarginen til $\\pm 1{,}55$ prosentpoeng?',
        options: [
          { id: 'a', text: '$n = 2000$', isCorrect: false },
          { id: 'b', text: '$n = 3000$', isCorrect: false },
          { id: 'c', text: '$n = 4000$', isCorrect: true },
          { id: 'd', text: '$n = 1500$', isCorrect: false },
        ],
        solution: 'Riktig svar er C. For å halvere feilmarginen må utvalgsstørrelsen firedobles, fordi feilmarginen er omvendt proporsjonal med $\\sqrt{n}$. Halvering av $E$ krever at $\\sqrt{n}$ dobles, altså $n$ firedobles: $n_{\\text{ny}} = 4 \\cdot 1000 = 4000$.',
      },
    },

    // --- BLOKK 4: Tolkning og vanlige misforståelser ---
    {
      id: 'tof2-2-5-text-4',
      type: 'text',
      content: `## Korrekt tolkning av konfidensintervaller

Konfidensintervaller er blant de mest misforståtte begrepene i statistikk. Her er noen vanlige feil og korrekt tolkning.

### Korrekt tolkning

«Vi er 95 % sikre på at den sanne populasjonsparameteren ligger innenfor intervallet.»

Mer presist: Dersom vi gjentok undersøkelsen og beregnet nye konfidensintervaller mange ganger, ville ca. 95 % av disse intervallene inneholde den sanne verdien.

### Vanlige misforståelser

| Feil tolkning | Forklaring |
|---|---|
| «95 % av dataene ligger i intervallet» | Nei, intervallet handler om **parameteren** (f.eks. $\\mu$), ikke om enkeltobservasjoner |
| «Det er 95 % sjanse for at $\\mu$ er i intervallet» | Teknisk sett er $\\mu$ enten i intervallet eller ikke — det er metoden som har 95 % treffsikkerhet |
| «Feilmarginen betyr at noen har gjort en feil» | Nei, feilmarginen er et mål på naturlig statistisk usikkerhet |

### Overlappende konfidensintervaller

Når to konfidensintervaller **ikke overlapper**, kan vi konkludere med at det er en statistisk signifikant forskjell mellom de to gruppene. Men dersom de overlapper, kan det likevel være en signifikant forskjell — overlapping utelukker ikke signifikans.

### t-fordeling for små utvalg

Når utvalgsstørrelsen er liten ($n < 30$), bruker vi **t-fordelingen** i stedet for normalfordelingen. t-fordelingen har tyngre haler, noe som gir bredere konfidensintervaller og dermed kompenserer for den økte usikkerheten:

$$\\text{KI} = \\bar{x} \\pm t^*_{n-1} \\cdot \\frac{s}{\\sqrt{n}}$$

der $t^*_{n-1}$ er den kritiske verdien fra t-fordelingen med $n-1$ frihetsgrader.`,
    },
    {
      id: 'tof2-2-5-example-4',
      type: 'example',
      title: 'Eksempel: t-basert konfidensintervall',
      problem: 'Et lite utvalg på $n = 16$ elever har gjennomsnittlig søvnlengde $\\bar{x} = 7{,}2$ timer med $s = 1{,}0$ time. Beregn et 95 %-konfidensintervall med t-fordelingen ($t^*_{15} = 2{,}131$).',
      solution: `**Steg 1:** Standardfeil:
$$SE = \\frac{s}{\\sqrt{n}} = \\frac{1{,}0}{\\sqrt{16}} = \\frac{1{,}0}{4} = 0{,}25 \\text{ timer}$$

**Steg 2:** Feilmargin med t-fordeling:
$$E = t^*_{15} \\cdot SE = 2{,}131 \\cdot 0{,}25 = 0{,}533 \\text{ timer}$$

**Steg 3:** Konfidensintervall:
$$\\text{KI} = 7{,}2 \\pm 0{,}533 = [6{,}67, \\; 7{,}73]$$

**Sammenligning:** Med z-fordeling ($z^* = 1{,}960$) ville feilmarginen vært $1{,}960 \\cdot 0{,}25 = 0{,}49$, som gir et smalere intervall $[6{,}71, \\; 7{,}69]$. t-fordelingen gir et bredere intervall fordi den kompenserer for usikkerheten i å estimere $\\sigma$ med $s$ i et lite utvalg.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Et **konfidensintervall** gir et intervall som med en gitt sannsynlighet inneholder den sanne populasjonsparameteren.
- Formelen for gjennomsnitt er $\\text{KI} = \\bar{x} \\pm z^* \\cdot s/\\sqrt{n}$, der $z^*$ avhenger av konfidensnivået.
- **Feilmarginen** $E = z^* \\cdot SE$ angir halve bredden av intervallet og avhenger av spredning, utvalgsstørrelse og konfidensnivå.
- For **proporsjoner** brukes $\\hat{p} \\pm z^* \\cdot \\sqrt{\\hat{p}(1-\\hat{p})/n}$.
- Å halvere feilmarginen krever at utvalgsstørrelsen **firedobles** (fordi $E \\propto 1/\\sqrt{n}$).
- For små utvalg ($n < 30$) brukes **t-fordelingen** som gir bredere intervaller enn z-fordelingen.
- Konfidensintervaller handler om **parameteren**, ikke om enkeltobservasjoner — dette er den vanligste misforståelsen.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en studie av blodtrykk måles systolisk trykk hos $n = 81$ tilfeldig valgte voksne. Gjennomsnittet er $\\bar{x} = 128$ mmHg med $s = 18$ mmHg. (a) Beregn et 95 %-konfidensintervall for det sanne gjennomsnittlige systoliske blodtrykket $\\mu$. (b) Beregn et 99 %-konfidensintervall. (c) Forklar hvorfor 99 %-intervallet er bredere enn 95 %-intervallet. (d) Hvor mange personer trengs for å oppnå en feilmargin på maks 2 mmHg ved 95 % konfidensnivå?',
        hints: ['Husk at $z^*_{95\\%} = 1{,}960$ og $z^*_{99\\%} = 2{,}576$. Bruk formelen $n = (z^* \\cdot s / E)^2$ for del (d).'],
        solution: '(a) $SE = 18/\\sqrt{81} = 18/9 = 2{,}0$ mmHg.\n$E_{95} = 1{,}960 \\cdot 2{,}0 = 3{,}92$ mmHg.\n$\\text{KI}_{95} = 128 \\pm 3{,}92 = [124{,}1, \\; 131{,}9]$ mmHg.\n\n(b) $E_{99} = 2{,}576 \\cdot 2{,}0 = 5{,}15$ mmHg.\n$\\text{KI}_{99} = 128 \\pm 5{,}15 = [122{,}8, \\; 133{,}2]$ mmHg.\n\n(c) 99 %-intervallet er bredere fordi vi krever høyere sikkerhet. For å være mer sikre på å fange den sanne verdien, må vi «kaste et bredere nett». Høyere konfidensnivå → større $z^*$ → større feilmargin → bredere intervall.\n\n(d) $n = (z^* \\cdot s / E)^2 = (1{,}960 \\cdot 18 / 2)^2 = (17{,}64)^2 = 311{,}2$. Vi runder opp: $n = 312$ personer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En valgdagsmåling viser at Parti A har $\\hat{p} = 0{,}32$ (32 %) basert på $n = 900$ respondenter. (a) Beregn et 95 %-konfidensintervall for partiets sanne oppslutning. (b) Beregn feilmarginen. (c) Et annet parti har $\\hat{p} = 0{,}28$ med samme utvalgsstørrelse. Beregn konfidensintervallet. (d) Overlapper de to konfidensintervallene? Hva kan vi konkludere om forskjellen mellom partiene?',
        hints: ['Bruk formelen for proporsjon: $SE = \\sqrt{\\hat{p}(1-\\hat{p})/n}$.'],
        solution: '(a) $SE_A = \\sqrt{0{,}32 \\cdot 0{,}68 / 900} = \\sqrt{0{,}2176/900} = \\sqrt{0{,}000242} = 0{,}01556$.\n$E_A = 1{,}960 \\cdot 0{,}01556 = 0{,}0305$.\n$\\text{KI}_A = 0{,}32 \\pm 0{,}0305 = [0{,}290, \\; 0{,}350]$, altså 29,0 % til 35,0 %.\n\n(b) Feilmarginen er $E = 0{,}0305 \\approx 3{,}1$ prosentpoeng.\n\n(c) $SE_B = \\sqrt{0{,}28 \\cdot 0{,}72 / 900} = \\sqrt{0{,}2016/900} = \\sqrt{0{,}000224} = 0{,}01497$.\n$E_B = 1{,}960 \\cdot 0{,}01497 = 0{,}0293$.\n$\\text{KI}_B = 0{,}28 \\pm 0{,}0293 = [0{,}251, \\; 0{,}309]$, altså 25,1 % til 30,9 %.\n\n(d) Konfidensintervallene overlapper: $\\text{KI}_A = [29{,}0\\%, 35{,}0\\%]$ og $\\text{KI}_B = [25{,}1\\%, 30{,}9\\%]$. De overlapper i området 29,0–30,9 %. Overlapping betyr at vi **ikke kan utelukke** at partiene har lik oppslutning, men det betyr heller ikke nødvendigvis at forskjellen ikke er signifikant. For å avgjøre dette presist bør man utføre en formell tosidig z-test for forskjellen mellom to proporsjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: Statistisk programvare
// ============================================================================

export const CHAPTER_TOF_2_2_6: TextbookChapter = {
  id: 'tof-2-2-6',
  courseId: 'tof-2',
  chapterNumber: '2.6',
  title: 'Statistisk programvare',
  description: 'Python, R og regneark for statistisk analyse.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke programvare for statistisk analyse',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-6-intro',
      type: 'text',
      content: `# Statistisk programvare

Moderne statistisk analyse utføres nesten alltid med programvare. I dette kapittelet lærer du å bruke de tre mest relevante verktøyene for VG3-elever: **Python** (med biblioteket SciPy), **R** (et dedikert statistikkspråk), og **regneark** (Excel/Google Sheets). Du skal lære å utføre beregninger, kjøre tester og lage figurer — og forstå når hvert verktøy egner seg best.

**Læringsmål:**
- Utføre beskrivende statistikk i Python, R og regneark
- Kjøre t-tester og kjikvadratstester med programvare
- Lage statistiske figurer og diagrammer
- Vurdere styrker og begrensninger ved ulike verktøy
- Tolke programvareutdata korrekt`,
    },

    // --- BLOKK 1: Python for statistikk ---
    {
      id: 'tof2-2-6-text-1',
      type: 'text',
      content: `## Python for statistisk analyse

Python er blitt det mest brukte programmeringsspråket for dataanalyse og statistikk globalt. Med bibliotekene **NumPy**, **SciPy** og **Pandas** har Python alt som trengs for statistisk analyse.

### Grunnleggende statistikk med NumPy

\`\`\`python
import numpy as np

data = [23, 27, 31, 25, 28, 30, 22, 26, 29, 24]

# Beskrivende statistikk
gjennomsnitt = np.mean(data)        # 26.5
median = np.median(data)            # 26.5
std_avvik = np.std(data, ddof=1)    # 3.03 (utvalgsstandaravvik)
varians = np.var(data, ddof=1)      # 9.17

print(f"Gjennomsnitt: {gjennomsnitt:.1f}")
print(f"Standardavvik: {std_avvik:.2f}")
\`\`\`

**Viktig:** Parameteren \`ddof=1\` sikrer at vi bruker **utvalgsformelen** (deler på $n-1$), ikke populasjonsformelen (deler på $n$). I forskning bruker vi nesten alltid \`ddof=1\`.

### Hypotesetesting med SciPy

\`\`\`python
from scipy import stats

# Uavhengig t-test
gruppe_a = [82, 78, 85, 90, 76, 88, 84, 79]
gruppe_b = [72, 68, 75, 80, 71, 74, 69, 73]

t_stat, p_verdi = stats.ttest_ind(gruppe_a, gruppe_b)
print(f"t = {t_stat:.3f}, p = {p_verdi:.4f}")
# t = 3.574, p = 0.0030
\`\`\`

### Konfidensintervall med SciPy

\`\`\`python
from scipy import stats
import numpy as np

data = [23, 27, 31, 25, 28, 30, 22, 26, 29, 24]
n = len(data)
gjennomsnitt = np.mean(data)
se = stats.sem(data)  # standardfeil

# 95 %-konfidensintervall med t-fordeling
ki = stats.t.interval(0.95, df=n-1, loc=gjennomsnitt, scale=se)
print(f"95 % KI: [{ki[0]:.2f}, {ki[1]:.2f}]")
# 95 % KI: [24.33, 28.67]
\`\`\``,
    },
    {
      id: 'tof2-2-6-def-1',
      type: 'definition',
      title: 'Python-biblioteker for statistikk',
      content: `**NumPy** — Grunnleggende numerisk beregning. Funksjoner: \`np.mean()\`, \`np.median()\`, \`np.std()\`, \`np.var()\`.

**SciPy** (\`scipy.stats\`) — Statistiske tester og fordelinger. Funksjoner: \`ttest_ind()\` (uavhengig t-test), \`ttest_rel()\` (paret t-test), \`chi2_contingency()\` (kjikvadratstest), \`pearsonr()\` (korrelasjon).

**Pandas** — Datahåndtering og -analyse. Funksjoner: \`df.describe()\` (beskrivende statistikk), \`df.corr()\` (korrelasjonsmatrise), \`df.groupby()\` (gruppering).

**Matplotlib/Seaborn** — Visualisering. Funksjoner: \`plt.hist()\` (histogram), \`plt.scatter()\` (punktdiagram), \`sns.boxplot()\` (boksplott).

**Husk \`ddof=1\`** i NumPy for utvalgsstatistikk. SciPy bruker \`ddof=1\` som standard.`,
    },
    {
      id: 'tof2-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Komplett analyse i Python',
      problem: 'Skriv et Python-program som leser inn to grupper med data, beregner beskrivende statistikk, utfører en uavhengig t-test, og tolker resultatet ved 5 % signifikansnivå.',
      solution: `\`\`\`python
import numpy as np
from scipy import stats

# Data: Eksamensresultater for to klasser
klasse_a = [72, 85, 78, 90, 82, 76, 88, 79, 84, 81]
klasse_b = [65, 70, 74, 68, 72, 66, 75, 69, 71, 73]

# Beskrivende statistikk
print("=== Beskrivende statistikk ===")
print(f"Klasse A: n={len(klasse_a)}, snitt={np.mean(klasse_a):.1f}, "
      f"std={np.std(klasse_a, ddof=1):.1f}")
print(f"Klasse B: n={len(klasse_b)}, snitt={np.mean(klasse_b):.1f}, "
      f"std={np.std(klasse_b, ddof=1):.1f}")

# Uavhengig t-test
t_stat, p_verdi = stats.ttest_ind(klasse_a, klasse_b)
print(f"\\n=== t-test ===")
print(f"t = {t_stat:.3f}, p = {p_verdi:.4f}")

# Tolkning
alfa = 0.05
if p_verdi < alfa:
    print(f"p = {p_verdi:.4f} < {alfa} → Forkast H₀")
    print("Konklusjon: Signifikant forskjell mellom klassene.")
else:
    print(f"p = {p_verdi:.4f} >= {alfa} → Beholder H₀")
    print("Konklusjon: Ingen signifikant forskjell.")
\`\`\`

**Utdata:**
Klasse A: n=10, snitt=81.5, std=5.4
Klasse B: n=10, snitt=70.3, std=3.3
t = 5.571, p = 0.0000
Konklusjon: Signifikant forskjell mellom klassene.`,
    },
    {
      id: 'tof2-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-6-ex-1',
        number: '2.6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør parameteren `ddof=1` i `np.std(data, ddof=1)` i Python?',
        options: [
          { id: 'a', text: 'Den runder av til én desimal', isCorrect: false },
          { id: 'b', text: 'Den bruker utvalgsformelen (deler på $n-1$ i stedet for $n$)', isCorrect: true },
          { id: 'c', text: 'Den returnerer standardfeilen i stedet for standardavviket', isCorrect: false },
          { id: 'd', text: 'Den sorterer dataene først', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Parameteren `ddof` står for «delta degrees of freedom». Med `ddof=1` deler NumPy på $n-1$ (Bessels korreksjon), som gir utvalgsstandardavviket $s$. Uten `ddof=1` (standardverdi `ddof=0`) deler den på $n$, som gir populasjonsstandardavviket $\\sigma$. I forskning og statistiske analyser bruker vi nesten alltid $n-1$.',
      },
    },

    // --- BLOKK 2: R for statistikk ---
    {
      id: 'tof2-2-6-text-2',
      type: 'text',
      content: `## R for statistisk analyse

**R** er et programmeringsspråk designet spesielt for statistikk og dataanalyse. Det er førstevalget i mange forskermiljøer og har innebygd støtte for de fleste statistiske metoder.

### Grunnleggende statistikk i R

\`\`\`r
data <- c(23, 27, 31, 25, 28, 30, 22, 26, 29, 24)

# Beskrivende statistikk
mean(data)        # 26.5
median(data)      # 26.5
sd(data)          # 3.03 (bruker n-1 automatisk)
var(data)         # 9.17
summary(data)     # Min, Q1, Median, Snitt, Q3, Max
\`\`\`

**Fordel med R:** Funksjonen \`sd()\` bruker automatisk utvalgsformelen ($n-1$), så du trenger ikke huske noen ekstra parameter som i Python.

### Hypotesetesting i R

\`\`\`r
# Uavhengig t-test
gruppe_a <- c(82, 78, 85, 90, 76, 88, 84, 79)
gruppe_b <- c(72, 68, 75, 80, 71, 74, 69, 73)

t.test(gruppe_a, gruppe_b)
# t = 3.574, df = 12.3, p-value = 0.003
# 95 % KI for forskjellen: [4.25, 18.25]

# Kjikvadratstest
tabell <- matrix(c(30, 20, 15, 35), nrow=2)
chisq.test(tabell)
# X-squared = 9.52, df = 1, p-value = 0.002
\`\`\`

### Korrelasjon og regresjon i R

\`\`\`r
x <- c(2, 4, 6, 8, 10)
y <- c(15, 22, 30, 35, 42)

# Korrelasjon
cor(x, y)                  # 0.998
cor.test(x, y)             # Med p-verdi og KI

# Lineær regresjon
modell <- lm(y ~ x)
summary(modell)
# Coefficients:
#   (Intercept)  8.20
#   x            3.40
# R-squared: 0.997
\`\`\``,
    },
    {
      id: 'tof2-2-6-def-2',
      type: 'definition',
      title: 'R-funksjoner for statistikk',
      content: `**Beskrivende statistikk:** \`mean()\`, \`median()\`, \`sd()\`, \`var()\`, \`summary()\`, \`quantile()\`.

**t-tester:** \`t.test(x, y)\` — gir automatisk teststatistikk, p-verdi, konfidensintervall og frihetsgrader. Bruk \`paired=TRUE\` for paret t-test.

**Kjikvadratstest:** \`chisq.test(tabell)\` — tar en kontigenstabell som input.

**Korrelasjon:** \`cor(x, y)\` for korrelasjonskoeffisient, \`cor.test(x, y)\` for test med p-verdi.

**Regresjon:** \`lm(y ~ x)\` for lineær modell, \`summary(modell)\` for detaljert utdata med $R^2$, koeffisienter og p-verdier.

**Visualisering:** \`hist()\`, \`boxplot()\`, \`plot()\`, eller bruk \`ggplot2\`-pakken for avanserte figurer.`,
    },
    {
      id: 'tof2-2-6-example-2',
      type: 'example',
      title: 'Eksempel: Sammenligning av Python og R',
      problem: 'Vis hvordan man utfører en paret t-test i både Python og R for følgende data: Før-målinger = [68, 72, 65, 70, 74] og etter-målinger = [62, 66, 60, 64, 70].',
      solution: `**I Python:**
\`\`\`python
from scipy import stats
for_ = [68, 72, 65, 70, 74]
etter = [62, 66, 60, 64, 70]
t_stat, p_verdi = stats.ttest_rel(for_, etter)
print(f"t = {t_stat:.3f}, p = {p_verdi:.4f}")
# t = 5.292, p = 0.0061
\`\`\`

**I R:**
\`\`\`r
for_data <- c(68, 72, 65, 70, 74)
etter <- c(62, 66, 60, 64, 70)
t.test(for_data, etter, paired = TRUE)
# t = 5.292, df = 4, p-value = 0.006
# 95 % KI: [2.52, 8.28]
\`\`\`

**Tolkning:** Begge gir $t = 5{,}292$ og $p = 0{,}006$. Med $p < 0{,}05$ forkaster vi $H_0$ og konkluderer med at det er en statistisk signifikant endring fra før til etter.

**Fordel R:** Gir automatisk konfidensintervall for forskjellen. **Fordel Python:** Lettere å integrere med annen kode og databehandling.`,
    },
    {
      id: 'tof2-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-6-ex-2',
        number: '2.6.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken R-funksjon brukes for å utføre en lineær regresjonsanalyse?',
        options: [
          { id: 'a', text: '`cor.test(y, x)`', isCorrect: false },
          { id: 'b', text: '`lm(y ~ x)`', isCorrect: true },
          { id: 'c', text: '`t.test(y, x)`', isCorrect: false },
          { id: 'd', text: '`chisq.test(y, x)`', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Funksjonen `lm()` (linear model) utfører lineær regresjon i R. Syntaksen `y ~ x` betyr «modeller y som en funksjon av x». `cor.test()` tester korrelasjon (A), `t.test()` sammenligner gjennomsnitt (C), og `chisq.test()` tester uavhengighet mellom kategoriske variabler (D).',
      },
    },

    // --- BLOKK 3: Regneark for statistikk ---
    {
      id: 'tof2-2-6-text-3',
      type: 'text',
      content: `## Regneark for statistisk analyse

Regneark som **Microsoft Excel** og **Google Sheets** er de mest tilgjengelige verktøyene for statistisk analyse. De er spesielt nyttige for enklere analyser og for å bygge intuisjon om statistiske metoder.

### Viktige funksjoner i regneark

| Funksjon | Excel/Sheets | Beskrivelse |
|---|---|---|
| Gjennomsnitt | \`=GJENNOMSNITT(A1:A10)\` | Aritmetisk gjennomsnitt |
| Median | \`=MEDIAN(A1:A10)\` | Midtverdien |
| Standardavvik | \`=STDAV(A1:A10)\` | Utvalgsstandardavvik ($n-1$) |
| Varians | \`=VARIANS(A1:A10)\` | Utvalgsvarians ($n-1$) |
| Korrelasjon | \`=KORRELASJON(A1:A10;B1:B10)\` | Pearsons $r$ |
| Antall | \`=ANTALL(A1:A10)\` | Antall numeriske verdier |
| Min/Maks | \`=MIN(A1:A10)\` / \`=MAKS(A1:A10)\` | Minste/største verdi |

### t-test i regneark

Excel har funksjonen \`=T.TEST()\`:
\`\`\`
=T.TEST(A1:A10; B1:B10; 2; 2)
\`\`\`

Parametrene:
- Første argument: Dataområde gruppe 1
- Andre argument: Dataområde gruppe 2
- Tredje argument: 1 = ensidig, 2 = tosidig test
- Fjerde argument: 1 = paret, 2 = to utvalg med lik varians, 3 = to utvalg med ulik varians

Resultatet er **p-verdien** direkte.

### Konfidensintervall i regneark

For å beregne feilmarginen i Excel:
\`\`\`
=KONFIDENS.NORM(0,05; STDAV(A1:A10); ANTALL(A1:A10))
\`\`\`

Dette gir feilmarginen for et 95 %-konfidensintervall (0,05 = 1 - 0,95). Konfidensintervallet er da gjennomsnitt ± denne verdien.

### Begrensninger ved regneark

- Vanskelig å reprodusere analyser systematisk
- Begrenset mulighet for avanserte metoder
- Lett å gjøre uoppdagede feil i formler
- Dårlig egnet for store datasett (> 10 000 rader)`,
    },
    {
      id: 'tof2-2-6-def-3',
      type: 'definition',
      title: 'Sammenligning av statistisk programvare',
      content: `| Egenskap | Python | R | Regneark |
|---|---|---|---|
| **Brukervennlighet** | Middels | Middels | Høy |
| **Statistisk dybde** | Høy | Svært høy | Lav |
| **Visualisering** | Svært god | Svært god | God |
| **Reproduserbarhet** | Svært god | Svært god | Lav |
| **Store datasett** | Ja | Ja | Begrenset |
| **Gratis** | Ja | Ja | Delvis |
| **Bruk i forskning** | Voksende | Standard | Sjelden |

**Anbefaling:** Bruk regneark for raske, enkle analyser. Bruk Python for prosjekter med databehandling og programmering. Bruk R for ren statistisk analyse og forskning.`,
    },
    {
      id: 'tof2-2-6-example-3',
      type: 'example',
      title: 'Eksempel: Samme analyse i tre verktøy',
      problem: 'Beregn gjennomsnitt, standardavvik og et 95 %-konfidensintervall for datasettet [18, 22, 25, 20, 24, 19, 23, 21] i Python, R og regneark.',
      solution: `**Python:**
\`\`\`python
import numpy as np
from scipy import stats
data = [18, 22, 25, 20, 24, 19, 23, 21]
snitt = np.mean(data)           # 21.5
std = np.std(data, ddof=1)      # 2.33
ki = stats.t.interval(0.95, df=7, loc=snitt, scale=stats.sem(data))
# KI: [19.55, 23.45]
\`\`\`

**R:**
\`\`\`r
data <- c(18, 22, 25, 20, 24, 19, 23, 21)
mean(data)    # 21.5
sd(data)      # 2.33
t.test(data)$conf.int  # [19.55, 23.45]
\`\`\`

**Regneark (data i A1:A8):**
- Gjennomsnitt: \`=GJENNOMSNITT(A1:A8)\` → 21,5
- Standardavvik: \`=STDAV(A1:A8)\` → 2,33
- Feilmargin: \`=KONFIDENS.T(0,05; STDAV(A1:A8); ANTALL(A1:A8))\` → 1,95
- Nedre grense: \`=GJENNOMSNITT(A1:A8) - feilmargin\` → 19,55
- Øvre grense: \`=GJENNOMSNITT(A1:A8) + feilmargin\` → 23,45

Alle tre gir samme resultat: snitt = 21,5, std = 2,33, 95 %-KI = [19,55, 23,45].`,
    },
    {
      id: 'tof2-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-6-ex-3',
        number: '2.6.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken regnearksformel gir utvalgsstandardavviket for data i cellene A1 til A20?',
        options: [
          { id: 'a', text: '`=STDAV(A1:A20)`', isCorrect: true },
          { id: 'b', text: '`=STDAVP(A1:A20)`', isCorrect: false },
          { id: 'c', text: '`=VARIANS(A1:A20)`', isCorrect: false },
          { id: 'd', text: '`=GJENNOMSNITT(A1:A20)`', isCorrect: false },
        ],
        solution: 'Riktig svar er A. `STDAV()` beregner utvalgsstandardavviket (deler på $n-1$), som er det vi nesten alltid bruker i statistisk analyse. `STDAVP()` beregner populasjonsstandardavviket (deler på $n$) og brukes bare når man har data for hele populasjonen (B). `VARIANS()` gir variansen, ikke standardavviket (C). `GJENNOMSNITT()` gir gjennomsnittet (D).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Python** (med NumPy, SciPy, Pandas) er allsidig og kraftig — bruk \`ddof=1\` for utvalgsstatistikk.
- **R** er designet for statistikk og gir den mest komplette støtten — \`sd()\` bruker automatisk $n-1$.
- **Regneark** (Excel/Google Sheets) er mest tilgjengelig og egner seg for enkle analyser — bruk \`STDAV()\` (ikke \`STDAVP()\`).
- Alle tre verktøyene kan utføre beskrivende statistikk, t-tester, korrelasjon, regresjon og konfidensintervaller.
- **Reproduserbarhet** er en viktig fordel med kode (Python/R) over regneark — analysen kan enkelt gjentas og kontrolleres.
- Velg verktøy ut fra oppgavens kompleksitet: regneark for kjappe beregninger, Python/R for seriøse analyser.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har samlet inn data om antall timer brukt på lekser per uke for to klasser:\n\nKlasse X: 5, 8, 6, 7, 9, 4, 6, 8, 7, 5\nKlasse Y: 3, 5, 4, 6, 3, 5, 4, 7, 2, 4\n\n(a) Skriv Python-kode som beregner gjennomsnitt og standardavvik for begge klasser. (b) Skriv Python-kode som utfører en uavhengig t-test. (c) Vis hvordan den samme t-testen utføres i R. (d) Tolk resultatet ved $\\alpha = 0{,}05$.',
        hints: ['Bruk `np.mean()`, `np.std(data, ddof=1)` og `stats.ttest_ind()` i Python. I R: `t.test(x, y)`.'],
        solution: '(a)\n```python\nimport numpy as np\nklasse_x = [5, 8, 6, 7, 9, 4, 6, 8, 7, 5]\nklasse_y = [3, 5, 4, 6, 3, 5, 4, 7, 2, 4]\nprint(f"X: snitt={np.mean(klasse_x):.1f}, std={np.std(klasse_x, ddof=1):.2f}")\nprint(f"Y: snitt={np.mean(klasse_y):.1f}, std={np.std(klasse_y, ddof=1):.2f}")\n```\nResultat: X: snitt=6.5, std=1.58. Y: snitt=4.3, std=1.49.\n\n(b)\n```python\nfrom scipy import stats\nt_stat, p_verdi = stats.ttest_ind(klasse_x, klasse_y)\nprint(f"t = {t_stat:.3f}, p = {p_verdi:.4f}")\n```\nResultat: t = 3.20, p = 0.0049.\n\n(c)\n```r\nx <- c(5, 8, 6, 7, 9, 4, 6, 8, 7, 5)\ny <- c(3, 5, 4, 6, 3, 5, 4, 7, 2, 4)\nt.test(x, y)\n```\n\n(d) Med $p = 0{,}0049 < 0{,}05$ forkaster vi $H_0$. Det er en statistisk signifikant forskjell i leksetid mellom de to klassene. Klasse X bruker i gjennomsnitt 2,2 timer mer per uke enn klasse Y.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En forsker vil undersøke sammenhengen mellom studietimer ($x$) og eksamenspoeng ($y$) for 6 studenter:\n\n| Studietimer | 2 | 4 | 6 | 8 | 10 | 12 |\n|---|---|---|---|---|---|---|\n| Poeng | 50 | 58 | 65 | 72 | 78 | 85 |\n\n(a) Skriv Python-kode som beregner Pearsons $r$ og utfører lineær regresjon. (b) Vis tilsvarende analyse i R. (c) Skriv regnearksformler for korrelasjon og regresjon (anta data i A1:A6 og B1:B6). (d) Diskuter hvilke fordeler og ulemper hvert verktøy har for denne analysen.',
        hints: ['Bruk `stats.pearsonr()` og `stats.linregress()` i Python. I R: `cor()` og `lm()`.'],
        solution: '(a) Python:\n```python\nfrom scipy import stats\nx = [2, 4, 6, 8, 10, 12]\ny = [50, 58, 65, 72, 78, 85]\nr, p = stats.pearsonr(x, y)\nresultat = stats.linregress(x, y)\nprint(f"r = {r:.4f}, p = {p:.4f}")\nprint(f"y = {resultat.intercept:.1f} + {resultat.slope:.2f}x")\nprint(f"R² = {resultat.rvalue**2:.4f}")\n```\nResultat: r = 0,9992, y = 43,3 + 3,50x, R² = 0,9984.\n\n(b) R:\n```r\nx <- c(2, 4, 6, 8, 10, 12)\ny <- c(50, 58, 65, 72, 78, 85)\ncor(x, y)            # 0.9992\nmodell <- lm(y ~ x)\nsummary(modell)      # Intercept=43.3, slope=3.50, R²=0.998\n```\n\n(c) Regneark:\n- Korrelasjon: `=KORRELASJON(A1:A6;B1:B6)` → 0,999\n- Stigning: `=STIGNINGSTALL(B1:B6;A1:A6)` → 3,50\n- Konstantledd: `=SKJÆRINGSPUNKT(B1:B6;A1:A6)` → 43,3\n- R²: `=RKVADRERT(B1:B6;A1:A6)` → 0,998\n\n(d) **Regneark:** Raskt for enkel analyse, men vanskelig å utvide. **Python:** Fleksibelt, lett å legge til visualisering og videre analyse. **R:** Mest statistisk komplett — `summary(lm(...))` gir automatisk p-verdier for koeffisienter, residualanalyse og mer. For en enkel korrelasjons-/regresjonsanalyse er alle tre gode, men for mer avansert modellering er R best egnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7: Datavisualisering og tolkning
// ============================================================================

export const CHAPTER_TOF_2_2_7: TextbookChapter = {
  id: 'tof-2-2-7',
  courseId: 'tof-2',
  chapterNumber: '2.7',
  title: 'Datavisualisering og tolkning',
  description: 'Avanserte diagrammer, statistisk tolkning og feilaktig bruk av statistikk.',
  estimatedMinutes: 25,
  competenceGoals: [
    'visualisere og tolke data kritisk',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof2-2-7-intro',
      type: 'text',
      content: `# Datavisualisering og tolkning

Statistikk handler ikke bare om tall og formler — det handler om å **kommunisere** resultater på en tydelig og ærlig måte. I dette kapittelet lærer du om avanserte visualiseringsteknikker, korrekt tolkning av statistiske resultater, og hvordan statistikk kan misbrukes eller villedes.

**Læringsmål:**
- Velge riktig diagramtype for ulike datatyper og formål
- Lage og tolke avanserte statistiske figurer
- Identifisere villedende bruk av statistikk i media
- Vurdere kvaliteten på statistiske påstander kritisk
- Forstå forskjellen mellom statistisk og praktisk signifikans`,
    },

    // --- BLOKK 1: Valg av diagramtype ---
    {
      id: 'tof2-2-7-text-1',
      type: 'text',
      content: `## Valg av riktig diagramtype

Valg av diagramtype er avgjørende for effektiv kommunikasjon. Feil diagram kan gi et misvisende bilde av dataene.

### Oversikt over diagramtyper

| Diagramtype | Brukes til | Eksempel |
|---|---|---|
| **Histogram** | Fordeling av én kvantitativ variabel | Fordeling av eksamensresultater |
| **Boksplott** | Sammenligne fordelinger mellom grupper | Lønnsfordeling i ulike bransjer |
| **Punktdiagram** | Sammenheng mellom to kvantitative variabler | Studietid vs. karakter |
| **Stolpediagram** | Sammenligne kategorier | Antall elever per studieretning |
| **Linjediagram** | Utvikling over tid | Temperaturendring over år |
| **Kakediagram** | Andeler av en helhet | Partioppslutning |
| **Feilmarginplott** | Estimater med usikkerhet | Konfidensintervaller for gjennomsnitt |

### Retningslinjer for godt design

1. **Start y-aksen ved 0** for stolpediagram (ellers overdrives forskjeller)
2. **Bruk lik skala** når du sammenligner grupper
3. **Inkluder aksetitler** og enheter
4. **Unngå 3D-effekter** som forvrengrr proporsjonene
5. **Vis datapunktene** når utvalget er lite ($n < 30$)
6. **Inkluder feilmarginer** der det er relevant`,
    },
    {
      id: 'tof2-2-7-def-1',
      type: 'definition',
      title: 'Avanserte diagramtyper',
      content: `**Boksplott (box-and-whisker):** Viser median, kvartiler ($Q_1$ og $Q_3$), og uteliggere. Boksen dekker interkvartilbredden (IQR = $Q_3 - Q_1$), og «værhårene» strekker seg til den mest ekstreme verdien innenfor $1{,}5 \\cdot \\text{IQR}$ fra boksen. Punkter utenfor markeres som uteliggere.

**Feilmarginplott (error bar plot):** Viser et punktestimat (gjennomsnitt) med vertikale linjer som angir usikkerheten. Disse linjene kan representere:
- $\\pm 1$ standardfeil ($SE$)
- $\\pm 1$ standardavvik ($s$)
- 95 %-konfidensintervall ($\\bar{x} \\pm 1{,}96 \\cdot SE$)

**Viktig:** Spesifiser alltid hva feilmarginene representerer — ulike valg gir svært ulik bredde.

**Scatterplott med regresjonslinje:** Punktdiagram med en inntegnet regresjonslinje $\\hat{y} = a + bx$ og eventuelt et konfidensband rundt linjen.`,
    },
    {
      id: 'tof2-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Tolkning av boksplott',
      problem: 'Et boksplott viser eksamensresultater for tre klasser:\n\n- **Klasse A:** Median = 72, $Q_1$ = 65, $Q_3$ = 80, min = 45, maks = 95\n- **Klasse B:** Median = 68, $Q_1$ = 60, $Q_3$ = 74, min = 55, maks = 82\n- **Klasse C:** Median = 75, $Q_1$ = 70, $Q_3$ = 82, min = 50, maks = 98, uteligger ved 30\n\nSammenlign de tre klassene basert på boksplottet.',
      solution: `**Sentraltendens (median):**
Klasse C har høyest median (75), fulgt av A (72) og B (68). C presterer generelt best.

**Spredning (IQR):**
Klasse A: IQR = $80 - 65 = 15$ (størst spredning i midtre 50 %)
Klasse B: IQR = $74 - 60 = 14$ (middels spredning)
Klasse C: IQR = $82 - 70 = 12$ (minst spredning — mest konsistente resultater)

**Uteliggere:**
Klasse C har en uteligger ved 30, noe som tyder på at én elev presterte vesentlig dårligere enn resten. Denne ene verdien påvirker ikke medianen, men ville ha dratt ned gjennomsnittet.

**Totalvurdering:**
Klasse C presterer best (høyest median, minst spredning), men har én svak elev. Klasse B har lavest median og minst totalspredning ($55-82$), mens klasse A har størst totalspredning ($45-95$) med enkelte svært gode og svært svake resultater.`,
    },
    {
      id: 'tof2-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-7-ex-1',
        number: '2.7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken diagramtype er best egnet for å vise sammenhengen mellom to kvantitative variabler (f.eks. høyde og vekt)?',
        options: [
          { id: 'a', text: 'Stolpediagram', isCorrect: false },
          { id: 'b', text: 'Kakediagram', isCorrect: false },
          { id: 'c', text: 'Punktdiagram (scatterplott)', isCorrect: true },
          { id: 'd', text: 'Histogram', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Et punktdiagram (scatterplott) er den naturlige måten å visualisere sammenhengen mellom to kvantitative variabler. Hvert datapunkt representeres som en prikk med $(x, y)$-koordinater, slik at vi kan se mønsteret i sammenhengen (lineær, kurvelineær, ingen). Stolpediagram er for kategorier (A), kakediagram for andeler (B), og histogram for fordelingen av én variabel (D).',
      },
    },

    // --- BLOKK 2: Villedende statistikk ---
    {
      id: 'tof2-2-7-text-2',
      type: 'text',
      content: `## Villedende statistikk

Statistikk kan brukes — bevisst eller ubevisst — til å gi et misvisende bilde av virkeligheten. Kritisk statistisk leseferdighet er avgjørende for å gjennomskue slik misbruk.

### Vanlige teknikker for villedende statistikk

**1. Manipulert y-akse:**
Ved å starte y-aksen ved en annen verdi enn 0, kan små forskjeller se dramatiske ut. Hvis salget øker fra 100 til 105 (5 % økning), og y-aksen starter ved 98, ser det ut som en enorm økning.

**2. Kirsebærplukking av data:**
Man velger bare de dataene som støtter påstanden, og utelater resten. For eksempel kan man velge en startdato for en aksjekurve som gir inntrykk av sterk vekst, mens en annen startdato ville vist stagnasjon.

**3. Forveksling av korrelasjon og kausalitet:**
«Kommuner med flere legekontorer har høyere dødelighet» — dette skyldes at eldre kommuner har både flere legekontorer og høyere dødelighet, ikke at legekontorer forårsaker død.

**4. Misbruk av prosenter:**
«Risikoen øker med 100 %!» kan bety en økning fra 1 per 10 000 til 2 per 10 000 — statistisk signifikant, men praktisk ubetydelig.

**5. Selektiv rapportering:**
Kun signifikante resultater publiseres (publiseringsskjevhet), mens nullresultater gjemmes. Dette gir et skjevt bilde av kunnskapsgrunnlaget.

### Simpsons paradoks

Et spesielt villedende fenomen der en trend som gjelder i hver delgruppe, **reverseres** når gruppene kombineres. Et klassisk eksempel:

| | Avdeling A | Avdeling B | Totalt |
|---|---|---|---|
| Kvinner opptak | 80/100 (80 %) | 10/200 (5 %) | 90/300 (30 %) |
| Menn opptak | 160/200 (80 %) | 20/100 (20 %) | 180/300 (60 %) |

Begge avdelingene har lik opptaksprosent (eller høyere for menn i avdeling B), men totalt ser det ut som kvinner diskrimineres. Paradokset oppstår fordi kvinner søker til den vanskelige avdelingen (B) i større grad.`,
    },
    {
      id: 'tof2-2-7-def-2',
      type: 'definition',
      title: 'Statistisk vs. praktisk signifikans',
      content: `**Statistisk signifikans** betyr at et resultat er usannsynlig å ha oppstått ved ren tilfeldighet (typisk $p < 0{,}05$). Det sier ingenting om størrelsen eller viktigheten av effekten.

**Praktisk signifikans** handler om hvorvidt effekten er stor nok til å ha reell betydning i praksis.

**Eksempel:** En studie med $n = 100\\,000$ finner at et nytt undervisningsopplegg øker eksamenspoeng fra 50,0 til 50,3 ($p = 0{,}001$). Dette er statistisk signifikant, men praktisk ubetydelig — 0,3 poeng er meningsløst i praksis.

**Effektstørrelse** (Cohens $d$) kvantifiserer den praktiske betydningen:

$$d = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p}$$

| $d$ | Tolkning |
|---|---|
| 0,2 | Liten effekt |
| 0,5 | Middels effekt |
| 0,8 | Stor effekt |`,
    },
    {
      id: 'tof2-2-7-example-2',
      type: 'example',
      title: 'Eksempel: Identifisering av villedende statistikk',
      problem: 'En avis skriver: «Ny studie: Folk som spiser sjokolade daglig lever 3 år lenger!» Studien er basert på et spørreskjema sendt til 5000 personer over 70 år, der de ble spurt om sjokoladevaner. De som spiste sjokolade daglig hadde gjennomsnittlig 3 år lengre levetid ($p < 0{,}001$). Identifiser problemer med denne påstanden.',
      solution: `**Problem 1: Korrelasjon ≠ kausalitet**
Studien er observasjonell (spørreskjema), ikke et eksperiment. Vi kan ikke konkludere med at sjokolade *forårsaker* lengre levetid. Det kan finnes konfunderende variabler.

**Problem 2: Konfunderende variabler**
Folk som spiser sjokolade daglig kan ha andre livsstilsforskjeller: høyere inntekt (råd til god sjokolade), generelt sunnere livsstil, mer sosialt aktive (sjokolade som sosial aktivitet).

**Problem 3: Overlevelsessjevhet (survivorship bias)**
Bare folk over 70 år ble spurt. De som døde før 70 er ikke med — og kanskje var noen av dem daglige sjokoladeetere. Utvalget er allerede filtrert for overlevelse.

**Problem 4: Responsskjevhet**
Selvrapporterte spisevaner er upålitelige — folk husker dårlig og overrapporterer «sunne» vaner. Dessuten ble nåværende vaner spurt om, ikke livslange vaner.

**Problem 5: Mediepresentasjon**
Avisen presenterer en kausal påstand basert på en korrelasjonsstudie, og oppgir ikke forbehold, konfidensintervaller eller effektstørrelse.

**Bedre formulering:** «Studien fant en sammenheng mellom daglig sjokoladeinntak og lengre levetid, men kan ikke fastslå årsakssammenheng.»`,
    },
    {
      id: 'tof2-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-7-ex-2',
        number: '2.7.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et stolpediagram i en avis viser salgsøkning fra 200 til 210 enheter. Y-aksen starter ved 195. Hva er problemet med dette diagrammet?',
        options: [
          { id: 'a', text: 'Stolpene burde vært horisontale', isCorrect: false },
          { id: 'b', text: 'Y-aksen starter ikke ved 0, noe som overdriver den lille forskjellen', isCorrect: true },
          { id: 'c', text: 'Det burde vært et linjediagram i stedet', isCorrect: false },
          { id: 'd', text: 'Dataene er for få til å vises i et diagram', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Når y-aksen starter ved 195 i stedet for 0, ser økningen fra 200 til 210 (5 %) visuelt ut som en tredobling. Stolpen for 210 er tre ganger høyere enn stolpen for 200. Med y-aksen startende ved 0 ville forskjellen knapt vært synlig. Dette er en av de vanligste teknikkene for villedende statistikk, spesielt i reklame og nyhetsmedier.',
      },
    },

    // --- BLOKK 3: Kritisk tolkning og rapportering ---
    {
      id: 'tof2-2-7-text-3',
      type: 'text',
      content: `## Kritisk tolkning og rapportering

Som forskere og informerte borgere må vi kunne vurdere statistiske påstander kritisk. Her er en sjekkliste for å evaluere statistiske resultater:

### Sjekkliste for kritisk lesing

**1. Hvem står bak?**
- Er kilden uavhengig, eller har den en agenda?
- Er studien fagfellevurdert (peer-reviewed)?
- Hvem finansierte studien?

**2. Hvordan ble dataene samlet inn?**
- Er utvalget representativt for populasjonen?
- Er utvalgsstørrelsen tilstrekkelig?
- Er det et eksperiment (kausalitet mulig) eller en observasjonsstudie (bare korrelasjon)?

**3. Hva viser resultatene egentlig?**
- Er det oppgitt konfidensintervaller, ikke bare punktestimater?
- Er p-verdien oppgitt, og er den tolket korrekt?
- Er effektstørrelsen praktisk meningsfull, ikke bare statistisk signifikant?

**4. Er konklusjonene gyldige?**
- Følger konklusjonen logisk fra dataene?
- Er det tatt hensyn til konfunderende variabler?
- Er det gjort forsøk på å replisere resultatet?

### Korrekt rapportering av statistiske resultater

Når du rapporterer statistiske resultater, bør du inkludere:

1. **Beskrivende statistikk:** Gjennomsnitt, standardavvik, utvalgsstørrelse
2. **Teststatistikk:** $t$-verdi, frihetsgrader, $\\chi^2$-verdi
3. **p-verdi:** Eksakt verdi, ikke bare «signifikant» eller «ikke signifikant»
4. **Effektstørrelse:** Cohens $d$, $R^2$, eller tilsvarende
5. **Konfidensintervall:** Gir mer informasjon enn p-verdien alene

**Eksempel på god rapportering:**
«Elever i gruppe A ($M = 78{,}3$, $SD = 8{,}2$, $n = 45$) skåret signifikant høyere enn gruppe B ($M = 72{,}1$, $SD = 9{,}0$, $n = 42$), $t(85) = 3{,}36$, $p = 0{,}001$, $d = 0{,}72$ (middels til stor effekt), 95 % KI for forskjellen: $[2{,}5, \\; 9{,}9]$.»`,
    },
    {
      id: 'tof2-2-7-def-3',
      type: 'definition',
      title: 'Sjekkliste for kritisk statistikklesing',
      content: `**Fem spørsmål du alltid bør stille:**

1. **Er utvalget representativt?** — Et skjevt utvalg gir upålitelige resultater uansett størrelse.
2. **Korrelasjon eller kausalitet?** — Bare eksperimenter med randomisering kan påvise årsakssammenheng.
3. **Statistisk vs. praktisk signifikans?** — En lav p-verdi betyr ikke nødvendigvis at funnet er viktig.
4. **Er det konfunderende variabler?** — Uobserverte variabler kan forklare en tilsynelatende sammenheng.
5. **Kan resultatet repliseres?** — Ett enkelt funn er ikke nok — vitenskapen krever replikasjon.

**Publiseringsskjevhet:** Studier med signifikante resultater ($p < 0{,}05$) har langt større sjanse for å bli publisert enn studier uten funn. Dette betyr at den publiserte litteraturen overdriver effektstørrelser og gir et skjevt bilde av virkeligheten.`,
    },
    {
      id: 'tof2-2-7-example-3',
      type: 'example',
      title: 'Eksempel: Vurdering av en forskningsrapport',
      problem: 'En rapport hevder: «Vår nye treningsmetode gir statistisk signifikant forbedring i kondisjon ($p = 0{,}04$, $n = 200$).» Gjennomsnittet økte fra 42,0 til 42,8 ml/kg/min med $s = 6{,}0$. Vurder denne påstanden kritisk.',
      solution: `**Statistisk signifikans:**
$p = 0{,}04 < 0{,}05$, altså statistisk signifikant. Med $n = 200$ har testen god styrke til å oppdage selv små forskjeller.

**Praktisk signifikans:**
Forbedringen er $42{,}8 - 42{,}0 = 0{,}8$ ml/kg/min. Effektstørrelse:
$$d = \\frac{0{,}8}{6{,}0} = 0{,}13$$
Dette er en **svært liten** effekt (under 0,2-grensen for «liten effekt»). Forbedringen er klinisk ubetydelig — den tilsvarer omtrent effekten av ett ekstra treningsøkt i løpet av flere måneder.

**Vurdering:**
Studien finner en statistisk signifikant, men praktisk meningsløs forbedring. Den store utvalgsstørrelsen ($n = 200$) gjør at selv en triviell forskjell blir signifikant. Det ville vært viktigere å rapportere effektstørrelsen ($d = 0{,}13$) og konfidensintervallet for forskjellen.

**Lærdom:** Statistisk signifikans alene er ikke nok — vi må alltid vurdere den praktiske betydningen av et funn.`,
    },
    {
      id: 'tof2-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-7-ex-3',
        number: '2.7.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En studie med $n = 50\\,000$ deltakere finner at en ny diett senker kolesterolet med 0,5 mg/dL ($p < 0{,}001$). Hva er den mest korrekte tolkningen?',
        options: [
          { id: 'a', text: 'Dietten er svært effektiv fordi p-verdien er veldig lav', isCorrect: false },
          { id: 'b', text: 'Resultatet er statistisk signifikant, men praktisk ubetydelig', isCorrect: true },
          { id: 'c', text: 'Studien er feil fordi en så liten effekt ikke kan være signifikant', isCorrect: false },
          { id: 'd', text: 'Vi trenger flere deltakere for å trekke konklusjoner', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Med $n = 50\\,000$ er det nok statistisk styrke til å oppdage selv de minste forskjeller. Resultatet er teknisk signifikant ($p < 0{,}001$), men 0,5 mg/dL reduksjon i kolesterol er klinisk ubetydelig (normalt kolesterol er 150–200 mg/dL). En lav p-verdi betyr ikke at effekten er stor eller viktig — det betyr bare at den er usannsynlig å skyldes tilfeldigheter. Effektstørrelsen og praktisk relevans er det som teller.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof2-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Velg **riktig diagramtype** for dataene: punktdiagram for sammenhenger, histogram for fordelinger, boksplott for sammenligninger.
- **Villedende statistikk** inkluderer manipulert y-akse, kirsebærplukking, forveksling av korrelasjon/kausalitet og misbruk av prosenter.
- **Simpsons paradoks** viser at trender kan reverseres når data aggregeres — kontroller alltid for relevante delgrupper.
- **Statistisk signifikans** ($p < 0{,}05$) betyr ikke nødvendigvis praktisk viktighet — vurder alltid **effektstørrelsen** ($d$).
- God rapportering inkluderer beskrivende statistikk, teststatistikk, p-verdi, effektstørrelse og konfidensintervall.
- Still alltid de kritiske spørsmålene: representativt utvalg, korrelasjon vs. kausalitet, konfunderende variabler, replikerbarhet.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof2-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forskningsrapport presenterer følgende resultater: «Gruppe A ($n = 30$, $M = 85{,}2$, $SD = 10{,}4$) skåret høyere enn gruppe B ($n = 28$, $M = 79{,}8$, $SD = 11{,}2$), $t(56) = 1{,}92$, $p = 0{,}060$.»\n\n(a) Er resultatet statistisk signifikant ved $\\alpha = 0{,}05$? Begrunn. (b) Beregn effektstørrelsen (Cohens $d$) med samlet standardavvik $s_p \\approx 10{,}8$. (c) Tolk effektstørrelsen. (d) Beregn et 95 %-konfidensintervall for forskjellen mellom gruppene (bruk $SE_{\\text{diff}} \\approx 2{,}81$). (e) Hva ville du konkludert basert på alle disse indikatorene sammen?',
        hints: ['Cohens $d = (M_1 - M_2)/s_p$. KI = forskjell $\\pm$ $t^* \\cdot SE$.'],
        solution: '(a) Nei, resultatet er ikke statistisk signifikant ved $\\alpha = 0{,}05$ fordi $p = 0{,}060 > 0{,}05$. Vi beholder $H_0$ — vi kan ikke påvise en forskjell.\n\n(b) $d = (85{,}2 - 79{,}8)/10{,}8 = 5{,}4/10{,}8 = 0{,}50$.\n\n(c) $d = 0{,}50$ er en middels effekt ifølge Cohens retningslinjer. Dette tyder på at forskjellen har en viss praktisk betydning, selv om den ikke nådde statistisk signifikans.\n\n(d) $\\text{KI} = (85{,}2 - 79{,}8) \\pm 2{,}00 \\cdot 2{,}81 = 5{,}4 \\pm 5{,}62 = [-0{,}2, \\; 11{,}0]$.\nIntervallet inkluderer 0, noe som bekrefter at forskjellen ikke er signifikant.\n\n(e) Selv om $p > 0{,}05$, viser effektstørrelsen ($d = 0{,}50$) at det er en middels praktisk forskjell. Konfidensintervallet er bredt ($[-0{,}2, 11{,}0]$), noe som tyder på at utvalgene er for små til å gi et klart svar. En oppfølgingsstudie med større utvalg er anbefalt for å avklare om forskjellen er reell.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof2-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof2-2-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du finner følgende påstander i media. For hver påstand: identifiser den statistiske feilen, forklar hvorfor den er villedende, og foreslå en korrekt formulering.\n\n(a) «Antall sykkelulykker har doblet seg siden kommunen bygde nye sykkelveier — sykkelveier er farlige!»\n\n(b) «9 av 10 tannleger anbefaler vår tannkrem» (basert på en undersøkelse der tannlegene fikk velge mellom den aktuelle tannkremen og å ikke pusse tenner i det hele tatt).\n\n(c) «Studier viser at moderate vindrikkere lever lenger enn de som ikke drikker — et glass vin om dagen er bra for helsa!»',
        hints: ['Tenk på korrelasjon vs. kausalitet, utvalgsmetode og konfunderende variabler.'],
        solution: '(a) **Feil:** Forveksling av korrelasjon og kausalitet, ignorerer konfunderende variabel.\n**Forklaring:** Nye sykkelveier fører til at **flere sykler**, noe som naturlig gir flere ulykker i absolutte tall. Ulykker per sykkeltur kan ha gått ned. Den konfunderende variabelen er antall syklister.\n**Korrekt:** «Selv om antall sykkelulykker økte etter utbygging av sykkelveier, økte antall syklister enda mer — ulykker per 1000 sykkelturer gikk ned med 30 %.»\n\n(b) **Feil:** Ledende spørsmålsformulering (falsk dikotomi).\n**Forklaring:** Tannlegene fikk et valg der det ene alternativet (ikke pusse tenner) var helt uakseptabelt. Enhver tannkrem ville scoret 9/10 med dette designet.\n**Korrekt:** Spørsmålet burde sammenlignet den aktuelle tannkremen med andre konkurrerende tannkremer.\n\n(c) **Feil:** Overlevelseskjevhet og konfunderende variabler.\n**Forklaring:** Gruppen «ikke-drikkere» inkluderer folk som sluttet å drikke pga. sykdom, samt folk med lavere sosioøkonomisk status. Moderate drikkere er ofte friskere, har høyere inntekt og bedre tilgang til helsetjenester — det er disse faktorene, ikke vinen, som forklarer lengre levetid.\n**Korrekt:** «Det er en sammenheng mellom moderat vindrikking og lengre levetid, men dette skyldes sannsynligvis konfunderende variabler som sosioøkonomisk status og generell helseatferd — ikke vinen i seg selv.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport alle kapitler i Seksjon 2
// ============================================================================

export const TOF_2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_2_2_1,
  CHAPTER_TOF_2_2_2,
  CHAPTER_TOF_2_2_3,
  CHAPTER_TOF_2_2_4,
  CHAPTER_TOF_2_2_5,
  CHAPTER_TOF_2_2_6,
  CHAPTER_TOF_2_2_7,
];
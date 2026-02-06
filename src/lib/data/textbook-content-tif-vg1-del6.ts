/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 6: HMS og sikkerhet
 *
 * Kapittel 6.1-6.7
 * Dekker LK20 kompetansemål for helse, miljø og sikkerhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ===== KAPITTEL 6.1: Grunnleggende HMS =====
const CHAPTER_6_1: TextbookChapter = {
  id: 'tif-vg1-6-1',
  courseId: 'tif-vg1',
  chapterNumber: '6.1',
  title: 'Grunnleggende HMS',
  description: 'Lær om HMS-arbeid, lovverk og arbeidsgivers og arbeidstakers ansvar.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-1-intro',
      type: 'text',
      content: `# Grunnleggende HMS

HMS står for Helse, Miljø og Sikkerhet. Godt HMS-arbeid beskytter arbeidstakere mot skader og sykdom, og sikrer et trygt arbeidsmiljø. I dette kapittelet lærer du om HMS-regelverket, ansvarsfordeling og hvordan HMS-arbeid organiseres i bedrifter.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva HMS betyr og hvorfor det er viktig
- Kjenne til sentrale lover og forskrifter
- Beskrive arbeidsgivers og arbeidstakers HMS-ansvar
- Forstå rollen til verneombud og arbeidsmiljøutvalg`,
    },
    {
      id: 'tif-vg1-6-1-hva',
      type: 'text',
      content: `## Hva er HMS?

**HMS** omfatter alle tiltak for å ivareta:

- **Helse**: Forebygge arbeidsrelatert sykdom og belastning
- **Miljø**: Ytre miljø (utslipp, avfall) og arbeidsmiljø (støy, lys, ergonomi)
- **Sikkerhet**: Forebygge ulykker og skader

### Hvorfor HMS er viktig

- **Mennesker**: Beskytter liv og helse
- **Økonomi**: Færre skader gir lavere kostnader
- **Produktivitet**: Trygge arbeidere jobber bedre
- **Lovpålagt**: Brudd kan gi bøter og straff
- **Omdømme**: God HMS gir godt rykte`,
    },
    {
      id: 'tif-vg1-6-1-lovverk',
      type: 'text',
      content: `## HMS-lovverket

### Arbeidsmiljøloven

**Arbeidsmiljøloven** er hovedloven for HMS i arbeidslivet. Den krever at:
- Arbeidsmiljøet skal være fullt forsvarlig
- Arbeidsgiver har hovedansvaret
- Arbeidstaker skal medvirke
- Avvik skal meldes og følges opp

### Forskrifter

Under arbeidsmiljøloven finnes mange forskrifter:
- **Internkontrollforskriften**: Krav om systematisk HMS-arbeid
- **Arbeidsplassforskriften**: Krav til lokaler og arbeidsplasser
- **Maskinforskriften**: Krav til maskiner og utstyr
- **Forskrift om organisering**: Krav til verneombud, AMU osv.`,
    },
    {
      id: 'tif-vg1-6-1-ansvar',
      type: 'text',
      content: `## Ansvarsfordeling

### Arbeidsgivers ansvar

Arbeidsgiver har **hovedansvaret** for HMS og skal:
- Sørge for systematisk HMS-arbeid
- Kartlegge farer og risikoer
- Iverksette tiltak for å forebygge skader
- Gi nødvendig opplæring
- Sørge for nødvendig verneutstyr
- Følge opp avvik og ulykker

### Arbeidstakers ansvar

Arbeidstaker skal:
- Følge sikkerhetsrutiner og instrukser
- Bruke påbudt verneutstyr
- Melde fra om farlige forhold
- Delta i HMS-opplæring
- Ikke utsette seg selv eller andre for fare`,
    },
    {
      id: 'tif-vg1-6-1-ex1',
      type: 'text',
      content: `### Eksempel: Fordeling av ansvar

En sveiser får øyeskade fordi sveisemasken var skadet.

**Arbeidsgivers ansvar** var å:
- Sørge for godkjent sveisemaske
- Kontrollere at utstyret var i orden
- Gi opplæring i kontroll av verneutstyr

**Arbeidstakers ansvar** var å:
- Kontrollere masken før bruk
- Melde fra om skaden
- Ikke bruke skadet utstyr

Begge parter har ansvar, men arbeidsgiveren har det overordnede ansvaret for å ha systemer på plass.`,
    },
    {
      id: 'tif-vg1-6-1-organisering',
      type: 'text',
      content: `## HMS-organisering

### Verneombud

**Verneombudet** er arbeidstakernes representant i HMS-spørsmål:
- Påse at arbeidsmiljøet er forsvarlig
- Delta i planlegging av HMS-tiltak
- Varsle om farlige forhold
- Kan stanse farlig arbeid

Alle bedrifter med 10+ ansatte skal ha verneombud.

### Arbeidsmiljøutvalg (AMU)

Bedrifter med 50+ ansatte skal ha AMU:
- Like mange representanter fra arbeidsgiver og arbeidstaker
- Behandler saker om arbeidsmiljø og sikkerhet
- Gjennomgår rapporter om ulykker og sykefravær

### Bedriftshelsetjeneste (BHT)

Bedrifter i risikofulle bransjer skal være tilknyttet BHT:
- Bistår med HMS-arbeid
- Utfører helseundersøkelser
- Gir råd om arbeidsmiljø`,
    },
    {
      id: 'tif-vg1-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **HMS** = Helse, Miljø og Sikkerhet
- **Arbeidsmiljøloven** er hovedloven for HMS
- **Internkontrollforskriften** krever systematisk HMS-arbeid
- **Arbeidsgiver** har hovedansvaret for HMS
- **Arbeidstaker** skal medvirke og følge regler
- **Verneombud** er arbeidstakernes HMS-representant
- **AMU** er et samarbeidsorgan for HMS
- **BHT** gir faglig bistand i HMS-arbeid`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-1-oppg1',
      number: '6.1.1',
      type: 'multiple-choice',
      task: 'Hvem har hovedansvaret for HMS på en arbeidsplass?',
      options: [
        { id: 'a', text: 'Arbeidstakeren', isCorrect: false },
        { id: 'b', text: 'Verneombudet', isCorrect: false },
        { id: 'c', text: 'Arbeidsgiver', isCorrect: true },
        { id: 'd', text: 'Arbeidstilsynet', isCorrect: false },
      ],
      solution: 'Arbeidsgiver har hovedansvaret for HMS ifølge arbeidsmiljøloven. Arbeidstaker skal medvirke, men det overordnede ansvaret ligger hos arbeidsgiver.',
    },
    {
      id: 'tif-vg1-6-1-oppg2',
      number: '6.1.2',
      type: 'classic',
      task: 'Forklar hva bokstavene i HMS står for, og gi ett eksempel på hvert område.',
      solution: 'H = Helse: Forebygge arbeidsrelatert sykdom. Eksempel: Ergonomisk tilrettelegging av arbeidsplassen for å unngå belastningsskader. M = Miljø: Både ytre miljø og arbeidsmiljø. Eksempel: Riktig håndtering av kjemikalier for å unngå forurensning, eller god ventilasjon for å sikre godt arbeidsmiljø. S = Sikkerhet: Forebygge ulykker og skader. Eksempel: Bruk av verneutstyr ved farlig arbeid.',
    },
    {
      id: 'tif-vg1-6-1-oppg3',
      number: '6.1.3',
      type: 'classic',
      task: 'Hva er verneombudets rolle, og når er bedrifter pålagt å ha verneombud?',
      solution: 'Verneombudet er arbeidstakernes representant i HMS-spørsmål. Rollen innebærer: påse at arbeidsmiljøet er forsvarlig, delta i planlegging av HMS-tiltak, varsle om farlige forhold, og kan stanse farlig arbeid i alvorlige tilfeller. Alle bedrifter med 10 eller flere ansatte er pålagt å ha verneombud.',
    },
    {
      id: 'tif-vg1-6-1-oppg4',
      number: '6.1.4',
      type: 'classic',
      task: 'En nyansatt nekter å bruke hørselsvern i støyende arbeid fordi han synes det er ukomfortabelt. Hvem har ansvar, og hva bør gjøres?',
      solution: 'Begge parter har ansvar: Arbeidsgiver har ansvar for å gi opplæring om nødvendigheten av hørselsvern, sørge for at det finnes komfortabelt verneutstyr som passer, og følge opp at reglene følges. Arbeidstaker har ansvar for å bruke påbudt verneutstyr. Det bør gjøres: 1) Samtale om hvorfor hørselsvern er nødvendig (permanent hørselsskade). 2) Prøve andre typer hørselsvern som er mer komfortable. 3) Hvis arbeidstaker fortsatt nekter, kan det få konsekvenser for arbeidsforholdet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-1-oppg5',
      number: '6.1.5',
      type: 'classic',
      task: 'Beskriv forskjellen mellom internkontrollforskriften og arbeidsmiljøloven. Hvorfor trenger vi begge?',
      solution: 'Arbeidsmiljøloven er hovedloven som fastsetter grunnleggende krav og rettigheter - den sier HVA som skal oppnås (forsvarlig arbeidsmiljø). Internkontrollforskriften er en forskrift under loven som beskriver HVORDAN dette skal gjøres i praksis - gjennom systematisk HMS-arbeid med dokumentasjon, risikovurderinger og rutiner. Vi trenger begge fordi loven gir det juridiske grunnlaget og rettighetene, mens forskriften gir konkret veiledning for hvordan bedriftene skal jobbe systematisk med HMS i hverdagen.',
    },
    {
      id: 'tif-vg1-6-1-oppg6',
      number: '6.1.6',
      type: 'classic',
      task: 'Du er nytilsatt i en industribedrift. Beskriv minst fem ting du bør få informasjon om på HMS-opplæringen den første dagen.',
      solution: 'Viktig HMS-informasjon for nyansatte: 1) Beredskapsplan - hvor er rømningsveier, møteplass, brannslukker, førstehjelpsutstyr. 2) Verneutstyr - hva som er påbudt i ulike områder og hvordan det brukes. 3) Sikker jobbanalyse (SJA) - hvordan vurdere risiko før arbeid starter. 4) Farlige stoffer - merking, oppbevaring og sikkerhetsdatablader. 5) Rapportering - hvordan melde fra om farlige forhold, nestenulykker og skader. 6) Verneombud - hvem det er og hvordan kontakte. 7) Maskin- og utstyrssikkerhet - låse ut/merke (Lockout/Tagout) ved vedlikehold.',
    },
  ],
  keyTerms: [
    'HMS',
    'helse',
    'miljø',
    'sikkerhet',
    'arbeidsmiljøloven',
    'internkontrollforskriften',
    'verneombud',
    'AMU',
    'bedriftshelsetjeneste',
    'arbeidsgivers ansvar',
    'arbeidstakers ansvar',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'reflektere over yrkesetiske retningslinjer og verdivalg',
  ],
};

// ===== KAPITTEL 6.2: Risikovurdering =====
const CHAPTER_6_2: TextbookChapter = {
  id: 'tif-vg1-6-2',
  courseId: 'tif-vg1',
  chapterNumber: '6.2',
  title: 'Risikovurdering',
  description: 'Lær om identifisering av farer, risikovurdering og tiltak.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-2-intro',
      type: 'text',
      content: `# Risikovurdering

Risikovurdering er kjernen i forebyggende HMS-arbeid. Ved å identifisere farer og vurdere risiko kan vi sette inn tiltak før ulykker skjer. I dette kapittelet lærer du hvordan risikovurdering gjennomføres systematisk.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare begrepene fare, risiko og konsekvens
- Gjennomføre en enkel risikovurdering
- Bruke risikomatrise for å prioritere tiltak
- Forstå prinsippet om sikker jobbanalyse (SJA)`,
    },
    {
      id: 'tif-vg1-6-2-begreper',
      type: 'text',
      content: `## Grunnleggende begreper

### Fare (hazard)
En **fare** er noe som kan forårsake skade. Eksempler:
- Roterende maskin uten vern
- Glatt gulv
- Brannfarlig kjemikalie
- Strømførende ledning

### Risiko
**Risiko** er kombinasjonen av sannsynlighet for at skade skjer og alvorlighetsgraden av skaden:

**Risiko = Sannsynlighet × Konsekvens**

### Sannsynlighet
Hvor ofte kan det gå galt?
- Svært sjelden
- Lite sannsynlig
- Kan skje
- Sannsynlig
- Svært sannsynlig

### Konsekvens
Hvor alvorlig blir skaden?
- Ubetydelig
- Mindre skade
- Alvorlig skade
- Svært alvorlig / varig mén
- Dødsfall`,
    },
    {
      id: 'tif-vg1-6-2-matrise',
      type: 'text',
      content: `## Risikomatrise

En **risikomatrise** visualiserer risikonivået:

|  | Ubetydelig | Mindre | Alvorlig | Svært alvorlig | Dødelig |
|--|------------|--------|----------|----------------|---------|
| **Svært sannsynlig** | Moderat | Høy | Høy | Kritisk | Kritisk |
| **Sannsynlig** | Lav | Moderat | Høy | Høy | Kritisk |
| **Kan skje** | Lav | Moderat | Moderat | Høy | Høy |
| **Lite sannsynlig** | Lav | Lav | Moderat | Moderat | Høy |
| **Svært sjelden** | Lav | Lav | Lav | Moderat | Moderat |

**Tolkning:**
- **Kritisk**: Arbeid kan ikke utføres før risiko er redusert
- **Høy**: Tiltak må iverksettes snarest
- **Moderat**: Tiltak bør vurderes
- **Lav**: Akseptabel risiko, overvåk`,
    },
    {
      id: 'tif-vg1-6-2-prosess',
      type: 'text',
      content: `## Risikovurderingsprosessen

### Steg 1: Identifiser farer
- Gå gjennom arbeidsoperasjoner
- Se på maskiner, stoffer, omgivelser
- Bruk sjekklister og erfaringer
- Involver de som gjør jobben

### Steg 2: Vurder risiko
- Hvem kan bli skadet?
- Hva kan skje?
- Hvor sannsynlig er det?
- Hvor alvorlig kan skaden bli?
- Plasser i risikomatrise

### Steg 3: Bestem tiltak
- Prioriter høye risikoer
- Velg effektive tiltak (se tiltakshierarki)
- Sett ansvarlig og frist

### Steg 4: Gjennomfør og følg opp
- Iverksett tiltakene
- Sjekk at de fungerer
- Oppdater risikovurderingen jevnlig`,
    },
    {
      id: 'tif-vg1-6-2-ex1',
      type: 'text',
      content: `### Eksempel: Risikovurdering av sliping

**Fare**: Sliping av metalldeler med vinkelsliper

**Mulige skader**:
- Gnistsprut i øyne → Alvorlig
- Kuttskade fra skive som brekker → Svært alvorlig
- Hørselsskade fra støy → Alvorlig (over tid)

**Vurdering** (uten verneutstyr):
- Gnister i øyne: Sannsynlig × Alvorlig = **Høy risiko**
- Skivebrudd: Lite sannsynlig × Svært alvorlig = **Moderat risiko**
- Hørselsskade: Sannsynlig × Alvorlig = **Høy risiko**

**Tiltak**:
- Vernebriller/ansiktsskjerm (obligatorisk)
- Hørselsvern
- Kontroll av slipeskive før bruk
- Opplæring i riktig bruk`,
    },
    {
      id: 'tif-vg1-6-2-sja',
      type: 'text',
      content: `## Sikker Jobbanalyse (SJA)

**SJA** er en forenklet risikovurdering som gjøres før spesifikke arbeidsoperasjoner, spesielt:
- Uvanlige oppgaver
- Arbeid med høy risiko
- Nye arbeidsmetoder

### SJA-prosessen

1. **Beskriv jobben** - Hva skal gjøres?
2. **Identifiser farer** - Hva kan gå galt?
3. **Vurder risiko** - Hvor farlig er det?
4. **Bestem tiltak** - Hvordan unngå skade?
5. **Gjennomfør trygt** - Følg tiltakene
6. **Evaluer** - Gikk det bra? Lærdom?

SJA dokumenteres ofte på et enkelt skjema og signeres av de involverte.`,
    },
    {
      id: 'tif-vg1-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Fare** = noe som kan forårsake skade
- **Risiko** = sannsynlighet × konsekvens
- **Risikomatrise** visualiserer risikonivå (lav til kritisk)
- Risikovurdering: Identifiser → Vurder → Tiltak → Følg opp
- **SJA** er en forenklet risikovurdering før farlig arbeid
- Høy og kritisk risiko krever tiltak før arbeid kan fortsette
- Involver de som gjør jobben i vurderingen`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-2-oppg1',
      number: '6.2.1',
      type: 'multiple-choice',
      task: 'Hva er riktig formel for å beregne risiko?',
      options: [
        { id: 'a', text: 'Risiko = Fare + Tiltak', isCorrect: false },
        { id: 'b', text: 'Risiko = Sannsynlighet × Konsekvens', isCorrect: true },
        { id: 'c', text: 'Risiko = Konsekvens / Sannsynlighet', isCorrect: false },
        { id: 'd', text: 'Risiko = Fare × Verneutstyr', isCorrect: false },
      ],
      solution: 'Risiko beregnes som Sannsynlighet × Konsekvens. Høy sannsynlighet og alvorlig konsekvens gir høy risiko.',
    },
    {
      id: 'tif-vg1-6-2-oppg2',
      number: '6.2.2',
      type: 'classic',
      task: 'Forklar forskjellen mellom begrepene "fare" og "risiko" med et konkret eksempel.',
      solution: 'Fare er noe som kan forårsake skade - selve kilden til potensiell skade. Risiko er sannsynligheten for at skaden faktisk skjer, kombinert med hvor alvorlig den blir. Eksempel: En uavskjermet roterende aksel på en maskin er en FARE. RISIKOEN avhenger av hvor sannsynlig det er at noen kommer borti den (plassering, bruksfrekvens) og hvor alvorlig skaden blir (hastighet, kroppsområde). Samme fare kan ha ulik risiko avhengig av konteksten.',
    },
    {
      id: 'tif-vg1-6-2-oppg3',
      number: '6.2.3',
      type: 'classic',
      task: 'Du skal gjennomføre en SJA før arbeid i høyden på et stillas. List opp minst tre farer og foreslå tiltak for hver.',
      solution: 'Farer og tiltak: 1) Fall fra høyde - Tiltak: Bruk fallsikringsutstyr (sele), sjekk at rekkverk er på plass, sikre åpninger. 2) Fallende gjenstander - Tiltak: Bruk hjelm, rydd verktøy, sparkebord på stillas, varsle under stillaset. 3) Ustabilt stillas - Tiltak: Kontroller at stillaset er godkjent og oppstilt riktig, sjekk fester og diagonaler. 4) Glatt underlag - Tiltak: Rydd stillasdekket for is/snø/søl, bruk sklisikre sko. 5) Dårlig vær - Tiltak: Vurder vindforhold, utsett arbeid ved sterk vind eller lyn.',
    },
    {
      id: 'tif-vg1-6-2-oppg4',
      number: '6.2.4',
      type: 'classic',
      task: 'Bruk risikomatrisen til å vurdere følgende: En arbeider kan få alvorlig kuttskade fra en vinkelsliper, og dette er vurdert som "sannsynlig". Hvilket risikonivå gir dette, og hva betyr det?',
      solution: 'I risikomatrisen: Sannsynlighet "Sannsynlig" × Konsekvens "Alvorlig" = HØY risiko (oransje/rødt nivå). Dette betyr at tiltak MÅ iverksettes snarest mulig. Arbeidet bør ikke fortsette før risikoreduserende tiltak er på plass. Typiske tiltak: Påbudt bruk av vernebriller/ansiktsskjerm, hansker, riktig opplæring, kontroll av slipeskive, og vurdering av om jobben kan gjøres på annen måte.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-2-oppg5',
      number: '6.2.5',
      type: 'classic',
      task: 'Gjennomfør en forenklet risikovurdering for bruk av sveiseapparat. Identifiser minst fire farer, vurder risiko, og foreslå tiltak.',
      solution: 'Risikovurdering - sveising: 1) FARE: Øyeskade fra lysbue. Sannsynlighet: Sannsynlig. Konsekvens: Alvorlig. RISIKO: Høy. TILTAK: Sveisemaske med riktig filter. 2) FARE: Brannskade fra gnister/smeltet metall. Sannsynlighet: Sannsynlig. Konsekvens: Alvorlig. RISIKO: Høy. TILTAK: Skinnhansker, lang bekledning, verneklær. 3) FARE: Brann fra gnister. Sannsynlighet: Kan skje. Konsekvens: Svært alvorlig. RISIKO: Høy. TILTAK: Fjern brennbart materiale, ha slukkeutstyr klar, brannvakt. 4) FARE: Innånding av sveiserøyk. Sannsynlighet: Sannsynlig. Konsekvens: Alvorlig (over tid). RISIKO: Høy. TILTAK: God ventilasjon/avsug, åndedrettsvern ved behov.',
    },
    {
      id: 'tif-vg1-6-2-oppg6',
      number: '6.2.6',
      type: 'classic',
      task: 'Forklar hvorfor det er viktig å involvere arbeidstakerne som utfører jobben i risikovurderingen. Gi minst tre grunner.',
      solution: 'Grunner til å involvere arbeidstakerne: 1) De kjenner arbeidsoppgavene best - de vet hvordan jobben faktisk utføres, ikke bare hvordan den er beskrevet i prosedyrer. 2) De har erfaring med nestenulykker og farlige situasjoner som kanskje ikke er rapportert. 3) De vil lettere akseptere og følge tiltak de selv har vært med på å utforme. 4) De kan komme med praktiske løsninger som ledelsen ikke tenker på. 5) Det gir eierskap til HMS-arbeidet og økt sikkerhetsbevissthet. 6) Lovpålagt - arbeidstakere har rett til medvirkning ifølge arbeidsmiljøloven.',
    },
  ],
  keyTerms: [
    'risikovurdering',
    'fare',
    'risiko',
    'sannsynlighet',
    'konsekvens',
    'risikomatrise',
    'SJA',
    'sikker jobbanalyse',
    'tiltakshierarki',
    'risikonivå',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'vurdere risiko og iverksette tiltak for å forebygge skader',
  ],
};

// ===== KAPITTEL 6.3: Verneutstyr =====
const CHAPTER_6_3: TextbookChapter = {
  id: 'tif-vg1-6-3',
  courseId: 'tif-vg1',
  chapterNumber: '6.3',
  title: 'Verneutstyr',
  description: 'Lær om personlig verneutstyr (PVU) og riktig bruk.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-3-intro',
      type: 'text',
      content: `# Verneutstyr

Personlig verneutstyr (PVU) er siste forsvarslinje mot skader når andre tiltak ikke er tilstrekkelige. I dette kapittelet lærer du om ulike typer verneutstyr, når det skal brukes, og hvordan det vedlikeholdes.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Beskrive hovedtypene av personlig verneutstyr
- Velge riktig verneutstyr for ulike arbeidsoppgaver
- Forklare krav til godkjenning og merking
- Vedlikeholde og kontrollere verneutstyr`,
    },
    {
      id: 'tif-vg1-6-3-hierarki',
      type: 'text',
      content: `## Tiltakshierarkiet

Verneutstyr er **siste utvei** i forebygging. Før verneutstyr skal du vurdere:

1. **Eliminere** - Fjern faren helt
2. **Substituere** - Bytt til noe mindre farlig
3. **Tekniske tiltak** - Avsperring, ventilasjon, vern på maskin
4. **Administrative tiltak** - Prosedyrer, opplæring, skilting
5. **Personlig verneutstyr** - Siste forsvarslinje

### Hvorfor er verneutstyr sist?

- Beskytter bare brukeren, ikke andre
- Krever riktig bruk for å fungere
- Kan være ubehagelig å bruke
- Virker kun når det faktisk brukes`,
    },
    {
      id: 'tif-vg1-6-3-typer',
      type: 'text',
      content: `## Typer verneutstyr

### Hodebeskyttelse
- **Hjelm**: Beskytter mot fallende gjenstander og støt
- Spesialhjelmer: Elektriker, sveiser, skogsarbeid

### Øyebeskyttelse
- **Vernebriller**: Beskytter mot partikler og sprut
- **Ansiktsskjerm**: Større beskyttelse, ved sliping, sprøyting
- **Sveisemaske**: Filtrer mot farlig UV-lys

### Hørselvern
- **Ørepropper**: Skumpropper, formstøpte
- **Øreklokker**: Kapsler over øret
- Velges etter støynivå (dB-reduksjon)

### Åndedrettsvern
- **Støvmaske**: Mot partikler (FFP1, FFP2, FFP3)
- **Gassmaske**: Mot gasser/damp med spesialfilter
- **Friskluftmaske**: Tilførsel av ren luft`,
    },
    {
      id: 'tif-vg1-6-3-typer2',
      type: 'text',
      content: `## Flere typer verneutstyr

### Håndbeskyttelse
- **Arbeidshansker**: Generell beskyttelse
- **Skjærehansker**: Kuttmotstand
- **Kjemikaliehansker**: Mot kjemikalier
- **Sveisehansker**: Varme og gnister

### Fotbeskyttelse
- **Vernesko**: Tåhette i stål/kompositt
- **Vernestøvler**: Høyere beskyttelse
- Tilleggsegenskaper: Sklisåle, gjennomtrampingsvern, antistatisk

### Kroppsbeskyttelse
- **Verneklær**: Flamme-/kjemikaliebestandig
- **Synlighetsklær**: Refleks for synlighet
- **Fallsikring**: Sele og line ved arbeid i høyden`,
    },
    {
      id: 'tif-vg1-6-3-ex1',
      type: 'text',
      content: `### Eksempel: Valg av verneutstyr for sveising

Ved sveising trengs følgende verneutstyr:

| Kroppsdel | Fare | Verneutstyr |
|-----------|------|-------------|
| Øyne/ansikt | UV-stråling, gnister | Sveisemaske med riktig filter |
| Hørsel | Støy | Ørepropper eller øreklokker |
| Lunger | Sveiserøyk | Avsug + evt. åndedrettsvern |
| Hender | Varme, gnister | Sveisehansker i skinn |
| Kropp | Gnister, varme | Flammebestandige verneklær |
| Føtter | Fallende gjenstander, varme | Vernesko med tåhette |

Utstyret må være godkjent (CE-merket) og i god stand.`,
    },
    {
      id: 'tif-vg1-6-3-godkjenning',
      type: 'text',
      content: `## Godkjenning og merking

### CE-merking

Alt personlig verneutstyr som selges i EU/EØS må være **CE-merket**. Dette betyr at det oppfyller europeiske sikkerhetskrav.

### Kategorier

| Kategori | Beskyttelse | Eksempler |
|----------|-------------|-----------|
| Kategori I | Minimal risiko | Hagehansker, solbriller |
| Kategori II | Middels risiko | Vernebriller, arbeidshansker |
| Kategori III | Dødelig/irreversibel risiko | Fallsikring, kjemikalievern |

### Standarder

Hver type verneutstyr har egne standarder:
- EN 166: Øyevern
- EN 352: Hørselvern
- EN 149: Åndedrettsvern (støvmasker)
- EN 388: Hansker, mekanisk beskyttelse`,
    },
    {
      id: 'tif-vg1-6-3-vedlikehold',
      type: 'text',
      content: `## Vedlikehold og kontroll

### Daglig kontroll
- Visuell sjekk for skader
- Sjekk at alle deler er på plass
- Test funksjon (f.eks. innstillinger)

### Rengjøring
- Følg produsentens anvisninger
- Bruk riktige rengjøringsmidler
- Tørk skikkelig før lagring

### Utskifting
- Ved synlig skade
- Etter bruk ved hendelse (f.eks. hjelm etter slag)
- Når holdbarhetsdato er utløpt
- Når det ikke lenger passer (slitasje)

### Oppbevaring
- Tørt og rent
- Beskyttet mot sollys (nedbryter plast)
- Hengende eller i kasse/skap`,
    },
    {
      id: 'tif-vg1-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Verneutstyr er **siste forsvarslinje** i tiltakshierarkiet
- Hovedtyper: Hode, øyne, hørsel, åndedrett, hender, føtter, kropp
- Alt PVU må være **CE-merket** og oppfylle standarder
- Velg verneutstyr basert på risikovurdering
- **Kontroller** verneutstyr før bruk
- **Vedlikehold** ifølge produsentens anvisninger
- **Bytt ut** skadet eller utdatert utstyr`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-3-oppg1',
      number: '6.3.1',
      type: 'multiple-choice',
      task: 'Hvorfor er personlig verneutstyr plassert sist i tiltakshierarkiet?',
      options: [
        { id: 'a', text: 'Fordi det er dyrest', isCorrect: false },
        { id: 'b', text: 'Fordi det kun beskytter brukeren og krever riktig bruk', isCorrect: true },
        { id: 'c', text: 'Fordi det er vanskeligst å bruke', isCorrect: false },
        { id: 'd', text: 'Fordi det tar lengst tid å skaffe', isCorrect: false },
      ],
      solution: 'PVU er sist i hierarkiet fordi det kun beskytter den som bruker det (ikke andre), det krever riktig bruk for å fungere, og det virker bare når det faktisk brukes. Eliminering og tekniske tiltak er mer pålitelige.',
    },
    {
      id: 'tif-vg1-6-3-oppg2',
      number: '6.3.2',
      type: 'classic',
      task: 'Beskriv tre ting du bør kontrollere på en vernehjelm før bruk.',
      solution: '1) Skallet - sjekk for sprekker, bulker eller andre synlige skader som kan svekke beskyttelsen. 2) Innvendige remmer og innredning - sjekk at de er hele, riktig festet og justert til hodet ditt. 3) Holdbarhetsdato - hjelmer har begrenset levetid (typisk 3-5 år avhengig av type). Sjekk datomerking innvendig. Bonus: Etter et kraftig slag skal hjelmen byttes selv om det ikke er synlig skade.',
    },
    {
      id: 'tif-vg1-6-3-oppg3',
      number: '6.3.3',
      type: 'classic',
      task: 'Hva betyr CE-merkingen på verneutstyr, og hvorfor er det viktig å se etter denne merkingen?',
      solution: 'CE-merking betyr at produktet oppfyller europeiske sikkerhetskrav og er godkjent for salg i EU/EØS. Produsenten erklærer at produktet er testet og oppfyller relevante standarder for den type beskyttelse det skal gi. Det er viktig å se etter CE-merking fordi: 1) Det garanterer et minimumsnivå av beskyttelse. 2) Ikke-CE-merket utstyr kan gi falsk trygghet. 3) Ved ulykke kan manglende CE-merking gi ansvarsproblemer for arbeidsgiver.',
    },
    {
      id: 'tif-vg1-6-3-oppg4',
      number: '6.3.4',
      type: 'classic',
      task: 'Forklar forskjellen mellom støvmaske-klassene FFP1, FFP2 og FFP3. Når brukes hver klasse?',
      solution: 'FFP-klassene angir filtreringseffektivitet: FFP1: Minst 80% filtrering. Brukes mot ubehagelige, men ikke helseskadelige partikler. Eks: støv fra saging av tre. FFP2: Minst 94% filtrering. Brukes mot helseskadelige partikler. Eks: sveiserøyk, steinslipestøv, muggsoppsporer. FFP3: Minst 99% filtrering. Brukes mot svært farlige partikler. Eks: asbest, kreftfremkallende stoffer, smittsomme partikler. Velg alltid masken ut fra stoffets farlighet, ikke bare støvmengden.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-3-oppg5',
      number: '6.3.5',
      type: 'classic',
      task: 'Du skal utføre sliping av en sveisesøm med vinkelsliper. List opp alt verneutstyr du trenger og forklar hvorfor for hvert punkt.',
      solution: 'Verneutstyr for sliping: 1) Ansiktsskjerm/vernebriller - beskytter øyne og ansikt mot gnister og partikler som slynges ut i høy hastighet. 2) Hørselsvern - vinkelsliper lager støy over 85 dB som skader hørselen. 3) Støvmaske FFP2 - metallstøv og partikler fra sliping er helseskadelige ved innånding. 4) Skinnhansker - beskytter hendene mot varme partikler og kuttskader. 5) Verneklær med lang arm/ben - beskytter huden mot gnister og partikler. 6) Vernesko med tåhette - beskytter føttene mot fallende gjenstander og gnister.',
    },
    {
      id: 'tif-vg1-6-3-oppg6',
      number: '6.3.6',
      type: 'classic',
      task: 'En kollega klager over at hørselsvernet er ubehagelig og unnlater å bruke det i støyende arbeid. Diskuter problemet og foreslå løsninger.',
      solution: 'Problemet er at hørselsskade er permanent og usynlig i starten - når man merker det, er det for sent. Kollegaen utsetter seg for varig skade. Løsninger: 1) Samtale om konsekvenser - permanent tinnitus og hørselstap er alvorlig for livskvalitet. 2) Prøv andre typer - det finnes mange varianter: ulike ørepropper, øreklokker, formstøpte propper. Noe passer bedre. 3) Sjekk passform - feil størrelse er ubehagelig. 4) Teknisk tiltak - kan støykilden dempes? Innkapsling, støydempende matter? 5) Formell oppfølging - arbeidsgiver må følge opp, dette er lovpålagt. Ved fortsatt nekt kan det få konsekvenser for arbeidsforholdet.',
    },
  ],
  keyTerms: [
    'personlig verneutstyr',
    'PVU',
    'tiltakshierarki',
    'CE-merking',
    'vernebriller',
    'hørselsvern',
    'åndedrettsvern',
    'vernehanske',
    'vernesko',
    'fallsikring',
    'FFP-klasse',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'velge og bruke personlig verneutstyr tilpasset arbeidsoppgaven',
  ],
};

// ===== KAPITTEL 6.4: Brann og beredskap =====
const CHAPTER_6_4: TextbookChapter = {
  id: 'tif-vg1-6-4',
  courseId: 'tif-vg1',
  chapterNumber: '6.4',
  title: 'Brann og beredskap',
  description: 'Lær om brannforebygging, slukkeutstyr og evakuering.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-4-intro',
      type: 'text',
      content: `# Brann og beredskap

Brann kan få katastrofale følger i industrimiljøer. Forebygging, tidlig oppdagelse og riktig respons er avgjørende. I dette kapittelet lærer du om brannforebygging, slukkeutstyr og beredskapsplanlegging.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare brannfirkanten og hvordan brann oppstår
- Beskrive brannforebyggende tiltak i industri
- Velge riktig slukkemiddel for ulike branntyper
- Kjenne til evakueringsrutiner og beredskapsplan`,
    },
    {
      id: 'tif-vg1-6-4-brann',
      type: 'text',
      content: `## Brannfirkanten

For at brann skal oppstå og vedvare, trengs fire elementer:

1. **Brennbart materiale** (brensel) - tre, papir, gass, olje
2. **Oksygen** - luft inneholder ~21% oksygen
3. **Varme** (tenntemperatur) - gnist, flamme, varme overflater
4. **Kjedereaksjon** - den kjemiske forbrenningsprosessen

### Slokking
For å slokke brann, må du fjerne minst ett element:
- **Kjøle** - senk temperaturen (vann)
- **Kvele** - steng ute oksygen (skum, pulver, CO₂)
- **Fjerne brensel** - flytt brennbart materiale
- **Bryte kjedereaksjonen** - halonalternativer`,
    },
    {
      id: 'tif-vg1-6-4-klasser',
      type: 'text',
      content: `## Brannklasser

| Klasse | Materiale | Eksempler |
|--------|-----------|-----------|
| **A** | Faste stoffer | Tre, papir, tekstil |
| **B** | Brennbare væsker | Bensin, olje, maling |
| **C** | Gasser | Propan, naturgass, acetylen |
| **D** | Metaller | Magnesium, aluminium, natrium |
| **F** | Matolje/fett | Frityr, stekepanne |

### Viktig!

- **Vann** på klasse B (olje) kan gi farlig oppblussing!
- **Vann** på klasse D (metall) kan eksplodere!
- **CO₂** på klasse A kan gjentenning skje
- Velg alltid riktig slukkemiddel for branntypen`,
    },
    {
      id: 'tif-vg1-6-4-slukkemidler',
      type: 'text',
      content: `## Slukkemidler og utstyr

### Pulverapparat (ABC)
- Virker på klasse A, B, C
- Kveler og bryter kjedereaksjon
- Etterlater pulverrester
- Vanligste i industri

### CO₂-apparat
- Virker på klasse B, C
- Kveler med karbondioksid
- Ingen rester - bra for elektronikk
- Advarsel: Kald gass, kveling i lukkede rom

### Skumapparat
- Virker på klasse A, B
- Legger teppe som kveler og kjøler
- Bra for væskebrann

### Vannslokker
- Virker på klasse A
- Kjøler ned
- ALDRI på elektrisitet eller brennbar væske

### Brannslange
- Fast installert, vanntilførsel
- Kun klasse A-branner`,
    },
    {
      id: 'tif-vg1-6-4-ex1',
      type: 'text',
      content: `### Eksempel: Valg av slukkemiddel

**Situasjon 1**: Papirkurv i kontorlandskap brenner.
**Valg**: Vannslokker eller pulver (klasse A)

**Situasjon 2**: Olje tar fyr i en maskin.
**Valg**: Pulver eller CO₂ (klasse B) - ALDRI vann!

**Situasjon 3**: Frityrgryte tar fyr på kantina.
**Valg**: Brannteppe eller spesialt F-apparat - ALDRI vann!

**Situasjon 4**: Elektrisk skap tar fyr.
**Valg**: CO₂ (ingen rester) eller pulver. Slå av strømmen først hvis mulig.`,
    },
    {
      id: 'tif-vg1-6-4-forebygging',
      type: 'text',
      content: `## Brannforebygging i industri

### Orden og renhold
- Fjern brennbart avfall regelmessig
- Hold rømningsveier fri
- Rydd opp oljesøl umiddelbart

### Brannfarlige stoffer
- Oppbevar i godkjente skap
- Merk beholdere tydelig
- Begrens mengde i arbeidsområdet

### Varmt arbeid
- SJA før sveising, sliping, lodding
- Fjern brennbart materiale
- Ha slukkeutstyr klart
- Brannvakt etter avsluttet arbeid (min. 1 time)

### Elektriske installasjoner
- Regelmessig kontroll
- Unngå overbelastning
- Bytt skadede ledninger`,
    },
    {
      id: 'tif-vg1-6-4-evakuering',
      type: 'text',
      content: `## Evakuering og beredskap

### Ved brannalarm

1. **Varsle** - Utløs alarm hvis ikke automatisk
2. **Slokk** - Kun hvis trygt og mulig
3. **Evakuer** - Forlat bygget via nærmeste rømningsvei
4. **Møteplass** - Møt på avtalt sted
5. **Tell opp** - Sjekk at alle er ute

### Beredskapsplan

Alle bedrifter skal ha beredskapsplan som beskriver:
- Varslingsprosedyrer
- Rømningsveier
- Møteplasser
- Slukkeutstyrplassering
- Ansvarlige personer
- Øvelser (minst årlig)`,
    },
    {
      id: 'tif-vg1-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Brannfirkanten**: Brensel + Oksygen + Varme + Kjedereaksjon
- **Brannklasser**: A (fast), B (væske), C (gass), D (metall), F (matolje)
- Velg **riktig slukkemiddel** for branntypen
- **Forebygging**: Orden, sikker oppbevaring, kontroll av varmt arbeid
- Ved alarm: Varsle → Slokk (hvis trygt) → Evakuer → Møteplass → Tell opp
- Øv på evakuering regelmessig
- Kjenn plasseringen av slukkeutstyr og rømningsveier`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-4-oppg1',
      number: '6.4.1',
      type: 'multiple-choice',
      task: 'Hvilket slukkemiddel skal ALDRI brukes på oljebrann?',
      options: [
        { id: 'a', text: 'Pulver', isCorrect: false },
        { id: 'b', text: 'CO₂', isCorrect: false },
        { id: 'c', text: 'Vann', isCorrect: true },
        { id: 'd', text: 'Skum', isCorrect: false },
      ],
      solution: 'Vann skal ALDRI brukes på oljebrann (klasse B). Vannet fordamper eksplosivt under den brennende oljen og slynger brennende olje i alle retninger, noe som sprer brannen voldsomt.',
    },
    {
      id: 'tif-vg1-6-4-oppg2',
      number: '6.4.2',
      type: 'classic',
      task: 'Forklar brannfirkanten og hvordan hvert element kan brukes til å slokke en brann.',
      solution: 'Brannfirkanten har fire elementer: 1) Brennbart materiale - slokk ved å fjerne brenselet (f.eks. stenge gassventil). 2) Oksygen - slokk ved å kvele brannen (dekke til, bruke CO₂ eller skum). 3) Varme - slokk ved å kjøle ned under tenntemperaturen (bruke vann). 4) Kjedereaksjon - slokk ved å bryte den kjemiske reaksjonen (bruke pulver eller halonalternativer). Ved å fjerne minst ett element, slokner brannen.',
    },
    {
      id: 'tif-vg1-6-4-oppg3',
      number: '6.4.3',
      type: 'classic',
      task: 'Hva er "varmt arbeid", og hvilke brannforebyggende tiltak bør gjøres før, under og etter slikt arbeid?',
      solution: 'Varmt arbeid er arbeid som skaper gnister, flammer eller høy varme - som sveising, sliping, lodding og skjærebrenning. FØR: Fjern brennbart materiale minst 10 meter, dekk til det som ikke kan flyttes, sjekk området for brannfarer, ha slukkeutstyr klart, gjennomfør SJA. UNDER: Overvåk området kontinuerlig, ha brannvakt, slokk eventuelle gløder umiddelbart. ETTER: Brannvakt i minst 1 time etter at arbeidet er ferdig, sjekk for skjult glødning i konstruksjoner, dokumenter at området er sikret.',
    },
    {
      id: 'tif-vg1-6-4-oppg4',
      number: '6.4.4',
      type: 'classic',
      task: 'Beskriv prosedyren du skal følge når brannalarmen går på arbeidsplassen din.',
      solution: 'Ved brannalarm: 1) VARSLE - Hvis du oppdager brannen, utløs manuell brannmelder hvis automatisk alarm ikke har gått. Ring 110 ved reell brann. 2) SLOKK - Kun hvis brannen er liten, du har riktig slukkemiddel og rømningsvei er sikret bak deg. Hvis i tvil - evakuer. 3) EVAKUER - Gå rolig til nærmeste rømningsvei. Lukk dører etter deg. Bruk ikke heis. Hjelp andre hvis mulig. 4) MØTEPLASS - Gå direkte til bedriftens møteplass. 5) TELL OPP - Meld fra til brannleder at du er ute. Rapporter hvis du vet om noen som mangler.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-4-oppg5',
      number: '6.4.5',
      type: 'classic',
      task: 'En industribedrift har ABC-pulverapparat, CO₂-apparat og vannslange tilgjengelig. Forklar når hvert slukkemiddel er best egnet, og beskriv fordeler og ulemper med hver.',
      solution: 'ABC-PULVER: Best for generell bruk - virker på faste stoffer, væsker og gass. Fordeler: Allsidig, stanser brann raskt. Ulemper: Etterlater pulverrester som må renses, kan skade elektronikk, reduserer sikt. CO₂: Best for elektriske branner og væskebranner der rester er problem. Fordeler: Ingen rester, skader ikke elektronikk. Ulemper: Mindre effektivt på faste stoffer, fare for kvelning i små rom, gjentenning kan skje, beholderne er tunge. VANNSLANGE: Best for store branner i faste materialer. Fordeler: Uendelig tilgang, kjøler effektivt, hindrer spredning. Ulemper: Kun klasse A, farlig på elektrisitet og brennbare væsker, kan forårsake vannskade.',
    },
    {
      id: 'tif-vg1-6-4-oppg6',
      number: '6.4.6',
      type: 'classic',
      task: 'Du er ansatt i en verkstedbedrift og blir bedt om å være med i beredskapsgruppen. Lag en sjekkliste over det viktigste du mener bør være på plass for god brannberedskap.',
      solution: 'Sjekkliste for brannberedskap: UTSTYR: [ ] Slukkeutstyr synlig plassert og merket [ ] Alle slokkeapparater kontrollert årlig [ ] Brannslanger testet [ ] Røykvarslere og brannalarmer funksjonelle. RØMNING: [ ] Rømningsveier fri og merket [ ] Nødbelysning funksjonell [ ] Dører åpner i rømningsretning [ ] Møteplass definert og kjent. ORGANISERING: [ ] Beredskapsplan oppdatert [ ] Ansvarlige utpekt (brannvernleder, etasjeansvarlige) [ ] Opplæring gjennomført for alle ansatte [ ] Brannøvelse gjennomført siste år. FOREBYGGING: [ ] Orden og renhold [ ] Brennbart avfall fjernes daglig [ ] Brannfarlige stoffer i godkjent skap [ ] Elektrisk anlegg kontrollert.',
    },
  ],
  keyTerms: [
    'brannfirkanten',
    'brannklasse',
    'slukkemiddel',
    'pulverapparat',
    'CO₂-apparat',
    'evakuering',
    'beredskapsplan',
    'rømningsvei',
    'møteplass',
    'varmt arbeid',
    'brannvakt',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'gjennomføre førstehjelp og iverksette tiltak ved ulykker',
  ],
};

// ===== KAPITTEL 6.5: Førstehjelp =====
const CHAPTER_6_5: TextbookChapter = {
  id: 'tif-vg1-6-5',
  courseId: 'tif-vg1',
  chapterNumber: '6.5',
  title: 'Førstehjelp',
  description: 'Lær grunnleggende førstehjelp ved vanlige skader og ulykker.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-5-intro',
      type: 'text',
      content: `# Førstehjelp

Ved ulykker kan rask og riktig førstehjelp redde liv og begrense skader. I dette kapittelet lærer du grunnleggende førstehjelp for skader som er vanlige i industri og verksted.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Vurdere en ulykkessituasjon og varsle riktig
- Utføre livreddende førstehjelp (DHLR)
- Behandle vanlige skader: sår, forbrenning, brudd
- Kjenne til plasseringen av førstehjelpsutstyr`,
    },
    {
      id: 'tif-vg1-6-5-abc',
      type: 'text',
      content: `## Livreddende førstehjelp

### Sikre - Varsle - Hjelpe

Ved ulykke:
1. **SIKRE** - Sørg for at det er trygt for deg og andre
2. **VARSLE** - Ring 113 (medisinsk nød)
3. **HJELPE** - Gi førstehjelp

### DHLR (Hjerte-lungeredning)

Hvis personen er bevisstløs og ikke puster normalt:

1. **D** - Drøft: Rist i skuldrene, spør "Hører du meg?"
2. **H** - Hjelp: Ring 113, hent hjertestarter
3. **L** - Luft: Bøy hodet bakover, løft haken, frigjør luftveier
4. **R** - Redning: 30 brystkompresjoner, 2 innblåsinger

**Rytme**: Trykk 100-120 ganger per minutt (sang: "Stayin' Alive")`,
    },
    {
      id: 'tif-vg1-6-5-sar',
      type: 'text',
      content: `## Sårskader

### Små sår
1. Rens såret med rent vann
2. Dekk med plaster eller bandasje
3. Hold rent og tørt

### Store sår med blødning
1. Trykk hardt på såret med ren klut/bandasje
2. Hold trykket - ikke slipp for å sjekke
3. Legg personen ned
4. Ring 113 ved kraftig blødning

### Amputasjonsskade
1. Stopp blødningen med trykk
2. Ring 113 umiddelbart
3. Amputert del: Pakk i ren plast, legg i isvann
4. IKKE legg amputert del direkte på is`,
    },
    {
      id: 'tif-vg1-6-5-forbrenning',
      type: 'text',
      content: `## Forbrenning

### Grader av forbrenning

| Grad | Kjennetegn | Førstehjelp |
|------|------------|-------------|
| 1. grad | Rød, smertefull | Kjøl, ingen bandasje |
| 2. grad | Blemmer | Kjøl, steril bandasje |
| 3. grad | Hvit/svart, ufølsom | Ambulanse, tørr bandasje |

### Førstehjelp ved forbrenning

1. **Kjøl** med rennende lunkent vann i minst 20 minutter
2. Fjern klær/smykker fra området (hvis ikke fastvokst)
3. **Dekk** med steril bandasje eller gladpack
4. **Oppsøk lege** ved store/dype forbrenninger, ansikt, hender, kjønnsorganer

### IKKE
- Bruk ikke is (kan gi frostskade)
- Stikk ikke hull på blemmer
- Bruk ikke smør eller lignende`,
    },
    {
      id: 'tif-vg1-6-5-ex1',
      type: 'text',
      content: `### Eksempel: Håndtering av forbrenning

En kollega får varm sveisesprut på armen:

**Steg 1**: Før armen under rennende lunkent vann umiddelbart. Hold i minst 20 minutter.

**Steg 2**: Fjern armbånd og klokke fra området mens du kjøler.

**Steg 3**: Vurder skaden - er det bare rødt (1. grad) eller blemmer (2. grad)?

**Steg 4**: Dekk med steril bandasje eller ren klut.

**Steg 5**: Ved større forbrenning eller usikkerhet - oppsøk lege eller ring 113.`,
    },
    {
      id: 'tif-vg1-6-5-brudd',
      type: 'text',
      content: `## Brudd og forstuing

### Tegn på brudd
- Sterk smerte
- Hevelse
- Feilstilling
- Kan ikke belaste/bevege
- Krepitasjon (knasing)

### Førstehjelp ved brudd
1. **Stabiliser** - Ikke beveg unødvendig
2. **Støtt** - Underlag på begge sider av bruddet
3. **Kjøl** - Ispakke (med klut mellom)
4. **Oppsøk lege** - Ved alle mistanke om brudd

### Åpne brudd (bein stikker ut)
1. Dekk såret med steril bandasje
2. Stabiliser uten å trykke
3. Ring 113 umiddelbart
4. Ikke prøv å sette beinet på plass`,
    },
    {
      id: 'tif-vg1-6-5-utstyr',
      type: 'text',
      content: `## Førstehjelpsutstyr

### Standard førstehjelpskasse bør inneholde:

- Bandasjer og kompress
- Plaster i ulike størrelser
- Sårservietter
- Tape
- Saks
- Engangshansker
- Øyeskyllevæske
- Kuldepakke
- Redningstepper
- Trekantklær (fatle)
- Første hjelpsinstruks

### Plassering
- Lett tilgjengelig
- Godt merket med grønt kors
- Kjent for alle ansatte
- Sjekk innhold regelmessig`,
    },
    {
      id: 'tif-vg1-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sikre - Varsle - Hjelpe** - Rekkefølgen ved ulykker
- **DHLR**: 30 kompresjoner, 2 innblåsinger ved hjertestans
- **Sårskader**: Trykk for å stoppe blødning
- **Forbrenning**: Kjøl med lunkent vann i 20+ minutter
- **Brudd**: Stabiliser, støtt, oppsøk lege
- Førstehjelpsutstyr skal være lett tilgjengelig og merket
- Ved tvil - ring alltid 113
- Delta på førstehjelpskurs for praktisk øvelse`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-5-oppg1',
      number: '6.5.1',
      type: 'multiple-choice',
      task: 'Hva er riktig rytme for brystkompresjoner ved hjerte-lungeredning?',
      options: [
        { id: 'a', text: '60 kompresjoner per minutt', isCorrect: false },
        { id: 'b', text: '80-90 kompresjoner per minutt', isCorrect: false },
        { id: 'c', text: '100-120 kompresjoner per minutt', isCorrect: true },
        { id: 'd', text: '150 kompresjoner per minutt', isCorrect: false },
      ],
      solution: 'Riktig rytme for brystkompresjoner er 100-120 per minutt. Et godt tips er å trykke i takt med sangen "Stayin\' Alive" av Bee Gees.',
    },
    {
      id: 'tif-vg1-6-5-oppg2',
      number: '6.5.2',
      type: 'classic',
      task: 'Beskriv de fire bokstavene i DHLR og hva du gjør ved hvert steg.',
      solution: 'D - DRØFT: Rist forsiktig i skuldrene og spør høyt "Hører du meg?". Sjekk om personen reagerer. H - HJELP: Ring 113 eller få noen andre til å ringe. Be om at det hentes hjertestarter. L - LUFT: Bøy hodet bakover ved å løfte under haken og trykke pannen ned. Dette åpner luftveiene. Sjekk om personen puster normalt. R - REDNING: Hvis personen ikke puster normalt, start HLR med 30 brystkompresjoner fulgt av 2 innblåsinger. Fortsett til ambulansen kommer eller personen våkner.',
    },
    {
      id: 'tif-vg1-6-5-oppg3',
      number: '6.5.3',
      type: 'classic',
      task: 'En kollega får en forbrenning på hånden fra varm metall. Beskriv steg for steg hva du gjør.',
      solution: '1) Få hånden under rennende lunkent vann umiddelbart. Hold i minst 20 minutter - ikke kortere! 2) Fjern ringer, klokke eller armbånd mens du kjøler (hevelse kan gjøre dette umulig senere). 3) Vurder skaden: Bare rød hud (1. grad), blemmer (2. grad), eller hvit/svart hud (3. grad)? 4) Ved 1. grad: Ingen bandasje nødvendig, eventuelt brannsalve. 5) Ved 2. grad: Dekk med steril bandasje eller ren klut, oppsøk lege. 6) Ved 3. grad eller usikkerhet: Ring 113. IKKE: bruk is, stikk hull på blemmer, bruk smør/olje.',
    },
    {
      id: 'tif-vg1-6-5-oppg4',
      number: '6.5.4',
      type: 'classic',
      task: 'Hvorfor er det viktig å trykke og holde trykket ved en kraftig blødning, uten å slippe for å sjekke om blødningen har stoppet?',
      solution: 'Ved kraftig blødning prøver kroppen å danne blodpropp (koagulering) for å stoppe blødningen. Dette tar tid. Hvis du slipper trykket for å sjekke, ødelegger du den begynnende blodproppen og blødningen starter på nytt. Ved å holde konstant trykk gir du kroppen tid til å bygge opp en stabil blodpropp. Hold trykket i minst 10-15 minutter før du forsiktig letter. Ved kraftig blødning: Ring 113, hold trykket til profesjonell hjelp kommer.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-5-oppg5',
      number: '6.5.5',
      type: 'classic',
      task: 'Du kommer til en ulykke i verkstedet der en kollega ligger bevisstløs på gulvet etter et fall fra en stige. Beskriv hva du gjør steg for steg.',
      solution: 'Steg 1 - SIKRE: Sjekk at det er trygt - er stigen sikker? Er det fare for flere fall? Steg 2 - VARSLE: Rop på hjelp, be noen ringe 113 og hente førstehjelpsutstyr/hjertestarter. Steg 3 - VURDERE: Gå forsiktig til personen. Rist forsiktig i skuldrene og spør "Hører du meg?". Steg 4 - LUFT: Hvis ikke bevisst, åpne luftveiene forsiktig (tenk på mulig nakkeskade ved fall). Sjekk om personen puster. Steg 5A - Hvis puster normalt: Stabilt sideleie (men vær forsiktig med nakken), vent på ambulanse. Steg 5B - Hvis ikke puster: Start HLR - 30 kompresjoner, 2 innblåsinger. Bruk hjertestarter når den kommer. Steg 6: Ikke flytt personen unødvendig ved fall - mulig rygg/nakkeskade.',
    },
    {
      id: 'tif-vg1-6-5-oppg6',
      number: '6.5.6',
      type: 'classic',
      task: 'Lag en sjekkliste for innholdet i en førstehjelpskasse for et industriverksted, og forklar bruken av minst fem av artiklene.',
      solution: 'Sjekkliste førstehjelpskasse: [ ] Engangshansker - beskytter mot smitte ved sårbehandling. [ ] Sterile kompresser/bandasjer - til å dekke sår og stoppe blødning. [ ] Elastisk bind - til å feste bandasjer og støtte forstuing. [ ] Plaster (ulike størrelser) - til små sår og kutt. [ ] Sårservietter - til rengjøring av sår. [ ] Øyeskyllevæske - til skylling ved kjemikalieskvett eller fremmedlegemer i øyet. [ ] Kuldepakke - til å redusere hevelse ved slag/forstuing. [ ] Trekantklede/fatle - til å støtte arm ved brudd/skade. [ ] Brannsårbandasje - fuktig bandasje til forbrenninger. [ ] Saks - til å klippe bandasjer og klær. [ ] Tape - til å feste bandasjer. [ ] Førstehjelpsguide - for instruksjoner.',
    },
  ],
  keyTerms: [
    'førstehjelp',
    'DHLR',
    'hjerte-lungeredning',
    'hjertestarter',
    'sårskade',
    'forbrenning',
    'brudd',
    'blødning',
    'bevisstløs',
    'stabilt sideleie',
    'førstehjelpskasse',
  ],
  competenceGoals: [
    'gjennomføre førstehjelp og iverksette tiltak ved ulykker',
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
  ],
};

// ===== KAPITTEL 6.6: Ergonomi =====
const CHAPTER_6_6: TextbookChapter = {
  id: 'tif-vg1-6-6',
  courseId: 'tif-vg1',
  chapterNumber: '6.6',
  title: 'Ergonomi',
  description: 'Lær om ergonomisk arbeidsteknikk og forebygging av belastningsskader.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-6-intro',
      type: 'text',
      content: `# Ergonomi

Ergonomi handler om å tilpasse arbeidet til mennesket. Feil arbeidsteknikk og dårlig tilpassede arbeidsplasser kan gi belastningsskader som utvikler seg over tid. I dette kapittelet lærer du om ergonomiske prinsipper og hvordan du forebygger skader.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva ergonomi er og hvorfor det er viktig
- Beskrive vanlige belastningsskader
- Anvende riktig løfteteknikk
- Tilpasse arbeidsplassen ergonomisk`,
    },
    {
      id: 'tif-vg1-6-6-belastning',
      type: 'text',
      content: `## Belastningsskader

Belastningsskader oppstår over tid på grunn av:
- Feil arbeidsstillinger
- Tungt løftearbeid
- Ensidige, repetitive bevegelser
- Statisk arbeid (stå/sitte lenge i ro)
- Vibrasjoner

### Vanlige belastningsskader

| Område | Skade | Årsak |
|--------|-------|-------|
| Rygg | Prolaps, lumbago | Tungt løft, vridning |
| Skulder | Senebetennelse | Arbeid over hodet |
| Albue | Tennisalbue | Repetitive bevegelser |
| Håndledd | Karpaltunnelsyndrom | Ensidige håndstillinger |
| Nakke | Nakkesmerter | Statisk arbeid, dårlig skjermposisjon |

Belastningsskader er en av de vanligste årsakene til sykefravær.`,
    },
    {
      id: 'tif-vg1-6-6-loft',
      type: 'text',
      content: `## Løfteteknikk

### Riktig løfteteknikk

1. **Planlegg** - Vurder vekt, gripepunkter, hindringer
2. **Plassering** - Stå nær gjenstanden, føtter i skulderbredde
3. **Grep** - Godt grep, bøyde knær
4. **Løft** - Rett rygg, stram mage, bruk bena
5. **Bær** - Hold lasten nær kroppen, ikke vri
6. **Sett ned** - Samme teknikk som løft, i revers

### Husk!

- Maksimal anbefalt løftevekt: 25 kg (menn), 15 kg (kvinner)
- Ved ujevn vekt: Ekstra forsiktighet
- Bruk hjelpemidler når mulig
- Be om hjelp ved tunge løft`,
    },
    {
      id: 'tif-vg1-6-6-ex1',
      type: 'text',
      content: `### Eksempel: Løft av tung boks

Du skal løfte en 20 kg boks fra gulvet til en arbeidsbenk:

**Feil teknikk**: Bøyer ryggen, strake ben, tar løftet med ryggen. Risiko: Akutt ryggskade.

**Riktig teknikk**:
1. Gå helt inntil boksen
2. Plasser føttene i skulderbredde, tærne peker litt utover
3. Bøy knærne, hold ryggen rett
4. Grip boksen med begge hender, nær kroppen
5. Stram magemusklene
6. Strekk bena mens ryggen holdes rett
7. Hold boksen inntil kroppen
8. Sett ned med samme teknikk`,
    },
    {
      id: 'tif-vg1-6-6-arbeidsplass',
      type: 'text',
      content: `## Ergonomisk arbeidsplass

### Stående arbeid

- Arbeidshøyde ved albuhøyde (± 5 cm)
- Gulvmatte for demping
- Mulighet for å sitte/støtte seg
- Variasjon i oppgaver

### Sittende arbeid

- Justerbar stol og arbeidsbord
- Føtter flatt på gulvet
- Knær i ca. 90 graders vinkel
- Ryggstøtte i svai
- Skjerm i øyehøyde, armlengdes avstand

### Generelle prinsipper

- Unngå arbeid over skulderhøyde
- Unngå vridning under belastning
- Ta pauser og varier arbeidet
- Bruk hjelpemidler (kran, truck, sakkekarre)`,
    },
    {
      id: 'tif-vg1-6-6-hjelpemidler',
      type: 'text',
      content: `## Ergonomiske hjelpemidler

### Løfte- og transporthjelpemidler
- Sakkekarre og tralle
- Pallejakk
- Løftebord
- Traverskran
- Vakuumløfter

### Håndverktøy
- Ergonomiske grep
- Vibrasjonsdempet verktøy
- Riktig størrelse og vekt
- Godt vedlikeholdt (skarpt = mindre kraft)

### Arbeidsstasjon
- Høyderegulerbart arbeidsbord
- Ergonomisk stol
- Antitrøtthetsmatte
- God belysning
- Justerbar skjermholder`,
    },
    {
      id: 'tif-vg1-6-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Ergonomi** = tilpasse arbeidet til mennesket
- Belastningsskader utvikler seg over tid og kan bli kroniske
- **Riktig løfteteknikk**: Bøy knærne, rett rygg, bruk bena
- Hold lasten nær kroppen, ikke vri under løft
- Arbeidsplassen skal tilpasses den som jobber
- Bruk **hjelpemidler** for å redusere belastning
- **Variasjon og pauser** forebygger skader
- Maksimalt anbefalt løft: 25 kg (menn), 15 kg (kvinner)`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-6-oppg1',
      number: '6.6.1',
      type: 'multiple-choice',
      task: 'Hva er den viktigste ergonomiske regelen ved løfting?',
      options: [
        { id: 'a', text: 'Løft alltid med strake ben', isCorrect: false },
        { id: 'b', text: 'Bøy ryggen for å nå ned til gjenstanden', isCorrect: false },
        { id: 'c', text: 'Hold ryggen rett og bruk bena til å løfte', isCorrect: true },
        { id: 'd', text: 'Vri kroppen mens du løfter for å spare tid', isCorrect: false },
      ],
      solution: 'Den viktigste regelen er å holde ryggen rett og bruke bena til å løfte. Bøy knærne, stram magen og la de store musklene i lårene gjøre jobben. Ryggen er sårbar for skade ved bøyning under belastning.',
    },
    {
      id: 'tif-vg1-6-6-oppg2',
      number: '6.6.2',
      type: 'classic',
      task: 'Beskriv fem faktorer som kan føre til belastningsskader over tid.',
      solution: '1) Feil arbeidsstillinger - jobbe i vridde, bøyde eller ubekvemme posisjoner over tid. 2) Tungt løftearbeid - regelmessig løfting av tunge gjenstander, spesielt med feil teknikk. 3) Ensidige, repetitive bevegelser - gjenta samme bevegelse hundrevis av ganger daglig. 4) Statisk arbeid - stå eller sitte i samme posisjon lenge uten pauser eller bevegelse. 5) Vibrasjoner - bruk av vibrerende verktøy som påvirker hender, armer eller hele kroppen.',
    },
    {
      id: 'tif-vg1-6-6-oppg3',
      number: '6.6.3',
      type: 'classic',
      task: 'En kollega klager over ryggsmerter etter å ha jobbet på en arbeidsbenk hele dagen. Arbeidsbenken er 90 cm høy, og kollegaen er 190 cm. Hva kan være problemet, og hva foreslår du?',
      solution: 'Problemet er at arbeidsbenken er for lav for en person på 190 cm. Arbeidshøyden bør være ved albuhøyde, som for en person på 190 cm er ca. 115-120 cm. Ved 90 cm må kollegaen bøye seg framover konstant, noe som belaster ryggen. Forslag: 1) Hev arbeidsbenken med justerbare ben eller en plattform. 2) Bruk en høyderegulerbar arbeidsbenk. 3) Plasser arbeidsstykket på en forhøyning. 4) Vurder om noe av arbeidet kan gjøres sittende (høy stol/krakk). 5) Ta pauser og strekk ut.',
    },
    {
      id: 'tif-vg1-6-6-oppg4',
      number: '6.6.4',
      type: 'classic',
      task: 'Liste opp tre hjelpemidler som kan redusere belastning ved tungt manuelt arbeid, og forklar hvordan hvert brukes.',
      solution: '1) Sakkekarre: Brukes til å transportere tunge gjenstander ved å vippe lasten bakover og trille på hjulene. Sparer ryggen for løft og bæring. 2) Pallejakk: Hydraulisk jekk som løfter paller noen centimeter over gulvet slik at de kan trekkes/skyves i stedet for å bæres. Brukes til å flytte paller med varer. 3) Løftebord: Heve-/senkebord som bringer arbeidsstykket til riktig arbeidshøyde. Unngår at man må løfte opp/ned og bøye seg. Ofte brukt ved pakking eller montering.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-6-oppg5',
      number: '6.6.5',
      type: 'classic',
      task: 'En bedrift har høyt sykefravær på grunn av muskel- og skjelettplager. Som HMS-ansvarlig skal du foreslå tiltak. Beskriv minst fem konkrete tiltak for å redusere belastningsskader.',
      solution: 'Tiltak mot belastningsskader: 1) Opplæring i løfteteknikk - alle ansatte får praktisk kurs i riktig løfting og ergonomi. 2) Hjelpemidler - investere i sakkekarrer, løftebord, vakuumløftere, pallejakker for å redusere manuell håndtering. 3) Arbeidsplassvurdering - ergonomisk gjennomgang av alle arbeidsstasjoner, juster høyder og utstyr. 4) Jobbrotasjon - varier arbeidsoppgaver slik at samme bevegelser ikke gjentas hele dagen. 5) Pauserutiner - innføre mikropauser og tøyeøvelser, gjerne styrt med app eller signal. 6) Høyderegulerbart utstyr - arbeidsbenker, stoler, skjermer som kan tilpasses hver bruker. 7) Rapportering - oppfordre til tidlig melding av plager slik at tiltak kan settes inn før skade utvikler seg.',
    },
    {
      id: 'tif-vg1-6-6-oppg6',
      number: '6.6.6',
      type: 'classic',
      task: 'Du skal flytte 50 bokser á 15 kg fra gulvet til en reol i arbeidshøyde. Beskriv hvordan du vil planlegge og gjennomføre dette arbeidet ergonomisk riktig.',
      solution: 'Planlegging og gjennomføring: PLANLEGGING: 1) Vurder om pallejakk/løftebord kan brukes - kan boksene løftes samlet på pall til riktig høyde? 2) Bruk tralle til transport hvis mulig. 3) Kan to personer dele arbeidet for færre løft hver? GJENNOMFØRING: 4) Bruk riktig løfteteknikk: Bøy knær, rett rygg, grip godt, hold nær kroppen. 5) Løft til arbeidshøyde (midje), ikke over skuldre. 6) Ikke vri under løft - snu med bena. 7) Ta pauser - f.eks. etter hver 10. boks, gjør en kort strekk. 8) Varier tempo - ikke hastverk som fører til slurvete teknikk. ETTERPÅ: 9) Tøy ut musklene. Meld fra hvis du kjenner ubehag.',
    },
  ],
  keyTerms: [
    'ergonomi',
    'belastningsskade',
    'løfteteknikk',
    'arbeidsstilling',
    'repetitivt arbeid',
    'statisk arbeid',
    'hjelpemidler',
    'arbeidshøyde',
    'variasjon',
    'mikropauser',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'velge og bruke materialer og utstyr som ivaretar helse, miljø og sikkerhet',
  ],
};

// ===== KAPITTEL 6.7: Kjemikalier og farlige stoffer =====
const CHAPTER_6_7: TextbookChapter = {
  id: 'tif-vg1-6-7',
  courseId: 'tif-vg1',
  chapterNumber: '6.7',
  title: 'Kjemikalier og farlige stoffer',
  description: 'Lær om sikker håndtering av kjemikalier, merking og sikkerhetsdatablader.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-6-7-intro',
      type: 'text',
      content: `# Kjemikalier og farlige stoffer

I industri og verksted brukes mange kjemikalier som kan være farlige ved feil håndtering. I dette kapittelet lærer du om faremerking, sikkerhetsdatablader og trygg håndtering av kjemikalier.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Tolke farepiktogrammer og faremerking
- Lese og bruke sikkerhetsdatablad (SDS)
- Beskrive sikker håndtering, lagring og avfallshåndtering
- Velge riktig verneutstyr for arbeid med kjemikalier`,
    },
    {
      id: 'tif-vg1-6-7-merking',
      type: 'text',
      content: `## Faremerking (CLP)

Alle farlige kjemikalier må merkes med standardiserte **farepiktogrammer** (CLP-systemet):

| Symbol | Navn | Fare |
|--------|------|------|
| 💥 | Eksplosjonsfarlig | Kan eksplodere |
| 🔥 | Brannfarlig | Kan antenne |
| ⚠️ | Oksiderende | Forsterker brann |
| ⚠️ | Gass under trykk | Kan eksplodere ved oppvarming |
| ☠️ | Akutt giftig | Dødelig/giftig |
| ⚠️ | Helsefare | Irriterende/sensibiliserende |
| ⚠️ | Alvorlig helsefare | Kreftfremkallende, organskade |
| ⚠️ | Etsende | Gir etseskader |
| ⚠️ | Miljøfarlig | Skadelig for vannmiljø |

Piktogrammene er røde romber med hvit bakgrunn og sort symbol.`,
    },
    {
      id: 'tif-vg1-6-7-sds',
      type: 'text',
      content: `## Sikkerhetsdatablad (SDS)

Alle farlige kjemikalier skal ha et **sikkerhetsdatablad** med 16 punkter:

1. Identifikasjon av stoffet/produktet
2. Fareidentifikasjon
3. Sammensetning
4. Førstehjelpstiltak
5. Brannslokkingstiltak
6. Tiltak ved utilsiktet utslipp
7. Håndtering og lagring
8. Eksponeringskontroll / verneutstyr
9. Fysiske og kjemiske egenskaper
10. Stabilitet og reaktivitet
11. Toksikologiske opplysninger
12. Miljøopplysninger
13. Avfallshåndtering
14. Transportopplysninger
15. Regelverksmessige opplysninger
16. Andre opplysninger

**Viktigste punkter for daglig bruk**: 4, 7, 8, 13`,
    },
    {
      id: 'tif-vg1-6-7-ex1',
      type: 'text',
      content: `### Eksempel: Bruk av sikkerhetsdatablad

Du skal bruke et løsemiddel for rengjøring av metalldeler.

**Fra sikkerhetsdatabladet leser du:**

- **Punkt 2 (Fareidentifikasjon)**: Brannfarlig væske, irriterer hud og øyne, skadelig ved innånding.

- **Punkt 8 (Verneutstyr)**: Bruk kjemikaliebestandige hansker (nitril), vernebriller, ved dårlig ventilasjon: åndedrettsvern med A-filter.

- **Punkt 7 (Lagring)**: Lagres kjølig i lukket beholder, unngå tennkilder.

- **Punkt 13 (Avfall)**: Leveres som farlig avfall. Ikke hell i avløp.

Med denne informasjonen kan du bruke produktet trygt.`,
    },
    {
      id: 'tif-vg1-6-7-handtering',
      type: 'text',
      content: `## Sikker håndtering

### Før bruk
- Les sikkerhetsdatabladet
- Sjekk faremerkingen
- Ha riktig verneutstyr klar
- Sørg for god ventilasjon

### Under bruk
- Bruk verneutstyr
- Unngå hudkontakt og innånding
- Hold unna tennkilder ved brannfarlige stoffer
- Ikke spis, drikk eller røyk

### Etter bruk
- Vask hendene grundig
- Luft ut arbeidsklær
- Lukk beholdere ordentlig
- Rydd opp søl umiddelbart`,
    },
    {
      id: 'tif-vg1-6-7-lagring',
      type: 'text',
      content: `## Lagring

### Generelle regler
- Oppbevar i originalbeholder med etikett
- Lagre i ventilert, kjølig og tørt rom
- Uforenlige stoffer skal skilles
- Begrenset mengde i arbeidsområdet
- Brannfarlige stoffer i godkjent skap

### Uforenlige stoffer (skal IKKE lagres sammen)

| Stoff | Holdes unna |
|-------|-------------|
| Syrer | Baser, oksiderende stoffer |
| Oksiderende | Brannfarlige stoffer |
| Løsemidler | Oksiderende stoffer |

### Merkekrav
- Farepiktogrammer synlige
- Stoffnavn tydelig
- Innhold oppdatert`,
    },
    {
      id: 'tif-vg1-6-7-avfall',
      type: 'text',
      content: `## Avfallshåndtering

### Farlig avfall

Mange kjemikalier er **farlig avfall** og skal:
- Samles separat fra vanlig avfall
- Merkes tydelig
- Leveres til godkjent mottak
- Dokumenteres (deklarasjonsskjema)

### Eksempler på farlig avfall
- Brukt olje og smøremidler
- Løsemidler og tynner
- Tomme beholdere med kjemikalierester
- Maling og lakk
- Batterier
- Kjølevæsker

### ALDRI
- Hell kjemikalier i avløp
- Kast i vanlig søppel
- Bland ulike kjemikalier`,
    },
    {
      id: 'tif-vg1-6-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **CLP-merking** med farepiktogrammer viser farer
- **Sikkerhetsdatablad** gir detaljert sikkerhetsinformasjon
- **Les SDS** før bruk av ukjente kjemikalier
- Bruk riktig **verneutstyr** (hansker, briller, åndedrettsvern)
- **Lagre** kjemikalier riktig - separat, ventilert, merket
- **Avfall** - lever farlig avfall til godkjent mottak
- Ved søl eller eksponering - følg prosedyrer i SDS
- Ved tvil - spør!`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-6-7-oppg1',
      number: '6.7.1',
      type: 'multiple-choice',
      task: 'Hva betyr det hvis et produkt er merket med piktogrammet for "alvorlig helsefare" (person med stjerne på brystet)?',
      options: [
        { id: 'a', text: 'Produktet kan gi hudirritasjon', isCorrect: false },
        { id: 'b', text: 'Produktet kan forårsake kreft eller organskade', isCorrect: true },
        { id: 'c', text: 'Produktet er miljøskadelig', isCorrect: false },
        { id: 'd', text: 'Produktet er brannfarlig', isCorrect: false },
      ],
      solution: 'Piktogrammet "alvorlig helsefare" indikerer at stoffet kan gi alvorlige langtidsvirkninger som kreft, skade på arvestoff, foster, reproduksjon eller spesifikke organer. Slike stoffer krever spesielle forholdsregler.',
    },
    {
      id: 'tif-vg1-6-7-oppg2',
      number: '6.7.2',
      type: 'classic',
      task: 'Du skal bruke et ukjent rengjøringsmiddel. Hvilke punkter i sikkerhetsdatabladet er viktigst å lese før du begynner?',
      solution: 'Viktigste punkter før bruk: Punkt 2 (Fareidentifikasjon) - hvilke farer har stoffet? Punkt 4 (Førstehjelp) - hva gjør du ved eksponering? Punkt 7 (Håndtering og lagring) - hvordan bruke og oppbevare trygt? Punkt 8 (Eksponeringskontroll/verneutstyr) - hvilket verneutstyr trengs? I tillegg er punkt 13 (Avfallshåndtering) viktig å kjenne til for å vite hvordan rester skal håndteres.',
    },
    {
      id: 'tif-vg1-6-7-oppg3',
      number: '6.7.3',
      type: 'classic',
      task: 'Forklar hvorfor syrer og baser ikke skal lagres sammen i samme skap.',
      solution: 'Syrer og baser er kjemiske motsetninger som reagerer voldsomt når de blandes. Ved lekkasje eller søl i et skap der begge oppbevares, kan stoffene komme i kontakt og reagere. Reaksjonen kan gi: 1) Sterk varmeutvikling (eksotermisk reaksjon) som kan antenne andre materialer. 2) Spruting av etsende væske. 3) Utvikling av giftige gasser. 4) Trykkoppbygging i lukkede beholdere. For å unngå dette skal syrer og baser lagres i separate skap eller med fysisk skille mellom dem.',
    },
    {
      id: 'tif-vg1-6-7-oppg4',
      number: '6.7.4',
      type: 'classic',
      task: 'Hva er farlig avfall, og gi tre eksempler på farlig avfall fra et industriverksted.',
      solution: 'Farlig avfall er avfall som inneholder stoffer som er skadelige for mennesker eller miljø, og som derfor ikke kan kastes i vanlig avfall. Det må samles separat, merkes tydelig og leveres til godkjent mottak. Eksempler fra industriverksted: 1) Brukt olje og smøremidler - fra maskiner og utstyr. 2) Løsemidler og tynner - fra rengjøring og maling. 3) Tomme spraybokser og malingbokser med rester. 4) Brukte kjemikaliebeholdere. 5) Batterier. 6) Kjøle- og smørevæsker fra maskinering. 7) Oljefiltrer og kluter med olje.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-6-7-oppg5',
      number: '6.7.5',
      type: 'classic',
      task: 'Du søler et løsemiddel på huden. Sikkerhetsdatabladet sier: "Ved hudkontakt: Vask umiddelbart med såpe og vann. Ved vedvarende irritasjon, kontakt lege." Beskriv hva du gjør steg for steg.',
      solution: 'Steg for steg: 1) Gå umiddelbart til nærmeste vask - ikke vent. 2) Skyll det berørte hudområdet med rikelig mengde vann. 3) Vask grundig med såpe i minst 15-20 minutter. 4) Fjern kontaminerte klær og smykker. 5) Skyll klærne også eller kast dem i egnet beholder. 6) Sjekk huden - er den rød, irritert eller smertefull? 7) Hvis irritasjon vedvarer etter vask - kontakt lege eller bedriftshelsetjeneste. 8) Ta med sikkerhetsdatabladet til legen slik at de vet hva du er eksponert for. 9) Rapporter hendelsen som en HMS-hendelse.',
    },
    {
      id: 'tif-vg1-6-7-oppg6',
      number: '6.7.6',
      type: 'classic',
      task: 'Et kjemikalieskap i verkstedet inneholder: Aceton (løsemiddel), saltsyre, natriumhydroksid (lut) og hydraulikkolje. Vurder om denne lagringen er forsvarlig, og foreslå forbedringer.',
      solution: 'Denne lagringen er IKKE forsvarlig. Problemer: 1) Saltsyre (syre) og natriumhydroksid (base) skal ALDRI lagres sammen - de reagerer farlig ved kontakt. 2) Aceton (brannfarlig løsemiddel) bør lagres i eget brannskap eller ventilert skap. 3) Hydraulikkolje er relativt ufarlig, men bør ha oppsamlingskar. FORSLAG TIL FORBEDRING: 1) Eget skap for syrer (saltsyre). 2) Eget skap for baser (lut/natriumhydroksid). 3) Brannskap for løsemidler (aceton). 4) Hydraulikkolje kan lagres i eget skap med oppsamlingskar. 5) Alle skap skal være merkede og ha god ventilasjon. 6) Sikkerhetsdatablader skal være lett tilgjengelige.',
    },
  ],
  keyTerms: [
    'kjemikalie',
    'farlig stoff',
    'CLP-merking',
    'farepiktogram',
    'sikkerhetsdatablad',
    'SDS',
    'farlig avfall',
    'verneutstyr',
    'eksponering',
    'lagring',
    'uforenlige stoffer',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'bruke og håndtere kjemikalier og farlige stoffer på en forsvarlig måte',
  ],
};

// Eksporter alle kapitler som én samlet array
export const TIF_VG1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_6_1,
  CHAPTER_6_2,
  CHAPTER_6_3,
  CHAPTER_6_4,
  CHAPTER_6_5,
  CHAPTER_6_6,
  CHAPTER_6_7,
];

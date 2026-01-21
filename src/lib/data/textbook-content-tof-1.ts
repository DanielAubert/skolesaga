/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Dekker LK20-kompetansemål for ToF 1 (TOF01-01)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Vitenskapelig metode og forskning
// ============================================================================

export const CHAPTER_TOF_1_1: TextbookChapter = {
  id: 'tof-1-1',
  courseId: 'tof-1',
  chapterNumber: '1',
  title: 'Vitenskapelig metode og forskning',
  description: 'Grunnleggende vitenskapelig metode og forskningsprosessen.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for vitenskapelig metode',
    'planlegge og gjennomføre undersøkelser',
    'vurdere validitet og reliabilitet i forskning',
  ],
  content: [
    {
      id: 'tof1-1-intro',
      type: 'text',
      content: `# Vitenskapelig metode og forskning

Vitenskapelig metode er en systematisk tilnærming til å tilegne seg ny kunnskap.

## Kjennetegn ved vitenskap

- **Systematisk**: Følger klare prosedyrer
- **Etterprøvbar**: Andre kan gjenta forsøket
- **Objektiv**: Basert på data, ikke meninger
- **Kumulativ**: Bygger på tidligere kunnskap`,
    },
    {
      id: 'tof1-1-def-metode',
      type: 'definition',
      title: 'Vitenskapelig metode',
      content: 'Vitenskapelig metode er en systematisk fremgangsmåte for å tilegne seg og verifisere kunnskap gjennom observasjon, hypotesedannelse, eksperimentering og analyse.',
    },
    {
      id: 'tof1-1-steg',
      type: 'text',
      content: `## Forskningsprosessens steg

1. **Observasjon/problemstilling**
   - Identifiser et fenomen eller problem
   - Formuler forskningsspørsmål

2. **Hypotese**
   - Foreslå en mulig forklaring
   - Må være testbar

3. **Eksperiment/datainnsamling**
   - Design metode for å teste hypotesen
   - Samle inn relevante data

4. **Analyse**
   - Bearbeid og analyser data
   - Se etter mønstre og sammenhenger

5. **Konklusjon**
   - Støtter dataene hypotesen?
   - Foreslå videre forskning`,
    },
    {
      id: 'tof1-1-def-hypotese',
      type: 'definition',
      title: 'Hypotese',
      content: 'En hypotese er en testbar påstand eller forklaring på et fenomen. En god hypotese er spesifikk, målbar og kan falsifiseres (vises å være feil) gjennom eksperimenter.',
    },
    {
      id: 'tof1-1-kvalitet',
      type: 'text',
      content: `## Kvalitet i forskning

### Validitet
- Måler vi det vi skal måle?
- **Intern validitet**: Årsakssammenheng i eksperimentet
- **Ekstern validitet**: Kan resultatene generaliseres?

### Reliabilitet
- Er målingene pålitelige?
- Vil vi få samme resultat ved gjentakelse?
- Reduseres med tilfeldige feil`,
    },
    {
      id: 'tof1-1-example',
      type: 'example',
      title: 'Planlegge et eksperiment',
      problem: 'Planlegg et eksperiment for å undersøke om plantetypen påvirker veksthastighet.',
      solution: `**Eksperimentdesign:**

1. **Hypotese**: Plante A vokser raskere enn plante B under like forhold

2. **Variabler**:
   - Uavhengig: Plantetype (A eller B)
   - Avhengig: Høyde (cm)
   - Kontrollerte: Lys, vann, temperatur, jord

3. **Metode**:
   - Plant 10 av hver type (replikasjon)
   - Mål høyde ukentlig i 6 uker
   - Hold alle andre forhold like

4. **Analyse**: Sammenlign gjennomsnittlig vekst med statistisk test`,
    },
  ],
  exercises: [
    {
      id: 'tof1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det første steget i vitenskapelig metode?',
      options: [
        { id: 'a', text: 'Observasjon og problemstilling', isCorrect: true },
        { id: 'b', text: 'Hypotese', isCorrect: false },
        { id: 'c', text: 'Eksperiment', isCorrect: false },
        { id: 'd', text: 'Konklusjon', isCorrect: false },
      ],
      solution: 'Vitenskapelig metode starter med å observere et fenomen og stille spørsmål.',
    },
    {
      id: 'tof1-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom validitet og reliabilitet.',
      solution: 'Validitet handler om vi måler det vi faktisk vil måle (nøyaktighet). Reliabilitet handler om målingene er konsistente ved gjentakelse (pålitelighet). Et mål kan være reliabelt uten å være valid (f.eks. en vekt som konsekvent viser 1 kg for mye).',
    },
    {
      id: 'tof1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner en god hypotese?',
      options: [
        { id: 'a', text: 'Den er testbar og kan falsifiseres', isCorrect: true },
        { id: 'b', text: 'Den er alltid sann', isCorrect: false },
        { id: 'c', text: 'Den beskriver en mening', isCorrect: false },
        { id: 'd', text: 'Den kan ikke testes', isCorrect: false },
      ],
      solution: 'En god hypotese må kunne testes og potensielt vises feil. Hvis en hypotese ikke kan falsifiseres, er den ikke vitenskapelig.',
    },
    {
      id: 'tof1-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor kontrollgrupper er viktige i eksperimenter.',
      solution: 'Kontrollgrupper gir en baseline å sammenligne med. Uten kontrollgruppe vet vi ikke om endringer skyldes det vi tester (uavhengig variabel) eller andre faktorer. Kontrollgruppen behandles likt bortsett fra den variabelen vi undersøker.',
    },
    {
      id: 'tof1-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en uavhengig variabel?',
      options: [
        { id: 'a', text: 'Variabelen forskeren endrer', isCorrect: true },
        { id: 'b', text: 'Variabelen som måles', isCorrect: false },
        { id: 'c', text: 'Variabler som holdes konstante', isCorrect: false },
        { id: 'd', text: 'Tilfeldige feil', isCorrect: false },
      ],
      solution: 'Den uavhengige variabelen er det forskeren manipulerer for å se effekten på den avhengige variabelen.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Datainnsamling og analyse
// ============================================================================

export const CHAPTER_TOF_1_2: TextbookChapter = {
  id: 'tof-1-2',
  courseId: 'tof-1',
  chapterNumber: '2',
  title: 'Datainnsamling og analyse',
  description: 'Metoder for datainnsamling og grunnleggende statistikk.',
  estimatedMinutes: 80,
  competenceGoals: [
    'velge egnede metoder for datainnsamling',
    'bearbeide og presentere data grafisk',
    'bruke grunnleggende statistiske mål',
  ],
  content: [
    {
      id: 'tof1-2-intro',
      type: 'text',
      content: `# Datainnsamling og analyse

God forskning krever systematisk datainnsamling og riktig analyse.

## Datatyper

- **Kvantitative data**: Tall og målinger
- **Kvalitative data**: Beskrivelser og kategorier`,
    },
    {
      id: 'tof1-2-def-data',
      type: 'definition',
      title: 'Data',
      content: 'Data er informasjon samlet inn systematisk for analyse. Rådata må bearbeides og analyseres før vi kan trekke konklusjoner.',
    },
    {
      id: 'tof1-2-innsamling',
      type: 'text',
      content: `## Metoder for datainnsamling

### Eksperiment
- Kontrollerte forhold
- Manipulerer variabler
- Etablerer årsakssammenheng

### Observasjon
- Registrerer naturlige fenomener
- Uten å påvirke situasjonen

### Spørreundersøkelse
- Samler meninger og opplevelser
- Kan nå mange respondenter

### Intervju
- Dybdeinformasjon
- Kvalitative data`,
    },
    {
      id: 'tof1-2-statistikk',
      type: 'text',
      content: `## Grunnleggende statistikk

### Sentralmål
- **Gjennomsnitt** (middelverdi): Sum/antall
- **Median**: Midterste verdi når sortert
- **Modus**: Hyppigste verdi

### Spredningsmål
- **Variasjonsbredde**: Max - Min
- **Standardavvik**: Hvor mye verdiene varierer fra gjennomsnittet`,
    },
    {
      id: 'tof1-2-def-standardavvik',
      type: 'definition',
      title: 'Standardavvik',
      content: 'Standardavviket er et mål på hvor mye enkeltmålingene i gjennomsnitt avviker fra middelverdien. Lavt standardavvik betyr lite spredning, høyt standardavvik betyr stor spredning.',
    },
    {
      id: 'tof1-2-example',
      type: 'example',
      title: 'Beregne statistiske mål',
      problem: 'Beregn gjennomsnitt, median og variasjonsbredde for: 12, 15, 14, 18, 11',
      solution: `**Løsning:**

1. **Sortert**: 11, 12, 14, 15, 18

2. **Gjennomsnitt**:
   (11 + 12 + 14 + 15 + 18) / 5 = 70 / 5 = **14**

3. **Median**:
   Midterste verdi = **14**

4. **Variasjonsbredde**:
   18 - 11 = **7**`,
    },
  ],
  exercises: [
    {
      id: 'tof1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er medianen i datasettet: 3, 7, 8, 9, 12?',
      options: [
        { id: 'a', text: '8', isCorrect: true },
        { id: 'b', text: '7.8', isCorrect: false },
        { id: 'c', text: '9', isCorrect: false },
        { id: 'd', text: '7', isCorrect: false },
      ],
      solution: 'Medianen er den midterste verdien i et sortert datasett. Med 5 verdier er det den tredje: 8.',
    },
    {
      id: 'tof1-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beregn gjennomsnittet av: 25, 30, 22, 28, 35',
      solution: 'Gjennomsnitt = (25 + 30 + 22 + 28 + 35) / 5 = 140 / 5 = 28',
    },
    {
      id: 'tof1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken metode er best for å etablere årsakssammenheng?',
      options: [
        { id: 'a', text: 'Eksperiment med kontrollgruppe', isCorrect: true },
        { id: 'b', text: 'Observasjon', isCorrect: false },
        { id: 'c', text: 'Spørreundersøkelse', isCorrect: false },
        { id: 'd', text: 'Intervju', isCorrect: false },
      ],
      solution: 'Bare eksperimenter med kontrollgrupper kan etablere årsakssammenheng fordi vi kan isolere effekten av én variabel.',
    },
    {
      id: 'tof1-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom kvantitative og kvalitative data.',
      solution: 'Kvantitative data er tall og målinger som kan analyseres statistisk (høyde, temperatur, antall). Kvalitative data er beskrivende og kategoriske (farger, opplevelser, meninger). Kvantitative svarer på "hvor mye", kvalitative på "hvordan" og "hvorfor".',
    },
    {
      id: 'tof1-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser standardavviket?',
      options: [
        { id: 'a', text: 'Spredningen i dataene', isCorrect: true },
        { id: 'b', text: 'Gjennomsnittsverdien', isCorrect: false },
        { id: 'c', text: 'Antall målinger', isCorrect: false },
        { id: 'd', text: 'Den høyeste verdien', isCorrect: false },
      ],
      solution: 'Standardavviket viser hvor mye verdiene typisk avviker fra gjennomsnittet - altså spredningen i datasettet.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Teknologihistorie og utvikling
// ============================================================================

export const CHAPTER_TOF_1_3: TextbookChapter = {
  id: 'tof-1-3',
  courseId: 'tof-1',
  chapterNumber: '3',
  title: 'Teknologihistorie og utvikling',
  description: 'Teknologiske revolusjoner og teknologiens rolle i samfunnet.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for sentrale teknologiske revolusjoner',
    'drøfte samspillet mellom teknologi og samfunn',
    'vurdere teknologiens konsekvenser',
  ],
  content: [
    {
      id: 'tof1-3-intro',
      type: 'text',
      content: `# Teknologihistorie og utvikling

Teknologi har formet menneskelig sivilisasjon og endrer samfunnet kontinuerlig.

## Hva er teknologi?

Teknologi er bruk av vitenskapelig kunnskap til praktiske formål - verktøy, maskiner, teknikker og systemer.`,
    },
    {
      id: 'tof1-3-def-teknologi',
      type: 'definition',
      title: 'Teknologi',
      content: 'Teknologi er anvendelse av vitenskapelig kunnskap for praktiske formål. Det inkluderer fysiske verktøy, metoder, teknikker og prosesser for å løse problemer og oppfylle behov.',
    },
    {
      id: 'tof1-3-revolusjoner',
      type: 'text',
      content: `## Teknologiske revolusjoner

### 1. Jordbruksrevolusjonen (ca. 10 000 f.Kr.)
- Fra jeger/samler til bofaste
- Dyrkingstekniker, irrigasjon
- Befolkningsvekst, bydannelse

### 2. Industrielle revolusjon (1760-1840)
- Dampmaskinen
- Fabrikker og masseproduksjon
- Urbanisering

### 3. Elektrisk revolusjon (1880-1920)
- Elektrisk kraft og lys
- Telefon, radio
- Nye industrier

### 4. Digital revolusjon (1970-)
- Datamaskiner og internett
- Smarttelefoner
- Kunstig intelligens`,
    },
    {
      id: 'tof1-3-konsekvenser',
      type: 'text',
      content: `## Teknologiens konsekvenser

### Positive
- Økt produktivitet og velstand
- Bedre helse og lengre liv
- Kommunikasjon og informasjonstilgang
- Løsninger på miljøproblemer

### Negative
- Miljøbelastning og klimaendringer
- Arbeidsledighet fra automatisering
- Digitale trusler (personvern, sikkerhet)
- Ulikhet (digital kløft)`,
    },
    {
      id: 'tof1-3-def-baerekraft',
      type: 'definition',
      title: 'Bærekraftig teknologi',
      content: 'Bærekraftig teknologi er teknologi som møter dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Det inkluderer fornybar energi, gjenvinning og ressurseffektive løsninger.',
    },
    {
      id: 'tof1-3-example',
      type: 'example',
      title: 'Dampmaskinens betydning',
      problem: 'Analyser dampmaskinens betydning for samfunnsutviklingen.',
      solution: `**Dampmaskinens konsekvenser:**

1. **Industri**: Muliggjorde fabrikker uavhengig av vannkraft
2. **Transport**: Tog og dampskip revolusjonerte handel
3. **Urbanisering**: Folk flyttet til byer for fabrikkarbeid
4. **Sosiale endringer**: Ny arbeiderklasse, fagforeninger
5. **Miljø**: Forurensning, kullforbruk
6. **Global handel**: Raskere transport av varer`,
    },
  ],
  exercises: [
    {
      id: 'tof1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken oppfinnelse kjennetegner den industrielle revolusjon?',
      options: [
        { id: 'a', text: 'Dampmaskinen', isCorrect: true },
        { id: 'b', text: 'Internett', isCorrect: false },
        { id: 'c', text: 'Telefonen', isCorrect: false },
        { id: 'd', text: 'Plogen', isCorrect: false },
      ],
      solution: 'Dampmaskinen var nøkkeloppfinnelsen i den industrielle revolusjon og muliggjorde fabrikker og tog.',
    },
    {
      id: 'tof1-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre positive og tre negative konsekvenser av teknologisk utvikling.',
      solution: 'Positive: 1) Økt produktivitet og velstand. 2) Bedre helse og lengre levetid. 3) Lettere kommunikasjon og informasjonstilgang. Negative: 1) Miljøforurensning og klimaendringer. 2) Tap av arbeidsplasser til automatisering. 3) Personvernproblemer og digital overvåkning.',
    },
    {
      id: 'tof1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når startet den digitale revolusjonen?',
      options: [
        { id: 'a', text: 'Ca. 1970', isCorrect: true },
        { id: 'b', text: 'Ca. 1900', isCorrect: false },
        { id: 'c', text: 'Ca. 1950', isCorrect: false },
        { id: 'd', text: 'Ca. 2000', isCorrect: false },
      ],
      solution: 'Den digitale revolusjonen startet rundt 1970 med utviklingen av mikroprosessorer og personlige datamaskiner.',
    },
    {
      id: 'tof1-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan internett har endret samfunnet.',
      solution: 'Internett har endret: 1) Kommunikasjon - instant global kontakt. 2) Handel - netthandel, global markedsplass. 3) Arbeid - hjemmekontor, gig-økonomi. 4) Underholdning - streaming, sosiale medier. 5) Demokrati - informasjonstilgang, men også falske nyheter. 6) Utdanning - online læring, tilgjengelig kunnskap.',
    },
    {
      id: 'tof1-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med "digital kløft"?',
      options: [
        { id: 'a', text: 'Ulikhet i tilgang til digital teknologi', isCorrect: true },
        { id: 'b', text: 'En fysisk sprekk i en datamaskin', isCorrect: false },
        { id: 'c', text: 'Forskjell mellom gamle og nye programmer', isCorrect: false },
        { id: 'd', text: 'Mangel på internettforbindelse', isCorrect: false },
      ],
      solution: 'Digital kløft beskriver ulikheten mellom de som har tilgang til og kompetanse i digital teknologi, og de som ikke har det.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Innovasjon og design
// ============================================================================

export const CHAPTER_TOF_1_4: TextbookChapter = {
  id: 'tof-1-4',
  courseId: 'tof-1',
  chapterNumber: '4',
  title: 'Innovasjon og design',
  description: 'Designprosessen og innovasjonsmetoder.',
  estimatedMinutes: 75,
  competenceGoals: [
    'anvende designprosessen på praktiske problemer',
    'generere og evaluere ideer systematisk',
    'lage prototyper og teste løsninger',
  ],
  content: [
    {
      id: 'tof1-4-intro',
      type: 'text',
      content: `# Innovasjon og design

Innovasjon handler om å skape nye løsninger på problemer. Design er prosessen fra idé til ferdig produkt.

## Innovasjon vs. oppfinnelse

- **Oppfinnelse**: Å skape noe helt nytt
- **Innovasjon**: Å ta i bruk nye ideer praktisk`,
    },
    {
      id: 'tof1-4-def-design',
      type: 'definition',
      title: 'Designprosessen',
      content: 'Designprosessen er en systematisk metode for problemløsning som går fra å forstå problemet, via idégenerering og prototyping, til testing og forbedring av løsninger.',
    },
    {
      id: 'tof1-4-prosess',
      type: 'text',
      content: `## Designprosessens faser

### 1. Empati / Forstå
- Hvem er brukeren?
- Hva er problemet?
- Hvilke behov skal dekkes?

### 2. Definere
- Formuler problemet tydelig
- Lag en kravspesifikasjon
- Prioriter behov

### 3. Idégenerering
- Brainstorming
- Skisser og konsepter
- Ingen ideer er for ville

### 4. Prototype
- Lag enkle modeller
- Test konsepter raskt
- Lær av feil

### 5. Test
- Brukertesting
- Samle tilbakemeldinger
- Iterer og forbedre`,
    },
    {
      id: 'tof1-4-metoder',
      type: 'text',
      content: `## Kreative metoder

### Brainstorming
- Kvantitet over kvalitet
- Ingen kritikk under idémyldring
- Bygg på andres ideer

### Mind-mapping
- Visualiser sammenhenger
- Start med sentralt tema
- Forgren ut med assosiasjoner

### SCAMPER
- **S**ubstitute - Erstatte?
- **C**ombine - Kombinere?
- **A**dapt - Tilpasse?
- **M**odify - Endre?
- **P**ut to other use - Annen bruk?
- **E**liminate - Fjerne?
- **R**everse - Snu om?`,
    },
    {
      id: 'tof1-4-def-prototype',
      type: 'definition',
      title: 'Prototype',
      content: 'En prototype er en tidlig, forenklet versjon av et produkt som brukes til testing og utvikling. Prototyper kan variere fra enkle papirmodeller til funksjonelle demonstratorer.',
    },
    {
      id: 'tof1-4-example',
      type: 'example',
      title: 'Designe en vannflaske',
      problem: 'Bruk designprosessen for å forbedre en vannflaske for syklister.',
      solution: `**Designprosess for sykkelvannflaske:**

1. **Empati**: Observere syklister, intervjue om problemer
   - Vanskelig å drikke mens man sykler
   - Flasken faller ut av holderen

2. **Definere**: "Design en vannflaske som kan brukes med én hånd under sykling"

3. **Idégenerere**:
   - Sugemunnstykke
   - Automatisk åpning
   - Bedre grep

4. **Prototype**: 3D-printe ulike munnstykker

5. **Test**: La syklister prøve og gi tilbakemelding`,
    },
  ],
  exercises: [
    {
      id: 'tof1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er det første steget i designprosessen?',
      options: [
        { id: 'a', text: 'Empati / Forstå problemet', isCorrect: true },
        { id: 'b', text: 'Lage prototype', isCorrect: false },
        { id: 'c', text: 'Brainstorming', isCorrect: false },
        { id: 'd', text: 'Testing', isCorrect: false },
      ],
      solution: 'Man må først forstå brukeren og problemet før man kan begynne å designe løsninger.',
    },
    {
      id: 'tof1-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom oppfinnelse og innovasjon.',
      solution: 'Oppfinnelse er å skape noe helt nytt som ikke har eksistert før (f.eks. lyspæren). Innovasjon er å ta i bruk nye ideer på en praktisk måte som skaper verdi (f.eks. LED-belysning i daglig bruk). Innovasjon kan bygge på eksisterende oppfinnelser.',
    },
    {
      id: 'tof1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva står "S" for i SCAMPER?',
      options: [
        { id: 'a', text: 'Substitute (Erstatte)', isCorrect: true },
        { id: 'b', text: 'Scale (Skalere)', isCorrect: false },
        { id: 'c', text: 'Simplify (Forenkle)', isCorrect: false },
        { id: 'd', text: 'Start (Starte)', isCorrect: false },
      ],
      solution: 'SCAMPER er en kreativ metode der S står for Substitute - kan vi erstatte noe med noe annet?',
    },
    {
      id: 'tof1-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor er prototyping viktig i designprosessen?',
      solution: 'Prototyping er viktig fordi det: 1) Gjør abstrakte ideer konkrete og testbare. 2) Avdekker feil tidlig når de er billige å fikse. 3) Muliggjør brukertesting og tilbakemelding. 4) Kommuniserer ideer bedre enn beskrivelser. 5) Fremmer iterativ forbedring.',
    },
    {
      id: 'tof1-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en viktig regel under brainstorming?',
      options: [
        { id: 'a', text: 'Ingen kritikk av ideer', isCorrect: true },
        { id: 'b', text: 'Bare én person snakker', isCorrect: false },
        { id: 'c', text: 'Kun realistiske ideer', isCorrect: false },
        { id: 'd', text: 'Anonyme forslag', isCorrect: false },
      ],
      solution: 'Under brainstorming skal man ikke kritisere ideer, da dette hemmer kreativiteten. Evaluering kommer etterpå.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Elektronikk og mikrokontrollere
// ============================================================================

export const CHAPTER_TOF_1_5: TextbookChapter = {
  id: 'tof-1-5',
  courseId: 'tof-1',
  chapterNumber: '5',
  title: 'Elektronikk og mikrokontrollere',
  description: 'Grunnleggende elektronikk og Arduino.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forstå grunnleggende elektroniske komponenter',
    'bygge enkle kretser',
    'programmere mikrokontrollere',
  ],
  content: [
    {
      id: 'tof1-5-intro',
      type: 'text',
      content: `# Elektronikk og mikrokontrollere

Elektronikk er grunnlaget for moderne teknologi. Mikrokontrollere lar oss lage smarte enheter.

## Grunnleggende begreper

- **Spenning (V)**: Elektrisk trykk, måles i volt
- **Strøm (I)**: Elektronflyt, måles i ampere
- **Motstand (R)**: Begrenser strømmen, måles i ohm`,
    },
    {
      id: 'tof1-5-def-ohm',
      type: 'definition',
      title: 'Ohms lov',
      content: 'Ohms lov beskriver sammenhengen mellom spenning, strøm og motstand: V = I × R. Spenning (volt) = Strøm (ampere) × Motstand (ohm).',
    },
    {
      id: 'tof1-5-komponenter',
      type: 'text',
      content: `## Viktige komponenter

### Motstand
- Begrenser strømflyt
- Fargekoder viser verdi
- Brukes til å beskytte LED-er

### LED (lysdiode)
- Lyser når strøm går gjennom
- Har polaritet (+ og -)
- Krever motstand

### Bryter
- Åpner/lukker kretsen
- Trykknapp, vipper, etc.

### Kondensator
- Lagrer elektrisk energi
- Jevner ut spenning

### Transistor
- Elektronisk bryter
- Forsterker signaler`,
    },
    {
      id: 'tof1-5-arduino',
      type: 'text',
      content: `## Arduino mikrokontroller

Arduino er en populær plattform for å lære elektronikk og programmering.

### Oppbygging
- **Mikroprosessor**: Kjører programmet
- **Digitale pinner**: Input/output (0-13)
- **Analoge pinner**: Leser sensorer (A0-A5)
- **Strøm**: 5V og GND

### Programmering
- Skrives i Arduino IDE
- C/C++-basert språk
- setup() kjører én gang
- loop() kjører kontinuerlig`,
    },
    {
      id: 'tof1-5-def-mikrokontroller',
      type: 'definition',
      title: 'Mikrokontroller',
      content: 'En mikrokontroller er en liten datamaskin på én brikke som kan programmeres til å styre elektroniske enheter. Den inneholder prosessor, minne og inn/ut-porter.',
    },
    {
      id: 'tof1-5-example',
      type: 'example',
      title: 'Blinkende LED',
      problem: 'Skriv et Arduino-program som blinker en LED.',
      solution: `**Arduino-kode for blinkende LED:**

\`\`\`cpp
// Pin 13 har innebygd LED
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);  // LED på
  delay(1000);                  // Vent 1 sekund
  digitalWrite(ledPin, LOW);   // LED av
  delay(1000);                  // Vent 1 sekund
}
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'tof1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva måles i ohm?',
      options: [
        { id: 'a', text: 'Motstand', isCorrect: true },
        { id: 'b', text: 'Spenning', isCorrect: false },
        { id: 'c', text: 'Strøm', isCorrect: false },
        { id: 'd', text: 'Effekt', isCorrect: false },
      ],
      solution: 'Motstand (R) måles i ohm (Ω). Spenning måles i volt, strøm i ampere.',
    },
    {
      id: 'tof1-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Bruk Ohms lov til å finne strømmen når spenningen er 9V og motstanden er 300Ω.',
      solution: 'Ohms lov: V = I × R, altså I = V / R = 9V / 300Ω = 0.03A = 30mA',
    },
    {
      id: 'tof1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor trenger en LED motstand?',
      options: [
        { id: 'a', text: 'For å begrense strømmen og unngå at LED-en brenner', isCorrect: true },
        { id: 'b', text: 'For å øke lysstyrken', isCorrect: false },
        { id: 'c', text: 'For å lagre energi', isCorrect: false },
        { id: 'd', text: 'For å endre fargen', isCorrect: false },
      ],
      solution: 'Uten motstand vil for mye strøm gå gjennom LED-en og ødelegge den. Motstanden begrenser strømmen til et trygt nivå.',
    },
    {
      id: 'tof1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen på setup() og loop() i Arduino?',
      solution: 'setup() kjøres én gang når Arduino starter opp - brukes til initialisering (f.eks. sette pinnemodus). loop() kjøres kontinuerlig etter setup() - her legges hovedprogrammet som skal gjentas.',
    },
    {
      id: 'tof1-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva gjør digitalWrite(13, HIGH)?',
      options: [
        { id: 'a', text: 'Setter pinne 13 til høy spenning (5V)', isCorrect: true },
        { id: 'b', text: 'Leser verdien fra pinne 13', isCorrect: false },
        { id: 'c', text: 'Slår av pinne 13', isCorrect: false },
        { id: 'd', text: 'Definerer pinne 13', isCorrect: false },
      ],
      solution: 'digitalWrite(pin, HIGH) setter den digitale pinnen til 5V, som kan tenne en LED eller gi signal til andre komponenter.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Programmering og styresystemer
// ============================================================================

export const CHAPTER_TOF_1_6: TextbookChapter = {
  id: 'tof-1-6',
  courseId: 'tof-1',
  chapterNumber: '6',
  title: 'Programmering og styresystemer',
  description: 'Programmering for styring av fysiske systemer.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke programmeringskonsepter for styring',
    'lese sensorer og styre aktuatorer',
    'implementere logikk og beslutninger',
  ],
  content: [
    {
      id: 'tof1-6-intro',
      type: 'text',
      content: `# Programmering og styresystemer

Programmering gjør det mulig å automatisere og styre fysiske systemer basert på sensorer og logikk.

## Sensor → Prosessering → Aktuator

Dette er grunnprinsippet i styresystemer:
1. **Sensor**: Måler omgivelsene
2. **Prosessering**: Mikrokontroller analyserer
3. **Aktuator**: Utfører handling`,
    },
    {
      id: 'tof1-6-def-sensor',
      type: 'definition',
      title: 'Sensor og aktuator',
      content: 'En sensor måler fysiske egenskaper (temperatur, lys, avstand) og konverterer til elektriske signaler. En aktuator utfører fysiske handlinger (motor, LED, høyttaler) basert på elektriske signaler.',
    },
    {
      id: 'tof1-6-sensorer',
      type: 'text',
      content: `## Vanlige sensorer

### Temperatursensor (f.eks. TMP36)
- Gir analog spenning proporsjonal med temperatur
- Brukes med analogRead()

### Lyssensor (LDR)
- Motstand endres med lysintensitet
- Brukes i spenningsdeler

### Ultralydsensor (HC-SR04)
- Måler avstand med lyd
- Sender ut puls, måler retur

### Trykknapp
- Digital input
- Trenger ofte pull-up motstand`,
    },
    {
      id: 'tof1-6-programmering',
      type: 'text',
      content: `## Programmeringskonsepter

### Variabler
- Lagrer verdier
- int, float, bool

### If-setninger
\`\`\`cpp
if (temperatur > 25) {
  // Slå på vifte
}
\`\`\`

### Løkker
\`\`\`cpp
for (int i = 0; i < 10; i++) {
  // Gjenta 10 ganger
}
\`\`\`

### Funksjoner
\`\`\`cpp
int lesTemperatur() {
  return analogRead(A0);
}
\`\`\``,
    },
    {
      id: 'tof1-6-def-pwm',
      type: 'definition',
      title: 'PWM (Pulse Width Modulation)',
      content: 'PWM er en teknikk for å simulere analog utgang med digitale signaler ved å variere pulsbredden. Brukes til å dimme LED-er og styre motorhastighet.',
    },
    {
      id: 'tof1-6-example',
      type: 'example',
      title: 'Temperaturstyrt vifte',
      problem: 'Skriv kode som slår på en vifte når temperaturen overstiger 25°C.',
      solution: `**Arduino-kode:**

\`\`\`cpp
int tempPin = A0;
int viftePin = 9;

void setup() {
  pinMode(viftePin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorVerdi = analogRead(tempPin);
  float temperatur = (sensorVerdi * 5.0 / 1024 - 0.5) * 100;

  Serial.print("Temperatur: ");
  Serial.println(temperatur);

  if (temperatur > 25) {
    digitalWrite(viftePin, HIGH);  // Vifte på
  } else {
    digitalWrite(viftePin, LOW);   // Vifte av
  }

  delay(1000);
}
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'tof1-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva gjør en sensor?',
      options: [
        { id: 'a', text: 'Måler fysiske egenskaper', isCorrect: true },
        { id: 'b', text: 'Utfører fysiske handlinger', isCorrect: false },
        { id: 'c', text: 'Lagrer data', isCorrect: false },
        { id: 'd', text: 'Viser informasjon', isCorrect: false },
      ],
      solution: 'Sensorer måler fysiske egenskaper (temperatur, lys, trykk) og konverterer til elektriske signaler som kan leses av en mikrokontroller.',
    },
    {
      id: 'tof1-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom analog og digital input.',
      solution: 'Digital input har bare to tilstander: HIGH (5V) eller LOW (0V), som ja/nei. Analog input kan lese mange verdier i et spekter (0-1023 på Arduino), som representerer forskjellige spenningsnivåer. Digitale brukes til brytere, analoge til sensorer.',
    },
    {
      id: 'tof1-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva brukes PWM til?',
      options: [
        { id: 'a', text: 'Å simulere analog utgang for dimming og hastighet', isCorrect: true },
        { id: 'b', text: 'Å lese analoge sensorer', isCorrect: false },
        { id: 'c', text: 'Å kommunisere med andre enheter', isCorrect: false },
        { id: 'd', text: 'Å lagre data permanent', isCorrect: false },
      ],
      solution: 'PWM (Pulse Width Modulation) varierer hvor lenge signalet er HIGH/LOW for å simulere verdier mellom 0 og 5V, brukes til dimming og motorstyring.',
    },
    {
      id: 'tof1-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv en if-setning som slår på en LED hvis lysverdien er under 500.',
      solution: '```cpp\nint lysVerdi = analogRead(A0);\nif (lysVerdi < 500) {\n  digitalWrite(ledPin, HIGH);\n} else {\n  digitalWrite(ledPin, LOW);\n}\n```',
    },
    {
      id: 'tof1-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en aktuator?',
      options: [
        { id: 'a', text: 'En komponent som utfører fysiske handlinger', isCorrect: true },
        { id: 'b', text: 'En komponent som måler temperatur', isCorrect: false },
        { id: 'c', text: 'En type prosessor', isCorrect: false },
        { id: 'd', text: 'En type motstand', isCorrect: false },
      ],
      solution: 'Aktuatorer utfører fysiske handlinger basert på elektriske signaler, f.eks. motorer, LED-er, høyttalere, vifter.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Energi og bærekraft
// ============================================================================

export const CHAPTER_TOF_1_7: TextbookChapter = {
  id: 'tof-1-7',
  courseId: 'tof-1',
  chapterNumber: '7',
  title: 'Energi og bærekraft',
  description: 'Energikilder, energiomforming og bærekraftig utvikling.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare ulike energikilder og deres miljøpåvirkning',
    'analysere energiomforming og virkningsgrad',
    'vurdere teknologiske løsninger for bærekraft',
  ],
  content: [
    {
      id: 'tof1-7-intro',
      type: 'text',
      content: `# Energi og bærekraft

Energi er evnen til å utføre arbeid. Vårt energiforbruk har store konsekvenser for miljø og klima.

## Energiformer

- Kinetisk (bevegelse)
- Potensiell (posisjon)
- Termisk (varme)
- Elektrisk
- Kjemisk
- Strålings-`,
    },
    {
      id: 'tof1-7-def-energi',
      type: 'definition',
      title: 'Energi og energibevaring',
      content: 'Energi er evnen til å utføre arbeid. Energi kan ikke skapes eller ødelegges, bare omformes fra én type til en annen (energibevaringsloven).',
    },
    {
      id: 'tof1-7-kilder',
      type: 'text',
      content: `## Energikilder

### Fossile (ikke-fornybare)
- **Olje**: Transport, plast
- **Gass**: Oppvarming, kraftverk
- **Kull**: Kraftverk
- Problem: CO₂-utslipp, klimaendringer

### Fornybare
- **Vannkraft**: Norges hovedkilde
- **Vindkraft**: Voksende sektor
- **Solenergi**: Sol til strøm/varme
- **Bioenergi**: Fra biologisk materiale
- **Geotermisk**: Jordvarme

### Kjernekraft
- Fisjon: Spalting av uran
- Fusjon: (fremtid) Sammenslåing av hydrogen`,
    },
    {
      id: 'tof1-7-virkningsgrad',
      type: 'text',
      content: `## Virkningsgrad

Virkningsgrad = (Nyttig energi ut / Energi inn) × 100%

### Eksempler
- Glødelampe: ~5%
- LED-lampe: ~40%
- Forbrenningsmotor: ~25%
- Elbil-motor: ~85%
- Vannkraftverk: ~90%

Høy virkningsgrad betyr lite energitap.`,
    },
    {
      id: 'tof1-7-def-baerekraft',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: 'Bærekraftig utvikling dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter. Det omfatter miljø, økonomi og sosiale forhold.',
    },
    {
      id: 'tof1-7-example',
      type: 'example',
      title: 'Sammenligne energikilder',
      problem: 'Sammenlign miljøpåvirkningen av et kullkraftverk og et vindkraftverk.',
      solution: `**Sammenligning:**

| Faktor | Kullkraftverk | Vindkraftverk |
|--------|---------------|---------------|
| CO₂-utslipp | Høye (klimaendringer) | Ingen i drift |
| Luftforurensning | Partikler, SO₂, NOx | Ingen |
| Arealbruk | Gruvedrift, aske | Turbiner, kabler |
| Visuell påvirkning | Røyk, kjøletårn | Synlige turbiner |
| Støy | Kontinuerlig drift | Lavfrekvent |
| Pålitelighet | Stabil, regulerbar | Væravhengig |`,
    },
  ],
  exercises: [
    {
      id: 'tof1-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken energikilde er Norges hovedkilde for elektrisitet?',
      options: [
        { id: 'a', text: 'Vannkraft', isCorrect: true },
        { id: 'b', text: 'Vindkraft', isCorrect: false },
        { id: 'c', text: 'Olje', isCorrect: false },
        { id: 'd', text: 'Kjernekraft', isCorrect: false },
      ],
      solution: 'Ca. 90% av Norges strømproduksjon kommer fra vannkraft.',
    },
    {
      id: 'tof1-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'En motor bruker 1000 J energi og produserer 300 J nyttig arbeid. Beregn virkningsgraden.',
      solution: 'Virkningsgrad = (Nyttig energi / Tilført energi) × 100% = (300 J / 1000 J) × 100% = 30%',
    },
    {
      id: 'tof1-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken energiomforming har høyest virkningsgrad?',
      options: [
        { id: 'a', text: 'Elektromotor i elbil', isCorrect: true },
        { id: 'b', text: 'Forbrenningsmotor', isCorrect: false },
        { id: 'c', text: 'Glødelampe', isCorrect: false },
        { id: 'd', text: 'Dampturbin', isCorrect: false },
      ],
      solution: 'Elektromotorer i elbiler har typisk 85-95% virkningsgrad, langt høyere enn forbrenningsmotorer (20-30%).',
    },
    {
      id: 'tof1-7-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft fordeler og ulemper med kjernekraft.',
      solution: 'Fordeler: 1) Ingen CO₂-utslipp i drift. 2) Høy energitetthet. 3) Stabil kraftproduksjon. 4) Lite arealbehov. Ulemper: 1) Radioaktivt avfall (lagring). 2) Ulykkesrisiko (Tsjernobyl, Fukushima). 3) Høye byggekostnader. 4) Begrenset uranressurs. 5) Kan misbrukes til våpen.',
    },
    {
      id: 'tof1-7-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva sier energibevaringsloven?',
      options: [
        { id: 'a', text: 'Energi kan ikke skapes eller ødelegges, bare omformes', isCorrect: true },
        { id: 'b', text: 'All energi går tapt til varme', isCorrect: false },
        { id: 'c', text: 'Energi må lagres i batterier', isCorrect: false },
        { id: 'd', text: 'Energi kan skapes fra ingenting', isCorrect: false },
      ],
      solution: 'Energibevaringsloven sier at total energi i et lukket system er konstant - energi omformes mellom typer men forsvinner ikke.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Materialer og konstruksjon
// ============================================================================

export const CHAPTER_TOF_1_8: TextbookChapter = {
  id: 'tof-1-8',
  courseId: 'tof-1',
  chapterNumber: '8',
  title: 'Materialer og konstruksjon',
  description: 'Materialegenskaper og konstruksjonsprinsipper.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive egenskapene til ulike materialer',
    'velge egnede materialer for konstruksjoner',
    'forstå grunnleggende statikk og stabilitet',
  ],
  content: [
    {
      id: 'tof1-8-intro',
      type: 'text',
      content: `# Materialer og konstruksjon

Valg av materialer er avgjørende for konstruksjoners funksjon, holdbarhet og bærekraft.

## Materialgrupper

- Metaller
- Plast/polymerer
- Tre
- Keramikk/glass
- Kompositter`,
    },
    {
      id: 'tof1-8-def-styrke',
      type: 'definition',
      title: 'Styrke og stivhet',
      content: 'Styrke er materialets evne til å motstå brudd. Stivhet er evnen til å motstå deformasjon. Et materiale kan være stivt men sprøtt (glass) eller mykt men seigt (gummi).',
    },
    {
      id: 'tof1-8-egenskaper',
      type: 'text',
      content: `## Materialegenskaper

### Mekaniske
- **Strekkstyrke**: Motstand mot strekking
- **Hardhet**: Motstand mot inntrykk
- **Seighet**: Energi før brudd
- **Elastisitet**: Returnerer til form

### Andre egenskaper
- **Tetthet**: Masse per volum
- **Varmeledning**: Leder varme?
- **Korrosjon**: Motstand mot rust/råte
- **Elektrisk ledning**: Leder eller isolator`,
    },
    {
      id: 'tof1-8-materialer',
      type: 'text',
      content: `## Materialtyper

### Metaller
- Stål: Sterkt, stivt, ruster
- Aluminium: Lett, korrosjonsbestandig
- Kopper: God leder

### Plast
- Termoplast: Kan smeltes om
- Herdeplast: Kan ikke smeltes
- Lett, formbart, rimelig

### Tre
- Fornybar, lett å bearbeide
- Anisotropt (styrke avhenger av retning)

### Kompositter
- Kombinerer materialer
- F.eks. karbonfiber, glassfiber`,
    },
    {
      id: 'tof1-8-def-statikk',
      type: 'definition',
      title: 'Statikk',
      content: 'Statikk er læren om krefter i likevekt. En konstruksjon er i likevekt når summen av alle krefter og momenter er null - den står stille.',
    },
    {
      id: 'tof1-8-example',
      type: 'example',
      title: 'Velge materiale for sykkelramme',
      problem: 'Hvilke faktorer bør vurderes ved valg av materiale til sykkelramme?',
      solution: `**Materialvalg for sykkelramme:**

| Materiale | Fordeler | Ulemper |
|-----------|----------|---------|
| Stål | Sterkt, billig, reparerbart | Tungt, kan ruste |
| Aluminium | Lett, korroderer ikke | Mindre komfort, ikke reparerbart |
| Karbon | Veldig lett, stivt | Dyrt, kan ikke sveises |
| Titan | Sterkt, lett, korroderer ikke | Svært dyrt |

**Valg avhenger av**: Bruk (racing vs. tur), budsjett, vekt, holdbarhet`,
    },
  ],
  exercises: [
    {
      id: 'tof1-8-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket materiale er lettest av disse?',
      options: [
        { id: 'a', text: 'Aluminium', isCorrect: true },
        { id: 'b', text: 'Stål', isCorrect: false },
        { id: 'c', text: 'Kopper', isCorrect: false },
        { id: 'd', text: 'Bly', isCorrect: false },
      ],
      solution: 'Aluminium har tetthet ca. 2.7 g/cm³, mens stål har ca. 7.8 g/cm³.',
    },
    {
      id: 'tof1-8-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom styrke og stivhet.',
      solution: 'Styrke er materialets evne til å tåle belastning før det går i stykker (bruddgrense). Stivhet er evnen til å motstå deformasjon under belastning (hvor mye det bøyer seg). Et materiale kan være stivt men sprøtt (glass) eller mykt men sterkt (gummi).',
    },
    {
      id: 'tof1-8-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en kompositt?',
      options: [
        { id: 'a', text: 'Et materiale laget av flere ulike materialer kombinert', isCorrect: true },
        { id: 'b', text: 'En type plast', isCorrect: false },
        { id: 'c', text: 'Et rent metall', isCorrect: false },
        { id: 'd', text: 'Naturlig tre', isCorrect: false },
      ],
      solution: 'Kompositter kombinerer to eller flere materialer for å utnytte de beste egenskapene til hver, f.eks. karbonfiber (karbonfibrer + epoxy).',
    },
    {
      id: 'tof1-8-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvilke egenskaper gjør aluminium egnet til flyskrog?',
      solution: 'Aluminium er: 1) Lett (lav tetthet) - viktig for drivstofforbruk. 2) Korrosjonsbestandig - tåler fuktighet. 3) Relativt sterkt for vekten (god styrke/vekt-forhold). 4) Enkelt å forme og sveise.',
    },
    {
      id: 'tof1-8-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen på termoplast og herdeplast?',
      options: [
        { id: 'a', text: 'Termoplast kan smeltes om, herdeplast kan ikke', isCorrect: true },
        { id: 'b', text: 'Herdeplast er mykere', isCorrect: false },
        { id: 'c', text: 'Termoplast er sterkere', isCorrect: false },
        { id: 'd', text: 'De er helt like', isCorrect: false },
      ],
      solution: 'Termoplast (f.eks. polyetylen) kan varmes og formes på nytt. Herdeplast (f.eks. epoxy) gjennomgår en irreversibel reaksjon og kan ikke smeltes igjen.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Prosjektarbeid og dokumentasjon
// ============================================================================

export const CHAPTER_TOF_1_9: TextbookChapter = {
  id: 'tof-1-9',
  courseId: 'tof-1',
  chapterNumber: '9',
  title: 'Prosjektarbeid og dokumentasjon',
  description: 'Prosjektledelse og teknisk dokumentasjon.',
  estimatedMinutes: 70,
  competenceGoals: [
    'planlegge og gjennomføre prosjekter',
    'dokumentere arbeid systematisk',
    'samarbeide effektivt i grupper',
  ],
  content: [
    {
      id: 'tof1-9-intro',
      type: 'text',
      content: `# Prosjektarbeid og dokumentasjon

Systematisk prosjektarbeid og god dokumentasjon er essensielt for vellykkede teknologiprosjekter.

## Hva er et prosjekt?

Et prosjekt er en tidsbegrenset innsats for å nå et definert mål. Kjennetegnes av:
- Klart mål
- Start og slutt
- Begrenset ressurser
- Unikt (ikke rutinearbeid)`,
    },
    {
      id: 'tof1-9-def-prosjekt',
      type: 'definition',
      title: 'Prosjektstyring',
      content: 'Prosjektstyring er planlegging, organisering og kontroll av ressurser for å nå prosjektmål. Det inkluderer å definere mål, fordele oppgaver, følge fremdrift og håndtere risiko.',
    },
    {
      id: 'tof1-9-faser',
      type: 'text',
      content: `## Prosjektfaser

### 1. Initiering
- Definer problemstilling
- Sett mål og rammer
- Kartlegg interessenter

### 2. Planlegging
- Bryt ned i deloppgaver
- Lag tidsplan (Gantt-diagram)
- Fordel roller og ansvar

### 3. Gjennomføring
- Utfør planlagte aktiviteter
- Følg opp fremdrift
- Håndter avvik

### 4. Avslutning
- Lever resultat
- Evaluer prosessen
- Dokumenter læring`,
    },
    {
      id: 'tof1-9-dokumentasjon',
      type: 'text',
      content: `## Teknisk dokumentasjon

### Prosjektdagbok
- Logg av daglig arbeid
- Beslutninger og begrunnelser
- Problemer og løsninger

### Teknisk rapport
- Innledning og bakgrunn
- Metode/fremgangsmåte
- Resultater
- Diskusjon og konklusjon

### Tegninger og diagrammer
- Skisser
- Kretsskjema
- Flytdiagrammer`,
    },
    {
      id: 'tof1-9-def-gantt',
      type: 'definition',
      title: 'Gantt-diagram',
      content: 'Et Gantt-diagram er en grafisk fremstilling av prosjektets tidsplan. Det viser oppgaver langs en tidsakse, med stolper som viser varighet og avhengigheter mellom oppgaver.',
    },
    {
      id: 'tof1-9-example',
      type: 'example',
      title: 'Planlegge et robotprosjekt',
      problem: 'Lag en enkel prosjektplan for å bygge en linjefølgende robot på 6 uker.',
      solution: `**Prosjektplan:**

**Uke 1-2: Planlegging**
- Definere krav og spesifikasjoner
- Velge komponenter
- Bestille deler

**Uke 3: Mekanisk konstruksjon**
- Bygge chassis
- Montere hjul og motorer

**Uke 4: Elektronikk**
- Koble sensorer
- Kable motor driver

**Uke 5: Programmering**
- Skrive grunnkode
- Kalibrere sensorer
- Teste og feilsøke

**Uke 6: Finpuss og dokumentasjon**
- Optimalisere kode
- Skrive rapport
- Demonstrere`,
    },
  ],
  exercises: [
    {
      id: 'tof1-9-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et Gantt-diagram?',
      options: [
        { id: 'a', text: 'En grafisk tidsplan for prosjekter', isCorrect: true },
        { id: 'b', text: 'Et elektrisk kretsskjema', isCorrect: false },
        { id: 'c', text: 'En type flytdiagram', isCorrect: false },
        { id: 'd', text: 'En teknisk tegning', isCorrect: false },
      ],
      solution: 'Gantt-diagram viser oppgaver langs en tidsakse med stolper som indikerer start, varighet og avhengigheter.',
    },
    {
      id: 'tof1-9-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva bør en prosjektdagbok inneholde?',
      solution: 'En prosjektdagbok bør inneholde: 1) Dato for hver innføring. 2) Hva som ble gjort/arbeidet med. 3) Problemer som oppsto. 4) Løsninger som ble prøvd. 5) Beslutninger og begrunnelser. 6) Neste planlagte steg. 7) Tidsbruk.',
    },
    {
      id: 'tof1-9-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken fase kommer typisk først i et prosjekt?',
      options: [
        { id: 'a', text: 'Initiering', isCorrect: true },
        { id: 'b', text: 'Gjennomføring', isCorrect: false },
        { id: 'c', text: 'Avslutning', isCorrect: false },
        { id: 'd', text: 'Testing', isCorrect: false },
      ],
      solution: 'Initiering kommer først - der defineres problemstilling, mål og rammer for prosjektet.',
    },
    {
      id: 'tof1-9-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvilke hoveddeler bør en teknisk rapport ha?',
      solution: '1) Tittelside med tittel, forfattere, dato. 2) Sammendrag. 3) Innledning med bakgrunn og mål. 4) Metode/fremgangsmåte. 5) Resultater. 6) Diskusjon. 7) Konklusjon. 8) Referanser. 9) Vedlegg (tegninger, kode, etc.).',
    },
    {
      id: 'tof1-9-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner et prosjekt?',
      options: [
        { id: 'a', text: 'Tidsbegrenset innsats for å nå et definert mål', isCorrect: true },
        { id: 'b', text: 'Daglig rutinearbeid', isCorrect: false },
        { id: 'c', text: 'Ubegrenset tidsramme', isCorrect: false },
        { id: 'd', text: 'Ingen klare mål', isCorrect: false },
      ],
      solution: 'Prosjekter har klare mål, start og slutt, begrensede ressurser, og er unike - i motsetning til daglig drift.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Presentasjon og formidling
// ============================================================================

export const CHAPTER_TOF_1_10: TextbookChapter = {
  id: 'tof-1-10',
  courseId: 'tof-1',
  chapterNumber: '10',
  title: 'Presentasjon og formidling',
  description: 'Teknisk formidling og presentasjonsteknikk.',
  estimatedMinutes: 65,
  competenceGoals: [
    'presentere tekniske emner til ulike målgrupper',
    'bruke visuelle hjelpemidler effektivt',
    'tilpasse formidlingen til mottakeren',
  ],
  content: [
    {
      id: 'tof1-10-intro',
      type: 'text',
      content: `# Presentasjon og formidling

God formidling er like viktig som godt teknisk arbeid. Hvis du ikke kan forklare det du har gjort, har det begrenset verdi.

## Hvorfor formidling?

- Dele kunnskap og resultater
- Overbevise beslutningstakere
- Dokumentere for fremtiden
- Få tilbakemelding`,
    },
    {
      id: 'tof1-10-def-formidling',
      type: 'definition',
      title: 'Teknisk formidling',
      content: 'Teknisk formidling er å kommunisere teknisk informasjon på en forståelig måte til en definert målgruppe. Det krever tilpasning av språk, detaljeringsnivå og presentasjonsform.',
    },
    {
      id: 'tof1-10-malgruppe',
      type: 'text',
      content: `## Tilpasning til målgruppe

### Eksperter
- Kan bruke fagtermer
- Gå i dybden på detaljer
- Fokus på nyvinninger

### Beslutningstakere
- Fokus på resultater og nytte
- Unngå unødvendige detaljer
- Klar konklusjon og anbefaling

### Allmennheten
- Enkelt språk
- Analogier og eksempler
- Fokus på relevans`,
    },
    {
      id: 'tof1-10-presentasjon',
      type: 'text',
      content: `## God presentasjon

### Struktur
1. Innledning - fang oppmerksomhet
2. Hoveddel - logisk oppbygning
3. Avslutning - oppsummering og konklusjon

### Visuelle hjelpemidler
- Enkle, tydelige lysbilder
- Lite tekst per slide
- Relevante bilder og diagrammer
- Demonstrasjon av produkt

### Fremføring
- Øyekontakt med publikum
- Ikke les fra notater
- Variert stemmebruk
- Svar på spørsmål`,
    },
    {
      id: 'tof1-10-def-poster',
      type: 'definition',
      title: 'Poster/plakat',
      content: 'En vitenskapelig poster er en visuell presentasjon av et prosjekt på ett stort ark. Den skal kunne forstås uten muntlig forklaring og inneholder typisk: tittel, bakgrunn, metode, resultater og konklusjon.',
    },
    {
      id: 'tof1-10-example',
      type: 'example',
      title: 'Planlegge en presentasjon',
      problem: 'Du skal presentere et Arduino-prosjekt for klassen på 10 minutter. Hvordan strukturerer du presentasjonen?',
      solution: `**Presentasjonsplan (10 min):**

**1. Innledning (2 min)**
- Hva er problemet du løste?
- Hvorfor er det relevant?
- Vis ferdig resultat (teaser)

**2. Prosessen (3 min)**
- Designvalg og begrunnelser
- Utfordringer underveis
- Nøkkelkomponenter

**3. Demonstrasjon (3 min)**
- Live-demo av prosjektet
- Forklar hva som skjer

**4. Avslutning (2 min)**
- Hva lærte du?
- Hva kunne vært gjort annerledes?
- Spørsmål?`,
    },
  ],
  exercises: [
    {
      id: 'tof1-10-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva bør du gjøre når du presenterer for en ikke-teknisk målgruppe?',
      options: [
        { id: 'a', text: 'Bruke enkelt språk og analogier', isCorrect: true },
        { id: 'b', text: 'Bruke mest mulig faguttrykk', isCorrect: false },
        { id: 'c', text: 'Vise detaljert kode', isCorrect: false },
        { id: 'd', text: 'Snakke raskt for å få med alt', isCorrect: false },
      ],
      solution: 'For ikke-tekniske målgrupper bør du forenkle språket, bruke analogier de kjenner, og fokusere på relevans og nytte fremfor detaljer.',
    },
    {
      id: 'tof1-10-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvordan bør du strukturere en god presentasjon?',
      solution: 'En god presentasjon har: 1) Innledning som fanger oppmerksomhet og introduserer tema. 2) Hoveddel med logisk oppbygning, et punkt om gangen. 3) Avslutning med oppsummering og tydelig konklusjon. Tips: Fortell hva du skal si, si det, fortell hva du sa.',
    },
    {
      id: 'tof1-10-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva bør unngås på PowerPoint-slides?',
      options: [
        { id: 'a', text: 'Mye tekst og fulle setninger', isCorrect: true },
        { id: 'b', text: 'Relevante bilder', isCorrect: false },
        { id: 'c', text: 'Enkle diagrammer', isCorrect: false },
        { id: 'd', text: 'Nøkkelord', isCorrect: false },
      ],
      solution: 'Slides bør ha lite tekst - de er visuelle hjelpemidler, ikke manuskript. Bruk nøkkelord, bilder og enkle diagrammer. Publikum skal lytte til deg, ikke lese.',
    },
    {
      id: 'tof1-10-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva bør en vitenskapelig poster inneholde?',
      solution: 'En poster bør inneholde: 1) Tydelig tittel. 2) Bakgrunn/introduksjon - hvorfor er det viktig? 3) Mål/problemstilling. 4) Metode - kort beskrivelse. 5) Resultater - gjerne figurer/grafer. 6) Konklusjon. 7) Kontaktinfo. Alt skal være lesbart fra ca. 1 meters avstand.',
    },
    {
      id: 'tof1-10-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er viktig under selve fremføringen?',
      options: [
        { id: 'a', text: 'Øyekontakt med publikum', isCorrect: true },
        { id: 'b', text: 'Lese direkte fra notatene', isCorrect: false },
        { id: 'c', text: 'Stå med ryggen til publikum', isCorrect: false },
        { id: 'd', text: 'Snakke monotont', isCorrect: false },
      ],
      solution: 'Øyekontakt skaper forbindelse med publikum og viser at du er trygg på stoffet. Varier blikket rundt i rommet.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const TOF_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_1,
  CHAPTER_TOF_1_2,
  CHAPTER_TOF_1_3,
  CHAPTER_TOF_1_4,
  CHAPTER_TOF_1_5,
  CHAPTER_TOF_1_6,
  CHAPTER_TOF_1_7,
  CHAPTER_TOF_1_8,
  CHAPTER_TOF_1_9,
  CHAPTER_TOF_1_10,
];

export function getTof1Chapter(chapterId: string): TextbookChapter | undefined {
  return TOF_1_CHAPTERS.find(chapter => chapter.id === chapterId);
}

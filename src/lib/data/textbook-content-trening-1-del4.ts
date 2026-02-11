/* eslint-disable */
// @ts-nocheck
/**
 * Treningslære 1 (VG2) - Del 4: Styrketrening
 * Seksjon 4: Kapittel 4.1-4.5
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Styrketreningsprinsipper
// ============================================================================

export const CHAPTER_TRENING_1_4_1: TextbookChapter = {
  id: 'trening-1-4-1',
  courseId: 'trening-1',
  chapterNumber: '4.1',
  title: 'Styrketreningsprinsipper',
  description: 'Lær om ulike typer styrke, belastningssoner og grunnleggende prinsipper for styrketrening.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forstå forskjellen mellom maksimal, eksplosiv og utholdende styrke',
    'kunne forklare hvordan belastningssoner påvirker treningseffekten',
  ],
  content: [
    {
      id: 'tr-4-1-intro',
      type: 'text',
      content: `## Styrketreningsprinsipper

Styrketrening er en sentral del av fysisk trening, enten målet er bedre helse, økt idrettsprestasjon eller forebygging av skader. For å trene styrke effektivt må du forstå hvilke typer styrke som finnes, og hvordan belastningen du velger påvirker hvilken type styrke du utvikler.

Styrke defineres som musklenes evne til å utvikle kraft. Men styrke er ikke én enkel egenskap -- den kan deles inn i flere underkategorier som stiller ulike krav til treningen.`,
    },
    {
      id: 'tr-4-1-def-1',
      type: 'definition',
      title: 'Styrke',
      content: `Styrke er musklenes evne til å utvikle kraft mot en motstand. Styrke kan deles inn i tre hovedtyper:

- **Maksimal styrke**: Den største kraften muskelen kan utvikle i én enkelt muskelaksjon (1RM)
- **Eksplosiv styrke (hurtigstyrke)**: Evnen til å utvikle mest mulig kraft på kortest mulig tid
- **Utholdende styrke (styrkeutholdenthet)**: Evnen til å opprettholde kraftutvikling over tid eller gjennom mange repetisjoner`,
    },
    {
      id: 'tr-4-1-text-1',
      type: 'text',
      title: 'Maksimal styrke',
      content: `**Maksimal styrke** er den høyeste kraften muskelen kan produsere i én enkelt muskelaksjon. Den måles vanligvis som 1RM (one repetition maximum), altså den tyngste vekten du kan løfte én gang med korrekt teknikk.

**Hva bestemmer maksimal styrke?**
- **Muskeltverrsnitt**: Større muskler kan generelt utvikle mer kraft
- **Nevral aktivering**: Evnen til å aktivere mange motoriske enheter samtidig
- **Intramuskulær koordinasjon**: Samspill mellom muskelfibrene i én muskel
- **Intermuskulær koordinasjon**: Samspill mellom ulike muskler i en bevegelse

Maksimal styrke er grunnlaget for de andre styrketypene. En utøver med god maksimalstyrke har et større potensial for å utvikle både eksplosiv styrke og styrkeutholdenthet.`,
    },
    {
      id: 'tr-4-1-text-2',
      type: 'text',
      title: 'Eksplosiv styrke',
      content: `**Eksplosiv styrke** (hurtigstyrke) handler om å utvikle kraft raskt. Det er ikke bare hvor mye kraft du kan lage, men hvor fort du kan mobilisere den.

**Eksplosiv styrke er avgjørende i:**
- Sprinting og hopping
- Kast og slag (håndball, volleyball, kampsport)
- Retningsforandringer i lagidrett
- Vektløfting (rykk og støt)

**Kraftutviklingshastighet (RFD -- Rate of Force Development)**:
RFD beskriver hvor bratt kraftkurven stiger. En utøver med høy RFD kan nå topphastighet raskere enn en med høyere maksimalstyrke men lavere RFD. Trening for eksplosiv styrke krever lette til moderate belastninger utført med maksimal hastighet.`,
    },
    {
      id: 'tr-4-1-text-3',
      type: 'text',
      title: 'Utholdende styrke',
      content: `**Utholdende styrke** (styrkeutholdenthet) er evnen til å opprettholde kraftutvikling over tid. Dette kan bety mange repetisjoner med en gitt belastning, eller å holde en kraft over lang tid.

**Eksempler på utholdende styrke:**
- Roing: Gjentatte tak med kraft over lang tid
- Sykling i bakker: Vedvarende kraftutvikling i beinmuskulatur
- Klatring: Grep-styrke over lang tid
- Svømming: Gjentatte tak med kraft i overkroppen

Utholdende styrke avhenger av både muskulær kapasitet og lokal muskelutholdenhet, inkludert blodtilførsel og evne til å fjerne avfallsstoffer som laktat.`,
    },
    {
      id: 'tr-4-1-def-2',
      type: 'definition',
      title: 'Belastningssoner',
      content: `Belastningssoner beskriver sammenhengen mellom treningsbelastning (prosent av 1RM) og antall repetisjoner, og bestemmer hvilken treningseffekt du oppnår:

| Sone | Belastning | Repetisjoner | Treningseffekt |
|------|-----------|-------------|----------------|
| **Maksimal styrke** | 85-100 % av 1RM | 1-5 reps | Nevrale tilpasninger, økt kraftutvikling |
| **Hypertrofi** | 65-85 % av 1RM | 6-12 reps | Muskelvekst, økt muskelmasse |
| **Styrkeutholdenthet** | 40-65 % av 1RM | 13-30+ reps | Lokal muskelutholdenthet, kapillærvekst |
| **Eksplosiv styrke** | 30-70 % av 1RM | 3-6 reps | Kraftutviklingshastighet (utført med maks fart) |`,
    },
    {
      id: 'tr-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Valg av belastningssone',
      problem: `Kari har 1RM på 80 kg i knebøy. Hun vil trene for muskelvekst (hypertrofi). Hvilken belastning og antall repetisjoner bør hun velge?`,
      solution: `**Hypertrofisonen: 65-85 % av 1RM, 6-12 repetisjoner**

Karis 1RM = 80 kg

- 65 % av 80 kg = 52 kg
- 85 % av 80 kg = 68 kg

**Anbefalt treningsbelastning:**
Kari bør trene med 52-68 kg i knebøy og utføre 6-12 repetisjoner per sett. Et godt utgangspunkt kan være 60 kg x 8-10 repetisjoner i 3-4 sett.

**Viktig:** Belastningen bør være tung nok til at de siste repetisjonene er krevende, men ikke så tung at teknikken brytes ned.`,
    },
    {
      id: 'tr-4-1-note-1',
      type: 'note',
      title: 'RM-kontinuumet er en forenkling',
      content: `Belastningssonene er nyttige retningslinjer, men forskning viser at det er overlapp mellom sonene. Hypertrofi kan oppnås med et bredt repetisjonsområde (5-30 reps) så lenge settene utføres nær muskelsvikt. Det viktigste for muskelvekst er mekanisk spenning over tid og tilstrekkelig treningsvolum.`,
    },
    {
      id: 'tr-4-1-tip-1',
      type: 'tip',
      title: 'Finn din 1RM uten å teste maksimalt',
      content: `Du trenger ikke teste ekte 1RM for å bestemme treningsbelastning. Bruk Epleys formel for å estimere:

**Estimert 1RM = vekt x (1 + reps / 30)**

Eksempel: Løfter du 60 kg i 8 repetisjoner:
60 x (1 + 8/30) = 60 x 1,27 = 76 kg estimert 1RM

Dette gir en tryggere måte å bestemme belastningssoner på, spesielt for nybegynnere.`,
    },
    {
      id: 'tr-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type styrke handler om å utvikle mest mulig kraft på kortest mulig tid?',
        options: [
          'Maksimal styrke',
          'Eksplosiv styrke',
          'Utholdende styrke',
          'Statisk styrke',
        ],
        answer: 1,
        solution: 'Eksplosiv styrke (hurtigstyrke) er evnen til å utvikle mest mulig kraft på kortest mulig tid. Den måles gjennom kraftutviklingshastighet (RFD).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-4-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange repetisjoner trener du med i hypertrofisonen?',
        options: [
          '1-5 repetisjoner',
          '6-12 repetisjoner',
          '15-30 repetisjoner',
          '30-50 repetisjoner',
        ],
        answer: 1,
        solution: 'Hypertrofisonen innebærer 6-12 repetisjoner med 65-85 % av 1RM. Dette gir tilstrekkelig mekanisk spenning og metabolsk stress for muskelvekst.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom intramuskulær og intermuskulær koordinasjon, og hvorfor begge er viktige for maksimal styrke.',
        solution: 'Intramuskulær koordinasjon handler om samspillet mellom muskelfibrene innenfor én muskel -- evnen til å aktivere mange motoriske enheter samtidig og med høy frekvens. Intermuskulær koordinasjon handler om samspillet mellom ulike muskler i en bevegelse -- at agonister, antagonister og stabilisatorer jobber effektivt sammen. Begge er nødvendige: Intramuskulær koordinasjon bestemmer hvor mye kraft én muskel kan produsere, mens intermuskulær koordinasjon sikrer at kraften overføres effektivt gjennom hele bevegelseskjeden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-4-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ole har estimert 1RM på 100 kg i benkpress. Han ønsker å trene for maksimal styrke. Hvilken belastning og repetisjonsområde bør han velge?',
        options: [
          '50-65 kg, 15-20 repetisjoner',
          '65-80 kg, 8-12 repetisjoner',
          '85-100 kg, 1-5 repetisjoner',
          '30-50 kg, 20-30 repetisjoner',
        ],
        answer: 2,
        solution: 'For maksimal styrke trener man med 85-100 % av 1RM, altså 85-100 kg, og 1-5 repetisjoner per sett. Dette gir primært nevrale tilpasninger som økt rekruttering av motoriske enheter og bedre intramuskulær koordinasjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en idrett du kjenner godt. Beskriv hvilken type styrke (maksimal, eksplosiv, utholdende) som er viktigst i idretten, og begrunn svaret ditt med konkrete eksempler fra idretten.',
        solution: 'Svaret bør inneholde: Valgt idrett, identifisering av dominerende styrketype med begrunnelse, konkrete bevegelser/situasjoner i idretten der styrketypen er avgjørende, og gjerne en refleksjon over at de fleste idretter krever flere styrketyper i ulik grad. Eksempel: I fotball er eksplosiv styrke viktigst fordi spillere gjentatte ganger må akselerere, hoppe og endre retning raskt, men utholdende styrke er også viktig for å opprettholde prestasjonen gjennom 90 minutter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En løper har estimert 1RM på 90 kg i knebøy. Sett opp en oversikt over hvilken belastning (i kg) løperen bør bruke i hver av de fire belastningssonene, og forklar hvilken sone som er mest relevant for en langdistanseløper versus en sprinter.',
        solution: 'Beregninger: Maksimal styrke (85-100 %): 76,5-90 kg, 1-5 reps. Hypertrofi (65-85 %): 58,5-76,5 kg, 6-12 reps. Styrkeutholdenthet (40-65 %): 36-58,5 kg, 13-30+ reps. Eksplosiv styrke (30-70 %): 27-63 kg, 3-6 reps med maks fart. For en langdistanseløper er styrkeutholdenthet og maksimal styrke (for økonomi) viktigst. Tung styrketrening med få reps forbedrer løpsøkonomi uten å øke kroppsvekten vesentlig. For en sprinter er eksplosiv styrke og maksimal styrke avgjørende fordi sprintprestasjonen krever høy kraftutvikling på kort tid ved hvert fotisett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.2: Treningsmetoder for styrke
// ============================================================================

export const CHAPTER_TRENING_1_4_2: TextbookChapter = {
  id: 'trening-1-4-2',
  courseId: 'trening-1',
  chapterNumber: '4.2',
  title: 'Treningsmetoder for styrke',
  description: 'Lær om treningsmetoder for hypertrofi, maksimal styrke og styrkeutholdenthet med konkrete programeksempler.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kunne beskrive og anvende ulike treningsmetoder for styrke',
    'forstå sammenhengen mellom treningsmetode og ønsket tilpasning',
  ],
  content: [
    {
      id: 'tr-4-2-intro',
      type: 'text',
      content: `## Treningsmetoder for styrke

Når du har forstått de ulike styrketypene og belastningssonene, er neste steg å velge riktig treningsmetode. En treningsmetode er en systematisk fremgangsmåte for å organisere treningen slik at du oppnår ønsket effekt. I dette kapittelet ser vi nærmere på de tre viktigste metodene for styrketrening: hypertrofitrening, maksimal styrketrening og styrkeutholdenthetstrening.`,
    },
    {
      id: 'tr-4-2-def-1',
      type: 'definition',
      title: 'Hypertrofi',
      content: `Hypertrofi betyr økning i muskelmasse (muskelvekst). Ved hypertrofitrening øker diameteren på de enkelte muskelfibrene, noe som gir større og sterkere muskler over tid.

**Mekanismer bak hypertrofi:**
- **Mekanisk spenning**: Belastningen skaper spenning i muskelfibrene
- **Metabolsk stress**: Oppsamling av metabolitter (laktat, hydrogenioner) stimulerer vekst
- **Muskelskade**: Mikroskopiske skader i fibrene trigger reparasjon og vekst`,
    },
    {
      id: 'tr-4-2-text-1',
      type: 'text',
      title: 'Hypertrofitrening i praksis',
      content: `**Retningslinjer for hypertrofitrening:**

| Variabel | Anbefaling |
|----------|-----------|
| Belastning | 65-85 % av 1RM |
| Repetisjoner | 6-12 per sett |
| Sett | 3-5 per øvelse |
| Pause mellom sett | 60-120 sekunder |
| Tempo | Kontrollert (2-0-2-0 eller 3-0-1-0) |
| Frekvens | 2-3 ganger per muskelgruppe per uke |
| Volum | 10-20 sett per muskelgruppe per uke |

**Viktige prinsipper:**
- Tren nær muskelsvikt (1-3 repetisjoner i reserve)
- Prioriter progressiv overbelastning over tid
- Varier øvelsesutvalget for allsidig stimulering
- Tilstrekkelig proteininntak (1,6-2,2 g/kg/dag) er avgjørende`,
    },
    {
      id: 'tr-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Hypertrofiprogram for overkropp',
      problem: 'Sett opp en hypertrofiøkt for overkroppen med 4-5 øvelser.',
      solution: `**Hypertrofiøkt -- Overkropp**

| Øvelse | Sett x Reps | Pause | Belastning |
|--------|------------|-------|-----------|
| Benkpress | 4 x 8-10 | 90 sek | 75 % av 1RM |
| Sittende roing | 4 x 10-12 | 90 sek | 70 % av 1RM |
| Skulderpress med manualer | 3 x 10-12 | 60 sek | 70 % av 1RM |
| Bicepscurl | 3 x 12 | 60 sek | 65 % av 1RM |
| Tricepspress | 3 x 12 | 60 sek | 65 % av 1RM |

**Totalt volum:** 17 sett, ca 45-55 minutter
**Tempo:** Kontrollert nedover (2 sek), eksplosivt oppover
**Prinsipp:** Tren til 1-3 repetisjoner i reserve (RIR) på hvert sett`,
    },
    {
      id: 'tr-4-2-text-2',
      type: 'text',
      title: 'Trening for maksimal styrke',
      content: `**Retningslinjer for maksimal styrketrening:**

| Variabel | Anbefaling |
|----------|-----------|
| Belastning | 85-100 % av 1RM |
| Repetisjoner | 1-5 per sett |
| Sett | 3-6 per øvelse |
| Pause mellom sett | 3-5 minutter |
| Tempo | Kontrollert ned, eksplosivt opp |
| Frekvens | 2-4 ganger per uke |
| Øvelser | Flerleddsøvelser (knebøy, markløft, benkpress) |

**Viktige prinsipper:**
- Fokuser på nevrale tilpasninger: Rekruttering av motoriske enheter og fyringsfrekvens
- Lengre pauser mellom sett for full restitusjon av nervesystemet
- Teknikk er kritisk -- aldri kompromiss på teknikken ved tunge løft
- Flerleddsøvelser gir størst overføringsverdi
- Ikke tren til muskelsvikt -- stopp med 1-2 reps igjen`,
    },
    {
      id: 'tr-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Maksimal styrkeprogram',
      problem: 'Sett opp en maksimal styrkeøkt med fokus på underkropp.',
      solution: `**Maksimal styrkeøkt -- Underkropp**

| Øvelse | Sett x Reps | Pause | Belastning |
|--------|------------|-------|-----------|
| Knebøy | 5 x 3 | 4 min | 90 % av 1RM |
| Markløft | 4 x 2-3 | 4 min | 90-95 % av 1RM |
| Beinpress | 3 x 5 | 3 min | 85 % av 1RM |

**Totalt:** 12 sett, ca 45-60 minutter (inkl. oppvarming)
**Viktig:** God oppvarming med gradvis økende belastning (tomstang → 50 % → 70 % → 80 % → arbeidssett). Aldri hopp over oppvarmingssett ved tunge løft.`,
    },
    {
      id: 'tr-4-2-text-3',
      type: 'text',
      title: 'Trening for styrkeutholdenthet',
      content: `**Retningslinjer for styrkeutholdenthetstrening:**

| Variabel | Anbefaling |
|----------|-----------|
| Belastning | 40-65 % av 1RM |
| Repetisjoner | 15-30+ per sett |
| Sett | 2-4 per øvelse |
| Pause mellom sett | 30-60 sekunder |
| Tempo | Moderat, jevn rytme |
| Frekvens | 2-3 ganger per uke |

**Metoder for styrkeutholdenthet:**
- **Sirkelsett:** 6-10 øvelser utføres etter hverandre med minimal pause
- **Supersett:** To øvelser veksles uten pause
- **Tabata/HIIT:** Korte, intense intervaller med kroppsvektsøvelser
- **Repetisjonstrening:** Høyt antall repetisjoner med lett belastning

Styrkeutholdenthetstrening forbedrer lokal muskelutholdenthet, kapillærtetthet og evnen til å fjerne avfallsstoffer. Det er nyttig for utholdenhetsidretter, hverdagsfunksjon og rehabilitering.`,
    },
    {
      id: 'tr-4-2-example-3',
      type: 'example',
      title: 'Eksempel: Sirkelsett for styrkeutholdenthet',
      problem: 'Sett opp et sirkelsett med 6 øvelser for hele kroppen.',
      solution: `**Sirkelsett -- Styrkeutholdenthet**

Utfør 40 sekunder arbeid, 20 sekunder pause per øvelse. Gjennomfør 3 runder med 2 minutter pause mellom rundene.

| Stasjon | Øvelse | Fokus |
|---------|--------|-------|
| 1 | Kroppshevinger / australske roing | Rygg og biceps |
| 2 | Knebøy med manualer | Lår og sete |
| 3 | Push-ups | Bryst og triceps |
| 4 | Utfall (veksling) | Lår, sete og balanse |
| 5 | Planke med skulderklapp | Kjernemuskulatur |
| 6 | Kettlebell swing | Hele bakside + utholdenhet |

**Total tid:** Ca 25-30 minutter (inkl. oppvarming)
**Effekt:** Forbedrer lokal muskelutholdenthet, kardiovaskulær kapasitet og metabolsk kondisjon.`,
    },
    {
      id: 'tr-4-2-warning-1',
      type: 'warning',
      title: 'Treningsvolum og restitusjon',
      content: `Mer er ikke alltid bedre. Forskning viser at det finnes en øvre grense for nyttig treningsvolum (MRV -- Maximum Recoverable Volume). Overskrider du dette, får du dårligere resultater og økt skaderisiko. Start med lavere volum og øk gradvis. Lytt til kroppen og juster etter behov.`,
    },
    {
      id: 'tr-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor lang pause mellom sett anbefales ved maksimal styrketrening?',
        options: [
          '30-60 sekunder',
          '60-120 sekunder',
          '3-5 minutter',
          '5-10 minutter',
        ],
        answer: 2,
        solution: 'Ved maksimal styrketrening (85-100 % av 1RM) anbefales 3-5 minutters pause mellom sett. Nervesystemet trenger lang tid for å restituere seg etter tunge løft, slik at du kan opprettholde høy kraftutvikling i neste sett.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-4-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken treningsmetode er best egnet for å øke muskelmasse?',
        options: [
          'Maksimal styrke med 1-3 repetisjoner',
          'Hypertrofitrening med 6-12 repetisjoner og moderat pause',
          'Styrkeutholdenthet med 30+ repetisjoner',
          'Eksplosiv trening med 3 repetisjoner og maks fart',
        ],
        answer: 1,
        solution: 'Hypertrofitrening med 6-12 repetisjoner, 65-85 % av 1RM og moderate pauser (60-120 sekunder) er den mest effektive metoden for muskelvekst. Kombinasjonen av mekanisk spenning og metabolsk stress stimulerer hypertrofi.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «å trene nær muskelsvikt» og hvorfor det er viktig for hypertrofi. Bruk begrepet RIR (Reps In Reserve) i forklaringen din.',
        solution: 'Å trene nær muskelsvikt betyr at du utfører repetisjoner til du har svært få igjen før du ikke klarer flere. RIR (Reps In Reserve) er et mål på hvor mange repetisjoner du har igjen. For hypertrofi anbefales 1-3 RIR, altså at du stopper settet med 1-3 repetisjoner igjen. Dette er viktig fordi de siste repetisjonene i et sett rekrutterer flest motoriske enheter (spesielt de store type II-fibrene), og det er nettopp disse som har størst vekstpotensial. Å trene helt til svikt (0 RIR) kan gi marginalt mer stimuli per sett, men krever mye mer restitusjon og kan redusere totalt treningsvolum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv forskjellene mellom sirkelsett, supersett og tradisjonell settbasert trening. Når er hver metode mest hensiktsmessig?',
        solution: 'Sirkelsett: Flere øvelser utføres etter hverandre med minimal pause, gjerne 6-10 stasjoner. Best for styrkeutholdenthet og tidseffektiv trening. Supersett: To øvelser veksles uten pause mellom, typisk for motstående muskelgrupper (f.eks. biceps/triceps). Tidseffektivt og gir moderat metabolsk stress. Tradisjonell settbasert: Alle sett av én øvelse fullføres før neste øvelse starter. Best for maksimal styrke og tung hypertrofitrening fordi det gir full restitusjon mellom sett. Valget avhenger av treningsmål, tid tilgjengelig og treningsnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et komplett styrketreningsprogram for en uke (3 økter) for en person som ønsker å kombinere hypertrofi og styrkeutholdenthet. Begrunn valgene dine.',
        solution: 'Programmet bør inneholde: Økt 1 -- Hypertrofi overkropp (4-5 øvelser, 3-4 x 8-12 reps, 90 sek pause), Økt 2 -- Hypertrofi underkropp (4-5 øvelser, 3-4 x 8-12 reps, 90 sek pause), Økt 3 -- Styrkeutholdenthet helkropp (sirkelsett med 6-8 øvelser, 3 runder, 40/20 sek arbeid/pause). Begrunnelse bør inkludere: Variasjon i treningsmetode gir allsidig stimuli, hypertrofiøktene bygger muskelmasse, sirkelsettet forbedrer lokal utholdenthet og metabolsk kapasitet, og hviledag mellom øktene sikrer restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En håndballspiller ønsker å bli sterkere og mer eksplosiv i skudd og hopp. Forklar hvilke treningsmetoder du vil anbefale, og sett opp én eksempeløkt som kombinerer maksimal styrke og eksplosiv trening.',
        solution: 'Håndball krever eksplosiv styrke i skudd (armakselerasjon), hopp (vertikalkraft) og retningsforandringer. Anbefaler en kombinasjon av tung styrketrening (for kraftgrunnlag) og eksplosive øvelser (for kraftutviklingshastighet). Eksempeløkt: 1) Knebøy 4x4 på 87 % av 1RM (4 min pause) -- bygger kraftgrunnlag i bein. 2) Bokshopp 4x5 med maks intensitet (3 min pause) -- utvikler eksplosiv kraft. 3) Benkpress 4x4 på 87 % (4 min pause) -- kraftgrunnlag overkropp. 4) Medisinballkast 4x6 med maks kraft (2 min pause) -- eksplosiv overføring til skudd. Prinsipp: Tung styrke først (når nervesystemet er uthvilt), eksplosive øvelser etter for å utnytte post-aktivering potensering (PAP).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.3: Øvelsesteknikk
// ============================================================================

export const CHAPTER_TRENING_1_4_3: TextbookChapter = {
  id: 'trening-1-4-3',
  courseId: 'trening-1',
  chapterNumber: '4.3',
  title: 'Øvelsesteknikk',
  description: 'Lær korrekt teknikk i de viktigste styrketreningsøvelsene: knebøy, markløft, benkpress, militærpress og roing.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kunne utføre grunnleggende styrkeøvelser med korrekt teknikk',
    'forstå hvorfor teknikk er viktig for sikkerhet og effektivitet',
  ],
  content: [
    {
      id: 'tr-4-3-intro',
      type: 'text',
      content: `## Øvelsesteknikk i styrketrening

God teknikk er fundamentet for sikker og effektiv styrketrening. De store flerleddsøvelsene -- knebøy, markløft, benkpress, militærpress og roing -- er grunnsteinene i de fleste styrkeprogrammer fordi de aktiverer mange muskelgrupper samtidig og gir stor overføringsverdi til idrett og dagligliv.

**Hvorfor er teknikk så viktig?**
- **Sikkerhet:** Feil teknikk øker risikoen for skader, spesielt i rygg, knær og skuldre
- **Effektivitet:** Korrekt teknikk sikrer at riktige muskler belastes
- **Progresjon:** God teknikk gjør det mulig å øke belastningen trygt over tid
- **Overføring:** Riktig bevegelsesmønster gir best overføring til idrett og funksjon`,
    },
    {
      id: 'tr-4-3-def-1',
      type: 'definition',
      title: 'Flerleddsøvelser og isolasjonsøvelser',
      content: `**Flerleddsøvelser** (compound exercises) involverer bevegelse over to eller flere ledd og aktiverer mange muskelgrupper samtidig. Eksempler: knebøy, markløft, benkpress.

**Isolasjonsøvelser** involverer bevegelse over kun ett ledd og fokuserer på én muskelgruppe. Eksempler: bicepscurl, beinekstensjon, lateral raise.

Flerleddsøvelser bør utgjøre kjernen i et styrkeprogram, supplert med isolasjonsøvelser for spesifikke behov.`,
    },
    {
      id: 'tr-4-3-text-1',
      type: 'text',
      title: 'Knebøy (squat)',
      content: `**Knebøy er kanskje den viktigste styrkeøvelsen.** Den trener lår (quadriceps), setemuskulatur (gluteus), bakside lår (hamstrings), kjernemuskulatur og ryggstrekkere.

**Teknikk steg for steg:**

1. **Startposisjon:** Stangen hviler på øvre del av trapezius (high bar) eller bakre del av skuldrene (low bar). Føttene i skulderbredde eller litt bredere, tærne peker lett utover (15-30 grader).

2. **Nedovergang:** Bryt i hofte og knær samtidig. Hold ryggen nøytral (naturlig krumning). Presser knærne ut i linje med tærne. Gå ned til lårene er parallelle med gulvet eller dypere.

3. **Bunnposisjon:** Hold spenning i kjernen. Hæler i bakken. Brystet oppe. Unngå «butt wink» (bekkenrotasjon i bunn).

4. **Oppovergang:** Driv opp gjennom hælene. Presser knærne ut. Hold brystet oppe og ryggen nøytral. Pust ut på vei opp.

**Vanlige feil:**
- Knærne faller innover (valgus)
- Hælene løftes fra bakken
- Ryggen rundes i bunnposisjon
- For lite dybde (over parallell)
- For mye foroverbøying av overkroppen`,
    },
    {
      id: 'tr-4-3-text-2',
      type: 'text',
      title: 'Markløft (deadlift)',
      content: `**Markløft** er den øvelsen der du kan løfte tyngst, og den trener hele baksiden av kroppen: ryggstrekkere, setemuskulatur, hamstrings, trapeziusmuskulatur og underarmer.

**Teknikk steg for steg (konvensjonell markløft):**

1. **Startposisjon:** Stå med føttene i hoftebredde, stangen over midten av foten. Grip stangen like utenfor knærne (overtak eller blandet grep). Senk hoftene, bryst opp, rygg nøytral.

2. **Løftet:** Press føttene i bakken (tenk «push the floor away»). Hold stangen tett inntil kroppen hele veien. Strekk knær og hofter samtidig -- stangen skal gå i en rett linje oppover.

3. **Lockout:** Strekk hoftene helt ut, trekk skuldrene tilbake. Stå oppreist med stangen foran lårene.

4. **Nedovergang:** Skyv hoftene bakover først, deretter bøy knærne når stangen passerer knærne. Kontrollert ned.

**Vanlige feil:**
- Ryggen rundes (fleksjon i korsrygg)
- Stangen driver ut fra kroppen
- Hoftene skyter opp først (stiff-legged)
- Overekstensjon i lockout (lener seg bakover)
- For bredt grep`,
    },
    {
      id: 'tr-4-3-text-3',
      type: 'text',
      title: 'Benkpress (bench press)',
      content: `**Benkpress** er den mest populære overkroppsøvelsen og trener bryst (pectoralis major), fremre skulder (anterior deltoid) og triceps.

**Teknikk steg for steg:**

1. **Startposisjon:** Ligg på benken med øynene under stangen. Skulderblad trukket sammen og ned (retraktert og deprimert). Liten bue i korsryggen. Føttene flatt i gulvet. Grep litt bredere enn skulderbredde.

2. **Nedovergang:** Senk stangen kontrollert mot nedre del av brystkassen. Albuene i ca 45-75 graders vinkel fra kroppen. Underarmene vertikale sett fra siden.

3. **Bunnposisjon:** Stangen berører brystet lett. Hold spenningen i skulderblad og bein. Ikke slipp spenningen.

4. **Oppovergang:** Press stangen opp og litt bakover mot stativ. Driv gjennom bein og rygg. Pust ut på vei opp.

**Vanlige feil:**
- Skuldrene løftes fra benken (tap av retraktert posisjon)
- Stangen spretter på brystet
- Albuene «flarer» ut (90 grader fra kroppen)
- Føttene er ikke plant i gulvet
- Ujevn pressing (én side først)`,
    },
    {
      id: 'tr-4-3-text-4',
      type: 'text',
      title: 'Militærpress (overhead press)',
      content: `**Militærpress** trener skuldrene (deltoideus), triceps og kjernemuskulatur. Det er den mest krevende overkroppsøvelsen for stabilitet og styrke.

**Teknikk steg for steg:**

1. **Startposisjon:** Stangen i «rack»-posisjon foran skuldrene. Grep like utenfor skulderbredde. Albuene peker litt fremover og ned. Stå med føttene i hoftebredde.

2. **Presset:** Press stangen rett opp. Trekk hodet litt bakover for å gi plass til stangen (ikke len overkroppen). Når stangen passerer hodet, skyv hodet fremover under stangen.

3. **Lockout:** Strekk armene helt ut over hodet. Stangen skal være over midten av foten sett fra siden. Aktiver kjernemuskulaturen.

4. **Nedovergang:** Senk stangen kontrollert tilbake til rack-posisjon.

**Vanlige feil:**
- Lener overkroppen for mye bakover (overbelaster korsryggen)
- Press foran hodet hele veien (skulderbelastning)
- Manglende kjernespenning
- For bredt eller for smalt grep`,
    },
    {
      id: 'tr-4-3-text-5',
      type: 'text',
      title: 'Roing (barbell row)',
      content: `**Roing med stang** trener øvre rygg (latissimus dorsi, rhomboideus, trapezius), bakre skulder og biceps. Det er en viktig øvelse for holdning og balanse i overkroppstreningen.

**Teknikk steg for steg:**

1. **Startposisjon:** Grip stangen i overtak, litt bredere enn skulderbredde. Bøy i hoftene med lett bøy i knærne. Overkroppen i ca 45-graders vinkel. Rygg nøytral, bryst opp.

2. **Draget:** Trekk stangen mot nedre del av brystet/øvre mage. Tenk på å trekke albuene bakover og opp. Klem skulderblad sammen i toppposisjon.

3. **Toppposisjon:** Skulderblad fullt retraktert. Stangen berører kroppen. Hold et øyeblikk.

4. **Nedovergang:** Senk stangen kontrollert ned. Strekk armene helt ut i bunnposisjon.

**Vanlige feil:**
- Bruker momentum (rykk i kroppen)
- Ryggen rundes
- For lite bevegelsesutslag
- Trekker kun med armene (ikke rygg)`,
    },
    {
      id: 'tr-4-3-tip-1',
      type: 'tip',
      title: 'Oppvarming før tunge løft',
      content: `En god oppvarming er avgjørende for å prestere godt og unngå skader:

1. **Generell oppvarming** (5-10 min): Lett kardio for å øke kroppstemperatur
2. **Dynamisk tøying**: Bevegelser som etterligner øvelsen du skal utføre
3. **Spesifikk oppvarming**: Gradvis økende belastning i selve øvelsen

Eksempel før knebøy med 100 kg arbeidsvekt:
- Tomstang (20 kg) x 10
- 40 kg x 8
- 60 kg x 5
- 80 kg x 3
- 90 kg x 1-2
- Arbeidssett: 100 kg`,
    },
    {
      id: 'tr-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den vanligste teknikk-feilen i knebøy?',
        options: [
          'For bredt grep på stangen',
          'Knærne faller innover (valgus)',
          'For sakte tempo',
          'For mange repetisjoner',
        ],
        answer: 1,
        solution: 'Knævalgus (knærne faller innover) er den vanligste og mest risikable teknikk-feilen i knebøy. Det øker belastningen på korsbånd og menisk, og skyldes ofte svak setemuskulatur eller dårlig hoftemobilitet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-4-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken muskelgruppe er hovedmuskel i markløft?',
        options: [
          'Brystmuskulaturen',
          'Skuldrene',
          'Hele baksiden av kroppen (rygg, sete, hamstrings)',
          'Biceps og underarmer',
        ],
        answer: 2,
        solution: 'Markløft trener primært hele den bakre kjeden: ryggstrekkere (erector spinae), setemuskulatur (gluteus), bakside lår (hamstrings), samt trapezius og underarmer for grep.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv med egne ord teknikken i benkpress fra start til slutt. Inkluder minst tre vanlige feil man bør unngå.',
        solution: 'Korrekt teknikk: Ligg på benken med øynene under stangen. Trekk skulderblad sammen og ned, lag en liten bue i korsryggen, og sett føttene flatt i gulvet. Grip stangen litt bredere enn skulderbredde. Løft stangen ut av stativet. Senk stangen kontrollert mot nedre del av brystet med albuene i ca 45-75 graders vinkel. Når stangen berører brystet, press den opp og litt bakover mot stativet. Vanlige feil: (1) Skuldrene løftes fra benken og mister retraktert posisjon, noe som reduserer stabilitet og øker skulderbelastning. (2) Albuene flarer ut i 90 grader, som gir ugunstig belastning på skulderleddet. (3) Stangen spretter på brystet istedenfor kontrollert berøring, noe som kan skade brystbenet og fjerner muskelkontroll i bunnposisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom flerleddsøvelser og isolasjonsøvelser. Gi to eksempler på hver type, og forklar hvorfor flerleddsøvelser bør utgjøre kjernen i et styrkeprogram.',
        solution: 'Flerleddsøvelser involverer bevegelse over to eller flere ledd og aktiverer mange muskelgrupper samtidig. Eksempler: knebøy (hofte- og kneledd), markløft (hofte-, kne- og ankelledd). Isolasjonsøvelser involverer kun ett ledd og fokuserer på én muskelgruppe. Eksempler: bicepscurl (kun albueleddet), beinekstensjon (kun kneleddet). Flerleddsøvelser bør utgjøre kjernen fordi de: (1) gir mer tidseffektiv trening, (2) trener naturlige bevegelsesmønstre med stor overføringsverdi, (3) gir sterkere hormonrespons, og (4) trener stabiliserende muskler som er viktige for koordinasjon og skadesforebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'PRAKTISK OPPGAVE: Velg to av de fem øvelsene (knebøy, markløft, benkpress, militærpress, roing). Film deg selv eller en medelev som utfører øvelsene med lett belastning. Analyser teknikken og skriv en rapport der du identifiserer hva som gjøres riktig og hva som kan forbedres.',
        solution: 'Rapporten bør inneholde: (1) Beskrivelse av valgte øvelser og belastning. (2) Analyse av startposisjon, bevegelsesutførelse og vanlige feil. (3) Minst to positive observasjoner og to forbedringspunkter per øvelse. (4) Konkrete tips til hvordan forbedringspunktene kan trenes. Eksempel på god analyse: «I knebøy var startposisjonen god med nøytral rygg og riktig fotplassering. Dybden var tilstrekkelig (under parallell). Forbedringspunkt: Knærne falt litt innover i bunnposisjon (lett valgus), noe som kan trenes med sideliggende hofteabduksjon og cues om å presse knærne ut.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en komplett oppvarmingsrutine for en treningsøkt der hovedøvelsene er knebøy (arbeidsvekt 80 kg) og benkpress (arbeidsvekt 60 kg). Inkluder generell oppvarming, dynamisk tøying og spesifikke oppvarmingssett med foreslåtte vekter.',
        solution: 'Generell oppvarming (8-10 min): 5 min romaskin i moderat tempo, deretter dynamisk tøying: bensving (10 per side), hofteåpnere (10 per side), bryststrekkere i dørkarmen, armsirkler. Spesifikk oppvarming knebøy: Tomstang (20 kg) x 10, 40 kg x 8, 55 kg x 5, 65 kg x 3, 75 kg x 1-2, deretter arbeidssett 80 kg. Spesifikk oppvarming benkpress: Tomstang (20 kg) x 10, 30 kg x 8, 40 kg x 5, 50 kg x 3, 55 kg x 1-2, deretter arbeidssett 60 kg. Total tid for oppvarming: ca 15-20 minutter. Prinsipp: Hvert oppvarmingssett øker belastningen med ca 10-20 %, og repetisjonene synker etter hvert som vekten øker for å spare energi til arbeidssettene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.4: Periodisering av styrketrening
// ============================================================================

export const CHAPTER_TRENING_1_4_4: TextbookChapter = {
  id: 'trening-1-4-4',
  courseId: 'trening-1',
  chapterNumber: '4.4',
  title: 'Periodisering av styrketrening',
  description: 'Lær om lineær, bølge- og blokkperiodisering, og hvordan du planlegger styrketrening i makrosykluser.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forstå prinsippene bak periodisering av styrketrening',
    'kunne planlegge et periodisert styrketreningsprogram',
  ],
  content: [
    {
      id: 'tr-4-4-intro',
      type: 'text',
      content: `## Periodisering av styrketrening

Periodisering handler om å organisere treningen i planlagte faser med ulike mål, belastninger og volum. Formålet er å sikre kontinuerlig fremgang, forebygge overtrenning og peake på riktig tidspunkt. Uten periodisering stagnerer de fleste utøvere etter noen måneder med lineær progresjon.

**Hvorfor periodisere?**
- Kroppen tilpasser seg trening -- samme stimulus gir stadig mindre effekt
- Ulike styrkeegenskaper krever ulike treningsmetoder
- Restitusjon og belastning må balanseres over tid
- Utøvere som konkurrerer må peake til riktig tidspunkt`,
    },
    {
      id: 'tr-4-4-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er systematisk planlegging av trening i tidsperioder med varierende belastning, volum og intensitet for å optimalisere tilpasninger og redusere risikoen for overtrening og skader.

**Sentrale begreper:**
- **Makrosyklus**: Hele treningsåret eller en lang planleggingsperiode (6-12 måneder)
- **Mesosyklus**: En treningsblokk på 3-6 uker med spesifikt fokus
- **Mikrosyklus**: Én treningsuke med daglig planlegging
- **Deload**: En planlagt uke med redusert belastning for restitusjon`,
    },
    {
      id: 'tr-4-4-text-1',
      type: 'text',
      title: 'Lineær periodisering',
      content: `**Lineær periodisering** (klassisk periodisering) er den enkleste formen. Treningen beveger seg systematisk fra høyt volum og lav intensitet til lavt volum og høy intensitet over tid.

**Typisk oppbygging:**

| Fase | Varighet | Volum | Intensitet | Mål |
|------|---------|-------|-----------|-----|
| **Fase 1: Hypertrofi** | 4-6 uker | Høyt (3-4 x 10-12) | Moderat (65-75 %) | Muskelvekst, grunnlag |
| **Fase 2: Grunnstyrke** | 4-6 uker | Moderat (3-4 x 6-8) | Høy (75-85 %) | Styrkeøkning |
| **Fase 3: Maksimal styrke** | 3-4 uker | Lavt (3-5 x 1-5) | Svært høy (85-95 %) | Peak styrke |
| **Fase 4: Deload/overgang** | 1-2 uker | Lavt | Lav-moderat | Restitusjon |

**Fordeler:**
- Enkel å forstå og gjennomføre
- God for nybegynnere og middels trente
- Bygger systematisk fra grunnlag til topp

**Ulemper:**
- Egenskaper trent tidlig i syklusen kan tape seg mot slutten
- Mindre variasjon kan gi monotoni
- Krever lang planleggingshorisont`,
    },
    {
      id: 'tr-4-4-example-1',
      type: 'example',
      title: 'Eksempel: 16 ukers lineær periodisering',
      problem: 'Sett opp en 16 ukers lineær periodisering for en utøver som vil øke sin maksimale styrke i knebøy. Nåværende 1RM er 100 kg.',
      solution: `**16 ukers lineær periodisering -- Knebøy**

**Fase 1: Hypertrofi (uke 1-6)**
- 4 x 10 på 67 kg (67 %)
- 4 x 10 på 70 kg (70 %)
- 4 x 8 på 72 kg (72 %)
- 4 x 8 på 75 kg (75 %)
- 3 x 10 på 70 kg (70 %) -- lettere uke
- 4 x 8 på 75 kg (75 %)

**Fase 2: Grunnstyrke (uke 7-12)**
- 4 x 6 på 80 kg (80 %)
- 4 x 6 på 82 kg (82 %)
- 4 x 5 på 85 kg (85 %)
- 4 x 5 på 87 kg (87 %)
- 3 x 6 på 80 kg (80 %) -- lettere uke
- 3 x 5 på 87 kg (87 %)

**Fase 3: Maksimal styrke (uke 13-15)**
- 5 x 3 på 90 kg (90 %)
- 5 x 2 på 93 kg (93 %)
- 3 x 1-2 på 95 kg (95 %)

**Fase 4: Deload og test (uke 16)**
- 3 x 3 på 80 kg, deretter 1RM-test

**Forventet ny 1RM:** 105-110 kg`,
    },
    {
      id: 'tr-4-4-text-2',
      type: 'text',
      title: 'Bølgeperiodisering (undulerende periodisering)',
      content: `**Bølgeperiodisering** varierer belastning og volum innenfor kortere tidsperioder -- enten fra økt til økt (daglig undulerende) eller fra uke til uke (ukentlig undulerende).

**Daglig undulerende periodisering (DUP):**

| Dag | Fokus | Sett x Reps | Intensitet |
|-----|-------|------------|-----------|
| Mandag | Hypertrofi | 4 x 10 | 70 % |
| Onsdag | Maksimal styrke | 5 x 3 | 90 % |
| Fredag | Eksplosiv styrke | 4 x 5 | 75 % (maks fart) |

**Ukentlig undulerende periodisering:**

| Uke | Fokus | Volum | Intensitet |
|-----|-------|-------|-----------|
| Uke 1 | Hypertrofi | Høyt | Moderat |
| Uke 2 | Styrke | Moderat | Høy |
| Uke 3 | Peak/kraft | Lavt | Svært høy |
| Uke 4 | Deload | Lavt | Lav |

**Fordeler:**
- Hyppig variasjon motvirker tilvenning
- Trener flere egenskaper parallelt
- Forskning viser like god eller bedre effekt enn lineær for trente utøvere
- Mer fleksibelt i gjennomføring

**Ulemper:**
- Mer komplisert å planlegge
- Kan være vanskelig for nybegynnere å håndtere
- Krever god treningsforståelse`,
    },
    {
      id: 'tr-4-4-text-3',
      type: 'text',
      title: 'Blokkperiodisering',
      content: `**Blokkperiodisering** (Verkhoshansky) deler treningen inn i konsentrerte blokker der hver blokk har ett primært fokus. Tilpasningene fra én blokk bygger grunnlaget for neste.

**De tre blokkene:**

| Blokk | Navn | Varighet | Fokus | Eksempel |
|-------|------|---------|-------|---------|
| **A** | Akkumulering | 3-4 uker | Høyt volum, moderat intensitet | 4 x 10-12 på 65-75 % |
| **T** | Transmutasjon | 3-4 uker | Moderat volum, høy intensitet | 4 x 4-6 på 80-90 % |
| **R** | Realisering | 1-3 uker | Lavt volum, svært høy intensitet | 3 x 1-3 på 90-100 % |

**Prinsippet:** Akkumuleringsfasen bygger arbeidskapasitet og muskelmasse. Transmutasjonsfasen konverterer dette til spesifikk styrke. Realiseringsfasen realiserer maksimal prestasjon.

**Fordeler:**
- Svært effektiv for avanserte utøvere
- Gir fokusert stimuli i hver blokk
- Godt egnet for idrettsutøvere med spesifikke konkurransetidspunkter

**Ulemper:**
- Krever god treningserfaring og -forståelse
- Egenskaper som ikke trenes i en blokk kan tape seg
- Mest egnet for viderekomne og avanserte`,
    },
    {
      id: 'tr-4-4-def-2',
      type: 'definition',
      title: 'Deload',
      content: `En deload (avlastningsuke) er en planlagt periode med redusert treningsbelastning. Formålet er å gi kroppen tid til full restitusjon etter ukene med progressiv overbelastning.

**Typisk deload:**
- Reduser volumet med 40-60 % (færre sett)
- Behold intensiteten eller reduser den med 10-20 %
- Behold øvelsesutvalget (for å opprettholde bevegelsesmønstre)
- Varighet: Vanligvis 1 uke, gjennomføres hver 4.-6. uke

Deload er ikke lat trening -- det er strategisk restitusjon som gjør deg sterkere på lang sikt.`,
    },
    {
      id: 'tr-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Makrosyklus for en fotballspiller',
      problem: 'En fotballspiller har sesongstart i august. Sett opp en makrosyklus for styrketrening fra januar til august.',
      solution: `**Makrosyklus -- Styrketrening for fotballspiller (januar-august)**

**Januar-februar (8 uker): Oppbyggingsfase**
- Mål: Muskelvekst og grunnstyrke
- 3-4 styrkeøkter per uke
- Hypertrofifokus: 3-4 x 8-12 reps, 65-80 %
- Øvelser: Knebøy, markløft, benkpress, utfall, roing

**Mars-april (8 uker): Styrkefase**
- Mål: Maksimal styrke
- 3 styrkeøkter per uke
- Tung trening: 4-5 x 3-5 reps, 85-95 %
- Øvelser: Knebøy, markløft, benkpress + tilleggsøvelser

**Mai-juni (8 uker): Kraft/eksplosivitetsfase**
- Mål: Konvertere styrke til eksplosivitet
- 2-3 styrkeøkter per uke (mer fotball)
- Kombinert: Tungt + eksplosivt (f.eks. knebøy 3x3 → bokshopp 3x5)
- Plyo: Hopp, kast, sprint

**Juli-august (4 uker): Vedlikehold + sesongstart**
- Mål: Opprettholde styrke, prioritere fotball
- 1-2 styrkeøkter per uke
- Vedlikehold: 2-3 x 3-5 reps på 80-85 %
- Fokus på skadesforebygging

**Deload:** Hver 4. uke i oppbygging og styrke, hver 3. uke i kraft/eksplosivitetsfasen.`,
    },
    {
      id: 'tr-4-4-note-1',
      type: 'note',
      title: 'Periodisering for nybegynnere',
      content: `Nybegynnere trenger ikke avansert periodisering. Enkel lineær progresjon (legge til litt vekt hver uke) fungerer utmerket de første 3-12 månedene. Først når fremgangen stagnerer, er det tid for å introdusere mer avanserte periodiseringsmodeller. Start enkelt og øk kompleksiteten etter behov.`,
    },
    {
      id: 'tr-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner lineær periodisering?',
        options: [
          'Belastningen varierer fra dag til dag',
          'Treningen beveger seg fra høyt volum/lav intensitet til lavt volum/høy intensitet',
          'Hver blokk har kun ett fokus',
          'Belastningen er lik hele året',
        ],
        answer: 1,
        solution: 'Lineær periodisering kjennetegnes av en systematisk bevegelse fra høyt volum og lav intensitet (hypertrofifase) til lavt volum og høy intensitet (maksimal styrkefase) over tid.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-4-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med en deload-uke?',
        options: [
          'Å trene med maksimal intensitet',
          'Å teste 1RM i alle øvelser',
          'Å gi kroppen tid til full restitusjon etter perioder med progressiv overbelastning',
          'Å slutte å trene i en uke',
        ],
        answer: 2,
        solution: 'En deload-uke er en planlagt avlastningsperiode der volumet reduseres med 40-60 %. Formålet er strategisk restitusjon -- kroppen får tid til å reparere og tilpasse seg, slik at du kan fortsette å trene hardt i neste blokk.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I blokkperiodisering, hva er rekkefølgen på de tre blokkene?',
        options: [
          'Realisering → Transmutasjon → Akkumulering',
          'Transmutasjon → Akkumulering → Realisering',
          'Akkumulering → Transmutasjon → Realisering',
          'Akkumulering → Realisering → Transmutasjon',
        ],
        answer: 2,
        solution: 'Rekkefølgen i blokkperiodisering er Akkumulering (høyt volum, bygger grunnlag) → Transmutasjon (moderat volum, høy intensitet, konverterer til styrke) → Realisering (lavt volum, svært høy intensitet, realiserer maksimal prestasjon).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom daglig undulerende periodisering (DUP) og lineær periodisering. Diskuter fordeler og ulemper med hver metode.',
        solution: 'Lineær periodisering beveger seg systematisk fra høyt volum til høy intensitet over mange uker (mesosykluser). DUP varierer belastningen fra økt til økt innenfor samme uke, slik at du trener ulike styrkeegenskaper i samme mikrosyklus. Fordeler lineær: Enkel å forstå, god for nybegynnere, systematisk oppbygging. Ulemper lineær: Egenskaper trent tidlig kan tape seg, monoton, krever lang planlegging. Fordeler DUP: Variasjon motvirker tilvenning, trener flere egenskaper parallelt, forskning viser lik eller bedre effekt for trente. Ulemper DUP: Mer komplisert, kan være forvirrende for nybegynnere, krever god treningsforståelse for å dosere riktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en idrett med en tydelig konkurransesesong. Sett opp en forenklet makrosyklus (årsplan) for styrketrening som viser hva utøveren bør fokusere på i forberedelsesfasen, konkurransefasen og overgangsfasen. Begrunn valgene dine.',
        solution: 'Svaret bør inneholde: Valgt idrett og konkurransekalender, inndeling i forberedelsesfase (generell oppbygging → spesifikk styrke), konkurransefase (vedlikehold og peak), og overgangsfase (restitusjon og alternativ aktivitet). Eksempel svømming (konkurranse i mars): Oktober-november: Hypertrofi og grunnstyrke (4 x/uke, 3-4 x 8-12 reps, 70-80 %). Desember-januar: Maksimal styrke (3 x/uke, 4-5 x 3-5 reps, 85-95 %). Februar: Kraft/hastighet (2-3 x/uke, eksplosive øvelser + lett styrke). Mars (konkurranse): Vedlikehold (1-2 x/uke, lett styrke) + nedtrapping. April-mai: Overgangsfase med alternativ trening og restitusjon. Begrunnelse bør knyttes til periodiseringsprinsipper og sportens krav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp en detaljert 12 ukers blokkperiodisering for en utøver som vil forbedre maksimal styrke i knebøy. Inkluder akkumulerings-, transmutasjons- og realiseringsfase med ukentlig progresjon, deload, og øvelsesutvalg.',
        solution: 'Akkumuleringsfase (uke 1-5): Uke 1: 4x10 på 65 %, Uke 2: 4x10 på 67 %, Uke 3: 4x8 på 70 %, Uke 4: 4x8 på 72 %. Uke 5 deload: 3x8 på 60 %. Tilleggsøvelser: Beinpress, utfall, benstrekk, romenretter. Transmutasjonsfase (uke 6-9): Uke 6: 4x5 på 80 %, Uke 7: 4x4 på 85 %, Uke 8: 5x3 på 88 %. Uke 9 deload: 3x5 på 75 %. Tilleggsøvelser: Frontbøy, pause-knebøy, hip thrust. Realiseringsfase (uke 10-12): Uke 10: 4x2 på 92 %, Uke 11: 3x1-2 på 95 %, Uke 12: Deload + 1RM-test. Nøkkel: Hver blokk bygger på den forrige -- volumet i akkumuleringsfasen gir arbeidskapasitet, transmutasjonen konverterer til styrke, og realiseringen realiserer nye personlige rekorder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 4.5: Styrketrening for ulike grupper
// ============================================================================

export const CHAPTER_TRENING_1_4_5: TextbookChapter = {
  id: 'trening-1-4-5',
  courseId: 'trening-1',
  chapterNumber: '4.5',
  title: 'Styrketrening for ulike grupper',
  description: 'Lær hvordan styrketrening bør tilpasses ungdom, kvinner, eldre og idrettsutøvere med ulike behov.',
  estimatedMinutes: 23,
  competenceGoals: [
    'kunne tilpasse styrketrening til ulike aldersgrupper og målgrupper',
    'forstå idrettsspesifikk styrketrening og overføringsprinsippet',
  ],
  content: [
    {
      id: 'tr-4-5-intro',
      type: 'text',
      content: `## Styrketrening for ulike grupper

Styrketrening er nyttig for alle, men treningen må tilpasses den enkeltes alder, erfaring, mål og forutsetninger. En 15-åring bør trene annerledes enn en 70-åring, og en langdistanseløper har andre styrkebehov enn en brytter. I dette kapittelet ser vi på hvordan styrketrening bør tilpasses ulike grupper.`,
    },
    {
      id: 'tr-4-5-text-1',
      type: 'text',
      title: 'Styrketrening for ungdom',
      content: `**Styrketrening for barn og ungdom** har lenge vært omgitt av myter -- spesielt påstanden om at styrketrening hemmer vekst. Forskning viser tydelig at dette ikke stemmer. Tvert imot kan styrketrening for ungdom gi mange fordeler:

**Fordeler:**
- Økt beintetthet og skjelettstruktur
- Bedre motorisk kontroll og koordinasjon
- Skadesforebygging
- Økt selvtillit og kroppsbilde
- Grunnlag for idrettslig utvikling

**Retningslinjer for ungdom:**
- Start med kroppsvektsøvelser og lett belastning
- Fokus på teknikk fremfor tung belastning
- Lær grunnleggende bevegelsesmønstre (knebøy, hoftehengsel, press, drag)
- 2-3 økter per uke, allsidig trening
- Gradvis progresjon -- øk belastning når teknikken er god
- Unngå maksimale løft (1RM-testing) før tilstrekkelig modning (typisk 15-16 år)
- Alltid kvalifisert veiledning

**Viktig:** Ungdom er ikke miniatyrvoksne. Treningsprogrammer må ta hensyn til biologisk modning, vekstspurter og psykologisk utvikling.`,
    },
    {
      id: 'tr-4-5-def-1',
      type: 'definition',
      title: 'Biologisk vs. kronologisk alder',
      content: `**Kronologisk alder** er alderen i år fra fødsel. **Biologisk alder** beskriver hvor langt individet har kommet i sin fysiske modning. To 14-åringer kan ha svært ulik biologisk alder -- én kan være tidlig moden og nesten ferdig utvokst, mens en annen kan være i starten av puberteten.

Styrketrening for ungdom bør tilpasses biologisk alder, ikke kronologisk alder. En tidlig moden 14-åring kan tåle mer belastning enn en sent moden 16-åring.`,
    },
    {
      id: 'tr-4-5-text-2',
      type: 'text',
      title: 'Styrketrening for kvinner',
      content: `**Kvinner og styrketrening** har lenge vært preget av misforståelser. Mange kvinner har unngått tung styrketrening i frykt for å «bli store», men dette er en myte. Kvinner har langt lavere nivåer av testosteron enn menn, noe som gjør at muskelveksten er mer moderat.

**Fysiologiske forskjeller:**
- Kvinner har ca 10 ganger lavere testosteronnivå
- Relativt sett er kvinner sterkere i underkroppen enn i overkroppen sammenlignet med menn
- Kvinner har generelt bedre utholdende styrke relativt til maksimal styrke
- Kvinner restituerer ofte raskere mellom sett og kan tolerere høyere treningsvolum

**Praktiske anbefalinger:**
- Kvinner bør trene styrke på samme måte som menn -- med tunge flerleddsøvelser
- Kvinner kan ofte trene med noe høyere volum og hyppighet
- Kortere pauser mellom sett kan fungere godt
- Tren 2-4 ganger per uke med progressiv overbelastning
- Menstruasjonssyklusen kan påvirke treningskapasiteten: Noen kvinner presterer best i follikelfasen (etter menstruasjon), mens andre merker mindre forskjell

**Fordeler med styrketrening for kvinner:**
- Økt beintetthet (viktig for forebygging av osteoporose)
- Bedre metabolsk helse
- Økt selvtillit og kroppsimage
- Skadesforebygging (spesielt korsbåndskader)`,
    },
    {
      id: 'tr-4-5-text-3',
      type: 'text',
      title: 'Styrketrening for eldre',
      content: `**Styrketrening for eldre** er kanskje den gruppen der styrketrening har størst helsegevinst. Etter 50 år taper kroppen naturlig muskelmasse (sarkopeni) med ca 1-2 % per år, og styrken kan falle enda raskere.

**Sarkopeni og aldring:**
- Muskelmasse tapes gradvis fra 30-årsalderen, akselererer etter 50
- Tap av styrke går raskere enn tap av muskelmasse
- Type II-fibre (hurtige) tapes raskest
- Fører til redusert funksjon, fallrisiko og tap av selvstendighet

**Fordeler med styrketrening for eldre:**
- Bremser eller reverserer muskeltap
- Økt beintetthet (forebygger osteoporose og brudd)
- Bedre balanse og fallforebygging
- Økt funksjonell kapasitet (reise seg fra stol, bære handleposer)
- Bedre metabolsk helse (insulinfølsomhet, blodtrykk)
- Økt livskvalitet og selvstendighet

**Retningslinjer for eldre:**
- Start forsiktig med lett belastning og fokus på teknikk
- 2-3 økter per uke med hviledag mellom
- Inkluder flerleddsøvelser tilpasset funksjonsnivå
- Lengre oppvarming og gradvis belastningsøkning
- Balanse- og stabilitetsøvelser bør inkluderes
- Progresjonen kan være langsommere, men prinsippene er de samme
- Tung styrketrening (relativt til individets kapasitet) er trygt og anbefalt`,
    },
    {
      id: 'tr-4-5-def-2',
      type: 'definition',
      title: 'Sarkopeni',
      content: `Sarkopeni er aldersrelatert tap av muskelmasse, styrke og funksjon. Tilstanden starter gradvis fra 30-årsalderen og akselererer etter 50-60 år. Regelmessig styrketrening er det mest effektive tiltaket for å forebygge og behandle sarkopeni. Kombinert med tilstrekkelig proteininntak (1,2-1,6 g/kg/dag for eldre) kan styrketrening redusere muskeltap betydelig.`,
    },
    {
      id: 'tr-4-5-text-4',
      type: 'text',
      title: 'Idrettsspesifikk styrketrening',
      content: `**Idrettsspesifikk styrketrening** handler om å tilpasse styrketreningen slik at den gir størst mulig overføring til idrettens krav. Prinsippet er at treningen bør ligne idrettens bevegelsesmønstre, hastigheter og kraftkrav.

**Overføringsprinsippet (spesifisitet):**
Treningseffekten er størst når treningen ligner bevegelsen du ønsker å forbedre. Men dette betyr ikke at du bare skal etterligne idrettsbevegelsen med vekt -- generell styrke er grunnlaget.

**Trinnvis tilnærming:**

| Fase | Fokus | Eksempel (fotball) |
|------|-------|--------------------|
| **1. Generell styrke** | Grunnleggende flerleddsøvelser | Knebøy, markløft, benkpress |
| **2. Rettet styrke** | Øvelser som ligner idrettens bevegelser | Utfall, ettbens knebøy, step-ups |
| **3. Spesifikk styrke** | Kraft og hastighet i idrettens mønster | Bokshopp, sprinter, retningskift med belastning |
| **4. Konkurransespesifikk** | Trening i selve idretten med økt krav | Sprint- og smidighetsøvelser på banen |

**Eksempler på idrettsspesifikk styrke:**
- **Svømming:** Sittende drag og lat pulldown (etterligner svømmetaket), kjernerotasjon
- **Klatring:** Hengende øvelser, gripstyrke, skulderpress
- **Langrenn:** Knebøy og utfall (stakefase), kjernerotasjon, trippeltrekk
- **Håndball:** Eksplosive hopp, skulderrotasjon med strikk, knebøy med hopp`,
    },
    {
      id: 'tr-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Styrketrening tilpasset en eldre person',
      problem: 'Berit (68 år) har lite treningserfaring, men ønsker å bli sterkere for å mestre daglige gjøremål bedre. Hun har lett artrose i knærne. Sett opp et forslag til styrkeprogram for henne.',
      solution: `**Styrkeprogram for Berit (68 år), nybegynner**

**Frekvens:** 2 ganger per uke (tirsdag og fredag)
**Varighet:** Ca 45 minutter per økt (inkl. oppvarming)

**Oppvarming (10 min):**
- 5 min gange på tredemølle i rolig tempo
- Dynamisk tøying: Beinsving, armrotasjon, lett knebøy uten vekt

**Økt:**

| Øvelse | Sett x Reps | Merknad |
|--------|------------|---------|
| Reise-sette seg fra stol (chair squat) | 3 x 10 | Først uten vekt, gradvis tilleggsvekt |
| Veggskyv (wall push-ups) | 3 x 10 | Progresjon til vanlige push-ups |
| Sittende roing med strikk | 3 x 12 | Styrker øvre rygg og holdning |
| Step-ups på lav kasse (15 cm) | 2 x 8 per ben | Bygger beinstyrke og balanse |
| Planke fra knærne | 3 x 20 sek | Kjernemuskulatur |
| Hæl-hev stående | 2 x 15 | Leggmuskulatur og balanse |

**Progresjon:** Øk repetisjoner først, deretter belastning. Når hun klarer 3x12 komfortabelt, øk vekt med 1-2 kg. Artrose: Unngå dype knebøy, tilpass bevegelsesutslaget.
**Mål etter 12 uker:** Reise seg fra stol med 5 kg manualer, vanlig push-ups fra gulvet, planke 45 sek.`,
    },
    {
      id: 'tr-4-5-tip-1',
      type: 'tip',
      title: 'Styrketrening og menstruasjonssyklusen',
      content: `Forskning viser at menstruasjonssyklusen kan påvirke treningskapasiteten:

**Follikelfasen (dag 1-14):** Mange kvinner opplever bedre styrke og energi, spesielt mot slutten av fasen. Kan være gunstig for tunge treningsøkter.

**Lutealfasen (dag 15-28):** Noen opplever redusert kapasitet, økt opplevd anstrengelse og bedre utholdende kapasitet. Kan passe for volum-basert trening.

**Viktig:** Individuell variasjon er stor. Noen merker liten forskjell. Bruk en treningsdagbok for å finne ditt eget mønster.`,
    },
    {
      id: 'tr-4-5-warning-1',
      type: 'warning',
      title: 'Myter om styrketrening',
      content: `**Myte 1: «Styrketrening hemmer vekst hos ungdom.»**
Feil. Forskning viser at styrketrening er trygt og gunstig for ungdom når det gjøres med god teknikk og alderstilpasset veiledning.

**Myte 2: «Kvinner blir store og maskuline av styrketrening.»**
Feil. Kvinner har for lavt testosteronnivå til å bygge store muskler uten ekstreme tiltak. Styrketrening gir en tonet og sterk kropp.

**Myte 3: «Eldre er for skrøpelige til å trene styrke.»**
Feil. Eldre har kanskje mest å vinne på styrketrening. Selv 90-åringer kan øke muskelmasse og styrke med riktig trening.`,
    },
    {
      id: 'tr-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Fra hvilken alder starter kroppen å tape muskelmasse naturlig (sarkopeni)?',
        options: [
          'Fra 20-årsalderen',
          'Fra 30-årsalderen',
          'Fra 50-årsalderen',
          'Fra 70-årsalderen',
        ],
        answer: 1,
        solution: 'Sarkopeni starter gradvis allerede fra 30-årsalderen, men tapet akselererer betydelig etter 50-60 år. Regelmessig styrketrening kan bremse og delvis reversere dette tapet uavhengig av alder.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-4-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om styrketrening for ungdom er korrekt?',
        options: [
          'Styrketrening hemmer vekst og bør unngås før 18 år',
          'Ungdom bør kun trene med maskiner, aldri frie vekter',
          'Styrketrening er trygt for ungdom med riktig veiledning og teknikk-fokus',
          'Ungdom bør teste 1RM regelmessig for å måle fremgang',
        ],
        answer: 2,
        solution: 'Forskning viser tydelig at styrketrening er trygt og gunstig for ungdom når det gjennomføres med kvalifisert veiledning, fokus på teknikk og alderstilpasset belastning. Frie vekter er fine når teknikken beherskes, men 1RM-testing bør utsettes til tilstrekkelig modning.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-4-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor kvinner ofte kan trene med høyere volum enn menn i styrketrening. Nevn minst to fysiologiske forklaringer.',
        solution: 'Kvinner kan ofte trene med høyere volum fordi: (1) De har relativt mer type I-muskelfibre (langsomme, utholdende), som tåler mer repetisjonstrening og restituerer raskere. (2) Kvinner har lavere absolutt kraftnivå, noe som gir lavere total mekanisk belastning per sett, og dermed raskere restitusjon av muskler og nervesystem. (3) Kvinner har ofte bedre relativ utholdende styrke sammenlignet med maksimal styrke, slik at de kan utføre flere repetisjoner ved en gitt prosentandel av 1RM. Disse faktorene gjør at kortere pauser mellom sett og flere ukentlige økter per muskelgruppe ofte fungerer godt for kvinner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar den trinnvise tilnærmingen til idrettsspesifikk styrketrening (fra generell styrke til konkurransespesifikk). Bruk en valgfri idrett som eksempel.',
        solution: 'Den trinnvise tilnærmingen innebærer fire faser: (1) Generell styrke: Bygg et bredt grunnlag med flerleddsøvelser. (2) Rettet styrke: Velg øvelser som ligner idrettens bevegelsesmønstre. (3) Spesifikk styrke: Tren med hastigheter og kraftkrav som ligner idretten. (4) Konkurransespesifikk: Trening i selve idrettens bevegelser med økte krav. Eksempel volleyball: (1) Knebøy, markløft, benkpress for generelt grunnlag. (2) Ettbens knebøy, overhead press, step-ups for rettet styrke mot hopp og slag. (3) Bokshopp, medisinballkast over hodet, drop jumps for eksplosiv kraft. (4) Blokk- og smasheøvelser på banen med økt krav. Prinsipp: Starten er bredt og generelt, mens slutten er spissere og mer idrettslik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'tr-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er personlig trener og får tre nye klienter: (A) en 14-årig fotballspiller, (B) en 35-årig kvinne uten treningserfaring, og (C) en 72-årig mann med lett nedsatt balanse. Beskriv kort hvordan du vil tilpasse styrketreningen for hver av dem (mål, øvelsesvalg, belastning, frekvens og spesielle hensyn).',
        solution: '(A) 14 år, fotball: Mål: Teknikk, bevegelseskvalitet, allsidig styrke. Øvelser: Kroppsvektøvelser (push-ups, knebøy, planke), gradvis innføring av lette manualer. Belastning: Lett, 3x10-15 reps med fokus på korrekt utførelse. Frekvens: 2-3 x/uke. Hensyn: Biologisk modenhet, variasjon, gjøre det morsomt, ingen 1RM-testing, kvalifisert veiledning. (B) 35 år, kvinne, nybegynner: Mål: Generell styrke og helse, lære basisøvelser. Øvelser: Knebøy, markløft, benkpress, roing, skulderpress -- starte med maskiner/lette vekter. Belastning: 3x10-12, gradvis økning. Frekvens: 3 x/uke. Hensyn: Teknikklæring, bygge treningsvane, eventuelle menstruasjonstilpasninger, kan tåle relativt høyt volum. (C) 72 år, mann, nedsatt balanse: Mål: Funksjonell styrke, fallforebygging, selvstendighet. Øvelser: Reise-sette seg fra stol, veggpress, strikk-roing, step-ups (med støtte), planke fra knærne, hæl-hev. Belastning: Lett, 2-3x10-12, langsom progresjon. Frekvens: 2 x/uke. Hensyn: Grundig oppvarming, balanseøvelser inkluderes, lengre restitusjon, medisinsk avklaring, tilpasse til eventuelle leddplager.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-4-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Styrketrening er den viktigste treningsformen for folkehelsen.» Bruk kunnskap fra dette kapittelet om styrketrening for ulike grupper, og argumenter både for og mot påstanden. Avslutt med din egen konklusjon.',
        solution: 'For-argumenter: Styrketrening forebygger sarkopeni og osteoporose hos eldre, reduserer fallrisiko, forbedrer metabolsk helse (insulinfølsomhet, blodtrykk), forebygger skader i alle aldersgrupper, styrker mentalt velvære og selvbilde, og er den eneste treningsformen som effektivt øker muskelmasse og beintetthet. Mot-argumenter: Kardiovaskulær trening har dokumentert effekt på hjerte-karsykdommer (den største dødsårsaken), utholdenhetstrening forbedrer VO2maks og daglig funksjon, bevegelighet og mobilitet er viktig for å unngå plager, og de fleste helseretningslinjer anbefaler kombinasjon av styrke og utholdenhet. Konklusjon: Styrketrening er kanskje den mest undervurderte treningsformen for folkehelsen, spesielt for eldre og kvinner. Men optimal helse krever en kombinasjon av styrke, utholdenhet, bevegelighet og daglig aktivitet. Styrketrening bør ha en sentral plass i alles treningsprogram, men bør ikke stå alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i Seksjon 4
// ============================================================================

export const TRENING_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_4_1,
  CHAPTER_TRENING_1_4_2,
  CHAPTER_TRENING_1_4_3,
  CHAPTER_TRENING_1_4_4,
  CHAPTER_TRENING_1_4_5,
];

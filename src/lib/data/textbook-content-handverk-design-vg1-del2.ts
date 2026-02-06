/**
 * Håndverk, design og produktutvikling VG1 - Del 2: Materialer
 *
 * Dekker kapittel 2.1-2.7 i LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Materialegenskaper og bruksområder
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_1: TextbookChapter = {
  id: 'handverk-design-vg1-2-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.1',
  title: 'Materialegenskaper og bruksområder',
  description: 'Grundig gjennomgang av ulike materialers egenskaper, styrker og begrensninger. Elevene lærer å velge riktig materiale til ulike formål basert på funksjonskrav.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for de ulike materialenes egenskaper og funksjonsområder',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-1-intro',
      type: 'text',
      content: `Materialkunnskap er grunnmuren i alt håndverk og design. Når du forstår hvordan ulike materialer oppfører seg, kan du ta bedre valg og skape produkter som holder i mange år. I dette kapittelet lærer du om de viktigste egenskapene materialer kan ha, og hvordan disse påvirker hva materialene egner seg til.`,
    },
    {
      id: 'handverk-design-vg1-2-1-def-1',
      type: 'definition',
      title: 'Materialegenskaper',
      content: `Materialegenskaper er de karakteristiske trekkene ved et materiale som avgjør hvordan det oppfører seg under bruk og bearbeiding. Viktige egenskaper inkluderer styrke, fleksibilitet, hardhet, holdbarhet, vekt og utseende.`,
    },
    {
      id: 'handverk-design-vg1-2-1-def-2',
      type: 'definition',
      title: 'Funksjonsområde',
      content: `Et funksjonsområde beskriver hvilke bruksformål et materiale egner seg til basert på dets egenskaper. For eksempel egner aluminium seg til bruksområder der lav vekt og korrosjonsbestandighet er viktig.`,
    },
    {
      id: 'handverk-design-vg1-2-1-text-1',
      type: 'text',
      content: `**Mekaniske egenskaper**

De mekaniske egenskapene beskriver hvordan et materiale reagerer på fysisk påvirkning:

**Styrke**
Styrke måler hvor mye belastning et materiale tåler før det går i stykker. Vi skiller mellom:
- **Strekkstyrke**: Motstand mot å bli trukket fra hverandre
- **Trykkstyrke**: Motstand mot å bli presset sammen
- **Bøyestyrke**: Motstand mot bøying

**Hardhet**
Hardhet angir hvor godt materialet motstår riper og inntrykk. Harde materialer som stål og stein er vanskelige å ripe, mens myke materialer som tre og plast lett får merker.

**Fleksibilitet og elastisitet**
Fleksibilitet beskriver hvor lett et materiale bøyes, mens elastisitet angir evnen til å gå tilbake til opprinnelig form. Gummi er svært elastisk, mens glass er stivt og sprøtt.`,
    },
    {
      id: 'handverk-design-vg1-2-1-text-2',
      type: 'text',
      content: `**Fysiske egenskaper**

De fysiske egenskapene påvirker hvordan materialet oppfører seg i ulike miljøer:

**Vekt og densitet**
Materialets vekt per volumenhet er viktig for mange produkter. Aluminium veier bare en tredel av stål, noe som gjør det ideelt for produkter der lav vekt er ønskelig.

**Varmeledning**
Noen materialer leder varme godt (metaller), mens andre isolerer (tre, tekstil). Dette påvirker alt fra kokeredskaper til byggematerialer.

**Elektrisk ledningsevne**
Metaller leder strøm, mens de fleste andre materialer er isolatorer. Kobber og aluminium brukes derfor i elektriske ledninger.

**Fuktopptak**
Materialer som tre og tekstil kan absorbere fuktighet, noe som påvirker dimensjoner og holdbarhet. Plast og metall tar ikke opp fukt.`,
    },
    {
      id: 'handverk-design-vg1-2-1-def-3',
      type: 'definition',
      title: 'Holdbarhet',
      content: `Holdbarhet beskriver hvor lenge et materiale beholder sine egenskaper under normal bruk. Faktorer som påvirker holdbarhet er slitasje, værpåvirkning, UV-stråling og kjemisk påvirkning.`,
    },
    {
      id: 'handverk-design-vg1-2-1-text-3',
      type: 'text',
      content: `**Estetiske egenskaper**

Materialets utseende er ofte avgjørende for produktdesign:

**Overflatestruktur**
Materialer kan ha glatt, ru, matt eller blank overflate. Overflaten påvirker både utseende og følelse.

**Farge og mønster**
Naturlige materialer som tre og stein har unike mønstre. Metaller og plast kan farges eller overflatebehandles.

**Gjennomsiktighet**
Glass og noen plasttyper er gjennomsiktige, mens de fleste materialer er ugjennomsiktige. Tekstiler kan være alt fra helt tette til transparente.

**Bearbeidingsegenskaper**
Noen materialer er lette å forme og bearbeide, andre krever spesialverktøy. Tre lar seg lett skjære og forme, mens stein krever kraftige verktøy.`,
    },
    {
      id: 'handverk-design-vg1-2-1-text-4',
      type: 'text',
      content: `**Velge riktig materiale**

Når du skal velge materiale til et produkt, må du vurdere flere faktorer:

1. **Funksjonskrav**: Hva skal produktet brukes til? Må det tåle vær, belastning eller slitasje?

2. **Estetiske krav**: Hvordan skal produktet se ut og føles?

3. **Bearbeidingsmetode**: Hvilke verktøy og teknikker har du tilgang til?

4. **Økonomi**: Hva koster materialet, og hvor mye trenger du?

5. **Bærekraft**: Er materialet miljøvennlig? Kan det gjenbrukes eller resirkuleres?

6. **Tilgjengelighet**: Er materialet lett å få tak i?

En god designer veier alltid disse faktorene opp mot hverandre for å finne det beste kompromisset.`,
    },
    {
      id: 'handverk-design-vg1-2-1-example-1',
      type: 'example',
      title: 'Materialvalg for en utekrakk',
      content: `**Oppgave**: Velg materiale til en krakk som skal stå ute hele året.

**Funksjonskrav**: Tåle regn, snø, sol og frost. Bære vekten av en voksen person.

**Vurdering av alternativer**:
- **Furu (trykkimpregnert)**: Rimelig, lett å bearbeide, tåler vær med riktig behandling
- **Eik**: Naturlig holdbar, vakker, men dyr
- **Aluminium**: Lett, ruster ikke, moderne uttrykk
- **Plast**: Vedlikeholdsfri, men kan se billig ut

**Konklusjon**: Trykkimpregnert furu er et godt valg for en utekrakk - god balanse mellom pris, bearbeidbarhet og holdbarhet.`,
    },
    {
      id: 'handverk-design-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken egenskap beskriver et materiales motstand mot å bli trukket fra hverandre?',
        options: [
          { id: 'a', text: 'Trykkstyrke' },
          { id: 'b', text: 'Strekkstyrke', isCorrect: true },
          { id: 'c', text: 'Hardhet' },
          { id: 'd', text: 'Elastisitet' },
        ],
        solution: 'Strekkstyrke beskriver materialets motstand mot å bli trukket fra hverandre. Trykkstyrke gjelder motstand mot å bli presset sammen, hardhet handler om motstand mot riper, og elastisitet beskriver evnen til å gå tilbake til opprinnelig form.',
      },
    },
    {
      id: 'handverk-design-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom fleksibilitet og elastisitet.',
        solution: 'Fleksibilitet beskriver hvor lett et materiale kan bøyes eller formes, mens elastisitet beskriver materialets evne til å gå tilbake til sin opprinnelige form etter at belastningen er fjernet. Et materiale kan være fleksibelt uten å være elastisk - for eksempel blymetall som lett bøyes men forblir i den nye formen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre faktorer du må vurdere når du velger materiale til et produkt.',
        solution: 'Viktige faktorer ved materialvalg inkluderer: funksjonskrav (hva produktet skal tåle), estetiske krav (utseende og følelse), bearbeidingsmetode (hvilke verktøy som trengs), økonomi (materialkostnad), bærekraft (miljøpåvirkning) og tilgjengelighet (hvor lett materialet er å få tak i).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket materiale leder varme best?',
        options: [
          { id: 'a', text: 'Tre' },
          { id: 'b', text: 'Ull' },
          { id: 'c', text: 'Kobber', isCorrect: true },
          { id: 'd', text: 'Plast' },
        ],
        solution: 'Kobber er en utmerket varmeleder, noe som gjør det populært i kokeredskaper og varmevekslere. Tre, ull og plast er alle isolerende materialer som leder varme dårlig.',
      },
    },
    {
      id: 'handverk-design-vg1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du skal lage en skjærefjøl til kjøkkenet. Vurder tre ulike materialer og begrunn hvilket du ville valgt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke egenskaper er viktige for en skjærefjøl?',
            solution: 'Viktige egenskaper: hygiene (lett å rengjøre), hardhet (tåle kniv uten store merker), fuktbestandighet (tåle vann), slitestyrke, og at den er skånsom mot kniveggen.',
          },
          {
            label: 'b',
            task: 'Sammenlign tre, plast og bambus som materialer.',
            solution: 'Tre: Naturlig antibakterielt, skånsomt mot kniver, vakker, men krever vedlikehold. Plast: Hygienisk, tåler oppvaskmaskin, rimelig, men kan få dype riper. Bambus: Bærekraftig, hard, naturlig antibakterielt, men kan sprekke.',
          },
        ],
        solution: 'Et godt valg kan være tre (f.eks. eik eller bøk) fordi det er naturlig antibakterielt, skånsomt mot kniver, og gir en god arbeidsflate. Alternativt bambus for en mer bærekraftig løsning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Materialegenskaper', definition: 'Karakteristiske trekk ved et materiale som bestemmer dets oppførsel' },
    { term: 'Strekkstyrke', definition: 'Motstand mot å bli trukket fra hverandre' },
    { term: 'Trykkstyrke', definition: 'Motstand mot å bli presset sammen' },
    { term: 'Hardhet', definition: 'Motstand mot riper og inntrykk' },
    { term: 'Elastisitet', definition: 'Evne til å gå tilbake til opprinnelig form' },
    { term: 'Holdbarhet', definition: 'Hvor lenge materialet beholder sine egenskaper under bruk' },
    { term: 'Funksjonsområde', definition: 'Bruksformål et materiale egner seg til' },
  ],
};

// ============================================================================
// Kapittel 2.2: Harde materialer: tre, metall og stein
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_2: TextbookChapter = {
  id: 'handverk-design-vg1-2-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.2',
  title: 'Harde materialer: tre, metall og stein',
  description: 'Fordypning i egenskapene til harde materialer som tre, metall og stein. Elevene utforsker hvordan disse materialene oppfører seg under bearbeiding og bruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-2-intro',
      type: 'text',
      content: `Harde materialer som tre, metall og stein har vært grunnlaget for håndverk gjennom hele menneskets historie. Disse materialene gir solid struktur og holdbarhet til produkter, men krever ulike teknikker for bearbeiding. I dette kapittelet går vi i dybden på egenskapene til de viktigste harde materialene.`,
    },
    {
      id: 'handverk-design-vg1-2-2-def-1',
      type: 'definition',
      title: 'Harde materialer',
      content: `Harde materialer er materialer med fast struktur som motstår deformasjon. De kan ikke formes med hendene alene, men krever verktøy for bearbeiding. Eksempler er tre, metall, stein og keramikk.`,
    },
    {
      id: 'handverk-design-vg1-2-2-text-1',
      type: 'text',
      content: `**Tre som materiale**

Tre er et av de mest allsidige materialene i håndverk. Det finnes hundrevis av tresorter med ulike egenskaper.

**Løvtre (hardtre)**
- **Eik**: Hardt, sterkt, vakker åring. Brukes til møbler, gulv og båtbygging.
- **Bøk**: Hardt, ensartet struktur. Brukes til verktøyhåndtak og møbler.
- **Ask**: Elastisk og seigt. Brukes til sportsutstyr og verktøyhåndtak.
- **Bjørk**: Lyst, fint mønster. Brukes til finér, møbler og kunsthåndverk.
- **Valnøtt**: Mørkt, eksklusivt. Brukes til finmøbler og detaljer.

**Bartre (bløttre)**
- **Furu**: Myk, lett å bearbeide, vanlig i Norge. Brukes til konstruksjon og møbler.
- **Gran**: Lett, elastisk. Brukes til konstruksjonsvirke og musikkinstrumenter.
- **Lerk**: Hardere enn furu, naturlig holdbar. Brukes utendørs.`,
    },
    {
      id: 'handverk-design-vg1-2-2-def-2',
      type: 'definition',
      title: 'Fiberretning',
      content: `Fiberretningen i tre angir hvilken vei trefibrene løper. Tre er sterkest langs fibrene og svakest på tvers. Fiberretningen påvirker hvordan treet bør bearbeides og brukes.`,
    },
    {
      id: 'handverk-design-vg1-2-2-text-2',
      type: 'text',
      content: `**Trebearbeidingsmaterialer**

I tillegg til massivt tre brukes også bearbeidede treprodukter:

**Kryssfiner**: Tynne lag limt sammen med vekslende fiberretning. Sterkt og stabilt.

**Sponplate**: Treflis presset sammen med lim. Rimelig, men tåler ikke fukt.

**MDF (Medium Density Fibreboard)**: Finmalt trefiber presset sammen. Glatt overflate, lett å male.

**OSB (Oriented Strand Board)**: Store treflis orientert i lag. Brukes til konstruksjon.

**Bearbeiding av tre**
- Saging: Kutte til ønsket lengde og form
- Høvling: Gjøre overflaten glatt
- Boring: Lage hull for skruer og tapper
- Fresing: Forme kanter og lage spor
- Sliping: Finpusse overflaten
- Overflatebehandling: Olje, beis, lakk eller maling`,
    },
    {
      id: 'handverk-design-vg1-2-2-text-3',
      type: 'text',
      content: `**Metall som materiale**

Metaller er sterke, holdbare og kan formes på mange måter.

**Jernmetaller**
- **Stål**: Legering av jern og karbon. Sterkt og allsidig. Ruster uten behandling.
- **Rustfritt stål**: Tilsatt krom for korrosjonsbestandighet. Brukes i kjøkken og utendørs.
- **Støpejern**: Sprøtt men trykksterkt. Brukes til gryter og dekorasjon.

**Ikke-jernholdige metaller**
- **Aluminium**: Lett (1/3 av stålets vekt), korrosjonsbestandig. Brukes i transport og emballasje.
- **Kobber**: Rødlig, god leder, får grønn patina. Brukes til rør og dekor.
- **Messing**: Legering av kobber og sink. Gul farge, lett å bearbeide.
- **Bronse**: Legering av kobber og tinn. Brukes til skulpturer og klokker.
- **Sølv og gull**: Edelmetaller til smykker og kunsthåndverk.

**Bearbeiding av metall**
- Kutting med sag, saks eller laserkutter
- Bøying og pressing
- Sveising og lodding
- Filing og sliping
- Dreiing og fresing
- Overflatebehandling: maling, galvanisering, polering`,
    },
    {
      id: 'handverk-design-vg1-2-2-text-4',
      type: 'text',
      content: `**Stein som materiale**

Stein har blitt brukt i håndverk siden steinalderen og er fortsatt verdifullt i dag.

**Vanlige steintyper**
- **Granitt**: Hardt, holdbart, med krystallstruktur. Brukes til bygg og skulptur.
- **Marmor**: Metamorf stein, kan poleres blankt. Brukes til skulptur og interiør.
- **Skifer**: Lagdelt, lett å spalte. Brukes til tak og gulv.
- **Kleberstein**: Myk, lett å skjære. Brukes til ovner og kunsthåndverk.
- **Sandstein**: Porøs, lett å bearbeide. Brukes til bygg og skulptur.

**Egenskaper ved stein**
- Svært trykksterkt, men sprøtt
- Holdbart og værbestandig
- Tungt og vanskelig å transportere
- Krever spesialverktøy for bearbeiding
- Naturlig variasjon i farge og mønster

**Bearbeiding av stein**
- Spalting og kløyving
- Hugging og meisling
- Saging med diamantblad
- Sliping og polering
- Sandblåsing for tekstur`,
    },
    {
      id: 'handverk-design-vg1-2-2-example-1',
      type: 'example',
      title: 'Velge treslag til et bord',
      content: `**Oppgave**: Du skal lage et spisebord. Hvilket treslag velger du?

**Vurdering**:
- **Eik**: Hardt og slitesterkt, tåler daglig bruk godt. Vakker åring. Relativt dyrt.
- **Furu**: Rimelig og lett å bearbeide, men mykt og får lett merker.
- **Ask**: Lyst og sterkt, god elastisitet. Pent mønster.
- **Bjørk**: Lyst og jevnt, rimelig pris.

**Anbefaling**: Eik eller ask er gode valg for en bordplate som skal tåle daglig bruk. Furu kan brukes om du ønsker patina over tid.`,
    },
    {
      id: 'handverk-design-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken treslag regnes som hardtre?',
        options: [
          { id: 'a', text: 'Furu' },
          { id: 'b', text: 'Gran' },
          { id: 'c', text: 'Eik', isCorrect: true },
          { id: 'd', text: 'Lerk' },
        ],
        solution: 'Eik er et løvtre og regnes som hardtre. Furu, gran og lerk er alle bartre (bløttre), selv om lerk er hardere enn de andre bartreene.',
      },
    },
    {
      id: 'handverk-design-vg1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva fiberretning i tre betyr og hvorfor det er viktig.',
        solution: 'Fiberretningen angir hvilken vei trefibrene løper i treet. Dette er viktig fordi tre er mye sterkere langs fibrene enn på tvers. Ved bearbeiding bør du følge fiberretningen for best resultat, og ved konstruksjon bør belastningen gå langs fibrene for maksimal styrke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom stål og rustfritt stål?',
        solution: 'Vanlig stål er en legering av jern og karbon, og vil ruste når det utsettes for fukt og oksygen. Rustfritt stål har tilsatt krom (minst 10,5%), som danner et beskyttende oksidlag på overflaten som hindrer rust. Rustfritt stål brukes derfor der produktet skal tåle vann og fukt, som i kjøkken og utendørs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken steintype er myk nok til å skjære i med håndverktøy?',
        options: [
          { id: 'a', text: 'Granitt' },
          { id: 'b', text: 'Marmor' },
          { id: 'c', text: 'Kleberstein', isCorrect: true },
          { id: 'd', text: 'Skifer' },
        ],
        solution: 'Kleberstein er myk nok til å skjæres og formes med enkle håndverktøy. Dette har gjort den populær til ovner og kunsthåndverk. Granitt og marmor er mye hardere og krever kraftige verktøy.',
      },
    },
    {
      id: 'handverk-design-vg1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en tabell som sammenligner tre, metall og stein som materialer.',
        subTasks: [
          {
            label: 'a',
            task: 'Inkluder egenskapene: vekt, bearbeidbarhet, holdbarhet og pris.',
            solution: 'Tre: Lett, lett å bearbeide, god holdbarhet med behandling, moderat pris. Metall: Tungt (varierer), krever verktøy, svært holdbart, varierende pris. Stein: Svært tungt, vanskelig å bearbeide, svært holdbart, varierende pris.',
          },
        ],
        solution: 'Tabellen bør vise at tre er lettest å bearbeide, metall er mest allsidig i forming, og stein er mest holdbart men vanskeligst å bearbeide. Pris varierer mye innen alle kategorier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Harde materialer', definition: 'Materialer med fast struktur som krever verktøy for bearbeiding' },
    { term: 'Løvtre/hardtre', definition: 'Tre fra løvfellende trær, generelt hardere enn bartre' },
    { term: 'Bartre/bløttre', definition: 'Tre fra bartrær, generelt mykere og lettere å bearbeide' },
    { term: 'Fiberretning', definition: 'Retningen trefibrene løper i treet' },
    { term: 'Legering', definition: 'Blanding av to eller flere metaller' },
    { term: 'Korrosjon', definition: 'Nedbrytning av metall gjennom kjemisk reaksjon (rust)' },
    { term: 'Patina', definition: 'Overflateforandring på materialer over tid' },
  ],
};

// ============================================================================
// Kapittel 2.3: Myke materialer: tekstil, skinn og lær
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_3: TextbookChapter = {
  id: 'handverk-design-vg1-2-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.3',
  title: 'Myke materialer: tekstil, skinn og lær',
  description: 'Utforsking av myke materialer som ulike tekstiler, skinn og lær. Elevene lærer om fibre, veving, strikking og andre tekstile teknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-3-intro',
      type: 'text',
      content: `Myke materialer har fulgt mennesket gjennom historien - fra enkle dyrehuder til avanserte tekniske tekstiler. Disse materialene gir oss klær, interiør og utallige bruksgjenstander. I dette kapittelet lærer du om de viktigste myke materialene og deres egenskaper.`,
    },
    {
      id: 'handverk-design-vg1-2-3-def-1',
      type: 'definition',
      title: 'Myke materialer',
      content: `Myke materialer er fleksible materialer som kan bøyes, foldes og formes uten verktøy. De inkluderer tekstiler, skinn, lær, filt og lignende materialer som brukes i klær, møbler og kunsthåndverk.`,
    },
    {
      id: 'handverk-design-vg1-2-3-def-2',
      type: 'definition',
      title: 'Fiber',
      content: `En fiber er en tynn, trådlignende struktur som er grunnelementet i tekstiler. Fibre kan spinnes til garn og veves eller strikkes til stoff. De deles inn i naturfibre og syntetiske fibre.`,
    },
    {
      id: 'handverk-design-vg1-2-3-text-1',
      type: 'text',
      content: `**Naturfibre fra planter**

Plantefibre har vært brukt til tekstiler i tusenvis av år.

**Bomull**
- Kommer fra bomullsplantens frøkapsler
- Myk, pustende og absorberer fukt godt
- Tåler høy vasktemperatur
- Krøller lett
- Brukes til klær, sengetøy og håndklær

**Lin**
- Kommer fra linplantens stilk
- Sterkt og holdbart
- Kjølig mot huden
- Krøller svært lett
- Brukes til sommertøy, duker og gardiner

**Hamp**
- Sterk og slitesterk fiber
- Miljøvennlig å dyrke
- Brukes til tau, tekstiler og kompositter

**Bambus**
- Myk og silkeaktig fiber
- Naturlig antibakteriell
- Miljøvennlig alternativ til bomull`,
    },
    {
      id: 'handverk-design-vg1-2-3-text-2',
      type: 'text',
      content: `**Naturfibre fra dyr**

Dyrefibre gir varme og unike egenskaper.

**Ull**
- Kommer fra sau (også alpakka, geit, kanin)
- Varm og isolerende, også når den er våt
- Naturlig vannavstøtende
- Elastisk og formbar
- Kan krympe ved feil vask
- Brukes til yttertøy, gensere og tepper

**Silke**
- Produsert av silkelarver
- Glatt, skinnende og luksuriøs
- Sterk til tross for at den er tynn
- Krever forsiktig pleie
- Brukes til finere klær og tilbehør

**Kasjmir**
- Fra kašmirgeiten
- Ekstremt myk og lett
- Svært isolerende
- Eksklusiv og dyr`,
    },
    {
      id: 'handverk-design-vg1-2-3-text-3',
      type: 'text',
      content: `**Syntetiske fibre**

Syntetiske fibre er menneskelagde og gir spesifikke egenskaper.

**Polyester**
- Mest brukte syntetiske fiber
- Sterk og slitesterk
- Tørker raskt, krøller lite
- Puster dårlig
- Brukes i sportklær, møbelstoff og fôr

**Nylon (polyamid)**
- Svært sterk og elastisk
- Lett og tørker raskt
- Brukes til strømper, sportsutstyr og tau

**Akryl**
- Ligner ull i utseende
- Lett og varm
- Allergifritt alternativ til ull
- Kan bli statisk

**Elastan (spandex/lycra)**
- Ekstremt elastisk (kan strekkes 5-8 ganger)
- Blandes med andre fibre for stretch
- Brukes i treningsklær og undertøy`,
    },
    {
      id: 'handverk-design-vg1-2-3-def-3',
      type: 'definition',
      title: 'Veving',
      content: `Veving er en tekstilteknikk der renning (lengdetråder) og innslag (tverrtråder) krysser hverandre i et regelmessig mønster. Resultatet kalles vevd stoff.`,
    },
    {
      id: 'handverk-design-vg1-2-3-text-4',
      type: 'text',
      content: `**Skinn og lær**

Skinn og lær er huder fra dyr som har gjennomgått ulike behandlingsprosesser.

**Skinn**
- Ubehandlet eller lett behandlet dyrehud
- Bevarer hårene/pelsen
- Brukes til pels, saueskinn og dekorasjon

**Lær**
- Garvet dyrehud (oftest ku, gris, sau eller geit)
- Holdbart, vannavstøtende og pustende
- Utvikler vakker patina over tid
- Brukes til sko, vesker, møbler og tilbehør

**Typer lær**:
- **Helskinn**: Beste kvalitet, ubehandlet overflate
- **Toppskinn**: Slipt og korrigert, jevnere utseende
- **Spaltet lær**: Nederste lag, brukes til semsket skinn
- **Kunstlær**: Syntetisk alternativ, varierende kvalitet

**Bearbeiding av lær**
- Kutting med skarp kniv eller stanse
- Sying med vokset tråd og spesielle nåler
- Preling og dekorering
- Farging og impregnering`,
    },
    {
      id: 'handverk-design-vg1-2-3-example-1',
      type: 'example',
      title: 'Velge stoff til en jakke',
      content: `**Oppgave**: Du skal lage en lett jakke til vår og høst. Hvilket stoff velger du?

**Vurdering av alternativer**:
- **Bomull**: Pustende og behagelig, men ikke vannavstøtende
- **Polyester**: Lett og tørker raskt, men puster dårlig
- **Ull**: Varm og naturlig vannavstøtende, kan være for varm
- **Bomull/polyester-blanding**: Kombinerer pustevne med holdbarhet

**Anbefaling**: En bomull/polyester-blanding med vannavstøtende behandling gir god balanse mellom komfort og funksjon.`,
    },
    {
      id: 'handverk-design-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken fiber er naturlig vannavstøtende?',
        options: [
          { id: 'a', text: 'Bomull' },
          { id: 'b', text: 'Lin' },
          { id: 'c', text: 'Ull', isCorrect: true },
          { id: 'd', text: 'Silke' },
        ],
        solution: 'Ull er naturlig vannavstøtende på grunn av lanolin (ullfett) i fibrene. Den kan absorbere opptil 30% av sin egen vekt i fukt uten å føles våt.',
      },
    },
    {
      id: 'handverk-design-vg1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturfibre og syntetiske fibre.',
        solution: 'Naturfibre kommer fra planter (bomull, lin, hamp) eller dyr (ull, silke), mens syntetiske fibre er menneskelagde av kjemiske stoffer, ofte petroleumsbaserte. Naturfibre puster generelt bedre og er biologisk nedbrytbare, mens syntetiske fibre ofte er mer holdbare, tørker raskere og er billigere å produsere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom skinn og lær?',
        solution: 'Skinn er ubehandlet eller lett behandlet dyrehud som ofte beholder hårlaget/pelsen. Lær er garvet dyrehud der hårlaget er fjernet og huden er behandlet for å bli holdbar, myk og vannavstøtende. Garving forhindrer forråtnelse og gjør materialet holdbart.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken syntetisk fiber er mest elastisk?',
        options: [
          { id: 'a', text: 'Polyester' },
          { id: 'b', text: 'Nylon' },
          { id: 'c', text: 'Akryl' },
          { id: 'd', text: 'Elastan', isCorrect: true },
        ],
        solution: 'Elastan (også kjent som spandex eller lycra) er ekstremt elastisk og kan strekkes 5-8 ganger sin opprinnelige lengde. Den blandes ofte med andre fibre for å gi stretch til klær.',
      },
    },
    {
      id: 'handverk-design-vg1-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du skal lage en veske. Vurder lær versus syntetisk materiale.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordeler har ekte lær?',
            solution: 'Ekte lær er holdbart, pustende, utvikler vakker patina, føles eksklusivt, er naturlig og biologisk nedbrytbart.',
          },
          {
            label: 'b',
            task: 'Hvilke fordeler har syntetisk materiale?',
            solution: 'Syntetisk materiale er rimeligere, dyrevennlig, lettere å rengjøre, vannbestandig, og finnes i mange farger og mønstre.',
          },
        ],
        solution: 'Valget avhenger av budsjett, verdier (dyrevelferd/miljø), ønsket holdbarhet og estetikk. Ekte lær varer lenger og aldres vakkert, mens syntetisk er mer tilgjengelig og etisk for noen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Myke materialer', definition: 'Fleksible materialer som kan bøyes og formes uten verktøy' },
    { term: 'Fiber', definition: 'Tynn, trådlignende struktur som er grunnelementet i tekstiler' },
    { term: 'Naturfibre', definition: 'Fibre fra planter eller dyr' },
    { term: 'Syntetiske fibre', definition: 'Menneskelagde fibre fra kjemiske stoffer' },
    { term: 'Veving', definition: 'Teknikk der renning og innslag krysses til stoff' },
    { term: 'Garving', definition: 'Prosess som gjør dyrehud til holdbart lær' },
    { term: 'Patina', definition: 'Naturlig aldring og forandring i overflaten over tid' },
  ],
};

// ============================================================================
// Kapittel 2.4: Plastiske materialer: leire, gips og plast
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_4: TextbookChapter = {
  id: 'handverk-design-vg1-2-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.4',
  title: 'Plastiske materialer: leire, gips og plast',
  description: 'Innføring i plastiske materialer og deres unike egenskaper for forming og skulptur. Elevene utforsker leire, gips, voks og syntetiske materialer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-4-intro',
      type: 'text',
      content: `Plastiske materialer er formbare materialer som lar deg skape tredimensjonale former med hendene eller enkle verktøy. Fra keramikk til moderne plast - disse materialene gir enorme muligheter for kreativ utfoldelse. I dette kapittelet lærer du om de viktigste plastiske materialene og hvordan de bearbeides.`,
    },
    {
      id: 'handverk-design-vg1-2-4-def-1',
      type: 'definition',
      title: 'Plastiske materialer',
      content: `Plastiske materialer er materialer som kan formes og modelleres mens de er myke, og deretter herdes eller stivner til en fast form. Eksempler er leire, gips, voks og syntetisk plast.`,
    },
    {
      id: 'handverk-design-vg1-2-4-text-1',
      type: 'text',
      content: `**Leire og keramikk**

Leire er et naturlig materiale som har vært brukt i håndverk i over 25 000 år.

**Typer leire**

**Terrakotta (rødbrennende leire)**
- Jernholdig, gir rødlig farge etter brenning
- Brenntemperatur: 900-1100°C
- Porøs etter brenning (trenger glasur for å bli vanntett)
- Brukes til blomsterpotter, skulpturer og dekor

**Steingods**
- Brenntemperatur: 1200-1300°C
- Tett og vanntett etter brenning
- Robust og holdbart
- Brukes til servise, vaser og bruksgjenstand

**Porselen**
- Finkornet, hvit leire
- Brenntemperatur: 1260-1400°C
- Gjennomskinelig når det er tynt
- Hardt og elegant
- Brukes til finservise og kunstkeramikk`,
    },
    {
      id: 'handverk-design-vg1-2-4-def-2',
      type: 'definition',
      title: 'Brenning',
      content: `Brenning er prosessen der leire varmes opp i en keramikkovn til høy temperatur. Dette forvandler den myke leiren til hard, permanent keramikk gjennom kjemiske endringer i materialet.`,
    },
    {
      id: 'handverk-design-vg1-2-4-text-2',
      type: 'text',
      content: `**Formingsteknikker for leire**

**Håndbygging**
- **Knaeteknikk**: Forme direkte med hendene
- **Pølseteknikk**: Bygge opp med ruller av leire
- **Plateteknikk**: Bygge med flate leireplater

**Dreiing**
- Forme leire på en roterende skive
- Krever øvelse, men gir symmetriske former
- Tradisjonell teknikk for skåler, vaser og kopper

**Støping**
- Helle flytende leire (slip) i gipsformer
- Gir nøyaktige kopier
- Brukes i serieproduksjon

**Glasur**
Glasur er et glassliknende belegg som påføres keramikk og smelter ved brenning. Det gjør overflaten vanntett, dekorativ og lett å rengjøre.`,
    },
    {
      id: 'handverk-design-vg1-2-4-text-3',
      type: 'text',
      content: `**Gips**

Gips er et hvitt pulver som blandes med vann og stivner raskt.

**Egenskaper**
- Lett å blande og bruke
- Stivner på 15-30 minutter
- Kan skjæres og slipes etter herding
- Porøst og absorberer vann
- Relativt sprøtt

**Bruksområder**
- Støpeformer for keramikk og metall
- Skulptur og modellering
- Avtrykk og avstøpninger
- Dekorative elementer
- Byggematerialer (gipsplater)

**Tips for arbeid med gips**
- Tilsett alltid gips til vann, ikke omvendt
- Rør forsiktig for å unngå luftbobler
- Arbeid raskt når gipsen begynner å stivne
- Rengjør verktøy umiddelbart
- La gipsen tørke helt før bearbeiding`,
    },
    {
      id: 'handverk-design-vg1-2-4-text-4',
      type: 'text',
      content: `**Plast og syntetiske materialer**

Plast er fellesbetegnelse for syntetiske materialer som kan formes ved varme og trykk.

**Typer plast**

**Termoplast**
- Kan varmes og formes gjentatte ganger
- Eksempler: PET, PVC, polyetylen, akryl
- Kan resirkuleres
- Brukes til emballasje, rør, møbler

**Herdeplast**
- Former permanent ved herding
- Kan ikke omsmeltes
- Eksempler: epoxy, polyester, melamin
- Brukes til kompositter, lim, belegg

**Vanlige plasttyper i håndverk**
- **Akryl (plexiglass)**: Gjennomsiktig, lett å sage og bore
- **PVC**: Fleksibelt eller stivt, vanntett
- **Polyetylen**: Mykt, fleksibelt, kjemisk bestandig
- **Epoxy**: Sterkt lim og støpemasse
- **Silikon**: Fleksibelt, varmebestandig, brukes til former

**3D-printmaterialer**
- **PLA**: Biologisk nedbrytbar, lett å printe
- **ABS**: Sterkt og slagfast
- **PETG**: Kombinerer styrke og enkel printing
- **Resin**: Gir høy detaljrikdom`,
    },
    {
      id: 'handverk-design-vg1-2-4-example-1',
      type: 'example',
      title: 'Lage en kopp i leire',
      content: `**Prosess for å lage en kopp på dreieskive**:

1. **Forberedelse**: Kna leiren godt for å fjerne luftbobler
2. **Sentrering**: Plasser leiren midt på skiven og sentrer den
3. **Åpning**: Lag et hull i midten med tommelen
4. **Trekking**: Trekk opp veggene jevnt og tynt
5. **Forming**: Gi koppen ønsket form
6. **Hank**: Lag og fest en hank
7. **Tørking**: La koppen tørke sakte (1-2 uker)
8. **Bisque-brenning**: Første brenning til ca. 900°C
9. **Glasering**: Påfør glasur
10. **Glassurbrenning**: Andre brenning til glasuren smelter`,
    },
    {
      id: 'handverk-design-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken leiretype har høyest brenntemperatur?',
        options: [
          { id: 'a', text: 'Terrakotta' },
          { id: 'b', text: 'Steingods' },
          { id: 'c', text: 'Porselen', isCorrect: true },
          { id: 'd', text: 'Chamotte' },
        ],
        solution: 'Porselen brennes ved 1260-1400°C, som er høyere enn steingods (1200-1300°C) og terrakotta (900-1100°C). Den høye temperaturen gir porselen sin karakteristiske hardhet og gjennomskinelighet.',
      },
    },
    {
      id: 'handverk-design-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre formingsteknikker for leire og forklar kort hvordan de utføres.',
        solution: 'Knaeteknikk: Forme leiren direkte med hendene. Pølseteknikk: Rulle ut lange pølser av leire og bygge opp formen lag for lag. Plateteknikk: Rulle ut flate plater og sette dem sammen til en form. Dreiing: Forme leiren på en roterende skive ved hjelp av hendene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom termoplast og herdeplast?',
        solution: 'Termoplast kan varmes opp og formes om flere ganger, og kan dermed resirkuleres. Eksempler er PET-flasker og akryl. Herdeplast herder permanent ved første forming og kan ikke smeltes om. Eksempler er epoxy og melamin. Dette skyldes ulike molekylstrukturer - termoplast har lineære kjeder mens herdeplast har kryssbundne nettverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er hovedfunksjonen til glasur på keramikk?',
        options: [
          { id: 'a', text: 'Gjøre keramikken lettere' },
          { id: 'b', text: 'Gjøre overflaten vanntett og dekorativ', isCorrect: true },
          { id: 'c', text: 'Forsterke keramikken mot slag' },
          { id: 'd', text: 'Redusere brenntemperaturen' },
        ],
        solution: 'Glasur er et glassliknende belegg som smelter ved brenning og gjør overflaten vanntett, hygienisk og lett å rengjøre. Den gir også dekorative muligheter med farger og teksturer.',
      },
    },
    {
      id: 'handverk-design-vg1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du skal lage en støpeform. Vurder gips versus silikon.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordeler har gipsformer?',
            solution: 'Gipsformer er rimelige, lette å lage, absorberer vann fra leire (nyttig for slipstøping), og er gode for keramikkproduksjon.',
          },
          {
            label: 'b',
            task: 'Hvilke fordeler har silikonformer?',
            solution: 'Silikonformer er fleksible (lett å ta ut komplekse former), gjenbrukbare mange ganger, tåler høy temperatur, og egner seg for støping av resin, sjokolade og såpe.',
          },
        ],
        solution: 'Valget avhenger av hva du skal støpe. Gips er best for keramikk og store former, mens silikon er best for detaljerte former og materialer som krever fleksibel form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv prosessen med å arbeide med gips fra blanding til ferdig form.',
        solution: 'Prosessen: 1) Mål opp vann i en ren beholder. 2) Dryss gipspulver i vannet til det danner en øy. 3) La det stå 1-2 minutter. 4) Rør forsiktig til jevn konsistens. 5) Hell i form eller påfør på overflate. 6) La stivne i 15-30 minutter. 7) Ta ut av form etter herding. 8) La tørke helt før eventuell sliping eller maling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Plastiske materialer', definition: 'Materialer som kan formes myke og herdes til fast form' },
    { term: 'Brenning', definition: 'Prosess der leire varmes til høy temperatur og blir keramikk' },
    { term: 'Glasur', definition: 'Glassliknende belegg som smelter på keramikk ved brenning' },
    { term: 'Termoplast', definition: 'Plast som kan varmes og formes gjentatte ganger' },
    { term: 'Herdeplast', definition: 'Plast som herder permanent og ikke kan omsmeltes' },
    { term: 'Pølseteknikk', definition: 'Bygge opp leireformer med ruller av leire' },
    { term: 'Slip', definition: 'Flytende leire brukt til støping i gipsformer' },
  ],
};

// ============================================================================
// Kapittel 2.5: Bærekraftig materialbruk og ressursforvaltning
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_5: TextbookChapter = {
  id: 'handverk-design-vg1-2-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.5',
  title: 'Bærekraftig materialbruk og ressursforvaltning',
  description: 'Fokus på bærekraftig anskaffelse, bearbeiding og oppbevaring av materialer. Elevene lærer om lokal ressurstilgang og tradisjonelle metoder for materialhåndtering.',
  estimatedMinutes: 45,
  competenceGoals: [
    'anskaffe, sanke inn, bearbeide og oppbevare materialer på en bærekraftig og økonomisk måte, etter lokal ressurstilgang og tradisjon',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-5-intro',
      type: 'text',
      content: `Bærekraft handler om å bruke ressurser på en måte som ikke ødelegger for fremtidige generasjoner. I håndverk og design er materialvalg en av de viktigste beslutningene vi tar. I dette kapittelet lærer du hvordan du kan arbeide mer bærekraftig gjennom bevisste valg av materialer og metoder.`,
    },
    {
      id: 'handverk-design-vg1-2-5-def-1',
      type: 'definition',
      title: 'Bærekraft',
      content: `Bærekraft innebærer å dekke dagens behov uten å ødelegge mulighetene for fremtidige generasjoner til å dekke sine behov. I håndverk betyr dette å velge materialer og metoder som minimerer miljøpåvirkning og ressursbruk.`,
    },
    {
      id: 'handverk-design-vg1-2-5-def-2',
      type: 'definition',
      title: 'Sirkulærøkonomi',
      content: `Sirkulærøkonomi er et økonomisk system der materialer og produkter holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering. Målet er å eliminere avfall.`,
    },
    {
      id: 'handverk-design-vg1-2-5-text-1',
      type: 'text',
      content: `**Bærekraftige materialvalg**

**Fornybare materialer**
Velg materialer som kan fornyes naturlig:
- Tre fra bærekraftig skogbruk (FSC-sertifisert)
- Bambus (vokser svært raskt)
- Plantefibre som bomull, lin og hamp
- Naturlig gummi
- Cork (bark fra korketre)

**Lokale materialer**
Bruk av lokale materialer reduserer transportutslipp:
- Norsk tre i stedet for importert
- Lokal ull og skinn
- Stein fra regionen
- Leire fra nærområdet

**Resirkulerte materialer**
Gi nytt liv til brukte materialer:
- Resirkulert metall
- Gjenvunnet plast
- Gjenbrukt tekstil
- Resirkulert glass`,
    },
    {
      id: 'handverk-design-vg1-2-5-text-2',
      type: 'text',
      content: `**Livssyklustenkning**

En livssyklusanalyse vurderer miljøpåvirkningen gjennom hele produktets liv:

**1. Råvareutvinning**
- Hvordan hentes materialet?
- Er det fornybart?
- Hvilke miljøkonsekvenser har utvinningen?

**2. Produksjon**
- Hvor mye energi kreves?
- Hvilke kjemikalier brukes?
- Hvor mye avfall oppstår?

**3. Transport**
- Hvor langt fraktes materialet?
- Hvilken transportmetode brukes?

**4. Bruk**
- Hvor lenge varer produktet?
- Krever det mye vedlikehold?

**5. Avhending**
- Kan det gjenbrukes?
- Kan det resirkuleres?
- Er det biologisk nedbrytbart?
- Inneholder det skadelige stoffer?`,
    },
    {
      id: 'handverk-design-vg1-2-5-text-3',
      type: 'text',
      content: `**Gjenbruk og oppgradering**

**Gjenbruk i håndverk**
- Bruke brukt tre fra rivingsprosjekter
- Sy om gamle tekstiler
- Smelte om metall
- Bruke rester og avkapp kreativt

**Upcycling (oppgradering)**
Forvandle avfall til noe av høyere verdi:
- Lage møbler av paller
- Sy vesker av gamle seil
- Lage smykker av elektronikkavfall
- Skape kunst av skrap

**Downcycling**
Materialet blir til noe av lavere kvalitet:
- Tekstil til filler
- Tre til flis
- Plast til lavkvalitetsprodukter

Målet er alltid å holde materialer på høyest mulig verdinivå så lenge som mulig.`,
    },
    {
      id: 'handverk-design-vg1-2-5-text-4',
      type: 'text',
      content: `**Økonomisk materialbruk**

**Planlegging**
- Beregn nøyaktig materialbehov
- Tegn opp kutteplaner for å minimere avfall
- Vurder standardstørrelser for å unngå saging

**Materialeffektivitet**
- Bruk hele materialet
- Samle og gjenbruk avkapp
- Velg riktig kvalitet til formålet

**Oppbevaring**
- Lagre materialer tørt og beskyttet
- Beskytt mot UV-lys, fukt og skadedyr
- Organiser for enkel oversikt
- Bruk eldste materialer først

**Miljøsertifiseringer å kjenne til**
- **FSC**: Bærekraftig skogbruk
- **OEKO-TEX**: Giftfrie tekstiler
- **GOTS**: Økologiske tekstiler
- **Svanemerket**: Nordisk miljømerke
- **EU Ecolabel**: EUs miljømerke`,
    },
    {
      id: 'handverk-design-vg1-2-5-example-1',
      type: 'example',
      title: 'Bærekraftig møbelprosjekt',
      content: `**Prosjekt**: Lage en krakk med bærekraftig tilnærming

**Materialvalg**:
- Tre: Brukt eik fra en gammel dør (gjenbruk)
- Skruer: Rustfritt stål (kan gjenbrukes)
- Finish: Naturlig linolje (fornybar)

**Prosess**:
1. Rense og inspisere det brukte treet
2. Planlegge kutting for minimal avfall
3. Bruke avkapp til prøvestykker
4. Samle sagflis til kompost
5. Behandle med miljøvennlig olje

**Resultat**: En unik krakk med historie, laget uten nye råvarer og med minimal miljøpåvirkning.`,
    },
    {
      id: 'handverk-design-vg1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr FSC-merket på trematerialer?',
        options: [
          { id: 'a', text: 'At treet er brannsikkert' },
          { id: 'b', text: 'At treet kommer fra bærekraftig skogbruk', isCorrect: true },
          { id: 'c', text: 'At treet er importert' },
          { id: 'd', text: 'At treet er resirkulert' },
        ],
        solution: 'FSC (Forest Stewardship Council) sertifiserer at treet kommer fra skoger som drives på en miljømessig, sosialt og økonomisk ansvarlig måte. Det garanterer bærekraftig skogbruk.',
      },
    },
    {
      id: 'handverk-design-vg1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva sirkulærøkonomi betyr og hvordan det kan brukes i håndverk.',
        solution: 'Sirkulærøkonomi handler om å holde materialer og produkter i bruk så lenge som mulig. I håndverk kan dette bety: gjenbruke materialer fra gamle produkter, designe for lang levetid og reparerbarhet, bruke avfall fra ett prosjekt i et annet, velge materialer som kan resirkuleres, og reparere i stedet for å kaste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn de fem fasene i en livssyklusanalyse for et produkt.',
        solution: 'De fem fasene er: 1) Råvareutvinning - hvordan materialet hentes fra naturen. 2) Produksjon - energi, kjemikalier og avfall i produksjonsprosessen. 3) Transport - frakt av materialer og produkter. 4) Bruk - levetid og vedlikeholdsbehov. 5) Avhending - mulighet for gjenbruk, resirkulering eller nedbrytning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal lage et produkt og vil jobbe bærekraftig. Beskriv tre valg du kan ta.',
        solution: 'Tre bærekraftige valg kan være: 1) Velge lokale, fornybare materialer som norsk tre i stedet for importert tropisk tre. 2) Gjenbruke materialer fra gamle produkter eller avkapp fra tidligere prosjekter. 3) Designe for lang levetid med solid konstruksjon og mulighet for reparasjon. 4) Velge miljøvennlig overflatebehandling som naturlige oljer. 5) Minimere avfall gjennom god planlegging og bruk av rester.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bærekraft', definition: 'Bruke ressurser uten å ødelegge for fremtidige generasjoner' },
    { term: 'Sirkulærøkonomi', definition: 'System der materialer holdes i bruk gjennom gjenbruk og resirkulering' },
    { term: 'Livssyklusanalyse', definition: 'Vurdering av miljøpåvirkning gjennom produktets hele levetid' },
    { term: 'Upcycling', definition: 'Forvandle avfall til noe av høyere verdi' },
    { term: 'FSC-sertifisering', definition: 'Garanterer bærekraftig skogbruk' },
    { term: 'Fornybare materialer', definition: 'Materialer som kan fornyes naturlig over tid' },
  ],
};

// ============================================================================
// Kapittel 2.6: Sanking og innhenting av naturmaterialer
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_6: TextbookChapter = {
  id: 'handverk-design-vg1-2-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.6',
  title: 'Sanking og innhenting av naturmaterialer',
  description: 'Praktisk kunnskap om sanking og innhenting av materialer fra naturen etter lokale tradisjoner. Elevene lærer om sesongvariasjoner, bærekraftig høsting og riktig oppbevaring.',
  estimatedMinutes: 60,
  competenceGoals: [
    'anskaffe, sanke inn, bearbeide og oppbevare materialer på en bærekraftig og økonomisk måte, etter lokal ressurstilgang og tradisjon',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-6-intro',
      type: 'text',
      content: `I tusenvis av år har mennesker sanket materialer fra naturen til håndverk. Denne kunnskapen er en viktig del av vår kulturarv. I dette kapittelet lærer du hvordan du kan hente materialer fra naturen på en bærekraftig måte, og hvordan du tar vare på dem.`,
    },
    {
      id: 'handverk-design-vg1-2-6-def-1',
      type: 'definition',
      title: 'Sanking',
      content: `Sanking er innsamling av materialer fra naturen til bruk i håndverk. Dette kan være planter, bark, røtter, tre, stein, bein og andre naturmaterialer. Sanking krever kunnskap om riktig tidspunkt og bærekraftige metoder.`,
    },
    {
      id: 'handverk-design-vg1-2-6-text-1',
      type: 'text',
      content: `**Naturmaterialer til håndverk**

**Tre og bark**
- **Bjørkebark (never)**: Sankes forsiktig om våren når sevjen går. Brukes til kurver, bokser og dekor.
- **Vidjekvist**: Kuttes om vinteren når treet er i hvile. Brukes til kurver og fletting.
- **Seljepiper**: Barken løsnes om våren. Tradisjonell bruk til fløyter.
- **Einer**: Brukes til dreiing, skjeer og dekorasjon.

**Røtter og fiber**
- **Granrot**: Graves opp om høsten. Brukes til kurver og sying.
- **Siv og strå**: Høstes om høsten. Brukes til matter og kurver.
- **Nesle og lin**: Fibrene brukes til tekstil og tau.

**Andre naturmaterialer**
- **Stein**: Samles fra strender og fjellet
- **Bein og horn**: Fra jakt eller slakteri
- **Fjær og skinn**: Fra jakt eller husdyrhold
- **Leire**: Graves fra leirholdige jordlag`,
    },
    {
      id: 'handverk-design-vg1-2-6-def-2',
      type: 'definition',
      title: 'Sesongvariasjon',
      content: `Sesongvariasjon i sanking handler om at ulike materialer har optimal høstetid til ulike årstider. Tidspunktet påvirker materialets kvalitet, holdbarhet og bearbeidbarhet.`,
    },
    {
      id: 'handverk-design-vg1-2-6-text-2',
      type: 'text',
      content: `**Årshjul for sanking**

**Vår (april-mai)**
- Bjørkebark når sevjen stiger
- Seljebark til piper
- Unge skudd og kvister
- Tidlige urter

**Sommer (juni-august)**
- Urter og blomster til farging
- Gress og strå
- Mose og lav
- Bær til farging

**Høst (september-november)**
- Siv og starr
- Røtter (granrot)
- Sopp til farging
- Nøtter og frø

**Vinter (desember-mars)**
- Vidjekvist (når sevjen er i ro)
- Lauvtre til dreiing
- Bartre til byggematerialer
- Is til forming`,
    },
    {
      id: 'handverk-design-vg1-2-6-text-3',
      type: 'text',
      content: `**Bærekraftig høsting**

**Grunnregler**
1. Ta aldri mer enn du trenger
2. La nok igjen til naturlig fornyelse
3. Spre høstingen over et større område
4. Unngå å skade hovedplanten
5. Respekter vernede arter og områder

**Juridiske hensyn**
- **Allemannsretten**: Gir rett til å ferdes i utmark
- **Bær og sopp**: Kan plukkes fritt
- **Trær og busker**: Krever grunneiers tillatelse
- **Vernede arter**: Forbudt å sanke
- **Naturreservater**: Egne regler gjelder

**Etiske retningslinjer**
- Spør grunneier ved usikkerhet
- Dokumenter tradisjonelle høstesteder
- Del kunnskap med nye generasjoner
- Tenk på dyrelivet som også trenger ressursene`,
    },
    {
      id: 'handverk-design-vg1-2-6-text-4',
      type: 'text',
      content: `**Bearbeiding og oppbevaring**

**Tørking**
- La materialet tørke sakte og jevnt
- Unngå direkte sol som kan forårsake sprekkdannelse
- Sørg for god luftsirkulasjon
- Tre bør tørke i 1-2 år per cm tykkelse

**Bløtlegging**
- Noen materialer må bløtlegges før bruk
- Vidje og never legges i vann for å bli bøyelige
- Granrot bløtlegges før sying

**Oppbevaring**
- Tørt og kjølig sted
- Beskyttet mot skadedyr
- God merking med innhøstingsdato
- Regelmessig sjekk for mugg eller råte

**Konservering**
- Bark kan behandles med olje
- Tre kan oljes eller beises
- Røtter holdes fuktige i plastposer
- Skinn og lær saltes eller tørkes`,
    },
    {
      id: 'handverk-design-vg1-2-6-example-1',
      type: 'example',
      title: 'Sanke bjørkebark til kurv',
      content: `**Prosess for bjørkebarksamking**

**Tidspunkt**: Slutten av mai til midten av juni, når sevjen går.

**Utstyr**: Skarp kniv, bærebag, hansker.

**Fremgangsmåte**:
1. Finn en bjørk med glatt, hel bark
2. Sjekk at treet er friskt (unngå syke trær)
3. Lag et snitt rundt stammen i ønsket høyde
4. Lag et vertikalt snitt nedover
5. Løsne barken forsiktig fra stammen
6. Ta bare ytterbarken, la innerbarken være
7. Rull barken med innsiden ut for transport
8. Legg barken flatt under press for tørking

**Tips**: Ta kun bark fra trær som uansett skal felles, eller ta små stykker fra store trær uten å skade dem.`,
    },
    {
      id: 'handverk-design-vg1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Når er beste tid å sanke vidjekvist til fletting?',
        options: [
          { id: 'a', text: 'Om sommeren når bladene er grønne' },
          { id: 'b', text: 'Om vinteren når sevjen er i ro', isCorrect: true },
          { id: 'c', text: 'Om våren når knoppene spretter' },
          { id: 'd', text: 'Om høsten når bladene faller' },
        ],
        solution: 'Vidjekvist sankes best om vinteren når treet er i hvile og sevjen har trukket seg tilbake. Da er kvistene mest fleksible og tørker jevnere. Kvist kuttet om sommeren kan lett sprekke.',
      },
    },
    {
      id: 'handverk-design-vg1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre grunnregler for bærekraftig sanking av naturmaterialer.',
        solution: 'Tre viktige grunnregler: 1) Ta aldri mer enn du trenger. 2) La nok igjen til at naturen kan fornye seg. 3) Spre høstingen over et større område i stedet for å tømme ett sted. Andre regler inkluderer å unngå skade på hovedplanten og respektere vernede arter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag et årshjul som viser hvilke naturmaterialer som kan sankes i hver sesong.',
        solution: 'Vår: Bjørkebark, seljebark, unge skudd. Sommer: Urter til farging, gress, mose, bær. Høst: Siv, røtter (granrot), sopp til farging, nøtter. Vinter: Vidjekvist, lauvtre, bartre. Årshjulet viser at sanking er en helårsaktivitet med ulike materialer tilgjengelig i hver sesong.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvordan du ville oppbevare bjørkebark etter sanking.',
        solution: 'Etter sanking bør bjørkebarken rulles med innsiden ut for transport. Deretter legges den flatt under press for å tørke jevnt og unngå krølling. Oppbevar tørt og kjølig, beskyttet mot direkte sol. Før bruk bør barken bløtlegges i lunkent vann for å bli myk og bøyelig igjen. Merk gjerne med innhøstingsdato.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sanking', definition: 'Innsamling av materialer fra naturen til håndverk' },
    { term: 'Sesongvariasjon', definition: 'At ulike materialer har optimal høstetid til ulike årstider' },
    { term: 'Never', definition: 'Bjørkebark som brukes til kurver og håndverk' },
    { term: 'Allemannsretten', definition: 'Retten til å ferdes fritt i norsk utmark' },
    { term: 'Bærekraftig høsting', definition: 'Ta materialer uten å skade naturens evne til fornyelse' },
    { term: 'Bløtlegging', definition: 'Legge materialer i vann for å gjøre dem bøyelige' },
  ],
};

// ============================================================================
// Kapittel 2.7: Materialvalg og teknikktilpasning
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_2_7: TextbookChapter = {
  id: 'handverk-design-vg1-2-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '2.7',
  title: 'Materialvalg og teknikktilpasning',
  description: 'Metoder for å velge hensiktsmessige materialer og teknikker til ulike produkter. Elevene lærer å vurdere sammenhenger mellom materialvalg, teknikk og ønsket sluttresultat.',
  estimatedMinutes: 45,
  competenceGoals: [
    'anvende og velge hensiktsmessige teknikker, verktøyer og materialer til produktet',
  ],
  content: [
    {
      id: 'handverk-design-vg1-2-7-intro',
      type: 'text',
      content: `Å velge riktig materiale og teknikk til et produkt er en av de viktigste ferdighetene i håndverk og design. Et godt valg gir et produkt som fungerer godt, ser bra ut og varer lenge. I dette kapittelet lærer du en systematisk tilnærming til materialvalg og teknikktilpasning.`,
    },
    {
      id: 'handverk-design-vg1-2-7-def-1',
      type: 'definition',
      title: 'Teknikktilpasning',
      content: `Teknikktilpasning betyr å velge bearbeidingsmetoder som passer til både materialet og det ønskede resultatet. Riktig teknikk utnytter materialets styrker og unngår dets svakheter.`,
    },
    {
      id: 'handverk-design-vg1-2-7-text-1',
      type: 'text',
      content: `**Systematisk materialvalg**

**Steg 1: Definer produktkravene**
Start med å stille disse spørsmålene:
- Hva skal produktet brukes til?
- Hvor skal det brukes (inne/ute, tørt/vått)?
- Hvor mye belastning skal det tåle?
- Hvor lenge skal det vare?
- Hvem er brukeren?

**Steg 2: Identifiser nødvendige egenskaper**
Basert på brukskravene, hvilke egenskaper trenger materialet?
- Styrke og hardhet
- Fleksibilitet eller stivhet
- Vær- og vannbestandighet
- Vekt
- Utseende og følelse

**Steg 3: Vurder tilgjengelige materialer**
Hvilke materialer oppfyller kravene?
- Hvilke alternativer finnes?
- Hva er tilgjengelig lokalt?
- Hva har du erfaring med?`,
    },
    {
      id: 'handverk-design-vg1-2-7-text-2',
      type: 'text',
      content: `**Materialets påvirkning på teknikk**

Hvert materiale har teknikker som fungerer best:

**Tre**
- Saging, høvling og fresing for forming
- Liming og tapping for sammenføyning
- Skruer og spiker for mekanisk feste
- Olje, lakk eller maling for overflate

**Metall**
- Kutting med sag, saks eller laser
- Bøying og pressing for forming
- Sveising og lodding for sammenføyning
- Filing og sliping for finish

**Tekstil**
- Klipping eller kutting med rotasjonskutter
- Sying for sammenføyning
- Liming for midlertidig feste
- Pressing for forming

**Keramikk**
- Dreiing, håndbygging eller støping for forming
- Brenning for herding
- Glasering for overflate

Velg alltid teknikker som respekterer materialets egenskaper.`,
    },
    {
      id: 'handverk-design-vg1-2-7-def-2',
      type: 'definition',
      title: 'Materialkombinasjon',
      content: `Materialkombinasjon innebærer å bruke flere ulike materialer i samme produkt. Dette kan gi fordeler som styrke, estetikk eller funksjon, men krever at man forstår hvordan materialene fungerer sammen.`,
    },
    {
      id: 'handverk-design-vg1-2-7-text-3',
      type: 'text',
      content: `**Kombinere materialer**

Mange produkter kombinerer ulike materialer:

**Vanlige kombinasjoner**
- Tre og metall (møbler)
- Tekstil og metall (vesker)
- Keramikk og tre (kjøkkenredskaper)
- Lær og metall (belter, smykker)

**Utfordringer ved kombinasjon**
- Ulik utvidelse ved temperaturendring
- Ulik reaksjon på fuktighet
- Galvanisk korrosjon mellom metaller
- Vanskelig reparasjon
- Komplisert resirkulering

**Sammenføyningsteknikker**
- Mekanisk feste (skruer, nagler, klemmer)
- Liming (velg lim for begge materialer)
- Sveising/lodding (kun metall)
- Sying (tekstil, lær)
- Innfelling (et materiale sitter i et spor i det andre)`,
    },
    {
      id: 'handverk-design-vg1-2-7-text-4',
      type: 'text',
      content: `**Verktøyvalg**

Riktig verktøy er avgjørende for godt resultat:

**Tilpasse verktøy til materiale**
- Harde materialer krever kraftigere verktøy
- Myke materialer krever skarpere verktøy
- Sprø materialer krever forsiktig håndtering
- Tykke materialer krever større verktøy

**Kvalitet og vedlikehold**
- Skarpe verktøy gir renere snitt og tryggere arbeid
- Velg riktig verktøy for oppgaven
- Vedlikehold verktøy regelmessig
- Lær riktig bruksteknikk

**Sikkerhet**
- Bruk verneutstyr tilpasset verktøyet
- Sikre arbeidsstykket før bearbeiding
- Arbeid i riktig retning (med fiberretning, etc.)
- Ha orden på arbeidsplassen`,
    },
    {
      id: 'handverk-design-vg1-2-7-example-1',
      type: 'example',
      title: 'Velge materialer til en blomstervase',
      content: `**Oppgave**: Design en vase til friske blomster

**Steg 1: Produktkrav**
- Skal holde vann uten å lekke
- Stå stabilt på et bord
- Tåle daglig bruk
- Være estetisk tiltalende

**Steg 2: Nødvendige egenskaper**
- Vanntett
- Tung nok til å stå stabilt med blomster
- Holdbar
- Visuelt attraktiv

**Steg 3: Materialvurdering**
- Keramikk: Vanntett med glasur, tungt, mange uttrykk - GOD
- Glass: Vanntett, viser vannstand og stilker - GOD
- Tre: Ikke vanntett uten behandling - DÅRLIG
- Metall: Vanntett, moderne uttrykk, kan ruste innvendig - MIDDELS

**Valg**: Glasert keramikk gir best kombinasjon av funksjon og estetikk.`,
    },
    {
      id: 'handverk-design-vg1-2-7-example-2',
      type: 'example',
      title: 'Tilpasse teknikk til materiale',
      content: `**Scenario**: Du skal lage hull i tre, metall og lær

**Tre**
- Verktøy: Trebor eller forsenkerbor
- Teknikk: Bor med jevn hastighet, støtt undersiden
- Tips: Marker sentrum med pryl, bruk underlagsplate

**Metall**
- Verktøy: HSS-bor (High Speed Steel)
- Teknikk: Start sakte, øk hastighet, bruk skjæreolje
- Tips: Kjørn et merke først, sikre arbeidsstykket

**Lær**
- Verktøy: Hulljern eller stansjern
- Teknikk: Slå gjennom med klubbe mot treunderlag
- Tips: Bor aldri i lær - det vil rive og flise`,
    },
    {
      id: 'handverk-design-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Når du skal lage hull i lær, hvilket verktøy bør du bruke?',
        options: [
          { id: 'a', text: 'Vanlig trebor i drill' },
          { id: 'b', text: 'Hulljern og klubbe', isCorrect: true },
          { id: 'c', text: 'Saks' },
          { id: 'd', text: 'Metallbor' },
        ],
        solution: 'Hulljern (også kalt stansjern) og klubbe er riktig verktøy for å lage hull i lær. Bor vil rive og flise læret, mens hulljernet skjærer et rent hull.',
      },
    },
    {
      id: 'handverk-design-vg1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de tre stegene i systematisk materialvalg.',
        solution: 'De tre stegene er: 1) Definer produktkravene - hva skal produktet brukes til, hvor, av hvem, og hvor lenge skal det vare. 2) Identifiser nødvendige egenskaper - hvilken styrke, fleksibilitet, værbestandighet osv. trengs. 3) Vurder tilgjengelige materialer - hvilke alternativer oppfyller kravene, hva er tilgjengelig og hva har du erfaring med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke utfordringer kan oppstå når du kombinerer ulike materialer i et produkt?',
        solution: 'Utfordringer ved materialkombinasjon inkluderer: ulik utvidelse ved temperaturendring (kan føre til sprekkdannelse), ulik reaksjon på fuktighet, galvanisk korrosjon mellom ulike metaller, vanskeligheter med reparasjon, og komplisert resirkulering fordi materialene må skilles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal lage en serveringsbrett. Gå gjennom de tre stegene for materialvalg.',
        subTasks: [
          {
            label: 'a',
            task: 'Definer produktkravene.',
            solution: 'Produktkrav: Skal bære mat og drikke trygt, tåle daglig bruk, være lett å rengjøre, være lett nok til å bære, se pent ut på bordet.',
          },
          {
            label: 'b',
            task: 'Hvilke egenskaper trenger materialet?',
            solution: 'Nødvendige egenskaper: Stivhet (ikke bøye seg under last), hygienisk overflate, vannbestandig, moderat vekt, estetisk tiltalende, slitesterk.',
          },
          {
            label: 'c',
            task: 'Vurder tre aktuelle materialer.',
            solution: 'Tre: Lett, varmt, tradisjonelt - krever overflatebehandling for hygiene. Bambus: Bærekraftig, hardt, lett - god hygiene. Rustfritt stål: Svært hygienisk og holdbart - kan være kaldt og tungt.',
          },
        ],
        solution: 'Et godt valg kan være behandlet tre eller bambus for et tradisjonelt uttrykk, eller rustfritt stål for profesjonell bruk. Valget avhenger av prioritering mellom estetikk, funksjon og bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-2-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor verktøyvalg må tilpasses materialet du arbeider med.',
        solution: 'Verktøyvalg må tilpasses fordi: harde materialer krever kraftigere og sterkere verktøy, myke materialer trenger skarpere verktøy for rent snitt, sprø materialer krever forsiktig håndtering for å unngå sprekker, og tykke materialer trenger større verktøy for å nå gjennom. Feil verktøy kan skade både materialet og verktøyet, og gi dårlig resultat eller farlige situasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Teknikktilpasning', definition: 'Velge bearbeidingsmetoder som passer til materialet og resultatet' },
    { term: 'Materialkombinasjon', definition: 'Bruke flere ulike materialer i samme produkt' },
    { term: 'Produktkrav', definition: 'Kravene et produkt må oppfylle basert på bruk og bruker' },
    { term: 'Galvanisk korrosjon', definition: 'Korrosjon som oppstår mellom ulike metaller i kontakt' },
    { term: 'Innfelling', definition: 'Sammenføyning der et materiale sitter i et spor i et annet' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL2_CHAPTERS = [
  CHAPTER_HANDVERK_DESIGN_VG1_2_1,
  CHAPTER_HANDVERK_DESIGN_VG1_2_2,
  CHAPTER_HANDVERK_DESIGN_VG1_2_3,
  CHAPTER_HANDVERK_DESIGN_VG1_2_4,
  CHAPTER_HANDVERK_DESIGN_VG1_2_5,
  CHAPTER_HANDVERK_DESIGN_VG1_2_6,
  CHAPTER_HANDVERK_DESIGN_VG1_2_7,
];

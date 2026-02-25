/**
 * Tekstbok kapitler for Naturfag 10 - Kapittel 4.8: Naturressurser, bærekraft og samisk naturkunnskap
 *
 * LK20-kompetansemål:
 * - gi eksempler på samisk naturkunnskap og kunnskap om lokale naturfenomener
 * - drøfte hvordan energiproduksjon og energibruk kan påvirke miljøet lokalt og globalt
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.8: Naturressurser, bærekraft og samisk naturkunnskap
// ============================================================================

export const CHAPTER_NAT10_4_8: TextbookChapter = {
  id: 'naturfag-10-4-8',
  courseId: 'naturfag-10',
  chapterNumber: '4.8',
  title: 'Naturressurser, bærekraft og samisk naturkunnskap',
  description: 'Lær om bærekraftig forvaltning av naturressurser, energiproduksjonens miljøpåvirkning, og samisk tradisjonell kunnskap om natur og økosystemer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gi eksempler på samisk naturkunnskap og kunnskap om lokale naturfenomener',
    'drøfte hvordan energiproduksjon og energibruk kan påvirke miljøet lokalt og globalt',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'nat10-4-8-intro',
      type: 'text',
      content: `## Naturressurser, bærekraft og samisk naturkunnskap

Menneskene har alltid vært avhengige av naturen. Vi henter mat, energi, byggematerialer og medisiner fra naturen rundt oss. Men hva skjer når vi bruker mer enn naturen klarer å fornye? Og finnes det kunnskap vi kan lære av folk som har levd tett på naturen i tusenvis av år?

I dette kapitlet skal du lære om:
- Forskjellen mellom fornybare og ikke-fornybare naturressurser
- Hvordan ulike former for energiproduksjon påvirker miljøet lokalt og globalt
- Samisk tradisjonell kunnskap om natur og økosystemer
- Hvordan vi kan jobbe for en bærekraftig utvikling

Samene har gjennom årtusener utviklet en dyp forståelse av naturen i nordlige områder. Denne kunnskapen er verdifull, og den anerkjennes i dag som et viktig bidrag til vår samlede forståelse av natur og miljø.`,
    },

    // ========================================================================
    // BLOKK 1: NATURRESSURSER
    // ========================================================================

    // ========== DEFINISJON: NATURRESSURSER ==========
    {
      id: 'nat10-4-8-def-1',
      type: 'definition',
      title: 'Naturressurser',
      content: `**Naturressurser** er råstoffer og energikilder vi henter fra naturen og bruker til å dekke menneskelige behov.

Vi deler naturressurser inn i to hovedgrupper:

- **Fornybare ressurser:** Ressurser som naturen kan lage mer av i et menneskelig tidsperspektiv. Eksempler: sollys, vind, vannkraft, skog, fisk, jordbruksareal.

- **Ikke-fornybare ressurser:** Ressurser som finnes i en begrenset mengde og som brukes raskere enn naturen kan erstatte dem. Eksempler: olje, kull, naturgass, metaller, mineraler.

**Betinget fornybare ressurser:** Noen ressurser er fornybare bare dersom vi ikke overforbruker dem. Fisk er fornybart så lenge vi ikke fisker mer enn bestanden tåler. Skog er fornybar så lenge vi planter ny skog etter hogst.`,
    },

    // ========== EKSEMPEL 1: FORNYBARE VS. IKKE-FORNYBARE ==========
    {
      id: 'nat10-4-8-example-1',
      type: 'example',
      title: 'Fornybare og ikke-fornybare ressurser i Norge',
      problem: `Norge er rikt på naturressurser. Gi eksempler på fornybare og ikke-fornybare ressurser i Norge, og forklar hvorfor olje er en ikke-fornybar ressurs selv om det finnes mye av den.`,
      solution: `**Fornybare ressurser i Norge:**
- **Vannkraft** – Nedbør fyller opp vannmagasinene igjen etter bruk
- **Vindkraft** – Vinden blåser stadig, spesielt langs kysten
- **Skog** – Norge har store skogsområder som vokser igjen etter hogst (ca. 70 år for granskog)
- **Fisk** – Fiskebestander fornyer seg gjennom reproduksjon, men krever forvaltning

**Ikke-fornybare ressurser i Norge:**
- **Olje og naturgass** – Fra Nordsjøen og Barentshavet
- **Mineraler** – For eksempel kvarts, olivin og titanmineraler

**Hvorfor er olje ikke-fornybart?**
Olje er dannet av rester av plankton og andre organismer som levde i havet for mellom 50 og 500 millioner år siden. Under høyt trykk og høy temperatur ble de organiske restene omdannet til olje og gass over millioner av år.

Vi bruker olje millioner av ganger raskere enn naturen kan danne ny olje. Selv om det finnes mye olje igjen, er den likevel en begrenset ressurs fordi dannelsesprosessen tar så ekstremt lang tid.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE ==========
    {
      id: 'nat10-4-8-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-1',
        number: '4.8.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er en ikke-fornybar naturressurs?',
        options: [
          { id: 'a', text: 'Vindenergi', isCorrect: false },
          { id: 'b', text: 'Naturgass', isCorrect: true },
          { id: 'c', text: 'Tømmer fra skogen', isCorrect: false },
          { id: 'd', text: 'Vannkraft', isCorrect: false },
        ],
        solution: `**Riktig svar: Naturgass**

Naturgass er en fossil energikilde som ble dannet av organiske rester over millioner av år. Den finnes i en begrenset mengde og kan ikke fornyes i et menneskelig tidsperspektiv.

De andre alternativene er fornybare:
- **Vindenergi** fornyes kontinuerlig av soloppvarming og jordrotasjon
- **Tømmer** kan fornyes ved å plante ny skog
- **Vannkraft** drives av vannets kretsløp (fordamping og nedbør)`,
      },
    },

    // ========== OPPGAVE 2: KLASSISK ==========
    {
      id: 'nat10-4-8-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-2',
        number: '4.8.2',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hva det betyr at en ressurs er «betinget fornybar». Gi to eksempler og forklar hva som kan skje hvis vi overforbruker dem.`,
        hints: [
          'Tenk på ressurser som i utgangspunktet fornyer seg, men som kan bli brukt opp.',
          'Hva skjer med en fiskebestand dersom vi fisker for mye? Hva skjer med matjorda dersom vi dyrker den for intensivt?',
        ],
        solution: `**Betinget fornybar** betyr at ressursen i utgangspunktet er fornybar, men bare dersom vi bruker den i et tempo naturen klarer å erstatte.

**Eksempel 1: Fisk**
Fiskebestander fornyer seg gjennom reproduksjon. Men dersom vi fisker mer enn bestanden klarer å reprodusere, vil bestanden krympe. I verste fall kan arten bli utryddet lokalt. Et kjent eksempel er kollapsen av torskebestanden utenfor Newfoundland i Canada på 1990-tallet, der overfiske førte til at bestanden ble så liten at fisket måtte stoppes helt.

**Eksempel 2: Matjord**
Matjord dannes svært sakte – bare noen få centimeter per tusen år. Intensivt jordbruk uten vekselbruk eller tilbakeføring av næringsstoffer kan utarme jorda slik at den mister fruktbarheten. Erosjon fra vind og vann kan fjerne matjorda raskere enn den dannes.

Andre eksempler kan være grunnvann og skog.`,
      },
    },

    // ========================================================================
    // BLOKK 2: ENERGIPRODUKSJON OG MILJØ
    // ========================================================================

    // ========== DEFINISJON: ENERGIKILDER OG MILJØPÅVIRKNING ==========
    {
      id: 'nat10-4-8-def-2',
      type: 'definition',
      title: 'Energikilder og miljøpåvirkning',
      content: `Energiproduksjon påvirker miljøet både **lokalt** og **globalt**:

**Lokal miljøpåvirkning** er virkninger i nærheten av der energien produseres:
- Forurensing av luft, vann og jord
- Støy fra vindturbiner eller kraftverk
- Endring av landskap og naturområder
- Påvirkning av plante- og dyreliv i området

**Global miljøpåvirkning** er virkninger som påvirker hele kloden:
- Utslipp av klimagasser (CO₂, metan) som forsterker drivhuseffekten
- Havforsuring fra økt CO₂ i atmosfæren
- Klimaendringer som påvirker økosystemer over hele verden

Alle former for energiproduksjon har noe miljøpåvirkning, men forskjellene er store. Fossile brensler har størst klimapåvirkning, mens fornybare kilder har langt lavere utslipp.`,
    },

    {
      id: 'nat10-4-8-energi-tekst',
      type: 'text',
      content: `## Ulike energikilder og deres miljøpåvirkning

### Fossile brensler (kull, olje og naturgass)

Fossile brensler er den viktigste årsaken til menneskeskapte klimaendringer. Når vi brenner fossile brensler, frigjøres karbondioksid (CO₂) som har vært lagret under bakken i millioner av år.

| Energikilde | CO₂-utslipp (g/kWh) | Lokal påvirkning | Global påvirkning |
|-------------|---------------------|------------------|-------------------|
| **Kull** | ca. 820 | Partikkelforurensing, svoveldioksid, tungmetaller, gruvedrift | Svært høye CO₂-utslipp |
| **Olje** | ca. 650 | Oljesøl, luftforurensing, bore-påvirkning | Høye CO₂-utslipp |
| **Naturgass** | ca. 410 | Metanlekkasjer, boring | Betydelige CO₂-utslipp |

### Vannkraft

Norge produserer ca. 90 % av sin elektrisitet fra vannkraft.

- **Lokal påvirkning:** Demninger endrer vannføring, landskap og leveområder for fisk og andre arter. Regulering av vassdrag påvirker plante- og dyreliv langs elver.
- **Global påvirkning:** Svært lave klimagassutslipp i drift. Noe metan kan frigjøres fra oppdemte reservoarer.

### Vindkraft

- **Lokal påvirkning:** Visuell påvirkning på landskap, støy for naboer, fare for fugler og flaggermus, veier og inngrep i naturen ved utbygging.
- **Global påvirkning:** Svært lave klimagassutslipp. Noe utslipp knyttet til produksjon og transport av vindturbiner.

### Solenergi

- **Lokal påvirkning:** Arealbruk for solcellepaneler, refleksjoner, avfall ved utskifting av paneler.
- **Global påvirkning:** Svært lave klimagassutslipp i drift. Noe utslipp ved produksjon av solceller.

### Kjernekraft

- **Lokal påvirkning:** Risiko for ulykker (som Tsjernobyl og Fukushima), radioaktivt avfall som må lagres sikkert i tusenvis av år, kjølevann påvirker nærliggende vassdrag.
- **Global påvirkning:** Svært lave CO₂-utslipp i drift, men utvinning av uran krever gruvedrift.`,
    },

    // ========== EKSEMPEL 2: ENERGIPRODUKSJON I NORGE ==========
    {
      id: 'nat10-4-8-example-2',
      type: 'example',
      title: 'Miljøpåvirkning av vindkraft på Fosen',
      problem: `Utbyggingen av vindkraft på Fosen i Trøndelag har skapt debatt. Beskriv den lokale og globale miljøpåvirkningen av vindkraftutbyggingen, og forklar hvorfor det oppstod konflikt med reindriften.`,
      solution: `**Lokal miljøpåvirkning av vindkraft på Fosen:**
- Store vindturbiner ble bygget i fjellområder som er viktige beiteområder for rein
- Veier, fundamenter og kraftlinjer ble anlagt i uberørt natur
- Turbinene forstyrrer reinen med støy og visuell uro, og kan endre reinens trekkmønstre
- Fugler og flaggermus kan kollidere med turbinbladene
- Landskapet i et stort fjellområde ble varig endret

**Global miljøpåvirkning:**
- Vindkraft produserer elektrisitet uten CO₂-utslipp i drift
- Den bidrar til å erstatte fossil energi og redusere klimagassutslipp globalt
- Noe utslipp er knyttet til produksjon, transport og oppsetting av turbinene

**Konflikten med reindriften:**
Vindkraftutbyggingen på Fosen ble igangsatt som del av Norges satsing på fornybar energi for å nå nasjonale klimamål og øke produksjonen av utslippsfri kraft. Samtidig brukte sørsamiske reindriftsutøvere fjellområdene som vinterbeiteland for reinen. Høyesterett fastslo i 2021 at utbyggingen krenket samenes rett til kulturutøvelse, fordi reindrift er en sentral del av samisk kultur og tradisjon. Denne saken viser at overgangen til fornybar energi må balanseres mot urfolks rettigheter og andre miljøhensyn.`,
    },

    // ========== OPPGAVE 3: MULTIPLE CHOICE ==========
    {
      id: 'nat10-4-8-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-3',
        number: '4.8.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken energikilde har høyest CO₂-utslipp per produsert kilowattime (kWh)?',
        options: [
          { id: 'a', text: 'Naturgass', isCorrect: false },
          { id: 'b', text: 'Kjernekraft', isCorrect: false },
          { id: 'c', text: 'Kull', isCorrect: true },
          { id: 'd', text: 'Vannkraft', isCorrect: false },
        ],
        solution: `**Riktig svar: Kull**

Kull har de høyeste CO₂-utslippene av alle energikilder, med omtrent 820 gram CO₂ per kilowattime. Til sammenlikning slipper naturgass ut ca. 410 g/kWh, mens vannkraft, vindkraft og kjernekraft slipper ut svært lite CO₂ i drift.

Kull er det mest karbonintensive fossile brenselet fordi det inneholder mest karbon per energienhet.`,
      },
    },

    // ========== OPPGAVE 4: KLASSISK ==========
    {
      id: 'nat10-4-8-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-4',
        number: '4.8.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Velg to ulike energikilder (for eksempel vannkraft og vindkraft, eller kull og solenergi). Sammenlikn dem ved å beskrive lokal og global miljøpåvirkning for hver av dem. Hvilken av de to har minst total miljøpåvirkning? Begrunn svaret ditt.`,
        hints: [
          'Bruk tabellen og beskrivelsene i teksten. Husk å skille mellom lokal påvirkning (det som skjer i nærheten) og global påvirkning (klimagasser).',
          'Tenk på både drift og utbygging. Alle energikilder har noe miljøpåvirkning – poenget er å sammenlikne.',
        ],
        solution: `**Eksempel: Sammenlikning av kull og solenergi**

**Kull:**
- *Lokal påvirkning:* Gruvedrift ødelegger landskap, partikkelforurensing gir luftveisproblemer, tungmetaller og svoveldioksid forurenser luft og vann, askedeponier tar plass.
- *Global påvirkning:* Svært høye CO₂-utslipp (ca. 820 g/kWh) som bidrar til klimaendringer og havforsuring.

**Solenergi:**
- *Lokal påvirkning:* Solcelleparker krever areal som kan ta plass fra jordbruk eller natur. Produksjon av solceller krever energi og råstoffer, og utgåtte paneler skaper avfall.
- *Global påvirkning:* Svært lave CO₂-utslipp i drift (ca. 40 g/kWh medregnet produksjon av panelene).

**Konklusjon:** Solenergi har klart minst total miljøpåvirkning. Den lokale påvirkningen er begrenset (spesielt dersom paneler plasseres på tak), og den globale påvirkningen er minimal sammenliknet med kull. Kull har stor negativ påvirkning både lokalt og globalt.`,
      },
    },

    // ========================================================================
    // BLOKK 3: SAMISK NATURKUNNSKAP
    // ========================================================================

    // ========== DEFINISJON: TRADISJONELL ØKOLOGISK KUNNSKAP ==========
    {
      id: 'nat10-4-8-def-3',
      type: 'definition',
      title: 'Tradisjonell økologisk kunnskap (TEK)',
      content: `**Tradisjonell økologisk kunnskap** (forkortet TEK, fra engelsk *Traditional Ecological Knowledge*) er kunnskap om natur og økosystemer som er utviklet gjennom generasjoners nære samspill med et bestemt naturmiljø.

Denne kunnskapen kjennetegnes av at den:
- er erfaringsbasert og bygget opp over lang tid
- overføres mellom generasjoner gjennom praksis, fortellinger og språk
- er knyttet til et bestemt landskap og dets arter, vær og årstider
- ser mennesket som en del av naturen, ikke atskilt fra den

**Samisk naturkunnskap** er et eksempel på tradisjonell økologisk kunnskap. Samene har levd i og av nordlige naturområder i flere tusen år og har utviklet detaljert kunnskap om klima, dyreliv, planter, snøforhold, vind og landskap.

Tradisjonell kunnskap er ikke «gammel» eller «utdatert» – den er levende og utvikler seg stadig. I dag anerkjenner forskere og myndigheter at tradisjonell kunnskap er et erfaringsbasert kunnskapssystem som kan utfylle naturvitenskapelig forskning.`,
    },

    {
      id: 'nat10-4-8-samisk-tekst',
      type: 'text',
      content: `## Samisk naturkunnskap

### Reindrift og bærekraftig arealbruk

Reindrift er en sentral del av samisk kultur og levemåte. Samiske reindriftsutøvere har gjennom generasjoner utviklet en dyp forståelse av reinens behov, beiteområder og vandringsmønstre.

Reindriften er et eksempel på **bærekraftig naturbruk** fordi:
- Reinen flyttes mellom ulike beiteområder gjennom året, slik at beitene får tid til å vokse igjen
- Reindriftsutøverne tilpasser antall dyr til det beitene tåler
- Kunnskapen om snøforhold, vind og terreng brukes til å finne de beste beiteplassene til rett tid
- Reindriften bygger på samarbeid med naturen, ikke kontroll over den

### Samiske årstider

Mens vi i Norge vanligvis bruker fire årstider, opererer mange samiske samfunn med **åtte årstider**. Dette gjenspeiler en mer nyansert forståelse av naturens sykluser, tilpasset livet i nordlige områder:

1. **Giđđadálvi** (vårvinter, ca. mars–april) – Sola kommer tilbake, snøen begynner å smelte om dagen og fryser om natten. Skareføre.
2. **Giđđa** (vår, ca. mai) – Snøen smelter, fuglene kommer tilbake, reinkalvene fødes.
3. **Giđđageassi** (vårsommer, ca. juni) – Naturen våkner, planter begynner å vokse, lange dager.
4. **Geassi** (sommer, ca. juli) – Midnattssol, full vekstsesong, bær og planter modnes.
5. **Čakčageassi** (høstsommer, ca. august) – Bær er modne, nettene blir mørkere, samling og høsting.
6. **Čakča** (høst, ca. september–oktober) – Reinsamling, slakting, forberedelse til vinteren.
7. **Čakčadálvi** (høstvinter, ca. november) – Mørketid begynner, snøen legger seg, naturen går i dvale.
8. **Dálvi** (vinter, ca. desember–februar) – Mørketid, kulde, reinen beiter på lav under snøen.

Disse åtte årstidene er nært knyttet til endringer i naturen og er viktige for å planlegge reindrift, jakt, fiske og sanking.

### Naturobservasjoner og værtegn

Samisk naturkunnskap inneholder rike observasjoner av natur og vær, for eksempel:

- **Snøkunnskap:** Samisk språk har et stort antall ord for ulike typer snø og snøforhold. For eksempel skilles det mellom snø som reinen kan grave gjennom for å nå laven under, og snø med islag som hindrer beiting. Denne kunnskapen er avgjørende for å vurdere om et beiteområde er brukbart.
- **Vindkunnskap:** Kunnskap om vindretninger og hvordan vinden påvirker snøforhold, temperatur og dyreliv.
- **Dyreadferd som værtegn:** Observasjoner av hvordan fugler, rein og andre dyr oppfører seg, kan gi informasjon om kommende vær og årstidskifter.
- **Planteobservasjoner:** Kunnskap om når bestemte planter blomstrer eller bær modnes, brukes som indikatorer for sesongskifter.`,
    },

    // ========== EKSEMPEL 3: SAMISK SNØKUNNSKAP ==========
    {
      id: 'nat10-4-8-example-3',
      type: 'example',
      title: 'Samisk snøkunnskap og reinbeite',
      problem: `Forklar hvorfor samisk kunnskap om snøforhold er viktig for reindriften, og gi eksempler på hvordan denne kunnskapen brukes i praksis.`,
      solution: `**Hvorfor snøkunnskap er viktig:**
Om vinteren lever reinen hovedsakelig av lav som vokser på bakken. For å nå laven må reinen grave seg gjennom snøen med klovene. Snøforholdene avgjør derfor om reinen kan finne nok mat.

**Samisk snøkunnskap i praksis:**

Samisk språk har mange begreper som beskriver snøforhold relevant for beiting:
- **Čuoŋu** – løs, nysnø som reinen lett kan grave gjennom
- **Skávvi** – hard skare som reinen ikke klarer å grave igjennom
- **Sievlla** – snø med islag inne i snødekket som blokkerer tilgang til lav

**Slik brukes kunnskapen:**
1. Reindriftsutøveren vurderer snøforholdene ved å observere vær, vind og temperatur
2. Dersom det har vært mildvær etterfulgt av kulde, kan det ha dannet seg et islag (sievlla) inne i snøen
3. Da må reinen flyttes til et annet beiteområde der snøforholdene er bedre
4. Kunnskapen om hvilke områder som normalt har gunstige snøforhold, er bygget opp over generasjoner

**Denne kunnskapen samsvarer med det vitenskapen vet:**
Klimaforskere bekrefter at mildvær med påfølgende frost skaper isdekke som hindrer reinbeiting. Samisk snøkunnskap gir detaljerte, stedsbaserte observasjoner som utfyller vitenskapelige klimadata.`,
    },

    // ========== OPPGAVE 5: KLASSISK ==========
    {
      id: 'nat10-4-8-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-5',
        number: '4.8.5',
        type: 'classic',
        difficulty: 'lett',
        task: `Forklar hva tradisjonell økologisk kunnskap (TEK) er. Gi minst to eksempler på samisk naturkunnskap.`,
        hints: [
          'TEK er kunnskap som er bygget opp gjennom lang erfaring med naturen i et bestemt område.',
        ],
        solution: `**Tradisjonell økologisk kunnskap (TEK)** er kunnskap om natur og økosystemer som er utviklet over mange generasjoner gjennom nært samspill med et bestemt naturmiljø. Kunnskapen overføres mellom generasjoner gjennom praksis, fortellinger og språk.

**Eksempler på samisk naturkunnskap:**

1. **Snøkunnskap:** Samene har mange begreper for ulike snøtyper og snøforhold, som brukes for å vurdere beiteforhold for reinen. De kan for eksempel skille mellom snø som reinen kan grave gjennom og snø med islag som hindrer beiting.

2. **Åtte årstider:** Samiske samfunn bruker åtte årstider som gjenspeiler naturens endringer mer nyansert enn de vanlige fire årstidene. Hver årstid er knyttet til bestemte aktiviteter og naturendringer.

3. **Dyreadferd som værtegn:** Observasjoner av fugler og reinens adferd brukes til å forutsi værforandringer og sesongskifter.

(Det holder å gi to eksempler, men flere viser dypere forståelse.)`,
      },
    },

    // ========== OPPGAVE 6: MULTIPLE CHOICE ==========
    {
      id: 'nat10-4-8-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-6',
        number: '4.8.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange årstider bruker mange samiske samfunn?',
        options: [
          { id: 'a', text: 'Fire', isCorrect: false },
          { id: 'b', text: 'Seks', isCorrect: false },
          { id: 'c', text: 'Åtte', isCorrect: true },
          { id: 'd', text: 'Tolv', isCorrect: false },
        ],
        solution: `**Riktig svar: Åtte**

Mange samiske samfunn bruker åtte årstider. Disse gjenspeiler en mer detaljert inndeling av naturens sykluser enn de fire årstidene vi vanligvis bruker. De åtte årstidene er nært knyttet til endringer i naturen og er viktige for å planlegge reindrift, jakt, fiske og sanking. Eksempler på årstider er giđđadálvi (vårvinter) og čakčageassi (høstsommer).`,
      },
    },

    // ========== EKSEMPEL 4: URFOLKSKUNNSKAP OG VITENSKAP ==========
    {
      id: 'nat10-4-8-example-4',
      type: 'example',
      title: 'Urfolkskunnskap og moderne naturforvaltning',
      problem: `Gi et eksempel på hvordan samisk tradisjonell kunnskap kan brukes sammen med moderne vitenskap i naturforvaltning.`,
      solution: `**Eksempel: Overvåking av klimaendringer i Arktis**

Klimaendringene merkes tydelig i nordlige områder. Forskere bruker satellittdata, værstasjoner og klimamodeller for å studere endringene. Men samiske reindriftsutøvere har observert endringer i snøforhold, beiteforhold og dyreadferd i sine områder gjennom lang tid.

**Slik utfyller kunnskapssystemene hverandre:**

| Vitenskapelig forskning | Samisk tradisjonell kunnskap |
|------------------------|------------------------------|
| Måler temperaturendringer med instrumenter | Observerer at snøforholdene har endret seg – mer skare og is enn før |
| Bruker satellittbilder til å kartlegge snødekke | Vet nøyaktig hvilke beiteområder som er brukbare basert på lokal erfaring |
| Lager klimamodeller for fremtidige endringer | Har observert endringer i fugletrekk og planters vekstsesong over tid |
| Samler data fra store områder | Gir detaljert, stedsbasert kunnskap fra spesifikke lokaliteter |

**Resultat:** Når forskere og samiske kunnskapsbærere samarbeider, får vi et mer fullstendig bilde av hvordan klimaendringene påvirker nordlige økosystemer. Den vitenskapelige forskningen gir oversikt over store trender, mens den tradisjonelle kunnskapen gir dybde og lokale detaljer som instrumentene ikke fanger opp.

Denne tilnærmingen kalles noen ganger **«to-øyet-seing»** (two-eyed seeing) – en metafor for å se verden gjennom både vestlig vitenskapens og urfolkskunnskapens «øye» for å få en rikere forståelse.`,
    },

    // ========================================================================
    // BLOKK 4: BÆREKRAFTIG UTVIKLING
    // ========================================================================

    // ========== DEFINISJON: BÆREKRAFTIG UTVIKLING ==========
    {
      id: 'nat10-4-8-def-4',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er en utvikling som dekker behovene til menneskene som lever i dag, uten å ødelegge mulighetene for fremtidige generasjoner til å dekke sine behov. (Brundtland-kommisjonen, 1987)

Bærekraftig utvikling har tre dimensjoner:
- **Miljømessig bærekraft** – Vi må ta vare på naturen, økosystemene og naturressursene
- **Sosial bærekraft** – Alle mennesker skal ha gode levekår, rettferdighet og like muligheter
- **Økonomisk bærekraft** – Økonomien må drives på en måte som ikke ødelegger natur eller samfunn

**FNs bærekraftsmål** er 17 mål som verdens land har blitt enige om å jobbe mot innen 2030. Blant de mest relevante for dette kapitlet er:
- Mål 7: Ren energi til alle
- Mål 12: Ansvarlig forbruk og produksjon
- Mål 13: Stoppe klimaendringene
- Mål 14: Livet i havet
- Mål 15: Livet på land

**Sirkulærøkonomi** er en økonomisk modell der materialer brukes om igjen i stedet for å kastes. I stedet for å ta ut råstoffer, produsere, bruke og kaste (lineær økonomi), legger denne modellen opp til at produkter designes for gjenbruk, reparasjon og resirkulering.`,
    },

    // ========== OPPGAVE 7: KLASSISK ==========
    {
      id: 'nat10-4-8-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-7',
        number: '4.8.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hva bærekraftig utvikling betyr, og beskriv de tre dimensjonene. Gi et eksempel som viser hvordan en beslutning kan være bra for én dimensjon, men dårlig for en annen.`,
        hints: [
          'Tenk på de tre dimensjonene: miljømessig, sosial og økonomisk.',
          'Et eksempel kan være en fabrikk som gir arbeidsplasser (sosial/økonomisk) men forurenser (miljø).',
        ],
        solution: `**Bærekraftig utvikling** betyr å dekke dagens behov uten å ødelegge fremtidige generasjoners muligheter til å dekke sine behov.

**De tre dimensjonene:**
1. **Miljømessig bærekraft:** Ta vare på natur, økosystemer og naturressurser
2. **Sosial bærekraft:** Sikre gode levekår, rettferdighet og like muligheter for alle
3. **Økonomisk bærekraft:** Drive økonomien på en måte som ikke ødelegger natur eller samfunn

**Eksempel på konflikt mellom dimensjonene:**
En gruve med sjeldne mineraler kan gi mange arbeidsplasser i et lokalsamfunn (økonomisk og sosialt bærekraftig), men gruvedriften kan forurense vassdrag, ødelegge naturområder og true artsmangfoldet (miljømessig ikke bærekraftig).

For at utviklingen skal være virkelig bærekraftig, må alle tre dimensjonene ivaretas samtidig. Det betyr at vi må finne løsninger som balanserer hensynet til miljø, økonomi og mennesker.`,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'nat10-4-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Naturressurser:**
- Fornybare ressurser kan fornyes i et menneskelig tidsperspektiv (sol, vind, skog, fisk)
- Ikke-fornybare ressurser finnes i begrenset mengde (olje, kull, gass, mineraler)
- Betinget fornybare ressurser er fornybare bare dersom vi ikke overforbruker dem

**Energiproduksjon og miljø:**
- Fossile brensler (kull, olje, gass) gir store CO₂-utslipp og er hovedårsaken til menneskeskapte klimaendringer
- Fornybare energikilder (vannkraft, vindkraft, solenergi) har langt lavere klimagassutslipp, men kan ha lokal miljøpåvirkning
- Kjernekraft gir lave CO₂-utslipp, men radioaktivt avfall er en utfordring
- Alle energikilder har noe miljøpåvirkning – det handler om å velge de beste alternativene

**Samisk naturkunnskap:**
- Samene har utviklet detaljert kunnskap om nordlig natur gjennom tusenvis av år
- Denne kunnskapen inkluderer snøforhold, årstider, dyreadferd og planteobservasjoner
- Mange samiske samfunn bruker åtte årstider som gjenspeiler naturens sykluser
- Tradisjonell kunnskap er et verdifullt kunnskapssystem som utfyller vitenskapelig forskning

**Bærekraftig utvikling:**
- Betyr å dekke dagens behov uten å ødelegge fremtidige generasjoners muligheter
- Har tre dimensjoner: miljømessig, sosial og økonomisk
- FNs bærekraftsmål gir rammer for arbeidet
- Sirkulærøkonomi er en modell der materialer gjenbrukes i stedet for å kastes`,
    },

    // ========================================================================
    // SAMLEOPPGAVER
    // ========================================================================

    {
      id: 'nat10-4-8-samle-intro',
      type: 'text',
      content: `## Samleoppgaver

Disse oppgavene krever at du kombinerer kunnskap fra hele kapitlet.`,
    },

    // ========== OPPGAVE 8: KLASSISK (VANSKELIG) ==========
    {
      id: 'nat10-4-8-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-8',
        number: '4.8.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Norge er en stor produsent av både olje/gass og fornybar energi (vannkraft).

a) Drøft hvordan Norges olje- og gassproduksjon påvirker miljøet lokalt og globalt.

b) Forklar hvordan samisk naturkunnskap har vist at klimaendringene allerede påvirker nordlige økosystemer.

c) Hvilke dilemmaer står Norge overfor når det gjelder energiproduksjon og bærekraft? Bruk eksempler fra dette kapitlet.`,
        hints: [
          'I oppgave a) skal du tenke på både utvinningen (lokalt) og forbrenningen av norsk olje/gass i utlandet (globalt).',
          'I oppgave b) kan du bruke eksempler om snøforhold, beiteforhold og endringer i dyreadferd.',
          'I oppgave c) kan Fosen-saken og oljeindustrien være gode eksempler på dilemmaer.',
        ],
        solution: `**a) Miljøpåvirkning av norsk olje og gass:**

*Lokalt:*
- Risiko for oljesøl som skader marint dyreliv og kystområder
- Utslipp fra borerigger og plattformer forurenser havet lokalt
- Infrastruktur (rørledninger, anlegg) påvirker havbunnen

*Globalt:*
- Norsk olje og gass som eksporteres og brennes i andre land, bidrar til globale CO₂-utslipp
- CO₂-utslippene forsterker drivhuseffekten og fører til klimaendringer som rammer hele kloden
- Havforsuring fra økt CO₂ skader marint økosystem globalt

**b) Samisk naturkunnskap og klimaendringer:**

Samiske reindriftsutøvere har over tid observert:
- Endrede snøforhold – flere episoder med mildvær og påfølgende frost som skaper islag i snøen, noe som gjør det vanskeligere for reinen å grave seg ned til laven
- Endringer i når fuglene trekker og når planter blomstrer
- At beiteområder som tidligere var pålitelige, ikke lenger har gode forhold
- Disse observasjonene bekreftes av vitenskapelig klimaforskning og gir verdifull stedsbasert informasjon

**c) Norges dilemmaer:**

*Dilemma 1: Olje vs. klima*
Norge tjener store penger på olje og gass, noe som finansierer velferd (økonomisk og sosialt bærekraftig). Men produksjonen bidrar til globale klimaendringer (miljømessig ikke bærekraftig).

*Dilemma 2: Vindkraft vs. urfolks rettigheter*
Vindkraft på Fosen bidrar til ren energi (miljømessig bærekraft), men krenker samenes rett til reindrift og kulturutøvelse (sosialt ikke bærekraftig), som Høyesterett fastslo.

Disse dilemmaene viser at bærekraftig utvikling krever at vi balanserer alle tre dimensjonene – miljø, økonomi og sosiale hensyn – samtidig.`,
      },
    },

    // ========== OPPGAVE 9: KLASSISK (VANSKELIG) ==========
    {
      id: 'nat10-4-8-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-9',
        number: '4.8.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forskere og urfolk har ulike tilnærminger til å forstå naturen, men begge kunnskapssystemene har verdi.

a) Beskriv minst to forskjeller mellom vitenskapelig kunnskap og tradisjonell økologisk kunnskap (TEK).

b) Forklar med et eksempel hvordan de to kunnskapssystemene kan utfylle hverandre.

c) Hvorfor er det viktig å ta vare på tradisjonell kunnskap? Hva kan gå tapt dersom denne kunnskapen forsvinner?`,
        hints: [
          'Tenk på hvordan kunnskap samles inn, overføres og brukes i de to systemene.',
          'Bruk gjerne eksemplet om klimaovervåking i Arktis fra teksten.',
        ],
        solution: `**a) Forskjeller mellom vitenskapelig kunnskap og TEK:**

| Vitenskapelig kunnskap | Tradisjonell økologisk kunnskap |
|---|---|
| Basert på systematiske eksperimenter og målinger | Basert på lang erfaring og observasjoner over generasjoner |
| Skrives ned i vitenskapelige artikler | Overføres ofte muntlig, gjennom praksis og fortellinger |
| Søker universelle lovmessigheter | Knyttet til bestemte steder og økosystemer |
| Ser ofte på naturen objektivt, som noe som studeres utenfra | Ser mennesket som en del av naturen |

**b) Hvordan de utfyller hverandre:**

Eksempel fra klimaovervåking: Vitenskapelige instrumenter måler temperaturer og snødekke fra satellitter og gir oversikt over store områder. Samiske reindriftsutøvere observerer de konkrete virkningene på bakkenivå – som endrede snøforhold som påvirker reinens beitemuligheter. Sammen gir de to kunnskapskildene et mer fullstendig bilde av klimaendringenes konsekvenser.

**c) Hvorfor det er viktig å ta vare på tradisjonell kunnskap:**

- TEK inneholder detaljert, stedsspesifikk kunnskap om økosystemer som det kan ta generasjoner å bygge opp igjen
- Denne kunnskapen kan være avgjørende for bærekraftig forvaltning av naturressurser
- Mange samiske naturobservasjoner er knyttet til det samiske språket – dersom språket forsvinner, kan spesifikke begreper og nyanser gå tapt (for eksempel de mange snøbegrepene)
- Tradisjonell kunnskap kan inneholde løsninger vi ikke ennå har oppdaget gjennom vitenskapelig forskning
- Urfolks kunnskap er en del av verdens kulturarv og representerer en unik måte å forstå og forholde seg til naturen på`,
      },
    },

    // ========== OPPGAVE 10: MULTIPLE CHOICE (VANSKELIG) ==========
    {
      id: 'nat10-4-8-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'nat10-4-8-oppg-10',
        number: '4.8.10',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er den beste forklaringen på hvorfor klimaendringer er spesielt problematisk for samisk reindrift?',
        options: [
          { id: 'a', text: 'Fordi reinen ikke tåler høyere temperaturer om sommeren', isCorrect: false },
          { id: 'b', text: 'Fordi hyppigere mildvær med påfølgende frost skaper islag i snøen som hindrer reinens tilgang til beite', isCorrect: true },
          { id: 'c', text: 'Fordi det blir for mye snø om vinteren til at reinen kan bevege seg', isCorrect: false },
          { id: 'd', text: 'Fordi klimaendringer gjør at laven reinen spiser dør ut', isCorrect: false },
        ],
        solution: `**Riktig svar: Fordi hyppigere mildvær med påfølgende frost skaper islag i snøen som hindrer reinens tilgang til beite.**

Klimaendringene fører til mildere og mer ustabilt vintervær i nordlige områder. Når det blir mildvær midt på vinteren og snøen smelter delvis, for deretter å fryse til is når kulden kommer tilbake, dannes det et hardt islag i eller oppå snøen. Reinen klarer ikke å grave gjennom dette islaget for å nå laven som vokser på bakken.

Samiske reindriftsutøvere har observert at slike episoder med «låst beite» har blitt vanligere. I alvorlige tilfeller kan reinen sulte, og flokkene må flyttes til andre beiteområder – noe som ikke alltid er mulig på grunn av utbygging, veier og vindkraftverk.

De andre alternativene er unøyaktige: Reinen tåler godt høye sommertemperaturer (men plages av insekter), mengden snø er ikke hovedproblemet, og laven dør ikke direkte av klimaendringer.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Naturressurser', definition: 'Råstoffer og energikilder vi henter fra naturen for å dekke menneskelige behov.' },
    { term: 'Fornybare ressurser', definition: 'Ressurser som naturen kan lage mer av i et menneskelig tidsperspektiv, for eksempel sollys, vind og skog.' },
    { term: 'Ikke-fornybare ressurser', definition: 'Ressurser som finnes i begrenset mengde og brukes raskere enn naturen kan erstatte dem, for eksempel olje, kull og gass.' },
    { term: 'Fossile brensler', definition: 'Energikilder dannet av organiske rester over millioner av år: kull, olje og naturgass. Gir store CO₂-utslipp ved forbrenning.' },
    { term: 'Tradisjonell økologisk kunnskap (TEK)', definition: 'Kunnskap om natur og økosystemer utviklet gjennom generasjoners nære samspill med et bestemt naturmiljø.' },
    { term: 'Samisk naturkunnskap', definition: 'Samenes tradisjonelle kunnskap om nordlige naturforhold, inkludert snø, vær, dyreliv, planter og årstider.' },
    { term: 'Bærekraftig utvikling', definition: 'Utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter.' },
    { term: 'Sirkulærøkonomi', definition: 'Økonomisk modell der materialer gjenbrukes, repareres og resirkuleres i stedet for å kastes.' },
    { term: 'Lokal miljøpåvirkning', definition: 'Miljøvirkninger i nærheten av der energien produseres, for eksempel forurensing, støy og naturinngrep.' },
    { term: 'Global miljøpåvirkning', definition: 'Miljøvirkninger som påvirker hele kloden, for eksempel klimagassutslipp og havforsuring.' },
  ],
};

/* eslint-disable */
// @ts-nocheck
/**
 * Entreprenørskap og bedriftsutvikling 1 (VG2) - Del 3: Forretningsmodeller
 * Kapittel 3.1-3.5
 *
 * Dekker LK20 kompetansemål:
 * - utvikle og presentere en forretningsmodell knyttet til en forretningsidé
 * - gjøre rede for ulike inntektsmodeller og vurdere hvilke som passer til en gitt forretningsidé
 * - drøfte verdien av bærekraftige forretningsmodeller
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hva er en forretningsmodell?
// ============================================================================

export const CHAPTER_ENTREBED_1_3_1: TextbookChapter = {
  id: 'entrebed-1-3-1',
  courseId: 'entrebed-1',
  chapterNumber: '3.1',
  title: 'Hva er en forretningsmodell?',
  description: 'Lær hva en forretningsmodell er, hvorfor den er viktig, og få en introduksjon til verdiforslag og Business Model Canvas.',
  estimatedMinutes: 22,
  competenceGoals: [
    'utvikle og presentere en forretningsmodell knyttet til en forretningsidé',
  ],
  content: [
    {
      id: 'eb-3-1-intro',
      type: 'text',
      content: `## Hva er en forretningsmodell?

Å ha en god idé er ikke nok for å lykkes med en bedrift. Du trenger også en plan for **hvordan** bedriften skal tjene penger, hvem kundene er, og hvordan du skal levere verdi til dem. Denne planen kalles en **forretningsmodell**.

I dette kapittelet skal du lære:
- Hva en forretningsmodell er og hvorfor den er viktig
- Forskjellen mellom forretningsmodell og forretningsplan
- Hva et verdiforslag innebærer
- Hvordan Business Model Canvas brukes som verktøy`,
    },
    {
      id: 'eb-3-1-def-1',
      type: 'definition',
      title: 'Forretningsmodell',
      content: `En **forretningsmodell** beskriver hvordan en bedrift skaper, leverer og fanger verdi. Den forklarer:

- **Hvem** er kundene dine?
- **Hva** tilbyr du dem (verdiforslaget)?
- **Hvordan** leverer du dette til kundene?
- **Hvorfor** er dette lønnsomt (inntekter vs. kostnader)?

En forretningsmodell er altså en helhetlig beskrivelse av bedriftens logikk for å tjene penger.`,
    },
    {
      id: 'eb-3-1-text-1',
      type: 'text',
      content: `### Forretningsmodell vs. forretningsplan

Mange blander disse to begrepene, men de er ulike:

| | Forretningsmodell | Forretningsplan |
|---|---|---|
| **Hva** | Beskriver logikken for verdiskaping | Detaljert dokument med strategi og økonomi |
| **Omfang** | Ofte én side (f.eks. Canvas) | Gjerne 20-50 sider |
| **Fokus** | Hvordan tjene penger | Hvordan gjennomføre og finansiere |
| **Bruk** | Internt verktøy for å forstå forretningen | Eksternt for investorer og banker |
| **Endring** | Justeres ofte etter testing | Oppdateres sjeldnere |

Forretningsmodellen er **grunnlaget** for forretningsplanen. Du bør alltid utvikle forretningsmodellen først, og så bygge videre med en detaljert plan.`,
    },
    {
      id: 'eb-3-1-def-2',
      type: 'definition',
      title: 'Verdiforslag',
      content: `**Verdiforslaget** (Value Proposition) er kjernen i en forretningsmodell. Det beskriver hvilken verdi bedriften tilbyr kundene sine.

Et godt verdiforslag svarer på spørsmålet: **Hvorfor skal kunden velge akkurat deg?**

Eksempler:
- **IKEA:** Veldesignet møbler til lave priser
- **Spotify:** All musikk, hvor som helst, når som helst
- **Vipps:** Enkel og rask mobilbetaling`,
    },
    {
      id: 'eb-3-1-text-2',
      type: 'text',
      content: `### Hvorfor er forretningsmodellen viktig?

Mange gründere mislykkes ikke fordi de har dårlige ideer, men fordi de mangler en fungerende forretningsmodell. Her er noen grunner til at forretningsmodellen er avgjørende:

**1. Den tvinger deg til å tenke helhetlig**
Du kan ikke bare fokusere på produktet. Du må også tenke på kunder, kanaler, kostnader og inntekter.

**2. Den gjør det lettere å kommunisere**
Når du skal forklare ideen din til andre — investorer, partnere eller medgründere — gir forretningsmodellen en klar og strukturert fremstilling.

**3. Den avdekker svakheter tidlig**
Ved å beskrive alle delene av forretningen, oppdager du hull og problemer før du bruker mye tid og penger.

**4. Den er et verktøy for innovasjon**
Mange av verdens mest suksessrike selskaper har lyktes fordi de fant nye forretningsmodeller, ikke nødvendigvis nye produkter. Airbnb eier ingen hoteller. Uber eier ingen biler. Netflix startet med DVD-utleie, men revolusjonerte bransjen med strømming.`,
    },
    {
      id: 'eb-3-1-tip-1',
      type: 'tip',
      title: 'Introduksjon til Business Model Canvas',
      content: `**Business Model Canvas** (BMC) er det mest brukte verktøyet for å beskrive forretningsmodeller. Det ble utviklet av Alexander Osterwalder og Yves Pigneur, og presentert i boken *Business Model Generation* (2010).

BMC er et visuelt verktøy som lar deg beskrive hele forretningsmodellen på **én side**, fordelt på ni byggesteiner. Vi går i detalj gjennom alle ni i neste kapittel.

De ni byggesteinene er:
1. Kundesegmenter
2. Verdiforslag
3. Kanaler
4. Kunderelasjoner
5. Inntektsstrømmer
6. Nøkkelressurser
7. Nøkkelaktiviteter
8. Nøkkelpartnere
9. Kostnadsstruktur`,
    },
    {
      id: 'eb-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Forretningsmodellen til en food truck',
      problem: 'Du starter en food truck som selger gourmetburgere. Beskriv forretningsmodellen i korte trekk.',
      solution: `**Kunder:** Studenter, kontorarbeidere og festivalgjengere i bysentrum.

**Verdiforslag:** Hjemmelagde gourmetburgere med lokale råvarer til en overkommelig pris — raskere enn restaurant, bedre enn fast food.

**Kanaler:** Fysisk food truck på faste lokasjoner, bestilling via app, Instagram for markedsføring.

**Inntekter:** Salg per burger, drikke og tilbehør. Ekstra inntekter fra catering ved arrangementer.

**Kostnader:** Råvarer, leasing av food truck, drivstoff, markedsføring, lønninger.

**Nøkkelressurser:** Kokk/gründer, oppskrifter, food truck, leverandører.

Denne korte oversikten gir et klart bilde av hvordan bedriften fungerer — det er essensen av en forretningsmodell.`,
    },
    {
      id: 'eb-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Forretningsmodellinnovasjon',
      problem: 'Hvordan endret Netflix sin forretningsmodell?',
      solution: `**Fase 1 — DVD-utleie per post (1997):**
- Verdiforslag: Bredt utvalg, ingen forsinkelsesgebyr, levering hjem
- Inntekt: Abonnement per måned
- Slo konkurrenten Blockbuster som krevde gebyr og hadde begrenset utvalg

**Fase 2 — Strømmetjeneste (2007):**
- Verdiforslag: Ubegrenset film og serier, strømming når du vil
- Inntekt: Månedlig abonnement
- Gjorde fysiske butikker overflødig

**Fase 3 — Egenprodusert innhold (2013→):**
- Verdiforslag: Eksklusive serier og filmer du ikke finner andre steder
- Inntekt: Fortsatt abonnement, men høyere betalingsvilje
- Ble en av verdens største innholdsprodusenter

Netflix er et skoleeksempel på at **forretningsmodellen** kan være viktigere enn selve produktet.`,
    },
    {
      id: 'eb-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva beskriver en forretningsmodell?',
        options: [
          { id: 'a', text: 'Kun hvordan bedriften skal markedsføre seg', isCorrect: false },
          { id: 'b', text: 'Hvordan bedriften skaper, leverer og fanger verdi', isCorrect: true },
          { id: 'c', text: 'Bare kostnadene til bedriften', isCorrect: false },
          { id: 'd', text: 'Organisasjonskartet til bedriften', isCorrect: false },
        ],
        solution: 'En forretningsmodell beskriver helheten av hvordan en bedrift skaper verdi for kundene, leverer denne verdien, og fanger verdi tilbake i form av inntekter.',
      },
    },
    {
      id: 'eb-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en forretningsmodell og en forretningsplan?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell — begrepene betyr det samme', isCorrect: false },
          { id: 'b', text: 'Forretningsmodellen beskriver logikken for verdiskaping, mens forretningsplanen er et detaljert dokument med strategi og økonomi', isCorrect: true },
          { id: 'c', text: 'Forretningsplanen lages først, og forretningsmodellen bygger på den', isCorrect: false },
          { id: 'd', text: 'Forretningsmodellen er kun for store bedrifter, forretningsplanen for små', isCorrect: false },
        ],
        solution: 'Forretningsmodellen er en kompakt beskrivelse av hvordan bedriften fungerer (ofte på én side), mens forretningsplanen er et utfyllende dokument som dekker strategi, budsjett, organisasjon og mer. Modellen lages først.',
      },
    },
    {
      id: 'eb-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Forklar hva et verdiforslag er, og gi et eksempel på et sterkt verdiforslag fra en bedrift du kjenner til.',
        hints: ['Tenk på hva som gjør at du velger én bedrift fremfor en annen', 'Hva lover bedriften deg som kunde?'],
        solution: 'Et verdiforslag beskriver hvilken verdi bedriften tilbyr kundene, og hvorfor kunden skal velge akkurat denne bedriften. Eksempel: Rema 1000 — «Det enkle er ofte det beste». De lover lave priser i enkle, effektive butikker. Verdiforslaget er tydelig: du sparer penger uten å gå på kompromiss med kvalitet på basisvarer.',
      },
    },
    {
      id: 'eb-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'Hvorfor mislykkes mange gründere selv om de har en god produktidé? Bruk begrepet forretningsmodell i svaret ditt.',
        solution: 'Mange gründere mislykkes fordi de fokuserer for mye på produktet og for lite på forretningsmodellen. En god idé er ikke nok — du må også vite hvem kundene er, hvordan du skal nå dem, hva de er villige til å betale, og om inntektene dekker kostnadene. Uten en gjennomtenkt forretningsmodell risikerer du å lage noe ingen vil betale for, eller å bruke mer penger enn du tjener.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        task: 'Velg en bedrift du kjenner godt (for eksempel en nettbutikk, kafé eller app). Beskriv forretningsmodellen ved å svare på disse fire spørsmålene: Hvem er kundene? Hva er verdiforslaget? Hvordan leveres verdien? Hvordan tjener bedriften penger?',
        hints: ['Du trenger ikke skrive en lang tekst — korte, presise svar er best', 'Tenk på forskjellen mellom hva bedriften selger og hva kunden egentlig betaler for'],
        solution: 'Eksempel med Spotify: Kundene er musikkinteresserte i alle aldre. Verdiforslaget er tilgang til millioner av sanger når som helst, hvor som helst, med personlige anbefalinger. Verdien leveres gjennom en app på mobil, nettbrett og PC. Bedriften tjener penger på månedlige abonnementer (Premium) og annonseinntekter (gratisbrukere).',
      },
    },
    {
      id: 'eb-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Beskriv kort hvordan Airbnb endret forretningsmodellen i hotellbransjen. Hva er det Airbnb gjør annerledes enn tradisjonelle hoteller, og hvorfor har dette vært så vellykket?',
        hints: ['Tenk på hvem som eier rommene', 'Hva er Airbnbs rolle — produsent eller plattform?'],
        solution: 'Airbnb eier ingen hotellrom. De er en plattform som kobler verter (som har ledig plass) med gjester (som trenger overnatting). Forretningsmodellen er annerledes fordi Airbnb ikke har de enorme kostnadene knyttet til å eie og drifte hoteller. De tjener penger på provisjon fra både verter og gjester. Suksessen skyldes lavere priser enn hoteller, unike opplevelser (bo som en lokal), og et enormt utvalg verden over.',
      },
    },
    {
      id: 'eb-3-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **forretningsmodell** beskriver hvordan en bedrift skaper, leverer og fanger verdi
- **Verdiforslaget** er kjernen i forretningsmodellen — det som gjør at kunder velger deg
- Forretningsmodellen er **grunnlaget** for forretningsplanen
- **Business Model Canvas** er et visuelt verktøy med ni byggesteiner
- **Forretningsmodellinnovasjon** kan være like viktig som produktinnovasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Forretningsmodell | Beskrivelse av hvordan bedriften skaper og fanger verdi |
| Verdiforslag | Hvilken verdi bedriften tilbyr kundene |
| Business Model Canvas | Visuelt verktøy med ni byggesteiner |
| Forretningsplan | Detaljert dokument med strategi og økonomi |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.2: Business Model Canvas
// ============================================================================

export const CHAPTER_ENTREBED_1_3_2: TextbookChapter = {
  id: 'entrebed-1-3-2',
  courseId: 'entrebed-1',
  chapterNumber: '3.2',
  title: 'Business Model Canvas',
  description: 'En grundig gjennomgang av alle ni byggesteinene i Business Model Canvas, med eksempler og praktiske øvelser.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utvikle og presentere en forretningsmodell knyttet til en forretningsidé',
  ],
  content: [
    {
      id: 'eb-3-2-intro',
      type: 'text',
      content: `## Business Model Canvas — De ni byggesteinene

**Business Model Canvas** (BMC) er utviklet av Alexander Osterwalder og er det mest brukte verktøyet i verden for å beskrive og analysere forretningsmodeller. Canvaset lar deg få oversikt over hele forretningsmodellen på **én side**, og er bygget opp rundt ni sentrale byggesteiner.

I dette kapittelet skal du lære:
- Hva hver av de ni byggesteinene innebærer
- Hvordan byggesteinene henger sammen
- Hvordan du fyller ut et Business Model Canvas for en reell bedrift`,
    },
    {
      id: 'eb-3-2-def-1',
      type: 'definition',
      title: 'Business Model Canvas (BMC)',
      content: `**Business Model Canvas** er et strategisk verktøy som visuelt beskriver en forretningsmodell gjennom ni byggesteiner:

**Høyre side — Verdiskaping (kunder):**
1. **Kundesegmenter** — Hvem skaper du verdi for?
2. **Verdiforslag** — Hvilken verdi tilbyr du?
3. **Kanaler** — Hvordan når du kundene?
4. **Kunderelasjoner** — Hvilken relasjon har du med kundene?
5. **Inntektsstrømmer** — Hvordan tjener du penger?

**Venstre side — Effektivitet (drift):**
6. **Nøkkelressurser** — Hva trenger du for å levere?
7. **Nøkkelaktiviteter** — Hva må du gjøre?
8. **Nøkkelpartnere** — Hvem samarbeider du med?
9. **Kostnadsstruktur** — Hva koster det å drive?`,
    },
    {
      id: 'eb-3-2-text-1',
      type: 'text',
      content: `### 1. Kundesegmenter

Kundesegmentene definerer de ulike gruppene av mennesker eller organisasjoner du ønsker å nå og betjene. Ingen bedrift kan tilfredsstille alle — du må velge hvem du skal fokusere på.

**Spørsmål å stille:**
- Hvem skaper du verdi for?
- Hvem er dine viktigste kunder?
- Hva kjennetegner dem (alder, interesser, behov)?

**Typer kundesegmenter:**
- **Massemarked:** Ingen spesiell segmentering (f.eks. Coca-Cola)
- **Nisjemarked:** Spesialisert kundegruppe (f.eks. Strava for syklister)
- **Segmentert:** Flere grupper med ulike behov (f.eks. en bank med privat- og bedriftskunder)
- **Flersidig plattform:** Betjener to eller flere gjensidig avhengige grupper (f.eks. Finn.no med kjøpere og selgere)

### 2. Verdiforslag

Verdiforslaget beskriver hvilken verdi du tilbyr hvert kundesegment. Det er grunnen til at kundene velger deg fremfor konkurrentene.

**Elementer som kan skape verdi:**
- Nyskapende løsninger (innovasjon)
- Bedre ytelse eller kvalitet
- Tilpasning til kundens behov
- Design og brukeropplevelse
- Lavere pris
- Risikoreduksjon (f.eks. garanti)
- Tilgjengelighet
- Brukervennlighet`,
    },
    {
      id: 'eb-3-2-text-2',
      type: 'text',
      content: `### 3. Kanaler

Kanaler beskriver hvordan du kommuniserer med og leverer verdiforslaget til kundene dine.

**Kanalfaser:**
1. Oppmerksomhet — Hvordan blir kundene klar over deg?
2. Evaluering — Hvordan vurderer de tilbudet ditt?
3. Kjøp — Hvordan kjøper de?
4. Levering — Hvordan leverer du produktet/tjenesten?
5. Ettersalg — Hvordan følger du opp etter salget?

**Eksempler:** Nettbutikk, fysisk butikk, sosiale medier, markedsplasser, salgsagenter, forhandlere.

### 4. Kunderelasjoner

Kunderelasjoner beskriver hva slags relasjon du bygger og opprettholder med hvert kundesegment.

**Typer kunderelasjoner:**
- **Personlig assistanse:** Direkte kontakt med en rådgiver (f.eks. bankkunde med fast kontakt)
- **Selvbetjening:** Kunden hjelper seg selv (f.eks. nettbutikk)
- **Automatisert tjeneste:** Personlig, men automatisert (f.eks. Netflix-anbefalinger)
- **Fellesskap:** Brukere hjelper hverandre (f.eks. forum, Facebook-grupper)
- **Medskaping:** Kunden bidrar til produktet (f.eks. YouTube, Wikipedia)

### 5. Inntektsstrømmer

Inntektsstrømmene beskriver hvordan bedriften tjener penger fra hvert kundesegment.

**Vanlige inntektsmodeller:**
- Direkte salg av produkter
- Bruksbetaling (betal per gang)
- Abonnement (månedlig/årlig betaling)
- Utleie/leasing
- Lisens (bruksrett)
- Provisjon/megling
- Annonsering`,
    },
    {
      id: 'eb-3-2-text-3',
      type: 'text',
      content: `### 6. Nøkkelressurser

Nøkkelressursene er de viktigste eiendelene bedriften trenger for å levere verdiforslaget.

**Kategorier:**
- **Fysiske:** Lokaler, maskiner, utstyr, biler
- **Intellektuelle:** Merkevare, patenter, oppskrifter, databaser
- **Menneskelige:** Kompetanse, erfaring, kreativitet hos ansatte
- **Finansielle:** Kapital, kredittlinjer, kontantreserve

### 7. Nøkkelaktiviteter

Nøkkelaktivitetene er de viktigste tingene bedriften må gjøre for at forretningsmodellen skal fungere.

**Kategorier:**
- **Produksjon:** Fremstille produktet (f.eks. fabrikk, koding)
- **Problemløsning:** Tilby skreddersydde løsninger (f.eks. konsulentfirma)
- **Plattform/nettverk:** Vedlikeholde og utvikle en plattform (f.eks. Finn.no)

### 8. Nøkkelpartnere

Nøkkelpartnerne er nettverket av leverandører og samarbeidspartnere som bidrar til at forretningsmodellen fungerer.

**Typer partnerskap:**
- Strategiske allianser med ikke-konkurrenter
- Samarbeid med konkurrenter (coopetition)
- Joint ventures for nye prosjekter
- Leverandørrelasjoner

### 9. Kostnadsstruktur

Kostnadsstrukturen beskriver alle kostnadene knyttet til å drive forretningsmodellen.

**To hovedtyper:**
- **Kostnadsdrevet:** Fokus på å minimere kostnader (f.eks. Ryanair)
- **Verdidrevet:** Fokus på å maksimere verdi, mindre opptatt av kostnader (f.eks. Louis Vuitton)

**Kostnadstyper:**
- Faste kostnader (husleie, lønn, forsikring)
- Variable kostnader (råvarer, frakt, provisjon)`,
    },
    {
      id: 'eb-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Business Model Canvas for Spotify',
      problem: 'Fyll ut de ni byggesteinene for Spotify.',
      solution: `**1. Kundesegmenter:** Musikkinteresserte i alle aldre, gratisbrukere og Premium-abonnenter, podcasters.

**2. Verdiforslag:** Ubegrenset tilgang til musikk og podcaster, personlige spillelister og anbefalinger, offline lytting (Premium).

**3. Kanaler:** App (iOS, Android), nettleser, smarthøyttalere, sosiale medier, digital markedsføring.

**4. Kunderelasjoner:** Automatisert (algoritmeanbefalinger), selvbetjening, fellesskap (delte spillelister).

**5. Inntektsstrømmer:** Premium-abonnement (hoveddel), annonseinntekter fra gratisbrukere.

**6. Nøkkelressurser:** Musikkbibliotek (lisensavtaler), algoritmer/teknologi, merkevare, brukerdata.

**7. Nøkkelaktiviteter:** Plattformutvikling, innholdslisensering, algoritmeutvikling, markedsføring.

**8. Nøkkelpartnere:** Musikkselskaper (Universal, Sony, Warner), artister, podcasters, annonsører, mobiloperatører.

**9. Kostnadsstruktur:** Lisensavgifter til musikkselskaper (største kostnad, ca. 70 % av inntektene), teknologiutvikling, markedsføring, lønninger.`,
    },
    {
      id: 'eb-3-2-note-1',
      type: 'note',
      title: 'Sammenhengen mellom byggesteinene',
      content: `Business Model Canvas er ikke ni uavhengige bokser — alt henger sammen:

- **Verdiforslaget** er i sentrum og knytter sammen kundene (høyre side) med driften (venstre side)
- **Kanaler** og **kunderelasjoner** kobler verdiforslaget til kundesegmentene
- **Nøkkelressurser** og **nøkkelaktiviteter** er det som trengs for å levere verdiforslaget
- **Nøkkelpartnere** støtter ressursene og aktivitetene
- **Inntektsstrømmer** kommer fra kundene, **kostnader** kommer fra drift

Når du endrer én byggestein, påvirker det ofte flere av de andre. Derfor er det viktig å se canvaset som en helhet.`,
    },
    {
      id: 'eb-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hvor mange byggesteiner har Business Model Canvas?',
        options: [
          { id: 'a', text: '5', isCorrect: false },
          { id: 'b', text: '7', isCorrect: false },
          { id: 'c', text: '9', isCorrect: true },
          { id: 'd', text: '12', isCorrect: false },
        ],
        solution: 'Business Model Canvas har ni byggesteiner: kundesegmenter, verdiforslag, kanaler, kunderelasjoner, inntektsstrømmer, nøkkelressurser, nøkkelaktiviteter, nøkkelpartnere og kostnadsstruktur.',
      },
    },
    {
      id: 'eb-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'Hvilken byggestein beskriver HVORDAN du når kundene dine?',
        options: [
          { id: 'a', text: 'Kundesegmenter', isCorrect: false },
          { id: 'b', text: 'Kanaler', isCorrect: true },
          { id: 'c', text: 'Nøkkelressurser', isCorrect: false },
          { id: 'd', text: 'Kunderelasjoner', isCorrect: false },
        ],
        solution: 'Kanaler beskriver hvordan du kommuniserer med og leverer verdiforslaget til kundene. Det inkluderer alt fra markedsføring til salg, levering og ettersalg.',
      },
    },
    {
      id: 'eb-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom nøkkelressurser og nøkkelaktiviteter med eksempler.',
        hints: ['Ressurser er det du HAR, aktiviteter er det du GJØR'],
        solution: 'Nøkkelressurser er de viktigste eiendelene bedriften trenger (det du HAR), mens nøkkelaktiviteter er de viktigste handlingene bedriften utfører (det du GJØR). Eksempel for en restaurant: Nøkkelressurser er lokale, kjøkkenutstyr, kokker og oppskrifter. Nøkkelaktiviteter er matlaging, innkjøp av råvarer, servering og markedsføring.',
      },
    },
    {
      id: 'eb-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Hva menes med en «flersidig plattform» som kundesegment? Gi to eksempler.',
        solution: 'En flersidig plattform betjener to eller flere gjensidig avhengige kundegrupper. Plattformen har verdi fordi den kobler disse gruppene. Eksempel 1: Finn.no — kobler kjøpere og selgere. Uten selgere er det ingenting å kjøpe, uten kjøpere er det ingen vits å selge. Eksempel 2: YouTube — kobler innholdsskapere (som lager videoer) med seere (som ser videoer) og annonsører (som betaler for oppmerksomhet).',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        task: 'Fyll ut et Business Model Canvas for en fiktiv eller reell bedrift du kjenner. Beskriv alle ni byggesteinene med minst to punkter per byggestein.',
        hints: [
          'Start med kundesegmentene — hvem er kundene?',
          'Gå deretter til verdiforslaget — hva tilbyr du?',
          'Jobb deg systematisk gjennom alle ni feltene',
        ],
        solution: 'Eksempel for en frisørsalong: 1) Kundesegmenter: kvinner 20-50, menn 20-40, bryllupsgjester. 2) Verdiforslag: profesjonell klipp og styling, personlig rådgivning. 3) Kanaler: fysisk salong, bestilling via nettside. 4) Kunderelasjoner: personlig assistanse, lojalitetsprogram. 5) Inntektsstrømmer: betaling per behandling, produktsalg. 6) Nøkkelressurser: frisører, salonglokale, produkter. 7) Nøkkelaktiviteter: klipping/styling, kundepleie, opplæring. 8) Nøkkelpartnere: leverandører av hårprodukter, utdanningsinstitusjoner. 9) Kostnadsstruktur: husleie, lønninger, produktinnkjøp, utstyr.',
      },
    },
    {
      id: 'eb-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'Sammenlign Business Model Canvas for to konkurrerende bedrifter (f.eks. McDonald\'s og en lokal burger-restaurant). Hvilke byggesteiner er mest forskjellige, og hva forteller det om de ulike forretningsmodellene?',
        hints: ['Tenk spesielt på kostnadsstruktur, kanaler og verdiforslag'],
        solution: 'McDonald\'s vs. lokal burger-restaurant: Kundesegment er relativt likt, men verdiforslaget er ulikt — McDonald\'s lover rask, billig og forutsigbar mat, mens den lokale restauranten kan tilby kvalitet, unike oppskrifter og personlig service. Kanalene er forskjellige: McDonald\'s bruker drive-through, app og tusenvis av filialer; den lokale har én restaurant og kanskje Instagram. Kostnadsstrukturen skiller seg mest — McDonald\'s er kostnadsdrevet med stordriftsfordeler, mens den lokale er verdidrevet med høyere råvarekostnader per enhet. Dette viser at to bedrifter i samme bransje kan ha svært ulike forretningsmodeller.',
      },
    },
    {
      id: 'eb-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-3-2-ex-7',
        number: '3.2.7',
        type: 'classic',
        task: 'Du planlegger en ungdomsbedrift som lager og selger hjemmelaget sjokolade. Fyll ut de ni byggesteinene i et Business Model Canvas for denne bedriften.',
        hints: ['Hvem vil kjøpe sjokoladen din?', 'Hva gjør din sjokolade spesiell?', 'Hvor skal du selge den?'],
        solution: '1) Kundesegmenter: medelever, foreldre, lokalt nabolag, bedrifter som vil ha firmagaver. 2) Verdiforslag: håndlaget sjokolade med unike smaker, lokalprodusert, flott innpakning for gaver. 3) Kanaler: skolens kantine, julemarked, Instagram, bestilling via nettside. 4) Kunderelasjoner: personlig kontakt, sosiale medier, smaksprøver. 5) Inntektsstrømmer: salg per plate/boks, gavepakker. 6) Nøkkelressurser: oppskrifter, kjøkkenutstyr, råvarer, arbeidskraft (elever). 7) Nøkkelaktiviteter: produksjon, innpakning, markedsføring, salg. 8) Nøkkelpartnere: leverandør av sjokoladeråvarer, skolen (tilgang til kjøkken), Ungt Entreprenørskap. 9) Kostnadsstruktur: råvarer, innpakningsmateriale, markedsføring, registreringsavgift UB.',
      },
    },
    {
      id: 'eb-3-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Business Model Canvas** har ni byggesteiner som sammen beskriver hele forretningsmodellen
- **Høyre side** handler om kunder og verdiskaping
- **Venstre side** handler om drift og effektivitet
- **Verdiforslaget** er i sentrum og knytter alt sammen
- Alle byggesteinene henger sammen — endrer du én, påvirkes ofte flere

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Business Model Canvas | Visuelt verktøy med ni byggesteiner |
| Kundesegmenter | Hvem du skaper verdi for |
| Verdiforslag | Hvilken verdi du tilbyr |
| Kanaler | Hvordan du når kundene |
| Inntektsstrømmer | Hvordan du tjener penger |
| Nøkkelressurser | Hva du trenger for å levere |
| Nøkkelaktiviteter | Hva du må gjøre |
| Nøkkelpartnere | Hvem du samarbeider med |
| Kostnadsstruktur | Hva det koster å drive |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.3: Inntektsmodeller
// ============================================================================

export const CHAPTER_ENTREBED_1_3_3: TextbookChapter = {
  id: 'entrebed-1-3-3',
  courseId: 'entrebed-1',
  chapterNumber: '3.3',
  title: 'Inntektsmodeller',
  description: 'En gjennomgang av de viktigste inntektsmodellene: direkte salg, abonnement, freemium, provisjon og annonsering.',
  estimatedMinutes: 23,
  competenceGoals: [
    'gjøre rede for ulike inntektsmodeller og vurdere hvilke som passer til en gitt forretningsidé',
  ],
  content: [
    {
      id: 'eb-3-3-intro',
      type: 'text',
      content: `## Inntektsmodeller — Hvordan tjener bedriften penger?

En av de viktigste beslutningene for enhver gründer er **hvordan** bedriften skal tjene penger. Inntektsmodellen er den delen av forretningsmodellen som beskriver hvilke inntektsstrømmer bedriften har, og hvordan kundene betaler.

Valg av inntektsmodell påvirker alt: pris, kundeopplevelse, vekststrategi og lønnsomhet. I dette kapittelet skal du lære om de vanligste inntektsmodellene og vurdere når hver av dem passer best.`,
    },
    {
      id: 'eb-3-3-def-1',
      type: 'definition',
      title: 'Inntektsmodell',
      content: `En **inntektsmodell** beskriver hvordan en bedrift genererer inntekter fra sitt verdiforslag. Den svarer på spørsmålet: **Hva er kundene villige til å betale for, og hvordan betaler de?**

Det finnes mange ulike inntektsmodeller, og en bedrift kan kombinere flere. De viktigste er:
- Direkte salg
- Abonnement
- Freemium
- Provisjon/megling
- Annonsering`,
    },
    {
      id: 'eb-3-3-text-1',
      type: 'text',
      content: `### 1. Direkte salg

Den enkleste og eldste inntektsmodellen: du lager et produkt eller en tjeneste, og selger det til kunden for en fastsatt pris.

**Kjennetegn:**
- Engangsbetalinger (per produkt/tjeneste)
- Kunden eier produktet etter kjøp
- Inntekten kommer ved salgsøyeblikket
- Kan være fysiske produkter, digitale produkter eller tjenester

**Eksempler:**
- En skobutikk selger sko
- En programvareutvikler selger en app for 49 kr
- En håndverker tar betalt per oppdrag

**Fordeler:** Enkel å forstå, rask inntekt, klar prising.
**Ulemper:** Uforutsigbare inntekter (varierer med salgsvolum), må stadig finne nye kunder.

### 2. Abonnement

Kunden betaler et fast beløp med jevne mellomrom (månedlig, årlig) for tilgang til et produkt eller en tjeneste.

**Kjennetegn:**
- Regelmessige, forutsigbare inntekter
- Kunden betaler for tilgang, ikke eierskap
- Fokus på å beholde kunder over tid (churn rate)
- Ofte skalerbart — marginalkostnaden per ny kunde er lav

**Eksempler:**
- Spotify (musikkstrømming)
- Netflix (film og serier)
- Adobe Creative Cloud (programvare)
- Avisabonnement (nettavis)

**Fordeler:** Forutsigbare inntekter, bygger lojalitet, mulig å skalere.
**Ulemper:** Må levere verdi kontinuerlig, kunder kan si opp, lang tid før investeringen tjenes inn.`,
    },
    {
      id: 'eb-3-3-text-2',
      type: 'text',
      content: `### 3. Freemium

En kombinasjon av «free» og «premium». Grunnproduktet er gratis, men kundene kan betale for ekstra funksjoner, innhold eller fordeler.

**Kjennetegn:**
- Stort antall gratisbrukere, liten andel betalende
- Gratisversjonen fungerer som markedsføring
- Premium-versjonen gir ekstra verdi
- Typisk konverteringsrate: 2-5 % av brukerne betaler

**Eksempler:**
- Spotify (gratis med reklame, Premium uten)
- Dropbox (2 GB gratis, mer plass koster penger)
- Fortnite (gratis spill, betaling for kosmetiske gjenstander)
- LinkedIn (gratis profil, Premium for ekstra verktøy)

**Fordeler:** Lav terskel for nye brukere, rask vekst, stort brukergrunnlag.
**Ulemper:** De fleste betaler aldri, høye kostnader for å betjene gratisbrukere, vanskelig å finne riktig balanse.

### 4. Provisjon/megling

Bedriften kobler to parter (kjøper og selger) og tar en prosentandel eller et fast gebyr per transaksjon.

**Kjennetegn:**
- Bedriften eier ikke produktene selv
- Inntekten er knyttet til transaksjonsvolum
- Verdi skapes ved å gjøre det enklere for partene å finne hverandre
- Plattformøkonomi

**Eksempler:**
- Airbnb (tar provisjon fra vert og gjest)
- Finn.no (gebyr for annonser)
- Vipps (gebyr per transaksjon for bedrifter)
- Eiendomsmegler (provisjon av salgssum)

**Fordeler:** Lavt lagerbehov, skalerbart, kan vokse raskt med nettverkseffekter.
**Ulemper:** Avhengig av at begge sider av markedet vokser, høye oppstartskostnader.`,
    },
    {
      id: 'eb-3-3-text-3',
      type: 'text',
      content: `### 5. Annonsering

Bedriften tilbyr gratis innhold eller tjenester til brukerne, og tjener penger på å selge annonseplass til bedrifter som vil nå disse brukerne.

**Kjennetegn:**
- Brukerne betaler ikke (eller betaler lite)
- Annonsørene er den egentlige betalende kunden
- Verdi skapes gjennom et stort og engasjert publikum
- Data om brukerne gjør annonsene mer målrettede

**Eksempler:**
- Google (gratis søk, betalt annonsering)
- Facebook/Instagram (gratis bruk, annonseinntekter)
- Gratisaviser (VG Nett — gratis artikler med annonser)
- YouTube (gratis videoer med reklame)

**Fordeler:** Gratis for brukerne gir rask vekst, kan gi svært høye inntekter med mange brukere.
**Ulemper:** Trenger enormt mange brukere for å være lønnsomt, brukere kan oppleve reklame som forstyrrende, avhengig av annonsemarkedet.

### Kombinasjoner

Mange vellykkede bedrifter kombinerer flere inntektsmodeller:
- **YouTube:** Annonsering + abonnement (YouTube Premium) + provisjon (Super Chat)
- **Amazon:** Direkte salg + provisjon (Marketplace) + abonnement (Prime) + annonsering
- **Spotify:** Freemium + abonnement + annonsering`,
    },
    {
      id: 'eb-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Velge riktig inntektsmodell',
      problem: 'Du utvikler en treningsapp. Hvilken inntektsmodell bør du velge?',
      solution: `**Alternativ 1 — Direkte salg:** Selg appen for 99 kr. Enkel modell, men vanskelig å få brukere til å betale opfront uten å prøve.

**Alternativ 2 — Freemium:** Gratis basisversjoner med 5 øvelser. Premium for 79 kr/mnd gir alle øvelser, treningsplaner og statistikk. Lav terskel for nye brukere, men du trenger mange brukere for at nok konverterer.

**Alternativ 3 — Abonnement:** Alt innhold bak betalingsmur, 79 kr/mnd. Forutsigbare inntekter, men høyere terskel for nye brukere.

**Anbefaling:** Freemium er ofte best for apper fordi det gir lav terskel, mulighet for rask vekst, og inntekter fra de mest engasjerte brukerne. Etter hvert som brukergrunnlaget vokser, kan du legge til annonsering i gratisversjonen for ekstra inntekt.`,
    },
    {
      id: 'eb-3-3-warning-1',
      type: 'warning',
      title: 'Vanlig feil: «Alt er gratis, vi tjener penger senere»',
      content: `Mange gründere undervurderer hvor vanskelig det er å tjene penger på gratistjenester. Å si «vi skaper først en stor brukerbase, så finner vi inntektsmodellen etterpå» er en risikabel strategi.

**Tommelfingerregel:** Du bør ha en klar idé om inntektsmodellen fra starten, selv om du justerer den underveis. Hvis du ikke kan forklare hvordan bedriften skal tjene penger, mangler du en viktig del av forretningsmodellen.`,
    },
    {
      id: 'eb-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hvilken inntektsmodell bruker Netflix?',
        options: [
          { id: 'a', text: 'Direkte salg', isCorrect: false },
          { id: 'b', text: 'Annonsering', isCorrect: false },
          { id: 'c', text: 'Abonnement', isCorrect: true },
          { id: 'd', text: 'Provisjon', isCorrect: false },
        ],
        solution: 'Netflix bruker en abonnementsmodell der kundene betaler et fast månedlig beløp for ubegrenset tilgang til film og serier.',
      },
    },
    {
      id: 'eb-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner freemium-modellen?',
        options: [
          { id: 'a', text: 'Alle tjenester er gratis for alle brukere', isCorrect: false },
          { id: 'b', text: 'Grunnproduktet er gratis, men ekstra funksjoner koster penger', isCorrect: true },
          { id: 'c', text: 'Kunden betaler en fast pris per produkt', isCorrect: false },
          { id: 'd', text: 'Bedriften tar provisjon fra andre selgere', isCorrect: false },
        ],
        solution: 'Freemium kombinerer «free» og «premium». Grunnproduktet er gratis, men brukere kan betale for ekstra funksjoner, mer lagring, ingen reklame osv.',
      },
    },
    {
      id: 'eb-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Forklar fordeler og ulemper ved abonnementsmodellen sammenlignet med direkte salg.',
        solution: 'Fordeler med abonnement: forutsigbare, jevne inntekter, bygger langsiktige kunderelasjoner, lettere å skalere. Ulemper: kunder kan si opp når som helst, tar lang tid å tjene inn kundeanskaffelseskostnaden, må levere verdi kontinuerlig. Fordeler med direkte salg: enklere, rask betaling, kunden eier produktet. Ulemper: uforutsigbare inntekter, må stadig skaffe nye kunder, ingen løpende relasjon.',
      },
    },
    {
      id: 'eb-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'Airbnb bruker en provisjonsmodell. Forklar hvordan Airbnb tjener penger, og drøft fordelen med at de ikke eier noen hotellrom selv.',
        solution: 'Airbnb tar provisjon fra både verter (vanligvis 3 %) og gjester (vanligvis 14 % servicegebyr) for hver bestilling. Fordelen med å ikke eie rom er at Airbnb slipper de enorme kostnadene knyttet til å kjøpe, vedlikeholde og drifte eiendommer. Det gjør at de kan skalere globalt uten store investeringer i fysiske eiendeler. Risikoen flyttes til vertene, mens Airbnb konsentrerer seg om plattformen, tryggheten og markedsføringen.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        task: 'Du planlegger å starte en nettside med matoppskrifter. Hvilken inntektsmodell (eller kombinasjon av modeller) ville du valgt? Begrunn svaret ditt.',
        hints: ['Tenk på hvem som er villig til å betale — leserne eller andre bedrifter?', 'Kan du kombinere flere modeller?'],
        solution: 'En matoppskriftside kan kombinere flere modeller: 1) Annonsering — de fleste oppskriftsider er gratis og tjener penger på annonser fra matvareprodusenter og kjøkkenutstyrselgere. 2) Freemium — gratis basisoppskrifter, men betalende medlemmer får ukentlige måltidsplaner, handlelister og videoinstruksjoner. 3) Provisjon — lenker til matbutikker der leseren kan kjøpe ingrediensene (affiliate/provisjon). Den mest realistiske tilnærmingen er annonsering som hoveddel, med freemium for de mest engasjerte brukerne.',
      },
    },
    {
      id: 'eb-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        task: 'Velg tre bedrifter du bruker jevnlig (f.eks. apper, butikker eller tjenester). Identifiser inntektsmodellen til hver av dem, og vurder om den passer godt til verdien bedriften leverer.',
        hints: ['Spør deg selv: Betaler jeg? Hvem betaler? Hvordan?'],
        solution: 'Eksempelsvar: 1) TikTok — annonsering. Brukerne betaler ikke, men annonsører betaler for å nå TikToks enorme publikum. Passer bra fordi TikTok har mange engasjerte brukere. 2) Elkjøp — direkte salg. Kunden betaler per produkt. Passer bra for elektronikk som er dyre engangskjøp. 3) Viaplay — abonnement. Månedlig betaling for sport og underholdning. Passer bra fordi innholdet oppdateres jevnlig og kundene vil ha løpende tilgang.',
      },
    },
    {
      id: 'eb-3-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Direkte salg** er den enkleste modellen — kunden betaler per produkt
- **Abonnement** gir forutsigbare inntekter gjennom løpende betaling
- **Freemium** kombinerer gratis grunnprodukt med betalte tillegg
- **Provisjon** tjener penger ved å koble kjøper og selger
- **Annonsering** tilbyr gratis innhold og selger oppmerksomhet til annonsører
- Mange bedrifter **kombinerer** flere inntektsmodeller

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Inntektsmodell | Beskrivelse av hvordan bedriften tjener penger |
| Abonnement | Løpende betaling for tilgang |
| Freemium | Gratis basis, betaling for premium |
| Provisjon | Gebyr per transaksjon mellom parter |
| Annonsering | Inntekt fra annonsører, gratis for brukere |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.4: Verdiforslag og konkurransefordeler
// ============================================================================

export const CHAPTER_ENTREBED_1_3_4: TextbookChapter = {
  id: 'entrebed-1-3-4',
  courseId: 'entrebed-1',
  chapterNumber: '3.4',
  title: 'Verdiforslag og konkurransefordeler',
  description: 'Lær hvordan du utvikler et unikt verdiforslag (UVP), differensierer deg fra konkurrentene og posisjonerer bedriften i markedet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'utvikle og presentere en forretningsmodell knyttet til en forretningsidé',
  ],
  content: [
    {
      id: 'eb-3-4-intro',
      type: 'text',
      content: `## Verdiforslag og konkurransefordeler

I et marked med mange konkurrenter holder det ikke å ha et godt produkt — du må også kunne forklare **hvorfor kunden skal velge akkurat deg**. Det handler om å utvikle et tydelig **verdiforslag** og bygge varige **konkurransefordeler**.

I dette kapittelet skal du lære:
- Hva et unikt verdiforslag (UVP) er og hvordan du lager det
- Forskjellen mellom differensiering og kostnadsledelse
- Hva posisjonering betyr og hvordan du bruker det
- Hvordan du analyserer og bygger konkurransefordeler`,
    },
    {
      id: 'eb-3-4-def-1',
      type: 'definition',
      title: 'Unikt verdiforslag (UVP)',
      content: `Et **unikt verdiforslag** (Unique Value Proposition, UVP) er en tydelig formulering som beskriver:

1. **Hvem** du hjelper (kundesegmentet)
2. **Hva** du tilbyr (produktet/tjenesten)
3. **Hvorfor** dette er bedre enn alternativene (det unike)

**Mal for UVP:**
«Vi hjelper [kundegruppe] med å [løse dette problemet] gjennom [vår unike løsning], i motsetning til [konkurrentene] som [gjør det annerledes].»

**Eksempler på sterke UVP-er:**
- **Vipps:** «Send penger til hvem som helst med bare et telefonnummer.»
- **Tesla:** «Luksus elektriske biler med lang rekkevidde og selvkjøringsteknologi.»
- **TINE:** «Norsk melk fra norske kuer på norske gårder.»`,
    },
    {
      id: 'eb-3-4-text-1',
      type: 'text',
      content: `### Differensiering — Gjør deg annerledes

**Differensiering** betyr å skille seg ut fra konkurrentene ved å tilby noe unikt som kundene verdsetter. Målet er at kundene oppfatter deg som den beste løsningen for deres behov.

**Måter å differensiere seg på:**

**1. Produktdifferensiering**
Bedre kvalitet, flere funksjoner, unikt design.
- Apple: overlegen design og brukeropplevelse
- Dyson: innovative støvsugere med ny teknologi

**2. Servicedifferensiering**
Bedre kundeservice, raskere levering, mer personlig oppfølging.
- Nordstrom: legendarisk kundeservice
- Kolonial.no (Oda): dagligvarer levert på døren med smal leveringsvindu

**3. Merkevarediferensiering**
Sterkt merkenavn som skaper tillit og status.
- Nike: «Just Do It» — handler om mer enn sko
- Friele: Norges mest kjente kaffe — tradisjon og kvalitet

**4. Prisdifferensiering**
Være billigst i markedet (kostnadsledelse).
- Ryanair: Europas billigste flybilletter
- Rema 1000: Lave priser gjennom enkle butikker`,
    },
    {
      id: 'eb-3-4-text-2',
      type: 'text',
      content: `### Posisjonering — Din plass i kundens hode

**Posisjonering** handler om hvordan du vil at kundene skal oppfatte bedriften din sammenlignet med konkurrentene. Det er ikke nok å VÆRE forskjellig — kundene må **forstå** og **huske** forskjellen.

**Posisjoneringskart:**
Et nyttig verktøy er å tegne et posisjoneringskart med to akser (for eksempel pris og kvalitet) og plassere deg selv og konkurrentene:

| | Lav pris | Høy pris |
|---|---|---|
| **Høy kvalitet** | IKEA, Rema 1000 | Apple, Tesla, Louis Vuitton |
| **Lav kvalitet** | Wish, billigbutikker | (vanskelig posisjon!) |

**Viktige prinsipper for posisjonering:**
1. **Velg en tydelig posisjon** — Ikke prøv å være alt for alle
2. **Vær konsekvent** — Posisjonen må gjenspeiles i alt du gjør (produkt, pris, kommunikasjon, service)
3. **Vær unik** — Finn en posisjon som ikke er opptatt av konkurrentene
4. **Vær troverdig** — Posisjonen må stemme med virkeligheten`,
    },
    {
      id: 'eb-3-4-text-3',
      type: 'text',
      content: `### Konkurransefordeler — Hva gjør deg vanskelig å kopiere?

En **konkurransefordel** er noe som gir bedriften din et varig fortrinn over konkurrentene. Det viktige ordet her er *varig* — en midlertidig fordel kan kopieres raskt.

**Typer varige konkurransefordeler:**

**Nettverkseffekter:** Produktet blir bedre jo flere som bruker det.
- Facebook: Jo flere venner som er der, jo mer verdi for deg
- Vipps: Jo flere som bruker det, jo mer nyttig

**Stordriftsfordeler:** Lavere kostnader per enhet når du produserer mye.
- Amazon: Kan tilby lavere priser enn småkonkurrenter
- Nortura: Stor produksjonskapasitet gir lavere enhetskostnader

**Byttekostnader:** Det er vanskelig eller dyrt for kunden å bytte.
- Apple-økosystemet: iPhone, Mac, iPad, iCloud henger sammen
- Bank: Å bytte bank krever tid og innsats

**Immaterielle rettigheter:** Patenter, varemerker, opphavsrett.
- Legemiddelindustrien: Patenter beskytter medisiner i 20 år
- Coca-Colas oppskrift: Hemmelig i over 130 år

**Merkevarelojalitet:** Kunder velger deg av vane og tillit.
- Tine, Gilde, Friele: Sterke norske merkevarer med lang historie`,
    },
    {
      id: 'eb-3-4-example-1',
      type: 'example',
      title: 'Eksempel: UVP for en ungdomsbedrift',
      problem: 'Du driver en ungdomsbedrift som lager og selger bærekraftige notatbøker laget av resirkulert papir. Formuler et unikt verdiforslag.',
      solution: `**Steg 1 — Identifiser kundegruppen:**
Miljøbevisste elever og studenter som trenger notatbøker.

**Steg 2 — Beskriv problemet:**
De fleste notatbøker er laget av nytt papir, og det finnes få bærekraftige alternativer med kult design.

**Steg 3 — Beskriv din løsning:**
Notatbøker av 100 % resirkulert papir med unike, elevdesignede omslag.

**UVP:**
«Vi lager stilige notatbøker av 100 % resirkulert papir for elever som vil ta vare på planeten — med design du faktisk har lyst til å bruke.»

Denne UVP-en forklarer hvem (elever), hva (notatbøker av resirkulert papir), og hvorfor det er unikt (bærekraftig + kult design).`,
    },
    {
      id: 'eb-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Posisjonering i kaffemarkedet',
      problem: 'Hvordan posisjonerer ulike kaffemerker seg i det norske markedet?',
      solution: `**Friele:** «Norges mest kjente kaffe.» Posisjonert som det tradisjonelle, trygge valget. Moderat pris, solid kvalitet, sterk merkevarelojalitet.

**Evergood:** Posisjonert som et kvalitetssteg over Friele, med fokus på smak og bønnekvalitet. Litt høyere pris.

**Tim Wendelboe:** Posisjonert som spesialkaffe for entusiastene. Høy pris, eksklusive bønner, nøye tilberedning. Nisjemarked.

**Nespresso:** Posisjonert som premium hjemmekaffe med bekvemmelighet. Kapselsystem skaper byttekostnader og lojalitet.

**Coop Kaffe:** Posisjonert som billigalternativet. Laveste pris, god nok kvalitet.

Hvert merke har en tydelig posisjon som appellerer til ulike kundesegmenter — fra prisbevisste til entusiaster.`,
    },
    {
      id: 'eb-3-4-tip-1',
      type: 'tip',
      title: 'Test verdiforslaget ditt',
      content: `Et godt verdiforslag bør bestå «vennetesten»: Hvis du forteller en venn hva bedriften din gjør på 10 sekunder, og vennen umiddelbart forstår **hva det er** og **hvorfor det er bra** — da har du et tydelig verdiforslag.

Hvis vennen din sier «Hæ? Hva mener du?» — er det for uklart. Jobb videre med å gjøre det enklere og tydeligere.`,
    },
    {
      id: 'eb-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva står UVP for i forretningssammenheng?',
        options: [
          { id: 'a', text: 'Universell Verdiplattform', isCorrect: false },
          { id: 'b', text: 'Unikt Verdiforslag (Unique Value Proposition)', isCorrect: true },
          { id: 'c', text: 'Underliggende Vekstpotensial', isCorrect: false },
          { id: 'd', text: 'Utviklet Verdiprosess', isCorrect: false },
        ],
        solution: 'UVP står for Unique Value Proposition, eller Unikt Verdiforslag på norsk. Det beskriver hva som gjør bedriftens tilbud unikt og verdifullt for kundene.',
      },
    },
    {
      id: 'eb-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'Hva er et eksempel på nettverkseffekt som konkurransefordel?',
        options: [
          { id: 'a', text: 'At bedriften har mange ansatte', isCorrect: false },
          { id: 'b', text: 'At produktet blir mer verdifullt jo flere som bruker det', isCorrect: true },
          { id: 'c', text: 'At bedriften har lave produksjonskostnader', isCorrect: false },
          { id: 'd', text: 'At bedriften har patent på produktet', isCorrect: false },
        ],
        solution: 'Nettverkseffekt betyr at verdien av et produkt øker jo flere som bruker det. For eksempel er Vipps mer nyttig når alle vennene dine bruker det, og Facebook er mer interessant jo flere du kjenner som er der.',
      },
    },
    {
      id: 'eb-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom produktdifferensiering og prisdifferensiering (kostnadsledelse). Gi et eksempel på hver.',
        hints: ['Den ene handler om å være unik, den andre om å være billigst'],
        solution: 'Produktdifferensiering handler om å tilby noe unikt som kundene verdsetter — bedre kvalitet, innovativt design, overlegne funksjoner. Eksempel: Apple skiller seg ut med design og brukeropplevelse. Prisdifferensiering (kostnadsledelse) handler om å tilby laveste pris ved å ha lavere kostnader enn konkurrentene. Eksempel: Ryanair tilbyr de billigste flybillettene ved å kutte all ekstra service.',
      },
    },
    {
      id: 'eb-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Hva menes med «byttekostnader» som konkurransefordel? Gi et eksempel fra din egen hverdag.',
        solution: 'Byttekostnader er de kostnadene (tid, penger, innsats) kunden opplever ved å bytte fra ett produkt til et annet. Apple-økosystemet er et godt eksempel: Hvis du har iPhone, iPad, MacBook og Apple Watch, er det svært krevende å bytte til Android/Windows fordi alle enhetene og tjenestene (iCloud, iMessage, AirDrop) henger sammen. Et hverdagseksempel: Å bytte bank krever at du endrer faste betalinger, overfører kontoer, og kanskje mister fordelaktige lånevilkår.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'Formuler et unikt verdiforslag (UVP) for en valgfri forretningsidé. Bruk malen: «Vi hjelper [kundegruppe] med å [løse problem] gjennom [unik løsning], i motsetning til [konkurrenter] som [gjør det annerledes].»',
        hints: ['Velg en enkel idé du kan relatere til', 'Vær konkret om hva som gjør løsningen din unik'],
        solution: 'Eksempel: «Vi hjelper travle foreldre med å få sunn middag på bordet på under 30 minutter gjennom ferdigpakkede måltidskasser med norske råvarer og steg-for-steg-oppskrifter, i motsetning til vanlige matbutikker der du må planlegge, handle og finne oppskrifter selv.» En god UVP er kort, konkret og tydelig på hvorfor dette er bedre enn alternativene.',
      },
    },
    {
      id: 'eb-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Velg to konkurrerende bedrifter i samme bransje (f.eks. H&M vs. Zara, eller Pepsi vs. Coca-Cola). Lag et enkelt posisjoneringskart med to akser du velger selv. Plasser begge bedriftene på kartet og forklar hvorfor du har plassert dem der.',
        hints: ['Vanlige akser: pris (lav-høy), kvalitet (lav-høy), utvalg (smalt-bredt), innovasjon (tradisjonell-innovativ)'],
        solution: 'Eksempel med H&M vs. Zara: Akser: Pris (lav til høy) og Motegrad (klassisk til trendy). H&M: Lavere pris, blanding av klassisk og trendy, bredt utvalg i mange priskategorier. Zara: Litt høyere pris, tettere på catwalken, raskere til å kopiere motetrend. H&M plasseres litt til venstre (lavere pris) og midt på mote-aksen. Zara plasseres litt til høyre (høyere pris) og høyere på mote-aksen. Begge er «fast fashion», men Zara er posisjonert som mer moteriktig, mens H&M er posisjonert som mer tilgjengelig.',
      },
    },
    {
      id: 'eb-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-3-4-ex-7',
        number: '3.4.7',
        type: 'classic',
        task: 'Analyser konkurransefordelene til enten Apple, IKEA eller Vipps. Hvilke typer varige konkurransefordeler har bedriften, og hvorfor er det vanskelig for konkurrenter å kopiere dem?',
        hints: ['Tenk på nettverkseffekter, merkevare, byttekostnader, stordriftsfordeler'],
        solution: 'Eksempel med Apple: 1) Merkevarelojalitet — Apple har en ekstremt lojal kundebase som identifiserer seg med merket. 2) Byttekostnader — Økosystemet (iPhone, Mac, iPad, Apple Watch, iCloud, AirDrop) gjør det dyrt å bytte. 3) Immaterielle rettigheter — Designpatenter og egen programvare (iOS). 4) Nettverkseffekter — iMessage og FaceTime fungerer bare mellom Apple-brukere, noe som skaper press på venner om å ha iPhone. Det er vanskelig å kopiere fordi det krever tiår å bygge tilsvarende merkevarelojalitet, og økosystemet er en selvforsterkende syklus der hvert nytt produkt gjør de andre mer verdifulle.',
      },
    },
    {
      id: 'eb-3-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Et **unikt verdiforslag** (UVP) forklarer hvorfor kunden skal velge deg
- **Differensiering** handler om å skille seg ut — gjennom produkt, service, merkevare eller pris
- **Posisjonering** er din plass i kundens hode sammenlignet med konkurrentene
- **Varige konkurransefordeler** gjør det vanskelig for andre å kopiere deg
- Nettverkseffekter, byttekostnader, stordriftsfordeler og merkevarelojalitet er eksempler på varige fordeler

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| UVP | Unikt verdiforslag — hva som gjør deg spesiell |
| Differensiering | Å skille seg ut fra konkurrentene |
| Posisjonering | Hvordan kundene oppfatter deg vs. konkurrenter |
| Konkurransefordel | Varig fortrinn som er vanskelig å kopiere |
| Nettverkseffekt | Verdi øker jo flere som bruker produktet |
| Byttekostnad | Kostnad for kunden ved å bytte leverandør |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.5: Bærekraftige forretningsmodeller
// ============================================================================

export const CHAPTER_ENTREBED_1_3_5: TextbookChapter = {
  id: 'entrebed-1-3-5',
  courseId: 'entrebed-1',
  chapterNumber: '3.5',
  title: 'Bærekraftige forretningsmodeller',
  description: 'Lær om sirkulærøkonomi, delingsøkonomi og sosialt entreprenørskap — og hvordan forretningsmodeller kan skape verdi for både bedriften og samfunnet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'drøfte verdien av bærekraftige forretningsmodeller',
  ],
  content: [
    {
      id: 'eb-3-5-intro',
      type: 'text',
      content: `## Bærekraftige forretningsmodeller

Verdens utfordringer med klimaendringer, ressursknapphet og sosial ulikhet stiller nye krav til næringslivet. Stadig flere bedrifter innser at **bærekraft** ikke bare er et ansvar — det er også en **forretningsmulighet**.

En bærekraftig forretningsmodell skaper verdi for bedriften og kundene samtidig som den tar hensyn til miljø og samfunn. I dette kapittelet skal du lære om tre sentrale tilnærminger:

- **Sirkulærøkonomi** — fra bruk-og-kast til gjenbruk og resirkulering
- **Delingsøkonomi** — deling fremfor eierskap
- **Sosialt entreprenørskap** — forretning med samfunnsformål`,
    },
    {
      id: 'eb-3-5-def-1',
      type: 'definition',
      title: 'Bærekraftig forretningsmodell',
      content: `En **bærekraftig forretningsmodell** er en forretningsmodell som skaper økonomisk verdi for bedriften, samtidig som den bidrar positivt til miljø og/eller samfunn.

Den bygger på **FNs bærekraftsmål** og ideen om **trippel bunnlinje**:
1. **Økonomisk bærekraft** — Bedriften er lønnsom
2. **Miljømessig bærekraft** — Bedriften minimerer negativ påvirkning på miljøet
3. **Sosial bærekraft** — Bedriften bidrar positivt til mennesker og samfunn

En bærekraftig forretningsmodell ser ikke på bærekraft som en kostnad, men som en **integrert del av verdiskapingen**.`,
    },
    {
      id: 'eb-3-5-text-1',
      type: 'text',
      content: `### Sirkulærøkonomi — Fra lineær til sirkulær

**Tradisjonell (lineær) økonomi:** Ta ut råvarer → produser → bruk → kast. Denne modellen fører til ressurssløsing og forurensning.

**Sirkulærøkonomi:** Produkter og materialer holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering.

**Prinsipper i sirkulærøkonomien:**
1. **Design for lang levetid** — Produkter som varer, kan repareres og oppgraderes
2. **Bruk som tjeneste** — Kunden leier produktet i stedet for å eie det
3. **Gjenbruk og resirkulering** — Materialer får nytt liv etter bruk
4. **Minimer avfall** — Det som er avfall for én, er ressurs for en annen

**Norske eksempler:**
- **Tise:** Norsk plattform for kjøp og salg av brukte klær
- **Fjong:** Utleie av designerklær — bruk fremfor eierskap
- **Tomra:** Norsk verdenssleder i panteløsninger og resirkulering
- **IKEA:** Kjøper tilbake brukte møbler for videresalg`,
    },
    {
      id: 'eb-3-5-text-2',
      type: 'text',
      content: `### Delingsøkonomi — Del fremfor å eie

**Delingsøkonomien** er basert på ideen om at det er mer effektivt å **dele** ressurser enn at alle eier sine egne. Teknologi og plattformer gjør det mulig å koble de som har noe med de som trenger noe.

**Kjennetegn:**
- Utnytter ledig kapasitet (tomme rom, ledige biler, ubrukt utstyr)
- Plattformbasert — teknologi kobler tilbud og etterspørsel
- Brukerne er ofte både kjøpere og selgere
- Lavere pris enn tradisjonelle alternativer

**Eksempler på delingsøkonomi:**
- **Airbnb:** Del hjemmet ditt med reisende
- **Uber:** Del bilkjøring
- **Bilkollektivet:** Del bil med andre i nabolaget
- **Hygglo:** Lei ut ting du ikke bruker (verktøy, sportsutstyr, etc.)

**Fordeler:**
- Bedre utnyttelse av ressurser (en drill brukes i snitt bare 13 minutter i sitt liv!)
- Lavere kostnader for brukerne
- Miljøvennlig — færre ting produseres
- Skaper inntekt av ting som ellers står ubrukt

**Utfordringer:**
- Regulering og skatteregler henger etter
- Kvalitetssikring og trygghet
- Kan undergrave tradisjonelle næringer
- Arbeidstakerrettigheter i plattformøkonomien`,
    },
    {
      id: 'eb-3-5-text-3',
      type: 'text',
      content: `### Sosialt entreprenørskap — Forretning med formål

**Sosialt entreprenørskap** handler om å bruke forretningsmessige virkemidler for å løse sosiale eller miljømessige problemer. Overskuddet reinvesteres i formålet, ikke bare til aksjonærene.

**Kjennetegn:**
- Hovedformålet er å løse et samfunnsproblem
- Bruker forretningsmodell for å være bærekraftig (ikke avhengig av donasjoner)
- Kombinerer idealisme med business
- Måler suksess i samfunnsnytte, ikke bare profitt

**Eksempler:**
- **TOMS Shoes:** For hvert par sko solgt, doneres et par til barn i nød
- **Fretex:** Gjenbruksbutikker som gir arbeidstrening til vanskeligstilte
- **Grameen Bank:** Mikrolån til fattige kvinner i Bangladesh (startet av Nobelprisvinner Muhammad Yunus)
- **Too Good To Go:** App som redder mat fra å kastes ved å selge den billig

**Sosiale entreprenører i Norge:**
- **Lyk-z & døtre:** Hjelper unge som sliter med å fullføre skole
- **Gladiator GT:** Treningsprogram for ungdom utenfor skole og arbeid
- **Unicus:** Ansetter mennesker med Aspergers syndrom i IT-jobber`,
    },
    {
      id: 'eb-3-5-note-1',
      type: 'note',
      title: 'Bærekraft som konkurransefordel',
      content: `Stadig flere kunder, spesielt unge, velger bedrifter som tar bærekraft på alvor. Ifølge undersøkelser er over 70 % av norske forbrukere villige til å betale mer for bærekraftige produkter.

**Bærekraft kan gi:**
- Nye kundegrupper som verdsetter ansvarlig forretning
- Lavere kostnader gjennom effektiv ressursbruk
- Bedre omdømme og sterkere merkevare
- Tilgang til grønn finansiering og offentlige støtteordninger
- Motiverte ansatte som ønsker å jobbe for noe meningsfylt

Men det er viktig å være **ekte**: Kunder gjennomskuer raskt bedrifter som driver **grønnvasking** — å late som man er bærekraftig uten å faktisk gjøre endringer.`,
    },
    {
      id: 'eb-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Too Good To Go',
      problem: 'Hvordan fungerer forretningsmodellen til Too Good To Go?',
      solution: `**Problemet:** Hvert år kastes enorme mengder mat i Norge og verden. Butikker, restauranter og bakerier kaster mat som er helt fin, men som ikke ble solgt.

**Løsningen:** Too Good To Go er en app der butikker og restauranter selger overskuddsmat i «magiske poser» til redusert pris (f.eks. mat verdt 150 kr selges for 49 kr).

**Forretningsmodellen (Business Model Canvas):**
- **Kundesegmenter:** Prisbevisste og miljøbevisste forbrukere + butikker/restauranter med overskuddsmat
- **Verdiforslag:** Reduser matsvinn OG spar penger (vinn-vinn)
- **Inntektsmodell:** Provisjon per solgt pose
- **Kanaler:** App (iOS/Android)
- **Nøkkelpartnere:** Dagligvarebutikker, bakere, restauranter

**Resultat:** Millioner av måltider reddet, butikkene tjener litt ekstra, kunden sparer penger, og planeten vinner. Et perfekt eksempel på en bærekraftig forretningsmodell.`,
    },
    {
      id: 'eb-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Sirkulær ungdomsbedrift',
      problem: 'Hvordan kan en ungdomsbedrift bygge på sirkulærøkonomi?',
      solution: `**Idé:** «ReDesign UB» — en ungdomsbedrift som lager nye produkter av kasserte materialer.

**Konsept:** Samle inn kasserte jeans fra elever og foreldre, og sy om til vesker, pennal og mobiltilbehør.

**Sirkulære prinsipper:**
1. Materialet er gratis (kasserte klær)
2. Avfall blir til noe verdifullt
3. Ingen nye råvarer brukes
4. Hvert produkt er unikt

**Forretningsmodellen:**
- Lave råvarekostnader (gratis materialer)
- Høy verdi for kundene (unike, bærekraftige produkter)
- Sterk historie å fortelle (miljøprofil)
- Appellerer til miljøbevisste kunder

**Utfordringer:**
- Tidkrevende produksjon (håndlaget)
- Varierende kvalitet på materialer
- Skalering kan være vanskelig`,
    },
    {
      id: 'eb-3-5-warning-1',
      type: 'warning',
      title: 'Grønnvasking',
      content: `**Grønnvasking** (greenwashing) betyr at en bedrift gir inntrykk av å være mer miljøvennlig enn den faktisk er. Dette kan være misvisende markedsføring, vage påstander eller fokus på ett «grønt» element mens resten av virksomheten er skadelig.

**Eksempler på grønnvasking:**
- En fossilt drevet energibedrift som lager reklamekampanjer med grønne farger og naturbilder
- En klesbutikk som lager en liten «bærekraftig kolleksjon» mens resten av produksjonen er uforsvarlig
- Produkter merket «naturlig» eller «grønt» uten dokumentasjon

**Slik unngår du grønnvasking:**
- Vær ærlig om hva du gjør og ikke gjør
- Dokumenter påstandene dine med tall og fakta
- Bærekraft bør gjelde hele forretningsmodellen, ikke bare markedsføringen`,
    },
    {
      id: 'eb-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en sirkulær økonomi?',
        options: [
          { id: 'a', text: 'Produkter lages, brukes og kastes', isCorrect: false },
          { id: 'b', text: 'Produkter og materialer holdes i bruk så lenge som mulig gjennom gjenbruk og resirkulering', isCorrect: true },
          { id: 'c', text: 'Bare digitale produkter er tillatt', isCorrect: false },
          { id: 'd', text: 'All produksjon foregår i Norge', isCorrect: false },
        ],
        solution: 'Sirkulærøkonomi handler om å holde produkter og materialer i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering, i motsetning til den lineære modellen «ta, lag, bruk, kast».',
      },
    },
    {
      id: 'eb-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hva er et kjennetegn på sosialt entreprenørskap?',
        options: [
          { id: 'a', text: 'Hovedformålet er å maksimere profitt til aksjonærene', isCorrect: false },
          { id: 'b', text: 'Bedriften er helt avhengig av donasjoner for å overleve', isCorrect: false },
          { id: 'c', text: 'Forretningsmessige virkemidler brukes for å løse sosiale eller miljømessige problemer', isCorrect: true },
          { id: 'd', text: 'Bedriften driver bare med veldedighet uten inntekter', isCorrect: false },
        ],
        solution: 'Sosialt entreprenørskap kombinerer forretningsdrift med et sosialt formål. Bedriften bruker en forretningsmodell for å være økonomisk bærekraftig, men hovedmålet er å løse et samfunnsproblem.',
      },
    },
    {
      id: 'eb-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Forklar hva delingsøkonomi er, og gi to eksempler — ett fra Norge og ett internasjonalt.',
        hints: ['Tenk på bedrifter der du deler eller leier i stedet for å eie'],
        solution: 'Delingsøkonomi handler om å dele ressurser i stedet for at alle eier sine egne, vanligvis gjennom digitale plattformer. Norsk eksempel: Bilkollektivet — medlemmer deler biler i stedet for at alle eier sin egen. Internasjonalt eksempel: Airbnb — folk leier ut ledig rom eller bolig til reisende. Delingsøkonomien utnytter ledig kapasitet og reduserer behovet for at alle eier alt selv.',
      },
    },
    {
      id: 'eb-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Hva er grønnvasking? Gi et eksempel og forklar hvorfor det er problematisk.',
        solution: 'Grønnvasking er når en bedrift gir inntrykk av å være mer miljøvennlig enn den faktisk er, gjennom misvisende markedsføring eller vage påstander. Eksempel: Et oljeselskap som bruker millioner på reklamekampanjer om «grønn energi» mens over 90 % av virksomheten fortsatt er fossilt drevet. Det er problematisk fordi det villeder forbrukere, undergraver tilliten til genuint bærekraftige bedrifter, og bremser den reelle omstillingen til grønnere løsninger.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'eb-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Drøft fordeler og utfordringer ved delingsøkonomien. Er delingsøkonomien alltid bærekraftig? Begrunn svaret ditt med eksempler.',
        hints: ['Tenk på både miljø, økonomi og sosiale forhold', 'Er Uber bærekraftig for sjåførene?'],
        solution: 'Fordeler: Bedre utnyttelse av ressurser (en bil står stille 95 % av tiden), lavere kostnader for brukerne, mindre produksjon = bedre for miljøet. Utfordringer: Arbeidstakerrettigheter — sjåfører i Uber har ofte ingen fast lønn, pensjon eller sykepenger. Regulering — delingsøkonomien opererer ofte i gråsoner der lovverket ikke har fulgt med. Kvalitet — vanskelig å garantere standard (et Airbnb-opphold varierer enormt). Delingsøkonomien er ikke alltid bærekraftig: Airbnb kan for eksempel drive opp boligprisene i populære byer og presse ut fastboende. Det handler om hvordan modellen brukes og reguleres.',
      },
    },
    {
      id: 'eb-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        task: 'Utvikle en forretningsidé basert på enten sirkulærøkonomi, delingsøkonomi eller sosialt entreprenørskap. Beskriv: 1) Hvilket problem løser du? 2) Hvem er kundene? 3) Hva er verdiforslaget? 4) Hvordan tjener bedriften penger? 5) Hvorfor er modellen bærekraftig?',
        hints: ['Start med et problem du ser i hverdagen din', 'Tenk på ting som kastes, står ubrukt eller folk som trenger hjelp'],
        solution: 'Eksempel — sirkulær forretningsmodell: 1) Problem: Tusenvis av brukbare sykler kastes hvert år i norske byer. 2) Kunder: Studenter og unge voksne som trenger rimelig transport. 3) Verdiforslag: Oppussede brukte sykler til halve prisen av nye, med 1 års garanti. 4) Inntekt: Salg av oppussede sykler + reparasjonsverksted. 5) Bærekraftig fordi: Reduserer avfall, forlenger sykkelens levetid, gjør sykling tilgjengelig for flere, og reduserer behovet for nyproduksjon.',
      },
    },
    {
      id: 'eb-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-3-5-ex-7',
        number: '3.5.7',
        type: 'classic',
        task: 'Vurder om din egen ungdomsbedrift (eller en fiktiv ungdomsbedrift) kan gjøres mer bærekraftig. Foreslå minst tre konkrete tiltak og forklar hvordan de påvirker forretningsmodellen.',
        hints: ['Tenk på materialer, produksjon, emballasje, transport og sosiale forhold', 'Bærekraft kan også handle om inkludering og rettferdighet'],
        solution: 'Eksempel for en ungdomsbedrift som selger hjemmelaget sjokolade: 1) Bruk Fairtrade-kakao — sikrer rettferdige vilkår for kakaobønder (sosial bærekraft). Påvirker kostnadsstrukturen (litt dyrere), men styrker verdiforslaget. 2) Bruk resirkulert eller plantebasert emballasje — reduserer avfall (miljømessig bærekraft). Kan markedsføres som et pluss. 3) Doner 10 % av overskuddet til en lokal ungdomsorganisasjon — gir bedriften et sosialt formål (sosialt entreprenørskap). Styrker merkevaren og historien. Disse tiltakene gjør bedriften mer bærekraftig, men også mer attraktiv for bevisste kunder.',
      },
    },
    {
      id: 'eb-3-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraftige forretningsmodeller** skaper verdi for bedrift, miljø og samfunn
- **Sirkulærøkonomi** handler om å holde materialer i bruk gjennom gjenbruk og resirkulering
- **Delingsøkonomi** utnytter ledig kapasitet gjennom deling fremfor eierskap
- **Sosialt entreprenørskap** bruker forretningsmodeller for å løse samfunnsproblemer
- **Grønnvasking** er uærlig markedsføring av bærekraft
- Bærekraft kan være en **konkurransefordel** som tiltrekker kunder og ansatte

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bærekraftig forretningsmodell | Lønnsom bedrift som tar hensyn til miljø og samfunn |
| Sirkulærøkonomi | Gjenbruk og resirkulering fremfor «bruk og kast» |
| Delingsøkonomi | Deling av ressurser gjennom plattformer |
| Sosialt entreprenørskap | Forretningsdrift med sosialt formål |
| Trippel bunnlinje | Økonomi + miljø + sosiale forhold |
| Grønnvasking | Å gi falskt inntrykk av bærekraft |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const ENTREBED_1_DEL3_CHAPTERS = [
  CHAPTER_ENTREBED_1_3_1,
  CHAPTER_ENTREBED_1_3_2,
  CHAPTER_ENTREBED_1_3_3,
  CHAPTER_ENTREBED_1_3_4,
  CHAPTER_ENTREBED_1_3_5,
];

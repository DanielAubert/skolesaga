/**
 * Salg, service og reiseliv VG1 - Del 4: Digital handel og teknologi
 * Kapittel 4.1-4.6
 *
 * Dekker LK20 kompetansemål:
 * - utforske hvordan teknologi og endringer i forbrukeratferd påvirker salg og servicerollen, og presentere tiltak og markedsføringsstrategier
 * - lage en markedsføringskampanje og gjøre rede for valg av virkemidler
 * - kjenne til og ta i bruk gjeldende regelverk for markedsføring og salg
 * - analysere forbrukeratferd i sammenheng med segmentering av målgrupper
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Introduksjon til digital handel
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4_1: TextbookChapter = {
  id: 'salg-service-vg1-4-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '4.1',
  title: 'Introduksjon til digital handel',
  description: 'En innføring i digital handel og hvordan teknologi endrer måten vi kjøper og selger varer og tjenester. Du lærer om utviklingen fra tradisjonell handel til nettbutikker og digitale plattformer.',
  estimatedMinutes: 35,
  competenceGoals: ['utforske hvordan teknologi og endringer i forbrukeratferd påvirker salg og servicerollen, og presentere tiltak og markedsføringsstrategier'],
  content: [
    {
      id: 'salg-service-vg1-4-1-intro',
      type: 'text',
      content: `## Handel i den digitale tidsalderen

Internett har revolusjonert måten vi handler på. Fra å være begrenset til lokale butikker, kan vi nå kjøpe fra hele verden med noen få klikk. For bedrifter betyr dette både nye muligheter og nye utfordringer.

I dette kapittelet skal du lære:
- Hva digital handel (e-handel) er
- Utviklingen fra tradisjonell til digital handel
- Ulike former for netthandel
- Hvordan digitaliseringen påvirker servicerollen`,
    },
    {
      id: 'salg-service-vg1-4-1-def-1',
      type: 'definition',
      title: 'E-handel (digital handel)',
      content: `**E-handel** (elektronisk handel) er kjøp og salg av varer og tjenester over internett. Det inkluderer nettbutikker, digitale markedsplasser, abonnementstjenester og alle andre former for kommersielle transaksjoner som foregår digitalt.`,
    },
    {
      id: 'salg-service-vg1-4-1-text-1',
      type: 'text',
      content: `### Utviklingen av digital handel

**1990-tallet: De første nettbutikkene**
- Amazon startet som nettbokhandel (1994)
- eBay lanserte nettauksjon (1995)
- Skeptiske forbrukere, lite utbredt

**2000-tallet: Vekst og tillit**
- Bredbånd blir vanlig
- Sikker betaling utvikles
- Flere velger netthandel

**2010-tallet: Mobil handel**
- Smarttelefoner gjør handel portabel
- Sosiale medier blir salgskanal
- Apps for shopping

**2020-tallet: Pandemi-boost og omnikanal**
- COVID-19 akselererte netthandel dramatisk
- Click-and-collect og hjemlevering
- Integrering av fysisk og digital handel`,
    },
    {
      id: 'salg-service-vg1-4-1-text-2',
      type: 'text',
      content: `### Former for digital handel

**B2C (Business to Consumer)**
- Bedrifter som selger til privatpersoner
- Eksempler: Zalando, Komplett, Elkjøp

**B2B (Business to Business)**
- Bedrifter som selger til andre bedrifter
- Eksempler: Grossister, leverandørportaler

**C2C (Consumer to Consumer)**
- Privatpersoner som selger til hverandre
- Eksempler: Finn.no, Tise, eBay

**D2C (Direct to Consumer)**
- Produsenter som selger direkte til forbrukere
- Hopper over mellommenn
- Eksempler: Tesla, Warby Parker

**Markedsplasser**
- Plattformer som kobler kjøpere og selgere
- Eksempler: Amazon Marketplace, Etsy, Airbnb`,
    },
    {
      id: 'salg-service-vg1-4-1-text-3',
      type: 'text',
      content: `### Nettbutikkens elementer

**Brukeropplevelse:**
- Enkel navigasjon og søk
- Tydelige produktbilder og beskrivelser
- Mobiloptimalisert design
- Rask lastetid

**Funksjonalitet:**
- Handlekurv og ønskeliste
- Produktanbefalinger
- Anmeldelser og vurderinger
- Lagerstatus og leveringsinformasjon

**Betaling og sikkerhet:**
- Flere betalingsalternativer
- Sikker betaling (SSL/https)
- Tydelige priser inkl. frakt

**Kundeservice:**
- Kontaktinformasjon
- FAQ og hjelpesenter
- Chat eller chatbot
- Ordresporing`,
    },
    {
      id: 'salg-service-vg1-4-1-text-4',
      type: 'text',
      content: `### Digitaliseringens påvirkning på servicerollen

**Nye kompetansekrav:**
- Teknologiforståelse
- Digital kommunikasjon
- Multikanal-tenkning
- Dataforståelse

**Endrede arbeidsoppgaver:**
- Mindre kassearbeid, mer rådgivning
- Håndtering av click-and-collect
- Kundekontakt på flere kanaler
- Samarbeid mellom nett og butikk

**Nye roller:**
- Nettbutikkansvarlig
- Kundeservicemedarbeider (chat/e-post)
- Lagermedarbeider for nettordrer
- Sosiale medier-ansvarlig

**Menneskelig service er fortsatt viktig:**
- Kompleks rådgivning
- Emosjonell støtte ved klager
- Opplevelser som teknologi ikke kan gi
- Personlig tilpasning`,
    },
    {
      id: 'salg-service-vg1-4-1-tip-1',
      type: 'tip',
      title: 'Omnikanal er fremtiden',
      content: `De beste virksomhetene integrerer fysiske butikker og nettbutikk sømløst. Kunden kan undersøke på nett og kjøpe i butikk, eller omvendt. De kan returnere nettkjøp i butikk. Dette kalles omnikanal - en helhetlig kundeopplevelse på tvers av kanaler.`,
    },
    {
      id: 'salg-service-vg1-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Fra fysisk til omnikanal',
      problem: 'En klesbutikk vil tilpasse seg den digitale utviklingen.',
      solution: `**Før (kun fysisk butikk):**
- Kunder må komme til butikken
- Begrenset til lokale kunder
- Åpningstider begrenser salg
- Ingen kontakt utenom butikkbesøk

**Etter (omnikanal):**
- Nettbutikk med hele sortimentet
- Click-and-collect: bestill på nett, hent i butikk
- Butikkansatte kan sjekke lagerstatus på nett
- Felles kundeklubb på tvers av kanaler
- Instagram-shopping og sosiale medier
- Apper med personlige tilbud
- Chat-support og e-postservice
- Hjemlevering eller posthenting

**Resultater:**
- Flere kunder (geografisk rekkevidde)
- Høyere omsetning (flere kontaktpunkter)
- Bedre kundedata (sporing på tvers)
- Mer effektiv drift (kombinert lager)`,
    },
    {
      id: 'salg-service-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva står B2C for i e-handelssammenheng?',
        options: [
          { id: 'a', text: 'Brand to Consumer', isCorrect: false },
          { id: 'b', text: 'Business to Customer', isCorrect: false },
          { id: 'c', text: 'Business to Consumer', isCorrect: true },
          { id: 'd', text: 'Buyer to Client', isCorrect: false },
        ],
        solution: 'B2C står for Business to Consumer - bedrifter som selger til privatpersoner/forbrukere.',
      },
    },
    {
      id: 'salg-service-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        task: 'Hva menes med omnikanal?',
        hints: ['Tenk på kundens opplevelse på tvers av kanaler'],
        solution: 'Omnikanal betyr at alle salgskanaler (fysisk butikk, nettbutikk, app, sosiale medier) er integrert og gir en sømløs kundeopplevelse. Kunden kan starte på én kanal og fullføre på en annen, og får samme informasjon og service overalt. Eksempel: Finne produkt på Instagram, sjekke lagerstatus på nett, kjøpe via app, hente i butikk, returnere via post.',
      },
    },
    {
      id: 'salg-service-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        task: 'Gi eksempler på virksomheter innen hver av disse e-handelstypene:',
        subTasks: [
          {
            label: 'a',
            task: 'B2C (bedrift til forbruker)',
            solution: 'Zalando, Komplett, IKEA nettbutikk, Netflix, Spotify',
          },
          {
            label: 'b',
            task: 'C2C (forbruker til forbruker)',
            solution: 'Finn.no, Tise, eBay, Vipps-kjøp mellom privatpersoner',
          },
          {
            label: 'c',
            task: 'Markedsplass',
            solution: 'Amazon (både butikk og markedsplass), Airbnb, Uber, Foodora',
          },
        ],
        solution: 'E-handel finnes i mange former avhengig av hvem som selger til hvem.',
      },
    },
    {
      id: 'salg-service-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        task: 'Hvordan har digitaliseringen endret kravene til servicemedarbeidere?',
        solution: 'Digitaliseringen krever at servicemedarbeidere: 1) Har teknologiforståelse - kan bruke digitale verktøy og systemer. 2) Kan kommunisere digitalt - chat, e-post, sosiale medier. 3) Tenker omnikanal - forstår kundens reise på tvers av kanaler. 4) Fokuserer mer på rådgivning enn transaksjoner - det teknologien ikke kan gjøre. 5) Kan bruke data - forstår kundeinformasjon fra systemene. 6) Er fleksible - tilpasser seg stadig nye verktøy og løsninger.',
      },
    },
    {
      id: 'salg-service-vg1-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **E-handel** er kjøp og salg over internett
- **Ulike former** inkluderer B2C, B2B, C2C og markedsplasser
- **Omnikanal** integrerer fysisk og digital handel
- **Servicerollen endres** med nye kompetansekrav og oppgaver

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| E-handel | Elektronisk handel over internett |
| B2C | Bedrift til forbruker |
| Omnikanal | Sømløs opplevelse på tvers av kanaler |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Sosiale medier som markedskanal
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4_2: TextbookChapter = {
  id: 'salg-service-vg1-4-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '4.2',
  title: 'Sosiale medier som markedskanal',
  description: 'Hvordan virksomheter bruker sosiale medier til markedsføring, kundeservice og merkevarebygging. Du lærer om ulike plattformer, innholdsstrategi og hvordan måle effekten av sosiale medier.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lage en markedsføringskampanje og gjøre rede for valg av virkemidler',
    'utforske hvordan teknologi og endringer i forbrukeratferd påvirker salg og servicerollen, og presentere tiltak og markedsføringsstrategier',
  ],
  content: [
    {
      id: 'salg-service-vg1-4-2-intro',
      type: 'text',
      content: `## Der kundene er

Nordmenn bruker i gjennomsnitt over to timer daglig på sosiale medier. For virksomheter er dette en unik mulighet til å nå kunder der de allerede er - ikke med forstyrrende reklame, men med innhold de faktisk vil se.

I dette kapittelet skal du lære:
- De viktigste sosiale medier-plattformene
- Hvordan lage innholdsstrategi
- Organisk vs. betalt innhold
- Måling av resultater på sosiale medier`,
    },
    {
      id: 'salg-service-vg1-4-2-def-1',
      type: 'definition',
      title: 'Sosiale medier-markedsføring',
      content: `**Sosiale medier-markedsføring** (SMM) er bruk av sosiale plattformer for å promotere produkter eller tjenester, bygge merkevare, engasjere kunder og drive trafikk til nettsted eller butikk. Det inkluderer både organisk (gratis) og betalt innhold.`,
    },
    {
      id: 'salg-service-vg1-4-2-text-1',
      type: 'text',
      content: `### De viktigste plattformene

**Facebook**
- Bredest aldersgruppe (25-65+)
- Grupper, events, marketplace
- Gode annonsemuligheter
- Brukes for: Informasjon, fellesskap, events

**Instagram**
- Yngre målgruppe (18-40)
- Visuelt fokus: bilder og video
- Stories, Reels, Shopping
- Brukes for: Inspirasjon, merkevare, produkt-visning

**TikTok**
- Yngst målgruppe (13-30)
- Kortvideoer, trender, underholdning
- Høyt engasjement, viral spredning
- Brukes for: Kreativt innhold, nå unge

**LinkedIn**
- Profesjonelt nettverk
- B2B-markedsføring
- Rekruttering og employer branding
- Brukes for: Faglig innhold, bedriftsnyheter

**Snapchat**
- Unge brukere (13-25)
- Efemært innhold (forsvinner)
- Filtre og AR-opplevelser
- Brukes for: Personlig, lekent innhold`,
    },
    {
      id: 'salg-service-vg1-4-2-text-2',
      type: 'text',
      content: `### Innholdsstrategi

**Kjenn målgruppen:**
- Hvilke plattformer bruker de?
- Hva engasjerer dem?
- Når er de aktive?

**Innholdstyper:**

*Underholdende:*
- Humor, memes, trender
- Skaper engasjement og delinger

*Inspirerende:*
- Før/etter, transformasjoner
- Livsstil og drømmer

*Lærerikt:*
- Tips, how-to, fakta
- Posisjonerer som ekspert

*Overbevisende:*
- Produktdemonstrasjoner
- Kundeomtaler
- Tilbud og kampanjer

**Innholdskalender:**
- Planlegg innhold i forveien
- Balansér innholdstyper
- Tilpass til sesong og hendelser
- Men vær fleksibel for aktualitet`,
    },
    {
      id: 'salg-service-vg1-4-2-text-3',
      type: 'text',
      content: `### Organisk vs. betalt

**Organisk innhold (gratis):**
- Poster du publiserer uten å betale
- Når primært eksisterende følgere
- Algoritmene begrenser rekkevidden
- Viktig for merkevarebygging og lojalitet

**Betalt innhold (annonser):**
- Betaler for å nå flere
- Målretting basert på demografi, interesser, atferd
- Måle resultater nøyaktig
- Viktig for rekkevidde og konvertering

**Kombinasjonen:**
- Organisk bygger merkevaren og fellesskapet
- Betalt løfter det beste innholdet til flere
- Test organisk, boost det som fungerer
- Retargeting: Vis annonser til de som har engasjert seg`,
    },
    {
      id: 'salg-service-vg1-4-2-text-4',
      type: 'text',
      content: `### Måling på sosiale medier

**Rekkevidde-metrikker:**
- Følgere: Antall som følger kontoen
- Rekkevidde: Antall unike som ser innholdet
- Visninger: Antall ganger innholdet vises

**Engasjement-metrikker:**
- Likes, kommentarer, delinger
- Engasjementsrate: Engasjement / Rekkevidde
- Klikk til nettside

**Konverterings-metrikker:**
- Leads fra sosiale medier
- Salg som kan spores til SoMe
- Kostnad per konvertering

**Verktøy:**
- Plattformenes egne analyseverktøy
- Meta Business Suite, LinkedIn Analytics
- Tredjepartsverktøy (Hootsuite, Later, Sprout Social)`,
    },
    {
      id: 'salg-service-vg1-4-2-tip-1',
      type: 'tip',
      title: 'Engasjement over følgere',
      content: `Det er bedre å ha 1000 engasjerte følgere enn 10 000 passive. Fokuser på å skape innhold som får folk til å like, kommentere og dele - ikke bare rulle videre. Still spørsmål, vær personlig, svar på kommentarer.`,
    },
    {
      id: 'salg-service-vg1-4-2-example-1',
      type: 'example',
      title: 'Eksempel: SoMe-strategi for en restaurant',
      problem: 'En restaurant vil bruke sosiale medier til å tiltrekke flere gjester.',
      solution: `**Plattformvalg:**
- Instagram (hovedkanal): Visuelt, food-content, Stories
- Facebook: Events, informasjon, eldre målgruppe
- TikTok: Kreativt innhold, bak kulissene

**Innholdsplan (ukentlig):**
- Mandag: "Ukens rett" med appetittvekkende bilde
- Onsdag: "Bak kulissene" med kokk eller ansatt
- Fredag: Story med helge-stemning
- Ved behov: Events, sesong-menyer, gjesteanmeldelser

**Innholdstype-fordeling:**
- 40% Inspirerende (vakre matretter)
- 30% Bak kulissene (mennesker, prosess)
- 20% Informativt (meny, åpningstider, events)
- 10% Direkte salg (tilbud, oppfordring til booking)

**Betalt:**
- Boost populære poster til lokalt publikum
- Annonsere events og spesialtilbud
- Retargete de som har besøkt nettsiden

**Måling:**
- Engasjementsrate per post
- Klikk til reservasjon
- Nye følgere per måned
- Spørre gjester "hvordan hørte du om oss?"`,
    },
    {
      id: 'salg-service-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hvilken plattform er best egnet for B2B-markedsføring?',
        options: [
          { id: 'a', text: 'TikTok', isCorrect: false },
          { id: 'b', text: 'Snapchat', isCorrect: false },
          { id: 'c', text: 'LinkedIn', isCorrect: true },
          { id: 'd', text: 'Pinterest', isCorrect: false },
        ],
        solution: 'LinkedIn er den beste plattformen for B2B-markedsføring fordi den er rettet mot profesjonelle og bedrifter. Her kan man dele faglig innhold, nå beslutningstakere og bygge profesjonelt nettverk.',
      },
    },
    {
      id: 'salg-service-vg1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom organisk og betalt innhold på sosiale medier?',
        hints: ['Tenk på rekkevidde og kostnad'],
        solution: 'Organisk innhold publiseres gratis og når primært eksisterende følgere - rekkevidden er begrenset av algoritmene. Betalt innhold er annonser der du betaler for å nå flere, med mulighet for målretting basert på demografi og interesser. Organisk bygger merkevaren, betalt skalerer rekkevidden.',
      },
    },
    {
      id: 'salg-service-vg1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        task: 'Hvilke plattformer ville du prioritert for følgende virksomheter, og hvorfor?',
        subTasks: [
          {
            label: 'a',
            task: 'Et advokatfirma',
            solution: 'LinkedIn: Profesjonelt publikum, B2B-kunder, mulighet til å vise ekspertise gjennom fagartikler. Eventuelt Facebook for lokalt omdømme.',
          },
          {
            label: 'b',
            task: 'En klesbutikk for ungdom',
            solution: 'Instagram og TikTok: Unge målgruppe, visuelt produkt, trendbasert innhold. Stories og Reels for å vise nye kolleksjoner.',
          },
          {
            label: 'c',
            task: 'En familiebarnehage',
            solution: 'Facebook: Foreldre i 25-40-årene er aktive her, grupper og events, lokal tilknytning. Eventuelt Instagram for å vise hverdagen.',
          },
        ],
        solution: 'Valg av plattform avhenger av hvor målgruppen er og hva slags innhold som passer virksomheten.',
      },
    },
    {
      id: 'salg-service-vg1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        task: 'Lag en enkel innholdskalender for én uke for en virksomhet du velger.',
        solution: 'Eksempel for en treningsstudio: Mandag: Motivasjonssitat + bilde fra morgentrening (inspirerende). Tirsdag: "Dagens øvelse" med kort video (lærerikt). Onsdag: Story med "spørsmål fra medlemmer" (engasjerende). Torsdag: Presenter en instruktør (personlig). Fredag: Helgetips + påminnelse om åpningstider (informativt). Lørdag: Repost av et medlem som tagger oss (sosialt bevis). Søndag: "Klar for ny uke?" + kommende ukeprogram (inspirerende).',
      },
    },
    {
      id: 'salg-service-vg1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        task: 'Hva er engasjementsrate og hvorfor er den viktig?',
        solution: 'Engasjementsrate måler hvor stor andel av de som ser innholdet som faktisk engasjerer seg (liker, kommenterer, deler). Formel: (Engasjement / Rekkevidde) x 100. Den er viktig fordi: 1) Høy engasjementsrate betyr at innholdet treffer. 2) Algoritmene belønner engasjement med mer rekkevidde. 3) Engasjerte følgere er mer sannsynlige å bli kunder. 4) Det viser kvalitet fremfor kvantitet.',
      },
    },
    {
      id: 'salg-service-vg1-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Ulike **plattformer** passer til ulike målgrupper og formål
- **Innholdsstrategi** krever planlegging og variasjon
- **Organisk og betalt** innhold har ulike styrker
- **Måling** av rekkevidde, engasjement og konvertering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Organisk innhold | Gratis publisert innhold |
| Betalt innhold | Annonsering på sosiale medier |
| Engasjementsrate | Andel som engasjerer seg med innholdet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Digitale betalingsløsninger og sikkerhet
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4_3: TextbookChapter = {
  id: 'salg-service-vg1-4-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '4.3',
  title: 'Digitale betalingsløsninger og sikkerhet',
  description: 'Du lærer om ulike digitale betalingsløsninger, sikkerhet ved netthandel og hvordan forbrukere beskyttes. Kapittelet dekker Vipps, kortbetaling, faktura og personvern i digitale transaksjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til og ta i bruk gjeldende regelverk for markedsføring og salg',
    'utforske hvordan teknologi og endringer i forbrukeratferd påvirker salg og servicerollen, og presentere tiltak og markedsføringsstrategier',
  ],
  content: [
    {
      id: 'salg-service-vg1-4-3-intro',
      type: 'text',
      content: `## Trygg handel i den digitale verden

Når vi handler på nett, overlater vi sensitive opplysninger til ukjente. Kortnummer, personnummer, adresse - alt kan misbrukes hvis det kommer i feil hender. Derfor er sikre betalingsløsninger og forbrukerbeskyttelse helt avgjørende for digital handel.

I dette kapittelet skal du lære:
- De vanligste digitale betalingsløsningene
- Hvordan betalingssikkerhet fungerer
- Forbrukerrettigheter ved netthandel
- Personvern og datahåndtering`,
    },
    {
      id: 'salg-service-vg1-4-3-def-1',
      type: 'definition',
      title: 'Betalingsløsning',
      content: `En **betalingsløsning** er et system som muliggjør overføring av penger fra kjøper til selger i forbindelse med et kjøp. Digitale betalingsløsninger inkluderer kortbetaling, mobilbetaling, nettbank og faktura.`,
    },
    {
      id: 'salg-service-vg1-4-3-text-1',
      type: 'text',
      content: `### Vanlige betalingsløsninger i Norge

**Kortbetaling (Visa/Mastercard)**
- Mest brukt ved netthandel
- Sikret med 3D Secure (BankID/kode)
- Beskyttelse via kortselskap

**Vipps**
- Norsk mobilbetalingsløsning
- Enkel og kjent for forbrukerne
- Brukes både i butikk og på nett
- Høy tillit og konvertering

**Klarna/faktura**
- "Kjøp nå, betal senere"
- Faktura eller delbetaling
- Populært, men omdiskutert
- Risiko for gjeldsproblemer

**PayPal**
- Internasjonalt mye brukt
- Kjøperbeskyttelse
- Mindre vanlig i Norge

**Apple Pay/Google Pay**
- Betaling via mobil/smartklokke
- Biometrisk godkjenning
- Voksende popularitet`,
    },
    {
      id: 'salg-service-vg1-4-3-text-2',
      type: 'text',
      content: `### Betalingssikkerhet

**SSL/TLS-kryptering:**
- Alle seriøse nettbutikker bruker https
- Data krypteres mellom kunde og butikk
- Hengelås-symbolet i nettleseren

**3D Secure (Verified by Visa/Mastercard SecureCode):**
- Ekstra bekreftelse ved kortbetaling
- BankID eller engangspassord fra banken
- Beskytter mot misbruk av kortnummer

**PCI DSS:**
- Internasjonal standard for håndtering av kortdata
- Strenge krav til hvordan data lagres
- Nettbutikker må være sertifisert

**Tokenisering:**
- Kortnummer erstattes av en kode (token)
- Selve kortnummeret lagres ikke hos butikken
- Reduserer risiko ved datainnbrudd`,
    },
    {
      id: 'salg-service-vg1-4-3-text-3',
      type: 'text',
      content: `### Forbrukerrettigheter ved netthandel

**Angrerett:**
- 14 dagers angrefrist ved netthandel
- Kan returnere uten grunn
- Må informeres tydelig ved kjøp

**Reklamasjonsrett:**
- 2-5 års reklamasjonsrett gjelder også på nett
- Samme rettigheter som i fysisk butikk
- Selger har bevisbyrde første 6 mnd

**Prisopplysning:**
- Totalpris inkl. frakt og avgifter
- Tydelig før kjøp fullføres
- Ingen skjulte kostnader

**Bekreftelse:**
- Ordrebekreftelse på e-post
- All nødvendig informasjon
- Kontaktinformasjon til selger`,
    },
    {
      id: 'salg-service-vg1-4-3-warning-1',
      type: 'warning',
      title: 'Svindel på nett',
      content: `Vær oppmerksom på falske nettbutikker. Tegn på svindel: Usannsynlig lave priser, dårlig norsk, ingen kontaktinfo, kun forskuddsbetaling, ingen angrerett-info, manglende https. Sjekk Forbrukertilsynet og Trustpilot før du handler i ukjente butikker.`,
    },
    {
      id: 'salg-service-vg1-4-3-text-4',
      type: 'text',
      content: `### Personvern og datahåndtering

**Hva lagres ved netthandel:**
- Navn, adresse, kontaktinfo
- Betalingsinformasjon
- Kjøpshistorikk
- Surfeatferd (cookies)

**GDPR-krav:**
- Tydelig informasjon om datainnsamling
- Samtykke der det kreves
- Rett til innsyn og sletting
- Sikker oppbevaring

**Cookie-samtykke:**
- Nødvendige cookies (funksjonalitet)
- Analytiske cookies (statistikk)
- Markedsføringscookies (annonsering)
- Bruker må kunne velge

**For virksomheten:**
- Ha personvernerklæring
- Behandlingsansvarlig utpekt
- Sikre systemer
- Rutiner for datahåndtering`,
    },
    {
      id: 'salg-service-vg1-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Sikker betaling i nettbutikk',
      problem: 'En kunde skal kjøpe sko i en nettbutikk for første gang.',
      solution: `**Kunden bør sjekke:**
1. Nettsiden har https (hengelås-ikon)
2. Kontaktinformasjon finnes (adresse, telefon, org.nr)
3. Angrerett og vilkår er tydelig oppgitt
4. Prisen er tydelig inkl. frakt

**Ved betaling:**
1. Kunde velger betalingsmetode (Vipps, kort, faktura)
2. Ved kortbetaling: Omdirigeres til bankens side
3. Bekrefter med BankID (3D Secure)
4. Mottar ordrebekreftelse på e-post

**Hva som skjer bak kulissene:**
- Kortnummer sendes kryptert
- Banken godkjenner transaksjonen
- Butikken får beskjed om godkjent betaling
- Kortnummer lagres ikke i klartekst

**Hvis noe går galt:**
- Kunden har angrerett i 14 dager
- Ved feil: Reklamasjonsrett
- Ved svindel: Kontakt banken for tilbakeføring`,
    },
    {
      id: 'salg-service-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva betyr det at en nettside har "https" i adressen?',
        options: [
          { id: 'a', text: 'At siden er gratis å bruke', isCorrect: false },
          { id: 'b', text: 'At forbindelsen mellom deg og nettsiden er kryptert', isCorrect: true },
          { id: 'c', text: 'At siden er godkjent av myndighetene', isCorrect: false },
          { id: 'd', text: 'At siden bruker den nyeste teknologien', isCorrect: false },
        ],
        solution: 'HTTPS betyr at forbindelsen er kryptert med SSL/TLS, slik at data som sendes mellom nettleseren og nettsiden ikke kan leses av andre. Det vises med et hengelås-ikon i nettleseren.',
      },
    },
    {
      id: 'salg-service-vg1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        task: 'Hva er 3D Secure og hvorfor brukes det?',
        hints: ['Tenk på hva som skjer når du betaler med kort på nett'],
        solution: '3D Secure er et ekstra sikkerhetslag ved kortbetaling på nett. Når du skal betale, sendes du til bankens side for å bekrefte kjøpet med BankID eller engangskode. Dette beskytter mot at noen misbruker kortnummeret ditt, fordi de også trenger tilgang til din BankID.',
      },
    },
    {
      id: 'salg-service-vg1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        task: 'Hva er fordeler og ulemper med "kjøp nå, betal senere"-løsninger som Klarna?',
        subTasks: [
          {
            label: 'a',
            task: 'Fordeler for kunden',
            solution: 'Kan prøve varer før betaling, utsetter betalingen, kan dele opp i avdrag, enkelt å returnere.',
          },
          {
            label: 'b',
            task: 'Ulemper for kunden',
            solution: 'Lett å miste oversikt over gjeld, gebyrer ved sen betaling, kan føre til overkjøp, påvirker kredittrating.',
          },
          {
            label: 'c',
            task: 'Fordeler for nettbutikken',
            solution: 'Høyere konvertering (flere fullfører kjøp), økt gjennomsnittlig handlekurv, butikken får pengene med en gang.',
          },
        ],
        solution: 'Kjøp nå betal senere er praktisk men krever ansvarlig bruk.',
      },
    },
    {
      id: 'salg-service-vg1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        task: 'Hvordan kan du som forbruker oppdage en svindel-nettbutikk?',
        solution: 'Varselstegn på svindel: 1) Usannsynlig lave priser. 2) Dårlig norsk/språk. 3) Ingen kontaktinformasjon (adresse, telefon). 4) Mangler org.nr og angrerett-info. 5) Kun forskuddsbetaling (ingen Vipps/kort). 6) Ingen https. 7) Nettopp opprettet domene. 8) Negative anmeldelser på Trustpilot. 9) Kopierer design fra kjente merkevarer. 10) Presser på med "kun X igjen!" eller "tilbudet utløper snart!".',
      },
    },
    {
      id: 'salg-service-vg1-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Vanlige **betalingsløsninger** inkluderer kort, Vipps, Klarna og PayPal
- **Sikkerhet** sikres med kryptering, 3D Secure og PCI-standarder
- **Forbrukerrettigheter** gjelder også ved netthandel
- **Personvern** reguleres av GDPR og krever tydelig informasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| 3D Secure | Ekstra bekreftelse ved kortbetaling |
| SSL/TLS | Kryptering av data (https) |
| Cookie | Sporingsfil som lagrer informasjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Digital kundeservice og chatbots
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4_4: TextbookChapter = {
  id: 'salg-service-vg1-4-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '4.4',
  title: 'Digital kundeservice og chatbots',
  description: 'Hvordan teknologi påvirker kundeservicen i moderne virksomheter. Du lærer om chatbots, automatisering, selvbetjening og balansen mellom digital effektivitet og personlig service.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske hvordan teknologi og endringer i forbrukeratferd påvirker salg og servicerollen, og presentere tiltak og markedsføringsstrategier'],
  content: [
    {
      id: 'salg-service-vg1-4-4-intro',
      type: 'text',
      content: `## Service døgnet rundt

Kunder forventer svar raskt - helst med en gang. Digitale verktøy som chatbots, FAQ-sider og automatiserte e-poster kan hjelpe med dette. Men hvor går grensen mellom effektiv automatisering og upersonlig service?

I dette kapittelet skal du lære:
- Ulike kanaler for digital kundeservice
- Hva chatbots er og hva de kan gjøre
- Fordeler og ulemper med automatisering
- Når mennesker fortsatt er nødvendig`,
    },
    {
      id: 'salg-service-vg1-4-4-def-1',
      type: 'definition',
      title: 'Chatbot',
      content: `En **chatbot** er et dataprogram som simulerer samtale med mennesker, ofte via tekst på nettside eller i apper. Enkle chatbots følger forhåndsprogrammerte regler, mens avanserte chatbots bruker kunstig intelligens for å forstå og svare på spørsmål.`,
    },
    {
      id: 'salg-service-vg1-4-4-text-1',
      type: 'text',
      content: `### Kanaler for digital kundeservice

**Live chat:**
- Samtale i sanntid med et menneske
- Ofte på nettside eller app
- Rask og personlig

**Chatbot:**
- Automatiserte svar
- Tilgjengelig 24/7
- Håndterer enkle henvendelser

**E-post:**
- Asynkron kommunikasjon
- Dokumenterbar
- Lengre responstid

**Sosiale medier:**
- Offentlig eller private meldinger
- Rask respons forventet
- Kan bygge eller ødelegge omdømme

**FAQ og hjelpesenter:**
- Selvbetjening
- Kunder finner svar selv
- Reduserer henvendelser

**Telefon:**
- Fortsatt viktig for komplekse saker
- Personlig kontakt
- Kø og ventetid er utfordring`,
    },
    {
      id: 'salg-service-vg1-4-4-text-2',
      type: 'text',
      content: `### Hva kan chatbots gjøre?

**Enkle oppgaver:**
- Svare på ofte stilte spørsmål
- Gi informasjon om åpningstider, priser, leveringstid
- Sjekke ordrestatus
- Lede kunden til riktig side

**Mer avansert:**
- Booke møter og timer
- Motta enkle klager/tilbakemeldinger
- Kvalifisere leads (samle info før menneskelig kontakt)
- Personlige anbefalinger basert på data

**Med AI/kunstig intelligens:**
- Forstå naturlig språk
- Lære av samtaler
- Håndtere mer komplekse spørsmål
- Overføre til menneske når nødvendig`,
    },
    {
      id: 'salg-service-vg1-4-4-text-3',
      type: 'text',
      content: `### Fordeler og ulemper med automatisering

**Fordeler:**
- Tilgjengelig 24/7, ingen ventetid
- Konsistent service (samme kvalitet alltid)
- Kostnadsbesparende for enkle henvendelser
- Frigjør ansatte til komplekse saker
- Skalerbart ved høy pågang

**Ulemper:**
- Kan ikke håndtere komplekse problemer
- Mangler empati og forståelse
- Frustrerende når den ikke forstår
- Kan oppleves upersonlig
- Noen kunder foretrekker mennesker

**Risiko ved dårlig implementering:**
- Chatbot som ikke forstår = dårlig kundeopplevelse
- For vanskelig å nå et menneske = frustrerte kunder
- Generiske svar som ikke hjelper`,
    },
    {
      id: 'salg-service-vg1-4-4-text-4',
      type: 'text',
      content: `### Når mennesker er nødvendig

**Komplekse problemer:**
- Spesielle situasjoner som ikke passer i maler
- Sammensatte henvendelser
- Tekniske feil som krever undersøkelse

**Emosjonelle situasjoner:**
- Sinte eller frustrerte kunder
- Sensitive saker
- Klager som krever empati

**Verdifulle kunder:**
- VIP-kunder som forventer personlig service
- Store avtaler og B2B-kunder
- Situasjoner der tillit er avgjørende

**Salg og rådgivning:**
- Komplekse produkter
- Personlig tilpasning
- Oppbygging av relasjoner

**Den gode løsningen:**
Bruk automatisering for det den er god til, men gjør det enkelt å nå et menneske når det trengs.`,
    },
    {
      id: 'salg-service-vg1-4-4-tip-1',
      type: 'tip',
      title: 'Hybrid tilnærming',
      content: `De beste kundeservice-løsningene kombinerer mennesker og teknologi. Chatboten tar imot, samler informasjon og løser enkle saker. Når saken er kompleks, overføres kunden til et menneske - med all informasjonen allerede samlet inn. Kunden slipper å gjenta seg.`,
    },
    {
      id: 'salg-service-vg1-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Kundereise med chatbot',
      problem: 'En kunde vil vite hvor pakken sin er.',
      solution: `**Scenario A - Enkel henvendelse (chatbot håndterer):**

Kunde: "Hei, hvor er pakken min?"
Bot: "Hei! Jeg hjelper deg gjerne. Skriv inn ordrenummeret ditt."
Kunde: "12345"
Bot: "Takk! Pakken din ble sendt 15. januar og er nå hos Posten. Forventet levering: 17. januar. Her er sporingslenken: [lenke]. Var det noe mer?"
Kunde: "Nei, takk!"
Bot: "Supert! Ha en fin dag."

**Scenario B - Kompleks henvendelse (overføres):**

Kunde: "Pakken min skulle kommet for 5 dager siden og jeg har prøvd å kontakte Posten uten hell. Dette er ikke første gang det skjer!"
Bot: "Jeg forstår at dette er frustrerende. La meg koble deg med en kundebehandler som kan hjelpe deg videre."
[Overføring til menneske med all info vedlagt]
Kundebehandler: "Hei! Jeg ser at pakke 12345 er forsinket. Beklager dette - jeg tar kontakt med transportør nå og ringer deg tilbake innen timen. Kan jeg nå deg på 91234567?"`,
    },
    {
      id: 'salg-service-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hvilken type henvendelse egner seg best for en chatbot?',
        options: [
          { id: 'a', text: 'En sint kunde som vil klage på dårlig service', isCorrect: false },
          { id: 'b', text: 'En kunde som lurer på åpningstidene', isCorrect: true },
          { id: 'c', text: 'En kunde med et komplekst teknisk problem', isCorrect: false },
          { id: 'd', text: 'En stor bedriftskunde som vil forhandle pris', isCorrect: false },
        ],
        solution: 'Enkle, repetitive spørsmål som åpningstider, priser og leveringstid egner seg perfekt for chatbots. Komplekse eller emosjonelle saker bør håndteres av mennesker.',
      },
    },
    {
      id: 'salg-service-vg1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en regelbasert chatbot og en AI-basert chatbot?',
        hints: ['Tenk på hvordan de forstår og svarer'],
        solution: 'En regelbasert chatbot følger forhåndsprogrammerte hvis-så-regler. Den kan bare svare på det den er programmert for, ofte via knapper eller nøkkelord. En AI-basert chatbot bruker kunstig intelligens til å forstå naturlig språk, lære av samtaler, og gi mer fleksible svar. AI-boten kan forstå ulike formuleringer av samme spørsmål.',
      },
    },
    {
      id: 'salg-service-vg1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        task: 'Gi tre eksempler på situasjoner der en menneskelig kundebehandler er bedre enn en chatbot.',
        solution: '1) En sint kunde som vil klage - krever empati, evne til å beklage genuint, og kreativ problemløsning. 2) Kompleks teknisk feil - krever undersøkelse, oppfølging og ekspertise. 3) VIP-kunde med spesielle behov - krever personlig relasjon og fleksibilitet utover standard løsninger. 4) Salg av komplekse produkter - krever rådgivning, behovsavdekking og tillitsbygging.',
      },
    },
    {
      id: 'salg-service-vg1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        task: 'Hva bør en god chatbot gjøre når den ikke forstår kundens spørsmål?',
        solution: 'En god chatbot bør: 1) Innrømme at den ikke forstod - "Beklager, jeg forstod ikke helt." 2) Be om omformulering eller gi alternativer - "Kan du si det på en annen måte?" eller "Mener du A, B eller C?" 3) Tilby å koble til et menneske - "Vil du snakke med en kundebehandler?" 4) Ikke late som den forstår og gi feil svar. 5) Logge hendelsen slik at den kan forbedres.',
      },
    },
    {
      id: 'salg-service-vg1-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Digital kundeservice** inkluderer chat, e-post, sosiale medier og FAQ
- **Chatbots** egner seg for enkle, repetitive henvendelser
- **Mennesker** trengs for komplekse, emosjonelle og viktige saker
- **Hybrid løsning** kombinerer det beste fra begge

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Chatbot | Program som simulerer samtale |
| Selvbetjening | Kunden finner svar selv |
| AI/kunstig intelligens | Teknologi som kan lære og forstå |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Søkemotoroptimalisering og nettsynlighet
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4_5: TextbookChapter = {
  id: 'salg-service-vg1-4-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '4.5',
  title: 'Søkemotoroptimalisering og nettsynlighet',
  description: 'Du lærer grunnleggende prinsipper for søkemotoroptimalisering (SEO) og hvordan virksomheter kan bli synlige på nett. Kapittelet dekker søkeord, innholdsoptimalisering og betalt annonsering.',
  estimatedMinutes: 45,
  competenceGoals: ['lage en markedsføringskampanje og gjøre rede for valg av virkemidler'],
  content: [
    {
      id: 'salg-service-vg1-4-5-intro',
      type: 'text',
      content: `## Bli funnet på nett

Når du søker på Google, hvem bestemmer hvilke nettsider som vises først? Og hvordan kan en virksomhet komme til topps i søkeresultatene? Søkemotoroptimalisering (SEO) er kunsten å gjøre nettsiden din synlig for de som søker etter det du tilbyr.

I dette kapittelet skal du lære:
- Hvordan søkemotorer fungerer
- Grunnleggende SEO-prinsipper
- Forskjellen mellom organisk og betalt synlighet
- Innholdsmarkedsføring som strategi`,
    },
    {
      id: 'salg-service-vg1-4-5-def-1',
      type: 'definition',
      title: 'SEO (Søkemotoroptimalisering)',
      content: `**SEO** (Search Engine Optimization) er prosessen med å forbedre en nettside for å øke synligheten i søkemotorers organiske (ikke-betalte) resultater. Målet er å rangere høyere når folk søker etter relevante søkeord.`,
    },
    {
      id: 'salg-service-vg1-4-5-text-1',
      type: 'text',
      content: `### Hvordan søkemotorer fungerer

**Crawling:**
- Søkemotorens "roboter" (bots) scanner nettsider
- Følger lenker fra side til side
- Indekserer innholdet

**Indeksering:**
- Innholdet lagres i en database
- Kategoriseres etter emne og relevans
- Oppdateres jevnlig

**Rangering:**
- Når noen søker, finner algoritmen relevante sider
- Rangerer dem etter hundrevis av faktorer
- Viser de mest relevante øverst

**Googles mål:**
Gi brukeren det beste svaret på søket sitt. Sider som gir god brukeropplevelse og svarer på spørsmålet rangerer høyere.`,
    },
    {
      id: 'salg-service-vg1-4-5-text-2',
      type: 'text',
      content: `### Grunnleggende SEO-faktorer

**On-page SEO (på selve siden):**

*Søkeord:*
- Ord og fraser folk søker etter
- Bruk i titler, overskrifter, tekst
- Naturlig bruk, ikke overdrivelse

*Titler og meta-beskrivelser:*
- Tittelen (title tag) vises i søkeresultater
- Meta-beskrivelsen er teksten under
- Skal lokke til klikk

*Innholdskvalitet:*
- Svar på det folk spør om
- Grundig og nyttig innhold
- Originalt, ikke kopiert

*Teknisk:*
- Rask lastetid
- Mobiloptimalisert
- Sikker (https)

**Off-page SEO (utenfor siden):**

*Lenker fra andre sider:*
- Lenker fra andre nettsider = "stemmer"
- Kvalitet viktigere enn kvantitet
- Relevante kilder gir mer verdi`,
    },
    {
      id: 'salg-service-vg1-4-5-text-3',
      type: 'text',
      content: `### Organisk vs. betalt synlighet

**Organisk synlighet (SEO):**
- Gratis plasseringer i søkeresultater
- Tar tid å bygge opp (måneder/år)
- Langsiktig verdi
- Krever kontinuerlig arbeid med innhold

**Betalt synlighet (SEM/Google Ads):**
- Annonser øverst i søkeresultatene
- Umiddelbar synlighet
- Betaler per klikk (PPC)
- Stopper når budsjettet er tomt

**Når bruke hva?**
- Ny virksomhet: Start med betalt for rask synlighet
- Langsiktig: Bygg organisk samtidig
- Konkurranseutsatte ord: Kombiner begge
- Sesongkampanjer: Betalt for kortvarig boost`,
    },
    {
      id: 'salg-service-vg1-4-5-text-4',
      type: 'text',
      content: `### Innholdsmarkedsføring

**Hva er det?**
- Lage verdifullt innhold som tiltrekker kunder
- Ikke direkte salg, men posisjonering som ekspert
- Bygger tillit over tid

**Typer innhold:**
- Bloggartikler
- Guider og e-bøker
- Videoer og podkaster
- Infografikk
- Kundehistorier

**Fordeler:**
- Tiltrekker organisk trafikk via søk
- Kan deles på sosiale medier
- Bygger merkevaren som ekspert
- Konverterer besøkende til leads

**Eksempel:**
En rørlegger som skriver "10 tips for å unngå frosne rør om vinteren" får trafikk fra folk som søker etter dette - og viser samtidig at de kan faget sitt.`,
    },
    {
      id: 'salg-service-vg1-4-5-tip-1',
      type: 'tip',
      title: 'Tenk på brukeren, ikke algoritmen',
      content: `Det beste SEO-rådet er å lage godt innhold for brukerne. Google blir stadig flinkere til å forstå kvalitet. I stedet for å "lure" algoritmen, fokuser på å gi det beste svaret på det folk søker etter.`,
    },
    {
      id: 'salg-service-vg1-4-5-example-1',
      type: 'example',
      title: 'Eksempel: SEO for en lokal pizzeria',
      problem: 'En pizzeria i Bergen vil komme høyt opp når folk søker etter pizza.',
      solution: `**Søkeordsanalyse:**
- "Pizza Bergen" - 1000 søk/mnd
- "Beste pizza Bergen" - 500 søk/mnd
- "Pizzalevering Bergen sentrum" - 200 søk/mnd
- "Glutenfri pizza Bergen" - 50 søk/mnd

**On-page optimalisering:**
- Tittel: "Beste pizza i Bergen sentrum | [Navn] Pizzeria"
- Overskrifter som inkluderer søkeord
- Beskrivelse av meny med relevante ord
- Bilder med beskrivende filnavn

**Google My Business:**
- Opprett og optimaliser profil
- Riktig adresse, åpningstider, bilder
- Oppmuntre til anmeldelser

**Innhold:**
- Blogginnlegg: "5 grunner til at vår pizza er laget med kjærlighet"
- Side om glutenfrie alternativer
- Informasjon om ingredienser og tradisjon

**Lokal SEO:**
- Nevnes i lokale nettsider og blogger
- Samarbeid med andre lokale virksomheter
- Sosiale medier med lokal forankring`,
    },
    {
      id: 'salg-service-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva betyr organisk synlighet i søkemotorer?',
        options: [
          { id: 'a', text: 'At nettsiden er miljøvennlig', isCorrect: false },
          { id: 'b', text: 'Gratis plasseringer i søkeresultatene (ikke annonser)', isCorrect: true },
          { id: 'c', text: 'At innholdet er økologisk godkjent', isCorrect: false },
          { id: 'd', text: 'Betalte annonser fra naturlige merkevarer', isCorrect: false },
        ],
        solution: 'Organisk synlighet er de gratis søkeresultatene som kommer under annonsene. De er "organiske" fordi plasseringen er basert på relevans og kvalitet, ikke betaling.',
      },
    },
    {
      id: 'salg-service-vg1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        task: 'Hvorfor er søkeord viktige for SEO?',
        hints: ['Tenk på sammenhengen mellom det folk søker og det du skriver'],
        solution: 'Søkeord er ordene og frasene folk skriver inn i søkemotorer. Ved å bruke de samme ordene i innholdet ditt, signaliserer du til søkemotoren at siden din er relevant for det søket. Hvis noen søker "beste løpesko for nybegynnere" og du har en artikkel med denne frasen i tittelen, øker sjansen for at du vises i resultatene.',
      },
    },
    {
      id: 'salg-service-vg1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        task: 'Hvilke søkeord ville du fokusert på for følgende virksomheter?',
        subTasks: [
          {
            label: 'a',
            task: 'En frisørsalong i Oslo',
            solution: 'Frisør Oslo, hårklipp Oslo, farge hår Oslo, beste frisør Oslo, damefrisør Oslo, herreklipp Oslo, [bydel] frisør, bryllupsfrisør Oslo.',
          },
          {
            label: 'b',
            task: 'En nettbutikk for barneklær',
            solution: 'Barneklær nettbutikk, babyklær, klær til barn, kjoler barn, jakke barn vinter, barneklær salg, barneklær gratis frakt, økologiske barneklær.',
          },
          {
            label: 'c',
            task: 'En yogainstruktør som tilbyr kurs',
            solution: 'Yoga kurs [by], yoga for nybegynnere, yoga online, yoga pris, yogainstruktør, yoga timer, yoga studio, yoga gravid, yoga for stive.',
          },
        ],
        solution: 'Gode søkeord er relevante for virksomheten og noe folk faktisk søker etter.',
      },
    },
    {
      id: 'salg-service-vg1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        task: 'Hva er forskjellen mellom SEO og SEM/Google Ads?',
        solution: 'SEO (Search Engine Optimization) handler om å optimalisere nettsiden for å rangere høyere i organiske (gratis) søkeresultater. Det tar tid, men gir langsiktig verdi. SEM/Google Ads er betalt annonsering der du betaler for å vises øverst i søkeresultatene. Det gir umiddelbar synlighet, men stopper når budsjettet er brukt opp. De fleste kombinerer begge: Ads for rask effekt og SEO for langsiktig vekst.',
      },
    },
    {
      id: 'salg-service-vg1-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        task: 'Gi tre eksempler på innholdsmarkedsføring en virksomhet kan bruke.',
        solution: 'Eksempler: 1) En eiendomsmegler skriver "Guide til førstegangskjøpere" - hjelper potensielle kunder og viser ekspertise. 2) En treningsstudio lager treningstips-videoer på YouTube - bygger merkevare og tiltrekker folk som søker etter trening. 3) En interiørbutikk har blogg med "5 trender for stuen i 2025" - får trafikk fra søk og kan lenke til produktene sine.',
      },
    },
    {
      id: 'salg-service-vg1-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Søkemotorer** crawler, indekserer og rangerer nettsider
- **SEO** handler om å optimalisere for organiske søkeresultater
- **Google Ads** gir umiddelbar synlighet mot betaling
- **Innholdsmarkedsføring** bygger synlighet og tillit over tid

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| SEO | Søkemotoroptimalisering |
| Søkeord | Ord og fraser folk søker etter |
| Organisk | Gratis søkeresultater |
| SEM/PPC | Betalt søkeannonsering |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.6: Dataanalyse og kundedata
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_4_6: TextbookChapter = {
  id: 'salg-service-vg1-4-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '4.6',
  title: 'Dataanalyse og kundedata',
  description: 'En innføring i hvordan virksomheter samler inn og bruker kundedata til å forbedre produkter og tjenester. Du lærer om dataanalyse, kundeundersøkelser og etiske problemstillinger knyttet til datainnsamling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere forbrukeratferd i sammenheng med segmentering av målgrupper',
    'utforske hvordan teknologi og endringer i forbrukeratferd påvirker salg og servicerollen, og presentere tiltak og markedsføringsstrategier',
  ],
  content: [
    {
      id: 'salg-service-vg1-4-6-intro',
      type: 'text',
      content: `## Data er den nye oljen

Hver gang du handler på nett, søker på Google eller scroller på Instagram, etterlater du digitale spor. For virksomheter er disse dataene gull verdt - de avslører hvem kundene er, hva de vil ha, og hvordan de tar beslutninger.

I dette kapittelet skal du lære:
- Hva kundedata er og hvordan de samles inn
- Hvordan virksomheter bruker data til å forbedre seg
- Grunnleggende om dataanalyse
- Etiske utfordringer og personvern`,
    },
    {
      id: 'salg-service-vg1-4-6-def-1',
      type: 'definition',
      title: 'Kundedata',
      content: `**Kundedata** er all informasjon en virksomhet samler inn om sine kunder og potensielle kunder. Dette inkluderer demografisk informasjon, kjøpshistorikk, nettleseratferd, preferanser og tilbakemeldinger.`,
    },
    {
      id: 'salg-service-vg1-4-6-text-1',
      type: 'text',
      content: `### Typer kundedata

**Demografiske data:**
- Alder, kjønn, bosted
- Inntekt, utdanning, yrke
- Familiesituasjon

**Transakssjonsdata:**
- Kjøpshistorikk
- Gjennomsnittlig handlekurv
- Kjøpsfrekvens
- Betalingsmåte

**Atferdsdata:**
- Sider besøkt på nettstedet
- Tid brukt på ulike sider
- Klikk og scrolling
- Søk i nettbutikken

**Preferansedata:**
- Produktkategorier av interesse
- Kommunikasjonspreferanser
- Favoritter og ønskelister

**Tilbakemeldingsdata:**
- Anmeldelser og vurderinger
- Kundeundersøkelser
- Klager og henvendelser`,
    },
    {
      id: 'salg-service-vg1-4-6-text-2',
      type: 'text',
      content: `### Hvordan data samles inn

**Direkte innsamling:**
- Skjemaer ved registrering
- Kundeundersøkelser
- Kjøpsdata fra kassen/nettbutikk
- Kundeklubb og lojalitetsprogram

**Indirekte innsamling:**
- Cookies som sporer nettleseratferd
- App-bruk og lokasjon
- Sosiale medier-interaksjoner
- Tredjepartsdata

**Verktøy:**
- Google Analytics (nettstedstrafikk)
- CRM-systemer (kundeinformasjon)
- Sosiale medier-innsikt
- Salgsrapporter og kassesystemer`,
    },
    {
      id: 'salg-service-vg1-4-6-text-3',
      type: 'text',
      content: `### Bruk av kundedata

**Personalisering:**
- Produktanbefalinger basert på tidligere kjøp
- Tilpassede e-poster og tilbud
- Personlig innhold på nettsted

**Segmentering:**
- Dele kunder inn i grupper
- Målrette markedsføring
- Tilpasse produkter til segmenter

**Prediktiv analyse:**
- Forutsi fremtidig atferd
- Identifisere kunder som kan falle fra
- Beregne kundeverdi over tid

**Forbedring:**
- Optimalisere nettsider basert på brukeratferd
- Forbedre produkter basert på tilbakemeldinger
- Effektivisere lager og innkjøp

**Kundeservice:**
- Se kundehistorikk for bedre hjelp
- Proaktiv oppfølging
- Personlig behandling`,
    },
    {
      id: 'salg-service-vg1-4-6-text-4',
      type: 'text',
      content: `### Grunnleggende dataanalyse

**KPI-er (Key Performance Indicators):**
- Tall som viser om vi lykkes
- Eksempler: Omsetning, konverteringsrate, kundetilfredshet

**Vanlige analyser:**

*Trendanalyse:*
- Hvordan utvikler tallene seg over tid?
- Er salget høyere enn forrige år?

*Segmentanalyse:*
- Hvilke kundegrupper er mest lønnsomme?
- Hvem handler mest?

*Funnelanalyse:*
- Hvor faller kunder fra i kjøpsprosessen?
- Hvor mange fullfører kjøpet?

*A/B-testing:*
- Teste to versjoner mot hverandre
- Hvilken nettside konverterer best?`,
    },
    {
      id: 'salg-service-vg1-4-6-warning-1',
      type: 'warning',
      title: 'Etikk og personvern',
      content: `Med stor makt følger stort ansvar. Datainnsamling må skje lovlig og etisk. GDPR krever samtykke, transparens og sikker lagring. Misbruk av data skader tilliten og kan gi store bøter. Spør alltid: "Ville kunden vært komfortabel hvis de visste hva vi gjør med dataene deres?"`,
    },
    {
      id: 'salg-service-vg1-4-6-text-5',
      type: 'text',
      content: `### Etiske utfordringer

**Samtykke:**
- Forstår kunden hva de samtykker til?
- Er det enkelt å si nei?
- Er samtykket informert?

**Transparens:**
- Vet kundene hva som samles inn?
- Er det lett å få innsyn?
- Kommuniseres bruken tydelig?

**Proporsjonalitet:**
- Samles det inn mer enn nødvendig?
- Oppbevares data lenger enn nødvendig?
- Er formålet legitimt?

**Sikkerhet:**
- Er dataene beskyttet mot lekkasje?
- Hvem har tilgang?
- Hva skjer ved datainnbrudd?

**Manipulasjon:**
- Brukes data til å manipulere?
- Prisdiskriminering basert på data?
- Utnytte sårbarheter?`,
    },
    {
      id: 'salg-service-vg1-4-6-example-1',
      type: 'example',
      title: 'Eksempel: Datadrevet kundeopplevelse',
      problem: 'En nettbutikk vil bruke data til å forbedre kundeopplevelsen.',
      solution: `**Data som samles inn:**
- Kjøpshistorikk per kunde
- Nettleseratferd (hvilke produkter sett på)
- Tidspunkt for besøk og kjøp
- Åpning av e-poster
- Svar på kundeundersøkelser

**Hvordan dataene brukes:**

1. **Personlige anbefalinger:**
"Basert på dine tidligere kjøp tror vi du vil like..."
→ Øker relevans og salg

2. **Segmentert e-post:**
Ulike e-poster til aktive kunder vs. inaktive
→ Vinn-tilbake-kampanje til de som ikke har handlet på 3 mnd

3. **Optimalisering:**
Analyse viser at 40% forlater handlekurven på betalingssiden
→ Forenkler betalingsprosessen

4. **Lagerføring:**
Data viser høyere etterspørsel på produkter i str. M
→ Bestiller mer i denne størrelsen

5. **Kundeservice:**
Servicemedarbeider ser kundens historikk
→ Kan gi bedre, personlig hjelp

**Resultat:** Høyere konvertering, mer fornøyde kunder, effektiv drift.`,
    },
    {
      id: 'salg-service-vg1-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-6-ex-1',
        number: '4.6.1',
        type: 'multiple-choice',
        task: 'Hvilken type kundedata er "kjøpshistorikk"?',
        options: [
          { id: 'a', text: 'Demografisk data', isCorrect: false },
          { id: 'b', text: 'Transakssjonsdata', isCorrect: true },
          { id: 'c', text: 'Atferdsdata', isCorrect: false },
          { id: 'd', text: 'Tilbakemeldingsdata', isCorrect: false },
        ],
        solution: 'Kjøpshistorikk er transakssjonsdata fordi det handler om faktiske transaksjoner/kjøp kunden har gjort.',
      },
    },
    {
      id: 'salg-service-vg1-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-6-ex-2',
        number: '4.6.2',
        type: 'classic',
        task: 'Hva er personalisering, og hvordan kan det brukes i markedsføring?',
        hints: ['Tenk på hvordan nettbutikker viser "anbefalt for deg"'],
        solution: 'Personalisering betyr å tilpasse innhold, produkter eller kommunikasjon til den enkelte kunden basert på data om dem. I markedsføring kan det brukes til: Produktanbefalinger basert på kjøpshistorikk, e-poster med produkter kunden har sett på, tilpasset innhold på nettsiden, og individuelle tilbud basert på preferanser.',
      },
    },
    {
      id: 'salg-service-vg1-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-6-ex-3',
        number: '4.6.3',
        type: 'classic',
        task: 'Gi tre eksempler på etiske utfordringer ved bruk av kundedata.',
        solution: '1) Manglende samtykke: Samle data uten at kunden forstår hva de godtar, eller gjøre det vanskelig å si nei. 2) Prisdiskriminering: Vise ulike priser til ulike kunder basert på hva man tror de er villige til å betale. 3) Manipulasjon: Bruke psykologiske teknikker basert på data for å få folk til å kjøpe mer enn de trenger. 4) Datalekkasje: Manglende sikkerhet som gjør at sensitiv informasjon kommer på avveie.',
      },
    },
    {
      id: 'salg-service-vg1-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-6-ex-4',
        number: '4.6.4',
        type: 'classic',
        task: 'Hva er en KPI, og gi tre eksempler på KPI-er en nettbutikk kan bruke.',
        solution: 'KPI (Key Performance Indicator) er et nøkkeltall som viser om virksomheten når sine mål. Eksempler for nettbutikk: 1) Konverteringsrate - andel besøkende som kjøper (mål: øke fra 2% til 3%). 2) Gjennomsnittlig handlekurv - hvor mye hver kunde handler for (mål: øke fra 500 til 600 kr). 3) Returrate - andel varer som returneres (mål: senke fra 15% til 10%). 4) Kundetilfredshet (NPS) - hvor fornøyde kundene er (mål: øke fra 45 til 55).',
      },
    },
    {
      id: 'salg-service-vg1-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-4-6-ex-5',
        number: '4.6.5',
        type: 'classic',
        task: 'Hvordan kan en kundeundersøkelse gi verdifull innsikt?',
        solution: 'Kundeundersøkelser gir direkte tilbakemelding fra kundene om: 1) Tilfredshet - hvor fornøyde de er og hvorfor. 2) Forbedringsbehov - hva de ønsker annerledes. 3) Uoppdagede behov - nye produkter eller tjenester de savner. 4) Konkurrentinnsikt - hva de liker ved konkurrenter. 5) Prioriteringer - hva som er viktigst for dem. Tips: Still konkrete spørsmål, gjør det kort, og handle på resultatene - ellers mister folk motivasjonen til å svare.',
      },
    },
    {
      id: 'salg-service-vg1-4-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kundedata** samles inn gjennom ulike kanaler og metoder
- **Bruksområder** inkluderer personalisering, segmentering og analyse
- **KPI-er** måler om virksomheten når sine mål
- **Etikk og personvern** må ivaretas ved all databruk

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kundedata | Informasjon om kunder og atferd |
| Personalisering | Tilpasse til den enkelte kunde |
| KPI | Nøkkeltall for å måle suksess |
| GDPR | Regelverk for personvern |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL4_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_4_1,
  CHAPTER_SALG_SERVICE_VG1_4_2,
  CHAPTER_SALG_SERVICE_VG1_4_3,
  CHAPTER_SALG_SERVICE_VG1_4_4,
  CHAPTER_SALG_SERVICE_VG1_4_5,
  CHAPTER_SALG_SERVICE_VG1_4_6,
];

/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Personlig hygiene og smittevern
// ============================================================================

export const CHAPTER_FB_VG1_6_1: TextbookChapter = {
  id: 'frisor-blomster-vg1-6-1',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '6.1',
  title: 'Personlig hygiene og smittevern',
  description: 'Lær om personlig hygiene, smittevern, håndhygiene og riktig arbeidsantrekk for å forebygge smitte og sikre trygg behandling av kunder i frisør-, blomster- og interiørbransjen.',
  estimatedMinutes: 35,
  competenceGoals: ['følge rutiner for personlig hygiene og smittevern', 'gjøre rede for hvordan smitte kan overføres og forebygges i yrkesutøvelsen'],
  content: [
    {
      id: 'fb-6-1-intro',
      type: 'text',
      content: `## Hvorfor er personlig hygiene viktig?

Som yrkesutøver innen frisør, blomster, interiør og eksponeringsdesign arbeider du tett på kunder og kollegaer. God personlig hygiene er avgjørende for å forebygge smitte, skape tillit hos kundene og opprettholde et profesjonelt arbeidsmiljø.

I dette kapittelet skal du lære:
- Hva personlig hygiene innebærer i yrkessammenheng
- Hvordan smitte overføres og forebygges
- Riktig håndhygiene og håndvask
- Krav til arbeidsantrekk og personlig fremtoning`,
    },
    {
      id: 'fb-6-1-def-1',
      type: 'definition',
      title: 'Smittevern',
      content: `**Smittevern** er alle tiltak som iverksettes for å hindre at sykdomsfremkallende mikroorganismer (bakterier, virus, sopp) overføres mellom personer eller fra gjenstander til personer. I frisør- og skjønnhetsbransjen er smittevern spesielt viktig fordi man arbeider tett på kunder og kan komme i kontakt med hud, hår og kroppsvæsker.`,
    },
    {
      id: 'fb-6-1-text-1',
      type: 'text',
      title: 'Smitteveier og forebygging',
      content: `### Hvordan smitte overføres

Smitte kan overføres på flere måter som er relevante for frisør- og skjønnhetsbransjen:

**Kontaktsmitte (direkte og indirekte):**
- Direkte kontakt med hud, sår eller kroppsvæsker
- Indirekte via forurenset utstyr som kammer, sakser og børster
- Den vanligste smitteveien i salongen

**Dråpesmitte:**
- Smitte via dråper fra hosting og nysing
- Relevant når man arbeider ansikt til ansikt med kunder

**Blodsmitte:**
- Kan forekomme ved kutt med saks, barberblad eller negleklipper
- Spesielt viktig å forebygge for hepatitt B, hepatitt C og HIV

**Forebygging:**
- God håndhygiene før og etter hver kunde
- Rengjøring og desinfisering av utstyr mellom kunder
- Bruk av engangsutstyr der det er hensiktsmessig
- Riktig håndtering av kutt og sår`,
    },
    {
      id: 'fb-6-1-def-2',
      type: 'definition',
      title: 'Håndhygiene',
      content: `**Håndhygiene** omfatter alle tiltak for å holde hendene rene og redusere antall mikroorganismer. Det inkluderer håndvask med såpe og vann, bruk av hånddesinfeksjon med alkoholbasert middel, og god håndpleie for å unngå sprekker i huden der bakterier kan samle seg. Hendene er den viktigste smittekilden i de fleste yrker med kundekontakt.`,
    },
    {
      id: 'fb-6-1-text-2',
      type: 'text',
      title: 'Riktig håndvask',
      content: `### Slik vasker du hendene korrekt

En grundig håndvask tar minst 40–60 sekunder og skal gjøres slik:

1. **Fukt hendene** under rennende, lunkent vann
2. **Påfør såpe** og fordel over hele hånden
3. **Gni håndflater** mot hverandre
4. **Gni mellom fingrene** med fingrene flettet i hverandre
5. **Vask tomler** ved å gripe rundt hver tommel
6. **Vask fingertupper** mot den andre håndflaten
7. **Vask håndledd** med roterende bevegelser
8. **Skyll grundig** under rennende vann
9. **Tørk hendene** med engangshåndkle
10. **Bruk håndkleet** til å skru av kranen

### Når skal du vaske hendene?

- Før og etter kontakt med hver kunde
- Etter toalettbesøk
- Etter hosting, nysing eller berøring av ansiktet
- Etter håndtering av avfall
- Før du spiser eller drikker
- Etter bruk av rengjøringsmidler
- Etter kontakt med forurenset utstyr`,
    },
    {
      id: 'fb-6-1-text-3',
      type: 'text',
      title: 'Arbeidsantrekk og personlig fremtoning',
      content: `### Krav til arbeidsantrekk

Arbeidsantrekket har flere funksjoner: det beskytter mot kjemikalier og smuss, signaliserer profesjonalitet, og er en del av smittevernet.

**Krav til arbeidsklær:**
- Rene og hele klær hver dag
- Korte ermer eller oppbrettede ermer (for god håndhygiene)
- Lukket fottøy med sklisikker såle
- Forkle ved arbeid med kjemikalier og farging

**Personlig fremtoning:**
- Rent og velstelt hår
- Kort og rene negler (uten neglelakk for frisører og hudpleiere)
- Minimalt med ringer og armbånd (samler bakterier)
- Deodorant og generelt god kroppshygiene
- Unngå sterke parfymer (kan gi allergiske reaksjoner hos kunder)

**Husk:** Arbeidsklærne skal vaskes separat fra privatklær, gjerne på minst 60 °C for å drepe bakterier.`,
    },
    {
      id: 'fb-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Smittevern i praksis',
      problem: 'En frisør oppdager at en kunde har et lite sår i hodebunnen. Hva bør frisøren gjøre?',
      solution: `**Fremgangsmåte:**

1. **Informer kunden** vennlig om at du har oppdaget et sår
2. **Bruk hansker** for resten av behandlingen
3. **Unngå direkte kontakt** med såret så langt det er mulig
4. **Vær forsiktig** med skarpe gjenstander i nærheten av såret
5. **Desinfiser grundig** alt utstyr som har vært i kontakt med området
6. **Vask hendene** ekstra godt etter behandlingen
7. **Bruk engangshåndkle** på kundens hodebunn i området rundt såret

Dersom såret blør eller ser infisert ut, bør frisøren anbefale kunden å oppsøke lege og vurdere om behandlingen bør utsettes.`,
    },
    {
      id: 'fb-6-1-warning-1',
      type: 'warning',
      title: 'Ved stikkskade eller kutt',
      content: `Dersom du stikker eller kutter deg på utstyr som har vært i kontakt med en kundes blod, skal du umiddelbart: 1) La såret blø fritt i noen sekunder. 2) Vaske med såpe og vann. 3) Desinfisere med alkoholbasert middel. 4) Dekke til med vanntett plaster. 5) Rapportere hendelsen til arbeidsgiver. Ved risiko for blodsmitte bør du kontakte lege innen 2 timer.`,
    },
    {
      id: 'fb-6-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Smittevern** handler om å hindre overføring av sykdomsfremkallende mikroorganismer
- De viktigste **smitteveiene** er kontaktsmitte, dråpesmitte og blodsmitte
- **Håndhygiene** er det viktigste enkelttiltaket for å forebygge smitte
- Riktig **håndvask** tar minst 40–60 sekunder og skal gjøres før og etter hver kunde
- **Arbeidsantrekket** skal være rent, med korte ermer og lukket fottøy
- Ved **kutt eller stikkskade** skal hendelsen håndteres og rapporteres`,
    },
  ],
  exercises: [
    {
      id: 'fb-6-1-ex-1',
      type: 'multiple-choice',
      task: 'Hva er den vanligste smitteveien i en frisørsalong?',
      options: [
        { id: 'a', text: 'Luftsmitte via ventilasjonssystemet', isCorrect: false },
        { id: 'b', text: 'Kontaktsmitte via hender og utstyr', isCorrect: true },
        { id: 'c', text: 'Vannbåren smitte fra kranen', isCorrect: false },
        { id: 'd', text: 'Matbåren smitte fra lunsjrommet', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Kontaktsmitte er den vanligste smitteveien i salonger. Smitte overføres via direkte hudkontakt eller indirekte gjennom forurenset utstyr som kammer, sakser og børster.',
    },
    {
      id: 'fb-6-1-ex-2',
      type: 'multiple-choice',
      task: 'Hvor lenge skal en grundig håndvask minimum vare?',
      options: [
        { id: 'a', text: '10–15 sekunder', isCorrect: false },
        { id: 'b', text: '20–30 sekunder', isCorrect: false },
        { id: 'c', text: '40–60 sekunder', isCorrect: true },
        { id: 'd', text: '2–3 minutter', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'En grundig håndvask skal ta minst 40–60 sekunder for å sikre at alle deler av hendene er ordentlig rengjort, inkludert mellom fingrene, tomler, fingertupper og håndledd.',
    },
    {
      id: 'fb-6-1-ex-3',
      type: 'classic',
      task: 'Forklar hvorfor frisører bør ha korte negler uten neglelakk, og hvorfor ringer og armbånd bør unngås under arbeid.',
      hints: ['Tenk på håndhygiene og hvor bakterier kan samle seg'],
      solution: 'Lange negler gir plass til bakterier og smuss under neglekanten, noe som gjør det vanskelig å oppnå god håndhygiene. Neglelakk kan skjule smuss under neglene og kan dessuten flasse av i kundens hår. Ringer og armbånd skaper skjulte områder der fukt og bakterier samler seg, og som ikke rengjøres effektivt ved håndvask. I tillegg kan smykker skade kundens hår eller hud under behandling.',
    },
    {
      id: 'fb-6-1-ex-4',
      type: 'classic',
      task: 'Beskriv hvilke tiltak du ville iverksatt dersom du som frisør kutter deg på en saks som har vært i kontakt med en kundes hodebunn.',
      solution: 'Ved en stikkskade eller kutt med utstyr som har vært i kontakt med kundens blod, skal man: 1) La såret blø fritt i noen sekunder for å skylle ut eventuelle smittestoffer. 2) Vaske med såpe og rennende vann. 3) Desinfisere med alkoholbasert desinfeksjonsmiddel. 4) Dekke til med vanntett plaster. 5) Rapportere hendelsen til arbeidsgiver og dokumentere den i avvikssystemet. 6) Kontakte lege innen 2 timer dersom det er risiko for blodsmitte (hepatitt B/C, HIV). Arbeidsgiver er ansvarlig for oppfølging og eventuell vaksinering.',
    },
  ],
  keyTerms: [
    { term: 'Smittevern', definition: 'Tiltak for å hindre overføring av sykdomsfremkallende mikroorganismer mellom personer' },
    { term: 'Kontaktsmitte', definition: 'Smitte som overføres direkte mellom personer eller indirekte via gjenstander' },
    { term: 'Håndhygiene', definition: 'Alle tiltak for å holde hendene rene, inkludert håndvask og desinfeksjon' },
    { term: 'Arbeidsantrekk', definition: 'Klær som brukes i yrkessammenheng for å beskytte mot smuss, kjemikalier og smitte' },
    { term: 'Stikkskade', definition: 'Skade forårsaket av skarpe gjenstander som kan medføre risiko for blodsmitte' },
  ],
};

// ============================================================================
// Kapittel 6.2: Renhold og desinfisering av utstyr
// ============================================================================

export const CHAPTER_FB_VG1_6_2: TextbookChapter = {
  id: 'frisor-blomster-vg1-6-2',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '6.2',
  title: 'Renhold og desinfisering av utstyr',
  description: 'Lær om rengjøring, desinfisering og sterilisering av verktøy og utstyr. Kapittelet dekker arbeidsplassrutiner for å sikre hygienisk arbeid i frisør-, blomster- og interiørbransjen.',
  estimatedMinutes: 35,
  competenceGoals: ['gjennomføre renhold og desinfisering av utstyr etter gjeldende rutiner', 'skille mellom rengjøring, desinfisering og sterilisering'],
  content: [
    {
      id: 'fb-6-2-intro',
      type: 'text',
      content: `## Rent utstyr – trygg behandling

I alle yrkene innen frisør, blomster, interiør og eksponeringsdesign brukes det verktøy og utstyr som kan samle opp smuss, bakterier og andre mikroorganismer. Riktig renhold og desinfisering er avgjørende for å forebygge smittespredning og sikre trygge arbeidsforhold.

I dette kapittelet skal du lære:
- Forskjellen mellom rengjøring, desinfisering og sterilisering
- Hvilke rutiner som gjelder for ulike typer utstyr
- Hvordan du gjennomfører daglig og ukentlig renhold
- Krav til dokumentasjon av renholdsrutiner`,
    },
    {
      id: 'fb-6-2-def-1',
      type: 'definition',
      title: 'Rengjøring, desinfisering og sterilisering',
      content: `**Rengjøring** er å fjerne synlig smuss, støv og organisk materiale fra overflater og utstyr. Rengjøring alene dreper ikke alle mikroorganismer, men fjerner grunnlaget for bakterievekst.

**Desinfisering** er å drepe eller inaktivere de fleste sykdomsfremkallende mikroorganismer ved hjelp av kjemiske midler (desinfeksjonsvæske) eller varme. Desinfisering dreper ikke nødvendigvis alle bakteriesporer.

**Sterilisering** er å drepe alle former for mikroorganismer, inkludert bakteriesporer. Sterilisering kreves for utstyr som kan komme i kontakt med blod eller åpne sår, og gjøres i autoklav (damp under trykk).`,
    },
    {
      id: 'fb-6-2-text-1',
      type: 'text',
      title: 'Renholdsrutiner for ulike utstyr',
      content: `### Frisørutstyr

**Etter hver kunde:**
- Fjern hår fra sakser, kammer og børster
- Rengjør og desinfiser kammer og børster i desinfeksjonsvæske
- Tørk av saksblad med desinfiseringsklut
- Bytt håndkle og kappe
- Rengjør stolen og arbeidsplassen

**Sakser og klippemaskiner:**
- Rengjør med børste for å fjerne hår
- Spray med desinfiserende rensespray
- Oljer bevegelige deler regelmessig
- Sakser som brukes ved risiko for blodkontakt skal steriliseres

**Børster og kammer:**
- Fjern hår manuelt
- Legg i desinfeksjonsvæske i anbefalt tid (vanligvis 10–15 minutter)
- Skyll og la tørke på rent underlag

### Blomsterutstyr

**Etter bruk:**
- Rengjør kniver og sakser med rent vann
- Desinfiser skjæreflater
- Rengjør og tørk bord og arbeidsflater
- Kast brukt oasis og planterester
- Rengjør vaser og beholdere grundig`,
    },
    {
      id: 'fb-6-2-def-2',
      type: 'definition',
      title: 'Autoklav',
      content: `En **autoklav** er et apparat som bruker damp under høyt trykk for å sterilisere utstyr. Vanlig temperatur er 121 °C i 15–20 minutter eller 134 °C i 3–4 minutter. Autoklaven brukes for metallgjenstander som sakser, pinsetter og andre verktøy som tåler varme og fuktighet. Autoklavering er den mest pålitelige metoden for sterilisering.`,
    },
    {
      id: 'fb-6-2-text-2',
      type: 'text',
      title: 'Daglig og ukentlig renhold',
      content: `### Daglige renholdsrutiner

- Rengjør alle arbeidsstasjoner med desinfiserende allrengjøring
- Tøm og rengjør avfallsbeholdere
- Vask gulv med egnet rengjøringsmiddel
- Sjekk at desinfeksjonsvæsker er ferske og i riktig konsentrasjon
- Rengjør håndvasker og dispensere
- Bytt ut engangsutstyr som trengs

### Ukentlige renholdsrutiner

- Grundig rengjøring av alle overflater, hyller og skap
- Rengjøring av ventilasjon og avtrekksvifter
- Vask av tekstiler (håndklær, kapper, gardiner)
- Sjekk og etterfyll desinfeksjonsmidler
- Vedlikehold av utstyr (olje, sliping av sakser)
- Kontroll av utløpsdatoer på produkter

### Dokumentasjon

Alle renholdsrutiner skal dokumenteres i en **renholdsplan** som viser:
- Hva som skal rengjøres
- Hvor ofte
- Hvilket middel som skal brukes
- Hvem som er ansvarlig
- Signatur og dato for utført renhold`,
    },
    {
      id: 'fb-6-2-text-3',
      type: 'text',
      title: 'Engangsutstyr og avfallshåndtering',
      content: `### Engangsutstyr

En del utstyr brukes bare én gang for å sikre hygienen:

- **Halskrage** (nakkepapir) – brukes under kappen for å hindre hudkontakt
- **Engangshansker** – ved farging, blondering og hudkontakt
- **Engangs håndklær** – til tørking av hår i noen salonger
- **Engangs barberhøvel** – skiftes mellom hver kunde
- **Engangssluk** – for å samle hår i vasken

### Avfallshåndtering

Avfall sorteres etter gjeldende regler:

- **Restavfall:** Hår, brukte engangsprodukter, papir
- **Kjemisk avfall:** Rester av hårfarge, blonderpulver, permanentvæske
- **Spesialavfall:** Skarpe gjenstander (barberblad) kastes i stikkboks
- **Papp og plast:** Emballasje og forpakning

Kjemisk avfall skal aldri helles i vasken, men samles i egne beholdere for henting av godkjent avfallsmottak.`,
    },
    {
      id: 'fb-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Utarbeide en renholdsplan',
      problem: 'Du skal lage en enkel renholdsplan for en frisørstasjon. Hva bør planen inneholde?',
      solution: `**Renholdsplan for frisørstasjon:**

| Oppgave | Hyppighet | Middel | Ansvarlig |
|---------|-----------|--------|-----------|
| Fjerne hår fra utstyr | Etter hver kunde | Børste | Frisøren |
| Desinfisere kammer/børster | Etter hver kunde | Desinfeksjonsvæske | Frisøren |
| Tørke av arbeidsstasjon | Etter hver kunde | Desinfiserende klut | Frisøren |
| Bytte håndkle og kappe | Etter hver kunde | – | Frisøren |
| Vaske gulv | Daglig (ved stengetid) | Allrengjøring | Vaktliste |
| Tømme avfall | Daglig | – | Vaktliste |
| Grundig rengjøring av stasjonen | Ukentlig | Allrengjøring + desinfeksjon | Vaktliste |
| Vedlikehold av sakser | Ukentlig | Olje | Frisøren |

Planen henges synlig ved stasjonen, og utført renhold signeres med dato.`,
    },
    {
      id: 'fb-6-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Rengjøring** fjerner synlig smuss, **desinfisering** dreper de fleste mikroorganismer, og **sterilisering** dreper alle
- Ulike typer utstyr krever ulike **renholdsrutiner**
- **Daglig og ukentlig renhold** skal følge en fast plan
- **Engangsutstyr** brukes der det er nødvendig for hygienens skyld
- **Avfall** skal sorteres korrekt, og kjemisk avfall skal aldri helles i avløpet
- Alle rutiner skal **dokumenteres** i en renholdsplan`,
    },
  ],
  exercises: [
    {
      id: 'fb-6-2-ex-1',
      type: 'multiple-choice',
      task: 'Hva er forskjellen mellom desinfisering og sterilisering?',
      options: [
        { id: 'a', text: 'Det er ingen forskjell – begge dreper alle mikroorganismer', isCorrect: false },
        { id: 'b', text: 'Desinfisering dreper de fleste mikroorganismer, sterilisering dreper alle inkludert sporer', isCorrect: true },
        { id: 'c', text: 'Sterilisering er mildere enn desinfisering', isCorrect: false },
        { id: 'd', text: 'Desinfisering krever autoklav, sterilisering krever kun såpe', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Desinfisering dreper eller inaktiverer de fleste sykdomsfremkallende mikroorganismer, men ikke nødvendigvis alle bakteriesporer. Sterilisering dreper alle former for mikroorganismer, inkludert sporer, og gjøres typisk i autoklav med damp under trykk.',
    },
    {
      id: 'fb-6-2-ex-2',
      type: 'multiple-choice',
      task: 'Hvordan skal brukte barberblad håndteres?',
      options: [
        { id: 'a', text: 'Kastes i vanlig restavfall', isCorrect: false },
        { id: 'b', text: 'Skylles og gjenbrukes etter desinfisering', isCorrect: false },
        { id: 'c', text: 'Kastes i egen stikkboks for skarpe gjenstander', isCorrect: true },
        { id: 'd', text: 'Leveres til kommunalt mottak for elektronisk avfall', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Brukte barberblad og andre skarpe gjenstander (kanaler, nåler) skal kastes i en spesiell stikkboks (kanyleboks) for å unngå stikkskader. Når boksen er full, leveres den til godkjent avfallsmottak.',
    },
    {
      id: 'fb-6-2-ex-3',
      type: 'classic',
      task: 'Lag en liste over alle renholdsoppgaver du vil gjøre etter å ha betjent en fargekunde. Begrunn hvorfor hvert steg er viktig.',
      hints: ['Tenk på utstyr, arbeidsflate, avfall og håndhygiene'],
      solution: 'Etter en fargekunde bør følgende gjøres: 1) Ta av og kast engangshansker – forhindrer kjemikalie- og smittekontakt. 2) Fjern fargeskål og rengjør med vann – fjerner kjemikalierester. 3) Tørk av arbeidsstasjonen med desinfiserende klut – fjerner fargerestar og smuss. 4) Rengjør kammer og børster i desinfeksjonsvæske – hindrer krysskontaminering. 5) Kast brukt alufolie og halsremse i restavfall – generelt avfall. 6) Kast fargerester i kjemisk avfallsbeholder, aldri i vasken – miljøhensyn og regelverk. 7) Bytt håndkle og kappe – hygienisk for neste kunde. 8) Vask hendene grundig med såpe og vann – fjerner kjemikalier og mikroorganismer fra hendene.',
    },
    {
      id: 'fb-6-2-ex-4',
      type: 'classic',
      task: 'Forklar hva en renholdsplan er, og beskriv hvorfor det er viktig at renholdsrutiner dokumenteres.',
      solution: 'En renholdsplan er et skriftlig dokument som beskriver hva som skal rengjøres, hvor ofte, med hvilke midler, og hvem som er ansvarlig. Dokumentasjon er viktig fordi: 1) Det sikrer at renholdet gjennomføres systematisk og ikke glemmes. 2) Det gir oversikt over ansvarsfordelingen. 3) Det er et krav i internkontrollforskriften at virksomheter dokumenterer sine HMS-rutiner. 4) Det gir grunnlag for tilsyn fra Arbeidstilsynet eller Mattilsynet. 5) Det sikrer at vikarer og nyansatte vet hva som forventes. 6) Ved avvik kan man spore tilbake og finne ut hva som gikk galt.',
    },
  ],
  keyTerms: [
    { term: 'Rengjøring', definition: 'Fjerning av synlig smuss og organisk materiale fra overflater og utstyr' },
    { term: 'Desinfisering', definition: 'Å drepe eller inaktivere de fleste sykdomsfremkallende mikroorganismer med kjemiske midler eller varme' },
    { term: 'Sterilisering', definition: 'Å drepe alle former for mikroorganismer, inkludert bakteriesporer' },
    { term: 'Autoklav', definition: 'Apparat for sterilisering med damp under høyt trykk' },
    { term: 'Renholdsplan', definition: 'Skriftlig plan som dokumenterer hva, når og hvordan renhold skal gjennomføres' },
    { term: 'Stikkboks', definition: 'Spesialbeholder for trygg kassering av skarpe gjenstander som barberblad' },
  ],
};

// ============================================================================
// Kapittel 6.3: HMS-lovgivning og risikovurdering
// ============================================================================

export const CHAPTER_FB_VG1_6_3: TextbookChapter = {
  id: 'frisor-blomster-vg1-6-3',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '6.3',
  title: 'HMS-lovgivning og risikovurdering',
  description: 'Oversikt over sentral HMS-lovgivning, risikovurdering, forebygging og internkontroll som er relevant for frisør-, blomster- og interiørbransjen.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for relevant HMS-lovgivning', 'gjennomføre enkel risikovurdering på arbeidsplassen', 'forstå kravene til internkontroll i bedriften'],
  content: [
    {
      id: 'fb-6-3-intro',
      type: 'text',
      content: `## Helse, miljø og sikkerhet på arbeidsplassen

HMS (helse, miljø og sikkerhet) er et sentralt tema i alle yrker. Norsk lovgivning stiller strenge krav til at arbeidsgivere og arbeidstakere samarbeider for å skape et trygt og forsvarlig arbeidsmiljø. For yrkesutøvere innen frisør, blomster, interiør og eksponeringsdesign er det spesielt viktig å forstå regelverket knyttet til kjemikalier, ergonomi og smittevern.

I dette kapittelet skal du lære:
- Hva HMS innebærer og hvilke lover som gjelder
- Hvordan gjennomføre en risikovurdering
- Hva internkontroll er og hvorfor det er viktig
- Roller og ansvar for HMS på arbeidsplassen`,
    },
    {
      id: 'fb-6-3-def-1',
      type: 'definition',
      title: 'HMS (Helse, miljø og sikkerhet)',
      content: `**HMS** står for helse, miljø og sikkerhet, og omfatter alt systematisk arbeid for å forebygge skader, sykdom og uhell på arbeidsplassen. HMS-arbeidet reguleres av flere lover, der **arbeidsmiljøloven** er den viktigste. Målet er å sikre et fullt forsvarlig arbeidsmiljø for alle arbeidstakere, både fysisk og psykisk.`,
    },
    {
      id: 'fb-6-3-text-1',
      type: 'text',
      title: 'Sentral HMS-lovgivning',
      content: `### Arbeidsmiljøloven

**Arbeidsmiljøloven** (lov om arbeidsmiljø, arbeidstid og stillingsvern) er den viktigste loven for HMS i Norge. Den gjelder for alle virksomheter som sysselsetter arbeidstakere.

Sentrale bestemmelser:
- **§ 1-1:** Lovens formål er å sikre et arbeidsmiljø som gir grunnlag for en helsefremmende og meningsfylt arbeidssituasjon
- **§ 3-1:** Arbeidsgiver skal sørge for systematisk HMS-arbeid
- **§ 4-1:** Krav om fullt forsvarlig arbeidsmiljø
- **§ 4-5:** Spesielle krav ved kjemisk og biologisk helsefare
- **§ 2-3:** Arbeidstakers medvirkningsplikt

### Internkontrollforskriften

**Forskrift om systematisk helse-, miljø- og sikkerhetsarbeid** (internkontrollforskriften) pålegger alle virksomheter å ha et system for internkontroll. Internkontrollen skal sikre at HMS-kravene i lovverket etterleves.

### Andre relevante forskrifter

- **Forskrift om kjemikalier på arbeidsplassen** – regulerer bruk av kjemikalier
- **Forskrift om organisering, ledelse og medvirkning** – om verneombud og arbeidsmiljøutvalg
- **Forskrift om hygienekrav** – spesielle krav til frisører og hudpleiere`,
    },
    {
      id: 'fb-6-3-def-2',
      type: 'definition',
      title: 'Risikovurdering',
      content: `En **risikovurdering** er en systematisk gjennomgang av arbeidsplassen for å identifisere farer og vurdere risikoen for at noen kan bli skadet eller syke. Risiko beregnes som en kombinasjon av **sannsynlighet** (hvor ofte noe kan skje) og **konsekvens** (hvor alvorlig skaden kan bli). Risikovurderingen danner grunnlaget for å bestemme hvilke tiltak som må iverksettes.`,
    },
    {
      id: 'fb-6-3-text-2',
      type: 'text',
      title: 'Slik gjennomfører du en risikovurdering',
      content: `### Trinn i risikovurderingen

**1. Kartlegging – Hva kan gå galt?**
- Identifiser farer og uønskede hendelser
- Eksempler: kjemikalieksponering, kutt, fall, brann, allergisk reaksjon

**2. Vurdering – Hva er risikoen?**
Risiko = sannsynlighet × konsekvens

| | Liten konsekvens | Middels konsekvens | Stor konsekvens |
|---|---|---|---|
| Stor sannsynlighet | Middels risiko | Høy risiko | Svært høy risiko |
| Middels sannsynlighet | Lav risiko | Middels risiko | Høy risiko |
| Liten sannsynlighet | Lav risiko | Lav risiko | Middels risiko |

**3. Tiltak – Hva gjør vi med risikoen?**
- Eliminere faren helt (beste løsning)
- Erstatte med noe mindre farlig (substitusjon)
- Tekniske tiltak (ventilasjon, avskjerming)
- Organisatoriske tiltak (rutiner, opplæring)
- Personlig verneutstyr (siste utvei)

**4. Oppfølging – Fungerer tiltakene?**
- Kontroller at tiltakene er iverksatt
- Evaluer om tiltakene fungerer
- Oppdater risikovurderingen regelmessig`,
    },
    {
      id: 'fb-6-3-text-3',
      type: 'text',
      title: 'Internkontroll i praksis',
      content: `### Hva skal internkontrollen inneholde?

Internkontrollforskriften stiller krav om at virksomheten skal ha:

1. **Oversikt over organisasjonen** – hvem som har ansvar for hva
2. **Kartlegging av farer** – risikovurderinger for arbeidsplassen
3. **Handlingsplan** – tiltak for å redusere risiko
4. **Rutiner** – for daglig HMS-arbeid (renhold, kjemikaliehåndtering, førstehjelp)
5. **Avviksbehandling** – system for å rapportere og håndtere avvik
6. **Opplæring** – dokumentasjon av HMS-opplæring for ansatte
7. **Regelmessig gjennomgang** – årlig revisjon av HMS-systemet

### Roller og ansvar

**Arbeidsgiver:**
- Hovedansvar for HMS-arbeidet
- Skal sørge for opplæring, utstyr og rutiner
- Skal gjennomføre risikovurderinger

**Arbeidstaker:**
- Medvirkningsplikt – skal bidra til et godt arbeidsmiljø
- Skal følge rutiner og bruke verneutstyr
- Skal melde fra om farer og avvik

**Verneombud:**
- Arbeidstakernes representant i HMS-spørsmål
- Skal varsle om farlige forhold
- Alle virksomheter med 5 eller flere ansatte skal ha verneombud`,
    },
    {
      id: 'fb-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Risikovurdering av hårfarging',
      problem: 'Gjennomfør en enkel risikovurdering for arbeidet med hårfarging i en frisørsalong.',
      solution: `**Risikovurdering: Hårfarging**

| Fare | Sannsynlighet | Konsekvens | Risiko | Tiltak |
|------|---------------|------------|--------|--------|
| Hudkontakt med hårfarge | Stor | Middels (eksem, allergi) | Høy | Bruke hansker, forkle, allergitesting |
| Innånding av kjemiske damper | Middels | Middels (hodepine, irritasjon) | Middels | God ventilasjon, avtrekk |
| Allergisk reaksjon hos kunde | Liten | Stor (alvorlig allergi) | Middels | Obligatorisk allergitest 48 timer før |
| Søl av kjemikalier | Middels | Liten (hudirritasjon) | Lav | Rutiner for opprydding, verneutstyr |
| Øyekontakt med farge | Liten | Stor (øyeskade) | Middels | Forsiktighet, øyeskyllevæske tilgjengelig |

**Konklusjon:** Hudkontakt med hårfarge har høyest risiko og krever systematisk bruk av verneutstyr. God ventilasjon er viktig for å redusere innånding av damper.`,
    },
    {
      id: 'fb-6-3-tip-1',
      type: 'tip',
      title: 'Avvikshåndtering',
      content: `Et **avvik** er en hendelse som bryter med etablerte rutiner eller som kan medføre fare for helse og sikkerhet. Eksempler: manglende bruk av hansker, søl av kjemikalier, stikkskade. Alle avvik skal rapporteres skriftlig, undersøkes og følges opp med tiltak for å hindre gjentakelse. God avvikshåndtering er en viktig del av det forebyggende HMS-arbeidet.`,
    },
    {
      id: 'fb-6-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **HMS** handler om systematisk arbeid for å forebygge skader og sykdom på arbeidsplassen
- **Arbeidsmiljøloven** og **internkontrollforskriften** er de viktigste lovene
- En **risikovurdering** kartlegger farer, vurderer risiko og foreslår tiltak
- **Internkontroll** er et system for å sikre at HMS-kravene etterleves
- Både **arbeidsgiver og arbeidstaker** har ansvar for HMS
- **Avvik** skal rapporteres og følges opp systematisk`,
    },
  ],
  exercises: [
    {
      id: 'fb-6-3-ex-1',
      type: 'multiple-choice',
      task: 'Hva er formelen for å beregne risiko i en risikovurdering?',
      options: [
        { id: 'a', text: 'Risiko = konsekvens + sannsynlighet', isCorrect: false },
        { id: 'b', text: 'Risiko = sannsynlighet × konsekvens', isCorrect: true },
        { id: 'c', text: 'Risiko = antall ansatte × antall farer', isCorrect: false },
        { id: 'd', text: 'Risiko = konsekvens ÷ sannsynlighet', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Risiko beregnes som sannsynlighet multiplisert med konsekvens. Høy sannsynlighet kombinert med stor konsekvens gir svært høy risiko, og krever umiddelbare tiltak.',
    },
    {
      id: 'fb-6-3-ex-2',
      type: 'multiple-choice',
      task: 'Hvem har hovedansvaret for HMS på arbeidsplassen?',
      options: [
        { id: 'a', text: 'Verneombudet', isCorrect: false },
        { id: 'b', text: 'Arbeidstakeren', isCorrect: false },
        { id: 'c', text: 'Arbeidsgiver', isCorrect: true },
        { id: 'd', text: 'Arbeidstilsynet', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Arbeidsgiver har hovedansvaret for HMS på arbeidsplassen. Det betyr at det er arbeidsgiveren som skal sørge for at arbeidsmiljøet er forsvarlig, at risikovurderinger gjennomføres, og at nødvendige tiltak iverksettes. Arbeidstaker har medvirkningsplikt.',
    },
    {
      id: 'fb-6-3-ex-3',
      type: 'classic',
      task: 'Forklar hva internkontroll er, og beskriv minst fire elementer som et internkontrollsystem skal inneholde.',
      hints: ['Se kravene i internkontrollforskriften'],
      solution: 'Internkontroll er et systematisk HMS-arbeid som sikrer at lovkravene etterleves i virksomheten. Et internkontrollsystem skal inneholde: 1) Oversikt over organisasjonen og ansvarsfordeling for HMS. 2) Kartlegging av farer og risikovurderinger. 3) Handlingsplan med tiltak for å redusere identifiserte risikoer. 4) Rutiner for daglig HMS-arbeid som renhold, kjemikaliehåndtering og førstehjelp. 5) System for avvikshåndtering og rapportering. 6) Dokumentasjon av HMS-opplæring for alle ansatte. 7) Plan for regelmessig gjennomgang og revisjon av HMS-systemet.',
    },
    {
      id: 'fb-6-3-ex-4',
      type: 'classic',
      task: 'Gjennomfør en enkel risikovurdering for en blomsterbutikk. Identifiser minst tre farer, vurder risikoen, og foreslå tiltak.',
      hints: ['Tenk på skarpe verktøy, vann på gulvet, tunge løft og kjølerom'],
      solution: 'Risikovurdering for blomsterbutikk: 1) Fall på vått gulv – Sannsynlighet: Middels, Konsekvens: Middels (bruddskader). Tiltak: Sklisikre sko, tørke opp vannsøl umiddelbart, sklisikre matter. 2) Kutt med kniv eller saks – Sannsynlighet: Stor, Konsekvens: Liten (småskader). Tiltak: Opplæring i riktig bruk, skarpe kniver (stumpe skjærer dårligere og sklir lettere), førstehjelputstyr tilgjengelig. 3) Tunge løft (plantekasser, jord) – Sannsynlighet: Stor, Konsekvens: Middels (ryggskader). Tiltak: Bruke tralle, løfteteknikk-opplæring, dele opp tunge lass. 4) Kulde i kjølerom – Sannsynlighet: Middels, Konsekvens: Liten (forkjølelse, stivhet). Tiltak: Begrense tid i kjølerom, bruke varme klær ved lengre opphold.',
    },
    {
      id: 'fb-6-3-ex-5',
      type: 'classic',
      task: 'Hva er et avvik, og hvorfor er det viktig å rapportere avvik på arbeidsplassen? Gi to eksempler på avvik som kan forekomme i en frisørsalong.',
      solution: 'Et avvik er en hendelse eller tilstand som bryter med etablerte rutiner, regler eller standarder, og som kan medføre fare for helse og sikkerhet. Det er viktig å rapportere avvik fordi: 1) Det gjør det mulig å identifisere svakheter i rutinene. 2) Det gir grunnlag for å iverksette forebyggende tiltak. 3) Det er et krav i internkontrollforskriften. 4) Det bidrar til læring og forbedring i virksomheten. Eksempler fra frisørsalong: a) En frisør unnlater å bruke hansker ved hårfarging – dette bryter med HMS-rutinene og kan føre til kontakteksem. b) Desinfeksjonsvæsken er utgått på dato, men brukes likevel – dette kan føre til at utstyret ikke desinfiseres tilstrekkelig og øker smitterisikoen.',
    },
  ],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet – systematisk arbeid for å forebygge skader og sykdom' },
    { term: 'Arbeidsmiljøloven', definition: 'Norges viktigste lov for arbeidsmiljø, arbeidstid og stillingsvern' },
    { term: 'Risikovurdering', definition: 'Systematisk kartlegging av farer og vurdering av risiko på arbeidsplassen' },
    { term: 'Internkontroll', definition: 'System for å sikre at HMS-krav i lovverket etterleves i virksomheten' },
    { term: 'Verneombud', definition: 'Arbeidstakernes representant i HMS-spørsmål, påkrevd i bedrifter med 5+ ansatte' },
    { term: 'Avvik', definition: 'Hendelse eller tilstand som bryter med etablerte rutiner og kan medføre fare' },
  ],
};

// ============================================================================
// Kapittel 6.4: Kjemikaliehåndtering og sikkerhetsdatablad
// ============================================================================

export const CHAPTER_FB_VG1_6_4: TextbookChapter = {
  id: 'frisor-blomster-vg1-6-4',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '6.4',
  title: 'Kjemikaliehåndtering og sikkerhetsdatablad',
  description: 'Lær om trygg håndtering av kjemikalier, sikkerhetsdatablad, faremerking og korrekt avfallshåndtering i frisør- og skjønnhetsbransjen.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke sikkerhetsdatablad i yrkesutøvelsen', 'håndtere kjemikalier forsvarlig', 'gjøre rede for faremerking og avfallshåndtering av kjemiske produkter'],
  content: [
    {
      id: 'fb-6-4-intro',
      type: 'text',
      content: `## Trygg håndtering av kjemikalier

Frisører, blomsterdekoratører og interiørarbeidere bruker daglig produkter som inneholder kjemikalier. Hårfarge, blondering, plantevernmidler, lim, lakk og rengjøringsmidler kan alle utgjøre en helsefare dersom de ikke håndteres korrekt. Sikkerhetsdatabladet er ditt viktigste verktøy for å forstå farene og beskytte deg selv.

I dette kapittelet skal du lære:
- Hva et sikkerhetsdatablad er og hvordan du leser det
- Faresymboler og faremerking etter CLP-forordningen
- Regler for lagring og oppbevaring av kjemikalier
- Korrekt avfallshåndtering av kjemisk avfall`,
    },
    {
      id: 'fb-6-4-def-1',
      type: 'definition',
      title: 'Sikkerhetsdatablad (SDS)',
      content: `Et **sikkerhetsdatablad** (SDS – Safety Data Sheet) er et standardisert dokument som gir detaljert informasjon om et kjemisk produkts egenskaper, farer og sikkerhetstiltak. Alle virksomheter som bruker kjemiske produkter er pålagt å ha oppdaterte sikkerhetsdatablad lett tilgjengelig for de ansatte. Sikkerhetsdatabladet har 16 faste punkter og skal foreligge på norsk.`,
    },
    {
      id: 'fb-6-4-text-1',
      type: 'text',
      title: 'Sikkerhetsdatabladets 16 punkter',
      content: `### Slik leser du et sikkerhetsdatablad

Sikkerhetsdatabladet er delt inn i 16 punkter. For yrkesutøvere i frisør- og skjønnhetsbransjen er noen punkter spesielt viktige:

**Viktigste punkter for daglig bruk:**

| Punkt | Innhold | Relevans |
|-------|---------|----------|
| 1 | Produktidentifikasjon | Produktnavn, bruksområde, leverandør |
| 2 | Fareidentifikasjon | Faresymboler, H- og P-setninger |
| 4 | Førstehjelptiltak | Hva du gjør ved uhell |
| 7 | Håndtering og lagring | Riktig bruk og oppbevaring |
| 8 | Eksponeringskontroll | Verneutstyr som kreves |
| 11 | Toksikologiske opplysninger | Helsefare ved eksponering |
| 13 | Avfallshåndtering | Hvordan avfall skal håndteres |

**H-setninger** (faresetninger) beskriver farene ved produktet, for eksempel:
- H315: Irriterer huden
- H317: Kan utløse allergisk hudreaksjon
- H319: Gir alvorlig øyeirritasjon
- H332: Farlig ved innånding

**P-setninger** (sikkerhetssetninger) gir råd om sikker håndtering, for eksempel:
- P261: Unngå innånding av støv/damp
- P280: Bær vernehansker/verneklær
- P302+P352: VED HUDKONTAKT: Vask med mye vann`,
    },
    {
      id: 'fb-6-4-def-2',
      type: 'definition',
      title: 'CLP-forordningen',
      content: `**CLP-forordningen** (Classification, Labelling and Packaging) er EUs regelverk for klassifisering, merking og emballering av kjemiske stoffer og blandinger. I Norge er dette innført gjennom **forskrift om klassifisering, merking og emballering av stoffer og stoffblandinger**. CLP bruker standardiserte faresymboler (piktogrammer) med rød ramme på hvit bakgrunn for å advare om farer ved kjemiske produkter.`,
    },
    {
      id: 'fb-6-4-text-2',
      type: 'text',
      title: 'Faresymboler og piktogrammer',
      content: `### CLP-faresymboler

Faresymbolene er røde diamantformede piktogrammer med svarte symboler:

**Helsefare:**
- ⚠️ **Utropstegn** – Irriterende for hud, øyne eller luftveier (mildere helsefare)
- ☠️ **Dødninghode** – Akutt giftig, kan være dødelig
- 🏥 **Helsefare (kropp)** – Alvorlig helsefare ved langvarig eksponering (f.eks. kreftfremkallende, sensibiliserende)

**Fysisk fare:**
- 🔥 **Flamme** – Brannfarlig
- 💥 **Eksploderende bombe** – Eksplosivt
- ⭕ **Flamme over sirkel** – Oksiderende (kan forårsake brann)

**Miljøfare:**
- 🌍 **Miljøskadelig** – Farlig for vannmiljøet

**Korrosiv:**
- 🧪 **Etsende** – Etsende for hud, øyne eller metaller

### Eksempler fra frisørbransjen

- **Hydrogenperoksid (oksidant):** Merket med etsende og oksiderende
- **Hårfarge med PPD:** Merket med helsefare (sensibiliserende)
- **Permanentvæske:** Merket med irriterende og helsefare
- **Aceton (neglelakkfjerner):** Merket med brannfarlig og irriterende`,
    },
    {
      id: 'fb-6-4-text-3',
      type: 'text',
      title: 'Lagring og oppbevaring',
      content: `### Regler for lagring av kjemikalier

Korrekt lagring er avgjørende for sikkerheten:

**Generelle regler:**
- Oppbevar kjemikalier i originalemballasje med original merking
- Lagre på godt ventilert sted
- Hold borte fra varmekilder og direkte sollys
- Oppbevar utilgjengelig for barn og uvedkommende
- Aldri oppbevar kjemikalier i matbeholdere

**Spesielle hensyn:**
- Brannfarlige stoffer lagres i brannskap eller egne skap
- Etsende stoffer lagres lavt (aldri over hodehøyde)
- Oksiderende stoffer holdes adskilt fra brannfarlige stoffer
- Syrer og baser lagres adskilt fra hverandre

**I frisørsalongen:**
- Hårfarger og blonderpulver lagres tørt og kjølig
- Hydrogenperoksid oppbevares i egne skap, adskilt fra brannfarlige stoffer
- Spraybokser lagres unna varme (eksplosjonsfare)
- Åpnede produkter merkes med dato for åpning`,
    },
    {
      id: 'fb-6-4-text-4',
      type: 'text',
      title: 'Avfallshåndtering av kjemikalier',
      content: `### Korrekt avfallshåndtering

Kjemisk avfall skal aldri helles i vasken eller kastes i vanlig avfall. Feil avfallshåndtering kan skade miljøet og er lovstridig.

**Rutiner for kjemisk avfall:**
- Rester av hårfarge, blonderpulver og permanentvæske samles i egne beholdere
- Beholderne skal være tydelig merket med innhold
- Avfallet hentes av godkjent avfallsmottak
- Virksomheten skal ha avtale med godkjent avfallsmottak
- Dokumentasjon av avfallshåndtering er påkrevd

**Tomemballasje:**
- Tømme beholdere helt før kassering
- Skylte beholdere som har inneholdt farlige stoffer
- Sortere etter materialtype (plast, metall, glass)
- Spraybokser kastes som spesialavfall (eksplosjonsfare)

**Substitusjonsplikten:**
- Virksomheter har plikt til å vurdere om farlige kjemikalier kan erstattes med mindre farlige alternativer
- Dette kalles substitusjonsplikten og følger av produktkontrolloven`,
    },
    {
      id: 'fb-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Tolke et sikkerhetsdatablad',
      problem: 'Du mottar et sikkerhetsdatablad for en ny hårfarge. Under punkt 2 (fareidentifikasjon) finner du: H317 – Kan utløse allergisk hudreaksjon, H319 – Gir alvorlig øyeirritasjon, P280 – Bær vernehansker/verneklær. Hva betyr dette i praksis?',
      solution: `**Tolkning:**

**H317 – Kan utløse allergisk hudreaksjon:**
- Produktet inneholder stoffer som kan gi kontaktallergi
- Allergitesting av kunden er nødvendig 48 timer før bruk
- Alle som bruker produktet må bære hansker
- Ved gjentatt eksponering uten vern øker risikoen for å utvikle allergi

**H319 – Gir alvorlig øyeirritasjon:**
- Unngå kontakt med øynene
- Ha øyeskyllevæske tilgjengelig
- Ved øyekontakt: Skyll forsiktig med vann i flere minutter

**P280 – Bær vernehansker/verneklær:**
- Engangshansker (nitril anbefales) skal brukes ved all håndtering
- Forkle bør brukes for å beskytte klær og hud
- Hanskene skal byttes mellom kunder

**Praktisk konsekvens:** Alle frisører som bruker dette produktet skal bruke nitrilhansker og forkle. Kunder må allergitestes. Øyeskyllevæske skal være tilgjengelig i nærheten av arbeidsstasjonen.`,
    },
    {
      id: 'fb-6-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Sikkerhetsdatabladet** (SDS) har 16 punkter og gir viktig informasjon om kjemiske produkter
- **H-setninger** beskriver farer, **P-setninger** gir råd om sikker håndtering
- **CLP-faresymboler** er standardiserte piktogrammer som advarer om farer
- Kjemikalier skal **lagres korrekt** i henhold til sikkerhetsdatabladet
- Kjemisk avfall skal **aldri helles i vasken**, men samles i egne beholdere
- **Substitusjonsplikten** betyr at virksomheter skal vurdere mindre farlige alternativer`,
    },
  ],
  exercises: [
    {
      id: 'fb-6-4-ex-1',
      type: 'multiple-choice',
      task: 'Hva betyr H-setningen H317?',
      options: [
        { id: 'a', text: 'Brannfarlig væske og damp', isCorrect: false },
        { id: 'b', text: 'Kan utløse allergisk hudreaksjon', isCorrect: true },
        { id: 'c', text: 'Gir alvorlige øyeskader', isCorrect: false },
        { id: 'd', text: 'Farlig ved svelging', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'H317 betyr «Kan utløse allergisk hudreaksjon». Dette er en viktig H-setning for frisørbransjen, da mange hårfargeprodukter inneholder sensibiliserende stoffer som PPD. Produkter med denne merkingen krever bruk av hansker og allergitesting av kunder.',
    },
    {
      id: 'fb-6-4-ex-2',
      type: 'multiple-choice',
      task: 'Hvordan skal rester av hårfarge håndteres?',
      options: [
        { id: 'a', text: 'Helles i vasken og skylles med vann', isCorrect: false },
        { id: 'b', text: 'Kastes i vanlig restavfall', isCorrect: false },
        { id: 'c', text: 'Samles i egne merkede beholdere for kjemisk avfall', isCorrect: true },
        { id: 'd', text: 'Tørkes opp med papir som kastes i papiravfall', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Rester av hårfarge skal samles i egne merkede beholdere for kjemisk avfall. Kjemikalier skal aldri helles i vasken eller kastes i vanlig avfall, da de kan skade miljøet og forurense vannet. Avfallet hentes av godkjent avfallsmottak.',
    },
    {
      id: 'fb-6-4-ex-3',
      type: 'classic',
      task: 'Forklar hva substitusjonsplikten innebærer, og gi et eksempel på hvordan den kan brukes i en frisørsalong.',
      hints: ['Tenk på å erstatte farlige produkter med mindre farlige alternativer'],
      solution: 'Substitusjonsplikten innebærer at virksomheter har plikt til å vurdere om kjemiske produkter kan erstattes med mindre farlige alternativer, uten at det medfører urimelige kostnader eller ulemper. Eksempel fra frisørsalong: En salong bruker en hårfarge som inneholder PPD og er merket med H317 (sensibiliserende). Substitusjonsplikten pålegger salongen å undersøke om det finnes hårfarger uten PPD eller med lavere konsentrasjon av sensibiliserende stoffer som kan gi tilsvarende resultat. Dersom slike alternativer finnes til rimelig pris og kvalitet, skal de velges fremfor det mer farlige produktet.',
    },
    {
      id: 'fb-6-4-ex-4',
      type: 'classic',
      task: 'Beskriv minst fem viktige regler for lagring av kjemikalier i en frisørsalong.',
      solution: 'Viktige lagringsregler for kjemikalier i frisørsalongen: 1) Oppbevar alltid kjemikalier i originalemballasje med original merking – aldri i matbeholdere eller umerkede flasker. 2) Lagre på godt ventilert sted, bort fra varmekilder og direkte sollys. 3) Hydrogenperoksid (oksidant) oppbevares i egne skap, adskilt fra brannfarlige stoffer, da den er oksiderende. 4) Spraybokser lagres unna varme, da de kan eksplodere ved oppvarming. 5) Etsende stoffer lagres lavt, aldri over hodehøyde, for å unngå søl i ansiktet. 6) Åpnede produkter merkes med dato for åpning. 7) Sikkerhetsdatablad for alle produkter skal være lett tilgjengelig i nærheten av lagringsstedet.',
    },
  ],
  keyTerms: [
    { term: 'Sikkerhetsdatablad (SDS)', definition: 'Standardisert dokument med 16 punkter om kjemiske produkters farer og sikkerhetstiltak' },
    { term: 'H-setninger', definition: 'Faresetninger som beskriver farene ved et kjemisk produkt (f.eks. H317, H319)' },
    { term: 'P-setninger', definition: 'Sikkerhetssetninger som gir råd om forsvarlig håndtering av kjemiske produkter' },
    { term: 'CLP-forordningen', definition: 'EU-regelverk for klassifisering, merking og emballering av kjemiske produkter' },
    { term: 'Substitusjonsplikten', definition: 'Plikt til å vurdere om farlige kjemikalier kan erstattes med mindre farlige alternativer' },
  ],
};

// ============================================================================
// Kapittel 6.5: Ergonomi og fysisk arbeidsmiljø
// ============================================================================

export const CHAPTER_FB_VG1_6_5: TextbookChapter = {
  id: 'frisor-blomster-vg1-6-5',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '6.5',
  title: 'Ergonomi og fysisk arbeidsmiljø',
  description: 'Lær om ergonomi, riktige arbeidsstillinger, forebygging av belastningsskader og tilrettelegging av arbeidsplassen for å redusere fysiske plager i frisør-, blomster- og interiørbransjen.',
  estimatedMinutes: 35,
  competenceGoals: ['gjøre rede for ergonomiske prinsipper i yrkesutøvelsen', 'forebygge belastningsskader gjennom riktige arbeidsstillinger og tilrettelegging'],
  content: [
    {
      id: 'fb-6-5-intro',
      type: 'text',
      content: `## Kroppen som arbeidsverktøy

Som frisør, blomsterdekoratør eller interiørarbeider bruker du kroppen aktivt gjennom hele arbeidsdagen. Lange dager med stående arbeid, repetitive bevegelser, tunge løft og uheldige arbeidsstillinger kan over tid føre til alvorlige belastningsskader. God ergonomi handler om å tilpasse arbeidet til kroppen – ikke omvendt.

I dette kapittelet skal du lære:
- Hva ergonomi er og hvorfor det er viktig
- Riktige arbeidsstillinger for ulike arbeidsoppgaver
- Hvordan forebygge belastningsskader og muskel-skjelettplager
- Tilrettelegging av arbeidsplassen for bedre ergonomi`,
    },
    {
      id: 'fb-6-5-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** er læren om tilpasning av arbeid, arbeidsredskaper og arbeidsmiljø til menneskets fysiske og psykiske forutsetninger. Målet med ergonomi er å forebygge helseplager og belastningsskader, og å legge til rette for effektivt og komfortabelt arbeid. Ergonomi handler om alt fra arbeidsstilling og løfteteknikk til belysning, temperatur og pauserutiner.`,
    },
    {
      id: 'fb-6-5-text-1',
      type: 'text',
      title: 'Vanlige belastningsskader i bransjen',
      content: `### Muskel- og skjelettplager

Yrkesutøvere innen frisør, blomster og interiør er spesielt utsatt for:

**Nakke- og skulderplager:**
- Forårsaket av arbeid med armene hevet over skulderhøyde
- Vanlig hos frisører ved klipping og føning
- Kan gi spenningshodepine og stivhet

**Ryggplager:**
- Forårsaket av langvarig stående arbeid og tunge løft
- Vanlig hos blomsterdekoratører ved håndtering av plantekasser og jord
- Forverres av bøying og vridning av ryggen

**Hånd- og håndleddsplager:**
- Karpaltunnelsyndrom – press på nerver i håndleddet
- Seneslidebetennelse – betennelse i sener
- Forårsaket av repetitive bevegelser som klipping, føning og binding

**Fot- og leggplager:**
- Forårsaket av langvarig stående arbeid
- Kan gi hovne ben, åreknuter og smerter
- Forverres av uegnet fottøy`,
    },
    {
      id: 'fb-6-5-text-2',
      type: 'text',
      title: 'Riktige arbeidsstillinger',
      content: `### Ergonomiske prinsipper

**Stående arbeid (frisør, blomster):**
- Stå med vekten jevnt fordelt på begge ben
- Hold ryggen rett og skuldrene avslappet
- Arbeid så nær kroppen som mulig
- Bruk fotstøtte eller anti-trøtthetsmatte
- Varier mellom stående og sittende arbeid der det er mulig

**Armarbeid (klipping, føning, binding):**
- Hold albuene under skulderhøyde
- Juster kundestoler og bord til riktig arbeidshøyde
- Ta hyppige pauser ved repetitivt arbeid
- Varier grep og håndstilling

**Løfteteknikk:**
- Bøy i knærne, ikke i ryggen
- Hold lasten nær kroppen
- Unngå å vri ryggen mens du løfter
- Be om hjelp ved tunge eller uhåndterlige gjenstander
- Bruk hjelpemidler som tralle og løfteutstyr

**Sittende arbeid (resepsjon, design):**
- Juster stolen slik at føttene er flatt på gulvet
- Hold ryggen støttet av stolryggen
- Skjermen skal være i øyehøyde
- Hold underarmene vannrett ved tastaturbruk`,
    },
    {
      id: 'fb-6-5-text-3',
      type: 'text',
      title: 'Tilrettelegging og forebygging',
      content: `### Tilrettelegging av arbeidsplassen

**Arbeidshøyde:**
- Frisørstoler skal kunne justeres i høyden etter frisørens høyde
- Arbeidsbord i blomsterbutikk bør ha regulerbar høyde
- Generell anbefaling: Arbeidsflaten skal være i albuehøyde

**Belysning:**
- God belysning reduserer anstrengelse av øynene og nakken
- Unngå gjenskinn og skygger
- Punktbelysning ved presisjonarbeid

**Gulvunderlag:**
- Anti-trøtthetssmatter ved stående arbeidsstasjoner
- Sklisikre gulv
- Unngå harde gulvflater uten demping

### Forebyggende tiltak

**Pauser og variasjon:**
- Ta korte pauser (mikropauser) regelmessig – 30 sekunders pause hvert 20. minutt
- Varier arbeidsoppgavene gjennom dagen
- Strekk- og bevegelsesøvelser mellom kunder

**Tøyning og trening:**
- Daglige tøyeøvelser for nakke, skuldre og rygg
- Styrketrening for å forebygge belastningsskader
- Oppvarming før tunge løft

**Utstyr og hjelpemidler:**
- Ergonomiske sakser med myk grep og riktig størrelse
- Lettvekts føner med ergonomisk utforming
- Ståstol eller sittekrakk for variasjon
- Tralle for transport av tunge gjenstander`,
    },
    {
      id: 'fb-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Ergonomisk tilrettelegging for frisør',
      problem: 'En frisør opplever smerter i nakke og skuldre etter lange arbeidsdager. Hvilke tiltak kan gjøres for å forbedre situasjonen?',
      solution: `**Tiltak for å redusere nakke- og skulderplager:**

1. **Juster arbeidshøyden:** Still kundestoler høyere slik at frisøren slipper å løfte armene over skulderhøyde. En tommelfingerregel er at kundens hode skal være omtrent i brysthøyde på frisøren.

2. **Bruk ergonomiske verktøy:** Velg lette sakser med myke grep og lettvekts føner. Ergonomisk utformede verktøy reduserer belastningen.

3. **Ta mikropauser:** Senk armene og rist dem ut mellom kunder. 30 sekunders pause hvert 20. minutt gjør stor forskjell over en hel arbeidsdag.

4. **Varier arbeidsoppgavene:** Veksle mellom klipping, farging, vask og administrative oppgaver for å unngå ensidig belastning.

5. **Tøyeøvelser:** Gjør daglige tøyeøvelser for nakke og skuldre – for eksempel å rulle skuldrene bakover, tøye nakken til sidene og strekke armene over hodet.

6. **Stå riktig:** Stå med jevnt fordelt vekt, avslappede skuldre og rett rygg. Bruk anti-trøtthetsmatte.`,
    },
    {
      id: 'fb-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ergonomi** handler om å tilpasse arbeidet til kroppens forutsetninger
- Vanlige **belastningsskader** inkluderer plager i nakke, skuldre, rygg, hender og føtter
- **Riktige arbeidsstillinger** forebygger plager – hold armene lavt, ryggen rett og bruk god løfteteknikk
- **Tilrettelegging** av arbeidsplassen med regulerbar høyde, god belysning og dempende underlag er viktig
- **Pauser, variasjon og tøying** er effektive tiltak for å forebygge belastningsskader`,
    },
  ],
  exercises: [
    {
      id: 'fb-6-5-ex-1',
      type: 'multiple-choice',
      task: 'Hva er karpaltunnelsyndrom?',
      options: [
        { id: 'a', text: 'En hudlidelse forårsaket av kjemikalier', isCorrect: false },
        { id: 'b', text: 'En nerve i håndleddet som klemmes sammen ved repetitive bevegelser', isCorrect: true },
        { id: 'c', text: 'En type allergi mot latekshansker', isCorrect: false },
        { id: 'd', text: 'En muskelskade i skulderen', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Karpaltunnelsyndrom oppstår når nerven som passerer gjennom karpaltunnelen i håndleddet blir klemt. Dette gir smerte, nummenhet og prikking i fingrene. Tilstanden er vanlig hos yrkesutøvere som utfører repetitive håndbevegelser, som frisører. Forebygging inkluderer pauser, tøying og ergonomiske verktøy.',
    },
    {
      id: 'fb-6-5-ex-2',
      type: 'classic',
      task: 'Beskriv riktig løfteteknikk og forklar hvorfor det er viktig å løfte korrekt. Gi eksempler på situasjoner i blomsterbransjen der løfteteknikk er spesielt viktig.',
      hints: ['Tenk på knær, rygg og avstand til kroppen'],
      solution: 'Riktig løfteteknikk: 1) Stå nær gjenstanden med bena i skulderbreddes avstand. 2) Bøy i knærne, ikke i ryggen. 3) Grip fast rundt gjenstanden. 4) Hold lasten nær kroppen. 5) Løft med beina, hold ryggen rett. 6) Unngå å vri kroppen mens du løfter. 7) Sett ned ved å bøye i knærne igjen. Det er viktig å løfte korrekt fordi feil løfteteknikk kan føre til akutte ryggskader (prolaps) eller kroniske ryggplager over tid. I blomsterbransjen er dette spesielt viktig ved: løfting av tunge plantekasser, bæring av sekker med jord og grus, flytting av store vaser og beholdere, og lossing av vareleveranser. Bruk tralle og be om hjelp ved tunge eller uhåndterlige gjenstander.',
    },
    {
      id: 'fb-6-5-ex-3',
      type: 'classic',
      task: 'Lag en plan for ergonomiske tiltak i en frisørsalong. Planen skal dekke arbeidsstilling, utstyr, pauser og øvelser.',
      solution: 'Ergonomiplan for frisørsalong: Arbeidsstilling: Juster kundestoler slik at frisørens armer ikke må løftes over skulderhøyde. Stå med jevnt fordelt vekt og avslappede skuldre. Bruk ståstol eller sittekrakk ved lengre behandlinger som farging. Utstyr: Bruk ergonomiske sakser med riktig størrelse og mykt grep. Velg lettvekts føner. Ha anti-trøtthetssmatter ved alle arbeidsstasjoner. Sørg for god belysning uten gjenskinn. Pauser: Innfør mikropauser på 30 sekunder hvert 20. minutt. Ta en lengre pause (10–15 minutter) annenhver time. Varier arbeidsoppgaver gjennom dagen. Øvelser: Skulderrull 10 ganger bakover og fremover mellom kunder. Nakketøying til hver side, hold 15 sekunder. Håndleddstøying – strekk fingrene bakover, hold 15 sekunder. Ryggstrekk – strekk armene over hodet og bøy til sidene.',
    },
  ],
  keyTerms: [
    { term: 'Ergonomi', definition: 'Læren om tilpasning av arbeid og arbeidsredskaper til menneskets fysiske forutsetninger' },
    { term: 'Belastningsskade', definition: 'Skade som oppstår ved langvarig eller gjentatt fysisk belastning på kroppen' },
    { term: 'Karpaltunnelsyndrom', definition: 'Tilstand der nerven i håndleddet klemmes sammen, gir smerte og nummenhet i fingrene' },
    { term: 'Mikropauser', definition: 'Korte pauser (30 sekunder) med jevne mellomrom for å forebygge belastning' },
  ],
};

// ============================================================================
// Kapittel 6.6: Allergier, eksem og yrkesrelaterte plager
// ============================================================================

export const CHAPTER_FB_VG1_6_6: TextbookChapter = {
  id: 'frisor-blomster-vg1-6-6',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '6.6',
  title: 'Allergier, eksem og yrkesrelaterte plager',
  description: 'Lær om kontaktallergi, yrkeseksem, luftveisplager og andre yrkesrelaterte helseproblemer i frisør-, blomster- og interiørbransjen, samt hvordan de forebygges.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for vanlige yrkesrelaterte plager i bransjen', 'beskrive tiltak for å forebygge allergier og yrkessykdommer'],
  content: [
    {
      id: 'fb-6-6-intro',
      type: 'text',
      content: `## Når yrket gjør deg syk

Frisører, blomsterdekoratører og interiørarbeidere er blant yrkesgruppene med høyest forekomst av yrkesrelaterte hudplager og luftveislidelser. Daglig kontakt med kjemikalier, planter, støv og fuktighet øker risikoen for å utvikle allergier og eksem. Forebygging er avgjørende – mange av disse plagene er kroniske når de først har utviklet seg.

I dette kapittelet skal du lære:
- Hva kontaktallergi og irritasjonseksem er
- Vanlige allergener i frisør- og blomsterbransjen
- Luftveisplager og astma knyttet til yrket
- Forebyggende tiltak og rettigheter ved yrkessykdom`,
    },
    {
      id: 'fb-6-6-def-1',
      type: 'definition',
      title: 'Kontaktallergi',
      content: `**Kontaktallergi** er en immunreaksjon som oppstår når huden gjentatte ganger utsettes for et bestemt stoff (allergen). Immunsystemet «lærer» å reagere på stoffet, og ved fremtidig kontakt oppstår en allergisk reaksjon med rødhet, kløe, hevelse og blemmer. Kontaktallergi er varig – når den først er utviklet, vil reaksjonen oppstå hver gang man utsettes for stoffet, selv i svært små mengder.`,
    },
    {
      id: 'fb-6-6-def-2',
      type: 'definition',
      title: 'Irritasjonseksem',
      content: `**Irritasjonseksem** (irritativt kontakteksem) er en hudreaksjon som oppstår ved direkte kontakt med irriterende stoffer, uten at immunsystemet er involvert. I motsetning til kontaktallergi kan irritasjonseksem ramme alle som utsettes for stoffet i tilstrekkelig mengde. Vanlige årsaker er hyppig håndvask, kjemikalier og fuktarbeid. Symptomene er tørr, rød, oppsprukket hud som kan klø og svie.`,
    },
    {
      id: 'fb-6-6-text-1',
      type: 'text',
      title: 'Vanlige allergener i bransjen',
      content: `### Allergener i frisørfaget

**Kjemiske allergener:**
- **PPD (para-fenylendiamin):** Det vanligste allergenet i oksidative hårfarger. Kan gi alvorlig kontaktallergi.
- **Persulfater:** Finnes i blonderpulver og kan gi både hudallergi og luftveisreaksjoner.
- **Konserveringsmidler:** Metylisotiazolinon (MI) og andre konserveringsmidler i sjampo og produkter.
- **Parfyme:** Finnes i mange hårprodukter og kan utløse allergi.
- **Glykolsyre og thioglykolat:** Brukes i permanentvæske.

### Allergener i blomsterfaget

**Planteallergener:**
- **Primin:** Finnes i primula (stueblomst) og kan gi alvorlig kontaktallergi.
- **Alstroemeria:** En populær snittblomst som inneholder tulipalin, et potent allergen.
- **Krysantemum:** Inneholder seskviterpenlaktoner som gir kontaktallergi.
- **Tulipaner:** Inneholder tuliposide A, spesielt i løk og stilk.
- **Lateks i plantesaft:** Mange planter har melkesaft som er irriterende.

### Allergener i interiørbransjen

- **Lim og maling:** Inneholder isocyanater og epoksy som er sterke allergener
- **Trestøv:** Kan gi luftveisallergi og astma
- **Tekstiler:** Fargestoffer og behandlingsmidler kan gi kontaktallergi`,
    },
    {
      id: 'fb-6-6-text-2',
      type: 'text',
      title: 'Yrkeseksem og hudplager',
      content: `### Typer yrkeseksem

**Irritasjonseksem (vanligst):**
- Oppstår ved gjentatt eksponering for irriterende stoffer
- Vanligst på hendene (håndeksem)
- Hyppig håndvask, fuktarbeid og kjemikaliekontakt er hovedårsaker
- Kan ramme alle, men noen er mer disponert (personer med atopisk eksem)

**Allergisk kontakteksem:**
- Oppstår etter sensibilisering mot et bestemt allergen
- Utvikles over tid (dager til uker etter første kontakt)
- Gir kløe, rødhet, blemmer og hevelse
- Varig tilstand – ingen kur, bare unngåelse

### Risikofaktorer

- Atopisk disposisjon (tidligere eksem, astma eller høysnue i familien)
- Hyppig våtarbeid (mer enn 2 timer daglig med våte hender)
- Manglende bruk av verneutstyr
- Skadet hudbarriere (sprekker, kutt)
- Gjentatt eksponering uten beskyttelse

### Symptomer å være oppmerksom på

- Tørr, rød og oppsprukket hud, spesielt på hendene
- Kløe som ikke gir seg
- Blemmer eller utslett
- Hud som ikke leges til tross for fuktighetskrem
- Plager som forverres i arbeidstiden og bedres i ferier`,
    },
    {
      id: 'fb-6-6-text-3',
      type: 'text',
      title: 'Luftveisplager og astma',
      content: `### Yrkesrelaterte luftveisplager

I tillegg til hudplager er luftveisplager vanlig i bransjen:

**Yrkesastma:**
- Kan utløses av persulfater i blonderpulver (frisører)
- Trestøv og plantestøv (blomster, interiør)
- Isocyanater i lim og lakk (interiør)
- Symptomer: tung pust, piping i brystet, hoste

**Rhinitt (neseplaiger):**
- Rennende eller tett nese på jobb
- Nysing ved eksponering for støv eller kjemiske damper
- Kan være forløper til yrkesastma

**Irritasjon av luftveiene:**
- Hoste, sår hals og heshet
- Forårsaket av kjemiske damper (hårspray, permanentvæske, lakk)
- God ventilasjon er det viktigste forebyggende tiltaket

### Viktig

Dersom du opplever luftveisplager som forverres på jobb og bedres i ferier, bør du kontakte lege og bedriftshelsetjenesten. Tidlig oppdagelse og forebygging er viktig for å unngå kronisk yrkesastma.`,
    },
    {
      id: 'fb-6-6-text-4',
      type: 'text',
      title: 'Forebygging og tiltak',
      content: `### Slik forebygger du yrkesrelaterte plager

**Hudvern:**
- Bruk hansker ved alt arbeid med kjemikalier (nitrilhansker anbefales fremfor lateks)
- Skift hansker mellom kunder og oppgaver
- Bruk beskyttelseskrem (barrierekrem) før arbeidsstart
- Smør hendene med fuktighetskrem etter håndvask
- Unngå unødvendig hyppig håndvask – bruk hånddesinfeksjon der det er tilstrekkelig

**Luftveisvern:**
- Sørg for god ventilasjon og avtrekk ved alle stasjoner
- Bruk punktavsug ved blondering og farging
- Bland kjemikalier i godt ventilerte områder
- Bruk åndedrettsvern ved spesielt støvende arbeid

**Generelle tiltak:**
- Allergitest av hårfarger på kunder (og på deg selv som ny i yrket)
- Rapporter tidlige symptomer til lege og arbeidsgiver
- Følg substitusjonsplikten – velg mildere produkter der det er mulig
- Delta på HMS-kurs og hold deg oppdatert om nye produkter

### Rettigheter ved yrkessykdom

Kontakteksem og yrkesastma kan godkjennes som **yrkessykdom** av NAV dersom:
- Sykdommen er forårsaket av arbeidet
- Du har vært eksponert for kjente risikofaktorer
- Sykdommen er dokumentert av lege

Ved godkjent yrkessykdom har du rett til dekning av behandlingsutgifter og eventuell menerstatning.`,
    },
    {
      id: 'fb-6-6-warning-1',
      type: 'warning',
      title: 'Viktig om atopisk disposisjon',
      content: `Personer med **atopisk eksem**, astma eller høysnue i familien har økt risiko for å utvikle yrkesrelaterte hudplager. Dersom du har atopisk disposisjon, er det ekstra viktig å beskytte huden fra første dag i yrket. Bruk alltid hansker, fuktighetskrem og beskyttelseskrem. Snakk med bedriftshelsetjenesten om tilrettelegging.`,
    },
    {
      id: 'fb-6-6-example-1',
      type: 'example',
      title: 'Eksempel: Mistanke om yrkeseksem',
      problem: 'En frisørlærling opplever tørre, røde og sprukne hender etter tre måneder i lære. Plagene er verst på fredager og bedres i helgene. Hva bør gjøres?',
      solution: `**Vurdering og tiltak:**

Symptomene tyder på begynnende **irritasjonseksem** (håndeksem), som er svært vanlig blant frisørlærlinger.

**Umiddelbare tiltak:**
1. Oppsøk lege for diagnose og eventuell behandling
2. Informer arbeidsgiver og verneombud
3. Kontakt bedriftshelsetjenesten

**Tiltak på arbeidsplassen:**
4. Bruk nitrilhansker ved alt våtarbeid og kjemikaliebruk
5. Smør hendene med fuktighetskrem etter hver håndvask
6. Bruk barrierekrem før arbeidsstart
7. Reduser antall håndvask – bruk hånddesinfeksjon der det er tilstrekkelig
8. Unngå bruk av ringer som holder fukt mot huden

**Oppfølging:**
9. Følg opp hos lege etter 2–4 uker
10. Vurder allergitest (lapptest) dersom plagene vedvarer
11. Dokumenter plagene som avvik i HMS-systemet
12. Vurder om noen produkter kan byttes ut med mildere alternativer

Dersom plagene ikke bedres, kan det være nødvendig å vurdere tilrettelegging av arbeidsoppgaver eller i verste fall omstilling til annet arbeid.`,
    },
    {
      id: 'fb-6-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kontaktallergi** er en varig immunreaksjon mot bestemte stoffer
- **Irritasjonseksem** kan ramme alle ved gjentatt eksponering for irriterende stoffer
- Vanlige **allergener** i bransjen inkluderer PPD, persulfater, primin og plantesaft
- **Luftveisplager** og yrkesastma kan utløses av kjemiske damper og støv
- **Forebygging** med hansker, fuktighetskrem, god ventilasjon og substitusjon er avgjørende
- **Yrkessykdom** kan godkjennes av NAV og gir rett til dekning av utgifter`,
    },
  ],
  exercises: [
    {
      id: 'fb-6-6-ex-1',
      type: 'multiple-choice',
      task: 'Hva er forskjellen mellom kontaktallergi og irritasjonseksem?',
      options: [
        { id: 'a', text: 'Det er ingen forskjell, det er to navn på samme tilstand', isCorrect: false },
        { id: 'b', text: 'Kontaktallergi involverer immunsystemet og er varig, irritasjonseksem er en direkte hudreaksjon', isCorrect: true },
        { id: 'c', text: 'Irritasjonseksem er alvorligere enn kontaktallergi', isCorrect: false },
        { id: 'd', text: 'Kontaktallergi rammer bare barn, irritasjonseksem rammer bare voksne', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Kontaktallergi er en immunologisk reaksjon der immunsystemet reagerer på et bestemt allergen. Den er varig og kan ikke kureres, bare forebygges ved å unngå allergenet. Irritasjonseksem oppstår ved direkte skade på huden fra irriterende stoffer, uten at immunsystemet er involvert. Det kan ramme alle ved tilstrekkelig eksponering og kan gå tilbake dersom eksponeringen opphører.',
    },
    {
      id: 'fb-6-6-ex-2',
      type: 'multiple-choice',
      task: 'Hvilket stoff er det vanligste allergenet i oksidative hårfarger?',
      options: [
        { id: 'a', text: 'Hydrogenperoksid', isCorrect: false },
        { id: 'b', text: 'Ammoniak', isCorrect: false },
        { id: 'c', text: 'PPD (para-fenylendiamin)', isCorrect: true },
        { id: 'd', text: 'Keratin', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'PPD (para-fenylendiamin) er det vanligste allergenet i oksidative hårfarger. Det er en sterk sensibilisator som kan utløse alvorlig kontaktallergi. Derfor er allergitesting (prikktest) påkrevd 48 timer før all farging med oksidative farger.',
    },
    {
      id: 'fb-6-6-ex-3',
      type: 'classic',
      task: 'Beskriv minst fem tiltak en frisør kan gjøre for å forebygge yrkeseksem på hendene.',
      hints: ['Tenk på hansker, hudpleie, håndvask og produktvalg'],
      solution: 'Tiltak for å forebygge yrkeseksem: 1) Bruk nitrilhansker ved alt arbeid med kjemikalier og våtarbeid – nitril anbefales fremfor lateks da lateks selv kan gi allergi. 2) Smør hendene med fuktighetskrem etter hver håndvask for å gjenopprette hudbarrieren. 3) Bruk barrierekrem (beskyttelseskrem) før arbeidsstart for å beskytte huden mot irritanter. 4) Reduser antall håndvask – bruk alkoholbasert hånddesinfeksjon der det er tilstrekkelig, da dette er skånsomt mot huden. 5) Unngå å bære ringer og armbånd som holder fuktighet mot huden. 6) Bytt hansker mellom kunder og oppgaver for å unngå langvarig fuktig miljø inne i hanskene. 7) Bruk milde, parfymefrie produkter til håndvask. 8) Følg substitusjonsplikten – velg hårfargeprodukter med lavere allergeninnhold der det er mulig.',
    },
    {
      id: 'fb-6-6-ex-4',
      type: 'classic',
      task: 'En blomsterdekoratør har utviklet kontaktallergi mot alstroemeria. Forklar hva dette betyr i praksis, og hvilke konsekvenser det kan ha for arbeidet.',
      solution: 'Kontaktallergi mot alstroemeria betyr at blomsterdekoratørens immunsystem reagerer på tulipalin, som finnes i alstroemeria-blomster. I praksis betyr dette: 1) Dekoratøren vil få allergisk reaksjon (rødhet, kløe, blemmer) hver gang hen håndterer alstroemeria, selv med kort kontakt. 2) Allergien er varig og kan ikke kureres. 3) Tiltak i arbeidet: Bruke hansker ved all håndtering av alstroemeria, eller helt unngå å arbeide med denne blomsten. 4) Kryssreaksjoner kan forekomme med andre planter i liljeefamilien som inneholder lignende stoffer. 5) Konsekvenser: Alstroemeria er en av de mest populære snittblomstene, så dette kan begrense arbeidsoppgavene betydelig. 6) Dekoratøren bør kontakte lege og bedriftshelsetjenesten for dokumentasjon. 7) Tilstanden kan godkjennes som yrkessykdom av NAV. 8) Arbeidsgiver har plikt til å tilrettelegge, for eksempel ved å la andre kollegaer håndtere alstroemeria.',
    },
  ],
  keyTerms: [
    { term: 'Kontaktallergi', definition: 'Varig immunreaksjon som oppstår ved gjentatt hudkontakt med et allergen' },
    { term: 'Irritasjonseksem', definition: 'Hudreaksjon ved direkte kontakt med irriterende stoffer, uten immunologisk mekanisme' },
    { term: 'PPD', definition: 'Para-fenylendiamin – det vanligste allergenet i oksidative hårfarger' },
    { term: 'Yrkesastma', definition: 'Astma forårsaket av stoffer man utsettes for på arbeidsplassen' },
    { term: 'Barrierekrem', definition: 'Beskyttelseskrem som påføres huden før arbeid for å beskytte mot irritanter' },
    { term: 'Yrkessykdom', definition: 'Sykdom forårsaket av arbeidet som kan godkjennes av NAV og gi rett til erstatning' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const FRISOR_BLOMSTER_VG1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FB_VG1_6_1,
  CHAPTER_FB_VG1_6_2,
  CHAPTER_FB_VG1_6_3,
  CHAPTER_FB_VG1_6_4,
  CHAPTER_FB_VG1_6_5,
  CHAPTER_FB_VG1_6_6,
];

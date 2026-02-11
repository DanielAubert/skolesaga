/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Entreprenørskap og bedriftsutvikling 1 (VG2) - DEL 4
 * Seksjon 4: Markedsføring og salg (Kapittel 4.1–4.5)
 *
 * LK20 kompetansemål:
 * - utvikle og presentere ein marknadsplan for eit produkt eller ei teneste
 * - gjere greie for korleis marknadsføring kan påverke forbrukarar og samfunn
 * - bruke digitale verktøy i marknadsføring og sal
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Grunnleggende markedsføring
// ============================================================================

export const CHAPTER_ENTREBED_1_4_1: TextbookChapter = {
  id: 'entrebed-1-4-1',
  courseId: 'entrebed-1',
  chapterNumber: '4.1',
  title: 'Grunnleggende markedsføring',
  description: 'Markedsføringsmiksen (4P), markedsplan og hvordan bedrifter bruker markedsføring strategisk for å nå kundene.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utvikle og presentere ein marknadsplan for eit produkt eller ei teneste',
    'gjere greie for korleis marknadsføring kan påverke forbrukarar og samfunn',
  ],
  content: [
    {
      id: 'eb-4-1-intro',
      type: 'text',
      content: `## Hva er markedsføring?

Mange tror markedsføring bare handler om reklame — en TV-spot, en Instagram-annonse eller en plakat på bussen. Men markedsføring er mye mer enn det. Markedsføring handler om å **forstå kundens behov** og skape et tilbud som dekker dette behovet bedre enn konkurrentene.

Peter Drucker, en av historiens mest innflytelsesrike ledelsestenkere, sa: «Målet med markedsføring er å forstå kunden så godt at produktet selger seg selv.» Denne tankegangen er kjernen i moderne markedsføring — det starter med kunden, ikke med produktet.

For en gründer er markedsføring helt avgjørende. Du kan ha verdens beste produkt, men hvis ingen vet om det, eller det ikke når riktig målgruppe, vil bedriften mislykkes.

**I dette kapittelet skal du lære:**
- Hva markedsføring er og hvorfor det er viktig for gründere
- Markedsføringsmiksen (de 4 P-ene)
- Hvordan du lager en markedsplan
- Forskjellen mellom markedsorientert og produktorientert tilnærming`,
    },
    {
      id: 'eb-4-1-def-1',
      type: 'definition',
      title: 'Markedsføring',
      content: `**Markedsføring** er alle aktiviteter en bedrift gjennomfører for å identifisere, skape, kommunisere og levere verdi til kundene — på en måte som også er lønnsom for bedriften.

Markedsføring omfatter:
- **Markedsanalyse:** Forstå markedet, kundene og konkurrentene
- **Segmentering og målgruppevalg:** Identifisere hvem du vil nå
- **Posisjonering:** Bestemme hvordan du vil oppfattes i markedet
- **Markedsføringsmiks:** Utforme tilbudet (produkt, pris, plass, påvirkning)
- **Gjennomføring og evaluering:** Sette planer ut i livet og måle resultater

**To tilnærminger:**
- *Produktorientert:* Bedriften lager et produkt først og prøver deretter å selge det. Risiko: Ingen vil ha det.
- *Markedsorientert:* Bedriften starter med å undersøke hva kundene trenger, og utvikler deretter et produkt som dekker dette behovet. Denne tilnærmingen gir langt større sjanse for suksess.`,
    },
    {
      id: 'eb-4-1-def-2',
      type: 'definition',
      title: 'Markedsføringsmiksen — de 4 P-ene',
      content: `**Markedsføringsmiksen** (marketing mix) er de fire verktøyene en bedrift bruker for å nå sin målgruppe. Modellen kalles ofte «de 4 P-ene» fordi alle elementene starter med bokstaven P:

**1. Produkt (Product)**
Hva du selger — varen eller tjenesten med alle dens egenskaper, kvalitet, design, emballasje og merkenavn. Produktet må dekke et reelt behov hos kunden.

**2. Pris (Price)**
Hva kunden betaler. Prisen må reflektere verdien kunden opplever, dekke bedriftens kostnader og gi fortjeneste. Prisstrategier inkluderer penetrasjonsprising (lav pris for å vinne markedsandel), skumming (høy pris ved lansering) og verdibasert prising.

**3. Plass (Place)**
Hvordan og hvor produktet er tilgjengelig for kunden. Dette omfatter distribusjonskanaler (nettbutikk, fysisk butikk, forhandlere), logistikk og lagerstyring. Kundene må enkelt kunne finne og kjøpe produktet.

**4. Påvirkning (Promotion)**
Hvordan du kommuniserer med kunden. Dette inkluderer reklame, sosiale medier, PR, salgsfremmende tiltak, personlig salg og direkte markedsføring. Målet er å gjøre produktet kjent og skape kjøpslyst.

De fire P-ene henger sammen og må sees i sammenheng. Et luksusprodukt med høy pris bør ikke selges i lavprisbutikker — det sender motstridende signaler.`,
    },
    {
      id: 'eb-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Markedsføringsmiksen for et elevbedrift-produkt',
      problem: 'En elevbedrift har utviklet en bærekraftig vannflaske laget av resirkulert havplast. Beskriv en mulig markedsføringsmiks for dette produktet.',
      solution: `**Produkt:**
- Vannflaske i resirkulert havplast (500 ml og 750 ml)
- Moderne, minimalistisk design i fire farger
- BPA-fri, lekksikker, med karabinkrok
- Hver flaske fjerner tilsvarende 10 plastflasker fra havet
- Merkenavn: «OceanBottle» — tydelig kobling til bærekraft

**Pris:**
- 299 kr (premium-segment, men lavere enn konkurrenter som Ocean Bottle og S'well)
- Verdibasert prising: kunden betaler for bærekraft-verdien, ikke bare flasken
- 10 % rabatt ved kjøp av 3 eller flere (skoler, bedrifter)

**Plass:**
- Egen nettbutikk (Shopify) med Vipps-betaling
- Instagram-butikk med direkte kjøp
- Fysisk salg på skolemarkeder, miljøfestivaler og pop-up-stands
- Samarbeid med Zero Waste-butikker for distribusjon

**Påvirkning:**
- Instagram og TikTok med visuelt innhold om havforurensning og bærekraft
- Samarbeid med lokale miljøinfluensere
- Pressemelding til lokalavisen om elevbedriften
- Demonstrasjon av produktet på skolens fellessamlinger
- Deltakelse i Ungt Entreprenørskap-arrangementer

Markedsføringsmiksen henger godt sammen: premium bærekraftsprodukt, moderat høy pris, distribusjon i kanaler der miljøbevisste kunder befinner seg, og kommunikasjon som understreker bærekraftsverdien.`,
    },
    {
      id: 'eb-4-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-4-1-oppg-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står de 4 P-ene i markedsføringsmiksen for?',
        options: [
          { id: 'a', text: 'Produkt, Pris, Plass, Påvirkning', isCorrect: true },
          { id: 'b', text: 'Profitt, Planlegging, Produksjon, Personal', isCorrect: false },
          { id: 'c', text: 'Posisjonering, Pris, Promotering, Profil', isCorrect: false },
          { id: 'd', text: 'Produkt, Profitt, Posisjonering, Påvirkning', isCorrect: false },
        ],
        solution: 'De 4 P-ene er: Produkt (hva du selger), Pris (hva det koster), Plass (hvor det selges) og Påvirkning (hvordan du kommuniserer). Disse fire elementene utgjør markedsføringsmiksen og må tilpasses hverandre for å skape et helhetlig tilbud.',
      },
    },
    {
      id: 'eb-4-1-text-1',
      type: 'text',
      content: `## Markedsplanen

En **markedsplan** er et dokument som beskriver bedriftens markedsføringsstrategi og de konkrete tiltakene som skal gjennomføres i en bestemt periode. For en gründer er markedsplanen et uunnværlig verktøy — den sikrer at markedsføringsarbeidet er gjennomtenkt, målrettet og målbart.

### Elementer i en markedsplan

**1. Situasjonsanalyse**
Hvor står bedriften nå? Analyser markedet, konkurrentene, målgruppen og bedriftens styrker og svakheter. Bruk verktøy som SWOT-analyse og konkurrentanalyse.

**2. Mål**
Hva vil du oppnå? Målene bør være **SMART**: Spesifikke, Målbare, Ambisiøse, Realistiske og Tidsbestemte. Eksempel: «Oppnå 500 følgere på Instagram innen 3 måneder» eller «Selge 200 enheter første halvår».

**3. Målgruppe**
Hvem er kundene dine? Beskriv målgruppen så konkret som mulig: alder, kjønn, interesser, verdier, kjøpsvaner og hvor de befinner seg (digitalt og fysisk).

**4. Strategi og posisjonering**
Hvordan vil du oppfattes i markedet? Hva gjør deg annerledes enn konkurrentene? Posisjoneringen bør være tydelig og konsistent.

**5. Markedsføringsmiks (4P)**
Beskriv produkt, pris, distribusjon og kommunikasjonstiltak i detalj.

**6. Budsjett**
Hvor mye penger har du til rådighet, og hvordan fordeler du midlene mellom ulike tiltak?

**7. Tidsplan**
Når skal de ulike tiltakene gjennomføres? Lag en konkret tidsplan med milepæler.

**8. Evaluering**
Hvordan skal du måle om markedsplanen fungerer? Definer KPI-er (Key Performance Indicators) og bestem hvordan og når du evaluerer.`,
    },
    {
      id: 'eb-4-1-tip-1',
      type: 'tip',
      title: 'Tips for elevbedrifter',
      content: `Når du lager markedsplan for elevbedriften, trenger den ikke være 50 sider lang. En god markedsplan for en elevbedrift kan være 3–5 sider og inneholde:

1. **Kort situasjonsanalyse** — Hvem er konkurrentene? Hva gjør dere annerledes?
2. **Målgruppe** — Beskriv en typisk kunde i detalj
3. **3 konkrete mål** — Med tall og tidsfrister
4. **4P-en** — Produkt, pris, distribusjon og kommunikasjon
5. **Budsjett** — Selv med lite penger kan mye gjøres gratis (sosiale medier, PR)
6. **Tidsplan** — Uke for uke de neste 2–3 månedene

Husk: En enkel plan som gjennomføres er bedre enn en perfekt plan som bare ligger i en skuff.`,
    },
    {
      id: 'eb-4-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-4-1-oppg-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det at en bedrift er «markedsorientert»?',
        options: [
          { id: 'a', text: 'At bedriften bruker mest penger på reklame', isCorrect: false },
          { id: 'b', text: 'At bedriften starter med å undersøke kundens behov og utvikler produktet deretter', isCorrect: true },
          { id: 'c', text: 'At bedriften alltid har de laveste prisene i markedet', isCorrect: false },
          { id: 'd', text: 'At bedriften kopierer det konkurrentene gjør', isCorrect: false },
        ],
        solution: 'En markedsorientert bedrift tar utgangspunkt i kundens behov og ønsker. Den undersøker hva kundene trenger, og utvikler produkter og tjenester som dekker disse behovene. Motsatsen er en produktorientert bedrift som lager et produkt først og deretter prøver å overbevise kundene om å kjøpe det.',
      },
    },
    {
      id: 'eb-4-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-4-1-oppg-3',
        number: '4.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig rekkefølge på SMART-mål-kriteriene?',
        options: [
          { id: 'a', text: 'Spesifikke, Målbare, Ambisiøse, Realistiske, Tidsbestemte', isCorrect: true },
          { id: 'b', text: 'Strategiske, Motiverende, Aksepterte, Relevante, Troverdige', isCorrect: false },
          { id: 'c', text: 'Simple, Measurable, Achievable, Relevant, Timely', isCorrect: false },
          { id: 'd', text: 'Spesifikke, Moderne, Aktuelle, Retningsgivende, Troverdige', isCorrect: false },
        ],
        solution: 'SMART-mål er: Spesifikke (klart definert hva som skal oppnås), Målbare (kan tallfestes), Ambisiøse (utfordrende nok til å motivere), Realistiske (gjennomførbare med tilgjengelige ressurser) og Tidsbestemte (med en klar frist). Eksempel: «Selge 100 vannflasker innen 1. mai» er et SMART-mål.',
      },
    },
    {
      id: 'eb-4-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-4-1-oppg-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du starter en elevbedrift som selger hjemmelagde energibarer. Beskriv markedsføringsmiksen (4P) for produktet ditt. Forklar hvorfor de fire elementene henger godt sammen.',
        hints: ['Start med produktet: Hva slags energibarer lager du, og hva gjør dem spesielle?', 'Tenk på hvem som er målgruppen din — det påvirker pris, distribusjon og kommunikasjon.'],
        solution: 'Eksempel: Produkt: Hjemmelagde proteinbarer uten tilsatt sukker, med norske bær og nøtter. Naturlige ingredienser, emballasje av resirkulert papp. Pris: 39 kr per bar, 99 kr for 3-pack — posisjonert som et sunnere alternativ til Snickers og Kvikk Lunsj, men billigere enn premiummerker. Plass: Skolekantinen, lokal treningssenter, egen nettside med Vipps. Påvirkning: Instagram med trenings- og ernæringsinnhold, samarbeid med skolens idrettslag, gratis smaksprøver på skolen. Elementene henger sammen fordi målgruppen (helsebevisste ungdommer) verdsetter naturlige ingredienser (produkt), er villige til å betale litt mer (pris), befinner seg på skole og treningssenter (plass), og bruker Instagram aktivt (påvirkning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-4-1-oppg-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et utkast til en markedsplan for din egen elevbedrift (eller en fiktiv bedrift). Planen skal inneholde: situasjonsanalyse, mål (minst 2 SMART-mål), målgruppebeskrivelse, markedsføringsmiks og tidsplan for de neste 8 ukene.',
        hints: ['Bruk punktlister for å holde planen oversiktlig.', 'Målgruppen bør beskrives så konkret som mulig — tenk på alder, interesser, verdier og kjøpsvaner.'],
        solution: 'En god markedsplan inneholder: (1) Situasjonsanalyse med kort beskrivelse av markedet, konkurrentene og egne styrker/svakheter. (2) Minst 2 SMART-mål, f.eks. «Oppnå 300 Instagram-følgere innen uke 4» og «Selge 150 enheter innen uke 8». (3) Konkret målgruppebeskrivelse. (4) Detaljert 4P — med begrunnelse for valg av produkt, pris, distribusjonskanal og kommunikasjonstiltak. (5) Tidsplan med ukentlige aktiviteter og milepæler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-4-1-oppg-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en kjent bedrift (f.eks. Vipps, Oda eller Holzweiler). Analyser bedriftens markedsføringsmiks (4P) og vurder om elementene henger godt sammen. Er det noe bedriften kunne gjort annerledes?',
        hints: ['Se på bedriftens nettside, sosiale medier og nyhetsartikler for å finne informasjon.'],
        solution: 'Eksempel med Oda (nettbasert matbutikk): Produkt — bredt dagligvareutvalg levert på døren, app-basert bestilling, eget kvalitetssystem. Pris — sammenlignbar med Kiwi/Rema, gratis levering over 500 kr. Plass — kun nettbutikk/app, levering i utvalgte byer. Påvirkning — digitale annonser, PR om teknologisk innovasjon, sosiale medier med matinspirasjon. Vurdering: Miksen henger godt sammen — enkelheten i «alt levert hjem» appellerer til travle barnefamilier. Forbedringspotensial: Kunne bygget sterkere merkelojalitet gjennom personaliserte tilbud basert på kjøpshistorikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.1

- **Markedsføring** handler om å forstå kundens behov og skape et tilbud som dekker dette behovet bedre enn konkurrentene.
- En **markedsorientert** bedrift starter med kundens behov, mens en **produktorientert** bedrift starter med produktet.
- **Markedsføringsmiksen (4P):** Produkt, Pris, Plass og Påvirkning er de fire verktøyene bedriften bruker for å nå målgruppen. De må henge sammen.
- En **markedsplan** er et dokument med situasjonsanalyse, mål, målgruppe, strategi, 4P, budsjett, tidsplan og evaluering.
- Mål bør være **SMART**: Spesifikke, Målbare, Ambisiøse, Realistiske og Tidsbestemte.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Markedsføring', definition: 'Alle aktiviteter for å identifisere, skape, kommunisere og levere verdi til kundene på en lønnsom måte.' },
    { term: 'Markedsføringsmiksen (4P)', definition: 'De fire verktøyene Produkt, Pris, Plass og Påvirkning som bedriften bruker for å nå sin målgruppe.' },
    { term: 'Markedsplan', definition: 'Et dokument som beskriver bedriftens markedsføringsstrategi og konkrete tiltak i en bestemt periode.' },
    { term: 'SMART-mål', definition: 'Mål som er Spesifikke, Målbare, Ambisiøse, Realistiske og Tidsbestemte.' },
    { term: 'Markedsorientering', definition: 'Tilnærming der bedriften starter med å undersøke kundens behov før den utvikler produkter.' },
  ],
};

// ============================================================================
// KAPITTEL 4.2: Digital markedsføring
// ============================================================================

export const CHAPTER_ENTREBED_1_4_2: TextbookChapter = {
  id: 'entrebed-1-4-2',
  courseId: 'entrebed-1',
  chapterNumber: '4.2',
  title: 'Digital markedsføring',
  description: 'Sosiale medier, søkemotoroptimalisering (SEO), innholdsmarkedsføring og e-postmarkedsføring som verktøy for gründere.',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke digitale verktøy i marknadsføring og sal',
    'utvikle og presentere ein marknadsplan for eit produkt eller ei teneste',
  ],
  content: [
    {
      id: 'eb-4-2-intro',
      type: 'text',
      content: `## Markedsføring i den digitale tidsalderen

I dag starter de fleste kjøpsreiser på nettet. Før du kjøper en ny jakke, en restaurantmiddag eller en feriereise, søker du sannsynligvis på Google, scroller gjennom Instagram eller sjekker anmeldelser på nett. For gründere betyr dette at digital markedsføring ikke bare er en mulighet — det er en nødvendighet.

Digital markedsføring har flere fordeler sammenlignet med tradisjonell markedsføring:
- **Lavere kostnader:** Du trenger ikke hundretusener til TV-reklame. En Instagram-konto er gratis.
- **Målretting:** Du kan nå akkurat den målgruppen du vil, basert på alder, interesser, bosted og atferd.
- **Målbarhet:** Du kan spore nøyaktig hvor mange som ser, klikker og kjøper.
- **Toveis kommunikasjon:** Du kan ha direkte dialog med kundene dine.
- **Skalerbarhet:** Det som fungerer for 100 følgere, kan skaleres til 100 000.

**I dette kapittelet skal du lære:**
- Hvordan sosiale medier kan brukes strategisk i markedsføring
- Hva søkemotoroptimalisering (SEO) er og hvorfor det er viktig
- Prinsippene bak innholdsmarkedsføring
- Hvordan e-postmarkedsføring fungerer`,
    },
    {
      id: 'eb-4-2-def-1',
      type: 'definition',
      title: 'Digital markedsføring',
      content: `**Digital markedsføring** er all markedsføring som skjer via digitale kanaler — nettsider, søkemotorer, sosiale medier, e-post, apper og andre digitale plattformer.

**Hovedkategorier:**
- **Sosiale medier-markedsføring (SMM):** Bruk av plattformer som Instagram, TikTok, Snapchat, Facebook og LinkedIn for å nå og engasjere kunder.
- **Søkemotoroptimalisering (SEO):** Tilpasse nettsiden slik at den rangerer høyt i Google-søk.
- **Søkemotorannonsering (SEM/PPC):** Betalt annonsering i søkemotorer (Google Ads).
- **Innholdsmarkedsføring:** Skape verdifullt innhold (blogg, video, podcast) som tiltrekker kunder.
- **E-postmarkedsføring:** Bygge kunderelasjoner gjennom nyhetsbrev og automatiserte e-poster.
- **Influencer-markedsføring:** Samarbeid med personer med stor følgerskare i sosiale medier.
- **Affiliate-markedsføring:** Provisjonsbasert salg gjennom partnere som promoterer produktet ditt.`,
    },
    {
      id: 'eb-4-2-text-1',
      type: 'text',
      content: `## Sosiale medier som markedsføringsverktøy

Sosiale medier er ofte den viktigste markedsføringskanalen for gründere og elevbedrifter. Det er gratis å opprette konto, du kan nå tusenvis av mennesker, og du kan bygge en direkte relasjon med kundene.

### Velge riktig plattform

Ikke alle plattformer passer for alle bedrifter. Valget avhenger av **målgruppen din** og **innholdstypen** du vil bruke:

| Plattform | Målgruppe | Best for |
|-----------|-----------|----------|
| **Instagram** | 16–35 år | Visuelt innhold, merkevarebygging, produktbilder |
| **TikTok** | 13–25 år | Korte, kreative videoer, viral spredning |
| **Snapchat** | 13–25 år | Bak-kulissene-innhold, personlig kontakt |
| **Facebook** | 25–65 år | Arrangementer, grupper, målrettet annonsering |
| **LinkedIn** | 20–55 år | B2B, profesjonelt nettverk, faginnhold |
| **YouTube** | Alle aldre | Lengre videoer, tutorials, produktdemonstrasjoner |

### Innholdsstrategi for sosiale medier

En god innholdsstrategi følger **80/20-regelen**: 80 % av innholdet bør gi verdi til følgerne (underholdning, inspirasjon, informasjon), og bare 20 % bør være direkte salgsbudskap.

**Innholdstyper som fungerer:**
- *Behind the scenes:* Vis prosessen bak produktet, teamet, hverdagen i elevbedriften
- *Kundehistorier:* Del tilbakemeldinger og bilder fra fornøyde kunder
- *Tips og råd:* Del nyttig kunnskap relatert til produktet ditt
- *Interaktivt:* Avstemninger, quiz, spørsmål — skap dialog
- *Salgsinnhold:* Produktbilder, tilbud, nyheter (maks 20 % av totalen)`,
    },
    {
      id: 'eb-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Digital markedsføringsstrategi for en elevbedrift',
      problem: 'En elevbedrift selger håndlagde stearinlys med unike dufter. Lag en digital markedsføringsstrategi med fokus på sosiale medier.',
      solution: `**Plattformvalg:**
Primært Instagram og TikTok — målgruppen er unge voksne (16–30 år) som er interessert i interiør, hjemmekos og bærekraft.

**Instagram-strategi:**
- Estetisk feed med profesjonelle produktbilder i «cozy»-stemning
- Stories: Daglige oppdateringer fra produksjonen (støping, pakking, levering)
- Reels: Korte videoer av lys som tennes, duftbeskrivelser, «en dag i elevbedriften»
- Hashtags: #hjemmekos #stearinlys #norskdesign #elevbedrift #bærekraftig

**TikTok-strategi:**
- Korte videoer av produksjonsprosessen (satisfying content)
- «Gjett duften»-utfordringer med kommentarfeltet
- Før-og-etter-videoer av lysmaking
- Trender: Bruk populære lyder og formater tilpasset produktet

**Innholdskalender (eksempel uke):**
- Mandag: Produktbilde med duften i fokus (Instagram)
- Onsdag: Behind-the-scenes fra produksjonen (TikTok + Stories)
- Fredag: Kundetilbakemelding eller tips om stearinlyspleie (begge plattformer)

**Engasjement:**
- Svar på alle kommentarer og DM-er innen 24 timer
- Repost brukerinnhold (kunder som deler bilder)
- Samarbeid med lokal interiørinfluenser for produktomtale`,
    },
    {
      id: 'eb-4-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-4-2-oppg-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er 80/20-regelen i sosiale medier-markedsføring?',
        options: [
          { id: 'a', text: '80 % av innholdet bør gi verdi til følgerne, og 20 % bør være direkte salgsbudskap', isCorrect: true },
          { id: 'b', text: '80 % av budsjettet bør gå til Instagram, og 20 % til TikTok', isCorrect: false },
          { id: 'c', text: '80 % av følgerne er passive, og 20 % er aktive', isCorrect: false },
          { id: 'd', text: '80 % av salget kommer fra reklame, og 20 % fra organisk innhold', isCorrect: false },
        ],
        solution: '80/20-regelen betyr at 80 % av innholdet på sosiale medier bør gi verdi til følgerne — i form av underholdning, inspirasjon, tips eller informasjon. Bare 20 % bør være direkte salgsbudskap. Hvis du bare poster reklame, vil folk slutte å følge deg. Ved å gi verdi først, bygger du tillit og engasjement som gjør salgsbudskapene mer effektive.',
      },
    },
    {
      id: 'eb-4-2-text-2',
      type: 'text',
      content: `## Søkemotoroptimalisering (SEO)

**SEO** (Search Engine Optimization) handler om å tilpasse nettsiden din slik at den dukker opp høyt i søkeresultatene på Google. Når noen søker etter «bærekraftig vannflaske» og din nettside vises på topp, får du gratis trafikk fra potensielle kunder.

### Hvordan fungerer Google?

Google bruker algoritmer (komplekse dataprogrammer) til å vurdere hvilke nettsider som er mest relevante for et søk. De viktigste faktorene er:

**1. Innhold:** Har nettsiden innhold som svarer på det brukeren søker etter? Bruk relevante nøkkelord naturlig i teksten.

**2. Teknisk kvalitet:** Laster siden raskt? Fungerer den på mobil? Er den sikker (HTTPS)?

**3. Lenker:** Lenker andre troverdige nettsider til din side? Jo flere kvalitetslenker, desto høyere rangering.

**4. Brukeropplevelse:** Blir besøkende lenge på siden? Klikker de seg videre, eller forlater de umiddelbart?

### SEO-tips for gründere
- Bruk nøkkelord som kundene dine faktisk søker etter
- Skriv gode sidetitler og metabeskrivelser
- Lag verdifullt innhold (bloggartikler, guider, FAQ)
- Sørg for at nettsiden laster raskt og fungerer på mobil
- Få andre nettsider til å lenke til deg (lokalaviser, samarbeidspartnere)

## Innholdsmarkedsføring

**Innholdsmarkedsføring** (content marketing) handler om å tiltrekke og engasjere kunder ved å skape verdifullt, relevant innhold — i stedet for tradisjonell reklame.

Eksempler på innholdsmarkedsføring:
- En treningsapp som publiserer treningsprogrammer og ernæringsguider på bloggen sin
- En elevbedrift som selger plantetilbehør og lager TikTok-videoer med plantetips
- En kaffebrenneri som sender nyhetsbrev med historier fra kaffeplantasjer

## E-postmarkedsføring

E-postmarkedsføring er overraskende effektivt, selv i en tid dominert av sosiale medier. Studier viser at e-post har høyere avkastning (ROI) enn de fleste andre markedsføringskanaler.

**Fordeler:**
- Du eier e-postlisten — den forsvinner ikke hvis Instagram endrer algoritmen
- Direkte kommunikasjon med folk som allerede er interessert
- Kan automatiseres (velkomst-e-post, handlekurvpåminnelse, fødselsdagstilbud)

**For gründere:** Start med et enkelt nyhetsbrev (f.eks. Mailchimp, som er gratis for opptil 500 abonnenter). Samle e-postadresser gjennom nettsiden din og tilby noe av verdi i bytte — for eksempel en rabattkode, en gratis guide eller tidlig tilgang til nye produkter.`,
    },
    {
      id: 'eb-4-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-4-2-oppg-2',
        number: '4.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er SEO?',
        options: [
          { id: 'a', text: 'En type betalt reklame i sosiale medier', isCorrect: false },
          { id: 'b', text: 'Tilpasning av nettsiden slik at den rangerer høyt i søkemotorer som Google', isCorrect: true },
          { id: 'c', text: 'Et verktøy for å sende masseutsendelser av e-post', isCorrect: false },
          { id: 'd', text: 'En analyse av konkurrentenes nettsider', isCorrect: false },
        ],
        solution: 'SEO (Search Engine Optimization) er søkemotoroptimalisering — prosessen med å tilpasse nettsiden din slik at den vises høyt i søkeresultatene på Google. God SEO innebærer å bruke relevante nøkkelord, ha rask sidelasting, mobiloptimalisering og kvalitetslenker fra andre nettsider. Fordelen er at du får gratis, organisk trafikk fra folk som aktivt søker etter det du tilbyr.',
      },
    },
    {
      id: 'eb-4-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-4-2-oppg-3',
        number: '4.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er e-postmarkedsføring verdifull sammenlignet med sosiale medier?',
        options: [
          { id: 'a', text: 'Fordi e-post er gratis, mens sosiale medier er dyre', isCorrect: false },
          { id: 'b', text: 'Fordi du eier e-postlisten og er ikke avhengig av plattformens algoritmer', isCorrect: true },
          { id: 'c', text: 'Fordi alle åpner e-poster, men ingen ser sosiale medier-innlegg', isCorrect: false },
          { id: 'd', text: 'Fordi e-post er nyere teknologi enn sosiale medier', isCorrect: false },
        ],
        solution: 'Den store fordelen med e-postmarkedsføring er at du eier e-postlisten. Hvis Instagram endrer algoritmen (noe som skjer regelmessig), kan rekkevidden din falle dramatisk over natten. E-postlisten din kan ingen ta fra deg. I tillegg har folk som har gitt deg e-postadressen sin allerede vist interesse, noe som gir høyere konverteringsrate.',
      },
    },
    {
      id: 'eb-4-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-4-2-oppg-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en digital markedsføringsstrategi for en elevbedrift du kjenner (eller en fiktiv bedrift). Strategien skal inkludere: (a) valg av plattformer med begrunnelse, (b) innholdsplan for én uke, og (c) minst ett SEO-tiltak for bedriftens nettside.',
        hints: ['Tenk på hvem målgruppen er — det avgjør hvilke plattformer du bør bruke.', 'Husk 80/20-regelen for innholdsbalanse.'],
        solution: 'En god strategi inneholder: (a) Begrunnede plattformvalg basert på målgruppens alder og vaner — f.eks. TikTok og Instagram for unge, LinkedIn og Facebook for profesjonelle. (b) En innholdsplan med minst 3–4 poster i uken, fordelt mellom verdiskapende innhold og salgsbudskap. (c) SEO-tiltak som å skrive en bloggartikkel med relevante nøkkelord, optimalisere sidetitler, eller få en lenke fra lokalavisen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-4-2-oppg-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved å bruke influencer-markedsføring for en liten elevbedrift. Når kan det lønne seg, og når bør man velge andre kanaler?',
        hints: ['Tenk på kostnader, troverdighet og kontroll over budskapet.'],
        solution: 'Fordeler: Stor rekkevidde, troverdighet (følgerne stoler på influenseren), kan nå spesifikke målgrupper. Ulemper: Kan være dyrt, risiko for at influenseren ikke fremstår autentisk, manglende kontroll over budskapet, midlertidig effekt. For elevbedrifter kan det lønne seg med mikro-influensere (1000–10 000 følgere) som ofte samarbeider gratis mot produkter. Det lønner seg når produktet er visuelt og appellerer til influenserens publikum. Andre kanaler er bedre når budsjettet er svært begrenset eller produktet krever forklaring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.2

- **Digital markedsføring** omfatter alle markedsføringsaktiviteter via digitale kanaler og er avgjørende for moderne gründere.
- **Sosiale medier** er ofte den viktigste kanalen for elevbedrifter — velg plattform basert på målgruppen din.
- **80/20-regelen:** 80 % verdiskapende innhold, 20 % salgsbudskap.
- **SEO** handler om å rangere høyt i Google og gir gratis, målrettet trafikk.
- **Innholdsmarkedsføring** tiltrekker kunder ved å tilby verdifullt innhold fremfor tradisjonell reklame.
- **E-postmarkedsføring** gir direkte kontakt med interesserte kunder og er uavhengig av plattformalgoritmer.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Digital markedsføring', definition: 'All markedsføring som skjer via digitale kanaler som nettsider, søkemotorer, sosiale medier og e-post.' },
    { term: 'SEO', definition: 'Search Engine Optimization — tilpasning av nettsiden slik at den rangerer høyt i søkemotorer.' },
    { term: 'Innholdsmarkedsføring', definition: 'Å tiltrekke kunder ved å skape verdifullt, relevant innhold i stedet for tradisjonell reklame.' },
    { term: 'E-postmarkedsføring', definition: 'Bruk av e-post og nyhetsbrev for å bygge kunderelasjoner og drive salg.' },
    { term: '80/20-regelen', definition: '80 % av innholdet på sosiale medier bør gi verdi, og kun 20 % bør være direkte salgsbudskap.' },
  ],
};

// ============================================================================
// KAPITTEL 4.3: Merkevarebygging
// ============================================================================

export const CHAPTER_ENTREBED_1_4_3: TextbookChapter = {
  id: 'entrebed-1-4-3',
  courseId: 'entrebed-1',
  chapterNumber: '4.3',
  title: 'Merkevarebygging',
  description: 'Merkeidentitet, merkeløfte, visuell profil og hvordan gründere bygger sterke merkevarer fra bunnen av.',
  estimatedMinutes: 22,
  competenceGoals: [
    'utvikle og presentere ein marknadsplan for eit produkt eller ei teneste',
    'gjere greie for korleis marknadsføring kan påverke forbrukarar og samfunn',
  ],
  content: [
    {
      id: 'eb-4-3-intro',
      type: 'text',
      content: `## Hvorfor er merkevarebygging viktig?

Tenk på Apple. Du ser eplet og tenker umiddelbart på innovasjon, kvalitet og design. Tenk på IKEA — du tenker rimelige møbler, selvmontering og svenske kjøttboller. Tenk på Freia — du tenker norsk tradisjon, melkesjokolade og «Et lite stykke Norge».

Disse assosiasjonene er ikke tilfeldige. De er resultatet av bevisst **merkevarebygging** over mange år. En sterk merkevare er en av de mest verdifulle eiendelene en bedrift kan ha — den skaper gjenkjennelse, tillit og lojalitet.

Men merkevarebygging er ikke bare for store selskaper. Også gründere og elevbedrifter kan — og bør — bygge en tydelig merkevare fra dag én. En gjennomtenkt merkevare gjør at du skiller deg ut i mengden, bygger tillit raskere og får lojale kunder som anbefaler deg til andre.

**I dette kapittelet skal du lære:**
- Hva en merkevare er og hvorfor den er verdifull
- Merkeidentitet og merkeløfte
- Visuell profil — logo, farger, typografi
- Hvordan du bygger merkevare for en gründerbedrift`,
    },
    {
      id: 'eb-4-3-def-1',
      type: 'definition',
      title: 'Merkevare (brand)',
      content: `En **merkevare** er summen av alle opplevelser, følelser og assosiasjoner kunden har knyttet til en bedrift, et produkt eller en tjeneste.

Jeff Bezos (Amazon-grunnlegger) sa: «Merkevaren din er det folk sier om deg når du ikke er i rommet.»

En merkevare er altså mer enn logoen — det er kundens **totale oppfatning**. Den bygges gjennom:
- Produktets kvalitet og funksjonalitet
- Visuell identitet (logo, farger, design)
- Kommunikasjon (tone, budskap, verdier)
- Kundeopplevelse (service, levering, problemhåndtering)
- Rykte og omdømme (anmeldelser, omtale, word-of-mouth)

**Merkeverdi (brand equity):** Den ekstra verdien en merkevare tilfører et produkt. Folk betaler mer for en Nike-sko enn en merkeløs sko med tilsvarende kvalitet — denne prisforskjellen er merkeverdien.`,
    },
    {
      id: 'eb-4-3-def-2',
      type: 'definition',
      title: 'Merkeidentitet og merkeløfte',
      content: `**Merkeidentitet** er hvordan bedriften ønsker å bli oppfattet. Det er det bevisste bildet bedriften bygger av seg selv gjennom alle sine valg og handlinger.

Merkeidentiteten består av:
- **Visjon:** Hva er bedriftens drøm for fremtiden?
- **Misjon:** Hva gjør bedriften, for hvem og hvorfor?
- **Verdier:** Hvilke prinsipper styrer bedriftens handlinger?
- **Personlighet:** Hvis merkevaren var en person — hvem ville den vært?
- **Posisjonering:** Hva gjør merkevaren unik sammenlignet med konkurrentene?

**Merkeløfte (brand promise)** er den forventningen kunden har til merkevaren — det kunden kan stole på at de får, hver gang. Et merkeløfte må være:
- **Relevant:** Det må bety noe for kunden
- **Differensierende:** Det må skille deg fra konkurrentene
- **Troverdig:** Du må kunne levere det du lover
- **Konsistent:** Det må holdes hver eneste gang

Eksempler: Volvo lover *sikkerhet*. Apple lover *innovasjon og brukervennlighet*. IKEA lover *godt design til en pris som gjør det tilgjengelig for alle*.`,
    },
    {
      id: 'eb-4-3-text-1',
      type: 'text',
      content: `## Visuell profil

Den visuelle profilen er den synlige delen av merkevaren — det kundene ser og gjenkjenner. En gjennomtenkt visuell profil skaper gjenkjennelse og forsterker merkeidentiteten.

### Elementer i en visuell profil

**1. Logo**
Logoen er merkevarens mest gjenkjennbare element. En god logo er enkel, minneverdig, tidløs og allsidig (fungerer i alle størrelser og på alle bakgrunner).
- *Ordmerke:* Bedriftsnavnet i en spesiell typografi (Google, Coca-Cola)
- *Symbol/ikon:* Et grafisk symbol uten tekst (Apple-eplet, Nike-swoosh)
- *Kombinasjonsmerke:* Logo + ikon sammen (Adidas, Starbucks)

**2. Fargepalett**
Farger vekker følelser og assosiasjoner:
- **Blått:** Tillit, profesjonalitet, trygghet (banker, teknologiselskaper)
- **Rødt:** Energi, lidenskap, appetitt (Coca-Cola, Netflix)
- **Grønt:** Natur, bærekraft, helse (Starbucks, Spotify)
- **Svart:** Luksus, eleganse, sofistikasjon (Chanel, Prada)
- **Gult:** Optimisme, ungdommelighet, varme (Snapchat, McDonald's)

**3. Typografi**
Skrifttypen kommuniserer merkevarens personlighet. Serif-fonter (med «føtter», som Times New Roman) signaliserer tradisjon og troverdighet. Sans-serif-fonter (uten «føtter», som Helvetica) signaliserer modernitet og enkelhet.

**4. Bildestil**
Bildebruken bør være konsistent. Bruker du lyse, luftige bilder? Mørke og dramatiske? Illustrasjoner eller fotografier? Stilen bør matche merkevarens personlighet.

**5. Tone of voice**
Hvordan merkevaren «snakker» — formelt eller uformelt, humoristisk eller seriøst, ungdommelig eller voksent. Tonen bør være konsistent i all kommunikasjon.`,
    },
    {
      id: 'eb-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Merkevarebygging for en elevbedrift',
      problem: 'En elevbedrift som lager naturlig hudpleie for tenåringer vil bygge en sterk merkevare. Beskriv merkeidentitet og visuell profil.',
      solution: `**Merkeidentitet:**
- *Visjon:* En verden der unge føler seg komfortable i egen hud — uten farlige kjemikalier.
- *Misjon:* Lage naturlig, effektiv hudpleie for tenåringer, med ærlig kommunikasjon om ingredienser.
- *Verdier:* Naturlighet, ærlighet, inkludering, bærekraft.
- *Personlighet:* Hvis merkevaren var en person: En jordnær, kunnskapsrik venn som gir ærlige råd uten å dømme.
- *Merkeløfte:* «Ren hud, rene ingredienser — uten bullshit.»
- *Posisjonering:* Det naturlige alternativet til Clearasil og Neutrogena — laget av ungdom, for ungdom.

**Visuell profil:**
- *Logo:* Kombinasjonsmerke med et blad og bedriftsnavnet i en moderne, avrundet sans-serif-font.
- *Fargepalett:* Primærfarger — dus grønn (#7FB069) og kremhvit (#FFF8F0). Aksentfarger — fersken (#F4A261) og mørk grønn (#2D5016).
- *Typografi:* Poppins (overskrifter) og Lato (brødtekst) — moderne, vennlige og lettlesbare.
- *Bildestil:* Naturlige, ufiltrerte bilder av ekte tenåringer. Ingen retusjering. Lyst, naturlig lys.
- *Tone of voice:* Uformell, ærlig og vennlig. Bruker «du» og hverdagsspråk. Humor er velkommen, men aldri på bekostning av noen.

Denne merkevaren skiller seg ut ved å være ærlig og tilgjengelig — i motsetning til store hudpleiemerker som ofte bruker urealistiske modeller og komplisert språk.`,
    },
    {
      id: 'eb-4-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-4-3-oppg-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en merkevare (brand)?',
        options: [
          { id: 'a', text: 'Bare logoen og fargene til en bedrift', isCorrect: false },
          { id: 'b', text: 'Summen av alle opplevelser, følelser og assosiasjoner kunden har til bedriften', isCorrect: true },
          { id: 'c', text: 'Det juridiske navnet registrert i Brønnøysundregistrene', isCorrect: false },
          { id: 'd', text: 'Produktets fysiske emballasje og design', isCorrect: false },
        ],
        solution: 'En merkevare er langt mer enn en logo. Det er kundens totale oppfatning — alle opplevelser, følelser og assosiasjoner knyttet til bedriften. Merkevaren bygges gjennom produktkvalitet, visuell identitet, kommunikasjon, kundeopplevelse og omdømme. Jeff Bezos sa: «Merkevaren din er det folk sier om deg når du ikke er i rommet.»',
      },
    },
    {
      id: 'eb-4-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-4-3-oppg-2',
        number: '4.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva bør et godt merkeløfte (brand promise) være?',
        options: [
          { id: 'a', text: 'Så ambisiøst som mulig for å tiltrekke flest mulig kunder', isCorrect: false },
          { id: 'b', text: 'Relevant, differensierende, troverdig og konsistent', isCorrect: true },
          { id: 'c', text: 'Identisk med konkurrentenes for å vise at du er like god', isCorrect: false },
          { id: 'd', text: 'Så vagt som mulig slik at du aldri bryter det', isCorrect: false },
        ],
        solution: 'Et godt merkeløfte må være: (1) Relevant — det må bety noe for kunden. (2) Differensierende — det må skille deg fra konkurrentene. (3) Troverdig — du må faktisk kunne levere det du lover. (4) Konsistent — det må holdes hver gang. Et løfte du ikke kan holde, ødelegger tilliten. Et løfte som er for vagt, skiller deg ikke ut.',
      },
    },
    {
      id: 'eb-4-3-note-1',
      type: 'note',
      title: 'Merkevarebygging vs. markedsføring',
      content: `Det er viktig å forstå forskjellen:

**Merkevarebygging** handler om *hvem du er* — identitet, verdier, personlighet og løfte. Det er langsiktig arbeid som bygger tillit over tid.

**Markedsføring** handler om *hva du gjør* — kampanjer, annonser, innhold og tiltak for å nå kunder. Det er mer kortsiktig og taktisk.

Analogi: Merkevarebygging er som å bygge fundamentet til et hus. Markedsføring er som å dekorere og invitere gjester. Uten et solid fundament faller huset sammen, uansett hvor pen dekorasjonen er.`,
    },
    {
      id: 'eb-4-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-4-3-oppg-3',
        number: '4.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken farge assosieres vanligvis med tillit, profesjonalitet og trygghet i merkevarebygging?',
        options: [
          { id: 'a', text: 'Rød', isCorrect: false },
          { id: 'b', text: 'Grønn', isCorrect: false },
          { id: 'c', text: 'Blå', isCorrect: true },
          { id: 'd', text: 'Gul', isCorrect: false },
        ],
        solution: 'Blått assosieres med tillit, profesjonalitet og trygghet. Derfor bruker mange banker (DNB, Nordea), forsikringsselskaper og teknologiselskaper (Samsung, Intel, Facebook) blått i sin visuelle profil. Rødt signaliserer energi og lidenskap, grønt natur og bærekraft, og gult optimisme og ungdommelighet.',
      },
    },
    {
      id: 'eb-4-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-4-3-oppg-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utvikle en merkeidentitet for din elevbedrift (eller en fiktiv bedrift). Inkluder: visjon, misjon, verdier, personlighet, merkeløfte og posisjonering. Beskriv også den visuelle profilen (logo-idé, fargevalg med begrunnelse og tone of voice).',
        hints: ['Start med å tenke: Hvis merkevaren var en person, hvem ville den vært?', 'Fargene bør matche verdiene og følelsen du vil skape.'],
        solution: 'En god merkeidentitet er helhetlig og konsistent. Eksempel: Visjon — «Gjøre hverdagsmaten bedre for alle». Misjon — «Vi lager sunne, smakfulle mellommåltider med norske råvarer». Verdier — kvalitet, enkelhet, norsk tradisjon. Personlighet — pålitelig, jordnær, varm. Merkeløfte — «Ærlig mat, uten kunstige tilsetningsstoffer». Posisjonering — det norske alternativet til importerte energibarer. Visuell profil: Farger i naturtoner (grønn, brun, kremhvit) signaliserer naturlighet. Enkel, håndtegnet logo. Varm, uformell tone of voice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-4-3-oppg-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to konkurrerende merkevarer innenfor samme bransje (f.eks. Nike vs. Adidas, Apple vs. Samsung, eller Rema 1000 vs. Meny). Sammenlign merkeidentiteten deres: Hva lover de? Hvem er målgruppen? Hvordan ser den visuelle profilen ut? Hva gjør dem forskjellige?',
        hints: ['Se på logo, fargebruk, reklamekampanjer, nettsider og sosiale medier for å identifisere merkeidentiteten.'],
        solution: 'Eksempel Nike vs. Adidas: Nike — merkeløfte: «Just Do It» (motivasjon, prestasjon, seier). Målgruppe: Ambisiøse, konkurranseorienterte utøvere. Visuell profil: Ikonisk swoosh, svart/hvitt dominerer, dramatiske kampanjebilder med toppidrettsutøvere. Tone: Inspirerende, intenst, emosjonelt. Adidas — merkeløfte: «Impossible Is Nothing» (overvinne hindringer). Målgruppe: Bredere — både sport og streetwear/kultur. Visuell profil: Tre striper, variert fargebruk, samarbeid med designere og artister. Tone: Kreativ, kulturell, inkluderende. Forskjell: Nike fokuserer mer på prestasjon og elite, Adidas mer på kultur og kreativitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.3

- En **merkevare** er summen av alle opplevelser, følelser og assosiasjoner kunden har til en bedrift — langt mer enn bare logoen.
- **Merkeidentitet** er hvordan bedriften ønsker å bli oppfattet, definert gjennom visjon, misjon, verdier, personlighet og posisjonering.
- **Merkeløftet** er kundens forventning til merkevaren og må være relevant, differensierende, troverdig og konsistent.
- Den **visuelle profilen** (logo, farger, typografi, bildestil, tone of voice) gjør merkevaren gjenkjennbar og forsterker identiteten.
- Farger vekker følelser: blått = tillit, rødt = energi, grønt = natur, svart = luksus.
- Merkevarebygging er langsiktig (*hvem du er*), mens markedsføring er kortsiktig (*hva du gjør*).`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Merkevare (brand)', definition: 'Summen av alle opplevelser, følelser og assosiasjoner kunden har knyttet til en bedrift.' },
    { term: 'Merkeidentitet', definition: 'Hvordan bedriften ønsker å bli oppfattet — definert gjennom visjon, misjon, verdier og personlighet.' },
    { term: 'Merkeløfte', definition: 'Forventningen kunden har til merkevaren — det bedriften lover å levere konsistent.' },
    { term: 'Visuell profil', definition: 'Den synlige delen av merkevaren: logo, fargepalett, typografi, bildestil og tone of voice.' },
    { term: 'Merkeverdi (brand equity)', definition: 'Den ekstra verdien en merkevare tilfører et produkt utover dets funksjonelle egenskaper.' },
  ],
};

// ============================================================================
// KAPITTEL 4.4: Salgsteknikker
// ============================================================================

export const CHAPTER_ENTREBED_1_4_4: TextbookChapter = {
  id: 'entrebed-1-4-4',
  courseId: 'entrebed-1',
  chapterNumber: '4.4',
  title: 'Salgsteknikker',
  description: 'Salgsprosessen, kunderelasjoner, forhandlingsteknikker og hvordan gründere selger effektivt.',
  estimatedMinutes: 22,
  competenceGoals: [
    'bruke digitale verktøy i marknadsføring og sal',
    'utvikle og presentere ein marknadsplan for eit produkt eller ei teneste',
  ],
  content: [
    {
      id: 'eb-4-4-intro',
      type: 'text',
      content: `## Kunsten å selge

Mange forbinder salg med påtrengende telefonselgere eller aggressive butikkansatte. Men godt salg handler ikke om å presse produkter på folk — det handler om å **hjelpe kunden med å løse et problem**.

De beste selgerne er gode lyttere. De forstår kundens behov, presenterer en løsning som passer, og bygger en relasjon basert på tillit. Som gründer er du bedriftens viktigste selger — ingen kjenner produktet bedre enn deg, og ingen brenner mer for det.

Salg er også en ferdighet som kan læres. Akkurat som du kan bli bedre i fotball gjennom trening, kan du bli en bedre selger gjennom kunnskap om salgsprosessen, øvelse i kommunikasjon og forståelse av kundepsykologi.

**I dette kapittelet skal du lære:**
- Salgsprosessen steg for steg
- Hvordan bygge gode kunderelasjoner
- Forhandlingsteknikker
- Forskjellen mellom B2C- og B2B-salg`,
    },
    {
      id: 'eb-4-4-def-1',
      type: 'definition',
      title: 'Salgsprosessen',
      content: `**Salgsprosessen** er de stegene en selger gjennomgår fra første kontakt med en potensiell kunde til salget er fullført og oppfølging er gjennomført.

**Steg 1: Prospektering — Finne potensielle kunder**
Identifiser hvem som kan ha behov for produktet ditt. Bruk sosiale medier, nettverk, arrangementer, messer og søkemotorer for å finne potensielle kunder (prospects).

**Steg 2: Forberedelse — Forstå kundens situasjon**
Før du tar kontakt, undersøk kunden. Hva er kundens behov? Hva er deres utfordringer? Jo mer du vet, desto bedre kan du tilpasse budskapet.

**Steg 3: Kontakt — Det første møtet**
Førsteinntrykket er avgjørende. Vær forberedt, profesjonell og genuint interessert. Fokuser på å lytte og stille gode spørsmål — ikke på å selge.

**Steg 4: Behovsanalyse — Kartlegg kundens behov**
Still åpne spørsmål for å forstå hva kunden egentlig trenger: «Hva er den største utfordringen din?», «Hva har du prøvd tidligere?», «Hva ville den ideelle løsningen vært for deg?»

**Steg 5: Presentasjon — Vis løsningen**
Presenter produktet som en løsning på kundens spesifikke behov. Fokuser på **nytte** (hva kunden får), ikke bare **egenskaper** (hva produktet er).

**Steg 6: Innvendingshåndtering — Møt motargumenter**
Kunden vil ofte ha innvendinger: «Det er for dyrt», «Jeg må tenke på det», «Jeg har allerede en leverandør». Se innvendinger som spørsmål, ikke avvisning, og svar saklig.

**Steg 7: Avslutning — Lukk salget**
Be om salget på en naturlig måte: «Skal vi sette i gang?», «Ønsker du å bestille?», «Hvilken variant passer best for deg?»

**Steg 8: Oppfølging — Bygg relasjonen videre**
Følg opp etter salget: Er kunden fornøyd? Trenger de hjelp? Oppfølging bygger lojalitet og kan føre til gjenkjøp og anbefalinger.`,
    },
    {
      id: 'eb-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Salgsprosessen for en elevbedrift på skolemarked',
      problem: 'En elevbedrift selger hjemmelagde energibarer på skolens julemarked. Beskriv salgsprosessen de bør følge.',
      solution: `**Steg 1 — Prospektering:**
Alle som besøker julemarkedet er potensielle kunder. Men primærmålgruppen er elever og lærere som er interessert i sunn mat og trening.

**Steg 2 — Forberedelse:**
Teamet har øvd på produktpresentasjonen, kjenner ingrediensene og næringsinnholdet utenat, og har svar klare på vanlige spørsmål.

**Steg 3 — Kontakt:**
«Hei! Har du lyst til å smake en hjemmelaget energibar? Den er laget med norske bær og nøtter, helt uten tilsatt sukker.» — Vennlig, inviterende, ikke påtrengende.

**Steg 4 — Behovsanalyse:**
«Trener du noe?» / «Liker du å ha noe sunt å snacke på i skoletiden?» — Forstå hva kunden er interessert i.

**Steg 5 — Presentasjon:**
Tilpass budskapet: Til en som trener — «Perfekt som energitilskudd før trening, med 15 g protein per bar.» Til en som liker godteri — «Den smaker som en Snickers, men er mye sunnere.»

**Steg 6 — Innvendingshåndtering:**
Kunden: «39 kr er litt dyrt.» Selger: «Jeg skjønner. En Snickers koster rundt 30 kr, men vår bar har dobbelt så mye protein og ingen tilsatt sukker. Og vi har 3-pack til 99 kr — da sparer du 18 kr.»

**Steg 7 — Avslutning:**
«Skal du ha en, eller vil du prøve 3-pack'en?» — Gi kunden et valg mellom to ja-alternativer.

**Steg 8 — Oppfølging:**
«Takk for kjøpet! Følg oss på Instagram @energibaren for nye smaker og tilbud.» — Bygg relasjonen videre digitalt.`,
    },
    {
      id: 'eb-4-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-4-4-oppg-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du fokusere på når du presenterer produktet for kunden?',
        options: [
          { id: 'a', text: 'Alle tekniske egenskaper og spesifikasjoner', isCorrect: false },
          { id: 'b', text: 'Nytten produktet gir kunden — hvordan det løser deres problem', isCorrect: true },
          { id: 'c', text: 'Hvor billig produktet er sammenlignet med konkurrentene', isCorrect: false },
          { id: 'd', text: 'Hvor mye arbeid som ligger bak produktet', isCorrect: false },
        ],
        solution: 'Kunden er opptatt av hva produktet kan gjøre for dem — altså nytten. I stedet for å si «Baren inneholder 15 g protein, 8 g fiber og 200 kcal» (egenskaper), si «Denne baren gir deg nok energi til en hel treningsøkt uten at du føler deg tung etterpå» (nytte). Egenskap forteller, nytte selger.',
      },
    },
    {
      id: 'eb-4-4-text-1',
      type: 'text',
      content: `## Kunderelasjoner og kundelojalitet

Det koster 5–7 ganger mer å skaffe en ny kunde enn å beholde en eksisterende. Derfor er **kunderelasjoner** like viktig som salg. En lojal kunde kjøper mer, anbefaler deg til andre og tilgir feil.

### Kundelojalitetsstigen

Markedsføringsteori beskriver kundens reise som en stige med økende lojalitet:

1. **Suspect** — Alle i markedet som potensielt kan bli kunder
2. **Prospect** — Noen som har vist interesse (besøkt nettsiden, fulgt på Instagram)
3. **Kunde** — Har gjort sitt første kjøp
4. **Gjenkjøper** — Har kjøpt mer enn én gang
5. **Ambassadør** — Anbefaler bedriften aktivt til andre

Målet er å flytte kunder oppover stigen — fra engangs-kunder til lojale ambassadører.

### Hvordan bygge kunderelasjoner

- **Lever kvalitet konsistent** — Produktet må holde det du lover, hver gang
- **Gi god kundeservice** — Svar raskt, vær vennlig, løs problemer effektivt
- **Vis at du bryr deg** — Personlig oppfølging, takke-meldinger, huskelapper
- **Be om tilbakemelding** — Vis at kundens mening betyr noe
- **Belønn lojalitet** — Rabatter, tidlig tilgang til nye produkter, eksklusivt innhold

## Forhandlingsteknikker

Forhandling er en naturlig del av salg — spesielt i **B2B-salg** (business-to-business), der priser, leveringsbetingelser og kontrakter ofte forhandles.

### Grunnprinsipper for forhandling

**1. Forbered deg grundig**
Kjenn ditt eget laveste akseptable resultat (BATNA — Best Alternative To a Negotiated Agreement). Hva er det dårligste tilbudet du kan akseptere?

**2. Forstå motpartens perspektiv**
Hva ønsker kunden egentlig? Pris er sjelden det eneste kriteriet — leveringshastighet, kvalitet, fleksibilitet og relasjon kan være like viktig.

**3. Skap vinn-vinn-løsninger**
De beste forhandlingene ender med at begge parter er fornøyde. Vær kreativ: Hvis kunden vil ha lavere pris, kan du tilby det i bytte mot en større bestilling eller lengre kontrakt.

**4. Lytt mer enn du snakker**
Jo mer du forstår om kundens behov og situasjon, desto bedre kan du tilpasse tilbudet.

**5. Vær villig til å gå**
Noen ganger er den beste forhandlingsteknikken å si nei. Hvis avtalen ikke er lønnsom, er det bedre å gå videre enn å tape penger.`,
    },
    {
      id: 'eb-4-4-def-2',
      type: 'definition',
      title: 'B2C vs. B2B-salg',
      content: `**B2C (Business-to-Consumer)** — Salg fra bedrift direkte til forbruker.
- Eksempler: Nettbutikk, skolemarked, Instagram-butikk
- Kjennetegn: Mange kunder, lave enkeltbeløp, emosjonelle kjøpsbeslutninger, kort salgsprosess
- Kommunikasjon: Visuell, emosjonell, sosiale medier

**B2B (Business-to-Business)** — Salg fra bedrift til bedrift.
- Eksempler: Selge stearinlys til en interiørbutikk, energibarer til et treningssenter, designtjenester til en bedrift
- Kjennetegn: Færre kunder, høyere enkeltbeløp, rasjonelle kjøpsbeslutninger, lengre salgsprosess med forhandling
- Kommunikasjon: Profesjonell, faktabasert, personlig kontakt og nettverksbygging

**For elevbedrifter:** De fleste starter med B2C-salg (direkte til kunder), men B2B kan gi større volum — for eksempel å selge produktet til en butikk eller kantineleverandør.`,
    },
    {
      id: 'eb-4-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-4-4-oppg-2',
        number: '4.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr BATNA i forhandlingssammenheng?',
        options: [
          { id: 'a', text: 'En forhandlingsteknikk der du starter med et veldig høyt krav', isCorrect: false },
          { id: 'b', text: 'Best Alternative To a Negotiated Agreement — ditt beste alternativ hvis forhandlingen ikke fører frem', isCorrect: true },
          { id: 'c', text: 'En metode for å beregne rabatter basert på volum', isCorrect: false },
          { id: 'd', text: 'En avtale mellom to bedrifter om eksklusiv distribusjon', isCorrect: false },
        ],
        solution: 'BATNA (Best Alternative To a Negotiated Agreement) er ditt beste alternativ dersom forhandlingen ikke fører til enighet. Å kjenne sin BATNA gir forhandlingsstyrke: Hvis du har et godt alternativ, trenger du ikke akseptere et dårlig tilbud. Eksempel: Hvis en butikk tilbyr deg en lav innkjøpspris, og du vet at en annen butikk vil betale mer, er det den andre butikken som er din BATNA.',
      },
    },
    {
      id: 'eb-4-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-4-4-oppg-3',
        number: '4.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner B2B-salg sammenlignet med B2C-salg?',
        options: [
          { id: 'a', text: 'Flere kunder, lavere beløp og raskere salgsprosess', isCorrect: false },
          { id: 'b', text: 'Færre kunder, høyere beløp og lengre salgsprosess med forhandling', isCorrect: true },
          { id: 'c', text: 'Bare salg via sosiale medier', isCorrect: false },
          { id: 'd', text: 'Salg uten behov for kundeoppfølging', isCorrect: false },
        ],
        solution: 'B2B-salg kjennetegnes av færre kunder, men høyere enkeltbeløp. Salgsprosessen er lengre fordi kjøpsbeslutninger ofte involverer flere personer og krever forhandling om pris, vilkår og levering. Beslutningene er mer rasjonelle (faktabaserte) enn i B2C, der følelser spiller en større rolle.',
      },
    },
    {
      id: 'eb-4-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-4-4-oppg-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Øv deg på innvendingshåndtering. En kunde sier: «Produktet deres er for dyrt.» Skriv tre ulike svar du kan gi, basert på ulike strategier: (a) vis verdien, (b) tilby et alternativ, (c) still et spørsmål tilbake.',
        hints: ['Husk: En innvending er ikke en avvisning — det er en mulighet til å gi mer informasjon.'],
        solution: '(a) Vis verdien: «Jeg forstår at prisen kan virke høy. Men sammenlignet med [konkurrent/alternativ] får du [bedre kvalitet/lengre holdbarhet/ekstra service], noe som gjør at produktet varer lenger og gir bedre verdi for pengene.» (b) Tilby et alternativ: «Vi har også en mindre variant til [lavere pris], eller du kan få 15 % rabatt ved kjøp av 3 eller flere.» (c) Still spørsmål: «Hva sammenligner du med? Hva er det viktigste for deg — pris eller kvalitet? Hvis jeg kan vise at produktet sparer deg penger på sikt, ville det endret vurderingen din?»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-4-4-oppg-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et rollespill-manus for en salgssituasjon der din elevbedrift selger et produkt til en lokal butikkeier (B2B-salg). Skriv ut dialogen mellom selger og butikkeier, og inkluder alle stegene i salgsprosessen.',
        hints: ['Inkluder minst én innvending fra butikkeieren og vis hvordan selgeren håndterer den.', 'Husk at B2B-salg handler om å vise forretningsverdi, ikke bare produktegenskaper.'],
        solution: 'Et godt rollespill-manus viser hele salgsprosessen: Kontakt (høflig introduksjon), behovsanalyse (spørsmål om butikkens kunder og sortiment), presentasjon (hvordan produktet passer i sortimentet og kan tiltrekke nye kunder), innvendingshåndtering (f.eks. kunden er usikker på om det selger — tilby prøvesalg i kommisjon), avslutning (konkret forslag: «Kan vi starte med 20 enheter i kommisjon i 2 uker?»), og oppfølging (avtale et tidspunkt for å evaluere salget).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-4-4-oppg-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv kundelojalitetsstigen og gi konkrete eksempler på tiltak din elevbedrift kan gjøre for å flytte kunder fra «kunde» til «ambassadør». Inkluder minst tre tiltak.',
        hints: ['Tenk på hva som gjør at du selv anbefaler produkter til venner.'],
        solution: 'Kundelojalitetsstigen: Suspect → Prospect → Kunde → Gjenkjøper → Ambassadør. Tiltak for å flytte kunder oppover: (1) Sende en personlig takke-melding eller e-post etter første kjøp. (2) Tilby rabattkode for neste kjøp inkludert i leveransen. (3) Starte et «Anbefal en venn»-program der kunden og vennen begge får rabatt. (4) Dele kundens bilder/anmeldelser på egne sosiale medier (med tillatelse). (5) Gi lojale kunder tidlig tilgang til nye produkter. (6) Sende et lite personlig brev eller ekstra produkt som overraskelse i bestillingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.4

- **Godt salg** handler om å hjelpe kunden med å løse et problem — ikke om å presse produkter på folk.
- **Salgsprosessen** har åtte steg: prospektering, forberedelse, kontakt, behovsanalyse, presentasjon, innvendingshåndtering, avslutning og oppfølging.
- Fokuser på **nytte** (hva kunden får) fremfor **egenskaper** (hva produktet er).
- **Kunderelasjoner** er like viktig som salg. Det koster 5–7 ganger mer å skaffe en ny kunde enn å beholde en eksisterende.
- **Kundelojalitetsstigen:** Suspect → Prospect → Kunde → Gjenkjøper → Ambassadør.
- **Forhandling** handler om å skape vinn-vinn-løsninger. Kjenn din BATNA.
- **B2B-salg** kjennetegnes av færre kunder, høyere beløp og lengre salgsprosess enn B2C.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Salgsprosessen', definition: 'De åtte stegene fra prospektering til oppfølging som en selger gjennomgår for å fullføre et salg.' },
    { term: 'Innvendingshåndtering', definition: 'Teknikker for å møte og besvare kundens motargumenter på en konstruktiv måte.' },
    { term: 'BATNA', definition: 'Best Alternative To a Negotiated Agreement — ditt beste alternativ hvis forhandlingen ikke fører frem.' },
    { term: 'Kundelojalitetsstigen', definition: 'Modell som beskriver kundens reise fra potensielt interessert (suspect) til lojal ambassadør.' },
    { term: 'B2B vs. B2C', definition: 'Business-to-Business (salg mellom bedrifter) vs. Business-to-Consumer (salg direkte til forbruker).' },
  ],
};

// ============================================================================
// KAPITTEL 4.5: Markedsanalyse
// ============================================================================

export const CHAPTER_ENTREBED_1_4_5: TextbookChapter = {
  id: 'entrebed-1-4-5',
  courseId: 'entrebed-1',
  chapterNumber: '4.5',
  title: 'Markedsanalyse',
  description: 'SWOT-analyse, konkurrentanalyse, markedstrender og hvordan gründere bruker analyser til å ta bedre beslutninger.',
  estimatedMinutes: 23,
  competenceGoals: [
    'utvikle og presentere ein marknadsplan for eit produkt eller ei teneste',
    'gjere greie for korleis marknadsføring kan påverke forbrukarar og samfunn',
  ],
  content: [
    {
      id: 'eb-4-5-intro',
      type: 'text',
      content: `## Kunnskap er makt — også i markedsføring

Før du bruker tid og penger på markedsføring, bør du forstå markedet du opererer i. Hvem er konkurrentene dine? Hva er dine styrker og svakheter? Hvilke trender påvirker bransjen? Hva vil kundene ha i fremtiden?

**Markedsanalyse** gir deg svarene. Det er en systematisk innsamling og vurdering av informasjon om markedet, kundene og konkurrentene. En god markedsanalyse reduserer usikkerheten og hjelper deg med å ta bedre beslutninger.

Mange gründere hopper over denne fasen fordi de er ivrige etter å komme i gang. Men det er som å kjøre bil uten kart — du kan ende opp helt feil sted. En enkel markedsanalyse trenger ikke ta lang tid, men den kan spare deg for kostbare feiltrinn.

**I dette kapittelet skal du lære:**
- SWOT-analyse — et verktøy for å vurdere bedriftens posisjon
- Konkurrentanalyse — forstå hvem du konkurrerer mot og hvordan
- Markedstrender — identifisere muligheter og trusler
- Primær- og sekundærdata — hvordan samle informasjon`,
    },
    {
      id: 'eb-4-5-def-1',
      type: 'definition',
      title: 'SWOT-analyse',
      content: `**SWOT-analyse** er et strategisk analyseverktøy som kartlegger bedriftens interne styrker og svakheter, samt eksterne muligheter og trusler.

**S — Strengths (Styrker)**
Interne faktorer som gir bedriften en fordel:
- Unikt produkt eller teknologi
- Sterkt team med relevant kompetanse
- Godt omdømme eller sterk merkevare
- Lavere kostnader enn konkurrentene
- God beliggenhet eller distribusjon

**W — Weaknesses (Svakheter)**
Interne faktorer som hemmer bedriften:
- Begrenset budsjett eller ressurser
- Manglende erfaring i teamet
- Ukjent merkevare
- Avhengighet av én kunde eller leverandør
- Svak digital tilstedeværelse

**O — Opportunities (Muligheter)**
Eksterne faktorer bedriften kan utnytte:
- Voksende marked eller ny trend
- Endringer i regelverk som favoriserer bedriften
- Konkurrent som sliter eller legger ned
- Ny teknologi som kan brukes
- Endringer i kundeadferd

**T — Threats (Trusler)**
Eksterne faktorer som kan skade bedriften:
- Nye, sterke konkurrenter
- Endringer i kundens preferanser
- Økonomisk nedgang
- Strengere reguleringer
- Teknologisk disruptning

SWOT-analysen gir et overblikk som hjelper deg med å utnytte styrker, forbedre svakheter, gripe muligheter og forberede seg på trusler.`,
    },
    {
      id: 'eb-4-5-example-1',
      type: 'example',
      title: 'Eksempel: SWOT-analyse for en elevbedrift',
      problem: 'En elevbedrift lager og selger bærekraftige handlenett av resirkulert bomull. Gjennomfør en SWOT-analyse.',
      solution: `**Styrker (S):**
- Bærekraftig produkt som appellerer til miljøbevisste kunder
- Lav produksjonskostnad (relativt enkelt å lage)
- Engasjert team med god arbeidsdeling
- Positivt omdømme gjennom Ungt Entreprenørskap-nettverket
- Kan tilpasses med ulike design og trykk

**Svakheter (W):**
- Begrenset produksjonskapasitet (håndlaget)
- Lite markedsføringsbudsjett
- Manglende erfaring med logistikk og distribusjon
- Begrenset levetid for elevbedriften (ett skoleår)
- Avhengig av at teammedlemmer er motivert

**Muligheter (O):**
- Økende miljøbevissthet og etterspørsel etter bærekraftige produkter
- Plastposeavgift gjør handlenett mer attraktivt
- Samarbeid med lokale butikker som ønsker miljøprofil
- Mulighet til å selge på nett (Etsy, egen nettbutikk)
- Julemarkeder og lokale arrangementer gir salgsarenaer

**Trusler (T):**
- Stor konkurranse fra billige handlenett i butikker
- Kunder kan synes prisen er for høy sammenlignet med masseproduserte alternativer
- Avhengig av å finne resirkulert bomull til riktig pris
- Andre elevbedrifter med lignende produkter

**Strategisk konsekvens:**
Elevbedriften bør utnytte styrkene (bærekraft + tilpasning) og mulighetene (økende miljøbevissthet) ved å posisjonere seg som det personlige, bærekraftige alternativet. Samarbeid med lokale butikker (B2B) kan gi volum som kompenserer for begrenset kapasitet.`,
    },
    {
      id: 'eb-4-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'eb-4-5-oppg-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av følgende er interne faktorer i en SWOT-analyse?',
        options: [
          { id: 'a', text: 'Styrker og svakheter', isCorrect: true },
          { id: 'b', text: 'Muligheter og trusler', isCorrect: false },
          { id: 'c', text: 'Styrker og muligheter', isCorrect: false },
          { id: 'd', text: 'Svakheter og trusler', isCorrect: false },
        ],
        solution: 'I SWOT-analysen er Styrker (S) og Svakheter (W) interne faktorer — ting bedriften selv kan påvirke. Muligheter (O) og Trusler (T) er eksterne faktorer — ting i omgivelsene som bedriften ikke direkte kontrollerer, men som påvirker den. Interne faktorer handler om hva bedriften er god/dårlig på, mens eksterne handler om hva som skjer i markedet og samfunnet.',
      },
    },
    {
      id: 'eb-4-5-text-1',
      type: 'text',
      content: `## Konkurrentanalyse

En **konkurrentanalyse** er en systematisk kartlegging av hvem konkurrentene er, hva de tilbyr, og hvordan de posisjonerer seg i markedet. Å forstå konkurrentene er avgjørende for å finne ditt eget konkurransefortrinn.

### Steg i en konkurrentanalyse

**1. Identifiser konkurrentene**
Hvem tilbyr lignende produkter eller tjenester? Skill mellom:
- *Direkte konkurrenter:* Tilbyr samme type produkt til samme målgruppe (en annen elevbedrift som selger handlenett)
- *Indirekte konkurrenter:* Tilbyr alternative løsninger på samme behov (plastposer i butikken, gjenbruksnett fra IKEA)

**2. Analyser konkurrentene**
For hver konkurrent, undersøk:
- Hva tilbyr de? (Produktsortiment, kvalitet, design)
- Hva koster det? (Prisnivå, rabatter, pakketilbud)
- Hvor selger de? (Nettbutikk, fysisk butikk, sosiale medier)
- Hvordan kommuniserer de? (Markedsføring, sosiale medier, merkevare)
- Hva er de gode/dårlige på? (Les anmeldelser, se sosiale medier)

**3. Finn ditt konkurransefortrinn**
Basert på analysen: Hva kan du gjøre bedre eller annerledes enn konkurrentene?
- **Kostnadslederskap:** Lavere pris enn alle andre
- **Differensiering:** Et unikt produkt, design eller opplevelse
- **Nisjefokus:** Rette seg mot en spesifikk målgruppe som konkurrentene overser

Michael Porter (Harvard-professor) kalte disse tre strategiene for **de generiske konkurransestrategiene**.`,
    },
    {
      id: 'eb-4-5-def-2',
      type: 'definition',
      title: 'Porters generiske konkurransestrategier',
      content: `**Michael Porter** identifiserte tre grunnleggende strategier bedrifter kan bruke for å oppnå konkurransefortrinn:

**1. Kostnadslederskap**
Tilby det billigste alternativet i markedet. Krever effektiv produksjon, lave kostnader og stort volum.
- Eksempel: Rema 1000 («Det enkleste er ofte det beste»), Ryanair, H&M

**2. Differensiering**
Tilby noe unikt som kundene verdsetter og er villige til å betale mer for. Kan være design, kvalitet, innovasjon, merkevare eller kundeopplevelse.
- Eksempel: Apple, Tesla, Patagonia

**3. Fokusering (nisje)**
Konsentrere seg om et smalt markedssegment og betjene det bedre enn generalistene. Kan kombineres med enten kostnadslederskap eller differensiering innenfor nisjen.
- Eksempel: Stormberg (friluftsliv + sosial ansvarlighet), Norrøna (premium friluftsklær), en lokal bakeri som spesialiserer seg på glutenfritt

**Viktig:** Porter advarte mot å være «stuck in the middle» — bedrifter som verken er billigst eller mest unike, risikerer å tape i konkurransen.`,
    },
    {
      id: 'eb-4-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'eb-4-5-oppg-2',
        number: '4.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «differensiering» som konkurransestrategi?',
        options: [
          { id: 'a', text: 'Å tilby det billigste alternativet i markedet', isCorrect: false },
          { id: 'b', text: 'Å tilby noe unikt som kundene verdsetter og er villige til å betale mer for', isCorrect: true },
          { id: 'c', text: 'Å kopiere det konkurrentene gjør, men gjøre det litt bedre', isCorrect: false },
          { id: 'd', text: 'Å fokusere på et lite geografisk område', isCorrect: false },
        ],
        solution: 'Differensiering betyr å tilby noe unikt som skiller deg fra konkurrentene — og som kundene verdsetter så mye at de er villige til å betale mer. Apple differensierer seg gjennom design og brukervennlighet. Tesla differensierer seg gjennom teknologisk innovasjon. Patagonia differensierer seg gjennom bærekraft og miljøengasjement.',
      },
    },
    {
      id: 'eb-4-5-text-2',
      type: 'text',
      content: `## Markedstrender

En **trend** er en retning eller utvikling som påvirker markedet over tid. Gründere som identifiserer trender tidlig, kan posisjonere seg for å utnytte dem.

### Aktuelle trender som påvirker gründere

**Bærekraft og sirkulær økonomi**
Forbrukerne blir stadig mer bevisste på miljø og bærekraft. Bedrifter som tilbyr bærekraftige produkter, resirkulering eller reparasjonstjenester har et økende marked.

**Digitalisering og e-handel**
Stadig mer handel flytter til nettet. Sosial handel (kjøp direkte i sosiale medier) og abonnementsmodeller vokser raskt.

**Personalisering**
Kunder forventer tilpassede produkter og opplevelser. Fra personlige Nike-sko til skreddersydde hudpleierutiner — «one-size-fits-all» er på vei ut.

**Helse og velvære**
Økende fokus på fysisk og mental helse. Treningsapper, sunn mat, mindfulness-produkter og søvnteknologi er vekstområder.

**Lokal og autentisk**
Mange kunder foretrekker lokale produkter med en autentisk historie. «Laget i Norge», «håndlaget» og «kortreist» er verdier som resonerer.

### Hvordan identifisere trender

- **Les bransjenyheter og rapporter** (f.eks. Virke Handel, SSB, trendrapporter)
- **Følg med i sosiale medier** — hva engasjerer folk?
- **Observer endringer i kundeadferd** — hva kjøper folk mer/mindre av?
- **Bruk Google Trends** — søk etter nøkkelord og se om interessen øker
- **Snakk med kunder** — spør hva de savner og hva de forventer i fremtiden

## Primær- og sekundærdata

For å gjennomføre en markedsanalyse trenger du data. Det finnes to hovedtyper:

**Primærdata:** Data du samler inn selv — spesifikt for ditt formål.
- Spørreundersøkelser (Google Forms, SurveyMonkey)
- Intervjuer med potensielle kunder
- Observasjon (f.eks. telle kunder i en butikk)
- Fokusgrupper
- Fordel: Skreddersydd til dine spørsmål. Ulempe: Tidkrevende og potensielt kostbart.

**Sekundærdata:** Data som allerede er samlet inn av andre.
- Statistikk fra SSB (Statistisk sentralbyrå)
- Bransjestatistikk og rapporter
- Artikler og forskningsrapporter
- Konkurrentenes nettsider og årsrapporter
- Fordel: Raskt og ofte gratis. Ulempe: Ikke alltid relevant for ditt spesifikke spørsmål.`,
    },
    {
      id: 'eb-4-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'eb-4-5-oppg-3',
        number: '4.5.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er primærdata?',
        options: [
          { id: 'a', text: 'Data som allerede er samlet inn av andre, f.eks. SSB-statistikk', isCorrect: false },
          { id: 'b', text: 'Data du samler inn selv, spesifikt for ditt formål', isCorrect: true },
          { id: 'c', text: 'Data fra konkurrentenes nettsider', isCorrect: false },
          { id: 'd', text: 'Data som er publisert i aviser og tidsskrifter', isCorrect: false },
        ],
        solution: 'Primærdata er data du samler inn selv, skreddersydd for dine spesifikke spørsmål og behov. Eksempler er spørreundersøkelser, intervjuer, observasjoner og fokusgrupper. Sekundærdata er data som allerede er samlet inn av andre (SSB, bransjeorganisasjoner, forskning). For elevbedrifter er en enkel spørreundersøkelse blant medelever et godt eksempel på primærdata.',
      },
    },
    {
      id: 'eb-4-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'eb-4-5-oppg-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en SWOT-analyse for din elevbedrift (eller en fiktiv bedrift). Skriv minst tre punkter under hver kategori (S, W, O, T) og foreslå minst to strategiske tiltak basert på analysen.',
        hints: ['Vær ærlig om svakhetene — det er der du finner forbedringspotensialet.', 'Prøv å koble styrker med muligheter: Hvordan kan du bruke det du er god på til å utnytte en mulighet?'],
        solution: 'En god SWOT-analyse er ærlig og konkret. Strategiske tiltak bør koble faktorene sammen: (1) SO-strategi — bruk styrker til å gripe muligheter (f.eks. «Vi er gode på sosiale medier [S] og kan bruke dette til å nå den økende miljøbevisste målgruppen [O]»). (2) WO-strategi — overkom svakheter for å utnytte muligheter. (3) ST-strategi — bruk styrker til å motvirke trusler. (4) WT-strategi — minimer svakheter for å unngå trusler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'eb-4-5-oppg-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en konkurrentanalyse for din elevbedrift. Identifiser minst to direkte og to indirekte konkurrenter. Analyser hva de tilbyr, deres priser og kommunikasjon. Konkluder med hva som er ditt konkurransefortrinn.',
        hints: ['Bruk konkurrentenes nettsider, sosiale medier og nettbutikker som informasjonskilder.', 'Tenk bredt om indirekte konkurrenter — hvilke andre løsninger finnes på det samme behovet?'],
        solution: 'En grundig konkurrentanalyse inneholder: (1) Oversikt over direkte konkurrenter (lignende produkter) og indirekte konkurrenter (alternative løsninger). (2) Sammenligning av produkt, pris, distribusjon og kommunikasjon. (3) Identifikasjon av hva konkurrentene gjør bra og dårlig. (4) Tydelig konklusjon om eget konkurransefortrinn basert på Porters strategier: kostnadslederskap, differensiering eller nisjefokus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb-4-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'eb-4-5-oppg-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser en markedstrend som er relevant for din elevbedrift (eller bransje). Bruk Google Trends, nyhetsartikler eller sosiale medier for å dokumentere trenden. Forklar hvordan elevbedriften kan utnytte denne trenden i sin markedsføring.',
        hints: ['Søk på Google Trends etter nøkkelord relatert til produktet ditt og se om interessen er stigende.'],
        solution: 'Eksempel: Trenden «bærekraftig mote» viser stigende søkeinteresse i Google Trends de siste 5 årene. For en elevbedrift som selger resirkulerte handlenett, kan denne trenden utnyttes ved å (1) bruke bærekraft som hovedbudskap i all kommunikasjon, (2) merke produktene med konkret miljøinformasjon («denne posen erstatter 500 plastposer»), (3) dele innhold om bærekraft og resirkulering på sosiale medier, og (4) samarbeide med lokale miljøorganisasjoner for troverdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'eb-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 4.5

- **Markedsanalyse** er systematisk innsamling og vurdering av informasjon om markedet, kundene og konkurrentene.
- **SWOT-analyse** kartlegger interne styrker og svakheter, samt eksterne muligheter og trusler.
- **Konkurrentanalyse** identifiserer direkte og indirekte konkurrenter og hjelper deg med å finne ditt konkurransefortrinn.
- **Porters tre strategier:** Kostnadslederskap, differensiering og fokusering (nisje). Unngå å være «stuck in the middle».
- **Markedstrender** som bærekraft, digitalisering, personalisering og lokal autentisitet gir muligheter for gründere.
- **Primærdata** samles inn selv (spørreundersøkelser, intervjuer), mens **sekundærdata** allerede finnes (SSB, rapporter).`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'SWOT-analyse', definition: 'Strategisk verktøy som kartlegger Styrker, Svakheter, Muligheter og Trusler for en bedrift.' },
    { term: 'Konkurrentanalyse', definition: 'Systematisk kartlegging av konkurrentenes produkter, priser, distribusjon og kommunikasjon.' },
    { term: 'Porters generiske strategier', definition: 'Tre grunnstrategier: kostnadslederskap, differensiering og fokusering (nisje).' },
    { term: 'Primærdata', definition: 'Data du samler inn selv, skreddersydd for ditt spesifikke formål.' },
    { term: 'Sekundærdata', definition: 'Data som allerede er samlet inn av andre, f.eks. SSB-statistikk og bransjeapporter.' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const ENTREBED_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_1_4_1,
  CHAPTER_ENTREBED_1_4_2,
  CHAPTER_ENTREBED_1_4_3,
  CHAPTER_ENTREBED_1_4_4,
  CHAPTER_ENTREBED_1_4_5,
];

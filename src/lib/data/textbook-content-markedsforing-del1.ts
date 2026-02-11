/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Markedsføring og ledelse 1 (VG3) - Del 1: Grunnleggende markedsføring
 *
 * Kapittel 1.1–1.5: Hva er markedsføring, markedsføringens utvikling, forretningsideer og mål,
 * målgrupper og segmentering, markedsføringsteorier og modeller.
 *
 * LK20-kompetansemål:
 * - velge og bruke kilder, markedsførings- og ledelsesteorier og modeller
 * - utvikle forretningsideer og mål for virksomheten og vurdere aktuelle målgrupper
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er markedsføring?
// ============================================================================

export const CHAPTER_MARKEDSFORING_1_1: TextbookChapter = {
  id: 'markedsforing-1-1',
  courseId: 'markedsforing',
  chapterNumber: '1.1',
  title: 'Hva er markedsføring?',
  description: 'Forstå hva markedsføring er, hvordan verdi skapes og utveksles, og hvilken rolle markedsføring spiller i moderne virksomheter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, markedsførings- og ledelsesteorier og modeller',
  ],
  content: [
    {
      id: 'mfl-1-1-intro',
      type: 'text',
      content: `## Hva er markedsføring?

Markedsføring er mye mer enn bare reklame. Det handler om å forstå kundenes behov, skape verdi og bygge langsiktige relasjoner mellom virksomheter og kunder.

Tenk på Spotify. De selger ikke bare musikkstrømming – de skaper en personlig opplevelse der algoritmer lærer hva du liker, lager spillelister tilpasset humøret ditt, og gjør det enkelt å oppdage ny musikk. Dette er markedsføring i praksis: å forstå hva kunden vil ha og levere det på en måte som overgår forventningene.

I dette kapittelet skal vi se på:
- Hva markedsføring egentlig innebærer
- Hva verdi og utveksling betyr
- Hvorfor markedsføring er avgjørende for virksomheter`,
    },
    {
      id: 'mfl-1-1-def-1',
      type: 'definition',
      title: 'Markedsføring',
      content: `**Markedsføring** er aktiviteten, settet av institusjoner og prosesser for å skape, kommunisere, levere og utveksle tilbud som har verdi for kunder, klienter, partnere og samfunnet generelt.

Denne definisjonen fra American Marketing Association (AMA) fremhever fire nøkkelfunksjoner:
- **Skape:** Utvikle produkter og tjenester som dekker behov
- **Kommunisere:** Informere og overbevise kunder om verdien
- **Levere:** Gjøre produktet tilgjengelig for kunden
- **Utveksle:** Gjennomføre transaksjoner som gir verdi til begge parter`,
    },
    {
      id: 'mfl-1-1-example-1',
      type: 'example',
      title: 'Eksempel: IKEA og verdiskaping',
      problem: 'Hvordan skaper IKEA verdi for kundene sine?',
      solution: `IKEA skaper verdi gjennom hele verdikjeden:

**Skape:** De designer funksjonelle møbler med skandinavisk stil til lave priser. Flat-pakk-konseptet reduserer produksjons- og fraktkostnader.

**Kommunisere:** IKEA-katalogen (nå digital), inspirerende utstillinger i varehusene og sosiale medier viser hvordan produktene kan brukes.

**Levere:** Store varehus med selvbetjening, nettbutikk med hjemlevering, og Click & Collect gjør produktene tilgjengelige.

**Utveksle:** Kunden får designmøbler til lav pris, IKEA får inntekter. Kunden bidrar selv med montering, noe som holder prisen nede.

IKEAs forretningsidé – «å tilby et bredt utvalg av veldesignede og funksjonelle hjeminnredningsprodukter til så lave priser at så mange som mulig har råd til dem» – er et godt eksempel på kundeverdi.`,
    },
    {
      id: 'mfl-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den beste definisjonen av markedsføring?',
        options: [
          { id: 'a', text: 'Reklame og annonsering i medier', isCorrect: false },
          { id: 'b', text: 'Prosessen med å skape, kommunisere, levere og utveksle verdi for kunder', isCorrect: true },
          { id: 'c', text: 'Salg av produkter til høyest mulig pris', isCorrect: false },
          { id: 'd', text: 'Å lage fine logoer og slagord', isCorrect: false },
        ],
        solution: 'Markedsføring handler om hele prosessen med å skape, kommunisere, levere og utveksle verdi – ikke bare reklame eller salg. Det er en helhetlig tilnærming til å forstå og betjene kunder.',
      },
    },
    {
      id: 'mfl-1-1-def-2',
      type: 'definition',
      title: 'Verdi og kundeverdi',
      content: `**Verdi** i markedsføring handler om forholdet mellom det kunden får (nytte) og det kunden gir (pris, tid, innsats).

**Kundeverdi** = Opplevd nytte – Opplevd kostnad

Nytte kan være:
- **Funksjonell:** Produktet løser et problem (en vinterjakke holder deg varm)
- **Emosjonell:** Produktet gir en god følelse (et luksusmerke gir status)
- **Sosial:** Produktet gir tilhørighet (Apple-produkter signaliserer gruppetilhørighet)

Kostnad kan være:
- **Monetær:** Prisen du betaler
- **Tid:** Tiden du bruker på å finne, kjøpe og lære produktet
- **Innsats:** Fysisk eller mental anstrengelse (montering, opplæring)`,
    },
    {
      id: 'mfl-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Tesla og kundeverdi',
      problem: 'Hvilke verdielementer tilbyr Tesla sine kunder?',
      solution: `**Funksjonell verdi:**
- Lang rekkevidde og rask lading
- Over-the-air programvareoppdateringer (bilen blir bedre over tid)
- Lave driftskostnader (elektrisk vs. fossil)

**Emosjonell verdi:**
- Følelsen av å bidra til et grønnere miljø
- Stolthet over å eie banebrytende teknologi
- Kjøreglede med umiddelbar akselerasjon

**Sosial verdi:**
- Signaliserer miljøbevissthet og teknologiinteresse
- Tilhørighet til Tesla-fellesskapet
- Status som «early adopter»

Tesla-kunder aksepterer en høyere pris fordi den opplevde nytten (funksjonell + emosjonell + sosial) overstiger den opplevde kostnaden.`,
    },
    {
      id: 'mfl-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva menes med «kundeverdi» i markedsføring?',
        options: [
          { id: 'a', text: 'Den prisen kunden betaler for produktet', isCorrect: false },
          { id: 'b', text: 'Forskjellen mellom opplevd nytte og opplevd kostnad for kunden', isCorrect: true },
          { id: 'c', text: 'Hvor mye fortjeneste bedriften får per kunde', isCorrect: false },
          { id: 'd', text: 'Kundens årlige forbruk hos bedriften', isCorrect: false },
        ],
        solution: 'Kundeverdi er forskjellen mellom det kunden opplever å få (funksjonell, emosjonell og sosial nytte) og det kunden opplever å gi (penger, tid, innsats). Høy kundeverdi betyr at kunden føler at de får mye igjen for det de gir.',
      },
    },
    {
      id: 'mfl-1-1-def-3',
      type: 'definition',
      title: 'Utveksling og relasjoner',
      content: `**Utveksling** er kjernen i all markedsføring. Det skjer når to parter gir noe av verdi til hverandre.

For at utveksling skal finne sted, må:
1. Det være minst to parter
2. Hver part ha noe den andre ønsker
3. Partene kunne kommunisere og levere
4. Hver part stå fritt til å akseptere eller avslå
5. Begge parter tro at det er fordelaktig å handle

**Relasjonsmarkedsføring** handler om å bygge langsiktige, gjensidig verdifulle relasjoner med kunder, i stedet for bare å fokusere på enkelttransaksjoner.

REMA 1000 bruker Æ-appen for å bygge slike relasjoner: kundene får personlige rabatter basert på kjøpshistorikk, og REMA 1000 får verdifull innsikt i kundenes preferanser.`,
    },
    {
      id: 'mfl-1-1-example-3',
      type: 'example',
      title: 'Eksempel: Spotify og relasjonsmarkedsføring',
      problem: 'Hvordan bruker Spotify relasjonsmarkedsføring?',
      solution: `Spotify er et godt eksempel på moderne relasjonsmarkedsføring:

**Personalisering:**
- Discover Weekly: Personlige spillelister hver mandag basert på lyttemønsteret ditt
- Daily Mix: Skreddersydde mikser med kjent og ny musikk
- Wrapped: Årlig oppsummering av lyttevanene dine (som millioner deler i sosiale medier)

**Kundelojalitet:**
- Freemium-modell: Gratis versjon med reklame bygger relasjonen
- Family- og Student-abonnementer senker terskelen
- Podcaster og eksklusive innhold øker byttekosten

**Utveksling:**
Kunden gir: Abonnementsavgift + data om lyttemønstre
Spotify gir: Tilgang til millioner av sanger + personlig opplevelse

Denne gjensidige verdiskapingen gjør at kunder blir værende lenge – noe som er mye billigere enn å skaffe nye kunder.`,
    },
    {
      id: 'mfl-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva som menes med utveksling i markedsføring, og gi et eksempel fra en virksomhet du kjenner til.',
        hints: ['Tenk på hva kunden gir og hva kunden får tilbake.'],
        solution: 'Utveksling i markedsføring betyr at to parter gir noe av verdi til hverandre. For eksempel: Når du kjøper en kaffe på Starbucks, gir du penger og tid, mens du får en kaffe, en hyggelig opplevelse og kanskje et sted å jobbe. Starbucks får inntekt og data om kundenes preferanser. Begge parter opplever at de får mer enn de gir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-1-def-4',
      type: 'definition',
      title: 'Markedsføringens rolle i virksomheten',
      content: `Markedsføring er en av virksomhetens kjernefunksjoner, ved siden av produksjon, økonomi og ledelse.

**Markedsføringens hovedoppgaver:**
1. **Markedsanalyse:** Forstå kunder, konkurrenter og trender
2. **Strategiutvikling:** Velge målgrupper og posisjonering
3. **Markedsmiksen:** Utvikle produkt, pris, distribusjon og kommunikasjon
4. **Gjennomføring:** Iverksette markedsplaner og kampanjer
5. **Kontroll:** Måle resultater og justere

**Markedsføring og lønnsomhet:**
Effektiv markedsføring skaper lønnsomhet gjennom:
- Økt salg og markedsandeler
- Høyere priser gjennom sterkere merkevare
- Lavere kundeanskaffelseskostnader gjennom lojalitet
- Bedre ressursutnyttelse gjennom målrettet innsats`,
    },
    {
      id: 'mfl-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-1-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Velg en virksomhet du bruker regelmessig (f.eks. en nettbutikk, en matbutikk eller en strømmetjeneste). Beskriv hvordan virksomheten skaper verdi for deg som kunde gjennom de fire markedsføringsfunksjonene: skape, kommunisere, levere og utveksle.',
        hints: ['Tenk på hele prosessen fra du oppdager produktet til du bruker det.'],
        solution: 'Eksempel med Netflix: Skape – Netflix produserer egne serier og filmer basert på seernes preferanser. Kommunisere – Personlige anbefalinger, trailere og e-poster informerer om nytt innhold. Levere – Strømming gjør innholdet tilgjengelig på alle enheter, overalt og når som helst. Utveksle – Kunden betaler månedlig abonnement og gir data om seerpreferanser, mens Netflix gir ubegrenset underholdning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-1-oppg-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er IKKE en forutsetning for at utveksling skal finne sted?',
        options: [
          { id: 'a', text: 'Det må være minst to parter', isCorrect: false },
          { id: 'b', text: 'Partene må kunne kommunisere', isCorrect: false },
          { id: 'c', text: 'Den ene parten må ha makt over den andre', isCorrect: true },
          { id: 'd', text: 'Begge parter må tro det er fordelaktig å handle', isCorrect: false },
        ],
        solution: 'Utveksling krever frivillighet – begge parter må stå fritt til å akseptere eller avslå. Maktforhold er ikke en forutsetning, og tvang er det motsatte av hva markedsføring handler om.',
      },
    },
    {
      id: 'mfl-1-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-1-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Forklar forskjellen mellom transaksjonsmarkedsføring og relasjonsmarkedsføring. Gi eksempler på virksomheter som bruker hver tilnærming.',
        hints: ['Tenk på forskjellen mellom enkeltsalg og langsiktig kundelojalitet.'],
        solution: 'Transaksjonsmarkedsføring fokuserer på enkeltstående salg – for eksempel en markedsbod som selger varer på et loppemarked. Relasjonsmarkedsføring fokuserer på å bygge langsiktige kundeforhold – for eksempel REMA 1000 med Æ-appen som gir personlige rabatter basert på kjøpshistorikk, eller Spotify som tilpasser musikkopplevelsen for å holde abonnenter. Relasjonsmarkedsføring er mer lønnsomt på sikt fordi det er billigere å beholde eksisterende kunder enn å skaffe nye.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.1

- **Markedsføring** handler om å skape, kommunisere, levere og utveksle verdi for kunder og samfunn.
- **Kundeverdi** er forskjellen mellom opplevd nytte og opplevd kostnad.
- **Utveksling** krever frivillighet, kommunikasjon og gjensidig nytte.
- **Relasjonsmarkedsføring** bygger langsiktige kundeforhold, i motsetning til transaksjonsmarkedsføring som fokuserer på enkeltsalg.
- Markedsføring er en kjernefunksjon i virksomheten som bidrar til lønnsomhet gjennom økt salg, sterkere merkevare og kundelojalitet.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Markedsføring', definition: 'Prosessen med å skape, kommunisere, levere og utveksle verdi for kunder og samfunn.' },
    { term: 'Kundeverdi', definition: 'Forskjellen mellom opplevd nytte og opplevd kostnad for kunden.' },
    { term: 'Utveksling', definition: 'Når to parter gir noe av verdi til hverandre i en frivillig transaksjon.' },
    { term: 'Relasjonsmarkedsføring', definition: 'Markedsføring som fokuserer på å bygge langsiktige, gjensidig verdifulle kundeforhold.' },
    { term: 'Funksjonell verdi', definition: 'Den praktiske nytten et produkt eller en tjeneste gir.' },
    { term: 'Emosjonell verdi', definition: 'Den følelsesmessige nytten et produkt eller en tjeneste gir.' },
  ],
};

// ============================================================================
// Kapittel 1.2: Markedsføringens utvikling
// ============================================================================

export const CHAPTER_MARKEDSFORING_1_2: TextbookChapter = {
  id: 'markedsforing-1-2',
  courseId: 'markedsforing',
  chapterNumber: '1.2',
  title: 'Markedsføringens utvikling',
  description: 'Forstå hvordan markedsføringstenkningen har utviklet seg fra produksjonsorientering via markedsorientering til samfunnsorientering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, markedsførings- og ledelsesteorier og modeller',
  ],
  content: [
    {
      id: 'mfl-1-2-intro',
      type: 'text',
      content: `## Markedsføringens utvikling

Måten virksomheter tenker om markedsføring har endret seg dramatisk gjennom de siste hundre årene. Fra en tid der det handlet om å produsere mest mulig effektivt, til i dag der bærekraft, kundeopplevelse og samfunnsansvar er i sentrum.

Denne utviklingen kan deles inn i fem faser, der hver fase representerer et skifte i fokus og filosofi.`,
    },
    {
      id: 'mfl-1-2-def-1',
      type: 'definition',
      title: 'Produksjonsorientering (ca. 1900–1930)',
      content: `**Produksjonsorientering** innebærer at virksomheten fokuserer på å produsere varer så effektivt og billig som mulig.

**Filosofi:** «Bygg det, så kommer kundene.»

**Kjennetegn:**
- Fokus på masseproduksjon og effektivitet
- Etterspørselen er større enn tilbudet – det meste som produseres blir solgt
- Lite behov for markedsanalyse
- Kunden har få valgmuligheter

**Historisk kontekst:**
Under den industrielle revolusjonen var det knapphet på varer. Henry Fords samlebåndsproduksjon av T-Ford er det klassiske eksempelet: «Kunden kan få bilen i hvilken farge han vil, så lenge den er svart.»`,
    },
    {
      id: 'mfl-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Ford og produksjonsorientering',
      problem: 'Hvordan illustrerer Henry Ford produksjonsorientering?',
      solution: `Henry Ford revolusjonerte bilindustrien med samlebåndsproduksjon i 1913.

**Produksjonsfokus:**
- Standardisert produkt: Alle T-Ford var like (og svarte)
- Effektiv produksjon: Samlebåndet kuttet produksjonstiden fra 12 timer til 93 minutter
- Lav pris: Prisen falt fra 850 til 260 dollar

**Resultater:**
Millioner av amerikanere kunne nå ha råd til bil. Men da konkurrenter som General Motors begynte å tilby ulike modeller, farger og funksjoner, tapte Ford markedsandeler. Kundene ville ha valgmuligheter.

**Lærdommen:** Produksjonsorientering fungerer i markeder med knapphet, men svikter når konkurransen øker og kundene får flere valg.`,
    },
    {
      id: 'mfl-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner produksjonsorientering?',
        options: [
          { id: 'a', text: 'Fokus på å forstå kundens behov før produksjon', isCorrect: false },
          { id: 'b', text: 'Fokus på å produsere mest mulig effektivt og billig', isCorrect: true },
          { id: 'c', text: 'Fokus på bærekraft og samfunnsansvar', isCorrect: false },
          { id: 'd', text: 'Fokus på aggressivt salg og reklame', isCorrect: false },
        ],
        solution: 'Produksjonsorientering handler om effektiv produksjon til lave kostnader. Filosofien er at kundene vil velge produkter som er tilgjengelige og rimelige, så virksomheten bør fokusere på å produsere mest mulig effektivt.',
      },
    },
    {
      id: 'mfl-1-2-def-2',
      type: 'definition',
      title: 'Produkt- og salgsorientering',
      content: `**Produktorientering (ca. 1930–1950):**
Virksomheten fokuserer på å lage best mulig produkt. Antakelsen er at kunder automatisk velger produktet med høyest kvalitet.

**Risiko:** «Markedsføringsnærsynthet» (marketing myopia) – man glemmer å spørre om kunden faktisk vil ha det man lager.

**Salgsorientering (ca. 1950–1970):**
Virksomheten fokuserer på aggressivt salg og reklame. Filosofien er: «Selg det vi produserer.»

**Kjennetegn:**
- Store reklamebudsjetter
- Aggressive salgsteknikker
- Press på selgerne for å nå salgsmål
- Fokus på kortsiktig salg, ikke langsiktige kundeforhold

**Risiko:** Kunder kan bli misfornøyde med kjøp de ble presset til, og virksomheten mister tillit.`,
    },
    {
      id: 'mfl-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Kodak og markedsføringsnærsynthet',
      problem: 'Hvordan illustrerer Kodak farene ved produktorientering?',
      solution: `Kodak var verdensledende innen film og fotografi i over hundre år.

**Produktorientering:**
- De utviklet stadig bedre film og kameraer
- De fokuserte på produktkvalitet fremfor kundens egentlige behov
- De hadde faktisk oppfunnet digitalkameraet i 1975, men la det i skuffen

**Hva gikk galt:**
Kodak definerte seg som et «filmselskap» i stedet for et «minnebevaringsselskap». De misforsto kundens egentlige behov: Kunden ville ikke ha film – kunden ville bevare minner. Da smarttelefoner med kamera kom, kollapset Kodaks forretningsmodell.

**Lærdommen:** Produktorientering kan gjøre virksomheten blind for endringer i kundens behov og teknologiske skifter.`,
    },
    {
      id: 'mfl-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-2-oppg-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva «markedsføringsnærsynthet» (marketing myopia) betyr, og gi et eksempel på en virksomhet som har blitt rammet av dette.',
        hints: ['Tenk på virksomheter som har definert seg for snevert – hva de selger i stedet for hvilket behov de dekker.'],
        solution: 'Markedsføringsnærsynthet betyr at en virksomhet fokuserer på produktet i stedet for på kundens underliggende behov. Kodak er et klassisk eksempel: De definerte seg som et filmselskap i stedet for et minnebevaringsselskap, og overså digitalfotografiet. Et norsk eksempel kan være Narvesen, som tradisjonelt var en avisutsalg, men som måtte transformere seg til en dagligvarekiosk etter hvert som folk sluttet å kjøpe papiraviser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-2-def-3',
      type: 'definition',
      title: 'Markedsorientering (ca. 1970–)',
      content: `**Markedsorientering** innebærer at virksomheten setter kundens behov i sentrum for all virksomhet.

**Filosofi:** «Finn ut hva kunden vil ha, og lever det.»

**Kjennetegn:**
- Systematisk kartlegging av kundenes behov og ønsker
- Markedsundersøkelser og kundedata styrer beslutninger
- Produktutvikling basert på kundeinnsikt
- Alle avdelinger jobber mot kundetilfredshet
- Langsiktige kundeforhold prioriteres

**Nøkkelelementer:**
1. **Kundeinnsikt:** Forstå hva kunden virkelig trenger
2. **Koordinering:** Alle avdelinger jobber sammen for kunden
3. **Lønnsomhet:** Kundetilfredshet fører til lønnsomhet på sikt`,
    },
    {
      id: 'mfl-1-2-example-3',
      type: 'example',
      title: 'Eksempel: REMA 1000 og markedsorientering',
      problem: 'Hvordan viser REMA 1000 markedsorientering i praksis?',
      solution: `REMA 1000 er et godt eksempel på markedsorientering i norsk dagligvarehandel:

**Kundeinnsikt:**
- Æ-appen samler data om kundenes kjøpsvaner
- Personlige tilbud basert på hva kunden faktisk kjøper
- Kundeundersøkelser styrer sortimentet

**Kundefokus:**
- «Det enkle er ofte det beste» – enkel butikkdesign, oversiktlige hyller
- Lavpriskonsept basert på at norske kunder er prisbevisste
- Lokalt tilpasset sortiment i ulike butikker

**Koordinering:**
- Butikksjefene har stor frihet til å tilpasse tilbudet lokalt
- Direktekontakt mellom butikk og leverandør
- Hele organisasjonen er rettet mot kundens handleopplevelse

REMA 1000 lykkes fordi de kontinuerlig spør: «Hva vil kunden ha?» – og tilpasser seg svaret.`,
    },
    {
      id: 'mfl-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-2-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva skiller markedsorientering fra salgsorientering?',
        options: [
          { id: 'a', text: 'Markedsorientering starter med kundens behov, salgsorientering starter med produktet', isCorrect: true },
          { id: 'b', text: 'Salgsorientering er mer lønnsom enn markedsorientering', isCorrect: false },
          { id: 'c', text: 'Det er ingen vesentlig forskjell mellom dem', isCorrect: false },
          { id: 'd', text: 'Markedsorientering bruker ikke reklame', isCorrect: false },
        ],
        solution: 'Den viktigste forskjellen er utgangspunktet: Markedsorientering starter med å forstå kundens behov og utvikler tilbudet deretter. Salgsorientering starter med et ferdig produkt og prøver å overbevise kunden om å kjøpe det. Markedsorientering gir mer fornøyde kunder og bedre lønnsomhet på sikt.',
      },
    },
    {
      id: 'mfl-1-2-def-4',
      type: 'definition',
      title: 'Samfunnsorientering og bærekraftig markedsføring',
      content: `**Samfunnsorientering** utvider markedsorienteringen til å også ta hensyn til samfunnets interesser, miljøet og etikk.

**Filosofi:** «Dekk kundens behov på en måte som også er bra for samfunnet og miljøet.»

**Kjennetegn:**
- Trippel bunnlinje: Økonomi, miljø og sosiale hensyn
- Bærekraftig produksjon og forbruk
- Etisk markedsføring uten villedning
- Samfunnsansvar (CSR) som integrert del av strategien
- Transparens og ærlighet i kommunikasjonen

**Drivkrefter:**
- Klimakrisen og økt miljøbevissthet
- Kunder som forventer ansvarlige virksomheter
- Regulering og lovkrav
- Sosiale medier gjør det vanskelig å skjule uetisk praksis`,
    },
    {
      id: 'mfl-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Velg en virksomhet du kjenner til og vurder hvilken markedsføringsorientering den har. Begrunn svaret ditt med konkrete eksempler.',
        hints: ['Se på virksomhetens kommunikasjon, produkter og verdier – hva fokuserer de på?'],
        solution: 'Eksempel med Patagonia: Patagonia er samfunnsorientert. De oppfordrer kunder til å kjøpe mindre («Don\'t Buy This Jacket»-kampanjen), reparerer brukte klær, bruker resirkulerte materialer, og donerer 1 % av omsetningen til miljøorganisasjoner. De setter miljøet foran kortsiktig profitt, men oppnår sterk kundelojalitet og lønnsomhet på lang sikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-2-oppg-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Sett de fem markedsføringsorienteringene i riktig historisk rekkefølge, fra eldst til nyest.',
        options: [
          { id: 'a', text: 'Produksjon \u2192 Produkt \u2192 Salg \u2192 Marked \u2192 Samfunn', isCorrect: true },
          { id: 'b', text: 'Salg \u2192 Produksjon \u2192 Marked \u2192 Produkt \u2192 Samfunn', isCorrect: false },
          { id: 'c', text: 'Marked \u2192 Salg \u2192 Produksjon \u2192 Samfunn \u2192 Produkt', isCorrect: false },
          { id: 'd', text: 'Produkt \u2192 Samfunn \u2192 Salg \u2192 Produksjon \u2192 Marked', isCorrect: false },
        ],
        solution: 'Den historiske utviklingen er: Produksjonsorientering (1900\u20131930) \u2192 Produktorientering (1930\u20131950) \u2192 Salgsorientering (1950\u20131970) \u2192 Markedsorientering (1970\u2013) \u2192 Samfunnsorientering (moderne). Hver fase representerer et skifte i fokus fra intern effektivitet til ekstern kundefokus og til slutt samfunnsansvar.',
      },
    },
    {
      id: 'mfl-1-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-2-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Drøft om det er mulig for en virksomhet å være samfunnsorientert og samtidig svært lønnsom. Bruk minst to eksempler i svaret ditt.',
        hints: ['Tenk på virksomheter som har gjort bærekraft til en del av forretningsmodellen.'],
        solution: 'Ja, det er mulig og stadig vanligere. IKEA satser tungt på bærekraft (fornybar energi, resirkulerte materialer, tilbakekjøpsprogram for brukte møbler) og er samtidig svært lønnsomt. Tesla har gjort elektriske biler til et statussymbol og er verdens mest verdifulle bilprodusent. Begge viser at samfunnsansvar kan være et konkurransefortrinn, ikke en kostnad. Bærekraftige virksomheter tiltrekker seg bevisste kunder, dyktige ansatte og langsiktige investorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.2

- **Produksjonsorientering:** Fokus på effektiv produksjon. Fungerer i markeder med knapphet.
- **Produktorientering:** Fokus på produktkvalitet. Risiko for markedsføringsnærsynthet.
- **Salgsorientering:** Fokus på aggressivt salg. Kan skade kundeforhold.
- **Markedsorientering:** Fokus på kundens behov. Den dominerende tilnærmingen i dag.
- **Samfunnsorientering:** Utvider kundefokuset til å også inkludere miljø, etikk og samfunnsansvar.
- Utviklingen har gått fra «produser og selg» til «forstå og lever» til «bidra positivt».`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Produksjonsorientering', definition: 'Fokus på effektiv produksjon til lave kostnader. Filosofi: Bygg det, så kommer kundene.' },
    { term: 'Produktorientering', definition: 'Fokus på å lage best mulig produkt. Risiko for markedsføringsnærsynthet.' },
    { term: 'Salgsorientering', definition: 'Fokus på aggressivt salg og reklame for å selge det som allerede er produsert.' },
    { term: 'Markedsorientering', definition: 'Fokus på å forstå og dekke kundens behov som utgangspunkt for all virksomhet.' },
    { term: 'Samfunnsorientering', definition: 'Fokus på å dekke kundens behov på en måte som også er bra for samfunnet og miljøet.' },
    { term: 'Markedsføringsnærsynthet', definition: 'Å fokusere på produktet fremfor kundens underliggende behov (marketing myopia).' },
  ],
};

// ============================================================================
// Kapittel 1.3: Forretningsideer og virksomhetens mål
// ============================================================================

export const CHAPTER_MARKEDSFORING_1_3: TextbookChapter = {
  id: 'markedsforing-1-3',
  courseId: 'markedsforing',
  chapterNumber: '1.3',
  title: 'Forretningsideer og virksomhetens mål',
  description: 'Forstå hva en forretningsidé er, hvordan visjon og misjon styrer virksomheten, og hvordan man setter gode mål med SMART-modellen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utvikle forretningsideer og mål for virksomheten og vurdere aktuelle målgrupper',
  ],
  content: [
    {
      id: 'mfl-1-3-intro',
      type: 'text',
      content: `## Forretningsideer og virksomhetens mål

Enhver vellykket virksomhet starter med en god forretningsidé. Men en idé alene er ikke nok – den må forankres i en klar visjon, en tydelig misjon og konkrete mål som styrer virksomheten i riktig retning.

I dette kapittelet skal vi se på:
- Hva som kjennetegner en god forretningsidé
- Forskjellen mellom visjon og misjon
- Hvordan sette gode mål med SMART-modellen
- Sammenhengen mellom idé, mål og strategi`,
    },
    {
      id: 'mfl-1-3-def-1',
      type: 'definition',
      title: 'Forretningsidé',
      content: `En **forretningsidé** beskriver hva virksomheten skal tilby, til hvem, og hvordan den skal tjene penger.

En god forretningsidé svarer på tre spørsmål:
1. **Hva?** – Hvilket produkt eller tjeneste tilbyr vi?
2. **Hvem?** – Hvem er kundene våre?
3. **Hvordan?** – Hvordan skaper vi verdi og tjener penger?

**Kjennetegn på en god forretningsidé:**
- Løser et reelt problem eller dekker et behov
- Har kunder som er villige til å betale
- Er gjennomførbar med tilgjengelige ressurser
- Har et bærekraftig konkurransefortrinn
- Er skalerbar (kan vokse)`,
    },
    {
      id: 'mfl-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Forretningsideer fra kjente virksomheter',
      problem: 'Analyser forretningsideene til IKEA, Spotify og REMA 1000.',
      solution: `**IKEA:**
- *Hva:* Funksjonelle, veldesignede hjeminnredningsprodukter
- *Hvem:* Prisbevisste kunder som vil ha moderne design
- *Hvordan:* Flat-pakk, selvbetjening, stordriftsfordeler = lav pris

**Spotify:**
- *Hva:* Personalisert musikkstrømming
- *Hvem:* Alle som hører på musikk, spesielt yngre brukere
- *Hvordan:* Freemium-modell (gratis med reklame / betalt uten), algoritmer for personalisering

**REMA 1000:**
- *Hva:* Dagligvarer til lave priser
- *Hvem:* Prisbevisste norske forbrukere
- *Hvordan:* Effektiv drift, begrenset sortiment, egne merkevarer, franchisetakermodell

Alle tre har til felles at forretningsideen er enkel å forstå og tydelig differensiert fra konkurrentene.`,
    },
    {
      id: 'mfl-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke tre spørsmål må en forretningsidé svare på?',
        options: [
          { id: 'a', text: 'Hva tilbyr vi, hvem er kundene, og hvordan tjener vi penger?', isCorrect: true },
          { id: 'b', text: 'Hvor mye koster det, hvem betaler, og når?', isCorrect: false },
          { id: 'c', text: 'Hvem er sjefen, hvor er kontoret, og hva er lønnen?', isCorrect: false },
          { id: 'd', text: 'Hva er trenden, hvem er konkurrentene, og hva er loven?', isCorrect: false },
        ],
        solution: 'En forretningsidé må svare på hva virksomheten tilbyr (produkt/tjeneste), hvem kundene er (målgruppe), og hvordan den skaper verdi og tjener penger (forretningsmodell). Disse tre elementene er grunnmuren i enhver virksomhet.',
      },
    },
    {
      id: 'mfl-1-3-def-2',
      type: 'definition',
      title: 'Visjon og misjon',
      content: `**Visjon** er et fremtidsbilde som beskriver hva virksomheten ønsker å oppnå på lang sikt. Det er drømmen som inspirerer og gir retning.

**Eksempler på visjoner:**
- IKEA: «Å skape en bedre hverdag for de mange menneskene»
- Tesla: «Å akselerere verdens overgang til bærekraftig energi»
- Spotify: «Å frigjøre potensialet i menneskelig kreativitet»

**Misjon** (formål) beskriver hva virksomheten gjør i dag for å nærme seg visjonen. Det forklarer virksomhetens eksistensgrunnlag.

**Forskjellen:**
- Visjonen ser fremover: «Hvor vil vi?»
- Misjonen ser på nåtiden: «Hva gjør vi, for hvem, og hvorfor?»

En god visjon er inspirerende og ambisiøs. En god misjon er konkret og handlingsrettet.`,
    },
    {
      id: 'mfl-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Teslas visjon og misjon',
      problem: 'Analyser sammenhengen mellom Teslas visjon, misjon og handlinger.',
      solution: `**Visjon:** «Å akselerere verdens overgang til bærekraftig energi.»

**Misjon:** Å designe, utvikle, produsere og selge elektriske kjøretøy og bærekraftige energiløsninger.

**Hvordan henger det sammen?**

Visjonen (bærekraftig energi) gir retning for alle beslutninger:
- **Elbiler:** Tesla Model 3/Y gjør elbiler tilgjengelige for mange
- **Solenergi:** Tesla Solar og Powerwall for bærekraftig energiproduksjon
- **Åpne patenter:** Tesla har åpnet sine elbilpatenter for å akselerere bransjens overgang
- **Supercharger-nettverk:** Gjør langkjøring med elbil praktisk

Alt Tesla gjør knytter tilbake til visjonen. Det gir konsistens og troverdighet, og gjør det enkelt for kunder og ansatte å forstå hva virksomheten står for.`,
    },
    {
      id: 'mfl-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-3-oppg-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom visjon og misjon. Skriv deretter en visjon og en misjon for en fiktiv kafé som fokuserer på bærekraftig kaffe.',
        hints: ['Visjonen skal være inspirerende og fremtidsrettet. Misjonen skal være konkret og beskrive hva kaféen gjør i dag.'],
        solution: 'Visjonen ser fremover og beskriver drømmen – «Hvor vil vi?». Misjonen beskriver nåtiden – «Hva gjør vi, for hvem, og hvorfor?». Eksempel for en bærekraftig kafé: Visjon: «En verden der hvert kopp kaffe gjør godt for både mennesker og natur.» Misjon: «Vi serverer økologisk, rettferdig handlet kaffe i gjenbrukskopper og støtter lokale kaffefarmer med 10 % av overskuddet.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-3-def-3',
      type: 'definition',
      title: 'SMART-mål',
      content: `**SMART-modellen** brukes for å sette gode, konkrete mål. Hvert mål bør være:

- **S – Spesifikt:** Klart og tydelig formulert. Hva skal oppnås?
- **M – Målbart:** Kan vi måle om målet er nådd? Bruk tall.
- **A – Oppnåelig (Achievable):** Er målet realistisk med tilgjengelige ressurser?
- **R – Relevant:** Er målet viktig for virksomhetens overordnede strategi?
- **T – Tidsbegrenset:** Når skal målet være nådd?

**Dårlig mål:** «Vi vil øke salget.»
**SMART-mål:** «Vi skal øke salget av økologiske produkter med 15 % innen 31. desember 2026 gjennom ny nettbutikk og målrettet markedsføring på sosiale medier.»`,
    },
    {
      id: 'mfl-1-3-example-3',
      type: 'example',
      title: 'Eksempel: SMART-mål for en nettbutikk',
      problem: 'Gjør følgende mål om til SMART-mål: «Vi vil ha flere kunder på nettbutikken.»',
      solution: `**Originalt mål:** «Vi vil ha flere kunder på nettbutikken.»

**SMART-analyse:**
- Ikke spesifikt – «flere» er vagt
- Ikke målbart – ingen tall
- Oppnåelig – vet ikke
- Relevant – kanskje
- Ikke tidsbegrenset – ingen frist

**SMART-versjon:** «Vi skal øke antall unike besøkende på nettbutikken fra 5 000 til 8 000 per måned innen 1. juni 2026, gjennom søkemotoroptimalisering og annonsering på Instagram.»

**Sjekk:**
- Spesifikt: Unike besøkende på nettbutikken
- Målbart: Fra 5 000 til 8 000 (60 % økning)
- Oppnåelig: Realistisk med SEO og annonsering
- Relevant: Flere besøkende gir mer salg
- Tidsbegrenset: Innen 1. juni 2026`,
    },
    {
      id: 'mfl-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-3-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et SMART-mål?',
        options: [
          { id: 'a', text: 'Vi vil bli markedsleder', isCorrect: false },
          { id: 'b', text: 'Vi skal øke kundetilfredsheten til over 85 % innen Q4 2026', isCorrect: true },
          { id: 'c', text: 'Vi ønsker å tjene mer penger neste år', isCorrect: false },
          { id: 'd', text: 'Vi skal gjøre kundene glade', isCorrect: false },
        ],
        solution: 'Alternativ B er det eneste SMART-målet: Det er spesifikt (kundetilfredshet), målbart (over 85 %), oppnåelig (realistisk), relevant (kundetilfredshet driver lojalitet), og tidsbegrenset (innen Q4 2026). De andre alternativene er for vage til å være nyttige.',
      },
    },
    {
      id: 'mfl-1-3-def-4',
      type: 'definition',
      title: 'Målhierarki',
      content: `Virksomhetens mål organiseres i et **målhierarki** – fra overordnede til operasjonelle:

**1. Hovedmål (visjon/misjon):**
Den overordnede retningen. Eksempel: «Bli Norges mest bærekraftige klesmerke.»

**2. Strategiske mål:**
Langsiktige mål (3–5 år) som støtter hovedmålet. Eksempel: «Innen 2028 skal 100 % av materialene våre være resirkulerte eller fornybare.»

**3. Taktiske mål:**
Mellomlangsiktige mål (1–2 år) for avdelinger. Eksempel: «Markedsavdelingen skal øke kjennskap til bærekraftprofilen vår med 30 % innen 2027.»

**4. Operasjonelle mål:**
Kortsiktige mål (uker/måneder) for daglig drift. Eksempel: «Denne måneden skal vi publisere 12 innlegg om bærekraft på Instagram.»

Alle nivåer henger sammen: Hvert operasjonelt mål bidrar oppover mot visjonen.`,
    },
    {
      id: 'mfl-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Lag et målhierarki for en fiktiv sportsklesbutikk kalt «AktivNorge». Inkluder visjon, ett strategisk mål, ett taktisk mål og ett operasjonelt mål.',
        hints: ['Start med visjonen (drømmen), og jobb deg nedover til konkrete, daglige handlinger.'],
        solution: 'Eksempel: Visjon: «Gjøre alle nordmenn aktive gjennom tilgjengelig og bærekraftig sportsutstyr.» Strategisk mål: «Innen 2028 skal AktivNorge ha 50 butikker i Norge og en nettbutikk med 200 000 månedlige besøkende.» Taktisk mål: «I 2026 skal markedsavdelingen øke følgertallet på Instagram fra 15 000 til 40 000 gjennom influencer-samarbeid.» Operasjonelt mål: «Denne uken skal vi kontakte fem relevante influencere og sende dem produktpakker for testing.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-3-oppg-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom strategiske og operasjonelle mål?',
        options: [
          { id: 'a', text: 'Strategiske mål er langsiktige og overordnede, operasjonelle er kortsiktige og konkrete', isCorrect: true },
          { id: 'b', text: 'Operasjonelle mål er viktigere enn strategiske mål', isCorrect: false },
          { id: 'c', text: 'Strategiske mål gjelder kun ledelsen, operasjonelle gjelder kun ansatte', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begge beskriver det samme', isCorrect: false },
        ],
        solution: 'Strategiske mål er langsiktige (3–5 år) og setter retningen for hele virksomheten. Operasjonelle mål er kortsiktige (uker/måneder) og beskriver konkrete handlinger i daglig drift. Begge er viktige, men de opererer på ulike tidshorisonter og detaljnivåer.',
      },
    },
    {
      id: 'mfl-1-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-3-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Finn en norsk virksomhet og undersøk dens visjon og/eller misjon (du finner dette ofte på virksomhetens nettside under «Om oss»). Vurder om visjonen er god: Er den inspirerende, ambisiøs og retningsgivende?',
        hints: ['Sjekk nettsidene til virksomheter som DNB, Orkla, Telenor eller Stormberg.'],
        solution: 'Eksempel med Stormberg: Stormbergs visjon er å lage sportsutstyr for alle, uansett kropp, alder eller funksjonsevne. Visjonen er inspirerende fordi den inkluderer alle, ambisiøs fordi den utfordrer en bransje som ofte fokuserer på topputøvere, og retningsgivende fordi den styrer produktutvikling (store størrelser, tilpassede produkter) og markedsføring (mangfoldig representasjon i kampanjer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'mfl-1-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.3

- En **forretningsidé** beskriver hva virksomheten tilbyr, til hvem og hvordan den tjener penger.
- **Visjonen** er drømmen om fremtiden, **misjonen** beskriver hva virksomheten gjør i dag.
- **SMART-mål** er spesifikke, målbare, oppnåelige, relevante og tidsbegrensede.
- Et **målhierarki** organiserer mål fra overordnede (visjon) til operative (daglige handlinger).
- Alle mål må henge sammen: Daglige handlinger skal bidra mot visjonen.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Forretningsidé', definition: 'Beskrivelse av hva virksomheten tilbyr, til hvem, og hvordan den tjener penger.' },
    { term: 'Visjon', definition: 'Et inspirerende fremtidsbilde som beskriver hva virksomheten ønsker å oppnå på lang sikt.' },
    { term: 'Misjon', definition: 'Beskrivelse av virksomhetens formål – hva den gjør, for hvem, og hvorfor.' },
    { term: 'SMART-mål', definition: 'Mål som er spesifikke, målbare, oppnåelige, relevante og tidsbegrensede.' },
    { term: 'Målhierarki', definition: 'Organisering av mål fra overordnede (visjon) til operative (daglige handlinger).' },
    { term: 'Strategiske mål', definition: 'Langsiktige mål (3–5 år) som setter retningen for virksomheten.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Målgrupper og segmentering
// ============================================================================

export const CHAPTER_MARKEDSFORING_1_4: TextbookChapter = {
  id: 'markedsforing-1-4',
  courseId: 'markedsforing',
  chapterNumber: '1.4',
  title: 'Målgrupper og segmentering',
  description: 'Forstå hvordan virksomheter deler markedet inn i segmenter og velger målgrupper basert på demografiske, geografiske, psykografiske og atferdsbaserte kriterier.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utvikle forretningsideer og mål for virksomheten og vurdere aktuelle målgrupper',
  ],
  content: [
    {
      id: 'mfl-1-4-intro',
      type: 'text',
      content: `## Målgrupper og segmentering

Ingen virksomhet kan tilfredsstille alle kunder med ett og samme tilbud. Mennesker har ulike behov, preferanser og kjøpekraft. Derfor er det avgjørende å velge hvem man vil rette seg mot.

Tenk på Spotify: De tilbyr ulike abonnementer for studenter, familier og enkeltpersoner, fordi disse gruppene har ulike behov og betalingsvilje. Spotify deler altså markedet inn i segmenter og tilpasser tilbudet.

I dette kapittelet skal vi se på:
- Hva segmentering er og hvorfor det er viktig
- Fire hovedtyper segmentering
- Hvordan velge riktig målgruppe
- Forskjellen mellom udifferensiert, differensiert og konsentrert markedsføring`,
    },
    {
      id: 'mfl-1-4-def-1',
      type: 'definition',
      title: 'Segmentering',
      content: `**Segmentering** er prosessen med å dele et stort, heterogent marked inn i mindre, homogene grupper (segmenter) som har lignende behov, egenskaper eller atferd.

**Hvorfor segmentere?**
- Kundene er forskjellige – ett tilbud passer ikke alle
- Ressursene er begrenset – vi kan ikke nå alle
- Konkurransen er hard – vi trenger å skille oss ut
- Målrettet markedsføring er mer effektivt enn massemarkedsføring

**Krav til et godt segment:**
- **Målbart:** Vi kan identifisere og telle kundene
- **Tilgjengelig:** Vi kan nå segmentet med markedsføring
- **Stort nok:** Segmentet er lønnsomt å betjene
- **Differensierbart:** Segmentet reagerer annerledes enn andre segmenter
- **Handlingsbart:** Vi kan utvikle et tilpasset tilbud`,
    },
    {
      id: 'mfl-1-4-example-1',
      type: 'example',
      title: 'Eksempel: IKEA og segmentering',
      problem: 'Hvordan segmenterer IKEA markedet sitt?',
      solution: `IKEA segmenterer markedet på flere måter:

**Demografisk:**
- Studenter og unge voksne (første egen bolig – billige basisprodukter)
- Barnefamilier (barnemøbler, oppbevaring, holdbart)
- Par uten barn (designmøbler, kjøkkenløsninger)

**Psykografisk:**
- Prisbevisste kunder som verdsetter design
- DIY-entusiaster som liker å bygge selv
- Miljøbevisste kunder (bærekraftige materialer)

**Atferdsbasert:**
- IKEA Family-medlemmer (lojalitetsprogram med rabatter)
- Nettshoppere vs. varehusbesøkende
- Hyppige vs. sjeldne kunder

IKEA tilpasser kommunikasjonen og produktutvalget til hvert segment, men har en felles kjerne: «Godt design til lav pris.»`,
    },
    {
      id: 'mfl-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med segmentering?',
        options: [
          { id: 'a', text: 'Å dele markedet inn i grupper med lignende behov for å kunne tilpasse tilbudet', isCorrect: true },
          { id: 'b', text: 'Å selge det samme produktet til alle kunder', isCorrect: false },
          { id: 'c', text: 'Å redusere antall produkter virksomheten tilbyr', isCorrect: false },
          { id: 'd', text: 'Å øke prisen på produktene', isCorrect: false },
        ],
        solution: 'Segmentering handler om å dele markedet inn i grupper med lignende behov, slik at virksomheten kan tilpasse tilbudet og markedsføringen til hver gruppe. Dette gir mer effektiv bruk av ressurser og bedre kundetilfredshet.',
      },
    },
    {
      id: 'mfl-1-4-def-2',
      type: 'definition',
      title: 'Demografisk og geografisk segmentering',
      content: `**Demografisk segmentering** deler markedet etter målbare befolkningsvariabler:
- **Alder:** Barn, ungdom, voksne, eldre
- **Kjønn:** Mann, kvinne, ikke-binær
- **Inntekt:** Lav, middels, høy
- **Utdanning:** Grunnskole, videregående, høyskole/universitet
- **Familiestatus:** Enslig, par, barnefamilier
- **Yrke:** Student, arbeidstaker, pensjonist

**Geografisk segmentering** deler markedet etter sted:
- **Land/region:** Norge, Norden, Europa
- **By/distrikt:** Storby vs. bygd
- **Klima:** Kystklima vs. innlandsklima
- **Befolkningstetthet:** Tettbygd vs. spredtbygd

Eksempel: Stormberg tilpasser produktutvalget til norsk klima og utendørskultur – produkter som fungerer i regn, snø og fjellterreng.`,
    },
    {
      id: 'mfl-1-4-example-2',
      type: 'example',
      title: 'Eksempel: REMA 1000 og geografisk segmentering',
      problem: 'Hvordan bruker REMA 1000 geografisk segmentering?',
      solution: `REMA 1000 tilpasser sortimentet til lokale forhold:

**By vs. bygd:**
- Bymidten: Mindre butikker, fokus på ferdigmat og hurtige kjøp
- Forstedene: Større butikker, bredere sortiment, familiestørrelser

**Regionale forskjeller:**
- Nord-Norge: Mer frossenfisk, reinkjøtt og lokale spesialiteter
- Vestlandet: Mer sjømat og lokale meieriprodukter
- Østlandet: Bredere internasjonalt sortiment

**Nabolag:**
- Nær studentby: Billige ferdigretter, småpakker
- Villastrøk: Større pakker, mer økologisk, mer vin

Butikksjefene har stor frihet til å tilpasse sortimentet lokalt – dette er en av REMA 1000s styrker sammenlignet med konkurrentene.`,
    },
    {
      id: 'mfl-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken segmenteringsvariabel brukes når en klesbutikk tilbyr ulike størrelser for barn, ungdom og voksne?',
        options: [
          { id: 'a', text: 'Geografisk segmentering', isCorrect: false },
          { id: 'b', text: 'Demografisk segmentering (alder)', isCorrect: true },
          { id: 'c', text: 'Psykografisk segmentering', isCorrect: false },
          { id: 'd', text: 'Atferdsbasert segmentering', isCorrect: false },
        ],
        solution: 'Alder er en demografisk variabel. Når en klesbutikk tilpasser størrelser og stiler til barn, ungdom og voksne, bruker de demografisk segmentering basert på alder. Demografisk segmentering er den vanligste formen fordi variablene er lett målbare.',
      },
    },
    {
      id: 'mfl-1-4-def-3',
      type: 'definition',
      title: 'Psykografisk segmentering',
      content: `**Psykografisk segmentering** deler markedet etter psykologiske egenskaper:

**Livsstil:**
- Aktiv og sporty vs. hjemmekjær
- Urbant liv vs. friluftsliv
- Karrierefokusert vs. familiefokusert

**Personlighet:**
- Risikovillige «early adopters» vs. forsiktige «late majority»
- Trendsettere vs. tradisjonalister
- Sosiale vs. individualistiske

**Verdier og holdninger:**
- Miljøbevisste vs. prisbevisste
- Kvalitetsorienterte vs. kvanitetsorienterte
- Helse- og velværeinteresserte

**Interesser:**
- Teknologi, sport, kultur, mote, mat, reise

Psykografisk segmentering er vanskeligere å måle enn demografisk, men gir ofte bedre innsikt i hvorfor kunder kjøper. To kunder med samme alder og inntekt kan ha helt ulike preferanser basert på livsstil og verdier.`,
    },
    {
      id: 'mfl-1-4-example-3',
      type: 'example',
      title: 'Eksempel: Tesla og psykografisk segmentering',
      problem: 'Hvordan bruker Tesla psykografisk segmentering?',
      solution: `Tesla retter seg mot kunder basert på holdninger og verdier, ikke bare inntekt:

**Målgruppe 1: Teknologientusiaster**
- Verdsetter innovasjon og «cutting edge»-teknologi
- Villige til å betale mer for å være tidlig ute
- Interessert i autopilot, programvareoppdateringer, app-styring

**Målgruppe 2: Miljøbevisste forbrukere**
- Velger Tesla for å redusere klimaavtrykket
- Verdsetter bærekraft over luksus
- Opptatt av fornybar energi og nullutslipp

**Målgruppe 3: Statusbevisste**
- Ser Tesla som et statussymbol
- Verdsetter merkevaren og det den signaliserer
- Villige til å betale premium for prestisje

Alle tre gruppene kan ha lik inntekt og alder (demografisk like), men de kjøper Tesla av helt ulike grunner. Det er psykografien som skiller dem.`,
    },
    {
      id: 'mfl-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-4-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom demografisk og psykografisk segmentering. Gi et eksempel på hvordan to kunder med lik demografisk profil kan tilhøre ulike psykografiske segmenter.',
        hints: ['Tenk på to personer med samme alder, kjønn og inntekt, men helt ulike interesser og verdier.'],
        solution: 'Demografisk segmentering deler markedet etter målbare variabler som alder, kjønn og inntekt. Psykografisk segmentering deler etter livsstil, verdier og holdninger. Eksempel: To kvinner på 30 år med lik inntekt kan tilhøre helt ulike psykografiske segmenter. Den ene er en miljøbevisst, aktiv friluftsinteressert person som handler hos Stormberg og spiser økologisk. Den andre er en moteinteressert urban person som handler designermerker og er opptatt av trender. Demografisk er de like, men psykografisk er de helt forskjellige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-4-def-4',
      type: 'definition',
      title: 'Atferdsbasert segmentering',
      content: `**Atferdsbasert segmentering** deler markedet etter kundenes faktiske atferd:

**Kjøpsatferd:**
- Hyppige kunder vs. sjeldne kunder
- Lojale kunder vs. «switchers» som bytter mellom merker
- Impulskjøpere vs. planlagte kjøpere

**Bruksmønster:**
- Storkunder vs. småkunder (etter volum)
- Daglig bruk vs. sporadisk bruk
- Nye brukere vs. erfarne brukere

**Anledning:**
- Hverdagskjøp vs. høytidskjøp
- Sesongbasert atferd (sommerklær, julegaver)
- Spesielle anledninger (bryllup, bursdag)

**Ønske (benefit sought):**
- Økonomi (billigst mulig)
- Kvalitet (best mulig)
- Bekvemmelighet (enklest mulig)
- Status (mest eksklusivt)

Atferdsbasert segmentering er kraftig fordi den baserer seg på hva kundene faktisk gjør, ikke bare hvem de er.`,
    },
    {
      id: 'mfl-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-4-oppg-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Spotify tilbyr rabattert abonnement til studenter. Hvilken type segmentering er dette et eksempel på?',
        options: [
          { id: 'a', text: 'Psykografisk segmentering', isCorrect: false },
          { id: 'b', text: 'Geografisk segmentering', isCorrect: false },
          { id: 'c', text: 'Demografisk segmentering (yrke/utdanning)', isCorrect: true },
          { id: 'd', text: 'Atferdsbasert segmentering', isCorrect: false },
        ],
        solution: 'Studentrabatt er demografisk segmentering basert på utdanningsstatus. Spotify identifiserer studenter som et segment med lavere inntekt men høy musikkinteresse, og tilbyr en lavere pris for å tiltrekke denne gruppen. Når studentene er ferdig med utdanningen, konverterer mange til fullpris-abonnement.',
      },
    },
    {
      id: 'mfl-1-4-def-5',
      type: 'definition',
      title: 'Valg av målgruppe og markedsstrategi',
      content: `Etter segmentering må virksomheten velge hvilke segmenter den vil rette seg mot. Det finnes tre hovedstrategier:

**1. Udifferensiert markedsføring (massemarketing):**
Samme tilbud til hele markedet. Ignorer segmentforskjeller.
- Eksempel: Strømleverandører, bensinstasjoner
- Fordel: Stordriftsfordeler
- Ulempe: Vanskelig å tilfredsstille alle

**2. Differensiert markedsføring:**
Ulike tilbud til ulike segmenter. Tilpasset markedsmiks for hvert segment.
- Eksempel: Toyota (Yaris for unge, Land Cruiser for familier, Prius for miljøbevisste)
- Fordel: Treffer flere kunder
- Ulempe: Høyere kostnader

**3. Konsentrert markedsføring (nisjestrategi):**
Fokuserer på ett eller noen få segmenter.
- Eksempel: Rolex (kun luksusstrategi), Stormberg (sportsutstyr for alle)
- Fordel: Sterk posisjon i segmentet
- Ulempe: Sårbar for endringer i segmentet`,
    },
    {
      id: 'mfl-1-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Tenk deg at du skal starte en kafékjede. Beskriv tre ulike segmenter du kunne rette deg mot, og forklar hvilken markedsstrategi (udifferensiert, differensiert eller konsentrert) du ville valgt. Begrunn svaret.',
        hints: ['Tenk på ulike kundegrupper: studenter, forretningsfolk, barnefamilier. Hvilken strategi passer best for en kafé?'],
        solution: 'Tre mulige segmenter: 1) Studenter – trenger rimelig kaffe og et sted å studere, lang åpningstid, gratis WiFi. 2) Forretningsfolk – vil ha rask, kvalitetskaffe, gjerne takeaway, betalingsvilje for premium. 3) Barnefamilier – trenger barnevennlig miljø, lekekrok, sunne alternativer. En differensiert strategi kan fungere: Tilby ulike konsepter i ulike lokaler tilpasset nabolaget. Men en konsentrert strategi (f.eks. kun rettet mot studenter med lavpris-kaféer nær universiteter) kan gi sterkere posisjonering og lavere kostnader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-4-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Velg et produkt du bruker daglig (f.eks. en app, et matprodukt eller et klesmerke). Analyser hvilke segmenteringskriterier (demografisk, geografisk, psykografisk, atferdsbasert) produsenten sannsynligvis bruker for å nå deg som kunde.',
        hints: ['Tenk på alle fire typene segmentering og vurder hvilke som er mest relevante for det produktet du har valgt.'],
        solution: 'Eksempel med Spotify: Demografisk – studentrabatt (utdanning), familieabonnement (familiestatus), alderstilpassede spillelister. Geografisk – lansert i ulike land med tilpasset innhold og priser. Psykografisk – retter seg mot musikkinteresserte, teknologivante brukere som verdsetter personalisering. Atferdsbasert – Discover Weekly tilpasses lyttehistorikken, Premium anbefales til hyppige brukere som er irriterte over reklame. Spotify bruker alle fire segmenteringstypene for å skape en personlig opplevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.4

- **Segmentering** deler et heterogent marked inn i homogene grupper med lignende behov.
- **Demografisk segmentering** bruker variabler som alder, kjønn, inntekt og utdanning.
- **Geografisk segmentering** deler etter sted, region og klima.
- **Psykografisk segmentering** deler etter livsstil, verdier, holdninger og interesser.
- **Atferdsbasert segmentering** deler etter kjøpsatferd, bruksmønster og preferanser.
- Virksomheten kan velge mellom **udifferensiert**, **differensiert** og **konsentrert** markedsføringsstrategi.
- Et godt segment er målbart, tilgjengelig, stort nok, differensierbart og handlingsbart.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Segmentering', definition: 'Å dele et marked inn i mindre, homogene grupper med lignende behov og egenskaper.' },
    { term: 'Demografisk segmentering', definition: 'Segmentering basert på målbare variabler som alder, kjønn, inntekt og utdanning.' },
    { term: 'Geografisk segmentering', definition: 'Segmentering basert på kundens geografiske beliggenhet.' },
    { term: 'Psykografisk segmentering', definition: 'Segmentering basert på livsstil, verdier, holdninger og personlighet.' },
    { term: 'Atferdsbasert segmentering', definition: 'Segmentering basert på kundenes faktiske kjøps- og bruksatferd.' },
    { term: 'Målgruppe', definition: 'Det segmentet eller de segmentene virksomheten velger å rette sin markedsføring mot.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Markedsføringsteorier og modeller
// ============================================================================

export const CHAPTER_MARKEDSFORING_1_5: TextbookChapter = {
  id: 'markedsforing-1-5',
  courseId: 'markedsforing',
  chapterNumber: '1.5',
  title: 'Markedsføringsteorier og modeller',
  description: 'Forstå og bruke sentrale markedsføringsmodeller som 4P/7P, STP-modellen, Porters five forces og AIDA-modellen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'velge og bruke kilder, markedsførings- og ledelsesteorier og modeller',
  ],
  content: [
    {
      id: 'mfl-1-5-intro',
      type: 'text',
      content: `## Markedsføringsteorier og modeller

Markedsføringsteori gir oss rammeverk og verktøy for å analysere markeder, ta beslutninger og planlegge strategier. En modell er en forenklet fremstilling av virkeligheten som hjelper oss å forstå komplekse sammenhenger.

I dette kapittelet skal vi se på fire sentrale modeller:
- **4P/7P – Markedsmiksen:** Verktøy for å planlegge tilbudet
- **STP-modellen:** Rammeverk for segmentering, målgruppevalg og posisjonering
- **Porters five forces:** Analyse av konkurransesituasjonen
- **AIDA-modellen:** Forståelse av kundenes kjøpsprosess

Å kjenne disse modellene er essensielt for å kunne analysere og planlegge markedsføring.`,
    },
    {
      id: 'mfl-1-5-def-1',
      type: 'definition',
      title: 'Markedsmiksen: 4P og 7P',
      content: `**Markedsmiksen (4P)** er de fire variablene en virksomhet kan justere for å påvirke etterspørselen:

**Produkt (Product):**
Hva vi tilbyr – design, kvalitet, funksjoner, merkenavn, emballasje, sortiment, garantier.

**Pris (Price):**
Hva kunden betaler – listepris, rabatter, betalingsbetingelser, finansiering.

**Plass/Distribusjon (Place):**
Hvordan produktet gjøres tilgjengelig – butikker, nettbutikk, grossist, logistikk, beliggenhet.

**Påvirkning/Promosjon (Promotion):**
Hvordan vi kommuniserer – reklame, sosiale medier, PR, salgsfremmende tiltak, personlig salg.

**Utvidet markedsmiks (7P) for tjenester:**
- **People (Mennesker):** Ansatte som leverer tjenesten
- **Process (Prosess):** Hvordan tjenesten leveres
- **Physical evidence (Fysiske bevis):** Synlige elementer som signaliserer kvalitet`,
    },
    {
      id: 'mfl-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Spotify og 7P',
      problem: 'Analyser Spotifys markedsmiks ved hjelp av 7P-modellen.',
      solution: `**Produkt:** Musikkstrømming med 100+ millioner sanger, podcaster, personlige spillelister, Wrapped.

**Pris:** Freemium (gratis med reklame), Premium 119 kr/mnd, Student 59 kr/mnd, Family 189 kr/mnd, Duo 149 kr/mnd.

**Plass:** Tilgjengelig via app (iOS/Android), nettleser, smart-TVer, spillkonsoller, smarthøyttalere – overalt der du er.

**Promosjon:** Wrapped-kampanjen (viral markedsføring), sosiale medier, partnerskap med artister, gratisversjon som markedsføringskanal.

**People:** Kuratorer som lager spillelister, kundeservice, teknologiteam som utvikler algoritmer.

**Process:** Sømløs registrering, enkel betaling, automatisk personalisering fra første bruk.

**Physical evidence:** Appens design og brukeropplevelse, Wrapped-statistikken du kan dele, premium-lydkvalitet.

7P-modellen viser at Spotify ikke bare tilbyr musikk, men en helhetlig tjeneste der alle elementene henger sammen.`,
    },
    {
      id: 'mfl-1-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av de fire P-ene handler om hvordan produktet gjøres tilgjengelig for kunden?',
        options: [
          { id: 'a', text: 'Produkt', isCorrect: false },
          { id: 'b', text: 'Pris', isCorrect: false },
          { id: 'c', text: 'Plass/Distribusjon (Place)', isCorrect: true },
          { id: 'd', text: 'Påvirkning/Promosjon', isCorrect: false },
        ],
        solution: 'Plass/Distribusjon (Place) handler om hvordan produktet gjøres tilgjengelig for kunden. Det inkluderer distribusjonskanaler, butikklokalisering, nettbutikk, logistikk og lagerstyring. Målet er å gjøre det enkelt for kunden å finne og kjøpe produktet.',
      },
    },
    {
      id: 'mfl-1-5-def-2',
      type: 'definition',
      title: 'STP-modellen',
      content: `**STP-modellen** er et rammeverk for strategisk markedsføring i tre steg:

**S – Segmentering (Segmentation):**
Del markedet inn i segmenter basert på demografiske, geografiske, psykografiske og atferdsbaserte kriterier (se kapittel 1.4).

**T – Målgruppevalg (Targeting):**
Velg hvilke segmenter virksomheten skal rette seg mot. Vurder segmentets størrelse, vekst, lønnsomhet og tilgjengelighet.

**P – Posisjonering (Positioning):**
Bestem hvordan virksomheten vil oppfattes i målgruppens bevissthet sammenlignet med konkurrentene.

**Posisjoneringsstrategier:**
- **Attributt:** Basert på en egenskap (Volvo = sikkerhet)
- **Fordel:** Basert på nytte (Colgate = friske tenner)
- **Bruk/anledning:** Basert på brukssituasjon (Red Bull = energi)
- **Bruker:** Basert på målgruppen (Old Spice = maskulinitet)
- **Konkurrent:** Sammenlignet med konkurrenter (Pepsi vs. Coca-Cola)
- **Pris/kvalitet:** Basert på verdi (IKEA = godt design til lav pris)`,
    },
    {
      id: 'mfl-1-5-example-2',
      type: 'example',
      title: 'Eksempel: Tesla og STP-modellen',
      problem: 'Analyser Tesla ved hjelp av STP-modellen.',
      solution: `**Segmentering:**
Tesla deler bilmarkedet inn i segmenter basert på:
- Inntekt (premium vs. massemarked)
- Holdninger (miljøbevisste vs. tradisjonelle)
- Teknologiinteresse (early adopters vs. mainstream)

**Targeting:**
Tesla startet med et premium-segment (Roadster, Model S) og beveget seg mot massemarkedet (Model 3, Model Y). De retter seg mot teknologi- og miljøinteresserte kunder med middels til høy inntekt.

**Posisjonering:**
Tesla posisjonerer seg som «det bærekraftige premiumalternativet» – bilen for folk som vil ha:
- Banebrytende teknologi (ikke bare en bil, men en datamaskin på hjul)
- Miljøvennlighet uten å ofre ytelse
- Status og innovasjon

Posisjoneringsuttalelse: «For miljøbevisste bilkjøpere som vil ha teknologi i verdensklasse, er Tesla elbilen som kombinerer ytelse, bærekraft og innovasjon – i motsetning til tradisjonelle bilmerker.»`,
    },
    {
      id: 'mfl-1-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-5-oppg-2',
        number: '2',
        type: 'classic',
        task: 'Bruk STP-modellen til å analysere REMA 1000. Beskriv hvordan de segmenterer markedet, hvilken målgruppe de retter seg mot, og hvordan de er posisjonert i forhold til konkurrentene (KIWI, Coop Extra).',
        hints: ['Tenk på REMAs slagord «Det enkle er ofte det beste» og hvordan det styrer segmentering, targeting og posisjonering.'],
        solution: 'Segmentering: REMA deler dagligvaremarkedet etter prisbevissthet (lav/middels/høy), kjøpsvaner (planlagt/impuls) og geografi. Targeting: De retter seg primært mot prisbevisste forbrukere som ønsker et enkelt, oversiktlig utvalg til lave priser. Posisjonering: REMA posisjonerer seg som lavprisalternativet med god kvalitet og enkel handleopplevelse – «Det enkle er ofte det beste». I motsetning til KIWI (som fokuserer mest på pris) og Coop Extra (bredere sortiment), kombinerer REMA enkelhet med kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-5-def-3',
      type: 'definition',
      title: 'Porters five forces (konkurransemodellen)',
      content: `**Porters five forces** er en modell utviklet av Michael Porter for å analysere konkurransesituasjonen i en bransje. De fem kreftene er:

**1. Trussel fra nye aktører:**
Hvor lett er det for nye virksomheter å entre bransjen? Høye etableringshindringer (kapital, teknologi, reguleringer) beskytter eksisterende aktører.

**2. Trussel fra substitutter:**
Finnes det alternative produkter som dekker det samme behovet? Eksempel: Strømming er et substitutt for kino.

**3. Leverandørenes forhandlingsmakt:**
Kan leverandørene diktere priser og betingelser? Få, sterke leverandører = høy forhandlingsmakt.

**4. Kundenes forhandlingsmakt:**
Kan kundene presse priser ned? Store kunder med mange alternativer = høy forhandlingsmakt.

**5. Rivalisering mellom eksisterende aktører:**
Hvor intens er konkurransen? Mange likeverdige aktører, lav vekst og høye faste kostnader gir hard konkurranse.

**Bruk:** Jo sterkere de fem kreftene er, jo vanskeligere er det å tjene penger i bransjen. Modellen hjelper virksomheten å forstå sin strategiske posisjon.`,
    },
    {
      id: 'mfl-1-5-example-3',
      type: 'example',
      title: 'Eksempel: Porters five forces i norsk dagligvare',
      problem: 'Analyser konkurransesituasjonen i norsk dagligvarehandel med Porters five forces.',
      solution: `**1. Trussel fra nye aktører: LAV**
- Svært høye etableringshindringer: Tre store aktører (NorgesGruppen, Coop, REMA 1000) kontrollerer 99 % av markedet
- Krever enorme investeringer i logistikk og distribusjon
- Svært vanskelig for utenlandske kjeder å etablere seg

**2. Trussel fra substitutter: MIDDELS**
- Matkasser (HelloFresh, Adams Matkasse) erstatter noe dagligvarehandel
- Netthandel av mat (Oda) endrer kjøpsmønstre
- Restauranter og takeaway konkurrerer om «middag»-behovet

**3. Leverandørenes forhandlingsmakt: LAV**
- Dagligvarekjedene er så store at de kan presse leverandørene
- Egne merkevarer (EMV) gir kjedene enda mer makt
- Leverandørene er avhengige av kjedene for å nå forbrukerne

**4. Kundenes forhandlingsmakt: MIDDELS-HØY**
- Kundene kan enkelt bytte mellom REMA 1000, KIWI og Coop
- Prissammenligning er enkel (apper, nettpriser)
- Lojalitetsprogrammer (Æ-appen, Trumf) prøver å binde kundene

**5. Rivalisering: HØY**
- Intense priskrig mellom REMA 1000, KIWI og Coop Extra
- Alle kjemper om de mest prisbevisste kundene
- Markedet vokser sakte – vekst kommer fra å ta andeler fra konkurrentene`,
    },
    {
      id: 'mfl-1-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-5-oppg-3',
        number: '3',
        type: 'multiple-choice',
        task: 'I Porters five forces-modell: Hva menes med «trussel fra substitutter»?',
        options: [
          { id: 'a', text: 'At nye konkurrenter kommer inn i markedet', isCorrect: false },
          { id: 'b', text: 'At alternative produkter kan dekke det samme behovet', isCorrect: true },
          { id: 'c', text: 'At leverandørene øker prisene', isCorrect: false },
          { id: 'd', text: 'At kundene krever lavere priser', isCorrect: false },
        ],
        solution: 'Substitutter er alternative produkter eller tjenester som dekker det samme underliggende behovet. For eksempel er tog et substitutt for fly (transportbehov), strømming er et substitutt for kino (underholdningsbehov), og matkasser er et substitutt for dagligvarehandel (matbehov). Høy substitutt-trussel betyr at kundene lett kan bytte til noe annet.',
      },
    },
    {
      id: 'mfl-1-5-def-4',
      type: 'definition',
      title: 'AIDA-modellen',
      content: `**AIDA-modellen** beskriver de fire stegene en kunde går gjennom fra første kontakt til kjøp:

**A – Attention (Oppmerksomhet):**
Fange kundens oppmerksomhet. Bruk av iøynefallende reklame, overskrifter, bilder eller påstander.

**I – Interest (Interesse):**
Vekke interesse for produktet. Gi relevant informasjon som viser at produktet kan løse kundens problem.

**D – Desire (Ønske):**
Skape et ønske om å eie eller bruke produktet. Bruk av emosjonelle virkemidler, sosiale bevis, eksklusive tilbud.

**A – Action (Handling):**
Få kunden til å handle – kjøpe, registrere seg, ta kontakt. Tydelige «call to action»-knapper, enkle bestillingsprosesser.

**Bruk i praksis:**
AIDA brukes til å planlegge reklame, nettsider, sosiale medier-innlegg og salgspresentasjoner. Hvert steg i modellen krever ulike virkemidler og budskap.`,
    },
    {
      id: 'mfl-1-5-example-4',
      type: 'example',
      title: 'Eksempel: AIDA i en Spotify-kampanje',
      problem: 'Hvordan bruker Spotify AIDA-modellen i sine kampanjer?',
      solution: `**Attention (Oppmerksomhet):**
- Wrapped-kampanjen: Fargerike, personlige oppsummeringer som deles i sosiale medier
- «Only You»-kampanjen: Uventede kombinasjoner av lyttedata som vekker nysgjerrighet
- Storby-plakater med humoristiske observasjoner basert på strømmedata

**Interest (Interesse):**
- Viser personlige lyttestatistikker som engasjerer
- Artister deler sine Wrapped-data og skaper samtaler
- Brukere sammenligner sine resultater med venner

**Desire (Ønske):**
- «Vil du se din Wrapped neste år? Da må du strømme!»
- Gratisbrukere ser at Premium-brukere får bedre Wrapped-data
- FOMO (fear of missing out) når alle venner deler sin Wrapped

**Action (Handling):**
- Enkel deling med én klikk til Instagram Stories
- «Prøv Premium gratis i 3 måneder»-tilbud rett etter Wrapped
- Direkte link til å oppgradere i appen

Wrapped-kampanjen er et brilliant eksempel på AIDA fordi den gjør kundene til markedsførere – de deler frivillig Spotify-innhold i sosiale medier.`,
    },
    {
      id: 'mfl-1-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-5-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Velg en reklame du nylig har sett (på TV, sosiale medier eller ute). Analyser den ved hjelp av AIDA-modellen. Hvordan forsøker reklamen å fange oppmerksomhet, vekke interesse, skape ønske og utløse handling?',
        hints: ['Se etter virkemidlene: Hva legger du merke til først? Hva gjør deg nysgjerrig? Hva får deg til å ville kjøpe? Er det en tydelig oppfordring til handling?'],
        solution: 'Eksempel med en Nike-reklame: Attention – Dramatisk åpningsbilde av en kjent idrettsutøver i aksjon, med kraftig musikk. Interest – Historien om utøverens vei fra motgang til suksess, som skaper emosjonell tilknytning. Desire – «If they can do it, so can you» – følelsen av at Nike-sko kan hjelpe deg å nå dine mål. Action – «Just Do It» med link til nettbutikken og kampanjepris. Reklamen bruker alle fire AIDA-stegene for å ta seeren fra passiv tilskuer til aktiv kjøper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-5-oppg-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken modell brukes for å analysere konkurransesituasjonen i en bransje?',
        options: [
          { id: 'a', text: 'AIDA-modellen', isCorrect: false },
          { id: 'b', text: 'SMART-modellen', isCorrect: false },
          { id: 'c', text: 'Porters five forces', isCorrect: true },
          { id: 'd', text: 'STP-modellen', isCorrect: false },
        ],
        solution: 'Porters five forces (Porters fem konkurransekrefter) analyserer konkurransesituasjonen i en bransje. Modellen ser på trussel fra nye aktører, trussel fra substitutter, leverandørenes forhandlingsmakt, kundenes forhandlingsmakt, og rivalisering mellom eksisterende aktører. AIDA handler om kundereisen, SMART om målsetting, og STP om segmentering og posisjonering.',
      },
    },
    {
      id: 'mfl-1-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'mfl-1-5-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Velg en bransje du er interessert i (f.eks. strømmetjenester, treningssentre eller hurtigmat) og gjennomfør en Porters five forces-analyse. Vurder styrken til hver av de fem kreftene (lav, middels eller høy) og forklar hvorfor.',
        hints: ['Gå gjennom hver av de fem kreftene systematisk. Tenk på konkrete eksempler fra bransjen for å underbygge vurderingene dine.'],
        solution: 'Eksempel med treningssenterbransjen: 1) Nye aktører: MIDDELS – relativt lave etableringskostnader, men vanskelig å konkurrere med store kjeder som SATS og Evo. 2) Substitutter: HØY – hjemmetrening (Peloton, YouTube), utendørs aktiviteter, treningsapper erstatter noe av behovet. 3) Leverandørenes makt: LAV – mange produsenter av treningsutstyr og tilbydere av gruppetreningstimer. 4) Kundenes makt: HØY – mange sentre å velge mellom, lave byttekostnader, prisbevisste kunder. 5) Rivalisering: HØY – mange aktører, prispress, differensiering gjennom konsept og beliggenhet. Konklusjon: Bransjen er utfordrende med høy konkurranse og mange substitutter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mfl-1-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 1.5

- **Markedsmiksen (4P/7P)** er verktøy for å planlegge produkt, pris, distribusjon og kommunikasjon. 7P utvider med mennesker, prosess og fysiske bevis.
- **STP-modellen** er rammeverket for segmentering, målgruppevalg og posisjonering.
- **Porters five forces** analyserer konkurransesituasjonen gjennom fem krefter: nye aktører, substitutter, leverandørmakt, kundemakt og rivalisering.
- **AIDA-modellen** beskriver kundereisen fra oppmerksomhet via interesse og ønske til handling.
- Modellene er forenklinger av virkeligheten, men gir verdifulle rammeverk for analyse og planlegging.
- En god markedsfører velger riktig modell til riktig problemstilling.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Markedsmiksen (4P)', definition: 'De fire variablene produkt, pris, plass og påvirkning som virksomheten kan justere for å påvirke etterspørselen.' },
    { term: '7P', definition: 'Utvidet markedsmiks for tjenester: 4P pluss mennesker (people), prosess og fysiske bevis (physical evidence).' },
    { term: 'STP-modellen', definition: 'Strategisk rammeverk med tre steg: segmentering, targeting (målgruppevalg) og posisjonering.' },
    { term: 'Posisjonering', definition: 'Hvordan virksomheten ønsker å bli oppfattet i målgruppens bevissthet i forhold til konkurrentene.' },
    { term: 'Porters five forces', definition: 'Modell for konkurranseanalyse med fem krefter: nye aktører, substitutter, leverandørmakt, kundemakt og rivalisering.' },
    { term: 'AIDA-modellen', definition: 'Modell for kundereisen: Attention (oppmerksomhet), Interest (interesse), Desire (ønske), Action (handling).' },
  ],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const MARKEDSFORING_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MARKEDSFORING_1_1,
  CHAPTER_MARKEDSFORING_1_2,
  CHAPTER_MARKEDSFORING_1_3,
  CHAPTER_MARKEDSFORING_1_4,
  CHAPTER_MARKEDSFORING_1_5,
];

/* eslint-disable */
// @ts-nocheck

/**
 * Medie- og informasjonskunnskap 2 (VG3) - Del 8: Medieproduksjon og fordypning
 * Kapittel 8.1-8.5
 *
 * Dekker LK20 kompetansemål:
 * - planlegge, produsere og presentere tekster og medieproduksjoner
 * - bruke ulike verktøy og uttrykksformer i medieproduksjon
 * - vurdere og reflektere over eget og andres mediearbeid
 * - analysere medienes rolle og samfunnsansvar i et demokratisk perspektiv
 * - gjennomføre et selvstendig fordypningsprosjekt med medietematikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Produksjonsplanlegging
// ============================================================================

export const CHAPTER_MEDIEINFO_2_8_1: TextbookChapter = {
  id: 'medieinfo-2-8-1',
  courseId: 'medieinfo-2',
  chapterNumber: '8.1',
  title: 'Produksjonsplanlegging',
  description: 'Lær om pre-produksjonsfasen i større medieproduksjoner, prosjektledelse, budsjettplanlegging og koordinering av produksjonsteam. Du utvikler ferdigheter i systematisk planlegging fra konsept til produksjonsstart.',
  estimatedMinutes: 20,
  competenceGoals: ['planlegge, produsere og presentere tekster og medieproduksjoner'],
  keyTerms: [
    { term: 'Pre-produksjon', definition: 'Alle forberedelser og planleggingsaktiviteter som skjer før selve medieproduksjonen starter, inkludert konseptutvikling, manus, budsjett og tidsplanlegging.' },
    { term: 'Prosjektledelse', definition: 'Systematisk planlegging, organisering og gjennomføring av et prosjekt for å nå definerte mål innenfor gitte rammer for tid, budsjett og kvalitet.' },
    { term: 'Milepæl', definition: 'Et definert punkt i et prosjekt der en viktig leveranse eller fase skal være fullført, brukt for å måle framdrift.' },
    { term: 'Gantt-diagram', definition: 'Et visuelt planleggingsverktøy som viser oppgaver langs en tidslinje, med varighet og avhengigheter mellom oppgavene.' },
  ],
  content: [
    {
      id: 'mi2-8-1-intro',
      type: 'text',
      content: `## Fra idé til virkelighet

Profesjonelle medieproduksjoner skiller seg fra amatørprosjekter først og fremst i planleggingsfasen. En Hollywood-film bruker gjerne like lang tid på pre-produksjon som på selve innspillingen. En stor reklamekampanje planlegges i måneder før den lanseres. Selv en podkastserie eller en dokumentarserie krever grundig forarbeid for å lykkes.

I VG2 lærte du grunnleggende om idéutvikling, manus og storyboard. Nå tar vi steget videre: Hvordan leder du et produksjonsprosjekt? Hvordan håndterer du budsjett, tidslinje og et team med ulike roller? Hvordan sikrer du at den ferdige produksjonen holder det kvalitetsnivået du sikter mot?

I dette kapittelet skal du lære:
- Hvordan du strukturerer pre-produksjonsfasen i større prosjekter
- Grunnleggende prosjektledelse for medieproduksjoner
- Budsjettering og ressursplanlegging
- Verktøy og metoder for å holde oversikt og framdrift`,
    },
    {
      id: 'mi2-8-1-def-1',
      type: 'definition',
      title: 'Pre-produksjon',
      content: `**Pre-produksjon** er den planleggingsfasen som kommer før selve produksjonen (innspilling, opptak eller publisering). I en profesjonell medieproduksjon omfatter pre-produksjonen:\n\n- **Konseptutvikling:** Idé, vinkling, budskap og format\n- **Research:** Bakgrunnsarbeid, intervjuobjekter, lokasjoner\n- **Manus og storyboard:** Detaljert innholdsplan\n- **Budsjettering:** Kostnadsoverslag for utstyr, reise, lisenser, honorarer\n- **Tidsplanlegging:** Milepæler, frister og avhengigheter\n- **Teamsammensetning:** Roller, ansvar og koordinering\n\nEn tommelfingerregel i bransjen er at god pre-produksjon utgjør 60-70 % av et vellykket prosjekt.`,
    },
    {
      id: 'mi2-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Pre-produksjonsplan for en kort dokumentarfilm',
      problem: 'Klassen skal produsere en 10-minutters dokumentarfilm om lokal matkultur. Hvordan kan pre-produksjonen struktureres?',
      solution: `**Fase 1: Konseptutvikling (uke 1)**
- Brainstorming og research om lokal matkultur
- Velge vinkling: «Fra jord til bord – mattradisjoner i endring»
- Definere målgruppe: Lokalmiljøet og ungdom
- Beslutte format: Dokumentarisk med intervjuer og stemningsbilder

**Fase 2: Research og manus (uke 2-3)**
- Identifisere intervjuobjekter: Lokal bonde, kokk, bestemor med tradisjonsoppskrift
- Rekognosere lokasjoner: Gårdsbruk, restaurant, kjøkken
- Skrive behandling (synopsis) og manus med voice-over-tekst
- Lage storyboard for nøkkelscener

**Fase 3: Planlegging (uke 3-4)**
- Sette opp budsjett: Transport, utstyr, eventuell mat
- Lage Gantt-diagram med milepæler
- Fordele roller: Regissør, fotograf, lydtekniker, klipper, intervjuer
- Innhente samtykke fra intervjuobjekter
- Gjøre teknisk sjekk av utstyr

**Milepæler:**
| Milepæl | Frist |
|---------|-------|
| Konsept godkjent | Uke 1, fredag |
| Manus ferdig | Uke 3, onsdag |
| Alle intervjuer avtalt | Uke 3, fredag |
| Innspilling ferdig | Uke 6, fredag |
| Ferdig film | Uke 8, fredag |`,
    },
    {
      id: 'mi2-8-1-def-2',
      type: 'definition',
      title: 'Prosjektledelse',
      content: `**Prosjektledelse** i medieproduksjon handler om å styre et prosjekt fra idé til ferdig produkt innenfor definerte rammer. Sentrale elementer er:\n\n- **Mål:** Hva skal produksjonen oppnå? (klart definert og målbart)\n- **Tid:** Når skal de ulike delene være ferdige? (tidsplan med milepæler)\n- **Ressurser:** Hva trenger vi av mennesker, utstyr og penger? (budsjett)\n- **Kvalitet:** Hvilken standard skal produksjonen holde? (kvalitetskriterier)\n\nDisses fire elementene kalles ofte «prosjekttrekanten» og er gjensidig avhengige: Øker du ambisjonsnivået (kvalitet), trenger du mer tid eller ressurser.`,
    },
    {
      id: 'mi2-8-1-text-1',
      type: 'text',
      content: `### Verktøy for prosjektstyring

**Gantt-diagram:**
Et Gantt-diagram viser alle oppgaver i prosjektet langs en tidslinje. Hver oppgave er en horisontal linje som viser varighet. Du kan se hvilke oppgaver som overlapper, og hvilke som er avhengige av hverandre. Gantt-diagrammer lages i verktøy som Trello, Notion, Google Sheets eller Microsoft Project.

**Kanban-tavle:**
En visuell oversikt med kolonner som «Å gjøre», «Pågår» og «Ferdig». Oppgaver flyttes mellom kolonnene etter hvert som de fullføres. Kanban er spesielt nyttig for å holde oversikt i et team. Trello og Notion støtter denne metoden.

**Daglige møter (stand-ups):**
Korte teammøter (10-15 minutter) der alle forteller:
1. Hva gjorde du i går?
2. Hva skal du gjøre i dag?
3. Er det noe som blokkerer deg?

**Budsjettering:**
Et produksjonsbudsjett bør inneholde:
- Utstyr (leie eller kjøp)
- Transport og reise
- Lisenser for musikk, bilder eller programvare
- Honorar til eksterne bidragsytere
- Uforutsette utgifter (vanligvis 10-15 % av totalbudsjettet)`,
    },
    {
      id: 'mi2-8-1-text-2',
      type: 'text',
      content: `### Roller i et produksjonsteam

I en større medieproduksjon har ulike personer ulike roller:

| Rolle | Ansvar |
|-------|--------|
| Prosjektleder/produsent | Overordnet ansvar, budsjett, framdrift |
| Regissør | Kreativt ansvar, visuell stil, instruksjon |
| Manusforfatter | Innhold, dialog, struktur |
| Fotograf/kameraoperatør | Visuelt uttrykk, belysning, komposisjon |
| Lydtekniker | Lydopptak, lyddesign, musikk |
| Klipper/redigerer | Redigering, etterarbeid, eksport |
| Grafiker | Grafikk, animasjon, teksting |
| Researcher | Bakgrunnsarbeid, faktagrunnlag |

**Viktig for teamarbeid:**
- Klare rollebeskrivelser forhindrer misforståelser
- Jevnlige statusmøter sikrer at alle er oppdatert
- Konflikter bør løses tidlig gjennom åpen kommunikasjon
- Dokumenter beslutninger skriftlig (møtereferater)`,
    },
    {
      id: 'mi2-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Budsjett for en elevproduksjon',
      problem: 'Lag et enkelt budsjett for en 5-minutters informasjonsvideo om miljøvern, produsert med skolens utstyr.',
      solution: `**Budsjett – Informasjonsvideo «Grønt valg»**

| Post | Beskrivelse | Kostnad |
|------|-------------|---------|
| Utstyr | Skolens kameraer og mikrofoner (gratis) | 0 kr |
| Transport | Buss til naturområde for opptak | 400 kr |
| Musikklisens | 2 royalty-free spor fra Artlist (skoleabonnement) | 0 kr |
| Grafisk materiale | Ikoner og illustrasjoner fra Canva Pro (skolelisens) | 0 kr |
| Utskrifter | Manus og storyboard (6 kopier) | 50 kr |
| Mat/drikke | Enkelt servering under opptaksdag | 300 kr |
| Uforutsett | Reserve (ca. 15 %) | 120 kr |
| **Totalt** | | **870 kr** |

**Merknader:**
- Ved bruk av skolens utstyr holdes kostnadene nede
- Royalty-free musikk velges fremfor kommersiell for å unngå lisensproblemer
- Buffer for uforutsette utgifter er viktig i alle prosjekter`,
    },
    {
      id: 'mi2-8-1-text-3',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Pre-produksjon** er den avgjørende planleggingsfasen som legger grunnlaget for hele produksjonen
- **Prosjektledelse** handler om å balansere mål, tid, ressurser og kvalitet
- **Gantt-diagram og Kanban** er nyttige verktøy for tidsplanlegging og oppgaveoversikt
- **Roller i et team** bør være klart definert med tydelige ansvarsområder
- **Budsjett** bør alltid inkludere en buffer for uforutsette utgifter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Pre-produksjon | Planlegging før selve produksjonen |
| Prosjektledelse | Styring av tid, ressurser, mål og kvalitet |
| Milepæl | Viktig kontrollpunkt i prosjektet |
| Gantt-diagram | Visuell tidslinje for oppgaver og frister |`,
    },
    {
      id: 'mi2-8-1-samleoppgaver',
      type: 'text',
      title: 'Samleoppgaver',
      content: `## Samleoppgaver – Produksjonsplanlegging`,
    },
    {
      id: 'mi2-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med pre-produksjonsfasen i en medieproduksjon?',
        options: [
          { id: 'a', text: 'Å redigere og ferdigstille det innspilte materialet', isCorrect: false },
          { id: 'b', text: 'Å planlegge alle aspekter av produksjonen før innspillingen starter', isCorrect: true },
          { id: 'c', text: 'Å publisere og markedsføre den ferdige produksjonen', isCorrect: false },
          { id: 'd', text: 'Å evaluere produksjonen etter at den er ferdig', isCorrect: false },
        ],
        solution: 'Pre-produksjon er planleggingsfasen som kommer før selve innspillingen. Den omfatter konseptutvikling, research, manus, budsjett, tidsplan og teamsammensetning. God pre-produksjon er avgjørende fordi den legger grunnlaget for en effektiv og vellykket produksjonsprosess.',
      },
    },
    {
      id: 'mi2-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        task: 'Hva viser et Gantt-diagram?',
        options: [
          { id: 'a', text: 'Budsjettet fordelt på ulike poster', isCorrect: false },
          { id: 'b', text: 'Organisasjonsstrukturen i produksjonsteamet', isCorrect: false },
          { id: 'c', text: 'Oppgaver med varighet og avhengigheter langs en tidslinje', isCorrect: true },
          { id: 'd', text: 'Kvalitetsvurderinger av den ferdige produksjonen', isCorrect: false },
        ],
        solution: 'Et Gantt-diagram er et visuelt planleggingsverktøy som viser alle oppgaver i et prosjekt langs en tidslinje. Hver oppgave representeres som en horisontal linje som viser varigheten. Diagrammet gjør det mulig å se hvilke oppgaver som overlapper, og hvilke som er avhengige av at andre oppgaver fullføres først.',
      },
    },
    {
      id: 'mi2-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Forklar hva «prosjekttrekanten» innebærer i medieproduksjon, og gi et eksempel på hvordan de tre elementene henger sammen.',
        hints: ['Tenk på sammenhengen mellom tid, ressurser og kvalitet'],
        solution: 'Prosjekttrekanten beskriver forholdet mellom tid, ressurser (budsjett/personell) og kvalitet i et prosjekt. Disse tre elementene er gjensidig avhengige: Hvis du øker kvalitetskravene uten å øke budsjettet, vil du trenge mer tid. Hvis du korter ned tiden, må du enten øke ressursene eller senke kvalitetskravene. Eksempel: En klasse skal lage en dokumentarfilm. Hvis de ønsker profesjonell kvalitet med intervjuer, dronebilder og animasjoner (høy kvalitet), men har et begrenset budsjett (lave ressurser), må de bruke mye mer tid på prosjektet. Alternativt kan de senke ambisjonsnivået og lage en enklere produksjon som kan ferdigstilles innen fristen.',
      },
    },
    {
      id: 'mi2-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Lag en oversikt over de viktigste rollene i et produksjonsteam for en kort dokumentarfilm. Beskriv ansvarsområdet for minst fire roller.',
        solution: '1) Prosjektleder/produsent: Har overordnet ansvar for framdrift, budsjett og koordinering. Sørger for at prosjektet holder tidsplanen og at alle har det de trenger. 2) Regissør: Har det kreative ansvaret og bestemmer visuell stil, intervjuteknikk og fortellingsstruktur. Instruerer team og intervjuobjekter under opptak. 3) Fotograf/kameraoperatør: Ansvarlig for det visuelle uttrykket, inkludert belysning, komposisjon og kamerabevegelser. Sørger for teknisk kvalitet på videoopptak. 4) Lydtekniker: Ansvarlig for lydopptak under innspilling og lyddesign i etterarbeid. Sikrer god talekvalitet og velger passende musikk og lydeffekter. 5) Klipper/redigerer: Klipper sammen opptakene i etterarbeidsfasen, legger til grafikk og tekst, og eksporterer den ferdige filmen i riktig format.',
      },
    },
    {
      id: 'mi2-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Sett opp et enkelt budsjett for en podkastserie med fem episoder. Inkluder minst fem budsjettposter og forklar hvorfor du har tatt med en buffer for uforutsette utgifter.',
        hints: ['Tenk på utstyr, programvare, eventuell reise, markedsføring og grafisk materiell'],
        solution: 'Budsjett for podkastserie (5 episoder): 1) Mikrofoner (2 stk USB-mikrofoner): 1 500 kr. 2) Lydredigeringsprogramvare (Audacity er gratis, eller Adobe Audition-lisens): 0-300 kr. 3) Grafisk design til cover og sosiale medier (Canva Pro): 100 kr/mnd. 4) Webhosting/distribusjon (Spotify for Podcasters er gratis): 0 kr. 5) Transport til intervjuer (3 episoder med gjester): 600 kr. 6) Markedsføring (betalt annonsering på Instagram): 500 kr. 7) Uforutsett buffer (ca. 15 %): 450 kr. Totalt: ca. 3 450 kr. Bufferen for uforutsette utgifter er viktig fordi det alltid oppstår kostnader man ikke har forutsett, som erstatning av defekt utstyr, ekstra reise til omopptak, eller behov for ekstra programvarelisenser. Uten buffer risikerer man å overskride budsjettet eller måtte kutte i kvaliteten.',
      },
    },
    {
      id: 'mi2-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved å bruke henholdsvis Gantt-diagram og Kanban-tavle i en medieproduksjon. Hvilken metode passer best i ulike situasjoner?',
        solution: 'Gantt-diagram: Fordeler – gir god oversikt over tidslinjen, viser avhengigheter mellom oppgaver, og er nyttig for planlegging av faste frister og milepæler. Ulemper – kan bli uoversiktlig i store prosjekter, er mer statisk og krever oppdatering når planer endres. Passer best for: produksjoner med klare faser og faste frister, som en dokumentarfilm med innspillingsdatoer. Kanban-tavle: Fordeler – enkel å bruke, gir raskt overblikk over status, fleksibel og lett å oppdatere. Ulemper – viser ikke tidslinjer eller avhengigheter like tydelig, kan bli uoversiktlig med mange oppgaver. Passer best for: løpende produksjoner uten faste faser, som innholdsproduksjon for sosiale medier der oppgaver stadig kommer til. Mange team kombinerer begge metodene: Gantt for overordnet tidsplan og Kanban for daglig oppgavestyring.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Multimediefortelling
// ============================================================================

export const CHAPTER_MEDIEINFO_2_8_2: TextbookChapter = {
  id: 'medieinfo-2-8-2',
  courseId: 'medieinfo-2',
  chapterNumber: '8.2',
  title: 'Multimediefortelling',
  description: 'Utforsk tverrmediale fortellinger, plattformtilpasning og transmedial historiefortelling. Lær å skape helhetlige medieopplevelser som strekker seg over flere plattformer og formater.',
  estimatedMinutes: 20,
  competenceGoals: ['bruke ulike verktøy og uttrykksformer i medieproduksjon'],
  keyTerms: [
    { term: 'Transmedial fortelling', definition: 'En fortelling som utfolder seg over flere medieplattformer, der hvert medium bidrar med unikt innhold til den overordnede historien.' },
    { term: 'Plattformtilpasning', definition: 'Prosessen med å tilpasse innhold til de spesifikke egenskapene, formatene og brukermønstrene til ulike medieplattformer.' },
    { term: 'Multimodal tekst', definition: 'En tekst som kombinerer flere uttrykksmåter (modaliteter) som skrift, bilde, lyd, video og interaktivitet for å formidle et budskap.' },
    { term: 'Konvergens', definition: 'Sammensmelting av ulike medieformer og teknologier, der grensene mellom tradisjonelle medier viskes ut.' },
  ],
  content: [
    {
      id: 'mi2-8-2-intro',
      type: 'text',
      content: `## Fortellinger uten grenser

Moderne mediefortellinger begrenser seg sjelden til én plattform. En TV-serie kan ha en tilhørende podkast, en Instagram-konto for karakterene og et interaktivt nettsted med tilleggsmateriale. En nyhetsredaksjon publiserer den samme saken som tekst, video, infografikk og sosiale medier-innlegg - tilpasset hvert formats styrker.

Denne sammensmeltingen av medier kalles konvergens, og evnen til å tenke tverrmedielt er en av de viktigste kompetansene i dagens mediebransje. I dette kapittelet skal du lære:

- Hva transmedial fortelling innebærer
- Hvordan du tilpasser innhold til ulike plattformer
- Prinsipper for multimodale tekster
- Hvordan mediekonvergens endrer mediebransjen`,
    },
    {
      id: 'mi2-8-2-def-1',
      type: 'definition',
      title: 'Transmedial fortelling',
      content: `En **transmedial fortelling** (transmedia storytelling) er en fortelling som utfolder seg over flere medieplattformer, der hvert medium bidrar med sitt unike innhold til den overordnede historien. I motsetning til å fortelle den *samme* historien på flere plattformer (kryssmedial), tilfører transmedial fortelling *nye* elementer på hver plattform.\n\nBegrepet ble popularisert av medieforsker Henry Jenkins. Et klassisk eksempel er *The Matrix*-universet: filmene fortalte hovedhistorien, animasjonsserien utforsket bakgrunnshistorier, og dataspillene lot publikum spille ut handlinger som ble referert til i filmene.`,
    },
    {
      id: 'mi2-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Transmedial kampanje for en ungdomsorganisasjon',
      problem: 'En ungdomsorganisasjon ønsker å engasjere flere unge i klimasaken. Hvordan kan de lage en transmedial fortelling?',
      solution: `**Overordnet konsept:** «Mitt klimavalg» – personlige historier om unge som gjør klimabevisste valg i hverdagen.

**Plattform 1: TikTok/Instagram Reels (daglig)**
- Korte videoer (30-60 sek) der ulike ungdommer viser sitt «klimavalg»
- Utfordringer og hashtag-kampanjer (#MittKlimavalg)
- Formål: Engasjement, spredning, rekruttering

**Plattform 2: Podkast (ukentlig)**
- Dybdeintervjuer med ungdommene fra videoene
- Samtaler med forskere og aktivister
- Formål: Fordypning, kontekst, kunnskapsformidling

**Plattform 3: Interaktiv nettside**
- Klimakalkulator der du beregner ditt eget fotavtrykk
- Kart over lokale klimainitiativer
- Blogg med lengre reportasjer
- Formål: Verktøy, informasjon, handlingsalternativer

**Plattform 4: Fysisk arrangement**
- Lokale «klimaverksteder» som dokumenteres og deles på de andre plattformene
- Formål: Fellesskap, handling, innholdsproduksjon

**Nøkkelen:** Hver plattform tilfører noe unikt. TikTok gir spredning, podkasten gir dybde, nettsiden gir verktøy, og arrangementet gir fellesskap. Sammen skaper de en helhetlig fortelling.`,
    },
    {
      id: 'mi2-8-2-def-2',
      type: 'definition',
      title: 'Plattformtilpasning',
      content: `**Plattformtilpasning** handler om å tilpasse innhold til de spesifikke egenskapene ved ulike medieplattformer. Hver plattform har sine styrker, begrensninger og bruksmønstre:\n\n- **TikTok/Reels:** Kort, vertikalt videoformat. Rask oppmerksomhetsfangst. Underholdende eller overraskende innhold.\n- **YouTube:** Lengre videoformat. Søkbart innhold. Egnet for undervisning og dokumentar.\n- **Podkast:** Lyd uten visuelt støtte. Egnet for dybde, refleksjon og samtale.\n- **Instagram feed:** Visuelt fokus, kort tekst. Estetikk og merkevarebygging.\n- **Nettavis:** Tekst med multimedia. Journalistisk format. SEO-optimalisert.\n- **Blogg/nettside:** Lang tekst, interaktive elementer. Full kontroll over utforming.\n\nGod plattformtilpasning betyr ikke bare å endre format, men å tenke nytt om hvordan innholdet formidles basert på plattformens logikk.`,
    },
    {
      id: 'mi2-8-2-text-1',
      type: 'text',
      content: `### Multimodalitet i praksis

En multimodal tekst kombinerer flere uttrykksmåter for å formidle et budskap. De vanligste modalitetene er:

**Skriftlig modalitet:** Tekst, overskrifter, brødtekst, sitater
**Visuell modalitet:** Bilder, illustrasjoner, farger, layout, typografi
**Auditiv modalitet:** Tale, musikk, lydeffekter, stillhet
**Kinetisk modalitet:** Bevegelse, animasjon, video
**Interaktiv modalitet:** Klikk, sveip, valg, spill

**Samspill mellom modaliteter:**
Modalitetene kan forsterke hverandre (en trist melodi under et trist bilde), utfylle hverandre (tekst som gir kontekst til et bilde) eller stå i kontrast til hverandre (lystig musikk til alvorlige bilder for ironisk effekt).

**Forankring og avløsning:**
- **Forankring:** Teksten styrer tolkningen av bildet (bildetekst som forklarer hva vi ser)
- **Avløsning:** Tekst og bilde utfyller hverandre med ulik informasjon (tegneserie der dialog og bilde forteller ulike ting)`,
    },
    {
      id: 'mi2-8-2-text-2',
      type: 'text',
      content: `### Mediekonvergens

Mediekonvergens beskriver hvordan grensene mellom ulike medier viskes ut. Begrepet omfatter tre nivåer:

**Teknologisk konvergens:**
Smarttelefonen er det tydeligste eksempelet: Den er kamera, videokamera, lydopptaker, avspiller, nettleser, avis, radio og TV - i én enhet. Teknologien gjør det mulig å produsere og konsumere alle typer medieinnhold på samme enhet.

**Industriell konvergens:**
Medieselskaper som tradisjonelt opererte i ulike bransjer, smelter sammen. En avisredaksjon produserer nå også video og podkast. Et TV-selskap har strømmetjeneste og sosiale medier-kanaler. Journalister forventes å beherske flere medieformer.

**Kulturell konvergens:**
Publikum deltar aktivt i medieproduksjonen. Brukergenerert innhold, fan fiction, remikser og kommentarkulturen gjør skillet mellom produsent og konsument uklart. Begrepet «prosument» (produsent + konsument) beskriver denne utviklingen.

Konvergens har både fordeler (rikere medieopplevelser, lavere produksjonskostnader) og utfordringer (informasjonsoverflod, kvalitetssikring, opphavsrettsproblematikk).`,
    },
    {
      id: 'mi2-8-2-text-3',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Transmedial fortelling** utfolder seg over flere plattformer der hvert medium tilfører unikt innhold
- **Plattformtilpasning** betyr å utnytte hver plattforms styrker og bruksmønstre
- **Multimodale tekster** kombinerer flere uttrykksmåter som forsterker eller utfyller hverandre
- **Mediekonvergens** visker ut grensene mellom teknologier, bransjer og roller

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Transmedial fortelling | Fortelling over flere plattformer med unikt innhold |
| Plattformtilpasning | Tilpasse innhold til plattformens egenskaper |
| Multimodal tekst | Kombinasjon av flere uttrykksmåter |
| Konvergens | Sammensmelting av medieformer og teknologier |`,
    },
    {
      id: 'mi2-8-2-samleoppgaver',
      type: 'text',
      title: 'Samleoppgaver',
      content: `## Samleoppgaver – Multimediefortelling`,
    },
    {
      id: 'mi2-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en transmedial fortelling?',
        options: [
          { id: 'a', text: 'Den samme historien publiseres i identisk form på flere plattformer', isCorrect: false },
          { id: 'b', text: 'Fortellingen utfolder seg over flere plattformer der hvert medium bidrar med unikt innhold', isCorrect: true },
          { id: 'c', text: 'En fortelling som kun publiseres på digitale plattformer', isCorrect: false },
          { id: 'd', text: 'En fortelling som oversettes til flere språk', isCorrect: false },
        ],
        solution: 'En transmedial fortelling kjennetegnes ved at den utfolder seg over flere medieplattformer, og at hvert medium tilfører unikt innhold til den overordnede historien. Det er ikke det samme som å publisere identisk innhold på flere plattformer (kryssmedial) - i transmedial fortelling har hvert medium sin egen rolle og sitt eget bidrag.',
      },
    },
    {
      id: 'mi2-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        task: 'Hva menes med mediekonvergens?',
        options: [
          { id: 'a', text: 'At alle medier til slutt vil forsvinne og erstattes av internett', isCorrect: false },
          { id: 'b', text: 'At medieinnhold blir dyrere å produsere', isCorrect: false },
          { id: 'c', text: 'At grensene mellom ulike medieformer og teknologier viskes ut', isCorrect: true },
          { id: 'd', text: 'At alle medieselskaper fusjonerer til ett stort selskap', isCorrect: false },
        ],
        solution: 'Mediekonvergens betyr at grensene mellom ulike medieformer og teknologier smelter sammen. Det skjer på tre nivåer: teknologisk (smarttelefonen samler mange mediefunksjoner), industriell (medieselskaper opererer på tvers av tradisjonelle bransjer) og kulturell (skillet mellom produsent og konsument blir uklart). Konvergensen har både fordeler som rikere medieopplevelser og utfordringer som informasjonsoverflod.',
      },
    },
    {
      id: 'mi2-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom forankring og avløsning i multimodale tekster, og gi et eksempel på hver.',
        hints: ['Tenk på samspillet mellom tekst og bilde'],
        solution: 'Forankring betyr at teksten styrer tolkningen av bildet. Eksempel: Et bilde av en folkemengde med bildeteksten «Demonstrasjon mot klimaendringer i Oslo» - uten teksten kunne bildet tolkes som en konsert eller festival. Teksten forankrer betydningen. Avløsning betyr at tekst og bilde utfyller hverandre med ulik informasjon, og begge er nødvendige for å forstå helheten. Eksempel: I en tegneserie viser bildet en person som smiler, mens snakkeboblen sier «Jeg er helt rolig» - kombinasjonen av bilde og tekst forteller mer enn hvert element for seg.',
      },
    },
    {
      id: 'mi2-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Velg et tema du er opptatt av, og skisser en transmedial fortelling som bruker minst tre ulike plattformer. Forklar hva hver plattform tilfører.',
        solution: 'Eksempel - Tema: «Ensomhet blant unge». Plattform 1: Instagram-serie med illustrasjoner og korte personlige vitnesbyrd om ensomhet, presentert som anonyme innlegg med gjenkjennelige situasjoner. Formålet er å skape gjenkjennelse og bryte tabu. Plattform 2: Podkast med dybdeintervjuer av ungdommer som forteller sin historie, samt samtaler med psykologer om årsaker og løsninger. Tilfører dybde, kontekst og fagkunnskap. Plattform 3: Interaktiv nettside med et kart over sosiale møteplasser i nærmiljøet, ressurser for de som sliter, og et forum der unge kan dele erfaringer anonymt. Tilfører konkrete handlingsalternativer og fellesskap. Hver plattform har en unik funksjon som utfyller helheten.',
      },
    },
    {
      id: 'mi2-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Beskriv hva plattformtilpasning innebærer. Velg én nyhetssak og forklar hvordan den bør tilpasses for henholdsvis TikTok, podkast og nettavis.',
        solution: 'Plattformtilpasning betyr å tilpasse innhold til de spesifikke egenskapene ved ulike plattformer. Eksempel - nyhetssak: «Regjeringen innfører ny klimaavgift». TikTok: En 30-sekunders vertikal video med tekst på skjermen som forklarer de tre viktigste endringene. Engasjerende åpning, visuell grafikk og en oppfordring til å kommentere. Podkast: Et 20-minutters segment med intervju av en økonom som forklarer konsekvensene, og en ung person som forteller hvordan avgiften påvirker hverdagen. Gir rom for nyanser og diskusjon. Nettavis: En lengre artikkel med faktaboks, infografikk, ekspertkommentarer, beregningseksempler og lenker til relaterte saker. SEO-optimalisert med nøkkelord. Samme sak, men formidlet på helt ulike måter tilpasset plattformens logikk.',
      },
    },
    {
      id: 'mi2-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Diskuter begrepet «prosument» og forklar hvordan kulturell konvergens har endret forholdet mellom medieprodusenter og publikum.',
        solution: 'Begrepet prosument (produsent + konsument) beskriver at publikum i dagens medielandskap ikke lenger bare er passive mottakere, men også aktive produsenter av medieinnhold. Kulturell konvergens har endret forholdet på flere måter: 1) Brukergenerert innhold på plattformer som YouTube, TikTok og blogger gjør at alle med en smarttelefon kan nå et stort publikum. 2) Kommentar- og delingskulturen gjør at publikum aktivt former hvordan innhold spres og tolkes. 3) Fan fiction, remikser og parodier betyr at publikum bearbeider og videreutvikler profesjonelt innhold. 4) Tilbakemeldinger fra publikum påvirker profesjonelle mediers innhold direkte. Denne utviklingen gir økt demokratisering av mediene, men skaper også utfordringer knyttet til kvalitetssikring, feilinformasjon og opphavsrett.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Evaluering og refleksjon
// ============================================================================

export const CHAPTER_MEDIEINFO_2_8_3: TextbookChapter = {
  id: 'medieinfo-2-8-3',
  courseId: 'medieinfo-2',
  chapterNumber: '8.3',
  title: 'Evaluering og refleksjon',
  description: 'Lær å vurdere eget og andres mediearbeid systematisk ved hjelp av kvalitetskriterier, tilbakemeldingsmetoder og refleksjonspraksis. Utvikle evnen til kritisk selvevaluering.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere og reflektere over eget og andres mediearbeid'],
  keyTerms: [
    { term: 'Kvalitetskriterier', definition: 'Definerte standarder og mål som brukes for å vurdere kvaliteten på en medieproduksjon, for eksempel teknisk utførelse, innhold, formidlingsevne og etisk forsvarlig praksis.' },
    { term: 'Formativ vurdering', definition: 'Vurdering som skjer underveis i en prosess, med mål om å forbedre arbeidet mens det fortsatt pågår.' },
    { term: 'Summativ vurdering', definition: 'Sluttvenurdering av det ferdige produktet, som oppsummerer kvaliteten i forhold til definerte kriterier.' },
    { term: 'Refleksjonslogg', definition: 'Et personlig dokument der man løpende noterer erfaringer, utfordringer, valg og læring gjennom en produksjonsprosess.' },
  ],
  content: [
    {
      id: 'mi2-8-3-intro',
      type: 'text',
      content: `## Å se kritisk på eget arbeid

Den kanskje viktigste ferdigheten en medieprodusent kan utvikle, er evnen til å vurdere sitt eget arbeid med et kritisk blikk. Det er lett å bli «blind» for svakheter i noe man selv har skapt, og det er like lett å overse styrker. Systematisk evaluering og refleksjon gjør deg bedre for hvert prosjekt.

I profesjonelle medier er evaluering en integrert del av produksjonsprosessen: Filmregissører viser «rough cuts» til testpublikum, reklamebyrå tester kampanjer i fokusgrupper, og nyhetsredaksjoner evaluerer dekningen sin i etterkant av store saker.

I dette kapittelet skal du lære:
- Hvordan du definerer kvalitetskriterier for medieproduksjoner
- Forskjellen mellom formativ og summativ vurdering
- Metoder for å gi og motta konstruktiv tilbakemelding
- Hvordan refleksjonslogg styrker læring`,
    },
    {
      id: 'mi2-8-3-def-1',
      type: 'definition',
      title: 'Kvalitetskriterier for medieproduksjoner',
      content: `**Kvalitetskriterier** er definerte standarder som brukes for å vurdere en medieproduksjon. De viktigste kategoriene er:\n\n- **Innhold:** Er budskapet klart? Er informasjonen korrekt? Er fortellingen engasjerende?\n- **Teknisk kvalitet:** Er bilde, lyd og redigering av god kvalitet? Fungerer de tekniske løsningene?\n- **Formidlingsevne:** Treffer produksjonen målgruppen? Er formatet hensiktsmessig?\n- **Kreativitet:** Er det originalt og nyskapende? Overrasker det positivt?\n- **Etikk:** Er personvernet ivaretatt? Er kildene pålitelige? Er innholdet rettferdig?\n\nKvalitetskriterier bør defineres *før* produksjonen starter, slik at hele teamet vet hva de jobber mot.`,
    },
    {
      id: 'mi2-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Vurderingsskjema for en elevprodusert video',
      problem: 'Hvordan kan du lage et systematisk vurderingsskjema for å evaluere en kort video laget av medelever?',
      solution: `**Vurderingsskjema for videoproduksjon**

| Kriterium | Svakt (1-2) | Middels (3-4) | Sterkt (5-6) |
|-----------|-------------|---------------|--------------|
| **Innhold og budskap** | Uklart budskap, mangler struktur | Tydelig budskap, men noe ustrukturert | Klart budskap, engasjerende fortelling |
| **Teknisk bildekvalitet** | Ustabilt, dårlig lys, ufokusert | Akseptabel kvalitet, noen tekniske svakheter | Stabilt, godt lys, bevisst komposisjon |
| **Lyd** | Uforståelig tale, forstyrrende bakgrunnsstøy | Forståelig tale, noe støy | Klar lyd, god balanse tale/musikk |
| **Redigering** | Uryddig klipping, dårlig flyt | Grei klipping, noen unødvendige lengder | God flyt, bevisste overganger, riktig tempo |
| **Kreativitet** | Lite originalt, følger malen slavisk | Noen originale grep | Overraskende, nyskapende tilnærming |
| **Målgruppe** | Uklart hvem det er laget for | Treffer målgruppen delvis | Tydelig tilpasset og engasjerer målgruppen |

**Bruk:** Vurder produksjonen på hvert kriterium. Summer poengene for en totalvurdering. Skriv kommentarer med konkrete forslag til forbedring for hvert punkt.`,
    },
    {
      id: 'mi2-8-3-def-2',
      type: 'definition',
      title: 'Formativ og summativ vurdering',
      content: `**Formativ vurdering** er vurdering som skjer *underveis* i produksjonsprosessen, med mål om å forbedre arbeidet mens det fortsatt pågår. Eksempler: visning av utkast, testvisning, tilbakemelding på manus.\n\n**Summativ vurdering** er vurdering av det *ferdige* produktet, som oppsummerer kvaliteten i forhold til definerte kriterier. Eksempler: Sluttkarakter, filmanmeldelse, publikumsmottakelse.\n\nBegge formene er viktige: Formativ vurdering gir mulighet til å justere kursen underveis, mens summativ vurdering gir en helhetlig tilbakemelding på resultatet. I skolesammenheng bør hovedvekten legges på formativ vurdering, fordi den gir størst læringsutbytte.`,
    },
    {
      id: 'mi2-8-3-text-1',
      type: 'text',
      content: `### Konstruktiv tilbakemelding

Å gi god tilbakemelding er en ferdighet som krever øvelse. Dårlig tilbakemelding kan demotivere, mens god tilbakemelding inspirerer til forbedring.

**Prinsipper for konstruktiv tilbakemelding:**

1. **Vær konkret:** «Lydkvaliteten i intervjuet på 2:30 er lav» er bedre enn «Lyden er dårlig»
2. **Balanser:** Start med noe positivt, pek på forbedringspotensial, avslutt med oppmuntring
3. **Fokuser på arbeidet, ikke personen:** «Klippingen kunne vært strammere» i stedet for «Du er dårlig til å klippe»
4. **Kom med forslag:** Ikke bare pek på problemer, foreslå løsninger
5. **Vær tidsriktig:** Gi tilbakemelding mens det fortsatt er mulig å gjøre endringer

**To-stjerner-og-et-ønske:**
En enkel tilbakemeldingsmodell:
- Nevn to ting som er bra (stjerner)
- Formuler ett forbedringsforslag (ønske)

**Kritisk venn-metoden:**
En medelev følger prosjektet ditt over tid og gir jevnlig tilbakemelding som en «kritisk venn» - noen som vil deg vel, men som er ærlig og utfordrende.`,
    },
    {
      id: 'mi2-8-3-text-2',
      type: 'text',
      content: `### Refleksjonslogg

En refleksjonslogg er et personlig dokument der du løpende noterer erfaringer, utfordringer, valg og læring gjennom produksjonsprosessen. Den hjelper deg å:
- Bevisstgjøre deg egne valg og begrunnelser
- Identifisere hva du lærte og hva du ville gjort annerledes
- Dokumentere prosessen for vurdering
- Utvikle metakognisjon (evnen til å tenke over egen tenkning)

**Hva bør refleksjonsloggen inneholde?**

For hver arbeidsøkt eller fase:
- **Hva gjorde jeg?** Beskriv konkret hva du jobbet med
- **Hvilke valg tok jeg?** Begrunn valgene
- **Hva fungerte godt?** Hva er du fornøyd med?
- **Hva var utfordrende?** Hva slet du med?
- **Hva lærte jeg?** Hva tar du med videre?
- **Hva ville jeg gjort annerledes?** Forbedringspotensial

**Tips:** Skriv refleksjonsloggen rett etter arbeidsøkten, mens inntrykkene er ferske. Det gir mer presise og ærlige refleksjoner enn å skrive i etterkant.`,
    },
    {
      id: 'mi2-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Refleksjonslogg-utdrag',
      problem: 'Hvordan kan en god refleksjonslogg-innføring se ut etter en dag med videoopptak?',
      solution: `**Dato:** Torsdag, uke 3
**Fase:** Innspilling, dag 2

**Hva jeg gjorde:** Vi filmet intervjuet med den lokale kokken og tok B-roll av matlagingsprosessen. Jeg var ansvarlig for lyd og hadde hovedansvaret for lydopptaket.

**Valg jeg tok:** Valgte å bruke retningsbestemt mikrofon i stedet for myggmikrofon for intervjuet, fordi vi filmet i et åpent kjøkken med mye bakgrunnsstøy fra vifter og kjøkkenutstyr. Retningsbestemt mikrofon fanget opp talen bedre og filtrerte ut mer støy.

**Hva fungerte godt:** Lydkvaliteten på intervjuet ble mye bedre enn forrige opptaksdag. Valget av mikrofon var riktig. Samarbeidet med fotografen fungerte smidig - vi kommuniserte godt om når vi startet og stoppet opptak.

**Hva var utfordrende:** Vi hadde ikke nok B-roll av detaljene i matlagingen. Fotografen fokuserte mest på intervjusituasjonen, og vi glemte å planlegge tid for separate B-roll-opptak. I ettertid ser jeg at vi burde ha satt av en egen halvtime til dette.

**Hva jeg lærte:** Planlegg B-roll som en separat oppgave med egen tid i produksjonsplanen. Det er lett å glemme det under intervjuopptaket.

**Hva jeg ville gjort annerledes:** Laget en detaljert skudliste (shot list) for B-roll på forhånd, med spesifikke bilder vi trengte.`,
    },
    {
      id: 'mi2-8-3-text-3',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvalitetskriterier** bør defineres på forhånd og dekke innhold, teknikk, formidling, kreativitet og etikk
- **Formativ vurdering** underveis gir størst læringsutbytte
- **Konstruktiv tilbakemelding** er konkret, balansert og fokuserer på arbeidet
- **Refleksjonslogg** bevisstgjør egne valg og styrker læringen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kvalitetskriterier | Standarder for vurdering av medieproduksjon |
| Formativ vurdering | Underveisvurdering for forbedring |
| Summativ vurdering | Sluttvurdering av ferdig produkt |
| Refleksjonslogg | Løpende dokumentasjon av valg og læring |`,
    },
    {
      id: 'mi2-8-3-samleoppgaver',
      type: 'text',
      title: 'Samleoppgaver',
      content: `## Samleoppgaver – Evaluering og refleksjon`,
    },
    {
      id: 'mi2-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom formativ og summativ vurdering?',
        options: [
          { id: 'a', text: 'Formativ vurdering gis av læreren, summativ av medelever', isCorrect: false },
          { id: 'b', text: 'Formativ vurdering skjer underveis for å forbedre, summativ vurderer det ferdige produktet', isCorrect: true },
          { id: 'c', text: 'Formativ vurdering bruker tall, summativ bruker tekst', isCorrect: false },
          { id: 'd', text: 'Formativ vurdering er positiv, summativ er negativ', isCorrect: false },
        ],
        solution: 'Formativ vurdering skjer underveis i produksjonsprosessen med mål om å forbedre arbeidet mens det pågår, for eksempel tilbakemelding på utkast eller testvisning. Summativ vurdering skjer etter at produktet er ferdig og oppsummerer kvaliteten i forhold til definerte kriterier. Begge er viktige, men formativ vurdering gir størst læringsutbytte fordi den gir mulighet til å justere kursen.',
      },
    },
    {
      id: 'mi2-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner god konstruktiv tilbakemelding?',
        options: [
          { id: 'a', text: 'Den fokuserer først og fremst på det som er dårlig', isCorrect: false },
          { id: 'b', text: 'Den er generell og overordnet, uten å gå i detaljer', isCorrect: false },
          { id: 'c', text: 'Den er vag for å unngå å såre noen', isCorrect: false },
          { id: 'd', text: 'Den er konkret, balansert og fokuserer på arbeidet med forslag til forbedring', isCorrect: true },
        ],
        solution: 'God konstruktiv tilbakemelding er konkret (peker på spesifikke steder, ikke generelle vurderinger), balansert (nevner både styrker og forbedringspotensial), fokuserer på arbeidet og ikke personen, og kommer med forslag til løsninger. Den bør også gis til riktig tid - mens det fortsatt er mulig å gjøre forbedringer.',
      },
    },
    {
      id: 'mi2-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Lag et vurderingsskjema med minst fem kvalitetskriterier for en podkastepisode. Beskriv hva som kjennetegner svak, middels og sterk kvalitet for hvert kriterium.',
        hints: ['Tenk på innhold, lydkvalitet, struktur, formidling og kreativitet'],
        solution: 'Vurderingsskjema for podkast: 1) Innhold og relevans: Svak - uklart tema, mangler faktagrunnlag. Middels - tydelig tema, men noe overfladisk. Sterk - engasjerende, veldokumentert innhold med gode kilder. 2) Lydkvalitet: Svak - mye bakgrunnsstøy, ujevnt lydnivå. Middels - akseptabel lydkvalitet, noe støy. Sterk - klar lyd, god balanse mellom tale og musikk. 3) Struktur og flyt: Svak - mangler intro/outro, hopper mellom temaer. Middels - har struktur, men noe ujevn flyt. Sterk - tydelig struktur med god intro, logisk oppbygging og avrunding. 4) Formidlingsevne: Svak - monoton, vanskelig å følge. Middels - engasjerende til tider, men mister grepet. Sterk - fanger lytteren, god stemmebruk, levende formidling. 5) Kreativitet: Svak - følger malen uten egne grep. Middels - noen originale elementer. Sterk - overraskende vinklinger, kreativ bruk av lydeffekter eller format.',
      },
    },
    {
      id: 'mi2-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Forklar hva en refleksjonslogg er, og drøft hvordan det å skrive refleksjonslogg kan bidra til faglig utvikling.',
        solution: 'En refleksjonslogg er et personlig dokument der man løpende noterer erfaringer, utfordringer, valg og læring gjennom en arbeidsprosess. Faglig utvikling: 1) Bevisstgjøring - når du skriver ned valgene dine, blir du mer bevisst på hvorfor du gjør som du gjør. Dette utvikler evnen til å begrunne kreative og tekniske valg. 2) Metakognisjon - refleksjonsloggen trener evnen til å tenke over egen tenkning og egen læreprosess, noe som er en nøkkelkompetanse for livslang læring. 3) Feilanalyse - ved å dokumentere hva som gikk galt og hvorfor, unngår du å gjenta samme feil. 4) Overføring - erfaringer fra ett prosjekt kan overføres til neste fordi de er dokumentert og bearbeidet. 5) Dokumentasjon - loggen viser læreren din prosess og utvikling, ikke bare sluttproduktet.',
      },
    },
    {
      id: 'mi2-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Bruk «to-stjerner-og-et-ønske»-metoden til å gi tilbakemelding på en medieproduksjon du nylig har sett (film, podkast, video eller lignende). Formuler tilbakemeldingen skriftlig.',
        hints: ['Velg noe konkret å peke på - ikke vær for generell'],
        solution: 'Eksempel - Tilbakemelding på en YouTube-dokumentar om gatematkultur: Stjerne 1: Bildekvaliteten er gjennomgående høy, med flotte nærbilder av matlagingsprosessen som virkelig vekker appetitten. Særlig scenen i det thailandske markedet (3:20) bruker tredjedelsregelen godt og har vakker fargebalanse. Stjerne 2: Strukturen er sterk med en tydelig rød tråd fra gate til gate og en personlig fortellerstemme som gjør det engasjerende å følge med. Overgangene mellom de ulike stedene er kreativt løst med kartanimasjon. Ønske: Lydkvaliteten i intervjuene varierer mye - noen er tydelige med ekstern mikrofon, mens andre virker tatt med kameramikrofonen og drukner i bakgrunnsstøy. Jeg ønsker at alle intervjuene hadde konsekvent god lydkvalitet, eventuelt med undertekster der lyden er dårlig.',
      },
    },
    {
      id: 'mi2-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Diskuter hvorfor det er viktig å definere kvalitetskriterier før man starter en medieproduksjon, og ikke etter at den er ferdig.',
        solution: 'Det er viktig å definere kvalitetskriterier på forhånd av flere grunner: 1) Felles forståelse: Hele teamet vet hva de jobber mot, noe som reduserer misforståelser og konflikter om retning og ambisjonsnivå. 2) Bevisste valg: Når du vet hva som definerer kvalitet, kan du ta bevisste valg gjennom hele produksjonen som tjener disse målene. 3) Formativ vurdering: Du kan vurdere underveis om produksjonen er på rett spor i forhold til kriteriene, og justere kursen før det er for sent. 4) Rettferdig evaluering: Når kriteriene er definert på forhånd, unngår man å vurdere etter skjønn eller etter kriterier som ingen kjente til. 5) Motivasjon: Klare mål er motiverende fordi du vet hva du skal oppnå og kan måle framdriften. Å definere kriterier etterpå gir risiko for at man tilpasser kriteriene til resultatet i stedet for omvendt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Mediekritikk og samfunnsansvar
// ============================================================================

export const CHAPTER_MEDIEINFO_2_8_4: TextbookChapter = {
  id: 'medieinfo-2-8-4',
  courseId: 'medieinfo-2',
  chapterNumber: '8.4',
  title: 'Mediekritikk og samfunnsansvar',
  description: 'Utforsk medienes rolle i demokratiet gjennom kritisk analyse. Lær om presseetikk, maktforhold i mediene, propaganda og medienes samfunnsoppdrag i en digital tidsalder.',
  estimatedMinutes: 20,
  competenceGoals: ['analysere medienes rolle og samfunnsansvar i et demokratisk perspektiv'],
  keyTerms: [
    { term: 'Medienes samfunnsoppdrag', definition: 'Den forventede rollen mediene har i et demokrati: å informere, debattere, overvåke makthavere og være en arena for offentlig samtale.' },
    { term: 'Presseetikk', definition: 'De etiske normene og retningslinjene som styrer journalistisk praksis, nedfelt i Vær Varsom-plakaten i Norge.' },
    { term: 'Gatekeeping', definition: 'Prosessen der mediene velger hvilke saker som blir nyheter og hvilke som ikke blir det, og dermed påvirker hva offentligheten får vite.' },
    { term: 'Propaganda', definition: 'Systematisk kommunikasjon med mål om å påvirke holdninger og adferd i en bestemt retning, ofte gjennom manipulering av informasjon og følelser.' },
  ],
  content: [
    {
      id: 'mi2-8-4-intro',
      type: 'text',
      content: `## Hvem vokter vokterne?

Mediene kalles ofte «den fjerde statsmakt» fordi de har en viktig kontrollfunksjon i demokratiet: De overvåker politikere, næringsliv og offentlige institusjoner på vegne av befolkningen. Men hvem overvåker mediene? Hvem sørger for at journalistikken er rettferdig, sannferdig og ansvarlig?

Mediekritikk handler om å analysere medienes rolle og praksis med et kritisk blikk. Det gjelder ikke bare de store mediehusene, men også sosiale medier, influensere og alle som bruker medier til å påvirke.

I dette kapittelet skal du lære:
- Hva medienes samfunnsoppdrag innebærer
- Hvordan presseetikk regulerer journalistisk praksis
- Hva gatekeeping og agendasetting betyr for demokratiet
- Hvordan propaganda og påvirkningsoperasjoner fungerer
- Medienes makt og ansvar i en digital tidsalder`,
    },
    {
      id: 'mi2-8-4-def-1',
      type: 'definition',
      title: 'Medienes samfunnsoppdrag',
      content: `**Medienes samfunnsoppdrag** beskriver den forventede rollen mediene har i et demokratisk samfunn. Oppdraget omfatter fire hovedfunksjoner:\n\n1. **Informasjonsfunksjonen:** Gi borgerne den informasjonen de trenger for å ta opplyste valg\n2. **Vaktbikkjefunksjonen:** Overvåke og avdekke maktmisbruk i politikk, næringsliv og offentlig forvaltning\n3. **Arenafunksjonen:** Være en plattform for offentlig debatt der ulike synspunkter kan brytes\n4. **Underholdningsfunksjonen:** Tilby kulturelle opplevelser og underholdning\n\nI Norge er medienes samfunnsoppdrag nedfelt i mediepolitikken og støttet gjennom pressestøtte, NRK-lisens og momsfritak for nyhetsmedier.`,
    },
    {
      id: 'mi2-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Vaktbikkjefunksjonen i praksis',
      problem: 'Hvordan utøver norske medier sin vaktbikkjefunksjon? Gi et eksempel og analyser betydningen.',
      solution: `**Eksempel: VGs avsløring av Nav-skandalen (2019)**

Flere norske medier, med VG i spissen, avdekket at Nav hadde feiltolket EØS-regler om sykepenger, arbeidsavklaringspenger og pleiepenger. Minst 80 personer var uriktig dømt for trygdesvindel, og mange hadde sonet fengselsstraffer for noe som ikke var straffbart.

**Hvordan vaktbikkjefunksjonen virket:**
1. Journalister gravde i enkeltsaker der noe ikke stemte
2. De konfronterte Nav og ansvarlige politikere
3. Saken ble bred offentlig debatt
4. Stortinget opprettet en granskingskommisjon
5. De dømte fikk sakene sine gjenopptatt

**Betydning for demokratiet:**
- Uten medienes arbeid ville urettferdigheten trolig fortsatt
- Offentligheten ble informert om en systemfeil som rammet sårbare mennesker
- Maktapparatet ble stilt til ansvar
- Tilliten til rettsstaten ble satt på prøve, men prosessen med å rette opp feilen styrket den på sikt

**Analyse:** Eksempelet viser at vaktbikkjefunksjonen er helt avgjørende for et velfungerende demokrati. Uten uavhengige medier som tør å utfordre makthavere, kan feil og urett fortsette i det stille.`,
    },
    {
      id: 'mi2-8-4-def-2',
      type: 'definition',
      title: 'Gatekeeping og agendasetting',
      content: `**Gatekeeping** er prosessen der mediene bestemmer hvilke saker som blir nyheter og hvilke som ikke blir det. Redaktører, journalister og algoritmer fungerer som «portvakter» som kontrollerer informasjonsflyten til offentligheten.\n\n**Agendasetting** er medienes evne til å påvirke hva folk tenker *på*, selv om de ikke nødvendigvis påvirker hva folk *mener*. Saker som får mye medieoppmerksomhet, oppfattes som viktigere av publikum.\n\nI den digitale tidsalderen har gatekeeping endret seg dramatisk: Algoritmene til Google, Facebook og TikTok har delvis overtatt redaktørenes rolle, og alle med en smarttelefon kan publisere innhold uten å gå gjennom tradisjonelle portvakter. Dette demokratiserer, men utfordrer også kvalitetskontrollen.`,
    },
    {
      id: 'mi2-8-4-text-1',
      type: 'text',
      content: `### Presseetikk og Vær Varsom-plakaten

I Norge reguleres journalistisk etikk primært gjennom selvdømmeordningen:

**Vær Varsom-plakaten:**
Pressens etiske regelverk, vedtatt av Norsk Presseforbund. Plakaten dekker:
- Pressens samfunnsrolle
- Integritet og troverdighet
- Journalistisk adferd og kildeforhold
- Publiseringsregler

**Sentrale prinsipper:**
- **Kildekritikk:** Flere uavhengige kilder, rett til tilsvar
- **Personvern:** Vise varsomhet med identifisering, særlig av barn
- **Saklighet:** Skille mellom fakta og kommentarer
- **Uavhengighet:** Ikke la seg påvirke av annonsører eller kilder
- **Rettferdighet:** Balansert dekning av konflikter

**Pressens Faglige Utvalg (PFU):**
Behandler klager på brudd på Vær Varsom-plakaten. PFU kan felle eller frikjenne medier. En fellelse er ikke en rettslig straff, men medfører publisering av uttalelsen og omdømmetap.

**Utfordring:** Vær Varsom-plakaten gjelder redaktørstyrte medier. Sosiale medier, influensere og blogger faller utenfor. Det betyr at stadig mer av det folk leser og ser, ikke er underlagt presseetiske normer.`,
    },
    {
      id: 'mi2-8-4-text-2',
      type: 'text',
      content: `### Propaganda og påvirkning

Propaganda er systematisk kommunikasjon med mål om å påvirke holdninger og adferd i en bestemt retning.

**Kjennetegn på propaganda:**
- Ensidig fremstilling - kun én side av saken presenteres
- Appell til følelser fremfor fornuft
- Forenkling av komplekse spørsmål
- Gjentakelse av budskap (repetisjon skaper opplevd sannhet)
- Demonisering av motstandere
- Bruk av symboler, slagord og karismatiske ledere

**Moderne former for propaganda:**
- **Statlig propaganda:** Autoritære regimer som kontrollerer mediene (Russland, Kina, Nord-Korea)
- **Påvirkningsoperasjoner:** Koordinerte kampanjer i sosiale medier for å påvirke valg eller offentlig opinion i andre land
- **Kommersiell propaganda:** Reklame som fremstiller produkter eller livsstiler som nødvendige
- **Desinformasjonskampanjer:** Systematisk spredning av falsk informasjon

**Motstrategier:**
- Kildekritikk og faktasjekking
- Mediekunnskap og kritisk tenkning
- Mangfold av nyhetskilder
- Transparens i medieeierskap og finansiering
- Algoritmisk gjennomsiktighet`,
    },
    {
      id: 'mi2-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Analyse av agendasetting',
      problem: 'Hvordan kan mediene påvirke hva samfunnet oppfatter som viktig gjennom agendasetting?',
      solution: `**Scenario:** I en uke får klimaspørsmål bred dekning i norske medier: NRK lager dokumentar, Aftenposten har forsideleder, og Dagbladet kjører kampanjejournalistikk. Samtidig skjer det en reform i eldreomsorgen som knapt dekkes.

**Effekt av agendasetting:**
- Befolkningen oppfatter klima som den viktigste saken denne uken
- Politikere får spørsmål om klima, ikke eldreomsorg
- Meningsmålinger viser økt bekymring for klima
- Eldreomsorgsreformen vedtas med minimal offentlig debatt

**Analyse:**
Mediene bestemte ikke nødvendigvis hva folk *mener* om klima, men de bestemte at klima var det folk *tenkte på*. Eldreomsorgsreformen - som kanskje berører like mange - fikk ingen oppmerksomhet og dermed ingen offentlig debatt.

**Refleksjon:**
- Er det tilfeldig hva som dekkes? Nei - det handler om nyhetsverdier (konflikt, aktualitet, nærhet)
- Har mediene et ansvar for å dekke viktige saker selv om de ikke er «sexy»? Ja - det er en del av samfunnsoppdraget
- Hva skjer med saker som aldri dekkes? De forblir usynlige for offentligheten

**Konklusjon:** Agendasetting er en usynlig, men svært reell makt. Mediekritikk handler blant annet om å stille spørsmålet: Hva dekkes *ikke* - og hvorfor?`,
    },
    {
      id: 'mi2-8-4-text-3',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Medienes samfunnsoppdrag** omfatter informasjon, vaktbikkje, arena og underholdning
- **Presseetikk** reguleres gjennom Vær Varsom-plakaten og PFU
- **Gatekeeping** og **agendasetting** gir mediene stor innflytelse over hva offentligheten vet og tenker på
- **Propaganda** og påvirkningsoperasjoner utnytter medienes makt til å manipulere
- Mediekritikk handler om å analysere og utfordre medienes rolle og praksis

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Samfunnsoppdrag | Medienes demokratiske funksjon |
| Presseetikk | Etiske normer for journalistikk |
| Gatekeeping | Utvelgelse av hva som blir nyheter |
| Agendasetting | Medienes påvirkning på hva folk tenker på |`,
    },
    {
      id: 'mi2-8-4-samleoppgaver',
      type: 'text',
      title: 'Samleoppgaver',
      content: `## Samleoppgaver – Mediekritikk og samfunnsansvar`,
    },
    {
      id: 'mi2-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva er medienes vaktbikkjefunksjon?',
        options: [
          { id: 'a', text: 'Å underholde befolkningen med populært innhold', isCorrect: false },
          { id: 'b', text: 'Å overvåke og avdekke maktmisbruk på vegne av befolkningen', isCorrect: true },
          { id: 'c', text: 'Å formidle myndighetenes budskap til folket', isCorrect: false },
          { id: 'd', text: 'Å sikre at annonsørene får synlighet i mediene', isCorrect: false },
        ],
        solution: 'Vaktbikkjefunksjonen innebærer at mediene overvåker politikere, næringsliv og offentlige institusjoner på vegne av befolkningen, og avdekker maktmisbruk, urettferdighet og feil. Dette er en av de viktigste funksjonene i et demokrati, fordi det sikrer at makthaverne stilles til ansvar.',
      },
    },
    {
      id: 'mi2-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        task: 'Hva menes med agendasetting?',
        options: [
          { id: 'a', text: 'At mediene bestemmer hva folk skal mene om politiske spørsmål', isCorrect: false },
          { id: 'b', text: 'At mediene setter opp møteplaner for redaksjonen', isCorrect: false },
          { id: 'c', text: 'At mediene påvirker hva folk tenker på gjennom å velge hva som dekkes', isCorrect: true },
          { id: 'd', text: 'At mediene planlegger innholdet ett år i forveien', isCorrect: false },
        ],
        solution: 'Agendasetting betyr at mediene påvirker hva folk tenker på gjennom å velge hvilke saker som får oppmerksomhet. Saker som dekkes mye, oppfattes som viktigere av publikum, mens saker som ignoreres forblir usynlige. Mediene bestemmer ikke nødvendigvis hva folk mener, men de har stor innflytelse over hva folk mener noe om.',
      },
    },
    {
      id: 'mi2-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Gjør rede for medienes fire samfunnsfunksjoner og diskuter hvilken funksjon du mener er viktigst for demokratiet.',
        hints: ['Informasjon, vaktbikkje, arena og underholdning'],
        solution: 'Medienes fire samfunnsfunksjoner: 1) Informasjonsfunksjonen: Gi borgerne kunnskap de trenger for å ta opplyste valg, som nyhetsjournalistikk om politikk, økonomi og samfunn. 2) Vaktbikkjefunksjonen: Overvåke og avdekke maktmisbruk i politikk, næringsliv og forvaltning, som gravejournalistikk. 3) Arenafunksjonen: Være en plattform for offentlig debatt der ulike synspunkter kan brytes mot hverandre, som debattsider og kommentarfelt. 4) Underholdningsfunksjonen: Tilby kulturelle opplevelser og underholdning. Man kan argumentere for at vaktbikkjefunksjonen er viktigst for demokratiet, fordi den sikrer at makthaverne stilles til ansvar - uten den ville korrupsjon og maktmisbruk kunne foregå uten innsyn. Men informasjonsfunksjonen er også avgjørende: uten informasjon kan borgerne ikke ta opplyste valg, og da svekkes hele det demokratiske fundamentet.',
      },
    },
    {
      id: 'mi2-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Forklar hva Vær Varsom-plakaten er og diskuter en utfordring med at den ikke gjelder for sosiale medier og influensere.',
        solution: 'Vær Varsom-plakaten er pressens etiske regelverk i Norge, vedtatt av Norsk Presseforbund. Den inneholder retningslinjer om pressens samfunnsrolle, integritet, journalistisk adferd og publiseringsregler. Klager behandles av Pressens Faglige Utvalg (PFU). En sentral utfordring er at plakaten kun gjelder redaktørstyrte medier (aviser, TV, radio), ikke sosiale medier, influensere eller bloggere. Dette er problematisk fordi stadig mer av det folk leser og ser, kommer fra kilder som ikke er underlagt presseetiske normer. En influenser med hundretusener av følgere kan publisere ubalansert eller villedende innhold uten at PFU kan gripe inn. Samtidig oppfatter mange, særlig unge, slike aktører som like troverdige som tradisjonelle medier. Resultatet er et hull i den etiske reguleringen av offentlig kommunikasjon.',
      },
    },
    {
      id: 'mi2-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Nevn minst fire kjennetegn på propaganda, og gi et aktuelt eksempel på hvordan propaganda kan forekomme i moderne medier.',
        solution: 'Kjennetegn på propaganda: 1) Ensidig fremstilling der kun én side av saken presenteres. 2) Appell til følelser (frykt, sinne, nasjonalstolthet) fremfor rasjonelle argumenter. 3) Forenkling av komplekse spørsmål til svart-hvitt-fremstillinger. 4) Systematisk gjentakelse av budskap for å skape opplevd sannhet. 5) Demonisering av motstandere eller utgrupper. Aktuelt eksempel: Statlig kontrollerte medier i Russland fremstiller ensidig Ukraina-krigen som en «spesialoperasjon» for å beskytte russisktalende. Kun den russiske regjeringens perspektiv presenteres, motargumenter sensureres, og ukrainsk ledelse demoniseres systematisk. Sosiale medier-kampanjer forsterker budskapet med emosjonelt innhold som appellerer til nasjonalfølelse. Dette er propaganda fordi det er systematisk, ensidig og statlig styrt med mål om å forme befolkningens holdninger.',
      },
    },
    {
      id: 'mi2-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Drøft hvordan algoritmisk gatekeeping i sosiale medier skiller seg fra tradisjonell redaksjonell gatekeeping, og hvilke konsekvenser det har for demokratiet.',
        solution: 'Tradisjonell gatekeeping: Redaktører og journalister velger saker basert på nyhetskriterier (aktualitet, vesentlighet, konflikt), presseetiske normer og samfunnsoppdraget. Utvelgelsen er menneskelig, gjennomtenkt og underlagt etiske retningslinjer. Algoritmisk gatekeeping: Algoritmer velger innhold basert på brukerdata, engasjement (klikk, delinger, kommentarer) og mønstergjenkjenning. Målet er å maksimere brukerengasjement og reklameinntekter, ikke å ivareta et samfunnsoppdrag. Konsekvenser for demokratiet: 1) Filterbobler - brukere eksponeres primært for innhold som bekrefter eksisterende holdninger. 2) Engasjementsdrevet innhold - sensasjonelt og provoserende innhold favoriseres, noe som kan forsterke polarisering. 3) Manglende etisk ramme - algoritmene følger ikke Vær Varsom-plakaten eller lignende normer. 4) Ugjennomskuelighet - det er vanskelig å vite hvorfor man ser det man ser. 5) Positiv side - flere stemmer får tilgang til offentligheten, noe som kan styrke mangfoldet. Dilemmaet er at algoritmisk gatekeeping både demokratiserer og fragmenterer den offentlige samtalen.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Fordypningsprosjekt
// ============================================================================

export const CHAPTER_MEDIEINFO_2_8_5: TextbookChapter = {
  id: 'medieinfo-2-8-5',
  courseId: 'medieinfo-2',
  chapterNumber: '8.5',
  title: 'Fordypningsprosjekt',
  description: 'Planlegg og gjennomfør et selvstendig fordypningsprosjekt innen et selvvalgt medietema. Lær å kombinere teori og praksis i en større mediefaglig produksjon med tilhørende refleksjon.',
  estimatedMinutes: 25,
  competenceGoals: ['gjennomføre et selvstendig fordypningsprosjekt med medietematikk'],
  keyTerms: [
    { term: 'Fordypningsprosjekt', definition: 'Et større, selvstendig prosjekt der eleven velger et medietema å undersøke i dybden, gjerne med en kombinasjon av teoretisk analyse og praktisk produksjon.' },
    { term: 'Problemstilling', definition: 'Et presist formulert spørsmål som styrer undersøkelsen og avgrenser temaet, slik at prosjektet får en tydelig retning og et klart fokus.' },
    { term: 'Metodetriangulering', definition: 'Bruk av flere ulike metoder for å undersøke et fenomen, som styrker påliteligheten i funnene fordi svakheter ved én metode kompenseres av styrker i en annen.' },
    { term: 'Drøfting', definition: 'En analytisk diskusjon der man veier ulike synspunkter, argumenter og funn mot hverandre, og trekker begrunnede konklusjoner.' },
  ],
  content: [
    {
      id: 'mi2-8-5-intro',
      type: 'text',
      content: `## Din mediefaglige reise

Fordypningsprosjektet er kroningen av mediefaget - din mulighet til å dykke dypt inn i et medietema som fascinerer deg, og vise hva du har lært gjennom to år med medie- og informasjonskunnskap. Prosjektet kombinerer teori og praksis: Du skal både analysere og reflektere over et mediefenomen, og du skal produsere noe eget.

Et godt fordypningsprosjekt viser at du kan:
- Formulere en presis problemstilling
- Bruke fagbegreper og teori fra mediekunnskap
- Gjennomføre en selvstendig undersøkelse
- Produsere medieinnhold av høy kvalitet
- Reflektere kritisk over egne valg og funn

I dette kapittelet skal du lære:
- Hvordan du velger tema og formulerer problemstilling
- Metoder for undersøkelse og analyse
- Struktur og oppbygging av prosjektet
- Krav til den praktiske produksjonen
- Vurderingskriterier og presentasjon`,
    },
    {
      id: 'mi2-8-5-def-1',
      type: 'definition',
      title: 'Fordypningsprosjekt i mediefag',
      content: `Et **fordypningsprosjekt** i mediefag er et større, selvstendig arbeid som kombinerer teoretisk analyse med praktisk medieproduksjon. Prosjektet skal demonstrere elevens evne til:\n\n1. **Faglig forståelse:** Bruk av relevante begreper, teorier og perspektiver fra mediefaget\n2. **Analytisk kompetanse:** Evne til å undersøke, tolke og drøfte et mediefenomen\n3. **Praktisk kompetanse:** Evne til å planlegge og gjennomføre en medieproduksjon\n4. **Refleksjon:** Evne til å vurdere egne valg, prosess og resultat kritisk\n\nProsjektet består vanligvis av tre deler:\n- En **skriftlig del** med innledning, teori, analyse og drøfting\n- En **praktisk del** med en medieproduksjon (film, podkast, kampanje, nettside o.l.)\n- En **refleksjons- og prosessdel** med logg og egenvurdering`,
    },
    {
      id: 'mi2-8-5-text-1',
      type: 'text',
      content: `### Velge tema og formulere problemstilling

**Å finne et godt tema:**
Temaet bør være noe du er genuint interessert i. Det skal være relevant for mediefaget og mulig å undersøke innenfor tids- og ressursrammene.

Eksempler på mulige temaer:
- Hvordan influensere påvirker unges kroppsoppfatning
- Nyhetsdekning av klimakrisen i norske medier
- Podkastens utvikling som nyhetsmedium
- Algoritmenes rolle i politisk polarisering
- Dokumentarfilm som verktøy for sosial endring
- Representasjon av minoriteter i norsk film og TV
- Lokal journalistikk i krisetider

**Fra tema til problemstilling:**
Problemstillingen er et presist spørsmål som avgrenser og styrer prosjektet.

| For bredt | For smalt | Godt avgrenset |
|-----------|-----------|----------------|
| Hva er sosiale medier? | Hvor mange ganger poster NRK på Instagram per uke? | Hvordan bruker NRK Instagram for å nå ungdom med nyhetsstoff? |
| Hva er propaganda? | Hva sa Putin 14. mars 2022? | Hvordan bruker russiske statlige medier framing-teknikker i dekningen av Ukraina-krigen? |

**Kjennetegn på en god problemstilling:**
- Kan ikke besvares med ja/nei
- Er avgrenset nok til å undersøkes grundig
- Krever analyse og drøfting, ikke bare beskrivelse
- Inneholder relevant mediefaglig vinkling`,
    },
    {
      id: 'mi2-8-5-def-2',
      type: 'definition',
      title: 'Metodetriangulering',
      content: `**Metodetriangulering** betyr å bruke flere ulike metoder for å undersøke det samme fenomenet. I et fordypningsprosjekt kan dette innebære å kombinere for eksempel:\n\n- **Tekstanalyse** (innholdsanalyse av medieprodukter) med **intervju** (snakke med fagfolk eller målgruppe)\n- **Kvantitativ analyse** (telle og måle, f.eks. antall artikler, sendetid) med **kvalitativ analyse** (tolke og forstå innhold og meninger)\n- **Egenproduksjon** (skape et medieprodukt) med **teoretisk analyse** (bruke fagbegreper til å forstå prosessen)\n\nTriangulering styrker prosjektet fordi funn fra én metode kan bekreftes eller nyanseres av en annen. Hvis både tekstanalysen og intervjuet peker i samme retning, er konklusjonen mer pålitelig.`,
    },
    {
      id: 'mi2-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Skisse til et fordypningsprosjekt',
      problem: 'En elev ønsker å undersøke hvordan podkaster brukes til å formidle nyheter til unge. Hvordan kan prosjektet struktureres?',
      solution: `**Problemstilling:** Hvordan bruker norske nyhetsmedier podkastformatet for å nå ungdom mellom 16 og 25 år, og hva kjennetegner formidlingsmåten sammenlignet med tradisjonell nyhetsformidling?

**Skriftlig del:**

*Innledning:* Bakgrunn (podkastlytting blant unge øker), problemstilling, avgrensning (tre norske nyhetspodkaster analyseres).

*Teori:* Nyhetsverdier, formidlingsstrategier, plattformtilpasning, bruksverditeorien (uses and gratifications).

*Metode:* Innholdsanalyse av tre podkaster (Aftenposten «Forklart», NRK «Oppdatert» og Dagbladet «Rett på») + spørreundersøkelse blant 30 medelever om podkastbruk.

*Analyse:* Sammenligne formidlingsgrep (tone, språk, lengde, struktur) i de tre podkastene. Presentere funn fra spørreundersøkelsen.

*Drøfting:* Hvorfor lykkes podkastformatet med å nå unge? Hva skiller det fra tradisjonell nyhetsformidling? Utfordringer (ekkokamre, algoritmer)?

*Konklusjon:* Svar på problemstillingen basert på funn og drøfting.

**Praktisk del:**
Produsere en egen nyhetspodkast-episode (10 min) rettet mot medelever, der eleven bruker formidlingsgrepene som ble identifisert i analysen.

**Refleksjonsdel:**
Refleksjonslogg fra hele prosessen + egenvurdering av både den skriftlige og praktiske delen.`,
    },
    {
      id: 'mi2-8-5-text-2',
      type: 'text',
      content: `### Struktur og oppbygging

**Den skriftlige delen:**

1. **Innledning**
   - Bakgrunn og begrunnelse for tema
   - Problemstilling
   - Avgrensning (hva du undersøker og hva du *ikke* undersøker)
   - Kort oversikt over oppbygging

2. **Teoridel**
   - Relevante fagbegreper og teorier
   - Tidligere forskning eller diskusjon om temaet
   - Teoretisk rammeverk for analysen

3. **Metode**
   - Hvilke metoder du bruker og hvorfor
   - Utvalg (hvilke medieprodukter, informanter, data)
   - Styrker og svakheter ved metodene

4. **Analyse og funn**
   - Presentasjon av det du fant
   - Bruk av eksempler og dokumentasjon
   - Kobling til teori

5. **Drøfting**
   - Hva betyr funnene?
   - Ulike perspektiver og nyanser
   - Kobling mellom teori og empiri

6. **Konklusjon**
   - Svar på problemstillingen
   - Hva har du lært?
   - Veien videre / nye spørsmål

7. **Kildeliste**
   - APA-format anbefales
   - Alle kilder som er brukt i teksten

**Den praktiske produksjonen** bør ha en tydelig kobling til den skriftlige delen.`,
    },
    {
      id: 'mi2-8-5-text-3',
      type: 'text',
      content: `### Vurderingskriterier og presentasjon

**Typiske vurderingskriterier:**

| Kriterium | Høy måloppnåelse |
|-----------|-----------------|
| Problemstilling | Presis, avgrenset og mediefaglig relevant |
| Faglig innhold | God bruk av begreper og teori, dybde i analysen |
| Metode | Bevisst metodevalg, gjerne triangulering, refleksjon over svakheter |
| Drøfting | Nyansert, ulike perspektiver, selvstendige resonnementer |
| Praktisk produksjon | Høy teknisk og innholdsmessig kvalitet, tydelig kobling til teorien |
| Refleksjon | Ærlig og innsiktsfull vurdering av prosess og resultat |
| Kilder og etikk | Grundig kildebruk, korrekt referering, etisk forsvarlig |
| Presentasjon | Tydelig fremføring, god struktur, behersker fagstoffet |

**Presentasjon av prosjektet:**
De fleste fordypningsprosjekter avsluttes med en presentasjon der du:
- Presenterer problemstillingen og hvorfor du valgte den
- Viser høydepunktene fra analysen
- Spiller av eller viser den praktiske produksjonen
- Deler de viktigste funnene og refleksjonene
- Svarer på spørsmål fra lærere og medelever

**Tips for presentasjonen:**
- Hold deg til tiden (vanligvis 15-20 minutter)
- Bruk visuell støtte (lysbilder, klipp fra produksjonen)
- Øv på fremføringen
- Forbered deg på mulige spørsmål`,
    },
    {
      id: 'mi2-8-5-text-4',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Et **fordypningsprosjekt** kombinerer teoretisk analyse med praktisk medieproduksjon
- En god **problemstilling** er presis, avgrenset og krever analyse, ikke bare beskrivelse
- **Metodetriangulering** styrker påliteligheten i funnene dine
- Prosjektet består av en **skriftlig del**, en **praktisk produksjon** og en **refleksjonsdel**
- **Drøfting** er den viktigste delen - her viser du selvstendig tenkning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fordypningsprosjekt | Selvstendig arbeid med teori og praksis |
| Problemstilling | Presist spørsmål som styrer undersøkelsen |
| Metodetriangulering | Bruk av flere metoder for økt pålitelighet |
| Drøfting | Analytisk diskusjon av funn og perspektiver |`,
    },
    {
      id: 'mi2-8-5-samleoppgaver',
      type: 'text',
      title: 'Samleoppgaver',
      content: `## Samleoppgaver – Fordypningsprosjekt`,
    },
    {
      id: 'mi2-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en god problemstilling for et fordypningsprosjekt?',
        options: [
          { id: 'a', text: 'Den kan besvares med ja eller nei', isCorrect: false },
          { id: 'b', text: 'Den er så bred at den dekker hele mediefaget', isCorrect: false },
          { id: 'c', text: 'Den er avgrenset, krever analyse og har en mediefaglig vinkling', isCorrect: true },
          { id: 'd', text: 'Den fokuserer kun på den praktiske produksjonen', isCorrect: false },
        ],
        solution: 'En god problemstilling er avgrenset nok til å undersøkes grundig innenfor prosjektets rammer, krever analyse og drøfting (ikke bare beskrivelse), og har en tydelig mediefaglig vinkling. Den skal ikke kunne besvares med ja/nei, og den skal ikke være så bred at den blir overfladisk. En god problemstilling styrer hele prosjektet og gir det retning.',
      },
    },
    {
      id: 'mi2-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        task: 'Hva er metodetriangulering?',
        options: [
          { id: 'a', text: 'Å bruke tre ulike kilder i kildelisten', isCorrect: false },
          { id: 'b', text: 'Å undersøke tre ulike medier i analysen', isCorrect: false },
          { id: 'c', text: 'Å bruke flere ulike metoder for å undersøke det samme fenomenet', isCorrect: true },
          { id: 'd', text: 'Å presentere prosjektet for tre ulike grupper', isCorrect: false },
        ],
        solution: 'Metodetriangulering betyr å bruke flere ulike metoder for å undersøke det samme fenomenet, for eksempel kombinere tekstanalyse med intervju, eller kvantitativ analyse med kvalitativ. Det styrker prosjektets pålitelighet fordi svakheter ved én metode kompenseres av styrker i en annen. Hvis flere metoder peker i samme retning, er konklusjonene mer troverdige.',
      },
    },
    {
      id: 'mi2-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Velg et medietema du er interessert i, og formuler en problemstilling som egner seg for et fordypningsprosjekt. Begrunn hvorfor problemstillingen er god.',
        hints: ['Sjekk at problemstillingen ikke kan besvares med ja/nei, er avgrenset og krever analyse'],
        solution: 'Eksempel - Tema: Influenseres påvirkning på ungdom. Problemstilling: «Hvilke retoriske virkemidler bruker norske livsstilsinfluensere for å markedsføre produkter til unge følgere, og i hvilken grad er det tydelig skille mellom redaksjonelt innhold og reklame?» Begrunnelse: 1) Problemstillingen kan ikke besvares med ja/nei, den krever analyse av virkemidler og drøfting av grenseoppgangen mellom innhold og reklame. 2) Den er avgrenset til norske livsstilsinfluensere og produktmarkedsføring, ikke hele influenserfenomenet. 3) Den har tydelig mediefaglig vinkling med fokus på retorikk, merkevarebygging og presseetiske spørsmål. 4) Den er mulig å undersøke gjennom innholdsanalyse av innlegg og eventuelt intervju med følgere.',
      },
    },
    {
      id: 'mi2-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Lag en prosjektplan for et fordypningsprosjekt med tidslinje over åtte uker. Inkluder milepæler, arbeidsoppgaver og fordeling mellom skriftlig og praktisk arbeid.',
        solution: 'Prosjektplan over 8 uker: Uke 1: Temavalg og research. Finne relevant teori og kilder. Milepæl: Tema og foreløpig problemstilling godkjent. Uke 2: Formulere endelig problemstilling. Bestemme metode og utvalg. Skrive innledning og teorigrunnlag. Milepæl: Problemstilling og metodebeskrivelse klar. Uke 3: Gjennomføre datainnsamling (tekstanalyse, intervjuer, spørreundersøkelse). Starte refleksjonslogg. Uke 4: Ferdigstille datainnsamling. Skrive analyse. Starte planlegging av praktisk produksjon. Milepæl: Analysedel ferdig. Uke 5: Skrive drøftingsdel. Gjennomføre pre-produksjon for praktisk del (manus, storyboard, planlegging). Uke 6: Produsere praktisk del (innspilling/opptak). Fortsette drøfting og konklusjon. Milepæl: Praktisk produksjon innspilt. Uke 7: Etterarbeid praktisk del (redigering). Ferdigstille skriftlig del. Kildeliste og korrekturlesing. Milepæl: Førsteutkast av hele prosjektet ferdig. Uke 8: Tilbakemelding og revisjon. Sluttfinpuss. Forberede presentasjon. Milepæl: Prosjektet levert og presentert. Fordeling: ca. 50 % skriftlig, 30 % praktisk produksjon, 20 % refleksjon og presentasjon.',
      },
    },
    {
      id: 'mi2-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom analyse og drøfting i et fordypningsprosjekt, og begrunn hvorfor drøftingsdelen anses som den viktigste.',
        hints: ['Analyse handler om å presentere funn, drøfting handler om å tolke og diskutere dem'],
        solution: 'Analyse handler om å presentere og systematisere det du har funnet - for eksempel å beskrive hvilke retoriske virkemidler som brukes i et utvalg medieprodukter, med eksempler og dokumentasjon. Drøfting handler om å tolke og diskutere funnene i lys av teori og ulike perspektiver. Her veier du argumenter for og mot, ser på funnene fra flere vinkler, og trekker begrunnede konklusjoner. Drøftingsdelen anses som viktigst fordi den viser selvstendig tenkning: Hvem som helst kan beskrive hva de har funnet, men det er i drøftingen du demonstrerer at du forstår hva funnene betyr, kan sette dem i en større sammenheng, og har evne til å resonere selvstendig. Det er drøftingen som skiller et godt prosjekt fra et middelmådig - den viser om du bare har gjengitt kunnskap eller om du virkelig har forstått og bearbeidet den.',
      },
    },
    {
      id: 'mi2-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Diskuter hva som kjennetegner et sterkt fordypningsprosjekt sammenlignet med et svakt. Trekk inn minst tre vurderingskriterier.',
        solution: 'Et sterkt fordypningsprosjekt kjennetegnes av: 1) Problemstilling og faglig innhold: Et sterkt prosjekt har en presis og avgrenset problemstilling som besvares gjennom hele arbeidet. Fagbegreper og teori brukes presist og integrert i analysen - ikke bare ramset opp, men aktivt brukt til å forstå fenomenet. Et svakt prosjekt har en vag problemstilling, overfladisk teoribruk og mangler faglig dybde. 2) Drøfting: Et sterkt prosjekt drøfter nyansert med flere perspektiver, veier argumenter mot hverandre og trekker selvstendige, begrunnede konklusjoner. Et svakt prosjekt beskriver uten å drøfte, eller presenterer kun én side av saken. 3) Kobling teori-praksis: I et sterkt prosjekt er den praktiske produksjonen tydelig koblet til den teoretiske analysen - for eksempel at funnene fra analysen brukes bevisst i utformingen av den egne produksjonen. I et svakt prosjekt lever de to delene adskilt uten kobling. 4) Refleksjon: Et sterkt prosjekt viser ærlig og innsiktsfull selvevaluering der eleven identifiserer styrker og svakheter i eget arbeid. Et svakt prosjekt har overfladisk refleksjon som bare sier «alt gikk bra».',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_2_DEL8_CHAPTERS = [
  CHAPTER_MEDIEINFO_2_8_1,
  CHAPTER_MEDIEINFO_2_8_2,
  CHAPTER_MEDIEINFO_2_8_3,
  CHAPTER_MEDIEINFO_2_8_4,
  CHAPTER_MEDIEINFO_2_8_5,
];

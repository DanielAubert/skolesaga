/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Seksjon 3: Teknologi og samfunn (Kapittel 3.1–3.7)
 * Denne filen inneholder kapittel 3.1–3.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Teknologihistorie - de tidlige oppdagelsene
// ============================================================================

export const CHAPTER_TOF_1_3_1: TextbookChapter = {
  id: 'tof-1-3-1',
  courseId: 'tof-1',
  chapterNumber: '3.1',
  title: 'Teknologihistorie - de tidlige oppdagelsene',
  description: 'Hjulet, skrift, metallurgi og tidlige teknologiske gjennombrudd.',
  estimatedMinutes: 25,
  competenceGoals: ['gjøre rede for teknologisk utvikling'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-1-intro',
      type: 'text',
      content: `## Teknologihistorie - de tidlige oppdagelsene

Menneskets historie er uløselig knyttet til teknologi. Fra de første steinverktøyene for over to millioner år siden til de tidlige sivilisasjonenes oppfinnelser, har teknologisk utvikling vært drivkraften bak store samfunnsendringer. Hver ny oppfinnelse har gitt mennesker bedre kontroll over omgivelsene og åpnet for nye måter å leve på.

I dette kapittelet skal vi se på noen av de viktigste tidlige teknologiske gjennombruddene – hjulet, skriften og metallurgien – og forstå hvorfor disse oppfinnelsene var så avgjørende for utviklingen av menneskelige sivilisasjoner.`,
    },

    // --- BLOKK 1: Steinverktøy og tidlig teknologi ---
    {
      id: 'tof1-3-1-def-1',
      type: 'definition',
      title: 'Teknologi',
      content: `**Teknologi** er anvendelsen av vitenskapelig kunnskap og praktisk erfaring for å løse problemer, lage verktøy og forbedre menneskelige muligheter.

Begrepet kommer fra det greske *techne* (ferdighet, håndverk) og *logos* (kunnskap, lære). Teknologi omfatter både fysiske redskaper og de metodene og prosessene som brukes til å lage dem.`,
    },
    {
      id: 'tof1-3-1-text-1',
      type: 'text',
      content: `### De første verktøyene

De eldste kjente verktøyene er **steinredskaper** funnet i Øst-Afrika, datert til rundt 2,6 millioner år siden. Disse enkle redskapene ble laget ved å slå steiner mot hverandre for å forme skarpe kanter som kunne brukes til å skjære kjøtt, knuse bein og bearbeide planter.

Over tid ble teknikkene mer avanserte:
- **Oldowan-verktøy** (2,6–1,7 millioner år siden): Enkle steinflak med skarp kant
- **Acheulean-verktøy** (1,7 millioner–100 000 år siden): Mer symmetriske håndøkser, tydelig planlagt design
- **Mellomsteinalderen** (100 000–10 000 år siden): Spesialiserte verktøy som pilspisser, skrapere og nåler laget av bein og horn

Overgangen fra tilfeldige steiner til bevisst formede redskaper viser utviklingen av **abstrakt tenkning** – evnen til å se for seg et ferdig verktøy i en rå steinblokk.`,
    },
    {
      id: 'tof1-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Ildens betydning',
      problem: 'Kontrollert bruk av ild regnes som en av menneskehetens viktigste tidlige teknologier. Hvilke fordeler ga kontrollert bruk av ild?',
      solution: `Kontrollert bruk av ild (fra ca. 400 000 år siden, muligens enda tidligere) ga en rekke avgjørende fordeler:

**Mat og ernæring:**
- Koking av mat gjorde den lettere å fordøye og drepte farlige bakterier
- Tilgang til flere matkilder (rotgrønnsaker, kjøtt fra større dyr)
- Bedre næringsopptak ga grunnlag for utvikling av større hjerner

**Beskyttelse:**
- Holdt rovdyr på avstand
- Ga varme i kalde klimaer, noe som muliggjorde bosetning i nye områder

**Sosial utvikling:**
- Samling rundt bålet styrket sosiale bånd
- Forlengning av den aktive dagen etter solnedgang
- Ga tid til samtale, historiefortelling og kulturell utvikling

Ild var dermed ikke bare et praktisk verktøy, men en katalysator for både biologisk og kulturell utvikling.`,
    },
    {
      id: 'tof1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de eldste kjente verktøyene laget av mennesker?',
        options: [
          { id: 'a', text: 'Bronseredskaper fra Mesopotamia', isCorrect: false },
          { id: 'b', text: 'Steinredskaper fra Øst-Afrika', isCorrect: true },
          { id: 'c', text: 'Jernvåpen fra Romerriket', isCorrect: false },
          { id: 'd', text: 'Trekonstruksjoner fra Kina', isCorrect: false },
        ],
        solution: 'Riktig svar er B. De eldste kjente verktøyene er steinredskaper funnet i Øst-Afrika, datert til rundt 2,6 millioner år siden. Bronse (A) ble ikke tatt i bruk før rundt 3300 f.Kr., jern (C) enda senere, og trekonstruksjoner (D) er betydelig yngre.',
      },
    },

    // --- BLOKK 2: Jordbruksrevolusjonen og hjulet ---
    {
      id: 'tof1-3-1-text-2',
      type: 'text',
      content: `### Jordbruksrevolusjonen

For rundt 10 000 år siden skjedde en av de mest omveltende endringene i menneskets historie: overgangen fra jeger- og samlersamfunn til **jordbruk**. Denne overgangen, ofte kalt den **neolittiske revolusjonen**, begynte i den fruktbare halvmåne i Midtøsten og spredte seg gradvis til andre deler av verden.

Jordbruket førte med seg:
- **Bofasthet:** Folk slo seg ned permanent og bygde landsbyer og byer
- **Matoverskudd:** Mer effektiv matproduksjon frigjorde arbeidskraft til andre oppgaver
- **Spesialisering:** Noen kunne bli håndverkere, prester, soldater eller administratorer
- **Befolkningsvekst:** Stabil mattilgang ga grunnlag for større samfunn

### Hjulet

**Hjulet** ble oppfunnet rundt 3500 f.Kr. i Mesopotamia (dagens Irak). Interessant nok ble det først brukt til **dreiing av keramikk** (pottemaker-hjulet), ikke til transport. Det tok noen hundre år før hjulet ble festet til akser og brukt på vogner.

Hjulet revolusjonerte samfunnet på flere måter:
- **Transport:** Tunge laster kunne flyttes over store avstander
- **Handel:** Lettere frakt stimulerte handel mellom regioner
- **Jordbruk:** Hjulbaserte redskaper effektiviserte arbeidet
- **Håndverk:** Pottemakerskiven muliggjorde masseproduksjon av keramikk`,
    },
    {
      id: 'tof1-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Hjulets spredning',
      problem: 'Hjulet ble oppfunnet i Mesopotamia, men ble aldri utviklet uavhengig av sivilisasjonene i Amerika (aztekere, inkaer, mayaer). Hva kan forklare dette?',
      solution: `Fraværet av hjulet i Amerika skyldes trolig flere samvirkende faktorer:

**Geografiske forhold:**
- Amerikas terreng med tett regnskog, bratte fjell og mangel på naturlige veier gjorde hjulbasert transport upraktisk mange steder
- I motsetning var Mesopotamia og Europa preget av flate sletter som egnet seg godt for hjulkjøretøy

**Mangel på trekkdyr:**
- Mesopotamia hadde okser, hester og esler som kunne trekke vogner
- Amerika manglet store tamme trekkdyr (lamaen var for liten til å trekke vogner)

**Alternative løsninger:**
- Inkaene utviklet et avansert veinett med bæring og lamakaravaner
- Aztekerne brukte kanoer og bæring av laster
- Mayaene hadde faktisk kjennskap til hjulprinsippet (funnet i leketøy), men tok det ikke i bruk i full skala

Dette eksemplet viser at teknologisk utvikling ikke er forutbestemt – den formes av **lokale behov, ressurser og forutsetninger**.`,
    },
    {
      id: 'tof1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva den neolittiske revolusjonen innebar, og beskriv minst tre konsekvenser overgangen til jordbruk hadde for menneskelige samfunn.',
        hints: ['Tenk på hva som endret seg da mennesker gikk fra å jakte og samle mat til å dyrke den selv. Hvordan påvirket dette bosettingsmønster, arbeidsdeling og befolkning?'],
        solution: 'Den neolittiske revolusjonen var overgangen fra jeger- og samlersamfunn til jordbrukssamfunn, som begynte for rundt 10 000 år siden i den fruktbare halvmåne.\n\nViktige konsekvenser:\n\n1. **Bofasthet:** Mennesker slo seg ned permanent i landsbyer og byer i stedet for å vandre som nomader. Dette la grunnlaget for sivilisasjoner.\n\n2. **Matoverskudd og spesialisering:** Effektiv matproduksjon frigjorde arbeidskraft, slik at noen kunne bli håndverkere, handelsmenn, prester eller administratorer i stedet for å bruke all tid på å skaffe mat.\n\n3. **Befolkningsvekst:** Stabil og forutsigbar mattilgang ga grunnlag for en mye raskere befolkningsvekst enn jeger-samlersamfunn kunne støtte.\n\n4. **Sosial lagdeling:** Med matoverskudd og spesialisering oppsto hierarkier og maktstrukturer – noen kontrollerte ressurser, andre arbeidet.\n\n5. **Teknologisk utvikling:** Behovet for å lagre, transportere og bearbeide jordbruksprodukter drev frem nye oppfinnelser som keramikk, plogen og irrigasjonssystemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 3: Skrift og metallurgi ---
    {
      id: 'tof1-3-1-text-3',
      type: 'text',
      content: `### Skriftens oppfinnelse

**Skriften** oppsto rundt 3200 f.Kr. i Mesopotamia, der sumererne utviklet **kileskrift** på leirtavler. Omtrent på samme tid utviklet egypterne sine **hieroglyfer**. Kinesisk skrift oppsto uavhengig rundt 1200 f.Kr.

Skriften ble opprinnelig utviklet av praktiske grunner:
- **Regnskap:** Holde oversikt over handelsvarer, skatter og lagerbeholdninger
- **Administrasjon:** Lover, kontrakter og offisielle dokumenter
- **Religion:** Nedtegning av ritualer, myter og religiøse tekster

Etter hvert ble skriften brukt til **litteratur, vitenskap og historieskriving**. Skriften var kanskje den viktigste enkeltoppfinnelsen i menneskehetens historie, fordi den muliggjorde overføring av kunnskap mellom generasjoner uten at noen måtte huske alt utenat.

### Metallurgi

**Metallurgi** – kunsten å utvinne og bearbeide metaller – utviklet seg gradvis:

| Periode | Metall | Teknologi |
|---------|--------|-----------|
| ca. 7000 f.Kr. | Kobber | Hamring av naturlig kobber |
| ca. 4000 f.Kr. | Kobber | Smelting av kobbermalm |
| ca. 3300 f.Kr. | Bronse | Legering av kobber og tinn |
| ca. 1200 f.Kr. | Jern | Smelting ved høyere temperaturer |

Overgangen fra **steinredskaper** til **metallredskaper** var revolusjonerende. Metall kunne støpes i former, skarpes, og gjenbrukes ved omsmelting. Bronsealderen og jernalderen er navngitt etter disse metallene nettopp fordi de var så viktige for samfunnsutviklingen.`,
    },
    {
      id: 'tof1-3-1-note-1',
      type: 'note',
      title: 'Teknologiske klynger',
      content: `Legg merke til at mange store oppfinnelser oppsto i **samme region og tidsperiode** – Mesopotamia rundt 3500–3000 f.Kr. ga oss hjulet, skriften, bronsen og de første byene. Dette er ikke tilfeldig: oppfinnelser bygger på hverandre. Skriften krevde jordbruk (matoverskudd og bofasthet), metallurgi krevde spesialisert håndverk (som jordbruket muliggjorde), og hjulet krevde metallverktøy for å lages presist. Denne sammenhengen mellom oppfinnelser kalles noen ganger en **teknologisk klynge**.`,
    },
    {
      id: 'tof1-3-1-example-3',
      type: 'example',
      title: 'Eksempel: Fra bronse til jern',
      problem: 'Jernalderen erstattet bronsealderen rundt 1200 f.Kr. Hva var fordelene med jern sammenlignet med bronse?',
      solution: `Overgangen fra bronse til jern hadde flere viktige grunner:

**Tilgjengelighet:**
- Jernmalm finnes over hele verden og er langt mer utbredt enn tinn (som trengs for å lage bronse)
- Bronse krevde handel med tinn, som bare fantes i noen få regioner

**Egenskaper:**
- Jern er hardere enn bronse når det bearbeides riktig (herdning og karbonisering)
- Jernredskaper beholder skarpheten lenger og tåler mer belastning

**Konsekvenser:**
- Billigere og mer tilgjengelige våpen og redskaper demokratiserte teknologien
- Jernplogen revolusjonerte jordbruket – den kunne bryte hardere jord enn bronseplogen
- Jernøkser muliggjorde rydding av tett skog for jordbruk

Overgangen til jern gjorde avansert teknologi tilgjengelig for flere mennesker, ikke bare eliten, og la grunnlaget for de store sivilisasjonenes ekspansjon.`,
    },
    {
      id: 'tof1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var den opprinnelige hovedgrunnen til at skriften ble utviklet?',
        options: [
          { id: 'a', text: 'Å skrive ned dikt og litteratur', isCorrect: false },
          { id: 'b', text: 'Å holde oversikt over handel, skatter og lagerbeholdninger', isCorrect: true },
          { id: 'c', text: 'Å kommunisere med fjerne sivilisasjoner', isCorrect: false },
          { id: 'd', text: 'Å undervise barn i skolen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. De tidligste skriftlige dokumentene er regnskap og administrative oversikter fra Mesopotamia – lister over handelsvarer, skatter og lagerbeholdninger. Litteratur (A) kom først senere. Fjernkommunikasjon (C) og skoleundervisning (D) var ikke de opprinnelige bruksområdene.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Steinverktøy** er de eldste kjente teknologiene, datert til 2,6 millioner år siden i Øst-Afrika.
- **Jordbruksrevolusjonen** (ca. 10 000 år siden) var overgangen fra jeger-samlersamfunn til bofaste jordbrukssamfunn, og la grunnlaget for sivilisasjoner.
- **Hjulet** (ca. 3500 f.Kr.) ble først brukt til keramikk, deretter til transport, og revolusjonerte handel og jordbruk.
- **Skriften** (ca. 3200 f.Kr.) oppsto for å holde regnskap, men muliggjorde overføring av kunnskap mellom generasjoner.
- **Metallurgi** utviklet seg fra kobber via bronse til jern, og hver overgang ga sterkere, billigere og mer tilgjengelige redskaper.
- Teknologiske oppfinnelser bygger på hverandre – de oppstår i **klynger** der forutsetningene er til stede.`,
    },

    // --- Samleoppgave ---
    {
      id: 'tof1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to av de tidlige oppfinnelsene vi har gjennomgått (hjulet, skriften, metallurgi eller jordbruket) og drøft hvordan de henger sammen. Forklar hvorfor den ene oppfinnelsen var avhengig av eller forsterket den andre, og diskuter hva dette forteller oss om hvordan teknologisk utvikling skjer.',
        hints: ['Tenk på begrepet «teknologisk klynge». Hvordan ga jordbruket forutsetninger for andre oppfinnelser? Krevde metallurgi spesialisert arbeidskraft som bare bofaste samfunn kunne støtte?'],
        solution: 'Eksempel på et godt svar (jordbruk og metallurgi):\n\nJordbruk og metallurgi henger tett sammen. Jordbruket skapte matoverskudd og bofaste samfunn, noe som frigjorde arbeidskraft til spesialisering. Uten dette overskuddet ville ingen kunnet bruke tid på å eksperimentere med smelting av malm – et tidkrevende og krevende arbeid.\n\nMetallurgien ga til gjengjeld bedre jordbruksredskaper. Bronseplogen og senere jernplogen var langt mer effektive enn steinredskaper, og muliggjorde dyrking av hardere jord og større arealer. Dette ga enda mer matoverskudd, som igjen muliggjorde større byer og mer spesialisering.\n\nDette viser at teknologisk utvikling sjelden skjer isolert. Oppfinnelser bygger på hverandre i en positiv spiral der én innovasjon skaper forutsetningene for den neste. Det er derfor store gjennombrudd ofte kommer i klynger – i regioner der mange forutsetninger er på plass samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Den industrielle revolusjon
// ============================================================================

export const CHAPTER_TOF_1_3_2: TextbookChapter = {
  id: 'tof-1-3-2',
  courseId: 'tof-1',
  chapterNumber: '3.2',
  title: 'Den industrielle revolusjon',
  description: 'Dampmaskinen, fabrikkene og samfunnsendringene.',
  estimatedMinutes: 30,
  competenceGoals: ['beskrive industrialiseringens betydning'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-2-intro',
      type: 'text',
      content: `## Den industrielle revolusjon

Den industrielle revolusjonen, som begynte i England på slutten av 1700-tallet, er kanskje den mest gjennomgripende endringen i menneskets historie siden jordbruksrevolusjonen. På bare noen få generasjoner ble samfunnet forvandlet fra et jordbrukssamfunn til et industrisamfunn, med enorme konsekvenser for økonomi, sosiale forhold, miljø og dagligliv.

I dette kapittelet skal vi se på hva som utløste den industrielle revolusjonen, hvilke teknologiske nyvinninger som drev den fremover, og hvordan den endret samfunnet fundamentalt.`,
    },

    // --- BLOKK 1: Forutsetninger og dampmaskin ---
    {
      id: 'tof1-3-2-text-1',
      type: 'text',
      content: `### Forutsetninger for den industrielle revolusjonen

Hvorfor begynte den industrielle revolusjonen i **England** på **1700-tallet**? Flere faktorer spilte sammen:

**Naturressurser:**
- Rike forekomster av **kull** og **jernmalm** ga råstoffene som trengtes
- Mange elver ga vannkraft til de første fabrikkene

**Økonomiske forutsetninger:**
- Et voksende **kolonivelde** ga tilgang til råvarer og markeder
- Et relativt stabilt politisk system beskyttet eiendomsrett og investeringer
- Et utviklet bankvesen ga tilgang til kapital for investeringer

**Sosiale forutsetninger:**
- **Jordbruksrevolusjonen** på 1600–1700-tallet (nye dyrkningsmetoder, vekselbruk) økte matproduksjonen
- Befolkningsvekst skapte et overskudd av arbeidskraft
- **Innhegningene** (enclosures) tvang småbønder fra jorda og inn til byene

**Kulturelle forutsetninger:**
- En sterk tradisjon for **praktisk vitenskap** og oppfinnsomhet
- Kulturell åpenhet for entreprenørskap og nye ideer`,
    },
    {
      id: 'tof1-3-2-def-1',
      type: 'definition',
      title: 'Dampmaskinen',
      content: `**Dampmaskinen** er en maskin som omdanner varmeenergi fra damp til mekanisk arbeid. Vann varmes opp til damp, som utvider seg og driver et stempel eller en turbin.

De viktigste utviklingstrinnene:
- **Thomas Newcomen** (1712): Den første praktisk brukbare dampmaskinen, brukt til å pumpe vann ut av gruver
- **James Watt** (1769): Forbedret Newcomens maskin dramatisk med en separat kondensator, noe som reduserte energitapet kraftig
- **Watts videre forbedringer** (1780-årene): Dobbelvirkende sylinder og omdanning til roterende bevegelse, noe som gjorde dampmaskinen brukbar i fabrikker

Dampmaskinen var den industrielle revolusjonens **nøkkelteknologi** – den frigjorde produksjonen fra avhengigheten av vannkraft og muskelkraft.`,
    },
    {
      id: 'tof1-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Dampmaskinens påvirkning på tekstilindustrien',
      problem: 'Tekstilindustrien var den første industrien som ble mekanisert under den industrielle revolusjonen. Beskriv hvordan dampmaskinen forandret tekstilproduksjonen.',
      solution: `**Før dampmaskinen:**
- Garn ble spunnet for hånd med rokk – en arbeider kunne betjene én tråd om gangen
- Vev ble operert manuelt i hjemmene (hjemmeindustri/forlagssystem)
- Produksjonen var begrenset av menneskelig arbeidskraft og vannkraft

**Etter dampmaskinen:**
- **Spinning jenny** (1764) og **water frame** (1769) mekaniserte spinningen
- **Power loom** (kraftveven, 1785) mekaniserte vevingen
- Dampmaskin-drevne maskiner ble samlet i **fabrikker** i stedet for spredt i hjemmene
- En enkelt fabrikk kunne produsere like mye som hundrevis av håndarbeidere

**Konsekvensen:**
- Prisen på tekstiler falt dramatisk, og klær ble tilgjengelig for alle samfunnslag
- Tusenvis av arbeidere strømmet til fabrikkbyene Manchester og Birmingham
- Hjemmeindustrien kollapset – håndverkere mistet levebrødet sitt
- Nye sosiale klasser oppsto: industrieiere (kapitalister) og fabrikkarbeidere (proletariatet)`,
    },
    {
      id: 'tof1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem forbedret dampmaskinen med en separat kondensator, noe som gjorde den langt mer effektiv?',
        options: [
          { id: 'a', text: 'Thomas Edison', isCorrect: false },
          { id: 'b', text: 'Thomas Newcomen', isCorrect: false },
          { id: 'c', text: 'James Watt', isCorrect: true },
          { id: 'd', text: 'George Stephenson', isCorrect: false },
        ],
        solution: 'Riktig svar er C. James Watt forbedret dampmaskinen med en separat kondensator i 1769, noe som dramatisk reduserte energitapet. Newcomen (B) bygde den første praktisk brukbare dampmaskinen i 1712, men den var svært ineffektiv. Edison (A) er kjent for lyspæren, og Stephenson (D) for damplokomotivet.',
      },
    },

    // --- BLOKK 2: Fabrikksystemet og jernbanen ---
    {
      id: 'tof1-3-2-text-2',
      type: 'text',
      content: `### Fabrikksystemet

Den industrielle revolusjonen innførte et helt nytt **produksjonssystem**. I stedet for at varer ble laget i hjemmene av håndverkere, ble produksjonen samlet i **fabrikker** med dampmaskin-drevne maskiner.

Kjennetegn ved fabrikksystemet:
- **Sentralisert produksjon:** Arbeiderne kom til fabrikken i stedet for å jobbe hjemme
- **Arbeidsdeling:** Hver arbeider utførte en liten del av produksjonsprosessen, igjen og igjen
- **Maskinell drift:** Maskiner tok over tunge og repetitive oppgaver
- **Tidsdisiplin:** Klokken og fabrikksirenen styrte arbeidsdagen, ikke naturen og årstidene
- **Lønn:** Arbeiderne fikk betalt i penger i stedet for å leve av egen produksjon

### Jernbanen

Utviklingen av **damplokomotivet** og **jernbanen** var en direkte konsekvens av dampmaskinen. George Stephenson bygde det første pålitelige damplokomotivet «Locomotion No. 1» i 1825, og i 1830 åpnet den første passasjerjernbanen mellom Liverpool og Manchester.

Jernbanens virkninger:
- **Raskere transport:** Reiser som tidligere tok dager, tok nå timer
- **Billigere frakt:** Råvarer og ferdigvarer kunne transporteres effektivt
- **Nye markeder:** Fabrikkvarer kunne selges over hele landet
- **Urbanisering:** Jernbanen knyttet byer sammen og stimulerte byvekst
- **Tidssoner:** Behovet for felles togtider førte til innføring av standardisert tid`,
    },
    {
      id: 'tof1-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Jernbanens betydning for Norge',
      problem: 'Den første jernbanen i Norge, Hovedbanen mellom Oslo og Eidsvoll, åpnet i 1854. Hvordan påvirket jernbanen det norske samfunnet?',
      solution: `Jernbanen hadde enorm betydning for Norge:

**Økonomisk:**
- Trelast og andre naturressurser kunne fraktes billig og raskt fra innlandet til havner
- Nye industrier vokste frem langs jernbanelinjene
- Bønder fikk tilgang til større markeder for produktene sine

**Geografisk:**
- Norge er et langstrakt land med vanskelig terreng – jernbanen overvant fjell og daler
- Reisen fra Oslo til Eidsvoll, som tidligere tok en hel dag, tok nå under to timer
- Bergensbanen (ferdig 1909) bandt Østlandet og Vestlandet sammen for første gang

**Sosialt:**
- Mennesker kunne reise enklere, noe som brøt ned lokale forskjeller
- Byene vokste raskere fordi arbeidere lettere kunne pendle
- Informasjon og ideer spredte seg hurtigere

Jernbanen var en forutsetning for Norges moderne industrialisering og nasjonsbygging.`,
    },
    {
      id: 'tof1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende var IKKE et kjennetegn ved fabrikksystemet under den industrielle revolusjonen?',
        options: [
          { id: 'a', text: 'Arbeiderne spesialiserte seg på én del av produksjonen', isCorrect: false },
          { id: 'b', text: 'Produksjonen foregikk i sentraliserte bygninger med maskiner', isCorrect: false },
          { id: 'c', text: 'Arbeiderne bestemte selv når de ville komme og gå', isCorrect: true },
          { id: 'd', text: 'Arbeiderne fikk lønn i stedet for å leve av egen produksjon', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Fabrikksystemet innførte streng tidsdisiplin – arbeiderne måtte følge faste arbeidstider styrt av klokken og fabrikksirenen. De tre andre alternativene (arbeidsdeling, sentralisert produksjon og lønnsarbeid) er alle korrekte kjennetegn ved fabrikksystemet.',
      },
    },

    // --- BLOKK 3: Samfunnsendringer ---
    {
      id: 'tof1-3-2-text-3',
      type: 'text',
      content: `### Samfunnsendringene

Den industrielle revolusjonen endret ikke bare produksjonsmetodene – den forvandlet hele samfunnet.

**Urbanisering:**
I 1800 bodde rundt 20 % av Englands befolkning i byer. I 1900 var tallet over 75 %. Menneskene strømmet til industribyene i søk etter arbeid, og byene vokste eksplosivt. Denne raske veksten skapte enorme utfordringer: overfylte boliger, dårlig sanitær, forurensning og smittespredning.

**Arbeidernes kår:**
De tidlige fabrikkene var preget av elendige arbeidsforhold:
- Arbeidsdager på **14–16 timer**, seks dager i uken
- **Barnearbeid** var utbredt – barn ned i 5–6-årsalderen jobbet i gruver og fabrikker
- Farlige maskiner uten sikkerhetsutstyr førte til hyppige ulykker
- Lav lønn og ingen rettigheter – arbeidere som klaget ble sparket

**Sosiale reformer:**
Etter hvert vokste det frem motstand:
- **Fagforeninger** ble dannet for å kjempe for bedre lønn og arbeidsforhold
- **Factory Acts** i England begrenset barnearbeid og arbeidstid
- **Arbeiderbevegelsen** ble en politisk kraft som krevde demokrati og rettferdighet
- Karl Marx og Friedrich Engels analyserte kapitalismens motsetninger og inspirerte sosialistiske bevegelser

**Miljøkonsekvenser:**
- Massiv forbrenning av kull forurenset luft og vann
- Avskoging for å skaffe brensel og byggematerialer
- De første tegnene på menneskeskapt klimapåvirkning begynte i denne perioden`,
    },
    {
      id: 'tof1-3-2-tip-1',
      type: 'tip',
      title: 'Å se sammenhenger',
      content: `Den industrielle revolusjonen viser hvordan **teknologisk endring og samfunnsendring henger uløselig sammen**. Ny teknologi (dampmaskinen) skapte et nytt produksjonssystem (fabrikken), som endret bosettingsmønsteret (urbanisering), som skapte nye sosiale problemer (dårlige arbeidsforhold), som førte til politiske bevegelser (arbeiderbevegelsen), som ga nye lover og rettigheter (Factory Acts). Å forstå disse sammenhengene er sentralt i teknologi og forskningslære.`,
    },
    {
      id: 'tof1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv minst tre negative konsekvenser av den industrielle revolusjonen for vanlige arbeidere og deres familier. Forklar hvordan samfunnet etter hvert reagerte på disse problemene.',
        hints: ['Tenk på arbeidstider, barnearbeid, boforhold og helse. Hvordan reagerte arbeiderne selv, og hvilke politiske endringer kom etter hvert?'],
        solution: 'Negative konsekvenser for arbeiderne:\n\n1. **Lange arbeidsdager:** Arbeidere jobbet 14–16 timer daglig, seks dager i uken, under fysisk krevende og ensformige forhold. Dette førte til utmattelse, sykdom og tidlig død.\n\n2. **Barnearbeid:** Barn helt ned i 5–6-årsalderen ble brukt som billig arbeidskraft i fabrikker og gruver. De ble utsatt for farlige maskiner, giftig luft og fikk ingen utdanning.\n\n3. **Elendige boforhold:** Rask urbanisering førte til overfylte, usanitære boliger uten rent vann eller kloakk. Sykdommer som kolera og tuberkulose spredte seg raskt.\n\n4. **Farlige arbeidsforhold:** Maskiner uten sikkerhetsutstyr førte til hyppige ulykker, og arbeidere som ble skadet eller syke ble ofte erstattet uten kompensasjon.\n\nSamfunnets reaksjoner:\n- Arbeidere organiserte seg i **fagforeninger** for å forhandle kollektivt om bedre vilkår\n- Regjeringen vedtok **Factory Acts** som begrenset barnearbeid og arbeidstid\n- **Arbeiderbevegelsen** vokste frem som en politisk kraft\n- Helsereformer forbedret sanitærforhold i byene',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den industrielle revolusjonen begynte i **England på slutten av 1700-tallet** på grunn av naturressurser, økonomiske forutsetninger, befolkningsoverskudd og en tradisjon for oppfinnsomhet.
- **Dampmaskinen** (Newcomen 1712, forbedret av Watt 1769) var nøkkelteknologien som frigjorde produksjonen fra muskelkraft og vannkraft.
- **Fabrikksystemet** erstattet hjemmeindustrien med sentralisert, maskinell produksjon med arbeidsdeling og tidsdisiplin.
- **Jernbanen** (fra 1825) revolusjonerte transport, handel og kommunikasjon.
- Industrialiseringen førte til **urbanisering**, men også elendige arbeidsforhold, barnearbeid og forurensning.
- Reaksjonen kom i form av **fagforeninger, lovgivning og arbeiderbevegelsen**, som la grunnlaget for moderne arbeidsrettigheter.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var det første bruksområdet for dampmaskinen?',
        options: [
          { id: 'a', text: 'Å drive tekstilfabrikker', isCorrect: false },
          { id: 'b', text: 'Å pumpe vann ut av gruver', isCorrect: true },
          { id: 'c', text: 'Å drive damplokomotiver', isCorrect: false },
          { id: 'd', text: 'Å produsere elektrisitet', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Thomas Newcomens dampmaskin fra 1712 ble utviklet spesifikt for å pumpe vann ut av kullgruver. Det tok flere tiår med forbedringer (særlig av James Watt) før dampmaskinen ble allsidig nok til å brukes i fabrikker (A) og på jernbaner (C). Elektrisitetsproduksjon (D) kom mye senere.',
      },
    },
    {
      id: 'tof1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign den industrielle revolusjonen med den neolittiske revolusjonen (jordbruksrevolusjonen) fra kapittel 3.1. Diskuter likheter og forskjeller i:\n\na) Hva som utløste endringen\nb) Hvilke teknologier som var sentrale\nc) Hvordan samfunnet ble endret\n\nDrøft til slutt hvilken av de to revolusjonene du mener hadde størst betydning for menneskehetens utvikling, og begrunn svaret ditt.',
        hints: ['Begge revolusjonene endret hvordan mennesker produserte mat og varer, bosatte seg og organiserte samfunnet. Men skalaen, hastigheten og drivkreftene var ulike.'],
        solution: 'Et godt svar kan inneholde:\n\n**Likheter:**\n- Begge endret fundamentalt hvordan mennesker skaffer seg livsgrunnlaget\n- Begge førte til urbanisering (landsbyer/byer)\n- Begge skapte nye sosiale strukturer og spesialisering\n- Begge var drevet av teknologiske innovasjoner\n\n**Forskjeller:**\na) Utløsende faktorer: Jordbruksrevolusjonen ble trolig utløst av klimaendringer og befolkningspress over tusenvis av år. Den industrielle revolusjonen ble utløst av en kombinasjon av vitenskapelige oppdagelser, tilgang til ressurser og økonomiske incentiver over noen få generasjoner.\n\nb) Sentrale teknologier: Jordbruk – plogen, irrigasjon, temming av dyr. Industriell – dampmaskinen, mekaniske vever, jernbanen.\n\nc) Samfunnsendringer: Jordbruksrevolusjonen skapte de første permanente bosetningene og sivilisasjonene. Den industrielle revolusjonen omdannet eksisterende samfunn fra jordbruk til industri, med raskere og mer dramatiske endringer.\n\n**Drøfting:** Begge har sterke argumenter. Jordbruksrevolusjonen la grunnlaget for all sivilisasjon – uten den ville den industrielle revolusjonen aldri skjedd. Men den industrielle revolusjonen endret verden i et tempo og omfang som er uten sidestykke, og dens konsekvenser (urbanisering, globalisering, klimaendringer) preger verden i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Elektrisitet og masseproduksjon
// ============================================================================

export const CHAPTER_TOF_1_3_3: TextbookChapter = {
  id: 'tof-1-3-3',
  courseId: 'tof-1',
  chapterNumber: '3.3',
  title: 'Elektrisitet og masseproduksjon',
  description: 'Den andre industrielle revolusjon, elektrifisering og samlebånd.',
  estimatedMinutes: 25,
  competenceGoals: ['beskrive elektrisitetens betydning for samfunnet'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-3-intro',
      type: 'text',
      content: `## Elektrisitet og masseproduksjon

Mens den første industrielle revolusjonen ble drevet av dampmaskinen og kull, innledet perioden fra rundt **1870 til 1914** det som ofte kalles den **andre industrielle revolusjon**. Denne perioden var preget av to transformerende krefter: **elektrisiteten** og **masseproduksjonen**.

Disse innovasjonene endret ikke bare industrien – de forandret selve hverdagslivet. Elektrisk lys, telefon, grammofon og etter hvert radio, kjøleskap og støvsuger transformerte hjemmene. Samlebåndet gjorde produkter billige nok til at vanlige mennesker kunne kjøpe dem. I dette kapittelet skal vi se på hvordan disse endringene skjedde og hva de betydde for samfunnet.`,
    },

    // --- BLOKK 1: Elektrisitetens gjennombrudd ---
    {
      id: 'tof1-3-3-def-1',
      type: 'definition',
      title: 'Den andre industrielle revolusjon',
      content: `**Den andre industrielle revolusjon** (ca. 1870–1914) var en periode med rask teknologisk utvikling drevet av elektrisitet, forbrenningsmotoren, kjemisk industri og nye produksjonsmetoder.

Mens den første industrielle revolusjonen var basert på **damp og kull**, var den andre basert på **elektrisitet, olje og stål**. Den flyttet det teknologiske tyngdepunktet fra England til **USA og Tyskland**.`,
    },
    {
      id: 'tof1-3-3-text-1',
      type: 'text',
      content: `### Elektrisitetens utvikling

Forståelsen av elektrisitet utviklet seg gjennom en rekke viktige oppdagelser og oppfinnelser:

**Vitenskapelig grunnlag:**
- **Michael Faraday** (1831) oppdaget elektromagnetisk induksjon – at en bevegelig magnet kan skape elektrisk strøm. Dette la grunnlaget for alle generatorer og kraftverk.
- **James Clerk Maxwell** (1860-årene) formulerte de matematiske lovene for elektromagnetisme, som forente elektrisitet, magnetisme og lys i én teori.

**Praktisk utnyttelse:**
- **Thomas Edison** (1879) utviklet en praktisk brukbar glødelampe og bygde det første elektriske kraftverket i New York (1882)
- **Nikola Tesla** og **George Westinghouse** utviklet vekselstrømsystemet (AC), som gjorde det mulig å overføre strøm over lange avstander
- Edisons likestrøm (DC) vs. Teslas vekselstrøm (AC) – den såkalte **strømkrigen** – ble vunnet av vekselstrøm, som er standarden i dag

### Elektrifiseringens konsekvenser

Elektrisiteten forandret samfunnet fundamentalt:
- **Fabrikker** kunne bruke **elektriske motorer** i stedet for dampmaskin og reimdrift – dette ga mer fleksibel plassering av maskiner
- **Belysning** forlenget arbeidsdagen og forandret byenes karakter – gatebelysning gjorde byene tryggere
- **Kommunikasjon:** Telegrafen (1830-tallet), telefonen (1876) og radioen (1895) revolusjonerte informasjonsutveksling
- **Hjemmet:** Elektriske apparater som lyspærer, strykejern, støvsugere og kjøleskap forandret hverdagslivet`,
    },
    {
      id: 'tof1-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Norges elektrifisering',
      problem: 'Norge ble ett av de første landene i verden som tok i bruk vannkraft til elektrisitetsproduksjon. Hvorfor var Norge spesielt godt egnet for dette, og hva betydde det for norsk industri?',
      solution: `**Hvorfor Norge var godt egnet:**
- Norge har enorme mengder **fossefall og elver** med stor fallhøyde
- Landet har rikelig med nedbør som gir jevn vanntilførsel
- Det kuperte terrenget skaper naturlige reservoarer

**Betydningen for norsk industri:**
- Billig vannkraft tiltrakk seg **kraftkrevende industri**: aluminiumsverk, gjødselproduksjon og treforedling
- **Norsk Hydro** (grunnlagt 1905) utnyttet Rjukanfossen til å produsere kunstgjødsel – en revolusjon for jordbruket
- Elektrifiseringen ga Norge et **konkurransefortrinn** – mens andre land var avhengige av kull, hadde Norge ren og billig energi
- I dag kommer over 90 % av Norges elektrisitet fra vannkraft

**Samfunnsmessig:**
- Elektrisiteten nådde norske byer rundt 1900 og spredte seg gradvis til bygdene
- Elektrisk lys, radioer og etter hvert elektriske husholdningsapparater forandret hverdagslivet
- Industrialiseringen basert på vannkraft la grunnlaget for norsk velstand i det 20. århundret`,
    },
    {
      id: 'tof1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem oppdaget elektromagnetisk induksjon, som la grunnlaget for alle elektriske generatorer?',
        options: [
          { id: 'a', text: 'Thomas Edison', isCorrect: false },
          { id: 'b', text: 'Nikola Tesla', isCorrect: false },
          { id: 'c', text: 'Michael Faraday', isCorrect: true },
          { id: 'd', text: 'James Clerk Maxwell', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Michael Faraday oppdaget elektromagnetisk induksjon i 1831 – prinsippet om at en bevegelig magnet kan skape elektrisk strøm. Edison (A) er kjent for glødelampen og kraftverk, Tesla (B) for vekselstrømsystemet, og Maxwell (D) for den matematiske teorien om elektromagnetisme.',
      },
    },

    // --- BLOKK 2: Masseproduksjon og samlebåndet ---
    {
      id: 'tof1-3-3-text-2',
      type: 'text',
      content: `### Masseproduksjon og samlebåndet

Den andre store innovasjonen i denne perioden var utviklingen av **masseproduksjon** – produksjon av store mengder standardiserte varer med effektive metoder.

**Utskiftbare deler:**
Ideen om **utskiftbare deler** ble utviklet allerede på slutten av 1700-tallet. I stedet for at en våpensmed laget hvert gevær for hånd (der delene bare passet til det ene geværet), ble delene standardisert slik at en del fra ett gevær passet i et annet. Dette var revolusjonerende for reparasjon og produksjon.

**Henry Ford og samlebåndet:**
I 1913 innførte **Henry Ford** det **bevegelige samlebåndet** i produksjonen av Model T-bilen. I stedet for at en arbeider bygde en hel bil, sto arbeiderne stille mens bilens chassis beveget seg langs et transportbånd. Hver arbeider utførte bare én spesifikk oppgave – for eksempel å montere et hjul eller feste en dør.

Resultatene var dramatiske:
- Monteringstiden for en Model T falt fra **12 timer til 93 minutter**
- Prisen falt fra **$850 til $260** – noe en fabrikkarbeider kunne ha råd til
- Produksjonen økte fra noen tusen til **over en million biler per år**

Ford innførte også en daglønn på **$5** – dobbelt så mye som normalt – for å tiltrekke og beholde arbeidere. Høyere lønn betydde at arbeiderne selv kunne kjøpe bilene de lagde, noe som skapte et **masseforbrukersamfunn**.`,
    },
    {
      id: 'tof1-3-3-note-1',
      type: 'note',
      title: 'Fordisme',
      content: `Kombinasjonen av samlebåndsproduksjon, standardiserte produkter og høye lønninger som muliggjorde massekonsum, kalles **fordisme**. Det ble den dominerende produksjonsmodellen i den vestlige verden fra 1920-årene til 1970-årene, og la grunnlaget for den moderne forbrukerkulturen.`,
    },
    {
      id: 'tof1-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Samlebåndets påvirkning på arbeidet',
      problem: 'Samlebåndet økte produktiviteten enormt, men det endret også arbeidernes opplevelse av arbeidet. Beskriv fordeler og ulemper ved samlebåndsproduksjon sett fra arbeidernes perspektiv.',
      solution: `**Fordeler for arbeiderne:**
- **Høyere lønn:** Ford-arbeidere tjente $5 per dag – dobbelt så mye som vanlig
- **Enklere opplæring:** Hver oppgave var så enkel at den kunne læres raskt
- **Forutsigbarhet:** Fast arbeidstid, fast lønn, kjente oppgaver
- **Kjøpekraft:** Arbeiderne kunne selv kjøpe produktene de lagde

**Ulemper for arbeiderne:**
- **Monotoni:** Å gjøre samme lille bevegelse hundrevis av ganger om dagen var mentalt utmattende
- **Tap av håndverksstolthet:** Arbeiderne så aldri det ferdige produktet – de var «tannhjul i maskineriet»
- **Fysisk belastning:** Repetitive bevegelser førte til belastningsskader
- **Tempo:** Samlebåndet bestemte hastigheten – arbeiderne kunne ikke ta pauser
- **Fremmedgjøring:** Karl Marx' begrep «alienation» (fremmedgjøring) beskriver følelsen av å miste forbindelsen til arbeidet sitt

Charlie Chaplin illustrerte dette briljant i filmen *Modern Times* (1936), der hans karakter bokstavelig talt blir slukt av maskinene i fabrikken.`,
    },
    {
      id: 'tof1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «fordisme» og beskriv hvordan samlebåndsproduksjon og høye lønninger sammen skapte et masseforbrukersamfunn.',
        hints: ['Tenk på sammenhengen mellom produksjon og forbruk. Hva skjer når varer blir billige nok til at vanlige arbeidere kan kjøpe dem? Og hva skjer når arbeiderne tjener nok til å bli kunder?'],
        solution: 'Fordisme er et begrep som beskriver kombinasjonen av samlebåndsproduksjon, standardiserte produkter og høye lønninger som muliggjør masseforbruk. Begrepet er oppkalt etter Henry Ford.\n\nSammenhengen mellom produksjon og forbruk:\n\n1. **Samlebåndet** reduserte produksjonskostnadene dramatisk – en Ford Model T falt i pris fra $850 til $260.\n\n2. **Høye lønninger** ($5/dag, dobbelt av det normale) ga arbeiderne kjøpekraft til å kjøpe produktene selv.\n\n3. **Billige masseproduserte varer + arbeidere med kjøpekraft = masseforbrukersamfunn.** Arbeiderne ble ikke bare produsenter, men også kunder.\n\n4. Økt etterspørsel førte til økt produksjon, som ga flere arbeidsplasser og enda høyere forbruk – en selvforsterkende spiral.\n\nDette skapte en ny økonomisk modell der vekst var drevet av innenlandsk forbruk, ikke bare eksport. Reklame, avbetaling og forbrukslån ble viktige deler av dette systemet. Fordismen dominerte vestlige økonomier fra 1920-årene til 1970-årene og la grunnlaget for dagens forbrukerkultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den **andre industrielle revolusjon** (ca. 1870–1914) var drevet av elektrisitet, forbrenningsmotoren og nye produksjonsmetoder.
- **Faradays oppdagelse** av elektromagnetisk induksjon (1831) la det vitenskapelige grunnlaget for generatorer og kraftverk.
- **Strømkrigen** mellom Edisons likestrøm og Teslas vekselstrøm ble vunnet av vekselstrøm, som muliggjorde overføring over lange avstander.
- **Norges vannkraft** ga landet et konkurransefortrinn og la grunnlaget for kraftkrevende industri.
- **Samlebåndet** (Ford, 1913) reduserte monteringstiden for en bil fra 12 timer til 93 minutter og kuttet prisen dramatisk.
- **Fordisme** – samlebånd + høye lønninger – skapte masseforbruk og la grunnlaget for den moderne forbrukerkulturen.
- Samlebåndsarbeid hadde også **negative sider**: monotoni, fremmedgjøring og fysisk belastning.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var hovedfordelen med vekselstrøm (AC) sammenlignet med likestrøm (DC)?',
        options: [
          { id: 'a', text: 'Vekselstrøm var billigere å produsere', isCorrect: false },
          { id: 'b', text: 'Vekselstrøm kunne overføres over lange avstander med lite tap', isCorrect: true },
          { id: 'c', text: 'Vekselstrøm var tryggere for mennesker', isCorrect: false },
          { id: 'd', text: 'Vekselstrøm ble oppfunnet av Edison, som var mer kjent', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Vekselstrøm kan enkelt transformeres til høy spenning for langdistanseoverføring (der det er lite energitap) og tilbake til lav spenning for bruk. Likestrøm mister mye energi over lange avstander. Edison (D) utviklet likestrøm, ikke vekselstrøm – det var Tesla og Westinghouse som utviklet AC-systemet.',
      },
    },
    {
      id: 'tof1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Den andre industrielle revolusjon innførte elektrisitet i hverdagslivet. Velg tre elektriske oppfinnelser fra denne perioden (for eksempel lyspæren, telefonen, radioen, kjøleskapet eller støvsugeren) og drøft hvordan de forandret dagliglivet for vanlige mennesker. Reflekter over om endringene var utelukkende positive, eller om de også hadde negative sider.',
        hints: ['Tenk på hvordan hverdagen var uten disse oppfinnelsene, og hva som endret seg. Vurder også om teknologien skapte nye problemer, endret sosiale mønstre eller skapte nye ulikheter.'],
        solution: 'Eksempel på et godt svar (lyspæren, telefonen og kjøleskapet):\n\n**Lyspæren:**\n- Forlenget dagen – folk kunne lese, arbeide og sosialisere etter mørkets frembrudd\n- Gjorde gatebelysning mulig, noe som økte tryggheten i byene\n- Mulig negativ side: Forstyrret den naturlige søvnrytmen, la til rette for lengre arbeidsdager\n\n**Telefonen:**\n- Revolusjonerte kommunikasjon – samtaler som tidligere krevde brev eller reiser kunne nå skje umiddelbart\n- Viktig for forretningslivet og effektiviserte handel og administrasjon\n- Reduserte isolasjon, særlig for folk i grisgrendte strøk\n- Mulig negativ side: Skapte forventning om umiddelbar tilgjengelighet, begynte å viske ut grensen mellom arbeid og privatliv\n\n**Kjøleskapet:**\n- Forandret matoppbevaring fundamentalt – mat holdt seg lengre og var tryggere å spise\n- Reduserte behovet for daglig handling og konservering\n- Muliggjorde distribusjon av ferskvarer over lengre avstander\n- Mulig negativ side: Tidlige kjølemedier (freon) var miljøskadelige, økt matforbruk og matsvinn\n\nSamlet sett var endringene overveiende positive for livskvaliteten, men de illustrerer at teknologisk fremgang sjelden er uten bivirkninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Dataalderen og internett
// ============================================================================

export const CHAPTER_TOF_1_3_4: TextbookChapter = {
  id: 'tof-1-3-4',
  courseId: 'tof-1',
  chapterNumber: '3.4',
  title: 'Dataalderen og internett',
  description: 'Datamaskinen, internett og den digitale revolusjon.',
  estimatedMinutes: 30,
  competenceGoals: ['gjøre rede for den digitale revolusjonen'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-4-intro',
      type: 'text',
      content: `## Dataalderen og internett

Den **digitale revolusjonen** – overgangen fra analog til digital teknologi – regnes av mange som den tredje industrielle revolusjonen. Mens den første revolusjonen ble drevet av dampmaskinen og den andre av elektrisiteten, er den tredje drevet av **datamaskinen og internett**.

Denne revolusjonen har forandret verden raskere og mer gjennomgripende enn noen tidligere teknologisk endring. I løpet av noen få tiår har vi gått fra enorme datarom som fyller hele bygninger til å ha kraftigere datamaskiner i lommene våre. I dette kapittelet skal vi følge denne utviklingen og forstå dens konsekvenser for samfunnet.`,
    },

    // --- BLOKK 1: Datamaskinens utvikling ---
    {
      id: 'tof1-3-4-text-1',
      type: 'text',
      content: `### Datamaskinens utvikling

Utviklingen av datamaskinen gikk gjennom flere distinkte faser:

**Mekaniske forløpere:**
- **Charles Babbage** (1830-årene) designet den analytiske maskinen – en mekanisk datamaskin som aldri ble fullført, men som inneholdt alle prinsippene for en moderne datamaskin
- **Ada Lovelace** skrev det som regnes som det første dataprogrammet – instruksjoner for Babbages maskin

**Første generasjon – vakuumrør (1940–1956):**
- **Colossus** (1943, Storbritannia) ble brukt til å knekke tyske koder under 2. verdenskrig
- **ENIAC** (1945, USA) var en av de første generelle elektroniske datamaskinene – den veide 30 tonn og fylte et helt rom
- Maskinene var enorme, upålitelige og brukte enorme mengder strøm

**Andre generasjon – transistorer (1956–1963):**
- Transistoren erstattet vakuumrøret – mye mindre, raskere og mer pålitelig
- Datamaskinene ble mindre og billigere, men fortsatt kun for bedrifter og institusjoner

**Tredje generasjon – integrerte kretser (1963–1971):**
- Tusenvis av transistorer på én brikke (chip)
- Ytterligere reduksjon i størrelse og kostnad

**Fjerde generasjon – mikroprosessorer (1971–i dag):**
- **Intel 4004** (1971) var den første mikroprosessoren – en hel datamaskin på én brikke
- Muliggjorde personlige datamaskiner (PC-er) på 1980-tallet
- Utviklingen har fulgt **Moores lov**: antall transistorer på en brikke dobles omtrent hvert andre år`,
    },
    {
      id: 'tof1-3-4-def-1',
      type: 'definition',
      title: 'Moores lov',
      content: `**Moores lov** er en observasjon gjort av Gordon Moore (medgrunnlegger av Intel) i 1965: antall transistorer på en integrert krets dobles omtrent hvert andre år, uten at prisen øker tilsvarende.

Dette har betydd eksponentiell vekst i datakraft:
- 1971 (Intel 4004): ca. 2 300 transistorer
- 1989 (Intel 486): ca. 1,2 millioner transistorer
- 2000 (Pentium 4): ca. 42 millioner transistorer
- 2020 (Apple M1): ca. 16 milliarder transistorer

Moores lov er ikke en naturlov, men en empirisk trend som har holdt seg i over 50 år. Den er hovedgrunnen til at teknologien har blitt eksponentielt kraftigere og billigere.`,
    },
    {
      id: 'tof1-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Eksponentiell vekst i praksis',
      problem: 'En smarttelefon fra 2024 har mer datakraft enn alle datamaskinene som ble brukt av NASA under Apollo 11-oppdraget i 1969. Hva forteller dette om den teknologiske utviklingen?',
      solution: `Apollo 11s navigasjonsdatamaskin (AGC) hadde:
- **74 KB minne** (ROM + RAM)
- Klokkefrekvens på **2 MHz**
- Kunne utføre ca. **40 000 operasjoner per sekund**

En typisk smarttelefon i dag har:
- **128–512 GB lagring** (millioner ganger mer)
- Klokkefrekvens på **3+ GHz** (over 1000 ganger raskere)
- Kan utføre **milliarder av operasjoner per sekund**

**Hva dette forteller oss:**
1. Teknologisk utvikling er **eksponentiell**, ikke lineær – den akselererer over tid
2. Det som tidligere krevde romstore maskiner og millionbudsjetter, er nå tilgjengelig for alle i lommeformat
3. **Miniaturisering** har vært nøkkelen – flere transistorer på mindre plass betyr mer kraft i mindre enheter
4. Moores lov har drevet denne utviklingen i over 50 år

Denne eksponentielle veksten er grunnen til at teknologisk endring i dag skjer raskere enn noensinne. En person født i 1990 har opplevd mer teknologisk endring i løpet av livet sitt enn alle generasjoner før dem til sammen.`,
    },
    {
      id: 'tof1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier Moores lov?',
        options: [
          { id: 'a', text: 'At datamaskiner aldri kan bli mindre enn en viss størrelse', isCorrect: false },
          { id: 'b', text: 'At antall transistorer på en brikke dobles omtrent hvert andre år', isCorrect: true },
          { id: 'c', text: 'At internett-hastigheten fordobles hvert femte år', isCorrect: false },
          { id: 'd', text: 'At kostnadene for datamaskiner aldri kan synke under et visst nivå', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Moores lov, formulert av Gordon Moore i 1965, observerer at antall transistorer på en integrert krets dobles omtrent hvert andre år. Dette har drevet den eksponentielle veksten i datakraft de siste 50+ årene.',
      },
    },

    // --- BLOKK 2: Internett ---
    {
      id: 'tof1-3-4-text-2',
      type: 'text',
      content: `### Internetts utvikling

Internett er kanskje den viktigste teknologiske innovasjonen siden trykkekunsten. Dets utvikling gikk gjennom flere faser:

**ARPANET (1969):**
Det amerikanske forsvaret utviklet **ARPANET** – det første pakkesvitsjede nettverket. Motivasjonen var å lage et kommunikasjonssystem som kunne overleve et kjernefysisk angrep ved å sende data i pakker via flere mulige ruter.

**TCP/IP (1983):**
Innføringen av **TCP/IP-protokollen** (Transmission Control Protocol/Internet Protocol) skapte et felles «språk» som lot ulike nettverk koble seg sammen. Dette var fødselen til det egentlige internett.

**World Wide Web (1991):**
**Tim Berners-Lee** ved CERN oppfant **World Wide Web** – et system med lenker (hyperlinks) mellom dokumenter som kunne åpnes i en nettleser. WWW gjorde internett brukervennlig og tilgjengelig for alle.

**Kommersialisering (1990-tallet):**
- Nettlesere som **Mosaic** (1993) og **Netscape** (1994) ga internett et grafisk grensesnitt
- E-post, søkemotorer og netthandel (Amazon 1994, eBay 1995) drev veksten
- Dot-com-boblen (1995–2001) viste både potensialet og overoptimismen

**Web 2.0 og sosiale medier (2000-tallet):**
- Brukerne ble innholdsskapere, ikke bare konsumenter
- **Sosiale medier** (Facebook 2004, YouTube 2005, Twitter 2006, Instagram 2010) revolusjonerte kommunikasjon
- **Smarttelefoner** (iPhone 2007) ga alle internett i lomma

**Nåtiden:**
- Kunstig intelligens, tingenes internett (IoT) og skytjenester
- Over 5 milliarder mennesker er på nett
- Internett er blitt kritisk infrastruktur på linje med vei, vann og strøm`,
    },
    {
      id: 'tof1-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Internetts betydning for demokrati og informasjonsfrihet',
      problem: 'Internett blir ofte omtalt som en «demokratiserende kraft». Beskriv hvordan internett kan styrke demokratiet, men også utfordre det.',
      solution: `**Internett styrker demokratiet ved:**

- **Informasjonstilgang:** Alle kan få tilgang til nyheter, forskning og offentlige dokumenter uavhengig av geografi og økonomi
- **Ytringsfriheten:** Alle med en internettilkobling kan publisere meninger, starte blogger, eller dele videoer – man trenger ikke lenger eie en avis eller TV-kanal
- **Organisering:** Sosiale medier muliggjør rask mobilisering av protestbevegelser og politisk engasjement (f.eks. den arabiske våren, klimastreikbevegelsen)
- **Åpenhet:** Offentlige data og vitneutsagn kan deles bredt, noe som vanskeliggjør hemmelighold og korrupsjon

**Internett utfordrer demokratiet ved:**

- **Desinformasjon:** Falske nyheter og propaganda spres raskt og kan manipulere valg og folkemening
- **Ekkokamre:** Algoritmer viser brukerne innhold de allerede er enige i, noe som polariserer samfunnet
- **Maktkonsentrasjon:** Noen få teknologiselskaper (Google, Meta, Apple) kontrollerer infrastrukturen og informasjonsflyten
- **Overvåking:** Stater og selskaper kan overvåke innbyggerne i et omfang som var utenkelig før
- **Digital ulikhet:** Ikke alle har lik tilgang til internett – det er fortsatt et digitalt skille mellom land og sosiale grupper`,
    },
    {
      id: 'tof1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvem oppfant World Wide Web (WWW)?',
        options: [
          { id: 'a', text: 'Bill Gates', isCorrect: false },
          { id: 'b', text: 'Steve Jobs', isCorrect: false },
          { id: 'c', text: 'Tim Berners-Lee', isCorrect: true },
          { id: 'd', text: 'Mark Zuckerberg', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Tim Berners-Lee ved CERN (det europeiske partikkelfysikklaboratoriet) oppfant World Wide Web i 1991 – et system med hyperlenker mellom dokumenter som gjorde internett brukervennlig. Bill Gates (A) er kjent for Microsoft, Steve Jobs (B) for Apple, og Mark Zuckerberg (D) for Facebook.',
      },
    },

    // --- BLOKK 3: Den digitale revolusjonen og samfunnet ---
    {
      id: 'tof1-3-4-text-3',
      type: 'text',
      content: `### Den digitale revolusjonen og samfunnet

Den digitale revolusjonen har forandret nær sagt alle sider av samfunnet:

**Arbeidsliv:**
- Automatisering og roboter har erstattet mange manuelle jobber
- Nye bransjer har oppstått: IT, spillutvikling, sosiale medier, e-handel
- Hjemmekontor og fjernarbeid har blitt vanlig, akselerert av pandemien i 2020
- **Plattformøkonomien** (Uber, Airbnb, gig-arbeid) har skapt nye arbeidsformer, men også usikkerhet

**Utdanning:**
- Digital tilgang til kunnskap har demokratisert utdanning – gratis nettkurs (MOOCs), Wikipedia, YouTube-forelesninger
- Digitale læringsverktøy, simulering og AI-assistenter endrer undervisningen
- Utfordring: Digital kompetanse er blitt en forutsetning for å delta i samfunnet

**Helse:**
- Elektroniske journaler, telemedisin og fjerndiagnostisering
- Kunstig intelligens brukes til å analysere medisinske bilder og forutsi sykdom
- Gensekvensering og persontilpasset medisin er muliggjort av datakraft

**Kultur og underholdning:**
- Strømmetjenester (Spotify, Netflix) har erstattet fysiske medier
- Sosiale medier har forandret kommunikasjon, identitet og sosiale normer
- Spillindustrien er blitt større enn filmindustrien

**Personvern og sikkerhet:**
- Enorme mengder persondata samles inn av selskaper og myndigheter
- GDPR (EUs personvernforordning) og andre lover forsøker å beskytte borgernes rettigheter
- Cyberkriminalitet og hacking utgjør nye trusler mot individer, bedrifter og nasjoner`,
    },
    {
      id: 'tof1-3-4-warning-1',
      type: 'warning',
      title: 'Det digitale skillet',
      content: `Mens den digitale revolusjonen har brakt enorme fordeler, er tilgangen ujevnt fordelt. **Det digitale skillet** refererer til forskjellen mellom de som har tilgang til digital teknologi og de som ikke har det. Dette gjelder mellom land (fattige vs. rike), innen land (by vs. bygd, unge vs. eldre) og mellom sosiale grupper. De som mangler digital kompetanse og tilgang, risikerer å falle utenfor i et samfunn som i økende grad forutsetter digital deltakelse.`,
    },
    {
      id: 'tof1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg ett av følgende samfunnsområder: arbeidsliv, utdanning eller helse. Beskriv minst tre måter den digitale revolusjonen har forandret dette området, og vurder om endringene har vært overveiende positive eller negative.',
        hints: ['Prøv å gi konkrete eksempler på endringene. Tenk på hva som var vanlig før og hva som er vanlig nå. Vurder hvem som tjener på endringene og hvem som eventuelt taper.'],
        solution: 'Eksempel (arbeidsliv):\n\n1. **Automatisering:** Roboter og programvare har overtatt mange rutinepregede jobber i industri, bank og administrasjon. Kassaløse butikker og selvbetjente kasser har redusert behovet for kassemedarbeidere.\n\n2. **Nye arbeidsformer:** Hjemmekontor, videokonferanser og skytjenester gjør at mange kan jobbe fra hvor som helst. Plattformøkonomien (Uber, Foodora) har skapt fleksibelt arbeid, men også usikre arbeidsvilkår.\n\n3. **Nye bransjer:** Helt nye yrker som webutvikler, dataanalytiker, innholdsprodusent og AI-spesialist har oppstått. IT-sektoren er en av verdens største næringer.\n\nVurdering: Endringene har vært overveiende positive for samfunnet som helhet – produktiviteten har økt, nye muligheter er skapt, og mange har fått mer fleksible arbeidsliv. Men for de som mister jobben til automatisering uten å ha kompetanse til å finne nytt arbeid, kan endringene være svært negative. Det er også bekymringer knyttet til arbeidslivets grenseløshet – forventningen om å alltid være tilgjengelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Datamaskinens utvikling** gikk fra mekaniske forløpere via vakuumrør, transistorer og integrerte kretser til mikroprosessorer.
- **Moores lov** – dobling av transistorer hvert andre år – har drevet eksponentiell vekst i datakraft i over 50 år.
- **Internett** utviklet seg fra det militære ARPANET (1969) via World Wide Web (1991) til dagens allstedsnærværende nett med over 5 milliarder brukere.
- **Tim Berners-Lee** oppfant World Wide Web, som gjorde internett tilgjengelig for alle.
- Den digitale revolusjonen har forandret **arbeidsliv, utdanning, helse, kultur og kommunikasjon** fundamentalt.
- Utfordringene inkluderer **desinformasjon, personverntrusler, det digitale skillet** og bekymringer knyttet til automatisering og jobbsikkerhet.
- Teknologisk utvikling er **eksponentiell** – endringene akselererer, og vi må forholde oss til konsekvensene i sanntid.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var den opprinnelige motivasjonen for å utvikle ARPANET?',
        options: [
          { id: 'a', text: 'Å selge varer på nett', isCorrect: false },
          { id: 'b', text: 'Å lage sosiale medier', isCorrect: false },
          { id: 'c', text: 'Å ha et kommunikasjonssystem som kunne overleve et kjernefysisk angrep', isCorrect: true },
          { id: 'd', text: 'Å la forskere dele fotografier', isCorrect: false },
        ],
        solution: 'Riktig svar er C. ARPANET ble utviklet av det amerikanske forsvaret med mål om å lage et robust kommunikasjonssystem som kunne fungere selv om deler av nettverket ble ødelagt i et kjernefysisk angrep. Data ble sendt i pakker via flere mulige ruter, slik at systemet kunne omgå ødelagte knutepunkter.',
      },
    },
    {
      id: 'tof1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vi har nå sett på fire teknologiske epoker: de tidlige oppdagelsene, den industrielle revolusjonen, elektrisitetsalderen og dataalderen. Sammenlign to av disse epokene og drøft følgende:\n\na) Hvilke teknologier drev endringen, og hvorfor var de så viktige?\nb) Hvordan endret de forholdet mellom mennesker og arbeid?\nc) Hvilke nye utfordringer skapte de for samfunnet?\n\nKonkluder med en refleksjon over om mønsteret fra disse revolusjonene kan hjelpe oss å forstå konsekvensene av dagens teknologiske utvikling (kunstig intelligens, automatisering).',
        hints: ['Velg to epoker du kjenner godt. Se etter paralleller – for eksempel skapte både den industrielle revolusjonen og dataalderen frykt for arbeidsledighet. Begge førte til nye typer arbeid som ingen hadde forestilt seg. Hva kan dette fortelle oss om AI-revolusjonen?'],
        solution: 'Eksempel (den industrielle revolusjon vs. dataalderen):\n\n**a) Sentrale teknologier:**\n- Industrielle revolusjon: Dampmaskinen frigjorde produksjonen fra muskelkraft og vannkraft, og muliggjorde fabrikksystemet.\n- Dataalderen: Mikroprosessoren og internett frigjorde informasjonsbehandling og kommunikasjon fra tid og sted.\n\nBegge var «generelle teknologier» (general-purpose technologies) som påvirket alle sektorer, ikke bare én.\n\n**b) Forholdet mellom mennesker og arbeid:**\n- Industrielle revolusjon: Håndverkere ble erstattet av fabrikkarbeidere. Nye jobber oppsto (maskinoperatører, ingeniører), men mange mistet levebrødet.\n- Dataalderen: Rutinepregede jobber automatiseres. Nye yrker oppstår (programmerere, dataanalytikere), men mange opplever usikkerhet.\n\nI begge tilfeller var det en overgangsperiode med stor uro før nye jobber og systemer ble etablert.\n\n**c) Nye utfordringer:**\n- Industrielle revolusjon: Barnearbeid, sosial ulikhet, forurensning, urbaniseringsproblemer.\n- Dataalderen: Personvern, desinformasjon, digitalt skille, mental helse (sosiale medier).\n\nBegge epoker skapte utfordringer som krevde ny lovgivning og sosiale reformer.\n\n**Refleksjon om AI:**\nMønsteret tyder på at AI-revolusjonen vil: (1) fjerne mange eksisterende jobber, (2) skape nye jobber vi ennå ikke kan forestille oss, (3) øke produktiviteten, men (4) skape nye sosiale utfordringer som krever politiske løsninger. Historien viser at teknologiske revolusjoner på sikt har økt velstanden, men at overgangsperiodene kan være smertefulle dersom samfunnet ikke aktivt håndterer konsekvensene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Teknologi i dag - AI og Industri 4.0
// ============================================================================

export const CHAPTER_TOF_1_3_5: TextbookChapter = {
  id: 'tof-1-3-5',
  courseId: 'tof-1',
  chapterNumber: '3.5',
  title: 'Teknologi i dag - AI og Industri 4.0',
  description: 'Kunstig intelligens, automatisering og fremtidens teknologi.',
  estimatedMinutes: 30,
  competenceGoals: ['vurdere teknologiens rolle i dagens samfunn'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-5-intro',
      type: 'text',
      content: `## Teknologi i dag - AI og Industri 4.0

Vi lever midt i det mange kaller den **fjerde industrielle revolusjon**, eller **Industri 4.0**. Mens de tre foregående revolusjonene ble drevet av henholdsvis dampmaskinen, elektrisiteten og datamaskinen, er denne fjerde bølgen kjennetegnet av en sammensmelting av digitale, fysiske og biologiske teknologier.

I sentrum av denne utviklingen står **kunstig intelligens (AI)** – maskiner som kan lære, resonere og ta beslutninger. Sammen med robotikk, tingenes internett (IoT) og stordata forandrer AI hvordan vi produserer, arbeider og lever. I dette kapittelet skal vi se på hva Industri 4.0 og AI innebærer, og drøfte konsekvensene for samfunnet.`,
    },

    // --- BLOKK 1: Kunstig intelligens ---
    {
      id: 'tof1-3-5-def-1',
      type: 'definition',
      title: 'Kunstig intelligens (AI)',
      content: `**Kunstig intelligens (AI)** er et fagfelt innen informatikk som handler om å utvikle systemer som kan utføre oppgaver som normalt krever menneskelig intelligens. Dette inkluderer evner som å lære av data, gjenkjenne mønstre, forstå språk, ta beslutninger og løse problemer.

Man skiller ofte mellom:
- **Smal AI** (svak AI): Systemer som er spesialisert på én bestemt oppgave, for eksempel bildegjenkjenning, talegjenkjenning eller sjakkspilling. All AI vi har i dag er smal AI.
- **Generell AI** (sterk AI): En hypotetisk AI som kan utføre enhver intellektuell oppgave like godt som et menneske. Dette er foreløpig ikke oppnådd.`,
    },
    {
      id: 'tof1-3-5-text-1',
      type: 'text',
      content: `### Hvordan fungerer moderne AI?

Moderne AI er i stor grad basert på **maskinlæring** – en metode der datamaskiner lærer fra data i stedet for å bli eksplisitt programmert.

**Tradisjonell programmering vs. maskinlæring:**
- Tradisjonell programmering: Programmereren skriver regler → datamaskinen følger reglene → resultat
- Maskinlæring: Data + ønsket resultat → datamaskinen finner reglene selv

**Viktige begreper:**

| Begrep | Forklaring |
|--------|------------|
| Maskinlæring | Algoritmer som forbedrer seg selv ved å analysere data |
| Dyp læring | Maskinlæring med nevrale nettverk med mange lag (inspirert av hjernen) |
| Treningsdata | Store datamengder som AI-modellen lærer fra |
| Nevrale nettverk | Matematiske modeller inspirert av biologiske nevroner |
| Stor språkmodell (LLM) | AI-modeller som forstår og genererer tekst (f.eks. ChatGPT) |

**Eksempler på AI i praksis:**
- **Bildegjenkjenning:** AI kan gjenkjenne ansikter, identifisere kreft i medisinske bilder, og lese tekst i fotografier
- **Språkteknologi:** Oversettelse (Google Translate), taleassistenter (Siri, Alexa), chatboter (ChatGPT)
- **Selvkjørende biler:** Bruker AI til å tolke trafikksituasjoner og ta beslutninger i sanntid
- **Anbefalingssystemer:** Netflix, Spotify og TikTok bruker AI til å anbefale innhold basert på dine vaner`,
    },
    {
      id: 'tof1-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Store språkmodeller som ChatGPT',
      problem: 'Store språkmodeller (LLM-er) som ChatGPT har revolusjonert måten vi samhandler med AI på. Forklar hvordan en slik modell fungerer på et overordnet nivå, og hva den kan og ikke kan.',
      solution: `**Hvordan det fungerer (forenklet):**

1. **Trening:** Modellen trenes på enorme mengder tekst fra internett, bøker og andre kilder. Den lærer mønstre i hvordan ord og setninger henger sammen.

2. **Prediksjon:** Når du stiller et spørsmål, «forutsier» modellen det mest sannsynlige neste ordet, gang etter gang, til svaret er komplett. Den genererer tekst basert på statistiske mønstre.

3. **Finjustering:** Modellen finjusteres med menneskelig tilbakemelding for å gi nyttige, sikre og relevante svar.

**Hva den kan:**
- Skrive tekst, oppsummere dokumenter, oversette mellom språk
- Besvare spørsmål basert på treningsdataene
- Hjelpe med koding, kreativt skrivearbeid og analyse
- Tilpasse seg ulike samtaleformer og oppgaver

**Hva den IKKE kan:**
- Den «forstår» ikke tekst slik mennesker gjør – den gjenkjenner mønstre
- Den kan «hallusinere» – generere svar som høres riktig ut, men som er feil
- Den har ikke tilgang til sanntidsinformasjon (med mindre den er koblet til internett)
- Den har ikke bevissthet, følelser eller egne meninger

Disse verktøyene er kraftige, men det er viktig å bruke dem kritisk og alltid vurdere kvaliteten på svarene.`,
    },
    {
      id: 'tof1-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom smal AI og generell AI?',
        options: [
          { id: 'a', text: 'Smal AI er billigere å lage enn generell AI', isCorrect: false },
          { id: 'b', text: 'Smal AI er spesialisert på én oppgave, mens generell AI kan utføre enhver intellektuell oppgave', isCorrect: true },
          { id: 'c', text: 'Smal AI bruker mindre strøm enn generell AI', isCorrect: false },
          { id: 'd', text: 'Smal AI er eldre teknologi, mens generell AI er den nyeste teknologien', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Smal (svak) AI er spesialisert på én bestemt oppgave, som bildegjenkjenning eller sjakkspilling. Generell (sterk) AI ville kunne utføre enhver intellektuell oppgave like godt som et menneske – dette er foreløpig ikke oppnådd og forblir hypotetisk. Kostnader (A), strømforbruk (C) og alder (D) er ikke det som definerer forskjellen.',
      },
    },

    // --- BLOKK 2: Industri 4.0 og automatisering ---
    {
      id: 'tof1-3-5-def-2',
      type: 'definition',
      title: 'Industri 4.0',
      content: `**Industri 4.0** (den fjerde industrielle revolusjon) beskriver den pågående transformasjonen av industri og produksjon gjennom digitale teknologier. Begrepet ble lansert i Tyskland i 2011.

Kjernen i Industri 4.0 er **cyberfysiske systemer** – digitale og fysiske teknologier som smelter sammen. Fabrikker blir «smarte» ved at maskiner, sensorer og datasystemer kommuniserer med hverandre i sanntid.

Nøkkelteknologier:
- **Tingenes internett (IoT):** Sensorer og enheter koblet til internett
- **Stordata og AI:** Analyse av enorme datamengder for optimalisering
- **Robotikk:** Avanserte roboter som samarbeider med mennesker
- **3D-printing:** Produksjon av fysiske objekter lag for lag
- **Digital tvilling:** Virtuelle kopier av fysiske systemer for testing og simulering`,
    },
    {
      id: 'tof1-3-5-text-2',
      type: 'text',
      content: `### Automatisering og fremtidens arbeidsliv

Automatisering – at maskiner overtar oppgaver fra mennesker – er ikke nytt. Men kombinasjonen av AI, robotikk og IoT gjør at flere typer arbeid enn noen gang kan automatiseres.

**Hva kan automatiseres?**
- **Rutinepreget manuelt arbeid:** Montasje, pakking, lagerarbeid (allerede i stor grad automatisert)
- **Rutinepreget kognitivt arbeid:** Dataregistrering, enkel regnskapsføring, kundeservice (i økende grad automatisert)
- **Ikke-rutinepreget arbeid:** AI begynner å mestre oppgaver som krever vurdering, kreativitet og språkforståelse

**Jobber som er vanskelige å automatisere:**
- Arbeid som krever **emosjonell intelligens** og empati (sykepleier, terapeut, lærer)
- Arbeid med **uforutsigbare fysiske omgivelser** (rørlegger, elektriker i eldre bygg)
- **Kreativt arbeid** på høyt nivå (kunstner, forsker, strateg)
- **Lederskap** og kompleks beslutningstaking

**Perspektiver på fremtiden:**
Noen forskere advarer om massiv arbeidsledighet når AI overtar stadig flere oppgaver. Andre mener at ny teknologi alltid skaper nye jobber vi ikke kan forestille oss – akkurat som den industrielle revolusjonen skapte yrker ingen hadde hørt om.

Det er bred enighet om at **kompetanse og omstillingsevne** blir avgjørende. Evnen til å lære nye ting gjennom hele livet – **livslang læring** – er nøkkelen til å tilpasse seg et arbeidsliv i rask endring.`,
    },
    {
      id: 'tof1-3-5-example-2',
      type: 'example',
      title: 'Eksempel: En smart fabrikk i praksis',
      problem: 'Beskriv hvordan en «smart fabrikk» fungerer i Industri 4.0, og forklar forskjellen fra en tradisjonell fabrikk.',
      solution: `**Tradisjonell fabrikk:**
- Maskiner følger forhåndsprogrammerte instruksjoner
- Mennesker overvåker maskinene og tar beslutninger
- Vedlikehold skjer etter faste intervaller eller når noe går i stykker
- Produksjonen er standardisert – alle produkter er like

**Smart fabrikk (Industri 4.0):**
- **IoT-sensorer** overvåker maskiner i sanntid: temperatur, vibrasjon, slitasje, produksjonshastighet
- **AI-systemer** analyserer dataene og tar beslutninger: justerer maskiner, optimaliserer produksjon, forutsier feil
- **Prediktivt vedlikehold:** AI varsler FØR en maskin feiler, basert på analyse av sensordata – dette reduserer nedetid og kostnader
- **Fleksibel produksjon:** Maskinene kan raskt omstilles til å produsere ulike varianter etter kundebehov
- **Digital tvilling:** En virtuell kopi av hele fabrikken brukes til å simulere endringer før de gjennomføres

**Eksempel fra Norge:**
Hydro har utviklet smarte aluminiumsverk der AI optimaliserer smelteprosessen i sanntid. Sensorer måler hundrevis av parametere, og AI-systemet justerer temperatur, strømstyrke og råstofftilsetning for å minimere energiforbruk og maksimere kvalitet. Resultatet er lavere utslipp, bedre produktkvalitet og reduserte kostnader.`,
    },
    {
      id: 'tof1-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type arbeid er vanskeligst å automatisere med dagens teknologi?',
        options: [
          { id: 'a', text: 'Registrering av data i regneark', isCorrect: false },
          { id: 'b', text: 'Montasje av identiske produkter på samlebånd', isCorrect: false },
          { id: 'c', text: 'Sykepleie som krever empati og tilpasning til uforutsigbare situasjoner', isCorrect: true },
          { id: 'd', text: 'Sortering av e-post basert på emne', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Sykepleie krever emosjonell intelligens, empati og evnen til å håndtere uforutsigbare situasjoner – egenskaper som er svært vanskelige å automatisere. Dataregistrering (A), samlebåndsmontasje (B) og e-postsortering (D) er alle rutinepregede oppgaver som allerede i stor grad kan automatiseres.',
      },
    },

    // --- BLOKK 3: Etikk og konsekvenser ---
    {
      id: 'tof1-3-5-text-3',
      type: 'text',
      content: `### Etiske utfordringer ved AI

Med den raske utviklingen av AI følger en rekke etiske spørsmål som samfunnet må ta stilling til:

**Skjevhet og diskriminering:**
AI-systemer lærer av data, og dersom dataene reflekterer eksisterende fordommer, vil AI-en videreføre dem. Eksempler:
- Ansettelsesalgoritmer som diskriminerer kvinner fordi de er trent på historiske data der menn ble foretrukket
- Ansiktsgjenkjenning som fungerer dårligere for mørkhudede personer fordi treningsdataene inneholdt flest lyshudede ansikter
- Kredittvurderingssystemer som systematisk gir lavere score til mennesker fra visse nabolag

**Overvåking og personvern:**
- AI muliggjør masseovervåking i en skala som aldri før har vært mulig
- Ansiktsgjenkjenning i offentlige rom, analyse av kommunikasjon, sporing av bevegelser
- Kina har utviklet et «sosialt kredittsystem» der AI brukes til å score borgernes adferd

**Ansvar og åpenhet:**
- Hvem er ansvarlig når en selvkjørende bil forårsaker en ulykke? Produsenten? Programmereren? Eieren?
- Mange AI-systemer er «svarte bokser» – selv eksperter vet ikke nøyaktig hvorfor modellen tar en bestemt beslutning
- EU har vedtatt verdens første omfattende AI-lov (AI Act, 2024) for å regulere bruken av AI

**Militær bruk:**
- Autonome våpensystemer (droner, robotsoldater) reiser alvorlige etiske spørsmål
- Skal maskiner få ta beslutninger om liv og død uten menneskelig involvering?
- FN diskuterer et mulig forbud mot fullautonome våpen`,
    },
    {
      id: 'tof1-3-5-tip-1',
      type: 'tip',
      title: 'Kritisk tenkning om AI',
      content: `Når du hører om AI-systemer, er det lurt å stille noen kritiske spørsmål: Hvem utviklet dette systemet, og hva er motivasjonen? Hvilke data er det trent på – kan det finnes skjevheter? Hvem rammes dersom systemet tar feil? Er det en mulighet for mennesker å overprøve systemets avgjørelser? Disse spørsmålene hjelper deg å vurdere teknologien nyansert i stedet for å være ukritisk positiv eller negativt avvisende.`,
    },
    {
      id: 'tof1-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med at AI kan ha «skjevheter» (bias). Gi to konkrete eksempler på hvordan dette kan føre til urettferdige utfall, og foreslå hva som kan gjøres for å redusere problemet.',
        hints: ['Tenk på at AI lærer av data. Hva skjer dersom dataene den lærer av allerede inneholder fordommer eller ubalanserte representasjoner?'],
        solution: 'AI-skjevheter (bias) oppstår fordi AI-systemer lærer fra historiske data. Dersom disse dataene reflekterer eksisterende fordommer, diskriminering eller ubalanse, vil AI-systemet videreføre og forsterke disse mønstrene.\n\n**Eksempel 1: Ansettelse**\nEt AI-system trent på historiske ansettelsesdata fra et teknologiselskap der flertallet av ansatte var menn, lærte at mannlige søkere var «bedre» kandidater. Systemet begynte å rangere kvinner lavere – ikke fordi kvinner er dårligere kvalifisert, men fordi dataene reflekterte en historisk skjevhet.\n\n**Eksempel 2: Politi**\nPrediktive politialgoritmer som brukes for å forutsi kriminalitet baserer seg på arrestdata. Dersom politiet historisk har patruljert visse nabolag mer enn andre, vil det være flere arrestasjoner der – og AI-en vil anbefale enda mer politi i disse områdene, uavhengig av om kriminaliteten faktisk er høyere.\n\n**Tiltak for å redusere problemet:**\n- Sikre at treningsdataene er representative og balanserte\n- Teste AI-systemer grundig for skjevheter før de tas i bruk\n- Ha menneskelig tilsyn og mulighet for å overprøve AI-beslutninger\n- Kreve åpenhet om hvordan AI-systemer fungerer og hvilke data de bruker\n- Lovregulering, som EUs AI Act, som stiller krav til risikohåndtering',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Industri 4.0** er den fjerde industrielle revolusjonen, kjennetegnet av sammensmelting av digitale, fysiske og biologiske teknologier.
- **Kunstig intelligens (AI)** er systemer som kan lære av data, gjenkjenne mønstre og ta beslutninger. All AI i dag er **smal AI**, spesialisert på enkeloppgaver.
- **Maskinlæring** lar datamaskiner lære fra data i stedet for å bli programmert med eksplisitte regler.
- **Smarte fabrikker** bruker IoT-sensorer, AI og robotikk for å optimalisere produksjon i sanntid.
- Automatisering truer rutinepregede jobber, men **kreativt arbeid, empati og kompleks problemløsning** er vanskelig å automatisere.
- AI reiser viktige **etiske spørsmål** om skjevheter, overvåking, ansvar og militær bruk.
- **Livslang læring** og omstillingsevne blir avgjørende i et arbeidsliv i rask endring.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «prediktivt vedlikehold» i en smart fabrikk?',
        options: [
          { id: 'a', text: 'Vedlikehold som utføres etter faste intervaller uavhengig av maskinens tilstand', isCorrect: false },
          { id: 'b', text: 'Vedlikehold som utføres først etter at maskinen har gått i stykker', isCorrect: false },
          { id: 'c', text: 'AI-basert analyse av sensordata for å forutsi og forebygge feil før de oppstår', isCorrect: true },
          { id: 'd', text: 'Manuell inspeksjon av maskiner av en tekniker hver morgen', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Prediktivt vedlikehold bruker IoT-sensorer og AI til å overvåke maskinens tilstand i sanntid og forutsi når noe vil feile. Vedlikehold kan da gjøres på det optimale tidspunktet – etter at slitasjen har begynt, men FØR maskinen feiler. Alternativ A beskriver forebyggende vedlikehold (faste intervaller), B beskriver reaktivt vedlikehold, og D er manuell inspeksjon.',
      },
    },
    {
      id: 'tof1-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende påstand: «AI vil føre til massiv arbeidsledighet fordi maskiner snart kan gjøre alt mennesker kan.»\n\nBruk eksempler fra historien (de industrielle revolusjonene) og kunnskap om hva AI kan og ikke kan til å vurdere påstanden. Avslutt med din egen vurdering – er du enig, delvis enig eller uenig? Begrunn svaret.',
        hints: ['Tenk på hva som skjedde da dampmaskinen og samlebåndet ble innført – ble alle arbeidsledige? Tenk også på hva AI faktisk er god og dårlig til i dag. Hvilke menneskelige egenskaper er vanskelige å erstatte?'],
        solution: 'Et godt svar drøfter påstanden fra flere sider:\n\n**Argumenter FOR at AI kan skape arbeidsledighet:**\n- AI automatiserer allerede mange rutinepregede oppgaver (kundeservice, dataanalyse, oversettelse)\n- I motsetning til tidligere automatisering truer AI også kognitivt arbeid, ikke bare manuelt arbeid\n- Utviklingen akselererer – nye AI-modeller blir stadig kraftigere\n\n**Argumenter MOT at det vil føre til MASSIV arbeidsledighet:**\n- Historisk har teknologiske revolusjoner alltid skapt nye jobber: den industrielle revolusjonen skapte ingeniører, telegrafister og mekanikere – yrker ingen hadde forestilt seg\n- AI er foreløpig smal – den er god på spesifikke oppgaver, men dårlig på fleksibilitet, empati og kreativitet\n- Mange jobber krever menneskelig kontakt, tillit og emosjonell intelligens\n- Ny teknologi skaper ofte nye behov og nye markeder\n\n**Nyansering:**\n- Problemet er ikke nødvendigvis det totale antallet jobber, men overgangsfasen: mennesker som mister jobben trenger tid og støtte for å lære noe nytt\n- Ulikheten kan øke dersom gevinstene tilfaller kapitaleiere mens arbeidere mister inntekten\n- Samfunnet må aktivt legge til rette for omstilling gjennom utdanning og sosialt sikkerhetsnett\n\nHistorien viser at teknologiske revolusjoner er smertefulle på kort sikt, men skaper velstand på lang sikt – forutsatt at samfunnet håndterer overgangen aktivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6: Innovasjon og designtenkning
// ============================================================================

export const CHAPTER_TOF_1_3_6: TextbookChapter = {
  id: 'tof-1-3-6',
  courseId: 'tof-1',
  chapterNumber: '3.6',
  title: 'Innovasjon og designtenkning',
  description: 'Design thinking, kreativitet og innovasjonsprosesser.',
  estimatedMinutes: 30,
  competenceGoals: ['anvende designtenkning i innovasjonsprosesser'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-6-intro',
      type: 'text',
      content: `## Innovasjon og designtenkning

Gjennom de foregående kapitlene har vi sett hvordan teknologiske oppfinnelser har forandret verden. Men hvordan oppstår egentlig nye ideer? Hva er forskjellen mellom en oppfinnelse og en innovasjon? Og finnes det metoder for å bli bedre til å utvikle nye løsninger?

I dette kapittelet skal vi utforske **innovasjon** som begrep og prosess, og lære om **designtenkning** (design thinking) – en strukturert metode for å løse problemer på kreative og brukerfokuserte måter. Designtenkning brukes av alt fra små oppstartsselskaper til globale konserner og offentlige etater for å utvikle bedre produkter, tjenester og løsninger.`,
    },

    // --- BLOKK 1: Innovasjon og oppfinnelse ---
    {
      id: 'tof1-3-6-def-1',
      type: 'definition',
      title: 'Innovasjon vs. oppfinnelse',
      content: `**Oppfinnelse** (invention) er skapelsen av noe helt nytt – en ny ide, et nytt produkt eller en ny teknologi som ikke har eksistert før.

**Innovasjon** (innovation) er å ta en oppfinnelse eller ide og gjøre den til noe som skaper verdi i praksis. Innovasjon handler om å implementere nye løsninger som noen faktisk har nytte av.

**Forskjellen er viktig:** Mange oppfinnelser blir aldri innovasjoner fordi de aldri tas i bruk. Leonardo da Vinci tegnet en flymaskin på 1400-tallet (oppfinnelse på papiret), men først da brødrene Wright faktisk fløy i 1903 – og flyindustrien vokste frem – ble det en innovasjon.

Man skiller også mellom typer innovasjon:
- **Inkrementell innovasjon:** Gradvise forbedringer av eksisterende produkter (ny versjon av en telefon)
- **Radikal innovasjon:** Helt nye produkter eller tjenester som endrer markedet fundamentalt (smarttelefonen, internett)
- **Prosessinnovasjon:** Nye måter å produsere eller levere på (samlebåndet, strømmetjenester)`,
    },
    {
      id: 'tof1-3-6-text-1',
      type: 'text',
      content: `### Hva driver innovasjon?

Innovasjon oppstår sjelden i et vakuum. Den drives av en kombinasjon av faktorer:

**Behov og problemer:**
Den mest grunnleggende driveren for innovasjon er et **uløst problem** eller et **udekket behov**. Mange av historiens største innovasjoner oppsto fordi noen ville løse et konkret problem – vaksiner for å stoppe epidemier, internett for å kommunisere raskere, solceller for å erstatte fossile energikilder.

**Kunnskap og teknologi:**
Nye vitenskapelige oppdagelser og teknologier åpner for muligheter som ikke fantes før. Smarttelefonen ble mulig først da berøringsskjermer, kraftige mikroprosessorer, trådløst internett og litiumion-batterier alle var tilgjengelige.

**Kreativitet og tverrfaglighet:**
Innovasjon skjer ofte i krysningspunktet mellom ulike fagfelt. Steve Jobs kombinerte teknologi med design og brukeropplevelse. Medisinske gjennombrudd skjer ofte når biologer, kjemikere, ingeniører og dataforskere samarbeider.

**Kultur og rammebetingelser:**
Samfunn som oppmuntrer til prøving og feiling, tolererer risiko og beskytter intellektuell eiendom, tenderer til å produsere mer innovasjon. Silicon Valley er kjent for en kultur der det er «akseptabelt å feile» – nettopp denne holdningen gjør det lettere å eksperimentere.

**Ressurser og finansiering:**
Innovasjon krever investering i forskning og utvikling (FoU). Norges forskningsråd, EU-programmer og privat risikokapital (venture capital) er alle viktige finansieringskilder for innovasjon.`,
    },
    {
      id: 'tof1-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Spotify - en norsk-svensk innovasjon',
      problem: 'Spotify ble lansert i 2008 av svenske Daniel Ek og Martin Lorentzon. Beskriv hvordan Spotify representerer innovasjon, og hvilken type innovasjon det er.',
      solution: `**Hva Spotify gjorde:**
Spotify løste et reelt problem – ulovlig nedlasting av musikk (piratkopiering) var utbredt fordi eksisterende tjenester var dyre og upraktiske. Spotify tilbød en lovlig, rimelig og brukervennlig strømmetjeneste som ga tilgang til millioner av sanger.

**Type innovasjon:**
Spotify er et eksempel på **radikal innovasjon** i forretningsmodell og levering:
- De oppfant ikke ny teknologi, men kombinerte eksisterende teknologier (strømming, databaser, anbefalingsalgoritmer) på en ny måte
- De endret forretningsmodellen fra å **eie** musikk (CD, iTunes) til å **abonnere** på tilgang
- De brukte **algoritmer og AI** til å anbefale musikk tilpasset den enkelte bruker (Discover Weekly)

**Hva vi kan lære:**
1. Innovasjon handler ikke bare om å finne opp ny teknologi – det kan handle om å kombinere eksisterende teknologi på nye måter
2. En god forretningsmodell er like viktig som et godt produkt
3. Å forstå brukerens behov er avgjørende – folk ville ha enkel, lovlig tilgang til musikk
4. Innovasjon kan komme fra Norden, ikke bare fra Silicon Valley`,
    },
    {
      id: 'tof1-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en oppfinnelse og en innovasjon?',
        options: [
          { id: 'a', text: 'En oppfinnelse er alltid digital, mens en innovasjon er fysisk', isCorrect: false },
          { id: 'b', text: 'En oppfinnelse er skapelsen av noe nytt, mens en innovasjon er å gjøre det til noe som skaper verdi i praksis', isCorrect: true },
          { id: 'c', text: 'En oppfinnelse er gratis, mens en innovasjon koster penger', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – ordene betyr det samme', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En oppfinnelse er å skape noe helt nytt (en ide, et produkt, en teknologi), mens innovasjon er å ta en oppfinnelse og implementere den slik at den skaper verdi i praksis. Mange oppfinnelser blir aldri innovasjoner fordi de aldri tas i bruk eller skaper verdi for noen.',
      },
    },

    // --- BLOKK 2: Designtenkning ---
    {
      id: 'tof1-3-6-def-2',
      type: 'definition',
      title: 'Designtenkning (Design thinking)',
      content: `**Designtenkning** er en menneskesentrert problemløsningsmetode som bruker designerens verktøy og tankesett for å løse komplekse problemer. Metoden ble popularisert av designfirmaet **IDEO** og **Stanford d.school**.

Grunnprinsippene er:
- **Mennesket i sentrum:** Start med å forstå brukernes faktiske behov og opplevelser
- **Tverrfaglighet:** Bland perspektiver fra ulike fagfelt
- **Prøving og feiling:** Lag raske prototyper, test dem, lær av feilene, og prøv igjen
- **Visuell tenkning:** Bruk tegning, modeller og fysiske prototyper for å utforske ideer
- **Optimisme:** Tro på at alle problemer har en løsning`,
    },
    {
      id: 'tof1-3-6-text-2',
      type: 'text',
      content: `### De fem fasene i designtenkning

Designtenkning følger vanligvis fem faser. Prosessen er **iterativ** – man går ofte frem og tilbake mellom fasene etter hvert som man lærer mer.

**1. Empati (Empathize)**
Forstå brukeren gjennom observasjon, intervjuer og innlevelse. Hva er brukerens faktiske behov, frustrasjoner og ønsker? Ikke anta at du vet – spør og observer.
- Gjennomfør brukerintervjuer
- Observer brukeren i sin naturlige kontekst
- Sett deg i brukerens sted

**2. Definer (Define)**
Analyser innsikten fra empatifasen og definer det faktiske problemet som skal løses. Formuler en tydelig **problemstilling** (point of view).
- «Tenåringer i distriktene trenger bedre transportløsninger fordi de er avhengige av foreldrenes kjøring for å delta i aktiviteter.»

**3. Ideer (Ideate)**
Generer så mange ideer som mulig uten å vurdere dem. Bruk brainstorming, tankekart og «crazy eights» (åtte ideer på åtte minutter). Kvantitet er viktigere enn kvalitet i denne fasen.
- Ingen ideer er for ville
- Bygg videre på andres ideer
- Utsett vurdering til senere

**4. Prototype (Prototype)**
Lag enkle, raske modeller av de mest lovende ideene. En prototype trenger ikke være perfekt – den skal være god nok til å teste konseptet. Eksempler:
- Papirmodeller av en app (tegnet for hånd)
- Pappmodeller av et fysisk produkt
- Rollespill som simulerer en tjeneste

**5. Test (Test)**
Test prototypen med virkelige brukere. Observer hvordan de bruker den, og lytt til tilbakemeldingene. Bruk det du lærer til å forbedre løsningen – gå tilbake til tidligere faser om nødvendig.`,
    },
    {
      id: 'tof1-3-6-example-2',
      type: 'example',
      title: 'Eksempel: Designtenkning i praksis – en skoleoppgave',
      problem: 'En gruppe VG2-elever skal bruke designtenkning for å forbedre kantineopplevelsen på skolen. Beskriv hvordan de kan gå gjennom de fem fasene.',
      solution: `**1. Empati:**
Elevene gjennomfører intervjuer med medelever, lærere og kantinapersonalet. De observerer kantinen i lunsjen og legger merke til:
- Lange køer fører til at elever med kort friminutt ikke rekker å spise
- Mange velger usunt fordi det er raskere å ta en bolle enn å stå i varmmatskøen
- Elever med matallergier opplever usikkerhet om ingredienser

**2. Definer:**
Gruppen formulerer problemstillingen: «Elever med 20 minutters lunsj trenger raskere tilgang til sunn mat fordi de i dag velger usunne alternativer eller dropper lunsj på grunn av lange ventetider.»

**3. Ideer:**
De brainstormer fritt:
- Forhåndsbestilling via app
- Flere utleveringspunkter rundt på skolen
- Salatbar med selvbetjening
- Bento-bokser som hentes fra en automat
- Roterende meny synlig på digital skjerm
- Fargekoding av allergener

**4. Prototype:**
Gruppen velger «forhåndsbestilling via app + avhenting» og lager:
- En papirprototype av appen (tegnet på papir)
- Et flytskjema for bestillingsprosessen
- En enkel modell av avhentingspunktet i papp

**5. Test:**
De lar 10 medelever «bruke» papirprototypen og gi tilbakemeldinger. De oppdager at mange synes det er for mange trinn i bestillingsprosessen, og forenkler den. De tester igjen og får bedre respons.

Denne prosessen illustrerer hvordan designtenkning starter med **brukerens opplevelse**, ikke med teknologien.`,
    },
    {
      id: 'tof1-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det viktigste målet med «empatifasen» i designtenkning?',
        options: [
          { id: 'a', text: 'Å generere så mange ideer som mulig', isCorrect: false },
          { id: 'b', text: 'Å lage en prototype av løsningen', isCorrect: false },
          { id: 'c', text: 'Å forstå brukernes faktiske behov, frustrasjoner og ønsker', isCorrect: true },
          { id: 'd', text: 'Å teste den ferdige løsningen med brukere', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Empatifasen handler om å forstå brukerne gjennom observasjon, intervjuer og innlevelse. Å generere ideer (A) hører til idéfasen, å lage prototyper (B) til prototypefasen, og å teste med brukere (D) til testfasen.',
      },
    },

    // --- BLOKK 3: Kreativitet og innovasjonskultur ---
    {
      id: 'tof1-3-6-text-3',
      type: 'text',
      content: `### Kreativitet og innovasjonskultur

Kreativitet er ikke en medfødt egenskap som noen har og andre mangler. Forskning viser at kreativitet kan trenes og utvikles, og at **omgivelsene og kulturen** har stor betydning for om kreativitet blomstrer.

**Hva fremmer kreativitet?**
- **Psykologisk trygghet:** Et miljø der det er trygt å komme med ideer uten frykt for å bli latterliggjort. Google-forskning viste at dette er den viktigste faktoren for effektive team.
- **Mangfold:** Team med ulike bakgrunner, kompetanser og perspektiver kommer på bedre løsninger enn homogene grupper.
- **Tverrfaglig samarbeid:** Når en ingeniør, en designer, en markedsfører og en bruker jobber sammen, oppstår ideer som ingen av dem ville kommet på alene.
- **Tid til utforsking:** Google tillater ansatte å bruke 20 % av tiden på egne prosjekter. Gmail og Google Maps oppsto fra denne ordningen.
- **Feiling som læringsmulighet:** Organisasjoner som straffer feil, kveler innovasjon. De beste innovasjonsmiljøene behandler feil som verdifull informasjon.

**Kreative teknikker:**
- **Brainstorming:** Generer mange ideer uten å vurdere dem underveis
- **Tankekart (mind mapping):** Visualiser sammenhenger mellom ideer
- **SCAMPER:** Systematisk metode for å modifisere eksisterende ideer (Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse)
- **De seks tenkehattene:** Edward de Bonos metode der deltakerne veksler mellom ulike tenkemåter (fakta, følelser, kritikk, optimisme, kreativitet, prosess)
- **Analogier:** Hente inspirasjon fra andre bransjer eller naturen (biomimikk)`,
    },
    {
      id: 'tof1-3-6-note-1',
      type: 'note',
      title: 'Innovasjon i Norge',
      content: `Norge er rangert som et av de mest innovative landene i verden. Viktige faktorer er høyt utdanningsnivå, god digital infrastruktur, sterk offentlig finansiering av forskning, og en flat organisasjonskultur som oppmuntrer alle til å bidra med ideer. Norsk innovasjon er spesielt sterk innen energi (offshore teknologi, vannkraft, havvind), maritim teknologi (autonome skip, oppdrettsteknologi) og helseteknologi. Organisasjoner som Innovasjon Norge og Forskningsrådet støtter innovasjon med finansiering og rådgivning.`,
    },
    {
      id: 'tof1-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et problem du opplever i hverdagen (for eksempel på skolen, i fritiden eller hjemme). Gå gjennom de tre første fasene av designtenkning (empati, definer, ideer) og beskriv:\n\na) Hvem er brukerne, og hva er deres behov?\nb) Hva er den presise problemstillingen?\nc) Lag minst fem ideer til mulige løsninger (uten å vurdere dem)',
        hints: ['Velg et konkret, avgrenset problem. I empatifasen – tenk på hvem som opplever problemet og hva de egentlig trenger. I defineringsfasen – formuler en tydelig setning om hvem, hva og hvorfor. I idéfasen – la kreativiteten flyte fritt, uten sensur!'],
        solution: 'Eksempel (problem: det er vanskelig å finne ledig grupperom på skolen):\n\n**a) Empati – brukere og behov:**\nBrukerne er elever som trenger et rolig sted for gruppearbeid. De opplever frustrasjonen med å gå fra rom til rom for å finne et ledig, bare for å oppdage at alle er opptatt. Noen ganger er rom booket men ikke i bruk, andre ganger brukes de uten booking.\n\n**b) Definer – problemstilling:**\n«VG2-elever som skal jobbe med gruppeprosjekter trenger en enkel måte å finne og reservere ledige grupperom på fordi de i dag bruker for mye tid på å lete og ofte ender med å jobbe i støyende fellesområder.»\n\n**c) Ideer (uten vurdering):**\n1. En app som viser sanntidsstatus for alle grupperom (ledig/opptatt)\n2. Fargede lysdioder utenfor hvert rom (grønn = ledig, rød = opptatt)\n3. Et «drop-in»-system der man bare kan gå rett inn hvis rommet er ledig\n4. Bookingsystem med automatisk frigiving etter 10 minutter hvis ingen møter opp\n5. Flere fleksible arbeidsplasser med skillevegger i fellesarealene\n6. «Stillesoner» i biblioteket med booking per time\n7. En digital tavle i vestibylen med oversikt over alle rom\n\nDette er et godt eksempel på hvordan designtenkning starter med empati for brukeren og deretter åpner for kreative løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Oppfinnelse** er å skape noe nytt; **innovasjon** er å gjøre det til noe som skaper verdi i praksis.
- Innovasjon kan være **inkrementell** (gradvis forbedring), **radikal** (fundamentalt ny) eller **prosessinnovasjon** (nye produksjons-/leveringsmetoder).
- Innovasjon drives av **behov, kunnskap, kreativitet, kultur og ressurser**.
- **Designtenkning** er en menneskesentrert metode med fem faser: empati, definer, ideer, prototype og test.
- Prosessen er **iterativ** – man går frem og tilbake mellom fasene.
- Kreativitet kan trenes og fremmes gjennom **psykologisk trygghet, mangfold, tverrfaglighet og aksept for feil**.
- Kreative teknikker som **brainstorming, tankekart, SCAMPER** og **de seks tenkehattene** kan hjelpe med å generere nye ideer.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I hvilken rekkefølge gjennomføres de fem fasene i designtenkning?',
        options: [
          { id: 'a', text: 'Ideer → Empati → Test → Prototype → Definer', isCorrect: false },
          { id: 'b', text: 'Empati → Definer → Ideer → Prototype → Test', isCorrect: true },
          { id: 'c', text: 'Definer → Ideer → Empati → Test → Prototype', isCorrect: false },
          { id: 'd', text: 'Prototype → Test → Empati → Definer → Ideer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. De fem fasene i designtenkning er: Empati (forstå brukeren), Definer (formulere problemet), Ideer (brainstorme løsninger), Prototype (lage enkle modeller) og Test (teste med brukere). Prosessen er iterativ, men dette er den grunnleggende rekkefølgen.',
      },
    },
    {
      id: 'tof1-3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign inkrementell og radikal innovasjon. Gi to eksempler på hver type og drøft fordeler og ulemper med begge tilnærmingene. Hvilken type innovasjon tror du er viktigst for å løse samfunnets store utfordringer (klimaendringer, ulikhet, helse)? Begrunn svaret ditt.',
        hints: ['Tenk på at inkrementell innovasjon er «tryggere» men gir mindre endring, mens radikal innovasjon er mer risikabel men kan forandre alt. Hva trengs for å løse klimakrisen – små justeringer eller fundamentalt nye løsninger?'],
        solution: 'Et godt svar kan inneholde:\n\n**Inkrementell innovasjon:**\nEksempler: (1) Årlige oppdateringer av smarttelefoner med bedre kamera og raskere prosessor. (2) Forbedringer i bensinmotorens effektivitet som gradvis reduserer drivstofforbruket.\n\nFordeler: Lavere risiko, forutsigbare forbedringer, bygger på kjent teknologi.\nUlemper: Gir bare gradvise forbedringer, kan ikke løse fundamentale problemer.\n\n**Radikal innovasjon:**\nEksempler: (1) Elbilen – fundamentalt ny drivlinje som kan erstatte forbrenningsmotoren helt. (2) CRISPR-genredigering – en helt ny metode for å redigere DNA som kan revolusjonere medisin.\n\nFordeler: Kan løse problemer som inkrementelle forbedringer aldri kan, skaper helt nye muligheter.\nUlemper: Høy risiko for å feile, krever store investeringer, møter ofte motstand.\n\n**Drøfting:**\nFor å løse klimaendringene trenger vi trolig begge deler: Inkrementell innovasjon gjør eksisterende teknologi renere og mer effektiv (bedre solceller, mer effektive bygninger), men radikal innovasjon kan gi gjennombrudd vi trenger (fusjonsenergi, karbonfangst). Historien viser at de største endringene kommer fra radikale innovasjoner, men at inkrementelle forbedringer gjør dem praktisk brukbare. Det optimale er et system som støtter begge – gradvis forbedring av det vi har, kombinert med satsing på radikale nye løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.7: Bærekraftig innovasjon
// ============================================================================

export const CHAPTER_TOF_1_3_7: TextbookChapter = {
  id: 'tof-1-3-7',
  courseId: 'tof-1',
  chapterNumber: '3.7',
  title: 'Bærekraftig innovasjon',
  description: 'Teknologi og bærekraft, sirkulær økonomi og FNs bærekraftsmål.',
  estimatedMinutes: 25,
  competenceGoals: ['vurdere teknologiens rolle i bærekraftig utvikling'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-3-7-intro',
      type: 'text',
      content: `## Bærekraftig innovasjon

Gjennom denne seksjonen har vi sett hvordan teknologi har formet samfunnet gjennom årtusener – fra de første steinverktøyene til kunstig intelligens. Men teknologisk utvikling har også en skyggeside: klimaendringer, ressursuttømming, forurensning og tap av biologisk mangfold. Den industrielle revolusjonen satte i gang en utvikling som nå truer selve livsgrunnlaget vårt.

Spørsmålet for vår generasjon er: Kan teknologi og innovasjon hjelpe oss med å løse de problemene som tidligere teknologi har skapt? I dette kapittelet skal vi se på **bærekraftig innovasjon** – hvordan teknologi, kreativitet og nye forretningsmodeller kan bidra til en mer bærekraftig fremtid, i tråd med **FNs bærekraftsmål**.`,
    },

    // --- BLOKK 1: Bærekraft og FNs bærekraftsmål ---
    {
      id: 'tof1-3-7-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** ble definert av Brundtland-kommisjonen (ledet av Gro Harlem Brundtland) i 1987 som:

*«Utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for kommende generasjoner til å dekke sine behov.»*

Bærekraft har tre dimensjoner som må balanseres:
- **Miljømessig bærekraft:** Bevare naturressurser, redusere forurensning, beskytte biologisk mangfold
- **Sosial bærekraft:** Sikre rettferdighet, helse, utdanning og livskvalitet for alle
- **Økonomisk bærekraft:** Skape verdier og arbeidsplasser uten å tære på natur- eller menneskelige ressurser

Ingen av dimensjonene kan prioriteres på bekostning av de andre – det er **balansen** mellom dem som utgjør bærekraft.`,
    },
    {
      id: 'tof1-3-7-text-1',
      type: 'text',
      content: `### FNs bærekraftsmål (SDG)

I 2015 vedtok FNs medlemsland **17 bærekraftsmål** (Sustainable Development Goals, SDG) som skal nås innen 2030. Målene dekker alt fra fattigdomsbekjempelse til klimatiltak:

**Utvalgte mål med teknologisk relevans:**
- **Mål 7:** Ren energi til alle – utvikling av fornybar energi og energieffektivisering
- **Mål 9:** Industri, innovasjon og infrastruktur – bygge robust infrastruktur og fremme innovasjon
- **Mål 11:** Bærekraftige byer og lokalsamfunn – smarte byer, grønn transport
- **Mål 12:** Ansvarlig forbruk og produksjon – sirkulær økonomi, redusert avfall
- **Mål 13:** Stoppe klimaendringene – utslippsreduksjon, karbonfangst, klimatilpasning

**Teknologiens dobbeltrolle:**
Teknologi er både en del av problemet og en del av løsningen. Den industrielle revolusjonen ga oss velstand, men også klimagassutslipp. Nå trenger vi teknologisk innovasjon for å løse klimakrisen uten å gi avkall på livskvalitet. Dette krever en ny type tenkning – **bærekraftig innovasjon** – der miljøhensyn og samfunnsansvar er integrert i innovasjonsprosessen fra starten.

### Grønn teknologi

**Grønn teknologi** (green tech, cleantech) er teknologier som reduserer miljøbelastningen:
- **Fornybar energi:** Solceller, vindturbiner, vannkraft, bølgekraft, geotermisk energi
- **Energilagring:** Batteriteknologi (litiumion, faststoff-batterier), hydrogenbrenselceller
- **Grønn transport:** Elbiler, elektriske ferger, hydrogen-lastebiler, autonome delebiler
- **Smart bygg:** Passivhus, plusshus, smarte strømnett, varmepumper
- **Karbonfangst og -lagring (CCS):** Teknologi for å fange CO₂ fra utslippskilder og lagre det trygt under bakken`,
    },
    {
      id: 'tof1-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Norsk grønn teknologi – elektriske ferger',
      problem: 'Norge var verdensledende i innføringen av helelektriske ferger. Beskriv hvordan denne teknologien fungerer, og hvorfor den er viktig for bærekraft.',
      solution: `**Bakgrunn:**
Norge har over 100 fergesamband som knytter kystsamfunn sammen. Tradisjonelt har fergene brukt diesel, med store utslipp av CO₂ og annen forurensning.

**Teknologien:**
I 2015 ble **MF Ampere** – verdens første helelektriske bilferge – satt i drift på Sognefjorden. Fergen bruker:
- Store **litiumion-batterier** som lades mellom hver avgang
- **Regenerativ bremsing** som gjenvinner energi under ankomst
- Elektrisitet fra norsk vannkraft – 100 % fornybar

**Resultater:**
- **Utslipp:** Eliminerer alle direkte utslipp (CO₂, NO₅, svovel, partikler)
- **Energi:** Bruker 80 % mindre energi enn en dieselferge
- **Kostnader:** Lavere drivstoff- og vedlikeholdskostnader på sikt
- **Støy:** Betydelig redusert støynivå for passasjerer og lokalsamfunn

**Betydning for bærekraft:**
- Direkte bidrag til **mål 13** (klimatiltak) og **mål 7** (ren energi)
- Norge har vedtatt at alle fergesamband skal elektrifiseres innen 2030
- Norsk teknologi eksporteres til andre land – innovasjonen har global virkning
- Viser at **offentlige krav** (krav om nullutslipp i anbudskonkurranser) kan drive innovasjon

Dette er et eksempel på bærekraftig innovasjon der teknologi, politikk og marked samvirker for å løse et konkret miljøproblem.`,
    },
    {
      id: 'tof1-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre dimensjonene av bærekraftig utvikling?',
        options: [
          { id: 'a', text: 'Teknologisk, digital og biologisk', isCorrect: false },
          { id: 'b', text: 'Lokal, nasjonal og global', isCorrect: false },
          { id: 'c', text: 'Miljømessig, sosial og økonomisk', isCorrect: true },
          { id: 'd', text: 'Fortid, nåtid og fremtid', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Bærekraftig utvikling hviler på tre dimensjoner som må balanseres: miljømessig bærekraft (naturressurser, klima), sosial bærekraft (rettferdighet, helse, utdanning) og økonomisk bærekraft (verdiskaping uten å tære på ressursene). Ingen av dimensjonene kan prioriteres på bekostning av de andre.',
      },
    },

    // --- BLOKK 2: Sirkulær økonomi ---
    {
      id: 'tof1-3-7-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi',
      content: `**Sirkulær økonomi** er et alternativ til den tradisjonelle **lineære økonomien** (ta ut råvarer → produser → bruk → kast). I en sirkulær økonomi designes produkter og systemer slik at materialer og ressurser holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering.

**Lineær økonomi:** Råvarer → Produksjon → Bruk → Avfall (kast)
**Sirkulær økonomi:** Råvarer → Produksjon → Bruk → Gjenbruk/reparasjon → Resirkulering → (tilbake til produksjon)

Hovedprinsippene er:
- **Design for holdbarhet:** Produkter som varer lenger og kan repareres
- **Design for resirkulering:** Materialer som enkelt kan skilles og gjenvinnes
- **Dele- og tjenesteøkonomi:** Leie eller dele i stedet for å eie (bildelingstjenester, abonnementsmodeller)
- **Avfall er en ressurs:** Det som er avfall for én prosess, er råmateriale for en annen`,
    },
    {
      id: 'tof1-3-7-text-2',
      type: 'text',
      content: `### Fra lineær til sirkulær økonomi

Den lineære «ta-bruk-kast»-modellen er ikke bærekraftig. Hvert år produserer verden over 2 milliarder tonn avfall, og vi bruker ressurser som om vi hadde 1,7 jordkloder. Sirkulær økonomi er ikke bare en miljøstrategi – det er også en økonomisk mulighet.

**Eksempler på sirkulær økonomi i praksis:**

| Bransje | Lineær modell | Sirkulær modell |
|---------|--------------|-----------------|
| Klær | Kjøp → bruk → kast (fast fashion) | Reparasjon, gjenbruk, resirkulering av fibre |
| Elektronikk | Kjøp ny → kast gammel | Modulær design, reparasjon, oppgradering |
| Bygg | Riv → bygg nytt | Gjenbruk av byggematerialer, ombruk |
| Mat | Produser → spis → kast rester | Kompostering, biogass, redistribusjon |
| Transport | Kjøp bil → bruk → vrakes | Bildeling, leasing, resirkulering av materialer |

**Teknologiens rolle i sirkulær økonomi:**
- **IoT og sensorer:** Sporer produkter gjennom hele livsløpet, optimaliserer vedlikehold
- **AI:** Sorterer avfall automatisk, optimaliserer resirkuleringsprosesser
- **3D-printing:** Reservedeler kan produseres lokalt etter behov i stedet for å kastes og kjøpes nytt
- **Blokkjede:** Sporbarhet i leverandørkjeder, sertifisering av bærekraftige materialer
- **Digitale plattformer:** Finn.no, Too Good To Go, Fjong (klesbiblio­tek) – teknologi som muliggjør deling og gjenbruk`,
    },
    {
      id: 'tof1-3-7-example-2',
      type: 'example',
      title: 'Eksempel: Fairphone – telefonen designet for bærekraft',
      problem: 'Fairphone er et nederlandsk selskap som produserer smarttelefoner designet for bærekraft og rettferdighet. Beskriv hvordan Fairphone bruker prinsippene for sirkulær økonomi.',
      solution: `**Fairphones tilnærming:**

**1. Etisk innkjøp:**
- Bruker konfliktfrie mineraler (tinn, tantal, wolfram, gull) fra ansvarlige gruver
- Betaler rettferdig lønn til arbeidere i fabrikken

**2. Modulær design:**
- Telefonen er designet slik at brukeren selv kan bytte ut komponenter: skjerm, batteri, kamera, høyttaler
- Reservedeler selges til lave priser
- En sprukket skjerm betyr ikke at hele telefonen kastes – bare skjermen byttes

**3. Holdbarhet:**
- Designet for å vare i 5+ år (mot 2–3 år for vanlige telefoner)
- Programvareoppdateringer garanteres i lang tid

**4. Resirkulering:**
- Retursystem for gamle telefoner
- Materialer gjenvinnes og brukes i nye produkter

**Sammenligning med vanlige telefoner:**

| | Vanlig telefon | Fairphone |
|---|---|---|
| Levetid | 2–3 år | 5+ år |
| Reparerbarhet | Vanskelig/umulig | Enkel, modulær |
| Reservedeler | Sjelden tilgjengelig | Lett tilgjengelig |
| Materialsporing | Ukjent opphav | Dokumentert leverandørkjede |
| Etter bruk | Kastes/e-avfall | Returneres/resirkuleres |

Fairphone viser at det er mulig å lage teknologiprodukter etter sirkulære prinsipper, men selskapet har også utfordringer: høyere pris, mindre produktutvalg og lavere markedsandel enn konkurrentene.`,
    },
    {
      id: 'tof1-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom lineær og sirkulær økonomi. Velg et hverdagsprodukt (for eksempel klær, elektronikk eller matvarer) og beskriv hvordan det i dag behandles i en lineær modell, og hvordan det kunne behandles i en sirkulær modell.',
        hints: ['Tenk på hele livsløpet til produktet: Hvor kommer råvarene fra? Hvordan produseres det? Hvordan brukes det? Hva skjer når du er ferdig med det? Hvordan kunne dette vært annerledes?'],
        solution: 'Et godt svar forklarer begge modellene og gir et konkret eksempel.\n\n**Lineær økonomi:** En «ta-bruk-kast»-modell der råvarer tas ut av naturen, brukes til å produsere varer, forbrukes, og kastes som avfall. Ressurser beveger seg i én retning – fra natur til søppelplass.\n\n**Sirkulær økonomi:** En modell der produkter og materialer holdes i bruk så lenge som mulig gjennom gjenbruk, reparasjon og resirkulering. Målet er å eliminere avfall.\n\n**Eksempel – klær:**\n\nLineær modell:\n- Bomull dyrkes (ofte med mye vann og plantevernmidler) → transporteres til fabrikk → sys til plagg → transporteres til butikk → kjøpes → brukes noen ganger → kastes i søppelet → havner på deponi\n- En gjennomsnittlig nordmann kaster ca. 23 kg klær per år\n- «Fast fashion»-kjedene produserer nye kolleksjoner hver uke\n\nSirkulær modell:\n- Klær designes for holdbarhet og reparerbarhet\n- Brukt klær selges videre (Fretex, Tise) eller leies (klesbibliotek som Fjong)\n- Skadede klær repareres i stedet for å kastes\n- Utslitte klær resirkuleres til nye fibre og nye klær\n- Noen selskaper tar imot brukte klær og gir rabatt på nye (retursystemer)\n\nOvergangen krever endring i design (holdbare materialer), forretningsmodell (leie/gjenbruk) og forbrukeratferd (reparere fremfor kaste).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Bærekraftig utvikling** balanserer tre dimensjoner: miljø, samfunn og økonomi. Definisjonen fra Brundtland-kommisjonen (1987) er fortsatt gjeldende.
- **FNs 17 bærekraftsmål** (SDG) gir en felles ramme for bærekraftig utvikling frem mot 2030.
- Teknologi har en **dobbeltrolle**: den har skapt mange av miljøproblemene, men er også nødvendig for å løse dem.
- **Grønn teknologi** inkluderer fornybar energi, energilagring, grønn transport, smarte bygg og karbonfangst.
- **Sirkulær økonomi** erstatter den lineære «ta-bruk-kast»-modellen med systemer for gjenbruk, reparasjon og resirkulering.
- Teknologi som **IoT, AI, 3D-printing og digitale plattformer** er viktige verktøy for overgangen til sirkulær økonomi.
- Bærekraftig innovasjon krever samspill mellom **teknologi, politikk, forretningsmodeller og forbrukeratferd**.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedprinsippet i sirkulær økonomi?',
        options: [
          { id: 'a', text: 'Å produsere mest mulig til lavest mulig pris', isCorrect: false },
          { id: 'b', text: 'Å holde materialer og ressurser i bruk så lenge som mulig gjennom gjenbruk, reparasjon og resirkulering', isCorrect: true },
          { id: 'c', text: 'Å forby all bruk av naturressurser', isCorrect: false },
          { id: 'd', text: 'Å erstatte alle fysiske produkter med digitale tjenester', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Sirkulær økonomi handler om å holde materialer og produkter i bruk så lenge som mulig gjennom design for holdbarhet, gjenbruk, reparasjon, oppgradering og resirkulering. Målet er å minimere avfall og ressursbruk. Det handler ikke om å produsere mest mulig billig (A), forby ressursbruk (C) eller bare bruke digitale løsninger (D).',
      },
    },
    {
      id: 'tof1-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-3-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I denne seksjonen har vi fulgt teknologiens utvikling fra steinverktøy til kunstig intelligens, og sett at teknologi har en dobbeltrolle: den løser problemer, men skaper også nye. Velg en stor samfunnsutfordring (for eksempel klimaendringer, ressursmangel eller ulikhet) og drøft:\n\na) Hvordan teknologi har bidratt til å skape denne utfordringen\nb) Hvordan bærekraftig innovasjon og nye teknologier kan bidra til å løse den\nc) Hvilke andre faktorer enn teknologi som er nødvendige for å lykkes (politikk, holdninger, forretningsmodeller)\n\nAvslutt med en refleksjon over teknologiens rolle i samfunnet: Er teknologi i seg selv verken god eller dårlig, eller har teknologi en iboende retning?',
        hints: ['Bruk eksempler fra hele seksjonen – fra den industrielle revolusjonen til Industri 4.0. Tenk på at teknologi alene sjelden løser samfunnsproblemer – det krever også politiske beslutninger, endring i forbruksmønstre og nye forretningsmodeller.'],
        solution: 'Eksempel (klimaendringer):\n\n**a) Hvordan teknologi har bidratt til problemet:**\nDen industrielle revolusjonen (kapittel 3.2) innledet massiv forbrenning av kull, og den andre industrielle revolusjon (kapittel 3.3) la til olje og gass. Masseproduksjon og fordisme skapte et forbrukssamfunn der stadig økende konsum er drivkraften i økonomien. Transport, industri og energiproduksjon basert på fossile brensler har ført til økte konsentrasjoner av CO₂ i atmosfæren og global oppvarming.\n\n**b) Hvordan bærekraftig innovasjon kan bidra til løsningen:**\n- Fornybar energi (solceller, vindturbiner, vannkraft) kan erstatte fossil energi\n- Elbiler og elektriske ferger (som Ampere) reduserer transportutslipp\n- AI og IoT kan optimalisere energibruk i bygninger og industri\n- Karbonfangst og -lagring (CCS) kan redusere utslipp fra industrien\n- Sirkulær økonomi kan redusere behovet for energikrevende nyproduksjon\n\n**c) Faktorer utover teknologi:**\n- Politikk: Klimaavtaler (Paris-avtalen), karbonprising, reguleringer og subsidier\n- Forretningsmodeller: Overgang fra salg av produkter til salg av tjenester, deleøkonomi\n- Holdninger og atferd: Endret forbruksmønster, vilje til å velge bærekraftig\n- Internasjonal samarbeid: Klimaendringer er et globalt problem som krever globale løsninger\n- Rettferdighet: Omstillingen må være rettferdig – de som rammes hardest av endringene må ivaretas\n\n**Refleksjon om teknologiens rolle:**\nTeknologi er i utgangspunktet et verktøy – et middel, ikke et mål. Samme teknologi (kjernefysikk) kan brukes til atomvåpen eller karbonfri energi. Men teknologi er heller ikke helt nøytral – den former samfunnet og mulighetene våre på måter som er vanskelige å reversere. Når først bilen og motorveien er oppfunnet, er det vanskelig å gå tilbake. Derfor er det avgjørende at vi som samfunn aktivt styrer teknologisk utvikling i en bærekraftig retning, gjennom bevisste valg om hvilke teknologier vi utvikler, hvordan vi bruker dem, og hvem som har makt over dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 3 (kapittel 3.1–3.7)
// ============================================================================

export const TOF_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_3_1,
  CHAPTER_TOF_1_3_2,
  CHAPTER_TOF_1_3_3,
  CHAPTER_TOF_1_3_4,
  CHAPTER_TOF_1_3_5,
  CHAPTER_TOF_1_3_6,
  CHAPTER_TOF_1_3_7,
];

/**
 * Håndverk, design og produktutvikling VG1 - Del 6
 * Keramikk, tre og metall (kapittel 6.1-6.7)
 *
 * Dekker LK20 kompetansemål for Håndverk, design og produktutvikling VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Keramikk: forming og dreiing
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_1: TextbookChapter = {
  id: 'handverk-design-vg1-6-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.1',
  title: 'Keramikk: forming og dreiing',
  description: 'Innføring i keramiske teknikker som håndforming, dreiing på dreiehjul og platearbeid. Elevene lærer om leiretyper, tørking og grunnleggende formingsmetoder.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-1-intro',
      type: 'text',
      content: `Keramikk er et av menneskets eldste håndverk. I tusenvis av år har vi formet leire til bruksgjenstander og kunstobjekter. Når du arbeider med leire, opplever du en direkte forbindelse mellom hendene dine og materialet. Leiren responderer på berøring, og du kan skape alt fra enkle skåler til komplekse skulpturer. I dette kapittelet lærer du grunnleggende teknikker for forming og dreiing av keramikk.`,
    },
    {
      id: 'handverk-design-vg1-6-1-def-1',
      type: 'definition',
      title: 'Keramikk',
      content: `Keramikk er produkter laget av leire som har blitt brent ved høy temperatur. Brenningen gjør at leiren gjennomgår en kjemisk forandring og blir hard og varig. Ordet keramikk kommer fra det greske "keramos" som betyr leire eller pottemakervarer.`,
    },
    {
      id: 'handverk-design-vg1-6-1-text-1',
      type: 'text',
      content: `**Leiretyper og deres egenskaper**

Det finnes flere typer leire med ulike egenskaper. Valg av leiretype avhenger av hva du skal lage og hvilken brennetemperatur du har tilgang til.

**Terrakotta (rødleire)**
- Lav brennetemperatur (900-1100°C)
- Rødlig farge fra jerninnhold
- Porøs etter brenning
- Tradisjonelt brukt til blomsterpotter og dekorative gjenstander
- Rimelig og lett å arbeide med

**Steingods**
- Middels til høy brennetemperatur (1200-1300°C)
- Tett og vanntett etter brenning
- Robust og holdbar
- Brukes til servise, vaser og brukskeramikk
- Finnes i flere farger

**Porselen**
- Høyest brennetemperatur (1260-1400°C)
- Hvit og finkornet
- Kan bli gjennomskinnelig
- Krever presisjon og erfaring
- Brukes til finservise og kunstkeramikk`,
    },
    {
      id: 'handverk-design-vg1-6-1-def-2',
      type: 'definition',
      title: 'Plastisitet',
      content: `Plastisitet er leirens evne til å la seg forme uten å sprekke eller gå i oppløsning. En leire med god plastisitet holder formen godt og er behagelig å arbeide med. Plastisiteten påvirkes av leirens sammensetning og fuktighetsinnhold.`,
    },
    {
      id: 'handverk-design-vg1-6-1-text-2',
      type: 'text',
      content: `**Håndformingsteknikker**

**Knapeteknikk (pinch)**
Den enkleste formingsteknikken. Du starter med en leireklump og former den ved å klemme med tommelen innvendig og fingrene utvendig.
- Perfekt for nybegynnere
- Gir organiske, ujevne former
- Egner seg til små skåler og kopper

**Pølseteknikk (coiling)**
Du ruller leiren til lange pølser som legges oppå hverandre i ringer.
- Byggmetode for større former
- Gir god kontroll over formen
- Kan lage både sylindriske og organiske former
- Innersiden glattes for styrke

**Plateteknikk (slab building)**
Leiren rulles ut til flate plater som skjæres og settes sammen.
- Egner seg til kantete former
- Krever nøyaktighet og planlegging
- Brukes til bokser, fat og arkitektoniske former
- Sammenføyes med slip (flytende leire)`,
    },
    {
      id: 'handverk-design-vg1-6-1-def-3',
      type: 'definition',
      title: 'Slip',
      content: `Slip er flytende leire som brukes som "lim" for å feste leirestykker sammen. Slip lages ved å blande leire med vann til en kremaktig konsistens. For at slip skal feste godt, må begge overflatene risses opp og fuktes før slip påføres.`,
    },
    {
      id: 'handverk-design-vg1-6-1-text-3',
      type: 'text',
      content: `**Dreiing på dreiehjul**

Dreiing er en teknikk der leiren formes mens den roterer på et dreiehjul. Dette krever øvelse, men gir mulighet til å lage symmetriske former raskt.

**Forberedelse**
1. Kna leiren godt for å fjerne luftbobler
2. Form leiren til en kule
3. Kast kulen hardt ned på dreiehjulet for feste

**Sentrering**
Dette er det vanskeligste trinnet. Leiren må plasseres nøyaktig i senter av hjulet.
- Fukt hendene
- Press inn mot midten med håndflaten
- Bruk begge hender for jevnt trykk
- Leiren skal rotere uten å vippe

**Åpning**
Når leiren er sentrert, trykker du tommelen ned i midten for å lage en åpning.

**Opptrekking**
- Press innenfra og utenfra samtidig
- Løft veggene jevnt oppover
- Hold jevnt trykk gjennom hele rotasjonen
- Arbeid sakte og kontrollert`,
    },
    {
      id: 'handverk-design-vg1-6-1-text-4',
      type: 'text',
      content: `**Tørking av keramikk**

Riktig tørking er avgjørende for å unngå sprekker og deformasjoner.

**Tørkefaser**
1. **Lærhard fase**: Leiren er fast nok til å håndteres, men fortsatt fuktig
2. **Beinhard fase**: Leiren er helt tørr og klar for brenning

**Tips for jevn tørking**
- Dekk til arbeidet med plast for langsom tørking
- Snu arbeidet regelmessig
- Unngå trekk og direkte varme
- Tykkere deler trenger lengre tid
- Sørg for at bunnen tørker like raskt som veggene

**Vanlige feil**
- For rask tørking gir sprekker
- Ujevn tykkelse gir skjev tørking
- Luftbobler i leiren kan forårsake eksplosjoner under brenning`,
    },
    {
      id: 'handverk-design-vg1-6-1-tip-1',
      type: 'tip',
      title: 'Førstegangstips for dreiing',
      content: `Ikke bli frustrert om sentrering tar tid å mestre. De fleste bruker mange timer før de får det til. Start med mye leire (minst 500 gram) - det er lettere å sentrere enn små mengder. Hold armene støttet mot kroppen for stabilitet, og arbeid med jevn fart på hjulet.`,
    },
    {
      id: 'handverk-design-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Lage en skål med pølseteknikk',
      problem: 'Du skal lage en skål med diameter 15 cm og høyde 8 cm.',
      solution: `**Fremgangsmåte:**

1. **Bunn**: Rull ut en plate ca. 1 cm tykk. Skjær ut en sirkel med diameter 12 cm.

2. **Pølser**: Rull jevne pølser med tykkelse ca. 1,5 cm.

3. **Første ring**: Riss opp kanten på bunnen, påfør slip, legg på første pølse.

4. **Bygging**: Legg pølse på pølse, riss og slip mellom hver. La veggen helle litt utover for å øke diameteren.

5. **Glatting**: Glatt innersiden for styrke. Utsiden kan glattes eller beholde pølsestrukturen.

6. **Tørking**: Dekk til med plast og la tørke langsomt i 3-5 dager.`,
    },
    {
      id: 'handverk-design-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken leiretype har høyest brennetemperatur?',
        options: ['Terrakotta', 'Steingods', 'Porselen', 'Rødleire'],
        correctAnswer: 'Porselen',
        solution: 'Porselen brenner ved 1260-1400°C, som er den høyeste temperaturen blant vanlige leiretyper.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva slip er og hvorfor det er viktig i keramisk arbeid.',
        solution: 'Slip er flytende leire som brukes som lim for å feste leirestykker sammen. Det er viktig fordi leire ikke fester godt til leire uten slip. For best resultat risses begge overflatene opp og fuktes før slip påføres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de tre grunnleggende håndformingsteknikkene og når hver egner seg best.',
        solution: 'Knapeteknikk (pinch): Enkel teknikk der du klemmer leiren med fingrene, egner seg til små skåler. Pølseteknikk (coiling): Pølser legges i ringer, egner seg til større former og kar. Plateteknikk (slab): Flate plater settes sammen, egner seg til kantete former som bokser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er det vanskeligste trinnet ved dreiing på dreiehjul?',
        options: ['Kna leiren', 'Sentrering', 'Åpning', 'Opptrekking'],
        correctAnswer: 'Sentrering',
        solution: 'Sentrering er det vanskeligste trinnet fordi leiren må plasseres nøyaktig i senter av hjulet for at den skal rotere jevnt.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig med langsom og jevn tørking av keramikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kan skje ved for rask tørking?',
            solution: 'For rask tørking gir sprekker fordi utsiden tørker raskere enn innsiden, noe som skaper spenninger i materialet.',
          },
          {
            label: 'b',
            task: 'Hvordan kan du sikre jevn tørking?',
            solution: 'Dekk til med plast, snu arbeidet regelmessig, unngå trekk og direkte varme, og sørg for jevn veggtykkelse.',
          },
        ],
        solution: 'Langsom, jevn tørking forhindrer sprekker og deformasjoner. Ujevn tørking skaper spenninger som kan ødelegge arbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Keramikk', definition: 'Produkter laget av leire som er brent ved høy temperatur' },
    { term: 'Plastisitet', definition: 'Leirens evne til å la seg forme uten å sprekke' },
    { term: 'Slip', definition: 'Flytende leire som brukes som lim mellom leirestykker' },
    { term: 'Terrakotta', definition: 'Rødlig leire med lav brennetemperatur, porøs etter brenning' },
    { term: 'Steingods', definition: 'Robust leiretype som blir tett og vanntett etter brenning' },
    { term: 'Porselen', definition: 'Finkornet, hvit leire med høyest brennetemperatur' },
    { term: 'Sentrering', definition: 'Å plassere leiren nøyaktig i senter av dreiehjulet' },
    { term: 'Lærhard', definition: 'Tørkefase der leiren er fast men fortsatt fuktig' },
  ],
};

// ============================================================================
// Kapittel 6.2: Glasering og brenning av keramikk
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_2: TextbookChapter = {
  id: 'handverk-design-vg1-6-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.2',
  title: 'Glasering og brenning av keramikk',
  description: 'Kunnskap om glasurer, dekor og brenneteknikker for keramiske produkter. Elevene lærer om glasursammensetning, påføringsmetoder og ulike brenningstemperaturer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og fordype seg i teknikker og materialer i selvvalgte interesseområder',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-2-intro',
      type: 'text',
      content: `Glasering og brenning forvandler den skjøre, tørre leiren til holdbar keramikk. Glasuren gir ikke bare farge og glans, men gjør også keramikken vanntett og hygienisk. Brenningsprosessen er der magien skjer - leiren gjennomgår en permanent kjemisk forandring og blir til keramikk. I dette kapittelet lærer du om glasurtyper, påføringsteknikker og brenningsprosessen.`,
    },
    {
      id: 'handverk-design-vg1-6-2-def-1',
      type: 'definition',
      title: 'Glasur',
      content: `Glasur er et tynt glasslag som smelter på keramikkens overflate under brenning. Glasuren består hovedsakelig av silika (glass), fluss (senker smeltetemperaturen) og alumina (gir viskositet). Ulike tilsetninger gir forskjellige farger og effekter.`,
    },
    {
      id: 'handverk-design-vg1-6-2-text-1',
      type: 'text',
      content: `**Glasurtyper**

**Etter overflate**
- **Blank glasur**: Gir skinnende, reflekterende overflate
- **Matt glasur**: Gir dempet, ikke-reflekterende overflate
- **Sateng glasur**: Mellomting med svak glans

**Etter brennetemperatur**
- **Lavtemperatur** (900-1100°C): Sterke, klare farger
- **Middeltemperatur** (1200-1260°C): Balanse mellom farger og holdbarhet
- **Høytemperatur** (1260-1400°C): Dempede farger, meget holdbar

**Spesialglasurer**
- **Krakeléglasur**: Gir nettverk av fine sprekker
- **Krystallglasur**: Danner krystallmønstre
- **Redusjonsglasur**: Gir spesielle farger i oksygenfattig ovn
- **Askglasur**: Tradisjonell glasur laget med treaska`,
    },
    {
      id: 'handverk-design-vg1-6-2-def-2',
      type: 'definition',
      title: 'Skrøytbrenning',
      content: `Skrøytbrenning (også kalt råbrenning eller biskuitbrenning) er den første brenningen av keramikk, vanligvis ved 900-1000°C. Formålet er å gjøre leiren hard nok til å håndtere og glasere, samtidig som den forblir porøs nok til å absorbere glasur.`,
    },
    {
      id: 'handverk-design-vg1-6-2-text-2',
      type: 'text',
      content: `**Påføring av glasur**

**Dyppeglasur**
- Arbeidet dyppes i glasurbad
- Raskeste metode for jevn dekning
- Krever nok glasur til å dekke arbeidet
- Hold arbeidet med tang eller fingrene

**Penselglasur**
- Glasuren påføres med pensel
- Gir god kontroll over dekor og mønstre
- Krever flere strøk for jevn dekning
- Egner seg til detaljert arbeid

**Sprøyteglasur**
- Glasuren sprøytes på med pistol
- Gir jevn, gradert overflate
- Krever avtrekkskap og verneutstyr
- Profesjonell teknikk

**Helle-teknikk**
- Glasuren helles over arbeidet
- Gir interessante dryppeffekter
- Egner seg til organiske former

**Tips for glasering**
- Rør glasuren godt før bruk
- Unngå for tykke lag (kan renne)
- Fjern glasur fra bunnen (fester seg til hylle)
- Test på prøvestykker først`,
    },
    {
      id: 'handverk-design-vg1-6-2-text-3',
      type: 'text',
      content: `**Brenningsprosessen**

**To brenninger**
De fleste keramikere bruker to brenninger:
1. **Skrøytbrenning** (900-1000°C): Gjør leiren hard og porøs
2. **Glasurbrenning** (temperatur avhenger av glasur og leire)

**Brenningsfaser**
1. **Oppvarming** (0-100°C): Restvann fordamper
2. **Vannfri fase** (100-600°C): Kjemisk bundet vann frigjøres
3. **Kvarts-inversjon** (573°C): Kritisk punkt - krever langsom passering
4. **Sintring** (900°C+): Leiren blir keramikk
5. **Glasursmelting**: Glasuren smelter og modnes
6. **Nedkjøling**: Langsom for å unngå sprekker

**Temperaturkurve**
- Start sakte (100°C/time) til 600°C
- Kan øke hastigheten til glasurtemperatur
- Hold temperatur for glasurmodning
- Nedkjøling tar minst like lang tid som oppvarming`,
    },
    {
      id: 'handverk-design-vg1-6-2-text-4',
      type: 'text',
      content: `**Keramikkovner**

**Elektriske ovner**
- Vanligst i skoler og hobbylokaler
- Enkle å bruke og kontrollere
- Gir oksiderende atmosfære
- Finnes i mange størrelser

**Gassovner**
- Kan gi både oksiderende og reduserende atmosfære
- Brukes for spesielle glasureffekter
- Krever mer erfaring

**Sikkerhet ved brenning**
- Aldri åpne ovnen under brenning
- Vent til temperaturen er under 100°C før åpning
- Sørg for god ventilasjon
- Følg produsentens anvisninger
- Bruk keramikkhyller og staver korrekt`,
    },
    {
      id: 'handverk-design-vg1-6-2-tip-1',
      type: 'tip',
      title: 'Testbrikker',
      content: `Lag alltid testbrikker med samme leire som hovedarbeidet. Påfør glasuren på samme måte og brenn sammen med arbeidet. Slik vet du hvordan glasuren blir før du glaserer viktige arbeider.`,
    },
    {
      id: 'handverk-design-vg1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Glasere en kopp',
      problem: 'Du skal glasere en skrøytbrent kopp med blank glasur.',
      solution: `**Fremgangsmåte:**

1. **Forberedelse**: Tørk av støv fra koppen. Rør glasuren godt.

2. **Innside først**: Hold koppen opp ned, hell glasur inni og roter for jevn dekning. Tøm ut overflødig glasur.

3. **Utside**: Dypp koppen i glasurbadet, hold i kanten av foten. Trekk rett opp.

4. **Opprydding**: Tørk av glasur fra bunnen med en fuktig svamp. La tørke.

5. **Brenning**: Plasser på keramikkhylle og brenn ved glasurens temperatur.

**Resultat**: Blank, jevn overflate som er vanntett og trygg for mat.`,
    },
    {
      id: 'handverk-design-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er formålet med skrøytbrenning?',
        options: [
          'Smelte glasuren',
          'Gjøre leiren hard og porøs for glasering',
          'Gi keramikken farge',
          'Tørke leiren',
        ],
        correctAnswer: 'Gjøre leiren hard og porøs for glasering',
        solution: 'Skrøytbrenning gjør leiren hard nok til å håndtere, men porøs nok til å absorbere glasur.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom blank, matt og sateng glasur.',
        solution: 'Blank glasur gir en skinnende, reflekterende overflate. Matt glasur gir en dempet overflate uten refleksjon. Sateng glasur er en mellomting med svak glans, verken helt blank eller helt matt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig med langsom oppvarming gjennom 573°C?',
        solution: 'Ved 573°C skjer kvarts-inversjon, en strukturendring i kvartspartiklene i leiren. Denne endringen skjer plutselig og kan forårsake sprekker hvis temperaturen endres for raskt. Langsom passering gir partiklene tid til å tilpasse seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn fire ulike metoder for å påføre glasur og beskriv kort hver metode.',
        solution: 'Dypping: Arbeidet dyppes i glasurbad, raskeste metode. Pensling: Glasur påføres med pensel, god kontroll over dekor. Sprøyting: Glasur sprøytes på med pistol, gir jevn overflate. Helling: Glasur helles over arbeidet, gir interessante dryppeffekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Glasur', definition: 'Tynt glasslag som smelter på keramikkens overflate under brenning' },
    { term: 'Skrøytbrenning', definition: 'Første brenning ved 900-1000°C som gjør leiren hard og porøs' },
    { term: 'Glasurbrenning', definition: 'Andre brenning der glasuren smelter og keramikken blir ferdig' },
    { term: 'Kvarts-inversjon', definition: 'Kritisk temperaturpunkt ved 573°C der kvarts endrer struktur' },
    { term: 'Oksiderende atmosfære', definition: 'Brenningsmiljø med normal oksygentilgang' },
    { term: 'Reduserende atmosfære', definition: 'Brenningsmiljø med begrenset oksygen, gir spesielle farger' },
  ],
};

// ============================================================================
// Kapittel 6.3: Trearbeid: grunnleggende teknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_3: TextbookChapter = {
  id: 'handverk-design-vg1-6-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.3',
  title: 'Trearbeid: grunnleggende teknikker',
  description: 'Opplæring i grunnleggende trearbeidsteknikker som saging, høvling, filing og sammenføyning. Elevene lærer om ulike tresorter og deres egenskaper for ulike bruksformål.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-3-intro',
      type: 'text',
      content: `Tre er et levende materiale som mennesker har arbeidet med i tusenvis av år. Hver tresort har sin egen karakter - farge, struktur, hardhet og lukt. Å mestre grunnleggende trearbeidsteknikker gir deg mulighet til å skape alt fra enkle bruksgjenstander til avanserte møbler. I dette kapittelet lærer du de fundamentale teknikkene som danner grunnlaget for alt trearbeid.`,
    },
    {
      id: 'handverk-design-vg1-6-3-def-1',
      type: 'definition',
      title: 'Fiberretning',
      content: `Fiberretning er retningen treets fibre går i. Å arbeide med fiberretningen gir glattere overflater og krever mindre kraft. Å arbeide mot fiberretningen kan gi ru overflater og splintring. Fiberretningen er synlig som striper eller linjer i treet.`,
    },
    {
      id: 'handverk-design-vg1-6-3-text-1',
      type: 'text',
      content: `**Tresorter og deres egenskaper**

**Myke tresorter (bartrær)**

**Furu**
- Lett å bearbeide
- Relativt myk
- Rimelig pris
- Markert struktur med kvister
- Brukes til: Møbler, konstruksjon, kasser

**Gran**
- Lysere enn furu
- Jevnere struktur
- God for konstruksjon
- Brukes til: Innredning, lister, panel

**Harde tresorter (løvtrær)**

**Bjørk**
- Lys, fin overflate
- Hardere enn bartrær
- Tar beis godt
- Brukes til: Møbler, finér, gulv

**Eik**
- Meget hard og slitesterk
- Vakker årestruktur
- Dyrere
- Brukes til: Kvalitetsmøbler, gulv, båter

**Ask**
- Fleksibel og seig
- Synlig årestruktur
- God slagfasthet
- Brukes til: Verktøyhåndtak, sportsutstyr`,
    },
    {
      id: 'handverk-design-vg1-6-3-def-2',
      type: 'definition',
      title: 'Sagsnitt',
      content: `Sagsnitt refererer til hvordan treet er skåret fra stokken. Vanlige snitt er tangensialt (gir flammemønster) og radialt/kvartersaget (gir rett åring, mer stabilt). Snittypen påvirker treets utseende og hvordan det beveger seg med fuktighet.`,
    },
    {
      id: 'handverk-design-vg1-6-3-text-2',
      type: 'text',
      content: `**Saging**

**Håndsager**
- **Grovtannet sag**: For raske, grove kutt på langs av fiberretningen
- **Fintannet sag**: For presise kutt på tvers av fiberretningen
- **Stikksag**: For buede kutt og utskjæringer

**Sageteknikk**
1. Merk opp kuttet med blyant og vinkel
2. Fest arbeidsstykket godt
3. Start med lette drag for å lage et spor
4. Sag med lange, jevne drag
5. Bruk hele sagbladet
6. La saga gjøre jobben - ikke press
7. Støtt opp avkappet for å unngå splintring

**Maskinsager**
- **Bordsirkelsag**: For rette langsgående kutt
- **Kapp-/geringssag**: For presise tverrkutt og vinkler
- **Båndsag**: For buede kutt og tykkere materiale
- **Stikksag (elektrisk)**: For buede kutt i plater`,
    },
    {
      id: 'handverk-design-vg1-6-3-text-3',
      type: 'text',
      content: `**Høvling og pussing**

**Høvling**
Høvelen brukes til å jevne overflater og justere tykkelser.

**Høveltyper**
- **Pusshøvel**: Kort høvel for finpuss og endekorn
- **Skrubbhøvel**: For grov avretting
- **Langhøvel**: For å rette lange flater

**Høvelteknikk**
1. Kontroller at jernet er skarpt og riktig justert
2. Hold høvelen med begge hender
3. Press ned i starten av draget
4. Jevnt trykk gjennom draget
5. Løft av i slutten
6. Arbeid alltid med fiberretningen

**Sliping og pussing**
- Start med grovt sandpapir (60-80 korn)
- Arbeid deg gradvis finere (120, 180, 240)
- Puss alltid med fiberretningen
- Fjern støv mellom hvert korn
- Fukt overflaten før siste puss for å reise fibrene`,
    },
    {
      id: 'handverk-design-vg1-6-3-text-4',
      type: 'text',
      content: `**Sammenføyninger**

**Limte forbindelser**
- **Kantliming**: Lime bord kant mot kant
- **Flateliming**: Lime flater mot hverandre
- Bruk trelim (PVA eller polyuretan)
- Klem sammen mens limet tørker

**Mekaniske forbindelser**
- **Skruer**: Rask og sterk, synlige
- **Spiker**: Tradisjonell, mindre styrke
- **Treplugger**: Usynlig, tradisjonell

**Tappforbindelser**
- **Enkel tapp**: Tapp inn i hull
- **Sinketapp**: For hjørner, meget sterk
- **Slissing og fjær**: For paneler og bordplater
- **Halvved**: Overlappende halveringer

**Tips for sterke forbindelser**
- Flater må være rene og plane
- Riktig mengde lim - ikke for mye
- Tilstrekkelig klemmetid
- Kontroller vinkler før limet tørker`,
    },
    {
      id: 'handverk-design-vg1-6-3-tip-1',
      type: 'tip',
      title: 'Skarpe verktøy',
      content: `Skarpe verktøy er tryggere og gir bedre resultat enn sløve. Et sløvt verktøy krever mer kraft og glir lettere. Lær å slipe høveljern og stemjern, og hold sagblader i god stand.`,
    },
    {
      id: 'handverk-design-vg1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Lage en enkel skjærefjøl',
      problem: 'Du skal lage en skjærefjøl av eik, 30 x 20 cm.',
      solution: `**Materialer**: Eikebord, 20 mm tykt

**Fremgangsmåte:**
1. **Oppmåling**: Merk opp 30 x 20 cm med vinkel og blyant

2. **Saging**: Sag ut formen med fintannet sag eller bordsirkelsag

3. **Høvling**: Høvl kantene jevne med fiberretningen

4. **Forming**: Rund av hjørnene med rasp eller pussekloss

5. **Sliping**: Puss med 80, 120, 180 og 240 korn

6. **Finish**: Påfør matvaresikker olje (f.eks. mineralolje eller valnøttolje)

**Tips**: Eik tåler fuktighet godt og er naturlig antibakteriell.`,
    },
    {
      id: 'handverk-design-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken tresort er kjent for å være meget hard og slitesterk med vakker årestruktur?',
        options: ['Furu', 'Gran', 'Bjørk', 'Eik'],
        correctAnswer: 'Eik',
        solution: 'Eik er meget hard og slitesterk med vakker årestruktur. Den brukes til kvalitetsmøbler, gulv og båter.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva fiberretning er og hvorfor den er viktig ved trearbeid.',
        solution: 'Fiberretning er retningen treets fibre går i, synlig som striper i treet. Det er viktig fordi arbeid med fiberretningen gir glattere overflater og krever mindre kraft, mens arbeid mot fiberretningen kan gi ru overflater og splintring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv riktig sageteknikk med håndsag.',
        solution: 'Merk opp kuttet, fest arbeidsstykket, start med lette drag for å lage spor, sag med lange jevne drag, bruk hele sagbladet, la saga gjøre jobben uten å presse, og støtt opp avkappet for å unngå splintring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom myke og harde tresorter? Gi eksempler.',
        solution: 'Myke tresorter kommer fra bartrær (furu, gran) og er lettere å bearbeide men mindre slitesterke. Harde tresorter kommer fra løvtrær (bjørk, eik, ask) og er hardere, mer slitesterke men vanskeligere å bearbeide.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre typer sammenføyninger og forklar når hver egner seg best.',
        solution: 'Limte forbindelser: Egner seg for store flater og kantliming. Skruer: Egner seg for raske, sterke forbindelser som kan demonteres. Tappforbindelser (sinketapp): Egner seg for hjørner i møbler, gir meget sterk og vakker forbindelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'I hvilken rekkefølge bør du slipe tre?',
        options: [
          '240, 180, 120, 80 (fint til grovt)',
          '80, 120, 180, 240 (grovt til fint)',
          '120, 80, 240, 180 (tilfeldig)',
          '180, 240, 80, 120 (medium først)',
        ],
        correctAnswer: '80, 120, 180, 240 (grovt til fint)',
        solution: 'Du bør alltid starte med grovt sandpapir og gradvis gå til finere korn. Dette fjerner først de store ujevnhetene og polerer deretter overflaten glatt.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fiberretning', definition: 'Retningen treets fibre går i, viktig for bearbeiding' },
    { term: 'Sagsnitt', definition: 'Hvordan treet er skåret fra stokken, påvirker utseende og stabilitet' },
    { term: 'Høvling', definition: 'Teknikk for å jevne overflater og justere tykkelser med høvel' },
    { term: 'Sinketapp', definition: 'Sterk tappforbindelse for hjørner, tradisjonell snekkerteknikk' },
    { term: 'Bartre', definition: 'Nåletrær som furu og gran, gir mykt trevirke' },
    { term: 'Løvtre', definition: 'Trær med blader som eik og bjørk, gir hardt trevirke' },
    { term: 'PVA-lim', definition: 'Vanlig trelim som tørker gjennomsiktig' },
  ],
};

// ============================================================================
// Kapittel 6.4: Treskjæring og dekorativ trebearbeiding
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_4: TextbookChapter = {
  id: 'handverk-design-vg1-6-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.4',
  title: 'Treskjæring og dekorativ trebearbeiding',
  description: 'Fordypning i treskjæring og andre dekorative teknikker for trebearbeiding. Elevene lærer om tradisjonelle skjæremønstre, verktøybruk og sikkerhet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere og anvende tradisjonelle teknikker for å gjenskape tradisjonelle håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-4-intro',
      type: 'text',
      content: `Treskjæring er en eldgammel kunstform som finnes i alle kulturer. I Norge har vi en rik tradisjon med utskåret dekor på bygninger, møbler og bruksgjenstander. Rosemaling og treskurd hører sammen, og begge er viktige deler av vår kulturarv. I dette kapittelet lærer du grunnleggende skjæreteknikker og blir kjent med tradisjonelle mønstre.`,
    },
    {
      id: 'handverk-design-vg1-6-4-def-1',
      type: 'definition',
      title: 'Treskurd',
      content: `Treskurd er den norske betegnelsen for tradisjonell treskjæring. Treskurd omfatter ulike teknikker som karveskurd (geometriske mønstre), flatskurd (relieff) og gjennombrutt skurd. Tradisjonelt ble treskurd brukt på alt fra bygninger til bruksgjenstander.`,
    },
    {
      id: 'handverk-design-vg1-6-4-text-1',
      type: 'text',
      content: `**Verktøy for treskjæring**

**Kniver**
- **Sløydkniv**: Allsidig kniv for generell skjæring
- **Skjekniv (krokkniv)**: For å skjære ut hulrom, som i skjeer
- **Tollekniv**: Tradisjonell norsk kniv med kort blad

**Stemjern**
- **Rette stemjern**: For flate snitt og opprydding
- **Bue stemjern (halvrundt)**: For buede snitt
- **V-stemjern**: For linjer og fine detaljer
- **Skuff stemjern**: For hulrom

**Annet utstyr**
- **Slipestein**: For å holde verktøy skarpe
- **Treknall**: For å banke på stemjern
- **Skrustikke**: For å holde arbeidsstykket
- **Forkle og vernehansker**: For sikkerhet`,
    },
    {
      id: 'handverk-design-vg1-6-4-def-2',
      type: 'definition',
      title: 'Karveskurd',
      content: `Karveskurd er en tradisjonell skjæreteknikk der mønstre skjæres ned i treoverflaten med vinklete kutt. Typiske mønstre er geometriske former som trekanter, firkanter og rosetter. Karveskurd finnes over hele verden, men har særlig sterke tradisjoner i Skandinavia.`,
    },
    {
      id: 'handverk-design-vg1-6-4-text-2',
      type: 'text',
      content: `**Grunnleggende skjæreteknikker**

**Stoppkutt**
Et vertikalt kutt som stopper andre kutt fra å fortsette.
1. Hold kniven loddrett
2. Trykk rett ned i treet
3. Kuttet definerer hvor andre kutt skal stoppe

**Skrå kutt**
Kutt i vinkel for å fjerne materiale.
1. Hold kniven i vinkel (ca. 45°)
2. Før kniven mot stoppkuttet
3. Materialet løsner som en flis

**V-kutt**
To skrå kutt som møtes og danner en V-formet renne.
1. Lag stoppkutt i midten
2. Skrå kutt fra hver side
3. Juster dybden for bredere eller smalere V

**Sirkelkutt**
For å skjære buer og sirkler.
1. Bruk en bue stemjern
2. Drei kniven/jernet mens du kutter
3. Arbeid mot fiberretningen for rent kutt`,
    },
    {
      id: 'handverk-design-vg1-6-4-text-3',
      type: 'text',
      content: `**Tradisjonelle mønstre**

**Geometrisk mønster**
- Trekantmønster (karveskurd)
- Flettemønster
- Rosetter
- Sikksakklinjer

**Akantus**
Bladmotiv inspirert av middelhavsplanter. Meget populært i barokken og rokokkoen. Kjennetegnes av:
- Svungne blader
- Dyp relieffskjæring
- Ofte kombinert med andre motiver

**Drageornamentikk**
Vikingtidens stiliserte dyremotiver:
- Sammenflettet dyremønster
- Symmetriske komposisjoner
- Finnes på stavkirker og vikingskip

**Roser og blomster**
- Inspirert av rosemaling
- Stiliserte blomstermotiver
- Ofte i kombinasjon med bladmønstre`,
    },
    {
      id: 'handverk-design-vg1-6-4-text-4',
      type: 'text',
      content: `**Sikkerhet ved treskjæring**

**Knivgrep**
- Hold alltid kniven slik at den skjærer bort fra kroppen
- Bruk tommelen som støtte, ikke som skyvearm
- Ha kontroll på bladet til enhver tid

**Stemjernbruk**
- Fest arbeidsstykket godt
- Hold aldri hånden foran bladet
- Skjær små mengder om gangen
- Bruk treknall, ikke hammer med stålhode

**Generelle regler**
- Skarpe verktøy er tryggere enn sløve
- Rydd vekk avkapp regelmessig
- God belysning er viktig
- Ta pauser for å unngå tretthet
- Bruk vernehansker på hånden som holder arbeidet`,
    },
    {
      id: 'handverk-design-vg1-6-4-tip-1',
      type: 'tip',
      title: 'Trevalg for skjæring',
      content: `Lind er det beste treet for nybegynnere - det er mykt, ensartet og lett å skjære. Bjørk og lønn er også gode valg. Unngå furu i starten fordi den er for myk og kan flise seg. Eik er for hard for nybegynnere.`,
    },
    {
      id: 'handverk-design-vg1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Skjære et enkelt trekantmønster',
      problem: 'Du skal skjære et tradisjonelt karveskurdmønster med trekanter.',
      solution: `**Materialer**: Lindebord, skjærekniv, linjal, blyant

**Fremgangsmåte:**

1. **Opprissing**: Tegn et rutenett med 2 cm ruter. Marker midtpunktet i hver rute.

2. **Stoppkutt**: Lag stoppkutt fra hvert hjørne til midtpunktet (tre kutt per trekant).

3. **Skrå kutt**: Fra hver side av trekanten, skjær inn mot stoppkuttet i 45° vinkel.

4. **Frigjøring**: Trekantflisene løsner. Rydd opp med knivspissen.

5. **Repetisjon**: Gjenta for alle trekanter i mønsteret.

**Tips**: Arbeid systematisk og gjør alle stoppkutt først, deretter alle skrå kutt.`,
    },
    {
      id: 'handverk-design-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken tresort anbefales for nybegynnere i treskjæring?',
        options: ['Eik', 'Furu', 'Lind', 'Ask'],
        correctAnswer: 'Lind',
        solution: 'Lind er beste valg for nybegynnere fordi det er mykt, ensartet og lett å skjære uten å flise seg.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva karveskurd er og nevn typiske mønstre.',
        solution: 'Karveskurd er en tradisjonell skjæreteknikk der mønstre skjæres ned i treoverflaten med vinklete kutt. Typiske mønstre er geometriske former som trekanter, firkanter, rosetter og flettemønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de tre grunnleggende skjærekuttene: stoppkutt, skrå kutt og V-kutt.',
        solution: 'Stoppkutt: Vertikalt kutt som stopper andre kutt. Skrå kutt: Kutt i vinkel (ca. 45°) mot stoppkuttet for å fjerne materiale. V-kutt: To skrå kutt som møtes og danner en V-formet renne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn minst fem sikkerhetsregler for treskjæring.',
        solution: 'Skjær alltid bort fra kroppen, hold ikke hånden foran bladet, fest arbeidsstykket godt, bruk skarpe verktøy, rydd vekk avkapp, sørg for god belysning, ta pauser, bruk vernehansker på hånden som holder arbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Treskurd', definition: 'Norsk tradisjonell treskjæring med ulike teknikker' },
    { term: 'Karveskurd', definition: 'Skjæreteknikk med geometriske mønstre skåret ned i overflaten' },
    { term: 'Akantus', definition: 'Dekorativt bladmotiv brukt i barokk og rokokko' },
    { term: 'Stoppkutt', definition: 'Vertikalt kutt som definerer hvor andre kutt skal stoppe' },
    { term: 'Stemjern', definition: 'Skjæreverktøy med ulike bladformer for treskjæring' },
    { term: 'Relieff', definition: 'Utskåret motiv som hever seg fra bakgrunnen' },
  ],
};

// ============================================================================
// Kapittel 6.5: Metallarbeid: grunnleggende teknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_5: TextbookChapter = {
  id: 'handverk-design-vg1-6-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.5',
  title: 'Metallarbeid: grunnleggende teknikker',
  description: 'Innføring i grunnleggende teknikker for metallarbeid som kutting, bøying, filing og lodding. Elevene lærer om ulike metaller og legeringer, samt sikker bruk av verktøy.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-5-intro',
      type: 'text',
      content: `Metall har vært avgjørende for menneskets utvikling - fra bronse- og jernalderen til dagens høyteknologiske legeringer. Metallarbeid krever presisjon og respekt for materialets egenskaper. I dette kapittelet lærer du grunnleggende teknikker for å arbeide med metall, fra kutting og bøying til lodding og filing.`,
    },
    {
      id: 'handverk-design-vg1-6-5-def-1',
      type: 'definition',
      title: 'Legering',
      content: `En legering er en blanding av to eller flere metaller, eller et metall med andre grunnstoffer. Legeringer lages for å oppnå bedre egenskaper enn de rene metallene har. Messing (kobber + sink) og stål (jern + karbon) er vanlige legeringer.`,
    },
    {
      id: 'handverk-design-vg1-6-5-text-1',
      type: 'text',
      content: `**Vanlige metaller og deres egenskaper**

**Stål**
- Legering av jern og karbon
- Sterkt og relativt rimelig
- Kan sveises
- Ruster (unntatt rustfritt stål)
- Brukes til: Konstruksjon, verktøy, maskiner

**Aluminium**
- Lett (1/3 av stålets vekt)
- Korrosjonsbestandig
- Lett å forme og bearbeide
- Leder varme og strøm godt
- Brukes til: Fly, biler, emballasje, profiler

**Messing**
- Legering av kobber og sink
- Gul farge
- Lett å bearbeide
- Tåler korrosjon
- Brukes til: Beslag, instrumenter, dekor

**Kobber**
- Rødlig farge
- Meget god leder
- Mykt og bøyelig
- Utvikler patina over tid
- Brukes til: Rør, elektriske ledninger, tak`,
    },
    {
      id: 'handverk-design-vg1-6-5-def-2',
      type: 'definition',
      title: 'Lodding',
      content: `Lodding er en teknikk for å feste metallstykker sammen ved hjelp av et loddemetall som smelter ved lavere temperatur enn grunnmetallet. Loddemetallet flyter inn i fugen og danner en sterk forbindelse når det stivner. Det finnes bløtlodding (under 450°C) og hardlodding (over 450°C).`,
    },
    {
      id: 'handverk-design-vg1-6-5-text-2',
      type: 'text',
      content: `**Kutting av metall**

**Baufil/bøylesag**
- For å sage metall manuelt
- Bruk blad med riktig tanntetthet
- Fest arbeidsstykket i skrustikke
- Lange, jevne drag
- La saga gjøre jobben

**Plateklipper**
- For å klippe tynn metallplate
- Finnes i ulike størrelser
- Gir ren, skarp kant
- Aviatorsaks for buede kutt

**Vinkelsliper**
- Rask kutting av tykkere metall
- Krever verneutstyr og erfaring
- Bruk riktig skive for materialet

**Båndsag (metall)**
- For presise, gjentatte kutt
- Kan sage profiler og rør

**Tips for kutting**
- Merk opp med riss eller tusj
- Støtt opp arbeidsstykket
- Bruk skjæreolje på stål
- Fjern grader etterpå`,
    },
    {
      id: 'handverk-design-vg1-6-5-text-3',
      type: 'text',
      content: `**Bøying og forming**

**Håndverktøy for bøying**
- **Skrustikke**: Hold metallet mens du bøyer
- **Bøyetang**: For tynn tråd og strimler
- **Klemmer og former**: For presise vinkler

**Bøyeteknikk**
1. Merk opp bøyelinjen
2. Fest metallet med bøyelinjen langs skrustikkekanten
3. Slå eller press jevnt med klubbe
4. Kontroller vinkelen underveis

**Driving og banking**
- Forme metall ved å banke det over en form
- Brukes for skåler, kopper og kurver
- Krever drivhammer og underlag

**Valsing**
- Tynn metallplate kan valses til kurver
- Brukes til sylindre og kjegler
- Manuell eller maskinell valse`,
    },
    {
      id: 'handverk-design-vg1-6-5-text-4',
      type: 'text',
      content: `**Filing og sliping**

**Filtyper**
- **Bastard-fil**: Grov, for rask fjerning
- **Halvfin fil**: Mellomfin
- **Fin fil**: For finpuss
- **Nålefiler**: For detaljer og små områder

**Filteknikk**
1. Fest arbeidsstykket solid
2. Hold filen med begge hender
3. Skyv fremover med jevnt trykk
4. Løft litt på returdraget
5. Arbeid i én retning

**Maskinell sliping**
- Båndsliper for større flater
- Dremel/roterende verktøy for detaljer
- Polerskive for blank overflate

**Lodding med loddebolt**
1. Rengjør overflatene grundig
2. Påfør flussmiddel
3. Varm opp metallet, ikke loddetinnet
4. Før loddetinnet til fugen
5. La avkjøle uten å bevege`,
    },
    {
      id: 'handverk-design-vg1-6-5-tip-1',
      type: 'tip',
      title: 'Rengjøring før lodding',
      content: `Lodding fungerer bare på rene overflater. Fjern oksid, fett og smuss med sandpapir eller stålull før lodding. Påfør flussmiddel umiddelbart for å hindre ny oksidasjon.`,
    },
    {
      id: 'handverk-design-vg1-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Lage en enkel nøkkelring i messing',
      problem: 'Du skal lage en nøkkelring av messingtråd (2 mm).',
      solution: `**Materialer**: Messingtråd 2 mm, nøkkelring

**Fremgangsmåte:**

1. **Kutting**: Klipp av 15 cm messingtråd med avbitertang

2. **Forming**: Bruk rundt underlag (f.eks. penn) til å vikle en spiral

3. **Bøying**: Form tråden til ønsket design (bokstav, form, symbol)

4. **Filing**: Fil endene runde og glatte

5. **Polering**: Puss med fin stålull eller polerklut

6. **Montering**: Tre på nøkkelringen

**Tips**: Messing er mykt og lett å forme. Øv på papir først.`,
    },
    {
      id: 'handverk-design-vg1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er messing en legering av?',
        options: ['Jern og karbon', 'Kobber og tinn', 'Kobber og sink', 'Aluminium og kobber'],
        correctAnswer: 'Kobber og sink',
        solution: 'Messing er en legering av kobber og sink. Den har karakteristisk gul farge og er lett å bearbeide.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom bløtlodding og hardlodding.',
        solution: 'Bløtlodding bruker loddemetall som smelter under 450°C, gir svakere forbindelse men er enklere. Hardlodding bruker loddemetall som smelter over 450°C, gir sterkere forbindelse men krever mer varme og utstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv riktig teknikk for filing av metall.',
        solution: 'Fest arbeidsstykket solid i skrustikke. Hold filen med begge hender. Skyv fremover med jevnt trykk. Løft litt på returdraget (fil bare i én retning). Start med grov fil og gå til finere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign egenskapene til stål og aluminium.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordeler har aluminium?',
            solution: 'Aluminium er lett (1/3 av stål), korrosjonsbestandig og lett å forme.',
          },
          {
            label: 'b',
            task: 'Hvilke fordeler har stål?',
            solution: 'Stål er sterkere, rimeligere og kan sveises lettere.',
          },
        ],
        solution: 'Aluminium er lett og korrosjonsbestandig, mens stål er sterkere og rimeligere. Valget avhenger av bruksområdet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er viktigst å gjøre før lodding?',
        options: [
          'Varme opp loddemetallet først',
          'Rengjøre overflatene grundig',
          'Bruke mye loddemetall',
          'Jobbe raskt',
        ],
        correctAnswer: 'Rengjøre overflatene grundig',
        solution: 'Rene overflater er avgjørende for vellykket lodding. Oksid, fett og smuss hindrer loddemetallet fra å feste seg ordentlig.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Legering', definition: 'Blanding av metaller for å oppnå bedre egenskaper' },
    { term: 'Lodding', definition: 'Sammenføyning med smeltet loddemetall ved lavere temperatur enn grunnmetallet' },
    { term: 'Flussmiddel', definition: 'Stoff som fjerner oksid og hjelper loddet å flyte' },
    { term: 'Patina', definition: 'Overflatelag som dannes på metall over tid, spesielt kobber' },
    { term: 'Grader', definition: 'Skarpe kanter som oppstår ved kutting av metall' },
    { term: 'Driving', definition: 'Forming av metall ved banking over en form' },
  ],
};

// ============================================================================
// Kapittel 6.6: Smiing og varmebearbeiding
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_6: TextbookChapter = {
  id: 'handverk-design-vg1-6-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.6',
  title: 'Smiing og varmebearbeiding',
  description: 'Introduksjon til smiing og varmebearbeiding av metall som tradisjonelt håndverk. Elevene lærer om oppvarming, forming og herding av metall.',
  estimatedMinutes: 65,
  competenceGoals: [
    'reflektere og anvende tradisjonelle teknikker for å gjenskape tradisjonelle håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-6-intro',
      type: 'text',
      content: `Smiing er et av de eldste håndverkene vi kjenner. Smeden var en respektert håndverker i alle samfunn, og smijernsarbeider preger fortsatt bygninger og gjenstander rundt oss. Når metall varmes opp, blir det mykt og formbart. Med hammer og ambolt kan du forme det til alt fra enkle kroker til kunstferdige portgrinder. I dette kapittelet får du en innføring i smiingens grunnleggende teknikker.`,
    },
    {
      id: 'handverk-design-vg1-6-6-def-1',
      type: 'definition',
      title: 'Smiing',
      content: `Smiing er forming av metall ved hjelp av varme og slag. Metallet varmes til det blir glødende og mykt, deretter formes det med hammer mot ambolt eller andre verktøy. Smiing kan utføres for hånd (håndsmiding) eller med maskiner (maskinsmiding).`,
    },
    {
      id: 'handverk-design-vg1-6-6-text-1',
      type: 'text',
      content: `**Utstyr for smiing**

**Essa (fyret)**
- Varmekilden for smiing
- Tradisjonelt: kullesse med belg
- Moderne: gassesse eller elektrisk ovn
- Må kunne nå 900-1200°C

**Ambolt**
- Tung stålblokk å smi på
- Har flat overflate (bane)
- Horn for bøying
- Hardiehull for verktøy

**Hammere**
- **Smihammer**: Hovedverktøy, 1-2 kg
- **Klinkhammer**: For presise slag
- **Sleggge**: Tung hammer for grovt arbeid

**Annet utstyr**
- **Smiknipe/tang**: Holde varmt metall
- **Avrettere**: For å rette og forme
- **Dorner**: For å lage hull og øyer
- **Vannbøtte**: For avkjøling`,
    },
    {
      id: 'handverk-design-vg1-6-6-def-2',
      type: 'definition',
      title: 'Smivarme',
      content: `Smivarme er temperaturen der metall er mykt nok til å formes. For stål er dette ca. 800-1100°C. Temperaturen kan vurderes etter fargen på metallet: mørkerød (ca. 700°C), kirsebærrød (ca. 800°C), lys oransje (ca. 900°C), gul (ca. 1000°C).`,
    },
    {
      id: 'handverk-design-vg1-6-6-text-2',
      type: 'text',
      content: `**Grunnleggende smiteknikker**

**Strekking (drawing out)**
Gjøre metallet lengre og tynnere:
- Slå på flaten med vinklede slag
- Snu metallet 90° regelmessig
- Jevn ut med flate slag

**Stuking (upsetting)**
Gjøre metallet tykkere og kortere:
- Slå i endekanten
- Varm bare den delen som skal stukes
- Må gjentas flere ganger

**Bøying**
Forme kurver og vinkler:
- Varm bøyepunktet godt
- Bøy over ambolthornet eller i skrustikke
- Bruk hammer for skarp vinkel

**Vridning (twisting)**
Dreie metallet om sin egen akse:
- Varm området som skal vris
- Grip i begge ender med tenger
- Drei jevnt og kontrollert

**Spliing**
Dele metallet i to eller flere deler:
- Bruk meisel og hammer
- Arbeid fra begge sider
- Ikke kutt helt gjennom - split opp`,
    },
    {
      id: 'handverk-design-vg1-6-6-text-3',
      type: 'text',
      content: `**Herding og anløping**

**Herding**
Herding gjør stål hardt og sprøtt:
1. Varm stålet til det er ikke-magnetisk (ca. 800°C)
2. Dypp raskt i vann eller olje
3. Stålet blir nå meget hardt men sprøtt

**Anløping**
Anløping reduserer sprøheten:
1. Puss overflaten blank
2. Varm forsiktig og observer fargeendringen
3. Avkjøl når ønsket anløpningsfarge nås

**Anløpningsfarger og bruksområder**
- Lysegul (220°C): Gravørverktøy
- Strågul (240°C): Bor, kniver
- Brun (260°C): Sakser, fjærer
- Purpur (280°C): Økser, stemjern
- Blå (300°C): Sager, skruer

**Normalisering**
Fjerner spenninger i metallet:
- Varm til smivarme
- Avkjøl langsomt i luft
- Gir jevn struktur`,
    },
    {
      id: 'handverk-design-vg1-6-6-text-4',
      type: 'text',
      content: `**Sikkerhet ved smiing**

**Personlig verneutstyr**
- Vernebriller eller ansiktsskjerm
- Lærhansker (ikke syntetiske)
- Læforkle
- Solide sko med ståltupp
- Langermet, ikke-brennbar klær

**Arbeidsområdet**
- God ventilasjon
- Brannslukkingsapparat tilgjengelig
- Ryddig gulv, ingen snublefarer
- Vannbøtte for nødsituasjoner

**Viktige regler**
- Varmt metall ser ut som kaldt - vær forsiktig!
- Aldri ta i metall uten tang
- Hold andre på avstand
- Vær oppmerksom på gnister
- Slukk essa forsvarlig etter bruk
- La metall avkjøle før du legger det fra deg`,
    },
    {
      id: 'handverk-design-vg1-6-6-tip-1',
      type: 'tip',
      title: 'Øv på kullfyring',
      content: `Å holde riktig temperatur i essa krever øvelse. Start med å lære å bygge opp et godt ildsted med kull rundt luftinntaket. Observer hvordan fargene endres når du øker lufttilførselen, og lær å lese temperaturen på metallet.`,
    },
    {
      id: 'handverk-design-vg1-6-6-example-1',
      type: 'example',
      title: 'Eksempel: Smi en enkel krok',
      problem: 'Du skal smi en S-formet krok av rundjern (8 mm).',
      solution: `**Materialer**: Rundjern 8 mm, ca. 20 cm

**Fremgangsmåte:**

1. **Spissing**: Varm enden, strekk ut til en spiss med vinklede slag

2. **Første bøy**: Varm 3 cm fra spissen, bøy over ambolthornet til en krok

3. **Andre ende**: Snu, varm andre enden, strekk ut til spiss

4. **Andre bøy**: Varm og bøy i motsatt retning (S-form)

5. **Oppheng**: Bøy en liten øye øverst for oppheng

6. **Finish**: Børst av glødeskall, eventuelt oljebehandle

**Tips**: Hold jevn varme og arbeid raskt mens metallet er mykt.`,
    },
    {
      id: 'handverk-design-vg1-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken farge har stål ved smivarme (ca. 900°C)?',
        options: ['Mørkerød', 'Kirsebærrød', 'Lys oransje', 'Hvitglødende'],
        correctAnswer: 'Lys oransje',
        solution: 'Ved ca. 900°C har stål en lys oransje farge. Dette er en god smivarme der metallet er mykt og formbart.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom strekking og stuking i smiing.',
        solution: 'Strekking (drawing out) gjør metallet lengre og tynnere ved å slå med vinklede slag på flaten. Stuking (upsetting) gjør metallet tykkere og kortere ved å slå i endekanten av det oppvarmede metallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er herding og anløping, og hvorfor brukes begge prosessene?',
        solution: 'Herding gjør stål hardt ved rask avkjøling fra høy temperatur, men også sprøtt. Anløping varmer det herdede stålet forsiktig for å redusere sprøheten mens det beholder noe hardhet. Begge brukes for å få optimal kombinasjon av hardhet og seighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn minst fem sikkerhetsregler for smiing.',
        solution: 'Bruk vernebriller/ansiktsskjerm, bruk lærhansker og læforkle, bruk solide sko, sørg for god ventilasjon, ha brannslukkingsapparat tilgjengelig, aldri ta i metall uten tang, hold andre på avstand, vær oppmerksom på at varmt metall ser ut som kaldt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Smiing', definition: 'Forming av metall ved hjelp av varme og slag' },
    { term: 'Esse', definition: 'Fyrsted for oppvarming av metall ved smiing' },
    { term: 'Ambolt', definition: 'Tung stålblokk å smi på, med flat bane og horn' },
    { term: 'Smivarme', definition: 'Temperatur der metall er mykt nok til forming (800-1100°C for stål)' },
    { term: 'Herding', definition: 'Gjøre stål hardt ved rask avkjøling fra høy temperatur' },
    { term: 'Anløping', definition: 'Redusere sprøheten i herdet stål ved forsiktig oppvarming' },
    { term: 'Strekking', definition: 'Smiteknikk for å gjøre metall lengre og tynnere' },
  ],
};

// ============================================================================
// Kapittel 6.7: Overflatebehandling og etterbehandling
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_6_7: TextbookChapter = {
  id: 'handverk-design-vg1-6-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '6.7',
  title: 'Overflatebehandling og etterbehandling',
  description: 'Kunnskap om ulike metoder for overflatebehandling av produkter i tre, metall og keramikk. Elevene lærer om lakkering, beis, polering, patinering og andre finishmetoder.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere håndverksfaglig kvalitet på eget og andres arbeid ut fra holdbarhet, funksjon og estetisk uttrykk',
  ],
  content: [
    {
      id: 'handverk-design-vg1-6-7-intro',
      type: 'text',
      content: `Overflatebehandling er det avsluttende trinnet som gir produktet dets endelige utseende og beskytter det mot slitasje og miljøpåvirkninger. En god overflatebehandling kan løfte et enkelt produkt til noe spesielt, mens dårlig finish kan ødelegge selv det fineste håndverksarbeidet. I dette kapittelet lærer du om ulike metoder for overflatebehandling av tre, metall og keramikk.`,
    },
    {
      id: 'handverk-design-vg1-6-7-def-1',
      type: 'definition',
      title: 'Overflatebehandling',
      content: `Overflatebehandling er alle prosesser som endrer eller beskytter overflaten på et materiale. Formålene kan være beskyttelse mot fuktighet, slitasje eller korrosjon, forbedring av utseende, eller endring av overflatefølelse (tekstur).`,
    },
    {
      id: 'handverk-design-vg1-6-7-text-1',
      type: 'text',
      content: `**Overflatebehandling av tre**

**Olje**
- Trekker inn i treet
- Fremhever trestrukturen
- Enkel å påføre og vedlikeholde
- Gir naturlig, matt finish
- Typer: Linolje, tungtre olje, dansk olje

**Voks**
- Gir myk glans
- Behagelig å ta på
- Krever jevnlig vedlikehold
- Ofte brukt på antikke møbler
- Kan kombineres med olje

**Beis**
- Farger treet uten å dekke strukturen
- Finnes i mange farger
- Krever etterbehandling med lakk eller olje
- Vannbasert eller løsemiddelbasert

**Lakk**
- Danner beskyttende film på overflaten
- Finnes i matt, halvblank og blank
- Vannbasert eller løsemiddelbasert
- Meget slitesterk
- Krever god forberedelse

**Maling**
- Dekker treet helt
- God beskyttelse
- Finnes i alle farger
- Kan skjule ujevnheter`,
    },
    {
      id: 'handverk-design-vg1-6-7-def-2',
      type: 'definition',
      title: 'Patina',
      content: `Patina er det overflatelaget som dannes naturlig på materialer over tid. På kobber blir patinaen grønn (irr), på tre mørkner den, og på sølv blir den svart. Patina kan også fremkalles kunstig for å gi et eldet utseende.`,
    },
    {
      id: 'handverk-design-vg1-6-7-text-2',
      type: 'text',
      content: `**Overflatebehandling av metall**

**Polering**
- Gir blank, reflekterende overflate
- Gjøres med poleringsmiddel og klut/skive
- Krever progressivt finere slipemidler
- Må vedlikeholdes for å holde glansen

**Børsting**
- Gir matt, stripet overflate
- Brukes stålull eller børsteskive
- Skjuler fingeravtrykk
- Populært på rustfritt stål

**Lakkering**
- Beskytter mot korrosjon
- Klarlakk eller farget
- Brukes på dekorative gjenstander

**Pulverlakkering**
- Profesjonell metode
- Meget slitesterk
- Finnes i mange farger
- Krever spesialutstyr

**Patinering**
- Kunstig aldring av overflaten
- Kjemikalier fremkaller fargeendring
- Populært på kobber og messing
- Kan gi grønn, brun eller svart patina

**Varmforsinking (galvanisering)**
- Beskyttelse mot rust
- Sink belegges på stål
- Industriell metode`,
    },
    {
      id: 'handverk-design-vg1-6-7-text-3',
      type: 'text',
      content: `**Overflatebehandling av keramikk**

**Glasur**
- Hovedmetoden for keramikk
- Gir farge, glans og vanntetthet
- Påføres før glasurbrenning

**Underglasurmaling**
- Maling under glasuren
- Farger smelter inn i glasuren
- Holdbar og matvaresikker

**Overglasurmaling**
- Maling på ferdigbrent glasur
- Flere fargemuligheter
- Krever ekstra brenning
- Mindre slitesterk

**Engobes**
- Farget leirslip
- Påføres på rå eller skrøytbrent keramikk
- Gir matt overflate
- Kan kombineres med glasur

**Uglasert finish**
- Naturlig leireoverflate
- Polering gir glans (terra sigillata)
- Røyking gir svart overflate
- Gir organisk, naturlig uttrykk`,
    },
    {
      id: 'handverk-design-vg1-6-7-text-4',
      type: 'text',
      content: `**Generelle prinsipper for god finish**

**Forberedelse**
- Overflaten må være ren og jevn
- Fjern støv, fett og urenheter
- Slip/puss til riktig nivå
- Reparér skader før behandling

**Påføring**
- Les produktbeskrivelsen nøye
- Arbeid i godt ventilert område
- Påfør tynne, jevne lag
- Respekter tørketider mellom lag
- Bruk riktig verktøy for metoden

**Etterbehandling**
- Kontroller resultatet i godt lys
- Slip lett mellom lakk-lag
- Fjern ujevnheter
- Beskytt ferdig overflate under tørking

**Vedlikehold**
- Velg behandling etter bruksområde
- Noen behandlinger krever jevnlig vedlikehold
- Dokumentér hva som er brukt for fremtidig vedlikehold`,
    },
    {
      id: 'handverk-design-vg1-6-7-tip-1',
      type: 'tip',
      title: 'Test alltid først',
      content: `Før du behandler et ferdig produkt, test alltid på et prøvestykke av samme materiale. Da ser du hvordan behandlingen blir og kan justere teknikken før du går løs på det ferdige arbeidet.`,
    },
    {
      id: 'handverk-design-vg1-6-7-example-1',
      type: 'example',
      title: 'Eksempel: Oljebehandle en treskål',
      problem: 'Du skal oljebehandle en skål i bjørk for matbruk.',
      solution: `**Materialer**: Matvaresikker olje (f.eks. valnøttolje eller mineralolje), fint sandpapir, ren klut

**Fremgangsmåte:**

1. **Sluttslip**: Puss skålen med 240 og 320 korn. Tørk av støv.

2. **Første oljelag**: Påfør rikelig med olje med klut. La trekke inn 15-20 min.

3. **Tørk av overskudd**: Tørk av all olje som ikke er absorbert.

4. **Tørking**: La tørke i 24 timer.

5. **Lett sliping**: Puss lett med 400 korn for å fjerne reiste fibre.

6. **Gjenta**: Påfør 2-3 lag til med olje.

**Vedlikehold**: Påfør ny olje når skålen begynner å se tørr ut.`,
    },
    {
      id: 'handverk-design-vg1-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken overflatebehandling trekker inn i treet og fremhever strukturen?',
        options: ['Lakk', 'Maling', 'Olje', 'Plastbelegg'],
        correctAnswer: 'Olje',
        solution: 'Olje trekker inn i treet og fremhever den naturlige trestrukturen, i motsetning til lakk og maling som danner en film på overflaten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva patina er og hvordan den kan fremkalles kunstig.',
        solution: 'Patina er et overflatelag som dannes naturlig over tid, f.eks. grønn irr på kobber. Kunstig patina kan fremkalles med kjemikalier som reagerer med metallet og gir lignende fargeendring raskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign olje og lakk som overflatebehandling for tre.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordeler har olje?',
            solution: 'Olje fremhever trestrukturen, er lett å påføre og vedlikeholde, gir naturlig utseende og kan repareres lokalt.',
          },
          {
            label: 'b',
            task: 'Hvilke fordeler har lakk?',
            solution: 'Lakk gir bedre beskyttelse mot fuktighet og slitasje, er mer slitesterk og trenger sjeldnere vedlikehold.',
          },
        ],
        solution: 'Olje gir naturlig utseende og er lett å vedlikeholde, mens lakk gir bedre beskyttelse men er vanskeligere å reparere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom underglasur- og overglasurmaling på keramikk?',
        solution: 'Underglasurmaling påføres under glasuren og brenner inn i den, noe som gir holdbar og matvaresikker dekor. Overglasurmaling påføres på ferdig glasur, gir flere fargemuligheter men er mindre slitesterk og krever en ekstra brenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-6-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-6-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn fire viktige prinsipper for god overflatebehandling.',
        solution: 'God forberedelse med ren og jevn overflate, påføring av tynne jevne lag med riktig verktøy, respektere tørketider mellom lag, og testing på prøvestykke før behandling av ferdig produkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Overflatebehandling', definition: 'Prosesser som endrer eller beskytter overflaten på et materiale' },
    { term: 'Patina', definition: 'Overflatelag som dannes naturlig over tid på metall' },
    { term: 'Beis', definition: 'Fargestoff som trekker inn i tre uten å dekke strukturen' },
    { term: 'Polering', definition: 'Bearbeiding som gir blank, reflekterende overflate' },
    { term: 'Engobe', definition: 'Farget leirslip som påføres keramikk før brenning' },
    { term: 'Klarlakk', definition: 'Gjennomsiktig lakk som beskytter uten å endre farge' },
  ],
};

// ============================================================================
// Eksporter alle kapitlene
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL6_CHAPTERS = [
  CHAPTER_HANDVERK_DESIGN_VG1_6_1,
  CHAPTER_HANDVERK_DESIGN_VG1_6_2,
  CHAPTER_HANDVERK_DESIGN_VG1_6_3,
  CHAPTER_HANDVERK_DESIGN_VG1_6_4,
  CHAPTER_HANDVERK_DESIGN_VG1_6_5,
  CHAPTER_HANDVERK_DESIGN_VG1_6_6,
  CHAPTER_HANDVERK_DESIGN_VG1_6_7,
];

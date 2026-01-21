/**
 * Kunst og håndverk 5. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kunst og håndverk på 5. trinn
 * Innhold tilpasset 10-11 åringer med fokus på praktisk og kreativ læring
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Tegning og maling
// ============================================================================

export const CHAPTER_KUNST_5_1_1: TextbookChapter = {
  id: 'kunst-5-1-1',
  courseId: 'kunst-5',
  chapterNumber: '1.1',
  title: 'Tegneteknikker',
  description: 'Lær ulike måter å tegne på med blyant, kull og fargestifter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke ulike materialer og teknikker til å uttrykke egne ideer',
    'utforske og eksperimentere med ulike tegneteknikker',
  ],
  content: [
    {
      id: 'kunst-5-1-1-intro',
      type: 'text',
      content: `Tegning er en av de eldste kunstformene i verden. Mennesker har tegnet i tusenvis av år - fra hulemalerier til moderne tegneserier. Når du lærer å tegne, lærer du å se verden på nye måter!`,
    },
    {
      id: 'kunst-5-1-1-def-1',
      type: 'definition',
      title: 'Hva er tegning?',
      content: `Tegning er å lage bilder ved å trekke linjer på en overflate. Du kan tegne med blyant, kull, tusj, fargestifter eller mange andre verktøy. Det fine med tegning er at du bare trenger papir og noe å tegne med for å komme i gang!`,
    },
    {
      id: 'kunst-5-1-1-text-2',
      type: 'text',
      content: `**Grunnleggende former**

Visste du at nesten alt du ser rundt deg kan brytes ned til enkle former? Her er de fire grunnformene:

- **Sirkel**: Ansikter, baller, sola, hjul
- **Firkant**: Hus, vinduer, bøker, tavler
- **Trekant**: Tak, fjell, seil, kjegler
- **Oval**: Egg, ansikter sett fra siden, skyer

Når du skal tegne noe vanskelig, start med å se hvilke grunnformer det består av!`,
    },
    {
      id: 'kunst-5-1-1-tip-1',
      type: 'tip',
      title: 'Slik holder du blyanten',
      content: `Du kan holde blyanten på ulike måter for ulike effekter:
- **Skrivegrep**: Nær spissen for kontroll og detaljer
- **Overhåndsgrep**: Lenger opp for løse, myke streker
- **Undergrep**: På siden for skygger og store flater`,
    },
    {
      id: 'kunst-5-1-1-text-3',
      type: 'text',
      content: `**Linjetyper**

Linjer kan uttrykke mye forskjellig:

- **Rette linjer**: Gir følelse av ro og orden
- **Bølgete linjer**: Gir følelse av bevegelse og mykhet
- **Sikksakk-linjer**: Gir følelse av energi og spenning
- **Tykke linjer**: Virker nære og sterke
- **Tynne linjer**: Virker langt unna eller forsiktige
- **Stiplete linjer**: Viser noe som er skjult eller bevegelse`,
    },
    {
      id: 'kunst-5-1-1-text-4',
      type: 'text',
      content: `**Skygger og lys**

Skygger får tegningene dine til å se tredimensjonale ut. Tenk deg at sola eller en lampe lyser på det du tegner:

1. **Lyssiden**: Der lyset treffer, er det lysest
2. **Skyggeside**: Motsatt side av lyset er mørkere
3. **Slagskygge**: Skyggen objektet kaster på bakken

For å tegne skygger, bruk siden av blyanten og lag myke strøk i samme retning.`,
    },
    {
      id: 'kunst-5-1-1-example-1',
      type: 'example',
      title: 'Tegne en kule med skygge',
      content: `1. Tegn en sirkel
2. Bestem hvor lyset kommer fra (f.eks. øverst til venstre)
3. La øvre venstre del være helt lys (ikke skravér der)
4. Lag gradvis mørkere skravering mot nedre høyre
5. Tegn en slagskygge på "bakken" under kulen

Prøv dette med en ekte ball foran deg og en lampe som lyskilde!`,
    },
    {
      id: 'kunst-5-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke fire grunnformer kan vi bruke til å tegne nesten alt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Sirkel, firkant, trekant og oval',
            multipleChoiceOptions: ['Sirkel, firkant, trekant og oval', 'Hjerte, stjerne, blomst og sol', 'Rektangel, pentagon, heksagon og oktagon', 'Prikk, linje, bue og kryss'],
          },
        ],
        solution: 'De fire grunnformene er sirkel, firkant, trekant og oval. Med disse kan du bygge opp nesten alle former!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva heter skyggen som et objekt kaster på bakken?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Slagskygge',
            multipleChoiceOptions: ['Slagskygge', 'Bakkeskygge', 'Kastskygge', 'Mørkskygge'],
          },
        ],
        solution: 'Skyggen som et objekt kaster på bakken eller andre overflater kalles slagskygge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn et hus ved å bruke grunnformene.',
        solution: 'Bruk en firkant til husets kropp, en trekant til taket, og mindre firkanter til vinduer og dør. Legg til en sirkel for sola og ovaler for skyer.',
        hints: ['Start med en stor firkant', 'Legg en trekant oppå som tak', 'Tegn små firkanter som vinduer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn en ball med skygge. Bestem hvor lyset kommer fra!',
        solution: 'Tegn en sirkel og velg hvor lyset kommer fra. Skravér gradvis mørkere på motsatt side av lyskilden. Tegn en oval slagskygge under ballen.',
        hints: ['Først tegn en sirkel', 'Velg hvor lyskilden er', 'La lyssiden være lys og mørklegg skyggesiden gradvis'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_5_1_2: TextbookChapter = {
  id: 'kunst-5-1-2',
  courseId: 'kunst-5',
  chapterNumber: '1.2',
  title: 'Fargelære',
  description: 'Opdag fargesirkelen, primærfarger og hvordan farger virker sammen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og eksperimentere med farger og fargeteori',
    'bruke fargekontraster og fargeharmonier i eget arbeid',
  ],
  content: [
    {
      id: 'kunst-5-1-2-intro',
      type: 'text',
      content: `Farger er overalt rundt oss! De kan gjøre oss glade, rolige eller spente. Ved å forstå hvordan farger fungerer, kan du lage kunstverk som virkelig fanger oppmerksomheten.`,
    },
    {
      id: 'kunst-5-1-2-def-1',
      type: 'definition',
      title: 'Fargesirkelen',
      content: `Fargesirkelen er et hjul som viser hvordan farger henger sammen. Den ble oppfunnet for over 300 år siden og hjelper kunstnere over hele verden med å velge farger som passer sammen.`,
    },
    {
      id: 'kunst-5-1-2-text-2',
      type: 'text',
      content: `**Primærfargene**

De tre primærfargene er:
- **Rød**
- **Gul**
- **Blå**

Disse fargene kan ikke lages ved å blande andre farger. De er "grunnfargene" som alle andre farger kan lages av!`,
    },
    {
      id: 'kunst-5-1-2-text-3',
      type: 'text',
      content: `**Sekundærfargene**

Når du blander to primærfarger, får du sekundærfarger:

- **Rød + Gul = Oransje**
- **Gul + Blå = Grønn**
- **Blå + Rød = Lilla (fiolett)**

Prøv å blande selv og se hva som skjer!`,
    },
    {
      id: 'kunst-5-1-2-text-4',
      type: 'text',
      content: `**Komplementærfarger**

Komplementærfarger er farger som står rett overfor hverandre i fargesirkelen:

- **Rød og grønn**
- **Gul og lilla**
- **Blå og oransje**

Når du setter komplementærfarger ved siden av hverandre, får de hverandre til å virke ekstra sterke! Dette kalles fargekontrast.`,
    },
    {
      id: 'kunst-5-1-2-tip-1',
      type: 'tip',
      title: 'Varme og kalde farger',
      content: `**Varme farger**: Rød, oransje, gul - minner om sol og ild
**Kalde farger**: Blå, grønn, lilla - minner om vann og is

Bruk varme farger for ting som er nære deg, og kalde farger for ting langt unna. Dette skaper dybde i bildet!`,
    },
    {
      id: 'kunst-5-1-2-example-1',
      type: 'example',
      title: 'Lage brunt',
      content: `Brunt kan lages på flere måter:
1. Bland alle tre primærfargene (rød + gul + blå)
2. Bland to komplementærfarger (f.eks. oransje + blå)
3. Bland rød og grønn

Prøv ulike blandinger - du får ulike nyanser av brunt!`,
    },
    {
      id: 'kunst-5-1-2-text-5',
      type: 'text',
      content: `**Valør - lys og mørk**

Valør handler om hvor lys eller mørk en farge er.

- **Lys valør**: Legg til hvitt (dette kalles en "tint")
- **Mørk valør**: Legg til svart (dette kalles en "shade")

Med én farge kan du lage mange ulike valører!`,
    },
    {
      id: 'kunst-5-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de tre primærfargene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Rød, gul og blå',
            multipleChoiceOptions: ['Rød, gul og blå', 'Oransje, grønn og lilla', 'Hvit, svart og grå', 'Rosa, turkis og brun'],
          },
        ],
        solution: 'De tre primærfargene er rød, gul og blå. Disse kan ikke lages ved å blande andre farger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken farge får du når du blander rød og gul?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Oransje',
            multipleChoiceOptions: ['Oransje', 'Grønn', 'Lilla', 'Brun'],
          },
        ],
        solution: 'Når du blander rød og gul, får du oransje. Dette er en sekundærfarge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er komplementærfargen til rød?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Grønn',
            multipleChoiceOptions: ['Grønn', 'Blå', 'Gul', 'Oransje'],
          },
        ],
        solution: 'Grønn er komplementærfargen til rød. De står rett overfor hverandre i fargesirkelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag din egen fargesirkel! Mal primærfargene først, så bland sekundærfargene.',
        solution: 'Start med å tegne en sirkel delt i 6 deler. Mal rød, gul og blå i annenhver rute. Deretter bland og mal sekundærfargene mellom primærfargene.',
        hints: ['Del sirkelen i 6 like deler', 'Mal primærfargene først', 'Bland sekundærfargene mellom primærfargene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_5_1_3: TextbookChapter = {
  id: 'kunst-5-1-3',
  courseId: 'kunst-5',
  chapterNumber: '1.3',
  title: 'Maling med akvarell',
  description: 'Lær grunnleggende akvarellteknikker og hvordan vann og farge samarbeider.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike materialer og teknikker til å uttrykke egne ideer',
    'eksperimentere med akvarell og vannbasert maling',
  ],
  content: [
    {
      id: 'kunst-5-1-3-intro',
      type: 'text',
      content: `Akvarellmaling er maling som løses opp i vann. Det er en magisk teknikk fordi fargene kan flyte og blande seg på helt uventede måter. Du må lære å jobbe sammen med vannet - ikke mot det!`,
    },
    {
      id: 'kunst-5-1-3-def-1',
      type: 'definition',
      title: 'Akvarell',
      content: `Akvarell kommer fra det latinske ordet "aqua" som betyr vann. Akvarellmaling er pigment (farge) blandet med et bindemiddel som løser seg i vann. Jo mer vann du bruker, jo lysere og mer gjennomsiktig blir fargen.`,
    },
    {
      id: 'kunst-5-1-3-text-2',
      type: 'text',
      content: `**Det du trenger**

- Akvarellmaling (tuber eller boks med faste farger)
- Akvarellpapir (tykt papir som tåler vann)
- Pensler (helst runde med spiss tupp)
- To glass med vann (ett til å skylle, ett med rent vann)
- Tørkepapir eller klut
- Palett til å blande farger`,
    },
    {
      id: 'kunst-5-1-3-text-3',
      type: 'text',
      content: `**Grunnleggende teknikker**

**1. Vått på tørt**
- Mal med fuktig pensel på tørt papir
- Gir skarpe, kontrollerte kanter
- Bra for detaljer

**2. Vått på vått**
- Fukt papiret først med rent vann
- Mal på det våte papiret
- Fargene flyter og blander seg mykt
- Perfekt for himmel, vann og bakgrunner

**3. Lagvis maling (lasering)**
- Mal et lag, la det tørke helt
- Mal nye lag oppå
- Skaper dybde og rike farger`,
    },
    {
      id: 'kunst-5-1-3-tip-1',
      type: 'tip',
      title: 'Start lyst, slutt mørkt',
      content: `I akvarell er det vanskelig å gjøre noe lysere etter at du har malt. Derfor:
1. Start med de lyseste områdene
2. La hvitt papir skinne gjennom for de lyseste delene
3. Bygg opp mørkere farger gradvis`,
    },
    {
      id: 'kunst-5-1-3-text-4',
      type: 'text',
      content: `**Spennende effekter**

- **Salt**: Strø salt på våt akvarell for stjerneaktige mønstre
- **Plastfolie**: Legg plastfolie på våt maling og krøll den - gir interessante teksturer
- **Sprute**: Dypp en gammel tannbørste i maling og sprut med fingeren
- **Løfte farge**: Bruk en tørr pensel eller papir til å "løfte" bort farge mens malingen er våt`,
    },
    {
      id: 'kunst-5-1-3-warning-1',
      type: 'warning',
      title: 'Pass på!',
      content: `- La hvert lag tørke ordentlig før du maler nytt lag
- Ikke gni for mye på våt maling - papiret kan bli ødelagt
- Bruk nok vann, men ikke så mye at det renner nedover arket
- Skyll penselen godt mellom hver farge`,
    },
    {
      id: 'kunst-5-1-3-example-1',
      type: 'example',
      title: 'Mal en solnedgang',
      content: `1. Fukt øvre halvdel av papiret med rent vann
2. Mal gul farge øverst der sola går ned
3. Mal oransje under det gule (fargene vil flyte sammen)
4. Mal rosa og rød nederst
5. La fargene flyte og blande seg naturlig
6. La tørke helt før du legger til silhuetter av trær eller hus`,
    },
    {
      id: 'kunst-5-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr ordet "akvarell"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Det kommer fra ordet for vann',
            multipleChoiceOptions: ['Det kommer fra ordet for vann', 'Det betyr farge', 'Det er oppkalt etter en kunstner', 'Det betyr pensel'],
          },
        ],
        solution: 'Akvarell kommer fra det latinske ordet "aqua" som betyr vann. Akvarell er vannbasert maling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer når du maler vått på vått?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fargene flyter og blander seg mykt',
            multipleChoiceOptions: ['Fargene flyter og blander seg mykt', 'Du får skarpe kanter', 'Malingen tørker fortere', 'Fargene blir mørkere'],
          },
        ],
        solution: 'Når du maler på vått papir, flyter fargene utover og blander seg mykt med hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør du starte med lyse farger i akvarell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi det er vanskelig å gjøre noe lysere etterpå',
            multipleChoiceOptions: ['Fordi det er vanskelig å gjøre noe lysere etterpå', 'Fordi lyse farger tørker fortere', 'Fordi penselen fungerer bedre', 'Fordi papiret liker det'],
          },
        ],
        solution: 'I akvarell kan du ikke male lyst over mørkt. Derfor starter man med de lyseste fargene og bygger opp til de mørkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Mal en himmel med skyer ved hjelp av vått-på-vått-teknikken.',
        solution: 'Fukt papiret med rent vann. Mal blå farge og la noen områder være hvite for skyer. Fargene vil flyte mykt sammen og skape naturlige skyer.',
        hints: ['Fukt hele papiret først', 'La hvite områder være igjen for skyer', 'Ikke mal for mye - la fargene jobbe selv'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Forming og skulptur
// ============================================================================

export const CHAPTER_KUNST_5_2_1: TextbookChapter = {
  id: 'kunst-5-2-1',
  courseId: 'kunst-5',
  chapterNumber: '2.1',
  title: 'Arbeid med leire',
  description: 'Lær grunnleggende leireteknikker og lag dine egne skulpturer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike materialer og teknikker til å uttrykke egne ideer',
    'arbeide med tredimensjonale former og skulptur',
  ],
  content: [
    {
      id: 'kunst-5-2-1-intro',
      type: 'text',
      content: `Leire er et fantastisk materiale fordi du kan forme det til nesten hva som helst! Mennesker har laget ting av leire i over 20 000 år - fra krukker og kopper til skulpturer og smykker.`,
    },
    {
      id: 'kunst-5-2-1-def-1',
      type: 'definition',
      title: 'Leire',
      content: `Leire er et naturlig materiale som finnes i jorda. Det består av bitte små partikler som blir myke når de er fuktige og harde når de tørker. Det finnes mange typer leire - noen må brennes i ovn, andre herder i luften.`,
    },
    {
      id: 'kunst-5-2-1-text-2',
      type: 'text',
      content: `**Typer leire**

- **Naturlig leire (keramikk)**: Må brennes i keramikkovn ved høy temperatur
- **Lufttørkende leire**: Tørker og herder av seg selv i romtemperatur
- **Modellérleire**: Holder seg myk og kan brukes om igjen
- **Plastilin**: Myk leire som aldri tørker, fin til å øve med

På skolen bruker vi ofte lufttørkende leire eller naturlig leire som brennes.`,
    },
    {
      id: 'kunst-5-2-1-text-3',
      type: 'text',
      content: `**Grunnleggende teknikker**

**1. Kjevling**
Rull ut leiren med en kjevle til en flat plate. Bruk trepinner på sidene for å få jevn tykkelse.

**2. Pølseteknikk (coiling)**
Rull leiren til lange pølser og bygg opp former ved å legge pølsene oppå hverandre i ringer.

**3. Klype (pinching)**
Start med en ball og klyp og form med fingrene. Perfekt for små skåler!

**4. Uthuling**
Skjær ut eller hul ut former fra en leireblokk.`,
    },
    {
      id: 'kunst-5-2-1-tip-1',
      type: 'tip',
      title: 'Slip - leirelim!',
      content: `Når du skal feste to leirebiter sammen:
1. Riss opp begge overflatene med en gaffel eller spiss
2. Påfør "slip" (leire blandet med vann til en grøtete masse)
3. Trykk delene sammen og stryk over skjøten
Dette hindrer at delene faller av når leiren tørker!`,
    },
    {
      id: 'kunst-5-2-1-text-4',
      type: 'text',
      content: `**Verktøy for leirearbeid**

- **Kjevle**: Ruller ut leiren
- **Trepinner**: Holder jevn tykkelse
- **Modellerverktøy**: Spisse pinner for detaljer
- **Skjæreverktøy**: For å kutte leire
- **Svamp**: Holder leiren fuktig og glatter overflaten
- **Gaffel**: Risser opp overflater for slip`,
    },
    {
      id: 'kunst-5-2-1-warning-1',
      type: 'warning',
      title: 'Viktig å huske',
      content: `- Luftbobler i leiren kan få den til å sprekke eller eksplodere i ovnen! Kna leiren godt.
- Tykke deler tørker langsommere enn tynne - prøv å holde jevn tykkelse
- Hold ubrukt leire i plastpose så den ikke tørker ut
- Dekk arbeidet med fuktig klut hvis du skal pause`,
    },
    {
      id: 'kunst-5-2-1-example-1',
      type: 'example',
      title: 'Lag en liten skål med klypeteknikk',
      content: `1. Ta en ball av leire på størrelse med en tennisball
2. Trykk tommelen ned i midten, men ikke helt til bunnen
3. Klyp rundt med tommelen på innsiden og fingrene på utsiden
4. Roter mens du klyper for å få jevne vegger
5. Glatt med en fuktig finger eller svamp
6. Dekorér med stempel eller mønster!`,
    },
    {
      id: 'kunst-5-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er "slip" i leirearbeid?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Leire blandet med vann som brukes som lim',
            multipleChoiceOptions: ['Leire blandet med vann som brukes som lim', 'Et verktøy for å skjære leire', 'En type keramikkovn', 'En måte å dekorere på'],
          },
        ],
        solution: 'Slip er leire blandet med vann til en grøtete konsistens. Det brukes som lim for å feste leirebiter sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er det viktig å kna leiren godt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å få ut luftbobler som kan få leiren til å sprekke',
            multipleChoiceOptions: ['For å få ut luftbobler som kan få leiren til å sprekke', 'For å gjøre den hardere', 'For å endre fargen', 'For å gjøre den våtere'],
          },
        ],
        solution: 'Luftbobler i leiren kan få den til å sprekke når den tørker, eller til og med eksplodere i keramikkovnen!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er pølseteknikken (coiling)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å bygge former ved å legge leirepølser oppå hverandre',
            multipleChoiceOptions: ['Å bygge former ved å legge leirepølser oppå hverandre', 'Å kjevle ut leiren til en plate', 'Å klyppe leiren med fingrene', 'Å brenne leiren i ovn'],
          },
        ],
        solution: 'Pølseteknikken går ut på å rulle leiren til lange pølser og bygge opp former ved å legge pølsene i ringer oppå hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en liten skål eller kopp med klypeteknikk.',
        solution: 'Start med en leireball, trykk tommelen ned i midten, og klyp rundt mens du roterer for å lage vegger. Husk å glatte overflaten med fuktige fingre.',
        hints: ['Start med en ball', 'Trykk tommelen ned men ikke helt gjennom', 'Klyp og roter for jevne vegger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_5_2_2: TextbookChapter = {
  id: 'kunst-5-2-2',
  courseId: 'kunst-5',
  chapterNumber: '2.2',
  title: 'Papirkunst og 3D-forming',
  description: 'Utforsk origami, papirkulptur og andre måter å lage tredimensjonale former av papir.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike materialer og teknikker til å uttrykke egne ideer',
    'eksperimentere med papir som tredimensjonalt materiale',
  ],
  content: [
    {
      id: 'kunst-5-2-2-intro',
      type: 'text',
      content: `Papir er ikke bare til å tegne på - det kan også brettes, klippes, krølles og bygges til fantastiske tredimensjonale skulpturer! Fra japansk origami til moderne papirkunst er mulighetene uendelige.`,
    },
    {
      id: 'kunst-5-2-2-def-1',
      type: 'definition',
      title: 'Origami',
      content: `Origami er den japanske kunsten å brette papir. Ordet kommer fra "ori" (brette) og "kami" (papir). Tradisjonelt brukes et kvadratisk ark uten lim eller saks - bare bretting!`,
    },
    {
      id: 'kunst-5-2-2-text-2',
      type: 'text',
      content: `**Ulike teknikker med papir**

**Origami**: Bretting av papir til figurer
**Kirigami**: Kombinasjon av bretting og klipping
**Pop-up**: Papir som folder seg ut til 3D-figurer
**Papirkulptur**: Bygge skulpturer av papir med lim
**Quilling**: Rulle tynne papirstrimler til mønstre
**Papirmaché**: Papir og lim over en form`,
    },
    {
      id: 'kunst-5-2-2-text-3',
      type: 'text',
      content: `**Grunnleggende bretteteknikker**

- **Dalbrette**: Brettekanten peker nedover som en dal
- **Fjellbrette**: Brettekanten peker oppover som et fjell
- **Squash-brette**: Åpne en lomme og trykke flat
- **Reverse fold**: Brette inn i seg selv
- **Petal fold**: Brettemønster som danner "kronblader"

De fleste origamifigurer bruker en kombinasjon av disse teknikkene!`,
    },
    {
      id: 'kunst-5-2-2-tip-1',
      type: 'tip',
      title: 'Tips for gode bretter',
      content: `- Bruk fingerneglen eller en linjal til å lage skarpe bretter
- Start alltid med et nøyaktig kvadratisk papir
- Følg instruksjonene nøye - rekkefølgen er viktig!
- Øv først med vanlig papir før du bruker fint papir`,
    },
    {
      id: 'kunst-5-2-2-example-1',
      type: 'example',
      title: 'Brett en enkel papirfugl',
      content: `1. Start med et kvadratisk papir
2. Brett diagonalt til en trekant
3. Brett trekanten i to igjen
4. Åpne og brett hjørnene inn mot midten
5. Snu og gjenta på andre siden
6. Brett en spiss utover til nebb
7. Brett en annen spiss til hale
8. Løft vingene litt - fuglen er klar!`,
    },
    {
      id: 'kunst-5-2-2-text-4',
      type: 'text',
      content: `**Papirkulptur med lim**

For større prosjekter kan du kombinere papir med lim:

1. **Sylindre og kjegler**: Rull papir og lim kantene
2. **Kasser og kuber**: Brett og lim til geometriske former
3. **Stripeskulptur**: Klipp strimler og bøy, krøll eller flette dem
4. **Lag-på-lag**: Bygg opp dybde med flere papirlag
5. **Papirrelief**: Lag bilder som stikker ut fra bakgrunnen`,
    },
    {
      id: 'kunst-5-2-2-text-5',
      type: 'text',
      content: `**Pop-up-kort**

Pop-up-kort folder seg ut til 3D når du åpner dem:

1. Brett et A4-ark i to (dette er kortet)
2. Gjør to parallelle kutt fra brettet innover
3. Brett den lille flappen oppover
4. Lukk kortet og åpne igjen - flappen popper ut!
5. Lim figurer eller dekorasjoner på flappen

Du kan lage flere flapper i ulike størrelser for komplekse pop-ups!`,
    },
    {
      id: 'kunst-5-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr ordet "origami"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Brettet papir (fra japansk)',
            multipleChoiceOptions: ['Brettet papir (fra japansk)', 'Klippet papir', 'Malt papir', 'Krøllet papir'],
          },
        ],
        solution: 'Origami kommer fra de japanske ordene "ori" (brette) og "kami" (papir), altså "brettet papir".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom origami og kirigami?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kirigami bruker også klipping, origami bare bretting',
            multipleChoiceOptions: ['Kirigami bruker også klipping, origami bare bretting', 'De er det samme', 'Origami er kinesisk, kirigami er japansk', 'Kirigami bruker lim'],
          },
        ],
        solution: 'Origami er ren bretting uten klipping eller lim. Kirigami kombinerer bretting med klipping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en "dalbrette"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En brette der kanten peker nedover som en dal',
            multipleChoiceOptions: ['En brette der kanten peker nedover som en dal', 'En brette der kanten peker oppover', 'Et kutt i papiret', 'En type lim'],
          },
        ],
        solution: 'En dalbrette er når brettekanten peker nedover, slik at papiret former en dal. Det motsatte er en fjellbrette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et pop-up-kort med minst én figur som popper ut.',
        solution: 'Brett et ark i to, lag parallelle kutt fra brettet, brett flappen ut, og lim en dekorasjon på flappen.',
        hints: ['Brett arket først', 'Lag kuttene fra brettekanten', 'Brett flappen før du lukker kortet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Design og mønster
// ============================================================================

export const CHAPTER_KUNST_5_3_1: TextbookChapter = {
  id: 'kunst-5-3-1',
  courseId: 'kunst-5',
  chapterNumber: '3.1',
  title: 'Mønster og symmetri',
  description: 'Oppdag hvordan mønstre og symmetri brukes i kunst og design.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og bruke symmetri og mønstre i eget arbeid',
    'gjenkjenne mønstre i kunst, design og natur',
  ],
  content: [
    {
      id: 'kunst-5-3-1-intro',
      type: 'text',
      content: `Mønstre er overalt rundt oss - i naturen, i klær, i bygninger og i kunst. Når du lærer å lage og forstå mønstre, får du et kraftig verktøy for å skape flott design!`,
    },
    {
      id: 'kunst-5-3-1-def-1',
      type: 'definition',
      title: 'Mønster',
      content: `Et mønster er noe som gjentar seg på en forutsigbar måte. Det kan være former, farger, linjer eller bilder som kommer igjen og igjen. Mønstre kan være enkle eller veldig kompliserte.`,
    },
    {
      id: 'kunst-5-3-1-text-2',
      type: 'text',
      content: `**Symmetri**

Symmetri betyr at noe er likt på begge sider av en linje. Tenk på et sommerfuglbilde - høyre og venstre vinge er speilbilder av hverandre!

**Typer symmetri:**
- **Speiling (refleksjonssymmetri)**: Like på begge sider av en linje
- **Rotasjonssymmetri**: Ser likt ut når du snurrer det rundt
- **Translasjonssymmetri**: Mønsteret gjentas ved å flytte det`,
    },
    {
      id: 'kunst-5-3-1-text-3',
      type: 'text',
      content: `**Mønstre i naturen**

Naturen er full av fantastiske mønstre:
- **Snøkrystaller**: Sekssidig symmetri
- **Solsikker**: Spiralmønster
- **Zebra**: Striper
- **Sjiraff**: Flekker
- **Honningkake**: Sekskanter
- **Sneglehus**: Spiral
- **Blader**: Nervestrukturer

Kunstnere har alltid latt seg inspirere av naturens mønstre!`,
    },
    {
      id: 'kunst-5-3-1-tip-1',
      type: 'tip',
      title: 'Lag symmetriske bilder',
      content: `Prøv dette:
1. Brett et papir i to
2. Tegn halvparten av et ansikt eller en sommerfugl langs brettet
3. Klipp ut
4. Åpne papiret - perfekt symmetri!

Du kan også male på den ene siden, brette mens malingen er våt, og få et symmetrisk mønster.`,
    },
    {
      id: 'kunst-5-3-1-text-4',
      type: 'text',
      content: `**Lage mønstre**

For å lage et mønster trenger du:
1. **En enhet**: En form, et bilde eller et motiv
2. **En regel**: Hvordan enheten skal gjentas

**Måter å gjenta på:**
- **Rad**: Ved siden av hverandre i en linje
- **Rutenett**: I rader og kolonner
- **Halvforskyvning**: Annenhver rad er forskjøvet
- **Rotasjon**: Snudd rundt et punkt
- **Speiling**: Annenhver er speilvendt`,
    },
    {
      id: 'kunst-5-3-1-example-1',
      type: 'example',
      title: 'Lag et enkelt mønster',
      content: `1. Tegn en enkel form, f.eks. en trekant
2. Tegn den samme trekanten ved siden av
3. Gjenta i en hel rad
4. Start en ny rad under
5. Prøv å forskyve annenhver rad for mer interessant mønster
6. Legg til farger - bruk fargeregler (f.eks. annenhver rød og blå)`,
    },
    {
      id: 'kunst-5-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er symmetri?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Når noe er likt på begge sider av en linje',
            multipleChoiceOptions: ['Når noe er likt på begge sider av en linje', 'Når noe gjentar seg', 'Når noe er fargerikt', 'Når noe er rundt'],
          },
        ],
        solution: 'Symmetri betyr at noe er likt på begge sider av en linje, som en sommerfugl der vingene er speilbilder av hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva trenger du for å lage et mønster?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En enhet (motiv) og en regel for hvordan den gjentas',
            multipleChoiceOptions: ['En enhet (motiv) og en regel for hvordan den gjentas', 'Bare mange farger', 'Bare én stor tegning', 'Bare symmetri'],
          },
        ],
        solution: 'For å lage et mønster trenger du et motiv (enhet) som du gjentar etter en bestemt regel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type symmetri har et bilhjul?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Rotasjonssymmetri',
            multipleChoiceOptions: ['Rotasjonssymmetri', 'Speilsymmetri', 'Translasjonssymmetri', 'Ingen symmetri'],
          },
        ],
        solution: 'Et bilhjul har rotasjonssymmetri - det ser likt ut uansett hvordan du snurrer det rundt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et mønster med en form du velger selv. Bruk minst to farger.',
        solution: 'Velg en enkel form, bestem en regel for gjentakelse (f.eks. rutenett eller halvforskyvning), og fyll med farger etter et system.',
        hints: ['Start med en enkel form', 'Lag en regel for hvordan formen gjentas', 'Bruk fargene systematisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_5_3_2: TextbookChapter = {
  id: 'kunst-5-3-2',
  courseId: 'kunst-5',
  chapterNumber: '3.2',
  title: 'Enkelt produktdesign',
  description: 'Lær hvordan designere tenker når de lager ting vi bruker hver dag.',
  estimatedMinutes: 50,
  competenceGoals: [
    'undersøke og presentere en enkel designprosess',
    'lage skisser og prototyper av egne ideer',
  ],
  content: [
    {
      id: 'kunst-5-3-2-intro',
      type: 'text',
      content: `Har du noen gang tenkt på at alt rundt deg er designet av noen? Stolen du sitter på, pennen du skriver med, ryggsekken din - alt er laget av designere som har tenkt nøye gjennom hvordan tingene skal se ut og fungere.`,
    },
    {
      id: 'kunst-5-3-2-def-1',
      type: 'definition',
      title: 'Design',
      content: `Design handler om å planlegge hvordan noe skal se ut og fungere. En designer tenker på hvem som skal bruke tingen, hva den skal brukes til, og hvordan den kan bli best mulig.`,
    },
    {
      id: 'kunst-5-3-2-text-2',
      type: 'text',
      content: `**Designprosessen**

Designere følger ofte disse stegene:

1. **Oppdage**: Hva er problemet? Hvem har dette problemet?
2. **Undersøke**: Hvordan løser andre dette? Hva finnes allerede?
3. **Idéer**: Tenk opp mange forskjellige løsninger (skisser!)
4. **Velge**: Hvilken idé er best? Hvorfor?
5. **Lage**: Bygg en enkel versjon (prototype)
6. **Teste**: Fungerer det? Hva kan bli bedre?
7. **Forbedre**: Gjør endringer basert på testing`,
    },
    {
      id: 'kunst-5-3-2-text-3',
      type: 'text',
      content: `**Form og funksjon**

Designere tenker på to viktige ting:

**Funksjon**: Hvordan tingen virker
- Er den praktisk å bruke?
- Gjør den jobben sin godt?
- Er den trygg?

**Form**: Hvordan tingen ser ut
- Er den fin å se på?
- Passer fargene sammen?
- Føles den god å ta på?

De beste designene har både god form OG god funksjon!`,
    },
    {
      id: 'kunst-5-3-2-tip-1',
      type: 'tip',
      title: 'Skisseteknikk',
      content: `Når du skisser ideer:
- Tegn raskt - ikke bekymre deg om at det blir perfekt
- Lag mange forskjellige skisser
- Skriv notater på skissene (mål, materialer, hvordan det virker)
- Ikke visk ut - start heller på nytt hvis du får en bedre idé`,
    },
    {
      id: 'kunst-5-3-2-example-1',
      type: 'example',
      title: 'Designe en blyantholder',
      content: `**Problem**: Blyantene mine ruller av bordet

**Ideer** (skiss mange!):
- En kopp å stå blyanter i
- En skuff under bordet
- En holder som klemmes fast på bordet
- En matte med spor til blyanter

**Velge**: Koppen er enklest å lage

**Prototype**: Lag en enkel kopp av papp eller leire

**Test**: Fungerer det? Velter koppen? Er den stor nok?`,
    },
    {
      id: 'kunst-5-3-2-text-4',
      type: 'text',
      content: `**Prototyper**

En prototype er en enkel testversjon av designet ditt. Den trenger ikke være perfekt!

**Enkle materialer til prototyper:**
- Papp og kartong
- Papir og tape
- Leire
- Lego eller andre byggeklosser
- Gjenbruksmaterialer

Poenget er å teste ideen raskt og billig før du lager den ordentlige versjonen.`,
    },
    {
      id: 'kunst-5-3-2-text-5',
      type: 'text',
      content: `**Bærekraftig design**

Gode designere tenker også på miljøet:
- Hvilke materialer brukes?
- Varer produktet lenge?
- Kan det repareres?
- Kan det gjenbrukes eller resirkuleres?
- Bruker produksjonen mye energi?

Kan du designe noe som er bra for både mennesker OG naturen?`,
    },
    {
      id: 'kunst-5-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom form og funksjon i design?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Form er hvordan noe ser ut, funksjon er hvordan det virker',
            multipleChoiceOptions: ['Form er hvordan noe ser ut, funksjon er hvordan det virker', 'De betyr det samme', 'Form er størrelsen, funksjon er fargen', 'Form er for voksne, funksjon er for barn'],
          },
        ],
        solution: 'Form handler om utseende (hvordan noe ser ut), mens funksjon handler om bruk (hvordan noe virker).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en prototype?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En enkel testversjon av et produkt',
            multipleChoiceOptions: ['En enkel testversjon av et produkt', 'Det ferdige produktet', 'En tegning av produktet', 'En liste over materialer'],
          },
        ],
        solution: 'En prototype er en enkel versjon som brukes til å teste om designet fungerer, før man lager den endelige versjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er det første steget i designprosessen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Oppdage problemet',
            multipleChoiceOptions: ['Oppdage problemet', 'Lage produktet', 'Tegne skisser', 'Selge produktet'],
          },
        ],
        solution: 'Designprosessen starter med å oppdage og forstå problemet du vil løse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Design en bedre skolesekk! Tegn minst 3 ulike skisser med nye ideer.',
        solution: 'Tenk på problemer med vanlige sekker (for tung, ting faller ut, vanskelig å finne ting) og tegn løsninger. Skriv notater om hva som er spesielt med hver idé.',
        hints: ['Hva er problemene med sekken din nå?', 'Hva hadde gjort den bedre?', 'Tegn raskt - perfeksjon er ikke viktig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Kunsthistorie - Kjente kunstnere
// ============================================================================

export const CHAPTER_KUNST_5_4_1: TextbookChapter = {
  id: 'kunst-5-4-1',
  courseId: 'kunst-5',
  chapterNumber: '4.1',
  title: 'Kjente kunstnere fra fortiden',
  description: 'Møt noen av verdens mest berømte kunstnere og deres fantastiske verk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og samtale om kunst fra ulike perioder',
    'la seg inspirere av kjente kunstnere i eget arbeid',
  ],
  content: [
    {
      id: 'kunst-5-4-1-intro',
      type: 'text',
      content: `Kunst har eksistert siden mennesker begynte å tegne på hulevegger for over 40 000 år siden! La oss møte noen kunstnere som har laget verk som fortsatt imponerer oss i dag.`,
    },
    {
      id: 'kunst-5-4-1-text-1',
      type: 'text',
      content: `**Leonardo da Vinci (1452-1519)**

Leonardo var en italiensk kunstner og oppfinner som levde for over 500 år siden. Han er kanskje den mest allsidige personen som noen gang har levd!

**Kjente verk:**
- **Mona Lisa**: Verdens mest berømte maleri, kjent for hennes mystiske smil
- **Nattverden**: Et enormt maleri av Jesus med sine disipler

**Visste du at:** Leonardo skrev baklengs! Du må bruke et speil for å lese notatene hans. Han studerte også anatomi, konstruerte flymaskiner, og designet krigsredskaper.`,
    },
    {
      id: 'kunst-5-4-1-text-2',
      type: 'text',
      content: `**Vincent van Gogh (1853-1890)**

Vincent var en nederlandsk kunstner som malte med sterke farger og synlige penselstrøk. I løpet av livet solgte han nesten ingen malerier, men i dag er de verdt milliarder!

**Kjente verk:**
- **Stjernenatten**: En virvlende nattehimmel over en landsby
- **Solsikker**: Gule solsikker i en vase
- **Soverommet**: Et bilde av hans enkle soverom

**Stil:** Van Gogh brukte tykke penselstrøk og sterke farger for å vise følelser. Han sa at han malte med hjertet, ikke bare med øynene.`,
    },
    {
      id: 'kunst-5-4-1-text-3',
      type: 'text',
      content: `**Claude Monet (1840-1926)**

Monet var en fransk kunstner som startet en helt ny stil kalt impresjonisme. Han malte utendørs og fanget hvordan lyset endret seg gjennom dagen.

**Kjente verk:**
- **Vannliljer**: Mange malerier av dammen i hagen hans
- **Impression, soloppgang**: Maleriet som ga navnet til impresjonismen
- **Høystakker**: Den samme høystakken malt på ulike tider av dagen

**Stil:** Monet brukte korte, raske penselstrøk og lyse farger. Opp nært ser maleriene nesten uskarpe ut, men på avstand danner de vakre bilder.`,
    },
    {
      id: 'kunst-5-4-1-def-1',
      type: 'definition',
      title: 'Impresjonisme',
      content: `Impresjonisme er en kunststil fra 1800-tallet der kunstnerne prøvde å fange øyeblikkets inntrykk ("impression" på fransk). De malte ofte utendørs og fokuserte på lys og farger i stedet for nøyaktige detaljer.`,
    },
    {
      id: 'kunst-5-4-1-text-4',
      type: 'text',
      content: `**Pablo Picasso (1881-1973)**

Picasso var en spansk kunstner som endret kunsten fullstendig. Han grunnla kubismen, der ting vises fra flere vinkler samtidig.

**Kjente verk:**
- **Guernica**: Et stort svart-hvitt maleri om krigens grusomheter
- **De tre musikerne**: Musikere malt i kantete, fargerike former
- **Den gamle gitarspilleren**: Fra hans "blå periode"

**Stil:** Picasso eksperimenterte hele livet. Han sa: "Det tok meg fire år å male som Rafael, men hele livet å male som et barn."`,
    },
    {
      id: 'kunst-5-4-1-tip-1',
      type: 'tip',
      title: 'La deg inspirere!',
      content: `Å kopiere mesterverk er en fin måte å lære på. Kunstnere har alltid studert og kopiert hverandre. Prøv å male din egen versjon av Stjernenatten eller lag et kubistisk portrett inspirert av Picasso!`,
    },
    {
      id: 'kunst-5-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem malte Mona Lisa?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Leonardo da Vinci',
            multipleChoiceOptions: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
          },
        ],
        solution: 'Leonardo da Vinci malte Mona Lisa for over 500 år siden. Det er verdens mest berømte maleri.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken kunstner er kjent for maleriet "Stjernenatten"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Vincent van Gogh',
            multipleChoiceOptions: ['Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet', 'Pablo Picasso'],
          },
        ],
        solution: 'Vincent van Gogh malte Stjernenatten i 1889. Det viser en virvlende nattehimmel over en landsby.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er impresjonisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En kunststil som fokuserer på lys og øyeblikkets inntrykk',
            multipleChoiceOptions: ['En kunststil som fokuserer på lys og øyeblikkets inntrykk', 'Malerier av bare blå ting', 'Kunst laget av barn', 'Skulpturer av is'],
          },
        ],
        solution: 'Impresjonisme er en kunststil der kunstnerne fanget øyeblikkets inntrykk med raske penselstrøk og fokus på lys.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Mal et bilde inspirert av én av kunstnerne du har lært om.',
        solution: 'Velg en kunstner og studer stilen deres. Prøv å bruke lignende teknikker - van Goghs tykke strøk, Monets lyse farger, eller Picassos kantete former.',
        hints: ['Velg din favorittkunstner', 'Se på hvordan de brukte pensel og farger', 'Prøv å etterligne teknikken deres'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_5_4_2: TextbookChapter = {
  id: 'kunst-5-4-2',
  courseId: 'kunst-5',
  chapterNumber: '4.2',
  title: 'Norske kunstnere og kunst fra vår tid',
  description: 'Utforsk norsk kunst og kunstnere som lever og arbeider i dag.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og samtale om norsk kunst og samtidskunst',
    'forstå at kunst kan uttrykke følelser og budskap',
  ],
  content: [
    {
      id: 'kunst-5-4-2-intro',
      type: 'text',
      content: `Norge har mange fantastiske kunstnere - både fra fortiden og nåtiden. La oss møte noen av dem og se hvordan norsk natur og kultur har inspirert kunsten!`,
    },
    {
      id: 'kunst-5-4-2-text-1',
      type: 'text',
      content: `**Edvard Munch (1863-1944)**

Edvard Munch er Norges mest berømte kunstner. Han malte følelser - angst, kjærlighet, sjalusi og frykt.

**Kjente verk:**
- **Skrik**: En av verdens mest kjente bilder - en figur som skriker under en rød himmel
- **Madonna**: Et mystisk kvinneportrett
- **Syk pike**: Basert på minnet om søsterens død

**Stil:** Munch brukte sterke farger og bølgende linjer for å vise følelser. Han sa: "Jeg maler ikke det jeg ser, men det jeg følte."

I Oslo har vi et helt museum dedikert til Munch - Munchmuseet!`,
    },
    {
      id: 'kunst-5-4-2-text-2',
      type: 'text',
      content: `**Gustav Vigeland (1869-1943)**

Vigeland er Norges mest kjente skulptør. Han skapte Vigelandsparken i Oslo med over 200 skulpturer!

**Kjente verk:**
- **Monolitten**: En 14 meter høy søyle med 121 mennesker
- **Sinnataggen**: En liten sint gutt som tramper i bakken
- **Livshjulet**: En sirkel av mennesker

**Tema:** Vigeland viste menneskelivet fra fødsel til død - glede, sorg, kjærlighet og konflikter. Alle skulpturene viser nakne mennesker fordi han ville vise det universelt menneskelige.`,
    },
    {
      id: 'kunst-5-4-2-text-3',
      type: 'text',
      content: `**Kunst fra vår tid (samtidskunst)**

Samtidskunst er kunst som lages i dag. Den kan være veldig annerledes enn tradisjonell kunst!

**Typer samtidskunst:**
- **Installasjoner**: Hele rom fylt med kunst du kan gå inn i
- **Street art**: Kunst på gater og vegger
- **Digital kunst**: Kunst laget på datamaskiner
- **Performance**: Kunst der kunstneren gjør en handling
- **Konseptkunst**: Kunst der ideen er viktigere enn objektet`,
    },
    {
      id: 'kunst-5-4-2-text-4',
      type: 'text',
      content: `**Kjente samtidskunstnere**

**Banksy** (britisk, ukjent identitet):
- Lager gatekunst med politiske budskap
- Bruker sjablonger for å male raskt
- Verkene hans dukker opp over hele verden

**Yayoi Kusama** (japansk, f. 1929):
- Kjent for prikker overalt!
- Lager speilrom der du føler deg uendelig
- Bruker sterke farger og gjentakelse

**Olafur Eliasson** (dansk-islandsk, f. 1967):
- Lager installasjoner med lys, vann og natur
- Hadde en kunstig sol i et museum i London!`,
    },
    {
      id: 'kunst-5-4-2-tip-1',
      type: 'tip',
      title: 'Besøk et kunstmuseum!',
      content: `I Norge har vi mange flotte kunstmuseer:
- **Munchmuseet** i Oslo
- **Nasjonalmuseet** i Oslo
- **KODE** i Bergen
- **Kistefosmuseet** i Akershus
- **Vigelandsparken** i Oslo (utendørs!)

Å se kunst i virkeligheten er noe helt annet enn å se bilder i en bok!`,
    },
    {
      id: 'kunst-5-4-2-def-1',
      type: 'definition',
      title: 'Samtidskunst',
      content: `Samtidskunst er kunst fra vår egen tid. Den kan bruke alle mulige materialer og teknikker, og handler ofte om å stille spørsmål eller få folk til å tenke. Noen ganger er den vanskelig å forstå - og det er helt greit!`,
    },
    {
      id: 'kunst-5-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem malte "Skrik"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Edvard Munch',
            multipleChoiceOptions: ['Edvard Munch', 'Gustav Vigeland', 'Banksy', 'Leonardo da Vinci'],
          },
        ],
        solution: 'Edvard Munch malte Skrik i 1893. Det er et av verdens mest gjenkjennelige kunstverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skapte Gustav Vigeland?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Vigelandsparken med over 200 skulpturer',
            multipleChoiceOptions: ['Vigelandsparken med over 200 skulpturer', 'Mona Lisa', 'Skrik', 'Stjernenatten'],
          },
        ],
        solution: 'Gustav Vigeland skapte alle skulpturene i Vigelandsparken i Oslo, inkludert Sinnataggen og Monolitten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er samtidskunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst fra vår egen tid',
            multipleChoiceOptions: ['Kunst fra vår egen tid', 'Kunst fra vikingtiden', 'Bare malerier', 'Bare skulpturer'],
          },
        ],
        solution: 'Samtidskunst er kunst som lages i dag. Den kan bruke alle mulige materialer og teknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-5-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-5-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag din egen "Skrik-versjon"! Tegn eller mal et bilde som uttrykker en sterk følelse.',
        solution: 'Tenk på en følelse (glede, frykt, sinne, overraskelse) og bruk farger og former som uttrykker denne følelsen. Husk at Munch brukte sterke farger og bølgende linjer.',
        hints: ['Velg en følelse å uttrykke', 'Bruk farger som passer til følelsen', 'Overdrev litt - gjør følelsen tydelig!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KUNST_5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KUNST_5_1_1,
  CHAPTER_KUNST_5_1_2,
  CHAPTER_KUNST_5_1_3,
  CHAPTER_KUNST_5_2_1,
  CHAPTER_KUNST_5_2_2,
  CHAPTER_KUNST_5_3_1,
  CHAPTER_KUNST_5_3_2,
  CHAPTER_KUNST_5_4_1,
  CHAPTER_KUNST_5_4_2,
];

/**
 * Håndverk, design og produktutvikling VG1 - Del 5: Tekstil
 *
 * Dekker LK20 læreplan - Tekstilkapitler 5.1-5.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Tekstilfibre og stoffkvaliteter
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5_1: TextbookChapter = {
  id: 'handverk-design-vg1-5-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5.1',
  title: 'Tekstilfibre og stoffkvaliteter',
  description: 'Grundig innføring i ulike tekstilfibre, deres egenskaper og bruksområder. Elevene lærer å identifisere og vurdere stoffkvaliteter for ulike formål.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for de ulike materialenes egenskaper og funksjonsområder',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-1-intro',
      type: 'text',
      content: `Tekstiler omgir oss overalt - i klærne vi bruker, møblene vi sitter i og sengetøyet vi sover i. For å kunne velge riktig stoff til et prosjekt, må du forstå hvordan ulike fibre oppfører seg. I dette kapittelet lærer du om naturlige og syntetiske fibre, hvordan du kjenner dem igjen, og hvilke egenskaper som gjør dem egnet til ulike formål.`,
    },
    {
      id: 'handverk-design-vg1-5-1-def-1',
      type: 'definition',
      title: 'Tekstilfiber',
      content: `En tekstilfiber er det grunnleggende byggeelementet i tekstiler. Fibre spinnes til garn, som igjen veves eller strikkes til stoff. Fibrenes egenskaper bestemmer stoffets kvalitet og bruksområde.`,
    },
    {
      id: 'handverk-design-vg1-5-1-def-2',
      type: 'definition',
      title: 'Stapelfiber og filament',
      content: `Stapelfibre er korte fibre som spinnes sammen til garn (som bomull og ull). Filament er lange, sammenhengende fibre (som silke og de fleste syntetiske fibre). Filamentgarn er jevnere og glattere enn stapelgarn.`,
    },
    {
      id: 'handverk-design-vg1-5-1-text-1',
      type: 'text',
      content: `**Naturfibre fra planter**

Plantefibre kommer fra ulike deler av planten og har forskjellige egenskaper:

**Bomull**
- Kommer fra bomullsplantens frøhår
- Myk, pustende og behagelig mot huden
- Absorberer fuktighet godt (opptil 25% av sin egen vekt)
- Tåler høy vask og koking
- Krøller lett og tørker relativt sakte
- Brukes til: Klær, sengetøy, håndklær, lerret

**Lin**
- Kommer fra stilken på linplanten
- Sterkt og holdbart, blir mykere med bruk
- Kjølig å bruke, absorberer fuktighet raskt
- Krøller svært lett
- Naturlig bakteriedrepende
- Brukes til: Sommerklær, duker, gardiner, kunstnerlerret

**Hamp og jute**
- Grove plantefibre fra stilken
- Svært sterke og holdbare
- Brukes til: Tau, sekker, tepper, møbeltekstiler`,
    },
    {
      id: 'handverk-design-vg1-5-1-text-2',
      type: 'text',
      content: `**Naturfibre fra dyr**

Animalske fibre kommer fra pelsen eller sekretene til dyr:

**Ull**
- Kommer fra saueull (men også geit, kanin, alpakka)
- Naturlig krøllet, skaper luftlommer som isolerer
- Holder varmen selv når den er våt
- Naturlig vannavstøtende (lanolin)
- Elastisk og formbestandig
- Krever forsiktig vask (kan krympe og tove)
- Brukes til: Vintertøy, gensere, tepper, bunader

**Silke**
- Produseres av silkeormen
- Naturens sterkeste naturfiber
- Glatt, skinnende overflate
- Kjølig om sommeren, varm om vinteren
- Absorberer fuktighet godt
- Krever forsiktig håndtering
- Brukes til: Festklær, skjerf, slips, fôrstoff

**Kasjmir og mohair**
- Kasjmir: Fra kasjmirgeitens underpels, ekstremt myk
- Mohair: Fra angoraegiten, skinnende og slitesterk
- Brukes til: Eksklusive klær og tilbehør`,
    },
    {
      id: 'handverk-design-vg1-5-1-text-3',
      type: 'text',
      content: `**Syntetiske fibre**

Syntetiske fibre er menneskapte, ofte fra petroleum:

**Polyester**
- Verdens mest brukte syntetiske fiber
- Sterkt, slitesterkt og formbestandig
- Tørker raskt, krøller lite
- Puster dårlig, kan føles klamt
- Tar opp lukt lettere enn naturfibre
- Brukes til: Sportsklær, fôrstoff, fleece

**Polyamid (nylon)**
- Svært sterkt og elastisk
- Lett og slitesterkt
- Tørker raskt
- Brukes til: Strømpebukser, sportsklær, sekker, fallskjermer

**Akryl**
- Minner om ull i utseende
- Lett og varm
- Allergifritt
- Kan nuppes over tid
- Brukes til: Strikkeplagg, tepper, kunstpels

**Elastan (spandex/lycra)**
- Ekstremt elastisk (kan strekkes til 5-7 ganger egen lengde)
- Brukes alltid i blanding med andre fibre
- Gir stretch til klær
- Brukes til: Sportsklær, undertøy, badetøy`,
    },
    {
      id: 'handverk-design-vg1-5-1-def-3',
      type: 'definition',
      title: 'Regenererte fibre',
      content: `Regenererte fibre (som viskose, modal og lyocell) lages av naturlige råstoffer (cellulose fra tre) som behandles kjemisk. De kombinerer naturfibrenes komfort med syntetiske fibres jevnhet og er ofte mer bærekraftige enn helsyntetiske fibre.`,
    },
    {
      id: 'handverk-design-vg1-5-1-text-4',
      type: 'text',
      content: `**Testing av tekstilfibre**

Du kan identifisere fibre gjennom ulike tester:

**Brennetest**
- Bomull og lin: Brenner raskt med gul flamme, lukter brent papir, etterlater grå aske
- Ull og silke: Brenner sakte, selvslukende, lukter brent hår/fjær, etterlater svart kule
- Polyester: Smelter og drypper, sort røyk, etterlater hard svart kule
- Nylon: Smelter, selvslukende, lukter plast, etterlater hard brun kule
- Akryl: Brenner raskt med svart røyk, lukter surt

**Vanntest**
- Bomull og lin: Synker raskt, absorberer vann
- Ull: Flyter først, absorberer sakte
- Syntetiske fibre: Flyter, absorberer lite

**Krølletest**
- Lin og bomull: Krøller lett, blir stående
- Ull og silke: Krøller, men retter seg ut
- Polyester: Krøller nesten ikke

**VIKTIG:** Brennetester skal alltid gjøres under voksenveiledning med brannslukningsutstyr tilgjengelig!`,
    },
    {
      id: 'handverk-design-vg1-5-1-tip-1',
      type: 'tip',
      title: 'Les vaskelappen',
      content: `Vaskelappen i klær forteller deg mye om fiberinnholdet. Se etter symboler for vask, tørking, stryking og rensing. Naturfibre tåler ofte høyere varme enn syntetiske fibre, men ull og silke krever forsiktig behandling.`,
    },
    {
      id: 'handverk-design-vg1-5-1-example-1',
      type: 'example',
      title: 'Velge stoff til et prosjekt',
      problem: 'Du skal sy en sportsbag som skal brukes til trening. Hvilke egenskaper bør stoffet ha, og hvilke fibre er aktuelle?',
      solution: `**Krav til stoffet:**
- Slitesterkt (tåler daglig bruk)
- Vannavstøtende (svette og regn)
- Lett å rengjøre
- Lett i vekt

**Aktuelle fibre:**
- **Nylon (polyamid):** Svært slitesterkt, vannavstøtende, lett. Ideelt for yttersiden.
- **Polyester:** Sterkt, tørker raskt, rimelig. God som alternativ.
- **Bomull med vannavstøtende belegg:** Mer miljøvennlig, men tyngre.

**Anbefaling:** Nylon til yttersiden for styrke og vannavstøtelse, polyester til fôr for lett vedlikehold.`,
    },
    {
      id: 'handverk-design-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken naturfiber kommer fra frøhårene på en plante?',
        multipleChoiceOptions: [
          'Lin',
          'Bomull',
          'Ull',
          'Silke',
        ],
        solution: 'Bomull kommer fra frøhårene på bomullsplanten.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom stapelfiber og filament.',
        solution: 'Stapelfibre er korte fibre som må spinnes sammen for å lage garn (som bomull og ull). Filament er lange, sammenhengende fibre som kan brukes direkte (som silke og syntetiske fibre). Garn av stapelfibre er ofte luftigere og mykere, mens filamentgarn er glattere og jevnere.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva skjer når du brenner ull?',
        multipleChoiceOptions: [
          'Den brenner raskt med gul flamme og lukter brent papir',
          'Den smelter og drypper med sort røyk',
          'Den brenner sakte, er selvslukende og lukter brent hår',
          'Den brenner raskt og etterlater grå aske',
        ],
        solution: 'Ull brenner sakte, er selvslukende, lukter brent hår/fjær og etterlater en svart kule.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal velge stoff til babyklær.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke egenskaper er viktige for stoff til babyklær?',
            solution: 'Mykt og skånsomt mot huden, pustende, absorberer fuktighet, tåler hyppig vask, allergifritt.',
          },
          {
            label: 'b',
            task: 'Hvilken fiber vil du anbefale, og hvorfor?',
            solution: 'Bomull er ideelt fordi det er mykt, pustende, absorberer fuktighet godt, tåler kokvask og er hypoallergenisk. Økologisk bomull er enda bedre da den er fri for kjemikalier.',
          },
        ],
        solution: 'Bomull er det beste valget for babyklær på grunn av mykhet, pusteevne, fuktabsorbering og vaskbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en sammenlignende tabell over tre fibre du har lært om. Inkluder opprinnelse, viktigste egenskaper og bruksområder.',
        solution: 'Tabellen bør inkludere for eksempel bomull (plantefiber, myk/pustende/vaskbar, klær/sengetøy), ull (animalsk fiber, varm/elastisk/isolerende, vintertøy) og polyester (syntetisk, sterkt/formfast/tørker raskt, sportsklær).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-1-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært om:
- Naturfibre fra planter (bomull, lin, hamp) og dyr (ull, silke)
- Syntetiske fibre (polyester, nylon, akryl, elastan)
- Regenererte fibre som en mellomting
- Hvordan teste og identifisere ulike fibre
- Valg av fiber basert på bruksområde

Kunnskap om fibre er grunnleggende for alt tekstilarbeid og hjelper deg å velge riktig materiale til hvert prosjekt.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tekstilfiber', definition: 'Grunnleggende byggelement i tekstiler som spinnes til garn' },
    { term: 'Stapelfiber', definition: 'Korte fibre som spinnes sammen til garn' },
    { term: 'Filament', definition: 'Lange, sammenhengende fibre' },
    { term: 'Naturfiber', definition: 'Fiber fra naturlige kilder som planter eller dyr' },
    { term: 'Syntetisk fiber', definition: 'Menneskapt fiber, ofte fra petroleum' },
    { term: 'Regenerert fiber', definition: 'Fiber laget av naturlig cellulose behandlet kjemisk' },
    { term: 'Brennetest', definition: 'Metode for å identifisere fibertype ved å brenne en prøve' },
  ],
};

// ============================================================================
// Kapittel 5.2: Grunnleggende søm og syteknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5_2: TextbookChapter = {
  id: 'handverk-design-vg1-5-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5.2',
  title: 'Grunnleggende søm og syteknikker',
  description: 'Opplæring i grunnleggende sømteknikker for hånd og maskin. Elevene lærer om sømmtyper, nåler, tråder og symaskinbruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike grunnleggende håndverksteknikker ved utforming av produkter i harde, myke og plastiske materialer og reflektere over egenskapene til de ulike materialene',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-2-intro',
      type: 'text',
      content: `Å kunne sy er en grunnleggende ferdighet innen tekstilhåndverk. Enten du lager et enkelt pyntepute eller et komplisert plagg, må du beherske grunnleggende sømteknikker. I dette kapittelet lærer du om håndsøm og maskinsøm, ulike sømmtyper og hvordan du velger riktige nåler og tråder til ulike prosjekter.`,
    },
    {
      id: 'handverk-design-vg1-5-2-def-1',
      type: 'definition',
      title: 'Søm',
      content: `En søm er forbindelsen mellom to eller flere stofflag som er sydd sammen. Sømmen kan være synlig eller skjult, og valg av sømmtype avhenger av stoffet, produktet og ønsket utseende.`,
    },
    {
      id: 'handverk-design-vg1-5-2-def-2',
      type: 'definition',
      title: 'Sømmonn',
      content: `Sømmonn er avstanden fra stoffkanten til sømmen. Standard sømmonn er ofte 1 cm eller 1,5 cm. Sømmonnet sikrer at stoffet ikke rakner og gir rom for justeringer.`,
    },
    {
      id: 'handverk-design-vg1-5-2-text-1',
      type: 'text',
      content: `**Grunnleggende håndsøm**

Håndsøm brukes til rikling, feste av knapper, dekorasjon og reparasjoner.

**Tråkling (rikling)**
- Lange, løse sting for midlertidig sammenføying
- Brukes for å holde stofflag på plass før permanent søm
- Fjernes etter maskinsøm
- Stinglengde: 1-2 cm

**Rettstinging**
- Grunnleggende sting som går rett frem
- Brukes til søm som skal være varig
- Stinglengde: 2-5 mm
- Viktig med jevn stinglengde

**Baksting**
- Sterkeste håndsøm
- Hvert sting går tilbake til der forrige sting sluttet
- Ligner på maskinsøm
- Brukes når maskinsøm ikke er mulig

**Kastesting**
- Diagonale sting som går over kanten
- Brukes til å feste kanter og sømmonn
- Forhindrer at stoffet rakner
- Kan brukes til synlig dekorasjon`,
    },
    {
      id: 'handverk-design-vg1-5-2-text-2',
      type: 'text',
      content: `**Flere håndsømsteknikker**

**Faldesting (blindsøm)**
- Nesten usynlig søm for falding
- Tar bare noen tråder fra yttersiden
- Brukes til kanter på klær
- Krever presisjon og tålmodighet

**Sikksaksting**
- Brukes til å sikre kanter mot opptrening
- Overlockmaskin etterligner denne teknikken
- Kan også brukes dekorativt

**Broderi og dekorsøm**
- Korsting, kjedesting, plattsøm
- Brukes til dekorasjon og personlig uttrykk
- Kan formidle tradisjoner og kultur

**Tips for god håndsøm:**
- Bruk tråd som passer til stoffet
- Klipp tråden i 40-50 cm lengde
- Voks tråden for lettere gjennomtrekking
- Hold jevn stramming gjennom hele sømmen
- Start og avslutt med sikringsting`,
    },
    {
      id: 'handverk-design-vg1-5-2-text-3',
      type: 'text',
      content: `**Symaskinen og dens deler**

**Hoveddelene på en symaskin:**
- **Nålestangen:** Holder nålen og beveger den opp og ned
- **Pressfoten:** Holder stoffet på plass under sying
- **Transportør:** Mater stoffet fremover under pressfoten
- **Spolehuset:** Holder undertråden
- **Trådstrammer:** Regulerer trådspenningen
- **Håndhjul:** For manuell bevegelse av nålen
- **Stingvelger:** Velger type sting og stinglengde
- **Bakoverknapp:** For sikringssting

**Før du syr:**
1. Tre opp overtråden korrekt
2. Sett i spolen med undertråd
3. Hent opp undertråden
4. Velg riktig stingtype og lengde
5. Test på en stoffrest

**Viktig sikkerhet:**
- Hold fingrene unna nålen
- Bruk ikke maskinen uten voksenveiledning første gang
- Slå av maskinen når du trer nålen eller bytter pressfot`,
    },
    {
      id: 'handverk-design-vg1-5-2-text-4',
      type: 'text',
      content: `**Grunnleggende maskinsøm**

**Rettsøm**
- Standard søm for å feste stofflag
- Stinglengde: 2,5-3 mm for de fleste stoffer
- Kortere sting for tynne stoffer, lengre for tykke
- Sikres med baksying i begge ender

**Sikksakksting**
- Brukes til stretch-stoffer og kantsikring
- Stingbredde og -lengde kan justeres
- Tillater bevegelse i sømmen

**Overlocksøm**
- Kutter og sikrer kanten samtidig
- Krever overlockmaskin
- Gir profesjonelt utseende
- Standard i konfeksjon

**Knapphullsting**
- Spesialpressfot og automatisk program
- Tilpasses knappstørrelsen
- Klippes opp etter sying

**Dekorative sting**
- Mange maskiner har innebygde mønstre
- Brukes til pynt og personlig preg
- Eksperimenter på stoffrester først`,
    },
    {
      id: 'handverk-design-vg1-5-2-def-3',
      type: 'definition',
      title: 'Trådspenning',
      content: `Trådspenning er balansen mellom over- og undertråden i maskinsøm. Riktig spenning gir sting som ser like ut på begge sider. For stram overtråd gir rynker, for løs gir løkker under stoffet.`,
    },
    {
      id: 'handverk-design-vg1-5-2-text-5',
      type: 'text',
      content: `**Nåler og tråder**

**Valg av nål:**
- **Universalnål:** For vevde stoffer i bomull, lin, polyester
- **Stretchnål (kulenål):** For strikket stoff, forhindrer hull
- **Jeansnål:** Sterk nål for denim og tykke stoffer
- **Silke-/microtexnål:** For tynne, fine stoffer
- **Nålstørrelse:** Tynn nål (60-70) til tynne stoffer, tykk nål (90-100) til tykke

**Valg av tråd:**
- **Polyestertråd:** Allround, sterk, passer de fleste stoffer
- **Bomullstråd:** For bomullsstoffer, naturlig
- **Silketråd:** For fine stoffer og usynlige sømmer
- **Overlocktråd:** Tynnere, til overlockmaskiner
- **Prikkeltråd:** Sterk tråd til knapper og belastede sømmer

**Tommelregel:** Tråden bør passe til stoffet i fiber og tykkelse. Test alltid på en stoffrest før du begynner på prosjektet.`,
    },
    {
      id: 'handverk-design-vg1-5-2-tip-1',
      type: 'tip',
      title: 'Feilsøking maskinsøm',
      content: `Hvis sømmen blir rar: 1) Sjekk at nålen sitter riktig og ikke er skadet. 2) Kontroller at maskinen er riktig tredd. 3) Test trådspenningen. 4) Rengjør transportør og spolehus for lo. 5) Prøv en ny nål - slitte nåler gir dårlig søm.`,
    },
    {
      id: 'handverk-design-vg1-5-2-example-1',
      type: 'example',
      title: 'Sy en rett søm',
      problem: 'Du skal sy to stoffbiter sammen med 1 cm sømmonn. Hvordan gjør du det?',
      solution: `**Fremgangsmåte:**
1. Legg stoffbitene rette mot rette (rettsidene mot hverandre)
2. Fest med knappenåler vinkelrett på sømlinjen
3. Rikle eventuelt for ekstra kontroll
4. Plasser stoffet under pressfoten med kanten langs 1 cm-markeringen
5. Senk pressfoten og sy 2-3 sikringssting bakover
6. Sy fremover med jevnt tempo
7. Fjern nålene rett før de kommer til pressfoten
8. Avslutt med 2-3 sikringssting bakover
9. Klipp trådene og press sømmen`,
    },
    {
      id: 'handverk-design-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken håndsøm er sterkest og ligner mest på maskinsøm?',
        multipleChoiceOptions: [
          'Tråkling',
          'Rettstinging',
          'Baksting',
          'Kastesting',
        ],
        solution: 'Baksting er den sterkeste håndsømmen og ligner mest på maskinsøm fordi hvert sting går tilbake til der forrige sluttet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er sømmonn, og hvorfor er det viktig?',
        solution: 'Sømmonn er avstanden fra stoffkanten til sømmen, vanligvis 1 eller 1,5 cm. Det er viktig fordi det sikrer at stoffet ikke rakner, gir rom for justeringer og reparasjoner, og gjør at sømmen holder bedre over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du skal sy et plagg i stretchstoff.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type nål bør du bruke?',
            solution: 'Stretchnål (kulenål) fordi den har en rund spiss som glir mellom fibrene i stedet for å stikke hull i dem.',
          },
          {
            label: 'b',
            task: 'Hvilken type sting bør du bruke på symaskinen?',
            solution: 'Sikksakksting eller annet elastisk sting som tillater at sømmen strekker seg sammen med stoffet.',
          },
        ],
        solution: 'Til stretchstoff trenger du stretchnål og elastisk sting for at sømmen skal kunne strekke seg.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva gjør transportøren på symaskinen?',
        multipleChoiceOptions: [
          'Holder nålen på plass',
          'Mater stoffet fremover under pressfoten',
          'Strammer tråden',
          'Velger stingtype',
        ],
        solution: 'Transportøren mater stoffet fremover under pressfoten mens du syr.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Øv på de grunnleggende håndsømmene: tråkling, rettstinging, baksting og kastesting. Sy en prøvelapp med alle fire teknikkene.',
        solution: 'Prøvelappen skal vise fire tydelig forskjellige sømmer med jevne sting. Tråkling med lange løse sting, rettstinging med jevne korte sting, baksting med overlappende sting, og kastesting med diagonale sting over kanten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv steg for steg hvordan du sikrer en maskinsøm i starten og slutten.',
        solution: 'I starten: Senk pressfoten, sy 2-3 sting fremover, trykk bakoverknappen og sy 2-3 sting bakover, slipp og fortsett fremover. I slutten: Stopp, trykk bakoverknappen og sy 2-3 sting bakover, slipp og sy 2-3 sting fremover, løft nålen og pressfoten, klipp trådene. Dette forhindrer at sømmen rakner opp.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-2-summary',
      type: 'text',
      content: `**Oppsummering**

Du har lært om:
- Grunnleggende håndsømteknikker: tråkling, rettstinging, baksting, kastesting, faldesting
- Symaskinens hoveddeler og hvordan de fungerer
- Maskinsømteknikker: rettsøm, sikksakksting, overlock
- Valg av nåler og tråder til ulike stoffer
- Hvordan sy en rett søm med riktig sømmonn

God syteknikk kommer med øvelse. Start med enkle prosjekter og bygg opp ferdighetene gradvis.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Søm', definition: 'Forbindelsen mellom stofflag som er sydd sammen' },
    { term: 'Sømmonn', definition: 'Avstanden fra stoffkanten til sømmen' },
    { term: 'Tråkling', definition: 'Midlertidig søm med lange sting for å holde stoff på plass' },
    { term: 'Baksting', definition: 'Sterk håndsøm der hvert sting går tilbake til forrige' },
    { term: 'Trådspenning', definition: 'Balansen mellom over- og undertråden i maskinsøm' },
    { term: 'Transportør', definition: 'Del av symaskinen som mater stoffet fremover' },
    { term: 'Stretchnål', definition: 'Nål med rund spiss for strikket stoff' },
  ],
};

// ============================================================================
// Kapittel 5.3: Mønsterkonstruksjon og tilpasning
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5_3: TextbookChapter = {
  id: 'handverk-design-vg1-5-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5.3',
  title: 'Mønsterkonstruksjon og tilpasning',
  description: 'Innføring i grunnleggende mønsterkonstruksjon for plagg og tekstilprodukter. Elevene lærer å ta mål, konstruere basismønstre og gjøre tilpasninger.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke tradisjonelle målemetoder og tilpasse mønstre og maler',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-3-intro',
      type: 'text',
      content: `Et godt mønster er grunnlaget for et vellykket tekstilprodukt. Enten du syr klær, vesker eller interiørtekstiler, må du kunne ta riktige mål, forstå mønsteroppbygging og tilpasse mønstre til dine behov. I dette kapittelet lærer du de grunnleggende prinsippene for mønsterkonstruksjon.`,
    },
    {
      id: 'handverk-design-vg1-5-3-def-1',
      type: 'definition',
      title: 'Mønster',
      content: `Et mønster (også kalt snitt) er en mal av papir eller kartong som brukes til å klippe ut stoffdeler. Mønsteret viser delens form, grainline (trådretning), sømmonn og eventuelle markeringer for passmerker og fold.`,
    },
    {
      id: 'handverk-design-vg1-5-3-def-2',
      type: 'definition',
      title: 'Grainline (trådretning)',
      content: `Grainline viser hvordan mønsterdelen skal plasseres i forhold til stoffets trådretning. Renningen (lengdetråder) går parallelt med vevkanten og er mest stabil. Å følge grainline er viktig for at plagget skal henge riktig.`,
    },
    {
      id: 'handverk-design-vg1-5-3-text-1',
      type: 'text',
      content: `**Grunnleggende måltagning**

For å konstruere eller tilpasse mønstre må du ta kroppsmål. Her er de viktigste målene for overkropp og underkropp:

**Overkroppsmål:**
- **Brystvidde:** Rundt kroppen på det bredeste punktet over brystet
- **Livvidde:** Rundt kroppen på det smaleste punktet
- **Hoftevidde:** Rundt kroppen på det bredeste punktet over hoftene
- **Skulderbredde:** Fra skulderspiss til skulderspiss over ryggen
- **Ryggbredde:** Tvers over ryggen mellom armhulene
- **Armlengde:** Fra skulderspiss til håndledd med bøyd arm
- **Overarmsvidde:** Rundt overarmen på det bredeste punktet

**Underkroppsmål:**
- **Hoftevidde:** (samme som over)
- **Sidesømlengde:** Fra liv til ønsket lengde
- **Innersømlengde:** Fra skrittet til ønsket lengde
- **Låromkrets:** Rundt låret på det bredeste punktet

**Tips for nøyaktig måling:**
- Bruk et bløtt målebånd
- Stå naturlig og avslappet
- Hold målebåndet vannrett
- Mål gjerne to ganger for sikkerhet`,
    },
    {
      id: 'handverk-design-vg1-5-3-text-2',
      type: 'text',
      content: `**Bevegelsesfrihet og tillegg**

Kroppsmålene er tett inntil kroppen, men klær trenger ekstra vidde for bevegelse og komfort.

**Bevegelsesfrihet (ease):**
- Minste bevegelsesfrihet: 4-6 cm på bryst for tett plagg
- Komfortabel passform: 8-10 cm på bryst
- Romslig passform: 12-15 cm på bryst

**Ulike tillegg:**
- **Brystvidde:** +6-12 cm avhengig av ønsket passform
- **Livvidde:** +2-4 cm for komfort
- **Hoftevidde:** +4-8 cm for bevegelsesfrihet
- **Armlengde:** +1-2 cm for bøyd arm

**Faktorer som påvirker tillegg:**
- Stoffets stretch (stretchstoffer trenger mindre tillegg)
- Plaggtype (tettsittende vs. løstsittende)
- Personlig preferanse
- Bruksområde (formelt vs. hverdags)`,
    },
    {
      id: 'handverk-design-vg1-5-3-text-3',
      type: 'text',
      content: `**Grunnleggende mønsterdeler**

Et enkelt skjortemønster består av disse hoveddelene:

**Forstykke:**
- Dekker forsiden av overkroppen
- Inkluderer ofte knapping eller glidelåsåpning
- Kan ha innsnitt for forming

**Bakstykke:**
- Dekker ryggen
- Ofte litt bredere enn forstykket
- Kan ha midt-rygg-søm eller klippes i fold

**Erme:**
- Settes inn i ermehullet
- Kan være satt inn, raglan eller kimonoerme
- Ermekule må passe til ermehullet

**Krage:**
- Mange ulike typer: skjortekrage, ståkrage, sjalkrage
- Konstrueres separat og settes på

**Mansjetter, lommer, besetninger:**
- Tilleggsdeler som gir funksjon og detaljer

**Markeringer på mønsteret:**
- Grainline (pil for trådretning)
- Fold-linje (dobbel linje mot fold)
- Passmerker (hakk) for matching
- Sømmonn angitt eller inkludert`,
    },
    {
      id: 'handverk-design-vg1-5-3-text-4',
      type: 'text',
      content: `**Tilpasse kjøpemønstre**

De fleste begynner med ferdige mønstre. Her er hvordan du tilpasser dem:

**1. Velg riktig størrelse:**
- Sammenlign dine mål med størrelsestabellen
- Velg etter det viktigste målet (oftest bryst)
- Du kan justere andre mål etterpå

**2. Vanlige tilpasninger:**
- **Forlenge/forkorte:** Klipp mønsteret på justeringslinjen og legg til/ta bort lengde
- **Gjøre bredere/smalere:** Legg til eller ta inn i sidesømmen
- **Justere skulderbredde:** Flytt ermhullsøm inn eller ut
- **Endre halslinje:** Hev eller senk, gjør videre eller trangere

**3. Lag en prøve (toile):**
- Sy opp en enkel versjon i billig stoff
- Prøv og marker justeringer
- Overfør endringene til mønsteret

**4. Dokumenter tilpasningene:**
- Noter hvilke justeringer du har gjort
- Bruk samme justeringer på lignende mønstre
- Bygg opp din personlige mønsterbibliotek`,
    },
    {
      id: 'handverk-design-vg1-5-3-def-3',
      type: 'definition',
      title: 'Toile (prøveplagg)',
      content: `En toile er et prøveplagg sydd i enkelt stoff (som nesselstoff eller bomullslerret) for å teste passform før du klipper i det endelige stoffet. Toilen brukes til å gjøre justeringer og perfeksjonere mønsteret.`,
    },
    {
      id: 'handverk-design-vg1-5-3-tip-1',
      type: 'tip',
      title: 'Oppbevaring av mønstre',
      content: `Oppbevar mønsterdelene i en konvolutt eller mappe merket med mønsterets navn, størrelse og eventuelle tilpasninger du har gjort. Rull heller enn brett for å unngå bretter som kan forstyrre klippingen.`,
    },
    {
      id: 'handverk-design-vg1-5-3-example-1',
      type: 'example',
      title: 'Tilpasse lengde på et mønster',
      problem: 'Mønsteret er 5 cm for kort for deg. Hvordan forlenger du det?',
      solution: `**Fremgangsmåte:**
1. Finn justeringslinjen på mønsteret (ofte markert "lengthen/shorten here")
2. Klipp mønsteret tvers over på denne linjen
3. Legg et ekstra stykke papir under
4. Flytt den nedre delen 5 cm ned
5. Fest med tape og kontroller at sidekantene fortsatt er rette
6. Gå over linjene for å glatte ut eventuelle ujevnheter
7. Gjør samme justering på alle deler som påvirkes (for- og bakstykke)

**Tips:** Fordel lengden på flere justeringspunkter hvis mulig for mer naturlig fall.`,
    },
    {
      id: 'handverk-design-vg1-5-3-example-2',
      type: 'example',
      title: 'Beregne stoffbehov',
      problem: 'Hvordan beregner du hvor mye stoff du trenger til et prosjekt?',
      solution: `**Fremgangsmåte:**
1. Legg ut alle mønsterdelene med riktig trådretning
2. Mål total lengde fra topp til bunn av arrangementet
3. Legg til 10-15 cm for feilmargin
4. Husk ekstra stoff hvis mønsteret krever matching (striper, ruter)
5. Tenk på stoffbredden (90, 115, 140 eller 150 cm vanlig)

**Eksempel:**
Mønsterdelene dekker 180 cm i lengde på 140 cm bredt stoff:
- Grunnbehov: 180 cm
- Sikkerhetstillegg: +15 cm
- Totalt: 195 cm, rund opp til 2 meter

**For stripet stoff:** Legg til 20-30 cm ekstra for matching.`,
    },
    {
      id: 'handverk-design-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Ta dine egne kroppsmål: brystvidde, livvidde, hoftevidde og armlengde. Skriv dem ned og sammenlign med en størrelsesguide.',
        solution: 'Målene skal tas med målebånd rundt kroppen på riktige punkter. Brystvidde måles på det bredeste punktet, livvidde på det smaleste, hoftevidde på det bredeste punktet, og armlengde fra skulderspiss til håndledd med bøyd arm.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva viser grainline på et mønster?',
        multipleChoiceOptions: [
          'Hvor sømmonnet er',
          'Hvilken størrelse mønsteret er',
          'Hvordan mønsterdelen skal plasseres i forhold til stoffets trådretning',
          'Hvor du skal klippe',
        ],
        solution: 'Grainline viser hvordan mønsterdelen skal plasseres i forhold til stoffets trådretning (renningen).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva bevegelsesfrihet (ease) er og hvorfor det er viktig i mønsterkonstruksjon.',
        solution: 'Bevegelsesfrihet er ekstra vidde som legges til kroppsmålene slik at plagget tillater bevegelse og er komfortabelt å ha på. Uten bevegelsesfrihet ville klærne sitte for stramt og begrense bevegelse. Mengden varierer etter plaggtype - tett sportsbukse trenger lite, mens en vinterkåpe trenger mer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag et enkelt mønster for en pute (50x50 cm) med 1,5 cm sømmonn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor stort må mønsteret være inkludert sømmonn?',
            solution: '53 x 53 cm (50 cm + 1,5 cm sømmonn på hver side = 50 + 3 = 53 cm)',
          },
          {
            label: 'b',
            task: 'Tegn mønsteret med alle nødvendige markeringer.',
            solution: 'Mønsteret skal være et kvadrat på 53 x 53 cm med grainline-pil, "klipp 2" markering, og sømmonn markert langs kantene.',
          },
        ],
        solution: 'Putemønsteret blir 53 x 53 cm når du legger til 1,5 cm sømmonn på alle sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er en toile, og hvorfor er det lurt å lage en før du syr i det endelige stoffet?',
        solution: 'En toile er et prøveplagg sydd i billig stoff for å teste passform og konstruksjon før du bruker det endelige stoffet. Det er lurt fordi du kan oppdage og rette feil uten å ødelegge dyrt stoff, teste at mønsteret passer deg, og gjøre justeringer før den endelige syingen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-3-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært:
- Hvordan ta nøyaktige kroppsmål
- Hva bevegelsesfrihet er og hvorfor den er viktig
- Grunnleggende mønsterdeler og markeringer
- Hvordan tilpasse ferdige mønstre til din kropp
- Bruk av toile for testing
- Beregning av stoffbehov

Mønsterkonstruksjon er en ferdighet som krever øvelse. Start enkelt og bygg opp kompleksiteten gradvis.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Mønster/snitt', definition: 'Mal i papir eller kartong brukt til å klippe ut stoffdeler' },
    { term: 'Grainline', definition: 'Linje som viser trådretning for plassering av mønster på stoff' },
    { term: 'Sømmonn', definition: 'Ekstra stoff utenfor sømlinjen for å sy delene sammen' },
    { term: 'Bevegelsesfrihet (ease)', definition: 'Ekstra vidde for komfort og bevegelse' },
    { term: 'Toile', definition: 'Prøveplagg i billig stoff for å teste passform' },
    { term: 'Passmerker', definition: 'Markeringer for å matche mønsterdeler riktig' },
  ],
};

// ============================================================================
// Kapittel 5.4: Farging og trykk på tekstil
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5_4: TextbookChapter = {
  id: 'handverk-design-vg1-5-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5.4',
  title: 'Farging og trykk på tekstil',
  description: 'Utforsking av ulike teknikker for farging og trykk på tekstiler, både tradisjonelle og moderne. Elevene lærer om naturfarging, kjemiske farger og ulike trykkteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og bruke farger og symboler i produktutvikling i harde, myke og plastiske materialer',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-4-intro',
      type: 'text',
      content: `Farger og mønstre gir tekstiler personlighet og karakter. Mennesker har farget tekstiler i tusenvis av år - fra naturfarger utvunnet av planter og insekter til moderne syntetiske farger. I dette kapittelet lærer du ulike teknikker for å tilføre farge og mønster til tekstiler, fra tradisjonell naturfarging til moderne trykkteknikker.`,
    },
    {
      id: 'handverk-design-vg1-5-4-def-1',
      type: 'definition',
      title: 'Beis (mordant)',
      content: `Beis er et stoff som hjelper fargen å feste seg til tekstilfiberen. Uten beis vil mange naturfarger vaske ut. Vanlige beiser er alun, jernsulfat og kobbersulfat. Beisingen gjøres vanligvis før fargingen.`,
    },
    {
      id: 'handverk-design-vg1-5-4-def-2',
      type: 'definition',
      title: 'Reserveringsteknikk',
      content: `Reservering betyr å beskytte deler av stoffet fra å ta opp farge. Dette skaper mønster ved at de reserverte områdene forblir ufargede eller får en annen farge. Batikk og shibori er eksempler på reserveringsteknikker.`,
    },
    {
      id: 'handverk-design-vg1-5-4-text-1',
      type: 'text',
      content: `**Naturfarging**

Naturfarger utvinnes fra planter, insekter, mineraler og sopp.

**Vanlige naturfargematerialer:**
- **Løkskall:** Gir gule til oransje nyanser
- **Bjørkeblader:** Gir gult
- **Blåbær:** Gir blålilla (men lite lysekte)
- **Rødbeter:** Gir rosa/rød (lite lysekte)
- **Indigo (fra planter):** Gir dype blåtoner
- **Kochenille (insekt):** Gir sterke røde farger
- **Valnøttskall:** Gir brune toner
- **Jernvann:** Mørkner og gråner farger

**Fremgangsmåte for naturfarging:**
1. Forbered stoffet (vask og beis med alun)
2. Lag fargebad ved å koke plantematerialet
3. Sil av plantematerialet
4. Senk stoffet i fargebadet
5. La trekke i 1-24 timer
6. Skyll og vask forsiktig
7. Tørk i skyggen

**Tips:** Naturfarger fungerer best på naturfibre som bomull, lin, ull og silke. Ull tar opp farge lettest.`,
    },
    {
      id: 'handverk-design-vg1-5-4-text-2',
      type: 'text',
      content: `**Syntetiske tekstilfarger**

Syntetiske farger er sterkere og mer lysekte enn de fleste naturfarger.

**Typer syntetiske farger:**
- **Reaktivfarger:** For cellulosfibre (bomull, lin). Binder seg kjemisk til fiberen. Krever salt og soda.
- **Syrefarger:** For protein/ull og silke. Krever syre (eddik) i fargebadet.
- **Dispersfarger:** For polyester og andre syntetiske fibre. Krever høy temperatur.
- **Universalfarger:** Mikser flere fargetyper, fungerer på de fleste fibre, men ofte mindre lysekte.

**Sikkerhet ved farging:**
- Bruk hansker og forklede
- Jobb i godt ventilert rom
- Bruk kun utstyr beregnet for farging (ikke matlagingsutstyr)
- Følg produsentens instruksjoner nøye
- Håndter kjemikalier med respekt`,
    },
    {
      id: 'handverk-design-vg1-5-4-text-3',
      type: 'text',
      content: `**Batikk og shibori**

**Batikk** er en teknikk der voks brukes til å reservere deler av stoffet:
1. Tegn eller mal med smeltet voks på stoffet
2. Dypp stoffet i fargebad
3. Voksen hindrer fargen i å trenge inn
4. Fjern voksen ved å stryke mellom avispapir
5. Karakteristiske sprekker i voksen gir særpreget mønster

**Shibori** er japansk reserveringsteknikk med folding, binding og klyping:
- **Kanoko:** Stoffet bindes i små knyper
- **Itajime:** Stoffet foldes og presses mellom treklosser
- **Arashi:** Stoffet vikles rundt et rør og presses sammen
- **Kumo:** Stoffet knyttes i spisse kjegler

**Enkel tie-dye:**
1. Fukt stoffet
2. Bind, knyt eller fold stoffet med gummistrikk
3. Dypp i fargebad eller påfør farge
4. La virke etter instruksjon
5. Skyll ut overflødig farge
6. Fjern bindinger
7. Vask og tørk`,
    },
    {
      id: 'handverk-design-vg1-5-4-text-4',
      type: 'text',
      content: `**Trykkteknikker**

**Stempeltrykk:**
- Enkel teknikk der et stempel dypper i farge og presses mot stoffet
- Stempel kan lages av potet, svamp, kork, eller skåret i gummi
- Bra for repeterende mønstre

**Sjablongtrykk:**
- Mønster klippes ut i papir, kartong eller plast
- Fargen påføres gjennom åpningene med svamp eller pensel
- Gir skarpe kanter og repetérbare mønstre

**Silketrykk (serigrafi):**
- Profesjonell teknikk med fin duk spent over ramme
- Deler av duken blokkeres, farge presses gjennom
- Gir jevne, skarpe trykk
- Brukes i tekstilindustrien

**Overføringsprint:**
- Spesialtrykk på papir som overføres til stoff med varme
- Kan bruke vanlig blekkskriver med spesialpapir
- Fungerer best på syntetiske stoffer

**Tekstilmaling:**
- Males direkte på stoffet med pensel eller svamp
- Må varmefikseres (strykes)
- Gir mye kreativ frihet`,
    },
    {
      id: 'handverk-design-vg1-5-4-tip-1',
      type: 'tip',
      title: 'Test alltid først',
      content: `Uansett hvilken teknikk du bruker, test alltid på en stoffrest først. Farger og trykk kan se annerledes ut på det ferdige stoffet enn du forventer. Vask og stryk også prøven for å se om resultatet tåler bruk.`,
    },
    {
      id: 'handverk-design-vg1-5-4-example-1',
      type: 'example',
      title: 'Lage en enkel stempeltrykt stoffpose',
      problem: 'Du vil dekorere en hvit bomullspose med stempeltrykk. Hvordan går du frem?',
      solution: `**Materialer:**
- Hvit bomullspose (forvasket)
- Tekstilmaling
- Stempel (f.eks. laget av myk gummi eller svamp)
- Papp til innsiden av posen
- Papirtallerkener til maling

**Fremgangsmåte:**
1. Legg papp inni posen så malingen ikke trenger gjennom
2. Hell litt tekstilmaling på papirtallerkenen
3. Dypp stempelet lett i malingen (ikke for mye)
4. Test på papir først for riktig mengde maling
5. Press stempelet jevnt mot stoffet
6. Løft rett opp (ikke dra)
7. Gjenta til ønsket mønster
8. La tørke helt (gjerne over natten)
9. Fikser med strykejern i 3-5 minutter
10. Vent 48 timer før vask`,
    },
    {
      id: 'handverk-design-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hensikten med beis (mordant) i naturfarging?',
        multipleChoiceOptions: [
          'Å gjøre fargen lysere',
          'Å hjelpe fargen å feste seg til fiberen',
          'Å tørke stoffet raskere',
          'Å fjerne skitt fra stoffet',
        ],
        solution: 'Beis hjelper fargen å feste seg til tekstilfiberen slik at den ikke vaskes ut.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan du lager et enkelt shibori-mønster med bind-teknikk.',
        solution: 'Fukt stoffet godt. Knyt gummistrikk rundt små biter av stoffet for å lage knytemønster, eller fold stoffet som en vifte og bind med jevne mellomrom. Dypp stoffet i fargebad og la trekke i henhold til instruksjon. Skyll ut overflødig farge, fjern gummistrikkene forsiktig, og se mønsteret som har oppstått der gummistrikkene beskyttet stoffet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du vil farge et skjerf i ull med naturfarger.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fargematerialer kan gi gul farge?',
            solution: 'Løkskall og bjørkeblader gir gule nyanser. Løkskall gir varmere gule til oransje toner, bjørkeblader gir lysere gult.',
          },
          {
            label: 'b',
            task: 'Hvorfor egner ull seg godt til naturfarging?',
            solution: 'Ull tar opp farge lettere enn andre fibre fordi ullfibrene har skjellig overflate og er proteinbasert. Ull kan også beises og farges i samme bad, og fargene blir ofte dype og varige.',
          },
        ],
        solution: 'Ull er ideell for naturfarging fordi den tar opp farge godt, og løkskall og bjørkeblader gir fine gule toner.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken trykkteknikk bruker voks for å reservere deler av stoffet?',
        multipleChoiceOptions: [
          'Shibori',
          'Batikk',
          'Silketrykk',
          'Stempeltrykk',
        ],
        solution: 'Batikk bruker smeltet voks for å reservere deler av stoffet fra å ta opp farge.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et stempel av potet eller svamp og trykk et enkelt repeterende mønster på en stoffrest. Dokumenter prosessen med bilder.',
        solution: 'Prosessen skal vise: utforming av stempelet, testing av maling og trykk på papir først, påføring på stoff med jevn fordeling, og det ferdige resultatet. Mønsteret bør være repetert flere ganger med jevn kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-4-summary',
      type: 'text',
      content: `**Oppsummering**

Du har lært om:
- Naturfarging med planter og beising
- Syntetiske tekstilfarger og deres bruk
- Reserveringsteknikker som batikk og shibori
- Ulike trykkteknikker: stempel, sjablong, silketrykk og overføringstrykk
- Sikkerhet ved farging og trykk

Farging og trykk gir deg mulighet til å skape unike tekstiler. Eksperimenter med ulike teknikker for å finne din stil.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Beis (mordant)', definition: 'Stoff som hjelper farge å feste seg til fiber' },
    { term: 'Reserveringsteknikk', definition: 'Metode for å beskytte deler av stoffet fra farge' },
    { term: 'Batikk', definition: 'Fargeteknikk der voks reserverer mønster' },
    { term: 'Shibori', definition: 'Japansk reserveringsteknikk med folding og binding' },
    { term: 'Lysekthet', definition: 'Hvor godt fargen tåler lys uten å falme' },
    { term: 'Reaktivfarge', definition: 'Syntetisk farge som binder seg kjemisk til cellulosfibre' },
  ],
};

// ============================================================================
// Kapittel 5.5: Veving og fletteverkteknikker
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5_5: TextbookChapter = {
  id: 'handverk-design-vg1-5-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5.5',
  title: 'Veving og fletteverkteknikker',
  description: 'Praktisk opplæring i veving og fletteverk som tradisjonelle tekstile teknikker. Elevene lærer om ulike vevtyper, renning og innslagsteknikker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere og anvende tradisjonelle teknikker for å gjenskape tradisjonelle håndverksprodukter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-5-intro',
      type: 'text',
      content: `Veving er en av menneskehetens eldste tekstilteknikker. Ved å flette tråder over og under hverandre skapes et stabilt stoff med uendelige variasjoner i mønster og tekstur. I Norge har veving lange tradisjoner - fra hverdagstekstiler til kunstneriske billedtepper. I dette kapittelet lærer du grunnprinsippene for veving og hvordan du kan komme i gang med enkel veving.`,
    },
    {
      id: 'handverk-design-vg1-5-5-def-1',
      type: 'definition',
      title: 'Renning',
      content: `Renning er de lengdegående trådene som settes opp på vevstolen. Renningen er vanligvis strammet fast og danner grunnstrukturen for vevnaden. Renningen må tåle mye strekk under vevingen.`,
    },
    {
      id: 'handverk-design-vg1-5-5-def-2',
      type: 'definition',
      title: 'Innslag',
      content: `Innslag er trådene som veves inn på tvers av renningen. Innslaget føres fra side til side, over og under renningstrådene, og bygger opp stoffet rad for rad. Innslaget kan variere i farge og materiale for å skape mønster.`,
    },
    {
      id: 'handverk-design-vg1-5-5-text-1',
      type: 'text',
      content: `**Vevstolens oppbygning**

En tradisjonell vevstol består av flere deler som sammen gjør vevingen mulig:

**Hoveddeler:**
- **Bommen (varpbommen):** Holder den opprullede renningen bak
- **Tøybommen:** Her rulles det ferdige stoffet opp foran
- **Skaftene:** Rammer med løkkene (heldetrådene) som løfter og senker renningstrådene
- **Riet:** En kam som holder trådene på plass og slår innslaget tett
- **Slagbommen:** Rammen riet sitter i, brukes til å slå innslaget på plass
- **Trøene:** Pedaler som styrer skaftene

**Enklere vevrammer:**
- Ramme med spiker eller hakk for renning
- Billedvevramme
- Vevkam (rigid heddle) for enkel veving
- Pappvev for nybegynnere

For å lære veving kan du starte med en enkel vevramme eller pappvev før du går videre til tradisjonell vevstol.`,
    },
    {
      id: 'handverk-design-vg1-5-5-text-2',
      type: 'text',
      content: `**Grunnleggende vevbindinger**

Bindingen beskriver hvordan renning og innslag krysser hverandre:

**Lerretsbinding (toskaft)**
- Enklest mulig binding
- Innslaget går annenhver over og under
- Neste rad er motsatt
- Gir jevnt, stabilt stoff
- Brukes til: håndklær, lerret, gardiner

**Kypert (twill)**
- Innslaget springer over 2 eller flere renningstrådder
- Forskyvning mellom radene gir diagonalt mønster
- Mykt og draperer godt
- Brukes til: jeans (denim), kostymer, tweed

**Sateng/atlas**
- Lange flytninger (innslaget går over mange tråder)
- Få bindingspunkter gir glatt overflate
- Skinner og draperer vakkert
- Brukes til: sengeklær, festklær

**Drell**
- Komplekse mønstre med flere skaft
- Tradisjonell norsk teknikk
- Brukes til: damaskduker, brokader`,
    },
    {
      id: 'handverk-design-vg1-5-5-text-3',
      type: 'text',
      content: `**Komme i gang med enkel veving**

**Sette opp renning på vevramme:**
1. Knyt garnet fast i første hakk/spiker
2. Før garnet ned til motsatt side og rundt hakket
3. Fortsett opp-ned i jevn spenning
4. Hold samme avstand mellom alle tråder
5. Avslutt med en knute

**Veve med innslag:**
1. Fest innslaget i kanten
2. Før innslaget over-under-over-under gjennom renningen
3. Bruk fingrene, en vevkam eller et skytte
4. Slå innslaget på plass med en gaffel eller kam
5. Neste rad går under-over-under-over
6. Fortsett til ønsket lengde

**Tips for jevn veving:**
- Hold lik spenning på innslaget
- Slå like hardt hver gang
- Legg innslaget i en liten bue før du slår
- Ikke trekk for stramt i kantene`,
    },
    {
      id: 'handverk-design-vg1-5-5-def-3',
      type: 'definition',
      title: 'Vevtetthet',
      content: `Vevtetthet beskriver hvor tett trådene ligger i den ferdige vevnaden. Den måles i antall tråder per centimeter, separat for renning og innslag. Tetthet påvirker stoffets styrke, tykkelse og drape.`,
    },
    {
      id: 'handverk-design-vg1-5-5-text-4',
      type: 'text',
      content: `**Fletteverkteknikker**

Fletting skiller seg fra veving ved at trådene både er renning og innslag på en gang - de krysser hverandre diagonalt.

**Grunnleggende fletting:**
- Fire eller flere tråder flettes over og under hverandre
- Enkel fletning: tre tråder flettes i hverandre
- Firfletting: gir flatere, bredere bånd
- Rundfletning: gir rund snor

**Makramé:**
- Knytteverk med ulike knuter
- Halvstikk, flatknute, spiralknute
- Kan lage alt fra armbånd til veggheng
- Populært håndverk med lange tradisjoner

**Sprang:**
- Gammel nordisk teknikk
- Trådene dreies rundt hverandre
- Elastisk resultat
- Brukt til hårpynt og belter i vikingtiden

**Tradisjonelt norsk fletteverk:**
- Båndveving med brikkevev
- Spenningsvev til belter og bånd
- Fletting av never til kurver og bokser`,
    },
    {
      id: 'handverk-design-vg1-5-5-example-1',
      type: 'example',
      title: 'Sette opp en enkel pappvev',
      problem: 'Du vil lage en liten vevnad til å øve på. Hvordan setter du opp en pappvev?',
      solution: `**Materialer:**
- Stiv papp eller kartong (ca. 15x20 cm)
- Saks
- Garn til renning (sterkt, glatt garn)
- Garn til innslag (kan være mykere, fargerikt)
- Tapestrinal eller stor nål

**Fremgangsmåte:**
1. Klipp hakk i topp og bunn av pappen med 0,5-1 cm mellomrom
2. Sett opp renningen ved å føre garnet fra hakk til hakk
3. Hold jevn, fast spenning
4. Fest endene med tape på baksiden
5. Tre innslaget på nålen eller tapestrinal
6. Vev over-under gjennom renningen
7. Slå innslagene på plass med en gaffel
8. Når du er ferdig, klipp renningen fri og knyt frynser

**Tips:** Start med kontrastfarger så du ser bindingen tydelig.`,
    },
    {
      id: 'handverk-design-vg1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kalles de lengdegående trådene som settes opp på vevstolen?',
        multipleChoiceOptions: [
          'Innslag',
          'Renning',
          'Binding',
          'Riet',
        ],
        solution: 'Renning er de lengdegående trådene som settes opp på vevstolen og danner grunnstrukturen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom lerretsbinding og kypertbinding.',
        solution: 'Lerretsbinding er den enkleste bindingen der innslaget går annenhver over og under renningen, og neste rad er motsatt. Dette gir et jevnt, stabilt stoff. Kypertbinding har innslag som springer over to eller flere renningstrådder med forskyvning mellom radene, noe som skaper et diagonalt mønster. Kypert er mykere og draperer bedre enn lerret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag en enkel pappvev og vev et lite stykke i lerretsbinding.',
        subTasks: [
          {
            label: 'a',
            task: 'Dokumenter prosessen: oppsett av renning og veving',
            solution: 'Dokumentasjonen bør vise pappen med hakk, oppsett av renningen med jevn spenning, og veving av innslaget over-under gjennom renningen.',
          },
          {
            label: 'b',
            task: 'Hva oppdaget du om spenning og jevnhet?',
            solution: 'Vanlige oppdagelser: Det er viktig å holde lik spenning for å få rette kanter. Innslaget bør legges i en liten bue før det slås på plass for å unngå at stoffet trekker seg sammen. For stramt innslag gir innsnevring.',
          },
        ],
        solution: 'Vevstykket skal vise jevn lerretsbinding med rette kanter og jevn tetthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke norske tradisjonelle produkter er laget med veve- eller flettevevteknikker? Nevn minst tre eksempler.',
        solution: 'Tradisjonelle norske produkter inkluderer: Billedvev/åklær til vegger, drellvevde duker (damaskduker), spenningsvevde belter, flettede neverkurver og bokser, vevde ryer og tepper, båndvevde broderikanter til bunader, og tovetøy fra vevd ullstoff.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-5-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært:
- Grunnleggende veveterminologi: renning, innslag, binding
- Vevstolens hoveddeler og funksjon
- De viktigste vevbindingene: lerret, kypert og sateng
- Hvordan sette opp og veve på en enkel ramme
- Fletteverkteknikker og norske tradisjoner

Veving krever tålmodighet og øvelse, men gir stor tilfredsstillelse når du mestrer teknikkene.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Renning', definition: 'Lengdegående tråder som settes opp på vevstolen' },
    { term: 'Innslag', definition: 'Tråder som veves inn på tvers av renningen' },
    { term: 'Binding', definition: 'Mønsteret som oppstår når renning og innslag krysser' },
    { term: 'Lerretsbinding', definition: 'Enkleste binding der innslag går annenhver over og under' },
    { term: 'Kypert', definition: 'Binding med diagonalt mønster fra forskyvning mellom rader' },
    { term: 'Riet', definition: 'Kam som holder renningstrådene på plass og slår innslaget tett' },
  ],
};

// ============================================================================
// Kapittel 5.6: Tekstildesign og produktutvikling
// ============================================================================

export const CHAPTER_HANDVERK_DESIGN_VG1_5_6: TextbookChapter = {
  id: 'handverk-design-vg1-5-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '5.6',
  title: 'Tekstildesign og produktutvikling',
  description: 'Helhetlig designprosess for tekstilprodukter fra ide til ferdig produkt. Elevene kombinerer kunnskap om materialer, teknikker og design i et storre prosjekt.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og lage håndverksprodukter med presisjon og nøyaktighet med utgangspunkt i eget planleggingsarbeid og gitte tidsfrister',
  ],
  content: [
    {
      id: 'handverk-design-vg1-5-6-intro',
      type: 'text',
      content: `Nå skal du bruke alt du har lært om tekstiler i en helhetlig designprosess. Fra den første ideen til det ferdige produktet er det mange valg å ta og trinn å følge. I dette kapittelet lærer du hvordan du planlegger, gjennomfører og evaluerer et tekstilprosjekt med fokus på kvalitet i alle ledd.`,
    },
    {
      id: 'handverk-design-vg1-5-6-def-1',
      type: 'definition',
      title: 'Designprosess',
      content: `Designprosessen er den systematiske fremgangsmåten fra idé til ferdig produkt. Den inkluderer research, idéutvikling, skissering, prototyping, produksjon og evaluering. En god prosess sikrer kvalitet og effektivitet.`,
    },
    {
      id: 'handverk-design-vg1-5-6-def-2',
      type: 'definition',
      title: 'Produktkrav (brief)',
      content: `Produktkravene definerer hva produktet skal oppfylle: funksjon, målgruppe, materialer, størrelse, pris, og andre spesifikasjoner. Klare krav hjelper deg å holde fokus gjennom hele prosessen.`,
    },
    {
      id: 'handverk-design-vg1-5-6-text-1',
      type: 'text',
      content: `**Designprosessens faser**

**1. Research og analyse**
- Hvem er produktet for? (målgruppe)
- Hva finnes allerede? (markedsundersøkelse)
- Hvilke behov skal dekkes?
- Hva er rammene? (tid, budsjett, ferdigheter)
- Samle inspirasjon (moodboard)

**2. Idéutvikling**
- Brainstorming og tankekart
- Mange ideer uten å sensurere
- Skissere raskt og fritt
- Kombinere og utvikle ideer
- Velge de beste konseptene

**3. Skissering og planlegging**
- Detaljerte skisser av valgt konsept
- Tekniske tegninger med mål
- Materialvalg og beregning
- Tidsplan for arbeidet
- Kostnadsoverslag

**4. Prototyping og testing**
- Lage prøver og tester
- Vurdere passform og funksjon
- Justere og forbedre
- Teste materialer og teknikker

**5. Produksjon**
- Klippe og tilberede materialer
- Følge plan og tegninger
- Kvalitetskontroll underveis
- Dokumentere prosessen

**6. Evaluering**
- Vurdere resultat mot krav
- Reflektere over prosess
- Identifisere læringspunkter
- Planlegge forbedringer`,
    },
    {
      id: 'handverk-design-vg1-5-6-text-2',
      type: 'text',
      content: `**Moodboard og inspirasjon**

Et moodboard er en visuell samling av inspirasjon som setter stemningen for prosjektet.

**Hva kan inkluderes:**
- Fargeprøver og stoffbiter
- Bilder fra magasiner eller internett
- Skisser og notater
- Teksturer og mønstre
- Nøkkelord og stemningsbeskrivelser

**Tips for godt moodboard:**
- Ha en tydelig retning eller tema
- Begrens antall elementer (kvalitet over kvantitet)
- Vis variasjon innenfor temaet
- Inkluder både helhet og detaljer
- Referer til moodboardet gjennom prosessen

**Digital vs. fysisk:**
- Digitalt: Pinterest, Canva, enkel oppdatering
- Fysisk: Taktilt, lettere å sammenligne materialer
- Kombiner gjerne begge`,
    },
    {
      id: 'handverk-design-vg1-5-6-text-3',
      type: 'text',
      content: `**Materialvalg og kvalitet**

Riktig materialvalg er avgjørende for produktets kvalitet og funksjon.

**Vurderingskriterier for materialer:**
- **Funksjon:** Passer materialet til bruksområdet?
- **Holdbarhet:** Tåler det forventet slitasje?
- **Vedlikehold:** Er det lett å rengjøre og stelle?
- **Estetikk:** Harmonerer det med designet?
- **Pris:** Er det innenfor budsjettet?
- **Tilgjengelighet:** Er det lett å få tak i?
- **Bærekraft:** Hva er miljøpåvirkningen?

**Kvalitetskriterier for tekstilprodukter:**
- Jevne sømmer uten strekk eller rynker
- Rette kanter og hjørner
- Riktig passform og proporsjoner
- God finish (ingen løse tråder, ferdige kanter)
- Holdbar konstruksjon
- Estetisk helhet

**Dokumentere materialvalg:**
Noter hvilke materialer du bruker, hvor du kjøpte dem, og hvorfor du valgte akkurat disse. Dette hjelper i fremtidige prosjekter.`,
    },
    {
      id: 'handverk-design-vg1-5-6-text-4',
      type: 'text',
      content: `**Tidsplanlegging og gjennomføring**

God planlegging er nøkkelen til å fullføre prosjekter innenfor tidsfrister.

**Lage en tidsplan:**
1. Identifiser alle arbeidsoppgaver
2. Estimer tid for hver oppgave (legg til buffer)
3. Sett realistiske milepæler
4. Prioriter oppgavene i riktig rekkefølge
5. Fordel arbeidet over tilgjengelig tid

**Vanlige utfordringer:**
- Undervurderer tiden enkelte oppgaver tar
- Ikke tar høyde for feil og problemer
- Utsetter vanskelige oppgaver
- Mister oversikten

**Tips for å holde tidsplanen:**
- Start med de mest usikre delene først
- Jobb i korte, fokuserte økter
- Dokumenter fremgang underveis
- Juster planen ved behov
- Be om hjelp når du står fast

**Arbeidslogg:**
Før en enkel logg over hva du gjør hver dag, hvor lang tid det tar, og eventuelle utfordringer. Dette gir verdifull erfaring til neste prosjekt.`,
    },
    {
      id: 'handverk-design-vg1-5-6-tip-1',
      type: 'tip',
      title: 'Kvalitet krever tålmodighet',
      content: `Det er fristende å ta snarveier for å bli ferdig, men kvalitetsarbeid tar tid. Å rikle før du syr, presse underveis og kontrollere etter hvert trinn gir mye bedre sluttresultat enn å haste gjennom. Et vellykket prosjekt du er stolt av er verdt den ekstra innsatsen.`,
    },
    {
      id: 'handverk-design-vg1-5-6-def-3',
      type: 'definition',
      title: 'Egenevaluering',
      content: `Egenevaluering er en systematisk vurdering av eget arbeid og arbeidsprosess. Du sammenligner resultatet med målene, identifiserer styrker og svakheter, og finner læringspunkter for fremtidige prosjekter.`,
    },
    {
      id: 'handverk-design-vg1-5-6-text-5',
      type: 'text',
      content: `**Evaluering og refleksjon**

Når prosjektet er ferdig, er evaluering viktig for læring og utvikling.

**Vurdere produktet:**
- Oppfyller det de opprinnelige kravene?
- Hvordan er den håndverksmessige kvaliteten?
- Er passform og proporsjoner gode?
- Fungerer det til formålet?
- Hva er du fornøyd med? Hva kunne vært bedre?

**Vurdere prosessen:**
- Holdt du tidsplanen? Hvorfor/hvorfor ikke?
- Hva gikk bra i arbeidsprosessen?
- Hvilke utfordringer møtte du, og hvordan løste du dem?
- Hva ville du gjort annerledes neste gang?
- Hva har du lært?

**Få tilbakemelding:**
- Vis produktet til andre
- Spør om konkrete tilbakemeldinger
- Vær åpen for konstruktiv kritikk
- Bruk tilbakemeldingene til forbedring

**Dokumentere prosjektet:**
Ta bilder av prosessen og det ferdige produktet. Skriv en kort tekst om hva du har lært. Dette blir verdifullt referansemateriale.`,
    },
    {
      id: 'handverk-design-vg1-5-6-example-1',
      type: 'example',
      title: 'Planlegge et tekstilprosjekt',
      problem: 'Du skal lage en handlenett i bomull. Sett opp en enkel prosjektplan.',
      solution: `**Produktkrav:**
- Formål: Handlenett for dagligvarer
- Størrelse: Ca. 40x35 cm med lange hanker
- Materiale: Sterk bomullslerret
- Krav: Tåler tung last, vaskbar, miljøvennlig

**Tidsplan (totalt 4 timer):**
1. Research og skisse: 30 min
2. Materialinnkjøp: 30 min (mellom økter)
3. Klippe og forberede: 30 min
4. Sy hoveddel: 1 time
5. Sy hanker og feste: 45 min
6. Finish og kvalitetskontroll: 30 min
7. Evaluering: 15 min

**Materialliste:**
- Bomullslerret, 50x100 cm
- Matchende tråd
- Evt. forsterkning til bunn

**Kvalitetsmål:**
- Rette, jevne sømmer
- Forsterkede festepunkter for hanker
- Fin finish uten løse tråder`,
    },
    {
      id: 'handverk-design-vg1-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de seks fasene i en designprosess med egne ord.',
        solution: 'De seks fasene er: 1) Research - undersøke behov og samle inspirasjon, 2) Idéutvikling - generere mange ideer og velge de beste, 3) Skissering og planlegging - detaljere valgt konsept og lage plan, 4) Prototyping - teste løsninger i enkel form, 5) Produksjon - lage det endelige produktet, 6) Evaluering - vurdere resultat og prosess for å lære.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag et enkelt moodboard for et tekstilprosjekt du ønsker å gjennomføre.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tema og samle 5-8 bilder/elementer',
            solution: 'Moodboardet skal ha et tydelig tema med bilder, farger og teksturer som viser ønsket stemning og stil.',
          },
          {
            label: 'b',
            task: 'Beskriv kort hva moodboardet formidler',
            solution: 'Beskrivelsen skal forklare valgt stil/stemning, fargepalletten, og hvilken type produkt det inspirerer til.',
          },
        ],
        solution: 'Moodboardet skal være visuelt sammenhengende og tydelig formidle inspirasjon for et tekstilprosjekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er hovedhensikten med å lage en prototype før endelig produksjon?',
        multipleChoiceOptions: [
          'Å spare materialer',
          'Å teste og forbedre løsningen før man bruker det endelige materialet',
          'Å imponere andre',
          'Å gjøre arbeidet raskere',
        ],
        solution: 'Hovedhensikten med prototyping er å teste og forbedre løsningen før man investerer tid og materialer i den endelige produksjonen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du har 6 skoletimer til å planlegge og gjennomføre et lite tekstilprosjekt (f.eks. et pennal eller en liten veske). Lag en realistisk tidsplan.',
        solution: 'Eksempel på tidsplan: Time 1: Research, skisser og materialplanlegging. Time 2: Konstruere mønster og klippe stoff. Time 3-4: Sy hoveddeler sammen. Time 5: Sy detaljer (glidelås/klaff) og feste. Time 6: Finish, kvalitetskontroll og evaluering. Inkluder buffer for uforutsette utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke kvalitetskriterier vil du bruke for å vurdere et ferdig tekstilprodukt?',
        solution: 'Kvalitetskriterier inkluderer: Håndverksmessig kvalitet (jevne sømmer, rette kanter, god finish), funksjonalitet (oppfyller formålet, holdbar konstruksjon), estetikk (proporsjoner, farger, helhet), og passform (hvis det er et plagg). I tillegg vurderes prosessen: holdt tidsfristen, løste problemer underveis, dokumenterte arbeidet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-5-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-5-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjennomfør et lite tekstilprosjekt fra start til slutt. Dokumenter alle fasene og evaluer resultatet.',
        subTasks: [
          {
            label: 'a',
            task: 'Dokumenter prosessen med bilder og notater',
            solution: 'Dokumentasjonen skal vise alle fasene: moodboard/inspirasjon, skisser, materialer, produksjon underveis, og ferdig produkt.',
          },
          {
            label: 'b',
            task: 'Skriv en egenevaluering: Hva gikk bra? Hva ville du gjort annerledes?',
            solution: 'Egenevalueringen skal inneholde konkret vurdering av produktet mot opprinnelige krav, refleksjon over arbeidsprosessen, og læringspunkter til neste prosjekt.',
          },
        ],
        solution: 'Prosjektet skal vise en komplett designprosess med dokumentasjon og reflektert egenevaluering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-5-6-summary',
      type: 'text',
      content: `**Oppsummering**

I dette kapittelet har du lært:
- De seks fasene i designprosessen
- Hvordan lage og bruke moodboard
- Kriterier for materialvalg og kvalitet
- Tidsplanlegging og gjennomføring
- Egenevaluering og refleksjon

Du har nå verktøyene du trenger for å planlegge og gjennomføre selvstendige tekstilprosjekter med god kvalitet. Bruk prosessen bevisst i hvert prosjekt for å utvikle ferdighetene dine videre.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Designprosess', definition: 'Systematisk fremgangsmåte fra idé til ferdig produkt' },
    { term: 'Produktkrav/brief', definition: 'Spesifikasjoner som definerer hva produktet skal oppfylle' },
    { term: 'Moodboard', definition: 'Visuell samling av inspirasjon som setter stemningen for prosjektet' },
    { term: 'Prototype', definition: 'Prøveversjon for testing før endelig produksjon' },
    { term: 'Egenevaluering', definition: 'Systematisk vurdering av eget arbeid og prosess' },
    { term: 'Kvalitetskriterier', definition: 'Standarder for å vurdere om produktet holder god kvalitet' },
  ],
};

// ============================================================================
// Eksport av alle kapitler i del 5
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HANDVERK_DESIGN_VG1_5_1,
  CHAPTER_HANDVERK_DESIGN_VG1_5_2,
  CHAPTER_HANDVERK_DESIGN_VG1_5_3,
  CHAPTER_HANDVERK_DESIGN_VG1_5_4,
  CHAPTER_HANDVERK_DESIGN_VG1_5_5,
  CHAPTER_HANDVERK_DESIGN_VG1_5_6,
];

/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 2 - Kapittel 7-8
 * Kultur und Gesellschaft, Umwelt und Nachhaltigkeit
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Feste und Traditionen
// ============================================================================

export const CHAPTER_TYSK_2_7_1: TextbookChapter = {
  id: 'tysk-2-7-1',
  courseId: 'tysk-2',
  chapterNumber: '7.1',
  title: 'Feste und Traditionen',
  subtitle: 'Hoytider og tradisjoner',
  description: 'Laer om tyske hoytider og kulturelle tradisjoner gjennom aret.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive tyske hoytider og tradisjoner',
    'sammenligne norske og tyske feiringer',
    'bruke relevant vokabular om hoytider',
  ],
  content: [
    {
      id: 'tysk-2-7-1-intro',
      type: 'text',
      content: `## Tyske hoytider og tradisjoner

Tyskland har et rikt utvalg av hoytider og tradisjoner som varierer fra region til region. Noen feiringer er kjent over hele verden, mens andre er unike for bestemte omrader.

De viktigste hoytidene i Tyskland:
- **Weihnachten** (jul) - den storste hoytiden
- **Ostern** (paske) - viktig religioes hoytid
- **Karneval/Fasching** - fargerik feiring for fastetiden
- **Oktoberfest** - verdens storste folkefest i Munchen`,
    },
    {
      id: 'tysk-2-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Hoytider',
      content: `**Viktige ord og uttrykk:**

| Tysk | Norsk |
|------|-------|
| die Weihnachten | jul |
| der Heiligabend | julaften |
| der Weihnachtsbaum | juletre |
| der Adventskranz | adventskrans |
| das Ostern | paske |
| der Osterhase | paskehaen |
| das Osterei | paskeegg |
| der Karneval | karneval |
| das Oktoberfest | oktoberfest |
| feiern | a feire |
| die Tradition | tradisjon |`,
    },
    {
      id: 'tysk-2-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Weihnachten',
      problem: `Les teksten og svar pa sporsmalene:

"In Deutschland feiert man Weihnachten am 24., 25. und 26. Dezember. Am Heiligabend kommt die Familie zusammen und isst ein festliches Abendessen. Die Kinder bekommen ihre Geschenke vom Weihnachtsmann oder vom Christkind. Der Weihnachtsbaum wird mit Kerzen und Kugeln geschmuckt."

a) Nar feires jul i Tyskland?
b) Hvem bringer gavene?
c) Hvordan pyntes juletreet?`,
      solution: `a) Jul feires 24., 25. og 26. desember.
b) Gavene bringes av Weihnachtsmann (julenissen) eller Christkind (jesusbarnet).
c) Juletreet pyntes med stearinlys (Kerzen) og kuler (Kugeln).

**Kulturnotat:** I Nord-Tyskland er det Weihnachtsmann som bringer gaver, mens i Sor-Tyskland er det tradisjonelt Christkind.`,
    },
    {
      id: 'tysk-2-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar pa sporsmalene om tyske juletradisjoner:',
        subTasks: [
          { label: 'a', task: 'Hva heter julaften pa tysk?', solution: 'Heiligabend', answer: 'Heiligabend' },
          { label: 'b', task: 'Hva heter juletre pa tysk?', solution: 'Weihnachtsbaum', answer: 'Weihnachtsbaum' },
          { label: 'c', task: 'Hva er en Adventskranz?', solution: 'En adventskrans med fire lys', answer: 'adventskrans' },
        ],
        solution: 'a) Heiligabend, b) Weihnachtsbaum, c) En adventskrans med fire lys som tennes i ukene for jul',
        hints: ['Se vokabularlisten over'],
      },
    },
    {
      id: 'tysk-2-7-1-text-2',
      type: 'text',
      content: `## Ostern - Paske i Tyskland

Paske er en viktig hoytid i Tyskland, bade religiost og kulturelt. Mange tradisjoner er knyttet til varen og nye begynnelser.

**Pasketradisjoner:**
- **Ostereier bemalen** - male og dekorere paskeegg
- **Ostereier suchen** - barna leter etter gjemte egg
- **Der Osterhase** - paskehaen bringer egg og godteri
- **Das Osterfeuer** - bal pa paskaften i mange landsbyer
- **Osterlamm** - et kakelamm som bakes til paske`,
    },
    {
      id: 'tysk-2-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Ostern',
      problem: `Oversett til tysk:

a) Paskehaen gjemmer eggene i hagen.
b) Barna leter etter paskeegg.
c) Vi maler eggene i mange farger.`,
      solution: `a) **Der Osterhase versteckt die Eier im Garten.**
- verstecken = a gjemme
- der Garten = hagen

b) **Die Kinder suchen Ostereier.**
- suchen = a lete etter

c) **Wir bemalen die Eier in vielen Farben.**
- bemalen = a male
- die Farbe(n) = farge(r)`,
    },
    {
      id: 'tysk-2-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Der ___ bringt den Kindern Eier und Sussigkeiten.', solution: 'Osterhase', answer: 'Osterhase' },
          { label: 'b', task: 'Die Kinder ___ die Ostereier im Garten.', solution: 'suchen', answer: 'suchen' },
          { label: 'c', task: 'Am Ostersamstag brennt das ___ im Dorf.', solution: 'Osterfeuer', answer: 'Osterfeuer' },
          { label: 'd', task: 'Wir ___ die Eier bunt.', solution: 'bemalen', answer: 'bemalen' },
        ],
        solution: 'a) Osterhase, b) suchen, c) Osterfeuer, d) bemalen',
        hints: ['Paskehaen heter Osterhase', 'A lete etter = suchen'],
      },
    },
    {
      id: 'tysk-2-7-1-text-3',
      type: 'text',
      content: `## Karneval und Fasching

For fastetiden starter, feirer mange omrader i Tyskland **Karneval** (i Rheinland) eller **Fasching** (i Bayern og Osterrike). Dette er en tid for kostymer, parader og feiringer.

**Viktige Karneval-byer:**
- **Koln** - storste karnevalsfeiring med "Rosenmontag"-parade
- **Dusseldorf** - kjent for politisk satiriske vogner
- **Mainz** - tradisjonell feiring

**Viktige uttrykk:**
- "Alaaf!" - karnevalsrop i Koln
- "Helau!" - karnevalsrop i andre byer
- die Maske - maske
- das Kostum - kostyme
- der Umzug - parade/opptog`,
    },
    {
      id: 'tysk-2-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Karneval',
      problem: `Les og svar:

"Der Kolner Karneval beginnt offiziell am 11.11. um 11:11 Uhr. Die Hauptfeiertage sind aber im Februar oder Marz. Am Rosenmontag gibt es einen grossen Umzug durch die Stadt. Die Menschen tragen bunte Kostume und rufen 'Alaaf!'"

a) Nar begynner karnevalet offisielt?
b) Hva skjer pa Rosenmontag?
c) Hva roper folk i Koln?`,
      solution: `a) Karnevalet begynner offisielt 11. november klokken 11:11.
b) Pa Rosenmontag er det et stort opptog/parade gjennom byen.
c) Folk roper "Alaaf!" i Koln.

**Kulturnotat:** Tallet 11 er viktig i karneval fordi det anses som "narrens tall" - et tall som ikke passer inn i det vanlige tallsystemet.`,
    },
    {
      id: 'tysk-2-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sant eller usant? Rett opp de usanne pastandene:',
        subTasks: [
          { label: 'a', task: 'Karneval feires bare i Munchen.', solution: 'Usant - Karneval feires i mange byer, spesielt Koln, Dusseldorf og Mainz', answer: 'Usant' },
          { label: 'b', task: 'Rosenmontag er den viktigste karnevalsdagen.', solution: 'Sant', answer: 'Sant' },
          { label: 'c', task: '"Helau" er karnevalsropet i Koln.', solution: 'Usant - I Koln roper man "Alaaf"', answer: 'Usant' },
        ],
        solution: 'a) Usant - feires i mange byer, b) Sant, c) Usant - "Alaaf" i Koln, "Helau" i andre byer',
        hints: ['Koln har sitt eget karnevalsrop'],
      },
    },
    {
      id: 'tysk-2-7-1-text-4',
      type: 'text',
      content: `## Oktoberfest

**Oktoberfest** i Munchen er verdens storste folkefest med over 6 millioner besoekende hvert ar. Til tross for navnet starter festen i september!

**Fakta om Oktoberfest:**
- Startet i 1810 som bryllupsfest for kronprins Ludwig
- Varer ca. 16-18 dager
- Tradisjonelle klader: Dirndl (kvinner) og Lederhosen (menn)
- Serveres kun ol brygget i Munchen
- Tradisjonell mat: Brezel, Weisswurst, Hendl (stekt kylling)`,
    },
    {
      id: 'tysk-2-7-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Oktoberfest-vokabular',
      problem: `Koble tysk ord med norsk betydning:

1. die Lederhosen
2. das Dirndl
3. die Brezel
4. das Bierzelt
5. die Blasmusik`,
      solution: `1. die Lederhosen = skinnbukser (tradisjonelle bayerske bukser)
2. das Dirndl = tradisjonell bayersk kjole for kvinner
3. die Brezel = kringle (salt bakstverk)
4. das Bierzelt = oltelt
5. die Blasmusik = blasemusikk/korpsmusikk

**Kulturnotat:** A baere tradisjonelle klader (Tracht) pa Oktoberfest har blitt mer og mer populaert, ogsa blant turister.`,
    },
    {
      id: 'tysk-2-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (4-5 setninger) pa tysk om din favoritthoytid i Norge. Bruk minst 3 av disse ordene: feiern, die Familie, das Essen, die Tradition, zusammenkommen',
        subTasks: [
          { label: 'a', task: 'Hvilken hoytid velger du?', solution: 'Valgfritt svar' },
          { label: 'b', task: 'Nar feires den?', solution: 'Dato/tid pa tysk' },
          { label: 'c', task: 'Hva gjor familien din?', solution: 'Beskriv aktiviteter pa tysk' },
        ],
        solution: 'Eksempel: "Meine Lieblingsfeiertag ist Weihnachten. Wir feiern am 24. Dezember. Die Familie kommt zusammen und wir essen ein festliches Abendessen. Es ist eine schone Tradition."',
        hints: ['Bruk presens', 'zusammenkommen = a komme sammen', 'das Essen = maten/maltidet'],
      },
    },
    {
      id: 'tysk-2-7-1-note-1',
      type: 'note',
      title: 'Regionale forskjeller',
      content: `Tyskland har mange regionale tradisjoner. I nord feirer man annerledes enn i sor. Bayern har for eksempel Oktoberfest og sterke katolske tradisjoner, mens Nord-Tyskland har mer protestantiske tradisjoner. Rheinland er kjent for karneval, mens Sachsen har spesielle juletradisjoner fra Erzgebirge (raokemannfigurer og julestjerner).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Musik und Kunst
// ============================================================================

export const CHAPTER_TYSK_2_7_2: TextbookChapter = {
  id: 'tysk-2-7-2',
  courseId: 'tysk-2',
  chapterNumber: '7.2',
  title: 'Musik und Kunst',
  subtitle: 'Musikk og kunst',
  description: 'Utforsk tysk musikk- og kunsthistorie, fra klassiske komponister til moderne artister.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske komponister og kunstnere',
    'beskrive musikk og kunst pa tysk',
    'uttrykke meninger om kulturelle uttrykk',
  ],
  content: [
    {
      id: 'tysk-2-7-2-intro',
      type: 'text',
      content: `## Klassisk musikk fra Tyskland

Tyskland har fostret noen av historiens storste komponister. Klassisk musikk er en viktig del av tysk kulturarv og identitet.

**Store tyske komponister:**
- **Johann Sebastian Bach** (1685-1750) - barokkens mester
- **Ludwig van Beethoven** (1770-1827) - bro mellom klassisisme og romantikk
- **Johannes Brahms** (1833-1897) - romantikkens mester
- **Richard Wagner** (1813-1883) - operakomponist
- **Johann Wolfgang von Goethe** - ikke komponist, men dikter hvis verker ble tonesatt`,
    },
    {
      id: 'tysk-2-7-2-def-1',
      type: 'definition',
      title: 'Vokabular: Musikk',
      content: `**Musikkord:**

| Tysk | Norsk |
|------|-------|
| der Komponist | komponist |
| die Sinfonie | symfoni |
| die Oper | opera |
| das Konzert | konsert |
| das Orchester | orkester |
| der Dirigent | dirigent |
| die Geige | fiolin |
| das Klavier | piano |
| die Flote | floeyte |
| komponieren | a komponere |
| spielen | a spille |
| zuhoren | a lytte |`,
    },
    {
      id: 'tysk-2-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bach og Beethoven',
      problem: `Les teksten og svar:

"Johann Sebastian Bach wurde 1685 in Eisenach geboren. Er komponierte uber 1000 Werke, darunter die beruhmten Brandenburgischen Konzerte. Ludwig van Beethoven, geboren 1770 in Bonn, wurde spater taub, komponierte aber trotzdem seine berumte 9. Sinfonie mit der 'Ode an die Freude'."

a) Hvor ble Bach fodt?
b) Hva er spesielt med Beethovens 9. symfoni?
c) Hvilket handikap hadde Beethoven?`,
      solution: `a) Bach ble fodt i Eisenach.
b) Den 9. symfonien inneholder "Ode an die Freude" (Ode til gleden), som na er EUs hymne.
c) Beethoven ble dov (taub), men fortsatte a komponere.

**Kulturnotat:** "Ode an die Freude" fra Beethovens 9. symfoni ble valgt som EUs offisielle hymne i 1985.`,
    },
    {
      id: 'tysk-2-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble komponisten med riktig informasjon:',
        subTasks: [
          { label: 'a', task: 'Bach - fodt i ___ (by)', solution: 'Eisenach', answer: 'Eisenach' },
          { label: 'b', task: 'Beethoven - fodt i ___ (by)', solution: 'Bonn', answer: 'Bonn' },
          { label: 'c', task: 'Wagner er kjent for sine ___ (sjanger)', solution: 'Opern/operaer', answer: 'Opern' },
        ],
        solution: 'a) Eisenach, b) Bonn, c) Opern (operaer)',
        hints: ['Bach var fra Thuringen', 'Beethoven var fra Rheinland'],
      },
    },
    {
      id: 'tysk-2-7-2-text-2',
      type: 'text',
      content: `## Moderne tysk musikk

Tysk musikk er ikke bare klassisk! Tyskland har en rik moderne musikkscene med artister som har nadd internasjonal suksess.

**Sjangre og artister:**
- **Krautrock** (70-tallet): Kraftwerk, Tangerine Dream, Can
- **Neue Deutsche Welle** (80-tallet): Nena ("99 Luftballons")
- **Techno**: Berlin er verdens techno-hovedstad
- **Hip-hop**: Die Fantastischen Vier, Sido, Cro
- **Pop/Rock**: Rammstein, Tokio Hotel, Scorpions

**Viktige musikkfestivaler:**
- Rock am Ring
- Wacken Open Air (heavy metal)
- Love Parade (techno, avsluttet)`,
    },
    {
      id: 'tysk-2-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Kraftwerk',
      problem: `Les og svar:

"Kraftwerk ist eine Band aus Dusseldorf, die 1970 gegrundet wurde. Sie gelten als Pioniere der elektronischen Musik. Ihre Musik beeinflusste Genres wie Techno, Hip-Hop und Synthpop. Bekannte Lieder sind 'Autobahn', 'Das Model' und 'Die Roboter'."

a) Hvor kommer Kraftwerk fra?
b) Hvilken type musikk spiller de?
c) Nevn et kjent Kraftwerk-sang.`,
      solution: `a) Kraftwerk kommer fra Dusseldorf.
b) De spiller elektronisk musikk og regnes som pionerer i sjangeren.
c) Kjente sanger: "Autobahn", "Das Model", eller "Die Roboter".

**Musikktips:** Kraftwerks "Autobahn" (1974) er et 22 minutter langt stykke som beskriver en biltur pa motorveien - et revolusjonerende verk i elektronisk musikk.`,
    },
    {
      id: 'tysk-2-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilken sjanger tilhorer disse artistene/bandene?',
        subTasks: [
          { label: 'a', task: 'Rammstein', solution: 'Industrial metal/Rock', answer: 'Rock' },
          { label: 'b', task: 'Nena', solution: 'Neue Deutsche Welle/Pop', answer: 'Neue Deutsche Welle' },
          { label: 'c', task: 'Die Fantastischen Vier', solution: 'Hip-hop', answer: 'Hip-hop' },
          { label: 'd', task: 'Kraftwerk', solution: 'Elektronisk musikk', answer: 'Elektronisch' },
        ],
        solution: 'a) Rock/Metal, b) Neue Deutsche Welle, c) Hip-hop, d) Elektronisk musikk',
        hints: ['Rammstein synger ofte pa tysk med tunge gitarer'],
      },
    },
    {
      id: 'tysk-2-7-2-text-3',
      type: 'text',
      content: `## Tysk kunst

Tyskland har ogsa en rik kunsthistorie, fra middelalderens kirkekunst til moderne uttrykk.

**Viktige kunstnere:**
- **Albrecht Durer** (1471-1528) - renessansemaler og grafiker
- **Caspar David Friedrich** (1774-1840) - romantikkens landskapsmaler
- **Ernst Ludwig Kirchner** (1880-1938) - ekspresjonist
- **Joseph Beuys** (1921-1986) - konseptkunstner

**Viktige museer:**
- Alte Pinakothek, Munchen
- Gemaldegalerie, Berlin
- Museum Ludwig, Koln`,
    },
    {
      id: 'tysk-2-7-2-def-2',
      type: 'definition',
      title: 'Vokabular: Kunst',
      content: `**Kunstord:**

| Tysk | Norsk |
|------|-------|
| der Kunstler | kunstner |
| das Gemalde | maleri |
| die Skulptur | skulptur |
| die Ausstellung | utstilling |
| das Museum | museum |
| malen | a male |
| zeichnen | a tegne |
| das Meisterwerk | mesterverk |
| der Expressionismus | ekspresjonisme |
| die Romantik | romantikken |`,
    },
    {
      id: 'tysk-2-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Caspar David Friedrich',
      problem: `Se pa beskrivelsen av et kjent maleri:

"'Der Wanderer uber dem Nebelmeer' (1818) von Caspar David Friedrich zeigt einen Mann, der auf einem Felsen steht und uber ein Nebelmeer blickt. Das Bild ist ein Symbol fur die Romantik: der einsame Mensch vor der gewaltigen Natur."

a) Hva viser maleriet?
b) Hva symboliserer det?
c) Hvilken kunstepoke representerer det?`,
      solution: `a) Maleriet viser en mann som star pa en klippe og ser ut over et hav av take.
b) Det symboliserer det ensomme mennesket foran den mektige naturen.
c) Det representerer romantikken (die Romantik).

**Kunstnotat:** Dette maleriet er et av de mest kjente symbolene pa tysk romantikk og brukes ofte pa bokcover og i populaerkultur.`,
    },
    {
      id: 'tysk-2-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Kunstneren maler et bilde.', solution: 'Der Kunstler malt ein Bild.', answer: 'Der Künstler malt ein Bild' },
          { label: 'b', task: 'Vi besoker museet i morgen.', solution: 'Wir besuchen morgen das Museum.', answer: 'Wir besuchen morgen das Museum' },
          { label: 'c', task: 'Utstillingen er veldig interessant.', solution: 'Die Ausstellung ist sehr interessant.', answer: 'Die Ausstellung ist sehr interessant' },
        ],
        solution: 'a) Der Kunstler malt ein Bild, b) Wir besuchen morgen das Museum, c) Die Ausstellung ist sehr interessant',
        hints: ['malen = a male', 'besuchen = a besoeke'],
      },
    },
    {
      id: 'tysk-2-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv 3-4 setninger pa tysk om musikk eller kunst du liker. Bruk ordforradet fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Hvilken type musikk/kunst foretrekker du?', solution: 'Valgfritt svar pa tysk' },
          { label: 'b', task: 'Hvorfor liker du det?', solution: 'Begrunnelse pa tysk' },
          { label: 'c', task: 'Kjenner du noen tyske artister/kunstnere?', solution: 'Nevn eksempler' },
        ],
        solution: 'Eksempel: "Ich hore gern elektronische Musik. Kraftwerk ist meine Lieblingsband. Ihre Musik ist sehr interessant und innovativ."',
        hints: ['gern = gjerne', 'die Lieblingsband = favorittbandet'],
      },
    },
    {
      id: 'tysk-2-7-2-tip-1',
      type: 'tip',
      content: `**Utforsk selv:** Sok opp Kraftwerks "Autobahn" eller Beethovens "Ode an die Freude" pa YouTube. Sammenlign hvordan de to ulike epokene av tysk musikk hoeres ut!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Sport und Freizeit
// ============================================================================

export const CHAPTER_TYSK_2_7_3: TextbookChapter = {
  id: 'tysk-2-7-3',
  courseId: 'tysk-2',
  chapterNumber: '7.3',
  title: 'Sport und Freizeit',
  subtitle: 'Sport og fritid',
  description: 'Laer om tysk sportskultur, Bundesliga og fritidsaktiviteter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive sportsaktiviteter pa tysk',
    'forstå tysk sportskultur og Vereinskultur',
    'snakke om egne fritidsinteresser',
  ],
  content: [
    {
      id: 'tysk-2-7-3-intro',
      type: 'text',
      content: `## Sport i Tyskland

Fotball (Fussball) er den klart storste sporten i Tyskland, men tyskere er ogsa aktive i mange andre idretter. Tyskland har en sterk tradisjon for organisert idrett gjennom foreninger (Vereine).

**Populaere sporter:**
- Fussball - den storste sporten
- Handball - veldig populaert
- Basketball - voksende popularitet
- Tennis - spesielt etter Boris Becker
- Wintersport - ski, skoyting, bob`,
    },
    {
      id: 'tysk-2-7-3-def-1',
      type: 'definition',
      title: 'Vokabular: Sport',
      content: `**Sportsord:**

| Tysk | Norsk |
|------|-------|
| der Fussball | fotball |
| die Mannschaft | laget |
| das Spiel | kampen |
| der Spieler | spilleren |
| das Tor | mal |
| gewinnen | a vinne |
| verlieren | a tape |
| unentschieden | uavgjort |
| der Verein | forening/klubb |
| trainieren | a trene |
| der Trainer | treneren |
| die Liga | ligaen |`,
    },
    {
      id: 'tysk-2-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bundesliga',
      problem: `Les teksten:

"Die Bundesliga ist die hochste Spielklasse im deutschen Fussball. Sie wurde 1963 gegrundet. Bayern Munchen ist der erfolgreichste Verein mit uber 30 Meistertiteln. Andere bekannte Vereine sind Borussia Dortmund, RB Leipzig und Bayer Leverkusen. Die Bundesliga ist eine der besten Ligen der Welt."

a) Nar ble Bundesliga grunnlagt?
b) Hvilken klubb er mest suksessfull?
c) Nevn to andre kjente klubber.`,
      solution: `a) Bundesliga ble grunnlagt i 1963.
b) Bayern Munchen er den mest suksessfulle klubben med over 30 mesterskapstitler.
c) Andre kjente klubber: Borussia Dortmund, RB Leipzig, Bayer Leverkusen (nevn to).

**Fotballnotat:** Tyske fotballstadioner har ofte staplasser (Stehplatze) som gir en unik atmosfaere. "Die gelbe Wand" i Dortmund er Europas storste staende tribuneseksjon.`,
    },
    {
      id: 'tysk-2-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig sportsord:',
        subTasks: [
          { label: 'a', task: 'Bayern Munchen hat das ___ 3:0 gewonnen.', solution: 'Spiel', answer: 'Spiel' },
          { label: 'b', task: 'Der ___ hat zwei Tore geschossen.', solution: 'Spieler', answer: 'Spieler' },
          { label: 'c', task: 'Die ___ trainiert jeden Tag.', solution: 'Mannschaft', answer: 'Mannschaft' },
        ],
        solution: 'a) Spiel (kampen), b) Spieler (spilleren), c) Mannschaft (laget)',
        hints: ['das Spiel = kampen', 'der Spieler = spilleren'],
      },
    },
    {
      id: 'tysk-2-7-3-text-2',
      type: 'text',
      content: `## Vereinskultur - Foreningskulturen

I Tyskland er det tradisjon for a vaere medlem av en **Verein** (forening). Dette kan vaere alt fra sportslag til sangkor til hobbygrupper. Over 600 000 foreninger finnes i Tyskland!

**Typer foreninger:**
- **Sportverein** - idrettsforening
- **Musikverein** - musikkforening
- **Schutzenverein** - skytterlag
- **Karnevalsverein** - karnevalsforening
- **Wanderverein** - turforening

**Viktige uttrykk:**
- das Mitglied - medlem
- der Mitgliedsbeitrag - medlemsavgift
- der Vorsitzende - formann/leder
- die Vereinsarbeit - foreningsarbeid`,
    },
    {
      id: 'tysk-2-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Verein',
      problem: `Oversett til tysk:

a) Jeg er medlem av en fotballklubb.
b) Vi trener tre ganger i uken.
c) Laget vant kampen i gar.`,
      solution: `a) **Ich bin Mitglied in einem Fussballverein.**
- das Mitglied = medlem
- der Verein = forening/klubb

b) **Wir trainieren dreimal pro Woche.**
- trainieren = a trene
- pro Woche = per uke

c) **Die Mannschaft hat gestern das Spiel gewonnen.**
- gewinnen - gewonnen = vinne - vunnet
- gestern = i gar`,
    },
    {
      id: 'tysk-2-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hvor ofte trener du?', solution: 'Wie oft trainierst du?', answer: 'Wie oft trainierst du' },
          { label: 'b', task: 'Laget mitt tapte dessverre.', solution: 'Meine Mannschaft hat leider verloren.', answer: 'Meine Mannschaft hat leider verloren' },
          { label: 'c', task: 'Fotball er min favorittidrett.', solution: 'Fussball ist mein Lieblingssport.', answer: 'Fußball ist mein Lieblingssport' },
        ],
        solution: 'a) Wie oft trainierst du?, b) Meine Mannschaft hat leider verloren, c) Fussball ist mein Lieblingssport',
        hints: ['leider = dessverre', 'der Lieblingssport = favorittidrett'],
      },
    },
    {
      id: 'tysk-2-7-3-text-3',
      type: 'text',
      content: `## Fritidsaktiviteter

Utenom organisert idrett har tyskere mange fritidsinteresser. Friluftsliv er spesielt populaert.

**Populaere fritidsaktiviteter:**
- **Wandern** - fottur/fjelltur (veldig populaert!)
- **Radfahren** - sykling
- **Schwimmen** - svomming
- **Grillen** - grilling
- **Gartenarbeit** - hagearbeid
- **Lesen** - lesing
- **Fernsehen** - se pa TV
- **Computerspiele spielen** - spille dataspill`,
    },
    {
      id: 'tysk-2-7-3-def-2',
      type: 'definition',
      title: 'Vokabular: Fritid',
      content: `**Fritidsord:**

| Tysk | Norsk |
|------|-------|
| die Freizeit | fritid |
| das Hobby | hobby |
| wandern | a ga tur |
| Rad fahren | a sykle |
| schwimmen | a svomme |
| lesen | a lese |
| kochen | a lage mat |
| reisen | a reise |
| fotografieren | a fotografere |
| Musik horen | a hoere pa musikk |`,
    },
    {
      id: 'tysk-2-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Hobbyer',
      problem: `Skriv tre setninger om hva du gjor i fritiden. Bruk konstruksjonen "In meiner Freizeit + verb + ich gern..."

Eksempel: In meiner Freizeit lese ich gern Bucher.`,
      solution: `Mulige svar:
- **In meiner Freizeit spiele ich gern Fussball.**
- **In meiner Freizeit hore ich gern Musik.**
- **In meiner Freizeit treffe ich gern Freunde.**
- **In meiner Freizeit sehe ich gern Filme.**

Merk ordstillingen: I hovedsetninger kommer verbet pa andre plass!`,
    },
    {
      id: 'tysk-2-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag setninger med "gern" (gjerne):',
        subTasks: [
          { label: 'a', task: 'ich / schwimmen / gern', solution: 'Ich schwimme gern.', answer: 'Ich schwimme gern' },
          { label: 'b', task: 'wir / wandern / am Wochenende / gern', solution: 'Wir wandern am Wochenende gern.', answer: 'Wir wandern am Wochenende gern' },
          { label: 'c', task: 'sie (hun) / Rad fahren / in der Stadt / gern', solution: 'Sie fahrt gern in der Stadt Rad.', answer: 'Sie fährt gern in der Stadt Rad' },
        ],
        solution: 'a) Ich schwimme gern, b) Wir wandern am Wochenende gern, c) Sie fahrt gern in der Stadt Rad',
        hints: ['gern star vanligvis etter verbet', 'Rad fahren er delbart verb'],
      },
    },
    {
      id: 'tysk-2-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Intervju en klassekamerat om fritidsaktiviteter og skriv svarene pa tysk:',
        subTasks: [
          { label: 'a', task: 'Was machst du in deiner Freizeit?', solution: 'Personlig svar' },
          { label: 'b', task: 'Bist du Mitglied in einem Verein?', solution: 'Ja/Nein + utdyping' },
          { label: 'c', task: 'Welchen Sport magst du am liebsten?', solution: 'Svar med begrunnelse' },
        ],
        solution: 'Eksempel: "Er/Sie spielt gern Fussball. Er/Sie ist Mitglied in einem Sportverein. Sein/Ihr Lieblingssport ist Handball."',
        hints: ['am liebsten = aller helst', 'Bruk tredje person nar du rapporterer'],
      },
    },
    {
      id: 'tysk-2-7-3-tip-1',
      type: 'tip',
      content: `**Ordstilling med "gern":** "Gern" (gjerne) plasseres vanligvis rett etter verbet: "Ich spiele gern Fussball." Hvis setningen har flere ledd, kan "gern" ogsa sta lenger bak, men aldri forst eller pa verbplass.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Alltagskultur
// ============================================================================

export const CHAPTER_TYSK_2_7_4: TextbookChapter = {
  id: 'tysk-2-7-4',
  courseId: 'tysk-2',
  chapterNumber: '7.4',
  title: 'Alltagskultur',
  subtitle: 'Hverdagskultur',
  description: 'Utforsk tysk hverdagskultur, Gemutlichkeit og sosiale normer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå typiske trekk ved tysk hverdagskultur',
    'forklare konseptet Gemutlichkeit',
    'sammenligne norsk og tysk hverdagskultur',
  ],
  content: [
    {
      id: 'tysk-2-7-4-intro',
      type: 'text',
      content: `## Tysk hverdagskultur

Hverdagen i Tyskland har mange saertrekk som kan overraske nordmenn. Fra punktlighet til Kaffee und Kuchen - la oss utforske hva som kjennetegner tysk hverdagsliv.

**Typiske trekk:**
- **Punktlichkeit** - punktlighet er viktig
- **Ordnung** - orden og struktur
- **Grundlichkeit** - grundighet
- **Direktheit** - direkte kommunikasjon
- **Gemutlichkeit** - koselig hygge (mer om dette senere!)`,
    },
    {
      id: 'tysk-2-7-4-def-1',
      type: 'definition',
      title: 'Gemutlichkeit',
      content: `**Gemutlichkeit** er et tysk konsept som er vanskelig a oversette direkte. Det betyr omtrent "koselig, hyggelig, avslappet atmosfaere" - men mer enn det.

**Elementer av Gemutlichkeit:**
- En varm, innbydende atmosfaere
- Tid til a nyte oeyeblikket
- Godt selskap med venner eller familie
- God mat og drikke
- Ingen stress eller hastverk

Eksempel: "Es ist sehr gemutlich hier" = "Det er veldig koselig/hyggelig her"`,
    },
    {
      id: 'tysk-2-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Typisk tysk dag',
      problem: `Les om en typisk dag for Klaus:

"Klaus steht um 6:30 Uhr auf. Er fruhstuckt um 7 Uhr - Brotchen mit Marmelade und Kaffee. Um 8 Uhr beginnt die Arbeit. Die Mittagspause ist von 12 bis 13 Uhr. Nach der Arbeit geht er um 17 Uhr nach Hause. Um 18:30 Uhr gibt es Abendbrot - kaltes Essen mit Brot, Kase und Wurst. Am Abend sieht er fern oder liest."

a) Nar star Klaus opp?
b) Hva spiser tyskere typisk til kveldsmat?
c) Hva er "Mittagspause"?`,
      solution: `a) Klaus star opp klokken 6:30.
b) Til kveldsmat (Abendbrot) spises typisk kaldt - brod med ost og polse.
c) Mittagspause er lunsjpausen (fra 12 til 13).

**Kulturnotat:** "Abendbrot" (bokstavelig "kveldsbrod") er typisk et kaldt maltid, i motsetning til den varme lunsjmaten. Dette er forskjellig fra norsk tradisjon!`,
    },
    {
      id: 'tysk-2-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse tyske ordene?',
        subTasks: [
          { label: 'a', task: 'die Punktlichkeit', solution: 'punktlighet', answer: 'punktlighet' },
          { label: 'b', task: 'das Abendbrot', solution: 'kveldsmat (kaldt maltid)', answer: 'kveldsmat' },
          { label: 'c', task: 'gemutlich', solution: 'koselig/hyggelig', answer: 'koselig' },
          { label: 'd', task: 'die Ordnung', solution: 'orden', answer: 'orden' },
        ],
        solution: 'a) punktlighet, b) kveldsmat, c) koselig/hyggelig, d) orden',
        hints: ['Abendbrot = kveld + brod'],
      },
    },
    {
      id: 'tysk-2-7-4-text-2',
      type: 'text',
      content: `## Kaffee und Kuchen

En viktig tysk tradisjon er **Kaffee und Kuchen** - kaffe og kake om ettermiddagen, vanligvis rundt klokken 15-16.

**Typiske kaker:**
- **Schwarzwalder Kirschtorte** - Svartskogskake
- **Apfelstrudel** - eplestrudel
- **Bienenstich** - "bistikk" (mandel/vaniljekake)
- **Streuselkuchen** - smulekake

**Viktige ord:**
- die Konditorei - konditori/kafe
- die Sahne - flote/krem
- das Stuck Kuchen - et stykke kake
- der Kaffee und Kuchen - ettermiddagskaffe`,
    },
    {
      id: 'tysk-2-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Pa kafe',
      problem: `Du er pa en tysk kafe. Oversett dialogen:

Kelner: "Was mochten Sie bestellen?"
Du: "Jeg vil gjerne ha en kopp kaffe og et stykke eplekake."
Kelner: "Mit Sahne?"
Du: "Ja, takk."`,
      solution: `Kelner: "Was mochten Sie bestellen?" (Hva oensker De a bestille?)

Du: **"Ich mochte gern eine Tasse Kaffee und ein Stuck Apfelkuchen."**
- eine Tasse = en kopp
- ein Stuck = et stykke

Kelner: "Mit Sahne?" (Med krem/flote?)

Du: **"Ja, bitte."** (Ja, takk.)`,
    },
    {
      id: 'tysk-2-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag bestillingssetninger pa tysk:',
        subTasks: [
          { label: 'a', task: 'En kopp te, takk.', solution: 'Eine Tasse Tee, bitte.', answer: 'Eine Tasse Tee, bitte' },
          { label: 'b', task: 'Jeg vil gjerne ha et stykke sjokoladekake.', solution: 'Ich mochte gern ein Stuck Schokoladenkuchen.', answer: 'Ich möchte gern ein Stück Schokoladenkuchen' },
          { label: 'c', task: 'Kan jeg fa regningen?', solution: 'Kann ich die Rechnung haben?', answer: 'Kann ich die Rechnung haben' },
        ],
        solution: 'a) Eine Tasse Tee, bitte, b) Ich mochte gern ein Stuck Schokoladenkuchen, c) Kann ich die Rechnung haben?',
        hints: ['mochte = vil gjerne ha', 'die Rechnung = regningen'],
      },
    },
    {
      id: 'tysk-2-7-4-text-3',
      type: 'text',
      content: `## Sosiale normer

Det er noen sosiale normer i Tyskland som er gode a kjenne til:

**Hilsener:**
- Man hander ofte ved hilsen
- "Guten Tag" er formell, "Hallo" er uformell
- I Sor-Tyskland: "Gruss Gott" eller "Servus"

**Punktlighet:**
- A komme for sent regnes som ufint
- Kommer du til middag, vaer presis eller litt for

**"Du" og "Sie":**
- Bruk "Sie" med fremmede, eldre og i formelle situasjoner
- "Du" brukes med venner, familie og barn
- A tilby "du" er en gest (man sier "Wollen wir uns duzen?")`,
    },
    {
      id: 'tysk-2-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Formelt vs uformelt',
      problem: `Oversett til bade formell (Sie) og uformell (du) form:

a) Hvordan har du det?
b) Hvor kommer du fra?
c) Hva heter du?`,
      solution: `a) Hvordan har du det?
- Formell: **"Wie geht es Ihnen?"**
- Uformell: **"Wie geht es dir?"** / **"Wie geht's?"**

b) Hvor kommer du fra?
- Formell: **"Woher kommen Sie?"**
- Uformell: **"Woher kommst du?"**

c) Hva heter du?
- Formell: **"Wie heissen Sie?"**
- Uformell: **"Wie heisst du?"**`,
    },
    {
      id: 'tysk-2-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skal du bruke "du" eller "Sie" i disse situasjonene?',
        subTasks: [
          { label: 'a', task: 'Du moter sjefen din for forste gang.', solution: 'Sie', answer: 'Sie' },
          { label: 'b', task: 'Du snakker med en klassekamerat.', solution: 'du', answer: 'du' },
          { label: 'c', task: 'Du sporr en eldre dame om veien.', solution: 'Sie', answer: 'Sie' },
          { label: 'd', task: 'Du snakker med kusinen din.', solution: 'du', answer: 'du' },
        ],
        solution: 'a) Sie (formelt, forste moete med sjef), b) du (jevnaldrende), c) Sie (eldre, fremmed), d) du (familie)',
        hints: ['Sie til fremmede og eldre', 'du til venner og familie'],
      },
    },
    {
      id: 'tysk-2-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign norsk og tysk hverdagskultur. Skriv 4-5 setninger pa tysk om forskjeller.',
        subTasks: [
          { label: 'a', task: 'Nevn en forskjell i matkultur.', solution: 'F.eks. Abendbrot vs varm middag' },
          { label: 'b', task: 'Nevn en forskjell i sosiale normer.', solution: 'F.eks. handtrykk, du/Sie' },
          { label: 'c', task: 'Hva er likt?', solution: 'F.eks. punktlighet, kaffe' },
        ],
        solution: 'Eksempel: "In Deutschland isst man abends oft kalt (Abendbrot). In Norwegen essen wir warm. Die Deutschen sind sehr punktlich, genau wie die Norweger. Kaffee ist in beiden Landern sehr beliebt."',
        hints: ['genau wie = akkurat som', 'beliebt = populaer'],
      },
    },
    {
      id: 'tysk-2-7-4-note-1',
      type: 'note',
      title: 'Sondag i Tyskland',
      content: `Sondag (Sonntag) er tradisjonelt en rolig dag i Tyskland. De fleste butikker er stengt - dette er lovfestet! Bakkerier kan ha apent noen timer om morgenen. Mange familier bruker sondagen til "Sonntagsspaziergang" (sondagstur) eller familiebesok. Dette kan vaere uvant for nordmenn som er vant til sondagsapne butikker.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: Umweltprobleme
// ============================================================================

export const CHAPTER_TYSK_2_8_1: TextbookChapter = {
  id: 'tysk-2-8-1',
  courseId: 'tysk-2',
  chapterNumber: '8.1',
  title: 'Umweltprobleme',
  subtitle: 'Miljoproblemer',
  description: 'Laer vokabular og uttrykk for a diskutere miljoproblemer pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive miljoproblemer pa tysk',
    'forstå tekster om miljotemaer',
    'bruke miljoterminologi korrekt',
  ],
  content: [
    {
      id: 'tysk-2-8-1-intro',
      type: 'text',
      content: `## Miljoutfordringer i var tid

Miljo og klima er viktige temaer i Tyskland. Landet har vaert en pioner innen miljovern og har strenge miljoreguleringer. La oss laere ordforradet vi trenger for a diskutere disse temaene.

**Hovedtemaer:**
- Klimawandel (klimaendringer)
- Luftverschmutzung (luftforurensning)
- Plastikmull (plastavfall)
- Artensterben (artsutryddelse)
- Ressourcenverbrauch (ressursforbruk)`,
    },
    {
      id: 'tysk-2-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Miljoproblemer',
      content: `**Grunnleggende miljovokabular:**

| Tysk | Norsk |
|------|-------|
| die Umwelt | miljoet |
| der Klimawandel | klimaendringer |
| die Erderwarmung | global oppvarming |
| der Treibhauseffekt | drivhuseffekten |
| die Verschmutzung | forurensning |
| der Mull | avfall/sopla |
| die Abgase | avgasser |
| der CO2-Ausstoss | CO2-utslipp |
| die Uberschwemmung | flom |
| die Durre | torke |
| schmelzen | a smelte |
| verschmutzen | a forurense |`,
    },
    {
      id: 'tysk-2-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Klimaendringer',
      problem: `Les teksten og svar:

"Der Klimawandel ist eines der grossten Probleme unserer Zeit. Die Erderwarmung fuhrt zu steigenden Temperaturen und extremem Wetter. Die Gletscher schmelzen, der Meeresspiegel steigt. Viele Lander erleben mehr Uberschwemmungen und Durren. Der CO2-Ausstoss muss reduziert werden."

a) Hva forer global oppvarming til?
b) Hva skjer med isbreene?
c) Hva ma reduseres?`,
      solution: `a) Global oppvarming forer til stigende temperaturer og ekstremt vaer.
b) Isbreene smelter (Die Gletscher schmelzen).
c) CO2-utslippene ma reduseres (Der CO2-Ausstoss muss reduziert werden).

**Nyttige verb:**
- fuhrt zu = forer til
- muss reduziert werden = ma reduseres (passiv)`,
    },
    {
      id: 'tysk-2-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble det tyske ordet med norsk betydning:',
        subTasks: [
          { label: 'a', task: 'die Umwelt', solution: 'miljoet', answer: 'miljøet' },
          { label: 'b', task: 'die Erderwarmung', solution: 'global oppvarming', answer: 'global oppvarming' },
          { label: 'c', task: 'die Verschmutzung', solution: 'forurensning', answer: 'forurensning' },
          { label: 'd', task: 'der Mull', solution: 'avfall/sopel', answer: 'avfall' },
        ],
        solution: 'a) miljoet, b) global oppvarming, c) forurensning, d) avfall',
        hints: ['Umwelt = omverden/miljo', 'Erde = jorden'],
      },
    },
    {
      id: 'tysk-2-8-1-text-2',
      type: 'text',
      content: `## Luftforurensning og avfall

To store miljoproblemer er **Luftverschmutzung** (luftforurensning) og **Mullproblem** (avfallsproblemet).

**Luftforurensning:**
- Abgase (avgasser) fra biler og industri
- Feinstaub (finstov) fra forbrenning
- Smog i store byer

**Avfallsproblem:**
- Plastikmull i havet
- Elektronikabfall (e-avfall)
- Lebensmittelverschwendung (matsvinn)

**Viktige uttrykk:**
- die Luft ist verschmutzt = luften er forurenset
- Mull trennen = kildesortere
- wegwerfen = a kaste`,
    },
    {
      id: 'tysk-2-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Plastikkproblemet',
      problem: `Oversett til tysk:

a) Plastavfall forurenser havet.
b) Vi ma bruke mindre plastikk.
c) Mange dyr dor pa grunn av plastikk.`,
      solution: `a) **Plastikmull verschmutzt das Meer.**
- verschmutzen = a forurense
- das Meer = havet

b) **Wir mussen weniger Plastik benutzen.**
- mussen = ma
- weniger = mindre

c) **Viele Tiere sterben wegen Plastik.**
- sterben = a doe
- wegen + genitiv = pa grunn av`,
    },
    {
      id: 'tysk-2-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Autos produzieren viele ___ (avgasser).', solution: 'Abgase', answer: 'Abgase' },
          { label: 'b', task: 'Die ___ (luftforurensning) ist ein grosses Problem.', solution: 'Luftverschmutzung', answer: 'Luftverschmutzung' },
          { label: 'c', task: 'Wir mussen den Mull ___ (kildesortere).', solution: 'trennen', answer: 'trennen' },
          { label: 'd', task: 'Der ___ (havnivaet) steigt.', solution: 'Meeresspiegel', answer: 'Meeresspiegel' },
        ],
        solution: 'a) Abgase, b) Luftverschmutzung, c) trennen, d) Meeresspiegel',
        hints: ['trennen = a skille/sortere', 'der Spiegel = speil/niva'],
      },
    },
    {
      id: 'tysk-2-8-1-text-3',
      type: 'text',
      content: `## Artsutryddelse og naturvern

**Artensterben** (artsutryddelse) er et alvorlig problem. Mange dyre- og plantearter er truet.

**Arsaker:**
- Lebensraumzerstorung - oedeleggelse av leveomrader
- Uberjagung - overjakt
- Klimawandel - klimaendringer
- Verschmutzung - forurensning

**Losninger:**
- Naturschutzgebiete - naturreservater
- Artenschutz - artsvern
- Aufforstung - skogreising

**Viktige dyr pa tysk:**
- der Eisbar - isbjorn
- der Wolf - ulv
- die Biene - bie (truet!)
- der Wal - hval`,
    },
    {
      id: 'tysk-2-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Truede arter',
      problem: `Les og svar:

"In Deutschland ist der Wolf zuruckgekehrt. Das ist gut fur die Biodiversitat, aber manche Bauern sind besorgt wegen ihrer Schafe. Die Bienen sind auch gefahrdet. Ohne Bienen keine Bestaubung, ohne Bestaubung keine Fruchte. Wir mussen die Bienen schutzen!"

a) Hvilket dyr har kommet tilbake til Tyskland?
b) Hvorfor er bier viktige?
c) Hva betyr "schutzen"?`,
      solution: `a) Ulven (der Wolf) har kommet tilbake til Tyskland.
b) Bier er viktige for bestovning (Bestaubung). Uten bestovning blir det ingen frukt.
c) "schutzen" betyr a beskytte/verne.

**Miljofakta:** Biedoden (Bienensterben) er et alvorlig problem i hele Europa og truer matproduksjonen.`,
    },
    {
      id: 'tysk-2-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Mange dyrearter er truet.', solution: 'Viele Tierarten sind gefahrdet.', answer: 'Viele Tierarten sind gefährdet' },
          { label: 'b', task: 'Vi ma beskytte naturen.', solution: 'Wir mussen die Natur schutzen.', answer: 'Wir müssen die Natur schützen' },
          { label: 'c', task: 'Regnskogen oedelegges.', solution: 'Der Regenwald wird zerstort.', answer: 'Der Regenwald wird zerstört' },
        ],
        solution: 'a) Viele Tierarten sind gefahrdet, b) Wir mussen die Natur schutzen, c) Der Regenwald wird zerstort',
        hints: ['gefahrdet = truet', 'zerstoren = a oedelegge'],
      },
    },
    {
      id: 'tysk-2-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5-6 setninger) pa tysk om et miljoproblem du er opptatt av.',
        subTasks: [
          { label: 'a', task: 'Hvilket miljoproblem velger du?', solution: 'Fritt valg' },
          { label: 'b', task: 'Hva er arsakene?', solution: 'Skriv 1-2 setninger om arsaker' },
          { label: 'c', task: 'Hva kan gjores?', solution: 'Skriv 1-2 setninger om losninger' },
        ],
        solution: 'Eksempel: "Der Klimawandel ist ein grosses Problem. Die Temperaturen steigen jedes Jahr. Das liegt am CO2-Ausstoss von Autos und Industrie. Wir mussen mehr erneuerbare Energie nutzen. Jeder kann helfen, zum Beispiel weniger Auto fahren."',
        hints: ['das liegt an = det skyldes', 'zum Beispiel = for eksempel'],
      },
    },
    {
      id: 'tysk-2-8-1-tip-1',
      type: 'tip',
      content: `**Ordlaging:** Tysk er kjent for lange sammensatte ord. "Klimawandel" = Klima + Wandel. "Luftverschmutzung" = Luft + Verschmutzung. Naar du ser et langt ord, prov a dele det opp i mindre deler - da blir betydningen ofte klar!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Die deutsche Energiewende
// ============================================================================

export const CHAPTER_TYSK_2_8_2: TextbookChapter = {
  id: 'tysk-2-8-2',
  courseId: 'tysk-2',
  chapterNumber: '8.2',
  title: 'Die deutsche Energiewende',
  subtitle: 'Det tyske energiskiftet',
  description: 'Laer om Tysklands overgang til fornybar energi og miljovenlig teknologi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva Energiewende betyr',
    'beskrive ulike energikilder pa tysk',
    'diskutere fordeler og ulemper med ulike energiformer',
  ],
  content: [
    {
      id: 'tysk-2-8-2-intro',
      type: 'text',
      content: `## Die Energiewende - Energiskiftet

**Energiewende** er Tysklands ambisiose plan for a ga over fra fossile og atomkraft til fornybar energi. Malet er a fa 80% av strommen fra fornybare kilder innen 2030.

**Hovedmal:**
- Avvikle atomkraft (fullfort 2023)
- Redusere CO2-utslipp drastisk
- Satse pa vind, sol og biomasse
- Oke energieffektivitet

Tyskland er en pioner innen fornybar energi i Europa.`,
    },
    {
      id: 'tysk-2-8-2-def-1',
      type: 'definition',
      title: 'Vokabular: Energikilder',
      content: `**Energiord:**

| Tysk | Norsk |
|------|-------|
| die Energie | energi |
| die Energiewende | energiskiftet |
| erneuerbare Energie | fornybar energi |
| die Windkraft | vindkraft |
| die Solarenergie | solenergi |
| die Wasserkraft | vannkraft |
| die Atomkraft | atomkraft |
| die Kohle | kull |
| das Erdol | olje |
| das Erdgas | naturgass |
| das Kraftwerk | kraftverk |
| die Windturbine | vindturbin |`,
    },
    {
      id: 'tysk-2-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fornybar energi',
      problem: `Les teksten:

"Deutschland hat 2023 das letzte Atomkraftwerk abgeschaltet. Stattdessen setzt das Land auf erneuerbare Energien. An der Nordseekuste stehen viele Windparks. In Bayern gibt es viele Solaranlagen. Die Windkraft liefert bereits uber 25% des deutschen Stroms."

a) Hva skjedde i 2023?
b) Hvor star vindparkene?
c) Hvor mye strom kommer fra vindkraft?`,
      solution: `a) I 2023 ble det siste atomkraftverket stengt (abgeschaltet).
b) Vindparkene star ved Nordsjokysten (an der Nordseekuste).
c) Over 25% av tysk strom kommer fra vindkraft.

**Energifakta:** Tyskland er en av verdens storste produsenter av vindenergi, med over 30 000 vindturbiner.`,
    },
    {
      id: 'tysk-2-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Kategoriser energikildene som fornybar eller ikke-fornybar:',
        subTasks: [
          { label: 'a', task: 'die Windkraft', solution: 'erneuerbar (fornybar)', answer: 'erneuerbar' },
          { label: 'b', task: 'die Kohle', solution: 'nicht erneuerbar (ikke fornybar)', answer: 'nicht erneuerbar' },
          { label: 'c', task: 'die Solarenergie', solution: 'erneuerbar', answer: 'erneuerbar' },
          { label: 'd', task: 'das Erdol', solution: 'nicht erneuerbar', answer: 'nicht erneuerbar' },
        ],
        solution: 'a) erneuerbar, b) nicht erneuerbar, c) erneuerbar, d) nicht erneuerbar',
        hints: ['Fornybar = kan fornyes naturlig', 'Kull og olje er fossilt brennstoff'],
      },
    },
    {
      id: 'tysk-2-8-2-text-2',
      type: 'text',
      content: `## Vindkraft og solenergi

**Windkraft** (vindkraft) og **Solarenergie** (solenergi) er de viktigste fornybare kildene i Tyskland.

**Vindkraft:**
- Onshore (pa land): billigere, enklere
- Offshore (til havs): sterkere vind, dyrere
- Vindparker skaper arbeidsplasser
- Kritikk: Stoy, fugler, estetikk

**Solenergi:**
- Solaranlagen (solanlegg) pa tak
- Solarparks pa mark
- EEG-loven (Erneuerbare-Energien-Gesetz) subsidierer solenergi
- Kritikk: Krever mye plass, varavhengig`,
    },
    {
      id: 'tysk-2-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Fordeler og ulemper',
      problem: `Fyll ut tabellen med tyske uttrykk:

| | Fordel (Vorteil) | Ulempe (Nachteil) |
|---|---|---|
| Vindkraft | | |
| Solenergi | | |`,
      solution: `| | Fordel (Vorteil) | Ulempe (Nachteil) |
|---|---|---|
| Windkraft | umweltfreundlich, erneuerbar | Larm, totet Vogel, nicht immer Wind |
| Solarenergie | sauber, leise | wetterabhangig, braucht viel Platz |

**Nyttige uttrykk:**
- umweltfreundlich = miljovenlig
- sauber = ren
- wetterabhangig = vaeravhengig
- der Larm = stoyen`,
    },
    {
      id: 'tysk-2-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Vindkraft er miljovenlig.', solution: 'Windkraft ist umweltfreundlich.', answer: 'Windkraft ist umweltfreundlich' },
          { label: 'b', task: 'Solenergi er avhengig av vaeret.', solution: 'Solarenergie ist wetterabhangig.', answer: 'Solarenergie ist wetterabhängig' },
          { label: 'c', task: 'Vi trenger mer fornybar energi.', solution: 'Wir brauchen mehr erneuerbare Energie.', answer: 'Wir brauchen mehr erneuerbare Energie' },
        ],
        solution: 'a) Windkraft ist umweltfreundlich, b) Solarenergie ist wetterabhangig, c) Wir brauchen mehr erneuerbare Energie',
        hints: ['umwelt + freundlich = miljovenlig', 'abhangig = avhengig'],
      },
    },
    {
      id: 'tysk-2-8-2-text-3',
      type: 'text',
      content: `## Utfordringer ved Energiewende

Energiskiftet er ikke uten problemer:

**Utfordringer:**
- **Netzausbau** - stromnettet ma bygges ut
- **Speicherung** - lagring av energi er vanskelig
- **Kosten** - omstillingen er dyr
- **Versorgungssicherheit** - ma sikre stabil stromforsyning

**Losninger:**
- Batteriteknologi utvikles
- Pumpspeicherkraftwerke (pumpekraftverk)
- Europeisk samarbeid
- Smart grid (smarte stromnett)`,
    },
    {
      id: 'tysk-2-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskusjon',
      problem: `Forklar pa tysk:

a) Hvorfor er lagring av energi et problem?
b) Hva er en fordel med atomkraft vs. fornybar energi?`,
      solution: `a) **Die Speicherung ist ein Problem, weil die Sonne nicht immer scheint und der Wind nicht immer weht. Wir brauchen Energie auch nachts und bei Windstille.**
(Lagring er et problem fordi solen ikke alltid skinner og vinden ikke alltid blaser. Vi trenger energi ogsa om natten og nar det er vindstille.)

b) **Atomkraft liefert konstant Strom, unabhangig vom Wetter. Erneuerbare Energien sind wetterabhangig.**
(Atomkraft leverer konstant strom, uavhengig av vaeret. Fornybar energi er vaeravhengig.)`,
    },
    {
      id: 'tysk-2-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Die ___ (lagring) von Energie ist schwierig.', solution: 'Speicherung', answer: 'Speicherung' },
          { label: 'b', task: 'Deutschland will mehr ___ Energie (fornybar).', solution: 'erneuerbare', answer: 'erneuerbare' },
          { label: 'c', task: 'Das ___ (stromnettet) muss ausgebaut werden.', solution: 'Stromnetz', answer: 'Stromnetz' },
        ],
        solution: 'a) Speicherung, b) erneuerbare, c) Stromnetz',
        hints: ['speichern = a lagre', 'das Netz = nettet'],
      },
    },
    {
      id: 'tysk-2-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskusjon: Er Energiewende en god ide? Skriv argumenter FOR og MOT pa tysk.',
        subTasks: [
          { label: 'a', task: 'Skriv to argumenter FOR (dafur).', solution: 'F.eks. gut fur die Umwelt, schafft Arbeitsplatze' },
          { label: 'b', task: 'Skriv to argumenter MOT (dagegen).', solution: 'F.eks. teuer, nicht immer zuverlassig' },
          { label: 'c', task: 'Hva er din mening?', solution: 'Personlig konklusjon pa tysk' },
        ],
        solution: 'Eksempel: Dafur: "Erneuerbare Energie ist gut fur die Umwelt. Sie schafft neue Arbeitsplatze." Dagegen: "Die Energiewende ist sehr teuer. Manchmal gibt es keinen Wind oder Sonne."',
        hints: ['gut fur = bra for', 'teuer = dyr', 'schaffen = a skape'],
      },
    },
    {
      id: 'tysk-2-8-2-note-1',
      type: 'note',
      title: 'Sammenligning med Norge',
      content: `Norge har ogsa mye fornybar energi, men hovedsakelig fra vannkraft (ca. 90% av stromforsyningen). Tyskland har mindre vannkraft-potensial og satser derfor mer pa vind og sol. Begge land er viktige for det europeiske energisamarbeidet - norsk vannkraft kan balansere tysk vind- og solkraft!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Nachhaltigkeit im Alltag
// ============================================================================

export const CHAPTER_TYSK_2_8_3: TextbookChapter = {
  id: 'tysk-2-8-3',
  courseId: 'tysk-2',
  chapterNumber: '8.3',
  title: 'Nachhaltigkeit im Alltag',
  subtitle: 'Baerekraft i hverdagen',
  description: 'Laer om baerekraftige valg i hverdagen, resirkulering og det tyske Pfandsystemet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive baerekraftige handlinger pa tysk',
    'forklare det tyske pantesystemet',
    'diskutere miljovenlige valg',
  ],
  content: [
    {
      id: 'tysk-2-8-3-intro',
      type: 'text',
      content: `## Baerekraft i hverdagen

**Nachhaltigkeit** (baerekraft) handler om a leve pa en mate som ikke odelegger for fremtidige generasjoner. I Tyskland er baerekraft en del av hverdagen gjennom resirkulering, pantesystem og bevisste forbrukervalg.

**Viktige omrader:**
- Mulltrennung (kildesortering)
- Das Pfandsystem (pantesystemet)
- Energiesparen (energisparing)
- Bewusster Konsum (bevisst forbruk)`,
    },
    {
      id: 'tysk-2-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Baerekraft',
      content: `**Baerekraftsord:**

| Tysk | Norsk |
|------|-------|
| die Nachhaltigkeit | baerekraft |
| nachhaltig | baerekraftig |
| recyceln | a resirkulere |
| wiederverwenden | a gjenbruke |
| die Mulltrennung | kildesortering |
| der Pfand | pant |
| die Pfandflasche | panteflaske |
| sparen | a spare |
| vermeiden | a unnga |
| der Verbrauch | forbruk |
| der Konsum | konsum |
| umweltbewusst | miljoebevisst |`,
    },
    {
      id: 'tysk-2-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Das Pfandsystem',
      problem: `Les om det tyske pantesystemet:

"In Deutschland gibt es ein Pfandsystem fur Flaschen und Dosen. Einwegflaschen aus Plastik haben 25 Cent Pfand. Mehrwegflaschen aus Glas haben 8 oder 15 Cent Pfand. Man bringt die leeren Flaschen zum Supermarkt und bekommt das Geld zuruck. Das System reduziert Mull und fordert das Recycling."

a) Hvor mye pant har plastflasker?
b) Hvor leverer man flaskene?
c) Hva er formalet med systemet?`,
      solution: `a) Plastflasker (Einwegflaschen) har 25 cent pant.
b) Man leverer flaskene i supermarkedet (zum Supermarkt).
c) Formalet er a redusere avfall og fremme resirkulering.

**Pantfakta:**
- Einweg = engangs (kastes etter resirkulering)
- Mehrweg = flergangs (vaskes og brukes pa nytt)`,
    },
    {
      id: 'tysk-2-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sant eller usant om det tyske pantesystemet?',
        subTasks: [
          { label: 'a', task: 'Plastflasker har 25 cent pant.', solution: 'Sant', answer: 'Sant' },
          { label: 'b', task: 'Man kan levere flasker pa bensinstasjonen.', solution: 'Usant - i supermarkedet', answer: 'Usant' },
          { label: 'c', task: 'Mehrweg betyr engangsflasker.', solution: 'Usant - Mehrweg betyr flergangsflasker', answer: 'Usant' },
        ],
        solution: 'a) Sant, b) Usant - man leverer i supermarkedet, c) Usant - Mehrweg er flergangs',
        hints: ['Einweg = engangs, Mehrweg = flergangs'],
      },
    },
    {
      id: 'tysk-2-8-3-text-2',
      type: 'text',
      content: `## Mulltrennung - Kildesortering

Tyskland er kjent for sin grundige kildesortering. Hvert hjem har flere avfallsbeholdere:

**Avfallstyper:**
- **Gelbe Tonne/Gelber Sack** - emballasje, plastikk, metall
- **Blaue Tonne** - papir og kartong
- **Biotonne** - matavfall, kompost
- **Restmull** - restavfall (grat beholder)
- **Glascontainer** - glass (sortert etter farge!)

Det finnes strenge regler, og feil sortering kan gi gebyrer!`,
    },
    {
      id: 'tysk-2-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Riktig sortering',
      problem: `Hvor skal disse tingene kastes?

a) Eine leere Milchpackung
b) Ein altes Buch
c) Eine Bananenschale
d) Eine Glasflasche ohne Pfand`,
      solution: `a) Eine leere Milchpackung → **Gelbe Tonne** (emballasje)
b) Ein altes Buch → **Blaue Tonne** (papir)
c) Eine Bananenschale → **Biotonne** (matavfall)
d) Eine Glasflasche ohne Pfand → **Glascontainer** (sorteres etter farge: weiss, grun, braun)

**Tips:** Er du usikker, sjekk "Der Grune Punkt"-symbolet pa emballasjen!`,
    },
    {
      id: 'tysk-2-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor skal avfallet kastes? Velg riktig beholder:',
        subTasks: [
          { label: 'a', task: 'Eine alte Zeitung', solution: 'Blaue Tonne (papir)', answer: 'Blaue Tonne' },
          { label: 'b', task: 'Eine Plastikflasche mit Pfand', solution: 'Pfandautomat im Supermarkt', answer: 'Pfandautomat' },
          { label: 'c', task: 'Kartoffelschalen', solution: 'Biotonne', answer: 'Biotonne' },
          { label: 'd', task: 'Eine kaputte Gluhbirne', solution: 'Sondermull/Restmull (spesialavfall)', answer: 'Sondermüll' },
        ],
        solution: 'a) Blaue Tonne, b) Pfandautomat, c) Biotonne, d) Sondermull (spesialavfall)',
        hints: ['Aviser = papir', 'Matrester = bio', 'Elektronikk/lyspaeerer = spesialavfall'],
      },
    },
    {
      id: 'tysk-2-8-3-text-3',
      type: 'text',
      content: `## Energisparing og bevisst forbruk

Det finnes mange mater a leve mer baerekraftig pa:

**Energiesparen (energisparing):**
- Licht ausschalten (sla av lyset)
- Weniger heizen (varme mindre)
- Stand-by vermeiden (unnga stand-by)
- LED-Lampen benutzen (bruke LED-paerer)

**Bewusster Konsum (bevisst forbruk):**
- Regional und saisonal einkaufen (handle lokalt og sesongbasert)
- Weniger Fleisch essen (spise mindre kjott)
- Secondhand kaufen (kjope brukt)
- Auf Plastik verzichten (kutte plastikk)`,
    },
    {
      id: 'tysk-2-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Gode rad',
      problem: `Oversett disse baerekraft-tipsene til tysk:

a) Sla av lyset nar du gar ut av rommet.
b) Ta med egen pose til butikken.
c) Kjop frukt og gronnsaker fra regionen.`,
      solution: `a) **Schalte das Licht aus, wenn du das Zimmer verlasst.**
- ausschalten = a sla av
- verlassen = a forlate

b) **Nimm deine eigene Tasche zum Einkaufen mit.**
- mitnehmen = a ta med
- die Tasche = posen/vesken

c) **Kauf Obst und Gemuse aus der Region.**
- das Obst = frukt
- das Gemuse = gronnsaker`,
    },
    {
      id: 'tysk-2-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg resirkulerer plastikk og papir.', solution: 'Ich recycle Plastik und Papier.', answer: 'Ich recycle Plastik und Papier' },
          { label: 'b', task: 'Vi prover a spare energi.', solution: 'Wir versuchen, Energie zu sparen.', answer: 'Wir versuchen Energie zu sparen' },
          { label: 'c', task: 'Kjop mindre, men bedre.', solution: 'Kauf weniger, aber besser.', answer: 'Kauf weniger aber besser' },
        ],
        solution: 'a) Ich recycle Plastik und Papier, b) Wir versuchen, Energie zu sparen, c) Kauf weniger, aber besser',
        hints: ['versuchen + zu + infinitiv', 'aber = men'],
      },
    },
    {
      id: 'tysk-2-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv 5 ting DU kan gjore for a leve mer baerekraftig. Bruk tysk og start med "Ich kann..."',
        subTasks: [
          { label: 'a', task: 'Noe med transport', solution: 'F.eks. Ich kann mehr Fahrrad fahren' },
          { label: 'b', task: 'Noe med energi', solution: 'F.eks. Ich kann Strom sparen' },
          { label: 'c', task: 'Noe med forbruk', solution: 'F.eks. Ich kann weniger kaufen' },
        ],
        solution: 'Eksempler: "Ich kann mehr mit dem Fahrrad fahren. Ich kann das Licht ausschalten. Ich kann meinen Mull trennen. Ich kann weniger Fleisch essen. Ich kann Wasser sparen."',
        hints: ['kann + infinitiv pa slutten', 'Tenk pa hva du faktisk kan gjore'],
      },
    },
    {
      id: 'tysk-2-8-3-tip-1',
      type: 'tip',
      content: `**Praktisk tips:** Nar du er i Tyskland og kjoper drikke, se etter "Pfand"-merket pa flasken. Engangsflasker har rundt logo med pil, flergangsflasker har "Mehrweg"-tekst. Ta vare pa flaskene og lever dem i Pfandautomaten i supermarkedet for a fa pengene tilbake!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Argumentieren und Diskutieren
// ============================================================================

export const CHAPTER_TYSK_2_8_4: TextbookChapter = {
  id: 'tysk-2-8-4',
  courseId: 'tysk-2',
  chapterNumber: '8.4',
  title: 'Argumentieren und Diskutieren',
  subtitle: 'Argumentasjon og diskusjon',
  description: 'Laer a uttrykke meninger, argumentere og diskutere pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke egne meninger pa tysk',
    'bruke argumentasjonsstrukturer',
    'delta i diskusjoner om aktuelle temaer',
  ],
  content: [
    {
      id: 'tysk-2-8-4-intro',
      type: 'text',
      content: `## A uttrykke meninger pa tysk

For a delta i diskusjoner om miljo, politikk eller andre temaer, trenger du ordforrad og strukturer for a uttrykke meninger og argumentere.

**Grunnleggende struktur for argumentasjon:**
1. **These** (pastand) - hva du mener
2. **Argument** (begrunnelse) - hvorfor du mener det
3. **Beispiel** (eksempel) - konkret eksempel
4. **Schlussfolgerung** (konklusjon) - oppsummering`,
    },
    {
      id: 'tysk-2-8-4-def-1',
      type: 'definition',
      title: 'Uttrykk for meninger',
      content: `**A uttrykke mening:**

| Tysk | Norsk |
|------|-------|
| Ich meine, dass... | Jeg mener at... |
| Ich glaube, dass... | Jeg tror at... |
| Ich denke, dass... | Jeg synes at... |
| Meiner Meinung nach... | Etter min mening... |
| Ich bin der Meinung, dass... | Jeg er av den mening at... |
| Ich finde, dass... | Jeg synes at... |
| Ich bin uberzeugt, dass... | Jeg er overbevist om at... |

**Husk:** Etter "dass" kommer verbet til slutt!`,
    },
    {
      id: 'tysk-2-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Meningsuttrykk',
      problem: `Oversett til tysk og bruk ulike meningsuttrykk:

a) Jeg mener at klimaendringer er et alvorlig problem.
b) Etter min mening burde vi bruke mer fornybar energi.
c) Jeg er overbevist om at resirkulering er viktig.`,
      solution: `a) **Ich meine, dass der Klimawandel ein ernstes Problem ist.**
(Verbet "ist" kommer til slutt etter "dass")

b) **Meiner Meinung nach sollten wir mehr erneuerbare Energie nutzen.**
(Etter "Meiner Meinung nach" kommer verbet pa andre plass)

c) **Ich bin uberzeugt, dass Recycling wichtig ist.**
(Verbet "ist" til slutt i bisetningen)`,
    },
    {
      id: 'tysk-2-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fullforer setningene med riktig ordstilling:',
        subTasks: [
          { label: 'a', task: 'Ich glaube, dass Umweltschutz wichtig ___ (ist/sein).', solution: 'ist', answer: 'ist' },
          { label: 'b', task: 'Meiner Meinung nach ___ wir zu viel Plastik (benutzen/benutzt).', solution: 'benutzen', answer: 'benutzen' },
          { label: 'c', task: 'Ich finde, dass Deutschland viel fur die Umwelt ___ (tut/tun).', solution: 'tut', answer: 'tut' },
        ],
        solution: 'a) ist (verb til slutt etter dass), b) benutzen (verb pa 2. plass), c) tut (verb til slutt etter dass)',
        hints: ['Etter dass: verb til slutt', 'Etter Meiner Meinung nach: verb pa andre plass'],
      },
    },
    {
      id: 'tysk-2-8-4-text-2',
      type: 'text',
      content: `## A vaere enig eller uenig

I en diskusjon ma du kunne uttrykke enighet eller uenighet:

**Enig (Zustimmung):**
- Ich stimme zu. (Jeg er enig.)
- Das stimmt. (Det stemmer.)
- Da hast du recht. (Der har du rett.)
- Ich bin derselben Meinung. (Jeg er av samme mening.)
- Genau! / Richtig! (Akkurat! / Riktig!)

**Uenig (Widerspruch):**
- Ich bin anderer Meinung. (Jeg er av en annen mening.)
- Das sehe ich anders. (Det ser jeg annerledes.)
- Ich bin nicht einverstanden. (Jeg er ikke enig.)
- Das stimmt nicht. (Det stemmer ikke.)
- Aber... / Jedoch... (Men... / Imidlertid...)`,
    },
    {
      id: 'tysk-2-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Enig eller uenig',
      problem: `Person A sier: "Atomkraft ist gefahrlich und sollte verboten werden."

Hvordan ville du svare hvis du er:
a) Enig
b) Delvis enig
c) Uenig`,
      solution: `a) Enig:
**"Ich stimme zu. Atomkraft ist zu gefahrlich. Der Atommull bleibt fur tausende Jahre radioaktiv."**

b) Delvis enig:
**"Einerseits hast du recht, Atomkraft ist riskant. Andererseits produziert sie kein CO2."**
(Pa den ene siden... pa den andre siden...)

c) Uenig:
**"Das sehe ich anders. Atomkraft ist sicher und hilft gegen den Klimawandel."**`,
    },
    {
      id: 'tysk-2-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg er enig.', solution: 'Ich stimme zu.', answer: 'Ich stimme zu' },
          { label: 'b', task: 'Det ser jeg annerledes.', solution: 'Das sehe ich anders.', answer: 'Das sehe ich anders' },
          { label: 'c', task: 'Pa den ene siden... pa den andre siden...', solution: 'Einerseits... andererseits...', answer: 'Einerseits andererseits' },
          { label: 'd', task: 'Der har du rett.', solution: 'Da hast du recht.', answer: 'Da hast du recht' },
        ],
        solution: 'a) Ich stimme zu, b) Das sehe ich anders, c) Einerseits... andererseits..., d) Da hast du recht',
        hints: ['zustimmen = a vaere enig', 'anders = annerledes'],
      },
    },
    {
      id: 'tysk-2-8-4-text-3',
      type: 'text',
      content: `## Argumentasjonsstrukturer

For a argumentere overbevisende, bruk disse strukturene:

**Begrunnelser (Begrundungen):**
- weil... (fordi...)
- denn... (for...)
- deshalb / darum / deswegen (derfor)
- aus diesem Grund (av denne grunn)

**Eksempler (Beispiele):**
- zum Beispiel (for eksempel)
- wie zum Beispiel (som for eksempel)
- Ein Beispiel dafur ist... (Et eksempel pa dette er...)

**Kontraster:**
- aber / jedoch (men)
- obwohl (selv om)
- trotzdem (likevel)
- im Gegensatz zu (i motsetning til)`,
    },
    {
      id: 'tysk-2-8-4-def-2',
      type: 'definition',
      title: 'Ordstilling etter konjunksjoner',
      content: `**Viktig ordstilling:**

| Konjunksjon | Ordstilling | Eksempel |
|-------------|-------------|----------|
| weil | Verb til slutt | ...weil es wichtig **ist** |
| denn | Normal (V2) | ...denn es **ist** wichtig |
| obwohl | Verb til slutt | ...obwohl es teuer **ist** |
| deshalb | Normal (V2) | Deshalb **mussen** wir handeln |

**Huskeregel:** weil, obwohl, dass = verb til slutt!`,
    },
    {
      id: 'tysk-2-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Argumentasjon',
      problem: `Bygg et argument FOR kildesortering med denne strukturen:

1. Pastand (Ich meine, dass...)
2. Begrunnelse (weil...)
3. Eksempel (zum Beispiel...)
4. Konklusjon (deshalb...)`,
      solution: `1. **Ich meine, dass Mulltrennung sehr wichtig ist.**
(Pastand: Kildesortering er veldig viktig)

2. **weil wir dadurch Ressourcen sparen und die Umwelt schutzen.**
(Begrunnelse: fordi vi sparer ressurser og beskytter miljoet)

3. **Zum Beispiel kann recyceltes Papier wieder zu neuem Papier werden.**
(Eksempel: Resirkulert papir kan bli til nytt papir)

4. **Deshalb sollte jeder seinen Mull richtig trennen.**
(Konklusjon: Derfor bor alle sortere soeppelet riktig)`,
    },
    {
      id: 'tysk-2-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett sammen setninger med riktig ordstilling:',
        subTasks: [
          { label: 'a', task: 'Ich recycle, weil / es / wichtig / ist / fur die Umwelt', solution: 'Ich recycle, weil es wichtig fur die Umwelt ist.', answer: 'weil es wichtig für die Umwelt ist' },
          { label: 'b', task: 'Wir mussen handeln, denn / die Zeit / lauft / uns / davon', solution: 'Wir mussen handeln, denn die Zeit lauft uns davon.', answer: 'denn die Zeit läuft uns davon' },
          { label: 'c', task: 'Obwohl / es / teuer / ist, / kaufe ich Bio-Produkte', solution: 'Obwohl es teuer ist, kaufe ich Bio-Produkte.', answer: 'Obwohl es teuer ist' },
        ],
        solution: 'a) ...weil es wichtig fur die Umwelt ist, b) ...denn die Zeit lauft uns davon, c) Obwohl es teuer ist...',
        hints: ['weil/obwohl: verb til slutt', 'denn: normal ordstilling'],
      },
    },
    {
      id: 'tysk-2-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg ett av temaene og skriv et kort argument (6-8 setninger) med pastand, begrunnelse, eksempel og konklusjon:',
        subTasks: [
          { label: 'a', task: 'Tema: Burde vi spise mindre kjott?', solution: 'Fullt argument pa tysk' },
          { label: 'b', task: 'Tema: Er elektriske biler losningen?', solution: 'Fullt argument pa tysk' },
          { label: 'c', task: 'Tema: Bor plastposer forbys?', solution: 'Fullt argument pa tysk' },
        ],
        solution: 'Eksempel for tema a): "Ich meine, dass wir weniger Fleisch essen sollten. Die Fleischproduktion verursacht viel CO2. Zum Beispiel braucht man fur ein Kilo Rindfleisch uber 15.000 Liter Wasser. Ausserdem leiden viele Tiere in der Massentierhaltung. Deshalb versuche ich, nur einmal pro Woche Fleisch zu essen."',
        hints: ['Bruk strukturen: Meinung - weil - zum Beispiel - deshalb', 'Husk ordstilling!'],
      },
    },
    {
      id: 'tysk-2-8-4-tip-1',
      type: 'tip',
      content: `**Diskusjonstips:** I en muntlig diskusjon, bruk "hedging" for a virke hoeflig: "Ich konnte mir vorstellen, dass..." (Jeg kunne tenke meg at...) eller "Vielleicht sollten wir bedenken, dass..." (Kanskje vi burde tenke pa at...). Dette gjor argumentet ditt mer nyansert og viser tysk "Sachlichkeit" (saklighet).`,
    },
    {
      id: 'tysk-2-8-4-note-1',
      type: 'note',
      title: 'Diskusjonskultur i Tyskland',
      content: `Tyskere verdsetter ofte "Sachlichkeit" (saklighet) i diskusjoner. Det betyr a fokusere pa fakta og logiske argumenter fremfor folelser. A innromme at motparten har et godt poeng ("Da hast du recht, aber...") ses som styrke, ikke svakhet. Denne diskusjonskulturen finner du i alt fra politiske debatter til klasseromsdiskusjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const TYSK_2_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_TYSK_2_7_1,
  CHAPTER_TYSK_2_7_2,
  CHAPTER_TYSK_2_7_3,
  CHAPTER_TYSK_2_7_4,
  CHAPTER_TYSK_2_8_1,
  CHAPTER_TYSK_2_8_2,
  CHAPTER_TYSK_2_8_3,
  CHAPTER_TYSK_2_8_4,
];

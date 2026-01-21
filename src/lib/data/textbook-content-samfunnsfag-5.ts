/**
 * Tekstbok innhold for Samfunnsfag 5. klasse
 *
 * Følger LK20 læreplan for samfunnsfag mellomtrinn.
 * Innhold tilpasset elever på 5. trinn (10-11 år).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Norges geografi
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_1_1: TextbookChapter = {
  id: 'samfunnsfag-5-1-1',
  courseId: 'samfunnsfag-5',
  chapterNumber: '1.1',
  title: 'Norges geografi',
  description: 'Lær om Norges landskap, landsdeler og natur.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive geografiske hovedtrekk i Norge og forklare hvordan disse påvirker hvor folk bor og arbeider'
  ],
  content: [
    {
      id: 'samf-5-1-1-intro',
      type: 'text',
      content: `
# Norges geografi

Norge er et langstrakt land som ligger i Nord-Europa. Landet vårt strekker seg
over 1750 kilometer fra sør til nord - det er omtrent like langt som å reise
fra Oslo til Roma i Italia!

Norge grenser til Sverige, Finland og Russland. I vest har vi havet - Nordsjøen,
Norskehavet og Barentshavet.
      `
    },
    {
      id: 'samf-5-1-1-def-landskap',
      type: 'definition',
      title: 'Norges landskap',
      content: `Norge har et variert landskap:

**Fjell**: Store deler av Norge er fjell. Jotunheimen har de høyeste fjellene, med Galdhøpiggen på topp (2469 meter).

**Fjorder**: Lange, smale havbukter som går inn i landet. Sognefjorden er Norges lengste fjord (204 km).

**Kyst**: Norge har en av verdens lengste kystlinjer med over 25 000 øyer.

**Skog og daler**: Østlandet og Trøndelag har store skoger og fruktbare daler.

**Vidder**: Store, flate fjellområder som Hardangervidda.`
    },
    {
      id: 'samf-5-1-1-landsdeler',
      type: 'text',
      title: 'Norges landsdeler',
      content: `
## De fem landsdelene

**Østlandet**
- Fylker: Viken, Oslo, Innlandet, Vestfold og Telemark
- Her bor flest mennesker i Norge
- Hovedstaden Oslo ligger her
- Jordbruk og skog er viktig

**Sørlandet**
- Fylker: Agder
- Kjent for sommervær og skjærgård
- Mange turister om sommeren

**Vestlandet**
- Fylker: Rogaland, Vestland, Møre og Romsdal
- Kjent for fjorder og fjell
- Mye olje- og gassindustri
- Bergen er den største byen

**Trøndelag**
- Fylker: Trøndelag
- Trondheim er den største byen
- Viktig for jordbruk og fiske

**Nord-Norge**
- Fylker: Nordland, Troms og Finnmark
- Norges største landsdel i areal
- Midnattssol om sommeren, mørketid om vinteren
- Samisk kultur og reindrift
      `
    },
    {
      id: 'samf-5-1-1-fakta',
      type: 'note',
      title: 'Visste du at...',
      content: `- Norge har over 50 000 øyer!
- Norges lengste elv er Glomma (604 km)
- Norges største innsjø er Mjøsa (362 km²)
- Bare 3% av Norges areal er dyrket mark
- Omtrent 70% av Norge er fjell, vidde og isbreer`
    },
    {
      id: 'samf-5-1-1-example',
      type: 'example',
      title: 'Hvorfor bor folk der de bor?',
      problem: 'Hvorfor bor det flest mennesker på Østlandet og langs kysten?',
      solution: `Folk har bosatt seg der det er lettest å leve:

**Østlandet**: Flatere landskap gjør det enklere å dyrke mat og bygge veier. Klimaet er mildt.

**Langs kysten**: Havet gir mat (fiske) og mulighet for transport med båt. Golfstrømmen gjør at vintrene er milde.

**I dalene**: Elvene gir vann og strøm, og dalbunnen er flat og god for jordbruk.

Fjellene er vanskelige å bo i fordi det er kaldt, bratt og langt til alt.`
    },
    {
      id: 'samf-5-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva heter Norges høyeste fjell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg Norges høyeste fjell.',
            solution: 'Galdhøpiggen',
            multipleChoiceOptions: ['Galdhøpiggen', 'Glittertind', 'Snøhetta', 'Gaustatoppen'],
          },
        ],
        solution: 'Galdhøpiggen er riktig. Galdhøpiggen er 2469 meter høyt og ligger i Jotunheimen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken landsdel ligger lengst nord i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg landsdelen som ligger lengst nord.',
            solution: 'Nord-Norge',
            multipleChoiceOptions: ['Nord-Norge', 'Trøndelag', 'Vestlandet', 'Østlandet'],
          },
        ],
        solution: 'Nord-Norge er riktig. Nord-Norge omfatter fylkene Nordland, Troms og Finnmark.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er en fjord?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste forklaringen på hva en fjord er.',
            solution: 'En lang, smal havbukt som går inn i landet',
            multipleChoiceOptions: [
              'En lang, smal havbukt som går inn i landet',
              'Et høyt fjell',
              'En stor innsjø',
              'En vid slette',
            ],
          },
        ],
        solution: 'En fjord er en lang, smal havbukt som går inn i landet. Fjordene ble dannet av isbreer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk Norges geografi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken landsdel bor du i? Beskriv landskapet der du bor.',
            solution: 'Svarene vil variere. Eksempel: Jeg bor på Østlandet. Her er det skog, innsjøer og noen lave fjell. Det er ganske flatt sammenlignet med Vestlandet.',
            multipleChoiceOptions: [
              'Jeg bor på Østlandet med skog, innsjøer og lave fjell - ganske flatt landskap',
              'Jeg bor på Vestlandet med fjorder, høye fjell og mye regn',
              'Jeg bor i Nord-Norge med midnattssol, fjell og kyst',
              'Jeg bor i Trøndelag med jordbruk, kyst og Trondheim by',
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor det bor flere mennesker på Østlandet enn i Nord-Norge.',
            solution: 'Østlandet har mildere klima, flatere terreng som er lettere å bygge på, og mer dyrkbar jord. Det er også kortere avstander og bedre veier. Nord-Norge har kaldere vær, mer fjell og større avstander.',
            multipleChoiceOptions: [
              'Østlandet har mildere klima, flatere terreng, mer dyrkbar jord og kortere avstander',
              'Nord-Norge har varmere vær og bedre jord',
              'Det er like mange mennesker i Nord-Norge som på Østlandet',
              'Folk vil ikke bo på Østlandet',
            ],
          },
        ],
        solution: 'Geografi påvirker hvor folk velger å bosette seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Samene - Norges urfolk
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_1_2: TextbookChapter = {
  id: 'samfunnsfag-5-1-2',
  courseId: 'samfunnsfag-5',
  chapterNumber: '1.2',
  title: 'Samene - Norges urfolk',
  description: 'Lær om samisk kultur, historie og rettigheter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive samiske forhold, kultur og rettigheter'
  ],
  content: [
    {
      id: 'samf-5-1-2-intro',
      type: 'text',
      content: `
# Samene - Norges urfolk

Samene er Norges urfolk. Det betyr at de har bodd her lenge før grensene mellom
Norge, Sverige, Finland og Russland ble tegnet. Samene har sin egen kultur,
sine egne språk og sine egne tradisjoner.

Området der samene tradisjonelt har bodd, kalles **Sápmi** (Sameland). Det strekker
seg over deler av Norge, Sverige, Finland og Russland.
      `
    },
    {
      id: 'samf-5-1-2-def-urfolk',
      type: 'definition',
      title: 'Hva er urfolk?',
      content: `**Urfolk** er folk som bodde i et område før dagens statsgrenser ble laget, og som har bevart sin egen kultur og identitet.

Samene er urfolk fordi:
- De har bodd i Sápmi i mange tusen år
- De har egne språk (samiske språk)
- De har egen kultur og tradisjoner
- De har et spesielt forhold til naturen og landet`
    },
    {
      id: 'samf-5-1-2-kultur',
      type: 'text',
      title: 'Samisk kultur',
      content: `
## Samisk kultur

**Joik**
Joik er samisk sang. En joik handler ikke om noen - den er noen. Man joiker en person, et dyr eller et sted. Joik er en viktig del av samisk kultur.

**Duodji**
Duodji er samisk håndverk. Samene lager vakre ting av reinsdyrskinn, bein, tre og metall. Kniver, vesker og kofter er typiske duodji-produkter.

**Kofte (gákti)**
Koften er den samiske nasjonaldrakten. Den ser forskjellig ut i ulike områder. Fargene og mønstrene forteller hvor man kommer fra.

**Reindrift**
Reindrift har vært viktig for samene i hundrevis av år. Reinen gir mat, klær og inntekt. I dag driver omtrent 3000 samer med reindrift i Norge.
      `
    },
    {
      id: 'samf-5-1-2-sprak',
      type: 'note',
      title: 'Samiske språk',
      content: `Det finnes flere samiske språk. De tre største i Norge er:

- **Nordsamisk** - det største samiske språket (ca. 20 000 brukere)
- **Lulesamisk** - snakkes rundt Tysfjord
- **Sørsamisk** - snakkes i Trøndelag og Hedmark

Samiske ord du kanskje kjenner:
- "Buorre beaivi" = God dag
- "Giitu" = Takk
- "Sápmi" = Sameland`
    },
    {
      id: 'samf-5-1-2-historie',
      type: 'text',
      title: 'Samisk historie',
      content: `
## Vanskelige tider

I over 100 år prøvde den norske staten å få samene til å slutte å være samer.
Dette kalles **fornorsking**. Samiske barn fikk ikke lov til å snakke samisk på skolen.
Mange mistet språket og kulturen sin.

## Bedre tider

I dag har samene fått tilbake mange rettigheter:
- **Sametinget** ble opprettet i 1989 - samenes eget folkevalgte organ
- Samisk er offisielt språk i Norge
- Samiske barn kan lære samisk på skolen
- 6. februar er **samefolkets dag** (Norges nasjonaldag for samene)

Norge har bedt samene om unnskyldning for fornorskingen.
      `
    },
    {
      id: 'samf-5-1-2-sametinget',
      type: 'definition',
      title: 'Sametinget',
      content: `**Sametinget** er samenes folkevalgte organ i Norge.

- Ble opprettet i 1989
- Ligger i Karasjok i Finnmark
- Har 39 representanter som velges hvert fjerde år
- Jobber med saker som er viktige for samene
- Alle som er registrert i samemanntallet kan stemme`
    },
    {
      id: 'samf-5-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles området der samene tradisjonelt har bodd?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig navn på samenes tradisjonelle område.',
            solution: 'Sápmi',
            multipleChoiceOptions: ['Sápmi', 'Skandinavia', 'Nordkalotten', 'Arktis'],
          },
        ],
        solution: 'Sápmi er riktig. Sápmi (Sameland) strekker seg over Norge, Sverige, Finland og Russland.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er joik?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av joik.',
            solution: 'Samisk sang som handler om en person, et dyr eller et sted',
            multipleChoiceOptions: [
              'Samisk sang som handler om en person, et dyr eller et sted',
              'Samisk mat',
              'Samisk dans',
              'Samisk håndverk',
            ],
          },
        ],
        solution: 'Joik er samisk sang. En joik er en måte å synge om noe eller noen på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Når feires samefolkets dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg datoen for samefolkets dag.',
            solution: '6. februar',
            multipleChoiceOptions: ['6. februar', '17. mai', '1. januar', '24. desember'],
          },
        ],
        solution: '6. februar er riktig. På denne dagen i 1917 ble det første samiske landsmøtet holdt i Trondheim.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over samisk kultur og rettigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er Sametinget, og hvorfor er det viktig?',
            solution: 'Sametinget er samenes folkevalgte organ. Det er viktig fordi det gir samene mulighet til å bestemme i saker som angår dem selv, og det viser at samene er anerkjent som urfolk.',
            multipleChoiceOptions: [
              'Sametinget er samenes folkevalgte organ som gir samene medbestemmelse i saker som angår dem',
              'Sametinget er et museum',
              'Sametinget er en samisk restaurant',
              'Sametinget er en skole',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor var fornorskingen urettferdig for samene?',
            solution: 'Fornorskingen var urettferdig fordi samene ikke fikk lov til å bruke sitt eget språk og praktisere sin egen kultur. Barn fikk ikke snakke samisk på skolen, og mange mistet språket og kulturen sin.',
            multipleChoiceOptions: [
              'Fornorskingen hindret samene i å bruke språket og kulturen sin, og mange mistet den samiske identiteten',
              'Fornorskingen var bra for samene',
              'Fornorskingen handlet om mat',
              'Fornorskingen skjedde aldri',
            ],
          },
        ],
        solution: 'Det er viktig å lære om samisk historie og kultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Vikingtiden
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_2_1: TextbookChapter = {
  id: 'samfunnsfag-5-2-1',
  courseId: 'samfunnsfag-5',
  chapterNumber: '2.1',
  title: 'Vikingtiden',
  description: 'Lær om vikingene, deres reiser og hvordan de levde.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere sentrale hendelser fra norsk historie'
  ],
  content: [
    {
      id: 'samf-5-2-1-intro',
      type: 'text',
      content: `
# Vikingtiden

Vikingtiden varte fra omtrent år 800 til 1050. I denne perioden reiste folk fra
Norge, Sverige og Danmark over store avstander med skipene sine. De var kjent som
**vikinger**.

Vikingene var bønder, håndverkere, handelsmenn og noen ganger krigere. De var
flinke til å bygge skip og navigere på havet.
      `
    },
    {
      id: 'samf-5-2-1-def-viking',
      type: 'definition',
      title: 'Hvem var vikingene?',
      content: `**Vikingene** var folk fra Skandinavia (Norge, Sverige og Danmark) i perioden ca. 800-1050.

De fleste vikinger var:
- **Bønder** som dyrket jord og holdt dyr
- **Håndverkere** som laget verktøy, smykker og skip
- **Handelsmenn** som byttet varer med andre land
- Noen var **krigere** som tok med seg verdier fra andre steder

Ordet "viking" kan bety "den som drar på tokt" eller "den som kommer fra vika".`
    },
    {
      id: 'samf-5-2-1-skip',
      type: 'text',
      title: 'Vikingskipene',
      content: `
## Vikingenes skip

Vikingene var mestere i å bygge skip. De hadde to hovedtyper:

**Langskip**
- Lange og smale
- Brukt til krigstokter og reiser
- Kunne ha 20-60 roere
- Hadde et firkantet seil

**Knarr**
- Bredere og dypere
- Brukt til handel og transport
- Kunne frakte mye last

Skipene var bygget slik at de kunne seile på dypt hav OG gå opp elver og legge
til på grunne strender. Dette gjorde vikingene veldig mobile!
      `
    },
    {
      id: 'samf-5-2-1-reiser',
      type: 'text',
      title: 'Vikingenes reiser',
      content: `
## Hvor reiste vikingene?

Vikingene reiste over hele den kjente verden:

**Vest**
- Island (bosatte seg rundt 870)
- Grønland (bosatte seg rundt 985)
- Nord-Amerika (Leiv Eiriksson, ca. år 1000)
- England, Irland, Frankrike

**Øst**
- Svenske vikinger reiste til Russland
- Noen kom helt til Konstantinopel (Istanbul)

**Sør**
- Middelhavet
- Spania og Nord-Afrika
      `
    },
    {
      id: 'samf-5-2-1-hverdag',
      type: 'text',
      title: 'Hverdagsliv i vikingtiden',
      content: `
## Hvordan levde vikingene?

**Gården**
De fleste vikinger bodde på gårder. De dyrket korn, grønnsaker og hadde husdyr som kyr, griser, sauer og høner.

**Mat**
Vikingene spiste brød, grøt, fisk, kjøtt, melk og ost. De drakk vann, melk og mjød (honningvin).

**Klær**
Menn brukte tunika og bukser. Kvinner brukte lange kjoler. Klærne var laget av ull og lin.

**Religion**
Vikingene trodde på mange guder, som Odin, Tor og Frøya. Rundt år 1000 ble Norge kristnet.
      `
    },
    {
      id: 'samf-5-2-1-guder',
      type: 'note',
      title: 'Vikingenes guder',
      content: `Vikingene hadde mange guder:

**Odin** - Allfather, gud for visdom og krig
**Tor** - Gud for torden og styrke, bar hammeren Mjølner
**Frøya** - Gudinne for kjærlighet og fruktbarhet
**Loke** - Luregudin, ofte lagde trøbbel

Vikingene trodde at tapre krigere kom til **Valhall** når de døde.`
    },
    {
      id: 'samf-5-2-1-example',
      type: 'example',
      title: 'Leiv Eiriksson oppdager Amerika',
      problem: 'Hvem var Leiv Eiriksson, og hva gjorde han?',
      solution: `**Leiv Eiriksson** var en norsk viking som levde rundt år 1000.

Han seilte fra Grønland og fant et nytt land i vest - **Vinland** (sannsynligvis Newfoundland i Canada). Dette skjedde omtrent 500 år før Columbus kom til Amerika!

Leiv kalte landet Vinland fordi det vokste ville druer der (eller kanskje bær som så ut som druer). Vikingene prøvde å bosette seg der, men ga opp etter noen år.`
    },
    {
      id: 'samf-5-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Når var vikingtiden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tidsperioden for vikingtiden.',
            solution: 'Ca. 800-1050',
            multipleChoiceOptions: ['Ca. 800-1050', 'Ca. 1200-1400', 'Ca. 1500-1700', 'Ca. 400-600'],
          },
        ],
        solution: 'Ca. 800-1050 er riktig. Vikingtiden varte i omtrent 250 år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvem var Tor i vikingenes religion?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige beskrivelsen av guden Tor.',
            solution: 'Gud for torden og styrke',
            multipleChoiceOptions: [
              'Gud for torden og styrke',
              'Gud for visdom og krig',
              'Gudinne for kjærlighet',
              'Luregudin',
            ],
          },
        ],
        solution: 'Tor var guden for torden og styrke. Han bar hammeren Mjølner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvem oppdaget Amerika lenge før Columbus?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg vikingen som oppdaget Amerika.',
            solution: 'Leiv Eiriksson',
            multipleChoiceOptions: ['Leiv Eiriksson', 'Erik Raude', 'Harald Hårfagre', 'Olav den hellige'],
          },
        ],
        solution: 'Leiv Eiriksson oppdaget Amerika (Vinland) rundt år 1000, ca. 500 år før Columbus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk vikingenes liv.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hvorfor vikingskipene var så viktige for vikingene.',
            solution: 'Skipene var viktige fordi de kunne reise over havet til nye land, handle med andre folk, og flytte seg raskt. Skipene var bygget slik at de kunne seile på dypt hav og også gå opp grunne elver.',
            multipleChoiceOptions: [
              'Skipene lot vikingene reise langt over havet, handle og flytte seg raskt - de kunne seile på dypt hav og grunne elver',
              'Skipene var ikke viktige',
              'Vikingene reiste bare til lands',
              'Skipene ble bare brukt til fiske',
            ],
          },
          {
            label: 'b',
            task: 'Hva var de fleste vikinger i hverdagen - krigere eller noe annet?',
            solution: 'De fleste vikinger var bønder, ikke krigere. De dyrket jord, holdt dyr og laget ting de trengte. Bare noen dro på vikingtokt.',
            multipleChoiceOptions: [
              'De fleste vikinger var bønder som dyrket jord og holdt dyr, ikke krigere',
              'Alle vikinger var krigere',
              'Vikingene var bare fiskere',
              'Vikingene jobbet ikke',
            ],
          },
        ],
        solution: 'Vikingene var mye mer enn bare krigere!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Middelalderen i Norge
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_2_2: TextbookChapter = {
  id: 'samfunnsfag-5-2-2',
  courseId: 'samfunnsfag-5',
  chapterNumber: '2.2',
  title: 'Middelalderen i Norge',
  description: 'Lær om Norge i middelalderen, kirker og svartedauden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere sentrale hendelser fra norsk historie'
  ],
  content: [
    {
      id: 'samf-5-2-2-intro',
      type: 'text',
      content: `
# Middelalderen i Norge

Middelalderen i Norge varte fra omtrent år 1050 til 1500. I denne perioden ble
Norge et kristent land, og kirken fikk stor makt. Det ble bygget kirker og
klostre over hele landet.

Men middelalderen hadde også store tragedier - den verste var **svartedauden**.
      `
    },
    {
      id: 'samf-5-2-2-def-middelalder',
      type: 'definition',
      title: 'Middelalderen',
      content: `**Middelalderen** er tiden mellom vikingtiden og nyere tid, ca. 1050-1500.

Kjennetegn ved middelalderen i Norge:
- Norge ble et kristent land
- Kirken hadde stor makt
- Mange steinkirker ble bygget
- Kongen styrte landet
- De fleste var bønder
- Svartedauden kom i 1349`
    },
    {
      id: 'samf-5-2-2-kristning',
      type: 'text',
      title: 'Norge blir kristent',
      content: `
## Kristningen av Norge

Vikingene trodde på Odin, Tor og de andre norrøne gudene. Men rundt år 1000
begynte Norge å bli kristent.

**Olav Tryggvason** og **Olav den hellige (Olav Haraldsson)** var konger som
jobbet for å kristne Norge. De bygget kirker og forlangte at folk skulle døpes.

Olav den hellige døde i slaget på Stiklestad i 1030. Etter hans død ble han
regnet som helgen, og mange valfartet til graven hans i Nidaros (Trondheim).
      `
    },
    {
      id: 'samf-5-2-2-kirker',
      type: 'text',
      title: 'Kirker i middelalderen',
      content: `
## Steinkirker og stavkirker

I middelalderen ble det bygget mange kirker i Norge:

**Stavkirker**
Stavkirkene er bygget av tre med "staver" (stolper) som bærer taket. De har
utskjæringer av drager og slyngornamenter. Norge har de fleste bevarte
stavkirkene i verden (ca. 28 stykker).

**Steinkirker**
Rike byer og klostre bygde kirker av stein. Nidarosdomen i Trondheim er den
største og flotteste - den tok flere hundre år å bygge!

**Klostre**
Munker og nonner levde i klostre der de bad, arbeidet og hjalp fattige.
      `
    },
    {
      id: 'samf-5-2-2-note',
      type: 'note',
      title: 'Nidarosdomen',
      content: `**Nidarosdomen** i Trondheim er Nordens største middelalderkirke.

- Bygget over graven til Olav den hellige
- Påbegynt rundt år 1070
- Tok flere hundre år å bygge ferdig
- Har vakre glassmalerier og steinfigurer
- Norges viktigste kirke - kongene blir velsignet her`
    },
    {
      id: 'samf-5-2-2-svartedauden',
      type: 'text',
      title: 'Svartedauden',
      content: `
## Svartedauden - den store pesten

I 1349 kom **svartedauden** til Norge med et skip til Bergen. Det var en
forferdelig pest som spredte seg raskt.

**Hva var svartedauden?**
- En smittsom sykdom (byllepest)
- Spredde seg med lopper på rotter
- Ga svarte flekker på huden
- De fleste som ble syke, døde

**Hva skjedde?**
- Omtrent halvparten av alle i Norge døde
- Hele bygder ble tomme
- Mange gårder ble lagt øde
- Det tok over 200 år før befolkningen var like stor igjen

Dette var Norges største katastrofe noensinne.
      `
    },
    {
      id: 'samf-5-2-2-etter',
      type: 'text',
      title: 'Etter svartedauden',
      content: `
## Norge etter svartedauden

Svartedauden forandret Norge:

- **Færre mennesker**: Det var ikke nok folk til å dyrke all jorda
- **Fattigere land**: Mindre skatt til kongen og kirken
- **Union**: Norge ble slått sammen med Danmark (og Sverige) fordi landet var svakt
- **Kalmarunionen** (1397): Norge, Sverige og Danmark fikk felles konge

Norge var i union med Danmark i over 400 år, helt til 1814.
      `
    },
    {
      id: 'samf-5-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Når var middelalderen i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg tidsperioden for middelalderen i Norge.',
            solution: 'Ca. 1050-1500',
            multipleChoiceOptions: ['Ca. 1050-1500', 'Ca. 800-1050', 'Ca. 1500-1800', 'Ca. 1800-2000'],
          },
        ],
        solution: 'Ca. 1050-1500 er riktig. Middelalderen kom etter vikingtiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva var svartedauden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige beskrivelsen av svartedauden.',
            solution: 'En pest som drepte omtrent halvparten av Norges befolkning',
            multipleChoiceOptions: [
              'En pest som drepte omtrent halvparten av Norges befolkning',
              'En krig mellom Norge og Sverige',
              'Et skip som sank',
              'En stor brann',
            ],
          },
        ],
        solution: 'Svartedauden var en pest som kom til Norge i 1349. Omtrent halvparten av befolkningen døde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er spesielt med stavkirkene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som er riktig om stavkirker.',
            solution: 'De er bygget av tre og Norge har flest bevarte stavkirker i verden',
            multipleChoiceOptions: [
              'De er bygget av tre og Norge har flest bevarte stavkirker i verden',
              'De er bygget av stein',
              'De finnes bare i Sverige',
              'De ble bygget i vikingtiden',
            ],
          },
        ],
        solution: 'Stavkirkene er bygget av tre med staver (stolper). Norge har ca. 28 bevarte stavkirker - flest i verden!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over middelalderen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan forandret svartedauden Norge?',
            solution: 'Svartedauden førte til at halvparten av befolkningen døde. Mange gårder ble lagt øde, og landet ble fattigere. Norge ble så svakt at det måtte gå i union med Danmark.',
            multipleChoiceOptions: [
              'Halvparten av befolkningen døde, gårder ble øde, landet ble fattigere og måtte gå i union med Danmark',
              'Ingenting forandret seg',
              'Norge ble rikere',
              'Befolkningen økte',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor ble Olav den hellige viktig for den kristne kirken i Norge?',
            solution: 'Olav den hellige jobbet for å kristne Norge. Etter at han døde i slaget på Stiklestad, ble han regnet som helgen. Graven hans i Nidaros ble et pilegrimsmål, og Nidarosdomen ble bygget der.',
            multipleChoiceOptions: [
              'Han kristnet Norge og ble regnet som helgen - graven hans ble pilegrimsmål og Nidarosdomen ble bygget der',
              'Han var ikke viktig',
              'Han var en viking som trodde på Odin',
              'Han bygde alle stavkirkene',
            ],
          },
        ],
        solution: 'Middelalderen var en tid med store forandringer for Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Hva er demokrati?
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_3_1: TextbookChapter = {
  id: 'samfunnsfag-5-3-1',
  courseId: 'samfunnsfag-5',
  chapterNumber: '3.1',
  title: 'Hva er demokrati?',
  description: 'Lær om demokrati, valg og hvordan Norge styres.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive hovedtrekk ved det politiske systemet og velferdssamfunnet i Norge'
  ],
  content: [
    {
      id: 'samf-5-3-1-intro',
      type: 'text',
      content: `
# Hva er demokrati?

Ordet **demokrati** kommer fra gresk og betyr "folkestyre". I et demokrati er
det folket som bestemmer hvordan landet skal styres - ikke en konge eller
diktator alene.

Norge er et demokrati. Det betyr at vi alle er med på å bestemme gjennom å
stemme ved valg.
      `
    },
    {
      id: 'samf-5-3-1-def-demokrati',
      type: 'definition',
      title: 'Demokrati',
      content: `**Demokrati** betyr folkestyre. I et demokrati har alle voksne rett til å stemme ved valg.

Kjennetegn ved et demokrati:
- **Frie valg**: Alle voksne kan stemme
- **Flere partier**: Du kan velge mellom ulike partier
- **Ytringsfrihet**: Du kan si og mene hva du vil
- **Likhet for loven**: Alle følger de samme lovene
- **Menneskerettigheter**: Alle har grunnleggende rettigheter`
    },
    {
      id: 'samf-5-3-1-valg',
      type: 'text',
      title: 'Hvordan velger vi?',
      content: `
## Valg i Norge

I Norge har vi valg hvert annet år:

**Stortingsvalg** (hvert 4. år)
- Velger 169 representanter til Stortinget
- Stortinget lager lovene
- Bestemmer hvem som skal være regjering

**Kommunevalg** (hvert 4. år, 2 år etter stortingsvalg)
- Velger lokale politikere
- De bestemmer i din kommune

**Hvem kan stemme?**
- Norske statsborgere som er 18 år eller eldre
- Ved kommunevalg kan også utenlandske statsborgere som har bodd i Norge i 3 år stemme
      `
    },
    {
      id: 'samf-5-3-1-stortinget',
      type: 'text',
      title: 'Stortinget',
      content: `
## Stortinget - Norges nasjonalforsamling

**Stortinget** er Norges øverste folkevalgte organ. Her sitter 169 representanter
som er valgt av folket.

**Hva gjør Stortinget?**
- Vedtar lover (regler som gjelder alle)
- Vedtar statsbudsjettet (hvordan pengene skal brukes)
- Kontrollerer regjeringen

Stortinget ligger i Oslo og ble bygget i 1866. Bygningen kalles ofte "Løvebakken"
etter løvene foran inngangen.
      `
    },
    {
      id: 'samf-5-3-1-regjering',
      type: 'definition',
      title: 'Regjeringen',
      content: `**Regjeringen** styrer landet til daglig.

- Ledes av **statsministeren**
- Har mange **statsråder** (ministrer) som har ansvar for ulike områder
- Eksempler: helseminister, undervisningsminister, forsvarsminister

Regjeringen foreslår lover for Stortinget og sørger for at lovene blir fulgt.`
    },
    {
      id: 'samf-5-3-1-note',
      type: 'note',
      title: 'Kongen',
      content: `Norge har en konge, men kongen bestemmer ikke hvordan landet styres. Norge er et **konstitusjonelt monarki** - det betyr at kongen har seremonielle oppgaver, mens den egentlige makten ligger hos Stortinget og regjeringen.

Kongen:
- Åpner Stortinget hver høst
- Representerer Norge i utlandet
- Er et symbol for nasjonen`
    },
    {
      id: 'samf-5-3-1-example',
      type: 'example',
      title: 'Demokrati vs. diktatur',
      problem: 'Hva er forskjellen på et demokrati og et diktatur?',
      solution: `| Demokrati | Diktatur |
|-----------|----------|
| Folket bestemmer gjennom valg | En person eller gruppe bestemmer alt |
| Frie valg med flere partier | Ingen ekte valg |
| Ytringsfrihet | Ikke lov å kritisere lederne |
| Fri presse | Sensur av medier |
| Alle er like for loven | Lederne står over loven |

I et diktatur har folket ingen makt. En diktator bestemmer alt, og folk som er uenige kan bli straffet.`
    },
    {
      id: 'samf-5-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr demokrati?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige betydningen av ordet demokrati.',
            solution: 'Folkestyre',
            multipleChoiceOptions: ['Folkestyre', 'Kongestyre', 'Prestestyre', 'Eneherredømme'],
          },
        ],
        solution: 'Demokrati betyr folkestyre. Ordet kommer fra gresk: demos (folk) + kratos (styre).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor gammel må du være for å stemme ved stortingsvalg?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig alder for stemmerett.',
            solution: '18 år',
            multipleChoiceOptions: ['18 år', '16 år', '20 år', '21 år'],
          },
        ],
        solution: 'Du må være 18 år for å stemme ved stortingsvalg i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør Stortinget?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste Stortinget gjør.',
            solution: 'Vedtar lover og statsbudsjettet',
            multipleChoiceOptions: [
              'Vedtar lover og statsbudsjettet',
              'Styrer politiet',
              'Bestemmer hvem som skal være konge',
              'Driver skolene',
            ],
          },
        ],
        solution: 'Stortinget vedtar lover og statsbudsjettet. De kontrollerer også regjeringen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over demokrati.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig at alle får stemme ved valg?',
            solution: 'Når alle får stemme, blir alle hørt. Da kan ikke en liten gruppe bestemme alt. Valg sikrer at politikerne må lytte til folket for å bli valgt igjen.',
            multipleChoiceOptions: [
              'Når alle stemmer blir alle hørt, og politikerne må lytte til folket for å bli valgt igjen',
              'Det er ikke viktig hvem som stemmer',
              'Bare noen få bør få stemme',
              'Valg er ikke viktige',
            ],
          },
          {
            label: 'b',
            task: 'Nevn tre ting som kjennetegner et demokrati.',
            solution: 'Eksempler: Frie valg, ytringsfrihet, flere partier å velge mellom, likhet for loven, menneskerettigheter, fri presse.',
            multipleChoiceOptions: [
              'Frie valg, ytringsfrihet og likhet for loven',
              'Bare en leder, ingen valg og sensur',
              'Kongen bestemmer alt',
              'Ingen lover gjelder',
            ],
          },
        ],
        solution: 'Demokrati gir alle en stemme i samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Kommunen vår
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_3_2: TextbookChapter = {
  id: 'samfunnsfag-5-3-2',
  courseId: 'samfunnsfag-5',
  chapterNumber: '3.2',
  title: 'Kommunen vår',
  description: 'Lær om hvordan kommunen fungerer og hva den gjør for deg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjøre rede for hva lokaldemokrati er og hvordan kommunen påvirker hverdagen vår'
  ],
  content: [
    {
      id: 'samf-5-3-2-intro',
      type: 'text',
      content: `
# Kommunen vår

Norge er delt inn i 356 kommuner. Hver kommune har sitt eget styre som
bestemmer i lokale saker. Dette kalles **lokaldemokrati**.

Kommunen har ansvar for mange ting som påvirker hverdagen din - som skolen du
går på, barnehagen, veier og idrettsanlegg.
      `
    },
    {
      id: 'samf-5-3-2-def-kommune',
      type: 'definition',
      title: 'Hva er en kommune?',
      content: `En **kommune** er et geografisk område som styrer seg selv i mange saker.

Kommunen har ansvar for:
- **Skole** - grunnskolen (1.-10. klasse)
- **Barnehage** - opptak og drift
- **Helse** - sykehjem, hjemmehjelp, helsestasjon
- **Kultur** - bibliotek, idrettsanlegg, kulturskole
- **Veier** - lokale veier og gang-/sykkelstier
- **Vann og avløp** - rent vann i springen
- **Søppel** - renovasjon og gjenvinning`
    },
    {
      id: 'samf-5-3-2-kommunestyre',
      type: 'text',
      title: 'Kommunestyret',
      content: `
## Hvem bestemmer i kommunen?

**Kommunestyret** er kommunens "mini-storting". Det er folkevalgte politikere
som blir valgt ved kommunevalg hvert fjerde år.

**Ordfører**
Ordføreren er lederen for kommunestyret. Han eller hun representerer kommunen
og leder møtene i kommunestyret.

**Kommunedirektør**
Kommunedirektøren er ikke politiker, men sjef for alle som jobber i kommunen.
Han eller hun sørger for at det politikerne bestemmer, blir gjennomført.
      `
    },
    {
      id: 'samf-5-3-2-penger',
      type: 'text',
      title: 'Kommunens inntekter',
      content: `
## Hvor får kommunen penger fra?

Kommunen trenger penger for å betale for alt den gjør. Pengene kommer fra:

**Skatt**
- Alle som jobber, betaler skatt
- Deler av skatten går til kommunen

**Eiendomsskatt**
- Noen kommuner har skatt på hus og tomter

**Avgifter**
- Du betaler for vann, avløp og renovasjon

**Staten**
- Staten gir penger til kommunene
- Fattige kommuner får mer enn rike kommuner
      `
    },
    {
      id: 'samf-5-3-2-note',
      type: 'note',
      title: 'Store og små kommuner',
      content: `Norges kommuner er veldig forskjellige:

**Største kommune (areal)**: Kautokeino i Finnmark (9 707 km²)
**Minste kommune (areal)**: Kvitsøy i Rogaland (6 km²)

**Størst befolkning**: Oslo (ca. 700 000 innbyggere)
**Minst befolkning**: Utsira i Rogaland (ca. 200 innbyggere)

Selv om Utsira er liten, har de sitt eget kommunestyre!`
    },
    {
      id: 'samf-5-3-2-example',
      type: 'example',
      title: 'Hvordan påvirker kommunen hverdagen din?',
      problem: 'Tenk på en vanlig dag. Hvordan påvirker kommunen den?',
      solution: `**Morgen:**
- Du drikker vann fra springen (kommunen leverer rent vann)
- Du går/sykler på veien (kommunen vedlikeholder veier og fortau)

**På skolen:**
- Skolen er drevet av kommunen
- Lærerne er ansatt av kommunen
- Skolebygningen tilhører kommunen

**Fritid:**
- Du trener på idrettsbanen (kommunen eier den)
- Du låner bøker på biblioteket (kommunen driver det)

**Hjemme:**
- Søppelet blir hentet (kommunen organiserer dette)
- Du har rent vann og avløp som fungerer`
    },
    {
      id: 'samf-5-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange kommuner er det i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall kommuner.',
            solution: '356',
            multipleChoiceOptions: ['356', '100', '500', '1000'],
          },
        ],
        solution: 'Norge har 356 kommuner (per 2024).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er kommunestyret?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige beskrivelsen av kommunestyret.',
            solution: 'Folkevalgte politikere som bestemmer i kommunen',
            multipleChoiceOptions: [
              'Folkevalgte politikere som bestemmer i kommunen',
              'En gruppe ansatte som jobber på rådhuset',
              'Rektorer på alle skolene',
              'Folk som bestemmer i staten',
            ],
          },
        ],
        solution: 'Kommunestyret består av folkevalgte politikere som blir valgt ved kommunevalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken av disse er IKKE kommunens ansvar?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som IKKE er kommunens ansvar.',
            solution: 'Forsvaret (militæret)',
            multipleChoiceOptions: [
              'Forsvaret (militæret)',
              'Grunnskolen',
              'Barnehager',
              'Biblioteket',
            ],
          },
        ],
        solution: 'Forsvaret er statens ansvar, ikke kommunens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk din egen kommune.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva heter kommunen du bor i? Hvem er ordfører?',
            solution: 'Svarene vil variere. Finn ut hvem som er ordfører i din kommune!',
            multipleChoiceOptions: [
              'Jeg skal finne ut hvem som er ordfører i min kommune',
              'Kommunen min har ingen ordfører',
              'Kongen er ordfører i alle kommuner',
              'Statsministeren er ordfører',
            ],
          },
          {
            label: 'b',
            task: 'Nevn tre ting i nærmiljøet ditt som kommunen har ansvar for.',
            solution: 'Eksempler: Skolen, veier, idrettsanlegg, bibliotek, barnehage, lekeplass, gang- og sykkelsti.',
            multipleChoiceOptions: [
              'Skolen, veier og idrettsanlegg',
              'Fly, tog og ferger',
              'Militærleirer og fengsler',
              'Kommunen har ikke ansvar for noe',
            ],
          },
        ],
        solution: 'Kommunen påvirker hverdagen din på mange måter!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Natur og miljø
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_4_1: TextbookChapter = {
  id: 'samfunnsfag-5-4-1',
  courseId: 'samfunnsfag-5',
  chapterNumber: '4.1',
  title: 'Natur og miljø',
  description: 'Lær om naturen, økosystemer og hvorfor miljøvern er viktig.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive sammenhengen mellom mennesker og natur'
  ],
  content: [
    {
      id: 'samf-5-4-1-intro',
      type: 'text',
      content: `
# Natur og miljø

Naturen gir oss alt vi trenger for å leve - ren luft, rent vann, mat og
materialer. Men mennesker påvirker naturen, og noen ganger på negative måter.

Det er viktig at vi tar vare på naturen, slik at både vi og fremtidige
generasjoner kan ha et godt liv.
      `
    },
    {
      id: 'samf-5-4-1-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: `Et **økosystem** er et område der planter, dyr og omgivelsene virker sammen.

Eksempler på økosystemer:
- En innsjø
- En skog
- En eng
- Havet

Alt henger sammen i et økosystem. Hvis en del forsvinner, påvirker det resten. For eksempel: Hvis biene forsvinner, blir det ingen blomster, og dyr som spiser planter får mindre mat.`
    },
    {
      id: 'samf-5-4-1-problemer',
      type: 'text',
      title: 'Miljøproblemer',
      content: `
## Hva truer naturen?

**Forurensning**
- Søppel i naturen og havet
- Utslipp fra biler og fabrikker
- Giftige stoffer i vann og jord

**Klimaendringer**
- Jorden blir varmere
- Is smelter ved polene
- Været blir mer ekstremt

**Tap av arter**
- Dyr og planter blir utryddet
- Leveområder ødelegges
- Arter mister maten sin

**Overforbruk**
- Vi bruker mer enn naturen kan fornye
- Vi hugger ned skog uten å plante ny
- Vi fisker mer enn fiskebestandene tåler
      `
    },
    {
      id: 'samf-5-4-1-klima',
      type: 'definition',
      title: 'Klimaendringer',
      content: `**Klimaendringer** betyr at jordens klima forandrer seg over tid.

**Hva skjer?**
- Jorden blir varmere (global oppvarming)
- Isen på polene smelter
- Havet stiger
- Været blir mer ekstremt (stormer, flom, tørke)

**Hvorfor skjer det?**
Mennesker slipper ut mye CO₂ (karbondioksid) når vi brenner olje, kull og gass. CO₂ gjør at varme fanges i atmosfæren - som et drivhus. Dette kalles **drivhuseffekten**.`
    },
    {
      id: 'samf-5-4-1-example',
      type: 'example',
      title: 'Plast i havet',
      problem: 'Hvorfor er plast i havet et stort problem?',
      solution: `**Plast i havet er et stort miljøproblem:**

- Hvert år havner millioner av tonn plast i havet
- Plasten brytes ikke ned, bare i mindre biter
- Dyr spiser plast og kan dø av det
- Mikroplast kommer inn i næringskjeden
- Plast kan ta 500 år å forsvinne!

**Hva kan vi gjøre?**
- Ikke kaste søppel i naturen
- Resirkulere plast
- Bruke mindre engangsplast
- Delta på ryddeaksjoner`
    },
    {
      id: 'samf-5-4-1-note',
      type: 'note',
      title: 'Truede arter i Norge',
      content: `Noen dyr og planter i Norge er truet:

- **Fjellrev**: Nesten utryddet, men kommer tilbake
- **Villrein**: Trues av klimaendringer
- **Ål**: Bestanden har gått kraftig ned
- **Mange insekter**: Blir færre pga. sprøytemidler

Norge har **rødlisten** som viser hvilke arter som er truet.`
    },
    {
      id: 'samf-5-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et økosystem?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste forklaringen på hva et økosystem er.',
            solution: 'Et område der planter, dyr og omgivelser virker sammen',
            multipleChoiceOptions: [
              'Et område der planter, dyr og omgivelser virker sammen',
              'En maskin som renser luft',
              'En type dyr',
              'Et hus for planter',
            ],
          },
        ],
        solution: 'Et økosystem er et område der alt levende og ikke-levende henger sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er drivhuseffekten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige forklaringen på drivhuseffekten.',
            solution: 'Gasser i atmosfæren holder på varmen, slik at jorden blir varmere',
            multipleChoiceOptions: [
              'Gasser i atmosfæren holder på varmen, slik at jorden blir varmere',
              'Drivhus brukes til å dyrke planter',
              'Havet blir kaldere',
              'Sola slutter å skinne',
            ],
          },
        ],
        solution: 'Drivhuseffekten gjør at jorden blir varmere fordi CO₂ og andre gasser holder på varmen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er plast i havet et problem?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste grunnen til at plast i havet er et problem.',
            solution: 'Dyr spiser plasten og kan dø, og plasten brytes ikke ned',
            multipleChoiceOptions: [
              'Dyr spiser plasten og kan dø, og plasten brytes ikke ned',
              'Plasten er fin å se på',
              'Plasten gjør vannet varmere',
              'Plasten hjelper fiskene',
            ],
          },
        ],
        solution: 'Plast i havet er farlig fordi dyr spiser det og fordi det tar hundrevis av år å bryte ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over miljøproblemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting som truer naturen.',
            solution: 'Eksempler: Forurensning, klimaendringer, tap av arter, overforbruk, plast i havet, avskoging.',
            multipleChoiceOptions: [
              'Forurensning, klimaendringer og tap av arter',
              'Regn, sol og vind',
              'Ingenting truer naturen',
              'Planter og dyr',
            ],
          },
          {
            label: 'b',
            task: 'Hva kan du gjøre for å hjelpe miljøet?',
            solution: 'Eksempler: Ikke kaste søppel i naturen, resirkulere, bruke mindre plast, gå eller sykle i stedet for å kjøre bil, spare på strøm, spise mindre kjøtt.',
            multipleChoiceOptions: [
              'Ikke kaste søppel, resirkulere, bruke mindre plast, gå eller sykle, spare strøm',
              'Kaste mer søppel',
              'Bruke mer engangsplast',
              'Ingenting - det er ikke mitt ansvar',
            ],
          },
        ],
        solution: 'Alle kan bidra til å ta vare på naturen!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Bærekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_5_4_2: TextbookChapter = {
  id: 'samfunnsfag-5-4-2',
  courseId: 'samfunnsfag-5',
  chapterNumber: '4.2',
  title: 'Bærekraftig utvikling',
  description: 'Lær om bærekraft og FNs bærekraftsmål.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og presentere ulike måter å arbeide med bærekraftig utvikling på'
  ],
  content: [
    {
      id: 'samf-5-4-2-intro',
      type: 'text',
      content: `
# Bærekraftig utvikling

**Bærekraftig utvikling** betyr at vi lever på en måte som dekker våre behov
i dag, uten å ødelegge for dem som kommer etter oss.

Tenk på det som å låne jorden av våre barnebarn - vi må gi den tilbake i like
god stand som vi fikk den!
      `
    },
    {
      id: 'samf-5-4-2-def-baerekraft',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** handler om tre ting som henger sammen:

**1. Miljø (planeten)**
- Ta vare på naturen
- Stoppe forurensning
- Bruke ressursene forsiktig

**2. Økonomi (velstand)**
- Alle skal kunne leve et godt liv
- Jobber og inntekt til alle
- Rettferdig fordeling

**3. Sosiale forhold (mennesker)**
- Helse og utdanning til alle
- Likestilling
- Fred og rettferdighet

Alle tre må være i balanse for at utviklingen skal være bærekraftig.`
    },
    {
      id: 'samf-5-4-2-fn',
      type: 'text',
      title: 'FNs bærekraftsmål',
      content: `
## FNs 17 bærekraftsmål

I 2015 ble alle verdens land enige om 17 mål for å gjøre verden bedre innen
2030. Dette kalles **bærekraftsmålene**.

Noen av målene:
1. **Utrydde fattigdom**
2. **Utrydde sult**
3. **God helse**
4. **God utdanning**
6. **Rent vann og gode sanitærforhold**
7. **Ren energi til alle**
13. **Stoppe klimaendringene**
14. **Livet i havet**
15. **Livet på land**
      `
    },
    {
      id: 'samf-5-4-2-eksempler',
      type: 'text',
      title: 'Bærekraft i praksis',
      content: `
## Hvordan kan vi leve mer bærekraftig?

**Energi**
- Bruke fornybar energi (sol, vind, vann)
- Spare på strømmen
- Kjøre elbil eller ta buss

**Forbruk**
- Kjøpe mindre
- Reparere i stedet for å kaste
- Kjøpe brukt

**Mat**
- Spise mer plantebasert
- Kaste mindre mat
- Velge lokal mat

**Avfall**
- Resirkulere
- Unngå engangsartikler
- Kompostere matavfall
      `
    },
    {
      id: 'samf-5-4-2-example',
      type: 'example',
      title: 'Sirkulær økonomi',
      problem: 'Hva er forskjellen på en lineær og sirkulær økonomi?',
      solution: `**Lineær økonomi (gammel måte):**
Ta → Lag → Bruk → Kast

Vi tar ut ressurser, lager produkter, bruker dem og kaster dem. Dette er ikke bærekraftig fordi ressursene tar slutt og avfallet hoper seg opp.

**Sirkulær økonomi (ny måte):**
Ta → Lag → Bruk → Gjenbruk → Resirkuler → Lag på nytt

I en sirkulær økonomi prøver vi å bruke ting om igjen og resirkulere materialer. Målet er null avfall!

**Eksempel:** En gammel mobiltelefon kan samles inn, deles opp, og materialene kan brukes til å lage nye produkter.`
    },
    {
      id: 'samf-5-4-2-note',
      type: 'note',
      title: 'Norges klimamål',
      content: `Norge har lovet å kutte utslipp av klimagasser:

- **2030**: Kutte utslippene med 55% sammenlignet med 1990
- **2050**: Norge skal være klimanøytralt

For å nå målene må vi:
- Kjøre mer elbil og ta kollektivt
- Bruke mer fornybar energi
- Gjøre industrien grønnere
- Spise mer klimavennlig mat`
    },
    {
      id: 'samf-5-4-2-tip',
      type: 'tip',
      title: 'Du kan gjøre en forskjell!',
      content: `Selv om du er ung, kan du bidra til en bærekraftig fremtid:

**Hjemme:**
- Slukk lyset når du går ut
- Ta kortere dusjer
- Sorter søppel

**På skolen:**
- Ikke kast mat
- Bruk begge sider av arket
- Gå eller sykle til skolen

**I samfunnet:**
- Lær andre om bærekraft
- Delta i ryddeaksjoner
- Snakk om miljø med venner og familie`
    },
    {
      id: 'samf-5-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr bærekraftig utvikling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste forklaringen på bærekraftig utvikling.',
            solution: 'Å dekke våre behov uten å ødelegge for fremtidige generasjoner',
            multipleChoiceOptions: [
              'Å dekke våre behov uten å ødelegge for fremtidige generasjoner',
              'Å bruke mest mulig ressurser',
              'Å ikke bry seg om fremtiden',
              'Å bare tenke på økonomi',
            ],
          },
        ],
        solution: 'Bærekraftig utvikling handler om å leve godt i dag uten å ødelegge for dem som kommer etter oss.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er FNs bærekraftsmål?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver FNs bærekraftsmål.',
            solution: '17 mål for å gjøre verden bedre innen 2030',
            multipleChoiceOptions: [
              '17 mål for å gjøre verden bedre innen 2030',
              'Regler for å spille fotball',
              'Norges grunnlov',
              'En liste over verdens land',
            ],
          },
        ],
        solution: 'FNs bærekraftsmål er 17 mål som alle verdens land ble enige om i 2015.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er en sirkulær økonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver sirkulær økonomi.',
            solution: 'Gjenbruke og resirkulere i stedet for å kaste',
            multipleChoiceOptions: [
              'Gjenbruke og resirkulere i stedet for å kaste',
              'Kaste alt etter bruk',
              'Bare kjøpe nye ting',
              'Bruke mest mulig plast',
            ],
          },
        ],
        solution: 'I en sirkulær økonomi bruker vi ting om igjen og resirkulerer materialer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-5-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-5-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Planlegg bærekraftige handlinger.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting du kan gjøre hjemme for å være mer bærekraftig.',
            solution: 'Eksempler: Slukke lys, ta kortere dusjer, sortere søppel, ikke kaste mat, bruke klær lenger.',
            multipleChoiceOptions: [
              'Slukke lys, ta kortere dusjer og sortere søppel',
              'La lyset stå på hele natten',
              'Kaste alt i samme søppelbøtte',
              'Kjøpe så mye som mulig',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig at alle land samarbeider om bærekraftsmålene?',
            solution: 'Miljøproblemer som klimaendringer kjenner ingen grenser. Hvis bare noen land gjør noe, hjelper det ikke nok. Alle må jobbe sammen for å løse globale problemer.',
            multipleChoiceOptions: [
              'Miljøproblemer kjenner ingen grenser, så alle må jobbe sammen for å løse dem',
              'Det er ikke viktig med samarbeid',
              'Bare Norge kan løse problemene',
              'Klimaendringer finnes bare i ett land',
            ],
          },
        ],
        solution: 'Bærekraftig utvikling krever at alle bidrar - både enkeltpersoner og land!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFUNNSFAG_5_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Geografi og urfolk
  CHAPTER_SAMFUNNSFAG_5_1_1,
  CHAPTER_SAMFUNNSFAG_5_1_2,
  // Kapittel 2: Norgeshistorie
  CHAPTER_SAMFUNNSFAG_5_2_1,
  CHAPTER_SAMFUNNSFAG_5_2_2,
  // Kapittel 3: Demokrati
  CHAPTER_SAMFUNNSFAG_5_3_1,
  CHAPTER_SAMFUNNSFAG_5_3_2,
  // Kapittel 4: Miljø og bærekraft
  CHAPTER_SAMFUNNSFAG_5_4_1,
  CHAPTER_SAMFUNNSFAG_5_4_2,
];

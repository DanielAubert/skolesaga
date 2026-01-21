/**
 * Tekstbok innhold for KRLE 5. klasse
 *
 * Følger LK20 læreplan for KRLE (Kristendom, religion, livssyn og etikk) mellomtrinn.
 * Innholdet er tilpasset 10-11-åringer med enklere språk og konkrete eksempler.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Bibelen
// ============================================================================

export const CHAPTER_KRLE_5_1_1: TextbookChapter = {
  id: 'krle-5-1-1',
  courseId: 'krle-5',
  chapterNumber: '1.1',
  title: 'Bibelen',
  description: 'Lær om kristendommens hellige bok og viktige fortellinger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til sentrale fortellinger fra Bibelen',
    'kunne fortelle om hvordan Bibelen er bygd opp'
  ],
  content: [
    {
      id: 'krle-5-1-1-intro',
      type: 'text',
      content: `
# Bibelen

Bibelen er kristendommens hellige bok. Den er den mest leste boken i verden
og er oversatt til over 700 språk! Kristne tror at Bibelen forteller om
Gud og hvordan mennesker skal leve.
      `
    },
    {
      id: 'krle-5-1-1-def-bibelen',
      type: 'definition',
      title: 'Hva er Bibelen?',
      content: `Bibelen er egentlig en samling av mange bøker:

- **Det gamle testamente**: 39 bøker skrevet før Jesus ble født
- **Det nye testamente**: 27 bøker som handler om Jesus og de første kristne

Til sammen har Bibelen 66 bøker! Den ble skrevet av mange forskjellige
mennesker over en periode på over 1000 år.`
    },
    {
      id: 'krle-5-1-1-gt',
      type: 'text',
      title: 'Det gamle testamente',
      content: `
## Det gamle testamente

Det gamle testamente inneholder fortellinger som:

- **Skapelsen**: Fortellingen om hvordan Gud skapte verden og mennesket
- **Adam og Eva**: De første menneskene i Edens hage
- **Noahs ark**: Noah bygger en stor båt og redder dyrene fra en flom
- **Moses**: Guds utvalgte som førte israelittene ut av Egypt
- **De ti bud**: Reglene Gud ga til Moses på fjellet Sinai
- **David og Goliat**: Den unge David beseirer kjempen Goliat

Disse fortellingene er hellige også for jøder, som kaller dem Tanakh.
      `
    },
    {
      id: 'krle-5-1-1-nt',
      type: 'text',
      title: 'Det nye testamente',
      content: `
## Det nye testamente

Det nye testamente handler mest om Jesus og hans disipler (følgere):

- **Evangeliene**: Fire bøker som forteller om Jesu liv (Matteus, Markus, Lukas, Johannes)
- **Apostlenes gjerninger**: Om de første kristne menighetene
- **Brevene**: Brev fra kristne ledere til menighetene
- **Johannes' åpenbaring**: Visjoner om fremtiden

Ordet "evangelium" betyr "godt budskap" - kristne mener budskapet om Jesus er godt nytt.
      `
    },
    {
      id: 'krle-5-1-1-jesus-bibelen',
      type: 'note',
      title: 'Jesus i Bibelen',
      content: `Jesus lærte ofte ved å fortelle historier kalt **lignelser**.

Kjente lignelser:
- **Den barmhjertige samaritan**: Om å hjelpe andre, selv de som er annerledes
- **Den fortapte sønn**: Om tilgivelse og kjærlighet
- **Sennepsfrøet**: Om at noe lite kan vokse seg stort

Lignelsene lærer oss noe viktig om hvordan vi bør leve og behandle andre.`
    },
    {
      id: 'krle-5-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er de to hoveddelene av Bibelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de to hoveddelene av Bibelen?',
            solution: 'Det gamle testamente og Det nye testamente',
            multipleChoiceOptions: ['Det gamle testamente og Det nye testamente', 'Evangeliene og Brevene', 'Moses og Jesus', 'Skapelsen og Åpenbaringen'],
          },
        ],
        solution: 'Bibelen består av Det gamle testamente (før Jesus) og Det nye testamente (om Jesus og de første kristne).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvem førte israelittene ut av Egypt ifølge Bibelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem førte israelittene ut av Egypt?',
            solution: 'Moses',
            multipleChoiceOptions: ['Moses', 'Noah', 'David', 'Jesus'],
          },
        ],
        solution: 'Moses førte israelittene ut av Egypt og mottok De ti bud fra Gud.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr ordet "evangelium"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr ordet "evangelium"?',
            solution: 'Godt budskap',
            multipleChoiceOptions: ['Godt budskap', 'Hellig bok', 'Guds ord', 'Gammel historie'],
          },
        ],
        solution: 'Evangelium betyr "godt budskap". De fire evangeliene forteller det kristne ser som det gode budskapet om Jesus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk en bibelfortelling.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en av fortellingene fra Det gamle testamente (Skapelsen, Noahs ark, eller David og Goliat). Fortell kort hva som skjer i fortellingen.',
            solution: 'Skapelsen: Gud skaper verden på seks dager og hviler på den syvende. Noahs ark: Noah bygger en stor båt og redder dyrene fra en flom. David og Goliat: Den unge David beseirer kjempen Goliat med en slynge.',
            multipleChoiceOptions: ['Fortellingen handler om Guds makt og menneskers tro', 'Fortellingene er bare eventyr', 'Det gamle testamente har ingen fortellinger', 'Fortellingene handler bare om kriger'],
          },
          {
            label: 'b',
            task: 'Hva tror du kristne mener vi kan lære av denne fortellingen?',
            solution: 'Svar kan variere. Mulige lærdommer: Å ha tro, å være modig, å stole på Gud, at det gode vinner over det onde, viktigheten av å gjøre det rette.',
            multipleChoiceOptions: ['At tro og mot er viktig', 'At man ikke kan lære noe', 'At bare sterke mennesker er viktige', 'At dyr er viktigere enn mennesker'],
          }
        ],
        hints: ['Tenk på hvem hovedpersonen er', 'Hva gjør hovedpersonen som er spesielt?'],
        solution: 'Bibelfortellingene lærer ofte noe om tro, mot og å gjøre det rette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Kristne høytider
// ============================================================================

export const CHAPTER_KRLE_5_1_2: TextbookChapter = {
  id: 'krle-5-1-2',
  courseId: 'krle-5',
  chapterNumber: '1.2',
  title: 'Kristne høytider',
  description: 'Lær om jul, påske og andre kristne høytider.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kunne fortelle om de viktigste kristne høytidene',
    'kjenne til hvordan kristne feirer sine høytider'
  ],
  content: [
    {
      id: 'krle-5-1-2-intro',
      type: 'text',
      content: `
# Kristne høytider

Kristne feirer flere høytider gjennom året. De viktigste er **jul** og **påske**.
Høytidene minner kristne om viktige hendelser fra Bibelen.
      `
    },
    {
      id: 'krle-5-1-2-jul',
      type: 'text',
      title: 'Jul',
      content: `
## Julefeiringen

Jul feires 24.-25. desember og handler om **Jesu fødsel**.

**Julefortellingen:**
Maria og Josef reiste til Betlehem. Der ble Jesus født i en stall
fordi det ikke var plass på herberget. Hyrdene på marken fikk besøk av
engler som fortalte dem om babyen. Vismenn fra Østen fulgte en stjerne
for å finne barnet og ga ham gaver.

**Slik feirer kristne jul:**
- Går i kirken på julaften eller juledag
- Synger julesanger om Jesus
- Tenner lys og har adventstid (fire uker før jul)
- Setter opp julekrybbe som viser scenen fra Betlehem
      `
    },
    {
      id: 'krle-5-1-2-advent',
      type: 'definition',
      title: 'Advent',
      content: `**Advent** betyr "ankomst" og er de fire ukene før jul.

- Kristne forbereder seg på å feire Jesu fødsel
- Man tenner ett lys hver søndag i adventsstaken
- Mange har adventskalender som teller ned til jul

Advent minner om at kristne venter på at Jesus skal komme tilbake.`
    },
    {
      id: 'krle-5-1-2-paske',
      type: 'text',
      title: 'Påske',
      content: `
## Påskefeiringen

Påsken er den viktigste kristne høytiden. Den handler om **Jesu død og oppstandelse**.

**Palmesøndag:** Jesus rir inn i Jerusalem. Folk vinker med palmegrener.

**Skjærtorsdag:** Jesus spiser det siste måltidet med disiplene (nattverden).

**Langfredag:** Jesus dør på korset. En trist dag for kristne.

**Påskedag:** Jesus står opp fra de døde! Kristne tror dette viser at Jesus seiret over døden.

**Hvorfor er påsken viktig?**
Kristne tror at fordi Jesus stod opp fra de døde, kan alle som tror på ham få evig liv.
      `
    },
    {
      id: 'krle-5-1-2-pinse',
      type: 'text',
      title: 'Pinse og andre høytider',
      content: `
## Andre kristne høytider

**Pinse** (50 dager etter påske):
- Feirer at Den hellige ånd kom til disiplene
- Regnes som "kirkens fødselsdag"

**Kristi himmelfartsdag** (40 dager etter påske):
- Minnes at Jesus fór opp til himmelen

**Allehelgensdag** (første søndag i november):
- Minnes kristne som har dødd
- Man tenner lys på gravene
      `
    },
    {
      id: 'krle-5-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva feirer kristne i julen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva feirer kristne i julen?',
            solution: 'Jesu fødsel',
            multipleChoiceOptions: ['Jesu fødsel', 'Jesu død', 'Jesu dåp', 'Skapelsen'],
          },
        ],
        solution: 'Jul feirer at Jesus ble født i Betlehem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva skjedde på påskedag ifølge kristne?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjedde på påskedag?',
            solution: 'Jesus stod opp fra de døde',
            multipleChoiceOptions: ['Jesus stod opp fra de døde', 'Jesus ble født', 'Jesus døde på korset', 'Jesus ble døpt'],
          },
        ],
        solution: 'Påskedag feirer at Jesus stod opp fra de døde (oppstandelsen).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr advent?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr advent?',
            solution: 'Ankomst',
            multipleChoiceOptions: ['Ankomst', 'Fødsel', 'Død', 'Reise'],
          },
        ],
        solution: 'Advent betyr "ankomst" og er tiden da kristne forbereder seg på å feire Jesu fødsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Sett disse påskedagene i riktig rekkefølge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kommer først: Langfredag, Palmesøndag eller Påskedag?',
            solution: 'Palmesøndag',
            multipleChoiceOptions: ['Palmesøndag', 'Langfredag', 'Påskedag', 'Skjærtorsdag'],
          },
          {
            label: 'b',
            task: 'Forklar med egne ord hva som skjer på langfredag og hvorfor det er en viktig dag for kristne.',
            solution: 'Langfredag er dagen Jesus døde på korset. Det er en trist dag, men viktig fordi kristne tror Jesus døde for å redde menneskene fra synd.',
            multipleChoiceOptions: ['Jesus døde på korset for å redde menneskene', 'Jesus ble født', 'Disiplene fikk Den hellige ånd', 'Jesus ble døpt'],
          }
        ],
        hints: ['Palmesøndag er en uke før påskedag', 'Tenk på hva som skjer med Jesus først'],
        solution: 'Rekkefølgen er: Palmesøndag - Skjærtorsdag - Langfredag - Påskedag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Islam
// ============================================================================

export const CHAPTER_KRLE_5_2_1: TextbookChapter = {
  id: 'krle-5-2-1',
  courseId: 'krle-5',
  chapterNumber: '2.1',
  title: 'Islam',
  description: 'Lær om islam, muslimer og deres tro og praksis.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til sentrale trekk ved islam',
    'kunne fortelle om hvordan muslimer utøver sin religion'
  ],
  content: [
    {
      id: 'krle-5-2-1-intro',
      type: 'text',
      content: `
# Islam

Islam er en av verdens største religioner. De som tror på islam kalles **muslimer**.
Det finnes over en milliard muslimer i verden, og mange bor i Norge.
      `
    },
    {
      id: 'krle-5-2-1-def-islam',
      type: 'definition',
      title: 'Hva tror muslimer?',
      content: `Muslimer tror på:

- **Allah**: Det arabiske ordet for Gud (samme Gud som kristne og jøder tror på)
- **Muhammad**: Den siste og viktigste profeten
- **Koranen**: Islams hellige bok med Guds ord
- **Engler**: Budbærere fra Gud
- **Profetene**: Mange profeter, inkludert Abraham, Moses og Jesus

Islam betyr "underkastelse" - å følge Guds vilje.`
    },
    {
      id: 'krle-5-2-1-muhammad',
      type: 'text',
      title: 'Profeten Muhammad',
      content: `
## Muhammad - den siste profeten

Muhammad ble født i byen Mekka for ca. 1400 år siden.

- Han fikk åpenbaringer (budskap) fra Gud gjennom engelen Jibril
- Disse budskapene ble samlet i **Koranen**
- Han lærte folk å tro på én Gud
- Muslimer ser ham som et forbilde for hvordan man skal leve

Muhammad er veldig viktig for muslimer, men de tilber bare Allah (Gud).
      `
    },
    {
      id: 'krle-5-2-1-soylene',
      type: 'definition',
      title: 'De fem søylene',
      content: `Islam har fem viktige praksiser kalt **de fem søylene**:

1. **Trosbekjennelsen**: "Det er ingen gud uten Allah, og Muhammad er hans profet"

2. **Bønn**: Muslimer ber fem ganger om dagen, vendt mot Mekka

3. **Almisse**: Å gi penger til de som trenger det

4. **Faste**: I måneden ramadan spiser muslimer ikke mellom soloppgang og solnedgang

5. **Pilegrimsreise**: Reise til Mekka minst én gang i livet (hvis man kan)`
    },
    {
      id: 'krle-5-2-1-moske',
      type: 'text',
      title: 'Moskeen',
      content: `
## Moskeen - stedet for bønn

**Moskeen** er muslimers gudshus. Der samles de for å be, særlig på fredager.

I moskeen:
- Tar man av seg skoene
- Vasker man seg før bønn
- Vender man seg mot Mekka når man ber
- Sitter man på gulvet
- Er det ingen bilder av mennesker eller dyr

**Minareten** er tårnet på moskeen. Fra den kaller **muezzinen** til bønn.
      `
    },
    {
      id: 'krle-5-2-1-hoytider',
      type: 'note',
      title: 'Muslimske høytider',
      content: `De to viktigste høytidene i islam:

**Id al-fitr**: Festen etter ramadan
- Feirer at fastemåneden er over
- Familier samles til festmåltid
- Barn får ofte gaver

**Id al-adha**: Offerfesten
- Minnes at Abraham var villig til å ofre sønnen sin
- Feires under pilegrimsreisen til Mekka`
    },
    {
      id: 'krle-5-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva heter islams hellige bok?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva heter islams hellige bok?',
            solution: 'Koranen',
            multipleChoiceOptions: ['Koranen', 'Bibelen', 'Toraen', 'Vedaene'],
          },
        ],
        solution: 'Koranen er islams hellige bok og inneholder det muslimer tror er Guds ord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange ganger om dagen ber muslimer?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange ganger om dagen ber muslimer?',
            solution: 'Fem ganger',
            multipleChoiceOptions: ['Fem ganger', 'Tre ganger', 'Én gang', 'Ti ganger'],
          },
        ],
        solution: 'Bønn fem ganger om dagen er en av de fem søylene i islam.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva skjer i måneden ramadan?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer i ramadan?',
            solution: 'Muslimer faster fra soloppgang til solnedgang',
            multipleChoiceOptions: ['Muslimer faster fra soloppgang til solnedgang', 'Muslimer reiser til Mekka', 'Muslimer feirer jul', 'Muslimer gir bort alle pengene sine'],
          },
        ],
        solution: 'I ramadan faster muslimer - de spiser og drikker ikke mellom soloppgang og solnedgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Lær mer om moskeen.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn to ting man gjør i en moske.',
            solution: 'Eksempler: Man ber, tar av seg skoene, vasker seg før bønn, sitter på gulvet, vender seg mot Mekka.',
            multipleChoiceOptions: ['Man ber og tar av seg skoene', 'Man spiser og danser', 'Man ser på bilder', 'Man synger med instrumenter'],
          },
          {
            label: 'b',
            task: 'Hvilken retning vender muslimer seg når de ber? Hvorfor tror du det er sånn?',
            solution: 'Muslimer vender seg mot Mekka. Dette er fordi Mekka er den helligste byen i islam, der Kabaen (islams helligste sted) ligger.',
            multipleChoiceOptions: ['Mot Mekka, fordi det er den helligste byen i islam', 'Mot øst, fordi solen står opp der', 'Mot Jerusalem, fordi det er en hellig by', 'Mot nord, fordi det er tradisjon'],
          }
        ],
        hints: ['Tenk på hva som er spesielt med moskeen', 'Mekka er en veldig viktig by for muslimer'],
        solution: 'Moskeen er et viktig sted for muslimer der de samles for å be og være i fellesskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Jødedommen
// ============================================================================

export const CHAPTER_KRLE_5_2_2: TextbookChapter = {
  id: 'krle-5-2-2',
  courseId: 'krle-5',
  chapterNumber: '2.2',
  title: 'Jødedommen',
  description: 'Lær om jødedommen, jøder og deres tro og tradisjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til sentrale trekk ved jødedommen',
    'kunne fortelle om jødiske høytider og tradisjoner'
  ],
  content: [
    {
      id: 'krle-5-2-2-intro',
      type: 'text',
      content: `
# Jødedommen

Jødedommen er en av verdens eldste religioner - over 3000 år gammel!
De som tilhører jødedommen kalles **jøder**. Kristendommen og islam har
begge røtter i jødedommen.
      `
    },
    {
      id: 'krle-5-2-2-def-jodedom',
      type: 'definition',
      title: 'Hva tror jøder?',
      content: `Jøder tror på:

- **Én Gud**: Jødedommen var den første religionen som lærte at det bare finnes én Gud
- **Pakten**: Gud har en spesiell avtale med det jødiske folket
- **Toraen**: De fem Mosebøkene - de helligste tekstene
- **Budene**: 613 bud om hvordan man skal leve
- **De ti bud**: De viktigste reglene fra Gud

Jøder venter fortsatt på **Messias** - en frelser som skal komme.`
    },
    {
      id: 'krle-5-2-2-torah',
      type: 'text',
      title: 'Toraen',
      content: `
## Toraen - de hellige skriftene

**Toraen** er de fem første bøkene i Bibelen (Mosebøkene).

- Den er skrevet på hebraisk
- Den oppbevares i en spesiell skapsåpning kalt **Toraskrinet** i synagogen
- Den er skrevet for hånd på en lang skriftrull
- Man bruker en peker (jad) når man leser for ikke å berøre teksten

Toraen inneholder fortellinger om Abraham, Moses og det jødiske folkets historie,
pluss mange regler for hvordan man skal leve.
      `
    },
    {
      id: 'krle-5-2-2-synagoge',
      type: 'text',
      title: 'Synagogen',
      content: `
## Synagogen - jødenes gudshus

Synagogen er stedet der jøder samles for å be og lese fra Toraen.

I synagogen finner man:
- **Toraskrinet**: Der Toraen oppbevares
- **Bimah**: En forhøyning der man leser fra Toraen
- **Evigvarende lys**: Et lys som alltid brenner foran Toraskrinet

**Sabbaten** (shabbat) er ukens helligste dag. Den varer fra fredag kveld
til lørdag kveld. Da hviler jøder og går i synagogen.
      `
    },
    {
      id: 'krle-5-2-2-hoytider',
      type: 'note',
      title: 'Jødiske høytider',
      content: `Viktige jødiske høytider:

**Pesach (påske)**: Feirer at israelittene ble frigjort fra Egypt under Moses.
Man spiser usyret brød (matzah) i en uke.

**Rosh Hashana**: Jødisk nyttår. Man blåser i et horn kalt shofar.

**Jom Kippur**: Forsoningsdagen - den helligste dagen. Man faster og ber om tilgivelse.

**Hanukka**: Lysfesten. Man tenner lys i en lysestake med åtte armer (hanukiah) i åtte dager.`
    },
    {
      id: 'krle-5-2-2-symboler',
      type: 'definition',
      title: 'Jødiske symboler',
      content: `**Davidsstjernen**: En sekstakket stjerne, symbol på det jødiske folket

**Menorah**: En syvarmede lysestake, et gammelt jødisk symbol

**Kippa**: En liten hette som jødiske menn bærer på hodet som tegn på respekt for Gud

**Mezuzah**: En liten beholder med bibelvers som festes på dørkarmene`
    },
    {
      id: 'krle-5-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva heter jødenes hellige skrift?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva heter jødenes helligste skrift?',
            solution: 'Toraen',
            multipleChoiceOptions: ['Toraen', 'Koranen', 'Bibelen', 'Vedaene'],
          },
        ],
        solution: 'Toraen er de fem Mosebøkene og er den helligste skriften i jødedommen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken dag er hellig for jøder hver uke?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken dag er ukens helligste dag for jøder?',
            solution: 'Sabbaten (shabbat) - fra fredag kveld til lørdag kveld',
            multipleChoiceOptions: ['Sabbaten (fredag kveld til lørdag kveld)', 'Søndag', 'Mandag', 'Fredag formiddag'],
          },
        ],
        solution: 'Sabbaten (shabbat) er den ukentlige helligdagen. Da hviler jøder fra arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva feirer jøder i pesach?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva feirer jøder i pesach (jødisk påske)?',
            solution: 'At israelittene ble frigjort fra Egypt',
            multipleChoiceOptions: ['At israelittene ble frigjort fra Egypt', 'Jesu oppstandelse', 'Jødisk nyttår', 'At tempelet ble gjeninnviet'],
          },
        ],
        solution: 'Pesach feirer at Moses førte israelittene ut av slaveriet i Egypt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign jødedommen med kristendommen.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn én ting som er likt i jødedommen og kristendommen.',
            solution: 'Begge tror på én Gud. Begge har De ti bud. Begge har Det gamle testamente/Toraen. Begge tror på profetene som Moses og Abraham.',
            multipleChoiceOptions: ['Begge tror på én Gud og har De ti bud', 'Begge tror Jesus er Guds sønn', 'Begge har Koranen', 'Begge har paven som leder'],
          },
          {
            label: 'b',
            task: 'Nevn én ting som er forskjellig mellom jødedommen og kristendommen.',
            solution: 'Kristne tror Jesus er Messias (frelseren), jøder venter fortsatt på Messias. Jøder har synagoge, kristne har kirke. Jøder har sabbat på lørdag, kristne feirer søndag.',
            multipleChoiceOptions: ['Kristne tror Jesus er Messias, jøder venter fortsatt', 'De tror på forskjellige guder', 'De har helt forskjellige hellige tekster', 'Jøder tror ikke på profeter'],
          }
        ],
        hints: ['Tenk på hva de tror om Gud', 'Tenk på hva de mener om Jesus'],
        solution: 'Jødedommen og kristendommen har mye felles fordi kristendommen har røtter i jødedommen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Hva er livssyn?
// ============================================================================

export const CHAPTER_KRLE_5_3_1: TextbookChapter = {
  id: 'krle-5-3-1',
  courseId: 'krle-5',
  chapterNumber: '3.1',
  title: 'Hva er livssyn?',
  description: 'Utforsk hva et livssyn er og ulike måter å se på livet.',
  estimatedMinutes: 35,
  competenceGoals: [
    'kunne forklare hva et livssyn er',
    'kjenne til at mennesker har ulike livssyn'
  ],
  content: [
    {
      id: 'krle-5-3-1-intro',
      type: 'text',
      content: `
# Hva er livssyn?

Alle mennesker har tanker om livet. Hva er meningen med livet?
Hva er rett og galt? Finnes det noe mer enn det vi kan se?
Svarene på slike spørsmål utgjør vårt **livssyn**.
      `
    },
    {
      id: 'krle-5-3-1-def-livssyn',
      type: 'definition',
      title: 'Livssyn',
      content: `Et **livssyn** er alt du tror og mener om de store spørsmålene i livet:

- Hvordan ble verden til?
- Hva er meningen med livet?
- Hva er rett og galt?
- Hva skjer når vi dør?
- Finnes det en gud eller ikke?

Noen har et **religiøst livssyn** (tror på en gud eller guder).
Andre har et **ikke-religiøst livssyn** (tror ikke på noen gud).`
    },
    {
      id: 'krle-5-3-1-religion',
      type: 'text',
      title: 'Religiøse livssyn',
      content: `
## Religiøse livssyn

Mange mennesker har et religiøst livssyn. De tror på en gud eller flere guder.

Eksempler på religioner:
- **Kristendom**: Tror på Gud og Jesus
- **Islam**: Tror på Allah og profeten Muhammad
- **Jødedom**: Tror på én Gud og venter på Messias
- **Hinduisme**: Tror på mange guder
- **Buddhisme**: Følger Buddhas lære

Religionene gir svar på de store spørsmålene og regler for hvordan man skal leve.
      `
    },
    {
      id: 'krle-5-3-1-humanisme',
      type: 'text',
      title: 'Humanisme',
      content: `
## Humanisme - et ikke-religiøst livssyn

**Humanister** tror ikke på noen gud, men mener likevel at livet har mening.

Humanister mener:
- Mennesket er verdifullt i seg selv
- Vi må være gode mot hverandre
- Vi kan finne ut hva som er rett og galt ved å tenke selv
- Vitenskapen hjelper oss å forstå verden
- Vi må ta vare på hverandre og jorden

Human-Etisk Forbund er en organisasjon for humanister i Norge.
      `
    },
    {
      id: 'krle-5-3-1-respekt',
      type: 'note',
      title: 'Respekt for ulike livssyn',
      content: `I Norge bor mennesker med mange forskjellige livssyn.

**Viktig å huske:**
- Alle har rett til å ha sitt eget livssyn
- Vi må respektere at andre tror og tenker annerledes enn oss
- Vi kan lære av hverandre
- Det er lov å være nysgjerrig og stille spørsmål
- Vi kan være uenige og likevel være venner

Religionsfrihet betyr at alle får tro det de vil.`
    },
    {
      id: 'krle-5-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et livssyn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et livssyn?',
            solution: 'Det du tror og mener om de store spørsmålene i livet',
            multipleChoiceOptions: ['Det du tror og mener om de store spørsmålene i livet', 'En religion', 'En hobby', 'En type mat'],
          },
        ],
        solution: 'Et livssyn er alt du tror og mener om livets store spørsmål - som meningen med livet og hva som er rett og galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på et religiøst og ikke-religiøst livssyn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen?',
            solution: 'Et religiøst livssyn inkluderer tro på en gud eller guder, et ikke-religiøst gjør ikke det',
            multipleChoiceOptions: ['Religiøst livssyn inkluderer gudstro, ikke-religiøst gjør ikke det', 'Det er ingen forskjell', 'Ikke-religiøse tror på mange guder', 'Religiøse tror ikke på noe'],
          },
        ],
        solution: 'Religiøse livssyn inkluderer tro på en gud eller guder. Ikke-religiøse livssyn, som humanisme, tror ikke på noen gud.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva mener humanister?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er viktig for humanister?',
            solution: 'Menneskets verdi, å være gode mot hverandre, og å bruke fornuft',
            multipleChoiceOptions: ['Menneskets verdi, godhet og fornuft', 'Å tilbe mange guder', 'At livet er meningsløst', 'At bare de sterke overlever'],
          },
        ],
        solution: 'Humanister mener mennesket er verdifullt, at vi må være gode mot hverandre, og at vi kan bruke fornuft til å finne ut hva som er rett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Tenk over ditt eget livssyn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er én ting som er viktig for deg i livet? (For eksempel: familie, venner, naturen, å hjelpe andre)',
            solution: 'Personlig svar. Eksempler: Familie, venner, å være snill, naturen, å lære nye ting, å ha det gøy.',
            multipleChoiceOptions: ['Familie, venner, naturen eller å hjelpe andre', 'Ingenting er viktig', 'Bare penger', 'Bare meg selv'],
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig å respektere at andre kan ha et annet livssyn enn deg?',
            solution: 'Fordi alle har rett til å tenke og tro det de vil. Vi kan leve fredelig sammen selv om vi er uenige. Vi kan lære av hverandre.',
            multipleChoiceOptions: ['Alle har rett til egne tanker og tro, og vi kan lære av hverandre', 'Det er ikke viktig', 'Fordi alle må være enige', 'Fordi bare ett livssyn er riktig'],
          }
        ],
        hints: ['Tenk på hva som gjør deg glad', 'Tenk på hvordan du vil at andre skal behandle deg'],
        solution: 'Alle har rett til sitt eget livssyn, og vi må respektere hverandre selv om vi tror forskjellig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Store spørsmål
// ============================================================================

export const CHAPTER_KRLE_5_3_2: TextbookChapter = {
  id: 'krle-5-3-2',
  courseId: 'krle-5',
  chapterNumber: '3.2',
  title: 'Store spørsmål',
  description: 'Utforsk de store spørsmålene mennesker har stilt seg gjennom tidene.',
  estimatedMinutes: 35,
  competenceGoals: [
    'kunne samtale om eksistensielle spørsmål',
    'reflektere over ulike svar på livets store spørsmål'
  ],
  content: [
    {
      id: 'krle-5-3-2-intro',
      type: 'text',
      content: `
# Store spørsmål

Helt siden mennesker begynte å tenke, har de stilt seg store spørsmål.
Disse spørsmålene har ikke alltid enkle svar, og forskjellige mennesker
svarer ulikt. Det er helt greit!
      `
    },
    {
      id: 'krle-5-3-2-sporsmal',
      type: 'definition',
      title: 'Eksempler på store spørsmål',
      content: `Store spørsmål som mennesker lurer på:

- Hvordan ble verden til?
- Hvorfor finnes vi?
- Hva er meningen med livet?
- Finnes det en gud?
- Hva skjer når vi dør?
- Hvorfor finnes det ondskap i verden?
- Hva er lykke?

Disse kalles noen ganger **filosofiske spørsmål** eller **eksistensielle spørsmål**.`
    },
    {
      id: 'krle-5-3-2-verden',
      type: 'text',
      title: 'Hvordan ble verden til?',
      content: `
## Ulike svar på hvordan verden ble til

**Religiøse svar:**
- Mange religioner tror en gud eller guder skapte verden
- Kristne og jøder tror Gud skapte alt
- I hinduismen finnes det flere skapelsesfortellinger

**Vitenskapelig forklaring:**
- Vitenskapen sier universet startet med "Big Bang" for ca. 13,8 milliarder år siden
- Jorden er ca. 4,5 milliarder år gammel
- Livet utviklet seg gradvis over lang tid

Noen mener vitenskapen forklarer *hvordan*, mens religionen forklarer *hvorfor*.
      `
    },
    {
      id: 'krle-5-3-2-mening',
      type: 'text',
      title: 'Hva er meningen med livet?',
      content: `
## Hva er meningen med livet?

Dette er et spørsmål folk har tenkt på i tusenvis av år!

**Noen svar fra religioner:**
- Å følge Gud og gjøre godt (kristendom, islam, jødedom)
- Å nå opplysning og fred (buddhisme)
- Å leve i harmoni med universet (hinduisme)

**Noen ikke-religiøse svar:**
- Å være god mot andre og gjøre verden bedre
- Å finne glede og kjærlighet
- Å lære og oppleve nye ting
- Meningen er det du selv bestemmer at den skal være

Det finnes mange svar, og du får tenke på hva som gir mening for deg!
      `
    },
    {
      id: 'krle-5-3-2-filosofi',
      type: 'note',
      title: 'Å tenke selv',
      content: `**Filosofi** betyr "kjærlighet til visdom". Filosofer er mennesker som tenker dypt over de store spørsmålene.

Når du tenker over store spørsmål, er du en slags filosof!

**Tips til å tenke over store spørsmål:**
- Det er ingen dumme spørsmål
- Det er lov å si "jeg vet ikke"
- Du kan endre mening
- Det er fint å høre hva andre tenker
- Noen spørsmål har ikke ett riktig svar`
    },
    {
      id: 'krle-5-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et filosofisk spørsmål?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket av disse er et filosofisk/stort spørsmål?',
            solution: 'Hva er meningen med livet?',
            multipleChoiceOptions: ['Hva er meningen med livet?', 'Hva er klokka?', 'Hva skal vi ha til middag?', 'Hvor bor du?'],
          },
        ],
        solution: 'Filosofiske spørsmål handler om de store tingene i livet som ikke har enkle svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr ordet filosofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr filosofi?',
            solution: 'Kjærlighet til visdom',
            multipleChoiceOptions: ['Kjærlighet til visdom', 'Studiet av stjerner', 'Kunnskap om dyr', 'Læren om tall'],
          },
        ],
        solution: 'Filosofi kommer fra gresk og betyr "kjærlighet til visdom".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvordan forklarer religion og vitenskap at verden ble til?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier vitenskapen om hvordan universet startet?',
            solution: 'Big Bang - et stort smell for ca. 13,8 milliarder år siden',
            multipleChoiceOptions: ['Big Bang for ca. 13,8 milliarder år siden', 'En gud skapte alt', 'Verden har alltid eksistert', 'Ingenting vet vi om dette'],
          },
        ],
        solution: 'Vitenskapen sier universet startet med Big Bang. Religioner har ofte skapelsesfortellinger der en gud skaper verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Tenk over store spørsmål selv.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva tror du gjør mennesker lykkelige?',
            solution: 'Personlig svar. Eksempler: Å ha venner, å bli elsket, å hjelpe andre, å gjøre ting man liker, å være frisk, å ha nok mat og et sted å bo.',
            multipleChoiceOptions: ['Venner, kjærlighet, å hjelpe andre og gjøre det man liker', 'Bare penger', 'Å være alene', 'Å ha mye makt'],
          },
          {
            label: 'b',
            task: 'Finn på ditt eget store spørsmål. Skriv det ned og tenk over det.',
            solution: 'Personlig svar. Eksempler: Hva ville skjedd hvis...? Hvorfor er...? Hva er...? Er det mulig at...?',
            multipleChoiceOptions: ['Et spørsmål om noe stort og viktig i livet', 'Et spørsmål om mat', 'Et regnestykke', 'Et spørsmål om klær'],
          }
        ],
        hints: ['Tenk på hva som gjør deg glad', 'Store spørsmål begynner ofte med "hvorfor" eller "hva er"'],
        solution: 'Å tenke over store spørsmål er noe alle mennesker gjør. Det finnes ofte ikke ett riktig svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Rett og galt
// ============================================================================

export const CHAPTER_KRLE_5_4_1: TextbookChapter = {
  id: 'krle-5-4-1',
  courseId: 'krle-5',
  chapterNumber: '4.1',
  title: 'Rett og galt',
  description: 'Lær om etikk og hvordan vi vet hva som er rett og galt.',
  estimatedMinutes: 35,
  competenceGoals: [
    'kunne reflektere over hva som er rett og galt',
    'samtale om etiske spørsmål'
  ],
  content: [
    {
      id: 'krle-5-4-1-intro',
      type: 'text',
      content: `
# Rett og galt

Hver dag må vi ta valg. Noen valg er enkle: "Skal jeg ha frokost?"
Andre valg er vanskeligere: "Skal jeg si fra hvis jeg ser noen bli mobbet?"
Å tenke på hva som er rett og galt kalles **etikk**.
      `
    },
    {
      id: 'krle-5-4-1-def-etikk',
      type: 'definition',
      title: 'Etikk og moral',
      content: `**Etikk** er å tenke over hva som er rett og galt.

**Moral** er det vi faktisk gjør - våre handlinger.

Eksempel:
- Etikk: "Er det galt å lyve?"
- Moral: "Jeg velger å fortelle sannheten"

Alle har en slags indre stemme som hjelper oss å vite hva som er rett.
Denne kalles noen ganger **samvittigheten**.`
    },
    {
      id: 'krle-5-4-1-gylne',
      type: 'text',
      title: 'Den gylne regel',
      content: `
## Den gylne regel

"Gjør mot andre det du vil at andre skal gjøre mot deg."

Denne regelen finnes i nesten alle religioner og kulturer:

- **Kristendommen**: "Alt dere vil at andre skal gjøre mot dere, det skal dere gjøre mot dem"
- **Islam**: "Ingen er en troende før han ønsker for sin bror det han ønsker for seg selv"
- **Jødedommen**: "Det du selv hater, skal du ikke gjøre mot andre"
- **Buddhisme**: "Sår ikke andre med det som sårer deg selv"

Denne regelen er en enkel guide til å være god mot andre!
      `
    },
    {
      id: 'krle-5-4-1-valg',
      type: 'text',
      title: 'Å ta gode valg',
      content: `
## Hvordan tar vi gode valg?

Når du må velge, kan du spørre deg selv:

1. **Hva føles riktig?** Hør på samvittigheten din.

2. **Hva ville skjedd hvis alle gjorde dette?**
   Hvis alle løy, ville ingen stole på hverandre.

3. **Hvordan ville jeg følt det hvis noen gjorde dette mot meg?**
   Bruk den gylne regel.

4. **Hva ville en voksen jeg stoler på si?**
   Foreldre, lærere eller andre kan gi gode råd.

Noen ganger er valget vanskelig. Da er det viktig å tenke seg om.
      `
    },
    {
      id: 'krle-5-4-1-eksempel',
      type: 'example',
      title: 'Eksempel: Et vanskelig valg',
      problem: 'Du finner 100 kroner på skolegården. Ingen ser deg. Hva gjør du?',
      solution: `**Mulige valg:**
1. Beholde pengene selv
2. Levere dem til en voksen
3. Forsøke å finne ut hvem som mistet dem

**Tenk over:**
- Hvordan ville du følt det hvis du mistet 100 kroner og noen beholdt dem?
- Hva ville skjedd hvis alle beholdt penger de fant?
- Hva føles riktig?

Mange ville si det riktige er å levere pengene til en voksen, så den som mistet dem kan få dem tilbake.`
    },
    {
      id: 'krle-5-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er etikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er etikk?',
            solution: 'Å tenke over hva som er rett og galt',
            multipleChoiceOptions: ['Å tenke over hva som er rett og galt', 'En type sport', 'Regler i skolen', 'En religion'],
          },
        ],
        solution: 'Etikk handler om å tenke over hva som er rett og galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva sier den gylne regel?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier den gylne regel?',
            solution: 'Gjør mot andre det du vil at andre skal gjøre mot deg',
            multipleChoiceOptions: ['Gjør mot andre det du vil at andre skal gjøre mot deg', 'Den sterkeste bestemmer', 'Gjør det som er best for deg selv', 'Alle skal være like'],
          },
        ],
        solution: 'Den gylne regel sier at vi skal behandle andre slik vi selv vil bli behandlet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er samvittigheten?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med samvittighet?',
            solution: 'En indre følelse som hjelper oss å vite hva som er rett og galt',
            multipleChoiceOptions: ['En indre følelse som hjelper oss å vite hva som er rett', 'Evnen til å huske ting', 'Å kunne regne', 'En type sykdom'],
          },
        ],
        solution: 'Samvittigheten er den indre stemmen som forteller oss hva som er rett og galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Tenk over et vanskelig valg.',
        subTasks: [
          {
            label: 'a',
            task: 'En venn ber deg lyve for seg til foreldrene sine. Hva ville du gjort, og hvorfor?',
            solution: 'Personlig svar. Viktig å tenke over: Å lyve føles ofte galt. Venner bør ikke sette hverandre i vanskelige situasjoner. Man kan si nei og fortsatt være venner.',
            multipleChoiceOptions: ['Si nei til å lyve, men fortsatt være venn', 'Alltid gjøre som venner sier', 'Aldri snakke med vennen igjen', 'Det spiller ingen rolle'],
          },
          {
            label: 'b',
            task: 'Bruk den gylne regel: Hvordan ville du følt det hvis noen løy for deg?',
            solution: 'De fleste ville følt seg såret og skuffet hvis noen løy for dem. Derfor er det best å ikke lyve for andre.',
            multipleChoiceOptions: ['Jeg ville følt meg såret og skuffet', 'Det ville vært helt greit', 'Jeg ville blitt glad', 'Jeg ville ikke merket det'],
          }
        ],
        hints: ['Tenk på hvordan du selv ville følt det', 'Hva ville skjedd hvis du ble tatt i å lyve?'],
        solution: 'Vanskelige valg krever at vi tenker oss om og bruker den gylne regel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Vennskap og respekt
// ============================================================================

export const CHAPTER_KRLE_5_4_2: TextbookChapter = {
  id: 'krle-5-4-2',
  courseId: 'krle-5',
  chapterNumber: '4.2',
  title: 'Vennskap og respekt',
  description: 'Lær om vennskap, respekt og hvordan vi behandler hverandre.',
  estimatedMinutes: 35,
  competenceGoals: [
    'kunne samtale om vennskap og respekt',
    'reflektere over hvordan vi behandler hverandre'
  ],
  content: [
    {
      id: 'krle-5-4-2-intro',
      type: 'text',
      content: `
# Vennskap og respekt

Mennesker trenger hverandre. Vi trenger venner å le med, snakke med og dele
opplevelser med. Og for å ha gode vennskap trenger vi å vise **respekt**
for hverandre.
      `
    },
    {
      id: 'krle-5-4-2-def-vennskap',
      type: 'definition',
      title: 'Hva er vennskap?',
      content: `**Vennskap** er et forhold mellom mennesker som bryr seg om hverandre.

Gode venner:
- Liker å være sammen
- Støtter hverandre
- Er ærlige mot hverandre
- Respekterer hverandre
- Tilgir hverandre når noe går galt
- Aksepterer at de er forskjellige

Vennskap må pleies - man må bruke tid på det og være en god venn selv.`
    },
    {
      id: 'krle-5-4-2-respekt',
      type: 'text',
      title: 'Respekt',
      content: `
## Hva er respekt?

**Respekt** betyr å behandle andre på en verdig måte. Det betyr å:

- Lytte når andre snakker
- Ikke snakke stygt om eller til andre
- Akseptere at andre er forskjellige fra deg
- Ikke mobbe eller erte
- La andre være seg selv
- Behandle andre slik du vil bli behandlet

Alle mennesker fortjener respekt - uansett hvem de er, hvordan de ser ut,
eller hva de tror på.
      `
    },
    {
      id: 'krle-5-4-2-forskjeller',
      type: 'text',
      title: 'Vi er alle forskjellige',
      content: `
## Å være forskjellige

Alle mennesker er unike. Vi er forskjellige på mange måter:
- Utseende
- Interesser
- Religion eller livssyn
- Kultur og tradisjon
- Personlighet
- Familie

**Det er bra at vi er forskjellige!**
- Vi kan lære av hverandre
- Verden blir mer interessant
- Alle har noe å bidra med

Respekt betyr å akseptere og verdsette at andre er annerledes enn deg.
      `
    },
    {
      id: 'krle-5-4-2-mobbing',
      type: 'note',
      title: 'Om mobbing',
      content: `**Mobbing** er når noen plager en annen person flere ganger over tid.

Mobbing kan være:
- Å si stygge ting
- Å fryse noen ut av gruppa
- Å spre rykter
- Å slå eller dytte
- Å mobbe på internett (nettmobbing)

**Hva kan du gjøre?**
- Ikke vær med på å mobbe
- Si fra til en voksen hvis du ser mobbing
- Vær vennlig mot den som blir mobbet
- Inkluder andre som er alene

Alle har rett til å ha det trygt og godt!`
    },
    {
      id: 'krle-5-4-2-tilgivelse',
      type: 'text',
      title: 'Tilgivelse',
      content: `
## Å tilgi og be om unnskyldning

Noen ganger gjør vi feil og sårer andre. Da er det viktig å:

1. **Be om unnskyldning**: Si at du er lei deg og mente ikke å såre.

2. **Mene det**: En ekte unnskyldning kommer fra hjertet.

3. **Prøve å gjøre det bedre**: Vis at du har lært av feilen.

**Å tilgi** betyr å slippe sinnet mot den som har såret deg.
- Det betyr ikke at det som skjedde var greit
- Det hjelper deg å gå videre
- Det kan reparere et vennskap

Tilgivelse er viktig i mange religioner og livssyn.
      `
    },
    {
      id: 'krle-5-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er respekt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er respekt?',
            solution: 'Å behandle andre på en verdig og god måte',
            multipleChoiceOptions: ['Å behandle andre på en verdig og god måte', 'Å alltid være enig med andre', 'Å gjøre alt andre sier', 'Å vinne over andre'],
          },
        ],
        solution: 'Respekt er å behandle andre verdig - lytte til dem, ikke snakke stygt, og akseptere at de er forskjellige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner et godt vennskap?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner gode venner?',
            solution: 'De støtter hverandre, er ærlige, respekterer hverandre og tilgir',
            multipleChoiceOptions: ['De støtter hverandre, er ærlige og respekterer hverandre', 'De gjør alltid det den ene vil', 'De er alltid enige om alt', 'De gir hverandre gaver hele tiden'],
          },
        ],
        solution: 'Gode venner bryr seg om hverandre, støtter hverandre og respekterer at de kan være forskjellige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva kan du gjøre hvis du ser noen bli mobbet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du gjøre?',
            solution: 'Si fra til en voksen, være vennlig mot den som mobbes, ikke være med på mobbingen',
            multipleChoiceOptions: ['Si fra til en voksen og være vennlig mot den som mobbes', 'Late som du ikke ser det', 'Bli med på mobbingen', 'Mobbe tilbake'],
          },
        ],
        solution: 'Du kan si fra til en voksen, støtte den som blir mobbet, og sørge for å ikke være med på mobbingen selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-5-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-5-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Tenk over vennskap og tilgivelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig å akseptere at venner er forskjellige fra deg?',
            solution: 'Fordi alle er unike, vi kan lære av hverandre, og vennskap handler om å akseptere den andre som den er. Forskjeller gjør livet interessant.',
            multipleChoiceOptions: ['Alle er unike og vi kan lære av hverandre', 'Det er ikke viktig', 'Alle venner må være like', 'Forskjeller ødelegger vennskap'],
          },
          {
            label: 'b',
            task: 'Har du opplevd å tilgi noen eller å bli tilgitt? Hvordan føltes det?',
            solution: 'Personlig svar. Å tilgi kan føles lettende - man slipper å gå rundt og være sint. Å bli tilgitt føles godt fordi man får en ny sjanse.',
            multipleChoiceOptions: ['Det føltes godt og lettende', 'Det føltes dårlig', 'Jeg har aldri tilgitt noen', 'Tilgivelse er unødvendig'],
          }
        ],
        hints: ['Tenk på hva som gjør et vennskap godt', 'Tenk på hvordan det føles å være sint lenge'],
        solution: 'Vennskap og tilgivelse er viktig for at vi skal ha det bra sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const KRLE_5_CHAPTERS = [
  CHAPTER_KRLE_5_1_1,
  CHAPTER_KRLE_5_1_2,
  CHAPTER_KRLE_5_2_1,
  CHAPTER_KRLE_5_2_2,
  CHAPTER_KRLE_5_3_1,
  CHAPTER_KRLE_5_3_2,
  CHAPTER_KRLE_5_4_1,
  CHAPTER_KRLE_5_4_2,
];

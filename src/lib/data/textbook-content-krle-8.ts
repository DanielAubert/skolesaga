/**
 * Tekstbok innhold for KRLE 8. klasse
 *
 * Følger LK20 læreplan for KRLE (Kristendom, religion, livssyn og etikk) ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Kristendommen
// ============================================================================

export const CHAPTER_KRLE_8_1_1: TextbookChapter = {
  id: 'krle-8-1-1',
  courseId: 'krle-8',
  chapterNumber: '1.1',
  title: 'Kristendommen',
  description: 'Lær om kristendommens historie, trosinnhold og praksis.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive sentrale fortellinger og trosinnhold i kristendommen'
  ],
  content: [
    {
      id: 'krle-8-1-1-intro',
      type: 'text',
      content: `
# Kristendommen

Kristendommen er verdens største religion med over 2 milliarder tilhengere.
Den har sitt opphav i Midtøsten for ca. 2000 år siden og er basert på troen
på Jesus Kristus som Guds sønn og menneskenes frelser.
      `
    },
    {
      id: 'krle-8-1-1-def-tro',
      type: 'definition',
      title: 'Sentrale trosforestillinger',
      content: `Kristne tror på:

- **Én Gud** som har skapt verden
- **Treenigheten**: Gud som Fader, Sønn (Jesus) og Hellig Ånd
- **Jesus Kristus**: Guds sønn som ble menneske
- **Frelse**: Gjennom tro på Jesus får mennesker evig liv
- **Bibelen**: Den hellige skriften med Det gamle og Det nye testamente`
    },
    {
      id: 'krle-8-1-1-jesus',
      type: 'text',
      title: 'Jesus fra Nasaret',
      content: `
## Jesus Kristus

Kristne tror at Jesus var:
- Født av jomfru Maria i Betlehem
- Både Gud og menneske
- En lærer og helbreder
- Korsfestet og døde for menneskers synder
- Stod opp fra de døde (oppstandelsen)
- Fór opp til himmelen

**Påske** feirer Jesu død og oppstandelse.
**Jul** feirer Jesu fødsel.
      `
    },
    {
      id: 'krle-8-1-1-retninger',
      type: 'text',
      title: 'Kristne retninger',
      content: `
## De tre hovedretningene

**Katolisisme** (ca. 1,3 milliarder)
- Paven er øverste leder
- Tradisjon og Bibelen er viktige
- 7 sakramenter

**Protestantisme** (ca. 800 millioner)
- Oppsto med reformasjonen (1517)
- Bibelen alene er autoritet
- Den norske kirke er luthersk

**Ortodoks kristendom** (ca. 250 millioner)
- Sterk i Øst-Europa og Russland
- Rike ikoner og liturgi
- Patriarker leder kirkene
      `
    },
    {
      id: 'krle-8-1-1-praksis',
      type: 'note',
      title: 'Kristen praksis',
      content: `Vanlige praksiser for kristne:
- **Gudstjeneste**: Samling til bønn og forkynnelse
- **Bønn**: Kommunikasjon med Gud
- **Dåp**: Inngangsritual til kirken
- **Nattverd**: Minnes Jesu siste måltid
- **Høytider**: Jul, påske, pinse`
    },
    {
      id: 'krle-8-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva feirer kristne i påsken?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva feirer kristne i påsken?',
            solution: 'Jesu død og oppstandelse',
            multipleChoiceOptions: ['Jesu død og oppstandelse', 'Jesu fødsel', 'Den hellige ånds komme', 'Skapelsen av verden'],
          },
        ],
        solution: 'Påsken feirer at Jesus døde på korset og stod opp igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med treenigheten?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med treenigheten?',
            solution: 'Gud som Fader, Sønn og Hellig Ånd',
            multipleChoiceOptions: ['Gud som Fader, Sønn og Hellig Ånd', 'Tre forskjellige guder', 'Jesus, Maria og Josef', 'Himmel, jord og helvete'],
          },
        ],
        solution: 'Treenigheten er læren om at Gud er én, men åpenbarer seg som Fader, Sønn og Hellig Ånd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken kristen retning ledes av paven?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken kristen retning ledes av paven?',
            solution: 'Katolisisme',
            multipleChoiceOptions: ['Katolisisme', 'Protestantisme', 'Ortodoks kristendom', 'Den norske kirke'],
          },
        ],
        solution: 'Paven i Roma er leder for den katolske kirke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk kristendommen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva kristne mener med at Jesus er "frelser".',
            solution: 'Kristne tror at Jesus døde for menneskers synder og at tro på ham gir evig liv. Ved sin død "frelste" han menneskene fra synd og død.',
            multipleChoiceOptions: ['Kristne tror at Jesus døde for menneskers synder og at tro på ham gir evig liv', 'Jesus var en politisk leder som frelste Israel', 'Frelse betyr å bli rik og suksessfull', 'Jesus lærte folk å frelse seg selv'],
          },
          {
            label: 'b',
            task: 'Nevn to forskjeller mellom katolisisme og protestantisme.',
            solution: 'Eksempler: 1) Katolikker har paven som leder, protestanter har ikke. 2) Katolikker legger vekt på tradisjon i tillegg til Bibelen, protestanter vektlegger Bibelen alene. 3) Forskjell i antall sakramenter.',
            multipleChoiceOptions: ['Paven som leder og synet på tradisjon vs. Bibelen alene', 'De tror på forskjellige guder', 'De feirer ulike høytider', 'De har forskjellige hellige bøker'],
          }
        ],
        hints: ['Tenk på hva "frelse" betyr', 'Reformasjonen skapte skillet'],
        solution: 'Kristendommen har mange felles trekk, men også viktige forskjeller mellom retningene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Islam
// ============================================================================

export const CHAPTER_KRLE_8_1_2: TextbookChapter = {
  id: 'krle-8-1-2',
  courseId: 'krle-8',
  chapterNumber: '1.2',
  title: 'Islam',
  description: 'Lær om islams historie, trosinnhold og praksis.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive sentrale fortellinger og trosinnhold i islam'
  ],
  content: [
    {
      id: 'krle-8-1-2-intro',
      type: 'text',
      content: `
# Islam

Islam er verdens nest største religion med ca. 1,8 milliarder tilhengere, kalt
**muslimer**. Religionen oppsto på 600-tallet på Den arabiske halvøy og er
basert på profeten Muhammads forkynnelse.
      `
    },
    {
      id: 'krle-8-1-2-def-tro',
      type: 'definition',
      title: 'Sentrale trosforestillinger',
      content: `Muslimer tror på:

- **Allah**: Den ene Gud (samme Gud som i jødedom og kristendom)
- **Profetene**: Muhammad er den siste, men også Adam, Abraham, Moses og Jesus
- **Koranen**: Guds ord åpenbart til Muhammad
- **Dommedag**: Alle skal stå til rette for sine handlinger
- **Engler**: Guds budbærere`
    },
    {
      id: 'krle-8-1-2-muhammad',
      type: 'text',
      title: 'Profeten Muhammad',
      content: `
## Muhammad (570-632)

- Født i Mekka
- Fikk åpenbaringer fra Gud gjennom engelen Jibril (Gabriel)
- Flyktet til Medina i 622 (hijra) - islams år 0
- Samlet araberne under islam
- Døde i Medina

Muhammad regnes som det perfekte forbilde for hvordan en muslim skal leve.
      `
    },
    {
      id: 'krle-8-1-2-soylene',
      type: 'definition',
      title: 'De fem søylene',
      content: `Islams fem grunnpilarer:

1. **Shahada** - Trosbekjennelsen: "Det er ingen gud uten Allah, og Muhammad er hans profet"

2. **Salat** - Bønn fem ganger daglig, vendt mot Mekka

3. **Zakat** - Almisse, gi til de fattige

4. **Sawm** - Faste i måneden ramadan

5. **Hajj** - Pilegrimsreise til Mekka (minst én gang i livet)`
    },
    {
      id: 'krle-8-1-2-retninger',
      type: 'text',
      title: 'Retninger i islam',
      content: `
## Sunni og shia

**Sunni** (ca. 85%)
- Følger tradisjonen (sunna)
- Anerkjenner de fire første kalifene

**Shia** (ca. 15%)
- Mener Ali (Muhammads svigersønn) skulle ledet
- Imamer har spesiell autoritet
- Dominerer i Iran og Irak
      `
    },
    {
      id: 'krle-8-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-2-ex1',
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
        solution: 'Koranen er islams hellige bok, som muslimer tror inneholder Guds ord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hijra?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hijra?',
            solution: 'Muhammads flukt fra Mekka til Medina',
            multipleChoiceOptions: ['Muhammads flukt fra Mekka til Medina', 'En type bønn', 'Fasten i ramadan', 'En pilegrimsreise'],
          },
        ],
        solution: 'Hijra (622 e.Kr.) er Muhammads flukt til Medina og markerer starten på islamsk tidsregning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvor mange ganger om dagen ber muslimer?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange ganger om dagen ber muslimer?',
            solution: 'Fem ganger',
            multipleChoiceOptions: ['Fem ganger', 'Én gang', 'Tre ganger', 'Syv ganger'],
          },
        ],
        solution: 'Muslimer ber fem ganger daglig (salat), vendt mot Mekka.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-8-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk islam.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som skjer under ramadan.',
            solution: 'Ramadan er den niende måneden i islamsk kalender. Muslimer faster fra soloppgang til solnedgang - de spiser og drikker ikke. Fasten brytes med iftar-måltidet om kvelden. Ramadan avsluttes med høytiden id al-fitr.',
            multipleChoiceOptions: ['Muslimer faster fra soloppgang til solnedgang i én måned', 'Muslimer reiser til Mekka', 'Muslimer gir bort alle eiendelene sine', 'Muslimer ber ti ganger om dagen'],
          },
          {
            label: 'b',
            task: 'Hvorfor er Mekka viktig for muslimer?',
            solution: 'Mekka er byen der Muhammad ble født og der Kabaen (det helligste stedet i islam) ligger. Muslimer vender seg mot Mekka når de ber, og alle skal forsøke å reise dit på pilegrimsreise (hajj) minst én gang i livet.',
            multipleChoiceOptions: ['Muhammads fødeby og stedet for Kabaen', 'Det er hovedstaden i Saudi-Arabia', 'Der ble Koranen skrevet', 'Det er der muslimer begraves'],
          }
        ],
        hints: ['Ramadan er en fastemåned', 'Mekka har både historisk og religiøs betydning'],
        solution: 'Islam har tydelige praksiser som binder muslimer sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Buddhisme og hinduisme
// ============================================================================

export const CHAPTER_KRLE_8_2_1: TextbookChapter = {
  id: 'krle-8-2-1',
  courseId: 'krle-8',
  chapterNumber: '2.1',
  title: 'Buddhisme og hinduisme',
  description: 'Lær om de store østlige religionene og deres syn på livet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive sentrale fortellinger og trosinnhold i buddhisme og hinduisme'
  ],
  content: [
    {
      id: 'krle-8-2-1-intro',
      type: 'text',
      content: `
# Buddhisme og hinduisme

Buddhisme og hinduisme har røtter i India og deler noen grunnleggende ideer,
som reinkarnasjon og karma. De skiller seg fra vestlige religioner på flere måter.
      `
    },
    {
      id: 'krle-8-2-1-hinduisme',
      type: 'text',
      title: 'Hinduisme',
      content: `
## Hinduisme (ca. 1 milliard tilhengere)

- Ingen bestemt grunnlegger, utviklet over tusenvis av år
- Mange guder, men mange ser dem som uttrykk for én virkelighet (Brahman)
- Viktige guder: Brahma (skaper), Vishnu (opprettholder), Shiva (ødelegger/fornyer)

**Sentrale begreper:**
- **Karma**: Handlinger har konsekvenser, godt og ondt
- **Samsara**: Gjenfødelsens hjul
- **Moksha**: Frigjøring fra gjenfødelse
      `
    },
    {
      id: 'krle-8-2-1-buddhisme',
      type: 'text',
      title: 'Buddhisme',
      content: `
## Buddhisme (ca. 500 millioner tilhengere)

Grunnlagt av **Siddharta Gautama** (Buddha) ca. 500 f.Kr.

Buddha lærte de **fire edle sannheter**:
1. Livet innebærer lidelse (dukkha)
2. Lidelse skyldes begjær og uvitenhet
3. Det er mulig å bli fri fra lidelse
4. Veien til frihet er den **åttefoldige veien**

Målet er å nå **nirvana** - frigjøring fra lidelse og gjenfødelse.
      `
    },
    {
      id: 'krle-8-2-1-attefold',
      type: 'definition',
      title: 'Den åttefoldige veien',
      content: `Buddhas vei til frigjøring:

1. Riktig forståelse
2. Riktig hensikt
3. Riktig tale
4. Riktig handling
5. Riktig livsførsel
6. Riktig anstrengelse
7. Riktig oppmerksomhet
8. Riktig konsentrasjon (meditasjon)`
    },
    {
      id: 'krle-8-2-1-karma',
      type: 'definition',
      title: 'Karma og gjenfødelse',
      content: `**Karma** (finnes i både hinduisme og buddhisme):
- Alle handlinger har konsekvenser
- Gode handlinger gir god karma
- Dårlige handlinger gir dårlig karma
- Karma påvirker neste liv

**Gjenfødelse** (reinkarnasjon):
- Sjelen/bevisstheten fødes på nytt etter døden
- Hvilken form avhenger av karma
- Målet er å bryte ut av syklusen`
    },
    {
      id: 'krle-8-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-8-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles grunnleggeren av buddhismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kalles grunnleggeren av buddhismen?',
            solution: 'Buddha (Siddharta Gautama)',
            multipleChoiceOptions: ['Buddha (Siddharta Gautama)', 'Muhammad', 'Krishna', 'Konfucius'],
          },
        ],
        solution: 'Buddha (Siddharta Gautama) grunnla buddhismen ca. 500 f.Kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-8-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er karma?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er karma?',
            solution: 'Læren om at handlinger har konsekvenser',
            multipleChoiceOptions: ['Læren om at handlinger har konsekvenser', 'En type meditasjon', 'En gud i hinduismen', 'Navnet på en hellig bok'],
          },
        ],
        solution: 'Karma betyr at alle handlinger har konsekvenser - gode eller dårlige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-8-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er nirvana i buddhismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er nirvana i buddhismen?',
            solution: 'Frigjøring fra lidelse og gjenfødelse',
            multipleChoiceOptions: ['Frigjøring fra lidelse og gjenfødelse', 'Et paradis etter døden', 'En god karma', 'En meditasjonsteknikk'],
          },
        ],
        solution: 'Nirvana er den endelige frigjøringen fra lidelse og syklusen av gjenfødelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-8-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign buddhisme og hinduisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn to likheter mellom buddhisme og hinduisme.',
            solution: 'Begge tror på karma (handlinger har konsekvenser) og gjenfødelse/reinkarnasjon. Begge har sitt opphav i India. Begge har frigjøring fra gjenfødelse som mål.',
            multipleChoiceOptions: ['Begge tror på karma og gjenfødelse', 'Begge har paven som leder', 'Begge forbyr kjøtt', 'Begge har bare én gud'],
          },
          {
            label: 'b',
            task: 'Nevn to forskjeller mellom buddhisme og hinduisme.',
            solution: 'Hinduisme har mange guder, buddhisme har ikke guder i sentrum. Hinduisme har kastesystem, buddhisme avviser det. Buddhisme har en grunnlegger (Buddha), hinduisme har ikke.',
            multipleChoiceOptions: ['Hinduisme har mange guder, buddhisme har ikke guder i sentrum', 'De har ulike hellige bøker men samme guder', 'Buddhisme er eldre enn hinduisme', 'Hinduisme ble grunnlagt av Buddha'],
          }
        ],
        hints: ['Tenk på karma og gjenfødelse', 'Tenk på guder og grunnleggere'],
        solution: 'Buddhisme og hinduisme deler mye, men har viktige forskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Etikk og moral
// ============================================================================

export const CHAPTER_KRLE_8_3_1: TextbookChapter = {
  id: 'krle-8-3-1',
  courseId: 'krle-8',
  chapterNumber: '3.1',
  title: 'Etikk og moral',
  description: 'Lær om etiske teorier og hvordan vi tar moralske valg.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over eksistensielle spørsmål og etiske dilemmaer'
  ],
  content: [
    {
      id: 'krle-8-3-1-intro',
      type: 'text',
      content: `
# Etikk og moral

**Etikk** er læren om hva som er rett og galt.
**Moral** er våre faktiske oppfatninger om rett og galt.

Vi står ofte overfor valg der vi må tenke gjennom hva som er riktig å gjøre.
      `
    },
    {
      id: 'krle-8-3-1-def-etikk',
      type: 'definition',
      title: 'Etikk vs. moral',
      content: `**Etikk**: Systematisk tenkning om rett og galt. Filosofisk refleksjon.

**Moral**: Praktiske oppfatninger om rett og galt i samfunnet eller hos individet.

Eksempel: Det er et *moralsk* spørsmål om du synes juks er galt.
*Etikk* spør: Hvorfor er juks galt? Hva gjør en handling riktig?`
    },
    {
      id: 'krle-8-3-1-teorier',
      type: 'text',
      title: 'Etiske teorier',
      content: `
## Hovedretninger i etikken

**Konsekvensetikk (utilitarisme)**:
- En handling er riktig hvis den gir best mulige konsekvenser
- "Størst mulig lykke for flest mulig"

**Pliktetikk**:
- Noen handlinger er riktige eller gale i seg selv
- Handler om prinsipper, ikke konsekvenser
- Kants kategoriske imperativ: "Handle slik at du kan ville at regelen blir allmenn"

**Dydsetikk**:
- Fokuserer på karaktertrekk og dyder
- Spør: "Hva ville et godt menneske gjøre?"
- Viktige dyder: Mot, rettferdighet, måtehold, visdom
      `
    },
    {
      id: 'krle-8-3-1-dilemma',
      type: 'example',
      title: 'Etisk dilemma',
      problem: 'Du ser at en venn jukser på en prøve. Bør du si fra til læreren?',
      solution: `**Konsekvensetikk**: Hva gir best konsekvenser? Å si fra kan ødelegge vennskapet, men tillater juks. Å tie gjør at vennen kanskje fortsetter.

**Pliktetikk**: Er det en plikt å være ærlig? Å rapportere juks kan sees som å følge regler. Men man har også lojalitet til venner.

**Dydsetikk**: Hva ville en person med gode dyder gjøre? En modig person ville kanskje konfrontere vennen direkte først.

Det finnes ofte ikke ett "riktig" svar - det viktige er å reflektere grundig.`
    },
    {
      id: 'krle-8-3-1-gyldne',
      type: 'definition',
      title: 'Den gylne regel',
      content: `"Gjør mot andre det du vil at andre skal gjøre mot deg."

Denne regelen finnes i de fleste religioner og kulturer:
- Kristendommen: "Alt dere vil at andre skal gjøre mot dere, det skal dere gjøre mot dem"
- Islam: "Ingen av dere er troende før han ønsker for sin bror det han ønsker for seg selv"
- Buddhisme: "Skad ikke andre med det som sårer deg selv"`
    },
    {
      id: 'krle-8-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er etikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er etikk?',
            solution: 'Læren om rett og galt',
            multipleChoiceOptions: ['Læren om rett og galt', 'Regler i en religion', 'Lover i samfunnet', 'Folks følelser'],
          },
        ],
        solution: 'Etikk er systematisk tenkning om hva som er rett og galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Konsekvensetikk mener at en handling er riktig hvis:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør en handling riktig ifølge konsekvensetikk?',
            solution: 'Den gir best mulige konsekvenser',
            multipleChoiceOptions: ['Den gir best mulige konsekvenser', 'Den følger Guds vilje', 'Den følger lover og regler', 'Den føles riktig'],
          },
        ],
        solution: 'Konsekvensetikk (utilitarisme) bedømmer handlinger etter deres konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva sier den gylne regel?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier den gylne regel?',
            solution: 'Gjør mot andre det du vil at andre skal gjøre mot deg',
            multipleChoiceOptions: ['Gjør mot andre det du vil at andre skal gjøre mot deg', 'Den sterkeste har alltid rett', 'Målet helliger midlet', 'Følg alltid loven'],
          },
        ],
        solution: 'Den gylne regel oppfordrer oss til å behandle andre slik vi selv ønsker å bli behandlet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser et etisk dilemma.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv et etisk dilemma du har opplevd eller hørt om.',
            solution: 'Eksempler: Lyve for å beskytte noen, bryte en regel for å hjelpe, velge mellom to venner.',
            multipleChoiceOptions: ['Å måtte velge mellom ærlighet og lojalitet', 'Å velge hvilken film man skal se', 'Å bestemme hva man skal spise', 'Å velge hvilken bok man skal lese'],
          },
          {
            label: 'b',
            task: 'Analyser dilemmaet med både konsekvensetikk og pliktetikk. Hva ville hver retning anbefale?',
            solution: 'Konsekvensetikk: Vurder konsekvensene av hver handling - hva gir best resultat totalt? Pliktetikk: Er det noen prinsipper du ikke bør bryte uansett konsekvenser?',
            multipleChoiceOptions: ['Konsekvensetikk ser på resultater, pliktetikk ser på prinsipper', 'Begge sier det samme', 'Ingen av dem kan brukes på dilemmaer', 'Pliktetikk bryr seg bare om følelser'],
          }
        ],
        hints: ['Et dilemma har minst to mulige valg', 'Tenk på både konsekvenser og prinsipper'],
        solution: 'Etiske dilemmaer har sjelden enkle svar - det viktige er å reflektere grundig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Filosofi og kritisk tenkning
// ============================================================================

export const CHAPTER_KRLE_8_3_2: TextbookChapter = {
  id: 'krle-8-3-2',
  courseId: 'krle-8',
  chapterNumber: '3.2',
  title: 'Filosofi og kritisk tenkning',
  description: 'Lær om filosofiske spørsmål og hvordan tenke kritisk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over eksistensielle spørsmål'
  ],
  content: [
    {
      id: 'krle-8-3-2-intro',
      type: 'text',
      content: `
# Filosofi og kritisk tenkning

**Filosofi** betyr "kjærlighet til visdom". Filosofer stiller store spørsmål
om livet, virkeligheten og hvordan vi bør leve. Kritisk tenkning hjelper oss
å vurdere påstander og argumenter.
      `
    },
    {
      id: 'krle-8-3-2-sporsmal',
      type: 'text',
      title: 'Filosofiske spørsmål',
      content: `
## Store spørsmål

**Metafysikk** - Hva er virkelighet?
- Finnes Gud?
- Har vi fri vilje?
- Hva er bevissthet?

**Erkjennelsesteori** - Hva kan vi vite?
- Hva er sannhet?
- Hvordan får vi kunnskap?

**Etikk** - Hva bør vi gjøre?
- Hva er rettferdighet?
- Hva er et godt liv?
      `
    },
    {
      id: 'krle-8-3-2-kritisk',
      type: 'definition',
      title: 'Kritisk tenkning',
      content: `**Kritisk tenkning** er å vurdere informasjon og argumenter på en logisk og reflektert måte.

Det innebærer å:
- Stille spørsmål ved påstander
- Se etter bevis
- Vurdere kilder
- Gjenkjenne feilslutninger
- Være åpen for å endre mening`
    },
    {
      id: 'krle-8-3-2-feilslutninger',
      type: 'text',
      title: 'Vanlige feilslutninger',
      content: `
## Logiske feilslutninger å unngå

**Personangrep**: Angriper personen, ikke argumentet
- "Du tar feil fordi du er ung."

**Appell til flertallet**: Mange mener det, så det må være sant
- "Alle gjør det, så det er greit."

**Falsk dikotomi**: Bare to alternativer presenteres
- "Enten er du med oss, eller mot oss."

**Stråmann**: Vrenger motstanderens argument
- Noen sier X, du later som de sa Y og angriper Y.
      `
    },
    {
      id: 'krle-8-3-2-sokrates',
      type: 'note',
      title: 'Sokrates\' metode',
      content: `**Sokrates** (469-399 f.Kr.) regnes som filosofiens far.

Han brukte spørsmål for å hjelpe folk tenke dypere - den **sokratiske metoden**.

I stedet for å gi svar, stilte han spørsmål som:
- "Hva mener du med det?"
- "Hvordan vet du det?"
- "Hva følger av det?"

Dette tvang folk til å undersøke sine egne antakelser.`
    },
    {
      id: 'krle-8-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr filosofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr filosofi?',
            solution: 'Kjærlighet til visdom',
            multipleChoiceOptions: ['Kjærlighet til visdom', 'Studiet av naturen', 'Kunnskap om fortiden', 'Tro på Gud'],
          },
        ],
        solution: 'Filosofi kommer fra gresk: philos (kjærlighet) + sophia (visdom).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken feilslutning er dette? "Du kan ikke stole på legenes råd om røyking - de er jo betalt av staten."',
        subTasks: [
          {
            label: 'a',
            task: 'Identifiser feilslutningen i utsagnet.',
            solution: 'Personangrep',
            multipleChoiceOptions: ['Personangrep', 'Appell til flertallet', 'Falsk dikotomi', 'Stråmann'],
          },
        ],
        solution: 'Argumentet angriper legenes motiver i stedet for å vurdere bevisene for rådene deres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er kritisk tenkning?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kritisk tenkning?',
            solution: 'Å vurdere informasjon og argumenter logisk',
            multipleChoiceOptions: ['Å vurdere informasjon og argumenter logisk', 'Å alltid være negativ', 'Å tro alt man hører', 'Å krangle med alle'],
          },
        ],
        solution: 'Kritisk tenkning handler om å vurdere påstander og argumenter på en logisk og reflektert måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-8-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Øv på kritisk tenkning.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel på en påstand i mediene (nyheter, sosiale medier). Hvilke spørsmål bør du stille for å vurdere om den er sann?',
            solution: 'Eksempler på spørsmål: Hvem sier dette? Hva er kilden? Finnes det bevis? Er det noen som tjener på at vi tror dette? Sier andre kilder det samme?',
            multipleChoiceOptions: ['Hvem sier det, hva er kilden, finnes det bevis?', 'Jeg trenger ikke stille spørsmål', 'Bare sjekk om det er populært', 'Spør om det høres bra ut'],
          },
          {
            label: 'b',
            task: 'Gi et eksempel på en feilslutning du har sett brukt i en diskusjon.',
            solution: 'Eksempel: Personangrep ("Du er for ung til å forstå"), appell til flertallet ("Alle andre gjør det"), stråmann (å vri motstanderens argument).',
            multipleChoiceOptions: ['Personangrep, appell til flertallet eller stråmann', 'Det finnes ingen feilslutninger i diskusjoner', 'Alle argumenter er like gode', 'Feilslutninger er alltid med vilje'],
          }
        ],
        hints: ['Tenk på hvem som sier noe og hvorfor', 'Mange feilslutninger handler om å unngå selve argumentet'],
        solution: 'Kritisk tenkning er en ferdighet som må øves.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Livssyn og identitet
// ============================================================================

export const CHAPTER_KRLE_8_4_1: TextbookChapter = {
  id: 'krle-8-4-1',
  courseId: 'krle-8',
  chapterNumber: '4.1',
  title: 'Livssyn og identitet',
  description: 'Utforsk ulike livssyn og hvordan de former vår identitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og reflektere over hvordan livssyn og verdier påvirker holdninger og handlinger'
  ],
  content: [
    {
      id: 'krle-8-4-1-intro',
      type: 'text',
      content: `
# Livssyn og identitet

Et **livssyn** er vårt helhetlige syn på livet - hva vi tror om verden,
mennesket og hvordan vi bør leve. Alle har et livssyn, enten det er religiøst
eller sekulært (ikke-religiøst).
      `
    },
    {
      id: 'krle-8-4-1-def-livssyn',
      type: 'definition',
      title: 'Hva er et livssyn?',
      content: `Et livssyn svarer på spørsmål som:
- Finnes det noe mer enn den fysiske verden?
- Hva er meningen med livet?
- Hva er rett og galt?
- Hva skjer etter døden?

**Religiøse livssyn**: Tror på overnaturlige krefter eller guder (kristendom, islam, etc.)

**Sekulære livssyn**: Basert på ikke-religiøse grunnlag (humanisme, naturalisme)`
    },
    {
      id: 'krle-8-4-1-humanisme',
      type: 'text',
      title: 'Humanisme',
      content: `
## Sekulær humanisme

Et ikke-religiøst livssyn som vektlegger:
- Menneskets verdi og verdighet
- Fornuft og vitenskap
- Etikk uten religion
- Menneskerettigheter
- Kritisk tenkning

Humanister mener mennesker selv må skape mening i livet, uten å støtte seg på overnaturlige krefter.
      `
    },
    {
      id: 'krle-8-4-1-identitet',
      type: 'text',
      title: 'Identitet',
      content: `
## Identitet - hvem er jeg?

Din **identitet** er hvem du opplever at du er. Den formes av:
- Familie og oppvekst
- Kultur og tradisjon
- Religion eller livssyn
- Venner og sosiale grupper
- Interesser og verdier
- Nasjonalitet og språk

Identiteten utvikler seg gjennom livet. I ungdomstiden er det vanlig å utforske og stille spørsmål ved sin identitet.
      `
    },
    {
      id: 'krle-8-4-1-note',
      type: 'note',
      title: 'Mangfold',
      content: `I Norge i dag lever mennesker med mange ulike livssyn side om side. Dette krever:
- **Toleranse**: Akseptere at andre tenker annerledes
- **Respekt**: Anerkjenne andres verdi og rett til egne meninger
- **Dialog**: Åpen samtale mellom ulike syn`
    },
    {
      id: 'krle-8-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-8-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et livssyn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et livssyn?',
            solution: 'Et helhetlig syn på livet og verden',
            multipleChoiceOptions: ['Et helhetlig syn på livet og verden', 'En politisk mening', 'En hobby', 'En vitenskapelig teori'],
          },
        ],
        solution: 'Et livssyn er vårt helhetlige syn på livet, verden og hvordan vi bør leve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-8-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner sekulær humanisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner sekulær humanisme?',
            solution: 'Vekt på fornuft, menneskets verdi og etikk uten religion',
            multipleChoiceOptions: ['Vekt på fornuft, menneskets verdi og etikk uten religion', 'Tro på mange guder', 'At livet er meningsløst', 'At bare kristendommen er sann'],
          },
        ],
        solution: 'Humanisme vektlegger fornuft, menneskets verdi og etikk basert på menneskelige verdier, ikke religion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-8-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilke faktorer påvirker identiteten vår?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke faktorer påvirker identiteten vår?',
            solution: 'Familie, kultur, religion, venner og interesser',
            multipleChoiceOptions: ['Familie, kultur, religion, venner og interesser', 'Bare gener', 'Bare skolen', 'Ingenting - vi er født ferdige'],
          },
        ],
        solution: 'Identiteten formes av mange faktorer gjennom oppvekst og livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-8-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-8-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over livssyn og identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv noen verdier eller overbevisninger som er viktige for deg. Hvor tror du de kommer fra?',
            solution: 'Personlig refleksjon. Verdier kan komme fra familie, kultur, religion, venner eller egne erfaringer og refleksjoner.',
            multipleChoiceOptions: ['Verdier kan komme fra familie, kultur, religion og egne erfaringer', 'Verdier er medfødt og kan ikke endres', 'Alle har de samme verdiene', 'Verdier kommer bare fra skolen'],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor toleranse er viktig i et samfunn med mange ulike livssyn.',
            solution: 'Toleranse lar mennesker med ulike syn leve sammen fredelig. Uten toleranse blir det konflikter. Toleranse betyr ikke at man er enig med alle, men at man respekterer andres rett til å tenke annerledes.',
            multipleChoiceOptions: ['Toleranse lar mennesker med ulike syn leve sammen fredelig', 'Toleranse er ikke viktig', 'Alle må være enige om alt', 'Bare ett livssyn kan være riktig'],
          }
        ],
        hints: ['Tenk på hva du synes er viktig i livet', 'Toleranse handler om å akseptere forskjeller'],
        solution: 'Å reflektere over egne verdier er en del av å utvikle identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const KRLE_8_CHAPTERS = [
  CHAPTER_KRLE_8_1_1,
  CHAPTER_KRLE_8_1_2,
  CHAPTER_KRLE_8_2_1,
  CHAPTER_KRLE_8_3_1,
  CHAPTER_KRLE_8_3_2,
  CHAPTER_KRLE_8_4_1,
];

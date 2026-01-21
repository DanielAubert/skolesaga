/**
 * Tekstbok innhold for KRLE 7. klasse
 *
 * Følger LK20 læreplan for KRLE (Kristendom, religion, livssyn og etikk) ungdomstrinn.
 * Innholdet er tilpasset 12-13-åringer med dypere refleksjon og mer nyanserte temaer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Kristendommens historie
// ============================================================================

export const CHAPTER_KRLE_7_1_1: TextbookChapter = {
  id: 'krle-7-1-1',
  courseId: 'krle-7',
  chapterNumber: '1.1',
  title: 'Kristendommens historie',
  description: 'Lær om hvordan kristendommen oppstod og spredte seg gjennom historien.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kunne gjøre rede for sentrale hendelser i kristendommens historie',
    'forstå hvordan kristendommen spredte seg og utviklet seg'
  ],
  content: [
    {
      id: 'krle-7-1-1-intro',
      type: 'text',
      content: `
# Kristendommens historie

Kristendommen er verdens største religion med over to milliarder tilhengere.
Men hvordan startet det hele? Kristendommen begynte som en liten bevegelse
i et hjørne av Romerriket for omtrent 2000 år siden, og vokste til å bli
en verdensreligion.
      `
    },
    {
      id: 'krle-7-1-1-def-opprinnelse',
      type: 'definition',
      title: 'Kristendommens opprinnelse',
      content: `Kristendommen har sitt utspring i **jødedommen** og oppstod i området som i dag er Israel og Palestina.

**Sentrale begreper:**
- **Jesus fra Nasaret**: Grunnleggeren av kristendommen, levde ca. år 4 f.Kr. - 30 e.Kr.
- **Messias/Kristus**: "Den salvede" - kristne tror Jesus var den frelseræn jødene ventet på
- **Apostlene**: Jesu nærmeste disipler som spredte budskapet etter hans død
- **Paulus**: En av de viktigste misjonsærene som spredte kristendommen til ikke-jøder`
    },
    {
      id: 'krle-7-1-1-tidlig',
      type: 'text',
      title: 'Den tidlige kirken',
      content: `
## Den første kristne tid (år 30-313)

Etter at Jesus døde og disiplene fortalte at han hadde stått opp fra de døde, begynte
kristendommen å spre seg:

**De første årene:**
- Jesu tilhengere samlet seg i Jerusalem
- De trodde Jesus snart ville komme tilbake
- De første kristne var jøder som fortsatte å følge jødiske skikker

**Paulus' misjonsreiser:**
- Paulus reiste rundt i Romerriket og startet nye menigheter
- Han lærte at også ikke-jøder ("hedninger") kunne bli kristne
- Han skrev brev til menighetene som senere ble en del av Bibelen

**Forfølgelse:**
- De kristne ble forfulgt av romerske keisere
- Mange ble drept fordi de nektet å tilbe de romerske gudene
- De første kristne måtte ofte samles i hemmelighet
      `
    },
    {
      id: 'krle-7-1-1-statsreligion',
      type: 'text',
      title: 'Kristendommen blir statsreligion',
      content: `
## Fra forfulgt til statsreligion (år 313-500)

**Konstantin den store (år 313):**
- Keiser Konstantin gjorde kristendommen lovlig
- Han skal selv ha blitt kristen etter å ha sett et kors på himmelen før et slag
- Kirkene kunne nå bygges åpent

**Theodosius (år 380):**
- Kristendommen ble Romerrikets offisielle statsreligion
- Andre religioner ble etter hvert forbudt
- Kirken fikk stor politisk makt

**Viktige kirkemøter:**
- På kirkemøtet i Nikea (325) ble trosbekjennelsen utformet
- Kirken bestemte hvilke skrifter som skulle være i Bibelen
- Man ble enige om sentral kristen lære om Jesus og Gud
      `
    },
    {
      id: 'krle-7-1-1-middelalder',
      type: 'text',
      title: 'Middelalderen',
      content: `
## Kristendommen i middelalderen (500-1500)

**Kirken i Europa:**
- Kirken var den mektigste institusjonen i Europa
- Klostrene var sentre for lærdom og kultur
- Paven i Roma var kirkens øverste leder i vest

**Kristendommen kommer til Norge:**
- Olav Tryggvason og Olav Haraldsson (Olav den hellige) kristnet Norge
- Det gamle norrøne gudstro ble erstattet av kristendommen
- Kirker og klostre ble bygget over hele landet

**Splittelsen mellom øst og vest (1054):**
- Kirken delte seg i den **romersk-katolske kirke** (vest) og den **ortodokse kirke** (øst)
- Uenighet om pavens makt og detaljer i læren
- Denne splittelsen består den dag i dag
      `
    },
    {
      id: 'krle-7-1-1-reformasjon',
      type: 'note',
      title: 'Reformasjonen',
      content: `**Reformasjonen (1517)** var en religiøs omveltning som førte til at protestantismen oppstod.

**Martin Luther:**
- Tysk munk som protesterte mot katolsk praksis
- Mente at frelse kommer av tro alene, ikke gode gjerninger
- Oversatte Bibelen til tysk så vanlige folk kunne lese den

**Konsekvenser:**
- Nye kirkesamfunn oppstod: lutheranere, reformerte, anglikanere
- Norge ble luthersk i 1537
- Religiøse kriger i Europa

Reformasjonen var en av de viktigste hendelsene i kristendommens historie.`
    },
    {
      id: 'krle-7-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Når og hvor oppstod kristendommen?',
        subTasks: [
          {
            label: 'a',
            task: 'Når og hvor oppstod kristendommen?',
            solution: 'For ca. 2000 år siden i området som i dag er Israel/Palestina',
            multipleChoiceOptions: ['For ca. 2000 år siden i Israel/Palestina', 'For 3000 år siden i Egypt', 'For 1000 år siden i Roma', 'For 500 år siden i Norge'],
          },
        ],
        solution: 'Kristendommen oppstod for ca. 2000 år siden i Midtøsten, i området som i dag er Israel og Palestina.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvem var Paulus, og hvorfor var han viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjorde Paulus for kristendommen?',
            solution: 'Han spredte kristendommen til ikke-jøder gjennom misjonsreiser og brev',
            multipleChoiceOptions: ['Spredte kristendommen til ikke-jøder', 'Skrev Det gamle testamente', 'Var den første paven', 'Bygde den første kirken'],
          },
        ],
        solution: 'Paulus reiste rundt i Romerriket, startet menigheter og lærte at også ikke-jøder kunne bli kristne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva var reformasjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var reformasjonen?',
            solution: 'En religiøs omveltning på 1500-tallet som førte til at protestantismen oppstod',
            multipleChoiceOptions: ['En religiøs omveltning som skapte protestantismen', 'Da kristendommen ble til', 'Da kirken kom til Norge', 'Et kirkemøte i Roma'],
          },
        ],
        solution: 'Reformasjonen var en protest mot den katolske kirken som førte til nye kirkesamfunn, som lutheranerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Lag en tidslinje over kristendommens historie.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett disse hendelsene i riktig rekkefølge: Reformasjonen (1517), Jesus lever, Kristendommen blir statsreligion (380), Splittelsen mellom øst og vest (1054).',
            solution: 'Jesus lever → Kristendommen blir statsreligion (380) → Splittelsen mellom øst og vest (1054) → Reformasjonen (1517)',
            multipleChoiceOptions: ['Jesus → Statsreligion → Splittelse → Reformasjonen', 'Reformasjonen → Jesus → Splittelse → Statsreligion', 'Splittelse → Jesus → Reformasjonen → Statsreligion', 'Statsreligion → Jesus → Reformasjonen → Splittelse'],
          },
          {
            label: 'b',
            task: 'Velg én av hendelsene og forklar hvorfor den var viktig for kristendommens utvikling.',
            solution: 'Eksempel: Da kristendommen ble statsreligion, fikk kirken stor makt og kunne spre seg over hele Romerriket. Reformasjonen skapte mangfold i kristendommen.',
            multipleChoiceOptions: ['Hendelsen endret kristendommens utvikling på viktige måter', 'Hendelsen hadde ingen betydning', 'Kristendommen var uforandret', 'Bare én hendelse var viktig'],
          }
        ],
        hints: ['Tenk på årstallene', 'Hva førte hver hendelse til?'],
        solution: 'Kristendommens historie strekker seg over 2000 år med mange avgjørende hendelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Kristne kirkesamfunn
// ============================================================================

export const CHAPTER_KRLE_7_1_2: TextbookChapter = {
  id: 'krle-7-1-2',
  courseId: 'krle-7',
  chapterNumber: '1.2',
  title: 'Kristne kirkesamfunn',
  description: 'Utforsk forskjellene mellom katolikker, ortodokse og protestanter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kunne sammenligne ulike kristne kirkesamfunn',
    'forstå likheter og forskjeller i tro og praksis'
  ],
  content: [
    {
      id: 'krle-7-1-2-intro',
      type: 'text',
      content: `
# Kristne kirkesamfunn

Alle kristne tror på Jesus Kristus, men det finnes mange ulike måter å
være kristen på. Gjennom historien har kristendommen delt seg i forskjellige
**kirkesamfunn** med ulike tradisjoner og praksiser.
      `
    },
    {
      id: 'krle-7-1-2-def-hovedretninger',
      type: 'definition',
      title: 'De tre hovedretningene',
      content: `Kristendommen har tre hovedretninger:

**1. Den romersk-katolske kirke**
- Ca. 1,3 milliarder medlemmer
- Ledet av paven i Roma
- Størst i Sør-Europa, Latin-Amerika, Filippinene

**2. De ortodokse kirkene**
- Ca. 300 millioner medlemmer
- Flere selvstendige kirker (gresk-ortodoks, russisk-ortodoks osv.)
- Størst i Øst-Europa, Russland, Hellas

**3. Protestantiske kirker**
- Ca. 900 millioner medlemmer
- Mange ulike kirkesamfunn: lutheranere, baptister, metodister, pinsevennene
- Størst i Nord-Europa, Nord-Amerika, deler av Afrika`
    },
    {
      id: 'krle-7-1-2-katolsk',
      type: 'text',
      title: 'Den katolske kirken',
      content: `
## Den romersk-katolske kirke

Den katolske kirken er det største kristne kirkesamfunnet i verden.

**Kjennetegn:**
- **Paven**: Kirkens øverste leder, bor i Vatikanstaten i Roma
- **Tradisjon**: Både Bibelen og kirkens tradisjon er viktig
- **De sju sakramentene**: Dåp, konfirmasjon, nattverd, skriftemål, de sykes salving, ordinasjon og ekteskap
- **Maria**: Æres som Jesu mor og bes om forbønn
- **Helgener**: Fromme kristne som kan bes om forbønn
- **Prest**: Bare menn kan være prester, og prester kan ikke gifte seg

**Gudstjenesten (messen):**
- Holdes på lokalspråk (tidligere på latin)
- Nattverden er sentral - katolikker tror brødet og vinen blir Jesu kropp og blod
      `
    },
    {
      id: 'krle-7-1-2-ortodoks',
      type: 'text',
      title: 'De ortodokse kirkene',
      content: `
## De ortodokse kirkene

De ortodokse kirkene har bevart mange gamle tradisjoner fra kristendommens første tid.

**Kjennetegn:**
- **Patriarker**: Hver nasjonal kirke har sin øverste leder
- **Ikoner**: Religiøse bilder som brukes i tilbedelse
- **Tradisjon**: Lang tradisjon er svært viktig
- **Mysterier**: Tilsvarende katolikkenes sakramenter
- **Liturgi**: Lange, høytidelige gudstjenester med mye sang

**Særtrekk:**
- Kirkerommene har en bildevegg (ikonostas) som skiller alterområdet
- Prester kan gifte seg, men ikke biskoper
- Påsken er den viktigste høytiden
- Bruker ofte en annen kalender enn i vest
      `
    },
    {
      id: 'krle-7-1-2-protestantisk',
      type: 'text',
      title: 'Protestantiske kirker',
      content: `
## Protestantiske kirker

Etter reformasjonen oppstod det mange ulike protestantiske kirkesamfunn.

**Felles kjennetegn:**
- **Bibelen alene**: Bibelen er den viktigste kilden til tro
- **Troen alene**: Frelse kommer av tro, ikke gjerninger
- **Nåden alene**: Guds nåde gis fritt, kan ikke fortjenes
- **Færre sakramenter**: Vanligvis bare dåp og nattverd
- **Prester kan gifte seg**: Både menn og kvinner kan være prester (i de fleste)

**Eksempler på protestantiske kirkesamfunn i Norge:**
- **Den norske kirke** (luthersk): Norges statskirke fram til 2012
- **Metodistkirken**: Vektlegger helliggjørelse og sosialt arbeid
- **Baptistkirken**: Praktiserer voksendåp
- **Pinsebevegelsen**: Vektlegger Den hellige ånd og karismatiske gaver
- **Frelsesarmeen**: Kombinerer evangelisering og sosialt arbeid
      `
    },
    {
      id: 'krle-7-1-2-sammenligning',
      type: 'note',
      title: 'Hva er felles?',
      content: `Tross forskjellene har alle kristne mye felles:

**Alle kristne tror på:**
- Én Gud i tre personer (Faderen, Sønnen, Den hellige ånd)
- Jesus Kristus som Guds sønn og menneskets frelser
- Jesu død og oppstandelse
- At Bibelen er hellig skrift
- Dåp og nattverd

**Alle kristne:**
- Feirer jul og påske
- Ber til Gud
- Har gudstjenester
- Tror på et liv etter døden

De siste tiårene har det vært mer samarbeid mellom kirkesamfunnene (økumeni).`
    },
    {
      id: 'krle-7-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er de tre hovedretningene i kristendommen?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de tre hovedretningene.',
            solution: 'Den romersk-katolske kirke, de ortodokse kirkene og protestantiske kirker',
            multipleChoiceOptions: ['Katolsk, ortodoks og protestantisk', 'Luthersk, baptistisk og metodistisk', 'Norsk, svensk og dansk', 'Gammel, middelalder og ny'],
          },
        ],
        solution: 'De tre hovedretningene er katolsk, ortodoks og protestantisk kristendom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvem leder den katolske kirken?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er den katolske kirkens øverste leder?',
            solution: 'Paven',
            multipleChoiceOptions: ['Paven', 'Patriarken', 'Kongen', 'Biskopen'],
          },
        ],
        solution: 'Paven i Roma er den katolske kirkens øverste leder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er spesielt med protestantisk kristendom?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva vektlegger protestanter som kilden til tro?',
            solution: 'Bibelen alene',
            multipleChoiceOptions: ['Bibelen alene', 'Pavens ord', 'Tradisjon og ikoner', 'Presten'],
          },
        ],
        solution: 'Protestantene vektlegger at Bibelen er den viktigste kilden til tro, ikke tradisjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign de tre hovedretningene.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn én likhet mellom alle tre hovedretningene.',
            solution: 'De tror alle på Jesus Kristus som Guds sønn og frelser. De feirer alle jul og påske. De har alle dåp og nattverd.',
            multipleChoiceOptions: ['Troen på Jesus som Guds sønn', 'De har alle pave', 'De bruker bare ikoner', 'De har ingen likhetstrekk'],
          },
          {
            label: 'b',
            task: 'Nevn én forskjell mellom katolsk og protestantisk kristendom.',
            solution: 'Katolikker har paven som leder, protestanter har ikke. Katolikker vektlegger tradisjon, protestanter vektlegger Bibelen alene. Katolske prester kan ikke gifte seg.',
            multipleChoiceOptions: ['Paven/lederskap og synet på tradisjon', 'De tror på forskjellige guder', 'Bare katolikker har Bibelen', 'Protestanter feirer ikke påske'],
          }
        ],
        hints: ['Tenk på hva alle kristne har felles', 'Tenk på forskjeller i ledelse og tradisjon'],
        solution: 'Alle kristne deler troen på Jesus, men har ulike tradisjoner og organisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-1-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'krle-7-1-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Undersøk kirkesamfunn i ditt nærmiljø.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke kristne kirkesamfunn finnes i ditt nærmiljø? Nevn minst to.',
            solution: 'Svar varierer. Eksempler: Den norske kirke, katolsk kirke, pinsemenighet, baptistkirke, metodistkirke, Frelsesarmeen.',
            multipleChoiceOptions: ['Det finnes flere ulike kirkesamfunn i de fleste områder', 'Det finnes bare én kirke', 'Det finnes ingen kirker', 'Jeg vet ikke'],
          },
        ],
        hints: ['Tenk på kirkebygg i nærheten', 'Spør hjemme eller søk på internett'],
        solution: 'I Norge finnes det mange ulike kristne kirkesamfunn, fra Den norske kirke til frikirker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Hinduisme
// ============================================================================

export const CHAPTER_KRLE_7_2_1: TextbookChapter = {
  id: 'krle-7-2-1',
  courseId: 'krle-7',
  chapterNumber: '2.1',
  title: 'Hinduisme',
  description: 'Utforsk hinduismen - en av verdens eldste religioner fra India.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kunne gjøre rede for sentrale trekk ved hinduismen',
    'forstå hinduistisk tro og praksis'
  ],
  content: [
    {
      id: 'krle-7-2-1-intro',
      type: 'text',
      content: `
# Hinduisme

Hinduismen er en av verdens eldste religioner og har over én milliard tilhengere.
Den oppstod i India for over 4000 år siden og er mer enn en religion - det er
en hel livsfilosofi og kulturell tradisjon.
      `
    },
    {
      id: 'krle-7-2-1-def-hinduisme',
      type: 'definition',
      title: 'Hva er hinduisme?',
      content: `**Hinduisme** er en mangfoldig religion med mange tradisjoner og guder.

**Hovedtrekk:**
- Ingen enkelt grunnlegger
- Mange hellige skrifter: Vedaene, Upanishadene, Bhagavadgita
- Mange guder som er ulike former av én guddommelig virkelighet (**Brahman**)
- Tro på gjenfødelse (reinkarnasjon) og karma
- Oppstod og praktiseres hovedsakelig i India

Hinduismen er ikke én ensartet religion, men en samling av mange tradisjoner, filosofier og praksiser.`
    },
    {
      id: 'krle-7-2-1-guder',
      type: 'text',
      title: 'Guder i hinduismen',
      content: `
## Gudene

Hinduister kan tilbe mange guder, men de fleste tror alle gudene er ulike former av
én guddommelig kraft: **Brahman**.

**Trimurti - de tre hovedgudene:**
- **Brahma**: Skaperguden - skapte verden
- **Vishnu**: Opprettholderen - bevarer verden
- **Shiva**: Ødeleggeren - ødelegger for at noe nytt kan skapes

**Andre viktige guder:**
- **Ganesha**: Guden med elefanthode, fjerner hindringer
- **Krishna**: En form av Vishnu, kjent fra Bhagavadgita
- **Lakshmi**: Gudinne for velstand og lykke
- **Durga/Kali**: Mektig gudinne som bekjemper det onde

Mange hinduer velger seg en hovedgud (ishta-devata) som de har et spesielt forhold til.
      `
    },
    {
      id: 'krle-7-2-1-tro',
      type: 'text',
      title: 'Sentrale trosforestillinger',
      content: `
## Sentrale trosforestillinger

**Samsara - gjenfødelsens kretsløp:**
- Sjelen (atman) gjenfødes gang på gang i nye kropper
- Målet er å bryte ut av samsara og oppnå **moksha** (frigjøring)

**Karma:**
- Alle handlinger får konsekvenser
- Gode handlinger gir god karma, dårlige handlinger gir dårlig karma
- Karma påvirker hva du gjenfødes som

**Dharma:**
- Plikt og rett levemåte
- Varierer etter alder, kjønn og sosial posisjon
- Å følge sin dharma gir god karma

**Moksha:**
- Frigjøring fra gjenfødelsens kretsløp
- Sjelen forenes med Brahman
- Det ultimate målet for en hindu
      `
    },
    {
      id: 'krle-7-2-1-praksis',
      type: 'text',
      title: 'Hinduistisk praksis',
      content: `
## Hvordan praktiseres hinduismen?

**Puja (tilbedelse):**
- Kan gjøres i tempelet eller hjemme
- Ofringer av blomster, mat, røkelse til gudene
- Mange har et alter hjemme

**Tempelet:**
- Gudenes bolig
- Besøkes for å se guden (darshan)
- Prester utfører ritualer

**Fester og høytider:**
- **Diwali**: Lysfesten - feirer seieren over mørket
- **Holi**: Fargelsfesten - feirer våren
- **Navaratri**: Ni netter til ære for gudinnen

**Pilegrimsreiser:**
- Reise til hellige steder
- Bade i hellige elver, spesielt Ganges
      `
    },
    {
      id: 'krle-7-2-1-kaste',
      type: 'note',
      title: 'Kastesystemet',
      content: `**Kastesystemet** var tradisjonelt en inndeling av samfunnet i grupper:

1. **Brahminer**: Prester og lærde
2. **Kshatriyaer**: Krigere og herskere
3. **Vaishyaer**: Bønder og handelsmenn
4. **Shudraer**: Tjenere og arbeidere
5. **"De kasteløse"**: Utenfor systemet, utførte "urene" jobber

**Viktig å vite:**
- Diskriminering basert på kaste er forbudt ved lov i India
- Mange arbeider for å fjerne kastes betydning
- I moderne hinduisme vektlegges at alle mennesker er like

Kastesystemet har vært svært omdiskutert og kritisert, også av hinduer selv.`
    },
    {
      id: 'krle-7-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor og når oppstod hinduismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor har hinduismen sitt opphav?',
            solution: 'India',
            multipleChoiceOptions: ['India', 'Kina', 'Japan', 'Egypt'],
          },
        ],
        solution: 'Hinduismen oppstod i India for over 4000 år siden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er karma?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet karma.',
            solution: 'At alle handlinger får konsekvenser - gode handlinger gir god karma, dårlige handlinger gir dårlig karma',
            multipleChoiceOptions: ['Alle handlinger får konsekvenser', 'En type mat', 'Et gudsbilde', 'En fest'],
          },
        ],
        solution: 'Karma betyr at alle handlinger får konsekvenser, som påvirker dette livet og kommende liv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvem er de tre hovedgudene i hinduismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de tre hovedgudene (Trimurti).',
            solution: 'Brahma (skaperen), Vishnu (opprettholderen), Shiva (ødeleggeren)',
            multipleChoiceOptions: ['Brahma, Vishnu og Shiva', 'Ganesha, Krishna og Lakshmi', 'Allah, Jesus og Buddha', 'Odin, Tor og Frøy'],
          },
        ],
        solution: 'De tre hovedgudene er Brahma (skaperen), Vishnu (opprettholderen) og Shiva (ødeleggeren).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar sammenhengen mellom karma, samsara og moksha.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er samsara?',
            solution: 'Gjenfødelsens kretsløp - sjelen gjenfødes gang på gang',
            multipleChoiceOptions: ['Gjenfødelsens kretsløp', 'En gud', 'Et tempel', 'En fest'],
          },
          {
            label: 'b',
            task: 'Hvordan henger karma, samsara og moksha sammen?',
            solution: 'Karma bestemmer hva du gjenfødes som i samsara. Ved å samle god karma og følge dharma kan man til slutt oppnå moksha og bryte ut av gjenfødelsens kretsløp.',
            multipleChoiceOptions: ['Karma påvirker gjenfødelsen, målet er å oppnå moksha', 'De henger ikke sammen', 'Karma betyr det samme som moksha', 'Samsara er målet'],
          }
        ],
        hints: ['Karma = handlingers konsekvenser', 'Moksha = frigjøring'],
        solution: 'Karma påvirker hva du gjenfødes som i samsara. Moksha er frigjøringen fra dette kretsløpet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over karma-begrepet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva synes du om ideen om at handlingene dine får konsekvenser? Kan dette påvirke hvordan man oppfører seg?',
            solution: 'Personlig svar. Mulig refleksjon: Karma-tanken kan få folk til å tenke mer over handlingene sine. Det er en motivasjon for å gjøre gode ting. Det ligner på "det du gir, får du tilbake".',
            multipleChoiceOptions: ['Karma kan motivere til gode handlinger', 'Karma har ingen betydning', 'Bare straff motiverer', 'Mennesker tenker ikke på konsekvenser'],
          },
        ],
        hints: ['Tenk på hvordan handlinger påvirker andre', 'Finnes lignende ideer i andre tradisjoner?'],
        solution: 'Karma-tanken oppmuntrer til å tenke over konsekvensene av sine handlinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Buddhisme
// ============================================================================

export const CHAPTER_KRLE_7_2_2: TextbookChapter = {
  id: 'krle-7-2-2',
  courseId: 'krle-7',
  chapterNumber: '2.2',
  title: 'Buddhisme',
  description: 'Lær om Buddha og den åttedelte veien til frigjøring.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kunne gjøre rede for sentrale trekk ved buddhismen',
    'forstå Buddhas lære og den åttedelte vei'
  ],
  content: [
    {
      id: 'krle-7-2-2-intro',
      type: 'text',
      content: `
# Buddhisme

Buddhismen er en av verdens store religioner med over 500 millioner tilhengere.
Den oppstod i India for ca. 2500 år siden, basert på læren til **Siddhartha Gautama**,
som ble kalt **Buddha** - "den opplyste".
      `
    },
    {
      id: 'krle-7-2-2-def-buddha',
      type: 'definition',
      title: 'Buddha',
      content: `**Buddha** betyr "den opplyste" eller "den oppvåknede".

**Siddhartha Gautama:**
- Født som prins i Nepal ca. 560 f.Kr.
- Levde beskyttet i luksus, ukjent med lidelse
- Som ung mann så han sykdom, alderdom og død
- Forlot familien for å søke svar på livets lidelse
- Etter seks år med søken oppnådde han **oppvåkning** under et bodhi-tre
- Tilbrakte resten av livet med å lære bort det han hadde forstått

Buddha er ikke en gud, men et forbilde. I prinsippet kan alle oppnå det han oppnådde.`
    },
    {
      id: 'krle-7-2-2-fire',
      type: 'text',
      title: 'De fire edle sannheter',
      content: `
## De fire edle sannheter

Dette er kjernen i Buddhas lære:

**1. Sannheten om lidelse (dukkha):**
Livet inneholder lidelse og utilfredshet. Sykdom, alderdom, død, tap og skuffelse
er en del av tilværelsen.

**2. Sannheten om lidelsens årsak:**
Lidelse skyldes begjær og tilknytning. Vi lider fordi vi vil ha ting, klamrer oss
til ting, eller vil unngå ting.

**3. Sannheten om lidelsens opphør:**
Det er mulig å bli fri fra lidelse. Når begjær og tilknytning opphører, opphører
også lidelsen.

**4. Sannheten om veien:**
Den åttedelte vei er veien til frihet fra lidelse.
      `
    },
    {
      id: 'krle-7-2-2-atte',
      type: 'text',
      title: 'Den åttedelte vei',
      content: `
## Den åttedelte vei

Buddhas oppskrift på hvordan man kan leve for å oppnå frigjøring:

**Visdom:**
1. **Rett forståelse**: Forstå de fire edle sannheter
2. **Rett holdning**: Ha gode intensjoner, uten hat eller begjær

**Etisk adferd:**
3. **Rett tale**: Snakk sant og vennlig
4. **Rett handling**: Ikke drep, stjel eller skad andre
5. **Rett levevis**: Tjen til livets opphold på en etisk måte

**Meditasjon:**
6. **Rett anstrengelse**: Jobbe med å utvikle seg
7. **Rett oppmerksomhet**: Være bevisst og til stede
8. **Rett konsentrasjon**: Meditere og trene sinnet

Veien er som et hjul - alle delene henger sammen og styrker hverandre.
      `
    },
    {
      id: 'krle-7-2-2-nirvana',
      type: 'definition',
      title: 'Nirvana og karma',
      content: `**Nirvana:**
- Målet i buddhismen
- Frigjøring fra gjenfødelsens hjul
- Slutten på all lidelse
- Begjær og uvitenhet er utslokt

**Karma og gjenfødelse:**
- Buddhister tror også på karma og gjenfødelse
- Handlinger får konsekvenser for fremtidige liv
- Men: det finnes ingen evig sjel som gjenfødes - bare en strøm av bevissthet
- Ved nirvana brytes denne strømmen

**Forskjell fra hinduisme:**
I hinduismen forenes sjelen med Brahman. I buddhismen "slokner" begjæret som en flamme.`
    },
    {
      id: 'krle-7-2-2-retninger',
      type: 'text',
      title: 'Buddhistiske retninger',
      content: `
## Hovedretninger i buddhismen

**Theravada (den eldste skole):**
- "De eldstes lære"
- Vektlegger munkelivet
- Finnes i Sri Lanka, Thailand, Myanmar, Kambodsja
- Målet er å bli en arhat (frigjort)

**Mahayana (den store vogn):**
- Vektlegger medfølelse med alle
- Bodhisattva-idealet: Hjelpe alle til frigjøring
- Finnes i Kina, Japan, Korea, Vietnam

**Vajrayana (diamantvognen):**
- Tibetansk buddhisme
- Bruker ritualer, mantraer og meditasjon
- Dalai Lama er den mest kjente lederen
      `
    },
    {
      id: 'krle-7-2-2-praksis',
      type: 'note',
      title: 'Buddhistisk praksis',
      content: `**Meditasjon:**
- Sentralt i buddhismen
- Trener sinnet til ro og innsikt
- Mange ulike teknikker

**De fem levereglene:**
1. Ikke drep eller skad levende vesener
2. Ikke stjel
3. Ikke lyv
4. Ikke misbruk rusmidler
5. Ikke driv seksuelt misbruk

**Munker og nonner:**
- Lever etter mange flere regler
- Fokuserer på meditasjon og lære
- Bærer enkle klær (ofte oransje eller røde)

**Symboler:**
- Lotusblomsten: Renhet som vokser fra gjørme
- Dharma-hjulet: Den åttedelte vei`
    },
    {
      id: 'krle-7-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvem var Buddha?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva het Buddha før han ble opplyst?',
            solution: 'Siddhartha Gautama',
            multipleChoiceOptions: ['Siddhartha Gautama', 'Dalai Lama', 'Vishnu', 'Krishna'],
          },
        ],
        solution: 'Buddha het Siddhartha Gautama og var en prins fra Nepal som søkte svar på livets lidelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er de fire edle sannheter?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler den første edle sannhet om?',
            solution: 'At livet inneholder lidelse',
            multipleChoiceOptions: ['At livet inneholder lidelse', 'At alle er lykkelige', 'At gudene hjelper oss', 'At vi må tilbe naturen'],
          },
        ],
        solution: 'De fire edle sannheter handler om lidelse, dens årsak, at den kan opphøre, og veien til det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er nirvana?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er nirvana i buddhismen?',
            solution: 'Frigjøring fra gjenfødelsens hjul og slutten på all lidelse',
            multipleChoiceOptions: ['Frigjøring fra gjenfødelse og slutten på lidelse', 'Et sted man kommer til etter døden', 'En gud', 'En meditasjonsteknikk'],
          },
        ],
        solution: 'Nirvana er frigjøring fra gjenfødelsens hjul, der begjær og lidelse opphører.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar den åttedelte vei.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke tre hovedkategorier er den åttedelte vei delt inn i?',
            solution: 'Visdom, etisk adferd og meditasjon',
            multipleChoiceOptions: ['Visdom, etisk adferd og meditasjon', 'Bønn, faste og pilegrimsreise', 'Karma, dharma og moksha', 'Gud, menneske og natur'],
          },
          {
            label: 'b',
            task: 'Velg én av de åtte delene og forklar hva den betyr.',
            solution: 'Eksempler: Rett tale = snakke sant og vennlig. Rett handling = ikke skade andre. Rett oppmerksomhet = være bevisst og til stede.',
            multipleChoiceOptions: ['En forklaring av en av de åtte delene', 'Alle åtte betyr det samme', 'De åtte er gudenes navn', 'Den åttedelte vei har ingen deler'],
          }
        ],
        hints: ['Visdom handler om forståelse, etikk om handling, meditasjon om sinnet'],
        solution: 'Den åttedelte vei er Buddhas oppskrift på hvordan man kan leve for å oppnå frigjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-2-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'krle-7-2-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign hinduisme og buddhisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn én likhet mellom hinduisme og buddhisme.',
            solution: 'Begge har tro på karma og gjenfødelse. Begge oppstod i India. Begge har et mål om frigjøring (moksha/nirvana).',
            multipleChoiceOptions: ['Begge tror på karma og gjenfødelse', 'Begge tilber Gud', 'Begge har pave', 'De har ingen likheter'],
          },
          {
            label: 'b',
            task: 'Nevn én forskjell mellom hinduisme og buddhisme.',
            solution: 'Hinduisme har mange guder, buddhismen har ingen skapergud. Hinduisme har kastesystem, buddhismen avviste dette. I hinduisme forenes sjelen med Brahman, i buddhisme "slokner" lidelsen.',
            multipleChoiceOptions: ['Buddhisme har ingen skapergud, hinduisme har mange guder', 'De er helt like', 'Bare hinduisme har karma', 'Bare buddhisme kommer fra Asia'],
          }
        ],
        hints: ['Begge kommer fra India', 'Tenk på guder og mål'],
        solution: 'Hinduisme og buddhisme har mye felles, men skiller seg i synet på guder og sjelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Filosofiske spørsmål
// ============================================================================

export const CHAPTER_KRLE_7_3_1: TextbookChapter = {
  id: 'krle-7-3-1',
  courseId: 'krle-7',
  chapterNumber: '3.1',
  title: 'Filosofiske spørsmål',
  description: 'Utforsk filosofiens store spørsmål om kunnskap, virkelighet og mening.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kunne reflektere over filosofiske spørsmål',
    'kjenne til grunnleggende filosofiske begreper'
  ],
  content: [
    {
      id: 'krle-7-3-1-intro',
      type: 'text',
      content: `
# Filosofiske spørsmål

Filosofi betyr "kjærlighet til visdom". Gjennom tusenvis av år har mennesker
stilt seg dype spørsmål om livet, virkeligheten og hva det vil si å være menneske.
Disse spørsmålene har ikke alltid enkle svar - men det er nettopp det som
gjør dem så interessante!
      `
    },
    {
      id: 'krle-7-3-1-def-filosofi',
      type: 'definition',
      title: 'Hva er filosofi?',
      content: `**Filosofi** er systematisk tenkning om grunnleggende spørsmål.

**Filosofiens hovedområder:**
- **Metafysikk**: Hva er virkeligheten? Hva finnes egentlig?
- **Epistemologi**: Hva er kunnskap? Hva kan vi vite?
- **Etikk**: Hva er rett og galt? Hvordan bør vi leve?
- **Logikk**: Hva er gyldig argumentasjon?
- **Estetikk**: Hva er skjønnhet? Hva er kunst?

Filosofi handler om å stille gode spørsmål, ikke nødvendigvis å finne endelige svar.`
    },
    {
      id: 'krle-7-3-1-kunnskap',
      type: 'text',
      title: 'Hva kan vi vite?',
      content: `
## Spørsmålet om kunnskap

Hvordan vet vi det vi tror vi vet?

**Ulike kilder til kunnskap:**
- **Sanseerfaring**: Vi ser, hører, føler, smaker, lukter
- **Fornuft**: Vi tenker og resonnerer oss fram
- **Vitenskapelig metode**: Hypoteser, eksperimenter, observasjoner
- **Tradisjon og autoritet**: Vi lærer av andre
- **Intuisjon**: Vi "bare vet"

**Filosofiske utfordringer:**
- Sansene kan lure oss (optiske illusjoner, drømmer)
- Fornuften kan ta feil
- Vitenskapen oppdateres stadig
- Hvordan skiller vi sikker kunnskap fra antakelser?

Filosofen René Descartes spurte: "Hva om alt jeg tror jeg vet, er feil?"
      `
    },
    {
      id: 'krle-7-3-1-virkelighet',
      type: 'text',
      title: 'Hva er virkeligheten?',
      content: `
## Spørsmålet om virkeligheten

Hva finnes egentlig? Er verden slik vi opplever den?

**Store spørsmål:**
- Finnes det noe utenfor den fysiske verden?
- Er sinnet noe annet enn hjernen?
- Har vi fri vilje, eller er alt bestemt på forhånd?
- Hva er tid? Hva er rom?

**Ulike syn:**
- **Materialisme**: Bare det fysiske er virkelig
- **Dualisme**: Både det fysiske og det åndelige er virkelig
- **Idealisme**: Bare det mentale/åndelige er virkelig

**Et tankeeksperiment:**
Filosofen Platon fortalte om mennesker lenket i en hule. De så bare skygger på veggen
og trodde skyggene var virkeligheten. Hva om vi også bare ser "skygger" av virkeligheten?
      `
    },
    {
      id: 'krle-7-3-1-mening',
      type: 'text',
      title: 'Hva er meningen med livet?',
      content: `
## Livets mening

Dette er kanskje det største spørsmålet av alle.

**Religiøse svar:**
- Å tjene Gud og følge hans vilje
- Å oppnå frigjøring (moksha, nirvana)
- Å gjøre godt og forberede seg på livet etter døden

**Filosofiske svar:**
- Meningen er å finne lykke (hedonisme)
- Meningen er å leve dydige liv (Aristoteles)
- Meningen er det vi selv skaper (eksistensialisme)
- Spørsmålet selv er meningsløst (nihilisme)

**Din egen refleksjon:**
Kanskje er det ikke ett riktig svar. Kanskje må hver av oss finne vår egen mening -
gjennom relasjoner, opplevelser, bidrag til andre, eller noe helt annet.
      `
    },
    {
      id: 'krle-7-3-1-tenkere',
      type: 'note',
      title: 'Noen store tenkere',
      content: `**Sokrates (469-399 f.Kr.):**
- Gresk filosof som stilte spørsmål for å få folk til å tenke
- "Det eneste jeg vet, er at jeg ingenting vet"
- Ble dømt til døden for å "ødelegge ungdommen"

**Platon (428-348 f.Kr.):**
- Sokrates' elev
- Mente at det finnes en verden av perfekte ideer bak den fysiske verden

**Aristoteles (384-322 f.Kr.):**
- Platons elev
- Studerte alt fra biologi til etikk
- Mente lykke (eudaimonia) er livets mål

Disse tre tenkerne fra antikkens Hellas har påvirket vestlig tenkning i over 2000 år.`
    },
    {
      id: 'krle-7-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr filosofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr ordet "filosofi"?',
            solution: 'Kjærlighet til visdom',
            multipleChoiceOptions: ['Kjærlighet til visdom', 'Studiet av tall', 'Kjærlighet til naturen', 'Studiet av språk'],
          },
        ],
        solution: 'Filosofi kommer fra gresk og betyr "kjærlighet til visdom".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er de ulike hovedområdene i filosofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler etikk om?',
            solution: 'Hva som er rett og galt, og hvordan vi bør leve',
            multipleChoiceOptions: ['Hva som er rett og galt', 'Hva som er sant', 'Hva som er virkelig', 'Hva som er vakkert'],
          },
        ],
        solution: 'Etikk er den delen av filosofien som handler om moral - rett og galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvem var Sokrates?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var Sokrates kjent for?',
            solution: 'Å stille spørsmål for å få folk til å tenke',
            multipleChoiceOptions: ['Å stille spørsmål for å få folk til å tenke', 'Å skrive lange bøker', 'Å være konge', 'Å oppdage Amerika'],
          },
        ],
        solution: 'Sokrates var kjent for å stille kritiske spørsmål og sa selv at "det eneste jeg vet, er at jeg ingenting vet".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over et filosofisk spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan vet du at du ikke drømmer akkurat nå?',
            solution: 'Personlig refleksjon. Mulige tanker: Jeg kan ikke vite det sikkert. Drømmer føles ofte virkelige mens vi drømmer. Kanskje er sansene ikke helt pålitelige.',
            multipleChoiceOptions: ['Det er vanskelig å vite sikkert - sansene kan lure oss', 'Jeg vet det fordi jeg føler meg våken', 'Drømmer skjer bare om natten', 'Dette spørsmålet er dumt'],
          },
          {
            label: 'b',
            task: 'Hva tenker du er meningen med livet? Skriv dine egne tanker.',
            solution: 'Personlig svar. Eksempler: Å være glad, å hjelpe andre, å lære nye ting, å ha gode relasjoner, å gjøre verden bedre, å oppleve vakre ting.',
            multipleChoiceOptions: ['Refleksjon over hva som gir livet mening for meg', 'Det finnes bare ett riktig svar', 'Livet har ingen mening', 'Bare filosofer kan svare'],
          }
        ],
        hints: ['Det finnes ingen gale svar på filosofiske spørsmål', 'Prøv å begrunne tankene dine'],
        solution: 'Filosofiske spørsmål har ikke enkle svar, men det å tenke over dem er verdifullt i seg selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Menneskerettighetene
// ============================================================================

export const CHAPTER_KRLE_7_3_2: TextbookChapter = {
  id: 'krle-7-3-2',
  courseId: 'krle-7',
  chapterNumber: '3.2',
  title: 'Menneskerettighetene',
  description: 'Lær om menneskerettighetene og deres betydning for alle mennesker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til menneskerettighetenes innhold og historie',
    'reflektere over menneskerettighetenes betydning'
  ],
  content: [
    {
      id: 'krle-7-3-2-intro',
      type: 'text',
      content: `
# Menneskerettighetene

Menneskerettighetene er grunnleggende rettigheter som alle mennesker har, uansett
hvem de er eller hvor de bor. De handler om verdighet, frihet og likeverd.
Disse rettighetene er ikke noe man må gjøre seg fortjent til - de er medfødte.
      `
    },
    {
      id: 'krle-7-3-2-def-mr',
      type: 'definition',
      title: 'Hva er menneskerettigheter?',
      content: `**Menneskerettigheter** er rettigheter alle mennesker har fra fødselen av.

**Kjennetegn:**
- **Universelle**: Gjelder alle mennesker i hele verden
- **Udelelige**: Alle rettighetene henger sammen
- **Umistelige**: Kan ikke tas fra deg

**Typer rettigheter:**
- **Sivile og politiske**: Ytringsfrihet, religionsfrihet, rett til rettferdig rettssak
- **Økonomiske, sosiale og kulturelle**: Rett til utdanning, arbeid, helse

FNs menneskerettighetserklæring fra 1948 er det viktigste dokumentet.`
    },
    {
      id: 'krle-7-3-2-historie',
      type: 'text',
      title: 'Menneskerettighetenes historie',
      content: `
## Historisk bakgrunn

**Gamle røtter:**
- Mange religioner og filosofier har lært om menneskets verdi
- Den gylne regel finnes i de fleste kulturer
- Ideer om naturlige rettigheter vokste fram i Europa fra 1600-tallet

**Viktige hendelser:**
- 1776: Den amerikanske uavhengighetserklæringen
- 1789: Den franske revolusjonen og erklæringen om menneskets rettigheter
- 1814: Norges grunnlov med flere rettigheter

**FNs menneskerettighetserklæring (1948):**
- Vedtatt etter andre verdenskrig og Holocaust
- Verden sa "aldri mer" til slike grusomheter
- 30 artikler som beskriver grunnleggende rettigheter
- Ikke juridisk bindende, men moralsk forpliktende
      `
    },
    {
      id: 'krle-7-3-2-rettigheter',
      type: 'text',
      title: 'Sentrale rettigheter',
      content: `
## Noen sentrale menneskerettigheter

**Artikkel 1**: Alle mennesker er født frie og med samme menneskeverd og rettigheter.

**Artikkel 2**: Ingen diskriminering på grunn av rase, kjønn, religion osv.

**Artikkel 3**: Rett til liv, frihet og personlig sikkerhet.

**Artikkel 5**: Forbud mot tortur.

**Artikkel 18**: Tanke-, samvittighets- og religionsfrihet.

**Artikkel 19**: Ytringsfrihet.

**Artikkel 26**: Rett til utdanning.

Det finnes også en egen barnekonvensjon med rettigheter spesielt for barn og unge.
      `
    },
    {
      id: 'krle-7-3-2-barnekonvensjonen',
      type: 'note',
      title: 'Barnekonvensjonen',
      content: `**FNs barnekonvensjon (1989)** handler om rettigheter for alle under 18 år.

**Fire hovedprinsipper:**
1. **Ikke-diskriminering**: Alle barn har samme rettigheter
2. **Barnets beste**: Skal alltid vurderes i saker som angår barn
3. **Rett til liv og utvikling**: Alle barn har rett til et godt liv
4. **Barns rett til å bli hørt**: Barn har rett til å si sin mening

**Viktige rettigheter:**
- Rett til navn og nasjonalitet
- Rett til å bo med foreldrene sine
- Rett til utdanning
- Rett til lek og fritid
- Beskyttelse mot vold og utnyttelse

Norge ratifiserte barnekonvensjonen i 1991, og den er en del av norsk lov.`
    },
    {
      id: 'krle-7-3-2-utfordringer',
      type: 'text',
      title: 'Utfordringer',
      content: `
## Menneskerettigheter i dag

Selv om menneskerettighetene finnes, brytes de dessverre mange steder:

**Eksempler på brudd:**
- Forfølgelse av religiøse eller etniske grupper
- Begrensninger av ytringsfrihet
- Barnearbeid
- Tortur og vilkårlig fengsling
- Diskriminering av kvinner

**Hvem passer på?**
- FN overvåker menneskerettighetene
- Menneskerettighetsdomstolen i Strasbourg (Europa)
- Amnesty International og andre organisasjoner
- Frie medier

**Din rolle:**
- Lær om rettighetene
- Si fra når du ser urett
- Respekter andres rettigheter
- Støtt organisasjoner som jobber for menneskerettigheter
      `
    },
    {
      id: 'krle-7-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er menneskerettigheter?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner menneskerettigheter?',
            solution: 'De er universelle (gjelder alle), udelelige (henger sammen) og umistelige (kan ikke tas fra deg)',
            multipleChoiceOptions: ['Universelle, udelelige og umistelige', 'Bare for voksne', 'Bare i Europa', 'Man må gjøre seg fortjent til dem'],
          },
        ],
        solution: 'Menneskerettigheter er grunnleggende rettigheter som gjelder alle mennesker fra fødselen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Når ble FNs menneskerettighetserklæring vedtatt, og hvorfor?',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble erklæringen vedtatt?',
            solution: '1948, etter andre verdenskrig',
            multipleChoiceOptions: ['1948, etter andre verdenskrig', '1789, etter den franske revolusjonen', '1814, da Norge fikk grunnlov', '2000, ved årtusenskiftet'],
          },
        ],
        solution: 'FNs menneskerettighetserklæring ble vedtatt i 1948, som et svar på grusomhetene under andre verdenskrig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er barnekonvensjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er barnekonvensjonen?',
            solution: 'FNs konvensjon om barns rettigheter fra 1989, som gir barn under 18 spesielle rettigheter',
            multipleChoiceOptions: ['FNs konvensjon om barns rettigheter', 'En lov bare for Norge', 'Regler for barnehager', 'En bok om barn'],
          },
        ],
        solution: 'Barnekonvensjonen er FNs konvensjon om rettighetene til alle mennesker under 18 år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over menneskerettigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en menneskerettighet som du mener er spesielt viktig. Forklar hvorfor.',
            solution: 'Personlig svar. Eksempler: Ytringsfrihet fordi den lar oss si meningen vår. Rett til utdanning fordi den gir muligheter. Religionsfrihet fordi alle skal få tro det de vil.',
            multipleChoiceOptions: ['En begrunnet refleksjon over en viktig rettighet', 'Alle rettigheter er like uviktige', 'Menneskerettigheter er unødvendige', 'Bare én rettighet finnes'],
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan menneskerettigheter kan brytes i dag, og hva som kan gjøres for å forhindre det.',
            solution: 'Eksempler: Barnearbeid - kan bekjempes gjennom utdanning og lover. Ytringsfrihet begrenses - medier og organisasjoner kan dokumentere brudd. Diskriminering - bevisstgjøring og lovverk.',
            multipleChoiceOptions: ['Et konkret eksempel med forslag til løsning', 'Menneskerettigheter brytes aldri', 'Ingenting kan gjøres', 'Bare stater kan hjelpe'],
          }
        ],
        hints: ['Tenk på rettigheter du selv er glad for å ha', 'Se nyheter for eksempler på brudd'],
        solution: 'Menneskerettighetene er viktige for at alle skal ha et verdig liv, men det kreves innsats for å beskytte dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Etiske dilemmaer
// ============================================================================

export const CHAPTER_KRLE_7_4_1: TextbookChapter = {
  id: 'krle-7-4-1',
  courseId: 'krle-7',
  chapterNumber: '4.1',
  title: 'Etiske dilemmaer',
  description: 'Lær å analysere etiske dilemmaer og ulike måter å tenke etisk på.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kunne drøfte etiske dilemmaer',
    'kjenne til ulike etiske tenkemåter'
  ],
  content: [
    {
      id: 'krle-7-4-1-intro',
      type: 'text',
      content: `
# Etiske dilemmaer

Et **etisk dilemma** er en situasjon der det er vanskelig å velge fordi
flere hensyn står mot hverandre. Det finnes ikke alltid ett "riktig" svar,
men vi kan bruke etisk tenkning til å ta gjennomtenkte valg.
      `
    },
    {
      id: 'krle-7-4-1-def-etikk',
      type: 'definition',
      title: 'Etikk og moral',
      content: `**Moral** er de normene og verdiene vi faktisk lever etter.

**Etikk** er systematisk tenkning om hva som er rett og galt.

**Et etisk dilemma** oppstår når:
- To gode verdier står mot hverandre
- Man må velge mellom to onde alternativer
- Det som er rett for én person, kan være galt for en annen
- Kort- og langsiktige konsekvenser peker i ulik retning

Etisk refleksjon handler om å tenke nøye gjennom slike situasjoner.`
    },
    {
      id: 'krle-7-4-1-konsekvensetikk',
      type: 'text',
      title: 'Konsekvensetikk',
      content: `
## Konsekvensetikk

Konsekvensetikk sier at en handling er rett hvis den fører til gode konsekvenser.

**Hovedidé:**
- Se på resultatet av handlingen
- Velg det alternativet som gir mest godt/minst vondt
- "Målet helliger midlet"?

**Utilitarisme:**
- Den mest kjente konsekvensetikken
- "Størst mulig lykke for flest mulig mennesker"
- Utviklet av Jeremy Bentham og John Stuart Mill

**Eksempel:**
Er det rett å lyve for å spare noen for smerte? En konsekvensetiker vil si:
hvis konsekvensene er bedre med løgnen, kan det være rett.

**Kritikk:**
- Vanskelig å forutse alle konsekvenser
- Kan rettferdiggjøre urettferdige handlinger
- Hva med mindretallets rettigheter?
      `
    },
    {
      id: 'krle-7-4-1-pliktetikk',
      type: 'text',
      title: 'Pliktetikk',
      content: `
## Pliktetikk

Pliktetikk sier at noen handlinger er riktige eller gale i seg selv, uavhengig av konsekvensene.

**Hovedidé:**
- Visse regler og plikter gjelder alltid
- Handlingens natur er viktigere enn resultatet
- Vi må respektere menneskets verdighet

**Immanuel Kant (1724-1804):**
- Tysk filosof, den mest kjente pliktetikeren
- "Handle slik at regelen for din handling kan bli en allmenn lov"
- Mennesket må alltid behandles som et mål, aldri bare som et middel

**Eksempel:**
Er det rett å lyve for å spare noen for smerte? En pliktetiker vil si:
løgn er alltid galt, uansett konsekvenser.

**Kritikk:**
- Kan være for rigid
- Hva gjør man når plikter kolliderer?
- Tar ikke hensyn til spesielle omstendigheter
      `
    },
    {
      id: 'krle-7-4-1-dydsetikk',
      type: 'text',
      title: 'Dydsetikk',
      content: `
## Dydsetikk

Dydsetikk fokuserer på karakteren til den som handler, ikke bare på handlingen.

**Hovedidé:**
- Spør: "Hva slags person vil jeg være?"
- Dyder er gode karakteregenskaper
- Vi utvikler dyder gjennom øvelse og vaner

**Aristoteles og dydene:**
- Aristoteles mente lykke (eudaimonia) er livets mål
- Lykke oppnås ved å leve et dydigt liv
- Dyder er en "gyllen middelvei" mellom ytterpunkter

**Eksempler på dyder:**
- Mot: Mellom feighet og dumdristighet
- Generøsitet: Mellom grådighet og ødselhet
- Ærlighet: Mellom løgnaktighet og hensynsløs ærlighet

**I dag:**
Dydsetikken spør: Hva ville et godt menneske gjort? Hva slags menneske former denne handlingen meg til å bli?
      `
    },
    {
      id: 'krle-7-4-1-eksempel',
      type: 'example',
      title: 'Eksempel: Trikk-dilemmaet',
      problem: `En løpsk trikk er i ferd med å drepe fem mennesker som er fastbundet på skinnene. Du kan trekke i en spak for å lede trikken inn på et sidespor, men der er det én person. Hva gjør du?`,
      solution: `**Konsekvensetisk perspektiv:**
Trekk i spaken. Én død er bedre enn fem døde.

**Pliktetisk perspektiv:**
Ikke trekk - da gjør DU aktivt noe som dreper. Å ikke handle er annerledes enn å drepe.

**Dydsetisk perspektiv:**
Hva ville et godt menneske gjort? Kanskje søke en tredje løsning?

Dette dilemmaet viser at ulike etiske perspektiver kan gi ulike svar.`
    },
    {
      id: 'krle-7-4-1-note',
      type: 'note',
      title: 'Hvordan analysere et etisk dilemma',
      content: `**Steg for etisk analyse:**

1. **Beskriv situasjonen**: Hva er fakta? Hvem er involvert?

2. **Identifiser verdiene**: Hvilke verdier eller prinsipper står mot hverandre?

3. **Vurder alternativene**: Hva kan du gjøre? Hva er konsekvensene?

4. **Bruk ulike perspektiver**: Hva sier konsekvensetikk? Pliktetikk? Dydsetikk?

5. **Ta et begrunnet valg**: Velg og forklar hvorfor.

6. **Reflekter**: Kunne du levd med valget? Er du villig til å forsvare det?`
    },
    {
      id: 'krle-7-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et etisk dilemma?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et etisk dilemma?',
            solution: 'En situasjon der det er vanskelig å velge fordi flere verdier eller hensyn står mot hverandre',
            multipleChoiceOptions: ['En vanskelig valgsituasjon med motstridende verdier', 'Et matematisk problem', 'Et enkelt valg', 'En regel alle er enige om'],
          },
        ],
        solution: 'Et etisk dilemma er en situasjon der det er vanskelig å velge fordi ulike verdier eller prinsipper kolliderer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Forklar de tre etiske tenkemåtene.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedideen i konsekvensetikk?',
            solution: 'At en handling er rett hvis den fører til gode konsekvenser',
            multipleChoiceOptions: ['Handlingen er rett hvis konsekvensene er gode', 'Man skal alltid følge regler', 'Karakteren er viktigst', 'Handlinger har ingen konsekvenser'],
          },
        ],
        solution: 'Konsekvensetikk bedømmer handlinger etter deres resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvem var Kant, og hva mente han?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente Kant om hvordan vi skal handle?',
            solution: 'Handle slik at regelen for din handling kan bli en allmenn lov, og behandle mennesker som mål, ikke bare som midler',
            multipleChoiceOptions: ['Handle så regelen kan bli allmenn lov', 'Alltid gjøre det som føles godt', 'Aldri følge regler', 'Bare tenke på seg selv'],
          },
        ],
        solution: 'Kant mente at vi skal handle etter regler som kunne gjelde for alle, og alltid respektere menneskets verdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser et etisk dilemma.',
        subTasks: [
          {
            label: 'a',
            task: 'Du finner en lommebok med 1000 kroner og ID-kort. Du trenger sårt penger. Hva gjør en konsekvensetiker?',
            solution: 'En konsekvensetiker vurderer konsekvensene: Eieren blir glad for å få tilbake lommeboken, mens jeg klarer meg uten pengene. Men hvis jeg virkelig trenger dem, kanskje konsekvensen er bedre om jeg beholder dem?',
            multipleChoiceOptions: ['Vurderer hvilken handling gir best konsekvenser totalt', 'Beholder alltid pengene', 'Leverer alltid tilbake', 'Spør en voksen'],
          },
          {
            label: 'b',
            task: 'Hva ville en pliktetiker si? Og hva ville du selv gjort?',
            solution: 'Pliktetiker: Å beholde noe som tilhører andre er alltid galt. Personlig svar med begrunnelse.',
            multipleChoiceOptions: ['Pliktetiker: Levere tilbake fordi tyveri er galt', 'Pliktetiker: Beholde pengene', 'Plikten er å tenke på seg selv', 'Pliktetikk handler ikke om dette'],
          }
        ],
        hints: ['Tenk på hvem som påvirkes', 'Bruk de tre etiske perspektivene'],
        solution: 'Ulike etiske perspektiver kan gi ulike svar, men alle krever at vi tenker grundig gjennom situasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Identitet og tilhørighet
// ============================================================================

export const CHAPTER_KRLE_7_4_2: TextbookChapter = {
  id: 'krle-7-4-2',
  courseId: 'krle-7',
  chapterNumber: '4.2',
  title: 'Identitet og tilhørighet',
  description: 'Utforsk hva som former hvem vi er, og hva tilhørighet betyr.',
  estimatedMinutes: 40,
  competenceGoals: [
    'reflektere over identitet og hva som påvirker den',
    'forstå betydningen av tilhørighet'
  ],
  content: [
    {
      id: 'krle-7-4-2-intro',
      type: 'text',
      content: `
# Identitet og tilhørighet

Hvem er du? Dette spørsmålet høres enkelt ut, men det er faktisk ganske
komplekst. **Identitet** handler om hvem vi er og hvem vi opplever oss selv
som. **Tilhørighet** handler om hvor vi føler at vi hører hjemme.
      `
    },
    {
      id: 'krle-7-4-2-def-identitet',
      type: 'definition',
      title: 'Hva er identitet?',
      content: `**Identitet** er summen av det som gjør deg til deg.

**Identitet inkluderer:**
- **Personlig identitet**: Dine tanker, følelser, verdier, drømmer
- **Sosial identitet**: Grupper du tilhører, roller du har
- **Kulturell identitet**: Språk, tradisjoner, kulturelt opphav

**Identitet er:**
- Delvis gitt (kjønn, familie, fødested)
- Delvis valgt (interesser, venner, verdier)
- I stadig utvikling gjennom livet

I ungdomstiden er identitetsutvikling spesielt viktig - du utforsker hvem du er og vil bli.`
    },
    {
      id: 'krle-7-4-2-pavirker',
      type: 'text',
      title: 'Hva påvirker identiteten?',
      content: `
## Hva former hvem vi er?

**Familie:**
- Første og viktigste påvirkning
- Verdier, språk, tradisjoner
- Følelse av røtter og tilhørighet

**Venner:**
- Blir viktigere i ungdomstiden
- Vi påvirkes av og påvirker våre venner
- Ønsket om å passe inn

**Kultur og samfunn:**
- Medier, sosiale medier, trender
- Nasjonalitet, lokalsamfunn
- Religion eller livssyn

**Egne erfaringer:**
- Ting vi opplever og gjør
- Utfordringer vi overvinner
- Interesser og talenter

**Valg:**
- Vi velger delvis hvem vi vil være
- Hvilke verdier vi vil leve etter
- Hvilke grupper vi vil tilhøre
      `
    },
    {
      id: 'krle-7-4-2-tilhorighet',
      type: 'text',
      title: 'Tilhørighet',
      content: `
## Følelsen av tilhørighet

Alle mennesker har behov for å høre til et sted og føle seg som en del av noe større.

**Hvor kan man føle tilhørighet?**
- Familie
- Vennegjeng
- Klasse/skole
- Idrettslag, korps, organisasjoner
- Religiøst fellesskap
- Lokalsamfunn
- Land/nasjon
- Interessefellesskap (gaming, musikk, osv.)

**Hvorfor er tilhørighet viktig?**
- Gir trygghet og støtte
- Skaper fellesskap og mening
- Hjelper oss å forstå hvem vi er
- Gir rammer for livet

**Utfordringer:**
- Man kan føle seg utenfor
- Press om å tilpasse seg
- Konflikter mellom ulike tilhørigheter
      `
    },
    {
      id: 'krle-7-4-2-mangfold',
      type: 'text',
      title: 'Mangfoldige identiteter',
      content: `
## Sammensatte identiteter i en mangfoldig verden

De fleste av oss har sammensatte identiteter - vi tilhører mange grupper samtidig.

**Eksempel:**
Sara kan være norsk-pakistansk, muslim, fotballspiller, elev, storesøster,
og fan av K-pop - alt på samme tid!

**I et mangfoldig samfunn:**
- Vi møter mennesker med ulik bakgrunn
- Vi kan lære av hverandre
- Noen opplever å stå "mellom" kulturer
- Det er normalt å ha flere tilhørigheter

**Respekt for ulikhet:**
- Alle har rett til sin identitet
- Vi trenger ikke være like for å respektere hverandre
- Mangfold beriker samfunnet
- Fordommer og diskriminering er skadelig
      `
    },
    {
      id: 'krle-7-4-2-press',
      type: 'note',
      title: 'Press og forventninger',
      content: `I ungdomstiden kan man oppleve press fra mange kanter:

**Press kan komme fra:**
- Venner: "Alle andre gjør det"
- Familie: Forventninger om oppførsel, utdanning
- Samfunn: Idealer om utseende, suksess
- Sosiale medier: Perfekte liv, likes, følgere

**Viktig å huske:**
- Du trenger ikke være som alle andre
- Det er lov å si nei
- Ekte venner respekterer dine valg
- Det som vises på sosiale medier er ofte redigert
- Å være annerledes kan være en styrke

**Å være seg selv:**
Det tar tid å finne ut hvem man er. Det er normalt å prøve ut ulike ting
og endre seg. Viktigst er å være ærlig mot seg selv.`
    },
    {
      id: 'krle-7-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er identitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med identitet?',
            solution: 'Summen av det som gjør deg til deg - dine tanker, verdier, roller og tilhørigheter',
            multipleChoiceOptions: ['Summen av det som gjør deg til deg', 'Bare navnet ditt', 'Hvor du bor', 'Hva du spiser'],
          },
        ],
        solution: 'Identitet er summen av personlige egenskaper, sosiale roller og kulturell bakgrunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva påvirker identiteten vår?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre ting som påvirker identiteten.',
            solution: 'Familie, venner, kultur/samfunn, egne erfaringer, valg, medier, religion/livssyn',
            multipleChoiceOptions: ['Familie, venner og kultur', 'Bare foreldrene', 'Bare venner', 'Bare mediene'],
          },
        ],
        solution: 'Identiteten påvirkes av mange ting: familie, venner, kultur, erfaringer og egne valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er tilhørighet viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor trenger mennesker å føle tilhørighet?',
            solution: 'Fordi det gir trygghet, støtte, fellesskap og mening, og hjelper oss å forstå hvem vi er',
            multipleChoiceOptions: ['Gir trygghet, støtte og fellesskap', 'Det er ikke viktig', 'Bare for å få venner', 'For å bli populær'],
          },
        ],
        solution: 'Tilhørighet gir oss trygghet, støtte og en følelse av å være del av noe større.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over din egen identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke grupper føler du tilhørighet til? Nevn minst tre.',
            solution: 'Personlig svar. Eksempler: Familie, klasse, idrettslag, vennegjengen, bygda/byen, landet, interessefellesskap.',
            multipleChoiceOptions: ['Konkrete eksempler på grupper jeg tilhører', 'Jeg tilhører ingen grupper', 'Bare én gruppe er viktig', 'Tilhørighet er irrelevant'],
          },
          {
            label: 'b',
            task: 'Hva er tre ting som er viktige for hvem du er? (verdier, interesser, egenskaper)',
            solution: 'Personlig svar. Eksempler: Ærlighet, familie, musikk, sport, venner, kreativitet, hjelpsom, nysgjerrig.',
            multipleChoiceOptions: ['Viktige verdier, interesser eller egenskaper for meg', 'Ingenting er viktig', 'Bare én ting definerer meg', 'Jeg vet ikke hvem jeg er'],
          }
        ],
        hints: ['Tenk på hva du liker å gjøre', 'Tenk på hva som er viktig for deg'],
        solution: 'Å reflektere over egen identitet og tilhørighet er en viktig del av å bli voksen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-7-4-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'krle-7-4-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Diskuter press og forventninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi et eksempel på press du eller andre kan oppleve i ungdomstiden. Hva kan man gjøre for å håndtere det?',
            solution: 'Eksempler på press: Se ut på en bestemt måte, ha de rette klærne, være med på ting man ikke vil, prestere. Håndtering: Si nei, snakke med noen, huske at du ikke trenger være som alle andre.',
            multipleChoiceOptions: ['Et konkret eksempel med forslag til håndtering', 'Det finnes ikke press', 'Man må alltid gi etter for press', 'Bare voksne kan hjelpe'],
          },
        ],
        hints: ['Tenk på ulike typer press', 'Hva ville du sagt til en venn som opplevde press?'],
        solution: 'Press kan komme fra mange kanter, men det er viktig å huske at man har lov til å være seg selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const KRLE_7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KRLE_7_1_1,
  CHAPTER_KRLE_7_1_2,
  CHAPTER_KRLE_7_2_1,
  CHAPTER_KRLE_7_2_2,
  CHAPTER_KRLE_7_3_1,
  CHAPTER_KRLE_7_3_2,
  CHAPTER_KRLE_7_4_1,
  CHAPTER_KRLE_7_4_2,
];

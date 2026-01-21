/**
 * Tekstbok innhold for Religion og etikk (VG3)
 *
 * Folger LK20 lareplan for religion og etikk.
 * Dekker religionsvitenskap, verdensreligioner, etiske teorier,
 * livssyn, menneskerettigheter og religionsdialog.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Religionsvitenskap - metode og begreper
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_1: TextbookChapter = {
  id: 'religion-etikk-1',
  courseId: 'religion-etikk',
  chapterNumber: '1',
  title: 'Religionsvitenskap - metode og begreper',
  description: 'Lær om hvordan religioner studeres vitenskapelig og sentrale begreper i religionsforskning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke relevante fagbegreper til å analysere religioner og livssyn',
    'gjøre rede for og drøfte ulike definisjoner av religion',
    'reflektere over metodiske utfordringer ved studiet av religion',
  ],
  content: [
    {
      id: 'religion-etikk-1-intro',
      type: 'text',
      content: `## Hva er religionsvitenskap?

Religionsvitenskap er det akademiske studiet av religioner. I motsetning til teologi, som ofte studerer religion innenfra, studerer religionsvitenskapen religion som et menneskelig fenomen utenfra.

**Religionsvitenskapens kjennetegn:**
- Deskriptiv (beskrivende) heller enn normativ (vurderende)
- Komparativ - sammenligner religioner
- Bruker teorier og metoder fra andre fag
- Søker å forstå religioners funksjon og betydning

**Sentrale spørsmål:**
- Hva er religion?
- Hvorfor finnes religion?
- Hvordan påvirker religion mennesker og samfunn?
- Hvordan endrer religioner seg over tid?`,
    },
    {
      id: 'religion-etikk-1-def-1',
      type: 'definition',
      title: 'Definisjoner av religion',
      content: `**Substansielle definisjoner:**
Fokuserer på hva religion er - innholdet. Ofte knyttet til tro på overnaturlige vesener eller makter.

*Eksempel:* "Religion er troen på åndelige vesener" (E.B. Tylor)

**Funksjonelle definisjoner:**
Fokuserer på hva religion gjør - funksjonen den har for individ og samfunn.

*Eksempel:* "Religion er et system av symboler som skaper sterke, gjennomtrengende og langvarige stemninger og motivasjoner" (Clifford Geertz)

**Familielikhet:**
Ludwig Wittgenstein foreslo at religioner deler "familielikhet" - de har overlappende trekk, men ingen felles essens som alle deler.

**Utfordringer med definisjoner:**
- For snevre definisjoner utelukker noen religioner
- For vide definisjoner inkluderer ikke-religiøse fenomener
- Vestlige definisjoner passer ikke alltid østlige religioner`,
    },
    {
      id: 'religion-etikk-1-def-2',
      type: 'definition',
      title: 'Sentrale religionsvitenskapelige begreper',
      content: `**Ritual:**
Gjentatte, symbolske handlinger med religiøs betydning. Eksempler: bønn, ofring, pilegrimsreise.

**Myte:**
Hellig fortelling som forklarer verden, dens opprinnelse, eller religiøse sannheter. Ikke "usann" i religionsvitenskapelig forstand.

**Symbol:**
Noe som representerer eller peker mot noe annet. Korset symboliserer kristendommen, halvmånen islam.

**Sakral/profan:**
Skillet mellom det hellige (sakrale) og det verdslige (profane). Viktig i mange religioner.

**Rite de passage:**
Overgangsritualer som markerer livsfaser: fødsel, pubertet, ekteskap, død.

**Synkretisme:**
Sammenblanding av elementer fra ulike religioner.

**Sekularisering:**
Prosessen der religion mister innflytelse i samfunnet.`,
    },
    {
      id: 'religion-etikk-1-def-3',
      type: 'definition',
      title: 'Metodiske tilnærminger',
      content: `**Fenomenologi:**
Studerer religiøse fenomener slik de fremtrer for de troende, uten å ta stilling til sannhetsverdi.

**Komparativ metode:**
Sammenligner religioner for å finne likheter og forskjeller.

**Historisk metode:**
Studerer religioners utvikling over tid.

**Sosiologisk tilnærming:**
Studerer religionens sosiale funksjoner og rolle i samfunnet.

**Psykologisk tilnærming:**
Studerer religiøse opplevelser og religionens betydning for individet.

**Emisk vs. etisk perspektiv:**
- Emisk: Innenfra-perspektiv (de troendes egen forståelse)
- Etisk: Utenfra-perspektiv (forskerens analyse)`,
    },
    {
      id: 'religion-etikk-1-example-1',
      type: 'example',
      title: 'Eksempel: Analysere et religiøst ritual',
      problem: `Hvordan kan en religionsviter analysere nattverden i kristendommen?`,
      solution: `**Fenomenologisk analyse:**
Beskriver ritualet slik det oppleves av deltakerne - fellesskap, hellig måltid, møte med det guddommelige.

**Historisk analyse:**
Sporer ritualets opprinnelse til Jesus' siste måltid, dets utvikling gjennom kirkehistorien, og ulike tolkninger (katolsk vs. protestantisk).

**Sosiologisk analyse:**
Ser på ritualets funksjon for å skape fellesskap og identitet, markere tilhørighet til gruppen.

**Komparativ analyse:**
Sammenligner med hellige måltider i andre religioner - jødisk påskemåltid, hinduistisk prasad.

**Symbolsk analyse:**
Tolker symbolene - brød og vin som Kristi kropp og blod, fellesskapets betydning, erindring om Jesu død.`,
    },
    {
      id: 'religion-etikk-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-1-ex-1',
        number: '1.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom substansielle og funksjonelle definisjoner av religion.',
        hints: ['Tenk på hva religion ER versus hva religion GJØR'],
        solution: 'Substansielle definisjoner fokuserer på religionens innhold - typisk tro på overnaturlige vesener eller krefter. Funksjonelle definisjoner fokuserer på hva religion gjør for mennesker og samfunn - gir mening, fellesskap, moral osv. Begge har styrker og svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-1-ex-2',
        number: '1.2',
        type: 'classic',
        task: 'Hva menes med emisk og etisk perspektiv i religionsvitenskapen?',
        hints: ['Tenk på innenfra vs. utenfra'],
        solution: 'Emisk perspektiv er innenfra-perspektivet - hvordan de troende selv forstår sin religion. Etisk perspektiv er utenfra-perspektivet - forskerens analyse med vitenskapelige begreper. Begge er viktige for god religionsforståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-1-ex-3',
        number: '1.3',
        type: 'classic',
        task: 'Hva er en myte i religionsvitenskapelig forstand, og hvorfor brukes ikke begrepet som "usann historie"?',
        hints: ['Tenk på mytens funksjon i religioner'],
        solution: 'I religionsvitenskapen er en myte en hellig fortelling som formidler religiøse sannheter og forklarer verden. Den vurderes ikke som "sann" eller "usann" i naturvitenskapelig forstand, men studeres for sin betydning og funksjon for de troende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-1-ex-4',
        number: '1.4',
        type: 'classic',
        task: 'Drøft utfordringer ved å definere begrepet "religion".',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke problemer kan oppstå med for snevre definisjoner?',
            solution: 'For snevre definisjoner kan utelukke religioner som buddhisme (uten gudstro) eller konfucianisme.',
          },
          {
            label: 'b',
            task: 'Hvilke problemer kan oppstå med for vide definisjoner?',
            solution: 'For vide definisjoner kan inkludere fenomener som fotballsupporting eller politiske ideologier, som ikke vanligvis regnes som religion.',
          },
        ],
        solution: 'Definisjoner av religion må balansere mellom å være for snevre (utelukker noen religioner) og for vide (inkluderer ikke-religiøse fenomener).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-1-ex-5',
        number: '1.5',
        type: 'classic',
        task: 'Velg et religiøst ritual du kjenner til og analyser det fra ulike religionsvitenskapelige perspektiver.',
        hints: ['Bruk fenomenologisk, historisk, sosiologisk eller symbolsk tilnærming'],
        solution: 'Svaret vil variere. For konfirmasjon: Fenomenologisk - hvordan ungdommen opplever overgangen. Historisk - ritualets utvikling fra reformasjonen. Sosiologisk - markerer overgang til voksenlivet, tilhørighet til kirken. Symbolsk - hvit kjole, håndspåleggelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-1-ex-6',
        number: '1.6',
        type: 'classic',
        task: 'Hva menes med sekularisering, og hvordan viser dette seg i Norge?',
        hints: ['Tenk på religionens rolle i samfunnet før og nå'],
        solution: 'Sekularisering er prosessen der religion mister innflytelse i samfunnet. I Norge ser vi dette gjennom: Færre kirkebesøk, synkende medlemstall i kirken, mindre religiøs påvirkning på lovgivning, skilsmisse stat/kirke, økt religiøst mangfold, og færre som tror på Gud.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Kristendommens historie og mangfold
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_2: TextbookChapter = {
  id: 'religion-etikk-2',
  courseId: 'religion-etikk',
  chapterNumber: '2',
  title: 'Kristendommens historie og mangfold',
  description: 'Utforsk kristendommens utvikling fra urkirken til dagens mangfold av kirkesamfunn.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for sentrale trekk ved kristendommens historie',
    'sammenligne ulike kristne tradisjoner og retninger',
    'analysere kristendommens rolle i samfunnet historisk og i dag',
  ],
  content: [
    {
      id: 'religion-etikk-2-intro',
      type: 'text',
      content: `## Kristendommens vei gjennom historien

Kristendommen oppsto i det første århundret som en jødisk bevegelse rundt Jesus fra Nasaret. I dag er den verdens største religion med over 2 milliarder tilhengere.

**Hovedperioder:**
- Urkirken (ca. 30-100 e.Kr.)
- Oldkirken og konsilene (100-500 e.Kr.)
- Middelalderen (500-1500)
- Reformasjonen (1500-tallet)
- Moderne tid (1500-i dag)

**Hovedretninger i dag:**
- Den katolske kirke (ca. 1,3 milliarder)
- Protestantiske kirker (ca. 800 millioner)
- Ortodokse kirker (ca. 300 millioner)
- Andre retninger (pinsevenner, adventister, etc.)`,
    },
    {
      id: 'religion-etikk-2-def-1',
      type: 'definition',
      title: 'Fra urkirke til statsreligion',
      content: `**Urkirken (ca. 30-100 e.Kr.):**
- Jesus' liv, død og oppstandelse
- Disiplene sprer budskapet
- Paulus' misjonsreiser til ikke-jøder
- Forfølgelser under romerske keisere
- Nye testamentet skrives

**Oldkirken (100-500 e.Kr.):**
- Kirkefedre utvikler teologi
- Konsilene definerer trosbekjennelser
- Nikea 325: Treenigheten fastslås
- Kalkedon 451: Kristi to naturer
- Kristendommen blir statsreligion (380)

**Kirkens deling:**
- Øst og vest glir fra hverandre
- Det store skisma 1054
- Ortodokse kirker i øst, katolsk kirke i vest`,
    },
    {
      id: 'religion-etikk-2-def-2',
      type: 'definition',
      title: 'Reformasjonen og protestantismen',
      content: `**Bakgrunn for reformasjonen:**
- Kritikk av avlatshandel
- Krav om kirkefornyelse
- Renessansens humanisme
- Boktrykkerkunsten sprer ideer

**Martin Luther (1483-1546):**
- 95 teser (1517)
- "Skriften alene" (sola scriptura)
- "Troen alene" (sola fide)
- "Nåden alene" (sola gratia)
- Oversatte Bibelen til tysk

**Andre reformatorer:**
- Jean Calvin: Predestinasjonslæren, streng moral
- Ulrich Zwingli: Sveitsisk reformasjon
- Henrik VIII: Anglikansk kirke

**Motreformasjonen:**
Katolsk fornyelse og motstand, Jesuittordenen, Tridentinerkonsilet.`,
    },
    {
      id: 'religion-etikk-2-def-3',
      type: 'definition',
      title: 'De tre hovedretningene',
      content: `**Den katolske kirke:**
- Paven som Kristi stedfortreder
- Tradisjonen like viktig som Bibelen
- 7 sakramenter
- Maria- og helgendyrkelse
- Sølibat for prester

**Ortodokse kirker:**
- Patriarker leder nasjonale kirker
- Rik liturgi og ikoner
- Mystikk og hesykasme
- 7 sakramenter
- Prester kan gifte seg før ordinasjon

**Protestantiske kirker:**
- Bibelen som eneste autoritet
- 2 sakramenter (dåp, nattverd)
- Alle troende er prester
- Ingen pave eller hierarki
- Mange ulike kirkesamfunn`,
    },
    {
      id: 'religion-etikk-2-example-1',
      type: 'example',
      title: 'Eksempel: Forskjeller i nattverdsforståelse',
      problem: `Hvordan forstår de tre hovedretningene nattverden ulikt?`,
      solution: `**Katolsk forståelse (transsubstansiasjon):**
Brødet og vinen forvandles til Kristi virkelige kropp og blod. Substansen endres, selv om utseendet forblir likt. Det er et virkelig offer.

**Luthersk forståelse (konsubstansiasjon):**
Kristus er virkelig til stede "i, med og under" brødet og vinen. Substansen forblir, men Kristus er reelt nærværende.

**Reformert forståelse (symbolsk):**
Brødet og vinen er symboler som minner om Kristi død. Kristus er åndelig, ikke fysisk til stede.

**Ortodoks forståelse:**
Brødet og vinen blir Kristi kropp og blod, men kirken definerer ikke hvordan. Mysteriet bevares.`,
    },
    {
      id: 'religion-etikk-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-2-ex-1',
        number: '2.1',
        type: 'classic',
        task: 'Forklar hva som menes med Luthers "tre alene" (sola scriptura, sola fide, sola gratia).',
        hints: ['Tenk på hva Luther kritiserte ved den katolske kirken'],
        solution: 'Sola scriptura: Bibelen alene er autoritet (ikke tradisjonen). Sola fide: Troen alene frelser (ikke gjerninger). Sola gratia: Nåden alene (mennesket kan ikke fortjene frelse). Dette var et brudd med katolsk lære om tradisjon, gjerninger og sakramenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-2-ex-2',
        number: '2.2',
        type: 'classic',
        task: 'Hva var de viktigste årsakene til Det store skisma i 1054?',
        hints: ['Tenk på teologiske, kulturelle og politiske faktorer'],
        solution: 'Årsakene inkluderte: Uenighet om pavens makt, filioque-striden (om Ånden utgår fra Faderen alene eller også Sønnen), bruk av usyret vs. syret brød, kulturelle forskjeller mellom gresk øst og latinsk vest, politiske motsetninger mellom Roma og Konstantinopel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-2-ex-3',
        number: '2.3',
        type: 'classic',
        task: 'Sammenlign den katolske og den lutherske kirken på tre sentrale punkter.',
        subTasks: [
          {
            label: 'a',
            task: 'Autoritet og ledelse',
            solution: 'Katolsk: Paven er øverste leder med ufeilbarlighet i trosspørsmål. Luthersk: Ingen pave, biskoper eller kirkeråd leder, men ingen er ufeilbarlig.',
          },
          {
            label: 'b',
            task: 'Bibel og tradisjon',
            solution: 'Katolsk: Bibelen og tradisjonen er begge autoritative. Luthersk: Bibelen alene er autoritet (sola scriptura).',
          },
          {
            label: 'c',
            task: 'Sakramenter',
            solution: 'Katolsk: 7 sakramenter. Luthersk: 2 sakramenter (dåp og nattverd), da bare disse er innstiftet av Jesus i Bibelen.',
          },
        ],
        solution: 'Forskjellene gjelder autoritet (pave vs. ingen pave), kilder (tradisjon + Bibel vs. Bibelen alene), og sakramenter (7 vs. 2).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-2-ex-4',
        number: '2.4',
        type: 'classic',
        task: 'Hvordan bidro boktrykkerkunsten til reformasjonens spredning?',
        hints: ['Tenk på informasjonsspredning og tilgang til Bibelen'],
        solution: 'Boktrykkerkunsten gjorde det mulig å trykke og spre Luthers skrifter raskt. Bibelen kunne oversettes og trykkes på folkespråk, slik at vanlige folk kunne lese den selv. Reformatoriske ideer nådde mange flere enn tidligere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-2-ex-5',
        number: '2.5',
        type: 'classic',
        task: 'Hva kjennetegner den ortodokse kristendommens spiritualitet og gudstjeneste?',
        hints: ['Tenk på ikoner, liturgi og mystikk'],
        solution: 'Ortodoks spiritualitet kjennetegnes av: Rik liturgi med sang og røkelse, ikoner som vinduer til det guddommelige, vekt på mysteriet og det uutsigelige, hesykasme (indre stillhet og bønn), fastetider, og en sterk følelse av kontinuitet med oldkirken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-2-ex-6',
        number: '2.6',
        type: 'classic',
        task: 'Drøft hvordan kristendommen har påvirket norsk kultur og samfunn.',
        hints: ['Tenk på lovverk, høytider, verdier, kunst og arkitektur'],
        solution: 'Kristendommen har påvirket Norge gjennom: Lovverk basert på kristen etikk, høytider som jul og påske, kirkens rolle i utdanning og helsevesen historisk, arkitektur (stavkirker, katedraler), kunst og litteratur, og verdier som nestekjærlighet og menneskeverd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Islam - tro, praksis og samfunn
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_3: TextbookChapter = {
  id: 'religion-etikk-3',
  courseId: 'religion-etikk',
  chapterNumber: '3',
  title: 'Islam - tro, praksis og samfunn',
  description: 'Utforsk islams grunnleggende tro, de fem søylene, og religionens mangfold.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for sentrale trekk ved islam',
    'sammenligne ulike retninger innen islam',
    'analysere forholdet mellom religion og samfunn i islam',
  ],
  content: [
    {
      id: 'religion-etikk-3-intro',
      type: 'text',
      content: `## Islams grunnlag

Islam er verdens nest største religion med ca. 1,8 milliarder tilhengere. Ordet "islam" betyr "underkastelse" (under Guds vilje), og en som praktiserer islam kalles muslim ("en som underkaster seg").

**Islams opprinnelse:**
- Profeten Muhammad (570-632 e.Kr.)
- Mekka og Medina i Arabia
- Koranen åpenbart over 23 år
- Spredning til store deler av verden

**Sentrale trosforestillinger:**
- Monoteisme - Allah er den ene Gud
- Muhammad som den siste profet
- Koranen som Guds ord
- Engler, profeter, dommedag
- Guds forutbestemmelse (qadar)`,
    },
    {
      id: 'religion-etikk-3-def-1',
      type: 'definition',
      title: 'De fem søylene (arkan al-islam)',
      content: `**1. Trosbekjennelsen (shahada):**
"Det er ingen gud unntatt Allah, og Muhammad er hans profet."
Å uttale dette med oppriktig hjerte gjør en til muslim.

**2. Bønnen (salat):**
Fem daglige bønner mot Mekka. Rituell vask før bønn. Fredagsbønn i moskeen.

**3. Almissen (zakat):**
2,5% av formuen gis årlig til trengende. Obligatorisk for de som har råd.

**4. Fasten (sawm):**
Faste fra soloppgang til solnedgang i ramadan. Avhold fra mat, drikke, røyk og sex.

**5. Pilegrimsreisen (hajj):**
Reise til Mekka minst én gang i livet for de som har helse og råd. Hvite klær, vandring rundt Kabaen.`,
    },
    {
      id: 'religion-etikk-3-def-2',
      type: 'definition',
      title: 'Koranen og hadith',
      content: `**Koranen:**
- Guds direkte ord, åpenbart til Muhammad
- 114 suraer (kapitler)
- Opprinnelig muntlig overlevert
- Arabisk regnes som hellig språk
- Kan ikke oversettes fullverdig
- Resitasjon er en fromhetshandling

**Hadith:**
- Beretninger om Muhammads liv og utsagn
- Veileder i spørsmål Koranen ikke dekker
- Sunnien - Muhammads eksempel
- Ulike samlinger med ulik autoritet
- Isnad - kjeden av overleverere

**Sharia:**
Islamsk lov basert på Koranen, hadith, konsensus og analogi. Dekker alle livets områder.`,
    },
    {
      id: 'religion-etikk-3-def-3',
      type: 'definition',
      title: 'Sunni og shia',
      content: `**Bakgrunn for delingen:**
Strid om hvem som skulle lede etter Muhammad. Sunnier støttet Abu Bakr, shiaer støttet Ali (Muhammads svigersønn).

**Sunni-islam (ca. 85-90%):**
- De fire første kalifene var legitime
- Koranen og sunnah er hovedkilder
- Fire lovskoler (madhab)
- Ulama (lærde) tolker, men ingen presteskap

**Shia-islam (ca. 10-15%):**
- Bare Ali og hans etterkommere var legitime
- Imamene som ufeilbarlige ledere
- Tolv imamer (tolverskia)
- Sterkere presteskap (ayatollaher)
- Større vekt på lidelse og martyrium

**Andre retninger:**
Sufisme (mystikk), ahmadiyya, ibadisme.`,
    },
    {
      id: 'religion-etikk-3-example-1',
      type: 'example',
      title: 'Eksempel: Islams syn på Jesus',
      problem: `Hvordan forstår islam Jesus (Isa), og hvordan skiller dette seg fra kristendommen?`,
      solution: `**Islams syn på Jesus (Isa):**
- En av de store profetene
- Født av jomfru Maria (Maryam)
- Gjorde mirakler med Guds kraft
- Brakte Injil (evangeliet)
- Ble IKKE korsfestet - en annen tok hans plass
- Ble tatt opp til himmelen levende
- Skal komme tilbake ved tidens ende
- Er IKKE Guds sønn eller guddommelig

**Forskjeller fra kristendommen:**
- Kristendom: Jesus er Guds sønn, del av treenigheten
- Islam: Jesus er et menneske, en profet
- Kristendom: Jesus døde på korset for våre synder
- Islam: Jesus ble ikke korsfestet
- Kristendom: Jesus er veien til frelse
- Islam: Muhammad er den siste og største profet`,
    },
    {
      id: 'religion-etikk-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-3-ex-1',
        number: '3.1',
        type: 'classic',
        task: 'Forklar de fem søylene i islam og deres betydning.',
        hints: ['Tenk på hvordan hver søyle former muslimers liv'],
        solution: 'De fem søylene er: Shahada (trosbekjennelse) - definerer troen. Salat (bønn) - fem daglige bønner skaper rytme og gudsnærvær. Zakat (almisse) - sosial rettferdighet. Sawm (faste i ramadan) - selvdisiplin og empati. Hajj (pilegrimsreise) - fellesskap og likhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-3-ex-2',
        number: '3.2',
        type: 'classic',
        task: 'Hva er bakgrunnen for delingen mellom sunni og shia?',
        hints: ['Tenk på spørsmålet om ledelse etter Muhammad'],
        solution: 'Delingen oppsto etter Muhammads død i 632. Sunnier mente lederen (kalif) skulle velges blant de mest kvalifiserte, og støttet Abu Bakr. Shiaer mente lederskapet måtte gå i arv gjennom Muhammads familie, og støttet Ali. Konflikten ble forsterket da Ali og hans sønn Husayn ble drept.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-3-ex-3',
        number: '3.3',
        type: 'classic',
        task: 'Hvordan skiller Koranens status seg fra Bibelens status i kristendommen?',
        hints: ['Tenk på synet på inspirasjon og språk'],
        solution: 'Koranen regnes som Guds direkte ord, diktert til Muhammad. Språket (arabisk) er hellig og kan ikke fullt oversettes. Bibelen regnes som gudsinspirert, men skrevet av mennesker. Den kan oversettes fritt. Koranen resiteres på arabisk selv av ikke-arabiske muslimer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-3-ex-4',
        number: '3.4',
        type: 'classic',
        task: 'Hva er sharia, og hvilke kilder er den basert på?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer sharia.',
            solution: 'Sharia er islamsk lov som skal veilede muslimer i alle livets områder - fra ritualer til forretningsliv og familieliv.',
          },
          {
            label: 'b',
            task: 'Forklar de fire kildene til sharia.',
            solution: 'De fire kildene er: Koranen (Guds ord), sunna/hadith (Muhammads eksempel), ijma (konsensus blant lærde), og qiyas (analogislutninger fra kjente regler til nye situasjoner).',
          },
        ],
        solution: 'Sharia er islamsk lov basert på Koranen, sunna, konsensus og analogi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-3-ex-5',
        number: '3.5',
        type: 'classic',
        task: 'Hva er sufisme, og hvordan skiller den seg fra tradisjonell islam?',
        hints: ['Tenk på mystikk og indre opplevelse'],
        solution: 'Sufisme er islams mystiske retning. Den vektlegger indre opplevelse av Gud, kjærlighet til Gud, og åndelig renselse. Sufier praktiserer meditasjon, sang (dhikr), og følger en mester (sheikh). Noen tradisjonelle muslimer kritiserer sufisme for å fjerne seg fra Koranen og sunna.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-3-ex-6',
        number: '3.6',
        type: 'classic',
        task: 'Drøft forholdet mellom islam, jødedom og kristendom som "bokens religioner".',
        hints: ['Tenk på felles historie, profeter og tro'],
        solution: 'De tre religionene deler: Tro på én Gud (monoteisme), Abraham som stamfar, mange av de samme profetene, og hellige skrifter. Islam anerkjenner Toraen og evangeliene som opprinnelig gudegitte. Forskjeller inkluderer syn på Jesus, Muhammads rolle, og treenigheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Ostlige religioner - hinduisme, buddhisme, sikhisme
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_4: TextbookChapter = {
  id: 'religion-etikk-4',
  courseId: 'religion-etikk',
  chapterNumber: '4',
  title: 'Ostlige religioner - hinduisme, buddhisme, sikhisme',
  description: 'Utforsk de store ostlige religionene og deres syn pa liv, dod og frelse.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for sentrale trekk ved hinduisme, buddhisme og sikhisme',
    'sammenligne ostlige og vestlige religioner',
    'analysere begrepene karma, samsara og frelse i ostlige religioner',
  ],
  content: [
    {
      id: 'religion-etikk-4-intro',
      type: 'text',
      content: `## Ostlige religioner

De ostlige religionene har opprinnelse i India og Ost-Asia. De skiller seg fra de abrahamittiske religionene pa flere mater.

**Hinduisme:**
- Verdens eldste levende religion
- Ca. 1,2 milliarder tilhengere
- Mangfold av guder, skrifter og praksiser
- Karma, samsara og moksha

**Buddhisme:**
- Grunnlagt av Siddhartha Gautama (Buddha)
- Ca. 500 millioner tilhengere
- Fokus pa lidelse og veien til opplysning
- Ikke-teistisk eller ateistisk

**Sikhisme:**
- Grunnlagt pa 1400-tallet i Punjab
- Ca. 30 millioner tilhengere
- Kombinerer elementer fra hinduisme og islam
- Monoteistisk med vekt pa likhet`,
    },
    {
      id: 'religion-etikk-4-def-1',
      type: 'definition',
      title: 'Hinduisme - grunnbegreper',
      content: `**Brahman:**
Den ultimate virkelighet, verdenssjelen. Alt er uttrykk for Brahman.

**Atman:**
Den individuelle sjelen. Atman er i bunn og grunn identisk med Brahman.

**Karma:**
Loven om arsak og virkning. Handlinger far konsekvenser i dette eller neste liv.

**Samsara:**
Gjenfodelsens hjul. Sjelen gjenfødes i stadig nye kropper basert pa karma.

**Moksha:**
Frigjoring fra samsara. Sjelen gar opp i Brahman. Det ultimate malet.

**Dharma:**
Plikt, lov, rett levemåte. Varierer med kaste og livsstadium.

**De store gudene:**
Brahma (skaperen), Vishnu (opprettholderen), Shiva (ødeleggeren). Mange andre guder og gudinner.`,
    },
    {
      id: 'religion-etikk-4-def-2',
      type: 'definition',
      title: 'Buddhisme - grunnbegreper',
      content: `**De fire edle sannheter:**
1. Livet er lidelse (dukkha)
2. Lidelsen skyldes begjær og tilknytning
3. Lidelsen kan opphore
4. Veien til lidelsens opphor er den attle-leddete vei

**Den attefoldige vei:**
Rett forstaelse, intensjon, tale, handling, levemate, anstrengelse, oppmerksomhet, konsentrasjon.

**Nirvana:**
Slukning av begjær og lidelse. Frigjoring fra gjenfodelse.

**Tre kjennetegn ved tilværelsen:**
- Dukkha (lidelse)
- Anicca (forgjengelighet)
- Anatta (ikke-selv)

**Hovedretninger:**
- Theravada: Den eldste tradisjon, Sri Lanka, Sor-Ost-Asia
- Mahayana: Kina, Japan, Korea, Vietnam
- Vajrayana: Tibet, Mongolia`,
    },
    {
      id: 'religion-etikk-4-def-3',
      type: 'definition',
      title: 'Sikhisme',
      content: `**Grunnlegger:**
Guru Nanak (1469-1539) i Punjab, India.

**Sentrale trekk:**
- En Gud (Ik Onkar)
- Ti guruer som apenbarere
- Guru Granth Sahib (hellig bok) er na guruen
- Avviser kastesystemet
- Likhet mellom mennesker
- Tjeneste for andre (seva)

**De fem K-er:**
Kesh (uskarent har), Kangha (kam), Kara (stalarmbånd), Kachera (korte bukser), Kirpan (dolk).

**Gurdwara:**
Sikhenes forsamlingshus. Alle er velkomne til langar (fellesmaltidet).

**Forhold til hinduisme og islam:**
Sikhismen oppsto i motet mellom hinduisme og islam, men er en selvstendig religion med egne skrifter og praksis.`,
    },
    {
      id: 'religion-etikk-4-example-1',
      type: 'example',
      title: 'Eksempel: Ulike syn pa frelse',
      problem: `Sammenlign synet pa frelse i hinduisme, buddhisme og kristendom.`,
      solution: `**Hinduisme - Moksha:**
Frigjoring fra gjenfodelsens hjul. Sjelen (atman) gar opp i verdenssjelen (Brahman). Oppnas gjennom kunnskap (jnana), hengivenhet (bhakti) eller handling (karma).

**Buddhisme - Nirvana:**
Slukning av begjær og lidelse. Opphor av gjenfodelse. Ikke en "plass" men en tilstand av frihet. Oppnas gjennom den attefoldige vei.

**Kristendom - Frelse:**
Evig liv med Gud i himmelen. Oppnas gjennom tro pa Jesus Kristus. Oppstandelse av kroppen pa dommens dag.

**Viktige forskjeller:**
- Hinduisme/buddhisme: Frigjoring fra gjenfodelse
- Kristendom: Evig liv etter doden
- Hinduisme: Sjelen gar opp i Brahman
- Buddhisme: Ingen evig sjel (anatta)
- Kristendom: Personlig relasjon til Gud`,
    },
    {
      id: 'religion-etikk-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-4-ex-1',
        number: '4.1',
        type: 'classic',
        task: 'Forklar sammenhengen mellom karma, samsara og moksha i hinduismen.',
        hints: ['Tenk pa arsak-virkning og frelse fra gjenfodelse'],
        solution: 'Karma er loven om at handlinger far konsekvenser. God karma gir bedre gjenfodelse, darlig karma gir verre. Samsara er gjenfodelsens hjul - sjelen gjenfødes basert pa karma. Moksha er frigjoring fra samsara, da sjelen gar opp i Brahman.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-4-ex-2',
        number: '4.2',
        type: 'classic',
        task: 'Presenter Buddhas fire edle sannheter.',
        hints: ['Tenk pa lidelse, arsak, opphor og vei'],
        solution: '1. Livet innebærer lidelse (dukkha). 2. Lidelsen har en arsak: begjær og tilknytning. 3. Lidelsen kan opphore (nirvana). 4. Veien til lidelsens opphor er den attefoldige vei (rett forstaelse, intensjon, tale, handling, levemate, anstrengelse, oppmerksomhet, konsentrasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-4-ex-3',
        number: '4.3',
        type: 'classic',
        task: 'Sammenlign hinduismens og buddhismens syn pa sjelen.',
        hints: ['Tenk pa atman og anatta'],
        solution: 'Hinduismen lærer at mennesket har en evig sjel (atman) som er identisk med verdenssjelen (Brahman). Buddhismen avviser en evig sjel (anatta/anatman) - mennesket er en sammensatt prosess uten permanent kjerne. Dette er en grunnleggende forskjell.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-4-ex-4',
        number: '4.4',
        type: 'classic',
        task: 'Hva kjennetegner sikhismen, og hvordan forholder den seg til hinduisme og islam?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv sikhismens hovedtrekk.',
            solution: 'Sikhismen er monoteistisk (en Gud), avviser kastesystemet, vektlegger likhet og tjeneste (seva). Ti guruer har gitt apenbaring, og Guru Granth Sahib er na den hellige autoritet.',
          },
          {
            label: 'b',
            task: 'Hvordan forholder sikhismen seg til hinduisme og islam?',
            solution: 'Sikhismen oppsto i motet mellom hinduisme og islam, men er selvstendig. Fra hinduisme: karma/gjenfodelse. Fra islam: monoteisme. Avviser kastesystem, bildedyrkelse og mange ritualer.',
          },
        ],
        solution: 'Sikhismen er en selvstendig religion med trekk fra bade hinduisme og islam.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-4-ex-5',
        number: '4.5',
        type: 'classic',
        task: 'Hvilke hovedretninger finnes innen buddhismen, og hva skiller dem?',
        hints: ['Tenk pa Theravada, Mahayana og Vajrayana'],
        solution: 'Theravada ("de eldstes lære") er eldst, utbredt i Sor-Ost-Asia, vektlegger munkeideal og personlig opplysning. Mahayana ("den store vogn") i Ost-Asia, vektlegger bodhisattva-idealet - hjelpe alle vesener. Vajrayana ("diamantvogn") i Tibet, bruker tantriske teknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-4-ex-6',
        number: '4.6',
        type: 'classic',
        task: 'Droft hvordan ostlige religioner utfordrer vestlige definisjoner av religion.',
        hints: ['Tenk pa gudstro, frelse og religiøs praksis'],
        solution: 'Vestlige definisjoner fokuserer ofte pa gudstro, men buddhismen kan være ateistisk. Hinduismen har mange guder men ogsa filosofiske retninger uten personlig gud. Fokus pa praksis fremfor tro. Grensene mellom religion og filosofi er uklare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Jodedom og andre religioner
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_5: TextbookChapter = {
  id: 'religion-etikk-5',
  courseId: 'religion-etikk',
  chapterNumber: '5',
  title: 'Jodedom og andre religioner',
  description: 'Utforsk jodedommen og fa innblikk i andre religiose tradisjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sentrale trekk ved jodedommen',
    'analysere jodedommens forhold til kristendom og islam',
    'presentere andre religiose tradisjoner og nyreligiositet',
  ],
  content: [
    {
      id: 'religion-etikk-5-intro',
      type: 'text',
      content: `## Jodedommen

Jodedommen er den eldste av de abrahamittiske religionene og grunnlaget for bade kristendom og islam. Med ca. 15 millioner tilhengere er den relativt liten, men har hatt enorm kulturell og religiøs innflytelse.

**Sentrale trekk:**
- Monoteisme - tro pa en Gud
- Pakten mellom Gud og det jødiske folk
- Toraen som Guds lov
- Fokus pa dette livet og etisk handling
- Historisk bevissthet og kollektiv identitet

**Andre religioner:**
Vi ser ogsa pa nyreligiositet, urfolksreligioner og andre tradisjoner.`,
    },
    {
      id: 'religion-etikk-5-def-1',
      type: 'definition',
      title: 'Jodedommens grunnlag',
      content: `**Tanakh (Den hebraiske bibel):**
- Toraen (Moseboekene): Guds lov
- Neviim (Profetene): Historiske og profetiske boker
- Ketuvim (Skriftene): Salmer, ordsprak, Job m.m.

**Talmud:**
Rabbinsk tolkning av Toraen. Mishna (muntlig lov) + Gemara (kommentarer).

**Pakten:**
Gud valgte Israel som sitt folk. Folket skal holde budene.

**613 bud (mitzvot):**
248 pabud og 365 forbud som regulerer alle livets omrader.

**Sabbat:**
Hellig hviledag fra fredag kveld til lordag kveld.

**Hovedretninger:**
- Ortodoks: Streng overholdelse av loven
- Konservativ: Tradisjon med tilpasning
- Reform: Liberal tolkning
- Sekulær: Kulturell jodisk identitet`,
    },
    {
      id: 'religion-etikk-5-def-2',
      type: 'definition',
      title: 'Jodiske hoytider og ritualer',
      content: `**Pesach (paske):**
Feirer utgangen fra Egypt. Seder-maltid med symbolske retter.

**Shavuot:**
Ukefesten - feirer lovgivningen pa Sinai.

**Sukkot (lovhyttefesten):**
Feirer orkenvandringen. Man bor i hytter.

**Rosh Hashana:**
Nytar. Tid for selvransakelse.

**Yom Kippur:**
Forsoningsdagen. Faste og anger. Arets helligste dag.

**Hanukkah:**
Lysfesten - feirer tempelinnvielsen.

**Bar/bat mitsva:**
Overgangsritual ved 13 ar (gutter) / 12 ar (jenter).

**Kippah, tallit, tefillin:**
Religiose plagg og gjenstander.`,
    },
    {
      id: 'religion-etikk-5-def-3',
      type: 'definition',
      title: 'Nyreligiositet og andre tradisjoner',
      content: `**Nyreligiositet:**
Nye religiose bevegelser fra 1800-tallet og fremover.
- New Age: Holisme, spiritualitet, selvutvikling
- Wicca: Moderne heksekraft, naturreligion
- Scientologi: L. Ron Hubbard, dianetikk

**Urfolksreligioner:**
- Animisme: Tro pa sjeler i naturen
- Sjamanisme: Religiose spesialister
- Forfedredyrkelse

**Kinesiske religioner:**
- Konfucianisme: Etikk, sosiale relasjoner
- Taoisme: Dao (veien), balanse, natur

**Japanske religioner:**
- Shinto: Naturånder (kami), ritualer

**Bahai:**
Alle religioner er en. Enhet og fred.`,
    },
    {
      id: 'religion-etikk-5-example-1',
      type: 'example',
      title: 'Eksempel: Jodedommens forhold til kristendom og islam',
      problem: `Hvordan forholder jodedommen seg til kristendom og islam?`,
      solution: `**Felles grunnlag:**
Alle tre er abrahamittiske - de har Abraham som stamfar. Deler monoteisme, profettradisjoner og etiske verdier.

**Jodedom og kristendom:**
- Kristendommen vokste ut av jodedommen
- Joder avviser Jesus som Messias
- Ulike syn pa frelse og forholdet til loven
- Vond historie: forfolgelse av joder

**Jodedom og islam:**
- Islam anerkjenner jodiske profeter
- Lignende regler for mat (kosher/halal)
- Begge avviser treenigheten
- Konflikt rundt Israel/Palestina

**Jodisk selvforstaelse:**
Jodedommen hevder ikke a være den eneste sanne religion. Ikke-joder kan være rettferdige ved a folge grunnleggende moral (de noakidiske bud).`,
    },
    {
      id: 'religion-etikk-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-5-ex-1',
        number: '5.1',
        type: 'classic',
        task: 'Forklar hva pakten mellom Gud og Israel innebærer.',
        hints: ['Tenk pa utvelgelse, lov og forpliktelse'],
        solution: 'Pakten er en avtale der Gud velger Israel som sitt folk, og folket forplikter seg til a holde Guds lov (Toraen). Dette gir jodene et spesielt ansvar, ikke overlegenhet. Pakten innebærer velsignelse ved lydighet og konsekvenser ved ulydighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-5-ex-2',
        number: '5.2',
        type: 'classic',
        task: 'Beskriv de viktigste jodiske hoytidene og deres betydning.',
        hints: ['Tenk pa Pesach, Yom Kippur og andre'],
        solution: 'Pesach feirer utgangen fra Egypt - frihet. Yom Kippur er forsoningsdagen med faste og anger. Rosh Hashana er nytar med selvransakelse. Sukkot minner om orkenvandringen. Shavuot feirer lovgivningen. Hanukkah feirer tempelinnvielsen. Hoytidene kobler til historie og tro.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-5-ex-3',
        number: '5.3',
        type: 'classic',
        task: 'Sammenlign de tre hovedretningene innen jodedommen.',
        hints: ['Tenk pa ortodoks, konservativ og reform'],
        solution: 'Ortodoks jodedom holder strengt pa tradisjonell lov og praksis. Konservativ jodedom respekterer tradisjonen men tillater viss tilpasning til moderne tid. Reform-jodedom tolker loven liberalt og vektlegger etikk over ritualer. Sekulære joder har kulturell identitet uten religiøs praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-5-ex-4',
        number: '5.4',
        type: 'classic',
        task: 'Hva menes med nyreligiositet, og hvilke trekk kjennetegner den?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer nyreligiositet.',
            solution: 'Nyreligiositet er en samlebetegnelse for nye religiose bevegelser som har oppstatt fra 1800-tallet. Inkluderer New Age, wicca, scientologi og mange andre.',
          },
          {
            label: 'b',
            task: 'Hvilke fellestrekk finner vi?',
            solution: 'Fellestrekk: Vekt pa personlig erfaring, eklektisisme (blander fra ulike tradisjoner), holisme, selvutvikling, ofte kritisk til etablerte religioner, og ofte desentralisert organisering.',
          },
        ],
        solution: 'Nyreligiositet er nye religiose bevegelser med vekt pa personlig erfaring og eklektisisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-5-ex-5',
        number: '5.5',
        type: 'classic',
        task: 'Hvorfor har jodedommen hatt sa stor kulturell innflytelse til tross for relativt fa tilhengere?',
        hints: ['Tenk pa historisk betydning og forhold til andre religioner'],
        solution: 'Jodedommen er grunnlaget for kristendom og islam - verdens storste religioner. Jodiske tekster (Det gamle testamentet) er hellige i kristendommen. Jodiske tenkere har pavirket filosofi, vitenskap og kultur. Diasporaen spredte jodisk kultur globalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-5-ex-6',
        number: '5.6',
        type: 'classic',
        task: 'Presenter kort en urfolksreligion eller kinesisk religion.',
        hints: ['Velg f.eks. sjamanisme, konfucianisme eller taoisme'],
        solution: 'Svar vil variere. Taoisme: Kinesisk religion/filosofi. Dao (veien) er det grunnleggende prinsipp. Vektlegger balanse (yin/yang), enkelhet, natur. Wuwei - ikke-handling, flyte med Dao. Lao Tzu som grunnlegger. Daodejing som hellig tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Etiske teorier og moralfilosofi
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_6: TextbookChapter = {
  id: 'religion-etikk-6',
  courseId: 'religion-etikk',
  chapterNumber: '6',
  title: 'Etiske teorier og moralfilosofi',
  description: 'Utforsk de store etiske teoriene og lær a analysere moralske dilemmaer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for sentrale etiske teorier',
    'anvende etiske teorier pa moralske dilemmaer',
    'drøfte styrker og svakheter ved ulike etiske tilnærminger',
  ],
  content: [
    {
      id: 'religion-etikk-6-intro',
      type: 'text',
      content: `## Etikk og moral

Etikk er den filosofiske refleksjonen over moral. Mens moral handler om hva som er rett og galt i praksis, sporr etikken: Hvorfor er noe rett eller galt? Hva bor vi gjore, og hvorfor?

**Grunnleggende sporsmal:**
- Hva gjor en handling riktig eller gal?
- Finnes det universelle moralske sannheter?
- Hvordan bor vi leve?
- Hva er et godt menneske?

**Hovedtyper etiske teorier:**
- Konsekvensetikk: Konsekvensene avgjor
- Pliktetikk: Handlingen i seg selv avgjor
- Dydsetikk: Karakteren avgjor
- Nærhetsetikk: Relasjonen avgjor`,
    },
    {
      id: 'religion-etikk-6-def-1',
      type: 'definition',
      title: 'Konsekvensetikk (utilitarisme)',
      content: `**Grunnprinsipp:**
En handling er riktig hvis den forer til best mulige konsekvenser for flest mulig.

**Jeremy Bentham (1748-1832):**
"Storst mulig lykke for storst mulig antall."
Hedonistisk utilitarisme - lykke = nytelse.

**John Stuart Mill (1806-1873):**
Kvalitative forskjeller pa nytelse. Intellektuell nytelse er hoyverdighet.

**Handlings- vs. regelutilitarisme:**
- Handlingsutilitarisme: Vurder hver handling for seg
- Regelutilitarisme: Folg regler som generelt gir best konsekvenser

**Kritikk:**
- Kan rettferdiggjore urettferdighet mot mindretall
- Vanskelig a beregne alle konsekvenser
- Ignorerer intensjoner og rettigheter
- Kan bli for krevende`,
    },
    {
      id: 'religion-etikk-6-def-2',
      type: 'definition',
      title: 'Pliktetikk (deontologi)',
      content: `**Grunnprinsipp:**
Noen handlinger er riktige eller gale i seg selv, uavhengig av konsekvenser.

**Immanuel Kant (1724-1804):**
Det kategoriske imperativ:
1. "Handle bare etter den maksime du samtidig kan ville skal bli en allmenn lov."
2. "Handle slik at du alltid behandler menneskeheten, bade i din egen person og i enhver annens person, aldri bare som middel, men alltid ogsa som formal."

**Plikter:**
- Fullkomne plikter: Aldri a bryte (ikke lyve, ikke drepe)
- Ufullkomne plikter: Bor folges nar mulig (hjelpe andre)

**Kritikk:**
- For rigid - tar ikke hensyn til situasjonen
- Kan gi motstridende plikter
- Konsekvenser betyr ingenting?
- Vanskelig a begrunneplikter uten konsekvenser`,
    },
    {
      id: 'religion-etikk-6-def-3',
      type: 'definition',
      title: 'Dydsetikk',
      content: `**Grunnprinsipp:**
Fokus pa karaktertrekk (dyder) heller enn handlinger. Et godt menneske handler godt.

**Aristoteles (384-322 f.Kr.):**
Eudaimonia - blomstring, det gode liv.
Dyder er karaktertrekk mellom to ytterpunkter (den gylne middelvei).

**Eksempler pa dyder:**
- Mot: Mellom feighet og dumdristighet
- Matoldenhet: Mellom frats og askese
- Sjenerøsitet: Mellom gjerrighet og sloseri
- Rettferdighet, ærlighet, visdom...

**Phronesis:**
Praktisk visdom - evnen til a vurdere hva som er riktig i den konkrete situasjonen.

**Kritikk:**
- Hvilke dyder er viktigst?
- Kulturrelativisme?
- Gir lite konkret veiledning
- Hva med onde menneskers handlinger?`,
    },
    {
      id: 'religion-etikk-6-example-1',
      type: 'example',
      title: 'Eksempel: Trolley-problemet',
      problem: `En lopen trikk er i ferd med a drepe fem mennesker. Du kan trekke i en spak og avlede trikken til et annet spor, der den vil drepe én person. Bor du trekke i spaken?`,
      solution: `**Utilitaristisk svar:**
Ja, trekk i spaken. Fem liv er mer enn ett liv. Konsekvensene er best hvis du handler.

**Pliktetisk svar:**
Det er problematisk. A aktivt avlede trikken gjor deg ansvarlig for drapet pa den ene. Du bruker ham som middel for a redde andre. Kant ville kanskje si nei.

**Dydsetisk svar:**
Hva ville et modig, rettferdig menneske gjore? Situasjonen krever praktisk visdom. Det finnes kanskje ikke et "riktig" svar.

**Variasjon - den tykke mannen:**
Hva om du ma dytte en tykk mann foran trikken for a stoppe den? De fleste sier nei her - men hvorfor? Konsekvensene er de samme.

**Lærdom:**
Intuisjoner og teorier stemmer ikke alltid. Etiske teorier hjelper oss a tenke, men gir ikke alltid klare svar.`,
    },
    {
      id: 'religion-etikk-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-6-ex-1',
        number: '6.1',
        type: 'classic',
        task: 'Forklar grunnprinsippet i utilitarismen.',
        hints: ['Tenk pa konsekvenser og lykke'],
        solution: 'Utilitarismen hevder at en handling er moralsk riktig hvis den forer til storst mulig lykke (eller nytte) for storst mulig antall berørte. Konsekvensene av handlingen er det eneste som teller moralsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-6-ex-2',
        number: '6.2',
        type: 'classic',
        task: 'Forklar Kants kategoriske imperativ med egne ord.',
        hints: ['Tenk pa allmenngjoring og menneskeverd'],
        solution: 'Det kategoriske imperativ sier: Handle kun pa mater du ville akseptere at alle handlet pa (universaliserbarhet). Og: Behandle mennesker alltid ogsa som mal i seg selv, aldri bare som midler. Med andre ord: respekter alles verdighet og vær konsekvent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-6-ex-3',
        number: '6.3',
        type: 'classic',
        task: 'Hva er dydsetikk, og hvordan skiller den seg fra konsekvensetikk og pliktetikk?',
        hints: ['Tenk pa fokus: konsekvenser, plikter eller karakter'],
        solution: 'Dydsetikk fokuserer pa karaktertrekk (dyder) heller enn enkelhandlinger. Mens utilitarismen sporr "hva gir best konsekvenser?" og pliktetikken "hva er min plikt?", sporr dydsetikken "hva slags menneske bor jeg være?" og "hva ville et dydiger menneske gjort?"',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-6-ex-4',
        number: '6.4',
        type: 'classic',
        task: 'Analyser trolley-problemet fra et utilitaristisk og et pliktetisk perspektiv.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva vil en utilitarist svare, og hvorfor?',
            solution: 'En utilitarist vil trolig si at du bor trekke i spaken, fordi det redder fem liv pa bekostning av ett. Nettogevinsten i lykke/liv er positiv.',
          },
          {
            label: 'b',
            task: 'Hva vil en pliktetiker (kantianer) svare, og hvorfor?',
            solution: 'En kantianer kan argumentere mot, fordi du aktivt bruker den ene personen som middel til a redde andre. Du gjor deg direkte ansvarlig for hans dod.',
          },
        ],
        solution: 'Utilitarismen og pliktetikken kan gi ulike svar pa trolley-problemet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-6-ex-5',
        number: '6.5',
        type: 'classic',
        task: 'Droft styrker og svakheter ved utilitarismen.',
        hints: ['Tenk pa rettferdighet, mindretall og beregning'],
        solution: 'Styrker: Enkel, fokuserer pa velferd, tar hensyn til alle berørte. Svakheter: Kan rettferdiggjore urettferdighet mot mindretall, vanskelig a beregne konsekvenser, ignorerer rettigheter og intensjoner, kan bli urimelig krevende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-6-ex-6',
        number: '6.6',
        type: 'classic',
        task: 'Gi eksempler pa tre dyder og forklar hvordan de kan forstås som "den gylne middelvei".',
        hints: ['Tenk pa Aristoteles og ytterpunkter'],
        solution: 'Mot: Midt mellom feighet (for lite) og dumdristighet (for mye). Sjenerositet: Midt mellom gjerrighet og sloseri. Ydmykhet: Midt mellom mindreverdighetsfølelse og hovmod. Praktisk visdom avgjer hva som er riktig balanse i situasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Anvendt etikk - moderne dilemmaer
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_7: TextbookChapter = {
  id: 'religion-etikk-7',
  courseId: 'religion-etikk',
  chapterNumber: '7',
  title: 'Anvendt etikk - moderne dilemmaer',
  description: 'Anvend etiske teorier pa aktuelle problemstillinger innen medisin, miljo og teknologi.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende etiske teorier pa aktuelle moralske dilemmaer',
    'drøfte etiske sporsmal knyttet til medisin, miljo og teknologi',
    'reflektere over ulike syn og begrunnelser i etiske debatter',
  ],
  content: [
    {
      id: 'religion-etikk-7-intro',
      type: 'text',
      content: `## Anvendt etikk

Anvendt etikk bruker etiske teorier pa konkrete problemstillinger. Vi sporr: Hva bor vi gjore i denne situasjonen?

**Sentrale omrader:**
- Medisinsk etikk: Abort, eutanasi, genteknologi
- Dyreetikk: Dyrs rettigheter, kjottspising
- Miljoetikk: Klimaendringer, naturvern
- Teknologietikk: AI, overvaking, personvern
- Krigsetikk: Rettferdig krig, sivile tap

**Metode:**
1. Beskriv situasjonen og dilemmaet
2. Identifiser de etiske sporsmalene
3. Anvend ulike teorier
4. Vurder argumentene
5. Trekk en begrunnet konklusjon`,
    },
    {
      id: 'religion-etikk-7-def-1',
      type: 'definition',
      title: 'Medisinsk etikk',
      content: `**Fire prinsipper (Beauchamp & Childress):**
1. Autonomi: Respekt for pasientens selvbestemmelse
2. Velgjørenhet: Handle til pasientens beste
3. Ikke skade: Unnga a pafore skade
4. Rettferdighet: Lik fordeling av ressurser

**Abort:**
- Nar begynner menneskelivet?
- Kvinnens rett til selvbestemmelse vs. fosterets rett til liv
- Graderingsperspektiv vs. absolutt vern

**Eutanasi:**
- Aktiv vs. passiv eutanasi
- Legeassistert suicid
- Livskvalitet vs. livets hellighet
- Autonomi vs. beskyttelse av sarbare

**Genteknologi:**
- CRISPR og genredigering
- Behandling vs. forbedring
- Designer-babyer
- Etiske grenser for forskning`,
    },
    {
      id: 'religion-etikk-7-def-2',
      type: 'definition',
      title: 'Dyreetikk',
      content: `**Sentralt sporsmal:**
Har dyr moralsk status? Hvilke forpliktelser har vi overfor dyr?

**Peter Singer (utilitarisme):**
- Dyrs lidelse teller moralsk
- Artsdiskriminering er feil
- Industrielt husdyrhold er uetisk

**Tom Regan (rettigheter):**
- Dyr har iboende verdi
- Dyrs rettigheter bor anerkjennes
- Feil a bruke dyr som midler

**Graderingsperspektiv:**
- Ulike dyr har ulik moralsk status
- Bevissthet og lidelsesevne avgjer
- Primater vs. insekter

**Praktiske sporsmal:**
- Er kjottspising etisk forsvarlig?
- Dyreforsok i forskning?
- Jakt og fiske?
- Dyr i underholdning?`,
    },
    {
      id: 'religion-etikk-7-def-3',
      type: 'definition',
      title: 'Miljoetikk',
      content: `**Antroposentrisme:**
Mennesket i sentrum. Naturen har verdi som ressurs for mennesker.

**Biosentrisme:**
Alt levende har iboende verdi. Respekt for alt liv.

**Okosentrisme:**
Okosystemet som helhet har verdi. Aldo Leopolds "land ethic".

**Klimaetikk:**
- Rettferdighet mellom generasjoner
- Rettferdighet mellom rike og fattige land
- Hvem skal bære byrden?
- Individets vs. statens ansvar

**Bærekraft:**
Utvikling som moter dagens behov uten a odelegge for fremtidige generasjoner.

**Dypokologi:**
Radikal miljoetikk. Mennesket er ikke mer verdt enn andre arter.`,
    },
    {
      id: 'religion-etikk-7-example-1',
      type: 'example',
      title: 'Eksempel: Etisk analyse av eutanasi',
      problem: `En alvorlig syk pasient ber om legeassistert dod. Hvordan kan vi analysere dette etisk?`,
      solution: `**Utilitaristisk analyse:**
- Pasientens lidelse opphorer (positivt)
- Parorende sliter (vurderes)
- Samfunnsmessige konsekvenser (skrapla-argumentet?)
- Kan rettferdiggjore eutanasi hvis det minimerer lidelse

**Pliktetisk analyse:**
- "Du skal ikke drepe" - absolutt forbud?
- Respekt for autonomi - pasienten velger selv
- Kant: Bruke mennesket som mal, ikke middel
- Kan ga begge veier avhengig av hvilke plikter man vektlegger

**Dydsetisk analyse:**
- Hva ville en medfølende, vis lege gjore?
- Barmhjertighet vs. respekt for livets hellighet
- Konteksten og relasjonen avgjor

**Religiose perspektiver:**
- Kristendom/islam: Livet er hellig, Gud gir og tar
- Men ogsa: Barmhjertighet og lindring av lidelse
- Buddhisme: Intensjonen bak handlingen avgjor

**Konklusjon:**
Etiske teorier gir ikke entydig svar. Avveiningen av autonomi, lidelse og livets verdi avgjor.`,
    },
    {
      id: 'religion-etikk-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-7-ex-1',
        number: '7.1',
        type: 'classic',
        task: 'Forklar de fire prinsippene i medisinsk etikk.',
        hints: ['Tenk pa autonomi, velgjorenhet, ikke skade og rettferdighet'],
        solution: 'Autonomi: Respekt for pasientens selvbestemmelse. Velgjorenhet: Handle til pasientens beste. Ikke skade: Unnga a pafore skade. Rettferdighet: Lik tilgang til helsetjenester og rettferdig fordeling av ressurser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-7-ex-2',
        number: '7.2',
        type: 'classic',
        task: 'Droft abort fra ulike etiske perspektiver.',
        hints: ['Tenk pa utilitarisme, pliktetikk og religiose syn'],
        solution: 'Utilitarisme vurderer konsekvenser for alle berørte. Pliktetikk kan hevde rett til liv eller rett til selvbestemmelse. Religiose perspektiver varierer, men mange ser livet som hellig fra unnfangelse. Graderte syn mener fosterets status oker med utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-7-ex-3',
        number: '7.3',
        type: 'classic',
        task: 'Hva er Peter Singers hovedargument for dyreetikk?',
        hints: ['Tenk pa lidelse og artsdiskriminering'],
        solution: 'Singer argumenterer utilitaristisk: Dyrs lidelse teller moralsk pa lik linje med menneskers. A ignorere dyrs lidelse fordi de tilhorer en annen art er "artsdiskriminering" (speciesism), like uberettiget som rasisme. Industrielt husdyrhold påforer enorm lidelse og er derfor uetisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-7-ex-4',
        number: '7.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom antroposentrisme, biosentrisme og okosentrisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er antroposentrisme?',
            solution: 'Menneskesentrert miljoetikk. Naturen har verdi som ressurs for mennesker. Vi bor ta vare pa naturen fordi vi er avhengige av den.',
          },
          {
            label: 'b',
            task: 'Hva er biosentrisme og okosentrisme?',
            solution: 'Biosentrisme: Alt levende har iboende verdi. Okosentrisme: Hele okosystemet har verdi, ikke bare enkeltindivider. Mennesket er en del av naturen, ikke herre over den.',
          },
        ],
        solution: 'Forskjellene handler om hva/hvem som har moralsk status og iboende verdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-7-ex-5',
        number: '7.5',
        type: 'classic',
        task: 'Droft hvem som bor bære ansvaret for a lose klimakrisen.',
        hints: ['Tenk pa rike vs. fattige land, nåværende vs. fremtidige generasjoner'],
        solution: 'Rike land har historisk sluppet ut mest, sa de har storst ansvar (historisk rettferdighet). Rike land har ogsa mest ressurser (kapasitetsprinsippet). Men alle ma bidra for a lose problemet. Ansvaret for fremtidige generasjoner krever handling na. Individ vs. stat-ansvar diskuteres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-7-ex-6',
        number: '7.6',
        type: 'classic',
        task: 'Velg et aktuelt etisk dilemma og analyser det med minst to etiske teorier.',
        hints: ['Bruk metoden: beskriv dilemma, identifiser sporsmal, anvend teorier, vurder, konkluder'],
        solution: 'Svar vil variere. For AI-overvaking: Utilitarisme vurderer nytte (sikkerhet) vs. skade (personvern). Pliktetikk vektlegger rett til privatliv og autonomi. Dydsetikk sporr hva slags samfunn vi vil ha. Viktig a vurdere ulike perspektiver for en begrunnet konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Livssyn, ateisme og humanisme
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_8: TextbookChapter = {
  id: 'religion-etikk-8',
  courseId: 'religion-etikk',
  chapterNumber: '8',
  title: 'Livssyn, ateisme og humanisme',
  description: 'Utforsk sekulære livssyn og deres syn pa mennesket, mening og moral.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sekulære livssyn som humanisme og naturalisme',
    'sammenligne religiose og sekulære livssyn',
    'reflektere over grunnlaget for etikk uten religion',
  ],
  content: [
    {
      id: 'religion-etikk-8-intro',
      type: 'text',
      content: `## Hva er et livssyn?

Et livssyn er et helhetlig syn pa tilværelsen som gir svar pa grunnleggende sporsmal om mennesket, verden og meningen med livet. Livssyn kan være religiose eller sekulære.

**Grunnleggende sporsmal:**
- Finnes det en gud eller hoyre makt?
- Hva er mennesket?
- Hva er meningen med livet?
- Hva er godt og ondt?
- Hva skjer etter doden?

**Sekulære livssyn:**
Livssyn uten tro pa overnaturlige krefter:
- Livssynshumanisme
- Naturalisme
- Ateisme/agnostisisme
- Eksistensialisme`,
    },
    {
      id: 'religion-etikk-8-def-1',
      type: 'definition',
      title: 'Ateisme og agnostisisme',
      content: `**Ateisme:**
Fraværet av gudstro. Ateister tror ikke pa noen gud.
- Sterk ateisme: Aktivt benekter Guds eksistens
- Svak ateisme: Mangler tro, men benekter ikke aktivt

**Agnostisisme:**
Mener vi ikke kan vite om Gud finnes eller ikke.
- Erkjennelsesteoretisk posisjon
- Avholder seg fra a ta stilling

**Nyateisme:**
Aktiv religionskritikk. Richard Dawkins, Sam Harris, Christopher Hitchens.
- Religion er skadelig
- Vitenskap erstatter religion
- Offentlig religionskritikk er nodvendig

**Kritikk av nyateismen:**
- For aggressiv
- Forenkler religion
- Selv et "trossystem"?
- Undervurderer religionens positive funksjoner`,
    },
    {
      id: 'religion-etikk-8-def-2',
      type: 'definition',
      title: 'Livssynshumanisme',
      content: `**Definisjon:**
Sekulært livssyn med mennesket i sentrum. Human-Etisk Forbund i Norge.

**Historisk bakgrunn:**
- Røtter i opplysningstiden
- Kritikk av religiøs autoritet
- Vitenskap og fornuft
- Menneskerettigheter

**Sentrale verdier:**
- Menneskets verdighet og rettigheter
- Fornuft og kritisk tenkning
- Empati og solidaritet
- Demokrati og frihet
- Vitenskapelig tilnærming til virkeligheten

**Etikk:**
Etikk er begrunnet i menneskelige behov og fornuft, ikke guddommelig apenbaring. Mennesket skaper selv mening og verdier.

**Seremonier:**
Humanistisk navnefest, konfirmasjon, vielse og gravferd som alternativer til religiose seremonier.`,
    },
    {
      id: 'religion-etikk-8-def-3',
      type: 'definition',
      title: 'Naturalisme og eksistensialisme',
      content: `**Naturalisme:**
Virkeligheten bestar kun av naturlige fenomener. Ingen overnaturlige krefter.
- Vitenskapelig verdensbilde
- Alt kan forklares naturlig
- Mennesket er et biologisk vesen
- Ingen sjel eller liv etter doden

**Eksistensialisme:**
Filosofisk retning med fokus pa eksistens, frihet og mening.
- Jean-Paul Sartre: "Eksistensen gar forut for essensen"
- Mennesket er "domt til frihet"
- Vi skaper selv var essens gjennom valg
- Autentisitet: Leve ekte, ta ansvar

**Meningsloshet og angst:**
- Livet har ingen forhåndsgitt mening
- Vi ma skape var egen mening
- Frihet skaper angst
- Mote med doden gir livet alvor

**Albert Camus - Absurdismen:**
Livets absurditet: Vi soker mening i en meningslos verden. Likevel: Lev intenst, gjor oppror.`,
    },
    {
      id: 'religion-etikk-8-example-1',
      type: 'example',
      title: 'Eksempel: Kan det finnes etikk uten Gud?',
      problem: `Noen hevder at etikk krever Gud som grunnlag. Hvordan argumenterer humanister mot dette?`,
      solution: `**Argumentet fra religion:**
- Uten Gud, ingen objektiv moral
- Moral kommer fra Guddommelig apenbaring
- "Hvis Gud ikke finnes, er alt tillatt" (Dostojevskij)

**Humanistiske motargumenter:**

1. **Euthyfron-dilemmaet (Platon):**
Er noe godt fordi Gud vil det, eller vil Gud det fordi det er godt? Hvis det forste: Moral er vilkarlig. Hvis det andre: Moral er uavhengig av Gud.

2. **Naturlig moral:**
Mennesker har medfodt evne til empati og samarbeid. Moral har evolusjonær opprinnelse.

3. **Fornuftsbasert etikk:**
Vi kan begrunneetikk gjennom fornuft og menneskelige behov, uten apenbaring.

4. **Faktisk moral:**
Ateister er ikke mindre moralske enn troende. Mange ikke-religiose samfunn fungerer godt.

**Konklusjon:**
Etikk kan begrunnes uten Gud, selv om mange finner religiøs begrunnelse meningsfull.`,
    },
    {
      id: 'religion-etikk-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-8-ex-1',
        number: '8.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom ateisme og agnostisisme.',
        hints: ['Tenk pa tro vs. kunnskap'],
        solution: 'Ateisme er fraværet av gudstro - ateister tror ikke pa noen gud. Agnostisisme handler om kunnskap - agnostikere mener vi ikke kan vite om Gud finnes. Man kan være agnostisk ateist (tror ikke, men hevder ikke a vite) eller agnostisk teist (tror, men innser usikkerheten).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-8-ex-2',
        number: '8.2',
        type: 'classic',
        task: 'Hva er livssynshumanismens sentrale verdier?',
        hints: ['Tenk pa mennesket, fornuft og etikk'],
        solution: 'Sentrale verdier: Menneskets verdighet og rettigheter, fornuft og kritisk tenkning, empati og solidaritet, demokrati og frihet, vitenskapelig tilnærming. Etikk begrunnes i menneskelige behov, ikke guddommelig apenbaring. Mennesket skaper selv mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-8-ex-3',
        number: '8.3',
        type: 'classic',
        task: 'Forklar Sartres pastand om at "eksistensen gar forut for essensen".',
        hints: ['Tenk pa frihet og selvskaping'],
        solution: 'Sartre mente at mennesket ikke har en forhåndsgitt natur eller essens. Vi eksisterer forst, deretter skaper vi oss selv gjennom valgene vi tar. Ingen Gud eller natur har bestemt hva vi skal være. Vi er "domt til frihet" og fullt ansvarlige for hvem vi blir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-8-ex-4',
        number: '8.4',
        type: 'classic',
        task: 'Presenter Euthyfron-dilemmaet og forklar hvorfor det er relevant for forholdet mellom religion og etikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er dilemmaet?',
            solution: 'Er noe godt fordi Gud vil det, eller vil Gud det fordi det er godt? Begge alternativene er problematiske.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det relevant?',
            solution: 'Hvis godt = det Gud vil, er moral vilkarlig (Gud kunne villet noe annet). Hvis Gud vil det fordi det er godt, finnes en standard utenfor Gud, og etikk er uavhengig av Gud.',
          },
        ],
        solution: 'Dilemmaet viser at forholdet mellom Gud og moral er komplisert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-8-ex-5',
        number: '8.5',
        type: 'classic',
        task: 'Sammenlign humanistisk og kristen etikk.',
        hints: ['Tenk pa grunnlag, verdier og begrunnelse'],
        solution: 'Begge vektlegger menneskeverd, nestekjærlighet og rettferdighet. Forskjeller: Humanisme begrunner etikk i fornuft og menneskelige behov. Kristendom begrunner i Guds vilje og skapelse. Humanisme avviser overnaturlige sanksjoner. Mange konkrete verdier er like.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-8-ex-6',
        number: '8.6',
        type: 'classic',
        task: 'Droft: Trenger vi religion for a leve et meningsfylt liv?',
        hints: ['Vurder ulike perspektiver - religiose og sekulære'],
        solution: 'Religiose perspektiver: Religion gir mening, fellesskap, håp. Sekulære perspektiver: Mening kan skapes gjennom relasjoner, arbeid, bidrag til andre. Empirisk: Bade religiose og ikke-religiose lever meningsfylte liv. Konklusjon: Personlig, avhenger av livssyn og verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Religion, menneskerettigheter og samfunn
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_9: TextbookChapter = {
  id: 'religion-etikk-9',
  courseId: 'religion-etikk',
  chapterNumber: '9',
  title: 'Religion, menneskerettigheter og samfunn',
  description: 'Utforsk forholdet mellom religion, stat og menneskerettigheter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for religionsfrihet og dens grenser',
    'drøfte forholdet mellom religion og menneskerettigheter',
    'analysere religionens rolle i det offentlige rom',
  ],
  content: [
    {
      id: 'religion-etikk-9-intro',
      type: 'text',
      content: `## Religion og samfunn

Forholdet mellom religion, stat og menneskerettigheter reiser viktige sporsmal i moderne samfunn.

**Sentrale sporsmal:**
- Hvilken rolle bor religion spille i politikken?
- Hvordan balansere religionsfrihet og andre rettigheter?
- Bor religiose symboler være tillatt i det offentlige rom?
- Hvordan handtere religiøst mangfold?

**Ulike modeller:**
- **Statsreligion:** Staten stoetter en religion
- **Sekularisme:** Skille mellom stat og religion
- **Pluralisme:** Staten stotter flere religioner likt

**Norge:**
Fra statskirke (Grunnloven 1814) til livssynsapent samfunn (Grunnloven 2012). Den norske kirke har fortsatt en særstilling.`,
    },
    {
      id: 'religion-etikk-9-def-1',
      type: 'definition',
      title: 'Religionsfrihet',
      content: `**Menneskerettighet:**
FNs menneskerettighetserklæring artikkel 18:
"Enhver har rett til tanke-, samvittighets- og religionsfrihet."

**Innhold:**
- Frihet til a ha en religion
- Frihet til a skifte religion
- Frihet til ikke a ha religion
- Frihet til a praktisere religion
- Frihet til a misjonere

**Begrensninger:**
Religionsfrihet kan begrenses av hensyn til:
- Andres rettigheter og friheter
- Offentlig orden og sikkerhet
- Folkehelsen
- Den offentlige moral

**Positiv vs. negativ religionsfrihet:**
- Positiv: Rett til a utove religion
- Negativ: Rett til a slippe andres religion`,
    },
    {
      id: 'religion-etikk-9-def-2',
      type: 'definition',
      title: 'Religion og menneskerettigheter',
      content: `**Mulige spenninger:**
Religiose normer kan komme i konflikt med menneskerettigheter:
- Likestilling mellom kjonn
- LHBT+-rettigheter
- Barns rettigheter
- Ytringsfrihet (blasfemi)

**Eksempler pa debatter:**
- Religiøs omskjæring av gutter
- Konverteringsterapi
- Reservasjonsrett for helsepersonell
- Religiose klesplagg i arbeidslivet

**Universelle vs. kulturelle rettigheter:**
- Er menneskerettigheter universelle?
- Eller et vestlig patrykk?
- Kan religion og rettigheter forenes?

**Religiose bidrag til menneskerettigheter:**
- Menneskeverd i kristen tradisjon
- Rettferdighet i jodisk og islamsk tradisjon
- Religiose aktører i kampen for rettigheter`,
    },
    {
      id: 'religion-etikk-9-def-3',
      type: 'definition',
      title: 'Sekularisme og det offentlige rom',
      content: `**Sekularisme:**
Prinsippet om skille mellom stat og religion.

**Ulike former:**
- **Hard sekularisme (laisisme):** Religion holdes utenfor offentligheten (Frankrike)
- **Myk sekularisme:** Staten er noytral, men religion har plass i offentligheten
- **Multikulturell modell:** Staten stotter religiøst mangfold

**Religion i skolen:**
- Konfesjonell undervisning vs. noytral religionsundervisning
- Skolegudstjenester
- Religiose symboler

**Religion pa arbeidsplassen:**
- Religiose klesplagg
- Bønnetid
- Helligdager

**Norge:**
- Livssynsåpent samfunn
- KRLE-faget er ikke-konfesjonelt
- Likebehandling av tros- og livssynssamfunn
- Debatt om grensen mellom stat og kirke`,
    },
    {
      id: 'religion-etikk-9-example-1',
      type: 'example',
      title: 'Eksempel: Hijabdebatten',
      problem: `Bor hijab være tillatt i alle yrker og sammenhenger? Hvordan balansere ulike hensyn?`,
      solution: `**Argumenter for a tillate hijab:**
- Religionsfrihet er en menneskerettighet
- Forbud diskriminerer muslimske kvinner
- Hijab er frivillig for mange
- Staten bor være noytral, ikke forby

**Argumenter for restriksjoner:**
- Noytralitet i visse yrker (politi, dommer)
- Sikkerhet i noen sammenhenger
- Likestillingshensyn (er hijab undertrykkende?)
- Sekularisme i det offentlige rom

**Norsk praksis:**
- Hijab er generelt tillatt
- Debatt om politiuniform
- Forbudt i Forsvaret

**Etisk vurdering:**
Må veie religionsfrihet mot andre hensyn. Konteksten avgjor. Generelle forbud er problematiske, men noen begrensninger kan være legitime.`,
    },
    {
      id: 'religion-etikk-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-9-ex-1',
        number: '9.1',
        type: 'classic',
        task: 'Hva innebærer religionsfrihet som menneskerettighet?',
        hints: ['Tenk pa hva rettigheten beskytter og dens begrensninger'],
        solution: 'Religionsfrihet innebærer: Frihet til a ha, skifte eller ikke ha religion. Frihet til a praktisere privat og offentlig. Frihet til a misjonere. Men: Kan begrenses av hensyn til andres rettigheter, offentlig orden, helse og sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-9-ex-2',
        number: '9.2',
        type: 'classic',
        task: 'Gi eksempler pa mulige spenninger mellom religion og menneskerettigheter.',
        hints: ['Tenk pa likestilling, barns rettigheter, ytringsfrihet'],
        solution: 'Eksempler: Religiost begrunnede kjønnsroller vs. likestilling. Omskjæring vs. barns kroppslige integritet. Forbud mot homofili vs. LHBT+-rettigheter. Blasfemilover vs. ytringsfrihet. Religiøs oppdragelse vs. barns religionsfrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-9-ex-3',
        number: '9.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom hard og myk sekularisme.',
        hints: ['Tenk pa Frankrike vs. Norge'],
        solution: 'Hard sekularisme (laisisme): Religion holdes helt utenfor det offentlige rom. Ingen religiose symboler pa offentlige steder. Frankrike som eksempel. Myk sekularisme: Staten er noytral, men religion har plass i offentligheten. Religiost mangfold stettes. Norge og mange nordiske land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-9-ex-4',
        number: '9.4',
        type: 'classic',
        task: 'Droft om menneskerettigheter er universelle eller kulturelt betingede.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med at menneskerettigheter er universelle?',
            solution: 'At de gjelder for alle mennesker, uavhengig av kultur, religion eller stat. De er basert pa menneskeverdet som er likt for alle.',
          },
          {
            label: 'b',
            task: 'Hvilke innvendinger reises mot universalisme?',
            solution: 'Kritikere hevder at rettighetene er vestlige ideer påtvunget andre kulturer. De tar ikke hensyn til kulturelle forskjeller. Fellesskap og plikter nedprioriteres til fordel for individuelle rettigheter.',
          },
        ],
        solution: 'Debatten star mellom universelle rettigheter og kulturell relativisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-9-ex-5',
        number: '9.5',
        type: 'classic',
        task: 'Hvordan har forholdet mellom stat og kirke endret seg i Norge?',
        hints: ['Tenk pa Grunnloven 1814 vs. 2012'],
        solution: 'Fra 1814: Statskirke, evangelisk-luthersk religion var statens offentlige religion. 2012: Grunnlovsendring. Kirke og stat skilles. Den norske kirke har fortsatt en særstilling, men likebehandling av trossamfunn. Norge er na et livssynsapent samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-9-ex-6',
        number: '9.6',
        type: 'classic',
        task: 'Droft: Bor skolegudstjenester være tillatt i offentlig skole?',
        hints: ['Veier religionsfrihet, tradisjon, likebehandling og foreldres rettigheter'],
        solution: 'For: Tradisjon, kulturarv, mulighet for religiøs erfaring, frivillig deltagelse. Mot: Offentlig skole bor være livssynsnoytral, kan skape utenforskap, vanskelig a si nei i praksis. Kompromiss: Arrangement i kirken som kulturarv, ikke gudstjeneste. Tydelig frivillighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Religionsdialog og eksistensielle sporsmal
// ============================================================================

export const CHAPTER_RELIGION_ETIKK_10: TextbookChapter = {
  id: 'religion-etikk-10',
  courseId: 'religion-etikk',
  chapterNumber: '10',
  title: 'Religionsdialog og eksistensielle sporsmal',
  description: 'Utforsk religionsdialog og grunnleggende sporsmal om liv, dod og mening.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for religionsdialog og dens forutsetninger',
    'reflektere over eksistensielle sporsmal fra ulike perspektiver',
    'drøfte forholdet mellom ulike religiose og sekulære svar pa livets store sporsmal',
  ],
  content: [
    {
      id: 'religion-etikk-10-intro',
      type: 'text',
      content: `## Religionsdialog

I et religiøst mangfoldig samfunn er dialog mellom religioner og livssyn viktig for forstaelse og fredelig sameksistens.

**Hva er religionsdialog?**
Samtale mellom representanter for ulike religioner/livssyn for a:
- Forstå hverandre bedre
- Bygge respekt og tillit
- Samarbeide om felles utfordringer
- Unnga konflikter

**Forutsetninger for god dialog:**
- Gjensidig respekt
- Villighet til a lytte
- Åpenhet for a lære
- Ærlig presentasjon av eget standpunkt
- Aksept av forskjeller

**Religiose eksklusivisme, inklusivisme og pluralisme:**
Ulike syn pa forholdet mellom religioner.`,
    },
    {
      id: 'religion-etikk-10-def-1',
      type: 'definition',
      title: 'Eksklusivisme, inklusivisme og pluralisme',
      content: `**Eksklusivisme:**
Bare én religion er sann. Andre religioner er falske.
- Tradisjonelt kristent syn: Frelse bare gjennom Jesus
- Tradisjonelt islamsk syn: Islam er den siste apenbaring
- Styrke: Tar sin egen tro pa alvor
- Svakhet: Kan fore til intoleranse

**Inklusivisme:**
Én religion er sann, men andre har delvise sannheter.
- Kristne inklusivister: Guds nåde virker ogsa utenfor kirken
- Kan kombinere trosoverbevisning og respekt

**Pluralisme:**
Flere religioner er like gyldige veier til sannhet/frelse.
- John Hick: Alle religioner er kulturelle uttrykk for det transcendente
- Styrke: Fremmer toleranse
- Svakhet: Kan utvanne religiøs overbevisning

**Praktisk:**
Uavhengig av teologisk posisjon kan man praktisere respektfull dialog.`,
    },
    {
      id: 'religion-etikk-10-def-2',
      type: 'definition',
      title: 'Eksistensielle sporsmal',
      content: `**Livets mening:**
Hvorfor er vi her? Har livet et formal?
- Religiose svar: Tjene Gud, oppna frelse, realisere karma
- Sekulære svar: Skape egen mening, relasjoner, bidra til andre

**Doden:**
Hva skjer nar vi dor?
- Kristendom/islam: Oppstandelse, dom, evig liv
- Hinduisme/buddhisme: Gjenfodelse, moksha/nirvana
- Naturalisme: Bevissthetens opphor

**Lidelse:**
Hvorfor finnes ondskap og lidelse?
- Teodicéproblemet: Hvordan forene Guds godhet med lidelse?
- Karma: Lidelse som konsekvens av handlinger
- Eksistensialisme: Lidelse er en del av tilværelsen

**Identitet:**
Hvem er jeg? Hva gjor meg til meg?
- Religiose svar: Sjelen, skapt i Guds bilde
- Buddhisme: Ikke-selv (anatta)
- Sekulære svar: Bevissthet, minner, relasjoner`,
    },
    {
      id: 'religion-etikk-10-def-3',
      type: 'definition',
      title: 'Teodicéproblemet',
      content: `**Problemet:**
Hvis Gud er:
1. Allmektig (kan forhindre ondskap)
2. Allvitende (vet om ondskap)
3. God (vil forhindre ondskap)

...hvorfor finnes da ondskap og lidelse?

**Forsvar (teodicéer):**

**Fri vilje:**
Gud ga mennesket frihet. Ondskap er prisen for friheten.

**Sjeleformende:**
Lidelse former karakteren og muliggjor vekst.

**Straff:**
Lidelse er konsekvens av synd.

**Mysterium:**
Vi kan ikke forstå Guds veier.

**Kritikk:**
- Forklarer ikke naturkatastrofer
- Barn lider uskyldige
- For mye lidelse for formalet

**Praktisk teodicé:**
Ikke bare forklare, men respondere med handling og trøst.`,
    },
    {
      id: 'religion-etikk-10-example-1',
      type: 'example',
      title: 'Eksempel: Hva gir livet mening?',
      problem: `Sammenlign religiose og sekulære svar pa sporsmalet om livets mening.`,
      solution: `**Kristendom:**
Mening i relasjonen til Gud. Mennesket er skapt for a kjenne og ære Gud. Evig liv gir jordelivet mening.

**Islam:**
Mening i a underkaste seg Gud (islam). Folge Guds vilje. Paradis som belonning.

**Hinduisme:**
Mening i a realisere sin sanne natur (atman = Brahman). Oppna moksha.

**Buddhisme:**
Mening i a oppna frigjoring fra lidelse (nirvana). Den attefoldige vei.

**Humanisme:**
Vi skaper selv mening gjennom relasjoner, arbeid, kreativitet og bidrag til andre. Mening er menneskeskapt.

**Eksistensialisme:**
Livet har ingen forhåndsgitt mening. Vi er "domt til frihet" og ma selv skape mening. Autentisitet.

**Refleksjon:**
Ulike svar reflekterer ulike verdenssyn. Alle soker mening - sporsmalet er hva som gir den.`,
    },
    {
      id: 'religion-etikk-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-10-ex-1',
        number: '10.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom religiøs eksklusivisme, inklusivisme og pluralisme.',
        hints: ['Tenk pa synet pa andre religioners sannhet'],
        solution: 'Eksklusivisme: Bare én religion er sann, andre er falske. Inklusivisme: Én religion er fullstendig sann, men andre har delvise sannheter. Pluralisme: Flere religioner er like gyldige veier til sannhet/frelse. Ulike syn pa forholdet mellom religioner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-10-ex-2',
        number: '10.2',
        type: 'classic',
        task: 'Hva er forutsetninger for god religionsdialog?',
        hints: ['Tenk pa respekt, åpenhet og ærlighet'],
        solution: 'Forutsetninger: Gjensidig respekt for hverandres tro. Villighet til a lytte og forsøke a forsta. Åpenhet for a lære noe nytt. Ærlig presentasjon av eget standpunkt. Aksept av at forskjeller finnes. Unnga a karikere den andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-10-ex-3',
        number: '10.3',
        type: 'classic',
        task: 'Presenter teodicéproblemet og droft et mulig forsvar.',
        hints: ['Forklar problemet, deretter f.eks. fri vilje-argumentet'],
        solution: 'Problemet: Hvis Gud er allmektig, allvitende og god, hvorfor finnes lidelse? Et forsvar: Fri vilje-teodicéen - Gud ga mennesket frihet, og ondskap er prisen. Kritikk: Forklarer ikke naturkatastrofer eller barns lidelse. Ingen forsvar er fullstendig tilfredsstillende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-10-ex-4',
        number: '10.4',
        type: 'classic',
        task: 'Sammenlign ulike religiose og sekulære syn pa hva som skjer etter doden.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva lærer kristendom og islam?',
            solution: 'Kristendom: Oppstandelse, dom, himmel eller helvete. Evig liv. Islam: Lignende - oppstandelse, dom, paradis (jannah) eller helvete (jahannam). Sjelen fortsetter etter doden.',
          },
          {
            label: 'b',
            task: 'Hva lærer hinduisme og buddhisme?',
            solution: 'Hinduisme: Sjelen (atman) gjenfødes basert pa karma. Malet er moksha - frigjoring. Buddhisme: Gjenfodelse uten evig sjel. Malet er nirvana - opphor av gjenfodelse og lidelse.',
          },
        ],
        solution: 'Syn pa livet etter doden varierer mellom evighetsperspektiv og gjenfodelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-10-ex-5',
        number: '10.5',
        type: 'classic',
        task: 'Droft sporsmalet "Hva gir livet mening?" fra ulike perspektiver.',
        hints: ['Bruk bade religiose og sekulære perspektiver'],
        solution: 'Religiose svar plasserer mening i relasjonen til det guddommelige, i frelse eller frigjoring. Humanisme: Mening skapes gjennom relasjoner, arbeid, bidrag til andre. Eksistensialisme: Vi skaper selv mening i en meningslos verden. Ingen "riktig" svar - avhenger av livssyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'religion-etikk-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'religion-etikk-10-ex-6',
        number: '10.6',
        type: 'classic',
        task: 'Reflekter over hvorfor religionsdialog er viktig i dagens samfunn.',
        hints: ['Tenk pa mangfold, konflikter og sameksistens'],
        solution: 'Samfunnet er religiøst mangfoldig. Misforstaelser kan fore til konflikter. Dialog bygger forstaelse og tillit. Felles utfordringer (klima, fattigdom) krever samarbeid. Respekt for forskjeller er grunnlag for fredelig sameksistens. Dialog erstatter ikke tro, men muliggjor samarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER
// ============================================================================

export const RELIGION_ETIKK_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RELIGION_ETIKK_1,
  CHAPTER_RELIGION_ETIKK_2,
  CHAPTER_RELIGION_ETIKK_3,
  CHAPTER_RELIGION_ETIKK_4,
  CHAPTER_RELIGION_ETIKK_5,
  CHAPTER_RELIGION_ETIKK_6,
  CHAPTER_RELIGION_ETIKK_7,
  CHAPTER_RELIGION_ETIKK_8,
  CHAPTER_RELIGION_ETIKK_9,
  CHAPTER_RELIGION_ETIKK_10,
];

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Religion og etikk VG3
 *
 * Seksjon 1: Religionsvitenskap – metode og begreper (Kapittel 1.1–1.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er religionsvitenskap?
// ============================================================================

const CHAPTER_RELIGION_ETIKK_1_1: TextbookChapter = {
  id: 'religion-etikk-1-1',
  courseId: 'religion-etikk',
  title: 'Hva er religionsvitenskap?',
  chapterNumber: '1.1',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for og drøfte ulike definisjoner av religion og livssyn',
    'presentere og drøfte ulike metoder i religionsvitenskapen',
  ],
  exercises: [],
  content: [
    {
      id: 're-1-1-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Religion har vært en del av menneskets liv i tusenvis av år. Over hele verden finner vi ulike religiøse tradisjoner som former hvordan mennesker tenker, handler og forstår verden rundt seg. Men hvordan kan vi studere religion på en systematisk og vitenskapelig måte? Det er her religionsvitenskap kommer inn – et akademisk fag som undersøker religion som et menneskelig og kulturelt fenomen.',
    },
    {
      id: 're-1-1-def-1',
      type: 'definition',
      title: 'Religionsvitenskap',
      content:
        'Religionsvitenskap er det akademiske studiet av religioner, religiøse fenomener og livssyn. Faget søker å beskrive, forstå og forklare religion som et menneskelig og kulturelt fenomen, uten å ta stilling til om religiøse påstander er sanne eller usanne.',
    },
    {
      id: 're-1-1-text-1',
      type: 'text',
      title: 'Et tverrfaglig fag',
      content:
        'Religionsvitenskap er et tverrfaglig fag som henter metoder og perspektiver fra flere vitenskaper. Historikere undersøker religionenes utvikling over tid, sosiologer studerer religionens rolle i samfunnet, psykologer utforsker religiøse erfaringer, og antropologer ser på religion i ulike kulturer. Denne bredden gjør religionsvitenskap til et rikt og mangfoldig fagfelt som kan belyse religion fra mange vinkler.',
    },
    {
      id: 're-1-1-ex-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Hva kjennetegner religionsvitenskap?',
      content: 'Hva er det viktigste kjennetegnet ved religionsvitenskap som akademisk fag?',
      options: [
        'Det forsøker å bevise at én religion er den sanne',
        'Det studerer religion som et menneskelig og kulturelt fenomen',
        'Det er det samme som teologi',
        'Det handler bare om kristendommen',
      ],
      correctAnswer: 1,
      explanation:
        'Religionsvitenskap studerer religion som et menneskelig og kulturelt fenomen. Faget tar ikke stilling til om religiøse sannhetskrav er gyldige – det beskriver og analyserer religiøse tradisjoner utenfra.',
    },
    {
      id: 're-1-1-def-2',
      type: 'definition',
      title: 'Teologi',
      content:
        'Teologi er studiet av gudsforståelse og religiøs tro innenfra en bestemt religiøs tradisjon. Teologen arbeider gjerne ut fra en trosposisjon og undersøker hva troen betyr og innebærer for den troende.',
    },
    {
      id: 're-1-1-text-2',
      type: 'text',
      title: 'Skillet mellom teologi og religionsvitenskap',
      content:
        'Et grunnleggende skille i studiet av religion går mellom teologi og religionsvitenskap. Teologen studerer religion innenfra – ofte med utgangspunkt i egen tro – og spør hva troen betyr og hvordan den bør leves ut. Religionsviteren studerer derimot religion utenfra, som en forsker som observerer og analyserer et fenomen. Teologen kan for eksempel spørre «Hva er Guds vilje?», mens religionsviteren spør «Hva tror de troende at Guds vilje er, og hvordan påvirker dette livet deres?» Begge tilnærmingene har verdi, men de stiller ulike spørsmål og bruker ulike metoder.',
    },
    {
      id: 're-1-1-example-1',
      type: 'example',
      title: 'Teologi vs. religionsvitenskap i praksis',
      content:
        'Tenk deg at man studerer bønnepraksisen i islam. En teolog innen islamsk tradisjon vil undersøke hva Koranen og hadith sier om bønn, og hva den riktige måten å be på er. En religionsviter vil derimot undersøke hvordan bønnepraksisen faktisk utøves i ulike muslimske samfunn, hva den betyr sosialt og psykologisk, og hvordan praksisen har endret seg over tid – uten å vurdere om bønnepraksisen er «riktig» i religiøs forstand.',
    },
    {
      id: 're-1-1-ex-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Teologi eller religionsvitenskap?',
      content:
        'En forsker undersøker hvordan fastepraksisen i kristendommen har endret seg fra middelalderen til i dag. Er dette teologi eller religionsvitenskap?',
      options: [
        'Teologi, fordi det handler om en kristen praksis',
        'Religionsvitenskap, fordi forskeren studerer praksisen utenfra og historisk',
        'Verken teologi eller religionsvitenskap',
        'Begge deler samtidig',
      ],
      correctAnswer: 1,
      explanation:
        'Dette er religionsvitenskap fordi forskeren studerer en religiøs praksis utenfra, med en historisk tilnærming. Forskeren tar ikke stilling til om faste er religiøst riktig, men beskriver hvordan praksisen har utviklet seg.',
    },
    {
      id: 're-1-1-def-3',
      type: 'definition',
      title: 'Deskriptiv tilnærming',
      content:
        'En deskriptiv tilnærming beskriver og forklarer fenomener slik de er, uten å vurdere om de er gode eller dårlige, sanne eller usanne. Religionsvitenskap er i utgangspunktet deskriptiv.',
    },
    {
      id: 're-1-1-def-4',
      type: 'definition',
      title: 'Normativ tilnærming',
      content:
        'En normativ tilnærming tar stilling til verdispørsmål – hva som er riktig, godt eller sant. Teologi er ofte normativ, fordi den vurderer religiøs praksis og lære opp mot en standard.',
    },
    {
      id: 're-1-1-text-3',
      type: 'text',
      title: 'Deskriptiv vs. normativ tilnærming',
      content:
        'Et sentralt skille i religionsstudier går mellom det deskriptive og det normative. Når vi arbeider deskriptivt, beskriver vi hva mennesker tror og gjør, uten å felle dommer. Vi kan for eksempel beskrive at hinduer anser kua som hellig, uten å si noe om hvorvidt dette er riktig eller galt. Når vi arbeider normativt, tar vi stilling til hva som bør være tilfellet. I religionsvitenskapen er idealet å være deskriptiv, men i praksis er grensen ikke alltid klar. Forskerens bakgrunn, kultur og verdier kan ubevisst påvirke hva som studeres og hvordan det tolkes. Å være bevisst på dette er en viktig del av det religionsvitenskapelige håndverket.',
    },
    {
      id: 're-1-1-ex-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Deskriptiv eller normativ?',
      content: 'Hvilken av følgende utsagn er deskriptiv?',
      options: [
        'Alle mennesker burde tro på en høyere makt',
        'I buddhismen er nirvana det ultimate målet for tilværelsen',
        'Kristendommen er den eneste sanne religionen',
        'Det er galt å tvinge noen til å delta i religiøse ritualer',
      ],
      correctAnswer: 1,
      explanation:
        'Utsagnet om buddhismen er deskriptivt fordi det beskriver hva buddhister tror, uten å ta stilling til om det er sant. De andre utsagnene er normative – de sier noe om hva som bør eller er riktig/galt.',
    },
    {
      id: 're-1-1-text-4',
      type: 'text',
      title: 'Hvorfor studere religion?',
      content:
        'I en stadig mer globalisert verden er kunnskap om religion viktigere enn noensinne. Religion påvirker politikk, konflikter, kunst, moral og hverdagsliv for milliarder av mennesker. For å forstå nyhetsbildet, historiske hendelser og mellommenneskelige relasjoner trenger vi redskaper til å analysere religionens rolle. Religionsvitenskapen gir oss slike redskaper – den hjelper oss å forstå uten nødvendigvis å være enige, og å respektere uten nødvendigvis å dele troen.',
    },
    {
      id: 're-1-1-ex-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Refleksjonsoppgave',
      content:
        'Forklar med egne ord hva som skiller religionsvitenskap fra teologi. Gi et eksempel på hvordan den samme religiøse praksisen kan studeres fra begge perspektiver.',
    },
    {
      id: 're-1-1-ex-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Diskusjonsoppgave',
      content:
        'Er det mulig å studere religion helt nøytralt og objektivt? Diskuter utfordringer en religionsviter kan møte når det gjelder å holde seg deskriptiv.',
    },
    {
      id: 're-1-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content:
        'I dette kapittelet har vi sett at religionsvitenskap er et akademisk fag som studerer religion som et menneskelig og kulturelt fenomen. Faget skiller seg fra teologi ved å ha en utenfra-posisjon og en deskriptiv tilnærming. Mens teologen arbeider innenfra en trosstradisjon og ofte stiller normative spørsmål, søker religionsviteren å beskrive og forklare uten å vurdere sannhetsverdi. Denne grunnholdningen er avgjørende for videre arbeid med de ulike metodene og begrepene vi skal utforske i resten av seksjonen.',
    },
    {
      id: 're-1-1-ex-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for hva religionsvitenskap er, og forklar skillet mellom deskriptiv og normativ tilnærming. Bruk eksempler for å vise hvorfor dette skillet er viktig.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Definisjoner av religion
// ============================================================================

const CHAPTER_RELIGION_ETIKK_1_2: TextbookChapter = {
  id: 'religion-etikk-1-2',
  courseId: 'religion-etikk',
  title: 'Definisjoner av religion',
  chapterNumber: '1.2',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for og drøfte ulike definisjoner av religion og livssyn',
  ],
  exercises: [],
  content: [
    {
      id: 're-1-2-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'De fleste av oss har en intuitiv forståelse av hva religion er. Vi tenker kanskje på kirker, moskéer, bønn og hellige tekster. Men når vi forsøker å formulere en presis definisjon som dekker alle verdens religioner, viser det seg å være overraskende vanskelig. I dette kapittelet skal vi se på ulike måter å definere religion på, og diskutere styrker og svakheter ved hver tilnærming.',
    },
    {
      id: 're-1-2-text-1',
      type: 'text',
      title: 'Hvorfor er det vanskelig å definere religion?',
      content:
        'Religion er et mangfoldig fenomen. Noen religioner har en gudstro, andre ikke. Noen har hellige skrifter, andre bygger på muntlig tradisjon. Noen er organisert med tydelige hierarkier, andre er løst strukturert. Noen religioner legger vekt på tro, andre på handling og ritualer. Denne enorme variasjonen gjør det vanskelig å finne en definisjon som inkluderer alt vi ønsker å kalle religion, uten å bli så vid at den mister sin mening. Spørsmålet «Hva er religion?» er derfor ikke bare et akademisk spørsmål – det har også praktiske konsekvenser, for eksempel for hvem som får rettigheter knyttet til religionsfrihet.',
    },
    {
      id: 're-1-2-def-1',
      type: 'definition',
      title: 'Substansiell definisjon',
      content:
        'En substansiell definisjon forsøker å si hva religion er, altså hva den inneholder eller handler om. Et typisk eksempel er å definere religion som «tro på overnaturlige vesener eller makter». Substansielle definisjoner fokuserer på innholdet i religiøs tro og praksis.',
    },
    {
      id: 're-1-2-text-2',
      type: 'text',
      title: 'Substansielle definisjoner',
      content:
        'Substansielle definisjoner har en lang historie innen religionsvitenskapen. Edward Burnett Tylor (1832–1917), en av antropologiens grunnleggere, definerte religion som «tro på åndelige vesener». Denne definisjonen er enkel og intuitiv, men den utelukker tradisjoner som theravada-buddhismen, der man ikke nødvendigvis tror på guder eller ånder i tradisjonell forstand. Rudolf Otto (1869–1937) foreslo at religion i sin kjerne handler om opplevelsen av «det hellige» (das Heilige) – en erfaring av noe overveldende og helt annerledes som han kalte «det numinøse». Ottos tilnærming fanger noe viktig ved religiøs erfaring, men den kan kritiseres for å være for fokusert på individuell opplevelse og for å overse religionens sosiale dimensjon.',
    },
    {
      id: 're-1-2-example-1',
      type: 'example',
      title: 'Problemet med substansielle definisjoner',
      content:
        'Hvis vi definerer religion som «tro på en gud eller guder», utelukker vi buddhisme (i sin opprinnelige form) og jainisme. Hvis vi utvider til «tro på overnaturlige krefter», kan vi ende opp med å inkludere overtro og magi som de fleste ikke ville kalle religion. Substansielle definisjoner står overfor et dilemma: De er enten for snevre (utelukker noe vi ønsker å inkludere) eller for vide (inkluderer noe vi ønsker å utelukke).',
    },
    {
      id: 're-1-2-ex-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Substansielle definisjoner',
      content: 'Hva kjennetegner en substansiell definisjon av religion?',
      options: [
        'Den fokuserer på hva religion gjør for mennesker og samfunn',
        'Den forsøker å si hva religion er, altså hva den inneholder',
        'Den hevder at religion ikke kan defineres',
        'Den sammenligner religion med familie',
      ],
      correctAnswer: 1,
      explanation:
        'En substansiell definisjon forsøker å si hva religion er i sitt vesen – hva den inneholder eller handler om. For eksempel «tro på overnaturlige vesener» eller «opplevelse av det hellige».',
    },
    {
      id: 're-1-2-def-2',
      type: 'definition',
      title: 'Funksjonell definisjon',
      content:
        'En funksjonell definisjon fokuserer på hva religion gjør – hvilken funksjon eller rolle den fyller i menneskers liv og i samfunnet. Religion kan for eksempel defineres som det som gir mennesker mening, tilhørighet eller svar på eksistensielle spørsmål.',
    },
    {
      id: 're-1-2-text-3',
      type: 'text',
      title: 'Funksjonelle definisjoner',
      content:
        'I motsetning til substansielle definisjoner spør funksjonelle definisjoner ikke hva religion er, men hva religion gjør. Sosiologen Émile Durkheim (1858–1917) definerte religion som «et enhetlig system av trosforestillinger og praksiser knyttet til hellige ting, som forener tilhengerne i et moralsk fellesskap». Her er det religionens sosiale funksjon – å skape fellesskap – som står i sentrum. Teologen Paul Tillich (1886–1965) foreslo at religion er «det som angår oss ubetinget» (ultimate concern). Denne definisjonen fanger en bred forståelse av religion som noe dypt eksistensielt. Styrken ved funksjonelle definisjoner er at de kan inkludere et bredt spekter av fenomener. Svakheten er at de kan bli for vide: Er fotball en religion fordi det skaper fellesskap? Er politisk ideologi religion fordi den gir mening?',
    },
    {
      id: 're-1-2-ex-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Funksjonell definisjon',
      content:
        'Paul Tillich definerte religion som «det som angår oss ubetinget». Hva er den største utfordringen med denne definisjonen?',
      options: [
        'Den er for smal og utelukker mange religioner',
        'Den er for vid og kan inkludere fenomener som ikke er religion',
        'Den fungerer bare for kristendommen',
        'Den tar ikke hensyn til tro',
      ],
      correctAnswer: 1,
      explanation:
        'Tillichs definisjon er funksjonell og svært vid. Problemet er at mange ting kan «angå oss ubetinget» – politikk, karriere, kjærlighet – uten at vi vanligvis kaller det religion. Definisjonen kan bli for inkluderende.',
    },
    {
      id: 're-1-2-def-3',
      type: 'definition',
      title: 'Familielikhet',
      content:
        'Familielikhet er et begrep hentet fra filosofen Ludwig Wittgenstein (1889–1951). Ideen er at religion ikke har én felles essens, men at ulike religioner ligner hverandre på forskjellige måter – slik medlemmer av en familie kan ha likheter uten at alle deler ett bestemt trekk.',
    },
    {
      id: 're-1-2-text-4',
      type: 'text',
      title: 'Familielikhet – en alternativ tilnærming',
      content:
        'Mange religionsvitere har gitt opp å finne én enkel definisjon og bruker i stedet begrepet familielikhet. Tenk på en familie der noen medlemmer har same nese, andre har same øyefarge, og noen har same kropp – men ingen har alle trekkene felles. På samme måte kan religioner dele ulike trekk: gudstro, ritualer, etiske regler, hellige tekster, fellesskap, opplevelse av det hellige. Ingen av disse trekkene finnes i alle religioner, men de fleste religioner deler noen av dem. Denne tilnærmingen unngår problemet med for snevre eller for vide definisjoner, men den kan kritiseres for å være vag og vanskelig å anvende i praksis.',
    },
    {
      id: 're-1-2-example-2',
      type: 'example',
      title: 'Familielikhet i praksis',
      content:
        'Kristendommen, islam og jødedommen deler gudstro og hellige skrifter. Buddhismen og hinduismen deler ideer om karma og gjenfødelse. Kristendommen og buddhismen deler ideen om en grunnlegger. Islam og jødedommen deler detaljerte rituelle matregler. Ingen av disse trekkene er felles for alle, men de overlapper og skaper et nettverk av likheter – en «familielikhet» mellom religionene.',
    },
    {
      id: 're-1-2-ex-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Familielikhet',
      content: 'Hva innebærer begrepet «familielikhet» når det brukes om religion?',
      options: [
        'Alle religioner har ett felles trekk som definerer dem',
        'Religioner deler ulike trekk med hverandre uten at ett trekk er felles for alle',
        'Bare religioner innen samme «familie» kan sammenlignes',
        'Religioner utvikler seg fra én felles stamreligion',
      ],
      correctAnswer: 1,
      explanation:
        'Familielikhet betyr at religioner ligner hverandre på ulike måter, uten at det finnes ett bestemt trekk som alle deler. Det er et nettverk av overlappende likheter.',
    },
    {
      id: 're-1-2-ex-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Analyseoppgave',
      content:
        'Sammenlign substansielle og funksjonelle definisjoner av religion. Gi ett eksempel på en styrke og en svakhet ved hver type definisjon.',
    },
    {
      id: 're-1-2-ex-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Drøftingsoppgave',
      content:
        'Kan buddhisme regnes som en religion? Drøft dette spørsmålet ved å vise til ulike definisjoner av religion.',
    },
    {
      id: 're-1-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Å definere religion er en grunnleggende utfordring i religionsvitenskapen. Substansielle definisjoner forsøker å si hva religion er, men risikerer å utelukke viktige tradisjoner eller å bli for vide. Funksjonelle definisjoner ser på hva religion gjør, men kan inkludere fenomener de fleste ikke ville kalle religion. Familielikhet-tilnærmingen unngår noen av disse problemene ved å anerkjenne at religion er et mangfoldig fenomen uten én felles essens. I praksis bruker religionsvitere ofte en kombinasjon av disse tilnærmingene.',
    },
    {
      id: 're-1-2-ex-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for tre ulike måter å definere religion på: substansiell, funksjonell og familielikhet. Vurder hvilken tilnærming du mener er mest fruktbar, og begrunn svaret.',
    },
  ],
};

// ============================================================================
// Kapittel 1.3: Sentrale religionsvitenskapelige begreper
// ============================================================================

const CHAPTER_RELIGION_ETIKK_1_3: TextbookChapter = {
  id: 'religion-etikk-1-3',
  courseId: 'religion-etikk',
  title: 'Sentrale religionsvitenskapelige begreper',
  chapterNumber: '1.3',
  estimatedMinutes: 25,
  competenceGoals: [
    'bruke fagbegreper til å beskrive og analysere religiøse fenomener',
    'gjøre rede for og drøfte ulike definisjoner av religion og livssyn',
  ],
  exercises: [],
  content: [
    {
      id: 're-1-3-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'For å kunne studere religion på en presis og analytisk måte, trenger vi et sett med fagbegreper. Disse begrepene fungerer som verktøy som hjelper oss å identifisere, beskrive og sammenligne religiøse fenomener på tvers av ulike tradisjoner. I dette kapittelet skal vi gjennomgå noen av de viktigste begrepene i religionsvitenskapen.',
    },
    {
      id: 're-1-3-def-1',
      type: 'definition',
      title: 'Ritual',
      content:
        'Et ritual er en formalisert, gjentatt handling med symbolsk betydning. Religiøse ritualer er handlinger som settes i forbindelse med det hellige, og som gjerne følger et fast mønster. Eksempler er bønn, ofring, dåp og pilegrimsreiser.',
    },
    {
      id: 're-1-3-text-1',
      type: 'text',
      title: 'Ritualer i religionene',
      content:
        'Ritualer er en av de mest universelle sidene ved religion. Nesten alle religiøse tradisjoner har ritualer som markerer viktige hendelser, opprettholder forholdet til det hellige og skaper fellesskap mellom de troende. Ritualer kan være daglige (som bønn fem ganger om dagen i islam), ukentlige (som søndagsgudstjeneste i kristendommen), årlige (som Pesach i jødedommen) eller knyttet til bestemte hendelser i livet (som overgangsritualer). Religionsviteren er interessert i hva ritualer gjør – hvordan de skaper mening, fellesskap og identitet – snarere enn i om de «virker» i religiøs forstand.',
    },
    {
      id: 're-1-3-def-2',
      type: 'definition',
      title: 'Myte',
      content:
        'I religionsvitenskapen betyr myte en hellig fortelling som forklarer grunnleggende sannheter om verden, mennesket og det guddommelige. Myte brukes ikke i dagligtalebetydningen «usann historie», men om fortellinger som har dyp religiøs og kulturell betydning.',
    },
    {
      id: 're-1-3-example-1',
      type: 'example',
      title: 'Myte – eksempler',
      content:
        'Skapelsesfortellingen i 1. Mosebok er en myte i religionsvitenskapelig forstand – en hellig fortelling som forklarer verdens og menneskets opprinnelse. Det hinduistiske eposet Ramayana er en myte som formidler verdier om plikt, ære og guddommelig inngripen. I norrøn religion forklarer myten om Ragnarok verdens undergang og gjenfødelse. Felles for mytene er at de gir mening til tilværelsen og ofte er knyttet til rituell praksis.',
    },
    {
      id: 're-1-3-ex-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Myteforståelse',
      content: 'Hva menes med «myte» i religionsvitenskapen?',
      options: [
        'En usann historie som folk feilaktig tror på',
        'En hellig fortelling med dyp religiøs og kulturell betydning',
        'En vitenskapelig forklaring som er blitt motbevist',
        'En personlig trosopplevelse',
      ],
      correctAnswer: 1,
      explanation:
        'I religionsvitenskapen er en myte en hellig fortelling som uttrykker grunnleggende sannheter for en religiøs tradisjon. Begrepet brukes uten den negative betydningen det har i dagligtale.',
    },
    {
      id: 're-1-3-def-3',
      type: 'definition',
      title: 'Symbol',
      content:
        'Et symbol er noe konkret (et objekt, en handling, et bilde) som representerer noe annet og dypere. Religiøse symboler peker mot hellige eller guddommelige virkeligheter som ikke kan uttrykkes fullt ut med ord alene.',
    },
    {
      id: 're-1-3-text-2',
      type: 'text',
      title: 'Symboler i religiøst liv',
      content:
        'Symboler er en sentral del av alle religioner. Korset i kristendommen, halvmånen i islam, davidsstjernen i jødedommen og dharmacakra (hjulet) i buddhismen er alle symboler som umiddelbart gjenkjennes og bærer dyp mening for de troende. Men symboler er mer enn bare tegn – de åpner opp for en dypere forståelse av det hellige. Et kors er ikke bare to streker som krysser hverandre; for den kristne peker det mot Jesu lidelse, død og oppstandelse, og mot kjærligheten og forsoningen som ligger i kjernen av troen. Religionsvitere studerer hvordan symboler skaper mening og hvordan de tolkes ulikt i ulike kontekster.',
    },
    {
      id: 're-1-3-def-4',
      type: 'definition',
      title: 'Sakral og profan',
      content:
        'Sakral betyr hellig – knyttet til det guddommelige eller det religiøse. Profan betyr verdslig – det som tilhører den vanlige, dagligdagse virkeligheten. Skillet mellom sakral og profan er grunnleggende i mange religioner.',
    },
    {
      id: 're-1-3-text-3',
      type: 'text',
      title: 'Det sakrale og det profane',
      content:
        'Religionshistorikeren Mircea Eliade (1907–1986) mente at skillet mellom det sakrale og det profane er det mest grunnleggende i all religion. Det sakrale er det som er adskilt fra det vanlige og knyttet til det hellige – en kirke, en hellig tekst, en religiøs høytid. Det profane er det hverdagslige, det som ikke er hellig. Mange religiøse praksiser handler nettopp om å markere overgangen mellom det profane og det sakrale: Man vasker seg før bønn, kler seg spesielt for gudstjeneste, eller tar av seg skoene før man går inn i et tempel. Eliade hevdet at religiøse mennesker opplever tid og rom som kvalitativt forskjellig – noen steder og tider er hellige, andre er vanlige.',
    },
    {
      id: 're-1-3-ex-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Sakral og profan',
      content: 'Hva menes med skillet mellom det sakrale og det profane?',
      options: [
        'Skillet mellom rik og fattig i religiøse samfunn',
        'Skillet mellom det hellige og det verdslige/hverdagslige',
        'Skillet mellom prester og vanlige troende',
        'Skillet mellom nye og gamle religioner',
      ],
      correctAnswer: 1,
      explanation:
        'Det sakrale er det hellige – det som er adskilt og knyttet til det guddommelige. Det profane er det verdslige og hverdagslige. Dette skillet er sentralt i mange religioner og påvirker hvordan troende forholder seg til rom, tid og gjenstander.',
    },
    {
      id: 're-1-3-def-5',
      type: 'definition',
      title: 'Rite de passage (overgangsrite)',
      content:
        'En rite de passage er et ritual som markerer overgangen fra én sosial status eller livsfase til en annen. Begrepet ble innført av etnografen Arnold van Gennep (1873–1957). Eksempler er dåp, konfirmasjon, bryllup og begravelse.',
    },
    {
      id: 're-1-3-text-4',
      type: 'text',
      title: 'Overgangsriter',
      content:
        'Arnold van Gennep identifiserte tre faser i overgangsriter: separasjonsfasen (der personen løsrives fra sin tidligere status), liminalfasen (en mellomtilstand der personen er «mellom» to statuser) og integrasjonsfasen (der personen innlemmes i sin nye status). Denne strukturen finnes i overgangsriter i de fleste kulturer og religioner. I konfirmasjonen separeres den unge fra barnestatus, gjennomgår en forberedelsesperiode (liminalfase), og integreres som voksent medlem av menigheten. Tilsvarende strukturer finner vi i bar/bat mitsva i jødedommen og i de ulike samskara-ritualene i hinduismen.',
    },
    {
      id: 're-1-3-ex-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Rite de passage',
      content: 'Hvilke tre faser inngår i en rite de passage ifølge van Gennep?',
      options: [
        'Bønn, offer og meditasjon',
        'Separasjon, liminalfase og integrasjon',
        'Fødsel, voksen og død',
        'Innledning, handling og avslutning',
      ],
      correctAnswer: 1,
      explanation:
        'Van Gennep beskrev tre faser: separasjon (løsrivelse fra gammel status), liminalfase (mellomtilstand) og integrasjon (innlemmelse i ny status). Denne strukturen finnes i overgangsriter på tvers av kulturer.',
    },
    {
      id: 're-1-3-def-6',
      type: 'definition',
      title: 'Synkretisme',
      content:
        'Synkretisme er sammenblanding eller sammensmeltning av elementer fra ulike religiøse tradisjoner. Det oppstår gjerne i møtet mellom ulike kulturer og religioner, og resulterer i nye religiøse uttrykk som kombinerer trekk fra flere kilder.',
    },
    {
      id: 're-1-3-example-2',
      type: 'example',
      title: 'Synkretisme – eksempler',
      content:
        'Voodoo i Haiti er et klassisk eksempel på synkretisme: Det kombinerer vestafrikanske religiøse tradisjoner med katolsk kristendom. Afrikanske guder (loa) identifiseres med katolske helgener, og ritualer blander elementer fra begge tradisjonene. Et annet eksempel er capoeira i Brasil, som forener afrikansk religion, kamp og dans. Også i norsk kontekst finner vi synkretisme: Juletradisjonene våre blander førkristne nordiske skikker med kristne elementer.',
    },
    {
      id: 're-1-3-def-7',
      type: 'definition',
      title: 'Sekularisering',
      content:
        'Sekularisering er prosessen der religionens innflytelse og betydning i samfunn og individers liv minker. Sekularisering kan vise seg i at færre deltar i religiøse aktiviteter, at statlige institusjoner skilles fra religion, og at religion mister innflytelse på politikk, utdanning og dagligliv.',
    },
    {
      id: 're-1-3-text-5',
      type: 'text',
      title: 'Sekularisering',
      content:
        'Sekularisering har vært et sentralt tema i religionsvitenskapen, særlig i studiet av vestlige samfunn. Lenge antok mange forskere at modernisering uunngåelig ville føre til religionens tilbakegang – den såkalte sekulariseringstesen. De siste tiårene har dette bildet blitt mer nyansert. Mens deler av Europa (inkludert Norge) har opplevd betydelig sekularisering, viser religion seg å være svært vital i andre deler av verden. Noen forskere snakker derfor om desekularisering eller om at religionens form endrer seg snarere enn at den forsvinner. Vi skal komme tilbake til sekularisering i norsk kontekst i kapittel 1.5.',
    },
    {
      id: 're-1-3-ex-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Begrepstrening',
      content:
        'Forklar med egne ord hva som menes med synkretisme, og gi et eksempel fra religionshistorien eller samtiden.',
    },
    {
      id: 're-1-3-ex-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Analyseoppgave',
      content:
        'Velg en religiøs høytid du kjenner til. Identifiser og forklar minst tre religionsvitenskapelige begreper som er relevante for å analysere denne høytiden (for eksempel ritual, symbol, sakral, myte).',
    },
    {
      id: 're-1-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content:
        'I dette kapittelet har vi gjennomgått sentrale begreper i religionsvitenskapen. Ritual, myte, symbol og skillet mellom sakral og profan er grunnleggende verktøy for å forstå religiøst liv. Overgangsriter viser hvordan religion markerer livets overganger, synkretisme illustrerer hvordan religioner blander seg, og sekularisering beskriver religionens endrede rolle i moderne samfunn. Disse begrepene vil være nyttige redskaper gjennom hele kurset.',
    },
    {
      id: 're-1-3-ex-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for begrepene ritual, myte, symbol og rite de passage. Bruk eksempler fra minst to ulike religioner for å belyse begrepene.',
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Metodiske tilnærminger
// ============================================================================

const CHAPTER_RELIGION_ETIKK_1_4: TextbookChapter = {
  id: 'religion-etikk-1-4',
  courseId: 'religion-etikk',
  title: 'Metodiske tilnærminger',
  chapterNumber: '1.4',
  estimatedMinutes: 25,
  competenceGoals: [
    'presentere og drøfte ulike metoder i religionsvitenskapen',
    'reflektere over hva det innebærer å studere religion utenfra og innenfra',
  ],
  exercises: [],
  content: [
    {
      id: 're-1-4-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Religionsvitenskap bruker et bredt spekter av metoder for å studere religion. Ulike metoder belyser ulike sider av det religiøse fenomenet, og valg av metode påvirker hva slags kunnskap vi kan oppnå. I dette kapittelet skal vi se på noen av de viktigste metodiske tilnærmingene i faget, og diskutere skillet mellom emisk og etisk perspektiv.',
    },
    {
      id: 're-1-4-def-1',
      type: 'definition',
      title: 'Fenomenologi',
      content:
        'Religionsfenomenologi er en tilnærming som forsøker å forstå religiøse fenomener slik de oppleves av de troende selv. Målet er å sette egen forforståelse i parentes (epoché) og beskrive det religiøse fenomenet så nøytralt og innlevende som mulig.',
    },
    {
      id: 're-1-4-text-1',
      type: 'text',
      title: 'Fenomenologisk tilnærming',
      content:
        'Religionsfenomenologien har røtter i Edmund Husserls (1859–1938) filosofiske fenomenologi. Innen religionsvitenskapen ble tilnærmingen videreutviklet av blant andre Gerardus van der Leeuw (1890–1950) og Mircea Eliade. Kjernen i fenomenologien er å ta de troendes opplevelse på alvor: Forskeren forsøker å forstå hva bønn, offer eller hellig tekst betyr for den som utøver religionen, uten å redusere det til noe annet. Fenomenologen bruker epoché – å sette egne fordommer og vurderinger i parentes – for å møte det religiøse fenomenet så åpent som mulig. En styrke ved fenomenologien er at den tar religiøs erfaring på alvor. En svakhet er at det er vanskelig å sette seg helt inn i en annens opplevelse, og at metoden kan kritiseres for å overse maktforhold og historisk kontekst.',
    },
    {
      id: 're-1-4-example-1',
      type: 'example',
      title: 'Fenomenologi i praksis',
      content:
        'En fenomenolog som studerer pilegrimsreiser til Mekka (hajj) vil forsøke å forstå hva opplevelsen betyr for den troende muslimen. Hvordan oppleves det å gå rundt Kabaen? Hva betyr fellesskapet med millioner av andre pilegrimer? Fenomenologen vil beskrive disse opplevelsene innenfra, uten å forklare dem bort som «bare» sosial konformitet eller psykologisk behov.',
    },
    {
      id: 're-1-4-ex-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Fenomenologi',
      content: 'Hva betyr «epoché» i religionsfenomenologien?',
      options: [
        'Å kritisere religiøse påstander',
        'Å sette egne fordommer i parentes for å forstå fenomenet åpent',
        'Å sammenligne flere religioner systematisk',
        'Å studere religionens historiske utvikling',
      ],
      correctAnswer: 1,
      explanation:
        'Epoché betyr å sette egne fordommer, vurderinger og forforståelse i parentes. Målet er å møte det religiøse fenomenet så åpent og nøytralt som mulig, for å kunne beskrive det slik det oppleves av den troende.',
    },
    {
      id: 're-1-4-def-2',
      type: 'definition',
      title: 'Komparativ metode',
      content:
        'Den komparative (sammenlignende) metoden innebærer å sammenligne religiøse fenomener på tvers av ulike tradisjoner. Målet er å finne likheter og forskjeller som kan gi dypere innsikt i de enkelte fenomenene og i religion generelt.',
    },
    {
      id: 're-1-4-text-2',
      type: 'text',
      title: 'Komparativ religionsvitenskap',
      content:
        'Å sammenligne religioner er en av de eldste tilnærmingene i religionsvitenskapen. Ved å sammenligne kan vi oppdage mønstre og strukturer som ikke er synlige når vi bare studerer én tradisjon. For eksempel finner vi skaperguder, syndflodsmyter og overgangsriter i de fleste religioner – hva kan dette fortelle oss om religion som menneskelig fenomen? Komparativ metode krever imidlertid varsomhet. Det er viktig å sammenligne på en måte som respekterer de enkelte religionenes egenart, og ikke tvinger dem inn i forhåndsdefinerte kategorier. En overflatisk sammenligning kan føre til at vi overser viktige forskjeller eller tillegger likheter mer betydning enn de fortjener.',
    },
    {
      id: 're-1-4-ex-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Komparativ metode',
      content: 'Hva er en viktig utfordring ved komparativ religionsvitenskap?',
      options: [
        'At det ikke finnes noen likheter mellom religioner',
        'At overflatisk sammenligning kan overse viktige forskjeller',
        'At metoden bare fungerer for monoteistiske religioner',
        'At den krever at forskeren selv er religiøs',
      ],
      correctAnswer: 1,
      explanation:
        'En viktig utfordring er at overflatisk sammenligning kan føre til at man overser viktige forskjeller mellom religioner eller tillegger likheter mer betydning enn de fortjener. God komparativ forskning krever grundig kunnskap om begge tradisjonene.',
    },
    {
      id: 're-1-4-def-3',
      type: 'definition',
      title: 'Historisk metode',
      content:
        'Den historiske metoden studerer religioners opprinnelse, utvikling og endring over tid. Forskeren bruker skriftlige kilder, arkeologisk materiale og andre historiske vitnesbyrd for å rekonstruere religionshistorien.',
    },
    {
      id: 're-1-4-text-3',
      type: 'text',
      title: 'Historisk, sosiologisk og psykologisk tilnærming',
      content:
        'Den historiske tilnærmingen undersøker hvordan religioner har oppstått, utviklet seg og endret seg over tid. Den lar oss se religion som noe dynamisk, ikke statisk. Sosiologisk tilnærming, inspirert av Durkheim, Weber og andre, studerer religionens rolle i samfunnet: Hvordan religion skaper sosial orden, legitimerer makt, eller bidrar til sosial endring. Max Weber (1864–1920) analyserte for eksempel sammenhengen mellom protestantisk etikk og kapitalismens fremvekst. Psykologisk tilnærming, med røtter hos William James (1842–1910) og Sigmund Freud (1856–1939), undersøker religionens rolle i individets liv: Religiøse erfaringer, trosutvikling, og religionens funksjoner for psykisk helse og mestring. Disse tilnærmingene utelukker ikke hverandre, men belyser ulike aspekter ved religion.',
    },
    {
      id: 're-1-4-example-2',
      type: 'example',
      title: 'Ulike metoder – samme fenomen',
      content:
        'Tenk deg at vi studerer kristne pilegrimsreiser til Santiago de Compostela. En historiker vil undersøke pilegrimstradisjonens opprinnelse og utvikling fra middelalderen til i dag. En sosiolog vil analysere hvordan pilegrimsreisen fungerer som fellesskap og sosial praksis. En psykolog vil utforske hva reisen betyr for den enkeltes indre liv og selvforståelse. En fenomenolog vil forsøke å forstå den religiøse opplevelsen av å vandre. Sammen gir disse tilnærmingene et rikt og mangfoldig bilde.',
    },
    {
      id: 're-1-4-def-4',
      type: 'definition',
      title: 'Emisk og etisk perspektiv',
      content:
        'Det emiske perspektivet er innenfra-perspektivet – hvordan de troende selv forstår og forklarer sin religion. Det etiske perspektivet (fra «fonetikk», ikke «etikk» i moralsk forstand) er utenfra-perspektivet – forskerens analytiske beskrivelse og forklaring. Begge perspektivene er viktige i religionsvitenskapen.',
    },
    {
      id: 're-1-4-text-4',
      type: 'text',
      title: 'Emisk og etisk perspektiv',
      content:
        'Skillet mellom emisk og etisk perspektiv er grunnleggende i religionsvitenskapen. Begrepene ble opprinnelig utviklet av lingvisten Kenneth Pike, inspirert av skillet mellom «fonemikk» (hvordan et språks lyder oppleves av brukerne) og «fonetikk» (objektiv analyse av lyder). I religionsstudier handler det emiske perspektivet om å forstå religion slik de troende selv forstår den. Hva betyr nattverden for den kristne? Hvordan opplever en hindu puja? Det etiske perspektivet handler om forskerens analytiske kategorier og forklaringer. Forskeren kan for eksempel forklare et ritual sosiologisk som et middel for å styrke gruppesamhold, selv om de troende selv forstår ritualet som kommunikasjon med det guddommelige. God religionsvitenskap veksler mellom emisk og etisk perspektiv, og er tydelig på hvilket perspektiv som brukes.',
    },
    {
      id: 're-1-4-ex-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Emisk vs. etisk',
      content:
        'En forsker forklarer at bønn fungerer som stressmestring. En troende sier at bønn er å snakke med Gud. Hva representerer disse to perspektivene?',
      options: [
        'Begge er emiske perspektiver',
        'Den troende har et emisk perspektiv, forskeren har et etisk perspektiv',
        'Den troende har et etisk perspektiv, forskeren har et emisk perspektiv',
        'Begge er etiske perspektiver',
      ],
      correctAnswer: 1,
      explanation:
        'Den troendes forståelse (bønn = snakke med Gud) er emisk – det er innenfra-perspektivet. Forskerens analyse (bønn = stressmestring) er etisk – det er utenfra-perspektivet med analytiske kategorier.',
    },
    {
      id: 're-1-4-ex-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Metoderefleksjon',
      content:
        'Velg en metodisk tilnærming (fenomenologisk, komparativ, historisk, sosiologisk eller psykologisk) og forklar hva den innebærer. Gi et eksempel på et religiøst fenomen som kan studeres med denne metoden, og forklar hva slags innsikt metoden kan gi.',
    },
    {
      id: 're-1-4-ex-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Emisk og etisk i praksis',
      content:
        'Forklar skillet mellom emisk og etisk perspektiv. Gi deretter et eksempel der du beskriver et religiøst fenomen fra begge perspektiver.',
    },
    {
      id: 're-1-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Religionsvitenskap bruker et mangfold av metoder for å studere religion. Fenomenologien søker å forstå religiøs erfaring innenfra, den komparative metoden sammenligner på tvers av tradisjoner, og den historiske metoden studerer utvikling over tid. Sosiologiske og psykologiske tilnærminger belyser religionens samfunnsmessige og individuelle funksjoner. Skillet mellom emisk og etisk perspektiv er grunnleggende for å forstå forskjellen mellom innenfra- og utenfra-forståelse av religion. Å mestre disse tilnærmingene gir oss et rikt verktøysett for å analysere religiøse fenomener.',
    },
    {
      id: 're-1-4-ex-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for minst tre ulike metodiske tilnærminger i religionsvitenskapen. Drøft styrker og svakheter ved tilnærmingene, og forklar hvorfor det kan være nyttig å bruke flere metoder sammen.',
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Religion i Norge – mangfold og endring
// ============================================================================

const CHAPTER_RELIGION_ETIKK_1_5: TextbookChapter = {
  id: 'religion-etikk-1-5',
  courseId: 'religion-etikk',
  title: 'Religion i Norge – mangfold og endring',
  chapterNumber: '1.5',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte religionens plass og rolle i det norske samfunnet',
    'gjøre rede for religionsmangfold og sekularisering i Norge',
    'reflektere over religionsfrihet som menneskerettighet',
  ],
  exercises: [],
  content: [
    {
      id: 're-1-5-intro',
      type: 'text',
      title: 'Innledning',
      content:
        'Norge har gått fra å være et religiøst homogent samfunn dominert av Den norske kirke til å bli et land preget av religiøst mangfold og økende sekularisering. Denne utviklingen reiser viktige spørsmål om religionens rolle i samfunnet, forholdet mellom stat og kirke, og hva religionsfrihet innebærer i praksis. I dette kapittelet skal vi se nærmere på det religiøse landskapet i Norge i dag.',
    },
    {
      id: 're-1-5-text-1',
      type: 'text',
      title: 'Den norske kirke – fra statskirke til folkekirke',
      content:
        'I nesten 500 år var Den norske kirke (Den evangelisk-lutherske kirke) en statskirke, tett knyttet til den norske staten. Kongen var kirkens øverste leder, og prester var statlige tjenestemenn. I 2012 ble grunnloven endret slik at Den norske kirke fikk en friere stilling, og i 2017 ble den et selvstendig rettssubjekt. I dag omtales den gjerne som «Norges folkekirke». Selv om båndene mellom stat og kirke er løsere enn før, har Den norske kirke fortsatt en særstilling: Den er nevnt i Grunnloven, finansieres i stor grad over statsbudsjettet, og en stor andel av befolkningen er medlemmer – selv om mange av disse sjelden eller aldri deltar i gudstjenester. Medlemstallet har falt jevnt de siste tiårene, fra over 80 % av befolkningen til under 65 %.',
    },
    {
      id: 're-1-5-ex-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Den norske kirke',
      content: 'Når ble Den norske kirke et selvstendig rettssubjekt, adskilt fra staten?',
      options: [
        '1945',
        '2000',
        '2012',
        '2017',
      ],
      correctAnswer: 3,
      explanation:
        'Den norske kirke ble et selvstendig rettssubjekt i 2017. Grunnlovsendringen i 2012 la grunnlaget, men den formelle selvstendigheten trådte i kraft fra 1. januar 2017.',
    },
    {
      id: 're-1-5-text-2',
      type: 'text',
      title: 'Religiøst mangfold i Norge',
      content:
        'Norge er i dag et religiøst mangfoldig samfunn. Innvandring har ført med seg nye religiøse tradisjoner: Islam er den nest største religionen, med over 200 000 medlemmer i islamske trossamfunn. Katolisisme har også vokst betydelig, særlig på grunn av innvandring fra Polen og andre katolske land. I tillegg finner vi hinduistiske, buddhistiske, sikh- og bahai-samfunn, samt en rekke nye religiøse bevegelser. Også innenfor kristendommen er det stort mangfold: Pinsebevegelsen, Den katolske kirke, ortodokse kirker og ulike frikirker representerer ulike tradisjoner. Det religiøse mangfoldet gjenspeiler seg i bybildet, i skolen og i offentlig debatt, og stiller nye krav til dialog og sameksistens.',
    },
    {
      id: 're-1-5-example-1',
      type: 'example',
      title: 'Religiøst mangfold i praksis',
      content:
        'I Oslo finner du Den norske kirkes domkirke, den katolske St. Olav domkirke, moskéer som Islamic Cultural Centre og Central Jamaat-e Ahl-e Sunnat, den buddhistiske foreningen Buddhistforbundet, hindutempelet Sanatan Mandir, sikhgurudwaraen, og en rekke andre religiøse forsamlinger. Dette mangfoldet er synlig i matbutikker (halal-kjøtt, kosher-produkter), i helligdager og i den offentlige debatten om religion.',
    },
    {
      id: 're-1-5-ex-2',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Religiøst mangfold',
      content: 'Hva er den nest største religionen i Norge målt i antall medlemmer i registrerte trossamfunn?',
      options: [
        'Buddhisme',
        'Hinduisme',
        'Islam',
        'Katolisisme',
      ],
      correctAnswer: 2,
      explanation:
        'Islam er den nest største religionen i Norge målt i antall medlemmer i registrerte trossamfunn. De islamske trossamfunnene har over 200 000 medlemmer og har vokst betydelig de siste tiårene.',
    },
    {
      id: 're-1-5-def-1',
      type: 'definition',
      title: 'Sekularisering (i norsk kontekst)',
      content:
        'I norsk sammenheng viser sekularisering seg blant annet i synkende medlemstall i Den norske kirke, lavere gudstjenestedeltakelse, færre som døper barna sine og konfirmerer seg kirkelig, og en tendens til at religion spiller en mindre rolle i folks hverdagsliv og i offentlig politikk.',
    },
    {
      id: 're-1-5-text-3',
      type: 'text',
      title: 'Sekularisering i Norge',
      content:
        'Norge er et av de mest sekulære landene i verden. Undersøkelser viser at en synkende andel av befolkningen tror på Gud, ber regelmessig eller anser religion som viktig i livet sitt. Andelen som velger borgerlig konfirmasjon fremfor kirkelig har økt kraftig, og stadig flere velger å ikke døpe barna sine. Samtidig er bildet komplekst: Mange nordmenn som ikke anser seg som religiøse, deltar likevel i kirkelige ritualer ved dåp, konfirmasjon, bryllup og begravelse. Religion spiller fortsatt en rolle ved nasjonale kriser og høytider – reaksjonen etter 22. juli 2011, der mange søkte til kirkene, viste dette tydelig. Noen forskere mener derfor at det er mer presist å snakke om en endring i religionens form enn om dens forsvinning.',
    },
    {
      id: 're-1-5-ex-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Sekularisering i Norge',
      content: 'Hva er et tegn på sekularisering i Norge?',
      options: [
        'Flere melder seg inn i Den norske kirke',
        'Flere velger borgerlig konfirmasjon fremfor kirkelig',
        'Flere moskéer bygges i norske byer',
        'Flere feirer jul',
      ],
      correctAnswer: 1,
      explanation:
        'At flere velger borgerlig konfirmasjon fremfor kirkelig konfirmasjon er et tydelig tegn på sekularisering – det viser at færre unge velger en tradisjonell kristen markering av overgangen til voksenlivet.',
    },
    {
      id: 're-1-5-def-2',
      type: 'definition',
      title: 'Religionsfrihet',
      content:
        'Religionsfrihet er en grunnleggende menneskerettighet som innebærer frihet til å ha, skifte eller forlate en religion eller et livssyn, og frihet til å utøve sin religion individuelt eller i fellesskap med andre. Religionsfrihet er beskyttet av Grunnloven § 16 og av internasjonale konvensjoner.',
    },
    {
      id: 're-1-5-text-4',
      type: 'text',
      title: 'Religionsfrihet og religionspolitikk',
      content:
        'Religionsfrihet er forankret i den norske grunnloven og i internasjonale menneskerettighetskonvensjoner som Norge har ratifisert. I praksis reiser religionsfrihet en rekke vanskelige spørsmål: Kan en arbeidsgiver nekte en ansatt å bruke hijab? Bør staten finansiere religiøse skoler? Skal religiøse trossamfunn ha rett til å forskjellsbehandle på grunnlag av kjønn eller seksuell orientering? Norsk religionspolitikk forsøker å balansere mellom religionsfrihet, likestilling og andre grunnleggende verdier. Trossamfunnsloven fra 2021 regulerer forholdet mellom staten og trossamfunnene, og stiller krav for å motta statlig støtte. Religionspolitikk handler i bunn og grunn om hvordan et mangfoldig samfunn kan leve med ulike livssyn og religiøse tradisjoner på en rettferdig og respektfull måte.',
    },
    {
      id: 're-1-5-ex-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Drøftingsoppgave',
      content:
        'Drøft hva religionsfrihet innebærer i praksis. Kan det oppstå konflikter mellom religionsfrihet og andre verdier som likestilling? Gi eksempler og diskuter hvordan slike konflikter kan håndteres.',
    },
    {
      id: 're-1-5-ex-5',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Analysere endring',
      content:
        'Beskriv hovedtrekkene i sekulariseringen i Norge. Diskuter om det er riktig å si at religion er i ferd med å forsvinne, eller om det er mer presist å si at religionens form endrer seg.',
    },
    {
      id: 're-1-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Det religiøse landskapet i Norge har endret seg dramatisk de siste tiårene. Den norske kirke har gått fra å være statskirke til å være en selvstendig folkekirke med synkende medlemstall. Samtidig har innvandring ført til økt religiøst mangfold, med islam som den nest største religionen. Sekulariseringen er tydelig, men bildet er nyansert – religion spiller fortsatt en rolle ved viktige livshendelser og i krisetider. Religionsfrihet er en grunnleggende rettighet, men reiser krevende spørsmål om avveiningen mellom ulike verdier i et mangfoldig samfunn.',
    },
    {
      id: 're-1-5-ex-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Gjør rede for hvordan det religiøse landskapet i Norge har endret seg de siste tiårene. Trekk inn begreper som sekularisering, religiøst mangfold og religionsfrihet, og drøft utfordringer og muligheter knyttet til disse endringene.',
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const RELIGION_ETIKK_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_RELIGION_ETIKK_1_1,
  CHAPTER_RELIGION_ETIKK_1_2,
  CHAPTER_RELIGION_ETIKK_1_3,
  CHAPTER_RELIGION_ETIKK_1_4,
  CHAPTER_RELIGION_ETIKK_1_5,
];

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Sosiologi og sosialantropologi VG3
 *
 * Seksjon 1: Fagenes grunnlag (Kapittel 1.1–1.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er sosiologi?
// ============================================================================

const CHAPTER_SOSIOLOGI_1_1: TextbookChapter = {
  id: 'sosiologi-1-1',
  courseId: 'sosiologi',
  chapterNumber: '1.1',
  title: 'Hva er sosiologi?',
  estimatedTime: 20,
  exercises: [],
  content: [
    {
      id: 'sos-1-1-intro',
      type: 'text',
      title: 'Introduksjon',
      content:
        'Sosiologi er vitenskapen om samfunnet. Det er faget som studerer hvordan mennesker lever sammen, hvordan sosiale grupper dannes, og hvordan samfunnsstrukturer påvirker individets handlinger og muligheter. Mens vi i hverdagen ofte forklarer menneskers atferd ut fra personlige egenskaper, søker sosiologien å forstå de større mønstrene som former livene våre. Hvorfor er det for eksempel slik at barn av foreldre med høy utdanning selv har større sannsynlighet for å ta høyere utdanning? Sosiologien gir oss verktøy til å stille slike spørsmål – og til å finne svar.',
    },
    {
      id: 'sos-1-1-def-1',
      type: 'definition',
      title: 'Sosiologi',
      content:
        'Sosiologi er den systematiske vitenskapen om samfunnslivet. Faget studerer sosiale relasjoner, institusjoner, strukturer og prosesser for å forstå hvordan samfunn fungerer og endrer seg over tid.',
    },
    {
      id: 'sos-1-1-text-1',
      type: 'text',
      title: 'Sosiologiens opprinnelse: Industrialiseringens barn',
      content:
        'Sosiologien vokste frem som eget fag på 1800-tallet, i en tid med enorme samfunnsomveltninger. Industrialiseringen forandret Europa fra bunnen av: Mennesker flyttet fra landsbygda til byene, tradisjonelle fellesskap ble oppløst, og nye sosiale klasser oppstod. Fabrikkarbeidere levde under elendige forhold, mens en ny kapitalistklasse samlet enorm rikdom. Disse dramatiske endringene skapte et behov for å forstå samfunnet på en systematisk måte.\n\nDen franske revolusjonen i 1789 hadde allerede vist at samfunnsordenen ikke var gudgitt – den kunne forandres av mennesker. Dette åpnet for en ny måte å tenke på: Hvis samfunnet er menneskeskapt, kan det også studeres vitenskapelig. Det var i dette intellektuelle klimaet sosiologien ble født.',
    },
    {
      id: 'sos-1-1-ex-1',
      type: 'example',
      title: 'Fra landsby til fabrikk',
      content:
        'Tenk deg en norsk bondefamilie på 1860-tallet. I generasjoner har familien drevet gården, og alle i bygda kjenner hverandre. Så kommer industrialiseringen: Sønnen reiser til byen for å jobbe på fabrikk. Han bor i en liten leilighet blant fremmede, jobber lange dager og har ingen av de tradisjonelle støttenettverkene rundt seg. Denne overgangen – fra det lille, oversiktlige bygdesamfunnet til det store, anonyme bysamfunnet – er nettopp den typen endringer de tidlige sosiologene ønsket å forstå og forklare.',
    },
    {
      id: 'sos-1-1-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hvilken historisk prosess var særlig viktig for fremveksten av sosiologien som fag?',
      options: [
        'Reformasjonen på 1500-tallet',
        'Industrialiseringen på 1800-tallet',
        'Kolonialiseringen av Amerika',
        'Den vitenskapelige revolusjonen på 1600-tallet',
      ],
      correctAnswer: 1,
      explanation:
        'Industrialiseringen på 1800-tallet førte til enorme samfunnsendringer – urbanisering, nye klasser, oppløsning av tradisjonelle fellesskap – som skapte behovet for en systematisk vitenskap om samfunnet.',
    },
    {
      id: 'sos-1-1-def-2',
      type: 'definition',
      title: 'Den sosiologiske fantasien',
      content:
        'Den sosiologiske fantasien (eller imaginasjonen) er et begrep lansert av den amerikanske sosiologen C. Wright Mills i 1959. Det handler om evnen til å se sammenhengen mellom individuelle erfaringer og større samfunnsstrukturer – å forstå at personlige problemer ofte henger sammen med offentlige spørsmål.',
    },
    {
      id: 'sos-1-1-text-2',
      type: 'text',
      title: 'C. Wright Mills og den sosiologiske fantasien',
      content:
        'Den amerikanske sosiologen C. Wright Mills (1916–1962) formulerte et av sosiologiens mest sentrale begreper: den sosiologiske fantasien. Mills mente at det viktigste sosiologien kan gi oss, er evnen til å se forbindelsen mellom det personlige og det samfunnsmessige.\n\nHvis én person mister jobben, er det et personlig problem. Men hvis millioner av mennesker mister jobben samtidig, er det et samfunnsproblem – et strukturelt fenomen som krever en strukturell forklaring. Den sosiologiske fantasien handler om å løfte blikket fra enkeltskjebner og se de større mønstrene.\n\nMills var kritisk til sosiologer som bare samlet inn data uten å sette dem inn i en større sammenheng. Han mente at sosiologien måtte være relevant for vanlige mennesker og bidra til å forstå – og utfordre – maktstrukturer i samfunnet.',
    },
    {
      id: 'sos-1-1-ex-2',
      type: 'example',
      title: 'Frafall i videregående skole',
      content:
        'La oss si at en elev slutter på videregående. Vi kan forklare dette individuelt: kanskje eleven var umotivert, hadde det vanskelig hjemme eller var lei av skolen. Men den sosiologiske fantasien oppfordrer oss til å se det større bildet: I Norge er det systematiske forskjeller i hvem som faller fra. Elever med foreldre uten høyere utdanning, elever fra lavinntektsfamilier og gutter på yrkesfag har statistisk sett høyere frafall. Dette tyder på at frafall ikke bare handler om individuelle valg, men om strukturelle forhold i utdanningssystemet og i samfunnet.',
    },
    {
      id: 'sos-1-1-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Forklar med egne ord hva C. Wright Mills mente med «den sosiologiske fantasien». Gi et eksempel fra din egen hverdag der du kan bruke dette perspektivet.',
    },
    {
      id: 'sos-1-1-text-3',
      type: 'text',
      title: 'Samfunnsvitenskapelig tenkemåte',
      content:
        'Sosiologien er en del av samfunnsvitenskapene, og den deler visse grunnleggende trekk med andre fag som statsvitenskap, økonomi og sosialantropologi. Alle disse fagene søker å forstå og forklare sosiale fenomener på en systematisk måte.\n\nDen samfunnsvitenskapelige tenkemåten kjennetegnes av flere ting. For det første er den empirisk: Den bygger på observasjoner og data fra den virkelige verden, ikke bare på spekulasjoner. For det andre er den kritisk: Den stiller spørsmål ved det som tas for gitt og utfordrer etablerte sannheter. For det tredje er den systematisk: Den bruker bestemte metoder for innsamling og analyse av data.\n\nEn viktig forskjell fra naturvitenskapene er at samfunnsvitenskapene studerer mennesker som tenker, føler og handler med mening. Dette gjør at fortolkning og forståelse – ikke bare forklaring – er sentralt i samfunnsforskningen.',
    },
    {
      id: 'sos-1-1-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva kjennetegner den samfunnsvitenskapelige tenkemåten?',
      options: [
        'Den bygger utelukkende på logiske resonnementer uten empiri',
        'Den er empirisk, kritisk og systematisk',
        'Den bruker kun eksperimenter som forskningsmetode',
        'Den studerer bare individer, ikke samfunnsstrukturer',
      ],
      correctAnswer: 1,
      explanation:
        'Den samfunnsvitenskapelige tenkemåten er empirisk (bygger på observasjoner), kritisk (stiller spørsmål ved det selvfølgelige) og systematisk (bruker bestemte metoder).',
    },
    {
      id: 'sos-1-1-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Hva skiller samfunnsvitenskapene fra naturvitenskapene? Diskuter hvorfor denne forskjellen har betydning for hvordan vi forsker på samfunnet.',
    },
    {
      id: 'sos-1-1-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hva betyr det at et problem er «strukturelt» ifølge den sosiologiske tenkemåten?',
      options: [
        'At det skyldes enkeltpersoners dårlige valg',
        'At det er forankret i samfunnets organisering og ikke kan forklares individuelt alene',
        'At det kun kan løses gjennom politiske vedtak',
        'At det er uforanderlig og ikke kan påvirkes',
      ],
      correctAnswer: 1,
      explanation:
        'Et strukturelt problem er forankret i måten samfunnet er organisert på – i institusjoner, systemer og maktforhold – og kan ikke fullt ut forklares ved å peke på enkeltindivider.',
    },
    {
      id: 'sos-1-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sosiologi er vitenskapen om samfunnet. Faget oppstod på 1800-tallet som en respons på de store omveltningene industrialiseringen medførte. C. Wright Mills\' begrep «den sosiologiske fantasien» oppsummerer kjernen i sosiologisk tenkning: evnen til å se sammenhengen mellom individuelle erfaringer og samfunnsstrukturer. Den samfunnsvitenskapelige tenkemåten er empirisk, kritisk og systematisk, og skiller seg fra naturvitenskapene ved at den studerer meningsskapende aktører.',
    },
    {
      id: 'sos-1-1-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Velg et aktuelt samfunnsproblem (for eksempel boligpriser, psykisk helse blant unge eller klimaendringer). Forklar hvordan du kan analysere dette problemet ved hjelp av den sosiologiske fantasien. Skille mellom individuelle forklaringer og strukturelle forklaringer.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Hva er sosialantropologi?
// ============================================================================

const CHAPTER_SOSIOLOGI_1_2: TextbookChapter = {
  id: 'sosiologi-1-2',
  courseId: 'sosiologi',
  chapterNumber: '1.2',
  title: 'Hva er sosialantropologi?',
  estimatedTime: 20,
  exercises: [],
  content: [
    {
      id: 'sos-1-2-intro',
      type: 'text',
      title: 'Introduksjon',
      content:
        'Sosialantropologi er studiet av mennesker, kulturer og samfunn i all sin mangfoldighet. Mens sosiologien tradisjonelt har hatt sitt utspring i studiet av moderne, vestlige samfunn, har sosialantropologien historisk rettet blikket utover – mot fjerne folkeslag og fremmede kulturer. I dag studerer sosialantropologer alle typer samfunn, fra småskalasamfunn i Amazonas til norske bygdesamfunn. Det som skiller faget fra andre samfunnsvitenskaper, er først og fremst metoden: det langvarige feltarbeidet med deltakende observasjon.',
    },
    {
      id: 'sos-1-2-def-1',
      type: 'definition',
      title: 'Sosialantropologi',
      content:
        'Sosialantropologi er studiet av sosialt og kulturelt liv på tvers av samfunn. Faget undersøker hvordan mennesker organiserer sine liv, skaper mening og forholder seg til hverandre, med særlig vekt på kulturell variasjon og sammenligning.',
    },
    {
      id: 'sos-1-2-text-1',
      type: 'text',
      title: 'Feltarbeid og deltakende observasjon',
      content:
        'Det som gjør sosialantropologien unik blant samfunnsvitenskapene, er feltarbeidet. Antropologer reiser ut og lever sammen med de menneskene de studerer, ofte i måneder eller år. Denne metoden kalles deltakende observasjon: Forskeren deltar i dagliglivet til dem hun studerer, samtidig som hun observerer og analyserer det som skjer.\n\nDeltakende observasjon innebærer å lære seg lokale språk, delta i ritualer og hverdagsaktiviteter, bygge tillit og bli kjent med menneskers livsverden innenfra. Målet er å forstå andre menneskers perspektiv – å se verden gjennom deres øyne. Denne tilnærmingen gir en type innsikt som spørreundersøkelser og statistikk sjelden kan fange.\n\nDen polsk-britiske antropologen Bronislaw Malinowski (1884–1942) regnes som feltarbeidets grunnlegger. Hans studier av trobrianderne i Stillehavet på 1910- og 1920-tallet satte standarden for moderne antropologisk forskning.',
    },
    {
      id: 'sos-1-2-def-2',
      type: 'definition',
      title: 'Deltakende observasjon',
      content:
        'Deltakende observasjon er en forskningsmetode der forskeren lever sammen med og deltar i hverdagslivet til de menneskene som studeres, over lengre tid. Metoden kombinerer aktiv deltakelse med systematisk observasjon og refleksjon.',
    },
    {
      id: 'sos-1-2-ex-1',
      type: 'example',
      title: 'Malinowskis feltarbeid',
      content:
        'Da Malinowski studerte trobrianderne i Melanesia, bodde han blant dem i flere år. Han lærte seg språket deres, deltok i handelsekspedisjoner (den berømte kula-ringen) og observerte dagliglivet på nært hold. Han oppdaget at kula-handelen – utveksling av skjellsmykker mellom øyer – ikke handlet om økonomisk profitt, men om å bygge og vedlikeholde sosiale relasjoner. Denne innsikten hadde vært umulig å oppnå uten langvarig deltakende observasjon.',
    },
    {
      id: 'sos-1-2-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er deltakende observasjon?',
      options: [
        'En metode der forskeren observerer mennesker gjennom kamera uten å være til stede',
        'En metode der forskeren lever sammen med og deltar i hverdagslivet til dem som studeres',
        'En metode der forskeren sender ut spørreskjemaer til informanter',
        'En metode der forskeren kun intervjuer nøkkelpersoner i et samfunn',
      ],
      correctAnswer: 1,
      explanation:
        'Deltakende observasjon innebærer at forskeren lever sammen med og deltar i dagliglivet til de som studeres, over lengre tid, for å forstå deres livsverden innenfra.',
    },
    {
      id: 'sos-1-2-text-2',
      type: 'text',
      title: 'Kulturrelativisme og etnosentrisme',
      content:
        'To sentrale begreper i sosialantropologien er kulturrelativisme og etnosentrisme. De representerer to motsatte måter å forholde seg til kulturell forskjellighet på.\n\nEtnosentrisme betyr å vurdere andre kulturer ut fra sin egen kulturs målestokk – å anta at ens egne verdier, normer og skikker er de «riktige» eller «naturlige». Historisk sett har etnosentriske holdninger ført til at europeere har betraktet andre kulturer som «primitive» eller «underutviklede».\n\nKulturrelativisme er det motsatte prinsippet: å forstå en kultur på dens egne premisser. Det betyr ikke at man må akseptere eller godta alle kulturelle praksiser, men at man forsøker å forstå dem i sin sammenheng før man dømmer. Den tysk-amerikanske antropologen Franz Boas (1858–1942) var en sentral forkjemper for kulturrelativisme og argumenterte mot rasistiske teorier som rangerte kulturer i et hierarki.',
    },
    {
      id: 'sos-1-2-def-3',
      type: 'definition',
      title: 'Kulturrelativisme',
      content:
        'Kulturrelativisme er prinsippet om å forstå en kultur på dens egne premisser, uten å bedømme den ut fra ens egen kulturs verdier og normer. Det er et metodisk prinsipp som fremmer forståelse, men innebærer ikke nødvendigvis moralsk aksept av alle praksiser.',
    },
    {
      id: 'sos-1-2-def-4',
      type: 'definition',
      title: 'Etnosentrisme',
      content:
        'Etnosentrisme er tendensen til å vurdere andre kulturer ut fra ens egen kulturs verdier og normer, og ofte anta at ens egen kultur er overlegen. Begrepet brukes vanligvis kritisk i sosialantropologien.',
    },
    {
      id: 'sos-1-2-ex-2',
      type: 'example',
      title: 'Matskikker og kulturrelativisme',
      content:
        'I Norge spiser vi brunost og lutefisk – noe mange utlendinger synes er merkelig. I Sørøst-Asia spises insekter som en vanlig proteinkilde, noe mange nordmenn finner uappetittlig. I India er kua hellig, og det å spise biff ville vært støtende for mange hinduer. En kulturrelativistisk tilnærming innebærer å forstå matskikkene i sin kulturelle kontekst – ikke å rangere dem som «bedre» eller «verre». Hva vi spiser og ikke spiser, er kulturelt betinget, ikke naturlig gitt.',
    },
    {
      id: 'sos-1-2-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Forklar forskjellen mellom kulturrelativisme og etnosentrisme. Gi et eksempel på en situasjon der det kan være utfordrende å praktisere kulturrelativisme.',
    },
    {
      id: 'sos-1-2-text-3',
      type: 'text',
      title: 'Sentrale antropologer: Boas og Geertz',
      content:
        'Franz Boas (1858–1942) regnes som den amerikanske antropologiens far. Han argumenterte sterkt mot rasistiske teorier som hevdet at noen kulturer var «høyerestående» enn andre. Boas fremhevet at alle kulturer er komplekse systemer av mening, og at de må forstås på egne premisser. Han var også pioner innen historisk partikularisme – ideen om at hver kultur har sin unike historie og ikke kan forstås gjennom universelle utviklingsmodeller.\n\nClifford Geertz (1926–2006) videreførte den fortolkende tradisjonen i antropologien. Han er kjent for begrepet «tykk beskrivelse» (thick description) – en detaljert beskrivelse av kulturelle praksiser som inkluderer den meningen aktørene selv legger i dem. For Geertz handlet antropologi ikke om å finne lovmessigheter, men om å fortolke kulturelle tegn og symboler.',
    },
    {
      id: 'sos-1-2-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva mente Clifford Geertz med «tykk beskrivelse»?',
      options: [
        'En lang og detaljert statistisk analyse av et samfunn',
        'En detaljert beskrivelse av kulturelle praksiser som inkluderer aktørenes egen mening',
        'En beskrivelse av et samfunns økonomiske struktur',
        'En biologisk beskrivelse av menneskers tilpasning til miljøet',
      ],
      correctAnswer: 1,
      explanation:
        'Geertz\' «tykke beskrivelse» handler om å gi en detaljert beskrivelse av kulturelle praksiser som ikke bare beskriver hva som skjer, men også inkluderer den meningen deltakerne selv legger i handlingene sine.',
    },
    {
      id: 'sos-1-2-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Hvorfor mener sosialantropologer at feltarbeid med deltakende observasjon gir en annen type kunnskap enn spørreundersøkelser? Diskuter fordeler og ulemper med metoden.',
    },
    {
      id: 'sos-1-2-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hvem regnes som feltarbeidets grunnlegger i sosialantropologien?',
      options: [
        'Clifford Geertz',
        'Franz Boas',
        'Bronislaw Malinowski',
        'Margaret Mead',
      ],
      correctAnswer: 2,
      explanation:
        'Bronislaw Malinowski regnes som feltarbeidets grunnlegger gjennom sine banebrytende studier av trobrianderne i Melanesia, der han utviklet metoden for langvarig deltakende observasjon.',
    },
    {
      id: 'sos-1-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sosialantropologi er studiet av mennesker og kulturer i all sin mangfoldighet. Fagets viktigste metode er deltakende observasjon gjennom langvarig feltarbeid, en tradisjon som ble grunnlagt av Malinowski. Kulturrelativisme – å forstå andre kulturer på deres egne premisser – er et sentralt prinsipp, i motsetning til etnosentrisme. Viktige bidragsytere inkluderer Boas, som bekjempet rasistiske kulturteorier, og Geertz, som utviklet ideen om tykk beskrivelse.',
    },
    {
      id: 'sos-1-2-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Tenk deg at du skal gjennomføre et mini-feltarbeid i din egen skolehverdag. Beskriv hva du ville observert, hvilke spørsmål du ville stilt, og hvordan du ville brukt prinsippet om kulturrelativisme. Reflekter over utfordringer ved å forske på et miljø du selv er en del av.',
    },
  ],
};

// ============================================================================
// Kapittel 1.3: Sosiologiens grunnleggere
// ============================================================================

const CHAPTER_SOSIOLOGI_1_3: TextbookChapter = {
  id: 'sosiologi-1-3',
  courseId: 'sosiologi',
  chapterNumber: '1.3',
  title: 'Sosiologiens grunnleggere',
  estimatedTime: 25,
  exercises: [],
  content: [
    {
      id: 'sos-1-3-intro',
      type: 'text',
      title: 'Introduksjon',
      content:
        'Sosiologien ble til i en tid med dramatiske samfunnsendringer. De tenkerne som grunnla faget, forsøkte å forstå hva som holdt samfunnet sammen – og hva som truet med å rive det fra hverandre. I dette kapittelet møter vi fem sentrale skikkelser: Auguste Comte, som ga faget sitt navn, Émile Durkheim, som etablerte sosiologien som empirisk vitenskap, Karl Marx, som analyserte kapitalismens klassekonflikter, Max Weber, som undersøkte makt, byråkrati og meningsskaping, og Harriet Martineau, som ofte overses men var en pioner innen empirisk samfunnsforskning.',
    },
    {
      id: 'sos-1-3-def-1',
      type: 'definition',
      title: 'Positivisme',
      content:
        'Positivisme er en vitenskapsteoretisk retning grunnlagt av Auguste Comte. Positivismen hevder at samfunnet kan og bør studeres med de samme vitenskapelige metodene som naturvitenskapene – gjennom observasjon, måling og lovmessigheter.',
    },
    {
      id: 'sos-1-3-text-1',
      type: 'text',
      title: 'Auguste Comte (1798–1857): Sosiologiens navngiver',
      content:
        'Den franske filosofen Auguste Comte regnes som den som ga sosiologien sitt navn. Han skapte begrepet «sosiologi» i 1838 ved å kombinere det latinske socius (følgesvenn, samfunn) og det greske logos (vitenskap, lære).\n\nComte mente at samfunnet kunne studeres like vitenskapelig som naturen. Denne tilnærmingen kalte han positivisme. Han tenkte seg at menneskelig tenkning utviklet seg gjennom tre stadier: det teologiske stadiet (der fenomener forklares med guder), det metafysiske stadiet (der abstrakte ideer erstatter gudene) og det positive stadiet (der vitenskapelig observasjon gir kunnskap).\n\nSelv om Comtes «stadietenkning» i dag anses som foreldet, var hans grunnleggende idé viktig: at vi kan og bør studere samfunnet systematisk og vitenskapelig.',
    },
    {
      id: 'sos-1-3-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva mente Auguste Comte med positivisme?',
      options: [
        'At man alltid bør ha en positiv holdning til samfunnet',
        'At samfunnet kan studeres med vitenskapelige metoder på lik linje med naturen',
        'At alle samfunn utvikler seg mot noe bedre over tid',
        'At forskning bør være nøytral og aldri kritisk',
      ],
      correctAnswer: 1,
      explanation:
        'Comtes positivisme innebar at samfunnet kunne og burde studeres med de samme vitenskapelige metodene som naturvitenskapene – gjennom systematisk observasjon og lovmessigheter.',
    },
    {
      id: 'sos-1-3-text-2',
      type: 'text',
      title: 'Émile Durkheim (1858–1917): Sosiale fakta',
      content:
        'Den franske sosiologen Émile Durkheim er kanskje den viktigste skikkelsen i sosiologiens historie. Han var den første som fikk en professorstilling i sosiologi, og han etablerte faget som en selvstendig vitenskapelig disiplin.\n\nDurkheims mest grunnleggende idé var at samfunnet er noe mer enn summen av enkeltindividene som utgjør det. Han innførte begrepet «sosiale fakta» – normer, verdier, institusjoner og kollektive forestillinger som eksisterer utenfor og uavhengig av det enkelte individ. Sosiale fakta utøver tvang over individene, enten vi er klar over det eller ei.\n\nI sitt berømte verk «Selvmordet» (1897) viste Durkheim at selv noe så tilsynelatende personlig som selvmord kunne forklares sosiologisk. Han fant at selvmordsrater varierte systematisk mellom ulike sosiale grupper – for eksempel hadde protestanter høyere selvmordsrate enn katolikker, og ugifte menn høyere enn gifte. Durkheim forklarte dette med graden av sosial integrasjon: jo svakere båndene til fellesskapet var, desto høyere var risikoen for selvmord.',
    },
    {
      id: 'sos-1-3-def-2',
      type: 'definition',
      title: 'Sosiale fakta',
      content:
        'Sosiale fakta er ifølge Durkheim normer, verdier, institusjoner og kollektive forestillinger som eksisterer utenfor det enkelte individ og utøver tvang over menneskers handlinger. De er sosiologiens studieobjekt.',
    },
    {
      id: 'sos-1-3-ex-1',
      type: 'example',
      title: 'Sosiale fakta i praksis',
      content:
        'Tenk på språket du snakker. Du har ikke funnet det opp selv – det eksisterte lenge før du ble født, og det vil fortsette å eksistere etter deg. Du kan ikke bare velge å endre grammatikkreglene – språket utøver en form for tvang over deg. Likevel opplever du det sjelden som tvang, fordi det føles naturlig. Dette er et godt eksempel på et sosialt faktum i Durkheims forstand.',
    },
    {
      id: 'sos-1-3-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Forklar hva Durkheim mente med «sosiale fakta». Gi tre eksempler fra din egen hverdag på sosiale fakta som utøver tvang over deg.',
    },
    {
      id: 'sos-1-3-text-3',
      type: 'text',
      title: 'Karl Marx (1818–1883): Klassekamp og kapitalisme',
      content:
        'Karl Marx var ikke sosiolog i faglig forstand, men hans ideer har hatt enorm innflytelse på sosiologien. Marx analyserte kapitalismen som et økonomisk system preget av en grunnleggende motsetning mellom to klasser: borgerskapet (bourgeoisiet), som eide produksjonsmidlene (fabrikker, jord, råvarer), og arbeiderklassen (proletariatet), som bare hadde sin arbeidskraft å selge.\n\nIfølge Marx var denne klassemotsetningen den drivende kraften i historien. Borgerskapet utnyttet arbeiderklassen ved å ta ut merverdi – forskjellen mellom verdien arbeideren skapte og lønnen hun fikk. Marx mente at denne utnyttelsen til slutt ville føre til revolusjon.\n\nEt sentralt begrep hos Marx er historisk materialisme: ideen om at det er de materielle forholdene – særlig økonomien og eiendomsforholdene – som danner grunnlaget for samfunnets politiske, juridiske og kulturelle strukturer. Marx kalte dette for basis og overbygning.',
    },
    {
      id: 'sos-1-3-def-3',
      type: 'definition',
      title: 'Historisk materialisme',
      content:
        'Historisk materialisme er Marx\' teori om at de materielle og økonomiske forholdene i et samfunn (basis) legger grunnlaget for dets politiske, juridiske og kulturelle strukturer (overbygning). Endringer i økonomiske forhold driver historisk utvikling.',
    },
    {
      id: 'sos-1-3-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva mente Marx med «basis» og «overbygning»?',
      options: [
        'Basis er statens lovverk, overbygning er økonomien',
        'Basis er de økonomiske forholdene, overbygning er politikk, jus og kultur',
        'Basis er naturen, overbygning er samfunnet',
        'Basis er arbeiderklassen, overbygning er borgerskapet',
      ],
      correctAnswer: 1,
      explanation:
        'Marx mente at basis er de materielle og økonomiske forholdene (eiendomsforhold, produksjonsmåte), mens overbygningen er de politiske, juridiske og kulturelle strukturene som hviler på og formes av basis.',
    },
    {
      id: 'sos-1-3-text-4',
      type: 'text',
      title: 'Max Weber (1864–1920): Forståelse og byråkrati',
      content:
        'Den tyske sosiologen Max Weber er en av sosiologiens tre «grunnleggere» sammen med Durkheim og Marx. Weber var uenig med Marx i at økonomien alene kunne forklare samfunnsutviklingen. Han mente at ideer, verdier og kultur også hadde selvstendig betydning.\n\nI sitt berømte verk «Den protestantiske etikk og kapitalismens ånd» (1905) argumenterte Weber for at protestantismens arbeidsetikk – særlig kalvinismen – bidro til fremveksten av kapitalismen i Europa. Dette var et direkte motargument til Marx\' historiske materialisme.\n\nWeber var også opptatt av makt og byråkrati. Han definerte makt som muligheten til å gjennomføre sin vilje, selv mot andres motstand. Han analyserte byråkratiet som en stadig viktigere organisasjonsform i moderne samfunn – effektiv, men også en potensiell «jernbur» som fanger mennesker i upersonlige regler og rutiner.\n\nMetodisk introduserte Weber begrepet verstehen (forståelse): ideen om at sosiologien må forsøke å forstå meningen bak menneskers handlinger, ikke bare observere ytre atferd.',
    },
    {
      id: 'sos-1-3-ex-2',
      type: 'example',
      title: 'Webers jernbur i dagens samfunn',
      content:
        'Har du noen gang opplevd å bli sendt fra kontor til kontor uten at noen tar ansvar for saken din? Eller at en rigid regel hindrer en åpenbart fornuftig løsning? Weber ville kjent igjen dette som byråkratiets «jernbur» – en situasjon der organisasjonens regler og prosedyrer lever sitt eget liv, løsrevet fra menneskene de er ment å tjene. I det moderne samfunnet finner vi dette i alt fra NAV og skatteetaten til store bedrifter og universiteter.',
    },
    {
      id: 'sos-1-3-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Sammenlign Marx\' og Webers syn på hva som driver samfunnsutviklingen. Hvem av dem mener du har mest rett? Begrunn svaret ditt.',
    },
    {
      id: 'sos-1-3-text-5',
      type: 'text',
      title: 'Harriet Martineau (1802–1876): En oversett pioner',
      content:
        'Harriet Martineau var en britisk forfatter og tenkere som i dag regnes som en av sosiologiens glemte grunnleggere. Hun oversatte Auguste Comtes verk til engelsk og bidro dermed til å spre sosiologiske ideer i den engelskspråklige verden.\n\nMen Martineau var langt mer enn en oversetter. Hun gjennomførte omfattende empiriske studier av det amerikanske samfunnet, publisert i «Society in America» (1837). Hun analyserte slaveriet, kvinners stilling, utdanningssystemet og politiske institusjoner med et skarpt sosiologisk blikk. Hun argumenterte for at et samfunns moral måtte vurderes ut fra hvordan det behandlet sine svakeste medlemmer – et perspektiv som var radikalt for sin tid.\n\nMartineau var også en pioner innen sosiologisk metode. Hun argumenterte for at forskere måtte være objektive, bruke systematisk observasjon og sammenligne ulike samfunn for å trekke konklusjoner.',
    },
    {
      id: 'sos-1-3-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hvorfor regnes Harriet Martineau som en pioner innen sosiologien?',
      options: [
        'Hun grunnla den første sosiologiske universitetsinstituttet',
        'Hun gjennomførte banebrytende empiriske studier og argumenterte for systematisk metode',
        'Hun utviklet teorien om sosiale fakta',
        'Hun innførte begrepet «den sosiologiske fantasien»',
      ],
      correctAnswer: 1,
      explanation:
        'Martineau gjennomførte omfattende empiriske studier av det amerikanske samfunnet, oversatte Comtes verk til engelsk og var en pioner innen sosiologisk metode med sin vektlegging av systematisk observasjon og sammenligning.',
    },
    {
      id: 'sos-1-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'Sosiologiens grunnleggere formet faget på ulike måter: Comte ga det sitt navn og sin positivistiske ambisjon. Durkheim etablerte det som empirisk vitenskap med begrepet sosiale fakta. Marx analyserte kapitalismens klassekonflikter gjennom historisk materialisme. Weber fremhevet ideenes kraft, makt og byråkrati, og introduserte verstehen som metode. Martineau var en empirisk pioner som studerte ulikhet og undertrykkelse. Til sammen la disse tenkerne grunnlaget for den moderne sosiologien.',
    },
    {
      id: 'sos-1-3-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Lag en oversiktstabell over de fem grunnleggerne i dette kapittelet. For hver grunnlegger: oppgi navn, levetid, nasjonalitet, sentrale begreper og viktigste bidrag til sosiologien. Diskuter deretter: Hvilke av disse tenkernes ideer mener du er mest relevante for å forstå det norske samfunnet i dag?',
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Sosiologiske perspektiver
// ============================================================================

const CHAPTER_SOSIOLOGI_1_4: TextbookChapter = {
  id: 'sosiologi-1-4',
  courseId: 'sosiologi',
  chapterNumber: '1.4',
  title: 'Sosiologiske perspektiver',
  estimatedTime: 25,
  exercises: [],
  content: [
    {
      id: 'sos-1-4-intro',
      type: 'text',
      title: 'Introduksjon',
      content:
        'Sosiologer ser på samfunnet gjennom ulike «briller» – det vi kaller teoretiske perspektiver. Et perspektiv er en måte å rette oppmerksomheten på, en ramme som avgjør hvilke spørsmål vi stiller og hvilke svar vi ser etter. I dette kapittelet ser vi på tre av de viktigste sosiologiske perspektivene: funksjonalisme, konfliktteori og symbolsk interaksjonisme. Disse perspektivene supplerer hverandre og gir til sammen et rikere bilde av samfunnet.',
    },
    {
      id: 'sos-1-4-def-1',
      type: 'definition',
      title: 'Funksjonalisme',
      content:
        'Funksjonalisme er et sosiologisk perspektiv som ser samfunnet som et system av gjensidig avhengige deler, der hver del fyller en funksjon som bidrar til helheten. Perspektivet fokuserer på stabilitet, orden og samhold.',
    },
    {
      id: 'sos-1-4-text-1',
      type: 'text',
      title: 'Funksjonalisme: Samfunnet som organisme',
      content:
        'Funksjonalismen sammenligner samfunnet med en levende organisme. Akkurat som kroppens organer – hjertet, lungene, leveren – har ulike funksjoner som til sammen holder kroppen i live, har samfunnets institusjoner – familien, skolen, rettsvesenet, religionen – ulike funksjoner som til sammen holder samfunnet i gang.\n\nÉmile Durkheim la grunnlaget for dette perspektivet. Han var opptatt av hva som holder samfunnet sammen – det han kalte sosial solidaritet. I tradisjonelle samfunn var solidariteten basert på likhet (mekanisk solidaritet), mens den i moderne samfunn er basert på arbeidsdeling og gjensidig avhengighet (organisk solidaritet).\n\nDen amerikanske sosiologen Talcott Parsons (1902–1979) videreutviklet funksjonalismen. Han identifiserte fire grunnleggende funksjoner ethvert samfunn må oppfylle for å overleve: tilpasning til omgivelsene (A), måloppnåelse (G), integrasjon (I) og verdiopprettholdelse (L) – kjent som AGIL-skjemaet.\n\nFunksjonalismen er blitt kritisert for å overbetone stabilitet og konsensus, og for å ha vanskeligheter med å forklare sosial endring og konflikter.',
    },
    {
      id: 'sos-1-4-ex-1',
      type: 'example',
      title: 'Utdanningssystemets funksjoner',
      content:
        'En funksjonalist ville analysere skolen ved å spørre: Hvilke funksjoner fyller den for samfunnet? De åpenbare (manifeste) funksjonene inkluderer å formidle kunnskap og ferdigheter, kvalifisere for arbeidslivet og gi formelle kvalifikasjoner. Men skolen har også skjulte (latente) funksjoner: den sosialiserer barn til å følge regler og autoriteter, den gir foreldre mulighet til å jobbe mens barna er på skolen, og den fungerer som en arena for nettverksbygging og sosial seleksjon.',
    },
    {
      id: 'sos-1-4-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva er et sentralt kjennetegn ved funksjonalismen?',
      options: [
        'Den fokuserer på konflikter mellom sosiale grupper',
        'Den ser samfunnet som et system der ulike deler fyller funksjoner for helheten',
        'Den studerer hvordan mennesker skaper mening gjennom samhandling',
        'Den hevder at all sosial orden bygger på tvang og makt',
      ],
      correctAnswer: 1,
      explanation:
        'Funksjonalismen ser samfunnet som et system av gjensidig avhengige deler, der institusjoner som familien, skolen og rettsvesenet fyller ulike funksjoner som bidrar til samfunnets stabilitet og overlevelse.',
    },
    {
      id: 'sos-1-4-def-2',
      type: 'definition',
      title: 'Konfliktteori',
      content:
        'Konfliktteori er et sosiologisk perspektiv som vektlegger makt, ulikhet og interessemotsetninger som grunnleggende trekk ved samfunnet. I stedet for å fokusere på stabilitet, ser konfliktteoretikere på hvordan grupper kjemper om knappe ressurser og hvordan maktforhold opprettholdes.',
    },
    {
      id: 'sos-1-4-text-2',
      type: 'text',
      title: 'Konfliktteori: Makt og ulikhet',
      content:
        'Mens funksjonalismen fremhever harmoni og samarbeid, setter konfliktteorien søkelys på makt, ulikhet og interessemotsetninger. Karl Marx er det viktigste forbilde for dette perspektivet, men det har blitt videreutviklet av mange sosiologer.\n\nKonfliktteoretikere hevder at samfunnet er preget av ulikhet mellom grupper – basert på klasse, kjønn, etnisitet, alder og andre skillelinjer. Disse gruppene har ulike interesser og kjemper om knappe ressurser som penger, makt og status. Den gruppen som har mest makt, bruker denne makten til å opprettholde sin posisjon – blant annet gjennom lovverk, ideologi og kontroll over medier og utdanning.\n\nMax Weber nyanserte Marx\' klasseanalyse ved å legge til dimensjonene status (prestisje) og parti (politisk makt). Ifølge Weber kan en person ha høy status uten å være rik (for eksempel en respektert prest), og rikdom gir ikke automatisk politisk makt.\n\nModerne konfliktteoretikere studerer blant annet kjønnsulikhet (feministisk teori), rasisme og diskriminering (kritisk raseteori) og global ulikhet mellom rike og fattige land.',
    },
    {
      id: 'sos-1-4-ex-2',
      type: 'example',
      title: 'Utdanning sett fra et konfliktperspektiv',
      content:
        'En konfliktteoretiker ville stille helt andre spørsmål om skolen enn en funksjonalist. I stedet for å spørre «hvilke funksjoner fyller skolen?», ville hun spørre: «Hvem tjener på det nåværende skolesystemet?» Forskning viser at barn fra familier med høy utdanning og inntekt klarer seg systematisk bedre i skolen. Konfliktteoretikere vil hevde at skolen ikke bare overfører kunnskap, men også reproduserer sosial ulikhet – den gir et skinn av like muligheter mens den i praksis favoriserer de privilegerte.',
    },
    {
      id: 'sos-1-4-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Forklar hvordan en funksjonalist og en konfliktteoretiker vil analysere det norske helsevesenet på ulike måter. Hvilke spørsmål vil de stille, og hva vil de legge vekt på?',
    },
    {
      id: 'sos-1-4-def-3',
      type: 'definition',
      title: 'Symbolsk interaksjonisme',
      content:
        'Symbolsk interaksjonisme er et sosiologisk perspektiv som fokuserer på mikronivået – hvordan mennesker skaper mening gjennom daglig samhandling. Perspektivet vektlegger symboler, språk og fortolkning som grunnlaget for sosialt liv.',
    },
    {
      id: 'sos-1-4-text-3',
      type: 'text',
      title: 'Symbolsk interaksjonisme: Mening gjennom samhandling',
      content:
        'Mens funksjonalisme og konfliktteori opererer på makronivå – de analyserer store strukturer og systemer – retter symbolsk interaksjonisme blikket mot mikronivået: den daglige samhandlingen mellom mennesker.\n\nDen amerikanske sosialpsykologen George Herbert Mead (1863–1931) la grunnlaget for dette perspektivet. Han mente at selvet – vår opplevelse av hvem vi er – utvikles gjennom samhandling med andre. Vi lærer å se oss selv gjennom andres øyne, noe Mead kalte å ta den andres perspektiv. Barn utvikler selvet gradvis gjennom lek og spill, der de øver seg på ulike roller.\n\nErving Goffman (1922–1982) videreutviklet symbolsk interaksjonisme med sin dramaturgiske tilnærming. Han sammenlignet det sosiale livet med en teaterforestilling: I hverdagen «spiller» vi roller for et «publikum», vi har en «frontstage» (der vi opptrer) og en «backstage» (der vi kan slappe av og droppe masken). Tenk på forskjellen mellom hvordan du oppfører deg i et jobbintervju og hvordan du er med nære venner – Goffman kaller dette inntrykksstyring.\n\nSymbolsk interaksjonisme er blitt kritisert for å overse de større strukturene som former menneskers handlingsrom – klasse, kjønn, økonomi og makt.',
    },
    {
      id: 'sos-1-4-ex-3',
      type: 'example',
      title: 'Goffmans frontstage og backstage',
      content:
        'En servitør på en fin restaurant er et godt eksempel på Goffmans teori. «Frontstage» – ute i restauranten – opptrer servitøren høflig, profesjonelt og imøtekommende. Hun smiler, er oppmerksom og følger restaurantens normer for oppførsel. «Backstage» – inne på kjøkkenet – kan hun klage over krevende gjester, spøke med kollegaer og opptre helt annerledes. Vi gjør alle noe lignende: vi tilpasser oppførselen vår til situasjonen og «publikummet» vi har foran oss.',
    },
    {
      id: 'sos-1-4-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hva mente Goffman med «frontstage» og «backstage»?',
      options: [
        'At samfunnet er delt i en offentlig og en privat sfære',
        'At mennesker spiller ulike roller i ulike sosiale situasjoner, med en «scene» der de opptrer og et «bakrom» der de kan slappe av',
        'At det finnes to typer samfunn: åpne og lukkede',
        'At mennesker har en bevisst og en ubevisst side av personligheten',
      ],
      correctAnswer: 1,
      explanation:
        'Goffman brukte teatermetaforer for å beskrive sosialt liv: «frontstage» er situasjoner der vi opptrer for et publikum og styrer inntrykket vi gir, mens «backstage» er situasjoner der vi kan droppe masken og være mer avslappet.',
    },
    {
      id: 'sos-1-4-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'Gi tre eksempler fra din egen hverdag der du bruker «inntrykksstyring» (impression management) slik Goffman beskriver det. Hvordan tilpasser du oppførselen din til ulike «publikum»?',
    },
    {
      id: 'sos-1-4-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hvilket nivå i samfunnsanalysen fokuserer symbolsk interaksjonisme primært på?',
      options: [
        'Makronivået – store samfunnsstrukturer',
        'Mesonivået – organisasjoner og institusjoner',
        'Mikronivået – daglig samhandling mellom mennesker',
        'Globalt nivå – internasjonale relasjoner',
      ],
      correctAnswer: 2,
      explanation:
        'Symbolsk interaksjonisme fokuserer primært på mikronivået – den daglige samhandlingen mellom mennesker, hvordan mening skapes gjennom symboler og språk, og hvordan vi presenterer oss selv i sosiale situasjoner.',
    },
    {
      id: 'sos-1-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'De tre sosiologiske perspektivene gir ulike innfallsvinkler til forståelse av samfunnet. Funksjonalismen (Durkheim, Parsons) ser samfunnet som et system der delene fyller funksjoner for helheten. Konfliktteorien (Marx, Weber) fokuserer på makt, ulikhet og interessemotsetninger. Symbolsk interaksjonisme (Mead, Goffman) studerer hvordan mening skapes gjennom daglig samhandling. Perspektivene er ikke gjensidig utelukkende – de supplerer hverandre og belyser ulike sider ved det sosiale livet.',
    },
    {
      id: 'sos-1-4-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Velg et fenomen fra det norske samfunnet – for eksempel sosiale medier, idrett eller innvandring. Analyser dette fenomenet fra alle tre perspektivene: funksjonalisme, konfliktteori og symbolsk interaksjonisme. Hva legger hvert perspektiv vekt på, og hvilke innsikter gir de? Hvilket perspektiv synes du gir den mest fruktbare analysen, og hvorfor?',
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Sentrale sosiologiske begreper
// ============================================================================

const CHAPTER_SOSIOLOGI_1_5: TextbookChapter = {
  id: 'sosiologi-1-5',
  courseId: 'sosiologi',
  chapterNumber: '1.5',
  title: 'Sentrale sosiologiske begreper',
  estimatedTime: 20,
  exercises: [],
  content: [
    {
      id: 'sos-1-5-intro',
      type: 'text',
      title: 'Introduksjon',
      content:
        'For å tenke sosiologisk trenger vi et presist begrepsspråk. I dette kapittelet gjennomgår vi noen av de mest sentrale begrepene i sosiologien: samfunn, kultur, normer, verdier, sosiale institusjoner, sosial struktur, rolle, status, aktør og struktur. Disse begrepene danner grunnmuren i den sosiologiske verktøykassen, og du vil møte dem igjen og igjen gjennom hele kurset.',
    },
    {
      id: 'sos-1-5-def-1',
      type: 'definition',
      title: 'Samfunn',
      content:
        'Et samfunn er en større gruppe mennesker som lever innenfor et avgrenset område, deler felles institusjoner og kulturelle mønster, og oppfatter seg selv som en enhet. Begrepet kan brukes om alt fra lokalsamfunn til nasjonalstater og det globale samfunnet.',
    },
    {
      id: 'sos-1-5-def-2',
      type: 'definition',
      title: 'Kultur',
      content:
        'Kultur i sosiologisk forstand omfatter alle de lærte og delte kunnskaper, verdier, normer, symboler, språk, tradisjoner og praksiser som kjennetegner en gruppe eller et samfunn. Kultur er menneskeskapt, overføres mellom generasjoner og endrer seg over tid.',
    },
    {
      id: 'sos-1-5-text-1',
      type: 'text',
      title: 'Samfunn og kultur',
      content:
        'Begrepene samfunn og kultur er nært forbundet, men de betyr ikke det samme. Samfunnet refererer til den organiserte gruppen mennesker og de relasjonene som binder dem sammen. Kulturen refererer til det meningsuniverset de deler – verdiene, normene, symbolene og praksisene som gir livet mening og retning.\n\nI sosiologien brukes kulturbegrepet i en videre forstand enn i dagligtalen, der «kultur» gjerne forbindes med kunst, musikk og litteratur. Sosiologisk sett er kultur alt det som er lært og delt i et samfunn – fra matskikker og klesdrakter til lovverk og religiøse overbevisninger. Kultur er det som skiller menneskelige samfunn fra dyresamfunn: vi handler ikke bare ut fra instinkter, men ut fra lærte meningssystemer.',
    },
    {
      id: 'sos-1-5-exercise-1',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 1',
      content: 'Hva menes med «kultur» i sosiologisk forstand?',
      options: [
        'Kunst, musikk og litteratur',
        'Medfødte biologiske egenskaper hos en befolkning',
        'Alle lærte og delte kunnskaper, verdier, normer og praksiser i en gruppe',
        'Et lands politiske system og lovverk',
      ],
      correctAnswer: 2,
      explanation:
        'I sosiologien brukes kulturbegrepet bredt: det omfatter alle lærte og delte kunnskaper, verdier, normer, symboler, tradisjoner og praksiser som kjennetegner en gruppe eller et samfunn.',
    },
    {
      id: 'sos-1-5-def-3',
      type: 'definition',
      title: 'Normer',
      content:
        'Normer er regler og forventninger til atferd som gjelder innenfor en gruppe eller et samfunn. Formelle normer er nedskrevet i lover og regler. Uformelle normer er uskrevne forventninger som overholdes gjennom sosialt press, for eksempel kø-regler eller bordskikk.',
    },
    {
      id: 'sos-1-5-def-4',
      type: 'definition',
      title: 'Verdier',
      content:
        'Verdier er grunnleggende oppfatninger om hva som er godt, riktig og ønskverdig i et samfunn. Verdier er mer generelle og abstrakte enn normer – de uttrykker idealer som likhet, frihet, rettferdighet, ærlighet eller solidaritet.',
    },
    {
      id: 'sos-1-5-ex-1',
      type: 'example',
      title: 'Normer og verdier i praksis',
      content:
        'Likhet er en sentral verdi i det norske samfunnet. Denne verdien kommer til uttrykk gjennom ulike normer: vi har lover om likestilling (formelle normer), vi forventer at alle behandles med respekt uavhengig av bakgrunn (uformelle normer), og vi reagerer negativt på skryt og selvhevdelse (Janteloven som uformell norm). Hvis noen bryter normene – for eksempel diskriminerer på bakgrunn av etnisitet – møtes de med sanksjoner, enten formelle (straff) eller uformelle (sosial fordømmelse).',
    },
    {
      id: 'sos-1-5-exercise-2',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 2',
      content:
        'Gi tre eksempler på formelle normer og tre eksempler på uformelle normer i det norske samfunnet. Forklar forskjellen mellom normer og verdier med egne ord.',
    },
    {
      id: 'sos-1-5-def-5',
      type: 'definition',
      title: 'Sosiale institusjoner',
      content:
        'Sosiale institusjoner er etablerte og varige mønstre for hvordan samfunnet organiserer viktige oppgaver. De viktigste sosiale institusjonene er familien, utdanningssystemet, det økonomiske systemet, det politiske systemet og religionen.',
    },
    {
      id: 'sos-1-5-def-6',
      type: 'definition',
      title: 'Sosial struktur',
      content:
        'Sosial struktur refererer til de stabile og organiserte mønstrene av sosiale relasjoner i et samfunn. Det inkluderer institusjoner, hierarkier, roller og normsystemer som former menneskers handlinger og muligheter.',
    },
    {
      id: 'sos-1-5-text-2',
      type: 'text',
      title: 'Sosiale institusjoner og sosial struktur',
      content:
        'Sosiale institusjoner er de grunnleggende byggesteinene i ethvert samfunn. Familien sørger for reproduksjon, omsorg og sosialisering av barn. Utdanningssystemet overfører kunnskap og kvalifiserer til arbeidslivet. Det økonomiske systemet organiserer produksjon og fordeling av goder. Det politiske systemet fordeler makt og fatter kollektive beslutninger. Religionen gir mening og moralsk veiledning.\n\nSosial struktur er et bredere begrep som beskriver helheten av disse institusjonene og mønstrene. Den sosiale strukturen er som et skjelett: den gir samfunnet form og stabilitet, men den er ikke statisk – den endrer seg over tid. Når vi sier at noe er «strukturelt», mener vi at det er forankret i varige mønstre, ikke i tilfeldige enkelthendelser.',
    },
    {
      id: 'sos-1-5-exercise-3',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 3',
      content: 'Hvilke av disse er eksempler på sosiale institusjoner?',
      options: [
        'Facebook, TikTok og Instagram',
        'Familien, utdanningssystemet og det politiske systemet',
        'Oslo, Bergen og Trondheim',
        'Den norske kirke, Røde Kors og DNB',
      ],
      correctAnswer: 1,
      explanation:
        'Sosiale institusjoner er etablerte mønstre for organisering av viktige samfunnsoppgaver. Familien, utdanningssystemet og det politiske systemet er grunnleggende sosiale institusjoner som finnes i alle samfunn.',
    },
    {
      id: 'sos-1-5-def-7',
      type: 'definition',
      title: 'Sosial rolle',
      content:
        'En sosial rolle er et sett av forventninger knyttet til en bestemt posisjon i samfunnet. Rollen som «elev» innebærer for eksempel forventninger om å møte til undervisning, gjøre lekser og vise respekt for læreren.',
    },
    {
      id: 'sos-1-5-def-8',
      type: 'definition',
      title: 'Status',
      content:
        'Status er en posisjon i den sosiale strukturen. Vi skiller mellom tilskrevet status (som vi fødes inn i, for eksempel kjønn og etnisitet) og ervervet status (som vi oppnår gjennom egne handlinger, for eksempel yrke og utdanning). Til hver status er det knyttet en rolle.',
    },
    {
      id: 'sos-1-5-text-3',
      type: 'text',
      title: 'Rolle, status og rollekonflikt',
      content:
        'Begrepene rolle og status er nært forbundet. Status er posisjonen du har i den sosiale strukturen, mens rollen er de forventningene som er knyttet til denne posisjonen. Du har mange statuser samtidig: du er elev, sønn eller datter, venn, kanskje deltidsjobber og lagsmedlem. Til hver av disse statusene er det knyttet forventninger – en rolle.\n\nNår forventningene knyttet til ulike roller kommer i konflikt med hverandre, oppstår en rollekonflikt. En rollekonflikt kan for eksempel oppstå når arbeidsgiver forventer at du jobber overtid, mens familien forventer at du er hjemme til middag. Rollepress oppstår når forventningene innenfor én og samme rolle er vanskelige å oppfylle – for eksempel hvis rollen som elev innebærer forventninger om gode karakterer, sosialt engasjement og perfekte leveringer samtidig.',
    },
    {
      id: 'sos-1-5-ex-2',
      type: 'example',
      title: 'Statussett og rollekonflikter',
      content:
        'Tenk på en ung kvinne som er universitetsstudent, deltidsansatt på kafé, fotballspiller og storesøster. Alle disse statusene har tilhørende roller med ulike forventninger. Universitetet forventer at hun prioriterer studiene. Arbeidsgiveren forventer fleksibilitet med vakter. Treneren forventer at hun stiller på trening. Lillesøsteren trenger hjelp med leksene. Når alle disse forventningene kolliderer – for eksempel i eksamensperioden – oppstår rollekonflikt.',
    },
    {
      id: 'sos-1-5-exercise-4',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Oppgave 4',
      content:
        'List opp minst fem ulike statuser du har i hverdagen. Beskriv kort hvilke rolleforventninger som er knyttet til hver status. Opplever du noen gang rollekonflikt? Gi et konkret eksempel.',
    },
    {
      id: 'sos-1-5-text-4',
      type: 'text',
      title: 'Aktør og struktur: Sosiologiens grunnproblem',
      content:
        'Et av de mest grunnleggende spørsmålene i sosiologien er forholdet mellom aktør og struktur. Handler mennesker fritt ut fra egne valg (aktørperspektivet), eller er handlingene våre i stor grad bestemt av samfunnsstrukturer vi ikke har kontroll over (strukturperspektivet)?\n\nAktørperspektivet vektlegger menneskets handlefrihet, kreativitet og evne til å påvirke sin egen situasjon. Strukturperspektivet vektlegger at vi alle er formet av den sosiale konteksten vi lever i – vår klassebakgrunn, kjønn, etnisitet og de institusjonene som omgir oss.\n\nDe fleste sosiologer i dag mener at forholdet mellom aktør og struktur er dialektisk: strukturene former aktørene, men aktørene former også strukturene. Den britiske sosiologen Anthony Giddens har kalt dette «strukturens dualitet» – sosiale strukturer er både et resultat av og en forutsetning for menneskelig handling.',
    },
    {
      id: 'sos-1-5-exercise-5',
      type: 'exercise',
      exerciseType: 'multiple-choice',
      title: 'Oppgave 5',
      content: 'Hva handler aktør-struktur-debatten i sosiologien om?',
      options: [
        'Om mennesker er biologisk determinert eller påvirket av miljø',
        'Om mennesker handler fritt eller er formet av samfunnsstrukturer',
        'Om samfunnet er stabilt eller i konstant endring',
        'Om kultur er medfødt eller tillært',
      ],
      correctAnswer: 1,
      explanation:
        'Aktør-struktur-debatten handler om forholdet mellom individets handlefrihet (aktør) og de samfunnsmessige betingelsene som former og begrenser denne handlefriheten (struktur). De fleste sosiologer ser forholdet som dialektisk.',
    },
    {
      id: 'sos-1-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content:
        'De sentrale sosiologiske begrepene henger nøye sammen. Et samfunn er organisert gjennom sosiale institusjoner som til sammen utgjør en sosial struktur. Denne strukturen opprettholdes gjennom kultur – delte verdier, normer og symboler. Individene innehar ulike statuser med tilhørende roller, og kan oppleve rollekonflikt. Det grunnleggende forholdet mellom aktør og struktur handler om spenningen mellom individuell handlefrihet og samfunnsmessige betingelser – et tema som går som en rød tråd gjennom hele sosiologien.',
    },
    {
      id: 'sos-1-5-exercise-6',
      type: 'exercise',
      exerciseType: 'classic',
      title: 'Samleoppgave',
      content:
        'Bruk begrepene fra dette kapittelet til å analysere din egen skolehverdag. Beskriv skolen som en sosial institusjon med normer, verdier og roller. Hvilke formelle og uformelle normer gjelder? Hvilke roller finnes (elev, lærer, rektor), og hvilke forventninger er knyttet til dem? Diskuter til slutt: I hvilken grad handler du som en fri aktør i skolehverdagen, og i hvilken grad er handlingene dine formet av strukturer?',
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const SOSIOLOGI_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SOSIOLOGI_1_1,
  CHAPTER_SOSIOLOGI_1_2,
  CHAPTER_SOSIOLOGI_1_3,
  CHAPTER_SOSIOLOGI_1_4,
  CHAPTER_SOSIOLOGI_1_5,
];

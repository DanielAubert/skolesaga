/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Språk og maktstrukturer
// ============================================================================

export const CHAPTER_KOMKULT2_7_1: TextbookChapter = {
  id: 'komkult2-7-1',
  courseId: 'komkult-2',
  chapterNumber: '7.1',
  title: 'Språk og maktstrukturer',
  description: 'En innføring i hvordan språk fungerer som et maktmiddel i samfunnet. Du lærer om språklig dominans, hegemoniske diskurser og hvordan språkvalg kan inkludere eller ekskludere grupper.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere hvordan språk kan brukes til å utøve makt og opprettholde maktstrukturer',
    'drøfte sammenhengen mellom språk, makt og sosial ulikhet',
  ],
  keyTerms: [
    'språklig makt',
    'hegemoni',
    'lingvistisk kapital',
    'standardspråk',
    'språklig marginalisering',
  ],
  content: [
    {
      id: 'kk2-7-1-intro',
      type: 'text',
      content: `## Språk som maktmiddel

Språk er ikke bare et nøytralt kommunikasjonsverktøy. Det er også et maktmiddel som kan brukes til å inkludere, ekskludere, overbevise og kontrollere. Den som behersker det dominerende språket i et samfunn, har tilgang til arenaer, ressurser og posisjoner som andre stenges ute fra.

I dette kapittelet skal du lære:
- Hvordan språk fungerer som et redskap for makt
- Hva lingvistisk kapital betyr og hvorfor det er viktig
- Hvordan standardspråk kan virke ekskluderende
- Eksempler på språklig makt i norsk og internasjonal kontekst`,
    },
    {
      id: 'kk2-7-1-def-1',
      type: 'definition',
      title: 'Språklig makt',
      content: `**Språklig makt** refererer til evnen til å bruke språk for å påvirke andres handlinger, tanker og oppfatninger. Språklig makt kan utøves på flere nivåer:

- **Direkte makt:** Ordrer, lover, regelverk og instrukser som krever bestemte handlinger
- **Indirekte makt:** Framing, ordvalg og retoriske grep som påvirker hvordan vi oppfatter virkeligheten
- **Strukturell makt:** Hvilke språk og språkformer som gis status i samfunnsinstitusjoner som skole, rettsvesen og media

Den franske sosiologen **Pierre Bourdieu** (1930–2002) utviklet begrepet **lingvistisk kapital** for å beskrive hvordan beherskelse av det dominerende språket gir sosiale fordeler, omtrent som økonomisk kapital gir materielle fordeler.`,
    },
    {
      id: 'kk2-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Språklig makt i praksis',
      problem: 'Hvordan kan språkvalg i offentlige dokumenter fungere som en form for maktutøvelse?',
      solution: `**Analyse av språklig makt i offentlig forvaltning:**

Offentlige dokumenter i Norge er ofte skrevet i et komplisert fagspråk som kan være vanskelig å forstå for mange innbyggere. Dette er et eksempel på strukturell språklig makt:

- **Juridisk språk:** Lover og forskrifter bruker et språk som krever spesialkompetanse å forstå. De som ikke behersker dette språket, må betale for juridisk bistand.
- **Byråkratisk språk:** Skjemaer, vedtaksbrev og søknadsprosesser forutsetter kjennskap til forvaltningsspråket. Innvandrere, unge og personer med lav utdanning rammes uforholdsmessig.
- **Medisinsk språk:** Diagnoser, behandlingsplaner og pasientinformasjon bruker fagterminologi som kan gjøre pasienter avhengige av helsepersonell for å forstå egen situasjon.

**Konsekvens:** De som behersker fagspråket, kan navigere systemet effektivt. De som ikke gjør det, kan miste rettigheter, gå glipp av muligheter, eller ta dårligere beslutninger fordi de ikke fullt ut forstår informasjonen.`,
    },
    {
      id: 'kk2-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva mener Pierre Bourdieu med begrepet "lingvistisk kapital"?',
        options: [
          { id: 'a', text: 'At språk er en vare som kan kjøpes og selges på et marked', isCorrect: false },
          { id: 'b', text: 'At beherskelse av det dominerende språket gir sosiale fordeler, på samme måte som penger gir materielle fordeler', isCorrect: true },
          { id: 'c', text: 'At alle språk har lik verdi i et demokratisk samfunn', isCorrect: false },
          { id: 'd', text: 'At hovedstaden alltid bestemmer hvilket språk som er korrekt', isCorrect: false },
        ],
        solution: 'Bourdieus begrep lingvistisk kapital beskriver hvordan beherskelse av det dominerende språket og de anerkjente språkformene gir individer sosiale fordeler. De som snakker "riktig" språk, får lettere tilgang til utdanning, jobbmuligheter og maktposisjoner, omtrent som økonomisk kapital gir tilgang til materielle goder.',
      },
    },
    {
      id: 'kk2-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er et eksempel på strukturell språklig makt?',
        options: [
          { id: 'a', text: 'En forelder som ber barnet om å rydde rommet sitt', isCorrect: false },
          { id: 'b', text: 'At det norske rettssystemet hovedsakelig opererer på bokmål og nynorsk, noe som kan ekskludere dem som ikke behersker disse', isCorrect: true },
          { id: 'c', text: 'En venn som overtaler deg til å se en bestemt film', isCorrect: false },
          { id: 'd', text: 'En reklameplakat med store bokstaver', isCorrect: false },
        ],
        solution: 'Strukturell språklig makt handler om hvilke språk og språkformer som gis offisiell status i samfunnsinstitusjoner. At rettssystemet opererer på bestemte språk, er strukturelt fordi det systematisk favoriserer dem som behersker disse språkene, uavhengig av enkeltpersoners intensjoner.',
      },
    },
    {
      id: 'kk2-7-1-def-2',
      type: 'definition',
      title: 'Hegemoni og språk',
      content: `**Hegemoni** er et begrep fra den italienske filosofen **Antonio Gramsci** (1891–1937). Det beskriver hvordan en dominerende gruppe opprettholder makt ikke bare gjennom tvang, men ved at deres verdier, normer og virkelighetsoppfatning aksepteres som "naturlig" og "selvfølgelig" av alle i samfunnet.

**Språklig hegemoni** oppstår når én bestemt språkform oppfattes som den "riktige" eller "nøytrale", mens andre former marginaliseres:

- **Standardspråk** oppfattes som nøytralt, mens dialekter sees som avvik
- **Akademisk språk** oppfattes som presist, mens hverdagsspråk sees som upresist
- **Majoritetsspråk** oppfattes som nasjonens språk, mens minoritetsspråk sees som fremmede

Det hegemoniske ved dette er at de marginaliserte gruppene ofte selv aksepterer at deres språk er "feil" eller "lavere", og tilpasser seg det dominerende språket.`,
    },
    {
      id: 'kk2-7-1-text-1',
      type: 'text',
      content: `### Språklig makt i norsk kontekst

Norge har en unik språkhistorie som illustrerer forholdet mellom språk og makt:

**Bokmål og nynorsk:**
Etter unionsoppløsningen med Danmark i 1814 oppsto en debatt om hva som var "ekte" norsk. Ivar Aasen samlet dialekter for å skape et alternativ til det danskpregede skriftspråket. Forholdet mellom bokmål og nynorsk handler fortsatt om makt: hvem definerer hva som er "normalt" norsk?

**Samisk:**
Samiske språk ble systematisk undertrykt gjennom fornorskningspolitikken fra 1850-tallet til 1960-tallet. Samiske barn ble straffet for å snakke samisk på skolen. Dette er et ekstremt eksempel på hvordan språkpolitikk brukes som maktmiddel for å assimilere minoriteter.

**Norsk tegnspråk:**
Norsk tegnspråk ble først anerkjent som et fullverdig språk i 2009. Før dette ble døve presset til å lære munnavlesning og talespråk, en praksis som illustrerer hvordan makt kan utøves gjennom å nekte anerkjennelse av et språk.

**Innvandring og språk:**
Krav om norskprøve for statsborgerskap og opphold knytter språkbeherskelse direkte til rettigheter. Er dette rimelig integrering, eller en form for språklig maktutøvelse?`,
    },
    {
      id: 'kk2-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Forklar hva Antonio Gramsci mener med hegemoni, og gi et eksempel på hvordan språklig hegemoni fungerer i det norske samfunnet.',
        hints: ['Tenk på hvilke språkformer som oppfattes som "normale" og "riktige" i Norge, og hvilke som marginaliseres'],
        solution: 'Gramsci beskriver hegemoni som en form for makt der den dominerende gruppens verdier og normer aksepteres som naturlige av hele samfunnet, inkludert de som undertrykkes. I norsk kontekst kan vi se dette i hvordan bokmål/østnorsk talespråk ofte fungerer hegemonisk: det oppfattes som "normalt" og "nøytralt" norsk, mens dialekter, nynorsk, samisk og minoritetsspråk behandles som avvik eller tillegg. Mange som snakker minoritetsspråk internaliserer selv at deres språk er mindre verdt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Drøft om kravet om norskprøve for å få norsk statsborgerskap er en form for språklig maktutøvelse, eller en rimelig forventning om integrering. Begrunn svaret ditt med begreper fra kapittelet.',
        hints: ['Bruk begrepene lingvistisk kapital, strukturell makt og hegemoni i drøftingen din'],
        solution: 'Et godt svar presenterer argumenter for begge sider. For: Norskkunnskaper gir lingvistisk kapital som er nødvendig for deltakelse i demokratiet, arbeidslivet og samfunnet. Uten norsk er man ekskludert i praksis. Mot: Kravet knytter rettigheter til språkbeherskelse, noe som rammer ulikt avhengig av utdanningsbakgrunn, alder og læringsevne. Det kan sees som strukturell makt fordi det favoriserer de som har ressurser til å lære raskt. Drøftingen bør nyansere ved å spørre: hva er alternativene, og hvem definerer hva som er "godt nok" norsk?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Språklig makt** utøves direkte, indirekte og strukturelt
- **Lingvistisk kapital** (Bourdieu) beskriver hvordan språkbeherskelse gir sosiale fordeler
- **Hegemoni** (Gramsci) forklarer hvordan dominerende språkformer oppfattes som "naturlige"
- Norsk språkhistorie viser konkrete eksempler på språk og makt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Lingvistisk kapital | Sosiale fordeler ved å beherske det dominerende språket |
| Hegemoni | Makt som opprettholdes ved at den oppfattes som naturlig |
| Standardspråk | Den språkformen som gis offisiell status |
| Språklig marginalisering | At visse språkformer nedvurderes eller ekskluderes |`,
    },
    {
      id: 'kk2-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        task: 'Finn et eksempel på språklig makt fra din egen hverdag (skole, sosiale medier, arbeidsliv). Beskriv situasjonen og analyser den ved hjelp av begrepene fra kapittelet.',
        hints: ['Tenk på situasjoner der noen har fordeler fordi de behersker et bestemt språk eller en bestemt måte å uttrykke seg på'],
        solution: 'Eleven bør identifisere en konkret situasjon der språk gir makt eller ekskluderer noen. Eksempler kan inkludere: fagspråk i undervisningen som noen forstår lettere enn andre, slang på sosiale medier som definerer inn- og utgrupper, jobbintervjuer der språklig fremstillingsevne teller mer enn kompetanse, eller situasjoner der dialektbrukere opplever negative reaksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'Forklar med egne ord hva som menes med at språk ikke er et nøytralt kommunikasjonsverktøy. Bruk minst to eksempler for å underbygge svaret ditt.',
        hints: ['Tenk på hvordan ordvalg, språkform og hvem som får snakke påvirker maktforhold'],
        solution: 'At språk ikke er nøytralt betyr at det alltid bærer med seg verdier, maktforhold og perspektiver. Eksempler: (1) Å kalle en person "innvandrer" versus "norsk statsborger med utenlandsk bakgrunn" gir ulike assosiasjoner og plasserer personen ulikt. (2) At akademisk norsk har høyere status enn dialekt eller slang gjør at folk med akademisk bakgrunn får et maktovertak i formelle sammenhenger. Språk former virkelighetsoppfatningen vår og gir fordeler til dem som behersker de dominerende språkformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Diskurs og ideologi
// ============================================================================

export const CHAPTER_KOMKULT2_7_2: TextbookChapter = {
  id: 'komkult2-7-2',
  courseId: 'komkult-2',
  chapterNumber: '7.2',
  title: 'Diskurs og ideologi',
  description: 'Du lærer om diskursbegrepet hos Foucault, kritisk diskursanalyse hos Fairclough, og hvordan ideologier formidles og opprettholdes gjennom språklige praksiser i media, politikk og hverdagsliv.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere hvordan diskurser konstruerer virkelighetsforståelse og maktforhold',
    'anvende kritisk diskursanalyse på aktuelle medietekster',
  ],
  keyTerms: [
    'diskurs',
    'ideologi',
    'kritisk diskursanalyse',
    'subjektposisjon',
    'naturalisering',
  ],
  content: [
    {
      id: 'kk2-7-2-intro',
      type: 'text',
      content: `## Språk som virkelighetsformer

Språk beskriver ikke bare virkeligheten - det former den. Måten vi snakker om et fenomen på, påvirker hvordan vi forstår det og hvordan vi handler i forhold til det. Diskursbegrepet hjelper oss å forstå denne sammenhengen mellom språk, kunnskap og makt.

I dette kapittelet skal du lære:
- Hva en diskurs er og hvordan den former vår forståelse av verden
- Forskjellen mellom Foucaults og Faircloughs diskursbegrep
- Hvordan ideologier uttrykkes og opprettholdes gjennom språk
- Hvordan du kan gjennomføre en enkel kritisk diskursanalyse`,
    },
    {
      id: 'kk2-7-2-def-1',
      type: 'definition',
      title: 'Diskurs',
      content: `**Diskurs** er et sentralt begrep i moderne kommunikasjons- og kulturforskning. Begrepet kan forstås på flere nivåer:

**Michel Foucault (1926–1984):**
For Foucault er en diskurs et system av utsagn som definerer hva som kan sies, tenkes og gjøres innenfor et bestemt område. Diskurser bestemmer hva som regnes som "sant", "normalt" og "fornuftig" i et samfunn til enhver tid.

- **Eksempel:** Den medisinske diskursen bestemmer hva som er "sykdom" og "helse". Homofili var klassifisert som psykisk sykdom helt til 1973 (USA) og 1977 (Norge). Endringen skyldtes ikke ny medisinsk kunnskap, men en endring i diskursen.

**Norman Fairclough (f. 1941):**
Fairclough utviklet **kritisk diskursanalyse (CDA)**, som ser på konkrete tekster og hvordan de reproduserer eller utfordrer maktforhold. Han analyserer diskurs på tre nivåer:

1. **Tekst:** Ordvalg, grammatikk, metaforer, sammenheng
2. **Diskursiv praksis:** Hvordan teksten produseres, distribueres og konsumeres
3. **Sosial praksis:** Hvilke maktforhold og ideologier teksten inngår i`,
    },
    {
      id: 'kk2-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Diskurser om innvandring',
      problem: 'Hvordan kan ulike diskurser om innvandring forme offentlig debatt og politikk?',
      solution: `**Tre konkurrerende diskurser om innvandring:**

**1. Trusseldiskursen:**
- Ordvalg: "strøm", "bølge", "invasjon", "belastning"
- Metaforer: Naturkatastrofer (flom, tsunami) og militære begreper
- Subjektposisjon: Innvandrere som trussel, nordmenn som ofre
- Konsekvens: Legitimerer streng innvandringspolitikk

**2. Ressursdiskursen:**
- Ordvalg: "berikelse", "mangfold", "kompetanse", "bidrag"
- Metaforer: Innvandring som investering og vindu mot verden
- Subjektposisjon: Innvandrere som aktive bidragsytere
- Konsekvens: Legitimerer en mer åpen innvandringspolitikk

**3. Humanitærdiskursen:**
- Ordvalg: "flyktninger", "beskyttelse", "menneskerettigheter", "forfølgelse"
- Metaforer: Innvandring som moralsk forpliktelse
- Subjektposisjon: Innvandrere som sårbare mennesker med behov for hjelp
- Konsekvens: Legitimerer mottak basert på etiske forpliktelser

Ingen av diskursene er "sanne" i seg selv - de fremhever ulike aspekter av et komplekst fenomen. Kampen mellom disse diskursene er en kamp om politisk makt.`,
    },
    {
      id: 'kk2-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva mener Foucault med begrepet diskurs?',
        options: [
          { id: 'a', text: 'En samtale mellom to eller flere personer', isCorrect: false },
          { id: 'b', text: 'Et system av utsagn som bestemmer hva som kan sies, tenkes og gjøres innenfor et område', isCorrect: true },
          { id: 'c', text: 'En skriftlig tekst som publiseres i et akademisk tidsskrift', isCorrect: false },
          { id: 'd', text: 'En muntlig presentasjon holdt av en politiker', isCorrect: false },
        ],
        solution: 'For Foucault er diskurs langt mer enn bare tekst eller samtale. Det er et system som definerer grensene for hva som kan sies, tenkes og gjøres innenfor et gitt felt. Diskurser bestemmer hva som regnes som sant, normalt og fornuftig i et samfunn.',
      },
    },
    {
      id: 'kk2-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Hvilke tre analysenivåer inngår i Norman Faircloughs kritiske diskursanalyse?',
        options: [
          { id: 'a', text: 'Avsender, budskap og mottaker', isCorrect: false },
          { id: 'b', text: 'Innledning, hoveddel og avslutning', isCorrect: false },
          { id: 'c', text: 'Tekst, diskursiv praksis og sosial praksis', isCorrect: true },
          { id: 'd', text: 'Språk, bilde og lyd', isCorrect: false },
        ],
        solution: 'Faircloughs kritiske diskursanalyse opererer med tre nivåer: tekst (ordvalg, grammatikk, metaforer), diskursiv praksis (hvordan teksten produseres og konsumeres), og sosial praksis (hvilke maktforhold og ideologier teksten inngår i). Alle tre nivåene må analyseres for å forstå tekstens fulle betydning.',
      },
    },
    {
      id: 'kk2-7-2-def-2',
      type: 'definition',
      title: 'Ideologi og naturalisering',
      content: `**Ideologi** er et system av ideer, verdier og forestillinger som tjener bestemte gruppers interesser. I kommunikasjon og kultur er ideologi viktig fordi det påvirker hvordan vi forstår verden, uten at vi nødvendigvis er bevisst på det.

**Naturalisering** er prosessen der ideologiske forestillinger blir så innarbeidet at de oppfattes som selvfølgelige og "naturlige" fremfor konstruerte. Når noe er naturalisert, stiller vi ikke lenger spørsmål ved det.

**Eksempler på naturaliserte forestillinger:**
- At "fri konkurranse" er den beste måten å organisere økonomien på
- At "kjernefamilien" er den naturlige familieformen
- At "objektivitet" i journalistikk er mulig og ønskelig
- At noen yrker naturlig passer bedre for kvinner eller menn

**Subjektposisjon:** Diskurser plasserer oss i bestemte roller og posisjoner. En nyhetsartikkel om velferd kan plassere mennesker som "skattebetalere" (aktive bidragsytere) eller "klienter" (passive mottakere). Disse posisjonene er ikke nøytrale - de bærer med seg verdier og forventninger.`,
    },
    {
      id: 'kk2-7-2-text-1',
      type: 'text',
      content: `### Kritisk diskursanalyse i praksis

For å gjennomføre en enkel kritisk diskursanalyse kan du følge disse stegene:

**Steg 1: Tekstnivået**
- Hvilke ord og uttrykk brukes? Hvilke unngås?
- Hvilke metaforer og sammenligninger brukes?
- Hvem er aktive subjekter, og hvem er passive objekter i setningene?
- Hva er tatt for gitt (presupposisjoner)?

**Steg 2: Diskursiv praksis**
- Hvem har produsert teksten, og for hvem?
- I hvilken sjanger er teksten (nyhet, leder, reklame, tale)?
- Hvilke andre tekster og diskurser trekker teksten på (intertekstualitet)?
- Hvordan distribueres og konsumeres teksten?

**Steg 3: Sosial praksis**
- Hvilke maktforhold gjenspeiles i teksten?
- Hvilke ideologier og verdisystemer ligger til grunn?
- Opprettholder eller utfordrer teksten eksisterende maktforhold?
- Hvem tjener på at denne virkelighetsforståelsen dominerer?

Kritisk diskursanalyse handler ikke om å "avsløre løgner", men om å synliggjøre at alle tekster er produsert fra et bestemt ståsted og tjener bestemte interesser.`,
    },
    {
      id: 'kk2-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Velg en nyhetsartikkel om et aktuelt tema. Gjennomfør en forenklet kritisk diskursanalyse ved å analysere teksten på Faircloughs tre nivåer: tekst, diskursiv praksis og sosial praksis.',
        hints: ['Start med å se på ordvalg og metaforer, deretter hvem som har skrevet teksten og for hvem, og til slutt hvilke maktforhold som gjenspeiles'],
        solution: 'Eleven bør velge en konkret artikkel og analysere den systematisk på tre nivåer. Tekstnivå: identifisere sentrale ordvalg, metaforer, hvem som er aktive/passive. Diskursiv praksis: hvem produserte teksten (avis, journalist), hvem er målgruppen, hvilken sjanger. Sosial praksis: hvilke maktforhold gjenspeiles, hvem tjener på denne fremstillingen. Et godt svar ser sammenhenger mellom de tre nivåene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Forklar begrepet naturalisering med et eget eksempel. Beskriv en forestilling du tidligere tok for gitt, men som du nå ser at er ideologisk konstruert.',
        hints: ['Tenk på noe du tidligere oppfattet som "normalt" eller "selvsagt", men som egentlig er et resultat av bestemte verdier og maktforhold'],
        solution: 'Eleven bør identifisere en konkret forestilling som de har reflektert over. Gode eksempler kan inkludere kjønnsroller (at jenter liker rosa), familieformer (at kjernefamilien er "normal"), arbeidsorganisering (at åtte timers arbeidsdag er naturlig), eller forbruksmønstre (at det er normalt å eie stadig nye ting). Svaret bør forklare hvordan forestillingen er ideologisk konstruert og hvem som tjener på at den oppfattes som naturlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Diskurs** (Foucault) er et system som definerer hva som kan sies, tenkes og gjøres
- **Kritisk diskursanalyse** (Fairclough) analyserer tekster på tre nivåer: tekst, diskursiv praksis og sosial praksis
- **Ideologi** er forestillinger som tjener bestemte gruppers interesser
- **Naturalisering** gjør ideologiske forestillinger til noe vi tar for gitt
- **Subjektposisjoner** plasserer oss i roller som bærer med seg verdier

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Diskurs | System av utsagn som definerer grenser for hva som kan sies og tenkes |
| Kritisk diskursanalyse | Metode for å analysere tekst, diskursiv praksis og sosial praksis |
| Ideologi | System av ideer som tjener bestemte gruppers interesser |
| Naturalisering | Når ideologiske forestillinger oppfattes som selvfølgelige |`,
    },
    {
      id: 'kk2-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'Sammenlign hvordan to ulike medier (for eksempel VG og Klassekampen, eller NRK og Document.no) dekker den samme nyhetssaken. Bruk diskursanalytiske begreper for å forklare forskjellene.',
        hints: ['Se etter forskjeller i ordvalg, vinkling, hvem som siteres, og hva som utelates'],
        solution: 'Eleven bør finne to faktiske mediedekkinger av samme sak og analysere forskjellene med diskursanalytiske begreper. Gode observasjoner inkluderer: ulike ordvalg og metaforer (tekstnivå), ulik sjangertilpasning og kildebruk (diskursiv praksis), og ulike ideologiske posisjoner (sosial praksis). Svaret bør vise at "objektiv" journalistikk alltid innebærer valg som gjenspeiler verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-2-ex-6',
        number: '7.2.6',
        type: 'classic',
        task: 'Hva er forskjellen mellom Foucaults og Faircloughs bruk av diskursbegrepet? Forklar med eksempler.',
        hints: ['Foucault ser diskurs som overordnede systemer, Fairclough fokuserer mer på konkrete tekster og analysen av dem'],
        solution: 'Foucault bruker diskurs som et overordnet begrep for systemer av kunnskap og makt som definerer hva som kan sies og tenkes innenfor et felt (f.eks. den medisinske diskursen som bestemmer hva sykdom er). Fairclough er mer konkret og tekstorientert: han analyserer faktiske tekster og ser på hvordan ordvalg, sjanger og kontekst gjenspeiler og reproduserer maktforhold. Fairclough gir oss analytiske verktøy, mens Foucault gir oss et overordnet teoretisk rammeverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Identitetskonstruksjon gjennom språk
// ============================================================================

export const CHAPTER_KOMKULT2_7_3: TextbookChapter = {
  id: 'komkult2-7-3',
  courseId: 'komkult-2',
  chapterNumber: '7.3',
  title: 'Identitetskonstruksjon gjennom språk',
  description: 'Hvordan språk former identitet og tilhørighet. Du lærer om språk og sosial identitet, kodeskifte, flerspråklighet og hvordan vi bruker språk for å posisjonere oss i ulike sosiale sammenhenger.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere sammenhengen mellom språkbruk og identitetskonstruksjon',
    'reflektere over hvordan flerspråklighet og kodeskifte former identitet i et mangfoldig samfunn',
  ],
  keyTerms: [
    'identitet',
    'kodeskifte',
    'sosiolekt',
    'flerspråklighet',
    'språklig repertoar',
  ],
  content: [
    {
      id: 'kk2-7-3-intro',
      type: 'text',
      content: `## Du er hva du snakker

Hver gang du åpner munnen eller skriver en melding, sender du signaler om hvem du er - eller hvem du ønsker å fremstå som. Språkvalg er identitetsarbeid. Vi tilpasser språket vårt ubevisst avhengig av hvem vi snakker med, hva situasjonen krever, og hvilken versjon av oss selv vi vil vise frem.

I dette kapittelet skal du lære:
- Hvordan språk bidrar til å konstruere identitet
- Hva kodeskifte og stilskifte innebærer
- Sammenhengen mellom sosiolekter og sosial tilhørighet
- Flerspråklighet som ressurs og identitetsmarkør
- Språklig repertoar og posisjonering`,
    },
    {
      id: 'kk2-7-3-def-1',
      type: 'definition',
      title: 'Språk og identitet',
      content: `**Språklig identitet** handler om hvordan vi bruker språk for å skape, uttrykke og forhandle om hvem vi er. Identitet er ikke noe fast vi har, men noe vi gjør - noe vi stadig konstruerer gjennom sosial samhandling.

**Sentrale begreper:**

- **Sosiolekt:** En språkvarietet knyttet til sosial gruppe, klasse eller miljø. Ungdomsspråk, akademisk språk og arbeidsspråk er eksempler på sosiolekter.
- **Kodeskifte:** Å veksle mellom to eller flere språk eller språkvarieteter i samme samtale eller situasjon.
- **Språklig repertoar:** Det samlede settet av språklige ressurser en person har til rådighet - alle språk, dialekter, sjargonger og stiler vedkommende behersker.
- **Posisjonering:** Hvordan vi bruker språk for å plassere oss selv og andre i bestemte roller og relasjoner.

Sosiolingvisten **Penelope Eckert** har vist at ungdommer bruker språk aktivt for å markere tilhørighet til bestemte sosiale grupper. Ordvalg, uttale og stil er ikke bare kommunikasjon - det er identitetsarbeid.`,
    },
    {
      id: 'kk2-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Kodeskifte i hverdagen',
      problem: 'Hvordan kan en person bruke kodeskifte som identitetsarbeid i løpet av en vanlig dag?',
      solution: `**En dag i Fatimas liv - kodeskifte som identitetsarbeid:**

**Morgen hjemme:**
Fatima snakker arabisk med foreldrene og veksler mellom arabisk og norsk med søsknene. Hjemme er arabisk en markør for familietilhørighet og kulturell identitet.

**På skolen:**
Hun snakker bokmål med lærerne og bruker akademisk språk i undervisningen. I friminuttet veksler hun til ungdomsslang med venner, krydret med engelske uttrykk og enkelte arabiske ord som vennegjengen har adoptert.

**På trening:**
I håndballlaget bruker hun dialektpreget norsk som hun har plukket opp fra medspillere, pluss idrettsspesifikke uttrykk.

**På sosiale medier:**
På TikTok bruker hun norsk med engelske innslag. I meldinger til besteforeldre i Libanon skriver hun arabisk. I gruppesamtalen med klassen bruker hun emojier, forkortelser og memes.

**Analyse:** Fatima har et rikt språklig repertoar og skifter fleksibelt mellom ulike koder avhengig av situasjon, samtalepartner og hvilken del av identiteten hun vil fremheve. Hun er ikke "uekte" fordi hun snakker forskjellig - hun navigerer komplekse sosiale landskap.`,
    },
    {
      id: 'kk2-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva menes med kodeskifte?',
        options: [
          { id: 'a', text: 'Å lære seg et nytt språk fra bunnen av', isCorrect: false },
          { id: 'b', text: 'Å veksle mellom to eller flere språk eller språkvarieteter i samme samtale eller situasjon', isCorrect: true },
          { id: 'c', text: 'Å oversette en tekst fra ett språk til et annet', isCorrect: false },
          { id: 'd', text: 'Å snakke på en kodifisert måte som bare innvidde forstår', isCorrect: false },
        ],
        solution: 'Kodeskifte innebærer å veksle mellom to eller flere språk, dialekter eller språkvarieteter, ofte innenfor samme samtale. Det er et naturlig fenomen hos flerspråklige personer og brukes bevisst eller ubevisst for å markere identitet, tilhørighet eller tilpasning til situasjonen.',
      },
    },
    {
      id: 'kk2-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hva er en sosiolekt?',
        options: [
          { id: 'a', text: 'En språkvarietet knyttet til et bestemt geografisk område', isCorrect: false },
          { id: 'b', text: 'Et språk som bare snakkes av eldre mennesker', isCorrect: false },
          { id: 'c', text: 'En språkvarietet knyttet til en sosial gruppe, klasse eller miljø', isCorrect: true },
          { id: 'd', text: 'Et offisielt godkjent skriftspråk', isCorrect: false },
        ],
        solution: 'En sosiolekt er en språkvarietet som kjennetegner en bestemt sosial gruppe. Det kan handle om klasse (overklassespråk vs. arbeiderklassespråk), alder (ungdomsspråk), yrke (fagspråk) eller subkultur (gamerslang). Sosiolekter skiller seg fra dialekter, som er knyttet til geografi.',
      },
    },
    {
      id: 'kk2-7-3-def-2',
      type: 'definition',
      title: 'Flerspråklighet og identitet',
      content: `**Flerspråklighet** betyr å beherske og bruke to eller flere språk i hverdagen. I Norge er flerspråklighet utbredt: samer bruker samisk og norsk, innvandrere kombinerer morsmål med norsk, og de fleste nordmenn bruker norsk og engelsk daglig.

**Flerspråklighet og identitet henger tett sammen:**

- **Tilleggsperspektiv:** Hvert språk gir tilgang til ulike kulturelle perspektiver, erfaringer og fellesskap. En flerspråklig person har tilgang til flere "verdener".
- **Hybrididentitet:** Mange flerspråklige opplever at identiteten deres ikke passer inn i enkle nasjonale kategorier. De er "bindestrek-identiteter" (norsk-somalisk, samisk-norsk) som kombinerer elementer fra flere kulturer.
- **Translingval praksis:** Nyere forskning ser ikke på flerspråklige som folk som "har" to separate språk, men som folk med et integrert språklig repertoar der alle ressurser brukes fleksibelt.

**Utfordringer:**
- Press om å velge "ett" språk eller "én" identitet
- Fordommer mot aksentpreget norsk
- Tap av morsmål når majoritetsspråket dominerer (språkskifte)
- Manglende anerkjennelse av flerspråklighet som kompetanse`,
    },
    {
      id: 'kk2-7-3-text-1',
      type: 'text',
      content: `### Språk og tilhørighet blant unge i Norge

**Kebabnorsk, multietnolett og "ny" norsk:**
I flerkulturelle bydeler i norske byer har det vokst frem nye språklige praksiser som ofte kalles multietnolett. Det er ikke et eget språk, men en måte å snakke norsk på som inkorporerer elementer fra arabisk, tyrkisk, urdu og andre språk.

**Kjennetegn:**
- Innlån av ord fra andre språk ("wallah", "habibi", "yani")
- Forenklet grammatikk på norsk
- Egen intonasjon og rytme
- Brukes som identitetsmarkør blant unge i urbane strøk

**Kontrovers:**
Noen ser dette som språklig forfall og manglende norskkunnskaper. Andre ser det som kreativ språkutvikling og et legitimt uttrykk for en ny, mangfoldig norsk identitet. Denne debatten handler i bunn og grunn om makt: hvem har rett til å definere hva "ordentlig" norsk er?

**Digitalt identitetsarbeid:**
På sosiale medier bruker unge språk svært bevisst for å skape identitet:
- Valg av språk (norsk, engelsk, morsmål)
- Emojier og memes som kulturelle markører
- Tone og stil som markerer tilhørighet til bestemte grupper
- Hashtags og referanser som signaliserer interesser og verdier`,
    },
    {
      id: 'kk2-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Kartlegg ditt eget språklige repertoar. Hvilke språk, dialekter, sosiolekter og stiler behersker du? I hvilke situasjoner bruker du de ulike delene av repertoaret ditt?',
        hints: ['Tenk på alle sammenhenger du kommuniserer i: hjemme, på skolen, med venner, på sosiale medier, i fritidsaktiviteter'],
        solution: 'Eleven bør identifisere ulike språklige ressurser de bruker i ulike kontekster. Eksempler: bokmål på skolen, dialekt hjemme, engelsk i gaming, ungdomsslang med venner, et annet morsmål med besteforeldre, formelt språk i jobbsøknader. Svaret bør reflektere over at dette er identitetsarbeid - de ulike kodene markerer ulike sider av identiteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Drøft om utviklingen av multietnolett (kebabnorsk) er et tegn på språklig forfall eller kreativ språkutvikling. Bruk begreper fra kapittelet i argumentasjonen.',
        hints: ['Tenk på hvem som har makt til å definere hva "korrekt" norsk er, og hva det betyr for identitet og tilhørighet'],
        solution: 'Et godt svar presenterer begge perspektiver med begreper fra kapittelet. For "forfall": avvik fra standardspråket kan gi manglende lingvistisk kapital og begrense muligheter. For "kreativ utvikling": alle språk har utviklet seg gjennom kontakt med andre språk, multietnolett er en naturlig del av dette. Svaret bør drøfte maktdimensjonen: hvem definerer "korrekt" norsk, og debatten gjenspeiler hegemoniske forestillinger om hva norsk identitet er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Språk og identitet** henger uløselig sammen - vi konstruerer identitet gjennom språklige valg
- **Kodeskifte** er en naturlig og kompetent strategi for å navigere ulike sosiale sammenhenger
- **Sosiolekter** markerer tilhørighet til sosiale grupper
- **Flerspråklighet** gir tilgang til flere kulturelle perspektiver og identiteter
- Debatten om "riktig" norsk handler dypest sett om makt og tilhørighet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kodeskifte | Å veksle mellom språk eller språkvarieteter |
| Sosiolekt | Språkvarietet knyttet til sosial gruppe |
| Språklig repertoar | Alle språklige ressurser en person har |
| Posisjonering | Å bruke språk for å plassere seg i sosiale roller |`,
    },
    {
      id: 'kk2-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        task: 'Analyser hvordan du selv driver identitetsarbeid gjennom språk på sosiale medier. Sammenlign med hvordan du kommuniserer i en annen kontekst (for eksempel på skolen eller hjemme).',
        hints: ['Se på konkrete eksempler: meldinger, poster, kommentarer - hvilken stil og tone bruker du, og hvorfor?'],
        solution: 'Eleven bør gi konkrete eksempler på språkbruk i to ulike kontekster og analysere forskjellene som identitetsarbeid. På sosiale medier bruker mange emojier, engelske ord, forkortelser og referanser til populærkultur for å signalisere tilhørighet til bestemte grupper. På skolen eller hjemme er språket gjerne annerledes. Svaret bør reflektere over at begge versjonene er "ekte" - de representerer ulike sider av identiteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Forklar hva som menes med "hybrididentitet" i forbindelse med flerspråklighet. Hvorfor kan det være problematisk å forvente at folk skal identifisere seg med kun én kultur eller ett språk?',
        hints: ['Tenk på hva det betyr å vokse opp med flere språk og kulturer, og hva som skjer når samfunnet krever at du "velger"'],
        solution: 'Hybrididentitet beskriver en identitet som kombinerer elementer fra flere kulturer og språk, uten å tilhøre fullt ut i noen av dem. Det er problematisk å kreve at folk velger fordi: identitet er sammensatt og kontekstuell, flerspråklighet er en ressurs som bør verdsettes, tvang til å velge kan føre til tap av kulturarv og morsmål, og det setter unødvendig press på individer som opplever tilhørighet til flere fellesskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Organisasjonskommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT2_7_4: TextbookChapter = {
  id: 'komkult2-7-4',
  courseId: 'komkult-2',
  chapterNumber: '7.4',
  title: 'Organisasjonskommunikasjon',
  description: 'En innføring i hvordan organisasjoner kommuniserer internt og eksternt. Du lærer om organisasjonskultur, strategisk kommunikasjon, intern kommunikasjon og omdømmebygging.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analysere hvordan organisasjoner bruker kommunikasjon strategisk for å oppnå sine mål',
    'drøfte sammenhengen mellom organisasjonskultur og kommunikasjon',
  ],
  keyTerms: [
    'organisasjonskommunikasjon',
    'organisasjonskultur',
    'strategisk kommunikasjon',
    'omdømme',
    'intern kommunikasjon',
  ],
  content: [
    {
      id: 'kk2-7-4-intro',
      type: 'text',
      content: `## Kommunikasjon i organisasjoner

Alle organisasjoner kommuniserer - med ansatte, kunder, samarbeidspartnere og samfunnet. Hvordan de gjør det, påvirker alt fra arbeidsmiljø og produktivitet til omdømme og kundelojalitet. Organisasjonskommunikasjon handler om å forstå og styre disse prosessene.

I dette kapittelet skal du lære:
- Hva organisasjonskommunikasjon innebærer
- Forskjellen mellom intern og ekstern kommunikasjon
- Hvordan organisasjonskultur påvirker kommunikasjon
- Strategisk kommunikasjon og omdømmebygging
- Utfordringer i digital organisasjonskommunikasjon`,
    },
    {
      id: 'kk2-7-4-def-1',
      type: 'definition',
      title: 'Organisasjonskommunikasjon',
      content: `**Organisasjonskommunikasjon** er all kommunikasjon som foregår innenfor og på vegne av en organisasjon. Det omfatter både planlagte og uplanlagte budskap, fra strategiske kampanjer til uformelle samtaler ved kaffemaskinen.

**To hovedkategorier:**

**Intern kommunikasjon:**
Kommunikasjon mellom medlemmer av organisasjonen. Inkluderer:
- Nedoverrettet: Fra ledelse til ansatte (strategier, beslutninger, informasjon)
- Oppoverrettet: Fra ansatte til ledelse (tilbakemeldinger, forslag, bekymringer)
- Horisontal: Mellom kolleger på samme nivå (samarbeid, koordinering)

**Ekstern kommunikasjon:**
Kommunikasjon mellom organisasjonen og omverdenen. Inkluderer:
- Markedskommunikasjon (reklame, markedsføring)
- PR og mediearbeid
- Samfunnskommunikasjon (årsrapporter, bærekraftsrapporter)
- Kundekommunikasjon (kundeservice, sosiale medier)

Grensen mellom intern og ekstern kommunikasjon er i dag mer utydelig enn noen gang: ansattes innlegg på sosiale medier, lekkasjer og whistleblowing gjør intern informasjon ekstern på sekunder.`,
    },
    {
      id: 'kk2-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Organisasjonskultur og kommunikasjon',
      problem: 'Hvordan kan organisasjonskulturen i et norsk selskap påvirke kommunikasjonen?',
      solution: `**Case: Flatstruktur vs. hierarki i to bedrifter:**

**Selskap A - Teknologibedrift med flat struktur:**
- Alle bruker fornavn, inkludert til daglig leder
- Åpne kontorlandskap med felles kantinelunsj
- Slack-kanaler der alle kan stille spørsmål og komme med innspill
- Ukentlige "fredagspitcher" der ansatte presenterer ideer for hele firmaet
- Kommunikasjon: uformell, direkte, lav terskel for å ta kontakt oppover
- Utfordring: kan bli rotete, uklart hvem som bestemmer

**Selskap B - Advokatfirma med hierarkisk struktur:**
- Partnere tiltales med tittel og etternavn
- Kommunikasjon følger formelle kanaler: assistent → senior → partner
- Skriftlige rapporter og formelle møter med protokoll
- Dresscode og oppførselskodeks
- Kommunikasjon: formell, strukturert, tydelige kommandolinjer
- Utfordring: lang vei fra bunn til topp, viktig informasjon kan stoppe underveis

**Analyse:** Organisasjonskulturen former kommunikasjonskanalene, tonen og flyten. Ingen modell er objektivt bedre - det avhenger av bransje, oppgaver og verdier.`,
    },
    {
      id: 'kk2-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom nedoverrettet og oppoverrettet intern kommunikasjon?',
        options: [
          { id: 'a', text: 'Nedoverrettet går fra avdeling til avdeling, oppoverrettet går fra organisasjonen til kundene', isCorrect: false },
          { id: 'b', text: 'Nedoverrettet går fra ledelse til ansatte, oppoverrettet går fra ansatte til ledelse', isCorrect: true },
          { id: 'c', text: 'Nedoverrettet er skriftlig, oppoverrettet er muntlig', isCorrect: false },
          { id: 'd', text: 'Nedoverrettet er formell, oppoverrettet er uformell', isCorrect: false },
        ],
        solution: 'Nedoverrettet kommunikasjon går fra ledelsen ned til de ansatte og inkluderer strategier, beslutninger og informasjon. Oppoverrettet kommunikasjon går fra ansatte opp til ledelsen og inkluderer tilbakemeldinger, forslag og bekymringer. Begge retningene kan være både formelle og uformelle, skriftlige og muntlige.',
      },
    },
    {
      id: 'kk2-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Hva menes med strategisk kommunikasjon?',
        options: [
          { id: 'a', text: 'All kommunikasjon som foregår i et styre eller en ledelse', isCorrect: false },
          { id: 'b', text: 'Kommunikasjon der det å lyve er en bevisst strategi', isCorrect: false },
          { id: 'c', text: 'Planlagt kommunikasjon som er rettet mot bestemte mål og målgrupper', isCorrect: true },
          { id: 'd', text: 'Kommunikasjon som bruker militær terminologi', isCorrect: false },
        ],
        solution: 'Strategisk kommunikasjon er planlagt og målrettet kommunikasjon som er utformet for å nå bestemte mål overfor bestemte målgrupper. Det handler ikke om manipulasjon, men om bevisste valg av budskap, kanaler og tidspunkt for å kommunisere mest mulig effektivt.',
      },
    },
    {
      id: 'kk2-7-4-def-2',
      type: 'definition',
      title: 'Omdømme og omdømmebygging',
      content: `**Omdømme** er summen av oppfatninger som ulike grupper har av en organisasjon. Det er ikke hva organisasjonen sier om seg selv, men hva andre sier og tenker om den. Omdømme bygges over tid, men kan ødelegges på minutter.

**Omdømmebygging** er en strategisk prosess som innebærer:

- **Identitet:** Hvem er vi? Organisasjonens kjerneverdier, formål og kultur
- **Profil:** Hvem ønsker vi å fremstå som? Det strategiske bildet organisasjonen prøver å skape
- **Image:** Hvordan oppfatter andre oss? Det faktiske inntrykket ulike grupper har
- **Omdømme:** Det samlede, varige inntrykket basert på erfaringer over tid

**Omdømmedrivere (ifølge RepTrak-modellen):**
1. Produkter og tjenester (kvalitet, innovasjon)
2. Ledelse og styring (åpenhet, etikk)
3. Arbeidsforhold (trivsel, mangfold)
4. Samfunnsansvar (miljø, bidrag til lokalsamfunnet)
5. Økonomi (lønnsomhet, vekst)

I en digital tidsalder kan et omdømme bli bygget opp av en viral kampanje eller revet ned av en mislykket krisehåndtering på få timer.`,
    },
    {
      id: 'kk2-7-4-text-1',
      type: 'text',
      content: `### Digital organisasjonskommunikasjon

Digitaliseringen har forandret organisasjonskommunikasjon på flere grunnleggende måter:

**Sosiale medier som kommunikasjonskanal:**
- Organisasjoner kommuniserer direkte med målgrupper uten å gå gjennom mediene
- Toveis-kommunikasjon: kunder kan svare, klage og rose offentlig
- Ansatte fungerer som "ambassadører" gjennom sine personlige kontoer
- Kriser sprer seg raskere og krever umiddelbar respons

**Interne digitale verktøy:**
- Teams, Slack og andre samarbeidsplattformer endrer kommunikasjonsmønstre
- Fjernstyring og hybridarbeid stiller nye krav til intern kommunikasjon
- Digital overbelastning: for mange kanaler og meldinger kan redusere produktivitet

**Transparens og tillit:**
- Organisasjoner forventes å være mer åpne enn tidligere
- Bærekraftsrapporter, lønnsstatistikker og etiske retningslinjer publiseres offentlig
- "Greenwashing" (å fremstille seg som mer miljøvennlig enn man er) avsløres raskt
- Ansatte og kunder krever autentisitet, ikke bare profesjonell kommunikasjon

**Nye utfordringer:**
- Kontroll over eget narrativ er vanskelig i en digital verden
- Ansattes ytringsfrihet kontra organisasjonens behov for kontroll
- Algoritmisk synlighet påvirker hvilke organisasjoner som når frem`,
    },
    {
      id: 'kk2-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Velg en organisasjon du kjenner (en bedrift, skole, idrettsklubb eller frivillig organisasjon). Beskriv og analyser den interne kommunikasjonen: hvilke kanaler brukes, i hvilken retning flyter informasjonen, og hva fungerer godt og dårlig?',
        hints: ['Tenk på møter, e-post, meldingsapper, sosiale medier, oppslagstavler og uformelle samtaler'],
        solution: 'Eleven bør velge en konkret organisasjon og beskrive den interne kommunikasjonen systematisk. Gode svar identifiserer både formelle kanaler (møter, e-post, intranett) og uformelle kanaler (lunsjsamtaler, meldingsgrupper), analyserer om kommunikasjonen hovedsakelig er nedover, oppover eller horisontal, og reflekterer over styrker og svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom identitet, profil, image og omdømme. Gi et eksempel på en organisasjon der det er et gap mellom profil (hvem de ønsker å fremstå som) og image (hvordan andre oppfatter dem).',
        hints: ['Tenk på organisasjoner som har fått kritikk for å ikke leve opp til sine egne verdier'],
        solution: 'Identitet er hvem organisasjonen faktisk er (verdier, kultur). Profil er hvem den ønsker å fremstå som (strategisk kommunikasjon). Image er hvordan andre oppfatter den. Omdømme er det varige, samlede inntrykket. Eksempler på gap: en bedrift som profilerer seg på bærekraft men avsløres for miljøskadelig praksis (greenwashing), eller en organisasjon som profilerer seg på mangfold men har en ensartet ledelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Organisasjonskommunikasjon** omfatter all kommunikasjon innenfor og på vegne av en organisasjon
- **Intern kommunikasjon** flyter nedover, oppover og horisontalt
- **Organisasjonskultur** former kommunikasjonens tone, kanaler og struktur
- **Omdømme** er summen av andres oppfatninger, bygget over tid
- Digitalisering skaper nye muligheter og utfordringer for organisasjoner

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Intern kommunikasjon | Kommunikasjon mellom medlemmer av organisasjonen |
| Strategisk kommunikasjon | Planlagt, målrettet kommunikasjon |
| Omdømme | Summen av oppfatninger ulike grupper har av organisasjonen |
| Organisasjonskultur | Verdier, normer og praksiser som preger en organisasjon |`,
    },
    {
      id: 'kk2-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        task: 'Analyser en organisasjons sosiale medier-tilstedeværelse (velg en bedrift, en offentlig etat eller en frivillig organisasjon). Hva slags innhold deler de? Hvem er målgruppen? Er kommunikasjonen strategisk? Begrunn svaret.',
        hints: ['Se på innholdstyper, tone, visuell profil, hyppighet og interaksjon med følgere'],
        solution: 'Eleven bør velge en konkret organisasjon og analysere innholdet på én eller flere plattformer. Gode svar identifiserer målgruppe, tone, innholdstyper (informasjon, kampanjer, personlig innhold, brukergenerert innhold), og vurderer om kommunikasjonen virker planlagt og strategisk eller tilfeldig. Analysen bør knyttes til begreper som strategisk kommunikasjon og omdømmebygging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        task: 'Drøft utfordringene ved ansattes ytringsfrihet i sosiale medier versus organisasjonens behov for kontroll over sitt omdømme. Hvor bør grensen gå?',
        hints: ['Tenk på eksempler der ansattes uttalelser har skapt problemer for arbeidsgiveren, og på ytringsfrihetens betydning'],
        solution: 'Et godt svar balanserer to hensyn: ansattes ytringsfrihet (et grunnleggende demokratisk prinsipp) og organisasjonens behov for å beskytte omdømmet. Argumenter for ytringsfrihet: demokratisk verdi, varslingskultur, autentisitet. Argumenter for begrensning: lojalitetsplikt, taushetsplikt, skade på kolleger og kunder. Svaret bør nyansere ved å skille mellom ulike typer ytringer (politiske meninger, kritikk av arbeidsgiver, deling av konfidensiell informasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Krisekommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT2_7_5: TextbookChapter = {
  id: 'komkult2-7-5',
  courseId: 'komkult-2',
  chapterNumber: '7.5',
  title: 'Krisekommunikasjon',
  description: 'Du lærer om krisekommunikasjon som fagfelt: hva som kjennetegner en krise, hvordan organisasjoner bør kommunisere under kriser, og hva som skiller god fra dårlig krisehåndtering.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere krisekommunikasjon med relevante teorier og begreper',
    'vurdere hvordan organisasjoner håndterer kommunikasjonsutfordringer i krisesituasjoner',
  ],
  keyTerms: [
    'krisekommunikasjon',
    'situational crisis communication theory',
    'åpenhetsstrategi',
    'interessenter',
    'beredskapskommunikasjon',
  ],
  content: [
    {
      id: 'kk2-7-5-intro',
      type: 'text',
      content: `## Når krisen rammer

Enhver organisasjon vil før eller senere oppleve en krise - en uventet hendelse som truer organisasjonens omdømme, drift eller eksistens. Det kan være et dataangrep, en produktfeil, en skandale, en ulykke eller en pandemi. Hvordan organisasjonen kommuniserer i krisen, kan avgjøre om den overlever eller går under.

I dette kapittelet skal du lære:
- Hva som kjennetegner en krise og krisekommunikasjon
- Sentrale teorier om krisekommunikasjon
- Prinsipper for god krisekommunikasjon
- Eksempler på vellykket og mislykket krisehåndtering
- Krisekommunikasjon i en digital tidsalder`,
    },
    {
      id: 'kk2-7-5-def-1',
      type: 'definition',
      title: 'Krise og krisekommunikasjon',
      content: `**Krise** er en uventet og truende hendelse som krever umiddelbar handling, og som har potensial til å skade organisasjonens omdømme, drift, økonomi eller interessenter.

**Kjennetegn på en krise:**
- **Uventet:** Krisen kommer overraskende, selv om den kan ha vært forutsigbar
- **Truende:** Den utgjør en reell fare for organisasjonen eller dens interessenter
- **Tidspress:** Beslutninger må tas raskt, ofte med ufullstendig informasjon
- **Usikkerhet:** Det er uklart hva som har skjedd, hva konsekvensene er, og hva som bør gjøres

**Krisekommunikasjon** er all kommunikasjon som skjer før, under og etter en krise:
- **Før (beredskap):** Risikoanalyse, kriseplaner, medietrening, øvelser
- **Under (respons):** Informasjon til berørte, medier, ansatte og samfunnet
- **Etter (gjenoppbygging):** Evaluering, læring, omdømmereparasjon

**Interessenter** er alle som berøres av krisen: ansatte, kunder, eiere, myndigheter, medier, lokalsamfunnet og samfunnet for øvrig. God krisekommunikasjon tar hensyn til alle interessentgrupper.`,
    },
    {
      id: 'kk2-7-5-example-1',
      type: 'example',
      title: 'Eksempel: God versus dårlig krisekommunikasjon',
      problem: 'Hva skiller vellykket krisekommunikasjon fra mislykket? Sammenlign to kjente krisesituasjoner.',
      solution: `**Case 1: Vellykket - Tylenol-krisen (Johnson & Johnson, 1982)**
Syv mennesker døde etter å ha inntatt Tylenol-kapsler forgiftet med cyanid. Johnson & Johnson responderte med:
- **Umiddelbar handling:** Trakk tilbake 31 millioner pakker fra hele USA
- **Åpenhet:** Samarbeidet fullt ut med media og myndigheter
- **Ansvar:** Prioriterte kundesikkerhet over kortsiktig profitt
- **Innovasjon:** Utviklet forseglingsmekanismer som ble bransjestandard
- **Resultat:** Gjenoppbygde tillit og markedsandel innen et år

**Case 2: Mislykket - BP og Deepwater Horizon (2010)**
En oljebrønn i Mexicogulfen eksploderte, 11 arbeidere døde, og millioner av fat olje lekket ut:
- **Bagatellisering:** BPs toppsjef sa "I want my life back" mens lokalsamfunn var ødelagt
- **Ansvarsfraskrivelse:** Skyldte på underleverandører
- **Mangel på empati:** Fokuserte på egne kostnader fremfor miljøskader og menneskelig lidelse
- **Forsinkelse:** Brukte uker på å erkjenne omfanget av utslippet
- **Resultat:** Massivt omdømmetap, milliardbøter, og varig skade på merkevaren`,
    },
    {
      id: 'kk2-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hvilke av følgende er kjennetegn på en krise?',
        options: [
          { id: 'a', text: 'Den er planlagt, kontrollert og forutsigbar', isCorrect: false },
          { id: 'b', text: 'Den er uventet, truende og krever umiddelbar handling', isCorrect: true },
          { id: 'c', text: 'Den rammer bare organisasjonens ledelse', isCorrect: false },
          { id: 'd', text: 'Den løser seg alltid av seg selv uten kommunikasjon', isCorrect: false },
        ],
        solution: 'En krise kjennetegnes av at den er uventet, truende for organisasjonen og dens interessenter, og at den krever umiddelbar handling under tidspress og usikkerhet. Kriser kan ramme hele organisasjonen og dens omgivelser, og kommunikasjon er avgjørende for utfallet.',
      },
    },
    {
      id: 'kk2-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste prinsippet for god krisekommunikasjon ifølge moderne krisekommunikasjonsteori?',
        options: [
          { id: 'a', text: 'Å minimere informasjon til offentligheten for å unngå panikk', isCorrect: false },
          { id: 'b', text: 'Å skylde på andre for å beskytte organisasjonens omdømme', isCorrect: false },
          { id: 'c', text: 'Å kommunisere raskt, åpent og med empati for de berørte', isCorrect: true },
          { id: 'd', text: 'Å vente til all informasjon er bekreftet før man uttaler seg', isCorrect: false },
        ],
        solution: 'Moderne krisekommunikasjonsteori vektlegger åpenhet, hurtighet og empati. Organisasjonen bør kommunisere raskt (selv om informasjonen er ufullstendig), være åpen om hva man vet og ikke vet, og vise empati for de som er berørt. Å vente for lenge eller holde tilbake informasjon skader tilliten.',
      },
    },
    {
      id: 'kk2-7-5-def-2',
      type: 'definition',
      title: 'Situational Crisis Communication Theory (SCCT)',
      content: `**Situational Crisis Communication Theory (SCCT)** er utviklet av kommunikasjonsforskeren **Timothy Coombs** og er den mest brukte teorien for krisekommunikasjon. SCCT hjelper organisasjoner å velge riktig kommunikasjonsstrategi basert på krisettype og grad av ansvar.

**Krisetyper (etter grad av organisasjonens ansvar):**

1. **Offer-kriser (lavt ansvar):** Organisasjonen er selv et offer (naturkatastrofe, sabotasje, hacking)
2. **Uhellskriser (moderat ansvar):** Uhell eller feil som ikke var intensjonelle (produktfeil, teknisk svikt)
3. **Forutsigbare kriser (høyt ansvar):** Organisasjonen visste om risikoen eller handlet bevisst feil (lovbrudd, skjulte feil, etiske brudd)

**Responsstrategier:**
- **Benekte:** Nekte ansvar, skylde på andre (risikabelt, men kan brukes ved offer-kriser)
- **Forminske:** Bagatellisere skaden, bortforklare (kan brukes ved uhell)
- **Gjenoppbygge:** Ta ansvar, beklage, tilby kompensasjon (bør brukes ved høyt ansvar)
- **Forsterke:** Minne om tidligere gode handlinger, rose berørte (brukes som tillegg)

**Grunnregel:** Jo høyere ansvar organisasjonen har for krisen, desto sterkere bør gjenoppbyggingsstrategien være. Å benekte når man har skyld, gjør alltid krisen verre.`,
    },
    {
      id: 'kk2-7-5-text-1',
      type: 'text',
      content: `### Krisekommunikasjon i den digitale tidsalderen

Digitale medier har fundamentalt endret krisekommunikasjon:

**Hastighet:**
- Nyheter sprer seg på sekunder via sosiale medier
- "Den gyldne timen" (å kommunisere innen en time) er blitt til "de gyldne minuttene"
- Organisasjoner må overvåke sosiale medier kontinuerlig for å oppdage kriser tidlig

**Mangfold av stemmer:**
- Alle kan publisere sin versjon av hendelsene
- Øyenvitneskildringer, videoer og lekkasjer spres ufiltrert
- Organisasjonen har mistet monopol på informasjonsflyten
- Desinformasjon og ryktespredning kan forsterke krisen

**Transparens som forventning:**
- Publikum forventer åpenhet og umiddelbar respons
- Taushet tolkes som skyld eller arroganse
- "No comment" er den verste responsen i sosiale medier

**Kollektiv aktivisme:**
- Forbrukere kan organisere boikotter og kampanjer raskt
- Hashtag-aktivisme (#BoycottBrand) kan skape massivt press
- En enkelt klage-video kan bli viral og tvinge frem endring

**Praktiske råd for digital krisekommunikasjon:**
1. Ha en kriseplan som inkluderer sosiale medier
2. Utpek en talsperson med fullmakt til å handle raskt
3. Kommuniser proaktivt - kom informasjonsbehovet i forkjøpet
4. Vær menneskelig - vis empati, ikke bare profesjonalitet
5. Overvåk og korriger feilinformasjon raskt
6. Dokumenter og evaluer for å lære til neste krise`,
    },
    {
      id: 'kk2-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'Bruk Timothy Coombs sin SCCT-teori for å analysere følgende scenario: En matvareprodusent oppdager at et parti med ferdigmat inneholder en allergen ingrediens som ikke er merket. Hvilken krisetype er dette, og hvilken responsstrategi bør produsenten velge? Begrunn svaret.',
        hints: ['Vurder graden av organisasjonens ansvar og tenk på hva som skjer hvis de velger feil strategi'],
        solution: 'Dette er en uhells- eller forutsigbar krise avhengig av om feilen skyldes et enkelttilfelle eller systemsvikt. Produsenten bør velge en gjenoppbyggingsstrategi: umiddelbart trekke tilbake produktet, offentlig beklage, informere kunder tydelig om allergenet, og tilby kompensasjon til eventuelle berørte. Å bagatellisere (forminske) eller skylde på leverandøren (benekte) ville gjøre krisen verre, fordi kundesikkerhet står på spill.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Drøft hvordan sosiale medier har endret vilkårene for krisekommunikasjon. Er det blitt lettere eller vanskeligere for organisasjoner å håndtere kriser i en digital tidsalder?',
        hints: ['Tenk på hastighet, transparens, kontroll over narrativet, og muligheten for direkte kommunikasjon'],
        solution: 'Et godt svar drøfter begge sider. Vanskeligere: kriser sprer seg raskere, organisasjonen har mistet kontroll over informasjonsflyten, desinformasjon og ryktespredning, krav om umiddelbar respons, boikottkampanjer. Lettere: organisasjoner kan kommunisere direkte uten å gå gjennom tradisjonelle medier, raskere varsling og informasjon til berørte, mulighet til å korrigere feilinformasjon, bygge tillit gjennom åpen og autentisk kommunikasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Krisekommunikasjon** dekker kommunikasjon før, under og etter en krise
- **SCCT** (Coombs) hjelper organisasjoner å velge riktig responsstrategi basert på krisetype
- God krisekommunikasjon er **rask, åpen og empatisk**
- Digitale medier har økt hastigheten og kompleksiteten i krisekommunikasjon
- **Beredskap** og planlegging er avgjørende for å håndtere kriser effektivt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Krisekommunikasjon | All kommunikasjon knyttet til en krisesituasjon |
| SCCT | Teori som kobler krisetype til kommunikasjonsstrategi |
| Åpenhetsstrategi | Å kommunisere ærlig og fullstendig under en krise |
| Interessenter | Alle parter som berøres av krisen |`,
    },
    {
      id: 'kk2-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Finn et eksempel på en krise fra nyhetsbildet det siste året. Analyser krisekommunikasjonen ved hjelp av SCCT: hva slags krise var det, hvilken strategi valgte organisasjonen, og var den effektiv? Begrunn vurderingen din.',
        hints: ['Bruk Coombs sine krisetyper og responsstrategier, og vurder om organisasjonen valgte riktig nivå av respons'],
        solution: 'Eleven bør finne en faktisk krise og klassifisere den etter SCCT (offer, uhell eller forutsigbar). Deretter analysere organisasjonens faktiske respons (benekte, forminske, gjenoppbygge eller forsterke) og vurdere om den var hensiktsmessig gitt krisetypens alvorlighetsgrad. Et godt svar ser på om organisasjonen kommuniserte raskt nok, viste empati, og om responsen var proporsjonal med graden av ansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kk2-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk2-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        task: 'Du er kommunikasjonsansvarlig i en bedrift. En misfornøyd kunde har lagt ut en video på TikTok der hun kritiserer bedriftens produkt. Videoen har allerede 500 000 visninger. Skriv en plan for hvordan du vil håndtere situasjonen, med begrunnelse fra krisekommunikasjonsteori.',
        hints: ['Tenk på hvem som er interessentene, hva som er riktig kanal for respons, og hvilken tone du bør bruke'],
        solution: 'En god plan inkluderer: (1) Umiddelbar vurdering av om klagen er berettiget. (2) Rask, offentlig respons på TikTok som viser at bedriften tar klagen seriøst. (3) Personlig kontakt med kunden for å løse problemet. (4) Transparent kommunikasjon om eventuelle tiltak bedriften gjør. (5) Overvåking av videre spredning og respons. Planen bør begrunnes med prinsipper fra krisekommunikasjonsteori: hastighet, åpenhet, empati, og riktig kanal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT2_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT2_7_1,
  CHAPTER_KOMKULT2_7_2,
  CHAPTER_KOMKULT2_7_3,
  CHAPTER_KOMKULT2_7_4,
  CHAPTER_KOMKULT2_7_5,
];

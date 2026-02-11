/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Kommunikasjon og kultur 1 (VG2) - Del 2: Verbal og nonverbal kommunikasjon
 *
 * Kapittel 2.1–2.5
 *
 * LK20-kompetansemål:
 * - analysere samspillet mellom verbal og nonverbal kommunikasjon
 * - beskrive kroppsspråk og dens rolle i kommunikasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Språk og mening
// ============================================================================

export const CHAPTER_KOMKULT_1_2_1: TextbookChapter = {
  id: 'komkult-1-2-1',
  courseId: 'komkult-1',
  chapterNumber: '2.1',
  title: 'Språk og mening',
  description: 'En innføring i språkets funksjoner, forholdet mellom denotasjon og konnotasjon, og hvordan språk former vår oppfatning av virkeligheten gjennom språklig relativitet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere samspillet mellom verbal og nonverbal kommunikasjon',
    'drøfte hvordan språk skaper og formidler mening',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk-2-1-intro',
      type: 'text',
      content: `## Språk og mening

Språk er det viktigste verktøyet vi har for å kommunisere med hverandre. Men språk er mer enn bare ord - det er et system som former hvordan vi tenker, føler og forstår verden rundt oss. Når vi sier «hjem», tenker vi ikke bare på fire vegger og et tak - vi tenker kanskje på trygghet, barndom eller tilhørighet.

I dette kapittelet skal du lære:
- Hvilke funksjoner språket har i kommunikasjon
- Forskjellen mellom denotasjon og konnotasjon
- Hva språklig relativitet innebærer og hvorfor det er viktig`,
    },
    {
      id: 'kk-2-1-def-1',
      type: 'definition',
      title: 'Språkets funksjoner',
      content: `**Språkets funksjoner** beskriver de ulike rollene språket spiller i kommunikasjon. Lingvisten Roman Jakobson identifiserte seks hovedfunksjoner: den **referensielle** (formidle informasjon), den **emotive** (uttrykke følelser), den **konative** (påvirke mottaker), den **fatiske** (opprettholde kontakt), den **metalingvistiske** (snakke om språket selv) og den **poetiske** (fokusere på det estetiske ved uttrykket).`,
    },
    {
      id: 'kk-2-1-text-1',
      type: 'text',
      content: `### Språkets seks funksjoner i praksis

La oss se på hvordan de ulike funksjonene viser seg i hverdagen:

| Funksjon | Formål | Eksempel |
|----------|--------|----------|
| Referensiell | Formidle fakta | «Det er 20 grader ute.» |
| Emotiv | Uttrykke følelser | «Fy søren, for en dag!» |
| Konativ | Påvirke mottaker | «Kan du lukke vinduet?» |
| Fatisk | Holde kontakt | «Hei, hvordan går det?» |
| Metalingvistisk | Snakke om språk | «Hva betyr 'konnotasjon'?» |
| Poetisk | Estetisk uttrykk | «Solen danser på vannet.» |

I de fleste ytringer finner vi flere funksjoner samtidig. Når vennen din sier «Herregud, det regner igjen!», er det både emotivt (frustrasjon) og referensielt (informasjon om været).`,
    },
    {
      id: 'kk-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Funksjoner i en reklame',
      problem: 'Analyser denne reklameteksten: «Tørst? Prøv nye IceBlast - den kuleste drikken i sommer! Slukk tørsten nå.»',
      solution: `**Referensiell funksjon:** Informerer om at produktet heter IceBlast og at det er nytt.

**Konativ funksjon:** Oppfordrer mottakeren til handling med «Prøv» og «Slukk tørsten nå».

**Emotiv funksjon:** Skaper en følelse av begjær med «Tørst?»

**Poetisk funksjon:** Bruker ordspillet «kuleste» (som betyr både kald og trendy) for estetisk effekt.

Reklamen kombinerer altså flere funksjoner for å påvirke mottakeren effektivt.`,
    },
    {
      id: 'kk-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Hvilken språkfunksjon er mest fremtredende i ytringen «Kan du sende meg saltet?»',
        options: [
          { id: 'a', text: 'Referensiell - den formidler faktainformasjon', isCorrect: false },
          { id: 'b', text: 'Emotiv - den uttrykker en følelse', isCorrect: false },
          { id: 'c', text: 'Konativ - den prøver å påvirke mottakeren til handling', isCorrect: true },
          { id: 'd', text: 'Fatisk - den opprettholder sosial kontakt', isCorrect: false },
        ],
        solution: 'Ytringen er en oppfordring til mottakeren om å gjøre noe (sende saltet). Den konative funksjonen er rettet mot mottakeren og handler om å påvirke til handling.',
      },
    },
    {
      id: 'kk-2-1-def-2',
      type: 'definition',
      title: 'Denotasjon og konnotasjon',
      content: `**Denotasjon** er ordets grunnbetydning - den nøytrale, «ordbok-definisjonen». **Konnotasjon** er de tilleggsbetydningene, assosiasjonene og følelsene vi knytter til et ord. For eksempel: Ordene «hus» og «hjem» har lignende denotasjon (et sted man bor), men «hjem» har sterkere konnotasjoner av varme, trygghet og tilhørighet.`,
    },
    {
      id: 'kk-2-1-text-2',
      type: 'text',
      content: `### Konnotasjoner i praksis

Konnotasjoner varierer mellom kulturer, grupper og individer. De kan være:

**Positive konnotasjoner:**
- «Slank» i stedet for «tynn» (idealiserende)
- «Erfaren» i stedet for «gammel» (respektfull)
- «Eventyr» i stedet for «risiko» (spennende)

**Negative konnotasjoner:**
- «Innvandrer» kan ha negative konnotasjoner for noen
- «Brukt» vs. «vintage» - samme sak, ulik klang
- «Billig» vs. «rimelig» - begge betyr lav pris

Politikere, journalister og reklamebransjen bruker bevisst ord med bestemte konnotasjoner for å påvirke holdningene våre. Når man kaller flyktninger for «asylsøkere», «innvandrere» eller «nyankomne», skaper hvert ord forskjellige bilder og følelser.`,
    },
    {
      id: 'kk-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        task: 'Finn tre ordpar der ordene har lignende denotasjon, men ulike konnotasjoner. Forklar forskjellen i konnotasjon for hvert par.',
        hints: ['Tenk på ord som beskriver mennesker, mat eller boliger'],
        solution: 'Eksempler: 1) «Sta» vs. «standhaftig» - begge betyr at noen ikke gir seg, men «standhaftig» er positivt (prinsippfast), mens «sta» er negativt (urimelig). 2) «Sparsommelig» vs. «gjerrig» - begge handler om å bruke lite penger, men «sparsommelig» er fornuftig, «gjerrig» er negativt. 3) «Ambisiøs» vs. «grisk» - begge handler om å ville oppnå mye, men med helt ulik klang.',
      },
    },
    {
      id: 'kk-2-1-def-3',
      type: 'definition',
      title: 'Språklig relativitet',
      content: `**Språklig relativitet** (også kalt Sapir-Whorf-hypotesen) er ideen om at språket vi snakker påvirker hvordan vi tenker og oppfatter verden. I den sterke versjonen bestemmer språket tanken. I den svake versjonen (som de fleste forskere støtter i dag) påvirker språket tanken - det gjør visse ting lettere å tenke på og andre vanskeligere.`,
    },
    {
      id: 'kk-2-1-text-3',
      type: 'text',
      content: `### Eksempler på språklig relativitet

Forskning viser at språk faktisk kan påvirke oppfatning:

**Farger:** Det russiske språket har to separate ord for lyseblå (*goluboy*) og mørkeblå (*siniy*). Studier viser at russisktalende er raskere til å skille mellom lyse og mørke blåtoner enn engelsktalende.

**Tid:** På mandarin snakker man ofte om tid i vertikale termer (opp = fortid, ned = fremtid), mens på norsk bruker vi horisontale termer (bak = fortid, foran = fremtid). Dette påvirker faktisk hvordan folk mentalt organiserer tid.

**Kjønn:** På norsk er «bro» hankjønn. På spansk er *puente* (bro) hankjønn, mens på tysk er *Brücke* hunkjønn. Studier viser at tyskere beskriver broer med «feminine» adjektiver (elegant, vakker), mens spansktalende bruker «maskuline» adjektiver (sterk, solid).

Disse funnene betyr ikke at vi er «fanget» i språket vårt, men at språk gir oss mentale kategorier som påvirker hva vi legger merke til og hvordan vi organiserer opplevelser.`,
    },
    {
      id: 'kk-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        task: 'Hva innebærer den svake versjonen av Sapir-Whorf-hypotesen?',
        options: [
          { id: 'a', text: 'Språket bestemmer fullstendig hva vi kan tenke', isCorrect: false },
          { id: 'b', text: 'Språket har ingen innvirkning på tanken', isCorrect: false },
          { id: 'c', text: 'Språket påvirker tanken og gjør visse ting lettere å tenke på', isCorrect: true },
          { id: 'd', text: 'Alle språk er like og fører til identisk tenkning', isCorrect: false },
        ],
        solution: 'Den svake versjonen sier at språket påvirker (men ikke bestemmer) tanken. Språket vi snakker gjør det lettere å tenke på visse ting og kan påvirke oppfatningen vår, men vi er ikke fullstendig begrenset av språket.',
      },
    },
    {
      id: 'kk-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Språkets funksjoner** dekker alt fra å formidle fakta til å uttrykke følelser og påvirke andre
- **Denotasjon** er ordets grunnbetydning, mens **konnotasjon** er tilleggsbetydningene og assosiasjonene
- **Språklig relativitet** viser at språket vi snakker påvirker hvordan vi oppfatter virkeligheten

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Denotasjon | Ordets nøytrale grunnbetydning |
| Konnotasjon | Følelser og assosiasjoner knyttet til et ord |
| Språklig relativitet | Ideen om at språk påvirker tanke og oppfatning |
| Konativ funksjon | Språkets evne til å påvirke mottakeren |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Velg en avisartikkel eller nettartikkel og analyser språkbruken. Hvilke språkfunksjoner finner du? Pek på minst tre ord med tydelige konnotasjoner og drøft hvordan ordvalgene påvirker budskapet.',
        hints: ['Se på overskriften og ingressen - der er ordvalgene ofte mest bevisste'],
        solution: 'Et godt svar identifiserer flere språkfunksjoner (referensiell for fakta, emotiv for meninger, konativ i oppfordringer) og peker på konkrete ordvalg der konnotasjonene styrker eller svekker budskapet. For eksempel kan en artikkel om klimaendringer bruke «klimakrise» (negative konnotasjoner, haster) eller «klimaendring» (mer nøytralt).',
      },
    },
    {
      id: 'kk-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-2-1-ex-5',
        number: '2.1.5',
        type: 'multiple-choice',
        task: 'Hvilke av disse ordparene viser best forskjellen mellom denotasjon og konnotasjon?',
        options: [
          { id: 'a', text: '«Hund» og «katt» - forskjellige dyr', isCorrect: false },
          { id: 'b', text: '«Hus» og «hjem» - begge steder man bor, men ulike følelser', isCorrect: true },
          { id: 'c', text: '«Stor» og «liten» - motsetninger', isCorrect: false },
          { id: 'd', text: '«Norsk» og «svensk» - forskjellige språk', isCorrect: false },
        ],
        solution: '«Hus» og «hjem» har nesten identisk denotasjon (et sted man bor), men svært ulike konnotasjoner. «Hjem» vekker følelser av varme, trygghet og tilhørighet som «hus» ikke gjør.',
      },
    },
    {
      id: 'kk-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        task: 'Drøft om du tror språket vi snakker påvirker hvordan vi tenker. Bruk eksempler fra kapittelet eller egne erfaringer til å begrunne svaret ditt.',
        solution: 'Et godt svar tar stilling til spørsmålet og bruker konkrete eksempler. For eksempel kan man nevne at norsk har mange ord for snø (som samisk har enda flere), og at dette kanskje gjør at vi legger merke til flere nyanser i snøen. Man kan også reflektere over hvordan ungdomsspråk skaper fellesskap - de som kjenner ordene «tenker likt».',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Kroppsspråk
// ============================================================================

export const CHAPTER_KOMKULT_1_2_2: TextbookChapter = {
  id: 'komkult-1-2-2',
  courseId: 'komkult-1',
  chapterNumber: '2.2',
  title: 'Kroppsspråk',
  description: 'En innføring i kroppsspråkets betydning i kommunikasjon, med fokus på gester, kroppsholdning, avstand mellom mennesker (proksemikk) og berøring (haptikk).',
  estimatedMinutes: 24,
  competenceGoals: [
    'beskrive kroppsspråk og dens rolle i kommunikasjon',
    'analysere samspillet mellom verbal og nonverbal kommunikasjon',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk-2-2-intro',
      type: 'text',
      content: `## Kroppsspråk - kommunikasjon uten ord

Forskere anslår at mellom 60 og 93 prosent av all kommunikasjon er nonverbal. Det betyr at kroppen din sender signaler til omverdenen hele tiden - selv når du ikke sier et ord. Et skuldertrekk, en krysset arm eller et skritt bakover kan fortelle mer enn en hel setning.

I dette kapittelet skal du lære:
- Hva gester er og hvordan de brukes ulikt i ulike kulturer
- Hvordan kroppsholdning signaliserer følelser og status
- Hva proksemikk (avstand) betyr for kommunikasjon
- Hvordan berøring (haptikk) varierer mellom kulturer og situasjoner`,
    },
    {
      id: 'kk-2-2-def-1',
      type: 'definition',
      title: 'Kroppsspråk',
      content: `**Kroppsspråk** er alle former for kommunikasjon gjennom kroppens bevegelser, holdning og plassering. Det inkluderer gester, kroppsholdning, avstand til andre (proksemikk) og berøring (haptikk). Kroppsspråk kan være bevisst eller ubevisst, og tolkningen varierer mellom kulturer.`,
    },
    {
      id: 'kk-2-2-text-1',
      type: 'text',
      content: `### Gester

Gester er bevegelser vi gjør med hendene, armene, hodet eller kroppen for å understreke, erstatte eller utfylle det vi sier.

**Typer gester:**

**Illustratorer** - bevegelser som følger talen:
- Peke i en retning mens du sier «der borte»
- Vise størrelse med hendene
- Nikke mens du sier «ja»

**Emblem** - gester med fastsatt betydning:
- Tommel opp (bra/ok)
- Vinke (hei/ha det)
- Riste på hodet (nei)

**Regulatorer** - gester som styrer samtalen:
- Løfte hånden for å ta ordet
- Nikke for å vise at du lytter
- Se bort for å signalisere at du vil avslutte

**Kulturelle forskjeller i gester:**
Gester kan ha helt ulik betydning i forskjellige kulturer. «Tommel opp» betyr bra i Norge, men er fornærmende i deler av Midtøsten. Å nikke betyr «ja» hos oss, men i Bulgaria betyr nikking «nei». Å peke med pekefingeren er vanlig i Vesten, men anses som uhøflig i mange asiatiske land.`,
    },
    {
      id: 'kk-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Gestbruk i en presentasjon',
      problem: 'En elev holder en presentasjon om skoleturen til Paris. Hvordan kan gester styrke eller svekke budskapet?',
      solution: `**Gester som styrker:**
- Åpne håndbevegelser når eleven snakker om opplevelsene (viser åpenhet)
- Peke mot bilder på skjermen for å rette oppmerksomheten
- Bruke hendene til å vise størrelsen på Eiffeltårnet (illustrator)
- Telle på fingrene: «Vi besøkte tre museer...»

**Gester som svekker:**
- Stå med hendene i lommen (signaliserer usikkerhet eller likegyldighet)
- Fikle med pennen eller håret (nervøsitet)
- Krysse armene foran brystet (lukket, defensiv)
- Overdrevne gester som tar oppmerksomheten bort fra innholdet`,
    },
    {
      id: 'kk-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hva er en «illustrator» i kroppsspråksammenheng?',
        options: [
          { id: 'a', text: 'En gest med fastsatt kulturell betydning', isCorrect: false },
          { id: 'b', text: 'En bevegelse som følger og understreker det vi sier', isCorrect: true },
          { id: 'c', text: 'En gest som styrer hvem som snakker i samtalen', isCorrect: false },
          { id: 'd', text: 'En bevisst bevegelse for å manipulere andre', isCorrect: false },
        ],
        solution: 'Illustratorer er gester som følger talen og understreker det vi sier. For eksempel å peke i en retning mens man sier «der borte», eller å vise størrelse med hendene.',
      },
    },
    {
      id: 'kk-2-2-def-2',
      type: 'definition',
      title: 'Proksemikk',
      content: `**Proksemikk** er studiet av hvordan mennesker bruker fysisk avstand i kommunikasjon. Antropologen Edward T. Hall identifiserte fire avstandssoner: **intim sone** (0–45 cm), **personlig sone** (45–120 cm), **sosial sone** (120–360 cm) og **offentlig sone** (over 360 cm). Hvilken sone vi bruker, avhenger av forholdet mellom personene og den kulturelle konteksten.`,
    },
    {
      id: 'kk-2-2-text-2',
      type: 'text',
      content: `### Avstandssonene

| Sone | Avstand | Brukes til |
|------|---------|-----------|
| Intim | 0–45 cm | Partner, familie, nære venner |
| Personlig | 45–120 cm | Venner, kollegaer i fortrolige samtaler |
| Sosial | 120–360 cm | Formelle møter, fremmede, kollegaer |
| Offentlig | Over 360 cm | Foredrag, presentasjoner, konserter |

**Kulturelle forskjeller:** I nordiske land foretrekker vi generelt større avstand enn folk i Middelhavsområdet og Latin-Amerika. En brasilianer kan stå ubehagelig nære for en nordmann, mens nordmannen kan virke kald og fjern for brasilianeren.

**Når sonen brytes:** Vi reagerer ubevisst når noen trenger inn i en avstandssone vi ikke forventer. Tenk på følelsen i en overfylt heis - vi kompenserer ved å unngå øyekontakt, se i gulvet eller bli stive i kroppen.`,
    },
    {
      id: 'kk-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-2-2-ex-2',
        number: '2.2.2',
        type: 'classic',
        task: 'Beskriv en situasjon der noen brøt avstandssonen din. Hvordan reagerte du, og hvorfor tror du du reagerte slik?',
        hints: ['Tenk på situasjoner som overfylt buss, kø i butikken, eller en samtale der noen sto for nære'],
        solution: 'Et godt svar beskriver en konkret situasjon, den følelsesmessige reaksjonen (ubehag, irritasjon, forsøk på å flytte seg) og knytter det til proksemikk-teorien. For eksempel: å rygge et skritt tilbake under en samtale fordi den andre personen stod i den intime sonen, mens forholdet bare tilsa personlig sone.',
      },
    },
    {
      id: 'kk-2-2-def-3',
      type: 'definition',
      title: 'Haptikk',
      content: `**Haptikk** er studiet av berøring som kommunikasjonsform. Berøring kan uttrykke omsorg, makt, intimitet eller aggresjon. Haptikk varierer enormt mellom kulturer: noen kulturer (som mange latinamerikanske) har høy berøringsfrekvens, mens andre (som mange nordiske) har lavere.`,
    },
    {
      id: 'kk-2-2-text-3',
      type: 'text',
      content: `### Berøring i kommunikasjon

Berøring er en av de mest grunnleggende kommunikasjonsformene. Babyer trenger berøring for å utvikle seg normalt, og helt gjennom livet sender berøring sterke signaler.

**Typer berøring:**
- **Funksjonell/profesjonell:** Legen som undersøker, frisøren som klipper
- **Sosial/høflig:** Håndtrykk, klapp på skulderen
- **Vennskapelig:** Klem, arm rundt skulderen
- **Intim:** Kjærtegn, holde hender

**Berøring og makt:** Studier viser at personer med høyere status oftere tar initiativ til berøring. En sjef kan klappe en ansatt på skulderen, men det ville vært mer uvanlig omvendt.

**Kulturelle forskjeller:** En studie telte berøringer mellom venner på en kafé: I San Juan (Puerto Rico) rørte vennene hverandre 180 ganger i løpet av en time, i Paris 110 ganger, og i London 0 ganger.`,
    },
    {
      id: 'kk-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-2-2-ex-3',
        number: '2.2.3',
        type: 'multiple-choice',
        task: 'Hvilken avstandssone bruker vi vanligvis i en formell samtale med en kollega?',
        options: [
          { id: 'a', text: 'Intim sone (0–45 cm)', isCorrect: false },
          { id: 'b', text: 'Personlig sone (45–120 cm)', isCorrect: false },
          { id: 'c', text: 'Sosial sone (120–360 cm)', isCorrect: true },
          { id: 'd', text: 'Offentlig sone (over 360 cm)', isCorrect: false },
        ],
        solution: 'I formelle samtaler med kollegaer bruker vi den sosiale sonen (120–360 cm). Denne avstanden gir nok rom til å føle seg komfortabel, samtidig som samtale er lett.',
      },
    },
    {
      id: 'kk-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Gester** kan være illustratorer, emblemer eller regulatorer, og varierer mellom kulturer
- **Kroppsholdning** signaliserer åpenhet, lukkethet, status og følelser
- **Proksemikk** handler om avstandssoner: intim, personlig, sosial og offentlig
- **Haptikk** er berøring som kommunikasjonsform og varierer enormt mellom kulturer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Proksemikk | Studiet av avstand i kommunikasjon |
| Haptikk | Studiet av berøring som kommunikasjon |
| Illustrator | Gest som understreker det verbale budskapet |
| Emblem | Gest med fastsatt kulturell betydning |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Observer kroppsspråket til mennesker rundt deg i en offentlig situasjon (kantine, buss, butikk) i 10 minutter. Noter deg tre eksempler på gester, avstandsbruk eller berøring du observerer, og analyser hva disse signaliserer.',
        hints: ['Vær diskret når du observerer - ikke stirr'],
        solution: 'Et godt svar beskriver konkrete observasjoner og knytter dem til teorien. For eksempel: «To venner stod i personlig sone og brukte mange illustratorer mens de snakket. En fremmed satte seg i sosial avstand fra de andre på bussholdeplassen. To jenter ga hverandre en klem (haptikk) da de møttes.»',
      },
    },
    {
      id: 'kk-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-2-2-ex-5',
        number: '2.2.5',
        type: 'multiple-choice',
        task: 'Hvorfor kompenserer vi med å unngå øyekontakt når vi er i en overfylt heis?',
        options: [
          { id: 'a', text: 'Fordi vi er sjenerte av natur', isCorrect: false },
          { id: 'b', text: 'Fordi fremmede tvinges inn i vår intime sone og vi forsøker å gjenopprette avstand', isCorrect: true },
          { id: 'c', text: 'Fordi det er uhøflig å se på andre i heiser', isCorrect: false },
          { id: 'd', text: 'Fordi heiser vanligvis har dårlig belysning', isCorrect: false },
        ],
        solution: 'Når fremmede trenger inn i den intime sonen vår (som i en overfylt heis), kompenserer vi psykologisk. Ved å unngå øyekontakt, stivne i kroppen eller se i gulvet forsøker vi å «gjenopprette» en følelse av avstand selv om den fysiske avstanden er minimal.',
      },
    },
    {
      id: 'kk-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        task: 'Forklar hvordan kulturelle forskjeller i haptikk kan føre til misforståelser. Gi et konkret eksempel.',
        solution: 'Kulturelle forskjeller i berøring kan skape ubehag eller feiltolkninger. For eksempel: En brasiliansk forretningspartner som gir en klem og holder armen din under samtalen, kan oppfattes som invaderende av en norsk kollega, mens nordmannens avstand kan oppfattes som kald og uinteressert av brasilianeren. Ingen av dem «gjør feil» - de følger sine kulturelle normer for haptikk.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Ansiktsuttrykk og øyekontakt
// ============================================================================

export const CHAPTER_KOMKULT_1_2_3: TextbookChapter = {
  id: 'komkult-1-2-3',
  courseId: 'komkult-1',
  chapterNumber: '2.3',
  title: 'Ansiktsuttrykk og øyekontakt',
  description: 'En gjennomgang av ansiktets rolle i kommunikasjon, med fokus på Ekmans universelle uttrykk, mikro-uttrykk og øyekontaktens betydning i ulike kulturer og situasjoner.',
  estimatedMinutes: 22,
  competenceGoals: [
    'beskrive kroppsspråk og dens rolle i kommunikasjon',
    'analysere samspillet mellom verbal og nonverbal kommunikasjon',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk-2-3-intro',
      type: 'text',
      content: `## Ansiktet - kommunikasjonens speil

Ansiktet er den delen av kroppen vi ser mest på når vi kommuniserer med andre. Det kan uttrykke glede, sinne, frykt og overraskelse - ofte uten at vi tenker over det. Men er ansiktsuttrykk universelle, eller er de kulturelt betinget? Og hva skjer når ansiktet avslører noe vi prøver å skjule?

I dette kapittelet skal du lære:
- Om Paul Ekmans forskning på universelle ansiktsuttrykk
- Hva mikro-uttrykk er og hvordan de fungerer
- Øyekontaktens ulike roller i kommunikasjon
- Kulturelle forskjeller i bruk av ansiktsuttrykk og øyekontakt`,
    },
    {
      id: 'kk-2-3-def-1',
      type: 'definition',
      title: 'Ekmans universelle ansiktsuttrykk',
      content: `Psykologen **Paul Ekman** forsket i flere tiår på ansiktsuttrykk og konkluderte med at det finnes **seks grunnleggende følelser** som uttrykkes likt på tvers av kulturer: **glede**, **tristhet**, **sinne**, **frykt**, **avsky** og **overraskelse**. Senere la han til **forakt**. Disse uttrykkene er biologisk betinget og gjenkjennes selv av isolerte folkegrupper som aldri har vært eksponert for vestlig kultur.`,
    },
    {
      id: 'kk-2-3-text-1',
      type: 'text',
      content: `### De seks grunnleggende uttrykkene

Hvert grunnleggende uttrykk har karakteristiske trekk i ansiktet:

| Følelse | Kjennetegn i ansiktet |
|---------|----------------------|
| Glede | Munnvikene opp, rynker ved øynene (ekte smil) |
| Tristhet | Munnvikene ned, hevede øyenbryn innover |
| Sinne | Sammentrukne øyenbryn, stramme lepper, stirrende blikk |
| Frykt | Vidåpne øyne, hevede øyenbryn, åpen munn |
| Avsky | Rynket nese, hevet overleppe |
| Overraskelse | Hevede øyenbryn, vidåpne øyne, åpen munn |

**Ekman vs. konstruktivistene:** Ikke alle forskere er enige med Ekman. Lisa Feldman Barrett og andre hevder at følelser er mer kulturelt konstruerte enn Ekman mener, og at ansiktsuttrykk varierer mer mellom kulturer enn hans forskning viser. Debatten pågår fortsatt.

**Visningsregler:** Selv om de grunnleggende uttrykkene er universelle, har alle kulturer «visningsregler» - normer for når det er passende å vise følelser. I Japan er det for eksempel vanlig å maskere negative følelser med et smil i sosiale situasjoner.`,
    },
    {
      id: 'kk-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Ekte vs. falskt smil',
      problem: 'Hvordan kan du se forskjell på et ekte og et falskt smil?',
      solution: `**Ekte smil (Duchenne-smil):**
- Både munnen og øynene er involvert
- Munnvikene går opp
- Det dannes rynker ved øynene («kråkeføtter»)
- Øynene «smiler» - de blir litt smalere
- Oppstår spontant og naturlig

**Falskt smil:**
- Bare munnen er involvert
- Munnvikene trekkes ut til sidene (mer enn opp)
- Øynene forblir uendret - ingen rynker
- Kan virke anstrengt eller stivt
- Varer ofte for lenge eller for kort

Navnet «Duchenne-smil» kommer fra den franske nevrologen Guillaume Duchenne, som på 1800-tallet oppdaget at ekte smil involverer en muskel rundt øyet (*orbicularis oculi*) som er vanskelig å kontrollere bevisst.`,
    },
    {
      id: 'kk-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et ekte smil (Duchenne-smil)?',
        options: [
          { id: 'a', text: 'Bare munnen beveger seg', isCorrect: false },
          { id: 'b', text: 'Både munnen og øyemusklene er involvert', isCorrect: true },
          { id: 'c', text: 'Øynene er vidåpne', isCorrect: false },
          { id: 'd', text: 'Smilet varer lenge og er symmetrisk', isCorrect: false },
        ],
        solution: 'Et ekte Duchenne-smil involverer både munnen (munnvikene opp) og musklene rundt øynene (som skaper rynker/kråkeføtter). Det er vanskelig å fake fordi øyemuskelen er vanskelig å kontrollere bevisst.',
      },
    },
    {
      id: 'kk-2-3-def-2',
      type: 'definition',
      title: 'Mikro-uttrykk',
      content: `**Mikro-uttrykk** er svært korte, ufrivillige ansiktsuttrykk som varer mellom 1/25 og 1/5 av et sekund. De oppstår når en person forsøker å skjule eller undertrykke en følelse. Fordi de er så raske, registreres de sjelden bevisst, men de avslører den underliggende følelsen personen prøver å skjule.`,
    },
    {
      id: 'kk-2-3-text-2',
      type: 'text',
      content: `### Mikro-uttrykk i praksis

Mikro-uttrykk er som små «lekkasjer» av følelser. De oppstår typisk i situasjoner der vi prøver å kontrollere ansiktsuttrykket vårt:

**Eksempler:**
- En person som gratulerer en kollega med forfremmelsen, men et lynraskt uttrykk av sinne eller avsky glir over ansiktet
- En elev som sier hen ikke er nervøs for presentasjonen, men et glimt av frykt vises
- En person som smiler mens de hører dårlige nyheter - et øyeblikks tristhet bryter gjennom

**Kan vi lære å lese mikro-uttrykk?** Ekman utviklet treningsprogrammer som viser at man kan bli bedre til å oppdage mikro-uttrykk med øvelse. Politietterforskere, terapeuter og sikkerhetspersonell bruker denne kunnskapen.

**Viktig forbehold:** Selv om mikro-uttrykk gir informasjon om følelser, betyr de ikke nødvendigvis at noen lyver. En person kan føle ubehag av mange grunner. Å «lese» mennesker basert på mikro-uttrykk alene er upålitelig.`,
    },
    {
      id: 'kk-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-2-3-ex-2',
        number: '2.3.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom et mikro-uttrykk og et vanlig ansiktsuttrykk? Gi et eksempel på en situasjon der mikro-uttrykk kan oppstå.',
        hints: ['Tenk på varigheten og om uttrykket er frivillig eller ufrivillig'],
        solution: 'Mikro-uttrykk varer bare brøkdelen av et sekund (1/25 til 1/5 sekund), mens vanlige uttrykk varer lengre. Mikro-uttrykk er ufrivillige og oppstår når vi prøver å skjule følelser. Eksempel: En venn forteller om sin nye jobb som du egentlig ønsket deg selv - du smiler og gratulerer, men et øyeblikks misunnelse eller skuffelse glir over ansiktet ditt før du rekker å maskere det.',
      },
    },
    {
      id: 'kk-2-3-text-3',
      type: 'text',
      content: `### Øyekontaktens rolle

Øyekontakt er en av de mest kraftfulle formene for nonverbal kommunikasjon. Den regulerer samtaler, uttrykker følelser og signaliserer status og interesse.

**Øyekontaktens funksjoner:**

**1. Regulere samtaler**
- Vi ser på samtalepartneren for å signalisere at vi lytter
- Vi ser bort når vi tenker eller vil ta ordet
- Lengre blikk signaliserer at det er den andres tur

**2. Uttrykke følelser**
- Utvidede pupiller signaliserer interesse eller tiltrekning
- Stirring kan uttrykke aggresjon eller dominans
- Å unngå blikk kan signalisere skyld, sjenanse eller respekt

**3. Signalisere status**
- Høystatuspersoner holder øyekontakt lengre når de snakker
- Lavstatuspersoner holder øyekontakt lengre når de lytter
- I noen kulturer er det respektfullt å senke blikket for autoriteter

**Kulturelle forskjeller:**
I vestlige kulturer anses direkte øyekontakt som et tegn på ærlighet og selvtillit. I mange asiatiske, afrikanske og urfolkskulturer kan direkte øyekontakt oppfattes som respektløst eller aggressivt, særlig overfor eldre eller autoriteter.`,
    },
    {
      id: 'kk-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-2-3-ex-3',
        number: '2.3.3',
        type: 'multiple-choice',
        task: 'Hva menes med «visningsregler» i forbindelse med ansiktsuttrykk?',
        options: [
          { id: 'a', text: 'Regler for hvordan man skal tolke andres ansiktsuttrykk', isCorrect: false },
          { id: 'b', text: 'Kulturelle normer for når og hvordan det er passende å vise følelser', isCorrect: true },
          { id: 'c', text: 'Biologiske regler for hvordan ansiktsmuskler fungerer', isCorrect: false },
          { id: 'd', text: 'Retningslinjer for skuespillere om å vise følelser', isCorrect: false },
        ],
        solution: 'Visningsregler er kulturelle normer som styrer når, hvor og hvordan det er passende å uttrykke følelser. For eksempel er det i mange kulturer akseptert å gråte i en begravelse, men ikke i et jobbintervju.',
      },
    },
    {
      id: 'kk-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Ekman identifiserte **seks universelle ansiktsuttrykk** (glede, tristhet, sinne, frykt, avsky, overraskelse)
- **Mikro-uttrykk** er ufrivillige, svært korte uttrykk som avslører skjulte følelser
- Et **ekte smil** (Duchenne-smil) involverer øyemuskulaturen, et falskt gjør det ikke
- **Øyekontakt** regulerer samtaler, uttrykker følelser og signaliserer status
- **Visningsregler** er kulturelle normer for å vise følelser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Duchenne-smil | Ekte smil som involverer øyemusklene |
| Mikro-uttrykk | Ufrivillige, korte ansiktsuttrykk (under 1/5 sekund) |
| Visningsregler | Kulturelle normer for å vise følelser |
| Øyekontakt | Regulerer samtaler og uttrykker følelser |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'Drøft om ansiktsuttrykk er universelle eller kulturelt betinget. Bruk argumenter fra både Ekman og hans kritikere i svaret ditt.',
        hints: ['Husk å ta med visningsregler i drøftingen'],
        solution: 'Et godt svar presenterer begge sider. Ekman argumenterer for at grunnleggende uttrykk er biologisk betinget og gjenkjennes på tvers av kulturer, støttet av studier med isolerte folkegrupper. Kritikere som Barrett mener følelser er mer kulturelt konstruerte. Et balansert svar kan konkludere med at selve uttrykksevnen er biologisk, men at visningsregler og tolkning varierer mellom kulturer - de grunnleggende uttrykkene er universelle, men bruken av dem er kulturelt betinget.',
      },
    },
    {
      id: 'kk-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-2-3-ex-5',
        number: '2.3.5',
        type: 'multiple-choice',
        task: 'Hva kan direkte øyekontakt signalisere i mange asiatiske kulturer?',
        options: [
          { id: 'a', text: 'Ærlighet og tillit', isCorrect: false },
          { id: 'b', text: 'Respektløshet eller aggresjon', isCorrect: true },
          { id: 'c', text: 'Romantisk interesse', isCorrect: false },
          { id: 'd', text: 'Likegyldighet', isCorrect: false },
        ],
        solution: 'I mange asiatiske (og afrikanske og urfolks-) kulturer kan direkte øyekontakt, særlig overfor eldre eller autoriteter, oppfattes som respektløst eller aggressivt. I disse kulturene er det å senke blikket et tegn på respekt.',
      },
    },
    {
      id: 'kk-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        task: 'Tenk deg at du er jobbintervjuer og møter en kandidat som unngår øyekontakt. Hvordan bør du tolke dette, og hvilke feilslutninger bør du unngå?',
        solution: 'Man bør ikke automatisk tolke manglende øyekontakt som tegn på uærlighet eller mangel på selvtillit. Kandidaten kan komme fra en kultur der direkte øyekontakt med autoriteter anses som respektløst. Personen kan også være sjenert, nervøs eller ha en funksjonsvariasjon (f.eks. autismespekteret). Et godt svar viser forståelse for at nonverbal kommunikasjon må tolkes i kontekst - kulturell bakgrunn, situasjon og individuelle forskjeller spiller inn.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Stemmebruk og paralingvistikk
// ============================================================================

export const CHAPTER_KOMKULT_1_2_4: TextbookChapter = {
  id: 'komkult-1-2-4',
  courseId: 'komkult-1',
  chapterNumber: '2.4',
  title: 'Stemmebruk og paralingvistikk',
  description: 'En innføring i hvordan stemmen påvirker kommunikasjon - tonefall, tempo, volum, pauser og stemmekvalitet. Du lærer hvordan det vi sier påvirkes av måten vi sier det på.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere samspillet mellom verbal og nonverbal kommunikasjon',
    'beskrive hvordan stemmebruk påvirker budskap og tolkning',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk-2-4-intro',
      type: 'text',
      content: `## Det er ikke hva du sier, men hvordan du sier det

Tenk deg at noen sier «Det var veldig bra» med flat stemme og et sukk. Sier de egentlig at det var bra? Trolig ikke. Stemmen vår bærer enorme mengder informasjon utover selve ordene. Tonefallet, tempoet, volumet og pausene vi legger inn, former meningen i alt vi sier.

I dette kapittelet skal du lære:
- Hva paralingvistikk er og hvorfor det er viktig
- Hvordan tonefall, tempo, volum og pauser påvirker budskapet
- Hva stemmekvalitet er og hvordan den virker
- Forskjellen på hva vi sier og hvordan vi sier det`,
    },
    {
      id: 'kk-2-4-def-1',
      type: 'definition',
      title: 'Paralingvistikk',
      content: `**Paralingvistikk** (også kalt vokale tegn eller prosodi) handler om alle aspekter ved stemmebruk som ikke er selve ordene. Det inkluderer **tonefall** (intonasjon), **tempo** (hastighet), **volum** (styrke), **pauser** (stillhet) og **stemmekvalitet** (klang). Paralingvistikk utgjør en viktig del av nonverbal kommunikasjon og kan endre meningsinnholdet i en ytring fullstendig.`,
    },
    {
      id: 'kk-2-4-text-1',
      type: 'text',
      content: `### Tonefall (intonasjon)

Tonefall er kanskje det viktigste paralingvistiske virkemiddelet. Ved å endre tonefall kan vi gi den samme setningen helt forskjellig mening.

**Setningen «Han kom hjem i går»:**
- Nøytralt tonefall → ren informasjon
- Stigende tonefall → spørsmål (Kom han hjem i går?)
- Trykksterkt på «han» → overraskelse over hvem
- Trykksterkt på «i går» → overraskelse over tidspunktet
- Sarkastisk tonefall → man tror det ikke

**Tonefall signaliserer:**
- **Sikkerhet** - synkende tonefall ved slutten av setningen
- **Usikkerhet** - stigende tonefall ved slutten (selv i påstander)
- **Entusiasme** - variert, livlig tonefall
- **Kjedsomhet** - flatt, monotont tonefall
- **Sarkasme** - overdrevet eller uventet tonefall

Nyere forskning viser at «uptalk» (stigende tonefall i påstander) sprer seg i mange språk. Det kan signalisere usikkerhet, men det kan også brukes for å sjekke at mottakeren følger med.`,
    },
    {
      id: 'kk-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Fem måter å si «Fint»',
      problem: 'Hvordan kan ordet «fint» bety forskjellige ting avhengig av tonefall og stemmekvalitet?',
      solution: `1. **«Fint!»** (høyt, lyst, entusiastisk) → Ekte glede, man er fornøyd
2. **«Fint.»** (flatt, nøytralt, kort) → Likegyldighet, bryr seg egentlig ikke
3. **«Fiiint...»** (dratt ut, synkende) → Sarkasme, man mener det motsatte
4. **«Fint!»** (kort, bryskt, høyt) → Irritasjon, man er sint men gir seg
5. **«Fint?»** (stigende, forsiktig) → Spørsmål, man er usikker

Ett eneste ord - fem helt forskjellige budskap. Det viser hvor viktig paralingvistikk er for å forstå hva noen egentlig mener.`,
    },
    {
      id: 'kk-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva handler paralingvistikk om?',
        options: [
          { id: 'a', text: 'Grammatikk og setningsstruktur', isCorrect: false },
          { id: 'b', text: 'Alle aspekter ved stemmebruk som ikke er selve ordene', isCorrect: true },
          { id: 'c', text: 'Kroppsspråk og gester', isCorrect: false },
          { id: 'd', text: 'Ordvalg og konnotasjoner', isCorrect: false },
        ],
        solution: 'Paralingvistikk handler om alt ved stemmebruk utover selve ordene: tonefall, tempo, volum, pauser og stemmekvalitet. Det er en viktig del av nonverbal kommunikasjon.',
      },
    },
    {
      id: 'kk-2-4-def-2',
      type: 'definition',
      title: 'Tempo og pauser',
      content: `**Tempo** (talehastighet) påvirker hvordan budskapet oppfattes. Raskt tempo kan signalisere entusiasme, nervøsitet eller hastverk. Langsomt tempo kan signalisere ettertenksomhet, alvor eller usikkerhet. **Pauser** er bevisst stillhet i talen og brukes til å skape spenning, understreke poenger, gi mottakeren tid til å tenke, eller signalisere at man venter på respons.`,
    },
    {
      id: 'kk-2-4-text-2',
      type: 'text',
      content: `### Tempo, volum og pauser

**Tempo:**
| Talehastighet | Signaliserer |
|--------------|--------------|
| Raskt | Entusiasme, nervøsitet, hastverk |
| Moderat | Ro, kontroll, tydelighet |
| Langsomt | Alvor, ettertenksomhet, vekt |
| Varierende | Engasjement, god formidling |

**Volum:**
- **Høyt** → autoritet, sinne, entusiasme
- **Lavt** → intimitet, hemmelighet, usikkerhet
- **Varierende** → engasjement, god fortelling
- **Monotont** → kjedsomhet, maktesløshet

**Pauser:**
Pauser er undervurdert i kommunikasjon. En dyktig taler bruker pauser strategisk:
- **Før et viktig poeng** → skaper spenning og oppmerksomhet
- **Etter et viktig poeng** → gir tid til å fordøye
- **Når man blir stilt et vanskelig spørsmål** → viser ettertenksomhet
- **I stedet for «ehh» og «hmm»** → virker tryggere og mer kompetent

Barack Obama var kjent for sin effektive bruk av pauser i taler, mens stand-up-komikere bruker «timing» (pauser) som sitt viktigste verktøy.`,
    },
    {
      id: 'kk-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-2-4-ex-2',
        number: '2.4.2',
        type: 'classic',
        task: 'Si setningen «Jeg synes dette er en veldig god idé» på tre forskjellige måter (endre tonefall, tempo eller volum). Beskriv skriftlig hva du gjør med stemmen for hver versjon, og hva budskapet blir.',
        hints: ['Prøv ekte entusiasme, sarkasme og forsiktig usikkerhet'],
        solution: 'Eksempel: 1) Entusiastisk - raskt tempo, stigende tonefall, høyere volum, trykk på «veldig god» → man er genuint begeistret. 2) Sarkastisk - dratt ut «veldig», flatt tonefall, muligens et sukk → man mener det motsatte. 3) Forsiktig - langsomt tempo, lavt volum, stigende tonefall mot slutten → man er usikker og søker bekreftelse.',
      },
    },
    {
      id: 'kk-2-4-text-3',
      type: 'text',
      content: `### Stemmekvalitet

Stemmekvalitet handler om klangen i stemmen - det som gjør at vi kan kjenne igjen en person på stemmen alene.

**Aspekter ved stemmekvalitet:**
- **Klang/resonans:** Dyp vs. lys stemme. Dypere stemmer assosieres ofte med autoritet og troverdighet (noe som er en stereotypi, men som påvirker oss ubevisst)
- **Nasalitet:** En nasal stemme (gjennom nesen) kan oppfattes som irriterende eller klagende
- **Pustete stemme:** Kan signalisere intimitet, spenning eller utmattelse
- **Knirkete stemme (vocal fry):** Lav, knirkende stemme som har blitt vanligere blant unge, særlig i USA

**Stemmen som identitetsmarkør:**
Stemmen er ikke bare et kommunikasjonsverktøy - den er en del av identiteten vår. Vi endrer ofte stemme etter situasjonen: vi snakker annerledes med sjefen enn med bestekompisen, med babyen enn med kollegaen. Denne tilpasningen kalles **stemmekodeskifte**.`,
    },
    {
      id: 'kk-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-2-4-ex-3',
        number: '2.4.3',
        type: 'multiple-choice',
        task: 'Hva er den viktigste funksjonen til pauser i en tale?',
        options: [
          { id: 'a', text: 'Å gi taleren tid til å puste', isCorrect: false },
          { id: 'b', text: 'Å skape spenning, understreke poenger og gi lytteren tid til å fordøye', isCorrect: true },
          { id: 'c', text: 'Å fylle tid når taleren har glemt teksten', isCorrect: false },
          { id: 'd', text: 'Å gi publikum mulighet til å klappe', isCorrect: false },
        ],
        solution: 'Pauser er strategiske verktøy i kommunikasjon. De brukes til å skape spenning før viktige poenger, understreke det som nettopp ble sagt, gi lytteren tid til å tenke, og virke tryggere og mer kontrollert.',
      },
    },
    {
      id: 'kk-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Paralingvistikk** handler om tonefall, tempo, volum, pauser og stemmekvalitet
- **Tonefall** kan endre meningsinnholdet i en setning fullstendig
- **Tempo og volum** signaliserer følelser, holdninger og status
- **Pauser** er strategiske verktøy for å skape spenning og tydelighet
- **Stemmekvalitet** er en del av identiteten vår og varierer med kontekst

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Paralingvistikk | Stemmebruk utover selve ordene |
| Intonasjon | Tonefall - melodien i talen |
| Stemmekodeskifte | Å tilpasse stemmen etter situasjonen |
| Pauser | Bevisst stillhet som kommunikasjonsverktøy |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Lytt til en kort tale eller podcast (2-3 minutter). Analyser talerens bruk av tonefall, tempo, pauser og volum. Hvordan påvirker stemmebruken budskapet?',
        hints: ['Du kan bruke en TED Talk, en nyhetsopplesning eller en podcast-episode'],
        solution: 'Et godt svar beskriver konkret stemmebruk: f.eks. «Taleren brukte lange pauser før hovedpoengene, noe som skapte spenning. Tempoet økte da hun snakket om noe hun var engasjert i. Hun senket volumet for å trekke lytteren inn.» Svaret bør knytte observasjonene til virkningen på budskapet.',
      },
    },
    {
      id: 'kk-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-2-4-ex-5',
        number: '2.4.5',
        type: 'multiple-choice',
        task: 'Hva er «stemmekodeskifte»?',
        options: [
          { id: 'a', text: 'Å bytte mellom to språk i en samtale', isCorrect: false },
          { id: 'b', text: 'Å tilpasse stemmen sin etter situasjonen og samtalepartneren', isCorrect: true },
          { id: 'c', text: 'Å miste stemmen på grunn av forkjølelse', isCorrect: false },
          { id: 'd', text: 'Å imitere andres stemme for å gjøre narr av dem', isCorrect: false },
        ],
        solution: 'Stemmekodeskifte er den naturlige tilpasningen av stemmen vår etter situasjonen. Vi snakker annerledes med sjefen enn med venner, med babyer enn med voksne, i et jobbintervju enn på en fest.',
      },
    },
    {
      id: 'kk-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        task: 'Reflekter over ditt eget stemmekodeskifte. Beskriv minst to situasjoner der du bevisst eller ubevisst endrer stemmen din, og forklar hvorfor.',
        solution: 'Eksempel: «Når jeg snakker med læreren min, bruker jeg et roligere tempo og mer nøytralt tonefall enn når jeg er med vennene mine. Med venner snakker jeg raskere, med mer variasjon og slang. Når jeg snakker i telefonen med mormor, snakker jeg saktere og tydeligere, og med varmere tonefall.» Svaret viser bevissthet om at vi tilpasser stemmen etter relasjon, kontekst og formål.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Samspill mellom verbal og nonverbal kommunikasjon
// ============================================================================

export const CHAPTER_KOMKULT_1_2_5: TextbookChapter = {
  id: 'komkult-1-2-5',
  courseId: 'komkult-1',
  chapterNumber: '2.5',
  title: 'Samspill mellom verbal og nonverbal kommunikasjon',
  description: 'En utforskning av hvordan verbal og nonverbal kommunikasjon virker sammen, med fokus på kongruent og inkongruent kommunikasjon, dobbeltkommunikasjon og hvordan vi tolker motstridende signaler.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere samspillet mellom verbal og nonverbal kommunikasjon',
    'drøfte konsekvenser av inkongruent kommunikasjon',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk-2-5-intro',
      type: 'text',
      content: `## Når ord og kropp snakker sammen - eller mot hverandre

Kommunikasjon fungerer best når ord og kroppsspråk sender samme budskap. Men hva skjer når ordene sier én ting og kroppen sier noe annet? Hvem «tror» vi på? Og hva gjør det med relasjonen mellom mennesker?

I dette kapittelet skal du lære:
- Hvordan verbal og nonverbal kommunikasjon utfyller hverandre
- Forskjellen mellom kongruent og inkongruent kommunikasjon
- Hva dobbeltkommunikasjon er og hvorfor det er skadelig
- Hvordan vi tolker motstridende signaler`,
    },
    {
      id: 'kk-2-5-def-1',
      type: 'definition',
      title: 'Kongruent kommunikasjon',
      content: `**Kongruent kommunikasjon** betyr at det verbale budskapet (ordene) og det nonverbale budskapet (kroppsspråk, stemme, ansiktsuttrykk) stemmer overens og forsterker hverandre. Når noen sier «Jeg er glad for å se deg» med et varmt smil, åpne armer og entusiastisk stemme, er kommunikasjonen kongruent. Kongruens skaper tillit og troverdighet.`,
    },
    {
      id: 'kk-2-5-text-1',
      type: 'text',
      content: `### Hvordan verbal og nonverbal kommunikasjon virker sammen

Nonverbal kommunikasjon kan forholde seg til den verbale på flere måter:

**1. Repetere (gjenta)**
Kroppsspråket gjentar det verbale. Du sier «Nei» og rister på hodet.

**2. Utfylle (komplementere)**
Kroppsspråket legger til noe ekstra. Du sier «Jeg hadde det fint» med et stort smil og strålende øyne.

**3. Fremheve (aksentuere)**
Kroppsspråket understreker et poeng. Du slår i bordet mens du sier «Nok er nok!»

**4. Regulere**
Kroppsspråket styrer samtaleflyt. Du nikker for å vise at den andre kan fortsette å snakke.

**5. Erstatte (substituere)**
Kroppsspråket erstatter ord. Du trekker på skuldrene i stedet for å si «Jeg vet ikke».

**6. Motsi (kontradikere)**
Kroppsspråket sier det motsatte av ordene. Du sier «Jeg er helt rolig» med skjelvende stemme og urolige hender.

Det er det sjette punktet - når verbal og nonverbal kommunikasjon motstrider hverandre - som skaper problemer.`,
    },
    {
      id: 'kk-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Kongruent vs. inkongruent kommunikasjon',
      problem: 'En lærer forteller elevene at de har gjort en fantastisk jobb med prosjektet sitt. Sammenlign en kongruent og en inkongruent versjon.',
      solution: `**Kongruent versjon:**
- Læreren smiler bredt og har øyekontakt
- Stemmen er varm og entusiastisk
- Gestikulerer åpent og nikker anerkjennende
- Lener seg fremover mot elevene
- Elevene føler seg verdsatt og stolte

**Inkongruent versjon:**
- Læreren sier ordene mens hen ser på papirene sine
- Stemmen er flat og monoton
- Armene er krysset foran brystet
- Sukker lett før hen snakker
- Elevene føler at læreren egentlig ikke mener det

Når kommunikasjonen er inkongruent, stoler mottakeren typisk mest på den nonverbale delen - altså ansiktet, stemmen og kroppen.`,
    },
    {
      id: 'kk-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hva betyr kongruent kommunikasjon?',
        options: [
          { id: 'a', text: 'At man bruker formelt språk i formelle situasjoner', isCorrect: false },
          { id: 'b', text: 'At det verbale og nonverbale budskapet stemmer overens', isCorrect: true },
          { id: 'c', text: 'At man snakker samme språk som mottakeren', isCorrect: false },
          { id: 'd', text: 'At man bruker mange gester mens man snakker', isCorrect: false },
        ],
        solution: 'Kongruent kommunikasjon betyr at ordene (verbal) og kroppsspråk, stemme og ansiktsuttrykk (nonverbal) sender samme budskap. Det skaper tillit og troverdighet.',
      },
    },
    {
      id: 'kk-2-5-def-2',
      type: 'definition',
      title: 'Dobbeltkommunikasjon',
      content: `**Dobbeltkommunikasjon** (også kalt dobbeltbinding eller «double bind») oppstår når noen sender to motstridende budskap samtidig, og mottakeren ikke kan tilfredsstille begge. Begrepet ble utviklet av antropologen Gregory Bateson. Et klassisk eksempel er en forelder som sier «Kom og gi meg en klem» med en avvisende kroppsholdning. Barnet kan verken klemme (fordi kroppen avviser) eller la være (fordi ordene oppfordrer). Dobbeltkommunikasjon over tid kan skade relasjoner og selvtillit.`,
    },
    {
      id: 'kk-2-5-text-2',
      type: 'text',
      content: `### Mehrabians regel - og misforståelsen

Psykologen Albert Mehrabian gjennomførte på 1960-tallet studier som ofte siteres slik:

**«93 % av kommunikasjon er nonverbal»**
- 7 % ordene
- 38 % stemmen
- 55 % kroppsspråket

Men dette er en **misforståelse** av forskningen. Mehrabian studerte bare kommunikasjon av **følelser og holdninger** (om man liker noen), ikke all kommunikasjon. Når du gir veibeskrivelse eller holder et foredrag om kvantemekanikk, er ordene selvsagt viktigere enn 7 %.

**Hva vi faktisk vet:**
- Nonverbal kommunikasjon er spesielt viktig for å uttrykke **følelser** og **holdninger**
- Når verbal og nonverbal kommunikasjon motstrider hverandre, stoler vi mest på det **nonverbale**
- Effektiv kommunikasjon krever at begge kanalene jobber **sammen**
- Forholdet mellom verbal og nonverbal varierer med **kontekst** og **innhold**`,
    },
    {
      id: 'kk-2-5-text-3',
      type: 'text',
      content: `### Inkongruens i hverdagen

Inkongruent kommunikasjon er overraskende vanlig. Her er noen dagligdagse eksempler:

**Høflighetsløgner:**
- «Så hyggelig å se deg!» (med et anstrengt smil til noen man ikke liker)
- «Maten var deilig!» (med en rynke i pannen)
- «Jeg har det bra» (med slumrende skuldre og trist stemme)

**I arbeidslivet:**
- En leder som sier «Døren min er alltid åpen» men sukker når noen kommer inn
- En kollega som sier «Selvfølgelig hjelper jeg» med tydelig irritert stemme
- En presentasjon der taleren sier «Jeg er sikker på dette» men unngår øyekontakt

**Konsekvenser av vedvarende inkongruens:**
- Mottakeren mister tillit til senderen
- Usikkerhet og forvirring
- Barn som utsettes for mye dobbeltkommunikasjon kan utvikle lav selvtillit
- Relasjoner svekkes

**Hva kan vi gjøre?** Det viktigste er å utvikle **selvbevissthet** om egen kommunikasjon. Å legge merke til egne følelser og enten uttrykke dem ærlig eller akseptere at man velger å ikke dele dem - uten å sende motstridende signaler.`,
    },
    {
      id: 'kk-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        task: 'Hva sier Mehrabians forskning egentlig?',
        options: [
          { id: 'a', text: 'At 93 % av all kommunikasjon er nonverbal', isCorrect: false },
          { id: 'b', text: 'At nonverbal kommunikasjon er viktigst når vi uttrykker følelser og holdninger', isCorrect: true },
          { id: 'c', text: 'At ord er helt uviktige i kommunikasjon', isCorrect: false },
          { id: 'd', text: 'At kroppsspråk aldri lyver', isCorrect: false },
        ],
        solution: 'Mehrabians forskning gjaldt bare kommunikasjon av følelser og holdninger, ikke all kommunikasjon. Den viser at vi stoler mer på det nonverbale enn ordene når noen uttrykker følelser - særlig når verbal og nonverbal kommunikasjon motstrider hverandre.',
      },
    },
    {
      id: 'kk-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Dobbeltkommunikasjon',
      problem: 'En forelder sier til barnet: «Du kan fortelle meg hva som helst - jeg blir aldri sint.» Men da barnet fortalte at det fikk dårlig karakter, sukket forelderen tungt, fikk stramme lepper og gikk ut av rommet. Hva er problemet her?',
      solution: `**Problemet er dobbeltkommunikasjon:**

**Verbalt budskap:** «Du kan fortelle meg alt, jeg blir ikke sint»
**Nonverbalt budskap:** Sukk, stramme lepper, forlater rommet → sinne eller skuffelse

**Konsekvensen for barnet:**
- Barnet får motstridende signaler
- Det stoler mest på det nonverbale (forelderen ble tydelig sint)
- Neste gang vil barnet nøle med å fortelle noe negativt
- Over tid kan barnet lære å skjule informasjon eller miste tillit til forelderens ord

**Hva hadde vært bedre?**
Forelderen kunne sagt: «Takk for at du fortalte meg det. Jeg merker at jeg blir litt skuffet, men det er fint at du er ærlig med meg. La oss snakke om det.» Da er kommunikasjonen kongruent - ordene matcher følelsene.`,
    },
    {
      id: 'kk-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        task: 'Gi tre eksempler på inkongruent kommunikasjon fra hverdagen. For hvert eksempel: beskriv hva som sies (verbalt), hva kroppen sier (nonverbalt), og hvordan mottakeren sannsynligvis tolker det.',
        hints: ['Tenk på situasjoner der noen sier de har det bra men viser noe annet'],
        solution: 'Eksempler: 1) En venn sier «Jeg er ikke sur» med sammenbitte tenner og korslagte armer → mottakeren tolker at vedkommende absolutt er sur. 2) En ansatt sier «Spennende prosjekt!» med flatt blikk og monoton stemme → kollegaene forstår at hen ikke synes det er spennende. 3) Noen sier «Ta den tiden du trenger» mens de ser demonstrativt på klokken → mottakeren skynder seg.',
      },
    },
    {
      id: 'kk-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Nonverbal kommunikasjon kan **repetere, utfylle, fremheve, regulere, erstatte** eller **motsi** det verbale
- **Kongruent kommunikasjon** betyr at ord og kroppsspråk sender samme budskap
- **Inkongruent kommunikasjon** betyr motstridende signaler - vi stoler mest på det nonverbale
- **Dobbeltkommunikasjon** er en alvorlig form for inkongruens som kan skade relasjoner
- **Mehrabians regel** gjelder bare følelser og holdninger, ikke all kommunikasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kongruent | Ord og kroppsspråk sender samme budskap |
| Inkongruent | Ord og kroppsspråk motstrider hverandre |
| Dobbeltkommunikasjon | Motstridende budskap der mottakeren ikke kan vinne |
| Mehrabians regel | Nonverbal dominerer ved uttrykk av følelser |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'kk-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Gjennomfør et rollespill i par: Den ene skal si noe positivt (f.eks. «Denne maten er fantastisk!») med negativt kroppsspråk. Den andre skal beskrive hva de oppfatter. Bytt roller. Diskuter etterpå: Hva stoler vi mest på - ordene eller kroppen?',
        solution: 'Et godt svar reflekterer over at mottakeren nesten alltid stoler mest på det nonverbale. Øvelsen demonstrerer dette i praksis. Man bør diskutere at dette er en evolusjonær mekanisme - kroppsspråk er vanskeligere å kontrollere enn ord, og er derfor en «ærligere» kanal. Svaret bør også nevne at konteksten spiller inn: i en vitsefortelling aksepterer vi inkongruens lettere.',
      },
    },
    {
      id: 'kk-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-5',
        number: '2.5.5',
        type: 'multiple-choice',
        task: 'Hva er en konsekvens av vedvarende dobbeltkommunikasjon i en relasjon?',
        options: [
          { id: 'a', text: 'Sterkere tillit mellom partene', isCorrect: false },
          { id: 'b', text: 'Bedre kommunikasjonsferdigheter', isCorrect: false },
          { id: 'c', text: 'Forvirring, utrygghet og svekket tillit', isCorrect: true },
          { id: 'd', text: 'Ingen konsekvens - kroppen tilpasser seg', isCorrect: false },
        ],
        solution: 'Vedvarende dobbeltkommunikasjon fører til forvirring og utrygghet hos mottakeren. Barns selvtillit kan svekkes, voksne mister tillit til senderen, og relasjoner kan bli dysfunksjonelle. Det er spesielt skadelig i nære relasjoner der man ikke kan trekke seg ut.',
      },
    },
    {
      id: 'kk-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        task: 'Skriv en kort analyse (ca. 200 ord) der du drøfter: Er det noen ganger greit med inkongruent kommunikasjon? Når kan det være nødvendig eller sosialt akseptert å si noe annet enn det kroppen signaliserer?',
        hints: ['Tenk på høflighetskonvensjoner, hvite løgner og sosiale situasjoner'],
        solution: 'Et godt svar anerkjenner at inkongruent kommunikasjon noen ganger er sosialt nødvendig: høflighetsfraser («Fint å se deg»), hvite løgner for å skåne andres følelser («Kjolen er fin»), eller profesjonell fasade (å holde seg rolig i krise). Svaret bør også diskutere grensene: det er forskjell på høflig inkongruens og manipulativ dobbeltkommunikasjon. Den beste kommunikasjonen er kongruent, men total ærlighet uten filtrering kan også skade relasjoner. Nøkkelen er bevissthet om egne valg.',
      },
    },
    {
      id: 'kk-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'kk-2-5-ex-7',
        number: '2.5.7',
        type: 'multiple-choice',
        task: 'Nonverbal kommunikasjon kan forholde seg til verbal kommunikasjon på seks måter. Hvilken funksjon beskriver at du trekker på skuldrene i stedet for å si «Jeg vet ikke»?',
        options: [
          { id: 'a', text: 'Repetere', isCorrect: false },
          { id: 'b', text: 'Utfylle', isCorrect: false },
          { id: 'c', text: 'Erstatte (substituere)', isCorrect: true },
          { id: 'd', text: 'Fremheve (aksentuere)', isCorrect: false },
        ],
        solution: 'Å trekke på skuldrene i stedet for å si «Jeg vet ikke» er et eksempel på at nonverbal kommunikasjon erstatter (substituerer) verbal kommunikasjon. Gesten erstatter ordene fullstendig - budskapet formidles kun gjennom kroppsspråket.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT_1_DEL2_CHAPTERS = [
  CHAPTER_KOMKULT_1_2_1,
  CHAPTER_KOMKULT_1_2_2,
  CHAPTER_KOMKULT_1_2_3,
  CHAPTER_KOMKULT_1_2_4,
  CHAPTER_KOMKULT_1_2_5,
];

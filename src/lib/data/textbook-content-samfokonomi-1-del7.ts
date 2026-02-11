/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Samfunnsøkonomi 1 VG2 - Del 7: Internasjonal økonomi
 * Kapittel 7.1–7.5
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for årsaker til internasjonal handel og drøfte muligheter og utfordringer knyttet til økonomisk globalisering
 * - analysere hva som bestemmer valutakurser, og drøfte konsekvenser av changing i valutakurser
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Internasjonal handel
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_7_1: TextbookChapter = {
  id: 'samfokonomi-1-7-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '7.1',
  title: 'Internasjonal handel',
  description: 'Hvorfor land handler med hverandre, absolutte og komparative fortrinn, gevinster fra handel, spesialisering og bytteforhold.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for årsaker til internasjonal handel og drøfte muligheter og utfordringer knyttet til økonomisk globalisering',
  ],
  content: [
    {
      id: 'soe-7-1-intro',
      type: 'text',
      content: `## Hvorfor handler land med hverandre?

Ingen land i verden kan produsere alt de trenger like effektivt. Norge er dyktige til å utvinne olje og oppdrett av fisk, men vi er ikke spesielt gode til å dyrke bananer eller produsere halvledere. Internasjonal handel gjør det mulig for land å spesialisere seg på det de er best til, og bytte til seg andre varer og tjenester fra utlandet.

I dette kapittelet skal du lære:
- Hva som motiverer internasjonal handel
- Forskjellen mellom absolutt og komparativt fortrinn
- Hvordan spesialisering gir gevinster for begge parter
- Hva bytteforholdet (terms of trade) betyr`,
    },
    {
      id: 'soe-7-1-def-1',
      type: 'definition',
      title: 'Internasjonal handel',
      content: `**Internasjonal handel** er kjøp og salg av varer og tjenester mellom land. Eksporten er det et land selger til utlandet, mens importen er det landet kjøper fra utlandet. Differansen mellom eksport og import kalles handelsbalansen.`,
    },
    {
      id: 'soe-7-1-text-1',
      type: 'text',
      content: `### Absolutt fortrinn

Et land har **absolutt fortrinn** i produksjon av en vare dersom det kan produsere varen med færre ressurser enn et annet land. Tenk deg to land: Norge og Spania. Hvis Norge kan produsere 10 tonn laks per arbeidstime, mens Spania bare kan produsere 3 tonn, har Norge et absolutt fortrinn i lakseproduksjon. Omvendt kan Spania kanskje produsere 8 tonn appelsiner per arbeidstime, mens Norge bare kan produsere 1 tonn. Da har Spania absolutt fortrinn i appelsinproduksjon.

Adam Smith var blant de første som forklarte hvordan absolutte fortrinn motiverer handel mellom land. Hvis hvert land spesialiserer seg i den varen det produserer mest effektivt, kan begge land ende opp med mer av begge varer gjennom handel.`,
    },
    {
      id: 'soe-7-1-def-2',
      type: 'definition',
      title: 'Absolutt fortrinn',
      content: `Et land har **absolutt fortrinn** i produksjonen av en vare dersom det kan produsere varen med lavere ressursbruk (færre arbeidstimer, lavere kostnader) enn et annet land. Adam Smiths teori om absolutte fortrinn forklarer den enkleste formen for handelsgevinst.`,
    },
    {
      id: 'soe-7-1-example-1',
      type: 'example',
      title: 'Absolutt fortrinn mellom Norge og Spania',
      problem: 'Norge kan produsere 10 tonn laks eller 2 tonn appelsiner per arbeidsdag. Spania kan produsere 4 tonn laks eller 8 tonn appelsiner per arbeidsdag. Hvem har absolutt fortrinn i hva?',
      solution: `**Norge** har absolutt fortrinn i **laks** (10 > 4 tonn per dag).

**Spania** har absolutt fortrinn i **appelsiner** (8 > 2 tonn per dag).

Hvis landene spesialiserer seg og handler, kan begge få mer av begge varer enn om de skulle produsert alt selv.`,
    },
    {
      id: 'soe-7-1-text-2',
      type: 'text',
      content: `### Komparativt fortrinn

David Ricardo videreutviklet teorien og viste at handel er lønnsomt selv når et land har absolutt fortrinn i produksjon av begge varer. Det avgjørende er **alternativkostnaden** – hva du må gi opp av den ene varen for å produsere mer av den andre.

Et land har **komparativt fortrinn** i produksjonen av en vare dersom alternativkostnaden ved å produsere den varen er lavere enn i det andre landet. Selv om et land er bedre på alt, lønner det seg å spesialisere seg der alternativkostnaden er lavest.`,
    },
    {
      id: 'soe-7-1-def-3',
      type: 'definition',
      title: 'Komparativt fortrinn',
      content: `Et land har **komparativt fortrinn** i produksjonen av en vare når alternativkostnaden ved å produsere den varen er lavere enn i andre land. Alternativkostnaden er verdien av den beste alternative bruken av ressursene. Ricardos teori om komparative fortrinn viser at handel er gjensidig lønnsomt selv når ett land er mer effektivt i all produksjon.`,
    },
    {
      id: 'soe-7-1-example-2',
      type: 'example',
      title: 'Komparativt fortrinn med alternativkostnad',
      problem: 'Land A kan produsere 100 biler eller 200 tonn hvete per år. Land B kan produsere 40 biler eller 120 tonn hvete per år. Hvem har komparativt fortrinn i hva?',
      solution: `**Alternativkostnader:**

Land A:
- 1 bil koster 200/100 = 2 tonn hvete
- 1 tonn hvete koster 100/200 = 0,5 bil

Land B:
- 1 bil koster 120/40 = 3 tonn hvete
- 1 tonn hvete koster 40/120 = 0,33 bil

**Land A** har komparativt fortrinn i **biler** (alternativkostnad 2 < 3 tonn hvete).
**Land B** har komparativt fortrinn i **hvete** (alternativkostnad 0,33 < 0,5 bil).

Selv om Land A er bedre til å produsere begge varer (absolutt fortrinn i begge), lønner det seg for begge å spesialisere seg etter komparativt fortrinn og handle.`,
    },
    {
      id: 'soe-7-1-text-3',
      type: 'text',
      content: `### Gevinster fra handel og spesialisering

Når land spesialiserer seg etter sine komparative fortrinn og handler, oppstår det **handelsgevinster**. Total produksjon i verden øker, og begge land kan konsumere mer enn de kunne uten handel. Dette er et av de mest sentrale resultatene i økonomisk teori.

Spesialisering betyr ikke at et land bare produserer én vare. Det betyr at landet retter en større andel av ressursene mot de varene det har komparativt fortrinn i. I praksis påvirkes handelsmønstre også av:
- **Naturressurser** (olje, mineraler, jordbruksareal)
- **Humankapital** (utdanningsnivå, kompetanse)
- **Teknologi** og innovasjon
- **Stordriftsfordeler** i produksjonen
- **Geografi** og transportkostnader`,
    },
    {
      id: 'soe-7-1-def-4',
      type: 'definition',
      title: 'Bytteforhold (terms of trade)',
      content: `**Bytteforholdet** (terms of trade) er forholdet mellom prisene på et lands eksportvarer og prisene på dets importvarer. Bytteforholdet forbedres når eksportprisene stiger relativt til importprisene, og forverres når importprisene stiger relativt til eksportprisene. Formel: Bytteforhold = (Eksportprisindeks / Importprisindeks) × 100.`,
    },
    {
      id: 'soe-7-1-example-3',
      type: 'example',
      title: 'Norges bytteforhold og oljepris',
      problem: 'Hvordan påvirker endringer i oljeprisen Norges bytteforhold?',
      solution: `Olje og gass er Norges viktigste eksportvarer. Når oljeprisen stiger, øker verdien av norsk eksport relativt til importen. Bytteforholdet forbedres, og Norge kan kjøpe mer import for hver enhet eksport.

Eksempel: Hvis oljeprisen dobles fra 50 til 100 dollar fatet, og importprisene er uendret, kan Norge kjøpe dobbelt så mange importvarer for samme mengde eksportert olje. Dette gir økt velstand og høyere inntekter til staten gjennom oljefondet.

Motsatt: Hvis oljeprisen faller kraftig (som i 2014-2015), forverres Norges bytteforhold, og vi får mindre importvarer for samme mengde olje.`,
    },
    {
      id: 'soe-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva menes med at et land har komparativt fortrinn i produksjon av en vare?',
        options: [
          { id: 'a', text: 'Landet kan produsere varen billigst i verden', isCorrect: false },
          { id: 'b', text: 'Landet har lavest alternativkostnad ved å produsere varen', isCorrect: true },
          { id: 'c', text: 'Landet eksporterer mest av varen i verden', isCorrect: false },
          { id: 'd', text: 'Landet bruker flest arbeidstimer på varen', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Komparativt fortrinn handler om alternativkostnad, ikke absolutt effektivitet. Et land har komparativt fortrinn når det har lavere alternativkostnad enn andre land ved produksjon av varen.',
      },
    },
    {
      id: 'soe-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Land X kan produsere 50 stoler eller 100 bord per dag. Land Y kan produsere 30 stoler eller 30 bord per dag. Hva er alternativkostnaden for 1 stol i Land X?',
        options: [
          { id: 'a', text: '0,5 bord', isCorrect: false },
          { id: 'b', text: '1 bord', isCorrect: false },
          { id: 'c', text: '2 bord', isCorrect: true },
          { id: 'd', text: '50 bord', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Land X kan produsere 50 stoler eller 100 bord. Alternativkostnaden for 1 stol = 100/50 = 2 bord. For å lage 1 stol må Land X gi opp produksjonen av 2 bord.',
      },
    },
    {
      id: 'soe-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom absolutt fortrinn og komparativt fortrinn. Gi et eksempel som viser at et land kan ha komparativt fortrinn uten å ha absolutt fortrinn.',
        hints: ['Tenk på alternativkostnad, ikke bare produktivitet', 'Bruk tall for å vise forskjellen'],
        solution: 'Absolutt fortrinn betyr at et land kan produsere en vare med færre ressurser enn et annet land. Komparativt fortrinn betyr at et land har lavere alternativkostnad ved produksjon av varen. Eksempel: Kina kan produsere både ris (100 tonn/dag) og klær (200 tonn/dag), mens Vietnam produserer ris (20 tonn/dag) og klær (30 tonn/dag). Kina har absolutt fortrinn i begge varer. Men alternativkostnaden for 1 tonn ris i Kina er 2 tonn klær, mens i Vietnam er den 1,5 tonn klær. Vietnam har altså komparativt fortrinn i ris til tross for lavere produktivitet.',
      },
    },
    {
      id: 'soe-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Drøft hvordan Norges store oljeinntekter påvirker bytteforholdet og velstanden i landet.',
        hints: ['Tenk på hva som skjer når oljeprisen endres', 'Vurder både fordeler og ulemper med å være avhengig av én eksportvare'],
        solution: 'Norges bytteforhold er sterkt knyttet til oljeprisen. Når oljeprisen er høy, forbedres bytteforholdet, og Norge kan importere mer for hver enhet eksport. Dette gir økt velstand, høyere statsinntekter og vekst i oljefondet. Ulempene er at Norge blir sårbar for prisfall, og at høy oljepris kan føre til «hollandsk syke» der andre eksportnæringer svekkes fordi lønns- og kostnadsnivået presses opp.',
      },
    },
    {
      id: 'soe-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-7-1-ex-5',
        number: '7.1.5',
        type: 'multiple-choice',
        task: 'Hva skjer med et lands bytteforhold hvis eksportprisene øker med 20 % mens importprisene er uendret?',
        options: [
          { id: 'a', text: 'Bytteforholdet forverres med 20 %', isCorrect: false },
          { id: 'b', text: 'Bytteforholdet forbedres med 20 %', isCorrect: true },
          { id: 'c', text: 'Bytteforholdet er uendret', isCorrect: false },
          { id: 'd', text: 'Bytteforholdet forbedres med 10 %', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Bytteforholdet = (Eksportprisindeks / Importprisindeks) × 100. Hvis eksportprisene øker med 20 % og importprisene er uendret, blir bytteforholdet (120/100) × 100 = 120, altså en forbedring på 20 prosentpoeng.',
      },
    },
    {
      id: 'soe-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'Gi tre eksempler på norske næringer som har komparativt fortrinn internasjonalt, og forklar hvorfor.',
        hints: ['Tenk på naturressurser, kompetanse og teknologi'],
        solution: '1) Oppdrettsnæringen – Norge har lang kystlinje, kaldt rent vann, og har bygget opp verdensledende teknologi og kompetanse innen lakseoppdrett. 2) Olje- og gassindustrien – Norge har store ressurser på sokkelen og har utviklet avansert teknologi for dypvannsutvinning. 3) Skipsfart og maritim industri – Norges geografiske beliggenhet og lange sjøfartstradisjon har gitt komparativt fortrinn i internasjonal shipping.',
      },
    },
    {
      id: 'soe-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Internasjonal handel** oppstår fordi land har ulike forutsetninger for produksjon
- **Absolutt fortrinn** betyr at et land produserer en vare mer effektivt enn andre
- **Komparativt fortrinn** betyr at et land har lavere alternativkostnad, og er den viktigste forklaringen på handel
- **Spesialisering** etter komparative fortrinn gir handelsgevinster for begge parter
- **Bytteforholdet** måler forholdet mellom eksport- og importpriser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Absolutt fortrinn | Kan produsere med færre ressurser enn andre land |
| Komparativt fortrinn | Lavere alternativkostnad enn andre land |
| Alternativkostnad | Verdien av det man gir opp |
| Bytteforhold | Forholdet mellom eksport- og importpriser |
| Spesialisering | Å konsentrere produksjonen om det man er relativt best til |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Handelspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_7_2: TextbookChapter = {
  id: 'samfokonomi-1-7-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '7.2',
  title: 'Handelspolitikk',
  description: 'Frihandel versus proteksjonisme, tollbarrierer, kvoter, WTO og handelsavtaler som EØS og EU.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for årsaker til internasjonal handel og drøfte muligheter og utfordringer knyttet til økonomisk globalisering',
  ],
  content: [
    {
      id: 'soe-7-2-intro',
      type: 'text',
      content: `## Frihandel eller beskyttelse?

Selv om økonomisk teori viser at frihandel gir gevinster, har de fleste land politiske virkemidler som begrenser handelen. Regjeringer bruker toll, kvoter og andre tiltak for å beskytte innenlandsk industri, sikre arbeidsplasser eller nå andre politiske mål. I dette kapittelet utforsker vi spenningen mellom frihandel og proteksjonisme.

I dette kapittelet skal du lære:
- Argumenter for og mot frihandel
- Hva toll, kvoter og subsidier er
- Hvordan WTO arbeider for friere handel
- Norges tilknytning til EU gjennom EØS-avtalen`,
    },
    {
      id: 'soe-7-2-def-1',
      type: 'definition',
      title: 'Frihandel',
      content: `**Frihandel** innebærer at varer og tjenester kan handles fritt mellom land uten hindringer som toll, kvoter eller andre restriksjoner. I en ideell frihandelssituasjon bestemmes handelsmønstre utelukkende av tilbud og etterspørsel i markedet.`,
    },
    {
      id: 'soe-7-2-text-1',
      type: 'text',
      content: `### Argumenter for frihandel

Tilhengere av frihandel peker på flere fordeler:

1. **Effektiv ressursbruk** – Land spesialiserer seg etter komparative fortrinn, og verdens samlede produksjon øker.
2. **Lavere priser** – Konkurranse fra utlandet presser prisene ned til fordel for forbrukerne.
3. **Større utvalg** – Forbrukerne får tilgang til et bredere sortiment av varer og tjenester.
4. **Innovasjon** – Internasjonal konkurranse tvinger bedrifter til å fornye seg og bli mer produktive.
5. **Økonomisk vekst** – Historisk har land med åpne økonomier hatt høyere vekst enn lukkede økonomier.`,
    },
    {
      id: 'soe-7-2-def-2',
      type: 'definition',
      title: 'Proteksjonisme',
      content: `**Proteksjonisme** er en handelspolitikk der staten bruker virkemidler som toll, kvoter, subsidier og tekniske handelshindringer for å beskytte innenlandsk produksjon mot utenlandsk konkurranse.`,
    },
    {
      id: 'soe-7-2-text-2',
      type: 'text',
      content: `### Argumenter for proteksjonisme

Tilhengere av beskyttelsestiltak argumenterer med:

1. **Beskytte arbeidsplasser** – Hindre at bedrifter legges ned på grunn av billig import.
2. **Ny industri** – Gi unge næringer tid til å vokse seg konkurransedyktige (infant industry-argumentet).
3. **Nasjonal sikkerhet** – Sikre innenlandsk produksjon av strategisk viktige varer (mat, energi, forsvar).
4. **Miljøhensyn** – Hindre import av varer produsert under dårlige miljøstandarder.
5. **Sosial dumping** – Beskytte mot konkurranse fra land med svært lave lønninger og dårlige arbeidsforhold.

### Virkemidler i handelspolitikken

**Toll** er en avgift som legges på importerte varer. Den gjør importvarene dyrere og beskytter dermed innenlandske produsenter. Tollen betales av importøren, men veltes vanligvis over på forbrukeren gjennom høyere priser.

**Kvoter** er mengdebegrensninger som setter en øvre grense for hvor mye av en vare som kan importeres i en gitt periode.

**Subsidier** til innenlandske produsenter gjør det mulig for dem å selge billigere og dermed konkurrere med import.

**Tekniske handelshindringer** er krav til standarder, sertifiseringer og godkjenninger som kan gjøre det vanskelig for utenlandske produsenter å selge i markedet.`,
    },
    {
      id: 'soe-7-2-example-1',
      type: 'example',
      title: 'Norsk landbrukspolitikk som proteksjonisme',
      problem: 'Hvordan bruker Norge handelspolitiske virkemidler for å beskytte norsk landbruk?',
      solution: `Norge bruker en kombinasjon av virkemidler:

1. **Høy toll** – Importtollen på mange landbruksprodukter er svært høy. For eksempel er tollen på ost opptil 277 %, noe som gjør importert ost mye dyrere enn norskprodusert.

2. **Importkvoter** – Det finnes begrensede kvoter for tollfri eller lavtolls import av visse varer.

3. **Subsidier** – Norske bønder mottar betydelige statlige tilskudd (over 20 milliarder kroner årlig) som gjør det mulig å opprettholde produksjon til tross for høye kostnader.

Resultatet er at norske forbrukere betaler høyere matvarepriser, men til gjengjeld opprettholdes norsk matproduksjon, bosetting i distriktene og beredskap.`,
    },
    {
      id: 'soe-7-2-text-3',
      type: 'text',
      content: `### WTO – Verdens handelsorganisasjon

**WTO** (World Trade Organization) ble opprettet i 1995 og har som mål å fremme fri og rettferdig handel mellom land. Organisasjonen har over 160 medlemsland og er basert på prinsipper som:

- **Bestevilkårsbehandling** – Handelsfordeler gitt til ett land skal gis til alle WTO-medlemmer.
- **Nasjonal behandling** – Importvarer skal behandles likt med innenlandske varer.
- **Gjennomsiktighet** – Handelsregler skal være åpne og forutsigbare.
- **Tvisteløsning** – WTO har et system for å løse handelskonflikter mellom land.

### Regionale handelsavtaler

Ved siden av WTO finnes det mange regionale handelsavtaler:

**EU (Den europeiske union)** er verdens mest integrerte handelsområde med felles marked, felles tollsatser utad og fri bevegelse av varer, tjenester, kapital og arbeidskraft.

**EØS-avtalen** (Det europeiske økonomiske samarbeidsområdet) gir Norge, Island og Liechtenstein tilgang til EUs indre marked. Norge er dermed del av det frie markedet for varer, tjenester, kapital og arbeidskraft, men er ikke med i EUs tollunion og har unntak for landbruk og fisk.

**EFTA** (European Free Trade Association) er Norges samarbeid med Island, Liechtenstein og Sveits, og forhandler frihandelsavtaler med land utenfor EU.`,
    },
    {
      id: 'soe-7-2-example-2',
      type: 'example',
      title: 'EØS-avtalens betydning for norsk næringsliv',
      problem: 'Hvorfor er EØS-avtalen viktig for norsk eksport?',
      solution: `EØS-avtalen sikrer norsk næringsliv tilgang til et marked med over 450 millioner mennesker. Rundt 80 % av norsk eksport går til EU-land. Uten EØS-avtalen ville norske bedrifter møtt toll og andre barrierer på sine viktigste eksportmarkeder.

Konkrete fordeler:
- Norsk laks kan eksporteres tollfritt til EU
- Norske industriprodukter konkurrerer på like vilkår med EU-produsenter
- Norske arbeidstakere kan fritt ta arbeid i EU-land
- Norske bedrifter kan delta i offentlige anskaffelser i EU

Ulempen er at Norge må innføre EUs regelverk for det indre markedet uten full stemmerett i beslutningsprosessene.`,
    },
    {
      id: 'soe-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom toll og kvoter som handelspolitisk virkemiddel?',
        options: [
          { id: 'a', text: 'Toll øker prisen på importvarer, mens kvoter begrenser mengden som kan importeres', isCorrect: true },
          { id: 'b', text: 'Toll er lovlig etter WTO-reglene, men kvoter er det ikke', isCorrect: false },
          { id: 'c', text: 'Toll gjelder bare industrivarer, mens kvoter gjelder bare matvarer', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell – begge har samme effekt', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Toll er en avgift som gjør importvarer dyrere, mens kvoter setter en absolutt mengdebegrensning. Begge kan brukes til å beskytte innenlandsk produksjon, men de virker på ulike måter.',
      },
    },
    {
      id: 'soe-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved Norges høye tollbeskyttelse av landbrukssektoren.',
        hints: ['Vurder effekten for bønder, forbrukere og samfunnet som helhet', 'Tenk på matsikkerhet, bosetting og priser'],
        solution: 'Fordeler: Opprettholder norsk matproduksjon og matsikkerhet, bevarer bosetting i distriktene, sikrer kulturlandskapet, gir arbeidsplasser i landbruket. Ulemper: Høyere matvarepriser for forbrukerne, kan hindre innovasjon i landbruket, store offentlige kostnader til subsidier, begrenser handelsmulighetene i WTO-forhandlinger da andre land krever at Norge reduserer sin landbruksbeskyttelse.',
      },
    },
    {
      id: 'soe-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-7-2-ex-3',
        number: '7.2.3',
        type: 'multiple-choice',
        task: 'Hva innebærer WTOs prinsipp om bestevilkårsbehandling?',
        options: [
          { id: 'a', text: 'At fattige land skal få bedre handelsbetingelser enn rike land', isCorrect: false },
          { id: 'b', text: 'At handelsfordeler gitt til ett WTO-medlem skal gis til alle medlemmer', isCorrect: true },
          { id: 'c', text: 'At alle land skal ha null toll på alle varer', isCorrect: false },
          { id: 'd', text: 'At WTO bestemmer handelspolitikken i hvert enkelt land', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Bestevilkårsbehandling (Most Favoured Nation, MFN) betyr at hvis et WTO-land gir et annet land en handelsfordel (for eksempel lavere toll), skal den fordelen automatisk gjelde for alle andre WTO-medlemmer. Unntak gjelder for regionale handelsavtaler som EU og EØS.',
      },
    },
    {
      id: 'soe-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Forklar hva EØS-avtalen innebærer for Norge, og drøft om avtalen er gunstig for norsk økonomi.',
        hints: ['Tenk på de fire frihetene', 'Vurder hva Norge får tilgang til og hva Norge gir fra seg'],
        solution: 'EØS-avtalen gir Norge tilgang til EUs indre marked med fri bevegelse av varer, tjenester, kapital og arbeidskraft. Norge må til gjengjeld implementere EUs regelverk for det indre markedet. Fordeler: Tilgang til et enormt marked, forutsigbare handelsregler, mulighet for norske arbeidere å jobbe i EU. Ulemper: Norge må følge regler de har begrenset innflytelse over, EØS-kontingent, og regelverket kan begrense norsk politisk handlingsrom. De fleste økonomer mener at EØS-avtalen er svært gunstig for norsk økonomi gitt at 80 % av eksporten går til EU.',
      },
    },
    {
      id: 'soe-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-7-2-ex-5',
        number: '7.2.5',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et argument for proteksjonisme?',
        options: [
          { id: 'a', text: 'Beskytte arbeidsplasser i innenlandsk industri', isCorrect: false },
          { id: 'b', text: 'Lavere priser for forbrukerne', isCorrect: true },
          { id: 'c', text: 'Beskytte unge næringer som trenger tid til å vokse', isCorrect: false },
          { id: 'd', text: 'Sikre nasjonal selvforsyning av strategiske varer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Lavere priser er et argument for frihandel, ikke proteksjonisme. Proteksjonisme fører typisk til høyere priser for forbrukerne fordi konkurransen fra billig import reduseres.',
      },
    },
    {
      id: 'soe-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-7-2-ex-6',
        number: '7.2.6',
        type: 'classic',
        task: 'I 2018 innførte USA høy toll på stål og aluminium fra mange land, inkludert EU. EU svarte med straffetoll på amerikanske varer. Forklar hvordan en slik «handelskrig» kan påvirke begge parters økonomi.',
        hints: ['Tenk på konsekvenser for produsenter, forbrukere og handelsvolum'],
        solution: 'En handelskrig skader begge parter. I USA ble stål dyrere for amerikanske bilprodusenter og byggebransjen, noe som økte kostnadene og presset opp prisene for forbrukerne. EUs mottiltak rammet amerikanske bønder og produsenter som mistet markedsandeler. Begge sider opplevde redusert handelsvolum, dyrere innsatsfaktorer, usikkerhet for bedrifter, og svakere økonomisk vekst. Handelskriger illustrerer hvorfor WTO og multilateralt samarbeid er viktig.',
      },
    },
    {
      id: 'soe-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Frihandel** gir effektiv ressursbruk, lavere priser og større utvalg
- **Proteksjonisme** bruker toll, kvoter og subsidier for å beskytte innenlandsk produksjon
- **WTO** arbeider for å fremme fri og rettferdig handel mellom land
- **EØS-avtalen** gir Norge tilgang til EUs indre marked med de fire friheter
- Det finnes gode argumenter på begge sider av frihandelsdebatten

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Frihandel | Handel uten toll og andre hindringer |
| Proteksjonisme | Handelspolitikk som beskytter innenlandsk produksjon |
| Toll | Avgift på importerte varer |
| Kvote | Mengdebegrensning på import |
| WTO | Verdens handelsorganisasjon |
| EØS | Norges tilknytning til EUs indre marked |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Valuta og valutakurser
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_7_3: TextbookChapter = {
  id: 'samfokonomi-1-7-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '7.3',
  title: 'Valuta og valutakurser',
  description: 'Valutakurser, flytende og faste kursregimer, kjøpekraftsparitet, valutamarkedet og hva som bestemmer kronekursen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hva som bestemmer valutakurser, og drøfte konsekvenser av endringer i valutakurser',
  ],
  content: [
    {
      id: 'soe-7-3-intro',
      type: 'text',
      content: `## Valutaens rolle i internasjonal handel

Når norske bedrifter handler med utlandet, må de forholde seg til at andre land bruker andre pengeenheter. En norsk lakseksportør som selger til EU mottar betaling i euro, mens en norsk bilimportør må betale i japanske yen eller euro. Valutakursen – prisen på utenlandsk valuta – er derfor avgjørende for lønnsomheten i internasjonal handel.

I dette kapittelet skal du lære:
- Hva en valutakurs er og hvordan den noteres
- Forskjellen mellom flytende og faste valutakurser
- Hva som bestemmer valutakursen
- Kjøpekraftsparitet som langsiktig ankerfeste
- Konsekvenser av endringer i kronekursen`,
    },
    {
      id: 'soe-7-3-def-1',
      type: 'definition',
      title: 'Valutakurs',
      content: `**Valutakursen** er prisen på én valuta uttrykt i en annen valuta. I Norge noterer vi vanligvis kursen som antall kroner per enhet utenlandsk valuta. For eksempel betyr en eurokurs på 11,50 at du må betale 11,50 norske kroner for 1 euro.`,
    },
    {
      id: 'soe-7-3-text-1',
      type: 'text',
      content: `### Appresering og depresering

Når kronekursen styrker seg (appresierer), betyr det at du trenger færre kroner for å kjøpe utenlandsk valuta. For eksempel: Hvis eurokursen faller fra 11,50 til 10,50, har kronen styrket seg. Du får nå 1 euro for 10,50 kroner i stedet for 11,50.

Når kronekursen svekker seg (depresierer), trenger du flere kroner. Hvis eurokursen stiger fra 11,50 til 12,50, har kronen svekket seg.

**Sterk krone:**
- Import blir billigere (vi betaler færre kroner for utenlandske varer)
- Eksport blir dyrere for utlendinger (de må betale mer i sin valuta)
- Gunstig for nordmenn som reiser til utlandet

**Svak krone:**
- Import blir dyrere (vi betaler flere kroner)
- Eksport blir billigere for utlendinger (økt konkurranseevne)
- Gunstig for norsk eksportindustri og turisme i Norge`,
    },
    {
      id: 'soe-7-3-def-2',
      type: 'definition',
      title: 'Flytende valutakurs',
      content: `En **flytende valutakurs** (også kalt fleksibel valutakurs) bestemmes av tilbud og etterspørsel i valutamarkedet uten at sentralbanken har et mål for kursnivået. Norge har hatt flytende valutakurs siden 2001. Norges Bank griper normalt ikke inn i valutamarkedet.`,
    },
    {
      id: 'soe-7-3-text-2',
      type: 'text',
      content: `### Hva bestemmer valutakursen?

Valutakursen påvirkes av en rekke faktorer:

**1. Renteforskjeller**
Hvis renten i Norge er høyere enn i andre land, vil utenlandske investorer ønske å plassere penger i Norge for å få høyere avkastning. Etterspørselen etter norske kroner øker, og kronen styrker seg. Motsatt fører lavere rente til svakere krone.

**2. Oljeprisen**
Norge er en stor oljeeksportør. Høy oljepris betyr store valutainntekter til Norge, som øker etterspørselen etter kroner. Kronekursen har historisk fulgt oljeprisen tett.

**3. Inflasjon**
Høy inflasjon i Norge relativt til handelspartnere svekker kronens kjøpekraft og kan føre til svakere kurs over tid.

**4. Handelsbalansen**
Et land med høy eksport relativt til import har stor etterspørsel etter sin valuta, noe som styrker kursen.

**5. Forventninger og spekulasjon**
Valutamarkedet drives i stor grad av forventninger om fremtidig utvikling. Uro, usikkerhet eller endrede forventninger kan gi raske kurssvingninger.`,
    },
    {
      id: 'soe-7-3-example-1',
      type: 'example',
      title: 'Kronekursen og eksportbedrifter',
      problem: 'En norsk møbelprodusent eksporterer stoler til Tyskland for 100 euro per stol. Produksjonskostnaden er 900 kroner. Eurokursen er i dag 11,00 kr. Hva skjer med lønnsomheten dersom kronen styrkes til 10,00 kr per euro?',
      solution: `**Med eurokurs 11,00 kr:**
Inntekt per stol: 100 × 11,00 = 1 100 kr
Kostnad: 900 kr
Fortjeneste: 1 100 – 900 = **200 kr per stol**

**Med eurokurs 10,00 kr (sterkere krone):**
Inntekt per stol: 100 × 10,00 = 1 000 kr
Kostnad: 900 kr
Fortjeneste: 1 000 – 900 = **100 kr per stol**

En kronestyrking på ca. 9 % halverer fortjenesten. Dette illustrerer hvorfor eksportbedrifter er sårbare for kronestyrking – de får færre kroner for sine utenlandske inntekter mens kostnadene i kroner er de samme.`,
    },
    {
      id: 'soe-7-3-def-3',
      type: 'definition',
      title: 'Kjøpekraftsparitet (PPP)',
      content: `**Kjøpekraftsparitet** (Purchasing Power Parity, PPP) er en teori som sier at valutakursen på lang sikt vil justere seg slik at en gitt varekurv koster det samme i alle land. Hvis en Big Mac koster 59 kroner i Norge og 5,50 dollar i USA, tilsier kjøpekraftsparitet at kursen bør være ca. 10,70 kr per dollar. Avvik fra PPP kan skyldes transportkostnader, toll, ulike skatter eller at mange varer ikke handles internasjonalt.`,
    },
    {
      id: 'soe-7-3-text-3',
      type: 'text',
      content: `### Fast versus flytende valutakurs

**Fast valutakurs** betyr at sentralbanken holder valutakursen på et bestemt nivå ved å kjøpe og selge sin egen valuta i markedet. Fordelen er stabilitet og forutsigbarhet for bedrifter. Ulempen er at sentralbanken mister et viktig pengepolitisk verktøy – den kan ikke sette renten fritt, fordi renten må brukes til å forsvare den faste kursen.

**Flytende valutakurs** bestemmes av markedet. Fordelen er at sentralbanken kan føre selvstendig pengepolitikk og at kursen fungerer som en «støtdemper» – den svekkes automatisk i dårlige tider, noe som hjelper eksportbedrifter. Ulempen er usikkerhet og svingninger som gjør planlegging vanskeligere.

Norge gikk fra fast til flytende kurs i 2001, da Norges Bank fikk et inflasjonsmål på 2 % som styringsmål for pengepolitikken i stedet for et valutakursmål.`,
    },
    {
      id: 'soe-7-3-example-2',
      type: 'example',
      title: 'Kronen som støtdemper',
      problem: 'Forklar hvordan flytende kronekurs fungerte som støtdemper under oljeprisfallet i 2014-2015.',
      solution: `Da oljeprisen falt kraftig fra over 100 dollar fatet til under 30 dollar, ble norsk økonomi hardt rammet. Tusenvis av jobber forsvant i oljerelatert industri.

Men kronekursen svekket seg samtidig markant – fra ca. 8,00 til over 9,50 kr per dollar. Denne kronesvekkelsen dempet nedturen:

1. **Økt konkurranseevne:** Norske eksportbedrifter utenfor oljen fikk flere kroner per eksportert enhet, og kunne øke produksjonen.
2. **Turisme:** Svak krone gjorde Norge billigere for utenlandske turister.
3. **Importsubstitusjon:** Dyrere import gjorde norske produkter mer konkurransedyktige på hjemmemarkedet.

Uten flytende kurs ville hele tilpasningen måttet skje gjennom kutt i lønninger og priser – en mye smertefullere prosess.`,
    },
    {
      id: 'soe-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Eurokursen stiger fra 10,50 til 11,50 kroner. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Kronen har styrket seg (appresiering)', isCorrect: false },
          { id: 'b', text: 'Kronen har svekket seg (depresering)', isCorrect: true },
          { id: 'c', text: 'Euroen har svekket seg', isCorrect: false },
          { id: 'd', text: 'Begge valutaene har styrket seg', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Når eurokursen stiger, betyr det at du trenger flere kroner for å kjøpe 1 euro. Kronen har altså blitt mindre verdt – den har svekket seg (depresiering). Euroen har tilsvarende styrket seg mot kronen.',
      },
    },
    {
      id: 'soe-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende faktorer vil normalt føre til at norske kroner styrker seg?',
        options: [
          { id: 'a', text: 'Oljeprisen faller kraftig', isCorrect: false },
          { id: 'b', text: 'Norges Bank setter ned renten', isCorrect: false },
          { id: 'c', text: 'Norges Bank setter opp renten relativt til andre land', isCorrect: true },
          { id: 'd', text: 'Inflasjonen i Norge stiger mye mer enn i andre land', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Høyere rente i Norge tiltrekker utenlandsk kapital, noe som øker etterspørselen etter kroner og styrker kronekursen. De andre alternativene ville normalt svekke kronen.',
      },
    },
    {
      id: 'soe-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'En norsk importør skal kjøpe maskiner fra Japan til en pris på 10 000 000 yen. Dagens kurs er 0,075 kroner per yen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva koster maskinene i norske kroner?',
            solution: '10 000 000 × 0,075 = 750 000 kroner',
            answer: 750000,
          },
          {
            label: 'b',
            task: 'Hva blir prisen i kroner dersom yenkursen stiger til 0,085?',
            solution: '10 000 000 × 0,085 = 850 000 kroner',
            answer: 850000,
          },
          {
            label: 'c',
            task: 'Forklar hvorfor en kronesvekkelse mot yen er ugunstig for norske importører.',
            solution: 'Når kronen svekker seg mot yen (yenkursen stiger), må importøren betale flere kroner for det samme antall yen. Maskinen som kostet 750 000 kr koster nå 850 000 kr – en økning på 100 000 kr. Importøren må enten akseptere lavere fortjeneste eller øke prisen til sine kunder.',
          },
        ],
        solution: 'Oppgaven illustrerer valutarisikoen for importbedrifter. Kronesvekkelse gjør import dyrere, mens kronestyrking gjør import billigere.',
      },
    },
    {
      id: 'soe-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved flytende valutakurs sammenlignet med fast valutakurs for et oljeavhengig land som Norge.',
        hints: ['Tenk på rollen som støtdemper', 'Vurder usikkerhet for bedrifter og pengepolitisk frihet'],
        solution: 'Fordeler med flytende kurs for Norge: Kursen fungerer som støtdemper ved sjokk (f.eks. oljefall), Norges Bank kan føre selvstendig pengepolitikk med inflasjonsmål, og automatisk tilpasning til endrede forhold. Ulemper: Stor usikkerhet for eksport- og importbedrifter, kronekursen kan svinge mye pga. oljeprisen, og spekulasjon kan gi overdrevne kursutslag. For Norge anses flytende kurs som det beste valget fordi oljeavhengigheten gjør at økonomien trenger fleksibilitet til å håndtere store prisendringer.',
      },
    },
    {
      id: 'soe-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-7-3-ex-5',
        number: '7.3.5',
        type: 'multiple-choice',
        task: 'Hva menes med kjøpekraftsparitet (PPP)?',
        options: [
          { id: 'a', text: 'At alle land har lik kjøpekraft per innbygger', isCorrect: false },
          { id: 'b', text: 'At valutakursen på lang sikt justerer seg slik at en varekurv koster det samme i alle land', isCorrect: true },
          { id: 'c', text: 'At sentralbanken sikrer at kronens verdi er stabil', isCorrect: false },
          { id: 'd', text: 'At alle valutaer skal ha samme verdi', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Kjøpekraftsparitet er en teori som sier at valutakurser på lang sikt tenderer mot et nivå der identiske varer koster det samme uansett hvilket land du kjøper dem i. I praksis er det avvik fra PPP, blant annet fordi ikke alle varer handles internasjonalt.',
      },
    },
    {
      id: 'soe-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Forklar hvorfor kronekursen ofte faller når oljeprisen faller, og hvilke konsekvenser dette har for norsk økonomi.',
        hints: ['Tenk på sammenhengen mellom oljeinntekter og etterspørsel etter kroner'],
        solution: 'Når oljeprisen faller, reduseres inntektene fra norsk oljeeksport. Etterspørselen etter norske kroner i valutamarkedet faller fordi det blir kjøpt færre kroner for å betale for norsk olje. Kronen svekker seg. Konsekvenser: Import blir dyrere (høyere priser på importvarer), eksportindustrien utenfor olje får bedre konkurranseevne, turisme i Norge stimuleres, men levekostnadene øker for nordmenn som handler importvarer eller reiser til utlandet.',
      },
    },
    {
      id: 'soe-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Valutakursen** er prisen på én valuta uttrykt i en annen
- **Appresiering** betyr at valutaen styrkes, **depresering** at den svekkes
- Kursen påvirkes av **renter, oljepris, inflasjon, handelsbalanse og forventninger**
- **Flytende kurs** gir pengepolitisk frihet og fungerer som støtdemper
- **Fast kurs** gir forutsigbarhet, men binder pengepolitikken
- **Kjøpekraftsparitet** er et langsiktig ankerfeste for valutakurser

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Valutakurs | Prisen på utenlandsk valuta i norske kroner |
| Appresiering | Valutaen styrker seg |
| Depresering | Valutaen svekker seg |
| Flytende kurs | Kursen bestemmes av markedet |
| Fast kurs | Sentralbanken holder kursen på et bestemt nivå |
| Kjøpekraftsparitet | Teori om at varekurver bør koste det samme i alle land |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Betalingsbalansen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_7_4: TextbookChapter = {
  id: 'samfokonomi-1-7-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '7.4',
  title: 'Betalingsbalansen',
  description: 'Driftsbalansen, kapitalbalansen, handelsbalansen og Norges utenriksøkonomi med oljefondet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for årsaker til internasjonal handel og drøfte muligheter og utfordringer knyttet til økonomisk globalisering',
  ],
  content: [
    {
      id: 'soe-7-4-intro',
      type: 'text',
      content: `## Et lands utenriksregnskap

Betalingsbalansen er et lands regnskap over alle økonomiske transaksjoner med utlandet. Den gir et samlet bilde av handelsstrømmer, inntektsstrømmer og kapitalbevegelser mellom Norge og resten av verden. For å forstå Norges plass i verdensøkonomien er det viktig å kjenne til denne oversikten.

I dette kapittelet skal du lære:
- Hva betalingsbalansen er og hvordan den er bygget opp
- Forskjellen mellom driftsbalansen og kapitalbalansen
- Hva handelsbalansen viser
- Norges spesielle utenriksøkonomiske posisjon med oljefondet`,
    },
    {
      id: 'soe-7-4-def-1',
      type: 'definition',
      title: 'Betalingsbalansen',
      content: `**Betalingsbalansen** er en systematisk oversikt over alle økonomiske transaksjoner mellom et land og utlandet i en gitt periode (vanligvis ett år). Den består av to hoveddeler: **driftsbalansen** (også kalt driftsregnskapet) og **kapitalbalansen** (inkludert finansregnskapet). Per definisjon skal betalingsbalansen alltid gå i null – et underskudd på driftsbalansen motsvares av et overskudd på kapitalbalansen, og omvendt.`,
    },
    {
      id: 'soe-7-4-text-1',
      type: 'text',
      content: `### Driftsbalansen

Driftsbalansen registrerer alle løpende transaksjoner med utlandet og består av:

**1. Handelsbalansen (varer)**
Forskjellen mellom eksport og import av varer. Norge har normalt et stort overskudd på handelsbalansen takket være olje- og gasseksporten.

**2. Tjenestebalansen**
Forskjellen mellom eksport og import av tjenester (shipping, turisme, konsulenttjenester osv.). Norge har tradisjonelt et overskudd på shipping, men underskudd på reisetjenester fordi nordmenn reiser mye til utlandet.

**3. Rente- og stønadsbalansen**
Netto inntekter fra investeringer i utlandet (renter, utbytte) minus utbetalinger til utenlandske investorer i Norge. Statens pensjonsfond utland (oljefondet) gir Norge store inntekter fra utenlandske investeringer.

**4. Løpende overføringer**
Ensidige overføringer som bistand, pengeoverføringer fra innvandrere til hjemlandet, og kontingenter til internasjonale organisasjoner.`,
    },
    {
      id: 'soe-7-4-def-2',
      type: 'definition',
      title: 'Handelsbalansen',
      content: `**Handelsbalansen** er differansen mellom verdien av et lands vareeksport og vareimport. Et land har **handelsoverskudd** når eksporten er større enn importen, og **handelsunderskudd** når importen overstiger eksporten. Norge har hatt handelsoverskudd i flere tiår, hovedsakelig på grunn av olje- og gasseksporten.`,
    },
    {
      id: 'soe-7-4-example-1',
      type: 'example',
      title: 'Norges driftsbalanse',
      problem: 'I et typisk år kan Norges driftsbalanse se slik ut (forenklede tall i milliarder kroner). Hva blir overskuddet på driftsbalansen?',
      solution: `| Post | Beløp (mrd. kr) |
|------|----------------|
| Eksport av varer (olje, gass, fisk m.m.) | +1 200 |
| Import av varer | −800 |
| **Handelsbalanse** | **+400** |
| Eksport av tjenester | +400 |
| Import av tjenester | −450 |
| **Tjenestebalanse** | **−50** |
| Rente- og utbytteinntekter fra utlandet | +350 |
| Rente- og utbytteutbetalinger til utlandet | −200 |
| **Rente- og stønadsbalanse** | **+150** |
| Løpende overføringer (netto) | −50 |
| **Driftsbalanse totalt** | **+450** |

Norge har et driftsoverskudd på 450 mrd. kr. Dette overskuddet plasseres i stor grad i Statens pensjonsfond utland (oljefondet).`,
    },
    {
      id: 'soe-7-4-text-2',
      type: 'text',
      content: `### Kapitalbalansen

Kapitalbalansen (inkludert finansregnskapet) registrerer alle kapitaltransaksjoner med utlandet:

- **Direkteinvesteringer** – Norske bedrifter som investerer i utlandet, og utenlandske bedrifter som investerer i Norge.
- **Porteføljeinvesteringer** – Kjøp og salg av aksjer og obligasjoner over landegrenser. Oljefondets plasseringer i utenlandske aksjer og obligasjoner er den største posten.
- **Andre finansielle transaksjoner** – Banklån, innskudd og andre kapitalbevegelser.
- **Endring i valutareservene** – Norges Banks beholdning av utenlandsk valuta.

### Sammenhengen mellom drifts- og kapitalbalansen

Betalingsbalansen skal alltid summere seg til null. Et overskudd på driftsbalansen betyr at landet «sparer» overfor utlandet – det tjener mer enn det bruker. Overskuddet brukes til å bygge opp fordringer på utlandet (investere ute). Tilsvarende betyr et underskudd på driftsbalansen at landet bruker mer enn det tjener og må låne fra utlandet.

For Norge betyr det store driftsoverskuddet at vi bygger opp store fordringer på utlandet gjennom oljefondet.`,
    },
    {
      id: 'soe-7-4-text-3',
      type: 'text',
      content: `### Norges spesielle posisjon

Norge skiller seg ut blant vestlige land med et vedvarende stort driftsoverskudd. Dette skyldes primært olje- og gasseksporten. Men i stedet for å bruke hele overskuddet på innenlandsk forbruk, spares det meste i Statens pensjonsfond utland (SPU).

**Handlingsregelen** sier at staten over tid skal bruke realavkastningen av fondet, anslått til 3 % per år. Dette betyr at:
- Oljeinntektene omgjøres til langsiktige finansinvesteringer i utlandet
- Norsk økonomi skjermes delvis fra svingninger i oljeprisen
- Fremtidige generasjoner får glede av oljeinntektene

Per 2024 forvalter oljefondet over 17 000 milliarder kroner, som er investert i aksjer, obligasjoner og eiendom i hele verden. Fondet eier i gjennomsnitt ca. 1,5 % av alle børsnoterte selskaper globalt.`,
    },
    {
      id: 'soe-7-4-example-2',
      type: 'example',
      title: 'Sammenhengen mellom driftsbalanse og kapitalbalanse',
      problem: 'USA har et stort driftsunderskudd. Hvordan finansieres dette?',
      solution: `USA importerer langt mer enn de eksporterer og har et driftsunderskudd på rundt 800 milliarder dollar årlig. Dette finansieres gjennom kapitalbalansen:

1. **Utenlandske investorer** kjøper amerikanske statsobligasjoner, aksjer og eiendom.
2. **Sentralbanker** i land som Kina og Japan plasserer sine valutareserver i amerikanske verdipapirer.
3. **Fond** som det norske oljefondet investerer store beløp i USA.

Resultatet er at USA er verdens største debitorland – de skylder mer til utlandet enn utlandet skylder dem. Til sammenligning er Norge en av verdens største kreditornasjoner takket være oljefondet.`,
    },
    {
      id: 'soe-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hvilken av følgende poster inngår i driftsbalansen?',
        options: [
          { id: 'a', text: 'Norske bedrifters oppkjøp av utenlandske fabrikker', isCorrect: false },
          { id: 'b', text: 'Oljefondets aksjekjøp i utlandet', isCorrect: false },
          { id: 'c', text: 'Eksport av norsk laks til EU', isCorrect: true },
          { id: 'd', text: 'Utenlandske bankers lån til norske selskaper', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Eksport av varer (som laks) inngår i handelsbalansen, som er en del av driftsbalansen. De andre alternativene er kapitaltransaksjoner som hører hjemme i kapitalbalansen/finansregnskapet.',
      },
    },
    {
      id: 'soe-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        task: 'Forklar med egne ord hvorfor betalingsbalansen alltid skal gå i null.',
        hints: ['Tenk på sammenhengen mellom å tjene penger og å bruke/spare dem'],
        solution: 'Betalingsbalansen skal alltid gå i null fordi alle pengene som strømmer ut av et land, må motsvares av penger som strømmer inn, og omvendt. Hvis et land eksporterer mer enn det importerer (driftsoverskudd), vil overskuddet brukes til å investere i utlandet (kapitalutgang). Det er som en persons økonomi: Hvis du tjener mer enn du bruker, setter du resten i banken. Overskuddet på «driften» din motsvares av en «kapitalinvestering». Summen er null.',
      },
    },
    {
      id: 'soe-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-7-4-ex-3',
        number: '7.4.3',
        type: 'multiple-choice',
        task: 'Et land har vareeksport på 500 mrd. kr og vareimport på 600 mrd. kr. Hva er handelsbalansen?',
        options: [
          { id: 'a', text: 'Handelsoverskudd på 100 mrd. kr', isCorrect: false },
          { id: 'b', text: 'Handelsunderskudd på 100 mrd. kr', isCorrect: true },
          { id: 'c', text: 'Handelsbalanse på 1 100 mrd. kr', isCorrect: false },
          { id: 'd', text: 'Handelsbalanse på 0 kr', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Handelsbalansen = Eksport − Import = 500 − 600 = −100 mrd. kr. Negativt tall betyr handelsunderskudd – landet importerer varer for mer enn det eksporterer.',
      },
    },
    {
      id: 'soe-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Drøft hvorfor Norge har valgt å spare store deler av oljeinntektene i oljefondet i stedet for å bruke dem med en gang.',
        hints: ['Tenk på hollandsk syke, generasjonsrettferdighet og stabilitet'],
        solution: 'Flere grunner: 1) Unngå hollandsk syke – for høy bruk av oljepenger ville ført til høy etterspørsel, press på lønninger og svekket konkurranseevne for annen industri. 2) Generasjonsrettferdighet – oljen tilhører også fremtidige generasjoner, ikke bare nålevende. 3) Stabilitet – ved å spare i fondet skjermes statsbudsjettet fra oljeprisssvingninger. 4) Handlingsregelen – ved å bruke bare avkastningen (3 %) kan fondet vare evig. 5) Formuesforvaltning – olje i bakken gjøres om til finansformue som gir løpende avkastning.',
      },
    },
    {
      id: 'soe-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-7-4-ex-5',
        number: '7.4.5',
        type: 'multiple-choice',
        task: 'Hva sier handlingsregelen om bruken av oljepenger i statsbudsjettet?',
        options: [
          { id: 'a', text: 'Staten kan bruke alle oljeinntektene hvert år', isCorrect: false },
          { id: 'b', text: 'Staten kan bruke inntil halvparten av fondet hvert år', isCorrect: false },
          { id: 'c', text: 'Staten kan over tid bruke den forventede realavkastningen av fondet, anslått til 3 %', isCorrect: true },
          { id: 'd', text: 'Staten kan ikke bruke noe av oljeinntektene før oljen er brukt opp', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Handlingsregelen ble innført i 2001 og sier at det oljekorrigerte underskuddet på statsbudsjettet over tid skal tilsvare den forventede realavkastningen av oljefondet. Denne ble nedjustert fra 4 % til 3 % i 2017.',
      },
    },
    {
      id: 'soe-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        task: 'Forklar hva som vil skje med Norges driftsbalanse når olje- og gassproduksjonen gradvis reduseres i fremtiden.',
        hints: ['Tenk på hva som erstatter oljeeksporten som inntektskilde', 'Husk rente- og utbytteinntektene fra oljefondet'],
        solution: 'Når olje- og gassproduksjonen avtar, vil handelsoverskuddet fra petroleumseksport krympe. Men rente- og utbytteinntektene fra oljefondet vil delvis kompensere. Fondet er så stort at avkastningen utgjør en betydelig inntektsstrøm. Andre eksportnæringer (fisk, shipping, teknologi) vil bli viktigere. Norge kan gå fra å ha driftsoverskudd til å ha mer balansert eller svakere driftsbalanse, men oljefondets finansinntekter vil dempe nedgangen. Omstillingen fra oljeøkonomi til andre næringer blir avgjørende.',
      },
    },
    {
      id: 'soe-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Betalingsbalansen** er oversikten over alle transaksjoner med utlandet
- **Driftsbalansen** omfatter handelsbalanse, tjenestebalanse, rente- og stønadsbalanse og løpende overføringer
- **Kapitalbalansen** registrerer investeringer og kapitalstrømmer
- **Norge** har vedvarende driftsoverskudd takket være olje- og gasseksport
- **Handlingsregelen** sikrer at oljepenger spares for fremtidige generasjoner

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Betalingsbalansen | Alle økonomiske transaksjoner med utlandet |
| Driftsbalansen | Løpende transaksjoner (handel, tjenester, renter) |
| Handelsbalansen | Eksport minus import av varer |
| Kapitalbalansen | Investeringer og kapitalstrømmer |
| Handlingsregelen | Bruke 3 % av oljefondets verdi per år |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Globalisering
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_7_5: TextbookChapter = {
  id: 'samfokonomi-1-7-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '7.5',
  title: 'Globalisering',
  description: 'Økonomisk globalisering, flernasjonale selskaper, globale verdikjeder, ulikhet mellom nasjoner og debatt om globaliseringens konsekvenser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for årsaker til internasjonal handel og drøfte muligheter og utfordringer knyttet til økonomisk globalisering',
  ],
  content: [
    {
      id: 'soe-7-5-intro',
      type: 'text',
      content: `## En sammenvevd verdensøkonomi

Globalisering betyr at verdens land og mennesker blir stadig tettere sammenvevd gjennom handel, investeringer, teknologi og kulturutveksling. De siste tiårene har økonomisk globalisering akselerert dramatisk: Containerskip frakter varer billig over hele verden, internett muliggjør tjenester på tvers av grenser, og flernasjonale selskaper produserer i land over hele kloden.

I dette kapittelet skal du lære:
- Hva økonomisk globalisering innebærer og hva som driver den
- Hvordan flernasjonale selskaper og globale verdikjeder fungerer
- Muligheter og utfordringer ved globalisering
- Ulikhet mellom fattige og rike land`,
    },
    {
      id: 'soe-7-5-def-1',
      type: 'definition',
      title: 'Økonomisk globalisering',
      content: `**Økonomisk globalisering** er prosessen der nasjonale økonomier blir stadig mer integrert gjennom økt handel med varer og tjenester, internasjonale kapitalstrømmer, spredning av teknologi og migrasjon av arbeidskraft. Globaliseringen drives av lavere transportkostnader, bedre kommunikasjonsteknologi, handelsavtaler og politiske beslutninger om å åpne markeder.`,
    },
    {
      id: 'soe-7-5-text-1',
      type: 'text',
      content: `### Drivkrefter bak globaliseringen

Globaliseringen har akselerert på grunn av flere faktorer:

**Teknologiske drivere:**
- Containeren (1956) revolusjonerte sjøfarten og reduserte transportkostnadene dramatisk
- Internett og digital kommunikasjon gjør det mulig å handle og samarbeide over landegrenser i sanntid
- Automatisering og robotisering reduserer produksjonskostnadene

**Politiske drivere:**
- GATT/WTO har redusert tollsatser fra gjennomsnittlig 40 % i 1947 til under 5 % i dag
- Regionale handelsavtaler (EU, NAFTA/USMCA, ASEAN) har skapt store frihandelsområder
- Kinas inntreden i verdensøkonomien fra 1978 ga tilgang til enorme mengder billig arbeidskraft

**Økonomiske drivere:**
- Stordriftsfordeler belønner bedrifter som produserer for et globalt marked
- Komparative fortrinn gjør spesialisering og handel lønnsomt
- Kapital søker dit avkastningen er høyest`,
    },
    {
      id: 'soe-7-5-def-2',
      type: 'definition',
      title: 'Flernasjonalt selskap',
      content: `Et **flernasjonalt selskap** (multinasjonalt selskap, MNC) er et foretak som har produksjon eller virksomhet i mer enn ett land. Eksempler er Apple, Samsung, Equinor og Hydro. Flernasjonale selskaper kontrollerer en stor andel av verdenshandelen og kan flytte produksjon, overskudd og investeringer mellom land.`,
    },
    {
      id: 'soe-7-5-text-2',
      type: 'text',
      content: `### Globale verdikjeder

I dag produseres de fleste komplekse varer gjennom **globale verdikjeder** der ulike produksjonstrinn foregår i forskjellige land. En iPhone illustrerer dette godt:

- **Design og utvikling:** USA (Apple, California)
- **Prosessorer:** Taiwan (TSMC) og Sør-Korea (Samsung)
- **Skjerm:** Sør-Korea og Japan
- **Kamerateknologi:** Japan (Sony)
- **Sammensetting:** Kina (Foxconn)
- **Mineraler og råvarer:** Kongo, Chile, Australia
- **Programvare:** USA, India

Verdikjeden fordeler verdiskapingen svært ulikt. Apple beholder ca. 60 % av verdien gjennom design, merkenavn og programvare, mens fabrikkarbeideren i Kina mottar under 2 % av salgsprisen.

### Konsekvenser av globale verdikjeder

Globale verdikjeder gjør produksjonen svært effektiv, men også sårbar. Covid-19-pandemien viste hvordan forstyrrelser i ett land kan lamme produksjonen verden over. Halvledermangelen etter pandemien rammet alt fra bilproduksjon til spillkonsoller.`,
    },
    {
      id: 'soe-7-5-example-1',
      type: 'example',
      title: 'Equinor som flernasjonalt selskap',
      problem: 'Forklar hvordan Equinor opererer som et flernasjonalt selskap.',
      solution: `Equinor (tidligere Statoil) er Norges største selskap og et godt eksempel på et flernasjonalt foretak:

**Virksomhet i mange land:**
- Olje- og gassproduksjon i Norge, Brasil, USA, Storbritannia og flere land
- Fornybar energi (havvind) i Storbritannia, USA og Europa
- Hovedkontor i Stavanger, men kontorer over hele verden

**Globale verdikjeder:**
- Bruker underleverandører fra mange land
- Selger olje og gass på det internasjonale markedet
- Rekrutterer kompetanse fra hele verden

**Økonomisk makt:**
- Omsetning på over 1 000 milliarder kroner
- Staten eier 67 % av aksjene
- Stor innflytelse på norsk og internasjonal energipolitikk

Equinor illustrerer hvordan flernasjonale selskaper bidrar til økonomisk integrering mellom land.`,
    },
    {
      id: 'soe-7-5-text-3',
      type: 'text',
      content: `### Muligheter ved globalisering

Økonomisk globalisering har gitt betydelige gevinster:

1. **Fattigdomsreduksjon** – Hundrevis av millioner mennesker, særlig i Kina og Sørøst-Asia, har blitt løftet ut av ekstrem fattigdom de siste 40 årene.
2. **Lavere priser** – Forbrukere i hele verden får billigere varer og tjenester gjennom internasjonal arbeidsdeling.
3. **Økonomisk vekst** – Verdensøkonomien har vokst kraftig i globaliseringsperioden.
4. **Teknologioverføring** – Fattige land får tilgang til avansert teknologi gjennom handel og utenlandske investeringer.
5. **Kulturutveksling** – Mennesker får tilgang til ideer, kunnskap og kultur fra hele verden.

### Utfordringer ved globalisering

Men globaliseringen skaper også betydelige utfordringer:

1. **Ulikhet innad i land** – Lavt utdannede arbeidere i rike land har sett jobbene flytte til lavkostland, mens høyt utdannede og kapitaleiere har tjent stort.
2. **Miljøkonsekvenser** – Økt produksjon og transport øker klimautslippene, og land kan konkurrere ved å ha svake miljøkrav (race to the bottom).
3. **Skatteunndragelse** – Flernasjonale selskaper kan flytte overskudd til land med lav skatt og dermed unndra seg beskatning i land der verdiskapingen skjer.
4. **Sårbarhet** – Gjensidig avhengighet gjør land sårbare for globale kriser og forstyrrelser i verdikjeder.
5. **Tap av nasjonal styring** – Globaliseringen begrenser lands mulighet til å føre selvstendig politikk.`,
    },
    {
      id: 'soe-7-5-text-4',
      type: 'text',
      content: `### Ulikhet mellom nasjoner

Et sentralt spørsmål er om globaliseringen øker eller reduserer ulikheten mellom fattige og rike land.

**Konvergens (land som nærmer seg):**
- Kina, India, Vietnam og andre asiatiske land har opplevd enorm vekst og nærmer seg rike lands inntektsnivå
- Globaliseringen har gitt disse landene tilgang til markeder, kapital og teknologi

**Divergens (land som sakker akterut):**
- Mange land i Afrika sør for Sahara har ikke klart å utnytte globaliseringens muligheter
- Mangel på infrastruktur, utdanning, stabile institusjoner og god styring hindrer mange fattige land
- «Ressursforbannelsen» – noen land med store naturressurser opplever korrupsjon og konflikter i stedet for utvikling

**Globale utfordringer fremover:**
- Klimaendringer rammer fattige land hardest
- Automatisering kan redusere etterspørselen etter billig arbeidskraft i fattige land
- Geopolitiske spenninger truer den globale handelsordenen
- Tendenser til «reshoring» – at bedrifter henter produksjonen tilbake til hjemlandet`,
    },
    {
      id: 'soe-7-5-example-2',
      type: 'example',
      title: 'Kinas økonomiske oppgang',
      problem: 'Hvordan illustrerer Kinas utvikling siden 1978 globaliseringens muligheter og utfordringer?',
      solution: `**Muligheter realisert:**
- Da Kina åpnet økonomien i 1978, levde over 80 % i ekstrem fattigdom. I dag er dette tallet under 1 %.
- BNP per innbygger har økt fra ca. 200 til over 12 000 dollar.
- Kina ble «verdens fabrikk» gjennom billig arbeidskraft, massive investeringer og eksportrettet vekst.
- Hundrevis av millioner mennesker har fått bedre levekår, utdanning og helse.

**Utfordringer:**
- Enorm miljøforurensning og klimautslipp – Kina er verdens største utslippsland.
- Ulikhet har økt kraftig mellom kystbyene og landsbygda.
- Arbeidsforhold i fabrikkene har vært kritisert internasjonalt.
- Handelskonflikter med USA og andre land har tilspisset seg.
- Landets økonomiske makt brukes også geopolitisk.

Kinas eksempel viser at globalisering kan skape enorm velstandsøkning, men at den også medfører store miljø- og fordelingskostnader.`,
    },
    {
      id: 'soe-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva er en global verdikjede?',
        options: [
          { id: 'a', text: 'En kjede av butikker som finnes i mange land', isCorrect: false },
          { id: 'b', text: 'En produksjonsprosess der ulike trinn foregår i forskjellige land', isCorrect: true },
          { id: 'c', text: 'En avtale mellom land om å handle fritt med hverandre', isCorrect: false },
          { id: 'd', text: 'Et mål på verdien av all verdens handel', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En global verdikjede innebærer at ulike steg i produksjonen av en vare foregår i forskjellige land. For eksempel designes en telefon i USA, prosessorer lages i Taiwan, og sammensettingen skjer i Kina.',
      },
    },
    {
      id: 'soe-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        task: 'Drøft om økonomisk globalisering samlet sett har vært positivt eller negativt for verdens fattigste land.',
        hints: ['Bruk konkrete eksempler fra ulike regioner', 'Vurder hvem som har tjent og hvem som har tapt'],
        solution: 'Globaliseringen har hatt svært ulik effekt på fattige land. Positivt: Enorm fattigdomsreduksjon i Øst-Asia, teknologioverføring, økt handelsvolum og bedre helseutfall i mange land. Negativt: Mange land i Afrika har ikke klart å koble seg på de globale verdikjedene. Svake institusjoner, mangel på infrastruktur og utdanning, og ugunstige handelsvilkår har hindret utvikling. Dessuten har noen land opplevd at lokalsamfunn og tradisjonelle næringer er blitt utkonkurrert. Samlet sett har globaliseringen redusert global fattigdom, men gevinstene er svært ujevnt fordelt.',
      },
    },
    {
      id: 'soe-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-3',
        number: '7.5.3',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er den viktigste teknologiske drivkraften bak globaliseringen på 1900-tallet?',
        options: [
          { id: 'a', text: 'Oppfinnelsen av dampmaskinen', isCorrect: false },
          { id: 'b', text: 'Utviklingen av containerskipet', isCorrect: true },
          { id: 'c', text: 'Oppfinnelsen av telegrafen', isCorrect: false },
          { id: 'd', text: 'Utviklingen av flymotoren', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Containerskipet (introdusert på 1950-tallet) revolusjonerte internasjonal handel ved å redusere transportkostnadene med opptil 90 %. Det gjorde det mulig å sende varer billig og effektivt over hele verden, noe som la grunnlaget for globale verdikjeder.',
      },
    },
    {
      id: 'soe-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Forklar hva «race to the bottom» betyr i forbindelse med globalisering, og gi et eksempel.',
        hints: ['Tenk på konkurranse mellom land om å tiltrekke investeringer'],
        solution: '«Race to the bottom» betyr at land konkurrerer om å tiltrekke seg utenlandske investeringer ved å senke skatter, svekke arbeidstakerrettigheter eller lempe på miljøkrav. Eksempel: Mange utviklingsland har opprettet spesielle økonomiske soner med svært lave skatter og få reguleringer for å lokke til seg fabrikkproduksjon. Dersom et land hever standardene, risikerer det at bedrifter flytter til naboland med lavere krav. Dette kan føre til en nedadgående spiral der ingen tør å innføre strengere reguleringer.',
      },
    },
    {
      id: 'soe-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-5',
        number: '7.5.5',
        type: 'multiple-choice',
        task: 'Hva er en konsekvens av at flernasjonale selskaper kan flytte overskudd mellom land?',
        options: [
          { id: 'a', text: 'Landene får mer skatteinntekter', isCorrect: false },
          { id: 'b', text: 'Arbeiderne får høyere lønn', isCorrect: false },
          { id: 'c', text: 'Land der verdiskapingen skjer, kan gå glipp av skatteinntekter', isCorrect: true },
          { id: 'd', text: 'Selskapene blir mindre lønnsomme', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Flernasjonale selskaper kan bruke internprising og andre metoder for å flytte overskudd til land med lav skatt (skatteparadiser). Resultatet er at land der den faktiske produksjonen og verdiskapingen skjer, mister skatteinntekter. OECD arbeider med tiltak (BEPS) for å motvirke dette.',
      },
    },
    {
      id: 'soe-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        task: 'Covid-19-pandemien avslørte sårbarheter i globale verdikjeder. Forklar hva som skjedde, og drøft om dette kan føre til mindre globalisering i fremtiden.',
        hints: ['Tenk på hva som skjedde med leveranser, produksjon og transport', 'Vurder «reshoring» og geopolitiske endringer'],
        solution: 'Under pandemien stengte fabrikker, havner ble overbelastet og transport stoppet opp. Mangel på halvledere, medisinsk utstyr og råvarer rammet produksjon globalt. Biler, elektronikk og byggematerialer ble mangelvare. Dette har ført til debatt om «reshoring» (flytte produksjon hjem) og «friendshoring» (handle primært med allierte land). Noen mener dette vil føre til «deglobalisering», men trolig vil resultatet bli en omstrukturering der land diversifiserer leverandørene og har beredskapslagre, heller enn full reversering av globaliseringen. Handel og globale verdikjeder er for lønnsomme til å avvikles helt.',
      },
    },
    {
      id: 'soe-7-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-7-5-ex-7',
        number: '7.5.7',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan globalisering påvirker din hverdag som ungdom i Norge.',
        hints: ['Tenk på varer du bruker, medier du konsumerer og muligheter du har'],
        solution: 'Eksempler: 1) Klær – De fleste klær norske ungdommer kjøper er produsert i Asia (Bangladesh, Vietnam, Kina) og solgt av internasjonale merkevarer. 2) Teknologi – Smarttelefoner, spillkonsoller og laptoper er laget gjennom globale verdikjeder med komponenter fra mange land. 3) Underholdning – Strømmetjenester som Netflix, Spotify og TikTok gir tilgang til innhold fra hele verden i sanntid. Andre eksempler: Utenlandsreiser, mat fra hele verden i butikkene, mulighet til å studere i utlandet, eller sosiale medier med venner i andre land.',
      },
    },
    {
      id: 'soe-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Økonomisk globalisering** innebærer økt integrering av verdensøkonomien gjennom handel, investeringer og teknologi
- **Flernasjonale selskaper** og **globale verdikjeder** er sentrale aktører i globaliseringen
- Globaliseringen har gitt **lavere priser, økonomisk vekst og fattigdomsreduksjon**
- Men den skaper også **ulikhet, miljøproblemer og sårbarhet**
- **Ulikheten mellom nasjoner** har avtatt for noen regioner, men økt for andre
- Fremtidens globalisering formes av klima, geopolitikk og teknologi

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Økonomisk globalisering | Økt økonomisk integrering mellom land |
| Flernasjonalt selskap | Foretak med virksomhet i flere land |
| Global verdikjede | Produksjonsprosess fordelt på mange land |
| Race to the bottom | Land konkurrerer med lavere standarder |
| Reshoring | Flytte produksjon tilbake til hjemlandet |
| Konvergens | Fattige land som nærmer seg rike lands nivå |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SAMFOKONOMI_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_7_1, CHAPTER_SAMFOKONOMI_1_7_2, CHAPTER_SAMFOKONOMI_1_7_3,
  CHAPTER_SAMFOKONOMI_1_7_4, CHAPTER_SAMFOKONOMI_1_7_5,
];

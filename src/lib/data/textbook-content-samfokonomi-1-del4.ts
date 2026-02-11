/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 1 VG2 - DEL 4
 * Seksjon 4: Privat og offentlig sektor (kapittel 4.1–4.5)
 *
 * Dekker LK20-kompetansemål:
 * "beskrive hovedtrekkene i privat og offentlig sektor i Norge og drøfte muligheter
 *  og utfordringer for næringsliv og offentlig sektor"
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Næringsstruktur i Norge
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_4_1: TextbookChapter = {
  id: 'samfokonomi-1-4-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '4.1',
  title: 'Næringsstruktur i Norge',
  description: 'Primær-, sekundær- og tertiærnæringene, utviklingen av norsk næringsliv og oljens rolle i norsk økonomi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekkene i privat og offentlig sektor i Norge og drøfte muligheter og utfordringer for næringsliv og offentlig sektor',
  ],
  content: [
    {
      id: 'soe-4-1-intro',
      type: 'text',
      content: `## Næringsstruktur i Norge

Næringsstrukturen i et land beskriver hvordan produksjon og sysselsetting fordeler seg mellom ulike næringer. Over tid har Norges næringsstruktur endret seg dramatisk – fra et land dominert av jordbruk og fiske til en moderne tjenesteøkonomi med en svært viktig petroleumssektor.

**Hvorfor er næringsstrukturen viktig?**
- Den forteller oss hva et land lever av
- Den påvirker arbeidsmarked og kompetansebehov
- Den har konsekvenser for miljø og bærekraft
- Den bestemmer hvor sårbar økonomien er for endringer

I dette kapittelet skal vi se på de tre hovednæringene, hvordan norsk næringsliv har utviklet seg, og hvilken rolle oljen spiller i norsk økonomi.`,
    },
    {
      id: 'soe-4-1-def-naeringer',
      type: 'definition',
      title: 'De tre hovednæringene',
      content: `**Primærnæringene** omfatter næringer som henter råvarer direkte fra naturen: jordbruk, skogbruk, fiske og bergverk. Disse næringene var dominerende i Norge frem til industrialiseringen.

**Sekundærnæringene** omfatter industri, bygge- og anleggsvirksomhet, og kraftproduksjon. Her bearbeides råvarer til ferdige produkter. Industrialiseringen på 1800- og 1900-tallet førte til sterk vekst i denne sektoren.

**Tertiærnæringene** (tjenestesektoren) omfatter handel, transport, finans, helse, utdanning, IT og andre tjenester. I dag er dette den klart største sektoren i Norge, med om lag 80 % av sysselsettingen.`,
    },
    {
      id: 'soe-4-1-example-naeringer',
      type: 'example',
      title: 'Eksempel: Sysselsetting i ulike næringer',
      problem: 'I 1900 jobbet ca. 40 % av alle nordmenn i primærnæringene. I dag er dette tallet rundt 2 %. Hva har skjedd, og hvorfor?',
      solution: `**Løsning:**

**Utviklingen:**
- 1900: Ca. 40 % i primærnæringene, 25 % i sekundær, 35 % i tertiær
- 1960: Ca. 15 % i primær, 35 % i sekundær, 50 % i tertiær
- I dag: Ca. 2 % i primær, 18 % i sekundær, 80 % i tertiær

**Årsaker til nedgangen i primærnæringene:**
1. **Mekanisering:** Traktorer og maskiner erstattet manuelt arbeid
2. **Produktivitetsvekst:** Færre personer kan produsere mer mat
3. **Urbanisering:** Folk flyttet til byene for bedre jobbmuligheter
4. **Høyere levestandard:** Økt inntekt gir økt etterspørsel etter tjenester, ikke bare mat

**Konklusjon:** Overgangen er et tegn på økonomisk utvikling. Rike land har typisk en stor tjenestesektor, fordi produktivitetsvekst i jordbruk og industri frigjør arbeidskraft til tjenesteproduksjon.`,
    },
    {
      id: 'soe-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken næring tilhører en lakseoppdrettar?',
        multipleChoiceOptions: [
          'Primærnæring',
          'Sekundærnæring',
          'Tertiærnæring',
          'Kvartærnæring',
        ],
        hints: ['Tenk på om dette handler om å hente råvarer fra naturen eller bearbeide dem'],
        solution: 'Lakseoppdrett er en primærnæring fordi det handler om å produsere råvarer (fisk) direkte fra naturen. Selv om moderne oppdrett er høyteknologisk, er kjerneaktiviteten å dyrke en naturressurs.',
      },
    },
    {
      id: 'soe-4-1-olje',
      type: 'text',
      content: `## Oljeøkonomien

Funnet av olje i Nordsjøen i 1969 (Ekofisk-feltet) forandret norsk økonomi for alltid. Petroleumssektoren har gjort Norge til et av verdens rikeste land.

**Oljens betydning for norsk økonomi:**
- Petroleumssektoren står for ca. 14 % av BNP
- Olje og gass utgjør rundt 40–50 % av norsk eksport
- Sektoren sysselsetter ca. 200 000 personer (direkte og indirekte)
- Oljefondet (Statens pensjonsfond utland) er verdens største statlige investeringsfond

**Norges oljepolitikk:**
Staten har sikret seg en stor andel av oljeinntektene gjennom:
- Høy skattesats på petroleumsvirksomhet (78 %)
- Statlig eierskap i Equinor (ca. 67 %)
- SDØE (Statens direkte økonomiske engasjement)
- Konsesjonssystemet som regulerer hvem som får lete og utvinne`,
    },
    {
      id: 'soe-4-1-def-hollandsksyke',
      type: 'definition',
      title: 'Hollandsk syke',
      content: `**Hollandsk syke** er et økonomisk fenomen der inntektene fra naturressurser (som olje) fører til at annen industri svekkes. Navnet kommer fra Nederland, som opplevde dette etter å ha funnet store gassforekomster på 1960-tallet.

**Mekanismen:**
1. Store eksportinntekter fra olje styrker kronekursen
2. Sterk krone gjør annen eksport dyrere og mindre konkurransedyktig
3. Høye lønninger i oljesektoren trekker arbeidskraft fra andre næringer
4. Resultatet er en ensidig økonomi som er svært sårbar for oljeprisfall

Norge har forsøkt å motvirke hollandsk syke gjennom Oljefondet og handlingsregelen.`,
    },
    {
      id: 'soe-4-1-example-oljefond',
      type: 'example',
      title: 'Eksempel: Oljefondet som buffer',
      problem: 'Under oljeprisfallet i 2014–2016 sank oljeprisen fra over 100 dollar fatet til under 30 dollar. Hvordan beskyttet Oljefondet norsk økonomi?',
      solution: `**Løsning:**

**Situasjonen:**
- Oljeprisen falt dramatisk, noe som rammet norsk oljeindustri hardt
- Tusenvis av oljearbeidere mistet jobben, spesielt i Stavanger-regionen

**Oljefondets rolle:**
1. **Statsbudsjettet:** Staten kunne bruke oljefondspenger til å opprettholde velferdstjenester og investere i infrastruktur, selv med lavere oljeinntekter
2. **Motkonjunkturpolitikk:** Staten økte offentlige utgifter for å dempe nedgangen
3. **Diversifisering:** Fondet er investert i utenlandske aksjer og obligasjoner, ikke i olje – dermed falt ikke fondets verdi like mye som oljeprisen

**Lærdommen:** Oljefondet fungerer som en buffer som gjør Norge mindre sårbar for svingninger i oljeprisen. Uten fondet ville nedgangen i 2014–2016 vært mye mer alvorlig.`,
    },
    {
      id: 'soe-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «hollandsk syke» i samfunnsøkonomisk sammenheng?',
        multipleChoiceOptions: [
          'At store inntekter fra naturressurser svekker konkurranseevnen til andre næringer',
          'At et land bruker for mye penger på helsevesenet',
          'At arbeidsledigheten i Nederland er høyere enn i andre europeiske land',
          'At høy inflasjon fører til lav økonomisk vekst',
        ],
        hints: ['Tenk på hva som skjer med kronekursen og lønningene når oljeinntektene er svært store'],
        solution: 'Hollandsk syke betyr at store inntekter fra naturressurser (som olje) styrker valutaen og øker lønningene, noe som gjør andre næringer mindre konkurransedyktige internasjonalt. Norge motvirker dette gjennom handlingsregelen og Oljefondet.',
      },
    },
    {
      id: 'soe-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor andelen sysselsatte i primærnæringene har falt kraftig i Norge de siste 100 årene. Bruk begrepene produktivitetsvekst og strukturendring i svaret ditt.',
        hints: ['Tenk på hva som skjer når maskiner overtar arbeid som før krevde mange mennesker'],
        solution: 'Produktivitetsveksten i primærnæringene har vært enorm. Mekanisering, kunstgjødsel og moderne teknologi gjør at færre personer kan produsere mye mer mat enn før. Denne strukturendringen frigjør arbeidskraft som flyttes til sekundær- og tertiærnæringene. Samtidig øker etterspørselen etter tjenester (helse, utdanning, underholdning) når levestandarden stiger, noe som skaper nye arbeidsplasser i tertiærsektoren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-4-1-ex-4',
        number: '4.1.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sektor står for den største andelen av sysselsettingen i Norge i dag?',
        multipleChoiceOptions: [
          'Tertiærnæringene (tjenestesektoren)',
          'Sekundærnæringene (industrien)',
          'Primærnæringene (jordbruk og fiske)',
          'Petroleumssektoren',
        ],
        hints: ['Tenk på hva de fleste du kjenner jobber med'],
        solution: 'Tertiærnæringene (tjenestesektoren) står for ca. 80 % av sysselsettingen i Norge. Dette inkluderer helse, utdanning, handel, transport, finans, IT og andre tjenester.',
      },
    },
    {
      id: 'soe-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved at petroleumssektoren har vært så viktig for norsk økonomi. Bruk minst tre argumenter for hver side.',
        hints: ['Tenk på velstand, arbeidsplasser og kompetanse som fordeler, og sårbarhet, miljø og hollandsk syke som ulemper'],
        solution: 'Fordeler: 1) Enorme inntekter har finansiert velferdsstaten med gratis utdanning og helsevesen, 2) Har skapt høyteknologiske arbeidsplasser og verdensledende kompetanse i offshore-teknologi, 3) Oljefondet gir økonomisk trygghet for fremtidige generasjoner. Ulemper: 1) Fare for hollandsk syke – andre næringer kan bli utkonkurrert, 2) Avhengighet av en ikke-fornybar ressurs gjør økonomien sårbar for oljeprisfall, 3) Klimaendringer krever omstilling bort fra fossil energi, noe som truer arbeidsplasser og eksportinntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Næringsstruktur i Norge

- **Primærnæringene** (jordbruk, fiske, bergverk) har gått fra å sysselsette 40 % til ca. 2 % av arbeidsstyrken
- **Sekundærnæringene** (industri) er viktige, men sysselsetter en synkende andel
- **Tertiærnæringene** (tjenester) dominerer med ca. 80 % av sysselsettingen
- **Petroleumssektoren** er svært viktig for norsk økonomi (ca. 14 % av BNP, 40–50 % av eksporten)
- **Oljefondet** og **handlingsregelen** er verktøy for å motvirke hollandsk syke
- Næringsstrukturen endres over tid som følge av produktivitetsvekst og endrede forbruksmønstre`,
    },
    {
      id: 'soe-4-1-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'soe-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for hvordan Norges næringsstruktur har endret seg de siste 100 årene. Forklar de viktigste drivkreftene bak endringene, og drøft hvordan petroleumssektoren har påvirket denne utviklingen.',
        hints: ['Strukturer svaret kronologisk: jordbrukssamfunn → industrisamfunn → tjenestesamfunn, og legg til oljens innvirkning fra 1970-tallet'],
        solution: 'For 100 år siden var Norge et jordbrukssamfunn der primærnæringene dominerte. Industrialiseringen førte til vekst i sekundærnæringene, med fabrikker og kraftverk. Fra midten av 1900-tallet vokste tjenestesektoren kraftig. Drivkrefter: teknologisk utvikling økte produktiviteten i primær- og sekundærnæringene, høyere levestandard ga økt etterspørsel etter tjenester, og urbanisering førte folk til byene. Petroleumssektoren fra 1970-tallet ga enorme inntekter som finansierte velferdsstaten, men skapte også risiko for hollandsk syke. Oljefondet og handlingsregelen ble innført for å dempe denne effekten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Bedrifter og markedsformer
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_4_2: TextbookChapter = {
  id: 'samfokonomi-1-4-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '4.2',
  title: 'Bedrifter og markedsformer',
  description: 'Fullkommen konkurranse, monopol, oligopol og monopolistisk konkurranse, med norske eksempler.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekkene i privat og offentlig sektor i Norge og drøfte muligheter og utfordringer for næringsliv og offentlig sektor',
  ],
  content: [
    {
      id: 'soe-4-2-intro',
      type: 'text',
      content: `## Bedrifter og markedsformer

I en markedsøkonomi er bedriftene de viktigste produsentene av varer og tjenester. Hvordan bedriftene oppfører seg – og hvor mye makt de har over prisen – avhenger av markedsformen de opererer i.

En **markedsform** beskriver strukturen i et marked, altså hvor mange aktører som finnes, hvor like produktene er, og hvor lett det er å komme inn i markedet.

Vi skal se på fire hovedtyper av markedsformer:
1. Fullkommen konkurranse
2. Monopol
3. Oligopol
4. Monopolistisk konkurranse`,
    },
    {
      id: 'soe-4-2-def-fullkommen',
      type: 'definition',
      title: 'Fullkommen konkurranse',
      content: `**Fullkommen konkurranse** er en idealisert markedsform der ingen enkeltaktør har makt over prisen.

**Kjennetegn:**
- Mange små kjøpere og selgere
- Identiske (homogene) produkter
- Fri etablering og avvikling – ingen etableringshindringer
- Full informasjon – alle kjenner priser og kvalitet
- Bedriftene er pristakere – de aksepterer markedsprisen

**I virkeligheten** finnes fullkommen konkurranse sjelden i ren form, men noen markeder ligner: aksjemarkedet, valutamarkedet og deler av jordbrukssektoren (f.eks. hvete).`,
    },
    {
      id: 'soe-4-2-def-monopol',
      type: 'definition',
      title: 'Monopol',
      content: `**Monopol** er en markedsform der det bare finnes én tilbyder av et produkt uten nære substitutter.

**Kjennetegn:**
- Én selger dominerer markedet
- Ingen nære substitutter
- Høye etableringshindringer (patenter, stordriftsfordeler, lovgivning)
- Monopolisten er prissetter – bestemmer pris og mengde

**Typer monopol:**
- **Naturlig monopol:** Stordriftsfordeler gjør det billigst med én produsent (f.eks. vannforsyning, jernbanenett)
- **Lovfestet monopol:** Staten gir enerett (f.eks. Vinmonopolet)
- **Patentmonopol:** Midlertidig enerett gjennom patent

**Problemer med monopol:** Høyere priser, lavere produksjon og mindre innovasjon enn ved konkurranse.`,
    },
    {
      id: 'soe-4-2-example-monopol',
      type: 'example',
      title: 'Eksempel: Vinmonopolet',
      problem: 'Vinmonopolet har enerett på salg av alkoholholdige drikkevarer over 4,7 % i Norge. Forklar hvorfor dette er et lovfestet monopol, og diskuter fordeler og ulemper.',
      solution: `**Løsning:**

**Hvorfor lovfestet monopol:**
Vinmonopolet har enerett gitt av Stortinget gjennom alkoholloven. Formålet er alkoholpolitisk – å begrense tilgjengeligheten for å redusere alkoholrelaterte skader.

**Fordeler:**
- Begrenset tilgjengelighet reduserer totalforbruket av alkohol
- Ansvarlig salg – alderskontroll og ingen reklame
- Bred vareutvalg – Vinmonopolet tilbyr et større sortiment enn de fleste vinbutikker i andre land
- Fagkompetanse og rådgivning

**Ulemper:**
- Begrenset tilgjengelighet (færre utsalgssteder og kortere åpningstider)
- Ingen priskonkurranse – forbrukerne kan ikke velge mellom ulike butikker
- Noen mener det begrenser personlig frihet

**Konklusjon:** Vinmonopolet er et eksempel på at staten bruker monopol som et politisk verktøy for å oppnå samfunnsmessige mål.`,
    },
    {
      id: 'soe-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner fullkommen konkurranse?',
        multipleChoiceOptions: [
          'Mange selgere av identiske produkter og fri etablering',
          'Få store selgere som samarbeider om priser',
          'Én selger som bestemmer prisen alene',
          'Mange selgere av unike produkter med merkevarebygging',
        ],
        hints: ['Tenk på hva "fullkommen" betyr – alle forhold er ideelle for konkurranse'],
        solution: 'Fullkommen konkurranse kjennetegnes av mange selgere av identiske produkter, fri etablering, og full informasjon. Bedriftene er pristakere fordi de er for små til å påvirke markedsprisen.',
      },
    },
    {
      id: 'soe-4-2-oligopol',
      type: 'text',
      content: `## Oligopol og monopolistisk konkurranse

### Oligopol

**Oligopol** er en markedsform der noen få store bedrifter dominerer markedet.

**Kjennetegn:**
- Få store aktører
- Produktene kan være like eller differensierte
- Høye etableringshindringer
- Strategisk samspill – bedriftene må ta hensyn til hva konkurrentene gjør

**Norske eksempler:**
- Dagligvaremarkedet: NorgesGruppen, Coop og Rema 1000 kontrollerer over 95 % av markedet
- Telekommarkedet: Telenor, Telia og Ice
- Banksektoren: DNB, Nordea og SpareBank 1

**Problemer med oligopol:**
- Fare for prissamarbeid (kartell) – ulovlig ifølge konkurranseloven
- Høyere priser enn ved fri konkurranse
- Etableringshindringer gjør det vanskelig for nye aktører

### Monopolistisk konkurranse

**Monopolistisk konkurranse** er en markedsform der mange bedrifter selger lignende, men differensierte produkter.

**Kjennetegn:**
- Mange selgere
- Differensierte produkter (merkevarenavn, design, beliggenhet)
- Relativt fri etablering
- Noe markedsmakt – bedriften kan sette sin egen pris innenfor et visst område

**Norske eksempler:**
- Restauranter og kafeer
- Frisørsalonger
- Klesbutikker
- Håndverkere`,
    },
    {
      id: 'soe-4-2-example-dagligvare',
      type: 'example',
      title: 'Eksempel: Dagligvaremarkedet i Norge',
      problem: 'Det norske dagligvaremarkedet domineres av tre aktører: NorgesGruppen (ca. 44 %), Coop (ca. 29 %) og Rema 1000 (ca. 24 %). Hvilken markedsform er dette, og hvilke konsekvenser har det for forbrukerne?',
      solution: `**Løsning:**

**Markedsform:** Dette er et **oligopol** – tre store aktører kontrollerer nesten hele markedet.

**Konsekvenser for forbrukerne:**

**Negative:**
- Høyere priser enn i land med mer konkurranse (norske matvarepriser er blant Europas høyeste)
- Mindre utvalg enn i land med flere aktører
- Vanskelig for nye aktører å etablere seg (distribusjon, lokaler, grossistledd)

**Positive:**
- Stordriftsfordeler kan gi lavere kostnader i logistikk
- Konkurranse mellom de tre på pris og kvalitet
- Lojalitetsprogrammer (Trumf, Coop-medlemskap)

**Konkurransetilsynets rolle:** Konkurransetilsynet overvåker dagligvaremarkedet og har flere ganger grepet inn mot oppkjøp som kunne redusere konkurransen ytterligere.`,
    },
    {
      id: 'soe-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Det norske dagligvaremarkedet domineres av tre store aktører. Hvilken markedsform beskriver dette best?',
        multipleChoiceOptions: [
          'Oligopol',
          'Fullkommen konkurranse',
          'Monopol',
          'Monopolistisk konkurranse',
        ],
        hints: ['Hvor mange store aktører er det, og hvor lett er det å komme inn i markedet?'],
        solution: 'Dagligvaremarkedet i Norge er et oligopol fordi det domineres av noen få store aktører (NorgesGruppen, Coop, Rema 1000) med høye etableringshindringer. Aktørene må ta hensyn til hverandres strategier.',
      },
    },
    {
      id: 'soe-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom et naturlig monopol og et lovfestet monopol. Gi ett norsk eksempel på hver type.',
        hints: ['Naturlig monopol handler om kostnadsstruktur, lovfestet monopol handler om politiske beslutninger'],
        solution: 'Et naturlig monopol oppstår når stordriftsfordeler gjør det mest effektivt med bare én produsent. Eksempel: Vannforsyning – det ville vært meningsløst å legge to parallelle vannrør. Et lovfestet monopol oppstår når staten gir en aktør enerett av politiske grunner. Eksempel: Vinmonopolet – enerett på salg av alkohol over 4,7 % for å begrense tilgjengeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-4-2-ex-4',
        number: '4.2.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken markedsform passer best til å beskrive restaurantbransjen?',
        multipleChoiceOptions: [
          'Monopolistisk konkurranse',
          'Fullkommen konkurranse',
          'Oligopol',
          'Monopol',
        ],
        hints: ['Tenk på hvor mange restauranter som finnes, og om produktene er helt like'],
        solution: 'Restaurantbransjen er et eksempel på monopolistisk konkurranse. Det er mange aktører, relativt lett å etablere seg, men hver restaurant tilbyr et differensiert produkt (ulik mat, beliggenhet, atmosfære). Hver restaurant har noe markedsmakt gjennom sin unike profil.',
      },
    },
    {
      id: 'soe-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign de fire markedsformene (fullkommen konkurranse, monopol, oligopol og monopolistisk konkurranse) med hensyn til: antall aktører, etableringshindringer, prisinnflytelse og produktdifferensiering.',
        hints: ['Lag en tabell eller bruk punktlister for å strukturere svaret'],
        solution: 'Fullkommen konkurranse: mange aktører, ingen etableringshindringer, ingen prisinnflytelse (pristaker), homogene produkter. Monopol: én aktør, svært høye etableringshindringer, stor prisinnflytelse (prissetter), unikt produkt uten substitutter. Oligopol: få aktører, høye etableringshindringer, noe prisinnflytelse (strategisk samspill), kan være like eller differensierte produkter. Monopolistisk konkurranse: mange aktører, lave etableringshindringer, noe prisinnflytelse (gjennom differensiering), differensierte produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Bedrifter og markedsformer

- **Fullkommen konkurranse:** Mange små aktører, identiske produkter, fri etablering – bedriftene er pristakere
- **Monopol:** Én aktør, ingen substitutter, høye etableringshindringer – bedriften er prissetter
- **Oligopol:** Noen få store aktører, høye etableringshindringer, strategisk samspill
- **Monopolistisk konkurranse:** Mange aktører, differensierte produkter, noe markedsmakt
- **Konkurransetilsynet** overvåker markedene og griper inn mot misbruk av markedsmakt
- I Norge er dagligvaremarkedet et oligopol, mens Vinmonopolet er et lovfestet monopol`,
    },
    {
      id: 'soe-4-2-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'soe-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en bransje du kjenner til i Norge (f.eks. mobiltelefoni, flyreiser, streaming). Beskriv hvilken markedsform bransjen har, begrunne valget ditt, og drøft hvordan markedsformen påvirker pris, utvalg og innovasjon for forbrukerne.',
        hints: ['Start med å identifisere antall aktører og etableringshindringer, deretter diskuter konsekvensene'],
        solution: 'Eksempel med mobiltelefoni: Markedet er et oligopol med Telenor, Telia og Ice som dominerende aktører. Begrunnelse: Få aktører, høye etableringshindringer (krever enorme investeringer i infrastruktur og frekvenstillatelser), og strategisk samspill. Konsekvenser: Prisene er relativt høye sammenlignet med mange andre land, utvalget av abonnementer er begrenset, men det er noe konkurranse på pris og datamengder. Innovasjonen drives delvis av teknologisk utvikling (5G) og delvis av konkurranse mellom de tre aktørene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Offentlig sektor
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_4_3: TextbookChapter = {
  id: 'samfokonomi-1-4-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '4.3',
  title: 'Offentlig sektor',
  description: 'Statens rolle i økonomien, fellesgoder, velferdsstaten og skattesystemet i Norge.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekkene i privat og offentlig sektor i Norge og drøfte muligheter og utfordringer for næringsliv og offentlig sektor',
  ],
  content: [
    {
      id: 'soe-4-3-intro',
      type: 'text',
      content: `## Offentlig sektor

Offentlig sektor omfatter all virksomhet som drives av stat, fylkeskommune og kommune. I Norge er offentlig sektor stor sammenlignet med mange andre land, og den spiller en sentral rolle i økonomien.

**Offentlig sektor i tall:**
- Sysselsetter ca. 30 % av alle arbeidstakere i Norge
- Offentlige utgifter utgjør ca. 50 % av BNP
- Skatte- og avgiftsnivået er blant de høyeste i verden

**Statens hovedoppgaver:**
1. Tilby fellesgoder og offentlige tjenester
2. Omfordele inntekt og formue
3. Stabilisere økonomien
4. Regulere markeder og korrigere markedssvikt`,
    },
    {
      id: 'soe-4-3-def-fellesgoder',
      type: 'definition',
      title: 'Fellesgoder (kollektive goder)',
      content: `**Fellesgoder** er goder som har to spesielle egenskaper:

1. **Ikke-ekskluderbarhet:** Det er ikke mulig (eller svært kostbart) å hindre noen i å bruke godet
2. **Ikke-rivalisering:** Én persons bruk reduserer ikke andres mulighet til å bruke godet

**Eksempler på fellesgoder:**
- Forsvar
- Gatebelysning
- Ren luft
- Fyrtårn
- Kunnskap (delvis)

**Gratispassasjerproblemet:** Fordi ingen kan ekskluderes, vil folk ha insentiv til å nyte godet uten å betale for det. Derfor vil markedet underprodusere fellesgoder, og det offentlige må stå for produksjonen, finansiert gjennom skatter.`,
    },
    {
      id: 'soe-4-3-example-fellesgoder',
      type: 'example',
      title: 'Eksempel: Forsvar som fellesgode',
      problem: 'Forklar hvorfor forsvar av landet er et fellesgode som markedet ikke kan tilby effektivt.',
      solution: `**Løsning:**

**Ikke-ekskluderbarhet:** Når Norge har et forsvar, beskytter det alle som bor i landet. Det er umulig å ekskludere enkeltpersoner fra å bli beskyttet – du kan ikke «skru av» forsvaret for de som ikke betaler.

**Ikke-rivalisering:** At jeg er beskyttet av forsvaret reduserer ikke din beskyttelse. Mange kan nyte godt av det samtidig.

**Gratispassasjerproblemet:** Hvis forsvar ble finansiert frivillig, ville mange velge å ikke betale – de ville jo bli beskyttet uansett. Resultatet ville bli at for lite ble samlet inn, og forsvaret ville bli underfinansiert.

**Løsningen:** Staten finansierer forsvaret gjennom skatter, som alle må betale. Dette sikrer at fellesgodet blir tilstrekkelig produsert.`,
    },
    {
      id: 'soe-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke to egenskaper kjennetegner et fellesgode?',
        multipleChoiceOptions: [
          'Ikke-ekskluderbarhet og ikke-rivalisering',
          'Høy pris og begrenset tilgjengelighet',
          'Privat eierskap og profittmotiv',
          'Knapphet og alternativkostnad',
        ],
        hints: ['Tenk på hva som gjør at markedet ikke klarer å tilby godet effektivt'],
        solution: 'Fellesgoder kjennetegnes av ikke-ekskluderbarhet (det er vanskelig å hindre noen i å bruke det) og ikke-rivalisering (én persons bruk reduserer ikke andres nytte). Disse egenskapene gjør at markedet underproduserer slike goder.',
      },
    },
    {
      id: 'soe-4-3-velferdsstat',
      type: 'text',
      content: `## Velferdsstaten

Norge er en **velferdsstat**, som betyr at staten tar et stort ansvar for innbyggernes velferd gjennom offentlige tjenester og sosiale overføringer.

**Den norske velferdsmodellen (den nordiske modellen):**
- Universelle velferdsordninger – gjelder alle, ikke bare de fattigste
- Gratis utdanning fra barneskole til universitet
- Offentlig helsevesen med lave egenandeler
- Generøse trygdeordninger (sykepenger, arbeidsledighetstrygd, alderspensjon)
- Sterkt stillingsvern og arbeidstakerrettigheter
- Høy organisasjonsgrad og trepartssamarbeid (stat, arbeidsgivere, arbeidstakere)

**Fordeler med velferdsstaten:**
- Lav ulikhet sammenlignet med andre land
- Høy sosial mobilitet – bakgrunn betyr mindre for muligheter
- Høy tillit mellom mennesker og til institusjoner
- Høy produktivitet – arbeidstakere tør å ta risiko fordi sikkerhetsnettet er sterkt

**Utfordringer:**
- Høye skatter kan dempe arbeidsinnsats og investeringsvilje
- Velferdsordninger kan skape avhengighet og svekke insentiver til å jobbe
- Økende kostnader med eldrebølgen
- Press fra globalisering og migrasjon`,
    },
    {
      id: 'soe-4-3-def-skatt',
      type: 'definition',
      title: 'Skattesystemet',
      content: `**Skatter og avgifter** er offentlig sektors viktigste inntektskilde. Norge har et progressivt skattesystem, som betyr at de med høyest inntekt betaler en større andel i skatt.

**Viktige skatter og avgifter:**
- **Inntektsskatt:** Skatt på lønn og annen inntekt (ca. 22 % trinnskatt + trygdeavgift)
- **Formuesskatt:** Skatt på nettoformue over et fribeløp
- **Merverdiavgift (mva):** 25 % på de fleste varer og tjenester (15 % på mat, 12 % på transport)
- **Særavgifter:** Avgifter på alkohol, tobakk, sukker, drivstoff osv.
- **Selskapsskatt:** 22 % skatt på bedrifters overskudd

**Skattenes funksjoner:**
1. **Finansiering:** Finansiere offentlige tjenester og velferd
2. **Omfordeling:** Redusere inntektsforskjeller
3. **Korrigering:** Avgifter på skadelig atferd (alkohol, forurensning)
4. **Stabilisering:** Automatiske stabilisatorer (høyere skatteinntekter i oppgang, lavere i nedgang)`,
    },
    {
      id: 'soe-4-3-example-progressiv',
      type: 'example',
      title: 'Eksempel: Progressiv beskatning',
      problem: 'Anna tjener 400 000 kr i året og betaler 28 % av inntekten i skatt. Bjørn tjener 1 000 000 kr og betaler 38 %. Forklar hvorfor dette kalles progressiv beskatning, og diskuter begrunnelsen.',
      solution: `**Løsning:**

**Progressiv beskatning betyr:** Skattesatsen øker med inntekten.
- Anna: 28 % av 400 000 = 112 000 kr i skatt → sitter igjen med 288 000 kr
- Bjørn: 38 % av 1 000 000 = 380 000 kr i skatt → sitter igjen med 620 000 kr

**Selv om Bjørn betaler en høyere andel**, sitter han igjen med mye mer enn Anna.

**Begrunnelse for progressiv beskatning:**
1. **Evneprinsippet:** De med mest bør bidra mest
2. **Avtagende grensenytte:** Den siste kronen er mindre verdt for en rik enn for en fattig person
3. **Omfordelingseffekt:** Reduserer inntektsulikhet
4. **Samfunnskontrakten:** Høytlønte har ofte dratt nytte av offentlige investeringer (utdanning, infrastruktur)

**Kritikk:** For høy progressivitet kan svekke insentiver til å jobbe ekstra og kan føre til skatteplanlegging.`,
    },
    {
      id: 'soe-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «gratispassasjerproblemet» knyttet til fellesgoder?',
        multipleChoiceOptions: [
          'At folk nyter godet uten å betale fordi de ikke kan ekskluderes',
          'At offentlig transport er gratis i noen byer',
          'At bedrifter slipper å betale skatt i frisoner',
          'At turister bruker offentlige tjenester uten å bidra',
        ],
        hints: ['Tenk på hva som skjer hvis forsvar finansieres frivillig'],
        solution: 'Gratispassasjerproblemet oppstår fordi fellesgoder er ikke-ekskluderbare. Siden folk kan nyte godet uten å betale, har de insentiv til å la andre betale. Hvis alle tenker slik, blir godet underprodusert. Derfor må staten finansiere fellesgoder gjennom skatter.',
      },
    },
    {
      id: 'soe-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med den norske velferdsmodellen (den nordiske modellen), og nevn minst tre kjennetegn som skiller den fra velferdsmodeller i andre land.',
        hints: ['Tenk på universalitet, trepartssamarbeid og omfanget av offentlige tjenester'],
        solution: 'Den norske velferdsmodellen kjennetegnes av: 1) Universelle velferdsordninger – alle har rett til ytelser, ikke bare de fattigste (i motsetning til behovsprøvde systemer i f.eks. USA). 2) Trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere, som sikrer koordinert lønnsdannelse og arbeidsfred. 3) Gratis utdanning og offentlig helsevesen med lave egenandeler. 4) Høy skattegrad som finansierer omfattende offentlige tjenester. 5) Sterkt stillingsvern og generøse trygdeordninger som gir økonomisk trygghet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-4-3-ex-4',
        number: '4.3.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste inntektskilden for offentlig sektor i Norge?',
        multipleChoiceOptions: [
          'Skatter og avgifter',
          'Oljeinntekter',
          'Bompenger',
          'Salg av offentlige tjenester',
        ],
        hints: ['Tenk på hva du betaler hver måned fra lønnen din'],
        solution: 'Skatter og avgifter er den viktigste inntektskilden for offentlig sektor. Inntektsskatt, merverdiavgift og andre avgifter utgjør hoveddelen av statens inntekter. Oljeinntektene er også viktige, men det meste overføres til Oljefondet.',
      },
    },
    {
      id: 'soe-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper med høyt skattenivå slik Norge har. Vurder både økonomiske og samfunnsmessige argumenter.',
        hints: ['Tenk på hva skatten finansierer (velferd, likhet), men også på mulige negative effekter (insentiver, skatteflukt)'],
        solution: 'Fordeler: 1) Finansierer universelle velferdstjenester som helse og utdanning for alle, 2) Reduserer ulikhet og øker sosial mobilitet, 3) Skaper økonomisk trygghet som gjør folk villige til å ta risiko og omstille seg, 4) Automatiske stabilisatorer demper konjunktursvingninger. Ulemper: 1) Kan svekke insentiver til å jobbe ekstra eller starte bedrift, 2) Risiko for skatteflukt – kapital og personer kan flytte til lavskatteland, 3) Kan skape avhengighet av offentlige overføringer, 4) Effektivitetstap – noen skatter forvrir økonomiske beslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Offentlig sektor

- **Offentlig sektor** sysselsetter ca. 30 % av arbeidstakerne og utgjør ca. 50 % av BNP
- **Fellesgoder** (forsvar, gatebelysning) krever offentlig finansiering pga. gratispassasjerproblemet
- **Velferdsstaten** tilbyr universelle tjenester og trygdeordninger, finansiert gjennom høye skatter
- **Skattesystemet** er progressivt – de med høyest inntekt betaler en større andel
- **Skattenes funksjoner:** finansiering, omfordeling, korrigering og stabilisering
- **Utfordringer:** eldrebølge, global skattekonkurranse og balansen mellom velferd og insentiver`,
    },
    {
      id: 'soe-4-3-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'soe-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for statens viktigste oppgaver i den norske økonomien. Bruk begrepene fellesgoder, omfordeling, stabilisering og markedsregulering i svaret. Gi konkrete norske eksempler.',
        hints: ['Strukturer svaret rundt de fire oppgavene, og knytt hvert punkt til et konkret norsk eksempel'],
        solution: 'Statens fire hovedoppgaver: 1) Tilby fellesgoder som forsvar, rettsvesen og infrastruktur – dette er goder markedet ikke kan tilby effektivt pga. gratispassasjerproblemet. 2) Omfordele inntekt og formue gjennom progressiv beskatning og universelle velferdsordninger som NAV, barnetrygd og studiestøtte. 3) Stabilisere økonomien gjennom finanspolitikk (statsbudsjettet) og samarbeid med Norges Bank om pengepolitikk – under koronapandemien brukte staten store summer på krisepakker. 4) Regulere markeder gjennom Konkurransetilsynet, Mattilsynet og andre tilsynsorganer for å korrigere markedssvikt som monopolmakt, eksternaliteter og asymmetrisk informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Statsbudsjettet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_4_4: TextbookChapter = {
  id: 'samfokonomi-1-4-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '4.4',
  title: 'Statsbudsjettet',
  description: 'Statsbudsjettet, utgiftsområder, inntektskilder, handlingsregelen og Statens pensjonsfond utland.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekkene i privat og offentlig sektor i Norge og drøfte muligheter og utfordringer for næringsliv og offentlig sektor',
  ],
  content: [
    {
      id: 'soe-4-4-intro',
      type: 'text',
      content: `## Statsbudsjettet

Statsbudsjettet er statens viktigste styringsverktøy. Det vedtas av Stortinget hvert år og bestemmer hvordan statens inntekter skal brukes. Regjeringen legger frem forslag til statsbudsjett i oktober, og Stortinget behandler det frem til desember.

**Statsbudsjettet viser:**
- Hvor mye staten forventer å ta inn i inntekter
- Hvordan pengene skal fordeles mellom ulike formål
- Hvor mye som skal overføres fra Oljefondet
- Statens samlede økonomiske politikk

**Statsbudsjettets rolle i den økonomiske politikken:**
Statsbudsjettet er det viktigste verktøyet i **finanspolitikken**. Gjennom budsjettet kan staten påvirke samlet etterspørsel i økonomien, fordele ressurser og prioritere mellom ulike samfunnsområder.`,
    },
    {
      id: 'soe-4-4-def-inntekter',
      type: 'definition',
      title: 'Statens inntekter',
      content: `**Statens inntekter** kommer fra flere kilder:

**1. Skatter og avgifter fra fastlands-Norge (ca. 75 %):**
- Inntektsskatt og trygdeavgift
- Merverdiavgift (mva)
- Særavgifter (alkohol, tobakk, drivstoff)
- Selskapsskatt
- Formuesskatt

**2. Overføring fra Oljefondet (ca. 20 %):**
- Hvert år overføres et beløp fra Oljefondet til statsbudsjettet
- Begrenset av handlingsregelen

**3. Andre inntekter (ca. 5 %):**
- Utbytte fra statlige selskaper (Equinor, Telenor, DNB)
- Renter og avkastning
- Gebyrer og avgifter for offentlige tjenester`,
    },
    {
      id: 'soe-4-4-def-utgifter',
      type: 'definition',
      title: 'Statens utgifter',
      content: `**De største utgiftspostene på statsbudsjettet:**

**1. Folketrygden / NAV (ca. 35 %):**
- Alderspensjon (den desidert største posten)
- Sykepenger
- Arbeidsavklaringspenger og uføretrygd
- Dagpenger ved arbeidsledighet
- Foreldrepenger

**2. Helse og omsorg (ca. 15 %):**
- Sykehus og spesialisthelsetjenester
- Kommunale helse- og omsorgstjenester

**3. Utdanning og forskning (ca. 10 %):**
- Grunnskole og videregående (via kommuner/fylker)
- Universiteter og høgskoler
- Forskning

**4. Forsvar (ca. 5 %):**
- Forsvaret og militær beredskap

**5. Samferdsel (ca. 5 %):**
- Vei, jernbane, flyplasser

**6. Andre poster:**
- Bistand, politi/rettsvesen, kultur, kommuneoverføringer m.m.`,
    },
    {
      id: 'soe-4-4-example-budsjett',
      type: 'example',
      title: 'Eksempel: Lesing av statsbudsjettet',
      problem: 'Statsbudsjettet for et gitt år har totale utgifter på 1 700 milliarder kroner. Folketrygden utgjør 590 milliarder, helse 255 milliarder, utdanning 170 milliarder og forsvar 85 milliarder. Beregn prosentandelen for hvert område, og kommenter hva tallene forteller oss.',
      solution: `**Løsning:**

**Beregning av prosentandeler:**
- Folketrygden: 590 / 1 700 = **34,7 %**
- Helse: 255 / 1 700 = **15,0 %**
- Utdanning: 170 / 1 700 = **10,0 %**
- Forsvar: 85 / 1 700 = **5,0 %**
- Øvrige utgifter: 600 / 1 700 = **35,3 %**

**Kommentar:**
Folketrygden er den klart største posten, dominert av alderspensjon. Sammen med helse utgjør velferdsytelser nesten halvparten av budsjettet. Dette viser at Norge prioriterer velferd og sosial trygghet høyt. Utdanning og forskning er tredje størst, noe som reflekterer satsing på kunnskapsutvikling. Forsvar utgjør relativt lite, men andelen øker pga. sikkerhetssituasjonen i Europa.`,
    },
    {
      id: 'soe-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken utgiftspost er den største på statsbudsjettet?',
        multipleChoiceOptions: [
          'Folketrygden (pensjon, sykepenger, trygd)',
          'Forsvaret',
          'Samferdsel (veier og jernbane)',
          'Utdanning og forskning',
        ],
        hints: ['Tenk på Norges aldrende befolkning og alle som mottar pensjon'],
        solution: 'Folketrygden er den desidert største posten på statsbudsjettet, med ca. 35 % av utgiftene. Alderspensjon er den største enkeltposten innenfor folketrygden, etterfulgt av sykepenger og uføretrygd.',
      },
    },
    {
      id: 'soe-4-4-handlingsregel',
      type: 'text',
      content: `## Handlingsregelen og Oljefondet

### Statens pensjonsfond utland (Oljefondet)

Oljefondet ble opprettet i 1990 for å forvalte Norges oljeinntekter. Formålet er å:
- Sikre at oljerikdommen kommer fremtidige generasjoner til gode
- Skjerme norsk økonomi fra store svingninger i oljeinntektene
- Bygge opp en finansiell reserve

**Fondets størrelse:** Over 17 000 milliarder kroner (2024), noe som gjør det til verdens største statlige investeringsfond.

**Investeringsstrategi:**
- Ca. 70 % i aksjer, 25 % i obligasjoner, 5 % i eiendom
- Investert i over 9 000 selskaper i 70 land
- Forvaltes av Norges Bank Investment Management (NBIM)

### Handlingsregelen

**Handlingsregelen** (innført i 2001) begrenser hvor mye av Oljefondet som kan brukes over statsbudsjettet hvert år.

**Hovedprinsipper:**
- Over tid skal bruken av oljepenger tilsvare den forventede realavkastningen av fondet
- Denne er anslått til **3 % per år** (endret fra 4 % i 2017)
- Ved å bare bruke avkastningen, spiser vi ikke av kapitalen
- Fondet kan da vare «evig» – også etter at oljen tar slutt

**Fleksibilitet:** I dårlige tider kan staten bruke mer enn 3 %, og i gode tider bør den bruke mindre. Slik fungerer handlingsregelen som et motkonjunkturverktøy.`,
    },
    {
      id: 'soe-4-4-def-handlingsregel',
      type: 'definition',
      title: 'Handlingsregelen',
      content: `**Handlingsregelen** er en retningslinje for bruk av oljepenger i statsbudsjettet. Over tid skal det strukturelle, oljekorrigerte underskuddet på statsbudsjettet tilsvare den forventede realavkastningen av Statens pensjonsfond utland (Oljefondet), anslått til 3 % per år.

**Formål:**
1. Hindre overoppheting av økonomien ved å begrense oljepengebruken
2. Sikre at fondet varer over generasjoner
3. Gi rom for motkonjunkturpolitikk i dårlige tider
4. Beskytte fastlandsøkonomien mot hollandsk syke

**Eksempel:** Hvis fondet er verdt 17 000 milliarder, tilsier handlingsregelen at staten kan bruke ca. 510 milliarder kroner (3 %) per år.`,
    },
    {
      id: 'soe-4-4-example-handlingsregel',
      type: 'example',
      title: 'Eksempel: Handlingsregelen i praksis',
      problem: 'Oljefondet er verdt 15 000 milliarder kroner. Regjeringen foreslår å bruke 500 milliarder oljekroner i statsbudsjettet. Er dette i tråd med handlingsregelen?',
      solution: `**Løsning:**

**Beregning av 3 %-banen:**
3 % av 15 000 milliarder = 450 milliarder kroner

**Vurdering:**
Regjeringen foreslår å bruke 500 milliarder, som er 50 milliarder mer enn handlingsregelen tilsier. Dette tilsvarer 3,33 % av fondet.

**Er dette greit?**
- Handlingsregelen er en **retningslinje**, ikke en absolutt regel
- I nedgangstider er det akseptert å bruke mer enn 3 % (motkonjunkturpolitikk)
- I oppgangstider bør bruken ligge under 3 %
- Over tid bør bruken i gjennomsnitt ligge rundt 3 %

**Konklusjon:** Hvis økonomien er i en nedgangskonjunktur, kan overskridelsen forsvares. Hvis økonomien er i normalkonjunktur eller oppgang, bør regjeringen holde seg nærmere 3 %-banen.`,
    },
    {
      id: 'soe-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Handlingsregelen sier at staten over tid kan bruke omtrent hvor mye av Oljefondet per år?',
        multipleChoiceOptions: [
          '3 % (den forventede realavkastningen)',
          '10 % av fondet',
          'Halvparten av oljeinntektene',
          'Alt fondet tjener i aksjeutbytte',
        ],
        hints: ['Denne prosentsatsen ble endret fra 4 % til en lavere verdi i 2017'],
        solution: 'Handlingsregelen tilsier at staten over tid kan bruke ca. 3 % av Oljefondet per år, noe som tilsvarer den forventede realavkastningen. Slik spiser vi bare av avkastningen og ikke av kapitalen, slik at fondet kan vare evig.',
      },
    },
    {
      id: 'soe-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oljefondet er verdt 18 000 milliarder kroner. Beregn hvor mye handlingsregelen tilsier at staten kan bruke per år. Forklar med egne ord hvorfor det er viktig å ikke bruke mer enn dette.',
        hints: ['Bruk 3 %-regelen, og tenk på hva som skjer med fondet og økonomien hvis vi bruker for mye'],
        solution: '3 % av 18 000 milliarder = 540 milliarder kroner per år. Det er viktig å ikke bruke mer fordi: 1) Ved å bare bruke avkastningen bevarer vi kapitalen for fremtidige generasjoner. 2) For mye oljepengebruk kan overopphete økonomien og drive opp priser og lønninger. 3) Det kan forsterke hollandsk syke ved å svekke konkurranseevnen til andre næringer. 4) Vi trenger fondet som buffer for fremtidige kriser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-4-4-ex-4',
        number: '4.4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med Statens pensjonsfond utland (Oljefondet)?',
        multipleChoiceOptions: [
          'Sikre at oljeinntektene kommer fremtidige generasjoner til gode',
          'Finansiere pensjoner til alle nordmenn som jobber i oljesektoren',
          'Investere i norske olje- og gasselskaper',
          'Betale ned Norges statsgjeld',
        ],
        hints: ['Tenk på generasjonsrettferdighet og langsiktighet'],
        solution: 'Hovedformålet med Oljefondet er å sikre at oljeinntektene kommer fremtidige generasjoner til gode. Oljen er en ikke-fornybar ressurs, og fondet omdanner midlertidige oljeinntekter til en varig finansiell formue som kan gi avkastning lenge etter at oljen tar slutt.',
      },
    },
    {
      id: 'soe-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Under koronapandemien i 2020 brukte staten langt mer oljepenger enn handlingsregelen tilsa. Drøft om dette var forsvarlig økonomisk politikk.',
        hints: ['Tenk på handlingsregelens fleksibilitet, motkonjunkturpolitikk og alternativet (å ikke hjelpe)'],
        solution: 'Argumenter for at det var forsvarlig: 1) Handlingsregelen gir rom for økt oljepengebruk i krisetider, nettopp for motkonjunkturpolitikk. 2) Uten krisepakker ville mange bedrifter gått konkurs og arbeidsledigheten blitt mye høyere. 3) Det ville vært mye dyrere å bygge opp igjen økonomien etterpå. 4) Fondet var stort nok til å tåle ekstra uttak. Argumenter for forsiktighet: 1) Økt oljepengebruk kan bli vanskelig å reversere. 2) Det kan skape forventninger om at staten alltid griper inn. 3) Fondet er ikke ubegrenset. Konklusjon: De fleste økonomer mener det var riktig å bruke mer under pandemien, men det er viktig å stramme inn igjen etterpå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Statsbudsjettet

- **Statsbudsjettet** er statens viktigste styringsverktøy, vedtatt av Stortinget hvert år
- **Inntekter:** Skatter og avgifter (ca. 75 %), overføring fra Oljefondet (ca. 20 %), andre inntekter (ca. 5 %)
- **Utgifter:** Folketrygden er størst (ca. 35 %), etterfulgt av helse, utdanning og forsvar
- **Oljefondet** (Statens pensjonsfond utland) er verdens største statlige investeringsfond
- **Handlingsregelen** begrenser oljepengebruken til ca. 3 % av fondet per år
- Statsbudsjettet brukes aktivt i **finanspolitikken** for å stabilisere økonomien`,
    },
    {
      id: 'soe-4-4-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'soe-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for statsbudsjettets viktigste inntekts- og utgiftsposter. Forklar handlingsregelens betydning for norsk økonomi, og drøft hva som kan skje dersom handlingsregelen brytes over lengre tid.',
        hints: ['Dekk inntekter, utgifter, handlingsregelen og langsiktige konsekvenser av for høy oljepengebruk'],
        solution: 'Statsbudsjettets inntekter: Skatter og avgifter er den viktigste kilden (inntektsskatt, mva, selskapsskatt), supplert av overføringer fra Oljefondet og utbytte fra statlige selskaper. Utgifter: Folketrygden (pensjon, sykepenger) er størst, etterfulgt av helse/omsorg, utdanning og forsvar. Handlingsregelens betydning: Den sikrer at oljepengebruken er bærekraftig over tid ved å begrense den til 3 % av fondet (forventet realavkastning). Slik bevares kapitalen for fremtidige generasjoner. Brudd over tid: 1) Fondet krymper – mindre til fremtidige generasjoner. 2) Overoppheting – økt inflasjon og press på lønninger. 3) Hollandsk syke – svekket konkurranseevne for fastlandsindustrien. 4) Mindre handlingsrom i fremtidige kriser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Utfordringer for norsk økonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_4_5: TextbookChapter = {
  id: 'samfokonomi-1-4-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '4.5',
  title: 'Utfordringer for norsk økonomi',
  description: 'Hollandsk syke, eldrebølgen, grønn omstilling, konkurranseevne og produktivitet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekkene i privat og offentlig sektor i Norge og drøfte muligheter og utfordringer for næringsliv og offentlig sektor',
  ],
  content: [
    {
      id: 'soe-4-5-intro',
      type: 'text',
      content: `## Utfordringer for norsk økonomi

Selv om Norge er et rikt land med en velfungerende økonomi, står vi overfor flere alvorlige utfordringer som vil prege politikk og økonomi i tiårene fremover.

**De fem største utfordringene:**
1. Avhengighet av petroleumssektoren og hollandsk syke
2. Aldring av befolkningen (eldrebølgen)
3. Grønn omstilling og klimaendringer
4. Konkurranseevne i en globalisert verden
5. Produktivitetsutfordringer

Disse utfordringene henger sammen og forsterker hverandre. La oss se nærmere på hver av dem.`,
    },
    {
      id: 'soe-4-5-def-eldrebolge',
      type: 'definition',
      title: 'Eldrebølgen',
      content: `**Eldrebølgen** refererer til den demografiske endringen der andelen eldre i befolkningen øker kraftig, mens andelen i yrkesaktiv alder synker relativt sett.

**Årsaker:**
- Økt levealder – nordmenn lever stadig lenger (forventet levealder over 83 år)
- Store fødselskull fra etterkrigstiden («baby boomers») når pensjonsalder
- Lavere fødselstall – færre unge erstatter de som går av med pensjon

**Konsekvenser for offentlige finanser:**
- Kraftig økning i pensjonsutgifter
- Større behov for helse- og omsorgstjenester
- Færre yrkesaktive per pensjonist (fra 5:1 til under 3:1 de neste tiårene)
- Lavere skatteinntekter relativt til utgiftene

**SSB har beregnet** at dersom dagens velferdsordninger videreføres uten endringer, vil det oppstå et betydelig gap mellom inntekter og utgifter i offentlig sektor.`,
    },
    {
      id: 'soe-4-5-example-eldrebolge',
      type: 'example',
      title: 'Eksempel: Forsørgerbyrden',
      problem: 'I 2020 var det ca. 4 yrkesaktive per pensjonist i Norge. I 2060 forventes dette å synke til ca. 2,5. Forklar hva dette betyr for velferdsstatens bærekraft.',
      solution: `**Løsning:**

**Forsørgerbyrden øker:**
- 2020: 4 yrkesaktive «forsørger» 1 pensjonist gjennom skattene sine
- 2060: Bare 2,5 yrkesaktive per pensjonist

**Konsekvenser:**
1. **Økte kostnader:** Flere trenger pensjon og helsetjenester
2. **Lavere inntekter:** Færre betaler skatt relativt til de som mottar ytelser
3. **Finansieringsgap:** Enten må skattene økes, velferdsytelsene kuttes, eller produktiviteten økes

**Mulige løsninger:**
- Øke pensjonsalderen (allerede gjort med pensjonsreformen)
- Øke arbeidsinnvandringen for å få flere skattebetalere
- Effektivisere offentlig sektor med teknologi
- Øke yrkesdeltakelsen blant eldre og innvandrere
- Kutte i eller behovsprøve velferdsytelser

**Konklusjon:** Eldrebølgen er kanskje den største langsiktige utfordringen for norsk økonomi, og krever politiske prioriteringer og reformer.`,
    },
    {
      id: 'soe-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med «eldrebølgen»?',
        multipleChoiceOptions: [
          'At andelen eldre i befolkningen øker kraftig mens andelen yrkesaktive synker',
          'At eldre mennesker flytter fra distriktene til byene',
          'At pensjonistene blir rikere enn resten av befolkningen',
          'At eldre bruker mer teknologi enn før',
        ],
        hints: ['Tenk på forholdet mellom de som jobber og de som er pensjonister'],
        solution: 'Eldrebølgen betyr at andelen eldre i befolkningen øker kraftig pga. økt levealder og lavere fødselstall. Dette gir færre yrkesaktive per pensjonist, noe som utfordrer finansieringen av pensjoner og helsetjenester.',
      },
    },
    {
      id: 'soe-4-5-gronn',
      type: 'text',
      content: `## Grønn omstilling

Norge står overfor en **dobbel utfordring**: Klimaendringene krever at verden reduserer bruken av fossil energi, samtidig som olje og gass er Norges viktigste eksportvare.

**Utfordringen:**
- Petroleumssektoren må gradvis bygges ned i takt med det grønne skiftet
- Norge må finne nye næringer som kan erstatte oljeinntektene
- Omstillingen må skje uten at tusenvis av arbeidsplasser og kompetanse går tapt

**Muligheter for Norge:**
- **Havvind:** Norsk offshore-kompetanse kan overføres til vindkraft til havs
- **Hydrogen:** Norge kan bli stor på produksjon av grønt hydrogen
- **Karbonfangst og -lagring (CCS):** Norsk teknologi for å fange og lagre CO₂
- **Batteriteknologi:** Satsing på batterifabrikker
- **Havbruk:** Bærekraftig oppdrett av fisk og tang
- **Reiseliv:** Naturen som ressurs for turisme

**Virkemidler:**
- Grønne skatter og avgifter (CO₂-avgift)
- Offentlige investeringer i forskning og infrastruktur
- Enova og Innovasjon Norge støtter grønn innovasjon
- EU-samarbeid om klimapolitikk (EØS)`,
    },
    {
      id: 'soe-4-5-def-konkurranseevne',
      type: 'definition',
      title: 'Konkurranseevne',
      content: `**Konkurranseevne** beskriver et lands eller en bedrifts evne til å hevde seg i internasjonal konkurranse, det vil si å selge varer og tjenester i utlandet til konkurransedyktige priser og kvalitet.

**Faktorer som påvirker Norges konkurranseevne:**
- **Lønnsnivå:** Norge har et av verdens høyeste lønnsnivåer, noe som gjør norske varer dyrere
- **Produktivitet:** Høy produktivitet kan kompensere for høye lønninger
- **Kronekurs:** Svak krone gjør norske varer billigere i utlandet
- **Innovasjon:** Nye produkter og løsninger gir konkurransefortrinn
- **Kompetanse:** Utdannet arbeidskraft er en viktig ressurs
- **Infrastruktur:** God infrastruktur reduserer kostnader

**Frontfagsmodellen:** I Norge forhandler konkurranseutsatte næringer (f.eks. industri) om lønn først, og setter rammen for resten av arbeidslivet. Dette skal sikre at lønningene ikke vokser raskere enn produktiviteten.`,
    },
    {
      id: 'soe-4-5-example-omstilling',
      type: 'example',
      title: 'Eksempel: Fra olje til havvind',
      problem: 'Mange norske oljeselskaper satser nå på havvind. Forklar hvorfor dette er en naturlig omstilling, og hvilke utfordringer det innebærer.',
      solution: `**Løsning:**

**Hvorfor naturlig omstilling:**
1. **Overførbar kompetanse:** Offshore-teknologi, subsea-ingeniørkunst og prosjektledelse kan brukes i havvind
2. **Eksisterende infrastruktur:** Havner, verft og leverandørindustri kan tilpasses
3. **Erfaring med store prosjekter:** Norsk petroleumsindustri er vant til å håndtere komplekse prosjekter i krevende havmiljø
4. **Markedsvekst:** Global etterspørsel etter fornybar energi vokser raskt

**Utfordringer:**
1. **Lønnsomhet:** Havvind er foreløpig dyrere enn olje og gass å produsere
2. **Subsidiebehov:** Prosjektene krever offentlig støtte i en overgangsperiode
3. **Konkurranse:** Andre land (Danmark, Storbritannia) har et forsprang
4. **Skalering:** Det tar tid å bygge opp en hel ny industri
5. **Tap av arbeidsplasser:** Noen oljejobber forsvinner før havvindjobber er på plass

**Konklusjon:** Omstillingen fra olje til havvind er lovende, men krever langsiktige investeringer og politisk vilje.`,
    },
    {
      id: 'soe-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-4-5-ex-2',
        number: '4.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er den største utfordringen for velferdsstatens bærekraft på lang sikt?',
        multipleChoiceOptions: [
          'Eldrebølgen – færre yrkesaktive per pensjonist',
          'Lav oljepris',
          'For mange innvandrere',
          'For høye forsvarskostnader',
        ],
        hints: ['Tenk på hva som skjer med forholdet mellom skatteinntekter og utgifter når befolkningen eldes'],
        solution: 'Eldrebølgen er den største langsiktige utfordringen for velferdsstaten. Når andelen pensjonister øker og andelen yrkesaktive synker, vil utgiftene til pensjon og helse stige kraftig, mens skatteinntektene relativt sett faller. SSB har beregnet et betydelig finansieringsgap dersom ordningene ikke endres.',
      },
    },
    {
      id: 'soe-4-5-produktivitet',
      type: 'text',
      content: `## Produktivitet og verdiskaping

**Produktivitet** er mengden verdiskaping per arbeidstime. Høy produktivitet betyr at vi produserer mer verdi med færre ressurser.

**Norges produktivitetsutfordring:**
- Norge har historisk hatt høy produktivitetsvekst, men veksten har avtatt siden finanskrisen i 2008
- Lavere produktivitetsvekst betyr langsommere velstandsøkning
- Mange andre land tar oss igjen

**Hva kan øke produktiviteten?**
- **Teknologi og digitalisering:** Automatisering, kunstig intelligens, robotisering
- **Utdanning og kompetanse:** Høyt kvalifisert arbeidskraft
- **Innovasjon:** Nye produkter, prosesser og forretningsmodeller
- **Konkurranse:** Press fra konkurrenter tvinger bedrifter til å bli mer effektive
- **Infrastruktur:** Effektiv transport, energi og digital infrastruktur

**Baumols kostnadssyke:** Tjenestesektoren (som dominerer norsk økonomi) har lavere produktivitetsvekst enn industrien. Når en større andel av økonomien er tjenester, faller samlet produktivitetsvekst.`,
    },
    {
      id: 'soe-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med grønn omstilling, og gi tre eksempler på nye næringer som kan erstatte deler av petroleumsinntektene i Norge.',
        hints: ['Tenk på norsk kompetanse fra petroleumssektoren og nye energikilder'],
        solution: 'Grønn omstilling betyr å dreie økonomien bort fra fossil energi mot fornybare og bærekraftige løsninger. Tre eksempler: 1) Havvind – norsk offshore-kompetanse kan brukes til å bygge vindkraft til havs. 2) Karbonfangst og -lagring (CCS) – Norge kan lagre CO₂ i tomme oljereservoarer under havbunnen. 3) Hydrogen – Norge kan produsere grønt hydrogen med fornybar vannkraft, til bruk i transport og industri. Alle disse utnytter eksisterende norsk kompetanse og naturressurser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-4-5-ex-4',
        number: '4.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er frontfagsmodellen?',
        multipleChoiceOptions: [
          'At konkurranseutsatte næringer forhandler lønn først og setter rammen for resten',
          'At staten bestemmer lønnen til alle arbeidstakere',
          'At de best betalte bransjene betaler mest i skatt',
          'At alle bransjer får lik lønnsøkning hvert år',
        ],
        hints: ['Tenk på hvem som forhandler om lønn først, og hvorfor'],
        solution: 'Frontfagsmodellen betyr at konkurranseutsatte næringer (f.eks. industrien) forhandler om lønn først. Deres lønnsøkning setter rammen for hva andre bransjer kan gi. Formålet er å sikre at lønningene ikke vokser raskere enn produktiviteten, slik at norske bedrifter forblir konkurransedyktige internasjonalt.',
      },
    },
    {
      id: 'soe-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge har et av verdens høyeste lønnsnivåer. Forklar hvorfor dette kan være både en fordel og en ulempe for norsk økonomi og konkurranseevne.',
        hints: ['Tenk på produktivitet, levestandard og eksportpriser'],
        solution: 'Fordeler med høyt lønnsnivå: 1) Gir høy levestandard og kjøpekraft for innbyggerne, 2) Tvinger bedrifter til å investere i produktivitetsforbedringer og teknologi, 3) Tiltrekker kvalifisert arbeidskraft fra utlandet, 4) Stimulerer innenlands etterspørsel. Ulemper: 1) Gjør norske produkter dyrere på verdensmarkedet og svekker eksportkonkurranseevnen, 2) Kan føre til at arbeidsintensive virksomheter flyttes til lavkostland, 3) Gjør det vanskeligere for unge og ufaglærte å komme inn i arbeidsmarkedet, 4) Øker kostnadene for offentlig sektor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering – Utfordringer for norsk økonomi

- **Hollandsk syke:** Risikoen for at oljeinntektene svekker andre næringers konkurranseevne
- **Eldrebølgen:** Andelen pensjonister øker, og forholdet mellom yrkesaktive og pensjonister synker
- **Grønn omstilling:** Norge må finne nye næringer som kan erstatte petroleumsinntektene
- **Konkurranseevne:** Høyt lønnsnivå krever høy produktivitet for å hevde seg internasjonalt
- **Produktivitet:** Veksten har avtatt, og tjenestesektorens dominans gjør det vanskeligere å øke den
- **Frontfagsmodellen** sikrer at lønningene ikke vokser raskere enn produktiviteten
- Utfordringene henger sammen og krever helhetlige politiske løsninger`,
    },
    {
      id: 'soe-4-5-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'soe-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to av de fem hovedutfordringene for norsk økonomi (hollandsk syke, eldrebølgen, grønn omstilling, konkurranseevne, produktivitet). Gjør rede for hvordan disse to utfordringene henger sammen, og foreslå tiltak som kan adressere begge samtidig.',
        hints: ['Vis at utfordringene forsterker hverandre, og finn tiltak som løser flere problemer samtidig'],
        solution: 'Eksempel med eldrebølgen og produktivitet: Eldrebølgen gir færre yrkesaktive per pensjonist, noe som krever enten høyere skatter eller kutt i velferd. Økt produktivitet kan motvirke dette ved at de som jobber, skaper mer verdi per arbeidstime. Tiltak som adresserer begge: 1) Investere i digitalisering og kunstig intelligens i offentlig sektor (øker produktiviteten og reduserer behovet for arbeidskraft i helse/omsorg). 2) Styrke etter- og videreutdanning slik at eldre arbeidstakere kan jobbe lenger og mer produktivt. 3) Fremme innovasjon i helseteknologi (velferdsteknologi) som lar eldre bo hjemme lenger med mindre hjelp. 4) Øke pensjonsalderen i takt med levealderen, slik at flere er yrkesaktive.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-4-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-4-5-ex-7',
        number: '4.5.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr produktivitet?',
        multipleChoiceOptions: [
          'Mengden verdiskaping per arbeidstime',
          'Hvor mange timer folk jobber i uken',
          'Hvor mye en bedrift selger i løpet av et år',
          'Antall ansatte i en bedrift',
        ],
        hints: ['Tenk på forholdet mellom det som produseres og ressursene som brukes'],
        solution: 'Produktivitet er mengden verdiskaping per arbeidstime. Høy produktivitet betyr at vi produserer mer verdi med samme eller mindre ressursinnsats. Norge har høy produktivitet, men veksten har avtatt de siste årene.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i seksjon 4
// ============================================================================

export const SAMFOKONOMI_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_4_1, CHAPTER_SAMFOKONOMI_1_4_2, CHAPTER_SAMFOKONOMI_1_4_3,
  CHAPTER_SAMFOKONOMI_1_4_4, CHAPTER_SAMFOKONOMI_1_4_5,
];

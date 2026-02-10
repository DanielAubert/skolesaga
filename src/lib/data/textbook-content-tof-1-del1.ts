/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 (VG2) - Del 1
 *
 * Seksjon 1: Vitenskapelig metode (Kapittel 1.1–1.8)
 * Denne filen inneholder kapittel 1.1–1.8.
 *
 * Følger LK20 læreplan for ToF 1 (TOF01-01)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Hva er vitenskap?
// ============================================================================

export const CHAPTER_TOF_1_1_1: TextbookChapter = {
  id: 'tof-1-1-1',
  courseId: 'tof-1',
  chapterNumber: '1.1',
  title: 'Hva er vitenskap?',
  description: 'Vitenskapens kjennetegn, ulike vitenskapsgrener og vitenskapens rolle i samfunnet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for kjennetegn ved naturvitenskapelig metode',
    'drøfte vitenskapens rolle i samfunnet og teknologiutviklingen',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-1-intro',
      type: 'text',
      content: `## Hva er vitenskap?

Vitenskap er en systematisk måte å skaffe seg kunnskap om verden på. Vi bruker vitenskap til å forstå alt fra universets opprinnelse til hvordan celler fungerer, fra klimaendringer til menneskelig atferd. Men hva skiller vitenskap fra andre måter å skaffe kunnskap på?

I dette kapittelet skal vi se på hva som kjennetegner vitenskap, hvordan ulike vitenskapsgrener skiller seg fra hverandre, og hvilken rolle vitenskap spiller i samfunnet vårt.`,
    },

    // --- BLOKK 1: Vitenskapens kjennetegn ---
    {
      id: 'tof1-1-1-def-1',
      type: 'definition',
      title: 'Vitenskap',
      content: `**Vitenskap** er en systematisk metode for å oppnå kunnskap gjennom observasjon, eksperimentering og logisk resonnering.

Vitenskapelig kunnskap kjennetegnes av at den er:
- **Systematisk:** Følger en strukturert fremgangsmåte
- **Etterprøvbar:** Andre forskere kan gjenta undersøkelsen og sjekke resultatene
- **Objektiv:** Basert på observerbare fakta, ikke personlige meninger
- **Foreløpig:** Kan revideres i lys av ny kunnskap
- **Kumulativ:** Bygger videre på tidligere forskning`,
    },
    {
      id: 'tof1-1-1-text-1',
      type: 'text',
      content: `### Systematisk tilnærming

Vitenskap skiller seg fra hverdagslig kunnskapsinnhenting ved at den bruker en **strukturert fremgangsmåte**. Mens vi i dagliglivet ofte trekker slutninger basert på tilfeldige observasjoner og personlige erfaringer, krever vitenskap at vi planlegger undersøkelser, samler data på en kontrollert måte, og analyserer resultatene grundig.

Når en forsker vil undersøke om en ny medisin virker, holder det ikke å spørre noen få pasienter om de føler seg bedre. Forskeren må designe et kontrollert eksperiment med mange deltakere, sammenligne med en kontrollgruppe, og bruke statistiske metoder for å vurdere resultatene.

### Etterprøvbarhet

Et av de viktigste kjennetegnene ved vitenskap er **etterprøvbarhet** (replikerbarhet). Når en forsker publiserer sine resultater, må andre forskere kunne gjenta undersøkelsen og få tilsvarende resultater. Dersom ingen klarer å gjenskape funnene, svekkes tilliten til resultatene.

### Objektivitet

Vitenskapelig kunnskap skal være basert på **observerbare fakta**, ikke personlige meninger eller tro. Forskere bruker måleinstrumenter, standardiserte metoder og fagfellevurdering for å redusere subjektivitet. Det betyr ikke at forskere er ufeilbarlige, men systemet er designet for å fange opp feil og skjevheter over tid.`,
    },
    {
      id: 'tof1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Vitenskapelig vs. uvitenskapelig påstand',
      problem: 'Vurder disse to påstandene: (A) «Homeopati virker fordi jeg kjenner noen som ble frisk etter behandling.» (B) «Studier med kontrollgrupper viser at homeopati ikke har bedre effekt enn placebo.» Hvilken av disse er vitenskapelig?',
      solution: `Påstand B er vitenskapelig fordi den:
- Er basert på **systematiske undersøkelser** med kontrollgrupper
- Er **etterprøvbar** – studiene kan gjentas av andre forskere
- Er **objektiv** – basert på data fra mange pasienter, ikke enkelttilfeller

Påstand A er ikke vitenskapelig fordi den:
- Baserer seg på en **enkeltobservasjon** (anekdotisk bevis)
- Ikke kontrollerer for **placeboeffekt** eller at sykdommen gikk over av seg selv
- Er subjektiv og kan ikke etterprøves systematisk`,
    },
    {
      id: 'tof1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er et kjennetegn ved vitenskapelig kunnskap?',
        options: [
          { id: 'a', text: 'Den er uforanderlig og endelig', isCorrect: false },
          { id: 'b', text: 'Den er basert på personlig erfaring', isCorrect: false },
          { id: 'c', text: 'Den er etterprøvbar og kan revideres', isCorrect: true },
          { id: 'd', text: 'Den krever enighet blant alle forskere', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Vitenskapelig kunnskap er etterprøvbar (andre kan gjenta forsøket) og foreløpig (kan revideres når nye data foreligger). Den er verken uforanderlig (A) eller basert på personlig erfaring (B). Uenighet mellom forskere er en naturlig del av vitenskapelig prosess (D).',
      },
    },

    // --- BLOKK 2: Vitenskapsgrenene ---
    {
      id: 'tof1-1-1-text-2',
      type: 'text',
      content: `### De tre vitenskapsgrenene

Vitenskap deles tradisjonelt inn i tre hovedgrener, som skiller seg fra hverandre i metode, studieobjekt og kunnskapsideal:

**1. Naturvitenskap** studerer naturfenomener og bruker eksperimenter og observasjoner. Fysikk, kjemi, biologi og geologi er eksempler. Målet er å finne lovmessigheter og årsakssammenhenger i naturen.

**2. Samfunnsvitenskap** studerer mennesker i samfunnet – hvordan vi organiserer oss, tar beslutninger og påvirker hverandre. Sosiologi, økonomi, statsvitenskap og psykologi er eksempler. Metoder inkluderer spørreundersøkelser, intervjuer og statistisk analyse.

**3. Humaniora** studerer menneskelig kultur og uttrykk – språk, historie, filosofi, kunst og religion. Metodene er ofte tolkende (hermeneutiske) og fokuserer på forståelse av mening, snarere enn å finne universelle lover.`,
    },
    {
      id: 'tof1-1-1-note-1',
      type: 'note',
      title: 'Tverrfaglig forskning',
      content: 'I moderne forskning er grensene mellom vitenskapsgrenene ofte uklare. **Tverrfaglig forskning** kombinerer metoder og perspektiver fra flere grener. For eksempel bruker klimaforskning naturvitenskapelige modeller, samfunnsvitenskapelig politikkanalyse og humanistisk etisk refleksjon.',
    },
    {
      id: 'tof1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En forsker undersøker hvordan sosiale medier påvirker ungdommers selvbilde ved å gjennomføre spørreundersøkelser og statistisk analyse. Hvilken vitenskapsgren tilhører dette?',
        options: [
          { id: 'a', text: 'Naturvitenskap', isCorrect: false },
          { id: 'b', text: 'Samfunnsvitenskap', isCorrect: true },
          { id: 'c', text: 'Humaniora', isCorrect: false },
          { id: 'd', text: 'Teknologi', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Studien undersøker menneskelig atferd i en samfunnskontekst (sosiale medier og selvbilde) og bruker typiske samfunnsvitenskapelige metoder (spørreundersøkelser og statistikk). Hadde forskeren analysert selve innholdet og kulturelle uttrykk i sosiale medier, kunne det vært humaniora.',
      },
    },

    // --- BLOKK 3: Vitenskapens rolle i samfunnet ---
    {
      id: 'tof1-1-1-text-3',
      type: 'text',
      content: `### Vitenskapens rolle i samfunnet

Vitenskap spiller en avgjørende rolle i moderne samfunn på flere måter:

**Teknologisk utvikling:** Vitenskapelig forskning legger grunnlaget for teknologiske innovasjoner. Forståelsen av elektromagnetisme ga oss elektrisitet og kommunikasjonsteknologi. Kunnskap om DNA har revolusjonert medisin og landbruk.

**Kunnskapsbaserte beslutninger:** Politikere og myndigheter bruker vitenskapelig forskning som grunnlag for beslutninger om helse, miljø, utdanning og økonomi. Under pandemier er epidemiologisk forskning avgjørende for å utforme tiltak.

**Kritisk tenkning:** Vitenskapelig metode fremmer kritisk tenkning og evnen til å vurdere påstander. I en tid med «falske nyheter» og desinformasjon er dette viktigere enn noensinne.

### Kort vitenskapshistorie

Moderne vitenskap slik vi kjenner den har røtter tilbake til **den vitenskapelige revolusjonen** på 1500- og 1600-tallet. Sentrale skikkelser som Galileo Galilei, Isaac Newton og Francis Bacon la grunnlaget for systematisk observasjon og eksperimentering som metode.

Før dette dominerte en mer filosofisk tilnærming der man forsøkte å forstå verden gjennom logisk resonnering alene, uten systematisk eksperimentering. Aristoteles' naturfilosofi hadde enorm innflytelse i over tusen år, men ble gradvis erstattet av den eksperimentelle metoden.`,
    },
    {
      id: 'tof1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi to eksempler på hvordan vitenskapelig forskning har ført til viktige teknologiske fremskritt. Forklar sammenhengen mellom den vitenskapelige oppdagelsen og den teknologiske anvendelsen.',
        hints: ['Tenk på oppdagelser innen fysikk, kjemi eller biologi som har ført til teknologi vi bruker i dag.'],
        solution: 'Eksempel 1: Oppdagelsen av elektromagnetisk induksjon (Faraday, 1831) la grunnlaget for elektromotorer og generatorer, som er grunnlaget for all strømproduksjon og elektrisk transport i dag.\n\nEksempel 2: Oppdagelsen av DNAs struktur (Watson og Crick, 1953) muliggjorde utviklingen av genteknologi, inkludert PCR-testing, genmodifiserte organismer og mRNA-vaksiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Vitenskap** er en systematisk, etterprøvbar og objektiv måte å skaffe kunnskap på.
- Vitenskapelig kunnskap er **foreløpig** og kan revideres i lys av nye funn.
- Vi skiller mellom **naturvitenskap**, **samfunnsvitenskap** og **humaniora**, som har ulike metoder og studieobjekter.
- Vitenskap spiller en sentral rolle i **teknologisk utvikling**, **kunnskapsbaserte beslutninger** og **kritisk tenkning**.
- Den vitenskapelige revolusjonen på 1500–1600-tallet markerte overgangen til systematisk eksperimentering som metode.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom naturvitenskap, samfunnsvitenskap og humaniora. Gi ett eksempel på en problemstilling fra hver gren, og beskriv kort hvilken metode som ville vært egnet for å undersøke den.',
        hints: ['Tenk på hva som studeres, og hvilke metoder som brukes i hver gren.'],
        solution: 'Naturvitenskap studerer naturfenomener gjennom eksperimenter. Eksempel: «Hva skjer med plantevekst ved ulik lysintensitet?» – undersøkes med kontrollert eksperiment.\n\nSamfunnsvitenskap studerer mennesker i samfunnet. Eksempel: «Hvordan påvirker arbeidsledighet psykisk helse?» – undersøkes med spørreundersøkelser og statistikk.\n\nHumaniora studerer kultur og mening. Eksempel: «Hvordan skildres fattigdom i norsk litteratur?» – undersøkes med tekstanalyse og tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Vitenskap gir oss sikker kunnskap om virkeligheten.» I svaret ditt bør du ta stilling til om vitenskapelig kunnskap er absolutt eller foreløpig, og diskutere minst ett historisk eksempel der vitenskapelig konsensus har endret seg.',
        hints: ['Tenk på begreper som falsifisering, paradigmeskifter og vitenskapens selvkorrigerende natur.'],
        solution: 'Vitenskap gir oss den mest pålitelige kunnskapen vi har, men den er ikke absolutt sikker. Vitenskapelig kunnskap er foreløpig og kan revideres.\n\nHistorisk eksempel: I lang tid mente forskere at magesår skyldtes stress og kosthold. I 1982 oppdaget Barry Marshall og Robin Warren at bakterien Helicobacter pylori var hovedårsaken. Dette endret behandlingen fullstendig – fra stressreduksjon til antibiotika.\n\nVitenskapens styrke ligger nettopp i dens evne til å korrigere seg selv: gjennom nye data, bedre metoder og kritisk etterprøving kan feilaktige teorier forkastes og erstattes med bedre forklaringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Naturvitenskapelig metode
// ============================================================================

export const CHAPTER_TOF_1_1_2: TextbookChapter = {
  id: 'tof-1-1-2',
  courseId: 'tof-1',
  chapterNumber: '1.2',
  title: 'Naturvitenskapelig metode',
  description: 'Den hypotetisk-deduktive metoden, induktiv og deduktiv tilnærming, Popper og Kuhn.',
  estimatedMinutes: 35,
  competenceGoals: [
    'gjøre rede for den hypotetisk-deduktive metoden',
    'skille mellom induktiv og deduktiv tilnærming',
    'drøfte vitenskapsfilosofiske perspektiver på kunnskap',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-2-intro',
      type: 'text',
      content: `## Naturvitenskapelig metode

Naturvitenskap har utviklet en kraftig fremgangsmåte for å undersøke verden – den **naturvitenskapelige metoden**. Denne metoden gir oss et rammeverk for å stille spørsmål, teste ideer og bygge kunnskap som vi kan stole på.

I dette kapittelet skal vi se på den hypotetisk-deduktive metoden, forskjellen mellom induktiv og deduktiv tilnærming, og hva kjente vitenskapsfilosofer som Karl Popper og Thomas Kuhn har bidratt med til vår forståelse av vitenskap.`,
    },

    // --- BLOKK 1: Den hypotetisk-deduktive metoden ---
    {
      id: 'tof1-1-2-def-1',
      type: 'definition',
      title: 'Den hypotetisk-deduktive metoden',
      content: `**Den hypotetisk-deduktive metoden** (HD-metoden) er den mest brukte fremgangsmåten i naturvitenskap. Den følger disse stegene:

1. **Observasjon:** Vi observerer et fenomen som vi ønsker å forklare
2. **Problemstilling:** Vi formulerer et presist spørsmål
3. **Hypotese:** Vi foreslår en mulig forklaring som kan testes
4. **Deduksjon:** Vi utleder testbare forutsigelser fra hypotesen
5. **Eksperiment/test:** Vi gjennomfører undersøkelser for å teste forutsigelsene
6. **Resultat og analyse:** Vi samler inn og analyserer data
7. **Konklusjon:** Vi vurderer om dataene støtter eller svekker hypotesen`,
    },
    {
      id: 'tof1-1-2-text-1',
      type: 'text',
      content: `### Hvordan HD-metoden fungerer i praksis

La oss følge metoden gjennom et konkret eksempel:

**Observasjon:** Du legger merke til at plantene på vinduskarmen som får mest sollys, vokser raskere enn de i skyggen.

**Problemstilling:** Hvordan påvirker lysintensitet plantevekst?

**Hypotese:** Planter som får mer lys, vokser raskere fordi de kan drive mer fotosyntese.

**Deduksjon (forutsigelse):** Hvis hypotesen er riktig, vil planter som plasseres under sterkere lamper, vokse mer på to uker enn planter under svakere lamper.

**Eksperiment:** Vi setter opp identiske planter under lamper med ulik styrke, holder alle andre forhold like (vann, jord, temperatur), og måler veksten over to uker.

**Resultat:** Plantene under sterkere lamper vokste i gjennomsnitt 3 cm mer enn de under svake lamper.

**Konklusjon:** Resultatene støtter hypotesen om at økt lysintensitet gir økt plantevekst, i hvert fall innenfor det testede intervallet.

Det er viktig å merke seg at vi sier «støtter» og ikke «beviser». Hypotesen kan aldri bli endelig bevist, bare styrket gjennom gjentatte tester.`,
    },
    {
      id: 'tof1-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Semmelweis og håndvask',
      problem: 'Ignaz Semmelweis observerte at dødeligheten blant fødende kvinner var mye høyere på avdelinger der leger utførte obduksjoner før de undersøkte pasientene. Hvordan brukte han HD-metoden?',
      solution: `**Observasjon:** Høy barselfeber-dødelighet på avdeling 1 (med leger), lavere på avdeling 2 (med jordmødre).

**Problemstilling:** Hva forårsaker den høye dødeligheten på avdeling 1?

**Hypotese:** Legene bringer med seg «likstoff» (smittestoffer) fra obduksjoner til fødende kvinner.

**Deduksjon:** Hvis legene vasker hendene i kloroppløsning før undersøkelser, vil dødeligheten synke.

**Eksperiment:** Semmelweis innførte obligatorisk håndvask med kloroppløsning i 1847.

**Resultat:** Dødeligheten sank fra ca. 10 % til under 2 %.

**Konklusjon:** Dataene støttet hypotesen. Smittestoffer fra obduksjoner var årsaken til den høye dødeligheten.

Semmelweis møtte stor motstand fordi man ikke forsto mekanismen (bakterier var ikke oppdaget ennå). Først med Louis Pasteurs arbeid med bakterieteorien ble funnet akseptert.`,
    },
    {
      id: 'tof1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er riktig rekkefølge i den hypotetisk-deduktive metoden?',
        options: [
          { id: 'a', text: 'Hypotese → Observasjon → Eksperiment → Konklusjon', isCorrect: false },
          { id: 'b', text: 'Observasjon → Problemstilling → Hypotese → Eksperiment → Konklusjon', isCorrect: true },
          { id: 'c', text: 'Eksperiment → Observasjon → Hypotese → Konklusjon', isCorrect: false },
          { id: 'd', text: 'Problemstilling → Konklusjon → Eksperiment → Hypotese', isCorrect: false },
        ],
        solution: 'Riktig svar er B. HD-metoden starter med en observasjon som leder til en problemstilling. Deretter formuleres en hypotese, som testes gjennom eksperiment. Til slutt trekkes en konklusjon basert på resultatene.',
      },
    },

    // --- BLOKK 2: Induktiv vs. deduktiv ---
    {
      id: 'tof1-1-2-text-2',
      type: 'text',
      content: `### Induktiv og deduktiv tilnærming

I vitenskapelig resonnering bruker vi to grunnleggende logiske tilnærminger:

**Induktiv tilnærming** går fra **enkeltobservasjoner til generelle regler**. Vi observerer mange enkelttilfeller og trekker en generell slutning:
- Observasjon: Svane 1 er hvit, svane 2 er hvit, svane 3 er hvit ... svane 1000 er hvit.
- Generell slutning: «Alle svaner er hvite.»

Problemet med induksjon er at vi aldri kan observere alle tilfeller. Det tok bare én observasjon av en svart svane i Australia for å motbevise påstanden.

**Deduktiv tilnærming** går fra **generelle regler til spesifikke forutsigelser**:
- Generell regel: Alle pattedyr har lunger.
- Spesifikt tilfelle: Hunder er pattedyr.
- Slutning: Hunder har lunger.

Deduktive slutninger er logisk gyldige – hvis premissene er sanne, må konklusjonen være sann. Men premissene kan være feil.

HD-metoden kombinerer begge: Vi bruker induksjon for å formulere hypoteser basert på observasjoner, og deduksjon for å utlede testbare forutsigelser fra hypotesene.`,
    },
    {
      id: 'tof1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En elev observerer at alle kjente eksemplarer av et mineral er harde, og konkluderer med at «dette mineralet er alltid hardt». Hvilken type resonnering bruker eleven?',
        options: [
          { id: 'a', text: 'Deduktiv', isCorrect: false },
          { id: 'b', text: 'Induktiv', isCorrect: true },
          { id: 'c', text: 'Hypotetisk-deduktiv', isCorrect: false },
          { id: 'd', text: 'Abduktiv', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Eleven går fra enkeltobservasjoner (mange harde eksemplarer) til en generell slutning («alltid hardt»). Dette er induktiv resonnering. Svakheten er at det kan finnes eksemplarer som ikke er harde.',
      },
    },

    // --- BLOKK 3: Popper og Kuhn ---
    {
      id: 'tof1-1-2-text-3',
      type: 'text',
      content: `### Karl Popper og falsifisering

**Karl Popper** (1902–1994) er en av de mest innflytelsesrike vitenskapsfilosofene. Han påpekte et grunnleggende problem med induksjon: Uansett hvor mange observasjoner som støtter en teori, kan vi aldri bevise at den er sann. Men én eneste observasjon kan **motbevise** (falsifisere) den.

Poppers løsning var **falsifiseringsprinsippet**: En vitenskapelig teori må være formulert slik at det i prinsippet er mulig å falsifisere den. Teorier som ikke kan motbevises, er ikke vitenskapelige.

**Eksempel:** «Alle svaner er hvite» er vitenskapelig fordi påstanden kan motbevises ved å finne en svane som ikke er hvit. «Alt skjer etter Guds vilje» er ikke vitenskapelig etter Popper, fordi ingen observasjon kan motbevise påstanden.

### Thomas Kuhn og paradigmeskifter

**Thomas Kuhn** (1922–1996) utfordret synet på vitenskap som en jevn, kumulativ prosess. Han introduserte begrepet **paradigme** – et overordnet rammeverk av teorier, metoder og antagelser som styrer forskningen innenfor et felt.

Kuhn mente at vitenskap utvikler seg i faser:
1. **Normalvitenskap:** Forskere arbeider innenfor det gjeldende paradigmet og løser «puslespill».
2. **Anomalier:** Observasjoner som ikke passer inn i paradigmet, hoper seg opp.
3. **Krise:** Tillit til paradigmet svekkes.
4. **Revolusjon (paradigmeskifte):** Et nytt paradigme erstatter det gamle.

**Eksempler på paradigmeskifter:**
- Fra geosentrisk til heliosentrisk verdensbilde (Kopernikus)
- Fra newtonsk mekanikk til relativitetsteori (Einstein)
- Fra fiksisme til platetektonikk (Wegener/moderne geologi)`,
    },
    {
      id: 'tof1-1-2-tip-1',
      type: 'tip',
      title: 'Popper vs. Kuhn',
      content: 'En enkel måte å huske forskjellen: **Popper** handler om *enkelttesters* logikk (kan vi motbevise?), mens **Kuhn** handler om *den store sammenhengen* (hvordan endres hele vitenskapelige verdensbilder over tid?).',
    },
    {
      id: 'tof1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Karl Poppers falsifiseringsprinsipp med egne ord. Gi deretter et eksempel på en påstand som er falsifiserbar og en som ikke er det, og begrunn hvorfor.',
        hints: ['Tenk på hva det betyr at noe i prinsippet kan motbevises.'],
        solution: 'Falsifiseringsprinsippet sier at en vitenskapelig påstand må kunne motbevises gjennom observasjon eller eksperiment. Det er ikke nok at en teori støttes av data – den må også formuleres slik at det er mulig å finne bevis som ville motbevise den.\n\nFalsifiserbar: «Vann koker ved 100 °C ved normalt trykk.» Denne kan motbevises ved å vise at vann koker ved en annen temperatur under disse forholdene.\n\nIkke falsifiserbar: «Horoskopet ditt beskriver din personlighet.» Horoskoptekster er så vage at nesten alle kan kjenne seg igjen, uansett stjernetegn. Det finnes ingen observasjon som kan motbevise påstanden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Den hypotetisk-deduktive metoden** (HD-metoden) er den sentrale fremgangsmåten i naturvitenskap: observasjon → problemstilling → hypotese → deduksjon → eksperiment → konklusjon.
- **Induktiv resonnering** går fra enkeltobservasjoner til generelle regler, mens **deduktiv resonnering** går fra generelle regler til spesifikke forutsigelser.
- **Karl Popper** hevdet at vitenskapelige teorier må være **falsifiserbare** – de må i prinsippet kunne motbevises.
- **Thomas Kuhn** beskrev vitenskapelig utvikling som **paradigmeskifter** – perioder med normalvitenskap avbrutt av revolusjoner der hele det vitenskapelige rammeverket endres.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de syv stegene i den hypotetisk-deduktive metoden ved å bruke et selvvalgt eksempel. Formuler observasjon, problemstilling, hypotese, deduksjon, eksperiment, resultat og konklusjon.',
        hints: ['Velg et fenomen du kan undersøke med et enkelt eksperiment – for eksempel noe fra dagliglivet.'],
        solution: 'Eksempel med kaffedrikking og søvn:\n\n1. Observasjon: Jeg sover dårlig på dager jeg drikker kaffe sent.\n2. Problemstilling: Påvirker kaffeinntak etter kl. 18 søvnkvaliteten?\n3. Hypotese: Koffein sent på dagen gjør det vanskeligere å sovne.\n4. Deduksjon: Hvis hypotesen stemmer, vil personer som drikker kaffe etter kl. 18 bruke lengre tid på å sovne enn de som ikke gjør det.\n5. Eksperiment: 20 forsøkspersoner deles i to grupper – én drikker kaffe kl. 19, den andre drikker koffeinfri kaffe. Tiden til innsovning måles.\n6. Resultat: Kaffegruppen brukte i snitt 35 minutter lengre på å sovne.\n7. Konklusjon: Resultatene støtter hypotesen om at koffein etter kl. 18 forverrer søvnkvaliteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign synspunktene til Karl Popper og Thomas Kuhn på hvordan vitenskap utvikler seg. Hvem av dem mener du gir den beste beskrivelsen av vitenskapelig fremgang? Begrunn svaret ditt.',
        hints: ['Tenk på forskjellen mellom falsifisering av enkeltpåstander og endringer i hele vitenskapelige rammeverk.'],
        solution: 'Popper ser vitenskapelig fremgang som en logisk prosess der hypoteser testes og forkastes gjennom falsifisering. Vitenskap utvikler seg ved at dårlige teorier gradvis lukes ut. Kuhn derimot ser vitenskap som perioder med stabilitet (normalvitenskap) avbrutt av revolusjoner (paradigmeskifter) der hele det vitenskapelige verdensbildet endres.\n\nBegge har viktige poenger. Popper beskriver godt det logiske grunnlaget for vitenskapelig testing, men Kuhn gir en mer realistisk beskrivelse av hvordan forskerfellesskap faktisk fungerer – med treghet, motstand mot nye ideer og plutselige gjennombrudd.\n\nEn balansert vurdering anerkjenner at falsifisering er et viktig ideal, men at vitenskapelig praksis ofte er mer sammensatt enn Poppers modell tilsier, slik Kuhn beskriver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3: Hypoteser og variabler
// ============================================================================

export const CHAPTER_TOF_1_1_3: TextbookChapter = {
  id: 'tof-1-1-3',
  courseId: 'tof-1',
  chapterNumber: '1.3',
  title: 'Hypoteser og variabler',
  description: 'Formulere testbare hypoteser, nullhypotese, uavhengig/avhengig/kontrollert variabel og operasjonalisering.',
  estimatedMinutes: 30,
  competenceGoals: [
    'formulere testbare hypoteser for egne undersøkelser',
    'identifisere og definere variabler i et forsøk',
    'operasjonalisere begreper slik at de kan måles',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-3-intro',
      type: 'text',
      content: `## Hypoteser og variabler

En god hypotese og tydelig definerte variabler er grunnmuren i ethvert vitenskapelig forsøk. Uten en klar hypotese vet vi ikke hva vi tester, og uten definerte variabler kan vi ikke tolke resultatene.

I dette kapittelet lærer du å formulere testbare hypoteser, skille mellom ulike typer hypoteser, identifisere variabler og operasjonalisere begreper slik at de kan måles i praksis.`,
    },

    // --- BLOKK 1: Testbare hypoteser ---
    {
      id: 'tof1-1-3-def-1',
      type: 'definition',
      title: 'Hypotese',
      content: `En **hypotese** er en foreløpig forklaring eller forutsigelse som kan testes gjennom observasjon eller eksperiment.

**Kjennetegn på en god hypotese:**
- Den er **testbar** – det må være mulig å samle data som støtter eller svekker den
- Den er **falsifiserbar** – det må i prinsippet være mulig å motbevise den
- Den er **spesifikk** – den angir en klar sammenheng mellom variabler
- Den er basert på **eksisterende kunnskap** eller observasjoner

**Eksempler:**
- Svak: «Temperatur påvirker noe.» (for vag)
- Bedre: «Høyere temperatur øker reaksjonshastigheten for nedbrytning av hydrogenperoksid.» (spesifikk og testbar)`,
    },
    {
      id: 'tof1-1-3-text-1',
      type: 'text',
      content: `### Nullhypotese og alternativ hypotese

I forskning opererer vi vanligvis med to typer hypoteser:

**Nullhypotesen (H₀)** sier at det **ikke** er noen sammenheng eller forskjell mellom variablene. Den representerer «status quo» – at det vi undersøker ikke har noen effekt.

**Den alternative hypotesen (H₁ eller Hₐ)** sier at det **er** en sammenheng eller forskjell. Dette er det vi faktisk ønsker å vise.

**Eksempel:**
- H₀: «Gjødseltype har ingen effekt på plantevekst.» (Ingen forskjell mellom gruppene.)
- H₁: «Planter som får organisk gjødsel, vokser raskere enn planter som får kunstgjødsel.»

I forskning prøver vi å **avkrefte nullhypotesen**. Hvis dataene viser en tydelig forskjell som ikke skyldes tilfeldigheter, forkaster vi H₀ og aksepterer H₁. Denne tilnærmingen sikrer at vi ikke konkluderer med en effekt uten tilstrekkelig bevis.`,
    },
    {
      id: 'tof1-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Formulere hypoteser',
      problem: 'Du ønsker å undersøke om musikktype påvirker konsentrasjonsevnen. Formuler en nullhypotese og en alternativ hypotese.',
      solution: `**Nullhypotese (H₀):** Musikktype har ingen effekt på konsentrasjonsevnen. Det er ingen forskjell i konsentrasjonsskår mellom personer som lytter til klassisk musikk, popmusikk eller stillhet.

**Alternativ hypotese (H₁):** Musikktype påvirker konsentrasjonsevnen. Personer som lytter til klassisk musikk, oppnår høyere konsentrasjonsskår enn personer som lytter til popmusikk eller sitter i stillhet.

Merk: Den alternative hypotesen er spesifikk – den angir en retning (klassisk musikk gir *høyere* skår). En slik hypotese kalles en **ensidig** hypotese. En **tosidig** hypotese ville bare sagt at det er en forskjell, uten å angi retning.`,
    },
    {
      id: 'tof1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en korrekt nullhypotese for et forsøk der man tester om ulik treningsmengde påvirker kondisjon?',
        options: [
          { id: 'a', text: 'Trening forbedrer kondisjon', isCorrect: false },
          { id: 'b', text: 'Det er ingen forskjell i kondisjon mellom grupper med ulik treningsmengde', isCorrect: true },
          { id: 'c', text: 'Mer trening gir dårligere kondisjon', isCorrect: false },
          { id: 'd', text: 'Kondisjon avhenger av treningsmengde', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Nullhypotesen uttrykker alltid «ingen effekt» eller «ingen forskjell». Alternativ A og D beskriver en sammenheng (alternativ hypotese), mens C er en spesifikk retningshypotese.',
      },
    },

    // --- BLOKK 2: Variabler ---
    {
      id: 'tof1-1-3-def-2',
      type: 'definition',
      title: 'Variabler i forsøk',
      content: `En **variabel** er en faktor som kan endres, kontrolleres eller måles i et forsøk.

**Tre hovedtyper:**
- **Uavhengig variabel** (UV): Faktoren vi *endrer* eller *manipulerer* for å se effekten. Vi bestemmer selv verdien av denne.
- **Avhengig variabel** (AV): Faktoren vi *måler* eller *observerer*. Den «avhenger» av den uavhengige variabelen.
- **Kontrollerte variabler** (KV): Faktorer vi holder *konstante* for å sikre at bare den uavhengige variabelen påvirker resultatet.

**Huskeregel:** Den uavhengige variabelen er det vi **gjør**, den avhengige variabelen er det vi **måler**, og kontrollerte variabler er det vi **holder likt**.`,
    },
    {
      id: 'tof1-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Identifisere variabler',
      problem: 'I et forsøk undersøker vi om pH-verdien i jord påvirker veksten av gulrøtter. Vi planter frø i jord med pH 5, 6, 7 og 8, og måler gjennomsnittlig gulrotlengde etter 8 uker. Identifiser variablene.',
      solution: `**Uavhengig variabel (UV):** pH-verdien i jorden (5, 6, 7, 8) – dette er det vi endrer mellom gruppene.

**Avhengig variabel (AV):** Gjennomsnittlig gulrotlengde etter 8 uker – dette er det vi måler.

**Kontrollerte variabler (KV):**
- Samme type gulrotfrø
- Lik mengde vann
- Lik temperatur og lysforhold
- Lik jordtype (bortsett fra pH)
- Lik dyrkingsperiode (8 uker)
- Lik størrelse på potter

Alle disse holdes konstante for å sikre at eventuelle forskjeller i vekst faktisk skyldes pH-endringen.`,
    },
    {
      id: 'tof1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et forsøk undersøker om mengden søvn påvirker elevenes resultat på en matteprøve. Elever inndeles i grupper som sover 5, 7 eller 9 timer natten før prøven. Identifiser den uavhengige variabelen, den avhengige variabelen og minst tre kontrollerte variabler.',
        hints: ['Husk: UV er det du endrer, AV er det du måler, KV er det du holder likt.'],
        solution: 'Uavhengig variabel: Antall timers søvn (5, 7 eller 9 timer).\n\nAvhengig variabel: Resultat på matteprøven (poeng eller karakter).\n\nKontrollerte variabler: (1) Samme matteprøve for alle, (2) Samme tidspunkt for prøven, (3) Samme forberedelsestid/pensum, (4) Samme måltid før prøven, (5) Sammenlignbart matematikknivå blant elevene i utgangspunktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- BLOKK 3: Operasjonalisering ---
    {
      id: 'tof1-1-3-def-3',
      type: 'definition',
      title: 'Operasjonalisering',
      content: `**Operasjonalisering** er prosessen med å definere et abstrakt begrep på en konkret, målbar måte.

Mange begreper vi bruker i dagligtalen er for vage til å brukes direkte i forskning. Vi må gjøre dem **operasjonelle** – definere nøyaktig hva vi måler og hvordan.

**Eksempel:** Begrepet «stress»
- Vag definisjon: «Å føle seg presset»
- Operasjonell definisjon: «Kortisolnivå i spytt målt i nmol/L» eller «Skår på Perceived Stress Scale (0–40)»`,
    },
    {
      id: 'tof1-1-3-text-2',
      type: 'text',
      content: `### Hvorfor er operasjonalisering viktig?

Uten operasjonalisering kan forskere tolke begreper ulikt, og resultatene kan ikke sammenlignes. Når alle definerer «kondisjon» som «VO₂-max målt i ml/kg/min», vet vi nøyaktig hva som måles.

**Eksempler på operasjonalisering:**

| Abstrakt begrep | Operasjonell definisjon |
|---|---|
| Intelligens | Skår på en standardisert IQ-test |
| Fysisk aktivitet | Antall skritt per dag (målt med skritteller) |
| Plantevekst | Høydeøkning i cm over 14 dager |
| Luftforurensning | Konsentrasjon av PM2.5-partikler (µg/m³) |
| Læring | Prosentvis forbedring fra pre-test til post-test |

Merk at operasjonaliseringen alltid er en forenkling av det abstrakte begrepet. «Intelligens» er langt mer enn en IQ-skår, men IQ-skåren gjør begrepet målbart og sammenlignbart.`,
    },
    {
      id: 'tof1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken operasjonalisering av «trivsel på arbeidsplassen» er best egnet for et vitenskapelig forsøk?',
        options: [
          { id: 'a', text: 'Om folk generelt liker jobben sin', isCorrect: false },
          { id: 'b', text: 'Gjennomsnittlig skår på Job Satisfaction Survey (JSS) med 36 spørsmål på skala 1–6', isCorrect: true },
          { id: 'c', text: 'Om de ansatte smiler mye', isCorrect: false },
          { id: 'd', text: 'Antall klager sendt til ledelsen siste år', isCorrect: false },
        ],
        solution: 'Riktig svar er B. JSS er et standardisert og validert måleinstrument som gir en presis, kvantifiserbar og sammenlignbar måling. Alternativ A er for vag, C er subjektiv og upålitelig, og D måler bare én side av mistrivsel – mange mistrives uten å klage formelt.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En **hypotese** er en testbar forutsigelse om sammenhengen mellom variabler.
- **Nullhypotesen (H₀)** sier at det ikke er noen sammenheng, mens den **alternative hypotesen (H₁)** sier at det er en sammenheng.
- **Uavhengig variabel** (UV) er det vi endrer, **avhengig variabel** (AV) er det vi måler, og **kontrollerte variabler** (KV) er det vi holder konstant.
- **Operasjonalisering** gjør abstrakte begreper målbare og konkrete, slik at forsøk kan gjennomføres og resultater kan sammenlignes.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal undersøke om romtemperatur påvirker konsentrasjonsevnen hos elever. Formuler en nullhypotese og en alternativ hypotese. Identifiser alle variabler og beskriv hvordan du vil operasjonalisere «konsentrasjonsevne».',
        hints: ['Tenk på en konkret test eller målemetode for konsentrasjon.'],
        solution: 'H₀: Romtemperatur har ingen effekt på konsentrasjonsevnen hos elever.\nH₁: Elever som arbeider i rom med 20–22 °C, oppnår bedre konsentrasjonsskår enn elever i rom med 28–30 °C.\n\nUavhengig variabel: Romtemperatur (20–22 °C vs. 28–30 °C).\nAvhengig variabel: Konsentrasjonsevne, operasjonalisert som antall korrekte svar på en standardisert konsentrasjonstest (f.eks. d2-testen) gjennomført på 10 minutter.\nKontrollerte variabler: Samme tid på dagen, samme type oppgave, lik belysning, like lang tid, sammenlignbare elever (alder, fagnivå).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Operasjonalisering innebærer alltid en forenkling av virkeligheten. Velg begrepet «livskvalitet» og foreslå to ulike operasjonaliseringer. Diskuter styrker og svakheter ved hver, og drøft hva som kan gå tapt når et komplekst begrep forenkles til et tall.',
        hints: ['Tenk på subjektive vs. objektive mål, og hva som fanges opp – og hva som ikke gjør det.'],
        solution: 'Operasjonalisering 1: Skår på WHO Quality of Life-BREF spørreskjema (WHOQOL-BREF) som dekker fysisk helse, psykisk helse, sosiale relasjoner og miljø. Styrke: Fanger mange dimensjoner. Svakhet: Basert på selvrapportering, kan påvirkes av humør den dagen.\n\nOperasjonalisering 2: Human Development Index (HDI) basert på forventet levealder, utdanningsnivå og inntekt. Styrke: Objektive, sammenlignbare data. Svakhet: Fanger ikke subjektiv opplevelse, individuelle forskjeller eller kulturelle verdier.\n\nNår vi forenkler «livskvalitet» til et tall, mister vi nyanser som individuelle prioriteringer, kulturelle forskjeller og kontekst. En person med lav inntekt i et tett sosialt fellesskap kan ha høyere livskvalitet enn en velstående, men ensom person – noe som ikke fanges av objektive mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.4: Eksperimentdesign
// ============================================================================

export const CHAPTER_TOF_1_1_4: TextbookChapter = {
  id: 'tof-1-1-4',
  courseId: 'tof-1',
  chapterNumber: '1.4',
  title: 'Eksperimentdesign',
  description: 'Kontrollgruppe, blindforsøk, dobbeltblindforsøk, randomisering, replikasjon og placebo.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planlegge eksperimenter med kontrollgruppe og eksperimentgruppe',
    'gjøre rede for betydningen av blindforsøk, randomisering og replikasjon',
    'vurdere kvaliteten på eksperimentelt design',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-4-intro',
      type: 'text',
      content: `## Eksperimentdesign

En god hypotese og tydelige variabler er nødvendig, men ikke tilstrekkelig for et vellykket forsøk. Vi må også tenke nøye gjennom **hvordan** forsøket skal gjennomføres. Et godt eksperimentdesign sikrer at vi faktisk kan trekke gyldige slutninger fra resultatene.

I dette kapittelet lærer du om de viktigste prinsippene for å designe gode eksperimenter: kontrollgrupper, blinding, randomisering, replikasjon og placebo.`,
    },

    // --- BLOKK 1: Kontrollgruppe og eksperimentgruppe ---
    {
      id: 'tof1-1-4-def-1',
      type: 'definition',
      title: 'Kontrollgruppe og eksperimentgruppe',
      content: `**Eksperimentgruppen** er gruppen som utsettes for det vi undersøker (behandlingen, tiltaket, endringen).

**Kontrollgruppen** er gruppen som **ikke** utsettes for det vi undersøker. Den fungerer som en referanse for sammenligning.

Kontrollgruppen er avgjørende fordi den viser hva som ville skjedd *uten* påvirkningen. Uten kontrollgruppe kan vi ikke vite om endringen vi observerer skyldes det vi testet, eller andre faktorer som tid, modning eller tilfeldige variasjoner.`,
    },
    {
      id: 'tof1-1-4-text-1',
      type: 'text',
      content: `### Hvorfor kontrollgruppe er nødvendig

Tenk deg at du tester en ny undervisningsmetode. Du bruker metoden i én klasse, og etter tre måneder har elevene forbedret seg med 15 %. Betyr det at metoden virker?

Ikke nødvendigvis. Uten en kontrollgruppe (en klasse som undervises på vanlig måte) vet du ikke om forbedringen skyldes den nye metoden, naturlig modning, at elevene øvde mer, eller at prøven var lettere. Kontrollgruppen gir oss et **sammenligningsgrunnlag**.

### Positiv og negativ kontroll

I naturvitenskapelige forsøk bruker vi ofte to typer kontroller:

**Negativ kontroll:** Ingen behandling – viser hva som skjer uten påvirkning. Eksempel: Planter som bare får vann (ingen gjødsel).

**Positiv kontroll:** En kjent behandling som vi vet virker – bekrefter at forsøksoppsettet fungerer. Eksempel: Planter som får en velprøvd gjødseltype.`,
    },
    {
      id: 'tof1-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Kontrollert forsøk med gjødsel',
      problem: 'Du vil teste om et nytt gjødselmiddel gir bedre tomatavling. Design et forsøk med kontrollgruppe.',
      solution: `**Eksperimentgruppe:** 20 tomatplanter som får det nye gjødselmiddelet.

**Negativ kontroll:** 20 tomatplanter som bare får vann (ingen gjødsel).

**Positiv kontroll:** 20 tomatplanter som får et etablert, velprøvd gjødselmiddel.

**Kontrollerte variabler:** Samme tomatvariant, lik jord, lik mengde vann, likt lysforhold, lik temperatur, lik planteavstand.

**Avhengig variabel:** Total vekt av tomater høstet per plante etter 12 uker.

Den negative kontrollen viser om gjødselen gjør noen forskjell overhodet. Den positive kontrollen viser om forsøksoppsettet fungerer (hvis den velprøvde gjødselen ikke gir effekt, er noe galt med oppsettet).`,
    },
    {
      id: 'tof1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig å ha en kontrollgruppe i et eksperiment?',
        options: [
          { id: 'a', text: 'For å ha flere forsøkspersoner', isCorrect: false },
          { id: 'b', text: 'For å ha noe å sammenligne eksperimentgruppen med', isCorrect: true },
          { id: 'c', text: 'For å gjøre eksperimentet billigere', isCorrect: false },
          { id: 'd', text: 'For å teste flere hypoteser samtidig', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Kontrollgruppen gir et referansepunkt som viser hva som skjer uten den påvirkningen vi tester. Uten kontrollgruppe kan vi ikke vite om observerte endringer skyldes vår påvirkning eller andre faktorer.',
      },
    },

    // --- BLOKK 2: Blinding og placebo ---
    {
      id: 'tof1-1-4-def-2',
      type: 'definition',
      title: 'Blinding og placebo',
      content: `**Blindforsøk** (enkeltblinding): Forsøkspersonene vet ikke om de er i eksperimentgruppen eller kontrollgruppen. Dette hindrer at forventninger påvirker resultatet.

**Dobbeltblindforsøk:** Verken forsøkspersonene eller forskerne som samler inn data vet hvem som er i hvilken gruppe. Dette hindrer at forskernes forventninger påvirker målingene.

**Placebo:** En virkningsløs behandling (f.eks. sukkerpille) som gis til kontrollgruppen for at den skal tro den mottar ekte behandling.

**Placeboeffekten:** Mange opplever bedring bare fordi de *tror* de får behandling. Placebo kontrollerer for denne effekten.`,
    },
    {
      id: 'tof1-1-4-text-2',
      type: 'text',
      content: `### Hvorfor blinding er viktig

Forventninger kan ha sterk innvirkning på resultater. Hvis en pasient vet at hun får en ny medisin, kan hun rapportere bedring fordi hun forventer det (placeboeffekten). Hvis en forsker vet hvilke pasienter som får medisin, kan hun ubevisst måle eller tolke data annerledes (forskerbias).

Dobbeltblindforsøk anses som **gullstandarden** i medisinsk forskning fordi det fjerner begge disse feilkildene.

### Eksempel på forskerbias

I en studie av et nytt smertestillende middel vurderer en lege smertenivået til pasientene. Hvis legen vet hvem som har fått ekte medisin, kan han ubevisst tolke pasientens utsagn mer positivt for de som fikk ekte medisin. I et dobbeltblindforsøk fjernes denne muligheten.

### Når blinding er umulig

Noen ganger er blinding ikke mulig. Hvis du tester effekten av trening vs. ikke-trening, kan deltakerne selvsagt ikke blindes for om de trener eller ikke. Da må forskerne være ekstra oppmerksomme på andre feilkilder og bruke objektive målemetoder.`,
    },
    {
      id: 'tof1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'I et dobbeltblindforsøk vet:',
        options: [
          { id: 'a', text: 'Forsøkspersonene vet ikke hvilken gruppe de er i, men forskerne vet', isCorrect: false },
          { id: 'b', text: 'Forskerne vet ikke hvilken gruppe personene er i, men forsøkspersonene vet', isCorrect: false },
          { id: 'c', text: 'Verken forsøkspersonene eller forskerne som samler data vet hvem som er i hvilken gruppe', isCorrect: true },
          { id: 'd', text: 'Ingen i hele forskningsprosjektet vet hvem som er i hvilken gruppe', isCorrect: false },
        ],
        solution: 'Riktig svar er C. I et dobbeltblindforsøk vet verken forsøkspersonene eller forskerne som samler inn data hvem som tilhører hvilken gruppe. En uavhengig tredjepart holder oversikten og avslører gruppetilhørigheten først etter at datainnsamlingen er ferdig. Det er altså ikke slik at absolutt ingen vet (D) – noen må holde koden.',
      },
    },

    // --- BLOKK 3: Randomisering og replikasjon ---
    {
      id: 'tof1-1-4-def-3',
      type: 'definition',
      title: 'Randomisering og replikasjon',
      content: `**Randomisering** betyr at forsøkspersonene fordeles tilfeldig til eksperiment- og kontrollgruppen. Dette sikrer at gruppene er sammenlignbare og at ukjente faktorer fordeles likt.

**Replikasjon** betyr at forsøket gjentas flere ganger, enten av samme forsker eller av andre. Replikasjon styrker tilliten til resultatene.

**Utvalgsstørrelse:** Jo flere deltakere i forsøket, jo mer pålitelige blir resultatene. Med små grupper kan tilfeldige variasjoner gi misvisende resultater.`,
    },
    {
      id: 'tof1-1-4-text-3',
      type: 'text',
      content: `### Randomisering i praksis

Uten randomisering kan systematiske skjevheter snike seg inn. Hvis læreren selv velger hvilke elever som skal teste den nye undervisningsmetoden, kan hun ubevisst velge de mest motiverte. Da vet vi ikke om eventuelle forbedringer skyldes metoden eller at elevene var mer motiverte i utgangspunktet.

Ved å bruke **tilfeldig fordeling** (for eksempel ved å trekke lodd eller bruke en tilfeldighetsgenerator) sikrer vi at forskjeller mellom gruppene skyldes tilfeldigheter, ikke systematisk skjevhet.

### Replikasjon og reproduserbarhet

Et enkelt forsøk kan gi villedende resultater. Kanskje var det en uvanlig dag, kanskje skjedde det noe uventet, eller kanskje var utvalget ikke representativt. Når flere uavhengige forskere gjentar forsøket og får tilsvarende resultater, øker vi tilliten betraktelig.

**Replikasjonskrisen:** I de senere årene har man oppdaget at mange publiserte forskningsresultater ikke lar seg gjenta. Dette har ført til økt fokus på transparens, forhåndsregistrering av studier og deling av data.`,
    },
    {
      id: 'tof1-1-4-warning-1',
      type: 'warning',
      title: 'Korrelasjon er ikke kausalitet',
      content: 'Selv med et godt eksperimentdesign må vi være forsiktige med slutningene. Bare fordi to ting skjer samtidig (korrelasjon), betyr det ikke at den ene forårsaker den andre (kausalitet). For eksempel korrelerer iskremforbruk med drukningsulykker – men årsaken er varmt vær (en konfunderende variabel), ikke iskrem.',
    },
    {
      id: 'tof1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva randomisering er, og gi et eksempel på hva som kan gå galt hvis vi ikke randomiserer fordelingen av deltakere til eksperiment- og kontrollgruppe.',
        hints: ['Tenk på systematiske skjevheter som kan oppstå ved ikke-tilfeldig fordeling.'],
        solution: 'Randomisering er tilfeldig fordeling av deltakere til grupper, slik at gruppene i utgangspunktet er sammenlignbare.\n\nEksempel: En forsker tester en ny leseundervisningsmetode. Uten randomisering lar læreren klassene selv velge. Klasse A (med mange leseglade elever) velger den nye metoden, klasse B (med flere lese-umotiverte elever) blir kontrollgruppe. Etter tre måneder scorer klasse A bedre – men var det metoden, eller at de var flinkere i utgangspunktet? Randomisering ville fordelt lese-flinke og lese-svake elever likt mellom gruppene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kontrollgruppen** gir et referansepunkt for å vurdere effekten av det vi tester. Uten kontrollgruppe kan vi ikke skille effekten fra andre påvirkninger.
- **Blindforsøk** hindrer at forventninger påvirker resultatet. I **dobbeltblindforsøk** vet verken deltaker eller forsker hvem som er i hvilken gruppe.
- **Placebo** er en virkningsløs behandling som kontrollerer for placeboeffekten.
- **Randomisering** sikrer at gruppene er sammenlignbare ved å fordele deltakere tilfeldig.
- **Replikasjon** styrker tilliten til resultater gjennom gjentatte forsøk.
- Korrelasjon mellom variabler betyr ikke nødvendigvis årsakssammenheng.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et legemiddelfirma vil teste en ny hodepinepille. Design et eksperiment som bruker kontrollgruppe, placebo, dobbeltblinding og randomisering. Beskriv hver komponent og forklar hvorfor den er viktig.',
        hints: ['Tenk gjennom hvert designprinsipp og hva det beskytter mot.'],
        solution: 'Design:\n\n1. Randomisering: 200 hodepinepasienter fordeles tilfeldig i to grupper à 100 personer med en datamaskin-generert tilfeldig liste.\n\n2. Eksperimentgruppe: Får den nye hodepinepillen.\n\n3. Kontrollgruppe: Får placebo (sukkerpille som ser identisk ut).\n\n4. Dobbeltblinding: Verken pasientene eller legene som vurderer effekten vet hvem som får ekte pille og hvem som får placebo. En uavhengig farmasøyt holder koden.\n\n5. Måling: Pasientene rapporterer smertenivå på en skala 1–10 etter 30 og 60 minutter.\n\nRandomisering sikrer sammenlignbare grupper. Placebo kontrollerer for placeboeffekten. Dobbeltblinding hindrer at forventninger fra pasient eller lege påvirker resultatet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En avisartikkel hevder: «Forskning viser at barn som spiser frokost, gjør det bedre på skolen.» Diskuter hvilke designprinsipper som måtte være til stede for at vi kan stole på denne konklusjonen. Drøft også hvorfor det kan være vanskelig å bevise en årsakssammenheng i denne typen studier.',
        hints: ['Tenk på konfunderende variabler, blinding, randomisering og etikk.'],
        solution: 'For å stole på konklusjonen trenger vi:\n\n1. Kontrollgruppe: En gruppe som ikke spiser frokost å sammenligne med.\n2. Randomisering: Tilfeldig fordeling av barn til «frokost» og «ikke-frokost» grupper.\n3. Kontrollerte variabler: Samme type skoleoppgaver, sammenlignbar sosioøkonomisk bakgrunn, osv.\n4. Tilstrekkelig utvalgsstørrelse for pålitelige resultater.\n\nProblemer med å bevise årsakssammenheng:\n- Etisk umulig å nekte barn frokost (randomisering vanskelig).\n- Konfunderende variabler: Barn som spiser frokost har kanskje også mer stabile hjem, bedre økonomi, mer søvn og mer oppfølging – alle faktorer som påvirker skoleprestasjoner.\n- Blinding er umulig: Barna vet om de har spist frokost.\n- De fleste slike studier er observasjonsstudier (korrelasjon), ikke eksperimenter (kausalitet).\n\nKonklusjon: Avisartikkelen overforenkler. Forskningen viser sannsynligvis en korrelasjon, ikke nødvendigvis en årsakssammenheng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.5: Observasjon og feltarbeid
// ============================================================================

export const CHAPTER_TOF_1_1_5: TextbookChapter = {
  id: 'tof-1-1-5',
  courseId: 'tof-1',
  chapterNumber: '1.5',
  title: 'Observasjon og feltarbeid',
  description: 'Systematisk observasjon, deltakende og ikke-deltakende observasjon, feltarbeid, feltnotater og kvalitative metoder.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for ulike former for systematisk observasjon',
    'skille mellom deltakende og ikke-deltakende observasjon',
    'planlegge og gjennomføre feltarbeid med feltnotater',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-5-intro',
      type: 'text',
      content: `## Observasjon og feltarbeid

Ikke all forskning foregår i et laboratorium. Mange fenomener kan bare studeres der de faktisk skjer – i naturen, i klasserommet, på arbeidsplassen eller i et samfunn. **Observasjon** og **feltarbeid** er metoder som lar forskeren samle data i virkelige omgivelser, uten å manipulere variabler slik vi gjør i et kontrollert eksperiment.

I dette kapittelet ser vi på ulike former for systematisk observasjon, forskjellen mellom å observere fra utsiden og å delta selv, og hvordan feltarbeid gjennomføres i praksis.`,
    },

    // --- BLOKK 1: Systematisk observasjon ---
    {
      id: 'tof1-1-5-def-1',
      type: 'definition',
      title: 'Systematisk observasjon',
      content: `**Systematisk observasjon** er en planlagt og strukturert innsamling av data gjennom å iaktta atferd, hendelser eller fenomener.

Kjennetegn:
- **Planlagt:** Forskeren bestemmer på forhånd hva som skal observeres, når og hvordan
- **Strukturert:** Det brukes et observasjonsskjema eller en sjekkliste for å registrere data konsekvent
- **Repeterbar:** Andre forskere kan gjennomføre samme observasjon med samme kriterier

Systematisk observasjon skiller seg fra tilfeldig iakttakelse ved at den er **målrettet** og **dokumentert**.`,
    },
    {
      id: 'tof1-1-5-text-1',
      type: 'text',
      content: `### Strukturert vs. ustrukturert observasjon

**Strukturert observasjon** bruker et forhåndsdefinert skjema med klare kategorier. Forskeren krysser av eller teller forekomster av bestemte atferder. Eksempel: En forsker observerer gruppearbeid i et klasserom og registrerer antall ganger hver elev tar ordet, stiller spørsmål eller hjelper andre.

**Ustrukturert observasjon** er mer åpen. Forskeren noterer alt som virker relevant, uten forhåndsdefinerte kategorier. Dette er nyttig i utforskende studier der vi ikke vet nøyaktig hva vi leter etter. Eksempel: En biolog som observerer en ukjent fugleart, noterer all atferd for å danne et helhetsbilde.

Strukturert observasjon gir data som er lettere å analysere og sammenligne, mens ustrukturert observasjon fanger opp det uventede og gir rikere beskrivelser.`,
    },
    {
      id: 'tof1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Strukturert observasjon i klasserommet',
      problem: 'En forsker ønsker å undersøke kjønnsforskjeller i deltagelse i naturfagsundervisning. Hvordan kan strukturert observasjon brukes?',
      solution: `**Observasjonsskjema:** Forskeren lager et skjema med kolonner for elevens kjønn og rader for ulike typer deltagelse:
- Rekker opp hånden
- Svarer uten å rekke opp hånden
- Stiller spørsmål til læreren
- Kommenterer andre elevers innspill

**Gjennomføring:** Forskeren sitter bakerst i klasserommet i 10 naturfagstimer og registrerer hver hendelse med tidspunkt og kategori.

**Fordeler:** Gir kvantitative data som kan analyseres statistisk (f.eks. gjennomsnittlig antall håndsopprekkinger per time for jenter vs. gutter).

**Begrensning:** Fanger ikke opp *kvaliteten* på innspillene, eller hva som skjer i gruppearbeid der forskeren ikke kan høre samtalen.`,
    },
    {
      id: 'tof1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner systematisk observasjon i motsetning til tilfeldig iakttakelse?',
        options: [
          { id: 'a', text: 'Den gjennomføres alltid i laboratorium', isCorrect: false },
          { id: 'b', text: 'Den er planlagt, strukturert og dokumentert', isCorrect: true },
          { id: 'c', text: 'Den krever alltid videoopptak', isCorrect: false },
          { id: 'd', text: 'Den utføres bare av profesjonelle forskere', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Systematisk observasjon skiller seg fra tilfeldig iakttakelse ved at den er planlagt (forskeren bestemmer hva, når og hvordan), strukturert (bruker skjemaer eller sjekklister) og dokumentert (data noteres konsekvent). Den kan gjennomføres både i laboratorium og i felt (ikke A), trenger ikke videoopptak (ikke C), og kan i prinsippet gjennomføres av alle som følger metoden (ikke D).',
      },
    },

    // --- BLOKK 2: Deltakende og ikke-deltakende observasjon ---
    {
      id: 'tof1-1-5-def-2',
      type: 'definition',
      title: 'Deltakende og ikke-deltakende observasjon',
      content: `**Ikke-deltakende observasjon:** Forskeren observerer fra utsiden uten å delta i det som skjer. Forsøkspersonene kan vite at de observeres (åpen) eller ikke vite det (skjult).

**Deltakende observasjon:** Forskeren deltar selv i gruppen eller situasjonen som studeres, og samler data gjennom egne erfaringer og observasjoner innenfra.

| | Ikke-deltakende | Deltakende |
|---|---|---|
| **Forskerens rolle** | Utenforstående iakttaker | Deltar aktivt |
| **Styrke** | Mer objektiv | Dypere innsikt |
| **Svakhet** | Kan gå glipp av kontekst | Kan miste objektivitet |`,
    },
    {
      id: 'tof1-1-5-text-2',
      type: 'text',
      content: `### Ikke-deltakende observasjon

Når forskeren observerer uten å delta, er målet å forstyrre det som studeres minst mulig. Eksempler:
- En etolog (dyreforsker) observerer ulveflokker fra en skjult posisjon
- En forsker observerer trafikkmønstre fra et vindu over et kryss
- En pedagog observerer undervisning fra bakerste rad i klasserommet

Utfordringen er **observatøreffekten**: Mennesker som vet at de observeres, endrer ofte atferd. Denne effekten kalles også **Hawthorne-effekten**, oppkalt etter studier ved Hawthorne-fabrikken på 1920-tallet der arbeidernes produktivitet økte bare fordi de visste at de ble observert.

### Deltakende observasjon

I deltakende observasjon lever forskeren seg inn i miljøet. Sosialantropologer bruker ofte denne metoden i **etnografiske studier** – de lever sammen med en folkegruppe over lang tid for å forstå kulturen innenfra.

Fordelen er at forskeren kan oppleve konteksten på kroppen og fange nyanser som en utenforstående ville gått glipp av. Ulempen er faren for å «go native» – å bli så involvert at man mister den analytiske distansen.`,
    },
    {
      id: 'tof1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En forsker jobber som frivillig i en ungdomsklubb i tre måneder for å studere ungdomskultur. Hvilken metode bruker forskeren?',
        options: [
          { id: 'a', text: 'Strukturert observasjon', isCorrect: false },
          { id: 'b', text: 'Ikke-deltakende observasjon', isCorrect: false },
          { id: 'c', text: 'Deltakende observasjon', isCorrect: true },
          { id: 'd', text: 'Eksperiment', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Forskeren deltar aktivt i miljøet (jobber som frivillig) samtidig som hun studerer ungdomskulturen innenfra. Dette er kjernen i deltakende observasjon. Ikke-deltakende observasjon (B) ville innebære å observere uten å delta i aktivitetene.',
      },
    },

    // --- BLOKK 3: Feltarbeid og feltnotater ---
    {
      id: 'tof1-1-5-text-3',
      type: 'text',
      content: `### Feltarbeid – forskning utenfor laboratoriet

**Feltarbeid** er forskning som gjennomføres i det miljøet der fenomenet naturlig forekommer, i motsetning til i et laboratorium. Feltarbeid brukes i mange fag: biologer studerer økosystemer i naturen, geologer undersøker fjellformasjoner i terrenget, og samfunnsforskere observerer sosiale prosesser i lokalsamfunn.

**Fordeler med feltarbeid:**
- Studerer fenomener i sin naturlige kontekst
- Høy **økologisk validitet** – resultatene er relevante for virkelige situasjoner
- Kan avdekke fenomener som ikke oppstår i et laboratorium

**Ulemper med feltarbeid:**
- Vanskelig å kontrollere variabler
- Resultatene er vanskeligere å gjenta (replikere)
- Kan være tidkrevende og ressurskrevende

### Feltnotater

**Feltnotater** er forskerens skriftlige dokumentasjon av observasjoner, tanker og refleksjoner under feltarbeid. Gode feltnotater er detaljerte, daterte og skiller mellom hva som faktisk ble observert og forskerens egne tolkninger.

En vanlig inndeling er:
- **Deskriptive notater:** Hva skjedde? Hvem sa hva? Hva ble gjort?
- **Refleksive notater:** Forskerens egne tanker, spørsmål og foreløpige tolkninger`,
    },
    {
      id: 'tof1-1-5-note-1',
      type: 'note',
      title: 'Laboratorium vs. felt',
      content: 'I laboratoriet har forskeren full kontroll over variablene, men situasjonen er kunstig. I felt er situasjonen naturlig, men forskeren har liten kontroll. Mange forskere kombinerer begge: de starter med feltobservasjoner for å identifisere interessante fenomener, og følger opp med kontrollerte laboratorieeksperimenter for å teste årsakssammenhenger.',
    },
    {
      id: 'tof1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom laboratorieforsøk og feltarbeid. Gi ett eksempel på en problemstilling som best egner seg for hvert alternativ, og begrunn hvorfor.',
        hints: ['Tenk på kontroll over variabler vs. naturlig kontekst.'],
        solution: 'Laboratorieforsøk foregår under kontrollerte forhold der forskeren manipulerer variabler og holder andre konstante. Feltarbeid foregår i naturlige omgivelser uten eksperimentell kontroll.\n\nLab-eksempel: «Hvordan påvirker konsentrasjonen av salt oppløsningstiden for ulike stoffer?» Best i lab fordi vi trenger presis kontroll over konsentrasjon, temperatur og målinger.\n\nFelt-eksempel: «Hvordan påvirker trafikkmønstre luftkvaliteten i en bydel?» Best som feltarbeid fordi fenomenet er knyttet til et bestemt sted og reelle forhold som ikke kan gjenskapes i lab.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Systematisk observasjon** er planlagt, strukturert og dokumentert innsamling av data gjennom iakttakelse.
- **Strukturert observasjon** bruker forhåndsdefinerte kategorier, mens **ustrukturert observasjon** er mer åpen og utforskende.
- **Ikke-deltakende observasjon** gjøres fra utsiden, mens **deltakende observasjon** innebærer at forskeren deltar aktivt i det som studeres.
- **Observatøreffekten** (Hawthorne-effekten) kan føre til at mennesker endrer atferd når de vet at de observeres.
- **Feltarbeid** gjennomføres i naturlige omgivelser og gir høy økologisk validitet, men gjør det vanskeligere å kontrollere variabler.
- **Feltnotater** dokumenterer observasjoner og bør skille mellom beskrivelser og tolkninger.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal studere hvordan elever bruker mobiltelefon i friminuttene. Beskriv hvordan du ville gjennomført dette som (a) ikke-deltakende observasjon og (b) deltakende observasjon. Diskuter fordeler og ulemper ved begge tilnærmingene.',
        hints: ['Tenk på hvor forskeren befinner seg, hvordan data samles inn, og hva slags innsikt hver metode gir.'],
        solution: '(a) Ikke-deltakende: Forskeren sitter på en benk i skolegården med et observasjonsskjema og registrerer hvor mange elever som bruker mobilen, hva de gjør (tekster, spiller, scroller), og om de er alene eller i grupper. Fordel: Objektiv, systematisk. Ulempe: Ser bare atferden utenfra, vet ikke hva elevene faktisk gjør på mobilen eller hvorfor.\n\n(b) Deltakende: Forskeren er med i elevgruppen (kanskje som praktikant eller assistent), deltar i samtaler og observerer mobilbruk i naturlig kontekst. Fordel: Kan spørre om motivasjon, forstå sosiale normer rundt mobilbruk. Ulempe: Forskeren påvirker situasjonen, vanskelig å notere systematisk mens man deltar, kan miste objektivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft Hawthorne-effekten og dens betydning for observasjonsstudier. Hva er konsekvensene for påliteligheten av observasjonsdata, og hvordan kan forskere forsøke å redusere denne effekten?',
        hints: ['Tenk på skjult vs. åpen observasjon og tilvenning over tid.'],
        solution: 'Hawthorne-effekten innebærer at mennesker endrer atferd når de vet at de observeres. I observasjonsstudier betyr dette at dataene kanskje ikke gjenspeiler normal atferd, men atferd som er påvirket av bevisstheten om å bli studert.\n\nKonsekvenser: Resultater kan ha lav økologisk validitet – de viser hva folk gjør under observasjon, ikke hva de normalt gjør. For eksempel vil lærere kanskje undervise «bedre» og elever oppføre seg «pynteligere» når de vet at de observeres.\n\nTiltak for å redusere effekten:\n1. Skjult observasjon – men dette reiser etiske spørsmål om samtykke og personvern.\n2. Tilvenningsperiode – la deltakerne bli vant til forskerens tilstedeværelse før datainnsamling begynner.\n3. Lang observasjonsperiode – over tid glemmer folk at de observeres.\n4. Bruke indirekte mål – f.eks. observere resultater av atferd (søppelmengde i et rom) i stedet for atferden direkte.\n5. Kombinere med andre metoder – triangulering med intervjuer eller spørreskjemaer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6: Validitet og reliabilitet
// ============================================================================

export const CHAPTER_TOF_1_1_6: TextbookChapter = {
  id: 'tof-1-1-6',
  courseId: 'tof-1',
  chapterNumber: '1.6',
  title: 'Validitet og reliabilitet',
  description: 'Intern og ekstern validitet, begrepsvaliditet, reliabilitet, systematiske og tilfeldige feil, feilkilder.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for begrepene validitet og reliabilitet',
    'vurdere kvaliteten på målinger og forskningsresultater',
    'identifisere systematiske og tilfeldige feilkilder i forsøk',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-6-intro',
      type: 'text',
      content: `## Validitet og reliabilitet

Når vi gjennomfører et forsøk eller en undersøkelse, er det ikke nok at vi får et resultat. Vi må også vurdere om resultatet er **gyldig** og **pålitelig**. Disse to kvalitetskriteriene – validitet og reliabilitet – er avgjørende for om forskningen vår har verdi.

I dette kapittelet lærer du å skille mellom ulike typer validitet, forstå hva reliabilitet innebærer, og identifisere feilkilder som kan undergrave kvaliteten på forskningsresultater.`,
    },

    // --- BLOKK 1: Validitet ---
    {
      id: 'tof1-1-6-def-1',
      type: 'definition',
      title: 'Validitet',
      content: `**Validitet** (gyldighet) handler om hvorvidt vi faktisk måler det vi ønsker å måle, og om konklusjonene våre er holdbare.

Det finnes flere typer validitet:

- **Intern validitet:** Kan vi trekke slutninger om årsakssammenheng? Er det den uavhengige variabelen som forårsaker endringen, eller kan andre faktorer forklare resultatet?
- **Ekstern validitet:** Kan resultatene generaliseres til andre situasjoner, populasjoner eller tidspunkter? Er funnene relevante utenfor forsøkssituasjonen?
- **Begrepsvaliditet (konstruktvaliditet):** Måler vi faktisk det begrepet vi påstår å måle? Fanger operasjonaliseringen det teoretiske begrepet?`,
    },
    {
      id: 'tof1-1-6-text-1',
      type: 'text',
      content: `### Intern validitet – årsakssammenheng

Intern validitet handler om å utelukke alternative forklaringer. Hvis vi finner at eksperimentgruppen gjør det bedre enn kontrollgruppen, vil vi vite at det skyldes den uavhengige variabelen – ikke noe annet.

**Trusler mot intern validitet:**
- **Konfunderende variabler:** En tredje variabel som påvirker resultatet uten at vi har kontrollert for den. Eksempel: Elever som får den nye undervisningsmetoden har tilfeldigvis også en mer erfaren lærer.
- **Modningseffekt:** Deltakerne endrer seg naturlig over tid (f.eks. barn blir flinkere til å lese uansett metode).
- **Seleksjonseffekt:** Gruppene er ikke sammenlignbare fra start (unngås med randomisering).

### Ekstern validitet – generaliserbarhet

Ekstern validitet handler om overførbarhet. Resultater fra en studie med universitetsstudenter i Oslo kan ikke automatisk generaliseres til eldre i distriktene, eller til mennesker i andre kulturer.

Faktorer som påvirker ekstern validitet:
- **Utvalgets representativitet:** Er deltakerne representative for populasjonen vi ønsker å uttale oss om?
- **Situasjonens naturlighet:** Kunstige laboratorieforhold kan gi resultater som ikke gjelder i virkeligheten.
- **Tidsavhengighet:** Sosiale fenomener kan endre seg over tid.`,
    },
    {
      id: 'tof1-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Validitetsproblemer',
      problem: 'En skole tester en ny lesemetode. De lar den beste norsklæreren bruke den nye metoden i sin klasse, mens en nyutdannet lærer fortsetter med den gamle metoden. Etter ett semester har klassen med den nye metoden bedre leseresultater. Hvilke validitetsproblemer ser du?',
      solution: `**Intern validitet – svekket:**
Den viktigste trusselen er en **konfunderende variabel**: lærerens erfaring. Vi kan ikke vite om forbedringen skyldes den nye metoden eller den dyktigere læreren. For å sikre intern validitet burde begge lærerne brukt begge metodene, eller lærerne burde vært tilfeldig fordelt.

**Ekstern validitet – usikker:**
Selv om metoden virker med denne læreren, betyr det ikke at den virker for alle lærere, alle elevgrupper eller alle skoler. Resultatet kan ikke uten videre generaliseres.

**Begrepsvaliditet – mulig problem:**
Hva menes med «bedre leseresultater»? Hvis testen bare måler lesehastighet og ikke leseforståelse, fanger den kanskje ikke det vi egentlig mener med «bedre lesing».`,
    },
    {
      id: 'tof1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En forsker konkluderer med at et nytt kosttilskudd forbedrer hukommelsen, basert på et forsøk med 10 medisinstudenter. Hvilket validitetsproblem er mest fremtredende?',
        options: [
          { id: 'a', text: 'Lav begrepsvaliditet', isCorrect: false },
          { id: 'b', text: 'Lav intern validitet', isCorrect: false },
          { id: 'c', text: 'Lav ekstern validitet', isCorrect: true },
          { id: 'd', text: 'Høy reliabilitet', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Et utvalg på bare 10 medisinstudenter er svært lite og ikke representativt for befolkningen generelt. Medisinstudenter er gjerne yngre, mer kognitivt trente og mer helsebevisste enn gjennomsnittet. Resultatene kan ikke generaliseres til andre grupper – altså lav ekstern validitet.',
      },
    },

    // --- BLOKK 2: Reliabilitet ---
    {
      id: 'tof1-1-6-def-2',
      type: 'definition',
      title: 'Reliabilitet',
      content: `**Reliabilitet** (pålitelighet) handler om hvor konsistente og stabile målingene er. En måling er reliabel dersom den gir samme resultat ved gjentatte målinger under like forhold.

**Typer reliabilitet:**
- **Test-retest-reliabilitet:** Gir testen samme resultat når den gjentas på et senere tidspunkt? Eksempel: En IQ-test bør gi omtrent samme skår om den tas igjen etter to uker.
- **Inter-rater-reliabilitet:** Gir ulike observatører/bedømmere samme vurdering? Eksempel: To lærere som retter samme besvarelse bør gi tilnærmet lik karakter.
- **Intern konsistens:** Måler ulike deler av testen det samme? Eksempel: Spørsmål som skal måle angst bør korrelere med hverandre.`,
    },
    {
      id: 'tof1-1-6-text-2',
      type: 'text',
      content: `### Forholdet mellom validitet og reliabilitet

Validitet og reliabilitet henger sammen, men er ikke det samme. En enkel analogi er en blink:

- **Høy reliabilitet + høy validitet:** Alle skuddene treffer midt i blinken (nøyaktig og konsistent).
- **Høy reliabilitet + lav validitet:** Alle skuddene treffer samlet, men utenfor blinken (konsistent, men måler feil ting).
- **Lav reliabilitet + lav validitet:** Skuddene er spredd over hele skiva (verken konsistent eller nøyaktig).

**Viktig:** En måling kan være reliabel uten å være valid, men den kan **ikke** være valid uten å være reliabel. Hvis en vekt viser ulike tall hver gang du veier samme gjenstand (lav reliabilitet), kan den umulig gi riktig vekt (lav validitet).

### Eksempel fra virkeligheten

Et mattetermometer som konsekvent viser 2 grader for mye, er **reliabelt** (konsistent) men **ikke valid** (måler feil). Når vi kjenner feilen, kan vi korrigere for den. Et termometer som viser tilfeldig forskjellige temperaturer, er verken reliabelt eller valid – og er ubrukelig.`,
    },
    {
      id: 'tof1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken påstand om validitet og reliabilitet er korrekt?',
        options: [
          { id: 'a', text: 'En måling kan være valid uten å være reliabel', isCorrect: false },
          { id: 'b', text: 'Reliabilitet og validitet er det samme', isCorrect: false },
          { id: 'c', text: 'En måling kan være reliabel uten å være valid', isCorrect: true },
          { id: 'd', text: 'Lav reliabilitet gir alltid høy validitet', isCorrect: false },
        ],
        solution: 'Riktig svar er C. En måling kan være konsistent (reliabel) uten å måle det riktige (valid). For eksempel vil en vekt som alltid viser 3 kg for mye gi konsistente resultater, men feil vekt. Derimot kan en måling ikke være valid uten å også være reliabel – tilfeldige resultater kan ikke systematisk treffe riktig.',
      },
    },

    // --- BLOKK 3: Feilkilder ---
    {
      id: 'tof1-1-6-text-3',
      type: 'text',
      content: `### Systematiske og tilfeldige feil

Alle målinger inneholder usikkerhet. Vi skiller mellom to hovedtyper feil:

**Systematiske feil** påvirker alle målingene i samme retning. De skyldes et fast problem med metoden eller utstyret, og gjør resultatene **konsekvent feil**:
- En vekt som alltid viser 50 g for mye
- Et spørreskjema med ledende spørsmål som påvirker svarene i én retning
- En observatør som systematisk undervurderer en bestemt atferd

Systematiske feil reduserer **validiteten** men ikke nødvendigvis reliabiliteten. De kan ofte oppdages ved kalibrering eller ved å sammenligne med andre metoder.

**Tilfeldige feil** varierer uforutsigbart fra måling til måling, noen ganger for høyt, andre ganger for lavt:
- Små temperatursvingninger i et rom under et forsøk
- Variasjon i forsøkspersoners dagsform
- Unøyaktighet ved avlesning av måleinstrumenter

Tilfeldige feil reduserer **reliabiliteten**. De kan reduseres ved å ta mange målinger og beregne gjennomsnitt – tilfeldige feil jevner seg ut over tid.`,
    },
    {
      id: 'tof1-1-6-tip-1',
      type: 'tip',
      title: 'Identifisere feilkilder',
      content: 'Når du skal identifisere feilkilder i et forsøk, spør deg selv: «Hva annet enn den uavhengige variabelen kunne ha påvirket resultatet?» Tenk systematisk gjennom utstyr, prosedyre, deltakere og omgivelser.',
    },
    {
      id: 'tof1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom systematiske og tilfeldige feil med egne ord. Gi ett eksempel på hver type feil i et forsøk der du måler lengden av bønnestengler under ulike lysforhold.',
        hints: ['Tenk på hva som alltid påvirker i samme retning vs. hva som varierer tilfeldig.'],
        solution: 'Systematiske feil påvirker alle målinger i samme retning og gjør resultatene konsekvent feil. Tilfeldige feil varierer uforutsigbart og kan gå begge veier.\n\nEksempel systematisk feil: Linjalen som brukes starter ved 2 mm i stedet for 0, slik at alle stengler måles 2 mm for korte. Dette påvirker alle målingene likt.\n\nEksempel tilfeldig feil: Ulike elever leser av linjalen litt ulikt – noen runder opp, andre ned, noen holder linjalen skjevt. Disse feilene varierer fra måling til måling og kan reduseres ved å ta gjennomsnitt av flere målinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Validitet** handler om vi faktisk måler det vi ønsker å måle og om konklusjonene er holdbare.
- **Intern validitet** gjelder årsakssammenheng, **ekstern validitet** gjelder generaliserbarhet, og **begrepsvaliditet** gjelder om operasjonaliseringen fanger begrepet.
- **Reliabilitet** handler om målingenes konsistens – gir vi samme resultat ved gjentatte målinger?
- En måling kan være reliabel uten å være valid, men **ikke** valid uten å være reliabel.
- **Systematiske feil** påvirker alle målinger i samme retning og reduserer validiteten.
- **Tilfeldige feil** varierer uforutsigbart og reduserer reliabiliteten, men kan reduseres ved gjentatte målinger.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker utvikler et spørreskjema for å måle «skolemotivasjon». Forklar hva begrepsvaliditet betyr i denne sammenhengen, og foreslå to måter forskeren kan sjekke om spørreskjemaet har god begrepsvaliditet.',
        hints: ['Tenk på om spørsmålene faktisk fanger det abstrakte begrepet «skolemotivasjon».'],
        solution: 'Begrepsvaliditet betyr at spørreskjemaet faktisk måler «skolemotivasjon» og ikke noe annet (f.eks. generell trivsel, lydighet eller prestasjonsnivå).\n\nMåte 1: Sammenlikne med et etablert, validert måleinstrument for skolemotivasjon. Hvis skårene korrelerer høyt, tyder det på god begrepsvaliditet (konvergent validitet).\n\nMåte 2: Sjekke at skjemaet IKKE korrelerer med begreper det ikke skal måle, for eksempel generell intelligens. Hvis skolemotivasjonsskåren er uavhengig av IQ-skår, styrker det begrepsvaliditeten (diskriminant validitet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende situasjon: To sensorer retter de samme 30 norskbesvarelsene. Sensor A gir i snitt karakter 4,2, mens sensor B gir i snitt 3,5. Hvordan forholder dette seg til reliabilitet og validitet? Hva kan gjøres for å forbedre situasjonen?',
        hints: ['Tenk på inter-rater-reliabilitet og systematisk vs. tilfeldig avvik.'],
        solution: 'Denne situasjonen viser lav inter-rater-reliabilitet: de to sensorene gir systematisk ulike vurderinger. Sensor A er konsekvent strengere eller mildere enn sensor B.\n\nOm forskjellen er systematisk (A gir alltid ca. 0,7 høyere), er reliabiliteten faktisk nokså høy innad hos hver sensor, men det er en systematisk forskjell mellom dem. Om forskjellen varierer tilfeldig fra besvarelse til besvarelse, er reliabiliteten lav.\n\nValiditet: Minst én av sensorene gir «feil» karakter – kanskje begge. Uten en objektiv fasit er det vanskelig å vite hvem som er nærmest «riktig».\n\nForbedringer:\n1. Felles sensorskolering med vurderingskriterier og eksempelbesvarelser\n2. Bruke detaljerte vurderingsrubrikker som reduserer subjektivitet\n3. La begge sensorer vurdere uavhengig, og bruke gjennomsnitt eller diskusjon ved store avvik\n4. Regelmessig kalibrering der sensorer vurderer de samme prøvebesvarelsene',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.7: Etikk i forskning
// ============================================================================

export const CHAPTER_TOF_1_1_7: TextbookChapter = {
  id: 'tof-1-1-7',
  courseId: 'tof-1',
  chapterNumber: '1.7',
  title: 'Etikk i forskning',
  description: 'Informert samtykke, personvern, plagiat, fabrikasjon, forskningsetiske komiteer og Helsinkideklarasjonen.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for sentrale forskningsetiske prinsipper',
    'drøfte etiske dilemmaer knyttet til forskning på mennesker og dyr',
    'forklare rollen til forskningsetiske komiteer',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-7-intro',
      type: 'text',
      content: `## Etikk i forskning

Forskning gir oss verdifull kunnskap, men den må gjennomføres på en ansvarlig måte. Historien har vist hva som kan skje når forskere setter kunnskapssøken over hensynet til menneskers verdighet og rettigheter. Fra eksperimenter i konsentrasjonsleire til Tuskegee-studien i USA har uetisk forskning fått alvorlige konsekvenser.

I dette kapittelet ser vi på de viktigste forskningsetiske prinsippene, hva som regnes som vitenskapelig uredelighet, og hvilke institusjoner som ivaretar forskningsetikken i Norge og internasjonalt.`,
    },

    // --- BLOKK 1: Grunnleggende prinsipper ---
    {
      id: 'tof1-1-7-def-1',
      type: 'definition',
      title: 'Forskningsetiske grunnprinsipper',
      content: `**Forskningsetikk** handler om normene og retningslinjene som styrer forskning for å beskytte deltakere og sikre vitenskapelig integritet.

**Sentrale prinsipper:**
- **Informert samtykke:** Deltakere må få tilstrekkelig informasjon til å ta en frivillig beslutning om å delta
- **Rett til å trekke seg:** Deltakere kan når som helst avbryte sin deltakelse uten konsekvenser
- **Personvern og anonymisering:** Deltakernes identitet og sensitive opplysninger skal beskyttes
- **Ikke skade:** Forskningen skal ikke påføre deltakere unødig fysisk eller psykisk belastning
- **Konfidensialitet:** Data skal behandles slik at enkeltpersoner ikke kan identifiseres`,
    },
    {
      id: 'tof1-1-7-text-1',
      type: 'text',
      content: `### Informert samtykke

**Informert samtykke** er et av de viktigste forskningsetiske prinsippene. Det innebærer at deltakerne:
- Får vite hva forskningen handler om og hva deltakelsen innebærer
- Forstår eventuelle risikoer og belastninger
- Vet at deltakelsen er frivillig
- Kan trekke seg når som helst uten å oppgi grunn

For barn og ungdom under 16 år kreves normalt samtykke fra foreldre eller foresatte i tillegg til barnets eget samtykke.

### Personvern og anonymisering

All forskning som involverer personopplysninger må følge personvernlovgivningen (GDPR i Norge og EU). Forskere har plikt til å:
- Ikke samle inn mer data enn nødvendig
- Lagre data sikkert
- Anonymisere eller pseudonymisere data der det er mulig
- Slette data når forskningsprosjektet er avsluttet

**Anonymisering** betyr at det er umulig å koble data tilbake til enkeltpersoner. **Pseudonymisering** betyr at identifiserende opplysninger erstattes med en kode, men kan i prinsippet spores tilbake via en kodenøkkel.`,
    },
    {
      id: 'tof1-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Etisk vurdering av en elevundersøkelse',
      problem: 'Du vil gjennomføre en spørreundersøkelse blant medelever om psykisk helse og skolepress. Hvilke forskningsetiske hensyn må du ta?',
      solution: `**Informert samtykke:** Du må gi medelevene skriftlig informasjon om hva undersøkelsen handler om, hva dataene skal brukes til, og at deltakelsen er frivillig. For elever under 16 år trengs samtykke fra foresatte.

**Rett til å trekke seg:** Du må informere om at de kan hoppe over spørsmål eller avbryte uten konsekvenser.

**Personvern:** Spørreskjemaet bør være anonymt – ingen navn, fødselsdato eller annen identifiserende informasjon. Dataene lagres sikkert og slettes etter bruk.

**Ikke skade:** Spørsmål om psykisk helse kan oppleves belastende. Du bør unngå svært personlige spørsmål og oppgi kontaktinformasjon til helsesykepleier eller andre støttetjenester.

**Konfidensiell behandling:** Resultatene presenteres som gruppedata (gjennomsnitt, prosenter), aldri enkeltsvar som kan spores til en person.`,
    },
    {
      id: 'tof1-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et krav ved informert samtykke?',
        options: [
          { id: 'a', text: 'Deltakeren må få vite hva forskningen handler om', isCorrect: false },
          { id: 'b', text: 'Deltakeren må garantere å fullføre hele studien', isCorrect: true },
          { id: 'c', text: 'Deltakeren må kunne trekke seg når som helst', isCorrect: false },
          { id: 'd', text: 'Deltakeren må forstå eventuelle risikoer', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Et sentralt prinsipp ved informert samtykke er at deltakelsen er frivillig og at man kan trekke seg når som helst. Det er nettopp IKKE et krav å garantere fullføring. Tvert imot – retten til å trekke seg uten konsekvenser er fundamental.',
      },
    },

    // --- BLOKK 2: Vitenskapelig uredelighet ---
    {
      id: 'tof1-1-7-text-2',
      type: 'text',
      content: `### Vitenskapelig uredelighet

**Vitenskapelig uredelighet** er brudd på de grunnleggende normene for god forskningspraksis. De tre alvorligste formene er:

**Fabrikasjon:** Å finne opp data som ikke eksisterer. Forskeren har aldri gjennomført forsøket, men presenterer oppdiktede resultater som ekte.

**Falsifisering:** Å manipulere data eller resultater – for eksempel å fjerne datapunkter som ikke passer med hypotesen, endre tall, eller presentere resultater på en villedende måte.

**Plagiat:** Å bruke andres tekst, ideer eller resultater uten å gi korrekt kildehenvisning. Dette gjelder også å gjenbruke egen tidligere publisert tekst uten å oppgi det (selvplagiat).

Alle tre er alvorlige brudd som kan føre til at artikler trekkes tilbake, forskere mister jobben, og – i verste fall – at feilaktig kunnskap påvirker beslutninger i samfunnet (f.eks. feil i medisinsk forskning).`,
    },
    {
      id: 'tof1-1-7-example-2',
      type: 'example',
      title: 'Eksempel: Wakefield-skandalen',
      problem: 'I 1998 publiserte Andrew Wakefield en studie som hevdet at MMR-vaksinen forårsaket autisme hos barn. Studien ble senere trukket tilbake. Hva var uredeligheten?',
      solution: `Wakefield ble funnet skyldig i flere former for uredelighet:

**Falsifisering:** Han endret og feilpresenterte data fra pasientjournaler for å skape en tilsynelatende sammenheng mellom vaksinen og autisme.

**Interessekonflikter:** Han mottok penger fra advokater som planla erstatningssøksmål mot vaksineprodusenter – noe han ikke opplyste om.

**Etiske brudd:** Barna i studien ble utsatt for unødvendige medisinske prosedyrer (spinalpunksjon, koloskopi) uten tilstrekkelig medisinsk begrunnelse.

**Konsekvenser:** Studien ble trukket tilbake i 2010, Wakefield mistet legelisensen. Men skaden var allerede gjort: vaksineskepsis spredde seg globalt, vaksinasjonsrater sank, og sykdomsutbrudd (meslinger) økte. Tallrike studier med millioner av barn har senere vist at det ikke finnes noen sammenheng mellom MMR-vaksinen og autisme.`,
    },
    {
      id: 'tof1-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'En forsker fjerner tre datapunkter fra datasettet sitt fordi de «ikke passer inn» med hypotesen, uten å oppgi dette i rapporten. Hva kalles dette?',
        options: [
          { id: 'a', text: 'Fabrikasjon', isCorrect: false },
          { id: 'b', text: 'Plagiat', isCorrect: false },
          { id: 'c', text: 'Falsifisering', isCorrect: true },
          { id: 'd', text: 'Operasjonalisering', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Å fjerne datapunkter som ikke passer hypotesen er falsifisering – manipulering av data for å gi et villedende bilde av resultatene. Fabrikasjon (A) er å finne opp data. Plagiat (B) er å kopiere andres arbeid. Operasjonalisering (D) er en legitim forskningsmetode.',
      },
    },

    // --- BLOKK 3: Institusjoner og regelverk ---
    {
      id: 'tof1-1-7-text-3',
      type: 'text',
      content: `### Forskningsetiske komiteer og regelverk

**De nasjonale forskningsetiske komiteene** i Norge består av tre komiteer:
- **NESH** (Den nasjonale forskningsetiske komité for samfunnsvitenskap og humaniora)
- **NENT** (Den nasjonale forskningsetiske komité for naturvitenskap og teknologi)
- **NEM** (Den nasjonale forskningsetiske komité for medisin og helsefag)

Disse komiteene gir retningslinjer, veileder forskere og behandler saker om mulig uredelighet.

**Regionale komiteer for medisinsk og helsefaglig forskningsetikk (REK)** må godkjenne alle medisinske forskningsprosjekter før de kan starte.

### Helsinkideklarasjonen

**Helsinkideklarasjonen** (1964, revidert flere ganger) er et internasjonalt regelverk utviklet av Verdens legeforening (WMA) for etiske prinsipper i medisinsk forskning. Sentrale punkter:
- Hensynet til forsøkspersonen skal alltid gå foran vitenskapens og samfunnets interesser
- Informert samtykke er obligatorisk
- Sårbare grupper skal ha ekstra beskyttelse
- Forskning skal godkjennes av en uavhengig etisk komité

### Dyreforsøk

Forskning på dyr reguleres av **Forsøksdyrforskriften** i Norge. Prinsippet om de **3 R-ene** gjelder:
- **Replace:** Erstatt dyreforsøk med alternativer der det er mulig
- **Reduce:** Reduser antall dyr til et minimum
- **Refine:** Forbedre metodene for å minimere lidelse`,
    },
    {
      id: 'tof1-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva de 3 R-ene (Replace, Reduce, Refine) innebærer for dyreforsøk, og gi et konkret eksempel på hvordan hvert prinsipp kan anvendes.',
        hints: ['Tenk på alternativer til dyr, minimering av antall, og dyrevelferd.'],
        solution: 'Replace (erstatte): Bruk alternativer der det er mulig. Eksempel: I stedet for å teste kosmetikk på kaniner, bruke cellekulturer (in vitro-testing) for å teste hudirritasjon.\n\nReduce (redusere): Bruk færrest mulig dyr. Eksempel: Bruke statistiske metoder for å beregne det minste antallet mus som trengs for å gi pålitelige resultater, i stedet for å bruke «for sikkerhets skyld» mange flere.\n\nRefine (forbedre): Minimer smerte og ubehag. Eksempel: Gi bedøvelse og smertelindring under og etter inngrep, bruke ikke-invasive målemetoder (blodprøve fra halen i stedet for å avlive dyret), og gi dyrene berikede bur med plass til naturlig atferd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Informert samtykke** krever at deltakere får tilstrekkelig informasjon og deltar frivillig.
- Deltakere har **rett til å trekke seg** når som helst uten konsekvenser.
- **Personvern og anonymisering** beskytter deltakernes identitet og sensitive opplysninger.
- **Vitenskapelig uredelighet** inkluderer fabrikasjon, falsifisering og plagiat.
- **De nasjonale forskningsetiske komiteene** (NESH, NENT, NEM) overvåker forskningsetikken i Norge.
- **Helsinkideklarasjonen** fastsetter internasjonale etiske retningslinjer for medisinsk forskning.
- **De 3 R-ene** (Replace, Reduce, Refine) gjelder for forskning med forsøksdyr.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom fabrikasjon, falsifisering og plagiat. Gi et eksempel på hver og beskriv mulige konsekvenser dersom dette oppdages.',
        hints: ['Tenk på hva forskeren gjør feil i hvert tilfelle.'],
        solution: 'Fabrikasjon: Forskeren finner opp data uten å ha gjennomført forsøk. Eksempel: En forsker rapporterer resultater fra et eksperiment som aldri ble utført.\n\nFalsifisering: Forskeren manipulerer ekte data. Eksempel: En forsker fjerner datapunkter som svekker hypotesen, eller endrer tall for å gjøre resultatene mer overbevisende.\n\nPlagiat: Forskeren bruker andres arbeid uten kildehenvisning. Eksempel: En forsker kopierer flere avsnitt fra en annen artikkel og presenterer teksten som sin egen.\n\nKonsekvenser ved oppdagelse: Artikkelen trekkes tilbake (retraction), forskeren kan miste stillingen, utestenges fra akademia, miste forskningsfinansiering, og i alvorlige tilfeller straffeforfølges. Forskerens øvrige arbeid vil også bli gransket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft følgende etiske dilemma: En forsker har utviklet et medikament som potensielt kan kurere en alvorlig sykdom. For å teste medikamentet trengs det forsøk på mennesker, men det er usikkert om medikamentet er trygt. Hvordan bør forskeren balansere hensynet til potensielt syke pasienter mot risikoen for forsøkspersonene? Bruk relevante forskningsetiske prinsipper i drøftingen.',
        hints: ['Tenk på Helsinkideklarasjonen, informert samtykke, risiko-nytte-vurdering og etisk godkjenning.'],
        solution: 'Dette dilemmaet berører kjernen i forskningsetikken: ønsket om å hjelpe mange vs. risikoen for å skade noen få.\n\nRelevante prinsipper:\n1. Helsinkideklarasjonen: Forsøkspersonens velferd skal alltid gå foran vitenskapens interesser. Forskeren kan ikke ofre deltakernes sikkerhet for å oppnå resultater raskere.\n\n2. Informert samtykke: Deltakerne må få fullstendig informasjon om kjente risikoer, og samtykke frivillig. Desperate pasienter kan føle press til å delta, og forskeren har et ekstra ansvar for å sikre at samtykket er genuint frivillig.\n\n3. Faseinndeling: Medikamenter testes i faser – først sikkerhet på små grupper (fase 1), deretter effekt (fase 2–3). Denne trinnvise tilnærmingen minimerer risiko.\n\n4. Etisk komité: REK må godkjenne studien etter en risiko-nytte-vurdering. Komiteen vurderer om potensiell nytte rettferdiggjør risikoen.\n\n5. Stopperegler: Studien må ha forhåndsdefinerte kriterier for å avbryte dersom alvorlige bivirkninger oppstår.\n\nKonklusjon: Forskeren må følge etablerte prosedyrer og ikke la hast etter resultater gå på bekostning av forsøkspersonenes sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.8: Vitenskapelig rapportering
// ============================================================================

export const CHAPTER_TOF_1_1_8: TextbookChapter = {
  id: 'tof-1-1-8',
  courseId: 'tof-1',
  chapterNumber: '1.8',
  title: 'Vitenskapelig rapportering',
  description: 'IMRaD-struktur, abstract, kildehenvisning i APA-stil, tabeller og figurer, fagfellevurdering.',
  estimatedMinutes: 30,
  competenceGoals: [
    'skrive vitenskapelige rapporter etter IMRaD-strukturen',
    'bruke korrekt kildehenvisning i APA-stil',
    'gjøre rede for fagfellevurdering og dens rolle i kvalitetssikring av forskning',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-1-8-intro',
      type: 'text',
      content: `## Vitenskapelig rapportering

Forskning har liten verdi hvis den ikke formidles. Vitenskapelig rapportering er måten forskere deler sine funn med verden – og den følger klare normer og standarder. En god vitenskapelig rapport gjør det mulig for andre å forstå hva som ble gjort, hvorfor, og hva resultatene betyr.

I dette kapittelet lærer du om IMRaD-strukturen som brukes i vitenskapelige artikler, hvordan man refererer til kilder, forskjellen mellom tabeller og figurer, og hvordan fagfellevurdering sikrer kvaliteten på publisert forskning.`,
    },

    // --- BLOKK 1: IMRaD-strukturen ---
    {
      id: 'tof1-1-8-def-1',
      type: 'definition',
      title: 'IMRaD-strukturen',
      content: `**IMRaD** er forkortelsen for den standardiserte strukturen i vitenskapelige artikler og rapporter:

- **I – Introduksjon:** Hva er problemstillingen? Hvorfor er den viktig? Hva vet vi allerede? Hva er hypotesen?
- **M – Metode:** Hvordan ble undersøkelsen gjennomført? Hvilke materialer, utstyr og prosedyrer ble brukt? (Detaljert nok til at andre kan gjenta forsøket.)
- **R – Resultater:** Hva fant vi? Data presenteres objektivt med tabeller, grafer og statistikk – uten tolkning.
- **a – og (and)**
- **D – Diskusjon:** Hva betyr resultatene? Støtter de hypotesen? Hvordan forholder de seg til tidligere forskning? Hva er svakheter og feilkilder? Forslag til videre forskning.

I tillegg har de fleste rapporter et **abstract** (sammendrag) i begynnelsen og en **referanseliste** til slutt.`,
    },
    {
      id: 'tof1-1-8-text-1',
      type: 'text',
      content: `### De fire delene i praksis

**Introduksjonen** starter bredt og snevrer inn. Først presenteres temaet og bakgrunnskunnskap, deretter hva som mangler av forskning, og til slutt den spesifikke problemstillingen og hypotesen. Introduksjonen skal overbevise leseren om at undersøkelsen er viktig og relevant.

**Metoden** er den mest «oppskriftsmessige» delen. Den skal beskrive nøyaktig hva du gjorde, slik at en annen forsker kan gjenta forsøket. Inkluder informasjon om utvalg, utstyr, prosedyre, variabler og statistiske metoder.

**Resultatene** presenterer data uten tolkning. Bruk tabeller for nøyaktige tall og figurer (grafer, diagrammer) for å vise trender og mønstre. Beskriv hovedfunnene i tekst, men referer til tabeller og figurer for detaljer.

**Diskusjonen** er den mest analytiske delen. Her tolker du resultatene, sammenligner med tidligere forskning, diskuterer begrensninger og feilkilder, og foreslår hva som bør undersøkes videre.

### Abstract

Et **abstract** er et kort sammendrag (vanligvis 150–300 ord) som dekker alle delene av rapporten: bakgrunn, metode, hovedresultater og konklusjon. Det skrives til slutt, men plasseres først. Abstractet gjør det mulig for lesere å raskt vurdere om artikkelen er relevant for dem.`,
    },
    {
      id: 'tof1-1-8-example-1',
      type: 'example',
      title: 'Eksempel: IMRaD-strukturen i en elevrapport',
      problem: 'Du har gjennomført et forsøk om temperaturens effekt på enzymaktivitet. Hvordan strukturerer du rapporten etter IMRaD?',
      solution: `**Introduksjon:** Enzymer er biologiske katalysatorer som er viktige for alle biokjemiske prosesser. Enzymaktivitet påvirkes av temperatur – for høy temperatur denaturerer enzymet. Problemstilling: Ved hvilken temperatur er aktiviteten til amylase høyest? Hypotese: Amylase har størst aktivitet ved ca. 37 °C.

**Metode:** Stivelsesløsning ble blandet med amylase ved 10 °C, 20 °C, 30 °C, 37 °C, 50 °C og 70 °C. Hvert 30. sekund ble en dråpe tatt ut og testet med jodløsning. Tiden til stivelsen var fullstendig nedbrutt ble registrert. Tre paralleller per temperatur.

**Resultater:** Raskest nedbrytning ved 37 °C (gjennomsnitt 2,5 min). Ved 10 °C tok det 12 min, ved 70 °C var det ingen nedbrytning etter 15 min. Tabell 1 viser gjennomsnittlig tid per temperatur. Figur 1 viser sammenhengen grafisk.

**Diskusjon:** Resultatene støtter hypotesen. 37 °C er optimal temperatur, som forventet for menneskelige enzymer. Ved 70 °C var enzymet trolig denaturert. Feilkilder: Vanskelig å holde nøyaktig temperatur, og jodtesten er subjektiv (fargeskifte vurderes visuelt).`,
    },
    {
      id: 'tof1-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'I hvilken del av en IMRaD-rapport skal du tolke resultatene og sammenligne med tidligere forskning?',
        options: [
          { id: 'a', text: 'Introduksjon', isCorrect: false },
          { id: 'b', text: 'Metode', isCorrect: false },
          { id: 'c', text: 'Resultater', isCorrect: false },
          { id: 'd', text: 'Diskusjon', isCorrect: true },
        ],
        solution: 'Riktig svar er D. Diskusjonen er delen der resultatene tolkes, sammenlignes med tidligere forskning, og der begrensninger og feilkilder drøftes. I Resultater presenteres data objektivt uten tolkning. I Introduksjon presenteres bakgrunn og problemstilling. I Metode beskrives fremgangsmåten.',
      },
    },

    // --- BLOKK 2: Kildehenvisning ---
    {
      id: 'tof1-1-8-def-2',
      type: 'definition',
      title: 'Kildehenvisning i APA-stil',
      content: `**APA-stil** (American Psychological Association) er et av de mest brukte referansesystemene i vitenskapelige tekster.

**Referanse i teksten (parentes):**
- Én forfatter: (Eriksen, 2023)
- To forfattere: (Eriksen & Hansen, 2023)
- Tre eller flere: (Eriksen et al., 2023)
- Direkte sitat: (Eriksen, 2023, s. 45)

**Referanseliste (alfabetisk etter etternavn):**
- Bok: Eriksen, T. H. (2023). *Vitenskapelig metode*. Universitetsforlaget.
- Artikkel: Hansen, M., & Berg, L. (2022). Effekten av søvn på læring. *Norsk pedagogisk tidsskrift*, 106(3), 215–228.
- Nettside: Folkehelseinstituttet. (2024, 15. mars). *Vaksinasjon i Norge*. https://www.fhi.no/vaksinasjon`,
    },
    {
      id: 'tof1-1-8-text-2',
      type: 'text',
      content: `### Hvorfor kildehenvisning er viktig

Kildehenvisning tjener flere formål:

1. **Ærlighet:** Du viser hva som er dine egne ideer og hva som er hentet fra andre.
2. **Etterprøvbarhet:** Leseren kan finne og vurdere kildene dine selv.
3. **Unngå plagiat:** Korrekt kildehenvisning er det som skiller lovlig bruk av andres arbeid fra plagiat.
4. **Bygge på eksisterende kunnskap:** Referanser viser hvordan din forskning knytter seg til det som allerede er kjent.

### Tabell vs. figur

I vitenskapelige rapporter brukes tabeller og figurer for å presentere data effektivt:

**Tabeller** er best for:
- Nøyaktige tallverdier
- Sammenligning av mange kategorier
- Data som leseren trenger å slå opp

**Figurer** (grafer, diagrammer, bilder) er best for:
- Vise trender og mønstre over tid
- Sammenligne størrelser visuelt
- Gjøre komplekse sammenhenger lettere å forstå

Begge skal ha nummer (Tabell 1, Figur 1), en beskrivende tittel, og eventuelt enheter og forklaringer. En god figur eller tabell skal kunne forstås uten å lese teksten.`,
    },
    {
      id: 'tof1-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvordan refererer du korrekt i teksten til en artikkel skrevet av Olsen, Berg og Lie fra 2024 i APA-stil?',
        options: [
          { id: 'a', text: '(Olsen, Berg, Lie, 2024)', isCorrect: false },
          { id: 'b', text: '(Olsen et al., 2024)', isCorrect: true },
          { id: 'c', text: '(Olsen m.fl., 2024)', isCorrect: false },
          { id: 'd', text: '[Olsen 2024]', isCorrect: false },
        ],
        solution: 'Riktig svar er B. I APA-stil brukes «et al.» (latin for «og andre») når det er tre eller flere forfattere. Alle forfatterne listes opp i referanselisten, men i teksten forkortes det til førsteforfatter et al. Alternativ C bruker norsk forkortelse, men APA bruker den latinske.',
      },
    },

    // --- BLOKK 3: Fagfellevurdering ---
    {
      id: 'tof1-1-8-text-3',
      type: 'text',
      content: `### Fagfellevurdering (peer review)

**Fagfellevurdering** er prosessen der vitenskapelige artikler vurderes av uavhengige eksperter (fagfeller) før de publiseres i et tidsskrift. Dette er det viktigste kvalitetssikringssystemet i vitenskap.

**Slik fungerer det:**
1. Forskeren sender inn artikkelen til et vitenskapelig tidsskrift (journal)
2. Redaktøren sender artikkelen til 2–3 uavhengige eksperter på feltet
3. Ekspertene (anonyme for forfatteren) vurderer metode, resultater og konklusjoner
4. Ekspertene anbefaler: godkjent, godkjent med revisjoner, avvist
5. Forskeren reviderer artikkelen basert på tilbakemeldingene
6. Artikkelen publiseres etter godkjenning

**Styrker:**
- Oppdager metodiske svakheter
- Sikrer at konklusjonene støttes av dataene
- Forbedrer kvaliteten på publisert forskning

**Svakheter:**
- Tidkrevende prosess (kan ta måneder)
- Fagfeller kan ha egne interesser eller skjevheter
- Negative resultater publiseres sjeldnere (publiseringsskjevhet)
- Systemet fanger ikke alltid opp svindel`,
    },
    {
      id: 'tof1-1-8-note-1',
      type: 'note',
      title: 'Preprint-servere',
      content: 'For å gjøre forskning raskere tilgjengelig bruker mange forskere **preprint-servere** (f.eks. arXiv, bioRxiv) der artikler publiseres før fagfellevurdering. Under covid-19-pandemien var preprints viktige for rask deling av kunnskap, men det førte også til at uferdige eller feilaktige studier fikk stor oppmerksomhet i mediene.',
    },
    {
      id: 'tof1-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva fagfellevurdering (peer review) er, og diskuter én styrke og én svakhet ved systemet.',
        hints: ['Tenk på hva fagfellevurdering er ment å oppnå, og hva det ikke alltid klarer.'],
        solution: 'Fagfellevurdering er en prosess der vitenskapelige artikler vurderes av uavhengige eksperter før publisering. Ekspertene (fagfeller) vurderer metodens kvalitet, om resultatene er pålitelige, og om konklusjonene er holdbare.\n\nStyrke: Kvalitetskontroll – fagfeller kan oppdage metodiske svakheter, logiske feil og uholdbare konklusjoner som forfatteren selv ikke har sett. Dette hever kvaliteten på publisert forskning betydelig.\n\nSvakhet: Publiseringsskjevhet – studier med positive resultater (som bekrefter hypotesen) publiseres lettere enn studier med negative resultater (som ikke finner noen effekt). Dette gir et skjevt bilde av kunnskapsgrunnlaget fordi mislykket forskning også gir viktig informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-1-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **IMRaD-strukturen** (Introduksjon, Metode, Resultater og Diskusjon) er standarden for vitenskapelige rapporter.
- Et **abstract** gir et kort sammendrag av hele artikkelen og skrives sist, men plasseres først.
- **APA-stil** er et utbredt system for kildehenvisning med referanser i parentes i teksten og en alfabetisk referanseliste.
- **Tabeller** egner seg for nøyaktige tall, mens **figurer** egner seg for å vise trender og mønstre.
- **Fagfellevurdering** (peer review) er det viktigste kvalitetssikringssystemet i vitenskap, der uavhengige eksperter vurderer artikler før publisering.
- Korrekt kildehenvisning er avgjørende for å unngå plagiat og sikre etterprøvbarhet.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har gjennomført et forsøk om hvordan saltkonsentrasjon påvirker frøspiring i karse. Skriv et kort abstract (100–150 ord) som dekker bakgrunn, metode, hovedresultat og konklusjon. (Du kan bruke fiktive tall.)',
        hints: ['Et abstract skal svare på: Hvorfor? Hvordan? Hva fant du? Hva betyr det?'],
        solution: 'Eksempel på abstract:\n\n«Saltholdig jord er et økende problem i landbruket som reduserer avlingene. Denne studien undersøkte effekten av saltkonsentrasjon på frøspiring hos karse (Lepidium sativum). Karsefrø (n = 20 per gruppe) ble lagt til spiring i petriskåler med destillert vann (kontroll) eller NaCl-løsninger med konsentrasjon 0,5 %, 1 %, 2 % og 5 %. Spiringsraten ble registrert daglig i syv dager. Resultatene viste at spiringsraten sank med økende saltkonsentrasjon: 95 % i kontrollgruppen, 85 % ved 0,5 %, 60 % ved 1 %, 25 % ved 2 % og 0 % ved 5 %. Konklusjonen er at saltkonsentrasjoner over 1 % har en markant hemmende effekt på frøspiring hos karse, noe som har betydning for landbruk i saltutsatte områder.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-1-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved fagfellevurderingssystemet (peer review). Ta stilling til om du mener systemet fungerer godt nok, eller om det bør endres. Vurder minst ett alternativ eller supplement til tradisjonell fagfellevurdering.',
        hints: ['Tenk på publiseringsskjevhet, preprint-servere, åpen fagfellevurdering og replikasjonskrisen.'],
        solution: 'Fordeler med fagfellevurdering:\n1. Kvalitetskontroll: Eksperter oppdager metodefeil og uholdbare konklusjoner.\n2. Forbedring: Tilbakemeldinger styrker artikkelen før publisering.\n3. Troverdighet: Fagfellevurderte artikler har høyere status enn ikke-vurderte.\n\nUlemper:\n1. Publiseringsskjevhet: Positive funn publiseres lettere, noe som gir et skjevt kunnskapsbilde.\n2. Treghet: Prosessen kan ta mange måneder – problematisk i krisesituasjoner.\n3. Anonymitet kan misbrukes: Fagfeller kan blokkere konkurrerende forskning.\n4. Fanger ikke alltid svindel: Fabrikasjon og falsifisering kan passere gjennom systemet.\n\nAlternativer/supplementer:\n- Åpen fagfellevurdering: Fagfellenes identitet og kommentarer publiseres. Øker transparens og ansvarlighet.\n- Preprint-servere: Gjør forskning umiddelbart tilgjengelig, med påfølgende åpen diskusjon i forskningsmiljøet.\n- Forhåndsregistrering: Forskere registrerer hypotese og metode FØR datainnsamling, noe som reduserer publiseringsskjevhet.\n\nVurdering: Fagfellevurdering er nødvendig, men bør suppleres med åpne praksiser som preprints, åpen data og forhåndsregistrering for å adressere svakhetene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 1 (kapittel 1.1–1.8)
// ============================================================================

export const TOF_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_1_1, CHAPTER_TOF_1_1_2, CHAPTER_TOF_1_1_3, CHAPTER_TOF_1_1_4,
  CHAPTER_TOF_1_1_5, CHAPTER_TOF_1_1_6, CHAPTER_TOF_1_1_7, CHAPTER_TOF_1_1_8,
];

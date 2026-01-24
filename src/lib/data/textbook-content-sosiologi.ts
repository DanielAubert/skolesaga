/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Sosiologi og sosialantropologi (VG2-VG3)
 *
 * Følger LK20 læreplan for programfaget sosiologi og sosialantropologi.
 * Dekker sentrale temaer innen sosiologisk og sosialantropologisk teori og metode.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Hva er sosiologi og sosialantropologi?
// ============================================================================

export const CHAPTER_SOSIOLOGI_1: TextbookChapter = {
  id: 'sosiologi-1',
  courseId: 'sosiologi',
  chapterNumber: '1',
  title: 'Hva er sosiologi og sosialantropologi?',
  description: 'En introduksjon til fagene sosiologi og sosialantropologi, deres historie, sentrale begreper og perspektiver.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for sentrale trekk ved sosiologi og sosialantropologi som vitenskapelige disipliner',
    'drøfte hvordan sosiologiske og sosialantropologiske perspektiver kan bidra til å forstå samfunn og kultur',
  ],
  content: [
    {
      id: 'sosiologi-1-intro',
      type: 'text',
      content: `## Sosiologi og sosialantropologi - fagenes egenart

Sosiologi og sosialantropologi er to samfunnsvitenskapelige fag som studerer mennesker i samfunn. Begge fagene søker å forstå hvordan mennesker lever sammen, hvordan samfunn er organisert, og hvordan kultur og sosiale strukturer påvirker våre liv.

**Sosiologi** fokuserer på studiet av samfunn, sosiale relasjoner og institusjoner. Faget oppsto på 1800-tallet som en reaksjon på de store samfunnsendringene som fulgte av industrialiseringen.

**Sosialantropologi** studerer menneskelige kulturer og samfunn, ofte med fokus på hvordan mennesker skaper mening i sine liv. Faget har tradisjonelt vært opptatt av å studere andre kulturer enn forskerens egen.

**Felles for begge fag:**
- Systematisk studie av mennesker i samfunn
- Bruk av vitenskapelige metoder
- Fokus på sosiale relasjoner og strukturer
- Interesse for kultur og mening`,
    },
    {
      id: 'sosiologi-1-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Samfunn:**
En gruppe mennesker som lever sammen i et avgrenset område og deler felles institusjoner, normer og kultur.

**Kultur:**
De verdier, normer, kunnskaper, tradisjoner og levemåter som deles av en gruppe mennesker og overføres fra generasjon til generasjon.

**Sosial struktur:**
De mønstre av sosiale relasjoner og institusjoner som organiserer samfunnet.

**Sosiale institusjoner:**
Etablerte mønstre for å dekke grunnleggende behov i samfunnet, som familie, utdanning, økonomi og religion.

**Normer:**
Regler og forventninger som styrer atferd i samfunnet. Kan være formelle (lover) eller uformelle (skikk og bruk).

**Verdier:**
Oppfatninger om hva som er godt, riktig og ønskelig i et samfunn.`,
    },
    {
      id: 'sosiologi-1-def-2',
      type: 'definition',
      title: 'Sosiologiens grunnleggere',
      content: `**Auguste Comte (1798-1857):**
Regnes som sosiologiens far. Introduserte begrepet sosiologi og mente at samfunnet kunne studeres vitenskapelig.

**Émile Durkheim (1858-1917):**
Etablerte sosiologi som akademisk fag. Opptatt av sosial solidaritet og hvordan samfunn holder sammen.

**Karl Marx (1818-1883):**
Analyserte klassekonflikter og økonomiske strukturer. Mente at økonomien er grunnlaget for samfunnet.

**Max Weber (1864-1920):**
Opptatt av å forstå mening bak sosial handling. Studerte byråkrati, religion og makt.

**Harriet Martineau (1802-1876):**
Første kvinnelige sosiolog. Oversatte Comte og skrev om sosiale forhold.`,
    },
    {
      id: 'sosiologi-1-def-3',
      type: 'definition',
      title: 'Sosialantropologiens røtter',
      content: `**Bronislaw Malinowski (1884-1942):**
Pionér for feltarbeid. Levde blant trobrianderne i flere år og utviklet deltakende observasjon som metode.

**Franz Boas (1858-1942):**
Grunnlegger av amerikansk antropologi. Kritiserte rasisme og evolusjonisme, fremmet kulturrelativisme.

**Claude Lévi-Strauss (1908-2009):**
Strukturalistisk antropologi. Studerte mytenes universelle strukturer.

**Clifford Geertz (1926-2006):**
Tolkende antropologi. Opptatt av å forstå kulturens symbolske betydning.

**Feltarbeid:**
Antropologens viktigste metode. Innebærer langvarig opphold i samfunnet man studerer.`,
    },
    {
      id: 'sosiologi-1-example-1',
      type: 'example',
      title: 'Eksempel: Den sosiologiske fantasien',
      problem: `C. Wright Mills introduserte begrepet "den sosiologiske fantasien". Hva innebærer dette, og hvordan kan det hjelpe oss å forstå arbeidsløshet?`,
      solution: `**Den sosiologiske fantasien:**
Evnen til å se sammenhengen mellom individuelle erfaringer og større samfunnsstrukturer.

**Arbeidsløshet som eksempel:**

**Individuelt perspektiv:**
- Person A er arbeidsløs
- Kan skyldes manglende kompetanse, motivasjon eller uhell

**Sosiologisk perspektiv:**
- Mange er arbeidsløse samtidig
- Strukturelle årsaker: konjunkturer, teknologiendringer, globalisering
- Politiske valg påvirker arbeidsmarkedet

**Mills' poeng:**
Når én person er arbeidsløs, kan det være et personlig problem. Når tusenvis er arbeidsløse, er det et samfunnsproblem som krever strukturelle løsninger.

**Den sosiologiske fantasien** hjelper oss å se at personlige problemer ofte har sosiale årsaker og løsninger.`,
    },
    {
      id: 'sosiologi-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom sosiologi og sosialantropologi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sosiologiens hovedfokus?',
            solution: 'Sosiologi fokuserer på studiet av samfunn, sosiale relasjoner og institusjoner, ofte i moderne industrisamfunn.',
          },
          {
            label: 'b',
            task: 'Hva er sosialantropologiens hovedfokus?',
            solution: 'Sosialantropologi studerer menneskelige kulturer og samfunn, tradisjonelt med fokus på andre kulturer gjennom feltarbeid.',
          },
          {
            label: 'c',
            task: 'Hva er felles for de to fagene?',
            solution: 'Begge studerer mennesker i samfunn, bruker vitenskapelige metoder, og er opptatt av sosiale relasjoner og kultur.',
          },
        ],
        solution: 'Sosiologi og sosialantropologi er beslektede fag som begge studerer mennesker i samfunn, men med ulik vektlegging av metoder og fokusområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg én av sosiologiens grunnleggere og gjør rede for vedkommendes bidrag til faget.',
        hints: ['Velg mellom Comte, Durkheim, Marx, Weber eller Martineau'],
        solution: 'Svaret bør inneholde informasjon om personens bakgrunn, sentrale ideer og bidrag til sosiologien som fag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar begrepet "den sosiologiske fantasien" og gi et eget eksempel.',
        hints: ['Tenk på en personlig utfordring som kan ha strukturelle årsaker'],
        solution: 'Den sosiologiske fantasien er evnen til å se sammenhengen mellom individuelle erfaringer og samfunnsstrukturer. Eksempler kan være psykisk helse, fattigdom eller utdanningsvalg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med kultur, normer og verdier? Gi eksempler fra norsk samfunn.',
        solution: 'Kultur er delte levemåter og kunnskaper. Normer er regler for atferd (f.eks. hilse, stå i kø). Verdier er oppfatninger om det gode (f.eks. likhet, frihet, naturkjærlighet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor det er viktig å studere samfunn vitenskapelig.',
        hints: ['Tenk på hva vi kan lære, og hvordan kunnskapen kan brukes'],
        solution: 'Vitenskapelig studie gir systematisk kunnskap om sosiale forhold, avdekker mønstre som ikke er åpenbare, gir grunnlag for politiske beslutninger, og utfordrer fordommer og myter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva innebærer feltarbeid som metode i sosialantropologien?',
        hints: ['Tenk på deltakende observasjon, varighet og forskerens rolle'],
        solution: 'Feltarbeid innebærer langvarig opphold i samfunnet man studerer, deltakelse i daglige aktiviteter, observasjon, intervjuer og notater. Forskeren prøver å forstå kulturen innenfra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Sosialisering og identitet
// ============================================================================

export const CHAPTER_SOSIOLOGI_2: TextbookChapter = {
  id: 'sosiologi-2',
  courseId: 'sosiologi',
  chapterNumber: '2',
  title: 'Sosialisering og identitet',
  description: 'Hvordan vi blir formet av samfunnet og utvikler vår identitet gjennom sosialisering.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for sentrale teorier om sosialisering og identitetsdannelse',
    'drøfte hvordan ulike sosialiseringsagenter påvirker individets utvikling',
  ],
  content: [
    {
      id: 'sosiologi-2-intro',
      type: 'text',
      content: `## Sosialisering - å bli et samfunnsmedlem

Sosialisering er prosessen der individer lærer å bli medlemmer av samfunnet. Gjennom sosialisering tilegner vi oss kultur, normer, verdier og ferdigheter som gjør oss i stand til å fungere i samfunnet.

**Primærsosialisering:**
Den første sosialiseringen som skjer i barndommen, hovedsakelig i familien. Her læres grunnleggende verdier, språk og sosiale ferdigheter.

**Sekundærsosialisering:**
Sosialisering som skjer senere i livet, gjennom skole, venner, arbeid og media. Her læres mer spesifikke roller og ferdigheter.

**Sosialiseringens betydning:**
- Overfører kultur fra generasjon til generasjon
- Skaper sosial orden og forutsigbarhet
- Former individets personlighet og identitet
- Gjør mennesker i stand til å samhandle`,
    },
    {
      id: 'sosiologi-2-def-1',
      type: 'definition',
      title: 'Sosialiseringsagenter',
      content: `**Familie:**
Den viktigste agenten for primærsosialisering. Gir grunnleggende trygghet, verdier og tilhørighet.

**Barnehage og skole:**
Formell sosialisering. Lærer fagkunnskap, samarbeid, regler og det å forholde seg til autoritet.

**Venner og jevnaldrende:**
Viktig for identitetsutvikling, spesielt i ungdomstiden. Lærer sosiale koder og løsriver seg fra foreldre.

**Arbeidsliv:**
Sosialisering til yrkesroller og arbeidslivets normer og forventninger.

**Media og sosiale medier:**
Formidler verdier, rollemodeller og virkelighetsoppfatninger. Stor påvirkningskraft på unge.

**Religion og organisasjoner:**
Formidler verdier, tilhørighet og identitet til bestemte grupper.`,
    },
    {
      id: 'sosiologi-2-def-2',
      type: 'definition',
      title: 'Teorier om sosialisering',
      content: `**George Herbert Mead (1863-1931):**
Symbolsk interaksjonisme. Selvet utvikles gjennom sosial interaksjon. Vi ser oss selv gjennom andres øyne ("speilselvet").

**Jean Piaget (1896-1980):**
Kognitiv utvikling skjer i stadier. Barn utvikler gradvis evnen til abstrakt tenkning.

**Lev Vygotsky (1896-1934):**
Sosial konstruktivisme. Læring skjer i samspill med andre. Den nærmeste utviklingssonen.

**Erik Erikson (1902-1994):**
Psykososial utvikling gjennom åtte stadier fra fødsel til alderdom. Hver fase har en sentral konflikt.

**Pierre Bourdieu (1930-2002):**
Habitus - inkorporerte disposisjoner vi lærer gjennom oppveksten. Ulik sosial bakgrunn gir ulik habitus.`,
    },
    {
      id: 'sosiologi-2-def-3',
      type: 'definition',
      title: 'Identitetsbegreper',
      content: `**Identitet:**
Hvem vi opplever at vi er. En kombinasjon av personlig og sosial identitet.

**Personlig identitet:**
Det unike ved oss som individer - våre erfaringer, egenskaper og livshistorie.

**Sosial identitet:**
Den delen av identiteten som kommer fra gruppetilhørighet - kjønn, etnisitet, klasse, religion.

**Rolleidentitet:**
Identitet knyttet til sosiale roller vi har - student, sønn/datter, venn, arbeidstaker.

**Selvbilde:**
Vår oppfatning av oss selv - styrer hvordan vi handler og tolker verden.

**Stigma:**
Negativt stempel som påvirker identitet og hvordan andre ser oss.`,
    },
    {
      id: 'sosiologi-2-example-1',
      type: 'example',
      title: 'Eksempel: Meads teori om selvet',
      problem: `Hvordan forklarer George Herbert Mead utviklingen av selvet hos barn?`,
      solution: `**Meads teori om selvets utvikling:**

**Grunnide:**
Selvet utvikles gjennom sosial interaksjon. Vi lærer hvem vi er ved å se oss selv gjennom andres øyne.

**Tre stadier:**

**1. Forberedende stadium (0-2 år):**
- Barnet imiterer andre uten å forstå meningen
- Lærer grunnleggende gester og uttrykk

**2. Lekstadiet (2-6 år):**
- Barnet tar rollen til signifikante andre (foreldre, søsken)
- Rollelek: Leker "mor", "far", "lærer"
- Ser seg selv fra én annens perspektiv

**3. Spillstadiet (7+ år):**
- Kan ta flere roller samtidig
- Forstår regler og forventninger i grupper
- Utvikler "den generaliserte andre" - samfunnets samlede forventninger

**"Jeg" og "Meg":**
- "Jeg" (I) = Den spontane, kreative siden
- "Meg" (Me) = Den sosialiserte siden som ser seg selv gjennom andres øyne

**Speilselvet:** Vi speiler oss i andres reaksjoner og former vår identitet deretter.`,
    },
    {
      id: 'sosiologi-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom primær- og sekundærsosialisering.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner primærsosialisering?',
            solution: 'Primærsosialisering skjer i barndommen, hovedsakelig i familien, og innebærer læring av grunnleggende verdier, språk og sosiale ferdigheter.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner sekundærsosialisering?',
            solution: 'Sekundærsosialisering skjer senere i livet gjennom skole, venner, arbeid og media, og innebærer læring av mer spesifikke roller og ferdigheter.',
          },
          {
            label: 'c',
            task: 'Hvorfor er begge viktige?',
            solution: 'Primærsosialisering gir grunnlaget for personligheten, mens sekundærsosialisering gjør oss i stand til å fungere i ulike sammenhenger i samfunnet.',
          },
        ],
        solution: 'Primærsosialisering legger grunnlaget i barndommen, sekundærsosialisering bygger videre gjennom livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken sosialiseringsagent mener du har størst påvirkning på ungdom i dag? Begrunn svaret.',
        hints: ['Tenk på sosiale medier, venner, familie og skole'],
        solution: 'Svaret bør vurdere ulike agenters påvirkning med konkrete argumenter. Mange vil peke på sosiale medier og venner som særlig viktige i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar Bourdieus begrep habitus og gi eksempler.',
        hints: ['Tenk på hvordan oppvekst påvirker smak, vaner og væremåte'],
        solution: 'Habitus er inkorporerte disposisjoner som former hvordan vi tenker, handler og oppfatter verden. Eksempler: matpreferanser, språkbruk, klesstil, fritidsinteresser varierer med sosial bakgrunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom personlig og sosial identitet.',
        solution: 'Personlig identitet er det unike ved oss som individer (erfaringer, egenskaper). Sosial identitet kommer fra gruppetilhørighet (kjønn, etnisitet, klasse). Begge er viktige deler av hvem vi er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan sosiale medier påvirker identitetsdannelse hos unge.',
        hints: ['Tenk på selvpresentasjon, sammenlikning med andre, likes og tilbakemeldinger'],
        solution: 'Sosiale medier gir mulighet for selvpresentasjon og identitetsutforskning, men kan også føre til press, sammenligning og utvikling av et "digitalt selv" som avviker fra virkeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva menes med stigma, og hvordan kan stigmatisering påvirke en persons identitet?',
        hints: ['Tenk på Goffmans teori om stigma'],
        solution: 'Stigma er et negativt stempel som diskrediterer personen. Stigmatisering kan påvirke selvbilde, begrense muligheter og føre til at personen internaliserer andres negative syn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Kultur og kulturforståelse
// ============================================================================

export const CHAPTER_SOSIOLOGI_3: TextbookChapter = {
  id: 'sosiologi-3',
  courseId: 'sosiologi',
  chapterNumber: '3',
  title: 'Kultur og kulturforståelse',
  description: 'Ulike perspektiver på kultur, kulturmøter og kulturelt mangfold i en globalisert verden.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for ulike kulturbegreper og perspektiver på kultur',
    'drøfte kulturelt mangfold, kulturmøter og kulturendring',
  ],
  content: [
    {
      id: 'sosiologi-3-intro',
      type: 'text',
      content: `## Kulturbegrepet

Kultur er et av de mest sentrale begrepene i sosiologi og sosialantropologi. Begrepet brukes på mange måter og har ulike betydninger.

**Hverdagslig bruk:**
- Finkultur (kunst, litteratur, musikk)
- Kultur som underholdning og fritidsaktiviteter

**Sosialantropologisk bruk:**
- Kultur som hele levemåten til en gruppe mennesker
- Inkluderer verdier, normer, kunnskaper, tradisjoner, språk, religion

**Kulturs kjennetegn:**
- Lært - ikke medfødt
- Delt - felles for en gruppe
- Integrert - elementene henger sammen
- Dynamisk - endrer seg over tid
- Symbolbasert - bygger på delt mening`,
    },
    {
      id: 'sosiologi-3-def-1',
      type: 'definition',
      title: 'Kulturbegreper',
      content: `**Materiell kultur:**
Fysiske gjenstander som mennesker lager og bruker - verktøy, bygninger, klær, kunst.

**Immateriell kultur:**
Ikke-fysiske aspekter - verdier, normer, språk, kunnskap, tro, tradisjoner.

**Subkultur:**
En gruppe som deler særegne verdier, normer eller livsstil innenfor et større samfunn.

**Motkultur:**
En subkultur som aktivt motsetter seg dominerende kultur.

**Høykultur og populærkultur:**
Skille mellom "finkultur" og massekultur. Skillet er omdiskutert.

**Kulturell kapital:**
(Bourdieu) Kulturelle ressurser som gir fordeler - utdanning, smak, væremåte.`,
    },
    {
      id: 'sosiologi-3-def-2',
      type: 'definition',
      title: 'Perspektiver på kulturelt mangfold',
      content: `**Etnosentrisme:**
Å vurdere andre kulturer ut fra egen kulturs målestokk. Ofte nedvurderer man det som er annerledes.

**Kulturrelativisme:**
Å forstå kulturer på deres egne premisser. Ingen kultur er objektivt "bedre" enn andre.

**Multikulturalisme:**
Politikk og ideologi som verdsetter kulturelt mangfold og gir grupper rett til å bevare sin kultur.

**Assimilering:**
Minoriteter oppgir sin kultur og tilpasser seg majoritetskulturen.

**Integrering:**
Minoriteter deltar i samfunnet mens de beholder deler av sin kultur.

**Segregering:**
Grupper lever adskilt med lite kontakt på tvers av kulturelle skillelinjer.`,
    },
    {
      id: 'sosiologi-3-def-3',
      type: 'definition',
      title: 'Kulturmøter og kulturendring',
      content: `**Akkulturasjon:**
Kulturendring som skjer når grupper med ulik kultur møtes. Kan gå begge veier.

**Diffusjon:**
Spredning av kulturelementer fra ett samfunn til et annet.

**Kreolisering:**
Nye kulturformer oppstår når elementer fra ulike kulturer blandes.

**Kulturell hybriditet:**
Blanding av kulturelle elementer skaper nye, sammensatte identiteter.

**Globalisering og kultur:**
Spredning av vestlig/amerikansk kultur, men også motreaksjoner og lokale tilpasninger ("glokalisering").

**Tradisjonalisme:**
Motstand mot kulturendring og ønske om å bevare tradisjonell kultur.`,
    },
    {
      id: 'sosiologi-3-example-1',
      type: 'example',
      title: 'Eksempel: Etnosentrisme vs. kulturrelativisme',
      problem: `I noen kulturer arrangeres ekteskap av familien. Hvordan vil en etnosentrisk og en kulturrelativistisk tilnærming vurdere dette?`,
      solution: `**Etnosentrisk tilnærming:**
- Vurderer arrangerte ekteskap ut fra vestlige verdier
- Ser det som brudd på individuell frihet
- "Vi" gjør det riktig, "de" gjør det feil
- Kan føre til fordommer og nedvurdering

**Kulturrelativistisk tilnærming:**
- Prøver å forstå praksisen i sin kontekst
- Ser på hvilken mening og funksjon den har
- Anerkjenner at familie og kollektiv kan være viktigere enn individ
- Unngår moralsk fordømmelse

**Kritikk av ekstrem kulturrelativisme:**
- Kan føre til at man aksepterer skadelige praksiser
- Menneskerettigheter gjelder universelt
- Viktig å skille mellom forståelse og aksept

**Balansert tilnærming:**
- Prøv å forstå før du dømmer
- Anerkjenn at det finnes universelle verdier
- Skille mellom tvang og frivillig valg
- Lytt til stemmene innenfor kulturen`,
    },
    {
      id: 'sosiologi-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom materiell og immateriell kultur, og gi eksempler.',
        solution: 'Materiell kultur er fysiske gjenstander (bunad, mat, bygninger). Immateriell kultur er ikke-fysiske aspekter (17. mai-tradisjoner, janteloven, norsk). Begge henger sammen - bunaden (materiell) symboliserer nasjonal identitet (immateriell).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom etnosentrisme og kulturrelativisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer etnosentrisme',
            solution: 'Etnosentrisme er å vurdere andre kulturer ut fra egen kulturs målestokk, ofte med nedvurdering av det som er annerledes.',
          },
          {
            label: 'b',
            task: 'Definer kulturrelativisme',
            solution: 'Kulturrelativisme er å forstå kulturer på deres egne premisser, uten å anta at egen kultur er overlegen.',
          },
          {
            label: 'c',
            task: 'Hvilke utfordringer er knyttet til kulturrelativisme?',
            solution: 'Ekstrem kulturrelativisme kan føre til at man aksepterer skadelige praksiser. Menneskerettigheter setter grenser for kulturrelativisme.',
          },
        ],
        solution: 'Etnosentrisme = vurdere ut fra egen kultur. Kulturrelativisme = forstå på kulturens egne premisser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi eksempler på subkulturer og forklar hva som kjennetegner dem.',
        hints: ['Tenk på musikk, sport, gaming, livsstil'],
        solution: 'Subkulturer har særegne verdier, normer eller livsstil. Eksempler: hip-hop-kultur, gaming-miljøer, miljøaktivister, religiøse grupper. Kjennetegn: egen sjargong, stil, møteplasser, verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft forskjellen mellom assimilering og integrering.',
        hints: ['Tenk på hva som skjer med minoritetskulturen'],
        solution: 'Assimilering: Minoriteter oppgir sin kultur og blir lik majoriteten. Integrering: Minoriteter deltar i samfunnet men beholder deler av sin kultur. Integrering er toveisprosess der også majoriteten tilpasser seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan påvirker globaliseringen kultur? Gi eksempler på kulturspredning og motreaksjoner.',
        hints: ['Tenk på mat, musikk, mote, språk'],
        solution: 'Globaliseringen sprer kulturer (McDonald\'s, Netflix, engelsk språk), men også motreaksjoner (lokal matkultur, nasjonalisme). Glokalisering: Globale fenomener tilpasses lokalt (Bollywood, K-pop).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva menes med kulturell kapital, og hvordan kan det påvirke livssjanser?',
        hints: ['Tenk på Bourdieu og sammenheng mellom kultur og sosial posisjon'],
        solution: 'Kulturell kapital er kulturelle ressurser som gir fordeler - utdanning, "riktig" smak, væremåte, språkbruk. De som har kulturell kapital verdsatt av makthaverne, har lettere for å lykkes i utdanning og arbeidsliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Familie og samliv
// ============================================================================

export const CHAPTER_SOSIOLOGI_4: TextbookChapter = {
  id: 'sosiologi-4',
  courseId: 'sosiologi',
  chapterNumber: '4',
  title: 'Familie og samliv',
  description: 'Studiet av familie som sosial institusjon, ulike familieformer og endringer i samliv.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for ulike familieformer og samlivsformer i et historisk og tverrkulturelt perspektiv',
    'drøfte endringer i familie og samliv og ulike syn på disse endringene',
  ],
  content: [
    {
      id: 'sosiologi-4-intro',
      type: 'text',
      content: `## Familien som sosial institusjon

Familien er en av samfunnets grunnleggende institusjoner. Den finnes i alle kjente samfunn, men tar ulike former. Familien ivaretar viktige funksjoner som reproduksjon, omsorg, sosialisering og økonomisk samarbeid.

**Familiens funksjoner:**
- Reproduksjon og omsorg for barn
- Primærsosialisering
- Emosjonell støtte og tilhørighet
- Økonomisk samarbeid og forsørgelse
- Overføring av status og eiendom

**Endringer i norsk familieliv:**
- Fra storfamilie til kjernefamilie
- Færre barn per familie
- Flere skilsmisser og nye familiekonstellasjoner
- Likere fordeling mellom kjønnene
- Flere velger å leve alene`,
    },
    {
      id: 'sosiologi-4-def-1',
      type: 'definition',
      title: 'Familieformer',
      content: `**Kjernefamilie:**
To voksne (gifte/samboende) og deres barn. Dominerende form i moderne vestlige samfunn.

**Storfamilie/utvidet familie:**
Flere generasjoner og/eller søsken med familier som bor sammen eller nært.

**Enslig forsørger:**
Én voksen med omsorg for barn. Oftest mor, men far-barn-familier øker.

**Stefamilie/bonusfamilie:**
Familie der minst én voksen har barn fra tidligere forhold.

**Regnbuefamilie:**
Familie med to foreldre av samme kjønn.

**Samboerskap:**
Par som bor sammen uten å være gift. Svært vanlig i Norge.

**LAT-forhold:**
Living Apart Together - par som er sammen uten å bo sammen.`,
    },
    {
      id: 'sosiologi-4-def-2',
      type: 'definition',
      title: 'Ekteskaps- og slektskapssystemer',
      content: `**Monogami:**
Ekteskap mellom to personer. Lovpålagt i Norge.

**Polygami:**
Ekteskap med flere partnere. Polygyni (én mann, flere kvinner) eller polyandri (én kvinne, flere menn).

**Endogami:**
Ekteskap innenfor egen gruppe (f.eks. kaste, religion, etnisitet).

**Eksogami:**
Ekteskap utenfor egen gruppe. Incestregler er en form for eksogami.

**Patrilokalitet:**
Brud flytter til mannens familie.

**Matrilokalitet:**
Mann flytter til brudens familie.

**Neolokalitet:**
Paret etablerer eget hjem uavhengig av foreldrene. Vanlig i Norge.`,
    },
    {
      id: 'sosiologi-4-def-3',
      type: 'definition',
      title: 'Perspektiver på familie',
      content: `**Funksjonalistisk perspektiv:**
Familien fyller viktige funksjoner for samfunnet. Kjernefamilien er tilpasset industrisamfunnet.

**Konfliktperspektiv:**
Familien reproduserer ulikhet. Kvinner har historisk vært undertrykt i familien. Arv overfører privilegier.

**Feministisk perspektiv:**
Kritiserer tradisjonell arbeidsdeling. Usynlig husarbeid. Maktforhold i parforhold.

**Interaksjonistisk perspektiv:**
Fokus på hvordan familiemedlemmer skaper mening og identitet i hverdagen.

**Individualiseringsperspektiv:**
Familien har blitt mer valgfri. Folk velger selv familieform basert på egne ønsker.`,
    },
    {
      id: 'sosiologi-4-example-1',
      type: 'example',
      title: 'Eksempel: Endringer i norsk familieliv',
      problem: `Hvordan har familielivet i Norge endret seg de siste 50 årene?`,
      solution: `**Endringer i norsk familieliv:**

**1. Familiestørrelse:**
- Færre barn (fra 2,5 til 1,5 i snitt)
- Flere lever alene
- Flere husholdninger med én person

**2. Samlivsformer:**
- Samboerskap svært vanlig
- Gjennomsnittsalder ved første barn har økt
- Flere skilsmisser (ca. 40 % av ekteskap)
- Flere stefamilier og delte familier

**3. Kjønnsroller:**
- Kvinner i lønnsarbeid
- Fedre tar mer ansvar hjemme
- Fedrekvote i foreldrepermisjon
- Fortsatt ulik fordeling av husarbeid

**4. Lovgivning:**
- Kjønnsnøytral ekteskapslov (2009)
- Assistert befruktning for likekjønnede
- Likestillingslov

**5. Holdninger:**
- Mindre stigma rundt skilsmisse og enslige foreldre
- Aksept for ulike familieformer
- Barn får mer medbestemmelse

**Årsaker til endringene:**
- Urbanisering og utdanningsrevolusjon
- Kvinner i arbeidslivet
- Prevensjon og abort
- Velferdsstaten
- Individualisering og sekularisering`,
    },
    {
      id: 'sosiologi-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er familiens viktigste funksjoner i samfunnet?',
        solution: 'Reproduksjon, omsorg for barn, primærsosialisering, emosjonell støtte, økonomisk samarbeid, overføring av status og eiendom. Familien er grunnleggende for samfunnets videreføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv minst fire ulike familieformer og gi eksempler.',
        hints: ['Tenk på kjernefamilie, storfamilie, stefamilie, enslig forsørger, regnbuefamilie'],
        solution: 'Kjernefamilie (to foreldre + barn), storfamilie (flere generasjoner), stefamilie (barn fra tidligere forhold), enslig forsørger (én forelder), regnbuefamilie (likekjønnede foreldre).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign funksjonalistisk og konfliktperspektiv på familien.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva vektlegger funksjonalistene?',
            solution: 'Familiens viktige funksjoner for samfunnet: sosialisering, stabilitet, emosjonell støtte. Familien som harmonisk enhet.',
          },
          {
            label: 'b',
            task: 'Hva vektlegger konfliktperspektivet?',
            solution: 'Makt og ulikhet i familien. Reproduksjon av sosiale forskjeller. Historisk undertrykking av kvinner. Arv som overfører privilegier.',
          },
        ],
        solution: 'Funksjonalisme = familiens funksjoner og stabilitet. Konfliktperspektiv = makt, ulikhet og undertrykking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvorfor skilsmisseraten har økt i Norge.',
        hints: ['Tenk på økonomisk uavhengighet, holdninger, lovgivning'],
        solution: 'Økt økonomisk uavhengighet for kvinner, endrede holdninger (mindre stigma), enklere skilsmisseprosess, høyere forventninger til ekteskap, individualisme og selvrealisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom monogami, polygyni og polyandri?',
        solution: 'Monogami = ekteskap mellom to. Polygyni = én mann, flere kvinner (vanligste form for polygami). Polyandri = én kvinne, flere menn (sjelden). Monogami er lovpålagt i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft om den tradisjonelle kjernefamilien er i oppløsning.',
        hints: ['Bruk statistikk og ulike perspektiver'],
        solution: 'Ja: Flere skilsmisser, samboerskap, enslige, nye familieformer. Nei: Kjernefamilien fortsatt vanligst, de fleste barn vokser opp med to foreldre. Kanskje: Familien endrer form, men består som institusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Sosial ulikhet og klasse
// ============================================================================

export const CHAPTER_SOSIOLOGI_5: TextbookChapter = {
  id: 'sosiologi-5',
  courseId: 'sosiologi',
  chapterNumber: '5',
  title: 'Sosial ulikhet og klasse',
  description: 'Teorier om sosial ulikhet, klassebegreper og sosial mobilitet i moderne samfunn.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for teorier om sosial ulikhet og lagdeling',
    'drøfte årsaker til og konsekvenser av sosial ulikhet',
  ],
  content: [
    {
      id: 'sosiologi-5-intro',
      type: 'text',
      content: `## Sosial ulikhet

Sosial ulikhet handler om forskjeller mellom mennesker og grupper når det gjelder tilgang til goder som penger, makt, status og muligheter. Alle kjente samfunn har en form for sosial ulikhet, men graden og formen varierer.

**Ulike dimensjoner av ulikhet:**
- Økonomisk ulikhet (inntekt og formue)
- Makt (politisk innflytelse)
- Status (sosial anerkjennelse)
- Livssjanser (helse, utdanning, levealder)

**Sosial lagdeling:**
Hvordan samfunnet er delt inn i hierarkiske lag eller sjikt basert på ulikhet.

**Sosial stratifikasjon:**
Systematiske ulikheter mellom grupper som vedvarer over generasjoner.

**Debatt om årsaker til ulikhet:**
Det finnes ulike syn på hva som forårsaker sosial ulikhet:
- *Strukturelle forklaringer:* Vektlegger samfunnsstrukturer, klassesystem og ulik tilgang til ressurser
- *Individuelle forklaringer:* Vektlegger individuelle valg, innsats, evner og personlig ansvar
- *Kombinerte perspektiver:* De fleste sosiologer anerkjenner at både strukturelle forhold og individuelle faktorer spiller inn

Hvordan man vekter disse faktorene har politiske implikasjoner og er gjenstand for faglig og politisk debatt.`,
    },
    {
      id: 'sosiologi-5-def-1',
      type: 'definition',
      title: 'Klassebegreper',
      content: `**Karl Marx (økonomisk klasse):**
Klasse bestemmes av forholdet til produksjonsmidlene:
- Borgerskapet (kapitalistene) eier produksjonsmidlene
- Arbeiderklassen (proletariatet) selger sin arbeidskraft
- Klassekamp er drivkraften i historien

**Max Weber (tre dimensjoner):**
Ulikhet har tre dimensjoner som ikke alltid sammenfaller:
- Klasse (økonomisk posisjon)
- Status (sosial anerkjennelse)
- Parti (politisk makt)

**Pierre Bourdieu (kapitalformer):**
Klasse handler om ulike former for kapital:
- Økonomisk kapital (penger, eiendom)
- Kulturell kapital (utdanning, smak)
- Sosial kapital (nettverk, kontakter)
- Symbolsk kapital (anerkjennelse, ære)

**Alternative perspektiver:**
Noen forskere og økonomer vektlegger i større grad:
- Individuelle forskjeller i evner, talenter og innsats
- Betydningen av personlige valg og risikovillighet
- Markedsmekanismer som belønner produktivitet
- Humankapital (utdanning og ferdigheter den enkelte investerer i)

Debatten mellom strukturelle og individuelle forklaringer er sentral i samfunnsvitenskapen.`,
    },
    {
      id: 'sosiologi-5-def-2',
      type: 'definition',
      title: 'Sosial mobilitet',
      content: `**Sosial mobilitet:**
Bevegelse mellom posisjoner i det sosiale hierarkiet.

**Vertikal mobilitet:**
Bevegelse oppover (oppadgående) eller nedover (nedadgående) i hierarkiet.

**Horisontal mobilitet:**
Bevegelse mellom posisjoner på samme nivå.

**Intergenerasjonell mobilitet:**
Sammenligning mellom generasjoner (foreldre-barn).

**Intragenerasjonell mobilitet:**
Bevegelse gjennom ett livsløp.

**Absolutt mobilitet:**
Endring i faktisk levestandard.

**Relativ mobilitet:**
Endring i posisjon sammenlignet med andre.`,
    },
    {
      id: 'sosiologi-5-def-3',
      type: 'definition',
      title: 'Ulikhetsmål',
      content: `**Gini-koeffisienten:**
Mål på økonomisk ulikhet fra 0 (perfekt likhet) til 1 (all inntekt til én person). Norge: ca. 0,27.

**Fattigdom:**
- Absolutt fattigdom: Under et definert minimum
- Relativ fattigdom: Inntekt under 60 % av medianinntekten

**Sosioøkonomisk status (SES):**
Samlemål for utdanning, yrke og inntekt.

**Sosial arv:**
At barn "arver" foreldrenes sosiale posisjon gjennom oppvekst og muligheter.

**Klassesamfunn vs. meritokrati:**
- Klassesamfunn: Posisjon arves
- Meritokrati: Posisjon basert på innsats og evner`,
    },
    {
      id: 'sosiologi-5-example-1',
      type: 'example',
      title: 'Eksempel: Ulikhet i Norge',
      problem: `Norge regnes som et av verdens mest likestilte land. Hvordan står det til med ulikheten?`,
      solution: `**Ulikhet i Norge:**

**Inntektsulikhet:**
- Lav i internasjonal sammenheng (Gini ca. 0,27)
- Har økt noe de siste tiårene
- Store lønnsforskjeller mellom topp og bunn

**Formuesulikhet:**
- Større enn inntektsulikhet
- De 10 % rikeste eier over 50 % av formuen
- Arv reproduserer formuesforskjeller

**Utdanning:**
- Barn av foreldre med høy utdanning tar oftere høyere utdanning
- Sosial bakgrunn påvirker karakterer
- Gratis utdanning reduserer økonomiske barrierer

**Helse:**
- Sammenheng mellom sosial posisjon og helse
- Lavere inntekt = dårligere helse og kortere liv
- Forskjellene vedvarer til tross for universell helsetjeneste

**Reproduksjon av ulikhet - ulike perspektiver:**
Noen sosiologer vektlegger strukturelle forklaringer:
- Sosial arv er betydelig også i Norge
- Kulturell kapital overføres i familien
- Nettverk gir fordeler i arbeidslivet

Andre forskere vektlegger individuelle faktorer:
- Norge har høy sosial mobilitet sammenlignet med mange land
- Gratis utdanning gir like muligheter for de som benytter dem
- Individuelle valg om utdanning og yrke påvirker utfall

**Konklusjon:**
Norge har lav ulikhet i internasjonal sammenheng. Det er faglig debatt om i hvilken grad ulikhet skyldes strukturelle forhold eller individuelle valg. Velferdsstaten bidrar til å utjevne forskjeller, men ulikhet finnes. Hvordan man vurderer dette avhenger ofte av politisk ståsted.`,
    },
    {
      id: 'sosiologi-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar Marx\' klasseteori.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bestemmer klassetilhørighet ifølge Marx?',
            solution: 'Forholdet til produksjonsmidlene - om man eier (borgerskapet) eller selger arbeidskraft (arbeiderklassen).',
          },
          {
            label: 'b',
            task: 'Hva menes med klassekamp?',
            solution: 'Konflikten mellom klassene om kontroll over ressurser. Marx mente klassekamp er drivkraften i historien.',
          },
        ],
        solution: 'Marx: Klasse = forhold til produksjonsmidler. Borgerskapet vs. arbeiderklassen i klassekamp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Marx og Webers syn på sosial ulikhet.',
        hints: ['Marx: økonomisk klasse. Weber: klasse, status, parti'],
        solution: 'Marx: Ulikhet primært økonomisk (eierskap). Weber: Tre dimensjoner - klasse (økonomi), status (anerkjennelse) og parti (makt). Weber mener dimensjonene ikke alltid sammenfaller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar Bourdieus kapitalformer og hvordan de henger sammen.',
        solution: 'Økonomisk (penger), kulturell (utdanning, smak), sosial (nettverk) og symbolsk (anerkjennelse) kapital. De kan konverteres til hverandre og akkumuleres. Ulik tilgang gir ulike livssjanser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er sosial mobilitet, og hva påvirker mulighetene for mobilitet?',
        hints: ['Tenk på utdanning, sosial arv, arbeidsmarked'],
        solution: 'Sosial mobilitet = bevegelse i hierarkiet. Påvirkes av: Utdanningssystem, arbeidsmarked, sosial arv, velferdsstaten, økonomisk ulikhet, nettverk og kulturell kapital.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om Norge er et meritokrati.',
        hints: ['Meritokrati = posisjon basert på innsats og evner'],
        solution: 'For: Gratis utdanning, velferdsstat, lik tilgang. Mot: Sosial arv påvirker utdanningsvalg og resultater, nettverk gir fordeler, ulik kulturell kapital. Konklusjon: Delvis, men ikke fullt ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke konsekvenser kan stor sosial ulikhet ha for samfunnet?',
        hints: ['Tenk på helse, demokrati, kriminalitet, tillit'],
        solution: 'Dårligere folkehelse, lavere tillit, mer kriminalitet, politisk polarisering, svekket demokrati, lavere sosial mobilitet, redusert samhold. "The Spirit Level" viser sammenheng mellom ulikhet og sosiale problemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Kjønn og likestilling
// ============================================================================

export const CHAPTER_SOSIOLOGI_6: TextbookChapter = {
  id: 'sosiologi-6',
  courseId: 'sosiologi',
  chapterNumber: '6',
  title: 'Kjønn og likestilling',
  description: 'Studiet av kjønn som sosial konstruksjon, kjønnsroller og likestilling i samfunnet.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for ulike perspektiver på kjønn og likestilling',
    'drøfte kjønnsulikhet og likestillingsarbeid i et historisk og tverrkulturelt perspektiv',
  ],
  content: [
    {
      id: 'sosiologi-6-intro',
      type: 'text',
      content: `## Kjønn i sosiologisk perspektiv

Sosiologien skiller mellom biologisk kjønn (sex) og sosialt kjønn (gender). Mens biologisk kjønn handler om fysiske forskjeller, handler sosialt kjønn om de roller, forventninger og identiteter samfunnet knytter til kjønn.

**Sentrale spørsmål:**
- Hva er medfødt og hva er tillært?
- Hvordan formes kjønnsidentitet?
- Hvorfor er det forskjeller mellom kjønnene?
- Hva er likestilling, og hvordan kan det oppnås?

**Kjønnsperspektivets utvikling:**
Fra å ta kjønnsforskjeller for gitt, til å stille spørsmål ved dem. Det er i dag faglig debatt om i hvilken grad kjønnsforskjeller skyldes biologi, sosialisering eller en kombinasjon av begge.

**Biologi vs. sosialisering - en pågående debatt:**
- *Sosialkonstruktivister* mener kjønnsforskjeller hovedsakelig skyldes sosialisering og kulturelle forventninger
- *Evolusjonspsykologer* og andre vektlegger biologiske faktorer som hormoner og evolusjonære tilpasninger
- De fleste forskere anerkjenner at både biologi og miljø spiller en rolle, men vektingen er omdiskutert`,
    },
    {
      id: 'sosiologi-6-def-1',
      type: 'definition',
      title: 'Kjønnsbegreper',
      content: `**Biologisk kjønn (sex):**
Fysiske og fysiologiske forskjeller - kromosomer, hormoner, reproduktive organer.

**Sosialt kjønn (gender):**
Sosialt konstruerte roller, forventninger og identiteter knyttet til kjønn.

**Kjønnsroller:**
Forventninger til hvordan menn og kvinner skal oppføre seg, kle seg, føle og handle.

**Kjønnsidentitet:**
Individets indre opplevelse av eget kjønn - som mann, kvinne, ikke-binær eller annet.

**Kjønnsuttrykk:**
Hvordan kjønn uttrykkes gjennom klær, oppførsel, utseende.

**Heteronormativitet:**
Antagelsen om at heteroseksualitet er normalt og naturlig, og at kjønn er binært.`,
    },
    {
      id: 'sosiologi-6-def-2',
      type: 'definition',
      title: 'Perspektiver på kjønn',
      content: `**Biologiske perspektiver:**
Noen forskere vektlegger at kjønnsforskjeller delvis er naturlige og medfødte, påvirket av hormoner, hjerneutvikling og evolusjon. Dette perspektivet er omdiskutert, men har støtte i deler av evolusjonspsykologi og nevrobiologi.

**Sosialkonstruktivisme:**
Andre forskere mener kjønn primært er sosialt konstruert, og at kjønnsforskjeller hovedsakelig skyldes sosialisering og kulturelle forventninger, ikke biologi.

**Interaksjonistiske perspektiver:**
De fleste forskere anerkjenner i dag at både biologi og sosialisering påvirker kjønn, men det er uenighet om vektingen.

**Feministiske perspektiver:**
Feminisme omfatter mange ulike retninger:
- *Liberal feminisme:* Likestilling gjennom like rettigheter og muligheter innenfor eksisterende samfunnssystem
- *Radikal feminisme:* Mener samfunnet preges av et patriarkalsk system som må endres grunnleggende
- *Sosialistisk feminisme:* Ser kjønn og klasse som sammenvevde undertrykkelsessystemer
- *Interseksjonalitet:* Analyserer hvordan kjønn samvirker med andre kategorier som etnisitet, klasse og seksualitet

**Kritikk av feministiske perspektiver:**
Noen kritikere mener at feministisk teori undervurderer biologiske faktorer, overvurderer strukturell diskriminering, eller ikke tar hensyn til menns utfordringer. Andre mener feminisme er nødvendig for å forstå og endre urettferdige forhold.

**Maskulinitetsforskning:**
Studerer hvordan maskulinitet konstrueres og uttrykkes. Begrepet "hegemonisk maskulinitet" brukes om dominerende maskulinitetsidealer. Det finnes ulike syn på maskulinitet:
- Noen forskere fokuserer på problematiske aspekter ved tradisjonell maskulinitet
- Andre vektlegger positive aspekter som beskyttelse, forsørgelse og ansvarsfølelse
- Mange mener det finnes mange former for maskulinitet, og at stereotypier er begrensende for begge kjønn`,
    },
    {
      id: 'sosiologi-6-def-3',
      type: 'definition',
      title: 'Kjønnsulikhet',
      content: `**Glasstaket:**
Begrepet brukes om usynlige barrierer som kan hindre kvinner i å nå toppstillinger. Det er debatt om årsakene:
- Noen mener det skyldes diskriminering og strukturelle hindringer
- Andre peker på ulike preferanser, familieprioriteringer og karrierevalg
- Forskning viser at bildet er sammensatt og varierer mellom bransjer og land

**Lønnsgapet:**
Statistikk viser at kvinner i gjennomsnitt tjener mindre enn menn. Årsakene er omdiskutert:
- *Strukturelle forklaringer:* Diskriminering, undervurdering av kvinnedominerte yrker
- *Individuelle forklaringer:* Ulike yrkesvalg, arbeidstid, erfaring og forhandlingsatferd
- Når man justerer for yrke, arbeidstid og erfaring, reduseres gapet betydelig, men forsvinner ikke helt
- Det er faglig uenighet om hvor mye av det gjenværende gapet som skyldes diskriminering

**Det kjønnsdelte arbeidsmarkedet:**
Kvinner og menn jobber ofte i ulike yrker og sektorer. Det diskuteres om dette skyldes:
- Diskriminering og sosiale barrierer
- Ulike interesser og preferanser (som kan være påvirket av både biologi og sosialisering)
- En kombinasjon av begge

**Dobbel byrde:**
Forskning viser at kvinner ofte tar mer ansvar for husarbeid og omsorg, selv når de er i lønnsarbeid. Fordelingen har blitt likere over tid, men er fortsatt ujevn i mange familier.

**Doing gender:**
(West & Zimmerman) Kjønn er noe vi gjør, ikke bare noe vi er. Vi "gjør" kjønn i daglig interaksjon gjennom hvordan vi kler oss, snakker og oppfører oss.`,
    },
    {
      id: 'sosiologi-6-example-1',
      type: 'example',
      title: 'Eksempel: Kjønnssosialisering',
      problem: `Hvordan lærer barn kjønnsroller gjennom sosialisering?`,
      solution: `**Kjønnssosialisering i praksis:**

**Familie:**
- Rosa vs. blå fra fødselen
- Ulike leker (dukker vs. biler)
- Ulike forventninger til oppførsel
- Rollemodeller i foreldre

**Barnehage og skole:**
- Voksnes ulike respons på gutter og jenter
- Aktiviteter kan være kjønnet
- Lærebøker og pensum
- Kjønnede forventninger til fag

**Jevnaldrende:**
- Sanksjoner for å bryte kjønnsnormer
- Kjønnede lekegrupper
- Press til å være "skikkelig" gutt/jente

**Media:**
- Stereotyper i reklame og film
- Kjønnede forbilder
- Sosiale medier og skjønnhetsidealer

**Konsekvenser:**
- Ulike interesser og valg
- Ulike personlighetstrekk verdsettes
- Påvirker utdannings- og yrkesvalg

**Debatt om betydning:**
Det er faglig uenighet om hvor mye kjønnssosialisering påvirker:
- Noen forskere mener sosialisering er hovedårsaken til kjønnsforskjeller
- Andre peker på at biologiske forskjeller også bidrar til ulike interesser og valg
- Tvillingstudier og tverrkulturell forskning brukes av begge sider i debatten
- De fleste anerkjenner at både biologi og sosialisering spiller en rolle

**Viktig poeng:** Uavhengig av årsak begynner påvirkningen tidlig og former forventninger gjennom hele livet. Å forstå disse prosessene kan hjelpe oss å reflektere over våre egne antagelser.`,
    },
    {
      id: 'sosiologi-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom biologisk og sosialt kjønn.',
        solution: 'Biologisk kjønn (sex) = fysiske forskjeller (kromosomer, hormoner). Sosialt kjønn (gender) = sosialt konstruerte roller og forventninger. Sosiologien studerer primært sosialt kjønn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi eksempler på kjønnsroller og forklar hvordan de læres.',
        hints: ['Tenk på familie, skole, media, venner'],
        solution: 'Kjønnsroller (f.eks. menn = sterke, kvinner = omsorgsfulle) læres gjennom sosialisering: familie (leker, klær), skole (forventninger), media (stereotyper), venner (sanksjoner).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign liberal og radikal feminisme.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva vektlegger liberal feminisme?',
            solution: 'Likestilling gjennom like rettigheter, muligheter og lovverk. Arbeider innenfor eksisterende system.',
          },
          {
            label: 'b',
            task: 'Hva vektlegger radikal feminisme?',
            solution: 'Radikale feminister mener samfunnet preges av et patriarkalsk system som må endres grunnleggende. De fokuserer på makt, vold og strukturell undertrykkelse. Andre er kritiske til dette perspektivet.',
          },
        ],
        solution: 'Liberal feminisme vektlegger like rettigheter innenfor systemet. Radikal feminisme mener det patriarkalske systemet må endres grunnleggende. Det finnes ulike syn på disse perspektivene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med det kjønnsdelte arbeidsmarkedet, og hvilke perspektiver finnes på dette?',
        solution: 'Kvinner og menn jobber ofte i ulike yrker/sektorer. Noen mener dette er et problem fordi kvinnedominerte yrker har lavere lønn. Andre mener det delvis reflekterer ulike preferanser. Det er debatt om årsakene - diskriminering, sosialisering eller frie valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om Norge er et likestilt land.',
        hints: ['Se på ulike områder: arbeid, politikk, familie, utdanning. Vurder ulike perspektiver.'],
        solution: 'For: Lovverk, kvotering, høy yrkesdeltakelse, lang foreldrepermisjon. Mot: Lønnsgap, kjønnsdelt arbeidsmarked, ulikt ansvar hjemme. Det er debatt om årsakene til gjenværende forskjeller - strukturelle barrierer vs. ulike preferanser. Norge rangeres høyt internasjonalt på likestilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva menes med interseksjonalitet, og hvilke perspektiver finnes på begrepet?',
        hints: ['Tenk på hvordan ulike faktorer samvirker. Vurder ulike syn på begrepet.'],
        solution: 'Interseksjonalitet analyserer hvordan kjønn, etnisitet, klasse og seksualitet samvirker. Tilhengere mener det gir bedre forståelse av sammensatte erfaringer. Kritikere mener det kan føre til gruppeinndeling og identitetspolitikk. Begrepet er omdiskutert, men brukes mye i samfunnsforskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Makt og politikk
// ============================================================================

export const CHAPTER_SOSIOLOGI_7: TextbookChapter = {
  id: 'sosiologi-7',
  courseId: 'sosiologi',
  chapterNumber: '7',
  title: 'Makt og politikk',
  description: 'Sosiologiske perspektiver på makt, politisk deltakelse og samfunnsstyring.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for ulike maktbegreper og teorier om makt',
    'drøfte politisk deltakelse og demokrati i sosiologisk perspektiv',
  ],
  content: [
    {
      id: 'sosiologi-7-intro',
      type: 'text',
      content: `## Makt i sosiologisk perspektiv

Makt er et sentralt begrep i sosiologien. Makt handler om evnen til å få andre til å gjøre noe de ellers ikke ville gjort, eller om evnen til å påvirke beslutninger og fordelinger i samfunnet.

**Maktens former:**
- Tvangsmakt (fysisk makt)
- Økonomisk makt
- Politisk makt
- Ideologisk/kulturell makt
- Kunnskapsmakt

**Maktens kilder:**
- Posisjon og stilling
- Ressurser (penger, nettverk)
- Kunnskap og ekspertise
- Legitimitet og tillit
- Kontroll over informasjon`,
    },
    {
      id: 'sosiologi-7-def-1',
      type: 'definition',
      title: 'Maktbegreper',
      content: `**Max Weber:**
Makt er sjansen til å få gjennomført sin vilje, også mot motstand.

**Herredømme (Weber):**
Legitim makt som aksepteres av de underordnede.

**Tre typer herredømme:**
- Tradisjonelt: Basert på sedvane og tradisjon (konger)
- Karismatisk: Basert på lederens personlige egenskaper
- Legalt-rasjonelt: Basert på lover og regler (moderne byråkrati)

**Michel Foucault:**
Makt er overalt, innvevd i alle relasjoner. Disiplinerende makt former oss gjennom normer.

**Steven Lukes (tre maktdimensjoner):**
1. Beslutningmakt: Vinne i åpen konflikt
2. Dagsordenmakt: Bestemme hva som diskuteres
3. Definisjonsmakt: Forme hva folk tenker og ønsker`,
    },
    {
      id: 'sosiologi-7-def-2',
      type: 'definition',
      title: 'Politisk sosiologi',
      content: `**Politisk sosiologi:**
Studerer forholdet mellom samfunn og politikk - hvordan sosiale forhold påvirker politikk og omvendt.

**Eliteteori:**
Et fåtall eliter styrer i praksis, uavhengig av demokratiske institusjoner.

**Pluralisme:**
Makten er spredt på mange aktører og interessegrupper som konkurrerer.

**Korporatisme:**
Organiserte interessegrupper (som LO og NHO) samarbeider med staten.

**Valgsosiologi:**
Studerer hvem som stemmer på hvem og hvorfor. Sosial bakgrunn påvirker stemmegivning.

**Politisk deltakelse:**
Alle måter innbyggere deltar i politikk - fra valg til demonstrasjoner og lobbyisme.`,
    },
    {
      id: 'sosiologi-7-def-3',
      type: 'definition',
      title: 'Legitimitet og ideologi',
      content: `**Legitimitet:**
At makt aksepteres som rettferdig og riktig av de som styres.

**Ideologi:**
Sammenhengende sett av ideer og verdier som legitimerer maktforhold.

**Hegemoni (Gramsci):**
Kulturelt og ideologisk herredømme. De herskendes ideer blir "sunn fornuft".

**Falsk bevissthet (Marx):**
At undertrykte grupper aksepterer ideologier som legitimerer undertrykkelsen.

**Doxa (Bourdieu):**
Det selvsagte, det som ikke stilles spørsmål ved. Makt som tas for gitt.

**Motmakt:**
Underordnede gruppers evne til å utfordre og motstå makt.`,
    },
    {
      id: 'sosiologi-7-example-1',
      type: 'example',
      title: 'Eksempel: Lukes\' tre maktdimensjoner',
      problem: `Hvordan kan vi bruke Lukes\' tre maktdimensjoner til å analysere en politisk sak?`,
      solution: `**Eksempel: Klimapolitikk**

**1. Beslutningmakt:**
- Hvem vinner når klimapolitikk vedtas?
- Oljeindustrien vs. miljøbevegelsen
- Åpne politiske kamper om avgifter, utslipp, konsesjoner

**2. Dagsordenmakt:**
- Hvilke saker kommer på dagsordenen?
- Noen spørsmål holdes utenfor debatten
- F.eks.: Skal vi diskutere å slutte med olje helt?
- Mektige aktører kan forhindre at radikale alternativer diskuteres

**3. Definisjonsmakt:**
- Hvordan forstår folk klimaproblemet?
- Er økonomisk vekst og miljøvern forenlig?
- Hvem definerer hva som er "realistisk" politikk?
- Dominerende ideologi kan gjøre at folk aksepterer ting som mot deres interesse

**Konklusjon:**
Makt handler ikke bare om å vinne kamper (1. dimensjon), men også om å bestemme hvilke kamper som kjempes (2. dimensjon) og forme hva folk tenker og ønsker (3. dimensjon).

Den tredje dimensjonen er vanskeligst å se, men kanskje den viktigste.`,
    },
    {
      id: 'sosiologi-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar Webers tre typer herredømme.',
        subTasks: [
          {
            label: 'a',
            task: 'Tradisjonelt herredømme',
            solution: 'Makt basert på sedvane og tradisjon. Eksempel: Konger, høvdinger. "Slik har det alltid vært."',
          },
          {
            label: 'b',
            task: 'Karismatisk herredømme',
            solution: 'Makt basert på lederens personlige egenskaper og utstråling. Eksempel: Revolusjonære ledere, religiøse profeter.',
          },
          {
            label: 'c',
            task: 'Legalt-rasjonelt herredømme',
            solution: 'Makt basert på lover og regler. Det moderne byråkratiet. Eksempel: Valgte politikere, offentlige embetsmenn.',
          },
        ],
        solution: 'Tradisjonelt = sedvane, karismatisk = personlighet, legalt-rasjonelt = lover og regler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar Lukes\' tre maktdimensjoner med egne eksempler.',
        hints: ['Beslutningmakt, dagsordenmakt, definisjonsmakt'],
        solution: '1. Beslutningmakt: Vinne avstemninger. 2. Dagsordenmakt: Bestemme hva som diskuteres. 3. Definisjonsmakt: Forme hva folk tenker og ønsker. Eksempler bør være konkrete.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom eliteteori og pluralisme?',
        solution: 'Eliteteori: Et fåtall eliter styrer i praksis. Pluralisme: Makten er spredt på mange konkurrerende grupper. Ulikt syn på hvor demokratisk samfunnet egentlig er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med hegemoni, og hvordan fungerer hegemonisk makt?',
        hints: ['Tenk på Gramscis begrep'],
        solution: 'Hegemoni er kulturelt og ideologisk herredømme der de herskendes ideer blir "sunn fornuft". Makt utøves ikke gjennom tvang, men ved at folk aksepterer systemet som naturlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvem som har makt i Norge i dag.',
        hints: ['Tenk på politikere, næringsliv, media, organisasjoner, velgere'],
        solution: 'Formell makt: Storting, regjering. Økonomisk makt: Næringsliv, rike. Medier og meningsdannere. Organisasjoner (LO, NHO). Velgerne i demokratiet. Diskuter hvordan makten er fordelt og hvem som har mest innflytelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan sosiale medier påvirke politisk makt og deltakelse?',
        hints: ['Tenk på informasjonsspredning, mobilisering, falske nyheter'],
        solution: 'Demokratiserer informasjon og mobilisering. Men også: Ekkokamre, polarisering, falske nyheter, algoritmemakt. Plattformene har stor makt over den offentlige samtalen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Media og kommunikasjon
// ============================================================================

export const CHAPTER_SOSIOLOGI_8: TextbookChapter = {
  id: 'sosiologi-8',
  courseId: 'sosiologi',
  chapterNumber: '8',
  title: 'Media og kommunikasjon',
  description: 'Medienes rolle i samfunnet, mediebruk og mediepåvirkning i et sosiologisk perspektiv.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for medienes rolle i samfunnet og hvordan medier påvirker samfunnsdeltakelse',
    'drøfte endringer i mediebruk og medienes betydning for identitet og fellesskap',
  ],
  content: [
    {
      id: 'sosiologi-8-intro',
      type: 'text',
      content: `## Mediesamfunnet

Vi lever i et mediesamfunn der medier gjennomsyrer alle deler av livet. Mediene er sentrale for informasjonsspredning, meningsdannelse, underholdning og sosial tilhørighet.

**Medienes funksjoner:**
- Informasjon og opplysning
- Debatt og meningsdannelse
- Vaktbikkjefunksjonen (kritisk journalistikk)
- Underholdning
- Identitet og tilhørighet
- Sosialisering

**Medieutviklingen:**
- Trykkekunsten → aviser → radio → TV → internett → sosiale medier
- Fra massemedier til sosiale og personaliserte medier
- Fra passive mottakere til aktive produsenter`,
    },
    {
      id: 'sosiologi-8-def-1',
      type: 'definition',
      title: 'Mediebegreper',
      content: `**Massemedier:**
Medier som når ut til mange samtidig - aviser, TV, radio. Enveiskommunikasjon.

**Sosiale medier:**
Plattformer for brukerskapt innhold og interaksjon - Facebook, Instagram, TikTok, YouTube.

**Offentligheten:**
(Habermas) Rommet mellom stat og privatliv der borgere diskuterer felles anliggender.

**Medialisering:**
At samfunnsinstitusjoner tilpasser seg medienes logikk.

**Agenda setting:**
Mediene bestemmer hva folk tenker på, om ikke hva de mener.

**Framing:**
Hvordan mediene vinkler og rammer inn saker påvirker oppfatningen.`,
    },
    {
      id: 'sosiologi-8-def-2',
      type: 'definition',
      title: 'Teorier om mediepåvirkning',
      content: `**Sprøytespissmodellen:**
Tidlig teori: Mediene injiserer budskap direkte i passive mottakere.

**To-trinns-hypotesen:**
Mediebudskap går via opinionsledere som tolker og sprer dem videre.

**Bruk og tilfredsstillelse:**
Folk bruker medier aktivt for å tilfredsstille behov.

**Kultivering:**
Langvarig eksponering former virkelighetsoppfatningen (Gerbner).

**Resepsjonsteori:**
Mottakere tolker medieinnhold aktivt ut fra egen bakgrunn.

**Algoritmer og filterbobler:**
Teknologi styrer hva vi ser, skaper ekkokamre og polarisering.`,
    },
    {
      id: 'sosiologi-8-def-3',
      type: 'definition',
      title: 'Digitale medier og samfunn',
      content: `**Nettverkssamfunnet:**
(Castells) Samfunn preget av nettverk og informasjonsflyt. Makten ligger i nettverkene.

**Plattformøkonomi:**
Store teknologiselskaper (Google, Meta, Apple) kontrollerer digitale plattformer.

**Overvåkningskapitalisme:**
(Zuboff) Teknologiselskaper tjener penger på å samle og selge data om oss.

**Digital ulikhet:**
Ulik tilgang til og kompetanse i digitale medier skaper nye skillelinjer.

**Netthat og trakassering:**
Anonymitet og lav terskel muliggjør hets og trakassering på nett.

**Desinformasjon og falske nyheter:**
Feilinformasjon som spres for å villede. Utfordrer tillit og demokrati.`,
    },
    {
      id: 'sosiologi-8-example-1',
      type: 'example',
      title: 'Eksempel: Sosiale medier og identitet',
      problem: `Hvordan påvirker sosiale medier identitetsdannelse og selvpresentasjon?`,
      solution: `**Sosiale medier og identitet:**

**Selvpresentasjon:**
- Kuratert fremstilling av seg selv
- Viser frem "det beste" av livet
- Strategisk identitetsbygging
- "Frontstage" vs. "backstage" (Goffman)

**Bekreftelse og anerkjennelse:**
- Likes, kommentarer og følgere som sosial valuta
- Konstant tilbakemelding på identitet
- Kan styrke eller svekke selvfølelse

**Sammenligning:**
- Sammenligner seg med andres kuraterte liv
- Kan føre til misnøye og psykisk uhelse
- Urealistiske standarder for utseende og livsstil

**Identitetsutforskning:**
- Mulighet til å prøve ut ulike identiteter
- Finne likesinnede og subkulturer
- LGBTQ+-ungdom kan finne fellesskap

**Utfordringer:**
- Press om å være konstant tilgjengelig
- Skille mellom online og offline identitet
- Personvernbekymringer
- Avhengighet og tidsbruk

**Konklusjon:**
Sosiale medier gir nye muligheter for identitetsutforskning og tilhørighet, men også press, sammenligning og nye former for sårbarhet.`,
    },
    {
      id: 'sosiologi-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom massemedier og sosiale medier?',
        solution: 'Massemedier = enveis, profesjonell produksjon, når mange samtidig (TV, aviser). Sosiale medier = toveiskommunikasjon, brukerskapt innhold, interaksjon, algoritmer styrer visning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepene agenda setting og framing.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er agenda setting?',
            solution: 'Mediene bestemmer hva folk tenker på ved å velge hva som dekkes. Saker som får mye oppmerksomhet oppfattes som viktige.',
          },
          {
            label: 'b',
            task: 'Hva er framing?',
            solution: 'Hvordan mediene vinkler og rammer inn saker påvirker hvordan folk oppfatter dem. Samme sak kan fremstilles ulikt.',
          },
        ],
        solution: 'Agenda setting = hva vi tenker på. Framing = hvordan vi tenker om det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med filterbobler og ekkokamre, og hvorfor er de problematiske?',
        hints: ['Tenk på algoritmer og polarisering'],
        solution: 'Filterbobler = algoritmer viser deg innhold basert på tidligere atferd. Ekkokamre = omgir deg med likesinnede. Problematisk: Mindre eksponering for andre syn, polarisering, vanskelig å forstå andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvordan sosiale medier påvirker demokrati og politisk deltakelse.',
        hints: ['Tenk på både muligheter og utfordringer'],
        solution: 'Muligheter: Lettere å mobilisere, spre informasjon, delta i debatt. Utfordringer: Falske nyheter, trakassering, polarisering, mektige plattformer. Kan både styrke og svekke demokratiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva menes med overvåkningskapitalisme?',
        hints: ['Tenk på Zuboffs teori'],
        solution: 'Overvåkningskapitalisme (Zuboff): Teknologiselskaper samler data om vår atferd for å forutsi og påvirke den, og selger dette til annonsører. Vår oppmerksomhet og data er produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser din egen mediebruk sosiologisk. Hvilke medier bruker du, hvorfor, og hvordan påvirker det deg?',
        hints: ['Tenk på bruk og tilfredsstillelse, identitet, fellesskap'],
        solution: 'Svaret bør inneholde refleksjon over egne medievaner, hvilke behov mediene dekker, hvordan de påvirker selvbilde, relasjoner og virkelighetsoppfatning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Globalisering og migrasjon
// ============================================================================

export const CHAPTER_SOSIOLOGI_9: TextbookChapter = {
  id: 'sosiologi-9',
  courseId: 'sosiologi',
  chapterNumber: '9',
  title: 'Globalisering og migrasjon',
  description: 'Globaliseringens årsaker og konsekvenser, migrasjon og flerkulturelle samfunn.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for globaliseringens ulike dimensjoner og drivkrefter',
    'drøfte migrasjon og integrasjon i et sosiologisk perspektiv',
  ],
  content: [
    {
      id: 'sosiologi-9-intro',
      type: 'text',
      content: `## Globalisering

Globalisering handler om at verden blir mer sammenkoblet. Mennesker, varer, kapital, ideer og informasjon flyter stadig friere over landegrensene. Dette endrer samfunn på grunnleggende måter.

**Globaliseringens dimensjoner:**
- Økonomisk: Verdenshandel, multinasjonale selskaper, finansmarkeder
- Politisk: Internasjonale organisasjoner, menneskerettigheter, global styring
- Kulturell: Spredning av ideer, verdier, populærkultur, livsstiler
- Sosial: Migrasjon, nettverk på tvers av grenser, globale sosiale bevegelser
- Teknologisk: Internett, kommunikasjon, transport

**Er globaliseringen ny?**
Historisk har det vært perioder med mye samhandling på tvers av grenser (f.eks. Silkeveien). Men dagens globalisering er mer omfattende og raskere.`,
    },
    {
      id: 'sosiologi-9-def-1',
      type: 'definition',
      title: 'Globaliseringsbegreper',
      content: `**Globalisering:**
Økt sammenkobling av verden gjennom flyt av mennesker, varer, kapital, ideer.

**Transnasjonalisme:**
Bånd og aktiviteter på tvers av nasjonalstater. Migranter opprettholder tilhørighet til flere land.

**Glokalisering:**
(Robertson) Globale fenomener tilpasses lokalt. Det globale og lokale blandes.

**McDonaldisering:**
(Ritzer) Spredning av rasjonelle, standardiserte systemer verden over.

**Tidsrom-kompresjon:**
(Harvey) Avstand i tid og rom krymper. Verden føles mindre.

**Verdenssystemteori:**
(Wallerstein) Verden er delt i kjerne, semiperiferi og periferi. Økonomisk ulikhet mellom regioner.`,
    },
    {
      id: 'sosiologi-9-def-2',
      type: 'definition',
      title: 'Migrasjon',
      content: `**Migrasjon:**
Flytting av mennesker over landegrenser eller innenfor et land.

**Emigrasjon:**
Å flytte fra et land.

**Immigrasjon:**
Å flytte til et land.

**Push-faktorer:**
Det som skyver folk ut: krig, forfølgelse, fattigdom, naturkatastrofer.

**Pull-faktorer:**
Det som trekker folk til et land: arbeid, utdanning, familie, bedre levekår.

**Typer migrasjon:**
- Arbeidsmigrasjon
- Flukt (flyktninger, asylsøkere)
- Familiegjenforening
- Utdanningsmigrasjon
- Irregulær migrasjon`,
    },
    {
      id: 'sosiologi-9-def-3',
      type: 'definition',
      title: 'Integrasjon og tilhørighet',
      content: `**Integrasjon:**
Prosess der innvandrere blir del av samfunnet. Handler om deltakelse i arbeid, utdanning, politikk og sosiale nettverk.

**Assimilering:**
At innvandrere blir lik majoritetsbefolkningen og oppgir egen kultur.

**Segregering:**
At grupper lever adskilt med lite kontakt på tvers.

**Multikulturalisme:**
Politikk og ideologi som anerkjenner og støtter kulturelt mangfold.

**Diaspora:**
Folkegruppe som lever spredt utenfor opprinnelseslandet men opprettholder felles identitet.

**Transnasjonale identiteter:**
Tilhørighet til flere steder og kulturer samtidig.`,
    },
    {
      id: 'sosiologi-9-example-1',
      type: 'example',
      title: 'Eksempel: Globaliseringens konsekvenser',
      problem: `Hvilke positive og negative konsekvenser har globaliseringen?`,
      solution: `**Positive konsekvenser:**

**Økonomisk:**
- Økonomisk vekst og utvikling
- Flere ut av fattigdom globalt
- Tilgang til varer og tjenester
- Arbeidsplasser i utviklingsland

**Kulturelt:**
- Kulturutveksling og mangfold
- Tilgang til informasjon og ideer
- Spredning av menneskerettigheter

**Sosialt:**
- Mulighet til å reise og studere
- Globale sosiale bevegelser
- Kommunikasjon på tvers av grenser

**Negative konsekvenser:**

**Økonomisk:**
- Økt ulikhet innad i land
- Miljøproblemer og klimaendringer
- Utbytting av arbeidere i fattige land
- Skatteunndragelse gjennom skatteparadis

**Kulturelt:**
- Kulturell homogenisering
- Tap av lokale tradisjoner
- Vestlig dominans

**Sosialt:**
- Sosial dumping og press på lønn
- Usikkerhet og fremmedfrykt
- Tap av lokal kontroll

**Politisk:**
- Maktforskyvning til multinasjonale selskaper
- Demokratisk underskudd i internasjonale organisasjoner
- Nasjonalisme som motreaksjon

**Konklusjon:** Globaliseringen har både vinnere og tapere. Fordelene og ulempene er ujevnt fordelt.`,
    },
    {
      id: 'sosiologi-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er globalisering, og hvilke dimensjoner har den?',
        solution: 'Globalisering = økt sammenkobling av verden. Dimensjoner: Økonomisk (handel, kapital), politisk (internasjonale org.), kulturell (ideer, livsstiler), sosial (migrasjon), teknologisk (internett, transport).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepet glokalisering og gi eksempler.',
        hints: ['Tenk på hvordan globale fenomener tilpasses lokalt'],
        solution: 'Glokalisering = globale fenomener tilpasses lokale forhold. Eksempler: McDonald\'s med lokale menyer, K-pop som blander vestlig og koreansk, bollywood.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er push- og pull-faktorer for migrasjon? Gi eksempler.',
        subTasks: [
          {
            label: 'a',
            task: 'Push-faktorer',
            solution: 'Det som skyver folk ut: Krig, forfølgelse, fattigdom, naturkatastrofer, mangel på muligheter.',
          },
          {
            label: 'b',
            task: 'Pull-faktorer',
            solution: 'Det som trekker folk: Arbeid, utdanning, høyere levestandard, familie, frihet og sikkerhet.',
          },
        ],
        solution: 'Push = skyver ut (krig, fattigdom). Pull = trekker (arbeid, sikkerhet). Migrasjon skyldes ofte kombinasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom integrering, assimilering og segregering?',
        solution: 'Integrering: Deltakelse i samfunnet med bevaring av noe av egen kultur. Assimilering: Oppgi egen kultur, bli lik majoriteten. Segregering: Grupper lever adskilt. Integrering sees ofte som idealet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvem som vinner og taper på globaliseringen.',
        hints: ['Tenk på ulike grupper innad i land og mellom land'],
        solution: 'Vinnere: Multinasjonale selskaper, høyt utdannede, forbrukere, middelklassen i fremvoksende økonomier. Tapere: Lavtlønnede i rike land, miljøet, lokalsamfunn, de som ikke har ressurser til å delta.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva menes med transnasjonale identiteter, og hvorfor er begrepet relevant i dag?',
        hints: ['Tenk på tilhørighet til flere steder og kulturer'],
        solution: 'Transnasjonale identiteter = tilhørighet til flere land/kulturer samtidig. Relevant fordi migranter opprettholder bånd til flere steder, og globaliseringen gjør dette enklere gjennom kommunikasjon og reiser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Sosiologisk metode og forskning
// ============================================================================

export const CHAPTER_SOSIOLOGI_10: TextbookChapter = {
  id: 'sosiologi-10',
  courseId: 'sosiologi',
  chapterNumber: '10',
  title: 'Sosiologisk metode og forskning',
  description: 'Vitenskapelige metoder i sosiologi og sosialantropologi, forskningsetikk og kritisk tenkning.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for sentrale metoder i sosiologi og sosialantropologi',
    'drøfte forskningsetiske utfordringer og utvikle kritisk tenkning om samfunnsforskning',
  ],
  content: [
    {
      id: 'sosiologi-10-intro',
      type: 'text',
      content: `## Vitenskapelig metode i samfunnsforskning

Sosiologi og sosialantropologi er vitenskapelige fag som bruker systematiske metoder for å studere samfunn og kultur. Metodene må tilpasses det som skal studeres - mennesker og sosiale fenomener.

**Hva kjennetegner vitenskapelig metode?**
- Systematisk og planlagt fremgangsmåte
- Etterprøvbarhet - andre skal kunne gjenta studien
- Åpenhet om metoder og funn
- Kritisk vurdering av egne og andres konklusjoner
- Etiske retningslinjer

**Grunnleggende skille:**
- Kvantitative metoder: Tall og statistikk
- Kvalitative metoder: Tekst, observasjon, fortolkning`,
    },
    {
      id: 'sosiologi-10-def-1',
      type: 'definition',
      title: 'Kvantitative metoder',
      content: `**Kvantitative metoder:**
Metoder som gir numeriske data som kan analyseres statistisk.

**Spørreundersøkelser:**
Standardiserte spørreskjemaer til mange respondenter. Gir generaliserbare resultater.

**Utvalg og populasjon:**
Populasjon = alle man vil si noe om. Utvalg = de som faktisk deltar. Utvalget må være representativt.

**Statistisk analyse:**
Brukes til å finne mønstre, sammenhenger og teste hypoteser.

**Fordeler:**
- Generaliserbarhet til større populasjoner
- Objektivitet og etterprøvbarhet
- Kan teste teorier

**Begrensninger:**
- Overfladisk - fanger ikke dybde og mening
- Forutbestemte kategorier
- Avhengig av at spørsmål forstås likt`,
    },
    {
      id: 'sosiologi-10-def-2',
      type: 'definition',
      title: 'Kvalitative metoder',
      content: `**Kvalitative metoder:**
Metoder som gir dybdekunnskap om mening, erfaringer og prosesser.

**Intervju:**
Samtale med informanter for å forstå deres perspektiv. Kan være strukturert, semi-strukturert eller ustrukturert.

**Observasjon:**
Studere mennesker i naturlige situasjoner. Deltakende observasjon: Forskeren deltar i aktivitetene.

**Feltarbeid:**
Langvarig opphold i miljøet som studeres. Antropologiens hovedmetode.

**Tekstanalyse:**
Analyse av dokumenter, medietekster, historiske kilder.

**Fordeler:**
- Dybde og nyanser
- Forstår mening og kontekst
- Fleksibel, kan følge nye spor

**Begrensninger:**
- Vanskelig å generalisere
- Tidkrevende
- Forskerens påvirkning`,
    },
    {
      id: 'sosiologi-10-def-3',
      type: 'definition',
      title: 'Forskningsetikk',
      content: `**Informert samtykke:**
Deltakere må vite hva de deltar i og samtykke frivillig.

**Konfidensialitet:**
Deltakeres identitet beskyttes. Data anonymiseres.

**Ikke skade:**
Forskningen skal ikke skade deltakerne fysisk eller psykisk.

**Objektivitet:**
Forskeren skal være bevisst egne fordommer og ikke la dem påvirke resultatene.

**Ærlighet:**
Ikke forfalske eller manipulere data. Rapportere funn korrekt.

**NESH:**
Den nasjonale forskningsetiske komité for samfunnsvitenskap og humaniora utarbeider retningslinjer.

**NSD:**
Norsk senter for forskningsdata godkjenner prosjekter som behandler personopplysninger.`,
    },
    {
      id: 'sosiologi-10-example-1',
      type: 'example',
      title: 'Eksempel: Velge metode',
      problem: `En forsker vil undersøke hvorfor noen unge dropper ut av videregående skole. Hvilke metoder kan brukes, og hva er fordeler og ulemper?`,
      solution: `**Mulige metoder:**

**Kvantitative:**
**Spørreundersøkelse:**
- Nå mange elever
- Kartlegge utbredelse og faktorer
- Statistisk sammenheng mellom bakgrunn og frafall
- Ulempe: Forstår ikke prosessen eller opplevelsen

**Registerdata:**
- Koble data om karakterer, fravær, bakgrunn
- Objektive tall
- Ulempe: Fanger ikke subjektive erfaringer

**Kvalitative:**
**Intervjuer med frafalne:**
- Få dyp innsikt i opplevelser og årsaker
- Forstå prosessen som førte til frafall
- Ulempe: Få informanter, vanskelig å generalisere

**Observasjon i skolen:**
- Se samspill og kontekst
- Forstå skolemiljøet
- Ulempe: Tidkrevende, kan ikke observere frafall direkte

**Kombinasjon (mixed methods):**
- Bruke spørreundersøkelse til å kartlegge omfang
- Intervjuer til å forstå prosesser og erfaringer
- Styrker fra begge tilnærminger

**Valg av metode avhenger av:**
- Forskningsspørsmål
- Ressurser og tid
- Tilgang til informanter
- Hva man allerede vet`,
    },
    {
      id: 'sosiologi-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom kvantitative og kvalitative metoder.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner kvantitative metoder?',
            solution: 'Gir numeriske data, statistisk analyse, mange informanter, generaliserbarhet. Eksempel: Spørreundersøkelser.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner kvalitative metoder?',
            solution: 'Gir tekstdata, dybde og mening, få informanter, fleksibilitet. Eksempler: Intervju, observasjon, feltarbeid.',
          },
        ],
        solution: 'Kvantitative = tall og statistikk. Kvalitative = tekst, mening, dybde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er deltakende observasjon, og når er det en egnet metode?',
        hints: ['Tenk på feltarbeid og antropologisk metode'],
        solution: 'Deltakende observasjon = forskeren deltar i aktivitetene som studeres over tid. Egnet når man vil forstå en kultur eller et miljø innenfra, se samspill i naturlige situasjoner, og få dybdekunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke etiske prinsipper må forskere følge?',
        solution: 'Informert samtykke (deltakere må vite og godta), konfidensialitet (beskytte identitet), ikke skade, objektivitet (bevisst egne fordommer), ærlighet (ikke forfalske). Følge NESH-retningslinjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Design en enkel studie om et selvvalgt sosiologisk tema.',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler et forskningsspørsmål',
            solution: 'Spørsmålet bør være avgrenset og mulig å undersøke. F.eks. "Hvordan påvirker sosiale medier selvbildet til ungdom?"',
          },
          {
            label: 'b',
            task: 'Velg metode og begrunn valget',
            solution: 'Velg metode basert på hva du vil finne ut - tall/utbredelse (kvantitativ) eller mening/opplevelse (kvalitativ).',
          },
          {
            label: 'c',
            task: 'Hvilke etiske hensyn må tas?',
            solution: 'Informert samtykke, konfidensialitet, ikke skade, spesielle hensyn hvis ungdom under 18 deltar.',
          },
        ],
        solution: 'Studiedesign bør ha tydelig spørsmål, begrunnet metodevalg og refleksjon over etikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er fordeler med å kombinere kvantitative og kvalitative metoder?',
        hints: ['Tenk på "mixed methods"'],
        solution: 'Kombinasjon gir både bredde (kvantitativ) og dybde (kvalitativ). Kan kartlegge utbredelse og forstå prosesser. Metodene kan utfylle hverandre og veie opp for svakheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sosiologi-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sosiologi-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er det viktig å være kritisk til samfunnsforskning og statistikk?',
        hints: ['Tenk på utvalg, spørsmålsformulering, tolkning'],
        solution: 'Kritisk tenkning viktig fordi: Utvalg kan være skjevt, spørsmål kan være ledende, statistikk kan misforstås/manipuleres, forskerens perspektiv påvirker, hvem finansierer? Vær kritisk til kilder og metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SOSIOLOGI_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SOSIOLOGI_1,
  CHAPTER_SOSIOLOGI_2,
  CHAPTER_SOSIOLOGI_3,
  CHAPTER_SOSIOLOGI_4,
  CHAPTER_SOSIOLOGI_5,
  CHAPTER_SOSIOLOGI_6,
  CHAPTER_SOSIOLOGI_7,
  CHAPTER_SOSIOLOGI_8,
  CHAPTER_SOSIOLOGI_9,
  CHAPTER_SOSIOLOGI_10,
];

/**
 * Norsk VG1 - Del 3: Kapittel 8.1–11.2
 * Debattinnlegg, essay, drama, Ibsen, romantikk, realisme, modernisme, lyrikk historisk
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_COLLETT_DEBATTEKST,
  TEKST_BJORNSON_DEBATTEKST,
  TEKST_VINJE_FERDAMINNI_UTDRAG,
  TEKST_GARBORG_ESSAY,
  TEKST_HOLBERG_JEPPE_SCENE,
  TEKST_IBSEN_PEER_GYNT_SCENE,
  TEKST_IBSEN_ET_DUKKEHJEM_SLUTT,
  TEKST_IBSEN_EN_FOLKEFIENDE_AAPNING,
  TEKST_IBSEN_GENGANGERE_UTDRAG,
  TEKST_WERGELAND_TIL_EN_GRAN,
  TEKST_WELHAVEN_DIGTETS_AAND,
  TEKST_ASBJORNSEN_MOE_ASKELADDEN,
  TEKST_WERGELAND_DEN_FORSTE_GANG,
  TEKST_KIELLAND_NOVELLE,
  TEKST_SKRAM_CONSTANCE_RING_UTDRAG,
  TEKST_GARBORG_BONDESTUDENTAR_UTDRAG,
  TEKST_LIE_FAMILIEN_PAA_GILJE_UTDRAG,
  TEKST_UNDSET_KRISTIN_LAVRANSDATTER_AAPNING,
  TEKST_HAMSUN_SULT_AAPNING,
  TEKST_DUUN_JUVIKFOLKE_UTDRAG,
  TEKST_OBSTFELDER_BYEN,
  TEKST_RUDOLF_NILSEN_REVOLUSJONENS_ROST,
  TEKST_NORDAHL_GRIEG_TIL_UNGDOMMEN,
  TEKST_BJORNSON_JA_VI_ELSKER,
  TEKST_OBSTFELDER_REGN,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 8.1: Debattinnlegg og meningsytring
// ============================================================================

export const CHAPTER_NORSK_VG1_8_1: TextbookChapter = {
  id: 'norsk-vg1-8-1',
  courseId: 'norsk-vg1',
  chapterNumber: '8.1',
  title: 'Debattinnlegg og meningsytring',
  description: 'Lær å skrive effektive debattinnlegg og delta i offentlig debatt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive debattinnlegg og andre argumenterende tekster',
    'bruke retoriske appellformer og virkemidler',
  ],
  content: [
    {
      id: 'norsk-vg1-8-1-intro',
      type: 'text',
      content: `## Å delta i offentlig debatt

I et demokrati er det viktig at borgere kan ytre meninger og delta i debatt. Debattinnlegg er en sentral sjanger for meningsytring.

**Hvor publiseres debattinnlegg?**
- Aviser (Si;D, debattsider)
- Nettaviser
- Sosiale medier
- Blogger

**Hvorfor skrive debattinnlegg?**
- Påvirke offentlig mening
- Dele kunnskap og erfaring
- Bidra til demokratisk samtale
- Øve på argumentasjon`,
    },
    {
      id: 'norsk-vg1-8-1-def-1',
      type: 'definition',
      title: 'Debattinnleggets struktur',
      content: `**Innledning**
- Fang leserens oppmerksomhet
- Presenter tema og standpunkt
- Si hva du mener (tesen)

**Hoveddel**
- 2-4 hovedargumenter
- Begrunn hvert argument
- Bruk eksempler og fakta
- Møt motargumenter

**Avslutning**
- Oppsummer hovedbudskapet
- Oppfordring til handling eller refleksjon
- Avslutt med kraft

**Tips:**
- Skriv kort og konsist
- Bruk enkelt språk
- Vær tydelig på hva du mener
- Respekter meningsmotstandere`,
    },
    {
      id: 'norsk-vg1-8-1-def-2',
      type: 'definition',
      title: 'Argumentasjonsteknikker',
      content: `**Sterke argumenter:**
- **Fakta og statistikk:** Tall og forskning
- **Eksempler:** Konkrete tilfeller som illustrerer poenget
- **Autoritet:** Eksperter som støtter synspunktet
- **Logikk:** Fornuftige slutninger

**Svake argumenter (som bør unngås):**
- **Stråmann:** Forvrenge motstanderens argument
- **Personangrep:** Angripe personen, ikke argumentet
- **Falsk dilemma:** Presentere bare to alternativer
- **Appell til følelser uten fakta:** Kun patos uten logos

**Å møte motargumenter:**
- Anerkjenn gyldige poenger fra motstanderen
- Forklar hvorfor ditt syn likevel er bedre
- Vis at du har forstått saken fra flere sider`,
    },
    {
      id: 'norsk-vg1-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av debattinnlegg',
      problem: 'Analyser strukturen i dette debattinnlegget om skolens starttider.',
      solution: `**Eksempel på debattinnlegg:**

"Som elev på videregående våkner jeg klokka 6 hver dag, og jeg er ikke alene om å være trøtt. Forskning viser at ungdom har en forskjøvet døgnrytme og trenger mer søvn om morgenen.

**Argument 1:** Studier fra NTNU viser at elever presterer bedre med senere skolestart.

**Argument 2:** Mange elever får for lite søvn, noe som går ut over både læring og helse.

**Motargument behandlet:** Noen mener at arbeidslivet krever tidlig oppmøte. Men skolen bør prioritere læring, og fleksibel arbeidstid er vanlig i mange yrker.

**Konklusjon:** Skolen bør starte klokka 9, ikke 8. Det vil gi bedre læring og friskere elever."

**Analyse:** Innlegget har tydelig struktur med tese, argumenter støttet av forskning, og behandling av motargument.`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-8-1-tekst-collett',
      type: 'collapsible',
      title: 'Primærtekst: Camilla Collett – debattekst',
      content: [
        {
          id: 'norsk-vg1-8-1-tekst-collett-inner',
          type: 'text',
          content: TEKST_COLLETT_DEBATTEKST,
        },
      ],
    },
    {
      id: 'norsk-vg1-8-1-tekst-bjornson',
      type: 'collapsible',
      title: 'Primærtekst: Bjørnstjerne Bjørnson – debattekst',
      content: [
        {
          id: 'norsk-vg1-8-1-tekst-bjornson-inner',
          type: 'text',
          content: TEKST_BJORNSON_DEBATTEKST,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et debattinnlegg (200-300 ord) om et tema du engasjerer deg i.',
        hints: ['Følg strukturen: innledning, hoveddel med argumenter, avslutning', 'Bruk minst ett fakta-argument'],
        solution: 'Innlegget vurderes etter struktur, argumentasjon og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et debattinnlegg i en avis og analyser argumentasjonen. Hvilke retoriske virkemidler brukes?',
        hints: ['Se etter etos, patos og logos', 'Vurder om argumentene er sterke eller svake'],
        solution: 'Analysen skal identifisere argumenter, virkemidler og vurdere effektiviteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et motinnlegg til debattinnlegget du fant i oppgave 2. Argumenter for motsatt standpunkt.',
        hints: ['Respekter motstanderens synspunkt', 'Bruk egne argumenter, ikke bare kritikk'],
        solution: 'Motinnlegget skal vise evne til å argumentere fra ulike perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser feilslutninger i disse argumentene:',
        subTasks: [
          {
            label: 'a',
            task: '"Du kan ikke stole på ham, han har jo tattoveringer."',
            solution: 'Personangrep / irrelevant kritikk - tattoveringer har ingenting med troverdighet å gjøre.',
          },
          {
            label: 'b',
            task: '"Enten er du for oss, eller så er du mot oss."',
            solution: 'Falsk dilemma - det finnes flere alternativer enn bare disse to.',
          },
          {
            label: 'c',
            task: '"Alle de andre gjør det, så det må være greit."',
            solution: 'Appell til mengden - at noe er populært betyr ikke at det er riktig.',
          },
        ],
        solution: 'Å gjenkjenne feilslutninger hjelper deg å skrive sterkere argumentasjon selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en klassedebatt om et aktuelt tema. Forbered argumenter for begge sider.',
        hints: ['Trekk lodd om hvem som skal argumentere for hva', 'Respekter taletid og debattregler'],
        solution: 'Muntlig debatt øver argumentasjon, lytting og saklig uenighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // New exercises 6-11
    {
      id: 'norsk-vg1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge i et debattinnlegg?',
        options: [
          { id: 'a', text: 'Avslutning, hoveddel, innledning', isCorrect: false },
          { id: 'b', text: 'Innledning med tese, hoveddel med argumenter, avslutning med oppsummering', isCorrect: true },
          { id: 'c', text: 'Motargumenter, egne argumenter, konklusjon', isCorrect: false },
          { id: 'd', text: 'Fakta, påstand, personlig erfaring', isCorrect: false },
        ],
        solution: 'Et debattinnlegg har en tydelig tredelt struktur: innledning der du presenterer tesen din, hoveddel der du bygger opp argumentasjonen, og avslutning der du oppsummerer og gjerne kommer med en oppfordring.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom et argument og en påstand?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
          { id: 'b', text: 'Et argument er det samme som en mening', isCorrect: false },
          { id: 'c', text: 'En påstand er en mening uten begrunnelse, et argument er en påstand med begrunnelse', isCorrect: true },
          { id: 'd', text: 'En påstand er alltid feil, et argument er alltid riktig', isCorrect: false },
        ],
        solution: 'En påstand er en mening eller en ytring som ikke nødvendigvis er begrunnet. Et argument er en påstand som er underbygget med fakta, eksempler, logikk eller annen begrunnelse. I et debattinnlegg må du bygge opp argumenter, ikke bare fremsette påstander.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Camilla Colletts debattekst (primærtekst over). Analyser teksten med vekt på argumentasjon og retoriske virkemidler. Hvordan bygger hun opp sin argumentasjon? Hvilke retoriske appellformer (etos, patos, logos) bruker hun?',
        hints: ['Se etter hvordan Collett henvender seg til leseren', 'Legg merke til bruken av eksempler og følelsesappell', 'Vurder hvordan hun bygger troverdighet'],
        solution: 'Analysen bør identifisere Colletts hovedargumenter, hennes bruk av etos (som kvinne med erfaring), patos (følelsesappell for kvinners situasjon) og logos (logiske argumenter for endring). Collett bruker ofte personlige erfaringer og observasjoner som utgangspunkt for sine argumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign debattstilene til Camilla Collett og Bjørnstjerne Bjørnson (se primærtekstene over). Hva er likt og hva er forskjellig i måten de argumenterer på? Hvem av dem mener du er mest overbevisende, og hvorfor?',
        hints: ['Se på ordvalg, tone og hvem de henvender seg til', 'Vurder balansen mellom etos, patos og logos hos begge', 'Tenk på konteksten de skriver i'],
        solution: 'Sammenligningen bør vise at Collett ofte argumenterer fra personlig erfaring og med fokus på kvinners situasjon, mens Bjørnson bruker en mer direkte og kampklar tone. Begge bruker retoriske virkemidler effektivt, men med ulik stil og ulike appellformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et debattinnlegg (400-500 ord) der du responderer på enten Colletts eller Bjørnsons debattekst. Du kan velge å støtte eller argumentere mot deres synspunkt, men du må forholde deg til teksten og bruke argumentasjon.',
        hints: ['Referer til den opprinnelige teksten', 'Bruk minst tre argumenter', 'Møt motargumenter', 'Avslutt med en tydelig oppfordring'],
        solution: 'Debattinnlegget vurderes etter evne til å respondere på en historisk tekst, bygge opp egen argumentasjon, bruke retoriske virkemidler bevisst, og skrive med god struktur og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv to debattinnlegg om samme tema (valgfritt), ett for og ett mot. Hvert innlegg skal være på 200-300 ord. Reflekter deretter kort (100 ord) over hva du lærte av å argumentere for begge sider.',
        hints: ['Velg et tema du synes er vanskelig å ta stilling til', 'Bruk ulike typer argumenter i hvert innlegg', 'Prøv å gjøre begge innleggene like overbevisende'],
        solution: 'Oppgaven tester evnen til å se en sak fra flere sider og argumentere overbevisende uansett standpunkt. Refleksjonen bør vise innsikt i at gode argumenter finnes på begge sider av de fleste debatter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Essay og kaseri
// ============================================================================

export const CHAPTER_NORSK_VG1_8_2: TextbookChapter = {
  id: 'norsk-vg1-8-2',
  courseId: 'norsk-vg1',
  chapterNumber: '8.2',
  title: 'Essay og kaseri',
  description: 'Lær om essay og kaseri som sjangre, og skriv egne tekster i disse formene.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive kreative og reflekterende tekster i ulike sjangre',
    'vurdere og bruke ulike uttrykksformer tilpasset formål og mottaker',
  ],
  content: [
    {
      id: 'norsk-vg1-8-2-intro',
      type: 'text',
      content: `## Essay og kaseri - personlige sjangre

Essay og kaseri er to beslektede, men forskjellige sjangre. Begge gir rom for personlig uttrykk og kreativitet, men har ulike kjennetegn og tradisjoner.

**Felles trekk:**
- Personlig stemme og perspektiv
- Frihet i form og struktur
- Refleksjon over et tema
- Ofte publisert i aviser, tidsskrifter eller som egne utgivelser

**Viktige forskjeller:**
- Essayet er mer reflekterende og utforskende
- Kaseriet er mer humoristisk og underholdende
- Essayet kan vare lenge uten konklusjon
- Kaseriet har ofte en poeng eller punchline`,
    },
    {
      id: 'norsk-vg1-8-2-def-1',
      type: 'definition',
      title: 'Essayets kjennetegn',
      content: `**Hva er et essay?**
Et essay er en personlig, reflekterende tekst der forfatteren utforsker et tema uten nødvendigvis å komme til en endelig konklusjon.

**Kjennetegn:**
- **Personlig stemme:** Forfatteren er tydelig til stede i teksten
- **Refleksjon:** Tanker og undring står sentralt
- **Utforskende:** Prøver ut ideer, veier argumenter
- **Fri form:** Ikke bundet av stram struktur
- **Faglig forankring:** Ofte referanser til litteratur, kultur, vitenskap

**Etymologi:**
Ordet "essay" kommer fra det franske "essayer" som betyr "å forsøke" eller "å prøve". Et essay er altså et forsøk på å forstå noe.

**Essaytyper:**
- **Det personlige essay:** Utgangspunkt i egne erfaringer
- **Det litterære essay:** Refleksjon over litteratur og kunst
- **Det filosofiske essay:** Utforsker abstrakte spørsmål
- **Det kulturkritiske essay:** Kommenterer samfunn og kultur`,
    },
    {
      id: 'norsk-vg1-8-2-def-2',
      type: 'definition',
      title: 'Kaseriets kjennetegn',
      content: `**Hva er et kaseri?**
Et kaseri er en humoristisk, lettsindig tekst med muntlig preg. Kaseriet underholder samtidig som det ofte har et underliggende alvor.

**Kjennetegn:**
- **Humor:** Ironi, overdrivelser, ordspill
- **Muntlig stil:** Som om forfatteren snakker til leseren
- **Subjektivt:** Forfatterens personlige syn dominerer
- **Dagligdagse tema:** Tar utgangspunkt i hverdagslige observasjoner
- **Alvor i bunnen:** Ofte en seriøs undertone under humoren

**Etymologi:**
"Kaseri" kommer fra det franske "causer" som betyr "å prate" eller "å småsnakke".

**Virkemidler i kaseriet:**
- Ironi og selvironi
- Overdrivelser
- Uventede sammenligninger
- Direkte henvendelse til leseren
- Digresjoner og assosiasjoner`,
    },
    {
      id: 'norsk-vg1-8-2-def-3',
      type: 'definition',
      title: 'Kjente essayister',
      content: `**Michel de Montaigne (1533-1592)**
- Regnes som essayets far
- Skrev "Essais" (1580) - personlige refleksjoner over livet
- Stilte spørsmål uten å gi endelige svar
- Kombinerte personlige erfaringer med klassisk lærdom

**Knut Hamsun (1859-1952)**
- Skrev essayistisk prosa med personlig stemme
- "Fra det moderne Amerikas Aandsliv" (1889)
- Brukte essayformen til kulturkritikk
- Merk: Hamsuns politiske valg under andre verdenskrig er kritisert, men hans litterære betydning er uomstridt

**Andre kjente essayister:**
- **Francis Bacon** (1561-1626): Engelske essays om moral og samfunn
- **Virginia Woolf** (1882-1941): Litterære og feministiske essays
- **George Orwell** (1903-1950): Politiske og kulturelle essays
- **Dag Solstad** (f. 1941): Norsk samtidsessayist`,
    },
    {
      id: 'norsk-vg1-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Essay vs. kaseri',
      problem: 'Sammenlign hvordan samme tema kan behandles i essay og kaseri.',
      solution: `**Tema: Mobiltelefonen**

**Essay-versjon (utdrag):**
"Mobiltelefonen har blitt en forlengelse av oss selv. Jeg undrer meg over hva det gjør med oppmerksomheten vår, med evnen til å være til stede. Filosofen Martin Heidegger skrev om 'værenkasting' - å bli kastet inn i verden. Kanskje blir vi nå kastet inn i skjermen i stedet..."

**Kaseri-versjon (utdrag):**
"Min telefon og jeg har et komplisert forhold. Den vet alt om meg, og jeg vet ingenting om den. Forholdet er like ensidig som mitt første forsøk på romantikk i åttende klasse. Forskjellen er at telefonen i det minste svarer når jeg tar kontakt..."

**Analyse:**
- Essayet reflekterer, stiller spørsmål, trekker inn filosofi
- Kaseriet bruker humor, selvironi og sammenligning
- Begge tar opp et aktuelt tema på personlig vis
- Essayet er mer alvorlig, kaseriet er mer underholdende`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-8-2-tekst-vinje',
      type: 'collapsible',
      title: 'Primærtekst: Aasmund Olavsson Vinje – utdrag fra «Ferdaminni» (1861)',
      content: [
        {
          id: 'norsk-vg1-8-2-tekst-vinje-inner',
          type: 'text',
          content: TEKST_VINJE_FERDAMINNI_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-8-2-tekst-garborg',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – essay',
      content: [
        {
          id: 'norsk-vg1-8-2-tekst-garborg-inner',
          type: 'text',
          content: TEKST_GARBORG_ESSAY,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom essay og kaseri?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv essayets viktigste kjennetegn.',
            solution: 'Essayet er reflekterende, utforskende, personlig, og har ofte faglige referanser. Det prøver å forstå et tema uten nødvendigvis å konkludere.',
          },
          {
            label: 'b',
            task: 'Beskriv kaseriets viktigste kjennetegn.',
            solution: 'Kaseriet er humoristisk, har muntlig stil, tar opp hverdagslige tema, og har ofte et alvor under humoren.',
          },
          {
            label: 'c',
            task: 'Hva betyr ordene "essay" og "kaseri" opprinnelig?',
            solution: 'Essay kommer fra fransk "essayer" (å forsøke/prøve). Kaseri kommer fra fransk "causer" (å prate/småsnakke).',
          },
        ],
        solution: 'Essay er reflekterende og utforskende, kaseri er humoristisk og underholdende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les et essay av en kjent forfatter (f.eks. Montaigne, Woolf eller en norsk essayist) og analyser det.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er temaet for essayet?',
            solution: 'Beskriv hovedtemaet og eventuelle undertemaer.',
          },
          {
            label: 'b',
            task: 'Hvordan kommer forfatterens personlige stemme til uttrykk?',
            solution: 'Se etter jeg-form, personlige refleksjoner, og subjektive vurderinger.',
          },
          {
            label: 'c',
            task: 'Kommer forfatteren til en konklusjon? Hvorfor/hvorfor ikke?',
            solution: 'Essays kan ende åpent eller med en refleksjon - begge er gyldige.',
          },
        ],
        hints: ['Du kan finne essays i Samtiden, Vinduet eller andre tidsskrifter', 'Oversatte essays finnes i antologier'],
        solution: 'Analysen viser forståelse for essayets sjangertrekk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et kort essay (300-400 ord) der du reflekterer over et selvvalgt tema.',
        hints: ['Velg et tema du har tanker om', 'Du trenger ikke konkludere - utforsk heller', 'Bruk gjerne personlige erfaringer'],
        solution: 'Essayet vurderes etter personlig stemme, refleksjon og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et kaseri (250-350 ord) om en hverdagslig irritasjon eller observasjon.',
        hints: ['Bruk humor og ironi', 'Skriv som om du snakker til leseren', 'Ha gjerne et poeng under humoren'],
        solution: 'Kaseriet vurderes etter humor, muntlig stil og underholdningsverdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ta samme tema og skriv det først som essay (150 ord), deretter som kaseri (150 ord). Sammenlign de to versjonene.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema (f.eks. "ventetid", "lekser", "sosiale medier").',
            solution: 'Temaet bør kunne behandles både reflekterende og humoristisk.',
          },
          {
            label: 'b',
            task: 'Skriv essay-versjonen.',
            solution: 'Fokuser på refleksjon og utforsking av temaet.',
          },
          {
            label: 'c',
            task: 'Skriv kaseri-versjonen.',
            solution: 'Fokuser på humor og underholdning.',
          },
          {
            label: 'd',
            task: 'Reflekter: Hva er forskjellen i tone, stil og effekt?',
            solution: 'Sammenligningen viser forståelse for sjangrenes ulike virkemidler.',
          },
        ],
        solution: 'Oppgaven demonstrerer forståelse for begge sjangre gjennom praktisk skriving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // New exercises 6-11
    {
      id: 'norsk-vg1-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av disse er kjennetegn på et essay?',
        options: [
          { id: 'a', text: 'Stram struktur med innledning, hoveddel og konklusjon', isCorrect: false },
          { id: 'b', text: 'Personlig, reflekterende og utforskende tekst med fri form', isCorrect: true },
          { id: 'c', text: 'Humoristisk tekst med muntlig preg og punchline', isCorrect: false },
          { id: 'd', text: 'Saklig og objektiv tekst med kildehenvisninger', isCorrect: false },
        ],
        solution: 'Essayet kjennetegnes av en personlig stemme, refleksjon over et tema, utforskende tilnærming, og fri form. Ordet "essay" betyr "forsøk" - det handler om å prøve ut tanker og ideer uten nødvendigvis å komme til en endelig konklusjon.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom et essay og en fagartikkel?',
        options: [
          { id: 'a', text: 'Et essay er lengre enn en fagartikkel', isCorrect: false },
          { id: 'b', text: 'Et essay er personlig og utforskende, en fagartikkel er saklig og objektiv', isCorrect: true },
          { id: 'c', text: 'En fagartikkel har aldri kildehenvisninger', isCorrect: false },
          { id: 'd', text: 'Et essay handler alltid om litteratur', isCorrect: false },
        ],
        solution: 'Et essay er preget av forfatterens personlige stemme og utforskende tilnærming. Forfatteren er tydelig til stede og reflekterer åpent. En fagartikkel er derimot saklig, objektiv og bygger på etterprøvbar kunnskap med kildehenvisninger. Essayet "forsøker" å forstå, fagartikkelen "forklarer".',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les utdraget fra Vinjes «Ferdaminni» (primærtekst over). Analyser Vinjes essaystil med vekt på humor, ironi og refleksjon. Hvordan blander Vinje det alvorlige med det humoristiske?',
        hints: ['Se etter ironiske kommentarer', 'Legg merke til hvordan Vinje veksler mellom observasjon og refleksjon', 'Hva forteller stilen om Vinje som person?'],
        solution: 'Analysen bør vise at Vinje bruker humor og ironi som redskap for refleksjon. Han observerer mennesker og situasjoner med et skrått blikk, og bruker sine reiseopplevelser som utgangspunkt for dypere tanker om norsk kultur og identitet. Vinje er kjent for sin "tvisyn" - evnen til å se ting fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Vinjes og Garborgs essaystiler (se primærtekstene over). Hvilke likheter og forskjeller finner du? Hvordan kommer den personlige stemmen til uttrykk hos de to forfatterne?',
        hints: ['Se på språk og tone', 'Hva er temaene?', 'Hvordan forholder de seg til egen tid og samfunn?'],
        solution: 'Sammenligningen bør vise at begge har en tydelig personlig stemme, men med ulik stil. Vinje er mer humoristisk og ironisk, mens Garborg er mer analytisk og argumenterende. Begge bruker essayet til å reflektere over norsk kultur og samfunn, men fra ulike perspektiver og med ulike virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (500-700 ord) i Montaigne-tradisjonen. Velg et tema fra ditt eget liv eller fra samfunnet, og utforsk det gjennom personlig refleksjon. Forsøk å stille spørsmål mer enn å gi svar.',
        hints: ['Begynn med en konkret opplevelse eller observasjon', 'La tankene vandre - følg assosiasjonene', 'Trekk gjerne inn noe du har lest eller lært', 'Avslutt åpent - du trenger ikke konkludere'],
        solution: 'Essayet vurderes etter personlig stemme, refleksjonsdybde, evne til å utforske uten nødvendigvis å konkludere, og språklig kvalitet. Et godt essay viser selvstendige tanker og vilje til å undersøke et tema fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-8-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-8-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et research-essay (600-800 ord) om en litterær figur (f.eks. Vinje, Garborg, Montaigne, Woolf eller en annen essayist). Kombiner faktaopplysninger med egne refleksjoner over personens betydning.',
        hints: ['Finn informasjon om personen fra flere kilder', 'Ikke bare referer - reflekter over det du finner', 'Hva fascinerer deg ved denne personen?', 'Hvorfor er personen relevant i dag?'],
        solution: 'Research-essayet vurderes etter evne til å kombinere faktakunnskaper med personlig refleksjon, kildegrunnlag, selvstendig tenkning og språklig kvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.1: Drama og teater
// ============================================================================

export const CHAPTER_NORSK_VG1_9_1: TextbookChapter = {
  id: 'norsk-vg1-9-1',
  courseId: 'norsk-vg1',
  chapterNumber: '9.1',
  title: 'Drama og teater',
  description: 'Lær om dramaet som litterær sjanger og teatrets virkemidler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke dramatiske tekster med vekt på form og innhold',
    'forstå samspillet mellom tekst og scenisk fremføring',
  ],
  content: [
    {
      id: 'norsk-vg1-9-1-intro',
      type: 'text',
      content: `## Dramaet som sjanger

Drama er litteratur skrevet for scenen. I motsetning til romaner og noveller, er drama ment å fremføres av skuespillere for et publikum.

**Kjennetegn på drama:**
- Handling formidles gjennom dialog og handling
- Ingen fortellerstemme (normalt)
- Skrevet i replikker og sceneanvisninger
- Ment for fremføring

**Dramatiske sjangre:**
- **Tragedie:** Alvorlig handling med ulykkelig utgang
- **Komedie:** Humoristisk handling med lykkelig utgang
- **Tragikomeddie:** Blanding av alvor og humor
- **Moderne drama:** Bryter med klassiske sjangerregler`,
    },
    {
      id: 'norsk-vg1-9-1-def-1',
      type: 'definition',
      title: 'Dramatiske virkemidler',
      content: `**Dialog**
Samtale mellom karakterene. Dialogen driver handlingen fremover og avslører karaktertrekk.

**Monolog**
En lengre tale av én karakter. Kan være:
- **Dialogisk monolog:** Karakteren snakker til andre på scenen
- **Soliloquy (enesamtale):** Karakteren snakker "til seg selv" og avslører tanker for publikum
- **Til publikum:** Karakteren henvender seg direkte til salen

**Sceneanvisninger (didaskalier)**
Forfatterens instruksjoner om:
- Scenografi (hvordan scenen ser ut)
- Karakterenes bevegelser og mimikk
- Lys, lyd og andre effekter
- Pause, stillhet, stemning

**Dramatisk ironi**
Når publikum vet noe karakterene ikke vet. Skaper spenning og engasjement.

**Konfliktsett**
- Ytre konflikt: Mellom karakterer eller mot samfunnet
- Indre konflikt: I karakterens eget sinn`,
    },
    {
      id: 'norsk-vg1-9-1-def-2',
      type: 'definition',
      title: 'Aristoteles dramaturgi',
      content: `**De tre enheter**
Aristoteles (384-322 f.Kr.) beskrev i "Poetikken" idealer for tragedien:

**1. Tidens enhet**
Handlingen bør utspille seg innenfor 24 timer.

**2. Stedets enhet**
Handlingen bør foregå på ett sted.

**3. Handlingens enhet**
Dramaet bør ha én hovedhandling uten sidehistorier.

**Dramatisk struktur**
- **Eksposisjon:** Presentasjon av situasjon og karakterer
- **Komplikasjon:** Konflikten utvikler seg
- **Klimaks:** Vendepunkt, høyeste spenning
- **Peripeti:** Omslaget (ofte mot det verre i tragedien)
- **Katastrofe/løsning:** Utfallet av handlingen

**Katarsis**
Aristoteles mente tragedien skulle rense publikum for følelser som frykt og medlidenhet gjennom innlevelse i handlingen.`,
    },
    {
      id: 'norsk-vg1-9-1-def-3',
      type: 'definition',
      title: 'Moderne drama',
      content: `**Brudd med klassisk dramaturgi**
Fra 1800-tallet brøt dramatikere med de klassiske reglene:

**Realismen (1850-1890)**
- Hverdagslige tema og karakterer
- Naturlig dialog
- Samfunnskritikk
- Henrik Ibsen, August Strindberg

**Naturalismen (1880-1900)**
- Vitenskapelig tilnærming
- Arv og miljø bestemmer skjebnen
- Ofte mørke tema

**Ekspresjonismen (1910-1930)**
- Subjektiv virkelighetsopplevelse
- Forvrengning og overdrivelse
- Drømmeaktige scener

**Absurd teater (1950-tallet)**
- Meningsløshet og fremmedgjøring
- Brudd med logikk og realisme
- Samuel Beckett: "Mens vi venter på Godot"

**Episk teater (Bertolt Brecht)**
- Publikum skal tenke, ikke bare føle
- Brudd med innlevelsen
- Politisk teater`,
    },
    {
      id: 'norsk-vg1-9-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av dramatisk tekst',
      problem: 'Analyser denne replikkvekslingen fra et tenkt drama.',
      solution: `**Eksempel:**
ANNA: (ser ut vinduet) Det regner igjen.
PER: Som alltid.
ANNA: Husker du da vi pleide å danse i regnet?
PER: (uten å se opp fra avisen) Det var lenge siden.
ANNA: (stille) Ja. Det var det.
(Lang pause)

**Analyse:**
- **Dialog:** Kort, ladet. Mye ligger mellom linjene (undertekst).
- **Sceneanvisninger:** Viser at Anna søker kontakt, Per er avvisende.
- **Konfliktet:** Indirekte - noe har endret seg i forholdet.
- **Symbol:** Regnet kan symbolisere tristhet, men også en tapt lidenskap.
- **Undertekst:** Det som ikke sies er viktigere enn det som sies. Anna savner fortiden, Per vil ikke snakke om det.

Dette er typisk for moderne realistisk drama der konflikter uttrykkes indirekte.`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-9-1-tekst-holberg',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – scene fra «Jeppe på Bjerget»',
      content: [
        {
          id: 'norsk-vg1-9-1-tekst-holberg-inner',
          type: 'text',
          content: TEKST_HOLBERG_JEPPE_SCENE,
        },
      ],
    },
    {
      id: 'norsk-vg1-9-1-tekst-ibsen-peer',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – scene fra «Peer Gynt» (1867)',
      content: [
        {
          id: 'norsk-vg1-9-1-tekst-ibsen-peer-inner',
          type: 'text',
          content: TEKST_IBSEN_PEER_GYNT_SCENE,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar disse dramatiske begrepene:',
        subTasks: [
          { label: 'a', task: 'Hva er forskjellen mellom dialog og monolog?', solution: 'Dialog er samtale mellom to eller flere karakterer. Monolog er en lengre tale av én karakter.' },
          { label: 'b', task: 'Hva er sceneanvisninger, og hva er deres funksjon?', solution: 'Sceneanvisninger er forfatterens instruksjoner om scene, bevegelse, lys og lyd. De veileder regissør og skuespillere.' },
          { label: 'c', task: 'Hva er dramatisk ironi?', solution: 'Dramatisk ironi er når publikum vet noe karakterene ikke vet, noe som skaper spenning.' },
        ],
        solution: 'Forståelse av dramatiske begreper er grunnleggende for dramaanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Aristoteles tre enheter og hvorfor moderne drama ofte bryter med dem.',
        hints: ['Tenk på hva de tre enhetene innebærer', 'Hvorfor kan det være kunstnerisk interessant å bryte regler?'],
        solution: 'De tre enheter (tid, sted, handling) skapte konsentrasjon i klassisk drama. Moderne drama bryter med dem for å utforske nye muligheter, vise kompleksitet, og utfordre publikums forventninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les en scene fra et drama (f.eks. Ibsen, Shakespeare eller et moderne stykke) og analyser bruken av virkemidler.',
        subTasks: [
          { label: 'a', task: 'Hvordan brukes dialog til å avsløre karakter og konflikt?', solution: 'Se på hva karakterene sier og hvordan de sier det.' },
          { label: 'b', task: 'Hva forteller sceneanvisningene?', solution: 'Analyser hva sceneanvisningene bidrar med til forståelsen.' },
          { label: 'c', task: 'Er det undertekst - noe som ligger mellom linjene?', solution: 'Undertekst er det som ikke sies direkte, men som likevel kommuniseres.' },
        ],
        solution: 'Analysen viser evne til å lese dramatisk tekst med forståelse for sjangeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dramatisk scene (1-2 sider) med to karakterer i konflikt.',
        hints: ['Bruk dialog og sceneanvisninger', 'La konflikten komme frem gjennom det som sies OG det som ikke sies', 'Tenk på undertekst'],
        solution: 'Scenen vurderes etter bruk av dramatiske virkemidler, karaktertegning og konfliktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign klassisk og moderne drama.',
        subTasks: [
          { label: 'a', task: 'Hvordan forholder klassisk gresk tragedie seg til de tre enheter?', solution: 'Klassisk gresk tragedie følger ofte de tre enheter strengt.' },
          { label: 'b', task: 'Gi eksempler på hvordan moderne dramatikere har brutt med klassiske konvensjoner.', solution: 'Eksempler kan være Ibsens realistiske drama, Brechts episke teater, eller absurd teater.' },
          { label: 'c', task: 'Hva kan være fordelene og ulempene med begge tilnærminger?', solution: 'Klassisk: konsentrasjon og klarhet. Moderne: frihet og kompleksitet.' },
        ],
        solution: 'Sammenligningen viser forståelse for dramatisk utvikling over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en sceneanvisning (didaskalje)?',
        options: [
          { id: 'a', text: 'En replikk som sies direkte til publikum', isCorrect: false },
          { id: 'b', text: 'Forfatterens instruksjoner om scene, bevegelse, lys og stemning', isCorrect: true },
          { id: 'c', text: 'En monolog der karakteren snakker med seg selv', isCorrect: false },
          { id: 'd', text: 'En beskrivelse av handlingen mellom aktene', isCorrect: false },
        ],
        solution: 'Sceneanvisninger (didaskalier) er forfatterens instruksjoner som står i parentes eller kursiv i dramateksten. De beskriver scene, bevegelser, mimikk, lys, lyd og stemning. Sceneanvisningene er ikke ment å sies høyt, men veileder regissør og skuespillere.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken dramatisk sjanger blander alvor og humor?',
        options: [
          { id: 'a', text: 'Tragedie', isCorrect: false },
          { id: 'b', text: 'Komedie', isCorrect: false },
          { id: 'c', text: 'Tragikomeddie', isCorrect: true },
          { id: 'd', text: 'Farce', isCorrect: false },
        ],
        solution: 'En tragikomeddie er en dramatisk sjanger som blander elementer fra både tragedie og komedie. Den kan ha alvorlige temaer behandlet med humor, eller humoristiske situasjoner med en underliggende alvorlighet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les scenen fra Holbergs «Jeppe på Bjerget» (primærtekst over). Analyser Holbergs komiske virkemidler. Hva gjør scenen morsom, og er det noe alvorlig under humoren?',
        hints: ['Se etter overdrivelser og komiske situasjoner', 'Tenk på hvem som er målet for satiren', 'Hva sier scenen om samfunnsforholdene på 1700-tallet?'],
        solution: 'Analysen bør identifisere komiske virkemidler som overdrivelse, situasjonskomikk, og verbal humor. Holberg bruker humor til å kritisere samfunnsforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les scenen fra Ibsens «Peer Gynt» (primærtekst over). Analyser scenen med vekt på karakteren Peer Gynt og temaene som kommer frem. Hva avslører scenen om Peer som person?',
        hints: ['Se på hva Peer sier og gjør', 'Hva er hans selvbilde vs. virkeligheten?', 'Hvordan bruker Ibsen fantasien som virkemiddel?'],
        solution: 'Analysen bør vise at Peer Gynt er en fantasifull, men selvbedragende karakter. Ibsen bruker Peers fantasi som dramatisk virkemiddel for å utforske identitet og selvbedrag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Holbergs og Ibsens bruk av humor og ironi i de to primærtekstene. Hvilke likheter og forskjeller finner du?',
        hints: ['Se på hva slags humor de bruker', 'Hvem retter humoren seg mot?', 'Er humoren et mål i seg selv, eller et virkemiddel?'],
        solution: 'Holberg bruker komedie og satire for å kritisere samfunnsforhold direkte, mens Ibsen bruker ironi og fantasi for å utforske dypere psykologiske temaer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en dramatisk scene (ca. 2 sider) inspirert av enten Holberg eller Ibsen. Velg et samtidsemne og behandle det med dramatiske virkemidler.',
        hints: ['Velg et tema som engasjerer deg', 'Tenk på konflikten mellom karakterene', 'Bruk sceneanvisninger til å skape stemning', 'Prøv å ha undertekst i dialogen'],
        solution: 'Scenen vurderes etter bruk av dramatiske virkemidler, kvalitet på dialog, sceneanvisninger, karaktertegning, og evne til å bruke dramaet til å utforske et tema.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg1-9-1-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-9-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-600 ord): Hvordan skiller drama seg fra novellen som form for samfunnskritikk? Bruk eksempler fra Holberg, Ibsen eller andre dramatikere, og sammenlign med noveller du kjenner.',
        hints: ['Tenk på hva dramaet kan gjøre som novellen ikke kan', 'Hvordan virker det at dramaet er skrevet for scenen?', 'Hva betyr det at drama ikke har en fortellerstemme?'],
        solution: 'Essayet bør drøfte hvordan dramaets form gir andre muligheter for samfunnskritikk enn novellens form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2: Henrik Ibsen
// ============================================================================

export const CHAPTER_NORSK_VG1_9_2: TextbookChapter = {
  id: 'norsk-vg1-9-2',
  courseId: 'norsk-vg1',
  chapterNumber: '9.2',
  title: 'Henrik Ibsen',
  description: 'Lær om Norges mest kjente dramatiker og hans betydning for verdenslitteraturen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'analysere og tolke dramatiske tekster med vekt på form og innhold',
  ],
  content: [
    {
      id: 'norsk-vg1-9-2-intro',
      type: 'text',
      content: `## Henrik Ibsen (1828-1906)

Henrik Ibsen regnes som en av verdens viktigste dramatikere. Hans stykker spilles fortsatt over hele verden, og han har hatt enorm innflytelse på moderne teater.

**Nøkkelopplysninger:**
- Født i Skien 1828, døde i Kristiania 1906
- Bodde 27 år i utlandet (Italia og Tyskland)
- Skrev 26 skuespill
- Kalt "det moderne dramaets far"

**Hvorfor er Ibsen viktig?**
- Fornyet dramaet som kunstform
- Tok opp kontroversielle samtidsemner
- Skapte komplekse, psykologisk troverdige karakterer
- Påvirket dramatikere verden over`,
    },
    {
      id: 'norsk-vg1-9-2-def-1',
      type: 'definition',
      title: 'Biografi og samtid',
      content: `**Oppvekst og bakgrunn**
Ibsen vokste opp i Skien i en velstående familie som opplevde økonomisk nedgang. Som ung arbeidet han som apotekerlærling i Grimstad.

**Karriere i Norge (1850-1864)**
- Skrev sine første stykker i Bergen og Kristiania
- Arbeidet som teaterinstruktør og -leder
- Tidlige verk inspirert av romantikken og nasjonalisme
- Følte seg misforstått og undervurdert i Norge

**Eksil i utlandet (1864-1891)**
- Flyttet til Italia, senere Tyskland
- Skrev sine mest kjente verk i eksil
- Utviklet sin realistiske stil
- Kunne observere Norge på avstand

**Tilbake til Norge (1891-1906)**
- Returnerte som berømt forfatter
- Skrev sine siste, symbolistiske stykker
- Døde i Kristiania 1906

**Samtiden:**
Ibsens tid var preget av industrialisering, urbanisering og store samfunnsendringer. Kvinners stilling, religion, moral og familiestrukturer var under debatt.`,
    },
    {
      id: 'norsk-vg1-9-2-def-2',
      type: 'definition',
      title: 'Et dukkehjem (1879) - analyse',
      content: `**Handling**
Nora Helmer lever tilsynelatende lykkelig med sin mann Torvald og tre barn. Men hun skjuler en hemmelighet: Hun har forfalsket en underskrift for å låne penger til å redde Torvalds liv. Når hemmeligheten truer med å komme ut, avsløres ekteskapets virkelige natur.

**Hovedpersoner:**
- **Nora Helmer:** Hovedperson. Gjennomgår stor utvikling fra "lerkefugl" til selvstendig kvinne.
- **Torvald Helmer:** Noras ektemann. Opptatt av anstendighet og ytre fasade.
- **Krogstad:** Pengeutlåneren som truer med å avsløre Nora.
- **Kristine Linde:** Noras venninne, selvstendig enke.

**Sentrale temaer:**
- Kjønnsroller og kvinners stilling
- Sannhet og løgn i ekteskapet
- Selvrealisering og identitet
- Samfunnets forventninger vs. individets behov

**Dramaturgiske trekk:**
- Følger de tre enheter (tid, sted, handling)
- Retrospektiv teknikk: Fortiden avdekkes gradvis
- Symbolbruk: Tarantellaen, juletre, macaroons
- Åpen slutt som sjokkerte samtiden`,
    },
    {
      id: 'norsk-vg1-9-2-def-3',
      type: 'definition',
      title: 'Ibsens samfunnskritikk',
      content: `**Kontroversiell i sin tid**
Ibsens stykker var kontroversielle da de ble skrevet. Han tok opp temaer som mange mente ikke hørte hjemme i offentligheten.

**Eksempler på kritikk:**
- **Et dukkehjem (1879):** Noras valg om å forlate mann og barn ble sett som skandaløst.
- **Gengangere (1881):** Tok opp tabuemner som syfilis og incest. Ble kalt "et åpent kloakk" av kritikere.
- **En folkefiende (1882):** Kritiserte flertallets makt og økonomiske interesser.

**Viktig kontekst:**
Ibsens kritikk må forstås i lys av hans samtid. Han stilte spørsmål som var radikale da, men som vi i dag ser annerledes på. Hans styrke var å utfordre etablerte sannheter og tvinge publikum til å tenke.`,
    },
    {
      id: 'norsk-vg1-9-2-def-4',
      type: 'definition',
      title: 'Ibsens betydning internasjonalt',
      content: `**Påvirkning på moderne teater:**
- Grunnla det realistiske drama
- Viste at teater kunne ta opp samtidsemner
- Skapte psykologisk komplekse karakterer
- Påvirket dramatikere som Tsjekhov, Shaw, Miller, O'Neill

**Ibsen i verden:**
- Den mest spilte dramatikeren etter Shakespeare
- Oversatt til over 100 språk
- Ibsen-festivaler i mange land

**Kritiske perspektiver:**
Som alle klassiske forfattere kan Ibsen leses på ulike måter. Det viktige er å lese verkene i kontekst og vurdere dem kritisk.`,
    },
    {
      id: 'norsk-vg1-9-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av scene fra Et dukkehjem',
      problem: 'Analyser den berømte sluttscenen der Nora forlater Torvald.',
      solution: `**Scenen:**
Nora har innsett at Torvald ikke er den hun trodde. Hun bestemmer seg for å forlate ham for å "oppdra seg selv".

**Dialog:**
TORVALD: Du er først og fremst hustru og mor.
NORA: Det tror jeg ikke lenger på. Jeg tror jeg er først og fremst et menneske, jeg, likeså vel som du.

**Dramatisk funksjon:**
- Klimaks i Noras utvikling
- Konfrontasjonen avslører verdikonflikten
- Torvald representerer samfunnets normer
- Nora krever retten til å definere seg selv

**Ulike tolkninger:**
Scenen har blitt tolket som feministisk manifest, som kritikk av borgerlig hykleri, eller som en tragedie om manglende kommunikasjon. Det finnes ikke én "riktig" tolkning.`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-9-2-tekst-dukkehjem',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – sluttscenen fra «Et dukkehjem» (1879)',
      content: [
        {
          id: 'norsk-vg1-9-2-tekst-dukkehjem-inner',
          type: 'text',
          content: TEKST_IBSEN_ET_DUKKEHJEM_SLUTT,
        },
      ],
    },
    {
      id: 'norsk-vg1-9-2-tekst-folkefiende',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – åpningen av «En folkefiende» (1882)',
      content: [
        {
          id: 'norsk-vg1-9-2-tekst-folkefiende-inner',
          type: 'text',
          content: TEKST_IBSEN_EN_FOLKEFIENDE_AAPNING,
        },
      ],
    },
    {
      id: 'norsk-vg1-9-2-tekst-gengangere',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – utdrag fra «Gengangere» (1881)',
      content: [
        {
          id: 'norsk-vg1-9-2-tekst-gengangere-inner',
          type: 'text',
          content: TEKST_IBSEN_GENGANGERE_UTDRAG,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-9-2-ex-1',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Beskriv Ibsens liv og karriere.', subTasks: [ { label: 'a', task: 'Hvor og når levde Ibsen?', solution: 'Henrik Ibsen ble født i Skien i 1828 og døde i Kristiania i 1906.' }, { label: 'b', task: 'Hvorfor flyttet han til utlandet, og hvordan påvirket det hans forfatterskap?', solution: 'Han følte seg misforstått i Norge og søkte frihet. Utlendigheten ga ham avstand til å kritisere norsk og europeisk samfunn.' }, { label: 'c', task: 'Hvilke kjennetegn har Ibsens realistiske drama?', solution: 'Samtidige temaer, naturlig dialog, psykologisk troverdige karakterer, samfunnskritikk.' } ], solution: 'Forståelse av Ibsens biografi gir innsikt i hans verk.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-2',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Les "Et dukkehjem" (eller et utdrag) og analyser Noras utvikling gjennom stykket.', hints: ['Se på hvordan Nora fremstilles i begynnelsen vs. slutten', 'Hva får henne til å endre seg?', 'Hvordan reagerer Torvald på endringen?'], solution: 'Nora utvikler seg fra underdanig "lerkefugl" til selvstendig individ som krever å bli behandlet som et menneske.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-3',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Forklar hvorfor "Et dukkehjem" var kontroversielt i 1879.', subTasks: [ { label: 'a', task: 'Hvilke samfunnsnormer utfordret stykket?', solution: 'Stykket utfordret synet på ekteskapet, kvinners rolle, og familiestrukturen.' }, { label: 'b', task: 'Hvordan reagerte samtiden?', solution: 'Reaksjonene var delte - fra fordømmelse til begeistring.' }, { label: 'c', task: 'Hvorfor er det viktig å forstå denne konteksten når vi leser stykket i dag?', solution: 'Konteksten viser hvor radikalt stykket var og hvorfor det fikk slik betydning.' } ], solution: 'Historisk kontekst er avgjørende for å forstå litteraturens betydning.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-4',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Sammenlign to ulike tolkninger av Et dukkehjem eller en annen Ibsen-tekst.', hints: ['Du kan sammenligne ulike teaterproduksjoner, filmversjoner, eller kritiske lesninger'], solution: 'Sammenligningen viser at klassiske tekster kan leses på mange måter, og at tolkning påvirkes av tid og sted.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-5',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-5', number: '5', type: 'classic', difficulty: 'vanskelig', task: 'Drøft Ibsens internasjonale betydning.', subTasks: [ { label: 'a', task: 'Hvorfor er Ibsen den mest spilte dramatikeren etter Shakespeare?', solution: 'Universelle temaer, psykologisk dybde, dramatisk kvalitet.' }, { label: 'b', task: 'Hvilke dramatikere har Ibsen påvirket?', solution: 'Eksempler: Anton Tsjekhov, George Bernard Shaw, Arthur Miller, Eugene O Neill.' }, { label: 'c', task: 'Er Ibsens stykker fortsatt relevante i dag? Begrunn svaret.', solution: 'Argumenter for relevans: Temaene (identitet, frihet, sannhet) er universelle.' } ], solution: 'Drøftingen viser forståelse for Ibsens plass i verdenslitteraturen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-9-2-ex-6',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-6', number: '6', type: 'multiple-choice', difficulty: 'lett', task: 'Sett verkene i riktig kronologisk rekkefølge. Hvilket av disse Ibsen-verkene kom først?', options: [ { id: 'a', text: 'Et dukkehjem (1879)', isCorrect: false }, { id: 'b', text: 'Peer Gynt (1867)', isCorrect: true }, { id: 'c', text: 'Gengangere (1881)', isCorrect: false }, { id: 'd', text: 'En folkefiende (1882)', isCorrect: false } ], solution: 'Peer Gynt (1867) er det eldste av disse verkene og tilhører Ibsens romantiske/poetiske fase.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-9-2-ex-7',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-7', number: '7', type: 'multiple-choice', difficulty: 'lett', task: 'Hva er et "problemdrama" (tesesstykke)?', options: [ { id: 'a', text: 'Et drama der skuespillerne har problemer med å huske replikkene', isCorrect: false }, { id: 'b', text: 'Et drama som setter aktuelle samfunnsproblemer under debatt', isCorrect: true }, { id: 'c', text: 'Et drama med ulykkelig slutt', isCorrect: false }, { id: 'd', text: 'Et drama skrevet for å provosere sensur', isCorrect: false } ], solution: 'Et problemdrama setter aktuelle samfunnsproblemer under debatt. Ibsen er den fremste representanten for denne sjangeren.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-9-2-ex-8',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Les sluttscenen fra «Et dukkehjem» (primærtekst over). Analyser Noras argumenter. Hva er hennes hovedpoeng, og hvordan begrunner hun sin beslutning?', hints: ['Se på hva Nora sier om sin rolle', 'Hva mener hun med at hun aldri har vært lykkelig?', 'Hvordan reagerer Torvald?'], solution: 'Analysen bør identifisere Noras sentrale argumenter om å ha vært en dukke først for sin far, deretter for Torvald, og at hun må finne ut hvem hun er.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-9',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-9', number: '9', type: 'classic', difficulty: 'medium', task: 'Les åpningen av «En folkefiende» (primærtekst over). Analyser hvordan Ibsen introduserer konflikten. Hvilke motsetninger etableres allerede i åpningsscenen?', hints: ['Se på forholdet mellom doktor Stockmann og brorens posisjon', 'Hva antydes om spenningen mellom sannhet og makt?'], solution: 'Ibsen etablerer allerede i åpningen spenningen mellom sannhet og makt/økonomi. Konflikten mellom individ og samfunn er gjennomgangstema.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-10',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-10', number: '10', type: 'classic', difficulty: 'medium', task: 'Sammenlign temaene i «Gengangere» og «Et dukkehjem». Begge handler om plikt og frihet. Hvordan behandler Ibsen dette temaet forskjellig i de to stykkene?', hints: ['Hva er plikten i hvert stykke?', 'Hva er friheten karakterene søker?'], solution: 'I Et dukkehjem velger Nora friheten. I Gengangere har fru Alving oppfylt sin plikt med katastrofale konsekvenser. Ibsen viser at begge veier har en pris.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-11',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et essay (500-700 ord): Hvorfor kalles Ibsen "det moderne dramaets far"? Begrunn med referanser til hans verk og hans påvirkning på teaterhistorien.', hints: ['Hva var nytt med Ibsens drama?', 'Hvordan skilte hans stykker seg fra det vanlige?', 'Hvilke dramatikere ble påvirket av ham?'], solution: 'Essayet bør drøfte hvordan Ibsen fornyet dramaet gjennom realistisk dialog, psykologisk komplekse karakterer, samtidsemner, og ved å utfordre publikum.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-9-2-ex-12',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-9-2-ex-12', number: '12', type: 'classic', difficulty: 'vanskelig', task: 'Moderniser en Ibsen-scene: Velg en scene fra Et dukkehjem, En folkefiende eller Gengangere, og skriv den om til en moderne kontekst. Behold det sentrale temaet, men oppdater setting, språk og situasjon.', hints: ['Hva ville konflikten handle om i dag?', 'Hvordan ville karakterene snakke?', 'Behold den dramatiske spenningen'], solution: 'Scenen vurderes etter evne til å overføre Ibsens tematikk til moderne kontekst, kvalitet på dialog og dramatisk oppbygging.', allowsUpload: true, allowsCanvasDrawing: true },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.1: Romantikken i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_10_1: TextbookChapter = {
  id: 'norsk-vg1-10-1',
  courseId: 'norsk-vg1',
  chapterNumber: '10.1',
  title: 'Romantikken i Norge',
  description: 'Lær om romantikken som litterær epoke og dens betydning for norsk nasjonalidentitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'forstå sammenhengen mellom litteratur og samfunnsutvikling',
  ],
  content: [
    {
      id: 'norsk-vg1-10-1-intro',
      type: 'text',
      content: `## Romantikken i Norge (ca. 1814-1850)

Romantikken var en kulturell og intellektuell bevegelse som oppstod i Europa på slutten av 1700-tallet. I Norge falt romantikken sammen med nasjonsbyggingen etter 1814.

**Historisk bakgrunn:**
- 1814: Norge får egen grunnlov og løsriver seg fra Danmark
- Unionen med Sverige gir begrenset selvstendighet
- Behov for å definere norsk nasjonal identitet
- Søken etter det "ekte norske"

**Romantikkens idealer:**
- Følelser over fornuft
- Natur som inspirasjonskilde
- Det nasjonale og folkelige
- Individuell frihet og genialitet
- Lengsel og drømmer`,
    },
    {
      id: 'norsk-vg1-10-1-def-1',
      type: 'definition',
      title: 'Kjennetegn ved romantikken',
      content: `**Naturen**
- Naturen som speil for følelser
- Fjell, fosser, skog symboliserer frihet
- Norsk natur som identitetsmarkør
- Panteisme: Gud i naturen

**Følelser**
- Følelser er viktigere enn fornuft
- Indre liv utforskes i diktningen
- Lengsel (Sehnsucht) etter noe uoppnåelig
- Kjærlighet, sorg, glede som sentrale tema

**Det nasjonale**
- Søken etter nasjonal identitet
- Bonden som bærer av norsk kultur
- Folkediktning samles inn
- Norrøn historie som inspirasjon

**Det folkelige**
- Eventyr, sagn og folkeviser
- Dialekter og landsmål
- Bondekulturen idealiseres
- Motstand mot dansk kulturhegemoni`,
    },
    {
      id: 'norsk-vg1-10-1-def-2',
      type: 'definition',
      title: 'Wergeland og Welhaven',
      content: `**Henrik Wergeland (1808-1845)**
- "Norges Byron" - lidenskapelig og produktiv
- Nasjonal-romantisk dikter
- Kjempet for norsk kulturell selvstendighet
- Sosial rettferdighet og demokrati
- Hovedverk: "Skabelsen, Mennesket og Messias", "Den engelske Lods"

**Johan Sebastian Welhaven (1807-1873)**
- Mer klassisistisk orientert
- Verdsatte form og balanse
- Kritiserte Wergelands "formløshet"
- Hovedverk: "Norges Dæmring", diktsamlinger

**"Kulturkampen"**
- Wergeland vs. Welhaven representerte to syn på norsk kultur
- Wergeland: Radikalt brudd med dansk tradisjon, folkelig orientert
- Welhaven: Bygge videre på europeisk dannelse, formbevisst
- I ettertid ses begge som viktige for norsk litteratur`,
    },
    {
      id: 'norsk-vg1-10-1-def-3',
      type: 'definition',
      title: 'Asbjørnsen og Moe',
      content: `**Peter Christen Asbjørnsen (1812-1885) og Jørgen Moe (1813-1882)**

**Eventyrinnsamlingen:**
- Samlet norske folkeeventyr fra 1830-tallet
- Inspirert av brødrene Grimm i Tyskland
- "Norske Folkeeventyr" (1841-1844)
- Grunnla norsk eventyrfortelling

**Betydning:**
- Bevarte muntlig tradisjon på skrift
- Skapte et norsk litterært språk
- Dokumenterte norsk folkekultur
- Bidro til nasjonsbygging

**Kjente eventyr:**
- "Askeladden som kappåt med trollet"
- "De tre bukkene Bruse"
- "Pannekaka"
- "Oskeladden og de gode hjelperne"`,
    },
    {
      id: 'norsk-vg1-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Romantiske trekk i dikt',
      problem: 'Analyser romantiske trekk i dette diktet av Henrik Wergeland.',
      solution: `**"Mig selv" (utdrag) av Henrik Wergeland:**

"Jeg er en Flamme, skjønt jeg ei fortærer,
kun varmer, lyser, og mig selv forklarer..."

**Romantiske trekk:**
- **Natursymbolikk:** Flammen som symbol på lidenskap og liv
- **Det geniale individet:** "Mig selv" - fokus på jeget
- **Følelser:** Varme og lys som positive verdier
- **Form:** Personlig tone, billedlig språk

**Kontekst:**
Diktet viser typisk romantisk selvforståelse der dikteren ser seg selv som bærer av et høyere kall.`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-10-1-tekst-wergeland-gran',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – «Til en Gran»',
      content: [
        {
          id: 'norsk-vg1-10-1-tekst-wergeland-gran-inner',
          type: 'text',
          content: TEKST_WERGELAND_TIL_EN_GRAN,
        },
      ],
    },
    {
      id: 'norsk-vg1-10-1-tekst-welhaven',
      type: 'collapsible',
      title: 'Primærtekst: Johan Sebastian Welhaven – «Digtets Aand»',
      content: [
        {
          id: 'norsk-vg1-10-1-tekst-welhaven-inner',
          type: 'text',
          content: TEKST_WELHAVEN_DIGTETS_AAND,
        },
      ],
    },
    {
      id: 'norsk-vg1-10-1-tekst-askeladden',
      type: 'collapsible',
      title: 'Primærtekst: Asbjørnsen & Moe – «Askeladden som kappåt med trollet»',
      content: [
        {
          id: 'norsk-vg1-10-1-tekst-askeladden-inner',
          type: 'text',
          content: TEKST_ASBJORNSEN_MOE_ASKELADDEN,
        },
      ],
    },
    {
      id: 'norsk-vg1-10-1-tekst-wergeland-forste',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Wergeland – «Den første Gang»',
      content: [
        {
          id: 'norsk-vg1-10-1-tekst-wergeland-forste-inner',
          type: 'text',
          content: TEKST_WERGELAND_DEN_FORSTE_GANG,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-10-1-ex-1',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Forklar romantikkens historiske kontekst i Norge.', subTasks: [ { label: 'a', task: 'Hva skjedde i 1814, og hvordan påvirket det kulturen?', solution: 'Norge fikk egen grunnlov og løsrev seg fra Danmark. Dette skapte behov for å definere norsk nasjonal identitet.' }, { label: 'b', task: 'Hvorfor var romantikken viktig for nasjonsbyggingen?', solution: 'Romantikken bidro til å finne og skape en norsk identitet gjennom fokus på natur, folkekultur og historie.' }, { label: 'c', task: 'Hvilke idealer kjennetegnet romantikken?', solution: 'Følelser over fornuft, natur, det nasjonale/folkelige, individuell frihet.' } ], solution: 'Historisk kontekst er avgjørende for å forstå romantikkens betydning i Norge.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-2',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Sammenlign Wergeland og Welhaven.', hints: ['Se på deres syn på norsk kultur og litteratur', 'Hva var de uenige om?'], solution: 'Wergeland var radikal og folkeorientert, Welhaven var klassisistisk og formorientert. Begge bidro til norsk litteratur.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-3',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Les et norsk folkeeventyr samlet av Asbjørnsen og Moe og analyser det.', subTasks: [ { label: 'a', task: 'Hva slags eventyr er det (undereventyr, dyreeventyr, skjemteeventyr)?', solution: 'Klassifiser eventyret basert på dets kjennetegn.' }, { label: 'b', task: 'Hvilke typiske eventyrtrekk finner du?', solution: 'Identifiser klassiske eventyrelementer.' }, { label: 'c', task: 'Hva kan eventyret fortelle om norsk folkekultur?', solution: 'Eventyr speiler verdier og forestillinger i kulturen de kommer fra.' } ], solution: 'Eventyranalyse viser forståelse for sjangeren og dens kulturelle betydning.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-4',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Les et romantisk dikt og identifiser romantiske trekk.', hints: ['Se etter naturskildringer', 'Er følelser sentrale?', 'Finnes det nasjonale motiver?'], solution: 'Analysen viser evne til å gjenkjenne og forklare romantiske sjangertrekk.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-5',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-5', number: '5', type: 'classic', difficulty: 'vanskelig', task: 'Drøft: Hvordan bidro romantikken til norsk nasjonsbygging?', hints: ['Tenk på språk, folkekultur, litteratur, kunst', 'Var alle sider positive?'], solution: 'Drøftingen bør vise forståelse for romantikkens betydning og reflektere kritisk over epoken.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-10-1-ex-6',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-6', number: '6', type: 'multiple-choice', difficulty: 'lett', task: 'Hva kjennetegner romantikken som epoke?', options: [ { id: 'a', text: 'Vekt på fornuft, vitenskap og objektivitet', isCorrect: false }, { id: 'b', text: 'Fokus på følelser, natur, det nasjonale og individuell frihet', isCorrect: true }, { id: 'c', text: 'Samfunnskritikk, virkelighetsskildring og determinisme', isCorrect: false }, { id: 'd', text: 'Eksperimentering med form, fragmentering og fremmedgjøring', isCorrect: false } ], solution: 'Romantikken kjennetegnes av vekt på følelser fremfor fornuft, natur som inspirasjon, nasjonale og folkelige idealer, og individuell frihet og genialitet. I Norge var romantikken tett knyttet til nasjonsbyggingen etter 1814.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-10-1-ex-7',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-7', number: '7', type: 'multiple-choice', difficulty: 'lett', task: 'Hva var Wergeland og Welhaven uenige om?', options: [ { id: 'a', text: 'Om Norge burde ha en grunnlov', isCorrect: false }, { id: 'b', text: 'Om norsk kultur burde bryte med dansk tradisjon eller bygge på europeisk dannelse', isCorrect: true }, { id: 'c', text: 'Om kvinner burde ha stemmerett', isCorrect: false }, { id: 'd', text: 'Om romantikken var bedre enn realismen', isCorrect: false } ], solution: 'Wergeland ville ha et radikalt brudd med dansk kulturtradisjon og orientere seg mot folkekulturen. Welhaven mente man måtte bygge videre på europeisk dannelse og verdsatte formbevissthet. Konflikten representerte to syn på norsk kulturell identitet.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-10-1-ex-8',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Les Wergelands dikt «Til en Gran» (primærtekst over). Analyser diktet med vekt på naturskildring og nasjonal følelse. Hvordan bruker Wergeland granen som symbol?', hints: ['Hva representerer granen?', 'Hvordan kobles naturen til det nasjonale?', 'Hvilke følelser uttrykkes?'], solution: 'Analysen bør vise at Wergeland bruker granen som symbol for norsk natur og identitet. Naturskildringen er ikke bare beskrivende, men ladet med nasjonal følelse og romantisk idealisme.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-9',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-9', number: '9', type: 'classic', difficulty: 'medium', task: 'Les Welhavens «Digtets Aand» (primærtekst over). Analyser diktet med vekt på Welhavens kunstfilosofi. Hva mener han med "digtets aand"?', hints: ['Hva sier Welhaven om forholdet mellom form og innhold?', 'Hvordan skiller hans syn seg fra Wergelands?', 'Hva verdsetter Welhaven i diktningen?'], solution: 'Analysen bør vise at Welhaven verdsetter formbevissthet, balanse og kunstnerisk disiplin. "Digtets aand" handler om den indre kvaliteten i diktningen - at formen er like viktig som innholdet.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-10',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-10', number: '10', type: 'classic', difficulty: 'medium', task: 'Les Askeladden-eventyret (primærtekst over). Analyser eventyret med vekt på verdier og verdenssyn. Hvilke verdier belønnes, og hva forteller eventyret om norsk folkekultur?', hints: ['Hva kjennetegner Askeladden?', 'Hva skiller ham fra brødrene?', 'Hva slags klokskap verdsettes?'], solution: 'Analysen bør vise at Askeladden representerer verdier som nysgjerrighet, oppfinnsomhet og ydmykhet. Eventyret viser at den tilsynelatende ubetydelige kan vinne over de stolte og selvtilfredse - en verdi som er sentral i norsk folkekultur.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-11',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign Wergelands og Welhavens diktning (bruk primærtekstene). Analyser forskjeller i form, innhold og ideologi. Hvem representerer bedre romantikkens idealer, og hvorfor?', hints: ['Se på form: rim, rytme, språk', 'Se på innhold: temaer og verdier', 'Se på ideologi: syn på norsk kultur'], solution: 'Sammenligningen bør vise at Wergeland er mer følelsesladet, folkelig og formfri, mens Welhaven er mer kontrollert, formbevisst og klassisistisk. Begge representerer ulike sider av romantikken - Wergeland den lidenskapelige og folkelige, Welhaven den estetiske og formbevisste.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-1-ex-12',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-1-ex-12', number: '12', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et essay (500-700 ord): Romantikken og nasjonsbygging i Norge. Drøft hvordan litteratur, eventyrinnsamling og språkdebatt bidro til å forme en norsk nasjonal identitet etter 1814.', hints: ['Bruk eksempler fra Wergeland, Welhaven og Asbjørnsen & Moe', 'Diskuter også eventuelle skyggesider ved romantisk nasjonalisme', 'Trekk gjerne linjer til i dag'], solution: 'Essayet bør drøfte romantikkens rolle i nasjonsbyggingen med konkrete eksempler, vise kritisk refleksjon over idealisering av folkekulturen, og diskutere relevansen i dag.', allowsUpload: true, allowsCanvasDrawing: true },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.2: Realisme og naturalisme
// ============================================================================

export const CHAPTER_NORSK_VG1_10_2: TextbookChapter = {
  id: 'norsk-vg1-10-2',
  courseId: 'norsk-vg1',
  chapterNumber: '10.2',
  title: 'Realisme og naturalisme',
  description: 'Lær om realismen og naturalismen som litterære retninger med fokus på virkelighetsskildring og samfunnskritikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'forstå sammenhengen mellom litteratur og samfunnsutvikling',
  ],
  content: [
    {
      id: 'norsk-vg1-10-2-intro',
      type: 'text',
      content: `## Realisme og naturalisme (ca. 1850-1900)

Realismen og naturalismen var litterære retninger som brøt med romantikkens idealisering. De ville skildre virkeligheten slik den faktisk var.

**Historisk bakgrunn:**
- Industrialiseringen endret samfunnet
- Urbanisering og nye sosiale problemer
- Vitenskapelige fremskritt (Darwin, Marx)
- Ny tro på at samfunnet kunne analyseres og forbedres

**Fra romantikk til realisme:**
- Fra følelser til fornuft
- Fra idealisering til virkelighetsskildring
- Fra natur til samfunn
- Fra individ til sosiale forhold`,
    },
    {
      id: 'norsk-vg1-10-2-def-1',
      type: 'definition',
      title: 'Kjennetegn ved realismen',
      content: `**Realismens program:**
Litteraturen skulle "sette problemer under debatt" (Georg Brandes, 1871)

**Kjennetegn:**
- **Virkelighetsnær skildring:** Hverdagslige hendelser og miljøer
- **Samfunnskritikk:** Kritikk av sosiale forhold, religion, moral
- **Psykologisk troverdighet:** Komplekse, realistiske karakterer
- **Objektivitet:** Forfatteren trekker seg tilbake, viser frem
- **Samtidsemner:** Handler om nåtiden, ikke fortiden

**Viktige realistiske forfattere:**
- Henrik Ibsen (drama)
- Bjørnstjerne Bjørnson (drama, romaner)
- Alexander Kielland (romaner, noveller)
- Jonas Lie (romaner)`,
    },
    {
      id: 'norsk-vg1-10-2-def-2',
      type: 'definition',
      title: 'Kjennetegn ved naturalismen',
      content: `**Naturalismens program:**
Litteraturen skulle anvende naturvitenskapelig metode på menneskelivet.

**Kjennetegn:**
- **Determinisme:** Mennesket styres av arv og miljø
- **Vitenskapelig tilnærming:** Forfatteren som "forsker"
- **Mørke tema:** Fattigdom, sykdom, alkoholisme, galskap
- **Pessimisme:** Mennesket kan ikke unnslippe sin skjebne
- **Detaljert skildring:** Nøyaktige beskrivelser av miljø og handling

**Naturalisme vs. realisme:**
- Naturalismen er mer radikal og pessimistisk
- Sterkere vekt på arv og miljø
- Mørkere tema og skjebnetro`,
    },
    {
      id: 'norsk-vg1-10-2-def-3',
      type: 'definition',
      title: 'Sentrale forfattere',
      content: `**Alexander Kielland (1849-1906)**
- Samfunnskritiske romaner og noveller
- Kritiserte embetsverk, kirke og borgerskap
- Hovedverk: "Garman & Worse", "Gift", "Skipper Worse"

**Jonas Lie (1833-1908)**
- Psykologisk orientert forfatter
- Skildret familieforhold og sjøliv
- Hovedverk: "Familien på Gilje", "Kommandørens Døttre"

**Amalie Skram (1846-1905)**
- Nordens fremste naturalistiske forfatter
- Skildret kvinners vanskelige kår
- Hovedverk: "Constance Ring", "Hellemyrsfolket", "Professor Hieronimus"

**Arne Garborg (1851-1924)**
- Skrev på nynorsk
- Psykologiske romaner om bondesamfunnet
- Hovedverk: "Bondestudentar", "Trætte Mænd"`,
    },
    {
      id: 'norsk-vg1-10-2-def-4',
      type: 'definition',
      title: 'Forskjell realisme vs. naturalisme',
      content: `**Realismen:**
- Tro på at samfunnet kan endres
- Kritikk for å forbedre
- Karakterene kan ta valg

**Naturalismen:**
- Pessimistisk syn på endring
- Mennesket fanget av arv og miljø
- Karakterene er ofre for omstendigheter

**Eksempel på forskjellen:**
- **Realistisk:** Nora i "Et dukkehjem" velger å forlate mannen - hun har handlefrihet.
- **Naturalistisk:** Hovedpersonene i Skrams "Hellemyrsfolket" er fanget av arv, miljø og fattigdom.

**I praksis:**
Grensen mellom realisme og naturalisme er ikke alltid klar. Mange forfattere kombinerer trekk fra begge retninger.`,
    },
    {
      id: 'norsk-vg1-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Realistisk vs. naturalistisk behandling',
      problem: 'Sammenlign hvordan en realistisk og en naturalistisk forfatter kan behandle samme tema.',
      solution: `**Tema: Kvinners stilling i ekteskapet**

**Realistisk behandling (Ibsen):**
I "Et dukkehjem" viser Ibsen hvordan Nora er fanget i et ekteskap der hun behandles som et barn. Men hun har mulighet til å handle - hun velger å forlate.

**Naturalistisk behandling (Skram):**
I "Constance Ring" skildrer Skram en kvinne fanget i et ulykkelig ekteskap. Constance er formet av oppdragelse og samfunn. Hennes forsøk på å bryte ut fører til tragedie.

**Forskjeller:**
- Ibsen: Kritikk med håp om endring
- Skram: Nådeløs skildring av uunngåelig skjebne
- Begge kritiserer samfunnets behandling av kvinner`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-10-2-tekst-kielland',
      type: 'collapsible',
      title: 'Primærtekst: Alexander Kielland – novelle',
      content: [
        {
          id: 'norsk-vg1-10-2-tekst-kielland-inner',
          type: 'text',
          content: TEKST_KIELLAND_NOVELLE,
        },
      ],
    },
    {
      id: 'norsk-vg1-10-2-tekst-skram',
      type: 'collapsible',
      title: 'Primærtekst: Amalie Skram – utdrag fra «Constance Ring» (1885)',
      content: [
        {
          id: 'norsk-vg1-10-2-tekst-skram-inner',
          type: 'text',
          content: TEKST_SKRAM_CONSTANCE_RING_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-10-2-tekst-garborg',
      type: 'collapsible',
      title: 'Primærtekst: Arne Garborg – utdrag fra «Bondestudentar» (1883)',
      content: [
        {
          id: 'norsk-vg1-10-2-tekst-garborg-inner',
          type: 'text',
          content: TEKST_GARBORG_BONDESTUDENTAR_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-10-2-tekst-lie',
      type: 'collapsible',
      title: 'Primærtekst: Jonas Lie – utdrag fra «Familien på Gilje» (1883)',
      content: [
        {
          id: 'norsk-vg1-10-2-tekst-lie-inner',
          type: 'text',
          content: TEKST_LIE_FAMILIEN_PAA_GILJE_UTDRAG,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-10-2-ex-1',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Forklar den historiske bakgrunnen for realismen og naturalismen.', subTasks: [ { label: 'a', task: 'Hvilke samfunnsendringer skjedde på 1800-tallet?', solution: 'Industrialisering, urbanisering, vitenskapelige fremskritt, nye sosiale problemer.' }, { label: 'b', task: 'Hvordan reagerte litteraturen på disse endringene?', solution: 'Litteraturen begynte å skildre virkeligheten og kritisere samfunnsforhold.' }, { label: 'c', task: 'Hva mente Georg Brandes med at litteraturen skulle "sette problemer under debatt"?', solution: 'Litteraturen skulle ta opp aktuelle samfunnsproblemer og bidra til forandring.' } ], solution: 'Historisk kontekst forklarer hvorfor realismen og naturalismen oppstod.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-2',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Forklar forskjellen mellom realisme og naturalisme.', hints: ['Tenk på syn på mennesket', 'Tenk på optimisme/pessimisme', 'Tenk på arv og miljø'], solution: 'Realismen tror på endring og handlefrihet, naturalismen er mer deterministisk og pessimistisk.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-3',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Les en tekst av Alexander Kielland, Jonas Lie eller Amalie Skram og analyser den.', subTasks: [ { label: 'a', task: 'Hvilke samfunnsforhold kritiseres?', solution: 'Identifiser hva forfatteren kritiserer.' }, { label: 'b', task: 'Er teksten realistisk, naturalistisk, eller en blanding?', solution: 'Vurder om teksten viser handlefrihet eller determinisme.' }, { label: 'c', task: 'Hvordan var teksten kontroversiell i sin samtid?', solution: 'Mange realistiske/naturalistiske tekster skapte debatt.' } ], solution: 'Analysen viser forståelse for epokens kjennetegn.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-4',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Sammenlign romantikken med realismen/naturalismen.', hints: ['Hvordan skildres naturen?', 'Hva er viktigst - følelser eller fornuft?'], solution: 'Romantikken idealiserte, realismen/naturalismen skildret virkeligheten.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-5',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-5', number: '5', type: 'classic', difficulty: 'vanskelig', task: 'Drøft: Er det rimelig å kritisere forfattere fra 1800-tallet for holdninger som var vanlige i deres samtid?', hints: ['Tenk på historisk kontekst', 'Skal vi lese litteratur fra fortiden med nåtidens briller?'], solution: 'Drøftingen bør vise refleksjon over forholdet mellom historisk kontekst og nåtidige vurderinger.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-10-2-ex-6',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-6', number: '6', type: 'multiple-choice', difficulty: 'lett', task: 'Hva er den viktigste forskjellen mellom realisme og naturalisme?', options: [ { id: 'a', text: 'Realismen handler om bylivet, naturalismen om bondesamfunnet', isCorrect: false }, { id: 'b', text: 'Realismen tror på endring, naturalismen mener mennesket er styrt av arv og miljø', isCorrect: true }, { id: 'c', text: 'Realismen er norsk, naturalismen er fransk', isCorrect: false }, { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false } ], solution: 'Realismen tror på at samfunnet og enkeltmennesket kan endres, og bruker litteraturen til å kritisere for å forbedre. Naturalismen er mer pessimistisk og deterministisk - mennesket er fanget av arv og miljø og kan ikke unnslippe sin skjebne.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-10-2-ex-7',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-7', number: '7', type: 'multiple-choice', difficulty: 'lett', task: 'Hvem er «de fire store» i norsk litteratur?', options: [ { id: 'a', text: 'Wergeland, Welhaven, Asbjørnsen og Moe', isCorrect: false }, { id: 'b', text: 'Ibsen, Bjørnson, Kielland og Lie', isCorrect: true }, { id: 'c', text: 'Hamsun, Undset, Duun og Vesaas', isCorrect: false }, { id: 'd', text: 'Skram, Collett, Garborg og Vinje', isCorrect: false } ], solution: '«De fire store» er Henrik Ibsen, Bjørnstjerne Bjørnson, Alexander Kielland og Jonas Lie. De var de ledende norske forfatterne i realismens periode og formet norsk litteratur på avgjørende vis gjennom drama, romaner og noveller med samfunnskritisk innhold.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-10-2-ex-8',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Les Kielland-teksten (primærtekst over). Analyser tekstens samfunnskritikk. Hva kritiserer Kielland, og hvilke virkemidler bruker han?', hints: ['Se etter ironi', 'Hvem er målet for kritikken?', 'Hvordan fremstilles de ulike samfunnslagene?'], solution: 'Analysen bør identifisere Kiellands satiriske og ironiske stil og hans kritikk av borgerskap, embetsverk eller kirke. Kielland er kjent for elegant ironi som avslører dobbeltmoral og sosial urettferdighet.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-9',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-9', number: '9', type: 'classic', difficulty: 'medium', task: 'Les utdraget fra Skrams «Constance Ring» (primærtekst over). Analyser teksten med vekt på kvinners stilling. Hvordan skildrer Skram Constances situasjon?', hints: ['Se på Constances indre tanker', 'Hva sier teksten om ekteskapet?', 'Er Constance fri til å velge?'], solution: 'Analysen bør vise at Skram skildrer en kvinne fanget i et system der hun har lite handlefrihet. Constances indre liv og frustrasjoner avslører et samfunn som begrenser kvinner. Det naturalistiske preget vises i determinismen - hun er formet av oppdragelse og forventninger.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-10',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-10', number: '10', type: 'classic', difficulty: 'medium', task: 'Sammenlign Garborg og Lie (se primærtekstene). Garborg skriver om bondesamfunnet, Lie om borgerskapet. Hvilke likheter og forskjeller finner du i realismestilen?', hints: ['Se på miljøskildringen', 'Hvordan skildres personene?', 'Hva er den sosiale kritikken?'], solution: 'Sammenligningen bør vise at begge skildrer virkeligheten realistisk, men fra ulike miljøer. Garborg fokuserer på bondestudentens møte med byen og klassereise, Lie på familielivet i borgerskapet. Begge avslører sosiale spenninger og urettferdighet.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-11',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et essay (500-700 ord): Hvordan utfordret realismen romantikkens idealer? Bruk eksempler fra tekstene du har lest.', hints: ['Sammenlign konkrete trekk', 'Hva var romantikken opptatt av? Hva var realismen opptatt av?', 'Hvorfor skjedde overgangen?'], solution: 'Essayet bør vise klar forståelse for begge epokene og forklare overgangen med konkrete eksempler. Gode drøftinger viser at overgangen ikke var total - elementer fra romantikken lever videre.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-10-2-ex-12',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-10-2-ex-12', number: '12', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign en realistisk tekst fra 1800-tallet med en moderne roman som tar opp sosiale problemer (f.eks. fattigdom, rasisme, utenforskap). Finnes det likheter i tilnærmingen?', hints: ['Velg en moderne bok du kjenner', 'Sammenlign hvordan samfunnsproblemer skildres', 'Er forfatternes holdning lik eller forskjellig?'], solution: 'Oppgaven vurderes etter evne til å trekke linjer mellom historisk og moderne litteratur, sammenligne litterære grep, og reflektere over litteraturens rolle som samfunnskritikk på tvers av tider.', allowsUpload: true, allowsCanvasDrawing: true },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.1: Nyrealisme og modernisme
// ============================================================================

export const CHAPTER_NORSK_VG1_11_1: TextbookChapter = {
  id: 'norsk-vg1-11-1',
  courseId: 'norsk-vg1',
  chapterNumber: '11.1',
  title: 'Nyrealisme og modernisme',
  description: 'Lær om overgangen fra realisme til nyrealisme og tidlig modernisme i norsk litteratur (ca. 1890-1940).',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'forstå sammenhengen mellom litteratur og samfunnsutvikling',
  ],
  content: [
    {
      id: 'norsk-vg1-11-1-intro',
      type: 'text',
      content: `## Fra realisme til nye retninger

Rundt 1890 begynte forfattere å bevege seg bort fra den strenge realismen og naturalismen. Nye strømninger oppsto:

**Nyromantikk (ca. 1890-1905):**
- Reaksjon mot det grå og hverdagslige i realismen
- Tilbake til stemning, natur og følelser
- Eventyrlige og mystiske elementer
- Knut Hamsun som sentral skikkelse

**Nyrealisme (ca. 1905-1940):**
- Kombinerte realismens virkelighetsskildring med dypere psykologisk innsikt
- Ofte historiske romaner og bygdefortellinger
- Fokus på etikk, moral og menneskets plass i verden
- Sigrid Undset og Olav Duun som hovedfigurer

**Tidlig modernisme:**
- Eksperimentering med form og språk
- Fragmentering og nye perspektiver
- Påvirkning fra europeiske strømninger
- Oppbrudd fra tradisjonelle fortellerteknikker`,
    },
    {
      id: 'norsk-vg1-11-1-def-1',
      type: 'definition',
      title: 'Nyrealismens kjennetegn',
      content: `**Hva er nyrealisme?**

Nyrealismen var en litterær retning i Norge fra ca. 1905 til 1940:

**Kjennetegn:**
- Virkelighetsskildring, men med større psykologisk dybde
- Ofte historiske eller regionale miljøer
- Etiske og moralske spørsmål
- Mennesket i konflikt med samfunn eller natur
- Episke fortellinger over lange tidsrom

**Forskjell fra realismen:**
- Mindre fokus på samfunnskritikk som hovedmål
- Mer interesse for det tidløse og allmennmenneskelige
- Religiøse og eksistensielle temaer
- Sterkere psykologisk karaktertegning`,
    },
    {
      id: 'norsk-vg1-11-1-def-2',
      type: 'definition',
      title: 'Tidlig modernisme i Norge',
      content: `**Modernismens begynnelse**

**Kjennetegn på tidlig modernisme:**
- Eksperimentering med fortellerteknikk
- Brudd med kronologisk fortelling
- Indre monolog og strøm av bevissthet
- Fragmentering av virkelighetsoppfatningen
- Fremmedgjøring som tema

**I Norge:**
- Knut Hamsun som forløper med "Sult" (1890)
- Sigbjørn Obstfelder og symbolismen
- Senere: Tarjei Vesaas og andre

**Modernismen representerte et brudd med tradisjonelle fortellermåter og åpnet for nye måter å skildre menneskets indre liv på.**`,
    },
    {
      id: 'norsk-vg1-11-1-def-3',
      type: 'definition',
      title: 'Sigrid Undset (1882-1949)',
      content: `**Norges mest berømte kvinnelige forfatter**

Sigrid Undset mottok Nobelprisen i litteratur i 1928.

**Biografi:**
- Født i Kalundborg, Danmark, oppvokst i Kristiania
- Debuterte i 1907 med "Fru Marta Oulie"
- Konverterte til katolisismen i 1924
- Flyktet til USA under krigen, returnerte i 1945

**Hovedverk:**
- "Kristin Lavransdatter" (1920-1922) - trilogi fra middelalderen
- "Olav Audunssøn" (1925-1927) - todelt roman fra middelalderen
- "Jenny" (1911) - samtidsroman

**Kjennetegn:**
- Historisk realisme med grundig research
- Psykologisk dybde i karakterskildringen
- Etiske og religiøse temaer
- Kvinners liv og valg som sentralt tema`,
    },
    {
      id: 'norsk-vg1-11-1-def-4',
      type: 'definition',
      title: 'Olav Duun (1876-1939)',
      content: `**Mester i det episke**

**Biografi:**
- Født på Jøa i Namdalen
- Arbeidet som lærer
- Skrev på nynorsk
- Nominert til Nobelprisen flere ganger

**Hovedverk:**
- "Juvikfolke" (1918-1923) - seksbinds romanverk
- "Medmenneske" (1929)
- "Menneske og maktene" (1938)

**Kjennetegn:**
- Episke fortellinger over flere generasjoner
- Bondesamfunnet som ramme
- Mennesket i kamp med naturen og skjebnen
- Etiske og eksistensielle temaer`,
    },
    {
      id: 'norsk-vg1-11-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av nyrealistisk tekst',
      problem: 'Analyser nyrealistiske trekk i et utdrag fra Undsets "Kristin Lavransdatter".',
      solution: `**Utdrag (fritt gjengitt):**

"Kristin så utover dalen der solen gikk ned bak åsene. Hun tenkte på alt som hadde hendt - alle valgene hun hadde tatt, alle hun hadde såret. Nå, ved livets slutt, forsto hun at kjærligheten hun hadde søkt, hadde vært der hele tiden - i troen, i tilgivelsen."

**Nyrealistiske trekk:**
- **Psykologisk dybde:** Indre refleksjon og selvransakelse
- **Etiske og religiøse temaer:** Skyld og tilgivelse
- **Historisk ramme:** Middelalderen som setting
- **Det tidløse:** Universelle temaer som kjærlighet, tap, forsoning
- **Språk og stil:** Høytidelig, verdig tone`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-11-1-tekst-undset',
      type: 'collapsible',
      title: 'Primærtekst: Sigrid Undset – åpningen av «Kristin Lavransdatter» (1920)',
      content: [
        {
          id: 'norsk-vg1-11-1-tekst-undset-inner',
          type: 'text',
          content: TEKST_UNDSET_KRISTIN_LAVRANSDATTER_AAPNING,
        },
      ],
    },
    {
      id: 'norsk-vg1-11-1-tekst-hamsun',
      type: 'collapsible',
      title: 'Primærtekst: Knut Hamsun – åpningen av «Sult» (1890)',
      content: [
        {
          id: 'norsk-vg1-11-1-tekst-hamsun-inner',
          type: 'text',
          content: TEKST_HAMSUN_SULT_AAPNING,
        },
      ],
    },
    {
      id: 'norsk-vg1-11-1-tekst-duun',
      type: 'collapsible',
      title: 'Primærtekst: Olav Duun – utdrag fra «Juvikfolke» (1918-1923)',
      content: [
        {
          id: 'norsk-vg1-11-1-tekst-duun-inner',
          type: 'text',
          content: TEKST_DUUN_JUVIKFOLKE_UTDRAG,
        },
      ],
    },
    {
      id: 'norsk-vg1-11-1-tekst-obstfelder',
      type: 'collapsible',
      title: 'Primærtekst: Sigbjørn Obstfelder – «Byen»',
      content: [
        {
          id: 'norsk-vg1-11-1-tekst-obstfelder-inner',
          type: 'text',
          content: TEKST_OBSTFELDER_BYEN,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-11-1-ex-1',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Forklar forskjellen mellom realisme, nyrealisme og modernisme.', subTasks: [ { label: 'a', task: 'Hva kjennetegner realismen?', solution: 'Virkelighetsskildring, samfunnskritikk, fokus på hverdagsliv og sosiale forhold.' }, { label: 'b', task: 'Hvordan skiller nyrealismen seg fra realismen?', solution: 'Nyrealismen har mer psykologisk dybde, etiske/religiøse temaer, og fokuserer på det tidløse.' }, { label: 'c', task: 'Hva er typisk for tidlig modernisme?', solution: 'Eksperimentering med form, indre monolog, fragmentering, fremmedgjøring.' } ], solution: 'Å forstå forskjellene mellom disse retningene hjelper deg å plassere tekster i kontekst.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-2',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Les om Sigrid Undsets "Kristin Lavransdatter" og svar på spørsmålene.', hints: ['Du trenger ikke lese hele verket - les et sammendrag eller utdrag'], subTasks: [ { label: 'a', task: 'Hva handler trilogien om?', solution: 'Trilogien følger Kristin Lavransdatter gjennom livet i 1300-tallets Norge.' }, { label: 'b', task: 'Hvilke sentrale temaer behandles?', solution: 'Kjærlighet, tro, synd, tilgivelse, kvinners liv, individ vs. samfunn.' }, { label: 'c', task: 'Hvorfor er verket regnet som nyrealistisk?', solution: 'Historisk ramme kombinert med psykologisk dybde og tidløse konflikter.' } ], solution: 'Kristin Lavransdatter representerer nyrealismen på sitt beste.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-3',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Sammenlign en realistisk tekst (f.eks. Ibsen) med en nyrealistisk tekst (f.eks. Undset).', hints: ['Se på temaer, karakterskildring, setting og stil'], solution: 'Sammenligningen bør vise hvordan nyrealismen viderefører og fornyer den realistiske tradisjonen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-4',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Undersøk hvordan Olav Duuns "Juvikfolke" behandler forholdet mellom menneske og natur.', hints: ['Les et sammendrag eller utdrag', 'Hvordan påvirker naturen menneskenes liv?'], solution: 'I Duuns verk er naturen både livgivende og truende - den former menneskene og setter rammer for deres liv.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-5',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-5', number: '5', type: 'classic', difficulty: 'vanskelig', task: 'Drøft: Hvorfor tror du historiske romaner var så populære i nyrealismen?', hints: ['Tenk på nasjonsbygging og identitet', 'Hva gir historiske settinger mulighet til?'], solution: 'Drøftingen bør vise refleksjon over hvordan historiske romaner kunne behandle tidløse temaer og bidra til nasjonal identitet.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-11-1-ex-6',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-6', number: '6', type: 'multiple-choice', difficulty: 'lett', task: 'Hva kjennetegner modernismen i litteraturen?', options: [ { id: 'a', text: 'Idealisering av naturen og folkekulturen', isCorrect: false }, { id: 'b', text: 'Samfunnskritikk gjennom realistisk virkelighetsskildring', isCorrect: false }, { id: 'c', text: 'Eksperimentering med form, indre monolog og fremmedgjøring', isCorrect: true }, { id: 'd', text: 'Episke fortellinger over mange generasjoner', isCorrect: false } ], solution: 'Modernismen kjennetegnes av eksperimentering med form og fortellerteknikk, bruk av indre monolog og strøm av bevissthet, fragmentering av virkelighetsoppfatningen, og fremmedgjøring som sentralt tema. Modernismen brøt med tradisjonelle fortellermåter.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-11-1-ex-7',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-7', number: '7', type: 'multiple-choice', difficulty: 'lett', task: 'Hva skiller nyrealismen fra modernismen?', options: [ { id: 'a', text: 'Nyrealismen er eldre enn modernismen', isCorrect: false }, { id: 'b', text: 'Nyrealismen bruker tradisjonell fortelling med psykologisk dybde, modernismen eksperimenterer med formen', isCorrect: true }, { id: 'c', text: 'Nyrealismen handler om byer, modernismen om bygda', isCorrect: false }, { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false } ], solution: 'Nyrealismen (Undset, Duun) bruker tradisjonelle fortellergrep men med dypere psykologisk innsikt, etiske temaer og ofte historiske rammer. Modernismen (Hamsun, Obstfelder) eksperimenterer med formen - indre monolog, fragmentering, brudd med kronologi.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-11-1-ex-8',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Les åpningen av Hamsuns «Sult» (primærtekst over). Analyser teksten med vekt på fortellerteknikk. Hva er uvanlig med fortelleren? Hvordan skaper Hamsun en følelse av å være "inne i hodet" på hovedpersonen?', hints: ['Se på fortellerperspektivet', 'Legg merke til tankestrømmen', 'Hva er "upålitelig" ved fortelleren?', 'Hvordan skiller dette seg fra realistisk fortelling?'], solution: 'Analysen bør vise at Hamsun bruker jeg-forteller med strøm av bevissthet - vi er inne i hodet på en sulten, desperat mann. Fortelleren er upålitelig, tankene hopper, og grensen mellom virkelighet og fantasi er uklar. Dette var radikalt nytt i 1890 og peker mot modernismen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-9',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-9', number: '9', type: 'classic', difficulty: 'medium', task: 'Les åpningen av Undsets «Kristin Lavransdatter» (primærtekst over). Analyser teksten med vekt på historisk realisme. Hvordan skaper Undset en troverdig middelalderverden?', hints: ['Se på detaljene i miljøskildringen', 'Hvordan etableres tid og sted?', 'Hva forteller teksten om menneskers liv i middelalderen?'], solution: 'Analysen bør vise at Undset bruker grundig historisk research til å skape en troverdig middelalderverden med realistiske detaljer om dagligliv, religion, natur og sosiale forhold. Samtidig er de menneskelige følelsene og konfliktene tidløse.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-10',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-10', number: '10', type: 'classic', difficulty: 'medium', task: 'Les Obstfelders «Byen» (primærtekst over). Analyser diktet med vekt på modernistisk fremmedgjøring. Hvordan uttrykker Obstfelder opplevelsen av å være fremmed i verden?', hints: ['Se på billedbruken', 'Hva er stemningen?', 'Hvordan skiller dette seg fra romantisk naturdiktning?'], solution: 'Analysen bør vise at Obstfelder uttrykker en moderne fremmedgjøring - byen oppleves som fremmed og truende. Diktet mangler romantikkens harmoni og realismens objektive skildring. I stedet formidler det en subjektiv, forvirret opplevelse som peker mot modernismen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-11',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign Hamsun og Undset (bruk primærtekstene). De representerer to svært ulike tilnærminger til litteraturen. Analyser forskjellene i fortellerteknikk, tema og verdenssyn.', hints: ['Hamsun: modernistisk, subjektiv, eksperimentell', 'Undset: nyrealistisk, episk, tradisjonell', 'Hva er styrken i hver tilnærming?'], solution: 'Sammenligningen bør vise at Hamsun er eksperimentell og subjektiv med fokus på det indre livet, mens Undset er episk og tradisjonell med fokus på mennesket i historien. Begge skaper psykologisk dybde, men med helt ulike virkemidler. Hamsun peker mot modernismen, Undset viderefører og fornyer realismen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-1-ex-12',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-1-ex-12', number: '12', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et essay (500-700 ord): Hvordan brøt modernismen med realismen? Bruk eksempler fra Hamsun, Obstfelder og eventuelt andre forfattere.', hints: ['Hva var nytt med modernismen?', 'Hva forsvant fra realismen?', 'Hvorfor skjedde endringen?', 'Bruk konkrete teksteksempler'], solution: 'Essayet bør drøfte modernismens brudd med realismens objektive virkelighetsskildring: fra ytre til indre virkelighet, fra kronologisk til fragmentert fortelling, fra det sosiale til det eksistensielle. Gode eksempler fra tekstene styrker argumentasjonen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11.2: Lyrikk - fra romantikk til modernisme
// ============================================================================

export const CHAPTER_NORSK_VG1_11_2: TextbookChapter = {
  id: 'norsk-vg1-11-2',
  courseId: 'norsk-vg1',
  chapterNumber: '11.2',
  title: 'Lyrikk - fra romantikk til modernisme',
  description: 'Lær om utviklingen i norsk lyrikk fra romantikken til modernismen, med fokus på sentrale lyrikere og diktanalyse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og analysere tekster fra ulike litterære epoker med vekt på historisk kontekst',
    'bruke fagbegreper i analyse av tekster',
  ],
  content: [
    {
      id: 'norsk-vg1-11-2-intro',
      type: 'text',
      content: `## Norsk lyrikk gjennom tidene

Lyrikken har vært en sentral sjanger i norsk litteratur siden romantikken. Gjennom 1800- og 1900-tallet utviklet den seg fra romantiske naturdikt til modernistiske eksperimenter.

**Romantisk lyrikk (ca. 1830-1870):**
- Naturskildringer og nasjonale motiver
- Følelser i sentrum
- Rim og fast rytme
- Wergeland, Welhaven, Bjørnson

**Symbolisme (ca. 1890-1910):**
- Stemninger og antydninger
- Symboler og bilder
- Musikalsk språk
- Sigbjørn Obstfelder

**Modernistisk lyrikk (fra ca. 1910):**
- Brudd med tradisjonelle former
- Frie vers
- Hverdagsspråk og nye temaer
- Senere: Olav H. Hauge, Tarjei Vesaas m.fl.

**Å lese lyrikk krever oppmerksomhet på form, språk og bilder - det som står mellom linjene er ofte like viktig som det som står i dem.**`,
    },
    {
      id: 'norsk-vg1-11-2-def-1',
      type: 'definition',
      title: 'Romantikkens lyrikere',
      content: `**Henrik Wergeland (1808-1845)**
- Norges nasjonalskald
- Lidenskapelig og visjonær
- Temaer: frihet, natur, kjærlighet, menneskelighet

**Johan Sebastian Welhaven (1807-1873)**
- Klassisist og formbevisst
- Elegant og kontrollert stil
- Temaer: natur, skjønnhet, harmoni

**Bjørnstjerne Bjørnson (1832-1910)**
- Forfatter av nasjonalsangen
- Temaer: nasjonal stolthet, natur, folkelivet
- Nobelprisen i 1903

**Felles trekk i romantisk lyrikk:**
- Rim og rytme
- Naturbilder
- Nasjonale motiver
- Følelsesuttrykk`,
    },
    {
      id: 'norsk-vg1-11-2-def-2',
      type: 'definition',
      title: 'Symbolismen og Sigbjørn Obstfelder',
      content: `**Hva er symbolisme?**

Symbolismen oppsto i Frankrike på 1880-tallet og påvirket norsk lyrikk rundt 1890.

**Kjennetegn:**
- Stemninger fremfor klare budskap
- Symboler og antydninger
- Musikalitet i språket
- Det ubevisste og drømmeaktige

**Sigbjørn Obstfelder (1866-1900)**
- Debuterte med "Digte" (1893)
- Kjent for diktet "Jeg ser"
- Fremmedgjøring og undring som tema
- Kort liv, men stor innflytelse`,
    },
    {
      id: 'norsk-vg1-11-2-def-3',
      type: 'definition',
      title: 'Tidlig modernistisk lyrikk',
      content: `**Modernismen i lyrikken**

Fra tidlig 1900-tall begynte lyrikken å bryte med tradisjonelle former:

**Kjennetegn:**
- Frie vers uten fast rim og rytme
- Hverdagsspråk blandet med poetisk språk
- Nye temaer: fremmedgjøring, tvil, det urbane
- Eksperimentering med form

**Politisk lyrikk:**
- Rudolf Nilsen: Arbeiderdiktning
- Nordahl Grieg: Anti-krig og humanisme
- Diktningen som politisk våpen

**Lyrikkens utvikling viser hvordan kunst speiler sin tid.**`,
    },
    {
      id: 'norsk-vg1-11-2-def-4',
      type: 'definition',
      title: 'Diktanalyse i praksis',
      content: `**Hvordan analysere et dikt?**

**1. Førsteinntrykk:** Hva handler diktet om? Hvilken stemning skaper det?

**2. Form:** Strofer og linjedeling, rim og rytme, grafisk utforming.

**3. Språklige virkemidler:** Bilder og metaforer, symboler, gjentakelser, kontraster, besjeling, lydmalende ord.

**4. Innhold og tema:** Hvem er jeget? Hva skildres? Hvilke temaer behandles?

**5. Kontekst:** Når er diktet skrevet? Hvilken epoke tilhører det?

**6. Helhetlig tolkning:** Hvordan virker form og innhold sammen?`,
    },
    {
      id: 'norsk-vg1-11-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av romantisk dikt',
      problem: 'Analyser dette diktet av Henrik Wergeland.',
      solution: `**"Til min Gyldenlak" (utdrag, fritt gjengitt):**

"Lille blomst i vinduet mitt,
du minner meg om våren,
om solen og om livets lys
som skinner gjennom årene."

**Analyse:**
- **Form:** Fire linjer, enkel rytme, sangbar
- **Virkemidler:** Personifikasjon, symbolikk (blomsten = liv, håp)
- **Innhold:** Naturglede, livskraft, håp
- **Romantiske trekk:** Naturmotiv, følelser i sentrum, idealisering
- **Tolkning:** Typisk romantisk feiring av naturen og livet`,
    },
    // Primærtekster
    {
      id: 'norsk-vg1-11-2-tekst-nilsen',
      type: 'collapsible',
      title: 'Primærtekst: Rudolf Nilsen – «Revolusjonens røst»',
      content: [
        {
          id: 'norsk-vg1-11-2-tekst-nilsen-inner',
          type: 'text',
          content: TEKST_RUDOLF_NILSEN_REVOLUSJONENS_ROST,
        },
      ],
    },
    {
      id: 'norsk-vg1-11-2-tekst-grieg',
      type: 'collapsible',
      title: 'Primærtekst: Nordahl Grieg – «Til ungdommen» (1936)',
      content: [
        {
          id: 'norsk-vg1-11-2-tekst-grieg-inner',
          type: 'text',
          content: TEKST_NORDAHL_GRIEG_TIL_UNGDOMMEN,
        },
      ],
    },
    {
      id: 'norsk-vg1-11-2-tekst-bjornson-nasjonalsang',
      type: 'collapsible',
      title: 'Primærtekst: Bjørnstjerne Bjørnson – «Ja, vi elsker dette landet» (1859, alle strofer)',
      content: [
        {
          id: 'norsk-vg1-11-2-tekst-bjornson-nasjonalsang-inner',
          type: 'text',
          content: TEKST_BJORNSON_JA_VI_ELSKER,
        },
      ],
    },
    {
      id: 'norsk-vg1-11-2-tekst-obstfelder-regn',
      type: 'collapsible',
      title: 'Primærtekst: Sigbjørn Obstfelder – «Regn»',
      content: [
        {
          id: 'norsk-vg1-11-2-tekst-obstfelder-regn-inner',
          type: 'text',
          content: TEKST_OBSTFELDER_REGN,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-11-2-ex-1',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Analyser Obstfelders dikt "Jeg ser" med fokus på symbolistiske trekk.', subTasks: [ { label: 'a', task: 'Hvilken stemning skaper diktet?', solution: 'Diktet skaper en stemning av undring, fremmedgjøring og forvirring.' }, { label: 'b', task: 'Hvilke symboler finner du?', solution: 'Himmel, skyer, sol, regndråpe - alle kan tolkes symbolsk.' }, { label: 'c', task: 'Hvordan bryter diktet med romantikken?', solution: 'Ingen idealisering, ingen harmoni - tvert imot fremmedgjøring.' } ], solution: 'Analysen viser forståelse for symbolismen og Obstfelders særpreg.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-2',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Finn et dikt av Bjørnson eller Wergeland og analyser det.', hints: ['Bruk analyseskjemaet fra teoridelen', 'Se etter romantiske trekk'], solution: 'Analysen bør vise evne til å bruke fagbegreper og identifisere romantiske trekk.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-3',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Sammenlign et romantisk dikt med et symbolistisk dikt.', subTasks: [ { label: 'a', task: 'Hvordan skildres naturen i de to diktene?', solution: 'Romantikken idealiserer naturen, symbolismen bruker den til stemninger.' }, { label: 'b', task: 'Hvordan er formen forskjellig?', solution: 'Romantiske dikt har fast rim og rytme, symbolistiske kan være friere.' }, { label: 'c', task: 'Hva er forskjellen i stemning?', solution: 'Romantikken uttrykker glede/lengsel, symbolismen skaper tvetydige stemninger.' } ], solution: 'Sammenligningen viser forståelse for de to retningenes særpreg.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-4',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-4', number: '4', type: 'classic', difficulty: 'medium', task: 'Skriv et kort dikt (4-8 linjer) inspirert av romantikken eller symbolismen.', hints: ['Velg en stil og hold deg til den', 'Bruk naturmotiver', 'Tenk på stemning'], solution: 'Diktet bør vise forståelse for den valgte stilen.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-5',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-5', number: '5', type: 'classic', difficulty: 'vanskelig', task: 'Drøft: Hvorfor er lyrikk en viktig sjanger?', hints: ['Hva kan lyrikk uttrykke som prosa ikke kan?', 'Hvilken rolle spiller lyrikk i kulturen?'], solution: 'Drøftingen bør vise refleksjon over lyrikkens særpreg: evnen til å uttrykke følelser, skape stemninger, si mye med få ord.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-11-2-ex-6',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-6', number: '6', type: 'multiple-choice', difficulty: 'lett', task: 'Hvem skrev «Til ungdommen»?', options: [ { id: 'a', text: 'Henrik Wergeland', isCorrect: false }, { id: 'b', text: 'Rudolf Nilsen', isCorrect: false }, { id: 'c', text: 'Nordahl Grieg', isCorrect: true }, { id: 'd', text: 'Bjørnstjerne Bjørnson', isCorrect: false } ], solution: '«Til ungdommen» ble skrevet av Nordahl Grieg i 1936, med melodi av Otto Mortensen. Diktet er en oppfordring til ungdommen om å kjempe for fred og rettferdighet. Det ble spesielt aktualisert etter 22. juli 2011 og synges ofte ved nasjonale markeringer.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-11-2-ex-7',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-7', number: '7', type: 'multiple-choice', difficulty: 'lett', task: 'Hva er formålet med politisk lyrikk?', options: [ { id: 'a', text: 'Å underholde og more leseren', isCorrect: false }, { id: 'b', text: 'Å skildre naturen på en vakker måte', isCorrect: false }, { id: 'c', text: 'Å påvirke holdninger, protestere mot urett, eller mobilisere til handling', isCorrect: true }, { id: 'd', text: 'Å eksperimentere med språklige virkemidler', isCorrect: false } ], solution: 'Politisk lyrikk bruker diktets form og kraft til å påvirke holdninger, protestere mot urett, og mobilisere mennesker til handling. Den kombinerer følelsesappell med politisk budskap, noe som gjør den til et kraftfullt virkemiddel for samfunnsendring.', allowsUpload: false, allowsCanvasDrawing: false },
    },
    {
      id: 'norsk-vg1-11-2-ex-8',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Les Nordahl Griegs «Til ungdommen» (primærtekst over). Analyser diktet med vekt på anti-krigsbudskapet og de retoriske virkemidlene. Hvordan appellerer diktet til leseren?', hints: ['Se på billedbruken', 'Hva er de sentrale kontrastene?', 'Hvordan brukes gjentakelse?', 'Hvem er "du" i diktet?'], solution: 'Analysen bør vise at Grieg bruker kontraster (krig/fred, ødeleggelse/skapelse), direkte henvendelse ("du"), gjentakelse og oppfordrende tone for å skape et kraftfullt anti-krigsbudskap. Diktet appellerer til ungdommens idealisme og ansvar for fremtiden.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-9',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-9', number: '9', type: 'classic', difficulty: 'medium', task: 'Les Rudolf Nilsens «Revolusjonens røst» (primærtekst over). Analyser diktet som arbeiderdiktning. Hvordan uttrykker Nilsen arbeidernes perspektiv og kamp?', hints: ['Hvem er «vi» i diktet?', 'Hva er budskapet?', 'Hvilke virkemidler brukes?', 'Hva er sammenhengen med arbeiderbevegelsen?'], solution: 'Analysen bør vise at Nilsen skriver fra et kollektivt "vi"-perspektiv som representerer arbeiderklassen. Diktet bruker kraftfulle bilder, ritmisk språk og politisk appell for å uttrykke krav om rettferdighet og solidaritet.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-10',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-10', number: '10', type: 'classic', difficulty: 'medium', task: 'Les alle strofene av «Ja, vi elsker dette landet» (primærtekst over). Analyser nasjonalsangen med vekt på nasjonale verdier. Hvilke verdier feires, og hvordan har sangenes betydning endret seg over tid?', hints: ['Se på hva de ulike strofene handler om', 'Hvilke historiske hendelser refereres?', 'Hva sier teksten om norsk identitet?', 'Hvordan oppfatter vi teksten i dag vs. i 1859?'], solution: 'Analysen bør vise at nasjonalsangen uttrykker verdier som frihet, natur, historie og kampen for selvstendighet. De ulike strofene dekker norsk historie, naturen, og forsvaret av landet. Teksten må forstås i kontekst av 1859 (kampen for nasjonal identitet), men har fått fornyet betydning i ulike epoker.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-11',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign politisk lyrikk fra ulike epoker: Rudolf Nilsens arbeiderdiktning, Nordahl Griegs anti-krigsdikt, og en moderne protestsang eller et moderne protestdikt du kjenner. Hva er likt og hva er forskjellig?', hints: ['Se på tema, form og målgruppe', 'Hvordan brukes følelser i de ulike tekstene?', 'Hva er det politiske budskapet?', 'Har formen endret seg over tid?'], solution: 'Sammenligningen bør vise at politisk lyrikk har endret seg i form (fra bunden til fri vers, fra trykt til digital distribusjon), men at de grunnleggende grepene er like: appell til følelser, fellesskapsfølelse, krav om rettferdighet. Moderne protestsanger bruker ofte enklere språk og mer direkte budskap.', allowsUpload: true, allowsCanvasDrawing: true },
    },
    {
      id: 'norsk-vg1-11-2-ex-12',
      type: 'exercise',
      exercise: { id: 'norsk-vg1-11-2-ex-12', number: '12', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et essay (500-700 ord): Lyrikken og de politiske bevegelsene. Drøft hvilken rolle dikt og sanger har spilt i politiske bevegelser i Norge og verden. Bruk eksempler fra tekstene du har lest, og gjerne flere.', hints: ['Tenk på arbeiderbevegelsen, fredsbevegelsen, borgerrettsbevegelsen', 'Hvorfor er dikt og sanger så kraftfulle politiske virkemidler?', 'Bruk konkrete eksempler', 'Drøft også begrensningene - hva kan lyrikken ikke gjøre?'], solution: 'Essayet bør drøfte lyrikkens rolle i politiske bevegelser med konkrete eksempler (Nilsen, Grieg, nasjonalsangen, eventuelt internasjonale eksempler). Det bør reflektere over hvorfor lyrikken er et kraftfullt politisk virkemiddel (følelsesappell, fellesskap, kort form som er lett å huske) og eventuelt diskutere begrensninger.', allowsUpload: true, allowsCanvasDrawing: true },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 3
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL3: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_8_1,
  CHAPTER_NORSK_VG1_8_2,
  CHAPTER_NORSK_VG1_9_1,
  CHAPTER_NORSK_VG1_9_2,
  CHAPTER_NORSK_VG1_10_1,
  CHAPTER_NORSK_VG1_10_2,
  CHAPTER_NORSK_VG1_11_1,
  CHAPTER_NORSK_VG1_11_2,
];

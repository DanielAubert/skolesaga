/**
 * Norsk VG1 - Del 3: Kapittel 1.3, 1.6, 2.3, 2.7, 2.8
 * Debattinnlegg, retorikk, drama, dramaturgi og adaptasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_COLLETT_DEBATTEKST,
  TEKST_BJORNSON_DEBATTEKST,
  TEKST_HOLBERG_JEPPE_SCENE,
  TEKST_IBSEN_PEER_GYNT_SCENE,
} from './textbook-content-norsk-vg1-tekster';

// ============================================================================
// KAPITTEL 1.3: Debattinnlegg og meningsytring
// ============================================================================

export const CHAPTER_NORSK_VG1_1_3: TextbookChapter = {
  id: 'norsk-vg1-1-3',
  courseId: 'norsk-vg1',
  chapterNumber: '1.3',
  title: 'Debattinnlegg og meningsytring',
  description: 'Lær å skrive effektive debattinnlegg og delta i offentlig debatt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive debattinnlegg og andre argumenterende tekster',
    'bruke retoriske appellformer og virkemidler',
  ],
  content: [
    {
      id: 'norsk-vg1-1-3-intro',
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
      id: 'norsk-vg1-1-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Debattinnlegg** | Tekst der man argumenterer for et synspunkt |
| **Tese** | Hovedpåstanden du argumenterer for |
| **Argument** | Begrunnelse som støtter tesen |
| **Motargument** | Argument mot ditt standpunkt |
| **Feilslutning** | Ugyldig eller villedende argumentasjon |
| **Stråmann** | Å forvrenge motstanderens argument |
| **Offentlig debatt** | Meningsutveksling i mediene |
| **Innlegg** | Kortere meningsytring i avisen |`,
    },
    {
      id: 'norsk-vg1-1-3-def-1',
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
      id: 'norsk-vg1-1-3-def-2',
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
      id: 'norsk-vg1-1-3-example-1',
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
      id: 'norsk-vg1-1-3-tekst-collett',
      type: 'collapsible',
      title: 'Primærtekst: Camilla Collett – debattekst',
      content: [
        {
          id: 'norsk-vg1-1-3-tekst-collett-inner',
          type: 'text',
          content: TEKST_COLLETT_DEBATTEKST,
        },
      ],
    },
    {
      id: 'norsk-vg1-1-3-tekst-bjornson',
      type: 'collapsible',
      title: 'Primærtekst: Bjørnstjerne Bjørnson – debattekst',
      content: [
        {
          id: 'norsk-vg1-1-3-tekst-bjornson-inner',
          type: 'text',
          content: TEKST_BJORNSON_DEBATTEKST,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et debattinnlegg (200-300 ord) om et tema du engasjerer deg i.',
        hints: ['Følg strukturen: innledning, hoveddel med argumenter, avslutning', 'Bruk minst ett fakta-argument'],
        solution: 'Innlegget vurderes etter struktur, argumentasjon og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et debattinnlegg i en avis og analyser argumentasjonen. Hvilke retoriske virkemidler brukes?',
        hints: ['Se etter etos, patos og logos', 'Vurder om argumentene er sterke eller svake'],
        solution: 'Analysen skal identifisere argumenter, virkemidler og vurdere effektiviteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et motinnlegg til debattinnlegget du fant i oppgave 2. Argumenter for motsatt standpunkt.',
        hints: ['Respekter motstanderens synspunkt', 'Bruk egne argumenter, ikke bare kritikk'],
        solution: 'Motinnlegget skal vise evne til å argumentere fra ulike perspektiver.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-4',
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
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en klassedebatt om et aktuelt tema. Forbered argumenter for begge sider.',
        hints: ['Trekk lodd om hvem som skal argumentere for hva', 'Respekter taletid og debattregler'],
        solution: 'Muntlig debatt øver argumentasjon, lytting og saklig uenighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    // New exercises 6-11
    {
      id: 'norsk-vg1-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-6',
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
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-7',
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
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les Camilla Colletts debattekst (primærtekst over). Analyser teksten med vekt på argumentasjon og retoriske virkemidler. Hvordan bygger hun opp sin argumentasjon? Hvilke retoriske appellformer (etos, patos, logos) bruker hun?',
        hints: ['Se etter hvordan Collett henvender seg til leseren', 'Legg merke til bruken av eksempler og følelsesappell', 'Vurder hvordan hun bygger troverdighet'],
        solution: 'Analysen bør identifisere Colletts hovedargumenter, hennes bruk av etos (som kvinne med erfaring), patos (følelsesappell for kvinners situasjon) og logos (logiske argumenter for endring). Collett bruker ofte personlige erfaringer og observasjoner som utgangspunkt for sine argumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign debattstilene til Camilla Collett og Bjørnstjerne Bjørnson (se primærtekstene over). Hva er likt og hva er forskjellig i måten de argumenterer på? Hvem av dem mener du er mest overbevisende, og hvorfor?',
        hints: ['Se på ordvalg, tone og hvem de henvender seg til', 'Vurder balansen mellom etos, patos og logos hos begge', 'Tenk på konteksten de skriver i'],
        solution: 'Sammenligningen bør vise at Collett ofte argumenterer fra personlig erfaring og med fokus på kvinners situasjon, mens Bjørnson bruker en mer direkte og kampklar tone. Begge bruker retoriske virkemidler effektivt, men med ulik stil og ulike appellformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et debattinnlegg (400-500 ord) der du responderer på enten Colletts eller Bjørnsons debattekst. Du kan velge å støtte eller argumentere mot deres synspunkt, men du må forholde deg til teksten og bruke argumentasjon.',
        hints: ['Referer til den opprinnelige teksten', 'Bruk minst tre argumenter', 'Møt motargumenter', 'Avslutt med en tydelig oppfordring'],
        solution: 'Debattinnlegget vurderes etter evne til å respondere på en historisk tekst, bygge opp egen argumentasjon, bruke retoriske virkemidler bevisst, og skrive med god struktur og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv to debattinnlegg om samme tema (valgfritt), ett for og ett mot. Hvert innlegg skal være på 200-300 ord. Reflekter deretter kort (100 ord) over hva du lærte av å argumentere for begge sider.',
        hints: ['Velg et tema du synes er vanskelig å ta stilling til', 'Bruk ulike typer argumenter i hvert innlegg', 'Prøv å gjøre begge innleggene like overbevisende'],
        solution: 'Oppgaven tester evnen til å se en sak fra flere sider og argumentere overbevisende uansett standpunkt. Refleksjonen bør vise innsikt i at gode argumenter finnes på begge sider av de fleste debatter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-12',
        number: '12',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en "stråmann-feilslutning"?',
        options: [
          { id: 'a', text: 'Å bruke en berømt person som autoritet', isCorrect: false },
          { id: 'b', text: 'Å forvrenge motstanderens argument for å gjøre det lettere å angripe', isCorrect: true },
          { id: 'c', text: 'Å appellere til folks følelser i stedet for fornuft', isCorrect: false },
          { id: 'd', text: 'Å bruke statistikk på en misvisende måte', isCorrect: false },
        ],
        solution: 'En stråmann-feilslutning innebærer at man presenterer en forenklet eller forvrengt versjon av motstanderens argument, for deretter å angripe denne "stråmannen" i stedet for det faktiske argumentet. Dette er en uærlig debatteknikk som bør unngås.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-13',
        number: '13',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken feilslutning brukes her: "Du bør ikke lytte til legen din om kosthold - han er jo overvektig selv!"',
        options: [
          { id: 'a', text: 'Falsk dilemma', isCorrect: false },
          { id: 'b', text: 'Appell til mengden', isCorrect: false },
          { id: 'c', text: 'Ad hominem (personangrep)', isCorrect: true },
          { id: 'd', text: 'Sirkelargumentasjon', isCorrect: false },
        ],
        solution: 'Dette er et ad hominem-argument (personangrep). I stedet for å vurdere legens faglige råd, angriper man personen. En leges kunnskap om kosthold er uavhengig av legens egen vekt. Argumentet er derfor ugyldig.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder kildetroverdighet. Du skal skrive et debattinnlegg om klimaendringer. Ranger disse kildene fra mest til minst troverdig, og begrunn rangeringen:',
        subTasks: [
          {
            label: 'a',
            task: 'FNs klimapanel (IPCC)',
            solution: 'Svart troverdig - internasjonal ekspertorganisasjon med fagfellevurdert forskning.',
          },
          {
            label: 'b',
            task: 'En oljeindustri-finansiert "forskningsstiftelse"',
            solution: 'Lav troverdighet - interessekonflikt kan påvirke konklusjonene.',
          },
          {
            label: 'c',
            task: 'En klimaforsker ved et anerkjent universitet',
            solution: 'Høy troverdighet - fagperson, men sjekk om forskningen er fagfellevurdert.',
          },
          {
            label: 'd',
            task: 'Et innlegg på sosiale medier fra en privatperson',
            solution: 'Lav troverdighet - ikke nødvendigvis faglig bakgrunn eller kvalitetssikring.',
          },
        ],
        hints: ['Tenk på hvem som har finansiert forskningen', 'Vurder faglig bakgrunn og ekspertise', 'Er kilden fagfellevurdert?'],
        solution: 'Riktig rangering (mest til minst): IPCC, klimaforsker ved universitet, oljefinansiert stiftelse, privatperson på sosiale medier. Kildekritikk er sentralt i god argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser argumentstrukturen i dette debattinnlegget:',
        subTasks: [
          {
            label: 'a',
            task: 'Les innlegget: "Skolen bør starte klokka 9 fordi forskning viser at ungdom har en forskjøvet døgnrytme. Studier fra NTNU dokumenterer at elever presterer bedre med senere skolestart. Dessuten får mange elever for lite søvn, noe som går ut over både læring og helse. Noen vil kanskje si at arbeidslivet krever tidlig oppmøte, men skolen bør prioritere læring, og dessuten er fleksibel arbeidstid vanlig i mange yrker. Derfor bør skolen starte klokka 9." Identifiser tesen i innlegget.',
            solution: 'Tesen er: "Skolen bør starte klokka 9."',
          },
          {
            label: 'b',
            task: 'Identifiser hovedargumentene (det bør være minst to).',
            solution: 'Argument 1: Ungdom har forskjøvet døgnrytme (støttet av forskning). Argument 2: Elever får for lite søvn, noe som påvirker læring og helse.',
          },
          {
            label: 'c',
            task: 'Hvordan behandler innlegget motargumenter?',
            solution: 'Motargumentet om at arbeidslivet krever tidlig oppmøte blir imøtegått med to poenger: at skolen bør prioritere læring, og at fleksibel arbeidstid er vanlig.',
          },
        ],
        solution: 'Et godt debattinnlegg har en tydelig tese, flere argumenter med begrunnelse, og behandler relevante motargumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-16',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et motinnlegg (300-400 ord) til debattinnlegget om skolestart i oppgave 15. Argumenter for at skolen IKKE bør starte klokka 9.',
        hints: [
          'Finn egne argumenter - ikke bare kritiser motstanderens',
          'Tenk på praktiske konsekvenser for familier og samfunn',
          'Bruk fakta og logikk, ikke bare påstander',
          'Behandle motstanderens beste argument seriøst',
        ],
        solution: 'Motinnlegget vurderes etter evnen til å argumentere overbevisende for det motsatte standpunkt, bruk av egne argumenter (ikke bare kritikk), og behandling av motpartens argumenter på en saklig måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-17',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-17',
        number: '17',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken retorisk appellform appellerer til følelser?',
        options: [
          { id: 'a', text: 'Etos', isCorrect: false },
          { id: 'b', text: 'Patos', isCorrect: true },
          { id: 'c', text: 'Logos', isCorrect: false },
          { id: 'd', text: 'Kairos', isCorrect: false },
        ],
        solution: 'Patos er den retoriske appellformen som appellerer til mottakerens følelser. Etos handler om avsenderens troverdighet, logos om logikk og fornuft, og kairos om timing og det rette øyeblikket.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-18',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser feilslutninger i disse argumentene og forklar hva som er galt:',
        subTasks: [
          {
            label: 'a',
            task: '"Hvis vi tillater 18-åringer å stemme, kommer snart 10-åringer til å få stemmerett også."',
            solution: 'Skråplansargument (slippery slope) - påstår at én endring automatisk fører til ekstreme konsekvenser uten å begrunne sammenhengen.',
          },
          {
            label: 'b',
            task: '"Vi har alltid gjort det slik, så det må være den beste måten."',
            solution: 'Appell til tradisjon - at noe er gammelt betyr ikke at det er best. Tradisjoner kan være gode eller dårlige.',
          },
          {
            label: 'c',
            task: '"Professor Hansen mener vi bør spise mer fisk, så da må det være riktig."',
            solution: 'Appell til autoritet uten begrunnelse - selv eksperter kan ta feil. Argumentet mangler selve begrunnelsen for hvorfor fisk er bra.',
          },
          {
            label: 'd',
            task: '"80% av befolkningen støtter denne politikken, så den må være riktig."',
            solution: 'Appell til mengden (ad populum) - at noe er populært betyr ikke at det er riktig eller sant.',
          },
        ],
        solution: 'Å gjenkjenne feilslutninger gjør deg til en bedre debattant og en mer kritisk leser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-ex-19',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-3-ex-19',
        number: '19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn et debattinnlegg fra en norsk avis (f.eks. Aftenposten Si;D, VG Meninger, eller en lokalavis). Analyser innlegget med vekt på:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er tesen, og hvordan presenteres den?',
            solution: 'Analysen skal identifisere hovedstandpunktet og vurdere hvor tydelig det kommer frem.',
          },
          {
            label: 'b',
            task: 'Hvilke typer argumenter brukes (fakta, eksempler, autoritet, logikk)?',
            solution: 'Identifiser minst 2-3 argumenter og kategoriser dem.',
          },
          {
            label: 'c',
            task: 'Finnes det feilslutninger eller svake argumenter? Hvilke?',
            solution: 'Vurder om argumentene er holdbare eller om de inneholder feilslutninger.',
          },
          {
            label: 'd',
            task: 'Hvordan kunne innlegget vært styrket?',
            solution: 'Gi konkrete forslag til forbedringer.',
          },
        ],
        hints: ['Velg et innlegg om et tema du er engasjert i', 'Bruk begreper fra kapittelet', 'Vær saklig i kritikken'],
        solution: 'Oppgaven tester evnen til å analysere reelle debattinnlegg med faglig terminologi og kritisk blikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler', 'skrive fagartikler som greier ut og drøfter'],
      },
    },
    {
      id: 'norsk-vg1-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Debattinnlegg:** Kortere meningsytring i aviser/medier som tar stilling til et aktuelt tema
- **Tese:** Den sentrale påstanden eller hovedsynspunktet du argumenterer for
- **Argument vs. påstand:** Et argument har begrunnelse, en påstand mangler underbygging
- **Feilslutninger:** Logiske feil som stråmann, personangrep og falsk dilemma
- **Motargument:** Å vise at du forstår og kan imøtegå andres synspunkt

**Det viktigste å huske:**
1. Et godt debattinnlegg har tydelig struktur: innledning med tese, hoveddel med argumenter, avslutning med oppfordring
2. Bruk fakta, eksempler og logikk for å underbygge argumentene dine
3. Møt motargumenter saklig - det styrker din egen troverdighet

**Kompetansemål dette kapittelet dekker:**
- Skrive debattinnlegg og andre argumenterende tekster
- Bruke retoriske appellformer og virkemidler`,
    },
    {
      id: 'norsk-vg1-1-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.1 Retorikk og argumentasjon** – Grunnleggende retoriske begreper for argumentasjon
- **1.4 Kronikk og leserinnlegg** – Andre argumenterende sjangre i mediene
- **1.5 Retorisk analyse** – Analyser argumenterende tekster i dybden
- **5.1 Muntlig kommunikasjon** – Presenter argumenter muntlig`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Drama og teater
// ============================================================================

export const CHAPTER_NORSK_VG1_2_3: TextbookChapter = {
  id: 'norsk-vg1-2-3',
  courseId: 'norsk-vg1',
  chapterNumber: '2.3',
  title: 'Drama og teater',
  description: 'Lær om dramaet som litterær sjanger og teatrets virkemidler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke dramatiske tekster med vekt på form og innhold',
    'forstå samspillet mellom tekst og scenisk fremføring',
  ],
  content: [
    {
      id: 'norsk-vg1-2-3-intro',
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
      id: 'norsk-vg1-2-3-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Drama** | Litteratur skrevet for scenen |
| **Dialog** | Samtale mellom karakterer |
| **Monolog** | Lengre tale av én karakter |
| **Sceneanvisning** | Forfatterens instruksjoner om handling og scene |
| **Tragedie** | Alvorlig drama med ulykkelig utgang |
| **Komedie** | Humoristisk drama med lykkelig utgang |
| **Klimaks** | Handlingens høydepunkt |
| **Katarsis** | Følelsesmessig renselse hos publikum |`,
    },
    {
      id: 'norsk-vg1-2-3-def-1',
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
      id: 'norsk-vg1-2-3-def-2',
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
      id: 'norsk-vg1-2-3-def-3',
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
      id: 'norsk-vg1-2-3-def-fosse',
      type: 'definition',
      title: 'Jon Fosse og samtidsdramatikk',
      content: `**Jon Fosse (f. 1959) – Nobelprisvinner 2023**
Jon Fosse er en av verdens mest spilte nålevende dramatikere. I 2023 mottok han Nobelprisen i litteratur for sitt «nyskapende skuespill og prosa som gir stemme til det usigelige». Hans dramatikk representerer et radikalt brudd med den realistiske tradisjonen.

**Sentrale skuespill:**
- **«Nokon kjem til å komme»** (1996): Et par venter på noen som kanskje kommer
- **«Eg er vinden»** (2007): To stemmer i en båt, mellom liv og død
- **«Namnet»** (1995): En ung mor venter på barnets far

**Fosses dramatiske stil:**
- **Minimalisme:** Enkle, nedstrippede scener med få karakterer
- **Pauser og stillhet:** Det usagte er like viktig som ordene
- **Repetisjon:** Setninger gjentas med små variasjoner, skaper rytme
- **Nynorsk:** Skriver på nynorsk, noe som gir et eget toneleie
- **Poetisk språk:** Grensen mellom drama og lyrikk viskes ut

**Sentrale temaer:**
- **Venting:** Karakterer venter på noen eller noe
- **Ensomhet og lengsel:** Mennesker som ikke når hverandre
- **Det usagte:** Det som ligger mellom ordene
- **Naturen:** Havet, vinden, lyset som meningsbærende elementer
- **Eksistens:** Grensen mellom liv og død, væren og intet

**Andre samtidige norske dramatikere:**
- **Cecilie Løveid** (f. 1951): Eksperimentell, feministisk, lyrisk
- **Arne Lygre** (f. 1968): Minimalistisk, utforsker relasjoner og identitet

*For å virkelig forstå Fosses dramatikk, bør du se eller lese et helt stykke. Stykkene hans spilles regelmessig på norske teater.*`,
    },
    {
      id: 'norsk-vg1-2-3-example-fosse',
      type: 'example',
      title: 'Eksempel: Fosses dramatiske stil',
      problem: 'Hva kjennetegner Jon Fosses dramatiske språk, og hvordan skiller det seg fra Ibsens realisme?',
      solution: `**Fosses minimalistiske dialog:**
Fosses karakterer snakker ofte i korte, ufullstendige setninger. Pausene er like viktige som ordene. En typisk replikkveksling kan se slik ut:

> HO: Du kjem ikkje
> HAN: Nei
> HO: Du seier du kjem
> HAN: Ja
> (pause)
> HO: Men du kjem ikkje
> *(Fra «Nokon kjem til å komme», forkortet)*

**Analyse av stilen:**
- **Repetisjon:** «Du kjem» / «du kjem ikkje» gjentas, skaper en hypnotisk rytme
- **Pauser:** Scenenanvisningen «pause» tvinger frem stillhet, det usagte
- **Minimalisme:** Ingen forklaringer, ingen utbroderinger
- **Undertekst:** Alt det som ikke sies – frykt, håp, tvil – ligger under overflaten

**Sammenligning med Ibsens realisme:**
| Ibsen | Fosse |
|-------|-------|
| Fyldige dialoger med informasjon | Korte, repetitive replikker |
| Realistiske situasjoner | Abstrakte, drømmeaktige situasjoner |
| Psykologisk analyse gjennom tale | Psykologi gjennom stillhet og pauser |
| Handlingsdrevet | Stemningsdrevet |
| Samfunnskritikk | Eksistensiell utforskning |

Der Ibsen avslører hemmeligheter gjennom dialog, lar Fosse hemmelighetene forbli usagte. Begge utforsker menneskelig psykologi, men med helt ulike virkemidler.`,
    },
    {
      id: 'norsk-vg1-2-3-example-1',
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
      id: 'norsk-vg1-2-3-tekst-holberg',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – scene fra «Jeppe på Bjerget»',
      content: [
        {
          id: 'norsk-vg1-2-3-tekst-holberg-inner',
          type: 'text',
          content: TEKST_HOLBERG_JEPPE_SCENE,
        },
      ],
    },
    {
      id: 'norsk-vg1-2-3-tekst-ibsen-peer',
      type: 'collapsible',
      title: 'Primærtekst: Henrik Ibsen – scene fra «Peer Gynt» (1867)',
      content: [
        {
          id: 'norsk-vg1-2-3-tekst-ibsen-peer-inner',
          type: 'text',
          content: TEKST_IBSEN_PEER_GYNT_SCENE,
        },
      ],
    },
    // Existing exercises 1-5
    {
      id: 'norsk-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-1',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Aristoteles tre enheter og hvorfor moderne drama ofte bryter med dem.',
        hints: ['Tenk på hva de tre enhetene innebærer', 'Hvorfor kan det være kunstnerisk interessant å bryte regler?'],
        solution: 'De tre enheter (tid, sted, handling) skapte konsentrasjon i klassisk drama. Moderne drama bryter med dem for å utforske nye muligheter, vise kompleksitet, og utfordre publikums forventninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-3',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dramatisk scene (1-2 sider) med to karakterer i konflikt.',
        hints: ['Bruk dialog og sceneanvisninger', 'La konflikten komme frem gjennom det som sies OG det som ikke sies', 'Tenk på undertekst'],
        solution: 'Scenen vurderes etter bruk av dramatiske virkemidler, karaktertegning og konfliktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-5',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    // New exercises 6-12
    {
      id: 'norsk-vg1-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-6',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-7',
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
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les scenen fra Holbergs «Jeppe på Bjerget» (primærtekst over). Analyser Holbergs komiske virkemidler. Hva gjør scenen morsom, og er det noe alvorlig under humoren?',
        hints: ['Se etter overdrivelser og komiske situasjoner', 'Tenk på hvem som er målet for satiren', 'Hva sier scenen om samfunnsforholdene på 1700-tallet?'],
        solution: 'Analysen bør identifisere komiske virkemidler som overdrivelse, situasjonskomikk, og verbal humor. Holberg bruker humor til å kritisere samfunnsforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les scenen fra Ibsens «Peer Gynt» (primærtekst over). Analyser scenen med vekt på karakteren Peer Gynt og temaene som kommer frem. Hva avslører scenen om Peer som person?',
        hints: ['Se på hva Peer sier og gjør', 'Hva er hans selvbilde vs. virkeligheten?', 'Hvordan bruker Ibsen fantasien som virkemiddel?'],
        solution: 'Analysen bør vise at Peer Gynt er en fantasifull, men selvbedragende karakter. Ibsen bruker Peers fantasi som dramatisk virkemiddel for å utforske identitet og selvbedrag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Holbergs og Ibsens bruk av humor og ironi i de to primærtekstene. Hvilke likheter og forskjeller finner du?',
        hints: ['Se på hva slags humor de bruker', 'Hvem retter humoren seg mot?', 'Er humoren et mål i seg selv, eller et virkemiddel?'],
        solution: 'Holberg bruker komedie og satire for å kritisere samfunnsforhold direkte, mens Ibsen bruker ironi og fantasi for å utforske dypere psykologiske temaer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg ett av Jon Fosses skuespill («Nokon kjem til å komme», «Eg er vinden» eller «Namnet») og forbered en kort presentasjon for klassen.',
        subTasks: [
          { label: 'a', task: 'Hva handler stykket om? Gi et kort handlingsreferat.', solution: 'Referatet skal vise forståelse for stykkets handling og tema.' },
          { label: 'b', task: 'Beskriv Fosses bruk av pauser, repetisjon og minimalisme i stykket.', solution: 'Analysen skal vise konkrete eksempler på Fosses dramatiske virkemidler.' },
          { label: 'c', task: 'Hvilke temaer tar stykket opp? Hvordan kommer de til uttrykk?', solution: 'Temaanalysen skal koble virkemidler til innhold.' },
        ],
        hints: ['Les hele stykket eller se en oppsetning hvis mulig', 'Fosses stykker er korte og kan leses på en økt', 'Bruk biblioteket eller Nasjonalbibliotekets digitale ressurser'],
        solution: 'Presentasjonen vurderes etter forståelse av stykket, evne til å identifisere Fosses dramatiske virkemidler, og formidlingsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Ibsens og Fosses dialogstil. Bruk eksempler fra primærtekstene og det du har lært om Fosse.',
        subTasks: [
          { label: 'a', task: 'Hvordan bruker Ibsen dialog til å avsløre informasjon og karakter? Gi eksempler.', solution: 'Ibsen bruker dialog til å gradvis avsløre hemmeligheter og bakgrunn. Karakterene snakker i fullstendige setninger med mye informasjon.' },
          { label: 'b', task: 'Hvordan bruker Fosse dialog til å skape stemning og utforske det usagte? Gi eksempler.', solution: 'Fosse bruker korte, repetitive replikker og pauser. Det som ikke sies er like viktig som ordene.' },
          { label: 'c', task: 'Hvilken stil foretrekker du som leser/publikummer? Begrunn svaret.', solution: 'Svaret skal vise refleksjon over egne preferanser og forståelse for begge stilene.' },
        ],
        hints: ['Tenk på hva som skjer mellom linjene hos Fosse', 'Hos Ibsen ligger ofte hemmeligheter begravd i fortiden', 'Begge er mestere, men med helt ulike tilnærminger'],
        solution: 'Sammenligningen viser forståelse for to ulike dramatiske tradisjoner og evne til å analysere dramatisk dialog.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-13',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en dramatisk scene (ca. 2 sider) inspirert av enten Holberg eller Ibsen. Velg et samtidsemne og behandle det med dramatiske virkemidler.',
        hints: ['Velg et tema som engasjerer deg', 'Tenk på konflikten mellom karakterene', 'Bruk sceneanvisninger til å skape stemning', 'Prøv å ha undertekst i dialogen'],
        solution: 'Scenen vurderes etter bruk av dramatiske virkemidler, kvalitet på dialog, sceneanvisninger, karaktertegning, og evne til å bruke dramaet til å utforske et tema.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-14',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et essay (400-600 ord): Hvordan skiller drama seg fra novellen som form for samfunnskritikk? Bruk eksempler fra Holberg, Ibsen eller andre dramatikere, og sammenlign med noveller du kjenner.',
        hints: ['Tenk på hva dramaet kan gjøre som novellen ikke kan', 'Hvordan virker det at dramaet er skrevet for scenen?', 'Hva betyr det at drama ikke har en fortellerstemme?'],
        solution: 'Essayet bør drøfte hvordan dramaets form gir andre muligheter for samfunnskritikk enn novellens form.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-15',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-15',
        number: '15',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er dramatisk ironi?',
        options: [
          { id: 'a', text: 'Når en karakter sier det motsatte av det han mener', isCorrect: false },
          { id: 'b', text: 'Når publikum vet noe som karakterene på scenen ikke vet', isCorrect: true },
          { id: 'c', text: 'Når slutten på dramaet er overraskende', isCorrect: false },
          { id: 'd', text: 'Når to karakterer snakker forbi hverandre', isCorrect: false },
        ],
        solution: 'Dramatisk ironi oppstår når publikum har informasjon som karakterene mangler. Dette skaper spenning og engasjement fordi publikum forstår konsekvensene av handlingene før karakterene selv gjør det. Et klassisk eksempel er i "Romeo og Julie" der publikum vet at Julie ikke er virkelig død.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-16',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-16',
        number: '16',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver begrepet "katarsis" i Aristoteles dramateori?',
        options: [
          { id: 'a', text: 'Høydepunktet i dramaets handling', isCorrect: false },
          { id: 'b', text: 'Den følelsesmessige renselsen publikum opplever gjennom tragedien', isCorrect: true },
          { id: 'c', text: 'Vendepunktet der helten innser sin feil', isCorrect: false },
          { id: 'd', text: 'Avslutningen av dramaet', isCorrect: false },
        ],
        solution: 'Katarsis er Aristoteles begrep for den følelsesmessige renselsen publikum opplever gjennom tragedien. Ved å leve seg inn i karakterenes lidelser, renses publikum for følelser som frykt og medlidenhet. Dette var ifølge Aristoteles en av tragediens viktigste funksjoner.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-17',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-17',
        number: '17',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner Bertolt Brechts "episke teater"?',
        options: [
          { id: 'a', text: 'Publikum skal leve seg inn i karakterene og glemme at de ser på teater', isCorrect: false },
          { id: 'b', text: 'Publikum skal tenke kritisk og ikke bare føle - teatret skal vekke til politisk refleksjon', isCorrect: true },
          { id: 'c', text: 'Dramaet skal følge de tre enheter strengt', isCorrect: false },
          { id: 'd', text: 'Skuespillerne skal improvisere alle replikkene', isCorrect: false },
        ],
        solution: 'Brechts episke teater bryter bevisst med innlevelsen (illusjonen). Gjennom teknikker som direkte henvendelse til publikum, skilte og sanger, minner Brecht publikum på at de ser teater. Målet er at publikum skal tenke kritisk om det de ser, ikke bare føle. Brecht ønsket at teatret skulle inspirere til politisk handling og samfunnsendring.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-18',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser bruken av dramatisk ironi. Les følgende scene:',
        subTasks: [
          {
            label: 'a',
            task: 'Scene: En mann (Erik) planlegger en overraskelsesfest for kona si (Mia). Mia kommer hjem tidlig og finner en tekstmelding på Eriks telefon fra en venninne som skriver "Husker du på kake og ballonger i morgen? Gleder meg til festen!" Mia tror Erik er utro. Hvordan skaper dette dramatisk ironi?',
            solution: 'Publikum vet (eller forstår snart) at meldingen handler om overraskelsesfesten, mens Mia tror Erik er utro. Denne informasjonsgapet mellom publikum og karakter skaper spenning.',
          },
          {
            label: 'b',
            task: 'Hvilke følelser vekker denne dramatiske ironien hos publikum?',
            solution: 'Publikum kan føle frustrasjon (de vil fortelle Mia sannheten), spenning (hva skjer nå?), og kanskje også humor (de ser misforståelsen utenfra).',
          },
          {
            label: 'c',
            task: 'Skriv en kort fortsettelse (5-10 replikker) der du bruker den dramatiske ironien til å skape spenning.',
            solution: 'Fortsettelsen bør vise hvordan misforståelsen utvikler seg, med replikker som har dobbel betydning for publikum og karakterene.',
          },
        ],
        solution: 'Dramatisk ironi er et kraftig virkemiddel for å engasjere publikum. Når publikum vet mer enn karakterene, skapes spenning og følelsesmessig engasjement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-19',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-19',
        number: '19',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser sceneanvisningene i denne scenen og forklar hva de bidrar med:',
        subTasks: [
          {
            label: 'a',
            task: 'Les scenen: "KARI: (står ved vinduet, ryggen til LARS) Du kommer sent hjem. (Pause. Hun snur seg ikke.) LARS: (legger fra seg vesken, ser på henne) Ja. Det ble... sent. (Han tar et skritt mot henne, stopper.) KARI: (stille, fortsatt uten å snu seg) Jeg vet det. (Lang pause. Lyset dimmes sakte.)" Hva forteller sceneanvisningene om forholdet mellom karakterene?',
            solution: 'Sceneanvisningene viser avstand mellom karakterene: Kari snur seg ikke, Lars stopper halvveis. Den lange pausen og det dimmede lyset forsterker stemningen av fremmedgjøring og mulig konflikt.',
          },
          {
            label: 'b',
            task: 'Hva er effekten av pausene i scenen?',
            solution: 'Pausene skaper spenning og viser at det er mye som ikke sies - underteksten er viktigere enn ordene. Pausene gir publikum tid til å føle ubehaget mellom karakterene.',
          },
          {
            label: 'c',
            task: 'Hvordan ville scenen endret seg hvis Kari hadde snudd seg og sett på Lars?',
            solution: 'Scenen ville fått en helt annen dynamikk - det ville antydet ønske om kontakt eller konfrontasjon. Nå viser hun avvisning gjennom kroppen.',
          },
        ],
        hints: ['Sceneanvisninger viser det som ikke sies i replikkene', 'Tenk på hva regissøren får av informasjon', 'Kroppsspråk kommuniserer ofte mer enn ord'],
        solution: 'Sceneanvisninger er forfatterens måte å kommunisere stemning, undertekst og karakterenes indre liv på. De er like viktige som replikkene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-20',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-20',
        number: '20',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign tre teatertradisjoner. Fyll ut en tabell med kjennetegn for hver tradisjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Klassisk gresk teater (tragedie): Beskriv typiske trekk ved handling, karakterer og scene.',
            solution: 'Følger de tre enheter, kor som kommenterer handlingen, masker og stilisert spill, mytologiske tema, katarsis gjennom frykt og medlidenhet.',
          },
          {
            label: 'b',
            task: 'Realistisk teater (Ibsen-tradisjonen): Beskriv typiske trekk ved handling, karakterer og scene.',
            solution: 'Hverdagslige settinger, naturlig dialog, psykologisk dype karakterer, samfunnskritikk, "den fjerde veggen" mellom scene og sal.',
          },
          {
            label: 'c',
            task: 'Absurd teater (Beckett-tradisjonen): Beskriv typiske trekk ved handling, karakterer og scene.',
            solution: 'Mangel på tradisjonell handling, meningsløshet som tema, brudd med logikk og realisme, eksistensielle spørsmål, ofte sirkulær struktur.',
          },
        ],
        hints: ['Tenk på hva hver tradisjon vil oppnå', 'Hvordan forholder de seg til "virkeligheten"?', 'Hva er publikums rolle i hver tradisjon?'],
        solution: 'Ulike teatertradisjoner har ulike mål og virkemidler. Å forstå disse forskjellene hjelper deg å analysere drama fra ulike epoker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-21',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-21',
        number: '21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Hamlets berømte monolog "Å være eller ikke være". Les monologen og svar på spørsmålene:',
        subTasks: [
          {
            label: 'a',
            task: '"Å være eller ikke være, det er spørsmålet. / Om det er edlere i sinnet å tåle / slyngens og pilenes pisk fra en grusom skjebne, / eller å ta til våpen mot en sjø av plager / og ved å stå imot dem, få slutt på dem." Hva er hovedspørsmålet Hamlet stiller seg?',
            solution: 'Hamlet spør seg om det er bedre å leve (med all lidelsen det innebærer) eller å dø. Det er et eksistensielt spørsmål om liv og død, handling og passivitet.',
          },
          {
            label: 'b',
            task: 'Hvorfor er dette en monolog og ikke en dialog? Hva oppnår Shakespeare med dette grepet?',
            solution: 'Monologen lar publikum høre Hamlets innerste tanker. Han kan ikke si dette til andre karakterer - det ville være for avslørende. Monologen skaper intimitet mellom Hamlet og publikum.',
          },
          {
            label: 'c',
            task: 'Hvordan bidrar monologen til å utvikle Hamlets karakter?',
            solution: 'Monologen viser Hamlet som tvilende, filosofisk, og handlingslammet. Han overveier selvmord, men frykter det ukjente etter døden. Dette forklarer mye av hans nøling gjennom stykket.',
          },
        ],
        hints: ['En monolog avslører karakterens indre liv', 'Tenk på hvorfor Shakespeare velger dette formatet', 'Hva lærer vi om Hamlet som vi ikke kunne lært av dialog?'],
        solution: 'Monologen er et av dramaets viktigste virkemidler for å vise karakterers indre liv. "Å være eller ikke være" er kanskje verdenshistoriens mest berømte monolog.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-22',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-22',
        number: '22',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort monolog (15-20 linjer) der en karakter avslører en hemmelighet for publikum. Karakteren skal være alene på scenen.',
        hints: [
          'Velg en interessant hemmelighet - noe karakteren ikke kan fortelle noen andre',
          'La karakteren ha motstridende følelser om hemmeligheten',
          'Bruk sceneanvisninger for å vise karakterens følelser fysisk',
          'Husk at monologen snakkes høyt - den skal være naturlig å framføre',
        ],
        solution: 'Monologen vurderes etter: troverdighet i karakterens stemme, bruk av sceneanvisninger, dramatisk interesse (engasjerer den publikum?), og teknisk kvalitet (er den skrevet for scenen?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-23',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-23',
        number: '23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dramatisk scene (1-2 sider) der du bruker minst tre av disse virkemidlene: dramatisk ironi, undertekst, meningsfylte sceneanvisninger, symbolsk rekvisitt, pause/stillhet.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv selve scenen med to eller tre karakterer.',
            solution: 'Scenen skal være en fullstendig scene med begynnelse, konflikt og slutt (eller cliffhanger).',
          },
          {
            label: 'b',
            task: 'Skriv en kort analyse (100 ord) der du forklarer hvilke virkemidler du har brukt og hvorfor.',
            solution: 'Analysen skal vise bevissthet om egne valg og hvordan virkemidlene bidrar til scenens effekt.',
          },
        ],
        hints: [
          'Velg en situasjon med naturlig spenning eller konflikt',
          'Det som ikke sies er ofte viktigere enn det som sies',
          'Sceneanvisninger kan vise følelser karakterene skjuler i replikkene',
          'Et symbol (f.eks. en gjenstand) kan bære mye mening',
        ],
        solution: 'Oppgaven tester evnen til å anvende dramatiske virkemidler kreativt og reflektere over egne valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-24',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-24',
        number: '24',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er "undertekst" i dramatisk sammenheng?',
        options: [
          { id: 'a', text: 'Teksten som står under sceneanvisningene', isCorrect: false },
          { id: 'b', text: 'Det som ligger mellom linjene - det som kommuniseres uten å sies direkte', isCorrect: true },
          { id: 'c', text: 'Replikkene som skuespillerne improviserer', isCorrect: false },
          { id: 'd', text: 'Teksten som vises på en skjerm under forestillingen', isCorrect: false },
        ],
        solution: 'Undertekst er det utalte - følelser, intensjoner og meninger som ligger under det som faktisk sies. God dramatikk har ofte rik undertekst. Karakterer sier sjelden direkte hva de mener eller føler; i stedet kommuniseres det gjennom antydninger, pauser og det som ikke sies.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-ex-25',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-ex-25',
        number: '25',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en soliloquy (enesamtale) og en monolog?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell - begrepene betyr det samme', isCorrect: false },
          { id: 'b', text: 'En monolog er alltid humoristisk, en soliloquy er alltid alvorlig', isCorrect: false },
          { id: 'c', text: 'I en soliloquy snakker karakteren "til seg selv" og avslører tanker for publikum, mens en monolog kan være rettet mot andre karakterer', isCorrect: true },
          { id: 'd', text: 'En soliloquy er lengre enn en monolog', isCorrect: false },
        ],
        solution: 'En soliloquy (enesamtale) er en type monolog der karakteren snakker "til seg selv" mens de er alene på scenen - tankene deres blir hørbare for publikum. En vanlig monolog kan være en lengre tale rettet mot andre karakterer på scenen. Hamlets "Å være eller ikke være" er en soliloquy.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Drama:** Litteratur skrevet for scenen, med dialog og sceneanvisninger
- **Dialog:** Samtale mellom karakterer som driver handlingen fremover
- **Monolog/soliloquy:** Lengre tale av en karakter, soliloquy er "enesamtale" som avslorer tanker
- **Sceneanvisninger (didaskalier):** Forfatterens instruksjoner om scene, bevegelser og stemning
- **Dramatisk ironi:** Nar publikum vet noe karakterene ikke vet
- **Aristoteles dramaturgi:** De tre enheter (tid, sted, handling) og dramatisk struktur

**Det viktigste a huske:**
1. Drama skiller seg fra andre sjangre ved at det er ment for fremforing - dialog og handling erstatter fortellerstemme
2. Aristoteles strukturmodell (eksposisjon, komplikasjon, klimaks, peripeti, katastrofe) brukes fortsatt
3. Moderne dramatikere som Jon Fosse bryter med klassiske regler og utforsker nye uttrykksformer

**Kompetansemal dette kapittelet dekker:**
- Analysere og tolke dramatiske tekster med vekt pa form og innhold
- Forsta samspillet mellom tekst og scenisk fremforing`,
    },
    {
      id: 'norsk-vg1-2-3-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.5 Litterære virkemidler** – Utforsk virkemidler brukt i drama
- **2.1 Novelleanalyse** – Sammenlign dramaets og novellens fortellerteknikk
- **6.2 Film som tekst** – Se hvordan drama oversettes til film`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.6: Retorikk i praksis
// ============================================================================

export const CHAPTER_NORSK_VG1_1_6: TextbookChapter = {
  id: 'norsk-vg1-1-6',
  courseId: 'norsk-vg1',
  chapterNumber: '1.6',
  title: 'Retorikk i praksis',
  description: 'Lær å holde taler og presentasjoner med retoriske virkemidler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for retoriske appellformer og språklige virkemidler',
    'lytte til andre, bygge opp saklig argumentasjon og bruke retoriske appellformer i diskusjoner',
    'bruke fagspråk og argumentere saklig i samtaler, diskusjoner og muntlige presentasjoner',
  ],
  content: [
    {
      id: 'norsk-vg1-1-6-intro',
      type: 'text',
      content: `## Retorikk i hverdagen

Retorikk er kunsten å overbevise. Vi bruker retorikk daglig - når vi argumenterer for en mening, holder en presentasjon, eller prøver å få venner med på en plan.

**Hvor brukes retorikk?**
- Taler og presentasjoner
- Jobbintervjuer og søknader
- Politiske debatter
- Reklame og markedsføring
- Samtaler og forhandlinger

**Hvorfor lære retorikk?**
- Bli en bedre formidler
- Gjennomskue manipulasjon
- Strukturere tanker og argumenter
- Tilpasse budskap til ulike mottakere`,
    },
    {
      id: 'norsk-vg1-1-6-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Retorikk** | Kunsten å overbevise gjennom tale og tekst |
| **Etos** | Troverdighet og karakter - hvem du er |
| **Patos** | Følelsesappell - vekke følelser hos tilhørerne |
| **Logos** | Logisk argumentasjon - fornuft og bevis |
| **Kairos** | Det rette øyeblikket - timing og kontekst |
| **Disposisjon** | Oppbyggingen av en tale |
| **Elocutio** | Stil og ordvalg |
| **Actio** | Fremføring - stemme og kroppsspråk |`,
    },
    {
      id: 'norsk-vg1-1-6-def-1',
      type: 'definition',
      title: 'De retoriske appellformene',
      content: `**Etos - troverdighet**
Avsenderens troverdighet og karakter. Hvorfor skal tilhørerne lytte til deg?
- Vis at du har kunnskap om emnet
- Vær ærlig og oppriktig
- Vis respekt for tilhørerne
- Bruk ekspertkilder og referanser

**Patos - følelser**
Appell til tilhørernes følelser. Hva føler de?
- Bruk personlige historier og eksempler
- Vekk empati og identifikasjon
- Bruk retoriske spørsmål
- Skap engasjement gjennom språklige virkemidler

**Logos - logikk**
Appell til fornuft og rasjonalitet. Hva er sant og logisk?
- Bruk fakta og statistikk
- Bygg opp logiske argumentkjeder
- Gi konkrete bevis
- Unngå feilslutninger

**Balansen mellom appellformene:**
En god tale balanserer alle tre. For mye patos uten logos virker manipulerende. For mye logos uten patos blir kjedelig. Uten etos mangler troverdighet.`,
    },
    {
      id: 'norsk-vg1-1-6-def-2',
      type: 'definition',
      title: 'Talens oppbygging (disposisjon)',
      content: `**Klassisk taledisposisjon**
Den klassiske retorikken delte talen inn i fem deler:

**1. Exordium (innledning)**
- Fang oppmerksomheten
- Etabler kontakt med publikum
- Presenter tema og hensikt
- Tips: Start med et spørsmål, et sitat, eller en overraskende påstand

**2. Narratio (bakgrunn)**
- Gi nødvendig bakgrunnsinformasjon
- Presenter situasjonen eller problemet
- Vær saklig og objektiv

**3. Argumentatio (hoveddel)**
- Legg frem hovedargumentene
- Støtt med fakta og eksempler
- Møt motargumenter
- Bygg opp mot det sterkeste argumentet

**4. Refutatio (motargumenter)**
- Anerkjenn og imøtegå motargumenter
- Vis at du har vurdert flere sider
- Styrker din troverdighet

**5. Peroratio (avslutning)**
- Oppsummer hovedbudskapet
- Appeller til følelser
- Kom med en oppfordring til handling
- Avslutt med kraft`,
    },
    {
      id: 'norsk-vg1-1-6-def-3',
      type: 'definition',
      title: 'Fremføring (actio)',
      content: `**Stemmebruk**
- **Volum:** Snakk høyt nok til at alle hører
- **Tempo:** Varier tempoet, ta pauser
- **Betoning:** Legg trykk på viktige ord
- **Tonefall:** Unngå monoton tale

**Kroppsspråk**
- **Øyekontakt:** Se på tilhørerne, ikke manuset
- **Holdning:** Stå stødig, ikke vipp eller vri
- **Bevegelse:** Bruk rommet, men ikke vandre urolig
- **Gester:** Naturlige gester understreker poenger

**Hjelpemidler**
- **PowerPoint:** Støttende, ikke dominerende
- **Noter:** Stikkord, ikke manus
- **Rekvisitter:** Kan illustrere poenger

**Tips for nervøsitet:**
- Pust dypt før du starter
- Øv på forhånd, men ikke memorer ord for ord
- Fokuser på budskapet, ikke på deg selv
- Husk: Publikum vil at du skal lykkes`,
    },
    {
      id: 'norsk-vg1-1-6-def-4',
      type: 'definition',
      title: 'Tilpasning til ulike situasjoner (kairos)',
      content: `**Kairos - det rette øyeblikket**
Retorisk effektivitet avhenger av kontekst og timing.

**Tilpass budskapet til:**

**Publikum**
- Alder og bakgrunn
- Forkunnskaper om emnet
- Holdninger og interesser
- Forventninger til situasjonen

**Situasjon**
- Formell vs. uformell
- Størrelse på forsamlingen
- Tid tilgjengelig
- Fysisk rom

**Sjanger**
- Informativ tale (lære bort)
- Argumenterende tale (overbevise)
- Festtale (underholde/markere)
- Prosatale (trøste)

**Eksempler på tilpasning:**
- Til en klasse: Bruk eksempler fra ungdomskultur
- Til voksne: Referer til yrkeserfaring
- Til eksperter: Bruk fagspråk
- Til lekfolk: Forklar fagbegreper`,
    },
    {
      id: 'norsk-vg1-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av Martin Luther Kings tale',
      problem: 'Analyser bruken av retoriske virkemidler i utdraget fra "I Have a Dream" (1963).',
      solution: `**Utdrag:**
"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. I have a dream today!"

**Analyse av retoriske virkemidler:**

**Patos (følelsesappell):**
- "My four little children" - personlig og følelsesladet
- Drømmen om en bedre fremtid vekker håp
- Kontrasten mellom urettferdighet og ideal skaper engasjement

**Etos (troverdighet):**
- King snakker som far - universell rolle
- Han er selv del av gruppen han kjemper for
- Modig handling (holde talen) styrker troverdigheten

**Logos (logikk):**
- Klar argumentstruktur: nå vs. drøm
- Rimelig premiss: mennesker bør dømmes etter karakter, ikke hudfarge

**Språklige virkemidler:**
- **Anafor:** "I have a dream" gjentas og skaper rytme
- **Antitese:** "Color of their skin" vs. "content of their character"
- **Metafor:** Drømmen som bilde på fremtiden

**Fremføring:**
- Sterk, musikalsk rytme
- Crescendo mot klimaks
- Prekentradisjonen fra afroamerikansk kirke`,
    },
    {
      id: 'norsk-vg1-1-6-example-2',
      type: 'example',
      title: 'Eksempel: Strukturere en overbevisende presentasjon',
      problem: 'Du skal holde en 5-minutters presentasjon for klassen der du argumenterer for at skolen bør ha lengre friminutt. Hvordan strukturerer du den?',
      solution: `**1. Exordium (innledning) - 30 sek**
"Hvor mange av dere føler at friminuttene er for korte? (Retorisk spørsmål) Jeg mener skolen vår bør utvide friminuttene fra 10 til 20 minutter."

**2. Narratio (bakgrunn) - 45 sek**
"I dag har vi bare 10 minutter mellom timene. Det rekker knapt til å gå på do og spise en matbit. Forskning viser at hjernen trenger pauser for å fungere optimalt."

**3. Argumentatio (argumenter) - 2 min**
Argument 1: "Forskning fra Universitetet i Oslo viser at elever konsentrerer seg bedre etter lengre pauser." (Logos)

Argument 2: "Flere elever forteller at de føler seg stresset fordi de ikke rekker å slappe av mellom timene." (Patos)

Argument 3: "Skoler i Finland, som har verdens beste resultater, har lengre friminutt." (Etos/autoritet)

**4. Refutatio (motargumenter) - 45 sek**
"Noen vil si at lengre friminutt betyr kortere skoledager eller lengre dager. Men studier viser at kvalitet er viktigere enn kvantitet - bedre konsentrasjon gir mer læring på kortere tid."

**5. Peroratio (avslutning) - 30 sek**
"Kortere, intense arbeidsøkter med skikkelige pauser er fremtidens læringsmodell. Jeg oppfordrer elevrådet til å ta opp denne saken med rektor. Hvem er med?"`,
    },
    // Exercises
    {
      id: 'norsk-vg1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken retorisk appellform handler om talerens troverdighet?',
        options: [
          { id: 'a', text: 'Patos', isCorrect: false },
          { id: 'b', text: 'Logos', isCorrect: false },
          { id: 'c', text: 'Etos', isCorrect: true },
          { id: 'd', text: 'Kairos', isCorrect: false },
        ],
        solution: 'Etos handler om talerens troverdighet og karakter. Taleren må vise at de er til å stole på, har kunnskap om emnet, og er oppriktig. Patos er følelsesappell, logos er logisk argumentasjon, og kairos handler om timing og kontekst.',
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "kairos" i retorisk sammenheng?',
        options: [
          { id: 'a', text: 'Talerens kroppsspråk under fremføringen', isCorrect: false },
          { id: 'b', text: 'Det rette øyeblikket - timing og kontekst for budskapet', isCorrect: true },
          { id: 'c', text: 'Bruken av følelsesladede ord', isCorrect: false },
          { id: 'd', text: 'Oppbyggingen av en tale', isCorrect: false },
        ],
        solution: 'Kairos handler om å tilpasse budskapet til rett tid og sted. En god retoriker vurderer hvem publikum er, hva situasjonen krever, og når det er gunstig å fremme sitt budskap. Det handler om å gripe det rette øyeblikket.',
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken del av talen kalles "exordium"?',
        options: [
          { id: 'a', text: 'Hovedargumentene', isCorrect: false },
          { id: 'b', text: 'Avslutningen', isCorrect: false },
          { id: 'c', text: 'Innledningen', isCorrect: true },
          { id: 'd', text: 'Motargumentene', isCorrect: false },
        ],
        solution: 'Exordium er innledningen av en tale. Her skal taleren fange oppmerksomheten, etablere kontakt med publikum, og presentere tema og hensikt. En god exordium setter tonen for hele talen.',
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord forskjellen mellom etos, patos og logos. Gi ett eksempel på hvordan hver appellform kan brukes i en tale om miljøvern.',
        hints: ['Tenk på hvem som snakker, hva de føler, og hva de vet', 'Eksemplene trenger ikke være lange, bare konkrete'],
        solution: 'Etos handler om troverdighet (f.eks. "Som klimaforsker har jeg studert dette i 20 år"), patos handler om følelser (f.eks. "Tenk på hvilken verden vi etterlater til barna våre"), og logos handler om logikk (f.eks. "Forskning viser at temperaturen har steget 1,2 grader siden industrialiseringen").',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser en politisk tale eller reklamefilm du har sett. Hvilke retoriske appellformer brukes? Hvilke er mest fremtredende, og hvorfor tror du det er slik?',
        hints: ['Du kan bruke YouTube for å finne taler', 'Legg merke til språkbruk, bilder og fremføring', 'Tenk på hvem målgruppen er'],
        solution: 'Analysen bør identifisere konkrete eksempler på etos, patos og logos, vurdere hvilke som dominerer, og reflektere over hvorfor avsenderen har valgt denne strategien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en disposisjon for en 5-minutters tale om et tema du bryr deg om. Bruk den klassiske strukturen: exordium, narratio, argumentatio, refutatio, peroratio.',
        hints: ['Velg et tema du har kunnskap om og engasjement for', 'Skriv stikkord for hver del', 'Tenk på hvordan du vil fange oppmerksomheten'],
        solution: 'Disposisjonen vurderes etter om alle fem delene er inkludert, om det er logisk oppbygging, og om argumentene er relevante for temaet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lytte til andre, bygge opp saklig argumentasjon og bruke retoriske appellformer i diskusjoner'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hold talen du planla i oppgave 6 for klassen eller en gruppe. Få tilbakemelding på:',
        subTasks: [
          { label: 'a', task: 'Struktur: Var det tydelig innledning, hoveddel og avslutning?', solution: 'Tilhørerne bør kunne identifisere de ulike delene av talen.' },
          { label: 'b', task: 'Appellformer: Ble etos, patos og logos brukt effektivt?', solution: 'Vurder om taleren virket troverdig, engasjerende og logisk.' },
          { label: 'c', task: 'Fremføring: Hvordan var stemmebruk, kroppsspråk og blikkontakt?', solution: 'Gi konkrete tips til forbedring.' },
        ],
        hints: ['Øv på forhånd', 'Ta imot tilbakemeldinger konstruktivt', 'Skriv ned tips til neste gang'],
        solution: 'Muntlig fremføring vurderes etter struktur, bruk av appellformer, og fremføringskvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk og argumentere saklig i samtaler, diskusjoner og muntlige presentasjoner'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ulike innledninger (exordium) til samme tale om at skolen bør tilby gratis lunsj. Bruk ulike teknikker:',
        subTasks: [
          { label: 'a', task: 'Start med et retorisk spørsmål', solution: 'F.eks. "Hvor mange av dere har opplevd å være sultne midt i en prøve?"' },
          { label: 'b', task: 'Start med en overraskende statistikk', solution: 'F.eks. "Visste du at 1 av 10 norske barn kommer sultne på skolen?"' },
          { label: 'c', task: 'Start med en personlig historie', solution: 'F.eks. "Jeg husker en dag i 8. klasse da jeg hadde glemt matpakken..."' },
        ],
        hints: ['Hver innledning bør være 2-4 setninger', 'Tenk på hvilken effekt hver teknikk har'],
        solution: 'Gode innledninger fanger oppmerksomheten og leder inn mot temaet. Ulike teknikker passer til ulike situasjoner og publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken strategi er mest effektiv for å møte motargumenter i en tale?',
        options: [
          { id: 'a', text: 'Ignorere motargumentene fullstendig', isCorrect: false },
          { id: 'b', text: 'Latterliggjøre de som er uenige', isCorrect: false },
          { id: 'c', text: 'Anerkjenne gyldige poenger og forklare hvorfor ditt syn likevel er bedre', isCorrect: true },
          { id: 'd', text: 'Si at motargumentene er feil uten å begrunne', isCorrect: false },
        ],
        solution: 'Den mest effektive strategien er å anerkjenne motargumenter og imøtegå dem saklig. Dette viser at du har vurdert saken fra flere sider (styrker etos), og at du har gode grunner for ditt standpunkt (styrker logos). Å ignorere eller latterliggjøre motargumenter svekker troverdigheten din.',
        competenceGoals: ['lytte til andre, bygge opp saklig argumentasjon og bruke retoriske appellformer i diskusjoner'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tilpass samme budskap til tre ulike målgrupper. Du skal argumentere for mer fysisk aktivitet i skolen. Skriv korte taledisposisjoner (stikkord) tilpasset:',
        subTasks: [
          { label: 'a', task: 'Elever på ungdomsskolen', solution: 'Fokus på det som engasjerer ungdom: energi, konsentrasjon, sosiale aktiviteter, variasjon i skolehverdagen.' },
          { label: 'b', task: 'Foreldre på et foreldremøte', solution: 'Fokus på barnas helse og læring, forskning om fysisk aktivitet og skoleprestasjoner.' },
          { label: 'c', task: 'Kommunepolitikere som skal vedta budsjett', solution: 'Fokus på samfunnsøkonomiske gevinster, folkehelse, og langsiktige besparelser i helsevesenet.' },
        ],
        hints: ['Tenk på hva som motiverer hver gruppe', 'Bruk ulike typer argumenter', 'Tilpass språket til målgruppen'],
        solution: 'Effektiv retorikk handler om å tilpasse budskapet til mottakeren (kairos). Samme sak kan argumenteres for på ulike måter avhengig av hvem som lytter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk og argumentere saklig i samtaler, diskusjoner og muntlige presentasjoner'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser en kjent tale fra historien (f.eks. Greta Thunbergs FN-tale, Barack Obamas "Yes We Can", eller en norsk statsministers nyttårstale). Skriv en analyse (400-600 ord) som svarer på:',
        subTasks: [
          { label: 'a', task: 'Hvordan bruker taleren etos, patos og logos?', solution: 'Gi konkrete eksempler fra talen.' },
          { label: 'b', task: 'Hvordan er talen strukturert?', solution: 'Identifiser innledning, hoveddel og avslutning.' },
          { label: 'c', task: 'Hvordan er fremføringen (hvis du ser video)?', solution: 'Kommenter stemmebruk, kroppsspråk og pauser.' },
          { label: 'd', task: 'Hvilken rolle spiller kairos - konteksten talen ble holdt i?', solution: 'Vurder tidspunkt, sted og publikum.' },
        ],
        hints: ['Finn talen på YouTube eller les transkripsjonen', 'Bruk fagbegreper fra kapittelet', 'Gi konkrete teksteksempler'],
        solution: 'Analysen vurderes etter bruk av fagbegreper, konkrete teksteksempler, og evne til å se sammenhengen mellom retoriske valg og kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['gjøre rede for retoriske appellformer og språklige virkemidler'],
      },
    },
    {
      id: 'norsk-vg1-1-6-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered og hold en overbevisende tale (3-5 minutter) om et tema du brenner for. Bruk alle elementene fra kapittelet:',
        subTasks: [
          { label: 'a', task: 'Følg den klassiske strukturen (exordium, narratio, argumentatio, refutatio, peroratio)', solution: 'Talen skal ha tydelig struktur med alle fem delene.' },
          { label: 'b', task: 'Bruk alle tre appellformene bevisst', solution: 'Inkluder etos-byggere, patos-appeller og logos-argumenter.' },
          { label: 'c', task: 'Tenk gjennom fremføringen (actio)', solution: 'Øv på stemme, kroppsspråk og blikkontakt.' },
          { label: 'd', task: 'Skriv en kort refleksjon (100 ord) etterpå om hva som fungerte og hva du kan forbedre', solution: 'Refleksjonen viser selvinnsikt og evne til å lære av erfaring.' },
        ],
        hints: ['Velg et tema du har genuine meninger om', 'Øv foran speilet eller ta opp deg selv', 'Be om konkret tilbakemelding'],
        solution: 'Talen vurderes etter struktur, bruk av appellformer, fremføring, og evne til å reflektere over egen prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['bruke fagspråk og argumentere saklig i samtaler, diskusjoner og muntlige presentasjoner'],
      },
    },
    {
      id: 'norsk-vg1-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Etos:** Talerens troverdighet og karakter
- **Patos:** Appell til tilhørernes følelser
- **Logos:** Logisk argumentasjon med fakta og bevis
- **Kairos:** Det rette øyeblikket - tilpasning til kontekst
- **Disposisjon:** Talens oppbygging (exordium, narratio, argumentatio, refutatio, peroratio)
- **Actio:** Fremføring - stemme, kroppsspråk og blikkontakt

**Det viktigste å huske:**
1. God retorikk balanserer etos, patos og logos
2. Tilpass budskapet til publikum og situasjon (kairos)
3. Følg en tydelig struktur med innledning, hoveddel og avslutning
4. Øv på fremføring - det er like viktig som innholdet

**Kompetansemål dette kapittelet dekker:**
- Gjøre rede for retoriske appellformer og språklige virkemidler
- Lytte til andre, bygge opp saklig argumentasjon og bruke retoriske appellformer
- Bruke fagspråk og argumentere saklig i muntlige presentasjoner`,
    },
    {
      id: 'norsk-vg1-1-6-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **1.3 Debattinnlegg og meningsytring** - Skriftlig argumentasjon
- **1.1 Retorikk og argumentasjon** - Grunnleggende retoriske begreper
- **1.5 Retorisk analyse** - Analyser argumenterende tekster i dybden
- **5.1 Muntlig kommunikasjon** - Mer om muntlige ferdigheter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7: Dramaturgi og scenekunst
// ============================================================================

export const CHAPTER_NORSK_VG1_2_7: TextbookChapter = {
  id: 'norsk-vg1-2-7',
  courseId: 'norsk-vg1',
  chapterNumber: '2.7',
  title: 'Dramaturgi og scenekunst',
  description: 'Lær om dramatisk struktur, sceniske virkemidler og moderne norsk drama.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke nyere skjønnlitteratur',
    'utforske og reflektere over hvordan tekster fremstiller møter mellom ulike kulturer og perspektiv',
  ],
  content: [
    {
      id: 'norsk-vg1-2-7-intro',
      type: 'text',
      content: `## Dramaturgiens verden

Dramaturgi er læren om hvordan dramatiske tekster er bygget opp. Forståelse av dramaturgiske modeller hjelper deg å analysere drama og forstå hvorfor noen historier fenger mer enn andre.

**Hvorfor lære dramaturgi?**
- Forstå hvordan fortellinger bygges opp
- Analysere drama og film med fagbegreper
- Bli en bedre historieforteller selv
- Se mønstre på tvers av ulike medier

**Dramaturgi handler om:**
- Strukturen i fortellingen
- Spenningsoppbygging
- Karakterutvikling
- Sceniske virkemidler`,
    },
    {
      id: 'norsk-vg1-2-7-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Dramaturgi** | Læren om dramatisk struktur og oppbygging |
| **Eksposisjon** | Innledningen der situasjon og karakterer presenteres |
| **Konflikt** | Motsetningen som driver handlingen |
| **Klimaks** | Handlingens høydepunkt |
| **Peripeti** | Vendepunkt der handlingen snur |
| **Katastrofe** | Tragediens ulykkelige utfall |
| **Denouement** | Oppløsning, avvikling av handlingen |
| **Scenografi** | Utformingen av scenerommet |`,
    },
    {
      id: 'norsk-vg1-2-7-def-1',
      type: 'definition',
      title: 'Freytags pyramide',
      content: `**Gustav Freytag (1816-1895)** utviklet en modell for dramatisk struktur basert på klassisk tragedie:

**1. Eksposisjon**
- Introduksjon av karakterer og situasjon
- Etablerer tid, sted og stemning
- Viser utgangspunktet før konflikten

**2. Stigende handling (komplikasjon)**
- Konflikten introduseres og utvikler seg
- Spenningen øker gradvis
- Hindringer dukker opp

**3. Klimaks (høydepunkt)**
- Handlingens mest intense punkt
- Avgjørende konfrontasjon
- Ofte et vendepunkt (peripeti)

**4. Fallende handling**
- Konsekvensene av klimaks utspiller seg
- Spenningen avtar, men utfallet er usikkert
- Karakterene reagerer på vendepunktet

**5. Katastrofe / Løsning**
- Tragedien: Katastrofe (død, undergang)
- Komedien: Lykkelig utgang
- Alle tråder samles

**Visuell fremstilling:**
\`\`\`
        Klimaks
           /\\
          /  \\
         /    \\
Stigende/      \\Fallende
       /        \\
      /          \\
Eksposisjon    Katastrofe/Løsning
\`\`\``,
    },
    {
      id: 'norsk-vg1-2-7-def-2',
      type: 'definition',
      title: 'Treaktsstrukturen',
      content: `**Hollywood-modellen**
Den moderne treaktsstrukturen brukes i film og mye moderne drama:

**Akt 1: Etablering (ca. 25%)**
- Vi møter hovedpersonen i sin vanlige verden
- En utløsende hendelse ("inciting incident") endrer alt
- Hovedpersonen står overfor et valg
- Ender med første vendepunkt: Karakteren forplikter seg til målet

**Akt 2: Konfrontasjon (ca. 50%)**
- Hovedpersonen møter økende motstand
- Prøving og feiling, læring
- Midtpunkt: Ny informasjon endrer alt
- Ender med andre vendepunkt: Alt ser håpløst ut ("mørke natt")

**Akt 3: Oppløsning (ca. 25%)**
- Hovedpersonen finner nye ressurser
- Endelig konfrontasjon med motstanderen
- Klimaks og løsning
- Ny likevekt etableres

**Eksempel - "Løvenes konge":**
- Akt 1: Simba vokser opp, Mufasa dør, Simba flykter
- Akt 2: Simba lever sorgløst med Timon og Pumba, møter Nala
- Akt 3: Simba returnerer, bekjemper Scar, blir konge`,
    },
    {
      id: 'norsk-vg1-2-7-def-3',
      type: 'definition',
      title: 'Sceniske virkemidler',
      content: `**Scenografi**
Utformingen av scenerommet - kulisser, rekvisitter, møbler.
- **Realistisk scenografi:** Etterligner virkeligheten
- **Stilisert scenografi:** Forenklet, symbolsk
- **Minimalistisk:** Nesten tom scene (som hos Jon Fosse)

**Lyssetting**
Lys skaper stemning og fokus.
- Sterkt lys: Åpenhet, sannhet
- Dempet lys: Intimitet, hemmelighet
- Spotlight: Isolerer karakter, viktig øyeblikk
- Farget lys: Symbolsk (rødt = fare/lidenskap, blått = kulde)

**Lyddesign**
- Musikk: Setter stemning, understreker følelser
- Lydeffekter: Skaper illusjon av miljø
- Stillhet: Kan være like virkningsfullt som lyd

**Kostymer og sminke**
- Viser tid, sted, sosial status
- Karakteriserer rollefiogurer
- Kan være realistiske eller stiliserte

**Blokkering**
Skuespillernes plassering og bevegelse på scenen.
- Avstand mellom karakterer viser forhold
- Bevegelse mot/fra viser tiltrekning/avvisning
- Hvem som står høyest viser makt`,
    },
    {
      id: 'norsk-vg1-2-7-def-4',
      type: 'definition',
      title: 'Moderne norsk dramatikk',
      content: `**Jon Fosse (f. 1959) - Nobelpris 2023**
Norges mest internasjonalt spilte dramatiker.
- Minimalistisk stil
- Pauser og repetisjon
- Temaer: venting, ensomhet, eksistens
- Sentrale verk: "Nokon kjem til å komme", "Eg er vinden"

**Cecilie Løveid (f. 1951)**
Eksperimentell, feministisk dramatiker.
- Bryter med tradisjonell dramaturgi
- Lyrisk, poetisk språk
- Utforsker kvinners erfaringer
- Sentrale verk: "Måkespiserne", "Vinteren revner"

**Arne Lygre (f. 1968)**
Samtidsdramatiker som utforsker identitet.
- Fragmentert struktur
- Karakterer som skifter roller
- Utforsker relasjoner og samfunn
- Sentrale verk: "Mann uten hensikt", "Dager under"

**Felles trekk i moderne norsk drama:**
- Bryter med klassisk dramaturgi
- Utforsker eksistensielle spørsmål
- Eksperimenterer med form
- Ofte minimalistisk og poetisk`,
    },
    {
      id: 'norsk-vg1-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av dramaturgisk struktur',
      problem: 'Analyser strukturen i Henrik Ibsens "Et dukkehjem" (1879) ved hjelp av Freytags pyramide.',
      solution: `**Et dukkehjem - dramaturgisk analyse**

**1. Eksposisjon (Akt 1, begynnelsen)**
- Vi møter Nora og Torvald Helmer i deres tilsynelatende lykkelige hjem
- Det er jul, Torvald har fått forfremelse
- Vi får hint om en hemmelighet Nora bærer på

**2. Stigende handling (Akt 1-2)**
- Krogstad truer med å avsløre at Nora forfalsket farens underskrift
- Nora prøver å stoppe ham, men mislykkes
- Spenningen bygger seg opp: Vil hemmeligheten bli avslørt?

**3. Klimaks (Akt 3)**
- Torvald leser Krogstads brev og oppdager sannheten
- Hans reaksjon avslører hans sanne karakter
- Det "vidunderlige" Nora hadde håpet på skjer ikke

**4. Fallende handling (Akt 3)**
- Krogstad sender tilbake gjeldsbrevet
- Torvald tror alt er tilgitt
- Men Nora har gjennomgått en indre forvandling

**5. Løsning/Katastrofe (Akt 3, slutten)**
- Nora innser at hun har vært en dukke
- Hun forlater mann og barn
- Døren som smeller - et av teaterhistoriens mest berømte øyeblikk

**Ibsens nyskapning:**
Ibsen bryter med klassisk dramaturgi ved at løsningen ikke er forsoning, men oppbrudd. Nora seirer moralsk, men til en høy pris.`,
    },
    {
      id: 'norsk-vg1-2-7-example-2',
      type: 'example',
      title: 'Eksempel: Sceniske virkemidler i moderne drama',
      problem: 'Hvordan bruker Jon Fosse sceniske virkemidler annerledes enn tradisjonelt drama?',
      solution: `**Fosses sceniske minimalisme**

**Scenografi:**
- Nesten tomme scener
- Enkle elementer: et vindu, en stol, en seng
- Fokus på menneskene, ikke omgivelsene
- Eksempel fra "Nokon kjem til å komme": Et hus ved havet, men vi ser bare interiøret

**Lys:**
- Ofte dempet, diffust lys
- Skiftende lysforhold som speiler indre tilstander
- Lyset kan gradvis dimmes for å markere stemningsskift

**Lyd:**
- Stillhet er viktigere enn lyd
- Naturlyder (vind, hav) i bakgrunnen
- Ingen dramatisk musikk
- Pausene mellom replikkene er like viktige som ordene

**Karakterenes fysiske uttrykk:**
- Lite bevegelse
- Statiske posisjoner
- Blikk ut av vinduer
- Venting som fysisk uttrykk

**Kontrast til tradisjonelt drama:**
| Tradisjonelt | Fosse |
|-------------|-------|
| Detaljert scenografi | Minimalistisk |
| Dramatisk musikk | Stillhet |
| Aktive karakterer | Ventende karakterer |
| Dialog driver handling | Pauser driver handling |

**Effekten:**
Den nedstrippede scenen tvinger publikum til å fokusere på menneskene og det usagte. Rommet blir en metafor for karakterenes indre landskap.`,
    },
    // Exercises
    {
      id: 'norsk-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "klimaks" i dramaturgisk sammenheng?',
        options: [
          { id: 'a', text: 'Innledningen av dramaet', isCorrect: false },
          { id: 'b', text: 'Handlingens høydepunkt og mest intense punkt', isCorrect: true },
          { id: 'c', text: 'Den lykkelige slutten', isCorrect: false },
          { id: 'd', text: 'Presentasjonen av karakterene', isCorrect: false },
        ],
        solution: 'Klimaks er handlingens høydepunkt - det mest intense og avgjørende øyeblikket i dramaet. Her når spenningen toppen, og ofte skjer et vendepunkt (peripeti) som endrer handlingens retning.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken del av Freytags pyramide kommer etter klimaks?',
        options: [
          { id: 'a', text: 'Eksposisjon', isCorrect: false },
          { id: 'b', text: 'Stigende handling', isCorrect: false },
          { id: 'c', text: 'Fallende handling', isCorrect: true },
          { id: 'd', text: 'Komplikasjon', isCorrect: false },
        ],
        solution: 'Etter klimaks kommer den fallende handlingen. Her utspiller konsekvensene av klimakset seg, spenningen avtar gradvis, og handlingen beveger seg mot den endelige løsningen eller katastrofen.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner Jon Fosses dramatiske stil?',
        options: [
          { id: 'a', text: 'Lange, detaljerte dialoger og komplekse intriger', isCorrect: false },
          { id: 'b', text: 'Minimalisme, pauser og repetisjon', isCorrect: true },
          { id: 'c', text: 'Mye handling og spektakulære sceneskift', isCorrect: false },
          { id: 'd', text: 'Historiske kostymer og realistisk scenografi', isCorrect: false },
        ],
        solution: 'Jon Fosse er kjent for sin minimalistiske stil med korte, repetitive replikker og meningsfulle pauser. Det usagte er like viktig som ordene, og scenografien er ofte nedstrippet til det helt enkle.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar de fem delene i Freytags pyramide med egne ord. Gi et kort eksempel fra en film eller et drama du kjenner til.',
        hints: ['Tenk på en eventyrfilm eller et klassisk drama', 'Identifiser eksposisjon, stigende handling, klimaks, fallende handling og løsning'],
        solution: 'Svaret bør inneholde forklaringer av alle fem delene og et konkret eksempel som viser strukturen i en kjent fortelling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Freytags pyramide og treaktsstrukturen. Hva er likt, og hva er forskjellig?',
        hints: ['Tenk på hvordan begge modellene beskriver spenningsoppbygging', 'Se på hvor vendepunktene plasseres'],
        solution: 'Begge modellene beskriver spenningsoppbygging med innledning, konflikt og løsning, men treaktsstrukturen har mer detaljerte vendepunkter og fokuserer mer på karakterens indre reise.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser strukturen i en film du har sett nylig. Bruk enten Freytags pyramide eller treaktsstrukturen.',
        subTasks: [
          { label: 'a', task: 'Identifiser eksposisjonen: Hvem er hovedpersonen, og hva er utgangssituasjonen?', solution: 'Beskriv karakterene vi møter og den vanlige verdenen før konflikten.' },
          { label: 'b', task: 'Hva er den utløsende hendelsen som setter handlingen i gang?', solution: 'Identifiser hendelsen som endrer alt for hovedpersonen.' },
          { label: 'c', task: 'Hva er klimaks i filmen?', solution: 'Beskriv det mest intense øyeblikket.' },
          { label: 'd', task: 'Hvordan løses konflikten?', solution: 'Forklar hvordan historien avsluttes.' },
        ],
        hints: ['Velg en film med tydelig struktur', 'Se etter vendepunktene'],
        solution: 'Analysen vurderes etter evne til å identifisere strukturelle elementer og bruke fagbegreper korrekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan disse sceniske virkemidlene kan brukes til å skape stemning i et drama:',
        subTasks: [
          { label: 'a', task: 'Lyssetting', solution: 'Lys kan skape intimitet (dempet), avsløring (sterkt), fare (rødt), kulde (blått), fokus (spotlight).' },
          { label: 'b', task: 'Scenografi', solution: 'Kan være realistisk (illusjon av virkelighet), stilisert (symbolsk), eller minimalistisk (fokus på karakterene).' },
          { label: 'c', task: 'Lyddesign', solution: 'Musikk setter stemning, lydeffekter skaper miljø, stillhet kan være like virkningsfullt.' },
          { label: 'd', task: 'Blokkering (karakterenes plassering)', solution: 'Avstand viser relasjon, bevegelse viser tiltrekning/avvisning, høyde viser makt.' },
        ],
        hints: ['Tenk på teaterforestillinger eller filmer du har sett', 'Hvordan brukes disse elementene til å forsterke handlingen?'],
        solution: 'Svarene bør vise forståelse for hvordan sceniske virkemidler kommuniserer stemning og mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les et utdrag fra et av Jon Fosses skuespill (du kan finne utdrag på nett eller i biblioteket). Analyser hvordan Fosse bryter med tradisjonell dramaturgi.',
        hints: ['Se etter pauser, repetisjon og det usagte', 'Sammenlign med tradisjonell oppbygging', 'Vurder stemning fremfor handling'],
        solution: 'Analysen bør vise konkrete eksempler på Fosses brudd med tradisjonell dramaturgi: minimalisme, pauser, repetisjon, fokus på stemning fremfor handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-9',
        number: '9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er "peripeti" i dramaturgisk sammenheng?',
        options: [
          { id: 'a', text: 'Innledningen av dramaet', isCorrect: false },
          { id: 'b', text: 'Et vendepunkt der handlingens retning endres', isCorrect: true },
          { id: 'c', text: 'Avslutningen av dramaet', isCorrect: false },
          { id: 'd', text: 'En humoristisk scene som letter stemningen', isCorrect: false },
        ],
        solution: 'Peripeti er et vendepunkt i handlingen - et øyeblikk der situasjonen snur, ofte fra lykke til ulykke (i tragedien) eller omvendt. Begrepet kommer fra Aristoteles og er sentralt i klassisk dramaturgi.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign hvordan to ulike dramatikere (f.eks. Ibsen og Fosse, eller Shakespeare og Brecht) bygger opp et drama. Hva er likt, og hva er forskjellig i deres dramaturgiske grep?',
        hints: ['Velg dramatikere dere har lest i klassen', 'Se på struktur, dialog, sceneanvisninger og tema', 'Vurder hvilken effekt de ulike grepene har'],
        solution: 'Sammenligningen bør vise konkrete forskjeller i dramaturgi, dialog og sceniske virkemidler, og reflektere over hvorfor dramatikerne gjør ulike valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort synopsis (sammendrag) for et drama du vil skrive, ved å bruke treaktsstrukturen. Synopsiset skal være på ca. 300 ord og inkludere:',
        subTasks: [
          { label: 'a', task: 'Akt 1: Etablering - Hvem er hovedpersonen, og hva er den utløsende hendelsen?', solution: 'Beskriv karakteren og verden, samt hendelsen som endrer alt.' },
          { label: 'b', task: 'Akt 2: Konfrontasjon - Hva er hovedkonfliktene, og hva skjer ved midtpunktet?', solution: 'Beskriv hindringer og et vendepunkt midt i handlingen.' },
          { label: 'c', task: 'Akt 3: Oppløsning - Hvordan når konflikten klimaks, og hvordan løses den?', solution: 'Beskriv den endelige konfrontasjonen og utfallet.' },
        ],
        hints: ['Velg et tema som engasjerer deg', 'Tenk på en tydelig konflikt', 'Sørg for at karakteren endrer seg gjennom historien'],
        solution: 'Synopsiset vurderes etter bruk av treaktsstruktur, tydelig konflikt, karakterutvikling og kreativitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Se en teaterforestilling (live eller strømmet) og skriv en analyse (400-500 ord) av de sceniske virkemidlene. Analyser:',
        subTasks: [
          { label: 'a', task: 'Scenografi: Hvordan er scenerommet utformet, og hva kommuniserer det?', solution: 'Beskriv kulisser, rekvisitter og romutforming.' },
          { label: 'b', task: 'Lyssetting: Hvordan brukes lys til å skape stemning?', solution: 'Gi konkrete eksempler på lysbruk i bestemte scener.' },
          { label: 'c', task: 'Lyddesign: Hvordan brukes lyd og musikk?', solution: 'Beskriv lydeffekter, musikk og stillhet.' },
          { label: 'd', task: 'Vurder helhetlig: Hvordan støtter de sceniske virkemidlene handlingen og temaet?', solution: 'Reflekter over samspillet mellom form og innhold.' },
        ],
        hints: ['Mange teatre strømmer forestillinger', 'Ta notater underveis', 'Bruk fagbegreper fra kapittelet'],
        solution: 'Analysen vurderes etter evne til å identifisere og analysere sceniske virkemidler med fagbegreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Freytags pyramide:** Eksposisjon - stigende handling - klimaks - fallende handling - katastrofe/løsning
- **Treaktsstruktur:** Etablering (25%) - konfrontasjon (50%) - oppløsning (25%)
- **Klimaks:** Handlingens høydepunkt og mest intense punkt
- **Peripeti:** Vendepunkt der handlingen endrer retning
- **Sceniske virkemidler:** Scenografi, lyssetting, lyddesign, kostymer, blokkering

**Det viktigste å huske:**
1. Dramaturgiske modeller hjelper oss å forstå hvordan fortellinger bygges opp
2. Moderne drama bryter ofte med klassisk dramaturgi
3. Sceniske virkemidler (lys, lyd, scenografi) er like viktige som teksten
4. Jon Fosses minimalisme representerer et alternativ til tradisjonell dramaturgi

**Kompetansemål dette kapittelet dekker:**
- Lese, analysere og tolke nyere skjønnlitteratur
- Utforske og reflektere over hvordan tekster fremstiller møter mellom ulike kulturer og perspektiv`,
    },
    {
      id: 'norsk-vg1-2-7-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.3 Drama og teater** - Grunnleggende dramasjanger og virkemidler
- **2.8 Adaptasjon og medietekster** - Hvordan drama tilpasses film og andre medier
- **6.2 Film som tekst** - Filmens virkemidler og analyse`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.8: Adaptasjon og medietekster
// ============================================================================

export const CHAPTER_NORSK_VG1_2_8: TextbookChapter = {
  id: 'norsk-vg1-2-8',
  courseId: 'norsk-vg1',
  chapterNumber: '2.8',
  title: 'Adaptasjon og medietekster',
  description: 'Lær hvordan litteratur overføres til film, TV og andre medier.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke nyere skjønnlitteratur',
    'utforske og reflektere over hvordan tekster fremstiller møter mellom ulike kulturer og perspektiv',
    'reflektere over hvordan tekster fra ulike tider og steder kan leses og forstås på ulike måter',
  ],
  content: [
    {
      id: 'norsk-vg1-2-8-intro',
      type: 'text',
      content: `## Fra bok til skjerm

Når en roman blir film, et skuespill blir TV-serie, eller et eventyr blir dataspill, kaller vi det adaptasjon. Adaptasjon er ikke bare oversettelse - det er gjenskapelse i et nytt medium.

**Hva er adaptasjon?**
- Overføring av en fortelling fra ett medium til et annet
- Kan være: Bok til film, drama til opera, tegneserie til film
- Innebærer alltid tolkningsvalg

**Hvorfor studere adaptasjon?**
- Forstå hvordan fortellinger endres mellom medier
- Se hvordan tolkninger former gjenfortelling
- Utvikle kritisk mediebevissthet
- Oppdage nye sider ved kjente verk`,
    },
    {
      id: 'norsk-vg1-2-8-ordliste',
      type: 'definition',
      title: 'Ordliste',
      content: `| Begrep | Forklaring |
|--------|------------|
| **Adaptasjon** | Overføring av verk fra ett medium til et annet |
| **Kildetekst** | Originalteksten som adapteres |
| **Troskap** | Hvor nært adaptasjonen følger kilden |
| **Intertekstualitet** | Forbindelser mellom tekster |
| **Remediation** | Representasjon av ett medium i et annet |
| **Transmedia** | Fortelling fordelt over flere medier |
| **Filmatisering** | Adaptasjon av litteratur til film |
| **Reboot** | Ny versjon av en tidligere adaptasjon |`,
    },
    {
      id: 'norsk-vg1-2-8-def-1',
      type: 'definition',
      title: 'Typer adaptasjon',
      content: `**Tro adaptasjon**
Følger kildeteksten nært.
- Beholder hovedhandling, karakterer og dialog
- Forkorter ofte, men endrer lite
- Eksempel: BBC-versjoner av Jane Austen

**Fri adaptasjon**
Tar seg friheter med kildeteksten.
- Beholder grunnideen, men endrer mye
- Kan flytte tid, sted eller perspektiv
- Eksempel: "10 Things I Hate About You" (basert på Shakespeare)

**Appropriasjon**
Tar elementer fra kilden inn i noe nytt.
- Kildeteksten er en inspirasjon, ikke mal
- Kan være vanskelig å gjenkjenne
- Eksempel: "The Lion King" (løst basert på Hamlet)

**Transponering**
Flytter historien til ny kontekst.
- Samme grunnfortelling, ny setting
- Ofte for å gjøre stoffet relevant
- Eksempel: "Clueless" (Emma i 90-tallets LA)

**Nøkkelen til god adaptasjon:**
Det handler ikke om å kopiere, men å fange essensen av verket i et nytt medium.`,
    },
    {
      id: 'norsk-vg1-2-8-def-2',
      type: 'definition',
      title: 'Medienes forskjeller',
      content: `**Litteratur (roman, novelle)**
- Tilgang til karakterenes tanker
- Kan strekke seg over lang tid
- Leserens fantasi fyller ut
- Tempo bestemt av leseren

**Film**
- Viser, forteller ikke
- Begrenset tid (ofte 2 timer)
- Bilder og lyd dominerer
- Publikum er passiv mottaker

**TV-serie**
- Mer tid til karakterutvikling
- Episodisk struktur
- Kan følge lange romanser
- Cliffhangere holder seerne

**Teater**
- Live fremføring
- Begrenset scenografi
- Dialog-drevet
- Publikum er tilstede i rommet

**Dataspill**
- Interaktivitet
- Spilleren former fortellingen
- Ofte åpne verdener
- Belønningsstrukturer

**Utfordringen:**
Hver adaptasjon må finne sin måte å erstatte det som går tapt mellom medier - og utnytte det nye mediets muligheter.`,
    },
    {
      id: 'norsk-vg1-2-8-def-3',
      type: 'definition',
      title: 'Intertekstualitet',
      content: `**Hva er intertekstualitet?**
Alle tekster er i dialog med andre tekster. Når du leser en tekst, bringer du med deg erfaringer fra andre tekster.

**Former for intertekstualitet:**

**Sitat**
Direkte gjengivelse av annen tekst.
- Eksempel: En film som siterer et dikt

**Allusjon**
Indirekte henvisning.
- Eksempel: "To be or not to be" i en tale

**Pastisj**
Imitasjon av en stil.
- Eksempel: En film i noir-stil

**Parodi**
Komisk imitasjon.
- Eksempel: "Scary Movie" parodierer skrekkfilm

**Transformasjon**
Omskriving i ny form.
- Eksempel: "Ringenes herre" som film

**Hvorfor er dette viktig?**
- Rikere lesning når du gjenkjenner referanser
- Forstår hvordan skapere bygger på hverandre
- Ser sammenhenger på tvers av medier og epoker
- Ingen tekst eksisterer i vakuum`,
    },
    {
      id: 'norsk-vg1-2-8-def-4',
      type: 'definition',
      title: 'Analysere adaptasjon',
      content: `**Spørsmål å stille:**

**Om kildeteksten:**
- Hva er sentralt i originalen?
- Hvilke elementer er vanskelige å overføre?
- Hva er fortellingens kjerne?

**Om adaptasjonen:**
- Hva er beholdt fra originalen?
- Hva er endret, og hvorfor?
- Hva er lagt til?
- Hvordan brukes det nye mediets muligheter?

**Om forholdet mellom dem:**
- Er adaptasjonen tro eller fri?
- Hva går tapt i overføringen?
- Hva vinnes i det nye mediet?
- Gir adaptasjonen ny innsikt i kilden?

**Ikke sammenligning som konkurranse:**
Det handler ikke om hva som er "best", men om å forstå hvordan det samme stoffet fungerer ulikt i ulike medier.

**Tips:**
- Les/se begge med åpent sinn
- Noter konkrete forskjeller
- Tenk på hvorfor endringene er gjort
- Vurder hva hvert medium gjør best`,
    },
    {
      id: 'norsk-vg1-2-8-example-1',
      type: 'example',
      title: 'Eksempel: "Harry Potter" - fra bok til film',
      problem: 'Analyser hvordan Harry Potter-bøkene er adaptert til film. Hva er beholdt, endret og tapt?',
      solution: `**Harry Potter som adaptasjon**

**Beholdt fra bøkene:**
- Hovedhandlingen og sentrale karakterer
- Den magiske verdenen og Hogwarts
- Nøkkelscener og ikoniske øyeblikk
- Temaer: vennskap, mot, kamp mot ondskap

**Endret:**
- **Forkorting:** Bøkene er lange; mye må kuttes
  - Sidekarakterer forenkles eller fjernes
  - Subplott strykes
- **Visuell konkretisering:** Bøkene overlater mye til fantasien
  - Filmene bestemmer hvordan alt ser ut
  - Noen synes dette er en gevinst, andre et tap
- **Tempo:** Bøkene har rolige partier
  - Filmene fokuserer på action og drama
- **Karakterers indre liv:** Vanskelig å filme tanker
  - Harrys indre konflikter formidles gjennom dialog og handling

**Tapt i overføringen:**
- Detaljrikdommen i verdensbyggingen
- Harrys refleksjoner og perspektiv
- Humor og ordspill i dialogen
- Leserens personlige bilder

**Vunnet i filmversjonen:**
- Visuell prakt og spesialeffekter
- Musikk som skaper stemning
- Skuespillernes fortolkning
- Tilgjengelighet for ikke-lesere

**Konklusjon:**
Filmene er ikke "bedre" eller "dårligere" enn bøkene - de er noe annet. En god adaptasjon fanger essensen i et nytt medium.`,
    },
    {
      id: 'norsk-vg1-2-8-example-2',
      type: 'example',
      title: 'Eksempel: Norsk litteratur på film',
      problem: 'Hvordan er norske litterære verk blitt adaptert til film og TV?',
      solution: `**Norske adaptasjoner**

**"Kampen om tungtvannet" (1948/2015)**
- Basert på virkelige hendelser, skildret i flere bøker
- 1948-filmen: Dokumentarisk stil, mange av de virkelige sabotørene spiller seg selv
- 2015-serien: Mer dramatisert, fokus på karakterer
- Viser hvordan samme historie kan fortelles ulikt i ulike epoker

**"Kristin Lavransdatter" (1995)**
- Basert på Sigrid Undsets trilogi
- Utfordring: Komprimere tre bind til én film
- Valg: Fokusere på ungdom og kjærlighetshistorie
- Kritisert for å forenkle, men roses for visuell prakt

**"Beatles" (2014)**
- Basert på Lars Saabye Christensens roman
- Beholder episodisk struktur og tidskoloritt
- Utfordring: Formidle introspeksjon uten voice-over
- Musikken får stor rolle (som i romanen)

**"Snømannen" (2017)**
- Basert på Jo Nesbøs krimroman
- Internasjonal produksjon med store stjerner
- Kritisert for å være rotete og usammenhengende
- Illustrerer hvor vanskelig adaptasjon kan være

**"Troll" (2022)**
- Ikke direkte adaptasjon, men trekker på norsk folklore
- Intertekstualitet: Asbjørnsen og Moe, Theodor Kittelsen
- Viser hvordan tradisjonsfortellinger leves videre i nye medier

**Fellestrekk:**
Norske adaptasjoner må ofte velge mellom internasjonal appell og lokal autentisitet.`,
    },
    // Exercises
    {
      id: 'norsk-vg1-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "adaptasjon" i mediesammenheng?',
        options: [
          { id: 'a', text: 'En oversettelse fra ett språk til et annet', isCorrect: false },
          { id: 'b', text: 'Overføring av et verk fra ett medium til et annet', isCorrect: true },
          { id: 'c', text: 'En kopi av et originalt verk', isCorrect: false },
          { id: 'd', text: 'En kritikk av et litterært verk', isCorrect: false },
        ],
        solution: 'Adaptasjon betyr å overføre et verk fra ett medium til et annet, for eksempel fra roman til film. Dette innebærer alltid tolkningsvalg og tilpasning til det nye mediets muligheter og begrensninger.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er "intertekstualitet"?',
        options: [
          { id: 'a', text: 'Tekst som står mellom bildene i en tegneserie', isCorrect: false },
          { id: 'b', text: 'Forbindelser og referanser mellom ulike tekster', isCorrect: true },
          { id: 'c', text: 'Internett-baserte tekster', isCorrect: false },
          { id: 'd', text: 'Tekst som er skrevet av flere forfattere', isCorrect: false },
        ],
        solution: 'Intertekstualitet handler om forbindelser mellom tekster - hvordan tekster refererer til, siterer, parodierer eller på andre måter forholder seg til andre tekster. Alle tekster er i dialog med tidligere tekster.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skiller en "fri adaptasjon" fra en "tro adaptasjon"?',
        options: [
          { id: 'a', text: 'En fri adaptasjon er gratis, en tro adaptasjon koster penger', isCorrect: false },
          { id: 'b', text: 'En tro adaptasjon følger kilden nært, en fri tar seg større friheter', isCorrect: true },
          { id: 'c', text: 'En fri adaptasjon er dårligere enn en tro adaptasjon', isCorrect: false },
          { id: 'd', text: 'En tro adaptasjon er religiøs, en fri er sekulær', isCorrect: false },
        ],
        solution: 'En tro adaptasjon forsøker å følge kildeteksten så nært som mulig, mens en fri adaptasjon tar seg større friheter - kan endre setting, tid, karakterer eller handling. Begge kan være gode; det handler om ulike tilnærminger.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gi tre eksempler på adaptasjoner du kjenner til (bok som er blitt film, tegneserie som er blitt film, eller lignende). For hvert eksempel: Er det en tro eller fri adaptasjon?',
        hints: ['Tenk på filmer du har sett som er basert på bøker', 'Marvel-filmer er basert på tegneserier', 'Disney-filmer er ofte basert på eventyr'],
        solution: 'Svaret bør inneholde tre konkrete eksempler med en kort begrunnelse for hvorfor de er tro eller fri adaptasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en bok du har lest som er blitt film. Sammenlign bok og film:',
        subTasks: [
          { label: 'a', task: 'Hva er beholdt fra boken?', solution: 'Identifiser elementer som er med i begge versjoner.' },
          { label: 'b', task: 'Hva er endret, og hvorfor tror du det er endret?', solution: 'Tenk på mediets begrensninger og muligheter.' },
          { label: 'c', task: 'Hva går tapt i filmen som fungerte i boken?', solution: 'F.eks. indre tanker, detaljrikdom, lesertempo.' },
          { label: 'd', task: 'Hva fungerer bedre i filmen enn i boken?', solution: 'F.eks. visuelle effekter, musikk, skuespill.' },
        ],
        hints: ['Ikke vurder hva som er "best" - analyser forskjellene', 'Bruk konkrete eksempler fra begge verk'],
        solution: 'Sammenligningen vurderes etter evne til å identifisere konkrete forskjeller og reflektere over hvorfor de oppstår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom disse medienes fortellermuligheter:',
        subTasks: [
          { label: 'a', task: 'Roman vs. film: Hvordan formidles karakterenes tanker?', solution: 'Roman: Direkte tilgang til tanker. Film: Må vises gjennom handling, dialog, voice-over.' },
          { label: 'b', task: 'Film vs. TV-serie: Hvordan påvirker lengden fortellingen?', solution: 'Film: Må komprimere, fokusere på hovedhandling. Serie: Kan utforske sidehistorier og karakterutvikling.' },
          { label: 'c', task: 'Litteratur vs. dataspill: Hva er forskjellen i leserens/spillerens rolle?', solution: 'Litteratur: Passiv mottaker. Spill: Aktiv deltaker som former historien.' },
        ],
        hints: ['Tenk på hvert mediums styrker og begrensninger', 'Bruk eksempler du kjenner'],
        solution: 'Svarene bør vise forståelse for hvordan ulike medier forteller historier på ulike måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['reflektere over hvordan tekster fra ulike tider og steder kan leses og forstås på ulike måter'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tre eksempler på intertekstualitet i populærkulturen (filmer, serier, sanger eller spill som refererer til litteratur eller andre tekster). Forklar hva referansen er og hvorfor den brukes.',
        hints: ['Tenk på filmer som siterer Shakespeare', 'Sanger som refererer til bibelhistorier', 'Serier som parodierer andre serier'],
        solution: 'Eksemplene bør vise konkrete referanser og reflektere over hvorfor skaperne har valgt å inkludere dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-8',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Filmen "10 Things I Hate About You" (1999) er basert på Shakespeares "Troll kan temmes". Dette er et eksempel på:',
        options: [
          { id: 'a', text: 'Tro adaptasjon - filmen følger Shakespeare nøye', isCorrect: false },
          { id: 'b', text: 'Transponering - samme fortelling flyttet til ny tid og sted', isCorrect: true },
          { id: 'c', text: 'Parodi - filmen gjør narr av Shakespeare', isCorrect: false },
          { id: 'd', text: 'Sitat - filmen siterer Shakespeare direkte', isCorrect: false },
        ],
        solution: 'Dette er en transponering - grunnfortellingen fra Shakespeare er bevart, men flyttet til 90-tallets amerikanske high school. Karakterene og konfliktene er gjenkjennelige, men konteksten er helt ny.',
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et eventyr du kjenner (f.eks. Askepott, Snøhvit, eller et norsk folkeeventyr) og forklar hvordan det har blitt adaptert i ulike medier over tid.',
        hints: ['Tenk på Disney-versjoner, nyere filmer, TV-serier', 'Vurder hva som er endret i ulike versjoner', 'Reflekter over hvorfor eventyr er så populære å adaptere'],
        solution: 'Svaret bør vise kjennskap til flere versjoner av samme eventyr og reflektere over hvordan fortellingen endres mellom medier og epoker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['reflektere over hvordan tekster fra ulike tider og steder kan leses og forstås på ulike måter'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (400-500 ord) av en adaptasjon du kjenner godt. Analyser:',
        subTasks: [
          { label: 'a', task: 'Kort om kildeteksten og adaptasjonen', solution: 'Presenterer begge verkene.' },
          { label: 'b', task: 'Hva er adaptasjonens forhold til kilden (tro, fri, transponering)?', solution: 'Kategoriser og begrunn.' },
          { label: 'c', task: 'Konkrete eksempler på hva som er beholdt, endret og lagt til', solution: 'Minst to eksempler i hver kategori.' },
          { label: 'd', task: 'Vurder: Fanger adaptasjonen essensen i kildeteksten?', solution: 'Begrunnet vurdering.' },
        ],
        hints: ['Velg en adaptasjon du kjenner både kilden og adaptasjonen til', 'Bruk fagbegreper fra kapittelet', 'Gi konkrete eksempler'],
        solution: 'Analysen vurderes etter bruk av fagbegreper, konkrete eksempler og evne til å reflektere over forholdet mellom kilde og adaptasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forestill deg at du skal adaptere en novelle eller et kapittel fra en roman til en kortfilm (10-15 minutter). Skriv et kort notat (300-400 ord) der du forklarer:',
        subTasks: [
          { label: 'a', task: 'Hvilken tekst vil du adaptere, og hvorfor?', solution: 'Begrunnet valg av kildetekst.' },
          { label: 'b', task: 'Hva må kuttes eller forenkles på grunn av tidsrammen?', solution: 'Konkrete valg om hva som tas med.' },
          { label: 'c', task: 'Hvordan vil du formidle karakterenes indre tanker visuelt?', solution: 'Konkrete ideer for filmisk fortelling.' },
          { label: 'd', task: 'Hva er det viktigste å bevare fra originalen?', solution: 'Identifiser essensen i teksten.' },
        ],
        hints: ['Velg en tekst med tydelig handling og konflikt', 'Tenk på hva film kan gjøre som tekst ikke kan', 'Vær realistisk om hva som er mulig på kort tid'],
        solution: 'Notatet vurderes etter forståelse for adaptasjonens utfordringer og kreative løsninger på mediespesifikke problemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['lese, analysere og tolke nyere skjønnlitteratur'],
      },
    },
    {
      id: 'norsk-vg1-2-8-ex-12',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter i gruppe eller skriv et essay (400-500 ord): "En filmatisering kan aldri bli like god som boken." Er du enig eller uenig? Argumenter for ditt syn med eksempler.',
        hints: ['Tenk på hva "god" betyr - er det det samme for bok og film?', 'Bruk konkrete eksempler på vellykkede og mislykkede adaptasjoner', 'Vurder om sammenligning er meningsfull'],
        solution: 'Svaret vurderes etter evne til å argumentere for sitt syn, bruke konkrete eksempler, og reflektere over hva det betyr å sammenligne ulike medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        competenceGoals: ['reflektere over hvordan tekster fra ulike tider og steder kan leses og forstås på ulike måter'],
      },
    },
    {
      id: 'norsk-vg1-2-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nøkkelbegreper:**
- **Adaptasjon:** Overføring av verk fra ett medium til et annet
- **Tro vs. fri adaptasjon:** Hvor nært adaptasjonen følger kilden
- **Transponering:** Flytter historien til ny kontekst (tid/sted)
- **Intertekstualitet:** Forbindelser og referanser mellom tekster
- **Mediespesifikke virkemidler:** Hvert medium har egne styrker og begrensninger

**Det viktigste å huske:**
1. Adaptasjon er ikke kopiering, men gjenskapelse i nytt medium
2. Ulike medier forteller historier på ulike måter
3. "Tro" adaptasjon er ikke nødvendigvis bedre enn "fri"
4. Alle tekster er i dialog med andre tekster (intertekstualitet)

**Kompetansemål dette kapittelet dekker:**
- Lese, analysere og tolke nyere skjønnlitteratur
- Utforske og reflektere over hvordan tekster fremstiller møter mellom ulike kulturer og perspektiv
- Reflektere over hvordan tekster fra ulike tider og steder kan leses og forstås på ulike måter`,
    },
    {
      id: 'norsk-vg1-2-8-se-ogsa',
      type: 'note',
      title: 'Se også',
      content: `**Relaterte kapitler:**
- **2.3 Drama og teater** - Dramaet som sjanger
- **2.7 Dramaturgi og scenekunst** - Dramaturgiske strukturer
- **6.2 Film som tekst** - Filmanalyse og filmens virkemidler
- **6.3 Sammensatte tekster** - Tekster som kombinerer ulike uttrykksformer`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 3
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL3: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_1_3,
  CHAPTER_NORSK_VG1_1_6,
  CHAPTER_NORSK_VG1_2_3,
  CHAPTER_NORSK_VG1_2_7,
  CHAPTER_NORSK_VG1_2_8,
];

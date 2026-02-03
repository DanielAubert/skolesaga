/**
 * Norsk VG1 - Del 3: Kapittel 1.3 og 2.3
 * Debattinnlegg og drama
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
// Samlet eksport for del 3
// ============================================================================

export const NORSK_VG1_CHAPTERS_DEL3: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_1_3,
  CHAPTER_NORSK_VG1_2_3,
];

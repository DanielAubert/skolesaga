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
      },
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
      },
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

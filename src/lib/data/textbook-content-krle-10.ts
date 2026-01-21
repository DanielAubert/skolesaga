/**
 * Tekstbok innhold for KRLE 10. klasse
 *
 * Følger LK20 læreplan for KRLE (Kristendom, religion, livssyn og etikk) ungdomstrinn.
 * Dette er avsluttende år for ungdomsskolen med fokus på dypere refleksjon og analyse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Filosofi og eksistensielle sporsmal
// ============================================================================

export const CHAPTER_KRLE_10_1_1: TextbookChapter = {
  id: 'krle-10-1-1',
  courseId: 'krle-10',
  chapterNumber: '1.1',
  title: 'Filosofi og eksistensielle sporsmal',
  description: 'Utforsk store filosofiske sporsmal om livet, doden og menneskets plass i verden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drofte eksistensielle sporsmal og svar',
    'reflektere over filosofiske tekster og anvende filosofisk samtale'
  ],
  content: [
    {
      id: 'krle-10-1-1-intro',
      type: 'text',
      content: `
# Filosofi og eksistensielle sporsmal

Filosofi betyr "kjærlighet til visdom" og handler om å stille store sporsmal
om livet, virkeligheten og hva det vil si å være menneske. Eksistensielle
sporsmal er sporsmal som berorer vår eksistens - vår væren i verden.
      `
    },
    {
      id: 'krle-10-1-1-def-eksistensielle',
      type: 'definition',
      title: 'Eksistensielle sporsmal',
      content: `**Eksistensielle sporsmal** er sporsmal om menneskets tilværelse og mening:

- Hva er meningen med livet?
- Hvorfor er vi her?
- Hva skjer etter doden?
- Har vi fri vilje?
- Hva er lykke?
- Hvordan bor vi leve?

Disse sporsmålene har opptatt mennesker i alle kulturer og til alle tider.`
    },
    {
      id: 'krle-10-1-1-filosofer',
      type: 'text',
      title: 'Store filosofer',
      content: `
## Filosofer som har preget tenkningen

**Sokrates (469-399 f.Kr.)**
- "Jeg vet at jeg ingenting vet"
- Sokratisk metode: stille sporsmal for å komme frem til sannhet
- Mente at dyd er kunnskap

**Platon (428-348 f.Kr.)**
- Lære om ideene: den sanne virkelighet er bakenfor det vi ser
- Hulelignelsen: vi ser bare skygger av virkeligheten
- Grunnla Akademiet i Athen

**Aristoteles (384-322 f.Kr.)**
- Mennesket er et "zoon politikon" (politisk dyr)
- Lykke (eudaimonia) kommer gjennom dyd
- Gylden middelvei mellom ekstremer
      `
    },
    {
      id: 'krle-10-1-1-hulelignelsen',
      type: 'example',
      title: 'Platons hulelignelse',
      problem: 'Hva kan Platons hulelignelse lære oss om kunnskap og virkelighet?',
      solution: `Hulelignelsen beskriver mennesker lenket fast i en hule, der de bare ser skygger på veggen.
En person slipper fri og oppdager at skyggene kom fra figurer foran et bål - og til slutt
ser han sollyset utenfor hulen (den sanne virkeligheten).

**Tolkning:**
- Skyggene = vår daglige erfaring
- Bålet = fornuften
- Solen = den ultimate sannhet/det gode
- Filosofen må hjelpe andre ut av hulen (uvitenhet)`
    },
    {
      id: 'krle-10-1-1-eksistensialisme',
      type: 'text',
      title: 'Eksistensialismen',
      content: `
## Eksistensialisme

En filosofisk retning fra 1800-1900-tallet som setter menneskets eksistens i sentrum.

**Soren Kierkegaard (1813-1855)**
- Regnes som eksistensialismens far
- "Subjektivitet er sannhet"
- Mennesket må velge seg selv

**Jean-Paul Sartre (1905-1980)**
- "Eksistensen kommer for essensen"
- Vi er "domt til frihet"
- Vi er ansvarlige for våre valg

**Simone de Beauvoir (1908-1986)**
- "Man fodes ikke som kvinne, man blir det"
- Frihet og ansvar
- Feministisk eksistensialisme
      `
    },
    {
      id: 'krle-10-1-1-note',
      type: 'note',
      title: 'Filosofisk samtale',
      content: `En filosofisk samtale kjennetegnes av:

- **Åpenhet**: Ingen svar er gitt på forhand
- **Begrunnelse**: Man må begrunne sine påstander
- **Lytting**: Man lytter til andres synspunkter
- **Undring**: Man utforsker sporsmal, ikke bare svarer
- **Kritisk tenkning**: Man vurderer argumenter saklig`
    },
    {
      id: 'krle-10-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr filosofi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr ordet "filosofi"?',
            solution: 'Kjærlighet til visdom',
            multipleChoiceOptions: ['Kjærlighet til visdom', 'Søken etter makt', 'Studiet av naturen', 'Analyse av tall'],
          },
        ],
        solution: 'Filosofi kommer fra gresk og betyr kjærlighet (philo) til visdom (sophia).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er den sokratiske metoden?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner den sokratiske metoden?',
            solution: 'Å stille sporsmal for å komme frem til sannhet',
            multipleChoiceOptions: ['Å stille sporsmal for å komme frem til sannhet', 'Å gi lange forelesninger', 'Å lese hellige tekster', 'Å gjore vitenskapelige eksperimenter'],
          },
        ],
        solution: 'Sokrates stilte sporsmal som fikk folk til å tenke gjennom sine egne overbevisninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva mente Sartre med at vi er "domt til frihet"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente Sartre med at mennesket er "domt til frihet"?',
            solution: 'At vi alltid må velge og er ansvarlige for valgene våre',
            multipleChoiceOptions: ['At vi alltid må velge og er ansvarlige for valgene våre', 'At vi kan gjore hva vi vil uten konsekvenser', 'At vi er fanget i et fengsel', 'At vi ikke har noe ansvar'],
          },
        ],
        solution: 'Sartre mente at mennesket er fritt til å velge, men dette medforer også fullt ansvar for sine valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over eksistensielle sporsmal.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et eksistensielt sporsmal (f.eks. "Hva er meningen med livet?") og diskuter hvordan en religiøs og en ikke-religiøs person kan svare forskjellig.',
            solution: 'En religiøs person kan mene at meningen er gitt av Gud - å tjene Gud, folge hans vilje, oppnå frelse. En ikke-religiøs person (f.eks. humanist) kan mene at vi må skape vår egen mening gjennom relasjoner, arbeid, kreativitet og bidrag til samfunnet.',
            multipleChoiceOptions: ['Religiøse ser mening fra Gud, ikke-religiøse skaper egen mening', 'Begge mener det samme', 'Bare religiøse stiller slike sporsmal', 'Bare ikke-religiøse har svar'],
          },
          {
            label: 'b',
            task: 'Forklar hva Platons hulelignelse kan lære oss om forskjellen mellom mening og kunnskap.',
            solution: 'Hulelignelsen viser at det vi tror vi vet (skyggene), kan være en ufullstendig forståelse. Sann kunnskap krever at vi stiller sporsmal, utforsker virkeligheten og er villige til å endre oppfatning. Vi må ikke la oss nöye med "skygger" av sannheten.',
            multipleChoiceOptions: ['Vi må søke dypere forståelse, ikke bare akseptere det vi ser', 'Alle meninger er like gode', 'Kunnskap er umulig', 'Bare filosofer kan ha kunnskap'],
          }
        ],
        hints: ['Tenk på hva som gir mening for ulike mennesker', 'Hulelignelsen handler om å søke sannhet'],
        solution: 'Filosofi hjelper oss å reflektere over de store sporsmålene i livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Religionskritikk
// ============================================================================

export const CHAPTER_KRLE_10_1_2: TextbookChapter = {
  id: 'krle-10-1-2',
  courseId: 'krle-10',
  chapterNumber: '1.2',
  title: 'Religionskritikk',
  description: 'Utforsk ulike former for kritikk av religion og religionens forsvar.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drofte ulike former for religionskritikk og religionens svar',
    'reflektere over forholdet mellom religion, vitenskap og fornuft'
  ],
  content: [
    {
      id: 'krle-10-1-2-intro',
      type: 'text',
      content: `
# Religionskritikk

Religionskritikk er kritisk vurdering av religion - dens påstander, praksis
og rolle i samfunnet. Kritikken kan komme fra ulike hold: filosofi, vitenskap,
etikk eller fra andre religioner.
      `
    },
    {
      id: 'krle-10-1-2-def-kritikk',
      type: 'definition',
      title: 'Former for religionskritikk',
      content: `**Religionskritikk** kan deles inn i ulike typer:

**Kunnskapskritikk**: Religion bygger på tro, ikke bevis
**Etisk kritikk**: Religion har ført til undertrykkelse og vold
**Psykologisk kritikk**: Religion er onsketenkning eller illusjon
**Sosiologisk kritikk**: Religion er et maktmiddel
**Intern kritikk**: Kritikk fra troende som vil reformere`
    },
    {
      id: 'krle-10-1-2-klassisk',
      type: 'text',
      title: 'Klassiske religionskritikere',
      content: `
## Store religionskritikere

**Ludwig Feuerbach (1804-1872)**
- Religion er menneskets projeksjon av sine egne ønsker
- Gud er skapt i menneskets bilde, ikke omvendt
- "Teologi er antropologi" - læren om Gud er egentlig læren om mennesket

**Karl Marx (1818-1883)**
- "Religion er opium for folket"
- Religion holder undertrykte nede ved å love belonning i det neste liv
- Vil forsvinne når undertrykkelsen opphorer

**Sigmund Freud (1856-1939)**
- Religion er en illusjon basert på onsketenkning
- Gud er en farsfigur vi skaper for trygghet
- Religion er en form for kollektiv nevrose

**Friedrich Nietzsche (1844-1900)**
- "Gud er dod" - religionen har mistet sin kraft
- Kristendommen er "slavemoral" som svekker mennesket
- Mennesket må skape egne verdier
      `
    },
    {
      id: 'krle-10-1-2-ny-ateisme',
      type: 'text',
      title: 'Ny ateisme',
      content: `
## Ny ateisme (2000-tallet)

En bevegelse som aktivt argumenterer mot religion:

**Richard Dawkins** - Biolog
- Religion er en "virus" som spres kulturelt
- Gud er en vitenskapelig hypotese som kan motbevises
- Bok: "Gud - en vrangforestilling" (2006)

**Sam Harris** - Filosof
- Religion er farlig fordi den forer til vold
- Vitenskap kan svare på moralske sporsmal

**Christopher Hitchens** - Forfatter
- "Religion forgifter alt"
- Kritiserte religionens historiske overgrep

**Daniel Dennett** - Filosof
- Religion bor studeres vitenskapelig
- Tro er et naturlig fenomen som kan forklares
      `
    },
    {
      id: 'krle-10-1-2-forsvar',
      type: 'text',
      title: 'Religionens forsvar',
      content: `
## Hvordan svarer religionen på kritikk?

**På kunnskapskritikk:**
- Tro og vitenskap handler om ulike ting
- Mange vitenskapsfolk er troende
- Noen ting kan ikke måles vitenskapelig

**På etisk kritikk:**
- Misbruk av religion er ikke religionens feil
- Religion har også inspirert til godt
- Ikke-religiøse ideologier har også begått overgrep

**På psykologisk kritikk:**
- At noe er onsket, betyr ikke at det er usant
- Religiøs erfaring er reell for millioner
- Religion gir mening og mål i livet

**Apologetikk**: Systematisk forsvar for religiøs tro med fornuftsargumenter.
      `
    },
    {
      id: 'krle-10-1-2-note',
      type: 'note',
      title: 'Saklig religionsdebatt',
      content: `For å ha en saklig debatt om religion bor man:

- Skille mellom kritikk av ideer og angrep på personer
- Anerkjenne at både troende og ikke-troende kan ha gode argumenter
- Unngå karikaturer og stråmenn
- Lytte til motpartens beste argumenter
- Være åpen for å endre mening`
    },
    {
      id: 'krle-10-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva mente Marx med at religion er "opium for folket"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente Marx med at religion er "opium for folket"?',
            solution: 'At religion bedover folk og holder dem nede ved å love belonning i det neste liv',
            multipleChoiceOptions: ['At religion bedover folk og holder dem nede', 'At religion er avhengighetsskapende som narkotika', 'At religion er bra for helsen', 'At prester solgte opium'],
          },
        ],
        solution: 'Marx mente at religion fikk undertrykte til å akseptere sin situasjon istedenfor å gjore opprør.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er apologetikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er apologetikk?',
            solution: 'Systematisk forsvar for religiøs tro med fornuftsargumenter',
            multipleChoiceOptions: ['Systematisk forsvar for religiøs tro med fornuftsargumenter', 'Å be om unnskyldning for religion', 'Kritikk av andre religioner', 'Vitenskapelig studie av religion'],
          },
        ],
        solution: 'Apologetikk kommer fra gresk "apologia" som betyr forsvarstale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type kritikk representerer Freud?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type religionskritikk representerer Freud?',
            solution: 'Psykologisk kritikk',
            multipleChoiceOptions: ['Psykologisk kritikk', 'Etisk kritikk', 'Sosiologisk kritikk', 'Intern kritikk'],
          },
        ],
        solution: 'Freud mente religion er en illusjon som oppfyller psykologiske behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Vurder religionskritikk og forsvar.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg én form for religionskritikk og forklar både kritikken og hvordan en religiøs person kan svare.',
            solution: 'Eksempel - Kunnskapskritikk: Kritikk: Religion bygger på tro uten bevis, mens vitenskap krever evidens. Svar: Tro og vitenskap handler om ulike sporsmal. Vitenskap forklarer "hvordan", religion forklarer "hvorfor". Mange ting (som kjærlighet) kan ikke bevises vitenskapelig.',
            multipleChoiceOptions: ['Kritikk og svar handler om ulike perspektiver på sannhet', 'Kritikk har alltid rett', 'Religion har alltid rett', 'Debatten er meningsløs'],
          },
          {
            label: 'b',
            task: 'Diskuter om det er mulig å ha en saklig debatt mellom troende og ikke-troende. Hva kreves?',
            solution: 'Det er mulig hvis begge parter: respekterer hverandre, lytter til argumenter, unngår personangrep, er åpne for å lære, skiller mellom ideer og personer, og anerkjenner at den andre kan ha gyldige poenger.',
            multipleChoiceOptions: ['Det krever gjensidig respekt, lytting og åpenhet', 'Det er umulig', 'Bare den ene siden må lytte', 'Man trenger ikke respektere motparten'],
          }
        ],
        hints: ['Tenk på ulike typer kritikk', 'Hva kjennetegner en god samtale?'],
        solution: 'Religionsdebatt kan være fruktbar når den fores med respekt og åpenhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Etiske dilemmaer
// ============================================================================

export const CHAPTER_KRLE_10_2_1: TextbookChapter = {
  id: 'krle-10-2-1',
  courseId: 'krle-10',
  chapterNumber: '2.1',
  title: 'Etiske dilemmaer',
  description: 'Utforsk komplekse etiske situasjoner og ulike måter å resonnere på.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drofte etiske dilemmaer med utgangspunkt i ulike etiske modeller',
    'reflektere over hvordan etikk brukes i hverdagen og samfunnet'
  ],
  content: [
    {
      id: 'krle-10-2-1-intro',
      type: 'text',
      content: `
# Etiske dilemmaer

Et etisk dilemma er en situasjon der det er vanskelig å avgjore hva som er
riktig å gjore - ofte fordi ulike verdier eller prinsipper kommer i konflikt
med hverandre.
      `
    },
    {
      id: 'krle-10-2-1-def-dilemma',
      type: 'definition',
      title: 'Hva er et etisk dilemma?',
      content: `Et **etisk dilemma** kjennetegnes av:

- To eller flere handlingsalternativer
- Ingen løsning er åpenbart "riktig"
- Ulike verdier eller plikter står mot hverandre
- Valget får konsekvenser for andre mennesker

**Eksempel**: Er det riktig å lyve for å beskytte noen?
(Ærlighet vs. omsorg)`
    },
    {
      id: 'krle-10-2-1-modeller',
      type: 'text',
      title: 'Etiske modeller',
      content: `
## Tre hovedmodeller i etikken

**Konsekvensetikk (Utilitarisme)**
- Handler om resultater/konsekvenser
- Riktig handling = størst mulig lykke for flest mulig
- Representanter: Jeremy Bentham, John Stuart Mill

**Pliktetikk (Deontologi)**
- Handler om prinsipper og plikter
- Noen handlinger er gale uansett konsekvenser
- Representant: Immanuel Kant
- "Handle slik at du alltid behandler mennesket som mål, aldri bare som middel"

**Dydsetikk**
- Handler om karakter og dyder
- Riktig handling = det et dydig menneske ville gjort
- Representant: Aristoteles
- Dyder: Mot, måtehold, rettferdighet, visdom
      `
    },
    {
      id: 'krle-10-2-1-trolley',
      type: 'example',
      title: 'Sporvognsdilemmaet',
      problem: 'En losk sporvogn er på vei mot fem personer som vil do. Du kan trekke i en spak og sende vognen inn på et sidespor der én person vil do. Hva bor du gjore?',
      solution: `**Konsekvensetikk**: Trekk i spaken. Fem liv er mer verdt enn ett.

**Pliktetikk**: Ikke trekk. Å aktivt drepe én person er galt, selv for å redde fem.
Du gjor deg skyldig i drap ved å trekke i spaken.

**Dydsetikk**: Hva ville et modig og rettferdig menneske gjort? Kanskje finne en
annen løsning?

Dette dilemmaet viser hvordan ulike etiske modeller kan gi ulike svar.`
    },
    {
      id: 'krle-10-2-1-moderne',
      type: 'text',
      title: 'Moderne etiske dilemmaer',
      content: `
## Dilemmaer i vår tid

**Medisinsk etikk**
- Aktiv dodshjelp (eutanasi)
- Organdonasjon
- Prioritering av pasienter
- Genteknologi

**Miljøetikk**
- Klimahandling vs. okonomisk vekst
- Dyrs rettigheter
- Kommende generasjoners rettigheter

**Teknologietikk**
- Kunstig intelligens og ansvar
- Personvern vs. sikkerhet
- Sosiale medier og ytringsfrihet

**Global etikk**
- Rike vs. fattige land
- Flyktninger
- Krig og fred
      `
    },
    {
      id: 'krle-10-2-1-metode',
      type: 'note',
      title: 'Å analysere et etisk dilemma',
      content: `**Fremgangsmåte:**

1. **Beskriv situasjonen**: Hva er de faktiske omstendighetene?
2. **Identifiser verdiene**: Hvilke verdier/prinsipper står mot hverandre?
3. **Vurder alternativer**: Hvilke handlinger er mulige?
4. **Bruk etiske modeller**: Hva sier ulike modeller?
5. **Ta et standpunkt**: Hva mener du er riktig, og hvorfor?
6. **Vurder konsekvenser**: Hva blir folgende av valget?`
    },
    {
      id: 'krle-10-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner et etisk dilemma?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner et etisk dilemma?',
            solution: 'At ulike verdier eller prinsipper står mot hverandre',
            multipleChoiceOptions: ['At ulike verdier eller prinsipper står mot hverandre', 'At det bare finnes ett riktig svar', 'At det ikke finnes noen løsning', 'At alle er enige'],
          },
        ],
        solution: 'Et etisk dilemma oppstår når vi må velge mellom motstridende verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedprinsippet i konsekvensetikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedprinsippet i konsekvensetikk (utilitarisme)?',
            solution: 'Størst mulig lykke for flest mulig',
            multipleChoiceOptions: ['Størst mulig lykke for flest mulig', 'Å folge regler uansett konsekvenser', 'Å utvikle gode karaktertrekk', 'Å gjore det Gud sier'],
          },
        ],
        solution: 'Konsekvensetikken vurderer handlinger ut fra hvilke konsekvenser de gir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvem er kjent for pliktetikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken filosof er mest kjent for pliktetikk?',
            solution: 'Immanuel Kant',
            multipleChoiceOptions: ['Immanuel Kant', 'Aristoteles', 'Jeremy Bentham', 'Friedrich Nietzsche'],
          },
        ],
        solution: 'Kant mente at noen handlinger er gale i seg selv, uansett konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser et etisk dilemma.',
        subTasks: [
          {
            label: 'a',
            task: 'Dilemma: En lege har fem pasienter som trenger organer for å overleve. En frisk person kommer inn. Er det riktig å drepe den friske for å redde de fem? Bruk konsekvensetikk og pliktetikk til å analysere.',
            solution: 'Konsekvensetikk: Rent matematisk: 5 > 1. Men det ville skape frykt for leger og ødelegge tilliten til helsevesenet. Pliktetikk: Nei, det er galt å bruke et menneske som middel for andre. Mennesker har ukrenkelig verdighet.',
            multipleChoiceOptions: ['Konsekvensetikk: komplisert regnestykke. Pliktetikk: klart nei', 'Begge sier ja', 'Begge sier nei', 'Etikk kan ikke svare på dette'],
          },
          {
            label: 'b',
            task: 'Velg et moderne etisk dilemma (f.eks. klimahandling, kunstig intelligens, dodshjelp) og diskuter det fra minst to etiske perspektiver.',
            solution: 'Eksempel - Klimahandling: Konsekvensetikk: Tiltak som redder flest liv/reduserer mest lidelse bor prioriteres. Pliktetikk: Vi har plikt til å beskytte fremtidige generasjoner. Dydsetikk: Et ansvarlig menneske tar vare på miljøet.',
            multipleChoiceOptions: ['Ulike etiske modeller gir ulike perspektiver på samme dilemma', 'Alle modeller gir samme svar', 'Moderne dilemmaer kan ikke analyseres', 'Etikk er utdatert'],
          }
        ],
        hints: ['Bruk de tre etiske modellene', 'Tenk på konsekvenser, plikter og dyder'],
        solution: 'Etiske dilemmaer krever refleksjon fra flere vinkler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Livssyn og humanisme
// ============================================================================

export const CHAPTER_KRLE_10_2_2: TextbookChapter = {
  id: 'krle-10-2-2',
  courseId: 'krle-10',
  chapterNumber: '2.2',
  title: 'Livssyn og humanisme',
  description: 'Utforsk ulike livssyn med særlig fokus på humanisme som ikke-religiøst alternativ.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drofte ulike livssyn og livssynshumanisme',
    'reflektere over hva som kjennetegner et livssyn'
  ],
  content: [
    {
      id: 'krle-10-2-2-intro',
      type: 'text',
      content: `
# Livssyn og humanisme

Alle mennesker har et livssyn - et helhetlig syn på virkeligheten og hvordan
vi bor leve. Noen livssyn er religiøse, andre er sekulære (ikke-religiøse).
Humanisme er det største ikke-religiøse livssynet i Norge.
      `
    },
    {
      id: 'krle-10-2-2-def-livssyn',
      type: 'definition',
      title: 'Hva er et livssyn?',
      content: `Et **livssyn** inneholder svar på sporsmål som:

**Virkelighetsforståelse**: Hva finnes? Finnes Gud?
**Menneskesynet**: Hva er et menneske? Har vi fri vilje?
**Etikk**: Hva er rett og galt? Hvordan bor vi leve?
**Mening**: Hva er meningen med livet?
**Død**: Hva skjer etter doden?

Livssyn kan være:
- **Religiøse**: Kristendom, islam, buddhisme...
- **Sekulære**: Humanisme, naturalisme...`
    },
    {
      id: 'krle-10-2-2-humanisme',
      type: 'text',
      title: 'Humanisme',
      content: `
## Livssynshumanisme

**Grunnleggende ideer:**
- Mennesket står i sentrum
- Fornuft og vitenskap er veien til kunnskap
- Etikk uten religion
- Alle mennesker har lik verdi
- Menneskerettigheter

**Humanistisk menneskesyn:**
- Mennesket er et resultat av naturlig evolusjon
- Vi har evne til fornuft, empati og moral
- Ingen overnaturlig sjel
- Livet har den meningen vi selv skaper

**Human-Etisk Forbund** (stiftet 1956)
- Norges største livssynsorganisasjon utenom kirken
- Ca. 100 000 medlemmer
- Tilbyr borgerlig konfirmasjon, vielser og gravferder
      `
    },
    {
      id: 'krle-10-2-2-amsterdam',
      type: 'definition',
      title: 'Amsterdam-deklarasjonen',
      content: `**Amsterdam-deklarasjonen** (2002) er humanismens "trosbekjennelse":

1. Humanisme er etisk - verdighet og frihet for alle
2. Humanisme er rasjonell - fornuft og vitenskap
3. Humanisme støtter demokrati og menneskerettigheter
4. Humanisme krever personlig frihet med sosialt ansvar
5. Humanisme er et livssynsalternativ til religion
6. Humanisme verdsetter kunst og kreativitet
7. Humanisme er et livssyn for hele verden`
    },
    {
      id: 'krle-10-2-2-andre',
      type: 'text',
      title: 'Andre sekulære livssyn',
      content: `
## Andre ikke-religiøse livssyn

**Naturalisme**
- Bare det naturlige finnes
- Alt kan forklares vitenskapelig
- Ingen overnaturlige krefter

**Eksistensialisme**
- Mennesket er fritt og må skape mening
- Angst og ansvar
- Autentisitet

**Nihilisme**
- Livet har ingen iboende mening
- Verdier er menneskeskapte
- Kan fore til pessimisme eller frihet

**Ateisme**
- Tror ikke på noen gud(er)
- Kan kombineres med andre livssyn
- Ikke automatisk humanist
      `
    },
    {
      id: 'krle-10-2-2-note',
      type: 'note',
      title: 'Livssynsåpenhet',
      content: `I Norge har vi livssynsåpenhet som ideal:

- Staten skal være nøytral i livssynssporsmål
- Alle livssyn skal behandles likt
- Respekt for ulike overbevisninger
- Felles verdier på tvers av livssyn (menneskerettigheter)

KRLE-faget skal gi kjennskap til ulike livssyn uten å favorisere noen.`
    },
    {
      id: 'krle-10-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et livssyn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et livssyn?',
            solution: 'Et helhetlig syn på virkeligheten og hvordan vi bor leve',
            multipleChoiceOptions: ['Et helhetlig syn på virkeligheten og hvordan vi bor leve', 'En politisk overbevisning', 'En vitenskapelig teori', 'Et yrke'],
          },
        ],
        solution: 'Et livssyn svarer på sporsmål om mening, etikk og virkelighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er Human-Etisk Forbund?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er Human-Etisk Forbund?',
            solution: 'Norges største livssynsorganisasjon utenom kirken',
            multipleChoiceOptions: ['Norges største livssynsorganisasjon utenom kirken', 'En kristen organisasjon', 'Et politisk parti', 'En miljøorganisasjon'],
          },
        ],
        solution: 'Human-Etisk Forbund organiserer humanister og tilbyr livssseremonier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom humanisme og religiøse livssyn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom humanisme og religiøse livssyn?',
            solution: 'Humanisme tror ikke på noen gud eller overnaturlige krefter',
            multipleChoiceOptions: ['Humanisme tror ikke på noen gud eller overnaturlige krefter', 'Humanisme har ingen etikk', 'Humanisme er mot menneskerettigheter', 'Det er ingen forskjell'],
          },
        ],
        solution: 'Humanisme er basert på fornuft og vitenskap, ikke tro på det overnaturlige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign livssyn.',
        subTasks: [
          {
            label: 'a',
            task: 'Sammenlign hvordan humanisme og kristendom svarer på sporsmålet "Hva er meningen med livet?"',
            solution: 'Humanisme: Livet har ingen ferdig mening - vi må skape mening selv gjennom relasjoner, kunnskap, kreativitet og bidrag til samfunnet. Kristendom: Meningen er gitt av Gud - å elske Gud og nesten, folge Guds vilje, og oppnå evig liv.',
            multipleChoiceOptions: ['Humanisme: vi skaper mening. Kristendom: mening er gitt av Gud', 'Begge mener det samme', 'Ingen av dem har svar', 'Sporsmålet er meningslost'],
          },
          {
            label: 'b',
            task: 'Diskuter: Kan en humanist og en kristen være enige om etikk? Gi eksempler.',
            solution: 'Ja, de kan være enige om mye: menneskeverd, rettferdighet, omsorg for andre, ærlighet. Eksempel: Begge støtter menneskerettigheter, selv om begrunnelsen er ulik (humanist: menneskelig fornuft, kristen: mennesket skapt i Guds bilde).',
            multipleChoiceOptions: ['Ja, de kan dele verdier selv om begrunnelsen er ulik', 'Nei, de er alltid uenige', 'Bare religiøse har etikk', 'Bare humanister har etikk'],
          }
        ],
        hints: ['Tenk på kilder til mening', 'Menneskerettigheter er et felles grunnlag'],
        solution: 'Ulike livssyn kan dele verdier selv om verdensbildet er forskjellig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Religiøst mangfold i Norge
// ============================================================================

export const CHAPTER_KRLE_10_3_1: TextbookChapter = {
  id: 'krle-10-3-1',
  courseId: 'krle-10',
  chapterNumber: '3.1',
  title: 'Religiøst mangfold i Norge',
  description: 'Utforsk det religiøse landskapet i Norge og hvordan det har endret seg.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive religiøst mangfold i Norge',
    'reflektere over religionsfrihet og livssynspluralisme'
  ],
  content: [
    {
      id: 'krle-10-3-1-intro',
      type: 'text',
      content: `
# Religiøst mangfold i Norge

Norge har gått fra å være et nokså homogent kristent samfunn til å bli et
flerkulturelt og flerreligiøst samfunn. I dag finnes de fleste av verdens
religioner representert i Norge.
      `
    },
    {
      id: 'krle-10-3-1-historie',
      type: 'text',
      title: 'Historisk utvikling',
      content: `
## Fra statskirke til mangfold

**For 1845**: Bare luthersk kristendom var tillatt
**1845**: Dissenterloven - andre kristne kirker tillatt
**1891**: Jødisk trossamfunn tillatt
**1956**: Human-Etisk Forbund stiftet
**1970-tallet**: Innvandring bringer nye religioner
**2012**: Statskirken oppheves - Den norske kirke blir selvstendig

**I dag** har vi full religionsfrihet og ca. 700 registrerte tros- og livssynssamfunn.
      `
    },
    {
      id: 'krle-10-3-1-statistikk',
      type: 'definition',
      title: 'Religiøs tilhørighet i Norge',
      content: `**Tilhørighet i Norge i dag (ca. tall):**

- Den norske kirke: ca. 65% av befolkningen
- Andre kristne samfunn: ca. 5%
- Islam: ca. 3-4% (ca. 200 000 muslimer)
- Human-Etisk Forbund: ca. 2%
- Andre religioner: ca. 1-2%
- Ingen tilhørighet: ca. 20% (oker)

**NB**: Medlemskap sier ikke alt om faktisk tro eller praksis. Mange
kirkemedlemmer deltar sjelden, mens mange uten tilhørighet har en personlig tro.`
    },
    {
      id: 'krle-10-3-1-religioner',
      type: 'text',
      title: 'Religioner i Norge',
      content: `
## De største religionene i Norge

**Kristendom**
- Den norske kirke (luthersk)
- Katolske kirke (voksende pga. innvandring)
- Pinsebevegelsen, Frikirken, Adventister

**Islam**
- Ca. 200 000 muslimer
- Sunni-majoriteten, noen shia
- Moskeer i de fleste storre byer

**Buddhisme**
- Ca. 20 000 tilhengere
- Vietnamesisk, thailandsk og vestlig buddhisme

**Hinduisme**
- Ca. 10 000 tilhengere
- Tamilsk hinduisme størst

**Sikhisme, jødedom, bahai...**
      `
    },
    {
      id: 'krle-10-3-1-frihet',
      type: 'definition',
      title: 'Religionsfrihet',
      content: `**Religionsfrihet** er en menneskerett som innebærer:

- Frihet til å ha en religion eller et livssyn
- Frihet til å skifte religion
- Frihet til å praktisere sin tro
- Frihet til å ikke ha religion
- Frihet fra tvang i trossporsmål

**Grunnloven § 16**: "Alle innbyggere i riket har fri religionsutøvelse."

Religionsfrihet kan begrenses hvis praksisen skader andre eller bryter loven.`
    },
    {
      id: 'krle-10-3-1-utfordringer',
      type: 'note',
      title: 'Utfordringer i et flerreligiøst samfunn',
      content: `**Mulige utfordringer:**
- Fordommer og diskriminering
- Religionskonflikter
- Integreringssporsmål
- Balanse mellom religionsfrihet og andre rettigheter

**Mulige løsninger:**
- Kunnskap og dialog
- Felles verdier (menneskerettigheter)
- Respekt for forskjeller
- Tydelige regler som gjelder alle`
    },
    {
      id: 'krle-10-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Når ble statskirken opphevet i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble statskirken formelt opphevet i Norge?',
            solution: '2012',
            multipleChoiceOptions: ['2012', '1814', '1905', '2000'],
          },
        ],
        solution: 'I 2012 ble Den norske kirke formelt skilt fra staten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Omtrent hvor mange muslimer er det i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Omtrent hvor mange muslimer bor det i Norge?',
            solution: 'Ca. 200 000',
            multipleChoiceOptions: ['Ca. 200 000', 'Ca. 50 000', 'Ca. 1 million', 'Ca. 10 000'],
          },
        ],
        solution: 'Islam er den nest største religionen i Norge med ca. 200 000 tilhengere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva innebærer religionsfrihet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke friheter innebærer religionsfrihet?',
            solution: 'Frihet til å ha, skifte og praktisere religion, samt frihet til å ikke ha religion',
            multipleChoiceOptions: ['Frihet til å ha, skifte og praktisere religion', 'Bare frihet til å være kristen', 'Frihet til å gjøre hva man vil', 'Frihet fra alle regler'],
          },
        ],
        solution: 'Religionsfrihet er en grunnleggende menneskerett som beskytter alle livssyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over religiøst mangfold.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke fordeler kan religiøst mangfold ha for et samfunn?',
            solution: 'Fordeler: Kulturell rikdom, ulike perspektiver, toleranse, internasjonale forbindelser, bidrag til samfunnet fra ulike grupper, mulighet til å lære av hverandre.',
            multipleChoiceOptions: ['Kulturell rikdom, toleranse og ulike perspektiver', 'Det er bare ulemper', 'Ingen fordeler eller ulemper', 'Bare religiøse har fordeler'],
          },
          {
            label: 'b',
            task: 'Nevn noen utfordringer med religiøst mangfold og foreslå løsninger.',
            solution: 'Utfordringer: Fordommer, misforståelser, verdikonflikter. Løsninger: Utdanning om ulike religioner (som KRLE-faget), dialog mellom grupper, felles arenaer der folk møtes, tydelige regler som gjelder alle likt.',
            multipleChoiceOptions: ['Kunnskap, dialog og felles regler kan løse utfordringer', 'Det finnes ingen løsninger', 'Alle må bli like', 'Bare én religion bør være tillatt'],
          }
        ],
        hints: ['Tenk på både positive og negative sider', 'Kunnskap er et viktig verktøy'],
        solution: 'Et flerreligiøst samfunn krever kunnskap, respekt og dialog.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Islam i dybden
// ============================================================================

export const CHAPTER_KRLE_10_3_2: TextbookChapter = {
  id: 'krle-10-3-2',
  courseId: 'krle-10',
  chapterNumber: '3.2',
  title: 'Islam i dybden',
  description: 'Fordyp deg i islamsk teologi, historie og mangfold.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drofte sentrale trekk ved islam og mangfold innen religionen',
    'utforske hvordan islam praktiseres i ulike sammenhenger'
  ],
  content: [
    {
      id: 'krle-10-3-2-intro',
      type: 'text',
      content: `
# Islam i dybden

Islam er verdens nest største religion med ca. 1,8 milliarder tilhengere.
Religionen har et rikt indre mangfold med ulike retninger, tolkninger
og praksiser. I dette kapitlet går vi dypere inn i islamsk tro og tradisjon.
      `
    },
    {
      id: 'krle-10-3-2-tro',
      type: 'definition',
      title: 'Islams trosartikler (iman)',
      content: `De seks trosartiklene i islam:

1. **Tro på Allah** - Den ene, allmektige Gud
2. **Tro på englene** - Guds budbærere og tjenere
3. **Tro på de hellige skriftene** - Koranen, men også Torah og Evangeliet i opprinnelig form
4. **Tro på profetene** - Fra Adam til Muhammad (den siste)
5. **Tro på Dommens dag** - Oppstandelse og dom
6. **Tro på skjebnen (qadr)** - Alt skjer etter Guds vilje`
    },
    {
      id: 'krle-10-3-2-kilder',
      type: 'text',
      title: 'Islams kilder',
      content: `
## De viktigste kildene i islam

**Koranen**
- Guds direkte ord til Muhammad
- 114 suraer (kapitler)
- Resiteres på arabisk
- Kan ikke oversettes "ekte" - bare tolkes

**Hadith**
- Beretninger om Muhammads ord og handlinger
- Samlet etter hans død
- Grunnlag for sunnah (tradisjon)

**Sharia**
- Islamsk lov utledet fra Koran og hadith
- Omfatter alle livets områder
- Tolkes ulikt i ulike retninger

**Ijtihad**
- Selvstendig tolkning
- Viktig i reformbevegelser
      `
    },
    {
      id: 'krle-10-3-2-retninger',
      type: 'text',
      title: 'Retninger i islam',
      content: `
## Mangfold innen islam

**Sunni (ca. 85%)**
- Folger sunnah (profetens tradisjon)
- Anerkjenner de fire første kalifene
- Fire lovskoler med ulike tolkninger
- Størst i Indonesia, Pakistan, Egypt, Tyrkia

**Shia (ca. 15%)**
- Mener Ali skulle ledet etter Muhammad
- Imamer har spesiell autoritet
- Størst i Iran, Irak, Libanon
- Ashura er en viktig høytid (minnes Husseins død)

**Sufisme**
- Mystisk retning på tvers av sunni/shia
- Fokus på indre åndelig erfaring
- Poesi, musikk, dans (f.eks. dervisher)
      `
    },
    {
      id: 'krle-10-3-2-praksis',
      type: 'text',
      title: 'Islamsk praksis i dag',
      content: `
## Hvordan praktiseres islam?

**De fem soylene** (gjennomgått i 8. klasse)
- Trosbekjennelsen, bonn, almisse, faste, pilegrimsreise

**Daglig liv**
- Halal-mat (tillatt) vs. haram (forbudt)
- Alkoholforbud
- Klesdrakt (hijab, varierer mye)
- Familieverdier

**Høytider**
- Id al-fitr (etter ramadan)
- Id al-adha (offerfesten)
- Mawlid (Muhammads fødselsdag - feires ulikt)

**Islam i Norge**
- Ca. 200 moskeer
- Islamsk Råd Norge
- Tilpasning til norsk kontekst
      `
    },
    {
      id: 'krle-10-3-2-note',
      type: 'note',
      title: 'Reformislam og debatter',
      content: `Innen islam pågår viktige debatter:

**Reformtenkere** ønsker:
- Å tolke Koranen i sin historiske kontekst
- Likestilling mellom kjønnene
- Kritisk lesning av hadith
- Dialog med vitenskap

**Konservative** mener:
- Koranen er tidløs og uforanderlig
- Tradisjonelle tolkninger må bevares
- Sharia bør ha større rolle

Muslimer i Norge har ulike syn på disse sporsmålene.`
    },
    {
      id: 'krle-10-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er hadith?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hadith i islam?',
            solution: 'Beretninger om Muhammads ord og handlinger',
            multipleChoiceOptions: ['Beretninger om Muhammads ord og handlinger', 'Et kapittel i Koranen', 'En type bonn', 'Navnet på en moske'],
          },
        ],
        solution: 'Hadith er en viktig kilde til islamsk lov og praksis ved siden av Koranen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom sunni og shia?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom sunni og shia?',
            solution: 'Uenighet om hvem som skulle lede etter Muhammad',
            multipleChoiceOptions: ['Uenighet om hvem som skulle lede etter Muhammad', 'De tror på forskjellige guder', 'De har forskjellige hellige boker', 'De ber på ulike språk'],
          },
        ],
        solution: 'Shia mener Ali (Muhammads svigersonn) skulle ledet, sunni anerkjenner de fire forste kalifene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er sufisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner sufisme?',
            solution: 'En mystisk retning med fokus på indre åndelig erfaring',
            multipleChoiceOptions: ['En mystisk retning med fokus på indre åndelig erfaring', 'En politisk bevegelse', 'En streng lovskole', 'En ny religion'],
          },
        ],
        solution: 'Sufisme bruker poesi, musikk og meditasjon for å søke nærhet til Gud.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser islam i Norge.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan kan islam tilpasses en norsk kontekst? Gi eksempler på utfordringer og løsninger.',
            solution: 'Eksempler: Bønnetider tilpasses arbeidsliv, halal-mat er tilgjengelig i butikker, moskeer bygges med norsk arkitektur, islamske ledere lærer norsk og dialog med samfunnet. Utfordringer: Misforståelser, fordommer, finne balanse mellom tradisjon og integrering.',
            multipleChoiceOptions: ['Tilpasning skjer gjennom praktiske løsninger og dialog', 'Islam kan ikke tilpasses', 'Muslimer må gi opp sin tro', 'Det er ingen utfordringer'],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor det er viktig å kjenne til mangfoldet innen islam.',
            solution: 'Fordi muslimer ikke er en ensartet gruppe. Det er stor forskjell mellom en indonesisk bonde, en iransk akademiker og en norsk-pakistansk ungdom. Å kjenne mangfoldet forebygger fordommer og stereotyper, og gir mer nyansert forståelse.',
            multipleChoiceOptions: ['For å unngå stereotyper og forstå at muslimer er ulike', 'Fordi alle muslimer er like', 'Det er ikke viktig', 'Bare for å kritisere'],
          }
        ],
        hints: ['Tenk på praktiske tilpasninger', 'Stereotyper forenkler virkeligheten'],
        solution: 'Kunnskap om mangfold forebygger fordommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Kristendommens historie
// ============================================================================

export const CHAPTER_KRLE_10_4_1: TextbookChapter = {
  id: 'krle-10-4-1',
  courseId: 'krle-10',
  chapterNumber: '4.1',
  title: 'Kristendommens historie',
  description: 'Folg kristendommens utvikling fra urkirken til i dag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drofte hvordan kristendom inngår i historiske endringsprosesser',
    'beskrive hovedtrekk i kristendommens historie'
  ],
  content: [
    {
      id: 'krle-10-4-1-intro',
      type: 'text',
      content: `
# Kristendommens historie

Fra en liten jødisk sekt i Palestina vokste kristendommen til å bli verdens
største religion. Denne reisen gjennom 2000 år har formet både religionen
og verden omkring den.
      `
    },
    {
      id: 'krle-10-4-1-urkirken',
      type: 'text',
      title: 'Urkirken (ca. 30-300)',
      content: `
## De forste kristne

**Begynnelsen**
- Jesus døde ca. år 30
- Disiplene spredde budskapet
- Paulus var sentral i misjon til ikke-jøder
- Menigheter i hele Romerriket

**Forfolgelse**
- Kristne nektet å tilbe keiseren
- Perioder med hard forfolgelse
- Martyrer (de som dode for troen)
- Katakombene i Roma

**Organisering**
- Biskoper, prester, diakoner
- Trosbekjennelser ble formulert
- Kanon (hvilke skrifter som hørte til)
      `
    },
    {
      id: 'krle-10-4-1-statsreligion',
      type: 'text',
      title: 'Statsreligion og middelalder',
      content: `
## Fra forfolgt til mektig (300-1500)

**Konstantins omvendelse (312)**
- Keiser Konstantin ble kristen
- Kristendommen ble tillatt (313)
- Kirkemoter (f.eks. Nikea 325) definerte lære

**Østlig og vestlig kirke**
- Roma vs. Konstantinopel
- Det store skisma 1054 - permanent splittelse
- Ortodokse i øst, katolikker i vest

**Middelalderen**
- Kirken var mektigst i Europa
- Paven kunne avsette konger
- Korstoger (1095-1291)
- Klostre som lærdomssentre
- Inkvisisjonen
      `
    },
    {
      id: 'krle-10-4-1-reformasjon',
      type: 'definition',
      title: 'Reformasjonen (1500-tallet)',
      content: `**Reformasjonen** splittet vestkirken:

**Martin Luther (1517)**
- 95 teser mot avlatshandel
- Bibelen alene, troen alene, nåden alene
- Lutherske kirker i Nord-Europa

**Jean Calvin (Geneve)**
- Predestinasjon (utvelgelse)
- Reformerte kirker (presbyteriansk)

**Henrik VIII (England)**
- Anglikanske kirken
- Politiske og religiøse motiver

**Konsekvenser:**
- Religiose kriger
- Motreformasjonen (katolsk reform)
- Europa delt etter konfesjon`
    },
    {
      id: 'krle-10-4-1-moderne',
      type: 'text',
      title: 'Moderne tid',
      content: `
## 1700-tallet til i dag

**Opplysningstiden**
- Fornuft utfordret tro
- Bibelkritikk
- Kirke og stat ble skilt mange steder

**Vekkelser og misjon**
- Pietisme (indre tro)
- Methodisme, pinsebevegelse
- Verdensomspennende misjon

**1900-tallet**
- Økumenikk (kristen enhet)
- Andre Vatikankonsil (katolsk reform)
- Vekst i det globale sor
- Sekularisering i vest

**I dag:**
- 2,4 milliarder kristne
- Vekst i Afrika, Latin-Amerika, Asia
- Nedgang i Europa
      `
    },
    {
      id: 'krle-10-4-1-norge',
      type: 'note',
      title: 'Kristendommen i Norge',
      content: `**Viktige hendelser:**
- Ca. 1000: Kristningen av Norge
- 1537: Reformasjonen innføres
- 1814: Luthersk statsreligion i Grunnloven
- 1845: Dissenterloven
- 2012: Statskirken oppheves

Norge har vært preget av pietistiske vekkelser, legmannsbevegelse
og en sterk statskirketradisjon.`
    },
    {
      id: 'krle-10-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Når ble kristendommen tillatt i Romerriket?',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble kristendommen offisielt tillatt i Romerriket?',
            solution: '313 (Milanoediktet)',
            multipleChoiceOptions: ['313', '30', '1054', '1517'],
          },
        ],
        solution: 'Keiser Konstantin tillot kristendommen i 313 gjennom Milanoediktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva var det store skisma?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var det store skisma i 1054?',
            solution: 'Splittelsen mellom østlig (ortodoks) og vestlig (katolsk) kirke',
            multipleChoiceOptions: ['Splittelsen mellom ortodoks og katolsk kirke', 'Reformasjonen', 'Korstogene', 'Romas fall'],
          },
        ],
        solution: 'Uenigheter om teologi og pavens makt førte til permanent splittelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Når ble reformasjonen innført i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble reformasjonen innført i Norge?',
            solution: '1537',
            multipleChoiceOptions: ['1537', '1517', '1814', '1000'],
          },
        ],
        solution: 'Christian III innførte lutherdommen i Danmark-Norge i 1537.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser kristendommens historiske rolle.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi eksempler på både positive og negative konsekvenser av kristendommens historie.',
            solution: 'Positive: Sykehus, skoler, universiteter, kunst, menneskerettigheter, veldedighet. Negative: Korstog, inkvisisjon, tvangsomvendelse, forfølgelse av annerledestenkende, støtte til kolonialisme.',
            multipleChoiceOptions: ['Både sykehus/skoler og korstog/forfølgelse', 'Bare positive konsekvenser', 'Bare negative konsekvenser', 'Ingen konsekvenser'],
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig å kjenne til kristendommens historie for å forstå Europa i dag?',
            solution: 'Fordi: Grunnlover er påvirket av kristne verdier, arkitektur (katedraler), høytider (jul, påske), kunst og litteratur, etiske idealer (nestekjærlighet), utdanningssystem. Selv sekulære europeere er formet av kristen kulturarv.',
            multipleChoiceOptions: ['Kristen kulturarv preger lover, verdier, kunst og høytider', 'Europa er ikke påvirket', 'Bare religiøse trenger å vite dette', 'Historie er irrelevant'],
          }
        ],
        hints: ['Tenk på institusjonar kirken har bygget', 'Mye av europeisk kultur har kristne røtter'],
        solution: 'Kristendommens historie er sammenvevd med europeisk historie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Religionsdialog
// ============================================================================

export const CHAPTER_KRLE_10_4_2: TextbookChapter = {
  id: 'krle-10-4-2',
  courseId: 'krle-10',
  chapterNumber: '4.2',
  title: 'Religionsdialog',
  description: 'Utforsk hvordan religioner kan møtes i samtale og samarbeid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og drofte religionsdialog og økumenikk',
    'reflektere over hvordan dialog kan bidra til fred og forståelse'
  ],
  content: [
    {
      id: 'krle-10-4-2-intro',
      type: 'text',
      content: `
# Religionsdialog

Religionsdialog er samtale mellom mennesker med ulik religiøs eller
livssynsmessig bakgrunn. Målet er gjensidig forståelse, ikke å "vinne"
eller omvende den andre.
      `
    },
    {
      id: 'krle-10-4-2-def-dialog',
      type: 'definition',
      title: 'Hva er religionsdialog?',
      content: `**Religionsdialog** kan defineres som:

Respektfull samtale mellom mennesker med ulik tro eller livssyn, der man
søker å forstå hverandres overbevisninger uten å gi opp sin egen.

**Kjennetegn:**
- Gjensidig respekt
- Villighet til å lytte
- Åpenhet for å lære
- Ærlig om uenigheter
- Søken etter felles grunn

Dialog er ikke debatt - målet er forståelse, ikke seier.`
    },
    {
      id: 'krle-10-4-2-typer',
      type: 'text',
      title: 'Former for dialog',
      content: `
## Ulike typer religionsdialog

**Livsdialog**
- Daglig sameksistens
- Naboer, kolleger, klassekamerater
- Feire hverandres høytider

**Handlingsdialog**
- Samarbeid om felles mål
- Veldedighet, fredsarbeid
- Klimakamp, menneskerettigheter

**Erfaringsdialog**
- Dele åndelige erfaringer
- Bonn, meditasjon sammen
- Pilegrimsreiser

**Teologisk dialog**
- Diskutere trosinnhold
- Finne likheter og forskjeller
- Lærd samtale

**Økumenikk**: Dialog innen kristendommen (mellom kirkesamfunn)
      `
    },
    {
      id: 'krle-10-4-2-eksempler',
      type: 'text',
      title: 'Eksempler på dialog',
      content: `
## Dialog i praksis

**Globalt:**
- FNs religionsdialog-initiativer
- Verdens religions-parlamentet
- A Common Word (muslim-kristen dialog)
- Pave Frans møter imamer

**I Norge:**
- Samarbeidsrådet for tros- og livssynssamfunn (STL)
- Dialogforum Oslo
- Kirkens dialogsenter
- Lokale dialoggrupper

**Etter 22. juli 2011:**
- Rosemarsjene samlet alle livssyn
- Økt fokus på dialog
- "En av oss" - felles identitet
      `
    },
    {
      id: 'krle-10-4-2-utfordringer',
      type: 'note',
      title: 'Utfordringer i dialogen',
      content: `**Hindringer for god dialog:**

- Manglende kunnskap om hverandre
- Historiske konflikter
- Ujevnt maktforhold
- Misjon vs. dialog-spenning
- Interne uenigheter (hvem representerer?)
- Frykten for å "gi opp" sin tro

**Suksessfaktorer:**
- Langsiktig relasjon
- Tåle uenighet
- Starte med det som forener
- Konkrete samarbeidsprosjekter`
    },
    {
      id: 'krle-10-4-2-skole',
      type: 'text',
      title: 'Dialog i skolen',
      content: `
## KRLE-faget som dialogarena

KRLE-faget i norsk skole er en form for religionsdialog fordi:
- Elever med ulik bakgrunn lærer sammen
- Man lærer om andres tro og livssyn
- Respekt for mangfold er et mål
- Kritisk tenkning kombineres med åpenhet

**Viktige prinsipper:**
- Ingen religion skal favoriseres
- Alle syn skal presenteres innenfra
- Elevene skal ikke evangeliseres
- Rom for personlig refleksjon
      `
    },
    {
      id: 'krle-10-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom dialog og debatt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom dialog og debatt?',
            solution: 'I dialog søker man forståelse, i debatt søker man seier',
            multipleChoiceOptions: ['I dialog søker man forståelse, i debatt søker man seier', 'De er det samme', 'Dialog er for religiøse, debatt for ateister', 'Debatt er mer respektfull'],
          },
        ],
        solution: 'Dialog handler om å forstå, ikke å vinne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er økumenikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er økumenikk?',
            solution: 'Dialog og samarbeid mellom ulike kristne kirkesamfunn',
            multipleChoiceOptions: ['Dialog mellom ulike kristne kirkesamfunn', 'Dialog mellom alle religioner', 'En type gudstjeneste', 'Et land i Midtosten'],
          },
        ],
        solution: 'Økumenikk betyr å arbeide for kristen enhet på tvers av kirkesamfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er handlingsdialog?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner handlingsdialog?',
            solution: 'Samarbeid om felles mål på tvers av religiøse skillelinjer',
            multipleChoiceOptions: ['Samarbeid om felles mål på tvers av religion', 'Diskusjon om teologi', 'Felles gudstjeneste', 'Debatt om hvem som har rett'],
          },
        ],
        solution: 'Handlingsdialog viser at ulike troende kan samarbeide praktisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over religionsdialog.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er religionsdialog viktig i et flerreligiøst samfunn som Norge?',
            solution: 'Fordi: Forebygger konflikt og misforståelser, bygger tillit mellom grupper, fremmer samarbeid om felles utfordringer, skaper felles identitet som norske borgere, lærer oss om andre og oss selv.',
            multipleChoiceOptions: ['Forebygger konflikt, bygger tillit og fremmer samarbeid', 'Det er ikke viktig', 'Bare religiøse trenger dialog', 'Norge er ikke flerreligiøst'],
          },
          {
            label: 'b',
            task: 'Gi et eksempel på hvordan KRLE-faget kan fungere som en dialogarena.',
            solution: 'Eksempel: Når elever med ulik bakgrunn lærer om hverandres religioner sammen. En muslimsk elev kan dele hvordan ramadan oppleves, en kristen kan fortelle om konfirmasjon, en humanist om borgerlig seremoni. Alle lærer av hverandre.',
            multipleChoiceOptions: ['Elever deler erfaringer og lærer av hverandre', 'KRLE er ikke en dialogarena', 'Bare læreren snakker', 'Religion bør ikke nevnes i skolen'],
          }
        ],
        hints: ['Tenk på hva som skjer når mennesker møtes', 'Skolen samler alle'],
        solution: 'Dialog bidrar til fredelig sameksistens og gjensidig forståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.1: Religion og politikk
// ============================================================================

export const CHAPTER_KRLE_10_5_1: TextbookChapter = {
  id: 'krle-10-5-1',
  courseId: 'krle-10',
  chapterNumber: '5.1',
  title: 'Religion og politikk',
  description: 'Utforsk forholdet mellom religion og politikk i Norge og verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drofte forholdet mellom religion, politikk og menneskerettigheter',
    'reflektere over religionens rolle i det offentlige rom'
  ],
  content: [
    {
      id: 'krle-10-5-1-intro',
      type: 'text',
      content: `
# Religion og politikk

Forholdet mellom religion og politikk har vært sentralt gjennom historien.
I dag diskuteres sporsmål som: Hvor mye skal religion påvirke lovgivning?
Bør religiøse symboler være i offentlige bygg? Kan man være religiøs politiker?
      `
    },
    {
      id: 'krle-10-5-1-modeller',
      type: 'definition',
      title: 'Ulike modeller',
      content: `**Forholdet mellom stat og religion kan organiseres ulikt:**

**Teokrati**
- Religiøse ledere styrer staten
- Guds lov er statens lov
- Eksempel: Iran, historiske eksempler

**Statskirke**
- Én religion har offisiell status
- Staten støtter kirken
- Eksempel: England, Norge (historisk)

**Sekularisme**
- Skille mellom stat og religion
- Staten er nøytral i religionssporsmål
- Eksempel: Frankrike (laicité), USA

**Livssynsåpent samfunn**
- Stat støtter alle livssyn likt
- Religion har plass i offentligheten
- Eksempel: Norge i dag`
    },
    {
      id: 'krle-10-5-1-norge',
      type: 'text',
      title: 'Religion og stat i Norge',
      content: `
## Norges modell

**Historisk:**
- 1814: Luthersk statsreligion i Grunnloven
- Kongen måtte være lutheraner
- Jøder og jesuitter forbudt (opphevet 1851/1956)

**Grunnlovsendring 2012:**
- Den norske kirke ikke lenger statskirke
- Men fortsatt særstilling (§ 16)
- Staten skal støtte alle livssyn

**I dag:**
- Kongen fortsatt medlem av Dnk
- Kirken får offentlig støtte
- Alle registrerte trossamfunn får støtte
- Religionsfrihet for alle
      `
    },
    {
      id: 'krle-10-5-1-debatter',
      type: 'text',
      title: 'Aktuelle debatter',
      content: `
## Politisk-religiøse debatter i Norge

**Religiøse symboler:**
- Hijab i politiet/rettsvesenet?
- Kors i offentlige bygg?
- Religiøse plagg på skolen?

**Verdibaserte sporsmål:**
- Abortlovgivning
- Bioteknologi
- Aktiv dødshjelp
- Ekteskap og samlivsformer

**Integreringssporsmål:**
- Religiose friskoler
- Omskjæring
- Rituell slakting
- Trossamfunns autonomi

**Ytringsfrihet:**
- Religionskritikk og blasfemi
- Karikaturer
- Hatytringer mot religiøse grupper
      `
    },
    {
      id: 'krle-10-5-1-mr',
      type: 'definition',
      title: 'Menneskerettigheter og religion',
      content: `**Menneskerettighetene beskytter religionsfrihet, men setter også grenser:**

**Artikkel 18 (FN)**:
"Enhver har rett til tanke-, samvittighets- og religionsfrihet."

**Rettigheter:**
- Ha en religion
- Skifte religion
- Praktisere religion
- Oppdra barn i sin tro

**Begrensninger:**
- Praksis som skader andre
- Diskriminering i religionens navn
- Tvang i trossporsmål
- Konflikt med andre rettigheter

Spenning mellom religionsfrihet og likestilling er særlig debattert.`
    },
    {
      id: 'krle-10-5-1-note',
      type: 'note',
      title: 'Religion i det offentlige rom',
      content: `**To hovedsyn:**

**Sekularistisk syn:**
- Religion bør være privat
- Offentlige beslutninger basert på fornuft
- Religiøse argumenter "oversettes" til sekulære

**Postsekularistisk syn:**
- Religion har legitimt plass i offentligheten
- Religiøse borgere trenger ikke "oversette"
- Alle stemmer bør høres

I Norge forsøker man en balanse: religionsfrihet med respekt for andre rettigheter.`
    },
    {
      id: 'krle-10-5-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er et teokrati?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner et teokrati?',
            solution: 'Religiøse ledere styrer staten og Guds lov er statens lov',
            multipleChoiceOptions: ['Religiøse ledere styrer og Guds lov gjelder', 'Fullstendig skille mellom stat og religion', 'Demokratisk styresett', 'Kongen har all makt'],
          },
        ],
        solution: 'I et teokrati er religion og stat tett sammenvevd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-5-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Når ble statskirken i Norge formelt opphevet?',
        subTasks: [
          {
            label: 'a',
            task: 'Når ble Den norske kirke formelt skilt fra staten?',
            solution: '2012',
            multipleChoiceOptions: ['2012', '1814', '1905', '2000'],
          },
        ],
        solution: 'Grunnlovsendringen i 2012 ga Den norske kirke større selvstendighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-5-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva sier menneskerettighetene om religionsfrihet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva innebærer religionsfrihet ifølge menneskerettighetene?',
            solution: 'Frihet til å ha, skifte og praktisere religion',
            multipleChoiceOptions: ['Frihet til å ha, skifte og praktisere religion', 'Bare frihet til å tro, ikke praktisere', 'Frihet til å tvinge andre til sin religion', 'Religion er forbudt'],
          },
        ],
        solution: 'Religionsfrihet er en grunnleggende menneskerett med visse begrensninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-5-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Diskuter religion og politikk.',
        subTasks: [
          {
            label: 'a',
            task: 'Bor religiøse argumenter ha plass i politiske debatter? Presenter argumenter for og mot.',
            solution: 'For: Alle borgere bør kunne delta med sine overbevisninger, religiøse verdier har inspirert menneskerettigheter, demokrati krever alle stemmer. Mot: Politikk bør baseres på fornuft alle kan dele, religiøse argumenter kan være ekskluderende, vanskelig å debattere trossporsmål.',
            multipleChoiceOptions: ['Både for (alle stemmer bør høres) og mot (ekskluderende)', 'Bare religiøse argumenter bør gjelde', 'Aldri religiøse argumenter', 'Religion og politikk har ingenting med hverandre'],
          },
          {
            label: 'b',
            task: 'Velg én aktuell debatt (f.eks. religiøse symboler, abort, religiøse friskoler) og presenter argumenter fra ulike sider.',
            solution: 'Eksempel - Hijab i politiet: For: Religionsfrihet, mangfold i politiet, hijab påvirker ikke jobbutforelse. Mot: Nøytraliteten til politi/stat, uniform bør være lik for alle, kan påvirke tillit hos noen.',
            multipleChoiceOptions: ['Ulike perspektiver har gyldige argumenter', 'Det finnes bare én riktig side', 'Slike debatter er umulige', 'Politikere bør bestemme alt'],
          }
        ],
        hints: ['Tenk på ulike verdier som kan stå mot hverandre', 'Prøv å forstå alle sider'],
        solution: 'Forholdet mellom religion og politikk er komplekst og krever nyansert debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.2: Meningen med livet
// ============================================================================

export const CHAPTER_KRLE_10_5_2: TextbookChapter = {
  id: 'krle-10-5-2',
  courseId: 'krle-10',
  chapterNumber: '5.2',
  title: 'Meningen med livet',
  description: 'Utforsk ulike svar på sporsmålet om livets mening fra religion, filosofi og vitenskap.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over eksistensielle sporsmål og ulike svar',
    'utforske hvordan ulike livssyn gir mening og retning i livet'
  ],
  content: [
    {
      id: 'krle-10-5-2-intro',
      type: 'text',
      content: `
# Meningen med livet

"Hva er meningen med livet?" er kanskje menneskets største spørsmål. Gjennom
historien har religioner, filosofer og enkeltmennesker gitt ulike svar.
I dette avsluttende kapitlet utforsker vi noen av dem.
      `
    },
    {
      id: 'krle-10-5-2-religiose',
      type: 'text',
      title: 'Religiøse svar',
      content: `
## Hva sier religionene?

**Kristendommen**
- Meningen er å elske Gud og nesten
- Leve etter Guds vilje
- Oppnå frelse og evig liv
- Være Guds medarbeidere i verden

**Islam**
- Å underkaste seg Allahs vilje (islam = underkastelse)
- Folge de fem soylene
- Forberede seg på Dommens dag
- Leve som en god muslim i samfunnet

**Buddhismen**
- Frigjøring fra lidelse (dukkha)
- Oppnå nirvana gjennom den åttefoldige vei
- Bryte syklusen av gjenfodsel
- Medfølelse med alle vesener

**Hinduismen**
- Oppfylle sin dharma (plikt)
- Frigjøre seg fra samsara (gjenfodselssyklusen)
- Oppnå moksha (frigjoring)
      `
    },
    {
      id: 'krle-10-5-2-filosofiske',
      type: 'text',
      title: 'Filosofiske svar',
      content: `
## Hva sier filosofene?

**Aristoteles**: Eudaimonia
- Lykke gjennom å realisere sitt potensial
- Leve dydig
- Mennesket som fornuftsvesen

**Eksistensialisme**: Skape mening
- Livet har ingen ferdig mening
- Vi må skape vår egen mening
- Frihet og ansvar

**Nihilisme**: Ingen mening
- Livet har ingen objektiv mening
- Verdier er menneskeskapte
- Kan fore til frihet eller fortvilelse

**Absurdisme (Camus)**: Leve med det meningslöse
- Universets likegyldighet
- Men vi kan velge å leve likevel
- "Man må forestille seg Sisyfos lykkelig"
      `
    },
    {
      id: 'krle-10-5-2-vitenskap',
      type: 'text',
      title: 'Vitenskap og mening',
      content: `
## Hva sier vitenskapen?

Vitenskap svarer på "hvordan", ikke "hvorfor" (i betydningen formål):

**Evolusjon**
- Vi er resultat av tilfeldige mutasjoner og naturlig utvalg
- Ingen "plan" bak menneskets eksistens
- Biologi forklarer ikke mening, men opprinnelse

**Psykologi**
- Forsker på hva som gir opplevd mening
- Relasjoner, mestring, mål er viktige
- "Flow" og selvrealisering

**Positiv psykologi** (Martin Seligman)
- PERMA-modellen for velvære:
  - Positive emotions
  - Engagement
  - Relationships
  - Meaning
  - Accomplishment
      `
    },
    {
      id: 'krle-10-5-2-kilder',
      type: 'definition',
      title: 'Kilder til mening',
      content: `Forskning viser at mennesker finner mening i:

**Relasjoner** - Kjærlighet, vennskap, familie
**Arbeid/bidrag** - Gjore noe verdifullt, hjelpe andre
**Selvrealisering** - Utvikle seg, lære, skape
**Tilhørighet** - Være del av noe storre (religion, nasjon, bevegelse)
**Transcendens** - Åndelige opplevelser, kontakt med det hellige
**Opplevelser** - Skjønnhet, kunst, natur

De fleste kombinerer flere kilder til mening.`
    },
    {
      id: 'krle-10-5-2-note',
      type: 'note',
      title: 'Å leve med åpne sporsmal',
      content: `Kanskje er sporsmålet om livets mening ikke ment å ha ett svar:

- Sporsmålet kan være viktigere enn svaret
- Ulike livsfaser kan gi ulike svar
- Mening kan oppleves selv om den ikke kan bevises
- Å søke mening kan i seg selv være meningsfylt

Rainer Maria Rilke: "Lev sporsmålene nå. Kanskje vil du da gradvis,
uten å merke det, leve deg inn i svaret."`
    },
    {
      id: 'krle-10-5-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er eudaimonia?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente Aristoteles med eudaimonia?',
            solution: 'Lykke gjennom å realisere sitt potensial og leve dydig',
            multipleChoiceOptions: ['Lykke gjennom å realisere sitt potensial og leve dydig', 'Å eie mest mulig', 'Å unngå all smerte', 'Å folge regler blindt'],
          },
        ],
        solution: 'Aristoteles mente at et godt liv handler om å utvikle sine evner og leve med dyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-5-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva sier eksistensialismen om mening?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mener eksistensialistene om livets mening?',
            solution: 'At livet ikke har ferdig mening - vi må skape den selv',
            multipleChoiceOptions: ['At vi må skape vår egen mening', 'At Gud gir mening', 'At vitenskap gir mening', 'At mening ikke finnes'],
          },
        ],
        solution: 'Eksistensialisme legger ansvaret for mening på mennesket selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-5-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre kilder til mening som forskning har identifisert.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre vanlige kilder til opplevd mening i livet.',
            solution: 'Relasjoner, arbeid/bidrag og selvrealisering (flere mulige svar)',
            multipleChoiceOptions: ['Relasjoner, arbeid og selvrealisering', 'Penger, makt og berommelse', 'Bare religion', 'Ingenting gir mening'],
          },
        ],
        solution: 'Forskning viser at mening kommer fra flere kilder, ikke bare én.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'krle-10-5-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'krle-10-5-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over mening.',
        subTasks: [
          {
            label: 'a',
            task: 'Sammenlign hvordan én religion og én filosofisk retning svarer på sporsmålet om livets mening.',
            solution: 'Eksempel: Kristendommen: Meningen er gitt av Gud - å elske Gud og nesten, leve etter Guds vilje, oppnå evig liv. Eksistensialismen: Meningen er ikke gitt - vi må skape den selv gjennom våre valg og handlinger. Begge gir retning, men kilden er forskjellig.',
            multipleChoiceOptions: ['Religion: mening fra Gud. Filosofi: mening vi skaper', 'Begge sier det samme', 'Bare religion har svar', 'Bare filosofi har svar'],
          },
          {
            label: 'b',
            task: 'Reflekter: Hva gir deg opplevelse av mening i livet? Hvilke kilder til mening er viktigst for deg?',
            solution: 'Personlig refleksjon. Eksempler: Familie og venner, å lære nye ting, å hjelpe andre, kreativitet, naturoppleving, religiøs tro, å tilhore et fellesskap, å ha mål å jobbe mot.',
            multipleChoiceOptions: ['Personlig refleksjon - ulike ting for ulike mennesker', 'Alle har samme kilde til mening', 'Bare religiøse kan ha mening', 'Mening er illusjon'],
          }
        ],
        hints: ['Sammenlign kildene til mening', 'Tenk på ditt eget liv'],
        solution: 'Sporsmålet om mening har vært sentralt i menneskets historie og fortsetter å være det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const KRLE_10_CHAPTERS = [
  CHAPTER_KRLE_10_1_1,
  CHAPTER_KRLE_10_1_2,
  CHAPTER_KRLE_10_2_1,
  CHAPTER_KRLE_10_2_2,
  CHAPTER_KRLE_10_3_1,
  CHAPTER_KRLE_10_3_2,
  CHAPTER_KRLE_10_4_1,
  CHAPTER_KRLE_10_4_2,
  CHAPTER_KRLE_10_5_1,
  CHAPTER_KRLE_10_5_2,
];

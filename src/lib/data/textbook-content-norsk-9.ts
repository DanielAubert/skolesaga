/**
 * Tekstbok innhold for Norsk 9. klasse
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Bygger videre på 8. klasse med mer avanserte tekster og analyseferdigheter.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Retorikk og argumentasjon
// ============================================================================

export const CHAPTER_NORSK_9_1_1: TextbookChapter = {
  id: 'norsk-9-1-1',
  courseId: 'norsk-9',
  chapterNumber: '1.1',
  title: 'Retorikk og argumentasjon',
  description: 'Lær om retorikkens grunnprinsipper og hvordan du bygger overbevisende argumenter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke retoriske appellformer og språklige virkemidler i egen argumentasjon',
  ],
  content: [
    {
      id: 'norsk-9-1-1-intro',
      type: 'text',
      content: `## Hva er retorikk?

**Retorikk** er læren om å overbevise. Ordet kommer fra gresk og betyr "talekunst". Retorikk handler om hvordan vi bruker språket for å påvirke andre.

Retorikken ble utviklet i antikkens Hellas for over 2000 år siden. Filosofen **Aristoteles** systematiserte retorikkens grunnprinsipper, og disse brukes fortsatt i dag.`,
    },
    {
      id: 'norsk-9-1-1-def-1',
      type: 'definition',
      title: 'De tre appellformene',
      content: `Aristoteles beskrev tre måter å overbevise på:

**Etos** - troverdighet
- Handler om avsenderens karakter og ekspertise
- "Du kan stole på meg fordi..."
- Bygges gjennom erfaring, utdanning, ærlighet

**Patos** - følelser
- Appellerer til tilhørerens følelser
- Bruker sterke bilder og fortellinger
- Kan vekke glede, frykt, medfølelse, sinne

**Logos** - fornuft
- Appellerer til logikk og fakta
- Bruker statistikk, eksempler og bevis
- Bygger opp argumenter steg for steg`,
    },
    {
      id: 'norsk-9-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Appellformene i praksis',
      problem: `Les denne teksten fra en klimadebatt og identifiser hvilke appellformer som brukes:

"Som klimaforsker ved NTNU har jeg studert dette i 20 år. Tallene viser at temperaturen har steget 1,1 grader. Tenk på barna våre - hvilken verden vil de arve?"`,
      solution: `**Etos:** "Som klimaforsker ved NTNU har jeg studert dette i 20 år"
- Viser til egen ekspertise og erfaring

**Logos:** "Tallene viser at temperaturen har steget 1,1 grader"
- Bruker konkrete fakta og tall

**Patos:** "Tenk på barna våre - hvilken verden vil de arve?"
- Appellerer til følelser (bekymring for fremtiden, kjærlighet til barn)`,
    },
    {
      id: 'norsk-9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser appellformen:',
        subTasks: [
          {
            label: 'a',
            task: '"Forskning viser at 80% av ungdom bruker sosiale medier daglig." Hvilken appellform?',
            solution: 'Logos - bruker fakta og statistikk',
            multipleChoiceOptions: [
              'Logos - bruker fakta og statistikk',
              'Etos - viser til troverdighet',
              'Patos - appellerer til følelser',
              'Ingen appellform',
            ],
          },
          {
            label: 'b',
            task: '"Som lærer med 30 års erfaring kan jeg si at..." Hvilken appellform?',
            solution: 'Etos - viser til erfaring og ekspertise',
            multipleChoiceOptions: [
              'Etos - viser til erfaring og ekspertise',
              'Logos - bruker fakta',
              'Patos - appellerer til følelser',
              'Alle tre',
            ],
          },
          {
            label: 'c',
            task: '"Tenk deg hvordan det føles å bli mobbet hver dag." Hvilken appellform?',
            solution: 'Patos - appellerer til empati og følelser',
            multipleChoiceOptions: [
              'Patos - appellerer til empati og følelser',
              'Logos - bruker fakta',
              'Etos - viser til troverdighet',
              'Ingen appellform',
            ],
          },
        ],
        solution: 'a) Logos, b) Etos, c) Patos',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-1-1-text-2',
      type: 'text',
      content: `## Argumentets oppbygning

Et godt argument har tre deler:

**1. Påstand** - Det du mener
- "Skolen bør starte kl. 09:00"

**2. Begrunnelse** - Hvorfor du mener det
- "...fordi ungdom trenger mer søvn"

**3. Belegg** - Bevis som støtter begrunnelsen
- "Forskning viser at tenåringer har et annet søvnmønster"`,
    },
    {
      id: 'norsk-9-1-1-def-2',
      type: 'definition',
      title: 'Språklige virkemidler i argumentasjon',
      content: `**Retoriske spørsmål:** Spørsmål du ikke forventer svar på
- "Vil vi virkelig akseptere dette?"

**Gjentakelse:** Repeterer viktige poeng
- "Vi må handle nå. Nå er tiden inne."

**Kontrast:** Setter motsetninger mot hverandre
- "Noen får alt, andre får ingenting"

**Overdrivelse (hyperbel):** For å understreke et poeng
- "Alle vet at..."

**Trestegsoppbygning:** Tre elementer som forsterker
- "Vi kom, vi så, vi vant"`,
    },
    {
      id: 'norsk-9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bygg opp et argument:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en påstand om et tema du er opptatt av.',
            solution: 'Eleven formulerer en klar påstand, f.eks. "Lekser bør avskaffes".',
          },
          {
            label: 'b',
            task: 'Gi minst to begrunnelser for påstanden din.',
            solution: 'Eleven gir relevante begrunnelser som støtter påstanden.',
          },
          {
            label: 'c',
            task: 'Finn belegg (fakta, forskning, eksempler) som støtter begrunnelsene.',
            solution: 'Eleven finner relevant dokumentasjon for argumentene sine.',
          },
        ],
        hints: ['Velg et tema du kjenner godt', 'Tenk på hvem du vil overbevise'],
        solution: 'Et godt argument har klar påstand, relevante begrunnelser og troverdig belegg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et kort debattinnlegg (150-200 ord) om et selvvalgt tema. Bruk minst to appellformer og to språklige virkemidler.',
        hints: ['Planlegg hvilke appellformer du vil bruke', 'Marker gjerne virkemidlene i teksten'],
        solution: 'Innlegget bør ha tydelig bruk av appellformer og virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Kritisk lesing
// ============================================================================

export const CHAPTER_NORSK_9_1_2: TextbookChapter = {
  id: 'norsk-9-1-2',
  courseId: 'norsk-9',
  chapterNumber: '1.2',
  title: 'Kritisk lesing',
  description: 'Lær å vurdere tekster kritisk og gjenkjenne manipulerende språkbruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere tekster kritisk med blikk for avsender, formål og virkemidler',
  ],
  content: [
    {
      id: 'norsk-9-1-2-intro',
      type: 'text',
      content: `## Hva er kritisk lesing?

**Kritisk lesing** betyr å stille spørsmål til teksten du leser. Du skal ikke bare forstå hva som står, men også vurdere om det er sant, hvem som har skrevet det, og hvorfor.

I en verden full av informasjon er kritisk lesing en av de viktigste ferdighetene du kan ha.`,
    },
    {
      id: 'norsk-9-1-2-def-1',
      type: 'definition',
      title: 'Spørsmål til teksten',
      content: `Still disse spørsmålene når du leser:

**Hvem?**
- Hvem har skrevet teksten?
- Hvilken bakgrunn har avsenderen?
- Har avsenderen noe å tjene på dette?

**Hva?**
- Hva er hovedbudskapet?
- Hvilke påstander fremmes?
- Hva er fakta og hva er meninger?

**Hvorfor?**
- Hva er formålet med teksten?
- Hvem er målgruppen?
- Hvilke interesser ligger bak?

**Hvordan?**
- Hvilke virkemidler brukes?
- Appellerer teksten til følelser eller fornuft?
- Er språket nøytralt eller ladet?`,
    },
    {
      id: 'norsk-9-1-2-text-2',
      type: 'text',
      content: `## Fakta vs. meninger

Det er viktig å skille mellom fakta og meninger:

**Fakta** kan etterprøves og bekreftes:
- "Norge fikk sin grunnlov i 1814"
- "Vann koker ved 100 grader"

**Meninger** er personlige vurderinger:
- "Norge er verdens beste land"
- "Denne filmen var kjedelig"

**Kamuflerte meninger** ser ut som fakta:
- "Alle vet at..." (hvem er alle?)
- "Det er klart at..." (er det virkelig det?)
- "Forskning viser..." (hvilken forskning?)`,
    },
    {
      id: 'norsk-9-1-2-def-2',
      type: 'definition',
      title: 'Manipulerende språkbruk',
      content: `Vær oppmerksom på disse teknikkene:

**Ladede ord:** Ord som vekker sterke følelser
- "Innvandrerstrøm" vs. "innvandring"
- "Klimahysteri" vs. "klimaengasjement"

**Vage formuleringer:** Unngår å være konkret
- "Mange mener..." (hvor mange?)
- "Eksperter sier..." (hvilke eksperter?)

**Falske dikotomier:** Presenterer bare to alternativer
- "Enten er du med oss, eller mot oss"

**Stråmannsargument:** Forvrenger motstanderens syn
- Tillegger motparten meninger de ikke har

**Personangrep:** Angriper personen, ikke argumentet
- Diskrediterer avsenderen i stedet for å diskutere saken`,
    },
    {
      id: 'norsk-9-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av en reklametekst',
      problem: `Analyser denne reklameteksten kritisk:

"9 av 10 tannleger anbefaler vår tannkrem. Velg det beste for familien din - velg SmileFresh!"`,
      solution: `**Vage formuleringer:**
- "9 av 10 tannleger" - Hvor mange tannleger ble spurt? Hvilke? I hvilken sammenheng?

**Manipulerende språk:**
- "det beste for familien" - Appellerer til beskytterinstinkt (patos)
- Skaper en følelse av at andre alternativer er dårlige

**Spørsmål å stille:**
- Er dette en uavhengig undersøkelse eller sponset av produsenten?
- Hva med de 10% som ikke anbefaler?
- Hva ble de egentlig spurt om?`,
    },
    {
      id: 'norsk-9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skille mellom fakta og meninger:',
        subTasks: [
          {
            label: 'a',
            task: '"Klimaendringene er den største trusselen mot menneskeheten."',
            solution: 'Mening - en vurdering av alvorlighetsgrad',
            multipleChoiceOptions: [
              'Mening - en vurdering av alvorlighetsgrad',
              'Fakta - kan bekreftes vitenskapelig',
              'Både fakta og mening',
              'Verken fakta eller mening',
            ],
          },
          {
            label: 'b',
            task: '"CO2-nivået i atmosfæren har økt med 50% siden 1800-tallet."',
            solution: 'Fakta - kan måles og etterprøves',
            multipleChoiceOptions: [
              'Fakta - kan måles og etterprøves',
              'Mening - personlig vurdering',
              'Kamuflert mening',
              'Manipulerende påstand',
            ],
          },
          {
            label: 'c',
            task: '"Alle fornuftige mennesker forstår at..."',
            solution: 'Kamuflert mening - bruker "alle" for å få meningen til å fremstå som fakta',
            multipleChoiceOptions: [
              'Kamuflert mening - bruker "alle" for å fremstå som fakta',
              'Fakta - det stemmer at alle forstår dette',
              'Nøytral påstand',
              'Vitenskapelig utsagn',
            ],
          },
        ],
        solution: 'Det er viktig å gjenkjenne hvordan meninger kamufleres som fakta.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn en nyhetsartikkel eller debattinnlegg på nett. Analyser teksten kritisk ved å svare på:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er avsenderen og hvilken interesse kan de ha?',
            solution: 'Eleven identifiserer avsender og vurderer mulige interesser.',
          },
          {
            label: 'b',
            task: 'Hva er hovedpåstanden i teksten?',
            solution: 'Eleven identifiserer tekstens sentrale budskap.',
          },
          {
            label: 'c',
            task: 'Hvilke virkemidler brukes for å overbevise leseren?',
            solution: 'Eleven peker på konkrete retoriske grep i teksten.',
          },
          {
            label: 'd',
            task: 'Er påstandene dokumentert med kilder?',
            solution: 'Eleven vurderer kildebruken i teksten.',
          },
        ],
        hints: ['Velg en tekst med et tydelig standpunkt', 'Se på både overskrift, ingress og brødtekst'],
        solution: 'En kritisk analyse vurderer avsender, budskap, virkemidler og dokumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.3: Debatt og diskusjon
// ============================================================================

export const CHAPTER_NORSK_9_1_3: TextbookChapter = {
  id: 'norsk-9-1-3',
  courseId: 'norsk-9',
  chapterNumber: '1.3',
  title: 'Debatt og diskusjon',
  description: 'Lær å delta i og lede debatter på en konstruktiv måte.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i diskusjoner med saklige argumenter og lytte til andres synspunkter',
  ],
  content: [
    {
      id: 'norsk-9-1-3-intro',
      type: 'text',
      content: `## Debatt vs. diskusjon

**Debatt** er en strukturert meningsutveksling der deltakerne forsvarer ulike standpunkter. Målet er ofte å overbevise et publikum.

**Diskusjon** er en mer åpen samtale der målet er å utforske et tema sammen og kanskje komme frem til felles forståelse.

Begge krever gode kommunikasjonsferdigheter og respekt for andre.`,
    },
    {
      id: 'norsk-9-1-3-def-1',
      type: 'definition',
      title: 'Regler for god debatt',
      content: `**Hold deg til saken**
- Ikke gå til personangrep
- Fokuser på argumentene, ikke personen

**Lytt aktivt**
- Forstå motpartens argumenter før du svarer
- Still oppklarende spørsmål

**Vær saklig**
- Bruk fakta og logiske argumenter
- Innrøm når du ikke vet noe

**Respekter andre**
- La andre snakke ferdig
- Anerkjenn gode poeng fra motparten

**Vær ærlig**
- Ikke forvreng motpartens argumenter
- Innrøm svakheter i egen argumentasjon`,
    },
    {
      id: 'norsk-9-1-3-text-2',
      type: 'text',
      content: `## Debatteknikker

**Å åpne debatten:**
- Presenter ditt standpunkt klart
- Gi en kort oversikt over argumentene dine
- Fang oppmerksomheten med et godt eksempel

**Å svare på motargumenter:**
- Gjenta motargumentet for å vise at du har forstått
- Anerkjenn det som er riktig
- Presenter ditt motargument

**Å avslutte:**
- Oppsummer hovedargumentene
- Gjenta din konklusjon
- Avslutt med en sterk formulering`,
    },
    {
      id: 'norsk-9-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Å svare på motargumenter',
      problem: `Hvordan kan du svare konstruktivt på dette motargumentet?

Motargument: "Karakterer er nødvendige fordi arbeidsgivere trenger å vite hva folk kan."`,
      solution: `**Steg 1 - Anerkjenn poenget:**
"Du har rett i at arbeidsgivere trenger informasjon om søkeres kompetanse."

**Steg 2 - Presenter motargumentet:**
"Men karakterer gir bare et øyeblikksbilde fra en prøve. Det finnes bedre måter å vise kompetanse på, som portfolio, prosjekter eller praksisperioder."

**Steg 3 - Styrk argumentet:**
"Forskning viser at karakterer korrelerer dårlig med jobbprestasjon. Mange vellykkede mennesker hadde middelmådige karakterer."`,
    },
    {
      id: 'norsk-9-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder debatteknikken:',
        subTasks: [
          {
            label: 'a',
            task: '"Du tar alltid feil fordi du ikke forstår noe." Hva er galt med dette utsagnet?',
            solution: 'Personangrep - angriper personen i stedet for argumentet',
            multipleChoiceOptions: [
              'Personangrep - angriper personen i stedet for argumentet',
              'Godt argument med sterk påstand',
              'Saklig kritikk av argumentet',
              'Retorisk spørsmål',
            ],
          },
          {
            label: 'b',
            task: '"Jeg forstår at du er bekymret for kostnadene, men la meg vise deg tallene." Hva gjør dette utsagnet bra?',
            solution: 'Anerkjenner motpartens bekymring før motargumentet presenteres',
            multipleChoiceOptions: [
              'Anerkjenner motpartens bekymring før motargumentet presenteres',
              'Bruker personangrep',
              'Ignorerer motargumentet',
              'Bruker manipulerende språk',
            ],
          },
        ],
        solution: 'God debatteknikk innebærer å respektere motparten og fokusere på saken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forbered deg til en klassedebatt om et selvvalgt tema:',
        subTasks: [
          {
            label: 'a',
            task: 'Formuler ditt standpunkt i én setning.',
            solution: 'Eleven formulerer et klart standpunkt.',
          },
          {
            label: 'b',
            task: 'List opp tre hovedargumenter for standpunktet ditt.',
            solution: 'Eleven presenterer tre relevante argumenter.',
          },
          {
            label: 'c',
            task: 'Hva er det sterkeste motargumentet? Hvordan vil du svare på det?',
            solution: 'Eleven identifiserer et motargument og forbereder et svar.',
          },
        ],
        hints: ['Velg et tema du brenner for', 'Tenk på hva motparten vil si'],
        solution: 'God forberedelse inkluderer egne argumenter og svar på forventede motargumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_9_2_1: TextbookChapter = {
  id: 'norsk-9-2-1',
  courseId: 'norsk-9',
  chapterNumber: '2.1',
  title: 'Kreativ skriving',
  description: 'Utvikle din kreative skrivestil gjennom ulike teknikker og øvelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive kreative, informative og reflekterende tekster med hensiktsmessig oppbygning',
  ],
  content: [
    {
      id: 'norsk-9-2-1-intro',
      type: 'text',
      content: `## Hva er kreativ skriving?

**Kreativ skriving** er skriving der du selv velger form, innhold og stil. Det kan være noveller, dikt, dagbok, blogg eller andre skjønnlitterære tekster.

I kreativ skriving får du utforske språket, leke med ord og uttrykke deg på din egen måte.`,
    },
    {
      id: 'norsk-9-2-1-def-1',
      type: 'definition',
      title: 'Skriveteknikker',
      content: `**Vis, ikke fortell**
- Dårlig: "Hun var redd."
- Bedre: "Hendene skalv. Hun holdt pusten og presset seg mot veggen."

**Sanselig språk**
- Beskriv hva karakterene ser, hører, lukter, smaker og føler

**Sterk åpning**
- Begynn midt i handlingen (in medias res)
- Still et spørsmål
- Bruk et overraskende bilde

**Dialog**
- Gjør teksten levende
- Viser karakterenes personlighet
- Bryter opp lange avsnitt`,
    },
    {
      id: 'norsk-9-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Vis, ikke fortell',
      problem: `Hvordan kan vi forbedre denne setningen?

"Det var en varm sommerdag og gutten var glad."`,
      solution: `**Forbedret versjon:**

"Solen brente mot skuldrene hans. Gresset kildret under føttene der han løp barfot over enga. Han kastet hodet bakover og lo mot den skyfrie himmelen."

**Hvorfor er dette bedre?**
- Vi *føler* varmen (solen brente)
- Vi *ser* handlingen (løp barfot)
- Vi *opplever* gleden (lo mot himmelen)
- Leseren får delta i opplevelsen`,
    },
    {
      id: 'norsk-9-2-1-text-2',
      type: 'text',
      content: `## Novelleskriving

En novelle er en kort fortelling med disse kjennetegnene:

**Kort handling**
- Konsentrert om én hendelse eller ett tema
- Få karakterer
- Kort tidsrom

**Vendepunkt**
- Et øyeblikk der noe endrer seg
- Kan være en erkjennelse, en beslutning eller en ytre hendelse

**Slutten**
- Åpen slutt: Leseren må tenke selv
- Overraskende slutt: Vrir forventningene
- Avrundet slutt: Alt forklares`,
    },
    {
      id: 'norsk-9-2-1-def-2',
      type: 'definition',
      title: 'Freytags pyramide',
      content: `En klassisk oppbygning av fortellinger:

1. **Eksposisjon**: Introduksjon av karakterer og setting
2. **Stigende handling**: Konflikten utvikler seg
3. **Klimaks**: Vendepunktet - den avgjørende hendelsen
4. **Fallende handling**: Konsekvensene av klimaks
5. **Avslutning**: Løsning eller ny situasjon

Ikke alle noveller følger denne strukturen - eksperimentér!`,
    },
    {
      id: 'norsk-9-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriveøvelse - "Vis, ikke fortell":',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv om "hun var sint" uten å bruke ordet "sint".',
            solution: 'F.eks.: "Hun slo døren igjen så bildene på veggen ristet. Kjevene var sammenbitte."',
          },
          {
            label: 'b',
            task: 'Skriv om "det var kaldt" uten å bruke ordet "kaldt".',
            solution: 'F.eks.: "Pusten sto som hvit røyk foran henne. Fingrene var numne selv inni vottene."',
          },
          {
            label: 'c',
            task: 'Skriv om "han elsket henne" uten å bruke ordet "elske".',
            solution: 'F.eks.: "Han la merke til hvordan solen fanget gullglimtene i håret hennes. Hjertet banket fortere."',
          },
        ],
        hints: ['Bruk kroppen - hvordan reagerer kroppen på følelsen?', 'Bruk handlinger som viser følelsen'],
        solution: 'Ved å vise følelser gjennom handlinger og sanseinntrykk blir teksten mer levende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv åpningen til en novelle (første avsnitt). Start midt i handlingen og fang leserens interesse.',
        hints: ['Begynn med en handling eller en setning som vekker nysgjerrighet', 'Ikke forklar alt med en gang'],
        solution: 'Åpningen bør skape spenning og få leseren til å ville lese videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort novelle (300-500 ord) basert på ett av disse startpunktene:',
        subTasks: [
          {
            label: 'a',
            task: '"Døren gikk opp, og der sto personen jeg minst hadde ventet å se."',
            solution: 'Eleven skriver en novelle med tydelig handling og vendepunkt.',
          },
          {
            label: 'b',
            task: '"Hadde jeg visst hva som ventet, ville jeg aldri gått inn."',
            solution: 'Eleven skriver en novelle med tydelig handling og vendepunkt.',
          },
          {
            label: 'c',
            task: '"Det begynte med en melding jeg ikke skulle ha åpnet."',
            solution: 'Eleven skriver en novelle med tydelig handling og vendepunkt.',
          },
        ],
        hints: ['Ha et tydelig vendepunkt', 'Bruk "vis, ikke fortell"', 'Tenk på slutten før du begynner'],
        solution: 'Novellen bør ha klar oppbygning, interessante karakterer og et vendepunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Sakprosa og artikkelskriving
// ============================================================================

export const CHAPTER_NORSK_9_2_2: TextbookChapter = {
  id: 'norsk-9-2-2',
  courseId: 'norsk-9',
  chapterNumber: '2.2',
  title: 'Sakprosa og artikkelskriving',
  description: 'Lær å skrive informative og overbevisende sakprosatekster.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive tekster med god struktur og tilpasse språk og innhold til formål og mottaker',
  ],
  content: [
    {
      id: 'norsk-9-2-2-intro',
      type: 'text',
      content: `## Ulike typer sakprosa

**Informerende tekster** - formidler kunnskap
- Fagartikkel
- Rapport
- Instruksjon

**Argumenterende tekster** - fremmer et syn
- Debattinnlegg
- Kronikk
- Leserinnlegg

**Reflekterende tekster** - utforsker tanker
- Essay
- Kåseri
- Blogginnlegg`,
    },
    {
      id: 'norsk-9-2-2-def-1',
      type: 'definition',
      title: 'Artikkelens oppbygning',
      content: `**Overskrift**
- Kort og fengende
- Forteller hva teksten handler om
- Kan inneholde påstand eller spørsmål

**Ingress**
- Første avsnitt
- Oppsummerer det viktigste
- Skal lokke leseren til å lese videre

**Brødtekst**
- Hoveddelen av artikkelen
- Delt inn i avsnitt med mellomoverskrifter
- Hvert avsnitt har ett hovedpoeng

**Avslutning**
- Oppsummerer
- Kan ha en oppfordring eller konklusjon`,
    },
    {
      id: 'norsk-9-2-2-text-2',
      type: 'text',
      content: `## Kildebruk og referanser

Når du skriver sakprosa, må du ofte bruke kilder. Dette viser at du har satt deg inn i temaet og styrker troverdigheten.

**Hvordan referere:**
- "Ifølge [kilde]..."
- "[Kilde] hevder at..."
- "Tall fra [kilde] viser..."

**Viktig om kildebruk:**
- Oppgi alltid hvor du har informasjonen fra
- Skille mellom sitat og egen tekst
- Vurder om kilden er pålitelig`,
    },
    {
      id: 'norsk-9-2-2-example-1',
      type: 'example',
      title: 'Eksempel: God vs. dårlig ingress',
      problem: `Sammenlign disse to ingressene til en artikkel om søvn:`,
      solution: `**Dårlig ingress:**
"I denne artikkelen skal jeg skrive om søvn. Søvn er viktig. Mange unge sover for lite."

- For generell
- Bruker "jeg skal skrive"
- Ikke engasjerende

**God ingress:**
"Hver natt mister norske tenåringer to timer søvn de burde hatt. Konsekvensen? Dårligere karakterer, økt risiko for depresjon og svekket immunforsvar."

- Konkret tall
- Viser konsekvenser
- Vekker interesse
- Profesjonell tone`,
    },
    {
      id: 'norsk-9-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv tre ulike ingresser (2-3 setninger hver) til en artikkel om sosiale medier og ungdom:',
        subTasks: [
          {
            label: 'a',
            task: 'En informerende ingress (nøytral)',
            solution: 'F.eks.: "90 prosent av norske ungdommer bruker sosiale medier daglig. Hva vet vi om hvordan dette påvirker dem?"',
          },
          {
            label: 'b',
            task: 'En argumenterende ingress (tar standpunkt)',
            solution: 'F.eks.: "Sosiale medier stjeler ungdoms tid, selvfølelse og søvn. Det er på tide at vi tar ansvar."',
          },
          {
            label: 'c',
            task: 'En engasjerende ingress (vekker nysgjerrighet)',
            solution: 'F.eks.: "Hva om det du gjør første time hver dag, skader hjernen din? For mange unge er dette virkeligheten."',
          },
        ],
        hints: ['Unngå å bruke "jeg skal skrive om..."', 'Bruk konkrete tall eller eksempler'],
        solution: 'Ulike ingresser passer til ulike formål og målgrupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv en kort fagartikkel (400-500 ord) om et selvvalgt tema. Artikkelen skal ha:',
        subTasks: [
          {
            label: 'a',
            task: 'Fengende overskrift',
            solution: 'Overskriften er kort og forteller hva teksten handler om.',
          },
          {
            label: 'b',
            task: 'God ingress',
            solution: 'Ingressen oppsummerer det viktigste og lokker leseren.',
          },
          {
            label: 'c',
            task: 'Minst to mellomoverskrifter',
            solution: 'Teksten er organisert med mellomoverskrifter.',
          },
          {
            label: 'd',
            task: 'Minst én kildehenvisning',
            solution: 'Eleven viser til en kilde for å styrke troverdigheten.',
          },
        ],
        hints: ['Velg et tema du kan mye om', 'Les eksempler på gode artikler først'],
        solution: 'Artikkelen følger sakprosaens konvensjoner og formidler informasjon effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Språk og stil
// ============================================================================

export const CHAPTER_NORSK_9_2_3: TextbookChapter = {
  id: 'norsk-9-2-3',
  courseId: 'norsk-9',
  chapterNumber: '2.3',
  title: 'Språk og stil',
  description: 'Utvikle bevissthet om språklige valg og variere stilen etter situasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'variere setningsbygning og ordvalg i egne tekster',
  ],
  content: [
    {
      id: 'norsk-9-2-3-intro',
      type: 'text',
      content: `## Hva er stil?

**Stil** handler om hvordan du skriver, ikke bare hva du skriver. Samme innhold kan formidles på helt ulike måter avhengig av:

- Hvem du skriver til (mottaker)
- Hva du vil oppnå (formål)
- Hvor teksten skal publiseres (kontekst)`,
    },
    {
      id: 'norsk-9-2-3-def-1',
      type: 'definition',
      title: 'Formelt vs. uformelt språk',
      content: `**Formelt språk** brukes i:
- Skoleoppgaver og eksamener
- Jobbsøknader
- Offisielle brev
- Fagartikler

**Kjennetegn:**
- Fullstendige setninger
- Faguttrykk og presist ordvalg
- Unngår slang og forkortelser
- Nøytral tone

**Uformelt språk** brukes i:
- Meldinger til venner
- Sosiale medier
- Dagbok
- Samtaler

**Kjennetegn:**
- Kortere setninger
- Hverdagsord og slang
- Forkortelser
- Personlig tone`,
    },
    {
      id: 'norsk-9-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Samme innhold - ulik stil',
      problem: `Se hvordan samme melding kan formidles ulikt:`,
      solution: `**Til læreren (formelt):**
"Jeg var dessverre fraværende fra skolen i går på grunn av sykdom. Kan jeg få beskjed om hvilke oppgaver jeg har gått glipp av?"

**Til en venn (uformelt):**
"Hei! Var syk i går. Fikk vi noe lekser?"

**Kjennetegn på det formelle:**
- "Dessverre" og "på grunn av"
- Fullstendig setningsstruktur
- Høflig formulering

**Kjennetegn på det uformelle:**
- Ufullstendige setninger
- Direkte og kort
- Personlig tone`,
    },
    {
      id: 'norsk-9-2-3-text-2',
      type: 'text',
      content: `## Variert setningsbygning

Monotone tekster har ofte lik setningsstruktur:
"Jeg gikk til skolen. Jeg møtte en venn. Jeg snakket med ham."

**Teknikker for variasjon:**

**Korte setninger:** Skaper spenning
"Hun snudde seg. Der sto han."

**Lange setninger:** Gir detaljer og flyt
"Mens regnet trommelde mot vinduet og vinden ulet gjennom trærne, satt hun og tenkte på alt som hadde skjedd den sommeren."

**Inversjon:** Starter med noe annet enn subjektet
"På toppen av fjellet sto en ensom hytte."
(I stedet for: "En ensom hytte sto på toppen av fjellet.")

**Spørsmål:** Engasjerer leseren
"Hva ville du ha gjort?"`,
    },
    {
      id: 'norsk-9-2-3-def-2',
      type: 'definition',
      title: 'Språklige virkemidler i skjønnlitteratur',
      content: `**Metafor:** Overført betydning
- "Livet er en reise"

**Simile:** Sammenligning med "som"
- "Hun var rask som vinden"

**Personifikasjon:** Gir ting menneskelige egenskaper
- "Trærne hvisket"

**Besjeling:** Gir dyr/natur mennesketrekk
- "Solen smilte"

**Allitterasjon:** Gjentakelse av konsonantlyder
- "Katten krøp krokete"

**Kontrast:** Motsetninger
- "Det var den beste av tider, det var den verste av tider"`,
    },
    {
      id: 'norsk-9-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Omskriving mellom formelt og uformelt:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv om til formelt: "Hei! Kan jeg komme litt seinere i morra? Bussen var kjempeforsinket i dag og."',
            solution: 'F.eks.: "Jeg ønsker å informere om at jeg dessverre kan komme noe forsinket i morgen på grunn av problemer med kollektivtransporten."',
          },
          {
            label: 'b',
            task: 'Skriv om til uformelt: "Jeg setter stor pris på din assistanse i denne saken og ser frem til et konstruktivt samarbeid."',
            solution: 'F.eks.: "Takk for hjelpen! Gleder meg til å jobbe sammen!"',
          },
        ],
        solution: 'Tilpasning av språk til situasjon er en viktig ferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identifiser virkemidlene:',
        subTasks: [
          {
            label: 'a',
            task: '"Tiden fløy forbi."',
            solution: 'Metafor - tiden sammenlignes med noe som flyr',
            multipleChoiceOptions: [
              'Metafor - tiden sammenlignes med noe som flyr',
              'Simile - sammenligning med "som"',
              'Personifikasjon',
              'Allitterasjon',
            ],
          },
          {
            label: 'b',
            task: '"Hun var sterk som en bjørn."',
            solution: 'Simile - sammenligning med "som"',
            multipleChoiceOptions: [
              'Simile - sammenligning med "som"',
              'Metafor',
              'Besjeling',
              'Kontrast',
            ],
          },
          {
            label: 'c',
            task: '"Vinden klaget."',
            solution: 'Personifikasjon - vinden får menneskelig egenskap',
            multipleChoiceOptions: [
              'Personifikasjon - vinden får menneskelig egenskap',
              'Metafor',
              'Simile',
              'Allitterasjon',
            ],
          },
        ],
        solution: 'Å kjenne igjen virkemidler hjelper deg å bruke dem selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et kort tekststykke (100-150 ord) som beskriver en stemning (f.eks. ensomhet, glede, spenning). Bruk minst tre ulike språklige virkemidler.',
        hints: ['Vis, ikke fortell følelsen', 'Marker gjerne virkemidlene du bruker'],
        solution: 'Teksten bruker varierte virkemidler for å skape stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Norrønt språk og litteratur
// ============================================================================

export const CHAPTER_NORSK_9_3_1: TextbookChapter = {
  id: 'norsk-9-3-1',
  courseId: 'norsk-9',
  chapterNumber: '3.1',
  title: 'Norrønt språk og litteratur',
  description: 'Utforsk vikingtidens språk og de fascinerende mytene og sagaene.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for kjennetegn ved norsk språkutvikling og utforske norrøne tekster',
  ],
  content: [
    {
      id: 'norsk-9-3-1-intro',
      type: 'text',
      content: `## Det norrøne språket

**Norrønt** var språket som ble snakket i Skandinavia fra ca. 700-1350. Det er opphavet til de moderne skandinaviske språkene.

Norrønt ble skrevet med **runer** før latinske bokstaver tok over. Runene var tilpasset tre og stein - de hadde få buede linjer.

De eldste runeinnskriftene i Norge er over 1500 år gamle.`,
    },
    {
      id: 'norsk-9-3-1-def-1',
      type: 'definition',
      title: 'Den norrøne litteraturen',
      content: `**Eddadiktningen**
- Gudedikt om Odin, Tor og de andre æsene
- Heltedikt om legendariske skikkelser
- Skrevet på vers med faste rytmer

**Sagaene**
- Prosafortellinger om historiske hendelser
- Islendingesagaene: Om livet på Island
- Kongesagaene: Om de norske kongene

**Skaldediktning**
- Kompliserte vers skrevet av hoffpoeter
- Brukte kenninger (omskrivninger)
- F.eks. "havets hest" = skip`,
    },
    {
      id: 'norsk-9-3-1-text-2',
      type: 'text',
      content: `## Den norrøne gudeverden

Vikingene trodde på mange guder som bodde i **Åsgård**:

**Odin** - Allfather
- Gud for visdom, krig og magi
- Ga bort et øye for visdom
- Fant runene ved å henge i Yggdrasil

**Tor** - Tordenguden
- Sterkeste av gudene
- Hadde hammeren Mjølner
- Beskyttet mennesker mot jotner

**Frøya** - Kjærlighetsguddinnen
- Gudinne for kjærlighet og fruktbarhet
- Kjørte en vogn trukket av katter
- Valgte halvparten av de falne krigere

**Loke** - Luringen
- Halvgud, halvjotne
- Skapte kaos blant gudene
- Førte til Ragnarok`,
    },
    {
      id: 'norsk-9-3-1-note-1',
      type: 'note',
      title: 'Ragnarok - verdens undergang',
      content: `Ifølge norrøn tro ville verden ende i **Ragnarok**:

1. Vintrene blir lange og harde (Fimbulvinter)
2. Krig og kaos blant mennesker
3. Ulven Fenris sluker solen
4. Midgardsormen stiger opp fra havet
5. Gudene kjemper mot jotnene
6. Verden brenner og synker i havet
7. En ny, bedre verden oppstår

Denne syklusen viser at norrøn tro handlet om fornyelse - etter ødeleggelse kommer gjenfødelse.`,
    },
    {
      id: 'norsk-9-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Norrøne ord i moderne norsk',
      problem: `Hvilke moderne ord kommer fra norrønt?`,
      solution: `Mange hverdagsord har norrønt opphav:

| Norrønt | Moderne norsk |
|---------|---------------|
| húss | hus |
| skip | skip |
| ormr | orm |
| vindr | vind |
| vatn | vann |
| brú | bru |
| dagr | dag |
| nótt | natt |

Også ukedagene kommer fra norrøne guder:
- **Tirsdag**: Ty (krigsgud)
- **Onsdag**: Odin
- **Torsdag**: Tor
- **Fredag**: Frøya/Frigg`,
    },
    {
      id: 'norsk-9-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Svar på spørsmål om norrøn kultur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var Odin villig til å ofre for å få visdom?',
            solution: 'Et øye - han ga det i Mimes brønn',
            multipleChoiceOptions: [
              'Et øye - han ga det i Mimes brønn',
              'Hammeren sin',
              'Hesten Sleipner',
              'Livet sitt',
            ],
          },
          {
            label: 'b',
            task: 'Hva het Tors hammer?',
            solution: 'Mjølner',
            multipleChoiceOptions: [
              'Mjølner',
              'Gungnir',
              'Draupnir',
              'Skidbladner',
            ],
          },
          {
            label: 'c',
            task: 'Hva er en kenning?',
            solution: 'En poetisk omskrivning, f.eks. "havets hest" for skip',
            multipleChoiceOptions: [
              'En poetisk omskrivning, f.eks. "havets hest" for skip',
              'En type rune',
              'En norrøn gud',
              'En sagasjanger',
            ],
          },
        ],
        solution: 'Den norrøne kulturen var rik på myter, symboler og poetisk språkbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv din egen kenning (poetisk omskrivning) for disse ordene:',
        subTasks: [
          {
            label: 'a',
            task: 'Sverd',
            solution: 'F.eks.: "krigens tann", "blodets drikker", "fienders bane"',
          },
          {
            label: 'b',
            task: 'Hav',
            solution: 'F.eks.: "fiskenes land", "skipenes vei", "bølgenes rike"',
          },
          {
            label: 'c',
            task: 'Gull',
            solution: 'F.eks.: "dragens seng", "solens tårer", "dvergenes kunst"',
          },
        ],
        hints: ['Tenk på hva tingen gjør eller hva den er knyttet til', 'Bruk bilder fra naturen eller mytologien'],
        solution: 'Kenninger var viktig i skaldediktningen og viser kreativ språkbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Språkhistorie - fra norrønt til moderne norsk
// ============================================================================

export const CHAPTER_NORSK_9_3_2: TextbookChapter = {
  id: 'norsk-9-3-2',
  courseId: 'norsk-9',
  chapterNumber: '3.2',
  title: 'Språkhistorie',
  description: 'Følg det norske språkets utvikling fra norrønt til dagens bokmål og nynorsk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for sentrale hendelser i norsk språkhistorie',
  ],
  content: [
    {
      id: 'norsk-9-3-2-intro',
      type: 'text',
      content: `## Norsk språkhistorie - oversikt

Språket vårt har forandret seg mye gjennom historien. Her er de viktigste periodene:

| Periode | År | Kjennetegn |
|---------|-----|-----------|
| Urnordisk | 200-700 | Felles skandinavisk |
| Norrønt | 700-1350 | Vikingtid, sagatid |
| Mellomnorsk | 1350-1550 | Svartedauden, forfall |
| Dansketiden | 1550-1814 | Dansk skriftspråk |
| Moderne norsk | 1814- | Bokmål og nynorsk |`,
    },
    {
      id: 'norsk-9-3-2-text-2',
      type: 'text',
      content: `## Svartedauden og språkendringer

I 1349 kom **svartedauden** til Norge. Omtrent halvparten av befolkningen døde.

**Konsekvenser for språket:**
- Få folk kunne lese og skrive
- Adelen og prestene døde
- Skriftspråket forfalt
- Dialektene utviklet seg fritt

Etter svartedauden ble Norge svakere og kom i union med Danmark. Dansk ble det offisielle skriftspråket.`,
    },
    {
      id: 'norsk-9-3-2-def-1',
      type: 'definition',
      title: 'Dansketiden (1380-1814)',
      content: `I over 400 år var norsk skriftspråk nesten borte:

**Dansk dominerte:**
- Alle offisielle dokumenter
- Kirken og skolen
- Litteraturen

**Norske dialekter overlevde:**
- Talemålet forble norsk
- Ulike dialekter i ulike daler
- Bønder snakket annerledes enn embetsmenn

**Dannet grunnlaget for språkstriden:**
Skulle Norge bygge videre på dansk eller skape et helt nytt språk basert på dialektene?`,
    },
    {
      id: 'norsk-9-3-2-text-3',
      type: 'text',
      content: `## Språkstriden etter 1814

Etter at Norge ble selvstendig i 1814, oppsto spørsmålet: Hva skal være Norges språk?

**To hovedsyn:**

**Fornorsking av dansk:**
- Bygg videre på det danske skriftspråket
- Gjør det gradvis mer norsk
- Knud Knudsen var talsmann
- Førte til **riksmål/bokmål**

**Nytt språk fra dialektene:**
- Samle de norske dialektene
- Skape et helt nytt skriftspråk
- Ivar Aasen reiste rundt og samlet dialekter
- Førte til **landsmål/nynorsk**`,
    },
    {
      id: 'norsk-9-3-2-note-1',
      type: 'note',
      title: 'Ivar Aasen (1813-1896)',
      content: `Ivar Aasen vokste opp på en gård i Sunnmøre. Han var selvlært og kunne mange språk.

**Hans arbeid:**
- Reiste rundt i Norge og samlet dialekter
- Skrev grammatikk og ordbok
- Skapte landsmål (nynorsk)
- Ville bevare det ekte norske språket

**Motivasjon:**
"Det norske folket har rett til et språk som er deres eget, ikke lånt fra Danmark."`,
    },
    {
      id: 'norsk-9-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Samme setning - ulike tider',
      problem: `Se hvordan språket har endret seg:`,
      solution: `**Norrønt (ca. 1200):**
"Konungr sitr í hǫllinni ok drekkr vín."

**Dansk (ca. 1700):**
"Kongen sidder i hallen og drikker vin."

**Riksmål (ca. 1900):**
"Kongen sitter i hallen og drikker vin."

**Moderne bokmål:**
"Kongen sitter i hallen og drikker vin."

**Moderne nynorsk:**
"Kongen sit i hallen og drikk vin."`,
    },
    {
      id: 'norsk-9-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om språkhistorie:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var hovedkonsekvensen av svartedauden for norsk språk?',
            solution: 'Skriftspråket forfalt og dansk tok over',
            multipleChoiceOptions: [
              'Skriftspråket forfalt og dansk tok over',
              'Nynorsk ble oppfunnet',
              'Runene ble tatt i bruk igjen',
              'Alle begynte å snakke svensk',
            ],
          },
          {
            label: 'b',
            task: 'Hvem skapte landsmål (nynorsk)?',
            solution: 'Ivar Aasen',
            multipleChoiceOptions: [
              'Ivar Aasen',
              'Knud Knudsen',
              'Henrik Ibsen',
              'Bjørnstjerne Bjørnson',
            ],
          },
          {
            label: 'c',
            task: 'Hva var forskjellen på de to språksynene etter 1814?',
            solution: 'Fornorske dansk vs. bygge nytt fra dialektene',
            multipleChoiceOptions: [
              'Fornorske dansk vs. bygge nytt fra dialektene',
              'Beholde dansk vs. ta i bruk svensk',
              'Skrive med runer vs. latinske bokstaver',
              'Muntlig vs. skriftlig språk',
            ],
          },
        ],
        solution: 'Språkstriden etter 1814 formet det norske språklandskapet vi har i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Refleksjonsoppgave: Hva ville skjedd hvis Ivar Aasen ikke hadde skapt landsmål?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan tror du det norske språklandskapet hadde sett ut i dag?',
            solution: 'Eleven reflekterer over alternative utfall av språkhistorien.',
          },
          {
            label: 'b',
            task: 'Tror du dialektene hadde overlevd like godt? Begrunn svaret ditt.',
            solution: 'Eleven argumenterer for sitt syn med relevante poenger.',
          },
        ],
        hints: ['Tenk på hvordan nynorsk har påvirket bokmål', 'Tenk på dialektenes status i dag'],
        solution: 'Historiske hendelser former språket vårt på måter vi kanskje ikke tenker over.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Dialekter og språklig mangfold
// ============================================================================

export const CHAPTER_NORSK_9_3_3: TextbookChapter = {
  id: 'norsk-9-3-3',
  courseId: 'norsk-9',
  chapterNumber: '3.3',
  title: 'Dialekter og språklig mangfold',
  description: 'Utforsk Norges rike dialektlandskap og språklige variasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sammenligne særtrekk ved norske dialekter og reflektere over dialektenes rolle i samfunnet',
  ],
  content: [
    {
      id: 'norsk-9-3-3-intro',
      type: 'text',
      content: `## Norges dialektlandskap

Norge har et av verdens rikeste dialektlandskap. Geografien med fjell, fjorder og daler skapte isolerte samfunn der språket utviklet seg forskjellig.

Tradisjonelt deles norske dialekter inn i fire hovedgrupper:
- Østnorsk
- Vestnorsk
- Trøndersk
- Nordnorsk`,
    },
    {
      id: 'norsk-9-3-3-def-1',
      type: 'definition',
      title: 'Dialektenes hovedtrekk',
      content: `**Østnorsk**
- Tykt L (tjukk l)
- Tonelag (forskjell mellom bønder/bønner)
- "Æ" og "e" i bøyning (kasta, hoppa)

**Vestnorsk**
- Ikke tjukk l
- Infinitiv på -a (å kasta, å hoppa)
- Mange skarre-r

**Trøndersk**
- Palatalisering (mannj, ballj)
- Apokope (hopp i stedet for hoppa)
- "Ikke" → "itj"

**Nordnorsk**
- Palatalisering
- "Ikke" → "ikkje/itj"
- E-mål (kaste, hoppe)`,
    },
    {
      id: 'norsk-9-3-3-text-2',
      type: 'text',
      content: `## Dialektendringer i dag

Dialektene er i endring:

**Regional utjevning:**
- Små lokale dialekter forsvinner
- Regionale dialekter tar over
- Oslo-området påvirker resten av landet

**Årsaker:**
- Mer reising og mobilitet
- Sosiale medier og TV
- Urbanisering
- Globalisering

**Likevel:**
- Nordmenn er stolte av dialektene sine
- Dialektbruk i offentligheten er normalt
- Vi har ingen "korrekt" talemålsnorm`,
    },
    {
      id: 'norsk-9-3-3-note-1',
      type: 'note',
      title: 'Dialekt som identitet',
      content: `Dialekten din forteller noe om hvor du kommer fra og hvem du er.

**For mange betyr dialekten:**
- Tilhørighet til et sted
- Forbindelse til familie og tradisjon
- En del av identiteten

**Dialekt-skam og dialekt-stolthet:**
- Noen føler press om å legge bort dialekten
- Andre er veldig stolte og bevisste
- Det er normalt å tilpasse språket etter situasjon

Det finnes ingen "riktig" eller "feil" måte å snakke norsk på!`,
    },
    {
      id: 'norsk-9-3-3-example-1',
      type: 'example',
      title: 'Eksempel: "Jeg vet ikke" på ulike dialekter',
      problem: `Hvordan sier man "jeg vet ikke" rundt i landet?`,
      solution: `| Sted | Dialekt |
|------|---------|
| Oslo | Jeg veit ikke |
| Bergen | Eg veit ikkje |
| Trondheim | Æ veit itj |
| Tromsø | Æ veit ikkje |
| Stavanger | Eg veit ikkje |
| Valdres | Je veit itte |
| Setesdal | Eg veit ikkje |

Alle sier det samme - bare på sin egen måte!`,
    },
    {
      id: 'norsk-9-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Dialektoppgave:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken dialektgruppe har palatalisering (mannj, ballj)?',
            solution: 'Trøndersk og nordnorsk',
            multipleChoiceOptions: [
              'Trøndersk og nordnorsk',
              'Østnorsk og vestnorsk',
              'Bare bergensk',
              'Ingen norske dialekter',
            ],
          },
          {
            label: 'b',
            task: 'Hva er "tjukk l"?',
            solution: 'En L-lyd som ligner på en blanding av L og R, typisk for østnorsk',
            multipleChoiceOptions: [
              'En L-lyd som ligner på L og R, typisk for østnorsk',
              'En R-lyd fra Bergen',
              'En svensk uttale',
              'En skrivemåte på nynorsk',
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor har Norge så mange dialekter?',
            solution: 'Geografien med fjell og fjorder skapte isolerte samfunn',
            multipleChoiceOptions: [
              'Geografien med fjell og fjorder skapte isolerte samfunn',
              'Folk ville være forskjellige med vilje',
              'Det ble bestemt av Stortinget',
              'Norge fikk dialekter fra andre land',
            ],
          },
        ],
        solution: 'Norges geografi har formet det rike dialektmangfoldet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Undersøk din egen dialekt:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke særtrekk har dialekten der du bor? Nevn minst tre.',
            solution: 'Eleven identifiserer lokale dialekttrekk.',
          },
          {
            label: 'b',
            task: 'Har du lagt merke til at noen i familien snakker annerledes enn deg? Hva er forskjellene?',
            solution: 'Eleven reflekterer over generasjonsforskjeller i språk.',
          },
          {
            label: 'c',
            task: 'Tilpasser du språket ditt i ulike situasjoner? Gi eksempler.',
            solution: 'Eleven reflekterer over egen språkbruk i ulike kontekster.',
          },
        ],
        hints: ['Tenk på ord, uttale og grammatikk', 'Sammenlign med eldre familiemedlemmer'],
        solution: 'Bevissthet om egen dialekt gir bedre forståelse for språklig variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1: Litterære epoker - realisme og naturalisme
// ============================================================================

export const CHAPTER_NORSK_9_4_1: TextbookChapter = {
  id: 'norsk-9-4-1',
  courseId: 'norsk-9',
  chapterNumber: '4.1',
  title: 'Realisme og naturalisme',
  description: 'Utforsk 1800-tallets litterære retninger som satte samfunnsproblemer på dagsordenen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og analysere tekster fra realismen og naturalismen i lys av deres samtid',
  ],
  content: [
    {
      id: 'norsk-9-4-1-intro',
      type: 'text',
      content: `## Det moderne gjennombrudd

På slutten av 1800-tallet skjedde et skifte i nordisk litteratur. Forfatterne ville ikke lenger skrive eventyr og romantiske historier - de ville sette problemer under debatt.

**Georg Brandes** formulerte det slik i 1871:
*"Det at en litteratur i vore dage lever, viser sig i at den sætter problemer under debat."*

Dette innledet **realismen** i Skandinavia.`,
    },
    {
      id: 'norsk-9-4-1-def-1',
      type: 'definition',
      title: 'Realismen (1870-1890)',
      content: `**Kjennetegn:**
- Virkelighetsnær fremstilling
- Samfunnskritikk
- Fokus på samtiden
- Psykologisk troverdige karakterer

**Temaer:**
- Kvinners stilling i samfunnet
- Klasseskiller
- Dobbeltmoral
- Religion og hykleri

**Viktige forfattere:**
- Henrik Ibsen
- Alexander Kielland
- Jonas Lie
- Amalie Skram`,
    },
    {
      id: 'norsk-9-4-1-text-2',
      type: 'text',
      content: `## Henrik Ibsen (1828-1906)

Ibsen regnes som "den moderne dramatikkens far". Hans skuespill ble oppført over hele verden og er det fortsatt.

**Viktige verk:**
- *Et dukkehjem* (1879) - Om kvinners frihet
- *Gengangere* (1881) - Om arv og hemmeligheter
- *En folkefiende* (1882) - Om sannhet vs. samfunnet
- *Vildanden* (1884) - Om livsløgn

**Et dukkehjem** sjokkerte publikum da Nora forlater mann og barn for å finne seg selv. Stykket startet en debatt om kvinners rettigheter som fortsatt pågår.`,
    },
    {
      id: 'norsk-9-4-1-def-2',
      type: 'definition',
      title: 'Naturalismen (1880-1900)',
      content: `Naturalismen var en videreføring av realismen, men mer ekstrem:

**Kjennetegn:**
- Vitenskapelig tilnærming til mennesket
- Mennesket styrt av arv og miljø
- Pessimistisk livssyn
- Skildret samfunnets skyggeside

**Temaer:**
- Fattigdom og nød
- Alkoholisme
- Prostitusjon
- Sykdom og død

**Viktige forfattere:**
- Amalie Skram
- Christian Krohg
- Hans Jæger`,
    },
    {
      id: 'norsk-9-4-1-note-1',
      type: 'note',
      title: 'Amalie Skram (1846-1905)',
      content: `Amalie Skram var en av Nordens fremste naturalistiske forfattere:

**Liv:**
- Vokste opp i Bergen
- Gift to ganger, begge ulykkelige
- Ble selv innlagt på nerveanstalt
- Brukte erfaringene i litteraturen

**Viktige verk:**
- *Constance Ring* (1885) - Kritikk av ekteskapet
- *Professor Hieronimus* (1895) - Om behandling på asyl

Hun skrev ærlig om kvinners situasjon, seksualitet og psykisk sykdom - temaer som var tabu.`,
    },
    {
      id: 'norsk-9-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Utdrag fra "Et dukkehjem"',
      problem: `Les dette utdraget fra slutten av "Et dukkehjem" og analyser det:

**Nora:** Jeg har vært din lerkefugl her i huset, likesom jeg var pappas lerkefugl hjemme. Og barna, de har igjen vært mine dukker. Jeg syntes det var morsomt når du lekte med meg, likesom de syntes det var morsomt når jeg lekte med dem. Det har vårt ekteskap vært, Torvald.`,
      solution: `**Analyse:**

**Tema:** Kvinnens rolle i ekteskapet

**Virkemidler:**
- Metaforen "dukke" - Nora har vært en ting, ikke et menneske
- Sammenligning med barndommen - hun har aldri vokst opp
- Repetisjon av "leke" - ekteskapet har ikke vært ekte

**Samfunnskritikk:**
- Kritiserer at kvinner behandles som pynt
- Viser at ekteskap kan være et fengsel
- Stiller spørsmål ved kjønnsrollene

**Historisk betydning:**
Denne scenen sjokkerte publikum i 1879. En kvinne som forlater familien var uhørt.`,
    },
    {
      id: 'norsk-9-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om realismen og naturalismen:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente Georg Brandes med at litteraturen skulle "sette problemer under debatt"?',
            solution: 'Litteraturen skulle ta opp samfunnsproblemer og kritisere urettferdighet',
            multipleChoiceOptions: [
              'Litteraturen skulle ta opp samfunnsproblemer og kritisere urettferdighet',
              'Forfattere skulle skrive om matematiske problemer',
              'Litteraturen skulle være underholdende',
              'Forfattere skulle unngå kontroversielle temaer',
            ],
          },
          {
            label: 'b',
            task: 'Hva er hovedforskjellen mellom realisme og naturalisme?',
            solution: 'Naturalismen var mer pessimistisk og fokuserte på arv og miljø',
            multipleChoiceOptions: [
              'Naturalismen var mer pessimistisk og fokuserte på arv og miljø',
              'Realismen var mer pessimistisk',
              'Det er ingen forskjell',
              'Naturalismen var romantisk',
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor var "Et dukkehjem" så kontroversielt?',
            solution: 'Nora forlater mann og barn for å finne seg selv',
            multipleChoiceOptions: [
              'Nora forlater mann og barn for å finne seg selv',
              'Stykket inneholdt vold',
              'Det var skrevet på nynorsk',
              'Det handlet om kongehuset',
            ],
          },
        ],
        solution: 'Realismen og naturalismen satte viktige samfunnsproblemer på dagsordenen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Diskuter: Er temaene fra realismen fortsatt aktuelle i dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg ett tema fra realismen (kvinners rettigheter, klasseskiller, dobbeltmoral) og forklar hvorfor det er/ikke er aktuelt i dag.',
            solution: 'Eleven argumenterer med relevante eksempler fra samtiden.',
          },
          {
            label: 'b',
            task: 'Finn et eksempel fra nåtidens medier (film, serie, bok) som tar opp lignende temaer.',
            solution: 'Eleven trekker linjer mellom historisk og moderne kultur.',
          },
        ],
        hints: ['Tenk på #metoo, klimadebatt, økende forskjeller'],
        solution: 'Mange av 1800-tallets temaer er fortsatt relevante i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Moderne litteratur
// ============================================================================

export const CHAPTER_NORSK_9_4_2: TextbookChapter = {
  id: 'norsk-9-4-2',
  courseId: 'norsk-9',
  chapterNumber: '4.2',
  title: 'Moderne litteratur',
  description: 'Utforsk litteraturen fra 1900-tallet og frem til i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og tolke tekster fra ulike tider og reflektere over tekstenes historiske kontekst',
  ],
  content: [
    {
      id: 'norsk-9-4-2-intro',
      type: 'text',
      content: `## Litteraturen etter 1900

1900-tallet brakte store endringer - to verdenskriger, teknologisk utvikling og sosiale omveltninger. Litteraturen reflekterer dette med nye former og temaer.

**Viktige perioder:**
- Nyromantikk og modernisme (1890-1940)
- Etterkrigslitteratur (1945-1970)
- Ny-realisme og postmodernisme (1970-2000)
- Samtidslitteratur (2000-)`,
    },
    {
      id: 'norsk-9-4-2-def-1',
      type: 'definition',
      title: 'Modernismen',
      content: `**Kjennetegn:**
- Eksperimentering med form
- Indre monolog og bevissthetsstrøm
- Brudd med tradisjonell fortelling
- Fremmedgjøring og angst

**Temaer:**
- Menneskets ensomhet
- Mening og meningsløshet
- Identitet og selvransakelse
- Kritikk av samfunnet

**Viktige forfattere:**
- Knut Hamsun (*Sult*, *Pan*)
- Sigrid Undset (*Kristin Lavransdatter*)
- Tarjei Vesaas (*Fuglane*, *Is-slottet*)`,
    },
    {
      id: 'norsk-9-4-2-note-1',
      type: 'note',
      title: 'Tarjei Vesaas og "Is-slottet"',
      content: `**Is-slottet** (1963) regnes som et av norsk litteraturs mesterverk.

**Handling:**
To jenter, Siss og Unn, utvikler et intenst vennskap. Unn forsvinner i et is-slott (foss som har frosset) og dør. Siss må leve videre med sorgen.

**Særtrekk:**
- Poetisk språk
- Symbolikk (isen, vannet, lyset)
- Skildrer følelser gjennom natur
- Universelle temaer: vennskap, tap, overlevelse

Boken er oversatt til over 30 språk.`,
    },
    {
      id: 'norsk-9-4-2-text-2',
      type: 'text',
      content: `## Samtidslitteratur

Litteraturen i dag er mangfoldig:

**Trender:**
- Autofiksjon (selvbiografisk fiksjon)
- Flerkulturelle perspektiver
- Klimafiksjon
- Grafiske romaner

**Kjente samtidsforfattere:**
- Karl Ove Knausgård (*Min kamp*)
- Maja Lunde (*Bienes historie*)
- Zeshan Shakar (*Tante Ulrikkes vei*)
- Maria Kjos Fonn (*Kinderwhore*)

**Ungdomslitteratur:**
- Harald Rosenløw Eeg
- Arne Svingen
- Bjørn Sortland`,
    },
    {
      id: 'norsk-9-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Autofiksjon',
      problem: `Hva er autofiksjon og hvorfor er det kontroversielt?`,
      solution: `**Autofiksjon** er litteratur der forfatteren skriver om sitt eget liv, men med litterære virkemidler.

**Eksempel: Karl Ove Knausgård**
- Seks bøker på 3600 sider om sitt eget liv
- Bruker virkelige navn på familie og venner
- Blander fakta og fiksjon

**Kontroverser:**
- Er det greit å skrive om andre uten samtykke?
- Hvor går grensen mellom privatliv og kunst?
- Hva er sant og hva er diktet opp?

**Suksess:**
- Oversatt til 30+ språk
- Diskuteres over hele verden
- Har inspirert mange andre forfattere`,
    },
    {
      id: 'norsk-9-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test din kunnskap om moderne litteratur:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner modernistisk litteratur?',
            solution: 'Eksperimentering med form, indre monolog, fremmedgjøring',
            multipleChoiceOptions: [
              'Eksperimentering med form, indre monolog, fremmedgjøring',
              'Tradisjonell fortelling med lykkelig slutt',
              'Bare dikt og ingen prosa',
              'Bare barnebøker',
            ],
          },
          {
            label: 'b',
            task: 'Hva er autofiksjon?',
            solution: 'Litteratur der forfatteren skriver om sitt eget liv',
            multipleChoiceOptions: [
              'Litteratur der forfatteren skriver om sitt eget liv',
              'Science fiction om roboter',
              'Bøker som skriver seg selv',
              'Litteratur uten forfatter',
            ],
          },
        ],
        solution: 'Moderne litteratur eksperimenterer med form og innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les en novelle eller et utdrag fra en moderne norsk forfatter og skriv en kort analyse (200-300 ord):',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler teksten om? (kort sammendrag)',
            solution: 'Eleven oppsummerer handlingen.',
          },
          {
            label: 'b',
            task: 'Hvilke temaer tar teksten opp?',
            solution: 'Eleven identifiserer sentrale temaer.',
          },
          {
            label: 'c',
            task: 'Hvilke virkemidler bruker forfatteren?',
            solution: 'Eleven peker på konkrete virkemidler.',
          },
          {
            label: 'd',
            task: 'Hva synes du om teksten? Begrunn.',
            solution: 'Eleven gir en personlig vurdering med begrunnelse.',
          },
        ],
        hints: ['Forslag: Utdrag fra Maja Lunde, Zeshan Shakar eller Maria Kjos Fonn'],
        solution: 'En litterær analyse kombinerer oppsummering, tolkning og vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Medieproduksjon
// ============================================================================

export const CHAPTER_NORSK_9_5_1: TextbookChapter = {
  id: 'norsk-9-5-1',
  courseId: 'norsk-9',
  chapterNumber: '5.1',
  title: 'Medieproduksjon',
  description: 'Lær å lage egne medietekster som podcast, video og digitale fortellinger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skape sammensatte tekster og tilpasse dem til formål og mottaker',
  ],
  content: [
    {
      id: 'norsk-9-5-1-intro',
      type: 'text',
      content: `## Hva er sammensatte tekster?

**Sammensatte tekster** kombinerer flere uttrykksformer:
- Tekst
- Bilde
- Lyd
- Video
- Grafikk

Eksempler: Nettsider, videoer, podcaster, sosiale medier-innlegg, presentasjoner.`,
    },
    {
      id: 'norsk-9-5-1-def-1',
      type: 'definition',
      title: 'Podcast',
      content: `En **podcast** er en lydfil som distribueres digitalt.

**Typer:**
- Intervju-podcast
- Historiefortelling
- Nyheter og aktualitet
- Samtale/diskusjon

**Planlegging:**
1. Velg tema og målgruppe
2. Lag manus eller disposisjon
3. Forbered spørsmål (hvis intervju)
4. Test utstyret

**Opptak:**
- Rolig sted uten støy
- God mikrofon (eller telefon)
- Snakk tydelig og med engasjement

**Redigering:**
- Fjern pauser og feil
- Legg til intro/outro
- Juster lydnivå`,
    },
    {
      id: 'norsk-9-5-1-text-2',
      type: 'text',
      content: `## Video og kortfilm

Video er et kraftfullt medium for å fortelle historier.

**Planlegging:**
- **Manus:** Hva skal sies og vises?
- **Storyboard:** Tegn opp scenene
- **Dreiebok:** Oversikt over opptak

**Bildekomposisjon:**
- **Totalbilde:** Viser hele miljøet
- **Halvtotal:** Viser person fra knærne og opp
- **Nærbilde:** Viser ansikt og følelser
- **Detaljbilde:** Viser en detalj

**Redigering:**
- Kutt mellom scener
- Legg til musikk og lydeffekter
- Tekst og grafikk`,
    },
    {
      id: 'norsk-9-5-1-def-2',
      type: 'definition',
      title: 'Digital historiefortelling',
      content: `**Digital storytelling** kombinerer personlige historier med digitale medier.

**Elementer:**
1. **Personlig vinkel:** Din egen historie eller perspektiv
2. **Manuskript:** Teksten du leser inn
3. **Voiceover:** Stemmen som forteller
4. **Bilder/video:** Illustrerer historien
5. **Musikk:** Skaper stemning

**Oppskrift:**
1. Finn en historie du vil fortelle
2. Skriv manus (300-500 ord for 3-5 min)
3. Samle bilder og video
4. Les inn voiceover
5. Sett sammen i redigeringsprogram`,
    },
    {
      id: 'norsk-9-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Podcast-manus',
      problem: `Hvordan kan et enkelt podcast-manus se ut?`,
      solution: `**Tittel:** Livet med sosiale medier

**Intro (30 sek):**
*[Vignett/jingle]*
"Velkommen til Mediepodden. I dag snakker vi om sosiale medier og hvordan de påvirker hverdagen vår. Jeg heter [navn], og med meg har jeg [gjest]."

**Del 1 - Introduksjon (2 min):**
"[Gjest], du bruker sosiale medier daglig. Kan du fortelle litt om hvordan en typisk dag ser ut?"
- Oppfølgingsspørsmål klare

**Del 2 - Fordeler og ulemper (3 min):**
"Hva er det beste med sosiale medier for deg?"
"Hva er den største utfordringen?"

**Del 3 - Tips (2 min):**
"Hvis du skulle gi ett råd til andre unge om sosiale medier, hva ville det vært?"

**Outro (30 sek):**
"Takk for at du lyttet. Følg oss på [plattform]. Neste episode handler om..."
*[Vignett]*`,
    },
    {
      id: 'norsk-9-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Planlegg en podcast-episode:',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et tema som engasjerer deg.',
            solution: 'Eleven velger et relevant og interessant tema.',
          },
          {
            label: 'b',
            task: 'Bestem formatet: Intervju, samtale eller historiefortelling?',
            solution: 'Eleven velger passende format for temaet.',
          },
          {
            label: 'c',
            task: 'Lag en disposisjon med intro, hoveddel og avslutning.',
            solution: 'Disposisjonen har tydelig struktur.',
          },
          {
            label: 'd',
            task: 'Skriv 5 spørsmål du kan stille en gjest.',
            solution: 'Spørsmålene er åpne og inviterer til refleksjon.',
          },
        ],
        hints: ['Tenk på hvem som er målgruppen din', 'Åpne spørsmål gir bedre svar enn ja/nei-spørsmål'],
        solution: 'God planlegging er nøkkelen til en vellykket podcast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en digital fortelling (3-5 minutter) om et tema som betyr noe for deg.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv manus for voiceover (300-500 ord).',
            solution: 'Manuset er personlig og engasjerende.',
          },
          {
            label: 'b',
            task: 'Samle 10-15 bilder som illustrerer historien.',
            solution: 'Bildene støtter opp under fortellingen.',
          },
          {
            label: 'c',
            task: 'Les inn voiceover og sett sammen i et redigeringsprogram.',
            solution: 'Den ferdige produksjonen har god flyt og lydkvalitet.',
          },
        ],
        hints: ['Personlige historier engasjerer mest', 'Velg bilder som viser, ikke bare forteller'],
        solution: 'Digital historiefortelling kombinerer det personlige med det tekniske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Mediekritikk og kildekritikk
// ============================================================================

export const CHAPTER_NORSK_9_5_2: TextbookChapter = {
  id: 'norsk-9-5-2',
  courseId: 'norsk-9',
  chapterNumber: '5.2',
  title: 'Mediekritikk og kildekritikk',
  description: 'Utvikle evnen til å vurdere medier og kilder kritisk i en digital verden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere kilder kritisk og være bevisst på hvordan medier påvirker oss',
  ],
  content: [
    {
      id: 'norsk-9-5-2-intro',
      type: 'text',
      content: `## Medier i hverdagen

Vi omgir oss med medier hele tiden:
- Sosiale medier
- Nyheter og aviser
- TV og strømmetjenester
- Podcaster og musikk
- Reklame

For å navigere i dette landskapet trenger vi **mediekritikk** og **kildekritikk**.`,
    },
    {
      id: 'norsk-9-5-2-def-1',
      type: 'definition',
      title: 'TONE-sjekken',
      content: `Bruk **TONE** for å vurdere kilder:

**T - Troverdighet**
- Hvem står bak kilden?
- Er avsenderen en ekspert?
- Har de noe å tjene på å si dette?

**O - Objektivitet**
- Er fremstillingen balansert?
- Får flere sider komme til orde?
- Er det en skjult agenda?

**N - Nøyaktighet**
- Er fakta korrekte?
- Kan påstandene bekreftes andre steder?
- Er det lenket til primærkilder?

**E - Egnethet**
- Er kilden relevant for ditt formål?
- Er den oppdatert?
- Er den på riktig nivå for deg?`,
    },
    {
      id: 'norsk-9-5-2-text-2',
      type: 'text',
      content: `## Falske nyheter og desinformasjon

**Falske nyheter** er usanne historier som spres som om de var ekte nyheter.

**Typer:**
- **Satire:** Overdrivelse for komisk effekt (NRK Satiriks)
- **Villeding:** Feilaktig fremstilling av fakta
- **Propaganda:** Politisk påvirkning
- **Løgn:** Bevisst usann informasjon

**Hvorfor spres falske nyheter?**
- For å tjene penger (klikk = annonser)
- For politisk påvirkning
- For å skape splid
- Fordi folk tror det er sant og deler videre`,
    },
    {
      id: 'norsk-9-5-2-def-2',
      type: 'definition',
      title: 'Algoritmer og ekkokammer',
      content: `**Algoritmer** bestemmer hva du ser på sosiale medier:
- De viser deg innhold du sannsynligvis liker
- Du ser mer av det du allerede er enig i
- Andre perspektiver filtreres bort

**Ekkokammer:**
- Du omgir deg bare med folk som tenker likt
- Motstemmer blir usynlige
- Dine meninger forsterkes

**Filterboble:**
- Internett tilpasses deg personlig
- To personer får ulike søkeresultater
- Du vet ikke hva du ikke ser

**Tips:**
- Følg kilder du er uenig med
- Søk aktivt etter andre perspektiver
- Vær kritisk til innhold som bekrefter det du allerede tror`,
    },
    {
      id: 'norsk-9-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Faktasjekk',
      problem: `Du ser en delt nyhetssak på sosiale medier: "Forskning viser at sukker er like avhengighetsskapende som heroin."

Hvordan faktasjekker du dette?`,
      solution: `**Steg 1 - Sjekk kilden**
- Hvor kommer påstanden fra?
- Er det en seriøs nyhetskanal eller en ukjent blogg?

**Steg 2 - Søk etter originalen**
- Finn den opprinnelige forskningen
- Les hva forskerne faktisk sa

**Steg 3 - Kryss-sjekk**
- Søk "sukker avhengighet faktasjekk"
- Se hva Faktisk.no eller andre sier

**Steg 4 - Vurder nyansen**
- Påstanden er forenklet
- Forskere fant likheter, men ikke at det er "like farlig"
- Overskriften overdriver for å få klikk

**Konklusjon:**
Påstanden er villedende. Det er noe sant i det, men sammenligningen er overdrevet.`,
    },
    {
      id: 'norsk-9-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Bruk TONE-sjekken:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en nyhetsartikkel og vurder den med TONE-metoden.',
            solution: 'Eleven anvender alle fire kriteriene på en konkret tekst.',
          },
          {
            label: 'b',
            task: 'Hva er kildens styrker og svakheter?',
            solution: 'Eleven identifiserer konkrete styrker og svakheter.',
          },
          {
            label: 'c',
            task: 'Ville du brukt denne kilden i en skoleoppgave? Begrunn.',
            solution: 'Eleven tar en begrunnet beslutning om kildens egnethet.',
          },
        ],
        hints: ['Velg en artikkel om et aktuelt tema', 'Sjekk hvem som har skrevet og publisert'],
        solution: 'TONE-sjekken hjelper deg å vurdere kilder systematisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-9-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-9-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Refleksjonsoppgave om ekkokammer:',
        subTasks: [
          {
            label: 'a',
            task: 'Tenk på din egen sosiale medie-bruk. Ser du mest innhold du er enig i?',
            solution: 'Eleven reflekterer ærlig over egen mediebruk.',
          },
          {
            label: 'b',
            task: 'Hva kan du gjøre for å få et bredere perspektiv?',
            solution: 'Eleven foreslår konkrete tiltak (følge flere kilder, søke aktivt etter motargumenter).',
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å høre andre perspektiver?',
            solution: 'Eleven reflekterer over verdien av mangfold i informasjon.',
          },
        ],
        hints: ['Tenk på hvem du følger og hva du får opp i feeden'],
        solution: 'Bevissthet om algoritmer og ekkokammer gjør deg til en bedre mediebruker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const NORSK_9_CHAPTERS = [
  CHAPTER_NORSK_9_1_1,
  CHAPTER_NORSK_9_1_2,
  CHAPTER_NORSK_9_1_3,
  CHAPTER_NORSK_9_2_1,
  CHAPTER_NORSK_9_2_2,
  CHAPTER_NORSK_9_2_3,
  CHAPTER_NORSK_9_3_1,
  CHAPTER_NORSK_9_3_2,
  CHAPTER_NORSK_9_3_3,
  CHAPTER_NORSK_9_4_1,
  CHAPTER_NORSK_9_4_2,
  CHAPTER_NORSK_9_5_1,
  CHAPTER_NORSK_9_5_2,
];

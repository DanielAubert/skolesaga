/**
 * Tekstbok innhold for Samfunnskunnskap (VG1-VG2)
 *
 * Folger LK20 lareplan for samfunnskunnskap.
 * Dekker sentrale temaer innen demokrati, rettigheter, politikk og samfunnsforhold.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Individ og samfunn
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1_1: TextbookChapter = {
  id: 'samfunnskunnskap-1-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.1',
  title: 'Sosialisering - hvordan vi formes',
  description: 'Forstå hvordan vi blir formet som mennesker gjennom primær, sekundær og tertiær sosialisering.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og formes',
    'drøfte hvordan sosialisering påvirker holdninger og verdier',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-1-intro',
      type: 'text',
      content: `## Hva er sosialisering?

Sosialisering er prosessen der vi lærer normer, verdier og ferdigheter som gjør oss i stand til å fungere i samfunnet. Fra vi er født, blir vi formet av menneskene rundt oss og de miljøene vi vokser opp i.

**Sosialisering handler om:**
- Å lære språk og kommunikasjon
- Å forstå sosiale normer og regler
- Å utvikle verdier og holdninger
- Å finne vår plass i fellesskapet

Uten sosialisering ville vi ikke kunne delta i samfunnet. Det er gjennom sosialisering vi blir sosiale vesener.`,
    },
    {
      id: 'samfunnskunnskap-1-1-def-1',
      type: 'definition',
      title: 'Tre typer sosialisering',
      content: `**Primærsosialisering:**
Den første og mest grunnleggende sosialiseringen som skjer i familien. Her lærer vi språk, grunnleggende verdier og følelsesmessige bånd. Familien er den viktigste sosialiseringsagenten i barndommen.

**Sekundærsosialisering:**
Sosialiseringen som skjer utenfor familien - i barnehage, skole, fritidsaktiviteter og arbeidslivet. Her lærer vi å forholde oss til formelle regler og rolleforventninger.

**Tertiærsosialisering:**
Sosialiseringen som skjer gjennom medier, sosiale medier og samfunnet generelt. Denne formen for sosialisering har blitt stadig viktigere i vår digitale tid.`,
    },
    {
      id: 'samfunnskunnskap-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom primær- og sekundærsosialisering.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner primærsosialisering?',
            solution: 'Primærsosialisering skjer i familien i de første leveårene. Det er den grunnleggende sosialiseringen der vi lærer språk, verdier og følelsesmessig tilknytning.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner sekundærsosialisering?',
            solution: 'Sekundærsosialisering skjer utenfor familien, i barnehage, skole og fritidsaktiviteter. Her lærer vi formelle regler og rolleforventninger.',
          },
          {
            label: 'c',
            task: 'Hvorfor er begge typene viktige?',
            solution: 'Primærsosialiseringen gir det grunnleggende fundamentet for personligheten, mens sekundærsosialiseringen forbereder oss på å delta i samfunnet utenfor familien.',
          },
        ],
        solution: 'Primærsosialisering skjer i familien og er grunnleggende, sekundærsosialisering skjer i skole/samfunn og bygger videre på dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-def-2',
      type: 'definition',
      title: 'Sosialiseringsagenter',
      content: `**Familie:**
Den viktigste agenten i primærsosialiseringen. Gir trygghet, omsorg og grunnleggende verdier.

**Barnehage og skole:**
Viktige arenaer for sekundærsosialisering. Lærer samarbeid, fagkunnskap og samfunnets normer.

**Venner og jevnaldrende:**
Påvirker holdninger, interesser og identitet, særlig i ungdomsårene.

**Medier og sosiale medier:**
Formidler verdier, trender og forventninger. Stor påvirkningskraft på unge.

**Arbeidsliv:**
Sosialiserer oss inn i yrkesroller og profesjonell atferd.`,
    },
    {
      id: 'samfunnskunnskap-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg to sosialiseringsagenter og drøft hvordan de påvirker unge mennesker i dag.',
        hints: ['Tenk på konkrete eksempler fra hverdagen'],
        solution: 'Svaret bør diskutere minst to agenter (f.eks. sosiale medier og skole) og gi konkrete eksempler på hvordan de påvirker verdier, holdninger og atferd hos unge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Sosialiseringens påvirkning',
      problem: `Sara vokste opp i en familie der det var vanlig å diskutere politikk rundt middagsbordet. Foreldrene oppmuntret henne til å stille spørsmål og tenke kritisk. Hvordan kan dette ha påvirket Saras sosialisering?`,
      solution: `**Primærsosialisering i familien:**
- Sara har lært at det er normalt og verdifullt å engasjere seg i samfunnsspørsmål
- Hun har utviklet evne til kritisk tenkning
- Foreldrene har vært rollemodeller for demokratisk deltakelse

**Mulige konsekvenser:**
- Sara er sannsynligvis mer politisk engasjert enn gjennomsnittet
- Hun tør kanskje å ytre meningene sine i offentlige sammenhenger
- Hun kan oppleve at andre familier har andre normer for politisk diskusjon

**Viktig poeng:**
Sosialiseringen er ikke determinerende - Sara kan fortsatt forme sine egne holdninger, men grunnlaget fra familien vil påvirke utgangspunktet hennes.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan har sosiale medier endret sosialiseringen sammenlignet med tidligere generasjoner?',
        hints: ['Tenk på både positive og negative sider'],
        solution: 'Sosiale medier har gitt nye arenaer for sosialisering: Unge eksponeres for flere ulike verdisett, får innflytelse fra influencere, opplever gruppetilhørighet på tvers av geografi, men også press om å passe inn og sammenligning med andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over din egen sosialisering: Hvilke agenter har påvirket deg mest?',
        hints: ['Tenk på konkrete verdier og holdninger du har'],
        solution: 'Svaret bør være personlig og reflekterende, og vise forståelse for hvordan ulike agenter (familie, skole, venner, medier) har bidratt til å forme egne verdier og holdninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_2: TextbookChapter = {
  id: 'samfunnskunnskap-1-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.2',
  title: 'Identitet og selvfølelse',
  description: 'Forstå hva identitet er, hvordan den utvikles, og hvordan selvfølelse påvirkes av samfunnet rundt oss.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og formes',
    'drøfte sammenhengen mellom selvfølelse og samfunnets forventninger',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-2-intro',
      type: 'text',
      content: `## Hva er identitet?

Identitet handler om hvem vi er og hvordan vi oppfatter oss selv. Det er summen av våre egenskaper, verdier, erfaringer og tilhørigheter som gjør oss til den vi er.

**Identitet omfatter:**
- Personlig identitet (hvem jeg er som individ)
- Sosial identitet (hvilke grupper jeg tilhører)
- Kulturell identitet (hvilken kultur jeg identifiserer meg med)
- Kjønnsidentitet (hvordan jeg opplever mitt kjønn)

Identitet er ikke statisk - den utvikles og endres gjennom hele livet, i møte med andre mennesker og nye erfaringer.`,
    },
    {
      id: 'samfunnskunnskap-1-2-def-1',
      type: 'definition',
      title: 'Ulike sider ved identitet',
      content: `**Personlig identitet:**
De egenskapene og trekkene som gjør deg unik som individ - dine verdier, interesser, drømmer og personlighet.

**Sosial identitet:**
De gruppene du tilhører og identifiserer deg med - familie, vennegjeng, klasse, idrettslag, nasjonalitet.

**Rolleidentitet:**
De ulike rollene du har i livet - sønn/datter, elev, venn, arbeidstaker, kjæreste.

**Kropp og utseende:**
Hvordan vi ser ut påvirker hvordan vi blir møtt av andre, og dermed også vår selvoppfatning.

**Digital identitet:**
Hvordan vi presenterer oss selv på nett og i sosiale medier - som kan være annerledes enn "offline"-identiteten.`,
    },
    {
      id: 'samfunnskunnskap-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom personlig identitet og sosial identitet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er personlig identitet?',
            solution: 'Personlig identitet handler om de egenskapene som gjør deg unik som individ - dine verdier, interesser og personlighet.',
          },
          {
            label: 'b',
            task: 'Hva er sosial identitet?',
            solution: 'Sosial identitet handler om gruppetilhørighet - hvilke grupper du identifiserer deg med og føler tilhørighet til.',
          },
          {
            label: 'c',
            task: 'Hvordan henger de sammen?',
            solution: 'De henger sammen ved at gruppetilhørighet påvirker vår personlige utvikling, og våre personlige egenskaper påvirker hvilke grupper vi søker mot.',
          },
        ],
        solution: 'Personlig identitet er individuelle egenskaper, sosial identitet er gruppetilhørighet. De påvirker hverandre gjensidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-def-2',
      type: 'definition',
      title: 'Selvfølelse og selvbilde',
      content: `**Selvbilde:**
Hvordan vi ser på oss selv - våre styrker, svakheter og egenskaper. Selvbildet påvirkes av andres tilbakemeldinger.

**Selvfølelse:**
Hvordan vi føler om oss selv - om vi verdsetter og aksepterer oss selv. God selvfølelse betyr at man har et positivt forhold til seg selv.

**Selvsikkerhet:**
Troen på egne evner til å mestre utfordringer og nå mål.

**Faktorer som påvirker selvfølelse:**
- Oppvekst og omsorg
- Tilbakemeldinger fra andre
- Mestringsopplevelser
- Sammenligning med andre
- Sosiale medier og idealbilder`,
    },
    {
      id: 'samfunnskunnskap-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan kan sosiale medier påvirke unges selvfølelse?',
        hints: ['Tenk på både positive og negative sider'],
        solution: 'Sosiale medier kan påvirke negativt gjennom sammenligning med idealiserte bilder, press om likes og følgere, og mobbing. Positivt kan det gi tilhørighet, mulighet for selvuttrykk og støtte fra likesinnede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Identitet i endring',
      problem: `Marius er 17 år og har alltid definert seg gjennom fotballen. Han har spilt siden han var 6 år og drømmer om å bli proff. Etter en alvorlig kneskade må han slutte å spille. Hvordan kan dette påvirke hans identitet?`,
      solution: `**Identitetsutfordring:**
- Marius har bygget mye av sin identitet rundt fotballen
- Han mister en viktig arena for mestring og tilhørighet
- Rollen som "fotballspiller" forsvinner

**Mulige reaksjoner:**
- Sorg og tap - han mister noe som har vært viktig
- Identitetskrise - "hvem er jeg uten fotballen?"
- Behov for å finne nye arenaer og interesser

**Veien videre:**
- Identitet er mer enn én ting - Marius har andre egenskaper og tilhørigheter
- Han kan finne nye måter å engasjere seg i fotball (trener, dommer, supporter)
- Krisen kan bli en mulighet for vekst og å oppdage nye sider av seg selv

**Viktig poeng:**
Identitet er fleksibel og kan tilpasses nye livssituasjoner.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft påstanden: "Vi har full kontroll over hvem vi er."',
        hints: ['Tenk på både individets valg og ytre påvirkninger'],
        solution: 'Vi har noe kontroll gjennom våre valg og holdninger, men identiteten formes også av faktorer utenfor vår kontroll: oppvekst, genetikk, samfunnsstrukturer, andres forventninger. Identitet er et samspill mellom individ og omgivelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre faktorer som har vært viktige for utviklingen av din egen identitet.',
        hints: ['Tenk på familie, venner, interesser, opplevelser'],
        solution: 'Svaret bør være personlig og reflekterende, og vise forståelse for hvordan ulike faktorer (familie, venner, skole, hobbyer, medier) har bidratt til å forme egen identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_3: TextbookChapter = {
  id: 'samfunnskunnskap-1-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.3',
  title: 'Personlig økonomi - budsjett og sparing',
  description: 'Lær å håndtere egen økonomi gjennom budsjett, sparing og smarte økonomiske valg.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og reflektere over egen økonomi og forbruk',
    'drøfte hvordan økonomiske valg påvirker egen livssituasjon',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-3-intro',
      type: 'text',
      content: `## Hvorfor er personlig økonomi viktig?

Økonomisk forståelse er en viktig livsferdighet. Når du begynner å tjene egne penger og ta ansvar for egen økonomi, er det avgjørende å ha kunnskap om budsjett, sparing og økonomiske valg.

**God økonomistyring handler om:**
- Å ha oversikt over inntekter og utgifter
- Å leve innenfor sine økonomiske rammer
- Å spare til fremtidige mål og behov
- Å unngå gjeld du ikke kan håndtere
- Å ta bevisste valg om forbruk

Dårlig økonomistyring kan føre til stress, gjeldsproblemer og begrensede muligheter i livet.`,
    },
    {
      id: 'samfunnskunnskap-1-3-def-1',
      type: 'definition',
      title: 'Grunnleggende økonomibegreper',
      content: `**Inntekt:**
Penger du mottar - lønn, stipend, lån, gaver eller andre ytelser.

**Utgifter:**
Penger du bruker - faste utgifter (husleie, abonnementer) og variable utgifter (mat, klær, underholdning).

**Budsjett:**
En plan for hvordan du skal bruke pengene dine. Viser forventede inntekter og utgifter over en periode.

**Sparing:**
Å sette av penger til fremtidige behov eller mål. "Betal deg selv først" - spar før du bruker.

**Forbruk:**
Hvordan du bruker pengene dine på varer og tjenester.

**Gjeld:**
Penger du skylder andre - studielån, kredittkort, forbrukslån.`,
    },
    {
      id: 'samfunnskunnskap-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom faste og variable utgifter, og gi eksempler på begge.',
        solution: 'Faste utgifter er utgifter som er like hver måned (husleie, abonnementer, forsikring). Variable utgifter varierer fra måned til måned (mat, klær, underholdning). Faste utgifter er lettere å planlegge for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-def-2',
      type: 'definition',
      title: 'Hvordan lage budsjett',
      content: `**1. Kartlegg inntektene:**
- Lønn etter skatt
- Stipend
- Andre inntekter

**2. Kartlegg faste utgifter:**
- Husleie/boutgifter
- Forsikringer
- Telefon/internett
- Abonnementer (streaming, treningssenter)

**3. Estimer variable utgifter:**
- Mat og dagligvarer
- Transport
- Klær
- Underholdning og sosiale aktiviteter

**4. Sett av til sparing:**
- Nødfond (3-6 måneders utgifter)
- Kortsiktige mål (ferie, ny telefon)
- Langsiktige mål (bil, bolig)

**5. Følg opp og juster:**
- Sjekk budsjettet månedlig
- Juster etter behov`,
    },
    {
      id: 'samfunnskunnskap-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Emmas budsjett',
      problem: `Emma er 18 år og har fått sin første deltidsjobb. Hun tjener 8000 kr i måneden etter skatt. Hun bor hjemme, men betaler 2000 kr til foreldrene. Hvordan kan hun sette opp et budsjett?`,
      solution: `**Emmas månedsbudsjett:**

**Inntekt:** 8000 kr

**Faste utgifter:**
- Bidrag hjemme: 2000 kr
- Mobil: 300 kr
- Spotify + Netflix: 250 kr
- **Sum faste:** 2550 kr

**Variable utgifter:**
- Transport: 500 kr
- Mat/lunsj på jobb: 600 kr
- Klær og personlig: 500 kr
- Sosiale aktiviteter: 800 kr
- **Sum variable:** 2400 kr

**Sparing:**
- Nødfond: 500 kr
- Sparekonto (reise): 1000 kr
- **Sum sparing:** 1500 kr

**Buffer/uforutsette utgifter:** 1550 kr

**Tips til Emma:**
- Spar automatisk ved lønning
- Ha buffer til uforutsette utgifter
- Vurder om alle abonnementer er nødvendige`,
    },
    {
      id: 'samfunnskunnskap-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag et enkelt budsjett for deg selv basert på din nåværende eller forventede økonomiske situasjon.',
        hints: ['Inkluder alle inntekter og utgifter du kan komme på'],
        solution: 'Svaret bør inneholde oversikt over inntekter, faste utgifter, variable utgifter og sparing. Budsjettet bør gå i balanse eller ha overskudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
        spreadsheetTemplate: 'budget',
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig å ha et nødfond, og hvor mye bør man ha spart?',
        solution: 'Et nødfond gir økonomisk trygghet ved uforutsette utgifter (bil som må repareres, tannlege, miste jobb). Anbefalt størrelse er 3-6 måneders utgifter. Det forhindrer at man må ta opp dyre lån i en krise.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvilke økonomiske utfordringer møter unge voksne i dag?',
        hints: ['Tenk på boligpriser, studielån, forbrukslån, press om forbruk'],
        solution: 'Utfordringer: Høye boligpriser, studielån, lett tilgang til forbrukslån og kredittkort, press fra reklame og sosiale medier om forbruk, usikre jobber (deltid, midlertidige stillinger). Krever god økonomistyring og bevissthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_4: TextbookChapter = {
  id: 'samfunnskunnskap-1-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.4',
  title: 'Forbruk og kommersiell påvirkning',
  description: 'Forstå hvordan reklame og kommersiell påvirkning former våre ønsker og valg som forbrukere.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og reflektere over egen økonomi og forbruk',
    'drøfte hvordan kommersiell påvirkning virker på forbrukeratferd',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-4-intro',
      type: 'text',
      content: `## Forbrukersamfunnet

Vi lever i et forbrukersamfunn der vi daglig blir eksponert for tusenvis av reklambudskap. Reklame og markedsføring påvirker hva vi ønsker oss, hva vi kjøper og hvordan vi ser på oss selv.

**Kjennetegn ved forbrukersamfunnet:**
- Masseproduksjon og masseforbruk
- Reklame er overalt - i medier, på gata, i sosiale medier
- Forbruk knyttes til identitet og status
- "Bruk og kast"-mentalitet
- Stadig nye produkter og trender

Å være en bevisst forbruker betyr å forstå hvordan vi blir påvirket og ta gjennomtenkte valg.`,
    },
    {
      id: 'samfunnskunnskap-1-4-def-1',
      type: 'definition',
      title: 'Hvordan reklame påvirker oss',
      content: `**Emosjonell appell:**
Reklame spiller på følelser som glede, frykt, tilhørighet og status. "Kjøp dette produktet og bli lykkelig/populær/vellykket."

**Sosial bevis:**
"Alle andre har det" - vi vil ha det andre har for å passe inn.

**Knapphetseffekten:**
"Kun i dag!" "Begrenset antall!" - skaper hastverk og frykt for å gå glipp av noe.

**Influencer-markedsføring:**
Personer vi ser opp til anbefaler produkter - ofte uten tydelig merking av at det er reklame.

**Målrettet reklame:**
Algoritmer analyserer oss og viser reklame tilpasset våre interesser og svakheter.

**Produktplassering:**
Produkter vises i filmer, serier og hos influencere uten at det fremstår som reklame.`,
    },
    {
      id: 'samfunnskunnskap-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv tre ulike måter reklame forsøker å påvirke oss på.',
        solution: 'Eksempler: 1) Emosjonell appell - spiller på følelser som glede eller frykt. 2) Sosial bevis - "alle andre har det". 3) Knapphetseffekt - "kun i dag!". 4) Influencer-markedsføring. 5) Målrettet digital reklame.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-def-2',
      type: 'definition',
      title: 'Forbrukerrettigheter og -ansvar',
      content: `**Dine rettigheter som forbruker:**
- Angrerett ved nettkjøp (14 dager)
- Reklamasjonsrett (2 eller 5 år)
- Rett til korrekt informasjon
- Beskyttelse mot villedende markedsføring

**Kritisk forbruk innebærer:**
- Vurdere om du virkelig trenger produktet
- Sammenligne priser og kvalitet
- Gjenkjenne reklametriks
- Tenke på miljøkonsekvenser
- Unngå impulskjøp

**Bærekraftig forbruk:**
- Kjøpe mindre, men bedre kvalitet
- Gjenbruk og reparasjon
- Velge miljøvennlige alternativer
- Støtte etiske produsenter`,
    },
    {
      id: 'samfunnskunnskap-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Influencer-markedsføring',
      problem: `Live følger flere influencere på Instagram. Hun ser at favorittinfluenceren hennes viser frem et nytt hudpleieprodukt og sier det har "forandret huden hennes totalt". Live får lyst til å kjøpe produktet. Hva bør hun tenke på?`,
      solution: `**Kritiske spørsmål Live bør stille:**

**Er dette reklame?**
- Er innlegget merket med #ad eller #reklame?
- Får influenceren betalt eller gratis produkter?
- Markedsføringsloven krever at reklame skal merkes

**Er påstandene troverdige?**
- "Forandret huden totalt" - kan dette dokumenteres?
- Har influenceren egentlig brukt produktet over tid?
- Kan resultatet skyldes andre faktorer?

**Trenger jeg dette?**
- Har jeg et problem produktet løser?
- Har jeg lignende produkter fra før?
- Har jeg råd til det?

**Alternativer:**
- Sjekk uavhengige anmeldelser
- Sammenlign med lignende produkter
- Vent noen dager før du kjøper (unngå impulskjøp)

**Lærdommen:**
Influencere er ofte betalte selgere - vær kritisk til anbefalinger.`,
    },
    {
      id: 'samfunnskunnskap-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser en reklame du nylig har sett. Hvilke virkemidler bruker den for å påvirke?',
        hints: ['Tenk på følelser, bilder, språk, kjendiser/influencere'],
        solution: 'Svaret bør identifisere konkrete virkemidler i reklamen (farger, musikk, personer, budskap) og analysere hvilke følelser eller behov den appellerer til.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft: Bør influencer-reklame reguleres strengere?',
        hints: ['Tenk på forbrukerrettigheter, ytringsfrihet og næringsinteresser'],
        solution: 'Argumenter for: Beskytter unge forbrukere, sikrer ærlig markedsføring, skaper tillit. Mot: Kan hemme kreativitet, vanskelig å håndheve, voksne bør kunne vurdere selv. Viktig med balanse mellom beskyttelse og frihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan du gjøre for å bli en mer bevisst forbruker?',
        solution: 'Tiltak: Vent før impulskjøp, sammenlign priser, les uavhengige anmeldelser, vurder om du trenger produktet, tenk på miljøkonsekvenser, gjenkjenn reklametriks, sett budsjett for forbruk, unngå å handle når du er lei eller stresset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_5: TextbookChapter = {
  id: 'samfunnskunnskap-1-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.5',
  title: 'Kropp, grenser og samtykke',
  description: 'Forstå betydningen av personlige grenser, samtykke og respekt for egen og andres kropp.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over grensesetting og samtykke',
    'drøfte hvordan respekt for egen og andres kropp er viktig i relasjoner',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-5-intro',
      type: 'text',
      content: `## Kropp og grenser

Alle mennesker har rett til å bestemme over egen kropp. Å forstå og respektere grenser - både egne og andres - er grunnleggende for gode relasjoner og et trygt samfunn.

**Viktige prinsipper:**
- Du eier din egen kropp
- Du har rett til å sette grenser
- Andre må respektere dine grenser
- Du må respektere andres grenser
- Samtykke er nødvendig i alle nære relasjoner

Grenser handler ikke bare om fysisk kontakt, men også om følelser, tid, personlig rom og digital kommunikasjon.`,
    },
    {
      id: 'samfunnskunnskap-1-5-def-1',
      type: 'definition',
      title: 'Hva er samtykke?',
      content: `**Samtykke betyr:**
At noen frivillig og aktivt sier ja til noe. Samtykke må være:

**Frivillig:**
Gitt uten press, trusler eller tvang. Maktforhold kan påvirke frivillighet.

**Informert:**
Personen må forstå hva de sier ja til.

**Entusiastisk:**
Et ekte ja, ikke bare fravær av nei.

**Gjensidig:**
Begge parter må samtykke.

**Kan trekkes tilbake:**
Man kan ombestemme seg når som helst.

**Situasjonsbestemt:**
Samtykke til én ting betyr ikke samtykke til alt.

**Viktig:**
Å være beruset, sove eller være redd gjør at man ikke kan gi gyldig samtykke.`,
    },
    {
      id: 'samfunnskunnskap-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva samtykke er og hvilke krav som stilles til gyldig samtykke.',
        solution: 'Samtykke er å frivillig si ja til noe. Krav: Må være frivillig (uten press), informert (forstå hva man sier ja til), entusiastisk (ekte ja), kan trekkes tilbake, situasjonsbestemt. Man kan ikke gi samtykke hvis man er beruset, sover eller er redd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-def-2',
      type: 'definition',
      title: 'Grensesetting',
      content: `**Fysiske grenser:**
Hvem som får ta på deg, hvordan og hvor. Du bestemmer selv hva som er greit.

**Emosjonelle grenser:**
Hva du deler av følelser og personlig informasjon. Du trenger ikke fortelle alt til alle.

**Digitale grenser:**
Hva du deler på nett, hvem du svarer, hva slags bilder du sender eller mottar.

**Tidsgrenser:**
Hvor mye tid du bruker på andre vs. deg selv.

**Hvordan sette grenser:**
- Kjenn etter hva som føles riktig for deg
- Kommuniser tydelig og direkte
- Du trenger ikke forklare eller rettferdiggjøre
- Stå fast ved grensene dine
- Det er OK å si nei`,
    },
    {
      id: 'samfunnskunnskap-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi eksempler på ulike typer grenser (fysiske, emosjonelle, digitale).',
        solution: 'Fysiske: Hvem som får klemme deg, sitte nær deg. Emosjonelle: Hva du deler av følelser, hva du orker å høre på. Digitale: Hvilke bilder du deler, hvem du svarer, når du er tilgjengelig online.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Grenser i praksis',
      problem: `Karoline er på fest og danser med noen hun nylig har møtt. Personen begynner å ta på henne på måter hun ikke er komfortabel med. Hva kan hun gjøre?`,
      solution: `**Karolines valgmuligheter:**

**Si tydelig ifra:**
- "Stopp, jeg vil ikke det"
- "Ikke ta på meg sånn"
- Hun trenger ikke være høflig eller beklage

**Fysisk markere grensen:**
- Flytte seg unna
- Ta vekk personens hender
- Gå fra situasjonen

**Søke støtte:**
- Gå til venner
- Be noen om hjelp
- Kontakte vakter/ansvarlige

**Viktige poeng:**
- Karolines grenser er gyldige uansett
- At hun danset betyr ikke samtykke til mer
- Hun kan ombestemme seg når som helst
- Alkohol endrer ikke på samtykkeregelen
- Den andre personen har ansvar for sin oppførsel

**Etterpå:**
- Karolines følelser er gyldige
- Hun kan snakke med noen hun stoler på
- Hendelsen er ikke hennes feil`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor kan det være vanskelig å sette grenser, og hvordan kan man bli bedre til det?',
        hints: ['Tenk på sosiale forventninger, press og øvelse'],
        solution: 'Vanskelig pga: Frykt for å såre andre, ønske om å passe inn, usikkerhet, maktforhold, sosiale forventninger. Bli bedre: Øve i trygge situasjoner, starte med små ting, huske at egne behov er viktige, akseptere at andre kan bli skuffet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvordan kan vi skape en kultur der det er lettere å si nei og respektere andres nei?',
        solution: 'Tiltak: Normalisere grensesetting, lære om samtykke tidlig, rose folk som setter grenser, akseptere nei uten press, være gode rollemodeller, snakke åpent om temaet, ikke latterliggjøre eller dømme de som setter grenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_6: TextbookChapter = {
  id: 'samfunnskunnskap-1-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.6',
  title: 'Kjønn, seksualitet og samfunn',
  description: 'Utforske ulike syn på kjønn og seksualitet, og forstå hvordan disse temaene debatteres i samfunnet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over ulike perspektiver på kjønn og seksualitet',
    'drøfte hvordan normer og forventninger varierer i samfunnet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-6-intro',
      type: 'text',
      content: `## Kjønn og seksualitet i samfunnet

Kjønn og seksualitet er temaer der mennesker har ulike syn og verdier. Disse synspunktene kan være formet av biologi, kultur, religion, personlige erfaringer og politisk overbevisning.

**Ulike perspektiver i samfunnet:**
- Noen legger hovedvekt på biologiske forskjeller mellom kjønnene
- Andre fremhever sosiale og kulturelle faktorer
- Religiøse tradisjoner har ofte definerte syn på kjønn og seksualitet
- Politiske ståsteder varierer fra tradisjonelle til progressive
- Vitenskapelige miljøer har også ulike tilnærminger

Å forstå at det finnes flere perspektiver på disse spørsmålene, og at folk kan være uenige i god tro, er viktig for å delta i samfunnsdebatten.`,
    },
    {
      id: 'samfunnskunnskap-1-6-def-1',
      type: 'definition',
      title: 'Grunnleggende begreper',
      content: `**Biologisk kjønn:**
De fysiske egenskapene som definerer kroppen som mann eller kvinne. Basert på kromosomer, hormoner og reproduktive organer. Et lite mindretall (ca. 0,02-0,05%) fødes med variasjon i kjønnskarakteristika.

**Kjønnsidentitet:**
Hvordan en person opplever sitt eget kjønn. De aller fleste opplever samsvar mellom biologisk kjønn og kjønnsidentitet. Noen opplever at disse ikke samsvarer (kjønnsinkongruens).

**Kjønnsroller:**
Samfunnets forventninger til hvordan menn og kvinner skal oppføre seg. Disse har endret seg betydelig over tid.

**Seksuell orientering:**
Hvem man føler romantisk og seksuell tiltrekning til:
- Heterofil: Tiltrukket av motsatt kjønn (det store flertallet)
- Homofil/lesbisk: Tiltrukket av samme kjønn
- Bifil: Tiltrukket av begge kjønn

**Viktig å merke seg:**
Det finnes ulike syn på hvordan disse begrepene skal forstås og brukes. Noen vektlegger biologiske definisjoner, andre vektlegger personlig opplevelse.`,
    },
    {
      id: 'samfunnskunnskap-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som menes med biologisk kjønn og seksuell orientering.',
        solution: 'Biologisk kjønn refererer til de fysiske egenskapene som definerer kroppen som mann eller kvinne - kromosomer, hormoner og reproduktive organer. Seksuell orientering handler om hvem man føler romantisk og seksuell tiltrekning til.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-def-2',
      type: 'definition',
      title: 'Ulike perspektiver på kjønn',
      content: `**Biologisk/tradisjonelt perspektiv:**
- Kjønn er primært biologisk bestemt
- Mann og kvinne er de to naturlige kategoriene
- Biologiske forskjeller har betydning for roller og atferd
- Tradisjonelle kjønnsroller har en funksjon i samfunnet

**Sosialkonstruktivistisk perspektiv:**
- Kjønnsroller er hovedsakelig sosialt og kulturelt skapt
- Forventninger til kjønn varierer mellom kulturer og epoker
- Tradisjonelle kjønnsroller kan begrense individets frihet
- Kjønnsidentitet kan være mer flytende enn biologien tilsier

**Religiøse perspektiver:**
- Mange religioner har definerte syn på kjønn og seksualitet
- Tradisjonelle ekteskaps- og familieverdier vektlegges ofte
- Mennesker av tro kan ha ulike syn på hvordan disse skal tolkes i dag

**Viktig poeng:**
Folk med ulike syn kan likevel behandle hverandre med respekt og verdighet. Uenighet i sak betyr ikke nødvendigvis diskriminering.`,
    },
    {
      id: 'samfunnskunnskap-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv to ulike perspektiver på kjønnsroller og diskuter styrker og svakheter ved hvert syn.',
        solution: 'Biologisk perspektiv vektlegger at kjønnsforskjeller har biologiske årsaker og at tradisjonelle roller har en naturlig basis. Styrke: Tar hensyn til biologiske realiteter. Svakhet: Kan begrense individuell frihet. Sosialkonstruktivistisk perspektiv vektlegger at roller er kulturelt skapt. Styrke: Åpner for endring og individuell frihet. Svakhet: Kan underkjenne biologiske faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Debatt om kjønnsroller',
      problem: `I en klassedebatt diskuterer elevene om det bør være like mange menn og kvinner i alle yrker. Noen mener ja, andre mener nei. Hvilke argumenter kan brukes på begge sider?`,
      solution: `**Argumenter for aktive tiltak for kjønnsbalanse:**
- Historiske barrierer har hindret like muligheter
- Mangfold kan gi bedre beslutninger og perspektiver
- Rollemodeller kan inspirere flere til å velge utradisjonelt
- Like muligheter er et spørsmål om rettferdighet

**Argumenter mot kvotering/aktive tiltak:**
- Frie valg kan føre til ulik kjønnsfordeling uten at det er et problem
- Biologiske forskjeller kan påvirke preferanser
- Tvungen balanse kan gå på bekostning av kvalifikasjoner
- Individets frie valg bør respekteres

**Viktige nyanser:**
- Like muligheter er noe annet enn like utfall
- Man kan støtte likestilling og samtidig være skeptisk til kvotering
- Ulike yrker har ulik kjønnsbalanse av ulike grunner
- Dette er et spørsmål der rimelige mennesker er uenige`,
    },
    {
      id: 'samfunnskunnskap-1-6-def-3',
      type: 'definition',
      title: 'Homofili - fakta og ulike syn',
      content: `**Fakta om homofili:**
- Homofili finnes i alle samfunn og har eksistert gjennom historien
- De fleste forskere mener seksuell orientering ikke er et valg
- Et mindretall av befolkningen (anslagsvis 2-5%) er homofile eller bifile

**Juridisk status i Norge:**
- Homofili var straffbart i Norge til 1972
- Partnerskapsloven kom i 1993
- Felles ekteskapslov ble innført i 2009
- Diskriminering på grunn av seksuell orientering er forbudt

**Ulike syn i samfunnet:**
- **Liberalt syn:** Homofili er en naturlig variasjon som bør ha fulle rettigheter på linje med heterofili
- **Tradisjonelt/religiøst syn:** Noen religioner og tradisjoner ser homofilt samliv som moralsk problematisk, samtidig som de mener homofile skal behandles med respekt
- **Praktisk kompromiss:** Mange mener at uavhengig av personlig syn, skal alle behandles likt for loven

**Viktig distinksjon:**
Det er forskjell på å ha et syn på hva som er moralsk riktig, og å diskriminere mennesker. Man kan respektere mennesker selv om man er uenig med dem.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan har lovverket knyttet til homofili endret seg i Norge de siste 50 årene? Beskriv de viktigste milepælene.',
        hints: ['Se på straffelov, partnerskapslov og ekteskapslov'],
        solution: 'Viktige endringer: Homofili var straffbart frem til 1972. Partnerskapsloven kom i 1993 og ga homofile par mange av de samme rettighetene som ektepar. I 2009 ble ekteskapsloven endret til å også omfatte par av samme kjønn. Diskrimineringsloven beskytter mot forskjellsbehandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvordan kan samfunnet håndtere at folk har ulike syn på spørsmål knyttet til kjønn og seksualitet, samtidig som alle behandles med respekt?',
        hints: ['Tenk på ytringsfrihet, antidiskriminering, toleranse og pluralisme'],
        solution: 'Ulike tilnærminger: Skille mellom personlige syn og offentlig diskriminering. Ytringsfriheten beskytter retten til å uttrykke ulike syn. Antidiskrimineringslover sikrer lik behandling i arbeidslivet og offentlige tjenester. Toleranse betyr å tåle at andre mener noe annet enn deg selv. Et pluralistisk samfunn har rom for mennesker med ulike verdier og livssyn, så lenge alle følger loven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_7: TextbookChapter = {
  id: 'samfunnskunnskap-1-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.7',
  title: 'Digitale spor og personvern',
  description: 'Forstå hvordan digitale spor oppstår, hvem som bruker dem, og hvordan du kan beskytte personvernet ditt.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte utfordringer knyttet til personvern i en digital verden',
    'reflektere over egne digitale spor og hvordan de kan beskyttes',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-7-intro',
      type: 'text',
      content: `## Digitale spor

Hver gang du bruker internett, legger du igjen digitale spor. Søkehistorikk, likes, klikk, lokasjonsdata og mye mer lagres og analyseres av selskaper og algoritmer.

**Hva er digitale spor?**
- Data du aktivt deler (innlegg, bilder, kommentarer)
- Data som samles automatisk (søkehistorikk, lokasjon, klikkemønstre)
- Metadata (når, hvor, hvor lenge du var online)

**Hvem samler data?**
- Sosiale medier (Facebook, Instagram, TikTok, Snapchat)
- Søkemotorer (Google)
- Nettbutikker og apper
- Annonsenettverk
- Myndigheter

Dataene brukes til å målrette reklame, forme innholdet du ser, og kan i verste fall misbrukes.`,
    },
    {
      id: 'samfunnskunnskap-1-7-def-1',
      type: 'definition',
      title: 'Personvern og databeskyttelse',
      content: `**Personvern:**
Retten til å bestemme over opplysninger om deg selv og å ha et privatliv.

**Personopplysninger:**
Informasjon som kan knyttes til en enkeltperson - navn, adresse, bilder, helseopplysninger, politiske meninger.

**GDPR (Personvernforordningen):**
EU/EØS-regelverk som gir deg rettigheter:
- Rett til innsyn i data om deg
- Rett til å få data slettet
- Rett til å trekke samtykke
- Selskaper må ha lovlig grunn til å behandle data

**Informasjonskapsler (cookies):**
Små datafiler som lagres i nettleseren din for å huske preferanser og spore aktivitet.

**Datatilsynet:**
Norsk myndighet som fører tilsyn med personvern.`,
    },
    {
      id: 'samfunnskunnskap-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva digitale spor er og gi tre eksempler.',
        solution: 'Digitale spor er data som etterlates når vi bruker internett. Eksempler: Søkehistorikk, likes og kommentarer på sosiale medier, lokasjonsdata fra telefonen, kjøpshistorikk i nettbutikker, klikkemønstre på nettsider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-def-2',
      type: 'definition',
      title: 'Risiko og beskyttelse',
      content: `**Risikoer:**
- Identitetstyveri
- Målrettet manipulasjon
- Datalekkasjer
- Overvåkning
- Informasjon kan brukes mot deg i fremtiden
- Ekkokammer og filterbobler

**Hvordan beskytte seg:**
- Sterke, unike passord og tofaktorautentisering
- Vær kritisk til hva du deler
- Sjekk personverninnstillinger
- Bruk VPN på offentlig wifi
- Les personvernerklæringer
- Slett gamle kontoer du ikke bruker
- Tenk før du klikker "godta alle cookies"

**Husk:**
Det du deler på nett kan være der for alltid, selv om du sletter det.`,
    },
    {
      id: 'samfunnskunnskap-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke rettigheter har du i forhold til personopplysninger under GDPR?',
        solution: 'GDPR-rettigheter: Rett til innsyn (se hva selskaper vet om deg), rett til sletting ("retten til å bli glemt"), rett til dataportabilitet (få ut dataene dine), rett til å protestere mot behandling, rett til å trekke samtykke tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Sporingsøkonomi',
      problem: `Maria søker på Google etter joggesko. Kort tid etter ser hun reklame for joggesko overalt - på Facebook, Instagram og andre nettsider. Hvordan skjer dette?`,
      solution: `**Hvordan sporing fungerer:**

**1. Datainnsamling:**
- Google lagrer Marias søk
- Informasjonskapsler sporer henne på tvers av nettsider
- Annonsenettverk deler data

**2. Profilering:**
- Algoritmene bygger en profil av Maria
- De vet at hun er interessert i joggesko
- De kan også gjette på alder, kjønn, inntekt basert på annen aktivitet

**3. Målrettet reklame:**
- Annonsører betaler for å nå "personer som søker etter joggesko"
- Maria ser reklamer fordi hun matcher målgruppen
- Reklamene følger henne på tvers av plattformer

**Hva Maria kan gjøre:**
- Slette informasjonskapsler regelmessig
- Bruke annonseblokker
- Endre personverninnstillinger
- Bruke privat nettlesermodus
- Velge "avvis alle" på cookie-bannere

**Viktig innsikt:**
"Hvis tjenesten er gratis, er du produktet." Datene dine har verdi.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft: Bør staten ha tilgang til folks digitale data for å bekjempe kriminalitet?',
        hints: ['Tenk på sikkerhet vs. personvern, tillit, misbrukspotensial'],
        solution: 'For: Kan avsløre terrorister og kriminelle, beskytte samfunnet. Mot: Krenker personvernet, risiko for maktmisbruk, kan ramme uskyldige, skaper overvåkningssamfunn. Viktig med balanse, rettslig kontroll og demokratisk tilsyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjør en personvernsjekk: Hvilke tiltak kan du gjøre for å beskytte dine digitale spor bedre?',
        solution: 'Tiltak: Gjennomgå personverninnstillinger på sosiale medier, bruke sterke passord og tofaktor, slette gamle kontoer, være kritisk til apper som ber om tilgang, lese personvernerklæringer, bruke annonseblokker, unngå å dele unødvendig personlig informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_1_8: TextbookChapter = {
  id: 'samfunnskunnskap-1-8',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1.8',
  title: 'Kritisk mediebruk',
  description: 'Utvikle kritisk sans for digitale medier, gjenkjenne desinformasjon og ta bevisste medievalg.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hvordan algoritmer påvirker medieinnholdet vi ser',
    'utvikle evne til kildekritikk og faktasjekk',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-8-intro',
      type: 'text',
      content: `## Hvorfor er kritisk mediebruk viktig?

Vi bombarderes daglig med informasjon fra ulike kilder. Noe er sant, noe er vinklet, og noe er direkte feil. Evnen til å skille mellom disse er avgjørende i et demokratisk samfunn.

**Utfordringer i dagens medielandskap:**
- Enorme mengder informasjon
- Vanskelig å skille fakta fra meninger
- Desinformasjon og falske nyheter spres raskt
- Algoritmer bestemmer hva vi ser
- Ekkokammer forsterker egne meninger
- Alle kan publisere uten kvalitetskontroll

Kritisk mediebruk handler om å være bevisst, stille spørsmål og verifisere informasjon.`,
    },
    {
      id: 'samfunnskunnskap-1-8-def-1',
      type: 'definition',
      title: 'Typer feilinformasjon',
      content: `**Feilinformasjon (misinformation):**
Usann informasjon som spres uten intensjon om å villede - ofte fordi avsenderen selv tror det er sant.

**Desinformasjon (disinformation):**
Bevisst falsk informasjon som spres for å villede, manipulere eller skade.

**Propaganda:**
Informasjon brukt for å fremme en politisk sak, ofte ensidig eller manipulerende.

**Clickbait:**
Overskrifter designet for å få deg til å klikke, ofte overdrevne eller villedende.

**Deepfakes:**
Manipulerte videoer eller bilder laget med kunstig intelligens.

**Satire og parodi:**
Overdrivelser ment som humor, men kan misforstås som ekte nyheter.`,
    },
    {
      id: 'samfunnskunnskap-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom feilinformasjon og desinformasjon.',
        solution: 'Feilinformasjon er usann informasjon som spres uten intensjon om å villede - avsenderen tror selv det er sant. Desinformasjon er bevisst falsk informasjon spredt for å villede eller manipulere. Begge kan skade, men desinformasjon har ond hensikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-def-2',
      type: 'definition',
      title: 'Kildekritikk - TONE-metoden',
      content: `**T - Troverdighet:**
- Hvem står bak? Er kilden kjent og pålitelig?
- Er det en etablert nyhetskilde eller ukjent nettside?
- Har forfatteren relevant kompetanse?

**O - Objektivitet:**
- Er informasjonen balansert eller ensidig?
- Skilles det mellom fakta og meninger?
- Er det skjult reklame eller interessekonflikter?

**N - Nøyaktighet:**
- Er påstandene dokumentert med kilder?
- Kan informasjonen bekreftes av andre kilder?
- Stemmer tallene og faktaene?

**E - Egnethet:**
- Er kilden relevant for det du undersøker?
- Er informasjonen oppdatert?
- Passer kilden til formålet?`,
    },
    {
      id: 'samfunnskunnskap-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk TONE-metoden til å vurdere en nyhetskilde du bruker ofte.',
        hints: ['Velg en spesifikk nettavis, nyhetskanal eller sosial medie-konto'],
        solution: 'Svaret bør systematisk vurdere: Troverdighet (hvem står bak, hvilken kompetanse), Objektivitet (balanse, skille fakta/meninger), Nøyaktighet (kilder, dokumentasjon), Egnethet (relevans, oppdatering).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Faktasjekk',
      problem: `Andreas ser en artikkel på sosiale medier med overskriften "SJOKKERENDE: Ny studie viser at [kontroversielt påstand]". Artikkelen er fra en nettside han ikke har hørt om før. Hvordan bør han vurdere dette?`,
      solution: `**Sjekkliste for Andreas:**

**1. Stopp og tenk:**
- Ikke del eller reager før du har sjekket
- Sterke følelsesmessige reaksjoner er et advarselstegn

**2. Sjekk kilden:**
- Hva er denne nettsiden?
- Google nettsidens navn + "fake news" eller "faktasjekk"
- Mangler "Om oss"-side eller kontaktinfo?

**3. Les mer enn overskriften:**
- Støtter innholdet overskriften?
- "SJOKKERENDE" og store bokstaver er ofte clickbait

**4. Sjekk påstanden:**
- Søk etter studien - finnes den?
- Hva sier andre kilder?
- Bruk faktasjekkere som Faktisk.no

**5. Se etter varselstegn:**
- Anonyme forfattere
- Manglende kilder
- Dårlig språk
- Ekstreme påstander
- Ber deg dele "før det blir sensurert"

**Konklusjon:**
Sannsynligvis upålitelig - vær skeptisk og del ikke videre.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er ekkokammer og filterbobler, og hvorfor kan de være problematiske?',
        solution: 'Ekkokammer: Miljøer der du bare møter meninger du allerede er enig i. Filterbobler: Algoritmer viser deg innhold basert på tidligere preferanser. Problematisk fordi: Forsterker eksisterende syn, reduserer eksponering for andre perspektiver, kan radikalisere, svekker demokratisk debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvem har ansvar for å bekjempe falske nyheter - plattformene, myndighetene eller hver enkelt?',
        solution: 'Alle har et ansvar: Plattformene må moderere og merke, myndighetene må regulere og støtte faktasjekking, enkeltpersoner må være kritiske og ikke spre. Utfordringer: Ytringsfrihet, hvem definerer "falskt", internasjonal karakter. Trenger samarbeid og medieopplæring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Identitet og mangfold
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2_1: TextbookChapter = {
  id: 'samfunnskunnskap-2-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.1',
  title: 'Hva er identitet?',
  description: 'Forstå identitetsbegrepet, hva som former vår identitet, og samspillet mellom individ og samfunn.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og formes i samspill med andre',
    'drøfte sammenhengen mellom individ og fellesskap',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-1-intro',
      type: 'text',
      content: `## Identitet - hvem er jeg?

Identitet er et grunnleggende spørsmål som alle mennesker stiller seg: Hvem er jeg? Hva gjør meg til den jeg er? Identitet handler om hvordan vi oppfatter oss selv og hvordan andre oppfatter oss.

**Identitet formes av:**
- Arv og genetikk
- Familie og oppvekst
- Kultur og tradisjon
- Sosiale grupper vi tilhører
- Erfaringer og opplevelser
- Egne valg og handlinger

Identitet har både stabile og foranderlige elementer. Noen ting ved oss er relativt konstante gjennom livet, mens andre sider utvikles og endres.`,
    },
    {
      id: 'samfunnskunnskap-2-1-def-1',
      type: 'definition',
      title: 'Dimensjoner av identitet',
      content: `**Individuell identitet:**
Det som gjør deg unik - personlighet, verdier, evner, drømmer. "Jeg er den jeg er."

**Sosial identitet:**
Identitet knyttet til gruppetilhørighet - nasjonalitet, etnisitet, religion, yrke, kjønn. "Jeg er en del av..."

**Kulturell identitet:**
Identitet formet av kulturelle verdier, tradisjoner og praksiser du har vokst opp med.

**Situasjonell identitet:**
Hvordan identiteten vår kan variere i ulike situasjoner - du er kanskje annerledes hjemme enn på skolen.

**Digital identitet:**
Hvordan du fremstiller deg selv på nett og i sosiale medier.`,
    },
    {
      id: 'samfunnskunnskap-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom individuell og sosial identitet.',
        solution: 'Individuell identitet er de unike egenskapene som gjør deg til deg - personlighet, verdier, drømmer. Sosial identitet handler om gruppetilhørighet - nasjonalitet, religion, klasse. Begge henger sammen og påvirker hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-1-def-2',
      type: 'definition',
      title: 'Ulike syn på identitet',
      content: `**Tradisjonelt syn:**
Identitet er i stor grad gitt av familie, kultur og tradisjon. Man arver tilhørighet og verdier fra forrige generasjon. Dette gir stabilitet og kontinuitet.

**Moderne syn:**
Identitet er noe vi aktivt skaper og velger. I et individualistisk samfunn står vi friere til å definere oss selv.

**G.H. Mead - Speilingsteori:**
Vi utvikler identitet ved å speile oss i andres reaksjoner. Vi ser oss selv gjennom andres øyne.

**Erik Erikson - Identitetskriser:**
Identitet utvikles gjennom kriser i ulike livsfaser. Ungdomstiden er særlig viktig for å finne ut hvem man er.

**Viktig perspektiv:**
De fleste mennesker har elementer av begge - arvet tilhørighet og personlige valg former sammen hvem vi er.`,
    },
    {
      id: 'samfunnskunnskap-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign det tradisjonelle og det moderne synet på identitet. Hva er styrkene og svakhetene ved hvert syn?',
        solution: 'Tradisjonelt syn: Styrke - gir tilhørighet, stabilitet og mening. Svakhet - kan begrense individuell frihet. Moderne syn: Styrke - gir valgfrihet og selvbestemmelse. Svakhet - kan føre til rotløshet og usikkerhet. De fleste har elementer av begge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell bakgrunn og identitet',
      problem: `Amina er født i Norge av foreldre fra Somalia. Hvordan kan vi forstå hennes identitetssituasjon?`,
      solution: `**Aminas situasjon:**

**Fakta:**
- Norsk statsborger og oppvokst i Norge
- Somalisk kulturbakgrunn fra familien
- Har ulike roller: datter, elev, venn

**Mulige utfordringer:**
- Forventninger fra familie om å bevare tradisjoner
- Forventninger fra samfunnet om å tilpasse seg
- Kan oppleve å måtte forklare bakgrunnen sin
- Kan føle seg "mellom" to kulturer

**Mulige fordeler:**
- Kjenner flere kulturer og språk
- Kan forstå ulike perspektiver

**Ulike veier:**
- Noen velger å identifisere seg primært med én kultur
- Noen kombinerer elementer fra begge
- Noen opplever dette som berikende, andre som utfordrende

**Viktig poeng:**
Det finnes ikke ett "riktig" svar på hvordan man skal forholde seg til sammensatt bakgrunn. Ulike mennesker gjør ulike valg, og det er legitimt.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter: Kan det å ha tilhørighet til flere kulturer være både positivt og negativt? Begrunn svaret.',
        hints: ['Tenk på ulike perspektiver og situasjoner'],
        solution: 'Positivt: Tilgang til flere perspektiver, språkkompetanse, forståelse for ulike kulturer. Negativt: Kan være krevende å balansere forventninger, kan oppleve å ikke passe helt inn noe sted, kan skape identitetsforvirring. Opplevelsen varierer fra person til person.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv fem ting som er viktige for din egen identitet. Hvilke er arvet og hvilke har du valgt selv?',
        solution: 'Svaret bør være personlig og reflekterende, og vise forståelse for at identitet har både arvede elementer (familie, kultur, språk) og valgte elementer (interesser, verdier, venner). Begge deler er viktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_2_2: TextbookChapter = {
  id: 'samfunnskunnskap-2-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.2',
  title: 'Kultur og kulturmøter',
  description: 'Forstå kulturbegrepet, kulturelle forskjeller, og ulike perspektiver på kulturmøter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'reflektere over hva kultur er og hvordan den påvirker oss',
    'drøfte ulike syn på kulturmøter og kulturelt mangfold',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-2-intro',
      type: 'text',
      content: `## Hva er kultur?

Kultur er et vidt begrep som omfatter alt vi mennesker skaper, tenker og gjør i fellesskap. Det er de verdiene, normene, tradisjonene og praksisene som kjennetegner en gruppe mennesker.

**Kultur inkluderer:**
- Språk og kommunikasjon
- Religion og livssyn
- Kunst, musikk og litteratur
- Mat og klær
- Skikker og tradisjoner
- Normer og verdier
- Måter å organisere samfunnet på

Kultur er noe vi lærer gjennom sosialisering. Kulturer er i endring over tid, men endringstakten varierer, og noen kulturtrekk er mer bestandige enn andre.`,
    },
    {
      id: 'samfunnskunnskap-2-2-def-1',
      type: 'definition',
      title: 'Kulturelle perspektiver',
      content: `**Etnosentrisme:**
Å vurdere andre kulturer ut fra sin egen kultur som målestokk. Kan føre til at man ser egen kultur som overlegen. Samtidig er det naturlig å ha egen kultur som utgangspunkt.

**Kulturrelativisme:**
Å forstå andre kulturer på deres egne premisser. Viktig for forståelse, men ekstrem relativisme kan gjøre det vanskelig å kritisere skadelige praksiser.

**Universalisme:**
Synet om at noen verdier (som menneskerettigheter) gjelder universelt, uavhengig av kultur.

**Viktig balansegang:**
De fleste vil mene at man bør forstå andre kulturer, men at noen verdier (som menneskeverd og grunnleggende rettigheter) er universelle. Hvor grensen går, er gjenstand for debatt.`,
    },
    {
      id: 'samfunnskunnskap-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom etnosentrisme og kulturrelativisme. Hva er styrkene og svakhetene ved hvert perspektiv?',
        solution: 'Etnosentrisme: Vurderer andre kulturer ut fra egen kultur. Styrke: Kan forsvare egne verdier. Svakhet: Kan føre til arroganse og manglende forståelse. Kulturrelativisme: Forstår kulturer på egne premisser. Styrke: Fremmer forståelse. Svakhet: Kan gjøre det vanskelig å kritisere skadelige praksiser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-2-def-2',
      type: 'definition',
      title: 'Kulturmøter - ulike modeller',
      content: `**Assimilering:**
Minoriteter tilpasser seg majoritetskulturen. Noen mener dette er nødvendig for samhold, andre mener det er undertrykkende.

**Segregering:**
Kulturgrupper lever atskilt. Kan skje frivillig eller påtvunget. De fleste ser dette som problematisk.

**Integrering:**
Minoriteter deltar i samfunnet, men beholder deler av egen kultur. Ulike syn på hvor mye tilpasning som kreves.

**Multikulturalisme:**
Vektlegger at ulike kulturer skal eksistere side om side med like rettigheter. Kritiseres av noen for å skape parallellsamfunn.

**Debatt:**
Det er uenighet om hvilken modell som fungerer best. Noen mener sterkere krav om tilpasning er nødvendig, andre mener mer aksept for forskjellighet.`,
    },
    {
      id: 'samfunnskunnskap-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv forskjellen mellom assimilering, integrering og multikulturalisme. Hvilke argumenter finnes for og mot hver modell?',
        solution: 'Assimilering: Full tilpasning. For: Skaper enhet. Mot: Undertrykkende. Integrering: Delvis tilpasning. For: Balanse mellom enhet og mangfold. Mot: Uklart hvor mye tilpasning som kreves. Multikulturalisme: Kulturer eksisterer parallelt. For: Respekterer mangfold. Mot: Kan skape parallellsamfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Kulturmøter i skolen',
      problem: `En skole har elever fra mange ulike kulturbakgrunner. Hvordan bør skolen håndtere kulturelt mangfold?`,
      solution: `**Ulike tilnærminger:**

**Vektlegge det felles:**
- Fokusere på felles verdier og normer
- Lære om norsk kultur og tradisjon
- Skape felles identitet som skolefellesskap

**Vektlegge mangfoldet:**
- Markere ulike kulturelle høytider
- Dele kunnskap om ulike bakgrunner
- Verdsette at elever har ulik bakgrunn

**Praktiske spørsmål:**
- Matservering (hensyn til ulike kostholdskrav)
- Fritaksordninger fra undervisning
- Klesspørsmål

**Viktig balansegang:**
Skolen må balansere respekt for ulikheter med behovet for felles normer og samhold. Det finnes ulike syn på hvor denne balansen bør ligge.

**Ulike perspektiver:**
- Noen mener skolen bør være kulturnøytral
- Andre mener skolen bør aktivt feire mangfold
- De fleste søker en middelvei`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva kultur er og gi fem eksempler på elementer som inngår i kultur.',
        solution: 'Kultur er verdier, normer, tradisjoner og praksiser som kjennetegner en gruppe mennesker. Eksempler: språk, religion, mattradisjoner, klesdrakter, høytider, kunst, familiestruktur, normer for høflighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvilke fordeler og ulemper kan kulturelt mangfold ha for et samfunn?',
        hints: ['Tenk på ulike perspektiver og presenter begge sider'],
        solution: 'Fordeler: Flere perspektiver, kulturell utveksling, innovasjon, internasjonal kompetanse. Ulemper: Kan skape kommunikasjonsproblemer, verdikonflikter, segregering, kostnader til integrering. Hvordan man vurderer dette avhenger av verdisyn og erfaringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_2_3: TextbookChapter = {
  id: 'samfunnskunnskap-2-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.3',
  title: 'Etnisitet og nasjonalitet',
  description: 'Forstå begrepene etnisitet og nasjonalitet, og ulike perspektiver på nasjonal tilhørighet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hva som menes med etnisitet og nasjonalitet',
    'reflektere over ulike syn på nasjonal identitet og tilhørighet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-3-intro',
      type: 'text',
      content: `## Etnisitet og nasjonalitet

Etnisitet og nasjonalitet er to viktige begreper for å forstå hvordan mennesker identifiserer seg og skaper tilhørighet. Begrepene brukes ofte om hverandre, men har ulik betydning.

**Hvorfor er dette viktig?**
- Etnisitet og nasjonalitet påvirker hvordan vi ser oss selv
- De skaper tilhørighet og fellesskap
- De er tema for politisk debatt
- Folk har ulike syn på hva som definerer tilhørighet

Spørsmål om nasjonal identitet og hvem som "hører til" er tema for pågående samfunnsdebatt der folk har ulike synspunkter.`,
    },
    {
      id: 'samfunnskunnskap-2-3-def-1',
      type: 'definition',
      title: 'Etnisitet',
      content: `**Hva er etnisitet?**
Etnisitet handler om opplevd fellesskap basert på antatt felles opphav, kultur, språk, historie eller tradisjoner.

**Kjennetegn:**
- Felles språk eller dialekt
- Felles historie og minner
- Felles kultur og tradisjoner
- Følelse av felles opphav
- Felles religion (ofte, men ikke alltid)

**Ulike perspektiver:**
- Noen vektlegger at etnisitet har dype historiske røtter
- Andre mener etnisitet primært er sosialt konstruert
- De fleste er enige om at etnisitet ikke er biologisk bestemt

**Eksempler på etniske grupper i Norge:**
Samer, kvener, romfolk, samt grupper med bakgrunn fra andre land.`,
    },
    {
      id: 'samfunnskunnskap-2-3-def-2',
      type: 'definition',
      title: 'Nasjonalitet og nasjonalisme',
      content: `**Nasjonalitet:**
Tilhørighet til en nasjon eller stat. Kan være juridisk (statsborgerskap) eller følelsesmessig (nasjonal identitet).

**Nasjon:**
Et fellesskap av mennesker som deler kultur, historie, språk og/eller territorium.

**Stat:**
Et geografisk område med felles regjering og lover. En stat kan inneholde flere nasjoner.

**Nasjonalisme - ulike former:**
- Patriotisme: Kjærlighet til eget land
- Borgerlig nasjonalisme: Fellesskap basert på felles lover og verdier
- Etnisk nasjonalisme: Fellesskap basert på felles opphav og kultur

**Debatt:**
Nasjonalisme kan skape samhold og fellesskap, men har historisk også blitt brukt til ekskludering. Hvordan man vurderer nasjonalisme avhenger av kontekst og verdisyn.`,
    },
    {
      id: 'samfunnskunnskap-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Hva vil det si å være norsk?',
      problem: `Det er uenighet om hva som gjør noen "norsk". Hvilke ulike syn finnes på dette spørsmålet?`,
      solution: `**Ulike perspektiver:**

**Juridisk definisjon:**
- Norsk statsborgerskap gir formell tilhørighet
- Alle statsborgere har like rettigheter

**Kulturell definisjon:**
- Språk, tradisjoner, verdier og levemåte
- Deltakelse i norsk samfunnsliv

**Historisk/etnisk definisjon:**
- Slektskap og opphav
- Røtter i landet over generasjoner

**Verdimessig definisjon:**
- Tilslutning til demokrati, likhet for loven, ytringsfrihet
- Respekt for norske lover og institusjoner

**Debatten:**
- Noen mener norskhet primært handler om verdier og deltakelse
- Andre mener historisk og kulturell tilhørighet er viktig
- Dette er en pågående politisk debatt der folk har ulike syn
- De fleste er enige om at alle statsborgere skal behandles likt

**Viktig poeng:**
Det finnes ikke ett "riktig" svar på dette spørsmålet. Det er legitimt å ha ulike syn.`,
    },
    {
      id: 'samfunnskunnskap-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom etnisitet og nasjonalitet.',
        solution: 'Etnisitet handler om opplevd fellesskap basert på kultur, språk, historie og tradisjoner. Nasjonalitet handler om tilhørighet til en stat, enten juridisk (statsborgerskap) eller følelsesmessig. Man kan ha samme nasjonalitet men ulik etnisitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en stat og en nasjon?',
        solution: 'Stat: Et geografisk område med felles regjering og lover - en politisk enhet. Nasjon: Et fellesskap av mennesker som deler kultur, historie eller språk. En stat kan inneholde flere nasjoner (f.eks. Spania med baskere, katalanere).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft ulike syn på hva som gjør noen "norsk". Presenter minst to ulike perspektiver.',
        hints: ['Tenk på statsborgerskap, kultur, verdier, historie'],
        solution: 'Ulike perspektiver: 1) Juridisk - statsborgerskap gir formell tilhørighet. 2) Kulturelt - språk, tradisjoner, deltakelse i samfunnslivet. 3) Historisk - opphav og røtter i landet. 4) Verdimessig - tilslutning til demokrati og rettsstaten. Folk har ulike syn på hvilke kriterier som er viktigst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv ulike former for nasjonalisme og diskuter styrker og svakheter ved hver.',
        solution: 'Patriotisme: Kjærlighet til eget land. Styrke: Skaper samhold. Svakhet: Kan bli blind for feil. Borgerlig nasjonalisme: Basert på felles lover/verdier. Styrke: Inkluderende. Svakhet: Kan mangle kulturell forankring. Etnisk nasjonalisme: Basert på opphav. Styrke: Sterk identitet. Svakhet: Kan ekskludere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_2_4: TextbookChapter = {
  id: 'samfunnskunnskap-2-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.4',
  title: 'Diskriminering og likestilling',
  description: 'Forstå hva diskriminering er, norsk lovverk, og ulike perspektiver på likestillingspolitikk.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hva diskriminering er og hvordan den kan bekjempes',
    'reflektere over ulike perspektiver på likestillingspolitikk',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-4-intro',
      type: 'text',
      content: `## Diskriminering og likestilling

Diskriminering betyr å behandle noen dårligere enn andre på grunnlag av kjennetegn som etnisitet, kjønn, religion eller funksjonsevne. Norsk lov forbyr slik forskjellsbehandling.

**Grunnleggende prinsipper:**
- Alle mennesker har lik verdi
- Like tilfeller skal behandles likt
- Usaklig forskjellsbehandling er forbudt
- Staten skal sikre like muligheter

Det er bred politisk enighet om at åpen diskriminering er galt. Det er mer debatt om hvor omfattende tiltak som trengs og hvordan problemer best løses.`,
    },
    {
      id: 'samfunnskunnskap-2-4-def-1',
      type: 'definition',
      title: 'Diskriminering - definisjoner',
      content: `**Direkte diskriminering:**
Å behandle noen dårligere på grunn av f.eks. etnisitet, kjønn eller religion. Eksempel: Å nekte noen jobb fordi de har utenlandsk bakgrunn.

**Indirekte diskriminering:**
Tilsynelatende nøytrale regler som slår ulikt ut for ulike grupper. Eksempel: Krav om norske referanser som nykommere ikke kan oppfylle.

**Trakassering:**
Handlinger eller ytringer som krenker noens verdighet. Dette er forbudt ved lov.

**Positiv særbehandling (kvotering):**
Å gi fordeler til underrepresenterte grupper for å oppnå likestilling. Det er ulike syn på om dette er et godt virkemiddel.

**Viktig distinksjon:**
Saklig forskjellsbehandling kan være lovlig (f.eks. språkkrav til stillinger). Usaklig forskjellsbehandling er forbudt.`,
    },
    {
      id: 'samfunnskunnskap-2-4-def-2',
      type: 'definition',
      title: 'Lovverk og institusjoner',
      content: `**Likestillings- og diskrimineringsloven:**
Forbyr diskriminering på grunn av kjønn, etnisitet, religion, funksjonsevne, seksuell orientering og alder.

**Straffelovens §185 (hatytringer):**
Forbyr offentlige uttalelser som truer, forhåner eller fremmer hat mot grupper. Det er debatt om hvor grensen skal gå mellom straffbare ytringer og ytringsfrihet.

**Likestillings- og diskrimineringsombudet (LDO):**
Gir veiledning om diskrimineringssaker.

**Diskrimineringsnemnda:**
Behandler klager på diskriminering og kan gi oppreisning.

**Viktig:**
Disse lovene og institusjonene eksisterer for å beskytte individer mot usaklig forskjellsbehandling.`,
    },
    {
      id: 'samfunnskunnskap-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Ulike syn på likestillingspolitikk',
      problem: `Forskning viser at jobbsøkere med utenlandskklingende navn i gjennomsnitt får færre innkallinger til intervju. Hvilke ulike tilnærminger finnes til dette problemet?`,
      solution: `**Fakta:**
Studier har vist at søkere med utenlandskklingende navn har lavere sannsynlighet for å bli kalt inn til intervju, selv med like kvalifikasjoner.

**Ulike forklaringer:**
- Bevisst diskriminering fra noen arbeidsgivere
- Ubevisste fordommer
- Usikkerhet om utenlandske kvalifikasjoner
- Språkbekymringer (uavhengig av om de er berettigede)

**Ulike tilnærminger til løsning:**

**Liberalt perspektiv:**
- Fokus på å håndheve eksisterende lover
- La markedet straffe diskriminerende arbeidsgivere
- Unngå omfattende statlig regulering

**Aktivt likestillingsperspektiv:**
- Anonyme jobbsøknader
- Mangfoldstrening i bedrifter
- Aktivt rekrutteringsarbeid
- Kvotering i noen tilfeller

**Viktig poeng:**
Det er enighet om at usaklig diskriminering er galt. Det er uenighet om hvilke tiltak som er mest effektive og ønskelige.`,
    },
    {
      id: 'samfunnskunnskap-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom direkte og indirekte diskriminering. Gi eksempler på hver.',
        solution: 'Direkte diskriminering: Å behandle noen dårligere pga. bakgrunn, f.eks. nekte jobb pga. etnisitet. Indirekte diskriminering: Nøytrale regler som slår ulikt ut, f.eks. krav som visse grupper vanskeligere kan oppfylle. Begge kan være ulovlige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom saklig og usaklig forskjellsbehandling? Gi eksempler.',
        solution: 'Saklig forskjellsbehandling: Har god grunn og er lovlig, f.eks. språkkrav til stillinger der språk er nødvendig. Usaklig forskjellsbehandling: Har ingen god grunn, f.eks. å nekte jobb pga. hudfarge. Bare usaklig forskjellsbehandling er diskriminering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke lover beskytter mot diskriminering i Norge?',
        solution: 'Likestillings- og diskrimineringsloven forbyr diskriminering på grunn av kjønn, etnisitet, religion, funksjonsevne, seksuell orientering og alder. Straffelovens §185 forbyr hatytringer. Diskrimineringsnemnda behandler klager.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Er kvotering et godt virkemiddel for å oppnå likestilling? Presenter argumenter for og mot.',
        hints: ['Tenk på ulike verdier som likhet, effektivitet, rettferdighet'],
        solution: 'For kvotering: Kan utjevne historiske skjevheter, gir rollemodeller, sikrer mangfold. Mot kvotering: Kan føre til at kvalifikasjoner oversees, kan oppleves som urettferdig av de som forbigås, kan stigmatisere de som kvoteres inn. Dette er en pågående politisk debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_2_5: TextbookChapter = {
  id: 'samfunnskunnskap-2-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.5',
  title: 'Urfolk og nasjonale minoriteter',
  description: 'Lære om samene som urfolk og de nasjonale minoritetene i Norge, deres historie og rettigheter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte samenes status som urfolk og deres rettigheter',
    'reflektere over de nasjonale minoritetenes historie og situasjon i Norge',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-5-intro',
      type: 'text',
      content: `## Urfolk og nasjonale minoriteter i Norge

Norge er et mangfoldig land med urfolk og nasjonale minoriteter som har bodd her i hundrevis av år. Å forstå deres historie, kultur og rettigheter er viktig for å forstå Norge som samfunn.

**Hvem regnes som urfolk og nasjonale minoriteter?**
- **Urfolk:** Samene
- **Nasjonale minoriteter:** Kvener/norskfinner, skogfinner, jøder, romfolk og romanifolk/tatere

Disse gruppene har særlige rettigheter i norsk lov og gjennom internasjonale avtaler. Norge har også forpliktet seg til å beskytte og fremme deres kultur og språk.`,
    },
    {
      id: 'samfunnskunnskap-2-5-def-1',
      type: 'definition',
      title: 'Samene - Norges urfolk',
      content: `**Hvem er samene?**
Samene er Norges urfolk og har bodd i nordområdene i tusenvis av år, før dagens statsgrenser ble trukket. Det samiske området (Sápmi) strekker seg over Norge, Sverige, Finland og Russland.

**Samiske språk:**
- Nordsamisk (mest utbredt)
- Lulesamisk
- Sørsamisk
- I alt ti samiske språk

**Tradisjonelle næringer:**
Reindrift, fiske, duodji (håndverk), jakt og sanking.

**Sametinget:**
Folkevalgt organ opprettet i 1989. Representerer det samiske folket og gir uttalelser til myndighetene i saker som berører samer.

**Fornorskingspolitikken:**
Fra 1850-tallet til 1980-tallet førte Norge en politikk for å assimilere samene. Samiske språk ble forbudt i skolen, og kulturen ble undertrykt. Sannhets- og forsoningskommisjonen har dokumentert konsekvensene.`,
    },
    {
      id: 'samfunnskunnskap-2-5-def-2',
      type: 'definition',
      title: 'Nasjonale minoriteter',
      content: `**Kvener/norskfinner:**
Etterkommere av finske innvandrere til Nord-Norge fra 1500-tallet. Snakker kvensk. Ble utsatt for fornorsking.

**Skogfinner:**
Etterkommere av finner som bosatte seg i skogområdene i Hedmark og Akershus på 1600-tallet.

**Jøder:**
Har bodd i Norge siden 1800-tallet. Jødeparagrafen (1814-1851) nektet jøder adgang til riket. Under 2. verdenskrig ble 773 norske jøder deportert til utryddelsesleire.

**Romfolk (sigøynere):**
Ankom Norge på 1800-tallet. Har opplevd diskriminering og utestenging, inkludert nektet innreise under 2. verdenskrig.

**Romanifolk/tatere:**
Har bodd i Norden i 500 år. Ble utsatt for grove overgrep gjennom "taterpolitikken", inkludert tvangssterilisering og tvangsfjernelse av barn.

**Felles:** Alle gruppene har opplevd diskriminering og assimileringspolitikk fra norske myndigheter.`,
    },
    {
      id: 'samfunnskunnskap-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Fornorskingspolitikken',
      problem: `Alta-saken i 1979-1981 førte til et vendepunkt i samisk politikk. Hva handlet denne saken om, og hvilke konsekvenser fikk den?`,
      solution: `**Alta-saken:**

**Bakgrunn:**
- Norske myndigheter ville bygge ut Alta-Kautokeino-vassdraget til vannkraft
- Utbyggingen ville ramme samiske reindriftsområder og fiskerettigheter
- Samer og miljøvernere protesterte

**Motstand:**
- Demonstrasjoner og sivil ulydighet
- Samisk aksjon med lavvocamp foran Stortinget
- Sultestreik
- Politiaksjon mot demonstranter

**Utfallet:**
- Kraftverket ble bygget (men mindre enn planlagt)
- MEN: Saken skapte oppmerksomhet om samiske rettigheter

**Konsekvenser:**
- Samerettsutvalget ble opprettet
- Sametinget ble etablert i 1989
- Sameloven ble vedtatt
- Samisk ble offisielt språk
- Endring i synet på samiske rettigheter
- Starten på forsoning etter fornorskingspolitikken

**Viktig:**
Alta-saken viste at urfolks rettigheter må tas på alvor.`,
    },
    {
      id: 'samfunnskunnskap-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem er samene, og hvorfor regnes de som urfolk?',
        solution: 'Samene er Norges urfolk som har bodd i nordområdene (Sápmi) i tusenvis av år, før statsgrensene ble trukket. De regnes som urfolk fordi de har historisk tilknytning til området før dagens statsgrenser og har opprettholdt egen kultur, språk og tradisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de fem nasjonale minoritetene i Norge og gi en kort beskrivelse av hver.',
        solution: 'Kvener/norskfinner: Finskættede i Nord-Norge. Skogfinner: Finner i Hedmark/Akershus. Jøder: Bodd i Norge siden 1800-tallet, rammet av Holocaust. Romfolk: Ankom 1800-tallet, opplevd diskriminering. Romanifolk/tatere: 500 år i Norden, utsatt for grove overgrep.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var fornorskingspolitikken, og hvilke konsekvenser hadde den?',
        hints: ['Tenk på språk, kultur, identitet og mellommenneskelige forhold'],
        solution: 'Fornorskingspolitikken (ca. 1850-1980): Norsk assimileringspolitikk overfor samer og kvener. Samiske språk ble forbudt i skolen, kulturen undertrykt. Konsekvenser: Språktap, kulturelt tap, skam, traumer, tap av identitet. Sannhets- og forsoningskommisjonen dokumenterte dette.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvorfor er det viktig å lære om urfolk og nasjonale minoriteters historie?',
        solution: 'Viktig fordi: Forstå Norges mangfold, lære av fortidens feil, motvirke diskriminering, respektere kulturell arv, støtte forsoningsprosesser, forstå minoriteters situasjon i dag, ta vare på språk og kultur for fremtiden, oppfylle Norges forpliktelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_2_6: TextbookChapter = {
  id: 'samfunnskunnskap-2-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.6',
  title: 'Religion og livssyn',
  description: 'Forstå religionens rolle i samfunnet, religionsmangfold i Norge, og forholdet mellom religion og stat.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte religionens plass i samfunnet',
    'reflektere over religionsfrihet og livssynsmangfold',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-6-intro',
      type: 'text',
      content: `## Religion og livssyn i det norske samfunnet

Religion og livssyn handler om de store spørsmålene i livet: Hva er meningen med livet? Hvordan bør vi leve? Finnes det noe mer enn det vi kan se?

**Religion i samfunnet:**
- Gir fellesskap og tilhørighet for mange
- Former verdier og normer
- Markerer viktige livshendelser (fødsel, overgang til voksen, ekteskap, død)
- Kan inspirere til engasjement og hjelpearbeid
- Kan også skape konflikter og splittelse

Norge har gått fra å være et religiøst homogent samfunn til å bli et livssynsmangfoldig samfunn. Dette skaper både muligheter og utfordringer.`,
    },
    {
      id: 'samfunnskunnskap-2-6-def-1',
      type: 'definition',
      title: 'Religioner og livssyn i Norge',
      content: `**Kristendom:**
Største religion i Norge. Den norske kirke (luthersk) har ca. 3,6 millioner medlemmer. Andre kirkesamfunn: Katolske kirke, pinsemenigheter, baptister, metodister m.fl.

**Islam:**
Nest største religion med ca. 200 000 medlemmer. Moskeer i de fleste større byer.

**Human-Etisk Forbund:**
Største livssynsorganisasjon utenfor kirken (ca. 100 000). Humanistisk livssyn uten religion.

**Andre religioner:**
Buddhisme, hinduisme, sikhisme, jødedom, bahá'í, samisk religion m.fl.

**"Ingenting":**
En økende andel av befolkningen er ikke medlem i noen tros- eller livssynsorganisasjon.

**Tall:**
- Ca. 69% av befolkningen er medlem i Den norske kirke (men mange er ikke praktiserende)
- Ca. 12% tilhører andre tros- eller livssynssamfunn
- Ca. 19% er ikke medlem noe sted`,
    },
    {
      id: 'samfunnskunnskap-2-6-def-2',
      type: 'definition',
      title: 'Stat og religion',
      content: `**Historisk:**
Norge var en kristen stat med statskirke fra 1814 til 2012. Kristendommen hadde privilegert posisjon.

**2012-reformen:**
- Stat og kirke ble formelt skilt
- Den norske kirke er fortsatt "Norges folkekirke" i Grunnloven
- Kongen må fortsatt tilhøre luthersk tro
- Staten gir økonomisk støtte til alle tros- og livssynssamfunn

**Religionsfrihet:**
Grunnloven §16 sikrer religionsfrihet:
- Rett til å tro eller ikke tro
- Rett til å praktisere sin religion
- Rett til å skifte religion
- Rett til å uttrykke religiøse meninger

**Begrensninger:**
Religionsfrihet er ikke absolutt - den må veies mot andre rettigheter og hensyn (f.eks. barns rettigheter).

**Nøytral stat:**
Staten skal behandle alle tros- og livssynssamfunn likt, samtidig som den tar hensyn til religionens historiske plass.`,
    },
    {
      id: 'samfunnskunnskap-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Religiøse plagg i offentligheten',
      problem: `I mange land debatteres det om religiøse plagg som hijab bør tillates overalt, eller om det bør være begrensninger i visse sammenhenger. Hva er de ulike synspunktene?`,
      solution: `**Ulike perspektiver:**

**For full frihet til religiøse plagg:**
- Religionsfrihet er en grunnleggende rettighet
- Individet bør selv bestemme egen klesdrakt
- Forbud kan føre til ekskludering
- Staten bør ikke blande seg inn i personlige valg

**For visse begrensninger:**
- Offentlige institusjoner bør være nøytrale
- Bekymring for at noen presses til å bære religiøse plagg
- Ønske om felles rammer i skole/arbeidsliv
- Enkelte land (som Frankrike) har slike begrensninger

**Norsk lov:**
- I Norge er det i hovedsak tillatt å bære religiøse plagg i skole og offentlighet
- Det finnes noen unntak knyttet til sikkerhet og identifikasjon
- Debatten pågår om politi, dommere og andre offentlige posisjoner

**Ulike tilnærminger i Europa:**
- Frankrike: Forbud mot religiøse symboler i offentlig skole
- Storbritannia: Liberal tilnærming med stor frihet
- Norge: Mellomposisjon med hovedsakelig frihet

**Viktig poeng:**
Dette er en pågående debatt der ulike land har valgt ulike løsninger. Folk kan ha ulike syn basert på ulike verdier (religionsfrihet vs. nøytralitet).`,
    },
    {
      id: 'samfunnskunnskap-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke religioner og livssyn er representert i Norge i dag?',
        solution: 'Kristendom (Den norske kirke, katolikker, pinsevenn, baptister m.fl.), islam, buddhisme, hinduisme, sikhisme, jødedom, Human-Etisk Forbund (humanisme), bahai, samisk religion. En stor andel er ikke medlem noe sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjedde med forholdet mellom stat og kirke i 2012?',
        solution: '2012-reformen skilte formelt stat og kirke. Den norske kirke er fortsatt "Norges folkekirke" i Grunnloven, men er ikke lenger statskirke. Kongen må fortsatt være lutheraner. Staten støtter alle trossamfunn økonomisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva innebærer religionsfrihet ifølge Grunnloven?',
        solution: 'Religionsfrihet (Grunnloven §16): Rett til å tro eller ikke tro, praktisere sin religion, skifte religion, uttrykke religiøse meninger. Men ikke absolutt - må veies mot andre rettigheter. Staten skal behandle alle tros- og livssynssamfunn likt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvordan bør skolen håndtere religiøst mangfold?',
        hints: ['Tenk på undervisning, markeringer, klesregler, mat'],
        solution: 'Skolen bør: Respektere religionsfrihet, tillate religiøse plagg, tilrettelegge for mat (halal, vegetar), undervise om mangfold med respekt, markere ulike religiøse høytider, gi fritak fra aktiviteter som strider mot overbevisning. Balansere mellom nøytralitet og inkludering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_2_7: TextbookChapter = {
  id: 'samfunnskunnskap-2-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2.7',
  title: 'Innvandring og integrering',
  description: 'Forstå innvandringens historie til Norge, ulike perspektiver på integreringspolitikk, og pågående debatter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte innvandring og integrering i Norge',
    'reflektere over ulike perspektiver på innvandringspolitikk',
  ],
  content: [
    {
      id: 'samfunnskunnskap-2-7-intro',
      type: 'text',
      content: `## Innvandring til Norge

Innvandring har forandret det norske samfunnet betydelig de siste 50 årene. I dag har omtrent 1 million mennesker i Norge innvandrerbakgrunn.

**Fakta:**
- Ca. 1 million innvandrere og norskfødte med innvandrerforeldre
- Folk fra over 200 land
- Oslo: Ca. 34% har innvandrerbakgrunn
- Stor variasjon mellom ulike innvandrergrupper

**Hvorfor kommer folk til Norge?**
- Arbeid (særlig fra EØS-land)
- Familie (familiegjenforening)
- Flukt (asyl og beskyttelse)
- Utdanning

Innvandringspolitikk er et tema der det er betydelig politisk uenighet. Ulike partier og velgere har ulike syn på hvor mye innvandring Norge bør ha og hvordan integreringen bør foregå.`,
    },
    {
      id: 'samfunnskunnskap-2-7-def-1',
      type: 'definition',
      title: 'Innvandringens historie',
      content: `**Før 1970:**
Lite innvandring til Norge. Mest emigrasjon (utvandring) til Amerika.

**1970-tallet:**
Arbeidsinnvandring fra Pakistan, Tyrkia, Marokko. "Innvandringsstopp" i 1975.

**1980-1990-tallet:**
Flyktninger fra Vietnam, Chile, Iran, Sri Lanka, Bosnia. Familiegjenforening.

**2000-tallet:**
EU-utvidelsen: Stor arbeidsinnvandring fra Polen, Litauen og andre østeuropeiske land.

**2015:**
Flyktningkrisen: Mange asylsøkere fra Syria, Afghanistan, Eritrea. Førte til innstramminger.

**I dag:**
Fortsatt arbeidsinnvandring fra EU, familieinnvandring, noen flyktninger. Ukrainske flyktninger fra 2022.

**Viktige begreper:**
- Innvandrer: Person født i utlandet av to utenlandsfødte foreldre
- Norskfødt med innvandrerforeldre: Født i Norge av to innvandrerforeldre
- Flyktning: Person som har fått beskyttelse (asyl)`,
    },
    {
      id: 'samfunnskunnskap-2-7-def-2',
      type: 'definition',
      title: 'Ulike syn på innvandringspolitikk',
      content: `**Liberal tilnærming:**
- Innvandring beriker samfunnet
- Åpne grenser og generøs asylpolitikk
- Fokus på rettigheter og inkludering
- Mangfold som verdi

**Restriktiv tilnærming:**
- Bekymring for integreringsutfordringer
- Strengere kontroll med innvandring
- Fokus på plikter og tilpasning
- Verne om nasjonal kultur og samhold

**Mellomposisjoner:**
- De fleste partier har kompromissposisjoner
- Støtter regulert innvandring med visse begrensninger
- Vektlegger både rettigheter og plikter

**Viktige debattspørsmål:**
- Hvor mange flyktninger bør Norge ta imot?
- Hvilke krav bør stilles for statsborgerskap?
- Hvordan sikre god integrering?
- Hvor mye tilpasning kan kreves?`,
    },
    {
      id: 'samfunnskunnskap-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Debatt om integrering',
      problem: `Det er uenighet om hva god integrering innebærer og hvordan den best oppnås. Hva er de ulike synspunktene?`,
      solution: `**Ulike perspektiver på integrering:**

**Vekt på tilpasning:**
- Innvandrere bør tilpasse seg norsk kultur og verdier
- Norskkunnskaper er avgjørende
- Arbeidsdeltakelse er viktigst
- Stille klare forventninger og krav

**Vekt på gjensidighet:**
- Integrering er en toveis prosess
- Samfunnet må også tilpasse seg
- Respektere kulturelle forskjeller
- Bekjempe diskriminering

**Måling av integrering:**
- Arbeidsdeltakelse og selvforsørgelse
- Språkkunnskaper
- Utdanning
- Deltakelse i samfunnslivet
- Tilslutning til grunnleggende verdier

**Utfordringer det er enighet om:**
- Høy arbeidsledighet i noen grupper
- Språkbarrierer
- Sosial segregering i noen områder
- Behov for bedre resultater

**Uenighet om løsninger:**
- Hvor strenge krav kan stilles?
- Hvilke tiltak virker?
- Hvordan balansere frihet og krav?`,
    },
    {
      id: 'samfunnskunnskap-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hovedfasene i innvandringens historie til Norge fra 1970-tallet til i dag.',
        solution: '1970-tallet: Arbeidsinnvandring fra Pakistan, Tyrkia, Marokko, innvandringsstopp 1975. 1980-90-tallet: Flyktninger fra Vietnam, Chile, Iran, Bosnia. 2000-tallet: EU-utvidelse, arbeidsinnvandring fra Øst-Europa. 2015: Flyktningkrise (Syria, Afghanistan). 2022: Ukrainske flyktninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv to ulike perspektiver på innvandringspolitikk. Hvilke verdier ligger til grunn for hvert syn?',
        solution: 'Liberal: Vektlegger rettigheter, inkludering, mangfold som verdi, åpenhet. Verdier: humanisme, universalisme. Restriktiv: Vektlegger kontroll, tilpasning, verne nasjonal kultur. Verdier: nasjonalt samhold, bærekraft. De fleste har kompromissposisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke faktorer måles vanligvis for å vurdere grad av integrering?',
        solution: 'Vanlige indikatorer: Arbeidsdeltakelse og selvforsørgelse, språkkunnskaper, utdanningsnivå, bolig, deltakelse i samfunnslivet, sosiale nettverk, tilslutning til grunnleggende verdier, demokratisk deltakelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-2-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvilke krav er det rimelig å stille til innvandrere som ønsker å bli norske statsborgere?',
        hints: ['Tenk på språk, verdier, botid, selvforsørgelse'],
        solution: 'Ulike syn: Noen mener kravene bør være strenge (godt språk, lang botid, selvforsørgelse, verdikunnskap). Andre mener kravene bør være overkommelige for å ikke ekskludere. De fleste er enige om at norskkunnskaper og kjennskap til samfunnet er viktig. Hvor strenge kravene bør være er et politisk spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Arbeidsliv og rettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3_1: TextbookChapter = {
  id: 'samfunnskunnskap-3-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.1',
  title: 'Arbeidsliv og arbeidstakere',
  description: 'Forstå arbeidslivets betydning, arbeidstakeres rettigheter og den norske arbeidslivsmodellen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte arbeidslivets betydning for individ og samfunn',
    'reflektere over arbeidstakerrettigheter og arbeidsgivers plikter',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-1-intro',
      type: 'text',
      content: `## Arbeidets betydning

Arbeid er mer enn bare en inntektskilde. Det er en sentral del av livet som gir mening, fellesskap og identitet. De fleste voksne tilbringer store deler av livet i arbeid.

**Arbeid gir:**
- Inntekt og økonomisk trygghet
- Sosial tilhørighet og nettverk
- Mestring og selvrealisering
- Struktur i hverdagen
- Identitet og status
- Bidrag til samfunnet

**Arbeidslivet i endring:**
- Flere jobber krever høyere utdanning
- Teknologi automatiserer mange oppgaver
- Mer fleksibelt arbeid (hjemmekontor, gig-økonomi)
- Globalisering - internasjonal konkurranse
- Livslang læring blir viktigere

Å forstå arbeidslivet og dine rettigheter som arbeidstaker er viktig for å kunne navigere trygt i arbeidsmarkedet.`,
    },
    {
      id: 'samfunnskunnskap-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn minst fem grunner til at arbeid er viktig for individet.',
        solution: 'Arbeid gir: Inntekt/økonomisk trygghet, sosial tilhørighet/nettverk, mestring/selvrealisering, struktur i hverdagen, identitet/status, bidrag til samfunnet, læring og utvikling, mening og hensikt i livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-1-def-1',
      type: 'definition',
      title: 'Den norske arbeidslivsmodellen',
      content: `**Kjennetegn:**
- Høy organisasjonsgrad: Mange arbeidstakere er fagorganisert
- Trepartssamarbeid: Samarbeid mellom arbeidstakere (LO), arbeidsgivere (NHO) og staten
- Tariffavtaler: Lønns- og arbeidsvilkår fastsettes gjennom forhandlinger
- Sterkt stillingsvern: Vanskelig å si opp ansatte uten saklig grunn
- Medbestemmelse: Ansatte har innflytelse på arbeidsplassen

**Hovedorganisasjoner:**
- LO (Landsorganisasjonen): Største arbeidstakerorganisasjon
- NHO (Næringslivets Hovedorganisasjon): Største arbeidsgiverorganisasjon
- Andre: Unio, YS, Akademikerne, Virke, Spekter

**Trepartssamarbeidets fordeler:**
- Forutsigbarhet og stabilitet
- Færre konflikter
- Høy tillit mellom partene
- Effektiv omstilling
- Relativt lave lønnsforskjeller`,
    },
    {
      id: 'samfunnskunnskap-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner den norske arbeidslivsmodellen?',
        solution: 'Kjennetegn: Høy organisasjonsgrad, trepartssamarbeid (arbeidstakere, arbeidsgivere, stat), tariffavtaler, sterkt stillingsvern, medbestemmelse for ansatte, relativt lave lønnsforskjeller, høy tillit mellom partene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-1-def-2',
      type: 'definition',
      title: 'Arbeidsavtale og rettigheter',
      content: `**Arbeidsavtale (arbeidskontrakt):**
Skriftlig avtale mellom arbeidsgiver og arbeidstaker. Skal inneholde:
- Partenes navn
- Arbeidssted
- Stillingsbeskrivelse
- Startdato
- Lønn og utbetaling
- Arbeidstid
- Ferie
- Oppsigelsesfrister

**Viktige arbeidstakerrettigheter:**
- Lønn for utført arbeid
- Ferie (minst 25 virkedager)
- Sykelønn ved sykdom
- Permisjonsrettigheter (foreldre, omsorg)
- Verneombud og HMS
- Vern mot oppsigelse uten saklig grunn
- Vern mot diskriminering

**Arbeidstid:**
- Normal arbeidstid: Maks 9 timer/dag, 40 timer/uke
- Overtid: Ekstra betaling, maks grenser
- Nattarbeid: Strenge regler
- Hviletid: Minst 11 timer sammenhengende i døgnet`,
    },
    {
      id: 'samfunnskunnskap-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva skal en arbeidsavtale inneholde ifølge loven?',
        solution: 'En arbeidsavtale skal inneholde: Partenes navn, arbeidssted, stillingsbeskrivelse, startdato, lønn og utbetalingstidspunkt, arbeidstid, ferierettigheter, oppsigelsesfrister, eventuelle tariffavtaler som gjelder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Din første jobb',
      problem: `Mia (17 år) har fått sommerjobb på en kafé. Eieren sier hun bare kan jobbe uten kontrakt i begynnelsen "for å se om det fungerer". Hva bør Mia gjøre?`,
      solution: `**Mias rettigheter:**

**Krav på skriftlig arbeidsavtale:**
- Alle arbeidstakere har krav på skriftlig kontrakt
- Skal være på plass senest én måned etter oppstart
- Gjelder også for deltid, midlertidig og sommerjobb

**Hva Mia bør gjøre:**
1. Be om skriftlig arbeidsavtale
2. Sjekke at den inneholder nødvendig informasjon
3. Beholde en kopi

**Røde flagg i Mias situasjon:**
- Å jobbe uten kontrakt er lovstridig
- "Prøveperiode" uten kontrakt er ikke lov
- Kan tyde på at arbeidsgiver vil unngå forpliktelser

**Hvis arbeidsgiver nekter:**
- Kontakte Arbeidstilsynet
- Snakke med en fagforening
- Si ifra hjemme

**Viktig:**
Selv om Mia er ung og dette er en sommerjobb, har hun de samme grunnleggende rettighetene som andre arbeidstakere.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hva er argumentene for og mot fagforeninger i arbeidslivet?',
        hints: ['Tenk på både fordeler og ulemper, ulike perspektiver'],
        solution: 'Argumenter FOR: Gir forhandlingsmakt, sikrer bedre vilkår, juridisk hjelp, medbestemmelse, solidaritet. Argumenter MOT: Kan føre til rigiditet og mindre fleksibilitet, konflikter/streiker kan skade økonomien, kan beskytte ineffektive arbeidstakere, høye medlemskontingenter, kan dempe individuell lønnsvekst. Ulike politiske syn vektlegger disse ulikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_3_2: TextbookChapter = {
  id: 'samfunnskunnskap-3-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.2',
  title: 'Arbeidsmiljø og HMS',
  description: 'Forstå hva et godt arbeidsmiljø er, hva HMS betyr, og hvordan arbeidsmiljøloven beskytter arbeidstakere.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hva som kjennetegner et godt arbeidsmiljø',
    'reflektere over HMS-arbeid og arbeidsmiljølovens betydning',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-2-intro',
      type: 'text',
      content: `## Arbeidsmiljø og HMS

Et godt arbeidsmiljø er avgjørende for trivsel, helse og produktivitet. Arbeidsmiljøloven stiller krav til arbeidsgivere om å sikre et forsvarlig arbeidsmiljø, og HMS-arbeid er en viktig del av dette.

**Hva påvirker arbeidsmiljøet?**
- Fysiske forhold (lys, støy, temperatur, ergonomi)
- Psykososiale forhold (trivsel, relasjoner, stress)
- Organisatoriske forhold (ledelse, kommunikasjon, medvirkning)
- Kjemiske og biologiske forhold (eksponering for stoffer)

**Hvorfor er arbeidsmiljø viktig?**
- Forebygger sykdom og skader
- Øker trivsel og motivasjon
- Reduserer sykefravær
- Gir bedre produktivitet
- Er en grunnleggende rettighet`,
    },
    {
      id: 'samfunnskunnskap-3-2-def-1',
      type: 'definition',
      title: 'HMS - Helse, Miljø og Sikkerhet',
      content: `**Hva er HMS?**
Systematisk arbeid for å sikre et trygt og godt arbeidsmiljø. Forkortelse for Helse, Miljø og Sikkerhet.

**HMS-arbeid omfatter:**
- Kartlegging av risiko
- Forebygging av ulykker og sykdom
- Opplæring av ansatte
- Oppfølging av sykmeldte
- Fysisk tilrettelegging
- Psykososialt arbeidsmiljø

**Hvem har ansvar?**
- **Arbeidsgiver:** Hovedansvar for HMS, skal sikre forsvarlig arbeidsmiljø
- **Arbeidstaker:** Medvirke til HMS-arbeid, følge regler, varsle om farlige forhold
- **Verneombud:** Representerer ansatte i HMS-saker
- **AMU (Arbeidsmiljøutvalg):** Samarbeidsorgan i større virksomheter
- **Bedriftshelsetjeneste:** Faglig bistand i HMS-arbeid

**Arbeidstilsynet:**
Statlig etat som fører tilsyn med at arbeidsmiljøloven følges.`,
    },
    {
      id: 'samfunnskunnskap-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står HMS for, og hva omfatter HMS-arbeid?',
        solution: 'HMS står for Helse, Miljø og Sikkerhet. HMS-arbeid omfatter: Kartlegging av risiko, forebygging av ulykker og sykdom, opplæring, oppfølging av sykmeldte, fysisk tilrettelegging, og arbeid med psykososialt arbeidsmiljø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvem har ansvar for HMS på en arbeidsplass?',
        solution: 'Ansvar: Arbeidsgiver har hovedansvar for forsvarlig arbeidsmiljø. Arbeidstaker skal medvirke og varsle om farlige forhold. Verneombud representerer ansatte. AMU er samarbeidsorgan. Bedriftshelsetjenesten gir faglig bistand. Arbeidstilsynet fører eksternt tilsyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-2-def-2',
      type: 'definition',
      title: 'Arbeidsmiljøloven',
      content: `**Formål:**
Sikre et arbeidsmiljø som gir full trygghet mot fysiske og psykiske skadevirkninger.

**Viktige bestemmelser:**
- Krav om fullt forsvarlig arbeidsmiljø
- Arbeidstidsregler (maks 9 timer/dag, pauser, hviletid)
- Vern mot diskriminering
- Krav om skriftlig arbeidsavtale
- Oppsigelsesvern
- Rett til medvirkning og informasjon

**Psykososialt arbeidsmiljø:**
- Vern mot trakassering og mobbing
- Krav om meningsfullt arbeid
- Mulighet for faglig og personlig utvikling
- Selvbestemmelse i arbeidet

**Fysisk arbeidsmiljø:**
- Forsvarlig fysisk utforming av arbeidsplassen
- Vern mot støy, stråling, kjemikalier
- Ergonomiske krav
- Verneutstyr ved behov`,
    },
    {
      id: 'samfunnskunnskap-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med psykososialt arbeidsmiljø?',
        solution: 'Psykososialt arbeidsmiljø handler om de sosiale og psykologiske forholdene på jobben: Trivsel, relasjoner mellom kollegaer, ledelse, stress, mobbing, meningsfullt arbeid, mulighet for utvikling, og grad av selvbestemmelse. Arbeidsmiljøloven beskytter mot trakassering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Mobbing på arbeidsplassen',
      problem: `Kristian opplever at kollegaer snakker nedsettende om ham, utelukker ham fra sosiale aktiviteter og gir ham feil informasjon om arbeidsoppgaver. Hva kan han gjøre?`,
      solution: `**Kristians situasjon:**
Det Kristian opplever er trakassering/mobbing - dette er brudd på arbeidsmiljøloven.

**Hva Kristian kan gjøre:**

**1. Dokumentere:**
- Skrive ned hendelser med dato, tid og vitner
- Ta vare på skriftlig kommunikasjon

**2. Si ifra internt:**
- Snakke med nærmeste leder
- Kontakte verneombud
- Ta opp saken i AMU hvis det finnes
- Bruke intern varslingskanal

**3. Ekstern hjelp:**
- Kontakte Arbeidstilsynet
- Snakke med fagforeningen
- Oppsøke bedriftshelsetjenesten
- Kontakte advokat

**Arbeidsgivers ansvar:**
- Arbeidsgiver har plikt til å gripe inn mot mobbing
- Skal ha rutiner for håndtering av slike saker
- Kan holdes ansvarlig hvis ikke noe gjøres

**Viktig:**
Mobbing på arbeidsplassen er alvorlig og forbudt. Kristian har rett til å bli hørt og få hjelp.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan du gjøre hvis du opplever farlige eller ulovlige forhold på arbeidsplassen?',
        solution: 'Tiltak: Si ifra til leder, kontakte verneombud, bruke intern varslingskanal, ta opp i AMU, kontakte Arbeidstilsynet, snakke med fagforening, kontakte bedriftshelsetjenesten. Dokumentere hendelser. Arbeidsgiver har plikt til å håndtere slike saker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_3_3: TextbookChapter = {
  id: 'samfunnskunnskap-3-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.3',
  title: 'Lønn og lønnsforhandlinger',
  description: 'Forstå hvordan lønn fastsettes, lønnsoppgjøret, og hvordan tariffavtaler fungerer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hvordan lønn fastsettes i Norge',
    'reflektere over tariffavtalenes betydning for arbeidslivet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-3-intro',
      type: 'text',
      content: `## Lønn i Norge

Lønn er det viktigste grunnlaget for de fleste menneskers økonomi. Hvordan lønnen fastsettes handler om maktforhold, forhandlinger og samfunnsøkonomiske hensyn.

**Hvordan fastsettes lønn?**
- Tariffavtaler mellom fagforeninger og arbeidsgivere
- Individuelle forhandlinger
- Markedsmekanismer (tilbud og etterspørsel)
- Lovbestemmelser (minstelønn i visse bransjer)

**Faktorer som påvirker lønn:**
- Utdanning og kompetanse
- Erfaring
- Ansvar og arbeidets kompleksitet
- Bransje og geografisk område
- Organisasjonsgrad
- Bedriftens økonomi

Norge har relativt lave lønnsforskjeller sammenlignet med mange andre land. Dette er delvis et resultat av den norske arbeidslivsmodellen.`,
    },
    {
      id: 'samfunnskunnskap-3-3-def-1',
      type: 'definition',
      title: 'Tariffavtaler og lønnsoppgjør',
      content: `**Tariffavtale:**
Skriftlig avtale mellom en fagforening og en arbeidsgiver/arbeidsgiverorganisasjon om lønns- og arbeidsvilkår. Gjelder for en bestemt periode (vanligvis 2 år).

**Inneholder typisk:**
- Minstelønn for ulike stillinger
- Arbeidstid
- Overtidsbetaling
- Tillegg (kveld, natt, helg)
- Ferieordninger
- Pensjonsordninger

**Lønnsoppgjøret:**
Årlige forhandlinger om lønn mellom arbeidstaker- og arbeidsgiverorganisasjoner.

**Frontfagsmodellen:**
- Konkurranseutsatt industri (frontfaget) forhandler først
- Setter rammen for andre sektorer
- Sikrer at lønnsveksten ikke overstiger det konkurranseutsatt sektor tåler
- Bidrar til lav inflasjon og konkurransekraft

**Resultat:**
- Generelt tillegg: Alle får like mye
- Prosentvis tillegg: Alle får samme prosent
- Lavlønnstillegg: Ekstra til de med lavest lønn`,
    },
    {
      id: 'samfunnskunnskap-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en tariffavtale, og hva inneholder den typisk?',
        solution: 'Tariffavtale er en skriftlig avtale mellom fagforening og arbeidsgiver om lønns- og arbeidsvilkår. Inneholder typisk: Minstelønn, arbeidstid, overtidsbetaling, tillegg for kveld/natt/helg, ferieordninger, pensjonsordninger. Gjelder vanligvis 2 år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva frontfagsmodellen er og hvorfor den er viktig.',
        solution: 'Frontfagsmodellen: Konkurranseutsatt industri forhandler først og setter rammen for andre sektorer. Viktig fordi: Sikrer at lønnsveksten ikke overstiger det eksportindustrien tåler, bidrar til lav inflasjon, opprettholder konkurransekraft, gir forutsigbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-3-def-2',
      type: 'definition',
      title: 'Streik og lockout',
      content: `**Fredsplikt:**
Mens en tariffavtale gjelder, kan ikke arbeidstakere streike eller arbeidsgivere lockout. Konflikter må løses gjennom forhandling eller mekling.

**Streik:**
Arbeidsnedleggelse - arbeidstakere nekter å jobbe for å presse frem bedre vilkår. Lovlig virkemiddel når tariffavtalen er utløpt og mekling ikke har ført frem.

**Lockout:**
Arbeidsgiver stenger arbeidstakere ute fra arbeid. Motpart til streik.

**Meklingsinstitutt:**
Riksmekleren mekler mellom partene for å unngå konflikt.

**Tvungen lønnsnemnd:**
Staten kan gripe inn og tvinge partene til å godta en løsning - brukes sjelden og kun ved fare for liv/helse eller viktige samfunnsfunksjoner.

**Sympatistreik:**
Streik i solidaritet med andre som streiker - må varsles.

**Politisk streik:**
Kort streik for å markere et politisk standpunkt - ikke om egne lønnsvilkår.`,
    },
    {
      id: 'samfunnskunnskap-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom streik og lockout?',
        solution: 'Streik: Arbeidstakere nekter å jobbe for å presse frem bedre vilkår - arbeidstakernes virkemiddel. Lockout: Arbeidsgiver stenger arbeidstakere ute fra arbeid - arbeidsgivers virkemiddel. Begge er lovlige virkemidler når tariffavtalen er utløpt og mekling ikke har ført frem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Lønnsoppgjøret 2024',
      problem: `LO og NHO forhandler om ny tariffavtale. LO krever 5% lønnsvekst, mens NHO tilbyr 3%. Hvordan kan forhandlingene foregå?`,
      solution: `**Forhandlingsprosessen:**

**1. Forberedelse:**
- Begge parter analyserer økonomien
- LO kartlegger medlemmenes krav
- NHO vurderer bedriftenes betalingsevne
- Teknisk beregningsutvalg lager faktagrunnlag

**2. Forhandlinger:**
- Partene møtes og presenterer krav
- Utveksler argumenter
- Prøver å finne løsning

**3. Hvis uenighet:**
- Forhandlingene bryter sammen
- Riksmekleren kobles inn
- Mekling: Partene møtes hos mekleren
- Prøver å finne kompromiss

**4. Mulige utfall:**
- Enighet: Ny tariffavtale signeres
- Fortsatt uenighet: Streik kan varsles
- Streik/lockout: Arbeidskamp
- Tvungen lønnsnemnd: Staten griper inn (sjelden)

**I praksis:**
Resultatet blir ofte et kompromiss, f.eks. 4% lønnsvekst. Frontfagsmodellen sikrer at oppgjøret er økonomisk ansvarlig.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hva er fordeler og ulemper med Norges relativt små lønnsforskjeller?',
        solution: 'Årsaker til små forskjeller: Høy organisasjonsgrad, tariffavtaler, frontfagsmodellen, trepartssamarbeid. FORDELER: Sosial stabilitet, mindre fattigdom, høy tillit. ULEMPER: Kan gjøre det vanskeligere å rekruttere topptalenter (lavere topplønn), mindre insentiv til ekstra innsats for noen, komprimerte lønnsstrukturer kan føre til at høykvalifiserte drar utenlands. Det er politisk uenighet om optimal lønnsfordeling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_3_4: TextbookChapter = {
  id: 'samfunnskunnskap-3-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.4',
  title: 'Kjønn og arbeidsliv',
  description: 'Forstå kjønnsforskjeller i arbeidslivet, ulike forklaringer på dette, og debatter om tiltak.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte kjønnsforskjeller i norsk arbeidsliv',
    'reflektere over ulike forklaringer på kjønnsmønstre i arbeidsmarkedet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-4-intro',
      type: 'text',
      content: `## Kjønn og arbeidsliv

Norge har høy yrkesdeltakelse for begge kjønn og lovfestet likestilling. Likevel er det tydelige forskjeller i menns og kvinners yrkesvalg og karrieremønstre. Hva som forklarer disse forskjellene, og om det er et problem som krever tiltak, er gjenstand for politisk debatt.

**Fakta om arbeidsmarkedet:**
- Høy yrkesdeltakelse blant både kvinner og menn
- Kvinner dominerer i offentlig sektor, menn i privat
- Kvinner dominerer i helse/omsorg, menn i tekniske yrker
- Flere kvinner enn menn jobber deltid
- Flere menn enn kvinner i toppledelse

**Ulike syn på kjønnsforskjellene:**
Det er uenighet om hva som forklarer disse forskjellene, og om de er et problem som må løses. Noen mener forskjellene reflekterer ulik diskriminering, andre mener de reflekterer frie valg. De fleste mener sannheten ligger et sted i mellom.`,
    },
    {
      id: 'samfunnskunnskap-3-4-def-1',
      type: 'definition',
      title: 'Kjønnsmønstre i arbeidsmarkedet',
      content: `**Horisontal kjønnsdeling:**
Kvinner og menn jobber ofte i ulike yrker og bransjer.
- Kvinnedominerte: Helse, omsorg, undervisning, barnehage
- Mannsdominerte: Bygg, teknologi, ingeniørfag, IT

**Forklaringer på horisontal kjønnsdeling:**
- **Valgperspektivet:** Menn og kvinner har i gjennomsnitt ulike interesser og preferanser, og velger deretter. Biologiske og psykologiske forskjeller kan spille inn.
- **Strukturperspektivet:** Samfunnets forventninger og sosialisering styrer valg. Diskriminering kan forekomme.
- **Kombinasjonsperspektivet:** Både biologi, preferanser og sosiale forhold spiller inn.

**Vertikal kjønnsdeling:**
Flere menn enn kvinner i lederstillinger.
- Noen mener dette skyldes diskriminering ("glasstaket")
- Andre peker på at kvinner oftere prioriterer familietid fremfor karriere
- Atter andre mener menn og kvinner i gjennomsnitt har ulike karriereambisjoner

**Lønnsforskjeller:**
- Kvinner tjener i gjennomsnitt ca. 87% av menns lønn
- Mesteparten forklares av yrkes- og stillingsvalg
- Menn jobber mer overtid og tar færre permisjoner
- Det er debatt om den uforklarte resten skyldes diskriminering eller andre faktorer`,
    },
    {
      id: 'samfunnskunnskap-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom horisontal og vertikal kjønnsdeling i arbeidsmarkedet.',
        solution: 'Horisontal kjønnsdeling: Kvinner og menn jobber i ulike yrker/bransjer (f.eks. helse vs. bygg). Vertikal kjønnsdeling: Flere menn enn kvinner i lederstillinger. Det er uenighet om årsaken til dette - noen peker på diskriminering, andre på ulike karrierepreferanser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-4-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hvilke ulike forklaringer finnes på lønnsforskjellene mellom kvinner og menn?',
        solution: 'Forklaringer: 1) Yrkesvalg - kvinner velger oftere yrker med lavere lønn. 2) Deltidsarbeid - mer vanlig blant kvinner. 3) Karriereavbrudd pga. barn. 4) Overtid - menn jobber mer overtid. 5) Forhandlingsstil. Det er debatt om den uforklarte resten skyldes diskriminering eller andre faktorer som karriereprioriteringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-4-def-2',
      type: 'definition',
      title: 'Likestillingstiltak og debatt',
      content: `**Lovverk:**
- Likestillings- og diskrimineringsloven forbyr diskriminering basert på kjønn
- Aktivitets- og redegjørelsesplikten: Arbeidsgivere skal rapportere om likestilling

**Permisjonsordninger:**
- Foreldrepermisjon: Totalt 49 uker (eller 59 med redusert sats)
- Fedrekvote: Minst 15 uker forbeholdt far
- Mødrekvote: Minst 15 uker forbeholdt mor
- Resten kan deles fritt

**Kvotering - en debatt:**
- Styrekvotering i ASA-selskaper (minst 40% av hvert kjønn)
- Kjønnspoeng ved opptak til studier
- FOR: Bryter ned barrierer, sikrer mangfold, gir rollemodeller
- MOT: Kvalifikasjoner bør telle mest, kan oppfattes som urettferdig, skaper tvil om kvinner er der på grunn av kompetanse

**Politisk uenighet:**
- Venstresiden vektlegger strukturelle barrierer og vil ha aktive tiltak
- Høyresiden vektlegger frie valg og er skeptisk til kvotering
- Mange mener sannheten ligger et sted i mellom`,
    },
    {
      id: 'samfunnskunnskap-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-4-ex-2',
        number: '3',
        type: 'classic',
        task: 'Hva er fedrekvoten, og hva er argumentene for og mot den?',
        solution: 'Fedrekvoten er en del av foreldrepermisjonen forbeholdt far (minst 15 uker). FOR: Øker fedres deltakelse i barneomsorgen, kan fremme likestilling i arbeidslivet. MOT: Begrenser familiens frihet til å organisere seg selv, staten bør ikke bestemme hvordan familier fordeler permisjonen. Det er politisk uenighet om kvotens størrelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Jobbintervju og familieplanlegging',
      problem: `Elin (28) er på jobbintervju. Arbeidsgiveren spør om hun planlegger å få barn snart. Hva sier loven, og hva er dilemmaene?`,
      solution: `**Juridisk situasjon:**

**Spørsmålet er ulovlig:**
- Arbeidsgivere har IKKE lov til å spørre om graviditetsplaner
- Det regnes som diskriminering basert på kjønn
- Brudd på likestillings- og diskrimineringsloven

**Hva Elin kan gjøre:**
1. Nekte å svare (har full rett til det)
2. Si at spørsmålet ikke er relevant for jobben
3. Klage til Diskrimineringsnemnda hvis hun ikke får jobben

**Ulike perspektiver på problemet:**

**Arbeidstakerperspektiv:**
- Privatliv skal ikke påvirke jobbmuligheter
- Kvinner skal ikke straffes for å kunne bli gravide

**Arbeidsgiverperspektiv (selv om spørsmålet er ulovlig):**
- Små bedrifter kan slite med lang permisjon i nøkkelstillinger
- Forutsigbarhet er viktig for planlegging

**Samfunnsperspektiv:**
- Loven beskytter mot diskriminering
- Men kostnadene ved permisjoner dekkes av staten og arbeidsgiver
- Noen mener dette gjør unge kvinner mindre attraktive å ansette

**Viktig å vite:**
- Graviditet skal ikke påvirke ansettelse
- Foreldrepermisjon er en rettighet
- Loven er klar, men debatten om hvordan tilrettelegge pågår`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hva forklarer kjønnsforskjeller i arbeidslivet - er det valg eller barrierer?',
        hints: ['Tenk på ulike perspektiver og forklaringer'],
        solution: 'Valgperspektiv: Menn og kvinner har i snitt ulike interesser og prioriteringer - kvinner velger oftere omsorgsfokuserte yrker og familietid. Barriereperspektiv: Sosialisering, forventninger og diskriminering hindrer frie valg. Kombinasjonsperspektiv: Både biologi, preferanser og sosiale forhold spiller inn. Det er politisk uenighet om hvor mye som er valg vs. barrierer, og dermed om hvilke tiltak som er riktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_3_5: TextbookChapter = {
  id: 'samfunnskunnskap-3-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.5',
  title: 'Arbeidsledighet og Nav',
  description: 'Forstå arbeidsledighet, dens årsaker og konsekvenser, og hvordan Nav fungerer som sikkerhetsnett.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte årsaker til og konsekvenser av arbeidsledighet',
    'reflektere over velferdsstatens rolle i å sikre arbeidsledige',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-5-intro',
      type: 'text',
      content: `## Arbeidsledighet

Arbeidsledighet betyr at noen ønsker å jobbe, men ikke finner arbeid. Det er et samfunnsproblem som rammer både individer og økonomien, og et sentralt tema i politikken.

**Arbeidsledighet i Norge:**
- Historisk lav (ca. 3-4% i normalår)
- Varierer med konjunkturene
- Høyere blant unge og innvandrere
- Regionale forskjeller

**Hvorfor er arbeidsledighet et problem?**
- For individet: Tap av inntekt, identitet, sosial tilhørighet
- For samfunnet: Tap av arbeidskraft og produksjon
- For økonomien: Lavere skatteinntekter, økte utgifter
- For folkehelsen: Økt risiko for psykiske problemer

Nav er den viktigste institusjonen for å hjelpe arbeidsledige og sikre at de har inntekt mens de søker ny jobb.`,
    },
    {
      id: 'samfunnskunnskap-3-5-def-1',
      type: 'definition',
      title: 'Typer arbeidsledighet',
      content: `**Konjunkturledighet:**
Ledighet som skyldes nedgangstider i økonomien. Når etterspørselen faller, reduserer bedrifter arbeidsstyrken.

**Strukturell ledighet:**
Ledighet som skyldes endringer i næringsstrukturen. Jobber forsvinner i noen bransjer, mens nye oppstår i andre. Krever ofte omskolering.

**Friksjonsledighet:**
Kortvarig ledighet når folk skifter jobb eller går fra utdanning til arbeid. En viss grad er naturlig.

**Sesongledighet:**
Ledighet som varierer med årstidene, f.eks. i turisme, jordbruk eller fiskeri.

**Langtidsledighet:**
Arbeidsledighet som varer over ett år. Særlig alvorlig fordi kompetansen kan forvitre og det blir vanskeligere å komme tilbake.

**Skjult ledighet:**
Mennesker som har gitt opp å søke jobb, er på tiltak eller trygd, men som egentlig kunne ha jobbet.`,
    },
    {
      id: 'samfunnskunnskap-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom konjunkturledighet og strukturell ledighet.',
        solution: 'Konjunkturledighet skyldes nedgangstider i økonomien - når etterspørselen faller og bedrifter sier opp folk. Den er midlertidig. Strukturell ledighet skyldes varige endringer i næringsstrukturen (teknologi, globalisering) - jobber forsvinner permanent og folk må ofte omskoleres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-5-def-2',
      type: 'definition',
      title: 'Nav og dagpenger',
      content: `**Nav:**
Arbeids- og velferdsforvaltningen - forvalter arbeidsformidling, trygdeytelser og sosiale tjenester.

**Dagpenger:**
Økonomisk støtte ved arbeidsledighet. Krav:
- Ha hatt tilstrekkelig inntekt (minst 1,5 G siste år eller 3 G siste 3 år)
- Være registrert som arbeidssøker
- Aktivt søke jobb
- Være villig til å ta passende arbeid
- Ha mistet minst 50% av arbeidstiden

**Dagpengenes størrelse:**
- Ca. 62,4% av tidligere inntekt (opp til 6 G)
- Maks 104 uker (2 år)
- Graderte dagpenger hvis man jobber deltid

**Andre Nav-ytelser:**
- Arbeidsavklaringspenger (AAP)
- Uføretrygd
- Sosialhjelp (siste sikkerhetsnett)
- Tiltak for å komme i arbeid

**Navs rolle:**
- Arbeidsformidling
- Oppfølging av arbeidssøkere
- Kvalifisering og tiltak
- Utbetaling av ytelser`,
    },
    {
      id: 'samfunnskunnskap-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kravene for å få dagpenger fra Nav?',
        solution: 'Krav for dagpenger: Ha hatt tilstrekkelig inntekt (minst 1,5 G siste år eller 3 G siste 3 år), være registrert som arbeidssøker hos Nav, aktivt søke jobb, være villig til å ta passende arbeid, ha mistet minst 50% av arbeidstiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Veien tilbake til jobb',
      problem: `Jonas (45) mister jobben som regnskapsfører fordi bedriften hans automatiserer flere oppgaver. Han har jobbet der i 20 år. Hva kan han gjøre?`,
      solution: `**Jonas' situasjon:**
Jonas er rammet av strukturell ledighet - teknologi erstatter deler av hans jobb.

**Første steg:**
1. Melde seg som arbeidssøker hos Nav
2. Søke dagpenger
3. Registrere CV og søke jobber aktivt

**Navs tilbud:**
- Veiledning og oppfølging
- Jobbsøkerkurs
- Kartlegging av kompetanse
- Tiltak som kan være aktuelle:
  - Opplæring/kurs
  - Lønnstilskudd (arbeidsgiver får støtte for å ansette)
  - Arbeidspraksis
  - Omskolering

**Muligheter for Jonas:**
- Mange regnskapsoppgaver finnes fortsatt
- Kan spesialisere seg (rådgivning, komplekse oppgaver AI ikke kan gjøre)
- Kan omskolere seg til tilgrensende felt
- Erfaring er verdifull selv om teknologien endres

**Viktige poeng:**
- Strukturell ledighet krever ofte tilpasning
- Livslang læring blir viktigere
- Det finnes hjelp å få, men det krever egeninnsats
- Alder kan være en utfordring, men erfaring er også en ressurs`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke konsekvenser kan arbeidsledighet ha for individet?',
        solution: 'Konsekvenser for individet: Tap av inntekt og økonomisk usikkerhet, tap av sosial tilhørighet og nettverk, tap av identitet (jobb = viktig del av identitet), økt risiko for psykiske problemer (depresjon, angst), tap av kompetanse over tid, vanskeligere å komme tilbake ved langtidsledighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvordan kan samfunnet forebygge og bekjempe arbeidsledighet?',
        hints: ['Tenk på utdanning, økonomisk politikk, tiltak'],
        solution: 'Tiltak: God utdanning og livslang læring, aktiv arbeidsmarkedspolitikk (tiltak, omskolering), økonomisk politikk som fremmer vekst, stimulere næringslivet, god infrastruktur, mobilitetsfremmende tiltak, støtte til omstilling, bekjempe diskriminering i arbeidsmarkedet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_3_6: TextbookChapter = {
  id: 'samfunnskunnskap-3-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.6',
  title: 'Fremtidens arbeidsliv',
  description: 'Forstå hvordan teknologi, globalisering og nye arbeidsformer endrer arbeidslivet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hvordan arbeidslivet endres av teknologi og globalisering',
    'reflektere over kompetansebehov i fremtidens arbeidsliv',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-6-intro',
      type: 'text',
      content: `## Arbeidslivet i endring

Arbeidslivet er i rask endring. Teknologi, globalisering og nye arbeidsformer utfordrer tradisjonelle måter å jobbe på. For unge som skal inn i arbeidslivet, er det viktig å forstå disse endringene.

**Drivkrefter for endring:**
- Digitalisering og automatisering
- Kunstig intelligens (KI)
- Globalisering og internasjonal konkurranse
- Grønn omstilling
- Demografiske endringer (eldrebølge)
- Nye forventninger til arbeid

**Spørsmål som diskuteres:**
- Hvilke jobber forsvinner?
- Hvilke nye jobber oppstår?
- Hvilken kompetanse trengs?
- Hvordan sikre trygghet i et endrende arbeidsliv?
- Vil den norske modellen overleve?`,
    },
    {
      id: 'samfunnskunnskap-3-6-def-1',
      type: 'definition',
      title: 'Teknologi og automatisering',
      content: `**Automatisering:**
Maskiner og programvare tar over oppgaver som tidligere ble gjort av mennesker. Fra industri til kontor.

**Kunstig intelligens (KI):**
Datamaskiner som kan lære, resonnere og ta beslutninger. Kan påvirke mange kunnskapsyrker.

**Jobber som kan påvirkes:**
- Rutinepreget arbeid (både manuelt og kognitivt)
- Enkle kontoroppgaver
- Kundeservice (chatbots)
- Deler av transport (selvkjørende kjøretøy)
- Analysearbeid

**Jobber som trolig består:**
- Kreative yrker
- Kompleks problemløsning
- Menneskelig omsorg og kontakt
- Ledelse og samarbeid
- Håndverk og praktisk arbeid
- Yrker som krever tilstedeværelse

**Nye jobber:**
Teknologien skaper også nye jobber: IT-sikkerhet, dataanalyse, KI-utvikling, robotvedlikehold, grønn teknologi.`,
    },
    {
      id: 'samfunnskunnskap-3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre drivkrefter som endrer arbeidslivet og forklar kort hver av dem.',
        solution: 'Drivkrefter: 1) Digitalisering/automatisering - maskiner tar over oppgaver. 2) Kunstig intelligens - datamaskiner som kan lære og ta beslutninger. 3) Globalisering - internasjonal konkurranse om jobber. 4) Grønn omstilling - nye krav til bærekraft. 5) Demografiske endringer - eldrebølge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-6-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hvilke typer jobber tror du er mest og minst utsatt for automatisering?',
        solution: 'Mest utsatt: Rutinepreget arbeid (industriarbeid, kontorarbeid), enkle kundeserviceoppgaver, transport (delvis). Minst utsatt: Kreative yrker, omsorgyrker, håndverk, kompleks problemløsning, ledelse, yrker som krever menneskelig kontakt og tilstedeværelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-6-def-2',
      type: 'definition',
      title: 'Nye arbeidsformer',
      content: `**Gig-økonomien:**
Korttidsoppdrag og frilansarbeid via plattformer (Uber, Foodora, Fiverr). Fleksibelt, men ofte usikkert.

**Hjemmekontor og hybrid arbeid:**
Pandemien akselererte fjernarbeid. Mange jobber kan gjøres hjemmefra.

**Plattformarbeid:**
Arbeid formidlet via digitale plattformer. Utfordrer tradisjonell arbeidsgiver-arbeidstaker-forhold.

**Utfordringer med nye arbeidsformer:**
- Usikre arbeidsforhold
- Mangel på rettigheter (sykepenger, pensjon)
- Uklar arbeidsgiver
- Uforutsigbar inntekt
- Sosial isolasjon

**Regulering:**
- Diskusjon om plattformarbeidere er ansatte eller selvstendig næringsdrivende
- EU og Norge jobber med regulering
- Høyesterett: Foodora-bud er arbeidstakere

**Livslang læring:**
Må oppdatere kompetansen gjennom hele arbeidslivet. Etter- og videreutdanning blir viktigere.`,
    },
    {
      id: 'samfunnskunnskap-3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-6-ex-2',
        number: '3',
        type: 'classic',
        task: 'Hva er gig-økonomien, og hvilke utfordringer skaper den?',
        solution: 'Gig-økonomien: Korttidsoppdrag og frilansarbeid formidlet via plattformer (Uber, Foodora). Utfordringer: Usikre arbeidsforhold, manglende rettigheter (sykepenger, pensjon), uklar arbeidsgiver, uforutsigbar inntekt, manglende stillingsvern, sosial isolasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-6-example-1',
      type: 'example',
      title: 'Eksempel: KI og jobber',
      problem: `Sofia studerer jus og lurer på om kunstig intelligens vil ta over jobben hennes som advokat i fremtiden. Hva kan hun tenke om dette?`,
      solution: `**Sofias situasjon:**

**Hva KI kan gjøre i jus:**
- Søke i store dokumentmengder
- Finne relevant rettspraksis
- Skrive utkast til standarddokumenter
- Analysere kontrakter
- Forutsi utfall av saker

**Hva KI (foreløpig) ikke kan:**
- Forstå komplekse menneskelige situasjoner
- Gi råd tilpasset klientens livssituasjon
- Forhandle og bygge relasjoner
- Prosedere i rettssalen
- Ta etiske vurderinger
- Utøve skjønn i vanskelige saker

**Sannsynlig utvikling:**
- Rutineoppgaver automatiseres
- Advokater får KI som verktøy
- Fokus på det mennesker gjør best
- Færre trengs til noen oppgaver, men kvaliteten øker

**Råd til Sofia:**
- Utvikle "myke" ferdigheter (kommunikasjon, empati)
- Lære å bruke KI-verktøy
- Spesialisere seg i områder som krever menneskelig vurdering
- Være forberedt på endringer gjennom karrieren
- Se teknologi som hjelpemiddel, ikke fiende

**Viktig innsikt:**
Jobber forsvinner sjelden helt - de endres. Tilpasningsevne er nøkkelen.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvordan bør samfunnet forberede seg på endringene i arbeidslivet?',
        hints: ['Tenk på utdanning, velferdsordninger, regulering'],
        solution: 'Tiltak: Satse på livslang læring, tilpasse utdanningssystemet, regulere plattformøkonomi, sikre arbeidstakerrettigheter i nye arbeidsformer, omstillingsstøtte, grunnleggende inntektssikring, investere i grønn omstilling, styrke kompetanse i teknologi og "myke" ferdigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_3_7: TextbookChapter = {
  id: 'samfunnskunnskap-3-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3.7',
  title: 'Svart arbeid og arbeidslivskriminalitet',
  description: 'Forstå hva svart arbeid og arbeidslivskriminalitet er, konsekvensene og hvordan det bekjempes.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hva svart arbeid og arbeidslivskriminalitet er',
    'reflektere over konsekvensene for individ og samfunn',
  ],
  content: [
    {
      id: 'samfunnskunnskap-3-7-intro',
      type: 'text',
      content: `## Svart arbeid og arbeidslivskriminalitet

Svart arbeid og arbeidslivskriminalitet undergraver det seriøse arbeidslivet og fellesskapet. Det er et alvorlig samfunnsproblem som rammer arbeidstakere, lovlydige bedrifter og velferdsordningene.

**Hva er problemet?**
- Skatteinntekter forsvinner
- Arbeidstakere mister rettigheter
- Useriøse bedrifter utkonkurrerer seriøse
- Utnytting av sårbare arbeidstakere
- Organisert kriminalitet

**Omfang:**
- Svart arbeid i Norge anslås til 40-100 milliarder kr årlig
- Mest i bygg, renhold, restaurant, transport
- Utføres av både norske og utenlandske arbeidstakere

Å forstå hvorfor svart arbeid er skadelig, og hva du kan gjøre, er viktig både for deg og for samfunnet.`,
    },
    {
      id: 'samfunnskunnskap-3-7-def-1',
      type: 'definition',
      title: 'Svart arbeid',
      content: `**Svart arbeid:**
Arbeid som utføres uten at inntekten oppgis til skattemyndighetene. Både den som jobber og den som betaler bryter loven.

**Former for svart arbeid:**
- Kontant betaling uten kvittering
- Jobbe "ved siden av" trygd uten å melde fra
- Ikke føre timer korrekt
- Betaling under bordet

**Hvorfor er det fristende?**
- For arbeidstaker: Mer penger direkte (unngår skatt)
- For arbeidsgiver: Slipper arbeidsgiveravgift og andre kostnader
- "Alle andre gjør det"

**Hvorfor er det dumt å jobbe svart?**
- Ingen rettigheter (sykepenger, ferie, pensjon)
- Ingen forsikring ved skade
- Kan ikke klage på dårlige forhold
- Risiko for straff
- Ødelegger for fellesskapet`,
    },
    {
      id: 'samfunnskunnskap-3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva svart arbeid er og nevn tre grunner til at det er problematisk.',
        solution: 'Svart arbeid er arbeid der inntekten ikke oppgis til skattemyndighetene. Problematisk fordi: 1) Arbeidstaker mister rettigheter (sykepenger, pensjon, ferie). 2) Samfunnet mister skatteinntekter til velferd. 3) Useriøse bedrifter utkonkurrerer lovlydige bedrifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-7-def-2',
      type: 'definition',
      title: 'Arbeidslivskriminalitet',
      content: `**Arbeidslivskriminalitet:**
Kriminelle handlinger som gjøres i eller påvirker arbeidslivet. Mer alvorlig og organisert enn "vanlig" svart arbeid.

**Eksempler:**
- Systematisk skatteunndragelse
- Menneskehandel og tvangsarbeid
- Grov utnytting av arbeidstakere
- Falske fakturaer og selskaper
- Trygdesvindel
- Ulovlig innkvartering
- Farlige arbeidsforhold

**Hvem rammes?**
- Særlig utenlandske arbeidstakere
- Sårbare grupper uten nettverk
- De som ikke kjenner sine rettigheter
- De som frykter å miste jobben eller opphold

**Konsekvenser for samfunnet:**
- Milliardtap i skatteinntekter
- Undergraver velferdsordninger
- Konkurransevridning
- Seriøse bedrifter taper
- Organisert kriminalitet styrkes`,
    },
    {
      id: 'samfunnskunnskap-3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom "vanlig" svart arbeid og arbeidslivskriminalitet?',
        solution: 'Svart arbeid: Enkelttilfeller der inntekt ikke oppgis til skatt (f.eks. vasking mot kontant betaling). Arbeidslivskriminalitet: Systematisk og organisert kriminalitet - menneskehandel, grov utnytting, falske selskaper, stor skala. Mer alvorlig og ofte knyttet til organisert kriminalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke bransjer er mest utsatt for svart arbeid og arbeidslivskriminalitet, og hvorfor?',
        solution: 'Utsatte bransjer: Bygg og anlegg, renhold, restaurant og servering, transport, landbruk. Hvorfor: Mange underleverandører og lang kjeder, lett å skjule timer, kontantbasert, høy andel innvandret arbeidskraft som kanskje ikke kjenner rettigheter, hardt prispress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Utnytting av bygningsarbeidere',
      problem: `Et byggeselskap ansetter utenlandske arbeidere gjennom et bemanningsfirma. Arbeiderne bor trangt i en leilighet arbeidsgiveren eier, har dårlig sikkerhetsutstyr og får langt under minstelønn. Hva er problematisk her?`,
      solution: `**Lovbrudd i situasjonen:**

**Lønn:**
- Under minstelønn (bransjeavtale) er ulovlig
- Allmenngjorte tariffavtaler gjelder i bygg

**Boforhold:**
- Ulovlig innkvartering hvis det trekkes fra lønn
- Mulig utnytting av avhengighetsforhold

**HMS:**
- Manglende sikkerhetsutstyr bryter arbeidsmiljøloven
- Arbeidsgiver har ansvar for verneustyr

**Arbeidsforhold:**
- Mulig brudd på arbeidstidsregler
- Manglende arbeidsavtale?

**Hvem har ansvar?**
- Byggherren (den som bestiller)
- Hovedentreprenøren
- Bemanningsfirmaet
- Underleverandører i kjeden

**Tiltak:**
- Arbeiderne kan kontakte Arbeidstilsynet
- Fagforeninger kan hjelpe
- Politiet etterforsker grove tilfeller
- A-krimsentrene koordinerer innsatsen

**Lærdommen:**
Dette er arbeidslivskriminalitet - systematisk utnytting for profitt.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-3-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hva kan gjøres for å bekjempe svart arbeid og arbeidslivskriminalitet?',
        hints: ['Tenk på kontroll, holdninger, lovverk, samarbeid'],
        solution: 'Tiltak: Styrke Arbeidstilsynet og kontroller, A-krimsentre (samarbeid mellom etater), strengere straffer, ID-kort på byggeplasser, bevisstgjøring om konsekvenser, enklere å varsle, styrke fagforeningene, allmenngjøring av tariffavtaler, informasjon til utenlandske arbeidere om rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Demokrati og medborgerskap
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_1: TextbookChapter = {
  id: 'samfunnskunnskap-4-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.1',
  title: 'Hva er demokrati?',
  description: 'Forstå demokratiets grunnprinsipper, hva som kjennetegner et demokratisk samfunn og ulike demokratiformer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hva som kjennetegner et demokratisk samfunn',
    'reflektere over demokratiske verdier og prinsipper',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-1-intro',
      type: 'text',
      content: `## Demokrati - folkestyre

Demokrati betyr folkestyre. Det er en styreform der folket har makt til å bestemme hvem som skal styre og hvilke beslutninger som skal tas. Demokrati er mer enn bare valg - det er et sett med verdier og prinsipper som preger hele samfunnet.

**Demokratiets grunnidé:**
- Alle mennesker er likeverdige
- Makten tilhører folket
- Flertallet bestemmer, men mindretallet har rettigheter
- Alle har rett til å delta i beslutninger som angår dem

**Hvorfor er demokrati viktig?**
- Sikrer frihet og rettigheter
- Gir legitimitet til beslutninger
- Muliggjør fredelig maktskifte
- Beskytter mot maktmisbruk
- Fremmer stabilitet og utvikling`,
    },
    {
      id: 'samfunnskunnskap-4-1-def-1',
      type: 'definition',
      title: 'Demokratiets kjennetegn',
      content: `**Frie og rettferdige valg:**
Regelmessige valg der alle voksne borgere kan stemme. Flere partier kan stille, og valget er hemmelig.

**Ytringsfrihet:**
Frihet til å uttrykke meninger, kritisere makthaverne og debattere uten frykt for straff.

**Organisasjonsfrihet:**
Rett til å danne og delta i politiske partier, fagforeninger og organisasjoner.

**Rettssikkerhet:**
Lover gjelder for alle, inkludert de som styrer. Uavhengige domstoler beskytter borgernes rettigheter.

**Pressefrihet:**
Frie, uavhengige medier som kan overvåke makten.

**Maktfordeling:**
Makten er delt mellom ulike institusjoner som holder hverandre i sjakk.

**Mindretallets rettigheter:**
Selv om flertallet bestemmer, har mindretallet grunnleggende rettigheter som ikke kan stemmes bort.`,
    },
    {
      id: 'samfunnskunnskap-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn og forklar fem kjennetegn på et demokratisk samfunn.',
        solution: 'Kjennetegn: 1) Frie og rettferdige valg med allmenn stemmerett. 2) Ytringsfrihet - rett til å uttrykke meninger. 3) Rettssikkerhet - lover gjelder for alle. 4) Maktfordeling - makten delt mellom institusjoner. 5) Pressefrihet - uavhengige medier kan overvåke makten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-1-def-2',
      type: 'definition',
      title: 'Demokratiformer',
      content: `**Direkte demokrati:**
Folket stemmer direkte over saker, f.eks. gjennom folkeavstemninger. Praktiseres i liten skala (Sveits, lokalsamfunn).

**Representativt demokrati (indirekte):**
Folket velger representanter som tar beslutninger på deres vegne. Det vanligste i dag. Norge er et representativt demokrati.

**Deltakerdemokrati:**
Legger vekt på bred deltakelse utover valg - høringer, brukermedvirkning, dialog.

**Konstitusjonelt demokrati:**
Demokrati begrenset av en grunnlov som beskytter grunnleggende rettigheter.

**Parlamentarisk demokrati:**
Regjeringen utgår fra og er avhengig av parlamentets tillit (som i Norge).

**Presidentdemokrati:**
Presidenten velges direkte av folket, uavhengig av parlamentet (som i USA).

**Liberalt demokrati:**
Kombinerer flertallsstyre med sterkt vern av individuelle rettigheter og friheter.`,
    },
    {
      id: 'samfunnskunnskap-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom direkte demokrati og representativt demokrati?',
        solution: 'Direkte demokrati: Folket stemmer direkte over saker (f.eks. folkeavstemninger). Representativt demokrati: Folket velger representanter som tar beslutninger på deres vegne. Norge har representativt demokrati, men bruker noen ganger folkeavstemninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Ulike syn på demokrati',
      problem: `Ulike land har ulike politiske systemer. Hvordan kan vi analysere forskjeller mellom demokratier?`,
      solution: `**Kriterier for å vurdere demokratier:**

**Formelle kjennetegn:**
- Frie og rettferdige valg
- Uavhengige medier
- Uavhengig rettsvesen
- Ytringsfrihet
- Maktfordeling
- Aktivt sivilsamfunn

**Ulike demokratimodeller:**
Demokratier kan organiseres ulikt. Noen vektlegger:
- Sterke individuelle rettigheter (liberalt demokrati)
- Direkte folkeavstemninger (som i Sveits)
- Flertallsstyre med nasjonale verdier
- Konsensusbygging mellom grupper

**Debatt om demokrati:**
Det er uenighet om hva som utgjør et "ekte" demokrati:
- Noen mener liberale rettigheter er avgjørende
- Andre mener flertallsviljen er det viktigste
- Noen land kritiseres av internasjonale organisasjoner
- Disse landene mener kritikken er politisk motivert

**Viktig innsikt:**
Det finnes ulike syn på hva demokrati innebærer. Det er viktig å kunne analysere forskjeller uten å anta at én modell er den eneste riktige.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er mindretallets rettigheter viktig i et demokrati?',
        solution: 'Mindretallets rettigheter er viktig fordi: 1) Flertallet kan ta feil. 2) Menneskerettigheter gjelder alle, uansett flertall. 3) Mindretallet i dag kan bli flertall i morgen. 4) Forhindrer "flertallets tyranni". 5) Beskytter sårbare grupper. 6) Sikrer fri debatt og opposisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvilke trusler kan demokratiet stå overfor i dag?',
        hints: ['Tenk på autoritære tendenser, teknologi, polarisering, misinformasjon'],
        solution: 'Trusler: Autoritære ledere som svekker institusjoner, spredning av desinformasjon, politisk polarisering, svekket tillit til medier og politikere, økonomisk ulikhet, manglende deltakelse, utenlandsk innblanding i valg, teknologiselskapers makt, ekstremisme. Krever våkenhet og deltakelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_4_2: TextbookChapter = {
  id: 'samfunnskunnskap-4-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.2',
  title: 'Det norske demokratiet',
  description: 'Forstå hvordan det norske demokratiet er organisert med Storting, regjering og maktfordeling.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hvordan det norske demokratiet fungerer',
    'reflektere over maktfordelingsprinsippet og dets betydning',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-2-intro',
      type: 'text',
      content: `## Det norske politiske systemet

Norge er et konstitusjonelt monarki og et parlamentarisk demokrati. Grunnloven fra 1814 er fundamentet, men den er endret mange ganger for å tilpasse seg samfunnsutviklingen.

**Hovedelementer:**
- Konstitusjonelt monarki: Kongen er statsoverhode, men har ingen reell politisk makt
- Parlamentarisme: Regjeringen utgår fra og er avhengig av Stortingets tillit
- Maktfordelingsprinsippet: Makten er delt mellom ulike institusjoner

**Grunnloven:**
- Norges høyeste rettskilde
- Fastsetter statsmaktenes oppgaver og grenser
- Beskytter grunnleggende rettigheter
- Kan bare endres med 2/3 flertall

Det norske demokratiet regnes som et av verdens best fungerende.`,
    },
    {
      id: 'samfunnskunnskap-4-2-def-1',
      type: 'definition',
      title: 'De tre statsmaktene',
      content: `**Stortinget (den lovgivende makt):**
- 169 representanter valgt hvert 4. år
- Vedtar lover
- Vedtar statsbudsjettet
- Kontrollerer regjeringen
- Kan ikke oppløses i valgperioden

**Regjeringen (den utøvende makt):**
- Ledes av statsministeren
- Foreslår lover og budsjett
- Gjennomfører Stortingets vedtak
- Leder forvaltningen
- Representerer Norge utad

**Domstolene (den dømmende makt):**
- Høyesterett øverst
- Dømmer i saker
- Kan prøve om lover er i strid med Grunnloven
- Uavhengige av Storting og regjering

**Formålet med maktfordeling:**
- Hindre maktkonsentrasjon
- Statsmaktene kontrollerer hverandre
- Beskytter borgernes frihet`,
    },
    {
      id: 'samfunnskunnskap-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva de tre statsmaktene er og hvilke oppgaver de har.',
        solution: 'Stortinget (lovgivende): Vedtar lover og budsjett, kontrollerer regjeringen. Regjeringen (utøvende): Foreslår lover, gjennomfører vedtak, leder forvaltningen. Domstolene (dømmende): Dømmer i saker, prøver lover mot Grunnloven. Maktfordelingen hindrer maktkonsentrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-2-def-2',
      type: 'definition',
      title: 'Parlamentarisme',
      content: `**Hva er parlamentarisme?**
Regjeringen må ha Stortingets tillit for å sitte. Mister den tilliten, må den gå av.

**Hvordan dannes en regjering?**
1. Stortingsvalg avholdes
2. Kongen gir oppdrag til partiledere
3. Den som kan danne flertall, blir statsminister
4. Regjeringen utnevnes formelt av kongen

**Flertallsregjering:**
Regjeringen har flertall på Stortinget (sjelden i Norge).

**Mindretallsregjering:**
Regjeringen mangler flertall og må søke støtte fra sak til sak (vanlig i Norge).

**Mistillitsforslag:**
Stortinget kan tvinge regjeringen til å gå av.

**Kabinettspørsmål:**
Regjeringen kan knytte sin skjebne til en sak.

**Negativ parlamentarisme:**
I Norge trenger ikke regjeringen aktivt godkjennes - den sitter så lenge den ikke får flertallet mot seg.`,
    },
    {
      id: 'samfunnskunnskap-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er parlamentarisme, og hvordan fungerer det i Norge?',
        solution: 'Parlamentarisme: Regjeringen må ha Stortingets tillit. I Norge: Negativ parlamentarisme - regjeringen sitter så lenge det ikke er flertall mot den. Mindretallsregjeringer er vanlige. Mistillitsforslag kan tvinge regjeringen til å gå av.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom flertallsregjering og mindretallsregjering?',
        solution: 'Flertallsregjering: Regjeringspartiene har flertall på Stortinget, kan vedta det de vil. Mindretallsregjering: Regjeringen mangler flertall, må søke støtte fra andre partier for å få vedtak. Mindretallsregjering er vanligst i Norge, krever forhandlinger og kompromisser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Regjeringsdannelse',
      problem: `Etter stortingsvalget i 2021 fikk Arbeiderpartiet og Senterpartiet til sammen 76 mandater av 169. Hvordan kunne de likevel danne regjering?`,
      solution: `**Situasjonen:**
- Ap og Sp hadde ikke flertall alene (76 av 169)
- Men de borgerlige partiene hadde heller ikke flertall
- SV (13 mandater) + Ap/Sp = 89 mandater (flertall)

**Hvordan det fungerte:**

**1. Negativ parlamentarisme:**
- Regjeringen trenger ikke aktivt støtte
- Den sitter så lenge det ikke er flertall MOT den
- Ap/Sp dannet mindretallsregjering

**2. Budsjettsamarbeid med SV:**
- Inngikk avtale med SV om støtte til budsjettet
- SV fikk gjennomslag for sine saker
- Regjeringen fikk flertall for de viktigste sakene

**3. Sak-til-sak:**
- I andre saker søker regjeringen støtte der den kan
- Noen ganger fra SV/Rødt, andre ganger fra sentrum/høyre

**Lærdommen:**
Mindretallsregjeringer er vanlige i Norge. De fungerer gjennom kompromisser og forhandlinger.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvorfor er maktfordelingsprinsippet viktig for demokratiet?',
        solution: 'Viktigheten: Hindrer at én person/gruppe får all makt, statsmaktene kontrollerer hverandre, beskytter borgernes frihet mot overgrep, sikrer balanse og moderasjon, gjør det vanskeligere å misbruke makt. Uten maktfordeling kan flertallet undertrykke mindretallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_4_3: TextbookChapter = {
  id: 'samfunnskunnskap-4-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.3',
  title: 'Stortingsvalg og valgordning',
  description: 'Forstå hvordan stortingsvalg fungerer, valgordningen og mandatfordelingen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte hvordan valgordningen påvirker demokratiet',
    'reflektere over egen deltakelse i valg',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-3-intro',
      type: 'text',
      content: `## Stortingsvalg

Stortingsvalget er det viktigste valget i Norge. Hvert fjerde år velger vi 169 representanter til Stortinget. Valget avgjør hvem som skal styre landet.

**Valg i Norge:**
- Stortingsvalg (hvert 4. år)
- Kommune- og fylkestingsvalg (hvert 4. år, mellom stortingsvalg)
- Sametingsvalg

**Hvem kan stemme?**
- Norske statsborgere
- Fylt 18 år innen utgangen av valgåret
- Registrert i folkeregisteret

**Stemmerett er en rettighet - men også et ansvar:**
- Demokratiet fungerer best når mange deltar
- Stemmen din kan avgjøre utfallet
- De som ikke stemmer, lar andre bestemme for seg`,
    },
    {
      id: 'samfunnskunnskap-4-3-def-1',
      type: 'definition',
      title: 'Valgordningen',
      content: `**Forholdstallsvalg:**
Mandatene fordeles proporsjonalt etter partienes stemmetall. Sikrer at mange partier blir representert.

**Valgdistrikter:**
Norge er delt inn i 19 valgdistrikter (fylkene). Hvert distrikt har et visst antall mandater basert på befolkning og areal.

**Distriktsmandater:**
150 mandater fordeles direkte i valgdistriktene.

**Utjevningsmandater:**
19 mandater (ett per distrikt) som sikrer at partienes mandattall stemmer bedre med stemmetallet nasjonalt.

**Sperregrense:**
Et parti må ha minst 4% av stemmene nasjonalt for å få utjevningsmandater. Kan likevel få distriktsmandater.

**Stemmegivning:**
- Forhåndsstemme (fra juli til fredag før valgdagen)
- Stemme på valgdagen (mandag og eventuelt søndag)
- Hemmelig valg i stemmeavlukke`,
    },
    {
      id: 'samfunnskunnskap-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva sperregrensen er og hvilken effekt den har.',
        solution: 'Sperregrensen er på 4% av stemmene nasjonalt. Partier under 4% får ikke utjevningsmandater, men kan likevel få distriktsmandater. Effekt: Forhindrer veldig små partier på Stortinget, bidrar til mer stabile regjeringer, men noen mener den er udemokratisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-3-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom distriktsmandater og utjevningsmandater?',
        solution: 'Distriktsmandater (150): Fordeles direkte i hvert valgdistrikt basert på stemmetallet der. Utjevningsmandater (19): Ett per distrikt, fordeles for å sikre at partienes totale mandattall bedre gjenspeiler stemmetallet nasjonalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-3-def-2',
      type: 'definition',
      title: 'Partier og stemmeseddelen',
      content: `**Stortingspartiene (2021-2025):**
- Arbeiderpartiet (Ap)
- Høyre (H)
- Senterpartiet (Sp)
- Fremskrittspartiet (Frp)
- Sosialistisk Venstreparti (SV)
- Rødt (R)
- Venstre (V)
- Kristelig Folkeparti (KrF)
- Miljøpartiet De Grønne (MDG)

**Stemmeseddelen:**
- Velg partiets liste
- Kan gi personstemmer til kandidater
- Kan stryke kandidater (liten effekt)

**Mandatfordeling:**
- Bruker modifisert St. Laguës metode
- Sikrer proporsjonalitet
- Gir små partier en viss sjanse

**Sperregrensens effekt:**
Partier under 4% får ikke utjevningsmandater, men stemmen teller likevel i distriktet.`,
    },
    {
      id: 'samfunnskunnskap-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Førstegangsstemmer',
      problem: `Maria fyller 18 i valgåret og kan stemme for første gang. Hun vet ikke hvilket parti hun skal stemme på. Hvordan bør hun gå frem?`,
      solution: `**Råd til Maria:**

**1. Informer deg:**
- Les partienes programmer
- Bruk valgomater (tester som matcher deg med parti)
- Følg valgkampen og debatter
- Les nyheter og analyser

**2. Tenk over dine verdier:**
- Hva er viktigst for deg? (klima, økonomi, innvandring, helse...)
- Hvordan mener du samfunnet bør organiseres?
- Hvilken retning vil du at Norge skal gå?

**3. Sammenlign partiene:**
- Se på konkrete saker
- Hva har partiene gjort tidligere?
- Hvem samarbeider de med?

**4. Ikke vær redd for å velge:**
- Det finnes ingen "feil" stemme
- Du kan endre mening til neste valg
- Å stemme blankt er også et valg (men teller ikke)

**5. Bruk stemmeretten:**
- Det er mange som har kjempet for din rett til å stemme
- Din stemme kan avgjøre
- Demokratiet trenger din deltakelse

**Viktig:**
Det er OK å være usikker. Sett deg inn i sakene og stem på det du mener er best.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-3-ex-4',
        number: '3',
        type: 'classic',
        task: 'Drøft: Hvorfor er det viktig at unge deltar i valg?',
        solution: 'Viktig fordi: Unge må leve lengst med beslutningene som tas, sikrer at unges perspektiver høres, demokratiet trenger bred deltakelse, lav valgdeltakelse svekker legitimitet, etablerer gode vaner tidlig, unge har andre interesser enn eldre. Politikere lytter mer til grupper som stemmer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_4_4: TextbookChapter = {
  id: 'samfunnskunnskap-4-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.4',
  title: 'Politiske partier',
  description: 'Forstå de politiske partienes rolle, høyre-venstre-aksen og forskjellene mellom partiene.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte partienes rolle i demokratiet',
    'reflektere over politiske skillelinjer og partiforskjeller',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-4-intro',
      type: 'text',
      content: `## Politiske partier i Norge

Politiske partier er organisasjoner som samler mennesker med lignende politiske syn. De stiller til valg, utvikler politikk og danner regjeringer. Partiene er bindeleddet mellom folket og makten.

**Partienes funksjoner:**
- Rekrutterer politikere
- Utvikler politiske programmer
- Mobiliserer velgere
- Kobler folkets ønsker til politiske beslutninger
- Holder regjeringen ansvarlig (opposisjonen)

**Flerpartisystem:**
Norge har et flerpartisystem med mange partier representert på Stortinget. Dette sikrer mangfold, men kan gjøre det vanskeligere å danne stabile regjeringer.`,
    },
    {
      id: 'samfunnskunnskap-4-4-def-1',
      type: 'definition',
      title: 'Høyre-venstre-aksen',
      content: `**Venstresiden:**
- Større offentlig sektor
- Mer omfordeling gjennom skatt
- Sterkere arbeidstakerrettigheter
- Fellesskapsløsninger
- Partier: Rødt, SV, Ap

**Sentrum:**
- Balanse mellom marked og stat
- Ofte opptatt av distrikt, verdier, miljø
- Partier: Sp, KrF, Venstre, MDG

**Høyresiden:**
- Mindre stat, lavere skatter
- Mer marked og privatisering
- Individuelt ansvar
- Næringsvennlig politikk
- Partier: Høyre, Frp

**Viktig:**
Høyre-venstre-aksen er en forenkling. Partiene skiller seg også på andre akser:
- Sentrum vs. distrikt
- Verdiliberale vs. verdikonservative
- Mer vs. mindre EU/EØS
- Miljø som prioritet`,
    },
    {
      id: 'samfunnskunnskap-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med høyre-venstre-aksen i politikken?',
        solution: 'Høyre-venstre-aksen: Venstresiden vil ha mer stat, høyere skatter og omfordeling. Høyresiden vil ha mindre stat, lavere skatter og mer marked. Sentrum balanserer mellom disse. Aksen er en forenkling - partiene skiller seg også på andre spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-4-def-2',
      type: 'definition',
      title: 'De norske partiene',
      content: `**Rødt (R):**
Sosialistisk parti, mot kapitalisme, for sterk omfordeling.

**Sosialistisk Venstreparti (SV):**
Grønt sosialistisk parti, miljø og rettferdighet.

**Arbeiderpartiet (Ap):**
Sosialdemokratisk, historisk arbeiderbevegelsens parti.

**Senterpartiet (Sp):**
Distriktsparti, skeptisk til sentralisering og EU.

**Miljøpartiet De Grønne (MDG):**
Grønt parti med miljø som hovedsak.

**Kristelig Folkeparti (KrF):**
Kristendemokratisk, familie- og verdipolitikk.

**Venstre (V):**
Sosialliberalt parti, personlig frihet og miljø.

**Høyre (H):**
Konservativt parti, lavere skatter, næringsvennlig.

**Fremskrittspartiet (Frp):**
Lavere skatter, mindre byråkrati, streng innvandringspolitikk, fokus på valgfrihet.`,
    },
    {
      id: 'samfunnskunnskap-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de ni stortingspartiene og plasser dem på høyre-venstre-aksen.',
        solution: 'Venstre: Rødt, SV, Ap. Sentrum: Sp, MDG, KrF, Venstre. Høyre: Høyre, Frp. Merk: Noen partier er vanskeligere å plassere - MDG og Sp har saker som går på tvers av aksen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Blokkpolitikk',
      problem: `Ved valg snakkes det ofte om "rødgrønn" og "borgerlig" side. Hva betyr dette, og hvordan fungerer det?`,
      solution: `**Blokkpolitikk i Norge:**

**Rødgrønn side (venstresiden):**
- Ap, SV, Sp (tradisjonelt samarbeid)
- Rødt støtter ofte fra utsiden
- MDG kan gå begge veier

**Borgerlig side (høyresiden):**
- Høyre, Frp, Venstre, KrF
- Solberg-regjeringen 2013-2021

**Hvorfor blokker?**
- Lettere å danne regjeringsalternativer
- Velgerne vet hvem som samarbeider
- Gir forutsigbarhet

**Utfordringer:**
- Noen partier passer dårlig i begge blokker
- Sp har blitt mer skeptisk til SV
- KrF og Venstre kan gå begge veier
- Blokkene er ikke hugget i stein

**Eksempel fra 2021:**
Ap og Sp dannet regjering, fikk budsjettstøtte fra SV, men SV er ikke i regjering. Rødt støtter sak til sak.

**Lærdommen:**
Norsk politikk er mer nyansert enn to blokker, men blokktenkning preger valgkampen.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke funksjoner har politiske partier i et demokrati?',
        solution: 'Funksjoner: Rekrutterer politikere, utvikler politiske programmer, mobiliserer velgere, kobler folkets ønsker til beslutninger, holder regjeringen ansvarlig (opposisjon), samler folk med lignende syn, forenkler valgene for velgerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Er høyre-venstre-aksen fortsatt relevant for å forstå norsk politikk?',
        solution: 'Fortsatt relevant: Forklarer hovedforskjeller i skatte- og velferdspolitikk. Mindre relevant: Nye saker (miljø, innvandring, EU) går på tvers, velgere er mer flytende, partiene har nærmet seg hverandre på noen områder. Konklusjon: Nyttig, men ikke tilstrekkelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_4_5: TextbookChapter = {
  id: 'samfunnskunnskap-4-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.5',
  title: 'Lokaldemokrati og kommunestyre',
  description: 'Forstå hvordan kommuner og fylkeskommuner fungerer, og hvilke oppgaver de har.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for det lokale folkestyret og kommunenes oppgaver',
    'drøfte betydningen av lokaldemokratiet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-5-intro',
      type: 'text',
      content: `## Det lokale folkestyret

Norge er delt inn i kommuner og fylkeskommuner. Per 2024 har vi 357 kommuner og 11 fylkeskommuner. Disse styres av folkevalgte representanter som velges hvert fjerde år, to år etter stortingsvalget.

**Hvorfor lokaldemokrati?**
- Beslutninger tas nærmere innbyggerne
- Lokale behov og forhold tas hensyn til
- Flere kan delta i politikken
- Kortere avstand mellom velger og politiker

**Kommunens rolle:**
Kommunene er grunnmuren i det norske velferdssamfunnet. De står for mesteparten av tjenestene innbyggerne møter i hverdagen.`,
    },
    {
      id: 'samfunnskunnskap-4-5-def-1',
      type: 'definition',
      title: 'Kommunestyret og formannskapet',
      content: `**Kommunestyret:**
Øverste organ i kommunen. Velges direkte av innbyggerne. Størrelsen varierer fra 11 til 85 medlemmer avhengig av folketallet. Møtes typisk månedlig og fatter de viktigste vedtakene.

**Formannskapet:**
Velges av kommunestyret blant medlemmene. Behandler saker før de går til kommunestyret. Forbereder budsjett og økonomiplan.

**Ordføreren:**
Velges av kommunestyret (i noen kommuner direkte av folket). Leder kommunestyret og formannskapet. Representerer kommunen utad.

**Kommunedirektøren:**
Øverste administrative leder. Ansatt av kommunestyret. Leder administrasjonen og forbereder saker for politikerne.`,
    },
    {
      id: 'samfunnskunnskap-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på kommunestyre og formannskap?',
        solution: 'Kommunestyret: Øverste organ, alle medlemmer velges av folket, fatter de viktigste vedtakene. Formannskapet: Velges av og blant kommunestyrets medlemmer, forbereder saker, behandler hastesaker, har ofte delegert myndighet i noen saker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-5-def-2',
      type: 'definition',
      title: 'Kommunens oppgaver',
      content: `**Lovpålagte oppgaver:**
- Barnehage og grunnskole
- Helse- og omsorgstjenester (sykehjem, hjemmesykepleie)
- Barnevern
- Sosiale tjenester (NAV)
- Plan- og byggesaker
- Vann, avløp og renovasjon
- Brann og redning
- Bibliotek

**Andre oppgaver:**
- Kultur og idrett
- Næringsutvikling
- Kollektivtransport (med fylkeskommunen)
- Integreringstiltak

**Finansiering:**
- Skatteinntekter (ca. 40%)
- Rammetilskudd fra staten (ca. 30%)
- Øremerkede tilskudd
- Brukerbetalinger og gebyrer`,
    },
    {
      id: 'samfunnskunnskap-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fem lovpålagte oppgaver som kommunen har ansvar for.',
        solution: 'Fem av følgende: Grunnskole, barnehage, helse- og omsorgstjenester (sykehjem), barnevern, sosiale tjenester, plan- og byggesaker, vann og avløp, renovasjon, brann og redning, bibliotek.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-5-example-1',
      type: 'example',
      title: 'Fylkeskommunens oppgaver',
      problem: `Hva gjør egentlig fylkeskommunen, og hvorfor finnes den?`,
      solution: `**Fylkeskommunens hovedoppgaver:**

1. **Videregående opplæring:**
   - Driver videregående skoler
   - Tilbyr yrkesfaglig opplæring
   - Fagopplæring og lærlingordning

2. **Kollektivtransport:**
   - Buss, trikk, T-bane
   - Fylkesveier (ca. 44 000 km)
   - Ferjer og hurtigbåter

3. **Tannhelse:**
   - Gratis for barn og unge
   - Eldre, uføre og andre prioriterte grupper

4. **Regional utvikling:**
   - Næringsutvikling
   - Regional planlegging
   - Kulturinstitusjoner

5. **Kulturminner:**
   - Forvaltning av kulturminner
   - Museer

**Hvorfor fylkeskommunen?**
Noen oppgaver er for store for enkeltkommuner, men trenger lokal forankring. Videregående skole er et godt eksempel - man trenger et stort nok befolkningsgrunnlag for å tilby mange linjer.

**Styring:**
Fylkestinget (35-57 medlemmer) velges direkte. Ledes av fylkesordfører. Fylkeskommunedirektør leder administrasjonen.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er fylkeskommunens viktigste oppgaver?',
        solution: 'Fylkeskommunens viktigste oppgaver: 1) Videregående opplæring og fagopplæring, 2) Kollektivtransport og fylkesveier, 3) Tannhelsetjenester, 4) Regional utvikling og planlegging, 5) Kulturminner og kulturinstitusjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvorfor er lokaldemokrati viktig?',
        solution: 'Argumenter for: Beslutninger nærmere folket, bedre tilpasning til lokale forhold, flere kan delta, lettere å holde politikere ansvarlige, demokratisk opplæring. Utfordringer: Små kommuner har lite ressurser, ulik kvalitet på tjenester, kompliserte saker krever kompetanse. Konklusjon: Viktig supplement til nasjonalt demokrati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_4_6: TextbookChapter = {
  id: 'samfunnskunnskap-4-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.6',
  title: 'Medborgerskap og politisk deltakelse',
  description: 'Forstå hva medborgerskap innebærer og hvordan man kan delta i demokratiet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte ulike former for politisk deltakelse',
    'reflektere over hva det vil si å være medborger i et demokratisk samfunn',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-6-intro',
      type: 'text',
      content: `## Å være medborger

Medborgerskap handler om mer enn bare statsborgerskap. Det handler om å være en aktiv deltaker i samfunnet - med både rettigheter og plikter.

**Medborgerskapets dimensjoner:**
- **Sivile rettigheter:** Ytringsfrihet, organisasjonsfrihet, rettssikkerhet
- **Politiske rettigheter:** Stemmerett, rett til å stille til valg
- **Sosiale rettigheter:** Utdanning, helse, velferd
- **Plikter:** Skatt, verneplikt, delta i demokratiet

**Aktivt medborgerskap:**
Demokratiet trenger aktive borgere som deltar, stiller spørsmål og holder makten ansvarlig. Dette er mer enn å bare stemme - det handler om å engasjere seg i samfunnet.`,
    },
    {
      id: 'samfunnskunnskap-4-6-def-1',
      type: 'definition',
      title: 'Former for politisk deltakelse',
      content: `**Konvensjonell deltakelse:**
- Stemme ved valg
- Være medlem i parti
- Stille til valg
- Kontakte politikere
- Delta i høringer
- Skrive leserinnlegg

**Ukonvensjonell deltakelse:**
- Demonstrasjoner og aksjoner
- Streik (politisk streik)
- Boikott av varer/tjenester
- Sivil ulydighet
- Kampanjer i sosiale medier
- Underskriftskampanjer

**Digital deltakelse:**
- Dele politiske meninger på nett
- E-demokrati og digitale høringer
- Online petisioner
- Politisk mobilisering via sosiale medier

**Hverdagsdeltakelse:**
- Engasjement i nærmiljøet
- Frivillig arbeid
- Dugnadsarbeid
- Delta i frivillige organisasjoner`,
    },
    {
      id: 'samfunnskunnskap-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på konvensjonell og ukonvensjonell politisk deltakelse?',
        solution: 'Konvensjonell deltakelse følger etablerte demokratiske kanaler: stemme, partimedlemskap, kontakte politikere, høringer. Ukonvensjonell deltakelse går utenfor disse: demonstrasjoner, boikott, sivil ulydighet, aksjoner. Begge er lovlige (med unntak av noen aksjonsformer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-6-def-2',
      type: 'definition',
      title: 'Sivilsamfunnet',
      content: `**Hva er sivilsamfunnet?**
Den delen av samfunnet som verken er stat eller marked - frivillige organisasjoner, foreninger, og uformelle nettverk.

**Eksempler:**
- Idrettslag og kulturforeninger
- Fagforeninger og arbeidsgiverforeninger
- Interesseorganisasjoner (Norsk Folkehjelp, Røde Kors)
- Religiøse samfunn
- Politiske partier
- Humanitære organisasjoner

**Sivilsamfunnets funksjoner:**
- Gir folk mulighet til å organisere seg
- Fremmer interesser overfor myndighetene
- Skaper tilhørighet og sosial kapital
- Bidrar til demokratisk opplæring
- Fungerer som motvekt til staten

**Norge:**
Norge har et sterkt sivilsamfunn med høy organisasjonsgrad. Over 80% av nordmenn er medlem i minst én organisasjon.`,
    },
    {
      id: 'samfunnskunnskap-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med sivilsamfunnet, og hvorfor er det viktig for demokratiet?',
        solution: 'Sivilsamfunnet er frivillige organisasjoner og foreninger mellom stat og marked. Viktig fordi: Gir folk mulighet til å organisere seg, fremmer interesser, skaper tilhørighet, bidrar til demokratisk opplæring, fungerer som motvekt til staten, bygger sosial kapital.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-6-example-1',
      type: 'example',
      title: 'Sivil ulydighet',
      problem: `Hva er sivil ulydighet, og kan det være legitimt i et demokrati?`,
      solution: `**Hva er sivil ulydighet?**
Å bevisst bryte loven for å protestere mot noe man mener er urettferdig - og akseptere straffen som følger.

**Kjennetegn:**
- Åpen og fredelig handling
- Protesterer mot urettferdighet
- Aksepterer konsekvensene
- Siste utvei etter andre metoder

**Historiske eksempler:**
- Rosa Parks nektet å gi fra seg bussetet (USA, 1955)
- Gandhis saltmarsj (India, 1930)
- Norske lærere mot nazifisering (1942)

**Norske eksempler:**
- Altaaksjonen (1979-81) mot kraftutbygging
- Miljøaktivister som lenker seg fast
- Aksjoner mot oljeboring

**Er det legitimt?**
Argumenter for:
- Kan påpeke urettferdighet
- Historisk viktig for fremskritt
- Demokratisk virkemiddel når andre ikke virker

Argumenter mot:
- Undergraver demokratiet og rettsstatens prinsipper
- Man kan ikke velge hvilke lover man følger
- Finnes lovlige måter å påvirke på

**Konklusjon:**
Sivil ulydighet er kontroversielt, men kan i noen tilfeller være etisk forsvarlig når det protesteres mot alvorlig urett.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fem måter unge kan delta politisk på utenom å stemme ved valg.',
        solution: 'Fem av følgende: Engasjere seg i ungdomsparti, delta i demonstrasjoner, skrive leserinnlegg, bruke sosiale medier politisk, signere opprop, delta i frivillige organisasjoner, kontakte politikere, engasjere seg i elevråd/ungdomsråd, delta i boikott.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Kan sivil ulydighet være en legitim form for politisk deltakelse i et demokrati?',
        solution: 'For: Kan påpeke urettferdighet, historisk viktig (borgerrettighetsbevegelsen), nødvendig når andre metoder ikke virker. Mot: Undergraver rettsstaten, kan velge lovlige alternativer, hvem bestemmer hva som er urett? Konklusjon: Kan forsvares i ekstreme tilfeller, men bør være siste utvei.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_4_7: TextbookChapter = {
  id: 'samfunnskunnskap-4-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.7',
  title: 'Trusler mot demokratiet',
  description: 'Forstå hvilke utfordringer og trusler demokratiet står overfor i dag.',
  estimatedMinutes: 35,
  competenceGoals: [
    'drøfte utfordringer og trusler mot demokratiet',
    'reflektere over hvordan man kan styrke demokratiet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-4-7-intro',
      type: 'text',
      content: `## Utfordringer for demokratiet

Demokratiet står overfor ulike utfordringer. Det er uenighet om hva som utgjør de største truslene, og om hvordan de best kan møtes.

**Utfordringer som ofte diskuteres:**
- Lav valgdeltakelse i noen grupper
- Polarisering og "vi mot dem"-tenkning
- Desinformasjon og vanskelig å skille sant fra usant
- Svekket tillit til institusjoner
- Økende makt til teknologiselskaper

**Ulike perspektiver:**
- Noen mener eliter og institusjoner har blitt for fjerne fra folket
- Andre mener populistiske bevegelser truer liberal-demokratiske verdier
- Noen bekymrer seg for utenlandsk påvirkning
- Andre mener innenlandsk polarisering er viktigere

**Norge:**
Norge regnes som et av verdens sterkeste demokratier. Utfordringer inkluderer lav valgdeltakelse i noen grupper og debatt om ytringsfrihetens grenser.`,
    },
    {
      id: 'samfunnskunnskap-4-7-def-1',
      type: 'definition',
      title: 'Utfordringer innenfor demokratiet',
      content: `**Politisk ekstremisme:**
- Ekstremisme på begge ytterfløyer kan true demokratiet
- Terrorisme (22. juli 2011 fra høyreekstrem, historisk også fra venstreekstreme)
- Hatytringer og trusler mot politikere
- Radikalisering på nettet

**Polarisering:**
- Økende avstand mellom politiske grupper
- "Vi mot dem"-tenkning på tvers av politiske skillelinjer
- Ekkokamre i sosiale medier

**Tillitsutfordringer:**
- Noen mener politikere er for fjerne fra folket
- Andre mener mistillit til institusjoner undergraver demokratiet
- Debatt om mediers objektivitet
- Lav valgdeltakelse i noen grupper

**Ulike syn på økonomiens rolle:**
- Noen mener økonomisk ulikhet svekker politisk likhet
- Andre mener høye skatter og regulering begrenser frihet
- Debatt om pengers rolle i politikken
- Uenighet om velferdsstatens omfang`,
    },
    {
      id: 'samfunnskunnskap-4-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre utfordringer for demokratiet og forklar hvorfor de kan være problematiske.',
        solution: 'Tre av følgende: Politisk ekstremisme, polarisering og mangel på dialog, lav valgdeltakelse, tillitsproblemer mellom borgere og institusjoner, hatytringer og trusler, desinformasjon, store teknologiselskapers makt. Disse kan svekke demokratisk deltakelse og debatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-7-def-2',
      type: 'definition',
      title: 'Eksterne og teknologiske utfordringer',
      content: `**Utenlandsk påvirkning:**
- Mange land forsøker å påvirke andre lands politikk
- Cyberangrep og hacking
- Desinformasjon fra ulike aktører
- Debatt om hvor alvorlig trusselen er

**Desinformasjon:**
- Falske nyheter og manipulert informasjon
- Sosiale medier som spredningskanal
- Deepfakes og AI-generert innhold
- Vanskelig å skille sant fra usant
- Uenighet om hvem som sprer mest desinformasjon

**Teknologiske utfordringer:**
- Store teknologiselskapers makt over informasjon
- Algoritmers påvirkning på hva vi ser
- Debatt om personvern vs. sikkerhet
- Spørsmål om regulering av sosiale medier

**Komplekse politiske spørsmål:**
- Migrasjon er et tema med sterke meninger på alle sider
- Miljøpolitikk skaper debatt om demokratisk tempo vs. handlekraft
- Krisesituasjoner reiser spørsmål om maktbalanse
- Ulike syn på nasjonalstat vs. overnasjonale organisasjoner`,
    },
    {
      id: 'samfunnskunnskap-4-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med desinformasjon, og hvorfor er det en trussel mot demokratiet?',
        solution: 'Desinformasjon er bevisst feilinformasjon for å villede. Trussel fordi: Gjør det vanskelig å ta informerte valg, undergraver tillit til medier og institusjoner, kan manipulere valg, skaper polarisering, spres raskt via sosiale medier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-4-7-example-1',
      type: 'example',
      title: 'Debatter om demokratiets tilstand',
      problem: `Det er uenighet om demokratiets tilstand i verden. Hva er de ulike synspunktene?`,
      solution: `**Bekymringer fra liberalt hold:**
- Valgte ledere endrer spillereglene
- Medier under press
- Domstolers uavhengighet utfordres
- Sivilsamfunn begrenses i noen land

**Motargumenter fra andre:**
- Disse lederne er demokratisk valgt
- Kritikken kommer fra eliter som mistet makt
- Ulike demokratitradisjoner er legitime
- Internasjonale organisasjoner blander seg inn

**Eksempler på debatt:**

**Ungarn og Polen:**
- EU kritiserer for brudd på rettsstatsprinsipper
- Regjeringene mener de forsvarer nasjonal suverenitet

**USA:**
- Sterk polarisering mellom politiske grupper
- Uenighet om valgintegritet og pressefrihet
- Begge sider anklager hverandre

**Generelt:**
- Noen ser populisme som trussel mot demokrati
- Andre mener populisme er demokrati i praksis

**Viktig innsikt:**
Det er genuint uenighet om hva som styrker og svekker demokratiet. Elever bør lære å analysere ulike perspektiver kritisk.`,
    },
    {
      id: 'samfunnskunnskap-4-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med demokratisk tilbakegang, og hvorfor er det uenighet om begrepet?',
        solution: 'Demokratisk tilbakegang brukes om svekkelse av demokratiske institusjoner. Uenighet fordi: Kritikere mener valgte ledere svekker rettsstaten. Tilhengere mener lederne gjennomfører velgernes vilje. Noen mener begrepet brukes politisk. Andre mener det beskriver reelle endringer. Viser at demokrati kan defineres ulikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-4-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hva bør vektlegges for å sikre et godt fungerende demokrati?',
        solution: 'Ulike syn: Noen mener sterke institusjoner og rettssikkerhet er viktigst. Andre mener flertallsviljen må respekteres mer. Noen vektlegger ytringsfrihet, andre ansvarlig debatt. Tiltak kan inkludere: Øke valgdeltakelse, styrke kritisk tenkning, sikre maktfordeling, respektere mindretallet. Det er politisk uenighet om hva som er viktigst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Politiske ideologier og Det norske politiske systemet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5_1: TextbookChapter = {
  id: 'samfunnskunnskap-5-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.1',
  title: 'Hva er en ideologi?',
  description: 'Forstå hva politiske ideologier er, hvordan de fungerer og hvordan vi kan analysere dem.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for sentrale politiske ideologier',
    'drøfte hvordan ideologier påvirker politisk debatt',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-1-intro',
      type: 'text',
      content: `## Ideologi - et tankesett for samfunnet

En politisk ideologi er et sammenhengende sett av ideer om hvordan samfunnet bør organiseres. Ideologiene gir oss en oppfatning om hva som er rettferdig, hvordan økonomien bør styres, og hvilken rolle staten skal ha.

**Hva inneholder en ideologi?**
- Verdier og prinsipper (f.eks. frihet, likhet, solidaritet)
- Syn på menneskenaturen
- Syn på statens rolle
- Mål for samfunnet
- Forslag til hvordan målene kan nås

**Hvorfor er ideologier viktige?**
- De gir politikken retning og sammenheng
- De hjelper oss å forstå politiske konflikter
- De setter ord på verdier og prioriteringer
- De inspirerer til politisk handling`,
    },
    {
      id: 'samfunnskunnskap-5-1-def-1',
      type: 'definition',
      title: 'Kjennetegn ved politiske ideologier',
      content: `**Verdensanskuelse:**
Ideologier gir en helhetlig forståelse av samfunnet og historien. De forklarer hvorfor ting er som de er og peker mot en ønsket fremtid.

**Normative:**
Ideologier sier ikke bare hvordan ting er, men hvordan de bør være. De inneholder verdier og mål som politikken skal jobbe mot.

**Handlingsorienterte:**
Ideologier gir grunnlag for politiske program og konkret handling. De oversettes til praktisk politikk.

**Forenklende:**
Ideologier forenkler en kompleks virkelighet til håndterbare kategorier og løsninger.

**Konkurrenerende:**
Ulike ideologier konkurrerer om oppslutning og politisk makt. De representerer ulike interesser og verdier.`,
    },
    {
      id: 'samfunnskunnskap-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en politisk ideologi?',
        solution: 'En politisk ideologi er et sammenhengende sett av ideer om hvordan samfunnet bør organiseres. Den inneholder verdier og prinsipper, syn på menneskenaturen, syn på statens rolle, mål for samfunnet og forslag til hvordan målene kan nås.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-1-def-2',
      type: 'definition',
      title: 'De store spørsmålene',
      content: `**Frihet vs. likhet:**
Hvor mye frihet skal individet ha? Hvor mye likhet bør samfunnet sikre? Kan begge oppnås samtidig?

**Marked vs. stat:**
Hvor mye skal markedet styre økonomien? Hvor mye bør staten regulere og omfordele?

**Individ vs. fellesskap:**
Er individets rettigheter viktigst, eller fellesskapets interesser? Hva med personlig ansvar vs. kollektiv ansvar?

**Endring vs. bevaring:**
Bør samfunnet endres radikalt, gradvis reformeres, eller bevares slik det er?

**Nasjonalt vs. internasjonalt:**
Bør nasjonen prioriteres, eller bør vi tenke globalt? Hvor åpne skal grensene være?

Ulike ideologier gir ulike svar på disse spørsmålene.`,
    },
    {
      id: 'samfunnskunnskap-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre sentrale motsetningspar i politisk ideologi.',
        solution: 'Tre av følgende: Frihet vs. likhet, marked vs. stat, individ vs. fellesskap, endring vs. bevaring, nasjonalt vs. internasjonalt. Disse motsetningene viser de grunnleggende verdivalgene ulike ideologier tar stilling til.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Skattepolitikk',
      problem: `Hvordan vil ulike ideologier se på spørsmålet om skatter?`,
      solution: `**Ulike ideologiske syn på skatt:**

**Liberalisme (klassisk):**
- Lavest mulig skatter
- Staten skal bare finansiere grunnleggende fellesoppgaver
- Individet skal beholde mest mulig av egen inntekt
- Argumentet: Frihet til å disponere egne penger

**Sosialisme/Sosialdemokrati:**
- Høyere skatter, særlig for de rike
- Staten trenger ressurser til omfordeling og velferd
- Progressive skatter (de rike betaler mer i prosent)
- Argumentet: Likhet og fellesskap

**Konservatisme:**
- Moderate skatter
- Staten skal finansiere orden og sikkerhet
- Forsiktig med endringer
- Argumentet: Stabilitet og ansvar

**Lærdommen:**
Skattepolitikk handler ikke bare om tall - det handler om verdier. Hvordan vi tenker om skatt avhenger av hvilken ideologisk "brille" vi ser gjennom.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er politiske ideologier viktige for å forstå politikk?',
        solution: 'Ideologier er viktige fordi: De gir politikken retning og sammenheng, hjelper oss å forstå politiske konflikter, setter ord på verdier og prioriteringer, inspirerer til politisk handling, og forklarer hvorfor partier tar ulike standpunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et politisk spørsmål (f.eks. innvandring eller miljø) og beskriv hvordan ulike ideologier kan se ulikt på det.',
        solution: 'Eksempel innvandring: Liberale vektlegger individuell frihet og åpne grenser. Sosialister fokuserer på solidaritet og menneskerettigheter. Konservative vektlegger nasjonal identitet og kontrollert innvandring. Nasjonalister vil ha streng begrensning. Alle har ulike verdier som grunnlag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_2: TextbookChapter = {
  id: 'samfunnskunnskap-5-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.2',
  title: 'De store ideologiene',
  description: 'Oversikt over de tre store politiske ideologiene: liberalisme, konservatisme og sosialisme.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for liberalisme, konservatisme og sosialisme',
    'sammenligne de store politiske ideologiene',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-2-intro',
      type: 'text',
      content: `## De tre store ideologiene

Liberalisme, konservatisme og sosialisme er de tre hovedideologiene som har formet moderne politikk. De oppstod i kjølvannet av den franske revolusjonen (1789) og industrialiseringen.

**Fellestrekk:**
Alle tre ideologiene har utviklet seg over tid og finnes i ulike varianter i dag. De har også lånt ideer fra hverandre.

**Viktig å huske:**
- Få mennesker er "rendyrkede" tilhengere av én ideologi
- Moderne partier kombinerer ofte elementer fra flere ideologier
- Ideologiene har endret seg betydelig siden 1800-tallet`,
    },
    {
      id: 'samfunnskunnskap-5-2-def-1',
      type: 'definition',
      title: 'Liberalisme',
      content: `**Opprinnelse:** 1600-1700-tallet, opplysningstiden

**Kjerneverdier:**
- Individuell frihet (mennesker som frie, selvstendige individer)
- Begrenset statsmakt
- Privat eiendomsrett
- Markedsøkonomi
- Likhet for loven
- Menneskerettigheter

**Syn på staten:**
Staten skal beskytte individets rettigheter, men ellers blande seg minst mulig inn i folks liv.

**Varianter:**
- **Klassisk liberalisme:** Minimal stat, nattvekterstat
- **Sosialliberalisme:** Staten kan gripe inn for å sikre like muligheter
- **Nyliberalisme:** Vektlegger marked og privatisering

**Norske partier:**
Venstre (sosialliberalt), Høyre og Frp (økonomisk liberale)

**Viktige tenkere:**
John Locke, Adam Smith, John Stuart Mill`,
    },
    {
      id: 'samfunnskunnskap-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de viktigste kjerneverdiene i liberalismen?',
        solution: 'Liberalismens kjerneverdier: Individuell frihet, begrenset statsmakt, privat eiendomsrett, markedsøkonomi, likhet for loven, menneskerettigheter. Individet står i sentrum, og staten skal beskytte individets rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-2-def-2',
      type: 'definition',
      title: 'Konservatisme',
      content: `**Opprinnelse:** Reaksjon på den franske revolusjonen (1789)

**Kjerneverdier:**
- Bevaring av det bestående
- Tradisjon og kontinuitet
- Skepsis til raske endringer
- Respekt for autoriteter og institusjoner
- Orden og stabilitet
- Nasjonale verdier og identitet

**Syn på staten:**
Staten skal opprettholde orden, men respektere tradisjonelle fellesskap som familie, kirke og lokalsamfunn.

**Syn på mennesket:**
Mennesket er ufullkomment og avhengig av fellesskap og tradisjoner for å fungere godt.

**Varianter:**
- **Tradisjonell konservatisme:** Vektlegger tradisjoner og institusjoner
- **Liberalkonservatisme:** Kombinerer konservative verdier med økonomisk liberalisme
- **Sosialkonservatisme:** Opptatt av familie og religiøse verdier

**Norske partier:**
Høyre, KrF

**Viktige tenkere:**
Edmund Burke, Roger Scruton`,
    },
    {
      id: 'samfunnskunnskap-5-2-ex-2a',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-2-ex-2a',
        number: '2',
        type: 'classic',
        task: 'Forklar konservatismens syn på endring og tradisjon.',
        solution: 'Konservatismen er skeptisk til raske endringer fordi de kan ødelegge verdifulle tradisjoner og institusjoner. Tradisjon ses som opphopet visdom fra tidligere generasjoner. Endringer bør skje gradvis og bygge på det bestående, ikke revolusjonært.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-2-def-3',
      type: 'definition',
      title: 'Sosialisme',
      content: `**Opprinnelse:** 1800-tallet, industrialiseringens sosiale problemer

**Kjerneverdier:**
- Likhet (økonomisk og sosial)
- Solidaritet
- Kollektivt eierskap (i ulike former)
- Arbeiderbevegelse
- Omfordeling
- Sterk stat

**Syn på staten:**
Staten skal aktivt gripe inn for å sikre rettferdig fordeling og motvirke markedets ulikheter.

**Varianter:**
- **Kommunisme:** Revolusjonær sosialisme, avskaffelse av privat eiendom (Marx)
- **Sosialdemokrati:** Reformistisk sosialisme, gradvis endring gjennom demokrati
- **Demokratisk sosialisme:** Radikal sosialisme, men demokratisk

**Norske partier:**
Ap (sosialdemokrati), SV (demokratisk sosialisme), Rødt (sosialisme)

**Viktige tenkere:**
Karl Marx, Friedrich Engels (kommunisme), Eduard Bernstein (sosialdemokrati)`,
    },
    {
      id: 'samfunnskunnskap-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom sosialdemokrati og kommunisme?',
        solution: 'Sosialdemokrati: Gradvis endring gjennom demokrati, aksepterer markedsøkonomi med regulering, vil reformere kapitalismen, ikke avskaffe den. Kommunisme: Revolusjonær endring, avskaffelse av privat eiendom og kapitalisme, klassekamp, planøkonomi. Begge er sosialistiske, men metode og mål skiller seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-2-example-1',
      type: 'example',
      title: 'Sammenligning: Hvordan bør staten håndtere fattigdom?',
      problem: `Hvordan vil de tre store ideologiene svare på spørsmålet om hvordan staten bør bekjempe fattigdom?`,
      solution: `**Liberalt svar:**
- Staten bør ikke nødvendigvis bekjempe fattigdom direkte
- Markedet skaper vekst som løfter alle
- Eventuelt: Gi folk like muligheter gjennom utdanning
- For mye velferd gjør folk avhengige

**Konservativt svar:**
- Familien og frivillige organisasjoner bør hjelpe først
- Staten kan ha en viss rolle, men ikke erstatte tradisjonelle fellesskap
- Vekt på personlig ansvar og arbeidsmoral
- Gradvis forbedring, ikke radikale endringer

**Sosialistisk svar:**
- Staten må aktivt omfordele gjennom skatter og velferd
- Fattigdom skyldes strukturelle årsaker, ikke individuell svakhet
- Universelle velferdsordninger for alle
- Redusere økonomisk ulikhet

**Konklusjon:**
Synet på fattigdom avhenger av grunnleggende verdier: Frihet (liberal), tradisjon/orden (konservativ), eller likhet (sosialistisk).`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-2-ex-2',
        number: '4',
        type: 'classic',
        task: 'Sammenlign konservatismens og sosialismens syn på endring.',
        solution: 'Konservatisme: Skeptisk til raske endringer, vil bevare det bestående, vektlegger tradisjon og kontinuitet, endringer må være gradvise. Sosialisme: Ønsker aktiv endring av samfunnet, vil fjerne urettferdighet, varierer fra reformistisk (gradvis) til revolusjonær (rask).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-2-ex-4',
        number: '5',
        type: 'classic',
        task: 'Hvilket norsk parti vil du knytte til hvilken ideologi, og begrunn.',
        solution: 'Eksempler: Venstre - sosialliberalisme (frihet, marked, men også sosiale hensyn). Høyre - liberalkonservatisme (markedsøkonomi, men bevaring av institusjoner). Ap - sosialdemokrati (omfordeling, velferd, men innenfor demokratisk kapitalisme). KrF - sosialkonservatisme (kristne verdier, familieverdier). SV/Rødt - demokratisk sosialisme (sterk stat, omfordeling, kritisk til kapitalisme).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_3: TextbookChapter = {
  id: 'samfunnskunnskap-5-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.3',
  title: 'Politiske skillelinjer og andre ideologier',
  description: 'Forstå politiske akser, GAL-TAN-modellen og andre ideologier som grønn ideologi, feminisme og nasjonalisme.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analysere politiske skillelinjer i norsk politikk',
    'gjøre rede for andre politiske ideologier',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-3-intro',
      type: 'text',
      content: `## Flere dimensjoner i politikken

Høyre-venstre-aksen fanger ikke opp alt. Moderne politikk har flere dimensjoner som krysser hverandre. I tillegg finnes ideologier som ikke passer inn i de tre store.

**Hvorfor trenger vi flere akser?**
- Partier som er enige økonomisk kan være uenige om verdier
- Nye saker (miljø, innvandring, EU) passer ikke alltid inn i gamle kategorier
- Velgere har meninger som går på tvers av tradisjonelle skillelinjer`,
    },
    {
      id: 'samfunnskunnskap-5-3-def-1',
      type: 'definition',
      title: 'GAL-TAN-modellen',
      content: `**GAL-TAN:**
En politisk akse som går på tvers av høyre-venstre:

**GAL (Grønn-Alternativ-Libertær):**
- Miljøvern og bærekraft
- Personlig frihet i verdispørsmål
- Åpenhet for nye familieformer
- Internasjonalt orientert
- Skeptisk til tradisjonelle autoriteter
- Støtter mangfold og multikulturalisme

**TAN (Tradisjonell-Autoritær-Nasjonalistisk):**
- Nasjonal identitet og suverenitet
- Tradisjonelle verdier og familieformer
- Lov og orden
- Skeptisk til innvandring
- Kritisk til overnasjonale institusjoner (EU)
- Vektlegger stabilitet og kontinuitet

**Eksempel:**
Et parti kan være økonomisk venstre (for omfordeling) men TAN (skeptisk til innvandring). Eller økonomisk høyre men GAL (for miljø og liberale verdier).`,
    },
    {
      id: 'samfunnskunnskap-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står GAL og TAN for i GAL-TAN-modellen?',
        solution: 'GAL: Grønn-Alternativ-Libertær. Vektlegger miljø, personlig frihet, åpenhet, internasjonalisme. TAN: Tradisjonell-Autoritær-Nasjonalistisk. Vektlegger tradisjon, lov og orden, nasjonal identitet, skepsis til innvandring og overnasjonale institusjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-3-def-2',
      type: 'definition',
      title: 'Andre ideologier',
      content: `**Grønn ideologi / Økologisme:**
- Miljøvern som overordnet verdi
- Bærekraftig utvikling
- Kritikk av økonomisk vekst
- MDG i Norge

**Feminisme:**
- Likestilling mellom kjønnene
- Bekjempe strukturell diskriminering
- Finnes i liberale, sosialistiske og radikale varianter

**Nasjonalisme:**
- Nasjonen som viktigste fellesskap
- Kan være moderat (nasjonal identitet) eller ekstrem (sjåvinisme)
- Skiller mellom civic (statsborgerskap) og etnisk nasjonalisme

**Kristendemokrati:**
- Kristen etikk som grunnlag
- Vekt på familie, solidaritet, subsidiaritet
- KrF i Norge

**Libertarianisme:**
- Ekstrem individuell frihet
- Minimal stat
- Skiller seg fra konservatisme ved å være verdiprogressiv`,
    },
    {
      id: 'samfunnskunnskap-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er grønn ideologi, og hvilket norsk parti representerer den?',
        solution: 'Grønn ideologi/økologisme har miljøvern som overordnet verdi, vektlegger bærekraft, er kritisk til ensidig fokus på økonomisk vekst. MDG (Miljøpartiet De Grønne) representerer denne ideologien i Norge. De vil sette naturen og miljøet først i politikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-3-example-1',
      type: 'example',
      title: 'Politiske skillelinjer i Norge',
      problem: `Hvilke politiske skillelinjer har preget norsk politikk, og hvordan ser de ut i dag?`,
      solution: `**Tradisjonelle skillelinjer:**

1. **Økonomisk venstre-høyre:**
   - Staten vs. markedet
   - Fortsatt viktig

2. **Sentrum-periferi:**
   - Oslo/storby vs. distrikt
   - Språk: Nynorsk vs. bokmål
   - Sp som distriktsparti

3. **Religiøs-sekulær:**
   - KrF vs. liberale partier
   - Abort, alkohol, søndagsåpent

4. **By-land:**
   - Overlapper med sentrum-periferi
   - Miljø, landbruk, naturvern

**Nyere skillelinjer:**

5. **Innvandring/integrering:**
   - Frp vs. SV
   - Krysser høyre-venstre

6. **Miljø/klima:**
   - MDG vs. Frp/Sp
   - Krysser også tradisjonelle akser

7. **EU/EØS:**
   - Sp, SV, Rødt vs. Høyre, Venstre
   - Ikke sammenfallende med høyre-venstre

**Konklusjon:**
Norsk politikk er kompleks - partiene skiller seg på mange ulike dimensjoner.`,
    },
    {
      id: 'samfunnskunnskap-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre politiske skillelinjer i norsk politikk.',
        solution: 'Tre av følgende: Økonomisk venstre-høyre, sentrum-periferi (by-land/distrikt), religiøs-sekulær, innvandring/integrering, miljø/klima, EU/EØS. Disse skillelinjene krysser hverandre og gjør at partier kan være enige på én akse men uenige på en annen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor GAL-TAN-modellen er nyttig i tillegg til høyre-venstre-aksen.',
        solution: 'GAL-TAN er nyttig fordi: 1) Den fanger opp verdispørsmål som ikke handler om økonomi, 2) Forklarer hvorfor partier som er enige økonomisk kan være uenige om innvandring, miljø eller verdier, 3) Viser at velgere har meninger på tvers av tradisjonelle kategorier, 4) Fanger opp nye politiske konflikter bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_4: TextbookChapter = {
  id: 'samfunnskunnskap-5-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.4',
  title: 'Populisme i vår tid',
  description: 'Forstå hva populisme er, hvordan den arter seg på høyre- og venstresiden, og hvilke utfordringer den stiller.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hva populisme er og dens ulike former',
    'reflektere over populismens utfordringer for demokratiet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-4-intro',
      type: 'text',
      content: `## Populismens fremmarsj

Populisme har blitt et av de mest diskuterte begrepene i moderne politikk. Fra Trump i USA til Brexit i Storbritannia, fra høyrepopulisme i Europa til venstrepopulisme i Latin-Amerika - populistiske bevegelser har vokst fram over hele verden.

**Men hva er egentlig populisme?**
Populisme er ikke en fullstendig ideologi som liberalisme eller sosialisme. Det er mer en politisk stil eller logikk som kan kombineres med ulike ideologier.

**Populismens kjennetegn:**
- Skiller mellom "folket" og "eliten"
- Hevder å representere det "ekte" folket
- Kritisk til etablerte institusjoner og partier
- Ofte karismatiske ledere
- Enkle løsninger på komplekse problemer`,
    },
    {
      id: 'samfunnskunnskap-5-4-def-1',
      type: 'definition',
      title: 'Hva er populisme?',
      content: `**Grunnidé:**
Populisme baserer seg på en motsetning mellom "folket" (godt, ærlig, hardtarbeidende) og "eliten" (korrupt, fjern, selvopptatt).

**Kjennetegn:**
1. **Antielitisme:** Kritikk av politikere, byråkrater, medier, akademikere
2. **Folket som enhet:** "Folket" fremstilles som homogent med felles interesser
3. **Direkte representasjon:** Lederen "snakker folkets språk"
4. **Kritikk av mellomliggende institusjoner:** Partier, medier, domstoler
5. **Forenkling:** Komplekse problemer får enkle løsninger

**Viktig:**
- Populisme er ikke det samme som å være folkelig
- Kan finnes både på høyre- og venstresiden
- Er ikke nødvendigvis anti-demokratisk, men kan utfordre liberalt demokrati`,
    },
    {
      id: 'samfunnskunnskap-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de viktigste kjennetegnene ved populisme?',
        solution: 'Populismens kjennetegn: 1) Motsetning mellom "folket" og "eliten", 2) Påstand om å representere det "ekte" folket, 3) Kritikk av etablerte institusjoner, 4) Ofte karismatiske ledere, 5) Forenkling av komplekse problemer, 6) Kritikk av mellomliggende institusjoner som medier og partier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-4-def-2',
      type: 'definition',
      title: 'Høyre- og venstrepopulisme',
      content: `**Høyrepopulisme:**
- "Eliten" = politikere, akademikere, medier (kulturell elite)
- "Folket" = nasjonen, de som "alltid har bodd her"
- Hovedfiende: Innvandring, globalisering, EU
- Eksempler: Frp i Norge, Trump (USA), Le Pen (Frankrike), AfD (Tyskland)

**Venstrepopulisme:**
- "Eliten" = de rike, store selskaper (økonomisk elite)
- "Folket" = arbeidere, vanlige folk
- Hovedfiende: Kapitalisme, økonomisk ulikhet
- Eksempler: Podemos (Spania), Syriza (Hellas), Bernie Sanders (USA)

**Likheter:**
- Begge kritiserer "systemet" og det etablerte
- Begge hevder å representere vanlige folk
- Begge bruker ofte karismatiske ledere

**Forskjeller:**
- Høyre fokuserer på kultur og identitet
- Venstre fokuserer på økonomi og klasse`,
    },
    {
      id: 'samfunnskunnskap-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på høyre- og venstrepopulisme?',
        solution: 'Høyrepopulisme: Fokuserer på kulturell elite, nasjonal identitet, er kritisk til innvandring og globalisering. Venstrepopulisme: Fokuserer på økonomisk elite, klassekamp, er kritisk til kapitalisme og ulikhet. Begge kritiserer "systemet" og hevder å representere vanlige folk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-4-example-1',
      type: 'example',
      title: 'Populismens utfordringer',
      problem: `Hvorfor er populisme omdiskutert, og kan den være en trussel mot demokratiet?`,
      solution: `**Argumenter FOR at populisme er problematisk:**

1. **Undergraver institusjoner:**
   - Kritikk av domstoler, medier, eksperter
   - Svekker "maktfordeling" og kontrollmekanismer

2. **Forenkler komplekse problemer:**
   - Lovnader som ikke kan holdes
   - Syndebukker istedenfor analyse

3. **Flertallstyranni:**
   - "Folkets vilje" over minoriteters rettigheter
   - Kan undergrave rettssikkerhet

4. **Polarisering:**
   - "Vi mot dem"-retorikk
   - Demonisering av motstandere

**Argumenter FOR at populisme har noe for seg:**

1. **Representerer reelle frustrasjoner:**
   - Mange føler seg ikke hørt
   - Ulikhet og globalisering skaper tapere

2. **Utfordrer selvtilfreds elite:**
   - Kan føre til nødvendig debatt
   - Politikere tvinges til å lytte

3. **Demokratisk mobilisering:**
   - Økt engasjement og valgdeltakelse
   - Nye stemmer inn i politikken

**Konklusjon:**
Populisme er både et symptom på problemer i demokratiet og en potensiell trussel mot det.`,
    },
    {
      id: 'samfunnskunnskap-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi eksempler på populistiske partier eller bevegelser i verden.',
        solution: 'Høyrepopulisme: Trump (USA), Le Pen/RN (Frankrike), AfD (Tyskland), Frp (Norge til dels), Brexit-bevegelsen (UK). Venstrepopulisme: Podemos (Spania), Syriza (Hellas), Bernie Sanders (USA), Chávez/Maduro (Venezuela). Listen viser at populisme finnes på begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Kan populisme være farlig for demokratiet?',
        solution: 'Farlig fordi: Undergraver institusjoner som domstoler og medier, forenkler komplekst, kan føre til flertallstyranni over minoriteter, skaper polarisering. Ikke nødvendigvis farlig fordi: Kan representere reelle frustrasjoner, utfordrer selvtilfreds elite, øker engasjement. Konklusjon: Populisme er et symptom og kan utfordre liberalt demokrati, men bekymringene det uttrykker bør tas på alvor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_5: TextbookChapter = {
  id: 'samfunnskunnskap-5-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.5',
  title: 'Grunnloven og maktfordeling',
  description: 'Lær om Grunnloven fra 1814 og hvordan makten er fordelt mellom de tre statsmaktene.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for Grunnlovens betydning',
    'forklare maktfordelingsprinsippet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-5-intro',
      type: 'text',
      content: `## Grunnloven - Norges fundament

Grunnloven fra 1814 er Norges viktigste lov og grunnlaget for hele vårt politiske system. Den fastsetter hvordan Norge skal styres og beskytter borgernes grunnleggende rettigheter.

**Grunnlovens historie:**
- Vedtatt 17. mai 1814 på Eidsvoll
- En av verdens eldste grunnlover fortsatt i bruk
- Inspirert av den amerikanske og franske revolusjonen
- Har blitt endret mange ganger, men grunntrekkene består

**Grunnlovens innhold:**
- Statens styreform og organisering
- Maktfordeling mellom statsmaktene
- Borgernes grunnleggende rettigheter
- Regler for grunnlovsendringer`,
    },
    {
      id: 'samfunnskunnskap-5-5-def-1',
      type: 'definition',
      title: 'Maktfordelingsprinsippet',
      content: `**Hva er maktfordeling?**
Statsmakten er delt i tre for å hindre maktmisbruk. Ideen kommer fra Montesquieu (1748).

**De tre statsmaktene:**

1. **Stortinget - den lovgivende makt:**
   - Vedtar lover
   - Vedtar statsbudsjettet
   - Kontrollerer regjeringen
   - 169 folkevalgte representanter

2. **Regjeringen - den utøvende makt:**
   - Leder den daglige styringen av landet
   - Foreslår lover og budsjett
   - Setter lover ut i livet
   - Ledes av statsministeren

3. **Domstolene - den dømmende makt:**
   - Avgjør rettstvister
   - Tolker lovene
   - Kan prøve om lover strider mot Grunnloven
   - Høyesterett øverst

**Formål:**
- Hindre maktkonsentrasjon
- Sikre kontroll og balanse
- Beskytte borgerne mot overgrep`,
    },
    {
      id: 'samfunnskunnskap-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-5-ex-2',
        number: '1',
        type: 'classic',
        task: 'Forklar maktfordelingsprinsippet og nevn de tre statsmaktene.',
        solution: 'Maktfordelingsprinsippet: Statsmakten deles i tre for å hindre maktmisbruk. De tre statsmaktene: 1) Stortinget (lovgivende) - vedtar lover og budsjett, 2) Regjeringen (utøvende) - leder landet og setter lover ut i livet, 3) Domstolene (dømmende) - avgjør rettstvister og tolker lover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-5-def-2',
      type: 'definition',
      title: 'Grunnlovens rettigheter',
      content: `**Menneskerettighetskapittelet (kapittel E):**
Etter revisjonen i 2014 inneholder Grunnloven et styrket rettighetsvern:

**Sivile og politiske rettigheter:**
- Ytringsfrihet (§ 100)
- Religionsfrihet (§ 16)
- Forsamlings- og foreningsfrihet (§ 101)
- Stemmerett (§ 50)
- Rettssikkerhet (§ 96)
- Vern av privatlivet (§ 102)

**Økonomiske, sosiale og kulturelle rettigheter:**
- Rett til utdanning (§ 109)
- Rett til arbeid (§ 110)
- Rett til et sunt miljø (§ 112)
- Barns rettigheter (§ 104)

**Viktig:**
Grunnloven har høyere rang enn vanlige lover. Lover som strider mot Grunnloven kan settes til side av domstolene.`,
    },
    {
      id: 'samfunnskunnskap-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-5-ex-3',
        number: '2',
        type: 'classic',
        task: 'Nevn fire rettigheter som er beskyttet i Grunnloven.',
        solution: 'Fire av følgende: Ytringsfrihet, religionsfrihet, forsamlings- og foreningsfrihet, stemmerett, rettssikkerhet, vern av privatlivet, rett til utdanning, rett til arbeid, rett til sunt miljø, barns rettigheter. Rettighetene beskytter borgerne mot overgrep fra staten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-5-example-1',
      type: 'example',
      title: 'Grunnlovsendring',
      problem: `Hvordan kan Grunnloven endres, og hvorfor er det så vanskelig?`,
      solution: `**Prosessen for grunnlovsendring:**

1. **Forslag:**
   - Må fremmes i løpet av de tre første stortingsårene i en valgperiode
   - Behandles ikke av samme Storting som foreslår

2. **Valg:**
   - Det må være et stortingsvalg mellom forslag og vedtak
   - Velgerne får indirekte si sin mening

3. **Vedtak:**
   - Vedtas av neste Storting
   - Krever 2/3 flertall (minst 113 av 169 representanter)
   - Minst 2/3 av representantene må være til stede

**Hvorfor så vanskelig?**
- Grunnloven skal være stabil
- Viktige prinsipper skal ikke endres på impuls
- Befolkningen skal ha tid til å vurdere endringer
- Bred enighet sikrer legitimitet

**Eksempel:**
Grunnlovsrevisjonen i 2014 tok mange år å forberede, men ble vedtatt med stort flertall og styrket menneskerettighetsvernet betydelig.`,
    },
    {
      id: 'samfunnskunnskap-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-5-ex-4',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det vanskeligere å endre Grunnloven enn vanlige lover?',
        solution: 'Vanskeligere fordi: 1) Forslag må fremmes tidlig i valgperioden, 2) Det må være valg mellom forslag og vedtak, 3) Krever 2/3 flertall på Stortinget. Formålet er at Grunnloven skal være stabil, viktige prinsipper ikke endres på impuls, og befolkningen skal ha tid til å vurdere endringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-5-ex-1',
        number: '4',
        type: 'classic',
        task: 'Hva er Grunnloven, og hvorfor er den viktig?',
        solution: 'Grunnloven er Norges høyeste lov, vedtatt 17. mai 1814. Den er viktig fordi: Den fastsetter statens styreform, fordeler makt mellom statsmaktene, beskytter borgernes grunnleggende rettigheter, og har høyere rang enn vanlige lover. Den er grunnlaget for hele det norske demokratiet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_6: TextbookChapter = {
  id: 'samfunnskunnskap-5-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.6',
  title: 'Stortinget',
  description: 'Lær om Stortingets oppgaver, organisering og arbeidsmåte.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for Stortingets oppgaver og organisering',
    'forstå hvordan lovgivning og budsjettering fungerer',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-6-intro',
      type: 'text',
      content: `## Stortinget - folkets forsamling

Stortinget er Norges nasjonalforsamling og den lovgivende makt. Her vedtas lovene, budsjettet og de store politiske avgjørelsene.

**Stortingets hovedoppgaver:**
- Vedta lover
- Vedta statsbudsjettet
- Kontrollere regjeringen
- Debattere viktige samfunnsspørsmål
- Behandle forslag fra regjeringen og representantene

**169 representanter:**
Representantene velges fra 19 valgdistrikter (fylkene) for fire år. Stortinget kan ikke oppløses - det sitter alltid i hele perioden.`,
    },
    {
      id: 'samfunnskunnskap-5-6-def-1',
      type: 'definition',
      title: 'Stortingets organisering',
      content: `**Stortingspresidenten:**
- Leder Stortingets arbeid
- Leder debatten i stortingssalen
- Representerer Stortinget utad
- Velges av representantene

**Partigruppene:**
- Representantene organiseres i partigrupper
- Har gruppemøter for å samordne standpunkter
- Har parlamentariske ledere

**Komiteene:**
- Sakene behandles først i fagkomiteer (12 stk)
- Eksempler: Finanskomiteen, justiskomiteen, helse- og omsorgskomiteen
- Komiteen avgir innstilling til Stortinget i plenum

**Plenum:**
- Alle 169 representanter samlet
- Her debatteres og voteres det over saker
- Votering ved elektronisk avstemning`,
    },
    {
      id: 'samfunnskunnskap-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-6-ex-2',
        number: '1',
        type: 'classic',
        task: 'Forklar hva en stortingskomité er og hvordan den arbeider.',
        solution: 'Stortingskomiteene er fagkomiteer der sakene behandles først. Det finnes 12 komiteer (f.eks. finanskomiteen, justiskomiteen). Representantene fordeles på komiteene. Komiteen studerer saken, holder høringer, diskuterer og avgir innstilling til Stortinget i plenum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-6-def-2',
      type: 'definition',
      title: 'Stortingets kontroll med regjeringen',
      content: `**Kontrollmekanismer:**

1. **Spørretimen:**
   - Representanter stiller spørsmål til statsrådene
   - Muntlig spørretime hver onsdag
   - Skriftlige spørsmål hele tiden

2. **Interpellasjoner:**
   - Lengre debatter om viktige saker
   - Statsråden svarer og det blir debatt

3. **Kontroll- og konstitusjonskomiteen:**
   - Kontrollerer regjeringens arbeid
   - Kan gjennomføre høringer

4. **Riksrevisjonen:**
   - Stortingets organ for kontroll av statens økonomi
   - Sjekker at pengene brukes riktig

5. **Stortingets ombudsmann for forvaltningen:**
   - Kontrollerer at forvaltningen behandler borgere riktig

6. **Mistillitsforslag:**
   - Stortinget kan felle regjeringen
   - Krever flertall mot regjeringen`,
    },
    {
      id: 'samfunnskunnskap-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-6-ex-3',
        number: '2',
        type: 'classic',
        task: 'Nevn tre måter Stortinget kontrollerer regjeringen på.',
        solution: 'Tre av følgende: Spørretimen (muntlig og skriftlig), interpellasjoner, kontroll- og konstitusjonskomiteen, Riksrevisjonen, Stortingets ombudsmann, mistillitsforslag. Kontrollfunksjonen sikrer at regjeringen er ansvarlig overfor folket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-6-example-1',
      type: 'example',
      title: 'Hvordan en lov blir til',
      problem: `Hvordan går veien fra idé til vedtatt lov på Stortinget?`,
      solution: `**Lovprosessen steg for steg:**

1. **Initiativ:**
   - Regjeringen fremmer de fleste lovforslag (proposisjoner)
   - Stortingsrepresentanter kan også foreslå lover (representantforslag)

2. **Utredning:**
   - Regjeringen utreder behovet for ny lov
   - Ofte settes ned et offentlig utvalg
   - Forslaget sendes på høring

3. **Proposisjon:**
   - Regjeringen fremmer proposisjon til Stortinget

4. **Komitébehandling:**
   - Fagkomiteen behandler forslaget
   - Holder høringer, innhenter synspunkter
   - Avgir innstilling til Stortinget

5. **Debatt og vedtak:**
   - Stortinget debatterer i plenum
   - Votering (vanlig flertall kreves)

6. **Sanksjon:**
   - Kongen signerer loven (formell godkjennelse)
   - Loven kunngjøres i Lovdata

7. **Ikrafttredelse:**
   - Loven trer i kraft på et bestemt tidspunkt`,
    },
    {
      id: 'samfunnskunnskap-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-6-ex-4',
        number: '3',
        type: 'classic',
        task: 'Beskriv hovedtrinnene i hvordan en lov blir til.',
        solution: 'Hovedtrinnene: 1) Initiativ fra regjering eller representant, 2) Utredning og høring, 3) Proposisjon fremmes, 4) Komitébehandling, 5) Debatt og votering i plenum, 6) Kongelig sanksjon, 7) Kunngjøring og ikrafttredelse. Prosessen sikrer grundig behandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-6-ex-1',
        number: '4',
        type: 'classic',
        task: 'Hva er Stortingets viktigste oppgaver?',
        solution: 'Stortingets viktigste oppgaver: 1) Vedta lover, 2) Vedta statsbudsjettet, 3) Kontrollere regjeringen, 4) Debattere viktige samfunnsspørsmål, 5) Behandle forslag fra regjeringen og representantene. Stortinget er den lovgivende makt i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_7: TextbookChapter = {
  id: 'samfunnskunnskap-5-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.7',
  title: 'Regjeringen',
  description: 'Lær om regjeringens rolle, parlamentarisme og departementene.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for regjeringens oppgaver og organisering',
    'forstå parlamentarismen og hvordan regjeringer dannes',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-7-intro',
      type: 'text',
      content: `## Regjeringen - den utøvende makt

Regjeringen leder den daglige styringen av Norge. Den foreslår lover og budsjett, og setter vedtakene fra Stortinget ut i livet.

**Regjeringens sammensetning:**
- Statsministeren leder regjeringen
- Statsrådene (ministrene) leder hvert sitt departement
- Antallet varierer, men ligger vanligvis på 18-22 statsråder

**Regjeringens hovedoppgaver:**
- Lede landet og forvaltningen
- Foreslå lover og budsjett til Stortinget
- Sette lover og vedtak ut i livet
- Representere Norge internasjonalt`,
    },
    {
      id: 'samfunnskunnskap-5-7-def-1',
      type: 'definition',
      title: 'Parlamentarisme',
      content: `**Hva er parlamentarisme?**
Regjeringen må ha Stortingets tillit for å sitte. Hvis flertallet er mot regjeringen, må den gå av.

**Kjennetegn:**
- Regjeringen er avhengig av Stortingets støtte
- Stortinget kan felle regjeringen med mistillitsforslag
- Regjeringen utgår fra stortingsflertallet

**Positiv vs. negativ parlamentarisme:**
- Norge har negativ parlamentarisme
- Det kreves aktivt flertall MOT regjeringen for å felle den
- Regjeringen trenger ikke aktivt flertall FOR seg

**Regjeringstyper:**
- **Flertallsregjering:** Partiene har flertall på Stortinget (sjelden i Norge)
- **Mindretallsregjering:** Må søke støtte sak for sak (vanligst i Norge)
- **Koalisjonsregjering:** Flere partier i regjering sammen`,
    },
    {
      id: 'samfunnskunnskap-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-7-ex-2',
        number: '1',
        type: 'classic',
        task: 'Forklar hva parlamentarisme betyr.',
        solution: 'Parlamentarisme betyr at regjeringen må ha Stortingets tillit for å sitte. Hvis flertallet er mot regjeringen, må den gå av. Norge har negativ parlamentarisme - det kreves aktivt flertall MOT regjeringen for å felle den, ikke aktivt flertall FOR.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-7-def-2',
      type: 'definition',
      title: 'Departementene',
      content: `**Hva er departementene?**
Departementene er regjeringens sekretariater, ledet av hver sin statsråd.

**Viktige departementer:**
- Statsministerens kontor (SMK)
- Finansdepartementet
- Utenriksdepartementet
- Justis- og beredskapsdepartementet
- Helse- og omsorgsdepartementet
- Kunnskapsdepartementet
- Arbeids- og inkluderingsdepartementet

**Departementenes oppgaver:**
- Forberede saker for statsråden
- Utforme lovforslag og forskrifter
- Følge opp vedtak fra Stortinget
- Styre underliggende etater (direktorater)

**Direktorater og etater:**
Under departementene ligger direktorater og etater som utfører praktiske oppgaver:
- NAV
- Skatteetaten
- Utdanningsdirektoratet
- Politidirektoratet`,
    },
    {
      id: 'samfunnskunnskap-5-7-ex-dep',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-7-ex-dep',
        number: '2',
        type: 'classic',
        task: 'Hva er et departement, og nevn to eksempler.',
        solution: 'Et departement er regjeringens sekretariat, ledet av en statsråd. Eksempler: Finansdepartementet (ansvar for statsbudsjettet), Kunnskapsdepartementet (skole og utdanning), Helse- og omsorgsdepartementet (helse), Justis- og beredskapsdepartementet (politi og rettsvesen).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-7-example-1',
      type: 'example',
      title: 'Regjeringsdannelse',
      problem: `Hvordan dannes en ny regjering etter et stortingsvalg?`,
      solution: `**Prosessen etter valg:**

1. **Valgresultatet:**
   - Viser hvilke partier som har flertall
   - Velgerne har gitt signaler om regjeringsalternativer

2. **Sonderinger:**
   - Kongen gir sittende statsminister i oppdrag å sondere
   - Dersom det er klart regjeringsskifte, sonderer valgvinneren

3. **Regjeringsforhandlinger:**
   - Partiene som skal samarbeide forhandler
   - Enighet om politisk plattform (Hurdalsplattformen, Solberg-erklæringen)
   - Fordeling av statsrådsposter

4. **Utnevnelse:**
   - Kongen utnevner statsminister og statsråder i statsråd
   - Formell seremoni på Slottet

5. **Regjeringserklæring:**
   - Den nye regjeringen presenterer sin politikk for Stortinget

**Eksempel 2021:**
Etter valget ble det klart at Ap og Sp ville danne regjering. Forhandlet frem Hurdalsplattformen. SV valgte å stå utenfor, men støtter ofte regjeringen.`,
    },
    {
      id: 'samfunnskunnskap-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-7-ex-4',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan en ny regjering dannes etter et stortingsvalg.',
        solution: 'Prosessen: 1) Valgresultatet viser maktfordelingen, 2) Sonderinger om hvem som kan danne regjering, 3) Regjeringsforhandlinger og politisk plattform, 4) Kongen utnevner statsminister og statsråder, 5) Regjeringen presenterer politikken for Stortinget. Prosessen tar noen uker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-7-ex-1',
        number: '4',
        type: 'classic',
        task: 'Hva er regjeringens viktigste oppgaver?',
        solution: 'Regjeringens viktigste oppgaver: 1) Lede landet og forvaltningen, 2) Foreslå lover og budsjett til Stortinget, 3) Sette lover og vedtak ut i livet, 4) Representere Norge internasjonalt. Regjeringen er den utøvende makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-7-ex-3',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen på flertalls- og mindretallsregjering?',
        solution: 'Flertallsregjering: Regjeringspartiene har over halvparten av mandatene på Stortinget, kan vedta saker uten støtte fra andre. Mindretallsregjering: Regjeringspartiene har under halvparten, må søke støtte sak for sak. I Norge er mindretallsregjeringer vanligst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_8: TextbookChapter = {
  id: 'samfunnskunnskap-5-8',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.8',
  title: 'Domstolene',
  description: 'Lær om rettssystemet, domstolshierarkiet og rettssikkerhet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for domstolenes rolle og organisering',
    'forstå rettssikkerhetens betydning',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-8-intro',
      type: 'text',
      content: `## Domstolene - den dømmende makt

Domstolene er den tredje statsmakten. De avgjør rettstvister og tolker lovene. Uavhengige domstoler er en grunnpilar i rettsstaten.

**Domstolenes oppgaver:**
- Avgjøre straffesaker (er tiltalte skyldig?)
- Avgjøre sivile saker (tvister mellom parter)
- Tolke og anvende lovene
- Kontrollere at lover ikke strider mot Grunnloven

**Domstolenes uavhengighet:**
Domstolene skal være uavhengige av de andre statsmaktene. Verken regjering eller Storting kan instruere dommerne i hvordan de skal dømme.`,
    },
    {
      id: 'samfunnskunnskap-5-8-def-1',
      type: 'definition',
      title: 'Domstolshierarkiet',
      content: `**Tingrettene:**
- Første instans for de fleste saker
- 60 tingretter i Norge
- Behandler både straffesaker og sivile saker

**Lagmannsrettene:**
- Andre instans - ankedomstol
- 6 lagmannsretter i Norge
- Prøver saker på nytt etter anke

**Høyesterett:**
- Øverste domstol
- 20 dommere, ledes av justitiarius
- Behandler prinsipielle saker
- Avgjørelsene er endelige
- Kan prøve om lover strider mot Grunnloven

**Spesialdomstoler:**
- Jordskifterettene
- Arbeidsretten
- Trygderetten`,
    },
    {
      id: 'samfunnskunnskap-5-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-8-ex-2',
        number: '1',
        type: 'classic',
        task: 'Beskriv domstolshierarkiet i Norge.',
        solution: 'Domstolshierarkiet: 1) Tingrettene - første instans for de fleste saker, 2) Lagmannsrettene - andre instans/ankedomstol, 3) Høyesterett - øverste domstol, behandler prinsipielle saker, avgjørelsene er endelige. I tillegg finnes spesialdomstoler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-8-def-2',
      type: 'definition',
      title: 'Rettssikkerhet',
      content: `**Hva er rettssikkerhet?**
Borgernes vern mot overgrep fra staten og garantier for en rettferdig behandling.

**Grunnleggende prinsipper:**
1. **Legalitetsprinsippet:** Ingen straff uten lov
2. **Uskyldspresumsjon:** Uskyldig inntil det motsatte er bevist
3. **Rett til forsvarer:** Alle har rett til juridisk bistand
4. **Offentlighet:** Rettssaker er som hovedregel åpne
5. **Kontradiksjon:** Rett til å imøtegå motpartens påstander
6. **Ankerett:** Mulighet til å få saken prøvd på nytt

**Dobbeltstraff:**
Man kan ikke straffes to ganger for samme handling (ne bis in idem).

**Domstolskontroll:**
Domstolene kan kontrollere at forvaltningen følger loven og at lover ikke strider mot Grunnloven.`,
    },
    {
      id: 'samfunnskunnskap-5-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-8-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hva betyr rettssikkerhet, og nevn tre prinsipper som sikrer den.',
        solution: 'Rettssikkerhet er borgernes vern mot overgrep fra staten. Tre av følgende prinsipper: Legalitetsprinsippet (ingen straff uten lov), uskyldspresumsjon, rett til forsvarer, offentlighet, kontradiksjon, ankerett, forbud mot dobbeltstraff.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-8-example-1',
      type: 'example',
      title: 'En straffesak gjennom rettssystemet',
      problem: `Hvordan går en straffesak gjennom det norske rettssystemet?`,
      solution: `**Steg for steg:**

1. **Anmeldelse/Etterforskning:**
   - Politiet etterforsker saken
   - Samler bevis, avhører vitner og mistenkte

2. **Påtaleavgjørelse:**
   - Påtalemyndigheten avgjør om det skal tas ut tiltale
   - Kan også henlegges eller gi forelegg

3. **Tingrett:**
   - Saken behandles i første instans
   - Bevisføring, prosedyrer, dom
   - I alvorlige saker: Meddomsrett (1 fagdommer + 2 lekdommere)

4. **Anke til lagmannsrett:**
   - Parten som tapte kan anke
   - Saken prøves på nytt

5. **Anke til Høyesterett:**
   - Kun prinsipielle saker
   - Må godkjennes av ankeutvalget
   - Ofte kun spørsmål om rettsanvendelse

**Soningsforhold:**
Hvis dømt til fengsel, sones straffen i fengsel. Norge har fokus på rehabilitering, ikke bare straff.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-8-ex-1',
        number: '3',
        type: 'classic',
        task: 'Hva er domstolenes hovedoppgaver?',
        solution: 'Domstolenes hovedoppgaver: 1) Avgjøre straffesaker, 2) Avgjøre sivile saker (tvister mellom parter), 3) Tolke og anvende lovene, 4) Kontrollere at lover ikke strider mot Grunnloven. Domstolene er den dømmende makt i maktfordelingsprinsippet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig at domstolene er uavhengige?',
        solution: 'Domstolenes uavhengighet er viktig fordi: 1) Sikrer rettferdig behandling uten politisk påvirkning, 2) Beskytter borgerne mot maktmisbruk, 3) Sikrer at alle behandles likt uavhengig av status, 4) Er en grunnpilar i rettsstaten og maktfordelingen, 5) Gir tillit til rettssystemet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_9: TextbookChapter = {
  id: 'samfunnskunnskap-5-9',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.9',
  title: 'Politiske partier',
  description: 'Lær om partilandskapet, partienes rolle og finansiering.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for partienes funksjon i demokratiet',
    'forstå hvordan partier organiseres og finansieres',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-9-intro',
      type: 'text',
      content: `## Partienes rolle i det norske demokratiet

Politiske partier er bindeleddet mellom folket og makten. De samler folk med lignende synspunkter, utvikler politikk og stiller kandidater til valg.

**Partienes funksjoner:**
- Rekruttere og skolere politikere
- Utvikle politiske programmer
- Mobilisere velgere og øke engasjement
- Forenkle valgene for velgerne
- Koble folkets ønsker til politiske vedtak
- Holde regjeringen ansvarlig (opposisjon)

**Partienes betydning:**
Uten partier ville det være vanskelig å organisere demokratisk styring. Partiene gir struktur til politikken og gjør det mulig for velgere å sammenligne alternativer.`,
    },
    {
      id: 'samfunnskunnskap-5-9-def-1',
      type: 'definition',
      title: 'Partienes organisering',
      content: `**Hierarkisk oppbygging:**

1. **Lokallag:**
   - Grunnenheten i partiorganisasjonen
   - Verving, lokalvalgkamp, lokalpolitikk
   - Nominerer kommunestyrekandidater

2. **Fylkeslag:**
   - Koordinerer arbeidet i fylket
   - Nominerer stortingskandidater
   - Fylkestingsvalg

3. **Sentralt nivå:**
   - Partisekretariat og hovedkontor
   - Nasjonal strategi og kommunikasjon
   - Stortingsgruppen (de folkevalgte)

4. **Landsmøtet:**
   - Partiets øverste organ
   - Vedtar partiprogram
   - Velger partileder og sentralstyre

**Ungdomspartier:**
Alle stortingspartiene har ungdomspartier (AUF, Unge Høyre, FpU, SU, etc.). Viktige for rekruttering og politisk skolering.`,
    },
    {
      id: 'samfunnskunnskap-5-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-9-ex-2',
        number: '1',
        type: 'classic',
        task: 'Beskriv partienes organisasjonsstruktur.',
        solution: 'Partienes struktur: 1) Lokallag - grunnenheten, verving og lokalpolitikk, 2) Fylkeslag - koordinerer fylkesarbeidet, nominerer stortingskandidater, 3) Sentralt nivå - hovedkontor, nasjonal strategi, stortingsgruppe, 4) Landsmøtet - øverste organ, vedtar program, velger leder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-9-def-2',
      type: 'definition',
      title: 'Partienes finansiering',
      content: `**Inntektskilder:**

1. **Statlig partistøtte:**
   - Hoveddelen av partienes inntekter
   - Fordeles etter oppslutning (stemmestøtte)
   - Også grunnstøtte og støtte til ungdomspartier

2. **Medlemskontingent:**
   - Medlemmene betaler årlig avgift
   - Varierer mellom partiene
   - Relativt beskjeden andel av inntektene

3. **Gaver og bidrag:**
   - Private donorer
   - Organisasjoner (LO til Ap, NHO-kretser til Høyre)
   - Må offentliggjøres over visse beløp

4. **Lotteriinntekter:**
   - Noen partier har egne lotterier

**Regler og åpenhet:**
- Alle bidrag over 35 000 kr må offentliggjøres
- Anonyme bidrag over 12 000 kr er forbudt
- Utenlandske bidrag er begrenset
- Partifinansiering skal sikre åpenhet og forhindre korrupsjon`,
    },
    {
      id: 'samfunnskunnskap-5-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-9-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hvordan finansieres politiske partier i Norge?',
        solution: 'Finansieringskilder: 1) Statlig partistøtte (hoveddelen) - fordeles etter oppslutning, 2) Medlemskontingent, 3) Gaver og bidrag fra private/organisasjoner, 4) Lotteriinntekter. Bidrag over 35 000 kr må offentliggjøres, anonyme bidrag over 12 000 kr er forbudt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-9-example-1',
      type: 'example',
      title: 'Nominasjonsprosessen',
      problem: `Hvordan blir man stortingskandidat for et parti?`,
      solution: `**Veien til en stortingsplass:**

1. **Bli medlem:**
   - Start med å melde deg inn i partiet
   - Vær aktiv i lokallaget

2. **Profilere seg:**
   - Ta verv i lokallag/ungdomsparti
   - Bli kjent med andre medlemmer
   - Delta i politisk arbeid

3. **Nominasjonsprosessen:**
   - Fylkeslaget setter ned nominasjonskomité
   - Komitéen foreslår kandidater
   - Lokallag uttaler seg
   - Fylkesårsmøte/nominasjonsmøte vedtar listen

4. **Plassering på listen:**
   - Førstekandidaten har størst sjanse
   - Sikker plass vs. usikker plass
   - Mange faktorer: Erfaring, geografi, kjønn, alder

5. **Valgkamp:**
   - Kandidatene driver valgkamp
   - Velgerne stemmer på partiet (ikke enkeltpersoner)
   - Personstemmer kan endre rekkefølgen (begrenset effekt)

**Realistisk vurdering:**
Det tar vanligvis mange år å bygge seg opp i et parti. De fleste stortingsrepresentanter har lang fartstid som lokalpolitikere eller i ungdomspartiet.`,
    },
    {
      id: 'samfunnskunnskap-5-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-9-ex-4',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan nominasjonsprosessen til stortingsvalg fungerer.',
        solution: 'Nominasjonsprosessen: Fylkeslaget setter ned nominasjonskomité som foreslår kandidater. Lokallag uttaler seg. Fylkesårsmøte/nominasjonsmøte vedtar listen. Plassering på listen avgjør sjansen for å komme inn. Velgerne kan gi personstemmer, men dette har begrenset effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-9-ex-1',
        number: '4',
        type: 'classic',
        task: 'Hvilke funksjoner har politiske partier i et demokrati?',
        solution: 'Partienes funksjoner: Rekruttere og skolere politikere, utvikle politiske programmer, mobilisere velgere, forenkle valgene for velgerne, koble folkets ønsker til politiske vedtak, holde regjeringen ansvarlig (opposisjon). Partiene er bindeleddet mellom folk og makt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_10: TextbookChapter = {
  id: 'samfunnskunnskap-5-10',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.10',
  title: 'Hvordan en lov blir til',
  description: 'Følg lovprosessen fra idé til vedtatt lov.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for hvordan lover vedtas i Norge',
    'forstå de ulike stegene i lovprosessen',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-10-intro',
      type: 'text',
      content: `## Fra idé til lov

Å lage en ny lov er en omfattende prosess som involverer mange aktører og tar lang tid. Prosessen sikrer at lovene er grundig gjennomtenkt og har bred forankring.

**Hvorfor tar det tid?**
- Sikrer at alle synspunkter blir hørt
- Gir eksperter mulighet til å vurdere forslaget
- Demokratisk forankring gjennom debatt
- Kvalitetssikring av juridisk innhold

**Hvem kan foreslå lover?**
- Regjeringen (de fleste lovforslag)
- Stortingsrepresentanter (representantforslag)
- Stortinget kan også be regjeringen utrede en sak`,
    },
    {
      id: 'samfunnskunnskap-5-10-def-1',
      type: 'definition',
      title: 'Lovprosessens faser',
      content: `**1. Initiativfasen:**
- Idé om behov for ny lov oppstår
- Kan komme fra regjering, Storting, organisasjoner, medier

**2. Utredningsfasen:**
- Departementet utreder behovet
- Offentlig utvalg kan settes ned (NOU)
- Grundig analyse av problemet og mulige løsninger

**3. Høringsfasen:**
- Forslaget sendes på høring (3 mnd)
- Organisasjoner, kommuner, fagmiljøer uttaler seg
- Alle høringsuttalelser er offentlige

**4. Proposisjonsfasen:**
- Regjeringen utarbeider proposisjon
- Fremmes for Stortinget

**5. Komitéfasen:**
- Fagkomiteen behandler forslaget
- Holder høringer, innhenter synspunkter
- Avgir innstilling til Stortinget

**6. Vedtaksfasen:**
- Debatt og votering i Stortinget
- Vanlig flertall kreves

**7. Sanksjon og ikrafttredelse:**
- Kongen sanksjonerer loven
- Loven kunngjøres og trer i kraft`,
    },
    {
      id: 'samfunnskunnskap-5-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hovedfasene i lovprosessen.',
        solution: 'Hovedfasene: 1) Initiativ - idé om behov, 2) Utredning - departement/utvalg analyserer, 3) Høring - innspill fra berørte, 4) Proposisjon - regjeringens forslag, 5) Komitébehandling - Stortinget vurderer, 6) Vedtak - debatt og votering, 7) Sanksjon og ikrafttredelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-10-def-2',
      type: 'definition',
      title: 'Viktige dokumenttyper',
      content: `**NOU - Norges offentlige utredninger:**
- Utredninger fra offentlige utvalg
- Grundig analyse av et område
- Ofte utgangspunkt for lovforslag

**Høringer:**
- Skriftlige innspill fra berørte parter
- Sikrer at alle stemmer høres
- Offentlig tilgjengelige

**Proposisjoner:**
- Lovproposisjoner (Prop. L)
- Stortingsproposisjoner (Prop. S) - andre saker
- Regjeringens forslag til Stortinget

**Innstillinger:**
- Komiteens vurdering og anbefaling
- Grunnlag for debatt i Stortinget

**Lovteksten:**
- Den endelige vedtatte loven
- Kunngjøres i Lovdata`,
    },
    {
      id: 'samfunnskunnskap-5-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-10-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på en NOU og en proposisjon?',
        solution: 'NOU: Utredning fra offentlig utvalg, grundig analyse av et område, ofte utgangspunkt for lovforslag. Proposisjon: Regjeringens konkrete forslag til Stortinget, kommer senere i prosessen, inneholder selve lovteksten. NOU analyserer, proposisjon foreslår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-10-example-1',
      type: 'example',
      title: 'Eksempel: Ny klimalov',
      problem: `Hvordan ble klimarammeverket til i Norge?`,
      solution: `**Klimaloven (2017) - prosessen:**

1. **Bakgrunn:**
   - Parisavtalen forpliktet Norge
   - Behov for juridisk forpliktende klimamål
   - Press fra miljøbevegelsen

2. **Utredning:**
   - Departementet utredet ulike modeller
   - Så på andre lands klimalover

3. **Høring:**
   - Brede høringer med mange innspill
   - Miljøorganisasjoner, næringsliv, kommuner

4. **Proposisjon:**
   - Regjeringen fremmet forslag
   - Inneholdt klimamål for 2030 og 2050

5. **Stortingsbehandling:**
   - Energi- og miljøkomiteen behandlet
   - Debatt om hvor ambisiøse mål
   - Vedtatt med bredt flertall

6. **Resultatet:**
   - Loven setter langsiktige klimamål
   - Årlig rapportering til Stortinget
   - Juridisk forpliktende rammeverk

**Lærdommen:**
Lovprosessen sikrer at viktige beslutninger tas på et solid grunnlag med bred deltakelse.`,
    },
    {
      id: 'samfunnskunnskap-5-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-10-ex-2',
        number: '3',
        type: 'classic',
        task: 'Hva er en høring, og hvorfor er den viktig?',
        solution: 'En høring er når lovforslag sendes ut til berørte parter for innspill (vanligvis 3 mnd). Viktig fordi: Sikrer at alle stemmer høres, avdekker problemer, gir faglig kvalitetssikring, styrker demokratisk legitimitet. Høringssvarene er offentlige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor tar lovprosessen så lang tid?',
        solution: 'Lovprosessen tar tid fordi: 1) Sikrer grundig utredning av konsekvenser, 2) Gir alle berørte mulighet til å uttale seg, 3) Sikrer faglig kvalitet, 4) Demokratisk forankring gjennom debatt, 5) Hindrer forhastede beslutninger, 6) Komplekse saker krever tid. Kvalitet prioriteres over hastighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_11: TextbookChapter = {
  id: 'samfunnskunnskap-5-11',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.11',
  title: 'Lokalpolitikk',
  description: 'Lær om kommuner, fylker og lokalt selvstyre.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gjøre rede for lokalt selvstyre',
    'forstå forholdet mellom stat og kommune',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-11-intro',
      type: 'text',
      content: `## Lokalt selvstyre i Norge

Norge har en lang tradisjon for lokalt selvstyre. Kommunene og fylkeskommunene har ansvar for mange viktige oppgaver og styres av lokalt folkevalgte.

**Hvorfor lokalt selvstyre?**
- Beslutninger tas nærmere innbyggerne
- Tilpasning til lokale forhold og behov
- Demokratisk skolering og deltakelse
- Effektiv tjenesteproduksjon

**Kommunenes grunnlag:**
Kommuneloven regulerer hvordan kommunene skal organiseres og styres. Det lokale selvstyret er forankret i Grunnloven (§ 49).`,
    },
    {
      id: 'samfunnskunnskap-5-11-def-1',
      type: 'definition',
      title: 'Kommunenes organisering',
      content: `**Kommunestyret:**
- Øverste organ i kommunen
- Velges direkte av innbyggerne hvert 4. år
- 11-85 medlemmer avhengig av folketall
- Vedtar budsjett og viktige saker

**Formannskapet:**
- Velges av kommunestyret
- Forbereder saker, behandler hastesaker
- Ofte delegert myndighet

**Ordføreren:**
- Leder kommunestyret og formannskapet
- Representerer kommunen utad
- Velges av kommunestyret (noen steder direkte)

**Kommunedirektøren:**
- Øverste administrative leder
- Ansatt av kommunestyret
- Leder administrasjonen

**Utvalg og komiteer:**
- Behandler saker innen sine områder
- F.eks. planutvalg, helse- og sosialutvalg`,
    },
    {
      id: 'samfunnskunnskap-5-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-11-ex-2',
        number: '1',
        type: 'classic',
        task: 'Beskriv kommunestyrets og formannskapets roller.',
        solution: 'Kommunestyret: Øverste organ, velges direkte, vedtar budsjett og viktige saker. Formannskapet: Velges av kommunestyret, forbereder saker, behandler hastesaker, har ofte delegert myndighet. Kommunestyret er besluttende, formannskapet forberedende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-11-def-2',
      type: 'definition',
      title: 'Stat og kommune',
      content: `**Statlig styring:**
- Lover og forskrifter (rammer)
- Øremerket finansiering (styrt bruk)
- Tilsyn og kontroll
- Statlige minstekrav

**Kommunalt selvstyre:**
- Egne prioriteringer innenfor rammene
- Frie inntekter (skatt + rammetilskudd)
- Organisasjonsfrihet
- Lokal politikk

**Spenningen:**
Det er ofte spenning mellom nasjonale mål og lokalt selvstyre. Staten vil ha likhet på tvers av kommuner, kommunene vil ha frihet til å prioritere selv.

**Fylkesmannens rolle:**
Statsforvalteren (tidligere fylkesmannen) fører tilsyn med kommunene og behandler klager på kommunale vedtak.`,
    },
    {
      id: 'samfunnskunnskap-5-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-11-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom statlig styring og kommunalt selvstyre?',
        solution: 'Statlig styring: Lover og forskrifter setter rammer, øremerket finansiering styrer pengebruk, tilsyn og kontroll. Kommunalt selvstyre: Egne prioriteringer innenfor rammene, frie inntekter, organisasjonsfrihet, lokal politikk. Spenning mellom nasjonale mål og lokalt selvstyre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-11-example-1',
      type: 'example',
      title: 'Kommunereformen',
      problem: `Hvorfor ble det gjennomført en kommunereform, og hva var målet?`,
      solution: `**Kommunereformen 2014-2020:**

**Bakgrunn:**
- Mange små kommuner hadde utfordringer med kompetanse og kapasitet
- Nye oppgaver krevde større fagmiljøer
- Interkommunalt samarbeid ble uoversiktlig

**Mål:**
- Større og mer robuste kommuner
- Bedre tjenester til innbyggerne
- Sterkere lokaldemokrati
- Mer effektiv drift

**Resultat:**
- Antall kommuner redusert fra 428 til 356
- Mange frivillige sammenslåinger
- Noen tvangssammenslåinger (kontroversielt)

**Debatt:**
- Større enheter = sterkere fagmiljøer
- Men: Større avstand til innbyggerne
- Spenning mellom effektivitet og nærhet

**Konklusjon:**
Kommunestrukturen er stadig under debatt. Balansen mellom stordriftsfordeler og nærhet til innbyggerne er krevende.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-11-ex-1',
        number: '3',
        type: 'classic',
        task: 'Hva er fordelene med lokalt selvstyre?',
        solution: 'Fordeler: 1) Beslutninger tas nærmere innbyggerne, 2) Tilpasning til lokale forhold og behov, 3) Demokratisk skolering og deltakelse, 4) Effektiv tjenesteproduksjon, 5) Kortere avstand mellom velger og politiker, 6) Lokalt engasjement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-11-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Bør kommunene være større eller mindre?',
        solution: 'Større kommuner: Sterkere fagmiljøer, bedre tjenester, effektiv drift. Mindre kommuner: Nærhet til innbyggerne, lokalt engasjement, tilpassede løsninger. Konklusjon: Balanse mellom effektivitet og nærhet er krevende. Ulike oppgaver kan kreve ulik størrelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_5_12: TextbookChapter = {
  id: 'samfunnskunnskap-5-12',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5.12',
  title: 'Påvirkning og lobbyisme',
  description: 'Lær om interesseorganisasjoner, medier og politisk påvirkning.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for ulike former for politisk påvirkning',
    'drøfte lobbyisme i et demokratisk perspektiv',
  ],
  content: [
    {
      id: 'samfunnskunnskap-5-12-intro',
      type: 'text',
      content: `## Hvem påvirker politikken?

Politikk formes ikke bare av politikere. Mange aktører prøver å påvirke politiske beslutninger - fra interesseorganisasjoner til medier og PR-byråer.

**Hvem påvirker?**
- Interesseorganisasjoner (LO, NHO, Naturvernforbundet)
- Lobbyister og PR-byråer
- Medier og journalister
- Eksperter og forskere
- Enkeltborgere og aksjonsgrupper

**Hvorfor er påvirkning viktig?**
Å påvirke beslutninger er en del av demokratiet. Problemet oppstår når påvirkningen er skjev - når noen har mer tilgang og ressurser enn andre.`,
    },
    {
      id: 'samfunnskunnskap-5-12-def-1',
      type: 'definition',
      title: 'Interesseorganisasjoner',
      content: `**Hva er interesseorganisasjoner?**
Organisasjoner som representerer bestemte gruppers interesser overfor myndighetene.

**Typer:**
- **Arbeidstaker/arbeidsgiver:** LO, YS, NHO, Virke
- **Næringsinteresser:** Norges Bondelag, Norges Fiskarlag
- **Ideelle:** Norsk Folkehjelp, Røde Kors
- **Miljø:** Naturvernforbundet, WWF, Bellona
- **Pasient/bruker:** FFO, Mental Helse

**Virkemidler:**
- Høringssvar på lovforslag
- Direkte kontakt med politikere
- Mediekampanjer
- Demonstrasjoner og aksjoner
- Forskning og utredninger

**Korporatisme:**
I Norge har store organisasjoner tradisjonelt hatt formell innflytelse gjennom trepartssamarbeidet og deltakelse i utvalg.`,
    },
    {
      id: 'samfunnskunnskap-5-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-12-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en interesseorganisasjon, og gi tre eksempler.',
        solution: 'Interesseorganisasjon er en organisasjon som representerer bestemte gruppers interesser overfor myndighetene. Eksempler: LO (arbeidstakere), NHO (arbeidsgivere), Norges Bondelag (bønder), Naturvernforbundet (miljø), FFO (funksjonshemmede).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-12-def-2',
      type: 'definition',
      title: 'Lobbyisme',
      content: `**Hva er lobbyisme?**
Profesjonell påvirkning av politiske beslutninger på vegne av klienter.

**Hvem driver lobbyisme?**
- PR-byråer og kommunikasjonsrådgivere
- Advokatfirmaer
- Interesseorganisasjoners lobbyister
- Tidligere politikere ("svingdører")

**Metoder:**
- Direkte møter med politikere
- Innspill til høringer
- Mediepåvirkning
- Nettverksbygging
- Informasjon og utredninger

**Regulering i Norge:**
- Ingen lobbyregister (til forskjell fra EU)
- Debatt om mer åpenhet
- Karantenetid for politikere
- Etiske retningslinjer

**Problematisk?**
- Gir ressurssterke aktører fordel
- Manglende åpenhet
- "Svingdører" mellom politikk og lobby
- Men: Også legitim informasjon til beslutningstagere`,
    },
    {
      id: 'samfunnskunnskap-5-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-12-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er lobbyisme, og hvilke metoder brukes?',
        solution: 'Lobbyisme er profesjonell påvirkning av politiske beslutninger på vegne av klienter. Metoder: Direkte møter med politikere, innspill til høringer, mediepåvirkning, nettverksbygging, informasjon og utredninger. Drives av PR-byråer, advokatfirmaer og interesseorganisasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-5-12-example-1',
      type: 'example',
      title: 'Mediene som politisk aktør',
      problem: `Hvordan påvirker mediene politikken?`,
      solution: `**Medienes påvirkning:**

**1. Dagsordenfunksjonen:**
- Mediene bestemmer hva som diskuteres
- Det som ikke dekkes, eksisterer ikke politisk
- "Mediepress" tvinger politikere til å handle

**2. Vaktbikkje-rollen:**
- Avslører kritikkverdige forhold
- Holder makten ansvarlig
- "Den fjerde statsmakt"

**3. Arena for debatt:**
- Politikere når ut til velgerne
- Offentlig meningsutveksling
- Partilederdebatter påvirker valg

**4. Tolkningsrammer:**
- Hvordan saker vinkles påvirker holdninger
- "Framing" - hvilken kontekst saken settes i

**5. Sosiale medier:**
- Direkte kontakt politiker-velger
- Omgår tradisjonelle medier
- Spredning av falske nyheter

**Maktbalanse:**
Mediene er mektige, men avhengige av kilder (også mektige). Forholdet mellom medier og politikk er gjensidig påvirkning.`,
    },
    {
      id: 'samfunnskunnskap-5-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-12-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan påvirker mediene politikken?',
        solution: 'Medienes påvirkning: 1) Dagsordenfunksjonen - bestemmer hva som diskuteres, 2) Vaktbikkje-rollen - avslører kritikkverdige forhold, 3) Arena for debatt, 4) Tolkningsrammer - hvordan saker vinkles, 5) Sosiale medier gir direkte kontakt. Mediene er "den fjerde statsmakt".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-5-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-5-12-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Er lobbyisme positivt eller negativt for demokratiet?',
        solution: 'Positivt: Gir informasjon til beslutningstagere, representerer legitime interesser, del av demokratisk påvirkning. Negativt: Gir ressurssterke fordel, manglende åpenhet, "svingdører" mellom politikk og lobby, ulik tilgang. Konklusjon: Kan være legitimt, men krever åpenhet og regulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Menneskerettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6_1: TextbookChapter = {
  id: 'samfunnskunnskap-6-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.1',
  title: 'Hva er menneskerettigheter?',
  description: 'Forstå hva menneskerettigheter er, deres kjennetegn og historiske bakgrunn.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for menneskerettighetenes grunnlag og kjennetegn',
    'reflektere over menneskerettighetenes betydning',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-1-intro',
      type: 'text',
      content: `## Menneskerettighetene - universelle rettigheter for alle

Menneskerettigheter er grunnleggende rettigheter som tilkommer alle mennesker i kraft av at de er mennesker. De skal beskytte individets verdighet og frihet uavhengig av statsborgerskap, kjønn, religion eller andre kjennetegn.

**Hva kjennetegner menneskerettigheter?**
- **Universelle:** Gjelder for alle mennesker, overalt
- **Umistelige:** Kan ikke tas fra deg
- **Udelelige:** Alle rettigheter henger sammen
- **Gjensidig avhengige:** Oppfyllelse av én rettighet avhenger av andre

**Hvorfor menneskerettigheter?**
Menneskerettighetene oppstod som en reaksjon på overgrep - fra slavehandel til holocaust. De skal forhindre at slike overgrep skjer igjen.`,
    },
    {
      id: 'samfunnskunnskap-6-1-def-1',
      type: 'definition',
      title: 'Menneskerettighetenes historie',
      content: `**Historisk bakgrunn:**

**Tidlige ideer:**
- Naturrettsfilosofien (Locke, Rousseau)
- Tanken om medfødte, naturgitte rettigheter
- Opplysningstiden: Fornuft og menneskets verdighet

**Viktige milepæler:**
- 1776: USAs uavhengighetserklæring
- 1789: Den franske menneskerettighetserklæringen
- 1948: FNs verdenserklæring om menneskerettigheter

**FNs verdenserklæring 1948:**
- Vedtatt etter andre verdenskrig og holocaust
- 30 artikler med grunnleggende rettigheter
- Ikke juridisk bindende, men moralsk forpliktende
- Grunnlag for senere konvensjoner

**Fra erklæring til lov:**
Verdenserklæringen er blitt til juridisk bindende konvensjoner:
- Sivile og politiske rettigheter (1966)
- Økonomiske, sosiale og kulturelle rettigheter (1966)`,
    },
    {
      id: 'samfunnskunnskap-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-1-ex-2',
        number: '1',
        type: 'classic',
        task: 'Nevn tre viktige milepæler i menneskerettighetenes historie.',
        solution: 'Tre milepæler: 1) 1776 - USAs uavhengighetserklæring, 2) 1789 - Den franske menneskerettighetserklæringen, 3) 1948 - FNs verdenserklæring om menneskerettigheter. Også viktig: De to FN-konvensjonene fra 1966.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-1-def-2',
      type: 'definition',
      title: 'Rettighetenes grunnlag',
      content: `**Naturrettslig begrunnelse:**
Mennesket har medfødte rettigheter i kraft av sin menneskelighet - uavhengig av hva staten bestemmer.

**Samfunnskontraktsteori:**
Rettighetene er det individet har krav på i bytte mot å gi opp noe frihet til fellesskapet.

**Utilitaristisk begrunnelse:**
Menneskerettigheter gir størst mulig lykke for størst mulig antall mennesker.

**Verdidighet:**
FNs verdenserklæring bygger på menneskets iboende verdighet - alle mennesker er like mye verdt.

**Kritikk:**
- Er menneskerettighetene universelle, eller vestlige verdier?
- Kulturrelativisme: Rettigheter må forstås i kontekst
- Svar: Grunnleggende verdighet er universelt, men utøvelse kan variere`,
    },
    {
      id: 'samfunnskunnskap-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-1-ex-1',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner menneskerettigheter?',
        solution: 'Menneskerettighetenes kjennetegn: 1) Universelle - gjelder for alle, overalt, 2) Umistelige - kan ikke tas fra deg, 3) Udelelige - alle rettigheter henger sammen, 4) Gjensidig avhengige - oppfyllelse avhenger av hverandre. De bygger på menneskets verdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-1-example-1',
      type: 'example',
      title: 'FNs verdenserklæring',
      problem: `Hva inneholder FNs verdenserklæring om menneskerettigheter?`,
      solution: `**FNs verdenserklæring (1948) - utvalgte artikler:**

**Artikkel 1:**
Alle mennesker er født frie og med samme menneskeverd og rettigheter.

**Artikkel 2:**
Alle har krav på rettighetene uten diskriminering.

**Artikkel 3:**
Rett til liv, frihet og personlig sikkerhet.

**Artikkel 5:**
Forbud mot tortur og umenneskelig behandling.

**Artikkel 9:**
Forbud mot vilkårlig fengsling.

**Artikkel 18:**
Tanke-, samvittighets- og religionsfrihet.

**Artikkel 19:**
Ytrings- og informasjonsfrihet.

**Artikkel 26:**
Rett til utdanning.

**Betydning:**
Selv om erklæringen ikke er juridisk bindende, er den blitt internasjonal sedvanerett. Den har inspirert grunnlover og menneskerettighetskonvensjoner verden over.`,
    },
    {
      id: 'samfunnskunnskap-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er FNs verdenserklæring om menneskerettigheter?',
        solution: 'FNs verdenserklæring (1948) inneholder 30 artikler med grunnleggende rettigheter. Den er ikke juridisk bindende, men moralsk forpliktende. Vedtatt etter andre verdenskrig og holocaust. Har blitt internasjonal sedvanerett og grunnlag for konvensjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Er menneskerettigheter universelle, eller er de vestlige verdier?',
        solution: 'For universalitet: Grunnleggende verdighet er felles for alle kulturer, beskytter mot overgrep, akseptert av nesten alle stater. Mot: Har vestlig opprinnelse, kulturrelativisme, ulike tolkninger. Konklusjon: Kjerneverdier er universelle, men utøvelse kan tilpasses kontekst uten å gi opp grunnprinsippene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_6_2: TextbookChapter = {
  id: 'samfunnskunnskap-6-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.2',
  title: 'Kategorier av rettigheter',
  description: 'Lær om ulike typer menneskerettigheter: sivile, politiske, økonomiske, sosiale og kulturelle.',
  estimatedMinutes: 25,
  competenceGoals: [
    'skille mellom ulike kategorier av menneskerettigheter',
    'forstå sammenhengen mellom rettigheter',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-2-intro',
      type: 'text',
      content: `## Ulike typer rettigheter

Menneskerettighetene deles tradisjonelt inn i kategorier. Selv om skillet kan være kunstig - rettighetene henger sammen - er det nyttig for å forstå ulike typer forpliktelser.

**Hvorfor kategorisering?**
- Historisk: Ulike tidspunkter for utvikling
- Politisk: Øst vs. vest under den kalde krigen
- Praktisk: Ulike former for gjennomføring

**Viktig:**
Alle kategorier er like viktige. Sivile rettigheter uten mat er verdiløse, og mat uten frihet er ikke nok.`,
    },
    {
      id: 'samfunnskunnskap-6-2-def-1',
      type: 'definition',
      title: 'Sivile og politiske rettigheter',
      content: `**Sivile rettigheter (frihet FRA staten):**
- Rett til liv
- Forbud mot tortur
- Forbud mot slaveri
- Rettssikkerhet
- Vern av privatlivet
- Religionsfrihet
- Ytringsfrihet
- Bevegelsesfrihet

**Politiske rettigheter (frihet TIL å delta):**
- Stemmerett
- Rett til å stille til valg
- Forsamlingsfrihet
- Organisasjonsfrihet
- Tilgang til offentlig informasjon

**Kjennetegn:**
- "Negative" rettigheter - staten skal avstå fra inngrep
- Umiddelbart gjennomførbare
- Individuelle rettigheter
- FN-konvensjonen om sivile og politiske rettigheter (1966)`,
    },
    {
      id: 'samfunnskunnskap-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-2-ex-2',
        number: '1',
        type: 'classic',
        task: 'Gi tre eksempler på sivile og politiske rettigheter.',
        solution: 'Tre av følgende: Rett til liv, forbud mot tortur, ytringsfrihet, religionsfrihet, stemmerett, organisasjonsfrihet, forsamlingsfrihet, rettssikkerhet, bevegelsesfrihet, vern av privatlivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-2-def-2',
      type: 'definition',
      title: 'Økonomiske, sosiale og kulturelle rettigheter',
      content: `**Økonomiske rettigheter:**
- Rett til arbeid
- Rettferdige arbeidsvilkår
- Rett til å danne fagforeninger
- Rett til sosial trygghet

**Sosiale rettigheter:**
- Rett til mat og vann
- Rett til bolig
- Rett til helse
- Rett til utdanning
- Rett til familieliv

**Kulturelle rettigheter:**
- Rett til å delta i kulturlivet
- Rett til å nyte vitenskapens fremskritt
- Rett til beskyttelse av åndsverk
- Minoriteters kulturelle rettigheter

**Kjennetegn:**
- "Positive" rettigheter - staten skal sørge for noe
- Gradvis gjennomføring etter ressurser
- Krever aktiv innsats fra staten
- FN-konvensjonen om ØSK-rettigheter (1966)`,
    },
    {
      id: 'samfunnskunnskap-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-2-ex-3',
        number: '2',
        type: 'classic',
        task: 'Gi tre eksempler på økonomiske, sosiale og kulturelle rettigheter.',
        solution: 'Tre av følgende: Rett til arbeid, rett til utdanning, rett til helse, rett til mat og vann, rett til bolig, rett til sosial trygghet, rett til å delta i kulturlivet, minoriteters kulturelle rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-2-example-1',
      type: 'example',
      title: 'Sammenhengen mellom rettighetene',
      problem: `Hvordan henger de ulike rettighetene sammen?`,
      solution: `**Eksempel 1: Utdanning**
- Utdanning (ØSK) er nødvendig for å kunne bruke ytringsfrihet (SP) effektivt
- Uten gratis utdanning vil fattige ikke kunne delta politisk

**Eksempel 2: Helse**
- Helserettigheten (ØSK) forutsetter informasjonsfrihet (SP) om helsespørsmål
- Rett til liv (SP) er meningsløs uten tilgang til helsetjenester (ØSK)

**Eksempel 3: Demokrati**
- Demokrati krever utdannede borgere (ØSK)
- Politiske rettigheter (SP) forutsetter at folk har tid til å engasjere seg (ØSK)

**Konklusjon:**
Rettighetene er udelelige og gjensidig avhengige:
- Sivile/politiske rettigheter uten sosiale rettigheter = formelle rettigheter uten reell mulighet til å bruke dem
- Sosiale rettigheter uten sivile/politiske = velstand uten frihet

Begge typer må oppfylles for at mennesker skal leve verdige liv.`,
    },
    {
      id: 'samfunnskunnskap-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-2-ex-1',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på sivile/politiske og økonomiske/sosiale rettigheter?',
        solution: 'SP-rettigheter: "Negative" rettigheter - staten skal avstå fra inngrep (frihet fra), umiddelbart gjennomførbare. ØSK-rettigheter: "Positive" rettigheter - staten skal sørge for noe (frihet til), gradvis gjennomføring. Begge er like viktige og henger sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor rettighetene kalles "udelelige" og "gjensidig avhengige".',
        solution: 'Udelelige: Alle rettigheter er like viktige, man kan ikke velge bort noen. Gjensidig avhengige: Oppfyllelse av én rettighet avhenger av andre. Eksempel: Ytringsfrihet krever utdanning, politisk deltakelse krever frihet fra sult. Begge typer må oppfylles for verdige liv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_6_3: TextbookChapter = {
  id: 'samfunnskunnskap-6-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.3',
  title: 'FN og menneskerettigheter',
  description: 'Lær om FNs rolle i å beskytte menneskerettigheter og de viktigste FN-konvensjonene.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare FNs rolle i menneskerettighetsarbeidet',
    'kjenne til de viktigste FN-konvensjonene',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-3-intro',
      type: 'text',
      content: `## FNs menneskerettighetsarbeid

**De forente nasjoner (FN)** ble grunnlagt i 1945 etter andre verdenskrig. Opplevelsene med nazistenes folkemord og krigens grusomheter skapte et sterkt behov for et internasjonalt system som kunne beskytte mennesker mot overgrep.

FNs hovedmål er å fremme fred, sikkerhet og samarbeid mellom nasjoner. **Menneskerettighetene** ble en sentral del av dette arbeidet helt fra starten.`,
    },
    {
      id: 'samfunnskunnskap-6-3-verdenserkleringen',
      type: 'definition',
      title: 'Verdenserklæringen om menneskerettigheter',
      content: `FNs **Verdenserklæring om menneskerettigheter** ble vedtatt 10. desember 1948. Den inneholder 30 artikler som beskriver grunnleggende rettigheter alle mennesker har.

Erklæringen var banebrytende fordi den:
- Definerte universelle rettigheter for alle mennesker
- Ble vedtatt av verdenssamfunnet samlet
- La grunnlaget for senere konvensjoner

**Viktige prinsipper:**
- Alle mennesker er født frie og like i verdighet
- Rettighetene gjelder uten forskjellsbehandling
- Både sivile/politiske og økonomiske/sosiale rettigheter

Verdenserklæringen er ikke juridisk bindende, men har stor moralsk autoritet og har inspirert nasjonal lovgivning verden over.`,
    },
    {
      id: 'samfunnskunnskap-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på Verdenserklæringen og FNs konvensjoner?',
        solution: 'Verdenserklæringen (1948) er en politisk erklæring uten juridisk bindende kraft, men med stor moralsk autoritet. Konvensjonene er juridisk bindende avtaler som forplikter stater som har ratifisert dem. Stater kan klages inn for brudd på konvensjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-3-konvensjoner',
      type: 'text',
      content: `## FNs menneskerettighetskonvensjoner

For å gjøre rettighetene **juridisk bindende** har FN vedtatt flere konvensjoner. En konvensjon er en internasjonal avtale som forplikter stater som ratifiserer den.

### De to hovedkonvensjonene (1966)

**Konvensjonen om sivile og politiske rettigheter (SP):**
- Ytringsfrihet, religionsfrihet, forsamlingsfrihet
- Rett til liv, frihet fra tortur
- Rett til rettferdig rettergang
- Forbud mot vilkårlig arrestasjon

**Konvensjonen om økonomiske, sosiale og kulturelle rettigheter (ØSK):**
- Rett til arbeid og rettferdige arbeidsvilkår
- Rett til utdanning
- Rett til helse
- Rett til mat, klær og bolig

Sammen med Verdenserklæringen utgjør disse tre dokumentene **"The International Bill of Human Rights"** – det internasjonale menneskerettighetslovverket.`,
    },
    {
      id: 'samfunnskunnskap-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de to hovedkonvensjonene fra 1966 og gi eksempler på rettigheter i hver.',
        solution: 'SP (sivile og politiske): Ytringsfrihet, religionsfrihet, rett til liv, forbud mot tortur, rett til rettferdig rettergang. ØSK (økonomiske, sosiale, kulturelle): Rett til arbeid, utdanning, helse, mat, bolig, kulturelle rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-3-andre-konvensjoner',
      type: 'example',
      title: 'Andre viktige FN-konvensjoner',
      content: `FN har vedtatt flere konvensjoner som beskytter spesielt utsatte grupper:

**Rasekonvensjonen (1965)**
- Forbyr diskriminering basert på rase, hudfarge eller etnisitet

**Kvinnekonvensjonen (1979)**
- Forbyr diskriminering av kvinner
- Fremmer likestilling

**Torturkonvensjonen (1984)**
- Forbyr tortur og umenneskelig behandling
- Pålegger stater å straffeforfølge tortur

**Barnekonvensjonen (1989)**
- Egne rettigheter for barn
- Barnets beste skal være et grunnleggende hensyn

**Flyktningkonvensjonen (1951)**
- Definerer hvem som er flyktning
- Forbyr å sende flyktninger tilbake til forfølgelse

**Funksjonshemmedekonvensjonen (2006)**
- Sikrer like rettigheter for personer med nedsatt funksjonsevne`,
    },
    {
      id: 'samfunnskunnskap-6-3-overvaking',
      type: 'text',
      content: `## FNs overvåkingssystem

Hvordan sikrer FN at statene følger menneskerettighetene?

### Konvensjonsorganer
Hver konvensjon har et eget **komitéorgan** som overvåker at statene følger forpliktelsene:
- **Menneskerettighetskomiteen** (SP-konvensjonen)
- **Komiteen for barns rettigheter** (Barnekonvensjonen)
- **CEDAW-komiteen** (Kvinnekonvensjonen)

Komiteene:
- Behandler statsrapporter fra medlemslandene
- Gir anbefalinger til forbedring
- Kan behandle individklager (hvis staten har akseptert)

### FNs menneskerettighetsråd
- 47 medlemsland, valgt for 3 år
- Møtes i Genève
- Gjennomfører **Universal Periodic Review (UPR)** – regelmessig gjennomgang av alle FN-lands menneskerettighetssituasjon
- Kan opprette granskingskommisjoner

### FNs høykommissær for menneskerettigheter
- Leder FNs menneskerettighetskontor
- Talsmann for menneskerettigheter globalt
- Overvåker situasjonen i ulike land`,
    },
    {
      id: 'samfunnskunnskap-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan overvåker FN at stater følger menneskerettighetene?',
        solution: 'Tre hovedmekanismer: 1) Konvensjonsorganer som behandler statsrapporter og individklager, 2) Menneskerettighetsrådet med Universal Periodic Review der alle lands praksis gjennomgås, 3) FNs høykommissær for menneskerettigheter som overvåker og rapporterer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-3-begrensninger',
      type: 'text',
      content: `## Begrensninger og utfordringer

FN-systemet har svakheter:

**Manglende håndhevelse:**
- FN kan ikke tvinge stater til å følge konvensjonene
- Avhengig av politisk vilje og internasjonalt press
- Økonomiske sanksjoner er sjeldne

**Politisering:**
- Menneskerettighetsrådet har vært kritisert for å velge inn land med dårlig menneskerettighetshistorikk
- Stormakter kan blokkere resolusjoner om allierte
- Selektiv fokus på noen konflikter

**Suverenitetshensynet:**
- Stater beskytter sin selvbestemmelsesrett
- Kan nekte FN tilgang
- Vedtar forbehold ved ratifisering

**Ressursmangel:**
- FN har begrenset budsjett
- Mange konvensjonsorganer har etterslep

Likevel: FN-systemet setter **standarder**, dokumenterer **overgrep** og skaper **press** for forbedring. Det er bedre enn intet internasjonalt system.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er de viktigste svakhetene ved FNs menneskerettighetssystem?',
        solution: 'Hovedsvakheter: Manglende håndhevelse (kan ikke tvinge stater), politisering (stormakter beskytter allierte), suverenitetshensynet (stater kan nekte tilgang), ressursmangel. FN kan sette standarder og presse, men ikke tvinge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_6_4: TextbookChapter = {
  id: 'samfunnskunnskap-6-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.4',
  title: 'Menneskerettigheter i Europa',
  description: 'Lær om det europeiske menneskerettighetssystemet med EMK og Den europeiske menneskerettsdomstol.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til det europeiske menneskerettighetssystemet',
    'forstå Den europeiske menneskerettsdomstolens rolle',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-4-intro',
      type: 'text',
      content: `## Det europeiske menneskerettighetssystemet

Etter andre verdenskrig ble **Europarådet** grunnlagt i 1949 for å fremme demokrati, menneskerettigheter og rettsstaten i Europa. Det europeiske samarbeidet på menneskerettigheter er sterkere enn det globale FN-systemet.

Europarådet har i dag **46 medlemsland** og må ikke forveksles med EU. Alle europeiske land unntatt Russland (suspendert 2022) og Belarus er medlemmer.`,
    },
    {
      id: 'samfunnskunnskap-6-4-emk',
      type: 'definition',
      title: 'Den europeiske menneskerettskonvensjonen (EMK)',
      content: `**EMK** ble vedtatt i 1950 og trådte i kraft i 1953. Den er den viktigste regionale menneskerettighetsavtalen i verden.

**Viktige rettigheter i EMK:**
- Rett til liv (artikkel 2)
- Forbud mot tortur (artikkel 3)
- Forbud mot slaveri (artikkel 4)
- Rett til frihet og sikkerhet (artikkel 5)
- Rett til rettferdig rettergang (artikkel 6)
- Ingen straff uten lov (artikkel 7)
- Rett til privatliv og familieliv (artikkel 8)
- Tanke-, samvittighets- og religionsfrihet (artikkel 9)
- Ytringsfrihet (artikkel 10)
- Forsamlings- og foreningsfrihet (artikkel 11)

EMK er **juridisk bindende** for alle medlemsland. Det betyr at borgere kan klage staten inn for brudd.`,
    },
    {
      id: 'samfunnskunnskap-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er EMK og hvilke rettigheter beskytter den?',
        solution: 'EMK er Den europeiske menneskerettskonvensjonen fra 1950. Den beskytter sivile og politiske rettigheter: rett til liv, forbud mot tortur, rett til frihet, rettferdig rettergang, privatliv, religionsfrihet, ytringsfrihet og forsamlingsfrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-4-emd',
      type: 'text',
      content: `## Den europeiske menneskerettsdomstolen (EMD)

EMD ligger i **Strasbourg** i Frankrike og er verdens mest effektive internasjonale domstol for menneskerettigheter.

**Hvordan fungerer EMD?**

1. **Individklage:** Enhver person som mener at staten har krenket deres rettigheter etter EMK, kan klage til EMD
2. **Statsklage:** Stater kan også klage på andre stater
3. **Nasjonale rettsmidler først:** Klageren må ha prøvd saken i nasjonale domstoler først
4. **Bindende dommer:** EMDs dommer er bindende for medlemsstatene

**EMDs myndighet:**
- Kan fastslå at staten har krenket EMK
- Kan tilkjenne erstatning til klageren
- Kan kreve endringer i nasjonal lovgivning
- Dommene overvåkes av Europarådets ministerkomité`,
    },
    {
      id: 'samfunnskunnskap-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan fungerer Den europeiske menneskerettsdomstolen (EMD)?',
        solution: 'EMD behandler klager fra individer og stater om brudd på EMK. Først må nasjonale rettsmidler være uttømt. EMD kan fastslå brudd, tilkjenne erstatning og kreve lovendringer. Dommene er bindende og overvåkes av Europarådets ministerkomité.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-4-eksempler',
      type: 'example',
      title: 'Norge i EMD',
      content: `Norge har blitt dømt i EMD flere ganger. Viktige eksempler:

**Barnevernssaker:**
- EMD har dømt Norge gjentatte ganger for brudd på retten til familieliv (artikkel 8)
- Kritikk av manglende gjenforeningsmål og for strenge samværsbegrensninger
- Førte til endringer i norsk barnevernspraksis

**Ytringsfrihetssaker:**
- Saker om pressefrihet og vern av kilder
- Balanse mellom ytringsfrihet og personvern

**Soningssaker:**
- Spørsmål om isolasjon av fanger
- Varetektspraksis

Når Norge dømmes, må vi:
- Betale eventuell erstatning
- Vurdere å endre lovgivning
- Endre praksis hos myndighetene`,
    },
    {
      id: 'samfunnskunnskap-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi et eksempel på at Norge har blitt dømt i EMD og forklar konsekvensene.',
        solution: 'Eksempel: Barnevernssaker der Norge er dømt for brudd på retten til familieliv. Konsekvenser: Norge må betale erstatning, endre barnevernspraksis, styrke fokus på gjenforening og gi mer samvær. Lovgivning og retningslinjer har blitt justert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-4-andre-organer',
      type: 'text',
      content: `## Andre europeiske menneskerettighetsinstrumenter

**Den europeiske sosialpakten**
- Dekker økonomiske og sosiale rettigheter
- Rett til arbeid, rimelige arbeidsvilkår, sosial trygghet
- Overvåkes av Europarådets sosialrettskomité

**EU-charteret om grunnleggende rettigheter**
- Gjelder for EU-land og EU-institusjoner
- Binder også Norge gjennom EØS på noen områder
- Overvåkes av EU-domstolen

**Torturforebyggingskomiteen (CPT)**
- Besøker fengsler, politiarrester, psykiatriske institusjoner
- Rapporterer om forhold og gir anbefalinger

**Minoritetskonvensjonen**
- Beskytter nasjonale minoriteter
- Norge har forpliktelser overfor samer, kvener, rom, romani og skogfinner`,
    },
    {
      id: 'samfunnskunnskap-6-4-styrke',
      type: 'text',
      content: `## Hvorfor er det europeiske systemet sterkt?

Det europeiske menneskerettighetssystemet skiller seg fra FN-systemet:

**Juridisk bindende:**
- EMDs dommer er bindende
- Stater må følge opp

**Individklagerett:**
- Enkeltpersoner kan klage direkte
- Trenger ikke gå gjennom staten

**Effektiv overvåking:**
- Ministerkomitéen følger opp dommer
- Press til å implementere

**Regional homogenitet:**
- Europeiske land har liknende verdier
- Lettere å enes om standarder

**Utfordringer:**
- Stor saksmengde, lang behandlingstid
- Noen stater motarbeider dommer
- Press fra populistiske regjeringer`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor regnes det europeiske menneskerettighetssystemet som sterkere enn FN-systemet?',
        solution: 'Grunner: EMDs dommer er juridisk bindende, individer kan klage direkte uten å gå gjennom staten, effektiv overvåking og oppfølging av dommer, europeiske land har likere verdier og standarder. FN mangler bindende domstol og er mer avhengig av politisk vilje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_6_5: TextbookChapter = {
  id: 'samfunnskunnskap-6-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.5',
  title: 'Menneskerettigheter i Norge',
  description: 'Lær hvordan menneskerettighetene er forankret i norsk lov og hvordan de praktiseres.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forstå hvordan menneskerettigheter er beskyttet i Norge',
    'kjenne til menneskerettighetenes plass i norsk lov',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-5-intro',
      type: 'text',
      content: `## Menneskerettigheter i norsk rett

Norge har et sterkt menneskerettighetsvern. Rettighetene er beskyttet på flere nivåer:
- **Grunnloven** inneholder en egen menneskerettighetskatalog
- **Menneskerettsloven** gir viktige konvensjoner direkte virkning i norsk rett
- **Norsk lovgivning** følger opp menneskerettighetsforpliktelser

Norge har ratifisert de fleste FN-konvensjoner og EMK. Det betyr at vi er forpliktet til å sikre rettighetene.`,
    },
    {
      id: 'samfunnskunnskap-6-5-grunnloven',
      type: 'definition',
      title: 'Grunnlovens menneskerettighetskapittel',
      content: `I 2014 ble Grunnloven betydelig utvidet med et **menneskerettighetskapittel** (kapittel E).

**Viktige bestemmelser:**
- **§ 92:** Myndighetene skal sikre menneskerettighetene
- **§ 93:** Rett til liv
- **§ 94:** Forbud mot frihetsberøvelse uten lov
- **§ 95:** Rett til rettferdig rettergang
- **§ 96:** Ingen straff uten lov og dom
- **§ 97:** Forbud mot tilbakevirkende lover
- **§ 98:** Likhet for loven
- **§ 100:** Ytringsfrihet
- **§ 101:** Forsamlings- og foreningsfrihet
- **§ 102:** Privatliv og personvern
- **§ 104:** Barns rettigheter
- **§ 109:** Rett til utdanning
- **§ 110:** Rett til arbeid

Grunnloven har **trinnhøyde** – den står over andre lover.`,
    },
    {
      id: 'samfunnskunnskap-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvordan er menneskerettighetene beskyttet i norsk lov?',
        solution: 'To hovedpilarer: 1) Grunnloven kapittel E med egen menneskerettighetskatalog (fra 2014), 2) Menneskerettsloven (1999) som gjør EMK og fire FN-konvensjoner til norsk lov med forrang. Domstolene må anvende menneskerettighetene direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-5-menneskerettsloven',
      type: 'text',
      content: `## Menneskerettsloven

**Menneskerettsloven** fra 1999 gjør fem sentrale konvensjoner til **norsk lov**:
1. Den europeiske menneskerettskonvensjon (EMK)
2. FNs konvensjon om sivile og politiske rettigheter (SP)
3. FNs konvensjon om økonomiske, sosiale og kulturelle rettigheter (ØSK)
4. FNs barnekonvensjon
5. FNs kvinnekonvensjon

**Forrangsbestemmelsen (§ 3):**
Ved konflikt mellom norsk lov og konvensjonene, skal konvensjonene **gå foran**.

Dette betyr:
- Domstolene må anvende konvensjonene direkte
- Norsk lov må tolkes i samsvar med menneskerettighetene
- Lover som strider mot konvensjonene, er ugyldige`,
    },
    {
      id: 'samfunnskunnskap-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr menneskerettslovens forrangsbestemmelse (§ 3)?',
        solution: 'Ved konflikt mellom norsk lov og konvensjonene i menneskerettsloven, skal konvensjonene gå foran. Dette betyr at norsk lov som strider mot menneskerettighetene er ugyldig, og domstolene må anvende konvensjonene direkte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-5-institusjoner',
      type: 'text',
      content: `## Menneskerettighetsinstitusjoner i Norge

### Norges institusjon for menneskerettigheter (NIM)
- Uavhengig offentlig organ
- Overvåker menneskerettighetssituasjonen
- Gir råd til Stortinget og myndighetene
- Rapporterer til FN

### Likestillings- og diskrimineringsombudet (LDO)
- Arbeider for likestilling og mot diskriminering
- Gir veiledning til individer
- Fremmer klager for Diskrimineringsnemnda

### Sivilombudet
- Behandler klager mot offentlig forvaltning
- Kan påpeke menneskerettighetsbrudd
- Uavhengig av regjering og Storting

### Barneombudet
- Talsmann for barn og unges interesser
- Overvåker barns rettigheter
- Uttaler seg i saker som berører barn

### Domstolene
- Prøver om lover og vedtak er i samsvar med menneskerettighetene
- Høyesterett har utviklet rettspraksis om menneskerettigheter`,
    },
    {
      id: 'samfunnskunnskap-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fire institusjoner som arbeider med menneskerettigheter i Norge og deres oppgaver.',
        solution: 'Fire av: NIM (overvåker/rapporterer), LDO (likestilling/diskriminering), Sivilombudet (klager mot forvaltning), Barneombudet (barns interesser), Domstolene (prøver lover/vedtak). Alle bidrar til å sikre menneskerettighetene på ulike måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-5-praksis',
      type: 'example',
      title: 'Menneskerettigheter i praksis',
      content: `**Eksempler på menneskerettighetsspørsmål i Norge:**

**Ytringsfrihet og hatefulle ytringer:**
- Hvor går grensen mellom ytringsfrihet og hatprat?
- Straffelovens § 185 forbyr hatefulle ytringer
- Balanse mellom vern og fri debatt

**Barns rettigheter:**
- Barnets beste som grunnleggende hensyn
- Barn skal høres i saker som angår dem
- Barnevern og foreldreansvar

**Asyl og utlendingsrett:**
- Vern mot retur til forfølgelse
- Barns rettigheter i asylsaker
- Forholdsmessighet ved utvisning

**Personvern:**
- Overvåkning og datalagring
- Balanse mellom sikkerhet og privatliv
- Digitale rettigheter

**Helse og omsorg:**
- Tvang i psykiatrien
- Eldres rettigheter
- Likeverdig tilgang til helsetjenester`,
    },
    {
      id: 'samfunnskunnskap-6-5-utfordringer',
      type: 'text',
      content: `## Utfordringer i Norge

Selv om Norge har sterkt menneskerettighetsvern, finnes utfordringer:

**Urfolk og minoriteter:**
- Samiske rettigheter og arealforvaltning
- Nasjonale minoriteters situasjon
- Diskriminering av rom-folk

**Sårbare grupper:**
- Barn i vanskelige situasjoner
- Mennesker med funksjonsnedsettelser
- Eldre i institusjon
- Innsatte i fengsel

**Sosialt utenforskap:**
- Fattigdom og barnefattigdom
- Bostedsløshet
- Rus og psykiske lidelser

**Diskriminering:**
- Rasisme og islamofobi
- Diskriminering i arbeidslivet
- LHBT+-personer

Norge mottar jevnlig kritikk og anbefalinger fra FN-organer og EMD. Dette viser at menneskerettighetsarbeid er en kontinuerlig prosess.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi eksempler på menneskerettighetsutfordringer i Norge i dag.',
        solution: 'Eksempler: Samiske rettigheter/arealforvaltning, barnefattigdom, diskriminering i arbeidslivet, LHBT+-rettigheter, eldres situasjon i institusjon, ytringsfrihet vs. hatprat, personvern vs. overvåkning, tvang i psykiatrien, asylbarns situasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_6_6: TextbookChapter = {
  id: 'samfunnskunnskap-6-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.6',
  title: 'Barns rettigheter',
  description: 'Lær om FNs barnekonvensjon og hvordan barns rettigheter beskyttes i Norge.',
  estimatedMinutes: 25,
  competenceGoals: [
    'kjenne til FNs barnekonvensjon og dens prinsipper',
    'forstå hvordan barns rettigheter beskyttes i Norge',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-6-intro',
      type: 'text',
      content: `## Barn har egne rettigheter

Barn er sårbare og avhengige av voksne. Samtidig er barn selvstendige individer med egne behov og meninger. Derfor har barn fått **egne rettigheter** gjennom FNs barnekonvensjon.

**Hvem er barn?**
Barnekonvensjonen definerer barn som alle mennesker under **18 år**. Rettighetene gjelder for alle barn, uavhengig av bakgrunn.`,
    },
    {
      id: 'samfunnskunnskap-6-6-konvensjonen',
      type: 'definition',
      title: 'FNs barnekonvensjon',
      content: `**FNs barnekonvensjon** ble vedtatt i 1989 og er verdens mest ratifiserte menneskerettighetskonvensjon. Bare USA har ikke ratifisert.

Konvensjonen inneholder **54 artikler** som dekker alle sider av barns liv:
- Sivile og politiske rettigheter
- Økonomiske, sosiale og kulturelle rettigheter
- Beskyttelse mot vold, overgrep og utnytting

**Norge ratifiserte** konvensjonen i 1991 og innarbeidet den i menneskerettsloven i 2003.`,
    },
    {
      id: 'samfunnskunnskap-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er FNs barnekonvensjon og når ble den vedtatt?',
        solution: 'FNs barnekonvensjon er en internasjonal avtale som fastslår barns egne rettigheter. Den ble vedtatt i 1989 og er verdens mest ratifiserte menneskerettighetskonvensjon. Norge ratifiserte i 1991 og innarbeidet den i menneskerettsloven i 2003.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-6-grunnprinsipper',
      type: 'text',
      content: `## Fire grunnprinsipper

Barnekonvensjonen har fire overordnede prinsipper som gjelder ved tolkning av alle artiklene:

### 1. Ikke-diskriminering (artikkel 2)
- Alle barn har samme rettigheter
- Forbud mot diskriminering av noe slag
- Gjelder uansett barnets eller foreldrenes bakgrunn

### 2. Barnets beste (artikkel 3)
- Barnets beste skal være et **grunnleggende hensyn** i alle avgjørelser
- Gjelder for myndigheter, institusjoner, domstoler og foreldre
- Må vurderes konkret i hver sak

### 3. Rett til liv og utvikling (artikkel 6)
- Alle barn har rett til liv
- Staten skal sikre barnets overlevelse og utvikling
- Omfatter fysisk, psykisk, åndelig og sosial utvikling

### 4. Rett til å bli hørt (artikkel 12)
- Barn som er i stand til å danne egne synspunkter, skal få uttale seg
- Barnets mening skal tillegges vekt etter alder og modenhet
- Barn har rett til å bli hørt i alle saker som angår dem`,
    },
    {
      id: 'samfunnskunnskap-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar de fire grunnprinsippene i barnekonvensjonen.',
        solution: '1) Ikke-diskriminering: Alle barn har like rettigheter. 2) Barnets beste: Skal være grunnleggende hensyn i alle avgjørelser. 3) Rett til liv og utvikling: Staten skal sikre overlevelse og utvikling. 4) Rett til å bli hørt: Barn skal få uttale seg og bli tatt hensyn til.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-6-rettigheter',
      type: 'example',
      title: 'Viktige rettigheter i barnekonvensjonen',
      content: `**Beskyttelsesrettigheter:**
- Beskyttelse mot vold, overgrep og omsorgssvikt (artikkel 19)
- Beskyttelse mot barnearbeid (artikkel 32)
- Beskyttelse mot seksuell utnytting (artikkel 34)
- Beskyttelse mot menneskehandel (artikkel 35)
- Særlig beskyttelse for flyktningbarn (artikkel 22)

**Utviklingsrettigheter:**
- Rett til utdanning (artikkel 28-29)
- Rett til lek og fritid (artikkel 31)
- Rett til helse og helsetjenester (artikkel 24)
- Rett til tilfredsstillende levestandard (artikkel 27)

**Deltakelsesrettigheter:**
- Rett til ytringsfrihet (artikkel 13)
- Rett til tanke-, samvittighets- og religionsfrihet (artikkel 14)
- Rett til forenings- og forsamlingsfrihet (artikkel 15)
- Rett til informasjon (artikkel 17)

**Familierettigheter:**
- Rett til å kjenne og få omsorg fra foreldrene (artikkel 7)
- Rett til familieliv (artikkel 9)
- Rett til samvær ved samlivsbrudd (artikkel 9)`,
    },
    {
      id: 'samfunnskunnskap-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr det at barnets beste skal være et "grunnleggende hensyn"?',
        solution: 'Det betyr at i alle avgjørelser som berører barn, skal barnets beste vurderes og tillegges stor vekt. Det er ikke det eneste hensynet, men et av de viktigste. Gjelder for myndigheter, domstoler og foreldre. Må vurderes konkret i hver sak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-6-norge',
      type: 'text',
      content: `## Barns rettigheter i Norge

Norge har et sterkt vern av barns rettigheter:

### Grunnloven § 104
Barns rettigheter er grunnlovsfestet:
- Barn har krav på respekt for sitt menneskeverd
- Barnets beste skal være et grunnleggende hensyn
- Barn har rett til å bli hørt

### Barneloven
Regulerer forholdet mellom barn og foreldre:
- Foreldreansvar og samværsrett
- Barnets rett til å bli hørt
- Forbud mot fysisk avstraffelse

### Barnevernsloven
- Beskytter barn mot omsorgssvikt
- Prinsippet om barnets beste
- Barns rett til medvirkning

### Opplæringsloven
- Rett og plikt til grunnskoleopplæring
- Rett til videregående opplæring
- Tilpasset opplæring

### Barneombudet
- Uavhengig talsmann for barn
- Overvåker barns rettigheter
- Uttaler seg i saker som berører barn`,
    },
    {
      id: 'samfunnskunnskap-6-6-utfordringer',
      type: 'text',
      content: `## Utfordringer for barns rettigheter

### I Norge:
- **Barnefattigdom:** Rundt 12% av barn vokser opp i familier med vedvarende lavinntekt
- **Barnevern:** Balanse mellom beskyttelse og familieliv
- **Psykisk helse:** Økende psykiske problemer blant unge
- **Mobbing:** Vedvarende problem i skole og på nett
- **Asylbarn:** Lengeværende barn i uvisse

### Globalt:
- **Barnearbeid:** Over 160 millioner barn arbeider
- **Barnesoldater:** Barn rekrutteres til væpnede konflikter
- **Barneekteskap:** Millioner av jenter giftes bort
- **Utdanning:** Millioner av barn får ikke gå på skole
- **Fattigdom:** Barn rammes hardest av fattigdom
- **Konflikter:** Barn lider i kriger og humanitære kriser

FNs barnekomité overvåker statenes etterlevelse og gir anbefalinger. Norge mottar jevnlig kritikk og pålegg om forbedringer.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre utfordringer for barns rettigheter i Norge og tre globale utfordringer.',
        solution: 'Norge: Barnefattigdom, psykisk uhelse blant unge, mobbing, barnevernssaker, asylbarn. Globalt: Barnearbeid (160 mill.), barnesoldater, barneekteskap, manglende utdanning, fattigdom, barn i krig og konflikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_6_7: TextbookChapter = {
  id: 'samfunnskunnskap-6-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6.7',
  title: 'Utfordringer og konflikter',
  description: 'Forstå hvordan menneskerettigheter kan komme i konflikt og utfordringene med å håndheve dem.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drøfte rettighetskollisjoner og dilemmaer',
    'vurdere utfordringer med å håndheve menneskerettigheter',
  ],
  content: [
    {
      id: 'samfunnskunnskap-6-7-intro',
      type: 'text',
      content: `## Menneskerettigheter er ikke uproblematiske

Menneskerettighetene gir grunnleggende beskyttelse, men anvendelsen reiser vanskelige spørsmål:
- Hva skjer når rettigheter kolliderer?
- Hvordan balansere rettigheter mot andre hensyn?
- Hvordan håndtere kulturelle forskjeller?
- Hvordan håndheve rettighetene?

Det er viktig å forstå disse utfordringene for å delta i debatten om menneskerettigheter.`,
    },
    {
      id: 'samfunnskunnskap-6-7-kollisjoner',
      type: 'definition',
      title: 'Rettighetskollisjoner',
      content: `**Rettighetskollisjoner** oppstår når ulike rettigheter trekker i motsatt retning. Da må man gjøre en **avveining**.

**Eksempler på kollisjoner:**

**Ytringsfrihet vs. vern mot hatprat:**
- Ytringsfrihet er grunnleggende i demokratiet
- Men ytringer kan krenke andre
- Hvor går grensen?

**Privatliv vs. sikkerhet:**
- Rett til privatliv beskytter mot overvåkning
- Men overvåkning kan forebygge terror og kriminalitet
- Balanse mellom frihet og trygghet

**Religionsfrihet vs. likestilling:**
- Rett til religiøs praksis
- Men noen religiøse praksiser diskriminerer kvinner
- Komplisert avveining

**Ytringsfrihet vs. privatliv:**
- Pressens rett til å informere
- Individets rett til privatliv
- Offentlige personer vs. privatpersoner`,
    },
    {
      id: 'samfunnskunnskap-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en rettighetskolisjon? Gi to eksempler.',
        solution: 'Rettighetskolisjon er når ulike rettigheter peker i motsatt retning og må avveies mot hverandre. Eksempler: 1) Ytringsfrihet vs. vern mot hatprat, 2) Privatliv vs. sikkerhet/overvåkning, 3) Religionsfrihet vs. likestilling, 4) Pressefrihet vs. privatliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-7-avveining',
      type: 'text',
      content: `## Hvordan avveie rettigheter?

Når rettigheter kolliderer, må man foreta en **forholdsmessighetsvurdering**:

### Nødvendighet
- Er inngrepet nødvendig for å beskytte den andre rettigheten?
- Finnes mindre inngripende alternativer?

### Proporsjonalitet
- Står inngrepet i forhold til formålet?
- Er gevinsten større enn kostnaden?

### Kjernen i rettigheten
- Rettigheter har en kjerne som ikke kan krenkes
- Absolutte forbud (tortur) kan aldri fravikes
- Andre rettigheter kan begrenses, men ikke utslettes

### Demokratisk legitimitet
- Begrensninger må vedtas gjennom demokratiske prosesser
- Må være forankret i lov
- Domstolene kontrollerer

Avveiningen gjøres ofte av domstolene, som EMD eller Høyesterett.`,
    },
    {
      id: 'samfunnskunnskap-6-7-universalisme',
      type: 'text',
      content: `## Universalisme vs. kulturrelativisme

**Universalisme:**
- Menneskerettighetene gjelder for alle mennesker
- Uavhengig av kultur, religion eller tradisjon
- Rettighetene er nedtegnet i internasjonale avtaler
- Alle stater er bundet

**Kulturrelativisme:**
- Verdier og rettigheter er kulturelt betinget
- Vestlige verdier påtvinges andre kulturer
- Respektere ulike tradisjoner
- Kritikk av menneskerettigheter som "vestlig imperialisme"

**Diskusjonen:**
- Er menneskerettighetene universelle standarder alle må følge?
- Eller er de uttrykk for vestlige verdier?
- Hvordan håndtere praksiser som strider mot menneskerettighetene?

**Mulig mellomposisjon:**
- Kjerneverdiene (liv, torturforbud) er universelle
- Anvendelsen kan tilpasses kulturell kontekst
- Dialog fremfor påtvingelse
- Men ikke aksept av grove overgrep`,
    },
    {
      id: 'samfunnskunnskap-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar debatten mellom universalisme og kulturrelativisme.',
        solution: 'Universalisme: Menneskerettighetene gjelder alle uavhengig av kultur. Kulturrelativisme: Verdier er kulturelt betinget, og menneskerettighetene er vestlige verdier som påtvinges andre. Mellomposisjon: Kjerneverdier er universelle, men anvendelse kan tilpasses kontekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-7-handhevelse',
      type: 'example',
      title: 'Utfordringer med håndhevelse',
      content: `**Suverenitetsprinsippet:**
- Stater har selvbestemmelsesrett
- Menneskerettigheter griper inn i indre anliggender
- Spenning mellom suverenitet og beskyttelse

**Manglende tvangsmakt:**
- Ingen verdenspoliti
- FN kan vedta sanksjoner, men avhengig av Sikkerhetsrådet
- Stormakter kan blokkere tiltak
- Svake stater rammes lettere enn sterke

**Politisering:**
- Selektiv oppmerksomhet
- Allierte skånes, rivaler kritiseres
- Dobbeltmoral svekker legitimiteten

**Ressursmangel:**
- FN og regionale organer har begrensede budsjetter
- Lange køer i EMD
- Ikke kapasitet til å følge opp alt

**Nye utfordringer:**
- Teknologisk overvåkning
- Klimaendringer og rettigheter
- Store selskaper og ansvar
- Terrorbekjempelse vs. rettssikkerhet`,
    },
    {
      id: 'samfunnskunnskap-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er de viktigste utfordringene med å håndheve menneskerettigheter internasjonalt?',
        solution: 'Hovedutfordringer: Suverenitetsprinsippet (staters selvbestemmelse), manglende tvangsmakt (ingen verdenspoliti), politisering (selektiv oppmerksomhet), ressursmangel i FN/EMD, stormakter som blokkerer tiltak, dobbeltmoral som svekker legitimitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-6-7-fremtid',
      type: 'text',
      content: `## Menneskerettighetenes fremtid

### Trusler
- Populistiske bevegelser som avviser menneskerettigheter
- Autoritære regimer som undertrykker opposisjon
- Teknologi som muliggjør masseovervåkning
- Nasjonalisme og fremmedfiendtlighet
- Terrorisme og sikkerhetsargumenter

### Muligheter
- Økt bevissthet gjennom sosiale medier
- Sivilsamfunnet som vaktbikkje
- Nye konvensjoner for nye utfordringer
- Juridisk utvikling i domstolene
- Ungdommens engasjement

### Viktige prinsipper
- Menneskerettigheter er aldri fullstendig sikret
- Krever kontinuerlig arbeid og årvåkenhet
- Alle har et ansvar for å forsvare rettighetene
- Demokrati og menneskerettigheter henger sammen

Menneskerettighetene er ikke perfekte, men de representerer en felles standard for menneskelig verdighet som vi alle kan holde fast ved.`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-6-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Bør ytringsfrihet begrenses for å beskytte mot hatprat og diskriminering?',
        solution: 'For begrensning: Beskytte sårbare grupper, hindre diskriminering, skape trygghet. Mot begrensning: Ytringsfrihet er grunnleggende, vanskelig å definere hatprat, fare for misbruk. Konklusjon: Balanse der grove ytringer forbys, men rom for kritisk debatt bevares.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_1: TextbookChapter = {
  id: 'samfunnskunnskap-7-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.1',
  title: 'Ytringsfrihet',
  description: 'Lær om ytringsfrihetens betydning, grunnlag og grenser.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare ytringsfrihetens betydning i et demokrati',
    'drøfte grensene for ytringsfrihet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-1-intro',
      type: 'text',
      content: `## Hva er ytringsfrihet?

**Ytringsfrihet** er retten til å uttrykke meninger, tanker og informasjon uten forhåndssensur fra myndighetene. Den regnes som en av de mest grunnleggende menneskerettighetene og en forutsetning for demokratiet.

Uten ytringsfrihet kan ikke:
- Borgerne delta i offentlig debatt
- Pressen kontrollere makthaverne
- Vitenskapen utvikle ny kunnskap
- Kunsten utforske og provosere`,
    },
    {
      id: 'samfunnskunnskap-7-1-begrunnelser',
      type: 'definition',
      title: 'Begrunnelser for ytringsfrihet',
      content: `### Sannhetsargumentet
- Fri meningsutveksling fører til bedre erkjennelse av sannheten
- Ideer må testes i offentlig debatt
- Feilaktige meninger avsløres gjennom motargumenter
- "Markedsplassen for ideer"

### Demokratiargumentet
- Demokratiet krever informerte borgere
- Fri debatt gir bedre politiske beslutninger
- Velgerne må kunne kritisere makthaverne
- Offentligheten som arena for deliberasjon

### Autonomiargumentet
- Mennesker har rett til å forme egne meninger
- Ytringsfrihet er uttrykk for personlig frihet
- Selvutvikling gjennom meningsdannelse
- Respekt for individets verdighet`,
    },
    {
      id: 'samfunnskunnskap-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-ex-2',
        number: '1',
        type: 'classic',
        task: 'Forklar de tre hovedbegrunnelsene for ytringsfrihet.',
        solution: 'Sannhetsargumentet: Fri debatt fører til bedre erkjennelse av sannhet. Demokratiargumentet: Demokratiet krever informerte borgere og fri debatt. Autonomiargumentet: Mennesker har rett til å danne egne meninger som uttrykk for personlig frihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-1-rettslig',
      type: 'text',
      content: `## Ytringsfrihetens rettslige grunnlag

### Grunnloven § 100
Norges ytringsfrihetsparagraf fra 2004 gir et sterkt vern:
- **Fri meningsdannelse** (ledd 1)
- **Rett til å ytre seg** (ledd 2)
- **Ingen forhåndssensur** (ledd 4)
- **Infrastrukturkrav** – staten skal legge til rette for åpen debatt (ledd 6)

### EMK artikkel 10
Den europeiske menneskerettskonvensjonen beskytter:
- Retten til ytringsfrihet
- Menings- og informasjonsfrihet
- Pressefriheten

### FNs konvensjon om sivile og politiske rettigheter
Artikkel 19 beskytter retten til å søke, motta og meddele opplysninger og tanker.`,
    },
    {
      id: 'samfunnskunnskap-7-1-grenser',
      type: 'text',
      content: `## Grenser for ytringsfrihet

Ytringsfrihet er ikke absolutt. Noen ytringer er forbudt:

### Hatefulle ytringer (strl. § 185)
- Trusler, forhånelse eller fremme av hat
- Mot grupper basert på hudfarge, religion, seksuell orientering osv.
- Offentlige eller andre tilstedeværendes påhør

### Ærekrenkelser
- Usanne påstander som skader omdømme
- Sivilrettslig erstatningsansvar
- Personvern vs. ytringsfrihet

### Privatlivets fred (strl. § 267)
- Uberettiget omtale av private forhold
- Krenkende atferd mot privatpersoner

### Andre begrensninger
- Trusler (strl. § 263)
- Oppfordring til straffbare handlinger
- Pornografi med barn
- Taushetsplikt
- Blasfemi var forbudt til 2015`,
    },
    {
      id: 'samfunnskunnskap-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-ex-3',
        number: '2',
        type: 'classic',
        task: 'Nevn tre typer ytringer som ikke er beskyttet av ytringsfriheten i Norge.',
        solution: 'Tre av: Hatefulle ytringer (strl. § 185), ærekrenkelser (usanne, skadelige påstander), krenkelse av privatlivets fred, trusler, oppfordring til straffbare handlinger, barnepornografi, brudd på taushetsplikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-1-avveining',
      type: 'example',
      title: 'Vanskelige avveininger',
      content: `**Hatprat vs. religionskritikk:**
- Kan man kritisere religion uten å krenke troende?
- Karikaturtegninger – kunst eller hets?
- Balanse mellom ytringsfrihet og respekt

**Holocaustfornektelse:**
- Forbudt i flere europeiske land
- Ikke forbudt i Norge (men kan rammes av § 185)
- Sannhetsargumentet vs. vern av utsatte grupper

**Politisk ekstremisme:**
- Hvor langt strekker beskyttelsen seg?
- Antidemokratiske ytringer i demokratiet
- Terrorpropaganda og rekruttering

**Nettroll og anonyme ytringer:**
- Anonymitet beskytter varslere
- Men også trakassering og hat
- Plattformenes ansvar

**Avveiningsprinsipper:**
- Proporsjonalitet
- Nødvendighet
- Kontekst og offentlig interesse
- EMDs praksis gir veiledning`,
    },
    {
      id: 'samfunnskunnskap-7-1-utfordringer',
      type: 'text',
      content: `## Ytringsfrihetens utfordringer i dag

### Digitalisering
- Sosiale medier gir alle en plattform
- Spredning av desinformasjon
- Algoritmer og ekkokammer
- Store teknologiselskapers makt

### Chilling effect
- Når folk sensurerer seg selv av frykt
- Trusler mot journalister og debattanter
- Hatprat som stilner stemmer

### Polarisering
- Hardere debattklima
- Ekstreme stemmer får oppmerksomhet
- Manglende nyansering

### Globalisering
- Ytringer krysser landegrenser
- Ulike kulturelle normer
- Autoritære regimer overvåker og sensurerer

### Privat sensur
- Plattformers innholdsmoderering
- Ingen demokratisk kontroll
- Algoritmer som filterer innhold`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-ex-1',
        number: '3',
        type: 'classic',
        task: 'Hva er ytringsfrihet og hvorfor er den viktig i et demokrati?',
        solution: 'Ytringsfrihet er retten til å uttrykke meninger uten forhåndssensur. Viktig fordi: 1) Muliggjør offentlig debatt og informerte borgere, 2) Lar pressen kontrollere makthaverne, 3) Bidrar til sannhetssøken gjennom meningsutveksling, 4) Respekterer individets autonomi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Bør hatprat på internett reguleres strengere?',
        solution: 'For: Beskytte sårbare grupper, hindre spredning av hat, skape tryggere debatt. Mot: Vanskelig å definere hatprat, ytringsfrihet bør ha vidt omfang, fare for overregulering. Konklusjon: Balanse der grove hatytringer rammes, men rom for saklig kritikk bevares.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_2: TextbookChapter = {
  id: 'samfunnskunnskap-7-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.2',
  title: 'Medienes rolle i demokratiet',
  description: 'Forstå medienes funksjoner og betydning som "den fjerde statsmakt".',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare medienes funksjoner i et demokrati',
    'vurdere medienes rolle kritisk',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-2-intro',
      type: 'text',
      content: `## Mediene som demokratiets voktere

Frie og uavhengige medier er en forutsetning for et fungerende demokrati. Mediene kalles ofte **"den fjerde statsmakt"** – ved siden av Stortinget, regjeringen og domstolene.

Uten frie medier ville:
- Borgerne mangle informasjon om politikken
- Makthaverne unnslippe granskning
- Korrupsjon og maktmisbruk blomstre
- Den offentlige debatten forstumme`,
    },
    {
      id: 'samfunnskunnskap-7-2-funksjoner',
      type: 'definition',
      title: 'Medienes funksjoner',
      content: `### 1. Informasjonsfunksjonen
- Informere om hendelser og beslutninger
- Forklare komplekse saker
- Gi borgerne kunnskapsgrunnlag
- Følge med på hva som skjer i samfunnet

### 2. Vakthundfunksjonen
- Avdekke maktmisbruk og korrupsjon
- Granske politikere og næringsliv
- Stille makthavere til ansvar
- "Grave-journalistikk"

### 3. Arenafunksjonen
- Skape rom for offentlig debatt
- Gi plass til ulike stemmer og synspunkter
- Legge til rette for meningsutveksling
- Bidra til demokratisk deliberasjon

### 4. Kommentarfunksjonen
- Analysere og fortolke hendelser
- Ledere og kommentarer
- Meningsytringer fra redaksjonen
- Bidra med perspektiver`,
    },
    {
      id: 'samfunnskunnskap-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-ex-2',
        number: '1',
        type: 'classic',
        task: 'Forklar de fire hovedfunksjonene mediene har i et demokrati.',
        solution: 'Informasjonsfunksjonen: Opplyse borgerne. Vakthundfunksjonen: Granske makthavere. Arenafunksjonen: Skape rom for debatt. Kommentarfunksjonen: Analysere og fortolke hendelser. Alle er viktige for et fungerende demokrati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-2-pressefrihet',
      type: 'text',
      content: `## Pressefrihet

**Pressefrihet** er medienes særlige ytringsfrihet. Den omfatter:

### Redaksjonell frihet
- Mediene bestemmer selv hva de publiserer
- Ingen statlig sensur
- Uavhengighet fra eiere og annonsører
- Beskyttet av Grunnloven og EMK

### Kildevern
- Journalister kan beskytte sine kilder
- Viktig for å få tips om kritikkverdige forhold
- Begrensninger: Kan oppheves i alvorlige straffesaker

### Pressens privilegier
- Tilgang til informasjon (offentlighetsloven)
- Innsynsrett i offentlige dokumenter
- Rett til å referere fra rettssaker

### Vær varsom-plakaten
- Medienes egne etiske retningslinjer
- Vedtatt av Norsk Presseforbund
- Omhandler journalistisk atferd, kilder, publisering
- Håndheves av Pressens Faglige Utvalg (PFU)`,
    },
    {
      id: 'samfunnskunnskap-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-ex-3',
        number: '2',
        type: 'classic',
        task: 'Hva er kildevern og hvorfor er det viktig?',
        solution: 'Kildevern er journalisters rett til å beskytte identiteten til sine kilder. Viktig fordi: 1) Varslere og informanter tør å tipse om kritikkverdige forhold, 2) Muliggjør avdekking av maktmisbruk, 3) Styrker pressens vakthundfunksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-2-utfordringer',
      type: 'text',
      content: `## Utfordringer for mediene

### Økonomisk press
- Annonseinntekter har flyttet til tech-giganter
- Færre journalister, færre ressurser
- Nedleggelser og sammenslåinger
- Clickbait og underholdning for å trekke lesere

### Konsentrasjon av eierskap
- Færre og større mediehus
- Schibsted, Amedia, Polaris dominerer
- Fare for ensretting?
- Behov for mangfold

### Konkurranse fra sosiale medier
- Folk får nyheter fra Facebook og TikTok
- Algoritmene styrer hva vi ser
- Profesjonell journalistikk vs. brukergenerert innhold

### Tillit under press
- Anklager om "fake news"
- Polarisering og mediekritikk
- Noen grupper stoler ikke på mediene

### Tidspress og tempo
- 24/7 nyhetssyklus
- Krav om å være først
- Mindre tid til grundig journalistikk`,
    },
    {
      id: 'samfunnskunnskap-7-2-ansvar',
      type: 'example',
      title: 'Medienes ansvar',
      content: `**Medienes makt innebærer ansvar:**

**Dagsordenfunksjonen:**
- Mediene påvirker hva folk er opptatt av
- Saker som dekkes, får oppmerksomhet
- Saker som ikke dekkes, ignoreres
- Stor makt over offentlig debatt

**Vinkling og framing:**
- Hvordan saker presenteres, påvirker oppfatningen
- Valg av kilder og perspektiver
- Bilder og overskrifter
- Ikke nøytralt, selv om det søkes objektivitet

**Eksempler på grav som har gjort forskjell:**
- VGs "Tysfjord-saken" om overgrep
- Aftenpostens dekning av terrorsaken 22. juli
- NRKs avsløringer om politisk korrupsjon
- Bergens Tidendes Monika-saken

**Kritikk av mediene:**
- Sensasjonsjournalistikk
- Personfokus fremfor saksfokus
- Ensidighet i vinkling
- For nær maktens korridorer`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-ex-1',
        number: '3',
        type: 'classic',
        task: 'Hva menes med at mediene er "den fjerde statsmakt"?',
        solution: 'Mediene kontrollerer og gransker de tre andre statsmaktene (Storting, regjering, domstoler). De avdekker maktmisbruk, informerer borgerne og holder makthavere ansvarlige. Uten frie medier ville demokratiet svekkes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre utfordringer norske medier står overfor i dag.',
        solution: 'Tre av: Økonomisk press (annonseinntekter til tech-giganter), konsentrasjon av eierskap (færre store aktører), konkurranse fra sosiale medier, tillit under press (fake news-anklager), tidspress og krav om å være først.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_3: TextbookChapter = {
  id: 'samfunnskunnskap-7-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.3',
  title: 'Det norske medielandskapet',
  description: 'Få oversikt over NRK, aviser og medieeierskap i Norge.',
  estimatedMinutes: 25,
  competenceGoals: [
    'få oversikt over det norske medielandskapet',
    'forstå mediepolitikk og mediestøtte',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-3-intro',
      type: 'text',
      content: `## Det norske medielandskapet

Norge har et mangfoldig medielandskap med allmennkringkasting, nasjonale og lokale aviser, samt kommersielle aktører. Staten fører en aktiv **mediepolitikk** for å sikre mangfold og kvalitetsjournalistikk.

Det norske mediemarkedet preges av:
- Sterk allmennkringkaster (NRK)
- Høy avislesing
- Konsentrasjon av eierskap
- Betydelig pressestøtte`,
    },
    {
      id: 'samfunnskunnskap-7-3-nrk',
      type: 'definition',
      title: 'NRK – Norsk rikskringkasting',
      content: `**NRK** er Norges allmennkringkaster og eid av staten. NRK er den største medieaktøren i Norge.

**Kanaler og tilbud:**
- TV: NRK1, NRK2, NRK3/NRK Super
- Radio: P1, P2, P3, P1+, og nisjekanaler
- Nett: nrk.no med nyheter, TV og radio

**Finansiering:**
- Tidligere finansiert av lisens
- Fra 2020: Over statsbudsjettet
- Uavhengig av annonseinntekter

**Samfunnsoppdraget:**
- Informere, utdanne og underholde
- Dekke hele landet
- Tilby innhold på nynorsk og samisk
- Ivareta mangfoldet i samfunnet
- Allment tilgjengelig for alle

**Redaksjonell uavhengighet:**
- Skal være fri fra politisk påvirkning
- Kringkastingsrådet overvåker
- Klager behandles av Kringkastingsrådet`,
    },
    {
      id: 'samfunnskunnskap-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er NRKs samfunnsoppdrag?',
        solution: 'NRK skal informere, utdanne og underholde, dekke hele landet, tilby innhold på nynorsk og samisk, ivareta mangfoldet i samfunnet, og være allment tilgjengelig. NRK skal være redaksjonelt uavhengig av politisk påvirkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-3-aviser',
      type: 'text',
      content: `## Aviser og avistradisjonen

Norge har tradisjonelt svært høy avislesing. Avisene har vært viktige for demokratiet og lokalsamfunnene.

### Nasjonale aviser
- **VG** – Norges største avis (tabloid)
- **Dagbladet** – Løssalgsavis
- **Aftenposten** – Abonnementsavis, riksdekkende
- **Klassekampen** – Venstreorientert dagsavis
- **Dagens Næringsliv** – Næringslivsavis
- **Nationen** – Distrikts- og landbruksavis

### Regionale aviser
- Bergens Tidende
- Stavanger Aftenblad
- Adresseavisen (Trondheim)
- Fædrelandsvennen (Kristiansand)

### Lokalaviser
- Over 200 lokalaviser i Norge
- Viktige for lokaldemokratiet
- Dekker kommunestyrer og lokalt næringsliv
- Ofte eneste kilde til lokal informasjon`,
    },
    {
      id: 'samfunnskunnskap-7-3-eierskap',
      type: 'text',
      content: `## Medieeierskap

Det norske mediemarkedet preges av **konsentrasjon** – få store aktører kontrollerer mange medier.

### De store aktørene

**Schibsted**
- Eier VG, Aftenposten, Bergens Tidende
- Finn.no (annonser)
- Nordisk mediekonsern

**Amedia**
- Eier over 80 lokale og regionale aviser
- Dagbladet, Nettavisen
- Norges største aviskonsern etter opplag

**Polaris Media**
- Adresseavisen og flere aviser i Midt-Norge
- TV 2 (minoritetseier)

### Konsekvenser av konsentrasjon
- Stordriftsfordeler og deling av innhold
- Risiko for mindre mangfold
- Færre redaksjonelle stemmer
- Krysssubsidiering mellom aviser

### Regulering
- Medietilsynet overvåker
- Eierskapsgrenser i kringkasting
- Mediestøtte for å sikre mangfold`,
    },
    {
      id: 'samfunnskunnskap-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn de tre største mediekonsernene i Norge og gi eksempler på aviser de eier.',
        solution: 'Schibsted: VG, Aftenposten, Bergens Tidende. Amedia: Dagbladet, Nettavisen, over 80 lokalaviser. Polaris Media: Adresseavisen og flere aviser i Midt-Norge. Sammen kontrollerer de det meste av det norske avismarkedet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-3-mediestotte',
      type: 'example',
      title: 'Pressestøtte og mediepolitikk',
      content: `**Norge har aktiv mediepolitikk for å sikre mangfold:**

**Produksjonstilskudd**
- Støtte til aviser med svak økonomi
- Prioriterer "nummer to-aviser" i byer
- Nisjeaviser og aviser på nynorsk

**Innovasjonsstøtte**
- Støtte til digital omstilling
- Nye forretningsmodeller
- Utvikling av kvalitetsjournalistikk

**Momsfritak**
- Aviser og nyhetstjenester har 0 % moms
- Gjelder også digitale abonnement
- Betydelig økonomisk fordel

**NRK-finansiering**
- Over statsbudsjettet
- Sikrer uavhengighet fra markedet

**Begrunnelser for mediestøtte:**
- Sikre mediemangfold
- Støtte kvalitetsjournalistikk
- Opprettholde lokal mediedekning
- Motvirke markedssvikt

**Kritikk:**
- Konkurransevridning
- Subsidiere ineffektive aktører
- Bør markedet bestemme?`,
    },
    {
      id: 'samfunnskunnskap-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er pressestøtte og hvorfor har Norge det?',
        solution: 'Pressestøtte er offentlig støtte til medier. Former: Produksjonstilskudd (svake aviser), innovasjonsstøtte, momsfritak, NRK-finansiering. Begrunnelse: Sikre mediemangfold, kvalitetsjournalistikk, lokal mediedekning og motvirke markedssvikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved konsentrasjon av medieeierskap.',
        solution: 'Fordeler: Stordriftsfordeler, deling av innhold, styrker økonomi. Ulemper: Mindre mangfold, færre redaksjonelle stemmer, maktkonsentrasjon, fare for ensretting. Balanse: Regulering og pressestøtte kan motvirke negative effekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_4: TextbookChapter = {
  id: 'samfunnskunnskap-7-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.4',
  title: 'Sosiale medier',
  description: 'Forstå sosiale mediers påvirkning, algoritmer og ekkokammer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå hvordan sosiale medier påvirker samfunnet',
    'reflektere kritisk over egen bruk av sosiale medier',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-4-intro',
      type: 'text',
      content: `## Sosiale mediers revolusjon

**Sosiale medier** har fundamentalt endret hvordan vi kommuniserer, får informasjon og deltar i samfunnsdebatten. Plattformer som Facebook, Instagram, TikTok, YouTube og X (tidligere Twitter) har milliarder av brukere.

**Kjennetegn ved sosiale medier:**
- Brukergenerert innhold
- Deling og interaksjon
- Nettverkseffekter
- Algoritmisk distribusjon`,
    },
    {
      id: 'samfunnskunnskap-7-4-plattformer',
      type: 'definition',
      title: 'Sosiale medieplattformer',
      content: `**Facebook/Meta**
- Verdens største sosiale nettverk
- Deling av tekst, bilder, video
- Grupper og sider for organisasjoner

**Instagram**
- Bilde- og videodeling
- Populært blant unge
- Influencer-kultur

**TikTok**
- Korte videoer
- Kraftig algoritme
- Svært populært blant unge

**YouTube**
- Videodelingsplattform
- Alt fra underholdning til nyheter
- Innholdsskapere og abonnenter

**X (Twitter)**
- Korte meldinger, debatt
- Mye brukt av journalister og politikere

**Snapchat**
- Bilder og meldinger som forsvinner
- Populært for kommunikasjon

**LinkedIn**
- Profesjonelt nettverk
- Karriere og arbeidsliv`,
    },
    {
      id: 'samfunnskunnskap-7-4-algoritmer',
      type: 'text',
      content: `## Algoritmer og tilpasning

Sosiale medier bruker **algoritmer** til å bestemme hva du ser. Algoritmene analyserer din atferd for å vise innhold som engasjerer deg.

### Hvordan algoritmene fungerer
- Samler data om din aktivitet (likes, tid brukt, klikk)
- Bygger profil av dine interesser
- Viser innhold som er sannsynlig å engasjere
- Optimaliserer for tid på plattformen

### Konsekvenser
**Positive:**
- Relevant innhold for deg
- Oppdager nye interesser
- Effektiv informasjonsstrøm

**Negative:**
- Du ser ikke hele bildet
- Algoritmen forsterker eksisterende preferanser
- Sensasjonelt og kontroversielt innhold prioriteres
- Kommersiell motivasjon styrer`,
    },
    {
      id: 'samfunnskunnskap-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en algoritme i sosiale medier og hvordan påvirker den hva du ser?',
        solution: 'En algoritme er et dataprogram som bestemmer hvilket innhold du får se. Den samler data om din aktivitet (likes, tid, klikk), bygger profil av interessene dine, og viser innhold som er sannsynlig å engasjere deg. Målet er å holde deg lenger på plattformen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-4-ekkokammer',
      type: 'text',
      content: `## Ekkokammer og filterbobler

**Ekkokammer** oppstår når vi hovedsakelig eksponeres for synspunkter vi allerede er enige i. Vi omgir oss med likesinnede og får våre meninger bekreftet.

**Filterbobler** er et relatert fenomen der algoritmene filtrerer bort informasjon som ikke passer våre preferanser.

### Konsekvenser
- Forsterker eksisterende holdninger
- Vanskeliggjør dialog på tvers
- Kan føre til polarisering
- Mindre eksponering for motargumenter
- Svekker samfunnets felles kunnskapsgrunnlag

### Kritikk av ekkokammer-teorien
- Forskning er blandet
- Mange eksponeres for ulike synspunkter
- Tradisjonelle medier hadde også ensidighet
- Brukerne er ikke passive

### Hva kan du gjøre?
- Følg ulike kilder og synspunkter
- Vær bevisst på algoritmefiltrering
- Oppsøk informasjon aktivt
- Bruk flere nyhetskilder`,
    },
    {
      id: 'samfunnskunnskap-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepene ekkokammer og filterboble.',
        solution: 'Ekkokammer: Når man hovedsakelig eksponeres for synspunkter man allerede er enig i, og meningene bekreftes. Filterboble: Algoritmer filtrerer bort informasjon som ikke passer preferansene dine. Begge kan forsterke eksisterende holdninger og polarisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-4-demokrati',
      type: 'example',
      title: 'Sosiale medier og demokrati',
      content: `**Muligheter:**
- Lavere terskel for deltakelse
- Alle kan ytre seg
- Nye stemmer får plattform
- Organisering av protestbevegelser
- Makthavere kan holdes ansvarlige

**Eksempler på positiv mobilisering:**
- Den arabiske våren (2011)
- #MeToo-bevegelsen
- Klimastreik-bevegelsen
- Black Lives Matter

**Utfordringer:**
- Spredning av desinformasjon
- Hatprat og trakassering
- Manipulasjon av valg
- Utenlandsk påvirkning
- Polarisering av debatt

**Eksempler på negativ bruk:**
- Russisk påvirkning i amerikanske valg
- Konspirasjonsteorienes spredning
- QAnon-bevegelsen
- Nettroll og hatkampanjer`,
    },
    {
      id: 'samfunnskunnskap-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi eksempler på hvordan sosiale medier kan styrke og svekke demokratiet.',
        solution: 'Styrke: Lavere terskel for deltakelse, nye stemmer høres, organisering av bevegelser (MeToo, klimastreik). Svekke: Spredning av desinformasjon, hatprat, valgmanipulasjon, polarisering, utenlandsk påvirkning. Dobbel virkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-4-regulering',
      type: 'text',
      content: `## Regulering av sosiale medier

### Plattformenes ansvar
- Innholdsmoderering (fjerning av ulovlig innhold)
- Retningslinjer for bruk
- Faktasjekk og merking
- Algoritmetransparens?

### Statlig regulering
- EUs Digital Services Act (DSA)
- Krav om fjerning av ulovlig innhold
- Transparens om algoritmer
- Aldersgrenser og barnevern

### Debatter
**For strengere regulering:**
- Beskytte mot skadelig innhold
- Sikre demokratisk debatt
- Ansvarliggjøre plattformene

**Mot strengere regulering:**
- Ytringsfrihet
- Innovasjon og konkurranse
- Hvem definerer hva som er skadelig?
- Privat sensur vs. offentlig kontroll`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Bør sosiale medier reguleres strengere av myndighetene?',
        solution: 'For: Beskytte mot desinformasjon og hatprat, ansvarliggjøre plattformer, sikre demokratisk debatt. Mot: Ytringsfrihet, hvem definerer skadelig innhold, fare for sensur. Konklusjon: Balanse mellom beskyttelse og frihet, transparens om algoritmer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_5: TextbookChapter = {
  id: 'samfunnskunnskap-7-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.5',
  title: 'Kildekritikk og faktasjekk',
  description: 'Lær metoder for å vurdere kilder og avsløre feilinformasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'anvende kildekritiske metoder',
    'vurdere troverdigheten til informasjon',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-5-intro',
      type: 'text',
      content: `## Hvorfor kildekritikk?

I en tid med informasjonsoverflod er det viktigere enn noen gang å kunne vurdere kilder kritisk. Alle kan publisere på internett, og falsk og villedende informasjon spres raskt.

**Kildekritikk** er metoder for å vurdere om informasjon er pålitelig, sann og relevant. Det er en grunnleggende ferdighet for å navigere i dagens medielandskap.`,
    },
    {
      id: 'samfunnskunnskap-7-5-prinsipper',
      type: 'definition',
      title: 'Kildekritiske prinsipper',
      content: `### De fire grunnspørsmålene

**1. Hvem står bak?**
- Hvem har produsert informasjonen?
- Er avsenderen troverdig?
- Har de kompetanse på feltet?
- Kan de ha skjulte motiver?

**2. Hva er kildens formål?**
- Informere objektivt?
- Overbevise eller påvirke?
- Selge noe?
- Underholde?

**3. Når ble informasjonen publisert?**
- Er informasjonen oppdatert?
- Har situasjonen endret seg?
- Kan tidspunkt påvirke innholdet?

**4. Hvordan er informasjonen fremstilt?**
- Er den saklig og balansert?
- Brukes emosjonelle virkemidler?
- Er påstander dokumentert?
- Finnes motstridende informasjon?`,
    },
    {
      id: 'samfunnskunnskap-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fire grunnspørsmålene i kildekritikk?',
        solution: '1) Hvem står bak? (avsender, kompetanse, motiver), 2) Hva er formålet? (informere, påvirke, selge), 3) Når ble det publisert? (aktualitet), 4) Hvordan er det fremstilt? (saklighet, dokumentasjon, balanse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-5-kildetyper',
      type: 'text',
      content: `## Ulike kildetyper

### Primærkilder
- Førstehånds vitnesbyrd
- Originaldokumenter
- Forskning og undersøkelser
- Oftest mest troverdige

### Sekundærkilder
- Fortolkninger og analyser
- Journalistikk basert på primærkilder
- Lærebøker og oppslagsverk
- Kan være farget av tolkning

### Tertiærkilder
- Sammendrag av sekundærkilder
- Wikipedia, leksikon
- Gode for oversikt, men sjekk videre

### Vurdering av nettsider
- **Domene:** .no, .org, .edu, .gov mer pålitelig enn tilfeldig .com
- **Design:** Profesjonelt utseende vs. amatørmessig
- **Kontaktinfo:** Kan du finne ut hvem som står bak?
- **Kilder:** Er påstander dokumentert med kilder?`,
    },
    {
      id: 'samfunnskunnskap-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen på primær-, sekundær- og tertiærkilder.',
        solution: 'Primærkilder: Førstehånds vitnesbyrd, originaldokumenter. Sekundærkilder: Fortolkninger og analyser av primærkilder (journalistikk, lærebøker). Tertiærkilder: Sammendrag av sekundærkilder (Wikipedia, leksikon). Primærkilder er oftest mest pålitelige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-5-faktasjekk',
      type: 'text',
      content: `## Faktasjekk

**Faktasjekk** er systematisk verifisering av om påstander stemmer med virkeligheten.

### Slik faktasjekker du

**1. Identifiser påstanden**
- Hva er det konkrete som hevdes?
- Skille fakta fra mening

**2. Finn primærkilden**
- Hvor stammer påstanden fra?
- Gå til originalkilden

**3. Sjekk flere kilder**
- Bekreftes påstanden av andre?
- Finn uavhengige kilder

**4. Bruk faktasjekktjenester**
- Faktisk.no (Norge)
- Snopes.com (internasjonal)
- Full Fact (UK)

**5. Vær kritisk til bilder og video**
- Bildesøk (Google Images)
- Er bildet manipulert?
- Er det tatt ut av kontekst?`,
    },
    {
      id: 'samfunnskunnskap-7-5-varselstegn',
      type: 'example',
      title: 'Varselstegn på upålitelig informasjon',
      content: `**Sjekk disse varseltegnene:**

**Overskriften:**
- Sensasjonell og clickbait?
- Bruker "sjokkerende", "du vil ikke tro"?
- Stemmer overskriften med innholdet?

**Avsenderen:**
- Ukjent eller anonym?
- Mangelfull kontaktinformasjon?
- Ingen redaksjonell ansvarlig?

**Innholdet:**
- Mangler kilder og dokumentasjon?
- Bare én side av saken?
- Mange skrivefeil og uprofesjonelt språk?
- Sterke følelsesladede formuleringer?

**Spredningen:**
- Deles hovedsakelig i sosiale medier?
- Rapporteres ikke av etablerte medier?
- Virker for godt/ille til å være sant?

**Bilder:**
- Ser bildet manipulert ut?
- Passer det til teksten?
- Kan du finne originalbildet?`,
    },
    {
      id: 'samfunnskunnskap-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fem varselstegn på at en kilde kan være upålitelig.',
        solution: 'Fem av: Sensasjonelle overskrifter (clickbait), ukjent/anonym avsender, manglende kilder, ensidig fremstilling, mange skrivefeil, sterke følelsesladede formuleringer, deles bare i sosiale medier, virker for godt/ille til å være sant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-5-laterallesing',
      type: 'text',
      content: `## Laterallesing

**Laterallesing** er en effektiv faktasjekkteknikk som profesjonelle bruker.

### Hva er laterallesing?
I stedet for å vurdere kilden grundig fra innsiden (vertikal lesing), åpner du nye faner og søker etter informasjon OM kilden.

### Slik gjør du det
1. Stopp – ikke les hele artikkelen
2. Åpne en ny fane
3. Søk etter informasjon om kilden
4. Sjekk hva andre sier om troverdigheten
5. Gå tilbake og vurder innholdet

### Hvorfor fungerer det?
- Du sparer tid
- Unngår å bli overbevist av overtalende innhold
- Får ekstern vurdering av kilden
- Samme metode som profesjonelle faktasjekkere bruker

### Tips
- Søk på organisasjonsnavn + "troverdig"
- Sjekk Wikipedia om organisasjonen
- Se etter kritikk eller avsløringer`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er laterallesing og hvorfor er det effektivt?',
        solution: 'Laterallesing: I stedet for å lese kilden grundig, åpner du nye faner og søker informasjon OM kilden. Effektivt fordi: Sparer tid, unngår å bli overbevist av overtalende innhold, får ekstern vurdering, samme metode som profesjonelle faktasjekkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_6: TextbookChapter = {
  id: 'samfunnskunnskap-7-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.6',
  title: 'Falske nyheter og desinformasjon',
  description: 'Forstå hva desinformasjon er, hvordan den spres og hvordan vi kan motvirke den.',
  estimatedMinutes: 25,
  competenceGoals: [
    'skille mellom ulike typer feilinformasjon',
    'forstå hvordan desinformasjon spres',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-6-intro',
      type: 'text',
      content: `## Falsk informasjon i den digitale tidsalder

Spredning av falsk og villedende informasjon er blitt et alvorlig samfunnsproblem. Begrepet "falske nyheter" har blitt vanlig, men det er viktig å skille mellom ulike typer feilinformasjon.

**Konsekvenser av feilinformasjon:**
- Undergraver tilliten til medier og institusjoner
- Påvirker valg og politiske prosesser
- Kan føre til skadelige handlinger
- Forverrer polarisering i samfunnet`,
    },
    {
      id: 'samfunnskunnskap-7-6-begreper',
      type: 'definition',
      title: 'Viktige begreper',
      content: `### Feilinformasjon (misinformation)
- Falsk informasjon som spres uten intensjon om å villede
- Kan skyldes misforståelse eller uvitenhet
- Eksempel: Dele et rykte man tror er sant

### Desinformasjon (disinformation)
- Falsk informasjon som bevisst spres for å villede
- Har til hensikt å skade eller manipulere
- Eksempel: Statlig propaganda eller målrettet løgn

### Propaganda
- Ensidig informasjon for å påvirke holdninger
- Kan være sann, men er partisk
- Ofte brukt av stater og politiske bevegelser

### Konspirasjonsteorier
- Forklaringer basert på hemmelige sammensvergelser
- Ofte immune mot motbevis
- Kan ha farlige konsekvenser`,
    },
    {
      id: 'samfunnskunnskap-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på feilinformasjon og desinformasjon?',
        solution: 'Feilinformasjon: Falsk informasjon spredt uten intensjon om å villede (misforståelse, uvitenhet). Desinformasjon: Falsk informasjon spredt bevisst for å villede, med intensjon om å skade eller manipulere. Forskjellen ligger i intensjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-6-spredning',
      type: 'text',
      content: `## Hvordan desinformasjon spres

### Sosiale mediers rolle
- Algoritmer prioriterer engasjerende innhold
- Falske nyheter er ofte mer engasjerende
- Rask spredning uten kvalitetskontroll
- Anonyme kontoer og botnett

### Menneskelige faktorer
**Bekreftelsesbias:**
- Vi tror lettere på det som bekrefter vårt syn
- Kritisk sans svekkes for meninger vi liker

**Sosial spredning:**
- Vi stoler på det som deles av venner
- Gruppepress og flokkmentalitet

**Følelsesappell:**
- Frykt, sinne og opprørthet sprer seg
- Sjokkerende innhold deles raskt

### Profesjonelle aktører
- Utenlandske påvirkningsoperasjoner
- Politiske kampanjer
- Økonomisk motiverte nettsteder
- Trollfabrikker`,
    },
    {
      id: 'samfunnskunnskap-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar tre faktorer som gjør at desinformasjon spres raskt på sosiale medier.',
        solution: 'Tre av: 1) Algoritmer prioriterer engasjerende innhold, 2) Bekreftelsesbias – vi tror det vi vil tro, 3) Sosial spredning – stoler på venners delinger, 4) Følelsesappell – sjokkerende innhold spres raskt, 5) Anonyme kontoer og botnett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-6-eksempler',
      type: 'example',
      title: 'Eksempler på desinformasjon',
      content: `**Valgpåvirkning:**
- Russisk innblanding i amerikanske valg (2016, 2020)
- Falske nyheter om kandidater
- Manipulasjon av sosiale medier

**Covid-19-pandemien:**
- Falske kurer og behandlinger
- Konspirasjonsteorier om opprinnelse
- Vaksineskepsis og feilinformasjon

**Klimaendringer:**
- Fornektelse av menneskeskapt klimaendring
- Finansiert av fossilindustri
- Skaper tvil om vitenskapelig konsensus

**Krig og konflikt:**
- Propaganda fra konfliktsoner
- Falske bilder og videoer
- Dehumanisering av motstandere

**Norske eksempler:**
- Konspirasjonsteorier om 22. juli
- Feilinformasjon under pandemien
- Utenlandsk påvirkning i norsk debatt`,
    },
    {
      id: 'samfunnskunnskap-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi eksempler på hvordan desinformasjon har påvirket viktige samfunnsspørsmål.',
        solution: 'Eksempler: Valgpåvirkning (russisk innblanding i USA), covid-19 (falske kurer, vaksinemotstand), klimaendringer (fornektelse finansiert av fossilindustri), krig (propaganda, falske bilder). Kan påvirke valg, folkehelse og politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-6-motvirke',
      type: 'text',
      content: `## Hvordan motvirke desinformasjon

### Individnivå
- Utvikle kritisk tenkning
- Sjekke kilder før deling
- Bruke faktasjekktjenester
- Bevissthet om egne fordommer

### Medier og plattformer
- Faktasjekk og merking
- Innholdsmoderering
- Transparens om algoritmer
- Samarbeid med forskere

### Myndighetene
- Digital mediekompetanse i skolen
- Støtte til kvalitetsjournalistikk
- Regulering av plattformer
- Bekjempe utenlandsk påvirkning

### "Prebunking"
- Forberede folk på desinformasjonsteknikker
- Bygge immunitet mot manipulasjon
- Lære å gjenkjenne taktikker
- Mer effektivt enn å rette i etterkant`,
    },
    {
      id: 'samfunnskunnskap-7-6-demokrati',
      type: 'text',
      content: `## Desinformasjon og demokratiet

### Trusler mot demokratiet
- Velgere tar beslutninger på feil grunnlag
- Tilliten til institusjoner svekkes
- Polarisering og hat øker
- Vanskeliggjør saklig debatt

### Hvem tjener på desinformasjon?
- Autoritære regimer som vil svekke demokratier
- Ekstreme politiske krefter
- Aktører som tjener penger på klikk
- De som vil så splid og kaos

### Demokratiets forsvar
- Fri presse og uavhengig journalistikk
- Transparens og åpenhet
- Kritiske borgere med mediekompetanse
- Institusjoner som holder stand

### Balanse
- Bekjempe desinformasjon uten sensur
- Beskytte ytringsfriheten
- Styrke tillit gjennom åpenhet
- Anerkjenne kompleksiteten`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan gjøres for å motvirke spredning av desinformasjon?',
        solution: 'Individnivå: Kritisk tenkning, sjekke kilder, faktasjekk. Medier: Faktasjekk, merking, moderering. Myndigheter: Mediekompetanse i skolen, støtte kvalitetsjournalistikk, regulering. "Prebunking": Forberede folk på teknikker før de eksponeres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_7_7: TextbookChapter = {
  id: 'samfunnskunnskap-7-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7.7',
  title: 'Personvern i den digitale tidsalder',
  description: 'Forstå personvern, GDPR og utfordringer med overvåkning og digitale spor.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå betydningen av personvern',
    'kjenne til personvernlovgivning og rettigheter',
  ],
  content: [
    {
      id: 'samfunnskunnskap-7-7-intro',
      type: 'text',
      content: `## Personvern i en digital verden

**Personvern** handler om retten til å kontrollere informasjon om seg selv. I den digitale tidsalderen samles det inn enorme mengder data om oss – ofte uten at vi er klar over det.

**Hvorfor er personvern viktig?**
- Beskytter individets autonomi og verdighet
- Gir kontroll over eget liv
- Forhindrer misbruk av informasjon
- Er en forutsetning for demokrati og ytringsfrihet`,
    },
    {
      id: 'samfunnskunnskap-7-7-digitale-spor',
      type: 'definition',
      title: 'Digitale spor',
      content: `Vi legger igjen **digitale spor** i alt vi gjør på nett:

**Aktive spor:**
- Poster i sosiale medier
- E-poster og meldinger
- Søk på Google
- Kjøp på nett

**Passive spor:**
- Lokasjonsdata fra telefonen
- Cookies på nettsider
- IP-adresser
- Hvordan vi beveger musen

**Metadata:**
- Når og hvor du kommuniserte
- Hvem du kommuniserte med
- Hvor lenge samtalen varte
- Bevegelsesmønster

**Hvem samler data?**
- Store teknologiselskaper (Google, Meta, Amazon)
- Annonsører og databrokers
- Apper og nettsider
- Staten og myndigheter`,
    },
    {
      id: 'samfunnskunnskap-7-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er personvern og hvorfor er det viktig i et demokrati?',
        solution: 'Personvern er retten til å kontrollere informasjon om seg selv. Viktig fordi: Beskytter individets autonomi og verdighet, gir kontroll over eget liv, forhindrer misbruk, er forutsetning for ytringsfrihet (folk sensurerer seg hvis de overvåkes).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-7-overvaking',
      type: 'text',
      content: `## Overvåkning

### Kommersiell overvåkning
Teknologiselskaper samler data for å:
- Målrette reklame
- Forbedre tjenester
- Predikere atferd
- Selge innsikt til tredjeparter

**Overvåkningskapitalisme:**
Et begrep som beskriver forretningsmodeller basert på å høste og selge persondata.

### Statlig overvåkning
Myndigheter overvåker for å:
- Forebygge terrorisme og kriminalitet
- Kontrollere grenser
- Innkreve skatt
- I autoritære regimer: Undertrykke opposisjon

### Utfordringer
- Hvor går grensen mellom sikkerhet og frihet?
- Hvem kontrollerer kontrollørene?
- Kan overvåkning misbrukes?
- "Chilling effect" – selvsensureringseffekt`,
    },
    {
      id: 'samfunnskunnskap-7-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi eksempler på ulike typer digitale spor vi legger igjen.',
        solution: 'Aktive spor: Poster i sosiale medier, e-poster, søk, nettkjøp. Passive spor: Lokasjonsdata, cookies, IP-adresser. Metadata: Når/hvor kommunikasjon skjedde, hvem du kommuniserte med. Samles av tech-selskaper, annonsører, myndigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-7-lovgivning',
      type: 'text',
      content: `## Personvernlovgivning

### GDPR (General Data Protection Regulation)
EUs personvernforordning fra 2018, også gjeldende i Norge:

**Grunnprinsipper:**
- Lovlighet og rettferdighet
- Formålsbegrensning
- Dataminimering
- Riktighet
- Lagringsbegrensning
- Integritet og konfidensialitet

**Dine rettigheter:**
- Rett til informasjon
- Rett til innsyn
- Rett til retting
- Rett til sletting ("retten til å bli glemt")
- Rett til dataportabilitet
- Rett til å protestere

### Datatilsynet
- Norsk tilsynsmyndighet for personvern
- Kan gi bøter og pålegg
- Veileder og informerer`,
    },
    {
      id: 'samfunnskunnskap-7-7-eksempler',
      type: 'example',
      title: 'Personvernutfordringer',
      content: `**Ansiktsgjenkjenning:**
- Kan identifisere personer fra bilder
- Brukes av politi og i overvåkning
- Kina: Omfattende bruk for kontroll
- Europa: Strenge begrensninger

**Sosiale medier:**
- Vi gir bort data frivillig
- Deling av bilder av andre
- Barn og unges digitale fotavtrykk
- Psykologisk profilering

**Helsedata:**
- Sensitive opplysninger om sykdom
- Helseapper og treningsutstyr
- Forsikringsselskapers interesse

**Smarte hjem:**
- IoT-enheter som samler data
- Smarthøyttalere som lytter
- Hvem har tilgang?

**Arbeidslivet:**
- Overvåkning av ansatte
- Innsyn i e-post
- Produktivitetsmåling`,
    },
    {
      id: 'samfunnskunnskap-7-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er GDPR og hvilke rettigheter gir det deg?',
        solution: 'GDPR er EUs personvernforordning fra 2018, også gjeldende i Norge. Rettigheter: Innsyn i data om deg, retting av feil, sletting ("rett til å bli glemt"), dataportabilitet, informasjon om hvordan data brukes, rett til å protestere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-7-7-beskyttelse',
      type: 'text',
      content: `## Hvordan beskytte personvernet

### Tekniske tiltak
- Bruk sterke passord og tofaktorautentisering
- Vurder hvilke tillatelser apper får
- Bruk VPN og privat nettlesing
- Begrens cookies
- Krypter kommunikasjon

### Bevisste valg
- Les personvernerklæringer
- Tenk før du deler
- Vurder om tjenesten er verdt dataene
- Bruk alternative tjenester med bedre personvern

### Rettigheter
- Be om innsyn i data om deg
- Krev sletting av unødvendige data
- Klage til Datatilsynet ved brudd
- Støtt organisasjoner som kjemper for personvern

### Samfunnsnivå
- Støtt sterkere personvernlovgivning
- Delta i debatten
- Krev transparens fra selskaper og myndigheter`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-7-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-7-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Bør staten ha lov til å overvåke innbyggerne for å forebygge terrorisme?',
        solution: 'For: Kan forebygge angrep, beskytte befolkningen, finne kriminelle. Mot: Krenker personvernet, "chilling effect" på ytringsfrihet, kan misbrukes, hvem kontrollerer kontrollørene? Konklusjon: Balanse med strenge regler, domstolskontroll, transparens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_1: TextbookChapter = {
  id: 'samfunnskunnskap-8-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.1',
  title: 'Den norske velferdsstaten',
  description: 'Forstå kjennetegnene ved den norske velferdsstaten, universelle ordninger og hvordan den finansieres.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare kjennetegnene ved den norske velferdsstaten',
    'forstå hvordan velferdsstaten finansieres og fungerer',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-1-intro',
      type: 'text',
      content: `## Hva er en velferdsstat?

En **velferdsstat** er en stat som tar ansvar for innbyggernes velferd gjennom offentlige ordninger. Den norske velferdsstaten sørger for at alle har tilgang til helsetjenester, utdanning, trygd og pensjon.

**Kjennetegn ved den norske velferdsstaten:**
- Universelle ordninger som gjelder alle
- Finansiert gjennom skatter og avgifter
- Omfattende offentlig sektor
- Mål om likhet og trygghet`,
    },
    {
      id: 'samfunnskunnskap-8-1-historie',
      type: 'definition',
      title: 'Velferdsstatens utvikling',
      content: `### Historisk bakgrunn

**Tidlig velferd:**
- Fattiglover på 1800-tallet
- Fabrikklovgivning for å beskytte arbeidere
- Frivillige organisasjoner og kirken

**Mellomkrigstiden:**
- Trygdeordninger innføres
- Arbeidsledighets- og syketrygd
- Starten på moderne velferdsstat

**Etterkrigstiden:**
- Sterk utbygging av velferdsstaten
- Folketrygden innført (1967)
- Utdanning og helse for alle
- "Den nordiske modellen" tar form

**Nyere tid:**
- Videreutvikling og reformer
- Debatter om bærekraft
- Privatisering vs. offentlig drift`,
    },
    {
      id: 'samfunnskunnskap-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner den norske velferdsstaten?',
        solution: 'Kjennetegn: Universelle ordninger som gjelder alle (ikke behovsprøvd), finansiert gjennom skatter og avgifter, omfattende offentlig sektor, mål om likhet og sosial trygghet, høyt skattenivå, omfattende omfordeling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-1-prinsipper',
      type: 'text',
      content: `## Velferdsstatens prinsipper

### Universalisme
- Ordningene gjelder **alle** – ikke bare de fattige
- Lik tilgang uavhengig av inntekt
- Skaper fellesskap og legitimitet
- Unngår stigmatisering

### Omfordeling
- Skatter etter evne
- Ytelser etter behov
- Reduserer økonomiske forskjeller
- "Yte etter evne, få etter behov"

### Sosial trygghet
- Vern mot fattigdom
- Sikkerhetsnett ved sykdom, arbeidsledighet, alderdom
- Alle skal ha verdige levekår

### Likhet
- Like muligheter for alle
- Gratis utdanning og helsetjenester
- Uavhengig av foreldres økonomi`,
    },
    {
      id: 'samfunnskunnskap-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar prinsippene universalisme og omfordeling.',
        solution: 'Universalisme: Velferdsordningene gjelder alle, ikke bare de fattige. Skaper fellesskap og legitimitet. Omfordeling: Skatter etter evne, ytelser etter behov. Reduserer økonomiske forskjeller og sikrer alle verdige levekår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-1-finansiering',
      type: 'text',
      content: `## Hvordan finansieres velferdsstaten?

### Skatter
- **Inntektsskatt:** Fra lønn og næring
- **Formuesskatt:** På nettoformue
- **Selskapsskatt:** Fra bedrifter

### Avgifter
- **Merverdiavgift (moms):** På varer og tjenester
- **Særavgifter:** Alkohol, tobakk, drivstoff
- **Arbeidsgiveravgift:** Betalt av arbeidsgivere

### Oljefondet
- Overskudd fra olje og gass spares
- Sikrer fremtidig velferd
- Kun avkastningen brukes (handlingsregelen)

### Fordelingen
Statsbudsjettet fordeles på:
- Helse og omsorg
- Trygder og pensjoner
- Utdanning
- Forsvar og politi
- Samferdsel
- Kommunene`,
    },
    {
      id: 'samfunnskunnskap-8-1-ordninger',
      type: 'example',
      title: 'Velferdsordningene',
      content: `**Helse:**
- Fastlegeordning
- Sykehus (spesialisthelsetjeneste)
- Psykisk helsevern
- Tannhelse for barn og unge

**Utdanning:**
- Gratis grunnskole og videregående
- Lånekassen for høyere utdanning
- Voksenopplæring

**Trygd og pensjon (Folketrygden):**
- Sykepenger
- Arbeidsledighetstrygd (dagpenger)
- Uføretrygd
- Alderspensjon
- Foreldrepenger

**Sosiale tjenester:**
- Sosialhjelp
- Barnevern
- Rusomsorg
- Flyktningmottak

**NAV:**
- Samler arbeids- og velferdsforvaltningen
- Arbeidsformidling og trygdeutbetalinger`,
    },
    {
      id: 'samfunnskunnskap-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan finansieres den norske velferdsstaten?',
        solution: 'Hovedkilder: Inntektsskatt (lønn, næring), merverdiavgift (moms), arbeidsgiveravgift, særavgifter (alkohol, tobakk, drivstoff), selskapsskatt, formuesskatt. I tillegg brukes avkastning fra Oljefondet etter handlingsregelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn fem viktige velferdsordninger i Norge og forklar kort hva de gir deg.',
        solution: 'Fem av: Sykepenger (lønn ved sykdom), arbeidsledighetstrygd (ved arbeidsledighet), alderspensjon (inntekt som pensjonist), foreldrepenger (ved fødsel), gratis utdanning, fastlegeordning, sykehusbehandling, sosialhjelp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_2: TextbookChapter = {
  id: 'samfunnskunnskap-8-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.2',
  title: 'Skatter og avgifter',
  description: 'Forstå ulike typer skatter og avgifter, progressiv beskatning og skattens rolle i samfunnet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forklare ulike typer skatter og avgifter',
    'forstå progressiv beskatning og omfordeling',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-2-intro',
      type: 'text',
      content: `## Hvorfor skatt?

**Skatter og avgifter** er samfunnets måte å finansiere fellesgodene på. Uten skatt ville vi ikke hatt veier, skoler, sykehus eller politi.

**Skattens funksjoner:**
- Finansiere offentlige tjenester
- Omfordele ressurser
- Styre atferd (avgifter på tobakk, alkohol, miljøskadelig)
- Stabilisere økonomien`,
    },
    {
      id: 'samfunnskunnskap-8-2-typer',
      type: 'definition',
      title: 'Typer skatter',
      content: `### Direkte skatter
Betales direkte av den som ilegges skatten:

**Inntektsskatt:**
- Trinnsskatt (progressiv)
- Trinnskatten øker med inntekt
- Trinn 1-4 med stigende satser

**Skatt på alminnelig inntekt:**
- Flat sats (22%)
- Etter fradrag

**Formuesskatt:**
- Skatt på nettoformue over bunnfradrag
- Betales til stat og kommune

**Selskapsskatt:**
- Skatt på bedrifters overskudd
- 22% i Norge

### Indirekte skatter
Inkludert i prisen på varer og tjenester:

**Merverdiavgift (moms):**
- 25% på de fleste varer
- 15% på mat
- 12% på kultur, transport, overnatting

**Særavgifter:**
- Alkohol- og tobakksavgift
- Drivstoffavgift
- CO2-avgift
- Sukkeravgift`,
    },
    {
      id: 'samfunnskunnskap-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er skattens hovedfunksjoner i samfunnet?',
        solution: 'Fire hovedfunksjoner: 1) Finansiere offentlige tjenester (helse, utdanning, politi), 2) Omfordele ressurser (fra rike til fattige), 3) Styre atferd (avgifter på tobakk, alkohol, miljøskadelig), 4) Stabilisere økonomien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-2-progressiv',
      type: 'text',
      content: `## Progressiv beskatning

Norge har et **progressivt skattesystem** – skatten øker med inntekten.

### Hva betyr progressiv?
- Høyere inntekt → høyere skatteprosent
- De som tjener mest, betaler mest både i kroner og prosent
- Motsatt: Flat skatt – alle betaler samme prosent

### Trinnsskattene (2024)
- **Trinn 1:** 1,7% for inntekt over 208 050 kr
- **Trinn 2:** 4,0% for inntekt over 292 850 kr
- **Trinn 3:** 13,6% for inntekt over 670 000 kr
- **Trinn 4:** 16,6% for inntekt over 937 900 kr

### Begrunnelser for progressiv skatt
- **Rettferdighet:** De som har mest, bidrar mest
- **Betalingsevne:** Marginalkronen verdt mindre for rike
- **Omfordeling:** Reduserer ulikhet
- **Stabilisering:** Automatisk stabilisator i økonomien`,
    },
    {
      id: 'samfunnskunnskap-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen på direkte og indirekte skatter.',
        solution: 'Direkte skatter: Betales direkte av den som ilegges (inntektsskatt, formuesskatt, selskapsskatt). Indirekte skatter: Inkludert i prisen på varer og tjenester (moms, særavgifter). Direkte skatter kan være progressive, indirekte rammer relativt likt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-2-debatt',
      type: 'text',
      content: `## Skattedebatt

### Argumenter for høye skatter
- Finansierer gode fellesgoder
- Omfordeler og skaper likhet
- Sikrer sosial trygghet
- Investerer i fremtiden (utdanning, forskning)

### Argumenter for lavere skatter
- Stimulerer arbeidsvilje og innovasjon
- Mer penger til den enkelte
- Mer effektiv privat bruk av ressurser
- Konkurranse med andre land

### Politiske skillelinjer
**Venstresiden:**
- Forsvarer høye skatter
- Vil øke formues- og inntektsskatt for de rikeste
- Prioriterer omfordeling

**Høyresiden:**
- Vil redusere skatter og avgifter
- Mener privat sektor er mer effektiv
- Vil stimulere investeringer

### Internasjonale hensyn
- Skattekonkurranse mellom land
- Skatteparadiser
- Multinasjonale selskapers skatteplanlegging`,
    },
    {
      id: 'samfunnskunnskap-8-2-eksempel',
      type: 'example',
      title: 'Skatteeksempel',
      content: `**Din inntekt og skatt:**

La oss si du tjener **500 000 kr** i året:

**Beregning av trinnsskatt:**
- Trinn 1 (208 050 - 292 850): 1,7% = ca. 1 442 kr
- Trinn 2 (292 850 - 500 000): 4,0% = ca. 8 286 kr
- Sum trinnsskatt: ca. 9 728 kr

**Skatt på alminnelig inntekt:**
- 500 000 - fradrag (ca. 100 000) = 400 000
- 22% av 400 000 = 88 000 kr

**Arbeidsgiveravgift:**
- Arbeidsgiver betaler i tillegg 14,1% (varierer)
- 500 000 × 14,1% = 70 500 kr

**Totalt betaler du og arbeidsgiver betydelige beløp i skatt – men får tilbake i form av fellesgoder.**`,
    },
    {
      id: 'samfunnskunnskap-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr det at Norge har progressiv beskatning?',
        solution: 'Progressiv beskatning betyr at skatteprosenten øker med inntekten. De som tjener mest, betaler mest både i kroner og i prosent. Begrunnelser: Rettferdighet, betalingsevne, omfordeling. Trinnsskatten er et eksempel på progressiv skatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft argumenter for og mot høye skatter.',
        solution: 'For: Finansierer fellesgoder, omfordeler, sikrer trygghet, investerer i fremtiden. Mot: Hemmer arbeidsvilje/innovasjon, mer penger til den enkelte, privat sektor mer effektiv, konkurranse med utlandet. Balanse mellom fellesskap og individ.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_3: TextbookChapter = {
  id: 'samfunnskunnskap-8-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.3',
  title: 'Statsbudsjettet',
  description: 'Forstå hvordan statsbudsjettet utarbeides, prioriteringer og forholdet mellom utgifter og inntekter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå hvordan statsbudsjettet utarbeides',
    'kjenne til hovedpostene i statsbudsjettet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-3-intro',
      type: 'text',
      content: `## Hva er statsbudsjettet?

**Statsbudsjettet** er statens økonomiske plan for det kommende året. Det viser hvordan staten planlegger å bruke og skaffe penger.

Statsbudsjettet er et viktig politisk dokument som viser regjeringens prioriteringer. Det behandles av Stortinget hver høst og vedtas før jul.`,
    },
    {
      id: 'samfunnskunnskap-8-3-prosess',
      type: 'definition',
      title: 'Budsjettprosessen',
      content: `### Utarbeidelse
1. **Departementene** utarbeider forslag
2. **Finansdepartementet** koordinerer
3. **Regjeringen** legger frem forslag (oktober)

### Behandling i Stortinget
1. **Finanskomitéen** behandler helheten
2. **Fagkomiteene** behandler sine områder
3. **Stortinget** vedtar budsjettet (desember)

### Neste års budsjett
- Bygger på foregående år
- Justeres for politiske prioriteringer
- Tilpasses økonomisk situasjon

### Revidert budsjett
- Legges frem i mai
- Justerer for endringer
- Behandles av Stortinget i juni`,
    },
    {
      id: 'samfunnskunnskap-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv prosessen fra regjeringen legger frem statsbudsjettet til det vedtas.',
        solution: 'Prosess: 1) Regjeringen legger frem forslag i oktober, 2) Finanskomitéen behandler helheten, 3) Fagkomiteene behandler sine områder, 4) Stortinget debatterer og vedtar budsjettet i desember. I mai kommer revidert budsjett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-3-inntekter',
      type: 'text',
      content: `## Statens inntekter

### Skatter og avgifter (ca. 80%)
- Skatt på inntekt og formue
- Merverdiavgift
- Arbeidsgiveravgift
- Særavgifter

### Petroleumsinntekter
- Skatt på oljeselskaper
- Avgifter og utbytte fra Equinor
- Varierer med oljepris

### Andre inntekter
- Utbytte fra statlige selskaper
- Gebyrer og avgifter
- Tilbakebetaling av lån

### Handlingsregelen
- Kun avkastningen fra Oljefondet brukes
- Forventet realavkastning: 3%
- Sikrer bærekraft over tid`,
    },
    {
      id: 'samfunnskunnskap-8-3-utgifter',
      type: 'text',
      content: `## Statens utgifter

### De største postene (2024-tall)
1. **Folketrygden:** Ca. 550 mrd. kr (pensjon, trygd)
2. **Helse og omsorg:** Ca. 250 mrd. kr
3. **Kommuneoverføringer:** Ca. 200 mrd. kr
4. **Utdanning og forskning:** Ca. 90 mrd. kr
5. **Forsvar:** Ca. 90 mrd. kr
6. **Samferdsel:** Ca. 80 mrd. kr

### Bundne vs. frie midler
**Bundne utgifter:**
- Pensjoner og trygder (rettighetsbasert)
- Renteutgifter
- Vanskelig å kutte

**Frie midler:**
- Kan prioriteres politisk
- Kulturbudsjettet, bistand, forskning
- Her ligger handlingsrommet

### Totalbudsjett
Ca. 1 800 milliarder kroner (2024)`,
    },
    {
      id: 'samfunnskunnskap-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de viktigste inntektskildene i statsbudsjettet?',
        solution: 'Hovedkilder: Skatter og avgifter (ca. 80%) – inntektsskatt, moms, arbeidsgiveravgift, særavgifter. Petroleumsinntekter (varierer). Andre: Utbytte fra statlige selskaper, gebyrer. Overføring fra Oljefondet dekker underskuddet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-3-balanse',
      type: 'example',
      title: 'Budsjettbalanse',
      content: `**Underskudd og oljepengebruk:**

Statsbudsjettet har normalt et **strukturelt underskudd** – vi bruker mer enn vi henter inn i skatter og avgifter.

**Hvordan dekkes underskuddet?**
Overføring fra Oljefondet etter handlingsregelen.

**Handlingsregelen:**
- Vi kan bruke forventet realavkastning (3%)
- Av et fond på 15 000 mrd. = 450 mrd. kr
- Gir fleksibilitet til å finansiere velferden

**Utfordring:**
- Bruker vi for mye, tar vi fra fremtidige generasjoner
- Bruker vi for lite, sparer vi unødvendig

**Politisk debatt:**
- Hvor mye bør vi bruke?
- Hva bør pengene gå til?
- Hvordan sikre bærekraft på lang sikt?`,
    },
    {
      id: 'samfunnskunnskap-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn de tre største utgiftspostene i statsbudsjettet.',
        solution: 'De tre største: 1) Folketrygden (pensjon, trygd) – ca. 550 mrd., 2) Helse og omsorg – ca. 250 mrd., 3) Kommuneoverføringer – ca. 200 mrd. Disse er i stor grad bundne utgifter som vanskelig kan kuttes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er handlingsregelen og hvorfor har vi den?',
        solution: 'Handlingsregelen: Vi kan bruke forventet realavkastning fra Oljefondet (3%) i statsbudsjettet. Begrunnelse: Sikrer at fondet varer over tid, unngår overoppheting av økonomien, tar vare på fremtidige generasjoner, skaper forutsigbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_4: TextbookChapter = {
  id: 'samfunnskunnskap-8-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.4',
  title: 'Velferdsordninger',
  description: 'Oversikt over de viktigste velferdsordningene i Norge: NAV, helse, utdanning og pensjon.',
  estimatedMinutes: 30,
  competenceGoals: [
    'kjenne til de viktigste velferdsordningene',
    'forstå hvordan NAV og folketrygden fungerer',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-4-intro',
      type: 'text',
      content: `## Norges velferdsordninger

Norge har omfattende velferdsordninger som sikrer innbyggerne trygghet gjennom livet. De viktigste ordningene administreres av **NAV** og **Folketrygden**.`,
    },
    {
      id: 'samfunnskunnskap-8-4-nav',
      type: 'definition',
      title: 'NAV',
      content: `**NAV** (Arbeids- og velferdsforvaltningen) ble opprettet i 2006 ved å slå sammen Aetat, trygdeetaten og sosialtjenesten.

**NAVs oppgaver:**
- Forvalte folketrygden
- Arbeidsformidling
- Oppfølging av arbeidssøkere
- Utbetale trygder og stønader
- Sosialtjenester (kommunalt)`,
    },
    {
      id: 'samfunnskunnskap-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er NAVs hovedoppgaver?',
        solution: 'NAVs oppgaver: Forvalte folketrygden, arbeidsformidling, oppfølging av arbeidssøkere, utbetale trygder og stønader, samt sosialtjenester (sammen med kommunene).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-4-ordninger',
      type: 'text',
      content: `## De viktigste ordningene

### Sykepenger
- 100% av lønn (opp til 6G) i inntil ett år
- Arbeidsgiver betaler de første 16 dagene
- Krever sykmelding fra lege

### Dagpenger
- Ved arbeidsledighet
- Ca. 62% av tidligere inntekt
- Må være aktiv arbeidssøker

### Arbeidsavklaringspenger (AAP)
- Under avklaring av arbeidsevne
- Ved sykdom eller skade
- Aktiv deltakelse i tiltak

### Uføretrygd
- Ved varig nedsatt arbeidsevne
- Krever at arbeidsevnen er prøvd
- 66% av tidligere inntekt

### Alderspensjon
- Fra 67 år (fleksibelt uttak fra 62)
- Opptjenes gjennom arbeid
- Grunnpensjon + tilleggspensjon

### Foreldrepenger
- Ved fødsel eller adopsjon
- 100% eller 80% av lønn
- Fordeles mellom foreldrene`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen på sykepenger, arbeidsavklaringspenger og uføretrygd.',
        solution: 'Sykepenger: Ved kortvarig sykdom, 100% i inntil ett år. AAP: Under avklaring av arbeidsevne, med tiltak. Uføretrygd: Ved varig nedsatt arbeidsevne (66%). Går fra kortsiktig til langsiktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_5: TextbookChapter = {
  id: 'samfunnskunnskap-8-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.5',
  title: 'Oljefondet',
  description: 'Forstå hvordan Statens pensjonsfond utland (Oljefondet) er bygget opp og forvaltes.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå Oljefondets betydning for Norge',
    'kjenne til handlingsregelen og etiske retningslinjer',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-5-intro',
      type: 'text',
      content: `## Verdens største statlige fond

**Statens pensjonsfond utland** (Oljefondet) er verdens største statlige investeringsfond med over 15 000 milliarder kroner. Det ble opprettet for å forvalte Norges oljeinntekter for fremtidige generasjoner.`,
    },
    {
      id: 'samfunnskunnskap-8-5-formaal',
      type: 'definition',
      title: 'Fondets formål',
      content: `**Hovedformål:**
- Sikre langsiktig forvaltning av petroleumsinntektene
- Støtte opp under statsfinansene
- Ivareta fremtidige generasjoners interesser

**Hvorfor spare?**
- Olje og gass tar slutt
- Unngå "hollandsk syke" (overoppheting)
- Langsiktig perspektiv`,
    },
    {
      id: 'samfunnskunnskap-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er formålet med Oljefondet?',
        solution: 'Formål: Sikre langsiktig forvaltning av petroleumsinntektene, støtte statsfinansene, ivareta fremtidige generasjoners interesser. Unngå overoppheting av økonomien og sikre bærekraft når oljen tar slutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-5-forvaltning',
      type: 'text',
      content: `## Forvaltning

### Norges Bank Investment Management (NBIM)
- Forvalter fondet på vegne av staten
- Investerer globalt i aksjer, obligasjoner og eiendom

### Investeringsstrategi
- **Aksjer:** Ca. 70%
- **Obligasjoner:** Ca. 27%
- **Eiendom:** Ca. 3%

### Geografisk spredning
- Investert i over 70 land
- Eier ca. 1,5% av verdens børsnoterte selskaper

### Handlingsregelen
- Bruker forventet realavkastning (3%)
- Dekker underskuddet i statsbudsjettet`,
    },
    {
      id: 'samfunnskunnskap-8-5-etikk',
      type: 'text',
      content: `## Etiske retningslinjer

Etikkrådet gir anbefalinger om utelukkelse av selskaper.

**Kriterier for utelukkelse:**
- Produksjon av visse våpentyper
- Alvorlig miljøskade
- Grove menneskerettighetsbrudd
- Alvorlig korrupsjon
- Andre grove brudd på etiske normer

**Eksempler på utelukkede selskaper:**
- Våpenprodusenter (klasevåpen, atomvåpen)
- Tobakksprodusenter
- Kullselskaper over visse grenser`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan er fondet investert og hvem forvalter det?',
        solution: 'Forvaltet av NBIM (del av Norges Bank). Investert: Ca. 70% aksjer, 27% obligasjoner, 3% eiendom. Spredt globalt i over 70 land. Eier ca. 1,5% av verdens børsnoterte selskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_6: TextbookChapter = {
  id: 'samfunnskunnskap-8-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.6',
  title: 'Økonomisk ulikhet',
  description: 'Forstå måling av økonomisk ulikhet, fattigdom i Norge og hvordan omfordeling fungerer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå hvordan ulikhet måles',
    'kjenne til debatter om ulikhet og omfordeling',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-6-intro',
      type: 'text',
      content: `## Økonomisk ulikhet i Norge

Norge er et av landene med minst økonomisk ulikhet, men ulikheten har økt de siste tiårene. Hvordan måler vi ulikhet, og hva er konsekvensene?`,
    },
    {
      id: 'samfunnskunnskap-8-6-maaling',
      type: 'definition',
      title: 'Måling av ulikhet',
      content: `### Gini-koeffisienten
- Tall mellom 0 og 1
- 0 = fullstendig likhet
- 1 = én person har alt
- Norge: Ca. 0,27 (relativt lavt)

### Andre mål
- Inntektsandeler (rikeste 10% vs. fattigste 10%)
- Formuesulikhet (mer ulik enn inntekt)
- Sosial mobilitet (mulighet til å klatre)`,
    },
    {
      id: 'samfunnskunnskap-8-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Gini-koeffisienten og hva forteller den?',
        solution: 'Gini-koeffisienten måler ulikhet på en skala fra 0 (fullstendig likhet) til 1 (én person har alt). Norge ligger på ca. 0,27, som er relativt lavt internasjonalt. Jo lavere tall, jo mer lik fordeling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-6-fattigdom',
      type: 'text',
      content: `## Fattigdom i Norge

### Relativ fattigdom
- Under 60% av medianinntekten
- Ca. 10-12% av befolkningen
- Økt barnefattigdom bekymrer

### Hvem er fattige?
- Enslige forsørgere
- Innvandrerfamilier
- Personer utenfor arbeidslivet
- Mottakere av sosialhjelp

### Konsekvenser
- Dårligere helse
- Lavere utdanning
- Sosial ekskludering
- Overføres til neste generasjon`,
    },
    {
      id: 'samfunnskunnskap-8-6-omfordeling',
      type: 'text',
      content: `## Omfordeling

### Hvordan omfordeler staten?
- Progressiv skatt
- Universelle velferdsordninger
- Behovsprøvde stønader
- Gratis utdanning og helse

### Debatt om ulikhet
**Høyre:** Ulikhet er naturlig, stimulerer innsats
**Venstre:** Ulikhet er urettferdig, hemmer muligheter
**Midt:** Balanse mellom likhet og insentiver`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvem er mest utsatt for fattigdom i Norge?',
        solution: 'Grupper: Enslige forsørgere, innvandrerfamilier (særlig nyankomne), personer utenfor arbeidslivet, sosialhjelpsmottakere, barn i lavinntektsfamilier. Fattigdom kan gi dårligere helse, utdanning og sosial ekskludering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_7: TextbookChapter = {
  id: 'samfunnskunnskap-8-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.7',
  title: 'Velferdsmodeller i verden',
  description: 'Sammenlign den nordiske modellen med liberale og konservative velferdsmodeller.',
  estimatedMinutes: 30,
  competenceGoals: [
    'sammenligne ulike velferdsmodeller',
    'forstå den nordiske modellens særtrekk',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-7-intro',
      type: 'text',
      content: `## Tre velferdsmodeller

Forskere skiller mellom tre hovedtyper av velferdsstater: sosialdemokratisk (nordisk), konservativ (europeisk) og liberal (angloamerikansk).`,
    },
    {
      id: 'samfunnskunnskap-8-7-nordisk',
      type: 'definition',
      title: 'Den nordiske modellen',
      content: `**Kjennetegn:**
- Universelle ordninger for alle
- Høyt skattenivå
- Omfattende offentlig sektor
- Sterk omfordeling
- Trepartssamarbeid (stat, arbeidsgiver, fagbevegelse)

**Land:** Norge, Sverige, Danmark, Finland, Island`,
    },
    {
      id: 'samfunnskunnskap-8-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner den nordiske velferdsmodellen?',
        solution: 'Kjennetegn: Universelle ordninger for alle, høyt skattenivå, omfattende offentlig sektor, sterk omfordeling, trepartssamarbeid mellom stat, arbeidsgivere og fagbevegelse. Finnes i Norge, Sverige, Danmark, Finland, Island.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-7-andre',
      type: 'text',
      content: `## Konservativ modell (kontinentaleuropeisk)
**Kjennetegn:**
- Knyttet til arbeidsdeltakelse
- Familie som viktig enhet
- Forsikringsbaserte ordninger
**Land:** Tyskland, Frankrike, Italia

## Liberal modell (angloamerikansk)
**Kjennetegn:**
- Begrenset offentlig velferd
- Behovsprøving
- Marked og privat forsikring
- Lavt skattenivå
**Land:** USA, Storbritannia, Australia`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign den nordiske og den liberale velferdsmodellen.',
        solution: 'Nordisk: Universelle ordninger, høye skatter, omfattende offentlig sektor, sterk omfordeling. Liberal: Behovsprøvde ordninger, lave skatter, begrenset offentlig velferd, privat forsikring. Nordisk gir mer likhet, liberal mer valgfrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_8_8: TextbookChapter = {
  id: 'samfunnskunnskap-8-8',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8.8',
  title: 'Velferdsstatens utfordringer',
  description: 'Forstå utfordringene velferdsstaten står overfor: eldrebølge, innvandring og bærekraft.',
  estimatedMinutes: 30,
  competenceGoals: [
    'forstå utfordringene velferdsstaten står overfor',
    'vurdere løsninger på bærekraftsutfordringer',
  ],
  content: [
    {
      id: 'samfunnskunnskap-8-8-intro',
      type: 'text',
      content: `## Velferdsstaten under press

Den norske velferdsstaten står overfor flere utfordringer som truer bærekraften på lang sikt. Hvordan skal vi finansiere velferden i fremtiden?`,
    },
    {
      id: 'samfunnskunnskap-8-8-eldrebolge',
      type: 'definition',
      title: 'Eldrebølgen',
      content: `**Hva er eldrebølgen?**
Andelen eldre i befolkningen øker kraftig når de store etterkrigskullene pensjoneres.

**Konsekvenser:**
- Flere pensjonister, færre i arbeid
- Økte utgifter til helse og omsorg
- Færre skattebetalere per pensjonist

**Forsørgelsesbyrden:**
1970: 5 yrkesaktive per pensjonist
2050: Ca. 2,5 yrkesaktive per pensjonist`,
    },
    {
      id: 'samfunnskunnskap-8-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er eldrebølgen og hvorfor er den en utfordring?',
        solution: 'Eldrebølgen: Andelen eldre øker kraftig når de store etterkrigskullene pensjoneres. Utfordring: Flere pensjonister, færre i arbeid, økte utgifter til helse/omsorg, færre skattebetalere per pensjonist. Truer velferdsstatens bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-8-8-andre',
      type: 'text',
      content: `## Andre utfordringer

### Innvandring
- Kan bidra med arbeidskraft
- Men også økte utgifter til integrering
- Avhenger av sysselsetting

### Utenforskap
- Mange står utenfor arbeidslivet
- Helseutfordringer og uførhet
- Unge utenfor utdanning og arbeid

### Oljefondet ikke evig
- Petroleumsinntektene vil avta
- Må sikre bærekraft uten oljen

### Globalisering
- Skattekonkurranse mellom land
- Multinasjonale selskapers skatteplanlegging`,
    },
    {
      id: 'samfunnskunnskap-8-8-losninger',
      type: 'text',
      content: `## Mulige løsninger

- Øke pensjonsalderen
- Få flere i arbeid (integrering, helse)
- Effektivisere offentlig sektor
- Øke skattene
- Prioritere hardere
- Teknologi og innovasjon`,
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'samfunnskunnskap-8-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-8-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre mulige løsninger på velferdsstatens utfordringer.',
        solution: 'Tre av: Øke pensjonsalderen, få flere i arbeid (integrering, rehabilitering), effektivisere offentlig sektor, øke skattene, prioritere hardere mellom oppgaver, teknologi og innovasjon i tjenestene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_1: TextbookChapter = {
  id: 'samfunnskunnskap-9-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.1',
  title: 'Hva er bærekraftig utvikling?',
  description: 'Forstå begrepet bærekraftig utvikling og de tre dimensjonene: økologisk, sosial og økonomisk.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå begrepet bærekraftig utvikling', 'kjenne til de tre dimensjonene'],
  content: [
    { id: 'samfunnskunnskap-9-1-intro', type: 'text', content: `## Bærekraftig utvikling\n\n**Bærekraftig utvikling** er utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter. Begrepet ble definert i Brundtland-rapporten (1987).` },
    { id: 'samfunnskunnskap-9-1-def', type: 'definition', title: 'De tre dimensjonene', content: `**Økologisk bærekraft:** Bevare naturressurser og økosystemer.\n**Sosial bærekraft:** Sikre rettferdighet, helse og utdanning for alle.\n**Økonomisk bærekraft:** Økonomisk vekst som ikke ødelegger miljø eller skaper ulikhet.` },
    { id: 'samfunnskunnskap-9-1-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-1-ex-1', number: '1', type: 'classic', task: 'Hva betyr bærekraftig utvikling?', solution: 'Utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter. Definert i Brundtland-rapporten 1987.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-9-1-ex-2', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-1-ex-2', number: '2', type: 'classic', task: 'Forklar de tre dimensjonene av bærekraft.', solution: 'Økologisk: Bevare natur. Sosial: Rettferdighet og velferd. Økonomisk: Vekst uten miljøskade. Må balanseres.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_2: TextbookChapter = {
  id: 'samfunnskunnskap-9-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.2',
  title: 'FNs bærekraftsmål',
  description: 'Forstå de 17 bærekraftsmålene og hvordan de styrer internasjonal politikk.',
  estimatedMinutes: 30,
  competenceGoals: ['kjenne til FNs 17 bærekraftsmål', 'forstå sammenhengene mellom målene'],
  content: [
    { id: 'samfunnskunnskap-9-2-intro', type: 'text', content: `## FNs bærekraftsmål (SDG)\n\nI 2015 vedtok FN **17 bærekraftsmål** som skal nås innen 2030. De erstatter Tusenårsmålene og gjelder alle land.` },
    { id: 'samfunnskunnskap-9-2-maal', type: 'definition', title: 'De 17 målene', content: `1. Utrydde fattigdom\n2. Utrydde sult\n3. God helse\n4. God utdanning\n5. Likestilling\n6. Rent vann\n7. Ren energi\n8. Anstendig arbeid\n9. Innovasjon\n10. Mindre ulikhet\n11. Bærekraftige byer\n12. Ansvarlig forbruk\n13. Stoppe klimaendringene\n14. Liv under vann\n15. Liv på land\n16. Fred og rettferdighet\n17. Samarbeid` },
    { id: 'samfunnskunnskap-9-2-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-2-ex-1', number: '1', type: 'classic', task: 'Nevn fem av FNs bærekraftsmål.', solution: 'Fem av: Utrydde fattigdom, god utdanning, likestilling, ren energi, stoppe klimaendringene, ansvarlig forbruk, fred og rettferdighet.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_3: TextbookChapter = {
  id: 'samfunnskunnskap-9-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.3',
  title: 'Klimaendringer',
  description: 'Forstå årsaker til og konsekvenser av klimaendringene.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå årsakene til klimaendringer', 'kjenne til konsekvensene'],
  content: [
    { id: 'samfunnskunnskap-9-3-intro', type: 'text', content: `## Klimaendringer\n\nJordens klima endres på grunn av **menneskelige utslipp** av klimagasser, særlig CO2 fra fossile brensler. Konsekvensene er alvorlige.` },
    { id: 'samfunnskunnskap-9-3-konsekvenser', type: 'definition', title: 'Konsekvenser', content: `**Temperaturøkning:** Global oppvarming på over 1°C allerede.\n**Issmelting:** Arktis og isbreer smelter.\n**Havnivåstigning:** Truer kystsamfunn.\n**Ekstremvær:** Flere hetebølger, flommer, tørke.\n**Naturmangfold:** Arter dør ut, økosystemer endres.` },
    { id: 'samfunnskunnskap-9-3-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-3-ex-1', number: '1', type: 'classic', task: 'Hva er de viktigste årsakene til klimaendringer?', solution: 'Menneskelige utslipp av klimagasser, særlig CO2 fra fossile brensler (kull, olje, gass). Avskoging bidrar også.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_4: TextbookChapter = {
  id: 'samfunnskunnskap-9-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.4',
  title: 'Norsk klimapolitikk',
  description: 'Forstå Norges klimamål og debatten om olje- og gassproduksjon.',
  estimatedMinutes: 30,
  competenceGoals: ['kjenne til Norges klimamål', 'forstå debatten om norsk oljepolitikk'],
  content: [
    { id: 'samfunnskunnskap-9-4-intro', type: 'text', content: `## Norsk klimapolitikk\n\nNorge har forpliktet seg til å kutte utslipp med **55% innen 2030** og bli klimanøytralt innen 2050. Men Norge er også en stor olje- og gasseksportør.` },
    { id: 'samfunnskunnskap-9-4-virkemidler', type: 'definition', title: 'Virkemidler', content: `**CO2-avgift:** Gjør utslipp dyrere.\n**Kvotehandel:** EU ETS for industrien.\n**Elektrifisering:** Av transport, plattformer.\n**Karbonfangst:** Langskip-prosjektet.\n**Grønn omstilling:** Støtte til ny teknologi.` },
    { id: 'samfunnskunnskap-9-4-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-4-ex-1', number: '1', type: 'classic', task: 'Hva er Norges klimamål?', solution: 'Kutte utslipp med 55% innen 2030 (sammenlignet med 1990), klimanøytralitet innen 2050. Forpliktet gjennom Parisavtalen og klimaloven.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_5: TextbookChapter = {
  id: 'samfunnskunnskap-9-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.5',
  title: 'Biologisk mangfold',
  description: 'Forstå betydningen av biologisk mangfold og truslene mot det.',
  estimatedMinutes: 25,
  competenceGoals: ['forstå hva biologisk mangfold er', 'kjenne til truslene mot naturmangfoldet'],
  content: [
    { id: 'samfunnskunnskap-9-5-intro', type: 'text', content: `## Biologisk mangfold\n\n**Biologisk mangfold** er variasjonen av arter, økosystemer og genetisk variasjon. Det er livsviktig for menneskers overlevelse.` },
    { id: 'samfunnskunnskap-9-5-trusler', type: 'definition', title: 'Trusler', content: `**Arealendringer:** Nedbygging, intensivt jordbruk.\n**Overutnyttelse:** Overfiske, jakt.\n**Forurensning:** Plast, giftstoffer.\n**Klimaendringer:** Endrer leveområder.\n**Fremmede arter:** Utkonkurrerer lokale arter.` },
    { id: 'samfunnskunnskap-9-5-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-5-ex-1', number: '1', type: 'classic', task: 'Hva truer biologisk mangfold?', solution: 'Arealendringer/nedbygging, overutnyttelse, forurensning, klimaendringer, fremmede arter. Tap av natur truer økosystemer og menneskers velferd.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_6: TextbookChapter = {
  id: 'samfunnskunnskap-9-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.6',
  title: 'Forbruk og bærekraft',
  description: 'Forstå sammenhengen mellom forbruk og miljøproblemer.',
  estimatedMinutes: 25,
  competenceGoals: ['forstå forbrukets miljøkonsekvenser', 'reflektere over bærekraftig forbruk'],
  content: [
    { id: 'samfunnskunnskap-9-6-intro', type: 'text', content: `## Forbruk og bærekraft\n\nVårt forbruksmønster har store miljøkonsekvenser. Hvis alle levde som nordmenn, ville vi trengt **3-4 jordkloder**.` },
    { id: 'samfunnskunnskap-9-6-fotavtrykk', type: 'definition', title: 'Økologisk fotavtrykk', content: `Måler ressursforbruket i areal. Norge har høyt fotavtrykk pga.:\n- Kjøttforbruk\n- Flyreiser\n- Bilbruk\n- Klær og elektronikk\n- Bolig og energi` },
    { id: 'samfunnskunnskap-9-6-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-6-ex-1', number: '1', type: 'classic', task: 'Hva er økologisk fotavtrykk?', solution: 'Mål på ressursforbruk i areal. Norge har høyt fotavtrykk. Viktige bidrag: Kjøtt, flyreiser, bil, klær, bolig. Må reduseres for bærekraft.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_7: TextbookChapter = {
  id: 'samfunnskunnskap-9-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.7',
  title: 'Klimarettferdighet',
  description: 'Forstå rettferdighetsutfordringene klimakrisen reiser.',
  estimatedMinutes: 25,
  competenceGoals: ['forstå klimarettferdighetsbegrepet', 'drøfte ansvarsfordeling'],
  content: [
    { id: 'samfunnskunnskap-9-7-intro', type: 'text', content: `## Klimarettferdighet\n\nKlimakrisen rammer **ulikt**. De som har bidratt minst til problemet, rammes hardest. Dette reiser spørsmål om rettferdighet.` },
    { id: 'samfunnskunnskap-9-7-sporsmal', type: 'definition', title: 'Rettferdighetsspørsmål', content: `**Mellom land:** Rike land har forårsaket mest, fattige rammes hardest.\n**Mellom generasjoner:** Dagens unge arver problemene.\n**Historisk ansvar:** Hvem skal betale for fortidas utslipp?` },
    { id: 'samfunnskunnskap-9-7-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-7-ex-1', number: '1', type: 'classic', task: 'Hva menes med klimarettferdighet?', solution: 'At rike land har forårsaket mest utslipp men fattige rammes hardest. Dagens unge arver problemene. Krever rettferdig ansvarsfordeling og støtte til sårbare land.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_9_8: TextbookChapter = {
  id: 'samfunnskunnskap-9-8',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9.8',
  title: 'Hva kan du gjøre?',
  description: 'Forstå hvordan du kan bidra til bærekraftig utvikling.',
  estimatedMinutes: 25,
  competenceGoals: ['reflektere over eget bidrag', 'kjenne til handlingsalternativer'],
  content: [
    { id: 'samfunnskunnskap-9-8-intro', type: 'text', content: `## Hva kan du gjøre?\n\nSom individ, samfunnsborger og velger kan du bidra til bærekraftig utvikling.` },
    { id: 'samfunnskunnskap-9-8-handlinger', type: 'definition', title: 'Handlingsalternativer', content: `**Forbruk:** Kjøp mindre, velg bærekraftig.\n**Transport:** Sykle, kollektivt, fly mindre.\n**Politikk:** Stem på klimavennlige partier.\n**Engasjement:** Delta i organisasjoner, demonstrasjoner.\n**Snakk:** Påvirk familie og venner.` },
    { id: 'samfunnskunnskap-9-8-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-9-8-ex-1', number: '1', type: 'classic', task: 'Nevn fem måter du kan bidra til bærekraft på.', solution: 'Fem av: Forbruk mindre/bærekraftig, velge sykkel/kollektivt, fly mindre, stemme grønt, engasjere seg i organisasjoner, snakke med andre, kreve politisk handling.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// === KAPITTEL 10: INTERNASJONALE FORHOLD DEL 1 ===

export const CHAPTER_SAMFUNNSKUNNSKAP_10_1: TextbookChapter = {
  id: 'samfunnskunnskap-10-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '10.1',
  title: 'Internasjonal politikk',
  description: 'Forstå grunnleggende begreper i internasjonal politikk som stater, suverenitet og folkerett.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå begrepet suverenitet', 'kjenne til folkerettens prinsipper'],
  content: [
    { id: 'samfunnskunnskap-10-1-intro', type: 'text', content: `## Internasjonal politikk\n\nInternasjonal politikk handler om forholdet mellom stater og andre aktører på verdensscenen. Dette inkluderer spørsmål om krig og fred, handel, menneskerettigheter og miljø.` },
    { id: 'samfunnskunnskap-10-1-stat', type: 'definition', title: 'Hva er en stat?', content: `En **stat** har:\n- **Territorium:** Et avgrenset landområde.\n- **Befolkning:** Folk som bor der.\n- **Styringssystem:** En regjering.\n- **Suverenitet:** Rett til å styre seg selv uten innblanding.\n\nI dag finnes det rundt 200 stater i verden.` },
    { id: 'samfunnskunnskap-10-1-folkerett', type: 'definition', title: 'Folkeretten', content: `**Folkeretten** er internasjonale regler som regulerer forholdet mellom stater. Sentrale prinsipper:\n- **Suverenitetsprinsippet:** Stater er likeverdige og selvstendige.\n- **Ikke-intervensjon:** Ingen stat skal blande seg inn i andre staters indre anliggender.\n- **Forbud mot maktbruk:** Krig er ulovlig unntatt i selvforsvar.` },
    { id: 'samfunnskunnskap-10-1-aktorer', type: 'text', content: `### Andre aktører\n\nI tillegg til stater finnes det:\n- **Internasjonale organisasjoner:** FN, NATO, EU.\n- **Multinasjonale selskaper:** Store bedrifter som opererer i mange land.\n- **NGO-er:** Ikke-statlige organisasjoner som Amnesty og Røde Kors.\n- **Terrorgrupper og kriminelle nettverk.**` },
    { id: 'samfunnskunnskap-10-1-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-10-1-ex-1', number: '1', type: 'classic', task: 'Forklar hva som menes med suverenitet.', solution: 'Suverenitet betyr at en stat har rett til å styre seg selv uten innblanding fra andre stater. Staten har full myndighet over sitt eget territorium og sin egen befolkning.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-10-1-ex-2', type: 'exercise', exercise: { id: 'samfunnskunnskap-10-1-ex-2', number: '2', type: 'classic', task: 'Hva er folkeretten og hvilke hovedprinsipper bygger den på?', solution: 'Folkeretten er internasjonale regler som regulerer forholdet mellom stater. Hovedprinsippene er suverenitetsprinsippet (stater er likeverdige), ikke-intervensjon (ingen innblanding i indre anliggender) og forbud mot maktbruk (krig er ulovlig unntatt i selvforsvar).', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_10_2: TextbookChapter = {
  id: 'samfunnskunnskap-10-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '10.2',
  title: 'Flyktninger og migrasjon',
  description: 'Forstå årsakene til flukt og migrasjon, flyktningers rettigheter og Norges rolle.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå årsaker til migrasjon', 'kjenne til flyktningers rettigheter'],
  content: [
    { id: 'samfunnskunnskap-10-2-intro', type: 'text', content: `## Flyktninger og migrasjon\n\nMigrasjon betyr at mennesker flytter fra ett sted til et annet. Når mennesker tvinges på flukt på grunn av forfølgelse, krig eller katastrofer, kalles de flyktninger.` },
    { id: 'samfunnskunnskap-10-2-arsaker', type: 'definition', title: 'Årsaker til migrasjon', content: `**Push-faktorer** (skyver folk bort):\n- Krig og konflikt\n- Forfølgelse\n- Fattigdom\n- Naturkatastrofer og klimaendringer\n\n**Pull-faktorer** (trekker folk til):\n- Fred og sikkerhet\n- Arbeid og utdanning\n- Familie\n- Bedre levestandard` },
    { id: 'samfunnskunnskap-10-2-flyktning', type: 'definition', title: 'Flyktningkonvensjonen', content: `FNs **flyktningkonvensjon** fra 1951 definerer en flyktning som:\n\nEn person som *«med rette frykter forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller tilhørighet til en spesiell sosial gruppe»*.\n\nFlyktninger har rett til beskyttelse og kan ikke sendes tilbake til et land der de risikerer forfølgelse.` },
    { id: 'samfunnskunnskap-10-2-norge', type: 'text', content: `### Norge og flyktninger\n\nNorge tar imot flyktninger gjennom:\n- **Asylsøkere** som kommer til Norge og søker beskyttelse.\n- **Kvoteflyktninger** som FN har utvalgt og Norge henter.\n\nIntegrering handler om at flyktninger skal bli en del av det norske samfunnet gjennom norskopplæring, utdanning og arbeid.` },
    { id: 'samfunnskunnskap-10-2-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-10-2-ex-1', number: '1', type: 'classic', task: 'Forklar forskjellen på push- og pull-faktorer og gi eksempler på hver.', solution: 'Push-faktorer er forhold som skyver folk bort fra hjemstedet, som krig, forfølgelse eller fattigdom. Pull-faktorer er forhold som trekker folk til et nytt sted, som fred, arbeidsmuligheter eller familiegjenforening.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-10-2-ex-2', type: 'exercise', exercise: { id: 'samfunnskunnskap-10-2-ex-2', number: '2', type: 'classic', task: 'Hva sier flyktningkonvensjonen om hvem som er flyktning?', solution: 'Flyktningkonvensjonen definerer en flyktning som en person som med rette frykter forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller tilhørighet til en spesiell sosial gruppe. Flyktninger har rett til beskyttelse og kan ikke sendes tilbake til et land der de risikerer forfølgelse.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_10_3: TextbookChapter = {
  id: 'samfunnskunnskap-10-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '10.3',
  title: 'Fred og konfliktløsning',
  description: 'Forstå hvordan konflikter kan løses fredelig og Norges rolle som fredsnasjon.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå konfliktløsningsmetoder', 'kjenne til Norges fredsarbeid'],
  content: [
    { id: 'samfunnskunnskap-10-3-intro', type: 'text', content: `## Fred og konfliktløsning\n\nKonflikter mellom stater og grupper kan løses med vold eller gjennom fredelige midler. Internasjonal politikk handler i stor grad om å forebygge konflikter og bygge varig fred.` },
    { id: 'samfunnskunnskap-10-3-metoder', type: 'definition', title: 'Konfliktløsningsmetoder', content: `**Diplomati:** Forhandlinger mellom stater.\n**Megling:** En nøytral tredjepart hjelper partene.\n**Internasjonal domstol:** Konflikter avgjøres juridisk.\n**Fredsbevarende operasjoner:** FN-styrker overvåker fred.\n**Sanksjoner:** Økonomisk press uten bruk av våpen.` },
    { id: 'samfunnskunnskap-10-3-norge', type: 'text', content: `### Norge som fredsnasjon\n\nNorge har en lang tradisjon for fredsarbeid:\n- **Nobels fredspris** deles ut av Norge.\n- **Megling:** Norge har bidratt i fredsprosesser i Midtøsten, Sri Lanka og Colombia.\n- **FN-operasjoner:** Norske soldater deltar i FN-ledede fredsoperasjoner.\n- **Bistand:** Norge gir betydelig utviklingshjelp.` },
    { id: 'samfunnskunnskap-10-3-varig', type: 'definition', title: 'Varig fred', content: `For varig fred trengs mer enn våpenhvile:\n- **Demokrati og rettigheter**\n- **Økonomisk utvikling**\n- **Forsoning mellom grupper**\n- **Rettferdighet og oppgjør med fortiden**\n\nDette kalles ofte «positiv fred» i motsetning til bare fravær av krig.` },
    { id: 'samfunnskunnskap-10-3-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-10-3-ex-1', number: '1', type: 'classic', task: 'Nevn fire ulike metoder for å løse konflikter fredelig.', solution: 'Fire metoder: (1) Diplomati - direkte forhandlinger mellom partene, (2) Megling - en nøytral tredjepart hjelper, (3) Internasjonal domstol - juridisk avgjørelse, (4) Fredsbevarende operasjoner - militære styrker overvåker freden.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-10-3-ex-2', type: 'exercise', exercise: { id: 'samfunnskunnskap-10-3-ex-2', number: '2', type: 'classic', task: 'Hvorfor regnes Norge som en fredsnasjon?', solution: 'Norge regnes som en fredsnasjon fordi: (1) Nobels fredspris deles ut fra Norge, (2) Norge har bidratt som megler i mange konflikter (Midtøsten, Sri Lanka, Colombia), (3) Norge deltar i FN-fredsoperasjoner, (4) Norge gir betydelig bistand til utviklingsland.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// === KAPITTEL 11: INTERNASJONALE FORHOLD DEL 2 ===

export const CHAPTER_SAMFUNNSKUNNSKAP_11_1: TextbookChapter = {
  id: 'samfunnskunnskap-11-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '11.1',
  title: 'Internasjonale organisasjoner',
  description: 'Lær om de viktigste internasjonale organisasjonene: FN, NATO og EU/EØS, og deres betydning for Norge.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå FNs oppgaver', 'kjenne til NATO og EØS-avtalen'],
  content: [
    { id: 'samfunnskunnskap-11-1-intro', type: 'text', content: `## Internasjonale organisasjoner\n\nInternasjonale organisasjoner er sammenslutninger av stater som samarbeider for å løse felles utfordringer. De viktigste for Norge er FN, NATO og EU/EØS.` },
    { id: 'samfunnskunnskap-11-1-fn', type: 'definition', title: 'FN - De forente nasjoner', content: `**FN** ble grunnlagt i 1945 og har i dag 193 medlemsland.\n\n**Hovedoppgaver:**\n- Bevare internasjonal fred og sikkerhet\n- Fremme menneskerettigheter\n- Bekjempe fattigdom og sykdom\n- Koordinere humanitær hjelp\n\n**Viktige organer:** Generalforsamlingen, Sikkerhetsrådet, Den internasjonale domstolen.` },
    { id: 'samfunnskunnskap-11-1-nato', type: 'definition', title: 'NATO', content: `**NATO** (North Atlantic Treaty Organization) er en forsvarsallianse fra 1949.\n\n**Artikkel 5:** Et angrep på ett medlemsland regnes som et angrep på alle.\n\nNorge var grunnlegger av NATO. Alliansen har vokst fra 12 til over 30 medlemmer, inkludert Finland og Sverige.` },
    { id: 'samfunnskunnskap-11-1-eu', type: 'definition', title: 'EU og EØS', content: `**EU** (Den europeiske union) har 27 medlemsland med felles marked og delvis felles politikk.\n\nNorge er ikke EU-medlem (sagt nei i 1972 og 1994), men er med i **EØS** (Det europeiske økonomiske samarbeidsområdet).\n\n**EØS gir:**\n- Tilgang til EUs indre marked\n- Fire friheter: Varer, tjenester, kapital og personer\n- Norge må følge EU-regler, men har ikke stemmerett` },
    { id: 'samfunnskunnskap-11-1-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-11-1-ex-1', number: '1', type: 'classic', task: 'Hva er FNs hovedoppgaver?', solution: 'FNs hovedoppgaver er: (1) Bevare internasjonal fred og sikkerhet, (2) Fremme menneskerettigheter, (3) Bekjempe fattigdom og sykdom, (4) Koordinere humanitær hjelp ved kriser og katastrofer.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-11-1-ex-2', type: 'exercise', exercise: { id: 'samfunnskunnskap-11-1-ex-2', number: '2', type: 'classic', task: 'Hva betyr NATOs artikkel 5?', solution: 'NATOs artikkel 5 sier at et væpnet angrep på ett eller flere NATO-land skal betraktes som et angrep på alle. Det betyr at alle medlemsland er forpliktet til å hjelpe et angrepet medlemsland.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-11-1-ex-3', type: 'exercise', exercise: { id: 'samfunnskunnskap-11-1-ex-3', number: '3', type: 'classic', task: 'Forklar hva EØS-avtalen innebærer for Norge.', solution: 'EØS-avtalen gir Norge tilgang til EUs indre marked med de fire frihetene (fri bevegelse av varer, tjenester, kapital og personer). Norge må følge EUs regler på disse områdene, men har ikke stemmerett i EU. Norge betaler også bidrag til EU.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

export const CHAPTER_SAMFUNNSKUNNSKAP_11_2: TextbookChapter = {
  id: 'samfunnskunnskap-11-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '11.2',
  title: 'Konflikter og sikkerhet',
  description: 'Forstå ulike typer konflikter, terrorisme og ekstremisme, og hvordan disse utfordrer internasjonal sikkerhet.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå ulike konflikttyper', 'kjenne til trusler mot sikkerhet'],
  content: [
    { id: 'samfunnskunnskap-11-2-intro', type: 'text', content: `## Konflikter og sikkerhet\n\nVerden står overfor mange sikkerhetstrusler: tradisjonelle kriger mellom stater, borgerkriger, terrorisme og cybertrusler. Forståelse av disse er viktig for å kunne møte dem.` },
    { id: 'samfunnskunnskap-11-2-typer', type: 'definition', title: 'Konflikttyper', content: `**Mellomstatlige konflikter:** Krig mellom stater.\n**Borgerkriger:** Konflikt innad i en stat.\n**Asymmetriske konflikter:** Ujevn styrke, ofte geriljakrig.\n**Hybridkrig:** Kombinasjon av militære og ikke-militære virkemidler (propaganda, cyberangrep, økonomisk press).` },
    { id: 'samfunnskunnskap-11-2-terror', type: 'definition', title: 'Terrorisme og ekstremisme', content: `**Terrorisme** er bruk av vold mot sivile for å skape frykt og oppnå politiske mål.\n\nFormer for ekstremisme:\n- **Religiøs ekstremisme:** Voldelig tolkning av religion.\n- **Høyreekstremisme:** Rasisme, nasjonalisme, hat.\n- **Venstreekstremisme:** Revolusjonær vold.\n\n22. juli 2011 viste at Norge også er utsatt.` },
    { id: 'samfunnskunnskap-11-2-cyber', type: 'text', content: `### Nye sikkerhetstrusler\n\n**Cyberangrep:** Hacking av kritisk infrastruktur, statlig spionasje.\n**Desinformasjon:** Spredning av falsk informasjon for å påvirke valg og meninger.\n**Klimaendringer:** Kan føre til ressurskonflikter og masseflukt.\n\nNorge har styrket sitt cyberforsvar og beredskap mot slike trusler.` },
    { id: 'samfunnskunnskap-11-2-tiltak', type: 'definition', title: 'Tiltak mot trusler', content: `**Forebygging:** Utdanning, motarbeide radikalisering.\n**Etterretning:** Overvåke trusler.\n**Internasjonalt samarbeid:** Dele informasjon, felles operasjoner.\n**Beredskap:** Plan for å håndtere hendelser.\n**Rettssystem:** Straffeforfølge lovbrudd.` },
    { id: 'samfunnskunnskap-11-2-ex-1', type: 'exercise', exercise: { id: 'samfunnskunnskap-11-2-ex-1', number: '1', type: 'classic', task: 'Forklar hva som menes med hybridkrig.', solution: 'Hybridkrig er en kombinasjon av militære og ikke-militære virkemidler som brukes for å destabilisere en motstander. Det kan inkludere konvensjonelle militære styrker, geriljakrig, cyberangrep, propaganda, desinformasjon og økonomisk press. Russland har brukt slike metoder.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-11-2-ex-2', type: 'exercise', exercise: { id: 'samfunnskunnskap-11-2-ex-2', number: '2', type: 'classic', task: 'Nevn tre ulike former for ekstremisme.', solution: 'Tre former for ekstremisme: (1) Religiøs ekstremisme - voldelig tolkning av religion, (2) Høyreekstremisme - rasisme, nasjonalisme og hat mot minoriteter, (3) Venstreekstremisme - revolusjonær vold mot staten og kapitalismen.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'samfunnskunnskap-11-2-ex-3', type: 'exercise', exercise: { id: 'samfunnskunnskap-11-2-ex-3', number: '3', type: 'classic', task: 'Hvilke nye sikkerhetstrusler står Norge overfor i dag?', solution: 'Norge står overfor flere nye sikkerhetstrusler: (1) Cyberangrep mot kritisk infrastruktur og statlig spionasje, (2) Desinformasjon som forsøker å påvirke valg og meninger, (3) Klimaendringer som kan føre til ressurskonflikter og migrasjon, (4) Terrorisme fra ulike former for ekstremisme.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// Eksporter alle kapitler
export const SAMFUNNSKUNNSKAP_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSKUNNSKAP_1_1,
  CHAPTER_SAMFUNNSKUNNSKAP_1_2,
  CHAPTER_SAMFUNNSKUNNSKAP_1_3,
  CHAPTER_SAMFUNNSKUNNSKAP_1_4,
  CHAPTER_SAMFUNNSKUNNSKAP_1_5,
  CHAPTER_SAMFUNNSKUNNSKAP_1_6,
  CHAPTER_SAMFUNNSKUNNSKAP_1_7,
  CHAPTER_SAMFUNNSKUNNSKAP_1_8,
  CHAPTER_SAMFUNNSKUNNSKAP_2_1,
  CHAPTER_SAMFUNNSKUNNSKAP_2_2,
  CHAPTER_SAMFUNNSKUNNSKAP_2_3,
  CHAPTER_SAMFUNNSKUNNSKAP_2_4,
  CHAPTER_SAMFUNNSKUNNSKAP_2_5,
  CHAPTER_SAMFUNNSKUNNSKAP_2_6,
  CHAPTER_SAMFUNNSKUNNSKAP_2_7,
  CHAPTER_SAMFUNNSKUNNSKAP_3_1,
  CHAPTER_SAMFUNNSKUNNSKAP_3_2,
  CHAPTER_SAMFUNNSKUNNSKAP_3_3,
  CHAPTER_SAMFUNNSKUNNSKAP_3_4,
  CHAPTER_SAMFUNNSKUNNSKAP_3_5,
  CHAPTER_SAMFUNNSKUNNSKAP_3_6,
  CHAPTER_SAMFUNNSKUNNSKAP_3_7,
  CHAPTER_SAMFUNNSKUNNSKAP_4_1,
  CHAPTER_SAMFUNNSKUNNSKAP_4_2,
  CHAPTER_SAMFUNNSKUNNSKAP_4_3,
  CHAPTER_SAMFUNNSKUNNSKAP_4_4,
  CHAPTER_SAMFUNNSKUNNSKAP_4_5,
  CHAPTER_SAMFUNNSKUNNSKAP_4_6,
  CHAPTER_SAMFUNNSKUNNSKAP_4_7,
  CHAPTER_SAMFUNNSKUNNSKAP_5_1,
  CHAPTER_SAMFUNNSKUNNSKAP_5_2,
  CHAPTER_SAMFUNNSKUNNSKAP_5_3,
  CHAPTER_SAMFUNNSKUNNSKAP_5_4,
  CHAPTER_SAMFUNNSKUNNSKAP_5_5,
  CHAPTER_SAMFUNNSKUNNSKAP_5_6,
  CHAPTER_SAMFUNNSKUNNSKAP_5_7,
  CHAPTER_SAMFUNNSKUNNSKAP_5_8,
  CHAPTER_SAMFUNNSKUNNSKAP_5_9,
  CHAPTER_SAMFUNNSKUNNSKAP_5_10,
  CHAPTER_SAMFUNNSKUNNSKAP_5_11,
  CHAPTER_SAMFUNNSKUNNSKAP_5_12,
  CHAPTER_SAMFUNNSKUNNSKAP_6_1,
  CHAPTER_SAMFUNNSKUNNSKAP_6_2,
  CHAPTER_SAMFUNNSKUNNSKAP_6_3,
  CHAPTER_SAMFUNNSKUNNSKAP_6_4,
  CHAPTER_SAMFUNNSKUNNSKAP_6_5,
  CHAPTER_SAMFUNNSKUNNSKAP_6_6,
  CHAPTER_SAMFUNNSKUNNSKAP_6_7,
  CHAPTER_SAMFUNNSKUNNSKAP_7_1,
  CHAPTER_SAMFUNNSKUNNSKAP_7_2,
  CHAPTER_SAMFUNNSKUNNSKAP_7_3,
  CHAPTER_SAMFUNNSKUNNSKAP_7_4,
  CHAPTER_SAMFUNNSKUNNSKAP_7_5,
  CHAPTER_SAMFUNNSKUNNSKAP_7_6,
  CHAPTER_SAMFUNNSKUNNSKAP_7_7,
  CHAPTER_SAMFUNNSKUNNSKAP_8_1,
  CHAPTER_SAMFUNNSKUNNSKAP_8_2,
  CHAPTER_SAMFUNNSKUNNSKAP_8_3,
  CHAPTER_SAMFUNNSKUNNSKAP_8_4,
  CHAPTER_SAMFUNNSKUNNSKAP_8_5,
  CHAPTER_SAMFUNNSKUNNSKAP_8_6,
  CHAPTER_SAMFUNNSKUNNSKAP_8_7,
  CHAPTER_SAMFUNNSKUNNSKAP_8_8,
  CHAPTER_SAMFUNNSKUNNSKAP_9_1,
  CHAPTER_SAMFUNNSKUNNSKAP_9_2,
  CHAPTER_SAMFUNNSKUNNSKAP_9_3,
  CHAPTER_SAMFUNNSKUNNSKAP_9_4,
  CHAPTER_SAMFUNNSKUNNSKAP_9_5,
  CHAPTER_SAMFUNNSKUNNSKAP_9_6,
  CHAPTER_SAMFUNNSKUNNSKAP_9_7,
  CHAPTER_SAMFUNNSKUNNSKAP_9_8,
  CHAPTER_SAMFUNNSKUNNSKAP_10_1,
  CHAPTER_SAMFUNNSKUNNSKAP_10_2,
  CHAPTER_SAMFUNNSKUNNSKAP_10_3,
  CHAPTER_SAMFUNNSKUNNSKAP_11_1,
  CHAPTER_SAMFUNNSKUNNSKAP_11_2,
];

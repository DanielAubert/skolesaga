/**
 * Helse- og oppvekstfag VG2 - Del 2: Helse, utvikling og forebygging
 * Kapittel 2.1-2.7
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for helsebegrepet og faktorer som påvirker helse
 * - planlegge og gjennomføre forebyggende og helsefremmende tiltak
 * - beskrive menneskets utvikling gjennom livsløpet
 * - drøfte aldring og eldre menneskers behov for omsorg og livskvalitet
 * - gjøre rede for betydningen av sosiale nettverk og forebygging av ensomhet
 * - beskrive rehabilitering, habilitering og hverdagsmestring
 * - planlegge og gjennomføre miljøarbeid og aktivitetstilbud
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Hva er helse?
// ============================================================================

export const CHAPTER_HOV2_2_1: TextbookChapter = {
  id: 'hov2-2-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.1',
  title: 'Hva er helse?',
  description: 'Ulike helsebegreper, folkehelse, livsstil, levekår og salutogenese. Lær hvordan ulike faktorer påvirker helsetilstanden og hva som fremmer god helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for helsebegrepet og faktorer som påvirker helse',
  ],
  content: [
    {
      id: 'hov2-2-1-intro',
      type: 'text',
      content: `## Hva er egentlig helse?

Helse er et begrep de fleste har et forhold til, men som kan være vanskelig å definere presist. Er helse bare fravær av sykdom, eller handler det om noe mer? I dette kapittelet ser vi på ulike måter å forstå helse på, og hvilke faktorer som påvirker helsetilstanden vår.

I dette kapittelet lærer du:
- Ulike definisjoner av helsebegrepet
- Hva folkehelse og levekår betyr
- Hvordan livsstil påvirker helsen
- Salutogenese – hva som fremmer helse`,
    },
    {
      id: 'hov2-2-1-def-1',
      type: 'definition',
      title: 'Helse (WHOs definisjon)',
      content: `Verdens helseorganisasjon (WHO) definerer **helse** som «en tilstand av fullstendig fysisk, psykisk og sosialt velvære, og ikke bare fravær av sykdom eller lyte». Denne definisjonen fra 1948 understreker at helse handler om mer enn kroppen – det inkluderer også det mentale og sosiale.`,
    },
    {
      id: 'hov2-2-1-text-1',
      type: 'text',
      content: `### Ulike helsebegreper

**Biomedisinsk helsebegrep**
- Helse som fravær av sykdom
- Fokus på kroppen og målbare verdier
- Legen diagnostiserer og behandler
- Begrensning: Tar ikke hensyn til opplevd helse

**Biopsykososialt helsebegrep**
- Helse som samspill mellom kropp, psyke og sosiale forhold
- Tar hensyn til hele mennesket
- Inkluderer opplevd helse og livskvalitet
- Brukes i moderne helse- og omsorgstjenester

**Subjektiv helse**
- Hvordan den enkelte opplever sin egen helse
- Kan avvike fra objektive målinger
- En person med kronisk sykdom kan oppleve god helse
- Viktig for livskvalitet og mestring

**Folkehelse**
- Helsetilstanden i befolkningen som helhet
- Påvirkes av samfunnsforhold, levekår og livsstil
- Folkehelsearbeid handler om å bedre helsen i hele befolkningen
- Regulert gjennom folkehelseloven`,
    },
    {
      id: 'hov2-2-1-def-2',
      type: 'definition',
      title: 'Salutogenese',
      content: `**Salutogenese** er et begrep utviklet av Aaron Antonovsky som handler om hva som fremmer helse, i motsetning til patogenese som handler om hva som forårsaker sykdom. Sentralt i salutogenesen er **opplevelse av sammenheng (OAS)**, som består av tre komponenter: **begripelighet** (at man forstår situasjonen), **håndterbarhet** (at man har ressurser til å mestre den) og **meningsfullhet** (at man opplever situasjonen som meningsfull).`,
    },
    {
      id: 'hov2-2-1-text-2',
      type: 'text',
      content: `### Faktorer som påvirker helsen

**Livsstil**
- Kosthold og ernæring
- Fysisk aktivitet og mosjon
- Søvn og hvile
- Bruk av tobakk, alkohol og rusmidler
- Stressmestring

**Levekår**
- Økonomi og inntekt
- Utdanning og arbeid
- Boforhold
- Tilgang til helsetjenester
- Sosiale nettverk og tilhørighet

**Arvelige faktorer**
- Genetisk disposisjon for sykdom
- Medfødte tilstander
- Familiær sykdomshistorie

**Miljøfaktorer**
- Luftkvalitet og forurensning
- Tilgang til natur og grøntområder
- Støy og fysisk arbeidsmiljø
- Klima og geografi

Helse bestemmes av et samspill mellom alle disse faktorene. Noen faktorer kan vi påvirke selv (livsstil), mens andre er vanskeligere å endre (arv, samfunnsforhold). Helsefremmende arbeid handler om å styrke de faktorene som fremmer god helse.`,
    },
    {
      id: 'hov2-2-1-tip-1',
      type: 'tip',
      title: 'Helsedeterminanter',
      content: `**Helsedeterminanter** er alle faktorer som påvirker helsen vår. Dahlgren og Whiteheads regnbuemodell viser at helse påvirkes i lag: innerst finner vi alder, kjønn og arv, deretter individuell livsstil, sosiale nettverk, levekår og ytterst de generelle samfunnsforholdene. Jo lenger ut i modellen vi kommer, desto mer handler det om politiske og strukturelle tiltak.`,
    },
    {
      id: 'hov2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Salutogenese i praksis',
      content: `**Situasjon**: Marte, 45 år, har fått diagnosen diabetes type 2. Hun er redd og usikker på hva dette betyr for fremtiden.

**Salutogent perspektiv – opplevelse av sammenheng:**
- **Begripelighet**: Marte får grundig informasjon om diabetes, hva som skjer i kroppen, og hvordan sykdommen kan håndteres. Hun forstår situasjonen sin.
- **Håndterbarhet**: Marte får opplæring i kosthold, blodsukkerregulering og medisinbruk. Hun opplever at hun har verktøy til å mestre hverdagen.
- **Meningsfullhet**: Marte motiveres av at endringene gir henne mer energi og bedre livskvalitet. Hun ser mening i å ta vare på helsen sin.

**Konklusjon**: Ved å styrke Martes opplevelse av sammenheng kan helsefagarbeideren bidra til at hun mestrer sykdommen og opplever god helse til tross for diagnosen.`,
    },
    {
      id: 'hov2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner WHOs definisjon av helse?',
        options: [
          { id: 'a', text: 'Helse er fravær av sykdom', isCorrect: false },
          { id: 'b', text: 'Helse er fullstendig fysisk, psykisk og sosialt velvære', isCorrect: true },
          { id: 'c', text: 'Helse er evnen til å arbeide', isCorrect: false },
          { id: 'd', text: 'Helse er det samme som god fysisk form', isCorrect: false },
        ],
        solution: 'WHO definerer helse som «en tilstand av fullstendig fysisk, psykisk og sosialt velvære, og ikke bare fravær av sykdom eller lyte». Denne definisjonen er bred og inkluderer alle dimensjoner av helse.',
      },
    },
    {
      id: 'hov2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-1-ex-2',
        number: '2.1.2',
        type: 'multiple-choice',
        task: 'Hvilke tre komponenter inngår i opplevelse av sammenheng (OAS)?',
        options: [
          { id: 'a', text: 'Kunnskap, ferdigheter og holdninger', isCorrect: false },
          { id: 'b', text: 'Fysisk, psykisk og sosial helse', isCorrect: false },
          { id: 'c', text: 'Begripelighet, håndterbarhet og meningsfullhet', isCorrect: true },
          { id: 'd', text: 'Forebygging, behandling og rehabilitering', isCorrect: false },
        ],
        solution: 'Opplevelse av sammenheng (OAS) i Antonovskys salutogenese består av begripelighet (man forstår situasjonen), håndterbarhet (man har ressurser til å mestre) og meningsfullhet (man opplever situasjonen som meningsfull).',
      },
    },
    {
      id: 'hov2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-1-ex-3',
        number: '2.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom det biomedisinske og det biopsykososiale helsebegrepet.',
        solution: 'Det biomedisinske helsebegrepet definerer helse som fravær av sykdom og fokuserer på kroppen og målbare verdier. Det biopsykososiale helsebegrepet ser helse som et samspill mellom biologiske, psykologiske og sosiale faktorer. Det tar hensyn til hele mennesket, inkludert opplevd helse og livskvalitet, og brukes i moderne helse- og omsorgstjenester.',
      },
    },
    {
      id: 'hov2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Nevn minst fire faktorer som påvirker helsen, og forklar om de kan påvirkes av den enkelte eller er strukturelle.',
        solution: 'Kosthold og fysisk aktivitet er livsstilsfaktorer som den enkelte kan påvirke. Økonomi og utdanning er levekårsfaktorer som delvis kan påvirkes, men som også avhenger av samfunnsstrukturer. Genetisk disposisjon er arvelig og kan ikke endres. Luftkvalitet og tilgang til helsetjenester er miljø- og samfunnsfaktorer som krever politiske tiltak for å påvirkes.',
      },
    },
    {
      id: 'hov2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-1-ex-5',
        number: '2.1.5',
        type: 'classic',
        task: 'Gi et eksempel på hvordan en helsefagarbeider kan bruke salutogent perspektiv i møte med en bruker som har fått en kronisk sykdom.',
        solution: 'Helsefagarbeideren kan styrke begripelighet ved å gi god informasjon om sykdommen og behandlingen. Håndterbarhet styrkes ved å lære brukeren praktiske ferdigheter for å mestre hverdagen, og ved å koble inn støtteapparat. Meningsfullhet fremmes ved å fokusere på hva brukeren kan gjøre, ikke bare begrensningene, og ved å hjelpe brukeren å finne motivasjon for livsstilsendringer.',
      },
    },
    {
      id: 'hov2-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **WHOs helsedefinisjon** inkluderer fysisk, psykisk og sosialt velvære
- Det **biopsykososiale helsebegrepet** ser hele mennesket i sammenheng
- **Salutogenese** handler om hva som fremmer helse, med opplevelse av sammenheng som sentralt begrep
- **Helsedeterminanter** inkluderer livsstil, levekår, arv og miljøfaktorer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Biopsykososialt helsebegrep | Helse som samspill mellom kropp, psyke og sosiale forhold |
| Salutogenese | Hva som fremmer helse fremfor hva som forårsaker sykdom |
| Opplevelse av sammenheng | Begripelighet, håndterbarhet og meningsfullhet |
| Folkehelse | Helsetilstanden i befolkningen som helhet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Helse', definition: 'Tilstand av fullstendig fysisk, psykisk og sosialt velvære (WHO)' },
    { term: 'Salutogenese', definition: 'Perspektiv som fokuserer på hva som fremmer helse, utviklet av Antonovsky' },
    { term: 'Opplevelse av sammenheng', definition: 'Begripelighet, håndterbarhet og meningsfullhet – sentralt i salutogenesen' },
    { term: 'Folkehelse', definition: 'Helsetilstanden i befolkningen og arbeid for å bedre denne' },
    { term: 'Helsedeterminanter', definition: 'Alle faktorer som påvirker helsen, fra arv og livsstil til samfunnsforhold' },
  ],
};

// ============================================================================
// Kapittel 2.2: Forebyggende og helsefremmende tiltak
// ============================================================================

export const CHAPTER_HOV2_2_2: TextbookChapter = {
  id: 'hov2-2-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.2',
  title: 'Forebyggende og helsefremmende tiltak',
  description: 'Strategier for forebygging og tiltak som fremmer helse og mestring. Lær om primær-, sekundær- og tertiærforebygging og hvordan helsefagarbeidere kan bidra.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre forebyggende og helsefremmende tiltak',
  ],
  content: [
    {
      id: 'hov2-2-2-intro',
      type: 'text',
      content: `## Forebygging og helsefremmende arbeid

Det er bedre å forebygge sykdom enn å behandle den. Forebyggende og helsefremmende arbeid er en sentral del av helse- og omsorgstjenesten, og helsefagarbeidere spiller en viktig rolle i dette arbeidet.

I dette kapittelet lærer du:
- Forskjellen mellom forebygging og helsefremming
- Primær-, sekundær- og tertiærforebygging
- Strategier for helsefremmende arbeid
- Helsefagarbeiderens rolle i forebygging`,
    },
    {
      id: 'hov2-2-2-def-1',
      type: 'definition',
      title: 'Forebygging',
      content: `**Forebygging** (profylakse) handler om å hindre at sykdom, skade eller sosiale problemer oppstår, utvikler seg eller får negative konsekvenser. Forebygging deles inn i tre nivåer: **primærforebygging** (hindre at sykdom oppstår), **sekundærforebygging** (oppdage sykdom tidlig) og **tertiærforebygging** (begrense konsekvenser av sykdom).`,
    },
    {
      id: 'hov2-2-2-text-1',
      type: 'text',
      content: `### De tre forebyggingsnivåene

**Primærforebygging – hindre at sykdom oppstår**
- Vaksinasjonsprogrammer
- Kostholdsråd og ernæringsveiledning
- Kampanjer mot røyking og rusmidler
- Tilrettelegging for fysisk aktivitet
- Smittevernstiltak og hygiene
- Fallforebygging hos eldre

**Sekundærforebygging – oppdage sykdom tidlig**
- Screening og helseundersøkelser
- Mammografi og livmorhalsprøver
- Blodtrykkskontroller
- Diabeteskontroller
- Tidlig intervensjon ved psykiske plager
- Helsestasjon og skolehelsetjeneste

**Tertiærforebygging – begrense konsekvenser**
- Rehabilitering etter sykdom eller skade
- Hindre forverring av kronisk sykdom
- Forebygge komplikasjoner
- Tilrettelegging for funksjon og deltakelse
- Mestringsstrategier for kronisk syke`,
    },
    {
      id: 'hov2-2-2-def-2',
      type: 'definition',
      title: 'Helsefremmende arbeid',
      content: `**Helsefremmende arbeid** (helsefremming) handler om å styrke faktorer som fremmer helse og velvære, i motsetning til forebygging som fokuserer på å fjerne risikofaktorer. Helsefremmende arbeid tar utgangspunkt i et salutogent perspektiv og fokuserer på ressurser, mestring og empowerment. Ottawa-charteret fra 1986 er et sentralt dokument for helsefremmende arbeid.`,
    },
    {
      id: 'hov2-2-2-text-2',
      type: 'text',
      content: `### Helsefremmende strategier

**Empowerment (myndiggjøring)**
- Gi mennesker kunnskap og verktøy til å ta kontroll over egen helse
- Støtte selvbestemmelse og medvirkning
- Bygge på den enkeltes ressurser og styrker
- Fremme mestringstro og selvtillit

**Helseopplysning og veiledning**
- Informasjon om kosthold, aktivitet og livsstil
- Motiverende samtale som metode
- Tilpasset kommunikasjon til ulike brukergrupper
- Bruk av digitale verktøy og ressurser

**Strukturelle tiltak**
- Tilrettelegging av fysisk miljø
- Sunn mat i kantiner og institusjoner
- Aktivitetstilbud i nærmiljøet
- Tobakksfrie områder og alkoholpolitikk

**Arenaer for helsefremmende arbeid**
- Helsestasjoner og skolehelsetjeneste
- Arbeidsplasser
- Sykehjem og hjemmetjeneste
- Frivillige organisasjoner og nærmiljø`,
    },
    {
      id: 'hov2-2-2-tip-1',
      type: 'tip',
      title: 'Motiverende samtale',
      content: `**Motiverende samtale (MI)** er en samtalemetode som brukes for å styrke en persons indre motivasjon for endring. Helsefagarbeideren stiller åpne spørsmål, lytter aktivt, bekrefter det brukeren sier, og oppsummerer. Målet er at brukeren selv finner grunner til å endre atferd, fremfor å bli fortalt hva de skal gjøre. Denne metoden er spesielt nyttig i forebyggende og helsefremmende arbeid.`,
    },
    {
      id: 'hov2-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Forebygging på sykehjem',
      content: `**Situasjon**: Du arbeider på et sykehjem og skal bidra til forebyggende tiltak for beboerne.

**Primærforebygging:**
- Sørge for ernæringsrik kost og tilstrekkelig væskeinntak
- Gjennomføre fallforebyggende tiltak (fjerne løse tepper, god belysning, stødig fottøy)
- Tilrettelegge for daglig fysisk aktivitet og turgåing
- Gjennomføre influensavaksinasjon

**Sekundærforebygging:**
- Regelmessig blodtrykkskontroll
- Observere endringer i allmenntilstand og funksjonsnivå
- Vektregistrering for å fange opp underernæring
- Følge opp tegn på depresjon eller kognitiv svikt

**Tertiærforebygging:**
- Trene opp gangfunksjon etter fall
- Forebygge nye sår hos beboere med diabetes
- Tilrettelegge for sosial deltakelse for isolerte beboere

**Konklusjon**: Forebygging skjer på alle nivåer i daglig omsorg og krever bevisste helsefagarbeidere som observerer, tilrettelegger og handler proaktivt.`,
    },
    {
      id: 'hov2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hva er primærforebygging?',
        options: [
          { id: 'a', text: 'Å behandle sykdom som allerede har oppstått', isCorrect: false },
          { id: 'b', text: 'Å oppdage sykdom på et tidlig stadium', isCorrect: false },
          { id: 'c', text: 'Å hindre at sykdom oppstår', isCorrect: true },
          { id: 'd', text: 'Å rehabilitere etter sykdom', isCorrect: false },
        ],
        solution: 'Primærforebygging handler om å hindre at sykdom, skade eller sosiale problemer oppstår. Eksempler er vaksinasjon, kostholdsråd og fallforebygging. Sekundærforebygging handler om tidlig oppdagelse, og tertiærforebygging om å begrense konsekvenser.',
      },
    },
    {
      id: 'hov2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner helsefremmende arbeid sammenlignet med forebygging?',
        options: [
          { id: 'a', text: 'Det fokuserer på å fjerne risikofaktorer', isCorrect: false },
          { id: 'b', text: 'Det fokuserer på å styrke faktorer som fremmer helse', isCorrect: true },
          { id: 'c', text: 'Det fokuserer kun på fysisk helse', isCorrect: false },
          { id: 'd', text: 'Det utføres bare av leger', isCorrect: false },
        ],
        solution: 'Helsefremmende arbeid tar utgangspunkt i et salutogent perspektiv og fokuserer på å styrke faktorer som fremmer helse og velvære. Forebygging fokuserer mer på å fjerne eller redusere risikofaktorer for sykdom.',
      },
    },
    {
      id: 'hov2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        task: 'Forklar de tre forebyggingsnivåene og gi et eksempel på hvert nivå.',
        solution: 'Primærforebygging handler om å hindre at sykdom oppstår, for eksempel vaksinasjon mot influensa. Sekundærforebygging handler om å oppdage sykdom tidlig, for eksempel blodtrykkskontroll for å fange opp hypertensjon. Tertiærforebygging handler om å begrense konsekvenser av eksisterende sykdom, for eksempel rehabilitering etter hjerneslag for å gjenvinne funksjon.',
      },
    },
    {
      id: 'hov2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Hva er empowerment, og hvorfor er det viktig i helsefremmende arbeid?',
        solution: 'Empowerment (myndiggjøring) handler om å gi mennesker kunnskap, ferdigheter og selvtillit til å ta kontroll over egen helse og livssituasjon. Det er viktig fordi det bygger på den enkeltes ressurser og styrker, fremmer selvbestemmelse og medvirkning, og gir varige endringer fordi motivasjonen kommer innenfra. Empowerment er sentralt i helsefremmende arbeid fordi det setter brukeren i sentrum.',
      },
    },
    {
      id: 'hov2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        task: 'Beskriv tre konkrete forebyggende tiltak en helsefagarbeider kan gjennomføre på et sykehjem.',
        solution: 'Tre konkrete tiltak: 1) Fallforebygging – fjerne snublefarer, sørge for godt fottøy og belysning, og trene balanse og styrke med beboerne. 2) Ernæringstiltak – observere matinntak, tilby næringsrik kost, registrere vekt regelmessig for å fange opp underernæring. 3) Sosial forebygging – tilrettelegge for sosiale aktiviteter, sikre at isolerte beboere får besøk og deltakelse, og forebygge ensomhet gjennom fellesskap.',
      },
    },
    {
      id: 'hov2-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-2-ex-6',
        number: '2.2.6',
        type: 'multiple-choice',
        task: 'Hvilket av disse er et eksempel på sekundærforebygging?',
        options: [
          { id: 'a', text: 'Vaksinasjon mot meslinger', isCorrect: false },
          { id: 'b', text: 'Rehabilitering etter hoftebrudd', isCorrect: false },
          { id: 'c', text: 'Mammografi for å oppdage brystkreft tidlig', isCorrect: true },
          { id: 'd', text: 'Kampanje mot røyking', isCorrect: false },
        ],
        solution: 'Mammografi er et eksempel på sekundærforebygging fordi formålet er å oppdage brystkreft på et tidlig stadium, før symptomene blir alvorlige. Vaksinasjon og røykekampanjer er primærforebygging, mens rehabilitering er tertiærforebygging.',
      },
    },
    {
      id: 'hov2-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Forebygging** deles i primær-, sekundær- og tertiærforebygging
- **Helsefremmende arbeid** fokuserer på å styrke helsefremmende faktorer
- **Empowerment** er sentralt for å støtte mestring og selvbestemmelse
- Helsefagarbeidere har en viktig rolle i forebyggende arbeid på alle nivåer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Primærforebygging | Hindre at sykdom oppstår |
| Sekundærforebygging | Oppdage sykdom tidlig |
| Tertiærforebygging | Begrense konsekvenser av sykdom |
| Empowerment | Myndiggjøring – styrke menneskers kontroll over egen helse |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Forebygging', definition: 'Tiltak for å hindre at sykdom, skade eller problemer oppstår eller forverres' },
    { term: 'Helsefremmende arbeid', definition: 'Arbeid som styrker faktorer som fremmer helse og velvære' },
    { term: 'Empowerment', definition: 'Myndiggjøring – gi mennesker kontroll over egen helse og livssituasjon' },
    { term: 'Motiverende samtale', definition: 'Samtalemetode som styrker indre motivasjon for endring' },
    { term: 'Ottawa-charteret', definition: 'Internasjonalt dokument fra 1986 som definerer helsefremmende arbeid' },
  ],
};

// ============================================================================
// Kapittel 2.3: Menneskets utvikling gjennom livsløpet
// ============================================================================

export const CHAPTER_HOV2_2_3: TextbookChapter = {
  id: 'hov2-2-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.3',
  title: 'Menneskets utvikling gjennom livsløpet',
  description: 'Fysisk, psykisk og sosial utvikling fra barndom til alderdom. Lær om utviklingsteorier, milepæler og hva som påvirker menneskets utvikling i ulike livsfaser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive menneskets utvikling gjennom livsløpet',
  ],
  content: [
    {
      id: 'hov2-2-3-intro',
      type: 'text',
      content: `## Utvikling gjennom livet

Mennesket utvikler seg hele livet – fra fødsel til død. Utviklingen skjer på flere plan: fysisk, kognitivt, emosjonelt og sosialt. Kunnskap om normal utvikling er viktig for helsefagarbeidere, fordi det gjør det mulig å oppdage avvik og tilrettelegge for god utvikling og livskvalitet.

I dette kapittelet lærer du:
- Utviklingens ulike dimensjoner
- Sentrale utviklingsteorier
- Kjennetegn ved de ulike livsfasene
- Hva som påvirker utvikling positivt og negativt`,
    },
    {
      id: 'hov2-2-3-def-1',
      type: 'definition',
      title: 'Utvikling',
      content: `**Utvikling** er en kontinuerlig prosess med endringer i menneskets fysiske, kognitive, emosjonelle og sosiale egenskaper gjennom livsløpet. Utviklingen påvirkes av et samspill mellom **modning** (biologisk programmert utvikling), **læring** (erfaringsbasert endring) og **miljø** (ytre påvirkninger). Utviklingen følger visse mønstre, men har også stor individuell variasjon.`,
    },
    {
      id: 'hov2-2-3-text-1',
      type: 'text',
      content: `### Utviklingens dimensjoner

**Fysisk utvikling**
- Vekst i høyde og vekt
- Motorisk utvikling (grov- og finmotorikk)
- Pubertetsutvikling
- Aldersrelaterte kroppslige endringer

**Kognitiv utvikling**
- Språkutvikling og kommunikasjon
- Tenkning, hukommelse og problemløsning
- Jean Piaget beskrev stadier i kognitiv utvikling
- Fra konkret til abstrakt tenkning

**Emosjonell utvikling**
- Tilknytning og trygghet
- Regulering av følelser
- Selvbilde og identitet
- Erik Erikson beskrev åtte psykososiale stadier

**Sosial utvikling**
- Samspill med foreldre og omsorgspersoner
- Vennskapsrelasjoner og sosial kompetanse
- Rolletaking og empati
- Tilhørighet til grupper og samfunn`,
    },
    {
      id: 'hov2-2-3-def-2',
      type: 'definition',
      title: 'Eriksons psykososiale utviklingsteori',
      content: `Erik Erikson beskrev menneskets utvikling gjennom **åtte psykososiale stadier**, der hvert stadium inneholder en krise eller utfordring som må løses. For eksempel handler det første stadiet (0–1,5 år) om **tillit versus mistillit**, der barnet utvikler grunnleggende tillit gjennom trygg omsorg. Ungdomstiden handler om **identitet versus rolleforvirring**, mens alderdommen handler om **integritet versus fortvilelse**.`,
    },
    {
      id: 'hov2-2-3-text-2',
      type: 'text',
      content: `### De ulike livsfasene

**Spedbarnstiden (0–1 år)**
- Rask fysisk vekst og motorisk utvikling
- Tilknytning til omsorgspersoner er avgjørende
- Sanser og reflekser utvikles
- Begynnende kommunikasjon med babling og gester

**Småbarnstiden (1–5 år)**
- Språket utvikles raskt
- Økende selvstendighet og utforsking
- Lek er den viktigste læringsformen
- Sosiale ferdigheter begynner å utvikles

**Skolealder (6–12 år)**
- Kognitiv utvikling med logisk tenkning
- Vennskapsrelasjoner blir viktigere
- Mestring og kompetanse er sentralt
- Motorisk finjustering

**Ungdomstiden (13–18 år)**
- Pubertet med store kroppslige endringer
- Identitetsutvikling og løsrivelse
- Abstrakt tenkning utvikles
- Vennegruppen får stor betydning

**Voksen alder (18–65 år)**
- Etablering av karriere og familie
- Ansvar for andre (generativitet)
- Fysisk topppunkt i 20-30-årene
- Gradvis aldring fra 40-årene

**Eldre år (65+ år)**
- Fysisk aldring og redusert funksjon
- Visdom og erfaring
- Tap av roller og nettverk
- Tilpasning til endret livssituasjon`,
    },
    {
      id: 'hov2-2-3-tip-1',
      type: 'tip',
      title: 'Tilknytningsteori',
      content: `John Bowlby utviklet **tilknytningsteori**, som viser at barnets tidlige tilknytning til omsorgspersoner er grunnleggende for all senere utvikling. Trygg tilknytning gir barnet en «trygg base» å utforske verden fra. Utrygg tilknytning kan føre til vansker med relasjoner, følelsesregulering og selvbilde. Helsefagarbeidere som arbeider med barn, bør kjenne til tilknytningens betydning.`,
    },
    {
      id: 'hov2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Utvikling i praksis',
      content: `**Situasjon**: Du jobber i barnehage og observerer Emma, 3 år. Hun leker alene i sandkassen og ser ikke ut til å ta kontakt med andre barn.

**Vurdering ut fra utviklingsteori:**
- I 3-årsalderen er det normalt med **parallell-lek** – barn leker ved siden av hverandre uten direkte samspill
- Overgang til samarbeidslek skjer gradvis fra 3-4-årsalderen
- Det er viktig å vurdere om Emma er innenfor normalvariasjonen
- Observer over tid: Tar hun kontakt i andre situasjoner? Har hun språk som støtter sosial kontakt?

**Tiltak:**
- Tilrettelegge for lek i små grupper
- Være en støttende voksen som modellerer samspill
- Invitere andre barn inn i Emmas lek
- Drøfte med pedagogisk leder dersom bekymringen vedvarer

**Konklusjon**: Kunnskap om normalutvikling er nødvendig for å kunne vurdere om tiltak er nødvendige, og for å unngå unødig bekymring.`,
    },
    {
      id: 'hov2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'Hvilken psykososial utfordring beskriver Erikson i ungdomstiden?',
        options: [
          { id: 'a', text: 'Tillit versus mistillit', isCorrect: false },
          { id: 'b', text: 'Identitet versus rolleforvirring', isCorrect: true },
          { id: 'c', text: 'Intimitet versus isolasjon', isCorrect: false },
          { id: 'd', text: 'Integritet versus fortvilelse', isCorrect: false },
        ],
        solution: 'Erikson beskriver ungdomstiden som en periode der den unge utvikler sin identitet – hvem er jeg, og hva vil jeg med livet mitt? Rolleforvirring oppstår hvis ungdommen ikke klarer å danne en stabil identitet.',
      },
    },
    {
      id: 'hov2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        task: 'Hva menes med at utvikling er et samspill mellom modning og miljø?',
        options: [
          { id: 'a', text: 'Kun genene bestemmer utviklingen', isCorrect: false },
          { id: 'b', text: 'Kun miljøet bestemmer utviklingen', isCorrect: false },
          { id: 'c', text: 'Biologiske forutsetninger og ytre påvirkninger virker sammen', isCorrect: true },
          { id: 'd', text: 'Utviklingen er helt tilfeldig', isCorrect: false },
        ],
        solution: 'Utvikling er et resultat av samspillet mellom biologisk modning (genetisk programmert utvikling) og miljøpåvirkning (erfaringer, stimulering, omsorg). Genene legger grunnlaget, men miljøet påvirker hvordan potensialet utfoldes.',
      },
    },
    {
      id: 'hov2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        task: 'Beskriv kjennetegn ved utviklingen i småbarnstiden (1-5 år) innenfor minst tre utviklingsområder.',
        solution: 'Fysisk utvikling: Barnet lærer å gå, løpe, klatre og utvikler finmotorikk som å tegne og klippe. Kognitiv utvikling: Språket utvikles raskt fra enkeltord til setninger, barnet utvikler fantasi og symbolsk lek. Sosial utvikling: Barnet blir mer selvstendig, utvikler selvbevissthet og begynner å leke med andre barn. Emosjonell utvikling: Barnet lærer gradvis å regulere følelser, men kan ha sterke reaksjoner (trass).',
      },
    },
    {
      id: 'hov2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'Forklar hva tilknytning betyr og hvorfor trygg tilknytning er viktig for barnets utvikling.',
        solution: 'Tilknytning er det emosjonelle båndet mellom barnet og omsorgspersonen, beskrevet av John Bowlby. Trygg tilknytning utvikles når omsorgspersonen er sensitiv, forutsigbar og tilgjengelig. Trygg tilknytning er viktig fordi det gir barnet en «trygg base» å utforske verden fra, fremmer god selvregulering og selvbilde, og legger grunnlag for gode relasjoner gjennom livet.',
      },
    },
    {
      id: 'hov2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        task: 'Sammenlign utviklingsoppgavene i ungdomstiden og voksen alder med utgangspunkt i Eriksons teori.',
        solution: 'I ungdomstiden er den sentrale utviklingsoppgaven identitet versus rolleforvirring – ungdommen skal finne ut hvem de er og hva de står for. I tidlig voksen alder er oppgaven intimitet versus isolasjon – å etablere nære, forpliktende relasjoner. I midtre voksen alder handler det om generativitet versus stagnasjon – å bidra til neste generasjon gjennom familie, arbeid eller samfunnsengasjement.',
      },
    },
    {
      id: 'hov2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-3-ex-6',
        number: '2.3.6',
        type: 'multiple-choice',
        task: 'Hva kjennetegner kognitiv utvikling i skolealderen (6-12 år) ifølge Piaget?',
        options: [
          { id: 'a', text: 'Barnet tenker kun sensorisk og motorisk', isCorrect: false },
          { id: 'b', text: 'Barnet utvikler logisk tenkning om konkrete ting', isCorrect: true },
          { id: 'c', text: 'Barnet kan tenke fullt ut abstrakt', isCorrect: false },
          { id: 'd', text: 'Barnet har ingen evne til å ta andres perspektiv', isCorrect: false },
        ],
        solution: 'Piaget kalte dette stadiet for det konkret-operasjonelle stadiet. Barnet kan tenke logisk om konkrete, synlige ting, men sliter fortsatt med abstrakte begreper. Abstrakt tenkning utvikles først i ungdomstiden (det formelt-operasjonelle stadiet).',
      },
    },
    {
      id: 'hov2-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Utvikling skjer på **fysisk, kognitivt, emosjonelt og sosialt** plan
- **Erikson** beskrev åtte psykososiale stadier med ulike utviklingsoppgaver
- **Tilknytning** i tidlig barndom er grunnleggende for senere utvikling
- Utvikling er et samspill mellom **modning, læring og miljø**

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Psykososial utvikling | Eriksons teori om utviklingsoppgaver gjennom livet |
| Tilknytning | Emosjonelt bånd mellom barn og omsorgsperson |
| Kognitiv utvikling | Utvikling av tenkning, språk og problemløsning |
| Modning | Biologisk programmert utvikling |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Utvikling', definition: 'Kontinuerlig endring i fysiske, kognitive, emosjonelle og sosiale egenskaper gjennom livsløpet' },
    { term: 'Tilknytning', definition: 'Emosjonelt bånd mellom barn og omsorgsperson som grunnlag for trygghet' },
    { term: 'Eriksons psykososiale stadier', definition: 'Åtte utviklingsstadier med unike psykososiale utfordringer gjennom livsløpet' },
    { term: 'Kognitiv utvikling', definition: 'Utvikling av tenkning, hukommelse, språk og problemløsning' },
    { term: 'Modning', definition: 'Biologisk programmert utvikling som skjer uavhengig av læring' },
  ],
};

// ============================================================================
// Kapittel 2.4: Aldring og eldre menneskers behov
// ============================================================================

export const CHAPTER_HOV2_2_4: TextbookChapter = {
  id: 'hov2-2-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.4',
  title: 'Aldring og eldre menneskers behov',
  description: 'Aldringsprosesser, pleie- og omsorgsbehov, funksjon og livskvalitet hos eldre. Lær om normal og patologisk aldring og hvordan helsefagarbeidere kan bidra til god alderdom.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drøfte aldring og eldre menneskers behov for omsorg og livskvalitet',
  ],
  content: [
    {
      id: 'hov2-2-4-intro',
      type: 'text',
      content: `## Aldring og omsorg

Norge har en aldrende befolkning, og behovet for helsefagarbeidere i eldreomsorgen er stort. For å gi god omsorg må du forstå hva aldring innebærer, hvilke behov eldre mennesker har, og hvordan du kan bidra til god livskvalitet.

I dette kapittelet lærer du:
- Normal og patologisk aldring
- Fysiske, psykiske og sosiale endringer ved aldring
- Eldre menneskers behov for omsorg og verdighet
- Livskvalitet i alderdommen`,
    },
    {
      id: 'hov2-2-4-def-1',
      type: 'definition',
      title: 'Aldring',
      content: `**Aldring** er en naturlig biologisk prosess som innebærer gradvise endringer i kroppens celler, vev og organer over tid. Man skiller mellom **primær aldring** (normal, uunngåelig aldring) og **sekundær aldring** (aldring forårsaket av sykdom, livsstil eller miljøfaktorer). Funksjonsevnen reduseres gradvis, men tempoet varierer stort fra person til person.`,
    },
    {
      id: 'hov2-2-4-text-1',
      type: 'text',
      content: `### Fysiske endringer ved aldring

**Muskel- og skjelettsystemet**
- Muskelmasse og -styrke reduseres (sarkopeni)
- Beintettheten synker – økt risiko for osteoporose og brudd
- Leddene blir stivere og mindre fleksible
- Balanse og koordinasjon svekkes

**Hjerte- og karsystemet**
- Hjertet pumper mindre effektivt
- Blodkarene blir stivere
- Økt risiko for høyt blodtrykk
- Redusert fysisk kapasitet

**Sanseorganer**
- Synet svekkes (alderssynt, grå stær, makuladegenerasjon)
- Hørselen reduseres (aldersrelatert hørselstap)
- Smaks- og luktesansen svekkes
- Berøringssansen kan bli mindre følsom

**Hud og hår**
- Huden blir tynnere, tørrere og mindre elastisk
- Økt risiko for sår og skader
- Håret blir tynnere og gråere
- Nedsatt temperaturregulering

**Fordøyelsessystemet**
- Nedsatt tarmaktivitet – forstoppelse er vanlig
- Redusert appetitt og smaksopplevelse
- Dårligere opptak av næringsstoffer
- Munntørrhet og tannproblemer`,
    },
    {
      id: 'hov2-2-4-def-2',
      type: 'definition',
      title: 'Geriatri',
      content: `**Geriatri** er den medisinske spesialiteten som omhandler sykdommer og helseproblemer hos eldre. Geriatrisk medisin kjennetegnes av at eldre ofte har **multimorbiditet** (flere sykdommer samtidig), **atypiske symptomer** (sykdom kan vise seg annerledes enn hos yngre) og behov for **tverrfaglig tilnærming** i behandling og omsorg.`,
    },
    {
      id: 'hov2-2-4-text-2',
      type: 'text',
      content: `### Psykiske og sosiale endringer ved aldring

**Kognitive endringer**
- Reaksjonstiden øker
- Prosesseringshastigheten synker
- Korttidshukommelsen kan svekkes
- Langtidshukommelse og visdom bevares ofte godt
- Demens er en sykdom, ikke normal aldring

**Psykiske utfordringer**
- Depresjon er vanlig, men underdiagnostisert hos eldre
- Angst kan forverres ved tap av kontroll og selvstendighet
- Sorg over tap av ektefelle, venner og funksjonsevne
- Ensomhet og isolasjon påvirker psykisk helse

**Sosiale endringer**
- Overgang fra arbeidsliv til pensjon
- Tap av sosiale roller og nettverk
- Endret familiesituasjon
- Behov for å finne nye meningsfulle aktiviteter
- Avhengighet av hjelp kan oppleves vanskelig

### Livskvalitet hos eldre

Faktorer som fremmer livskvalitet i alderdommen:
- **Fysisk aktivitet** tilpasset funksjonsnivå
- **Sosial kontakt** og meningsfulle relasjoner
- **Selvbestemmelse** og medvirkning i egen hverdag
- **Ernæring** og god tannhelse
- **Meningsfulle aktiviteter** og opplevelser
- **Smertelindring** og god symptomkontroll`,
    },
    {
      id: 'hov2-2-4-tip-1',
      type: 'tip',
      title: 'Personsentrert omsorg',
      content: `**Personsentrert omsorg** er en tilnærming der den eldre personens individuelle behov, ønsker, livshistorie og verdier settes i sentrum. Helsefagarbeideren skal se hele mennesket – ikke bare sykdommen eller funksjonstapet. Ved å kjenne den eldres bakgrunn og preferanser kan omsorgen tilpasses og livskvaliteten økes. Tom Kitwood utviklet dette begrepet spesielt for personer med demens.`,
    },
    {
      id: 'hov2-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Ivareta livskvalitet på sykehjem',
      content: `**Situasjon**: Arne, 84 år, har nylig flyttet til sykehjem etter et hoftebrudd. Han var tidligere aktiv, gikk daglige turer og var ivrig avisleser. Nå virker han innesluttet og spiser dårlig.

**Tiltak for å fremme livskvalitet:**
- **Selvbestemmelse**: Spør Arne om hans ønsker for hverdagen – når vil han stå opp, hva liker han å spise?
- **Fysisk aktivitet**: Tilrettelegge for gåtrening med fysioterapeut, korte turer i korridoren
- **Meningsfulle aktiviteter**: Sørge for at han får aviser daglig, invitere til avisgruppe
- **Sosial kontakt**: Oppmuntre familien til besøk, presentere ham for andre beboere med felles interesser
- **Ernæring**: Kartlegge hva han liker å spise, tilby mellommåltider, sørge for trivelige omgivelser rundt måltider

**Konklusjon**: Ved å se Arne som person med egen historie og ønsker, kan helsefagarbeideren bidra til at overgangen til sykehjem blir så god som mulig.`,
    },
    {
      id: 'hov2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom primær og sekundær aldring?',
        options: [
          { id: 'a', text: 'Primær aldring skyldes sykdom, sekundær er normal', isCorrect: false },
          { id: 'b', text: 'Primær aldring er normal aldring, sekundær skyldes sykdom eller livsstil', isCorrect: true },
          { id: 'c', text: 'Primær aldring rammer bare menn, sekundær rammer begge kjønn', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Primær aldring er den normale, uunngåelige biologiske aldringen som alle opplever. Sekundær aldring er aldring som forverres av sykdom, livsstil eller miljøfaktorer, for eksempel at røyking akselererer aldring av lunger og hud.',
      },
    },
    {
      id: 'hov2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        task: 'Hvilken påstand om kognitiv funksjon hos eldre er korrekt?',
        options: [
          { id: 'a', text: 'Alle eldre utvikler demens', isCorrect: false },
          { id: 'b', text: 'Langtidshukommelsen svekkes alltid mest', isCorrect: false },
          { id: 'c', text: 'Reaksjonstiden øker, men visdom og erfaring bevares ofte godt', isCorrect: true },
          { id: 'd', text: 'Kognitive evner forbedres med alderen', isCorrect: false },
        ],
        solution: 'Ved normal aldring øker reaksjonstiden og prosesseringshastigheten synker, men langtidshukommelse, erfaringsbasert kunnskap og visdom bevares ofte godt. Demens er en sykdomstilstand og ikke en del av normal aldring.',
      },
    },
    {
      id: 'hov2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        task: 'Beskriv minst fire fysiske endringer som skjer ved normal aldring og forklar hvilke konsekvenser de kan ha.',
        solution: '1) Muskelmasse reduseres (sarkopeni) – gir svekket styrke og økt fallrisiko. 2) Beintettheten synker – økt risiko for osteoporose og brudd. 3) Synet svekkes – kan gi utrygghet, fallrisiko og redusert livskvalitet. 4) Huden blir tynnere – økt risiko for sår, trykksår og skader. 5) Fordøyelsen svekkes – kan gi forstoppelse og redusert næringsopptak.',
      },
    },
    {
      id: 'hov2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Hva er personsentrert omsorg, og hvordan kan en helsefagarbeider praktisere dette i møte med eldre?',
        solution: 'Personsentrert omsorg setter den eldres individuelle behov, ønsker, livshistorie og verdier i sentrum. Helsefagarbeideren kan praktisere dette ved å lære den eldres bakgrunn å kjenne, spørre om preferanser og ønsker, respektere selvbestemmelse, tilpasse omsorgen individuelt, og se hele mennesket – ikke bare sykdommen. For eksempel kan man tilpasse daglige rutiner etter hva den eldre er vant til.',
      },
    },
    {
      id: 'hov2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        task: 'Drøft hvilke faktorer som kan fremme livskvalitet for eldre som bor på sykehjem.',
        solution: 'Livskvalitet på sykehjem fremmes av: Selvbestemmelse – la beboerne medvirke i beslutninger om egen hverdag. Meningsfulle aktiviteter – tilby aktiviteter tilpasset interesser og funksjonsnivå. Sosial kontakt – legge til rette for samvær med andre beboere, familie og venner. Fysisk aktivitet – tilpasset trening for å bevare funksjon. God ernæring – næringsrik kost i trivelige omgivelser. Smertelindring og god helsehjelp. Respekt for den enkeltes livshistorie og verdier.',
      },
    },
    {
      id: 'hov2-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Aldring** er en naturlig prosess med fysiske, psykiske og sosiale endringer
- Man skiller mellom **primær** (normal) og **sekundær** (sykdomsrelatert) aldring
- **Personsentrert omsorg** setter den eldres behov og ønsker i sentrum
- **Livskvalitet** i alderdommen fremmes av aktivitet, sosial kontakt og selvbestemmelse

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Primær aldring | Normal, uunngåelig biologisk aldring |
| Sekundær aldring | Aldring forverret av sykdom eller livsstil |
| Geriatri | Medisinsk spesialitet for eldre |
| Personsentrert omsorg | Tilnærming som setter den enkeltes behov i sentrum |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Aldring', definition: 'Naturlig biologisk prosess med gradvise endringer i kroppen over tid' },
    { term: 'Geriatri', definition: 'Medisinsk spesialitet som omhandler sykdommer og helse hos eldre' },
    { term: 'Personsentrert omsorg', definition: 'Omsorg der den enkeltes behov, ønsker og livshistorie settes i sentrum' },
    { term: 'Sarkopeni', definition: 'Aldersrelatert tap av muskelmasse og muskelstyrke' },
    { term: 'Multimorbiditet', definition: 'Å ha flere sykdommer eller diagnoser samtidig' },
  ],
};

// ============================================================================
// Kapittel 2.5: Sosiale nettverk og ensomhet
// ============================================================================

export const CHAPTER_HOV2_2_5: TextbookChapter = {
  id: 'hov2-2-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.5',
  title: 'Sosiale nettverk og ensomhet',
  description: 'Sosiale nettverks betydning for helse, forebygging av ensomhet og sosial deltakelse. Lær hvordan helsefagarbeidere kan bidra til å styrke sosial tilhørighet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for betydningen av sosiale nettverk og forebygging av ensomhet',
  ],
  content: [
    {
      id: 'hov2-2-5-intro',
      type: 'text',
      content: `## Sosiale nettverk og helse

Mennesket er et sosialt vesen, og relasjoner til andre er avgjørende for helse og livskvalitet. Ensomhet er et alvorlig folkehelseproblem som rammer mange, spesielt eldre, unge og mennesker med funksjonsnedsettelser. Helsefagarbeidere har en viktig rolle i å oppdage ensomhet og tilrettelegge for sosial deltakelse.

I dette kapittelet lærer du:
- Hva sosiale nettverk er og hvorfor de er viktige
- Forskjellen mellom ensomhet og sosial isolasjon
- Konsekvenser av ensomhet for helsen
- Tiltak for å forebygge ensomhet`,
    },
    {
      id: 'hov2-2-5-def-1',
      type: 'definition',
      title: 'Sosialt nettverk',
      content: `Et **sosialt nettverk** er summen av en persons relasjoner og kontakter – familie, venner, naboer, kolleger og andre. Nettverket gir **sosial støtte** i form av emosjonell støtte (omsorg og nærhet), praktisk støtte (konkret hjelp), informasjonsstøtte (råd og veiledning) og bekreftende støtte (anerkjennelse og tilhørighet). Et godt sosialt nettverk er en beskyttelsesfaktor for helsen.`,
    },
    {
      id: 'hov2-2-5-text-1',
      type: 'text',
      content: `### Sosiale nettverks betydning for helsen

**Fysisk helse**
- Mennesker med gode sosiale nettverk lever lenger
- Sosial støtte styrker immunforsvaret
- Sosialt aktive personer har lavere risiko for hjerte- og karsykdom
- Nettverket kan motivere til sunne levevaner

**Psykisk helse**
- Sosial tilhørighet beskytter mot depresjon og angst
- Følelsen av å bety noe for andre gir mening
- Nettverket gir mulighet for å dele gleder og sorger
- Sosial kontakt stimulerer kognitiv funksjon

**Livskvalitet**
- Fellesskap og tilhørighet gir mening i tilværelsen
- Aktiviteter sammen med andre gir glede og opplevelser
- Sosial deltakelse fremmer opplevelse av verdighet
- Nettverket gir trygghet og forutsigbarhet

**Risikofaktorer for svakt nettverk**
- Tap av ektefelle eller nære familiemedlemmer
- Geografisk avstand til familie og venner
- Funksjonsnedsettelser som begrenser sosial deltakelse
- Sykdom eller innleggelse på institusjon
- Digitalt utenforskap hos eldre
- Overgang fra arbeidsliv til pensjon`,
    },
    {
      id: 'hov2-2-5-def-2',
      type: 'definition',
      title: 'Ensomhet',
      content: `**Ensomhet** er en subjektiv opplevelse av å ha færre eller svakere sosiale relasjoner enn man ønsker. Det skilles mellom **emosjonell ensomhet** (mangel på nær, fortrolig relasjon) og **sosial ensomhet** (mangel på tilhørighet til en gruppe). Ensomhet er ikke det samme som **sosial isolasjon**, som er en objektiv måling av lite sosial kontakt – man kan være alene uten å føle seg ensom, og man kan føle seg ensom i et rom fullt av mennesker.`,
    },
    {
      id: 'hov2-2-5-text-2',
      type: 'text',
      content: `### Konsekvenser av ensomhet

**Helsemessige konsekvenser**
- Økt risiko for depresjon og angst
- Høyere risiko for hjerte- og karsykdom
- Svekket immunforsvar
- Økt risiko for kognitiv svikt og demens
- Forstyrret søvnmønster
- Økt dødelighet – ensomhet sammenlignes med å røyke 15 sigaretter daglig

**Grupper med økt risiko**
- Eldre som bor alene, spesielt etter tap av ektefelle
- Unge som faller utenfor sosialt
- Personer med kronisk sykdom eller funksjonsnedsettelse
- Innvandrere med lite nettverk
- Mennesker med psykiske lidelser

### Forebygging av ensomhet

**Individuelle tiltak**
- Kartlegge den enkeltes sosiale nettverk og ønsker
- Motivere til deltakelse i aktiviteter
- Hjelpe med å opprettholde eksisterende relasjoner
- Tilrettelegge for besøk og sosial kontakt
- Bruk av teknologi (videosamtaler, sosiale medier)

**Strukturelle tiltak**
- Besøkstjenester og frivillige organisasjoner
- Aktivitetssentre og dagsentre
- Fellesarealer og møteplasser
- Generasjonsmøter og intergenerasjonelle aktiviteter
- Kultur- og aktivitetstilbud i institusjon`,
    },
    {
      id: 'hov2-2-5-tip-1',
      type: 'tip',
      title: 'Nettverkskart',
      content: `Et **nettverkskart** er et verktøy der man tegner opp personens sosiale relasjoner i sirkler rundt personen. De nærmeste relasjonene (familie, nære venner) er i den innerste sirkelen, mens mer perifere kontakter er lengre ut. Nettverkskartet hjelper helsefagarbeideren å kartlegge hvem som er viktige for brukeren, og om det er behov for tiltak for å styrke nettverket.`,
    },
    {
      id: 'hov2-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Forebygging av ensomhet',
      content: `**Situasjon**: Gunhild, 79 år, bor alene i leilighet. Ektemannen døde for et år siden. Hun har to barn som bor i andre byer. Hjemmesykepleien kommer daglig med medisiner. Du legger merke til at Gunhild virker nedstemt og sier at dagene er lange.

**Kartlegging med nettverkskart:**
- Innerste sirkel: Barna, men de bor langt unna
- Midtre sirkel: En nabo hun hilser på, søsteren som ringer ukentlig
- Ytre sirkel: Tidligere kolleger hun har mistet kontakt med

**Tiltak:**
- Foreslå besøksvenn gjennom Røde Kors eller Frivilligsentralen
- Informere om aktivitetssentre i nærheten med sosiale tilbud
- Hjelpe med å sette opp nettbrett for videosamtaler med barna
- Oppmuntre nabokontakt og foreslå felles kaffestund
- Drøfte med primærsykepleier om henvisning til dagsenter

**Konklusjon**: Ved å kartlegge og iverksette tiltak kan helsefagarbeideren bidra til å bryte ensomheten og styrke Gunhilds sosiale nettverk.`,
    },
    {
      id: 'hov2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom ensomhet og sosial isolasjon?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – begrepene betyr det samme', isCorrect: false },
          { id: 'b', text: 'Ensomhet er subjektiv opplevelse, sosial isolasjon er objektiv lite kontakt', isCorrect: true },
          { id: 'c', text: 'Sosial isolasjon er verre enn ensomhet', isCorrect: false },
          { id: 'd', text: 'Ensomhet rammer bare eldre, isolasjon rammer alle', isCorrect: false },
        ],
        solution: 'Ensomhet er en subjektiv opplevelse av å ha færre relasjoner enn man ønsker. Sosial isolasjon er en objektiv tilstand med lite sosial kontakt. Man kan være alene uten å føle seg ensom, og man kan føle seg ensom selv om man omgås mange mennesker.',
      },
    },
    {
      id: 'hov2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        task: 'Hvilken type sosial støtte handler om omsorg og nærhet?',
        options: [
          { id: 'a', text: 'Praktisk støtte', isCorrect: false },
          { id: 'b', text: 'Informasjonsstøtte', isCorrect: false },
          { id: 'c', text: 'Emosjonell støtte', isCorrect: true },
          { id: 'd', text: 'Bekreftende støtte', isCorrect: false },
        ],
        solution: 'Emosjonell støtte handler om omsorg, nærhet, trøst og muligheten til å dele følelser med noen. Praktisk støtte er konkret hjelp, informasjonsstøtte er råd og veiledning, og bekreftende støtte er anerkjennelse og tilhørighet.',
      },
    },
    {
      id: 'hov2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        task: 'Forklar hvorfor sosiale nettverk er viktige for helsen, og nevn minst tre helsemessige konsekvenser av ensomhet.',
        solution: 'Sosiale nettverk er viktige fordi de gir sosial støtte, tilhørighet og mening, og beskytter mot sykdom. Helsemessige konsekvenser av ensomhet inkluderer: 1) Økt risiko for depresjon og angst. 2) Høyere risiko for hjerte- og karsykdom. 3) Svekket immunforsvar. 4) Økt risiko for kognitiv svikt og demens. 5) Forstyrret søvnmønster og økt dødelighet.',
      },
    },
    {
      id: 'hov2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Beskriv hva et nettverkskart er og hvordan det kan brukes i arbeidet med en bruker som er ensom.',
        solution: 'Et nettverkskart er et verktøy der man tegner personens sosiale relasjoner i sirkler rundt personen. De nærmeste relasjonene plasseres innerst, mer perifere kontakter lengre ut. Det kan brukes til å kartlegge hvem som er viktige for brukeren, identifisere hull i nettverket, planlegge tiltak for å styrke nettverket, og synliggjøre ressurser brukeren kanskje ikke ser selv.',
      },
    },
    {
      id: 'hov2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        task: 'Foreslå fem konkrete tiltak en helsefagarbeider kan iverksette for å forebygge ensomhet hos en eldre person som bor alene.',
        solution: 'Fem konkrete tiltak: 1) Kontakte besøkstjenesten (f.eks. Røde Kors) for regelmessig besøksvenn. 2) Informere om og motivere til deltakelse på aktivitetssenter eller dagsenter. 3) Hjelpe med teknologi for videosamtaler med familie og venner. 4) Tilrettelegge for nabokontakt og sosiale treffpunkter i nærmiljøet. 5) Bruke tid på samtale og sosialt samvær under hjemmebesøk, og observere tegn på ensomhet for å melde videre til primærsykepleier.',
      },
    },
    {
      id: 'hov2-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Sosiale nettverk** er en beskyttelsesfaktor for fysisk og psykisk helse
- **Ensomhet** er en subjektiv opplevelse som skiller seg fra sosial isolasjon
- Ensomhet har alvorlige **helsemessige konsekvenser** og øker dødeligheten
- **Nettverkskart** er et nyttig verktøy for kartlegging og tiltak

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sosialt nettverk | Summen av en persons relasjoner og kontakter |
| Ensomhet | Subjektiv opplevelse av for få eller svake relasjoner |
| Sosial isolasjon | Objektiv tilstand med lite sosial kontakt |
| Nettverkskart | Verktøy for å kartlegge sosiale relasjoner |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sosialt nettverk', definition: 'Summen av en persons relasjoner og kontakter som gir sosial støtte' },
    { term: 'Ensomhet', definition: 'Subjektiv opplevelse av å ha færre eller svakere sosiale relasjoner enn man ønsker' },
    { term: 'Sosial isolasjon', definition: 'Objektiv tilstand med lite sosial kontakt, uavhengig av opplevd ensomhet' },
    { term: 'Sosial støtte', definition: 'Emosjonell, praktisk, informasjons- og bekreftende støtte fra nettverket' },
    { term: 'Nettverkskart', definition: 'Verktøy for å kartlegge og visualisere en persons sosiale relasjoner' },
  ],
};

// ============================================================================
// Kapittel 2.6: Rehabilitering og habilitering
// ============================================================================

export const CHAPTER_HOV2_2_6: TextbookChapter = {
  id: 'hov2-2-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.6',
  title: 'Rehabilitering og habilitering',
  description: 'Prinsipper for rehabilitering, habilitering og hverdagsmestring. Lær hvordan helsefagarbeidere bidrar til at brukere gjenvinner eller utvikler funksjon og selvstendighet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive rehabilitering, habilitering og hverdagsmestring',
  ],
  content: [
    {
      id: 'hov2-2-6-intro',
      type: 'text',
      content: `## Rehabilitering og habilitering

Rehabilitering og habilitering handler om å hjelpe mennesker til å gjenvinne eller utvikle funksjon og deltakelse i samfunnet. Dette er sentrale arbeidsområder for helsefagarbeidere, enten det gjelder eldre som trener opp gangfunksjonen etter brudd, eller barn med funksjonsnedsettelser som trenger støtte i utviklingen.

I dette kapittelet lærer du:
- Forskjellen mellom rehabilitering og habilitering
- Prinsipper for rehabiliteringsarbeid
- Hverdagsmestring og hverdagsrehabilitering
- Helsefagarbeiderens rolle i rehabiliteringsteamet`,
    },
    {
      id: 'hov2-2-6-def-1',
      type: 'definition',
      title: 'Rehabilitering',
      content: `**Rehabilitering** er tidsavgrensede, planlagte prosesser med klare mål og virkemidler, der flere aktører samarbeider om å gi nødvendig bistand til brukerens egen innsats for å oppnå best mulig funksjons- og mestringsevne, selvstendighet og deltakelse sosialt og i samfunnet. Rehabilitering retter seg mot personer som har fått nedsatt funksjon etter sykdom, skade eller funksjonsnedsettelse.`,
    },
    {
      id: 'hov2-2-6-text-1',
      type: 'text',
      content: `### Rehabilitering versus habilitering

**Rehabilitering**
- Gjenvinne tapt funksjon etter sykdom eller skade
- Personen har hatt en funksjon som er blitt redusert
- Eksempler: etter hjerneslag, hoftebrudd, hjerteinfarkt
- Mål: komme tilbake til best mulig funksjonsnivå

**Habilitering**
- Utvikle ny funksjon og ferdigheter
- Personen har en medfødt eller tidlig ervervet funksjonsnedsettelse
- Eksempler: barn med cerebral parese, utviklingshemming, medfødt synshemming
- Mål: oppnå best mulig funksjon og deltakelse

**Felles prinsipper**
- Brukermedvirkning – brukeren er aktiv deltaker
- Tverrfaglig samarbeid – ulike faggrupper samarbeider
- Individuell plan (IP) – koordinert tjenestetilbud
- Målrettet – klare, realistiske mål
- Helhetlig – ser hele menneskets situasjon
- Tidsavgrenset – med definert start og slutt`,
    },
    {
      id: 'hov2-2-6-def-2',
      type: 'definition',
      title: 'Hverdagsrehabilitering',
      content: `**Hverdagsrehabilitering** er en tidsavgrenset rehabiliteringsinnsats i brukerens hjem og nærmiljø, der daglige aktiviteter brukes som treningsarena. Målet er at brukeren skal mestre hverdagsaktiviteter som personlig hygiene, matlaging og mobilitet. I stedet for å overta oppgaver, veileder helsefagarbeideren brukeren til å gjøre mest mulig selv. Tilnærmingen er «hendene på ryggen» – hjelp til selvhjelp.`,
    },
    {
      id: 'hov2-2-6-text-2',
      type: 'text',
      content: `### Hverdagsmestring i praksis

**Hva er hverdagsmestring?**
- Evnen til å klare dagliglivets aktiviteter
- Fokus på hva brukeren kan gjøre, ikke hva de ikke kan
- Ressursorientert tilnærming
- Styrke selvstendighet og selvtillit

**Helsefagarbeiderens rolle:**
- Motivere og oppmuntre brukeren
- Tilrettelegge for aktivitet fremfor å overta
- Observere funksjonsnivå og fremgang
- Rapportere til rehabiliteringsteamet
- Følge opp treningsprogram i hverdagen

**Det tverrfaglige teamet:**
- Fysioterapeut: treningsprogram og mobilitet
- Ergoterapeut: tilrettelegging og hjelpemidler
- Sykepleier: medisinsk oppfølging
- Helsefagarbeider: daglig oppfølging og trening
- Sosionom: rettigheter og sosiale forhold
- Lege: medisinsk vurdering
- Brukeren selv: den viktigste aktøren

### Individuell plan (IP)
- Lovfestet rettighet for brukere med behov for langvarige, koordinerte tjenester
- Koordinator har ansvar for å følge opp planen
- Inneholder mål, tiltak, ansvarlig for hvert tiltak og tidsplan
- Brukeren skal medvirke aktivt i utformingen
- Sikrer helhetlig og koordinert tjenestetilbud`,
    },
    {
      id: 'hov2-2-6-tip-1',
      type: 'tip',
      title: 'Hendene på ryggen',
      content: `«Hendene på ryggen»-prinsippet er sentralt i hverdagsrehabilitering. Det betyr at helsefagarbeideren lar brukeren gjøre mest mulig selv, selv om det tar lengre tid. I stedet for å smøre brødskiven for brukeren, veileder du vedkommende til å gjøre det selv. Dette krever tålmodighet, men gir brukeren mestring og selvstendighet. Husk: det som tar lengre tid nå, kan spare tid i fremtiden når brukeren klarer mer selv.`,
    },
    {
      id: 'hov2-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Hverdagsrehabilitering etter hjerneslag',
      content: `**Situasjon**: Solveig, 72 år, har hatt et hjerneslag som førte til nedsatt kraft i høyre arm og ben. Hun er utskrevet fra sykehuset og skal rehabiliteres hjemme.

**Tverrfaglig plan:**
- **Fysioterapeut**: har laget et treningsprogram for styrke og balanse
- **Ergoterapeut**: har vurdert boligen og foreslått hjelpemidler (dusjkrakk, håndtak)
- **Helsefagarbeider**: følger opp daglig trening og hverdagsaktiviteter

**Helsefagarbeiderens oppgaver:**
- Morgen: Motivere Solveig til å kle på seg selv med tilrettelegging – hun bruker lenger tid, men mestrer det med veiledning
- Frokost: La Solveig smøre egen mat, selv om det er krevende med nedsatt armfunksjon
- Trening: Gjennomføre øvelsene fra fysioterapeuten – gangtrening i leiligheten, gripøvelser
- Observasjon: Notere fremgang og utfordringer for rapportering til teamet
- Motivasjon: Bekrefte fremgang og gi oppmuntring

**Resultat etter 6 uker**: Solveig klarer å dusje selv med dusjkrakk, kle på seg og lage enkel frokost. Hun er motivert og opplever økt livskvalitet.`,
    },
    {
      id: 'hov2-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-6-ex-1',
        number: '2.6.1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom rehabilitering og habilitering?',
        options: [
          { id: 'a', text: 'Rehabilitering er for barn, habilitering er for voksne', isCorrect: false },
          { id: 'b', text: 'Rehabilitering gjenoppretter tapt funksjon, habilitering utvikler ny funksjon', isCorrect: true },
          { id: 'c', text: 'Rehabilitering skjer på sykehus, habilitering skjer hjemme', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell mellom dem', isCorrect: false },
        ],
        solution: 'Rehabilitering handler om å gjenvinne funksjon som er tapt på grunn av sykdom eller skade. Habilitering handler om å utvikle ny funksjon hos personer med medfødte eller tidlig ervervede funksjonsnedsettelser.',
      },
    },
    {
      id: 'hov2-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-6-ex-2',
        number: '2.6.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner hverdagsrehabilitering?',
        options: [
          { id: 'a', text: 'Helsefagarbeideren gjør oppgavene for brukeren', isCorrect: false },
          { id: 'b', text: 'Rehabiliteringen foregår kun på institusjon', isCorrect: false },
          { id: 'c', text: 'Daglige aktiviteter brukes som treningsarena i brukerens hjem', isCorrect: true },
          { id: 'd', text: 'Brukeren trener alene uten oppfølging', isCorrect: false },
        ],
        solution: 'Hverdagsrehabilitering er en tidsavgrenset innsats i brukerens hjem der daglige aktiviteter som påkledning, matlaging og hygiene brukes som treningsarena. Helsefagarbeideren veileder brukeren til å gjøre mest mulig selv.',
      },
    },
    {
      id: 'hov2-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-6-ex-3',
        number: '2.6.3',
        type: 'classic',
        task: 'Forklar hva «hendene på ryggen»-prinsippet betyr i hverdagsrehabilitering, og gi et praktisk eksempel.',
        solution: '«Hendene på ryggen»-prinsippet betyr at helsefagarbeideren lar brukeren gjøre mest mulig selv, i stedet for å overta oppgavene. Eksempel: I stedet for å smøre frokost for en bruker med nedsatt armfunksjon etter hjerneslag, veileder helsefagarbeideren brukeren til å gjøre det selv – kanskje med tilpassede hjelpemidler. Det tar lengre tid, men gir brukeren trening, mestringsopplevelse og økt selvstendighet.',
      },
    },
    {
      id: 'hov2-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-6-ex-4',
        number: '2.6.4',
        type: 'classic',
        task: 'Beskriv det tverrfaglige teamet i rehabilitering og forklar helsefagarbeiderens rolle.',
        solution: 'Det tverrfaglige teamet kan bestå av fysioterapeut (treningsprogram), ergoterapeut (tilrettelegging og hjelpemidler), sykepleier (medisinsk oppfølging), lege (medisinsk vurdering), sosionom (rettigheter) og helsefagarbeider. Helsefagarbeiderens rolle er daglig oppfølging: motivere brukeren, gjennomføre treningsøvelser i hverdagen, observere funksjonsnivå og fremgang, og rapportere til resten av teamet. Brukeren selv er den viktigste aktøren.',
      },
    },
    {
      id: 'hov2-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-6-ex-5',
        number: '2.6.5',
        type: 'classic',
        task: 'Hva er en individuell plan (IP), og hvem har rett på dette?',
        solution: 'En individuell plan (IP) er en lovfestet rettighet for personer med behov for langvarige og koordinerte helse- og omsorgstjenester. Planen utarbeides i samarbeid med brukeren og inneholder mål, tiltak, ansvarlig for hvert tiltak og tidsplan. En koordinator har ansvar for å følge opp planen. IP sikrer helhetlig og koordinert tjenestetilbud på tvers av faggrupper og tjenestenivåer.',
      },
    },
    {
      id: 'hov2-2-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Rehabilitering** gjenoppretter tapt funksjon, **habilitering** utvikler ny funksjon
- **Hverdagsrehabilitering** bruker daglige aktiviteter som treningsarena
- **«Hendene på ryggen»**-prinsippet fremmer selvstendighet og mestring
- **Tverrfaglig samarbeid** og brukermedvirkning er grunnpilarer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Rehabilitering | Gjenvinne funksjon etter sykdom eller skade |
| Habilitering | Utvikle funksjon ved medfødt funksjonsnedsettelse |
| Hverdagsrehabilitering | Rehabilitering i hjemmet med daglige aktiviteter som arena |
| Individuell plan | Lovfestet rett til koordinert tjenestetilbud |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rehabilitering', definition: 'Planlagt prosess for å gjenvinne funksjon etter sykdom eller skade' },
    { term: 'Habilitering', definition: 'Planlagt prosess for å utvikle funksjon ved medfødte funksjonsnedsettelser' },
    { term: 'Hverdagsrehabilitering', definition: 'Rehabilitering i hjemmet der daglige aktiviteter brukes som trening' },
    { term: 'Individuell plan', definition: 'Lovfestet rettighet til koordinert plan for langvarige tjenester' },
    { term: 'Tverrfaglig samarbeid', definition: 'Samarbeid mellom ulike faggrupper for helhetlig tjenestetilbud' },
  ],
};

// ============================================================================
// Kapittel 2.7: Miljøarbeid og aktivitetstilbud
// ============================================================================

export const CHAPTER_HOV2_2_7: TextbookChapter = {
  id: 'hov2-2-7',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '2.7',
  title: 'Miljøarbeid og aktivitetstilbud',
  description: 'Miljøarbeid i helse- og omsorgstjenesten og aktivitetstilbud for ulike brukergrupper. Lær å planlegge og gjennomføre meningsfulle aktiviteter som fremmer helse og livskvalitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre miljøarbeid og aktivitetstilbud',
  ],
  content: [
    {
      id: 'hov2-2-7-intro',
      type: 'text',
      content: `## Miljøarbeid og aktiviteter

Miljøarbeid handler om å tilrettelegge omgivelsene og aktivitetene slik at brukere opplever mestring, trivsel og livskvalitet. Aktivitetstilbud er en viktig del av helse- og omsorgstjenesten, og helsefagarbeidere har en sentral rolle i å planlegge og gjennomføre disse.

I dette kapittelet lærer du:
- Hva miljøarbeid er og hvorfor det er viktig
- Prinsipper for planlegging av aktivitetstilbud
- Ulike aktivitetstyper og brukergrupper
- Helsefagarbeiderens rolle i miljøarbeid`,
    },
    {
      id: 'hov2-2-7-def-1',
      type: 'definition',
      title: 'Miljøarbeid',
      content: `**Miljøarbeid** er en systematisk tilrettelegging av fysiske, psykiske og sosiale miljøfaktorer for å fremme helse, trivsel og livskvalitet. I helse- og omsorgstjenesten innebærer miljøarbeid å skape rammer og omgivelser som støtter brukerens funksjon, deltakelse og mestring. Miljøarbeid omfatter både det fysiske miljøet (rom, uteområder, innredning) og det psykososiale miljøet (relasjoner, aktiviteter, kultur).`,
    },
    {
      id: 'hov2-2-7-text-1',
      type: 'text',
      content: `### Miljøarbeid i praksis

**Det fysiske miljøet**
- Tilrettelegging av rom og fellesarealer
- God belysning og oversiktlige omgivelser
- Hjemlige og trivelige omgivelser på institusjon
- Tilgang til uteområder og natur
- Universell utforming og tilgjengelighet
- Sansestimulering gjennom farger, bilder og musikk

**Det psykososiale miljøet**
- Trygghet og forutsigbarhet i hverdagen
- Gode relasjoner mellom beboere og ansatte
- Respekt for den enkeltes verdighet og privatliv
- Mulighet for sosial deltakelse og fellesskap
- Balanse mellom aktivitet og hvile
- Kultur- og verdiforankret omsorg

**Miljøterapeutiske prinsipper**
- Struktur og forutsigbarhet i hverdagen
- Tilpassede krav og utfordringer
- Positiv forsterkning og anerkjennelse
- Involvering og medvirkning
- Individuell tilpasning av aktiviteter`,
    },
    {
      id: 'hov2-2-7-def-2',
      type: 'definition',
      title: 'Aktivitetstilbud',
      content: `**Aktivitetstilbud** er planlagte, målrettede aktiviteter som tilbys brukere i helse- og omsorgstjenesten for å fremme helse, funksjon, trivsel og sosial deltakelse. Aktivitetene kan være fysiske (turgåing, trim), kreative (håndarbeid, maling), sosiale (fellessamlinger, spill), kognitive (quiz, avisklubb) eller kulturelle (sang, musikk, forestillinger). Aktivitetene skal tilpasses den enkeltes interesser, funksjonsnivå og ønsker.`,
    },
    {
      id: 'hov2-2-7-text-2',
      type: 'text',
      content: `### Planlegging og gjennomføring av aktiviteter

**Kartlegging**
- Kartlegg brukerens interesser, hobbyer og livshistorie
- Vurder funksjonsnivå og helsetilstand
- Spør om ønsker og preferanser
- Ta hensyn til kulturell bakgrunn

**Planlegging**
- Sett klare mål for aktiviteten (hva skal oppnås?)
- Velg aktivitet tilpasset målgruppen
- Planlegg praktiske forhold (tid, sted, utstyr, bemanning)
- Vurder risiko og tilretteleggingsbehov
- Sikre at aktiviteten er frivillig

**Gjennomføring**
- Skap en trygg og inkluderende atmosfære
- Tilpass aktiviteten underveis etter responsen
- Sørg for at alle kan delta på sitt nivå
- Vær entusiastisk og motiverende
- Observer deltakernes reaksjoner og trivsel

**Evaluering**
- Vurder om målene ble nådd
- Innhent tilbakemeldinger fra deltakerne
- Dokumenter gjennomføring og observasjoner
- Bruk erfaringer til å forbedre fremtidige aktiviteter

### Aktiviteter for ulike brukergrupper

**Eldre på sykehjem**
- Sang og musikk fra deres ungdomstid
- Reminisensgrupper (minnearbeid)
- Turgåing og sansehage
- Baking og matlaging
- Avislesing og diskusjonsgrupper

**Personer med demens**
- Sansestimulering (musikk, dufter, taktile materialer)
- Enkel fysisk aktivitet tilpasset funksjonsnivå
- Kjente sanger og tradisjoner
- Hverdagslige gjøremål som dekking av bord
- Dyr og naturopplevelser

**Barn og unge**
- Lek og kreativ utfoldelse
- Sport og fysisk aktivitet
- Sosialt samvær og gruppetilhørighet
- Læringsaktiviteter tilpasset alder
- Friluftsliv og utflukter

**Personer med funksjonsnedsettelser**
- Tilrettelagt fysisk aktivitet
- Kreative verksteder
- Sosiale arrangementer
- Fritidsaktiviteter i nærmiljøet
- Støttekontakt og fritidsassistent`,
    },
    {
      id: 'hov2-2-7-tip-1',
      type: 'tip',
      title: 'Reminisens',
      content: `**Reminisens** (minnearbeid) er en metode der man bruker minner og livshistorie som utgangspunkt for samtale og aktivitet. Gamle fotografier, gjenstander, musikk og lukter kan vekke minner og gi grunnlag for samtale og fellesskap. Reminisens er spesielt verdifullt for eldre og personer med demens, fordi langtidsminner ofte er bedre bevart enn korttidsminner. Metoden fremmer identitet, verdighet og sosial kontakt.`,
    },
    {
      id: 'hov2-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Planlegging av aktivitet på sykehjem',
      content: `**Situasjon**: Du skal planlegge en ukentlig sangstund for beboerne på en demensavdeling.

**Kartlegging:**
- Snakker med pårørende om beboernes musikksmak
- Finner ut at flere beboere har vokst opp med viser og slagere fra 1950-60-tallet
- Vurderer funksjonsnivået: noen kan synge med, andre kan lytte og klappe

**Planlegging:**
- Mål: Fremme trivsel, gjenkjennelse og sosial deltakelse
- Tid: Onsdag kl. 14.00 (etter hvile), varighet 30-45 minutter
- Sted: Fellesstuen med god plass og komfortable stoler
- Utstyr: Sanghefter med store bokstaver, CD-spiller, rytmeinstrumenter
- Bemanning: Du og en kollega

**Gjennomføring:**
- Samler beboerne i en halvsirkel for blikkontakt
- Starter med en kjent sang som alle kjenner
- Observerer at Ragnhild, som vanligvis er stille, begynner å synge med
- Tilbyr rytmeinstrumenter til dem som ikke synger
- Avslutter med rolig sang og en kopp kaffe

**Evaluering:**
- Beboerne virket glade og engasjerte
- Pårørende forteller at Ragnhild snakket om sangstunden etterpå
- Neste gang: ta med bilder fra 1950-tallet som samtalestarter

**Konklusjon**: En godt planlagt aktivitet kan gi stor glede og mestring, selv for personer med betydelig kognitiv svikt.`,
    },
    {
      id: 'hov2-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-7-ex-1',
        number: '2.7.1',
        type: 'multiple-choice',
        task: 'Hva omfatter miljøarbeid i helse- og omsorgstjenesten?',
        options: [
          { id: 'a', text: 'Kun tilrettelegging av det fysiske miljøet', isCorrect: false },
          { id: 'b', text: 'Kun sosiale aktiviteter og underholdning', isCorrect: false },
          { id: 'c', text: 'Systematisk tilrettelegging av fysiske, psykiske og sosiale miljøfaktorer', isCorrect: true },
          { id: 'd', text: 'Kun rengjøring og vedlikehold av lokaler', isCorrect: false },
        ],
        solution: 'Miljøarbeid er en systematisk tilrettelegging av fysiske, psykiske og sosiale miljøfaktorer for å fremme helse, trivsel og livskvalitet. Det omfatter både det fysiske miljøet (rom, belysning, uteområder) og det psykososiale miljøet (relasjoner, aktiviteter, trygghet).',
      },
    },
    {
      id: 'hov2-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-7-ex-2',
        number: '2.7.2',
        type: 'multiple-choice',
        task: 'Hva er reminisens?',
        options: [
          { id: 'a', text: 'En type fysisk trening for eldre', isCorrect: false },
          { id: 'b', text: 'En metode der minner og livshistorie brukes som utgangspunkt for samtale', isCorrect: true },
          { id: 'c', text: 'En medisinsk behandlingsform', isCorrect: false },
          { id: 'd', text: 'En form for musikkterapi', isCorrect: false },
        ],
        solution: 'Reminisens (minnearbeid) er en metode der man bruker minner og livshistorie som utgangspunkt for samtale og aktivitet. Gamle bilder, gjenstander og musikk kan vekke minner. Metoden er spesielt verdifull for eldre og personer med demens, der langtidsminner ofte er godt bevart.',
      },
    },
    {
      id: 'hov2-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-7-ex-3',
        number: '2.7.3',
        type: 'classic',
        task: 'Beskriv de fire fasene i planlegging og gjennomføring av et aktivitetstilbud.',
        solution: 'De fire fasene er: 1) Kartlegging – kartlegge brukerens interesser, funksjonsnivå, ønsker og kulturell bakgrunn. 2) Planlegging – sette mål, velge aktivitet, planlegge praktiske forhold som tid, sted og utstyr. 3) Gjennomføring – skape trygg atmosfære, tilpasse underveis, sørge for deltakelse og observere reaksjoner. 4) Evaluering – vurdere om mål ble nådd, innhente tilbakemeldinger, dokumentere og bruke erfaringer til forbedring.',
      },
    },
    {
      id: 'hov2-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-7-ex-4',
        number: '2.7.4',
        type: 'classic',
        task: 'Foreslå tre ulike aktiviteter som kan egne seg for personer med demens, og begrunn valgene dine.',
        solution: 'Tre aktiviteter: 1) Sang og musikk fra beboernes ungdomstid – musikk vekker minner og følelser, og evnen til å synge bevares ofte lenge ved demens. 2) Sansestimulering med kjente dufter og gjenstander – stimulerer sanser og minner, krever ikke kognitiv kapasitet. 3) Enkle hverdagsaktiviteter som å dekke bord eller brette klær – gir mestringsfølelse, er kjent og trygt, og opprettholder funksjon.',
      },
    },
    {
      id: 'hov2-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-2-7-ex-5',
        number: '2.7.5',
        type: 'classic',
        task: 'Forklar hva som menes med det psykososiale miljøet på en institusjon, og hvorfor det er viktig for beboernes livskvalitet.',
        solution: 'Det psykososiale miljøet handler om relasjoner, trygghet, sosial kontakt, kultur og atmosfære på institusjonen. Det inkluderer forholdet mellom beboere og ansatte, mulighet for sosial deltakelse, respekt for verdighet og privatliv, og forutsigbarhet i hverdagen. Et godt psykososialt miljø er viktig fordi det fremmer trivsel, forebygger ensomhet og depresjon, gir opplevelse av tilhørighet og mening, og bidrar til at beboerne opplever verdighet og livskvalitet.',
      },
    },
    {
      id: 'hov2-2-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Miljøarbeid** omfatter tilrettelegging av fysiske, psykiske og sosiale miljøfaktorer
- **Aktivitetstilbud** skal tilpasses den enkeltes interesser, funksjonsnivå og ønsker
- Planlegging følger fasene: kartlegging, planlegging, gjennomføring og evaluering
- **Reminisens** er en verdifull metode for eldre og personer med demens

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Miljøarbeid | Systematisk tilrettelegging av miljøfaktorer for trivsel og helse |
| Aktivitetstilbud | Planlagte aktiviteter som fremmer helse og sosial deltakelse |
| Reminisens | Minnearbeid – bruke livshistorie som utgangspunkt for samtale |
| Psykososialt miljø | Relasjoner, trygghet og sosial atmosfære i omgivelsene |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Miljøarbeid', definition: 'Systematisk tilrettelegging av fysiske, psykiske og sosiale miljøfaktorer' },
    { term: 'Aktivitetstilbud', definition: 'Planlagte aktiviteter som fremmer helse, funksjon og sosial deltakelse' },
    { term: 'Reminisens', definition: 'Minnearbeid der livshistorie og minner brukes som utgangspunkt for samtale' },
    { term: 'Psykososialt miljø', definition: 'Det sosiale og psykologiske klimaet i omgivelsene' },
    { term: 'Miljøterapi', definition: 'Systematisk bruk av miljøet som terapeutisk verktøy for endring og utvikling' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL2_CHAPTERS = [
  CHAPTER_HOV2_2_1,
  CHAPTER_HOV2_2_2,
  CHAPTER_HOV2_2_3,
  CHAPTER_HOV2_2_4,
  CHAPTER_HOV2_2_5,
  CHAPTER_HOV2_2_6,
  CHAPTER_HOV2_2_7,
];

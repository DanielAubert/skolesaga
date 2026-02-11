/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 4: Motivasjon og arbeidsmiljø
 *
 * Kapittel 4.1–4.5
 *
 * LK20-kompetansemål:
 * - anvende motivasjonsteori for å forstå atferd i arbeidslivet
 * - beskrive lovkrav og tiltak for godt arbeidsmiljø
 * - drøfte tiltak for å fremme et godt psykososialt arbeidsmiljø
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Hva er motivasjon?
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_4_1: TextbookChapter = {
  id: 'okonomi-ledelse-4-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '4.1',
  title: 'Hva er motivasjon?',
  description: 'En innføring i motivasjonsbegrepet, forskjellen mellom indre og ytre motivasjon, og selvbestemmelsesteorien som rammeverk for å forstå hva som driver mennesker i arbeidslivet.',
  estimatedMinutes: 22,
  competenceGoals: ['anvende motivasjonsteori for å forstå atferd i arbeidslivet'],
  keyTerms: [],
  exercises: [],
  content: [
    {
      id: 'ol-4-1-intro',
      type: 'text',
      content: `## Hva driver oss til å yte?

Hvorfor gjør noen ansatte en ekstra innsats, mens andre bare gjør det nødvendige? Hvorfor trives noen i jobben sin, mens andre sliter med å finne mening? Svaret handler ofte om motivasjon.

For ledere er det avgjørende å forstå hva som motiverer medarbeidere. Motiverte ansatte presterer bedre, er mer kreative, har lavere sykefravær og blir lenger i jobben.

I dette kapittelet lærer du:
- Hva motivasjon er og hvorfor det er viktig i arbeidslivet
- Forskjellen mellom indre og ytre motivasjon
- Selvbestemmelsesteorien og dens tre grunnleggende behov`,
    },
    {
      id: 'ol-4-1-def-1',
      type: 'definition',
      title: 'Motivasjon',
      content: `**Motivasjon** er de indre og ytre kreftene som setter i gang, gir retning til og opprettholder atferd. Ordet kommer fra det latinske «movere», som betyr å bevege. Motivasjon handler altså om hva som beveger oss til å handle.`,
    },
    {
      id: 'ol-4-1-example-1',
      type: 'example',
      title: 'Eksempel: To medarbeidere med ulik motivasjon',
      content: `**Sara** jobber som grafisk designer. Hun elsker å være kreativ og fordype seg i prosjekter. Hun jobber ofte lenger enn nødvendig fordi hun synes oppgavene er spennende. Sara er drevet av **indre motivasjon**.

**Erik** jobber i samme avdeling. Han gjør en god jobb, men hovedårsaken er bonusordningen og mulighetene for forfremmelse. Han ser på arbeidet som et middel for å nå andre mål. Erik er drevet av **ytre motivasjon**.

Begge gjør en god jobb, men drivkreftene er forskjellige. Forskning viser at indre motivasjon ofte gir mer varig engasjement og høyere kvalitet over tid.`,
    },
    {
      id: 'ol-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det latinske ordet «movere», som motivasjon stammer fra?',
        options: [
          { id: 'a', text: 'Å tenke', isCorrect: false },
          { id: 'b', text: 'Å bevege', isCorrect: true },
          { id: 'c', text: 'Å arbeide', isCorrect: false },
          { id: 'd', text: 'Å belønne', isCorrect: false },
        ],
        solution: 'Motivasjon kommer fra det latinske «movere» som betyr å bevege. Motivasjon handler om hva som beveger oss til å handle.',
      },
    },
    {
      id: 'ol-4-1-text-1',
      type: 'text',
      content: `### Indre og ytre motivasjon

Motivasjonsforskere skiller mellom to hovedtyper motivasjon:

**Indre motivasjon** oppstår når vi gjør noe fordi aktiviteten i seg selv er interessant, givende eller meningsfull. Vi drives av nysgjerrighet, mestringsfølelse eller glede over selve oppgaven.

- Interesse for fagfeltet
- Glede ved å løse utfordringer
- Stolthet over godt håndverk
- Følelse av mening og formål

**Ytre motivasjon** oppstår når vi gjør noe for å oppnå en belønning eller unngå en straff. Drivkraften ligger utenfor selve aktiviteten.

- Lønn og bonus
- Forfremmelse og status
- Anerkjennelse fra andre
- Frykt for oppsigelse eller kritikk

Forskning viser at indre motivasjon som regel gir bedre resultater på lang sikt, særlig for oppgaver som krever kreativitet og problemløsning. Men ytre motivasjon kan være viktig for rutineoppgaver og for å sikre grunnleggende innsats.`,
    },
    {
      id: 'ol-4-1-def-2',
      type: 'definition',
      title: 'Selvbestemmelsesteorien (SDT)',
      content: `**Selvbestemmelsesteorien** er utviklet av psykologene Edward Deci og Richard Ryan. Teorien sier at mennesker har tre grunnleggende psykologiske behov som må tilfredsstilles for at vi skal oppleve indre motivasjon: **autonomi** (selvbestemmelse), **kompetanse** (mestring) og **tilhørighet** (sosiale relasjoner).`,
    },
    {
      id: 'ol-4-1-text-2',
      type: 'text',
      content: `### De tre behovene i selvbestemmelsesteorien

**1. Autonomi** – behovet for selvbestemmelse
- Å oppleve valgfrihet i hvordan man utfører arbeidet
- Å føle eierskap til beslutninger
- Eksempel: En ansatt som får velge arbeidsmetode selv

**2. Kompetanse** – behovet for mestring
- Å oppleve at man behersker oppgavene sine
- Å få passende utfordringer og tilbakemeldinger
- Eksempel: En selger som stadig utvikler ferdighetene sine

**3. Tilhørighet** – behovet for sosiale relasjoner
- Å føle seg som en del av et fellesskap
- Å oppleve støtte og respekt fra kolleger og leder
- Eksempel: Et team der alle føler seg inkludert

Når alle tre behovene er dekket, opplever ansatte høy grad av indre motivasjon. Hvis ett eller flere behov ikke tilfredsstilles, synker motivasjonen.`,
    },
    {
      id: 'ol-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Selvbestemmelsesteorien i praksis',
      problem: 'Bedriften TechStart ønsker å øke motivasjonen blant utviklerne sine. Hvordan kan de bruke selvbestemmelsesteorien?',
      solution: `**Autonomi:** Innfører fleksitid og lar utviklerne selv velge hvilke verktøy og metoder de bruker. De får også bruke 10 % av arbeidstiden på egne prosjekter.

**Kompetanse:** Tilbyr faglige kurs og konferanser. Setter opp mentorordning der erfarne utviklere veileder nye. Gir jevnlige tilbakemeldinger på arbeidet.

**Tilhørighet:** Organiserer ukentlige lunsjmøter og sosiale arrangementer. Innfører pararbeid (pair programming) som styrker samarbeid. Skaper en kultur der det er trygt å stille spørsmål.

**Resultat:** Etter seks måneder rapporterer utviklerne høyere trivsel, og turnover-raten faller fra 25 % til 10 %.`,
    },
    {
      id: 'ol-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke tre grunnleggende behov inngår i selvbestemmelsesteorien?',
        options: [
          { id: 'a', text: 'Lønn, status og trygghet', isCorrect: false },
          { id: 'b', text: 'Autonomi, kompetanse og tilhørighet', isCorrect: true },
          { id: 'c', text: 'Mat, søvn og sosialt samvær', isCorrect: false },
          { id: 'd', text: 'Frihet, likhet og rettferdighet', isCorrect: false },
        ],
        solution: 'Selvbestemmelsesteorien (Deci og Ryan) bygger på tre grunnleggende psykologiske behov: autonomi (selvbestemmelse), kompetanse (mestring) og tilhørighet (sosiale relasjoner).',
      },
    },
    {
      id: 'ol-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom indre og ytre motivasjon, og gi to eksempler på hver type fra arbeidslivet.',
        hints: ['Tenk på hva som driver handlingen – er det selve aktiviteten, eller noe man oppnår som resultat?'],
        solution: 'Indre motivasjon drives av selve aktiviteten – man gjør noe fordi det er interessant, meningsfullt eller givende i seg selv. Eksempler: En kokk som lager mat fordi hun elsker å skape nye retter, en lærer som brenner for å hjelpe elever forstå. Ytre motivasjon drives av belønninger eller konsekvenser utenfor selve aktiviteten. Eksempler: En selger som jobber hardt for å nå bonusmålet, en ansatt som møter tidlig for å unngå å bli irettesatt av sjefen.',
      },
    },
    {
      id: 'ol-4-1-warning-1',
      type: 'warning',
      title: 'Kan ytre belønning ødelegge indre motivasjon?',
      content: `Forskning viser at overdreven bruk av ytre belønninger kan undergrave indre motivasjon. Hvis en ansatt som allerede er indre motivert begynner å få bonus for arbeidet, kan personen over tid skifte fokus fra gleden ved oppgaven til belønningen. Dette kalles «undermineringseffekten» (the overjustification effect). Ledere bør derfor være bevisste på hvordan belønningssystemer utformes.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En leder opplever at flere ansatte gjør minimumsinnsats. Bruk selvbestemmelsesteorien til å analysere mulige årsaker og foreslå tiltak.',
        hints: ['Vurder om de tre behovene (autonomi, kompetanse, tilhørighet) er tilfredsstilt'],
        solution: 'Mulige årsaker analysert med SDT: Manglende autonomi – de ansatte opplever at de blir detaljstyrt og ikke har innflytelse over eget arbeid. Manglende kompetanse – oppgavene er enten for lette (kjedelig) eller for vanskelige (frustrerende), eller de får for lite tilbakemelding. Manglende tilhørighet – dårlig sosialt miljø, konflikter eller manglende inkludering. Tiltak: Gi mer selvbestemmelse i arbeidshverdagen, tilby opplæring og passende utfordringer, styrke teamfølelsen gjennom felles aktiviteter og åpen kommunikasjon. Det viktige er å identifisere hvilket behov som ikke er dekket, og sette inn målrettede tiltak.',
      },
    },
    {
      id: 'ol-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-4-1-ex-5',
        number: '4.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «undermineringseffekten»?',
        options: [
          { id: 'a', text: 'At ansatte med lav motivasjon smitter negativt på kolleger', isCorrect: false },
          { id: 'b', text: 'At ytre belønning kan svekke den indre motivasjonen over tid', isCorrect: true },
          { id: 'c', text: 'At for mange regler reduserer kreativiteten', isCorrect: false },
          { id: 'd', text: 'At dårlig ledelse fører til høy turnover', isCorrect: false },
        ],
        solution: 'Undermineringseffekten (overjustification effect) innebærer at overdreven bruk av ytre belønninger kan undergrave den indre motivasjonen. Fokuset flyttes fra gleden ved oppgaven til belønningen.',
      },
    },
    {
      id: 'ol-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Motivasjon** er de kreftene som setter i gang, gir retning til og opprettholder atferd
- **Indre motivasjon** drives av selve aktiviteten – interesse, mestring og mening
- **Ytre motivasjon** drives av belønninger eller konsekvenser utenfor aktiviteten
- **Selvbestemmelsesteorien** (Deci og Ryan) bygger på tre behov: autonomi, kompetanse og tilhørighet
- Overdreven bruk av ytre belønning kan svekke indre motivasjon (undermineringseffekten)

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Motivasjon | Krefter som driver og opprettholder atferd |
| Indre motivasjon | Drives av selve aktiviteten |
| Ytre motivasjon | Drives av belønning eller straff |
| Selvbestemmelsesteorien | Autonomi, kompetanse, tilhørighet |`,
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Maslows behovshierarki
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_4_2: TextbookChapter = {
  id: 'okonomi-ledelse-4-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '4.2',
  title: 'Maslows behovshierarki',
  description: 'Abraham Maslows behovspyramide med fem nivåer, hvordan modellen kan brukes til å forstå motivasjon i arbeidslivet, og viktige innvendinger mot teorien.',
  estimatedMinutes: 22,
  competenceGoals: ['anvende motivasjonsteori for å forstå atferd i arbeidslivet'],
  keyTerms: [],
  exercises: [],
  content: [
    {
      id: 'ol-4-2-intro',
      type: 'text',
      content: `## En pyramide av behov

Hva trenger mennesker for å trives og prestere? Den amerikanske psykologen Abraham Maslow presenterte i 1943 en teori om at menneskelige behov kan rangeres i et hierarki. Ifølge Maslow må grunnleggende behov være tilfredsstilt før vi motiveres av høyere behov.

Selv om teorien har blitt kritisert, er den fortsatt en av de mest brukte modellene for å forstå motivasjon i arbeidslivet.

I dette kapittelet lærer du:
- De fem behovsnivåene i Maslows hierarki
- Hvordan modellen kan anvendes i arbeidslivet
- Viktige innvendinger og kritikk av modellen`,
    },
    {
      id: 'ol-4-2-def-1',
      type: 'definition',
      title: 'Maslows behovshierarki',
      content: `**Maslows behovshierarki** er en motivasjonsteori som rangerer menneskelige behov i fem nivåer, fra grunnleggende fysiologiske behov til selvrealisering. Ifølge Maslow må behov på lavere nivåer i hovedsak være tilfredsstilt før behov på høyere nivåer blir motiverende.`,
    },
    {
      id: 'ol-4-2-text-1',
      type: 'text',
      content: `### De fem behovsnivåene

**Nivå 1: Fysiologiske behov** (nederst i pyramiden)
- Mat, vann, søvn, varme
- I arbeidslivet: Tilstrekkelig lønn til å dekke grunnleggende levekostnader, pauser, akseptable arbeidsforhold

**Nivå 2: Trygghetsbehov**
- Sikkerhet, stabilitet, forutsigbarhet
- I arbeidslivet: Fast ansettelse, pensjonsordning, forsikringer, trygge arbeidsforhold, klare rutiner

**Nivå 3: Sosiale behov**
- Tilhørighet, vennskap, kjærlighet
- I arbeidslivet: Godt arbeidsmiljø, kollegafellesskap, teamarbeid, inkludering, sosiale arrangementer

**Nivå 4: Behov for anerkjennelse**
- Respekt, status, selvtillit, mestring
- I arbeidslivet: Ros og tilbakemeldinger, ansvarsfulle oppgaver, titler, synlighet, forfremmelse

**Nivå 5: Selvrealisering** (øverst i pyramiden)
- Personlig vekst, realisering av potensial
- I arbeidslivet: Kreative utfordringer, faglig utvikling, autonomi, meningsfullt arbeid`,
    },
    {
      id: 'ol-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Maslows hierarki på en arbeidsplass',
      problem: 'Kari har nettopp begynt i sin første jobb etter utdanningen. Hvordan kan vi forstå motivasjonen hennes gjennom Maslows hierarki?',
      solution: `**De første månedene (nivå 1-2):** Kari er opptatt av å sikre inntekt til husleie og mat (fysiologiske behov). Hun er glad for fast ansettelse med prøvetid og lurer på om hun vil få forlenget kontrakt (trygghetsbehov).

**Etter et halvt år (nivå 3):** Kari føler seg økonomisk trygg. Nå blir det viktig å bli kjent med kollegene og føle seg som en del av teamet (sosiale behov). Hun setter pris på fredagsfrokosten og teamlunsjer.

**Etter et år (nivå 4):** Kari har fått gode venner på jobben. Nå ønsker hun tilbakemeldinger på arbeidet sitt og mer ansvar. Hun motiveres av ros fra lederen og at kollegene spør henne om råd (anerkjennelse).

**Etter to år (nivå 5):** Kari har fått anerkjennelse og lederansvar. Nå søker hun etter meningsfulle prosjekter der hun virkelig kan bruke kreativiteten sin og utvikle seg faglig (selvrealisering).`,
    },
    {
      id: 'ol-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket behovsnivå ligger øverst i Maslows pyramide?',
        options: [
          { id: 'a', text: 'Trygghetsbehov', isCorrect: false },
          { id: 'b', text: 'Sosiale behov', isCorrect: false },
          { id: 'c', text: 'Anerkjennelse', isCorrect: false },
          { id: 'd', text: 'Selvrealisering', isCorrect: true },
        ],
        solution: 'Selvrealisering ligger øverst i Maslows behovshierarki. Det handler om å realisere sitt potensial, oppnå personlig vekst og utfolde seg kreativt.',
      },
    },
    {
      id: 'ol-4-2-text-2',
      type: 'text',
      content: `### Kritikk av Maslows modell

Selv om Maslows behovshierarki er utbredt og intuitiv, har modellen blitt kritisert på flere punkter:

**1. Hierarkiet er ikke universelt**
- I noen kulturer er sosiale behov viktigere enn individuelle behov
- Kunstnere kan søke selvrealisering selv om de lever i fattigdom

**2. Behov er ikke så lineære**
- Mennesker kan motiveres av flere behovsnivåer samtidig
- Man trenger ikke fullt tilfredsstilte grunnbehov for å søke høyere behov

**3. Svakt forskningsgrunnlag**
- Maslow bygget teorien på observasjon av vellykkede personer, ikke systematisk forskning
- Vanskelig å teste vitenskapelig

**4. Individualistisk perspektiv**
- Reflekterer vestlige, individualistiske verdier
- Kollektivistiske kulturer vektlegger gruppeharmoni mer enn individuell selvrealisering

Til tross for kritikken er modellen nyttig som tankeverktøy for å forstå ulike behov på arbeidsplassen.`,
    },
    {
      id: 'ol-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Når behovene trues',
      content: `**Situasjon:** En bedrift varsler nedbemanning. Selv erfarne ledere som tidligere var opptatt av faglig utvikling og kreative prosjekter (nivå 4-5), retter nå fokuset mot jobbsikkerhet (nivå 2).

Dette viser et sentralt poeng i Maslows teori: Når behov på lavere nivåer trues, «faller» man ned i hierarkiet. Motivasjonen dreier seg fra vekst og utvikling til overlevelse og sikkerhet.

**Konsekvens for ledere:** Det nytter lite å tilby spennende utviklingsprosjekter dersom ansatte er bekymret for å miste jobben. Først må tryggheten gjenopprettes.`,
    },
    {
      id: 'ol-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi eksempler på hvordan en arbeidsgiver kan dekke behov på hvert av de fem nivåene i Maslows hierarki.',
        hints: ['Tenk på konkrete tiltak knyttet til lønn, sikkerhet, arbeidsmiljø, anerkjennelse og utviklingsmuligheter'],
        solution: 'Nivå 1 – Fysiologiske behov: Konkurransedyktig lønn, pauser, kantine. Nivå 2 – Trygghetsbehov: Fast ansettelse, pensjonsordning, HMS-rutiner, forutsigbare arbeidstider. Nivå 3 – Sosiale behov: Teambygging, sosiale arrangementer, åpent kontorlandskap, inkludering. Nivå 4 – Anerkjennelse: Tilbakemeldinger, synliggjøring av gode prestasjoner, forfremmelsesmuligheter, ansvar. Nivå 5 – Selvrealisering: Faglig utvikling, kreative prosjekter, autonomi, mulighet til å påvirke egen rolle.',
      },
    },
    {
      id: 'ol-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-4-2-ex-3',
        number: '4.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en viktig innvending mot Maslows behovshierarki?',
        options: [
          { id: 'a', text: 'Modellen inkluderer for mange behovsnivåer', isCorrect: false },
          { id: 'b', text: 'Behov er ikke nødvendigvis hierarkisk ordnet – mennesker kan motiveres av flere nivåer samtidig', isCorrect: true },
          { id: 'c', text: 'Modellen tar ikke hensyn til fysiologiske behov', isCorrect: false },
          { id: 'd', text: 'Modellen ble utviklet for barn og passer ikke for voksne', isCorrect: false },
        ],
        solution: 'En sentral kritikk er at behovene ikke nødvendigvis følger et strengt hierarki. Mennesker kan søke selvrealisering selv om trygghetsbehov ikke er fullt dekket, og man kan motiveres av flere behovsnivåer samtidig.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft styrker og svakheter ved Maslows behovshierarki som verktøy for ledere. Er modellen fortsatt relevant i dagens arbeidsliv?',
        hints: ['Vurder både modellens praktiske nytteverdi og dens vitenskapelige begrensninger'],
        solution: 'Styrker: Enkel og intuitiv modell som gir ledere et rammeverk for å forstå medarbeidernes behov. Den minner om at grunnleggende behov må dekkes før man kan forvente engasjement på høyere nivåer. Svakheter: Svakt empirisk grunnlag, for lineær (mennesker motiveres av flere nivåer samtidig), kulturelt betinget (vektlegger vestlige verdier). Fortsatt relevant fordi: Modellen fungerer som en sjekkliste – dekker vi de ansattes grunnleggende behov? Den er enkel å kommunisere og anvende i praksis. Men den bør suppleres med nyere motivasjonsteorier for et mer nyansert bilde.',
      },
    },
    {
      id: 'ol-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En nyansatt virker umotivert tross spennende arbeidsoppgaver. Bruk Maslows hierarki til å analysere hva som kan være årsaken.',
        solution: 'Ifølge Maslow må lavere behov være dekket før høyere behov motiverer. Selv om den nyansatte har spennende oppgaver (nivå 4-5), kan det hende at lavere behov ikke er tilfredsstilt. Mulige årsaker: Lønnen er for lav til å dekke utgifter (nivå 1), usikkerhet rundt prøvetid og om kontrakten forlenges (nivå 2), føler seg utenfor sosialt – har ikke blitt kjent med kollegene ennå (nivå 3). Lederen bør undersøke om grunnleggende behov er dekket før man forventer at den nyansatte motiveres av oppgavenes egenverdi.',
      },
    },
    {
      id: 'ol-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Maslows behovshierarki** rangerer behov i fem nivåer, fra fysiologiske behov til selvrealisering
- Lavere behov må i hovedsak dekkes før høyere behov motiverer
- Modellen kan brukes til å forstå hva ansatte trenger på ulike stadier i karrieren
- **Kritikk** inkluderer at hierarkiet er for rigid, kulturelt betinget og har svakt forskningsgrunnlag
- Modellen er likevel nyttig som et praktisk tankeverktøy for ledere

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Behovshierarki | Rangering av behov fra grunnleggende til høyere |
| Fysiologiske behov | Mat, vann, søvn – grunnleggende overlevelse |
| Trygghetsbehov | Sikkerhet, stabilitet, forutsigbarhet |
| Selvrealisering | Realisere sitt potensial og utvikle seg |`,
    },
  ],
};

// ============================================================================
// Kapittel 4.3: Herzbergs tofaktorteori
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_4_3: TextbookChapter = {
  id: 'okonomi-ledelse-4-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '4.3',
  title: 'Herzbergs tofaktorteori',
  description: 'Frederick Herzbergs skille mellom motivasjonsfaktorer og hygienefaktorer, og hvordan teorien brukes til jobbdesign og jobbberikelse for å øke trivsel og motivasjon.',
  estimatedMinutes: 24,
  competenceGoals: ['anvende motivasjonsteori for å forstå atferd i arbeidslivet'],
  keyTerms: [],
  exercises: [],
  content: [
    {
      id: 'ol-4-3-intro',
      type: 'text',
      content: `## To sider av trivsel

Hva gjør ansatte fornøyde – og hva gjør dem misfornøyde? De fleste antar at det er to ender av samme skala: jo mer fornøyd, desto mindre misfornøyd. Men den amerikanske psykologen Frederick Herzberg kom i 1959 til en overraskende konklusjon: Fornøydhet og misnøye på jobben styres av helt ulike faktorer.

I dette kapittelet lærer du:
- Forskjellen mellom motivasjonsfaktorer og hygienefaktorer
- Hvorfor god lønn ikke nødvendigvis gir motivasjon
- Jobbberikelse som verktøy for å øke motivasjon`,
    },
    {
      id: 'ol-4-3-def-1',
      type: 'definition',
      title: 'Herzbergs tofaktorteori',
      content: `**Herzbergs tofaktorteori** skiller mellom to typer faktorer i arbeidslivet: **Motivasjonsfaktorer** kan skape trivsel og motivasjon når de er til stede, men skaper ikke nødvendigvis misnøye når de mangler. **Hygienefaktorer** kan forhindre misnøye, men skaper ikke motivasjon selv om de er gode. Tilfredshet og utilfredshet er altså ikke motpoler, men to separate dimensjoner.`,
    },
    {
      id: 'ol-4-3-text-1',
      type: 'text',
      content: `### Motivasjonsfaktorer (tilfredsstillelsesfaktorer)

Disse faktorene er knyttet til **selve arbeidet** og kan skape ekte jobbtilfredshet:

- **Prestasjoner** – å fullføre oppgaver og nå mål
- **Anerkjennelse** – å bli sett og verdsatt for arbeidet
- **Arbeidsoppgavene i seg selv** – interessante og meningsfulle oppgaver
- **Ansvar** – å ha tillit og myndighet
- **Vekst og utvikling** – læringsmuligheter og karriereutvikling
- **Forfremmelse** – å avansere i organisasjonen

Motivasjonsfaktorene handler om hva du **gjør** på jobben. Når de er til stede, opplever ansatte genuin motivasjon og engasjement.`,
    },
    {
      id: 'ol-4-3-text-2',
      type: 'text',
      content: `### Hygienefaktorer (vedlikeholdsfaktorer)

Disse faktorene er knyttet til **arbeidsomgivelsene** og kan forhindre misnøye:

- **Lønn** – rettferdig og tilstrekkelig betaling
- **Arbeidsforhold** – fysisk arbeidsmiljø, utstyr, fasiliteter
- **Bedriftspolitikk** – regler, prosedyrer, administrasjon
- **Ledelse** – forholdet til nærmeste leder
- **Mellommenneskelige forhold** – relasjon til kolleger
- **Jobbsikkerhet** – trygghet for å beholde jobben
- **Status** – tittel, kontor, firmabil

Hygienefaktorene handler om **rammene** rundt jobben. De er som hygiene – nødvendig for å unngå problemer, men ikke nok til å skape helse (motivasjon).`,
    },
    {
      id: 'ol-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Lønn som hygienefaktor',
      content: `**Situasjon:** Et IT-selskap sliter med lav motivasjon blant utviklerne. Ledelsen gir alle 15 % lønnsøkning.

**Etter en måned:** Stemningen er bedre, de ansatte er fornøyde med lønnsøkningen.

**Etter tre måneder:** Den nye lønnen oppleves som «det normale». Motivasjonen er tilbake der den var. De underliggende problemene – kjedelige oppgaver, ingen utviklingsmuligheter, mangel på anerkjennelse – er ikke løst.

**Herzbergs forklaring:** Lønn er en hygienefaktor. Dårlig lønn skaper misnøye, men god lønn skaper ikke varig motivasjon. For å øke motivasjonen måtte ledelsen i tillegg forbedre motivasjonsfaktorene: gi mer interessante prosjekter, anerkjenne gode prestasjoner og tilby faglig utvikling.`,
    },
    {
      id: 'ol-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge Herzbergs tofaktorteori – hva er lønn et eksempel på?',
        options: [
          { id: 'a', text: 'En motivasjonsfaktor', isCorrect: false },
          { id: 'b', text: 'En hygienefaktor', isCorrect: true },
          { id: 'c', text: 'En selvrealiseringsfaktor', isCorrect: false },
          { id: 'd', text: 'En sosial faktor', isCorrect: false },
        ],
        solution: 'Lønn er ifølge Herzberg en hygienefaktor. Dårlig lønn kan skape misnøye, men god lønn i seg selv skaper ikke varig motivasjon. Motivasjon kommer fra faktorer knyttet til selve arbeidet.',
      },
    },
    {
      id: 'ol-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke av følgende er motivasjonsfaktorer ifølge Herzberg?',
        options: [
          { id: 'a', text: 'Lønn, jobbsikkerhet og gode arbeidsforhold', isCorrect: false },
          { id: 'b', text: 'Prestasjoner, anerkjennelse og ansvar', isCorrect: true },
          { id: 'c', text: 'Ledelse, status og bedriftspolitikk', isCorrect: false },
          { id: 'd', text: 'Kollegaforhold, firmabil og kontorplass', isCorrect: false },
        ],
        solution: 'Motivasjonsfaktorer er knyttet til selve arbeidet: prestasjoner, anerkjennelse, interessante oppgaver, ansvar og vekstmuligheter. De andre alternativene inneholder hygienefaktorer.',
      },
    },
    {
      id: 'ol-4-3-def-2',
      type: 'definition',
      title: 'Jobbberikelse',
      content: `**Jobbberikelse** (job enrichment) innebærer å gjøre jobben mer meningsfull ved å tilføre motivasjonsfaktorer. Dette kan skje gjennom økt ansvar, mer varierte oppgaver, større autonomi, tydeligere tilbakemelding og mulighet for faglig vekst. Jobbberikelse skiller seg fra jobb**utvidelse** (job enlargement), som bare handler om å gi flere oppgaver av samme type.`,
    },
    {
      id: 'ol-4-3-text-3',
      type: 'text',
      content: `### Jobbberikelse i praksis

Herzbergs teori har fått stor innflytelse på hvordan jobber designes. Her er fem prinsipper for jobbberikelse:

**1. Fjern unødvendig kontroll** – gi ansatte mer frihet til å bestemme selv
**2. Øk personlig ansvar** – la den ansatte «eie» resultatet
**3. Gi komplette oppgaver** – la folk se sluttresultatet av arbeidet sitt
**4. Gi direkte tilbakemelding** – la den ansatte selv se om arbeidet er godt
**5. Tilby nye utfordringer** – gradvis øke vanskelighetsgrad og læringsmuligheter

Eksempel: En kundeservicemedarbeider som bare svarer telefon (jobb**utvidelse** ville være å også svare e-post). Jobb**berikelse** betyr at vedkommende får ansvar for å følge opp kunden helt til problemet er løst, kan ta beslutninger om kompensasjon, og får tilbakemelding på kundetilfredshet.`,
    },
    {
      id: 'ol-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Jobbberikelse vs. jobbutvidelse',
      problem: 'En lagerarbeider opplever at jobben er monoton. Lederen vurderer to alternativer for å gjøre jobben bedre.',
      solution: `**Alternativ A: Jobbutvidelse (job enlargement)**
Lagerarbeideren får flere oppgaver av lignende type – i tillegg til å pakke ordrer, skal vedkommende også sortere returvarer og telle varelager. Flere oppgaver, men ikke nødvendigvis mer meningsfullt.

**Alternativ B: Jobbberikelse (job enrichment)**
Lagerarbeideren får ansvar for å optimalisere lagerlogistikken i sin sone. Vedkommende kan foreslå forbedringer, får opplæring i lagerstyringssystemet, og deltar i ukentlige møter med innkjøpsavdelingen. Tilbakemelding gis gjennom data om leveringspresisjon.

**Herzbergs perspektiv:** Alternativ B er langt mer motiverende fordi det tilfører motivasjonsfaktorer: ansvar, læring, anerkjennelse og meningsfullt arbeid. Alternativ A gir bare mer av det samme.`,
    },
    {
      id: 'ol-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom jobbberikelse og jobbutvidelse. Gi et eget eksempel på hver.',
        hints: ['Tenk på om oppgavene gir mer ansvar og mening, eller bare mer av det samme'],
        solution: 'Jobbutvidelse (job enlargement) betyr å gi flere oppgaver av samme type og nivå – bredere, men ikke dypere. Eksempel: En kassaoperatør som også må rydde i hyllene. Jobbberikelse (job enrichment) betyr å tilføre motivasjonsfaktorer som ansvar, autonomi og læringsmuligheter – dypere og mer meningsfullt. Eksempel: Kassaoperatøren får ansvar for å lære opp nye ansatte, delta i planlegging av kampanjer og gi innspill til sortiment basert på kundeobservasjoner.',
      },
    },
    {
      id: 'ol-4-3-tip-1',
      type: 'tip',
      title: 'Herzberg og Maslow – en sammenheng',
      content: `Herzbergs hygienefaktorer tilsvarer i stor grad de lavere behovene hos Maslow (fysiologiske behov, trygghet og sosiale behov), mens motivasjonsfaktorene tilsvarer de øvre nivåene (anerkjennelse og selvrealisering). Begge teoriene peker mot at ekte motivasjon kommer fra opplevelse av mening, mestring og vekst – ikke bare fra ytre forhold.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En butikkjede opplever høy turnover blant sine butikkansatte. Medarbeiderundersøkelsen viser at de ansatte er misfornøyde med lønn og arbeidsforhold, men at de som blir, sier at arbeidsoppgavene er kjedelige og at de savner utviklingsmuligheter. Bruk Herzbergs teori til å analysere situasjonen og foreslå tiltak.',
        hints: ['Identifiser hvilke problemer som er knyttet til hygienefaktorer og hvilke som er knyttet til motivasjonsfaktorer'],
        solution: 'Analyse med Herzberg: Misnøyen med lønn og arbeidsforhold er knyttet til hygienefaktorer. Disse må forbedres for å redusere misnøye og stoppe turnover. Men dette alene vil ikke skape motivasjon. At oppgavene oppleves som kjedelige og at det mangler utviklingsmuligheter, peker på fravær av motivasjonsfaktorer. Tiltak: Først: Forbedre hygienefaktorene – juster lønn til markedsnivå og oppgrader arbeidsforhold (temperatur, utstyr, pauser). Deretter: Tilføre motivasjonsfaktorer gjennom jobbberikelse – gi ansatte ansvar for egne områder i butikken, innføre opplæringsprogram, gi mulighet for spesialisering, anerkjenne gode prestasjoner. Begge typer tiltak er nødvendige for å redusere turnover og øke motivasjonen.',
      },
    },
    {
      id: 'ol-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Klassifiser følgende faktorer som enten motivasjonsfaktor eller hygienefaktor ifølge Herzberg:',
        subTasks: [
          {
            label: 'a',
            task: 'Mulighet for forfremmelse',
            solution: 'Motivasjonsfaktor – knyttet til vekst og utvikling i selve arbeidet.',
          },
          {
            label: 'b',
            task: 'Firmabil',
            solution: 'Hygienefaktor – knyttet til status og arbeidsforhold, ikke selve arbeidet.',
          },
          {
            label: 'c',
            task: 'Anerkjennelse fra leder for godt utført prosjekt',
            solution: 'Motivasjonsfaktor – direkte tilbakemelding på prestasjon.',
          },
          {
            label: 'd',
            task: 'Godt ventilert kontor',
            solution: 'Hygienefaktor – knyttet til fysiske arbeidsforhold.',
          },
        ],
        solution: 'Motivasjonsfaktorer er knyttet til selve arbeidet (prestasjoner, anerkjennelse, ansvar, vekst), mens hygienefaktorer er knyttet til omgivelsene rundt arbeidet (lønn, arbeidsforhold, status, relasjoner).',
      },
    },
    {
      id: 'ol-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-4-3-ex-6',
        number: '4.3.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedforskjellen mellom jobbberikelse og jobbutvidelse?',
        options: [
          { id: 'a', text: 'Jobbberikelse gir færre oppgaver, jobbutvidelse gir flere', isCorrect: false },
          { id: 'b', text: 'Jobbberikelse tilfører ansvar og mening, jobbutvidelse gir flere oppgaver av samme type', isCorrect: true },
          { id: 'c', text: 'De betyr det samme, bare med ulike navn', isCorrect: false },
          { id: 'd', text: 'Jobbutvidelse er for ledere, jobbberikelse er for vanlige ansatte', isCorrect: false },
        ],
        solution: 'Jobbberikelse (enrichment) gjør jobben dypere ved å tilføre motivasjonsfaktorer som ansvar, autonomi og læring. Jobbutvidelse (enlargement) gjør jobben bredere ved å legge til flere oppgaver av lignende art og vanskelighetsgrad.',
      },
    },
    {
      id: 'ol-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Herzbergs tofaktorteori** skiller mellom motivasjonsfaktorer og hygienefaktorer
- **Motivasjonsfaktorer** (prestasjoner, anerkjennelse, ansvar, vekst) skaper ekte jobbtilfredshet
- **Hygienefaktorer** (lønn, arbeidsforhold, ledelse, jobbsikkerhet) forhindrer misnøye, men skaper ikke motivasjon
- **Jobbberikelse** tilfører motivasjonsfaktorer gjennom ansvar, autonomi og læringsmuligheter
- **Jobbutvidelse** gir bare flere oppgaver av samme type og er mindre motiverende

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Motivasjonsfaktorer | Faktorer som skaper ekte jobbtilfredshet |
| Hygienefaktorer | Faktorer som forhindrer misnøye |
| Jobbberikelse | Tilføre ansvar, mening og utviklingsmuligheter |
| Jobbutvidelse | Gi flere oppgaver av samme type |`,
    },
  ],
};

// ============================================================================
// Kapittel 4.4: Arbeidsmiljø og trivsel
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_4_4: TextbookChapter = {
  id: 'okonomi-ledelse-4-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '4.4',
  title: 'Arbeidsmiljø og trivsel',
  description: 'Det fysiske arbeidsmiljøet, ergonomi, arbeidsmiljøloven og systematisk HMS-arbeid som grunnlag for trivsel og produktivitet på arbeidsplassen.',
  estimatedMinutes: 22,
  competenceGoals: ['beskrive lovkrav og tiltak for godt arbeidsmiljø'],
  keyTerms: [],
  exercises: [],
  content: [
    {
      id: 'ol-4-4-intro',
      type: 'text',
      content: `## Rammene rundt arbeidet

Et godt arbeidsmiljø er ikke tilfeldig – det er et resultat av bevisst arbeid og lovpålagte krav. Norske arbeidstakere har sterkt vern gjennom arbeidsmiljøloven, og alle virksomheter er pålagt å jobbe systematisk med helse, miljø og sikkerhet (HMS).

I dette kapittelet lærer du:
- Hva fysisk arbeidsmiljø omfatter
- Grunnleggende ergonomi
- Sentrale bestemmelser i arbeidsmiljøloven
- Systematisk HMS-arbeid i praksis`,
    },
    {
      id: 'ol-4-4-def-1',
      type: 'definition',
      title: 'Arbeidsmiljø',
      content: `**Arbeidsmiljø** er en samlebetegnelse for alle fysiske, psykiske, sosiale og organisatoriske forhold som påvirker arbeidstakernes helse, trivsel og yteevne. Det fysiske arbeidsmiljøet omfatter faktorer som støy, belysning, temperatur, luft, ergonomi og sikkerhet. Et godt arbeidsmiljø er en forutsetning for trivsel, produktivitet og god helse.`,
    },
    {
      id: 'ol-4-4-text-1',
      type: 'text',
      content: `### Det fysiske arbeidsmiljøet

**Inneklima og luftkvalitet**
- God ventilasjon og tilstrekkelig friskluft
- Riktig temperatur (anbefalt 20–22 °C for kontorarbeid)
- Kontroll med støv, kjemikalier og allergener

**Belysning**
- Tilstrekkelig lys tilpasset arbeidsoppgavene
- Unngå blending og reflekser
- Dagslys der det er mulig

**Støy**
- Grenseverdier for støynivå (85 dB som øvre grense for varig eksponering)
- Støyreduserende tiltak: vegger, hodetelefoner, rolige soner
- Særlig viktig i åpne kontorlandskap og produksjonslokaler

**Temperatur**
- For varmt eller for kaldt reduserer konsentrasjon og trivsel
- Tilpasset arbeidstype (kontorarbeid vs. fysisk arbeid)

**Sikkerhet**
- Merking av nødutganger og rømningsveier
- Brannslukningsutstyr og førstehjelpsutstyr
- Verneutstyr tilpasset arbeidsoppgavene`,
    },
    {
      id: 'ol-4-4-def-2',
      type: 'definition',
      title: 'Ergonomi',
      content: `**Ergonomi** er læren om å tilpasse arbeidsplassen, verktøyene og arbeidsoppgavene til menneskets fysiske og psykiske forutsetninger. Målet er å forebygge belastningsskader, øke komfort og forbedre effektivitet. God ergonomi reduserer muskel- og skjelettplager, som er den vanligste årsaken til sykefravær i Norge.`,
    },
    {
      id: 'ol-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Ergonomi ved kontorarbeid',
      content: `**Riktig oppsett av kontorarbeidsplass:**

- **Stol:** Regulerbar høyde, god korsryggstøtte, begge føtter i gulvet
- **Skjerm:** Øverste del av skjermen i øyehøyde, ca. 50–70 cm avstand
- **Tastatur og mus:** Underarmer vannrett, skuldre avslappet
- **Bord:** Regulerbar høyde, mulighet for å stå innimellom
- **Pauser:** Korte pauser med bevegelse hvert 30.–60. minutt

**Vanlige feil:**
- Skjermen for lavt (bøyer nakken ned)
- Sitter for lenge uten pauser
- Stolen ikke tilpasset kroppen
- Musearmen strukket for langt ut

Muskel- og skjelettplager er den hyppigste årsaken til sykefravær i Norge og koster samfunnet milliarder hvert år. God ergonomi er en rimelig investering som gir stor gevinst.`,
    },
    {
      id: 'ol-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er ergonomi?',
        options: [
          { id: 'a', text: 'Studiet av arbeidsrett og arbeidsmiljølov', isCorrect: false },
          { id: 'b', text: 'Læren om å tilpasse arbeidsplassen til menneskets forutsetninger', isCorrect: true },
          { id: 'c', text: 'En metode for å øke produktiviteten gjennom strengere kontroll', isCorrect: false },
          { id: 'd', text: 'Et system for å registrere sykefravær', isCorrect: false },
        ],
        solution: 'Ergonomi er læren om å tilpasse arbeidsplassen, verktøy og oppgaver til menneskets fysiske og psykiske forutsetninger, for å forebygge belastningsskader og øke komfort.',
      },
    },
    {
      id: 'ol-4-4-text-2',
      type: 'text',
      content: `### Arbeidsmiljøloven (AML)

Arbeidsmiljøloven er den viktigste loven for vern av arbeidstakere i Norge. Den gjelder for nesten alle virksomheter og har som formål å sikre:

**Lovens hovedprinsipper:**
- Et arbeidsmiljø som gir full trygghet mot fysiske og psykiske skadevirkninger
- Trygge ansettelsesforhold og meningsfylt arbeid
- Likebehandling i arbeidslivet
- Tilpasning til den enkeltes forutsetninger

**Viktige bestemmelser:**
- **Arbeidstid:** Maks 9 timer per dag, 40 timer per uke (ofte 37,5 i tariffavtaler)
- **Overtid:** Begrenset til 10 timer per uke, 25 timer per måned, 200 timer per år
- **Pauser:** Minst 30 minutter pause ved mer enn 5,5 timers arbeid
- **Nattarbeid og søndagsarbeid:** Strenge regler og begrensninger
- **Verneombud:** Påbudt i alle virksomheter med minst 5 ansatte
- **Arbeidsmiljøutvalg (AMU):** Påbudt ved 50 eller flere ansatte`,
    },
    {
      id: 'ol-4-4-example-2',
      type: 'example',
      title: 'Eksempel: HMS i praksis',
      problem: 'Hvordan kan en mellomstor bedrift med 30 ansatte jobbe systematisk med HMS?',
      solution: `**Organisering:**
- Daglig leder har overordnet ansvar for HMS
- Et verneombud er valgt blant de ansatte
- HMS-ansvarlig koordinerer det daglige arbeidet
- Bedriftshelsetjeneste er tilknyttet

**Årlig HMS-plan:**
- Vernerunder hvert kvartal (sjekke fysiske forhold)
- Medarbeidersamtaler to ganger i året
- Risikovurdering ved endringer i arbeidsprosesser
- Brannøvelse minst en gang per år
- Førstehjelpskurs for alle ansatte hvert andre år

**Dokumentasjon:**
- HMS-håndbok tilgjengelig for alle
- Avviksregistrering ved ulykker og nesten-ulykker
- Sykefraværsstatistikk og oppfølging
- Referat fra AMU-møter og vernerunder

**Kontinuerlig forbedring:**
- Analysere avvik og sette inn tiltak
- Oppdatere risikovurderinger
- Evaluere og justere HMS-planen årlig`,
    },
    {
      id: 'ol-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ifølge arbeidsmiljøloven – hva er maksimal ordinær arbeidstid per uke?',
        options: [
          { id: 'a', text: '35 timer', isCorrect: false },
          { id: 'b', text: '37,5 timer', isCorrect: false },
          { id: 'c', text: '40 timer', isCorrect: true },
          { id: 'd', text: '45 timer', isCorrect: false },
        ],
        solution: 'Arbeidsmiljøloven setter maksimal ordinær arbeidstid til 40 timer per uke. Mange tariffavtaler har lavere grense, typisk 37,5 timer, men 40 timer er lovens hovedregel.',
      },
    },
    {
      id: 'ol-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er et verneombud, og når er det påbudt?',
        hints: ['Verneombudet er de ansattes representant i HMS-arbeidet'],
        solution: 'Et verneombud er en representant for de ansatte som skal ivareta arbeidstakernes interesser i saker som angår arbeidsmiljøet. Verneombudet skal påse at arbeidet utføres på en forsvarlig måte, og kan stanse farlig arbeid. Det er påbudt med verneombud i alle virksomheter med minst 5 ansatte. Verneombudet velges blant de ansatte, vanligvis for en periode på to år.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er nytilsatt HMS-ansvarlig i en bedrift med 40 ansatte. Lag en oversikt over de viktigste tiltakene du vil gjennomføre det første året.',
        hints: ['Tenk på lovpålagte krav, risikovurdering, opplæring og dokumentasjon'],
        solution: 'De viktigste tiltakene det første året: 1) Kartlegging: Gjennomføre vernerunde for å vurdere fysisk arbeidsmiljø, gjennomføre arbeidsmiljøundersøkelse blant ansatte, identifisere risikoområder. 2) Organisering: Sikre at verneombud er valgt og opplært, vurdere behov for arbeidsmiljøutvalg (påbudt ved 50 ansatte, anbefalt ved 40), knytte til bedriftshelsetjeneste. 3) Dokumentasjon: Utarbeide HMS-håndbok, etablere system for avviksregistrering, lage oversikt over lover og forskrifter som gjelder bedriften. 4) Opplæring: Brannøvelse, førstehjelpskurs, opplæring i ergonomi, opplæring i farlig arbeid (der aktuelt). 5) Systematikk: Lage årshjul for HMS-aktiviteter, innføre jevnlige vernerunder, etablere rutiner for oppfølging av sykefravær.',
      },
    },
    {
      id: 'ol-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-4-4-ex-5',
        number: '4.4.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den vanligste årsaken til sykefravær i Norge?',
        options: [
          { id: 'a', text: 'Psykiske lidelser', isCorrect: false },
          { id: 'b', text: 'Muskel- og skjelettplager', isCorrect: true },
          { id: 'c', text: 'Forkjølelse og influensa', isCorrect: false },
          { id: 'd', text: 'Arbeidsulykker', isCorrect: false },
        ],
        solution: 'Muskel- og skjelettplager er den hyppigste årsaken til sykefravær i Norge. God ergonomi og tilrettelegging av arbeidsplassen er viktige forebyggende tiltak.',
      },
    },
    {
      id: 'ol-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fysisk arbeidsmiljø** omfatter inneklima, belysning, støy, temperatur og sikkerhet
- **Ergonomi** handler om å tilpasse arbeidsplassen til menneskets forutsetninger
- **Arbeidsmiljøloven** setter rammer for arbeidstid, HMS og arbeidstakervern
- **Verneombud** er påbudt i virksomheter med minst 5 ansatte
- **Systematisk HMS-arbeid** omfatter kartlegging, risikovurdering, tiltak og dokumentasjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ergonomi | Tilpasse arbeidsplassen til mennesket |
| Arbeidsmiljøloven | Hovedlov for arbeidstakervern |
| Verneombud | Ansattes representant i HMS-saker |
| HMS | Helse, miljø og sikkerhet |`,
    },
  ],
};

// ============================================================================
// Kapittel 4.5: Psykososialt arbeidsmiljø
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_4_5: TextbookChapter = {
  id: 'okonomi-ledelse-4-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '4.5',
  title: 'Psykososialt arbeidsmiljø',
  description: 'Sosiale relasjoner på arbeidsplassen, forebygging av mobbing og trakassering, håndtering av stress og utbrenthet, og tiltak for et godt psykososialt arbeidsmiljø.',
  estimatedMinutes: 24,
  competenceGoals: ['drøfte tiltak for å fremme et godt psykososialt arbeidsmiljø'],
  keyTerms: [],
  exercises: [],
  content: [
    {
      id: 'ol-4-5-intro',
      type: 'text',
      content: `## Den usynlige delen av arbeidsmiljøet

Mens fysisk arbeidsmiljø handler om støy, lys og ergonomi, handler det psykososiale arbeidsmiljøet om hvordan vi har det med hverandre og med oppgavene våre. Det er den «usynlige» delen av arbeidsmiljøet – men den påvirker helse, trivsel og produktivitet minst like mye som den fysiske.

I denne delen av arbeidslivet ser vi noen av de største utfordringene i dagens Norge: stress, utbrenthet, mobbing og konflikter.

I dette kapittelet lærer du:
- Hva psykososialt arbeidsmiljø omfatter
- Forebygging og håndtering av mobbing og trakassering
- Stress og utbrenthet – årsaker og forebygging
- Konkrete tiltak for et godt psykososialt arbeidsmiljø`,
    },
    {
      id: 'ol-4-5-def-1',
      type: 'definition',
      title: 'Psykososialt arbeidsmiljø',
      content: `**Psykososialt arbeidsmiljø** handler om de psykologiske og sosiale forholdene på arbeidsplassen – hvordan arbeidet er organisert, innholdet i arbeidet, samspillet mellom mennesker og forholdet til ledelsen. Et godt psykososialt arbeidsmiljø kjennetegnes av tillit, respekt, støtte, meningsfylte oppgaver og rimelige krav.`,
    },
    {
      id: 'ol-4-5-text-1',
      type: 'text',
      content: `### Faktorer som påvirker det psykososiale arbeidsmiljøet

**Positive faktorer (fremmende):**
- Støttende og rettferdig ledelse
- Gode kollegarelasjoner og samarbeid
- Balanse mellom krav og ressurser
- Medvirkning og innflytelse på eget arbeid
- Klare forventninger og roller
- Tilbakemelding og anerkjennelse
- Opplevelse av mening i arbeidet

**Negative faktorer (hemmende):**
- Uklare roller og motstridende forventninger
- For høye krav over tid, uten tilstrekkelige ressurser
- Manglende støtte fra leder og kolleger
- Konflikter som ikke håndteres
- Mobbing, trakassering og diskriminering
- Sosial isolasjon og utestengelse
- Urettferdig behandling`,
    },
    {
      id: 'ol-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Krav-ressurs-modellen',
      content: `**Krav-ressurs-modellen** er et nyttig verktøy for å forstå psykososialt arbeidsmiljø:

**Krav:** Det som krever innsats – tidspress, arbeidsmengde, emosjonelle belastninger, kompleksitet.

**Ressurser:** Det som hjelper deg å håndtere kravene – kompetanse, støtte fra kolleger, autonomi, tilbakemelding, utstyr.

**Balanse:** Når ressursene matcher kravene, opplever ansatte mestring og engasjement.

**Ubalanse:** Når kravene overskrider ressursene over tid, oppstår stress og helseproblemer.

**Eksempel:** En sykepleier (høye krav: ansvar for pasienter, tidspress, emosjonelle belastninger) som har gode kolleger, støttende leder og nok bemanning (ressurser) kan oppleve jobben som krevende, men meningsfull. Dersom bemanningen kuttes, forsvinner viktige ressurser, og de samme kravene blir uhåndterbare.`,
    },
    {
      id: 'ol-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva handler det psykososiale arbeidsmiljøet om?',
        options: [
          { id: 'a', text: 'Belysning, støy og temperatur på arbeidsplassen', isCorrect: false },
          { id: 'b', text: 'Bedriftens økonomiske resultater', isCorrect: false },
          { id: 'c', text: 'Psykologiske og sosiale forhold – samspill mellom mennesker og organisering av arbeidet', isCorrect: true },
          { id: 'd', text: 'Fysisk sikkerhet og verneutstyr', isCorrect: false },
        ],
        solution: 'Det psykososiale arbeidsmiljøet handler om de psykologiske og sosiale forholdene – hvordan arbeidet er organisert, samspillet mellom mennesker, forholdet til ledelse og opplevelsen av arbeidet.',
      },
    },
    {
      id: 'ol-4-5-text-2',
      type: 'text',
      content: `### Mobbing og trakassering

**Definisjon:** Mobbing på arbeidsplassen er gjentatte negative handlinger over tid rettet mot en eller flere personer, der den som utsettes har vanskelig for å forsvare seg. Det kan være en leder som mobber en ansatt, kolleger som fryser noen ut, eller systematisk nedvurdering av arbeidet.

**Former for mobbing:**
- Sosial utestenging – ikke invitert til møter, lunsjpauser eller sosiale arrangementer
- Baksnakking og ryktespredning
- Urimelig kritikk eller latterliggjøring
- Underkjennelse av arbeid og kompetanse
- Tilbakeholding av informasjon
- Uønsket seksuell oppmerksomhet

**Konsekvenser:**
- For den som mobbes: Angst, depresjon, søvnproblemer, sykefravær, tap av selvtillit
- For arbeidsmiljøet: Dårlig stemning, økt sykefravær, lav produktivitet, høy turnover
- For bedriften: Tap av kompetanse, dårlig omdømme, potensielt rettslige konsekvenser

**Arbeidsgivers ansvar:**
Arbeidsmiljøloven er tydelig: Arbeidstaker skal ikke utsettes for trakassering eller annen utilbørlig opptreden. Arbeidsgiver har plikt til å forebygge og håndtere mobbing.`,
    },
    {
      id: 'ol-4-5-def-2',
      type: 'definition',
      title: 'Stress og utbrenthet',
      content: `**Stress** er kroppens reaksjon på krav som overskrider det man opplever å ha ressurser til å håndtere. Kortvarig stress kan være nyttig og mobiliserende, men langvarig stress er helseskadelig. **Utbrenthet** (burnout) er en tilstand av kronisk utmattelse som følge av langvarig jobbstress. Det kjennetegnes av emosjonell utmattelse, kynisme eller distansering fra arbeidet, og redusert opplevelse av personlig mestring.`,
    },
    {
      id: 'ol-4-5-text-3',
      type: 'text',
      content: `### Tegn på stress og utbrenthet

**Tidlige varselsignaler:**
- Konsentrasjonsvansker og glemsomhet
- Irritabilitet og kort lunte
- Søvnproblemer
- Økt sykefravær (korte fravær)
- Tilbaketrekking fra sosiale situasjoner

**Alvorligere tegn:**
- Kronisk tretthet som ikke bedres av hvile
- Følelse av meningsløshet og kynisme
- Fysiske plager: hodepine, muskelsmerter, mageproblemer
- Angst og depressive symptomer
- Økt bruk av alkohol eller medikamenter

**Forebygging på arbeidsplassen:**
- Realistisk arbeidsmengde og klare prioriteringer
- Mulighet for pauser og restitusjon
- Støttende ledelse som ser den enkelte
- Kompetanseutvikling og mestringsfølelse
- Balanse mellom arbeid og fritid
- Tidlig intervensjon ved tegn på stress`,
    },
    {
      id: 'ol-4-5-example-2',
      type: 'example',
      title: 'Eksempel: Tiltak for godt psykososialt arbeidsmiljø',
      problem: 'En avdeling med 15 ansatte har hatt økende sykefravær og flere konflikter. Lederen ønsker å forbedre det psykososiale arbeidsmiljøet. Hva kan gjøres?',
      solution: `**Kartlegging:**
- Gjennomføre anonym arbeidsmiljøundersøkelse
- Ha individuelle samtaler med alle ansatte
- Observere samarbeid og kommunikasjon i hverdagen

**Umiddelbare tiltak:**
- Ta tak i kjente konflikter med mekling eller samtaler
- Innføre faste avdelingsmøter med åpen dialog
- Klargjøre roller, ansvarsområder og forventninger

**Langsiktige tiltak:**
- Lederutvikling – trene lederen i støttende ledelse og konflikthåndtering
- Teamutvikling – felles aktiviteter for å styrke samhold og tillit
- Rutiner for tilbakemelding og anerkjennelse
- Tilrettelegging for fleksibilitet og balanse mellom jobb og fritid
- Nulltoleranse for mobbing og tydelige varslerrutiner
- Regelmessige medarbeidersamtaler

**Oppfølging:**
- Ny arbeidsmiljøundersøkelse etter 6–12 måneder
- Jevnlig evaluering av tiltakene
- Justere tiltak basert på tilbakemeldinger`,
    },
    {
      id: 'ol-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom kortvarig og langvarig stress, og beskriv hvorfor langvarig stress er skadelig.',
        hints: ['Tenk på at kroppen er designet for å håndtere korte stressperioder, men ikke vedvarende belastning'],
        solution: 'Kortvarig stress er kroppens naturlige reaksjon på en utfordring. Det mobiliserer energi, skjerper oppmerksomheten og kan hjelpe oss å prestere bedre – for eksempel før en presentasjon eller en frist. Etter at utfordringen er over, roer kroppen seg ned. Langvarig (kronisk) stress oppstår når belastningen vedvarer uten tilstrekkelig restitusjon. Kroppen forblir i alarmberedskap over tid, noe som bryter ned immunforsvaret, forstyrrer søvn, øker risikoen for hjerte- og karsykdommer, og kan føre til psykiske plager som angst, depresjon og utbrenthet. Det er denne vedvarende belastningen uten pauser som gjør langvarig stress helseskadelig.',
      },
    },
    {
      id: 'ol-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-4-5-ex-3',
        number: '4.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner utbrenthet (burnout)?',
        options: [
          { id: 'a', text: 'Kortvarig stress før en viktig frist', isCorrect: false },
          { id: 'b', text: 'Emosjonell utmattelse, kynisme og redusert mestring etter langvarig jobbstress', isCorrect: true },
          { id: 'c', text: 'En medisinsk diagnose for influensa', isCorrect: false },
          { id: 'd', text: 'Normal tretthet etter en lang arbeidsdag', isCorrect: false },
        ],
        solution: 'Utbrenthet (burnout) kjennetegnes av tre hovedelementer: emosjonell utmattelse (føler seg tømt for energi), kynisme/distansering (mister engasjement og interesse), og redusert mestringsopplevelse (føler seg ineffektiv). Det utvikles over tid som følge av langvarig jobbstress.',
      },
    },
    {
      id: 'ol-4-5-warning-1',
      type: 'warning',
      title: 'Mobbing er aldri akseptabelt',
      content: `Ifølge Statens arbeidsmiljøinstitutt oppgir om lag 5 % av norske arbeidstakere at de utsettes for mobbing på arbeidsplassen. Arbeidsmiljøloven er klar: arbeidstaker skal ikke utsettes for trakassering eller annen utilbørlig opptreden. Virksomheter som ikke tar tak i mobbing, bryter loven og risikerer pålegg fra Arbeidstilsynet. Alle ansatte har plikt til å varsle dersom de blir kjent med at noen mobbes.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er leder for en avdeling der en ansatt har varslet om mobbing fra en kollega. Beskriv hvordan du som leder bør håndtere situasjonen steg for steg.',
        hints: ['Tenk på lovkrav, hensynet til den som varsler, den det varsles om, og resten av arbeidsmiljøet'],
        solution: 'Steg-for-steg håndtering: 1) Ta varselet på alvor – ikke bagatelliser. Takk den ansatte for at vedkommende sier fra. 2) Sikre konfidensialitet – informasjon deles kun med de som trenger å vite. 3) Kartlegg saken – snakk med den som varsler, den det varsles om, og eventuelle vitner. Dokumenter alt skriftlig. 4) Iverksett tiltak – avhengig av alvorlighetsgrad kan dette være samtale, mekling, advarsel, omplassering eller i alvorlige tilfeller oppsigelse. 5) Følg opp den som er blitt mobbet – tilby støtte, eventuelt bedriftshelsetjeneste. 6) Forebygg videre – vurder om det er systemiske årsaker, gjennomfør tiltak for hele avdelingen. 7) Dokumenter prosessen – for etterprøvbarhet og læring. Viktig: Den som varsler skal ikke utsettes for gjengjeldelse (lovfestet vern).',
      },
    },
    {
      id: 'ol-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk krav-ressurs-modellen til å analysere en arbeidssituasjon du kjenner til (jobb, skole eller idrett). Identifiser krav og ressurser, og vurder om det er balanse.',
        hints: ['Krav er alt som krever innsats. Ressurser er alt som hjelper deg å møte kravene.'],
        solution: 'Eksempelsvar med skolesituasjon: Krav: Mange innleveringer, presentasjoner, prøver, tidsfrister, forventninger fra lærere og foreldre. Ressurser: Faglig kompetanse, studieteknikker, støtte fra medelever og lærere, god planlegging, pauser og fritidsaktiviteter. Vurdering av balanse: Perioder med mange prøver og innleveringer samtidig skaper ubalanse – kravene overstiger ressursene, og man opplever stress. Tiltak for bedre balanse: Planlegge bedre, be om hjelp tidlig, prioritere tydeligere, ta nok pauser. Det sentrale er at modellen viser at stress ikke handler om krav alene, men om forholdet mellom krav og tilgjengelige ressurser.',
      },
    },
    {
      id: 'ol-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-4-5-ex-6',
        number: '4.5.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva har arbeidsgiver plikt til ifølge arbeidsmiljøloven når det gjelder mobbing?',
        options: [
          { id: 'a', text: 'Arbeidsgiver har ingen spesiell plikt – mobbing er et privat anliggende', isCorrect: false },
          { id: 'b', text: 'Arbeidsgiver skal forebygge og håndtere mobbing og trakassering', isCorrect: true },
          { id: 'c', text: 'Arbeidsgiver skal kun gripe inn dersom politiet er involvert', isCorrect: false },
          { id: 'd', text: 'Arbeidsgiver kan velge å håndtere det, men er ikke pålagt', isCorrect: false },
        ],
        solution: 'Arbeidsmiljøloven er tydelig på at arbeidsgiver har plikt til å forebygge og håndtere mobbing og trakassering. Arbeidstaker skal ikke utsettes for trakassering eller annen utilbørlig opptreden.',
      },
    },
    {
      id: 'ol-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Psykososialt arbeidsmiljø** handler om psykologiske og sosiale forhold på jobben
- **Krav-ressurs-modellen** forklarer at stress oppstår når krav overstiger ressurser over tid
- **Mobbing** er gjentatte negative handlinger og er forbudt etter arbeidsmiljøloven
- **Stress** kan være positivt kortvarig, men langvarig stress fører til helseskader
- **Utbrenthet** kjennetegnes av utmattelse, kynisme og redusert mestring
- Arbeidsgiver har **plikt** til å forebygge og håndtere psykososiale problemer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Psykososialt arbeidsmiljø | Psykologiske og sosiale forhold på jobben |
| Krav-ressurs-modellen | Balansen mellom jobbkrav og tilgjengelige ressurser |
| Utbrenthet | Kronisk utmattelse etter langvarig jobbstress |
| Mobbing | Gjentatte negative handlinger over tid |`,
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_LEDELSE_DEL4_CHAPTERS = [
  CHAPTER_OKONOMI_LEDELSE_4_1,
  CHAPTER_OKONOMI_LEDELSE_4_2,
  CHAPTER_OKONOMI_LEDELSE_4_3,
  CHAPTER_OKONOMI_LEDELSE_4_4,
  CHAPTER_OKONOMI_LEDELSE_4_5,
];

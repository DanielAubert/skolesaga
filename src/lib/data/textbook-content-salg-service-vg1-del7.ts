/**
 * Salg, service og reiseliv VG1 - Del 7: Kultur, etikk og arbeidsmiljø
 * Kapittel 7.1-7.7
 *
 * Dekker LK20 kompetansemål:
 * - utforske hvordan ulik kultur og bakgrunn påvirker kommunikasjon og kundebehandling
 * - reflektere over etiske problemstillinger knyttet til salg og markedsføring
 * - drøfte hvordan HMS-arbeid påvirker arbeidsmiljø og sikkerhet
 * - gjøre rede for arbeidslivets parter og deres roller
 * - beskrive rutiner for beredskap og risikovurdering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Kulturforståelse i servicenæringen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_1: TextbookChapter = {
  id: 'salg-service-vg1-7-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.1',
  title: 'Kulturforståelse i servicenæringen',
  description: 'En innføring i kulturforståelse og hvordan kulturell bakgrunn påvirker forventninger, kommunikasjon og atferd i servicemøtet. Du lærer å gjenkjenne og tilpasse deg ulike kulturelle normer.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske hvordan ulik kultur og bakgrunn påvirker kommunikasjon og kundebehandling'],
  content: [
    {
      id: 'salg-service-vg1-7-1-intro',
      type: 'text',
      content: `## Kultur i servicemøtet

I en globalisert verden møter vi mennesker med ulik kulturell bakgrunn hver dag. I servicenæringen er dette spesielt viktig - enten du jobber på hotell, i butikk eller på restaurant, vil du møte kunder og gjester fra hele verden. God kulturforståelse gjør deg til en bedre servicemedarbeider.

I dette kapittelet skal du lære:
- Hva kultur er og hvordan den påvirker oss
- Forskjeller i kommunikasjonsstil mellom kulturer
- Hvordan tilpasse service til ulike kulturelle forventninger
- Vanlige utfordringer og misforståelser`,
    },
    {
      id: 'salg-service-vg1-7-1-def-1',
      type: 'definition',
      title: 'Kultur',
      content: `**Kultur** er de felles verdier, normer, skikker og væremåter som kjennetegner en gruppe mennesker. Kultur påvirker hvordan vi kommuniserer, hva vi anser som høflig, hvordan vi forholder oss til tid, og hva vi forventer i ulike situasjoner.`,
    },
    {
      id: 'salg-service-vg1-7-1-text-1',
      type: 'text',
      content: `### Kulturdimensjoner

Forskere har identifisert flere dimensjoner der kulturer varierer:

**Individualistisk vs. kollektivistisk:**
- Individualistiske kulturer (Norge, USA): Fokus på individets behov og rettigheter
- Kollektivistiske kulturer (Japan, Kina): Fokus på gruppens behov og harmoni

**Høy vs. lav maktdistanse:**
- Høy maktdistanse: Aksept for hierarki, respekt for autoriteter
- Lav maktdistanse (Norge): Flat struktur, alle behandles likt

**Direkte vs. indirekte kommunikasjon:**
- Direkte kulturer: Sier ting rett ut, verdsetter ærlighet
- Indirekte kulturer: Pakker budskapet inn, unngår konfrontasjon

**Monokront vs. polykront tidssyn:**
- Monokront: Tid er lineær, punktlighet viktig
- Polykront: Tid er fleksibel, relasjoner viktigere enn tidsskjema`,
    },
    {
      id: 'salg-service-vg1-7-1-text-2',
      type: 'text',
      content: `### Kommunikasjon på tvers av kulturer

**Verbale forskjeller:**
- Språk og aksent kan skape utfordringer
- Humor og ironi oversettes dårlig
- Noen språk har formelt og uformelt "du"
- Talemåter og høflighetsfraser varierer

**Nonverbale forskjeller:**
- Øyekontakt: Noen kulturer ser det som respekt, andre som utfordrende
- Fysisk avstand: Varierer fra under en meter til over to meter
- Berøring: Håndtrykk, klem, eller ingen berøring
- Gester: Tommel opp er støtende i noen kulturer

**Kontekst:**
- Lav-kontekst (Norge): Informasjon formidles direkte i ordene
- Høy-kontekst (Japan): Mye ligger mellom linjene, må "lese" situasjonen`,
    },
    {
      id: 'salg-service-vg1-7-1-tip-1',
      type: 'tip',
      title: 'Unngå stereotyper',
      content: `Kulturdimensjoner er generaliseringer som beskriver tendenser, ikke absolutte sannheter. Hver person er et individ. Bruk kulturforståelse som et utgangspunkt, men vær alltid åpen for at den enkelte kunden kan være annerledes enn "typisk" for sin kultur.`,
    },
    {
      id: 'salg-service-vg1-7-1-text-3',
      type: 'text',
      content: `### Service tilpasset ulike kulturer

**Generelle råd:**
- Observer før du handler - se hva kunden forventer
- Vær tålmodig med språkbarrierer
- Snakk tydelig (ikke høyere, bare tydeligere)
- Bruk kroppsspråk og demonstrasjoner som støtte
- Spør høflig hvis du er usikker på noe

**Spesifikke tilpasninger:**

**Asiatiske kunder:**
- Smil og vær høflig, men ikke for personlig
- Gi tid til beslutninger
- Ikke press på salg - la dem komme tilbake
- Visittkort overrekkes med begge hender

**Amerikanske kunder:**
- Forvent vennlig, uformell tone
- De liker entusiastisk service
- Direkte kommunikasjon fungerer
- Service med et smil er forventet

**Tyske kunder:**
- Verdsetter kompetanse og fakta
- Punktlighet er viktig
- Direkte og saklig kommunikasjon
- Kvalitet over pris`,
    },
    {
      id: 'salg-service-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell misforståelse',
      problem: 'En japansk turist virker fornøyd med servicen, smiler og nikker, men klager etterpå på TripAdvisor.',
      solution: `**Hva skjedde:**
I japansk kultur er det uhøflig å si direkte at noe er galt. Kunden smilte og nikket for å unngå konfrontasjon, men var egentlig misfornøyd.

**Tegn å se etter:**
- Nølende svar ("kanskje", "det er vanskelig")
- Unngår direkte øyekontakt
- Sier "ja" men mener egentlig "jeg hører hva du sier" (ikke nødvendigvis enig)
- Trekker luft gjennom tennene (tegn på ubehag)

**Hvordan håndtere:**
- Still åpne spørsmål: "Er det noe jeg kan gjøre bedre?"
- Observer kroppsspråk nøye
- Gi mulighet til å klage indirekte: "Noen gjester synes rommet er litt varmt - passer det for deg?"
- Følg opp proaktivt i stedet for å vente på klager`,
    },
    {
      id: 'salg-service-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en individualistisk kultur?',
        options: [
          { id: 'a', text: 'Fokus på gruppens behov og harmoni', isCorrect: false },
          { id: 'b', text: 'Fokus på individets behov og rettigheter', isCorrect: true },
          { id: 'c', text: 'Strenge hierarkiske strukturer', isCorrect: false },
          { id: 'd', text: 'Indirekte kommunikasjonsstil', isCorrect: false },
        ],
        solution: 'Individualistiske kulturer (som Norge og USA) setter individets behov og rettigheter i sentrum, i motsetning til kollektivistiske kulturer der gruppens harmoni prioriteres.',
      },
    },
    {
      id: 'salg-service-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        task: 'Hvorfor er det viktig å være bevisst på nonverbal kommunikasjon i møte med kunder fra andre kulturer?',
        hints: ['Tenk på øyekontakt, fysisk avstand og gester'],
        solution: 'Nonverbal kommunikasjon tolkes ulikt i ulike kulturer. Øyekontakt kan oppfattes som respektfullt i en kultur og utfordrende i en annen. Fysisk avstand varierer - noen kulturer står nærme, andre trenger mer rom. Gester som tommel opp eller OK-tegnet kan være støtende i noen kulturer. Misforståelser her kan skape ubehag selv om ordene er riktige.',
      },
    },
    {
      id: 'salg-service-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom direkte og indirekte kommunikasjonsstiler med eksempler.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv direkte kommunikasjonsstil',
            solution: 'Direkte kommunikasjon betyr å si ting rett ut, være tydelig og konkret. "Nei, vi har ikke det produktet." "Maten var ikke god." Ærlighet og tydelighet verdsettes, selv om det kan føles brått.',
          },
          {
            label: 'b',
            task: 'Beskriv indirekte kommunikasjonsstil',
            solution: 'Indirekte kommunikasjon pakker budskapet inn for å bevare harmoni. "Det kan være vanskelig å skaffe" (i stedet for nei). "Maten var interessant" (i stedet for dårlig). Man må lese mellom linjene.',
          },
        ],
        solution: 'Å forstå disse forskjellene hjelper deg tolke kunder riktig og tilpasse din egen kommunikasjon.',
      },
    },
    {
      id: 'salg-service-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Du jobber på et hotell og en gjest fra en høy-kontekst kultur virker misfornøyd, men sier ingenting direkte. Hvordan kan du finne ut hva som er galt?',
        solution: 'Still indirekte spørsmål som gir rom for å uttrykke misnøye uten konfrontasjon: "Noen gjester synes temperaturen i rommet kan være utfordrende - passer det for deg?" Observer kroppsspråk nøye. Tilby løsninger proaktivt: "Jeg kan gjerne ordne ekstra håndklær hvis du ønsker det." Følg opp: "Er det noe mer jeg kan hjelpe med for at oppholdet skal bli perfekt?"',
      },
    },
    {
      id: 'salg-service-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        task: 'Gi tre konkrete tips for hvordan du kan gi god service til kunder med språkbarrierer.',
        solution: '1) Snakk tydelig og sakte, men ikke høyt - høy stemme virker aggressivt. 2) Bruk enkle ord og unngå slang og idiomer. 3) Demonstrer og pek - vis produktet, bruk bilder eller skriv ned tall. 4) Bekreft forståelse ved å gjenta det viktigste. 5) Vær tålmodig og smil - det er universelt. 6) Ha oversettelses-apper tilgjengelig som backup.',
      },
    },
    {
      id: 'salg-service-vg1-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kultur** påvirker verdier, kommunikasjon og forventninger
- **Kulturdimensjoner** som individualisme/kollektivisme og direkte/indirekte kommunikasjon
- **Nonverbal kommunikasjon** tolkes ulikt i ulike kulturer
- **Tilpasning** uten stereotypisering gir bedre service

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kulturdimensjoner | Målbare forskjeller mellom kulturer |
| Høy-kontekst | Mye informasjon ligger mellom linjene |
| Lav-kontekst | Informasjon formidles direkte i ordene |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Mangfold som ressurs
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_2: TextbookChapter = {
  id: 'salg-service-vg1-7-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.2',
  title: 'Mangfold som ressurs',
  description: 'Du lærer hvordan mangfold i bakgrunn, erfaring og perspektiver kan være en styrke for servicebedrifter. Kapittelet dekker inkludering, diskriminering og hvordan skape et godt arbeidsmiljø for alle.',
  estimatedMinutes: 35,
  competenceGoals: ['utforske hvordan ulik kultur og bakgrunn påvirker kommunikasjon og kundebehandling'],
  content: [
    {
      id: 'salg-service-vg1-7-2-intro',
      type: 'text',
      content: `## Styrken i forskjellighet

Et team med mennesker fra ulike bakgrunner tenker annerledes, ser flere muligheter og løser problemer på nye måter. I servicenæringen, der vi møter kunder fra alle lag av samfunnet, er mangfold ikke bare fint å ha - det er en konkurransefordel.

I dette kapittelet skal du lære:
- Hva mangfold betyr i arbeidslivet
- Hvordan mangfold styrker servicebedrifter
- Diskriminering og hvordan forebygge det
- Inkluderende arbeidsmiljø i praksis`,
    },
    {
      id: 'salg-service-vg1-7-2-def-1',
      type: 'definition',
      title: 'Mangfold',
      content: `**Mangfold** i arbeidslivet betyr variasjon i hvem de ansatte er - dette inkluderer kjønn, alder, etnisitet, religion, funksjonsevne, seksuell orientering, utdanning og erfaring. Et mangfoldig team har mennesker med ulike perspektiver og bakgrunner.`,
    },
    {
      id: 'salg-service-vg1-7-2-text-1',
      type: 'text',
      content: `### Hvorfor mangfold er bra for business

**Bedre kundeforståelse:**
- Ansatte som ligner kundene forstår deres behov
- Flere språk og kulturkompetanse
- Unngår blindsoner i service og produkter

**Mer innovasjon:**
- Ulike perspektiver gir flere ideer
- Utfordrer "sånn har vi alltid gjort det"
- Bedre problemløsning

**Rekruttering:**
- Tiltrekker talenter fra hele befolkningen
- Bedre omdømme som arbeidsgiver
- Lavere turnover når folk trives

**Dokumenterte fordeler:**
- Studier viser at mangfoldige team presterer bedre
- Høyere kreativitet og innovasjon
- Bedre økonomiske resultater`,
    },
    {
      id: 'salg-service-vg1-7-2-def-2',
      type: 'definition',
      title: 'Diskriminering',
      content: `**Diskriminering** er usaklig forskjellsbehandling basert på kjennetegn som kjønn, etnisitet, religion, alder, funksjonsevne eller seksuell orientering. Diskriminering i arbeidslivet er forbudt ved lov og kan gi erstatningsansvar.`,
    },
    {
      id: 'salg-service-vg1-7-2-text-2',
      type: 'text',
      content: `### Former for diskriminering

**Direkte diskriminering:**
- Nekter å ansette noen på grunn av hudfarge
- Lavere lønn til kvinner for samme arbeid
- Ikke forfremme noen på grunn av alder

**Indirekte diskriminering:**
- Regler som virker nøytrale men rammer grupper
- Eksempel: Krav om norsk som morsmål når det ikke er nødvendig
- Eksempel: Uniformer som ikke tillater religiøse hodeplagg

**Trakassering:**
- Nedsettende kommentarer eller vitser
- Uønsket oppmerksomhet
- Utestenging eller mobbing

**Diskriminering i servicemøtet:**
- Følge etter kunder man tror stjeler
- Gi dårligere service basert på utseende
- Nekte kunder adgang uten saklig grunn`,
    },
    {
      id: 'salg-service-vg1-7-2-warning-1',
      type: 'warning',
      title: 'Lovverk',
      content: `Diskriminering er forbudt etter likestillings- og diskrimineringsloven. Arbeidsgivere har aktivitetsplikt til å fremme likestilling. Arbeidstaker som diskriminerer kunder eller kolleger kan få advarsler, oppsigelse og erstatningsansvar.`,
    },
    {
      id: 'salg-service-vg1-7-2-text-3',
      type: 'text',
      content: `### Inkluderende arbeidsmiljø

**Ledelsens ansvar:**
- Tydelige verdier og nulltoleranse for diskriminering
- Mangfold i rekruttering
- Tilrettelegging for ulike behov
- Reagere på varsler

**Kollegers ansvar:**
- Behandle alle med respekt
- Si fra ved diskriminering
- Inkludere nye kolleger
- Unngå ekskluderende humor

**Praktiske tiltak:**
- Fleksible arbeidstider (religiøse helligdager)
- Universell utforming av arbeidsplassen
- Språkopplæring og mentorordninger
- Sosiale arrangementer som inkluderer alle`,
    },
    {
      id: 'salg-service-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Mangfold som konkurransefordel',
      problem: 'En hotellkjede sliter med å tiltrekke internasjonale gjester.',
      solution: `**Situasjon:**
Hotellet ligger i turistområde med mange asiatiske gjester, men får dårlige anmeldelser på service.

**Tiltak:**
1. Ansetter medarbeidere som snakker mandarin, japansk og koreansk
2. Opplæring i kulturelle preferanser (f.eks. te i stedet for kaffe, andre frokostpreferanser)
3. Informasjonsmateriell på flere språk
4. Ansatte med ulik bakgrunn gir innspill på service

**Resultat:**
- Gjestene føler seg forstått og velkommen
- Bedre anmeldelser på TripAdvisor
- Økt bestillinger fra asiatiske reisebyråer
- Ansatte lærer av hverandre og utvikler kompetanse`,
    },
    {
      id: 'salg-service-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er indirekte diskriminering?',
        options: [
          { id: 'a', text: 'Å nekte å ansette noen basert på hudfarge', isCorrect: false },
          { id: 'b', text: 'Regler som virker nøytrale men rammer visse grupper uforholdsmessig', isCorrect: true },
          { id: 'c', text: 'Å fortelle nedsettende vitser', isCorrect: false },
          { id: 'd', text: 'Å gi lavere lønn til kvinner', isCorrect: false },
        ],
        solution: 'Indirekte diskriminering er når regler eller krav som ser nøytrale ut, i praksis rammer visse grupper uforholdsmessig - for eksempel språkkrav som ekskluderer innvandrere uten at det er nødvendig for jobben.',
      },
    },
    {
      id: 'salg-service-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        task: 'Gi tre eksempler på hvordan mangfold kan være en fordel for en servicebedrift.',
        hints: ['Tenk på kundekontakt, innovasjon og rekruttering'],
        solution: '1) Ansatte som snakker flere språk kan betjene internasjonale kunder bedre. 2) Ulike perspektiver gir flere ideer og bedre problemløsning. 3) En mangfoldig arbeidsplass tiltrekker talenter fra hele befolkningen. 4) Ansatte med ulik bakgrunn kan forstå og møte ulike kundebehov. 5) Bedre omdømme blant kunder som verdsetter inkludering.',
      },
    },
    {
      id: 'salg-service-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Du hører en kollega komme med nedsettende kommentarer om en annen kollegas religiøse hodeplagg. Hva bør du gjøre?',
        solution: '1) Si fra på en rolig måte: "Det der var ikke greit å si." 2) Støtt den som ble utsatt - spør om de er ok. 3) Varsle leder hvis det fortsetter eller er alvorlig. 4) Dokumenter hendelsen (dato, hva som ble sagt, hvem som var til stede). 5) Bidra til et inkluderende miljø ved å inkludere alle kolleger.',
      },
    },
    {
      id: 'salg-service-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Hva kan en butikk gjøre for å skape et inkluderende arbeidsmiljø?',
        subTasks: [
          {
            label: 'a',
            task: 'Tiltak fra ledelsen',
            solution: 'Tydelige verdier mot diskriminering, mangfold i rekruttering, tilrettelegging for ulike behov, opplæring i inkludering, reagere på varsler.',
          },
          {
            label: 'b',
            task: 'Tiltak mellom kolleger',
            solution: 'Behandle alle med respekt, inkludere nye kolleger i pausepraten, unngå ekskluderende humor, si fra ved uakseptabel atferd, vise interesse for andres bakgrunn.',
          },
        ],
        solution: 'Et inkluderende arbeidsmiljø krever innsats fra både ledelse og ansatte på alle nivåer.',
      },
    },
    {
      id: 'salg-service-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'Kan en butikk nekte å ansette en person som bruker hijab? Begrunn svaret.',
        solution: 'Nei, som hovedregel ikke. Å nekte ansettelse på grunn av religiøst hodeplagg er diskriminering etter likestillings- og diskrimineringsloven. Unntak kan bare gjelde hvis det er saklige, nødvendige og forholdsmessige grunner - for eksempel HMS-krav i visse produksjonsmiljøer. En vanlig butikk eller restaurant har normalt ikke slike grunner.',
      },
    },
    {
      id: 'salg-service-vg1-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Mangfold** gir bedre kundeforståelse, innovasjon og rekruttering
- **Diskriminering** er forbudt og kan være direkte, indirekte eller trakassering
- **Inkludering** krever innsats fra både ledelse og kolleger
- **Lovverket** gir beskyttelse mot diskriminering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mangfold | Variasjon i bakgrunn og perspektiver |
| Diskriminering | Usaklig forskjellsbehandling |
| Inkludering | Å sikre at alle føler seg velkomne |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Etiske dilemmaer i servicenæringen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_3: TextbookChapter = {
  id: 'salg-service-vg1-7-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.3',
  title: 'Etiske dilemmaer i servicenæringen',
  description: 'En innføring i etikk og etiske dilemmaer du kan møte i servicenæringen. Du lærer å gjenkjenne etiske problemstillinger og reflektere over riktige valg i vanskelige situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['reflektere over etiske problemstillinger knyttet til salg og markedsføring'],
  content: [
    {
      id: 'salg-service-vg1-7-3-intro',
      type: 'text',
      content: `## Hva er riktig å gjøre?

I arbeidslivet møter vi situasjoner der det ikke alltid er opplagt hva som er riktig å gjøre. Skal du si fra hvis en kollega jukser? Skal du selge et produkt du vet kunden ikke trenger? Etikk handler om å reflektere over hva som er riktig og galt, og handle deretter.

I dette kapittelet skal du lære:
- Hva etikk er og hvorfor det er viktig
- Vanlige etiske dilemmaer i servicenæringen
- Hvordan reflektere over etiske valg
- Bedriftens etiske retningslinjer`,
    },
    {
      id: 'salg-service-vg1-7-3-def-1',
      type: 'definition',
      title: 'Etikk',
      content: `**Etikk** er læren om hva som er riktig og galt, godt og ondt. I arbeidslivet handler etikk om å handle på måter som er moralsk forsvarlige - overfor kunder, kolleger, arbeidsgivere og samfunnet. Et **etisk dilemma** oppstår når ulike verdier eller hensyn står mot hverandre.`,
    },
    {
      id: 'salg-service-vg1-7-3-text-1',
      type: 'text',
      content: `### Etiske perspektiver

Det finnes ulike måter å vurdere hva som er etisk riktig:

**Konsekvensetikk:**
- Handlingen vurderes ut fra konsekvensene
- Riktig handling gir best resultat for flest mulig
- "Målet helliger midlene"

**Pliktetikk:**
- Noen handlinger er alltid gale, uansett konsekvenser
- Følg regler og plikter
- "Du skal ikke lyve" - selv om løgnen ville gitt et godt resultat

**Dydsetikk:**
- Fokus på karakteregenskaper
- Hva ville en god person gjort?
- Ærlighet, mot, rettferdighet som idealer

**I praksis:** De fleste bruker en kombinasjon - vi vurderer både konsekvenser, regler og hva som føles riktig.`,
    },
    {
      id: 'salg-service-vg1-7-3-text-2',
      type: 'text',
      content: `### Vanlige etiske dilemmaer i service

**Salgspress vs. kundens beste:**
- Press om å selge dyre produkter kunden ikke trenger
- Mersalg som ikke gir verdi
- Holde tilbake informasjon om billigere alternativer

**Ærlighet vs. lojalitet:**
- Dekke over feil kolleger har gjort
- Ikke fortelle om produkters svakheter
- Overdrive kvaliteten for å selge

**Personvern vs. service:**
- Bruke kundeinformasjon uetisk
- Dele data med tredjeparter
- Overvåke ansatte eller kunder

**Bærekraft vs. profitt:**
- Selge produkter med dårlig miljøprofil
- Greenwashing (falsk miljømarkedsføring)
- Sløse med ressurser for å spare penger`,
    },
    {
      id: 'salg-service-vg1-7-3-text-3',
      type: 'text',
      content: `### Hvordan håndtere etiske dilemmaer

**1. Identifiser dilemmaet**
- Hva er det som står på spill?
- Hvilke verdier eller interesser kolliderer?
- Hvem påvirkes av beslutningen?

**2. Vurder alternativene**
- Hvilke handlingsalternativer har du?
- Hva er konsekvensene av hvert alternativ?
- Bryter noen alternativer med lover eller regler?

**3. Reflekter over verdier**
- Hva mener du personlig er riktig?
- Hva sier bedriftens retningslinjer?
- Hva ville du tenkt om dette kom i avisen?

**4. Ta en beslutning og handle**
- Velg det alternativet du kan stå for
- Vær forberedt på å forklare valget
- Dokumenter hvis relevant`,
    },
    {
      id: 'salg-service-vg1-7-3-tip-1',
      type: 'tip',
      title: 'Avistesten',
      content: `Når du er usikker på om noe er etisk riktig, tenk: "Ville jeg vært komfortabel hvis dette sto i avisen i morgen?" Hvis svaret er nei, bør du trolig velge annerledes.`,
    },
    {
      id: 'salg-service-vg1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Etisk dilemma om salg',
      problem: 'Du jobber i elektronikkbutikk og har salgsbudsjett. En eldre kunde vil kjøpe en dyr TV med funksjoner de ikke trenger og ikke vil forstå.',
      solution: `**Dilemmaet:**
- Salgsbudsjettet: Du skal selge mest mulig
- Kundens beste: De trenger ikke alle funksjonene
- Arbeidsgivers forventninger: Høyt salg belønnes
- Din integritet: Vil du selge noe du vet de ikke trenger?

**Vurdering:**
Konsekvensetikk: Kunden blir kanskje misfornøyd, angrer, eller kommer tilbake og klager.
Pliktetikk: Du har plikt til å gi god rådgivning.
Dydsetikk: En ærlig person ville anbefalt det beste for kunden.

**Mulig løsning:**
"Denne TV-en er veldig god, men med tanke på hva du fortalte meg om hvordan du bruker TV-en, tror jeg faktisk du blir like fornøyd med denne modellen som er enklere å bruke og koster 3000 kr mindre."

**Resultat:** Kunden blir fornøyd og kommer trolig tilbake. Din integritet er intakt. Langsiktig er dette også bra for butikken.`,
    },
    {
      id: 'salg-service-vg1-7-3-text-4',
      type: 'text',
      content: `### Bedriftens etiske retningslinjer

De fleste bedrifter har etiske retningslinjer som:

**Vanlige temaer:**
- Ærlighet overfor kunder og kolleger
- Anti-korrupsjon og gaver
- Personvern og datasikkerhet
- Bærekraft og miljø
- Diskriminering og trakassering
- Varsling

**Din rolle:**
- Kjenn til retningslinjene
- Følg dem i praksis
- Spør leder hvis du er usikker
- Varsle ved brudd`,
    },
    {
      id: 'salg-service-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva er et etisk dilemma?',
        options: [
          { id: 'a', text: 'En situasjon der man ikke vet hva man skal gjøre', isCorrect: false },
          { id: 'b', text: 'En situasjon der ulike verdier eller hensyn står mot hverandre', isCorrect: true },
          { id: 'c', text: 'En situasjon der alle alternativene er gale', isCorrect: false },
          { id: 'd', text: 'En situasjon der sjefen bestemmer', isCorrect: false },
        ],
        solution: 'Et etisk dilemma oppstår når ulike verdier eller hensyn kolliderer - for eksempel når kundens beste står mot salgsbudsjettet, eller lojalitet mot ærlighet.',
      },
    },
    {
      id: 'salg-service-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        task: 'Forklar hva "avistesten" er og hvordan du kan bruke den.',
        hints: ['Tenk på offentlig oppmerksomhet'],
        solution: 'Avistesten er å spørre seg selv: "Ville jeg vært komfortabel hvis dette sto i avisen i morgen?" Hvis du ville følt deg ukomfortabel med at handlingen ble offentlig kjent, er det et tegn på at den kanskje ikke er etisk forsvarlig. Det er en enkel test for å sjekke egen magefølelse på vanskelige valg.',
      },
    },
    {
      id: 'salg-service-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'En kollega ber deg om å dekke over at de tok en lengre pause enn tillatt. Hvordan vurderer du dette etisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke verdier står mot hverandre?',
            solution: 'Lojalitet til kollega vs. ærlighet overfor arbeidsgiver. Vennskapet vs. arbeidsgivers tillit. Eget ubehag vs. å gjøre det rette.',
          },
          {
            label: 'b',
            task: 'Hva ville du gjort og hvorfor?',
            solution: 'Det beste er å ikke dekke over. Du kan si til kollegaen: "Jeg vil ikke lyve hvis noen spør, men jeg kommer heller ikke til å varsle aktivt." Å lyve for kolleger setter deg selv i en vanskelig posisjon og er uærlig overfor arbeidsgiver.',
          },
        ],
        solution: 'Lojalitet til kolleger er viktig, men ikke på bekostning av din egen integritet og ærlighet.',
      },
    },
    {
      id: 'salg-service-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Gi tre eksempler på etiske dilemmaer en selger i butikk kan møte.',
        solution: '1) Selge et dyrere produkt når et billigere dekker kundens behov. 2) Ikke fortelle om en feil ved produktet som kunden ikke vil merke med det første. 3) Bruke salgsargumenter man vet er overdrevne. 4) Følge med på kunder basert på deres utseende. 5) Ta imot en gave fra en leverandør som ønsker bedre plassering i butikken.',
      },
    },
    {
      id: 'salg-service-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom konsekvensetikk og pliktetikk med et eksempel.',
        solution: 'Konsekvensetikk vurderer handlingen ut fra konsekvensene - det som gir best resultat for flest er riktig. Pliktetikk sier at noen handlinger er gale uansett konsekvenser. Eksempel: Hvis en kunde spør om et produkt er godt, og du vet det har svakheter. Konsekvensetikk: "Hvis jeg ikke sier det, selger jeg mer og kunden merker det kanskje ikke." Pliktetikk: "Jeg har plikt til å være ærlig, uansett konsekvenser."',
      },
    },
    {
      id: 'salg-service-vg1-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Etikk** handler om hva som er riktig og galt
- **Etiske dilemmaer** oppstår når verdier eller hensyn kolliderer
- **Refleksjon** over konsekvenser, regler og verdier hjelper deg velge
- **Bedriftens retningslinjer** gir rammer for etisk atferd

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Etisk dilemma | Situasjon der verdier kolliderer |
| Konsekvensetikk | Vurderer handlingen ut fra konsekvenser |
| Pliktetikk | Noen handlinger er alltid gale |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Arbeidslivets parter og samarbeid
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_4: TextbookChapter = {
  id: 'salg-service-vg1-7-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.4',
  title: 'Arbeidslivets parter og samarbeid',
  description: 'Du lærer om hvordan arbeidslivet er organisert med arbeidsgivere, arbeidstakere og deres organisasjoner. Kapittelet dekker tariffavtaler, trepartssamarbeidet og tillitsvalgtes rolle.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for arbeidslivets parter og deres roller'],
  content: [
    {
      id: 'salg-service-vg1-7-4-intro',
      type: 'text',
      content: `## Den norske modellen

Det norske arbeidslivet er kjent for samarbeid mellom arbeidsgivere og arbeidstakere. Dette samarbeidet har gitt oss gode arbeidsforhold, høy produktivitet og relativt få konflikter. Å forstå hvordan dette fungerer er viktig for alle som skal ut i arbeidslivet.

I dette kapittelet skal du lære:
- Hvem som er arbeidslivets parter
- Hva en tariffavtale er
- Hvordan trepartssamarbeidet fungerer
- Tillitsvalgtes og verneombudets rolle`,
    },
    {
      id: 'salg-service-vg1-7-4-def-1',
      type: 'definition',
      title: 'Arbeidslivets parter',
      content: `**Arbeidslivets parter** er arbeidsgiversiden og arbeidstakersiden. Arbeidsgiversiden representeres av arbeidsgiverorganisasjoner som NHO og Virke. Arbeidstakersiden representeres av fagforeninger organisert i hovedorganisasjoner som LO, Unio og YS.`,
    },
    {
      id: 'salg-service-vg1-7-4-text-1',
      type: 'text',
      content: `### Arbeidstakersiden

**Fagforeninger:**
- Organiserer arbeidstakere i samme yrke eller bransje
- Forhandler lønn og arbeidsvilkår
- Gir juridisk hjelp ved konflikter
- Tilbyr forsikringer og andre fordeler

**Hovedorganisasjoner:**
- **LO (Landsorganisasjonen):** Største, med bl.a. Handel og Kontor
- **Unio:** Utdanningsgrupper, sykepleiere, lærere
- **YS (Yrkesorganisasjonenes Sentralforbund):** Bl.a. Parat, Negotia
- **Akademikerne:** Akademisk utdannede

**Medlemsfordeler:**
- Bedre lønn gjennom forhandlinger
- Juridisk bistand ved konflikter
- Forsikringer og banktilbud
- Kurs og kompetanseheving`,
    },
    {
      id: 'salg-service-vg1-7-4-text-2',
      type: 'text',
      content: `### Arbeidsgiversiden

**Arbeidsgiverorganisasjoner:**
- **NHO (Næringslivets Hovedorganisasjon):** Privat næringsliv
- **Virke:** Handel og tjenesteyting
- **Spekter:** Helse og samferdsel
- **KS (Kommunesektorens organisasjon):** Kommuner og fylker

**Hva gjør de:**
- Forhandler tariffavtaler
- Gir juridisk rådgivning til medlemsbedrifter
- Politisk påvirkning
- Kurs og kompetanseheving

**Staten som part:**
- Staten er arbeidsgiver for statsansatte
- Har eget forhandlingssystem
- Viktig rolle i trepartssamarbeidet`,
    },
    {
      id: 'salg-service-vg1-7-4-def-2',
      type: 'definition',
      title: 'Tariffavtale',
      content: `En **tariffavtale** er en skriftlig avtale mellom en fagforening og en arbeidsgiverorganisasjon (eller enkeltbedrift) om lønns- og arbeidsvilkår. Tariffavtalen gjelder for en bestemt periode (vanligvis 2 år) og sikrer minimumsrettigheter for de ansatte.`,
    },
    {
      id: 'salg-service-vg1-7-4-text-3',
      type: 'text',
      content: `### Tariffavtaler

**Hva regulerer tariffavtalen:**
- Minstelønn
- Arbeidstid
- Overtidsbetaling
- Ferie og fridager
- Pensjon
- Permisjon

**Tariffoppgjør:**
- Hovedoppgjør hvert andre år (lønn og andre vilkår)
- Mellomoppgjør det andre året (kun lønn)
- Forhandlinger mellom partene
- Mekling hvis de ikke blir enige
- Streik/lockout som siste utvei

**Fredsplikt:**
- Mens tariffavtalen gjelder, er streik forbudt
- Sikrer stabilitet og forutsigbarhet
- Konflikter løses gjennom forhandlinger`,
    },
    {
      id: 'salg-service-vg1-7-4-text-4',
      type: 'text',
      content: `### Trepartssamarbeidet

**De tre partene:**
1. Staten (regjering og Storting)
2. Arbeidstakerorganisasjonene
3. Arbeidsgiverorganisasjonene

**Hvordan det fungerer:**
- Partene møtes regelmessig
- Diskuterer arbeidslivspolitikk
- Inngår avtaler om store endringer
- Eksempel: IA-avtalen (inkluderende arbeidsliv)

**Fordeler:**
- Felles ansvar for arbeidslivet
- Færre konflikter
- Legitimitet til beslutninger
- Stabilitet og forutsigbarhet`,
    },
    {
      id: 'salg-service-vg1-7-4-text-5',
      type: 'text',
      content: `### Roller på arbeidsplassen

**Tillitsvalgt:**
- Valgt av de fagorganiserte på arbeidsplassen
- Representerer ansatte overfor ledelsen
- Forhandler om lokale forhold
- Gir råd til medlemmer

**Verneombud:**
- Lovpålagt i bedrifter med mer enn 10 ansatte
- Ivaretar arbeidstakernes interesser i HMS-saker
- Kan stanse farlig arbeid
- Deltar i HMS-arbeidet

**Arbeidsmiljøutvalg (AMU):**
- Pålagt i bedrifter med mer enn 50 ansatte
- Like mange fra arbeidsgiver og arbeidstaker
- Behandler HMS-saker
- Rådgivende for ledelsen`,
    },
    {
      id: 'salg-service-vg1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Tariffoppgjør',
      problem: 'Det er hovedoppgjør og partene forhandler om ny tariffavtale.',
      solution: `**Prosessen:**
1. Fagforeningen legger frem krav (høyere lønn, bedre pensjonsordning)
2. Arbeidsgiverne legger frem sitt tilbud
3. Forhandlinger over flere dager/uker
4. Hvis enighet: Ny tariffavtale signeres
5. Hvis uenighet: Mekling hos Riksmekleren

**Ved mekling:**
- Mekler forsøker å finne kompromiss
- Frist for å bli enige
- Hvis ikke enighet: Streik eller lockout

**I handelsbransjen:**
- Handel og Kontor (LO) forhandler med Virke
- Viktige temaer: Lørdagstillegg, helgetillegg, pensjonsordning
- Resultatet gjelder for tusenvis av butikkansatte`,
    },
    {
      id: 'salg-service-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva er en tariffavtale?',
        options: [
          { id: 'a', text: 'En individuell arbeidskontrakt', isCorrect: false },
          { id: 'b', text: 'En avtale om lønns- og arbeidsvilkår mellom fagforening og arbeidsgiver', isCorrect: true },
          { id: 'c', text: 'En lov om arbeidstid', isCorrect: false },
          { id: 'd', text: 'En avtale mellom to arbeidstakere', isCorrect: false },
        ],
        solution: 'En tariffavtale er en skriftlig avtale mellom fagforening og arbeidsgiverorganisasjon om lønns- og arbeidsvilkår. Den gjelder for alle medlemmer i den perioden avtalen løper.',
      },
    },
    {
      id: 'salg-service-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        task: 'Hva er forskjellen på en tillitsvalgt og et verneombud?',
        hints: ['Tenk på hva de representerer og hvem som velger dem'],
        solution: 'Tillitsvalgt velges av de fagorganiserte og representerer dem i forhandlinger om lønn og arbeidsvilkår. Verneombud er lovpålagt og velges av alle ansatte - de ivaretar helse, miljø og sikkerhet (HMS) på arbeidsplassen. Tillitsvalgt fokuserer på ansettelsesvilkår, verneombud fokuserer på sikkerhet og arbeidsmiljø.',
      },
    },
    {
      id: 'salg-service-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Forklar hva trepartssamarbeidet er og hvilke fordeler det har.',
        solution: 'Trepartssamarbeidet er samarbeidet mellom staten, arbeidstakerorganisasjonene og arbeidsgiverorganisasjonene om arbeidslivspolitikk. Fordelene er: 1) Felles ansvar for arbeidslivets utfordringer, 2) Færre konflikter fordi partene snakker sammen, 3) Legitimitet - beslutninger er forankret hos alle parter, 4) Stabilitet og forutsigbarhet for bedrifter og ansatte.',
      },
    },
    {
      id: 'salg-service-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Gi tre grunner til at det kan være lurt å være medlem i en fagforening.',
        solution: '1) Bedre lønn - fagforeninger forhandler kollektivt og oppnår ofte bedre vilkår enn individuell forhandling. 2) Juridisk hjelp - hvis du kommer i konflikt med arbeidsgiver, får du hjelp. 3) Trygghet - fagforeningen sikrer at arbeidsplassen følger lover og regler. 4) Forsikringer og andre medlemsfordeler. 5) Innflytelse - du kan påvirke ditt eget arbeidsliv gjennom organisasjonen.',
      },
    },
    {
      id: 'salg-service-vg1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-4-ex-5',
        number: '7.4.5',
        type: 'multiple-choice',
        task: 'Hva betyr "fredsplikt"?',
        options: [
          { id: 'a', text: 'At det aldri kan bli streik', isCorrect: false },
          { id: 'b', text: 'At streik er forbudt mens tariffavtalen gjelder', isCorrect: true },
          { id: 'c', text: 'At partene må være venner', isCorrect: false },
          { id: 'd', text: 'At staten bestemmer lønnen', isCorrect: false },
        ],
        solution: 'Fredsplikt betyr at det ikke er tillatt å streike eller gjennomføre lockout mens en tariffavtale løper. Konflikter i denne perioden må løses gjennom forhandlinger. Fredsplikt sikrer stabilitet.',
      },
    },
    {
      id: 'salg-service-vg1-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Arbeidslivets parter** er arbeidstaker- og arbeidsgiversiden
- **Tariffavtaler** regulerer lønn og arbeidsvilkår kollektivt
- **Trepartssamarbeidet** sikrer dialog mellom stat, arbeidsgivere og arbeidstakere
- **Tillitsvalgt** og **verneombud** har viktige roller lokalt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Tariffavtale | Kollektiv avtale om lønns- og arbeidsvilkår |
| Fagforening | Organisasjon som representerer arbeidstakere |
| Trepartssamarbeid | Samarbeid mellom stat og begge parter i arbeidslivet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: HMS i servicenæringen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_5: TextbookChapter = {
  id: 'salg-service-vg1-7-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.5',
  title: 'HMS i servicenæringen',
  description: 'En innføring i helse, miljø og sikkerhet (HMS) på arbeidsplassen. Du lærer om regelverket, typiske HMS-utfordringer i servicenæringen, og hvordan du kan bidra til et trygt arbeidsmiljø.',
  estimatedMinutes: 45,
  competenceGoals: ['drøfte hvordan HMS-arbeid påvirker arbeidsmiljø og sikkerhet'],
  content: [
    {
      id: 'salg-service-vg1-7-5-intro',
      type: 'text',
      content: `## Trygt på jobb

Alle har rett til et trygt og forsvarlig arbeidsmiljø. HMS-arbeid handler om å forebygge skader, sykdom og ulykker på arbeidsplassen. I servicenæringen møter du andre utfordringer enn i industrien, men HMS er like viktig.

I dette kapittelet skal du lære:
- Hva HMS er og hvorfor det er viktig
- Regelverket for HMS
- Typiske HMS-utfordringer i servicenæringen
- Din rolle i HMS-arbeidet`,
    },
    {
      id: 'salg-service-vg1-7-5-def-1',
      type: 'definition',
      title: 'HMS',
      content: `**HMS** står for Helse, Miljø og Sikkerhet. HMS-arbeid er systematisk arbeid for å sikre at arbeidsplassen er trygg og at ansatte ikke blir syke eller skadet av jobben. Alle virksomheter er pålagt å ha et HMS-system.`,
    },
    {
      id: 'salg-service-vg1-7-5-text-1',
      type: 'text',
      content: `### Regelverket

**Arbeidsmiljøloven:**
- Hovedloven for HMS i Norge
- Krav om fullt forsvarlig arbeidsmiljø
- Arbeidsgivers ansvar for HMS
- Arbeidstakers medvirkningsplikt

**Internkontrollforskriften:**
- Alle virksomheter skal ha internkontroll
- Systematisk HMS-arbeid
- Dokumentasjon av rutiner
- Regelmessig gjennomgang

**Arbeidsgivers plikter:**
- Kartlegge farer og risikoer
- Gjennomføre tiltak
- Sørge for opplæring
- Dokumentere HMS-arbeidet

**Arbeidstakers plikter:**
- Følge sikkerhetsregler
- Bruke verneutstyr
- Melde fra om farer
- Medvirke i HMS-arbeidet`,
    },
    {
      id: 'salg-service-vg1-7-5-text-2',
      type: 'text',
      content: `### HMS-utfordringer i servicenæringen

**Fysisk arbeidsmiljø:**
- Tunge løft (varemottak, flytting)
- Stående arbeid (butikk, servering)
- Repetitive bevegelser (kasse)
- Støy (musikk, kundemengde)
- Inneklima (temperatur, ventilasjon)

**Psykososialt arbeidsmiljø:**
- Tidspress og stress
- Vanskelige kunder
- Ubekvem arbeidstid (kveld, helg)
- Ensomhet (alenearbeid)
- Trusler og vold

**Sikkerhet:**
- Ran og tyveri
- Brann
- Fall og ulykker
- Mat- og hygienesikkerhet`,
    },
    {
      id: 'salg-service-vg1-7-5-text-3',
      type: 'text',
      content: `### Forebygging i praksis

**Fysiske tiltak:**
- Ergonomiske arbeidsmøbler og hjelpemidler
- Riktig løfteteknikk-opplæring
- Variasjon i arbeidsoppgaver
- Pauser og mulighet for å sitte

**Psykososiale tiltak:**
- God arbeidsorganisering
- Opplæring i konflikthåndtering
- Kollegastøtte og debriefing
- Varslingssystem

**Sikkerhetstiltak:**
- Rutiner for kassehåndtering
- Brannøvelser og evakueringsplaner
- Overvåkningskameraer
- Alarmsystemer`,
    },
    {
      id: 'salg-service-vg1-7-5-warning-1',
      type: 'warning',
      title: 'Meld fra om farer',
      content: `Hvis du oppdager noe som kan være farlig, har du plikt til å melde fra. Ikke vent til noe skjer! Meld til leder eller verneombud. Eksempler: Løse ledninger, glatte gulv, defekt utstyr, trusler fra kunder.`,
    },
    {
      id: 'salg-service-vg1-7-5-text-4',
      type: 'text',
      content: `### HMS-organisering på arbeidsplassen

**Verneombud:**
- Pålagt ved mer enn 10 ansatte
- Ivaretar ansattes HMS-interesser
- Kan stanse farlig arbeid
- Deltar i HMS-møter

**Arbeidsmiljøutvalg (AMU):**
- Pålagt ved mer enn 50 ansatte
- Halvparten fra hver side
- Behandler alle HMS-saker
- Gjennomgår ulykker og nestenulykker

**Bedriftshelsetjeneste:**
- Pålagt i noen bransjer
- Rådgivning om HMS
- Helseundersøkelser
- Bistand ved sykefravær`,
    },
    {
      id: 'salg-service-vg1-7-5-example-1',
      type: 'example',
      title: 'Eksempel: HMS-utfordring i butikk',
      problem: 'Flere ansatte klager på ryggproblemer etter tungt arbeid med varemottak.',
      solution: `**Kartlegging:**
- Verneombudet tar opp saken i HMS-møte
- Det viser seg at ansatte løfter tunge kasser feil

**Tiltak:**
1. Opplæring i riktig løfteteknikk
2. Innkjøp av traller og løfteutstyr
3. Nye rutiner: Tunge varer leveres på paller
4. Rotasjon så ikke samme personer alltid tar varemottak

**Oppfølging:**
- Sjekk om ryggplagene reduseres
- Juster tiltak om nødvendig
- Dokumenter i HMS-systemet

**Resultat:**
Færre sykedager på grunn av ryggplager, bedre arbeidsmiljø.`,
    },
    {
      id: 'salg-service-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva er arbeidstakers viktigste plikt i HMS-arbeidet?',
        options: [
          { id: 'a', text: 'Lage HMS-planer', isCorrect: false },
          { id: 'b', text: 'Medvirke og melde fra om farer', isCorrect: true },
          { id: 'c', text: 'Ansette verneombud', isCorrect: false },
          { id: 'd', text: 'Betale for verneutstyr', isCorrect: false },
        ],
        solution: 'Arbeidstaker har medvirkningsplikt - det betyr å følge sikkerhetsregler, bruke verneutstyr, og melde fra om farer og problemer. Arbeidsgiver har hovedansvaret, men alle må bidra.',
      },
    },
    {
      id: 'salg-service-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        task: 'Gi tre eksempler på psykososiale HMS-utfordringer i servicenæringen.',
        hints: ['Tenk på stress, kunder og arbeidstider'],
        solution: '1) Tidspress og stress, spesielt i hektiske perioder. 2) Vanskelige eller truende kunder. 3) Ubekvem arbeidstid (kveld, helg, skiftarbeid). 4) Alenearbeid som kan føles utrygt og ensomt. 5) Manglende anerkjennelse eller støtte fra ledelsen. 6) Uklare forventninger og rollekonflikter.',
      },
    },
    {
      id: 'salg-service-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'Du jobber i en butikk og oppdager at en nødutgang er blokkert av varer. Hva gjør du?',
        solution: '1) Meld fra til leder umiddelbart - dette er en alvorlig sikkerhetsrisiko. 2) Hvis mulig og trygt, fjern varene selv eller be kolleger hjelpe. 3) Kontakt verneombudet hvis dette er et gjentakende problem. 4) Dokumenter hendelsen (ta bilde, noter dato). 5) Blokkerte nødutganger kan koste liv ved brann - dette er alvorlig.',
      },
    },
    {
      id: 'salg-service-vg1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Hva er forskjellen på verneombud og tillitsvalgt?',
        solution: 'Verneombud fokuserer på HMS - helse, miljø og sikkerhet på arbeidsplassen. De kan stanse farlig arbeid og skal velges av alle ansatte. Tillitsvalgt fokuserer på lønn og arbeidsvilkår, velges av fagforeningsmedlemmer, og forhandler med ledelsen. Verneombud er lovpålagt i bedrifter med over 10 ansatte.',
      },
    },
    {
      id: 'salg-service-vg1-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Nevn tre tiltak som kan forebygge ryggskader i butikkarbeid.',
        solution: '1) Opplæring i riktig løfteteknikk (bøy i knærne, hold lasten nær kroppen). 2) Bruk av hjelpemidler som traller, jekketraller og løftebord. 3) Rotasjon av arbeidsoppgaver så ikke samme person alltid tar tunge løft. 4) Dele opp store leveranser. 5) Be om hjelp ved tunge løft - ikke løft tungt alene.',
      },
    },
    {
      id: 'salg-service-vg1-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **HMS** står for Helse, Miljø og Sikkerhet
- **Arbeidsgiver** har hovedansvaret, men alle må medvirke
- **Typiske utfordringer** i service: tunge løft, stress, vanskelige kunder
- **Verneombud** og **AMU** er viktige for HMS-arbeidet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| HMS | Helse, miljø og sikkerhet |
| Internkontroll | Systematisk HMS-arbeid i bedriften |
| Verneombud | Ansattes HMS-representant |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.6: Risikovurdering og forebygging
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_6: TextbookChapter = {
  id: 'salg-service-vg1-7-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.6',
  title: 'Risikovurdering og forebygging',
  description: 'Du lærer å identifisere farer og vurdere risiko på arbeidsplassen. Kapittelet dekker metoder for risikovurdering og hvordan man planlegger og gjennomfører forebyggende tiltak.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive rutiner for beredskap og risikovurdering'],
  content: [
    {
      id: 'salg-service-vg1-7-6-intro',
      type: 'text',
      content: `## Finne farene før de finner deg

Risikovurdering handler om å systematisk tenke gjennom hva som kan gå galt, hvor sannsynlig det er, og hva konsekvensene kan bli. Ved å gjøre dette kan vi sette inn tiltak før ulykker skjer.

I dette kapittelet skal du lære:
- Hva risikovurdering er
- Hvordan identifisere farer
- Metoder for å vurdere risiko
- Planlegging av forebyggende tiltak`,
    },
    {
      id: 'salg-service-vg1-7-6-def-1',
      type: 'definition',
      title: 'Risiko',
      content: `**Risiko** er sannsynligheten for at en uønsket hendelse skal skje, kombinert med konsekvensene hvis den skjer. Risiko = Sannsynlighet x Konsekvens. En **risikovurdering** er en systematisk gjennomgang for å identifisere farer og vurdere risikoen de utgjør.`,
    },
    {
      id: 'salg-service-vg1-7-6-text-1',
      type: 'text',
      content: `### Trinn i risikovurdering

**1. Identifisere farer**
- Hva kan gå galt?
- Gå gjennom arbeidsplassen systematisk
- Spør ansatte om deres erfaringer
- Se på tidligere ulykker og nestenulykker

**2. Vurdere risiko**
- Hvor sannsynlig er det at dette skjer?
- Hva blir konsekvensen hvis det skjer?
- Hvem kan bli rammet?

**3. Prioritere**
- Hvilke risikoer er mest alvorlige?
- Hva må håndteres først?

**4. Planlegge tiltak**
- Hva kan vi gjøre for å redusere risikoen?
- Eliminere, redusere eller beskytte

**5. Gjennomføre og følge opp**
- Sett tiltakene ut i livet
- Sjekk om de virker
- Juster ved behov`,
    },
    {
      id: 'salg-service-vg1-7-6-text-2',
      type: 'text',
      content: `### Risikomatrise

En risikomatrise hjelper deg vurdere og prioritere:

| | Liten konsekvens | Middels konsekvens | Stor konsekvens |
|---|---|---|---|
| **Høy sannsynlighet** | Middels | Høy | Kritisk |
| **Middels sannsynlighet** | Lav | Middels | Høy |
| **Lav sannsynlighet** | Lav | Lav | Middels |

**Kritisk risiko:** Må håndteres umiddelbart
**Høy risiko:** Krever tiltak raskt
**Middels risiko:** Bør følges opp
**Lav risiko:** Akseptabel, men hold øye med`,
    },
    {
      id: 'salg-service-vg1-7-6-text-3',
      type: 'text',
      content: `### Tiltakshierarki

Når du planlegger tiltak, følg denne prioriteringen:

**1. Eliminere**
Fjern faren helt
- Slutte å bruke farlig utstyr
- Endre arbeidsmetode

**2. Substituere**
Erstatt med noe mindre farlig
- Bytte ut kjemikalier
- Bruke lettere materialer

**3. Tekniske tiltak**
Bygg inn sikkerhet
- Rekkverk, sklisikring
- Alarmer og sensorer

**4. Administrative tiltak**
Rutiner og opplæring
- Prosedyrer
- Skilting
- Opplæring

**5. Verneutstyr**
Siste utvei
- Hansker, vernebriller
- Hjelm, sko`,
    },
    {
      id: 'salg-service-vg1-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Risikovurdering av varemottak',
      problem: 'Gjennomfør en enkel risikovurdering av varemottaket i en butikk.',
      solution: `**1. Identifiserte farer:**
- Tunge løft
- Glatte gulv (søl, is om vinteren)
- Trucker/jekketraller i området
- Klemfare ved vareheiser

**2. Risikovurdering:**
| Fare | Sannsynlighet | Konsekvens | Risiko |
|------|---------------|------------|--------|
| Ryggskade fra løft | Høy | Middels | Høy |
| Fall på glatt gulv | Middels | Middels | Middels |
| Påkjørsel av truck | Lav | Stor | Middels |
| Klemskade i heis | Lav | Stor | Middels |

**3. Tiltak:**
- Ryggskade: Løfteteknikk-kurs, hjelpemidler, rotasjon
- Glatt gulv: Rutinemessig mopping, sklisikre sko, matter
- Truck: Fotgjengerområder, refleksvester, opplæring
- Heis: Opplæring, vedlikehold, nødstopp

**4. Oppfølging:**
- Kvartalsvis gjennomgang
- Registrere nestenulykker
- Justere tiltak ved behov`,
    },
    {
      id: 'salg-service-vg1-7-6-tip-1',
      type: 'tip',
      title: 'Involver de ansatte',
      content: `De som jobber med oppgavene hver dag kjenner farene best. Involver ansatte i risikovurderingen - de ser ting ledelsen ikke ser, og tiltakene blir bedre når de som skal følge dem er med på å utforme dem.`,
    },
    {
      id: 'salg-service-vg1-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-6-ex-1',
        number: '7.6.1',
        type: 'multiple-choice',
        task: 'Hva er formelen for risiko?',
        options: [
          { id: 'a', text: 'Risiko = Fare + Tiltak', isCorrect: false },
          { id: 'b', text: 'Risiko = Sannsynlighet x Konsekvens', isCorrect: true },
          { id: 'c', text: 'Risiko = Ulykke - Forebygging', isCorrect: false },
          { id: 'd', text: 'Risiko = Kostnad / Nytte', isCorrect: false },
        ],
        solution: 'Risiko = Sannsynlighet x Konsekvens. En hendelse med høy sannsynlighet og stor konsekvens gir høy risiko. Noe som nesten aldri skjer men har små konsekvenser er lav risiko.',
      },
    },
    {
      id: 'salg-service-vg1-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-6-ex-2',
        number: '7.6.2',
        type: 'classic',
        task: 'Hva betyr det å "eliminere" en fare, og gi et eksempel.',
        hints: ['Tenk på tiltakshierarkiet'],
        solution: 'Å eliminere en fare betyr å fjerne den helt - det er det beste tiltaket. Eksempel: I stedet for å ha ansatte på tak for rengjøring (risiko for fall), bruker man en drone eller robot. Eller: I stedet for at ansatte løfter tunge kasser, leveres varene på paller som flyttes med truck.',
      },
    },
    {
      id: 'salg-service-vg1-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-6-ex-3',
        number: '7.6.3',
        type: 'classic',
        task: 'Du skal gjøre en risikovurdering av kasseområdet i en matbutikk. Identifiser minst tre farer og foreslå tiltak.',
        solution: 'Farer: 1) Repetitive belastningsskader fra skanning - Tiltak: Variasjon i oppgaver, ergonomisk kasse, pauser. 2) Ran/trussel - Tiltak: Kassaskuff med tidsforsinkelse, kameraovervåkning, opplæring, lite kontanter i kassen. 3) Stående arbeid - Tiltak: Mulighet for å sitte, matter som demper, gode sko. 4) Vanskelige kunder - Tiltak: Opplæring i konflikthåndtering, støtte fra kolleger.',
      },
    },
    {
      id: 'salg-service-vg1-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-6-ex-4',
        number: '7.6.4',
        type: 'classic',
        task: 'Forklar tiltakshierarkiet og hvorfor verneutstyr er siste utvei.',
        solution: 'Tiltakshierarkiet: 1) Eliminere - fjern faren helt. 2) Substituere - erstatt med noe mindre farlig. 3) Tekniske tiltak - bygg inn sikkerhet. 4) Administrative tiltak - rutiner og opplæring. 5) Verneutstyr - beskyttelse. Verneutstyr er siste utvei fordi det ikke fjerner faren, bare beskytter mot den. Det kan være ubehagelig, folk glemmer det, og det feiler hvis det ikke brukes riktig. Det er bedre å fjerne faren enn å beskytte mot den.',
      },
    },
    {
      id: 'salg-service-vg1-7-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-6-ex-5',
        number: '7.6.5',
        type: 'classic',
        task: 'En fare har lav sannsynlighet men stor konsekvens (f.eks. brann). Hvordan bør den vurderes og håndteres?',
        solution: 'I risikomatrisen gir dette "middels risiko" - men ved store konsekvenser (tap av liv, alvorlige skader) bør man være ekstra forsiktig. Brann skjer sjelden, men kan ta liv. Derfor: 1) Ta det alvorlig selv om sannsynligheten er lav. 2) Ha gode forebyggende tiltak (brannrutiner, brannalarmer, slokningsutstyr). 3) Ha beredskapsplan. 4) Øv jevnlig (brannøvelser). Noen kaller dette "føre var-prinsippet" - bedre å være forberedt på det usannsynlige når konsekvensene er store.',
      },
    },
    {
      id: 'salg-service-vg1-7-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Risiko** = Sannsynlighet x Konsekvens
- **Risikovurdering** identifiserer farer og vurderer hvor alvorlige de er
- **Risikomatrise** hjelper deg prioritere tiltak
- **Tiltakshierarkiet** sier at eliminering er best, verneutstyr sist

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Risikovurdering | Systematisk gjennomgang av farer |
| Risikomatrise | Verktøy for å prioritere risiko |
| Tiltakshierarki | Prioritering av typer tiltak |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.7: Beredskap og beredskapsplaner
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_7_7: TextbookChapter = {
  id: 'salg-service-vg1-7-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '7.7',
  title: 'Beredskap og beredskapsplaner',
  description: 'Du lærer hva beredskap er og hvordan beredskapsplaner fungerer. Kapittelet dekker ulike typer hendelser, hvordan planer utformes, og din rolle når noe skjer.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive rutiner for beredskap og risikovurdering'],
  content: [
    {
      id: 'salg-service-vg1-7-7-intro',
      type: 'text',
      content: `## Forberedt på det uventede

Selv med god forebygging kan uventede hendelser skje - brann, ran, ulykker eller andre kriser. Beredskap handler om å være forberedt slik at du vet hva du skal gjøre når noe skjer.

I dette kapittelet skal du lære:
- Hva beredskap innebærer
- Innholdet i en beredskapsplan
- Ulike typer hendelser å forberede seg på
- Din rolle i beredskapssituasjoner`,
    },
    {
      id: 'salg-service-vg1-7-7-def-1',
      type: 'definition',
      title: 'Beredskap',
      content: `**Beredskap** er planlegging og forberedelse for å kunne håndtere uønskede hendelser når de oppstår. En **beredskapsplan** er en dokumentert plan som beskriver hva som skal gjøres ved ulike typer hendelser, hvem som har ansvar, og hvordan varsling skal skje.`,
    },
    {
      id: 'salg-service-vg1-7-7-text-1',
      type: 'text',
      content: `### Hendelser å forberede seg på

**Brann:**
- Vanligste beredskapsscenario
- Evakuering, slokking, varsling
- Brannøvelser minst årlig

**Ran og trusler:**
- Spesielt relevant i butikk og servicenæring
- Hvordan oppføre seg, varsling etterpå
- Ivaretakelse av ansatte

**Medisinsk nødsituasjon:**
- Kunde eller kollega blir akutt syk
- Førstehjelp, varsling, HLR
- Hjertestarter

**Ulykker:**
- Fall, klem, kuttskader
- Førstehjelp, varsling
- Sikring av stedet

**Teknisk svikt:**
- Strømbrudd, IT-problemer
- Backup-rutiner
- Manuell drift

**Naturhendelser:**
- Storm, flom, ekstremvær
- Stenging, evakuering
- Sikring av verdier`,
    },
    {
      id: 'salg-service-vg1-7-7-text-2',
      type: 'text',
      content: `### Innhold i en beredskapsplan

**Varsling:**
- Hvem skal varsles først?
- Kontaktinformasjon
- Nødnumre
- Varslingsrutiner internt

**Handling:**
- Hva skal gjøres ved ulike hendelser?
- Trinnvise instruksjoner
- Roller og ansvar

**Evakuering:**
- Evakueringsruter
- Møteplasser
- Telling av personer
- Hvem leder evakueringen?

**Kommunikasjon:**
- Hvem snakker med media?
- Informasjon til pårørende
- Intern kommunikasjon

**Etterarbeid:**
- Debriefing
- Ivaretakelse av ansatte
- Dokumentasjon
- Evaluering og læring`,
    },
    {
      id: 'salg-service-vg1-7-7-text-3',
      type: 'text',
      content: `### Din rolle i beredskap

**Før hendelsen:**
- Kjenn beredskapsplanen
- Vit hvor nødutganger og brannslokkere er
- Kjenn møteplassen
- Delta på øvelser

**Under hendelsen:**
- Behold roen
- Følg planen
- Hjelp andre
- Varsle riktig

**Etter hendelsen:**
- Delta i opptelling/registrering
- Bidra til dokumentasjon
- Søk støtte hvis du trenger det
- Delta i evaluering`,
    },
    {
      id: 'salg-service-vg1-7-7-warning-1',
      type: 'warning',
      title: 'Øvelse er nøkkelen',
      content: `En plan som bare ligger i en skuff hjelper ingen. Beredskap må øves! Brannøvelser, gjennomgang av rutiner, og praktisk trening gjør at du handler riktig når adrenalinet pumper og det er kaos rundt deg.`,
    },
    {
      id: 'salg-service-vg1-7-7-example-1',
      type: 'example',
      title: 'Eksempel: Beredskapsplan for ran',
      problem: 'En butikk trenger en beredskapsplan for ran.',
      solution: `**Under ranet:**
1. Oppfør deg rolig - ikke gjør motstand
2. Gjør som du får beskjed om
3. Observer gjerningspersonen (klær, høyde, stemme)
4. Ikke sett deg selv i fare for penger/varer
5. Aktiver stille alarm hvis mulig og trygt

**Etter ranet:**
1. Ring 112 umiddelbart når det er trygt
2. Lås dørene
3. Ikke rør noe på "åstedet"
4. Noter ned alt du husker
5. Ta vare på vitner - be dem bli

**Varsling:**
- 112 Politi
- Butikksjef: [telefon]
- Distriktsjef: [telefon]

**Ivaretakelse etterpå:**
- Ingen jobber alene resten av dagen
- Tilbud om samtale
- Sykemelding ved behov
- Bedriftshelsetjeneste kontaktes

**Kommunikasjon:**
- Bare butikksjef/distriktsjef uttaler seg til media
- Ikke legg ut noe på sosiale medier`,
    },
    {
      id: 'salg-service-vg1-7-7-text-4',
      type: 'text',
      content: `### Øvelser og testing

**Typer øvelser:**
- Brannøvelser (full evakuering)
- Skrivebordsøvelser (gå gjennom planen)
- Rollespill (simuler hendelser)
- Varslingskjeder (sjekk at alle nås)

**Hvor ofte:**
- Brannøvelser: Minimum årlig
- Gjennomgang av planer: Årlig
- Oppdatering: Ved endringer i lokaler/bemanning

**Evaluering av øvelser:**
- Hva fungerte bra?
- Hva kan forbedres?
- Er planen oppdatert?
- Trenger noen mer opplæring?`,
    },
    {
      id: 'salg-service-vg1-7-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-7-ex-1',
        number: '7.7.1',
        type: 'multiple-choice',
        task: 'Hva er det viktigste du gjør under et ran?',
        options: [
          { id: 'a', text: 'Prøve å stoppe ranet', isCorrect: false },
          { id: 'b', text: 'Oppføre deg rolig og ikke gjøre motstand', isCorrect: true },
          { id: 'c', text: 'Ringe politiet med en gang', isCorrect: false },
          { id: 'd', text: 'Ta bilder av gjerningspersonen', isCorrect: false },
        ],
        solution: 'Under et ran er din sikkerhet viktigst. Oppfør deg rolig, gjør som du får beskjed om, og ikke sett deg selv i fare. Penger og varer kan erstattes, menneskeliv kan ikke. Ring politiet først når det er trygt.',
      },
    },
    {
      id: 'salg-service-vg1-7-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-7-ex-2',
        number: '7.7.2',
        type: 'classic',
        task: 'Hvorfor er det viktig å ha en fast møteplass ved evakuering?',
        hints: ['Tenk på opptelling og sikkerhet'],
        solution: 'En fast møteplass gjør at: 1) Alle vet hvor de skal gå. 2) Man kan telle opp og sjekke at alle er ute. 3) Brannvesenet vet hvor de finner folk. 4) Ingen går tilbake inn i bygningen for å lete etter andre. 5) Man unngår kaos og forvirring.',
      },
    },
    {
      id: 'salg-service-vg1-7-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-7-ex-3',
        number: '7.7.3',
        type: 'classic',
        task: 'Hva bør en beredskapsplan inneholde? Nevn minst fem punkter.',
        solution: '1) Varslingslister med kontaktinformasjon og nødnumre. 2) Handlingsinstruksjoner for ulike hendelser. 3) Evakueringsplan med ruter og møteplass. 4) Roller og ansvar - hvem gjør hva. 5) Kommunikasjonsplan - hvem snakker med media/pårørende. 6) Rutiner for etterarbeid og ivaretakelse. 7) Kart over lokalet med nødutganger og brannslokkere.',
      },
    },
    {
      id: 'salg-service-vg1-7-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-7-ex-4',
        number: '7.7.4',
        type: 'classic',
        task: 'Hvorfor er det viktig å øve på beredskapsplanen, og ikke bare ha den i en perm?',
        solution: 'I en krisesituasjon handler man ofte på autopilot - adrenalinet pumper og det er vanskelig å tenke klart. Hvis du har øvd, sitter handlingene i kroppen. Øvelser avdekker også svakheter i planen (er dørene blokkert? fungerer alarmen? vet alle hvor møteplassen er?). I tillegg blir nye ansatte kjent med rutinene, og alle frisker opp kunnskapen.',
      },
    },
    {
      id: 'salg-service-vg1-7-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-7-7-ex-5',
        number: '7.7.5',
        type: 'classic',
        task: 'Du er på jobb og brannalarmen går. Beskriv trinn for trinn hva du gjør.',
        solution: '1) Avbryt det du holder på med. 2) Vurder raskt: Ser du røyk eller flammer? 3) Start evakuering rolig - hjelp kunder mot nærmeste nødutgang. 4) Ikke bruk heis. 5) Sjekk at lokaler du passerer er tomme (hvis trygt). 6) Gå til møteplassen. 7) Meld fra om du har sett noe eller savner noen. 8) Ikke gå inn igjen før brannvesenet gir klarsignal.',
      },
    },
    {
      id: 'salg-service-vg1-7-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Beredskap** er å være forberedt på uventede hendelser
- **Beredskapsplaner** beskriver hva som skal gjøres ved ulike hendelser
- **Øvelser** er avgjørende for at planen skal virke
- **Din rolle** er å kjenne planen, følge den, og hjelpe andre

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Beredskap | Planlegging for å håndtere uønskede hendelser |
| Beredskapsplan | Dokumentert plan for krisehåndtering |
| Møteplass | Fast sted å samles ved evakuering |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL7_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_7_1,
  CHAPTER_SALG_SERVICE_VG1_7_2,
  CHAPTER_SALG_SERVICE_VG1_7_3,
  CHAPTER_SALG_SERVICE_VG1_7_4,
  CHAPTER_SALG_SERVICE_VG1_7_5,
  CHAPTER_SALG_SERVICE_VG1_7_6,
  CHAPTER_SALG_SERVICE_VG1_7_7,
];

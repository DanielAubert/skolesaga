/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3 valgfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Avansert medieanalyse
// ============================================================================

export const CHAPTER_MEDIEINFO_2_1: TextbookChapter = {
  id: 'medieinfo-2-1',
  courseId: 'medieinfo-2',
  chapterNumber: '1',
  title: 'Avansert medieanalyse',
  description: 'Fordypning i metoder og teorier for å analysere medietekster på et avansert nivå.',
  estimatedMinutes: 90,
  competenceGoals: [
    'anvende ulike analysemetoder på komplekse medietekster',
    'drøfte hvordan medietekster skaper mening gjennom multimodale virkemidler',
  ],
  content: [
    {
      id: 'medieinfo-2-1-intro',
      type: 'text',
      content: `## Avansert medieanalyse

Medieanalyse handler om å undersøke hvordan medietekster skaper mening. I dette kapitlet fordyper vi oss i avanserte analysemetoder som går utover den grunnleggende tekstanalysen.

**Hva er en medietekst?**
En medietekst er ethvert medieprodukt som formidler mening - fra avisartikler og TV-programmer til sosiale medier og dataspill.

**Hvorfor analysere medier?**
- Forstå hvordan mediene påvirker oss
- Avsløre skjulte budskap og ideologier
- Bli kritiske mediebrukere
- Forstå samfunnets maktstrukturer`,
    },
    {
      id: 'medieinfo-2-1-def-1',
      type: 'definition',
      title: 'Semiotikk og tegnanalyse',
      content: `**Semiotikk:**
Læren om tegn og tegnenes betydning. Grunnlagt av Ferdinand de Saussure og Charles Sanders Peirce.

**Signifikant (uttrykk):**
Den fysiske formen til tegnet - lyden, bildet eller ordet.

**Signifikat (innhold):**
Den mentale forestillingen eller betydningen tegnet vekker.

**Denotasjon:**
Den bokstavelige, direkte betydningen av et tegn.

**Konnotasjon:**
De kulturelle og emosjonelle assosiasjonene et tegn vekker.

**Myte (Roland Barthes):**
Når konnotasjoner blir så naturlige at de fremstår som selvfølgelige sannheter.`,
    },
    {
      id: 'medieinfo-2-1-def-2',
      type: 'definition',
      title: 'Multimodal analyse',
      content: `**Multimodalitet:**
Kombinasjonen av ulike uttrykksmåter (modaliteter) i en tekst.

**Modaliteter:**
- Verbaltekst (skrift og tale)
- Bilder (foto, illustrasjoner, grafikk)
- Lyd (musikk, lydeffekter, stemme)
- Bevegelse (video, animasjon)
- Layout og design

**Samspill mellom modaliteter:**
- Forsterkning: Modalitetene støtter samme budskap
- Utfylling: Modalitetene bidrar med ulik informasjon
- Kontrast: Modalitetene motsier hverandre

**Affordans:**
Hva en modalitet er egnet til å uttrykke.`,
    },
    {
      id: 'medieinfo-2-1-def-3',
      type: 'definition',
      title: 'Diskursanalyse',
      content: `**Diskurs:**
Måter å snakke om og forstå verden på innenfor et bestemt område.

**Diskursanalyse:**
Metode for å avdekke hvordan språkbruk former virkelighetsoppfatninger og maktforhold.

**Michel Foucault:**
Diskurser definerer hva som er sant, normalt og akseptabelt i et samfunn.

**Hegemonisk diskurs:**
Den dominerende måten å forstå et fenomen på.

**Motdiskurs:**
Alternative måter å forstå fenomener på som utfordrer hegemoniet.

**Intertekstualitet:**
Hvordan tekster refererer til og bygger på andre tekster.`,
    },
    {
      id: 'medieinfo-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Semiotisk analyse av reklame',
      problem: 'Analyser en parfymereklame semiotisk.',
      solution: `**Semiotisk analyse av parfymereklame:**

**Denotasjon (bokstavelig innhold):**
- En kvinne i en svart kjole
- Et parfymeflaske i forgrunnen
- Mørk, elegant bakgrunn

**Konnotasjon (assosiasjoner):**
- Svart kjole: Eleganse, makt, mystikk
- Kvinnens positur: Selvtillit, sensualitet
- Belysning: Glamour, eksklusivitet
- Flaskens design: Luksus, sofistikert smak

**Myte:**
Reklamen bygger på myten om at skjønnhet og suksess kan kjøpes. Ved å bruke denne parfymen, kan du bli som modellen.

**Ideologi:**
Forbrukskultur - lykke oppnås gjennom konsum av luksusvarer.`,
    },
    {
      id: 'medieinfo-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er denotasjon i semiotisk analyse?',
        options: [
          'Den bokstavelige, direkte betydningen av et tegn',
          'De kulturelle assosiasjonene et tegn vekker',
          'En naturalisert kulturell myte',
          'Samspillet mellom ulike modaliteter',
        ],
        correctAnswer: 'Den bokstavelige, direkte betydningen av et tegn',
        solution: 'Denotasjon er den bokstavelige, direkte betydningen av et tegn, i motsetning til konnotasjon som er de kulturelle og emosjonelle assosiasjonene.',
      },
    },
    {
      id: 'medieinfo-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvem regnes som grunnlegger av semiotikken?',
        options: [
          'Ferdinand de Saussure og Charles Sanders Peirce',
          'Roland Barthes og Michel Foucault',
          'Marshall McLuhan og Neil Postman',
          'Jürgen Habermas og Noam Chomsky',
        ],
        correctAnswer: 'Ferdinand de Saussure og Charles Sanders Peirce',
        solution: 'Ferdinand de Saussure og Charles Sanders Peirce regnes begge som grunnleggere av semiotikken, men fra ulike tradisjoner.',
      },
    },
    {
      id: 'medieinfo-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva innebærer multimodalitet?',
        options: [
          'Kombinasjonen av ulike uttrykksmåter i en tekst',
          'Analyse av kun verbaltekst',
          'Studiet av medienes økonomiske strukturer',
          'Undersøkelse av medienes historiske utvikling',
        ],
        correctAnswer: 'Kombinasjonen av ulike uttrykksmåter i en tekst',
        solution: 'Multimodalitet handler om hvordan ulike modaliteter som tekst, bilde, lyd og layout kombineres for å skape mening.',
      },
    },
    {
      id: 'medieinfo-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en reklame og gjennomfør en semiotisk analyse. Identifiser denotasjon, konnotasjon og eventuelle myter.',
        hints: ['Start med å beskrive det bokstavelige innholdet', 'Tenk på hvilke assosiasjoner elementene vekker'],
        solution: 'Analysen bør inneholde en beskrivelse av det bokstavelige innholdet (denotasjon), de kulturelle assosiasjonene (konnotasjon), og eventuelle naturaliserte kulturelle forestillinger (myter) reklamen bygger på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er en hegemonisk diskurs?',
        options: [
          'Den dominerende måten å forstå et fenomen på',
          'En alternativ forståelse som utfordrer makten',
          'En nøytral vitenskapelig beskrivelse',
          'En historisk tilnærming til medieanalyse',
        ],
        correctAnswer: 'Den dominerende måten å forstå et fenomen på',
        solution: 'En hegemonisk diskurs er den dominerende måten å forstå et fenomen på, som ofte fremstår som naturlig og selvfølgelig.',
      },
    },
    {
      id: 'medieinfo-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjør en multimodal analyse av en nyhetsartikkel fra en nettavis. Hvordan samspiller tekst, bilder og layout?',
        hints: ['Se på hvordan overskrift og bilde forsterker hverandre', 'Vurder layoutens betydning for lesemåten'],
        solution: 'Analysen bør beskrive de ulike modalitetene, vurdere hvordan de samspiller (forsterkning, utfylling eller kontrast), og drøfte hvordan dette påvirker hvordan vi forstår nyheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Medieøkonomi og mediemarked
// ============================================================================

export const CHAPTER_MEDIEINFO_2_2: TextbookChapter = {
  id: 'medieinfo-2-2',
  courseId: 'medieinfo-2',
  chapterNumber: '2',
  title: 'Medieøkonomi og mediemarked',
  description: 'Forstå medienes økonomiske grunnlag, eierskap og markedsstrukturer.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere medienes økonomiske vilkår og konsekvenser for innholdsproduksjon',
    'drøfte medieeierskap og maktkonsentrasjon i mediebransjen',
  ],
  content: [
    {
      id: 'medieinfo-2-2-intro',
      type: 'text',
      content: `## Medieøkonomi og mediemarked

Mediene opererer i et marked der de må tjene penger for å overleve. Hvordan mediene finansieres, påvirker innholdet de produserer og deres rolle i samfunnet.

**Medienes økonomiske utfordringer:**
- Digital transformasjon har endret inntektsmodellene
- Konkurranse fra globale teknologiselskaper
- Fallende reklameinntekter for tradisjonelle medier
- Nye betalingsmodeller som abonnement og betalt innhold

**Hvorfor medieøkonomi er viktig:**
- Økonomi påvirker redaksjonelle valg
- Eierskapsstrukturer kan true mediemangfold
- Forstå medienes rolle i demokratiet`,
    },
    {
      id: 'medieinfo-2-2-def-1',
      type: 'definition',
      title: 'Medienes finansieringsmodeller',
      content: `**Reklamefinansiering:**
Mediet selger publikums oppmerksomhet til annonsører. Brukes av kommersielle TV-kanaler, gratisaviser og mange nettsteder.

**Brukerfinansiering:**
Publikum betaler direkte gjennom abonnement, løssalg eller pay-per-view.

**Offentlig finansiering:**
Staten finansierer medier gjennom lisensavgift eller bevilgninger. NRK er det viktigste eksempelet i Norge.

**Mediestøtte:**
Statlige støtteordninger til medier for å sikre mangfold og kvalitet.

**Hybrid-modeller:**
Kombinasjon av flere finansieringskilder. Vanlig for de fleste medier i dag.

**Freemium:**
Gratis grunninnhold med betaling for premiuminnhold.`,
    },
    {
      id: 'medieinfo-2-2-def-2',
      type: 'definition',
      title: 'Medieeierskap',
      content: `**Konsentrasjon:**
Når få aktører kontrollerer store deler av mediemarkedet.

**Horisontal integrasjon:**
Når ett selskap eier flere medier av samme type (f.eks. flere aviser).

**Vertikal integrasjon:**
Når ett selskap kontrollerer hele verdikjeden fra produksjon til distribusjon.

**Krysseierskap:**
Når samme eier har interesser i ulike medietyper.

**Mediekonsern:**
Store selskaper som eier flere ulike medievirksomheter.

**Mediekonsentrasjon i Norge:**
Schibsted, Amedia og Polaris Media dominerer avismarkedet.`,
    },
    {
      id: 'medieinfo-2-2-def-3',
      type: 'definition',
      title: 'Plattformøkonomi',
      content: `**Plattformselskaper:**
Selskaper som kobler sammen ulike brukergrupper (f.eks. Google, Facebook, Amazon).

**Nettverkseffekter:**
Jo flere som bruker plattformen, jo mer verdifull blir den.

**Oppmerksomhetsøkonomi:**
Konkurranse om brukernes oppmerksomhet som kan omsettes i reklameinntekter.

**Algoritmestyring:**
Algoritmer bestemmer hvilket innhold brukerne ser.

**Datadreven annonsering:**
Målrettet reklame basert på brukerdata.

**Winner-takes-all:**
Tendensen til at én plattform dominerer hvert marked.`,
    },
    {
      id: 'medieinfo-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Avisenes digitale transformasjon',
      problem: 'Hvordan har digitaliseringen påvirket avisenes økonomi?',
      solution: `**Avisenes digitale utfordringer:**

**Før digitaliseringen:**
- Stabile inntekter fra løssalg, abonnement og rubrikkannonser
- Lokalt monopol eller duopol
- Høye etableringsbarrierer

**Etter digitaliseringen:**
- Rubrikkannonser flyttet til Finn.no og lignende
- Fallende papiropplag
- Gratisinnhold skapte forventning om gratis nyheter
- Konkurranse fra globale aktører om reklamekronene

**Løsninger:**
- Digitale abonnementsmodeller (betalingsmur)
- Diversifisering av inntektskilder
- Konsolidering og kostnadsreduksjoner
- Nisjefokus og lokal forankring

**Resultat:**
Færre journalister, men nye muligheter for direkte dialog med leserne og datadrevet innholdsproduksjon.`,
    },
    {
      id: 'medieinfo-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva innebærer horisontal integrasjon i mediesammenheng?',
        options: [
          'Når ett selskap eier flere medier av samme type',
          'Når ett selskap kontrollerer hele verdikjeden',
          'Når staten eier mediene',
          'Når medier finansieres av reklame',
        ],
        correctAnswer: 'Når ett selskap eier flere medier av samme type',
        solution: 'Horisontal integrasjon innebærer at ett selskap eier flere medier av samme type, for eksempel flere aviser.',
      },
    },
    {
      id: 'medieinfo-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er nettverkseffekter?',
        options: [
          'Jo flere som bruker en plattform, jo mer verdifull blir den',
          'Når flere medier samarbeider om innhold',
          'Effekten av digital annonsering',
          'Spredning av nyheter i sosiale nettverk',
        ],
        correctAnswer: 'Jo flere som bruker en plattform, jo mer verdifull blir den',
        solution: 'Nettverkseffekter betyr at en plattforms verdi øker med antall brukere, noe som gir store plattformer konkurransefordeler.',
      },
    },
    {
      id: 'medieinfo-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilke tre konsern dominerer det norske avismarkedet?',
        options: [
          'Schibsted, Amedia og Polaris Media',
          'NRK, TV 2 og Discovery',
          'Google, Facebook og Microsoft',
          'VG, Dagbladet og Aftenposten',
        ],
        correctAnswer: 'Schibsted, Amedia og Polaris Media',
        solution: 'Schibsted, Amedia og Polaris Media er de tre store mediekonsernene som dominerer det norske avismarkedet.',
      },
    },
    {
      id: 'medieinfo-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft hvordan medienes finansieringsmodell kan påvirke det redaksjonelle innholdet.',
        hints: ['Tenk på forskjellen mellom reklamefinansiering og offentlig finansiering'],
        solution: 'Reklamefinansierte medier kan prioritere innhold som tiltrekker store publikum og er annonsørvennlig. Offentlig finansierte medier har større frihet til å prioritere samfunnsoppdrag og mindre kommersielt innhold, men kan kritiseres for statlig innflytelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er oppmerksomhetsøkonomi?',
        options: [
          'Konkurranse om brukernes oppmerksomhet som kan omsettes i reklameinntekter',
          'Økonomisk støtte til kvalitetsjournalistikk',
          'Betaling for premium-innhold',
          'Statlig regulering av mediemarkedet',
        ],
        correctAnswer: 'Konkurranse om brukernes oppmerksomhet som kan omsettes i reklameinntekter',
        solution: 'Oppmerksomhetsøkonomi beskriver hvordan medier og plattformer konkurrerer om brukernes begrensede oppmerksomhet, som deretter kan selges til annonsører.',
      },
    },
    {
      id: 'medieinfo-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser et norsk mediekonsern. Hvilke medier eier det, og hva kan være konsekvensene av denne eierkonsentrasjonen?',
        hints: ['Se på Schibsted, Amedia eller Polaris Media'],
        solution: 'Analysen bør beskrive konsernets eierskap, drøfte fordeler (ressursdeling, profesjonalisering) og ulemper (redusert mangfold, maktkonsentrasjon) ved eierkonsentrasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Medievitenskap og forskning
// ============================================================================

export const CHAPTER_MEDIEINFO_2_3: TextbookChapter = {
  id: 'medieinfo-2-3',
  courseId: 'medieinfo-2',
  chapterNumber: '3',
  title: 'Medievitenskap og forskning',
  description: 'Introduksjon til medievitenskapelige teorier og forskningsmetoder.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for sentrale medievitenskapelige teorier og perspektiver',
    'anvende forskningsmetoder på medieproblematikk',
  ],
  content: [
    {
      id: 'medieinfo-2-3-intro',
      type: 'text',
      content: `## Medievitenskap som fagfelt

Medievitenskap er et tverrfaglig felt som studerer medier, kommunikasjon og deres rolle i samfunnet. Faget kombinerer perspektiver fra humaniora og samfunnsvitenskap.

**Medievitenskapens hovedområder:**
- Medietekstanalyse (hva mediene sier)
- Medieproduksjon (hvordan mediene lages)
- Mediebruk (hvordan vi bruker mediene)
- Medieeffekter (hvordan mediene påvirker oss)
- Mediehistorie (hvordan mediene har utviklet seg)

**Hvorfor studere medievitenskap?**
- Forstå medienes rolle i samfunnet
- Bli kritiske mediebrukere og -produsenter
- Bidra til demokratisk debatt`,
    },
    {
      id: 'medieinfo-2-3-def-1',
      type: 'definition',
      title: 'Klassiske medieteorier',
      content: `**Frankfurterskolen (kritisk teori):**
Adorno og Horkheimer kritiserte massekulturens standardisering og kommersialisering. Mediene fungerer som ideologisk makt.

**Marshall McLuhan:**
"Mediet er budskapet" - mediets form påvirker oss mer enn innholdet. Skillet mellom "varme" og "kalde" medier.

**Kultiveringsteori (Gerbner):**
Langvarig TV-eksponering påvirker virkelighetsoppfatningen. "Mean world syndrome".

**Dagsordenfunksjon (McCombs & Shaw):**
Mediene bestemmer ikke hva vi skal mene, men hva vi skal mene noe om.

**Uses and gratifications:**
Fokus på hva publikum gjør med mediene, ikke bare hva mediene gjør med publikum.`,
    },
    {
      id: 'medieinfo-2-3-def-2',
      type: 'definition',
      title: 'Moderne medieteorier',
      content: `**Medialisering:**
Hvordan medielogikk påvirker andre samfunnsområder som politikk, religion og hverdagsliv.

**Konvergenskultur (Henry Jenkins):**
Sammensmelting av gamle og nye medier, der publikum aktivt deltar i innholdsproduksjon.

**Nettverkssamfunnet (Manuel Castells):**
Samfunnet organisert rundt informasjonsnettverk. Makt til de som kontrollerer nettverkene.

**Filterbobler (Eli Pariser):**
Algoritmer skaper ekkokamre der vi bare eksponeres for innhold som bekrefter våre synspunkter.

**Affordanser:**
Hva en medieteknologi muliggjør og begrenser.`,
    },
    {
      id: 'medieinfo-2-3-def-3',
      type: 'definition',
      title: 'Forskningsmetoder',
      content: `**Kvantitative metoder:**
Tallbasert forskning som spørreundersøkelser, innholdsanalyse og eksperimenter.

**Kvalitative metoder:**
Dybdeforståelse gjennom intervjuer, observasjon og tekstanalyse.

**Innholdsanalyse:**
Systematisk kategorisering og telling av innholdselementer.

**Resepsjonsanalyse:**
Studie av hvordan publikum tolker og bruker medieinnhold.

**Netnografi:**
Etnografisk studie av nettsamfunn og digital kultur.

**Eksperiment:**
Kontrollert test av mediepåvirkning under manipulerte forhold.`,
    },
    {
      id: 'medieinfo-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Dagsordenfunksjon',
      problem: 'Hvordan kan dagsordenfunksjonen forklare medienes makt?',
      solution: `**Dagsordenfunksjonen (agenda-setting):**

**Teorien:**
McCombs og Shaw studerte presidentvalget i 1968 og fant at det var sterk sammenheng mellom hvilke saker mediene dekket mye, og hvilke saker velgerne mente var viktigst.

**Første nivå:**
Mediene påvirker hvilke saker vi oppfatter som viktige. Saker som får mye dekning, oppfattes som viktigere enn saker som ignoreres.

**Andre nivå (framing):**
Mediene påvirker også hvordan vi tenker om sakene gjennom vinkling og perspektivvalg.

**Eksempel:**
Hvis mediene dekker kriminalitet intensivt, vil folk oppfatte kriminalitet som et stort problem - uavhengig av faktisk kriminalitetsstatistikk.

**Kritikk:**
- Effekten varierer mellom saker og grupper
- I sosiale medier-alderen har publikum flere kilder
- Kausaliteten kan gå begge veier`,
    },
    {
      id: 'medieinfo-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva mente Marshall McLuhan med "mediet er budskapet"?',
        options: [
          'Mediets form påvirker oss mer enn innholdet',
          'Innholdet i mediene er det viktigste',
          'Alle medier har samme effekt',
          'Budskapet er viktigere enn avsender',
        ],
        correctAnswer: 'Mediets form påvirker oss mer enn innholdet',
        solution: 'McLuhan mente at mediets teknologiske form har større betydning for samfunnet enn det spesifikke innholdet som formidles.',
      },
    },
    {
      id: 'medieinfo-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva innebærer dagsordenfunksjonen?',
        options: [
          'Mediene påvirker hvilke saker vi oppfatter som viktige',
          'Mediene bestemmer hva vi skal mene',
          'Publikum styrer medienes innhold',
          'Mediene er nøytrale formidlere',
        ],
        correctAnswer: 'Mediene påvirker hvilke saker vi oppfatter som viktige',
        solution: 'Dagsordenfunksjonen (agenda-setting) innebærer at mediene ikke bestemmer hva vi skal mene, men hva vi skal mene noe om.',
      },
    },
    {
      id: 'medieinfo-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er filterbobler ifølge Eli Pariser?',
        options: [
          'Algoritmer skaper ekkokamre der vi kun eksponeres for bekreftende innhold',
          'Fysiske barrierer som hindrer medietilgang',
          'Redaksjonelle valg om hva som skal dekkes',
          'Tekniske feil i medieplattformer',
        ],
        correctAnswer: 'Algoritmer skaper ekkokamre der vi kun eksponeres for bekreftende innhold',
        solution: 'Filterbobler oppstår når algoritmer personaliserer innholdet vi ser basert på tidligere atferd, slik at vi kun eksponeres for synspunkter som bekrefter våre egne.',
      },
    },
    {
      id: 'medieinfo-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva kritiserte Frankfurterskolen?',
        options: [
          'Massekulturens standardisering og kommersialisering',
          'For lite underholdning i mediene',
          'For mye offentlig finansiering av medier',
          'Mangelen på digitale medier',
        ],
        correctAnswer: 'Massekulturens standardisering og kommersialisering',
        solution: 'Frankfurterskolen (Adorno og Horkheimer) kritiserte massekulturen for å standardisere og kommersialisere kulturuttrykk, og dermed fungere som ideologisk kontroll.',
      },
    },
    {
      id: 'medieinfo-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg én medieteori og forklar hvordan den kan brukes til å analysere et aktuelt mediefenomen.',
        hints: ['Du kan velge dagsordenfunksjonen, kultiveringsteori eller filterbobler'],
        solution: 'Svaret bør presentere teorien, forklare hovedpoengene, og anvende teorien på et konkret eksempel fra dagens mediebilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design et lite forskningsprosjekt om mediebruk blant ungdom. Hvilken metode ville du brukt, og hvorfor?',
        hints: ['Vurder fordeler og ulemper med kvantitative og kvalitative metoder'],
        solution: 'Prosjektbeskrivelsen bør inkludere problemstilling, valg av metode med begrunnelse, utvalg og praktisk gjennomføring. Kvantitative metoder egner seg for å kartlegge omfang, kvalitative for å forstå motivasjoner og opplevelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Nyhetsproduksjon
// ============================================================================

export const CHAPTER_MEDIEINFO_2_4: TextbookChapter = {
  id: 'medieinfo-2-4',
  courseId: 'medieinfo-2',
  chapterNumber: '4',
  title: 'Nyhetsproduksjon',
  description: 'Forstå prosessene bak nyhetsproduksjon og journalistikkens rolle i samfunnet.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere nyhetsproduksjon og redaksjonelle prosesser',
    'vurdere journalistikkens samfunnsrolle og etiske utfordringer',
  ],
  content: [
    {
      id: 'medieinfo-2-4-intro',
      type: 'text',
      content: `## Nyhetsjournalistikk

Nyheter er informasjon om aktuelle hendelser som er relevante for publikum. Journalistikken har en viktig rolle som "vaktbikkje" i demokratiet.

**Journalistikkens samfunnsoppdrag:**
- Informere borgerne
- Avdekke kritikkverdige forhold
- Være arena for debatt
- Bidra til maktspredning

**Nyhetskriterier:**
Hva gjør en hendelse til en nyhet? Journalister vurderer saker ut fra etablerte kriterier som bestemmer hva som blir dekket og hvordan.`,
    },
    {
      id: 'medieinfo-2-4-def-1',
      type: 'definition',
      title: 'Nyhetskriterier',
      content: `**Aktualitet:**
Nyheten er fersk og relevant akkurat nå.

**Vesentlighet:**
Saken har betydning for mange mennesker.

**Identifikasjon:**
Publikum kan kjenne seg igjen - geografisk, kulturelt eller følelsesmessig.

**Sensasjon:**
Det uvanlige, dramatiske eller overraskende.

**Konflikt:**
Uenighet, kamp eller motsetninger.

**Elitepersoner:**
Kjente personer, makthavere eller eksperter.

**Negativitet:**
Dårlige nyheter får ofte mer oppmerksomhet.

**Kontinuitet:**
Oppfølging av saker som allerede er etablert.`,
    },
    {
      id: 'medieinfo-2-4-def-2',
      type: 'definition',
      title: 'Journalistiske sjangre',
      content: `**Nyhetsartikkel:**
Faktabasert formidling av aktuelle hendelser. Følger ofte nyhetspyramiden.

**Feature:**
Fordypende journalistikk med personlig vinkling og litterære virkemidler.

**Reportasje:**
Journalisten er til stede og formidler stemning og detaljer.

**Kommentar:**
Journalistens eller redaksjonens meninger.

**Portrett:**
Nærbilde av en person gjennom intervju og research.

**Gravejournalistikk:**
Undersøkende journalistikk som avdekker kritikkverdige forhold.

**Datajournalistikk:**
Bruk av data og visualisering i journalistisk formidling.`,
    },
    {
      id: 'medieinfo-2-4-def-3',
      type: 'definition',
      title: 'Presseetikk',
      content: `**Vær Varsom-plakaten:**
Pressens etiske regelverk i Norge. Vedtas av Norsk Presseforbund.

**Pressens Faglige Utvalg (PFU):**
Klageorgan som behandler brudd på god presseskikk.

**Kildekritikk:**
Vurdering av kilders pålitelighet og motivasjon.

**Kildevern:**
Journalisters rett og plikt til å beskytte anonyme kilder.

**Samtidig imøtegåelse:**
Den som anklages, skal få svare i samme sak.

**Saklighet:**
Skille mellom fakta og kommentar, unngå feilaktige opplysninger.`,
    },
    {
      id: 'medieinfo-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Nyhetspyramiden',
      problem: 'Hva er nyhetspyramiden og hvorfor brukes den?',
      solution: `**Nyhetspyramiden:**

**Struktur:**
Nyhetsartikler bygges opp med det viktigste først og detaljer lenger ned.

**Ingressen:**
Svarer på de grunnleggende spørsmålene: Hvem, hva, hvor, når, hvorfor og hvordan.

**Brødteksten:**
Utdyper med bakgrunn, sitater og detaljer i synkende viktighet.

**Hvorfor denne strukturen?**
1. Leseren får det viktigste raskt
2. Redaktøren kan kutte fra bunnen
3. Tilpasset scanning-lesing
4. Fungerer for ulike plattformer

**Digital tilpasning:**
I digitale medier suppleres pyramiden med:
- Klikkbare overskrifter
- Multimediale elementer
- Lenker til relatert innhold`,
    },
    {
      id: 'medieinfo-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er Vær Varsom-plakaten?',
        options: [
          'Pressens etiske regelverk i Norge',
          'En lov som regulerer mediebransjen',
          'Et statlig organ for pressekontroll',
          'En internasjonal pressekonvensjon',
        ],
        correctAnswer: 'Pressens etiske regelverk i Norge',
        solution: 'Vær Varsom-plakaten er pressens selvjustis - et etisk regelverk som norske medier frivillig forplikter seg til å følge.',
      },
    },
    {
      id: 'medieinfo-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva innebærer prinsippet om samtidig imøtegåelse?',
        options: [
          'Den som anklages skal få svare i samme sak',
          'Alle parter skal uttale seg før publisering',
          'Journalisten må være til stede ved hendelsen',
          'Kilder må identifiseres med fullt navn',
        ],
        correctAnswer: 'Den som anklages skal få svare i samme sak',
        solution: 'Samtidig imøtegåelse betyr at den som utsettes for sterke beskyldninger, skal få mulighet til å svare i samme artikkel eller innslag.',
      },
    },
    {
      id: 'medieinfo-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner gravejournalistikk?',
        options: [
          'Undersøkende journalistikk som avdekker kritikkverdige forhold',
          'Rask nyhetsformidling av aktuelle hendelser',
          'Underholdende historier om kjente personer',
          'Journalistikk basert på pressekonferanser',
        ],
        correctAnswer: 'Undersøkende journalistikk som avdekker kritikkverdige forhold',
        solution: 'Gravejournalistikk er ressurskrevende, undersøkende journalistikk som graver i saker for å avdekke kritikkverdige forhold som makthavere ønsker å skjule.',
      },
    },
    {
      id: 'medieinfo-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken institusjon behandler klager på brudd mot god presseskikk i Norge?',
        options: [
          'Pressens Faglige Utvalg (PFU)',
          'Medietilsynet',
          'Stortinget',
          'Domstolene',
        ],
        correctAnswer: 'Pressens Faglige Utvalg (PFU)',
        solution: 'Pressens Faglige Utvalg (PFU) er pressens eget klageorgan som behandler klager på brudd mot Vær Varsom-plakaten.',
      },
    },
    {
      id: 'medieinfo-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser en nyhetsartikkel fra en norsk avis. Hvilke nyhetskriterier oppfyller saken?',
        hints: ['Vurder aktualitet, vesentlighet, konflikt, sensasjon og identifikasjon'],
        solution: 'Analysen bør identifisere hvilke nyhetskriterier som er tilstede, og vurdere hvordan disse påvirker sakens nyhetsverdi og presentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft utfordringer for kvalitetsjournalistikken i sosiale mediers tidsalder.',
        hints: ['Tenk på økonomi, tempo, kildekritikk og konkurranse om oppmerksomhet'],
        solution: 'Drøftingen bør ta opp utfordringer som fallende inntekter, krav om hastighet, desinformasjon, clickbait og konkurranse fra ikke-profesjonelle aktører, samt mulige løsninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Dokumentar og fakta
// ============================================================================

export const CHAPTER_MEDIEINFO_2_5: TextbookChapter = {
  id: 'medieinfo-2-5',
  courseId: 'medieinfo-2',
  chapterNumber: '5',
  title: 'Dokumentar og fakta',
  description: 'Utforsk dokumentarsjangeren og grensene mellom fakta og fiksjon.',
  estimatedMinutes: 80,
  competenceGoals: [
    'analysere dokumentarer og vurdere deres virkelighetsfremstilling',
    'drøfte etiske utfordringer ved dokumentarproduksjon',
  ],
  content: [
    {
      id: 'medieinfo-2-5-intro',
      type: 'text',
      content: `## Dokumentarsjangeren

Dokumentaren er en sjanger som hevder å vise virkeligheten. Men hva er egentlig forskjellen mellom dokumentar og fiksjon? Og hvor objektivt kan et kamera fange virkeligheten?

**Dokumentarens historie:**
- De første filmene var dokumentariske
- Robert Flaherty: "Nanook of the North" (1922)
- John Grierson definerte dokumentar som "kreativ behandling av virkelighet"

**Dokumentarens rolle:**
- Belyse viktige samfunnsspørsmål
- Gi stemme til marginaliserte grupper
- Arkivere historie og kultur
- Engasjere og påvirke publikum`,
    },
    {
      id: 'medieinfo-2-5-def-1',
      type: 'definition',
      title: 'Dokumentartyper',
      content: `**Observerende dokumentar:**
Kameraet observerer uten å gripe inn. "Flue på veggen"-tilnærming.

**Deltakende dokumentar:**
Filmskaperen er synlig og interagerer med subjektene.

**Ekspressiv/poetisk dokumentar:**
Vektlegger estetikk og personlig uttrykk fremfor informasjon.

**Refleksiv dokumentar:**
Problematiserer dokumentarformen selv og filmskaping.

**Performativ dokumentar:**
Filmskaperen setter seg selv i sentrum, ofte personlig og subjektiv.

**True crime:**
Dokumentarer om forbrytelser og rettssaker.

**Mockumentary:**
Fiksjon som later som den er dokumentar.`,
    },
    {
      id: 'medieinfo-2-5-def-2',
      type: 'definition',
      title: 'Dokumentarens virkemidler',
      content: `**Intervju:**
Samtaler med kilder som gir informasjon og personlige perspektiver.

**Voice-over:**
Fortellerstemme som guider og kommenterer.

**Arkivmateriale:**
Historiske bilder, videoer og dokumenter.

**Rekonstruksjon:**
Gjenskaping av hendelser som ikke ble filmet.

**Musikk og lyd:**
Skaper stemning og påvirker tolkning.

**Klipping:**
Valg av hva som vises og rekkefølgen skaper narrativ.

**Verite-stil:**
Håndholdt kamera, naturlig lys, autentisitetsfølelse.`,
    },
    {
      id: 'medieinfo-2-5-def-3',
      type: 'definition',
      title: 'Dokumentaretikk',
      content: `**Informert samtykke:**
Deltakere må forstå hvordan de vil fremstilles.

**Representasjon:**
Hvordan fremstilles personer og grupper? Hvem får fortelle sin historie?

**Manipulasjon:**
Hvor mye kan virkeligheten bearbeides før det blir løgn?

**Maktforhold:**
Filmskaper har makt over hvordan historien fortelles.

**Konsekvenser:**
Hvordan påvirkes de som filmes av dokumentaren?

**Sannhetsforpliktelse:**
Publikum forventer at dokumentar er "sant" - hvilket ansvar gir det?`,
    },
    {
      id: 'medieinfo-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av dokumentar',
      problem: 'Hvordan kan vi analysere en dokumentars virkelighetsfremstilling?',
      solution: `**Analysespørsmål:**

**1. Hvem forteller?**
- Hvem er filmskaper? Bakgrunn og agenda?
- Hvem får uttale seg? Hvem er utelatt?
- Brukes voice-over? Hvem er fortelleren?

**2. Hvordan fortelles det?**
- Hvilken dokumentartype er det?
- Hvilke virkemidler brukes?
- Hvordan påvirker klipping og musikk?

**3. Hva fortelles?**
- Hvilket perspektiv fremmes?
- Hva er utelatt eller nedtonet?
- Hvilke kilder brukes?

**4. Etiske vurderinger:**
- Hvordan behandles de som filmes?
- Er fremstillingen rettferdig?
- Brukes manipulative grep?`,
    },
    {
      id: 'medieinfo-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva mente John Grierson med at dokumentar er "kreativ behandling av virkelighet"?',
        options: [
          'Dokumentar innebærer kunstneriske valg i fremstillingen av virkeligheten',
          'Dokumentar skal være rent objektivt og uten kunstneriske grep',
          'Dokumentar og fiksjon er det samme',
          'Dokumentar skal kun bruke arkivmateriale',
        ],
        correctAnswer: 'Dokumentar innebærer kunstneriske valg i fremstillingen av virkeligheten',
        solution: 'Grierson pekte på at selv dokumentar innebærer kreative valg om hva som filmes, hvordan det klippes og presenteres.',
      },
    },
    {
      id: 'medieinfo-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner observerende dokumentar?',
        options: [
          'Kameraet observerer uten at filmskaperen griper inn',
          'Filmskaperen er synlig og interagerer aktivt',
          'Fokus på estetikk og personlig uttrykk',
          'Fiksjon som later som den er dokumentar',
        ],
        correctAnswer: 'Kameraet observerer uten at filmskaperen griper inn',
        solution: 'Observerende dokumentar, også kalt "flue på veggen", lar kameraet observere hendelser uten at filmskaperen griper inn eller kommenterer.',
      },
    },
    {
      id: 'medieinfo-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er en mockumentary?',
        options: [
          'Fiksjon som later som den er dokumentar',
          'En dokumentar som kritiserer andre dokumentarer',
          'En dokumentar med komisk innhold',
          'En dokumentar uten voice-over',
        ],
        correctAnswer: 'Fiksjon som later som den er dokumentar',
        solution: 'Mockumentary er en sjanger der fiktivt innhold presenteres i dokumentarform for komisk eller satirisk effekt.',
      },
    },
    {
      id: 'medieinfo-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva innebærer informert samtykke i dokumentarproduksjon?',
        options: [
          'Deltakere må forstå hvordan de vil fremstilles',
          'Publikum må godkjenne innholdet før visning',
          'Myndighetene må gi tillatelse til filming',
          'Alle kilder må være anonyme',
        ],
        correctAnswer: 'Deltakere må forstå hvordan de vil fremstilles',
        solution: 'Informert samtykke betyr at personer som filmes må få tilstrekkelig informasjon om prosjektet og hvordan de vil fremstilles, før de gir samtykke.',
      },
    },
    {
      id: 'medieinfo-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Se en dokumentar og analyser hvilke virkemidler som brukes for å overbevise publikum.',
        hints: ['Se på bruk av musikk, intervjuer, klipping og fortellerstemme'],
        solution: 'Analysen bør identifisere konkrete virkemidler og vurdere hvordan de påvirker publikums oppfatning av saken som presenteres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft etiske utfordringer en dokumentarfilmskaper kan møte når de lager en dokumentar om sårbare grupper.',
        hints: ['Tenk på maktforhold, representasjon og konsekvenser'],
        solution: 'Drøftingen bør ta opp utfordringer som maktasymmetri mellom filmskaper og subjekt, risiko for stereotypisering, informert samtykke og potensielle konsekvenser for de som filmes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Mediepåvirkning og propaganda
// ============================================================================

export const CHAPTER_MEDIEINFO_2_6: TextbookChapter = {
  id: 'medieinfo-2-6',
  courseId: 'medieinfo-2',
  chapterNumber: '6',
  title: 'Mediepåvirkning og propaganda',
  description: 'Forstå hvordan medier kan brukes til å påvirke holdninger og atferd.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere propagandateknikker og overtalelsesstrategier',
    'drøfte medienes rolle i meningsdannelse og polarisering',
  ],
  content: [
    {
      id: 'medieinfo-2-6-intro',
      type: 'text',
      content: `## Mediepåvirkning og propaganda

Mediene har enorm makt til å forme våre oppfatninger av verden. Denne makten kan brukes til å informere og opplyse, men også til å manipulere og villede.

**Fra massepropaganda til mikrotargeting:**
- Propagandaens gullalder under verdenskrigene
- Reklame og PR som "fredelig propaganda"
- Digitale medier og personalisert påvirkning

**Hvorfor er dette viktig?**
- Beskytte demokratiet mot desinformasjon
- Forstå kommersielle påvirkningsforsøk
- Bli kritiske mediebrukere`,
    },
    {
      id: 'medieinfo-2-6-def-1',
      type: 'definition',
      title: 'Propaganda og overtalelse',
      content: `**Propaganda:**
Systematisk spredning av informasjon for å fremme en bestemt sak eller ideologi.

**Hvit propaganda:**
Kilden er kjent og informasjonen hovedsakelig sann.

**Grå propaganda:**
Kilden er uklar eller misvisende.

**Svart propaganda:**
Kilden er skjult eller falsk, informasjonen ofte usann.

**Overtalelse:**
Kommunikasjon som søker å endre holdninger eller atferd.

**Retorikk:**
Kunsten å overbevise gjennom ethos (troverdighet), pathos (følelser) og logos (logikk).`,
    },
    {
      id: 'medieinfo-2-6-def-2',
      type: 'definition',
      title: 'Propagandateknikker',
      content: `**Bandwagon:**
"Alle andre gjør det" - appell til flokkmentalitet.

**Testimonial:**
Kjente eller troverdige personer støtter budskapet.

**Transfer:**
Overføre positive assosiasjoner fra noe til noe annet.

**Name-calling:**
Stemple motstandere med negative merkelapper.

**Card stacking:**
Presentere kun informasjon som støtter eget synspunkt.

**Glittering generalities:**
Bruke vage, positive ord som "frihet" og "rettferdighet".

**Plain folks:**
Fremstille seg som en av folket for å skape tillit.`,
    },
    {
      id: 'medieinfo-2-6-def-3',
      type: 'definition',
      title: 'Desinformasjon og falske nyheter',
      content: `**Desinformasjon:**
Bevisst spredning av feilaktig informasjon for å villede.

**Misinformasjon:**
Spredning av feilaktig informasjon uten intensjon om å villede.

**Falske nyheter:**
Nyhetsliknende innhold som er helt eller delvis usant.

**Deepfakes:**
AI-genererte videoer som viser personer gjøre eller si ting de aldri har gjort.

**Trollfabrikker:**
Organiserte operasjoner som sprer desinformasjon online.

**Informasjonsoperasjoner:**
Statlige eller ikke-statlige aktørers koordinerte påvirkningskampanjer.`,
    },
    {
      id: 'medieinfo-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Russisk påvirkning i sosiale medier',
      problem: 'Hvordan har russiske aktører brukt sosiale medier til å påvirke valg?',
      solution: `**Russisk informasjonsoperasjon mot USA 2016:**

**Aktør:**
Internet Research Agency (IRA) - en russisk "trollfabrikk"

**Metoder:**
- Opprettet falske amerikanske profiler på Facebook, Twitter og Instagram
- Spredte splittende innhold om kontroversielle temaer
- Organiserte både demonstrasjoner og motdemonstrasjoner
- Kjøpte politisk reklame

**Omfang:**
- Nådde 126 millioner Facebook-brukere
- Tusenvis av Twitter-kontoer
- Hundretusenvis av poster og annonser

**Formål:**
- Skape splittelse og mistillit
- Undergrave demokratiske institusjoner

**Lærdom:**
Viser sårbarhet i digitale medier og behovet for kritisk mediekompetanse.`,
    },
    {
      id: 'medieinfo-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom desinformasjon og misinformasjon?',
        options: [
          'Desinformasjon er bevisst villedning, misinformasjon er utilsiktet feil',
          'Misinformasjon er mer alvorlig enn desinformasjon',
          'Desinformasjon spres kun av medier, misinformasjon av enkeltpersoner',
          'Det er ingen forskjell mellom begrepene',
        ],
        correctAnswer: 'Desinformasjon er bevisst villedning, misinformasjon er utilsiktet feil',
        solution: 'Desinformasjon innebærer bevisst spredning av feilaktig informasjon for å villede, mens misinformasjon er spredning av feilaktig informasjon uten intensjon om å villede.',
      },
    },
    {
      id: 'medieinfo-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er "bandwagon"-teknikken i propaganda?',
        options: [
          'Appell til flokkmentalitet - alle andre gjør det',
          'Bruk av kjente personer som talspersoner',
          'Å stemple motstandere med negative merkelapper',
          'Å overføre positive assosiasjoner til produktet',
        ],
        correctAnswer: 'Appell til flokkmentalitet - alle andre gjør det',
        solution: 'Bandwagon-teknikken appellerer til menneskers ønske om å følge flertallet - "hopp på vogna" fordi alle andre gjør det.',
      },
    },
    {
      id: 'medieinfo-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er deepfakes?',
        options: [
          'AI-genererte videoer som viser personer gjøre ting de aldri har gjort',
          'Nyhetsartikler med falsk informasjon',
          'Falske profiler på sosiale medier',
          'Manipulerte fotografier',
        ],
        correctAnswer: 'AI-genererte videoer som viser personer gjøre ting de aldri har gjort',
        solution: 'Deepfakes er video- eller lydklipp generert med kunstig intelligens som kan få personer til å se ut som de sier eller gjør ting de aldri har gjort.',
      },
    },
    {
      id: 'medieinfo-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilke tre overtalelsesmidler beskriver retorikken?',
        options: [
          'Ethos, pathos og logos',
          'Denotasjon, konnotasjon og myte',
          'Hvit, grå og svart propaganda',
          'Tekst, bilde og lyd',
        ],
        correctAnswer: 'Ethos, pathos og logos',
        solution: 'Ethos (troverdighet), pathos (følelser) og logos (logikk) er de tre klassiske overtalelsesmidlene fra retorikken.',
      },
    },
    {
      id: 'medieinfo-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser en valgkampreklame eller politisk annonse. Hvilke propagandateknikker og retoriske virkemidler brukes?',
        hints: ['Se etter appell til følelser, bruk av stereotyper og framing av motstanderen'],
        solution: 'Analysen bør identifisere konkrete propagandateknikker og retoriske grep, og vurdere hvordan de søker å påvirke velgernes holdninger og stemmegivning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft hvordan sosiale medier har endret mulighetene for spredning av desinformasjon.',
        hints: ['Tenk på algoritmestyring, virale mekanismer og mangel på portvoktere'],
        solution: 'Drøftingen bør ta opp hvordan algoritmer forsterker engasjerende innhold, hvordan manglende redaksjonell kontroll gjør det lettere å spre usannheter, og muligheter for mikrotargeting og koordinerte kampanjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Personvern og ytringsfrihet
// ============================================================================

export const CHAPTER_MEDIEINFO_2_7: TextbookChapter = {
  id: 'medieinfo-2-7',
  courseId: 'medieinfo-2',
  chapterNumber: '7',
  title: 'Personvern og ytringsfrihet',
  description: 'Utforsk spenningsfeltet mellom personvern, ytringsfrihet og medienes rolle.',
  estimatedMinutes: 85,
  competenceGoals: [
    'drøfte spenningsforholdet mellom ytringsfrihet og andre rettigheter',
    'analysere personvernutfordringer i digitale medier',
  ],
  content: [
    {
      id: 'medieinfo-2-7-intro',
      type: 'text',
      content: `## Personvern og ytringsfrihet

Ytringsfrihet og personvern er begge fundamentale rettigheter, men de kan komme i konflikt med hverandre. Digitaliseringen har skapt nye utfordringer for begge.

**Grunnleggende spenninger:**
- Medienes rett til å informere vs. individets rett til privatliv
- Retten til anonymitet vs. behovet for åpenhet
- Overvåking for sikkerhet vs. personvern
- Globale plattformer vs. nasjonal lovgivning

**Hvorfor dette er viktig:**
- Forstå egne rettigheter
- Delta informert i samfunnsdebatten
- Navigere i digitale medier`,
    },
    {
      id: 'medieinfo-2-7-def-1',
      type: 'definition',
      title: 'Ytringsfrihet',
      content: `**Ytringsfrihet:**
Retten til å uttrykke meninger og motta informasjon uten inngrep fra myndighetene.

**Grunnlovens paragraf 100:**
Norges grunnlovsbestemmelse om ytringsfrihet, med tre begrunnelser.

**Sannhetsprinsippet:**
Fri meningsutveksling er nødvendig for å finne sannheten.

**Demokratiprinsippet:**
Demokrati krever informerte borgere og åpen debatt.

**Autonomiprinsippet:**
Frie ytringer er nødvendig for personlig utvikling.

**Ytringsfrihetskommisjonen:**
Offentlig utvalg som utreder ytringsfrihetens vilkår.

**Begrensninger:**
Ytringsfrihet er ikke absolutt - hatytringer, injurier og trusler kan straffes.`,
    },
    {
      id: 'medieinfo-2-7-def-2',
      type: 'definition',
      title: 'Personvern',
      content: `**Personvern:**
Retten til å kontrollere informasjon om seg selv og beskytte privatlivet.

**GDPR:**
EUs personvernforordning som gjelder i Norge gjennom EØS-avtalen.

**Personopplysninger:**
Informasjon som kan knyttes til en identifiserbar person.

**Samtykke:**
Hovedregel for behandling av personopplysninger.

**Dataminimering:**
Kun samle inn nødvendige data.

**Retten til å bli glemt:**
Mulighet til å få slettet personopplysninger.

**Datatilsynet:**
Norsk tilsynsorgan for personvern.`,
    },
    {
      id: 'medieinfo-2-7-def-3',
      type: 'definition',
      title: 'Overvåking og datainnsamling',
      content: `**Masseovervåking:**
Storskala overvåking av kommunikasjon og atferd.

**Metadata:**
Data om data - hvem som kommuniserer med hvem, når og hvor.

**Databroker:**
Selskaper som samler inn og selger persondata.

**Sporingsøkonomi:**
Forretningsmodell basert på å spore brukeres atferd online.

**Informasjonskapsler (cookies):**
Små datafiler som lagres i nettleseren for å spore atferd.

**Ansiktsgjenkjenning:**
Teknologi som identifiserer personer basert på ansiktstrekk.

**Panoptikon:**
Foucaults begrep om disiplinering gjennom potensiell overvåking.`,
    },
    {
      id: 'medieinfo-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Cambridge Analytica-skandalen',
      problem: 'Hva var Cambridge Analytica-skandalen og hva viste den om personvern?',
      solution: `**Cambridge Analytica-skandalen:**

**Hva skjedde:**
- Dataanalysefirmaet Cambridge Analytica fikk tilgang til persondata fra 87 millioner Facebook-brukere
- Dataene ble brukt til politisk mikrotargeting

**Hvordan:**
- En app samlet inn data fra brukere og deres venner
- Dataene ble videresolgt til Cambridge Analytica uten samtykke
- Psykologiske profiler ble brukt til å skreddersy politiske budskap

**Konsekvenser:**
- Facebook fikk milliardbot
- Økt oppmerksomhet om datamisbruk
- Styrket personvernlovgivning (GDPR)
- Cambridge Analytica gikk konkurs

**Lærdom:**
- Persondata har enorm verdi
- Samtykke er ofte uklart eller manipulert
- Behov for sterkere regulering av tech-selskaper`,
    },
    {
      id: 'medieinfo-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er de tre begrunnelsene for ytringsfrihet i norsk grunnlov?',
        options: [
          'Sannhetsprinsippet, demokratiprinsippet og autonomiprinsippet',
          'Informasjon, debatt og meningsdannelse',
          'Frihet, likhet og brorskap',
          'Personvern, anonymitet og transparens',
        ],
        correctAnswer: 'Sannhetsprinsippet, demokratiprinsippet og autonomiprinsippet',
        solution: 'De tre begrunnelsene for ytringsfrihet i Grunnlovens paragraf 100 er sannhetsprinsippet (fri debatt finner sannheten), demokratiprinsippet (informerte borgere) og autonomiprinsippet (personlig utvikling).',
      },
    },
    {
      id: 'medieinfo-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er GDPR?',
        options: [
          'EUs personvernforordning som gjelder i Norge gjennom EØS-avtalen',
          'Et norsk tilsynsorgan for medier',
          'En internasjonal avtale om ytringsfrihet',
          'Et system for aldersgrenser på nettinnhold',
        ],
        correctAnswer: 'EUs personvernforordning som gjelder i Norge gjennom EØS-avtalen',
        solution: 'GDPR (General Data Protection Regulation) er EUs personvernforordning fra 2018, som gjelder i Norge gjennom EØS-avtalen.',
      },
    },
    {
      id: 'medieinfo-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er "retten til å bli glemt"?',
        options: [
          'Muligheten til å få slettet personopplysninger',
          'Rett til anonym surfing på nettet',
          'Forbud mot å sitere gamle uttalelser',
          'Rett til å trekke samtykke til intervjuer',
        ],
        correctAnswer: 'Muligheten til å få slettet personopplysninger',
        solution: 'Retten til å bli glemt er en del av GDPR som gir personer rett til å kreve at personopplysninger slettes under visse omstendigheter.',
      },
    },
    {
      id: 'medieinfo-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er metadata?',
        options: [
          'Data om data - hvem som kommuniserer med hvem, når og hvor',
          'Falske nyheter spredd på sosiale medier',
          'Personopplysninger som navn og adresse',
          'Innholdet i meldinger og e-poster',
        ],
        correctAnswer: 'Data om data - hvem som kommuniserer med hvem, når og hvor',
        solution: 'Metadata er data om kommunikasjon - ikke innholdet selv, men hvem som kommuniserer med hvem, når, hvor lenge og fra hvilken lokasjon.',
      },
    },
    {
      id: 'medieinfo-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvor grensen bør gå mellom ytringsfrihet og beskyttelse mot hatefulle ytringer.',
        hints: ['Vurder hensynet til utsatte grupper mot hensynet til fri debatt'],
        solution: 'Drøftingen bør veie ytringsfriheten opp mot behovet for å beskytte sårbare grupper, vurdere hva som utgjør hatytringer, og diskutere hvem som bør definere grensene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser personvernerklæringen til en app eller tjeneste du bruker. Hva samles inn og hvordan brukes dataene?',
        hints: ['Se etter hvilke data som samles inn, hvem de deles med, og hva de brukes til'],
        solution: 'Analysen bør identifisere hvilke personopplysninger som samles inn, formålene med innsamlingen, hvem dataene deles med, og vurdere om dette fremstår som rimelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Fremtidens medier
// ============================================================================

export const CHAPTER_MEDIEINFO_2_8: TextbookChapter = {
  id: 'medieinfo-2-8',
  courseId: 'medieinfo-2',
  chapterNumber: '8',
  title: 'Fremtidens medier',
  description: 'Utforsk nye medieteknologier og deres potensielle samfunnspåvirkning.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere fremvoksende medieteknologier og deres mulige konsekvenser',
    'drøfte medieutviklingens betydning for samfunn og individ',
  ],
  content: [
    {
      id: 'medieinfo-2-8-intro',
      type: 'text',
      content: `## Fremtidens medier

Medieteknologien er i konstant utvikling. Nye teknologier som kunstig intelligens, virtuell virkelighet og utvidet virkelighet endrer hvordan vi skaper, deler og opplever medieinnhold.

**Teknologiske trender:**
- Kunstig intelligens i innholdsproduksjon
- Immersive medier (VR/AR/XR)
- Automatisert journalistikk
- Personaliserte medieopplevelser

**Viktige spørsmål:**
- Hvordan vil AI endre journalistikken?
- Hva skjer med sannhet i en deepfake-verden?
- Hvem kontrollerer fremtidens medier?`,
    },
    {
      id: 'medieinfo-2-8-def-1',
      type: 'definition',
      title: 'Kunstig intelligens i medier',
      content: `**Generativ AI:**
AI som kan skape nytt innhold - tekst, bilder, lyd og video.

**Store språkmodeller (LLM):**
AI-systemer som ChatGPT som kan generere menneskelignende tekst.

**Automatisert journalistikk:**
Bruk av AI til å skrive nyhetsartikler, særlig sport og finans.

**AI-redigering:**
Automatisk bilderedigering, videoklipping og lydbehandling.

**Syntetiske medier:**
AI-generert innhold som kan være vanskelig å skille fra ekte.

**Hallusinasjoner:**
Når AI produserer overbevisende, men feilaktig informasjon.`,
    },
    {
      id: 'medieinfo-2-8-def-2',
      type: 'definition',
      title: 'Immersive medier',
      content: `**Virtual Reality (VR):**
Fullstendig dataskapt virtuell verden opplevd gjennom headset.

**Augmented Reality (AR):**
Digitale elementer lagt over den virkelige verden.

**Mixed Reality (MR):**
Kombinasjon av fysiske og digitale objekter som kan interagere.

**Extended Reality (XR):**
Samlebegrep for VR, AR og MR.

**Metaverse:**
Visjon om sammenkoblede, immersive virtuelle verdener.

**360-video:**
Video filmet i alle retninger, kan oppleves med VR-briller.

**Haptic feedback:**
Teknologi som gir fysisk følelse av berøring.`,
    },
    {
      id: 'medieinfo-2-8-def-3',
      type: 'definition',
      title: 'Medienes fremtidsutfordringer',
      content: `**Postfaktisk samfunn:**
Påstand om at følelser og overbevisninger betyr mer enn fakta.

**Algoritmisk kuratoring:**
AI bestemmer i økende grad hvilket innhold vi ser.

**Plattformavhengighet:**
Medier blir avhengige av store tech-plattformer for distribusjon.

**Digital fatigue:**
Utmattelse fra konstant medieeksponering og informasjonsoverflod.

**Medietrustdeficit:**
Synkende tillit til mediene i befolkningen.

**Fragmentering:**
Publikum spres på stadig flere kanaler og plattformer.`,
    },
    {
      id: 'medieinfo-2-8-example-1',
      type: 'example',
      title: 'Eksempel: AI i nyhetsproduksjon',
      problem: 'Hvordan brukes AI i nyhetsproduksjon i dag, og hva er utfordringene?',
      solution: `**AI i nyhetsproduksjon:**

**Eksisterende bruksområder:**
- Automatiske artikler om sport, vær og børs (NTB, AP)
- Transkribering av intervjuer og pressekonferanser
- Oversettelse av internasjonale nyheter
- Faktagjennomgang og kildeverifisering

**Nye muligheter:**
- Personaliserte nyhetsbrev
- Chatbot-grensesnitt for nyhetskonsum
- Automatisk generering av multimedieinnhold
- Prediktiv journalistikk

**Utfordringer:**
- Kvalitetskontroll av AI-generert innhold
- Fare for feilinformasjon fra hallusinasjoner
- Arbeidsplasser i journalistikken
- Hvem har ansvar for AI-generert innhold?
- Transparens om bruk av AI

**Etiske retningslinjer:**
Flere mediehus utvikler nå retningslinjer for ansvarlig bruk av AI.`,
    },
    {
      id: 'medieinfo-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er generativ AI?',
        options: [
          'AI som kan skape nytt innhold som tekst, bilder og video',
          'AI som kun kan analysere eksisterende innhold',
          'AI som styrer sosiale medier-algoritmer',
          'AI som oversetter mellom språk',
        ],
        correctAnswer: 'AI som kan skape nytt innhold som tekst, bilder og video',
        solution: 'Generativ AI er kunstig intelligens som kan skape nytt innhold, inkludert tekst, bilder, lyd og video, ofte basert på tekstinstruksjoner.',
      },
    },
    {
      id: 'medieinfo-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom VR og AR?',
        options: [
          'VR er fullstendig virtuelt, AR legger digitale elementer over virkeligheten',
          'VR er for spill, AR er for nyheter',
          'VR krever internett, AR fungerer offline',
          'Det er ingen vesentlig forskjell',
        ],
        correctAnswer: 'VR er fullstendig virtuelt, AR legger digitale elementer over virkeligheten',
        solution: 'Virtual Reality (VR) erstatter virkeligheten med en dataskapt verden, mens Augmented Reality (AR) legger digitale elementer over den virkelige verden.',
      },
    },
    {
      id: 'medieinfo-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-8-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva menes med AI-hallusinasjoner?',
        options: [
          'Når AI produserer overbevisende, men feilaktig informasjon',
          'Visuelle effekter i VR',
          'Feil i bildegjenkjenning',
          'Kreative AI-kunstverk',
        ],
        correctAnswer: 'Når AI produserer overbevisende, men feilaktig informasjon',
        solution: 'AI-hallusinasjoner er når store språkmodeller genererer informasjon som høres troverdig ut, men som er faktisk feil eller oppdiktet.',
      },
    },
    {
      id: 'medieinfo-2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-8-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er metaverse?',
        options: [
          'En visjon om sammenkoblede, immersive virtuelle verdener',
          'Et nytt sosialt medium',
          'En type AI-teknologi',
          'Et nyhetsformat for unge',
        ],
        correctAnswer: 'En visjon om sammenkoblede, immersive virtuelle verdener',
        solution: 'Metaverse er en visjon om fremtidens internett som sammenkoblede, tredimensjonale virtuelle verdener der mennesker kan møtes, jobbe og leve.',
      },
    },
    {
      id: 'medieinfo-2-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan kunstig intelligens kan endre journalistikkens fremtid, både positivt og negativt.',
        hints: ['Tenk på effektivitet, kvalitet, arbeidsplasser og troverdighet'],
        solution: 'Drøftingen bør ta opp muligheter som økt effektivitet og nye formater, og utfordringer som feilinformasjon, tap av arbeidsplasser og spørsmål om ansvar og transparens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forestill deg mediebruken om 10 år. Hvordan tror du vi vil konsumere nyheter og underholdning?',
        hints: ['Tenk på teknologiske trender, endrede vaner og samfunnsutvikling'],
        solution: 'Svaret bør reflektere over teknologiske trender som AI, immersive medier og personalisering, samt vurdere sosiale og kulturelle endringer som kan påvirke mediebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Internasjonal mediekultur
// ============================================================================

export const CHAPTER_MEDIEINFO_2_9: TextbookChapter = {
  id: 'medieinfo-2-9',
  courseId: 'medieinfo-2',
  chapterNumber: '9',
  title: 'Internasjonal mediekultur',
  description: 'Utforsk medienes rolle i globalisering og kulturutveksling.',
  estimatedMinutes: 80,
  competenceGoals: [
    'analysere medienes rolle i globalisering og kulturutveksling',
    'drøfte maktforhold i internasjonal mediekommunikasjon',
  ],
  content: [
    {
      id: 'medieinfo-2-9-intro',
      type: 'text',
      content: `## Internasjonal mediekultur

Mediene krysser landegrenser og binder verden sammen. Men hvem kontrollerer de globale mediestrømmene, og hva betyr det for kulturelt mangfold?

**Globale medietrender:**
- Dominans av amerikanske medier og plattformer
- Fremvekst av nye mediemakter (Kina, India, Tyrkia)
- Strømmetjenestenes globale rekkevidde
- Sosiale medier som global arena

**Sentrale spørsmål:**
- Fører globalisering til kulturell homogenisering?
- Hvordan påvirkes lokal mediekultur?
- Hvem setter den globale dagsordenen?`,
    },
    {
      id: 'medieinfo-2-9-def-1',
      type: 'definition',
      title: 'Globalisering og medier',
      content: `**Mediaimperialisme:**
Teori om at vestlige, særlig amerikanske, medier dominerer globalt og sprer vestlige verdier.

**Kulturell homogenisering:**
Påstand om at globale medier gjør kulturer mer like.

**Glokalisering:**
Globalt innhold tilpasses lokale markeder og kulturer.

**Kulturell hybridisering:**
Blandingen av kulturelle uttrykk fra ulike deler av verden.

**Kulturimport og -eksport:**
Strømmer av medieinnhold mellom land og regioner.

**Soft power:**
Bruk av kultur og medier for å påvirke andre lands holdninger.`,
    },
    {
      id: 'medieinfo-2-9-def-2',
      type: 'definition',
      title: 'Globale medieaktører',
      content: `**Hollywood:**
Amerikansk filmindustri med global dominans.

**Bollywood:**
Indisk filmindustri, verdens mest produktive.

**K-pop og K-drama:**
Sørkoreakas globale kultureksport.

**Al Jazeera:**
Qatarsk nyhetskanal med internasjonalt perspektiv.

**GAFAM:**
Google, Apple, Facebook, Amazon, Microsoft - amerikanske tech-giganter.

**TikTok/ByteDance:**
Kinesisk plattform med global ungdomsappell.

**Netflix og strømming:**
Globale plattformer som også produserer lokalt innhold.`,
    },
    {
      id: 'medieinfo-2-9-def-3',
      type: 'definition',
      title: 'Medier og kulturell identitet',
      content: `**Nasjonal identitet:**
Mediene bidrar til å forme og opprettholde forestillinger om nasjonen.

**Diasporamedier:**
Medier for etniske minoriteter som bor utenfor hjemlandet.

**Mediemangfold:**
Variasjon i stemmer, perspektiver og innhold i mediene.

**Representasjon:**
Hvordan ulike grupper fremstilles i mediene.

**Stereotypier:**
Forenklede og ofte negative fremstillinger av grupper.

**Kulturell appropriasjon:**
Når elementer fra én kultur brukes av en annen, ofte uten kontekst.`,
    },
    {
      id: 'medieinfo-2-9-example-1',
      type: 'example',
      title: 'Eksempel: Den koreanske bølgen (Hallyu)',
      problem: 'Hvordan har Sør-Korea blitt en global medieeksportør?',
      solution: `**Hallyu - Den koreanske bølgen:**

**Bakgrunn:**
- Strategisk satsing fra sør-koreanske myndigheter på kultureksport
- Høy kvalitet på produksjon
- Effektiv bruk av sosiale medier

**Suksesshistorier:**
- K-pop: BTS, Blackpink - global fanskare
- K-drama: "Squid Game" - Netflix-rekord
- Film: "Parasite" - Oscar for beste film

**Suksessfaktorer:**
- Profesjonell trening av artister
- Strategisk global lansering
- Aktiv fankultur og sosiale medier
- Høy produksjonskvalitet

**Betydning:**
- Utfordrer vestlig kulturdominans
- Soft power for Sør-Korea
- Inspirasjon for andre lands kultureksport

**Kritikk:**
- Arbeidspress på artister
- Standardisert estetikk
- Kulturell appropriasjon-debatter`,
    },
    {
      id: 'medieinfo-2-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-9-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva innebærer begrepet mediaimperialisme?',
        options: [
          'Teori om at vestlige medier dominerer globalt og sprer vestlige verdier',
          'Statlig kontroll over nasjonale medier',
          'Teknologisk utvikling i mediebransjen',
          'Samarbeid mellom internasjonale medieselskaper',
        ],
        correctAnswer: 'Teori om at vestlige medier dominerer globalt og sprer vestlige verdier',
        solution: 'Mediaimperialisme er en teori som hevder at vestlige, særlig amerikanske, medier dominerer globale mediestrømmer og dermed sprer vestlige verdier og kultur.',
      },
    },
    {
      id: 'medieinfo-2-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-9-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er glokalisering?',
        options: [
          'Globalt innhold tilpasses lokale markeder og kulturer',
          'Lokal kultur spres globalt',
          'Globale selskaper kjøper lokale medier',
          'Lokale medier nekter globalt innhold',
        ],
        correctAnswer: 'Globalt innhold tilpasses lokale markeder og kulturer',
        solution: 'Glokalisering beskriver hvordan globale medieselskaper tilpasser sitt innhold til lokale markeder og kulturer, for eksempel ved å lage lokale versjoner av TV-formater.',
      },
    },
    {
      id: 'medieinfo-2-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-9-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er soft power i mediesammenheng?',
        options: [
          'Bruk av kultur og medier for å påvirke andre lands holdninger',
          'Fysisk kontroll over medieinfrastruktur',
          'Økonomisk press på medieselskaper',
          'Militær sensur av medier',
        ],
        correctAnswer: 'Bruk av kultur og medier for å påvirke andre lands holdninger',
        solution: 'Soft power er et lands evne til å påvirke andre gjennom tiltrekning og overtalelse, blant annet gjennom kultur, verdier og medier, i motsetning til hard power (militær eller økonomisk makt).',
      },
    },
    {
      id: 'medieinfo-2-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-9-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Hallyu (den koreanske bølgen)?',
        options: [
          'Sør-Koreas globale kultureksport gjennom K-pop, K-drama og film',
          'Japansk animasjonskultur',
          'Indisk filmindustri',
          'Kinesiske sosiale medier',
        ],
        correctAnswer: 'Sør-Koreas globale kultureksport gjennom K-pop, K-drama og film',
        solution: 'Hallyu (den koreanske bølgen) er betegnelsen på den globale spredningen av sør-koreansk populærkultur, inkludert K-pop, K-drama og film.',
      },
    },
    {
      id: 'medieinfo-2-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om globaliseringen av medier fører til kulturell homogenisering eller mangfold.',
        hints: ['Vurder argumenter for begge syn og bruk konkrete eksempler'],
        solution: 'Drøftingen bør presentere argumenter for homogenisering (vestlig dominans, like formater) og mangfold (glokalisering, nye kultureksportører som Korea), og komme til en nyansert konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser hvordan et land du velger bruker medier som soft power. Hva eksporteres, og hvilken effekt har det?',
        hints: ['Du kan velge USA, Sør-Korea, Tyrkia, India eller et annet land'],
        solution: 'Analysen bør identifisere hvilket medieinnhold landet eksporterer, hvilke verdier og bilder som formidles, og vurdere effekten på mottakerlandenes oppfatning av landet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Selvstendig medieproduksjon
// ============================================================================

export const CHAPTER_MEDIEINFO_2_10: TextbookChapter = {
  id: 'medieinfo-2-10',
  courseId: 'medieinfo-2',
  chapterNumber: '10',
  title: 'Selvstendig medieproduksjon',
  description: 'Planlegg og gjennomfør et selvstendig medieprosjekt.',
  estimatedMinutes: 120,
  competenceGoals: [
    'planlegge, gjennomføre og vurdere en selvstendig medieproduksjon',
    'anvende kunnskap om medier i praktisk produksjonsarbeid',
  ],
  content: [
    {
      id: 'medieinfo-2-10-intro',
      type: 'text',
      content: `## Selvstendig medieproduksjon

I dette avsluttende kapitlet skal du planlegge og gjennomføre et selvstendig medieprosjekt. Her får du bruke kunnskapene fra hele kurset i praktisk arbeid.

**Hva er et medieprosjekt?**
Et medieprosjekt kan være mange ting - en dokumentarfilm, en podkast-serie, en multimediefortelling, en sosial medier-kampanje eller et nettsted.

**Prosjektets faser:**
1. Ideutvikling og research
2. Planlegging og preproduksjon
3. Produksjon
4. Postproduksjon og redigering
5. Distribusjon og evaluering`,
    },
    {
      id: 'medieinfo-2-10-def-1',
      type: 'definition',
      title: 'Ideutvikling og konsept',
      content: `**Konsept:**
Den grunnleggende ideen og tilnærmingen til prosjektet.

**Målgruppe:**
Hvem skal prosjektet nå, og hva er deres behov og interesser?

**Format:**
Hvilken medieform passer best for budskapet og målgruppen?

**Vinkling:**
Hvilket perspektiv eller innfallsvinkel skal prosjektet ha?

**Research:**
Systematisk innsamling av informasjon og materiale.

**Synopsis:**
Kort sammendrag av prosjektets innhold og struktur.

**Treatment:**
Mer utfyllende beskrivelse av konsept, stil og gjennomføring.`,
    },
    {
      id: 'medieinfo-2-10-def-2',
      type: 'definition',
      title: 'Planlegging og preproduksjon',
      content: `**Prosjektplan:**
Oversikt over alle oppgaver, ansvar og tidsfrister.

**Budsjett:**
Oversikt over kostnader og ressursbehov.

**Manus/dreiebok:**
Detaljert plan for innhold, tekst og scener.

**Storyboard:**
Visuell skisse av scener i video-/filmproduksjon.

**Teknisk utstyr:**
Oversikt over nødvendig utstyr og programvare.

**Tillatelser:**
Nødvendige samtykker fra personer som medvirker.

**Risikoanalyse:**
Identifisering av mulige problemer og løsninger.`,
    },
    {
      id: 'medieinfo-2-10-def-3',
      type: 'definition',
      title: 'Produksjon og postproduksjon',
      content: `**Opptak/innsamling:**
Den praktiske innhentingen av materiale - filming, lydopptak, intervjuer, fotografering.

**Redigering:**
Utvelgelse og sammenstilling av materiale.

**Klipping:**
Sammensetning av videomateriale til en helhet.

**Fargekorrigering:**
Justering av farger for ønsket uttrykk.

**Lyddesign:**
Bearbeiding av lyd, musikk og lydeffekter.

**Grafisk design:**
Utforming av visuelle elementer, tekst og grafikk.

**Kvalitetskontroll:**
Gjennomgang av ferdig produkt før publisering.`,
    },
    {
      id: 'medieinfo-2-10-def-4',
      type: 'definition',
      title: 'Distribusjon og evaluering',
      content: `**Publisering:**
Lanseringen av det ferdige produktet.

**Distribusjonskanal:**
Hvor og hvordan produktet gjøres tilgjengelig.

**Markedsføring:**
Promotering for å nå målgruppen.

**Analyse:**
Innhenting av data om hvordan produktet mottas.

**Tilbakemelding:**
Respons fra publikum og fagpersoner.

**Egenvurdering:**
Kritisk gjennomgang av egen produksjon.

**Dokumentasjon:**
Loggføring av prosessen for læring og refleksjon.`,
    },
    {
      id: 'medieinfo-2-10-example-1',
      type: 'example',
      title: 'Eksempel: Prosjektskisse for podkast',
      problem: 'Hvordan kan en prosjektskisse for en podkast-serie se ut?',
      solution: `**Prosjektskisse: Podkast om mediekritikk**

**Konsept:**
En podkast som analyserer aktuelle mediesaker med medievitenskapelig blikk.

**Målgruppe:**
Medievitenskapsstudenter og medieinteresserte voksne.

**Format:**
6 episoder a 20-30 minutter, samtale mellom to programledere.

**Innhold:**
- Episode 1: Innledning - hvorfor mediekritikk?
- Episode 2: Sosiale medier og demokrati
- Episode 3: AI og journalistikk
- Episode 4: Personvern i praksis
- Episode 5: Representasjon i norske medier
- Episode 6: Oppsummering og fremtidsblikk

**Produksjonsplan:**
- Uke 1-2: Research og manus
- Uke 3-4: Opptak
- Uke 5: Redigering
- Uke 6: Publisering

**Utstyr:**
Mikrofoner, lydopptaker, redigeringsprogramvare.

**Distribusjon:**
Spotify, Apple Podcasts, skolens nettside.`,
    },
    {
      id: 'medieinfo-2-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-10-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er et storyboard?',
        options: [
          'Visuell skisse av scener i video-/filmproduksjon',
          'En liste over utstyr som trengs',
          'En oversikt over budsjettet',
          'En samling av intervjunotater',
        ],
        correctAnswer: 'Visuell skisse av scener i video-/filmproduksjon',
        solution: 'Et storyboard er en serie med tegninger eller bilder som viser hvordan hver scene i en video- eller filmproduksjon skal se ut.',
      },
    },
    {
      id: 'medieinfo-2-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-10-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva bør en prosjektplan inneholde?',
        options: [
          'Oversikt over oppgaver, ansvar og tidsfrister',
          'Kun en liste over utstyr',
          'Bare en beskrivelse av ideen',
          'Ferdig manus og storyboard',
        ],
        correctAnswer: 'Oversikt over oppgaver, ansvar og tidsfrister',
        solution: 'En prosjektplan bør inneholde oversikt over alle oppgaver som må gjøres, hvem som har ansvar for hva, og tidsfrister for de ulike fasene.',
      },
    },
    {
      id: 'medieinfo-2-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-10-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er et treatment i medieproduksjon?',
        options: [
          'Utfyllende beskrivelse av konsept, stil og gjennomføring',
          'Den tekniske utstyrslisten',
          'Ferdig redigert produkt',
          'En kort tittel på prosjektet',
        ],
        correctAnswer: 'Utfyllende beskrivelse av konsept, stil og gjennomføring',
        solution: 'Et treatment er en mer utfyllende beskrivelse enn en synopsis, som forklarer prosjektets konsept, stil, tone og hvordan det skal gjennomføres.',
      },
    },
    {
      id: 'medieinfo-2-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-10-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvorfor er egenvurdering viktig i et medieprosjekt?',
        options: [
          'For å lære av prosessen og forbedre fremtidige produksjoner',
          'For å få bedre karakter',
          'For å kunne klage på tilbakemeldinger',
          'Egenvurdering er ikke viktig',
        ],
        correctAnswer: 'For å lære av prosessen og forbedre fremtidige produksjoner',
        solution: 'Egenvurdering er viktig fordi det gir mulighet til å reflektere over hva som fungerte godt og hva som kunne vært bedre, noe som er verdifullt for læring og utvikling.',
      },
    },
    {
      id: 'medieinfo-2-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Utvikle en konseptskisse for et medieprosjekt du ønsker å gjennomføre. Inkluder målgruppe, format, innhold og en kort produksjonsplan.',
        hints: ['Start med en ide du brenner for, og tenk på hvem som vil ha nytte av eller interesse for dette'],
        solution: 'Konseptskissen bør inneholde en tydelig idebeskrivelse, definert målgruppe, valgt format med begrunnelse, oversikt over planlagt innhold, og en realistisk tidsplan for gjennomføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'medieinfo-2-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'medieinfo-2-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjennomfør og evaluer et lite medieprosjekt. Dokumenter prosessen og reflekter over hva du lærte.',
        hints: ['Start smått - en kort video, en podkast-episode eller en multimediefortelling'],
        solution: 'Dokumentasjonen bør inkludere beskrivelse av prosjektet, gjennomføringsprosessen, utfordringer som oppsto, hvordan de ble løst, og refleksjoner over læring og forbedringspotensial.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTERT INNHOLD
// ============================================================================

export const MEDIEINFO_2_CHAPTERS = [
  CHAPTER_MEDIEINFO_2_1,
  CHAPTER_MEDIEINFO_2_2,
  CHAPTER_MEDIEINFO_2_3,
  CHAPTER_MEDIEINFO_2_4,
  CHAPTER_MEDIEINFO_2_5,
  CHAPTER_MEDIEINFO_2_6,
  CHAPTER_MEDIEINFO_2_7,
  CHAPTER_MEDIEINFO_2_8,
  CHAPTER_MEDIEINFO_2_9,
  CHAPTER_MEDIEINFO_2_10,
];

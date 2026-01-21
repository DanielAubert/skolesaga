/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helse- og oppvekstfag VG2
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const HELSEOPPVEKST_VG2_CHAPTERS: TextbookChapter[] = [
  {
    id: 'helseoppvekst-vg2-kap1',
    courseId: 'helseoppvekst-vg2',
    chapterNumber: 1,
    title: 'Helsetjenestens oppbygging',
    description: 'Lær om hvordan helse- og omsorgstjenestene er organisert i Norge, fra kommunale tjenester til spesialisthelsetjenesten.',
    estimatedTime: '90 minutter',
    sections: [
      {
        id: 'helseoppvekst-vg2-kap1-sek1',
        title: 'Kommunale helse- og omsorgstjenester',
        content: `# Kommunale helse- og omsorgstjenester

## Kommunens ansvar

Kommunene har det primære ansvaret for helse- og omsorgstjenester til befolkningen. Dette er regulert i **helse- og omsorgstjenesteloven** som trådte i kraft i 2012.

### Lovpålagte tjenester

Kommunen skal sørge for at personer som oppholder seg i kommunen tilbys nødvendige helse- og omsorgstjenester:

**Forebyggende tjenester:**
- Helsestasjons- og skolehelsetjeneste
- Svangerskaps- og barselomsorg
- Helseopplysning og forebyggende arbeid
- Miljørettet helsevern

**Behandlende tjenester:**
- Fastlegeordningen
- Legevakt
- Fysioterapi og ergoterapi
- Psykisk helsearbeid
- Rusarbeid

**Omsorgstjenester:**
- Hjemmesykepleie
- Praktisk bistand (hjemmehjelp)
- Omsorgsboliger
- Sykehjem
- Dagaktivitetstilbud
- Avlastningstilbud

## Samhandlingsreformen

**Samhandlingsreformen** fra 2012 hadde som mål å:
- Forebygge mer og behandle tidligere
- Gi mer ansvar til kommunene
- Sikre bedre samarbeid mellom kommune og sykehus
- Redusere unødvendige sykehusinnleggelser

### Kommunal akutt døgnenhet (KAD)

Mange kommuner har opprettet **kommunale akutte døgnplasser (KAD)** for pasienter som:
- Trenger observasjon og behandling
- Ikke trenger sykehusinnleggelse
- Kan behandles lokalt med riktig kompetanse

## Organisering av tjenestene

### Bestiller-utfører-modellen

Mange kommuner bruker denne modellen:
1. **Bestillerkontor/tildelingskontor** vurderer søknader og fatter vedtak
2. **Utfører** leverer tjenestene (hjemmetjenesten, sykehjem osv.)

### Koordinerende enhet

Kommunen skal ha en **koordinerende enhet** for habilitering og rehabilitering som:
- Har oversikt over tilbud i kommunen
- Bidrar til samarbeid mellom tjenester
- Oppnevner koordinator ved behov
- Utarbeider individuell plan`,
        keyPoints: [
          'Kommunen har ansvar for primærhelsetjenesten',
          'Helse- og omsorgstjenesteloven regulerer kommunens plikter',
          'Samhandlingsreformen ga kommunene mer ansvar',
          'Bestiller-utfører-modellen skiller mellom vedtak og utførelse',
          'Koordinerende enhet sikrer helhetlige tjenester'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap1-sek2',
        title: 'Spesialisthelsetjenesten',
        content: `# Spesialisthelsetjenesten

## Organisering

**Spesialisthelsetjenesten** omfatter sykehus og andre spesialiserte helsetjenester. Den er organisert gjennom fire **regionale helseforetak (RHF)**:

- Helse Nord RHF
- Helse Midt-Norge RHF
- Helse Vest RHF
- Helse Sør-Øst RHF

### Helseforetakenes oppgaver

De regionale helseforetakene skal sørge for:
- Spesialisthelsetjenester til befolkningen i regionen
- Forskning og utvikling
- Utdanning av helsepersonell
- Opplæring av pasienter og pårørende

## Sykehusenes funksjoner

### Nivåinndeling

**Lokalsykehus:**
- Grunnleggende spesialisthelsetjenester
- Akuttmottak
- Fødetilbud (mange steder)
- Vanlige kirurgiske og medisinske tjenester

**Regionsykehus:**
- Mer spesialiserte tjenester
- Større fagmiljøer
- Flere spesialiteter

**Universitetssykehus:**
- Høyspesialiserte funksjoner
- Landsfunksjoner og flerregionale funksjoner
- Forskning og undervisning
- Utdanning av leger og annet helsepersonell

## Psykisk helsevern

Spesialisthelsetjenesten har også ansvar for:

**Barne- og ungdomspsykiatri (BUP):**
- Poliklinisk behandling
- Dagbehandling
- Døgnbehandling

**Voksenpsykiatri:**
- Distriktspsykiatriske sentre (DPS)
- Akuttpsykiatri
- Langtidsbehandling

## Tverrfaglig spesialisert rusbehandling (TSB)

TSB gir behandling for rusmiddelavhengighet:
- Poliklinisk behandling
- Døgnbehandling (korttid og langtid)
- Legemiddelassistert rehabilitering (LAR)
- Avgiftning

## Pasientrettigheter

Pasienter i spesialisthelsetjenesten har rett til:
- Vurdering av henvisning innen 10 virkedager
- Informasjon om ventetid
- Fritt sykehusvalg (med noen unntak)
- Individuell frist for behandling
- Fornyet vurdering (second opinion)`,
        keyPoints: [
          'Fire regionale helseforetak organiserer spesialisthelsetjenesten',
          'Sykehusene er inndelt i ulike nivåer etter funksjon',
          'Psykisk helsevern og rusbehandling er del av spesialisthelsetjenesten',
          'Pasienter har lovfestede rettigheter',
          'Fritt sykehusvalg gir pasienter valgfrihet'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap1-sek3',
        title: 'Privat sektor og samarbeid',
        content: `# Privat sektor og samarbeid

## Private helsetjenester

I tillegg til offentlige tjenester finnes det et betydelig privat helsetilbud i Norge:

### Private aktører

**Private sykehus og klinikker:**
- Noen har avtale med det offentlige
- Tilbyr ofte elektiv (planlagt) behandling
- Kortere ventetider mot betaling

**Legespesialister med driftsavtale:**
- Avtale med helseforetaket
- Pasienter betaler kun egenandel
- Del av det offentlige tilbudet

**Rent private tjenester:**
- Ingen avtale med det offentlige
- Pasienten betaler selv
- Eksempler: kosmetisk kirurgi, alternativ behandling

### Ideelle organisasjoner

Mange ideelle organisasjoner driver helse- og omsorgstjenester:
- Kirkens Bymisjon
- Røde Kors
- Blå Kors
- Stiftelsen Norsk Luftambulanse
- Haraldsplass diakonale sykehus

## Samarbeid mellom nivåene

### Helsefellesskap

Fra 2020 ble det etablert **19 helsefellesskap** mellom kommuner og sykehus for å:
- Planlegge tjenester sammen
- Sikre gode pasientforløp
- Dele kompetanse
- Utvikle samarbeidsavtaler

### Samarbeidsavtaler

Kommuner og helseforetak må ha samarbeidsavtaler om:
- Innleggelse og utskrivning
- Gjensidig kompetanseutveksling
- Beredskap og akuttmedisin
- Jordmortjenester
- IKT-løsninger

## Pasientforløp

### Helhetlige pasientforløp

Et godt pasientforløp kjennetegnes av:
- Koordinerte tjenester
- God informasjonsflyt
- Pasienten i sentrum
- Riktig behandling til rett tid på rett sted

### Utfordringer i samarbeidet

Typiske utfordringer:
- Ulik organisering og finansiering
- Manglende informasjonsutveksling
- Uklare ansvarsforhold
- Kapasitetsproblemer ved utskrivning

## Digitalisering i helsetjenesten

### E-helse

Digitale løsninger som forbedrer samarbeid:
- Elektronisk meldingsutveksling
- Kjernejournal
- Helsenorge.no (pasientportal)
- E-resept
- Elektronisk henvisning`,
        keyPoints: [
          'Private aktører utfyller det offentlige tilbudet',
          'Ideelle organisasjoner driver mange helsetjenester',
          'Helsefellesskap sikrer samarbeid mellom kommune og sykehus',
          'Samarbeidsavtaler regulerer ansvarsforhold',
          'Digitalisering forbedrer informasjonsflyten'
        ]
      }
    ],
    exercises: [
      {
        id: 'helseoppvekst-vg2-kap1-oppg1',
        type: 'multiple-choice',
        question: 'Hvilken lov regulerer kommunenes ansvar for helse- og omsorgstjenester?',
        options: [
          'Spesialisthelsetjenesteloven',
          'Helse- og omsorgstjenesteloven',
          'Helseforetaksloven',
          'Folketrygdloven'
        ],
        correctAnswer: 1,
        explanation: 'Helse- og omsorgstjenesteloven fra 2012 regulerer kommunenes ansvar for helse- og omsorgstjenester til befolkningen.'
      },
      {
        id: 'helseoppvekst-vg2-kap1-oppg2',
        type: 'multiple-choice',
        question: 'Hvor mange regionale helseforetak er det i Norge?',
        options: [
          '2',
          '3',
          '4',
          '5'
        ],
        correctAnswer: 2,
        explanation: 'Det er fire regionale helseforetak: Helse Nord, Helse Midt-Norge, Helse Vest og Helse Sør-Øst.'
      },
      {
        id: 'helseoppvekst-vg2-kap1-oppg3',
        type: 'multiple-choice',
        question: 'Hva var hovedmålet med samhandlingsreformen?',
        options: [
          'Å privatisere helsetjenestene',
          'Å bygge flere sykehus',
          'Å forebygge mer og behandle tidligere i kommunene',
          'Å redusere antall leger'
        ],
        correctAnswer: 2,
        explanation: 'Samhandlingsreformen fra 2012 hadde som mål å forebygge mer, behandle tidligere og gi kommunene mer ansvar for helsetjenestene.'
      },
      {
        id: 'helseoppvekst-vg2-kap1-oppg4',
        type: 'short-answer',
        question: 'Forklar hva bestiller-utfører-modellen innebærer og hvorfor den brukes i mange kommuner.',
        correctAnswer: 'Bestiller-utfører-modellen skiller mellom de som vurderer søknader og fatter vedtak (bestillerkontor/tildelingskontor) og de som utfører tjenestene (hjemmetjenesten, sykehjem osv.). Modellen brukes for å sikre likebehandling, tydeligere ansvarsfordeling og bedre kontroll med ressursbruken.'
      },
      {
        id: 'helseoppvekst-vg2-kap1-oppg5',
        type: 'short-answer',
        question: 'Beskriv hva et helsefellesskap er og hvilken funksjon det har.',
        correctAnswer: 'Et helsefellesskap er et samarbeidsorgan mellom kommuner og sykehus i et geografisk område. Det ble etablert 19 helsefellesskap fra 2020. Funksjonen er å planlegge tjenester sammen, sikre gode pasientforløp, dele kompetanse og utvikle samarbeidsavtaler mellom kommuner og spesialisthelsetjenesten.'
      }
    ],
    summary: 'Dette kapittelet har gitt en oversikt over hvordan helse- og omsorgstjenestene er organisert i Norge. Kommunene har ansvar for primærhelsetjenesten med fastleger, hjemmetjenester og sykehjem, mens spesialisthelsetjenesten er organisert gjennom fire regionale helseforetak med sykehus på ulike nivåer. Samhandlingsreformen har gitt kommunene mer ansvar, og helsefellesskap sikrer bedre samarbeid mellom tjenestenivåene. Private og ideelle aktører utfyller det offentlige tilbudet, og digitalisering forbedrer samarbeid og informasjonsflyt.'
  },
  {
    id: 'helseoppvekst-vg2-kap2',
    courseId: 'helseoppvekst-vg2',
    chapterNumber: 2,
    title: 'Pasient- og brukermedvirkning',
    description: 'Forstå betydningen av brukermedvirkning og hvordan pasienter og brukere kan delta aktivt i egen behandling og tjenesteutforming.',
    estimatedTime: '75 minutter',
    sections: [
      {
        id: 'helseoppvekst-vg2-kap2-sek1',
        title: 'Hva er brukermedvirkning?',
        content: `# Hva er brukermedvirkning?

## Definisjon og betydning

**Brukermedvirkning** betyr at de som bruker helse- og omsorgstjenester skal ha innflytelse på sin egen behandling og på utformingen av tjenestene.

### Ulike nivåer av medvirkning

**Individnivå:**
- Medvirkning i egen behandling
- Valg av behandlingsalternativer
- Utforming av individuell plan

**Tjenestenivå:**
- Medvirkning i utforming av tjenester
- Brukerråd og brukerutvalg
- Tilbakemeldinger og klager

**Systemnivå:**
- Påvirkning av helsepolitikk
- Pasient- og brukerorganisasjoner
- Høringer og politiske prosesser

## Lovgrunnlaget

### Pasient- og brukerrettighetsloven

Loven gir pasienter og brukere rett til:
- Informasjon om egen helsetilstand
- Medvirkning ved gjennomføring av helse- og omsorgstjenester
- Samtykke til behandling
- Innsyn i egen journal
- Å klage på tjenestene

### Helse- og omsorgstjenesteloven

Kommunen skal sørge for at:
- Brukere får mulighet til å medvirke
- Det finnes systemer for tilbakemeldinger
- Brukerorganisasjoner involveres i planlegging

## Hvorfor brukermedvirkning?

### Argumenter for medvirkning

**For pasienten/brukeren:**
- Økt opplevelse av kontroll
- Bedre tilpassede tjenester
- Styrket selvfølelse og mestring
- Bedre behandlingsresultater

**For tjenestene:**
- Bedre kvalitet
- Mer effektiv ressursbruk
- Økt tillit fra befolkningen
- Færre klager og konflikter

### Forskning viser at

Pasienter som medvirker aktivt har ofte:
- Bedre etterlevelse av behandling
- Høyere tilfredshet
- Kortere sykehusopphold
- Bedre helseutfall`,
        keyPoints: [
          'Brukermedvirkning skjer på individ-, tjeneste- og systemnivå',
          'Pasient- og brukerrettighetsloven sikrer medvirkningsrett',
          'Medvirkning gir bedre behandlingsresultater',
          'Tjenestene får bedre kvalitet gjennom brukermedvirkning',
          'Forskning støtter verdien av aktiv pasientdeltakelse'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap2-sek2',
        title: 'Informert samtykke og samvalg',
        content: `# Informert samtykke og samvalg

## Informert samtykke

**Informert samtykke** betyr at pasienten må få tilstrekkelig informasjon før de samtykker til behandling.

### Krav til gyldig samtykke

For at et samtykke skal være gyldig må pasienten:
1. Ha fått **tilstrekkelig informasjon** om behandlingen
2. **Forstå** informasjonen som er gitt
3. Gi samtykket **frivillig** uten press
4. Være **samtykkekompetent**

### Informasjon som skal gis

Pasienten skal informeres om:
- Diagnose og helsetilstand
- Formålet med behandlingen
- Metoder som skal brukes
- Forventede fordeler og ulemper
- Mulige bivirkninger og komplikasjoner
- Alternative behandlingsmetoder

### Samtykkekompetanse

Samtykkekompetanse kan bortfalle helt eller delvis ved:
- Psykisk utviklingshemming
- Psykiske lidelser
- Demens
- Bevisstløshet
- Mindreårighet

**Hvem avgjør om pasienten mangler samtykkekompetanse?**
Den som er ansvarlig for behandlingen (vanligvis legen) skal avgjøre dette.

## Samvalg (shared decision-making)

**Samvalg** er en prosess der helsepersonell og pasient samarbeider om å ta beslutninger om behandling.

### Tre nøkkelelementer i samvalg

1. **Helsepersonell** deler kunnskap om diagnose, behandlingsalternativer, fordeler og ulemper
2. **Pasienten** deler sine verdier, preferanser og livssituasjon
3. **Sammen** kommer de frem til den beste løsningen for denne pasienten

### Samvalgsverktøy

Det finnes ulike hjelpemidler for samvalg:
- Beslutningsstøtteverktøy
- Informasjonsbrosjyrer
- Videoer som forklarer alternativer
- Digitale samvalgsverktøy

### Når er samvalg særlig viktig?

- Ved kroniske sykdommer
- Når det finnes flere likeverdige alternativer
- Når behandlingen har betydelige bivirkninger
- Ved livsstilsendringer
- Ved behandling med usikker effekt`,
        keyPoints: [
          'Informert samtykke krever tilstrekkelig informasjon og forståelse',
          'Samtykket må være frivillig og personen må være samtykkekompetent',
          'Samtykkekompetanse kan bortfalle ved ulike tilstander',
          'Samvalg kombinerer fagkunnskap med pasientens verdier',
          'Samvalgsverktøy kan støtte gode beslutningsprosesser'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap2-sek3',
        title: 'Brukermedvirkning i praksis',
        content: `# Brukermedvirkning i praksis

## Individuell plan

Pasienter og brukere med behov for langvarige og koordinerte tjenester har rett til en **individuell plan (IP)**.

### Kjennetegn ved individuell plan

- Beskriver brukerens mål og ønsker
- Gir oversikt over tiltak og tjenester
- Avklarer ansvarsforhold
- Skal utarbeides i samarbeid med brukeren
- Koordinator har ansvar for oppfølging

### Koordinator

En **koordinator** skal:
- Sikre oppfølging av brukeren
- Koordinere tjenestene
- Være kontaktperson for brukeren
- Sørge for at planen oppdateres

## Brukerrepresentasjon

### Brukerutvalg og brukerråd

Mange virksomheter har:
- **Brukerutvalg** på systemnivå (påvirker overordnet utvikling)
- **Brukerråd** på tjenestenivå (påvirker konkrete tjenester)

### Brukerrepresentanter

Brukerrepresentanter:
- Representerer brukererfaringer
- Deltar i møter og utvalg
- Gir innspill til forbedringer
- Rekrutteres ofte gjennom brukerorganisasjoner

## Pårørendes rolle

### Pårørende som ressurs

Pårørende har ofte:
- Viktig kunnskap om pasienten
- Erfaring med hvordan sykdommen påvirker hverdagen
- Mulighet til å støtte behandlingen hjemme

### Pårørendes rettigheter

Pårørende har rett til:
- Generell informasjon om tjenestene
- Informasjon om pasienten (med samtykke)
- Å bli hørt i visse situasjoner
- Avlastning og støtte

## Utfordringer med brukermedvirkning

### Maktforskjeller

- Helsepersonell har fagkunnskap
- Pasienter kan føle seg sårbare
- Språk og kultur kan være barrierer
- Institusjonelle rammer begrenser valg

### Hvem medvirker?

Ikke alle pasienter:
- Ønsker å medvirke like aktivt
- Har samme forutsetninger
- Har ressurser til å delta

**Viktig:** Medvirkning må tilpasses den enkeltes ønsker og evner.`,
        keyPoints: [
          'Individuell plan sikrer koordinerte tjenester med brukerens mål i sentrum',
          'Koordinator har ansvar for oppfølging og samordning',
          'Brukerutvalg og brukerråd gir brukerinnflytelse på tjenestenivå',
          'Pårørende er en viktig ressurs som har egne rettigheter',
          'Medvirkning må tilpasses den enkeltes forutsetninger og ønsker'
        ]
      }
    ],
    exercises: [
      {
        id: 'helseoppvekst-vg2-kap2-oppg1',
        type: 'multiple-choice',
        question: 'Hva er et krav for at et samtykke skal være gyldig?',
        options: [
          'Samtykket må være skriftlig',
          'Samtykket må være gitt av pårørende',
          'Pasienten må ha fått tilstrekkelig informasjon',
          'Samtykket må godkjennes av lege'
        ],
        correctAnswer: 2,
        explanation: 'For at et samtykke skal være gyldig, må pasienten ha fått tilstrekkelig informasjon, forstå informasjonen, gi samtykket frivillig og være samtykkekompetent.'
      },
      {
        id: 'helseoppvekst-vg2-kap2-oppg2',
        type: 'multiple-choice',
        question: 'Hva er samvalg (shared decision-making)?',
        options: [
          'At helsepersonell tar beslutninger for pasienten',
          'At pasienten bestemmer alt selv',
          'En prosess der helsepersonell og pasient samarbeider om beslutninger',
          'At pårørende bestemmer behandlingen'
        ],
        correctAnswer: 2,
        explanation: 'Samvalg er en prosess der helsepersonell deler fagkunnskap og pasienten deler sine verdier og preferanser, og sammen kommer de frem til den beste løsningen.'
      },
      {
        id: 'helseoppvekst-vg2-kap2-oppg3',
        type: 'multiple-choice',
        question: 'Hvem har rett til individuell plan?',
        options: [
          'Alle som mottar helsetjenester',
          'Bare de som er innlagt på sykehus',
          'De med behov for langvarige og koordinerte tjenester',
          'Bare barn og unge'
        ],
        correctAnswer: 2,
        explanation: 'Pasienter og brukere med behov for langvarige og koordinerte tjenester fra flere instanser har rett til å få utarbeidet en individuell plan.'
      },
      {
        id: 'helseoppvekst-vg2-kap2-oppg4',
        type: 'short-answer',
        question: 'Beskriv de tre nivåene av brukermedvirkning og gi et eksempel på hver.',
        correctAnswer: 'Individnivå: Medvirkning i egen behandling, for eksempel å velge mellom ulike behandlingsalternativer. Tjenestenivå: Medvirkning i utforming av tjenester, for eksempel deltakelse i brukerråd på et sykehjem. Systemnivå: Påvirkning av helsepolitikk, for eksempel at pasientorganisasjoner gir innspill til høringer om nye lover.'
      },
      {
        id: 'helseoppvekst-vg2-kap2-oppg5',
        type: 'short-answer',
        question: 'Forklar hva som menes med samtykkekompetanse og nevn situasjoner der den kan bortfalle.',
        correctAnswer: 'Samtykkekompetanse betyr at en person har evne til å forstå informasjon om sin helsetilstand og behandling, og kan ta en veloverveid beslutning. Samtykkekompetansen kan bortfalle helt eller delvis ved psykisk utviklingshemming, alvorlige psykiske lidelser, demens, bevisstløshet eller ved mindreårighet. Det er behandlingsansvarlig helsepersonell som vurderer om pasienten mangler samtykkekompetanse.'
      }
    ],
    summary: 'Dette kapittelet har belyst betydningen av pasient- og brukermedvirkning i helse- og omsorgstjenestene. Brukermedvirkning foregår på individ-, tjeneste- og systemnivå, og er forankret i lovverket. Informert samtykke og samvalg er sentrale begreper som sikrer at pasienter får delta aktivt i beslutninger om egen behandling. Individuell plan og koordinator er viktige verktøy for de med sammensatte behov. Pårørende er også en viktig ressurs. Samtidig må vi være bevisst på utfordringer knyttet til maktforskjeller og at medvirkning må tilpasses den enkeltes forutsetninger og ønsker.'
  },
  {
    id: 'helseoppvekst-vg2-kap3',
    courseId: 'helseoppvekst-vg2',
    chapterNumber: 3,
    title: 'Sykdom og lidelse',
    description: 'Få kunnskap om vanlige sykdommer, symptomer og behandling, samt forståelse for hva det innebærer å leve med sykdom.',
    estimatedTime: '100 minutter',
    sections: [
      {
        id: 'helseoppvekst-vg2-kap3-sek1',
        title: 'Sykdomslære - grunnleggende begreper',
        content: `# Sykdomslære - grunnleggende begreper

## Hva er sykdom?

**Sykdom** kan defineres som en tilstand der kroppens normale funksjoner er forstyrret. Vi skiller ofte mellom:

- **Disease**: Den objektive, målbare sykdommen (diagnosen)
- **Illness**: Pasientens subjektive opplevelse av å være syk
- **Sickness**: Samfunnets forståelse og behandling av sykdom

### Symptomer og tegn

**Symptomer** er det pasienten selv opplever og forteller om:
- Smerte
- Kvalme
- Tretthet
- Svimmelhet

**Tegn** er det helsepersonell kan observere eller måle:
- Feber (temperatur)
- Hevelse
- Utslett
- Endret blodtrykk

## Årsaker til sykdom (etiologi)

### Indre faktorer
- Genetiske/arvelige faktorer
- Aldersforandringer
- Hormonforstyrrelser
- Immunologiske reaksjoner

### Ytre faktorer
- Infeksjoner (bakterier, virus, sopp, parasitter)
- Fysiske påvirkninger (traumer, stråling)
- Kjemiske påvirkninger (giftstoffer, medikamenter)
- Livsstilsfaktorer (kosthold, aktivitet, røyking)

### Samspill mellom arv og miljø

Mange sykdommer skyldes et samspill:
- Genetisk disposisjon gjør deg sårbar
- Miljøfaktorer utløser sykdommen
- Eksempel: Type 2-diabetes, hjerte-karsykdom

## Sykdomsforløp

### Faser i et sykdomsforløp

1. **Inkubasjonstid**: Tiden fra smitte til symptomer viser seg
2. **Prodromalfase**: Tidlige, uspesifikke symptomer
3. **Akutt fase**: Sykdommen på sitt mest intense
4. **Rekonvalesens**: Tilfriskning
5. **Kronisk fase**: Langvarig sykdom (for noen)

### Sykdomsforløpets karakter

- **Akutt**: Rask debut, kort varighet
- **Kronisk**: Langvarig, over 3 måneder
- **Residiverende**: Tilbakevendende
- **Progredierende**: Gradvis forverring`,
        keyPoints: [
          'Sykdom kan forstås som disease (diagnose), illness (opplevelse) og sickness (samfunnsperspektiv)',
          'Symptomer er subjektive, tegn er objektive',
          'Sykdom kan skyldes indre faktorer, ytre faktorer eller samspill mellom disse',
          'Sykdomsforløp går gjennom ulike faser',
          'Sykdommer kan være akutte, kroniske, residiverende eller progredierende'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap3-sek2',
        title: 'Vanlige sykdomsgrupper',
        content: `# Vanlige sykdomsgrupper

## Hjerte- og karsykdommer

Hjerte- og karsykdommer er den vanligste dødsårsaken i Norge.

### Viktige tilstander

**Koronar hjertesykdom:**
- Angina pectoris (hjertekrampe)
- Hjerteinfarkt
- Årsak: Aterosklerose (åreforkalkning) i koronararteriene

**Hjertesvikt:**
- Hjertet pumper ikke effektivt nok
- Symptomer: Tungpust, hevelse i bein, tretthet

**Hjerneslag:**
- Blodpropp eller blødning i hjernen
- Symptomer: Lammelser, talevansker, synsforstyrrelser
- Viktig med rask behandling (FAST-kriteriene)

### Risikofaktorer
- Høyt blodtrykk
- Høyt kolesterol
- Røyking
- Diabetes
- Overvekt
- Fysisk inaktivitet

## Kreft

**Kreft** er ukontrollert celledeling som kan spre seg til andre organer (metastasering).

### Vanlige kreftformer i Norge
- Prostatakreft (menn)
- Brystkreft (kvinner)
- Lungekreft
- Tykktarmskreft
- Føflekkreft

### Behandling
- Kirurgi
- Cellegift (cytostatika)
- Strålebehandling
- Immunterapi
- Målrettet behandling

## Diabetes

**Diabetes mellitus** er en stoffskiftesykdom med forhøyet blodsukker.

**Type 1-diabetes:**
- Autoimmun sykdom
- Kroppen produserer ikke insulin
- Krever insulinbehandling
- Ofte debut i barndom/ungdom

**Type 2-diabetes:**
- Insulinresistens
- Ofte livsstilsrelatert
- Behandles med kosthold, mosjon, tabletter og/eller insulin
- Vanligst hos voksne

### Komplikasjoner ved diabetes
- Hjerte- og karsykdom
- Nyreskade
- Øyeskade (retinopati)
- Nerveskade (nevropati)
- Fotsår

## Lungesykdommer

**KOLS (kronisk obstruktiv lungesykdom):**
- Kronisk bronkitt og emfysem
- Hovedårsak: Røyking
- Symptomer: Tungpust, hoste, slimproduksjon

**Astma:**
- Inflammasjon og trange luftveier
- Anfallsvis tungpust
- Utløses av allergener, infeksjoner, anstrengelse`,
        keyPoints: [
          'Hjerte- og karsykdommer er den vanligste dødsårsaken',
          'Livsstilsfaktorer er viktige risikofaktorer for mange sykdommer',
          'Kreft behandles med kirurgi, cellegift, stråling eller immunterapi',
          'Type 1 og type 2-diabetes har ulike årsaker og behandling',
          'KOLS skyldes hovedsakelig røyking'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap3-sek3',
        title: 'Å leve med sykdom',
        content: `# Å leve med sykdom

## Kronisk sykdom og livskvalitet

Å få en kronisk sykdom påvirker hele livet:

### Fysiske konsekvenser
- Smerter og ubehag
- Redusert funksjonsnivå
- Tretthet og energimangel
- Bivirkninger av behandling

### Psykiske reaksjoner
- Sjokk og fornektelse
- Sorg over tap av helse
- Angst og bekymring
- Depresjon
- Sinne og frustrasjon

### Sosiale konsekvenser
- Endret rolle i familien
- Utfordringer i arbeidslivet
- Endrede sosiale relasjoner
- Økonomiske bekymringer
- Stigma ved enkelte diagnoser

## Mestring av sykdom

### Mestringsstrategier

**Problemfokusert mestring:**
- Søke informasjon
- Lære om sykdommen
- Ta aktiv del i behandlingen
- Gjøre livsstilsendringer

**Emosjonsfokusert mestring:**
- Bearbeide følelser
- Søke støtte hos andre
- Finne mening
- Akseptere situasjonen

### Salutogenese

Aaron Antonovskys begrep **salutogenese** fokuserer på hva som holder oss friske, ikke bare hva som gjør oss syke.

**Opplevelse av sammenheng (OAS):**
1. **Begripelighet**: Forstå situasjonen
2. **Håndterbarhet**: Ha ressurser til å mestre
3. **Meningsfullhet**: Oppleve at det er verdt innsatsen

## Helsepersonellets rolle

### Støtte til mestring

Helsepersonell kan hjelpe ved å:
- Gi god informasjon
- Lytte til pasientens bekymringer
- Støtte pasientens mestringsstrategier
- Involvere pårørende
- Henvise til lærings- og mestringskurs
- Koble pasienten med likepersoner

### Helhetlig tilnærming

- Se hele mennesket, ikke bare sykdommen
- Være oppmerksom på psykiske reaksjoner
- Kartlegge sosial situasjon
- Samarbeide tverrfaglig`,
        keyPoints: [
          'Kronisk sykdom påvirker fysisk, psykisk og sosialt',
          'Mennesker gjennomgår ulike psykiske reaksjoner ved sykdom',
          'Mestring kan være problemfokusert eller emosjonsfokusert',
          'Salutogenese fokuserer på faktorer som fremmer helse',
          'Helsepersonell skal støtte mestring og se hele mennesket'
        ]
      }
    ],
    exercises: [
      {
        id: 'helseoppvekst-vg2-kap3-oppg1',
        type: 'multiple-choice',
        question: 'Hva er forskjellen mellom symptomer og tegn?',
        options: [
          'Symptomer er objektive, tegn er subjektive',
          'Symptomer er det pasienten opplever, tegn er det helsepersonell kan observere',
          'Symptomer kommer før tegn i sykdomsforløpet',
          'Det er ingen forskjell'
        ],
        correctAnswer: 1,
        explanation: 'Symptomer er subjektive opplevelser som pasienten forteller om (f.eks. smerte, kvalme), mens tegn er objektive funn som helsepersonell kan observere eller måle (f.eks. feber, hevelse).'
      },
      {
        id: 'helseoppvekst-vg2-kap3-oppg2',
        type: 'multiple-choice',
        question: 'Hva er den vanligste dødsårsaken i Norge?',
        options: [
          'Kreft',
          'Ulykker',
          'Hjerte- og karsykdommer',
          'Infeksjonssykdommer'
        ],
        correctAnswer: 2,
        explanation: 'Hjerte- og karsykdommer er fortsatt den vanligste dødsårsaken i Norge, selv om dødeligheten har gått betydelig ned de siste tiårene.'
      },
      {
        id: 'helseoppvekst-vg2-kap3-oppg3',
        type: 'multiple-choice',
        question: 'Hva kjennetegner type 2-diabetes?',
        options: [
          'Autoimmun sykdom som debuterer i barndom',
          'Kroppen produserer ikke insulin',
          'Insulinresistens, ofte livsstilsrelatert',
          'Kan bare behandles med insulin'
        ],
        correctAnswer: 2,
        explanation: 'Type 2-diabetes kjennetegnes av insulinresistens, er ofte relatert til livsstil, og kan behandles med kosthold, mosjon, tabletter og/eller insulin.'
      },
      {
        id: 'helseoppvekst-vg2-kap3-oppg4',
        type: 'short-answer',
        question: 'Forklar begrepet salutogenese og de tre komponentene i opplevelse av sammenheng (OAS).',
        correctAnswer: 'Salutogenese er et begrep fra Aaron Antonovsky som fokuserer på hva som holder oss friske (helsefremming) i stedet for bare hva som gjør oss syke. Opplevelse av sammenheng (OAS) består av tre komponenter: 1) Begripelighet - at man forstår situasjonen, 2) Håndterbarhet - at man har ressurser til å mestre situasjonen, og 3) Meningsfullhet - at man opplever det som verdt innsatsen å engasjere seg.'
      },
      {
        id: 'helseoppvekst-vg2-kap3-oppg5',
        type: 'short-answer',
        question: 'Beskriv hvordan en kronisk sykdom kan påvirke en persons liv på ulike områder.',
        correctAnswer: 'En kronisk sykdom kan påvirke livet fysisk med smerter, redusert funksjonsnivå og tretthet. Psykisk kan personen oppleve sjokk, sorg, angst eller depresjon. Sosialt kan sykdommen føre til endret rolle i familien, utfordringer i arbeidslivet, endrede sosiale relasjoner og økonomiske bekymringer. Noen diagnoser kan også medføre stigma. Derfor er det viktig at helsepersonell har en helhetlig tilnærming og ser hele mennesket.'
      }
    ],
    summary: 'Dette kapittelet har gitt grunnleggende kunnskap om sykdomslære. Vi har sett på forskjellen mellom symptomer (subjektive) og tegn (objektive), samt ulike årsaker til sykdom. De vanligste sykdomsgruppene i Norge inkluderer hjerte- og karsykdommer, kreft, diabetes og lungesykdommer. Livsstilsfaktorer spiller en viktig rolle for mange av disse. Å leve med kronisk sykdom påvirker hele livet - fysisk, psykisk og sosialt. Mestring kan skje gjennom problemfokuserte eller emosjonsfokuserte strategier, og salutogenese minner oss om å fokusere på helsefremming. Helsepersonell må støtte pasientens mestring og ha en helhetlig tilnærming.'
  },
  {
    id: 'helseoppvekst-vg2-kap4',
    courseId: 'helseoppvekst-vg2',
    chapterNumber: 4,
    title: 'Legemiddelhåndtering',
    description: 'Lær om sikker legemiddelhåndtering, ulike legemiddelformer, virkninger og bivirkninger, samt lovverk og retningslinjer.',
    estimatedTime: '90 minutter',
    sections: [
      {
        id: 'helseoppvekst-vg2-kap4-sek1',
        title: 'Grunnleggende legemiddellære',
        content: `# Grunnleggende legemiddellære

## Hva er et legemiddel?

Et **legemiddel** er et stoff eller en kombinasjon av stoffer som:
- Forebygger, diagnostiserer eller behandler sykdom
- Gjenoppretter, korrigerer eller endrer fysiologiske funksjoner
- Lindrer smerter eller andre plager

### Legemiddelgrupper

**Etter virkning:**
- Analgetika (smertestillende)
- Antibiotika (mot bakterier)
- Antikoagulantia (blodfortynnende)
- Antihypertensiva (blodtrykkssenkende)
- Diuretika (vanndrivende)
- Psykofarmaka (påvirker psyken)

**Etter administrasjonsmåte:**
- Orale (gjennom munnen)
- Parenterale (injeksjoner)
- Topikale (på huden)
- Inhalasjon (til lungene)
- Rektale (i endetarmen)

## Legemidlers virkning

### Farmakokinetikk - hva kroppen gjør med legemidlet

1. **Absorpsjon**: Opptak i kroppen
2. **Distribusjon**: Fordeling i kroppen
3. **Metabolisme**: Omdanning (hovedsakelig i leveren)
4. **Eliminasjon**: Utskillelse (hovedsakelig gjennom nyrene)

### Farmakodynamikk - hva legemidlet gjør med kroppen

- Legemidlet binder seg til reseptorer
- Utløser en biologisk respons
- Effekten avhenger av dose og konsentrasjon

## Bivirkninger

**Bivirkninger** er uønskede effekter av et legemiddel.

### Typer bivirkninger
- **Vanlige**: Oppstår hos mange (f.eks. kvalme, hodepine)
- **Sjeldne**: Oppstår hos få
- **Alvorlige**: Krever oppmerksomhet (f.eks. allergiske reaksjoner)

### Interaksjoner
Legemidler kan påvirke hverandre:
- **Synergisme**: Forsterket effekt
- **Antagonisme**: Svekket effekt
- Mat og drikke kan også påvirke`,
        keyPoints: [
          'Legemidler forebygger, diagnostiserer eller behandler sykdom',
          'Legemidler kan klassifiseres etter virkning eller administrasjonsmåte',
          'Farmakokinetikk handler om absorpsjon, distribusjon, metabolisme og eliminasjon',
          'Farmakodynamikk handler om legemidlets effekt på kroppen',
          'Bivirkninger og interaksjoner er viktige å kjenne til'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap4-sek2',
        title: 'Legemiddelformer og administrasjon',
        content: `# Legemiddelformer og administrasjon

## Orale legemiddelformer

### Tabletter og kapsler

**Vanlige tabletter:**
- Svelges hele med vann
- Noen kan deles på delestrek

**Depottabletter/enterotabletter:**
- Frisetter virkestoff gradvis
- Skal ALDRI knuses eller deles
- Sikrer jevn konsentrasjon over tid

**Brusetabletter:**
- Løses opp i vann før inntak
- Raskere opptak

**Kapsler:**
- Har et ytre skall (gelatin)
- Inneholder pulver, granulat eller væske

### Mikstur og dråper
- Flytende legemiddelformer
- Måles opp med målekopp eller dråpeteller
- Viktig med nøyaktig dosering

## Parenterale legemidler (injeksjoner)

### Injeksjonstyper

**Subkutan (s.c.):**
- I underhuden
- Eksempel: Insulin, blodfortynnende

**Intramuskulær (i.m.):**
- I muskelen
- Eksempel: Vaksiner, noen antibiotika

**Intravenøs (i.v.):**
- Direkte i blodbanen
- Raskest virkning
- Krever spesiell kompetanse

## Andre administrasjonsformer

### Topikale legemidler
- Kremer, salver, geler
- Plaster (transdermal)
- Øyedråper, øresalver
- Nesespray

### Inhalasjonslegemidler
- Pulverinhalatorer
- Spraybokser (aerosol)
- Forstøverapparat (nebulisator)
- Viktig med riktig teknikk

### Rektale og vaginale
- Stikkpiller (suppositorier)
- Vagitorier
- Brukes når oral administrasjon ikke er mulig

## Viktige prinsipper

### De 7 R-ene (kontrollpunkter)

1. **Riktig pasient**
2. **Riktig legemiddel**
3. **Riktig dose**
4. **Riktig administrasjonsform**
5. **Riktig tid**
6. **Riktig dokumentasjon**
7. **Riktig observasjon av virkning**`,
        keyPoints: [
          'Orale legemidler inkluderer tabletter, kapsler, miksturer og dråper',
          'Depottabletter skal aldri knuses eller deles',
          'Injeksjoner kan gis subkutant, intramuskulært eller intravenøst',
          'Inhalasjonslegemidler krever riktig teknikk',
          'De 7 R-ene er viktige kontrollpunkter for sikker legemiddelhåndtering'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap4-sek3',
        title: 'Lovverk og sikker legemiddelhåndtering',
        content: `# Lovverk og sikker legemiddelhåndtering

## Lovverket

### Helsepersonelloven

Regulerer helsepersonells plikter, inkludert:
- Forsvarlighetskravet
- Dokumentasjonsplikt
- Taushetsplikt

### Legemiddelhåndteringsforskriften

Regulerer legemiddelhåndtering i virksomheter:
- Krav til internkontroll
- Krav til opplæring
- Krav til prosedyrer

### Narkotikaforskriften

Særskilte regler for A- og B-preparater:
- Registrering av forbruk
- Oppbevaring i låst skap
- To-personers kontroll ved uttak

## Ansvar og myndighet

### Virksomhetens ansvar
- Etablere forsvarlige rutiner
- Sørge for nødvendig opplæring
- Ha system for avvikshåndtering

### Legens ansvar
- Rekvirere (forskrive) legemidler
- Vurdere indikasjon og kontraindikasjoner
- Følge opp behandlingen

### Sykepleiers ansvar
- Istandgjøring av legemidler
- Utdeling av legemidler
- Observasjon av virkning og bivirkning
- Dokumentasjon

### Helsefagarbeiders rolle
- Assistere ved legemiddeladministrasjon
- Observere og rapportere
- Krever delegert myndighet og opplæring

## Sikker legemiddelhåndtering

### Oppbevaring
- Riktig temperatur
- Beskyttet mot lys (noen legemidler)
- Utilgjengelig for uvedkommende
- Kontroll av holdbarhet

### Dokumentasjon
- Elektronisk kurve eller medisinark
- Signering ved utdeling
- Dokumentere eventuelle avvik
- Dokumentere pasientens respons

### Avvikshåndtering

Ved feil skal man:
1. Sikre pasienten (tiltak ved behov)
2. Informere ansvarlig lege
3. Dokumentere hendelsen
4. Melde avvik i avvikssystemet
5. Lære av feilen (systemforbedring)

### Forebygging av feil
- Følge prosedyrer
- Dobbeltsjekking ved risikolegemidler
- Unngå forstyrrelser
- God kommunikasjon i team
- Bruke elektroniske støtteverktøy`,
        keyPoints: [
          'Helsepersonelloven og legemiddelhåndteringsforskriften regulerer feltet',
          'A- og B-preparater har særskilte oppbevarings- og dokumentasjonskrav',
          'Ulike yrkesgrupper har ulike ansvar og myndighet',
          'Helsefagarbeidere trenger delegert myndighet for legemiddelhåndtering',
          'Avvik skal meldes og brukes til læring og forbedring'
        ]
      }
    ],
    exercises: [
      {
        id: 'helseoppvekst-vg2-kap4-oppg1',
        type: 'multiple-choice',
        question: 'Hva betyr farmakokinetikk?',
        options: [
          'Hva legemidlet gjør med kroppen',
          'Hva kroppen gjør med legemidlet',
          'Hvordan legemidlet produseres',
          'Hvordan legemidlet foreskrives'
        ],
        correctAnswer: 1,
        explanation: 'Farmakokinetikk handler om hva kroppen gjør med legemidlet: absorpsjon, distribusjon, metabolisme og eliminasjon.'
      },
      {
        id: 'helseoppvekst-vg2-kap4-oppg2',
        type: 'multiple-choice',
        question: 'Hvorfor skal depottabletter ikke knuses eller deles?',
        options: [
          'De smaker vondt',
          'De er for harde',
          'De frisetter virkestoff gradvis, og knusing ødelegger denne funksjonen',
          'De er billigere hele'
        ],
        correctAnswer: 2,
        explanation: 'Depottabletter er designet for å frisette virkestoffet gradvis over tid. Knusing eller deling ødelegger denne mekanismen og kan føre til at hele dosen frigjøres på en gang, noe som kan være farlig.'
      },
      {
        id: 'helseoppvekst-vg2-kap4-oppg3',
        type: 'multiple-choice',
        question: 'Hva er en subkutan injeksjon?',
        options: [
          'Injeksjon i muskelen',
          'Injeksjon i underhuden',
          'Injeksjon i blodbanen',
          'Injeksjon i ledd'
        ],
        correctAnswer: 1,
        explanation: 'En subkutan (s.c.) injeksjon gis i underhuden. Eksempler er insulin og blodfortynnende sprøyter.'
      },
      {
        id: 'helseoppvekst-vg2-kap4-oppg4',
        type: 'short-answer',
        question: 'Nevn de 7 R-ene som er viktige kontrollpunkter ved legemiddelhåndtering.',
        correctAnswer: 'De 7 R-ene er: 1) Riktig pasient, 2) Riktig legemiddel, 3) Riktig dose, 4) Riktig administrasjonsform, 5) Riktig tid, 6) Riktig dokumentasjon, og 7) Riktig observasjon av virkning.'
      },
      {
        id: 'helseoppvekst-vg2-kap4-oppg5',
        type: 'short-answer',
        question: 'Beskriv hva som skal gjøres når det skjer en legemiddelfeil.',
        correctAnswer: 'Ved legemiddelfeil skal man: 1) Sikre pasienten og iverksette nødvendige tiltak, 2) Informere ansvarlig lege, 3) Dokumentere hendelsen i pasientjournalen, 4) Melde avvik i virksomhetens avvikssystem, og 5) Bruke hendelsen til læring og systemforbedring for å forebygge lignende feil i fremtiden.'
      }
    ],
    summary: 'Dette kapittelet har gitt grunnleggende kunnskap om legemiddelhåndtering. Vi har sett på ulike legemiddelgrupper og hvordan de virker i kroppen (farmakokinetikk og farmakodynamikk). Ulike legemiddelformer krever ulik administrasjon, og det er viktig å kjenne til at noen tabletter aldri skal knuses. De 7 R-ene er sentrale kontrollpunkter for sikker legemiddelhåndtering. Lovverket regulerer hvem som kan gjøre hva, og helsefagarbeidere trenger delegert myndighet for å håndtere legemidler. God dokumentasjon og avvikshåndtering er avgjørende for pasientsikkerheten.'
  },
  {
    id: 'helseoppvekst-vg2-kap5',
    courseId: 'helseoppvekst-vg2',
    chapterNumber: 5,
    title: 'Førstehjelp og akutte situasjoner',
    description: 'Lær å gjenkjenne og håndtere akutte situasjoner, gi livreddende førstehjelp og alarmere riktig.',
    estimatedTime: '85 minutter',
    sections: [
      {
        id: 'helseoppvekst-vg2-kap5-sek1',
        title: 'Grunnleggende førstehjelp',
        content: `# Grunnleggende førstehjelp

## Hva er førstehjelp?

**Førstehjelp** er den umiddelbare hjelpen som gis ved akutt sykdom eller skade, før profesjonell hjelp er tilgjengelig.

### Målene med førstehjelp
1. Redde liv
2. Forhindre forverring
3. Fremme tilfriskning

## Sikkerhet først

### Før du hjelper
- **Vurder faresituasjonen**: Er det trygt for deg å hjelpe?
- **Sikre skadestedet**: Varsle andre, sett opp varsling
- **Bruk verneutstyr**: Hansker hvis tilgjengelig

### Smittevern ved førstehjelp
- Bruk hansker ved kontakt med blod
- Vask hender før og etter
- Bruk munnbind ved munn-til-munn (om tilgjengelig)

## Vurdering av den skadede

### ABCDE-prinsippet

**A - Airway (luftveier):**
- Er luftveiene frie?
- Fjern synlige fremmedlegemer
- Løft haken for å åpne luftveien

**B - Breathing (respirasjon):**
- Puster personen?
- Se, lytt, føl i 10 sekunder
- Vurder pustefrekvens og dybde

**C - Circulation (sirkulasjon):**
- Kjenn på puls (halspuls ved bevisstløse)
- Se etter blødninger
- Vurder hudfarge og temperatur

**D - Disability (bevissthet):**
- Er personen våken?
- Reagerer på tiltale?
- Reagerer på smerte?

**E - Expose/Environment:**
- Avdekk skader
- Beskytt mot kulde/varme

## Stabilt sideleie

**Når brukes stabilt sideleie?**
- Ved bevisstløshet
- Når personen puster selv
- For å sikre åpne luftveier

### Utførelse
1. Legg den ene armen ut fra kroppen i 90 graders vinkel
2. Legg den andre hånden under kinnet
3. Bøy det fjerneste kneet
4. Rull personen mot deg
5. Juster hodet for å sikre åpen luftvei
6. Overvåk pustingen kontinuerlig`,
        keyPoints: [
          'Sikkerhet først - vurder faren før du hjelper',
          'Førstehjelp skal redde liv, forhindre forverring og fremme tilfriskning',
          'ABCDE-prinsippet gir systematisk vurdering',
          'Stabilt sideleie brukes ved bevisstløshet når personen puster',
          'Kontinuerlig overvåking er viktig'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap5-sek2',
        title: 'Hjerte-lungeredning (HLR)',
        content: `# Hjerte-lungeredning (HLR)

## Når skal HLR startes?

HLR startes når en person er:
- **Bevisstløs** (reagerer ikke på tiltale eller smerte)
- **Ikke puster normalt** (ingen pust eller bare gisper)

### Kjeden som redder liv

1. Tidlig varsling (ring 113)
2. Tidlig HLR
3. Tidlig defibrillering
4. Tidlig avansert behandling

## HLR hos voksne

### Fremgangsmåte

**1. Sjekk bevissthet**
- Rist forsiktig i skuldrene
- Rop: "Hei, hører du meg?"

**2. Rop på hjelp**
- Få noen til å ringe 113
- Få noen til å hente hjertestarter

**3. Åpne luftveien**
- Legg hodet i nøytral stilling
- Løft haken

**4. Sjekk om personen puster**
- Se, lytt, føl i 10 sekunder
- Gisping er ikke normal pust

**5. Start brystkompresjoner**
- 30 kompresjoner
- Midt på brystet
- 5-6 cm dypt
- Frekvens: 100-120/minutt

**6. Gi 2 innblåsninger**
- Lukk nesen
- Blås inn til brystet hever seg
- Bruk 1 sekund per innblåsning

**7. Fortsett 30:2**
- Bytt hver 2 minutter om dere er flere
- Ikke stopp før ambulanse overtar eller personen våkner

## Hjertestarter (AED)

### Bruk av hjertestarter

1. Slå på maskinen
2. Følg taleinstruksjonene
3. Fest elektrodene på bar, tørr hud
4. La maskinen analysere
5. Gi støt hvis maskinen sier det
6. Fortsett HLR umiddelbart etter støt

### Viktig om hjertestarter
- Kan brukes av alle
- Gir kun støt ved behov
- Kan ikke skade pasienten
- Tidlig defibrillering øker overlevelse dramatisk

## HLR hos barn

**Barn 1-pubertet:**
- Start med 5 innblåsninger
- Deretter 30:2 som hos voksne
- Bruk én eller to hender etter barnets størrelse

**Spedbarn (under 1 år):**
- Start med 5 innblåsninger
- Dekk munn og nese
- Bruk to fingre til kompresjoner
- 4 cm dyp kompresjon`,
        keyPoints: [
          'HLR startes ved bevisstløshet og fravær av normal pust',
          '30 kompresjoner og 2 innblåsninger i syklus',
          'Kompresjoner: midt på brystet, 5-6 cm dypt, 100-120/min',
          'Hjertestarter kan brukes av alle og øker overlevelsen',
          'HLR hos barn starter med 5 innblåsninger'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap5-sek3',
        title: 'Andre akutte situasjoner',
        content: `# Andre akutte situasjoner

## Hjerneslag - FAST

Hjerneslag krever rask behandling. Bruk **FAST**-kriteriene:

- **F - Face (ansikt):** Be personen smile. Henger den ene munnviken?
- **A - Arms (armer):** Be personen løfte begge armer. Synker den ene?
- **S - Speech (tale):** Be personen si en setning. Er talen utydelig?
- **T - Time (tid):** Ring 113 umiddelbart ved mistanke!

**Viktig:** Hver minutt teller. Rask behandling kan redde hjerneceller.

## Brystsmerter og hjerteinfarkt

### Symptomer på hjerteinfarkt
- Klemmende brystsmerter
- Kan stråle til arm, hals, kjeve
- Kvalme, kaldsvette
- Pustebesvær
- Angst, uro

### Førstehjelp
1. Ring 113
2. Hjelp personen i halvt sittende stilling
3. Løsne stramme klær
4. Gi ro og trygghet
5. Vær forberedt på HLR

## Allergisk reaksjon (anafylaksi)

### Symptomer
- Kløe, utslett, hevelse
- Hevelse i svelg/luftveier
- Pustebesvær, hvesende pust
- Blodtrykksfall, svimmelhet
- Bevisstløshet

### Førstehjelp
1. Ring 113
2. Fjern utløsende årsak om mulig
3. Hjelp med adrenalinpenn (EpiPen) hvis personen har
4. Ved pustevansker: sittende stilling
5. Ved bevisstløshet: stabilt sideleie
6. Vær forberedt på HLR

## Blødninger

### Ytre blødninger
1. Legg trykk på såret
2. Legg personen ned
3. Løft skadet kroppsdel høyt
4. Legg trykkbandasje
5. Ved livstruende blødning: tourniquet

### Indre blødninger
Tegn kan være:
- Blekhet, kaldsvette
- Rask, svak puls
- Smerter i magen
- Blod i oppkast, avføring eller urin

**Førstehjelp:** Ring 113, legg personen ned, gi trygghet

## Forgiftning

Ved mistanke om forgiftning:
1. Ring Giftinformasjonen: 22 59 13 00
2. Eller ring 113 ved alvorlige symptomer
3. Sikre luftveier
4. Ikke gi brekkmiddel (hvis ikke instruert)
5. Ta vare på emballasje/preparat`,
        keyPoints: [
          'FAST-kriteriene hjelper å gjenkjenne hjerneslag',
          'Ved hjerteinfarkt: ring 113, halvt sittende stilling, gi ro',
          'Anafylaksi kan være livstruende - adrenalinpenn kan redde liv',
          'Ved blødning: trykk, høyt leie, trykkbandasje',
          'Ved forgiftning: ring Giftinformasjonen eller 113'
        ]
      }
    ],
    exercises: [
      {
        id: 'helseoppvekst-vg2-kap5-oppg1',
        type: 'multiple-choice',
        question: 'Hva står ABCDE for i førstehjelp?',
        options: [
          'Arm, Ben, Celle, Dose, Effekt',
          'Airway, Breathing, Circulation, Disability, Expose',
          'Allergi, Blødning, Celle, Diagnose, Evaluering',
          'Analyse, Behandling, Kontroll, Dokumentasjon, Evaluering'
        ],
        correctAnswer: 1,
        explanation: 'ABCDE står for Airway (luftveier), Breathing (respirasjon), Circulation (sirkulasjon), Disability (bevissthet) og Expose/Environment (avdekking av skader og miljø).'
      },
      {
        id: 'helseoppvekst-vg2-kap5-oppg2',
        type: 'multiple-choice',
        question: 'Hvor dypt skal man komprimere ved HLR på voksne?',
        options: [
          '2-3 cm',
          '3-4 cm',
          '5-6 cm',
          '7-8 cm'
        ],
        correctAnswer: 2,
        explanation: 'Ved HLR på voksne skal man komprimere 5-6 cm dypt, midt på brystet, med en frekvens på 100-120 kompresjoner per minutt.'
      },
      {
        id: 'helseoppvekst-vg2-kap5-oppg3',
        type: 'multiple-choice',
        question: 'Hva betyr F i FAST-kriteriene for hjerneslag?',
        options: [
          'Fot - sjekk om personen kan gå',
          'Face - sjekk om ansiktet henger',
          'Finger - sjekk fingrenes bevegelighet',
          'Febril - sjekk om personen har feber'
        ],
        correctAnswer: 1,
        explanation: 'F i FAST står for Face (ansikt). Man ber personen smile for å se om den ene munnviken henger, noe som kan være tegn på hjerneslag.'
      },
      {
        id: 'helseoppvekst-vg2-kap5-oppg4',
        type: 'short-answer',
        question: 'Beskriv trinnene i HLR på en voksen person.',
        correctAnswer: 'HLR på voksen: 1) Sjekk bevissthet ved å riste i skuldrene og rope. 2) Rop på hjelp og få noen til å ringe 113 og hente hjertestarter. 3) Åpne luftveien ved å løfte haken. 4) Sjekk pust i 10 sekunder (se, lytt, føl). 5) Start 30 brystkompresjoner midt på brystet, 5-6 cm dypt, 100-120/min. 6) Gi 2 innblåsninger. 7) Fortsett 30:2 til ambulanse overtar eller personen våkner.'
      },
      {
        id: 'helseoppvekst-vg2-kap5-oppg5',
        type: 'short-answer',
        question: 'Hva er symptomene på anafylaksi og hvordan gir du førstehjelp?',
        correctAnswer: 'Symptomer på anafylaksi: kløe, utslett, hevelse (spesielt i ansikt og svelg), pustebesvær, hvesende pust, blodtrykksfall, svimmelhet og eventuelt bevisstløshet. Førstehjelp: Ring 113, fjern utløsende årsak om mulig, hjelp personen med adrenalinpenn (EpiPen) hvis de har det, plasser i sittende stilling ved pustevansker eller stabilt sideleie ved bevisstløshet, og vær forberedt på å starte HLR.'
      }
    ],
    summary: 'Dette kapittelet har gitt grunnleggende kunnskap om førstehjelp og håndtering av akutte situasjoner. Sikkerhet er alltid første prioritet før man hjelper. ABCDE-prinsippet gir en systematisk tilnærming til vurdering av skadede. Ved hjertestans starter man HLR med 30 kompresjoner og 2 innblåsninger, og hjertestarter brukes så snart den er tilgjengelig. FAST-kriteriene hjelper å gjenkjenne hjerneslag, der tid er kritisk. Ved anafylaksi og hjerteinfarkt er rask varsling (113) avgjørende. Kunnskap om blødningskontroll og forgiftningshåndtering kan også redde liv.'
  },
  {
    id: 'helseoppvekst-vg2-kap6',
    courseId: 'helseoppvekst-vg2',
    chapterNumber: 6,
    title: 'Psykisk helse',
    description: 'Forstå hva psykisk helse er, lær om vanlige psykiske lidelser og hvordan du kan støtte personer med psykiske utfordringer.',
    estimatedTime: '95 minutter',
    sections: [
      {
        id: 'helseoppvekst-vg2-kap6-sek1',
        title: 'Hva er psykisk helse?',
        content: `# Hva er psykisk helse?

## Definisjon

**Psykisk helse** handler om hvordan vi har det med oss selv og andre. Det omfatter:
- Følelsesmessig velvære
- Evne til å mestre hverdagens utfordringer
- Evne til å knytte relasjoner
- Evne til å fungere i samfunnet

### Psykisk helse som et kontinuum

Vi beveger oss alle langs et kontinuum:

**God psykisk helse** ← → **Psykiske plager** ← → **Psykisk lidelse**

- **Psykiske plager**: Vanlige, forbigående symptomer
- **Psykisk lidelse**: Diagnose som påvirker funksjon betydelig

## Faktorer som påvirker psykisk helse

### Beskyttelsesfaktorer
- Gode relasjoner og sosialt nettverk
- Mestringsopplevelser
- Tilhørighet og mening
- God fysisk helse
- Trygge oppvekstvilkår
- Økonomisk trygghet

### Risikofaktorer
- Traumer og overgrep
- Tap og kriser
- Ensomhet og isolasjon
- Rusmisbruk
- Mobbing
- Dårlig økonomi
- Arvelig sårbarhet

## Forebygging og helsefremmende arbeid

### Universell forebygging
Tiltak rettet mot hele befolkningen:
- Informasjonskampanjer
- Helsefremmende skoler
- Arbeidsmiljøtiltak

### Selektiv forebygging
Tiltak rettet mot risikogrupper:
- Støtte til barn av psykisk syke foreldre
- Tiltak for flyktninger
- Støtte ved arbeidsledighet

### Indikativ forebygging
Tiltak for personer med tidlige symptomer:
- Lavterskeltilbud
- Rask psykisk helsehjelp
- Tidlig intervensjon

## Stigma

**Stigma** er negative holdninger og fordommer knyttet til psykisk sykdom.

### Konsekvenser av stigma
- Hindrer folk i å søke hjelp
- Fører til skam og selvforakt
- Begrenser muligheter (jobb, bolig)
- Forverrer sykdommen

### Bekjempe stigma
- Åpenhet og kunnskap
- Personlige historier
- Bevisst språkbruk
- Likeverdige tjenester`,
        keyPoints: [
          'Psykisk helse omfatter følelsesmessig velvære og evne til å fungere',
          'Vi beveger oss langs et kontinuum mellom god helse og lidelse',
          'Beskyttelsesfaktorer og risikofaktorer påvirker psykisk helse',
          'Forebygging skjer på universelt, selektivt og indikativt nivå',
          'Stigma hindrer mange i å søke hjelp'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap6-sek2',
        title: 'Vanlige psykiske lidelser',
        content: `# Vanlige psykiske lidelser

## Depresjon

**Depresjon** er en av de vanligste psykiske lidelsene.

### Symptomer
- Nedstemthet mesteparten av dagen
- Tap av interesse og glede
- Energitap og tretthet
- Søvnproblemer
- Konsentrasjonsvansker
- Skyldfølelse og verdiløshet
- Tanker om død eller selvmord

### Alvorlighetsgrader
- Mild depresjon
- Moderat depresjon
- Alvorlig depresjon (med eller uten psykose)

### Behandling
- Samtalebehandling (kognitiv terapi, psykodynamisk terapi)
- Medikamenter (antidepressiva)
- Kombinasjon av begge
- Fysisk aktivitet
- Elektrokonvulsiv behandling (ECT) ved alvorlige tilfeller

## Angstlidelser

**Angst** er en naturlig følelse, men kan bli en lidelse når den er overdreven.

### Typer angstlidelser

**Generalisert angstlidelse:**
- Vedvarende bekymring
- Uro og rastløshet
- Muskelspenninger, søvnvansker

**Panikklidelse:**
- Plutselige, intense angstanfall
- Hjertebank, svette, svimmelhet
- Frykt for å dø eller miste kontrollen

**Sosial angst:**
- Intens frykt for sosiale situasjoner
- Redd for å bli vurdert negativt
- Unngåelsesatferd

**Fobier:**
- Intens frykt for spesifikke objekter eller situasjoner
- Eksempler: høydeskrekk, flyskrekk, edderkopper

### Behandling av angst
- Eksponeringsterapi
- Kognitiv terapi
- Medikamenter (angstdempende, antidepressiva)
- Avspenningsøvelser

## Psykoselidelser

**Psykose** innebærer tap av kontakt med virkeligheten.

### Symptomer
- Hallusinasjoner (sanseopplevelser uten ytre stimuli)
- Vrangforestillinger (feilaktige overbevisninger)
- Tankeforstyrrelser
- Endret atferd

### Schizofreni
- Kronisk psykoselidelse
- Debut ofte i ung voksen alder
- Krever langvarig behandling

### Behandling
- Antipsykotiske medikamenter
- Psykoterapi
- Rehabilitering
- Familie-/nettverksarbeid

## Spiseforstyrrelser

### Anoreksi
- Ekstrem vektnedgang
- Frykt for å legge på seg
- Forstyrret kroppsbilde

### Bulimi
- Overspising etterfulgt av renselse
- Kompenserende atferd (oppkast, avføringsmidler)
- Normal eller høy vekt

### Overspisingslidelse
- Episoder med ukontrollert overspising
- Uten kompenserende atferd
- Ofte overvekt`,
        keyPoints: [
          'Depresjon kjennetegnes av nedstemthet, tap av interesse og energitap',
          'Angstlidelser inkluderer generalisert angst, panikk, sosial angst og fobier',
          'Psykose innebærer hallusinasjoner og vrangforestillinger',
          'Spiseforstyrrelser omfatter anoreksi, bulimi og overspisingslidelse',
          'Behandling tilpasses den enkelte og kan inkludere terapi og/eller medisiner'
        ]
      },
      {
        id: 'helseoppvekst-vg2-kap6-sek3',
        title: 'Å støtte personer med psykiske utfordringer',
        content: `# Å støtte personer med psykiske utfordringer

## Kommunikasjon

### Grunnleggende prinsipper
- Lytt aktivt og vis interesse
- Vær til stede her og nå
- Unngå å dømme eller moralisere
- Anerkjenn følelsene
- Still åpne spørsmål
- Tål stillhet og tårer

### Hva du kan si
- "Jeg er her for deg"
- "Hvordan har du det egentlig?"
- "Det høres tungt ut"
- "Du er ikke alene"
- "Det finnes hjelp å få"

### Hva du bør unngå
- "Bare ta deg sammen"
- "Andre har det verre"
- "Du har jo alt du trenger"
- "Tenk positivt"
- Bagatellisere følelsene

## Recovery-orientert tilnærming

**Recovery** handler om å leve et meningsfullt liv, uavhengig av symptomer.

### Nøkkelelementer i recovery
- **Håp**: Troen på at bedring er mulig
- **Identitet**: Være mer enn diagnosen
- **Mening**: Finne mål og mening i livet
- **Empowerment**: Ta kontroll over eget liv

### Helsepersonells rolle
- Støtte personens egne mål
- Fremme mestring og selvstendighet
- Anerkjenne erfaringskompetanse
- Involvere familie og nettverk

## Selvmordsforebygging

### Varseltegn
- Snakker om å ville dø
- Føler seg som en byrde
- Trekker seg tilbake
- Økt rus/medikamentbruk
- Gir bort eiendeler
- Uttrykker håpløshet

### Hvordan snakke om selvmord
- Tør å spørre direkte: "Tenker du på å ta ditt eget liv?"
- Å spørre øker IKKE risikoen
- Ta det på alvor
- Ikke lov å holde det hemmelig
- Sørg for at personen får hjelp

### Hjelpelinjer
- Kirkens SOS: 22 40 00 40
- Mental Helse: 116 123
- Alarmtelefonen for barn og unge: 116 111

## Tvangsbruk

### Når kan tvang brukes?
- Ved alvorlig psykisk lidelse
- Når frivillighet er forsøkt
- Når det er fare for eget eller andres liv
- Regulert i psykisk helsevernloven

### Prinsippet om minst inngripende tiltak
- Frivillighet først
- Bruk mildeste effektive tiltak
- Evaluer kontinuerlig behovet

### Pasientens rettigheter ved tvang
- Rett til informasjon
- Rett til å klage
- Rett til kontrollkommisjon
- Rett til advokat`,
        keyPoints: [
          'God kommunikasjon innebærer å lytte, anerkjenne og unngå å dømme',
          'Recovery handler om å leve meningsfullt uavhengig av symptomer',
          'Tør å spørre direkte om selvmordstanker',
          'Tvang kan bare brukes under strenge vilkår og som siste utvei',
          'Pasienter har viktige rettigheter også ved tvangsbehandling'
        ]
      }
    ],
    exercises: [
      {
        id: 'helseoppvekst-vg2-kap6-oppg1',
        type: 'multiple-choice',
        question: 'Hva er forskjellen mellom psykiske plager og psykisk lidelse?',
        options: [
          'Det er ingen forskjell',
          'Psykiske plager er alvorligere enn psykisk lidelse',
          'Psykiske plager er vanlige og forbigående, psykisk lidelse er en diagnose som påvirker funksjon betydelig',
          'Psykisk lidelse kan behandles, psykiske plager kan ikke'
        ],
        correctAnswer: 2,
        explanation: 'Psykiske plager er vanlige, forbigående symptomer som mange opplever. Psykisk lidelse er en diagnose som påvirker personens funksjon betydelig og krever ofte behandling.'
      },
      {
        id: 'helseoppvekst-vg2-kap6-oppg2',
        type: 'multiple-choice',
        question: 'Hva kjennetegner panikklidelse?',
        options: [
          'Vedvarende bekymring over lang tid',
          'Plutselige, intense angstanfall med fysiske symptomer',
          'Frykt for sosiale situasjoner',
          'Frykt for spesifikke objekter'
        ],
        correctAnswer: 1,
        explanation: 'Panikklidelse kjennetegnes av plutselige, intense angstanfall med fysiske symptomer som hjertebank, svette og svimmelhet, og ofte frykt for å dø eller miste kontrollen.'
      },
      {
        id: 'helseoppvekst-vg2-kap6-oppg3',
        type: 'multiple-choice',
        question: 'Hva bør du gjøre hvis du er bekymret for at noen tenker på selvmord?',
        options: [
          'Unngå å snakke om det for ikke å gi dem ideer',
          'Vente og se om det går over',
          'Spørre direkte om de tenker på å ta sitt eget liv',
          'Snakke om andre ting for å distrahere dem'
        ],
        correctAnswer: 2,
        explanation: 'Forskning viser at å spørre direkte om selvmordstanker ikke øker risikoen, men tvert imot kan være livreddende. Det viser at du bryr deg og åpner for at personen kan få hjelp.'
      },
      {
        id: 'helseoppvekst-vg2-kap6-oppg4',
        type: 'short-answer',
        question: 'Forklar hva recovery-tilnærmingen innebærer og nevn de fire nøkkelelementene.',
        correctAnswer: 'Recovery handler om å leve et meningsfullt liv uavhengig av symptomer, ikke nødvendigvis fravær av sykdom. De fire nøkkelelementene er: 1) Håp - troen på at bedring er mulig, 2) Identitet - være mer enn diagnosen sin, 3) Mening - finne mål og mening i livet, og 4) Empowerment - ta kontroll over eget liv. Helsepersonell skal støtte personens egne mål og fremme mestring.'
      },
      {
        id: 'helseoppvekst-vg2-kap6-oppg5',
        type: 'short-answer',
        question: 'Beskriv hva stigma er og hvorfor det er problematisk i forhold til psykisk helse.',
        correctAnswer: 'Stigma er negative holdninger, fordommer og diskriminering knyttet til psykisk sykdom. Det er problematisk fordi det hindrer folk i å søke hjelp, fører til skam og selvforakt, begrenser muligheter for jobb og bolig, og kan forverrer selve sykdommen. Stigma bekjempes gjennom åpenhet, kunnskap, personlige historier og bevisst språkbruk.'
      }
    ],
    summary: 'Dette kapittelet har gitt innsikt i psykisk helse og psykiske lidelser. Psykisk helse er et kontinuum der vi alle beveger oss. Beskyttelsesfaktorer som gode relasjoner og mestring, samt risikofaktorer som traumer og ensomhet, påvirker vår psykiske helse. Vanlige lidelser inkluderer depresjon, angstlidelser, psykoselidelser og spiseforstyrrelser. God kommunikasjon med personer som sliter handler om å lytte, anerkjenne og unngå å dømme. Recovery-tilnærmingen fokuserer på å leve meningsfullt uavhengig av symptomer. Ved bekymring for selvmord skal man tørre å spørre direkte. Stigma er en viktig barriere for å søke hjelp, og må bekjempes aktivt.'
  },
];

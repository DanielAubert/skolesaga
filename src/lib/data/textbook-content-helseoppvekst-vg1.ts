/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Helse- og oppvekstfag VG1
 * Folger LK20 laereplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_HELSEOPPVEKST_VG1_1_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-1-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '1.1',
  title: 'Hva er helse- og oppvekstfag?',
  description: 'En introduksjon til helse- og oppvekstsektoren, yrkesmuligheter og verdier i fagfeltet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive helse- og oppvekstsektoren og yrkesmuligheter i sektoren',
    'reflektere over verdier og holdninger i helse- og oppvekstarbeid',
  ],
  content: [
    {
      id: 'helseoppvekst-vg1-1-1-intro',
      type: 'text',
      content: `# Velkommen til helse- og oppvekstfag

Helse- og oppvekstfag er et utdanningsprogram som forbereder deg pa a jobbe med mennesker i alle livsfaser. Fra nyfodte barn til eldre mennesker - du vil laere a gi omsorg, stotte utvikling og bidra til god helse og livskvalitet.

**Helse- og oppvekstsektoren** er en av Norges storste arbeidsgivere. Her jobber det over 400 000 mennesker, og behovet for kvalifisert arbeidskraft oker stadig.

## Hva kjennetegner arbeid i denne sektoren?

Arbeid i helse- og oppvekstsektoren handler om:
- A mote mennesker med respekt og verdighet
- A stotte menneskers helse, utvikling og livskvalitet
- A samarbeide med kolleger, brukere og parorende
- A folge lover, retningslinjer og etiske prinsipper
- A bruke fagkunnskap til a ta gode beslutninger`,
    },
    {
      id: 'helseoppvekst-vg1-1-1-def-sektor',
      type: 'definition',
      title: 'Helse- og oppvekstsektoren',
      content: 'Den delen av arbeidslivet som omfatter helsetjenester, omsorgstjenester og tjenester knyttet til barn og unges oppvekst. Inkluderer bade offentlige og private virksomheter.',
    },
    {
      id: 'helseoppvekst-vg1-1-1-omrader',
      type: 'text',
      content: `# Hovedomrader i sektoren

## Helsetjenester
Helsetjenestene deles inn i **primaerhelsetjenesten** og **spesialisthelsetjenesten**.

**Primaerhelsetjenesten** (kommunehelsetjenesten):
- Fastleger og legevakt
- Hjemmesykepleie
- Sykehjem og omsorgsboliger
- Helsestasjon og skolehelsetjeneste
- Fysioterapi og ergoterapi
- Psykisk helsetjeneste i kommunen

**Spesialisthelsetjenesten** (sykehus):
- Somatiske sykehus (kroppslige sykdommer)
- Psykiatriske sykehus
- Rehabiliteringsinstitusjoner
- Ambulansetjeneste

## Oppvekstsektoren
Oppvekstsektoren handler om barn og unges utvikling og velferd:

- Barnehager
- Skolefritidsordning (SFO/AKS)
- Barnevern
- Ungdomsarbeid
- Fritidsklubber

## Sosiale tjenester
- NAV (arbeids- og velferdstjenester)
- Rus- og psykisk helsearbeid
- Flyktningtjenester
- Botilbud for ulike grupper`,
    },
    {
      id: 'helseoppvekst-vg1-1-1-yrker',
      type: 'text',
      content: `# Yrkesmuligheter

Med utdanning innen helse- og oppvekstfag kan du bli:

## Etter VG2 og laerertid/fagbrev:
- **Helsefagarbeider** - jobber med pleie og omsorg for syke og eldre
- **Barne- og ungdomsarbeider** - jobber med barn og unge i barnehage, SFO eller fritidsaktiviteter
- **Portorfagarbeider** - jobber med pasienttransport og logistikk pa sykehus
- **Ambulansearbeider** - jobber i ambulansetjenesten (krever tilleggsutdanning)

## Med videre utdanning (hogskole/universitet):
- Sykepleier
- Vernepleier
- Barnehagelarer
- Sosionom
- Ergoterapeut
- Fysioterapeut
- Lege
- Psykolog

## Karrieremuligheter
Sektoren tilbyr gode muligheter for:
- Videreutdanning og spesialisering
- Lederstillinger
- Fagutvikling og forskning
- Internasjonal erfaring`,
    },
    {
      id: 'helseoppvekst-vg1-1-1-verdier',
      type: 'text',
      content: `# Verdier i helse- og oppvekstarbeid

Alle som jobber i helse- og oppvekstsektoren ma ha et bevisst forhold til verdier og holdninger.

## Grunnleggende verdier

**Menneskeverd**
Alle mennesker har samme verdi, uavhengig av alder, funksjonsniva, bakgrunn eller livssituasjon.

**Respekt**
A mote andre med respekt betyr a anerkjenne deres rett til a bestemme over eget liv og a ta hensyn til deres folelser, meninger og behov.

**Omsorg**
Omsorg handler om a bry seg om andre menneskers velferd og a handle for a ivareta deres behov.

**Rettferdighet**
Alle skal ha lik tilgang til tjenester og behandles rettferdig uavhengig av bakgrunn.

**Autonomi**
Mennesker har rett til a ta egne valg og bestemme over eget liv, sa langt det er mulig.`,
    },
    {
      id: 'helseoppvekst-vg1-1-1-def-menneskeverd',
      type: 'definition',
      title: 'Menneskeverd',
      content: 'Den iboende verdien alle mennesker har i kraft av a vaere menneske. Menneskeverdet er ukrenkelig og uavhengig av egenskaper, prestasjoner eller sosial status.',
    },
    {
      id: 'helseoppvekst-vg1-1-1-holdninger',
      type: 'text',
      content: `# Holdninger i yrket

**Holdninger** er vare innstillinger til mennesker, situasjoner og fenomener. I helse- og oppvekstarbeid er det viktig a vaere bevisst egne holdninger.

## Gode holdninger i yrket:
- **Empati** - evne til a sette seg inn i andres situasjon
- **Apen og nysgjerrig** - interesse for a forstå mennesker
- **Toleranse** - aksept for forskjellighet
- **Ansvarlighet** - ta ansvar for egne handlinger
- **Profesjonalitet** - skille mellom private og profesjonelle relasjoner

## Refleksjon over egne holdninger
Som yrkesutover ma du:
- Vaere bevisst egne fordommer og stereotypier
- Reflektere over hvordan holdninger pavirker handlinger
- Vaere apen for a endre holdninger nar du far ny kunnskap
- Diskutere etiske dilemmaer med kolleger`,
    },
    {
      id: 'helseoppvekst-vg1-1-1-example',
      type: 'example',
      title: 'Holdninger i praksis',
      problem: 'Maria jobber pa sykehjem. En ny beboer, Ahmed, har flyttet inn. Noen kolleger kommenterer at "de fra andre kulturer" har andre verdier om eldreomsorg. Hvordan bor Maria handle?',
      solution: `Maria bor:

1. **Mote Ahmed som individ** - Ikke gjore antakelser basert pa bakgrunn, men bli kjent med Ahmed og hans onsker og behov.

2. **Vaere bevisst stereotypier** - Kommentaren til kollegene er en generalisering. Mennesker er individer, ikke representanter for "sin kultur".

3. **Ta opp temaet profesjonelt** - Maria kan si til kollegene: "La oss bli kjent med Ahmed og hore hva han selv onsker, i stedet for a anta noe."

4. **Soke kunnskap** - Hvis det er kulturelle eller religose hensyn Ahmed onsker, kan Maria sporre ham direkte og tilpasse omsorgen.

5. **Fokusere pa verdighet** - Alle beboere skal motes med respekt og fa omsorg tilpasset sine individuelle behov.

**Laering:** Gode holdninger i praksis handler om a mote hvert menneske som et unikt individ med egne behov, onsker og rettigheter.`,
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-1-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er primaerhelsetjenesten?',
      solution: 'Helsetjenester i kommunen, som fastlege, hjemmesykepleie og sykehjem',
      multipleChoiceOptions: [
        'Helsetjenester i kommunen, som fastlege, hjemmesykepleie og sykehjem',
        'Helsetjenester pa sykehus',
        'Kun akuttmedisinske tjenester',
        'Private helsetjenester',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket yrke kan du fa med fagbrev i helse- og oppvekstfag?',
      solution: 'Helsefagarbeider',
      multipleChoiceOptions: [
        'Helsefagarbeider',
        'Sykepleier',
        'Lege',
        'Psykolog',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr menneskeverd?',
      solution: 'At alle mennesker har lik verdi uansett bakgrunn eller egenskaper',
      multipleChoiceOptions: [
        'At alle mennesker har lik verdi uansett bakgrunn eller egenskaper',
        'At noen mennesker er mer verdifulle enn andre',
        'At verdien avhenger av hva man bidrar med i samfunnet',
        'At bare friske mennesker har full verdi',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er autonomi i helse- og oppvekstarbeid?',
      solution: 'Retten til a bestemme over eget liv og ta egne valg',
      multipleChoiceOptions: [
        'Retten til a bestemme over eget liv og ta egne valg',
        'At helsepersonell bestemmer hva som er best',
        'At parorende tar alle avgjorelser',
        'At kommunen styrer alle tjenester',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner empati?',
      solution: 'Evnen til a sette seg inn i andres situasjon og folelser',
      multipleChoiceOptions: [
        'Evnen til a sette seg inn i andres situasjon og folelser',
        'A vaere enig med alle',
        'A synes synd pa andre',
        'A ta over andres problemer',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken sektor omfatter barnehager og SFO?',
      solution: 'Oppvekstsektoren',
      multipleChoiceOptions: [
        'Oppvekstsektoren',
        'Spesialisthelsetjenesten',
        'NAV',
        'Primaerhelsetjenesten',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er det viktig a reflektere over egne holdninger i helse- og oppvekstarbeid?',
      solution: 'Fordi holdninger pavirker hvordan vi moter og behandler mennesker',
      multipleChoiceOptions: [
        'Fordi holdninger pavirker hvordan vi moter og behandler mennesker',
        'Fordi det star i loven',
        'Fordi ledelsen krever det',
        'Fordi det gir hoyere lonn',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-1-ex-8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skiller profesjonell omsorg fra privat omsorg?',
      solution: 'Profesjonell omsorg er basert pa fagkunnskap, etiske retningslinjer og lovverk',
      multipleChoiceOptions: [
        'Profesjonell omsorg er basert pa fagkunnskap, etiske retningslinjer og lovverk',
        'Profesjonell omsorg er mindre personlig',
        'Profesjonell omsorg gis bare pa sykehus',
        'Det er ingen forskjell',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_1_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-1-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '1.2',
  title: 'Helsefremmende arbeid',
  description: 'Laer om hva som pavirker helse, forebyggende arbeid og helsefremmende tiltak.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for faktorer som pavirker helse og livskvalitet',
    'forklare hva helsefremmende arbeid innebarer',
  ],
  content: [
    {
      id: 'helseoppvekst-vg1-1-2-intro',
      type: 'text',
      content: `# Hva er helse?

Verdens helseorganisasjon (WHO) definerer helse som:

> "En tilstand av fullstendig fysisk, psykisk og sosialt velvare, og ikke bare fravar av sykdom eller lidelse."

Denne definisjonen viser at helse handler om mer enn a ikke vaere syk. God helse inkluderer:

- **Fysisk helse** - kroppens tilstand og funksjon
- **Psykisk helse** - folelser, tanker og mental velvare
- **Sosial helse** - relasjoner, tilhorighet og deltakelse i samfunnet

## Et helhetlig syn pa helse
I helse- og oppvekstfag jobber vi med et **helhetlig menneskesyn**. Det betyr at vi ser mennesket som en helhet der kropp, psyke og sosiale forhold henger sammen og pavirker hverandre.`,
    },
    {
      id: 'helseoppvekst-vg1-1-2-def-helse',
      type: 'definition',
      title: 'Helse',
      content: 'En tilstand av fullstendig fysisk, psykisk og sosialt velvare, og ikke bare fravar av sykdom eller lidelse (WHOs definisjon fra 1948).',
    },
    {
      id: 'helseoppvekst-vg1-1-2-faktorer',
      type: 'text',
      content: `# Faktorer som pavirker helse

Mange ulike faktorer pavirker helsa var. Disse kalles ofte **helsedeterminanter**.

## Individuelle faktorer
- **Arv og genetikk** - noen sykdommer og egenskaper er arvelige
- **Livsstil** - kosthold, fysisk aktivitet, sovn, rusmidler
- **Personlige ressurser** - mestringsevne, selvfolelse, kunnskap

## Sosiale faktorer
- **Oppvekstvilkar** - trygg barndom, omsorg, stimulering
- **Utdanning** - pavirker jobbmuligheter og okonomi
- **Arbeid og okonomi** - inntekt, arbeidsmiljo, jobbsikkerhet
- **Sosiale nettverk** - familie, venner, tilhorighet
- **Sosial ulikhet** - forskjeller i levekår mellom grupper

## Miljofaktorer
- **Fysisk miljo** - boforhold, narmiljo, forurensning
- **Tilgang til tjenester** - helsetjenester, skole, fritidsaktiviteter
- **Arbeidsmiljo** - fysiske og psykososiale forhold pa jobb

## Samfunnsfaktorer
- **Politikk og lovgivning** - velferdsordninger, rettigheter
- **Kultur og verdier** - normer for helse og livsstil
- **Mediepåvirkning** - informasjon og idealer`,
    },
    {
      id: 'helseoppvekst-vg1-1-2-def-determinanter',
      type: 'definition',
      title: 'Helsedeterminanter',
      content: 'Faktorer som pavirker helsetilstanden i en befolkning eller hos enkeltpersoner. Inkluderer bade individuelle, sosiale, miljo- og samfunnsmessige faktorer.',
    },
    {
      id: 'helseoppvekst-vg1-1-2-sosial-ulikhet',
      type: 'text',
      content: `# Sosial ulikhet i helse

**Sosial ulikhet i helse** betyr at det er systematiske forskjeller i helse mellom sosiale grupper. I Norge ser vi at:

- Personer med lang utdanning lever i gjennomsnitt 5-6 ar lenger enn de med kort utdanning
- Barn fra familier med lav inntekt har oftere helseproblemer
- Innvandrere fra enkelte land har darligere helse enn gjennomsnittet

## Hvorfor oppstar sosial ulikhet i helse?

1. **Materielle forhold** - darlig okonomi gir darligere boforhold, kosthold og muligheter
2. **Psykososiale forhold** - stress, lav kontroll, mindre sosial stotte
3. **Livsstil** - roykevaner, kosthold og fysisk aktivitet varierer mellom grupper
4. **Tilgang til tjenester** - ulik bruk av helsetjenester

## A utjevne sosial ulikhet
Et viktig mal i folkehelsearbeidet er a redusere sosial ulikhet i helse. Dette krever tiltak pa mange nivaer - fra individuell stotte til strukturelle endringer i samfunnet.`,
    },
    {
      id: 'helseoppvekst-vg1-1-2-forebygging',
      type: 'text',
      content: `# Forebyggende og helsefremmende arbeid

## Hva er forskjellen?

**Forebyggende arbeid** (sykdomsforebygging):
- Fokuserer pa a hindre at sykdom og skade oppstar
- Tar utgangspunkt i risikofaktorer
- Eksempler: vaksinering, roykeslutt, fallforebygging

**Helsefremmende arbeid**:
- Fokuserer pa a styrke faktorer som fremmer god helse
- Tar utgangspunkt i ressurser og muligheter
- Eksempler: styrke mestring, skape gode miljoer, oke deltakelse

## Nivaer av forebygging

**Primaerforebygging**
Tiltak for a hindre at sykdom oppstar i friske befolkningsgrupper.
- Eksempel: Vaksinasjonsprogram, kostholdsrad, trafikkopplaering

**Sekundaerforebygging**
Tidlig oppdagelse og behandling for a hindre utvikling av sykdom.
- Eksempel: Screening for kreft, diabeteskontroller, helseundersokelser

**Tertiaerforebygging**
Tiltak for a begrense konsekvenser av etablert sykdom.
- Eksempel: Rehabilitering etter slag, opplaering i a leve med kronisk sykdom`,
    },
    {
      id: 'helseoppvekst-vg1-1-2-def-forebygging',
      type: 'definition',
      title: 'Forebygging',
      content: 'Tiltak som har som mal a hindre at sykdom, skade eller sosiale problemer oppstar, eller a stoppe eller forsinke videre utvikling av tilstanden.',
    },
    {
      id: 'helseoppvekst-vg1-1-2-folkehelse',
      type: 'text',
      content: `# Folkehelsearbeid

**Folkehelse** handler om helsetilstanden i befolkningen som helhet. **Folkehelsearbeid** er samfunnets innsats for a pavirke faktorer som fremmer helse og forebygger sykdom.

## Viktige arenaer for folkehelsearbeid:

**Barnehage og skole**
- Fysisk aktivitet og kosthold
- Psykisk helse og trivsel
- Forebygging av mobbing
- Helseopplysning

**Arbeidsliv**
- HMS-arbeid (helse, miljo og sikkerhet)
- Tilrettelegging for fysisk aktivitet
- Forebygging av stress og utbrenthet

**Lokalmiljo**
- Tilrettelegging for fysisk aktivitet (turstier, lekeplasser)
- Trygge naermiljoer
- Sosiale moterplasser

**Helsetjenesten**
- Helsestasjoner og skolehelsetjeneste
- Frisklivssentraler
- Rad og veiledning`,
    },
    {
      id: 'helseoppvekst-vg1-1-2-example',
      type: 'example',
      title: 'Helsefremmende tiltak i praksis',
      problem: 'En kommune onsker a bedre helsa til innbyggerne. De vurderer to tiltak: A) Starte en roykesluttkampanje B) Bygge en ny tursti med lys. Hvilke typer tiltak er dette?',
      solution: `**A) Roykesluttkampanje**
- Type: **Forebyggende tiltak** (sykdomsforebygging)
- Niva: Primaer- og sekundaerforebygging
- Fokus: Fjerne en risikofaktor (royking)
- Malgruppe: Roykere og potensielle roykere

**B) Tursti med lys**
- Type: **Helsefremmende tiltak**
- Fokus: Styrke muligheter for fysisk aktivitet
- Malgruppe: Hele befolkningen
- Tilleggsgeffekter: Sosiale moter, naturopplevelser, trygghet

**Begge tiltak er viktige!**
- Roykeslutt reduserer risiko for alvorlig sykdom
- Turstien legger til rette for at flere kan vaere fysisk aktive

Et godt folkehelsearbeid kombinerer bade forebyggende og helsefremmende tiltak.`,
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-1-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva inkluderer WHOs definisjon av helse?',
      solution: 'Fysisk, psykisk og sosialt velvare',
      multipleChoiceOptions: [
        'Fysisk, psykisk og sosialt velvare',
        'Bare fravar av sykdom',
        'Kun fysisk helse',
        'A vaere i god fysisk form',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er helsedeterminanter?',
      solution: 'Faktorer som pavirker helse',
      multipleChoiceOptions: [
        'Faktorer som pavirker helse',
        'Typer sykdommer',
        'Medisinske behandlinger',
        'Helsearbeidere',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er primaerforebygging?',
      solution: 'Tiltak for a hindre at sykdom oppstar hos friske',
      multipleChoiceOptions: [
        'Tiltak for a hindre at sykdom oppstar hos friske',
        'Behandling av sykdom',
        'Rehabilitering etter sykdom',
        'Screening for a oppdage sykdom',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken faktor er en sosial helsedeterminant?',
      solution: 'Utdanning og okonomi',
      multipleChoiceOptions: [
        'Utdanning og okonomi',
        'Genetikk og arv',
        'Bakterier og virus',
        'Medisiner og behandling',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner helsefremmende arbeid sammenlignet med forebygging?',
      solution: 'Fokus pa a styrke ressurser og muligheter for god helse',
      multipleChoiceOptions: [
        'Fokus pa a styrke ressurser og muligheter for god helse',
        'Fokus pa a fjerne risikofaktorer',
        'Fokus pa behandling av sykdom',
        'Fokus pa medisiner',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er sosial ulikhet i helse?',
      solution: 'Systematiske helseforskjeller mellom sosiale grupper',
      multipleChoiceOptions: [
        'Systematiske helseforskjeller mellom sosiale grupper',
        'At noen er sykere enn andre',
        'At alle har lik helse',
        'At helse er urettferdig fordelt pa sykehus',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket eksempel er tertiaerforebygging?',
      solution: 'Rehabilitering etter hjerteinfarkt',
      multipleChoiceOptions: [
        'Rehabilitering etter hjerteinfarkt',
        'Vaksinering av barn',
        'Mammografi-screening',
        'Kostholdsrad til friske',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-2-ex-8',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor lever personer med lang utdanning i gjennomsnitt lenger?',
      solution: 'Bedre okonomi, sunnere livsstil, mer kunnskap og bedre tilgang til ressurser',
      multipleChoiceOptions: [
        'Bedre okonomi, sunnere livsstil, mer kunnskap og bedre tilgang til ressurser',
        'De har bedre gener',
        'De far bedre behandling pa sykehus',
        'De bor i sunnere omrader',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_1_3: TextbookChapter = {
  id: 'helseoppvekst-vg1-1-3',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '1.3',
  title: 'Kommunikasjon og samhandling',
  description: 'Laer om kommunikasjon, aktiv lytting og profesjonell samhandling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'kommunisere med ulike brukergrupper',
    'bruke aktiv lytting og empatisk kommunikasjon',
  ],
  content: [
    { id: 'hov1-1-3-1', type: 'text', content: '# Kommunikasjon i helse- og oppvekstfag\n\nGod kommunikasjon er grunnlaget for alt arbeid med mennesker. Som yrkesutover ma du kunne kommunisere med mange ulike mennesker i forskjellige situasjoner.\n\n## Hva er kommunikasjon?\nKommunikasjon kommer fra det latinske \"communicare\" som betyr a gjore felles. Kommunikasjon handler om a dele tanker, folelser og informasjon.\n\n## Kommunikasjonsprosessen\n- **Avsender** - den som sender budskapet\n- **Budskap** - det som formidles\n- **Kanal** - maten budskapet sendes pa\n- **Mottaker** - den som mottar budskapet\n- **Tilbakemelding** - respons fra mottaker' },
    { id: 'hov1-1-3-2', type: 'definition', title: 'Kommunikasjon', content: 'Utveksling av informasjon, tanker og folelser mellom mennesker. Inkluderer bade verbal (ord) og nonverbal (kroppssprak) kommunikasjon.' },
    { id: 'hov1-1-3-3', type: 'text', content: '# Verbal og nonverbal kommunikasjon\n\n## Verbal kommunikasjon\nBruk av ord, bade muntlig og skriftlig.\n- Ordvalg og sprakniva\n- Tonefall og stemmebruk\n- Tempo og pauser\n\n## Nonverbal kommunikasjon\nAlt vi uttrykker uten ord:\n- Ansiktsuttrykk\n- Oyekontakt\n- Kroppsholdning\n- Gester og bevegelser\n- Fysisk avstand\n- Beroring\n\nForskning viser at over 70% av kommunikasjonen er nonverbal. Det er derfor viktig a vaere bevisst pa kroppspraket ditt.' },
    { id: 'hov1-1-3-4', type: 'text', content: '# Aktiv lytting\n\nAktiv lytting er en ferdighet som viser at du virkelig horer og forstar det den andre sier.\n\n## Teknikker for aktiv lytting\n- **Vis oppmerksomhet** - oyekontakt, nikk, vend deg mot personen\n- **Ikke avbryt** - la personen snakke ferdig\n- **Still apne sporsmål** - sporsmål som krever mer enn ja/nei\n- **Speiling** - gjenta det viktigste med egne ord\n- **Oppsummering** - oppsummer det du har hort\n- **Bekreftelse** - vis at du forstar folelsene' },
    { id: 'hov1-1-3-5', type: 'tip', title: 'Apne sporsmål', content: 'Apne sporsmål begynner ofte med: Hva, Hvordan, Hvorfor, Fortell om...\n\nEksempel: I stedet for \"Har du det bra?\" (lukket), spor \"Hvordan har du det i dag?\" (apent)' },
    { id: 'hov1-1-3-6', type: 'text', content: '# Kommunikasjon med ulike brukergrupper\n\n## Barn\n- Tilpass spraket til alder\n- Vær konkret og tydelig\n- Bruk lek og aktiviteter\n- Ga ned pa barnets niva fysisk\n\n## Eldre\n- Ta deg tid\n- Snakk tydelig, ikke for fort\n- Vær tålmodig ved horelsproblemer\n- Vis respekt for livserfaring\n\n## Personer med kognitiv svikt\n- Bruk enkle setninger\n- En beskjed om gangen\n- Vær tålmodig\n- Bruk visuell stotte\n\n## Personer i krise\n- Vær rolig og trygg\n- Lytt uten a domme\n- Anerkjenn folelser\n- Ikke bagatelliser' },
    { id: 'hov1-1-3-ex1', type: 'exercise', exercise: { id: 'hov1-1-3-ex1', type: 'multiple-choice', task: 'Hva er aktiv lytting?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['A vise med ord og kroppssprak at du horer og forstar', 'A hore pa mens du gjor andre ting', 'A avbryte med egne kommentarer', 'A gi rad sa raskt som mulig'], solution: 'Aktiv lytting handler om a vise med bade ord og kroppssprak at du horer, forstar og er interessert i det den andre sier.' }] } },
    { id: 'hov1-1-3-ex2', type: 'exercise', exercise: { id: 'hov1-1-3-ex2', type: 'multiple-choice', task: 'Hva er nonverbal kommunikasjon?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['Kommunikasjon uten ord, som kroppssprak og ansiktsuttrykk', 'Skriftlig kommunikasjon', 'Muntlig kommunikasjon', 'Kommunikasjon pa telefon'], solution: 'Nonverbal kommunikasjon er alt vi uttrykker uten ord, som ansiktsuttrykk, kroppsholdning og gester.' }] } }
  ],
  exercises: [],
};

export const CHAPTER_HELSEOPPVEKST_VG1_2_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-2-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '2.1',
  title: 'Kroppen og grunnleggende behov',
  description: 'Laer om kroppens oppbygning og menneskers grunnleggende behov.',
  estimatedMinutes: 70,
  competenceGoals: [
    'beskrive kroppens oppbygning og funksjon',
    'gjore rede for menneskers grunnleggende behov',
  ],
  content: [
    { id: 'hov1-2-1-1', type: 'text', content: '# Kroppens oppbygning\n\nKroppen er et fantastisk system der mange deler samarbeider. For a jobbe i helse- og oppvekstfag, trenger du grunnleggende kunnskap om kroppen.\n\n## Organisasjonsniva\n1. **Celler** - kroppens minste byggeklosser\n2. **Vev** - grupper av like celler som jobber sammen\n3. **Organer** - strukturer sammensatt av ulike vev\n4. **Organsystemer** - grupper av organer med felles funksjon\n5. **Organismen** - hele kroppen som fungerer som helhet' },
    { id: 'hov1-2-1-2', type: 'text', content: '# Viktige organsystemer\n\n## Bevegelsesapparatet\n- Skjelett (206 bein)\n- Muskler\n- Ledd og sener\n\n## Sirkulasjonssystemet\n- Hjertet\n- Blodkar (arterier, vener, kapillarer)\n- Blodet\n\n## Respirasjonssystemet\n- Nese og munn\n- Luftror og bronkier\n- Lunger\n\n## Fordoyelsessystemet\n- Munn, spiserør, mage\n- Tynntarm og tykktarm\n- Lever og bukspyttkjertel\n\n## Nervesystemet\n- Hjernen og ryggmargen\n- Nerver ut i kroppen\n- Sanseorganer' },
    { id: 'hov1-2-1-3', type: 'definition', title: 'Homeostase', content: 'Kroppens evne til a opprettholde et stabilt indre miljo, som temperatur, blodtrykk og blodsukker, til tross for endringer i ytre forhold.' },
    { id: 'hov1-2-1-4', type: 'text', content: '# Grunnleggende behov\n\nAlle mennesker har behov som ma dekkes for a overleve og ha god livskvalitet.\n\n## Maslows behovspyramide\n\n**1. Fysiologiske behov** (nederst)\n- Mat og drikke\n- Luft og pust\n- Sovn og hvile\n- Varme og ly\n- Utskillelse\n\n**2. Sikkerhetsbehov**\n- Trygghet\n- Forutsigbarhet\n- Beskyttelse\n\n**3. Sosiale behov**\n- Tilhorighet\n- Kjaerlighet\n- Vennskap\n\n**4. Behov for anerkjennelse**\n- Respekt\n- Status\n- Selvfolelse\n\n**5. Selvrealisering** (overst)\n- Utvikling av potensial\n- Kreativitet\n- Mening' },
    { id: 'hov1-2-1-5', type: 'example', title: 'Behovspyramiden i praksis', content: 'En eldre kvinne pa sykehjem ma forst fa dekket fysiologiske behov (mat, drikke, hygiene). Nar dette er pa plass, er det viktig a ivareta sosiale behov (kontakt med andre) og behov for anerkjennelse (bli behandlet med respekt).' },
    { id: 'hov1-2-1-ex1', type: 'exercise', exercise: { id: 'hov1-2-1-ex1', type: 'multiple-choice', task: 'Hva er de fysiologiske behovene i Maslows pyramide?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['Mat, drikke, luft, sovn og varme', 'Vennskap og tilhorighet', 'Respekt og status', 'Utvikling av potensial'], solution: 'Fysiologiske behov er de mest grunnleggende: mat, drikke, luft, sovn, varme og utskillelse.' }] } }
  ],
  exercises: [],
};

export const CHAPTER_HELSEOPPVEKST_VG1_2_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-2-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '2.2',
  title: 'Hygiene og smittevern',
  description: 'Laer om hygiene, smitte og hvordan forebygge spredning av sykdom.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for betydningen av god hygiene',
    'forklare smittemater og smittekjeden',
    'utfore handhygiene korrekt',
  ],
  content: [
    { id: 'hov1-2-2-1', type: 'text', content: '# Hva er hygiene?\n\nHygiene handler om tiltak for a forebygge sykdom og fremme helse. God hygiene er grunnleggende i alt helse- og oppvekstarbeid.\n\n## Typer hygiene\n- **Personlig hygiene** - stell av egen kropp\n- **Naeringsmiddelhygiene** - trygg handtering av mat\n- **Milj hygiene** - renhold av omgivelser\n- **Arbeidshygiene** - forebygging av smitte pa jobb' },
    { id: 'hov1-2-2-2', type: 'definition', title: 'Smitte', content: 'Overføring av sykdomsfremkallende mikroorganismer (bakterier, virus, sopp, parasitter) fra en smittekilde til et mottakelig individ.' },
    { id: 'hov1-2-2-3', type: 'text', content: '# Smittekjeden\n\nFor at smitte skal skje, ma alle ledd i smittekjeden vaere til stede:\n\n1. **Smittestoff** - mikroorganismen som forårsaker sykdom\n2. **Smittekilde** - der smittestoffet finnes (menneske, dyr, gjenstander)\n3. **Smittevei** - maten smittestoffet spres pa\n4. **Smittemottaker** - personen som blir smittet\n\n## Smitteveier\n- **Kontaktsmitte** - direkte berøring eller via gjenstander\n- **Drapesmitte** - hosting, nysing, snakking\n- **Luftsmitte** - smapartikler som svever i lufta\n- **Fekal-oral smitte** - fra avføring til munn\n- **Blodsmitte** - via blod og kroppsvæsker' },
    { id: 'hov1-2-2-4', type: 'warning', title: 'Handhygiene', content: 'Handhygiene er det viktigste enkelttiltaket for a forebygge smitte! Vask hender før og etter pasientkontakt, før rene prosedyrer, etter kontakt med kroppsvæsker, og etter kontakt med pasientens omgivelser.' },
    { id: 'hov1-2-2-5', type: 'text', content: '# Hvordan vaske hender riktig\n\n1. Fukt hendene med vann\n2. Pafør sape\n3. Gni handflater mot hverandre\n4. Gni handbaken pa begge hender\n5. Gni mellom fingrene\n6. Gni rundt tomlene\n7. Gni fingertuppene i handflatene\n8. Skyll grundig\n9. Tørk med papir\n10. Bruk papiret til a lukke kranen\n\n**Varighet**: Minimum 40-60 sekunder for handvask, 20-30 sekunder for handdesinfeksjon.' },
    { id: 'hov1-2-2-6', type: 'text', content: '# Bryte smittekjeden\n\nSmitte kan forebygges ved a bryte et eller flere ledd i smittekjeden:\n\n**Fjerne smittekilden**\n- Isolere smittefarlige pasienter\n- Behandle infeksjoner\n\n**Blokkere smitteveien**\n- Handhygiene\n- Beskyttelsesutstyr (hansker, munnbind, frakk)\n- Renhold og desinfeksjon\n\n**Styrke smittemottaker**\n- Vaksinering\n- God ernæring og helse\n- Intakt hud' },
    { id: 'hov1-2-2-ex1', type: 'exercise', exercise: { id: 'hov1-2-2-ex1', type: 'multiple-choice', task: 'Hva er det viktigste tiltaket for a forebygge smitte?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['God handhygiene', 'A bruke munnbind alltid', 'A holde seg innendørs', 'A ta antibiotika'], solution: 'God handhygiene er det viktigste enkelttiltaket for a forebygge smittespredning.' }] } },
    { id: 'hov1-2-2-ex2', type: 'exercise', exercise: { id: 'hov1-2-2-ex2', type: 'multiple-choice', task: 'Hva er kontaktsmitte?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['Smitte via direkte beroring eller gjenstander', 'Smitte via luft', 'Smitte via mat', 'Smitte via insekter'], solution: 'Kontaktsmitte er smitte som overføres ved direkte berøring mellom mennesker eller via forurenset gjenstander.' }] } }
  ],
  exercises: [],
};

export const CHAPTER_HELSEOPPVEKST_VG1_3_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-3-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '3.1',
  title: 'Lover og rettigheter',
  description: 'Laer om viktige lover og rettigheter i helse- og oppvekstsektoren.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for sentrale lover i helse- og oppvekstsektoren',
    'forklare brukerrettigheter og taushetsplikt',
  ],
  content: [
    { id: 'hov1-3-1-1', type: 'text', content: '# Lover i helse- og oppvekstsektoren\n\nHelse- og omsorgstjenesten er regulert av mange lover som sikrer kvalitet og rettigheter.\n\n## Viktige lover\n\n**Pasient- og brukerrettighetsloven**\n- Rett til helsehjelp\n- Rett til informasjon\n- Rett til medvirkning\n- Rett til journalinnsyn\n- Klagerett\n\n**Helsepersonelloven**\n- Krav til forsvarlig yrkesutøvelse\n- Taushetsplikt\n- Dokumentasjonsplikt\n- Meldeplikt\n\n**Helse- og omsorgstjenesteloven**\n- Kommunens ansvar for tjenester\n- Krav til kvalitet\n- Samhandling mellom tjenester' },
    { id: 'hov1-3-1-2', type: 'definition', title: 'Taushetsplikt', content: 'Plikt til a hindre at uvedkommende far tilgang til opplysninger om folks personlige forhold. For helsepersonell er taushetsplikten lovfestet i helsepersonelloven § 21.' },
    { id: 'hov1-3-1-3', type: 'warning', title: 'Taushetsplikten gjelder alle', content: 'Som elev og lærling har du ogsa taushetsplikt. Du ma aldri dele informasjon om brukere med familie, venner eller pa sosiale medier. Brudd pa taushetsplikt kan fa alvorlige konsekvenser.' },
    { id: 'hov1-3-1-4', type: 'text', content: '# Brukerrettigheter\n\n## Rett til informasjon\nBrukere har rett til informasjon om:\n- Egen helsetilstand\n- Behandlingsmuligheter\n- Mulige bivirkninger og risiko\n\n## Rett til medvirkning\nBrukere har rett til a:\n- Delta i beslutninger om egen behandling\n- Uttrykke sine onsker og behov\n- Velge mellom tilgjengelige alternativer\n\n## Samtykke\nHelsehjelp krever vanligvis samtykke:\n- Samtykke skal vaere informert og frivillig\n- Barn over 16 ar samtykker som hovedregel selv\n- Ved manglende samtykkekompetanse ma andre samtykke pa vegne av brukeren' },
    { id: 'hov1-3-1-5', type: 'text', content: '# Barnekonvensjonen\n\nFNs barnekonvensjon gir barn saerlige rettigheter:\n\n**Artikkel 3**: Barnets beste skal vaere et grunnleggende hensyn\n\n**Artikkel 12**: Barn har rett til a si sin mening og bli hort\n\n**Artikkel 19**: Barn har rett til beskyttelse mot vold og omsorgssvikt\n\n**Artikkel 31**: Barn har rett til lek, fritid og hvile' },
    { id: 'hov1-3-1-ex1', type: 'exercise', exercise: { id: 'hov1-3-1-ex1', type: 'multiple-choice', task: 'Hva innebærer taushetsplikten?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['Plikt til a hindre at uvedkommende far opplysninger om brukere', 'At man aldri skal snakke med brukere', 'At man ikke skal dokumentere noe', 'At man ikke skal samarbeide med kolleger'], solution: 'Taushetsplikt betyr at du ikke skal dele opplysninger om brukere med uvedkommende. Du kan dele informasjon med kolleger som trenger det for a gi forsvarlig hjelp.' }] } }
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const HELSEOPPVEKST_VG1_CHAPTERS: Record<string, TextbookChapter> = {
  'helseoppvekst-vg1-1-1': CHAPTER_HELSEOPPVEKST_VG1_1_1,
  'helseoppvekst-vg1-1-2': CHAPTER_HELSEOPPVEKST_VG1_1_2,
  'helseoppvekst-vg1-1-3': CHAPTER_HELSEOPPVEKST_VG1_1_3,
  'helseoppvekst-vg1-2-1': CHAPTER_HELSEOPPVEKST_VG1_2_1,
  'helseoppvekst-vg1-2-2': CHAPTER_HELSEOPPVEKST_VG1_2_2,
  'helseoppvekst-vg1-3-1': CHAPTER_HELSEOPPVEKST_VG1_3_1,
};

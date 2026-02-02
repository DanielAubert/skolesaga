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

export const CHAPTER_HELSEOPPVEKST_VG1_1_4: TextbookChapter = {
  id: 'helseoppvekst-vg1-1-4',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '1.4',
  title: 'Etikk og verdier i yrkesutovelsen',
  description: 'Laer om etiske dilemmaer, yrkesetikk, etisk refleksjon og pasientautonomi i helse- og oppvekstarbeid.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere over etiske dilemmaer i helse- og oppvekstarbeid',
    'gjore rede for yrkesetiske retningslinjer og verdier som ligger til grunn for profesjonelt arbeid',
  ],
  content: [
    {
      id: 'hov1-1-4-1',
      type: 'text',
      content: `# Etikk i helse- og oppvekstfag

Etikk handler om hva som er riktig og galt, godt og ondt. I helse- og oppvekstarbeid star du ofte overfor vanskelige valg der det ikke finnes ett enkelt riktig svar. Da trenger du etisk kompetanse.

## Hva er etikk?

Etikk er laeren om moral. Mens **moral** handler om de normene og verdiene vi faktisk lever etter, handler **etikk** om a reflektere systematisk over disse normene.

I yrkeslivet betyr dette at du ma:
- Vaere bevisst pa egne verdier og holdninger
- Kunne begrunne valgene dine faglig og etisk
- Reflektere over konsekvensene av handlingene dine
- Ta hensyn til brukerens onsker og rettigheter`,
    },
    {
      id: 'hov1-1-4-2',
      type: 'definition',
      title: 'Etisk dilemma',
      content: 'En situasjon der du ma velge mellom to eller flere handlingsalternativer som alle har bade positive og negative sider. Det finnes ikke ett opplagt riktig svar, og uansett hva du velger vil noe verdifullt kunne ga tapt.',
    },
    {
      id: 'hov1-1-4-3',
      type: 'text',
      content: `# Yrkesetiske retningslinjer

Alle yrkesgrupper i helse- og oppvekstsektoren har yrkesetiske retningslinjer. Disse bygger pa felles verdier:

## De fire etiske prinsippene

**1. Velgjorenhetsrinsippet**
Plikten til a gjore godt - handle til beste for brukeren.

**2. Ikke-skade-prinsippet**
Plikten til a ikke paføre skade - unnga handlinger som kan skade brukeren.

**3. Autonomiprinsippet**
Respekt for brukerens rett til selvbestemmelse - brukeren har rett til a ta egne valg.

**4. Rettferdighetsprinsippet**
Plikten til a behandle alle likt og fordele ressurser rettferdig.

Disse prinsippene kan komme i konflikt med hverandre. For eksempel kan en brukers onske (autonomi) sta i motsetning til det fagpersoner mener er best (velgjorenhet).`,
    },
    {
      id: 'hov1-1-4-4',
      type: 'text',
      content: `# Etisk refleksjonsmodell

Nar du star overfor et etisk dilemma, kan du bruke en refleksjonsmodell for a tenke systematisk:

## Trinn i etisk refleksjon

**1. Beskriv situasjonen**
- Hva har skjedd?
- Hvem er involvert?
- Hva er dilemmaet?

**2. Identifiser verdier og normer**
- Hvilke verdier star pa spill?
- Hvilke regler og retningslinjer er relevante?
- Hvilke etiske prinsipper berores?

**3. Vurder handlingsalternativer**
- Hvilke valg har du?
- Hva er konsekvensene av hvert valg?
- Hvem pavirkes av de ulike valgene?

**4. Ta en beslutning**
- Hvilket alternativ ivaretar flest verdier?
- Kan du begrunne valget ditt faglig og etisk?

**5. Evaluer i etterkant**
- Var beslutningen god?
- Hva kan du laere til neste gang?`,
    },
    {
      id: 'hov1-1-4-5',
      type: 'example',
      title: 'Etisk dilemma i praksis',
      problem: 'Kari er helsefagarbeider pa sykehjem. Beboer Olav (82 ar) nekter a ta medisinene sine. Han sier han er lei av a ta sa mange piller og vil bestemme selv. Legen sier medisinene er nodvendige. Hva bor Kari gjore?',
      solution: `Her star to etiske prinsipper mot hverandre:
- **Autonomiprinsippet**: Olav har rett til a bestemme over egen behandling
- **Velgjorenhetsprinsippet**: Medisinene er viktige for Olavs helse

**Kari bor:**
1. Lytte til Olav og ta hans onsker pa alvor
2. Forklare rolig hvorfor medisinene er viktige
3. Sporre om det er noe spesielt som gjor at han ikke vil ta dem (bivirkninger, svelgeproblemer)
4. Informere legen om Olavs onsker
5. Dokumentere situasjonen
6. Respektere Olavs endelige valg hvis han er samtykkekompetent

**Laering:** En samtykkekompetent bruker har rett til a nekte behandling, selv om helsepersonell mener det er uheldig. Oppgaven er a sikre at brukeren har fatt god informasjon og forstar konsekvensene.`,
    },
    {
      id: 'hov1-1-4-6',
      type: 'tip',
      title: 'Etisk refleksjon i team',
      content: 'Etiske dilemmaer bor diskuteres med kolleger. Mange arbeidsplasser har etikkmøter der ansatte kan ta opp vanskelige situasjoner. Det er ikke et tegn pa svakhet a be om hjelp - det er et tegn pa profesjonalitet.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-1-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et etisk dilemma?',
      solution: 'En situasjon der du ma velge mellom handlinger som alle har bade gode og darlige sider',
      multipleChoiceOptions: [
        'En situasjon der du ma velge mellom handlinger som alle har bade gode og darlige sider',
        'En situasjon der det er ett klart riktig svar',
        'En situasjon der lederen bestemmer',
        'En situasjon der man bryter loven',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr autonomiprinsippet?',
      solution: 'Brukerens rett til a bestemme over eget liv og ta egne valg',
      multipleChoiceOptions: [
        'Brukerens rett til a bestemme over eget liv og ta egne valg',
        'At helsepersonell alltid vet best',
        'At familien bestemmer for brukeren',
        'At kommunen styrer behandlingen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom etikk og moral?',
      solution: 'Moral er normene vi lever etter, etikk er systematisk refleksjon over disse normene',
      multipleChoiceOptions: [
        'Moral er normene vi lever etter, etikk er systematisk refleksjon over disse normene',
        'Det er ingen forskjell',
        'Etikk handler om lover, moral handler om folelser',
        'Moral gjelder bare privat, etikk gjelder pa jobb',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke fire etiske prinsipper er sentrale i helsearbeid?',
      solution: 'Velgjorenhet, ikke-skade, autonomi og rettferdighet',
      multipleChoiceOptions: [
        'Velgjorenhet, ikke-skade, autonomi og rettferdighet',
        'Lojalitet, effektivitet, okonomi og kvalitet',
        'Taushetsplikt, dokumentasjon, medvirkning og samtykke',
        'Respekt, omsorg, kjaerlighet og toleranse',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forste steg i en etisk refleksjonsmodell?',
      solution: 'Beskrive situasjonen og identifisere hva dilemmaet er',
      multipleChoiceOptions: [
        'Beskrive situasjonen og identifisere hva dilemmaet er',
        'Ta en rask beslutning',
        'Sporre lederen om hva du skal gjore',
        'Se hva kollegene gjor',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En samtykkekompetent pasient nekter behandling som legen anbefaler sterkt. Hva er riktig a gjore?',
      solution: 'Sikre at pasienten har fatt god informasjon og respektere valget',
      multipleChoiceOptions: [
        'Sikre at pasienten har fatt god informasjon og respektere valget',
        'Gjennomfore behandlingen mot pasientens vilje',
        'Ignorere pasientens onske fordi legen vet best',
        'Kontakte politiet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-1-4-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor bor etiske dilemmaer diskuteres med kolleger?',
      solution: 'Fordi ulike perspektiver gir bedre beslutningsgrunnlag og stotter profesjonell utvikling',
      multipleChoiceOptions: [
        'Fordi ulike perspektiver gir bedre beslutningsgrunnlag og stotter profesjonell utvikling',
        'Fordi man slipper a ta ansvar selv',
        'Fordi det star i arbeidskontrakten',
        'Fordi ledelsen krever det for a unnga klager',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_2_3: TextbookChapter = {
  id: 'helseoppvekst-vg1-2-3',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '2.3',
  title: 'Kosthold og ernaering',
  description: 'Laer om naeringsstoffer, kostholdsrad, ernaering i ulike livsfaser og mattrygghet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for sammenhengen mellom kosthold og helse',
    'forklare naeringsstoffenes funksjoner og betydning for kroppen',
  ],
  content: [
    {
      id: 'hov1-2-3-1',
      type: 'text',
      content: `# Kosthold og helse

Kostholdet er en av de viktigste faktorene for god helse. Det vi spiser gir kroppen energi og byggemateriale, og pavirker bade fysisk og psykisk helse.

## Helsedirektoratets kostrad

Helsedirektoratet gir kostrad som skal hjelpe befolkningen med a ta sunne valg:

- Spis minst fem porsjoner gronnsaker, frukt og baer hver dag
- Spis grove kornprodukter hver dag
- Spis fisk to til tre ganger i uken
- Velg magre meieriprodukter
- Begrens mengden rodt kjott og bearbeidet kjott
- Velg matoljer og myk margarin
- Drikk vann som torstedrikk
- Begrens inntak av sukker, salt og mettet fett
- Vaer fysisk aktiv i minst 30 minutter daglig`,
    },
    {
      id: 'hov1-2-3-2',
      type: 'definition',
      title: 'Naeringsstoffer',
      content: 'Stoffer i maten som kroppen trenger for a fungere. Deles inn i makronaeringsstoffer (karbohydrater, proteiner og fett) som gir energi, og mikronaeringsstoffer (vitaminer og mineraler) som er nodvendige for kroppens prosesser.',
    },
    {
      id: 'hov1-2-3-3',
      type: 'text',
      content: `# Makronaeringsstoffene

## Karbohydrater
- Kroppens viktigste energikilde
- Finnes i brod, ris, pasta, poteter, frukt og gronnsaker
- **Enkle karbohydrater** (sukker) gir rask energi
- **Sammensatte karbohydrater** (stivelse og fiber) gir langvarig energi
- Anbefalt: 45-60% av daglig energiinntak

## Proteiner
- Byggemateriale for celler, muskler og organer
- Viktig for immunforsvaret og enzymer
- Finnes i kjott, fisk, egg, meieriprodukter, belgfrukter og notter
- Anbefalt: 10-20% av daglig energiinntak

## Fett
- Konsentrert energikilde
- Nodvendig for opptak av fettloselige vitaminer (A, D, E, K)
- **Umettet fett** (fisk, notter, olivenolje) - gunstig for helsa
- **Mettet fett** (smor, fete meieriprodukter) - bor begrenses
- **Transfett** - bor unngaes
- Anbefalt: 25-40% av daglig energiinntak`,
    },
    {
      id: 'hov1-2-3-4',
      type: 'text',
      content: `# Ernaering i ulike livsfaser

Ernaeringsbehovet endrer seg gjennom livet. Som helse- og oppvekstarbeider ma du ha kunnskap om dette.

## Barn og unge
- Hoy vekst krever ekstra naeringsstoffer
- Kalsium og vitamin D er viktig for beinbygging
- Jern er viktig, spesielt for jenter etter pubertet
- Regelemessige maltider gir stabil energi

## Voksne
- Energibehovet avhenger av aktivitetsniva
- Variasjon i kostholdet sikrer tilstrekkelig naeringsstoffer
- Forebygging av livsstilssykdommer gjennom sunt kosthold

## Eldre
- Energibehovet synker, men naeringsbehovet er like hoy
- Okt behov for vitamin D og kalsium
- Risiko for underernering og dehydrering
- Maltidene bor vaere appetittvekkende og tilpasset
- Sosiale maltider oker trivsel og matinntak

## Gravide
- Okt behov for folsyre, jern og kalsium
- Bor unnga visse matvarer (ra fisk, upasteurisert ost)`,
    },
    {
      id: 'hov1-2-3-5',
      type: 'warning',
      title: 'Underernering hos eldre',
      content: 'Underernering er et alvorlig problem blant eldre i Norge. Opptil 30-60% av eldre pa sykehjem kan vaere underernert eller i risiko for underernering. Tegn a se etter: vekttap, trotthet, darlig sarheling, nedsatt matlyst og hyppige infeksjoner. Dokumenter matinntak og vekt regelmessig.',
    },
    {
      id: 'hov1-2-3-6',
      type: 'text',
      content: `# Mattrygghet

Trygg mathhandtering er viktig for a forebygge matbarne sykdommer.

## Viktige regler for mattrygghet
- **Temperatur**: Varm mat over 60 grader, kald mat under 4 grader
- **Holdbarhet**: Sjekk datomerking og bruk fornuftig vurdering
- **Renhold**: Vask hender, redskaper og arbeidsflater
- **Kryssforurensning**: Hold ra varer adskilt fra ferdig mat
- **Oppvarming**: Varm opp rester til minst 75 grader

## Allergier og intoleranser
- Matallergier kan vaere livstruende (anafylaksi)
- Vanlige allergener: notter, egg, melk, fisk, skalldyr, gluten
- Intoleranse gir ubehag men er ikke livstruende (for eksempel laktoseintoleranse)
- All mat som serveres i institusjoner ma merkes tydelig`,
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke er de tre makronaeringsstoffene?',
      solution: 'Karbohydrater, proteiner og fett',
      multipleChoiceOptions: [
        'Karbohydrater, proteiner og fett',
        'Vitaminer, mineraler og vann',
        'Sukker, salt og fiber',
        'Kalsium, jern og sink',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er kroppens viktigste energikilde?',
      solution: 'Karbohydrater',
      multipleChoiceOptions: [
        'Karbohydrater',
        'Proteiner',
        'Vitaminer',
        'Mineraler',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange porsjoner gronnsaker, frukt og baer anbefaler Helsedirektoratet daglig?',
      solution: 'Minst fem porsjoner',
      multipleChoiceOptions: [
        'Minst fem porsjoner',
        'To porsjoner',
        'Ti porsjoner',
        'En porsjon',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type fett er mest gunstig for helsa?',
      solution: 'Umettet fett fra fisk, notter og olivenolje',
      multipleChoiceOptions: [
        'Umettet fett fra fisk, notter og olivenolje',
        'Mettet fett fra smor og fete meieriprodukter',
        'Transfett fra bearbeidet mat',
        'Alle typer fett er like gunstige',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et viktig ernaeringsmessig problem blant eldre pa sykehjem?',
      solution: 'Underernering og risiko for naeringsstoffmangel',
      multipleChoiceOptions: [
        'Underernering og risiko for naeringsstoffmangel',
        'For hoyt kaloriinntak',
        'For mye proteininntak',
        'For mange vitaminer',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom matallergi og matintoleranse?',
      solution: 'Matallergi kan vaere livstruende, mens intoleranse gir ubehag men er ikke farlig',
      multipleChoiceOptions: [
        'Matallergi kan vaere livstruende, mens intoleranse gir ubehag men er ikke farlig',
        'Det er ingen forskjell',
        'Intoleranse er farligere enn allergi',
        'Allergi gir bare utslett, intoleranse pavirker hele kroppen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-3-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor har eldre like hoyt naeringsbehov som yngre, selv om energibehovet synker?',
      solution: 'Fordi kroppen trenger like mye vitaminer og mineraler til vedlikehold og reparasjon av celler',
      multipleChoiceOptions: [
        'Fordi kroppen trenger like mye vitaminer og mineraler til vedlikehold og reparasjon av celler',
        'Fordi eldre spiser mer enn yngre',
        'Fordi eldre er mer fysisk aktive',
        'Fordi eldre trenger mer energi til oppvarming av kroppen',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_2_4: TextbookChapter = {
  id: 'helseoppvekst-vg1-2-4',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '2.4',
  title: 'Fysisk aktivitet og helse',
  description: 'Laer om sammenhengen mellom fysisk aktivitet og helse, anbefalinger, aktivitetstyper og tilpasset aktivitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for sammenhengen mellom fysisk aktivitet og helse',
    'planlegge og tilrettelegge for fysisk aktivitet tilpasset ulike brukergrupper',
  ],
  content: [
    {
      id: 'hov1-2-4-1',
      type: 'text',
      content: `# Fysisk aktivitet og helse

Fysisk aktivitet er en av de viktigste faktorene for god helse. Regelemessig aktivitet forebygger sykdom, styrker kroppen og bedrer psykisk helse.

## Hva er fysisk aktivitet?

Fysisk aktivitet er all kroppslig bevegelse som forer til okt energiforbruk. Det inkluderer:
- **Hverdagsaktivitet** - ga, sykle, husarbeid, hagearbeid
- **Trening** - planlagt, strukturert aktivitet for a forbedre form
- **Idrett** - organisert aktivitet med konkurranseelement

## Anbefalinger for fysisk aktivitet

Helsedirektoratets anbefalinger for voksne:
- Minst **150 minutter** moderat aktivitet per uke (rask gange, sykling)
- Eller minst **75 minutter** med hoy intensitet per uke (loping, intervalltrening)
- **Styrketrening** minst to ganger per uke
- **Redusere stillesitting** og ta pauser fra langvarig sitting`,
    },
    {
      id: 'hov1-2-4-2',
      type: 'definition',
      title: 'Fysisk aktivitet',
      content: 'Enhver kroppslig bevegelse utfort av skjelettmuskulatur som forer til okt energiforbruk utover hvileniva. Omfatter alt fra hverdagsaktiviteter til planlagt trening og idrett.',
    },
    {
      id: 'hov1-2-4-3',
      type: 'text',
      content: `# Helseeffekter av fysisk aktivitet

Regelemessig fysisk aktivitet har dokumentert positiv effekt pa:

## Fysisk helse
- **Hjerte og kar** - reduserer risiko for hjerte- og karsykdommer
- **Vekt** - forebygger overvekt og fedme
- **Skjelett og muskler** - styrker bein og forebygger osteoporose
- **Stoffskifte** - reduserer risiko for type 2-diabetes
- **Immunforsvar** - styrker kroppens forsvar mot infeksjoner
- **Kreft** - reduserer risiko for flere kreftformer

## Psykisk helse
- Reduserer symptomer pa angst og depresjon
- Bedrer sovnkvalitet
- Oker selvfolelse og mestringsfolelse
- Gir mer energi og overskudd
- Reduserer stress

## Sosial helse
- Fellesskap og tilhorighet gjennom aktiviteter
- Mulighet for sosial kontakt
- Okt deltakelse i samfunnslivet`,
    },
    {
      id: 'hov1-2-4-4',
      type: 'text',
      content: `# Tilpasset fysisk aktivitet

Som helse- og oppvekstarbeider ma du kunne tilrettelegge aktivitet for ulike brukergrupper.

## Aktivitet for barn
- Minst 60 minutter daglig aktivitet med moderat til hoy intensitet
- Variert aktivitet som fremmer motorisk utvikling
- Fokus pa lek og glede
- Begrens stillesitting og skjermtid

## Aktivitet for eldre
- Tilpass til funksjonsniva og helsetilstand
- Balansetrening forebygger fall
- Styrketrening bevarer muskelmasse
- Turgaing er trygt og effektivt
- Sosiale aktiviteter oker motivasjon

## Aktivitet for personer med funksjonsnedsettelse
- Alle kan vaere fysisk aktive med riktig tilrettelegging
- Tilpass aktivitetstype og intensitet
- Fokuser pa muligheter, ikke begrensninger
- Bruk hjelpemidler ved behov
- Parasport og tilpassede aktiviteter`,
    },
    {
      id: 'hov1-2-4-5',
      type: 'tip',
      title: 'Motivasjon for fysisk aktivitet',
      content: 'Motivasjon er noklen til varig aktivitet. Gode tips: Finn aktiviteter brukeren liker, sett realistiske mal, gi positiv tilbakemelding, gjor det sosialt, bygg pa mestringopplevelser og start forsiktig med gradvis okning. Husk at litt aktivitet er mye bedre enn ingen aktivitet!',
    },
    {
      id: 'hov1-2-4-6',
      type: 'example',
      title: 'Tilrettelegging i praksis',
      problem: 'Du jobber pa et dagsenter for eldre. Flere av brukerne sitter mye stille og har liten motivasjon for fysisk aktivitet. Hvordan kan du tilrettelegge?',
      solution: `**Tiltak for a oke aktivitet:**

1. **Stolgymnastikk** - ovelser som kan gjores sittende, tilpasset alle
2. **Daglige turer** - korte, tilrettelagte turer i naermiljoet
3. **Musikkaktiviteter** - dans og bevegelse til musikk oker glede
4. **Hverdagsaktiviteter** - involver brukerne i matlaging, rydding, hagearbeid
5. **Sosiale spill** - boccia, krocket, ballspill tilpasset niva

**Viktig a huske:**
- Start med korte okter og ok gradvis
- Gjor det sosialt og hyggelig
- Tilpass til den enkeltes funksjonsniva
- Gi ros og positiv tilbakemelding
- Sorg for trygghet (fallforebygging)
- Spor brukerne om hva de liker

**Laering:** Motivasjon oker nar aktiviteten er lystbetont, sosial og gir mestringsfølelse.`,
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den generelle anbefalingen for fysisk aktivitet for voksne per uke?',
      solution: 'Minst 150 minutter med moderat aktivitet eller 75 minutter med hoy intensitet',
      multipleChoiceOptions: [
        'Minst 150 minutter med moderat aktivitet eller 75 minutter med hoy intensitet',
        'Minst 30 minutter daglig med hoy intensitet',
        'Minst 300 minutter med lav intensitet',
        'Trening er kun nodvendig tre ganger i maneden',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et eksempel pa hverdagsaktivitet?',
      solution: 'A ga til butikken eller sykle til jobb',
      multipleChoiceOptions: [
        'A ga til butikken eller sykle til jobb',
        'A lope et maraton',
        'A delta i organisert fotballkamp',
        'A gjennomfore en styrketreningsokt pa treningssenter',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan pavirker fysisk aktivitet psykisk helse?',
      solution: 'Det kan redusere angst og depresjon, bedre sovn og oke selvfolelse',
      multipleChoiceOptions: [
        'Det kan redusere angst og depresjon, bedre sovn og oke selvfolelse',
        'Det har ingen effekt pa psykisk helse',
        'Det oker stress og uro',
        'Det pavirker kun fysisk helse',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type aktivitet er spesielt viktig for eldre for a forebygge fall?',
      solution: 'Balansetrening',
      multipleChoiceOptions: [
        'Balansetrening',
        'Langdistanseloping',
        'Tung vektlofting',
        'Hoyintensiv intervalltrening',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mange minutter daglig fysisk aktivitet anbefales for barn?',
      solution: 'Minst 60 minutter med moderat til hoy intensitet',
      multipleChoiceOptions: [
        'Minst 60 minutter med moderat til hoy intensitet',
        'Minst 30 minutter med lav intensitet',
        'Minst 150 minutter med hoy intensitet',
        'Barn trenger ikke egen anbefaling for aktivitet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er det viktigste prinsippet nar du skal motivere en bruker til fysisk aktivitet?',
      solution: 'Finne aktiviteter brukeren liker og bygge pa mestringsopplevelser',
      multipleChoiceOptions: [
        'Finne aktiviteter brukeren liker og bygge pa mestringsopplevelser',
        'Presse brukeren til a trene hardt fra forste dag',
        'Sammenligne brukeren med andre som er mer aktive',
        'Fokusere pa alt brukeren ikke klarer',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-4-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er det viktig a tilpasse fysisk aktivitet til den enkeltes funksjonsniva?',
      solution: 'For a sikre trygghet, mestring og motivasjon, og unnga skader',
      multipleChoiceOptions: [
        'For a sikre trygghet, mestring og motivasjon, og unnga skader',
        'Fordi alle ma gjore akkurat de samme ovelsene',
        'Fordi det er billigere a tilpasse',
        'Fordi lovverket krever individuell treningsplan for alle',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_2_5: TextbookChapter = {
  id: 'helseoppvekst-vg1-2-5',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '2.5',
  title: 'Psykisk helse og livsmestring',
  description: 'Laer om psykisk helse, stress, angst og depresjon, egenomsorg og nar man bor soke hjelp.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for hva psykisk helse er og faktorer som pavirker den',
    'beskrive tegn pa psykiske helseutfordringer og kjenne til hjelpeinstanser',
  ],
  content: [
    {
      id: 'hov1-2-5-1',
      type: 'text',
      content: `# Psykisk helse

Psykisk helse handler om hvordan vi tenker, foler og har det med oss selv og andre. God psykisk helse gir oss evne til a mestre hverdagen, takle motgang og oppleve mening og tilhorighet.

## Psykisk helse som et kontinuum

Psykisk helse kan ses som en skala fra god til darlig. Vi beveger oss alle frem og tilbake pa denne skalaen gjennom livet:

- **God psykisk helse** - folelse av mening, mestring, gode relasjoner, evne til a handtere stress
- **Nedsatt psykisk helse** - perioder med mer bekymring, tristhet eller stress enn vanlig
- **Psykiske lidelser** - tilstander som krever profesjonell hjelp, som angst, depresjon eller spiseforstyrrelser

Det er viktig a forstå at alle kan oppleve perioder med nedsatt psykisk helse uten at det betyr at man har en psykisk lidelse. Og personer med psykiske lidelser kan ha god livskvalitet med riktig stotte og behandling.`,
    },
    {
      id: 'hov1-2-5-2',
      type: 'definition',
      title: 'Psykisk helse',
      content: 'En tilstand av velvare der individet kan realisere sine muligheter, handtere normal stress i livet, arbeide produktivt og bidra i sitt lokalsamfunn (WHOs definisjon). Psykisk helse er mer enn fravar av psykisk sykdom.',
    },
    {
      id: 'hov1-2-5-3',
      type: 'text',
      content: `# Stress

Stress er kroppens reaksjon pa utfordringer og krav. Noe stress er normalt og kan vaere positivt, men langvarig stress kan vaere skadelig.

## Typer stress

**Positivt stress (eustress)**
- Gir energi og motivasjon
- Hjelper deg a prestere
- Er kortvarig og handterbart
- Eksempel: spenning for eksamen, forste dag pa jobb

**Negativt stress (distress)**
- Foler seg overveldende
- Varer over tid uten tilstrekkelig hvile
- Kan fore til helseplager
- Eksempel: langvarig overbelastning, konflikter, okonomiske problemer

## Tegn pa for mye stress
- Hodepine, muskelspenninger, mageproblemer
- Sovnproblemer
- Irritabilitet og uro
- Konsentrasjonsvansker
- Tilbaketrekning fra sosialt liv
- Okt bruk av rusmidler

## Mestringsstrategier
- **Problemfokusert mestring** - gjore noe med situasjonen (planlegge, soke hjelp)
- **Folelsefokusert mestring** - handtere folelsene (snakke med noen, avspenningsteknikker)`,
    },
    {
      id: 'hov1-2-5-4',
      type: 'text',
      content: `# Vanlige psykiske helseutfordringer

## Angst
Angst er overdreven frykt eller bekymring som gir ubehag og pavirker hverdagen.
- **Generalisert angst** - vedvarende bekymring for mange ting
- **Sosial angst** - intens frykt for sosiale situasjoner
- **Panikkangst** - plutselige, intense angstanfall
- Angst er vanlig og kan behandles effektivt

## Depresjon
Depresjon er mer enn a vaere trist. Det er en tilstand preget av:
- Vedvarende tristhet eller tomhetsfølelse
- Tap av interesse for ting man pleide a like
- Energiloshet og tretthet
- Endret appetitt og sovn
- Konsentrasjonsvansker
- I alvorlige tilfeller: tanker om at livet ikke er verdt a leve

## Spiseforstyrrelser
- Anoreksi, bulimi og overspisingslidelse
- Handler ofte om kontroll, selvfolelse og kroppsbilde
- Kan vaere livstruende og krever profesjonell behandling`,
    },
    {
      id: 'hov1-2-5-5',
      type: 'warning',
      title: 'Nar bor man soke hjelp?',
      content: 'Hvis en person snakker om selvmord, skader seg selv, har sluttet a fungere i hverdagen, eller du er alvorlig bekymret - ta det pa alvor. Snakk med personen, og hjelp vedkommende a kontakte fastlege, helsesykepleier eller ring Mental Helses hjelpetelefon (116 123). Ved akutt fare: ring 113.',
    },
    {
      id: 'hov1-2-5-6',
      type: 'text',
      content: `# Egenomsorg og livsmestring

Egenomsorg handler om a ta vare pa seg selv for a opprettholde god helse og forebygge psykiske plager.

## Fem pilarer for god psykisk helse

**1. Gode relasjoner**
- Sos kontakt med venner og familie
- Del tanker og folelser med noen du stoler pa
- Vaer en god venn for andre

**2. Fysisk aktivitet**
- Regelemessig aktivitet bedrer humøret
- Reduserer stress og angst
- Gir bedre sovn

**3. Sovn**
- 7-9 timer for voksne
- Faste sovnrutiner
- Begrens skjerm for sengetid

**4. Mening og mestring**
- Gjor ting du liker og mestrer
- Sett deg realistiske mal
- Bidra til fellesskapet

**5. Sunt kosthold**
- Regelemessige maltider
- Naeringsrik mat gir stabil energi
- Begrens alkohol og koffein`,
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er psykisk helse ifølge WHO?',
      solution: 'En tilstand av velvare der man kan mestre hverdagen, handtere stress og bidra i samfunnet',
      multipleChoiceOptions: [
        'En tilstand av velvare der man kan mestre hverdagen, handtere stress og bidra i samfunnet',
        'Fravar av psykisk sykdom',
        'A alltid vaere glad og positiv',
        'A aldri oppleve stress eller motgang',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen pa positivt og negativt stress?',
      solution: 'Positivt stress gir motivasjon og er kortvarig, negativt stress er overveldende og langvarig',
      multipleChoiceOptions: [
        'Positivt stress gir motivasjon og er kortvarig, negativt stress er overveldende og langvarig',
        'Det finnes bare negativt stress',
        'Positivt stress er bra for kroppen men skadelig for psyken',
        'Negativt stress gir alltid sykdom',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr det at psykisk helse er et kontinuum?',
      solution: 'At vi alle beveger oss mellom god og darlig psykisk helse gjennom livet',
      multipleChoiceOptions: [
        'At vi alle beveger oss mellom god og darlig psykisk helse gjennom livet',
        'At man enten har god eller darlig psykisk helse',
        'At psykisk helse aldri forandrer seg',
        'At bare noen mennesker har psykisk helse',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er typiske tegn pa depresjon?',
      solution: 'Vedvarende tristhet, tap av interesse, energiloshet og endret sovn og appetitt',
      multipleChoiceOptions: [
        'Vedvarende tristhet, tap av interesse, energiloshet og endret sovn og appetitt',
        'A vaere trist en dag etter en darlig opplevelse',
        'A vaere sliten etter hard trening',
        'A ikke like en bestemt aktivitet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er problemfokusert mestring?',
      solution: 'A gjore noe aktivt med situasjonen som forårsaker stress, som a planlegge eller soke hjelp',
      multipleChoiceOptions: [
        'A gjore noe aktivt med situasjonen som forårsaker stress, som a planlegge eller soke hjelp',
        'A ignorere problemet og hape det gar over',
        'A fokusere pa alt som er negativt',
        'A klage til andre uten a gjore noe',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken av disse situasjonene krever at du handler umiddelbart og soker hjelp?',
      solution: 'En person forteller at de tenker pa a ta sitt eget liv',
      multipleChoiceOptions: [
        'En person forteller at de tenker pa a ta sitt eget liv',
        'En kollega virker litt stresset pa jobb',
        'En venn er trist etter a ha gjort det darlig pa en prove',
        'En beboer vil ikke delta pa aktivitet i dag',
      ],
    },
    {
      id: 'helseoppvekst-vg1-2-5-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er det viktig at helse- og oppvekstarbeidere har kunnskap om psykisk helse?',
      solution: 'Fordi de kan oppdage tegn pa psykiske utfordringer tidlig og bidra til at brukere far riktig hjelp',
      multipleChoiceOptions: [
        'Fordi de kan oppdage tegn pa psykiske utfordringer tidlig og bidra til at brukere far riktig hjelp',
        'Fordi de skal kunne stille diagnoser',
        'Fordi de skal erstatte psykologer',
        'Fordi det er et krav for a fa hoyere lonn',
      ],
    },
  ],
};



export const CHAPTER_HELSEOPPVEKST_VG1_3_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-3-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '3.2',
  title: 'Taushetsplikt og personvern',
  description: 'Laer om taushetsplikt, personvern og GDPR i helse- og oppvekstsektoren, og forstaa hvilke unntak som gjelder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for og anvende regelverk om taushetsplikt og personvern i yrkesutovelsen',
    'reflektere over etiske dilemmaer knyttet til taushetsplikt og informasjonsdeling',
  ],
  content: [
    {
      id: 'hov1-3-2-1',
      type: 'text',
      content: 'Taushetsplikt er en av de viktigste pliktene for alle som jobber i helse- og oppvekstsektoren. Den innebærer at du ikke har lov til aa dele opplysninger om brukere, pasienter eller barn med uvedkommende. Taushetsplikten er lovfestet i flere lover, blant annet helsepersonelloven, forvaltningsloven og barnehageloven. Formalet med taushetsplikten er aa beskytte den enkeltes privatliv og sikre tillit mellom bruker og tjenesteyter. Uten denne tilliten ville mange vegre seg for aa soke hjelp eller dele viktig informasjon med helsepersonell og andre fagfolk.',
    },
    {
      id: 'hov1-3-2-2',
      type: 'definition',
      title: 'Taushetsplikt',
      content: 'Taushetsplikt betyr at du har plikt til aa tie om personlige opplysninger du faar kjennskap til gjennom arbeidet ditt. Dette gjelder bade opplysninger om helseforhold, personlige forhold, okonomi og familiesituasjon. Taushetsplikten gjelder ogsa etter at arbeidsforholdet er avsluttet.',
    },
    {
      id: 'hov1-3-2-3',
      type: 'text',
      content: 'Personvern handler om retten til aa bestemme over egne personopplysninger. I Norge og EU er personvernet regulert gjennom personopplysningsloven og GDPR (General Data Protection Regulation). GDPR stiller strenge krav til hvordan personopplysninger samles inn, lagres og brukes. I helse- og oppvekstsektoren behandles mange sensitive personopplysninger, som helseinformasjon, diagnoser og sosiale forhold. Det er derfor spesielt viktig at ansatte forstaar reglene for personvern og folger dem noye. Alle virksomheter skal ha rutiner for sikker behandling av personopplysninger, og ansatte skal faa opplaering i disse rutinene.',
    },
    {
      id: 'hov1-3-2-4',
      type: 'example',
      title: 'Unntak fra taushetsplikten',
      content: 'Det finnes situasjoner der taushetsplikten kan eller maa brytes. De viktigste unntakene er: 1) Samtykke fra brukeren selv - dersom brukeren gir tillatelse til at informasjon deles. 2) Opplysningsplikt til barnevernet - dersom du har grunn til aa tro at et barn utsettes for mishandling eller omsorgssvikt, har du plikt til aa melde fra. 3) Avverging av alvorlig skade - dersom det er fare for noens liv eller helse. 4) Samarbeid innenfor virksomheten - nodvendig informasjon kan deles med kolleger som trenger det for aa gi forsvarlig hjelp. Eksempel: En barnehageansatt oppdager blamerker paa et barn og mistenker vold i hjemmet. Da har den ansatte plikt til aa melde fra til barnevernet, selv om foreldrene ikke onsker det.',
    },
    {
      id: 'hov1-3-2-5',
      type: 'tip',
      title: 'Taushetsplikt i praksis',
      content: 'Husk at taushetsplikten ogsa gjelder i uformelle situasjoner. Du maa ikke snakke om brukere paa pauserommet der andre kan hore, paa bussen hjem, paa sosiale medier eller med venner og familie. Vaer ogsa forsiktig med aa diskutere brukere paa maater som gjor dem gjenkjennbare, selv uten aa nevne navn. Et godt tips er aa alltid tenke: "Ville denne personen vaert komfortabel med at jeg deler dette?"',
    },
    {
      id: 'hov1-3-2-6',
      type: 'definition',
      title: 'GDPR og personopplysninger',
      content: 'GDPR definerer personopplysninger som enhver opplysning som kan knyttes til en identifiserbar person, direkte eller indirekte. Sensitive personopplysninger (saerlige kategorier) inkluderer helseopplysninger, etnisk opprinnelse, politisk oppfatning, religioes overbevisning og biometriske data. Behandling av sensitive personopplysninger krever et saerlig rettslig grunnlag.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr taushetsplikt?',
      solution: 'At du har plikt til aa tie om personlige opplysninger du faar kjennskap til gjennom arbeidet',
      multipleChoiceOptions: [
        'At du har plikt til aa tie om personlige opplysninger du faar kjennskap til gjennom arbeidet',
        'At du aldri kan snakke om jobben din med noen',
        'At du bare kan dele opplysninger med familien din',
        'At du maa holde all informasjon hemmelig for alltid uten unntak',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken lov regulerer personvern i Norge og EU?',
      solution: 'Personopplysningsloven og GDPR',
      multipleChoiceOptions: [
        'Personopplysningsloven og GDPR',
        'Straffeloven',
        'Arbeidsmiljoloven',
        'Grunnloven alene',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I hvilken situasjon har du plikt til aa bryte taushetsplikten?',
      solution: 'Naar du mistenker at et barn utsettes for omsorgssvikt',
      multipleChoiceOptions: [
        'Naar du mistenker at et barn utsettes for omsorgssvikt',
        'Naar en kollega spor om en brukers diagnose av nysgjerrighet',
        'Naar en venn spor om hvem du jobber med',
        'Naar du vil diskutere en vanskelig arbeidsdag med familien',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva regnes som sensitive personopplysninger etter GDPR?',
      solution: 'Helseopplysninger, etnisk opprinnelse og religioes overbevisning',
      multipleChoiceOptions: [
        'Helseopplysninger, etnisk opprinnelse og religioes overbevisning',
        'Navn og adresse',
        'Telefonnummer og e-postadresse',
        'Yrke og arbeidsplass',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En helsefagarbeider sitter paa bussen og snakker i telefon om en pasients helsetilstand slik at andre passasjerer kan hore. Hva er riktig aa si om dette?',
      solution: 'Dette er et brudd paa taushetsplikten',
      multipleChoiceOptions: [
        'Dette er et brudd paa taushetsplikten',
        'Det er greit saa lenge pasienten ikke nevnes med navn',
        'Det er tillatt fordi det skjer utenfor arbeidsplassen',
        'Det er bare et brudd dersom noen klager',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Naar kan taushetsplikten oppheves gjennom samtykke?',
      solution: 'Naar brukeren selv gir informert og frivillig samtykke til at opplysninger deles',
      multipleChoiceOptions: [
        'Naar brukeren selv gir informert og frivillig samtykke til at opplysninger deles',
        'Naar paarorende ber om informasjon uten brukerens viten',
        'Naar arbeidsgiveren din ber deg dele opplysninger',
        'Naar opplysningene er eldre enn fem aar',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-2-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva menes med "nodvendig informasjon" naar det gjelder deling av opplysninger mellom kolleger i samme virksomhet?',
      solution: 'Kun den informasjonen som er nodvendig for aa gi forsvarlig hjelp til brukeren',
      multipleChoiceOptions: [
        'Kun den informasjonen som er nodvendig for aa gi forsvarlig hjelp til brukeren',
        'All informasjon som staar i journalen til brukeren',
        'Informasjon som kollegene synes er interessant',
        'Bare informasjon som brukeren eksplisitt har godkjent at deles',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_3_3: TextbookChapter = {
  id: 'helseoppvekst-vg1-3-3',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '3.3',
  title: 'HMS - Helse, miljo og sikkerhet',
  description: 'Laer om HMS-arbeid i helse- og oppvekstsektoren, inkludert lovgivning, risikovurdering, ergonomi og psykososialt arbeidsmiljo.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for krav til helse, miljo og sikkerhet paa arbeidsplassen og anvende dette i praksis',
    'vurdere risiko paa arbeidsplassen og foreslaa tiltak for aa forebygge skader og belastninger',
  ],
  content: [
    {
      id: 'hov1-3-3-1',
      type: 'text',
      content: 'HMS staar for helse, miljo og sikkerhet og handler om aa skape trygge og gode arbeidsforhold for alle ansatte. I Norge er HMS-arbeid regulert gjennom arbeidsmiljoloven, som stiller krav til at arbeidsgivere skal sikre et fullt forsvarlig arbeidsmiljo. I helse- og oppvekstsektoren er HMS saerlig viktig fordi ansatte daglig utsettes for fysiske og psykiske belastninger. De kan oppleve tunge loft, smittefare, utfordrende atferd og emosjonelt krevende situasjoner. Systematisk HMS-arbeid handler om aa identifisere farer, vurdere risiko og sette inn tiltak for aa forebygge skader og sykdom.',
    },
    {
      id: 'hov1-3-3-2',
      type: 'definition',
      title: 'Risikovurdering',
      content: 'En risikovurdering er en systematisk gjennomgang av hva som kan gaa galt paa arbeidsplassen, hvor sannsynlig det er at det skjer, og hvilke konsekvenser det kan faa. Risikovurderingen skal vaere skriftlig og oppdateres jevnlig. Den skal resultere i konkrete tiltak for aa redusere risikoen til et akseptabelt nivaa.',
    },
    {
      id: 'hov1-3-3-3',
      type: 'text',
      content: 'Ergonomi handler om aa tilpasse arbeidsforholdene til mennesket for aa forebygge belastningsskader. I helse- og oppvekstsektoren er ergonomi spesielt viktig fordi mange arbeidsoppgaver innebaeror fysiske belastninger. Ansatte i eldreomsorgen maa ofte hjelpe pasienter med aa flytte seg, noe som kan fore til ryggskader dersom det gjores feil. Barnehageansatte arbeider mye i lav hoyde, noe som belaster kneer og rygg. Viktige ergonomiske prinsipper inkluderer: bruk av hjelpemidler som lofteutstyr, riktig lofteteknikk med boya kneer og rett rygg, variasjon i arbeidsstillinger, og tilpasning av arbeidsplassen til den enkelte.',
    },
    {
      id: 'hov1-3-3-4',
      type: 'example',
      title: 'Psykososialt arbeidsmiljo',
      content: 'Det psykososiale arbeidsmiljoet handler om de mellommenneskelige forholdene paa arbeidsplassen. Dette inkluderer samarbeid med kolleger, ledelse, arbeidsbelastning og mulighet for faglig utvikling. I helse- og oppvekstsektoren kan ansatte oppleve saerlige psykososiale belastninger som: sekundaertraumatisering (aa bli pavirket av andres traumer), moralsk stress (aa ikke kunne gi den hjelpen man onsker paa grunn av ressursmangel), trusler og vold fra brukere, og hoy emosjonell belastning. Eksempel: En ansatt i hjemmetjenesten opplever gjentatte ganger aa ikke rekke alle besokene i lopet av en vakt. Dette forer til daarlig samvittighet og stress. Tiltak kan vaere aa ta opp bemanningssituasjonen med leder, faa veiledning og kollegastoette, og ha tydelige rutiner for prioritering.',
    },
    {
      id: 'hov1-3-3-5',
      type: 'tip',
      title: 'Rapportering av avvik',
      content: 'Alle ansatte har plikt til aa melde fra om farlige forhold paa arbeidsplassen. Et avvik er en hendelse eller et forhold som avviker fra gjeldende krav og rutiner, og som kan fore til skade paa mennesker, miljo eller utstyr. Avvik skal rapporteres skriftlig i virksomhetens avvikssystem. Dette er ikke for aa "sladre", men for aa forbedre sikkerheten for alle. Leder har ansvar for aa folge opp avviksmeldinger og iverksette tiltak. Verneombudet er de ansattes representant i HMS-saker og kan kontaktes dersom du opplever at HMS-forholdene ikke er tilfredsstillende.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-3-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar HMS for?',
      solution: 'Helse, miljo og sikkerhet',
      multipleChoiceOptions: [
        'Helse, miljo og sikkerhet',
        'Helse, medisin og sikkerhet',
        'Hygiene, miljo og samarbeid',
        'Hjelp, medisinering og stell',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken lov regulerer arbeidsmiljoet i Norge?',
      solution: 'Arbeidsmiljoloven',
      multipleChoiceOptions: [
        'Arbeidsmiljoloven',
        'Helsepersonelloven',
        'Forvaltningsloven',
        'Kommuneloven',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en risikovurdering?',
      solution: 'En systematisk gjennomgang av farer, sannsynlighet og konsekvenser paa arbeidsplassen',
      multipleChoiceOptions: [
        'En systematisk gjennomgang av farer, sannsynlighet og konsekvenser paa arbeidsplassen',
        'En oversikt over alle ansattes helseplager',
        'En vurdering av hvor mange ansatte som trengs paa jobb',
        'En evaluering av de ansattes arbeidsprestasjoner',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken lofteteknikk er riktig for aa forebygge ryggskader?',
      solution: 'Boy kneerene, hold ryggen rett og hold tyngden naer kroppen',
      multipleChoiceOptions: [
        'Boy kneerene, hold ryggen rett og hold tyngden naer kroppen',
        'Loft med strak rygg og strake bein',
        'Vri ryggen mens du lofter for aa spare krefter',
        'Loft saa raskt som mulig for aa faa det unna',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er verneombudets rolle?',
      solution: 'Aa vaere de ansattes representant i HMS-saker',
      multipleChoiceOptions: [
        'Aa vaere de ansattes representant i HMS-saker',
        'Aa bestemme lonnsnivaaet til de ansatte',
        'Aa ansette og si opp medarbeidere',
        'Aa skrive journaler for pasientene',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva menes med sekundaertraumatisering?',
      solution: 'At ansatte blir psykisk pavirket av aa hore om og haandtere andres traumer og lidelser',
      multipleChoiceOptions: [
        'At ansatte blir psykisk pavirket av aa hore om og haandtere andres traumer og lidelser',
        'At en pasient faar en ny skade under behandling',
        'At en ansatt skader seg fysisk paa jobb',
        'At en bruker pavirkes negativt av andre brukeres atferd',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-3-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva bor du gjore dersom du oppdager et farlig forhold paa arbeidsplassen?',
      solution: 'Melde fra skriftlig i virksomhetens avvikssystem og varsle leder',
      multipleChoiceOptions: [
        'Melde fra skriftlig i virksomhetens avvikssystem og varsle leder',
        'Vente og se om noen andre legger merke til det',
        'Bare fortelle en kollega om det paa pauserommet',
        'Ignorere det fordi det er leders ansvar aa oppdage feil',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_3_4: TextbookChapter = {
  id: 'helseoppvekst-vg1-3-4',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '3.4',
  title: 'Dokumentasjon og journalforing',
  description: 'Laer om krav til dokumentasjon og journalforing i helse- og oppvekstsektoren, inkludert elektroniske journalsystemer og lovkrav.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for krav til dokumentasjon og journalforing i helse- og oppvekstsektoren',
    'forklare betydningen av korrekt og etterrettelig dokumentasjon for kvalitet og pasientsikkerhet',
  ],
  content: [
    {
      id: 'hov1-3-4-1',
      type: 'text',
      content: 'Dokumentasjon og journalforing er en sentral del av arbeidet i helse- og oppvekstsektoren. God dokumentasjon sikrer at viktig informasjon om brukere og pasienter er tilgjengelig for de som trenger den, og at tjenestene som ytes er forsvarlige. I helsevesenet er journalforing lovpalagt gjennom helsepersonelloven og pasientjournalforskriften. Alle som yter helsehjelp har plikt til aa dokumentere det de gjor. Dokumentasjonen skal vaere saklig, relevant og etterrettelig. Den skal gi et klart bilde av pasientens tilstand, hvilken hjelp som er gitt, og hvilke vurderinger som er gjort.',
    },
    {
      id: 'hov1-3-4-2',
      type: 'definition',
      title: 'Pasientjournal',
      content: 'En pasientjournal er en samling av opplysninger om en pasient i forbindelse med helsehjelp. Journalen skal inneholde relevante og nodvendige opplysninger som: pasientens identitet, kontaktopplysninger, diagnoser, behandling, legemidler, prosedyrer, observasjoner og vurderinger. Journalen er et juridisk dokument som kan brukes som bevis i klagesaker og tilsynssaker.',
    },
    {
      id: 'hov1-3-4-3',
      type: 'text',
      content: 'Elektroniske pasientjournalsystemer (EPJ) har erstattet papirbaserte journaler i de fleste helsevirksomheter i Norge. EPJ-systemer gir mange fordeler: informasjon er lettere tilgjengelig, det er enklere aa dele informasjon mellom behandlere, og det er bedre sporbarhet for hvem som har lest og skrevet i journalen. Vanlige EPJ-systemer i Norge inkluderer DIPS, Gerica og Profil. I barnehager og skoler brukes andre dokumentasjonssystemer, som Vigilo og IST. Uansett system gjelder de samme grunnleggende prinsippene: dokumentasjonen skal vaere noeyaktig, oppdatert og tilgjengelig for autorisert personell.',
    },
    {
      id: 'hov1-3-4-4',
      type: 'example',
      title: 'Krav til god dokumentasjon',
      content: 'God dokumentasjon folger SMART-prinsippene: Saklig - hold deg til fakta og unngaa personlige meninger. Malbar - beskriv konkrete observasjoner som kan males eller verifiseres. Aktuell - dokumenter saa raskt som mulig etter hendelsen. Relevant - ta bare med informasjon som er viktig for oppfolgingen. Tydelig - skriv klart og forstaaelig, unngaa forkortelser som kan misforstaaes. Eksempel paa god dokumentasjon: "Kl. 14.30: Pasient klager over smerter i hoyre kne, VAS 6 av 10. Gitt Paracet 1g per os ifolge ordinasjon. Kl. 15.00: Pasient rapporterer lindring, VAS 3 av 10. Kan bevege seg lettere." Eksempel paa daarlig dokumentasjon: "Pasient hadde vondt. Ga medisin. Ble bedre."',
    },
    {
      id: 'hov1-3-4-5',
      type: 'warning',
      title: 'Juridiske konsekvenser',
      content: 'Manglende eller feilaktig dokumentasjon kan faa alvorlige konsekvenser. Helsepersonell som ikke dokumenterer kan bli meldt til Statsforvalteren og risikerer reaksjoner som advarsel eller tilbakekalling av autorisasjon. I erstatningssaker kan manglende dokumentasjon tale mot helsepersonellet, fordi det som ikke er dokumentert regnes som ikke utfort. Husk ogsa at pasienter har innsynsrett i sin egen journal, og at journalen kan utleveres til tilsynsmyndigheter. Dokumenter derfor alltid saklig og profesjonelt.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-3-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformalet med journalforing i helsevesenet?',
      solution: 'Aa sikre forsvarlig behandling og god informasjonsflyt om pasienten',
      multipleChoiceOptions: [
        'Aa sikre forsvarlig behandling og god informasjonsflyt om pasienten',
        'Aa kontrollere at de ansatte gjor jobben sin',
        'Aa samle data for forskning',
        'Aa tilfredsstille pasientenes nysgjerrighet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar EPJ for?',
      solution: 'Elektronisk pasientjournal',
      multipleChoiceOptions: [
        'Elektronisk pasientjournal',
        'Evaluering av pasientens journalfoering',
        'Ekstra personlig journal',
        'Enhetlig pleiejournal',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken lov palegger helsepersonell journalforingsplikt?',
      solution: 'Helsepersonelloven',
      multipleChoiceOptions: [
        'Helsepersonelloven',
        'Arbeidsmiljoloven',
        'Kommuneloven',
        'Personopplysningsloven',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner god dokumentasjon?',
      solution: 'Den er saklig, konkret, aktuell og tydelig',
      multipleChoiceOptions: [
        'Den er saklig, konkret, aktuell og tydelig',
        'Den er lang og detaljert med personlige refleksjoner',
        'Den inneholder mest mulig forkortelser for aa spare tid',
        'Den skrives naar man har tid, gjerne ved slutten av uka',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem har rett til aa lese sin egen pasientjournal?',
      solution: 'Pasienten selv har innsynsrett i sin egen journal',
      multipleChoiceOptions: [
        'Pasienten selv har innsynsrett i sin egen journal',
        'Bare legen som behandler pasienten',
        'Alle ansatte ved sykehuset',
        'Pasientens familie uten videre',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva kan konsekvensen vaere dersom helsepersonell unnlater aa dokumentere?',
      solution: 'Advarsel eller tilbakekalling av autorisasjon fra Statsforvalteren',
      multipleChoiceOptions: [
        'Advarsel eller tilbakekalling av autorisasjon fra Statsforvalteren',
        'Ingen konsekvenser saa lenge pasienten ikke klager',
        'Kun en muntlig irettesettelse fra leder',
        'Automatisk oppsigelse fra stillingen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-3-4-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor regnes det som ikke er dokumentert som "ikke utfort" i juridisk sammenheng?',
      solution: 'Fordi journalen er det viktigste beviset paa at helsehjelp er gitt',
      multipleChoiceOptions: [
        'Fordi journalen er det viktigste beviset paa at helsehjelp er gitt',
        'Fordi myndighetene alltid stoler mer paa pasienten enn helsepersonellet',
        'Fordi det aldri hender at noen glemmer aa dokumentere',
        'Fordi helsepersonell aldri gjor feil',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_4_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-4-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '4.1',
  title: 'Barns utvikling 0-6 aar',
  description: 'Laer om barns fysiske, motoriske, spraaklige, kognitive og sosial-emosjonelle utvikling fra fodsel til seksaarsalderen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for barns utvikling fra fodsel til skolealder og faktorer som pavirker utviklingen',
    'forklare betydningen av trygg tilknytning og stimulering for barns utvikling',
  ],
  content: [
    {
      id: 'hov1-4-1-1',
      type: 'text',
      content: 'Barns utvikling fra 0 til 6 aar er en periode med enorme forandringer. I lopet av disse aarene gaar barnet fra aa vaere helt avhengig av voksne til aa kunne gaa, snakke, leke med andre barn og forstaa mye av verden rundt seg. Utviklingen skjer paa flere omraader samtidig: fysisk og motorisk, spraaklig, kognitiv (tankemessig) og sosial-emosjonell. Disse omraadene haenger tett sammen og pavirker hverandre gjensidig. Det er store individuelle forskjeller i naar barn naar ulike milepaelar, og det er viktig aa huske at det finnes et bredt normalomraade for utvikling.',
    },
    {
      id: 'hov1-4-1-2',
      type: 'definition',
      title: 'Tilknytning',
      content: 'Tilknytning er det sterke folelsesmessige baandet som dannes mellom barnet og dets naermeste omsorgspersoner. Psykologen John Bowlby utviklet tilknytningsteorien, som sier at barn har et medfodt behov for naerhet og trygghet. Trygg tilknytning utvikles naar omsorgspersonen er sensitiv, tilgjengelig og responderer paa barnets behov. Barn med trygg tilknytning bruker omsorgspersonen som en "trygg base" for utforskning av verden, og soker troest hos dem naar de er redde eller lei seg.',
    },
    {
      id: 'hov1-4-1-3',
      type: 'text',
      content: 'Fysisk og motorisk utvikling folger et forutsigbart monster, fra hodet og nedover (cefalokaudalt) og fra midten og utover (proksimodistalt). Det betyr at barnet forst faar kontroll over hodet, deretter overkroppen, og til slutt bena. Grovmotorikken utvikles for finmotorikken. Viktige milepaelar: rundt 3 maaneder kan barnet holde hodet oppe, rundt 6 maaneder sitter det med stoette, rundt 9-12 maaneder begynner det aa krabbe og reise seg opp, og rundt 12-15 maaneder tar de fleste barn sine forste skritt. I alderen 2-3 aar kan barnet lope, hoppe og sparke ball. Ved 4-5 aar mestrer de fleste barn aa sykle med stottehjul, klatre og tegne enkle figurer.',
    },
    {
      id: 'hov1-4-1-4',
      type: 'example',
      title: 'Spraakutvikling',
      content: 'Spraakutviklingen starter allerede fra fodselen. Den folger vanligvis denne progresjonen: 0-3 maaneder: Barnet kommuniserer gjennom graating og begynner aa lage lyder (kurring). 4-8 maaneder: Babling med konsonant-vokal-kombinasjoner (ba-ba, da-da). 8-12 maaneder: Forstaar enkle ord og begynner aa si sine forste ord. 12-18 maaneder: Ettordsfasen - barnet bruker enkeltord for aa uttrykke hele setninger. 18-24 maaneder: Toordsfasen - barnet setter sammen to ord ("mamma bil", "mer melk"). 2-3 aar: Spraakeksplosjonen - ordforradet oker dramatisk og barnet begynner aa bruke enkle setninger. 3-6 aar: Setningene blir lengre og mer komplekse, barnet laerer grammatiske regler og kan fortelle historier.',
    },
    {
      id: 'hov1-4-1-5',
      type: 'text',
      content: 'Sosial-emosjonell utvikling handler om barnets evne til aa forstaa og regulere sine egne folelelser, og til aa samhandle med andre. I de forste leveaarene er barnet helt avhengig av omsorgspersonenes hjelp til aa regulere folelelser. Gradvis laerer barnet aa haandtere frustrasjoner, vente paa tur og dele med andre. Leken spiller en avgjorende rolle i den sosiale utviklingen. Parallell-lek (ved siden av hverandre) er vanlig rundt 2 aar, mens samarbeidende lek og rollelek utvikles fra 3-4-aarsalderen. Gjennom lek laerer barn sosiale regler, oyer empati og utvikler vennskap. Det er viktig at voksne stotter barnets sosiale utvikling ved aa vaere gode rollemodeller, sette ord paa folelelser og hjelpe barn med aa lose konflikter.',
    },
    {
      id: 'hov1-4-1-6',
      type: 'tip',
      title: 'Stimulering av barns utvikling',
      content: 'Barn trenger stimulering for aa utvikle seg optimalt, men det betyr ikke at man trenger dyre leker eller organiserte aktiviteter. Det viktigste er at barnet har trygge, tilstedevaeende voksne som snakker med dem, leser for dem og leker med dem. Dagligdagse aktiviteter som aa handle i butikken, lage mat sammen eller vaere ute i naturen gir rike muligheter for laering. La barnet utforske i eget tempo og unngaa aa sammenligne med andre barn - alle utvikler seg i ulikt tempo innenfor normalomraadet.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-4-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Naar begynner de fleste barn aa gaa?',
      solution: 'Rundt 12-15 maaneders alder',
      multipleChoiceOptions: [
        'Rundt 12-15 maaneders alder',
        'Rundt 6 maaneders alder',
        'Rundt 24 maaneders alder',
        'Rundt 8 maaneders alder',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr tilknytning i barns utvikling?',
      solution: 'Det folelsesmessige baandet mellom barnet og naermeste omsorgspersoner',
      multipleChoiceOptions: [
        'Det folelsesmessige baandet mellom barnet og naermeste omsorgspersoner',
        'Barnets evne til aa knytte skolissene',
        'At barnet laerer aa lese og skrive',
        'Barnets forhold til andre barn i barnehagen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner spraakutviklingen mellom 18 og 24 maaneder?',
      solution: 'Toordsfasen - barnet setter sammen to ord til enkle ytringer',
      multipleChoiceOptions: [
        'Toordsfasen - barnet setter sammen to ord til enkle ytringer',
        'Barnet babbler med konsonant-vokal-kombinasjoner',
        'Barnet kan fortelle lange historier',
        'Barnet bruker komplekse setninger med riktig grammatikk',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med cefalokaudal utvikling?',
      solution: 'At motorisk kontroll utvikles fra hodet og nedover kroppen',
      multipleChoiceOptions: [
        'At motorisk kontroll utvikles fra hodet og nedover kroppen',
        'At spraak utvikles for motorikk',
        'At sosial utvikling gaar for kognitiv utvikling',
        'At barnet laerer aa bruke hendene for fottene',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type lek er vanlig for 2-aaringer?',
      solution: 'Parallell-lek, der barna leker ved siden av hverandre',
      multipleChoiceOptions: [
        'Parallell-lek, der barna leker ved siden av hverandre',
        'Avansert rollelek med komplekse regler',
        'Organiserte lagspill med faste regler',
        'Barna leker ikke med andre for de er 4 aar',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Ifaolge Bowlbys tilknytningsteori, hva kjennetegner trygg tilknytning?',
      solution: 'Barnet bruker omsorgspersonen som trygg base for utforskning og soker troest ved behov',
      multipleChoiceOptions: [
        'Barnet bruker omsorgspersonen som trygg base for utforskning og soker troest ved behov',
        'Barnet er uavhengig og trenger ikke omsorgspersonens naervaer',
        'Barnet er klamrende og torer aldri aa utforske omgivelsene',
        'Barnet viser ingen preferanse for hvem som gir omsorg',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-1-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den viktigste faktoren for aa stimulere et lite barns utvikling?',
      solution: 'Trygge, tilstedevaeende voksne som kommuniserer med og responderer paa barnet',
      multipleChoiceOptions: [
        'Trygge, tilstedevaeende voksne som kommuniserer med og responderer paa barnet',
        'Dyre pedagogiske leker og laeringsapper',
        'Aa starte med formell undervisning saa tidlig som mulig',
        'Mange organiserte aktiviteter og kurs for smaabarn',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_4_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-4-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '4.2',
  title: 'Barns utvikling 6-12 aar',
  description: 'Laer om barns utvikling i skolealderen, inkludert laering, vennskap, identitetsdanning og fysiske forandringer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for barns utvikling i skolealder og faktorer som pavirker laering og trivsel',
    'forklare hvordan vennskap og sosiale relasjoner pavirker barns utvikling og identitet',
  ],
  content: [
    {
      id: 'hov1-4-2-1',
      type: 'text',
      content: 'Alderen 6-12 aar kalles ofte mellombarndommen eller skolealderen. Dette er en periode preget av stabil vekst, laering og utvikling av sosiale ferdigheter. Skolestart markerer et viktig vendepunkt i barns liv. Barnet gaar fra den lekbaserte hverdagen i barnehagen til en mer strukturert tilnaerelse med laeringsmal og forventninger. I denne perioden utvikler barn logisk tenkning, laerer aa lese, skrive og regne, og blir stadig mer selvstendige. De fysiske ferdighetene forbedres, og barna kan delta i mer komplekse idretter og aktiviteter. Sosialt sett blir venner stadig viktigere, og barns selvbilde pavirkes i stor grad av hvordan de opplever seg selv i forhold til jevnaldrende.',
    },
    {
      id: 'hov1-4-2-2',
      type: 'definition',
      title: 'Kognitiv utvikling i skolealder',
      content: 'Ifaolge Jean Piagets teori befinner barn mellom 7 og 11 aar seg i det konkret-operasjonelle stadiet. Det betyr at de kan tenke logisk om konkrete ting og hendelser, men sliter fortsatt med abstrakt tenkning. Barn i denne alderen laerer aa klassifisere, rangere og forstaa at mengder forblir like selv om formen endres (konservasjon). De utvikler evnen til aa se ting fra andres perspektiv (desentrering), og de forstaar at handlinger kan reverseres. Mot slutten av denne perioden begynner noen barn aa tenke mer abstrakt.',
    },
    {
      id: 'hov1-4-2-3',
      type: 'text',
      content: 'Vennskap og sosiale relasjoner far en ny dimensjon i skolealderen. Mens yngre barn ofte er venner med dem de tilfeldigvis leker med, utvikler skolebarn mer stabile og gjensidige vennskap basert paa felles interesser, tillit og lojalitet. Bestevennskap blir viktig, og barn begynner aa sammenligne seg med andre. Dette kan vaere positivt, men ogsa saarbart. Barn som opplever aa bli holdt utenfor eller mobbet, kan faa varige psykiske skader. Gruppetilhorighet blir viktigere, og det oppstaar ofte uformelle hierarkier i barnegruppa. Voksne har en viktig rolle i aa fremme inkludering, lose konflikter og stoette barn som strever sosialt.',
    },
    {
      id: 'hov1-4-2-4',
      type: 'example',
      title: 'Identitetsutvikling og selvbilde',
      content: 'I skolealderen utvikler barn et stadig mer nyansert bilde av seg selv. De sammenligner seg med andre og vurderer sine egne ferdigheter og egenskaper. Erik Eriksons utviklingsteori beskriver denne fasen som "arbeidssomhet versus mindreverd". Barn som opplever mestring og faar anerkjennelse, utvikler en folelse av kompetanse og arbeidssomhet. Barn som stadig opplever aa mislykkes eller faar lite positiv tilbakemelding, kan utvikle en folelse av mindreverd. Eksempel: En gutt i 4. klasse sliter med lesing. Han sammenligner seg med de andre i klassen og foler seg dum. Ved hjelp av en stoettende laeror som gir tilpassede oppgaver og feirer fremgangen hans, faar han gradvis bedre selvtillit og mestringsfaolelse.',
    },
    {
      id: 'hov1-4-2-5',
      type: 'tip',
      title: 'Fysisk aktivitet og helse i skolealderen',
      content: 'Barn i alderen 6-12 aar bor vaere fysisk aktive minst 60 minutter hver dag, ifaolge Helsedirektoratet. Fysisk aktivitet er viktig for bade fysisk helse, psykisk velvaeore og konsentrasjonsevne. I denne alderen utvikles grunnleggende motoriske ferdigheter som er viktige for aa kunne delta i idrett og fysisk aktivitet senere i livet. Det er viktig at barn faar prove mange ulike aktiviteter og ikke spesialiserer seg for tidlig. Fysisk aktivitet bor vaere lystbetont og inkluderende, slik at alle barn kan delta uavhengig av ferdighetsnivaa.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-4-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles alderen 6-12 aar i utviklingspsykologien?',
      solution: 'Mellombarndommen eller skolealderen',
      multipleChoiceOptions: [
        'Mellombarndommen eller skolealderen',
        'Smaabarnsfasen',
        'Puberteten',
        'Spedbarnsalderen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange minutter fysisk aktivitet anbefaler Helsedirektoratet for barn daglig?',
      solution: 'Minst 60 minutter',
      multipleChoiceOptions: [
        'Minst 60 minutter',
        'Minst 20 minutter',
        'Minst 120 minutter',
        'Minst 30 minutter',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket kognitivt stadium befinner barn seg ifaolge Piaget mellom 7 og 11 aar?',
      solution: 'Det konkret-operasjonelle stadiet',
      multipleChoiceOptions: [
        'Det konkret-operasjonelle stadiet',
        'Det sensomotoriske stadiet',
        'Det preoperasjonelle stadiet',
        'Det formelt-operasjonelle stadiet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner vennskap i skolealderen sammenlignet med i barnehagen?',
      solution: 'Vennskapene blir mer stabile og basert paa felles interesser, tillit og lojalitet',
      multipleChoiceOptions: [
        'Vennskapene blir mer stabile og basert paa felles interesser, tillit og lojalitet',
        'Barna leker bare med dem de tilfeldigvis sitter ved siden av',
        'Vennskap er ikke viktig i denne alderen',
        'Alle barn har like mange venner og ingen opplever utenforskap',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva mener Erikson med "arbeidssomhet versus mindreverd"?',
      solution: 'At barn utvikler enten kompetansefolelse gjennom mestring eller mindreverd ved gjentatt nederlag',
      multipleChoiceOptions: [
        'At barn utvikler enten kompetansefolelse gjennom mestring eller mindreverd ved gjentatt nederlag',
        'At barn maa jobbe saa mye som mulig for aa bli vellykkede',
        'At barn i denne alderen alltid foler seg underlegne voksne',
        'At skolesystemet er hovedaarsaken til alle barns problemer',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva menes med konservasjon i Piagets teori?',
      solution: 'Forstaelsen av at en mengde forblir lik selv om formen eller utseendet endres',
      multipleChoiceOptions: [
        'Forstaelsen av at en mengde forblir lik selv om formen eller utseendet endres',
        'Evnen til aa bevare vennskap over tid',
        'At barn laerer aa spare penger til de er eldre',
        'At barn kan huske ting de laerte i barnehagen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-2-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken rolle har voksne i aa stoette barns sosiale utvikling i skolealderen?',
      solution: 'Fremme inkludering, hjelpe med konfliktlosning og stoette barn som strever sosialt',
      multipleChoiceOptions: [
        'Fremme inkludering, hjelpe med konfliktlosning og stoette barn som strever sosialt',
        'La barna ordne opp selv uten vokseninnblanding',
        'Bestemme hvem barna skal vaere venner med',
        'Fokusere utelukkende paa skolefaglige prestasjoner',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_4_3: TextbookChapter = {
  id: 'helseoppvekst-vg1-4-3',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '4.3',
  title: 'Ungdomsutvikling og identitet',
  description: 'Laer om ungdomsutvikling, pubertet, identitetsdanning, jevnaldrende, sosiale medier og psykisk helse i ungdomsaarene.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for ungdomsutvikling og identitetsdanning og faktorer som pavirker denne',
    'droefte utfordringer knyttet til sosiale medier, gruppepress og psykisk helse i ungdomstiden',
  ],
  content: [
    {
      id: 'hov1-4-3-1',
      type: 'text',
      content: 'Ungdomstiden er perioden mellom barndom og voksen alder, vanligvis fra rundt 12 til 18 aar. Dette er en tid med store fysiske, psykiske og sosiale forandringer. Puberteten setter i gang fysiske endringer som vekstspurt, utvikling av sekundaere kjonnskarakteristika og hormonelle svingninger. Samtidig skjer det store endringer i hjernen, saerlig i pannelappen (prefrontal korteks) som styrer impulskontroll, planlegging og konsekvenstenkning. Denne delen av hjernen er ikke ferdig utviklet for i midten av 20-aarene, noe som forklarer hvorfor ungdom noen ganger tar impulsive beslutninger og soker spenning.',
    },
    {
      id: 'hov1-4-3-2',
      type: 'definition',
      title: 'Identitet',
      content: 'Identitet handler om hvem du er, hva du staar for og hvor du horer til. Psykologen Erik Erikson beskrev ungdomstiden som en periode preget av "identitet versus rolleforvirring". Ungdom utforsker ulike roller, verdier og muligheter for aa finne ut hvem de er. Identitetsutviklingen omfatter mange dimensjoner: personlig identitet (hvem er jeg?), sosial identitet (hvilke grupper tilhorer jeg?), kulturell identitet (hvilken kultur og tradisjon er min?), og seksuell identitet (hvem er jeg tiltrukket av?). En vellykket identitetsutvikling forer til en stabil folelse av hvem man er.',
    },
    {
      id: 'hov1-4-3-3',
      type: 'text',
      content: 'Jevnaldrende faar en helt ny betydning i ungdomsaarene. Mens barn primaert er orientert mot foreldre og andre voksne, blir venner og jevnaldrende den viktigste referansegruppen for ungdom. Gruppepress, eller sosialt press, kan pavirke ungdom bade positivt og negativt. Positivt gruppepress kan motivere til innsats paa skolen eller til aa delta i sunne aktiviteter. Negativt gruppepress kan fore til at ungdom prover rusmidler, bryter regler eller mobber andre for aa passe inn. Det er viktig at ungdom laerer aa staa imot negativt press og ta selvstendige valg. Voksne kan hjelpe ved aa snakke aapent om gruppepress, stoette ungdommens selvstendighet og vaere tilgjengelige som trygge samtalepartnere.',
    },
    {
      id: 'hov1-4-3-4',
      type: 'example',
      title: 'Sosiale medier og ungdom',
      content: 'Sosiale medier er en integrert del av de fleste ungdommers hverdag og pavirker identitetsutviklingen paa mange maater. Paa den positive siden gir sosiale medier mulighet for aa holde kontakt med venner, uttrykke seg kreativt og finne fellesskap med andre som deler samme interesser. Paa den negative siden kan sosiale medier bidra til sosial sammenligning, kroppspress, cybermobbing og avhengighet. Forskning viser at overdreven bruk av sosiale medier kan vaere knyttet til okt risiko for angst, depresjon og soevnproblemer hos ungdom. Eksempel: En 15-aarig jente bruker flere timer daglig paa Instagram og TikTok. Hun sammenligner seg stadig med influensere og foler seg utilstrekkelig. Over tid utvikler hun lav selvfolelse og trekker seg tilbake sosialt. Med hjelp fra helsesykepleier og foreldre laerer hun aa vaere mer bevisst paa mediebruk og aa sette grenser for skjermtid.',
    },
    {
      id: 'hov1-4-3-5',
      type: 'warning',
      title: 'Psykisk helse i ungdomstiden',
      content: 'Ungdomstiden er en saarbar periode for psykisk helse. Mange psykiske lidelser debuterer i ungdomsaarene, og det er viktig aa kjenne til faresignaler. Vanlige utfordringer inkluderer angst, depresjon, spiseforstyrrelser, selvskading og rusmisbruk. Faresignaler kan vaere: tilbaketrekking fra venner og aktiviteter, plutselige endringer i atferd eller humor, nedgang i skoleprestasjoner, endret appetitt eller soevnmonster, og utsagn om haaploshet eller selvmordstanker. Dersom du som fagperson er bekymret for en ungdom, er det viktig aa ta bekymringen paa alvor, snakke med ungdommen paa en respektfull maate, og henvende seg til helsesykepleier, fastlege eller andre relevante instanser.',
    },
    {
      id: 'hov1-4-3-6',
      type: 'tip',
      title: 'Stoette ungdom i identitetsutviklingen',
      content: 'For aa stoette ungdom i identitetsutviklingen er det viktig aa gi dem rom til aa prove ut ulike roller og uttrykk uten aa domme. Vaer en tilgjengelig og lyttende voksen som viser genuin interesse. Respekter ungdommens behov for privatliv og selvstendighet, men vaer tydelig paa grenser og forventninger. Aksepter at det er normalt med konflikter og at ungdom kan veksle mellom aa ville vaere selvstendig og aa trenge stoette. Det viktigste er at ungdommen foler seg sett, hort og verdsatt for den de er.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-4-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er pubertet?',
      solution: 'Perioden der kroppen gjennomgaar fysiske endringer fra barn til voksen',
      multipleChoiceOptions: [
        'Perioden der kroppen gjennomgaar fysiske endringer fra barn til voksen',
        'En psykisk sykdom som rammer ungdom',
        'Den forste dagen paa videregaaende skole',
        'En fase der ungdom slutter aa vokse',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Ifaolge Erikson, hva er den sentrale utviklingsoppgaven i ungdomstiden?',
      solution: 'Identitet versus rolleforvirring',
      multipleChoiceOptions: [
        'Identitet versus rolleforvirring',
        'Tillit versus mistillit',
        'Arbeidssomhet versus mindreverd',
        'Intimitet versus isolasjon',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor tar ungdom noen ganger impulsive beslutninger?',
      solution: 'Fordi prefrontal korteks, som styrer impulskontroll, ikke er ferdig utviklet for i midten av 20-aarene',
      multipleChoiceOptions: [
        'Fordi prefrontal korteks, som styrer impulskontroll, ikke er ferdig utviklet for i midten av 20-aarene',
        'Fordi ungdom ikke bryr seg om konsekvenser',
        'Fordi ungdom aldri laerer av sine feil',
        'Fordi alle ungdommer har ADHD',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken negativ effekt kan overdreven bruk av sosiale medier ha paa ungdom?',
      solution: 'Okt risiko for angst, depresjon, kroppspress og soevnproblemer',
      multipleChoiceOptions: [
        'Okt risiko for angst, depresjon, kroppspress og soevnproblemer',
        'Bedre skoleprestasjoner og konsentrasjon',
        'Sterkere vennskap og bedre sosiale ferdigheter',
        'Ingen negativ effekt dersom ungdommen er over 13 aar',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et eksempel paa positivt gruppepress?',
      solution: 'At venner motiverer hverandre til aa gjore lekser og delta i fritidsaktiviteter',
      multipleChoiceOptions: [
        'At venner motiverer hverandre til aa gjore lekser og delta i fritidsaktiviteter',
        'At en gruppe ungdommer presser en jevnaldrende til aa prove alkohol',
        'At ungdom faar andre til aa skulke skolen',
        'At en vennegjeng mobber en medelev for aa styrke samholdet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilke faresignaler kan tyde paa at en ungdom sliter med psykisk helse?',
      solution: 'Tilbaketrekking fra venner, endret atferd, nedgang i skoleprestasjoner og endret soevnmonster',
      multipleChoiceOptions: [
        'Tilbaketrekking fra venner, endret atferd, nedgang i skoleprestasjoner og endret soevnmonster',
        'At ungdommen vil vaere mer med venner enn med familien',
        'At ungdommen er opptatt av utseendet sitt og klaer',
        'At ungdommen onsker aa faa mer lommepenger',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-3-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den beste maaten aa stoette en ungdom som utforsker sin identitet?',
      solution: 'Gi rom til utforskning uten aa domme, vaer tilgjengelig og vis genuin interesse',
      multipleChoiceOptions: [
        'Gi rom til utforskning uten aa domme, vaer tilgjengelig og vis genuin interesse',
        'Bestemme for ungdommen hva de bor interessere seg for',
        'Ignorere endringer i atferd og stil fordi det bare er en fase',
        'Sammenligne ungdommen med soesken eller klassekamerater for aa motivere',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_4_4: TextbookChapter = {
  id: 'helseoppvekst-vg1-4-4',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '4.4',
  title: 'Voksenliv og aldring',
  description: 'I dette kapittelet laerer du om de ulike fasene i voksenlivet, fysiske og psykologiske endringer, og hvordan mennesker mestrer overganger og utfordringer gjennom livet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for menneskets utvikling og behov i ulike livsfaser',
    'droefte faktorer som pavirker livskvalitet og mestring i voksen alder',
  ],
  content: [
    {
      id: 'hov1-4-4-1',
      type: 'text',
      content: 'Voksenlivet strekker seg over mange tiar og inneholder store endringer. Vi deler gjerne voksenlivet inn i tidlig voksen alder (20-40 ar), midtre voksen alder (40-65 ar) og sen voksen alder (65 ar og eldre). I hver fase moeter mennesker nye utfordringer og muligheter. Tidlig voksen alder preges ofte av utdanning, karrierestart, partnervalg og familiedannelse. Midtre voksen alder kan vaere en stabil periode, men ogsaa en tid der mange opplever store omstillinger.',
    },
    {
      id: 'hov1-4-4-2',
      type: 'definition',
      title: 'Midtlivskrise',
      content: 'En midtlivskrise er en periode med indre uro og tvil som noen opplever midt i livet, ofte mellom 40 og 55 ar. Personen kan stille spoersmal ved valg som er tatt, og foele et sterkt behov for endring. Ikke alle opplever dette, men det er et kjent fenomen i psykologien.',
    },
    {
      id: 'hov1-4-4-3',
      type: 'text',
      content: 'Fysiske endringer i voksen alder skjer gradvis. Fra 30-arsalderen begynner muskelmassen sakte a avta, stoffskiftet senkes, og huden mister noe elastisitet. Synet endres ofte i 40-arene, og mange trenger lesebriller. Kvinner gjennomgar overgangsalderen (menopausen) vanligvis mellom 45 og 55 ar, noe som medforer hormonelle endringer. Menn opplever ogsaa gradvise hormonelle forandringer, men disse er mindre dramatiske. Regelmessig fysisk aktivitet, sunt kosthold og nok sovn kan bremse mange av de aldersrelaterte endringene.',
    },
    {
      id: 'hov1-4-4-4',
      type: 'definition',
      title: 'Balanse mellom arbeid og fritid',
      content: 'Work-life balance handler om a finne en sunn fordeling mellom arbeidsliv og privatliv. God balanse bidrar til bedre helse, lavere stressniva og hoeyere livskvalitet. I Norge har vi lover og avtaler som sikrer rettigheter som foreldrepermisjon, ferie og regulert arbeidstid.',
    },
    {
      id: 'hov1-4-4-5',
      type: 'example',
      title: 'Livsoverganger i voksenlivet',
      content: 'Kari er 48 ar og har vaert laerer i 20 ar. Barna hennes har flyttet hjemmefra, og hun opplever det som kalles "det tomme redet". Hun foeler en blanding av frihet og savn. Samtidig merker hun at foreldrene hennes trenger mer hjelp. Kari velger a bruke den nye friheten til a ta videreutdanning og begynner a trene regelmessig. Hun finner ny mening i a vaere tilgjengelig for foreldrene sine. Dette er et typisk eksempel pa hvordan voksne mestrer flere livsoverganger samtidig.',
    },
    {
      id: 'hov1-4-4-6',
      type: 'tip',
      title: 'Mestringsstrategier',
      content: 'For a haandtere overganger og utfordringer i voksenlivet er det viktig a ha et godt sosialt nettverk, vaere fysisk aktiv, sette realistiske mal, akseptere endring som en naturlig del av livet, og soeke hjelp nar man trenger det. Husk at det a be om hjelp er et tegn pa styrke, ikke svakhet.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-4-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken aldersperiode regnes vanligvis som tidlig voksen alder?',
      solution: '20-40 ar',
      multipleChoiceOptions: ['20-40 ar', '15-25 ar', '30-50 ar', '40-65 ar'],
    },
    {
      id: 'helseoppvekst-vg1-4-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er menopausen?',
      solution: 'Overgangsalderen hos kvinner der menstruasjonen opphorer',
      multipleChoiceOptions: [
        'Overgangsalderen hos kvinner der menstruasjonen opphorer',
        'En psykisk lidelse som rammer eldre kvinner',
        'En periode med oekt fruktbarhet hos kvinner over 50',
        'En hormonsykdom som bare rammer menn',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner en midtlivskrise?',
      solution: 'En periode med indre uro og tvil rundt livsvalg, ofte mellom 40 og 55 ar',
      multipleChoiceOptions: [
        'En periode med indre uro og tvil rundt livsvalg, ofte mellom 40 og 55 ar',
        'En medisinsk diagnose som krever behandling med medisiner',
        'En krise som alltid oppstar nar barn flytter hjemmefra',
        'En tilstand som bare rammer mennesker som er enslige',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av foelgende utsagn om fysiske endringer i voksen alder er riktig?',
      solution: 'Muskelmassen begynner gradvis a avta fra 30-arsalderen',
      multipleChoiceOptions: [
        'Muskelmassen begynner gradvis a avta fra 30-arsalderen',
        'Synet forbedres vanligvis i 40-arene',
        'Stoffskiftet oeker jevnt gjennom hele voksenlivet',
        'Fysisk aktivitet har liten effekt pa aldersrelaterte endringer',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med "det tomme redet" i psykologien?',
      solution: 'Foelelsen foreldre far nar barna flytter hjemmefra',
      multipleChoiceOptions: [
        'Foelelsen foreldre far nar barna flytter hjemmefra',
        'En depresjon som oppstar etter pensjonering',
        'Ensomhet hos eldre som bor pa sykehjem',
        'Angst hos unge voksne som bor alene for foerste gang',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken faktor har stoerst betydning for god work-life balance ifølge norsk arbeidsliv?',
      solution: 'En kombinasjon av lovverk, avtaler og individuelle tilpasninger',
      multipleChoiceOptions: [
        'En kombinasjon av lovverk, avtaler og individuelle tilpasninger',
        'At man jobber sa lite som mulig for a unnga stress',
        'At arbeidsgiveren bestemmer alt om arbeidstiden',
        'At man aldri tar med seg arbeidsoppgaver hjem',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-4-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er sosialt nettverk viktig for mestring av livsoverganger i voksen alder?',
      solution: 'Det gir emosjonell stoette, praktisk hjelp og en foelelse av tilhoerighet',
      multipleChoiceOptions: [
        'Det gir emosjonell stoette, praktisk hjelp og en foelelse av tilhoerighet',
        'Det erstatter behovet for profesjonell hjelp fra helsevesenet',
        'Det hindrer alle former for psykisk uhelse',
        'Det er bare viktig for mennesker som bor alene',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_4_5: TextbookChapter = {
  id: 'helseoppvekst-vg1-4-5',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '4.5',
  title: 'Eldre og aldringsprosessen',
  description: 'I dette kapittelet laerer du om normal aldring, vanlige sykdommer hos eldre, demenssykdommer, og hva som bidrar til livskvalitet og verdighet i alderdommen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for aldringsprosessen og vanlige helseutfordringer hos eldre',
    'droefte hva som fremmer livskvalitet og verdighet for eldre mennesker',
  ],
  content: [
    {
      id: 'hov1-4-5-1',
      type: 'text',
      content: 'Aldring er en naturlig biologisk prosess som pavirker alle kroppens organer og funksjoner. Normal aldring innebaerer gradvis reduksjon i fysisk kapasitet, men tempoet varierer sterkt fra person til person. Mange eldre lever aktive og selvstendige liv langt opp i arene. Det er viktig a skille mellom normal aldring og sykdom. Normal aldring gir for eksempel noe redusert hukommelse og reaksjonsevne, mens demens er en sykdom som gir langt stoerre kognitive problemer.',
    },
    {
      id: 'hov1-4-5-2',
      type: 'definition',
      title: 'Demens',
      content: 'Demens er en fellesbetegnelse for flere hjernesykdommer som forer til gradvis tap av kognitive funksjoner som hukommelse, orientering, spraak og doemmekraft. Alzheimers sykdom er den vanligste formen og star for omtrent 60-70 prosent av alle demenstilfeller. Andre typer inkluderer vaskulaer demens, Lewy body-demens og frontotemporal demens. Demens er ikke en naturlig del av aldringen, men risikoen oeker med alderen.',
    },
    {
      id: 'hov1-4-5-3',
      type: 'text',
      content: 'Vanlige helseutfordringer hos eldre inkluderer hjerte- og karsykdommer, diabetes type 2, osteoporose (beinskjoerhet), artrose (slitasjegikt), nedsatt syn og hoersel, samt oekt risiko for fall og brudd. Mange eldre bruker flere medisiner samtidig, noe som kalles polyfarmasi, og dette kan gi uoenskede bivirkninger og interaksjoner. God oppfoelging fra helsepersonell er derfor viktig. Psykiske helseutfordringer som depresjon og ensomhet er ogsaa utbredt blant eldre.',
    },
    {
      id: 'hov1-4-5-4',
      type: 'definition',
      title: 'Osteoporose',
      content: 'Osteoporose, eller beinskjoerhet, er en tilstand der beinvevet blir tynnere og skjoerere, slik at risikoen for brudd oeker. Tilstanden er vanligst hos eldre kvinner etter overgangsalderen, men kan ogsaa ramme menn. Forebygging inkluderer fysisk aktivitet, tilstrekkelig inntak av kalsium og vitamin D, og i noen tilfeller medikamentell behandling.',
    },
    {
      id: 'hov1-4-5-5',
      type: 'example',
      title: 'Livskvalitet i alderdommen',
      content: 'Olav er 82 ar og bor hjemme med hjelp fra hjemmesykepleien. Han har artrose i kneet og nedsatt hoersel, men deltar ukentlig pa eldresenter der han spiller sjakk og treffer venner. Han gar tur med rullator hver dag og er opptatt av a lage god mat. Olav sier selv at det sosiale fellesskapet og det a foele seg nyttig er det viktigste for livskvaliteten hans. Eksempelet viser at livskvalitet handler om mer enn fravaer av sykdom - meningsfull aktivitet, sosial kontakt og selvstendighet er avgjorende.',
    },
    {
      id: 'hov1-4-5-6',
      type: 'warning',
      title: 'Verdighet i alderdommen',
      content: 'Alle mennesker har rett til a bli behandlet med verdighet og respekt, uansett alder og helsetilstand. I helse- og omsorgstjenesten er det viktig a se hele mennesket, ikke bare diagnosene. Eldre skal fa medvirke i beslutninger om egen hverdag og behandling. Tvang og umyndiggjoring er alvorlige overgrep. Helsepersonell ma vaere bevisst pa egne holdninger og unnga alderdiskriminering (ageisme).',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-4-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken demenssykdom er den vanligste?',
      solution: 'Alzheimers sykdom',
      multipleChoiceOptions: [
        'Alzheimers sykdom',
        'Vaskulaer demens',
        'Lewy body-demens',
        'Frontotemporal demens',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er osteoporose?',
      solution: 'En tilstand der beinvevet blir tynnere og mer skjoert',
      multipleChoiceOptions: [
        'En tilstand der beinvevet blir tynnere og mer skjoert',
        'En type leddgikt som rammer fingrene',
        'En muskelsykdom som gir smerter i ryggen',
        'En infeksjon i knoklene hos eldre',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr polyfarmasi?',
      solution: 'At en person bruker mange ulike medisiner samtidig',
      multipleChoiceOptions: [
        'At en person bruker mange ulike medisiner samtidig',
        'At en person nekter a ta medisinene sine',
        'At legen skriver ut feil medisin',
        'At apoteket blander sammen ulike medisiner',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av foelgende er et tegn pa normal aldring og ikke nødvendigvis sykdom?',
      solution: 'Noe langsommere reaksjonsevne og mild glemsomhet',
      multipleChoiceOptions: [
        'Noe langsommere reaksjonsevne og mild glemsomhet',
        'A glemme navnene pa naere familiemedlemmer',
        'A ikke finne veien hjem fra butikken',
        'A ikke gjenkjenne seg selv i speilet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken faktor er viktigst for livskvalitet hos eldre ifølge forskning?',
      solution: 'Sosial kontakt, meningsfull aktivitet og opplevelse av selvstendighet',
      multipleChoiceOptions: [
        'Sosial kontakt, meningsfull aktivitet og opplevelse av selvstendighet',
        'A fa sa mange medisiner som mulig for a holde seg frisk',
        'A bo pa institusjon slik at man alltid har hjelp tilgjengelig',
        'A unnga all fysisk aktivitet for a spare kroppen',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er ageisme?',
      solution: 'Diskriminering eller negative holdninger basert pa alder',
      multipleChoiceOptions: [
        'Diskriminering eller negative holdninger basert pa alder',
        'En psykisk lidelse som oppstar i hoey alder',
        'Frykten for a bli gammel',
        'En medisinsk betegnelse for rask aldring',
      ],
    },
    {
      id: 'helseoppvekst-vg1-4-5-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er fallforebygging saerig viktig for eldre med osteoporose?',
      solution: 'Fordi skjoert beinvev gjoer at selv lette fall kan fore til alvorlige brudd',
      multipleChoiceOptions: [
        'Fordi skjoert beinvev gjoer at selv lette fall kan fore til alvorlige brudd',
        'Fordi eldre med osteoporose ikke kan ga uten rullestol',
        'Fordi osteoporose pavirker balansen direkte',
        'Fordi alle eldre over 70 ar har osteoporose',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_5_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-5-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '5.1',
  title: 'Omsorg for barn og unge',
  description: 'I dette kapittelet laerer du om omsorg for barn og unge i barnehage og skole, hvordan man gjenkjenner omsorgssvikt og overgrep, barns rettigheter, og hvordan man skaper trygge oppvekstmiljoeer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for barns rettigheter og behov for trygghet og omsorg',
    'beskrive tegn pa omsorgssvikt og vold mot barn, og kjenne til meldeplikt og handlingsplikt',
  ],
  content: [
    {
      id: 'hov1-5-1-1',
      type: 'text',
      content: 'Barn og unge har behov for trygghet, kjaerlighet, forutsigbarhet og tilhoerighet for a utvikle seg godt. I barnehage og skole er de ansatte viktige omsorgspersoner som supplerer foreldrenes omsorg. God omsorg innebaeerer a se hvert enkelt barn, lytte til det, gi troest og stoette, og legge til rette for lek, laeering og sosialt samspill. Relasjonen mellom voksen og barn er grunnlaget for all god omsorg. Barn som opplever trygge relasjoner med voksne utvikler bedre selvfoelelse, sosiale ferdigheter og evne til a regulere egne foelelser.',
    },
    {
      id: 'hov1-5-1-2',
      type: 'definition',
      title: 'Omsorgssvikt',
      content: 'Omsorgssvikt er en situasjon der barn ikke far dekket sine grunnleggende behov for omsorg og beskyttelse. Det finnes flere former: fysisk omsorgssvikt (manglende mat, klaer, hygiene), emosjonell omsorgssvikt (manglende kjaerlighet, avvisning, ignorering), fysisk vold, psykisk vold, seksuelle overgrep, og a vaere vitne til vold i hjemmet. Omsorgssvikt kan ha alvorlige konsekvenser for barnets utvikling og helse.',
    },
    {
      id: 'hov1-5-1-3',
      type: 'text',
      content: 'FNs barnekonvensjon gir barn saerlige rettigheter. Fire grunnprinsipper er sentrale: retten til ikke-diskriminering, barnets beste skal vaere et grunnleggende hensyn, retten til liv og utvikling, og retten til a bli hoert. I Norge er barnekonvensjonen tatt inn i norsk lov gjennom menneskerettsloven, og den gar foran andre lover ved motstrid. Barnevernloven, barnelova og opplaeringslova er andre viktige lover som beskytter barn og unges rettigheter.',
    },
    {
      id: 'hov1-5-1-4',
      type: 'warning',
      title: 'Meldeplikt til barnevernet',
      content: 'Alle som arbeider i barnehage, skole, helsevesen og andre offentlige tjenester har lovpaalagt meldeplikt til barnevernet dersom det er grunn til a tro at et barn utsettes for alvorlig omsorgssvikt eller mishandling. Meldeplikten gar foran taushetsplikten. Man trenger ikke vaere sikker - det holder at man har en bekymring. Det er barnevernet som undersokeer saken videre. A la vaere a melde kan vaere straffbart.',
    },
    {
      id: 'hov1-5-1-5',
      type: 'example',
      title: 'Tegn pa omsorgssvikt',
      content: 'Sofia er 5 ar og gar i barnehagen. De ansatte har merket at hun ofte kommer uten matpakke, har skitne klaer, virker trøtt og er tilbaketrukket. Hun reagerer sterkt nar voksne hever stemmen og har begynt a slaa andre barn. En ansatt ser blamerker pa overarmen hennes. De ansatte diskuterer observasjonene og sender bekymringsmelding til barnevernet. De dokumenterer observasjonene sine og fortsetter a gi Sofia ekstra trygghet og omsorg i barnehagen mens barnevernet undersokeer saken.',
    },
    {
      id: 'hov1-5-1-6',
      type: 'tip',
      title: 'A skape trygge miljoeer',
      content: 'For a skape trygge oppvekstmiljoeer boer voksne vaere forutsigbare og tilgjengelige, lytte aktivt til barna, gi anerkjennelse og positiv oppmerksomhet, ha klare og trygge rammer, legge til rette for fri lek og kreativ aktivitet, og jobbe med a bygge gode relasjoner mellom barna. Lek er barns viktigste laeringsarena og bidrar til fysisk, sosial, emosjonell og kognitiv utvikling.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-5-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange grunnprinsipper har FNs barnekonvensjon?',
      solution: 'Fire',
      multipleChoiceOptions: ['Fire', 'To', 'Seks', 'Atte'],
    },
    {
      id: 'helseoppvekst-vg1-5-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva innebaeerer emosjonell omsorgssvikt?',
      solution: 'At barnet ikke far kjaerlighet, blir avvist eller ignorert',
      multipleChoiceOptions: [
        'At barnet ikke far kjaerlighet, blir avvist eller ignorert',
        'At barnet ikke far nok mat og drikke',
        'At barnet far for mange leker',
        'At barnet ma dele rom med soesken',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gar meldeplikten til barnevernet ut pa?',
      solution: 'At ansatte i offentlige tjenester ma melde fra ved bekymring for alvorlig omsorgssvikt',
      multipleChoiceOptions: [
        'At ansatte i offentlige tjenester ma melde fra ved bekymring for alvorlig omsorgssvikt',
        'At foreldre ma melde fra til barnehagen om barnets helse',
        'At barn over 12 ar ma melde fra til politiet selv',
        'At naboer er juridisk forpliktet til a overvake familier',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket utsagn om barnekonvensjonen i Norge er riktig?',
      solution: 'Den er tatt inn i norsk lov og gar foran andre lover ved motstrid',
      multipleChoiceOptions: [
        'Den er tatt inn i norsk lov og gar foran andre lover ved motstrid',
        'Den gjelder bare for barn under 12 ar',
        'Den er en anbefaling og ikke juridisk bindende',
        'Den gjelder bare for barn som er norske statsborgere',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er lek viktig for barns utvikling?',
      solution: 'Lek bidrar til fysisk, sosial, emosjonell og kognitiv utvikling',
      multipleChoiceOptions: [
        'Lek bidrar til fysisk, sosial, emosjonell og kognitiv utvikling',
        'Lek er bare viktig for fysisk utvikling',
        'Lek er underholdning og har ingen laeringsverdi',
        'Lek er bare viktig for barn under 3 ar',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En ansatt i barnehagen mistenker omsorgssvikt, men er ikke helt sikker. Hva boer den ansatte gjoere?',
      solution: 'Droefte bekymringen med leder og sende melding til barnevernet',
      multipleChoiceOptions: [
        'Droefte bekymringen med leder og sende melding til barnevernet',
        'Vente til man er helt sikker foer man gjoer noe',
        'Kontakte foreldrene direkte og konfrontere dem',
        'Ignorere det fordi man ikke har bevis',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-1-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket av foelgende er et eksempel pa at barnets beste-prinsippet brukes i praksis?',
      solution: 'At barnehagen tilpasser rutinene for et barn med saerlige behov etter faglig vurdering',
      multipleChoiceOptions: [
        'At barnehagen tilpasser rutinene for et barn med saerlige behov etter faglig vurdering',
        'At foreldrene alltid far bestemme hva barnet skal gjoere i barnehagen',
        'At barnet alltid far viljen sin uansett situasjon',
        'At alle barn ma foelge noyaktig samme program til enhver tid',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_5_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-5-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '5.2',
  title: 'Omsorg for eldre',
  description: 'I dette kapittelet laerer du om personsentrert omsorg for eldre, hjelp til daglige aktiviteter, ernaering, fallforebygging, sosiale behov og verdighet i eldreomsorgen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'beskrive prinsippene for personsentrert omsorg og hvordan disse kan anvendes i praksis',
    'gjore rede for grunnleggende behov hos eldre og hvordan helsepersonell kan bidra til livskvalitet og verdighet',
  ],
  content: [
    {
      id: 'hov1-5-2-1',
      type: 'text',
      content: 'Personsentrert omsorg er en tilnaerming der man setter den enkelte persons behov, oensker og livserfaringer i sentrum. Begrepet ble utviklet av Tom Kitwood, opprinnelig i sammenheng med demensomsorgen, men prinsippene gjelder all eldreomsorg. Personsentrert omsorg innebaeerer a kjenne personens livshistorie, respektere individuelle valg, opprettholde identitet og selvfoelelse, og legge til rette for meningsfull aktivitet. Det handler om a se mennesket bak diagnosen og fremme en relasjon bygget pa tillit og respekt.',
    },
    {
      id: 'hov1-5-2-2',
      type: 'definition',
      title: 'ADL - Aktiviteter i dagliglivet',
      content: 'ADL (Activities of Daily Living) er en betegnelse pa grunnleggende daglige aktiviteter som personlig hygiene, pakledning, spising, forflytning og toalettbesoek. IADL (Instrumental Activities of Daily Living) omfatter mer sammensatte aktiviteter som matlaging, handling, oekonomistyring, bruk av telefon og transport. Kartlegging av ADL-funksjon er viktig for a vurdere hvor mye hjelp en person trenger, og hjelpen skal gis pa en mate som fremmer mestring og selvstendighet.',
    },
    {
      id: 'hov1-5-2-3',
      type: 'text',
      content: 'Ernaering er saerig viktig for eldre. Mange eldre er underernaeerte eller i risiko for underernaeering. Arsaker kan vaere nedsatt appetitt, tygge- og svelgevansker, ensomhet som reduserer matlysten, bivirkninger av medisiner, depresjon eller kognitiv svikt. God ernaering for eldre innebaeerer tilstrekkelig energi og protein, nok vaeskeinntak, vitamin D og kalsium, og maaltider i et trivelig miljo. Fellesmaaltider kan oeke matlysten og gi sosial kontakt. Helsepersonell boer screene eldre for ernaeringsrisiko regelmessig.',
    },
    {
      id: 'hov1-5-2-4',
      type: 'tip',
      title: 'Fallforebygging',
      content: 'Fall er en av de vanligste arsakene til skader og sykehusinnleggelser hos eldre. Viktige tiltak for fallforebygging inkluderer: fjerne loese tepper og ledninger, sikre god belysning (spesielt om natten), bruke hensiktsmessig skotoy, trene balanse og styrke, gjennomga medisiner som kan gi svimmelhet, installere haandtak og rekkverk, bruke hoftebeskyttere ved hoey fallrisiko, og sikre at hjelpemidler som rullator og stokk er riktig tilpasset.',
    },
    {
      id: 'hov1-5-2-5',
      type: 'example',
      title: 'Personsentrert omsorg i praksis',
      content: 'Astrid er 87 ar og bor pa sykehjem. Hun har moderat demens og trenger hjelp til stell og pakledning. I stedet for a bare gjoere ting for henne, inviterer pleierne henne til a delta sa mye hun klarer selv. De vet at Astrid var laerer og elsket musikk. Derfor snakker de med henne om skolen og spiller klassisk musikk under stellet. De lar henne velge klaer selv og gir henne god tid. Astrid har bilder av familien pa rommet og en kjent duk pa bordet. Denne tilnaermingen gjoer at Astrid er roligere, mer samarbeidsvillig og virker mer tilfreds.',
    },
    {
      id: 'hov1-5-2-6',
      type: 'warning',
      title: 'Verdighet og selvbestemmelse',
      content: 'Eldre mennesker har rett til a bestemme over eget liv, ogsaa nar de trenger hjelp. Helsepersonell ma aldri overkjoere den eldres oensker uten lovlig grunnlag. Det a banke pa doeren foer man gar inn, tiltale personen med det navnet de foretrekker, gi valgmuligheter i hverdagen og beskytte privatlivet er grunnleggende for a ivareta verdigheten. Ufrivillig bruk av tvang er strengt regulert i loven og krever vedtak etter pasient- og brukerrettighetsloven.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-5-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva star ADL for?',
      solution: 'Activities of Daily Living - aktiviteter i dagliglivet',
      multipleChoiceOptions: [
        'Activities of Daily Living - aktiviteter i dagliglivet',
        'Advanced Daily Learning - avansert daglig laeering',
        'Assisted Daily Life - assistert dagligliv',
        'Active Daily Lifestyle - aktiv daglig livsstil',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem utviklet begrepet personsentrert omsorg?',
      solution: 'Tom Kitwood',
      multipleChoiceOptions: [
        'Tom Kitwood',
        'Florence Nightingale',
        'Abraham Maslow',
        'Virginia Henderson',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken av foelgende er en IADL-aktivitet?',
      solution: 'Matlaging og handling i butikk',
      multipleChoiceOptions: [
        'Matlaging og handling i butikk',
        'A pusse tennene',
        'A spise maten sin',
        'A ga pa toalettet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken faktor kan bidra til underernaeering hos eldre?',
      solution: 'Ensomhet som reduserer matlysten og manglende sosialt fellesskap ved maaltider',
      multipleChoiceOptions: [
        'Ensomhet som reduserer matlysten og manglende sosialt fellesskap ved maaltider',
        'For mye fysisk aktivitet som forbrenner alle kaloriene',
        'At eldre spiser for mange groennsaker',
        'At eldre alltid har tilgang pa for mye mat',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er det viktigste prinsippet i personsentrert omsorg?',
      solution: 'A sette den enkelte persons behov, oensker og livshistorie i sentrum',
      multipleChoiceOptions: [
        'A sette den enkelte persons behov, oensker og livshistorie i sentrum',
        'A foelge faste rutiner som er like for alle beboere',
        'A la de paroerende bestemme alt for den eldre',
        'A fokusere pa medisinsk behandling fremfor alt annet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket tiltak er mest effektivt for fallforebygging hos eldre?',
      solution: 'En kombinasjon av fysisk trening, medisingjennomgang og tilrettelegging av miljoeet',
      multipleChoiceOptions: [
        'En kombinasjon av fysisk trening, medisingjennomgang og tilrettelegging av miljoeet',
        'At den eldre holder seg i sengen for a unnga a falle',
        'At man alltid holder den eldre i armen nar de gar',
        'At den eldre far sovemedisin slik at de ikke star opp om natten',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-2-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Nar kan helsepersonell bruke tvang overfor en eldre pasient som motsetter seg hjelp?',
      solution: 'Kun nar det foreligger lovhjemmel og formelt vedtak etter pasient- og brukerrettighetsloven',
      multipleChoiceOptions: [
        'Kun nar det foreligger lovhjemmel og formelt vedtak etter pasient- og brukerrettighetsloven',
        'Nar helsepersonellet mener det er til pasientens beste',
        'Nar paroerende gir muntlig samtykke',
        'Tvang kan aldri brukes under noen omstendigheter',
      ],
    },
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_5_3: TextbookChapter = {
  id: 'helseoppvekst-vg1-5-3',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '5.3',
  title: 'Omsorg for mennesker med funksjonsnedsettelser',
  description: 'I dette kapittelet laerer du om ulike typer funksjonsnedsettelser, inkludering, selvbestemmelse, universell utforming, hjelpemiddelteknologi og rettigheter for mennesker med funksjonsnedsettelser.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for rettigheter og tjenester for mennesker med funksjonsnedsettelser',
    'droefte hvordan samfunnet kan legge til rette for inkludering, deltakelse og selvbestemmelse',
  ],
  content: [
    {
      id: 'hov1-5-3-1',
      type: 'text',
      content: 'En funksjonsnedsettelse innebaeerer tap av eller skade pa en kroppsdel eller en av kroppens funksjoner. Det kan vaere fysiske, kognitive, sensoriske eller psykososiale funksjonsnedsettelser. Funksjonsnedsettelse er ikke det samme som funksjonshemming. Ifølge den sosiale modellen oppstar funksjonshemming i moetet mellom individet og samfunnets barrierer. Det betyr at det er gapet mellom personens forutsetninger og samfunnets krav som skaper funksjonshemmingen - ikke funksjonsnedsettelsen i seg selv. Et rullestolbrukende menneske er for eksempel ikke funksjonshemmet i et fullt tilgjengelig bygg.',
    },
    {
      id: 'hov1-5-3-2',
      type: 'definition',
      title: 'CRPD - FN-konvensjonen om rettigheter for mennesker med nedsatt funksjonsevne',
      content: 'CRPD (Convention on the Rights of Persons with Disabilities) er en FN-konvensjon som Norge ratifiserte i 2013. Den slaar fast at mennesker med funksjonsnedsettelser har de samme menneskerettighetene som alle andre, og at samfunnet ma fjerne barrierer for full deltakelse. Viktige prinsipper er respekt for verdighet, ikke-diskriminering, full deltakelse og inkludering, respekt for forskjellighet, like muligheter, tilgjengelighet og likestilling mellom kjoennene.',
    },
    {
      id: 'hov1-5-3-3',
      type: 'text',
      content: 'Selvbestemmelse er en grunnleggende rettighet for alle mennesker, ogsaa de med funksjonsnedsettelser. Historisk har mennesker med funksjonsnedsettelser ofte blitt umyndiggjort og fatt andre til a ta beslutninger for seg. I dag er det et baerende prinsipp at alle skal fa bestemme mest mulig over eget liv. Dette gjelder alt fra hverdagsbeslutninger som hva man vil spise og kle pa seg, til stoerre valg om bosted, arbeid og fritidsaktiviteter. Tjenesteytere skal stoette personen i a ta egne valg, ikke ta valgene for dem.',
    },
    {
      id: 'hov1-5-3-4',
      type: 'definition',
      title: 'Universell utforming',
      content: 'Universell utforming betyr at produkter, bygninger, uteomrader og teknologi skal utformes slik at de kan brukes av alle mennesker i sa stor utstrekning som mulig, uten behov for tilpasning eller spesiell utforming. I Norge er universell utforming lovfestet gjennom likestillings- og diskrimineringsloven. Eksempler er ramper ved innganger, taktile ledelinjer, teksting av videoer, lettlest skrift og automatiske doerapnere.',
    },
    {
      id: 'hov1-5-3-5',
      type: 'example',
      title: 'Hjelpemiddelteknologi i hverdagen',
      content: 'Erik er 25 ar og har cerebral parese. Han bruker elektrisk rullestol og har nedsatt finmotorikk. Med hjelpemidler fra NAV klarer han a bo i egen leilighet og jobbe deltid. Han bruker omgivelseskontroll for a styre lys, doerer og TV med stemmen, har tilpasset PC med spesialtastatur og oeyestyring, og har en personlig assistent som hjelper med stell og matlaging. Erik deltar i en idrettsforening for rullestolbasket og har et aktivt sosialt liv. Hjelpemidlene og tjenestene gjoer at han kan leve et selvstendig og meningsfylt liv.',
    },
    {
      id: 'hov1-5-3-6',
      type: 'tip',
      title: 'Viktige holdninger i arbeid med mennesker med funksjonsnedsettelser',
      content: 'Godt arbeid med mennesker med funksjonsnedsettelser krever riktige holdninger: se personen foerst og funksjonsnedsettelsen deretter, lytt til hva personen selv oensker, unnga a overbeskytte eller gjore mer enn nodvendig, bruk respektfullt sprak, anerkjenn personens ressurser og styrker, og husk at alle mennesker har behov for a foele seg verdsatt og inkludert. Man boer alltid spoerre personen selv hvordan de oensker a fa hjelp, fremfor a anta.',
    },
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-5-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er universell utforming?',
      solution: 'At produkter og omgivelser utformes slik at de kan brukes av alle uten spesiell tilpasning',
      multipleChoiceOptions: [
        'At produkter og omgivelser utformes slik at de kan brukes av alle uten spesiell tilpasning',
        'At alle bygninger ma ha heis til alle etasjer',
        'At man lager spesielle produkter kun for mennesker med funksjonsnedsettelser',
        'At alle nettsider ma vaere pa flere sprak',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva star CRPD for?',
      solution: 'Convention on the Rights of Persons with Disabilities',
      multipleChoiceOptions: [
        'Convention on the Rights of Persons with Disabilities',
        'Center for Rehabilitation and Physical Development',
        'Committee for Research on Public Disabilities',
        'Central Registry of Persons with Diagnoses',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom funksjonsnedsettelse og funksjonshemming ifølge den sosiale modellen?',
      solution: 'Funksjonsnedsettelse er individets tilstand, mens funksjonshemming oppstar i moetet med samfunnets barrierer',
      multipleChoiceOptions: [
        'Funksjonsnedsettelse er individets tilstand, mens funksjonshemming oppstar i moetet med samfunnets barrierer',
        'Det er ingen forskjell, begrepene betyr det samme',
        'Funksjonshemming er alvorligere enn funksjonsnedsettelse',
        'Funksjonsnedsettelse er medfodt, mens funksjonshemming er ervervet',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Nar ratifiserte Norge CRPD?',
      solution: '2013',
      multipleChoiceOptions: ['2013', '2001', '2018', '2006'],
    },
    {
      id: 'helseoppvekst-vg1-5-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva innebaeerer selvbestemmelsesretten for mennesker med funksjonsnedsettelser?',
      solution: 'At personen selv far ta beslutninger om eget liv, med stoette ved behov',
      multipleChoiceOptions: [
        'At personen selv far ta beslutninger om eget liv, med stoette ved behov',
        'At paroerende bestemmer hva som er best for personen',
        'At kommunen bestemmer hvilke tjenester personen far',
        'At personen ma klare alt helt alene uten hjelp',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken norsk lov sikrer retten til universell utforming?',
      solution: 'Likestillings- og diskrimineringsloven',
      multipleChoiceOptions: [
        'Likestillings- og diskrimineringsloven',
        'Helse- og omsorgstjenesteloven',
        'Plan- og bygningsloven alene',
        'Folketrygdloven',
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-3-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er det problematisk a overbeskytte mennesker med funksjonsnedsettelser?',
      solution: 'Det undergraver selvbestemmelsen og kan hemme utvikling av ferdigheter og selvstendighet',
      multipleChoiceOptions: [
        'Det undergraver selvbestemmelsen og kan hemme utvikling av ferdigheter og selvstendighet',
        'Det er for dyrt for kommunen a gi sa mye hjelp',
        'Det er i strid med arbeidsmiljoeloven',
        'Det forer alltid til at personen blir sint og aggressiv',
      ],
    },
  ],
};



export const CHAPTER_HELSEOPPVEKST_VG1_5_4: TextbookChapter = {
  id: 'helseoppvekst-vg1-5-4',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '5.4',
  title: 'Aktiviteter og dagliglivets gjoremal (ADL)',
  description: 'Laer om aktiviteter i dagliglivet, hvordan man vurderer funksjonsniva og stotter mennesker til selvstendighet i hverdagen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for hva som fremmer helse og mestring, og foreslaa tiltak som kan bidra til en aktiv hverdag',
    'planlegge, gjennomfore og vurdere tiltak som bidrar til mestring og deltakelse i dagliglivet'
  ],
  content: [
    {
      id: 'hov1-5-4-1',
      type: 'text',
      content: 'Aktiviteter i dagliglivet (ADL) er et sentralt begrep innen helse- og omsorgsfagene. ADL handler om de aktivitetene vi gjor hver dag for aa ta vare paa oss selv og leve et selvstendig liv. For mange er disse aktivitetene sa selvfolgelige at vi knapt tenker over dem, men for personer med sykdom, skade eller funksjonsnedsettelse kan selv enkle gjoremal vaere utfordrende. Som helsefagarbeider er det viktig aa forstaa hva ADL innebærer, slik at du kan stotte brukere paa en maate som fremmer selvstendighet og verdighet.'
    },
    {
      id: 'hov1-5-4-2',
      type: 'definition',
      title: 'Personlig ADL (PADL)',
      content: 'Personlig ADL omfatter grunnleggende aktiviteter knyttet til egenomsorg, som aa spise, kle paa seg, vaske seg, gaa paa toalettet og forflytte seg. Dette er de mest basale ferdighetene et menneske trenger for aa fungere i hverdagen. Tap av PADL-funksjoner oppleves ofte som svært belastende fordi det paavirker selvbildet og opplevelsen av verdighet.'
    },
    {
      id: 'hov1-5-4-3',
      type: 'definition',
      title: 'Instrumentell ADL (IADL)',
      content: 'Instrumentell ADL omfatter mer sammensatte aktiviteter som kreves for aa leve selvstendig i samfunnet. Eksempler er aa lage mat, handle, vaske klær, gjore rent, haandtere okonomi, bruke telefon og organisere medisiner. IADL krever mer kognitive ferdigheter enn PADL og er ofte de forste funksjonene som svekkes ved begynnende demens.'
    },
    {
      id: 'hov1-5-4-4',
      type: 'example',
      title: 'ADL-kartlegging i praksis',
      content: 'Kari er 82 aar og har nylig hatt et hjerneslag. Ergoterapeuten bruker et kartleggingsverktoy for aa vurdere Karis ADL-funksjon. Kartleggingen viser at Kari klarer aa spise selv og gaa paa toalettet med noe stotte (PADL), men hun trenger hjelp til aa lage mat, handle og vaske klær (IADL). Basert paa kartleggingen lager teamet en plan der maalene er at Kari skal trene paa aa gjenvinne mest mulig selvstendighet, med tilpasset stotte underveis.'
    },
    {
      id: 'hov1-5-4-5',
      type: 'tip',
      title: 'Motivasjon og selvstendighet',
      content: 'Det kan vaere fristende aa gjore ting for brukeren fordi det gaar raskere, men dette kan fore til laert hjelpeloshet. La brukeren gjore mest mulig selv, selv om det tar lengre tid. Gi ros og oppmuntring underveis. Et godt prinsipp er: \"Hjelp til selvhjelp\" - maalsetningen er alltid at brukeren skal opprettholde eller gjenvinne sa mye selvstendighet som mulig.'
    },
    {
      id: 'hov1-5-4-6',
      type: 'text',
      content: 'Flere kartleggingsverktoy brukes for aa vurdere ADL-funksjon. Barthel ADL-indeks er et mye brukt verktoy som maalerer PADL paa en skala fra 0 til 20. Lawton og Brodys skala brukes for IADL. Kartlegging gir et systematisk bilde av brukerens funksjonsnivaa og danner grunnlaget for individuell tiltaksplan. Det er viktig at kartleggingen gjennomfores i samarbeid med brukeren, slik at brukerens egne maal og onsker staar sentralt.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-5-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar forkortelsen ADL for?',
      solution: 'Aktiviteter i dagliglivet',
      multipleChoiceOptions: [
        'Aktiviteter i dagliglivet',
        'Assistanse til daglig liv',
        'Aktiv daglig laering',
        'Allmenn daglig levering'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av disse er et eksempel paa personlig ADL (PADL)?',
      solution: 'Aa kle paa seg',
      multipleChoiceOptions: [
        'Aa kle paa seg',
        'Aa handle mat',
        'Aa betale regninger',
        'Aa vaske klær'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom PADL og IADL?',
      solution: 'PADL handler om grunnleggende egenomsorg, mens IADL handler om mer sammensatte aktiviteter for selvstendig liv',
      multipleChoiceOptions: [
        'PADL handler om grunnleggende egenomsorg, mens IADL handler om mer sammensatte aktiviteter for selvstendig liv',
        'PADL gjelder kun eldre, mens IADL gjelder alle aldersgrupper',
        'PADL er fysiske aktiviteter, mens IADL er sosiale aktiviteter',
        'PADL krever mer hjelp enn IADL'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket kartleggingsverktoy brukes ofte for aa vurdere personlig ADL-funksjon?',
      solution: 'Barthel ADL-indeks',
      multipleChoiceOptions: [
        'Barthel ADL-indeks',
        'IPLOS livskvalitetsskjema',
        'Mini Mental Status',
        'Bergens funksjonstest'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med prinsippet "hjelp til selvhjelp"?',
      solution: 'At man stotter brukeren til aa gjore mest mulig selv for aa fremme selvstendighet',
      multipleChoiceOptions: [
        'At man stotter brukeren til aa gjore mest mulig selv for aa fremme selvstendighet',
        'At brukeren maa klare alt uten hjelp',
        'At man gir brukeren skriftlige instruksjoner',
        'At paarorende overtar alle oppgaver'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilke ADL-funksjoner svekkes typisk forst ved begynnende demens?',
      solution: 'Instrumentelle ADL-funksjoner som okonomihaandtering og matlaging',
      multipleChoiceOptions: [
        'Instrumentelle ADL-funksjoner som okonomihaandtering og matlaging',
        'Personlige ADL-funksjoner som aa spise og kle paa seg',
        'Alle ADL-funksjoner svekkes samtidig',
        'Motoriske funksjoner som aa gaa og staa'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-4-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bruker nekter aa prove aa kle paa seg selv etter et hjerneslag, selv om ergoterapeuten mener hun har potensial. Hva er den beste tilnaermingen?',
      solution: 'Motivere brukeren gjennom smaa delmaal, gi ros og tilpasse klærne slik at det blir enklere',
      multipleChoiceOptions: [
        'Motivere brukeren gjennom smaa delmaal, gi ros og tilpasse klærne slik at det blir enklere',
        'Respektere at brukeren ikke vil, og kle paa henne hver dag',
        'Fortelle brukeren at hun maa klare det selv',
        'Vente til brukeren selv tar initiativ uten aa tilby stotte'
      ],
    }
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_5_5: TextbookChapter = {
  id: 'helseoppvekst-vg1-5-5',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '5.5',
  title: 'Forstehjelp og akutte situasjoner',
  description: 'Laer om grunnleggende forstehjelp, ABCDE-vurdering, hjerte-lunge-redning (HLR) og hvordan du haandterer vanlige akutte situasjoner.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utfore grunnleggende forstehjelp og forklare prinsippene bak livreddende forstehjelp',
    'gjore rede for rutiner og tiltak ved akutte situasjoner i helse- og oppvekstsektoren'
  ],
  content: [
    {
      id: 'hov1-5-5-1',
      type: 'text',
      content: 'Forstehjelp er den hjelpen som gis umiddelbart naar noen blir syke eller skadet, for profesjonell helsehjelp ankommer. God forstehjelp kan vaere forskjellen mellom liv og dod. Som helsefagarbeider vil du vaere blant de forste paa stedet i mange akutte situasjoner, og det er avgjorende at du kan handle raskt og riktig. Den viktigste regelen er aa holde seg rolig, skaffe oversikt og folge en systematisk tilnaerming.'
    },
    {
      id: 'hov1-5-5-2',
      type: 'definition',
      title: 'ABCDE-prinsippet',
      content: 'ABCDE er en systematisk metode for aa vurdere og behandle akutt syke eller skadde pasienter. A = Airway (luftveier) - sjekk at luftveiene er aapne. B = Breathing (pust) - vurder om personen puster normalt. C = Circulation (sirkulasjon) - sjekk puls og se etter alvorlig blodning. D = Disability (bevissthet) - vurder bevissthetsnivaa. E = Exposure (undersokelse) - undersok hele kroppen for skader. Man starter alltid med A og gaar videre til neste bokstav forst naar det foregaaende er ivaretatt.'
    },
    {
      id: 'hov1-5-5-3',
      type: 'example',
      title: 'Hjerte-lunge-redning (HLR) hos voksne',
      content: 'Du finner en person bevisstlos paa gulvet. Forst sjekker du om det er trygt aa naerme seg. Deretter roper du paa personen og rister forsiktig i skuldrene. Hvis personen ikke reagerer, roper du paa hjelp og ringer 113. Legg personen paa ryggen, boi hodet bakover og loft haken for aa aapne luftveiene. Se, lytt og kjen etter pust i inntil 10 sekunder. Hvis personen ikke puster normalt, starter du HLR: 30 brystkompresjoner etterfulgt av 2 innblaaasinger. Trykk midt paa brystkassen, 5-6 cm dypt, i en takt paa 100-120 kompresjoner per minutt. Fortsett til ambulansen kommer eller personen viser livstegn.'
    },
    {
      id: 'hov1-5-5-4',
      type: 'warning',
      title: 'Naar du skal ringe 113',
      content: 'Ring 113 (medisinsk nodtelefon) umiddelbart ved: bevisstloshet, pustevansker, mistanke om hjertestans, alvorlige skader, kramper som varer mer enn 5 minutter, alvorlige allergiske reaksjoner eller alvorlige forbrenninger. Ha klar informasjon om: hva som har skjedd, hvor dere er, hvor mange som er skadet, og tilstanden til den skadde. Ikke legg paa for operatoren sier det er greit.'
    },
    {
      id: 'hov1-5-5-5',
      type: 'text',
      content: 'Stabilt sideleie brukes naar en bevisstlos person puster normalt. Personen legges paa siden slik at luftveiene holdes aapne og eventuelt oppkast renner ut av munnen. Ved ytre blodning legger du trykk paa saaret med en ren bandasje eller klut. Loft den skadde kroppsdelen hvis mulig. Ved forbrenninger kjoler du det forbrendte omraadet med rennende lunkent vann i minst 20 minutter. Ved mistanke om alvorlig allergisk reaksjon (anafylaksi) med pustevansker, hjelp personen med aa bruke sin adrenalinpenn (EpiPen) hvis den er tilgjengelig, og ring 113.'
    },
    {
      id: 'hov1-5-5-6',
      type: 'tip',
      title: 'Ovelse gjor mester',
      content: 'Forstehjelpsferdigheter maa oves jevnlig for aa sitte. Delta paa forstehjelps kurs og ov paa dukker. I en stresset situasjon er det de innlærte automatiske handlingene som redder liv. Husk: aa gjore noe er nesten alltid bedre enn aa gjore ingenting. Selv om du er usikker, kan dine handlinger redde et liv.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-5-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva staar bokstaven A for i ABCDE-prinsippet?',
      solution: 'Airway (luftveier)',
      multipleChoiceOptions: [
        'Airway (luftveier)',
        'Attention (oppmerksomhet)',
        'Allergy (allergi)',
        'Assessment (vurdering)'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket nummer ringer du ved akutt medisinsk nodtilfelle i Norge?',
      solution: '113',
      multipleChoiceOptions: [
        '113',
        '112',
        '110',
        '116'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forholdet mellom brystkompresjoner og innblaaasinger ved HLR paa voksne?',
      solution: '30 kompresjoner og 2 innblaaasinger',
      multipleChoiceOptions: [
        '30 kompresjoner og 2 innblaaasinger',
        '15 kompresjoner og 2 innblaaasinger',
        '30 kompresjoner og 5 innblaaasinger',
        '15 kompresjoner og 1 innblaasing'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Naar skal du legge en person i stabilt sideleie?',
      solution: 'Naar personen er bevisstlos men puster normalt',
      multipleChoiceOptions: [
        'Naar personen er bevisstlos men puster normalt',
        'Naar personen har hjertestans',
        'Naar personen har brukket bein',
        'Naar personen er bevisst men har vondt'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor dypt skal du trykke ved brystkompresjoner paa en voksen?',
      solution: '5-6 centimeter',
      multipleChoiceOptions: [
        '5-6 centimeter',
        '2-3 centimeter',
        '8-10 centimeter',
        '1-2 centimeter'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er det forste du gjor naar du finner en person som ligger bevisstlos paa bakken?',
      solution: 'Sjekke om det er trygt aa naerme seg, deretter sjekke respons ved aa rope og riste',
      multipleChoiceOptions: [
        'Sjekke om det er trygt aa naerme seg, deretter sjekke respons ved aa rope og riste',
        'Starte hjerte-lunge-redning umiddelbart',
        'Ringe 113 med en gang uten aa sjekke personen',
        'Legge personen i stabilt sideleie umiddelbart'
      ],
    },
    {
      id: 'helseoppvekst-vg1-5-5-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En person har faat en alvorlig forbrenning paa underarmen. Hva er riktig forstehjelp?',
      solution: 'Kjole det forbrendte omraadet med rennende lunkent vann i minst 20 minutter',
      multipleChoiceOptions: [
        'Kjole det forbrendte omraadet med rennende lunkent vann i minst 20 minutter',
        'Smor smorr eller olje paa det forbrennte omraadet',
        'Legge is direkte paa forbrenningen',
        'Dekke til forbrenningen med tett plast umiddelbart'
      ],
    }
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_6_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-6-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '6.1',
  title: 'Tverrfaglig samarbeid',
  description: 'Laer om hvordan ulike yrkesgrupper samarbeider i helse- og oppvekstsektoren for aa gi best mulig helhetlig tjeneste til brukerne.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for ulike yrkesgrupper i helse- og oppvekstsektoren og hvordan tverrfaglig samarbeid bidrar til helhetlige tjenester',
    'beskrive betydningen av samarbeid og kommunikasjon mellom ulike tjenester og nivaer i helse- og oppvekstsektoren'
  ],
  content: [
    {
      id: 'hov1-6-1-1',
      type: 'text',
      content: 'Tverrfaglig samarbeid betyr at fagpersoner med ulik utdanning og kompetanse jobber sammen for aa gi brukeren et helhetlig tilbud. I helse- og oppvekstsektoren er det mange ulike yrkesgrupper som bidrar med sin spesialkompetanse. Legen stiller diagnoser og forordner behandling, sykepleieren gir medisinsk oppfolging, helsefagarbeideren bistaar med daglig omsorg, ergoterapeuten vurderer funksjon og tilpasser hjelpemidler, fysioterapeuten jobber med trening og rehabilitering, og sosionomen hjelper med sosiale utfordringer. Godt tverrfaglig samarbeid krever at alle respekterer hverandres kompetanse og kommuniserer effektivt.'
    },
    {
      id: 'hov1-6-1-2',
      type: 'definition',
      title: 'Ansvarsgruppe',
      content: 'En ansvarsgruppe er en tverrfaglig gruppe som opprettas rundt en bruker med sammensatte behov. Gruppen bestaar av fagpersoner fra ulike tjenester som er involvert i brukerens oppfolging, samt brukeren selv og eventuelt paarorende. Ansvarsgruppen mottes jevnlig for aa koordinere tiltak, evaluere fremgang og justere planer. En koordinator har ansvar for aa lede gruppen og sikre at alle bidrar.'
    },
    {
      id: 'hov1-6-1-3',
      type: 'definition',
      title: 'Individuell plan (IP)',
      content: 'En individuell plan er et verktoy for aa koordinere tjenester til brukere med behov for langvarige og koordinerte tjenester. Planen utarbeides i samarbeid med brukeren og beskriver brukerens maal, hvilke tjenester som er involvert, og hvem som har ansvar for hva. Brukere med behov for langvarige tjenester har rett til en individuell plan etter helse- og omsorgstjenesteloven.'
    },
    {
      id: 'hov1-6-1-4',
      type: 'example',
      title: 'Tverrfaglig samarbeid i praksis',
      content: 'Ole er 75 aar og har hatt et hoftebrudd. Etter operasjonen paa sykehuset faar han oppfolging av mange yrkesgrupper: Kirurgen har operert og folger opp det medisinske. Fysioterapeuten lager et treningsprogram for aa gjenvinne gangfunksjon. Ergoterapeuten vurderer hjemmet hans og anbefaler tilpasninger som handtak og forhoyning paa toalettet. Helsefagarbeideren hjelper Ole med daglig stell og omsorg paa rehabiliteringsavdelingen. Sosionomen informerer om rettigheter og hjelper med soknad om hjelpemidler. Alle deler informasjon i tverrfaglige moter for aa sikre at Ole faar best mulig rehabilitering.'
    },
    {
      id: 'hov1-6-1-5',
      type: 'tip',
      title: 'Kjennetegn paa godt tverrfaglig samarbeid',
      content: 'Godt tverrfaglig samarbeid kjennetegnes av: felles maal som er definert sammen med brukeren, gjensidig respekt for hverandres kompetanse, tydelig rolle- og ansvarsfordeling, god og regelmessig kommunikasjon, vilje til aa dele kunnskap, og evne til aa se utover eget fagfelt. Det er ogsaa viktig med en felles dokumentasjonsplattform slik at alle har tilgang til oppdatert informasjon.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-6-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr tverrfaglig samarbeid?',
      solution: 'At fagpersoner med ulik utdanning og kompetanse jobber sammen rundt en bruker',
      multipleChoiceOptions: [
        'At fagpersoner med ulik utdanning og kompetanse jobber sammen rundt en bruker',
        'At alle ansatte har samme utdanning',
        'At brukeren maa koordinere sine egne tjenester',
        'At bare legen bestemmer hvilken behandling brukeren faar'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en ansvarsgruppe?',
      solution: 'En tverrfaglig gruppe som koordinerer tjenester rundt en bruker med sammensatte behov',
      multipleChoiceOptions: [
        'En tverrfaglig gruppe som koordinerer tjenester rundt en bruker med sammensatte behov',
        'En gruppe pasienter som deler samme diagnose',
        'En gruppe ledere som bestemmer over avdelingen',
        'En gruppe studenter som oves paa samarbeid'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken yrkesgruppe vurderer funksjon i dagliglivet og tilpasser hjelpemidler?',
      solution: 'Ergoterapeut',
      multipleChoiceOptions: [
        'Ergoterapeut',
        'Fysioterapeut',
        'Sykepleier',
        'Sosionom'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er formaaleet med en individuell plan (IP)?',
      solution: 'Aa koordinere tjenester til brukere med behov for langvarige og sammensatte tjenester',
      multipleChoiceOptions: [
        'Aa koordinere tjenester til brukere med behov for langvarige og sammensatte tjenester',
        'Aa gi legen full kontroll over behandlingen',
        'Aa spare penger for kommunen',
        'Aa begrense antall tjenester brukeren mottar'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem har rett til en individuell plan?',
      solution: 'Brukere med behov for langvarige og koordinerte helse- og omsorgstjenester',
      multipleChoiceOptions: [
        'Brukere med behov for langvarige og koordinerte helse- og omsorgstjenester',
        'Kun brukere over 67 aar',
        'Alle som har vaert paa sykehuset',
        'Kun brukere med psykiske lidelser'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den viktigste forutsetningen for vellykket tverrfaglig samarbeid?',
      solution: 'Gjensidig respekt for hverandres kompetanse og tydelig kommunikasjon',
      multipleChoiceOptions: [
        'Gjensidig respekt for hverandres kompetanse og tydelig kommunikasjon',
        'At en yrkesgruppe tar alle beslutninger',
        'At brukeren ikke deltar i planleggingen',
        'At alle fagpersoner gjor de samme oppgavene'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-1-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bruker mottar tjenester fra fastlege, psykolog, NAV og kommunal hjemmetjeneste. Hvem har ansvaret for aa koordinere disse tjenestene?',
      solution: 'En oppnevnt koordinator som leder ansvarsgruppen og folger opp individuell plan',
      multipleChoiceOptions: [
        'En oppnevnt koordinator som leder ansvarsgruppen og folger opp individuell plan',
        'Fastlegen har alltid koordineringsansvaret',
        'Brukeren maa selv koordinere mellom tjenestene',
        'NAV har alltid overordnet ansvar for koordinering'
      ],
    }
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_6_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-6-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '6.2',
  title: 'Kulturforstaelse og mangfold',
  description: 'Laer om kulturell kompetanse, kommunikasjon paa tvers av kulturer og hvordan fremme inkludering og motvirke diskriminering i helse- og oppvekstsektoren.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for betydningen av kulturforstaelse og mangfold i yrkesutovelsen i helse- og oppvekstsektoren',
    'reflektere over egne holdninger og fordomsfulle tankemonstre og forklare hvordan disse kan paavirke yrkesutovelsen'
  ],
  content: [
    {
      id: 'hov1-6-2-1',
      type: 'text',
      content: 'Norge er et flerkulturelt samfunn, og i helse- og oppvekstsektoren moter du mennesker med ulik kulturell bakgrunn. Kultur paavirker hvordan mennesker forstaar helse og sykdom, hvordan de uttrykker smerte, hvilke forventninger de har til helsetjenester, og hvordan de forholder seg til familieroller og autoritet. Som helsefagarbeider er det viktig aa ha kulturell kompetanse - det vil si kunnskap, holdninger og ferdigheter som gjor deg i stand til aa gi god omsorg til mennesker uavhengig av deres kulturelle bakgrunn.'
    },
    {
      id: 'hov1-6-2-2',
      type: 'definition',
      title: 'Kulturell kompetanse',
      content: 'Kulturell kompetanse er evnen til aa forstaa, kommunisere med og effektivt samhandle med mennesker paa tvers av kulturer. Det innebærer bevissthet om egne kulturelle verdier og fordommer, kunnskap om andre kulturer, og ferdigheter i tverrkulturell kommunikasjon. Kulturell kompetanse er ikke noe man oppnaar en gang for alle, men en kontinuerlig laeringsprosess.'
    },
    {
      id: 'hov1-6-2-3',
      type: 'definition',
      title: 'Etnosentrisme og kulturrelativisme',
      content: 'Etnosentrisme betyr aa vurdere andre kulturer ut fra sin egen kultur som maalestokk, ofte med den oppfatningen at ens egen kultur er overlegen. Kulturrelativisme betyr aa forsoeke aa forstaa en kultur paa dens egne premisser. I helse- og omsorgsarbeid er det viktig aa vaere bevisst paa etnosentriske tendenser og strekke seg mot en kulturrelativistisk tilnaerming, samtidig som man ivaretar grunnleggende menneskerettigheter.'
    },
    {
      id: 'hov1-6-2-4',
      type: 'example',
      title: 'Kulturelle hensyn i praksis',
      content: 'Fatima er en eldre kvinne fra Somalia som er innlagt paa sykehjem. Hun onsker at det kun er kvinnelige ansatte som hjelper henne med stell og paakleding. Under ramadan onsker hun aa faste, selv om personalet er bekymret for naeringsinntak. Gjennom dialog finner man losninger: kvinnelig personale prioriteres ved stell, og det tilrettelegges for maaltider for og etter solnedgang under ramadan, i samraad med lege. Dette er et eksempel paa hvordan man kan ivareta kulturelle behov innenfor rammene av forsvarlig helsehjelp.'
    },
    {
      id: 'hov1-6-2-5',
      type: 'text',
      content: 'Fordommer er forhaaandsdommer basert paa gruppemedlemskap, ikke paa individuelle egenskaper. Diskriminering er handlinger som medforer at personer eller grupper behandles ulikt paa grunn av kjennetegn som etnisitet, religion, kjonn eller funksjonsevne. Bade direkte diskriminering (bevisst forskjellsbehandling) og indirekte diskriminering (tilsynelatende noeytrale regler som rammer skjevt) er forbudt etter norsk lov. Som helsefagarbeider har du et ansvar for aa motvirke fordommer og diskriminering, baade i egne holdninger og paa arbeidsplassen.'
    },
    {
      id: 'hov1-6-2-6',
      type: 'tip',
      title: 'Tips for god tverrkulturell kommunikasjon',
      content: 'Vaer nysgjerrig og spor brukeren om sine preferanser og behov. Unngaa aa anta at alle fra samme kultur er like. Bruk profesjonell tolk ved sprakbarrierer - aldri barn som tolker. Vaer bevisst paa at kroppssprak kan ha ulik betydning i ulike kulturer. Vis respekt for ulike tradisjoner rundt mat, religion og familiestruktur. Husk at din egen kultur ogsaa paavirker hvordan du tenker og handler.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-6-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr kulturell kompetanse?',
      solution: 'Evnen til aa forstaa og samhandle effektivt med mennesker fra ulike kulturer',
      multipleChoiceOptions: [
        'Evnen til aa forstaa og samhandle effektivt med mennesker fra ulike kulturer',
        'Aa kunne snakke mange spraak',
        'Aa kjenne til alle verdens kulturer',
        'Aa behandle alle helt likt uansett bakgrunn'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er etnosentrisme?',
      solution: 'Aa vurdere andre kulturer med sin egen kultur som maalestokk',
      multipleChoiceOptions: [
        'Aa vurdere andre kulturer med sin egen kultur som maalestokk',
        'Aa vaere interessert i andre kulturer',
        'Aa forstaa en kultur paa dens egne premisser',
        'Aa reise mye og oppleve ulike kulturer'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor skal man bruke profesjonell tolk i stedet for familiemedlemmer?',
      solution: 'Fordi profesjonelle tolker sikrer korrekt oversettelse og ivaretar taushetsplikt',
      multipleChoiceOptions: [
        'Fordi profesjonelle tolker sikrer korrekt oversettelse og ivaretar taushetsplikt',
        'Fordi familiemedlemmer alltid nekter aa tolke',
        'Fordi det er billigere med profesjonell tolk',
        'Fordi familiemedlemmer ikke kan spraeket godt nok'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom fordommer og diskriminering?',
      solution: 'Fordommer er holdninger og tanker, mens diskriminering er handlinger som forskjellsbehandler',
      multipleChoiceOptions: [
        'Fordommer er holdninger og tanker, mens diskriminering er handlinger som forskjellsbehandler',
        'Det er ingen forskjell, begrepene betyr det samme',
        'Fordommer er ulovlig mens diskriminering er lovlig',
        'Diskriminering er tanker mens fordommer er handlinger'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er indirekte diskriminering?',
      solution: 'Tilsynelatende noeytrale regler eller praksiser som i praksis rammer noen grupper urettferdig',
      multipleChoiceOptions: [
        'Tilsynelatende noeytrale regler eller praksiser som i praksis rammer noen grupper urettferdig',
        'Naar noen snakker negativt om en gruppe bak deres rygg',
        'Naar man bevisst nekter noen en tjeneste paa grunn av hudfarge',
        'Naar man ikke legger merke til forskjeller mellom kulturer'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bruker fra en annen kultur onsker en behandlingsform som ikke er medisinsk anerkjent i Norge. Hva er den beste tilnaermingen?',
      solution: 'Vise respekt for brukerens onsker, informere om tilgjengelig behandling og finne losninger i dialog',
      multipleChoiceOptions: [
        'Vise respekt for brukerens onsker, informere om tilgjengelig behandling og finne losninger i dialog',
        'Avvise onsket umiddelbart fordi det ikke er vitenskapelig bevist',
        'La brukeren gjore som de vil uten aa gi informasjon',
        'Kontakte politiet fordi dette kan vaere ulovlig'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-2-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er det viktig aa unngaa stereotypisering selv om man har kunnskap om ulike kulturer?',
      solution: 'Fordi det er stor variasjon innad i alle kulturer, og hver person maa moetes som et individ',
      multipleChoiceOptions: [
        'Fordi det er stor variasjon innad i alle kulturer, og hver person maa moetes som et individ',
        'Fordi kulturkunnskap alltid er feil',
        'Fordi det er ulovlig aa ha kunnskap om kulturer',
        'Fordi alle kulturer egentlig er helt like'
      ],
    }
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_6_3: TextbookChapter = {
  id: 'helseoppvekst-vg1-6-3',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '6.3',
  title: 'Velferdsteknologi og digitale verktoy',
  description: 'Laer om ulike typer velferdsteknologi, digitale losninger i helse- og omsorgstjenesten og etiske problemstillinger knyttet til teknologibruk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for bruk av velferdsteknologi og digitale verktoy i helse- og oppvekstsektoren',
    'reflektere over etiske problemstillinger knyttet til bruk av teknologi i helse- og omsorgsarbeid'
  ],
  content: [
    {
      id: 'hov1-6-3-1',
      type: 'text',
      content: 'Velferdsteknologi er teknologiske losninger som skal bidra til okt trygghet, sikkerhet, sosial deltakelse, mobilitet og fysisk og kulturell aktivitet. Teknologien skal styrke den enkeltes evne til aa klare seg selv i hverdagen til tross for sykdom eller funksjonsnedsettelse. Med en aldrende befolkning og okt press paa helse- og omsorgstjenestene er velferdsteknologi et viktig satsingsomraade i Norge. Maalet er at teknologien skal vaere et supplement til, ikke en erstatning for, menneskelig omsorg.'
    },
    {
      id: 'hov1-6-3-2',
      type: 'definition',
      title: 'Typer velferdsteknologi',
      content: 'Velferdsteknologi deles gjerne inn i fire hovedkategorier: 1) Trygghets- og sikkerhetsteknologi, som trygghetsalarmer, fallsensorer og GPS-sporing. 2) Kompensasjons- og velvaereteknologi, som elektroniske medisindispensere, robotstovsuger og smarthusteknologi. 3) Teknologi for sosial kontakt, som videokommunikasjon og sosiale medier tilpasset eldre. 4) Teknologi for behandling og pleie, som digitalt tilsyn og elektronisk pasientjournal.'
    },
    {
      id: 'hov1-6-3-3',
      type: 'example',
      title: 'Velferdsteknologi i bruk',
      content: 'Gunnar er 84 aar og bor alene. Han har begynnende demens og har gaatt seg bort flere ganger. Kommunen tilbyr folgende velferdsteknologiske losninger: GPS-klokke som gjor at hjemmetjenesten kan lokalisere ham hvis han gaar seg bort. Elektronisk medisindispenser som varsler naar det er tid for aa ta medisiner og som gir beskjed til hjemmetjenesten hvis medisinen ikke tas. Digitalt natt-tilsyn med sensor som registrerer om Gunnar staar opp om natten og varsler ved uvanlige monstre. Bildekommunikasjon paa nettbrett slik at familien kan ha videosamtaler med ham.'
    },
    {
      id: 'hov1-6-3-4',
      type: 'warning',
      title: 'Etiske utfordringer ved velferdsteknologi',
      content: 'Bruk av velferdsteknologi reiser flere etiske sporsmaal: Personvern - GPS-sporing og digitalt tilsyn innebærer overvaakning. Samtykke - kan personer med demens gi informert samtykke? Verdighet - erstatter teknologien menneskelig kontakt? Ulikhet - har alle lik tilgang til teknologien? Digital kompetanse - kan brukerne faktisk bruke teknologien? Det er viktig at teknologien innfores med respekt for brukerens autonomi og at det alltid vurderes individuelt om teknologien er til brukerens beste.'
    },
    {
      id: 'hov1-6-3-5',
      type: 'text',
      content: 'Digitale verktoy som elektronisk pasientjournal (EPJ), mobile arbeidsverktoy og digitale meldingssystemer er sentrale i dagens helse- og omsorgstjeneste. Helsefagarbeidere bruker EPJ daglig for aa dokumentere observasjoner, tiltak og avvik. Gjennom digitale meldinger kan fastlegen, sykehuset og hjemmetjenesten kommunisere effektivt om pasientens behandling. Det er viktig aa folge regler for informasjonssikkerhet og personvern naar du bruker digitale verktoy - logg alltid ut, del aldri passord, og registrer bare nodvendig informasjon.'
    },
    {
      id: 'hov1-6-3-6',
      type: 'tip',
      title: 'Husk den menneskelige faktoren',
      content: 'Teknologi er et verktoy, ikke et maal i seg selv. Brukere som faar velferdsteknologi trenger fortsatt menneskelig kontakt, varme og omsorg. Noen brukere kan oppleve teknologien som fremmedgjorende eller skummel. Ta deg tid til aa forklare hvordan teknologien fungerer, og vaer taalmodig. Sjekk jevnlig at teknologien virker som den skal, og at brukeren er komfortabel med den.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-6-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedmaalet med velferdsteknologi?',
      solution: 'Aa styrke den enkeltes evne til aa klare seg selv i hverdagen',
      multipleChoiceOptions: [
        'Aa styrke den enkeltes evne til aa klare seg selv i hverdagen',
        'Aa erstatte helsepersonell med maskiner',
        'Aa spare mest mulig penger for kommunen',
        'Aa overvake alle eldre til enhver tid'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en elektronisk medisindispenser?',
      solution: 'En enhet som doserer medisiner til riktig tid og varsler hvis medisinen ikke tas',
      multipleChoiceOptions: [
        'En enhet som doserer medisiner til riktig tid og varsler hvis medisinen ikke tas',
        'Et dataprogram for aa bestille medisiner paa nett',
        'En robot som gir injeksjoner',
        'Et skjema for aa registrere medisiner i journalen'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type velferdsteknologi tilhorer GPS-sporing?',
      solution: 'Trygghets- og sikkerhetsteknologi',
      multipleChoiceOptions: [
        'Trygghets- og sikkerhetsteknologi',
        'Kompensasjons- og velvaereteknologi',
        'Teknologi for sosial kontakt',
        'Teknologi for behandling og pleie'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er EPJ?',
      solution: 'Elektronisk pasientjournal - et digitalt system for dokumentasjon av helseopplysninger',
      multipleChoiceOptions: [
        'Elektronisk pasientjournal - et digitalt system for dokumentasjon av helseopplysninger',
        'Europeisk pasientjournalstandard',
        'En type medisinsk utstyr for blodtrykksmaaling',
        'Et nettsted der pasienter kan lese om sykdommer'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et viktig prinsipp naar man innforer velferdsteknologi?',
      solution: 'Teknologien skal vaere et supplement til menneskelig omsorg, ikke en erstatning',
      multipleChoiceOptions: [
        'Teknologien skal vaere et supplement til menneskelig omsorg, ikke en erstatning',
        'Teknologien skal alltid innfores selv om brukeren ikke onsker det',
        'Teknologien skal erstatte besok fra hjemmetjenesten',
        'Alle brukere skal ha samme teknologi uavhengig av behov'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En person med moderat demens vegrer seg mot GPS-klokke, men paarorende og lege mener det er nodvendig for sikkerheten. Hva er riktig tilnaerming?',
      solution: 'Vurdere samtykkekompetanse, prove aa motivere brukeren, og fatte vedtak om tvang kun som siste utvei etter lovens vilkaar',
      multipleChoiceOptions: [
        'Vurdere samtykkekompetanse, prove aa motivere brukeren, og fatte vedtak om tvang kun som siste utvei etter lovens vilkaar',
        'Respektere brukerens nei uansett, selv om sikkerheten er truet',
        'Tvinge paa brukeren GPS-klokken uten videre vurdering',
        'La paarorende bestemme alene uten aa involvere brukeren'
      ],
    },
    {
      id: 'helseoppvekst-vg1-6-3-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken etisk utfordring er mest sentral ved bruk av digitalt natt-tilsyn med kamera?',
      solution: 'Balansen mellom brukerens sikkerhet og retten til personvern og privatliv',
      multipleChoiceOptions: [
        'Balansen mellom brukerens sikkerhet og retten til personvern og privatliv',
        'At teknologien er for dyr for kommunen',
        'At personalet maa laere seg ny teknologi',
        'At kameraet kan gaa i stykker'
      ],
    }
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_7_1: TextbookChapter = {
  id: 'helseoppvekst-vg1-7-1',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '7.1',
  title: 'Praksis i arbeidslivet',
  description: 'Laer om hva som forventes av deg i praksis, profesjonell atferd, samarbeid med veileder og hvordan du kan faa mest mulig utbytte av praksisperioden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge, gjennomfore og reflektere over praksis i helse- og oppvekstsektoren',
    'vise profesjonalitet og etisk bevissthet i moete med brukere, pasienter og samarbeidspartnere'
  ],
  content: [
    {
      id: 'hov1-7-1-1',
      type: 'text',
      content: 'Praksis er en sentral del av utdanningen i helse- og oppvekstfag. Det er i praksis du faar muligheten til aa anvende det du har laert paa skolen i virkelige situasjoner. Praksisperioden gir deg verdifull erfaring med aa jobbe med mennesker, samarbeide med kolleger og forstaa hvordan helse- og omsorgstjenestene fungerer i hverdagen. Mange opplever praksis som den mest laererike delen av utdanningen, men det krever ogsaa at du er godt forberedt og tar ansvar for egen laering.'
    },
    {
      id: 'hov1-7-1-2',
      type: 'definition',
      title: 'Profesjonell atferd i praksis',
      content: 'Profesjonell atferd innebærer aa opptre paa en maate som er i traad med yrkets verdier og normer. I praksis betyr dette blant annet: aa vaere punktlig og palitelig, aa folge arbeidsplassens regler og rutiner, aa overholde taushetsplikt, aa vaere respektfull overfor brukere og kolleger, aa ta imot veiledning og tilbakemeldinger, aa be om hjelp naar du er usikker, og aa ha god hygiene og passende paakleding.'
    },
    {
      id: 'hov1-7-1-3',
      type: 'example',
      title: 'Forventninger til deg som praksiselev',
      content: 'Lisa er i praksis paa et sykehjem. Forste dag moter hun veilederen sin, Mette. De gaar gjennom praksisplanen sammen og setter laeremaal for perioden. Mette forklarer: \"Du forventes aa mote presist til kl. 07.00, ifort rent arbeidsantrekk. Du vil folge meg de forste dagene, og etter hvert faa mer selvstendige oppgaver. Still gjerne sporsmaal - det er slik du laerer. Skriv logg etter hver dag, og vi har veiledningssamtale hver uke der vi snakker om hvordan det gaar og hva du kan jobbe med.\"'
    },
    {
      id: 'hov1-7-1-4',
      type: 'tip',
      title: 'Refleksjon - nokkkelen til laering i praksis',
      content: 'Refleksjon betyr aa tenke grundig gjennom erfaringene dine for aa laere av dem. Etter en praksisdag kan du sporre deg selv: Hva gikk bra i dag? Hva var utfordrende? Hva ville jeg gjort annerledes? Hva laerte jeg? Skriv ned refleksjonene dine i en praksislogg. Diskuter erfaringene med veilederen din. Det er gjennom refleksjon at praktiske erfaringer blir til varig laering.'
    },
    {
      id: 'hov1-7-1-5',
      type: 'text',
      content: 'Samarbeid med veileder er avgjorende for en god praksisperiode. Veilederen er din viktigste stoettespiller og ressurs paa arbeidsplassen. Vaer aapen om hva du kan og ikke kan, og hva du onsker aa laere. Hvis du opplever noe som er vanskelig eller ubehagelig, snakk med veilederen din om det. Det er ogsaa viktig aa samarbeide godt med ovrige kolleger og aa vaere et positivt bidrag til arbeidsmiljoet. Husk at du representerer bade skolen og deg selv.'
    },
    {
      id: 'hov1-7-1-6',
      type: 'warning',
      title: 'Taushetsplikt i praksis',
      content: 'Taushetsplikten gjelder ogsaa for praksiselever. Du maa aldri dele informasjon om brukere med venner, familie eller paa sosiale medier. Ikke ta bilder paa arbeidsplassen. Hvis du onsker aa bruke erfaringer i skoleoppgaver, maa du anonymisere all informasjon slik at enkeltpersoner ikke kan gjenkjennes. Brudd paa taushetsplikt kan faa alvorlige konsekvenser, inkludert at du ikke faar fortsette i praksis.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-7-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en av de viktigste forventningene til en praksiselev?',
      solution: 'Aa vaere punktlig, folge regler og vise respekt overfor brukere og kolleger',
      multipleChoiceOptions: [
        'Aa vaere punktlig, folge regler og vise respekt overfor brukere og kolleger',
        'Aa kunne gjore alle oppgaver selvstendig fra forste dag',
        'Aa aldri stille sporsmaal til veilederen',
        'Aa jobbe overtid hver dag for aa vise engasjement'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er formaaleet med aa skrive praksislogg?',
      solution: 'Aa reflektere over erfaringer for aa laere mest mulig av praksisperioden',
      multipleChoiceOptions: [
        'Aa reflektere over erfaringer for aa laere mest mulig av praksisperioden',
        'Aa dokumentere alt brukerne gjor i lopet av dagen',
        'Aa skrive rapport til skolen om arbeidsplassens rutiner',
        'Aa klage paa ting som ikke fungerer paa arbeidsplassen'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva bor du gjore hvis du er usikker paa hvordan en oppgave skal utfores i praksis?',
      solution: 'Sporre veilederen eller en kollega for hjelp for du utforer oppgaven',
      multipleChoiceOptions: [
        'Sporre veilederen eller en kollega for hjelp for du utforer oppgaven',
        'Prove paa egenhaaand og haape at det gaar bra',
        'La vaere aa gjore oppgaven og si ingenting',
        'Soke opp svaret paa telefonen mens du er med brukeren'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Gjelder taushetsplikten for praksiselever?',
      solution: 'Ja, taushetsplikten gjelder fullt ut for praksiselever paa samme maate som for ansatte',
      multipleChoiceOptions: [
        'Ja, taushetsplikten gjelder fullt ut for praksiselever paa samme maate som for ansatte',
        'Nei, den gjelder bare for fast ansatte',
        'Bare delvis - praksiselever kan dele informasjon med laereren sin',
        'Ja, men bare for alvorlige diagnoser'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er veileders viktigste rolle overfor praksiseleven?',
      solution: 'Aa vaere stoettespiller, gi veiledning og hjelpe praksiseleven med aa naa laeremaalene',
      multipleChoiceOptions: [
        'Aa vaere stoettespiller, gi veiledning og hjelpe praksiseleven med aa naa laeremaalene',
        'Aa passe paa at praksiseleven gjor minst mulig feil',
        'Aa gi praksiseleven flest mulig oppgaver aa gjore alene',
        'Aa rapportere alt praksiseleven gjor feil til skolen'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Du observerer i praksis at en ansatt behandler en bruker paa en maate du mener er uverdig. Hva bor du gjore?',
      solution: 'Ta opp bekymringen med veilederen din eller kontaktlaereren paa skolen',
      multipleChoiceOptions: [
        'Ta opp bekymringen med veilederen din eller kontaktlaereren paa skolen',
        'Legge ut om hendelsen paa sosiale medier',
        'Ignorere det fordi du bare er praksiselev',
        'Konfrontere den ansatte foran brukeren'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-1-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er den beste maaten aa bruke praksiserfaringer i en skoleoppgave?',
      solution: 'Anonymisere all informasjon slik at verken brukere eller arbeidssted kan gjenkjennes',
      multipleChoiceOptions: [
        'Anonymisere all informasjon slik at verken brukere eller arbeidssted kan gjenkjennes',
        'Beskrive situasjonen noeyaktig med alle detaljer for aa faa best karakter',
        'Bruke kun brukerens fornavn for aa gjore det mindre gjenkjennelig',
        'Unngaa aa bruke praksiserfaringer i skoleoppgaver i det hele tatt'
      ],
    }
  ],
};

export const CHAPTER_HELSEOPPVEKST_VG1_7_2: TextbookChapter = {
  id: 'helseoppvekst-vg1-7-2',
  courseId: 'helseoppvekst-vg1',
  chapterNumber: '7.2',
  title: 'Videre utdanning og karrieremuligheter',
  description: 'Faa oversikt over utdanningsveier etter VG1 helse- og oppvekstfag, muligheter for fagbrev, videre studier og karrieremuligheter i helse- og oppvekstsektoren.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive ulike utdanningsprogram og yrkesmuligheter innen helse- og oppvekstsektoren',
    'reflektere over egne interesser og styrker i lys av mulige utdannings- og karriereveier'
  ],
  content: [
    {
      id: 'hov1-7-2-1',
      type: 'text',
      content: 'Etter VG1 helse- og oppvekstfag aapner det seg mange muligheter for videre utdanning og karriere. Det programomraadet du velger paa VG2 legger grunnlaget for hvilken retning du gaar. De vanligste VG2-valgene er helsearbeiderfag, barne- og ungdomsarbeiderfag, og ambulansefag. I tillegg finnes det muligheter innen fotterapi, ortopediteknikk og andre spesialomraader. Det er viktig aa tenke gjennom hva du er interessert i og hva du trives med, slik at du velger en retning som passer deg.'
    },
    {
      id: 'hov1-7-2-2',
      type: 'definition',
      title: 'Fagbrev og laerlingordningen',
      content: 'Etter VG2 kan du soeke laereplass i en bedrift og jobbe som laerling i to aar. Som laerling faar du opplaering i faget gjennom praktisk arbeid under veiledning, samtidig som du faar lonn. Etter to aar som laerling gaar du opp til fagprove, og bestaar du denne faar du fagbrev. Fagbrevet er et bevis paa at du har yrkeskompetanse. For helsefagarbeidere gir fagbrevet rett til autorisasjon som helsepersonell.'
    },
    {
      id: 'hov1-7-2-3',
      type: 'definition',
      title: 'Paabygning til generell studiekompetanse',
      content: 'Hvis du onsker aa studere videre paa hooyskole eller universitet, kan du ta paabygning til generell studiekompetanse (VG3 paabygning) etter VG2. Dette gir deg muligheten til aa soeke paa hooyere utdanning som sykepleier, vernepleier, barnehagelærer, sosionom, ergoterapeut eller fysioterapeut. Du kan ogsaa ta paabygning etter fullfort fagbrev.'
    },
    {
      id: 'hov1-7-2-4',
      type: 'example',
      title: 'Ulike karriereveier etter VG1',
      content: 'Maria valgte helsearbeiderfag paa VG2, tok laerlingplass paa et sykehjem og fikk fagbrev som helsefagarbeider. Etter noen aar i jobb tok hun paabygning og studerte til sykepleier. Ahmed valgte barne- og ungdomsarbeiderfag, ble laerling i en barnehage og fikk fagbrev. Han jobber naa som barne- og ungdomsarbeider i SFO. Sara valgte ambulansefag paa VG2 og tok deretter fagbrev som ambulansearbeider. Alle tre startet paa VG1 helse- og oppvekstfag, men endte med svært forskjellige karrierer.'
    },
    {
      id: 'hov1-7-2-5',
      type: 'text',
      content: 'Helse- og oppvekstsektoren er Norges storste arbeidssektor og behovet for kompetent arbeidskraft er stort og voksende. Spesielt er det behov for helsefagarbeidere, sykepleiere og barne- og ungdomsarbeidere. Med fagbrev og erfaring har du gode muligheter for fast jobb. Livslang laering er viktig i denne sektoren - det kommer stadig ny kunnskap, nye metoder og nye teknologiske losninger. Mange arbeidsgivere tilbyr videreutdanning og kurs for sine ansatte. Du kan ogsaa spesialisere deg innen omraader som demens, psykisk helse, rehabilitering eller palliativ omsorg.'
    },
    {
      id: 'hov1-7-2-6',
      type: 'tip',
      title: 'Tips for aa velge riktig retning',
      content: 'Tenk gjennom hva du likte best i praksisperiodene - var det arbeid med eldre, barn, eller akutte situasjoner? Snakk med fagpersoner i ulike yrker og spor om hverdagen deres. Delta paa aapne dager paa hoyskoler og utdanningsinstitusjoner. Husk at du ikke trenger aa bestemme alt naa - mange bytter retning underveis, og erfaringen du faar er verdifull uansett. Det viktigste er at du velger noe du er motivert for.'
    }
  ],
  exercises: [
    {
      id: 'helseoppvekst-vg1-7-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er de vanligste VG2-valgene etter VG1 helse- og oppvekstfag?',
      solution: 'Helsearbeiderfag, barne- og ungdomsarbeiderfag og ambulansefag',
      multipleChoiceOptions: [
        'Helsearbeiderfag, barne- og ungdomsarbeiderfag og ambulansefag',
        'Sykepleie, medisin og psykologi',
        'Kokk, reiseliv og frisor',
        'Elektro, bygg og mekaniker'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et fagbrev?',
      solution: 'Et bevis paa at du har yrkeskompetanse etter fullfort opplaering og bestaaatt fagprove',
      multipleChoiceOptions: [
        'Et bevis paa at du har yrkeskompetanse etter fullfort opplaering og bestaaatt fagprove',
        'Et brev du sender til arbeidsgiver for aa soeke jobb',
        'Et vitnemaal fra videregaaende skole',
        'Et kursbevis fra et helseforetakskurs'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor lang er laerlingtiden for aa faa fagbrev som helsefagarbeider?',
      solution: 'To aar',
      multipleChoiceOptions: [
        'To aar',
        'Ett aar',
        'Tre aar',
        'Seks maaneder'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva maa du gjore for aa kunne studere sykepleie etter yrkesfaglig utdanning?',
      solution: 'Ta paabygning til generell studiekompetanse',
      multipleChoiceOptions: [
        'Ta paabygning til generell studiekompetanse',
        'Du kan soeke direkte med fagbrev',
        'Ta opp alle fag fra studiespesialisering',
        'Det er ikke mulig med yrkesfaglig bakgrunn'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gir fagbrevet i helsefagarbeider rett til?',
      solution: 'Autorisasjon som helsepersonell',
      multipleChoiceOptions: [
        'Autorisasjon som helsepersonell',
        'Rett til aa jobbe som sykepleier',
        'Automatisk opptak paa hooyskole',
        'Rett til aa skrive ut medisiner'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvorfor er livslang laering spesielt viktig i helse- og oppvekstsektoren?',
      solution: 'Fordi det stadig kommer ny kunnskap, nye metoder og ny teknologi som paavirker yrkesutovelsen',
      multipleChoiceOptions: [
        'Fordi det stadig kommer ny kunnskap, nye metoder og ny teknologi som paavirker yrkesutovelsen',
        'Fordi arbeidsgivere krever at du tar ny utdanning hvert femte aar',
        'Fordi fagbrevet maa fornyes jevnlig',
        'Fordi lonn oker automatisk med antall kurs'
      ],
    },
    {
      id: 'helseoppvekst-vg1-7-2-ex-7',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En elev liker baade arbeid med eldre og barn, men er usikker paa hva hun skal velge paa VG2. Hva er det beste raadet?',
      solution: 'Bruke praksiserfaringer, snakke med fagpersoner i begge felt og velge det hun er mest motivert for',
      multipleChoiceOptions: [
        'Bruke praksiserfaringer, snakke med fagpersoner i begge felt og velge det hun er mest motivert for',
        'Velge det alternativet som har hooyest lonn',
        'La foreldrene bestemme hva som er best',
        'Velge noe helt annet siden hun er usikker'
      ],
    }
  ],
};


// Eksporter alle kapitler som et objekt
export const HELSEOPPVEKST_VG1_CHAPTERS: Record<string, TextbookChapter> = {
  'helseoppvekst-vg1-1-1': CHAPTER_HELSEOPPVEKST_VG1_1_1,
  'helseoppvekst-vg1-1-2': CHAPTER_HELSEOPPVEKST_VG1_1_2,
  'helseoppvekst-vg1-1-3': CHAPTER_HELSEOPPVEKST_VG1_1_3,
  'helseoppvekst-vg1-1-4': CHAPTER_HELSEOPPVEKST_VG1_1_4,
  'helseoppvekst-vg1-2-1': CHAPTER_HELSEOPPVEKST_VG1_2_1,
  'helseoppvekst-vg1-2-2': CHAPTER_HELSEOPPVEKST_VG1_2_2,
  'helseoppvekst-vg1-2-3': CHAPTER_HELSEOPPVEKST_VG1_2_3,
  'helseoppvekst-vg1-2-4': CHAPTER_HELSEOPPVEKST_VG1_2_4,
  'helseoppvekst-vg1-2-5': CHAPTER_HELSEOPPVEKST_VG1_2_5,
  'helseoppvekst-vg1-3-1': CHAPTER_HELSEOPPVEKST_VG1_3_1,
  'helseoppvekst-vg1-3-2': CHAPTER_HELSEOPPVEKST_VG1_3_2,
  'helseoppvekst-vg1-3-3': CHAPTER_HELSEOPPVEKST_VG1_3_3,
  'helseoppvekst-vg1-3-4': CHAPTER_HELSEOPPVEKST_VG1_3_4,
  'helseoppvekst-vg1-4-1': CHAPTER_HELSEOPPVEKST_VG1_4_1,
  'helseoppvekst-vg1-4-2': CHAPTER_HELSEOPPVEKST_VG1_4_2,
  'helseoppvekst-vg1-4-3': CHAPTER_HELSEOPPVEKST_VG1_4_3,
  'helseoppvekst-vg1-4-4': CHAPTER_HELSEOPPVEKST_VG1_4_4,
  'helseoppvekst-vg1-4-5': CHAPTER_HELSEOPPVEKST_VG1_4_5,
  'helseoppvekst-vg1-5-1': CHAPTER_HELSEOPPVEKST_VG1_5_1,
  'helseoppvekst-vg1-5-2': CHAPTER_HELSEOPPVEKST_VG1_5_2,
  'helseoppvekst-vg1-5-3': CHAPTER_HELSEOPPVEKST_VG1_5_3,
  'helseoppvekst-vg1-5-4': CHAPTER_HELSEOPPVEKST_VG1_5_4,
  'helseoppvekst-vg1-5-5': CHAPTER_HELSEOPPVEKST_VG1_5_5,
  'helseoppvekst-vg1-6-1': CHAPTER_HELSEOPPVEKST_VG1_6_1,
  'helseoppvekst-vg1-6-2': CHAPTER_HELSEOPPVEKST_VG1_6_2,
  'helseoppvekst-vg1-6-3': CHAPTER_HELSEOPPVEKST_VG1_6_3,
  'helseoppvekst-vg1-7-1': CHAPTER_HELSEOPPVEKST_VG1_7_1,
  'helseoppvekst-vg1-7-2': CHAPTER_HELSEOPPVEKST_VG1_7_2,
};

/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3) - Del 4: Politisk kommunikasjon og medier
 *
 * Kapittel 4.1–4.5
 *
 * LK20-kompetansemål:
 * - drøfte medienes rolle i demokratiet og analysere forholdet mellom medier, makt og politikk
 * - vurdere hvordan politisk kommunikasjon og retorikk påvirker offentlig debatt og meningsdanning
 * - analysere sosiale mediers betydning for politisk deltakelse, polarisering og ytringsfrihet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Medier og demokrati
// ============================================================================

export const CHAPTER_MEDIEINFO_2_4_1: TextbookChapter = {
  id: 'medieinfo-2-4-1',
  courseId: 'medieinfo-2',
  chapterNumber: '4.1',
  title: 'Medier og demokrati',
  description: 'Medienes rolle som demokratisk arena og vaktbikkje. Du lærer om pressens samfunnsoppdrag, medienes maktfunksjon, og hvordan forholdet mellom medier og demokrati har utviklet seg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte medienes rolle i demokratiet og analysere forholdet mellom medier, makt og politikk',
  ],
  keyTerms: [
    { term: 'Fjerde statsmakt', definition: 'Betegnelse på pressens rolle som uavhengig kontrollinstans overfor de tre formelle statsmaktene (Stortinget, regjeringen og domstolene). Pressen skal avdekke maktmisbruk og holde makthaverne ansvarlige.' },
    { term: 'Vaktbikkjefunksjonen', definition: 'Medienes oppgave med å overvåke og kontrollere makthavere på vegne av befolkningen. Innebærer kritisk journalistikk som avdekker maktmisbruk, korrupsjon og urett.' },
    { term: 'Offentligheten', definition: 'Den felles arenaen der samfunnsspørsmål diskuteres og meninger dannes. Jürgen Habermas beskrev den borgerlige offentligheten som en sfære mellom stat og privatsfære der borgere kan debattere fritt.' },
    { term: 'Informasjonsfunksjonen', definition: 'Medienes oppgave med å gi borgerne den informasjonen de trenger for å delta i demokratiet, fatte informerte beslutninger og holde seg oppdatert om samfunnsutviklingen.' },
    { term: 'Arenafunksjonen', definition: 'Medienes rolle som arena for offentlig debatt. Mediene gir ulike stemmer og synspunkter plass og legger til rette for meningsutveksling mellom borgere, politikere og eksperter.' },
  ],
  content: [
    {
      id: 'mi2-4-1-intro',
      type: 'text',
      content: `## Medier som demokratiets fundament

Et velfungerende demokrati er avhengig av frie, uavhengige medier. Mediene gir borgerne informasjonen de trenger for å delta i demokratiet, de fungerer som arena for offentlig debatt, og de kontrollerer makthaverne på vegne av folket. Uten medier ville det vært svært vanskelig å holde politikere og andre maktpersoner ansvarlige.

I dette kapittelet skal du lære:
- Hvilke demokratiske funksjoner mediene fyller
- Hva det betyr at pressen er «den fjerde statsmakt»
- Hva offentligheten er og hvorfor den er viktig
- Hvilke utfordringer medienes demokratiske rolle møter i dag`,
    },
    {
      id: 'mi2-4-1-def-1',
      type: 'definition',
      title: 'Den fjerde statsmakt',
      content: `**Den fjerde statsmakt** er en betegnelse på pressens rolle som uavhengig kontrollinstans i et demokrati. De tre formelle statsmaktene er den lovgivende (Stortinget), den utøvende (regjeringen) og den dømmende (domstolene). Pressen omtales som den fjerde fordi den har en uformell, men avgjørende funksjon: å overvåke de andre maktene, avdekke maktmisbruk og sørge for at borgerne får innsyn i politiske prosesser. Begrepet understreker at et demokrati ikke bare trenger formelle maktinstitusjoner, men også en fri presse som kan stille kritiske spørsmål.`,
    },
    {
      id: 'mi2-4-1-text-1',
      type: 'text',
      content: `### Medienes demokratiske funksjoner

Medienes rolle i demokratiet kan deles inn i fire hovedfunksjoner:

**1. Informasjonsfunksjonen**
- Gi borgerne den informasjonen de trenger for å delta i demokratiet
- Formidle hva som skjer i politikken, økonomien og samfunnet
- Forklare komplekse saker slik at folk kan danne seg en mening
- Presentere ulike perspektiver og synspunkter

**2. Vaktbikkjefunksjonen**
- Overvåke og kontrollere makthavere på vegne av borgerne
- Avdekke korrupsjon, maktmisbruk og lovbrudd
- Stille kritiske spørsmål til politikere og myndigheter
- Følge opp løfter og vedtak fra politiske myndigheter

**3. Arenafunksjonen**
- Være en arena for offentlig debatt og meningsutveksling
- Gi ulike stemmer og grupper i samfunnet en plattform
- Legge til rette for at borgere kan delta i den offentlige samtalen
- Synliggjøre konflikter og motsetninger i samfunnet

**4. Dagsordenfunksjonen**
- Påvirke hvilke saker som blir satt på den politiske dagsordenen
- Løfte frem temaer som ellers ville forblitt ukjente for offentligheten
- Styre oppmerksomheten mot det mediene anser som viktig
- Påvirke hvilke saker politikerne må forholde seg til`,
    },
    {
      id: 'mi2-4-1-example-1',
      type: 'example',
      title: 'Eksempel: VG og Tolga-saken',
      problem: 'Hvordan illustrerer VGs Tolga-sak medienes vaktbikkjefunksjon?',
      solution: `**Bakgrunn:** I 2018 avslørte VG at tre brødre fra Tolga kommune var satt under vergemål uten at de hadde samtykket til det, og uten tilstrekkelig medisinsk grunnlag. Kommunen hadde økonomisk fordel av vergemålene gjennom statlige tilskudd.

**Vaktbikkjefunksjonen i praksis:**
- **Avdekking:** VGs journalister brukte måneder på å kartlegge saken og avdekke at systemet hadde sviktet tre sårbare borgere
- **Kontroll av myndigheter:** Saken viste at både kommunen og fylkesmannen hadde forsømt sine plikter
- **Konsekvenser:** Vergemålene ble opphevet, og saken førte til en gjennomgang av vergemålsordningen nasjonalt
- **Politisk endring:** Stortinget vedtok endringer i vergemålsloven som følge av avsløringene

**Analyse:** Tolga-saken er et tydelig eksempel på at journalistikk kan endre samfunnet. Uten VGs journalistikk ville brødrene trolig fortsatt vært under vergemål. Saken viser medienes demokratiske betydning: de beskytter enkeltmennesker mot maktmisbruk fra offentlige myndigheter.`,
    },
    {
      id: 'mi2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva menes med at pressen er «den fjerde statsmakt»?',
        options: [
          { id: 'a', text: 'At pressen er en del av den norske grunnloven på lik linje med Stortinget, regjeringen og domstolene', isCorrect: false },
          { id: 'b', text: 'At pressen fungerer som en uavhengig kontrollinstans som overvåker de tre formelle statsmaktene', isCorrect: true },
          { id: 'c', text: 'At pressen har mer makt enn de tre andre statsmaktene', isCorrect: false },
          { id: 'd', text: 'At pressen styres av staten og er en del av det offentlige maktapparatet', isCorrect: false },
        ],
        solution: 'Pressen kalles den fjerde statsmakt fordi den fungerer som en uavhengig kontrollinstans som overvåker de tre formelle statsmaktene (Stortinget, regjeringen og domstolene). Pressen avdekker maktmisbruk og sørger for at borgerne får innsyn i politiske prosesser.',
      },
    },
    {
      id: 'mi2-4-1-def-2',
      type: 'definition',
      title: 'Offentligheten',
      content: `**Offentligheten** er den felles arenaen der samfunnsspørsmål diskuteres og meninger dannes. Filosofen Jürgen Habermas beskrev den borgerlige offentligheten som en sfære mellom stat og privatsfære der borgere kan møtes som likeverdige og debattere fritt. I dag er offentligheten ikke bare én arena, men mange: aviser, TV, radio, sosiale medier, folkemøter og debattfora. En velfungerende offentlighet kjennetegnes av at alle har tilgang til å delta, at argumenter vurderes på grunnlag av kvalitet og ikke avsenderens status, og at makthavere kan utfordres.`,
    },
    {
      id: 'mi2-4-1-text-2',
      type: 'text',
      content: `### Utfordringer for medienes demokratiske rolle

Medienes demokratiske funksjoner er under press fra flere hold:

**Økonomisk press**
- Fallende annonseinntekter og synkende abonnementstall
- Nedbemanninger i redaksjoner svekker den undersøkende journalistikken
- Klikkbasert journalistikk prioriterer oppmerksomhet over samfunnsnytte
- Gratisinnhold gjør det vanskelig å finansiere kvalitetsjournalistikk

**Teknologiske endringer**
- Sosiale medier utfordrer redaktørstyrte medier som portvakter
- Algoritmestyrte nyhetsfeeder skaper informasjonsbobler
- Falske nyheter og desinformasjon spres raskere enn faktasjekket journalistikk
- Kunstig intelligens utfordrer journalistikkens troverdighet

**Politisk press**
- Politikere omgår mediene ved å kommunisere direkte via sosiale medier
- Angrep på «mainstream media» undergraver tilliten til pressen
- Mediekonsentrasjon gir færre uavhengige stemmer
- Polarisering gjør det vanskeligere å opprettholde en felles offentlighet`,
    },
    {
      id: 'mi2-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Habermas og den digitale offentligheten',
      content: `**Habermas' ideal:** Jürgen Habermas mente at en velfungerende offentlighet krever at alle kan delta som likeverdige, at det beste argumentet vinner, og at debatten er rasjonell og faktabasert.

**Den digitale offentligheten:**
Sosiale medier har gjort det mulig for langt flere å delta i offentlig debatt. I prinsippet kan hvem som helst publisere sine meninger og nå et stort publikum. Dette er en demokratisering av offentligheten.

**Men den digitale offentligheten har også svakheter som bryter med Habermas' ideal:**
- **Algoritmer styrer hva vi ser:** Vi møter ikke det beste argumentet, men det som engasjerer mest (ofte det mest provoserende)
- **Ikke alle stemmer er likeverdige:** Influencere og profilerte personer når millioner, mens vanlige borgere ofte drukner i mengden
- **Følelser trumfer rasjonalitet:** Emosjonelt innhold deles mer enn nøkterne analyser
- **Fragmentering:** I stedet for én felles offentlighet har vi mange deloffentligheter som sjelden møtes

**Konklusjon:** Den digitale offentligheten har demokratisert tilgangen til å ytre seg, men har samtidig skapt nye utfordringer for kvaliteten på den demokratiske debatten.`,
    },
    {
      id: 'mi2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        task: 'Hvilken av følgende er IKKE en av medienes fire demokratiske hovedfunksjoner?',
        options: [
          { id: 'a', text: 'Informasjonsfunksjonen', isCorrect: false },
          { id: 'b', text: 'Underholdningsfunksjonen', isCorrect: true },
          { id: 'c', text: 'Vaktbikkjefunksjonen', isCorrect: false },
          { id: 'd', text: 'Arenafunksjonen', isCorrect: false },
        ],
        solution: 'De fire demokratiske hovedfunksjonene er informasjonsfunksjonen, vaktbikkjefunksjonen, arenafunksjonen og dagsordenfunksjonen. Underholdning er en viktig mediefunksjon, men den regnes ikke blant de demokratiske hovedfunksjonene.',
      },
    },
    {
      id: 'mi2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        task: 'Forklar med egne ord hva vaktbikkjefunksjonen innebærer, og gi et eksempel fra norske medier der denne funksjonen har vært viktig.',
        hints: ['Tenk på store medieoppslag som har avdekket maktmisbruk eller kritikkverdige forhold', 'Undersøkende journalistikk er et sentralt stikkord'],
        solution: 'Vaktbikkjefunksjonen innebærer at mediene overvåker og kontrollerer makthavere på vegne av borgerne. Journalister undersøker om politikere, myndigheter og andre maktpersoner utøver makten sin på en forsvarlig måte. Eksempler: VGs avsløring av Tolga-saken (vergemål uten samtykke), Aftenpostens dekning av Nav-skandalen (feilaktig fengsling for trygdesvindel), eller Bergens Tidendes avsløring av overgrepssaker i idretten. Uten denne journalistikken ville mange kritikkverdige forhold forblitt skjult.',
      },
    },
    {
      id: 'mi2-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Mediene fyller fire demokratiske hovedfunksjoner: **informasjon**, **vaktbikkje**, **arena** og **dagsorden**
- Pressen kalles **den fjerde statsmakt** fordi den fungerer som uavhengig kontrollinstans
- **Offentligheten** er arenaen der samfunnsspørsmål diskuteres og meninger dannes
- Medienes demokratiske rolle utfordres av økonomisk press, teknologiske endringer og politisk press
- Den digitale offentligheten har demokratisert deltakelse, men skapt nye utfordringer for debattkvaliteten`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om sosiale medier styrker eller svekker demokratiet. Bruk Habermas\' begrep om offentligheten og gi konkrete eksempler fra norsk mediehverdag.',
        hints: ['Vurder både fordeler (flere kan delta) og ulemper (algoritmestyring, desinformasjon)', 'Bruk konkrete eksempler fra norske sosiale medier'],
        solution: 'Sosiale medier styrker demokratiet ved at flere kan delta i offentlig debatt (lav terskel for å ytre seg), politikere kan nås direkte av velgere, og saker som tradisjonelle medier overser kan løftes frem (f.eks. #metoo). Sosiale medier svekker demokratiet ved at algoritmer skaper informasjonsbobler der folk bare møter synspunkter de er enige i, falske nyheter spres raskt og kan påvirke valg, og debatten preges ofte av følelser og personangrep fremfor rasjonelle argumenter. Med Habermas: Den digitale offentligheten oppfyller kravet om bred deltakelse, men bryter med idealene om rasjonell debatt og det beste argumentets kraft. I Norge ser vi dette i kommentarfelt der saklig debatt kan drukne i hets, men også i kampanjer som #NorskeHelter som mobiliserer positivt engasjement.',
      },
    },
    {
      id: 'mi2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en konkret nyhetssak fra de siste årene der mediene har oppfylt sin dagsordenfunksjon. Analyser hvordan mediedekningen påvirket den politiske dagsordenen og om det førte til konkrete endringer.',
        hints: ['Tenk på saker som ble store i mediene og førte til politisk handling', 'Eksempler kan være miljøsaker, skandaler eller rettferdighetsspørsmål'],
        solution: 'Et godt eksempel er Bergens Tidendes avsløringer om overgrep i norsk idrett (2019–2020). BT satte søkelys på svikt i idrettens håndtering av overgrepssaker gjennom grundig undersøkende journalistikk. Mediedekningen førte til at saken ble satt høyt på den politiske dagsordenen: Kulturministeren krevde endringer, Norges idrettsforbund gjennomførte en ekstern gransking, og det ble innført strengere regler for politiattester og varslingssystemer i idretten. Saken viser dagsordenfunksjonens kraft: Uten mediedekningen ville problemet sannsynligvis forblitt skjult, og politikerne ville ikke hatt grunnlag for å handle. Analysen bør inkludere hvem som satte saken på dagsordenen (BT), hvordan den ble fulgt opp av andre medier, og hvilke politiske konsekvenser den fikk.',
      },
    },
    {
      id: 'mi2-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva som menes med medienes arenafunksjon. Gi eksempler på hvordan ulike medier fungerer som arenaer for offentlig debatt, og vurder om noen arenaer er bedre egnet enn andre.',
        hints: ['Sammenlign tradisjonelle medier (aviser, TV-debatter) med sosiale medier', 'Vurder kvaliteten på debatten i ulike arenaer'],
        solution: 'Arenafunksjonen innebærer at mediene tilbyr en plattform der ulike stemmer kan møtes i offentlig debatt. Eksempler: NRK Debatten inviterer politikere og eksperter til strukturert meningsutveksling med ordstyrer. Aftenpostens debattsider gir kronikk- og debattinnlegg fra mange ulike stemmer, med redaksjonell kvalitetskontroll. Twitter/X fungerer som arena for rask meningsutveksling uten redaksjonell filtrering. Vurdering: TV-debatter og avisenes debattsider gir mer strukturert og ofte mer saklig debatt, men kan ekskludere stemmer som ikke anses som «viktige nok». Sosiale medier gir alle en stemme, men kvaliteten varierer enormt. En god demokratisk arena bør kombinere bred tilgang med redaksjonelle rammer som fremmer saklig debatt.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Politisk retorikk og propaganda
// ============================================================================

export const CHAPTER_MEDIEINFO_2_4_2: TextbookChapter = {
  id: 'medieinfo-2-4-2',
  courseId: 'medieinfo-2',
  chapterNumber: '4.2',
  title: 'Politisk retorikk og propaganda',
  description: 'Strategisk kommunikasjon, spin og propaganda. Du lærer om retoriske strategier i politisk kommunikasjon, forskjellen mellom legitim overbevisning og manipulasjon, og hvordan propaganda fungerer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere hvordan politisk kommunikasjon og retorikk påvirker offentlig debatt og meningsdanning',
  ],
  keyTerms: [
    { term: 'Politisk retorikk', definition: 'Strategisk bruk av språk, argumenter og virkemidler for å overbevise et publikum om politiske standpunkter. Inkluderer bevisst valg av ord, metaforer, argumentasjonsstrategier og appellformer.' },
    { term: 'Spin', definition: 'Bevisst vridning eller vinkling av informasjon for å fremstille en sak, person eller parti i et bestemt lys. Spin er en form for strategisk kommunikasjon der fakta presenteres selektivt for å styre oppfatningen.' },
    { term: 'Propaganda', definition: 'Systematisk spredning av informasjon, ideer eller påstander med mål om å påvirke holdninger og handlinger. I motsetning til saklig informasjon er propaganda ofte ensidig, forenklet og appellerer til følelser fremfor fornuft.' },
    { term: 'Framing', definition: 'Å ramme inn en sak på en bestemt måte gjennom ordvalg, perspektiv og vinkling. Framing styrer hvordan mottakeren oppfatter og tolker en sak. Eksempel: «skattelette» versus «kutt i velferd» om samme politiske vedtak.' },
    { term: 'Politisk kommunikasjonsrådgiver', definition: 'Person som arbeider med å planlegge og gjennomføre kommunikasjonsstrategier for politikere, partier eller organisasjoner. Også kalt spindoktor. Rådgiveren hjelper med mediehåndtering, budskapsutforming og krisekommunikasjon.' },
  ],
  content: [
    {
      id: 'mi2-4-2-intro',
      type: 'text',
      content: `## Språk som politisk verktøy

Politikk handler i stor grad om kommunikasjon. Politikere må overbevise velgere, forsvare sine standpunkter og vinne debatter. For å lykkes bruker de retoriske strategier - bevisste grep for å påvirke publikum. Men hvor går grensen mellom legitim overbevisning og manipulasjon? Og hva skjer når retorikk blir propaganda?

I dette kapittelet skal du lære:
- Hva politisk retorikk er og hvilke strategier som brukes
- Hva spin og framing innebærer
- Hva propaganda er og hvordan den skiller seg fra saklig kommunikasjon
- Hvordan du kan gjennomskue retoriske strategier`,
    },
    {
      id: 'mi2-4-2-def-1',
      type: 'definition',
      title: 'Politisk retorikk',
      content: `**Politisk retorikk** er strategisk bruk av språk og virkemidler for å overbevise et publikum om politiske standpunkter. Den klassiske retorikken, som stammer fra antikkens Hellas, opererer med tre appellformer: *etos* (troverdighet), *patos* (følelser) og *logos* (fornuft og logikk). I politisk kommunikasjon brukes alle tre: Politikeren bygger tillit gjennom sin personlighet (etos), appellerer til velgernes følelser som frykt, håp eller sinne (patos), og presenterer fakta og argumenter som støtter sine standpunkter (logos). Effektiv politisk retorikk kombinerer alle tre appellformene.`,
    },
    {
      id: 'mi2-4-2-text-1',
      type: 'text',
      content: `### Retoriske strategier i politikken

Politikere og deres rådgivere bruker en rekke retoriske strategier for å vinne oppslutning:

**Forenkling og slagord**
- Komplekse saker forenkles til korte, minneverdige budskap
- «Vanlige folk først», «Hele Norge i bruk», «Trygghet i hverdagen»
- Slagord gjør det lett å huske partiets kjernebudskap

**Framing (innramming)**
- Politikere velger ord og perspektiver som styrer hvordan en sak oppfattes
- «Skattelette» vs. «kutt i velferd» om samme politiske vedtak
- «Innvandringskontroll» vs. «stengte grenser» om innvandringspolitikk

**Narrativ (fortelling)**
- Politikere forteller historier som gjør abstrakt politikk konkret
- Personlige historier fra velgere brukes for å illustrere politiske poenger
- Heltefortellinger der politikeren fremstår som løsningen på problemet

**Kontrastering**
- Tydeliggjøre forskjellen mellom eget parti og motstanderne
- «Vi vil styrke skolen, de vil kutte i budsjettet»
- Skape et tydelig valg for velgerne

**Emosjonell appell**
- Appell til frykt: «Hvis vi ikke handler nå, vil konsekvensene bli katastrofale»
- Appell til håp: «Sammen kan vi skape et bedre samfunn»
- Appell til sinne: «Det er uakseptabelt at familier ikke har råd til mat»`,
    },
    {
      id: 'mi2-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Framing i norsk politikk',
      problem: 'Hvordan kan framing påvirke oppfatningen av samme politiske sak?',
      solution: `**Sak: Oljepolitikk i Norge**

**Framing fra tilhengere av oljeutvinning:**
- «Petroleumsnæringen sikrer arbeidsplasser og velferd for hele Norge»
- «Norsk olje er verdens reneste» (legitimerer fortsatt utvinning)
- «Vi trenger en forsvarlig omstilling, ikke brå avvikling»
- **Ordvalg:** «energinæringen», «verdiskaping», «kompetanse»

**Framing fra motstandere av oljeutvinning:**
- «Fossil energi ødelegger klimaet for fremtidige generasjoner»
- «Vi kan ikke bore oss ut av klimakrisen»
- «Oljepengene gjør oss avhengige og forsinker omstillingen»
- **Ordvalg:** «fossilindustrien», «klimautslipp», «oljesøl»

**Analyse:** Begge sider presenterer fakta, men velger hvilke fakta de fremhever og hvilket perspektiv de bruker. Framingen styrer hva vi tenker på og hvilke følelser saken vekker. En bevisst mediebruker legger merke til framingen og vurderer saken fra flere perspektiver.`,
    },
    {
      id: 'mi2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hva er framing i politisk kommunikasjon?',
        options: [
          { id: 'a', text: 'Å lyve om fakta for å villede publikum', isCorrect: false },
          { id: 'b', text: 'Å ramme inn en sak på en bestemt måte gjennom ordvalg, perspektiv og vinkling', isCorrect: true },
          { id: 'c', text: 'Å bruke bilder og video for å illustrere politiske poenger', isCorrect: false },
          { id: 'd', text: 'Å sitere motstandere feil for å svekke deres argumenter', isCorrect: false },
        ],
        solution: 'Framing innebærer å ramme inn en sak på en bestemt måte gjennom ordvalg, perspektiv og vinkling. Framingen styrer hvordan mottakeren oppfatter og tolker saken. Det handler ikke nødvendigvis om å lyve, men om å velge hvilke aspekter som fremheves.',
      },
    },
    {
      id: 'mi2-4-2-def-2',
      type: 'definition',
      title: 'Propaganda',
      content: `**Propaganda** er systematisk spredning av informasjon, ideer eller påstander med mål om å påvirke holdninger og handlinger i en bestemt retning. Propaganda kjennetegnes ved at den er *ensidig* (presenterer bare én side av saken), *forenklet* (reduserer komplekse spørsmål til svart-hvitt), *emosjonell* (appellerer til følelser fremfor fornuft) og *gjentakende* (samme budskap hamres inn igjen og igjen). Propaganda kan brukes av stater, politiske bevegelser, terrorgrupper og kommersielle aktører. I motsetning til saklig informasjon er propaganda ikke opptatt av sannhet, men av effekt.`,
    },
    {
      id: 'mi2-4-2-text-2',
      type: 'text',
      content: `### Fra retorikk til propaganda - hvor går grensen?

Det er ikke alltid enkelt å skille mellom legitim politisk retorikk og propaganda. Her er noen kjennetegn som hjelper deg å vurdere:

**Legitim politisk retorikk:**
- Bygger på fakta, selv om de presenteres selektivt
- Anerkjenner at motparten kan ha gyldige poenger
- Appellerer til fornuft i tillegg til følelser
- Er åpen om hvem som er avsender og hva formålet er

**Propaganda:**
- Fordreier eller dikter opp fakta
- Fremstiller motparten som fiende som ikke fortjener å bli hørt
- Appellerer nesten utelukkende til følelser, særlig frykt og hat
- Bruker gjentakelse og forenkling for å hamre inn budskapet
- Kan være skjult (avsender er ukjent eller kamuflert)

**Spin - gråsonen mellom retorikk og propaganda:**
Spin er bevisst vridning av informasjon for å fremstille en sak i et bestemt lys. Politiske kommunikasjonsrådgivere (spindoktorer) arbeider med å kontrollere medienes vinkling. Spin er ikke nødvendigvis løgn, men selektiv presentasjon av fakta. Det er en del av moderne politisk kommunikasjon, men kan bli problematisk når det tilslører sannheten.`,
    },
    {
      id: 'mi2-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Propagandateknikker i historien og i dag',
      content: `**Historisk eksempel: Nazi-Tysklands propaganda**
Joseph Goebbels, Hitlers propagandaminister, brukte systematisk mediene for å spre nazistisk ideologi:
- **Fiendebilde:** Jøder ble fremstilt som fiende nummer én gjennom aviser, film og plakater
- **Gjentakelse:** Samme hat-budskap ble gjentatt i alle kanaler
- **Forenkling:** Komplekse problemer ble redusert til «jødenes skyld»
- **Kontroll:** All uavhengig presse ble eliminert

**Moderne eksempler på propagandateknikker:**
- **Russisk statsmedia (RT, Sputnik):** Presenterer systematisk vestlige demokratier i et negativt lys og sprer alternative forklaringer på hendelser som invasjonen av Ukraina
- **Ekstremistgrupper i sosiale medier:** Bruker algoritmer og memes for å radikalisere, forenkler komplekse problemer og skaper fiendebileder
- **Konspirasjonsmiljøer:** Sprer falske narrativer om at «eliten» skjuler sannheten, bruker gjentakelse og gruppepress

**Viktig forskjell:** I et demokrati med pressefrihet kan propaganda avsløres og imøtegås. I autoritære stater kontrolleres mediene, og propaganda kan dominere uten motstand.`,
    },
    {
      id: 'mi2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner propaganda sammenlignet med saklig informasjon?',
        options: [
          { id: 'a', text: 'Propaganda bruker aldri fakta, bare løgn', isCorrect: false },
          { id: 'b', text: 'Propaganda er ensidig, forenklet, emosjonell og gjentakende', isCorrect: true },
          { id: 'c', text: 'Propaganda brukes bare av autoritære stater, ikke i demokratier', isCorrect: false },
          { id: 'd', text: 'Propaganda og saklig informasjon er det samme, bare med forskjellig avsender', isCorrect: false },
        ],
        solution: 'Propaganda kjennetegnes ved å være ensidig (presenterer bare én side), forenklet (reduserer komplekse spørsmål), emosjonell (appellerer til følelser) og gjentakende (hamrer inn samme budskap). Propaganda kan inneholde fakta, men presenterer dem selektivt og fordreier dem for å oppnå ønsket effekt.',
      },
    },
    {
      id: 'mi2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        task: 'Velg et politisk slagord fra en norsk valgkamp. Analyser slagordet retorisk: Hvilke appellformer (etos, patos, logos) brukes? Hvem er målgruppen? Hva er det som gjør slagordet effektivt eller ineffektivt?',
        hints: ['Eksempler: «Nå er det vanlige folks tur» (Ap), «Frihet og ansvar» (H)', 'Vurder ordvalget, underforståtte budskap og følelsene slagordet vekker'],
        solution: 'Eksempel: «Nå er det vanlige folks tur» (Ap, 2021). Patos: Appellen til rettferdighet og solidaritet vekker følelser hos folk som føler seg oversett. Etos: Arbeiderpartiet posisjonerer seg som partiet for «vanlige folk» og bygger troverdighet hos arbeider- og middelklassen. Logos: Impliserer logisk at andre partier har prioritert andre grupper, og at det nå er tid for endring. Målgruppen er arbeider- og middelklassen som ønsker mer rettferdig fordeling. Slagordet er effektivt fordi det er kort, lett å huske, skaper identifikasjon og impliserer en kontrast uten å nevne motstanderen direkte. Det er imidlertid også vagt - «vanlige folk» kan bety ulike ting for ulike velgere.',
      },
    },
    {
      id: 'mi2-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Politisk retorikk** er strategisk bruk av språk og virkemidler for å overbevise velgere
- **Framing** styrer hvordan vi oppfatter en sak gjennom ordvalg og perspektiv
- **Spin** er bevisst vridning av informasjon for å kontrollere medienes vinkling
- **Propaganda** er ensidig, forenklet, emosjonell og gjentakende kommunikasjon
- Grensen mellom retorikk og propaganda handler om ærlighet, åpenhet og respekt for fakta`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvor grensen går mellom legitim politisk retorikk og propaganda. Bruk eksempler fra norsk og internasjonal politikk.',
        hints: ['Tenk på kjennetegnene ved propaganda versus retorikk', 'Vurder rollen til fakta, følelser og ærlighet'],
        solution: 'Grensen mellom retorikk og propaganda er ikke alltid skarp, men noen forskjeller er tydelige. Legitim retorikk: Norske partiers valgkamper bruker selektive fakta og emosjonelle appeller, men opererer innenfor rammene av fakta og åpenhet. Velgerne vet hvem avsenderen er, og motargumenter finnes i offentligheten. Propaganda: Russisk statsmedia som RT sprer systematisk desinformasjon om Ukraina-krigen, fremstiller motparten som fiende, og undertrykker alternative narrativer. Gråsoner: Populistiske bevegelser i demokratier kan bruke propagandateknikker (forenkling, fiendebilder, gjentakelse) uten å bryte loven. Når politikere konsekvent omtaler mediene som «fake news» for å undergrave kritisk journalistikk, nærmer de seg propaganda. Nøkkelen: Propaganda kjennetegnes av bevisst forvrengning av sannheten, fiendebileder og forsøk på å eliminere alternative stemmer. Legitim retorikk respekterer fakta og aksepterer at motparten har rett til å bli hørt.',
      },
    },
    {
      id: 'mi2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn to eksempler på framing av samme sak i norske medier. Analyser hvordan ordvalg og perspektiv styrer leserens oppfatning. Vurder hvilke konsekvenser ulik framing kan ha for den offentlige debatten.',
        hints: ['Søk etter samme nyhetssak i aviser med ulik politisk profil', 'Legg merke til overskrifter, ordvalg og hvilke kilder som brukes'],
        solution: 'Eksempel: Dekning av strømpriskrisen. Framing 1 (Klassekampen): «Strømprofitører tjener milliarder mens folk fryser» - vektlegger ulikhet, kritiserer systemet, bruker emosjonelt språk. Framing 2 (Dagens Næringsliv): «Energimarkedet fungerer - høye priser driver grønn omstilling» - vektlegger markedsmekanismer, rasjonelt perspektiv. Konsekvenser: Ulik framing fører til at lesere fokuserer på forskjellige aspekter av samme sak. De som leser Klassekampen vil tenke rettferdighet og fordeling, mens DN-lesere vil tenke marked og omstilling. For den offentlige debatten kan ensidig framing føre til polarisering, mens mangfold i framing gir borgerne et bredere grunnlag for egne vurderinger. Mediemangfold er derfor viktig for demokratiet.',
      },
    },
    {
      id: 'mi2-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva en spindoktor er og hvilken rolle politiske kommunikasjonsrådgivere spiller i moderne demokrati. Diskuter om denne rollen er positiv eller negativ for demokratiet.',
        hints: ['Tenk på forholdet mellom politikere, rådgivere og medier', 'Vurder om profesjonalisering av politisk kommunikasjon er bra eller dårlig'],
        solution: 'En spindoktor er en politisk kommunikasjonsrådgiver som hjelper politikere med å formidle budskap, håndtere medier og kontrollere narrativet rundt politiske saker. Rollen innebærer å forberede politikere til intervjuer, skrive taler, planlegge medievinkling og drive krisekommunikasjon. Positive sider: Profesjonell kommunikasjon gjør politikken mer tilgjengelig, hjelper politikere med å formidle kompleks politikk forståelig, og bidrar til at politikere er bedre forberedt i offentlig debatt. Negative sider: Spin kan tilsløre sannheten, politikken kan bli mer iscenesatt enn ekte, journalister bruker mer tid på å gjennomskue spin enn på å undersøke saker, og velgere kan miste tillit til politikere som virker «scriptet». Vurdering: Spindoktorer er en naturlig del av profesjonalisert politikk, men demokratiet er best tjent med at mediene er sterke nok til å gjennomskue spin og formidle realitetene til velgerne.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Valgkamp og mediestrategi
// ============================================================================

export const CHAPTER_MEDIEINFO_2_4_3: TextbookChapter = {
  id: 'medieinfo-2-4-3',
  courseId: 'medieinfo-2',
  chapterNumber: '4.3',
  title: 'Valgkamp og mediestrategi',
  description: 'Medienes rolle i valgkamper. Du lærer om hvordan politiske partier bruker medier strategisk i valgkamper, medienes dekning av valg, og velgernes mediebruk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte medienes rolle i demokratiet og analysere forholdet mellom medier, makt og politikk',
    'vurdere hvordan politisk kommunikasjon og retorikk påvirker offentlig debatt og meningsdanning',
  ],
  keyTerms: [
    { term: 'Mediestrategi', definition: 'En planlagt tilnærming til hvordan medier skal brukes for å nå bestemte kommunikasjonsmål. I valgkamp handler mediestrategi om å kontrollere narrativet, nå velgere gjennom ulike kanaler og håndtere medienes kritiske blikk.' },
    { term: 'Agenda-setting', definition: 'Medienes evne til å påvirke hvilke saker publikum oppfatter som viktige. Mediene forteller ikke folk hva de skal mene, men hva de skal mene noe om. I valgkamp kjemper partiene om å sette sine saker på medienes dagsorden.' },
    { term: 'Horse race-journalistikk', definition: 'Journalistikk som fokuserer på hvem som leder og hvem som ligger bak i meningsmålingene, fremfor å analysere politisk innhold. Metaforen er hentet fra hesteveddeløp der det viktigste er hvem som vinner.' },
    { term: 'Personifisering', definition: 'Tendensen til at politisk journalistikk fokuserer på enkeltpersoner (partiledere) fremfor politisk innhold. Valgkampen fremstilles som en duell mellom lederne heller enn en debatt mellom politiske programmer.' },
    { term: 'Mikromålretting', definition: 'Bruk av data og algoritmer for å sende skreddersydde politiske budskap til spesifikke velgergrupper. Gjennom sosiale medier kan partier nå ulike grupper med ulike budskap basert på demografi, interesser og adferd.' },
  ],
  content: [
    {
      id: 'mi2-4-3-intro',
      type: 'text',
      content: `## Kampen om oppmerksomheten

Valgkampen er demokratiets høysesong. I ukene før et valg kjemper partiene om velgernes oppmerksomhet og stemmer. Mediene spiller en avgjørende rolle i denne kampen - både som formidlere av politisk informasjon og som selvstendige aktører som setter dagsordenen. Hvordan valgkampen dekkes i mediene, kan ha stor betydning for valgresultatet.

I dette kapittelet skal du lære:
- Hvordan politiske partier bruker medier strategisk i valgkamper
- Hva agenda-setting, horse race-journalistikk og personifisering innebærer
- Hvordan sosiale medier har endret valgkampen
- Hvilke etiske utfordringer medienes valgkampdekning reiser`,
    },
    {
      id: 'mi2-4-3-def-1',
      type: 'definition',
      title: 'Agenda-setting',
      content: `**Agenda-setting** (dagsordensetting) er teorien om at mediene har stor makt over hvilke saker folk oppfatter som viktige. Teorien ble utviklet av Maxwell McCombs og Donald Shaw på 1970-tallet. Kjernen er at mediene kanskje ikke kan fortelle folk *hva* de skal mene, men de kan i stor grad bestemme *hva folk mener noe om*. I en valgkamp betyr dette at partiene kjemper om å få sine kjernesaker på medienes dagsorden: Hvis mediene fokuserer på helse, styrkes partier med sterk helsepolitikk. Hvis mediene fokuserer på innvandring, styrkes partier med tydelig innvandringspolitikk.`,
    },
    {
      id: 'mi2-4-3-text-1',
      type: 'text',
      content: `### Partienes mediestrategi i valgkamp

Moderne valgkamper er nøye planlagte medieoperasjoner. Partiene har profesjonelle kommunikasjonsavdelinger som utvikler strategier for å nå velgerne:

**Tradisjonelle medier**
- Partilederutspørringer og debatter på TV er fortsatt de viktigste enkeltbegivenhetene i valgkampen
- Pressekonferanser og utspill er timet for å få maksimal mediedekning
- Partiene sender sine beste talspersoner til redaksjonene
- Leserinnlegg og kronikker brukes for å formidle politikk i dybden

**Sosiale medier**
- Partiledere og kandidater er aktive på Facebook, Instagram, TikTok og X
- Partiene produserer eget innhold (videoer, infografikk, memes)
- Betalt annonsering målrettes mot spesifikke velgergrupper
- Live-sendinger fra valgkamparrangementer

**Direkte velgerkontakt**
- Stand på gata, dørbanking og telefonkanvassering
- Digitale møter, webinarer og Q&A-sesjoner
- Valgkampapper og nyhetsbrev

**Mediehåndtering**
- Kommunikasjonsrådgivere forbereder kandidater på vanskelige spørsmål
- «Snakkepunkter» (talking points) sikrer at alle i partiet formidler samme budskap
- Krisekommunikasjon når negative saker dukker opp`,
    },
    {
      id: 'mi2-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Stortingsvalget 2021 - kampen om dagsordenen',
      problem: 'Hvordan prøvde de ulike partiene å sette dagsordenen i stortingsvalget 2021?',
      solution: `**Arbeiderpartiet** ønsket fokus på ulikhet, arbeidsliv og velferd. Budskapet «Nå er det vanlige folks tur» var designet for å sette forskjells-Norge på dagsordenen. Ap-ledelsen snakket konsekvent om forskjeller og rettferdighet i alle medieopptrinn.

**Høyre** ønsket fokus på økonomisk styring, skatt og kompetanse. Budskapet handlet om trygg økonomisk styring i krisetider og advarsler mot venstresidens skattepolitikk.

**Senterpartiet** ønsket fokus på distrikt versus by, og EØS/EU-spørsmål. Trygve Slagsvold Vedum brukte sosiale medier aktivt for å bygge opp et image som folkelig og jordnær.

**Medienes rolle:** Mediene hadde sin egen dagsorden. NRKs Valgomat, TV-debattene og meningsmålingene styrte i stor grad hva som ble snakket om. Klimasaken ble viktigere enn partiene hadde planlagt da FNs klimapanel kom med sin rapport midt i valgkampen.

**Analyse:** Partiene forsøker å kontrollere dagsordenen, men uventede hendelser og medienes egne prioriteringer kan overstyre partienes planer. Samspillet mellom partienes mediestrategi og medienes redaksjonelle valg former valgkampen.`,
    },
    {
      id: 'mi2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva er agenda-setting?',
        options: [
          { id: 'a', text: 'At mediene forteller folk hva de skal mene om politiske saker', isCorrect: false },
          { id: 'b', text: 'At mediene påvirker hvilke saker folk oppfatter som viktige', isCorrect: true },
          { id: 'c', text: 'At politikere bestemmer hva mediene skal skrive om', isCorrect: false },
          { id: 'd', text: 'At velgerne styrer medienes innhold gjennom klikkfrekvens', isCorrect: false },
        ],
        solution: 'Agenda-setting betyr at mediene påvirker hvilke saker folk oppfatter som viktige. Mediene forteller ikke folk hva de skal mene, men hva de skal mene noe om. I valgkamper kjemper partiene om å få sine saker på medienes dagsorden.',
      },
    },
    {
      id: 'mi2-4-3-def-2',
      type: 'definition',
      title: 'Horse race-journalistikk',
      content: `**Horse race-journalistikk** er en betegnelse på valgkampjournalistikk som fokuserer på hvem som leder og hvem som ligger bak i meningsmålingene, fremfor å analysere det politiske innholdet. Begrepet er hentet fra hesteveddeløp, der det eneste som teller er hvem som krysser mållinjen først. Kritikere mener horse race-journalistikk svekker demokratiet fordi den reduserer politikk til et spill, velgerne får lite hjelp til å forstå sakene, og mediedekningen dreier seg om strategi og taktikk i stedet for politiske løsninger.`,
    },
    {
      id: 'mi2-4-3-text-2',
      type: 'text',
      content: `### Kritikk av medienes valgkampdekning

Forskere og samfunnsdebattanter har pekt på flere problematiske trekk ved medienes valgkampdekning:

**Horse race-fokus**
- Meningsmålinger og «hvem vinner»-vinkler dominerer dekningen
- Politisk innhold og substans får mindre plass
- Velgerne får lite hjelp til å forstå forskjellene mellom partiene

**Personifisering**
- Valgkampen fremstilles som en kamp mellom partilederne
- Personlige egenskaper vektlegges fremfor politisk innhold
- «Duell»-metaforen preger dekningen av TV-debatter
- Partier uten karismatisk leder kan bli usynlige

**Konfliktorientering**
- Mediene prioriterer konflikter og uenighet
- Enighet og kompromisser er «dårlige nyheter»
- Politikere tvinges til å være tydeligere uenige enn de egentlig er
- Kan bidra til polarisering og politikerforakt

**Mikromålretting og transparens**
- Partier kan sende forskjellige budskap til forskjellige velgergrupper
- Vanskelig for medier og velgere å få oversikt over hva som kommuniseres
- Reiser spørsmål om politisk ærlighet og transparens`,
    },
    {
      id: 'mi2-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Horse race vs. saksjournalistikk',
      content: `**Samme valgkamphendelse - to vinklinger:**

**Horse race-vinkling:**
*«Ap faller 3 prosentpoeng på ny måling - Vedum nærmer seg»*
Artikkelen fokuserer på tallene i meningsmålingen, hva nedgangen betyr for regjeringsspørsmålet, og ekspertkommentarer om Støres «svekkede posisjon».

**Saksvinkling:**
*«Så ulike er partienes løsninger for eldreomsorgen»*
Artikkelen gjennomgår partienes programmer for eldreomsorgen, intervjuer politikere om konkrete tiltak, og presenterer ekspertvurderinger av forslagenes gjennomførbarhet.

**Forskjellen:** Horse race-vinklingen behandler politikk som et spill der det viktigste er hvem som leder. Saksvinklingen hjelper velgerne med å forstå hva partiene faktisk vil gjøre. Forskning viser at norske medier bruker mye plass på horse race-journalistikk, selv om velgerne sier de ønsker mer saksjournalistikk.

**Medienes dilemma:** Horse race-saker genererer ofte mer klikk og oppmerksomhet enn sakssaker. Mediene står i et dilemma mellom å gi velgerne det de trenger (saksinformasjon) og det som tiltrekker oppmerksomhet (spill og drama).`,
    },
    {
      id: 'mi2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        task: 'Hva kritiseres horse race-journalistikk for?',
        options: [
          { id: 'a', text: 'At den gir for mye plass til små partier', isCorrect: false },
          { id: 'b', text: 'At den fokuserer på meningsmålinger og taktikk fremfor politisk innhold', isCorrect: true },
          { id: 'c', text: 'At den er for grundig og detaljert i sin politiske analyse', isCorrect: false },
          { id: 'd', text: 'At den bare dekker lokalpolitikk og ignorerer nasjonale saker', isCorrect: false },
        ],
        solution: 'Horse race-journalistikk kritiseres for å fokusere på meningsmålinger, taktikk og «hvem som vinner» fremfor politisk innhold og saklige analyser. Kritikere mener dette svekker demokratiet fordi velgerne får lite hjelp til å forstå partipolitisk substans.',
      },
    },
    {
      id: 'mi2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        task: 'Forklar hva personifisering i politisk journalistikk innebærer. Diskuter fordeler og ulemper ved at medienes valgkampdekning fokuserer på partilederne som personer.',
        hints: ['Tenk på partilederdebatter, individuelle profiler og personlige egenskaper', 'Vurder om personifisering gjør politikk mer eller mindre tilgjengelig'],
        solution: 'Personifisering innebærer at politisk journalistikk fokuserer på enkeltpersoner (spesielt partiledere) fremfor politisk innhold. Valgkampen fremstilles som en duell mellom lederne. Fordeler: Gjør politikk mer engasjerende og tilgjengelig for velgere som ikke er politisk interesserte. Partiledere fungerer som «merkevarer» som gjør det enklere å navigere i politikken. Velgere kan vurdere leders troverdighet og kompetanse. Ulemper: Politisk substans og partiprogrammer kommer i skyggen. Partier med karismatisk leder får uforholdsmessig mye oppmerksomhet. Viktige politiske forskjeller kan bli usynlige når fokus er på personkjemi og talegaver. Kan føre til at partier velger ledere basert på medietekke fremfor politisk kompetanse.',
      },
    },
    {
      id: 'mi2-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Moderne valgkamper er nøye planlagte **medieoperasjoner** der partiene bruker tradisjonelle medier, sosiale medier og direkte kontakt
- **Agenda-setting** handler om medienes makt over hvilke saker som oppfattes som viktige
- **Horse race-journalistikk** fokuserer på meningsmålinger og taktikk fremfor politisk innhold
- **Personifisering** innebærer at partilederne kommer i fokus på bekostning av politisk substans
- **Mikromålretting** gjør det mulig å sende ulike budskap til ulike velgergrupper`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om medienes valgkampdekning bidrar til å styrke eller svekke demokratiet. Vurder både horse race-journalistikk, personifisering og konfliktorientering.',
        hints: ['Tenk på hva velgerne trenger for å ta informerte valg', 'Vurder medienes dilemma mellom oppmerksomhet og samfunnsoppdrag'],
        solution: 'Medienes valgkampdekning kan svekke demokratiet når: Horse race-journalistikk dominerer og velgerne ikke forstår de politiske forskjellene mellom partiene. Personifisering reduserer politikk til personlighet fremfor innhold. Konfliktorientering gir et forvrengt bilde av politikken og bidrar til polarisering. Medienes valgkampdekning kan styrke demokratiet når: Debatter og utspørringer tvinger politikere til å svare for sin politikk. Grundig saksjournalistikk hjelper velgerne med å forstå konsekvensene av ulike valg. Undersøkende journalistikk avdekker forhold som velgerne bør kjenne til. Samlet vurdering: Norske medier gjør mye bra i valgkampen (debatter, valgomater, faktasjekk), men tendensen til horse race og personifisering er en reell demokratisk utfordring. Løsningen er ikke mindre mediedekning, men bedre mediedekning med mer substans og dybde.',
      },
    },
    {
      id: 'mi2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et politisk parti og analyser deres mediestrategi i en valgkamp du kjenner til. Hvilke kanaler brukte partiet? Hva var kjernebudskapet? Hvordan forsøkte de å påvirke medienes dagsorden?',
        hints: ['Sjekk partiets nettsider, sosiale medier og medieoppslag fra valgkampen', 'Vurder sammenhengen mellom kanalvalg, budskap og målgruppe'],
        solution: 'Et godt svar analyserer et konkret parti i en konkret valgkamp. Eksempel: Senterpartiets strategi i 2021. Kanaler: Trygve Slagsvold Vedum var svært aktiv på Facebook og Instagram med folkelige videoer og humoristiske innlegg. Partiet brukte også tradisjonelle medier aktivt med utspill om distriktspolitikk. Kjernebudskap: «Hele Norge» - sentraliseringskritikk, distriktspolitikk, EØS-skepsis og folkelig image. Dagsordensetting: Sp forsøkte å gjøre sentralisering og distriktspolitikk til hovedtemaer i valgkampen. De reagerte raskt på saker som bekreftet narrativet om at regjeringen sentraliserte Norge. Vedum bygget bevisst et image som «mannen fra bygda» som sto i kontrast til «Oslo-eliten». Vurdering av effektivitet: Strategien ga partiet tidvis over 20% oppslutning på målinger, selv om valgresultatet ble lavere.',
      },
    },
    {
      id: 'mi2-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva mikromålretting innebærer i politisk kommunikasjon. Drøft etiske problemstillinger knyttet til at partier kan sende ulike budskap til ulike velgergrupper.',
        hints: ['Tenk på Cambridge Analytica-skandalen', 'Vurder transparens, personvern og demokratisk kontroll'],
        solution: 'Mikromålretting innebærer at partier bruker data om velgere (demografi, interesser, nettadferd) til å sende skreddersydde politiske budskap til spesifikke grupper via sosiale medier. Eksempel: Et parti kan fremheve klimapolitikk overfor unge velgere og økonomisk politikk overfor eldre velgere. Etiske problemstillinger: 1) Transparens: Når partier sender forskjellige budskap til forskjellige grupper, er det vanskelig for medier og velgere å holde dem ansvarlige. 2) Personvern: Innsamling av persondata for politisk målretting reiser spørsmål om samtykke og datasikkerhet (jf. Cambridge Analytica-skandalen der Facebook-data ble misbrukt). 3) Manipulasjon: Skreddersydde budskap kan utnytte folks frykt, fordommer eller usikkerhet. 4) Demokratisk likhet: Ressurssterke partier med store databudsjetter får en fordel. 5) Fragmentering: Ulike velgergrupper får ulik virkelighetsforståelse, noe som kan svekke den felles offentligheten.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Sosiale medier og politisk debatt
// ============================================================================

export const CHAPTER_MEDIEINFO_2_4_4: TextbookChapter = {
  id: 'medieinfo-2-4-4',
  courseId: 'medieinfo-2',
  chapterNumber: '4.4',
  title: 'Sosiale medier og politisk debatt',
  description: 'Ekkokamre, polarisering og algoritmenes makt. Du lærer om hvordan sosiale medier former politisk debatt, hva filterbobler og ekkokamre er, og hvordan polarisering oppstår.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere sosiale mediers betydning for politisk deltakelse, polarisering og ytringsfrihet',
  ],
  keyTerms: [
    { term: 'Ekkokammer', definition: 'Et lukket informasjonsmiljø der man hovedsakelig møter synspunkter som bekrefter ens egne oppfatninger. I sosiale medier oppstår ekkokamre når algoritmer og egne valg fører til at man bare eksponeres for meninger man allerede er enig i.' },
    { term: 'Filterboble', definition: 'Begrepet, innført av Eli Pariser i 2011, beskriver hvordan algoritmer filtrerer informasjon basert på brukerens tidligere adferd, slik at man får et personalisert og innsnevret informasjonsbilde. Filterboblen gjør at man ikke ser innhold som utfordrer egne synspunkter.' },
    { term: 'Polarisering', definition: 'At meninger i samfunnet beveger seg mot ytterpunktene, og at avstanden mellom ulike grupper øker. Politisk polarisering innebærer at folk i økende grad ser motparten som fiende fremfor meningsmotstander, og at kompromiss blir vanskeligere.' },
    { term: 'Algoritme', definition: 'I sosiale medier-kontekst: De matematiske reglene som bestemmer hvilket innhold du ser i feeden din. Algoritmene prioriterer innhold som skaper engasjement (likes, kommentarer, delinger), noe som ofte favoriserer emosjonelt, kontroversielt eller polariserende innhold.' },
    { term: 'Desinformasjon', definition: 'Falsk eller villedende informasjon som spres bevisst for å påvirke meninger, skape forvirring eller undergrave tillit. Skiller seg fra feilinformasjon, som er ubevisst spredning av feil. Desinformasjon er et alvorlig demokratisk problem i sosiale medier.' },
  ],
  content: [
    {
      id: 'mi2-4-4-intro',
      type: 'text',
      content: `## Når algoritmene setter dagsordenen

Sosiale medier har fundamentalt endret hvordan politisk debatt foregår. Facebook, Instagram, TikTok, X og YouTube er blitt sentrale arenaer for politisk kommunikasjon. Men disse plattformene er ikke nøytrale formidlere - de styres av algoritmer som bestemmer hva vi ser, og disse algoritmene har konsekvenser for demokratiet.

I dette kapittelet skal du lære:
- Hva filterbobler og ekkokamre er, og hvordan de oppstår
- Hvordan algoritmer påvirker politisk debatt
- Hva polarisering er og hvilken rolle sosiale medier spiller
- Hvordan desinformasjon truer demokratiet`,
    },
    {
      id: 'mi2-4-4-def-1',
      type: 'definition',
      title: 'Filterboble',
      content: `En **filterboble** er et personalisert informasjonsmiljø som oppstår når algoritmer filtrerer innhold basert på brukerens tidligere adferd. Begrepet ble innført av internettaktivist Eli Pariser i boken *The Filter Bubble* (2011). Pariser viste at Google, Facebook og andre plattformer gir ulike brukere ulikt innhold basert på deres søkehistorikk, klikkadferd og sosiale nettverk. Resultatet er at vi lever i personaliserte informasjonsbobler der vi ikke ser hele bildet, men bare det algoritmene tror vi vil engasjere oss i. Filterboblen er problematisk fordi den kan snevre inn vårt verdensbilde uten at vi er klar over det.`,
    },
    {
      id: 'mi2-4-4-text-1',
      type: 'text',
      content: `### Hvordan algoritmene former debatten

Sosiale medier-algoritmer er designet for å holde brukerne på plattformen lengst mulig, fordi det genererer annonseinntekter. For å oppnå dette prioriterer algoritmene innhold som skaper *engasjement*:

**Hva algoritmene belønner:**
- Innhold som vekker sterke følelser (sinne, opprørthet, begeistring)
- Kontroversielle meninger som genererer debatt (kommentarer)
- Innhold som deles videre (viralitet)
- Innhold som matcher brukerens tidligere preferanser

**Konsekvenser for politisk debatt:**
- Provoserende og polariserende innlegg får mer synlighet enn nyanserte analyser
- Komplekse saker forenkles til korte, emosjonelle budskap
- Nyanser og kompromisser er «algoritmisk ulønnsomt»
- Ekstreme stemmer kan få uforholdsmessig stor synlighet

**Ekkokammereffekten:**
Når algoritmene gir oss innhold vi allerede er enige i, og vi i tillegg velger å følge likesinnede, oppstår ekkokamre. I et ekkokammer:
- Møter vi hovedsakelig synspunkter som bekrefter våre egne
- Blir vi sjelden utfordret av motargumenter
- Kan moderate synspunkter radikaliseres fordi vi aldri møter motstand
- Utvikler vi et forvrengt bilde av hva «folk flest» mener`,
    },
    {
      id: 'mi2-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Ekkokamre i praksis',
      problem: 'Hvordan kan ekkokamre oppstå rundt en politisk sak som innvandring?',
      solution: `**Scenario: To personer med ulikt syn på innvandring**

**Person A (restriktiv):**
- Følger sider og profiler som er kritiske til innvandring
- Algoritmene viser stadig mer innhold om problemer knyttet til innvandring
- Kommentarfeltene er fulle av folk som deler samme synspunkt
- Nyheter om vellykkede integreringsprosjekter vises aldri i feeden
- Person A tror at «alle» er enige i at innvandring er et problem

**Person B (liberal):**
- Følger sider og profiler som er positive til mangfold og inkludering
- Algoritmene viser innhold om vellykkede integrering og kulturelt mangfold
- Kommentarfeltene er fulle av folk som feirer mangfold
- Nyheter om integreringsutfordringer vises sjelden i feeden
- Person B tror at «alle» er for en åpen innvandringspolitikk

**Resultat:** Begge lever i sin egen virkelighetsboble. Når de møtes i en diskusjon, forstår de ikke hverandres perspektiv fordi de har helt forskjellig informasjonsgrunnlag. Dette kan føre til fiendtlighet, misforståelser og manglende evne til kompromiss.

**Viktig:** Forskningen er delt om hvor sterke ekkokammereffektene faktisk er. Mange mennesker eksponeres fortsatt for ulike synspunkter, men tendensen til informasjonsfiltrering er reell og bekymringsfull.`,
    },
    {
      id: 'mi2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hva er en filterboble?',
        options: [
          { id: 'a', text: 'Et verktøy for å beskytte barn mot skadelig innhold på nett', isCorrect: false },
          { id: 'b', text: 'Et personalisert informasjonsmiljø der algoritmer filtrerer innhold basert på brukerens adferd', isCorrect: true },
          { id: 'c', text: 'En bevisst strategi fra politiske partier for å nå velgere', isCorrect: false },
          { id: 'd', text: 'Et annet ord for sensur av politisk innhold i sosiale medier', isCorrect: false },
        ],
        solution: 'En filterboble er et personalisert informasjonsmiljø som oppstår når algoritmer filtrerer innhold basert på brukerens tidligere adferd. Begrepet ble innført av Eli Pariser og beskriver hvordan vi kan få et innsnevret informasjonsbilde uten å være klar over det.',
      },
    },
    {
      id: 'mi2-4-4-def-2',
      type: 'definition',
      title: 'Polarisering',
      content: `**Polarisering** betyr at meninger i samfunnet beveger seg mot ytterpunktene, og at avstanden mellom ulike grupper øker. Politisk polarisering kan deles inn i *sakspolarisering* (uenighet om konkrete politiske saker øker) og *affektiv polarisering* (folk utvikler stadig sterkere negative følelser overfor dem med andre meninger). Affektiv polarisering anses som spesielt farlig for demokratiet fordi den gjør det vanskelig å se motparten som en legitim meningsmotstander. I stedet betraktes motparten som en fiende som må bekjempes.`,
    },
    {
      id: 'mi2-4-4-text-2',
      type: 'text',
      content: `### Desinformasjon og demokratisk tillit

Sosiale medier har gjort det enklere å spre falsk og villedende informasjon. Desinformasjon er en av de største truslene mot demokratiet i vår tid:

**Typer falsk informasjon:**
- **Desinformasjon:** Bevisst falsk eller villedende informasjon spredd for å påvirke
- **Feilinformasjon:** Ubevisst spredning av feil (deling uten å sjekke fakta)
- **Manipulert innhold:** Ekte innhold tatt ut av kontekst eller endret (deepfakes)

**Hvorfor spres desinformasjon effektivt i sosiale medier?**
- Falske nyheter er ofte mer engasjerende enn sanne (overraskende, provoserende)
- Algoritmene belønner engasjement, uavhengig av om innholdet er sant
- Det er lett å opprette falske profiler og nettverk
- Deling skjer raskere enn faktasjekking
- Bekreftelsesskjevhet gjør at vi deler innhold vi allerede er enige i

**Konsekvenser for demokratiet:**
- Velgere kan ta beslutninger basert på feil informasjon
- Tilliten til medier, politikere og institusjoner undergraves
- Det blir vanskeligere å skille fakta fra fiksjon
- Samfunnets felles kunnskapsgrunnlag forvitrer

**Tiltak mot desinformasjon:**
- Faktasjekk-tjenester (f.eks. Faktisk.no i Norge)
- Mediepedagogikk og kritisk mediekompetanse
- Plattformenes ansvar for innholdsmoderering
- Lovgivning og regulering av sosiale medier`,
    },
    {
      id: 'mi2-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Faktisk.no og faktasjekking',
      content: `**Hva er Faktisk.no?**
Faktisk.no er Norges første uavhengige faktasjekker, opprettet i 2017 av VG, Dagbladet, NRK og TV 2. Tjenesten sjekker påstander fra politikere, organisasjoner og sosiale medier.

**Slik jobber de:**
1. Identifiserer påstander som spres bredt og har samfunnsbetydning
2. Undersøker kildematerialet grundig
3. Vurderer påstanden på en skala: helt sant, delvis sant, delvis feil, helt feil
4. Publiserer en detaljert gjennomgang der de viser sin metode

**Eksempel på faktasjekk:**
Under en valgkamp hevdet en politiker at «kriminaliteten har eksplodert de siste fire årene». Faktisk.no undersøkte kriminalitetsstatistikken og fant at den totale kriminaliteten hadde gått ned, men at noen typer kriminalitet (som svindel) hadde økt. Påstanden ble vurdert som «delvis feil».

**Betydning for demokratiet:**
Faktasjekking er et viktig verktøy for å holde den offentlige debatten faktabasert. Men faktasjekking har også begrensninger: Den når sjelden de som allerede har delt feilinformasjonen, og noen misforstår faktasjekking som sensur.`,
    },
    {
      id: 'mi2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom desinformasjon og feilinformasjon?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell, begge begrepene betyr falske nyheter', isCorrect: false },
          { id: 'b', text: 'Desinformasjon spres bevisst for å villede, feilinformasjon spres ubevisst', isCorrect: true },
          { id: 'c', text: 'Desinformasjon finnes bare i sosiale medier, feilinformasjon bare i tradisjonelle medier', isCorrect: false },
          { id: 'd', text: 'Feilinformasjon er mer skadelig enn desinformasjon', isCorrect: false },
        ],
        solution: 'Desinformasjon er falsk eller villedende informasjon som spres bevisst for å påvirke, mens feilinformasjon er ubevisst spredning av feil. Intensjonen er den avgjørende forskjellen: Desinformasjon er strategisk manipulasjon, feilinformasjon er uforsiktighet.',
      },
    },
    {
      id: 'mi2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        task: 'Forklar hva et ekkokammer er og hvordan det oppstår i sosiale medier. Gi et eksempel fra din egen erfaring eller noe du har observert.',
        hints: ['Tenk på hvordan algoritmer og egne valg former feeden din', 'Vurder om du noen gang har opplevd å bli overrasket av hva folk mener om en sak'],
        solution: 'Et ekkokammer er et lukket informasjonsmiljø der man hovedsakelig møter synspunkter som bekrefter egne oppfatninger. I sosiale medier oppstår ekkokamre gjennom: 1) Algoritmer som viser mer av det du liker og engasjerer deg i. 2) Egne valg om hvem du følger og hva du liker. 3) Sosiale nettverk som ofte består av likesinnede. Eksempel: En som er sterkt engasjert i miljøsaken og bare følger miljøorganisasjoner, klimaaktivister og grønne politikere, vil få en feed full av klimainnhold. Personen kan utvikle en oppfatning om at alle er opptatt av klima og at det er bred enighet om radikale tiltak, uten å se perspektivene til dem som er bekymret for arbeidsplasser eller energisikkerhet.',
      },
    },
    {
      id: 'mi2-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Filterbobler** oppstår når algoritmer personaliserer informasjonen vi mottar
- **Ekkokamre** er lukkede informasjonsmiljøer der vi bare møter bekreftende synspunkter
- **Algoritmer** i sosiale medier prioriterer engasjement, noe som kan favorisere polariserende innhold
- **Polarisering** innebærer at meninger beveger seg mot ytterpunktene og avstanden mellom grupper øker
- **Desinformasjon** er en alvorlig trussel mot demokratiet og spres effektivt i sosiale medier`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om sosiale medier fører til mer polarisering i samfunnet. Bruk begreper som ekkokammer, filterboble og algoritmer i svaret ditt, og ta stilling til om det finnes mottiltak.',
        hints: ['Husk at forskningen er delt om ekkokammereffektens styrke', 'Vurder både sosiale mediers rolle og andre faktorer som bidrar til polarisering'],
        solution: 'For at sosiale medier fører til polarisering taler: Algoritmene prioriterer engasjerende innhold, som ofte er kontroversielt og provoserende. Ekkokamre kan forsterke eksisterende synspunkter og radikalisere moderate meninger. Filterbobler gir folk ulikt informasjonsgrunnlag, noe som vanskeliggjør felles forståelse. Anonymitet senker terskelen for aggressive ytringer. Mot at sosiale medier er hovedårsaken: Polarisering fantes før sosiale medier. Forskning viser at mange eksponeres for ulike synspunkter også i sosiale medier. Andre faktorer som økende ulikhet og politisk retorikk bidrar. Mottiltak: Mediepedagogikk for å styrke kritisk mediekompetanse. Regulering av algoritmer (f.eks. EUs Digital Services Act). Faktasjekking og kildebevissthet. Plattformenes ansvar for innholdsmoderering. Bevisst søk etter mangfoldige informasjonskilder. Konklusjon: Sosiale medier er trolig ikke alene årsaken til polarisering, men de forsterker og akselererer den gjennom algoritmisk belønning av provoserende innhold.',
      },
    },
    {
      id: 'mi2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser et eksempel på desinformasjon du har sett eller lest om. Forklar hva som var feil, hvem som spredte det og hvorfor, og vurder hvilke konsekvenser det hadde eller kunne hatt.',
        hints: ['Eksempler kan være fra valgkamper, pandemiperioden eller internasjonal politikk', 'Bruk begrepene desinformasjon, feilinformasjon og bekreftelsesskjevhet'],
        solution: 'Et godt svar velger et konkret eksempel og analyserer det grundig. Eksempel: Under koronapandemien ble det spredt desinformasjon om at 5G-master forårsaket covid-19. Hva var feil: Det finnes ingen vitenskapelig sammenheng mellom 5G-teknologi og virus. Hvem spredte det: Konspirasjonsteoretikere i sosiale medier, noen influencere, og det ble forsterket av algoritmer. Hvorfor: Bekreftelsesskjevhet (folk som allerede var skeptiske til teknologi og myndigheter), frykt for det ukjente, og mistillit til eksperter. Konsekvenser: Brannangrep mot 5G-master i flere land, økt vaksinemotstand, svekket tillit til helsemyndighetene, og vanskeliggjort pandemibekjempelse. Analyse: Eksempelet viser hvordan desinformasjon utnytter frykt og usikkerhet, spres via sosiale medier der algoritmene belønner sensasjonelt innhold, og kan ha konkrete, fysiske konsekvenser.',
      },
    },
    {
      id: 'mi2-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter om sosiale medier-selskaper bør reguleres strengere for å beskytte demokratiet. Vurder argumenter for og mot regulering, og drøft hvem som bør ha ansvaret for innholdet i sosiale medier.',
        hints: ['Tenk på ytringsfrihet vs. beskyttelse mot desinformasjon', 'Se på EUs Digital Services Act som et eksempel på regulering'],
        solution: 'For strengere regulering: Algoritmene belønner skadelig innhold uten at plattformene holdes ansvarlige. Desinformasjon truer demokratiske valg og folkehelsen. Private selskaper bør ikke ha uregulert makt over den offentlige samtalen. EUs Digital Services Act viser at regulering er mulig uten å undergrave ytringsfrihet. Mot strengere regulering: Regulering kan true ytringsfriheten dersom myndighetene definerer hva som er «tillatt» innhold. Regulering kan hemme innovasjon og konkurranse. Hvem skal bestemme hva som er «desinformasjon»? Risiko for overregulering og sensur. Hvem har ansvaret: Plattformene bør ha ansvar for algoritmer og systemisk spredning av skadelig innhold. Brukerne har ansvar for eget innhold. Myndighetene bør sette rammer gjennom lovgivning. Samfunnet (skole, foreldre) bør styrke mediekompetanse. Konklusjon: En balansert tilnærming med transparenskrav for algoritmer, ansvar for systematisk spredning av desinformasjon, og styrket mediepedagogikk er trolig den beste veien fremover.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Undersøkende journalistikk
// ============================================================================

export const CHAPTER_MEDIEINFO_2_4_5: TextbookChapter = {
  id: 'medieinfo-2-4-5',
  courseId: 'medieinfo-2',
  chapterNumber: '4.5',
  title: 'Undersøkende journalistikk',
  description: 'Gravejournalistikk, varslere og presseetikk. Du lærer om undersøkende journalistikk som metode, varslerens rolle, og etiske dilemmaer i gravejournalistikken.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte medienes rolle i demokratiet og analysere forholdet mellom medier, makt og politikk',
  ],
  keyTerms: [
    { term: 'Undersøkende journalistikk', definition: 'Journalistikk som bruker systematiske metoder for å avdekke forhold som noen ønsker å holde skjult. Også kalt gravejournalistikk. Kjennetegnes av grundig research, bruk av flere kilder, dokumentasjon og fokus på maktmisbruk og samfunnskritiske forhold.' },
    { term: 'Varsler', definition: 'En person som melder fra om kritikkverdige forhold i en virksomhet eller organisasjon de tilhører. Varslere er ofte avgjørende kilder for undersøkende journalister, men risikerer selv represalier som oppsigelse, trakassering eller utfrysing.' },
    { term: 'Kildevern', definition: 'Journalisters rett og plikt til å beskytte identiteten til anonyme kilder. Kildevernet er en forutsetning for at kilder tør å gi informasjon om kritikkverdige forhold. I Norge er kildevernet beskyttet av Vær Varsom-plakaten og rettspraksis.' },
    { term: 'Vær Varsom-plakaten', definition: 'Norsk pressens etiske regelverk, vedtatt av Norsk Presseforbund. Plakaten inneholder retningslinjer for god presseskikk, inkludert krav om saklighet, kildekritikk, kildevern, og hensynet til enkeltmennesker som omtales i mediene.' },
    { term: 'Allmenn interesse', definition: 'Et sentralt begrep i presseetikken som viser til at en sak har betydning for samfunnet som helhet. Undersøkende journalistikk begrunnes med allmenn interesse: Offentligheten har rett til å vite om maktmisbruk, korrupsjon og andre forhold som angår fellesskapet.' },
  ],
  content: [
    {
      id: 'mi2-4-5-intro',
      type: 'text',
      content: `## Journalistikk som avdekker sannheten

Undersøkende journalistikk er kanskje den viktigste formen for journalistikk i et demokrati. Det er journalister som bruker uker, måneder eller til og med år på å avdekke forhold som noen ønsker å holde skjult. Uten undersøkende journalister ville korrupsjon, maktmisbruk og urett i langt større grad forbli skjult for offentligheten.

I dette kapittelet skal du lære:
- Hva undersøkende journalistikk er og hvordan den utøves
- Hvilken rolle varslere spiller for journalistikken
- Hva kildevern betyr og hvorfor det er viktig
- Hvilke etiske dilemmaer undersøkende journalister møter`,
    },
    {
      id: 'mi2-4-5-def-1',
      type: 'definition',
      title: 'Undersøkende journalistikk',
      content: `**Undersøkende journalistikk** (gravejournalistikk) er systematisk journalistisk arbeid med mål om å avdekke forhold som noen ønsker å holde skjult, og som har betydning for offentligheten. Metoden kjennetegnes av: *grundig research* over lang tid, *bruk av flere uavhengige kilder* for å verifisere informasjon, *dokumentanalyse* (offentlige dokumenter, regnskapstall, registerdata), *kildebeskyttelse* av anonyme informanter, og *offentlighetens interesse* som begrunnelse for publisering. Undersøkende journalistikk er ressurskrevende og forutsetter at redaksjoner prioriterer tid og kompetanse til langvarige prosjekter.`,
    },
    {
      id: 'mi2-4-5-text-1',
      type: 'text',
      content: `### Hvordan arbeider undersøkende journalister?

Undersøkende journalistikk følger en systematisk metode som skiller seg fra daglig nyhetsjournalistikk:

**1. Idé og hypotese**
- Journalisten får et tips eller en idé om at noe er galt
- Formulerer en arbeidshypotese som skal undersøkes
- Vurderer om saken har tilstrekkelig allmenn interesse

**2. Research og dokumentinnsamling**
- Innhenter offentlige dokumenter (innsynsbegjæringer)
- Analyserer regnskapstall, registerdata og statistikk
- Kartlegger nettverk og forbindelser
- Bruker digitale verktøy for dataanalyse

**3. Kildearbeid**
- Kontakter kilder som kan bekrefte eller avkrefte hypotesen
- Bruker anonyme kilder der det er nødvendig
- Verifiserer informasjon gjennom flere uavhengige kilder
- Dokumenterer alt grundig

**4. Konfrontasjon**
- Den eller de som kritiseres, får mulighet til å svare (tilsvarsrett)
- Journalisten presenterer funnene og stiller direkte spørsmål
- Svarene inkluderes i den ferdige saken

**5. Publisering og oppfølging**
- Saken publiseres med solid dokumentasjon
- Reaksjoner fra myndigheter, politikere og offentligheten følges opp
- Nye opplysninger kan føre til oppfølgingssaker`,
    },
    {
      id: 'mi2-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Panama Papers',
      problem: 'Hva var Panama Papers, og hvorfor er saken et viktig eksempel på undersøkende journalistikk?',
      solution: `**Panama Papers (2016):**

**Hva skjedde:** En anonym varsler lekket 11,5 millioner dokumenter fra det panamanske advokatfirmaet Mossack Fonseca til den tyske avisen Süddeutsche Zeitung. Dokumentene avslørte hvordan verdens rike og mektige brukte skallselskaper i skatteparadiser for å skjule formuer og unngå skatt.

**Journalistisk metode:**
- **Internasjonalt samarbeid:** Over 370 journalister fra 80 land samarbeidet gjennom International Consortium of Investigative Journalists (ICIJ)
- **Dataanalyse:** Journalistene brukte avanserte dataverktøy for å analysere millioner av dokumenter
- **Grundig verifisering:** Hvert funn ble verifisert gjennom flere kilder og krysssjekket mot offentlige registre
- **Kildevern:** Varslerens identitet er fortsatt ukjent

**Konsekvenser:**
- Islands statsminister trakk seg etter avsløringene
- Milliarder av kroner i gjemt formue ble avdekket
- Flere land innførte strengere regler for skatteparadiser
- Saken førte til straffeforfølgelse i mange land

**Betydning:** Panama Papers viser kraften i undersøkende journalistikk: En enkelt varsler og hundrevis av journalister kunne avdekke globalt maktmisbruk som ingen enkeltstats myndigheter hadde klart å avdekke alene.`,
    },
    {
      id: 'mi2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner undersøkende journalistikk?',
        options: [
          { id: 'a', text: 'Raske nyhetssaker som publiseres samme dag som hendelsen', isCorrect: false },
          { id: 'b', text: 'Systematisk research over lang tid for å avdekke skjulte forhold av allmenn interesse', isCorrect: true },
          { id: 'c', text: 'Journalistikk som bare bruker offentlig tilgjengelige kilder', isCorrect: false },
          { id: 'd', text: 'Meningsjournalistikk der journalisten fremmer sine egne synspunkter', isCorrect: false },
        ],
        solution: 'Undersøkende journalistikk kjennetegnes av systematisk research over lang tid, bruk av flere uavhengige kilder, dokumentanalyse og fokus på å avdekke skjulte forhold som har allmenn interesse. Det er den mest ressurskrevende formen for journalistikk.',
      },
    },
    {
      id: 'mi2-4-5-def-2',
      type: 'definition',
      title: 'Varsler',
      content: `En **varsler** (whistleblower) er en person som melder fra om kritikkverdige, ulovlige eller uetiske forhold i en virksomhet eller organisasjon de tilhører. Varslere er ofte avgjørende for undersøkende journalistikk fordi de har innsideinformasjon som ellers ville forblitt skjult. Å varsle innebærer stor personlig risiko: Mange varslere har opplevd oppsigelse, utfrysing, trakassering og psykisk belastning. I Norge ble varslervernet styrket gjennom arbeidsmiljøloven, som gir ansatte rett til å varsle om kritikkverdige forhold og beskyttelse mot gjengjeldelse.`,
    },
    {
      id: 'mi2-4-5-text-2',
      type: 'text',
      content: `### Presseetikk og dilemmaer i undersøkende journalistikk

Undersøkende journalistikk reiser en rekke etiske spørsmål som journalister må forholde seg til:

**Kildevern vs. rettsvesenet**
- Journalister har plikt til å beskytte anonyme kilders identitet
- Politiet kan ønske å vite hvem som har lekket informasjon
- Kildevernet er en forutsetning for at kilder tør å snakke
- I Norge er kildevernet sterkt, men ikke absolutt i rettspraksis

**Allmenn interesse vs. personvern**
- Avsløringer kan skade enkeltpersoner og deres familier
- Journalisten må vurdere om offentlighetens behov for informasjon veier tyngre
- Barn og andre sårbare grupper skal skjermes
- Detaljnivå og identifisering må vurderes nøye

**Metodebruk**
- Er det forsvarlig å bruke skjult kamera eller mikrofon?
- Kan journalisten utgi seg for å være noen andre for å få informasjon?
- Hvor langt kan man gå for å avsløre en sak?
- Vær Varsom-plakaten gir retningslinjer, men skjønn er nødvendig

**Publiseringstidspunkt**
- Skal saken publiseres før eller etter at myndighetene har fått undersøke?
- Kan publisering skade en pågående etterforskning?
- Hvem skal varsles før publisering, og når?

**Vær Varsom-plakatens sentrale prinsipper:**
- Saklighet og omtanke i innhold og presentasjon
- Kildebredde og kildekritikk
- Tilsvarsrett for dem som utsettes for kritikk
- Varsomhet med bruk av navn og bilde
- Respekt for privatlivets fred`,
    },
    {
      id: 'mi2-4-5-example-2',
      type: 'example',
      title: 'Eksempel: Edward Snowden - varsler eller forræder?',
      content: `**Bakgrunn:** I 2013 lekket tidligere NSA-ansatt Edward Snowden tusenvis av hemmelige dokumenter til journalister i The Guardian og The Washington Post. Dokumentene avslørte at USAs etterretningstjeneste NSA drev massiv, systematisk overvåkning av millioner av menneskers kommunikasjon, inkludert allierte lands ledere.

**Argumenter for at Snowden er en varsler:**
- Han avslørte ulovlig masseovervåkning som krenket borgernes rettigheter
- Offentligheten hadde rett til å vite om overvåkningen
- Avsløringene førte til viktige reformer av overvåkningslovgivningen
- Han handlet ut fra samvittighet, ikke personlig vinning

**Argumenter for at Snowden er en forræder:**
- Han brøt loven og sin taushetserklæring
- Lekkasjen kunne sette etterretningsagenter og operasjoner i fare
- Han flyktet til Russland, en geopolitisk rival
- Det fantes interne kanaler for varsling han kunne brukt

**Journalistisk analyse:**
Saken illustrerer spenningen mellom statshemmeligheter og offentlighetens rett til å vite. Journalistene som mottok dokumentene måtte vurdere hva som burde publiseres og hva som kunne sette liv i fare. De samarbeidet med myndighetene om å fjerne sensitiv informasjon, men publiserte kjernen i avsløringene fordi de mente allmennheten hadde rett til å vite.

**Spørsmål til refleksjon:** Var det riktig av journalistene å publisere Snowdens dokumenter? Har samfunnet tjent på avsløringene?`,
    },
    {
      id: 'mi2-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-5-ex-2',
        number: '4.5.2',
        type: 'multiple-choice',
        task: 'Hva er kildevern?',
        options: [
          { id: 'a', text: 'Retten til å publisere informasjon uten å oppgi kilder', isCorrect: false },
          { id: 'b', text: 'Journalisters rett og plikt til å beskytte identiteten til anonyme kilder', isCorrect: true },
          { id: 'c', text: 'En ordning der kilder betales for informasjon', isCorrect: false },
          { id: 'd', text: 'Et forbud mot å bruke anonyme kilder i journalistikk', isCorrect: false },
        ],
        solution: 'Kildevern er journalisters rett og plikt til å beskytte identiteten til anonyme kilder. Kildevernet er en forutsetning for at kilder tør å gi informasjon om kritikkverdige forhold, og er beskyttet av Vær Varsom-plakaten og norsk rettspraksis.',
      },
    },
    {
      id: 'mi2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        task: 'Forklar hvorfor varslere er viktige for undersøkende journalistikk, og diskuter hvilke utfordringer varslere møter. Bruk gjerne et konkret eksempel.',
        hints: ['Tenk på hva som ville skjedd uten varslere', 'Vurder personlig risiko vs. samfunnsnytte'],
        solution: 'Varslere er viktige fordi de har innsideinformasjon som ellers ville forblitt skjult. Uten varslere som Daniel Ellsberg (Pentagon Papers), Edward Snowden (NSA-overvåkning) eller den anonyme Panama Papers-kilden ville alvorlig maktmisbruk aldri blitt kjent for offentligheten. Utfordringer varslere møter: Oppsigelse eller degradering på arbeidsplassen, utfrysing og trakassering fra kolleger og ledere, psykisk belastning og stress, økonomiske konsekvenser, rettslige trusler, og i noen land fysisk fare. I Norge gir arbeidsmiljøloven varslere beskyttelse mot gjengjeldelse, men studier viser at mange varslere likevel opplever negative konsekvenser. Dilemmaet for samfunnet er å balansere behovet for åpenhet og ansvarlighet med respekt for at organisasjoner trenger et visst nivå av konfidensialitet.',
      },
    },
    {
      id: 'mi2-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Undersøkende journalistikk** bruker systematiske metoder for å avdekke skjulte forhold av allmenn interesse
- **Varslere** er ofte avgjørende kilder, men risikerer personlige konsekvenser
- **Kildevern** er en forutsetning for at kilder tør å dele informasjon
- **Vær Varsom-plakaten** gir etiske retningslinjer for norsk presse
- Undersøkende journalistikk reiser dilemmaer mellom allmenn interesse og personvern, kildevern og rettsvesen`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi2-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om undersøkende journalistikk er truet i dagens medielandskap. Vurder økonomiske, teknologiske og politiske faktorer som påvirker vilkårene for gravejournalistikk.',
        hints: ['Tenk på redaksjonelle nedbemanninger, finansieringsmodeller og press fra politikere', 'Vurder også nye muligheter som datajournalistikk og internasjonalt samarbeid'],
        solution: 'Trusler mot undersøkende journalistikk: Økonomisk: Fallende inntekter fører til nedbemanninger, og undersøkende journalistikk er dyrt og tidkrevende. Mange redaksjoner har ikke råd til langvarige graveprosjekter. Teknologisk: Digitalisering har endret forretningsmodellen, og klikk-kulturen favoriserer hurtig produksjon over grundig research. Politisk: Populistiske politikere angriper medier som «fake news», og i noen land trues journalister fysisk. Nye muligheter: Datajournalistikk gir tilgang til store datamengder. Internasjonalt samarbeid (ICIJ) gjør det mulig å undersøke globale saker. Crowdfunding og leserstøtte finansierer graveprosjekter. Digitale verktøy effektiviserer research. I Norge: Stiftelsen for en kritisk og undersøkende presse (SKUP) styrker gravejournalistikken, og mediestøtten bidrar til at ulike redaksjoner kan drive undersøkende arbeid. Konklusjon: Undersøkende journalistikk er under press, men nye verktøy og samarbeidsformer gir også nye muligheter.',
      },
    },
    {
      id: 'mi2-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en kjent norsk eller internasjonal undersøkende journalistisk sak. Beskriv saken kort, analyser hvilke journalistiske metoder som ble brukt, og vurder hvilke konsekvenser avsløringene fikk.',
        hints: ['Eksempler: Panama Papers, Tolga-saken, Watergate, Metoo-avsløringene', 'Vurder både umiddelbare og langsiktige konsekvenser'],
        solution: 'Et godt svar velger en konkret sak og analyserer den grundig. Eksempel: Nav-skandalen (2019), avslørt gjennom kombinasjon av juridisk arbeid og journalistikk. Sak: Minst 80 personer ble uriktig dømt for trygdesvindel fordi Nav og rettsvesenet feilaktig mente at EØS-reglene ikke ga rett til å ta med sykepenger og arbeidsavklaringspenger til andre EØS-land. Metoder: Journalistisk gransking av domstolsdokumenter, intervjuer med ofre og jurister, analyse av EØS-regelverket. Konsekvenser: Umiddelbare: Dommer ble gjenopptatt, feilaktig dømte ble frifunnet, Nav-direktøren gikk av. Langsiktige: Granskingsutvalg ble nedsatt (NOU 2020:9), tilliten til Nav og rettsvesenet ble svekket, og saken førte til debatt om EØS-rettens stilling i norsk forvaltning. Analyse: Saken viser at undersøkende journalistikk kan avdekke systemsvikt som rammer sårbare borgere.',
      },
    },
    {
      id: 'mi2-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi2-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter etiske dilemmaer i undersøkende journalistikk med utgangspunkt i Vær Varsom-plakaten. Bruk et konkret eksempel for å illustrere hvordan journalisten må veie allmenn interesse mot hensynet til enkeltmennesker.',
        hints: ['Tenk på publisering av navn og bilde, bruk av anonyme kilder, skjulte metoder', 'Vurder hvordan tilsvarsretten fungerer i praksis'],
        solution: 'Vær Varsom-plakaten krever at journalister viser omtanke i innhold og presentasjon, praktiserer kildekritikk, gir tilsvarsrett og respekterer privatlivets fred. Eksempel: En undersøkende journalist avdekker at en ordfører har brukt kommunale midler til private formål. Dilemma 1: Identifisering - Allmenn interesse tilsier at offentligheten bør vite, men identifisering rammer også ordførerens familie og barn. Vurdering: Ordføreren er en offentlig person som forvalter fellesskapets midler, og identifisering er forsvarlig. Dilemma 2: Tidspunkt - Skal saken publiseres mens politiet etterforsker, eller vente? Tidlig publisering kan sikre offentlig innsyn, men kan også forstyrre etterforskningen. Dilemma 3: Anonyme kilder - Mye av informasjonen kommer fra en anonym kommuneansatt som risikerer jobben. Kildevernet er avgjørende, men leserne kan ikke verifisere kildens troverdighet. Konklusjon: Det finnes sjelden enkle svar, og journalisten må vurdere hvert tilfelle konkret med utgangspunkt i Vær Varsom-plakatens prinsipper.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_2_DEL4_CHAPTERS = [
  CHAPTER_MEDIEINFO_2_4_1,
  CHAPTER_MEDIEINFO_2_4_2,
  CHAPTER_MEDIEINFO_2_4_3,
  CHAPTER_MEDIEINFO_2_4_4,
  CHAPTER_MEDIEINFO_2_4_5,
];

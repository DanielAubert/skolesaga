/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2) - Del 2: Mediehistorie
 *
 * Kapittel 2.1–2.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for sentrale utviklingstrekk i mediehistorien
 * - drøfte hvordan teknologisk utvikling har påvirket medienes rolle i samfunnet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Fra trykkekunst til massemedier
// ============================================================================

export const CHAPTER_MEDIEINFO_1_2_1: TextbookChapter = {
  id: 'medieinfo-1-2-1',
  courseId: 'medieinfo-1',
  chapterNumber: '2.1',
  title: 'Fra trykkekunst til massemedier',
  description: 'En gjennomgang av medienes tidlige historie, fra Gutenbergs trykkpresse til de første massemedienes fremvekst, med vekt på Habermas sitt begrep om borgerlig offentlighet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for sentrale utviklingstrekk i mediehistorien',
    'drøfte hvordan teknologisk utvikling har påvirket medienes rolle i samfunnet',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi-2-1-intro',
      type: 'text',
      content: `## Fra trykkekunst til massemedier

Tenk deg en verden uten aviser, bøker eller internett. Før Johannes Gutenberg oppfant trykkpressen rundt 1440, var skriftlig informasjon forbeholdt en liten elite. Bøker ble kopiert for hånd av munker, og det kunne ta måneder å lage en eneste bok. Gutenbergs oppfinnelse endret alt - og la grunnlaget for det vi i dag kaller massemedier.

I dette kapittelet skal du lære:
- Hvordan trykkpressen revolusjonerte spredningen av informasjon
- Hva de første avisene betydde for samfunnet
- Hva Habermas mener med «borgerlig offentlighet»
- Hvordan massemediene vokste frem på 1800- og 1900-tallet`,
    },
    {
      id: 'mi-2-1-def-1',
      type: 'definition',
      title: 'Trykkpressen og dens betydning',
      content: `**Gutenbergs trykkpresse** (ca. 1440) var en maskin som brukte bevegelige typer i metall til å trykke tekst på papir. For første gang kunne man produsere mange eksemplarer av en tekst raskt og billig. Det første store verket var **Gutenberg-bibelen** (1455). Trykkpressen regnes som en av historiens viktigste oppfinnelser fordi den demokratiserte tilgang til kunnskap og la grunnlaget for den moderne offentligheten.`,
    },
    {
      id: 'mi-2-1-text-1',
      type: 'text',
      content: `### Fra håndskrift til masseproduksjon

Trykkpressen fikk enorme konsekvenser:

**Reformasjonen (1517):** Martin Luther brukte trykkpressen til å spre sine 95 teser mot den katolske kirken. Uten trykkpressen hadde reformasjonen neppe spredd seg så raskt over Europa. Luther kalte trykkpressen «Guds høyeste og ytterste gave».

**Vitenskapelig revolusjon:** Forskere kunne dele funn med hverandre gjennom trykte bøker og tidsskrifter. Kopernikus, Galilei og Newton nådde et langt større publikum enn de ville gjort med håndskrevne tekster.

**De første avisene:** Tidlige nyhetsblad dukket opp på 1600-tallet i tyske byer. Norges første avis, *Norske Intelligenz-Seddeler*, ble grunnlagt i 1763. Avisene ble raskt et viktig medium for informasjon, debatt og maktutøvelse.

| Periode | Utvikling |
|---------|-----------|
| Ca. 1440 | Gutenbergs trykkpresse |
| 1500-tallet | Reformasjonen spres via trykte skrifter |
| 1600-tallet | De første avisene i Europa |
| 1763 | Norges første avis |
| 1800-tallet | Masseproduksjon av aviser og bøker |`,
    },
    {
      id: 'mi-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Trykkpressens betydning for maktbalansen',
      problem: 'Før trykkpressen kontrollerte kirken og kongemakten stort sett all skriftlig informasjon. Hvordan endret trykkpressen denne maktbalansen?',
      solution: `**Før trykkpressen:**
- Kirken og kongemakten hadde monopol på informasjon
- Bøker var svært dyre og bare tilgjengelige for eliten
- Folk flest var avhengige av prester og autoriteter for kunnskap

**Etter trykkpressen:**
- Informasjon ble billigere og tilgjengelig for flere
- Kritiske stemmer (som Luther) kunne nå massene direkte
- Befolkningen fikk tilgang til alternative perspektiver
- Makthaverne mistet kontrollen over informasjonsflyten

Trykkpressen var altså ikke bare en teknologisk nyvinning - den var et verktøy for demokratisering av kunnskap, på samme måte som internett er det i vår tid.`,
    },
    {
      id: 'mi-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Hvorfor regnes Gutenbergs trykkpresse som en av historiens viktigste oppfinnelser?',
        options: [
          { id: 'a', text: 'Fordi den gjorde det mulig å masseprodusere tekst og demokratisere tilgang til kunnskap', isCorrect: true },
          { id: 'b', text: 'Fordi den ble brukt til å trykke penger', isCorrect: false },
          { id: 'c', text: 'Fordi den var den første maskinen som brukte elektrisitet', isCorrect: false },
          { id: 'd', text: 'Fordi den ble brukt til å lage de første avisene i Norge', isCorrect: false },
        ],
        solution: 'Trykkpressen var revolusjonerende fordi den for første gang muliggjorde masseproduksjon av tekst. Det betydde at kunnskap ikke lenger var forbeholdt en liten elite, men kunne nå mange. Dette la grunnlaget for reformasjonen, den vitenskapelige revolusjonen og fremveksten av aviser.',
      },
    },
    {
      id: 'mi-2-1-def-2',
      type: 'definition',
      title: 'Borgerlig offentlighet (Habermas)',
      content: `Den tyske filosofen og sosiologen **Jürgen Habermas** beskrev i verket *Borgerlig offentlighet* (1962) hvordan det på 1700-tallet oppstod en ny sfære mellom staten og privatlivet - den **borgerlige offentligheten**. Her kunne borgere møtes i kaffehus, salonger og aviser for å diskutere politikk og samfunnsspørsmål. Offentligheten var ideelt sett basert på fornuftig argumentasjon, der det beste argumentet - ikke rang eller makt - skulle vinne.`,
    },
    {
      id: 'mi-2-1-text-2',
      type: 'text',
      content: `### Habermas og offentlighetens fremvekst

Habermas sin teori forklarer hvordan mediene ble avgjørende for demokratiet:

**Kaffehusene på 1700-tallet:** I London, Paris og andre europeiske byer oppstod kaffehus der menn fra borgerskapet samlet seg for å diskutere nyheter og politikk. Avisene var sentrale i disse diskusjonene - de ga borgerne et felles informasjonsgrunnlag.

**Idealet om rasjonell debatt:** I offentligheten gjaldt argumentets kraft, ikke personens status. En kjøpmann kunne utfordre en adelsmann dersom argumentene var gode nok. Dette var et radikalt nytt prinsipp.

**Kritikk av Habermas:**
- Offentligheten var begrenset til velstående menn - kvinner, arbeidere og andre grupper var utelukket
- I praksis var maktforhold aldri helt fraværende
- Habermas beskrev et ideal, ikke nødvendigvis virkeligheten

**Avisenes rolle:** Avisene ble bindeleddet mellom borgerne og offentligheten. De informerte om politiske beslutninger, ga rom for debatt og fungerte som en «vaktbikkje» overfor makthaverne. Denne funksjonen kalles ofte medienes **fjerde statsmakt**-rolle.`,
    },
    {
      id: 'mi-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        task: 'Forklar hva Habermas mener med «borgerlig offentlighet» og diskuter én styrke og én svakhet ved hans teori.',
        hints: ['Tenk på hvem som faktisk hadde tilgang til offentligheten på 1700-tallet'],
        solution: 'Borgerlig offentlighet er en sfære mellom staten og privatlivet der borgere kunne diskutere samfunnsspørsmål basert på fornuftige argumenter. Styrke: Teorien viser hvordan medier og frie diskusjoner er avgjørende for demokratiet. Svakhet: Habermas sin offentlighet var i praksis begrenset til velstående menn - kvinner, arbeidere og andre grupper var ekskludert, noe som svekker idealet om likeverdig debatt.',
      },
    },
    {
      id: 'mi-2-1-text-3',
      type: 'text',
      content: `### Massemedienes fremvekst

På 1800-tallet skjedde det en medierevolusjon:

**Pennypressene (1830-tallet):** I USA og Europa dukket det opp billige aviser som kostet bare én penny. De nådde vanlige folk - ikke bare eliten. Avisene finansierte seg gjennom annonser i stedet for høye abonnementspriser.

**Telegrafen (1844):** Samuel Morses telegraf gjorde det mulig å sende nyheter over store avstander på sekunder i stedet for dager. Nyhetsbyråer som AP og Reuters ble grunnlagt for å samle og distribuere nyheter via telegrafen.

**Fotografiet:** Bilder ga avisene en helt ny dimensjon. Folk kunne nå se hva som skjedde i verden, ikke bare lese om det.

Disse nyvinningene skapte for første gang virkelige **massemedier** - medier som nådde et stort, bredt publikum. Mediene ble en stadig viktigere del av demokratiet, kulturen og dagliglivet.`,
    },
    {
      id: 'mi-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        task: 'Hva var det sentrale ved «pennypressene» på 1830-tallet?',
        options: [
          { id: 'a', text: 'De var statlig finansiert og kontrollert', isCorrect: false },
          { id: 'b', text: 'De var billige og nådde vanlige folk, finansiert gjennom annonser', isCorrect: true },
          { id: 'c', text: 'De ble bare distribuert til universiteter', isCorrect: false },
          { id: 'd', text: 'De trykket bare underholdningsstoff', isCorrect: false },
        ],
        solution: 'Pennypressene var billige aviser som kostet bare én penny, noe som gjorde dem tilgjengelige for vanlige folk. De finansierte seg gjennom annonseinntekter i stedet for høye abonnementspriser. Dette var starten på virkelige massemedier.',
      },
    },
    {
      id: 'mi-2-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Gutenbergs trykkpresse** (ca. 1440) revolusjonerte spredningen av informasjon og demokratiserte tilgang til kunnskap
- Trykkpressen muliggjorde reformasjonen, den vitenskapelige revolusjonen og de første avisene
- **Habermas** beskrev hvordan en «borgerlig offentlighet» vokste frem der borgere debatterte fritt
- **Pennypressene** på 1830-tallet skapte de første virkelige massemedienes gjennombrudd

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Trykkpressen | Gutenbergs oppfinnelse som muliggjorde masseproduksjon av tekst |
| Borgerlig offentlighet | Habermas sitt begrep for en sfære for fri, rasjonell debatt |
| Pennypressen | Billige massemedier på 1830-tallet |
| Fjerde statsmakt | Medienes rolle som vaktbikkje overfor makthaverne |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Sammenlign trykkpressens betydning på 1400-tallet med internettets betydning i dag. Hvilke likheter og forskjeller finner du?',
        hints: ['Tenk på demokratisering av informasjon, maktforskyvning og nye utfordringer'],
        solution: 'Likheter: Begge demokratiserte tilgang til informasjon, utfordret etablerte maktstrukturer og gjorde det mulig for enkeltpersoner å nå et stort publikum. Forskjeller: Internett er mye raskere og mer globalt, alle kan publisere (ikke bare de med trykkpresse), og internett har skapt nye utfordringer som desinformasjon, overvåking og algoritmestyrt innhold som trykkpressen ikke hadde.',
      },
    },
    {
      id: 'mi-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-2-1-ex-5',
        number: '2.1.5',
        type: 'multiple-choice',
        task: 'Hva er en sentral kritikk av Habermas sitt begrep om borgerlig offentlighet?',
        options: [
          { id: 'a', text: 'At offentligheten aldri eksisterte i praksis', isCorrect: false },
          { id: 'b', text: 'At den bare inkluderte velstående menn og ekskluderte kvinner og arbeidere', isCorrect: true },
          { id: 'c', text: 'At avisene ikke spilte noen rolle i offentligheten', isCorrect: false },
          { id: 'd', text: 'At kaffehusene var stengt for diskusjon', isCorrect: false },
        ],
        solution: 'Den mest sentrale kritikken er at Habermas sin borgerlige offentlighet i praksis bare inkluderte velstående menn. Kvinner, arbeidere og andre marginaliserte grupper var utelukket fra denne «frie» diskusjonen, noe som svekker idealet om likeverdig debatt.',
      },
    },
    {
      id: 'mi-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        task: 'Forklar hva som menes med at mediene er «den fjerde statsmakt». Bruk et konkret eksempel fra historien eller nåtiden for å illustrere begrepet.',
        solution: 'Medienes rolle som «den fjerde statsmakt» betyr at pressen fungerer som en vaktbikkje som kontrollerer og stiller spørsmål ved de tre andre statsmaktene (lovgivende, utøvende og dømmende). Eksempel: Watergate-skandalen i 1972, der journalistene Woodward og Bernstein i Washington Post avdekket korrupsjon i Det hvite hus, som til slutt førte til president Nixons avgang. Dette viser medienes makt til å holde makthaverne ansvarlige.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Radio og TV
// ============================================================================

export const CHAPTER_MEDIEINFO_1_2_2: TextbookChapter = {
  id: 'medieinfo-1-2-2',
  courseId: 'medieinfo-1',
  chapterNumber: '2.2',
  title: 'Radio og TV',
  description: 'En gjennomgang av kringkastingens historie, fra radioens gjennombrudd til TV-alderen, med vekt på NRK-monopolet og fjernsynets samfunnspåvirkning.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for sentrale utviklingstrekk i mediehistorien',
    'drøfte hvordan kringkasting har formet offentligheten og kulturen',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi-2-2-intro',
      type: 'text',
      content: `## Radio og TV - kringkastingens tidsalder

Mens avisene krevde at folk kunne lese, brakte radioen nyheter og underholdning direkte inn i stuen til alle - også de som ikke kunne lese. Da fjernsynet kom, ble virkningen enda sterkere. For første gang kunne folk se verden med egne øyne uten å forlate hjemmet. Kringkasting endret ikke bare mediehistorien - den endret hele kulturen.

I dette kapittelet skal du lære:
- Hvordan radioen revolusjonerte kommunikasjonen
- Hva kringkastingsmonopolet betydde for Norge
- Hvordan fjernsynet forandret politikk, kultur og dagligliv
- Hva overgangen fra monopol til konkurranse innebar`,
    },
    {
      id: 'mi-2-2-def-1',
      type: 'definition',
      title: 'Kringkasting',
      content: `**Kringkasting** betyr å sende lyd (radio) eller lyd og bilde (TV) til et stort, allment publikum. Ordet betyr bokstavelig «å kaste bredt» - innholdet sendes ut til alle som har en mottaker. Til forskjell fra punkt-til-punkt-kommunikasjon (som telefon) er kringkasting **en-til-mange-kommunikasjon**: én sender når mange mottakere samtidig.`,
    },
    {
      id: 'mi-2-2-text-1',
      type: 'text',
      content: `### Radioens gjennombrudd

Radioen utviklet seg raskt på begynnelsen av 1900-tallet:

**Tidslinje:**
| År | Hendelse |
|----|----------|
| 1895 | Guglielmo Marconi sender de første radiosignalene |
| 1920-tallet | De første radiosendingene for allmennheten i USA og Europa |
| 1925 | NRK (Norsk rikskringkasting) grunnlegges |
| 1930-tallet | Radioen er det viktigste massemediet i verden |
| 1938 | Orson Welles' «War of the Worlds» skaper panikk i USA |

**Radioens styrke:** Radioen var det første mediet som kunne nå folk i sanntid. Nyheter kunne sendes umiddelbart, uten å vente på at avisen ble trykket. Under andre verdenskrig var radioen livsviktig - både for propaganda og motstandskamp. I Norge sendte London-radioen meldinger til hjemmefronten.

**Roosevelt og «Fireside Chats»:** USAs president Franklin D. Roosevelt brukte radioen mesterstykke. Gjennom sine uformelle «peisetaler» snakket han direkte til det amerikanske folket. Det skapte en helt ny nærhet mellom politikere og befolkning.`,
    },
    {
      id: 'mi-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Radioens makt - War of the Worlds',
      problem: 'Den 30. oktober 1938 sendte Orson Welles et radiodrama som simulerte en direktesendt nyhetsrapport om en utenomjordisk invasjon. Hva kan denne hendelsen fortelle oss om radioens makt?',
      solution: `**Hva skjedde:**
- Radiodramaet «War of the Worlds» ble sendt som en rekke «nyhetsmeldinger» som avbrøt vanlig programmering
- Mange lyttere som hadde skrudd på midt i sendingen, trodde det var ekte nyheter
- Tusenvis av amerikanere ble redde og noen forsøkte å flykte

**Hva det forteller om radioens makt:**
- Folk hadde enorm tillit til radiomediet - hvis det ble sagt på radio, var det sant
- Radio var en-til-mange-kommunikasjon uten mulighet for lytteren å stille spørsmål eller dobbeltsjekke
- Mediet skapte en følelse av «her og nå» som var langt sterkere enn aviser
- Hendelsen viste at medier kan forme virkelighetsoppfatningen til folk

Denne hendelsen er fortsatt relevant: den viser at tillit til medier kan utnyttes, noe vi ser paralleller til med desinformasjon i sosiale medier i dag.`,
    },
    {
      id: 'mi-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hva skiller kringkasting fra punkt-til-punkt-kommunikasjon som telefon?',
        options: [
          { id: 'a', text: 'Kringkasting bruker elektrisitet, telefon gjør det ikke', isCorrect: false },
          { id: 'b', text: 'Kringkasting er en-til-mange-kommunikasjon, telefon er en-til-en', isCorrect: true },
          { id: 'c', text: 'Kringkasting er alltid gratis, telefon koster penger', isCorrect: false },
          { id: 'd', text: 'Kringkasting bare sender lyd, telefon sender lyd og bilde', isCorrect: false },
        ],
        solution: 'Kringkasting er en-til-mange-kommunikasjon: én sender (for eksempel NRK) når mange mottakere samtidig. Telefon er en-til-en: to personer kommuniserer direkte med hverandre. Denne forskjellen er grunnleggende for å forstå massemedienes rolle i samfunnet.',
      },
    },
    {
      id: 'mi-2-2-def-2',
      type: 'definition',
      title: 'NRK-monopolet',
      content: `**NRK-monopolet** varte fra NRKs grunnleggelse i 1925 til 1981 (radio) og 1992 (TV). I denne perioden var NRK den eneste lovlige kringkasteren i Norge. Monopolet ble begrunnet med at kringkasting var et **knapphetsgode** (begrenset antall frekvenser) og at staten hadde ansvar for å sikre et allment, kvalitativt og nøytralt medietilbud til hele befolkningen. NRK ble finansiert gjennom **lisensavgift** betalt av alle med TV-apparat.`,
    },
    {
      id: 'mi-2-2-text-2',
      type: 'text',
      content: `### Fjernsynets revolusjon

Fjernsynet endret Norge og verden da det kom for fullt på 1960-tallet:

**TV i Norge:**
- 1960: NRK starter regulære TV-sendinger
- 1960-70-tallet: TV-apparatet blir allemannseie
- 1969: Måneladningen følges av millioner på TV
- 1981: Nærradioer tillates i Norge
- 1992: TV 2 starter - NRK-monopolet for TV er over

**Fjernsynets samfunnspåvirkning:**

**Politikken endres:** Politikere måtte nå forholde seg til kameraet. Utseende, karisma og evne til å snakke kort og konsist ble like viktig som politisk innhold. Den berømte Kennedy-Nixon-debatten i 1960 viste dette: de som hørte debatten på radio, mente Nixon vant, mens TV-seerne foretrakk den telegene Kennedy.

**Felles opplevelser:** TV skapte en nasjonal felleskultur. «Alle» så de samme programmene - Dagsrevyen, Kvitt eller dobbelt, Fleksnes. TV ble den viktigste kilden til nyheter, underholdning og kulturelle referanser.

**Passivt medium:** Kritikere pekte på at TV gjorde folk til passive mottakere. Mens aviser krevde aktiv lesing, kunne man «la seg underholde» foran TV-en uten å tenke kritisk.`,
    },
    {
      id: 'mi-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-2-2-ex-2',
        number: '2.2.2',
        type: 'classic',
        task: 'Forklar hva NRK-monopolet var, og diskuter et argument for og et argument mot at staten hadde monopol på kringkasting.',
        hints: ['Tenk på hva monopolet sikret, men også hva det begrenset'],
        solution: 'NRK-monopolet betydde at NRK var eneste lovlige kringkaster i Norge fra 1925 til 1981/1992. For: Monopolet sikret et allment, kvalitativt medietilbud til hele befolkningen, uavhengig av kommersielle interesser - alle fikk tilgang til nyheter, kultur og utdanning. Mot: Monopolet begrenset ytringsfriheten og mangfoldet - én institusjon bestemte hva folk fikk se og høre, og alternative stemmer ble utestengt fra de viktigste mediene.',
      },
    },
    {
      id: 'mi-2-2-text-3',
      type: 'text',
      content: `### Fra monopol til konkurranse

Opphevelsen av kringkastingsmonopolet var en av de største medieendringene i Norge:

**Bakgrunnen:**
- Nærradioer og piratsendere utfordret monopolet på 1970-80-tallet
- Kabel-TV og satellitt-TV ga nordmenn tilgang til utenlandske kanaler
- Politisk vilje til å åpne for konkurranse og mangfold

**Konsekvensene:**
- **TV 2** (1992) ble Norges første kommersielle allmennkringkaster
- Flere kanaler førte til mer mangfold, men også mer underholdning og mindre «tungt» stoff
- Reklamefinansiering påvirket innholdet - programmene måtte tiltrekke seere for å selge reklame
- NRK måtte fornye seg for å konkurrere, men beholdt lisensfinansieringen

Overgangen fra monopol til konkurranse er et eksempel på et mønster vi ser gjentatt i mediehistorien: ny teknologi utfordrer etablerte strukturer, og regulering må tilpasses virkeligheten.`,
    },
    {
      id: 'mi-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-2-2-ex-3',
        number: '2.2.3',
        type: 'multiple-choice',
        task: 'Hva viste Kennedy-Nixon-debatten i 1960 om fjernsynets makt?',
        options: [
          { id: 'a', text: 'At TV-debatter ikke påvirker velgerne', isCorrect: false },
          { id: 'b', text: 'At utseende og fremtoning ble like viktig som politisk innhold på TV', isCorrect: true },
          { id: 'c', text: 'At radio var et bedre medium for politisk debatt', isCorrect: false },
          { id: 'd', text: 'At Nixon vant både blant TV-seere og radiolyttere', isCorrect: false },
        ],
        solution: 'Kennedy-Nixon-debatten viste at TV forandret politikken: Radiolyttere mente Nixon vant på argumenter, men TV-seerne foretrakk den ungdommelige og telegene Kennedy. Dette beviste at fjernsynet la vekt på visuell fremtoning, og at politikere nå måtte beherske det visuelle mediet.',
      },
    },
    {
      id: 'mi-2-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Radioen** var det første mediet som nådde folk i sanntid og ble mektig under krigen
- **NRK-monopolet** sikret et allment tilbud, men begrenset mangfoldet
- **Fjernsynet** skapte en nasjonal felleskultur og endret politikken
- Overgangen fra **monopol til konkurranse** (TV 2 i 1992) ga mer mangfold, men også mer kommersialisering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kringkasting | En-til-mange-kommunikasjon via radio eller TV |
| NRK-monopolet | NRK som eneste lovlige kringkaster (1925-1981/1992) |
| Allmennkringkaster | Kringkaster med forpliktelser om bredde, kvalitet og tilgjengelighet |
| Lisensavgift | Avgift betalt av alle med TV for å finansiere NRK |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Drøft om NRK fortsatt bør ha en særstilling blant norske medier i dag, eller om det er en utdatert ordning. Bruk argumenter for og mot i svaret ditt.',
        hints: ['Tenk på NRKs rolle i dag vs. da monopolet eksisterte, og hva som skjer med medier som bare er reklamefinansiert'],
        solution: 'For NRKs særstilling: NRK sikrer kvalitetsjournalistikk uten reklamepress, dekker nisjestoff og minoritetsspråk, gir et felles mediegrunnlag for demokratiet, og når hele befolkningen. Mot: Andre medier konkurrerer med NRK uten statlig støtte, lisensavgiften er urettferdig, NRK kan virke konkurransevridende, og folk har uansett mange valgmuligheter. Et godt svar veier argumentene mot hverandre og tar stilling.',
      },
    },
    {
      id: 'mi-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-2-2-ex-5',
        number: '2.2.5',
        type: 'multiple-choice',
        task: 'Hva var det viktigste argumentet for NRK-monopolet?',
        options: [
          { id: 'a', text: 'At NRK laget de beste underholdningsprogrammene', isCorrect: false },
          { id: 'b', text: 'At det bare fantes frekvenser nok til én kringkaster', isCorrect: false },
          { id: 'c', text: 'At staten hadde ansvar for å sikre et allment, kvalitativt og nøytralt medietilbud', isCorrect: true },
          { id: 'd', text: 'At kommersiell kringkasting var teknisk umulig', isCorrect: false },
        ],
        solution: 'Det viktigste argumentet for monopolet var at kringkasting ble sett som et offentlig gode der staten hadde ansvar for å sikre at hele befolkningen fikk tilgang til et kvalitativt, allment og nøytralt medietilbud. Frekvensmangel var også et argument, men det sentrale var samfunnsansvaret.',
      },
    },
    {
      id: 'mi-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        task: 'Velg et TV-program fra NRK eller TV 2. Analyser om programmet representerer allmennkringkasterens oppdrag om bredde, kvalitet og tilgjengelighet. Begrunn svaret ditt.',
        solution: 'Et godt svar velger et konkret program og vurderer det mot allmennkringkaster-kriteriene. Eksempel: «Nytt på nytt» (NRK) - dekker aktuelle nyheter (bredde), bruker humor for å gjøre politikk tilgjengelig (tilgjengelighet), og inviterer ulike stemmer (mangfold). Kritikk: Programmets humor kan gjøre alvorlige temaer overfladiske. Svaret bør vise forståelse for hva allmennkringkasting innebærer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Internett og digitalisering
// ============================================================================

export const CHAPTER_MEDIEINFO_1_2_3: TextbookChapter = {
  id: 'medieinfo-1-2-3',
  courseId: 'medieinfo-1',
  chapterNumber: '2.3',
  title: 'Internett og digitalisering',
  description: 'En gjennomgang av internettets fremvekst, fra ARPANET via World Wide Web til Web 2.0, med fokus på konvergens og disrupsjon i mediebransjen.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for sentrale utviklingstrekk i mediehistorien',
    'drøfte hvordan digitalisering har endret mediene og mediebransjen',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi-2-3-intro',
      type: 'text',
      content: `## Internett og digitalisering

Ingen teknologi har endret mediene raskere eller mer gjennomgripende enn internett. På bare tre tiår har det gått fra å være et militært datanettverk til å bli den viktigste infrastrukturen for informasjon, kommunikasjon og underholdning i verden. Digitaliseringen har ikke bare skapt nye medier - den har grunnleggende endret de gamle.

I dette kapittelet skal du lære:
- Hvordan internett utviklet seg fra ARPANET til World Wide Web
- Hva Web 2.0 er og hvordan det endret medielandskapet
- Hva mediekonvergens betyr i praksis
- Hvordan disrupsjon har rammet tradisjonelle medier`,
    },
    {
      id: 'mi-2-3-def-1',
      type: 'definition',
      title: 'Internett og World Wide Web',
      content: `**Internett** er et globalt nettverk av sammenkoblede datamaskiner. Det ble opprinnelig utviklet som **ARPANET** (1969) av det amerikanske forsvaret. **World Wide Web** (WWW) ble oppfunnet av Tim Berners-Lee ved CERN i 1989 og er et system for å dele dokumenter via internett gjennom nettlesere. Internett er infrastrukturen (veiene), mens webben er én av tjenestene som bruker denne infrastrukturen (bilene).`,
    },
    {
      id: 'mi-2-3-text-1',
      type: 'text',
      content: `### Fra militært nettverk til allemannseie

Internettets utvikling gikk overraskende raskt:

| År | Hendelse |
|----|----------|
| 1969 | ARPANET - de første fire datamaskiner kobles sammen |
| 1989 | Tim Berners-Lee foreslår World Wide Web |
| 1993 | Mosaic - den første populære nettleseren |
| 1995 | Internett åpnes for kommersiell bruk |
| 1998 | Google grunnlegges |
| 2001 | Wikipedia lanseres |
| 2004 | Facebook startes opp |
| 2005 | YouTube lanseres |
| 2007 | iPhone lanseres - mobilinternett tar av |

**Internett i Norge:**
Norge var tidlig ute med internett. Allerede i 1991 ble det første norske nettstedet opprettet. VG Nett ble lansert i 1995 og ble raskt Norges mest besøkte nettsted. Innen 2000 hadde de fleste norske husstander tilgang til internett.

**Den første fasen (1990-tallet):** Internett var i starten mest en digital versjon av trykte medier - aviser la ut artikler på nett, bedrifter laget nettsider med informasjon. Innholdet ble laget av profesjonelle og konsumert av publikum, akkurat som i tradisjonelle medier.`,
    },
    {
      id: 'mi-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Internett vs. tidligere medierevolusjoner',
      problem: 'Sammenlign hastigheten det tok ulike medier å nå 50 millioner brukere.',
      solution: `**Tid til 50 millioner brukere:**
- **Radio:** 38 år (1920-1958)
- **TV:** 13 år (1950-1963)
- **Internett:** 4 år (1991-1995)
- **Facebook:** 3,5 år (2004-2007)
- **ChatGPT:** 2 måneder (2022)

Dette viser at medieadopsjon akselererer dramatisk. Hver ny teknologi bygger på den forrige, og terskelen for å ta den i bruk blir stadig lavere. Internett krevde bare en datamaskin og telefonlinje, mens smarttelefonen (som kombinerer alle tidligere medier) er tilgjengelig i lommen til nesten alle.`,
    },
    {
      id: 'mi-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom internett og World Wide Web?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell - de er det samme', isCorrect: false },
          { id: 'b', text: 'Internett er infrastrukturen, webben er en tjeneste som bruker den', isCorrect: true },
          { id: 'c', text: 'World Wide Web er eldre enn internett', isCorrect: false },
          { id: 'd', text: 'Internett er bare for e-post, webben er for nettsider', isCorrect: false },
        ],
        solution: 'Internett er det globale nettverket av sammenkoblede datamaskiner (infrastrukturen), mens World Wide Web er et system for å dele dokumenter via nettlesere - en av mange tjenester som bruker internett. Andre tjenester inkluderer e-post, strømming og meldingsapper.',
      },
    },
    {
      id: 'mi-2-3-def-2',
      type: 'definition',
      title: 'Web 2.0',
      content: `**Web 2.0** er et begrep som beskriver overgangen fra et «les-bare» nett (Web 1.0) til et interaktivt nett der brukerne selv kan skape og dele innhold. Begrepet ble popularisert av Tim O'Reilly i 2004. Kjennetegn ved Web 2.0 er **brukergenerert innhold** (blogging, kommentarfelt, sosiale medier), **samarbeid** (Wikipedia), **deling** (YouTube) og **sosial interaksjon** (Facebook, Twitter). Web 2.0 ga vanlige mennesker rollen som både konsumenter og produsenter av medieinnhold.`,
    },
    {
      id: 'mi-2-3-text-2',
      type: 'text',
      content: `### Mediekonvergens og disrupsjon

Digitaliseringen førte til to viktige fenomener:

**Mediekonvergens** betyr at ulike medier smelter sammen. Smarttelefonen er det ultimate eksempelet: den er radio, TV, avis, kamera, musikkspiller, telefon, spillkonsoll og kommunikasjonsverktøy - alt i én enhet. For mediebransjen betyr konvergens at grensene mellom avis, TV og nett viskes ut. VG er ikke lenger bare en avis - det er en nettavis med video, podkast, direktesendt sport og sosiale medier.

**Disrupsjon** er når ny teknologi ødelegger forretningsmodellen til etablerte bransjer:

| Tradisjonelt medium | Disruptert av |
|---------------------|---------------|
| Aviser (rubrikkannonser) | Finn.no, Facebook Marketplace |
| Musikkindustrien (CD-salg) | Spotify, Apple Music |
| Videoutleie (Blockbuster) | Netflix, strømmetjenester |
| Tradisjonell TV | YouTube, TikTok |
| Papiraviser | Nettaviser, sosiale medier |

**Konsekvenser for journalistikken:**
- Annonseinntektene har flyttet fra aviser til Google og Facebook
- Redaksjonene har blitt mindre - færre journalister dekker mer
- Nyheter forventes å være gratis og tilgjengelige umiddelbart
- Betalingsmurer (abonnement) er blitt den nye forretningsmodellen for kvalitetsjournalistikk`,
    },
    {
      id: 'mi-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-2-3-ex-2',
        number: '2.3.2',
        type: 'classic',
        task: 'Forklar hva mediekonvergens betyr, og gi tre konkrete eksempler på konvergens som du selv opplever i hverdagen.',
        hints: ['Tenk på smarttelefonen og hvordan ulike medier smelter sammen der'],
        solution: 'Mediekonvergens betyr at ulike medieformer smelter sammen til felles plattformer. Eksempler: 1) Smarttelefonen er radio, TV, avis, kamera og kommunikasjonsverktøy i ett. 2) NRK.no kombinerer tekst, video, podkast og direktestrømming på én plattform. 3) Instagram, som startet som foto-app, inkluderer nå video (Reels), meldinger, butikk og direktesendinger. Konvergens betyr at grensene mellom mediene viskes ut.',
      },
    },
    {
      id: 'mi-2-3-text-3',
      type: 'text',
      content: `### Digitaliseringens paradoks

Digitaliseringen har skapt et paradoks for mediene:

**Mer informasjon, men mindre tid:** Vi har tilgang til mer informasjon enn noen gang, men oppmerksomheten vår er begrenset. Mediebransjen kjemper om «oppmerksomhetsøkonomien» - kampen om sekundene dine.

**Flere stemmer, men mer støy:** Alle kan publisere, men det betyr også at det er vanskeligere å skille kvalitetsjournalistikk fra desinformasjon, rykter og propaganda.

**Gratis innhold, men hvem betaler?** Når nyheter forventes å være gratis, mister avisene inntekter. Færre journalister betyr dårligere journalistikk, noe som igjen svekker demokratiet.

**Personlig tilpasset, men smalere perspektiv:** Algoritmene gir oss innhold vi allerede liker, men det kan skape «filterbobler» der vi bare møter meninger vi er enige i.

Disse paradoksene er sentrale utfordringer for mediebransjen og samfunnet i dag, og vi kommer tilbake til flere av dem i senere kapitler.`,
    },
    {
      id: 'mi-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-2-3-ex-3',
        number: '2.3.3',
        type: 'multiple-choice',
        task: 'Hva betyr «disrupsjon» i mediesammenheng?',
        options: [
          { id: 'a', text: 'At medier gradvis forbedres over tid', isCorrect: false },
          { id: 'b', text: 'At ny teknologi ødelegger forretningsmodellen til etablerte bransjer', isCorrect: true },
          { id: 'c', text: 'At to medier slår seg sammen til ett', isCorrect: false },
          { id: 'd', text: 'At staten regulerer mediene strengere', isCorrect: false },
        ],
        solution: 'Disrupsjon betyr at ny teknologi grunnleggende endrer og ofte ødelegger forretningsmodellen til etablerte bransjer. For eksempel disrupterte Spotify CD-salget, Netflix disrupterte videoutleie, og Finn.no disrupterte avisenes rubrikkannonser.',
      },
    },
    {
      id: 'mi-2-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Internett** utviklet seg fra ARPANET (1969) via World Wide Web (1989) til dagens globale infrastruktur
- **Web 2.0** ga vanlige brukere mulighet til å skape og dele innhold
- **Mediekonvergens** betyr at ulike medier smelter sammen, tydeligst i smarttelefonen
- **Disrupsjon** har rammet tradisjonelle mediers forretningsmodeller hardt
- Digitaliseringen skaper paradokser: mer informasjon men mindre oppmerksomhet, flere stemmer men mer støy

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Web 2.0 | Det interaktive nettet der brukerne skaper innhold |
| Mediekonvergens | Ulike medieformer smelter sammen |
| Disrupsjon | Ny teknologi ødelegger etablerte forretningsmodeller |
| Oppmerksomhetsøkonomi | Kampen om brukernes begrensede oppmerksomhet |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'Velg en tradisjonell mediebedrift (f.eks. en avis, en TV-kanal eller et forlag) og beskriv hvordan digitaliseringen har påvirket den. Hvilke utfordringer og muligheter har de møtt?',
        hints: ['Tenk på endringer i forretningsmodell, publiseringspraksis og konkurranse'],
        solution: 'Eksempel med VG: VG gikk fra å være Norges største papiravis til å bli landets største nettavis. Utfordringer: Tapte annonseinntekter til Google/Facebook, måtte innføre betalingsvegg, reduserte stab. Muligheter: Når langt flere lesere digitalt, kan publisere umiddelbart, kombinerer tekst/video/podkast, kan måle nøyaktig hva leserne vil ha. Svaret bør vise forståelse for at digitalisering er både trussel og mulighet.',
      },
    },
    {
      id: 'mi-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-2-3-ex-5',
        number: '2.3.5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Web 2.0 sammenlignet med Web 1.0?',
        options: [
          { id: 'a', text: 'Web 2.0 er raskere og har bedre grafikk', isCorrect: false },
          { id: 'b', text: 'Web 2.0 er et «les-bare» nett der eksperter publiserer innhold', isCorrect: false },
          { id: 'c', text: 'Web 2.0 er interaktivt og lar brukerne selv skape og dele innhold', isCorrect: true },
          { id: 'd', text: 'Web 2.0 krever spesiell programvare for å brukes', isCorrect: false },
        ],
        solution: 'Web 2.0 kjennetegnes av interaktivitet og brukergenerert innhold. Mens Web 1.0 var et «les-bare» nett der profesjonelle publiserte og brukerne konsumerte, gir Web 2.0 alle mulighet til å blogge, kommentere, dele og samarbeide. Eksempler er YouTube, Wikipedia og sosiale medier.',
      },
    },
    {
      id: 'mi-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        task: 'Drøft ett av digitaliseringens paradokser: «Alle kan publisere, men det betyr også mer desinformasjon.» Er det en positiv eller negativ utvikling at alle kan bli medier?',
        solution: 'Et godt svar veier begge sider. Positivt: Demokratisering av ytringsfriheten, marginaliserte stemmer når ut, borgerjournalistikk kan avsløre maktmisbruk. Negativt: Mer desinformasjon, falske nyheter, propaganda, manglende redaksjonell kvalitetskontroll. Et balansert svar konkluderer med at utviklingen er overveiende positiv, men at det krever mediekritisk kompetanse hos mottakerne og ansvarlige plattformer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Sosiale mediers fremvekst
// ============================================================================

export const CHAPTER_MEDIEINFO_1_2_4: TextbookChapter = {
  id: 'medieinfo-1-2-4',
  courseId: 'medieinfo-1',
  chapterNumber: '2.4',
  title: 'Sosiale mediers fremvekst',
  description: 'En gjennomgang av sosiale mediers utvikling og betydning, med fokus på plattformer, brukergenerert innhold, deltakelseskultur og endrede maktstrukturer.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for sentrale utviklingstrekk i mediehistorien',
    'drøfte hvordan sosiale medier har endret kommunikasjon og maktforhold',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi-2-4-intro',
      type: 'text',
      content: `## Sosiale mediers fremvekst

Da Facebook ble lansert i 2004, var det et enkelt nettsted for Harvard-studenter. I dag har Meta (Facebook, Instagram, WhatsApp) over tre milliarder brukere globalt. Sosiale medier har på under to tiår blitt den viktigste kommunikasjonsplattformen for store deler av verdens befolkning - og endret alt fra politikk og journalistikk til vennskap og selvbilde.

I dette kapittelet skal du lære:
- Hva som kjennetegner sosiale medier som medietype
- Hvordan de viktigste plattformene har utviklet seg
- Hva brukergenerert innhold og deltakelseskultur innebærer
- Hvordan sosiale medier har endret maktstrukturene i mediene`,
    },
    {
      id: 'mi-2-4-def-1',
      type: 'definition',
      title: 'Sosiale medier',
      content: `**Sosiale medier** er digitale plattformer som lar brukerne opprette profiler, produsere og dele innhold, og kommunisere med andre brukere. Til forskjell fra tradisjonelle massemedier (en-til-mange) er sosiale medier **mange-til-mange-kommunikasjon**: alle brukere kan være både avsendere og mottakere. Kjennetegn inkluderer brukergenerert innhold, nettverk/følgere, algoritmebasert innholdsvisning og interaksjon (likes, kommentarer, delinger).`,
    },
    {
      id: 'mi-2-4-text-1',
      type: 'text',
      content: `### Plattformenes utvikling

Sosiale medier har utviklet seg i bølger:

**Tidlige sosiale medier (2003-2006):**
- MySpace (2003) - det første store sosiale nettverket
- Facebook (2004) - fra studentnettverk til verdens største plattform
- YouTube (2005) - «Broadcast Yourself» - alle kan bli TV-kanal

**Mikroblogging og mobilrevolusjonen (2006-2012):**
- Twitter (2006) - 140 tegn endret nyhetsjournalistikken
- iPhone (2007) - sosiale medier i lommen
- Instagram (2010) - bildedeling ble en ny kommunikasjonsform
- Snapchat (2011) - forsvinnende innhold appellerte til unge

**Nyere plattformer (2016-):**
- TikTok (2016/2018 internasjonalt) - kortvideoer og algoritmestyrt innhold
- BeReal (2020) - reaksjon mot «polert» sosiale medier
- Threads (2023) - Metas Twitter-konkurrent

**Et viktig mønster:** Hver ny plattform har trukket til seg en yngre brukergruppe. Når foreldrene oppdager Facebook, flytter barna til Instagram. Når foreldrene kommer dit, flytter barna til Snapchat eller TikTok.`,
    },
    {
      id: 'mi-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra «publisere» til «dele»',
      problem: 'Sammenlign hvordan nyheter ble spredd før og etter sosiale medier.',
      solution: `**Før sosiale medier (tradisjonell modell):**
1. Noe skjer i verden
2. Journalister undersøker og skriver en artikkel
3. Redaktøren godkjenner innholdet
4. Artikkelen publiseres i avisen eller på TV
5. Publikum leser/ser nyheten

**Med sosiale medier:**
1. Noe skjer i verden
2. Øyenvitner filmer med mobilen og deler direkte på sosiale medier
3. Andre brukere deler, kommenterer og reagerer
4. Journalister oppdager hendelsen via sosiale medier
5. Redaksjonene lager egne saker basert på informasjon fra sosiale medier
6. Sakene deles tilbake på sosiale medier

Forskjellen er dramatisk: Nyheter spres nå nedenfra og opp, ikke bare ovenfra og ned. Vanlige mennesker kan bli førstehåndskilder og formidle nyheter før redaksjonene rekker å reagere.`,
    },
    {
      id: 'mi-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva skiller sosiale medier fra tradisjonelle massemedier?',
        options: [
          { id: 'a', text: 'Sosiale medier er alltid gratis', isCorrect: false },
          { id: 'b', text: 'Sosiale medier er mange-til-mange-kommunikasjon der brukerne er både avsendere og mottakere', isCorrect: true },
          { id: 'c', text: 'Sosiale medier har alltid høyere kvalitet enn tradisjonelle medier', isCorrect: false },
          { id: 'd', text: 'Sosiale medier er bare tilgjengelige på mobiltelefoner', isCorrect: false },
        ],
        solution: 'Tradisjonelle massemedier er en-til-mange-kommunikasjon (NRK sender, publikum mottar), mens sosiale medier er mange-til-mange: alle brukere kan produsere, dele og konsumere innhold. Denne grunnleggende forskjellen endrer maktforholdet mellom avsender og mottaker.',
      },
    },
    {
      id: 'mi-2-4-def-2',
      type: 'definition',
      title: 'Deltakelseskultur',
      content: `**Deltakelseskultur** (engelsk: participatory culture) er et begrep utviklet av medieforskeren **Henry Jenkins**. Det beskriver en kultur der vanlige mennesker ikke bare konsumerer medieinnhold, men aktivt deltar i å skape, remikse, dele og kommentere det. Jenkins peker på at terskelen for å delta i kulturproduksjon har blitt dramatisk lavere, og at fellesskap dannes rundt felles interesser. Eksempler inkluderer fan fiction, memes, YouTube-videoer, podkaster og aktivisme på sosiale medier.`,
    },
    {
      id: 'mi-2-4-text-2',
      type: 'text',
      content: `### Brukergenerert innhold og nye maktforhold

Sosiale medier har snudd det tradisjonelle mediehierarkiet på hodet:

**Gatekeeping - hvem bestemmer hva som blir nyheter?**
I tradisjonelle medier er det **redaktøren** som er portvakt (gatekeeper) - hen bestemmer hva som publiseres. I sosiale medier er det **algoritmene** som bestemmer hva du ser. Og brukerne selv bestemmer hva som deles.

**Influencere og nye stemmer:**
Sosiale medier har skapt en helt ny type mediepersonlighet - influenceren. En 17-åring med TikTok kan nå flere mennesker enn en hel avisredaksjon. Dette demokratiserer medierommet, men reiser også spørsmål om ansvar, kompetanse og kommersiell påvirkning.

**Borgersjournalistikk:**
Under den arabiske våren (2011) var det vanlige borgere med smarttelefoner som formidlet det som skjedde til resten av verden. Tradisjonelle medier var ofte avhengige av borgerjournalister for bilder og informasjon fra konfliktsoner.

**Nye utfordringer:**
- Algoritmene skaper filterbobler og ekkokamre
- Desinformasjon spres raskere enn korrekte nyheter
- Kommersielle interesser er innbakt i plattformenes design (oppmerksomhetsøkonomi)
- Personvern og datainnsamling er store bekymringer`,
    },
    {
      id: 'mi-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-2-4-ex-2',
        number: '2.4.2',
        type: 'classic',
        task: 'Forklar hva Henry Jenkins mener med «deltakelseskultur» og gi to eksempler på deltakelseskultur fra din egen mediehverdag.',
        hints: ['Tenk på aktiviteter der du ikke bare konsumerer, men også skaper eller deler innhold'],
        solution: 'Deltakelseskultur er en kultur der vanlige mennesker aktivt skaper, remikser og deler medieinnhold. Eksempler kan inkludere: 1) Å lage og dele TikTok-videoer der man bruker populære lyder og trender (remiks av eksisterende innhold). 2) Å kommentere og diskutere nyhetsartikler på sosiale medier, og dermed bidra til den offentlige debatten. Andre eksempler: lage memes, skrive fan fiction, delta i Reddit-diskusjoner, lage podkast.',
      },
    },
    {
      id: 'mi-2-4-text-3',
      type: 'text',
      content: `### Plattformmakt og ansvar

Et sentralt spørsmål i dag er hvor mye makt plattformene har - og hvem som skal holde dem ansvarlige:

**Plattformene som infrastruktur:** Facebook, Google og YouTube er ikke bare medieselskaper - de er blitt infrastruktur for offentlig debatt. Når en plattform stenger en konto, er det som å miste tilgang til den offentlige samtalen.

**Innholdsmoderering:** Plattformene må balansere mellom ytringsfrihet og å fjerne skadelig innhold (hatprat, desinformasjon, vold). Uansett hva de gjør, blir de kritisert - enten for å sensurere eller for å la skadelig innhold stå.

**Algoritmene styrer debatten:** De aller fleste brukere ser bare det algoritmene viser dem. Algoritmene favoriserer innhold som skaper engasjement - og sinne, frykt og konflikt skaper mer engasjement enn nøkterne analyser.

Denne utviklingen har ført til at mange land nå diskuterer **regulering av sosiale medier** - for eksempel EUs Digital Services Act (DSA), som stiller krav til plattformenes håndtering av ulovlig innhold og transparens om algoritmer.`,
    },
    {
      id: 'mi-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-2-4-ex-3',
        number: '2.4.3',
        type: 'multiple-choice',
        task: 'Hva er en «gatekeeper» i mediesammenheng?',
        options: [
          { id: 'a', text: 'En person som vokter inngangen til mediebedriften', isCorrect: false },
          { id: 'b', text: 'En person eller mekanisme som bestemmer hva som publiseres og hva publikum får se', isCorrect: true },
          { id: 'c', text: 'En teknisk løsning som beskytter mot virus', isCorrect: false },
          { id: 'd', text: 'En type reklame på sosiale medier', isCorrect: false },
        ],
        solution: 'En gatekeeper (portvakt) bestemmer hva som når publikum. I tradisjonelle medier er redaktøren gatekeeper - hen velger hvilke saker som publiseres. I sosiale medier er algoritmene den nye gatekeeperen - de bestemmer hva som vises i feeden din basert på data om hva du pleier å engasjere deg med.',
      },
    },
    {
      id: 'mi-2-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Sosiale medier** er mange-til-mange-kommunikasjon der brukerne er både avsendere og mottakere
- Plattformene har utviklet seg i bølger, fra MySpace og Facebook til TikTok
- **Deltakelseskultur** (Jenkins) betyr at terskelen for å skape medieinnhold er dramatisk lavere
- **Gatekeeping** har skiftet fra redaktører til algoritmer
- Sosiale medier reiser nye spørsmål om makt, ansvar og regulering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Mange-til-mange | Kommunikasjonsform der alle er avsendere og mottakere |
| Deltakelseskultur | Kultur der vanlige mennesker skaper medieinnhold |
| Gatekeeper | Den som bestemmer hva publikum får se |
| Brukergenerert innhold | Innhold skapt av vanlige brukere, ikke profesjonelle |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Drøft om sosiale medier har styrket eller svekket demokratiet. Gi minst to argumenter for hver side.',
        hints: ['Tenk på arabisk vår, borgerjournalistikk, men også desinformasjon og filterbobler'],
        solution: 'Styrket: 1) Gir stemme til marginaliserte grupper som tidligere var utelukket fra mediene. 2) Borgerjournalistikk under arabisk vår viste at sosiale medier kan utfordre autoritære regimer. Svekket: 1) Desinformasjon og falske nyheter spres raskt og kan undergrave tillit til fakta. 2) Algoritmene skaper ekkokamre og polarisering. Et balansert svar konkluderer med at effekten avhenger av regulering og brukernes mediekritiske kompetanse.',
      },
    },
    {
      id: 'mi-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-2-4-ex-5',
        number: '2.4.5',
        type: 'multiple-choice',
        task: 'Hva menes med at sosiale mediers algoritmer kan skape «filterbobler»?',
        options: [
          { id: 'a', text: 'At algoritmene fjerner spam og uønsket innhold', isCorrect: false },
          { id: 'b', text: 'At du bare ser innhold som bekrefter meningene du allerede har', isCorrect: true },
          { id: 'c', text: 'At sosiale medier filtrerer bort reklame', isCorrect: false },
          { id: 'd', text: 'At plattformene beskytter personopplysningene dine', isCorrect: false },
        ],
        solution: 'Filterbobler oppstår fordi algoritmene viser deg innhold basert på hva du har engasjert deg med tidligere. Over tid betyr det at du hovedsakelig ser meninger og perspektiver du allerede er enig i, mens alternative synspunkter filtreres bort. Begrepet ble lansert av Eli Pariser i 2011.',
      },
    },
    {
      id: 'mi-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        task: 'Bør sosiale medier reguleres strengere av myndighetene? Begrunn svaret ditt med konkrete eksempler på hva regulering kan og bør (eller ikke bør) innebære.',
        solution: 'Et godt svar tar stilling og begrunner. For regulering: Plattformene har enorm makt over offentlig debatt uten demokratisk kontroll, de sprer desinformasjon og hatprat, EUs DSA er et eksempel på tilpasset regulering. Mot strengere regulering: Risiko for sensur og begrensning av ytringsfrihet, vanskelig å avgrense mellom skadelig og lovlig innhold, regulering kan hemme innovasjon. Et godt svar skiller mellom ulike typer regulering (transparens, ansvar, forbud).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Norsk mediehistorie
// ============================================================================

export const CHAPTER_MEDIEINFO_1_2_5: TextbookChapter = {
  id: 'medieinfo-1-2-5',
  courseId: 'medieinfo-1',
  chapterNumber: '2.5',
  title: 'Norsk mediehistorie',
  description: 'En gjennomgang av norsk mediehistorie, fra partipressen via NRK-monopolet til medierevolusjonen på 1980-tallet og dagens medielandskap.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for sentrale utviklingstrekk i norsk mediehistorie',
    'drøfte forholdet mellom medier, politikk og demokrati i Norge',
  ],
  keyTerms: [],
  content: [
    {
      id: 'mi-2-5-intro',
      type: 'text',
      content: `## Norsk mediehistorie

Norsk mediehistorie er en fortelling om makt, politikk og teknologi. Fra de første avisene på 1700-tallet til dagens komplekse medielandskap har mediene spilt en avgjørende rolle i utviklingen av det norske demokratiet. Noen utviklingstrekk er unike for Norge, som partipressen og NRK-monopolet, mens andre speiler internasjonale tendenser.

I dette kapittelet skal du lære:
- Hva partipressen var og hvorfor den forsvant
- Hvordan NRK-monopolet preget norsk mediekultur
- Hva medierevolusjonen på 1980-tallet innebar
- Hvordan dagens norske medielandskap ser ut`,
    },
    {
      id: 'mi-2-5-def-1',
      type: 'definition',
      title: 'Partipressen',
      content: `**Partipressen** var et system der norske aviser var eid av eller knyttet til politiske partier. Fra slutten av 1800-tallet til 1970-80-tallet hadde de fleste norske aviser en tydelig partitilhørighet: Aftenposten var konservativ (Høyre), Arbeiderbladet (nå Dagsavisen) tilhørte Arbeiderpartiet, og Nationen støttet Senterpartiet. Partipressen betydde at avisene aktivt fremmet partiets politikk i nyhetsdekningen, ikke bare på lederplass.`,
    },
    {
      id: 'mi-2-5-text-1',
      type: 'text',
      content: `### Partipressens storhetstid og fall

Partipressen preget norsk mediehistorie i over hundre år:

**Oppbyggingen (1880-1920):** De politiske partiene grunnla aviser over hele landet for å spre sitt budskap. De fleste byer hadde flere aviser - én for hvert parti. Journalistene var ofte partimedlemmer, og redaktørene var politisk utnevnt.

**Storhetstiden (1920-1970):**
| Parti | Viktige aviser |
|-------|---------------|
| Arbeiderpartiet | Arbeiderbladet, Nordlys |
| Høyre | Aftenposten, Bergens Tidende |
| Venstre | Dagbladet, Bergens Tidende (tidlig) |
| Senterpartiet | Nationen |

**Avpartifiseringen (1970-2000):** Flere faktorer bidro til at partipressen forsvant:
- Avisene ønsket **redaksjonell uavhengighet** for å beholde troverdighet
- Leserne ville ha **nøytral** og balansert journalistikk
- **Pressestøtten** (innført 1969) ga økonomisk uavhengighet fra partiene
- Journalistutdanningen profesjonaliserte yrket
- **Redaktørplakaten** (1953, revidert 2004) slo fast redaktørens uavhengighet

I dag er norske aviser formelt uavhengige av partiene, selv om noen fortsatt har politisk profil på lederplass.`,
    },
    {
      id: 'mi-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Partipressens virkning på leserne',
      problem: 'I en by med tre aviser - én for Arbeiderpartiet, én for Høyre og én for Venstre - hvordan påvirket partipressen hva folk visste og mente?',
      solution: `**Konsekvensene:**

**Informasjon ble filtrert:** Leserne fikk nyheter gjennom partiets filter. En sak om arbeidsledighet ville bli vinklet svært forskjellig i en Arbeiderparti-avis (regjeringens feil) og en Høyre-avis (fagbevegelsens krav er for høye).

**Politisk sosialisering:** Familien abonnerte gjerne på «sin» avis gjennom generasjoner. Barna vokste opp med partiets virkelighetsforståelse.

**Begrenset men tydelig:** Leserne visste hva avisen stod for, i motsetning til dagens medier der skjult vinkling kan være vanskeligere å oppdage. Partipressen var transparent om sin bias.

**Parallell til i dag:** Mange peker på at filterbobler i sosiale medier skaper en lignende effekt som partipressen - man eksponeres hovedsakelig for meninger man allerede er enig i.`,
    },
    {
      id: 'mi-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hva var det viktigste kjennetegnet ved partipressen?',
        options: [
          { id: 'a', text: 'Avisene var eid av staten og kontrollert av Stortinget', isCorrect: false },
          { id: 'b', text: 'Avisene var knyttet til politiske partier og fremmet partiets politikk', isCorrect: true },
          { id: 'c', text: 'Avisene var helt uavhengige og nøytrale', isCorrect: false },
          { id: 'd', text: 'Avisene bare trykket underholdning og sport', isCorrect: false },
        ],
        solution: 'Partipressen innebar at aviser var eid av eller tett knyttet til politiske partier. Journalistikken fremmet partiets politikk, ikke bare på lederplass, men også i nyhetsdekningen. Dette systemet preget norsk medielandskap i over hundre år.',
      },
    },
    {
      id: 'mi-2-5-def-2',
      type: 'definition',
      title: 'Pressestøtten',
      content: `**Pressestøtten** er en statlig støtteordning for norske medier som ble innført i 1969. Formålet er å sikre mediemangfold - at det finnes flere aviser og medier som representerer ulike synspunkter. Særlig «nummer to-avisene» (den nest største avisen i et område) har fått støtte for å overleve. Pressestøtten er et unikt norsk og nordisk fenomen, og har vært avgjørende for at Norge har et usedvanlig bredt mediemangfold sammenlignet med andre land.`,
    },
    {
      id: 'mi-2-5-text-2',
      type: 'text',
      content: `### Medierevolusjonen på 1980-tallet

1980-tallet var et vannskille i norsk mediehistorie. Tre store endringer skjedde nesten samtidig:

**1. Nærradioer (1981):**
Stortinget tillot lokale radiostasjoner, noe som brøt NRKs radiomonopol. Plutselig dukket det opp hundrevis av små radiostasjoner over hele landet - fra kristen radio til studentradio. P4 ble Norges første riksdekkende kommersielle radiokanal i 1993.

**2. Kabel-TV og satellitt-TV (1980-tallet):**
Parabolantenner og kabel-TV ga nordmenn tilgang til utenlandske kanaler som Sky Channel og TV3. Det ble umulig å opprettholde NRKs TV-monopol når folk uansett kunne se kommersielle kanaler.

**3. TV 2 (1992):**
Stortinget vedtok å opprette en ny, reklamefinansiert TV-kanal. TV 2 startet sendinger 5. september 1992 fra Bergen, og endret det norske TV-landskapet for godt. Konkurransen tvang NRK til å fornye seg.

**Resultatet:** Norge gikk fra å ha ett eneste TV-tilbud (NRK) til et mangfoldig mediemarked med mange kanaler, stasjoner og plattformer - alt på drøyt ti år.`,
    },
    {
      id: 'mi-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-2',
        number: '2.5.2',
        type: 'classic',
        task: 'Forklar hva pressestøtten er og hvorfor den er viktig for norsk mediemangfold.',
        hints: ['Tenk på hva som ville skjedd med små lokalaviser uten økonomisk støtte'],
        solution: 'Pressestøtten er en statlig økonomisk støtte til medier, innført i 1969 for å sikre mediemangfold. Den er viktig fordi: 1) Den holder «nummer to-aviser» i live slik at det finnes alternativer i lokale markeder. 2) Uten støtte ville mange mindre aviser gått konkurs, og store byer ville bare hatt én dominerende avis. 3) Mediemangfold er avgjørende for demokratiet - folk trenger tilgang til ulike perspektiver. Norge har takket være pressestøtten et usedvanlig bredt mediemangfold.',
      },
    },
    {
      id: 'mi-2-5-text-3',
      type: 'text',
      content: `### Dagens norske medielandskap

Norsk mediehistorie har formet et medielandskap med noen unike trekk:

**Eierkonsentrasjon:**
Til tross for mediemangfold er eierskapet konsentrert. De største aktørene er:
- **Schibsted** (VG, Aftenposten, Finn.no)
- **Amedia** (landets største aviskonsern med over 80 lokalaviser)
- **Polaris Media** (Adresseavisen og mange lokalaviser i Midt-Norge)
- **NRK** (statlig, finansiert over statsbudsjettet)

**Norske særtrekk:**
- Høy avislesing per innbygger sammenlignet med andre land
- Sterk tillit til mediene (Norge rangerer høyt i internasjonale målinger)
- Pressestøtte som sikrer mangfold
- NRK som en sterk allmennkringkaster
- Mediestøtterådet og selvregulering gjennom Pressens Faglige Utvalg (PFU)

**Utfordringer i dag:**
- Annonseinntekter tapes til Google og Meta
- Lokalaviser sliter økonomisk
- Unge leser stadig mindre tradisjonelle nyheter
- Desinformasjon og «nyhetstretthet» er voksende problemer
- Kunstig intelligens utfordrer journalistikken`,
    },
    {
      id: 'mi-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-3',
        number: '2.5.3',
        type: 'multiple-choice',
        task: 'Hva var den viktigste konsekvensen av medierevolusjonen på 1980-tallet i Norge?',
        options: [
          { id: 'a', text: 'At NRK ble nedlagt', isCorrect: false },
          { id: 'b', text: 'At Norge gikk fra kringkastingsmonopol til et mangfoldig mediemarked', isCorrect: true },
          { id: 'c', text: 'At alle aviser ble slått sammen til én nasjonal avis', isCorrect: false },
          { id: 'd', text: 'At internett ble tilgjengelig for alle nordmenn', isCorrect: false },
        ],
        solution: 'Medierevolusjonen på 1980-tallet innebar at NRKs kringkastingsmonopol ble brutt. Nærradioer (1981), kabel-TV og satellitt (1980-tallet) og TV 2 (1992) ga nordmenn et mangfoldig medietilbud. NRK ble ikke nedlagt, men måtte fornye seg i konkurransen.',
      },
    },
    {
      id: 'mi-2-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Partipressen** preget norsk medielandskap i over hundre år, men ble gradvis erstattet av uavhengig journalistikk
- **Pressestøtten** (1969) sikrer mediemangfold og er et unikt norsk-nordisk fenomen
- **Medierevolusjonen på 1980-tallet** brøt NRK-monopolet gjennom nærradio, kabel-TV og TV 2
- Dagens medielandskap preges av **eierkonsentrasjon**, høy tillit og nye digitale utfordringer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Partipressen | System der aviser var knyttet til politiske partier |
| Pressestøtten | Statlig støtte for å sikre mediemangfold |
| Redaktørplakaten | Sikrer redaktørens uavhengighet fra eier |
| Eierkonsentrasjon | Få aktører eier mange medier |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Lag en tidslinje over norsk mediehistorie med minst åtte viktige hendelser fra 1763 til i dag. Forklar kort hvorfor hver hendelse var viktig.',
        hints: ['Inkluder avisenes fremvekst, NRK, partipressen, pressestøtten, TV 2 og digitalisering'],
        solution: 'Eksempel: 1763: Norges første avis. 1880-tallet: Partipressen etableres. 1925: NRK grunnlegges. 1953: Redaktørplakaten. 1960: NRK TV starter. 1969: Pressestøtten innføres. 1981: Nærradioer tillates. 1992: TV 2 starter. 1995: VG Nett lanseres. 2000-tallet: Sosiale medier endrer medielandskapet. Et godt svar forklarer kort hva hver hendelse betydde for medieutviklingen.',
      },
    },
    {
      id: 'mi-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-5',
        number: '2.5.5',
        type: 'multiple-choice',
        task: 'Hva sikrer Redaktørplakaten?',
        options: [
          { id: 'a', text: 'At alle aviser må ha en redaktør med journalistutdanning', isCorrect: false },
          { id: 'b', text: 'At redaktøren er uavhengig av eier i redaksjonelle spørsmål', isCorrect: true },
          { id: 'c', text: 'At alle aviser må trykke innlegg fra alle politiske partier', isCorrect: false },
          { id: 'd', text: 'At redaktøren bestemmer annonsene i avisen', isCorrect: false },
        ],
        solution: 'Redaktørplakaten (1953, revidert 2004) slår fast at redaktøren er uavhengig av eieren i redaksjonelle spørsmål. Det betyr at eieren ikke kan diktere hva avisen skriver om eller hvilke meninger den har. Dette er et grunnleggende prinsipp for pressefrihet i Norge.',
      },
    },
    {
      id: 'mi-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        task: 'Sammenlign partipressen med filterbobler i sosiale medier. Hvilke likheter og forskjeller finner du mellom å bare lese «sin» partiavis og å bare se innhold algoritmen velger for deg?',
        solution: 'Likheter: Begge fører til ensidig informasjonstilgang der man hovedsakelig eksponeres for synspunkter man allerede er enig i. Begge kan forsterke politisk polarisering. Forskjeller: Partipressen var transparent - leseren visste at avisen tilhørte et parti. Filterbobler er usynlige - brukeren vet ofte ikke at innholdet er filtrert. Partipressen hadde redaksjonell kvalitetskontroll, mens filterbobler kan inneholde desinformasjon. Med partipressen valgte leseren aktivt sin avis, mens algoritmene bestemmer uten brukerens bevisste valg.',
      },
    },
    {
      id: 'mi-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'mi-2-5-ex-7',
        number: '2.5.7',
        type: 'multiple-choice',
        task: 'Hvilken av disse er den største utfordringen for norske medier i dag?',
        options: [
          { id: 'a', text: 'At det ikke finnes nok TV-kanaler', isCorrect: false },
          { id: 'b', text: 'At annonseinntekter tapes til globale plattformer som Google og Meta', isCorrect: true },
          { id: 'c', text: 'At det er forbudt å starte nye aviser', isCorrect: false },
          { id: 'd', text: 'At NRK har monopol på nyheter igjen', isCorrect: false },
        ],
        solution: 'Den største økonomiske utfordringen for norske medier i dag er at annonseinntektene har flyttet til globale plattformer som Google og Meta. Disse selskapene tar en stadig større andel av annonsemarkedet, noe som svekker de økonomiske vilkårene for journalistikk - særlig for lokalmedier.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_1_DEL2_CHAPTERS = [
  CHAPTER_MEDIEINFO_1_2_1,
  CHAPTER_MEDIEINFO_1_2_2,
  CHAPTER_MEDIEINFO_1_2_3,
  CHAPTER_MEDIEINFO_1_2_4,
  CHAPTER_MEDIEINFO_1_2_5,
];

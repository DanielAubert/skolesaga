/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 8
 * Kapittel 35-40: Metode, argumentasjon og eksamensforberedelse (Narrativ versjon)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 35 NARRATIV: Samfunnsfaglig metode
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_35_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-35-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '35',
  title: 'Samfunnsfaglig metode',
  subtitle: 'Narrativ versjon',
  description: 'En praktisk innfoering i kvalitative og kvantitative metoder, statistikk og korrelasjon -- verktoeykassen for aa forstaa samfunnet.',
  estimatedMinutes: 45,
  competenceGoals: ['presentere og drøfte samfunnsfaglige emner muntlig med god struktur'],
  linkedChapterId: 'samfunnsfag-10-35',
  content: [
    {
      id: 'samfunnsfag-10-35-n-intro',
      type: 'text',
      content: `## Hvordan vet vi det vi vet?

Naar noen paastaar at «ungdom bruker for mye tid paa mobilen» eller at «innvandring er bra for norsk oekonomi», hva baserer de det paa? Er det en magefoeallelse, noe de har lest i avisen, eller er det basert paa grundig forskning?

**Samfunnsfaglig metode** handler om hvordan vi systematisk kan undersoeke og forstaa samfunnet. Det er verktoeykassen som lar oss skille mellom synsing og viten, mellom anekdoter og fakta. Og det er en verktoeykasse du trenger -- baade paa eksamen og i livet som aktiv samfunnsborger.

Tenk paa det som forskjellen mellom aa si «jeg synes det er kaldt ute» og «temperaturen er minus 5 grader». Begge deler kan vaere sanne, men det siste er noe vi kan maale, kontrollere og sammenligne. Samfunnsfaglig metode handler om aa gaa fra det foerste til det siste -- ogsaa naar vi undersoeker komplekse temaer som politikk, oekonomi og sosiale forhold.`,
    },
    {
      id: 'samfunnsfag-10-35-n-section1',
      type: 'text',
      content: `## To tilnaerminger -- kvantitativ og kvalitativ

I samfunnsfaglig forskning skiller vi mellom to hovedtyper metoder: **kvantitative** og **kvalitative**.

**Kvantitativ metode** handler om tall og mengder. Du samler inn data fra mange enheter -- for eksempel ved aa sende ut en **spoerraskjemaundersoekelse** til 1000 elever. Resultatet er tall: 42 prosent av elevene foeler seg stresset av skolearbeid. Kvantitativ metode gir deg bredde -- du kan si noe om moenstre i en stor gruppe. Men den gir deg ikke noedevendigvis dybde -- du vet at 42 prosent er stresset, men du vet ikke hvorfor.

**Kvalitativ metode** handler om aa forstaa i dybden. Du snakker med noen faa personer gjennom **dybdeintervjuer** eller **observasjon**, og proever aa forstaa deres erfaringer, meninger og motivasjoner. Kvalitativ metode gir deg dybde -- du faar en rik forstaelse av et fenomen. Men den gir deg ikke noedevendigvis bredde -- du kan ikke generalasere fra fem intervjuer til hele befolkningen.

De to metodene utfyller hverandre. Hvis du vil undersoeke mobbing i skolen, kan du starte med en kvantitativ undersoekelse for aa finne ut omfanget (hvor mange elever opplever mobbing?), og deretter bruke kvalitative intervjuer for aa forstaa opplevelsen (hvordan oppleves det aa bli mobbet? Hva utloeser mobbingen?).

Uansett metode er det viktig aa vaere **systematisk** og **transparent** -- du maa beskrive hva du har gjort, slik at andre kan vurdere om konklusjonene dine er paalitelige.`,
    },
    {
      id: 'samfunnsfag-10-35-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa metode:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-35-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom kvantitativ og kvalitativ metode?',
            options: [
              { id: 'a', text: 'Kvantitativ metode bruker intervjuer, kvalitativ bruker tall', isCorrect: false },
              { id: 'b', text: 'Kvantitativ metode gir tall og bredde, kvalitativ metode gir dybde og forstaelse', isCorrect: true },
              { id: 'c', text: 'Kvantitativ metode er bedre enn kvalitativ', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell, begge bruker de samme verktoeayene', isCorrect: false },
            ],
            solution: 'Kvantitativ metode samler inn tall fra mange enheter og gir oversikt over moenstre (bredde). Kvalitativ metode gaar i dybden paa faa tilfeller for aa forstaa erfaringer og meninger.',
          },
          {
            id: 'samfunnsfag-10-35-n-quiz1-q1',
            task: 'Du vil undersoeke elevers opplevelse av skolestress. Hvilken metode gir mest dybdeforstaelse?',
            options: [
              { id: 'a', text: 'En spoerreundersoekelse med avkrysningsspoersmaal til 500 elever', isCorrect: false },
              { id: 'b', text: 'Statistikk over karakterer og fravaer', isCorrect: false },
              { id: 'c', text: 'Dybdeintervjuer med 8-10 elever om deres opplevelser', isCorrect: true },
              { id: 'd', text: 'En avstemning paa sosiale medier', isCorrect: false },
            ],
            solution: 'Dybdeintervjuer (kvalitativ metode) gir mest dybdeforstaelse fordi de lar deg utforske elevers personlige opplevelser, foelelser og refleksjoner rundt skolestress.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-35-n-section2',
      type: 'text',
      content: `## Statistikk og korrelasjon -- naar tall kan villlede

Statistikk er et kraftig verktoeay, men det kan ogsaa misbrukes. En av de viktigste tingene aa forstaa er forskjellen mellom **korrelasjon** og **kausalitet** (aarsakssammenheng).

**Korrelasjon** betyr at to ting henger sammen -- naar det ene gaar opp, gaar det andre ogsaa opp (eller ned). For eksempel: det er en korrelasjon mellom isspising og drukning -- begge oeker om sommeren. Betyr det at iskrem foerer til drukning? Selvfoelgelig ikke. Den egentlige forklaringen er en **tredje variabel**: varmt vaaer gjoer at folk baaede spiser mer is OG bader mer.

Denne feilen -- aa forveksle korrelasjon med kausalitet -- er svaaert vanlig, baade i media og i dagligtale. «Forskning viser at folk som spiser frokost, faar bedre karakterer.» Betyr det at frokost forbedrer karakterene? Kanskje. Men det kan ogsaa vaere at familier med stabile rutiner (inkludert frokost) ogsaa har andre faktorer som bidrar til skolesuksess.

Naar du leser statistikk, stiller du alltid noen kritiske spoersmaal: **Hvem er undersoekt?** (Er utvalget representativt?) **Hvor mange er undersoekt?** (Er utvalget stort nok?) **Hvem har utfoert undersoekelsen?** (Har de en agenda?) **Hva er det faktisk maalt?** (Maaaler de det de paastaar aa maale?) **Er det mulige tredje variabler?**

Kritisk tenkning rundt statistikk er ikke bare nyttig paa eksamen -- det beskytter deg mot aa bli lurt av misvisende tall i nyheter, reklame og politisk debatt.`,
    },
    {
      id: 'samfunnsfag-10-35-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-35-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa statistikk og kritisk tenkning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-35-n-quiz2-q0',
            task: 'Hva er forskjellen mellom korrelasjon og kausalitet?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Korrelasjon betyr at to ting henger sammen, kausalitet betyr at det ene forarsaker det andre', isCorrect: true },
              { id: 'c', text: 'Korrelasjon er mer paalitelig enn kausalitet', isCorrect: false },
              { id: 'd', text: 'Kausalitet handler om tall, korrelasjon handler om ord', isCorrect: false },
            ],
            solution: 'Korrelasjon betyr at to fenomener henger sammen statistisk. Kausalitet betyr at det ene faktisk forarsaker det andre. Korrelasjon beviser ikke kausalitet -- det kan finnes tredje variabler.',
          },
          {
            id: 'samfunnsfag-10-35-n-quiz2-q1',
            task: '«Land med hoeyere sjokoladeforbruk har flere nobelprisvinnere.» Hva er den mest sannsynlige forklaringen?',
            options: [
              { id: 'a', text: 'Sjokolade gjoer folk smartere', isCorrect: false },
              { id: 'b', text: 'Nobelprisvinnere liker sjokolade', isCorrect: false },
              { id: 'c', text: 'Det er en tilfeldig korrelasjon, sannsynligvis forklart av at rike land baade har hoey sjokoladeforbruk og gode universiteter', isCorrect: true },
              { id: 'd', text: 'Nobelkomiteen foretrekker kandidater fra sjokoladeelskende land', isCorrect: false },
            ],
            solution: 'Dette er et klassisk eksempel paa en spurioes korrelasjon. Tredje variabelen er sannsynligvis velstand: rike land har baade hoeyere sjokoladeforbruk og bedre forskningsinstitusjoner.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-35-n-summary',
      type: 'text',
      content: `## Oppsummering

**Samfunnsfaglig metode** er verktoeykassen for aa undersoeke samfunnet systematisk. **Kvantitativ metode** gir tall og bredde gjennom spoerreundersoekelser og statistikk. **Kvalitativ metode** gir dybde gjennom intervjuer og observasjon.

Aa forstaa **statistikk** krever kritisk tenkning. **Korrelasjon** betyr ikke kausalitet -- bare fordi to ting henger sammen, betyr det ikke at det ene foraarsaker det andre. Vaer oppmerksom paa tredje variabler, representativitet og mulige agendaer.

Disse ferdighetene er verdifulle baade paa eksamen og som samfunnsborger. De hjelper deg aa skille mellom synsing og viten, og aa stille de riktige spoersmaalene til paastandene du moeeter i hverdagen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 36 NARRATIV: Argumentasjon og droefting
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_36_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-36-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '36',
  title: 'Argumentasjon og drøfting',
  subtitle: 'Narrativ versjon',
  description: 'En praktisk guide til hvordan du bygger gode argumenter, droefter saker fra flere sider og bruker PBE-modellen og retorikk.',
  estimatedMinutes: 45,
  competenceGoals: ['presentere og drøfte samfunnsfaglige emner muntlig med god struktur'],
  linkedChapterId: 'samfunnsfag-10-36',
  content: [
    {
      id: 'samfunnsfag-10-36-n-intro',
      type: 'text',
      content: `## Kunsten aa overbevise -- og aa tenke klart

Hver dag blir du utsatt for argumenter. Politikere proever aa overbevise deg om at deres parti er best. Reklame proever aa faa deg til aa kjoepe noe. Venner proever aa faa deg med paa sine planer. Og paa eksamen maa du selv argumentere for dine synspunkter.

**Argumentasjon** er evnen til aa begrunne synspunktene dine paa en overbevisende maate. **Droefting** er evnen til aa se en sak fra flere sider og veie argumenter mot hverandre. Begge deler er blant de viktigste ferdighetene du kan laaere -- ikke bare for skolen, men for livet.

Tenk paa det slik: i en verden full av paastander, meninger og falske nyheter, er evnen til aa tenke klart, argumentere godt og vurdere andres argumenter kritisk noe av det mest verdifulle du kan ha.`,
    },
    {
      id: 'samfunnsfag-10-36-n-section1',
      type: 'text',
      content: `## PBE-modellen -- din beste venn paa eksamen

Naar du skal argumentere i samfunnsfag, er **PBE-modellen** et utmerket verktoeay. PBE staar for **Pastand, Begrunnelse, Eksempel**.

**Paastand**: Hva mener du? Start med aa formulere en klar paastand. For eksempel: «Norge boe ta imot flere flyktninger.»

**Begrunnelse**: Hvorfor mener du det? Gi en logisk forklaring. For eksempel: «Fordi Norge er et rikt land med kapasitet til aa hjelpe, og fordi vi har internasjonale forpliktelser gjennom FNs flyktningkonvensjon.»

**Eksempel**: Kan du gi et konkret eksempel som stoetter argumentet? For eksempel: «Da Norge tok imot mange syriske flyktninger i 2015, viste det seg at de fleste ble velintegrerte innen faa aar.»

PBE gir argumentene dine en tydelig struktur. I stedet for vage paastander som «jeg synes det er viktig», faar du en logisk kjede fra paastand via begrunnelse til konkret eksempel.

Naar du **droefter**, bruker du PBE for baade den ene og den andre siden. Du presenterer argumenter **for** og **mot**, og deretter vurderer du hvilke argumenter som veier tyngst. En god droefting viser at du kan se saken fra flere perspektiver -- ikke bare det du personlig er enig i.

Tips: bruk signalord som «paa den ene siden... paa den andre siden», «et argument for er... mens et argument mot er», «konklusjonen min er... fordi».`,
    },
    {
      id: 'samfunnsfag-10-36-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa PBE-modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-36-n-quiz1-q0',
            task: 'Hva staar PBE for?',
            options: [
              { id: 'a', text: 'Problem, Beskrivelse, Evaluering', isCorrect: false },
              { id: 'b', text: 'Paastand, Begrunnelse, Eksempel', isCorrect: true },
              { id: 'c', text: 'Prosess, Bevis, Effekt', isCorrect: false },
              { id: 'd', text: 'Perspektiv, Bakgrunn, Erfaring', isCorrect: false },
            ],
            solution: 'PBE staar for Paastand, Begrunnelse, Eksempel. Det er en modell for aa strukturere argumenter paa en klar og overbevisende maate.',
          },
          {
            id: 'samfunnsfag-10-36-n-quiz1-q1',
            task: 'Hva kjennetegner en god droefting?',
            options: [
              { id: 'a', text: 'At du bare presenterer argumenter for det du mener', isCorrect: false },
              { id: 'b', text: 'At du presenterer argumenter baade for og mot, og deretter veier dem mot hverandre', isCorrect: true },
              { id: 'c', text: 'At du unngaar aa ha en mening', isCorrect: false },
              { id: 'd', text: 'At du bruker saa mange fakta som mulig uten aa tolke dem', isCorrect: false },
            ],
            solution: 'En god droefting presenterer argumenter baade for og mot en sak, vurderer dem kritisk, og konkluderer med hvilke argumenter som veier tyngst.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-36-n-section2',
      type: 'text',
      content: `## Retorikk -- kunsten aa overtale

Allerede i antikkens Hellas utviklet filosofen Aristoteles en teori om **retorikk** -- kunsten aa overtale. Han identifiserte tre maater aa overtale paa, og de er like aktuelle i dag:

**Etos** handler om avsenderens **troverdighet**. Vi lar oss lettere overbevise av noen vi stoler paa. En lege som snakker om helse har hoeyt etos. En politiker som er tatt i loeagn, har lavt etos. Naar du argumenterer, kan du bygge etos ved aa vise at du har satt deg inn i saken og bruker paalitelige kilder.

**Patos** handler om **foelelser**. Vi lar oss ofte pavirke av det som beroerae oss emosjonelt. En historie om et enkeltmenneske som har flyktet fra krig, er mer foelelsesladet enn toearre statistikk om flyktningetall. Patos er et kraftig verktoeay, men det kan ogsaa misbrukes -- for eksempel naar noen bruker frykt eller sinne for aa manipulere.

**Logos** handler om **logikk og fornuft**. Gode argumenter er logiske -- premissene foerer til konklusjonen. Statistikk, forskning og faktabaserte argumenter appellerer til logos.

De beste argumentene kombinerer alle tre: de kommer fra en troverdig kilde (etos), de beroearer oss (patos), og de er logisk oppbygd (logos).

Det er ogsaa viktig aa kjenne igjen **retoriske feilslutninger** -- tankefeil som gjoer argumenter ugyldige. Noen vanlige: **stråmannsargument** (aa forvrenge motpartens syn for aa gjoere det lettere aa angripe), **personangrep** (aa angripe personen i stedet for argumentet), og **falsk dilemma** (aa presentere det som om det bare finnes to alternativer naar det egentlig finnes flere).`,
    },
    {
      id: 'samfunnsfag-10-36-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-36-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa retorikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-36-n-quiz2-q0',
            task: 'Hvilken retorisk appell handler om avsenderens troverdighet?',
            options: [
              { id: 'a', text: 'Patos', isCorrect: false },
              { id: 'b', text: 'Logos', isCorrect: false },
              { id: 'c', text: 'Etos', isCorrect: true },
              { id: 'd', text: 'Kairos', isCorrect: false },
            ],
            solution: 'Etos handler om avsenderens troverdighet. Vi lar oss lettere overbevise av noen vi oppfatter som kunnskapsrike og paalitelige.',
          },
          {
            id: 'samfunnsfag-10-36-n-quiz2-q1',
            task: 'Hva er et straamannsargument?',
            options: [
              { id: 'a', text: 'Et argument basert paa fakta om landbruk', isCorrect: false },
              { id: 'b', text: 'Aa forvrenge motpartens syn for aa gjoere det lettere aa angripe', isCorrect: true },
              { id: 'c', text: 'Et argument som er saa svakt at det faller sammen', isCorrect: false },
              { id: 'd', text: 'Aa bruke et eksempel fra virkeligheten', isCorrect: false },
            ],
            solution: 'Et straamannsargument er naar du forvrenger motpartens syn -- presenterer en overdrevet eller forenklet versjon -- for saa aa angripe den forvrengde versjonen i stedet for det motparten faktisk mener.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-36-n-summary',
      type: 'text',
      content: `## Oppsummering

**Argumentasjon** handler om aa begrunne synspunktene dine. **PBE-modellen** (Paastand, Begrunnelse, Eksempel) gir en tydelig struktur. **Droefting** betyr aa se saken fra flere sider og veie argumentene mot hverandre.

**Retorikk** -- kunsten aa overtale -- bygger paa tre appeallformer: **etos** (troverdighet), **patos** (foelelser) og **logos** (logikk). Vaer ogsaa oppmerksom paa **retoriske feilslutninger** som straamannsargumenter og falske dilemmaer.

Disse ferdighetene er uunnvaaerlige -- baade paa eksamen og i livet som kritisk tenkende samfunnsborger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 37 NARRATIV: Demokrati og medborgerskap — Fordypning
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_37_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-37-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '37',
  title: 'Demokrati og medborgerskap — Fordypning',
  subtitle: 'Narrativ versjon',
  description: 'En fordypning i demokratiets utfordringer: populisme, desinformasjon, polarisering og spoersmaalet om hvordan vi bevarer demokratiet i en ny tid.',
  estimatedMinutes: 45,
  competenceGoals: ['reflektere over demokratiets verdier og utfordringer i vår tid'],
  linkedChapterId: 'samfunnsfag-10-37',
  content: [
    {
      id: 'samfunnsfag-10-37-n-intro',
      type: 'text',
      content: `## Er demokratiet i fare?

Demokrati er noe de fleste av oss tar for gitt. Vi stemmer ved valg, vi ytrer oss fritt, vi stoler paa at rettssstaten beskytter oss. Men rundt om i verden er demokratiet under press -- og det gjelder ogsaa naaermere enn vi kanskje tror.

I 2023 registrerte organisasjonen Freedom House at antallet demokratier i verden hadde sunket for attende aar paa rad. Ikke gjennom statskupp og revolusjoner, men gjennom gradvise uthuling: innstramminger av pressefrihet, svekkelse av domstoler, manipulasjon av valg, og politikere som setter seg selv over institusjonene.

Ogsaa i etablerte demokratier som Norge ser vi utfordringer: synkende **valgdeltakelse** blant unge, oekende **polarisering**, spredning av **desinformasjon**, og fremveksten av **populistiske** bevisgelser som utfordrer det politiske etablissementet. Betyr alt dette at demokratiet er i fare? Og hva kan vi gjoere for aa forsvare det?`,
    },
    {
      id: 'samfunnsfag-10-37-n-section1',
      type: 'text',
      content: `## Populisme og polarisering

**Populisme** er ikke ett bestemt politisk standpunkt -- det finnes baade paa hoeyresiden og venstresiden. Det som kjennetegner populisme, er en retorikk som setter «folket» opp mot «eliten». Populistiske politikere hevder aa snakke paa vegne av «vanlige folk» mot korrupte, avkoblede eliter som ikke forstaar eller bryr seg.

Populisme er ikke noedevendigvis noe negativt -- den kan fange opp reell misnoeye og gi stemme til grupper som foelear seg oversett. Men den kan ogsaa forenkle komplekse problemer, demonisere motstandere og undergrave tillit til demokratiske institusjoner.

**Polarisering** betyr at befolkningen deler seg i stadig mer motsetningsfylte leirer. I stedet for aa vaere uenige men respektfulle, blir politisk debatt preget av «oss mot dem»-tenkning. Sosiale medier forsterker dette: algoritmene viser deg innhold du allerede er enig i (**ekkokamre**), og ekstreme meninger faar mer oppmerksomhet enn nyanserte.

I Norge er polariseringen foreloepig mildere enn i mange andre land, men vi ser tegn: mer fiendtlig debattklima, steerrekre mistillit til medier og politikere, og en tendens til aa tilskrive motparten onde hensikter. Aa motvirke polarisering krever bevisst innsats -- fra baade politikere, medier og vanlige borgere.`,
    },
    {
      id: 'samfunnsfag-10-37-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa populisme og polarisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-37-n-quiz1-q0',
            task: 'Hva kjennetegner populisme?',
            options: [
              { id: 'a', text: 'At politikere alltid sier det folk vil hoerae', isCorrect: false },
              { id: 'b', text: 'En retorikk som setter «folket» opp mot «eliten»', isCorrect: true },
              { id: 'c', text: 'Et politisk parti paa hoeyresiden', isCorrect: false },
              { id: 'd', text: 'At politikere bruker sosiale medier', isCorrect: false },
            ],
            solution: 'Populisme kjennetegnes av en retorikk som setter «folket» opp mot «eliten». Populistiske politikere hevder aa snakke paa vegne av vanlige folk mot avkoblede eliter.',
          },
          {
            id: 'samfunnsfag-10-37-n-quiz1-q1',
            task: 'Hva er et ekkokammer?',
            options: [
              { id: 'a', text: 'Et rom der du kan oeve paa aa snakke', isCorrect: false },
              { id: 'b', text: 'Naar algoritmer viser deg innhold du allerede er enig i, saa du sjelden moeter andre synspunkter', isCorrect: true },
              { id: 'c', text: 'En type sosiale medier-plattform', isCorrect: false },
              { id: 'd', text: 'En debatteknikk der man gjentar motstanderens argument', isCorrect: false },
            ],
            solution: 'Et ekkokammer oppstaar naar algoritmer i sosiale medier viser deg innhold som bekrefter det du allerede mener, slik at du sjelden eksponeres for andre perspektiver.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-37-n-section2',
      type: 'text',
      content: `## Desinformasjon og valgdeltakelse

En av de stoerste truslene mot demokratiet i dag er **desinformasjon** -- bevisst spredning av falsk eller villedende informasjon. Desinformasjon er ikke det samme som feilinformasjon (ubevisste feil) -- den er målrettet og strategisk.

Sosiale medier har gjort det enkelt aa spre desinformasjon raskt til millioner av mennesker. **Deepfakes** -- manipulerte videoer der det ser ut som om noen sier eller gjoer noe de aldri har gjort -- blir stadig mer realistiske. Statlige aktoerer, som Russland, har brukt desinformasjon for aa pavirke valg i andre land.

Hva kan du gjoere? **Kildekritikk** er din beste forsvarsmekanisme. Sjekk hvem som staar bak informasjonen. Sammeenlign med andre kilder. Vaer skeptisk til innhold som utloeser sterke foelelser -- det er ofte designet for aa pavirke, ikke informere. Og tenk foer du deler -- du kan vaere med paa aa spre falsk informasjon uten aa vite det.

**Valgdeltakelse** er demokratiets livsnerve. I Norge har den samlede valgdeltakelsen vaert relativt stabil, men blant unge stemmer faaerre. Noen mener at politikken foeles fjern og irrelevant. Andre peker paa at unge er politisk engasjert, men paa andre maater -- gjennom demonstrasjoner, sosiale medier og aktivisme.

Uansett form er **demokratisk deltakelse** avgjoeraende. Demokratiet er ikke en selvgaaende maskin -- det krever aktive borgere som stemmer, engasjerer seg, stiller spoersmaal og holder makthaverne ansvarlige. Det ansvaret hviler paa hver enkelt av oss.`,
    },
    {
      id: 'samfunnsfag-10-37-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-37-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa desinformasjon og deltakelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-37-n-quiz2-q0',
            task: 'Hva er desinformasjon?',
            options: [
              { id: 'a', text: 'Informasjon som er vanskelig aa forstaa', isCorrect: false },
              { id: 'b', text: 'Bevisst spredning av falsk eller villedende informasjon', isCorrect: true },
              { id: 'c', text: 'Nyheter som du er uenig i', isCorrect: false },
              { id: 'd', text: 'Gammel informasjon som ikke lenger er relevant', isCorrect: false },
            ],
            solution: 'Desinformasjon er bevisst og strategisk spredning av falsk eller villedende informasjon. Det skiller seg fra feilinformasjon, som er ubevisste feil.',
          },
          {
            id: 'samfunnsfag-10-37-n-quiz2-q1',
            task: 'Hva er den viktigste maaten aa beskytte seg mot desinformasjon?',
            options: [
              { id: 'a', text: 'Slutte aa bruke sosiale medier', isCorrect: false },
              { id: 'b', text: 'Bare stolee paa det venner deler', isCorrect: false },
              { id: 'c', text: 'Kildekritikk -- sjekke hvem som staar bak og sammenligne med andre kilder', isCorrect: true },
              { id: 'd', text: 'Bare lese nyheter fra ett bestemt medie', isCorrect: false },
            ],
            solution: 'Kildekritikk er den viktigste forsvarsmekanismen: sjekk hvem som staar bak, sammenlign med andre kilder, vaer skeptisk til innhold som utloeser sterke foelelser.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-37-n-summary',
      type: 'text',
      content: `## Oppsummering

Demokratiet er under press globalt. **Populisme** forenkler komplekse saker og setter «folket» mot «eliten». **Polarisering** og **ekkokamre** gjoer at vi sjelden moeter andre perspektiver.

**Desinformasjon** er en alvorlig trussel -- bevisst falsk informasjon spredt for aa manipulere. **Kildekritikk** er det viktigste forsvaret. **Valgdeltakelse** og demokratisk engasjement er avgjoeraende for at demokratiet skal fungere.

Demokratiet er ikke noe som vedlikeholder seg selv. Det krever aktive, kritisk tenkende borgere som deltar, stiller spoersmaal og holder makthaverne ansvarlige. Det ansvaret begynner med deg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 38 NARRATIV: Baerekraftig utvikling — Fordypning
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_38_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-38-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '38',
  title: 'Bærekraftig utvikling — Fordypning',
  subtitle: 'Narrativ versjon',
  description: 'En fordypning i klimarettferdighet, sirkulaeroeekonomi og groenn omstilling -- de store utfordringene for din generasjon.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive sammenhenger mellom natur og samfunn og diskutere hva bærekraftig utvikling betyr'],
  linkedChapterId: 'samfunnsfag-10-38',
  content: [
    {
      id: 'samfunnsfag-10-38-n-intro',
      type: 'text',
      content: `## Din generasjons stoerste utfordring

Hvis det er én ting som vil prege din generasjon mer enn noe annet, er det **klimaendringene** og behovet for **baerekraftig utvikling**. Vitenskapen er klar: jorden varmes opp paa grunn av menneskeskapte utslipp av klimagasser, og konsekvensene -- mer ekstremt vaaer, havnivaasstigning, tap av biologisk mangfold -- er allerede merkbare.

Men klimakrisen er ikke bare et miljoeproblem. Den er ogsaa et spoerasaal om **rettferdighet, oekonomi og politikk**. Hvem skal betale for omstillingen? Hvordan sikrer vi at de fattigste landene -- som har bidratt minst til problemet -- ikke rammes hardest? Og hvordan bygger vi en oekonomi som kan gi velstand uten aa oedelegge planeten?

**Baaereekraftig utvikling** betyr at vi dekker vaarae behov uten aa oedelegge for fremtidige generasjoner. Det bygger paa tre pilarer: **oekologisk baerekraft** (ta vare paa naturen), **oekonomisk baerekraft** (skape velstand uten aa taaere paa ressursene), og **sosial baerekraft** (sikre rettferdighet og like muligheter for alle).`,
    },
    {
      id: 'samfunnsfag-10-38-n-section1',
      type: 'text',
      content: `## Klimarettferdighet -- hvem har ansvaret?

**Klimarettferdighet** handler om at klimaendringene rammer skjevt. De rike landene -- som USA, Europa og Japan -- har sluppet ut mest klimagasser historisk. Men det er de fattige landene -- i Afrika, Soer-Asia og Stillehavet -- som rammes hardest. Smaa oeyater trues av havnivaasstigning. Toerrakekatastrofer rammer omraader som allerede sliter med matusikkerhet.

Spoersmålet er: hvem skal betale for omstillingen? **Parisavtalen** fra 2015 fastslo at alle land skal bidra, men at rike land har et saeerlig ansvar. De rike landene lovte aa mobilisere 100 milliarder dollar aarlig til klimatiltak i fattige land. Men loeftene har vaert vanskelige aa oppfylle.

For Norges del er spoersmålet saerlig komplisert. Vi er et av verdens rikeste land, mye takket vaere **olje og gass** -- fossile energikilder som er en hoveddrivkraft bak klimaendringene. Hvordan kan vi vaere et foregangsland i klimakampen naar oekonomien vaar er bygget paa det som forarsaker problemet?

Noen mener at Norge maa slutte med oljeproduksjon saa raskt som mulig. Andre mener at vi kan produsere olje og gass «paa en renere maate» og bruke inntektene til aa finansiere groenn omstilling. Denne debatten -- mellom oekonomi og klima, mellom dag i dag og fremtiden -- er en av de viktigste i norsk politikk.`,
    },
    {
      id: 'samfunnsfag-10-38-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa klimarettferdighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-38-n-quiz1-q0',
            task: 'Hva menes med klimarettferdighet?',
            options: [
              { id: 'a', text: 'At alle land skal ha like mye sol og regn', isCorrect: false },
              { id: 'b', text: 'At klimaendringene rammer skjevt, og at ansvar og byrder maa fordeles rettferdig', isCorrect: true },
              { id: 'c', text: 'At rike land skal stoppe all industri', isCorrect: false },
              { id: 'd', text: 'At klimaaktivister alltid har rett', isCorrect: false },
            ],
            solution: 'Klimarettferdighet handler om at klimaendringene rammer urettferdig -- fattige land som har bidratt minst, rammes hardest -- og at ansvar og byrder maa fordeles rettferdig.',
          },
          {
            id: 'samfunnsfag-10-38-n-quiz1-q1',
            task: 'Hva fastslo Parisavtalen?',
            options: [
              { id: 'a', text: 'At all oljeproduksjon skal stoppes innen 2030', isCorrect: false },
              { id: 'b', text: 'At alle land skal bidra til aa begrense global oppvarming, med saerlig ansvar for rike land', isCorrect: true },
              { id: 'c', text: 'At bare europeiske land trenger aa kutte utslipp', isCorrect: false },
              { id: 'd', text: 'At FN skal bestemme klimapolitikken i hvert land', isCorrect: false },
            ],
            solution: 'Parisavtalen fra 2015 fastslo at alle land skal bidra til aa begrense global oppvarming til under 2 grader (helst 1,5), og at rike land har et saerlig ansvar for aa hjelpe fattige land.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-38-n-section2',
      type: 'text',
      content: `## Sirkulaeroekonomi og groenn omstilling

Dagens oekonomi er i stor grad **lineaer**: vi tar ut raavaarer, lager produkter, bruker dem og kaster dem. Denne modellen er ikke baerekraftig -- vi bruker allerede mer av jordens ressurser enn den kan fornye.

Alternativet er en **sirkulaaeroekonomi**: en oekekonomi der produkter og materialer holdes i bruk saa lenge som mulig, repareres, gjenbrukes og resirkuleres. I stedet for «ta, lag, kast» handler det om «reduser, gjenbruk, resirkuler».

Konkrete eksempler: klaeer som sys om i stedet for aa kastes, elektronikk som repareres i stedet for aa erstattes, matsvinn som reduseres, og emballasje som designes for resirkulering. I Norge har vi allerede gode panteordninger for flasker og bokser -- et eksempel paa sirkulaaeroekonomi i praksis.

**Groenn omstilling** handler om aa endre hele oekonomien i en mer baerekraftig retning. Det betyr aa gaa fra fossile til fornybare energikilder (sol, vind, vaann), utvikle ny teknologi (elektriske biler, karbonfangst, groent hydrogen), og endre forbruksmoenstrene vaarae.

Omstillingen skaper baade muligheter og utfordringer. Nye, groenane naarainnger kan erstatte oljeindustrien og skape arbeidsplasser. Men omstillingen rammer ikke alle likt -- noen vil miste jobben, noen samfunn vil miste sin hovednaaering. En rettferdig omstilling krever at vi tar hensyn til de som rammes hardest.

Det viktigste spoersmalet er kanskje dette: kan vi ha oekonomisk vekst og baaerekraft samtidig? Noen mener ja, gjennom **groenn vekst** -- oekonomisk utvikling basert paa fornybare ressurser og ny teknologi. Andre mener at vi maa akseptere lavere forbruk og en enklere livsstil. Denne debatten vil prege din generasjons politikk.`,
    },
    {
      id: 'samfunnsfag-10-38-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-38-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa sirkulaeroekonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-38-n-quiz2-q0',
            task: 'Hva er forskjellen mellom lineaer oekonomi og sirkulaeroekonomi?',
            options: [
              { id: 'a', text: 'Lineaer oekonomi er billigere, sirkulaeroekonomi er dyrere', isCorrect: false },
              { id: 'b', text: 'Lineaer oekonomi foelger «ta, lag, kast»; sirkulaeroekonomi holder produkter i bruk saa lenge som mulig', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell, bare ulike navn', isCorrect: false },
              { id: 'd', text: 'Lineaer oekonomi er for rike land, sirkulaeroekonomi for fattige land', isCorrect: false },
            ],
            solution: 'Lineaer oekonomi foelger modellen «ta ut, lag, bruk, kast». Sirkulaeroekonomi holder produkter og materialer i bruk saa lenge som mulig gjennom gjenbruk, reparasjon og resirkulering.',
          },
          {
            id: 'samfunnsfag-10-38-n-quiz2-q1',
            task: 'Hva menes med groenn omstilling?',
            options: [
              { id: 'a', text: 'Aa plante flere traeer', isCorrect: false },
              { id: 'b', text: 'Aa endre oekonomien i en mer baerekraftig retning, blant annet fra fossil til fornybar energi', isCorrect: true },
              { id: 'c', text: 'Aa stoppe all oekonomisk aktivitet', isCorrect: false },
              { id: 'd', text: 'Aa male alle bygninger groenane', isCorrect: false },
            ],
            solution: 'Groenn omstilling handler om aa endre hele oekonomien i en baerekraftig retning: overgang til fornybar energi, ny teknologi, og endrede forbruksmoenstre.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-38-n-summary',
      type: 'text',
      content: `## Oppsummering

Klimaendringene er den stoerste utfordringen for din generasjon. **Klimarettferdighet** handler om at de som har bidratt minst, rammes hardest, og at ansvar maa fordeles rettferdig. **Parisavtalen** gir rammeverket for globalt samarbeid.

**Sirkulaeroekonomi** erstatter «ta, lag, kast» med gjenbruk og resirkulering. **Groenn omstilling** betyr aa endre oekonomien fra fossil til fornybar, med nye naeringer og teknologier.

Norges saerstilling som oljenasjon gjoer debatten saerlig kompleks. Spoersmaalet om vi kan kombinere oekonomisk vekst med baerekraft vil prege politikken i tiaarene som kommer -- og det er din generasjon som maa finne svarene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 39 NARRATIV: Muntlig eksamen i samfunnsfag
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_39_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-39-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '39',
  title: 'Muntlig eksamen i samfunnsfag',
  subtitle: 'Narrativ versjon',
  description: 'En praktisk og beroligende guide til muntlig eksamen -- fra forberedelse og presentasjon til fagsamtale og haandtering av nervoesitet.',
  estimatedMinutes: 40,
  competenceGoals: ['presentere og drøfte samfunnsfaglige emner muntlig med god struktur'],
  linkedChapterId: 'samfunnsfag-10-39',
  content: [
    {
      id: 'samfunnsfag-10-39-n-intro',
      type: 'text',
      content: `## Du klarer dette!

Foer vi begynner med tips og teknikker, la oss starte med det viktigste: **du kan mer enn du tror**. Naar eksamen naaerer seg, er det lett aa foele at du ikke kan noe. Men du har jobbet med samfunnsfag i tre aar. Du har lest, diskutert, skrevet og tenkt. Alt det sitter i deg -- det handler bare om aa faa det frem.

Muntlig eksamen i samfunnsfag bestaar vanligvis av to deler: en **presentasjon** som du forbereder paa forhaaand (vanligvis med 48 timers eller 24 timers forberedelsestid), og en **fagsamtale** der sensorene stiller deg spoersmaal.

Mange synes fagsamtalen er mest nervepirrende fordi du ikke vet noeayaktig hva du faar spoersmaal om. Men her er hemmeligheten: fagsamtalen er ogsaa den delen der du virkelig kan vise hva du kan. Sensorene er ikke ute etter aa ta deg -- de vil at du skal lykkes. De stiller spoersmaal for aa gi deg mulighet til aa vise kunnskap og forstaelse.`,
    },
    {
      id: 'samfunnsfag-10-39-n-section1',
      type: 'text',
      content: `## Presentasjonen -- din arena

Foerberedelsestiden er din sjanse til aa lage en solid presentasjon. Her er noen tips:

**Strukturer innholdet**. Bruk en tydelig inndeling: innledning, hoveddel og avslutning. Innledningen boer fange oppmerksomheten -- kanskje med et spoersmaal, en historie eller en overraskende fakta. Hoveddelen presenterer stoffet med PBE-struktur. Avslutningen oppsummerer og aapner for refleksjon.

**Velg fokus**. Du kan ikke si alt om et emne paa 10-15 minutter. Velg en vinkling og gaa i dybden heller enn aa proeave aa dekke alt. Sensorene vurderer dybdeforstaelse hoeayere enn bredde.

**Bruk kilder**. Vis at du kan finne og vurdere informasjon. Referer til laareboken, aktuelle nyheter, statistikk eller forskning. Men ikke bare list opp fakta -- forklar hva de betyr og hvorfor de er relevante.

**Oeav paa fremfoeringeen**. Snakk tydelig og rolig. Ha oeyekontakt med sensorene. Bruk stikkord, ikke manus -- aa lese opp fra et ark gir et daarlig inntrykk. Digitale presentasjoner (PowerPoint/Google Slides) kan vaere nyttige, men hold dem enkle -- faa ord, gjerne bilder, og la det du sier vaere hovudsaken.

**Hold tiden**. Oev med klokke. Aa gaa over tiden viser mangel paa forberedelse. Aa bli ferdig for tidlig kan tyde paa at du ikke har nok stoff.`,
    },
    {
      id: 'samfunnsfag-10-39-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-39-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa eksamensforberedelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-39-n-quiz1-q0',
            task: 'Hva vurderer sensorene hoeayest -- bredde eller dybde?',
            options: [
              { id: 'a', text: 'Bredde -- jo mer du dekker, jo bedre', isCorrect: false },
              { id: 'b', text: 'Dybde -- det er bedre aa gaa grundig inn i et fokusomraade', isCorrect: true },
              { id: 'c', text: 'Ingen av delene -- det er bare presentasjonen som teller', isCorrect: false },
              { id: 'd', text: 'De vurderer bare om du har penae slides', isCorrect: false },
            ],
            solution: 'Sensorene vurderer dybdeforstaelse hoeayt. Det er bedre aa velge et fokusomraade og vise at du virkelig forstaar det, enn aa proeve aa dekke alt overfladisk.',
          },
          {
            id: 'samfunnsfag-10-39-n-quiz1-q1',
            task: 'Hvorfor boer du bruke stikkord i stedet for manus under presentasjonen?',
            options: [
              { id: 'a', text: 'Fordi det er raskere aa skrive', isCorrect: false },
              { id: 'b', text: 'Fordi det tvinger deg til aa snakke fritt og viser at du forstaar stoffet', isCorrect: true },
              { id: 'c', text: 'Fordi sensorene ikke har lov til aa la deg lese', isCorrect: false },
              { id: 'd', text: 'Fordi PowerPoint-presentasjoner er obligatoriske', isCorrect: false },
            ],
            solution: 'Stikkord tvinger deg til aa snakke fritt og vise at du virkelig forstaar stoffet. Aa lese opp fra manus gir inntrykk av at du har pugget uten aa forstaa.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-39-n-section2',
      type: 'text',
      content: `## Fagsamtalen -- en dialog, ikke et foerhoer

Etter presentasjonen kommer **fagsamtalen**. Sensorene stiller spoersmaal om temaet ditt, men ogsaa om andre deler av laereplanen. Her er noen strategier:

**Lytt noeye paa spoersmaalet**. Ta noen sekunder til aa tenke foer du svarer. Det er helt greit aa si «det var et godt spoersmaal, la meg tenke...» foer du begynner aa svare.

**Strukturer svaret**. Bruk PBE ogsaa i fagsamtalen. Start med en klar paastand, begrunne den, og gi et eksempel. Det gir sensorene inntrykk av at du tenker strukturert.

**Vis sammenhenger**. Det som virkelig imponerer sensorene, er naar du kan koble temaer sammen. «Det minner meg om det vi laerte om...» eller «Det kan sammenlignes med...» viser at du ser det store bildet.

**Vaer aerlig**. Hvis du ikke vet svaret, si det. «Det er jeg usikker paa, men jeg tenker at...» er mye bedre enn aa finne paa noe. Sensorene setter pris paa aerlighet og evnen til aa resonnere ogsaa naar du er usikker.

**Droeft, ikke bare referer**. Samfunnsfag handler ikke bare om aa gjengi fakta -- det handler om aa reflektere og droeefte. Vis at du kan se saker fra flere sider, og at du toer aa ha egne meninger basert paa kunnskap.`,
    },
    {
      id: 'samfunnsfag-10-39-n-section3',
      type: 'text',
      content: `## Nervoesitet -- din allierte, ikke din fiende

De fleste er nervoeese foer muntlig eksamen. Det er helt normalt -- og faktisk nyttig. Moderat nervoesitet gjoer deg skjerpet og fokusert. Problemet er naar nervoesiteten blir saa sterk at den hindrer deg i aa prestere.

Her er noen teknikker som kan hjelpe:

**Pusting**: Pust dypt inn gjennom nesen i fire sekunder, hold pusten i fire sekunder, og pust sakte ut gjennom munnen i aatte sekunder. Gjenta noen ganger. Dette aktiverer det parasympatiske nervesystemet og roer kroppen ned.

**Forberedelse**: Den beste medisinen mot nervoesitet er aa vaere godt forberedt. Jo mer du har oeavd, jo tryggere foelar du deg.

**Perspektiv**: Minn deg selv paa at dette er en samtale om noe du har jobbet med i tre aar. Sensorene er ikke der for aa straffe deg. Og uansett resultat -- dette er bare en eksamen, ikke en dom over hvem du er.

**Kroppen**: Sov godt natten foer, spis ordentlig frokost, og unngaa for mye koffein. Fysisk bevegelse -- en rask gaaetur eller noen strekkoeevelser -- kan hjelpe mot nervoes energi.

**Fokus paa det du kan**: I stedet for aa tenke paa alt du ikke kan, minn deg selv paa alt du faktisk har laaert. Du har jobbet med dette i aarevis -- du vet mye mer enn du tror.`,
    },
    {
      id: 'samfunnsfag-10-39-n-summary',
      type: 'text',
      content: `## Oppsummering

Muntlig eksamen bestaar av en **presentasjon** og en **fagsamtale**. Til presentasjonen: velg fokus, strukturer med innledning-hoveddel-avslutning, bruk PBE og kilder, og oev med stikkord.

I **fagsamtalen**: lytt noeye, tenk foer du svarer, vis sammenhenger og droeft -- ikke bare referer. Vaer aerlig naar du er usikker.

**Nervoesitet** er normalt og kan haandteres gjennom pusteoeevelser, god forberedelse og perspektiv. Husk: du kan mer enn du tror, og sensorene oensker at du skal lykkes.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 40 NARRATIV: Eksamensstrategier og repetisjon
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_40_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-40-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '40',
  title: 'Eksamensstrategier og repetisjon',
  subtitle: 'Narrativ versjon',
  description: 'En oppsummerende guide til de tverrfaglige temaene i samfunnsfag, med strategier for effektiv repetisjon og gode resultater paa eksamen.',
  estimatedMinutes: 45,
  competenceGoals: ['presentere og drøfte samfunnsfaglige emner muntlig med god struktur'],
  linkedChapterId: 'samfunnsfag-10-40',
  content: [
    {
      id: 'samfunnsfag-10-40-n-intro',
      type: 'text',
      content: `## Siste etappe -- du er nesten i maal

Du har kommet til det siste kapittelet. Gjennom 39 kapitler har du reist gjennom politikk, historie, oekonomi, kultur, identitet og metode. Du har laert om demokrati og diktatur, om verdenskrigene og den kalde krigen, om velferdsstaten og den norske modellen, om mangfold og likestilling, om baerekraft og klimarettferdighet.

Naa handler det om aa sette det hele sammen -- og forberede seg paa eksamen paa en smart maate. I dette kapittelet skal vi se paa de **tverrfaglige temaene** som binder det hele sammen, og gi deg konkrete **strategier for effektiv repetisjon**.

Husk: maalet er ikke aa huske alt. Maalet er aa forstaa sammenhengene, kunne reflektere over dem, og formulere deg klart og tydelig.`,
    },
    {
      id: 'samfunnsfag-10-40-n-section1',
      type: 'text',
      content: `## De tverrfaglige temaene -- den roeaade traaden

LK20-laereplanen bygger paa tre tverrfaglige temaer som gaar igjen i alle fag. I samfunnsfag er de saerlig sentrale:

**Demokrati og medborgerskap** er kanskje det mest gjennomgaaende temaet. Det handler om hvordan vi styrer samfunnet, hvordan vi deltar, og hvordan vi lever sammen paa tross av uenighet. Paa eksamen kan du bli bedt om aa droeefte demokratiets utfordringer, sammenligne styreformer, diskutere valgdeltakelse, eller reflektere over din egen rolle som medborger.

**Baerekraftig utvikling** handler om balansen mellom oekologiske, oekonomiske og sosiale hensyn. Det kan dukke opp i spoersmaal om klimapolitikk, forbruk, oekonomi, internasjonal politikk eller etikk. Vis at du forstaar at baerekraft ikke bare handler om miljoe -- det handler om aa skape et rettferdig og levedyktig samfunn for alle.

**Folkehelse og livsmestring** handler om helse, identitet, relasjoner og evnen til aa mestre livets utfordringer. Det kan knyttes til temaer som psykisk helse, rus, seksualitet, oekonomi og arbeidsliv. Vis at du kan reflektere over hvordan samfunnet pavirker individet, og hvordan individet kan pavirke samfunnet.

Noekelen er aa se **sammenhenger paa tvers**. Klimapolitikk handler ogsaa om demokrati (hvem bestemmer?), oekonomi (hvem betaler?) og rettferdighet (hvem rammes?). Arbeidsliv handler ogsaa om helse, likestilling og oekonomisk baerekraft. Dess bedre du er til aa trekke slike linjer, dess bedre blir du paa eksamen.`,
    },
    {
      id: 'samfunnsfag-10-40-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa de tverrfaglige temaene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-40-n-quiz1-q0',
            task: 'Hvilke tre tverrfaglige temaer gaar igjen i LK20?',
            options: [
              { id: 'a', text: 'Norsk, matte og engelsk', isCorrect: false },
              { id: 'b', text: 'Demokrati og medborgerskap, baerekraftig utvikling, folkehelse og livsmestring', isCorrect: true },
              { id: 'c', text: 'Historie, geografi og oekonomi', isCorrect: false },
              { id: 'd', text: 'Politikk, kultur og teknologi', isCorrect: false },
            ],
            solution: 'De tre tverrfaglige temaene i LK20 er: demokrati og medborgerskap, baerekraftig utvikling, og folkehelse og livsmestring.',
          },
          {
            id: 'samfunnsfag-10-40-n-quiz1-q1',
            task: 'Hvorfor er det viktig aa se sammenhenger paa tvers av temaer paa eksamen?',
            options: [
              { id: 'a', text: 'Fordi sensorene gir ekstrapoeng for hvert tema du nevner', isCorrect: false },
              { id: 'b', text: 'Fordi det viser dybdeforstaelse og evne til aa reflektere over komplekse sammenhenger', isCorrect: true },
              { id: 'c', text: 'Fordi det gjoer presentasjonen lengre', isCorrect: false },
              { id: 'd', text: 'Fordi laereplanen krever at du nevner alle tre temaene', isCorrect: false },
            ],
            solution: 'Aa se sammenhenger paa tvers viser at du forstaar stoffet i dybden og kan reflektere over komplekse sammenhenger -- noe som vurderes hoeyt paa eksamen.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-40-n-section2',
      type: 'text',
      content: `## Strategier for effektiv repetisjon

Naar eksamen naaerer seg, er det fristende aa lese alt paa nytt fra begynnelse til slutt. Men forskning viser at det finnes mye mer effektive maater aa repetere paa:

**Aktiv gjenhenting** (retrieval practice): I stedet for aa lese passivt, test deg selv. Lukk boken og proev aa forklare et tema med egne ord. Bruk quizene i denne boken. Lag egne spoersmaal. Forskning viser at aa hente informasjon fra hukommelsen styrker den mye mer enn aa lese den paa nytt.

**Spredt repetisjon** (spaced repetition): Repeter litt hver dag over tid i stedet for aa pugge alt natten foer. Hjernen lagrer informasjon bedre naar den faar tid til aa bearbeide den mellom oektene.

**Forklar for andre**: Proev aa forklare et tema for en venn, et familiemedlem, eller til og med en imaginaaer elev. Naar du maa forklare noe med egne ord, oppdager du raskt hva du faktisk forstaar og hva du trenger aa jobbe mer med. Dette kalles **Feynman-teknikken**.

**Tankekart og sammendrag**: Lag visuelle oversikter over sammenhenger mellom temaer. Et tankekart over «den norske modellen» kan for eksempel koble til trepartssamarbeid, velferdsstat, skatt, omfordeling, arbeidsliv og likestilling. Slike oversikter hjelper deg aa se det store bildet.

**Varier stoffet**: Ikke jobb med bare ett tema om gangen. Bytt mellom ulike emner -- det tvinger hjernen til aa sortere og kategorisere, noe som styrker laaeringen.`,
    },
    {
      id: 'samfunnsfag-10-40-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-40-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa repetisjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-40-n-quiz2-q0',
            task: 'Hva er aktiv gjenhenting (retrieval practice)?',
            options: [
              { id: 'a', text: 'Aa lese kapittelet mange ganger', isCorrect: false },
              { id: 'b', text: 'Aa teste deg selv ved aa hente informasjon fra hukommelsen uten aa se i boken', isCorrect: true },
              { id: 'c', text: 'Aa skrive av notatene dine for haand', isCorrect: false },
              { id: 'd', text: 'Aa lytte til lydbok mens du sover', isCorrect: false },
            ],
            solution: 'Aktiv gjenhenting betyr aa teste deg selv ved aa proeve aa hente informasjon fra hukommelsen -- for eksempel ved aa lukke boken og forklare et tema med egne ord. Det er mer effektivt enn aa lese passivt.',
          },
          {
            id: 'samfunnsfag-10-40-n-quiz2-q1',
            task: 'Hva er Feynman-teknikken?',
            options: [
              { id: 'a', text: 'Aa lese fysikk-laareboka til Richard Feynman', isCorrect: false },
              { id: 'b', text: 'Aa forklare et tema med enkle ord som om du laerer det bort til noen andre', isCorrect: true },
              { id: 'c', text: 'Aa bruke fargerike markoeraer i boken', isCorrect: false },
              { id: 'd', text: 'Aa loesse eksamenssett fra tidligere aar', isCorrect: false },
            ],
            solution: 'Feynman-teknikken gaar ut paa aa forklare et tema med enkle ord, som om du laerer det bort til noen. Naar du ikke klarer aa forklare noe enkelt, avsloearer det huller i forstaelsen din.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-40-n-section3',
      type: 'text',
      content: `## En siste oppmuntring

Du har kommet gjennom hele pensum. Det er en prestasjon i seg selv. Samfunnsfag handler om aa forstaa verden du lever i -- og den forstaelsen har du naa.

Her er noen ting aa huske naar eksamen naaerer seg:

**Du er ikke alene.** Alle i klassen er i samme situasjon. Stoett hverandre, oev sammen, del tips.

**Perfeksjon er ikke maalet.** Du trenger ikke aa kunne alt. Du trenger aa vise at du forstaar, kan reflektere og kan uttrykke deg.

**Det er bare en eksamen.** Uansett resultat er det du har laart i samfunnsfag -- om demokrati, rettigheter, oekonomi, mangfold og baerekraft -- kunnskap du har med deg resten av livet.

**Ta vare paa deg selv.** Sov nok, spis godt, ta pauser, gjooer noe goy. En uthvilt hjerne presterer bedre enn en utslitt en.

Lykke til med eksamen -- og med alt som kommer etterpaa. Verden trenger engasjerte, kunnskapsrike og empatiske mennesker. Du er paa god vei til aa bli en av dem.`,
    },
    {
      id: 'samfunnsfag-10-40-n-summary',
      type: 'text',
      content: `## Oppsummering

De tre **tverrfaglige temaene** -- demokrati og medborgerskap, baerekraftig utvikling, og folkehelse og livsmestring -- er den roedde traaden gjennom samfunnsfag. Aa se sammenhenger paa tvers er nokkelen til god eksamenskarakter.

Effektiv repetisjon bygger paa **aktiv gjenhenting** (test deg selv), **spredt repetisjon** (litt hver dag), **forklaring for andre** (Feynman-teknikken) og **tankekart** for aa se sammenhenger.

Husk: du kan mer enn du tror. Maalet er ikke perfeksjon, men forstaelse, refleksjon og klar kommunikasjon. Lykke til!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 8 Narrativ
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_35_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_36_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_37_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_38_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_39_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_40_NARRATIV,
];

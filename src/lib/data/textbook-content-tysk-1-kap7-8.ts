/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 1 - Kapittel 7-8
 * Klaer og shopping, Skole og yrker
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Die Kleidung - Klaerne
// ============================================================================

export const CHAPTER_TYSK_1_7_1: TextbookChapter = {
  id: 'tysk-1-7-1',
  courseId: 'tysk-1',
  chapterNumber: '7.1',
  title: 'Die Kleidung',
  subtitle: 'Klaerne',
  description: 'Laer grunnleggende ord for klaer pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere ord for vanlige klaesplagg',
    'bruke riktig artikkel med klaesord',
    'beskrive hva man har pa seg',
  ],
  content: [
    {
      id: 'tysk-1-7-1-intro',
      type: 'text',
      content: `## Klaer pa tysk

A kunne snakke om klaer er nyttig i mange situasjoner - nar du handler, pakker til en reise, eller bare beskriver hva noen har pa seg.

Pa tysk har alle substantiver kjonn: hankjonn (der), hunkjonn (die) eller inkjetkjonn (das). Det er viktig a laere klaesordene med riktig artikkel!`,
    },
    {
      id: 'tysk-1-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Overkropp',
      content: `**Klaer for overkroppen:**

| Tysk | Norsk |
|------|-------|
| das Hemd | skjorte |
| die Bluse | bluse |
| das T-Shirt | t-skjorte |
| der Pullover | genser |
| die Jacke | jakke |
| der Mantel | frakk/kape |
| das Kleid | kjole |`,
    },
    {
      id: 'tysk-1-7-1-def-2',
      type: 'definition',
      title: 'Vokabular: Underkropp og tilbehor',
      content: `**Klaer for underkroppen:**

| Tysk | Norsk |
|------|-------|
| die Hose | bukse |
| die Jeans | jeans |
| der Rock | skjort |
| die Shorts | shorts |
| die Schuhe (pl.) | sko |
| die Socken (pl.) | sokker |
| der Gurtel | belte |`,
    },
    {
      id: 'tysk-1-7-1-text-1',
      type: 'text',
      content: `**Tilbehor (Accessoires):**

| Tysk | Norsk |
|------|-------|
| der Hut | hatt |
| die Mutze | lue |
| der Schal | skjerf |
| die Handschuhe (pl.) | hansker |
| die Brille | briller |
| die Tasche | veske |`,
    },
    {
      id: 'tysk-1-7-1-tip-1',
      type: 'tip',
      content: `Legg merke til at noen klaesplagg ofte brukes i flertall pa tysk, akkurat som pa norsk: die Schuhe (skoene), die Socken (sokkene), die Handschuhe (hanskene).`,
    },
    {
      id: 'tysk-1-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Oversett til norsk',
      problem: `Oversett disse klaesordene til norsk:

a) das Hemd
b) die Hose
c) der Pullover
d) die Schuhe`,
      solution: `a) das Hemd = **skjorte**
b) die Hose = **bukse**
c) der Pullover = **genser**
d) die Schuhe = **sko**

**Huske-tips:** "Hose" hoeres ut som "hose" pa engelsk, men betyr bukse pa tysk!`,
    },
    {
      id: 'tysk-1-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk (husk artikkelen):',
        subTasks: [
          { label: 'a', task: 'jakke', solution: 'die Jacke', answer: 'die Jacke' },
          { label: 'b', task: 'kjole', solution: 'das Kleid', answer: 'das Kleid' },
          { label: 'c', task: 'skjort', solution: 'der Rock', answer: 'der Rock' },
          { label: 'd', task: 'genser', solution: 'der Pullover', answer: 'der Pullover' },
        ],
        solution: 'a) die Jacke, b) das Kleid, c) der Rock, d) der Pullover',
        hints: ['Husk at alle tyske substantiver har kjonn', 'Rock pa tysk betyr skjort, ikke musikk!'],
      },
    },
    {
      id: 'tysk-1-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvilket kjonn?',
      problem: `Velg riktig artikkel:

a) ___ Hemd (der/die/das)
b) ___ Jacke (der/die/das)
c) ___ Pullover (der/die/das)`,
      solution: `a) **das** Hemd - inkjetkjonn
b) **die** Jacke - hunkjonn
c) **der** Pullover - hankjonn

**Tips:** Mange klaesplagg som slutter pa -e er hunkjonn (die): die Jacke, die Hose, die Bluse, die Mutze.`,
    },
    {
      id: 'tysk-1-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig artikkel (der, die eller das):',
        subTasks: [
          { label: 'a', task: '___ Hose', solution: 'die', answer: 'die' },
          { label: 'b', task: '___ T-Shirt', solution: 'das', answer: 'das' },
          { label: 'c', task: '___ Mantel', solution: 'der', answer: 'der' },
          { label: 'd', task: '___ Bluse', solution: 'die', answer: 'die' },
        ],
        solution: 'a) die Hose, b) das T-Shirt, c) der Mantel, d) die Bluse',
        hints: ['Ord pa -e er ofte hunkjonn', 'Mantel er hankjonn som pa norsk (en frakk)'],
      },
    },
    {
      id: 'tysk-1-7-1-text-2',
      type: 'text',
      content: `## Flertall av klaer

Mange klaesord far -n eller -en i flertall:

| Entall | Flertall |
|--------|----------|
| die Jacke | die Jacken |
| die Hose | die Hosen |
| der Schuh | die Schuhe |
| das Hemd | die Hemden |
| das Kleid | die Kleider |`,
    },
    {
      id: 'tysk-1-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Flertall',
      problem: `Skriv flertallsformen:

a) die Jacke -> die ___
b) das Hemd -> die ___
c) der Rock -> die ___`,
      solution: `a) die Jacke -> die **Jacken**
b) das Hemd -> die **Hemden**
c) der Rock -> die **Rocke**

**Merk:** I flertall bruker alle substantiver artikkelen "die".`,
    },
    {
      id: 'tysk-1-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv flertallsformen (alle far "die" i flertall):',
        subTasks: [
          { label: 'a', task: 'die Hose -> die ___', solution: 'Hosen', answer: 'Hosen' },
          { label: 'b', task: 'das Kleid -> die ___', solution: 'Kleider', answer: 'Kleider' },
          { label: 'c', task: 'die Bluse -> die ___', solution: 'Blusen', answer: 'Blusen' },
          { label: 'd', task: 'der Pullover -> die ___', solution: 'Pullover', answer: 'Pullover' },
        ],
        solution: 'a) Hosen, b) Kleider, c) Blusen, d) Pullover (uforandret)',
        hints: ['Ord pa -e far ofte -n i flertall', 'Pullover er lik i entall og flertall'],
      },
    },
    {
      id: 'tysk-1-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `I Tyskland er det vanlig a ha "Hausschuhe" (tofler) hjemme. Mange tyske hjem har en samling gjestestofler ved inngangen, og det er hoeflig a ta av seg skoene nar man kommer inn.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Im Kleidergeschaft - I klesbutikken
// ============================================================================

export const CHAPTER_TYSK_1_7_2: TextbookChapter = {
  id: 'tysk-1-7-2',
  courseId: 'tysk-1',
  chapterNumber: '7.2',
  title: 'Im Kleidergeschaft',
  subtitle: 'I klesbutikken',
  description: 'Laer a handle klaer og snakke med ekspeditoerer pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sporsmalsfraser for shopping',
    'be om a prove klaer',
    'forstaa priser og stoerrelser',
  ],
  content: [
    {
      id: 'tysk-1-7-2-intro',
      type: 'text',
      content: `## Handle klaer pa tysk

Nar du handler klaer i Tyskland, er det nyttig a kunne noen viktige fraser. La oss laere de vanligste uttrykkene for klesbutikken!`,
    },
    {
      id: 'tysk-1-7-2-def-1',
      type: 'definition',
      title: 'Nyttige shoppingfraser',
      content: `**Sporsmaal til ekspeditoeren:**

| Tysk | Norsk |
|------|-------|
| Kann ich Ihnen helfen? | Kan jeg hjelpe deg? |
| Kann ich ... anprobieren? | Kan jeg prove ...? |
| Haben Sie das in Grosse ...? | Har dere dette i stoerrelse ...? |
| Wo ist die Umkleidekabine? | Hvor er proverommet? |
| Was kostet das? | Hva koster det? |
| Wie viel kostet ...? | Hvor mye koster ...? |`,
    },
    {
      id: 'tysk-1-7-2-def-2',
      type: 'definition',
      title: 'Svar og uttrykk',
      content: `**Nyttige svar:**

| Tysk | Norsk |
|------|-------|
| Ich suche ... | Jeg leter etter ... |
| Das passt mir | Det passer meg |
| Das passt mir nicht | Det passer meg ikke |
| Das ist zu gross | Det er for stort |
| Das ist zu klein | Det er for lite |
| Das gefallt mir | Jeg liker det |
| Ich nehme es | Jeg tar det |`,
    },
    {
      id: 'tysk-1-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: I klesbutikken',
      problem: `Les dialogen og svar pa sporsmalene:

Verkaufer: Guten Tag! Kann ich Ihnen helfen?
Kunde: Ja, ich suche eine Jacke.
Verkaufer: Welche Grosse haben Sie?
Kunde: Grosse M, bitte.
Verkaufer: Hier ist eine schone Jacke. Mochten Sie sie anprobieren?
Kunde: Ja, gerne. Wo ist die Umkleidekabine?

a) Hva leter kunden etter?
b) Hvilken stoerrelse trenger kunden?`,
      solution: `a) Kunden leter etter en jakke (eine Jacke).
b) Kunden trenger stoerrelse M (Grosse M).

**Viktige ord fra dialogen:**
- der Verkaufer = ekspeditoer
- der Kunde = kunde
- anprobieren = prove
- die Umkleidekabine = proverom`,
    },
    {
      id: 'tysk-1-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Kan jeg prove dette?', solution: 'Kann ich das anprobieren?', answer: 'Kann ich das anprobieren' },
          { label: 'b', task: 'Hvor er proverommet?', solution: 'Wo ist die Umkleidekabine?', answer: 'Wo ist die Umkleidekabine' },
          { label: 'c', task: 'Hva koster det?', solution: 'Was kostet das?', answer: 'Was kostet das' },
        ],
        solution: 'a) Kann ich das anprobieren?, b) Wo ist die Umkleidekabine?, c) Was kostet das?',
        hints: ['anprobieren = a prove', 'kosten = a koste'],
      },
    },
    {
      id: 'tysk-1-7-2-text-1',
      type: 'text',
      content: `## Betaling

Nar du skal betale, kan du bruke disse frasene:

| Tysk | Norsk |
|------|-------|
| Ich mochte zahlen | Jeg vil betale |
| Kann ich mit Karte zahlen? | Kan jeg betale med kort? |
| Nur bar | Kun kontant |
| Das macht ... Euro | Det blir ... euro |
| Der Kassenbon | Kvitteringen |`,
    },
    {
      id: 'tysk-1-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Betaling',
      problem: `Fullfoor dialogen:

Kunde: Die Jacke ___ mir gut. Ich ___ sie.
Verkaufer: Das macht 49 Euro.
Kunde: Kann ich mit ___ zahlen?
Verkaufer: Ja, naturlich.`,
      solution: `Kunde: Die Jacke **passt** mir gut. Ich **nehme** sie.
Verkaufer: Das macht 49 Euro.
Kunde: Kann ich mit **Karte** zahlen?
Verkaufer: Ja, naturlich.

**Oversettelse:** Jakken passer meg godt. Jeg tar den. - Det blir 49 euro. - Kan jeg betale med kort? - Ja, selvfoelgelig.`,
    },
    {
      id: 'tysk-1-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Ich ___ eine Hose. (leter etter)', solution: 'suche', answer: 'suche' },
          { label: 'b', task: 'Das ___ mir nicht. (passer)', solution: 'passt', answer: 'passt' },
          { label: 'c', task: 'Das ist zu ___. (stort)', solution: 'gross', answer: 'gross' },
          { label: 'd', task: 'Ich ___ es. (tar)', solution: 'nehme', answer: 'nehme' },
        ],
        solution: 'a) suche, b) passt, c) gross, d) nehme',
        hints: ['suchen = a lete etter', 'passen = a passe', 'nehmen = a ta'],
      },
    },
    {
      id: 'tysk-1-7-2-text-2',
      type: 'text',
      content: `## Verbet "mogen" (a ville/oenske)

For hoeflige oeonsker bruker vi "mochten" (konjunktiv av "mogen"):

| Person | Form |
|--------|------|
| ich | mochte |
| du | mochtest |
| er/sie/es | mochte |
| wir | mochten |
| ihr | mochtet |
| sie/Sie | mochten |

Eksempel: Ich mochte diese Jacke anprobieren. (Jeg vil gjerne prove denne jakken.)`,
    },
    {
      id: 'tysk-1-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Mochten',
      problem: `Oversett til tysk med "mochten":

a) Jeg vil gjerne ha en bukse.
b) Hun vil gjerne prove kjolen.
c) Vi vil gjerne betale.`,
      solution: `a) **Ich mochte eine Hose.**
b) **Sie mochte das Kleid anprobieren.**
c) **Wir mochten zahlen.**

**Merk:** "mochten" er mer hoeflig enn "wollen" (vil).`,
    },
    {
      id: 'tysk-1-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setninger med "mochten":',
        subTasks: [
          { label: 'a', task: 'jeg / prove / genseren', solution: 'Ich mochte den Pullover anprobieren.', answer: 'Ich mochte den Pullover anprobieren' },
          { label: 'b', task: 'han / ha / en jakke', solution: 'Er mochte eine Jacke.', answer: 'Er mochte eine Jacke' },
          { label: 'c', task: 'de / betale / med kort', solution: 'Sie mochten mit Karte zahlen.', answer: 'Sie mochten mit Karte zahlen' },
        ],
        solution: 'a) Ich mochte den Pullover anprobieren, b) Er mochte eine Jacke, c) Sie mochten mit Karte zahlen',
        hints: ['mochten + infinitiv star til slutt', 'Husk akkusativ: der -> den'],
      },
    },
    {
      id: 'tysk-1-7-2-tip-1',
      type: 'tip',
      content: `I Tyskland aapner de fleste butikker kl. 10 og stenger rundt kl. 18-20. Pa loerdager stenger mange butikker tidligere, og de fleste butikker er stengt pa sondager (unntatt i storbyene eller ved spesielle anledninger).`,
    },
    {
      id: 'tysk-1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en kort dialog i en klesbutikk (4-6 setninger). Bruk minst 3 av disse frasene: Kann ich Ihnen helfen, Ich suche, anprobieren, Was kostet, Ich nehme es',
        subTasks: [
          { label: 'a', task: 'Ekspeditoerens foerste setning', solution: 'Guten Tag! Kann ich Ihnen helfen?' },
          { label: 'b', task: 'Kundens svar', solution: 'Ja, ich suche ein T-Shirt.' },
          { label: 'c', task: 'Avslutt dialogen', solution: 'Was kostet es? - Das macht 25 Euro. - Ich nehme es.' },
        ],
        solution: 'Eksempel: "Verkaufer: Guten Tag! Kann ich Ihnen helfen? Kunde: Ja, ich suche ein T-Shirt. Kann ich das blaue anprobieren? Verkaufer: Naturlich! Was kostet es? Das macht 25 Euro. Kunde: Gut, ich nehme es."',
        hints: ['Start med en hilsen', 'Bruk hoeflig form (Sie)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Farben und Grossen - Farger og stoerrelser
// ============================================================================

export const CHAPTER_TYSK_1_7_3: TextbookChapter = {
  id: 'tysk-1-7-3',
  courseId: 'tysk-1',
  chapterNumber: '7.3',
  title: 'Farben und Grossen',
  subtitle: 'Farger og stoerrelser',
  description: 'Laer farger og stoerrelser for a beskrive klaer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere fargene pa tysk',
    'forstaa og bruke stoerrelsesbetegnelser',
    'beskrive klaer med farge og stoerrelse',
  ],
  content: [
    {
      id: 'tysk-1-7-3-intro',
      type: 'text',
      content: `## Farger og stoerrelser

For a beskrive klaer trenger du a kunne fargene og stoerrelsene. La oss repetere fargene og laere hvordan vi beskriver klaer!`,
    },
    {
      id: 'tysk-1-7-3-def-1',
      type: 'definition',
      title: 'Die Farben - Fargene',
      content: `**Grunnfargene:**

| Tysk | Norsk |
|------|-------|
| rot | roed |
| blau | bla |
| gelb | gul |
| grun | groenn |
| weiss | hvit |
| schwarz | svart |
| braun | brun |
| grau | gra |
| orange | oransje |
| rosa | rosa |
| lila | lilla |
| beige | beige |`,
    },
    {
      id: 'tysk-1-7-3-text-1',
      type: 'text',
      content: `**Fargenyanser:**

| Tysk | Norsk |
|------|-------|
| hellblau | lyseblaa |
| dunkelblau | moerkeblaa |
| hellgrun | lysegroen |
| dunkelgrun | moerkegroen |
| hellrot | lyseroed |
| dunkelrot | moerkeroed |

**Tips:** "hell" = lys, "dunkel" = moerk`,
    },
    {
      id: 'tysk-1-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Farger',
      problem: `Oversett til norsk:

a) Das rote Kleid
b) Die blaue Jacke
c) Der schwarze Mantel
d) Die weissen Schuhe`,
      solution: `a) Das rote Kleid = **den roede kjolen**
b) Die blaue Jacke = **den blaa jakken**
c) Der schwarze Mantel = **den svarte frakken**
d) Die weissen Schuhe = **de hvite skoene**

**Merk:** Nar adjektivet star foran substantivet, far det en endelse (-e, -en osv.)`,
    },
    {
      id: 'tysk-1-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fargene til tysk:',
        subTasks: [
          { label: 'a', task: 'roed', solution: 'rot', answer: 'rot' },
          { label: 'b', task: 'blaa', solution: 'blau', answer: 'blau' },
          { label: 'c', task: 'groenn', solution: 'grun', answer: 'grun' },
          { label: 'd', task: 'svart', solution: 'schwarz', answer: 'schwarz' },
        ],
        solution: 'a) rot, b) blau, c) grun, d) schwarz',
        hints: ['Grun har omlyd (u)', 'Schwarz har "sch" i starten'],
      },
    },
    {
      id: 'tysk-1-7-3-def-2',
      type: 'definition',
      title: 'Die Grossen - Stoerrelsene',
      content: `**Klaesstoerrelser:**

| Tysk | Norsk |
|------|-------|
| XS - extra klein | ekstra liten |
| S - klein | liten |
| M - mittel | medium |
| L - gross | stor |
| XL - extra gross | ekstra stor |
| XXL | dobbel ekstra stor |

**Sporre om stoerrelse:**
- Welche Grosse haben Sie? = Hvilken stoerrelse har du?
- Ich habe Grosse M = Jeg har stoerrelse M`,
    },
    {
      id: 'tysk-1-7-3-text-2',
      type: 'text',
      content: `**Skostoerrelser:**

I Tyskland brukes europeiske skostoerrelser (36, 37, 38 osv.).

| Tysk | Norsk |
|------|-------|
| Welche Schuhgrosse haben Sie? | Hvilken skostoerrelse har du? |
| Ich habe Schuhgrosse 42 | Jeg har skostoerrelse 42 |
| Die Schuhe sind zu eng | Skoene er for trange |
| Die Schuhe sind zu weit | Skoene er for vide |`,
    },
    {
      id: 'tysk-1-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Stoerrelser',
      problem: `Fullfoor setningene:

a) Ich suche das T-Shirt in Grosse ___ (medium).
b) Haben Sie die Hose in ___ (stor)?
c) Die Schuhe sind zu ___. Haben Sie Grosse 44? (sma)`,
      solution: `a) Ich suche das T-Shirt in Grosse **M** (eller **mittel**).
b) Haben Sie die Hose in **L** (eller **gross**)?
c) Die Schuhe sind zu **klein**. Haben Sie Grosse 44?

**Nyttig ordforraad:**
- zu klein = for liten
- zu gross = for stor
- genau richtig = akkurat riktig`,
    },
    {
      id: 'tysk-1-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'stoerrelse L', solution: 'Grosse L', answer: 'Grosse L' },
          { label: 'b', task: 'for stor', solution: 'zu gross', answer: 'zu gross' },
          { label: 'c', task: 'for liten', solution: 'zu klein', answer: 'zu klein' },
          { label: 'd', task: 'hvilken stoerrelse', solution: 'welche Grosse', answer: 'welche Grosse' },
        ],
        solution: 'a) Grosse L, b) zu gross, c) zu klein, d) welche Grosse',
        hints: ['Grosse skrives med stor G', 'zu = for'],
      },
    },
    {
      id: 'tysk-1-7-3-text-3',
      type: 'text',
      content: `## Beskrive klaer med farge og stoerrelse

Nar vi beskriver klaer, setter vi fargen foran substantivet:

- **ein rotes Kleid** = en roed kjole
- **eine blaue Hose** = en blaa bukse
- **ein weisses Hemd** = en hvit skjorte

Merk at adjektivet far ulike endelser avhengig av artikkel og kjoenn!`,
    },
    {
      id: 'tysk-1-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Farge + klaesplagg',
      problem: `Sett sammen til setninger:

a) Ich suche + ein + blau + Hemd
b) Haben Sie + eine + rot + Jacke?
c) Die + schwarz + Schuhe sind schon.`,
      solution: `a) Ich suche **ein blaues Hemd**.
b) Haben Sie **eine rote Jacke**?
c) **Die schwarzen Schuhe** sind schon.

**Adjektivendelser:**
- Med "ein" + inkjetkjonn: -es (ein blaues Hemd)
- Med "eine" + hunkjonn: -e (eine rote Jacke)
- Med "die" + flertall: -en (die schwarzen Schuhe)`,
    },
    {
      id: 'tysk-1-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk (bruk riktig adjektivendelse):',
        subTasks: [
          { label: 'a', task: 'en groenn genser', solution: 'ein gruner Pullover', answer: 'ein gruner Pullover' },
          { label: 'b', task: 'en hvit bluse', solution: 'eine weisse Bluse', answer: 'eine weisse Bluse' },
          { label: 'c', task: 'de brune skoene', solution: 'die braunen Schuhe', answer: 'die braunen Schuhe' },
        ],
        solution: 'a) ein gruner Pullover, b) eine weisse Bluse, c) die braunen Schuhe',
        hints: ['Pullover er hankjonn (der/ein)', 'Med "ein" + hankjonn: -er', 'Med "die" + flertall: -en'],
      },
    },
    {
      id: 'tysk-1-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv klaer - kombiner farge og stoerrelse:',
        subTasks: [
          { label: 'a', task: 'Beskriv: blaa kjole, stoerrelse S', solution: 'ein blaues Kleid in Grosse S', answer: 'ein blaues Kleid in Grosse S' },
          { label: 'b', task: 'Beskriv: svart jakke, stoerrelse M', solution: 'eine schwarze Jacke in Grosse M', answer: 'eine schwarze Jacke in Grosse M' },
          { label: 'c', task: 'Beskriv: roede sko, stoerrelse 40', solution: 'rote Schuhe in Grosse 40', answer: 'rote Schuhe in Grosse 40' },
        ],
        solution: 'a) ein blaues Kleid in Grosse S, b) eine schwarze Jacke in Grosse M, c) rote Schuhe in Grosse 40',
        hints: ['Kleid er inkjetkjonn (das)', 'Schuhe er alltid flertall'],
      },
    },
    {
      id: 'tysk-1-7-3-tip-1',
      type: 'tip',
      content: `Nar du handler i Tyskland, vit at stoerrelsen kan variere mellom merker. Det kan vaere lurt a prove klaerne foer du kjoeper!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Was tragst du? - Hva har du pa deg?
// ============================================================================

export const CHAPTER_TYSK_1_7_4: TextbookChapter = {
  id: 'tysk-1-7-4',
  courseId: 'tysk-1',
  chapterNumber: '7.4',
  title: 'Was tragst du?',
  subtitle: 'Hva har du pa deg?',
  description: 'Laer a beskrive hva du og andre har pa seg.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke verbet "tragen" (a ha pa seg)',
    'beskrive egne og andres antrekk',
    'snakke om klaer til ulike anledninger',
  ],
  content: [
    {
      id: 'tysk-1-7-4-intro',
      type: 'text',
      content: `## Hva har du pa deg?

For a beskrive hva noen har pa seg, bruker vi verbet "tragen" (a baere/ha pa seg). La oss laere a snakke om antrekk!`,
    },
    {
      id: 'tysk-1-7-4-def-1',
      type: 'definition',
      title: 'Verbet "tragen" - a ha pa seg',
      content: `**Boeyning av "tragen":**

| Person | Form |
|--------|------|
| ich | trage |
| du | tragst |
| er/sie/es | tragt |
| wir | tragen |
| ihr | tragt |
| sie/Sie | tragen |

**Merk:** "tragen" er et sterkt verb - "a" blir til "a" med omlyd i du- og er/sie/es-formen.`,
    },
    {
      id: 'tysk-1-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Tragen',
      problem: `Oversett til norsk:

a) Ich trage eine Jeans.
b) Er tragt ein blaues Hemd.
c) Was tragst du heute?`,
      solution: `a) Ich trage eine Jeans = **Jeg har pa meg en jeans.**
b) Er tragt ein blaues Hemd = **Han har pa seg en blaa skjorte.**
c) Was tragst du heute? = **Hva har du pa deg i dag?**

**Alternativ oversettelse:** "tragen" kan ogsa oversettes med "baerer" - "Jeg baerer en jeans."`,
    },
    {
      id: 'tysk-1-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "tragen":',
        subTasks: [
          { label: 'a', task: 'Ich ___ einen Rock.', solution: 'trage', answer: 'trage' },
          { label: 'b', task: 'Du ___ eine schone Jacke.', solution: 'tragst', answer: 'tragst' },
          { label: 'c', task: 'Sie ___ schwarze Schuhe.', solution: 'tragt', answer: 'tragt' },
          { label: 'd', task: 'Wir ___ Jeans.', solution: 'tragen', answer: 'tragen' },
        ],
        solution: 'a) trage, b) tragst, c) tragt, d) tragen',
        hints: ['Med "ich" bruker vi "trage"', 'Med "du" far verbet -st ending'],
      },
    },
    {
      id: 'tysk-1-7-4-text-1',
      type: 'text',
      content: `## Beskrive antrekk

**Nyttige setninger:**

| Tysk | Norsk |
|------|-------|
| Heute trage ich... | I dag har jeg pa meg... |
| Er/Sie tragt... | Han/Hun har pa seg... |
| Ich trage gern... | Jeg liker a ha pa meg... |
| Das steht dir gut! | Det kler deg! |
| Das passt gut zusammen | Det passer godt sammen |`,
    },
    {
      id: 'tysk-1-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive antrekk',
      problem: `Beskriv hva personen har pa seg:

Maria: blaa kjole, hvite sko, roedt skjerf`,
      solution: `**Maria tragt ein blaues Kleid, weisse Schuhe und einen roten Schal.**

Eller i flere setninger:
- Maria tragt ein blaues Kleid.
- Sie tragt weisse Schuhe.
- Sie tragt auch einen roten Schal.

**Merk akkusativ:**
- einen roten Schal (hankjonn - der Schal -> einen Schal)
- ein blaues Kleid (inkjetkjonn - das Kleid -> ein Kleid)
- weisse Schuhe (flertall - uendret)`,
    },
    {
      id: 'tysk-1-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg har pa meg en genser.', solution: 'Ich trage einen Pullover.', answer: 'Ich trage einen Pullover' },
          { label: 'b', task: 'Han har pa meg svarte bukser.', solution: 'Er tragt schwarze Hosen.', answer: 'Er tragt schwarze Hosen' },
          { label: 'c', task: 'Hva har du pa deg i dag?', solution: 'Was tragst du heute?', answer: 'Was tragst du heute' },
        ],
        solution: 'a) Ich trage einen Pullover, b) Er tragt schwarze Hosen, c) Was tragst du heute?',
        hints: ['Pullover er hankjonn: der -> einen', 'Hosen er flertall'],
      },
    },
    {
      id: 'tysk-1-7-4-text-2',
      type: 'text',
      content: `## Klaer til ulike anledninger

| Anledning | Tysk | Norsk |
|-----------|------|-------|
| in der Schule | pa skolen | vanlige klaer |
| auf einer Party | pa en fest | festklaer |
| beim Sport | nar man trener | sportstoey |
| im Buro | pa kontoret | formelle klaer |
| zu Hause | hjemme | avslappede klaer |`,
    },
    {
      id: 'tysk-1-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Klaer til anledninger',
      problem: `Hva har du vanligvis pa deg i disse situasjonene?

a) In der Schule
b) Auf einer Party
c) Beim Sport`,
      solution: `**Eksempelsvar:**

a) In der Schule trage ich eine Jeans und ein T-Shirt.
*(Pa skolen har jeg pa meg jeans og t-skjorte.)*

b) Auf einer Party trage ich ein schickes Kleid/einen Anzug.
*(Pa en fest har jeg pa meg en fin kjole/dress.)*

c) Beim Sport trage ich Sportkleidung: Shorts und ein T-Shirt.
*(Nar jeg trener har jeg pa meg sportstoey: shorts og t-skjorte.)*

**Nye ord:**
- schick = stilig, fin
- der Anzug = dress
- die Sportkleidung = sportstoey`,
    },
    {
      id: 'tysk-1-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hva du har pa deg i disse situasjonene:',
        subTasks: [
          { label: 'a', task: 'Zu Hause trage ich...', solution: 'Valgfritt - f.eks. eine bequeme Hose und ein T-Shirt' },
          { label: 'b', task: 'In der Schule trage ich...', solution: 'Valgfritt - f.eks. Jeans und einen Pullover' },
          { label: 'c', task: 'Auf einer Party trage ich...', solution: 'Valgfritt - f.eks. ein schickes Kleid / eine elegante Hose' },
        ],
        solution: 'Svar vil variere. Eksempel: a) Zu Hause trage ich eine bequeme Hose und ein T-Shirt, b) In der Schule trage ich Jeans und einen Pullover, c) Auf einer Party trage ich ein schickes Kleid.',
        hints: ['bequem = komfortabel', 'schick = fin/stilig'],
      },
    },
    {
      id: 'tysk-1-7-4-text-3',
      type: 'text',
      content: `## Komplimenter og meninger

| Tysk | Norsk |
|------|-------|
| Das steht dir gut! | Det kler deg! |
| Das gefallt mir | Jeg liker det |
| Das ist schon | Det er pent |
| Das ist modern | Det er moderne |
| Das ist bequem | Det er komfortabelt |
| Das ist praktisch | Det er praktisk |`,
    },
    {
      id: 'tysk-1-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv ditt favorittantrekk (3-4 setninger pa tysk):',
        subTasks: [
          { label: 'a', task: 'Hvilke klaesplagg har du pa deg?', solution: 'Nevn 2-3 klaesplagg pa tysk' },
          { label: 'b', task: 'Hvilke farger har de?', solution: 'Beskriv fargene pa tysk' },
          { label: 'c', task: 'Hvorfor liker du dette antrekket?', solution: 'Bruk ord som bequem, schon, praktisch' },
        ],
        solution: 'Eksempel: "Mein Lieblingsoutfit ist eine blaue Jeans und ein weisses T-Shirt. Dazu trage ich schwarze Schuhe. Das ist bequem und praktisch."',
        hints: ['Mein Lieblingsoutfit = favorittantrekket mitt', 'dazu = i tillegg'],
      },
    },
    {
      id: 'tysk-1-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Kleskoder i Tyskland',
      content: `Tyskere er generelt litt mer formelle i klesveien enn nordmenn. Pa jobb, spesielt i storre bedrifter, er det vanlig med formelle klaer. I fritiden er stilen mer avslappet, men "Freizeitlook" (fritidsantrekk) er sjelden veldig uformelt. Unge tyskere foelger ofte internasjonale motetraender.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: Die Schule - Skolen
// ============================================================================

export const CHAPTER_TYSK_1_8_1: TextbookChapter = {
  id: 'tysk-1-8-1',
  courseId: 'tysk-1',
  chapterNumber: '8.1',
  title: 'Die Schule',
  subtitle: 'Skolen',
  description: 'Laer ord for skolehverdagen og klasserommet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere ord for skolemiljoe',
    'beskrive klasserommet',
    'snakke om skolehverdagen',
  ],
  content: [
    {
      id: 'tysk-1-8-1-intro',
      type: 'text',
      content: `## Skolen pa tysk

Skolen er en viktig del av hverdagen. La oss laere de viktigste ordene for a snakke om skolen pa tysk!`,
    },
    {
      id: 'tysk-1-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Skolebygg',
      content: `**Deler av skolen:**

| Tysk | Norsk |
|------|-------|
| die Schule | skolen |
| das Klassenzimmer | klasserommet |
| die Aula | aulaen |
| die Bibliothek | biblioteket |
| die Kantine / die Mensa | kantinen |
| die Turnhalle | gymsalen |
| der Schulhof | skolegaarden |
| das Lehrerzimmer | laerervarelset |`,
    },
    {
      id: 'tysk-1-8-1-def-2',
      type: 'definition',
      title: 'Vokabular: I klasserommet',
      content: `**Ting i klasserommet:**

| Tysk | Norsk |
|------|-------|
| der Tisch | bordet |
| der Stuhl | stolen |
| die Tafel | tavla |
| das Whiteboard | whiteboard |
| der Computer | datamaskin |
| der Projektor | projektor |
| die Landkarte | kartet |
| das Fenster | vinduet |
| die Tur | doeren |`,
    },
    {
      id: 'tysk-1-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: I klasserommet',
      problem: `Oversett til norsk:

a) das Klassenzimmer
b) die Tafel
c) der Schulhof
d) die Turnhalle`,
      solution: `a) das Klassenzimmer = **klasserommet**
b) die Tafel = **tavla**
c) der Schulhof = **skolegaarden**
d) die Turnhalle = **gymsalen**

**Sammensatte ord:** Tysk lager ofte lange, sammensatte ord:
- Klasse + Zimmer = Klassenzimmer (klasserom)
- Schul + Hof = Schulhof (skolegaard)
- Turn + Halle = Turnhalle (gymsal)`,
    },
    {
      id: 'tysk-1-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'skolen', solution: 'die Schule', answer: 'die Schule' },
          { label: 'b', task: 'klasserommet', solution: 'das Klassenzimmer', answer: 'das Klassenzimmer' },
          { label: 'c', task: 'kantinen', solution: 'die Kantine / die Mensa', answer: 'die Kantine' },
          { label: 'd', task: 'biblioteket', solution: 'die Bibliothek', answer: 'die Bibliothek' },
        ],
        solution: 'a) die Schule, b) das Klassenzimmer, c) die Kantine/Mensa, d) die Bibliothek',
        hints: ['Schule er hunkjonn', 'Zimmmer betyr rom'],
      },
    },
    {
      id: 'tysk-1-8-1-def-3',
      type: 'definition',
      title: 'Vokabular: Personer pa skolen',
      content: `**Mennesker pa skolen:**

| Tysk | Norsk |
|------|-------|
| der Lehrer | laereren (mann) |
| die Lehrerin | laereren (kvinne) |
| der Schuler | eleven (gutt) |
| die Schulerin | eleven (jente) |
| die Klasse | klassen |
| der Direktor | rektoren (mann) |
| die Direktorin | rektoren (kvinne) |
| der Mitschuler | meddeleven |`,
    },
    {
      id: 'tysk-1-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Personer',
      problem: `Les og oversett:

Der Lehrer steht an der Tafel.
Die Schuler sitzen auf den Stuhlen.
Die Direktorin ist im Buro.`,
      solution: `**Der Lehrer steht an der Tafel.**
= Laereren star ved tavla.

**Die Schuler sitzen auf den Stuhlen.**
= Elevene sitter pa stolene.

**Die Direktorin ist im Buro.**
= Rektoren (kvinne) er pa kontoret.

**Nye verb:**
- stehen = a sta
- sitzen = a sitte`,
    },
    {
      id: 'tysk-1-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvem er hvem? Koble tysk med norsk:',
        subTasks: [
          { label: 'a', task: 'der Lehrer', solution: 'laereren (mann)', answer: 'laereren' },
          { label: 'b', task: 'die Schulerin', solution: 'eleven (jente)', answer: 'eleven' },
          { label: 'c', task: 'der Direktor', solution: 'rektoren (mann)', answer: 'rektoren' },
          { label: 'd', task: 'die Mitschuler', solution: 'medelevenene', answer: 'medelevene' },
        ],
        solution: 'a) laereren (mann), b) eleven (jente), c) rektoren (mann), d) medelevenene',
        hints: ['-er er ofte hankjonn', '-in viser at det er en kvinne'],
      },
    },
    {
      id: 'tysk-1-8-1-text-1',
      type: 'text',
      content: `## Skolemateriell

**Skolesakene dine:**

| Tysk | Norsk |
|------|-------|
| das Buch | boken |
| das Heft | skriveboken/heftet |
| der Kugelschreiber / der Kuli | kulepennen |
| der Bleistift | blyanten |
| der Radiergummi | viskelaeeet |
| das Lineal | linjalen |
| die Schere | saksen |
| der Rucksack | ryggsekken |
| die Schultasche | skolevesken |`,
    },
    {
      id: 'tysk-1-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hva har du i sekken?',
      problem: `Oversett til tysk:

a) Jeg har en bok i sekken.
b) Hvor er blyanten min?
c) Jeg trenger et viskelae.`,
      solution: `a) **Ich habe ein Buch im Rucksack.**
(im = in dem = i)

b) **Wo ist mein Bleistift?**
(mein = min, for hankjonn)

c) **Ich brauche einen Radiergummi.**
(brauchen = a trenge, einen = akkusativ)

**Nyttig verb:** brauchen = a trenge
- Ich brauche... = Jeg trenger...`,
    },
    {
      id: 'tysk-1-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett skolesakene til tysk (med artikkel):',
        subTasks: [
          { label: 'a', task: 'boken', solution: 'das Buch', answer: 'das Buch' },
          { label: 'b', task: 'kulepennen', solution: 'der Kugelschreiber / der Kuli', answer: 'der Kuli' },
          { label: 'c', task: 'linjalen', solution: 'das Lineal', answer: 'das Lineal' },
          { label: 'd', task: 'ryggsekken', solution: 'der Rucksack', answer: 'der Rucksack' },
        ],
        solution: 'a) das Buch, b) der Kugelschreiber/Kuli, c) das Lineal, d) der Rucksack',
        hints: ['Buch er inkjetkjonn', 'Kuli er kort for Kugelschreiber'],
      },
    },
    {
      id: 'tysk-1-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv klasserommet ditt (3 setninger pa tysk):',
        subTasks: [
          { label: 'a', task: 'Hva er i klasserommet?', solution: 'Nevn moebler og utstyr' },
          { label: 'b', task: 'Hvor mange elever er det?', solution: 'Bruk tall pa tysk' },
          { label: 'c', task: 'Hvordan er klasserommet?', solution: 'Bruk adjektiver som gross, klein, hell' },
        ],
        solution: 'Eksempel: "In meinem Klassenzimmer gibt es zwanzig Tische und zwanzig Stuhle. Es gibt auch ein Whiteboard und einen Projektor. Das Klassenzimmer ist gross und hell."',
        hints: ['es gibt = det finnes', 'hell = lyst', 'gross = stort'],
      },
    },
    {
      id: 'tysk-1-8-1-note-1',
      type: 'note',
      title: 'Kulturnotat: Skole i Tyskland',
      content: `Det tyske skolesystemet er annerledes enn det norske. Etter barneskolen (Grundschule, 1.-4. klasse) deles elevene inn i ulike skoletyper: Gymnasium (universitetsforberedende), Realschule (mellomnivaet), eller Hauptschule (yrkesrettet). Mange tyske skoler har undervisning kun pa formiddagen, og elevene har fri om ettermiddagen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Die Schulfacher - Skolefagene
// ============================================================================

export const CHAPTER_TYSK_1_8_2: TextbookChapter = {
  id: 'tysk-1-8-2',
  courseId: 'tysk-1',
  chapterNumber: '8.2',
  title: 'Die Schulfacher',
  subtitle: 'Skolefagene',
  description: 'Laer navnene pa skolefag og uttrykk om favorittfag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere navnene pa skolefag',
    'snakke om favorittfag',
    'uttrykke meninger om fag',
  ],
  content: [
    {
      id: 'tysk-1-8-2-intro',
      type: 'text',
      content: `## Skolefagene pa tysk

Hvilke fag har du pa skolen? La oss laere hva de heter pa tysk og hvordan du kan snakke om dem!`,
    },
    {
      id: 'tysk-1-8-2-def-1',
      type: 'definition',
      title: 'Vokabular: Hovedfag',
      content: `**Hovedfagene:**

| Tysk | Norsk |
|------|-------|
| Deutsch | tysk |
| Englisch | engelsk |
| Mathematik / Mathe | matematikk/matte |
| Naturwissenschaften | naturfag |
| Geschichte | historie |
| Geographie / Erdkunde | geografi |
| Religion | religion |`,
    },
    {
      id: 'tysk-1-8-2-def-2',
      type: 'definition',
      title: 'Vokabular: Andre fag',
      content: `**Flere fag:**

| Tysk | Norsk |
|------|-------|
| Kunst | kunst |
| Musik | musikk |
| Sport | gym/kroppsoeving |
| Informatik | informatikk/IT |
| Physik | fysikk |
| Chemie | kjemi |
| Biologie | biologi |
| Franzosisch | fransk |
| Spanisch | spansk |`,
    },
    {
      id: 'tysk-1-8-2-tip-1',
      type: 'tip',
      content: `De fleste fagnavn pa tysk ligner pa de norske eller engelske ordene: Physik = fysikk, Chemie = kjemi, Biologie = biologi. Dette gjoer det lettere a huske dem!`,
    },
    {
      id: 'tysk-1-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fagnavn',
      problem: `Oversett til norsk:

a) Mathematik
b) Geschichte
c) Englisch
d) Kunst`,
      solution: `a) Mathematik = **matematikk**
b) Geschichte = **historie**
c) Englisch = **engelsk**
d) Kunst = **kunst**

**Merk:** Pa tysk skrives fagnavn ofte med stor forbokstav fordi de er substantiver.`,
    },
    {
      id: 'tysk-1-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fagene til tysk:',
        subTasks: [
          { label: 'a', task: 'matematikk', solution: 'Mathematik', answer: 'Mathematik' },
          { label: 'b', task: 'engelsk', solution: 'Englisch', answer: 'Englisch' },
          { label: 'c', task: 'historie', solution: 'Geschichte', answer: 'Geschichte' },
          { label: 'd', task: 'musikk', solution: 'Musik', answer: 'Musik' },
        ],
        solution: 'a) Mathematik, b) Englisch, c) Geschichte, d) Musik',
        hints: ['Mathematik skrives med "th"', 'Geschichte kommer fra "Geschehen" (a skje)'],
      },
    },
    {
      id: 'tysk-1-8-2-text-1',
      type: 'text',
      content: `## Snakke om favorittfag

**Nyttige uttrykk:**

| Tysk | Norsk |
|------|-------|
| Mein Lieblingsfach ist... | Favorittfaget mitt er... |
| Ich mag ... | Jeg liker ... |
| ... gefallt mir | ... behager meg / jeg liker |
| ... ist interessant | ... er interessant |
| ... ist langweilig | ... er kjedelig |
| ... ist schwer/schwierig | ... er vanskelig |
| ... ist einfach/leicht | ... er lett |`,
    },
    {
      id: 'tysk-1-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Favorittfag',
      problem: `Les og oversett:

a) Mein Lieblingsfach ist Musik.
b) Mathematik ist schwer, aber interessant.
c) Sport gefallt mir sehr gut.`,
      solution: `a) Mein Lieblingsfach ist Musik.
= **Favorittfaget mitt er musikk.**

b) Mathematik ist schwer, aber interessant.
= **Matematikk er vanskelig, men interessant.**

c) Sport gefallt mir sehr gut.
= **Jeg liker gym veldig godt.**

**Grammatikktips:** "gefallen" brukes med dativ:
- Das Fach gefallt mir = Faget behager meg (= jeg liker faget)`,
    },
    {
      id: 'tysk-1-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Favorittfaget mitt er historie.', solution: 'Mein Lieblingsfach ist Geschichte.', answer: 'Mein Lieblingsfach ist Geschichte' },
          { label: 'b', task: 'Jeg liker matematikk.', solution: 'Ich mag Mathematik. / Mathematik gefallt mir.', answer: 'Ich mag Mathematik' },
          { label: 'c', task: 'Kunst er interessant.', solution: 'Kunst ist interessant.', answer: 'Kunst ist interessant' },
        ],
        solution: 'a) Mein Lieblingsfach ist Geschichte, b) Ich mag Mathematik, c) Kunst ist interessant',
        hints: ['Lieblingsfach = favorittfag', 'mogen = a like'],
      },
    },
    {
      id: 'tysk-1-8-2-text-2',
      type: 'text',
      content: `## Timeplan og skolehverdag

**Ord for timeplanen:**

| Tysk | Norsk |
|------|-------|
| der Stundenplan | timeplanen |
| die Stunde | timen |
| die Pause | pausen/friminuttet |
| die grosse Pause | storefri |
| die Hausaufgaben | leksene |
| die Prufung / der Test | proeven |
| die Note | karakteren |`,
    },
    {
      id: 'tysk-1-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skoledagen',
      problem: `Beskriv skoledagen:

Am Montag habe ich zuerst Deutsch, dann Mathematik.
In der Pause esse ich mein Pausenbrot.
Nach der Schule mache ich Hausaufgaben.`,
      solution: `**Am Montag habe ich zuerst Deutsch, dann Mathematik.**
= Pa mandag har jeg foerst tysk, sa matematikk.

**In der Pause esse ich mein Pausenbrot.**
= I pausen spiser jeg matpakken min.

**Nach der Schule mache ich Hausaufgaben.**
= Etter skolen gjoer jeg lekser.

**Tidsord:**
- zuerst = foerst
- dann = sa/deretter
- nach = etter`,
    },
    {
      id: 'tysk-1-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Hva heter "timeplan" pa tysk?', solution: 'der Stundenplan', answer: 'Stundenplan' },
          { label: 'b', task: 'Hva heter "lekser" pa tysk?', solution: 'die Hausaufgaben', answer: 'Hausaufgaben' },
          { label: 'c', task: 'Hva heter "proeve" pa tysk?', solution: 'die Prufung / der Test', answer: 'Prufung' },
          { label: 'd', task: 'Hva heter "karakter" pa tysk?', solution: 'die Note', answer: 'Note' },
        ],
        solution: 'a) Stundenplan, b) Hausaufgaben, c) Prufung/Test, d) Note',
        hints: ['Stunde = time, Plan = plan', 'Haus = hjem, Aufgaben = oppgaver'],
      },
    },
    {
      id: 'tysk-1-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om skoledagen din pa tysk (4-5 setninger):',
        subTasks: [
          { label: 'a', task: 'Hvilke fag har du i dag?', solution: 'Nevn minst 3 fag pa tysk' },
          { label: 'b', task: 'Hva er favorittfaget ditt og hvorfor?', solution: 'Bruk adjektiver' },
          { label: 'c', task: 'Hva gjoer du etter skolen?', solution: 'Bruk "nach der Schule"' },
        ],
        solution: 'Eksempel: "Heute habe ich Deutsch, Mathematik und Sport. Mein Lieblingsfach ist Sport, weil es Spass macht. Mathematik ist schwer, aber interessant. Nach der Schule mache ich Hausaufgaben."',
        hints: ['weil = fordi', 'Spass machen = a vaere goy'],
      },
    },
    {
      id: 'tysk-1-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Karaktersystem',
      content: `I Tyskland brukes et karaktersystem fra 1-6, der 1 er best og 6 er stryk. Dette er motsatt av mange andre land! Karakterene er: 1 (sehr gut = veldig bra), 2 (gut = bra), 3 (befriedigend = tilfredsstillende), 4 (ausreichend = tilstrekkelig), 5 (mangelhaft = mangelfull), 6 (ungenugend = utilstrekkelig/stryk).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Berufe - Yrker
// ============================================================================

export const CHAPTER_TYSK_1_8_3: TextbookChapter = {
  id: 'tysk-1-8-3',
  courseId: 'tysk-1',
  chapterNumber: '8.3',
  title: 'Berufe',
  subtitle: 'Yrker',
  description: 'Laer navnene pa vanlige yrker pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere ord for ulike yrker',
    'forstaa hankjonn og hunkjonn for yrker',
    'beskrive hva folk jobber med',
  ],
  content: [
    {
      id: 'tysk-1-8-3-intro',
      type: 'text',
      content: `## Yrker pa tysk

Hva vil du bli nar du blir stor? La oss laere navnene pa ulike yrker pa tysk!

Pa tysk har de fleste yrker to former - en for menn og en for kvinner. Kvinneformen far ofte endelsen "-in".`,
    },
    {
      id: 'tysk-1-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Vanlige yrker',
      content: `**Yrker (hankjonn og hunkjonn):**

| Hankjonn | Hunkjonn | Norsk |
|----------|----------|-------|
| der Arzt | die Arztin | lege |
| der Lehrer | die Lehrerin | laerer |
| der Polizist | die Polizistin | politibetjent |
| der Ingenieur | die Ingenieurin | ingenioer |
| der Krankenpfleger | die Krankenschwester | sykepleier |
| der Koch | die Kochin | kokk |
| der Verkaufer | die Verkauferin | ekspediteer |`,
    },
    {
      id: 'tysk-1-8-3-def-2',
      type: 'definition',
      title: 'Flere yrker',
      content: `**Flere vanlige yrker:**

| Hankjonn | Hunkjonn | Norsk |
|----------|----------|-------|
| der Rechtsanwalt | die Rechtsanwaltin | advokat |
| der Architekt | die Architektin | arkitekt |
| der Journalist | die Journalistin | journalist |
| der Mechaniker | die Mechanikerin | mekaniker |
| der Elektriker | die Elektrikerin | elektrikeer |
| der Friseur | die Friseurin | frisoer |
| der Musiker | die Musikerin | musiker |`,
    },
    {
      id: 'tysk-1-8-3-tip-1',
      type: 'tip',
      content: `Husk moensteret: de fleste hunkjoennformer av yrker far "-in" pa slutten, og substantivet blir da hunkjonn (die). Eksempel: der Lehrer -> die Lehrerin, der Arzt -> die Arztin.`,
    },
    {
      id: 'tysk-1-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Yrker',
      problem: `Oversett til norsk:

a) der Arzt
b) die Lehrerin
c) der Polizist
d) die Architektin`,
      solution: `a) der Arzt = **lege (mann)**
b) die Lehrerin = **laerer (kvinne)**
c) der Polizist = **politibetjent (mann)**
d) die Architektin = **arkitekt (kvinne)**

**Merk:** I dagligtale brukes ofte hankjoennsformen som felleskjonn, spesielt i flertall.`,
    },
    {
      id: 'tysk-1-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk (bruk hankjoennsformen):',
        subTasks: [
          { label: 'a', task: 'lege', solution: 'der Arzt', answer: 'Arzt' },
          { label: 'b', task: 'laerer', solution: 'der Lehrer', answer: 'Lehrer' },
          { label: 'c', task: 'ingenioer', solution: 'der Ingenieur', answer: 'Ingenieur' },
          { label: 'd', task: 'kokk', solution: 'der Koch', answer: 'Koch' },
        ],
        solution: 'a) der Arzt, b) der Lehrer, c) der Ingenieur, d) der Koch',
        hints: ['Arzt har ikke "doktor" i seg', 'Ingenieur likner det engelske ordet'],
      },
    },
    {
      id: 'tysk-1-8-3-text-1',
      type: 'text',
      content: `## Si hva noen jobber som

**Uttrykk for yrke:**

| Tysk | Norsk |
|------|-------|
| Was sind Sie von Beruf? | Hva jobber du som? (formelt) |
| Was bist du von Beruf? | Hva jobber du som? (uformelt) |
| Ich bin Arzt/Arztin | Jeg er lege |
| Er/Sie arbeitet als... | Han/Hun jobber som... |
| Mein Vater ist... | Faren min er... |
| Meine Mutter arbeitet als... | Moren min jobber som... |`,
    },
    {
      id: 'tysk-1-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om yrker',
      problem: `Oversett til norsk:

a) Was bist du von Beruf?
b) Ich bin Lehrerin.
c) Mein Vater arbeitet als Ingenieur.`,
      solution: `a) Was bist du von Beruf?
= **Hva jobber du som?**

b) Ich bin Lehrerin.
= **Jeg er laerer.** (sagt av en kvinne)

c) Mein Vater arbeitet als Ingenieur.
= **Faren min jobber som ingenioer.**

**Merk:** Etter "sein" (ich bin, du bist...) brukes yrket uten artikkel: "Ich bin Arzt" (ikke "Ich bin ein Arzt").`,
    },
    {
      id: 'tysk-1-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg er lege. (mann)', solution: 'Ich bin Arzt.', answer: 'Ich bin Arzt' },
          { label: 'b', task: 'Hun er laerer.', solution: 'Sie ist Lehrerin.', answer: 'Sie ist Lehrerin' },
          { label: 'c', task: 'Moren min jobber som sykepleier.', solution: 'Meine Mutter arbeitet als Krankenschwester.', answer: 'Meine Mutter arbeitet als Krankenschwester' },
        ],
        solution: 'a) Ich bin Arzt, b) Sie ist Lehrerin, c) Meine Mutter arbeitet als Krankenschwester',
        hints: ['Etter "sein" brukes ikke artikkel', 'arbeiten als = jobber som'],
      },
    },
    {
      id: 'tysk-1-8-3-text-2',
      type: 'text',
      content: `## Arbeidsplasser

**Hvor jobber folk?**

| Tysk | Norsk |
|------|-------|
| im Krankenhaus | pa sykehuset |
| in der Schule | pa skolen |
| im Buro | pa kontoret |
| in der Fabrik | pa fabrikken |
| im Restaurant | pa restauranten |
| im Geschaft | i butikken |
| zu Hause | hjemme (hjemmekontor) |`,
    },
    {
      id: 'tysk-1-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Arbeidsplasser',
      problem: `Hvor jobber disse personene?

a) Der Arzt arbeitet im ___.
b) Die Lehrerin arbeitet in der ___.
c) Der Verkaufer arbeitet im ___.`,
      solution: `a) Der Arzt arbeitet im **Krankenhaus**.
= Legen jobber pa sykehuset.

b) Die Lehrerin arbeitet in der **Schule**.
= Laereren jobber pa skolen.

c) Der Verkaufer arbeitet im **Geschaft**.
= Ekspeditoeren jobber i butikken.

**Grammatikk:**
- im = in + dem (hankjonn/inkjetkjonn)
- in der = in + der (hunkjonn)`,
    },
    {
      id: 'tysk-1-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hvor disse personene jobber:',
        subTasks: [
          { label: 'a', task: 'Der Koch arbeitet...', solution: 'im Restaurant', answer: 'im Restaurant' },
          { label: 'b', task: 'Die Krankenschwester arbeitet...', solution: 'im Krankenhaus', answer: 'im Krankenhaus' },
          { label: 'c', task: 'Der Lehrer arbeitet...', solution: 'in der Schule', answer: 'in der Schule' },
        ],
        solution: 'a) im Restaurant, b) im Krankenhaus, c) in der Schule',
        hints: ['Restaurant er inkjetkjonn', 'Schule er hunkjonn'],
      },
    },
    {
      id: 'tysk-1-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv familiens yrker (3-4 setninger pa tysk):',
        subTasks: [
          { label: 'a', task: 'Hva jobber foreldrene dine som?', solution: 'Bruk "Mein Vater ist..." / "Meine Mutter arbeitet als..."' },
          { label: 'b', task: 'Hvor jobber de?', solution: 'Bruk preposisjoner: im, in der' },
          { label: 'c', task: 'Kjenner du noen med et interessant yrke?', solution: 'Beskriv yrket' },
        ],
        solution: 'Eksempel: "Mein Vater ist Ingenieur. Er arbeitet in einer Fabrik. Meine Mutter arbeitet als Lehrerin in der Schule. Mein Onkel ist Pilot und fliegt oft nach Deutschland."',
        hints: ['fliegen = a fly', 'oft = ofte'],
      },
    },
    {
      id: 'tysk-1-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Utdanning i Tyskland',
      content: `I Tyskland er yrkesutdanning ("Ausbildung") veldig respektert. Mange unge velger a ta en laerlingutdanning etter videregaende i stedet for a ga pa universitet. Dette kalles "duale Ausbildung" fordi man kombinerer praktisk arbeid i en bedrift med teori pa skole. Populaere laerlingyrker inkluderer mekaniker, elektriker, kokk og kontormedarbeider.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Was willst du werden? - Hva vil du bli?
// ============================================================================

export const CHAPTER_TYSK_1_8_4: TextbookChapter = {
  id: 'tysk-1-8-4',
  courseId: 'tysk-1',
  chapterNumber: '8.4',
  title: 'Was willst du werden?',
  subtitle: 'Hva vil du bli?',
  description: 'Laer a snakke om fremtidsplaner og droemmeyrker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke modalverbet "wollen" (a ville)',
    'bruke "mochten" (a oenske/ville gjerne)',
    'snakke om fremtidsplaner',
  ],
  content: [
    {
      id: 'tysk-1-8-4-intro',
      type: 'text',
      content: `## Snakke om fremtiden

Hva vil du bli nar du blir voksen? I dette kapittelet laerer du a snakke om droemmer og fremtidsplaner pa tysk!`,
    },
    {
      id: 'tysk-1-8-4-def-1',
      type: 'definition',
      title: 'Verbet "wollen" - a ville',
      content: `**Boeyning av "wollen":**

| Person | Form |
|--------|------|
| ich | will |
| du | willst |
| er/sie/es | will |
| wir | wollen |
| ihr | wollt |
| sie/Sie | wollen |

**Merk:** "wollen" er et modalverb. Hovedverbet star i infinitiv til slutt i setningen.`,
    },
    {
      id: 'tysk-1-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Wollen',
      problem: `Oversett til norsk:

a) Ich will Arzt werden.
b) Was willst du werden?
c) Sie will Lehrerin werden.`,
      solution: `a) Ich will Arzt werden.
= **Jeg vil bli lege.**

b) Was willst du werden?
= **Hva vil du bli?**

c) Sie will Lehrerin werden.
= **Hun vil bli laerer.**

**Setningsstruktur:**
Subjekt + will/willst + ... + infinitiv (werden)`,
    },
    {
      id: 'tysk-1-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "wollen":',
        subTasks: [
          { label: 'a', task: 'Ich ___ Ingenieur werden.', solution: 'will', answer: 'will' },
          { label: 'b', task: 'Du ___ Arzt werden.', solution: 'willst', answer: 'willst' },
          { label: 'c', task: 'Wir ___ in Deutschland arbeiten.', solution: 'wollen', answer: 'wollen' },
          { label: 'd', task: 'Er ___ Pilot werden.', solution: 'will', answer: 'will' },
        ],
        solution: 'a) will, b) willst, c) wollen, d) will',
        hints: ['ich og er/sie/es har samme form: will', 'wir og sie/Sie har samme form: wollen'],
      },
    },
    {
      id: 'tysk-1-8-4-def-2',
      type: 'definition',
      title: 'Mochten - a oenske/ville gjerne',
      content: `**Boeyning av "mochten" (hoeflig form):**

| Person | Form |
|--------|------|
| ich | mochte |
| du | mochtest |
| er/sie/es | mochte |
| wir | mochten |
| ihr | mochtet |
| sie/Sie | mochten |

**"Mochten"** er mer hoeflig enn "wollen" og brukes ofte om oensker og droemmer.`,
    },
    {
      id: 'tysk-1-8-4-text-1',
      type: 'text',
      content: `## Wollen vs. mochten

| Tysk | Norsk | Bruk |
|------|-------|------|
| Ich will | Jeg vil | Sterk vilje |
| Ich mochte | Jeg vil gjerne | Hoeflig oenske |

**Eksempler:**
- Ich **will** Arzt werden! = Jeg **vil** bli lege! (bestemt)
- Ich **mochte** Arzt werden. = Jeg **vil gjerne** bli lege. (hoeflig/oenske)`,
    },
    {
      id: 'tysk-1-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Mochten',
      problem: `Oversett til tysk med "mochten":

a) Jeg vil gjerne bli arkitekt.
b) Hun vil gjerne jobbe i utlandet.
c) Vi vil gjerne studere i Tyskland.`,
      solution: `a) **Ich mochte Architekt werden.**
(eller Architektin for kvinner)

b) **Sie mochte im Ausland arbeiten.**
(im Ausland = i utlandet)

c) **Wir mochten in Deutschland studieren.**
(studieren = a studere)

**Nyttige ord:**
- im Ausland = i utlandet
- studieren = a studere
- arbeiten = a arbeite`,
    },
    {
      id: 'tysk-1-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk (bruk "mochten"):',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne bli journalist.', solution: 'Ich mochte Journalist werden.', answer: 'Ich mochte Journalist werden' },
          { label: 'b', task: 'Han vil gjerne jobbe som kokk.', solution: 'Er mochte als Koch arbeiten.', answer: 'Er mochte als Koch arbeiten' },
          { label: 'c', task: 'De vil gjerne studere medisin.', solution: 'Sie mochten Medizin studieren.', answer: 'Sie mochten Medizin studieren' },
        ],
        solution: 'a) Ich mochte Journalist werden, b) Er mochte als Koch arbeiten, c) Sie mochten Medizin studieren',
        hints: ['werden = a bli', 'Medizin = medisin'],
      },
    },
    {
      id: 'tysk-1-8-4-text-2',
      type: 'text',
      content: `## Begrunnelser - warum/weil

**Hvorfor vil du bli...?**

| Tysk | Norsk |
|------|-------|
| Warum? | Hvorfor? |
| Weil... | Fordi... |
| Das Geld verdienen | A tjene penger |
| Menschen helfen | A hjelpe mennesker |
| kreativ sein | A vaere kreativ |
| interessant sein | A vaere interessant |
| Spass machen | A vaere goy |`,
    },
    {
      id: 'tysk-1-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Begrunnelser',
      problem: `Les og oversett:

Warum willst du Arzt werden?
Ich mochte Arzt werden, weil ich Menschen helfen will.`,
      solution: `**Warum willst du Arzt werden?**
= Hvorfor vil du bli lege?

**Ich mochte Arzt werden, weil ich Menschen helfen will.**
= Jeg vil gjerne bli lege fordi jeg vil hjelpe mennesker.

**Viktig grammatikk:**
Etter "weil" gar verbet til slutt:
- weil ich Menschen helfen **will** (ikke: weil ich will Menschen helfen)`,
    },
    {
      id: 'tysk-1-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble yrke med begrunnelse:',
        subTasks: [
          { label: 'a', task: 'Arzt werden - weil...', solution: 'ich Menschen helfen mochte / es wichtig ist', answer: 'ich Menschen helfen mochte' },
          { label: 'b', task: 'Musiker werden - weil...', solution: 'ich kreativ sein mochte / Musik mein Leben ist', answer: 'ich Musik liebe' },
          { label: 'c', task: 'Ingenieur werden - weil...', solution: 'ich technische Probleme losen mochte / gut Geld verdienen', answer: 'es interessant ist' },
        ],
        solution: 'a) weil ich Menschen helfen mochte, b) weil ich kreativ sein mochte / weil ich Musik liebe, c) weil ich technische Probleme losen mochte / weil es gut bezahlt wird',
        hints: ['helfen = a hjelpe', 'kreativ = kreativ', 'losen = a loese'],
      },
    },
    {
      id: 'tysk-1-8-4-text-3',
      type: 'text',
      content: `## Sporsmal om fremtiden

| Tysk | Norsk |
|------|-------|
| Was willst du werden? | Hva vil du bli? |
| Was mochtest du studieren? | Hva vil du studere? |
| Wo mochtest du arbeiten? | Hvor vil du jobbe? |
| Hast du einen Traumberuf? | Har du et droemmeyrke? |
| Was sind deine Plane? | Hva er planene dine? |`,
    },
    {
      id: 'tysk-1-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om dine fremtidsplaner (5-6 setninger pa tysk):',
        subTasks: [
          { label: 'a', task: 'Hva vil du bli?', solution: 'Ich mochte ... werden' },
          { label: 'b', task: 'Hvorfor?', solution: 'weil...' },
          { label: 'c', task: 'Hva vil du studere?', solution: 'Ich mochte ... studieren' },
          { label: 'd', task: 'Hvor vil du jobbe?', solution: 'Ich mochte in/im ... arbeiten' },
        ],
        solution: 'Eksempel: "Ich mochte Ingenieur werden, weil ich Technik interessant finde. Nach der Schule mochte ich an der Universitat Maschinenbau studieren. Ich mochte spater in einer grossen Firma arbeiten. Mein Traum ist es, an neuen Technologien zu arbeiten."',
        hints: ['Maschinenbau = maskinteknologi', 'die Firma = firmaet', 'spater = senere'],
      },
    },
    {
      id: 'tysk-1-8-4-tip-1',
      type: 'tip',
      content: `Nar du snakker om fremtidsplaner pa tysk, kan du bruke bade "wollen" og "mochten". Bruk "wollen" nar du er sikker pa hva du vil, og "mochten" nar du snakker om droemmer og oensker.`,
    },
    {
      id: 'tysk-1-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Karrierevalg i Tyskland',
      content: `I Tyskland tar mange unge tidlig stilling til karrierevalg. Allerede pa 10-aarsalderen velger man skoleloep (Gymnasium, Realschule, eller Hauptschule). Mange velger a ta en "Ausbildung" (laerlingutdanning) i stedet for a studere pa universitet. Det er ogsa vanlig a ta et "Gap Year" (Auslandsjahr) eller gjore siviltjeneste for man bestemmer seg for karrieren.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_1_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_TYSK_1_7_1,
  CHAPTER_TYSK_1_7_2,
  CHAPTER_TYSK_1_7_3,
  CHAPTER_TYSK_1_7_4,
  CHAPTER_TYSK_1_8_1,
  CHAPTER_TYSK_1_8_2,
  CHAPTER_TYSK_1_8_3,
  CHAPTER_TYSK_1_8_4,
];

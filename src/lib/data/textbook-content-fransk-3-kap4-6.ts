/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivaa 3 - Kapittel 4-6 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 4: Stilistikk og retorikk (4.1-4.4)
 * - Kapittel 5: Litteratur (5.1-5.4)
 * - Kapittel 6: Film og kunst (6.1-6.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: STILISTIKK OG RETORIKK
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 Les figures de style - Stilfigurer
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_4_1: TextbookChapter = {
  id: 'fransk-3-4-1',
  courseId: 'fransk-3',
  chapterNumber: '4.1',
  title: 'Les figures de style - Stilfigurer',
  description: 'Laer de viktigste stilfigurene i fransk litteratur og retorikk, inkludert metafor, sammenligning, personifikasjon og flere.',
  estimatedMinutes: 50,
  competenceGoals: [
    'identifisere og forklare sentrale stilfigurer i franske tekster',
    'bruke stilfigurer i egen skriftlig produksjon paa fransk',
  ],
  content: [
    {
      id: 'fransk-3-4-1-intro',
      type: 'text',
      content: `## Les figures de style - Stilfigurer

Stilfigurer (les figures de style) er litteraere virkemidler som forfattere bruker for aa gjore teksten mer uttrykksfull, poetisk eller overbevisende. Aa kjenne til stilfigurene er avgjorende for aa kunne analysere franske tekster paa et avansert nivaa.

De viktigste kategoriene er:
- **Les figures d'analogie** (sammenligningsfigurer)
- **Les figures d'insistance** (forsterkningsfigurer)
- **Les figures d'opposition** (motsetningsfigurer)
- **Les figures d'attenuation** (dempningsfigurer)`,
    },
    {
      id: 'fransk-3-4-1-def-1',
      type: 'definition',
      content: `**La metaphore (metafor)** - En sammenligning uten sammenligningsord (comme, tel):

*"Cette faucille d'or dans le champ des etoiles"* (Victor Hugo)
- Her sammenligner Hugo maanen med en gullsigd, uten aa bruke "comme"

**La comparaison (sammenligning)** - En sammenligning med sammenligningsord:

*"La terre est bleue comme une orange"* (Paul Eluard)
- Sammenligningsordet "comme" forbinder de to elementene`,
    },
    {
      id: 'fransk-3-4-1-text-1',
      type: 'text',
      content: `## Les figures d'analogie - Sammenligningsfigurer

| Figure de style | Definisjon | Eksempel |
|----------------|------------|----------|
| La metaphore | Sammenligning uten "comme" | *La vie est un long fleuve tranquille.* |
| La comparaison | Sammenligning med "comme/tel" | *Fort comme un lion.* |
| La personnification | Gi menneskelige egenskaper til noe ikke-menneskelig | *Le vent murmure entre les arbres.* |
| L'allegorie | Utvidet metafor/personifikasjon | *La Justice, les yeux bandes, tient sa balance.* |

**La personnification** er saerlig vanlig i fransk poesi. Naturen faar ofte menneskelige egenskaper:
- *Les fleurs dansent sous la brise.* (Blomstene danser i brisen.)
- *La mer se dechaine.* (Havet raser.)`,
    },
    {
      id: 'fransk-3-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifiser stilfiguren',
      problem: `Hvilken stilfigur er brukt i hvert eksempel?

a) *"Ses cheveux etaient d'or."* (Victor Hugo)
b) *"La nature est un temple ou de vivants piliers / Laissent parfois sortir de confuses paroles."* (Baudelaire)
c) *"Elle est belle comme le jour."*`,
      solution: `**Losning:**

a) **Metaphore** - Haaret sammenlignes med gull uten bruk av "comme". Det er ikke bokstavelig gull, men en metafor for lyst, skinnende haar.

b) **Personnification** - Naturen fremstilles som et tempel, og soylene (traerne) "snakker". Dette er ogsaa en allegori.

c) **Comparaison** - Sammenligningsordet "comme" brukes til aa sammenligne skjonnheten med dagen.`,
    },
    {
      id: 'fransk-3-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser stilfiguren og forklar virkningen:',
        subTasks: [
          { label: 'a', task: '"Le soleil se couche doucement." (Solen legger seg forsiktig.)', solution: 'Personnification - Solen faar den menneskelige egenskapen aa "legge seg". Det skaper et poetisk bilde av solnedgangen.' },
          { label: 'b', task: '"Mon coeur est un oiseau en cage." (Hjertet mitt er en fugl i bur.)', solution: 'Metaphore - Hjertet sammenlignes direkte med en fugl i bur uten "comme". Det uttrykker folelsen av aa vaere fanget.' },
          { label: 'c', task: '"Elle chante comme un rossignol." (Hun synger som en nattergal.)', solution: 'Comparaison - Sammenligningsordet "comme" brukes. Det uttrykker at hun synger vakkert.' },
        ],
        solution: 'a) Personnification, b) Metaphore, c) Comparaison',
        hints: ['Se etter sammenligningsord som "comme"', 'Personnification gir menneskelige egenskaper til dyr/ting/natur'],
      },
    },
    {
      id: 'fransk-3-4-1-text-2',
      type: 'text',
      content: `## Les figures d'insistance et d'opposition

**Forsterkningsfigurer:**

| Figure | Definisjon | Eksempel |
|--------|------------|----------|
| L'hyperbole | Overdrivelse | *Je meurs de faim!* (Jeg dor av sult!) |
| L'anaphore | Gjentakelse av ord i begynnelsen | *Paris! Paris outrage! Paris brise! Paris martyrise!* (de Gaulle) |
| La gradation | Stigende/synkende oppramsinng | *Va, cours, vole!* (Corneille) |

**Motsetningsfigurer:**

| Figure | Definisjon | Eksempel |
|--------|------------|----------|
| L'antithese | Motsetning mellom to ideer | *Etre ou ne pas etre.* |
| L'oxymore | Motsetning i sammenstilte ord | *Cette obscure clarte* (Corneille) |

**Dempningsfigurer:**

| Figure | Definisjon | Eksempel |
|--------|------------|----------|
| La litote | Si lite for aa uttrykke mye | *"Va, je ne te hais point."* (= Jeg elsker deg, Corneille) |
| L'euphemisme | Mildere uttrykk | *Il nous a quittes.* (= Han er dod.) |`,
    },
    {
      id: 'fransk-3-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Avanserte stilfigurer',
      problem: `Identifiser stilfiguren:

a) *"Je suis mort de fatigue."*
b) *"Moi, president de la Republique, je ne traiterai pas... Moi, president de la Republique, je ferai..."* (Francois Hollande)
c) *"Un illustre inconnu."*`,
      solution: `**Losning:**

a) **Hyperbole** - Overdrivelse. Man er ikke bokstavelig dod av tretthet, men uttrykket forsterker folelsen.

b) **Anaphore** - Gjentakelse av "Moi, president de la Republique" i begynnelsen av flere setninger. Skaper rytme og forsterker budskapet.

c) **Oxymore** - "Illustre" (berommet) og "inconnu" (ukjent) er motsetninger som staar sammen. Det skaper en paradoksal effekt.`,
    },
    {
      id: 'fransk-3-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser stilfiguren:',
        subTasks: [
          { label: 'a', task: '"Il fait un froid de canard!" (Det er and-kaldt! = Det er steinkald!)', solution: 'Hyperbole - Overdrivelse for aa forsterke kulden.' },
          { label: 'b', task: '"Je vis, je meurs; je me brule et me noie." (Louise Labe)', solution: 'Antithese - Motsetningene "vis/meurs" (lever/dor) og "brule/noie" (brenner/drukner) staar mot hverandre.' },
          { label: 'c', task: '"Ce n\'est pas mauvais." (om noe som er veldig bra)', solution: 'Litote - Man sier "det er ikke daarlig" for aa uttrykke at det er veldig bra. Man sier mindre enn man mener.' },
        ],
        solution: 'a) Hyperbole, b) Antithese, c) Litote',
        hints: ['Hyperbole = overdrivelse', 'Antithese = motsetninger', 'Litote = si lite, mene mye'],
      },
    },
    {
      id: 'fransk-3-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en setning paa fransk som bruker den angitte stilfiguren:',
        subTasks: [
          { label: 'a', task: 'En metafor om livet', solution: 'For eksempel: "La vie est un voyage sans retour." (Livet er en reise uten retur.)' },
          { label: 'b', task: 'En personifikasjon av hosten', solution: 'For eksempel: "L\'automne pleure ses dernieres feuilles." (Hosten graater sine siste blader.)' },
          { label: 'c', task: 'En hyperbel om aa vaere sulten', solution: 'For eksempel: "J\'ai tellement faim que je pourrais manger un elephant." (Jeg er saa sulten at jeg kunne spist en elefant.)' },
        ],
        solution: 'Aapne svar - se eksempler over.',
        hints: ['Metafor: ingen sammenligningsord', 'Personifikasjon: gi menneskelig egenskap', 'Hyperbel: overdriv kraftig'],
      },
    },
    {
      id: 'fransk-3-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser stilfigurene i dette utdraget fra Baudelaire:',
        subTasks: [
          { label: 'a', task: '"Sois sage, o ma Douleur, et tiens-toi plus tranquille." - Hvilken stilfigur aapner diktet?', solution: 'Personnification og apostrofe - Smerten (la Douleur) tiltales som en person og faar menneskelige egenskaper (vaere fornuftig, holde seg rolig).' },
          { label: 'b', task: 'Hva er effekten av stor forbokstav i "Douleur"?', solution: 'Stor forbokstav forsterker personifikasjonen. Smerten fremstilles nesten som en egen karakter, en allegori.' },
          { label: 'c', task: 'Skriv din egen apostrofe (tiltale til noe abstrakt) paa fransk.', solution: 'For eksempel: "O Liberte, guide nos pas!" (Aa Frihet, led vaare skritt!)' },
        ],
        solution: 'a) Personnification/apostrofe, b) Allegori-effekt, c) Aapent svar.',
        hints: ['Apostrofe = tiltale til noe fraavaerende eller abstrakt', 'Stor forbokstav kan signalisere allegori'],
      },
    },
    {
      id: 'fransk-3-4-1-tip-1',
      type: 'tip',
      content: `**Tips for aa huske stilfigurene:**

1. **Comparaison** har alltid et sammenligningsord (comme, tel, semblable a)
2. **Metaphore** er en sammenligning UTEN sammenligningsord
3. **Litote** og **hyperbole** er motsetninger: litote underdriver, hyperbole overdriver
4. **Anaphore** = gjentakelse i begynnelsen av setninger
5. **Oxymore** = to motstridende ord rett ved siden av hverandre`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 Le registre soutenu - Formelt register
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_4_2: TextbookChapter = {
  id: 'fransk-3-4-2',
  courseId: 'fransk-3',
  chapterNumber: '4.2',
  title: 'Le registre soutenu - Formelt register',
  description: 'Laer om de ulike spraakregistrene i fransk, med fokus paa det formelle registeret og litteraert vokabular.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skille mellom soutenu, courant og familier register i franske tekster',
    'bruke formelt register i egen skriftlig produksjon',
  ],
  content: [
    {
      id: 'fransk-3-4-2-intro',
      type: 'text',
      content: `## Les registres de langue - Spraakregistrene

Fransk har tre hovedregistre som brukes i ulike situasjoner:

| Registre | Norsk | Bruksomraade |
|----------|-------|--------------|
| **Soutenu** (formelt) | Hoytidelig/litteraert | Litteratur, formelle taler, akademiske tekster |
| **Courant** (standard) | Noeytralt/standard | Dagligtale, aviser, skole |
| **Familier** (uformelt) | Uformelt/muntlig | Venner, familie, SMS |

Aa beherske disse registrene er viktig for aa forstaa franske tekster i ulike sjangre og for aa tilpasse eget spraak til konteksten.`,
    },
    {
      id: 'fransk-3-4-2-def-1',
      type: 'definition',
      content: `**Le registre soutenu** kjennetegnes av:
- Bruk av passe simple (historisk fortid)
- Inversjon i sporsmaal (*Pourriez-vous...*)
- Litteraert og presist vokabular
- Korrekt bruk av subjonctif
- Lange, komplekse setninger

**Le registre familier** kjennetegnes av:
- Forkortelser (*t'es* for *tu es*)
- Slang og dagligtale (*bouquin* for *livre*)
- Utelatelse av "ne" i nektelse (*je sais pas*)
- Enkle, korte setninger`,
    },
    {
      id: 'fransk-3-4-2-text-1',
      type: 'text',
      content: `## Ordforraad i ulike registre

| Soutenu | Courant | Familier | Norsk |
|---------|---------|----------|-------|
| un ouvrage | un livre | un bouquin | en bok |
| se restaurer | manger | bouffer | aa spise |
| une demeure | une maison | une baraque | et hus |
| un vehicule | une voiture | une bagnole | en bil |
| se vetir | s'habiller | se fringuer | aa kle seg |
| demeurer | habiter | cracher | aa bo |
| etre las | etre fatigue | etre crave | aa vaere trott |
| decevoir | ennuyer | gonfler | aa skuffe/kjede |
| un labeur | un travail | un boulot | en jobb |
| se quereller | se disputer | s'engueuler | aa krangle |

**Merk:** I akademisk skriving og paa eksamen forventes det at du bruker **courant** eller **soutenu** register.`,
    },
    {
      id: 'fransk-3-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifiser registeret',
      problem: `Hvilket register tilhorer disse setningene?

a) *"Pourriez-vous m'indiquer le chemin le plus court pour me rendre a la gare?"*
b) *"Tu sais ou est la gare?"*
c) *"Savez-vous ou se trouve la gare?"*`,
      solution: `**Losning:**

a) **Soutenu** - Inversjon (*pourriez-vous*), formelt vokabular (*m'indiquer*, *me rendre a*), lang og hoeflig formulering.

b) **Familier** - Ingen inversjon, direkte "tu"-tiltale, kort og enkel setning, mangler formell hoflighet.

c) **Courant** - Hoeflig "vous"-tiltale, inversjon (*savez-vous*), men enklere ordvalg enn soutenu. Standard sporsmaalsform.`,
    },
    {
      id: 'fransk-3-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Angi registeret (soutenu, courant eller familier):',
        subTasks: [
          { label: 'a', task: '"Je ne comprends point ce que vous dites."', solution: 'Soutenu - Bruk av "point" i stedet for "pas", og "vous dites" er formelt.' },
          { label: 'b', task: '"J\'comprends pas c\'que tu dis."', solution: 'Familier - Forkortelser (j\'comprends, c\'que), bruk av "tu", manglende "ne".' },
          { label: 'c', task: '"Je ne comprends pas ce que vous dites."', solution: 'Courant - Standard nektelse med "ne...pas", hoeflig "vous", normal setningsstruktur.' },
        ],
        solution: 'a) Soutenu, b) Familier, c) Courant',
        hints: ['"Point" i stedet for "pas" er typisk soutenu', 'Forkortelser og manglende "ne" er familier'],
      },
    },
    {
      id: 'fransk-3-4-2-text-2',
      type: 'text',
      content: `## Le passe simple - Den litteraere fortiden

I det formelle registeret brukes **le passe simple** i stedet for **le passe compose**. Dette er den viktigste markoren for litteraert spraak:

| Passe compose (courant) | Passe simple (soutenu) | Norsk |
|--------------------------|------------------------|-------|
| Il a mange | Il mangea | Han spiste |
| Elle est partie | Elle partit | Hun dro |
| Ils ont vu | Ils virent | De saa |
| J'ai compris | Je compris | Jeg forsto |

**Boyning av passe simple (1. gruppe, -er):**

| Pronom | Parler |
|--------|--------|
| je | parlai |
| tu | parlas |
| il/elle | parla |
| nous | parlames |
| vous | parlates |
| ils/elles | parlerent |

I moderne fransk brukes passe simple nesten utelukkende i **skriftspraak**: romaner, historiske tekster og formelle beretninger.`,
    },
    {
      id: 'fransk-3-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Omskriving mellom registre',
      problem: `Skriv om disse setningene fra familier til soutenu:

a) *"Il a bouffe et il s'est tire."*
b) *"Elle s'est fringuee et elle est partie bosser."*`,
      solution: `**Losning:**

a) **Soutenu:** *"Il se restaura puis prit conge."*
- "bouffe" (familier) -> "se restaura" (soutenu, passe simple)
- "s'est tire" (familier) -> "prit conge" (soutenu, passe simple)

b) **Soutenu:** *"Elle se vetit et se rendit a son labeur."*
- "s'est frinquee" (familier) -> "se vetit" (soutenu, passe simple)
- "partie bosser" (familier) -> "se rendit a son labeur" (soutenu)`,
    },
    {
      id: 'fransk-3-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om fra courant til soutenu:',
        subTasks: [
          { label: 'a', task: '"Il a mange dans un bon restaurant."', solution: '"Il se restaura dans un etablissement de renom." (passe simple + formelt vokabular)' },
          { label: 'b', task: '"Elle a achete une belle maison."', solution: '"Elle fit l\'acquisition d\'une belle demeure." (passe simple + litteraert vokabular)' },
          { label: 'c', task: '"Nous avons travaille toute la journee."', solution: '"Nous oeuvrames tout au long de la journee." (passe simple + formelt uttrykk)' },
        ],
        solution: 'a) "Il se restaura...", b) "Elle fit l\'acquisition...", c) "Nous oeuvrames..."',
        hints: ['Bruk passe simple i stedet for passe compose', 'Bytt ut hverdagsord med litteraere synonymer'],
      },
    },
    {
      id: 'fransk-3-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn det formelle (soutenu) ordet som tilsvarer:',
        subTasks: [
          { label: 'a', task: 'une voiture (courant)', solution: 'un vehicule' },
          { label: 'b', task: 'manger (courant)', solution: 'se restaurer / se sustenter' },
          { label: 'c', task: 'une maison (courant)', solution: 'une demeure / un logis' },
          { label: 'd', task: 'etre fatigue (courant)', solution: 'etre las / etre epuise' },
        ],
        solution: 'a) un vehicule, b) se restaurer, c) une demeure, d) etre las',
        hints: ['Tenk paa litteraert og formelt vokabular', 'Soutenu-ord er ofte lengre og mer presise'],
      },
    },
    {
      id: 'fransk-3-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les utdraget og analyser registeret:',
        subTasks: [
          { label: 'a', task: '"Le marquis entra dans la salle et salua l\'assemblee d\'un geste gracieux. Il prit place aupres de la comtesse." - Hvilket register? Begrunn.', solution: 'Soutenu - Passe simple (entra, salua, prit), formelt vokabular (assemblee, aupres de), litteraer setningsstruktur.' },
          { label: 'b', task: 'Skriv om de to setningene til courant register.', solution: '"Le marquis est entre dans la salle et a salue tout le monde poliment. Il s\'est assis a cote de la comtesse."' },
          { label: 'c', task: 'Skriv om til familier register.', solution: '"Le mec est entre et a fait un signe a tout le monde. Il s\'est pose a cote de la nana."' },
        ],
        solution: 'a) Soutenu (passe simple, formelt vokabular), b-c) Se losninger over.',
        hints: ['Passe simple = soutenu', 'Courant bruker passe compose', 'Familier bruker slang'],
      },
    },
    {
      id: 'fransk-3-4-2-tip-1',
      type: 'tip',
      content: `**Tips for eksamen:**

1. Bruk alltid **courant** eller **soutenu** register i skriftlige besvarelser
2. Unngaa forkortelser og slang
3. Vis at du behersker **le subjonctif** og komplekse setningsstrukturer
4. I tekstanalyse: kommenter alltid registeret forfatteren bruker - det sier noe om sjanger og maalgruppe`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 La rhétorique classique - Klassisk retorikk
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_4_3: TextbookChapter = {
  id: 'fransk-3-4-3',
  courseId: 'fransk-3',
  chapterNumber: '4.3',
  title: 'La rhétorique classique - Klassisk retorikk',
  description: 'Laer om klassisk retorikk med logos, ethos og pathos, og analyser beromte franske taler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstaa og anvende begrepene logos, ethos og pathos',
    'analysere retoriske virkemidler i franske taler og tekster',
  ],
  content: [
    {
      id: 'fransk-3-4-3-intro',
      type: 'text',
      content: `## La rhétorique classique - Klassisk retorikk

Retorikk er kunsten aa overbevise gjennom tale og tekst. Den klassiske retorikken stammer fra antikkens Hellas (Aristoteles), men har hatt enorm innflytelse paa fransk kultur og utdanning. Frankrike har en saerlig sterk retorisk tradisjon, og retorikk var lenge et sentralt fag i fransk skole.

De tre grunnpilarene i retorikken er:
- **Logos** - appell til fornuften
- **Ethos** - appell til talerens troverdighet
- **Pathos** - appell til folelser

I fransk sammenheng er retorikk viktig for aa forstaa:
- Politiske taler (de Gaulle, Mitterrand, Macron)
- Litteraere tekster og essay
- Eksamensdisposisjonen (*la dissertation*)`,
    },
    {
      id: 'fransk-3-4-3-def-1',
      type: 'definition',
      content: `**Logos (la raison)** - Appell til fornuften:
- Logiske argumenter, fakta, statistikk
- Bruk av syllogismer og deduksjon
- Eksempel: *"Les chiffres montrent que..."* (Tallene viser at...)

**Ethos (la crédibilité)** - Appell til troverdighet:
- Talerens autoritet, erfaring, karakter
- Referanser til ekspertise eller posisjon
- Eksempel: *"En tant que président..."* (Som president...)

**Pathos (l'émotion)** - Appell til folelser:
- Vekke sympati, frykt, haap, sinne
- Bruk av levende bilder og personlige historier
- Eksempel: *"Pensez aux enfants qui souffrent..."* (Tenk paa barna som lider...)`,
    },
    {
      id: 'fransk-3-4-3-text-1',
      type: 'text',
      content: `## Les procédés rhétoriques - Retoriske virkemidler

| Virkemiddel | Fransk term | Beskrivelse | Eksempel |
|-------------|-------------|-------------|----------|
| Retorisk sporsmaal | La question rhétorique | Sporsmaal som ikke krever svar | *"N'avons-nous pas le devoir d'agir?"* |
| Gjentakelse | La répétition | Gjenta for aa forsterke | *"Liberté, liberté chérie!"* |
| Treleddet oppbygging | La règle de trois | Tre elementer for rytme | *"Liberté, Egalité, Fraternité"* |
| Direkte tiltale | L'apostrophe | Henvende seg til publikum | *"Françaises, Français..."* |
| Innrommelse | La concession | Innromme motpartens poeng | *"Certes... mais..."* |
| Motsigelse | La réfutation | Tilbakevise motargument | *"On prétend que... Or..."* |

**Den retoriske femtrinnsprosessen:**
1. **L'invention** (inventio) - Finne argumenter
2. **La disposition** (dispositio) - Ordne argumentene
3. **L'élocution** (elocutio) - Formulere spraaklig
4. **La mémoire** (memoria) - Huske talen
5. **L'action** (actio) - Fremfore talen`,
    },
    {
      id: 'fransk-3-4-3-text-2',
      type: 'text',
      content: `## Analyse de discours célèbres - Analyse av beromte taler

### Charles de Gaulle: L'appel du 18 juin 1940

De Gaulles radiotale fra London 18. juni 1940 er en av de mest beromte franske talene:

*"La France a perdu une bataille! Mais la France n'a pas perdu la guerre!"*
(Frankrike har tapt et slag! Men Frankrike har ikke tapt krigen!)

**Retorisk analyse:**
- **Antithese**: "perdu une bataille" vs. "pas perdu la guerre" - motsetning mellom tap og haap
- **Anaphore**: Gjentakelsen av "La France" forsterker nasjonalfolelsen
- **Pathos**: Appell til nasjonal stolthet og motstandsvilje
- **Ethos**: de Gaulle taler som militaer leder med autoritet

### Victor Hugo: Discours sur la misère (1849)

*"Vous n'avez rien fait tant que le peuple souffre!"*
(Dere har ikke gjort noe saa lenge folket lider!)

**Retorisk analyse:**
- **Pathos**: Sterkt folelsesladet appell om fattigdom
- **Hyperbole**: "Rien fait" (ingenting gjort) - overdrivelse for aa forsterke
- **Apostrofe**: Direkte tiltale til politikerne`,
    },
    {
      id: 'fransk-3-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifiser retoriske virkemidler',
      problem: `Analyser folgende utdrag og identifiser logos, ethos og pathos:

*"Moi, président de la République, je ne serai pas le chef de la majorité. Moi, président de la République, je ne traiterai pas mon premier ministre de collaborateur. Moi, président de la République, je ferai en sorte que mon comportement soit a chaque instant exemplaire."* (François Hollande, 2012)`,
      solution: `**Losning:**

**Ethos:** Hollande bygger sin troverdighet ved aa gjentatte ganger nevne "Moi, président de la République" - han viser hvilken rolle han vil fylle og hvilke verdier han staar for.

**Pathos:** Han appellerer til velgernes onsker om en rettferdig og verdig president. Loeftene om eksemplarisk oppforsel vekker folelsen av tillit.

**Logos:** Konkrete lofter om hva han vil og ikke vil gjore gir logiske argumenter for hvorfor velgerne bor stemme paa ham.

**Stilfigurer:**
- **Anaphore**: "Moi, président de la République" gjentas i begynnelsen av hver setning
- **Gradation**: Oppbyggingen skaper en stigende effekt
- **Antithese**: Kontrast mellom hva han ikke vil gjore og hva han vil gjore`,
    },
    {
      id: 'fransk-3-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser om setningen bruker logos, ethos eller pathos:',
        subTasks: [
          { label: 'a', task: '"Selon les statistiques de l\'INSEE, le chômage a diminué de 3%." (Ifolge INSEEs statistikk har arbeidsledigheten sunket med 3%.)', solution: 'Logos - Bruk av statistikk og fakta fra en offisiell kilde (INSEE) for aa underbygge paastand med fornuft.' },
          { label: 'b', task: '"En tant que médecin avec trente ans d\'expérience, je peux affirmer que..." (Som lege med tretti aars erfaring kan jeg bekrefte at...)', solution: 'Ethos - Taleren viser til sin profesjonelle erfaring og ekspertise for aa bygge troverdighet.' },
          { label: 'c', task: '"Imaginez un enfant seul, sans nourriture, dans le froid de l\'hiver." (Forestill dere et barn alene, uten mat, i vinterkulden.)', solution: 'Pathos - Appell til medfolelse gjennom et levende, folelsesladet bilde av et lidende barn.' },
        ],
        solution: 'a) Logos, b) Ethos, c) Pathos',
        hints: ['Logos = fakta og logikk', 'Ethos = troverdighet og autoritet', 'Pathos = folelser'],
      },
    },
    {
      id: 'fransk-3-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser de retoriske virkemidlene i dette utdraget fra de Gaulle:',
        subTasks: [
          { label: 'a', task: '"Paris! Paris outragé! Paris brisé! Paris martyrisé! Mais Paris libéré!" - Hvilke stilfigurer finner du?', solution: 'Anaphore (gjentakelse av "Paris"), gradation (stigende intensitet: outrage -> brise -> martyrise -> libere), antithese (martyrise vs. libere), apostrofe (direkte tiltale til Paris).' },
          { label: 'b', task: 'Hvilken retorisk appell (logos/ethos/pathos) dominerer?', solution: 'Pathos dominerer - sterke folelsesladete ord (outrage, brise, martyrise, libere) som appellerer til nasjonalfølelse og triumf etter frigjoeringen.' },
          { label: 'c', task: 'Hvorfor er den treledde oppbyggingen effektiv her?', solution: 'De tre negative ordene (outrage, brise, martyrise) foelges av det positive "libere". Tre-tallet skaper rytme og forventning, og vendepunktet til "libere" blir desto sterkere.' },
        ],
        solution: 'a) Anaphore, gradation, antithese, apostrofe. b) Pathos. c) Tredelingen skaper rytme og dramatisk vendepunkt.',
        hints: ['Tell gjentakelsene', 'Se etter motsetningspar', 'Vurder den emosjonelle virkningen'],
      },
    },
    {
      id: 'fransk-3-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort retorisk tekst (3-5 setninger) paa fransk om et selvvalgt tema. Bruk:',
        subTasks: [
          { label: 'a', task: 'Minst ett retorisk sporsmaal', solution: 'For eksempel: "Ne devons-nous pas protéger notre planète?" (Bor vi ikke beskytte planeten vaar?)' },
          { label: 'b', task: 'Minst en anaphore', solution: 'For eksempel: "Nous devons agir. Nous devons changer. Nous devons espérer." (Vi maa handle. Vi maa endre oss. Vi maa haape.)' },
          { label: 'c', task: 'Identifiser selv hvilke appeller (logos/ethos/pathos) du bruker', solution: 'Aapent svar. Eksempel: Pathos (folelser om planeten), logos (fakta om klimaendringer).' },
        ],
        solution: 'Aapent svar - vurder om eleven bruker virkemidlene korrekt.',
        hints: ['Retorisk sporsmaal slutter med "?"', 'Anaphore = samme ord i starten av flere setninger', 'Kombiner gjerne alle tre appellformene'],
      },
    },
    {
      id: 'fransk-3-4-3-tip-1',
      type: 'tip',
      content: `**Tips for retorisk analyse paa eksamen:**

1. Start alltid med aa identifisere **konteksten**: Hvem taler? Til hvem? Naar? Hvorfor?
2. Se etter de tre appellformene: **logos, ethos, pathos**
3. Identifiser **stilfigurer** som forsterker budskapet (anaphore, antithese, etc.)
4. Kommenter **virkningen** av virkemidlene - ikke bare nevn dem
5. Bruk fagtermer paa fransk: *procédés rhétoriques, figure de style, argumentation*`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 L'analyse stylistique - Stilistisk analyse
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_4_4: TextbookChapter = {
  id: 'fransk-3-4-4',
  courseId: 'fransk-3',
  chapterNumber: '4.4',
  title: "L'analyse stylistique - Stilistisk analyse",
  description: 'Laer aa gjennomfore en stilistisk analyse av franske tekster, med vokabular for litteraer analyse og monsterbesvarelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjennomfore en strukturert stilistisk analyse av en fransk tekst',
    'bruke fagvokabular for litteraer analyse paa fransk',
  ],
  content: [
    {
      id: 'fransk-3-4-4-intro',
      type: 'text',
      content: `## L'analyse stylistique - Stilistisk analyse

Stilistisk analyse (l'analyse stylistique) er en metode for aa undersoke hvordan en forfatter bruker spraaklige virkemidler for aa skape mening og virkning. Det handler ikke bare om *hva* teksten sier, men *hvordan* den sier det.

En god stilistisk analyse folger vanligvis denne strukturen:
1. **Presentasjon** av teksten (forfatter, verk, kontekst)
2. **Identifisering** av stilistiske trekk
3. **Analyse** av virkningen av disse trekkene
4. **Konklusjon** som knytter stil til budskap

Denne metoden er sentral for den franske eksamensformen **le commentaire composé** (strukturert tekstkommentar).`,
    },
    {
      id: 'fransk-3-4-4-def-1',
      type: 'definition',
      content: `**Viktig vokabular for stilistisk analyse:**

| Fransk term | Norsk | Bruk |
|-------------|-------|------|
| le champ lexical | det leksikalske feltet | Ord som tilhorer samme temaomraade |
| la tonalité | tonen/stemningen | Lyrisk, ironisk, tragisk, komisk |
| le point de vue | synsvinkelen | Fortellerperspektivet |
| le rythme | rytmen | Setningslengde og tempo |
| l'enjambement | overgang | Setning som fortsetter over verselinje |
| la rime | rim | Lydlikhet i dikt |
| le registre | registeret | Formelt, noeytralt, uformelt |
| la connotation | konnotasjonen | Ordets assosiasjoner utover bokstavelig mening |
| la dénotation | denotasjonen | Ordets bokstavelige mening |

**Nyttige uttrykk for analyse:**
- *L'auteur emploie / utilise...* (Forfatteren bruker...)
- *Ce procédé produit un effet de...* (Dette virkemiddelet skaper en effekt av...)
- *On peut observer que...* (Man kan observere at...)
- *Cette figure de style souligne...* (Denne stilfiguren understreker...)`,
    },
    {
      id: 'fransk-3-4-4-text-1',
      type: 'text',
      content: `## Le commentaire composé - Strukturert tekstkommentar

Den franske eksamensformen **le commentaire composé** er en systematisk analyse av en tekst. Den er bygget opp slik:

### Struktur:

**I. Introduction (Innledning)**
- Presentasjon av forfatter, verk, epoke
- Kort sammendrag av tekstutdraget
- Annonser problemstillingen (*la problématique*)
- Presenter planen (*l'annonce du plan*)

**II. Développement (Hoveddel)**
- Vanligvis 2-3 hoveddeler med underpunkter
- Hver del analyserer et aspekt av teksten
- Bruk tekstsitater som belegg
- Kommenter virkningen av stilistiske virkemidler

**III. Conclusion (Konklusjon)**
- Oppsummer hovedfunnene
- Svar paa problemstillingen
- Aapne for et bredere perspektiv (*l'ouverture*)

### Viktige prinsipper:
- Aldri bare **beskriv** - alltid **analyser virkningen**
- Bruk alltid **sitater** fra teksten som belegg
- Koble stil til **innhold og budskap**`,
    },
    {
      id: 'fransk-3-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Monsterbesvarelse - Stilistisk analyse',
      problem: `Analyser stilen i dette utdraget fra Albert Camus' *L'Etranger* (1942):

*"Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. J'ai reçu un télégramme de l'asile: 'Mère décédée. Enterrement demain. Sentiments distingués.' Cela ne veut rien dire."*

(I dag dode mamma. Eller kanskje i gaar, jeg vet ikke. Jeg fikk et telegram fra institusjonen: "Mor avdod. Begravelse i morgen. Med vennlig hilsen." Det betyr ingenting.)`,
      solution: `**Monsterbesvarelse:**

**Presentasjon:** Utdraget er aapningen av Albert Camus' roman *L'Etranger* (Den fremmede, 1942), et sentralt verk innen eksistensialismen. Hovedpersonen Meursault forteller om morens dod.

**Analyse av stilistiske trekk:**

1. **Korte, enkle setninger** - "Aujourd'hui, maman est morte." Setningene er paafallende korte og noekterne. Fraavaeret av komplekse strukturer gjenspeiler Meursaults folelsesmessige avstand.

2. **Registeret** - Blandingen av det dagligdagse "maman" og det formelle "Mère décédée" i telegrammet skaper en kontrast. Meursault bruker det intime "maman", mens institusjonen bruker det distanserte "Mère".

3. **Likegyldighet i tonen** - "Ou peut-être hier, je ne sais pas" viser en manglende reaksjon paa morens dod. Usikkerheten om tidspunktet er sjokkerende.

4. **Ironien i telegrammet** - Den formelle avslutningen "Sentiments distingués" (Med vennlig hilsen) i en dodsmelding understreker det absurde.

5. **Konklusjon** - "Cela ne veut rien dire" oppsummerer Meursaults holdning og introduserer romanens eksistensialistiske tema: livets meningsloeyshet.

**Stilens funksjon:** Den noekterne, nesten dokumentariske stilen gjenspeiler Meursaults karakter som en "fremmed" i sitt eget liv. Camus bruker minimalistisk prosa for aa uttrykke eksistensiell fremmedgjoering.`,
    },
    {
      id: 'fransk-3-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk riktig fagterm paa fransk:',
        subTasks: [
          { label: 'a', task: 'Hva kaller vi ordets bokstavelige betydning? Og ordets assosiasjoner utover dette?', solution: 'La dénotation (bokstavelig mening) og la connotation (assosiasjoner/underliggende mening).' },
          { label: 'b', task: 'Hva kaller vi en gruppe ord som tilhorer samme temaomraade i en tekst?', solution: 'Le champ lexical (det leksikalske feltet). For eksempel kan en tekst ha et champ lexical knyttet til doden: "mourir, décéder, enterrement, deuil".' },
          { label: 'c', task: 'Hva kaller vi tonen eller stemningen i en tekst?', solution: 'La tonalité. Eksempler: tonalité lyrique (lyrisk), tonalité ironique (ironisk), tonalité tragique (tragisk), tonalité comique (komisk).' },
        ],
        solution: 'a) La dénotation / la connotation, b) Le champ lexical, c) La tonalité',
        hints: ['Denotasjon = bokstavelig', 'Konnotasjon = assosiasjoner', 'Champ lexical = tematisk ordgruppe'],
      },
    },
    {
      id: 'fransk-3-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser stilen i dette utdraget fra Victor Hugo:',
        subTasks: [
          { label: 'a', task: '"Les misérables, ce sont les affamés, les déshérités, les abandonnés, les méprisés." - Identifiser stilfigurene.', solution: 'Gradation (stigende oppramsinng), anaphore (gjentakelse av "les"), champ lexical knyttet til lidelse og utstotelse.' },
          { label: 'b', task: 'Hva er tonaliteten (tonen) i utdraget?', solution: 'Tonalité pathétique (patospreget/medfølende) - Hugo vekker sympati for de undertrykte gjennom den folelsesladete oppramsinng.' },
          { label: 'c', task: 'Hvilken retorisk appell bruker Hugo her?', solution: 'Pathos - Han appellerer til leserens medfolelse og rettferdighetsfolelse gjennom en bevissthetsgjorende liste over lidende mennesker.' },
        ],
        solution: 'a) Gradation, anaphore, champ lexical. b) Tonalité pathétique. c) Pathos.',
        hints: ['Se etter oppramsinng', 'Vurder den emosjonelle virkningen', 'Tenk paa formaal: Hugo ville kjempe mot fattigdom'],
      },
    },
    {
      id: 'fransk-3-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort stilistisk analyse (5-8 setninger paa fransk) av folgende tekst:',
        subTasks: [
          { label: 'a', task: '"La nuit était sombre. Le vent hurlait entre les arbres. Une ombre glissa le long du mur." - Identifiser champ lexical, tonalité og stilfigurer.', solution: 'Champ lexical de la peur/nuit: "sombre, hurlait, ombre". Tonalité: inquiétante/mystérieuse. Stilfigurer: personnification (le vent hurlait), métaphore (une ombre glissa). Korte setninger skaper spenning.' },
          { label: 'b', task: 'Skriv analysen paa fransk med bruk av fagutrykk.', solution: 'Eksempel: "L\'auteur emploie un champ lexical de la peur avec les mots \'sombre\', \'hurlait\' et \'ombre\'. La tonalité est inquiétante. On observe une personnification dans \'le vent hurlait\' qui crée une atmosphère menaçante. Les phrases courtes renforcent la tension narrative."' },
        ],
        solution: 'Se detaljerte losninger over.',
        hints: ['Bruk fagutrykk: champ lexical, tonalité, procédé stylistique', 'Forklar virkningen av hvert virkemiddel'],
      },
    },
    {
      id: 'fransk-3-4-4-note-1',
      type: 'note',
      content: `## Oppsummering av Kapittel 4: Stilistikk og retorikk

I dette kapittelet har vi dekket:

**4.1 Les figures de style** - De viktigste stilfigurene:
- Sammenligningsfigurer (metaphore, comparaison, personnification)
- Forsterkningsfigurer (hyperbole, anaphore, gradation)
- Motsetningsfigurer (antithese, oxymore)
- Dempningsfigurer (litote, euphemisme)

**4.2 Le registre soutenu** - Spraakregistrene:
- Soutenu (formelt), courant (standard), familier (uformelt)
- Le passe simple som markoor for litteraert spraak

**4.3 La rhétorique classique** - Klassisk retorikk:
- Logos, ethos, pathos
- Retoriske virkemidler og den retoriske prosessen
- Analyse av beromte franske taler

**4.4 L'analyse stylistique** - Stilistisk analyse:
- Vokabular for litteraer analyse
- Le commentaire compose som eksamensform
- Monsterbesvarelse for stilistisk analyse`,
    },
    {
      id: 'fransk-3-4-4-tip-1',
      type: 'tip',
      content: `**Tips for stilistisk analyse:**

1. Les teksten **minst to ganger** for du begynner aa analysere
2. **Marker** stilfigurer, interessante ordvalg og setningsstrukturer
3. Still deg alltid sporsmaalene: **Hva gjor forfatteren?** og **Hvorfor/med hvilken effekt?**
4. Bruk **fagtermer** paa fransk - det viser kompetanse
5. Husk at stil og innhold haenger sammen - stilen er aldri tilfeldig`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: LITTERATUR
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 Le Moyen Âge et la Renaissance - Middelalder og renessanse
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_5_1: TextbookChapter = {
  id: 'fransk-3-5-1',
  courseId: 'fransk-3',
  chapterNumber: '5.1',
  title: 'Le Moyen Âge et la Renaissance - Middelalder og renessanse',
  description: 'Utforsk den eldste franske litteraturen fra middelalderens heltedikt til renessansens humanisme med Rabelais, Montaigne og Pléiade-bevegelsen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sentrale verk og forfattere fra fransk middelalder og renessanse',
    'analysere utdrag fra middelalder- og renessansetekster i kontekst',
  ],
  content: [
    {
      id: 'fransk-3-5-1-intro',
      type: 'text',
      content: `## Le Moyen Âge et la Renaissance - Middelalder og renessanse

Fransk litteraturhistorie strekker seg over nesten tusen aar. I dette kapittelet ser vi paa de to forste store epokene: middelalderen (le Moyen Âge, ca. 800-1500) og renessansen (la Renaissance, ca. 1500-1600).

**Middelalderen** er preget av:
- Muntlig fortellerkultur
- Helteepikk og ridderromaner
- Religiose tekster

**Renessansen** bringer:
- Gjenoppdagelse av antikken
- Humanisme og vitenskap
- Ny interesse for individet og verden

Disse epokene la grunnlaget for hele den franske litteraere tradisjonen.`,
    },
    {
      id: 'fransk-3-5-1-def-1',
      type: 'definition',
      content: `**Sentrale begreper:**

**La chanson de geste** - Heltedikt fra middelalderen som forteller om store krigerhelters bedrifter. Skrevet paa gammelfransk, fremfort muntlig av *jongleurs* (spillemenn). Det mest beromte er *La Chanson de Roland* (ca. 1100).

**Le roman courtois** - Ridderroman fra 1100-tallet som handler om kjaerlighet, aere og eventyr. Chrétien de Troyes skrev om Kong Arthurs riddere (*Lancelot*, *Perceval*).

**L'humanisme** - Renessansens tankeretning som setter mennesket i sentrum. Inspirert av antikkens greske og romerske tenkere.

**La Pléiade** - En gruppe paa syv franske diktere paa 1500-tallet som ville fornye fransk poesi etter antikke forbilder. De viktigste: Pierre de Ronsard og Joachim du Bellay.`,
    },
    {
      id: 'fransk-3-5-1-text-1',
      type: 'text',
      content: `## La littérature médiévale - Middelalderlitteraturen

### La Chanson de Roland (ca. 1100)

Det mest beromte franske heltediktet forteller om Rolands heroiske dod i Roncevaux-passet (778). Roland er en av Karl den stores paladiner.

**Beromte linjer:**
*"Roland est preux et Olivier est sage."*
(Roland er tapper og Olivier er klok.)

**Kjennetegn:**
- Skrevet i *laisses* (strofer av ulik lengde)
- Gjentakelser for aa forsterke (tilpasset muntlig fremforing)
- Temaer: aere, troskap, heltemot, kristendom vs. islam

### Le Roman de la Rose (ca. 1230-1275)

Et allegorisk dikt om kjaerligheten. Skrevet i to deler:
1. Guillaume de Lorris: den hoeviske kjaerligheten
2. Jean de Meun: satirisk og filosofisk

### François Villon (1431 - ca. 1463)

Den forste store franske lyrikeren. Kjent for *La Ballade des pendus* (De hengtes ballade):

*"Frères humains, qui après nous vivez, / N'ayez les coeurs contre nous endurcis."*
(Menneskebrodre, som lever etter oss, / La ikke hjertene vaere forherdet mot oss.)`,
    },
    {
      id: 'fransk-3-5-1-text-2',
      type: 'text',
      content: `## La Renaissance - Renessansen (1500-tallet)

### François Rabelais (ca. 1494-1553)

Rabelais er kjent for sine satiriske romaner om kjempene **Gargantua** og **Pantagruel**. Hans stil er preget av overdrivelse, humor og en enorm ordrikdom.

**Beroomt sitat:**
*"Science sans conscience n'est que ruine de l'âme."*
(Vitenskap uten samvittighet er bare sjelens ruin.)

**Kjennetegn:**
- Grotesk humor og overdrivelse
- Kritikk av middelalderens skolastikk
- Humanistisk ideal om utdanning

### Michel de Montaigne (1533-1592)

Montaigne oppfant **essayet** som sjanger med sine *Essais* (1580). Han reflekterer over seg selv og menneskenaturen.

**Beroomt sitat:**
*"Que sais-je?"* (Hva vet jeg?)

**Kjennetegn:**
- Personlig og reflekterende stil
- Skeptisisme og selverkjennelse
- Toleranse og humanisme

### La Pléiade: Ronsard og Du Bellay

**Pierre de Ronsard** (1524-1585) - "Dikternes fyrste"
- Kjent for sine kjærlighetsdikt og oder
- *"Mignonne, allons voir si la rose..."* (Kjaereste, la oss se om rosen...)

**Joachim du Bellay** (1522-1560)
- Skrev *Défense et illustration de la langue française* (1549), et manifest for bruk av fransk (i stedet for latin) i litteraturen
- *Les Regrets* - diktsamling om hjemlengsel fra Roma`,
    },
    {
      id: 'fransk-3-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av Ronsards "Mignonne, allons voir si la rose"',
      problem: `Les dette utdraget fra Ronsard og identifiser temaer og stilfigurer:

*"Mignonne, allons voir si la rose
Qui ce matin avait déclose
Sa robe de pourpre au soleil,
A point perdu cette vesprée
Les plis de sa robe pourprée,
Et son teint au vôtre pareil."*

(Kjaereste, la oss se om rosen / som i morges hadde aapnet / sin purpurkappe for solen, / ikke i kveld har mistet / foldene i sin purpurdrakt, / og sin farge lik din.)`,
      solution: `**Losning:**

**Temaer:**
- **Carpe diem** (grip dagen) - oppfordring om aa nyte ungdommen for den forgaar
- **Forgjengelighet** - rosen som symbol paa forgjengelig skjonnhet
- **Kjaerlighet** - tiltale til den elskede ("Mignonne")

**Stilfigurer:**
- **Comparaison**: Rosens farge sammenlignes med den elskedes ("au vôtre pareil")
- **Personnification**: Rosen har en "robe" (kjole/kappe) og "teint" (hudfarge)
- **Métaphore**: Rosen er en metafor for den elskedes skjonnhet og ungdom
- **Apostrophe**: Direkte tiltale til den elskede ("Mignonne")

**Register:** Soutenu/poetisk - inversjon, litteraert vokabular (vesprée, pourprée)`,
    },
    {
      id: 'fransk-3-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble forfatter/verk til riktig epoke og sjanger:',
        subTasks: [
          { label: 'a', task: 'La Chanson de Roland', solution: 'Middelalder (ca. 1100) - Chanson de geste (heltedikt). Forteller om Rolands heroiske dod.' },
          { label: 'b', task: 'Montaignes Essais', solution: 'Renessanse (1580) - Essay. Personlige refleksjoner over menneskenaturen. Montaigne oppfant essaysjangeren.' },
          { label: 'c', task: 'Ronsards "Mignonne, allons voir si la rose"', solution: 'Renessanse (1500-tallet) - Lyrikk/Pléiade. Carpe diem-dikt om forgjengelig skjonnhet.' },
          { label: 'd', task: 'Rabelais\' Gargantua', solution: 'Renessanse (1534) - Satirisk roman. Grotesk humor og humanistiske idealer om utdanning.' },
        ],
        solution: 'a) Middelalder - heltedikt, b) Renessanse - essay, c) Renessanse - lyrikk, d) Renessanse - satirisk roman.',
        hints: ['Chanson de geste = middelalder', 'Montaigne = essay-sjangeren', 'Pléiade = renessanse-poesi'],
      },
    },
    {
      id: 'fransk-3-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar betydningen av disse beromte sitatene:',
        subTasks: [
          { label: 'a', task: '"Science sans conscience n\'est que ruine de l\'âme." (Rabelais)', solution: 'Vitenskap uten samvittighet/bevissthet er bare sjelens ruin. Rabelais advarer mot kunnskap uten moralsk grunnlag - et sentralt humanistisk ideal.' },
          { label: 'b', task: '"Que sais-je?" (Montaigne)', solution: 'Hva vet jeg? Montaignes motto uttrykker hans skeptisisme - en erkjennelse av at menneskelig kunnskap er begrenset og at vi bor vaere ydmyke.' },
          { label: 'c', task: '"Frères humains, qui après nous vivez..." (Villon)', solution: 'Menneskebrodre, som lever etter oss... Villon henvender seg til fremtidige generasjoner fra galgen og ber om medfolelse - en universell appell om menneskelig solidaritet.' },
        ],
        solution: 'a) Advarsel mot kunnskap uten moral, b) Filosofisk ydmykhet, c) Appell om medmenneskelighet.',
        hints: ['Tenk paa den historiske konteksten', 'Hva sier sitatet om forfatteren?', 'Koble til humanisme/middelalder-verdier'],
      },
    },
    {
      id: 'fransk-3-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign middelalder og renessanse:',
        subTasks: [
          { label: 'a', task: 'Hva er den viktigste forskjellen mellom middelalderens og renessansens menneskesyn?', solution: 'Middelalderen var teosentrisk (Gud i sentrum), mens renessansen var antroposentrisk (mennesket i sentrum). Humanismen sa at mennesket har verdi i seg selv.' },
          { label: 'b', task: 'Hvordan endret litteraturen seg fra chanson de geste til Montaignes essay?', solution: 'Fra kollektive heltefortellinger (nasjonal/religioes identitet) til personlig refleksjon (individet og selverkjennelse). Fra muntlig tradisjon til skriftlig, individuell uttrykksform.' },
          { label: 'c', task: 'Hvorfor var Du Bellays Défense et illustration de la langue française viktig?', solution: 'Den argumenterte for at fransk var like verdig som latin for litteratur og vitenskap. Dette var avgjorende for utviklingen av fransk som litteraert spraak og kulturspraak.' },
        ],
        solution: 'a) Teosentrisk vs. antroposentrisk, b) Kollektiv helteepikk vs. personlig refleksjon, c) Opphoyelse av fransk spraak.',
        hints: ['Teosentrisk = Gud i sentrum', 'Humanisme = mennesket i sentrum', 'Pléiade ville gjore fransk til et litteraert spraak'],
      },
    },
    {
      id: 'fransk-3-5-1-tip-1',
      type: 'tip',
      content: `**Tips for aa huske fransk litteraturhistorie:**

1. **Middelalderen**: Heltedikt (*chanson de geste*) og ridderromaner (*roman courtois*) - muntlig tradisjon
2. **Renessansen**: Humanisme, individ, gjenoppdagelse av antikken
3. Husk noekkelpersonene: **Rabelais** (humor + humanisme), **Montaigne** (essay + skeptisisme), **Ronsard** (lyrikk + carpe diem)
4. Montaignes "Que sais-je?" og Rabelais' "Science sans conscience" er blant de mest siterte franske frasene`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 Le classicisme - Klassisismen (17. århundre)
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_5_2: TextbookChapter = {
  id: 'fransk-3-5-2',
  courseId: 'fransk-3',
  chapterNumber: '5.2',
  title: 'Le classicisme - Klassisismen',
  description: 'Utforsk det franske 1600-tallets litteratur med Molière, Racine og La Fontaine, samt det klassisistiske idealets regler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for klassisismens kjennetegn og sentrale forfattere',
    'analysere utdrag fra klassisistiske tekster med fokus paa les trois unités og sjangerkrav',
  ],
  content: [
    {
      id: 'fransk-3-5-2-intro',
      type: 'text',
      content: `## Le classicisme - Klassisismen (le XVIIe siècle)

1600-tallet er den franske litteraturens gylne tidsalder - **le Grand Siècle** (det store aarhundret). Under Ludvig XIV (Solkongen) blomstret kunst og litteratur, og Frankrike ble Europas kulturelle sentrum.

Klassisismen kjennetegnes av:
- **Orden og harmoni** - klare regler for kunst og litteratur
- **Fornuft over folelser** - rasjonalitet og maatefullhet
- **Antikke forbilder** - inspirasjon fra gresk og romersk kultur
- **Moralsk formaal** - litteratur skal baade underholde og belrere (*plaire et instruire*)

De tre store sjangerne var:
- **La comédie** (komedien) - Molière
- **La tragédie** (tragedien) - Racine, Corneille
- **La fable** (fabelen) - La Fontaine`,
    },
    {
      id: 'fransk-3-5-2-def-1',
      type: 'definition',
      content: `**Les trois unités - De tre enhetene:**

Klassisistisk teater maa folge tre strenge regler:

1. **L'unité de temps** (tidsenhet) - Handlingen skal utspille seg i lopet av 24 timer
2. **L'unité de lieu** (stedsenhet) - Handlingen skal foregaa paa ett sted
3. **L'unité d'action** (handlingsenhet) - Det skal bare vaere en hovedhandling, ingen sidehistorier

**La bienséance** (sommelighet) - Det som er usommelig (vold, dod) skal ikke vises paa scenen, men fortelles av en budbringer.

**La vraisemblance** (sannsynlighet) - Handlingen skal vaere troverdig og sannsynlig.

Disse reglene ble formulert av Académie française og gjaldt saerlig for tragedien.`,
    },
    {
      id: 'fransk-3-5-2-text-1',
      type: 'text',
      content: `## Molière (1622-1673) - Komediens mester

Jean-Baptiste Poquelin, kjent som **Molière**, er den storste franske komediforfatteren. Han var ogsaa skuespiller og regissor.

### Viktige verk:

| Verk | Aar | Tema |
|------|-----|------|
| *Le Misanthrope* | 1666 | Hykleri og oppriktignet i samfunnet |
| *Tartuffe* | 1664 | Religiost hykleri |
| *L'Avare* | 1668 | Gjerrighet (inspirert av Plautus) |
| *Le Bourgeois gentilhomme* | 1670 | Sosial klatring og forfengelighet |
| *Le Malade imaginaire* | 1673 | Innbilt sykdom og legenes hykleri |

**Molières metode:**
- **Castigat ridendo mores** (Han korrigerer sedene ved aa le av dem)
- Bruker humor for aa kritisere samfunnets laster
- Typifiserte karakterer: den gjerrige, hykleren, den innbilte syke

**Beroomt sitat fra Tartuffe:**
*"Couvrez ce sein que je ne saurais voir."*
(Dekk til dette brystet som jeg ikke kan se.)
- Tartuffe later som han er dydig, men er selv en hykler`,
    },
    {
      id: 'fransk-3-5-2-text-2',
      type: 'text',
      content: `## Racine (1639-1699) - Tragediens mester

Jean Racine er den storste franske tragediforfatteren. Hans tragedier folger de klassisistiske reglene strengt.

### Viktige verk:

| Verk | Aar | Tema |
|------|-----|------|
| *Andromaque* | 1667 | Kjaerlighet og plikt etter Trojas fall |
| *Britannicus* | 1669 | Neros tyranni |
| *Phèdre* | 1677 | Forbudt kjaerlighet og skyld |

**Phèdre** - Racines mesterverk:
Phèdre er forelsket i sin stessonn Hippolyte. Hennes forbudte kjaerlighet forer til tragedie.

*"C'est Vénus tout entière a sa proie attachée."*
(Det er Venus som helt og holdent har kastet seg over sitt bytte.)

**Racines stil:**
- Alexandrinsk vers (12 stavelser per linje)
- Intense, psykologiske portretter
- Skjebne og lidenskap som destruktive krefter
- Streng overholdelse av de tre enhetene

## La Fontaine (1621-1695) - Fabeldikteren

Jean de La Fontaine skrev **Fables** (1668-1694), fabelsamlinger inspirert av Æsop.

**Beromte fabler:**
- *Le Corbeau et le Renard* (Korporet og reven) - om forfengelighet
- *La Cigale et la Fourmi* (Gresshoppen og mauren) - om arbeid vs. latskap
- *Le Lièvre et la Tortue* (Haren og skilpadden) - om utholdenhet

**Beroomt aapningslinje:**
*"La Cigale, ayant chanté tout l'été, / Se trouva fort dépourvue / Quand la bise fut venue."*
(Gresshoppen, som hadde sunget hele sommeren, / fant seg helt blottstilt / da nordavinden kom.)

**La Fontaines metode:** Bruke dyr for aa kommentere menneskelig oppforsel - en indirekte samfunnskritikk.`,
    },
    {
      id: 'fransk-3-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av et Molière-utdrag',
      problem: `Analyser dette utdraget fra *L'Avare* (Den gjerrige) der Harpagon oppdager at pengekisten hans er stjalet:

*"Au voleur! Au voleur! A l'assassin! Au meurtrier! Justice, juste ciel! Je suis perdu, je suis assassiné, on m'a coupé la gorge, on m'a dérobé mon argent!"*

(Tyv! Tyv! Morder! Drapsmann! Rettferdighet, rettferdige himmel! Jeg er fortapt, jeg er myrdet, de har kuttet halsen paa meg, de har stjaalet pengene mine!)`,
      solution: `**Losning:**

**Stilfigurer:**
- **Gradation**: Stigende intensitet fra "voleur" til "assassin" til "meurtrier"
- **Hyperbole**: Harpagon overdriver voldsomt - han er ikke myrdet, han har mistet penger
- **Anaphore**: Gjentakelse av "au" / "on m'a"
- **Exclamation**: Utropstegn forsterker desperasjonen

**Komisk effekt:**
- Overdrivelsen skaper humor - Harpagon reagerer paa tapet av penger som om det var hans eget liv
- Det avslorer hans karakter: pengene er viktigere enn livet
- **Castigat ridendo mores** - Molière faar publikum til aa le av gjerrigheten

**Register:** Blanding av dramatisk (assassiné, coupé la gorge) og hverdagslig (mon argent) skaper komisk kontrast.`,
    },
    {
      id: 'fransk-3-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble verk til forfatter og sjanger:',
        subTasks: [
          { label: 'a', task: 'Phèdre', solution: 'Racine - Tragedie. Forteller om Phèdres forbudte kjaerlighet til sin stessonn Hippolyte.' },
          { label: 'b', task: 'Le Corbeau et le Renard', solution: 'La Fontaine - Fabel. Reven lurer korporet til aa slippe osten ved aa smigre den.' },
          { label: 'c', task: 'Tartuffe', solution: 'Molière - Komedie. Satiriserer religiost hykleri gjennom karakteren Tartuffe.' },
          { label: 'd', task: 'Andromaque', solution: 'Racine - Tragedie. Handler om kjaerlighet og plikt etter Trojakrigen.' },
        ],
        solution: 'a) Racine - tragedie, b) La Fontaine - fabel, c) Molière - komedie, d) Racine - tragedie.',
        hints: ['Racine = tragedie', 'Molière = komedie', 'La Fontaine = fabler med dyr'],
      },
    },
    {
      id: 'fransk-3-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de tre enhetene (les trois unités) i klassisistisk teater:',
        subTasks: [
          { label: 'a', task: 'Hva er l\'unité de temps?', solution: 'Handlingen maa utspille seg i lopet av 24 timer. Dette gir intensitet og fokus til dramaet.' },
          { label: 'b', task: 'Hva er l\'unité de lieu?', solution: 'Handlingen maa foregaa paa ett enkelt sted (f.eks. ett rom, en plass). Dette hindrer urealistiske sceneskifter.' },
          { label: 'c', task: 'Hva er l\'unité d\'action?', solution: 'Det skal vaere en hovedhandling uten sidehistorier. Alt maa vaere knyttet til det sentrale konflikten.' },
          { label: 'd', task: 'Hvorfor er la bienséance viktig?', solution: 'Bienséance (sommelighet) krever at vold og dod ikke vises paa scenen - det maa fortelles. Dette bevarer teaterets verdighet og estetikk.' },
        ],
        solution: 'a) Tid: 24 timer, b) Sted: ett sted, c) Handling: en hovedhandling, d) Bienséance: sommelighet paa scenen.',
        hints: ['Tre enheter = tid, sted, handling', 'Bienséance betyr "sommelighet"'],
      },
    },
    {
      id: 'fransk-3-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser moralen i disse La Fontaine-fablene:',
        subTasks: [
          { label: 'a', task: 'La Cigale et la Fourmi (Gresshoppen og mauren): Gresshoppen synger hele sommeren og har ingenting naar vinteren kommer. Mauren nekter aa hjelpe.', solution: 'Moral: Man maa planlegge for fremtiden og arbeide hardt. Den som nyter livet uten ansvar, vil lide konsekvensene. Men La Fontaine er ogsaa tvetydig - er mauren for hard?' },
          { label: 'b', task: 'Le Corbeau et le Renard (Korporet og reven): Reven smigrer korporet for aa faa den til aa aapne nebbet og slippe osten.', solution: 'Moral: "Tout flatteur vit aux dépens de celui qui l\'écoute." (Enhver smigrer lever paa bekostning av den som lytter.) Man bor vaere skeptisk til smiger.' },
          { label: 'c', task: 'Hvorfor bruker La Fontaine dyr i stedet for mennesker?', solution: 'Dyr gjor det mulig aa kritisere menneskelig oppforsel indirekte, uten aa fornærme mektige personer. Det er en form for allegori som gjor budskapet tilgjengelig for alle aldre.' },
        ],
        solution: 'a) Planlegg for fremtiden, b) Vokter seg for smiger, c) Indirekte samfunnskritikk gjennom allegori.',
        hints: ['Fabler har alltid en moral', 'Dyrene representerer menneskelige egenskaper', 'La Fontaine er ofte tvetydig'],
      },
    },
    {
      id: 'fransk-3-5-2-tip-1',
      type: 'tip',
      content: `**Tips for aa huske klassisismen:**

1. **Le Grand Siècle** = 1600-tallet = Ludvig XIV
2. De tre store: **Molière** (komedie), **Racine** (tragedie), **La Fontaine** (fabel)
3. **Les trois unités**: tid (24 timer), sted (ett sted), handling (en handling)
4. Motto: **"Plaire et instruire"** (behage og belaere)
5. **Castigat ridendo mores** = Molières metode: le av laster for aa forbedre samfunnet`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 Les Lumières et le romantisme - Opplysningstiden og romantikken
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_5_3: TextbookChapter = {
  id: 'fransk-3-5-3',
  courseId: 'fransk-3',
  chapterNumber: '5.3',
  title: 'Les Lumières et le romantisme - Opplysningstiden og romantikken',
  description: 'Utforsk 1700-tallets opplysningsfilosofer (Voltaire, Rousseau, Diderot) og 1800-tallets romantikere (Hugo, Lamartine, Musset).',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for opplysningstidens og romantikkens idealer og sentrale forfattere',
    'analysere utdrag fra opplysnings- og romantiske tekster og knytte dem til sin historiske kontekst',
  ],
  content: [
    {
      id: 'fransk-3-5-3-intro',
      type: 'text',
      content: `## Les Lumières et le romantisme

To av de mest innflytelsesrike epokene i fransk litteratur er **les Lumières** (Opplysningstiden, 1700-tallet) og **le romantisme** (Romantikken, forste halvdel av 1800-tallet). De representerer svært ulike idealer:

| | Les Lumières (1700-tallet) | Le romantisme (1800-tallet) |
|--|---------------------------|---------------------------|
| **Sentral verdi** | Fornuft (*la raison*) | Folelser (*le sentiment*) |
| **Maal** | Opplyse og frigjore | Uttrykke individet |
| **Stil** | Klar, logisk, satirisk | Lyrisk, patospreget, personlig |
| **Syn paa naturen** | Noe som skal forstaaes | Noe som skal foeles |
| **Noekkelpersoner** | Voltaire, Rousseau, Diderot | Hugo, Lamartine, Musset |

Begge epokene har formet fransk kultur og tenkning paa avgjorende maater.`,
    },
    {
      id: 'fransk-3-5-3-def-1',
      type: 'definition',
      content: `**Les Lumières (Opplysningstiden):**
En intellektuell beveglse som fremmet fornuft, vitenskap og fremskritt mot overtro, tyranni og religioes intoleranse. Filosofene (les philosophes) ville "opplyse" folket.

**L'Encyclopédie** (1751-1772):
Det store oppslagsverket redigert av **Diderot** og **d'Alembert**, med bidrag fra Voltaire, Rousseau og andre. Maalte aa samle all menneskelig kunnskap og fremme kritisk tenkning.

**Le romantisme (Romantikken):**
En litteraer og kunstnerisk bevegelse som reagerte mot opplysningstidens rasjonalisme. Romantikerne verdsatte folelser, fantasi, natur og det individuelle. I Frankrike ble romantikken lansert med Victor Hugos forord til *Cromwell* (1827) og teaterstykket *Hernani* (1830).`,
    },
    {
      id: 'fransk-3-5-3-text-1',
      type: 'text',
      content: `## Les philosophes des Lumières - Opplysningsfilosofene

### Voltaire (1694-1778)

Voltaire er den mest beromte av opplysningsfilosofene. Han kjempet for ytringsfrihet, religioes toleranse og mot urettferdighet.

**Viktige verk:**
- *Candide* (1759) - Satirisk roman som gjor narr av overdrvent optimisme
- *Lettres philosophiques* (1734) - Brev fra England som kritiserer det franske samfunnet
- *Traité sur la tolérance* (1763) - Forsvar for religioes toleranse

**Beroomte sitater:**
- *"Ecrasez l'infâme!"* (Knus det infame!) - Om religioes fanatisme
- *"Je ne suis pas d'accord avec ce que vous dites, mais je me battrai jusqu'a la mort pour que vous ayez le droit de le dire."* (Ofte tilskrevet Voltaire - om ytringsfrihet)

### Jean-Jacques Rousseau (1712-1778)

Rousseau var filosof, forfatter og musiker. Han skilte seg fra de andre opplysningsfilosofene ved aa vektlegge folelser og natur fremfor ren fornuft.

**Viktige verk:**
- *Du contrat social* (1762) - Om samfunnspakten og folkesuvereniteten
- *Emile, ou De l'éducation* (1762) - Om naturlig oppdragelse
- *Les Confessions* (1782) - Selvbiografi, en av de forste i sjangeren

**Beroomt sitat:**
*"L'homme est né libre, et partout il est dans les fers."*
(Mennesket er fodt fritt, og overalt er det i lenker.)

### Denis Diderot (1713-1784)

Diderot var redaktor for *L'Encyclopédie* og var forfatter, filosof og kunstkritiker.

**Viktige verk:**
- *L'Encyclopédie* (1751-1772) - Hovedredaktor
- *Jacques le Fataliste* (1796) - Eksperimentell roman
- *Le Neveu de Rameau* (1805) - Filosofisk dialog`,
    },
    {
      id: 'fransk-3-5-3-text-2',
      type: 'text',
      content: `## Le romantisme - Romantikken (ca. 1820-1850)

### Victor Hugo (1802-1885)

Hugo er den storste franske romantikeren og en av de mest beromte franske forfatterne overhodet. Han var dikter, romanforfatter, dramatiker og politisk aktivist.

**Viktige verk:**
- *Les Misérables* (1862) - Roman om fattigdom, rettferdighet og frelse
- *Notre-Dame de Paris* (1831) - Roman om ringeren Quasimodo
- *Hernani* (1830) - Teaterstykke som utloste "la bataille d'Hernani"
- *Les Contemplations* (1856) - Diktsamling om tap og sorg

**Les Misérables som kulturell referanse:**
Romanen handler om Jean Valjean, en tidligere straffange som soker frelse. Den er blitt en av de mest kjente musikalene i verden og er en sentral kulturell referanse for sosial rettferdighet i Frankrike.

**Beroomt sitat:**
*"Ceux qui vivent, ce sont ceux qui luttent."*
(De som lever, er de som kjemper.)

### Alphonse de Lamartine (1790-1869)

Lamartine var den forste store romantiske dikteren i Frankrike.

*"Le Lac"* (Innsjoen, 1820) - Et av de mest beromte franske diktene om tapt kjaerlighet og tidens gang:
*"Ô temps! suspends ton vol, et vous, heures propices! / Suspendez votre cours."*
(Aa tid! Stopp din flukt, og dere, gunstige timer! / Stans deres lop.)

### Alfred de Musset (1810-1857)

Musset er kjent for sine kjaerlighetsdikt og teaterstykker, preget av lidenskapelig folelser:
- *Les Nuits* (Nettene) - Diktsamling om kjaerlighetssmerte
- *On ne badine pas avec l'amour* (Man spoker ikke med kjaerligheten) - Teaterstykke`,
    },
    {
      id: 'fransk-3-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning opplysning vs. romantikk',
      problem: `Sammenlign disse to utdragene og identifiser hvilken epoke de tilhorer:

A) *"Il faut cultiver notre jardin."* (Voltaire, Candide)
(Vi maa dyrke vaar hage.)

B) *"Je suis une force qui va! / Agent aveugle et sourd de mystères funèbres!"* (Victor Hugo, Hernani)
(Jeg er en kraft som gaar! / Blind og dov agent for dystre mysterier!)`,
      solution: `**Losning:**

**A) Les Lumières (Opplysningstiden) - Voltaire:**
- **Stil**: Kort, klar, ironisk setning
- **Budskap**: Praktisk filosofi - i stedet for aa spekulere om verden, bor vi arbeide konkret
- **Tone**: Noektern, rasjonell
- **Voltaires satire**: Etter Candides mange eventyr er konklusjonen enkel og jordnaer

**B) Le romantisme (Romantikken) - Hugo:**
- **Stil**: Dramatisk, eksklamasjon, sterke metaforer
- **Budskap**: Individet som kraft, skjebne og mystikk
- **Tone**: Patospreget, lidenskapelig
- **Romantiske trekk**: Folelser, det mystiske, heltens indre kamp

**Sammenligning:**
- Voltaire bruker **fornuft og ironi**, Hugo bruker **folelser og patos**
- Voltaire er **jordnaer**, Hugo er **opphoeyd**
- Voltaires stil er **minimalistisk**, Hugos er **overdaadig**`,
    },
    {
      id: 'fransk-3-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Plasser forfatter og verk i riktig epoke (Lumières eller Romantisme):',
        subTasks: [
          { label: 'a', task: 'Rousseau: Du contrat social', solution: 'Les Lumières (1762). Politisk-filosofisk verk om samfunnspakten. Men Rousseau peker ogsaa mot romantikken med sin vektlegging av folelser.' },
          { label: 'b', task: 'Hugo: Les Misérables', solution: 'Le romantisme (1862). Episk roman om sosial urettferdighet, preget av romantikkens patos og engasjement.' },
          { label: 'c', task: 'Voltaire: Candide', solution: 'Les Lumières (1759). Satirisk roman som bruker humor og ironi for aa kritisere optimistisk filosofi og samfunnets onder.' },
          { label: 'd', task: 'Lamartine: Le Lac', solution: 'Le romantisme (1820). Lyrisk dikt om tapt kjaerlighet og tidens forgjengelighet - typisk romantisk tematikk.' },
        ],
        solution: 'a) Lumières, b) Romantisme, c) Lumières, d) Romantisme.',
        hints: ['Lumières = 1700-tallet, fornuft', 'Romantisme = 1800-tallet, folelser', 'Rousseau er en overgangsfigur'],
      },
    },
    {
      id: 'fransk-3-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar betydningen av disse sentrale sitatene:',
        subTasks: [
          { label: 'a', task: '"L\'homme est né libre, et partout il est dans les fers." (Rousseau)', solution: 'Mennesket er naturlig fritt, men samfunnet har fanget det i lenker (urettferdige lover, ulikhet, undertrykkelse). Rousseau argumenterer for en ny samfunnspakt basert paa folkeviljen.' },
          { label: 'b', task: '"Ecrasez l\'infâme!" (Voltaire)', solution: '"Knus det infame!" - Voltaires kamprop mot religioes fanatisme og overtro. "L\'infâme" refererer til religioes intoleranse og misbruk av makt.' },
          { label: 'c', task: '"Ceux qui vivent, ce sont ceux qui luttent." (Hugo)', solution: '"De som lever, er de som kjemper." - Hugo uttrykker den romantiske idealismen: aa virkelig leve betyr aa engasjere seg, kjempe for rettferdighet og ha overbevisning.' },
        ],
        solution: 'a) Kritikk av samfunnets undertrykkelse, b) Kamp mot religioes fanatisme, c) Livet som kamp og engasjement.',
        hints: ['Tenk paa den historiske konteksten', 'Rousseau levde for Den franske revolusjon', 'Hugo var politisk engasjert'],
      },
    },
    {
      id: 'fransk-3-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les Misérables - kulturell referanse:',
        subTasks: [
          { label: 'a', task: 'Hva handler Les Misérables om? Beskriv kort hovedpersonene Jean Valjean og Javert.', solution: 'Les Misérables handler om fattigdom og sosial urettferdighet i Frankrike paa 1800-tallet. Jean Valjean er en tidligere straffange som soeker frelse gjennom godhet. Javert er en politiinspektoer som jakter ham og representerer kompromissloes lov og orden.' },
          { label: 'b', task: 'Hvilke romantiske trekk finner vi i romanen?', solution: 'Sterke folelser, moralsk kamp mellom godt og ondt, idealisering av det gode i mennesket, sosial pathos for de fattige, episk format, den enkelte heltens kamp mot samfunnet.' },
          { label: 'c', task: 'Hvorfor er Les Misérables fortsatt relevant i dag?', solution: 'Temaene - fattigdom, sosial urettferdighet, rettssystemets strenghet, muligheten for personlig forandring - er universelle. Musikalversjonen har gjort verket kjent globalt. Hugo peker paa at samfunnet maa vise medmenneskelighet.' },
        ],
        solution: 'a) Roman om fattigdom og frelse (Valjean vs. Javert), b) Romantiske trekk: folelser, moralsk kamp, idealisme, c) Universelle temaer.',
        hints: ['Valjean = frelse, Javert = lov', 'Romantikken = folelser og engasjement', 'Universelle temaer overskrider tid'],
      },
    },
    {
      id: 'fransk-3-5-3-tip-1',
      type: 'tip',
      content: `**Tips for aa huske opplysningstid og romantikk:**

1. **Opplysningstiden**: Fornuft, kritikk, frihet - *la raison*. Tenk: Voltaire (satire), Rousseau (samfunnspakt), Diderot (leksikon)
2. **Romantikken**: Folelser, natur, individ - *le sentiment*. Tenk: Hugo (engasjement), Lamartine (lyrikk), Musset (lidelse)
3. Rousseau er en **bro** mellom epokene: opplysningsfilosof med romantisk aaaer
4. **Les Misérables** = den ultimate franske kulturreferansen paa sosial rettferdighet`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 Le réalisme et le naturalisme - Realisme og naturalisme
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_5_4: TextbookChapter = {
  id: 'fransk-3-5-4',
  courseId: 'fransk-3',
  chapterNumber: '5.4',
  title: 'Le réalisme et le naturalisme - Realisme og naturalisme',
  description: 'Utforsk Flauberts presise prosa, Zolas vitenskapelige naturalisme og Maupassants mesterlige noveller.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for kjennetegnene ved realisme og naturalisme i fransk litteratur',
    'analysere utdrag fra realistiske og naturalistiske tekster og sammenligne dem med romantikken',
  ],
  content: [
    {
      id: 'fransk-3-5-4-intro',
      type: 'text',
      content: `## Le réalisme et le naturalisme

Etter romantikkens folelsesladete idealisme kom en reaksjon: **le réalisme** (realismen, ca. 1850-1880) og **le naturalisme** (naturalismen, ca. 1870-1900). Disse bevegelsene ville skildre virkeligheten slik den faktisk var.

| | Le réalisme | Le naturalisme |
|--|-------------|----------------|
| **Periode** | ca. 1850-1880 | ca. 1870-1900 |
| **Maal** | Skildre virkeligheten objektivt | Vitenskapelig studie av mennesket |
| **Metode** | Observasjon og presisjon | Eksperimentell roman (jf. vitenskap) |
| **Temaer** | Borgerskap, hverdagsliv, penger | Arv, miljo, sosial determinisme |
| **Stil** | Noektern, presis, detaljert | Raa, detaljert, ofte sjokkerende |
| **Noekkelpersoner** | Flaubert, Stendhal, Balzac | Zola, Maupassant |

Begge retningene representerer et brudd med romantikkens idealisering.`,
    },
    {
      id: 'fransk-3-5-4-def-1',
      type: 'definition',
      content: `**Le réalisme (realismen):**
En litteraer retning som soeker aa gjengi virkeligheten objektivt og noeyaktig, uten idealisering eller overdrivelse. Forfatteren er som en "speilende observator" av samfunnet.

**Le naturalisme (naturalismen):**
En viderefoering av realismen, inspirert av naturvitenskapen. Naturalisten ser paa romanen som et **eksperiment**: Plasser en karakter i et bestemt miljo med bestemte arvelige egenskaper, og observer hva som skjer. Emile Zola formulerte dette i *Le Roman expérimental* (1880).

**Le déterminisme (determinismen):**
Troen paa at mennesket er styrt av arv (*l'hérédité*) og miljo (*le milieu*). Mennesket har ikke full fri vilje, men er et produkt av sine biologiske og sosiale betingelser.

**L'objectivité (objektiviteten):**
Forfatteren skal ikke uttrykke egne meninger eller folelser. Teksten skal skildre virkeligheten "som den er", uten moralsk kommentar.`,
    },
    {
      id: 'fransk-3-5-4-text-1',
      type: 'text',
      content: `## Gustave Flaubert (1821-1880) - Realismens mester

Flaubert er kjent for sin ekstreme presisjon i spraaklig stil. Han soekte alltid *le mot juste* (det rette ordet).

### Madame Bovary (1857)

Flauberts mesterverk handler om Emma Bovary, en leges kone i provinsen som droemmer om romantikk og luksus. Hennes urealistiske forventninger forer til utroskap, gjeld og til slutt selvmord.

**Beroomt aapning:**
*"Nous étions a l'étude, quand le proviseur entra."*
(Vi var i studietimen da rektor kom inn.)

**Kjennetegn:**
- **Le style indirect libre** (fri indirekte tale) - Flauberts store innovasjon: fortellerens stemme og karakterens tanker flyter sammen
- **Ironi** - Flaubert er ironisk mot Emmas romantiske illusjoner
- **Presisjon** - Detaljerte beskrivelser uten sentimentalitet
- **Objektivitet** - Forfatteren doemmer ikke eksplisitt

**Rettssak:** Flaubert ble stilt for retten for "usommelighet" i Madame Bovary (1857), men ble frikjent. Rettssaken gjorde boken beroomt.

### Gustave Flaubert om skriving:
*"Le style, c'est l'homme."* (Stilen, det er mennesket.)
Han kunne bruke dager paa aa finne det perfekte ordet.`,
    },
    {
      id: 'fransk-3-5-4-text-2',
      type: 'text',
      content: `## Emile Zola (1840-1902) - Naturalismens far

Zola er den mest beromte naturalisten. Han skrev en serie paa 20 romaner kalt **Les Rougon-Macquart** (1871-1893), som folger to familier gjennom flere generasjoner og viser hvordan arv og miljo former skjebnene deres.

### Viktige verk:

| Verk | Aar | Tema |
|------|-----|------|
| *L'Assommoir* | 1877 | Alkoholisme i arbeiderklassen |
| *Nana* | 1880 | Prostitusjon og borgerlig hykleri |
| *Germinal* | 1885 | Gruvearbeidernes kamp og streik |
| *La Bête humaine* | 1890 | Mord, arv og jernbanen |

**Germinal** - Zolas mesterverk:
Romanen folger gruvearbeideren Etienne Lantier som organiserer streik mot umenneskelige arbeidsforhold. Den er en kraftfull skildring av arbeiderklassens lidelser.

### Zola og Dreyfus-saken

I 1898 skrev Zola det beromte aapne brevet **"J'accuse...!"** (Jeg anklager!) i avisen L'Aurore. Han forsvarte kaptein Alfred Dreyfus, en joedisk offiser urettferdig doemt for spiasje. Brevet er et av historiens mest beromte eksempler paa intellektuelt engasjement.

## Guy de Maupassant (1850-1893) - Novellens mester

Maupassant er den storste franske novelleforfatteren. Han var elev av Flaubert og pavirket av Zola.

**Viktige noveller:**
- *Boule de Suif* (Fettklumpen, 1880) - Om hykleri under krig
- *La Parure* (Smykket, 1884) - Om forfengelighet og skjebneomslag
- *Le Horla* (1887) - Om galskap (nesten fantastisk litteratur)

**Kjennetegn:**
- Kort, presis form med overraskende slutt
- Ironisk blikk paa menneskelig svakhet
- Skildring av alle samfunnslag`,
    },
    {
      id: 'fransk-3-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av stil i Madame Bovary',
      problem: `Analyser dette utdraget fra Madame Bovary:

*"Elle avait lu Paul et Virginie et elle avait rêvé la maisonnette de bambous, le nègre Domingo, le chien Fidèle, mais surtout l'amitié douce de quelque bon petit frère."*

(Hun hadde lest Paul og Virginie, og hun hadde droomt om bambushytten, tjeneren Domingo, hunden Fidèle, men fremfor alt det sote vennskapet med en god liten bror.)`,
      solution: `**Losning:**

**Kontekst:** Emma Bovary som ung jente, formet av romantisk lesning.

**Stilistisk analyse:**

1. **Style indirect libre** - Vi er inne i Emmas tanker, men det er fortelleren som skriver. Grensen mellom forfatter og karakter er uklar.

2. **Ironi** - Flaubert lister opp Emmas romantiske droommer med presis detalj. Oppramsinng (maisonnette, nègre Domingo, chien Fidèle) skaper en nesten karikert effekt. Leseren forstaar at Emmas droemmer er naive.

3. **Gradation** - "mais surtout" (men fremfor alt) forsterker og avslorer det mest sentimentale oensket.

4. **Champ lexical** - Ord som "rêvé", "douce", "bon petit" tilhorer et leksikalsk felt av sentimental romantikk.

5. **Funksjon:** Utdraget viser at Emmas livssyn er formet av romantisk litteratur - noe som vil lede til hennes undergang. Flaubert kritiserer indirekte romantikkens innflytelse.`,
    },
    {
      id: 'fransk-3-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skil mellom realisme og naturalisme:',
        subTasks: [
          { label: 'a', task: 'Hva er hovedforskjellen mellom realisme og naturalisme?', solution: 'Realismen soeker aa skildre virkeligheten objektivt. Naturalismen gaar lenger og behandler romanen som et vitenskapelig eksperiment basert paa determinisme (arv og miljo styrer mennesket).' },
          { label: 'b', task: 'Hvilken forfatter formulerte den "eksperimentelle romanen"?', solution: 'Emile Zola, i verket Le Roman expérimental (1880). Han mente at romanforfatteren skulle arbeide som en vitenskapsmann.' },
          { label: 'c', task: 'Hva menes med "le mot juste" i forbindelse med Flaubert?', solution: '"Det rette ordet" - Flauberts besettelse med aa finne det eneste perfekte ordet for hver situasjon. Han kunne bruke dager paa en enkelt setning.' },
        ],
        solution: 'a) Realisme = objektiv skildring, naturalisme = vitenskapelig eksperiment. b) Zola. c) Det perfekte ordvalget.',
        hints: ['Naturalisme = realisme + vitenskap', 'Zola = eksperimentell roman', 'Flaubert = stilistisk perfeksjon'],
      },
    },
    {
      id: 'fransk-3-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tekstanalyse og epokeplassering:',
        subTasks: [
          { label: 'a', task: 'Hvilket litteraert trekk er "le style indirect libre"? Gi et eksempel.', solution: 'Fri indirekte tale - fortellerens stemme og karakterens tanker/ord blandes uten anforselstegn eller "sa hun". Eksempel: "Elle voulait mourir. Mais elle voulait mourir a Paris." - Er det fortelleren eller Emma som tenker?' },
          { label: 'b', task: 'Hvordan skiller Zolas "J\'accuse" seg fra hans romaner?', solution: '"J\'accuse" er et direkte, personlig innlegg i en politisk sak (Dreyfus-affaeren), mens romanene soeker objektivitet og vitenskapelig distanse. Her bryter Zola med naturalismens ideal om noeytralitet.' },
          { label: 'c', task: 'Sammenlign Hugos romantiske stil med Flauberts realistiske stil.', solution: 'Hugo: patospreget, folelsesladet, storslagne bilder, forfatteren tar stilling. Flaubert: noektern, presis, ironisk, forfatteren er usynlig. Hugo idealiserer, Flaubert observerer.' },
        ],
        solution: 'a) Blanding av forteller og karakter, b) Personlig engasjement vs. objektivitet, c) Patos vs. presisjon.',
        hints: ['Style indirect libre = ingen anforselstegn', 'Tenk paa forfatterens rolle i teksten', 'Romantikk vs. realisme = folelse vs. observasjon'],
      },
    },
    {
      id: 'fransk-3-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser Maupassants novelle "La Parure" (Smykket):',
        subTasks: [
          { label: 'a', task: 'Mathilde Loisel laaner et diamantkjede til et ball, mister det, og bruker ti aar paa aa betale tilbake gjelden. Til slutt faar hun vite at smykket var falskt. - Hva er novellens moral?', solution: 'Moralen handler om forfengelighet og illusjoner: Mathildes oenke om aa fremstaa som rik oedelegger livet hennes. Ironien er at lidelsen var unodvendig - smykket var falskt. Det kommenterer borgerlig fasade og forfengelig jag.' },
          { label: 'b', task: 'Hvilke realistiske/naturalistiske trekk finner du?', solution: 'Realistiske: detaljert skildring av borgerlig liv, oekonomiske forhold, sosialt press. Ironisk distanse fra fortelleren. Naturalistiske: miljoets innflytelse - Mathildes sosiale posisjon former hennes misnoeye.' },
          { label: 'c', task: 'Hvordan bruker Maupassant den overraskende slutten (la chute)?', solution: 'Den sjokkerende avsloringen at smykket var falskt snur hele historien. Alt Mathildes lidelse var forgjeves. Teknikken "la chute" (fallet/overraskelsen) er Maupassants signatur og skaper en sterk ironisk effekt.' },
        ],
        solution: 'a) Forfengelighet og illusjoner, b) Sosial skildring, miljoets makt, c) Overraskende slutt som avslorer ironi.',
        hints: ['Tenk paa hva smykket symboliserer', 'Borgerlig fasade = viktig realistisk tema', '"La chute" = overraskende slutt'],
      },
    },
    {
      id: 'fransk-3-5-4-note-1',
      type: 'note',
      content: `## Oppsummering av Kapittel 5: Litteratur

| Epoke | Periode | Kjennetegn | Noekkelpersoner |
|-------|---------|------------|-----------------|
| Middelalder | 800-1500 | Heltedikt, ridderromaner, muntlig | Chanson de Roland, Villon |
| Renessanse | 1500-1600 | Humanisme, individ, antikken | Rabelais, Montaigne, Ronsard |
| Klassisisme | 1600-1700 | Orden, fornuft, regler, de tre enhetene | Molière, Racine, La Fontaine |
| Opplysningstid | 1700-1800 | Fornuft, kritikk, frihet, vitenskap | Voltaire, Rousseau, Diderot |
| Romantikk | 1820-1850 | Folelser, natur, individ, patos | Hugo, Lamartine, Musset |
| Realisme | 1850-1880 | Objektiv skildring, presisjon, ironi | Flaubert, Stendhal, Balzac |
| Naturalisme | 1870-1900 | Vitenskapelig, determinisme, raa | Zola, Maupassant |

**Utviklingslinjen:** Fra muntlig helteepikk -> personlig humanisme -> ordnet klassisisme -> kritisk opplysning -> folelsesladet romantikk -> objektiv realisme -> vitenskapelig naturalisme`,
    },
    {
      id: 'fransk-3-5-4-tip-1',
      type: 'tip',
      content: `**Tips for aa huske realisme og naturalisme:**

1. **Flaubert** = "le mot juste" + style indirect libre + Madame Bovary
2. **Zola** = Les Rougon-Macquart + determinisme + "J'accuse!"
3. **Maupassant** = noveller + overraskende slutt (la chute) + La Parure
4. Realisme = **speil** (observere virkeligheten), Naturalisme = **laboratorium** (eksperimentere med mennesket)
5. Paa eksamen: Vis at du kan **skille epokene** og **forklare utviklingen** fra romantikk til realisme`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: FILM OG KUNST
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 Le cinéma français - Fransk film
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_6_1: TextbookChapter = {
  id: 'fransk-3-6-1',
  courseId: 'fransk-3',
  chapterNumber: '6.1',
  title: 'Le cinéma français - Fransk film',
  description: 'Utforsk den franske filmhistorien fra La Nouvelle Vague til moderne film, med filmvokabular og analyse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for hovedtrekk i fransk filmhistorie, spesielt La Nouvelle Vague',
    'bruke relevant filmvokabular paa fransk og analysere filmklipp',
  ],
  content: [
    {
      id: 'fransk-3-6-1-intro',
      type: 'text',
      content: `## Le cinéma français - Fransk film

Frankrike er filmens foedeland. Broedrene Lumière viste verdens forste filmvisning i Paris i 1895. Siden da har fransk film vaert i forkant av filmkunsten.

**Viktige milepæler:**
- **1895** - Broedrene Lumière: forste offentlige filmvisning
- **1902** - Georges Méliès: *Le Voyage dans la Lune* (Reisen til maanen)
- **1930-tallet** - Poetisk realisme: Jean Renoir, Marcel Carné
- **1959-1968** - **La Nouvelle Vague** (Den nye bolgen) - den viktigste franske filmbevegelsen
- **1990-2000-tallet** - Moderne auteurfilm og kommersiell suksess
- **2010-tallet og fremover** - Internasjonal anerkjennelse (Cannes-festivalen)

Frankrike har det nest storste filmmarkedet i Europa etter Storbritannia, og den franske staten stoetter aktivt nasjonal filmproduksjon.`,
    },
    {
      id: 'fransk-3-6-1-def-1',
      type: 'definition',
      content: `**La Nouvelle Vague (Den nye bolgen, ca. 1959-1968):**
En filmbevegelse som bryt med tradisjonell filmfortelling. Regissorene var ofte unge filmkritikere fra tidsskriftet *Cahiers du cinéma* som ville lage personlige, innovative filmer.

**Kjennetegn:**
- Filming paa location (ikke i studio)
- Naturlig lys og haandholdt kamera
- Brudd med tradisjonell klipping (jump cuts)
- Improvisasjon og personlig stil
- Unge, ukjente skuespillere
- Lav budsjett

**La politique des auteurs:**
Ideen om at regissoren er filmens "forfatter" (*auteur*), med en personlig visjon som preger alle filmene. Dette konseptet har pavirket hele verdens filmkritikk.`,
    },
    {
      id: 'fransk-3-6-1-text-1',
      type: 'text',
      content: `## Les grands réalisateurs - Store regissorer

### La Nouvelle Vague

**François Truffaut (1932-1984)**
- *Les Quatre Cents Coups* (De 400 slag, 1959) - Halvautobiografisk film om en forsoomt gutts oppvekst i Paris
- *Jules et Jim* (1962) - Kjærlighetstrekant
- Varm, humanistisk stil med fokus paa karakterer

**Jean-Luc Godard (1930-2022)**
- *À bout de souffle* (Til siste aandedrag, 1960) - Banebrytende krimfilm med Jean-Paul Belmondo
- *Le Mépris* (Forakten, 1963) - Om film og kjaerlighet
- Eksperimentell, politisk, utfordrende stil med jump cuts og brudd

**Agnès Varda (1928-2019)**
- *Cléo de 5 a 7* (1962) - En sangerinne venter paa svar om kreftdiagnose
- Pioner for kvinnelige regissorer
- Kalles "La Nouvelle Vagues bestemor"

### Andre viktige regissorer

**Jean Renoir (1894-1979)** - *La Règle du jeu* (Spillets regler, 1939) - regnes som en av tidenes beste filmer

**Robert Bresson (1901-1999)** - Minimalistisk, asketisk stil. *Au hasard Balthazar* (1966)

### Moderne fransk film

| Film | Regissor | Aar | Sjanger |
|------|----------|-----|---------|
| *Amélie* (Le Fabuleux Destin d'Amélie Poulain) | Jean-Pierre Jeunet | 2001 | Komedie/romantikk |
| *Intouchables* | Nakache & Toledano | 2011 | Komedie/drama |
| *La Haine* | Mathieu Kassovitz | 1995 | Sosialt drama |
| *Portrait de la jeune fille en feu* | Céline Sciamma | 2019 | Historisk drama |
| *Anatomie d'une chute* | Justine Triet | 2023 | Thriller/rettsfilm |`,
    },
    {
      id: 'fransk-3-6-1-text-2',
      type: 'text',
      content: `## Le vocabulaire du cinéma - Filmvokabular

| Fransk | Norsk |
|--------|-------|
| un film / un long métrage | en film / en spillefilm |
| un court métrage | en kortfilm |
| le réalisateur / la réalisatrice | regissoren |
| le scénario | manuskriptet |
| le scénariste | manusforfatteren |
| le tournage | innspillingen |
| un plan | en innstilling (kamerainnstilling) |
| un gros plan | naerbilde |
| un plan large | totalbilde |
| la bande-son | lydsporet |
| le montage | klippingen/redigeringen |
| la mise en scène | iscenesettelsen |
| un acteur / une actrice | en skuespiller |
| le personnage principal | hovedpersonen |
| le Festival de Cannes | Cannes-festivalen |
| la Palme d'Or | Gullpalmen (hovedpris i Cannes) |
| un chef-d'oeuvre | et mesterverk |
| le dénouement | losningen/avslutningen |
| le suspense | spenningen |
| les effets spéciaux | spesialeffekter |

**Nyttige uttrykk for filmanalyse:**
- *Le réalisateur utilise un gros plan pour montrer...* (Regissoren bruker naerbilde for aa vise...)
- *La bande-son crée une atmosphère de...* (Lydsporet skaper en stemning av...)
- *Le montage rapide renforce le sentiment de...* (Den raske klippingen forsterker folelsen av...)`,
    },
    {
      id: 'fransk-3-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Filmanalyse - À bout de souffle',
      problem: `Analyser disse kjennetegnene ved Godards *À bout de souffle* (1960):

1. Filmen bruker "jump cuts" (bruplikse klipp)
2. Den ble filmet paa gaten i Paris med haandholdt kamera
3. Skuespillerne improviserte mye av dialogen
4. Hovedpersonen Michel Poiccard (Belmondo) hermer etter Humphrey Bogart`,
      solution: `**Losning - Filmanalyse:**

**1. Jump cuts:**
Godard bryter med tradisjonell klipping ved aa kutte midt i scener. Dette skaper en *effet de rupture* (brudeffekt) som gjor seeren bevisst paa at man ser en film. Det er et brudd med Hollywoods "usynlige klipping".

**2. Filming paa location:**
I stedet for studio filmer Godard paa ekte gater i Paris. Dette gir en *atmosphère documentaire* (dokumentarisk stemning) og virkelighetsnaerhet. Lav budsjett ble en estetisk styrke.

**3. Improvisasjon:**
Dialogene foeles naturlige og spontane, i motsetning til tradisjonelle manusskrevne replikker. Det gir filmen en *spontanéité* (spontanitet) som var revolusjonaer.

**4. Intertekstualitet:**
Referansen til Bogart viser Godards kjaerlighet til amerikansk film. Han *cite* (siterer) andre filmer - noe som ble typisk for Nouvelle Vague.

**Konklusjon:** Filmen bryter alle konvensjoner og definerer en ny maate aa lage film paa. Godard demonstrerer *la politique des auteurs* - regissoren som personlig kunstner.`,
    },
    {
      id: 'fransk-3-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk ved hjelp av filmvokabularet:',
        subTasks: [
          { label: 'a', task: 'Regissoren bruker naerbilde for aa vise karakterens folelser.', solution: 'Le réalisateur utilise un gros plan pour montrer les émotions du personnage.' },
          { label: 'b', task: 'Filmen vant Gullpalmen paa Cannes-festivalen.', solution: 'Le film a remporté la Palme d\'Or au Festival de Cannes.' },
          { label: 'c', task: 'Lydsporet skaper en mystisk stemning.', solution: 'La bande-son crée une atmosphère mystérieuse.' },
        ],
        solution: 'a) Le réalisateur utilise un gros plan... b) Le film a remporté la Palme d\'Or... c) La bande-son crée...',
        hints: ['Naerbilde = un gros plan', 'Gullpalmen = la Palme d\'Or', 'Lydspor = la bande-son'],
      },
    },
    {
      id: 'fransk-3-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble film til regissor og bevegelse:',
        subTasks: [
          { label: 'a', task: 'Les Quatre Cents Coups (1959)', solution: 'François Truffaut - La Nouvelle Vague. Halvautobiografisk film om en forsoomt gutt i Paris.' },
          { label: 'b', task: 'À bout de souffle (1960)', solution: 'Jean-Luc Godard - La Nouvelle Vague. Banebrytende krimfilm med jump cuts og improvisasjon.' },
          { label: 'c', task: 'Amélie (2001)', solution: 'Jean-Pierre Jeunet - Moderne fransk film. Romantisk komedie med visuelt kreativ stil, internasjonal suksess.' },
          { label: 'd', task: 'La Haine (1995)', solution: 'Mathieu Kassovitz - Moderne fransk film. Sosialt drama om unge i forstaden (la banlieue), filmet i svart-hvitt.' },
        ],
        solution: 'a) Truffaut - Nouvelle Vague, b) Godard - Nouvelle Vague, c) Jeunet - moderne, d) Kassovitz - moderne.',
        hints: ['Nouvelle Vague = slutten av 1950/1960-tallet', 'Moderne = 1990-tallet og nyere'],
      },
    },
    {
      id: 'fransk-3-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjon om fransk film:',
        subTasks: [
          { label: 'a', task: 'Hva menes med "la politique des auteurs"? Hvorfor er det viktig?', solution: 'Det er ideen om at filmregissoren er en kunstner/forfatter med en personlig visjon, ikke bare en tekniker. Filmen er regissorens personlige uttrykk. Dette har pavirket all moderne filmkritikk og begrepet "auteur".' },
          { label: 'b', task: 'Hvordan bryt La Nouvelle Vague med tradisjonell film?', solution: 'Location i stedet for studio, haandholdt kamera, jump cuts, improvisasjon, lave budsjetter, unge ukjente skuespillere, personlige temaer. De bryt med "cinéma de papa" (pappas kino).' },
          { label: 'c', task: 'Skriv en kort filmanbefaling (3-4 setninger) paa fransk om en fransk film du kjenner eller vil se.', solution: 'Eksempel: "Je recommande le film Intouchables de Nakache et Toledano. C\'est une comédie dramatique sur l\'amitié entre un aristocrate tétraplégique et son aide-soignant. Le film est a la fois drôle et émouvant. Il a eu un énorme succès en France et a l\'international."' },
        ],
        solution: 'a) Regissoren som kunstner/forfatter, b) Brudd med konvensjoner, c) Aapent svar.',
        hints: ['Auteur = forfatter/kunstner', 'Cinéma de papa = tradisjonell, formelbasert film', 'Bruk filmvokabularet du har laert'],
      },
    },
    {
      id: 'fransk-3-6-1-tip-1',
      type: 'tip',
      content: `**Tips for filmanalyse paa fransk:**

1. Bruk fagvokabular: *le réalisateur, un gros plan, la bande-son, le montage*
2. Analyser **tre nivaaer**: bilde (det visuelle), lyd (musikk/dialog), fortelling (handling/karakter)
3. Koble filmen til sin **historiske kontekst** og **filmbevegelse**
4. Husk at fransk film verdsetter **auteur-tradisjonen** - regissoren er kunstneren`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 La musique française - Fransk musikk
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_6_2: TextbookChapter = {
  id: 'fransk-3-6-2',
  courseId: 'fransk-3',
  chapterNumber: '6.2',
  title: 'La musique française - Fransk musikk',
  description: 'Utforsk den franske musikktradisjonen fra chanson française til moderne rap og pop, med musikkvokabular.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for hovedtrekk i fransk musikk fra chanson française til i dag',
    'analysere franske sangtekster med bruk av relevant vokabular',
  ],
  content: [
    {
      id: 'fransk-3-6-2-intro',
      type: 'text',
      content: `## La musique française - Fransk musikk

Fransk musikk har en rik tradisjon som spenner fra middelalderens trubadurer til moderne rap og elektronisk musikk. Musikk er en utmerket maate aa laere fransk paa - man trener lytteforstaaelse, laerer nytt vokabular og faar innsikt i fransk kultur.

**Viktige perioder og sjangre:**
- **La chanson française** - Den klassiske franske visetradisjonen (1930-1970-tallet)
- **Le yéyé** - Fransk pop paa 1960-tallet (inspirert av rock'n'roll)
- **Le rap français** - Frankrikes storste musikksjanger i dag
- **L'électro** - Fransk elektronisk musikk (Daft Punk, Air)
- **La variété française** - Popmusikk for et bredt publikum

Frankrike har ogsaa innfort **les quotas radio**: minst 40% av musikken paa fransk radio maa vaere franskspraaklig.`,
    },
    {
      id: 'fransk-3-6-2-def-1',
      type: 'definition',
      content: `**La chanson française:**
Sjangeren kjennetegnes av at **teksten** er det viktigste elementet. Melodien stotter teksten, men ordene staar i sentrum. Artistene kalles *auteurs-compositeurs-interprètes* (tekst-komponist-utover) - de skriver, komponerer og synger selv.

**Le slam:**
En poetisk muntlig uttrykksform der teksten fremfores uten musikk. Populaert i Frankrike gjennom artister som Grand Corps Malade.

**Le rap français:**
Fransk rap oppsto paa 1980-tallet i *les banlieues* (forsteder). Den er ofte sosialt og politisk engasjert, og handler om identitet, ulikhet og hverdagsliv. Frankrike har det nest storste rapmarkedet i verden etter USA.`,
    },
    {
      id: 'fransk-3-6-2-text-1',
      type: 'text',
      content: `## Les grandes figures de la chanson française

### Edith Piaf (1915-1963) - "La Môme"

Den mest ikoniske franske sangerinnen. Hennes stemme og livshistorie er blitt et symbol paa Frankrike.

**Beromte sanger:**
- *La Vie en rose* (1947) - Livet i rosa, om kjaerlighetens lykke
- *Non, je ne regrette rien* (1960) - Nei, jeg angrer ingenting
- *Hymne a l'amour* (1949) - Hymne til kjaerligheten

*"Non, rien de rien, non, je ne regrette rien..."*
(Nei, ingenting i det hele tatt, nei, jeg angrer ingenting...)

### Jacques Brel (1929-1978) - Belgisk-fransk visegeni

Brel er kjent for sine intense, dramatiske forestillinger og poetiske tekster.

**Beromte sanger:**
- *Ne me quitte pas* (1959) - Ikke forlat meg
- *Amsterdam* (1964) - Om sjomenn i Amsterdam
- *La Chanson des vieux amants* (1967) - Om gammel kjaerlighet

### Charles Aznavour (1924-2018)

Armenisk-fransk artist kjent som "Frankrikes Frank Sinatra".

**Beromte sanger:**
- *La Bohème* (1965) - Om ungdom og kunstnerliv paa Montmartre
- *Hier encore* (1964) - I gaar ennaa (om tidens gang)
- *Emmenez-moi* (1967) - Ta meg med

### Georges Brassens (1921-1981)

Poet og visesanger kjent for sin satiriske humor og sitt anarkistiske livssyn.

**Beroomt sang:** *Les Copains d'abord* (1964) - Vennene forst`,
    },
    {
      id: 'fransk-3-6-2-text-2',
      type: 'text',
      content: `## La musique française moderne

### Le rap français

| Artist | Periode | Stil |
|--------|---------|------|
| MC Solaar | 1990-tallet | Poetisk, intellektuell rap |
| IAM | 1990-tallet | Marseille-rap, politisk engasjert |
| NTM | 1990-tallet | Hardere, sosialt engasjert |
| Stromae | 2010-tallet | Elektronisk pop-rap, belgisk-kongolesisk |
| Nekfeu | 2010-tallet | Lyrisk rap |
| Aya Nakamura | 2020-tallet | Afropop/R&B, mest stroemmet franskspraaklig artist |

**Stromae** er saerlig interessant for fransklaeringe:
- *Alors on danse* (2009) - Om aa danse bort problemene
- *Papaoutai* (2013) - "Papa ou t'es?" (Pappa, hvor er du?) - om fravaerende fedre
- *Formidable* (2013) - Om kjærlighetssorg

### L'électro française

- **Daft Punk** - Legendarisk elektronisk duo (*Around the World*, *Get Lucky*)
- **Air** - Droemmerisk elektronisk musikk (*Sexy Boy*)
- **David Guetta** - Verdens mest kjente franske DJ

## Le vocabulaire de la musique - Musikkvokabular

| Fransk | Norsk |
|--------|-------|
| une chanson | en sang |
| les paroles | sangteksten |
| le refrain | refrenget |
| le couplet | verset |
| la mélodie | melodien |
| le rythme | rytmen |
| un chanteur / une chanteuse | en sanger / sangerinne |
| un auteur-compositeur-interprète | visesanger (skriver/komponerer/synger) |
| un album | et album |
| un concert | en konsert |
| la scène | scenen |
| un tube | en hit |
| les paroles engagées | engasjert tekst |`,
    },
    {
      id: 'fransk-3-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av sangtekst - Stromae "Papaoutai"',
      problem: `Analyser refrenget fra Stromaes "Papaoutai" (2013):

*"Papaoutai, papaoutai, papaoutai,
Où t'es, papa où t'es?
Où t'es, papa où t'es?
Où t'es, papa où t'es?"*

(Pappa hvor er du, pappa hvor er du, pappa hvor er du,
Hvor er du, pappa hvor er du?)`,
      solution: `**Losning:**

**Spraaklig analyse:**
- **"Papaoutai"** er en sammenskriving av "Papa où t'es?" (Pappa, hvor er du?). Dette er **familier register** / muntlig spraak: "où t'es" i stedet for "où es-tu"
- **Anaphore/repetisjon**: Gjentakelsen av "où t'es" forsterker desperasjonen og savnet
- **Direkte tiltale (apostrophe)**: Barnet henvender seg direkte til faren

**Tematisk analyse:**
- Sangen handler om **fravaerende fedre** - et sosialt tema
- Tonen er baade **lekende** (barnlig gjentakelse) og **trist** (reelt savn)
- Musikkvideoen forsterker temaet: en gutt proever aa faa kontakt med en livloes far

**Kulturell kontekst:**
- Stromae er belgisk med kongolesisk far som ble drept under folkemordet i Rwanda
- Sangen resonerer med mange som har vokst opp uten far
- Stomaes styrke er aa kombinere **dansbar musikk** med **alvorlige temaer**`,
    },
    {
      id: 'fransk-3-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble artist til sjanger og epoke:',
        subTasks: [
          { label: 'a', task: 'Edith Piaf', solution: 'La chanson française - 1940-1960-tallet. Ikonisk stemme, sanger som "La Vie en rose" og "Non, je ne regrette rien".' },
          { label: 'b', task: 'Stromae', solution: 'Elektronisk pop/rap - 2010-tallet. Belgisk-kongolesisk artist kjent for "Papaoutai" og "Alors on danse".' },
          { label: 'c', task: 'Daft Punk', solution: 'L\'électro française - 1990-2020-tallet. Legendarisk elektronisk duo kjent for "Around the World" og "Get Lucky".' },
          { label: 'd', task: 'Jacques Brel', solution: 'La chanson française - 1950-1970-tallet. Belgisk-fransk visesanger kjent for intense, poetiske forestillinger som "Ne me quitte pas".' },
        ],
        solution: 'a) Chanson - 1940-60, b) Pop/rap - 2010, c) Elektro - 1990-2020, d) Chanson - 1950-70.',
        hints: ['Piaf = klassisk chanson', 'Stromae = moderne pop/rap', 'Daft Punk = elektronisk'],
      },
    },
    {
      id: 'fransk-3-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk musikkvokabularet:',
        subTasks: [
          { label: 'a', task: 'Oversett: "Sangteksten i refrenget er veldig poetisk."', solution: '"Les paroles du refrain sont très poétiques."' },
          { label: 'b', task: 'Oversett: "Denne sangen var en stor hit i Frankrike."', solution: '"Cette chanson était un grand tube en France." / "Cette chanson a été un grand tube en France."' },
          { label: 'c', task: 'Oversett: "Han er en visesanger som skriver, komponerer og synger selv."', solution: '"C\'est un auteur-compositeur-interprète." / "Il est auteur-compositeur-interprète."' },
        ],
        solution: 'a) Les paroles du refrain sont très poétiques. b) Cette chanson était un grand tube. c) C\'est un auteur-compositeur-interprète.',
        hints: ['Sangtekst = les paroles', 'Hit = un tube', 'Visesanger = auteur-compositeur-interprète'],
      },
    },
    {
      id: 'fransk-3-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjon om fransk musikk:',
        subTasks: [
          { label: 'a', task: 'Hvorfor tror du Frankrike har innfort kvoter for franskspraaklig musikk paa radio (minst 40%)?', solution: 'For aa beskytte fransk spraak og kultur mot dominansen av engelskspraaklig (saerlig amerikansk) musikk. Det er en del av Frankrikes politikk for "l\'exception culturelle" (kulturelt unntak) - at kultur ikke bare er en vare.' },
          { label: 'b', task: 'Sammenlign chanson française med moderne fransk rap: Hva er likt og hva er forskjellig?', solution: 'Likt: Teksten er sentral i begge sjangre, begge kommenterer samfunnet, begge har sterke artister. Forskjellig: Chanson er melodisk/poetisk, rap er rytmisk/direkte. Chanson var borgerlig/universell, rap er ofte knyttet til banlieue/ungdomskultur.' },
          { label: 'c', task: 'Velg en fransk sang og skriv 3-4 setninger paa fransk om hvorfor du liker den (eller ville likt den).', solution: 'Eksempel: "J\'aime la chanson \'Papaoutai\' de Stromae parce que le rythme est entraînant et les paroles sont émouvantes. La chanson parle d\'un sujet sérieux - l\'absence du père - mais la musique donne envie de danser. C\'est un mélange unique de joie et de tristesse."' },
        ],
        solution: 'a) Beskytte fransk kultur, b) Tekst-sentral vs. ulik stil/publikum, c) Aapent svar.',
        hints: ['L\'exception culturelle = fransk kulturpolitikk', 'Teksten er sentral i baade chanson og rap', 'Bruk musikkvokabularet'],
      },
    },
    {
      id: 'fransk-3-6-2-tip-1',
      type: 'tip',
      content: `**Tips for aa bruke musikk i fransklaringen:**

1. **Lytt aktivt**: Les sangteksten (les paroles) mens du lytter
2. **Analyser teksten**: Se etter stilfigurer, register og temaer
3. **Laer vokabular**: Sangtekster er en naturlig kilde til nye ord
4. Start med **Stromae** - tydelig uttale, interessante temaer, dansbar musikk
5. Soek etter "paroles + sangittel" for aa finne franske sangtekster paa nett`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 Les arts visuels - Visuell kunst
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_6_3: TextbookChapter = {
  id: 'fransk-3-6-3',
  courseId: 'fransk-3',
  chapterNumber: '6.3',
  title: 'Les arts visuels - Visuell kunst',
  description: 'Utforsk fransk visuell kunst fra impresjonismen til moderne kunst, med kunstvokabular og bildeanalyse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sentrale franske kunstbevegelser og kunstnere',
    'analysere kunstverk med relevant vokabular paa fransk',
  ],
  content: [
    {
      id: 'fransk-3-6-3-intro',
      type: 'text',
      content: `## Les arts visuels - Visuell kunst

Frankrike har vaert sentrum for visuell kunst i flere hundre aar. Paris var kunstverdenens hovedstad fra 1800-tallet til midten av 1900-tallet, og mange av de viktigste kunstbevegelsene oppsto her.

**Viktige franske kunstbevegelser:**
- **Le néoclassicisme** (1770-1830) - David, Ingres
- **Le romantisme** (1820-1850) - Delacroix, Géricault
- **Le réalisme** (1850-1870) - Courbet, Millet
- **L'impressionnisme** (1870-1890) - Monet, Renoir, Degas
- **Le post-impressionnisme** (1886-1905) - Cézanne, Gauguin, Van Gogh
- **Le fauvisme** (1905-1908) - Matisse, Derain
- **Le cubisme** (1907-1920) - Braque, Picasso (spansk, men aktiv i Paris)
- **Le surréalisme** (1920-1960) - Magritte, Dalí, Duchamp
- **Le nouveau réalisme** (1960) - Yves Klein, Arman

Paris' museer - **le Louvre**, **le Musée d'Orsay** og **le Centre Pompidou** - huser noen av verdens viktigste kunstsamlinger.`,
    },
    {
      id: 'fransk-3-6-3-def-1',
      type: 'definition',
      content: `**L'impressionnisme (Impresjonismen, ca. 1870-1890):**
Kunstbevegelsen som revolusjonerte maleriet. Impresjonistene malte **utendors** (en plein air), fanget **oyeblikkets lys**, og brukte synlige penselstrok og klare farger. Navnet kom fra Claude Monets maleri *Impression, soleil levant* (1872).

**Le post-impressionnisme (Post-impresjonismen, ca. 1886-1905):**
En viderefoering av impresjonismen som gikk i ulike retninger. Cézanne soekte geometriske former, Gauguin brukte sterke farger og eksotiske motiver, Van Gogh uttrykte intense folelser.

**Le fauvisme (Fauvismen, ca. 1905-1908):**
"De ville dyrene" (*les fauves*) - kunstnere som brukte ekstremt sterke, rene farger paa en uttrykksfullt maate. Ledet av Henri Matisse.

**L'art contemporain (Samtidskunst):**
Samlebegrep for kunst fra etterkrigstiden til i dag, inkludert konseptkunst, installasjoner, performancekunst og digital kunst.`,
    },
    {
      id: 'fransk-3-6-3-text-1',
      type: 'text',
      content: `## Les grands artistes - Store kunstnere

### L'impressionnisme

**Claude Monet (1840-1926)** - Impresjonismens far
- *Impression, soleil levant* (1872) - Maleriet som ga bevegelsen sitt navn
- *Les Nymphéas* (Vannliljene) - Monets sene mesterverk, malt i hagen i Giverny
- Fokus: Lys, vann, refleksjoner, oeyeblikkets skiftende karakter

**Pierre-Auguste Renoir (1841-1919)**
- *Le Bal du Moulin de la Galette* (1876) - Festscene i Paris
- *Le Déjeuner des canotiers* (1881) - Lunsj paa en elvebredd
- Fokus: Menneskelig glaede, varme farger, sosiale scener

**Edgar Degas (1834-1917)**
- *La Classe de danse* (Balletttimen) - Beroomte ballettscener
- *L'Absinthe* (1876) - Realistisk portrett av ensomhet
- Fokus: Bevegelse, uventede vinkler, dagliglivet

### Le post-impressionnisme

**Paul Cézanne (1839-1906)** - "Modernismens far"
- *Les Grandes Baigneuses* (De store badende) - Geometriske former
- *La Montagne Sainte-Victoire* - Gjentatte studier av samme fjell
- Fokus: Form, struktur, geometri - "Behandle naturen gjennom sylinderen, sfaeren og kjeglen"

**Paul Gauguin (1848-1903)**
- *D'où venons-nous? Que sommes-nous? Où allons-nous?* (1897) - Eksistensielt mesterverk
- Malte paa Tahiti med sterke farger og symbolisme
- Fokus: Det eksotiske, det spirituelle, sterke fargeflater`,
    },
    {
      id: 'fransk-3-6-3-text-2',
      type: 'text',
      content: `## L'art moderne - Moderne kunst

### Henri Matisse (1869-1954)

Matisse var leder for **le fauvisme** og en av de storste kunstnerne i det 20. aarhundret.

- *La Danse* (Dansen, 1910) - Fem dansende figurer i sterke farger
- *La Joie de vivre* (Livsgleden, 1906)
- Sent i livet: **les gouaches découpées** (papirklipp) - fargerike utklipp

**Beroomt sitat:** *"La couleur surtout, et peut-être plus encore que le dessin, est une libération."*
(Fargen fremfor alt, og kanskje enda mer enn tegningen, er en frigjoring.)

### Marcel Duchamp (1887-1968) - Konseptkunstens far

Duchamp revolusjonerte kunsten med sine **readymades** - hverdagsobjekter presentert som kunst.

- *Fontaine* (1917) - Et urinal signert "R. Mutt" - kanskje det mest kontroversielle kunstverket i historien
- *Nu descendant un escalier* (Naken som gaar ned en trapp, 1912)

**Duchamps bidrag:** Han stilte spormaalet "Hva er kunst?" og viste at ideen bak verket kan vaere viktigere enn den fysiske gjenstanden. Dette la grunnlaget for all konseptkunst.

## Le vocabulaire des arts visuels - Kunstvokabular

| Fransk | Norsk |
|--------|-------|
| un tableau / une peinture | et maleri |
| un peintre | en maler |
| un sculpteur | en billedhugger |
| une sculpture | en skulptur |
| le dessin | tegning |
| une aquarelle | en akvarell |
| une huile (sur toile) | en olje (paa lerret) |
| le pinceau | penselen |
| la palette | paletten |
| la lumière | lyset |
| l'ombre | skyggen |
| le premier plan | forgrunnen |
| l'arrière-plan | bakgrunnen |
| la composition | komposisjonen |
| la perspective | perspektivet |
| un chef-d'oeuvre | et mesterverk |
| une exposition | en utstilling |
| un musée | et museum |
| une galerie | et galleri |`,
    },
    {
      id: 'fransk-3-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Bildeanalyse - Monets Impression, soleil levant',
      problem: `Analyser Monets *Impression, soleil levant* (1872) med bruk av kunstvokabular:

Maleriet viser en havn (Le Havre) i morgengryet. En rod/oransje sol reflekteres i vannet. Baater og industrielle kraner er synlige i bakgrunnen som duse silhuetter.`,
      solution: `**Losning - Analyse paa fransk:**

**Description (Beskrivelse):**
*Ce tableau de Claude Monet représente le port du Havre a l'aube. Au premier plan, on voit l'eau du port avec des reflets orangés. Au centre, un soleil rouge se lève a l'horizon. A l'arrière-plan, on distingue des silhouettes de bateaux et de grues industrielles dans la brume.*

(Dette maleriet av Claude Monet forestiller havnen i Le Havre i morgengryet. I forgrunnen ser vi havnevannet med oransje refleksjoner. I sentrum stiger en rod sol opp over horisonten. I bakgrunnen skimter man silhuetter av baater og industrielle kraner i taaaken.)

**Analyse stylistique (Stilistisk analyse):**
- **La lumière** (lyset) er det viktigste elementet - Monet fanger oeyeblikkets lys
- **Les couleurs** (fargene): Kontrastene mellom den varme solen (oransje/rod) og den kjolige bakgrunnen (blaa/graa) skaper dybde
- **La technique** (teknikken): Synlige penselstrok gir et "uferdig" inntrykk som var revolusjonaerende
- **L'impression** (inntrykket): Maleriet gir et inntrykk av havnen, ikke en detaljert gjengivelse - derav navnet "impresjonisme"

**Historisk betydning:**
Maleriet ga navn til hele den impresjonistiske bevegelsen da en kritiker spottet tittelen.`,
    },
    {
      id: 'fransk-3-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble kunstner til bevegelse og kjennetegn:',
        subTasks: [
          { label: 'a', task: 'Claude Monet', solution: 'Impresjonisme. Kjennetegn: Lys, vann, refleksjoner, utendoers maling (en plein air). Hovedverk: Impression, soleil levant, Les Nymphéas.' },
          { label: 'b', task: 'Paul Cézanne', solution: 'Post-impresjonisme. Kjennetegn: Geometriske former, struktur, "modernismens far". Hovedverk: La Montagne Sainte-Victoire, Les Grandes Baigneuses.' },
          { label: 'c', task: 'Henri Matisse', solution: 'Fauvisme. Kjennetegn: Sterke, rene farger, forenklet form, livsglede. Hovedverk: La Danse, La Joie de vivre, papirklipp.' },
          { label: 'd', task: 'Marcel Duchamp', solution: 'Dadaisme/konseptkunst. Kjennetegn: Readymades, provokasjon, ideen viktigere enn objektet. Hovedverk: Fontaine (urinalet).' },
        ],
        solution: 'a) Impresjonisme, b) Post-impresjonisme, c) Fauvisme, d) Konseptkunst.',
        hints: ['Monet = lys og vann', 'Cézanne = geometri', 'Matisse = farge', 'Duchamp = idé'],
      },
    },
    {
      id: 'fransk-3-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kunstvokabularet paa fransk:',
        subTasks: [
          { label: 'a', task: 'Beskriv forgrunnen og bakgrunnen i et maleri: "I forgrunnen ser vi... I bakgrunnen..."', solution: '"Au premier plan, on voit... A l\'arrière-plan, on distingue / on aperçoit..."' },
          { label: 'b', task: 'Si at Monet bruker varme farger og synlige penselstrok.', solution: '"Monet utilise des couleurs chaudes et des coups de pinceau visibles."' },
          { label: 'c', task: 'Si at utstillingen viser malerier og skulpturer.', solution: '"L\'exposition présente des peintures / des tableaux et des sculptures."' },
        ],
        solution: 'a) Au premier plan... A l\'arrière-plan... b) Couleurs chaudes, coups de pinceau visibles. c) L\'exposition présente des peintures et des sculptures.',
        hints: ['Forgrunn = au premier plan', 'Bakgrunn = a l\'arrière-plan', 'Penselstrok = coups de pinceau'],
      },
    },
    {
      id: 'fransk-3-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjon om kunst:',
        subTasks: [
          { label: 'a', task: 'Hvorfor var impresjonismen revolusjonaer? Hva bryt den med?', solution: 'Impresjonismen bryt med akademisk maleri som krevde presise, detaljerte gjengivelser. Impresjonistene malte utendoers, brukte synlige penselstrok, fanget oeyeblikkets lys og valgte hverdagsmotiver. De ble avvist av det offisielle Salon og maalte utstille i "Salon des Refusés".' },
          { label: 'b', task: 'Er Duchamps "Fontaine" (et urinal) kunst? Argumenter for og mot paa fransk.', solution: 'For: "Oui, c\'est de l\'art parce que Duchamp pose la question \'Qu\'est-ce que l\'art?\' L\'idée est plus importante que l\'objet." Mot: "Non, ce n\'est pas de l\'art parce qu\'il n\'y a pas de talent artistique. N\'importe qui peut présenter un objet." Duchamps poeng var nettopp aa provosere denne debatten.' },
          { label: 'c', task: 'Velg en fransk kunstner og skriv 3-4 setninger paa fransk om hvorfor du finner kunstneren interessant.', solution: 'Eksempel: "Je trouve Monet fascinant parce qu\'il a changé notre façon de voir la lumière. Ses tableaux des Nymphéas sont d\'une beauté extraordinaire. Il a peint le même sujet encore et encore pour capturer les changements de lumière. C\'est un artiste qui nous apprend a regarder le monde autrement."' },
        ],
        solution: 'a) Brudd med akademisk tradisjon, b) Debatten om kunstens definisjon, c) Aapent svar.',
        hints: ['Impresjonisme = brudd med tradisjon', 'Duchamp = hva er kunst?', 'Bruk kunstvokabularet'],
      },
    },
    {
      id: 'fransk-3-6-3-tip-1',
      type: 'tip',
      content: `**Tips for bildeanalyse paa fransk:**

1. **Beskriv foerst**: Hva ser du? Bruk *au premier plan, a l'arrière-plan, au centre*
2. **Analyser deretter**: Farger, lys, komposisjon, teknikk
3. **Tolk til slutt**: Hva uttrykker verket? Hvilken stemning skaper det?
4. Bruk alltid kunstvokabular: *la lumière, les couleurs, la composition, la technique*
5. Koble verket til kunstbevegelsen og den historiske konteksten`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 L'art de vivre à la française - Fransk livsstil og kultur
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_6_4: TextbookChapter = {
  id: 'fransk-3-6-4',
  courseId: 'fransk-3',
  chapterNumber: '6.4',
  title: "L'art de vivre a la française - Fransk livsstil og kultur",
  description: 'Utforsk fransk livsstil gjennom gastronomi, mote, design og arkitektur - kulturarven som definerer Frankrike.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sentrale elementer i fransk kulturarv og livsstil',
    'diskutere gastronomiens, motens og arkitekturens plass i fransk identitet',
  ],
  content: [
    {
      id: 'fransk-3-6-4-intro',
      type: 'text',
      content: `## L'art de vivre a la française - Fransk livsstil og kultur

"L'art de vivre a la française" (kunsten aa leve paa den franske maaten) er et begrep som beskriver den franske tilnaermingen til dagliglivet - der mat, vin, mote, design og kultur er integrert i hverdagen. I 2010 ble **le repas gastronomique des Français** (det franske gastronomiske maaltidet) oppfort paa UNESCOs liste over immateriell kulturarv.

**De viktigste elementene i l'art de vivre:**
- **La gastronomie** - Matkultur og kokkekunst
- **La mode** - Mote og stil
- **L'architecture** - Arkitektur og byplanlegging
- **Le savoir-vivre** - Hoflighet og etikette
- **La joie de vivre** - Livsglede og aa nyte oeyeblikket

Disse elementene er ikke bare overflate - de er dypt forankret i fransk identitet og selvforstaaelse.`,
    },
    {
      id: 'fransk-3-6-4-def-1',
      type: 'definition',
      content: `**La gastronomie française:**
Fransk kokkekunst og matkultur, ansett som en av verdens fineste. Kjennetegnes av:
- Hoey kvalitet paa raavarene (*les produits du terroir*)
- Presise koketeknikker
- Regional variasjon
- Maaltidet som sosial hendelse

**Le terroir:**
Et sentralt fransk begrep som beskriver sammenhengen mellom et produkt (vin, ost, mat) og stedet det kommer fra - jordsmonn, klima, tradisjon. Terroir er grunnen til at en vin fra Bordeaux smaker annerledes enn en fra Bourgogne.

**Le savoir-vivre:**
Bokstavelig "aa vite aa leve" - den franske formen for hoflighet, etikette og god oppforsel i sosiale sammenhenger. Inkluderer bordskikk, hoflighetsfraser og sosiale koder.

**L'exception culturelle:**
Prinsippet om at kultur (film, musikk, kunst) ikke bare er en vare, men en verdi som maa beskyttes. Frankrike bruker dette prinsippet for aa begrunne stoette til nasjonal kulturproduksjon.`,
    },
    {
      id: 'fransk-3-6-4-text-1',
      type: 'text',
      content: `## La gastronomie - Gastronomien som kulturarv

### Le repas gastronomique des Français

Det franske gastronomiske maaltidet folger en fast struktur:

| Rekkefolge | Fransk | Norsk |
|------------|--------|-------|
| 1 | L'apéritif | Aperitiff (drink for maaltidet) |
| 2 | L'entrée / le hors-d'oeuvre | Forrett |
| 3 | Le plat principal | Hovedrett |
| 4 | Le fromage | Ost |
| 5 | Le dessert | Dessert |
| 6 | Le café / le digestif | Kaffe / fordoyelsesdrikk |

### Les grands chefs - Store kokker

| Kokk | Bidrag |
|------|--------|
| Auguste Escoffier (1846-1935) | Moderniserte fransk kokkekunst, "kokkenes konge" |
| Paul Bocuse (1926-2018) | Nouvelle cuisine, Lyon som gastronomisk hovedstad |
| Julia Child (1912-2004) | Brakte fransk kokkekunst til USA |
| Alain Ducasse (f. 1956) | Mest Michelin-stjerner, internasjonal innflytelse |

### Les produits emblématiques - Ikoniske produkter

- **Le vin** (vinen) - Bordeaux, Bourgogne, Champagne
- **Le fromage** (osten) - Over 400 typer! "Un pays avec 400 fromages ne peut pas mourir" (et land med 400 oster kan ikke doe - de Gaulle)
- **Le pain** (broedet) - La baguette ble oppfort paa UNESCOs kulturarvliste i 2022
- **La pâtisserie** (konditorkaken) - Croissant, éclair, tarte tatin, macaron`,
    },
    {
      id: 'fransk-3-6-4-text-2',
      type: 'text',
      content: `## La mode et le design - Mote og design

Paris er verdens motehovedstad. Fransk mote har definert eleganse og stil i flere aarhundre.

### Les grandes maisons de couture - Store motehus

| Motehus | Grunnlegger | Kjent for |
|---------|-------------|-----------|
| Chanel | Coco Chanel (1883-1971) | "La petite robe noire" (den lille sorte kjolen), parfymen N°5 |
| Dior | Christian Dior (1905-1957) | "New Look" (1947), feminin eleganse |
| Yves Saint Laurent | YSL (1936-2008) | Le smoking (kvinners dress), kjonn i mote |
| Louis Vuitton | LV (1821-1892) | Luksuskofferter, monogram, verdens mest verdifulle luksusmerke |
| Hermès | Thierry Hermès (1801-1878) | Birkin-vesken, silkeskjerf |

**Coco Chanels revolusjon:**
Chanel frigjorde kvinner fra korsetter og komplisert klaer. Hun introduserte komfortable, elegante plagg som bukser for kvinner, den lille sorte kjolen og Chanel-dressen. Hennes motto: *"La mode se démode, le style jamais."* (Moten gaar ut av moten, stilen aldri.)

## L'architecture - Arkitektur

Fransk arkitektur spenner over alle epoker:

| Stil | Periode | Eksempel |
|------|---------|----------|
| Romansk | 1000-1200 | Vézelay, Cluny |
| Gotisk | 1200-1500 | Notre-Dame de Paris, Chartres |
| Renessanse | 1500-1600 | Slottene i Loire-dalen (Chambord) |
| Klassisisme | 1600-1800 | Versailles |
| Haussmannsk | 1850-1870 | Paris' boulevarder |
| Art Nouveau | 1890-1910 | Paris' metrostasjoner |
| Moderne | 1900-tallet | Centre Pompidou (Piano & Rogers), La Pyramide du Louvre (I.M. Pei) |

**Haussmanns Paris:** Baron Haussmann omformet Paris paa 1850-60-tallet med brede boulevarder, uniformerte bygninger og parker. Dette er det Paris vi kjenner i dag.`,
    },
    {
      id: 'fransk-3-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Diskusjon om kulturarv',
      problem: `UNESCO har oppfort det franske gastronomiske maaltidet (2010) og den franske baguetten (2022) paa sin liste over immateriell kulturarv. Analyser:

1. Hvorfor er dette viktig for Frankrike?
2. Hva sier det om forholdet mellom mat og kultur?`,
      solution: `**Losning:**

**1. Betydning for Frankrike:**
- UNESCO-anerkjennelsen bekrefter at gastronomien er en sentral del av fransk **identitet** og kulturarv
- Det beskytter tradisjonene mot globalisering og standardisering
- Det stotter **le terroir** - lokale produkter og haandverkstradisjoner
- Det styrker Frankrikes "soft power" - kulturell innflytelse i verden
- Det anerkjenner maaltidet som en **sosial praksis**, ikke bare naering

**2. Mat og kultur:**
- Maaltidet er en **sosial hendelse** i fransk kultur - man spiser sammen, tar seg tid, nyter
- Mat er knyttet til **terroir** (sted), **saison** (aarsitd) og **tradition** (overlevering)
- Kokkekunst betraktes som en **kunstform** paa linje med maleri og musikk
- Den franske mattradisjonen handler om **kvalitet fremfor kvantitet**
- Baguetten er et dagligdags symbol: den kjoepes fersk hver dag og representerer det enkle, gode livet

**Paa fransk:**
*"La gastronomie française n'est pas seulement une question de nourriture - c'est un art de vivre, une tradition sociale et une expression de l'identité nationale."*`,
    },
    {
      id: 'fransk-3-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble fransk kulturelt begrep til riktig definisjon:',
        subTasks: [
          { label: 'a', task: 'Le terroir', solution: 'Sammenhengen mellom et produkt og stedet det kommer fra - jordsmonn, klima, tradisjon. Forklarer hvorfor vin fra ulike regioner smaker ulikt.' },
          { label: 'b', task: 'Le savoir-vivre', solution: '"Aa vite aa leve" - Fransk hoflighet, etikette og sosiale koder. Inkluderer bordskikk, hoflighetsfraser og god oppforsel.' },
          { label: 'c', task: 'L\'exception culturelle', solution: 'Prinsippet om at kultur ikke bare er en vare, men en verdi som maa beskyttes. Frankrike bruker dette for aa stoette nasjonal film, musikk og kunst.' },
          { label: 'd', task: 'L\'art de vivre', solution: '"Kunsten aa leve" - Den franske tilnaermingen til dagliglivet der mat, vin, kultur og estetikk er integrert i hverdagen.' },
        ],
        solution: 'a) Sted-produkt-sammenheng, b) Hoflighet/etikette, c) Kulturbeskyttelse, d) Livsstil/livskunst.',
        hints: ['Terroir = jord/sted', 'Savoir-vivre = vite aa leve', 'Exception = unntak'],
      },
    },
    {
      id: 'fransk-3-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Det franske gastronomiske maaltidet er paa UNESCOs kulturarvliste.', solution: '"Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l\'UNESCO."' },
          { label: 'b', task: 'Coco Chanel revolusjonerte moten ved aa introdusere den lille sorte kjolen.', solution: '"Coco Chanel a révolutionné la mode en introduisant la petite robe noire."' },
          { label: 'c', task: 'Frankrike har over 400 typer ost.', solution: '"La France a plus de 400 variétés de fromage." / "La France possède plus de quatre cents fromages."' },
        ],
        solution: 'a) Le repas gastronomique... inscrit au patrimoine... b) Coco Chanel a révolutionné... la petite robe noire. c) Plus de 400 variétés de fromage.',
        hints: ['Kulturarv = le patrimoine culturel immatériel', 'Den lille sorte kjolen = la petite robe noire'],
      },
    },
    {
      id: 'fransk-3-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Refleksjon om fransk kultur og identitet:',
        subTasks: [
          { label: 'a', task: 'Sammenlign "l\'art de vivre a la française" med norsk kultur. Hva er likt og hva er forskjellig?', solution: 'Likt: Begge verdsetter natur, mat med identitet (norsk matkultur vokser). Forskjellig: Frankrike har sterkere formell matkultur, motebevissthet og kulturpolitikk. Norge er mer uformelt, friluftsorientert. Begge land har sterk terroir-tradisjon (norsk brunost vs. fransk ost).' },
          { label: 'b', task: 'Hvorfor tror du Frankrike aktivt beskytter sin kulturelle produksjon (film, musikk, mat)?', solution: 'Frankrike ser kultur som en del av nasjonal identitet, ikke bare underholdning. L\'exception culturelle beskytter mot dominans av (saerlig amerikansk) massekultur. Det handler om spraak, identitet og mangfold. Ogsaa oekonomisk: kulturindustrien er viktig for Frankrike.' },
          { label: 'c', task: 'Skriv 3-4 setninger paa fransk om et aspekt ved fransk kultur du beundrer eller synes er interessant.', solution: 'Eksempel: "J\'admire la tradition gastronomique française parce qu\'elle accorde une grande importance a la qualité des produits et au plaisir de manger ensemble. En France, le repas est un moment social, pas seulement une nécessité. Cette façon de vivre nous rappelle l\'importance de prendre le temps de savourer la vie."' },
        ],
        solution: 'a) Sammenligning av kulturtradisjoner, b) Identitet og kulturbeskyttelse, c) Aapent svar.',
        hints: ['Tenk paa mat, natur, hoflighet', 'L\'exception culturelle = kulturbeskyttelse', 'Bruk vokabular fra kapittelet'],
      },
    },
    {
      id: 'fransk-3-6-4-note-1',
      type: 'note',
      content: `## Oppsummering av Kapittel 6: Film og kunst

I dette kapittelet har vi dekket:

**6.1 Le cinéma français** - Fransk film:
- Fra Lumière til La Nouvelle Vague til moderne film
- Truffaut, Godard, Varda
- La politique des auteurs
- Filmvokabular og filmanalyse

**6.2 La musique française** - Fransk musikk:
- Chanson française: Piaf, Brel, Aznavour, Brassens
- Moderne: Stromae, Daft Punk, rap français
- Musikkvokabular og tekstanalyse

**6.3 Les arts visuels** - Visuell kunst:
- Impresjonisme: Monet, Renoir, Degas
- Post-impresjonisme: Cézanne, Gauguin
- Moderne: Matisse, Duchamp
- Kunstvokabular og bildeanalyse

**6.4 L'art de vivre** - Fransk livsstil:
- Gastronomi og matkultur (UNESCO-arv)
- Mote: Chanel, Dior, Saint Laurent
- Arkitektur: Gotikk, klassisisme, Haussmann, moderne
- Le terroir, le savoir-vivre, l'exception culturelle`,
    },
    {
      id: 'fransk-3-6-4-tip-1',
      type: 'tip',
      content: `**Tips for aa snakke om fransk kultur paa eksamen:**

1. Vis **bredde**: Koble ulike kulturomraader (litteratur, film, kunst, mat)
2. Bruk **fagtermer**: l'art de vivre, le terroir, l'exception culturelle, la politique des auteurs
3. Vis **kritisk refleksjon**: Ikke bare beskriv, men reflekter over hvorfor kulturen er viktig
4. **Sammenlign** med norsk kultur - det viser interkulturell kompetanse
5. Husk at fransk kultur er **mangfoldig** - ikke bare Paris, men ogsaa regioner, forstedskultur, frankofonien`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const FRANSK_3_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_FRANSK_3_4_1,
  CHAPTER_FRANSK_3_4_2,
  CHAPTER_FRANSK_3_4_3,
  CHAPTER_FRANSK_3_4_4,
  CHAPTER_FRANSK_3_5_1,
  CHAPTER_FRANSK_3_5_2,
  CHAPTER_FRANSK_3_5_3,
  CHAPTER_FRANSK_3_5_4,
  CHAPTER_FRANSK_3_6_1,
  CHAPTER_FRANSK_3_6_2,
  CHAPTER_FRANSK_3_6_3,
  CHAPTER_FRANSK_3_6_4,
];

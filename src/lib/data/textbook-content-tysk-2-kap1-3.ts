/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 2 - Kapittel 1-3 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 1: Perfekt und Präteritum (1.1-1.4)
 * - Kapittel 2: Konjunktiv II (2.1-2.4)
 * - Kapittel 3: Passiv und Relativsätze (3.1-3.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: PERFEKT UND PRÄTERITUM
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 Das Perfekt - dannelse og bruk
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_1_1: TextbookChapter = {
  id: 'tysk-2-1-1',
  courseId: 'tysk-2',
  chapterNumber: '1.1',
  title: 'Das Perfekt',
  subtitle: 'Dannelse og bruk',
  description: 'Lær å snakke om fortiden med perfektum - den vanligste fortidsformen i muntlig tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere om personlige opplevelser',
    'bruke varierte setningsstrukturer og tidsuttrykk',
  ],
  content: [
    // ========== SEKSJON 1: Introduksjon til perfektum ==========
    {
      id: 'tysk-2-1-1-intro',
      type: 'text',
      content: `## Hva er perfektum?

Perfektum (das Perfekt) er den vanligste måten å snakke om fortiden på i muntlig tysk. Når tyskere forteller om hva de gjorde i går, i helgen eller på ferien, bruker de nesten alltid perfektum.

**Eksempler på perfektum:**
- *Ich habe gestern Fußball gespielt.* (Jeg spilte fotball i går.)
- *Wir sind nach Berlin gefahren.* (Vi dro til Berlin.)
- *Sie hat ein Buch gelesen.* (Hun leste en bok.)

Perfektum består alltid av **to deler**:
1. Et hjelpeverb (*haben* eller *sein*)
2. Et partisipp perfektum (verbet i en spesiell form)`,
    },
    {
      id: 'tysk-2-1-1-def-1',
      type: 'definition',
      title: 'Perfektum',
      content: `**Perfektum** er en sammensatt fortidsform som brukes i muntlig tysk og uformell skriving.

**Formel:** Hjelpeverb (haben/sein) + Partisipp perfektum

**Plassering:** Hjelpeverbet står på verbplassen (posisjon 2), partisippet står til slutt i setningen.`,
    },
    {
      id: 'tysk-2-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnstruktur',
      problem: `Analyser setningsstrukturen i disse perfektum-setningene:

a) Ich habe einen Film gesehen.
b) Er ist nach Hause gegangen.`,
      solution: `**Løsning:**

a) *Ich habe einen Film gesehen.*
   - Subjekt: Ich
   - Hjelpeverb: habe (posisjon 2)
   - Objekt: einen Film
   - Partisipp: gesehen (til slutt)
   - Oversettelse: Jeg så en film.

b) *Er ist nach Hause gegangen.*
   - Subjekt: Er
   - Hjelpeverb: ist (posisjon 2)
   - Stedsadverbial: nach Hause
   - Partisipp: gegangen (til slutt)
   - Oversettelse: Han gikk hjem.`,
    },
    {
      id: 'tysk-2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser hjelpeverbet og partisippet i hver setning:',
        subTasks: [
          { label: 'a', task: 'Wir haben Pizza gegessen.', solution: 'Hjelpeverb: haben, Partisipp: gegessen' },
          { label: 'b', task: 'Sie ist früh aufgestanden.', solution: 'Hjelpeverb: ist, Partisipp: aufgestanden' },
          { label: 'c', task: 'Ich habe Deutsch gelernt.', solution: 'Hjelpeverb: habe, Partisipp: gelernt' },
        ],
        solution: 'a) haben/gegessen, b) ist/aufgestanden, c) habe/gelernt',
        hints: ['Hjelpeverbet står på posisjon 2 i setningen', 'Partisippet står alltid til slutt'],
      },
    },

    // ========== SEKSJON 2: Svake verb ==========
    {
      id: 'tysk-2-1-1-text-2',
      type: 'text',
      content: `## Svake verb i perfektum

Svake verb (schwache Verben) følger et regelmessig mønster. De fleste tyske verb er svake.

**Dannelse av partisipp for svake verb:**
\`ge-\` + verbstamme + \`-t\`

| Infinitiv | Stamme | Partisipp |
|-----------|--------|-----------|
| machen | mach- | ge**mach**t |
| spielen | spiel- | ge**spiel**t |
| kaufen | kauf- | ge**kauf**t |
| hören | hör- | ge**hör**t |
| lernen | lern- | ge**lern**t |

**Merk:** Verb med stamme som ender på -t eller -d får -et:
- arbeiten → gearbeit**et**
- warten → gewart**et**`,
    },
    {
      id: 'tysk-2-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Svake verb',
      problem: `Dann perfektum av disse svake verbene:

a) kochen (å lage mat)
b) tanzen (å danse)
c) arbeiten (å arbeide)`,
      solution: `**Løsning:**

a) kochen → **gekocht**
   *Ich habe Suppe gekocht.* (Jeg lagde suppe.)

b) tanzen → **getanzt**
   *Wir haben die ganze Nacht getanzt.* (Vi danset hele natten.)

c) arbeiten → **gearbeitet** (merk: -et fordi stammen ender på -t)
   *Er hat viel gearbeitet.* (Han arbeidet mye.)`,
    },
    {
      id: 'tysk-2-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Dann partisipp perfektum av disse svake verbene:',
        subTasks: [
          { label: 'a', task: 'wohnen', solution: 'gewohnt', answer: 'gewohnt' },
          { label: 'b', task: 'fragen', solution: 'gefragt', answer: 'gefragt' },
          { label: 'c', task: 'reden', solution: 'geredet', answer: 'geredet' },
          { label: 'd', task: 'suchen', solution: 'gesucht', answer: 'gesucht' },
        ],
        solution: 'a) gewohnt, b) gefragt, c) geredet, d) gesucht',
        hints: ['Formel: ge- + stamme + -t', 'Stamme på -d eller -t får -et'],
      },
    },

    // ========== SEKSJON 3: Haben eller sein? ==========
    {
      id: 'tysk-2-1-1-text-3',
      type: 'text',
      content: `## Haben eller sein?

De fleste verb bruker **haben** som hjelpeverb. Men noen verb bruker **sein**.

**Bruk sein med verb som uttrykker:**
1. **Bevegelse fra A til B:** gehen, fahren, fliegen, kommen, laufen
2. **Tilstandsendring:** einschlafen, aufwachen, sterben, werden
3. **sein og bleiben:** Ich bin gewesen, Ich bin geblieben

| Verb | Hjelpeverb | Perfektum |
|------|------------|-----------|
| spielen | haben | hat gespielt |
| gehen | sein | ist gegangen |
| schlafen | haben | hat geschlafen |
| einschlafen | sein | ist eingeschlafen |`,
    },
    {
      id: 'tysk-2-1-1-tip-1',
      type: 'tip',
      content: `**Huskeregel for sein:**
Tenk på det som "å flytte seg" - hvis personen eller tingen flytter seg fra ett sted til et annet, eller endrer tilstand, bruk *sein*.

- *Ich bin nach Oslo gefahren.* (Jeg kjørte til Oslo - bevegelse)
- *Ich habe Auto gefahren.* (Jeg kjørte bil - ingen destinasjon)`,
    },
    {
      id: 'tysk-2-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Haben vs. sein',
      problem: `Velg riktig hjelpeverb (haben eller sein):

a) Ich _____ gestern viel gearbeitet.
b) Wir _____ nach Deutschland geflogen.
c) Er _____ um 7 Uhr aufgewacht.`,
      solution: `**Løsning:**

a) Ich **habe** gestern viel gearbeitet.
   (arbeiten = ingen bevegelse, bruk haben)

b) Wir **sind** nach Deutschland geflogen.
   (fliegen med destinasjon = bevegelse, bruk sein)

c) Er **ist** um 7 Uhr aufgewacht.
   (aufwachen = tilstandsendring, bruk sein)`,
    },
    {
      id: 'tysk-2-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig hjelpeverb (haben eller sein):',
        subTasks: [
          { label: 'a', task: 'Ich _____ einen Kuchen gebacken.', solution: 'habe', answer: 'habe' },
          { label: 'b', task: 'Sie _____ nach Hause gelaufen.', solution: 'ist', answer: 'ist' },
          { label: 'c', task: 'Wir _____ im Restaurant gegessen.', solution: 'haben', answer: 'haben' },
          { label: 'd', task: 'Er _____ spät eingeschlafen.', solution: 'ist', answer: 'ist' },
        ],
        solution: 'a) habe, b) ist, c) haben, d) ist',
        hints: ['Bevegelse og tilstandsendring → sein', 'De fleste andre verb → haben'],
      },
    },

    // ========== SEKSJON 4: Verb uten ge- ==========
    {
      id: 'tysk-2-1-1-text-4',
      type: 'text',
      content: `## Verb uten ge-

Noen verb får **ikke** ge- foran partisippet:

**1. Verb med uatskillelig prefiks:**
be-, emp-, ent-, er-, ge-, miss-, ver-, zer-

| Infinitiv | Partisipp |
|-----------|-----------|
| besuchen | besucht |
| erzählen | erzählt |
| verstehen | verstanden |
| beginnen | begonnen |

**2. Verb som ender på -ieren:**
| Infinitiv | Partisipp |
|-----------|-----------|
| studieren | studiert |
| telefonieren | telefoniert |
| fotografieren | fotografiert |`,
    },
    {
      id: 'tysk-2-1-1-warning-1',
      type: 'warning',
      content: `**Vanlig feil:** Ikke legg til ge- på verb med uatskillelige prefikser!

❌ *Ich habe das Buch geverstanden.*
✅ *Ich habe das Buch verstanden.*

❌ *Sie hat gestudiert.*
✅ *Sie hat studiert.*`,
    },
    {
      id: 'tysk-2-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Verb uten ge-',
      problem: `Dann perfektum av disse verbene:

a) besuchen (å besøke)
b) studieren (å studere)
c) erklären (å forklare)`,
      solution: `**Løsning:**

a) besuchen → **besucht** (be- er uatskillelig prefiks)
   *Ich habe meine Oma besucht.* (Jeg besøkte bestemoren min.)

b) studieren → **studiert** (verb på -ieren)
   *Er hat Medizin studiert.* (Han studerte medisin.)

c) erklären → **erklärt** (er- er uatskillelig prefiks)
   *Die Lehrerin hat die Aufgabe erklärt.* (Læreren forklarte oppgaven.)`,
    },
    {
      id: 'tysk-2-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Dann partisipp perfektum (husk: noen får ikke ge-):',
        subTasks: [
          { label: 'a', task: 'bezahlen', solution: 'bezahlt', answer: 'bezahlt' },
          { label: 'b', task: 'reservieren', solution: 'reserviert', answer: 'reserviert' },
          { label: 'c', task: 'vergessen', solution: 'vergessen', answer: 'vergessen' },
          { label: 'd', task: 'entschuldigen', solution: 'entschuldigt', answer: 'entschuldigt' },
        ],
        solution: 'a) bezahlt, b) reserviert, c) vergessen, d) entschuldigt',
        hints: ['be-, ver-, ent- er uatskillelige prefikser', 'Verb på -ieren får aldri ge-'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-1-1-note-1',
      type: 'note',
      title: 'Oppsummering: Das Perfekt',
      content: `**Struktur:** Hjelpeverb + Partisipp perfektum

**Svake verb:** ge- + stamme + -t (gemacht, gespielt)

**Hjelpeverb haben:** De fleste verb
**Hjelpeverb sein:** Bevegelse, tilstandsendring, sein/bleiben

**Ingen ge-:**
- Uatskillelige prefikser (be-, ver-, er-, etc.)
- Verb på -ieren`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.2 Unregelmäßige Verben im Perfekt
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_1_2: TextbookChapter = {
  id: 'tysk-2-1-2',
  courseId: 'tysk-2',
  chapterNumber: '1.2',
  title: 'Unregelmäßige Verben im Perfekt',
  subtitle: 'Sterke verb og deres partisipp',
  description: 'Lær de viktigste sterke verbene og deres uregelmessige partisippformer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke varierte setningsstrukturer og tidsuttrykk',
    'uttrykke seg skriftlig og muntlig med sammenheng og variasjon',
  ],
  content: [
    // ========== SEKSJON 1: Hva er sterke verb? ==========
    {
      id: 'tysk-2-1-2-intro',
      type: 'text',
      content: `## Sterke verb (Starke Verben)

Sterke verb har **vokalskifte** i partisipp perfektum og ender på **-en** i stedet for **-t**. Disse verbene må læres utenat fordi de ikke følger et fast mønster.

**Sammenligning:**
| Type | Infinitiv | Partisipp |
|------|-----------|-----------|
| Svakt | machen | ge**mach**t |
| Sterkt | fahren | ge**fahr**en |
| Sterkt | sehen | ge**seh**en |
| Sterkt | schreiben | ge**schrieb**en |

Legg merke til at sterke verb:
1. Ofte har vokalskifte (a→a, e→e, ei→ie)
2. Alltid ender på **-en**
3. Beholder ge- foran (med mindre de har uatskillelig prefiks)`,
    },
    {
      id: 'tysk-2-1-2-def-1',
      type: 'definition',
      title: 'Sterke verb',
      content: `**Sterke verb** (starke Verben) er verb som endrer vokal i bøyningen og har partisipp på -en.

De viktigste vokalskiftene:
- **ei → ie:** schreiben → geschrieben
- **i → u:** finden → gefunden
- **e → o:** sprechen → gesprochen
- **a → a:** fahren → gefahren (beholder a)`,
    },
    {
      id: 'tysk-2-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Vanlige sterke verb',
      problem: `Hva er perfektum av disse verbene?

a) lesen (å lese)
b) schlafen (å sove)
c) trinken (å drikke)`,
      solution: `**Løsning:**

a) lesen → **gelesen**
   *Ich habe ein Buch gelesen.* (Jeg leste en bok.)
   Vokalskifte: e → e (beholder e)

b) schlafen → **geschlafen**
   *Er hat lange geschlafen.* (Han sov lenge.)
   Vokalskifte: a → a (beholder a)

c) trinken → **getrunken**
   *Wir haben Kaffee getrunken.* (Vi drakk kaffe.)
   Vokalskifte: i → u`,
    },
    {
      id: 'tysk-2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble infinitiv med riktig partisipp:',
        subTasks: [
          { label: 'a', task: 'sehen', solution: 'gesehen', answer: 'gesehen' },
          { label: 'b', task: 'geben', solution: 'gegeben', answer: 'gegeben' },
          { label: 'c', task: 'nehmen', solution: 'genommen', answer: 'genommen' },
          { label: 'd', task: 'sprechen', solution: 'gesprochen', answer: 'gesprochen' },
        ],
        solution: 'a) gesehen, b) gegeben, c) genommen, d) gesprochen',
        hints: ['Sterke verb ender alltid på -en', 'Mange har vokalskifte'],
      },
    },

    // ========== SEKSJON 2: De viktigste sterke verbene ==========
    {
      id: 'tysk-2-1-2-text-2',
      type: 'text',
      content: `## Viktige sterke verb å huske

Her er de mest brukte sterke verbene gruppert etter vokalskifte:

**Gruppe ei → ie:**
| Infinitiv | Partisipp | Betydning |
|-----------|-----------|-----------|
| bleiben | ist geblieben | bli |
| schreiben | hat geschrieben | skrive |
| steigen | ist gestiegen | stige |
| treiben | hat getrieben | drive |

**Gruppe i → u:**
| Infinitiv | Partisipp | Betydning |
|-----------|-----------|-----------|
| finden | hat gefunden | finne |
| trinken | hat getrunken | drikke |
| singen | hat gesungen | synge |
| springen | ist gesprungen | hoppe |`,
    },
    {
      id: 'tysk-2-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Gruppe ei → ie',
      problem: `Lag setninger i perfektum med disse verbene:

a) bleiben (han / i Berlin)
b) schreiben (jeg / en e-post)`,
      solution: `**Løsning:**

a) bleiben → ist geblieben
   *Er ist in Berlin geblieben.*
   (Han ble i Berlin.)
   Merk: bleiben bruker sein!

b) schreiben → hat geschrieben
   *Ich habe eine E-Mail geschrieben.*
   (Jeg skrev en e-post.)`,
    },
    {
      id: 'tysk-2-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk (bruk perfektum):',
        subTasks: [
          { label: 'a', task: 'Jeg har skrevet et brev.', solution: 'Ich habe einen Brief geschrieben.' },
          { label: 'b', task: 'Vi har drukket te.', solution: 'Wir haben Tee getrunken.' },
          { label: 'c', task: 'Hun har funnet nøklene.', solution: 'Sie hat die Schlüssel gefunden.' },
        ],
        solution: 'a) Ich habe einen Brief geschrieben. b) Wir haben Tee getrunken. c) Sie hat die Schlüssel gefunden.',
        hints: ['schreiben → geschrieben', 'trinken → getrunken', 'finden → gefunden'],
      },
    },

    // ========== SEKSJON 3: Flere sterke verb ==========
    {
      id: 'tysk-2-1-2-text-3',
      type: 'text',
      content: `## Flere viktige grupper

**Gruppe e → o:**
| Infinitiv | Partisipp | Betydning |
|-----------|-----------|-----------|
| sprechen | hat gesprochen | snakke |
| treffen | hat getroffen | møte |
| werfen | hat geworfen | kaste |
| helfen | hat geholfen | hjelpe |

**Gruppe med sein:**
| Infinitiv | Partisipp | Betydning |
|-----------|-----------|-----------|
| gehen | ist gegangen | gå |
| fahren | ist gefahren | kjøre |
| kommen | ist gekommen | komme |
| fliegen | ist geflogen | fly |
| laufen | ist gelaufen | løpe |`,
    },
    {
      id: 'tysk-2-1-2-tip-1',
      type: 'tip',
      content: `**Læretips:** Lag kort med de sterke verbene! Skriv infinitiv på den ene siden og partisipp + hjelpeverb på den andre.

Eksempel:
- Forside: *gehen*
- Bakside: *ist gegangen*

Øv litt hver dag - repetisjon er nøkkelen!`,
    },
    {
      id: 'tysk-2-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Bevegelsesverb med sein',
      problem: `Lag fullstendige setninger i perfektum:

a) fliegen (vi / til Spania)
b) laufen (barna / til skolen)
c) kommen (gjestene / klokken 8)`,
      solution: `**Løsning:**

a) *Wir sind nach Spanien geflogen.*
   (Vi fløy til Spania.)

b) *Die Kinder sind zur Schule gelaufen.*
   (Barna løp til skolen.)

c) *Die Gäste sind um 8 Uhr gekommen.*
   (Gjestene kom klokken 8.)

Alle bevegelsesverb med destinasjon bruker **sein**!`,
    },
    {
      id: 'tysk-2-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av perfektum:',
        subTasks: [
          { label: 'a', task: 'Er _____ mit dem Zug _____ (fahren).', solution: 'ist ... gefahren' },
          { label: 'b', task: 'Ich _____ ihn gestern _____ (treffen).', solution: 'habe ... getroffen' },
          { label: 'c', task: 'Sie _____ mir _____ (helfen).', solution: 'hat ... geholfen' },
          { label: 'd', task: 'Wir _____ nach Hause _____ (gehen).', solution: 'sind ... gegangen' },
        ],
        solution: 'a) ist gefahren, b) habe getroffen, c) hat geholfen, d) sind gegangen',
        hints: ['Bevegelsesverb bruker sein', 'e → o: sprechen, treffen, helfen'],
      },
    },

    // ========== SEKSJON 4: Blandede verb ==========
    {
      id: 'tysk-2-1-2-text-4',
      type: 'text',
      content: `## Blandede verb (Gemischte Verben)

Noen verb er "blandede" - de har vokalskifte som sterke verb, men endelse på -t som svake verb:

| Infinitiv | Partisipp | Betydning |
|-----------|-----------|-----------|
| bringen | hat gebracht | bringe |
| denken | hat gedacht | tenke |
| kennen | hat gekannt | kjenne |
| nennen | hat genannt | kalle |
| wissen | hat gewusst | vite |
| brennen | hat gebrannt | brenne |

Disse må læres individuelt!`,
    },
    {
      id: 'tysk-2-1-2-warning-1',
      type: 'warning',
      content: `**Vanlige feil med blandede verb:**

❌ *Ich habe es gebringt.*
✅ *Ich habe es gebracht.*

❌ *Er hat gedenkt.*
✅ *Er hat gedacht.*

Husk: Blandede verb har -t, men også vokalskifte!`,
    },
    {
      id: 'tysk-2-1-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Blandede verb',
      problem: `Lag setninger i perfektum:

a) bringen (hun / en gave)
b) denken (jeg / på deg)
c) wissen (han / svaret)`,
      solution: `**Løsning:**

a) *Sie hat ein Geschenk gebracht.*
   (Hun brakte en gave.)

b) *Ich habe an dich gedacht.*
   (Jeg tenkte på deg.)

c) *Er hat die Antwort gewusst.*
   (Han visste svaret.)`,
    },
    {
      id: 'tysk-2-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Dann partisipp perfektum av disse blandede verbene:',
        subTasks: [
          { label: 'a', task: 'bringen', solution: 'gebracht', answer: 'gebracht' },
          { label: 'b', task: 'denken', solution: 'gedacht', answer: 'gedacht' },
          { label: 'c', task: 'kennen', solution: 'gekannt', answer: 'gekannt' },
          { label: 'd', task: 'wissen', solution: 'gewusst', answer: 'gewusst' },
        ],
        solution: 'a) gebracht, b) gedacht, c) gekannt, d) gewusst',
        hints: ['Blandede verb: vokalskifte + -t', 'bringen → gebracht (i → a)'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-1-2-note-1',
      type: 'note',
      title: 'Oppsummering: Sterke og blandede verb',
      content: `**Sterke verb:**
- Vokalskifte + endelse -en
- Eksempel: schreiben → geschrieben

**Blandede verb:**
- Vokalskifte + endelse -t
- Eksempel: bringen → gebracht

**Viktige hjelpeverb:**
- haben: de fleste verb
- sein: bevegelse, tilstandsendring

**Tips:** Lag en personlig liste over sterke verb du møter og øv på dem regelmessig!`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.3 Das Präteritum - når og hvorfor
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_1_3: TextbookChapter = {
  id: 'tysk-2-1-3',
  courseId: 'tysk-2',
  chapterNumber: '1.3',
  title: 'Das Präteritum',
  subtitle: 'Når og hvorfor',
  description: 'Lær når du skal bruke preteritum i stedet for perfektum, spesielt i skriftlig tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå lengre tekster',
    'bruke varierte setningsstrukturer og tidsuttrykk',
  ],
  content: [
    // ========== SEKSJON 1: Hva er preteritum? ==========
    {
      id: 'tysk-2-1-3-intro',
      type: 'text',
      content: `## Preteritum - den skriftlige fortidsformen

Preteritum (das Präteritum) er den andre hovedfortidsformen på tysk. Mens perfektum dominerer i muntlig språk, er preteritum vanligere i skriftlig språk, nyheter, fortellinger og litteratur.

**Sammenligning:**
| Muntlig (Perfektum) | Skriftlig (Preteritum) |
|---------------------|------------------------|
| Ich habe gespielt | Ich spielte |
| Er ist gegangen | Er ging |
| Wir haben gesehen | Wir sahen |

**Når brukes preteritum?**
- I skriftlige tekster og fortellinger
- I nyheter og journalistikk
- Med hjelpeverb (sein, haben) og modalverb
- I formelle tekster`,
    },
    {
      id: 'tysk-2-1-3-def-1',
      type: 'definition',
      title: 'Preteritum',
      content: `**Preteritum** (das Präteritum) er en enkel fortidsform som uttrykker avsluttede handlinger i fortiden.

**Kjennetegn:**
- Én verbform (ikke sammensatt)
- Brukes mest skriftlig
- Alltid med sein, haben og modalverb

**Dannelse svake verb:** Stamme + -te + personendelse
**Dannelse sterke verb:** Vokalskifte i stammen`,
    },
    {
      id: 'tysk-2-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Perfektum vs. Preteritum',
      problem: `Sammenlign disse setningene - når bruker man hvilken form?

a) "Gestern habe ich Tennis gespielt." vs. "Gestern spielte ich Tennis."
b) "Ich war müde." vs. "Ich bin müde gewesen."`,
      solution: `**Løsning:**

a) Begge er grammatisk korrekte, men:
   - "Ich habe Tennis gespielt" - naturlig i samtale
   - "Ich spielte Tennis" - passer i en skriftlig fortelling

b) Med sein brukes nesten alltid preteritum:
   - "Ich war müde" ✓ - naturlig, vanlig
   - "Ich bin müde gewesen" - grammatisk riktig, men høres unaturlig ut

**Regel:** Med sein, haben og modalverb brukes preteritum selv i muntlig språk.`,
    },
    {
      id: 'tysk-2-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken form er mest naturlig? Velg perfektum eller preteritum:',
        subTasks: [
          { label: 'a', task: 'Muntlig: Jeg var i Berlin. (sein)', solution: 'Ich war in Berlin.' },
          { label: 'b', task: 'Muntlig: Jeg spiste pizza i går. (essen)', solution: 'Ich habe gestern Pizza gegessen.' },
          { label: 'c', task: 'I en fortelling: Han gikk hjem.', solution: 'Er ging nach Hause.' },
        ],
        solution: 'a) war (preteritum), b) habe gegessen (perfektum), c) ging (preteritum)',
        hints: ['sein/haben: alltid preteritum', 'Muntlig med vanlige verb: perfektum'],
      },
    },

    // ========== SEKSJON 2: Svake verb i preteritum ==========
    {
      id: 'tysk-2-1-3-text-2',
      type: 'text',
      content: `## Svake verb i preteritum

Svake verb følger et regelmessig mønster i preteritum:

**Formel:** Stamme + -te + personendelse

| Person | Endelse | Eksempel (spielen) |
|--------|---------|-------------------|
| ich | -te | ich spielte |
| du | -test | du spieltest |
| er/sie/es | -te | er spielte |
| wir | -ten | wir spielten |
| ihr | -tet | ihr spieltet |
| sie/Sie | -ten | sie spielten |

**Verb på -t/-d får ekstra -e-:**
- arbeiten → ich arbeit**e**te
- warten → ich wart**e**te`,
    },
    {
      id: 'tysk-2-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Bøyning av svake verb',
      problem: `Bøy disse verbene i preteritum for alle personer:

a) machen (å gjøre)
b) warten (å vente)`,
      solution: `**Løsning:**

a) machen:
   | ich machte | wir machten |
   | du machtest | ihr machtet |
   | er/sie machte | sie machten |

b) warten (stamme på -t, får ekstra -e-):
   | ich wartete | wir warteten |
   | du wartetest | ihr wartetet |
   | er/sie wartete | sie warteten |`,
    },
    {
      id: 'tysk-2-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett verbene i preteritum:',
        subTasks: [
          { label: 'a', task: 'ich (lernen)', solution: 'ich lernte', answer: 'ich lernte' },
          { label: 'b', task: 'wir (kaufen)', solution: 'wir kauften', answer: 'wir kauften' },
          { label: 'c', task: 'er (arbeiten)', solution: 'er arbeitete', answer: 'er arbeitete' },
          { label: 'd', task: 'sie (tanzen)', solution: 'sie tanzten', answer: 'sie tanzten' },
        ],
        solution: 'a) lernte, b) kauften, c) arbeitete, d) tanzten',
        hints: ['Formel: stamme + -te + endelse', 'Stamme på -t/-d får -ete'],
      },
    },

    // ========== SEKSJON 3: Sterke verb i preteritum ==========
    {
      id: 'tysk-2-1-3-text-3',
      type: 'text',
      content: `## Sterke verb i preteritum

Sterke verb har vokalskifte og egne endelser:

| Person | Endelse | Eksempel (gehen→ging) |
|--------|---------|----------------------|
| ich | - | ich ging |
| du | -st | du gingst |
| er/sie/es | - | er ging |
| wir | -en | wir gingen |
| ihr | -t | ihr gingt |
| sie/Sie | -en | sie gingen |

**Viktige sterke verb:**
| Infinitiv | Preteritum | Betydning |
|-----------|------------|-----------|
| gehen | ging | gå |
| kommen | kam | komme |
| fahren | fuhr | kjøre |
| sehen | sah | se |
| lesen | las | lese |
| schreiben | schrieb | skrive |
| sprechen | sprach | snakke |`,
    },
    {
      id: 'tysk-2-1-3-tip-1',
      type: 'tip',
      content: `**Huskeregel:** Ich og er/sie/es har ingen endelse i preteritum for sterke verb:

- ich ging (ikke "ich gingte")
- er ging (ikke "er gingte")

Men: du gingst, wir gingen, ihr gingt`,
    },
    {
      id: 'tysk-2-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Sterke verb i preteritum',
      problem: `Sett inn riktig form av verbet i preteritum:

a) Er _____ (gehen) nach Hause.
b) Wir _____ (fahren) nach München.
c) Ich _____ (sehen) einen Film.`,
      solution: `**Løsning:**

a) Er **ging** nach Hause.
   (gehen → ging, ingen endelse for er)

b) Wir **fuhren** nach München.
   (fahren → fuhr, endelse -en for wir)

c) Ich **sah** einen Film.
   (sehen → sah, ingen endelse for ich)`,
    },
    {
      id: 'tysk-2-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i preteritum:',
        subTasks: [
          { label: 'a', task: 'ich (lesen)', solution: 'ich las', answer: 'ich las' },
          { label: 'b', task: 'sie (kommen) - entall', solution: 'sie kam', answer: 'sie kam' },
          { label: 'c', task: 'wir (sprechen)', solution: 'wir sprachen', answer: 'wir sprachen' },
          { label: 'd', task: 'er (schreiben)', solution: 'er schrieb', answer: 'er schrieb' },
        ],
        solution: 'a) las, b) kam, c) sprachen, d) schrieb',
        hints: ['Sterke verb: vokalskifte', 'ich/er/sie/es: ingen endelse'],
      },
    },

    // ========== SEKSJON 4: Haben, sein og modalverb ==========
    {
      id: 'tysk-2-1-3-text-4',
      type: 'text',
      content: `## Haben, sein og modalverb

Disse verbene brukes nesten alltid i preteritum, selv i muntlig språk:

**Sein:**
| ich war | wir waren |
| du warst | ihr wart |
| er/sie war | sie waren |

**Haben:**
| ich hatte | wir hatten |
| du hattest | ihr hattet |
| er/sie hatte | sie hatten |

**Modalverb:**
| Infinitiv | Preteritum (ich) |
|-----------|------------------|
| können | konnte |
| müssen | musste |
| wollen | wollte |
| sollen | sollte |
| dürfen | durfte |
| mögen | mochte |`,
    },
    {
      id: 'tysk-2-1-3-warning-1',
      type: 'warning',
      content: `**Viktig:** Med sein, haben og modalverb brukes preteritum SELV i muntlig språk!

❌ Unaturlig: *Ich habe viel Zeit gehabt.*
✅ Naturlig: *Ich hatte viel Zeit.*

❌ Unaturlig: *Ich habe nicht kommen gekonnt.*
✅ Naturlig: *Ich konnte nicht kommen.*`,
    },
    {
      id: 'tysk-2-1-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Sein, haben og modalverb',
      problem: `Oversett til tysk (bruk preteritum):

a) Jeg var syk.
b) Hun hadde ikke tid.
c) Vi måtte gå.`,
      solution: `**Løsning:**

a) *Ich war krank.*
   (sein → war)

b) *Sie hatte keine Zeit.*
   (haben → hatte)

c) *Wir mussten gehen.*
   (müssen → mussten)`,
    },
    {
      id: 'tysk-2-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk med preteritum:',
        subTasks: [
          { label: 'a', task: 'Vi var i Tyskland.', solution: 'Wir waren in Deutschland.' },
          { label: 'b', task: 'Jeg kunne ikke komme.', solution: 'Ich konnte nicht kommen.' },
          { label: 'c', task: 'De hadde en hund.', solution: 'Sie hatten einen Hund.' },
          { label: 'd', task: 'Han ville dra.', solution: 'Er wollte gehen.' },
        ],
        solution: 'a) Wir waren..., b) Ich konnte..., c) Sie hatten..., d) Er wollte...',
        hints: ['sein: war/waren', 'können: konnte', 'haben: hatte/hatten'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-1-3-note-1',
      type: 'note',
      title: 'Oppsummering: Das Präteritum',
      content: `**Når brukes preteritum?**
- Skriftlige tekster og fortellinger
- Nyheter og journalistikk
- Med sein, haben, modalverb (alltid!)

**Svake verb:** Stamme + -te + endelse
**Sterke verb:** Vokalskifte, ich/er/sie/es uten endelse

**Viktige former:**
- sein: war, warst, war, waren, wart, waren
- haben: hatte, hattest, hatte, hatten, hattet, hatten`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.4 Erzählen in der Vergangenheit
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_1_4: TextbookChapter = {
  id: 'tysk-2-1-4',
  courseId: 'tysk-2',
  chapterNumber: '1.4',
  title: 'Erzählen in der Vergangenheit',
  subtitle: 'Å fortelle i fortid',
  description: 'Lær å fortelle sammenhengende historier ved å kombinere perfektum og preteritum.',
  estimatedMinutes: 50,
  competenceGoals: [
    'uttrykke seg skriftlig og muntlig med sammenheng og variasjon',
    'lese og forstå lengre tekster',
  ],
  content: [
    // ========== SEKSJON 1: Når bruker man hva? ==========
    {
      id: 'tysk-2-1-4-intro',
      type: 'text',
      content: `## Å fortelle i fortid

Når du forteller om noe som har skjedd, må du velge mellom perfektum og preteritum. Her er hovedreglene:

**Muntlig fortelling:** Hovedsakelig perfektum
- *Gestern bin ich aufgestanden und habe gefrühstückt.*

**Skriftlig fortelling:** Hovedsakelig preteritum
- *Er wachte auf und sah aus dem Fenster.*

**Blanding:** sein, haben og modalverb er alltid i preteritum
- *Ich war müde, aber ich musste arbeiten. Also habe ich einen Kaffee getrunken.*`,
    },
    {
      id: 'tysk-2-1-4-def-1',
      type: 'definition',
      title: 'Fortellingstid',
      content: `**Muntlig fortelling:** Perfektum + preteritum av sein/haben/modalverb

**Skriftlig fortelling:** Preteritum for alle verb

**Nyheter:** Preteritum

**Dagbok/personlig:** Kan variere, ofte perfektum`,
    },
    {
      id: 'tysk-2-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Muntlig vs. skriftlig',
      problem: `Sammenlign disse to versjonene av samme historie:

Muntlig: Hva gjorde du i helgen?
Skriftlig: En novelle om weekenden.`,
      solution: `**Muntlig versjon:**
*Am Wochenende bin ich nach Hamburg gefahren. Das Wetter war super! Ich habe Freunde getroffen und wir haben zusammen gegessen. Es war toll!*

**Skriftlig versjon (novelle):**
*Am Wochenende fuhr ich nach Hamburg. Das Wetter war herrlich. Ich traf Freunde und wir aßen zusammen. Es war ein wunderbarer Tag.*

**Analyse:**
- Muntlig: *bin gefahren, habe getroffen, haben gegessen* (perfektum)
- Skriftlig: *fuhr, traf, aßen* (preteritum)
- Begge: *war* (sein er alltid preteritum)`,
    },
    {
      id: 'tysk-2-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omskriv disse setningene fra muntlig (perfektum) til skriftlig (preteritum):',
        subTasks: [
          { label: 'a', task: 'Ich habe ein Buch gelesen.', solution: 'Ich las ein Buch.' },
          { label: 'b', task: 'Sie ist nach Berlin gefahren.', solution: 'Sie fuhr nach Berlin.' },
          { label: 'c', task: 'Wir haben Musik gehört.', solution: 'Wir hörten Musik.' },
        ],
        solution: 'a) Ich las..., b) Sie fuhr..., c) Wir hörten...',
        hints: ['lesen → las', 'fahren → fuhr', 'hören → hörte (svakt verb)'],
      },
    },

    // ========== SEKSJON 2: Tidsuttrykk ==========
    {
      id: 'tysk-2-1-4-text-2',
      type: 'text',
      content: `## Tidsuttrykk i fortellinger

For å gjøre fortellingen din mer interessant, bruk varierte tidsuttrykk:

**Rekkefølge:**
- zuerst (først)
- dann / danach (så / deretter)
- später (senere)
- schließlich / am Ende (til slutt)

**Tidspunkt:**
- gestern (i går)
- vorgestern (i forgårs)
- letzte Woche (forrige uke)
- vor zwei Tagen (for to dager siden)
- damals (den gangen)

**Varighet:**
- den ganzen Tag (hele dagen)
- stundenlang (i timevis)
- eine Weile (en stund)`,
    },
    {
      id: 'tysk-2-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Tidsuttrykk i bruk',
      problem: `Skriv en kort fortelling om en dag, bruk minst 4 tidsuttrykk.`,
      solution: `**Eksempelfortelling:**

*Gestern hatte ich einen interessanten Tag. Zuerst bin ich um 7 Uhr aufgestanden und habe gefrühstückt. Dann bin ich zur Arbeit gefahren. Den ganzen Vormittag habe ich E-Mails geschrieben. Später hatte ich ein Meeting. Schließlich bin ich um 18 Uhr nach Hause gekommen.*

**Brukte tidsuttrykk:**
- gestern (i går)
- zuerst (først)
- dann (så)
- den ganzen Vormittag (hele formiddagen)
- später (senere)
- schließlich (til slutt)`,
    },
    {
      id: 'tysk-2-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse tidsuttrykkene:',
        subTasks: [
          { label: 'a', task: 'først', solution: 'zuerst', answer: 'zuerst' },
          { label: 'b', task: 'deretter', solution: 'danach / dann', answer: 'danach' },
          { label: 'c', task: 'til slutt', solution: 'schließlich / am Ende', answer: 'schließlich' },
          { label: 'd', task: 'for to dager siden', solution: 'vor zwei Tagen', answer: 'vor zwei Tagen' },
        ],
        solution: 'a) zuerst, b) danach/dann, c) schließlich, d) vor zwei Tagen',
        hints: ['Tidsuttrykk står ofte først i setningen'],
      },
    },

    // ========== SEKSJON 3: Bindeord ==========
    {
      id: 'tysk-2-1-4-text-3',
      type: 'text',
      content: `## Bindeord for sammenheng

For å binde setninger sammen og vise årsak/virkning:

**Koordinerende (ingen inversjon):**
- und (og)
- aber (men)
- denn (for)
- oder (eller)

**Subordinerende (verb til slutt):**
- weil (fordi)
- obwohl (selv om)
- als (da, når - fortid)
- wenn (hvis, når)
- nachdem (etter at)
- bevor (før)

**Adverb (inversjon):**
- deshalb / darum (derfor)
- trotzdem (likevel)
- außerdem (dessuten)`,
    },
    {
      id: 'tysk-2-1-4-tip-1',
      type: 'tip',
      content: `**Husk ordstilling!**

Med *weil, als, obwohl* osv. går verbet til slutt:
- *Ich blieb zu Hause, weil ich krank **war**.*

Med *deshalb, trotzdem* kommer inversjon:
- *Ich war krank. **Deshalb** blieb ich zu Hause.*`,
    },
    {
      id: 'tysk-2-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Bindeord i fortelling',
      problem: `Kombiner disse setningene med passende bindeord:

a) Ich war müde. Ich ging früh ins Bett.
b) Er hatte kein Geld. Er kaufte nichts.`,
      solution: `**Løsning:**

a) Med *weil* (årsak):
   *Ich ging früh ins Bett, weil ich müde war.*

   Med *deshalb* (konsekvens):
   *Ich war müde. Deshalb ging ich früh ins Bett.*

b) Med *weil*:
   *Er kaufte nichts, weil er kein Geld hatte.*

   Med *deshalb*:
   *Er hatte kein Geld. Deshalb kaufte er nichts.*`,
    },
    {
      id: 'tysk-2-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kombiner setningene med bindeordet i parentes:',
        subTasks: [
          { label: 'a', task: 'Das Wetter war schön. Wir gingen spazieren. (weil)', solution: 'Wir gingen spazieren, weil das Wetter schön war.' },
          { label: 'b', task: 'Er war krank. Er kam zur Arbeit. (obwohl)', solution: 'Er kam zur Arbeit, obwohl er krank war.' },
          { label: 'c', task: 'Ich stand auf. Ich duschte. (nachdem)', solution: 'Nachdem ich aufgestanden war, duschte ich.' },
        ],
        solution: 'a) Wir gingen..., weil... b) Er kam..., obwohl... c) Nachdem ich...',
        hints: ['weil/obwohl: verb til slutt', 'nachdem: ofte med pluskvamperfektum'],
      },
    },

    // ========== SEKSJON 4: Skriv en fortelling ==========
    {
      id: 'tysk-2-1-4-text-4',
      type: 'text',
      content: `## Struktur i en fortelling

En god fortelling har:

**1. Innledning (Einleitung):**
- Sett scenen: tid, sted, personer
- *Es war einmal..., Eines Tages..., Letzten Sommer...*

**2. Hoveddel (Hauptteil):**
- Handlingen utvikler seg
- Bruk varierte verb og tidsuttrykk
- Bygg opp spenning

**3. Avslutning (Schluss):**
- Konklusjon eller moral
- *Schließlich..., Am Ende..., Und so...*`,
    },
    {
      id: 'tysk-2-1-4-example-4',
      type: 'example',
      title: 'Eksempel 4: En komplett fortelling',
      problem: `Les denne korte fortellingen og analyser hvilke tider som brukes.`,
      solution: `**Fortellingen:**
*Letzten Sommer fuhr ich nach Italien. Das Wetter war fantastisch und die Sonne schien jeden Tag.*

*Zuerst besuchte ich Rom. Dort sah ich das Kolosseum und aß leckere Pizza. Dann fuhr ich weiter nach Florenz, wo ich die schöne Kunst bewunderte.*

*Am Ende der Reise war ich müde, aber glücklich. Es war der beste Urlaub meines Lebens!*

**Analyse:**
- Hovedfortelling: **Preteritum** (fuhr, war, schien, besuchte, sah, aß, fuhr, bewunderte)
- Sein/haben: **Preteritum** (war)
- Stil: Skriftlig fortelling → konsekvent preteritum`,
    },
    {
      id: 'tysk-2-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort fortelling (5-6 setninger) om "Mein letztes Wochenende" med preteritum. Bruk minst 3 tidsuttrykk.',
        subTasks: [
          { label: 'a', task: 'Skriv innledningen (1-2 setninger)', solution: 'Letztes Wochenende war das Wetter schön. / Am Samstag stand ich früh auf.' },
          { label: 'b', task: 'Skriv hoveddelen (2-3 setninger)', solution: 'Zuerst frühstückte ich. Dann fuhr ich in die Stadt und traf Freunde.' },
          { label: 'c', task: 'Skriv avslutningen (1-2 setninger)', solution: 'Am Ende war ich müde, aber zufrieden. Es war ein schönes Wochenende.' },
        ],
        solution: 'Bruk preteritum, tidsuttrykk og god struktur.',
        hints: ['Bruk zuerst, dann, schließlich', 'sein/haben alltid i preteritum', 'Varier verbene'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-1-4-note-1',
      type: 'note',
      title: 'Oppsummering: Erzählen in der Vergangenheit',
      content: `**Muntlig:** Perfektum (+ preteritum av sein/haben/modal)
**Skriftlig:** Preteritum

**Tidsuttrykk:** zuerst, dann, später, schließlich

**Bindeord:**
- weil, obwohl, als → verb til slutt
- deshalb, trotzdem → inversjon

**Struktur:** Innledning → Hoveddel → Avslutning`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: KONJUNKTIV II
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 Höflichkeit und Wünsche
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_2_1: TextbookChapter = {
  id: 'tysk-2-2-1',
  courseId: 'tysk-2',
  chapterNumber: '2.1',
  title: 'Höflichkeit und Wünsche',
  subtitle: 'Høflighet og ønsker',
  description: 'Lær å uttrykke deg høflig og formulere ønsker med Konjunktiv II.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke seg høflig og nyansert',
    'kommunisere i ulike situasjoner',
  ],
  content: [
    // ========== SEKSJON 1: Introduksjon ==========
    {
      id: 'tysk-2-2-1-intro',
      type: 'text',
      content: `## Konjunktiv II - den høflige formen

Konjunktiv II (også kalt irrealis) brukes for å uttrykke:
- **Høflighet** - spesielt i forespørsler
- **Ønsker** - ting vi gjerne ville hatt
- **Hypotetiske situasjoner** - "hva hvis..."
- **Betingelser** - "hvis jeg var..."

**Sammenligning:**
| Direkte (kan virke uhøflig) | Høflig (Konjunktiv II) |
|---------------------------|----------------------|
| Können Sie mir helfen? | **Könnten** Sie mir helfen? |
| Ich will einen Kaffee. | Ich **hätte** gern einen Kaffee. |
| Geben Sie mir das Buch! | **Würden** Sie mir das Buch geben? |`,
    },
    {
      id: 'tysk-2-2-1-def-1',
      type: 'definition',
      title: 'Konjunktiv II',
      content: `**Konjunktiv II** er en verbform som uttrykker noe som ikke er virkelig (irrealis) - ønsker, høflighet, hypotetiske situasjoner.

**To hovedmåter å danne Konjunktiv II:**
1. **würde + infinitiv** (vanligst for de fleste verb)
2. **Direkte form** (for sein, haben, modalverb)`,
    },
    {
      id: 'tysk-2-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Høflige forespørsler',
      problem: `Gjør disse setningene mer høflige:

a) Können Sie mir helfen?
b) Haben Sie Zeit?
c) Geben Sie mir die Speisekarte.`,
      solution: `**Løsning:**

a) Können Sie mir helfen?
   → **Könnten Sie mir helfen?**
   (Kunne De hjelpe meg?)

b) Haben Sie Zeit?
   → **Hätten Sie Zeit?**
   (Har De tid? - mer høflig)

c) Geben Sie mir die Speisekarte.
   → **Würden Sie mir die Speisekarte geben?**
   (Ville De gi meg menyen?)

Alle tre versjonene er mer høflige fordi de bruker Konjunktiv II.`,
    },
    {
      id: 'tysk-2-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør disse setningene mer høflige med Konjunktiv II:',
        subTasks: [
          { label: 'a', task: 'Können Sie das wiederholen?', solution: 'Könnten Sie das wiederholen?' },
          { label: 'b', task: 'Haben Sie einen Moment?', solution: 'Hätten Sie einen Moment?' },
          { label: 'c', task: 'Darf ich Sie etwas fragen?', solution: 'Dürfte ich Sie etwas fragen?' },
        ],
        solution: 'a) Könnten..., b) Hätten..., c) Dürfte...',
        hints: ['können → könnten', 'haben → hätten', 'dürfen → dürfte'],
      },
    },

    // ========== SEKSJON 2: Würde + Infinitiv ==========
    {
      id: 'tysk-2-2-1-text-2',
      type: 'text',
      content: `## Würde + Infinitiv

For de fleste verb bruker man **würde + infinitiv**:

| Person | würde | Eksempel |
|--------|-------|----------|
| ich | würde | ich würde gehen |
| du | würdest | du würdest kommen |
| er/sie/es | würde | er würde machen |
| wir | würden | wir würden spielen |
| ihr | würdet | ihr würdet tanzen |
| sie/Sie | würden | sie würden bleiben |

**Merk:** Infinitiven står til slutt i setningen.`,
    },
    {
      id: 'tysk-2-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Würde-konstruksjonen',
      problem: `Lag høflige spørsmål med würde:

a) Sie / das Fenster öffnen
b) du / mir helfen
c) Sie / das noch einmal erklären`,
      solution: `**Løsning:**

a) **Würden Sie das Fenster öffnen?**
   (Ville De åpne vinduet?)

b) **Würdest du mir helfen?**
   (Ville du hjelpe meg?)

c) **Würden Sie das noch einmal erklären?**
   (Ville De forklare det en gang til?)`,
    },
    {
      id: 'tysk-2-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag høflige spørsmål med würde + infinitiv:',
        subTasks: [
          { label: 'a', task: 'Sie / mir den Weg zeigen', solution: 'Würden Sie mir den Weg zeigen?' },
          { label: 'b', task: 'du / das Licht anmachen', solution: 'Würdest du das Licht anmachen?' },
          { label: 'c', task: 'Sie / mir bitte helfen', solution: 'Würden Sie mir bitte helfen?' },
        ],
        solution: 'a) Würden Sie..., b) Würdest du..., c) Würden Sie...',
        hints: ['würde står på posisjon 2', 'Infinitiven står til slutt'],
      },
    },

    // ========== SEKSJON 3: Ønsker uttrykke ==========
    {
      id: 'tysk-2-2-1-text-3',
      type: 'text',
      content: `## Uttrykke ønsker

For å uttrykke ønsker bruker vi ofte:
- **hätte gern** (skulle gjerne ha)
- **würde gern** (skulle gjerne)
- **wäre gern** (skulle gjerne være)

**Eksempler:**
- *Ich hätte gern einen Kaffee.* (Jeg skulle gjerne ha en kaffe.)
- *Ich würde gern nach Japan reisen.* (Jeg skulle gjerne reise til Japan.)
- *Ich wäre gern reich.* (Jeg skulle gjerne vært rik.)

**Med "wenn":**
- *Wenn ich doch nur mehr Zeit hätte!* (Om jeg bare hadde mer tid!)`,
    },
    {
      id: 'tysk-2-2-1-tip-1',
      type: 'tip',
      content: `**"Hätte gern" i restauranter og butikker:**

Dette er standardformuleringen når du bestiller:
- *Ich hätte gern eine Pizza.* (Jeg vil gjerne ha en pizza.)
- *Ich hätte gern zwei Brötchen.* (Jeg vil gjerne ha to rundstykker.)

Mye høfligere enn "Ich will..."!`,
    },
    {
      id: 'tysk-2-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Ønsker',
      problem: `Oversett disse ønskene til tysk:

a) Jeg skulle gjerne ha en kopp te.
b) Vi skulle gjerne bo i Berlin.
c) Om jeg bare kunne fly!`,
      solution: `**Løsning:**

a) *Ich hätte gern eine Tasse Tee.*
   (hätte gern + objekt)

b) *Wir würden gern in Berlin wohnen.*
   (würde gern + infinitiv)

c) *Wenn ich doch nur fliegen könnte!*
   (Wenn + doch nur + Konjunktiv II)`,
    },
    {
      id: 'tysk-2-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett ønskene til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg skulle gjerne ha et glass vann.', solution: 'Ich hätte gern ein Glas Wasser.' },
          { label: 'b', task: 'Hun skulle gjerne lære tysk.', solution: 'Sie würde gern Deutsch lernen.' },
          { label: 'c', task: 'Om jeg bare var yngre!', solution: 'Wenn ich doch nur jünger wäre!' },
        ],
        solution: 'a) Ich hätte gern..., b) Sie würde gern..., c) Wenn ich doch nur...wäre!',
        hints: ['hätte gern + substantiv', 'würde gern + infinitiv', 'Wenn...doch nur + Konj. II'],
      },
    },

    // ========== SEKSJON 4: Höflichkeitsfloskeln ==========
    {
      id: 'tysk-2-2-1-text-4',
      type: 'text',
      content: `## Høflighetsutrykk

Her er nyttige høflige fraser:

**I butikker/restauranter:**
- *Ich hätte gern...* (Jeg vil gjerne ha...)
- *Könnte ich bitte...?* (Kunne jeg få...?)
- *Wäre es möglich...?* (Ville det være mulig...?)

**På jobb/formelt:**
- *Könnten Sie mir sagen...?* (Kunne De fortelle meg...?)
- *Würden Sie so freundlich sein...?* (Ville De være så vennlig...?)
- *Dürfte ich Sie bitten...?* (Tør jeg be Dem om...?)

**Å be om tjenester:**
- *Würdest du mir einen Gefallen tun?* (Kunne du gjøre meg en tjeneste?)
- *Wäre es dir möglich...?* (Ville det være mulig for deg...?)`,
    },
    {
      id: 'tysk-2-2-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Situasjoner',
      problem: `Hva sier du i disse situasjonene?

a) På en kafé vil du bestille en kaffe.
b) Du vil spørre en fremmed om veien.
c) Du vil be kollegaen din om hjelp.`,
      solution: `**Løsning:**

a) På kafé:
   *Entschuldigung, ich hätte gern einen Kaffee, bitte.*

b) Spørre om veien:
   *Entschuldigen Sie, könnten Sie mir sagen, wo der Bahnhof ist?*

c) Be kollega om hjelp:
   *Entschuldige, würdest du mir kurz helfen?*`,
    },
    {
      id: 'tysk-2-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv passende høflige setninger for disse situasjonene:',
        subTasks: [
          { label: 'a', task: 'Du vil bestille to øl på en restaurant.', solution: 'Ich hätte gern zwei Bier, bitte.' },
          { label: 'b', task: 'Du vil spørre sjefen om du kan gå tidlig.', solution: 'Dürfte ich heute früher gehen?' },
          { label: 'c', task: 'Du vil be noen om å snakke saktere.', solution: 'Könnten Sie bitte langsamer sprechen?' },
        ],
        solution: 'a) Ich hätte gern..., b) Dürfte ich..., c) Könnten Sie bitte...',
        hints: ['hätte gern for bestilling', 'dürfte for å be om tillatelse', 'könnten for forespørsler'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-2-1-note-1',
      type: 'note',
      title: 'Oppsummering: Höflichkeit und Wünsche',
      content: `**Høflighet:**
- könnten, dürften, hätten + infinitiv/objekt
- würden Sie... + infinitiv

**Ønsker:**
- hätte gern (+ substantiv)
- würde gern (+ infinitiv)
- wäre gern (+ adjektiv)

**Nyttige fraser:**
- Ich hätte gern... (bestilling)
- Könnten Sie...? (forespørsel)
- Dürfte ich...? (tillatelse)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.2 Irreale Bedingungen
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_2_2: TextbookChapter = {
  id: 'tysk-2-2-2',
  courseId: 'tysk-2',
  chapterNumber: '2.2',
  title: 'Irreale Bedingungen',
  subtitle: 'Urealistiske betingelser',
  description: 'Lær å uttrykke hypotetiske situasjoner og urealistiske betingelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'uttrykke seg nyansert om hypotetiske situasjoner',
    'bruke komplekse setningsstrukturer',
  ],
  content: [
    // ========== SEKSJON 1: Hva er irreale betingelser? ==========
    {
      id: 'tysk-2-2-2-intro',
      type: 'text',
      content: `## Irreale betingelser (Irreale Bedingungssätze)

Irreale betingelser handler om situasjoner som **ikke er virkelige** - "hva hvis..."-scenarioer.

**Sammenligning:**
| Reell betingelse | Irreal betingelse |
|------------------|-------------------|
| Wenn ich Zeit **habe**, **helfe** ich dir. | Wenn ich Zeit **hätte**, **würde** ich dir **helfen**. |
| (Hvis jeg har tid, hjelper jeg deg.) | (Hvis jeg hadde tid, ville jeg hjelpe deg.) |

Den irreale betingelsen uttrykker at personen **ikke har tid** i virkeligheten.`,
    },
    {
      id: 'tysk-2-2-2-def-1',
      type: 'definition',
      title: 'Irreale Bedingungssätze',
      content: `**Irreal betingelse** = en hypotetisk situasjon som ikke stemmer med virkeligheten.

**Struktur:**
Wenn + Subjekt + ... + Verb (Konj. II), Verb (Konj. II) + Subjekt + ...

**Eksempel:**
*Wenn ich reich **wäre**, **würde** ich ein Haus **kaufen**.*
(Hvis jeg var rik, ville jeg kjøpe et hus.)`,
    },
    {
      id: 'tysk-2-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnstruktur',
      problem: `Analyser disse setningene:

a) Wenn ich fliegen könnte, wäre ich glücklich.
b) Wenn er mehr lernen würde, würde er bessere Noten bekommen.`,
      solution: `**Løsning:**

a) *Wenn ich fliegen **könnte**, **wäre** ich glücklich.*
   - Wenn-del: ich fliegen könnte (verb til slutt)
   - Hovedsetning: wäre ich glücklich (inversjon)
   - Betydning: Jeg kan ikke fly, men hvis jeg kunne...

b) *Wenn er mehr lernen **würde**, **würde** er bessere Noten **bekommen**.*
   - Wenn-del: er mehr lernen würde
   - Hovedsetning: würde er bessere Noten bekommen
   - Betydning: Han lærer ikke nok, men hvis han gjorde det...`,
    },
    {
      id: 'tysk-2-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kombiner setningene til irreale betingelser:',
        subTasks: [
          { label: 'a', task: 'Ich habe kein Auto. Ich fahre nicht nach München.', solution: 'Wenn ich ein Auto hätte, würde ich nach München fahren.' },
          { label: 'b', task: 'Er spricht kein Deutsch. Er versteht nichts.', solution: 'Wenn er Deutsch sprechen würde/könnte, würde er alles verstehen.' },
        ],
        solution: 'a) Wenn ich ein Auto hätte..., b) Wenn er Deutsch spräche/könnte...',
        hints: ['haben → hätte', 'sprechen → spräche eller würde sprechen'],
      },
    },

    // ========== SEKSJON 2: Konjunktiv II-former ==========
    {
      id: 'tysk-2-2-2-text-2',
      type: 'text',
      content: `## Former av Konjunktiv II

**Sein og haben (bruk alltid disse formene):**

| Person | sein | haben |
|--------|------|-------|
| ich | wäre | hätte |
| du | wärst | hättest |
| er/sie/es | wäre | hätte |
| wir | wären | hätten |
| ihr | wärt | hättet |
| sie/Sie | wären | hätten |

**Modalverb:**
| Infinitiv | Konjunktiv II |
|-----------|---------------|
| können | könnte |
| müssen | müsste |
| dürfen | dürfte |
| sollen | sollte |
| wollen | wollte |`,
    },
    {
      id: 'tysk-2-2-2-tip-1',
      type: 'tip',
      content: `**Når bruke würde vs. direkte former?**

✓ Bruk **alltid direkte former** av: sein, haben, modalverb
- *Wenn ich reich **wäre**...* (ikke: würde sein)
- *Wenn ich Zeit **hätte**...* (ikke: würde haben)
- *Wenn ich **könnte**...* (ikke: würde können)

✓ Bruk **würde + infinitiv** for andre verb:
- *Wenn ich das **wüsste**...* eller *Wenn ich das wissen **würde**...*
- *Wenn er **käme**...* eller *Wenn er kommen **würde**...*`,
    },
    {
      id: 'tysk-2-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Riktige former',
      problem: `Lag irreale betingelser med disse elementene:

a) ich / reich sein → ein Haus kaufen
b) wir / mehr Zeit haben → öfter reisen
c) du / besser singen können → im Chor singen`,
      solution: `**Løsning:**

a) *Wenn ich reich **wäre**, **würde** ich ein Haus **kaufen**.*
   (sein → wäre, kaufen → würde kaufen)

b) *Wenn wir mehr Zeit **hätten**, **würden** wir öfter **reisen**.*
   (haben → hätten, reisen → würden reisen)

c) *Wenn du besser singen **könntest**, **würdest** du im Chor **singen**.*
   (können → könntest)`,
    },
    {
      id: 'tysk-2-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig Konjunktiv II-form:',
        subTasks: [
          { label: 'a', task: 'Wenn ich reich _____ (sein), würde ich nicht mehr arbeiten.', solution: 'wäre', answer: 'wäre' },
          { label: 'b', task: 'Wenn er Zeit _____ (haben), würde er uns besuchen.', solution: 'hätte', answer: 'hätte' },
          { label: 'c', task: 'Wenn sie Deutsch _____ (können), würde sie in Deutschland arbeiten.', solution: 'könnte', answer: 'könnte' },
          { label: 'd', task: 'Wenn wir Geld _____ (haben), würden wir eine Weltreise machen.', solution: 'hätten', answer: 'hätten' },
        ],
        solution: 'a) wäre, b) hätte, c) könnte, d) hätten',
        hints: ['sein → wäre', 'haben → hätte', 'können → könnte'],
      },
    },

    // ========== SEKSJON 3: Uten "wenn" ==========
    {
      id: 'tysk-2-2-2-text-3',
      type: 'text',
      content: `## Betingelser uten "wenn"

Man kan utelate "wenn" - da kommer verbet først:

**Med wenn:**
*Wenn ich Zeit hätte, würde ich dir helfen.*

**Uten wenn:**
***Hätte** ich Zeit, würde ich dir helfen.*

Denne formen er vanlig i skriftlig språk og høres mer elegant ut.

**Flere eksempler:**
- *Wäre ich du, würde ich das nicht machen.*
- *Hätte er Geld, würde er ein Auto kaufen.*
- *Könnte ich fliegen, wäre ich glücklich.*`,
    },
    {
      id: 'tysk-2-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Med og uten wenn',
      problem: `Omform disse setningene - skriv dem uten "wenn":

a) Wenn ich du wäre, würde ich mehr Sport treiben.
b) Wenn er das wüsste, wäre er überrascht.`,
      solution: `**Løsning:**

a) *Wenn ich du wäre...*
   → ***Wäre** ich du, würde ich mehr Sport treiben.*
   (Var jeg deg, ville jeg trene mer.)

b) *Wenn er das wüsste...*
   → ***Wüsste** er das, wäre er überrascht.*
   (Visste han det, ville han blitt overrasket.)`,
    },
    {
      id: 'tysk-2-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om setningene uten "wenn":',
        subTasks: [
          { label: 'a', task: 'Wenn ich Geld hätte, würde ich ein neues Auto kaufen.', solution: 'Hätte ich Geld, würde ich ein neues Auto kaufen.' },
          { label: 'b', task: 'Wenn sie hier wäre, würde sie uns helfen.', solution: 'Wäre sie hier, würde sie uns helfen.' },
          { label: 'c', task: 'Wenn du mich fragen würdest, würde ich Ja sagen.', solution: 'Würdest du mich fragen, würde ich Ja sagen.' },
        ],
        solution: 'a) Hätte ich Geld..., b) Wäre sie hier..., c) Würdest du mich fragen...',
        hints: ['Verbet kommer først når "wenn" fjernes', 'Resten av setningen er uendret'],
      },
    },

    // ========== SEKSJON 4: Praktiske eksempler ==========
    {
      id: 'tysk-2-2-2-text-4',
      type: 'text',
      content: `## Praktiske situasjoner

Irreale betingelser brukes ofte for å:

**1. Drømme og fantasere:**
- *Wenn ich Millionär wäre, würde ich...*
- *Wenn ich fliegen könnte...*

**2. Gi råd (indirekte):**
- *Wenn ich du wäre, würde ich...*
- *An deiner Stelle würde ich...*

**3. Kritisere forsiktig:**
- *Wenn du mehr geübt hättest, hättest du gewonnen.*

**4. Beklage:**
- *Wenn ich das gewusst hätte!*`,
    },
    {
      id: 'tysk-2-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Gi råd',
      problem: `Gi råd i disse situasjonene med "Wenn ich du wäre...":

a) Din venn vet ikke om han skal ta jobben.
b) Din søster vil kjøpe en gammel bil.`,
      solution: `**Løsning:**

a) *Wenn ich du wäre, würde ich die Stelle annehmen. Die Arbeit klingt interessant und das Gehalt ist gut.*
   (Var jeg deg, ville jeg ta jobben...)

b) *Wenn ich du wäre, würde ich das Auto nicht kaufen. Es ist zu alt und könnte viele Probleme haben.*
   (Var jeg deg, ville jeg ikke kjøpe bilen...)

**Alternativ formulering:**
- *An deiner Stelle würde ich...*`,
    },
    {
      id: 'tysk-2-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til tysk med irreale betingelser:',
        subTasks: [
          { label: 'a', task: 'Hvis jeg var rik, ville jeg reise verden rundt.', solution: 'Wenn ich reich wäre, würde ich um die Welt reisen.' },
          { label: 'b', task: 'Hvis vi kunne fly, ville vi være i Paris nå.', solution: 'Wenn wir fliegen könnten, wären wir jetzt in Paris.' },
          { label: 'c', task: 'Var jeg deg, ville jeg ikke gjøre det.', solution: 'Wäre ich du, würde ich das nicht machen.' },
        ],
        solution: 'a) Wenn ich reich wäre..., b) Wenn wir fliegen könnten..., c) Wäre ich du...',
        hints: ['reich = rik', 'um die Welt reisen = reise verden rundt'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-2-2-note-1',
      type: 'note',
      title: 'Oppsummering: Irreale Bedingungen',
      content: `**Struktur:**
Wenn + ... + Verb (Konj. II), Verb (Konj. II) + ...

**Uten wenn:** Verb først
Hätte ich Zeit, würde ich...

**Former:**
- sein → wäre
- haben → hätte
- können → könnte
- andre verb → würde + infinitiv

**Bruksområder:**
- Drømmer og fantasier
- Gi råd: "Wenn ich du wäre..."
- Hypotetiske situasjoner`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.3 Ratschläge geben
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_2_3: TextbookChapter = {
  id: 'tysk-2-2-3',
  courseId: 'tysk-2',
  chapterNumber: '2.3',
  title: 'Ratschläge geben',
  subtitle: 'Å gi råd',
  description: 'Lær å gi høflige råd og anbefalinger på tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kommunisere høflig og nyansert',
    'gi uttrykk for meninger og råd',
  ],
  content: [
    // ========== SEKSJON 1: Måter å gi råd på ==========
    {
      id: 'tysk-2-2-3-intro',
      type: 'text',
      content: `## Ulike måter å gi råd på

Det finnes flere måter å gi råd på tysk - fra direkte til veldig høflig:

**Fra direkte til høflig:**
1. Imperativ: *Mach das!* (Gjør det!) - direkte
2. Sollen: *Du solltest das machen.* (Du burde gjøre det.) - mild
3. Würde: *Ich würde das machen.* (Jeg ville gjort det.) - høflig
4. An deiner Stelle: *An deiner Stelle würde ich...* (I ditt sted ville jeg...) - veldig høflig

For høflige råd bruker vi **sollte** (burde) eller **würde** (ville).`,
    },
    {
      id: 'tysk-2-2-3-def-1',
      type: 'definition',
      title: 'Sollte - Konjunktiv II av sollen',
      content: `**Sollte** er Konjunktiv II av *sollen* og brukes for å gi høflige råd.

| Person | sollte |
|--------|--------|
| ich | sollte |
| du | solltest |
| er/sie/es | sollte |
| wir | sollten |
| ihr | solltet |
| sie/Sie | sollten |

**Eksempel:** *Du solltest mehr Wasser trinken.*`,
    },
    {
      id: 'tysk-2-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sollte',
      problem: `Gi råd med "sollte" i disse situasjonene:

a) Din venn har hodepine.
b) Din kollega er stresset.
c) Din bror vil lære et nytt språk.`,
      solution: `**Løsning:**

a) *Du **solltest** eine Tablette nehmen und dich ausruhen.*
   (Du burde ta en tablett og hvile deg.)

b) *Sie **sollten** eine Pause machen und spazieren gehen.*
   (De burde ta en pause og gå en tur.)

c) *Du **solltest** einen Sprachkurs besuchen oder eine App benutzen.*
   (Du burde ta et språkkurs eller bruke en app.)`,
    },
    {
      id: 'tysk-2-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gi råd med "sollte":',
        subTasks: [
          { label: 'a', task: 'Problem: Ich bin immer müde.', solution: 'Du solltest früher ins Bett gehen. / Du solltest mehr schlafen.' },
          { label: 'b', task: 'Problem: Ich habe Zahnschmerzen.', solution: 'Du solltest zum Zahnarzt gehen.' },
          { label: 'c', task: 'Problem: Ich verstehe die Grammatik nicht.', solution: 'Du solltest mehr üben. / Du solltest den Lehrer fragen.' },
        ],
        solution: 'Bruk "Du solltest..." + infinitiv',
        hints: ['solltest + infinitiv til slutt', 'Gi praktiske råd'],
      },
    },

    // ========== SEKSJON 2: An deiner Stelle ==========
    {
      id: 'tysk-2-2-3-text-2',
      type: 'text',
      content: `## "An deiner Stelle würde ich..."

Denne konstruksjonen betyr "I ditt sted ville jeg..." og er en svært høflig måte å gi råd på.

**Varianter:**
- *An **deiner** Stelle würde ich...* (uformell, til "du")
- *An **Ihrer** Stelle würde ich...* (formell, til "Sie")
- *An **seiner/ihrer** Stelle würde ich...* (om en tredjeperson)

**Eksempler:**
- *An deiner Stelle würde ich das Angebot annehmen.*
- *An Ihrer Stelle würde ich mit dem Chef sprechen.*`,
    },
    {
      id: 'tysk-2-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: An deiner Stelle',
      problem: `Omform disse rådene til "An deiner Stelle...":

a) Du solltest mehr Sport treiben.
b) Sie sollten einen Anwalt kontaktieren.`,
      solution: `**Løsning:**

a) *Du solltest mehr Sport treiben.*
   → *An deiner Stelle **würde ich mehr Sport treiben**.*
   (I ditt sted ville jeg trene mer.)

b) *Sie sollten einen Anwalt kontaktieren.*
   → *An Ihrer Stelle **würde ich einen Anwalt kontaktieren**.*
   (I Deres sted ville jeg kontakte en advokat.)`,
    },
    {
      id: 'tysk-2-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv råd med "An deiner Stelle würde ich...":',
        subTasks: [
          { label: 'a', task: 'Din venn vil slutte på jobben.', solution: 'An deiner Stelle würde ich erst eine neue Stelle finden.' },
          { label: 'b', task: 'Din venn vil kjøpe en dyr bil.', solution: 'An deiner Stelle würde ich das Geld lieber sparen.' },
          { label: 'c', task: 'Din venn krangler med partneren.', solution: 'An deiner Stelle würde ich mit ihm/ihr reden.' },
        ],
        solution: 'An deiner Stelle würde ich + infinitiv',
        hints: ['würde ich + infinitiv til slutt', 'Gi gjennomtenkte råd'],
      },
    },

    // ========== SEKSJON 3: Wie wäre es, wenn... ==========
    {
      id: 'tysk-2-2-3-text-3',
      type: 'text',
      content: `## Flere måter å foreslå på

**"Wie wäre es, wenn...?"** (Hva med om...?)
- *Wie wäre es, wenn du morgen kommst?*
- *Wie wäre es, wenn wir ins Kino gehen?*

**"Könntest du nicht...?"** (Kunne du ikke...?)
- *Könntest du nicht einfach mit ihm reden?*
- *Könnten Sie nicht einen Tag frei nehmen?*

**"Hast du schon mal daran gedacht,...?"** (Har du tenkt på å...?)
- *Hast du schon mal daran gedacht, einen Kurs zu machen?*`,
    },
    {
      id: 'tysk-2-2-3-tip-1',
      type: 'tip',
      content: `**Velg riktig form basert på situasjonen:**

- **Til venner:** "Du solltest..." eller "An deiner Stelle würde ich..."
- **Til fremmede/sjefer:** "Vielleicht könnten Sie..." eller "Wie wäre es, wenn..."
- **Forsiktig forslag:** "Hast du schon mal daran gedacht,...?"

Jo høfligere du vil være, desto mer indirekte blir formuleringen!`,
    },
    {
      id: 'tysk-2-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Ulike grader av høflighet',
      problem: `Gi samme råd (ta en ferie) på tre ulike måter:

a) Til en god venn
b) Til en kollega
c) Til sjefen din`,
      solution: `**Løsning:**

a) Til en venn (uformelt):
   *Du solltest mal Urlaub machen!*
   eller: *Mach doch mal Urlaub!*

b) Til en kollega (nøytralt):
   *An deiner Stelle würde ich mal Urlaub machen.*
   eller: *Wie wäre es mit einem kurzen Urlaub?*

c) Til sjefen (formelt):
   *Vielleicht sollten Sie mal ein paar Tage frei nehmen?*
   eller: *Haben Sie schon mal daran gedacht, ein paar Tage Urlaub zu machen?*`,
    },
    {
      id: 'tysk-2-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi råd på riktig høflighetsnivå:',
        subTasks: [
          { label: 'a', task: 'Til en venn: Han bør drikke mindre kaffe.', solution: 'Du solltest weniger Kaffee trinken.' },
          { label: 'b', task: 'Til en kollega: Hun bør snakke med sjefen.', solution: 'An deiner Stelle würde ich mit dem Chef sprechen.' },
          { label: 'c', task: 'Til en kunde: De bør bestille på forhånd.', solution: 'Ich würde Ihnen empfehlen, im Voraus zu bestellen.' },
        ],
        solution: 'Tilpass høflighetsgraden til situasjonen.',
        hints: ['Venn: solltest', 'Kollega: An deiner Stelle', 'Kunde: Ich würde empfehlen'],
      },
    },

    // ========== SEKSJON 4: Råd avvise høflig ==========
    {
      id: 'tysk-2-2-3-text-4',
      type: 'text',
      content: `## Reagere på råd

**Å akseptere råd:**
- *Das ist eine gute Idee!* (Det er en god idé!)
- *Du hast recht, das werde ich machen.* (Du har rett, det skal jeg gjøre.)
- *Danke für den Tipp!* (Takk for tipset!)

**Å avvise råd høflig:**
- *Das ist nett, aber...* (Det er snilt, men...)
- *Ich weiß nicht, ob das funktioniert.* (Jeg vet ikke om det fungerer.)
- *Ich werde darüber nachdenken.* (Jeg skal tenke på det.)
- *Vielleicht hast du recht, aber...* (Kanskje har du rett, men...)`,
    },
    {
      id: 'tysk-2-2-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Dialog',
      problem: `Les denne dialogen om å gi og motta råd.`,
      solution: `**Dialog:**

**A:** Ich bin so gestresst mit der Arbeit. Ich weiß nicht, was ich machen soll.

**B:** An deiner Stelle würde ich mal mit dem Chef reden. Vielleicht kannst du einige Aufgaben delegieren.

**A:** Das ist keine schlechte Idee. Aber ich habe Angst, dass er denkt, ich kann meinen Job nicht machen.

**B:** Das verstehe ich. Wie wäre es, wenn du erst mal eine Liste machst? Dann kannst du ihm zeigen, wie viel du zu tun hast.

**A:** Ja, du hast recht. Das werde ich machen. Danke für den Rat!`,
    },
    {
      id: 'tysk-2-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog (4-6 linjer) hvor A har et problem og B gir råd:',
        subTasks: [
          { label: 'a', task: 'Problem: A kan ikke sove om natten.', solution: 'A: Ich kann nachts nicht schlafen. B: Du solltest vor dem Schlafen kein Handy benutzen. A: Das ist eine gute Idee.' },
          { label: 'b', task: 'Problem: A har for lite penger.', solution: 'A: Ich habe zu wenig Geld. B: An deiner Stelle würde ich ein Budget machen. A: Vielleicht hast du recht.' },
        ],
        solution: 'Bruk sollte, würde, eller An deiner Stelle.',
        hints: ['Start med problemet', 'Gi konkrete råd', 'Avslutt med reaksjon'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-2-3-note-1',
      type: 'note',
      title: 'Oppsummering: Ratschläge geben',
      content: `**Måter å gi råd:**
1. *Du solltest...* (Du burde...)
2. *An deiner Stelle würde ich...* (I ditt sted ville jeg...)
3. *Wie wäre es, wenn...?* (Hva med om...?)
4. *Könntest du nicht...?* (Kunne du ikke...?)

**Akseptere råd:**
- Das ist eine gute Idee!
- Danke für den Tipp!

**Avvise høflig:**
- Ich werde darüber nachdenken.
- Das ist nett, aber...`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.4 Der Konjunktiv in der Praxis
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_2_4: TextbookChapter = {
  id: 'tysk-2-2-4',
  courseId: 'tysk-2',
  chapterNumber: '2.4',
  title: 'Der Konjunktiv in der Praxis',
  subtitle: 'Konjunktiv i praksis',
  description: 'Praktiske øvelser og anvendelser av Konjunktiv II i ulike situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'anvende Konjunktiv II i varierte kontekster',
    'kommunisere flytende om hypotetiske situasjoner',
  ],
  content: [
    // ========== SEKSJON 1: Oppsummering av former ==========
    {
      id: 'tysk-2-2-4-intro',
      type: 'text',
      content: `## Konjunktiv II - en oversikt

La oss repetere de viktigste formene og bruksområdene:

**Viktige former:**
| Verb | Konjunktiv II |
|------|---------------|
| sein | wäre |
| haben | hätte |
| werden | würde |
| können | könnte |
| müssen | müsste |
| dürfen | dürfte |
| sollen | sollte |
| wollen | wollte |

**Bruksområder:**
1. Høflighet (*Könnten Sie...?*)
2. Ønsker (*Ich hätte gern...*)
3. Irreale betingelser (*Wenn ich reich wäre...*)
4. Råd (*Du solltest...*)`,
    },
    {
      id: 'tysk-2-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere bruksområdet',
      problem: `Hvilken funksjon har Konjunktiv II i disse setningene?

a) Könnten Sie mir bitte helfen?
b) Wenn ich fliegen könnte, wäre ich glücklich.
c) Du solltest mehr schlafen.
d) Ich hätte gern eine Pizza.`,
      solution: `**Løsning:**

a) *Könnten Sie mir bitte helfen?*
   → **Høflighet** (høflig forespørsel)

b) *Wenn ich fliegen könnte, wäre ich glücklich.*
   → **Irreal betingelse** (hypotetisk situasjon)

c) *Du solltest mehr schlafen.*
   → **Råd** (anbefaling)

d) *Ich hätte gern eine Pizza.*
   → **Ønske** (bestilling/ønske)`,
    },
    {
      id: 'tysk-2-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser funksjonen (høflighet, ønske, betingelse, råd):',
        subTasks: [
          { label: 'a', task: 'Hätten Sie einen Moment Zeit?', solution: 'Høflighet' },
          { label: 'b', task: 'Wenn ich Zeit hätte, würde ich dich besuchen.', solution: 'Irreal betingelse' },
          { label: 'c', task: 'An deiner Stelle würde ich das nicht machen.', solution: 'Råd' },
          { label: 'd', task: 'Ich würde gern nach Japan reisen.', solution: 'Ønske' },
        ],
        solution: 'a) Høflighet, b) Betingelse, c) Råd, d) Ønske',
        hints: ['Spørsmål = ofte høflighet', 'Wenn... = betingelse', 'solltest/an deiner Stelle = råd'],
      },
    },

    // ========== SEKSJON 2: Dagligdagse situasjoner ==========
    {
      id: 'tysk-2-2-4-text-2',
      type: 'text',
      content: `## Konjunktiv II i hverdagen

**På restaurant:**
- *Ich hätte gern das Schnitzel und ein Bier, bitte.*
- *Könnten wir bitte die Rechnung haben?*

**I butikken:**
- *Könnten Sie mir das in einer anderen Größe zeigen?*
- *Hätten Sie das auch in Blau?*

**På jobben:**
- *Könnten Sie mir das Dokument schicken?*
- *Wäre es möglich, das Meeting zu verschieben?*

**Med venner:**
- *Was würdest du an meiner Stelle machen?*
- *Hättest du Lust, ins Kino zu gehen?*`,
    },
    {
      id: 'tysk-2-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Situasjoner',
      problem: `Hva ville du si i disse situasjonene?

a) Du vil prøve en jakke i en annen størrelse.
b) Du vil foreslå å gå på kino med en venn.
c) Du vil be sjefen om en fridag.`,
      solution: `**Løsning:**

a) I butikken:
   *Entschuldigung, hätten Sie diese Jacke auch in Größe M?*
   eller: *Könnte ich die in einer anderen Größe probieren?*

b) Med en venn:
   *Hättest du Lust, heute Abend ins Kino zu gehen?*
   eller: *Wie wäre es, wenn wir ins Kino gehen?*

c) Til sjefen:
   *Entschuldigen Sie, wäre es möglich, dass ich morgen frei bekomme?*
   eller: *Könnte ich morgen vielleicht einen Tag frei haben?*`,
    },
    {
      id: 'tysk-2-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv passende setninger med Konjunktiv II:',
        subTasks: [
          { label: 'a', task: 'Du vil bestille en kaffe med melk.', solution: 'Ich hätte gern einen Kaffee mit Milch, bitte.' },
          { label: 'b', task: 'Du vil spørre om du kan låne noens telefon.', solution: 'Entschuldigung, könnte ich kurz Ihr Telefon benutzen?' },
          { label: 'c', task: 'Du foreslår å møtes klokken 15.', solution: 'Wie wäre es, wenn wir uns um 15 Uhr treffen?' },
        ],
        solution: 'Bruk hätte gern, könnten, wie wäre es.',
        hints: ['Bestilling: hätte gern', 'Forespørsel: könnte ich', 'Forslag: wie wäre es'],
      },
    },

    // ========== SEKSJON 3: Tekst med Konjunktiv ==========
    {
      id: 'tysk-2-2-4-text-3',
      type: 'text',
      content: `## Konjunktiv II i lengre tekst

Les denne teksten og legg merke til bruken av Konjunktiv II:

---

*Wenn ich viel Geld **hätte**, **würde** ich anders leben. Zuerst **würde** ich meine Arbeit kündigen - ich **müsste** nie wieder früh aufstehen!*

*Dann **würde** ich ein großes Haus am Meer kaufen. Es **wäre** weiß mit einem schönen Garten. Ich **hätte** einen Hund und zwei Katzen.*

*Jeden Morgen **würde** ich am Strand spazieren gehen. Ich **könnte** endlich alle Bücher lesen, die ich immer lesen wollte. Das **wäre** ein Traum!*

*Aber das ist nur ein Traum. In der Realität muss ich morgen wieder zur Arbeit...*

---

**Analyse:** Hele drømmescenarioet er i Konjunktiv II fordi det ikke er virkelig.`,
    },
    {
      id: 'tysk-2-2-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Skriv din egen drøm',
      problem: `Fullfør denne teksten med Konjunktiv II:

"Wenn ich eine Superkraft _____ (haben), ..."`,
      solution: `**Eksempel på fullført tekst:**

*Wenn ich eine Superkraft **hätte**, **würde** ich unsichtbar werden können. Das **wäre** fantastisch! Ich **könnte** überall hingehen, ohne dass jemand mich sieht.*

*Ich **würde** in Konzerte gehen, ohne zu bezahlen. Ich **könnte** in die erste Klasse im Flugzeug sitzen. Und wenn ich müde **wäre**, **würde** ich einfach verschwinden!*

*Aber natürlich **würde** ich meine Superkraft auch für gute Dinge benutzen. Ich **würde** Diebe fangen und Menschen in Gefahr helfen.*`,
    },
    {
      id: 'tysk-2-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fyll inn riktig Konjunktiv II-form:',
        subTasks: [
          { label: 'a', task: 'Wenn ich Präsident _____ (sein), _____ (machen) ich alles anders.', solution: 'wäre, würde' },
          { label: 'b', task: 'Ich _____ (haben) gern mehr Zeit für meine Hobbys.', solution: 'hätte' },
          { label: 'c', task: 'Das _____ (sein) toll, wenn du mitkommen _____ (können).', solution: 'wäre, könntest' },
          { label: 'd', task: 'An deiner Stelle _____ (gehen) ich zum Arzt.', solution: 'würde ich' },
        ],
        solution: 'a) wäre, würde; b) hätte; c) wäre, könntest; d) würde ich',
        hints: ['sein → wäre', 'haben → hätte', 'können → könntest'],
      },
    },

    // ========== SEKSJON 4: Feilanalyse ==========
    {
      id: 'tysk-2-2-4-text-4',
      type: 'text',
      content: `## Vanlige feil med Konjunktiv II

**Feil 1: Würde med sein/haben**
❌ *Wenn ich reich würde sein...*
✅ *Wenn ich reich **wäre**...*

**Feil 2: Blanding av reell og irreal**
❌ *Wenn ich Zeit habe, würde ich kommen.*
✅ *Wenn ich Zeit **hätte**, würde ich kommen.* (irreal)
✅ *Wenn ich Zeit **habe**, **komme** ich.* (reell)

**Feil 3: Feil ordstilling**
❌ *Wenn ich würde haben Zeit...*
✅ *Wenn ich Zeit **hätte**...*

**Feil 4: Manglende würde**
❌ *Wenn ich reich wäre, ich kaufe ein Haus.*
✅ *Wenn ich reich wäre, **würde** ich ein Haus **kaufen**.*`,
    },
    {
      id: 'tysk-2-2-4-warning-1',
      type: 'warning',
      content: `**Husk:**
- Sein, haben og modalverb: Bruk alltid direkte Konjunktiv II-former (wäre, hätte, könnte, osv.)
- Andre verb: Bruk würde + infinitiv
- Begge deler av setningen må være i Konjunktiv II i irreale betingelser!`,
    },
    {
      id: 'tysk-2-2-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Feilretting',
      problem: `Rett feilene i disse setningene:

a) Wenn ich Zeit würde haben, würde ich dich besuchen.
b) Wenn er reich ist, würde er nicht mehr arbeiten.
c) Ich würde gern ein Auto würde kaufen.`,
      solution: `**Løsning:**

a) ❌ *Wenn ich Zeit würde haben...*
   ✅ *Wenn ich Zeit **hätte**, würde ich dich besuchen.*
   (haben → hätte, ikke würde haben)

b) ❌ *Wenn er reich ist, würde er nicht mehr arbeiten.*
   ✅ *Wenn er reich **wäre**, würde er nicht mehr arbeiten.*
   (Begge deler må være Konjunktiv II)

c) ❌ *Ich würde gern ein Auto würde kaufen.*
   ✅ *Ich **würde** gern ein Auto **kaufen**.*
   (Bare ett würde, infinitiv til slutt)`,
    },
    {
      id: 'tysk-2-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rett feilene:',
        subTasks: [
          { label: 'a', task: 'Wenn ich Geld würde haben, würde ich reisen.', solution: 'Wenn ich Geld hätte, würde ich reisen.' },
          { label: 'b', task: 'Er sollte würde mehr lernen.', solution: 'Er sollte mehr lernen.' },
          { label: 'c', task: 'Wenn sie kommt, würde ich mich freuen.', solution: 'Wenn sie käme/kommen würde, würde ich mich freuen.' },
        ],
        solution: 'a) hätte, b) sollte (uten würde), c) käme/kommen würde',
        hints: ['haben → hätte', 'sollte er selv Konjunktiv', 'Begge deler Konjunktiv'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-2-4-note-1',
      type: 'note',
      title: 'Oppsummering: Konjunktiv II in der Praxis',
      content: `**Bruksområder:**
1. Høflighet: Könnten Sie...?
2. Ønsker: Ich hätte gern...
3. Betingelser: Wenn ich... wäre
4. Råd: Du solltest... / An deiner Stelle...

**Viktige former:** wäre, hätte, könnte, müsste, dürfte, sollte, wollte

**Huskeregel:**
- sein/haben/modalverb → direkte former
- andre verb → würde + infinitiv

**Unngå:**
- würde med sein/haben
- Blanding av reell og irreal`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: PASSIV UND RELATIVSÄTZE
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 Das Passiv - dannelse
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_3_1: TextbookChapter = {
  id: 'tysk-2-3-1',
  courseId: 'tysk-2',
  chapterNumber: '3.1',
  title: 'Das Passiv',
  subtitle: 'Dannelse',
  description: 'Lær å danne og bruke passiv (lidende form) på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke varierte setningsstrukturer',
    'forstå og produsere komplekse setninger',
  ],
  content: [
    // ========== SEKSJON 1: Hva er passiv? ==========
    {
      id: 'tysk-2-3-1-intro',
      type: 'text',
      content: `## Passiv - lidende form

Passiv brukes når **handlingen** er viktigere enn den som utfører den, eller når vi ikke vet/vil si hvem som utfører handlingen.

**Aktiv vs. Passiv:**
| Aktiv | Passiv |
|-------|--------|
| *Der Koch **kocht** das Essen.* | *Das Essen **wird gekocht**.* |
| (Kokken lager maten.) | (Maten blir laget.) |
| *Jemand **repariert** das Auto.* | *Das Auto **wird repariert**.* |
| (Noen reparerer bilen.) | (Bilen blir reparert.) |

I passiv er fokuset på **hva som skjer**, ikke **hvem som gjør det**.`,
    },
    {
      id: 'tysk-2-3-1-def-1',
      type: 'definition',
      title: 'Das Passiv',
      content: `**Passiv** (lidende form) dannes med hjelpeverbet **werden** + **partisipp perfektum**.

**Formel:** werden (bøyes) + partisipp perfektum (til slutt)

**Eksempel:**
*Das Buch **wird gelesen**.* (Boken blir lest.)
*Die Tür **wird geöffnet**.* (Døren blir åpnet.)`,
    },
    {
      id: 'tysk-2-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Aktiv til passiv',
      problem: `Gjør om disse setningene fra aktiv til passiv:

a) Der Lehrer erklärt die Grammatik.
b) Die Mutter backt einen Kuchen.`,
      solution: `**Løsning:**

a) *Der Lehrer erklärt die Grammatik.*
   → *Die Grammatik **wird erklärt**.*
   (Grammatikken blir forklart.)

   Akkusativobjektet (die Grammatik) blir subjekt i passiv.

b) *Die Mutter backt einen Kuchen.*
   → *Ein Kuchen **wird gebacken**.*
   (En kake blir bakt.)

   Merk: akkusativ (einen Kuchen) → nominativ (ein Kuchen)`,
    },
    {
      id: 'tysk-2-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om til passiv:',
        subTasks: [
          { label: 'a', task: 'Man öffnet die Tür.', solution: 'Die Tür wird geöffnet.' },
          { label: 'b', task: 'Die Firma baut ein Haus.', solution: 'Ein Haus wird gebaut.' },
          { label: 'c', task: 'Der Arzt untersucht den Patienten.', solution: 'Der Patient wird untersucht.' },
        ],
        solution: 'a) Die Tür wird geöffnet. b) Ein Haus wird gebaut. c) Der Patient wird untersucht.',
        hints: ['werden + partisipp perfektum', 'Akkusativobjekt → subjekt'],
      },
    },

    // ========== SEKSJON 2: Werden bøyes ==========
    {
      id: 'tysk-2-3-1-text-2',
      type: 'text',
      content: `## Werden i presens passiv

**Werden bøyes etter subjektet:**

| Person | werden | Eksempel |
|--------|--------|----------|
| ich | werde | Ich werde gefragt. |
| du | wirst | Du wirst eingeladen. |
| er/sie/es | wird | Er wird informiert. |
| wir | werden | Wir werden bezahlt. |
| ihr | werdet | Ihr werdet gerufen. |
| sie/Sie | werden | Sie werden geschickt. |

**Ordstilling:** werden på posisjon 2, partisipp til slutt.`,
    },
    {
      id: 'tysk-2-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Passiv med ulike subjekter',
      problem: `Lag passivsetninger med "einladen" (invitere):

a) ich
b) wir
c) die Gäste`,
      solution: `**Løsning:**

a) *Ich **werde eingeladen**.*
   (Jeg blir invitert.)

b) *Wir **werden eingeladen**.*
   (Vi blir invitert.)

c) *Die Gäste **werden eingeladen**.*
   (Gjestene blir invitert.)`,
    },
    {
      id: 'tysk-2-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av werden:',
        subTasks: [
          { label: 'a', task: 'Das Buch _____ gelesen.', solution: 'wird', answer: 'wird' },
          { label: 'b', task: 'Die Kinder _____ abgeholt.', solution: 'werden', answer: 'werden' },
          { label: 'c', task: 'Ich _____ nicht informiert.', solution: 'werde', answer: 'werde' },
          { label: 'd', task: 'Du _____ zur Party eingeladen.', solution: 'wirst', answer: 'wirst' },
        ],
        solution: 'a) wird, b) werden, c) werde, d) wirst',
        hints: ['werden bøyes etter subjektet', 'ich → werde, du → wirst, er/es/sie → wird'],
      },
    },

    // ========== SEKSJON 3: Passiv i ulike tider ==========
    {
      id: 'tysk-2-3-1-text-3',
      type: 'text',
      content: `## Passiv i ulike tider

**Presens passiv:** wird + partisipp
- *Das Auto **wird repariert**.* (Bilen blir reparert.)

**Preteritum passiv:** wurde + partisipp
- *Das Auto **wurde repariert**.* (Bilen ble reparert.)

**Perfektum passiv:** ist + partisipp + worden
- *Das Auto **ist repariert worden**.* (Bilen er blitt reparert.)

**Futurum passiv:** wird + partisipp + werden
- *Das Auto **wird repariert werden**.* (Bilen vil bli reparert.)`,
    },
    {
      id: 'tysk-2-3-1-tip-1',
      type: 'tip',
      content: `**Perfektum passiv:**
Merk at partisippet av werden i passiv er **worden** (ikke geworden):

✅ *Das Haus **ist** gebaut **worden**.*
❌ *Das Haus ist gebaut geworden.*

"Worden" brukes kun i passiv!`,
    },
    {
      id: 'tysk-2-3-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Passiv i ulike tider',
      problem: `Sett denne setningen i ulike tider:
"Das Buch - schreiben" (Boken - skrive)`,
      solution: `**Løsning:**

**Presens:** *Das Buch **wird geschrieben**.*
(Boken blir skrevet.)

**Preteritum:** *Das Buch **wurde geschrieben**.*
(Boken ble skrevet.)

**Perfektum:** *Das Buch **ist geschrieben worden**.*
(Boken er blitt skrevet.)

**Futurum:** *Das Buch **wird geschrieben werden**.*
(Boken vil bli skrevet.)`,
    },
    {
      id: 'tysk-2-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett passivsetningene i angitt tid:',
        subTasks: [
          { label: 'a', task: 'Die E-Mail wird geschickt. (preteritum)', solution: 'Die E-Mail wurde geschickt.' },
          { label: 'b', task: 'Das Haus wird gebaut. (perfektum)', solution: 'Das Haus ist gebaut worden.' },
          { label: 'c', task: 'Der Brief wurde geöffnet. (presens)', solution: 'Der Brief wird geöffnet.' },
        ],
        solution: 'a) wurde geschickt, b) ist gebaut worden, c) wird geöffnet',
        hints: ['Preteritum: wurde', 'Perfektum: ist...worden', 'Presens: wird'],
      },
    },

    // ========== SEKSJON 4: Med agens (von + dativ) ==========
    {
      id: 'tysk-2-3-1-text-4',
      type: 'text',
      content: `## Hvem utfører handlingen?

Ofte utelates den som utfører handlingen i passiv. Men hvis vi vil nevne den, bruker vi **von + dativ**:

**Uten agens:**
*Das Buch wird gelesen.* (Boken blir lest.)

**Med agens:**
*Das Buch wird **von dem Schüler** gelesen.*
(Boken blir lest av eleven.)

**Eksempler:**
- *Die Oper wurde **von Mozart** komponiert.*
- *Das Essen wird **von meiner Mutter** gekocht.*
- *Der Roman wurde **von Goethe** geschrieben.*`,
    },
    {
      id: 'tysk-2-3-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Aktiv til passiv med agens',
      problem: `Gjør om til passiv og behold agensen (den som handler):

a) Der Mechaniker repariert das Auto.
b) Viele Leute sprechen Deutsch.`,
      solution: `**Løsning:**

a) *Der Mechaniker repariert das Auto.*
   → *Das Auto wird **vom Mechaniker** repariert.*
   (Bilen blir reparert av mekanikeren.)

   Merk: von + dem → vom

b) *Viele Leute sprechen Deutsch.*
   → *Deutsch wird **von vielen Leuten** gesprochen.*
   (Tysk blir snakket av mange mennesker.)`,
    },
    {
      id: 'tysk-2-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om til passiv med agens:',
        subTasks: [
          { label: 'a', task: 'Der Arzt untersucht den Patienten.', solution: 'Der Patient wird vom Arzt untersucht.' },
          { label: 'b', task: 'Die Polizei fand den Dieb.', solution: 'Der Dieb wurde von der Polizei gefunden.' },
          { label: 'c', task: 'Alle lieben diesen Film.', solution: 'Dieser Film wird von allen geliebt.' },
        ],
        solution: 'a) vom Arzt, b) von der Polizei, c) von allen',
        hints: ['von + dativ', 'von dem → vom', 'Subjekt i aktiv → von... i passiv'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-3-1-note-1',
      type: 'note',
      title: 'Oppsummering: Das Passiv',
      content: `**Dannelse:** werden + partisipp perfektum

**Tider:**
- Presens: wird + PP
- Preteritum: wurde + PP
- Perfektum: ist + PP + worden
- Futurum: wird + PP + werden

**Med agens:** von + dativ
*Das Buch wird von mir gelesen.*

**Bruk:** Når handlingen er viktigere enn den som utfører den.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 Passiv im Alltag
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_3_2: TextbookChapter = {
  id: 'tysk-2-3-2',
  courseId: 'tysk-2',
  chapterNumber: '3.2',
  title: 'Passiv im Alltag',
  subtitle: 'Passiv i hverdagen',
  description: 'Lær når og hvordan passiv brukes i dagligdagse situasjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke passiv i relevante kontekster',
    'forstå passiv i autentiske tekster',
  ],
  content: [
    // ========== SEKSJON 1: Når brukes passiv? ==========
    {
      id: 'tysk-2-3-2-intro',
      type: 'text',
      content: `## Når brukes passiv?

Passiv er svært vanlig på tysk i mange sammenhenger:

**1. Skilt og instruksjoner:**
- *Hier wird nicht geraucht.* (Her røykes det ikke.)
- *Hunde werden nicht erlaubt.* (Hunder tillates ikke.)

**2. Nyheter og rapporter:**
- *Der Dieb wurde verhaftet.* (Tyven ble arrestert.)
- *Ein neues Gesetz wurde verabschiedet.* (En ny lov ble vedtatt.)

**3. Oppskrifter og bruksanvisninger:**
- *Das Gemüse wird gewaschen und geschnitten.*
- *Die Tabletten werden mit Wasser eingenommen.*

**4. Vitenskapelige tekster:**
- *Die Studie wurde 2023 durchgeführt.*`,
    },
    {
      id: 'tysk-2-3-2-def-1',
      type: 'definition',
      title: 'Upersonlig passiv',
      content: `**Upersonlig passiv** brukes når det ikke er noe tydelig subjekt. Man bruker "es" som plassholder:

*Es wird getanzt.* (Det danses.)
*Es wird viel gearbeitet.* (Det arbeides mye.)

Merk: "es" forsvinner hvis noe annet står først:
*Hier wird getanzt.* (Her danses det.)`,
    },
    {
      id: 'tysk-2-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skilt og regler',
      problem: `Hva betyr disse skiltene?

a) Hier wird Deutsch gesprochen.
b) Rauchen wird nicht gestattet.
c) Kinder werden beaufsichtigt.`,
      solution: `**Løsning:**

a) *Hier wird Deutsch gesprochen.*
   → Her snakkes det tysk. / Vi snakker tysk her.

b) *Rauchen wird nicht gestattet.*
   → Røyking er ikke tillatt.

c) *Kinder werden beaufsichtigt.*
   → Barna blir passet på. / Vi passer på barna.`,
    },
    {
      id: 'tysk-2-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse skiltene til norsk:',
        subTasks: [
          { label: 'a', task: 'Hier wird nicht geparkt.', solution: 'Her parkeres det ikke. / Parkering forbudt.' },
          { label: 'b', task: 'Hunde werden an der Leine geführt.', solution: 'Hunder føres i bånd.' },
          { label: 'c', task: 'Kreditkarten werden akzeptiert.', solution: 'Kredittkort aksepteres.' },
        ],
        solution: 'a) Parkering forbudt, b) Hunder i bånd, c) Vi tar kredittkort',
        hints: ['Passiv på skilt = regel/instruks'],
      },
    },

    // ========== SEKSJON 2: Passiv i oppskrifter ==========
    {
      id: 'tysk-2-3-2-text-2',
      type: 'text',
      content: `## Passiv i oppskrifter

Oppskrifter bruker ofte passiv fordi fokuset er på hva som gjøres, ikke hvem som gjør det:

**Eksempel: Pfannkuchen (pannekaker)**

*Zuerst werden 250g Mehl, 3 Eier und 500ml Milch gemischt. Dann wird eine Prise Salz hinzugefügt. Der Teig wird 30 Minuten stehen gelassen.*

*Die Pfanne wird erhitzt und etwas Butter wird hinzugefügt. Der Teig wird in die Pfanne gegeben und von beiden Seiten gebraten.*

**Vanlige verb i oppskrifter:**
- schneiden → wird geschnitten (skjæres)
- kochen → wird gekocht (kokes)
- braten → wird gebraten (stekes)
- backen → wird gebacken (bakes)
- mischen → wird gemischt (blandes)`,
    },
    {
      id: 'tysk-2-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Oppskrift',
      problem: `Gjør om denne oppskriften til passiv:

"Man wäscht das Gemüse. Man schneidet es in kleine Stücke. Man kocht es 10 Minuten."`,
      solution: `**Løsning:**

*Das Gemüse **wird gewaschen**. Es **wird** in kleine Stücke **geschnitten**. Es **wird** 10 Minuten **gekocht**.*

Eller mer flytende:
*Das Gemüse wird gewaschen, in kleine Stücke geschnitten und 10 Minuten gekocht.*`,
    },
    {
      id: 'tysk-2-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv oppskriftstrinnene i passiv:',
        subTasks: [
          { label: 'a', task: 'Man schneidet die Zwiebeln.', solution: 'Die Zwiebeln werden geschnitten.' },
          { label: 'b', task: 'Man brät das Fleisch.', solution: 'Das Fleisch wird gebraten.' },
          { label: 'c', task: 'Man serviert das Essen heiß.', solution: 'Das Essen wird heiß serviert.' },
        ],
        solution: 'a) werden geschnitten, b) wird gebraten, c) wird serviert',
        hints: ['schneiden → geschnitten', 'braten → gebraten', 'servieren → serviert'],
      },
    },

    // ========== SEKSJON 3: Passiv i nyheter ==========
    {
      id: 'tysk-2-3-2-text-3',
      type: 'text',
      content: `## Passiv i nyheter

Nyheter bruker ofte passiv, spesielt i preteritum:

**Eksempelnyheter:**

*Gestern wurde ein Mann in der Stadtmitte verhaftet. Er wird verdächtigt, drei Autos gestohlen zu haben.*

*Ein neues Museum wurde am Wochenende eröffnet. Es wird erwartet, dass über 10.000 Besucher kommen.*

*Die Straße wurde wegen Bauarbeiten gesperrt. Die Umleitung wird ausgeschildert.*

**Vanlige passivverb i nyheter:**
- verhaften → wurde verhaftet (arrestert)
- verletzen → wurde verletzt (skadet)
- töten → wurde getötet (drept)
- eröffnen → wurde eröffnet (åpnet)
- schließen → wurde geschlossen (stengt)`,
    },
    {
      id: 'tysk-2-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Nyhetstekst',
      problem: `Les denne nyheten og identifiser alle passivkonstruksjoner:

"Bei dem Unfall wurden drei Menschen verletzt. Sie wurden ins Krankenhaus gebracht. Die Straße wurde für zwei Stunden gesperrt."`,
      solution: `**Passivkonstruksjoner:**

1. *wurden drei Menschen **verletzt***
   (tre mennesker ble skadet)

2. *Sie **wurden** ins Krankenhaus **gebracht***
   (De ble brakt til sykehuset)

3. *Die Straße **wurde** für zwei Stunden **gesperrt***
   (Veien ble stengt i to timer)

Alle tre er preteritum passiv (wurde/wurden + partisipp).`,
    },
    {
      id: 'tysk-2-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om disse aktive nyhetssetningene til passiv:',
        subTasks: [
          { label: 'a', task: 'Die Polizei verhaftete den Dieb.', solution: 'Der Dieb wurde (von der Polizei) verhaftet.' },
          { label: 'b', task: 'Man eröffnete das neue Stadion.', solution: 'Das neue Stadion wurde eröffnet.' },
          { label: 'c', task: 'Der Sturm zerstörte viele Häuser.', solution: 'Viele Häuser wurden (vom Sturm) zerstört.' },
        ],
        solution: 'a) wurde verhaftet, b) wurde eröffnet, c) wurden zerstört',
        hints: ['Preteritum: wurde/wurden', 'Agens er valgfri'],
      },
    },

    // ========== SEKSJON 4: Alternativer til passiv ==========
    {
      id: 'tysk-2-3-2-text-4',
      type: 'text',
      content: `## Alternativer til passiv

Noen ganger kan man unngå passiv:

**1. Man + aktiv:**
- Passiv: *Hier wird nicht geraucht.*
- Alternativ: *Hier **raucht man** nicht.*

**2. Sein + zu + infinitiv:**
- Passiv: *Das muss gemacht werden.*
- Alternativ: *Das **ist zu machen**.*

**3. Sich lassen + infinitiv:**
- Passiv: *Das kann repariert werden.*
- Alternativ: *Das **lässt sich** reparieren.*

**4. -bar adjektiv:**
- Passiv: *Das kann gegessen werden.*
- Alternativ: *Das ist **essbar**.*`,
    },
    {
      id: 'tysk-2-3-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Alternative formuleringer',
      problem: `Finn alternative formuleringer til disse passivsetningene:

a) Dieses Problem kann gelöst werden.
b) Hier wird Englisch gesprochen.`,
      solution: `**Løsning:**

a) *Dieses Problem kann gelöst werden.*
   → *Dieses Problem **lässt sich lösen**.*
   → *Dieses Problem ist **lösbar**.*

b) *Hier wird Englisch gesprochen.*
   → *Hier **spricht man** Englisch.*`,
    },
    {
      id: 'tysk-2-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om med "man" eller "sich lassen":',
        subTasks: [
          { label: 'a', task: 'Hier wird nicht fotografiert.', solution: 'Hier fotografiert man nicht.' },
          { label: 'b', task: 'Das kann nicht erklärt werden.', solution: 'Das lässt sich nicht erklären.' },
          { label: 'c', task: 'Die Aufgabe kann leicht gemacht werden.', solution: 'Die Aufgabe lässt sich leicht machen.' },
        ],
        solution: 'a) man fotografiert, b) lässt sich erklären, c) lässt sich machen',
        hints: ['wird + PP → man + aktiv', 'kann + PP + werden → lässt sich + infinitiv'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-3-2-note-1',
      type: 'note',
      title: 'Oppsummering: Passiv im Alltag',
      content: `**Bruksområder:**
- Skilt og regler: *Hier wird nicht geraucht.*
- Oppskrifter: *Das Gemüse wird geschnitten.*
- Nyheter: *Der Mann wurde verhaftet.*
- Vitenskapelige tekster

**Alternativer til passiv:**
- man + aktiv: *Man spricht Deutsch.*
- sich lassen: *Das lässt sich machen.*
- -bar: *Das ist machbar.*`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Relativsätze - alle kasus
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_3_3: TextbookChapter = {
  id: 'tysk-2-3-3',
  courseId: 'tysk-2',
  chapterNumber: '3.3',
  title: 'Relativsätze',
  subtitle: 'Alle kasus',
  description: 'Lær å lage relativsetninger med relativpronomen i alle kasus.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke komplekse setningsstrukturer',
    'forstå og produsere lengre tekster',
  ],
  content: [
    // ========== SEKSJON 1: Hva er relativsetninger? ==========
    {
      id: 'tysk-2-3-3-intro',
      type: 'text',
      content: `## Relativsetninger

Relativsetninger gir mer informasjon om et substantiv. De innledes med et **relativpronomen** (der, die, das, osv.).

**Eksempel:**
*Der Mann, **der dort steht**, ist mein Lehrer.*
(Mannen **som står der**, er læreren min.)

**Viktige regler:**
1. Relativpronomenet står rett etter substantivet
2. Verbet står **til slutt** i relativsetningen
3. Relativsetningen skilles fra hovedsetningen med komma`,
    },
    {
      id: 'tysk-2-3-3-def-1',
      type: 'definition',
      title: 'Relativpronomen',
      content: `**Relativpronomen** bøyes i kjønn, tall og kasus:

| Kasus | Maskulin | Feminin | Nøytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nominativ | der | die | das | die |
| Akkusativ | den | die | das | die |
| Dativ | dem | der | dem | denen |
| Genitiv | dessen | deren | dessen | deren |

**Kjønn og tall:** Bestemmes av substantivet det refererer til.
**Kasus:** Bestemmes av funksjonen i relativsetningen.`,
    },
    {
      id: 'tysk-2-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Nominativ',
      problem: `Kombiner setningene med relativpronomen i nominativ:

a) Der Mann ist nett. Der Mann wohnt nebenan.
b) Die Frau ist Ärztin. Die Frau hilft mir.`,
      solution: `**Løsning:**

a) *Der Mann ist nett. Der Mann wohnt nebenan.*
   → *Der Mann, **der** nebenan wohnt, ist nett.*

   Analyse: "Der Mann" er maskulin. Relativpronomenet er subjekt i relativsetningen → nominativ → **der**

b) *Die Frau ist Ärztin. Die Frau hilft mir.*
   → *Die Frau, **die** mir hilft, ist Ärztin.*

   Analyse: "Die Frau" er feminin. Relativpronomenet er subjekt → nominativ → **die**`,
    },
    {
      id: 'tysk-2-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig relativpronomen (nominativ):',
        subTasks: [
          { label: 'a', task: 'Das Kind, _____ dort spielt, ist mein Sohn.', solution: 'das', answer: 'das' },
          { label: 'b', task: 'Die Bücher, _____ auf dem Tisch liegen, sind neu.', solution: 'die', answer: 'die' },
          { label: 'c', task: 'Der Hund, _____ bellt, gehört meinem Nachbarn.', solution: 'der', answer: 'der' },
        ],
        solution: 'a) das, b) die, c) der',
        hints: ['Nominativ: subjekt i relativsetningen', 'Kjønn fra substantivet: Kind=nøytrum, Bücher=flertall, Hund=maskulin'],
      },
    },

    // ========== SEKSJON 2: Akkusativ ==========
    {
      id: 'tysk-2-3-3-text-2',
      type: 'text',
      content: `## Relativpronomen i akkusativ

Akkusativ brukes når relativpronomenet er **direkte objekt** i relativsetningen.

**Eksempler:**
- *Das Buch, **das** ich lese, ist interessant.*
  (Boken **som** jeg leser, er interessant.)

- *Der Film, **den** wir gesehen haben, war gut.*
  (Filmen **som** vi så, var bra.)

**Merk:** I akkusativ er det bare maskulin som endres (der → den).

| Kasus | Maskulin | Feminin | Nøytrum | Flertall |
|-------|----------|---------|---------|----------|
| Akkusativ | **den** | die | das | die |`,
    },
    {
      id: 'tysk-2-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Akkusativ',
      problem: `Kombiner setningene (relativpronomenet er objekt):

a) Ich habe einen Freund. Ich besuche den Freund oft.
b) Das ist die Pizza. Ich habe die Pizza bestellt.`,
      solution: `**Løsning:**

a) *Ich habe einen Freund, **den** ich oft besuche.*

   Analyse: "Freund" er maskulin. "Den Freund" er objekt i andre setning → akkusativ → **den**

b) *Das ist die Pizza, **die** ich bestellt habe.*

   Analyse: "Pizza" er feminin. "Die Pizza" er objekt → akkusativ → **die** (samme som nominativ)`,
    },
    {
      id: 'tysk-2-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig relativpronomen (akkusativ):',
        subTasks: [
          { label: 'a', task: 'Der Mann, _____ ich gestern traf, ist Lehrer.', solution: 'den', answer: 'den' },
          { label: 'b', task: 'Die Musik, _____ du hörst, gefällt mir.', solution: 'die', answer: 'die' },
          { label: 'c', task: 'Das Auto, _____ er kaufen will, ist teuer.', solution: 'das', answer: 'das' },
        ],
        solution: 'a) den, b) die, c) das',
        hints: ['Akkusativ: objekt i relativsetningen', 'Bare maskulin endres: der → den'],
      },
    },

    // ========== SEKSJON 3: Dativ ==========
    {
      id: 'tysk-2-3-3-text-3',
      type: 'text',
      content: `## Relativpronomen i dativ

Dativ brukes når relativpronomenet er **indirekte objekt** eller etter **preposisjoner som krever dativ**.

**Former:**
| Maskulin | Feminin | Nøytrum | Flertall |
|----------|---------|---------|----------|
| dem | der | dem | denen |

**Eksempler:**
- *Der Mann, **dem** ich geholfen habe, war dankbar.*
  (Mannen **som** jeg hjalp, var takknemlig.)

- *Die Frau, **der** ich das Buch gab, ist meine Tante.*
  (Kvinnen **som** jeg ga boken til, er tanten min.)`,
    },
    {
      id: 'tysk-2-3-3-tip-1',
      type: 'tip',
      content: `**Verb som krever dativ:**
Husk at noen verb alltid har dativobjekt:
- helfen (hjelpe): Ich helfe **dem Mann**.
- danken (takke): Ich danke **der Frau**.
- gehören (tilhøre): Das Buch gehört **dem Kind**.
- gefallen (like): Das gefällt **mir**.

I relativsetninger: *Der Mann, **dem** ich helfe...*`,
    },
    {
      id: 'tysk-2-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Dativ',
      problem: `Kombiner setningene med relativpronomen i dativ:

a) Das ist der Student. Ich habe dem Studenten geholfen.
b) Die Kinder spielen. Ich habe den Kindern Schokolade gegeben.`,
      solution: `**Løsning:**

a) *Das ist der Student, **dem** ich geholfen habe.*

   "helfen" krever dativ. "Student" er maskulin → **dem**

b) *Die Kinder, **denen** ich Schokolade gegeben habe, spielen.*

   "geben" tar dativobjekt. "Kinder" er flertall → **denen**`,
    },
    {
      id: 'tysk-2-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig relativpronomen (dativ):',
        subTasks: [
          { label: 'a', task: 'Die Frau, _____ ich gedankt habe, lächelte.', solution: 'der', answer: 'der' },
          { label: 'b', task: 'Das Kind, _____ ich das Spielzeug gab, war glücklich.', solution: 'dem', answer: 'dem' },
          { label: 'c', task: 'Die Leute, _____ er geholfen hat, waren dankbar.', solution: 'denen', answer: 'denen' },
        ],
        solution: 'a) der, b) dem, c) denen',
        hints: ['Feminin dativ: der', 'Nøytrum dativ: dem', 'Flertall dativ: denen'],
      },
    },

    // ========== SEKSJON 4: Med preposisjoner ==========
    {
      id: 'tysk-2-3-3-text-4',
      type: 'text',
      content: `## Relativsetninger med preposisjoner

Når relativsetningen inneholder en preposisjon, står preposisjonen **foran** relativpronomenet:

**Eksempler:**
- *Der Stuhl, **auf dem** ich sitze, ist unbequem.*
  (Stolen **som** jeg sitter **på**, er ukomfortabel.)

- *Die Stadt, **in der** ich wohne, ist schön.*
  (Byen **som** jeg bor **i**, er vakker.)

- *Das Buch, **über das** wir gesprochen haben, ist hier.*
  (Boken **som** vi snakket **om**, er her.)

**Merk:** Preposisjonen bestemmer kasus!
- auf + dativ (hvor) → auf dem/der/dem
- mit + dativ → mit dem/der/dem
- für + akkusativ → für den/die/das`,
    },
    {
      id: 'tysk-2-3-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Med preposisjoner',
      problem: `Kombiner setningene:

a) Das ist das Hotel. Wir haben in dem Hotel übernachtet.
b) Ich kenne die Frau. Er arbeitet mit der Frau.`,
      solution: `**Løsning:**

a) *Das ist das Hotel, **in dem** wir übernachtet haben.*

   Preposisjon "in" + dativ (sted). "Hotel" er nøytrum → **in dem**

b) *Ich kenne die Frau, **mit der** er arbeitet.*

   Preposisjon "mit" + dativ. "Frau" er feminin → **mit der**`,
    },
    {
      id: 'tysk-2-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fyll inn preposisjon + relativpronomen:',
        subTasks: [
          { label: 'a', task: 'Der Tisch, _____ ich meine Bücher gelegt habe, ist groß. (auf)', solution: 'auf den', answer: 'auf den' },
          { label: 'b', task: 'Die Stadt, _____ wir gefahren sind, war wunderschön. (in)', solution: 'in die', answer: 'in die' },
          { label: 'c', task: 'Das Problem, _____ wir gesprochen haben, ist gelöst. (über)', solution: 'über das', answer: 'über das' },
        ],
        solution: 'a) auf den, b) in die, c) über das',
        hints: ['auf + akk (bevegelse): auf den Tisch', 'in + akk (bevegelse): in die Stadt', 'über + akk: über das Problem'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-3-3-note-1',
      type: 'note',
      title: 'Oppsummering: Relativsätze',
      content: `**Relativpronomen:**
| Kasus | M | F | N | Fl |
|-------|---|---|---|-----|
| Nom. | der | die | das | die |
| Akk. | den | die | das | die |
| Dat. | dem | der | dem | denen |
| Gen. | dessen | deren | dessen | deren |

**Regler:**
1. Verbet til slutt i relativsetningen
2. Komma før og etter
3. Kjønn/tall fra substantivet
4. Kasus fra funksjonen i relativsetningen
5. Preposisjon + relativpronomen sammen`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 Komplexe Satzstrukturen
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_2_3_4: TextbookChapter = {
  id: 'tysk-2-3-4',
  courseId: 'tysk-2',
  chapterNumber: '3.4',
  title: 'Komplexe Satzstrukturen',
  subtitle: 'Komplekse setningsstrukturer',
  description: 'Kombiner passiv og relativsetninger for å lage avanserte setninger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'produsere komplekse og varierte setninger',
    'forstå og analysere avansert tysk',
  ],
  content: [
    // ========== SEKSJON 1: Kombinere strukturer ==========
    {
      id: 'tysk-2-3-4-intro',
      type: 'text',
      content: `## Kombinere passiv og relativsetninger

Avansert tysk kombinerer ofte flere grammatiske strukturer i samme setning:

**Relativsetning + passiv:**
*Das Buch, **das** von vielen Menschen **gelesen wird**, ist ein Bestseller.*
(Boken som blir lest av mange mennesker, er en bestselger.)

**Passiv i relativsetningen:**
*Der Mann, **der** gestern **verhaftet wurde**, ist mein Nachbar.*
(Mannen som ble arrestert i går, er naboen min.)

**Flere relativsetninger:**
*Das Haus, **das** mein Vater **gebaut hat** und **das** jetzt **verkauft wird**, liegt am See.*`,
    },
    {
      id: 'tysk-2-3-4-def-1',
      type: 'definition',
      title: 'Komplekse setninger',
      content: `**Komplekse setninger** består av en hovedsetning og en eller flere bisetninger.

**Typer bisetninger:**
- Relativsetninger: *Das Buch, **das** ich lese...*
- Temporale: *Als ich kam, **war** er schon da.*
- Kausale: *Ich blieb zu Hause, **weil** ich krank war.*
- Konditionale: *Wenn ich Zeit **hätte**, würde ich kommen.*

I alle bisetninger står verbet **til slutt**.`,
    },
    {
      id: 'tysk-2-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Passiv i relativsetninger',
      problem: `Lag relativsetninger med passiv:

a) Das Haus ist alt. Das Haus wurde 1900 gebaut.
b) Die Straße ist gefährlich. Die Straße wird oft benutzt.`,
      solution: `**Løsning:**

a) *Das Haus, **das 1900 gebaut wurde**, ist alt.*
   (Huset som ble bygget i 1900, er gammelt.)

   Relativsetning med preteritum passiv: wurde + gebaut

b) *Die Straße, **die oft benutzt wird**, ist gefährlich.*
   (Veien som ofte brukes, er farlig.)

   Relativsetning med presens passiv: wird + benutzt`,
    },
    {
      id: 'tysk-2-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kombiner til en setning med relativsetning og passiv:',
        subTasks: [
          { label: 'a', task: 'Der Film ist interessant. Der Film wurde letztes Jahr gedreht.', solution: 'Der Film, der letztes Jahr gedreht wurde, ist interessant.' },
          { label: 'b', task: 'Das Buch ist ein Klassiker. Das Buch wird oft zitiert.', solution: 'Das Buch, das oft zitiert wird, ist ein Klassiker.' },
        ],
        solution: 'a) der...wurde, b) das...wird',
        hints: ['Passiv i relativsetningen: wurde/wird + partisipp', 'Verbet til slutt!'],
      },
    },

    // ========== SEKSJON 2: Flere bisetninger ==========
    {
      id: 'tysk-2-3-4-text-2',
      type: 'text',
      content: `## Setninger med flere bisetninger

Komplekse setninger kan ha flere bisetninger:

**To relativsetninger:**
*Der Mann, **der** Arzt **ist** und **der** in Berlin **wohnt**, ist mein Onkel.*

**Relativsetning + weil:**
*Das Auto, **das** ich kaufen **wollte**, war zu teuer, **weil** es ein Neuwagen **war**.*

**Relativsetning + wenn:**
*Das Problem, **das** wir **haben**, wird schlimmer, **wenn** wir nichts **tun**.*

**Merk:** Hver bisetning har verbet til slutt.`,
    },
    {
      id: 'tysk-2-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Flere bisetninger',
      problem: `Analyser denne komplekse setningen:

"Die Frau, die ich gestern getroffen habe und die mir geholfen hat, als ich Probleme hatte, ist sehr nett."`,
      solution: `**Analyse:**

*Die Frau, **[die ich gestern getroffen habe]** und **[die mir geholfen hat]**, **[als ich Probleme hatte]**, ist sehr nett.*

**Hovedsetning:** Die Frau ist sehr nett.

**Bisetninger:**
1. *die ich gestern getroffen habe* (relativsetning, akkusativ)
2. *die mir geholfen hat* (relativsetning, nominativ)
3. *als ich Probleme hatte* (temporal bisetning)

Alle bisetninger har verbet til slutt.`,
    },
    {
      id: 'tysk-2-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kombiner alle elementene til en kompleks setning:',
        subTasks: [
          { label: 'a', task: 'Das Buch ist interessant. Ich habe das Buch gelesen. Das Buch wurde mir empfohlen.', solution: 'Das Buch, das ich gelesen habe und das mir empfohlen wurde, ist interessant.' },
          { label: 'b', task: 'Der Student hat bestanden. Der Student hat viel gelernt. Der Student war vorher nervös.', solution: 'Der Student, der viel gelernt hat und der vorher nervös war, hat bestanden.' },
        ],
        solution: 'Kombiner relativsetninger med "und".',
        hints: ['Verbet til slutt i hver bisetning', 'To "die/der/das" forbindes med "und"'],
      },
    },

    // ========== SEKSJON 3: Omskriving og stil ==========
    {
      id: 'tysk-2-3-4-text-3',
      type: 'text',
      content: `## Variasjon i setningsstruktur

God tysk bruker variasjon. Her er ulike måter å uttrykke det samme på:

**Enkel:**
*Das Auto ist rot. Ich habe das Auto gekauft.*

**Med relativsetning:**
*Das Auto, das ich gekauft habe, ist rot.*

**Med partisipp:**
*Das von mir gekaufte Auto ist rot.*

**Med passiv:**
*Das Auto, das von mir gekauft wurde, ist rot.*

**Tips for god stil:**
- Ikke for mange bisetninger i samme setning
- Varier setningslengden
- Sett viktig informasjon først eller sist`,
    },
    {
      id: 'tysk-2-3-4-tip-1',
      type: 'tip',
      content: `**Når bruke komplekse setninger?**

✓ **Bruk dem når:**
- Du skriver formelle tekster
- Du vil vise sammenhenger
- Du trenger presisjon

✓ **Unngå når:**
- Du snakker muntlig (enklere er bedre)
- Setningen blir for lang og uoversiktlig
- Du er usikker på strukturen`,
    },
    {
      id: 'tysk-2-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Stilistisk variasjon',
      problem: `Skriv om denne teksten med mer variasjon:

"Ich habe einen Freund. Der Freund heißt Max. Max wohnt in Berlin. Berlin ist die Hauptstadt von Deutschland."`,
      solution: `**Omskrevet med relativsetninger:**

*Ich habe einen Freund, **der** Max **heißt** und **der** in Berlin **wohnt**, **das** die Hauptstadt von Deutschland **ist**.*

Eller mer elegant delt opp:

*Ich habe einen Freund namens Max, **der** in Berlin **wohnt**. Berlin ist die Hauptstadt von Deutschland.*

Den andre versjonen er bedre fordi den ikke er for lang og kompleks.`,
    },
    {
      id: 'tysk-2-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om med relativsetninger for bedre flyt:',
        subTasks: [
          { label: 'a', task: 'Ich arbeite in einer Firma. Die Firma liegt im Zentrum.', solution: 'Ich arbeite in einer Firma, die im Zentrum liegt.' },
          { label: 'b', task: 'Das Restaurant ist gut. Das Restaurant wurde mir empfohlen.', solution: 'Das Restaurant, das mir empfohlen wurde, ist gut.' },
          { label: 'c', task: 'Der Mann ist Arzt. Den Mann habe ich gestern getroffen.', solution: 'Der Mann, den ich gestern getroffen habe, ist Arzt.' },
        ],
        solution: 'a) die im Zentrum liegt, b) das...wurde, c) den ich...habe',
        hints: ['Finn substantivet som gjentas', 'Bruk riktig relativpronomen'],
      },
    },

    // ========== SEKSJON 4: Tekstproduksjon ==========
    {
      id: 'tysk-2-3-4-text-4',
      type: 'text',
      content: `## Skriving av komplekse tekster

Når du skriver lengre tekster, kombiner enkle og komplekse setninger:

**Eksempeltekst:**

*Letzte Woche besuchte ich das neue Museum, **das** im Stadtzentrum **eröffnet wurde**. Das Gebäude, **das** von einem berühmten Architekten **entworfen wurde**, ist sehr modern.*

*Die Ausstellung, **die** ich besonders interessant **fand**, zeigte Kunst aus dem 20. Jahrhundert. Viele Bilder, **die** dort **gezeigt wurden**, kannte ich bereits aus Büchern.*

*Ich würde das Museum jedem empfehlen, **der** sich für Kunst **interessiert**.*`,
    },
    {
      id: 'tysk-2-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Skriv en tekst',
      problem: `Skriv en kort tekst (3-4 setninger) om en bok du har lest. Bruk minst:
- En relativsetning
- En passivkonstruksjon`,
      solution: `**Eksempeltekst:**

*Letzte Woche habe ich ein Buch gelesen, **das** von einem norwegischen Autor **geschrieben wurde**. Die Geschichte, **die** sehr spannend **war**, handelte von einem jungen Mann in Oslo.*

*Das Buch wurde mir von meinem Lehrer empfohlen. Ich würde es jedem empfehlen, **der** gern Krimis **liest**.*

**Analyse:**
- Relativsetninger: "das...geschrieben wurde", "die...war", "der...liest"
- Passiv: "geschrieben wurde", "wurde...empfohlen"`,
    },
    {
      id: 'tysk-2-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv 2-3 setninger om temaet med minst en relativsetning og en passivkonstruksjon:',
        subTasks: [
          { label: 'a', task: 'Tema: En film du har sett', solution: 'Gestern habe ich einen Film gesehen, der von einem bekannten Regisseur gedreht wurde. Der Film, der auf einem Roman basiert, wurde für mehrere Preise nominiert.' },
          { label: 'b', task: 'Tema: Din skole/jobb', solution: 'Ich arbeite in einem Büro, das im Zentrum liegt. Die Firma, in der ich arbeite, wurde vor 20 Jahren gegründet.' },
        ],
        solution: 'Kombiner relativsetninger og passiv naturlig.',
        hints: ['Tenk: hva kan beskrives med "som"?', 'Tenk: hva ble gjort (passiv)?'],
      },
    },

    // ========== Oppsummering ==========
    {
      id: 'tysk-2-3-4-note-1',
      type: 'note',
      title: 'Oppsummering: Komplexe Satzstrukturen',
      content: `**Kombinere strukturer:**
- Relativsetning + passiv: *das Buch, das gelesen wird*
- Flere relativsetninger: *der Mann, der...und der...*
- Relativsetning + andre bisetninger

**Regler:**
- Verbet til slutt i alle bisetninger
- Komma skiller bisetninger
- Ikke for mange bisetninger i en setning

**Stil:**
- Varier setningslengden
- Kombiner enkle og komplekse setninger
- Øv på å skrive sammenhengende tekster`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const TYSK_2_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_TYSK_2_1_1,
  CHAPTER_TYSK_2_1_2,
  CHAPTER_TYSK_2_1_3,
  CHAPTER_TYSK_2_1_4,
  CHAPTER_TYSK_2_2_1,
  CHAPTER_TYSK_2_2_2,
  CHAPTER_TYSK_2_2_3,
  CHAPTER_TYSK_2_2_4,
  CHAPTER_TYSK_2_3_1,
  CHAPTER_TYSK_2_3_2,
  CHAPTER_TYSK_2_3_3,
  CHAPTER_TYSK_2_3_4,
];

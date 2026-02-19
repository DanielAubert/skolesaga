/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 1 - Kapittel 14-16
 *
 * Kapittel 14: Mündliche Kommunikation (Muntlig kommunikasjon)
 * Kapittel 15: Schriftliche Kommunikation (Skriftlig kommunikasjon)
 * Kapittel 16: Grammatik und Lernstrategien (Grammatikk og laeringsstrategier)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14.1: Die Aussprache - Uttale
// ============================================================================

export const CHAPTER_TYSK_1_14_1: TextbookChapter = {
  id: 'tysk-1-14-1',
  courseId: 'tysk-1',
  chapterNumber: '14.1',
  title: 'Die Aussprache',
  subtitle: 'Uttale',
  description: 'Laer om tysk uttale, omlyds-bokstaver og spesielle lyder.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke regler for uttale for a kommunisere tydelig pa tysk'],
  content: [
    {
      id: 'tysk-1-14-1-intro',
      type: 'text',
      content: `## Die Aussprache - Uttale

Tysk uttale skiller seg fra norsk pa flere mater. For a bli forstatt pa tysk, er det viktig a laere seg de spesielle lydene som ikke finnes pa norsk. I dette kapittelet skal vi se naermere pa omlyds-bokstavene (Umlaute), ch-lydene, r-lyden og andre viktige uttaleforskjeller.

God uttale handler ikke om a snakke perfekt - det handler om a bli forstatt!`
    },
    {
      id: 'tysk-1-14-1-def-1',
      type: 'definition',
      title: 'Umlaute (Omlyds-bokstaver)',
      content: `**Umlaute** er de tre spesielle tyske vokalene **ä**, **ö** og **ü**. De skrives med to prikker over bokstaven og uttales annerledes enn a, o og u.

- **ä** - uttales omtrent som norsk "e" (aapen)
- **ö** - uttales omtrent som norsk "o" (som i "bor")
- **ü** - har ingen direkte norsk tilsvarende; form leppene som for "u" og si "i"`
    },
    {
      id: 'tysk-1-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Ord med Umlaute',
      problem: `Oev pa a uttale disse ordene med Umlaute:

| Tysk ord | Betydning | Umlaut |
|----------|-----------|--------|
| Mädchen | jente | ä |
| schön | vakker | ö |
| Brücke | bro | ü |
| Bär | bjorn | ä |
| König | konge | ö |
| Tür | dor | ü |`,
      solution: `**ä**: Mädchen uttales omtrent "med-sjen", Bär uttales omtrent "beer".
**ö**: schön uttales med en lyd mellom norsk "o" og "e", König likedan.
**ü**: Brücke - form leppene som for "u" men si "i". Tür likedan.`
    },
    {
      id: 'tysk-1-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken Umlaut finnes i ordet "Brücke"?',
        options: [
          { id: 'a', text: 'ä', isCorrect: false },
          { id: 'b', text: 'ö', isCorrect: false },
          { id: 'c', text: 'ü', isCorrect: true },
          { id: 'd', text: 'Ingen Umlaut', isCorrect: false },
        ],
        solution: 'Brücke inneholder bokstaven ü. Ordet betyr "bro" pa tysk.',
      },
    },
    {
      id: 'tysk-1-14-1-def-2',
      type: 'definition',
      title: 'Der ch-Laut (ch-lyden)',
      content: `**ch** uttales pa to ulike mater pa tysk:

1. **Ach-Laut** (etter a, o, u, au): En dyp, skrapende lyd bak i halsen, litt som norsk "k" men mykere. Eksempel: *Buch*, *noch*, *auch*.

2. **Ich-Laut** (etter e, i, ä, ö, ü, ei, eu, konsonanter): En myk lyd lenger fremme i munnen, litt som en hvisking av "sj". Eksempel: *ich*, *Milch*, *Mädchen*.`
    },
    {
      id: 'tysk-1-14-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Ach-Laut vs. Ich-Laut',
      problem: `Sorter disse ordene etter om de har Ach-Laut eller Ich-Laut:

Buch, ich, Nacht, Milch, Kuchen, Kirche, Tochter, Mädchen`,
      solution: `**Ach-Laut** (etter a, o, u, au): Buch, Nacht, Kuchen, Tochter
**Ich-Laut** (etter e, i, ae, oe, ue, konsonanter): ich, Milch, Kirche, Mädchen

Regelen er enkel: se pa vokalen eller konsonanten FoR "ch" - det bestemmer hvilken lyd du bruker.`
    },
    {
      id: 'tysk-1-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord har Ach-Laut (den dype ch-lyden)?',
        options: [
          { id: 'a', text: 'ich', isCorrect: false },
          { id: 'b', text: 'Milch', isCorrect: false },
          { id: 'c', text: 'Buch', isCorrect: true },
          { id: 'd', text: 'Mädchen', isCorrect: false },
        ],
        solution: 'Buch har Ach-Laut fordi ch kommer etter u. De andre ordene har Ich-Laut (etter i, konsonant, og ae).',
      },
    },
    {
      id: 'tysk-1-14-1-def-3',
      type: 'definition',
      title: 'Der R-Laut (r-lyden)',
      content: `**R** pa tysk uttales vanligvis som en **uvular r** - det vil si bak i halsen, nesten som en gargling. Dette er annerledes enn den norske rulle-r-en.

- I begynnelsen av ord: tydelig r - *Rad*, *rot*, *Reis*
- I midten av ord: fortsatt hoerbar - *Bruder*, *Garten*
- Pa slutten av ord/stavelser: ofte svekket til en "a"-aktig lyd - *Vater* (uttales nesten "Fata"), *Mutter* (nesten "Mutta")`
    },
    {
      id: 'tysk-1-14-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Spesielle tyske lyder',
      problem: `Her er flere spesielle tyske lyder du bor kjenne til:

| Bokstav/kombinasjon | Uttale | Eksempel |
|---------------------|--------|----------|
| ß (Eszett) | som "ss" | Straße (gate) |
| z | som "ts" | Zeit (tid) |
| w | som norsk "v" | Wasser (vann) |
| v | som norsk "f" | Vater (far) |
| sp- (i begynnelsen) | som "sjp" | Sprache (sprak) |
| st- (i begynnelsen) | som "sjt" | Straße (gate) |
| -ig (pa slutten) | som "ich" | fertig (ferdig) |`,
      solution: `Legg spesielt merke til:
- Tysk **w** = norsk **v** (Wasser = "vasser")
- Tysk **v** = norsk **f** (Vater = "fater")
- **sp** og **st** i begynnelsen av ord uttales med "sj"-lyd
- **ß** er bare en annen mate a skrive "ss" pa`
    },
    {
      id: 'tysk-1-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hvordan disse tyske ordene uttales. Skriv en enkel uttaleforklaring for hvert ord.',
        subTasks: [
          { label: 'a', task: 'Wie (hvordan)', solution: 'Uttales "vi" - tysk w uttales som norsk v.' },
          { label: 'b', task: 'Straße (gate)', solution: 'Uttales omtrent "sjtraasse" - st i begynnelsen uttales "sjt", og ß uttales som "ss".' },
          { label: 'c', task: 'Mädchen (jente)', solution: 'Uttales omtrent "med-sjen" - ae uttales som en aapen e-lyd, og ch etter ae er Ich-Laut.' },
        ],
        solution: 'a) "vi" b) "sjtraasse" c) "med-sjen"',
        hints: ['Husk at tysk w = norsk v', 'st- i begynnelsen av ord uttales med sj-lyd'],
      },
    },
    {
      id: 'tysk-1-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om:

- **Umlaute** (ä, ö, ü) - spesielle tyske vokaler med to prikker
- **Ch-lydene** - Ach-Laut (etter a, o, u) og Ich-Laut (etter e, i, konsonanter)
- **R-lyden** - uttales bak i halsen, svekkes pa slutten av ord
- **Andre spesielle lyder** - ß, z, w, v, sp-, st-, -ig

Det viktigste er a oeve jevnlig. Lytt til tysk tale og proev a etterligne lydene!`
    },
    {
      id: 'tysk-1-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan uttales det tyske ordet "Vater" (far)?',
        options: [
          { id: 'a', text: 'Med v-lyd som i norsk "vann"', isCorrect: false },
          { id: 'b', text: 'Med f-lyd, omtrent som "faater"', isCorrect: true },
          { id: 'c', text: 'Med w-lyd som i engelsk "water"', isCorrect: false },
          { id: 'd', text: 'Med b-lyd som i norsk "bater"', isCorrect: false },
        ],
        solution: 'Tysk v uttales som norsk f. Derfor uttales Vater omtrent som "faater".',
      },
    },
    {
      id: 'tysk-1-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Les gjennom ordlisten nedenfor og forklar hvilke spesielle uttaleregler som gjelder for hvert ord.',
        subTasks: [
          { label: 'a', task: 'Küche (kjokken)', solution: 'ü uttales med runde lepper + i-lyd. ch etter ü er Ich-Laut.' },
          { label: 'b', task: 'Sprache (sprak)', solution: 'sp- i begynnelsen uttales "sjp". ch etter a er Ach-Laut.' },
          { label: 'c', task: 'Wörter (ord, flertall)', solution: 'w uttales som norsk v. ö uttales mellom o og e.' },
          { label: 'd', task: 'zwanzig (tjue)', solution: 'z uttales som "ts". w uttales som norsk v. -ig pa slutten uttales som Ich-Laut.' },
        ],
        solution: 'a) ü + Ich-Laut. b) sjp- + Ach-Laut. c) v-lyd + ö-lyd. d) ts-lyd + v-lyd + Ich-Laut pa -ig.',
        hints: ['Se pa tabellene over spesielle lyder', 'Husk reglene for Ach-Laut og Ich-Laut'],
      },
    },
    {
      id: 'tysk-1-14-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket av disse ordene har BADE Umlaut OG Ich-Laut?',
        options: [
          { id: 'a', text: 'Buch (bok)', isCorrect: false },
          { id: 'b', text: 'Mädchen (jente)', isCorrect: true },
          { id: 'c', text: 'schön (vakker)', isCorrect: false },
          { id: 'd', text: 'Kuchen (kake)', isCorrect: false },
        ],
        solution: 'Mädchen har bade Umlaut (ä) og Ich-Laut (ch etter ae-lyden i -dchen). Buch har Ach-Laut men ingen Umlaut. Schön har ö men ingen ch-lyd. Kuchen har Ach-Laut men ingen Umlaut.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Umlaut', definition: 'Omlyds-bokstav (ä, ö, ü) - spesielle tyske vokaler' },
    { term: 'Ach-Laut', definition: 'Den dype ch-lyden etter a, o, u og au' },
    { term: 'Ich-Laut', definition: 'Den myke ch-lyden etter e, i, ae, oe, ue og konsonanter' },
    { term: 'Eszett (ß)', definition: 'Spesiell tysk bokstav som uttales som dobbel-s' },
    { term: 'die Aussprache', definition: 'Uttale' },
    { term: 'der Buchstabe', definition: 'Bokstav' },
  ],
};

// ============================================================================
// KAPITTEL 14.2: Dialogtraining - Samtaletrening
// ============================================================================

export const CHAPTER_TYSK_1_14_2: TextbookChapter = {
  id: 'tysk-1-14-2',
  courseId: 'tysk-1',
  chapterNumber: '14.2',
  title: 'Dialogtraining',
  subtitle: 'Samtaletrening',
  description: 'Oev pa a fore samtaler pa tysk i vanlige hverdagssituasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['delta i enkle samtaler om hverdagslige emner pa tysk'],
  content: [
    {
      id: 'tysk-1-14-2-intro',
      type: 'text',
      content: `## Dialogtraining - Samtaletrening

A kunne fore en samtale pa tysk er en av de viktigste ferdighetene du kan laere. I dette kapittelet oever vi pa dialoger i vanlige situasjoner: pa kafeen, i butikken, pa reise og i sosiale sammenhenger.

Det viktigste er a tore a snakke - selv om du gjoer feil!`
    },
    {
      id: 'tysk-1-14-2-def-1',
      type: 'definition',
      title: 'Gesprächsfloskeln (Samtaleuttrykk)',
      content: `**Gesprächsfloskeln** er faste uttrykk og fraser som brukes i samtaler. De hjelper deg med a starte, opprettholde og avslutte en samtale.

**Starte en samtale:**
- *Entschuldigung, ...* - Unnskyld, ...
- *Darf ich fragen ...?* - Far jeg sporr ...?

**Holde samtalen i gang:**
- *Ach so!* - A ja! / Javel!
- *Wirklich?* - Virkelig?
- *Das ist interessant.* - Det er interessant.

**Avslutte en samtale:**
- *Es war nett, mit Ihnen/dir zu sprechen.* - Det var hyggelig a snakke med deg.
- *Ich muss jetzt leider gehen.* - Jeg ma dessverre ga na.`
    },
    {
      id: 'tysk-1-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Im Café (Pa kafeen)',
      problem: `Les denne dialogen pa kafeen:

**Kellner:** Guten Tag! Was darf es sein?
**Gast:** Ich hätte gerne einen Kaffee, bitte.
**Kellner:** Mit Milch und Zucker?
**Gast:** Nur mit Milch, bitte. Und ein Stück Kuchen.
**Kellner:** Welchen Kuchen möchten Sie? Wir haben Apfelkuchen und Schokoladenkuchen.
**Gast:** Den Apfelkuchen, bitte.
**Kellner:** Gerne. Kommt sofort!
**Gast:** Danke schön!

*(...etter maltidet...)*

**Gast:** Kann ich bitte bezahlen?
**Kellner:** Natürlich. Das macht 8,50 Euro.
**Gast:** Bitte schön. Stimmt so.
**Kellner:** Vielen Dank! Auf Wiedersehen!`,
      solution: `**Viktige uttrykk fra dialogen:**
- *Was darf es sein?* = Hva far det vaere? (hoeflig mate a sporr hva kunden onsker)
- *Ich hätte gerne ...* = Jeg vil gjerne ha ... (hoeflig bestilling)
- *Kann ich bitte bezahlen?* = Kan jeg fa betale?
- *Das macht ...* = Det blir ... (om pris)
- *Stimmt so.* = Behold vekslepengene (tips).`
    },
    {
      id: 'tysk-1-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Ich hätte gerne einen Kaffee, bitte"?',
        options: [
          { id: 'a', text: 'Har du kaffe?', isCorrect: false },
          { id: 'b', text: 'Jeg vil gjerne ha en kaffe, takk.', isCorrect: true },
          { id: 'c', text: 'Kaffen var god, takk.', isCorrect: false },
          { id: 'd', text: 'Kan jeg betale for kaffen?', isCorrect: false },
        ],
        solution: '"Ich hätte gerne" er en hoeflig mate a si "jeg vil gjerne ha". "Bitte" betyr "vaer sa snill/takk".',
      },
    },
    {
      id: 'tysk-1-14-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Im Geschäft (I butikken)',
      problem: `Les denne dialogen i en klesbutikk:

**Verkäufer:** Guten Tag, kann ich Ihnen helfen?
**Kunde:** Ja, ich suche eine Jacke.
**Verkäufer:** Welche Größe brauchen Sie?
**Kunde:** Größe M, bitte.
**Verkäufer:** Welche Farbe möchten Sie?
**Kunde:** Haben Sie etwas in Blau?
**Verkäufer:** Ja, hier bitte. Möchten Sie sie anprobieren?
**Kunde:** Ja, gerne. Wo ist die Umkleidekabine?
**Verkäufer:** Dort drüben, links.

*(...etter a ha proevd jakken...)*

**Kunde:** Die passt gut. Was kostet sie?
**Verkäufer:** 79,99 Euro.
**Kunde:** Das ist ein bisschen teuer. Haben Sie etwas Günstigeres?
**Verkäufer:** Ja, diese hier kostet nur 49,99 Euro.
**Kunde:** Die nehme ich! Kann ich mit Karte bezahlen?
**Verkäufer:** Natürlich!`,
      solution: `**Viktige uttrykk fra dialogen:**
- *Kann ich Ihnen helfen?* = Kan jeg hjelpe deg? (formelt)
- *Ich suche ...* = Jeg leter etter ...
- *Welche Größe?* = Hvilken stoerrelse?
- *Möchten Sie sie anprobieren?* = Vil du proeve den?
- *Was kostet sie?* = Hva koster den?
- *Die nehme ich!* = Den tar jeg!`
    },
    {
      id: 'tysk-1-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse nyttige butikkfrasene til tysk.',
        subTasks: [
          { label: 'a', task: 'Kan jeg hjelpe deg?', solution: 'Kann ich Ihnen helfen?' },
          { label: 'b', task: 'Hva koster dette?', solution: 'Was kostet das?' },
          { label: 'c', task: 'Har dere dette i stoerrelse L?', solution: 'Haben Sie das in Größe L?' },
          { label: 'd', task: 'Kan jeg betale med kort?', solution: 'Kann ich mit Karte bezahlen?' },
        ],
        solution: 'a) Kann ich Ihnen helfen? b) Was kostet das? c) Haben Sie das in Größe L? d) Kann ich mit Karte bezahlen?',
        hints: ['Bruk "Sie" (formelt) i butikksituasjoner', 'Husk at "koste" pa tysk er "kosten"'],
      },
    },
    {
      id: 'tysk-1-14-2-def-2',
      type: 'definition',
      title: 'Höflichkeitsformen (Hoeflighetsfraer)',
      content: `Pa tysk er det viktig a bruke riktig hoeflighetsniva:

**Formelt (Sie)** - med fremmede, eldre, i butikker, pa jobben:
- *Können Sie mir helfen?* - Kan De hjelpe meg?
- *Wie geht es Ihnen?* - Hvordan har De det?

**Uformelt (du)** - med venner, jevnaldrende, familie:
- *Kannst du mir helfen?* - Kan du hjelpe meg?
- *Wie geht es dir?* - Hvordan har du det?

**Tips:** Bruk alltid **Sie** med voksne du ikke kjenner godt. Det er bedre a vaere for hoeflig enn for uformell!`
    },
    {
      id: 'tysk-1-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du er pa ferie i Tyskland og vil sporr en voksen fremmed om veien. Hvilken setning er mest passende?',
        options: [
          { id: 'a', text: 'Hey, wo ist der Bahnhof?', isCorrect: false },
          { id: 'b', text: 'Entschuldigung, können Sie mir sagen, wo der Bahnhof ist?', isCorrect: true },
          { id: 'c', text: 'Sag mal, wo ist der Bahnhof?', isCorrect: false },
          { id: 'd', text: 'Kannst du mir den Weg zeigen?', isCorrect: false },
        ],
        solution: 'Med fremmede voksne bruker man alltid Sie-formen og starter hoeflig med "Entschuldigung" (unnskyld). De andre alternativene er for uformelle.',
      },
    },
    {
      id: 'tysk-1-14-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Sich vorstellen (A presentere seg)',
      problem: `Her er en dialog der to personer moetes for forste gang:

**Anna:** Hallo! Ich bin Anna. Und du?
**Ben:** Hi, ich heiße Ben. Woher kommst du?
**Anna:** Ich komme aus Norwegen, aus Oslo. Und du?
**Ben:** Ich komme aus Berlin. Was machst du hier?
**Anna:** Ich bin Austauschstudentin. Ich lerne Deutsch.
**Ben:** Cool! Dein Deutsch ist schon gut!
**Anna:** Danke, das ist nett! Ich übe jeden Tag.
**Ben:** Hast du Lust, einen Kaffee trinken zu gehen?
**Anna:** Ja, gerne!`,
      solution: `**Viktige uttrykk for a presentere seg:**
- *Ich bin / Ich heiße ...* = Jeg heter ...
- *Woher kommst du?* = Hvor kommer du fra?
- *Ich komme aus ...* = Jeg kommer fra ...
- *Was machst du hier?* = Hva gjoer du her?
- *Hast du Lust, ... zu ...?* = Har du lyst til a ...?`
    },
    {
      id: 'tysk-1-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi oevd pa dialoger i tre viktige situasjoner:

1. **Pa kafeen** - bestille mat og drikke, betale
2. **I butikken** - sporr om hjelp, proeve klaer, betale
3. **A presentere seg** - hilse, fortelle om seg selv, sma-prate

**Husk:** Bruk **Sie** med fremmede voksne, og **du** med venner og jevnaldrende. Det er alltid bedre a vaere for hoeflig!`
    },
    {
      id: 'tysk-1-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en kort dialog (6-8 replikker) der du bestiller mat pa en tysk restaurant. Bruk hoeflig sprak (Sie-form).',
        subTasks: [
          { label: 'a', task: 'Kelneren hilser og sporr hva du onsker.', solution: 'Kellner: Guten Abend! Was darf ich Ihnen bringen?' },
          { label: 'b', task: 'Du bestiller en hovedrett og en drikke.', solution: 'Gast: Ich hätte gerne das Schnitzel mit Pommes und ein Glas Wasser, bitte.' },
          { label: 'c', task: 'Kelneren sporr om dessert, du takker nei og ber om regningen.', solution: 'Kellner: Möchten Sie ein Dessert? Gast: Nein, danke. Kann ich bitte die Rechnung haben?' },
        ],
        solution: 'En fullstendig restaurantdialog med hoeflige fraser som "Ich hätte gerne", "bitte", "Kann ich bitte die Rechnung haben?"',
        hints: ['Bruk "Ich hätte gerne ..." for a bestille', 'Avslutt med a be om regningen: "Die Rechnung, bitte"'],
      },
    },
    {
      id: 'tysk-1-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "Stimmt so" nar du betaler pa en restaurant i Tyskland?',
        options: [
          { id: 'a', text: 'Det stemmer ikke.', isCorrect: false },
          { id: 'b', text: 'Behold vekslepengene (tips).', isCorrect: true },
          { id: 'c', text: 'Kan du gjenta prisen?', isCorrect: false },
          { id: 'd', text: 'Jeg vil ha kvittering.', isCorrect: false },
        ],
        solution: '"Stimmt so" betyr bokstavelig "det stemmer slik" og brukes nar du gir tips - det betyr at den som betjener kan beholde vekslepengene.',
      },
    },
    {
      id: 'tysk-1-14-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Oversett hele denne korte dialogen til tysk. To venner moetes tilfeldig pa gata.',
        subTasks: [
          { label: 'a', task: 'Hei! Hvordan har du det?', solution: 'Hallo! Wie geht es dir?' },
          { label: 'b', task: 'Bra, takk! Og du? Hva gjoer du her?', solution: 'Gut, danke! Und dir? Was machst du hier?' },
          { label: 'c', task: 'Jeg handler litt. Har du lyst til a drikke en kaffe?', solution: 'Ich kaufe ein bisschen ein. Hast du Lust, einen Kaffee zu trinken?' },
          { label: 'd', task: 'Ja, gjerne! Det hores bra ut!', solution: 'Ja, gerne! Das klingt gut!' },
        ],
        solution: 'a) Hallo! Wie geht es dir? b) Gut, danke! Und dir? Was machst du hier? c) Ich kaufe ein bisschen ein. Hast du Lust, einen Kaffee zu trinken? d) Ja, gerne! Das klingt gut!',
        hints: ['Bruk du-form siden de er venner', '"A handle" = einkaufen (delbart verb)'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Gesprächsfloskeln', definition: 'Samtaleuttrykk og faste fraser' },
    { term: 'Entschuldigung', definition: 'Unnskyld (hoeflig henvendelse)' },
    { term: 'Ich hätte gerne ...', definition: 'Jeg vil gjerne ha ... (hoeflig bestilling)' },
    { term: 'die Höflichkeit', definition: 'Hoeflighet' },
    { term: 'Sie (formelt)', definition: 'Formelt "du/De" - brukes med fremmede og i formelle situasjoner' },
    { term: 'die Rechnung', definition: 'Regningen' },
  ],
};

// ============================================================================
// KAPITTEL 14.3: Kurzvorträge - Korte presentasjoner
// ============================================================================

export const CHAPTER_TYSK_1_14_3: TextbookChapter = {
  id: 'tysk-1-14-3',
  courseId: 'tysk-1',
  chapterNumber: '14.3',
  title: 'Kurzvorträge',
  subtitle: 'Korte presentasjoner',
  description: 'Laer a holde korte presentasjoner pa tysk om deg selv og kjente emner.',
  estimatedMinutes: 50,
  competenceGoals: ['holde korte presentasjoner pa tysk om kjente emner'],
  content: [
    {
      id: 'tysk-1-14-3-intro',
      type: 'text',
      content: `## Kurzvorträge - Korte presentasjoner

A kunne presentere et emne muntlig pa tysk er en viktig ferdighet. I dette kapittelet laerer du hvordan du bygger opp en kort presentasjon, hvilke fraser du kan bruke, og hvordan du holder interessen til publikum.

En god presentasjon har tre deler: innledning, hoveddel og avslutning.`
    },
    {
      id: 'tysk-1-14-3-def-1',
      type: 'definition',
      title: 'Aufbau eines Vortrags (Oppbygging av en presentasjon)',
      content: `En presentasjon pa tysk folger denne strukturen:

**1. Einleitung (Innledning):**
- *Heute spreche ich über ...* - I dag snakker jeg om ...
- *Mein Thema ist ...* - Emnet mitt er ...
- *Ich möchte euch/Ihnen etwas über ... erzählen.* - Jeg vil fortelle dere/Dem noe om ...

**2. Hauptteil (Hoveddel):**
- *Zuerst ...* - Forst ...
- *Dann ...* - Deretter ...
- *Außerdem ...* - I tillegg ...
- *Ein wichtiger Punkt ist ...* - Et viktig poeng er ...

**3. Schluss (Avslutning):**
- *Zusammenfassend kann man sagen, dass ...* - Oppsummerende kan man si at ...
- *Zum Schluss ...* - Til slutt ...
- *Habt ihr / Haben Sie Fragen?* - Har dere/De spoersmal?`
    },
    {
      id: 'tysk-1-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sich vorstellen (Presentere seg selv)',
      problem: `Her er et eksempel pa en kort presentasjon der man presenterer seg selv:

**Einleitung:**
"Hallo zusammen! Ich heiße Emma und komme aus Bergen in Norwegen. Ich möchte mich kurz vorstellen."

**Hauptteil:**
"Ich bin 16 Jahre alt und gehe auf das Gymnasium. Meine Lieblingsfächer sind Deutsch und Kunst. In meiner Freizeit spiele ich gerne Gitarre und lese Bücher. Außerdem mache ich gerne Sport - besonders Skifahren und Schwimmen. Meine Familie besteht aus vier Personen: meinen Eltern, meinem Bruder und mir."

**Schluss:**
"Das war eine kurze Vorstellung von mir. Habt ihr Fragen?"`,
      solution: `**Nyttige uttrykk brukt i presentasjonen:**
- *Ich möchte mich kurz vorstellen.* = Jeg vil presentere meg kort.
- *Meine Lieblingsfächer sind ...* = Favoritfagene mine er ...
- *In meiner Freizeit ...* = Pa fritiden min ...
- *Meine Familie besteht aus ...* = Familien min bestar av ...
- *Das war eine kurze Vorstellung.* = Det var en kort presentasjon.`
    },
    {
      id: 'tysk-1-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning passer best til a STARTE en presentasjon?',
        options: [
          { id: 'a', text: 'Zusammenfassend kann man sagen ...', isCorrect: false },
          { id: 'b', text: 'Heute spreche ich über ...', isCorrect: true },
          { id: 'c', text: 'Habt ihr Fragen?', isCorrect: false },
          { id: 'd', text: 'Zum Schluss möchte ich sagen ...', isCorrect: false },
        ],
        solution: '"Heute spreche ich über ..." (I dag snakker jeg om ...) passer til innledningen. De andre uttrykkene tilhoerer avslutningen.',
      },
    },
    {
      id: 'tysk-1-14-3-def-2',
      type: 'definition',
      title: 'Verknüpfungswörter (Bindeord)',
      content: `**Verknüpfungswörter** hjelper deg med a binde setninger og avsnitt sammen:

| Tysk | Norsk | Bruk |
|------|-------|------|
| zuerst | forst | Rekkefolgje |
| dann / danach | deretter / etterpaa | Rekkefolgje |
| außerdem | i tillegg / dessuten | Legge til |
| aber | men | Motsetning |
| deshalb | derfor | Arsak |
| zum Beispiel | for eksempel | Eksempel |
| also | altsa / sa | Konklusjon |
| schließlich | til slutt | Avslutning |`
    },
    {
      id: 'tysk-1-14-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Meine Stadt (Byen min)',
      problem: `Her er et eksempel pa en kort presentasjon om hjembyen din:

"Heute möchte ich über meine Stadt sprechen. Ich komme aus Trondheim, einer Stadt im Norden von Norwegen.

Zuerst ein paar Fakten: Trondheim hat ungefähr 210.000 Einwohner und ist die drittgrößte Stadt Norwegens. Die Stadt liegt am Trondheimfjord.

Trondheim ist berühmt für den Nidarosdom, eine wunderschöne Kathedrale. Außerdem gibt es eine bekannte Universität, die NTNU.

In Trondheim kann man viel machen. Man kann zum Beispiel den Nidarosdom besuchen, in der Bakklandet-Straße spazieren gehen oder leckeren Kaffee in einem der vielen Cafés trinken.

Zusammenfassend kann man sagen, dass Trondheim eine schöne und interessante Stadt ist. Habt ihr Fragen?"`,
      solution: `**Strukturen i presentasjonen:**
1. **Innledning:** "Heute möchte ich über ... sprechen" + kort introduksjon
2. **Fakta:** Innbyggertall, beliggenhet
3. **Severdigheter:** Nidarosdomen, NTNU
4. **Aktiviteter:** Hva man kan gjore der
5. **Avslutning:** Oppsummering + spoersmal`
    },
    {
      id: 'tysk-1-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse presentasjonsfrasene til tysk.',
        subTasks: [
          { label: 'a', task: 'I dag snakker jeg om ...', solution: 'Heute spreche ich über ...' },
          { label: 'b', task: 'Et viktig poeng er ...', solution: 'Ein wichtiger Punkt ist ...' },
          { label: 'c', task: 'I tillegg ...', solution: 'Außerdem ...' },
          { label: 'd', task: 'Har dere spoersmal?', solution: 'Habt ihr Fragen?' },
        ],
        solution: 'a) Heute spreche ich über ... b) Ein wichtiger Punkt ist ... c) Außerdem ... d) Habt ihr Fragen?',
        hints: ['Husk a boye verbet riktig', '"Spreche" er 1. person entall av "sprechen"'],
      },
    },
    {
      id: 'tysk-1-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr "Zusammenfassend kann man sagen, dass ..."?',
        options: [
          { id: 'a', text: 'Forst vil jeg si at ...', isCorrect: false },
          { id: 'b', text: 'For eksempel kan man si at ...', isCorrect: false },
          { id: 'c', text: 'Oppsummerende kan man si at ...', isCorrect: true },
          { id: 'd', text: 'Dessuten kan man si at ...', isCorrect: false },
        ],
        solution: '"Zusammenfassend" betyr "oppsummerende" og brukes i avslutningen av en presentasjon for a oppsummere hovedpoengene.',
      },
    },
    {
      id: 'tysk-1-14-3-def-3',
      type: 'definition',
      title: 'Tipps für Vorträge (Tips for presentasjoner)',
      content: `**Gode tips for muntlige presentasjoner pa tysk:**

1. **Sprich langsam und deutlich** - Snakk sakte og tydelig
2. **Benutze einfache Sätze** - Bruk enkle setninger
3. **Mache Pausen** - Hold pauser mellom viktige poenger
4. **Benutze Stichpunkte** - Bruk stikkord (ikke les opp ordrett)
5. **Schau das Publikum an** - Se pa publikum
6. **Übe vorher** - Oev pa forhand`
    },
    {
      id: 'tysk-1-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert:

- **Oppbygging:** Einleitung - Hauptteil - Schluss
- **Innledningsfraser:** "Heute spreche ich über ...", "Mein Thema ist ..."
- **Bindeord:** zuerst, dann, außerdem, aber, deshalb, zum Beispiel
- **Avslutningsfraser:** "Zusammenfassend ...", "Habt ihr Fragen?"
- **Gode tips:** Snakk sakte, bruk enkle setninger, oev pa forhand`
    },
    {
      id: 'tysk-1-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv stikkord og noen hele setninger til en kort presentasjon om hobbyen din pa tysk.',
        subTasks: [
          { label: 'a', task: 'Skriv en innledningssetning der du introduserer emnet.', solution: 'F.eks.: "Heute möchte ich über mein Hobby sprechen. Mein Hobby ist Fußball."' },
          { label: 'b', task: 'Skriv tre setninger til hoveddelen med bindeord.', solution: 'F.eks.: "Zuerst: Ich spiele seit fünf Jahren Fußball. Außerdem trainiere ich zweimal pro Woche. Ein wichtiger Punkt ist, dass Fußball sehr gesund ist."' },
          { label: 'c', task: 'Skriv en avslutning med oppsummering.', solution: 'F.eks.: "Zusammenfassend kann man sagen, dass Fußball ein toller Sport ist. Habt ihr Fragen?"' },
        ],
        solution: 'Presentasjonen skal ha tydelig innledning, hoveddel med bindeord, og avslutning med oppsummering og spoersmal til publikum.',
        hints: ['Bruk minst to bindeord (zuerst, außerdem, dann, etc.)', 'Husk a avslutte med "Habt ihr Fragen?"'],
      },
    },
    {
      id: 'tysk-1-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I hvilken rekkefolgje skal du bruke disse uttrykkene i en presentasjon?',
        options: [
          { id: 'a', text: 'Zuerst → Zusammenfassend → Heute spreche ich über', isCorrect: false },
          { id: 'b', text: 'Zusammenfassend → Heute spreche ich über → Zuerst', isCorrect: false },
          { id: 'c', text: 'Heute spreche ich über → Zuerst → Zusammenfassend', isCorrect: true },
          { id: 'd', text: 'Zuerst → Heute spreche ich über → Zusammenfassend', isCorrect: false },
        ],
        solution: 'Riktig rekkefolgje: 1) "Heute spreche ich über ..." (innledning), 2) "Zuerst ..." (hoveddel), 3) "Zusammenfassend ..." (avslutning).',
      },
    },
    {
      id: 'tysk-1-14-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv en komplett minipresentasjon (8-10 setninger) pa tysk om temaet "Mein Land - Norwegen". Bruk strukturen innledning-hoveddel-avslutning.',
        subTasks: [
          { label: 'a', task: 'Skriv innledningen (2 setninger).', solution: 'Heute möchte ich über mein Land sprechen. Ich komme aus Norwegen, einem Land im Norden von Europa.' },
          { label: 'b', task: 'Skriv hoveddelen med fakta og severdigheter (4-5 setninger).', solution: 'Norwegen hat ungefähr 5,5 Millionen Einwohner. Die Hauptstadt ist Oslo. Norwegen ist berühmt für seine wunderschönen Fjorde und Berge. Außerdem kann man in Norwegen gut Skifahren. Ein wichtiger Punkt ist, dass es im Sommer sehr lange hell ist - das nennt man Mitternachtssonne.' },
          { label: 'c', task: 'Skriv avslutningen (2 setninger).', solution: 'Zusammenfassend kann man sagen, dass Norwegen ein schönes und interessantes Land ist. Habt ihr Fragen?' },
        ],
        solution: 'En fullstendig presentasjon med innledning, hoveddel med fakta og bindeord, og avslutning med oppsummering.',
        hints: ['Bruk tall og fakta for a gjore presentasjonen interessant', 'Bruk bindeord som außerdem og ein wichtiger Punkt ist'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Vortrag', definition: 'Presentasjon/foredrag' },
    { term: 'die Einleitung', definition: 'Innledning' },
    { term: 'der Hauptteil', definition: 'Hoveddel' },
    { term: 'der Schluss', definition: 'Avslutning' },
    { term: 'zusammenfassend', definition: 'Oppsummerende' },
    { term: 'die Verknüpfungswörter', definition: 'Bindeord' },
  ],
};

// ============================================================================
// KAPITTEL 14.4: Rollenspiele - Rollespill
// ============================================================================

export const CHAPTER_TYSK_1_14_4: TextbookChapter = {
  id: 'tysk-1-14-4',
  courseId: 'tysk-1',
  chapterNumber: '14.4',
  title: 'Rollenspiele',
  subtitle: 'Rollespill',
  description: 'Oev pa a bruke tysk i ulike rollespill-situasjoner som reise, lege og telefonsamtaler.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke tysk i ulike hverdagssituasjoner gjennom rollespill'],
  content: [
    {
      id: 'tysk-1-14-4-intro',
      type: 'text',
      content: `## Rollenspiele - Rollespill

Rollespill er en fin mate a oeve pa a bruke tysk i realistiske situasjoner. Ved a "late som" du er i en bestemt situasjon, oever du bade ordforrad, grammatikk og uttale pa en naturlig mate.

I dette kapittelet ser vi pa situasjoner du kan moete pa reise i Tyskland, Oesterrike eller Sveits.`
    },
    {
      id: 'tysk-1-14-4-def-1',
      type: 'definition',
      title: 'Am Bahnhof (Pa togstasjonen)',
      content: `**Nyttige uttrykk pa togstasjonen:**

| Tysk | Norsk |
|------|-------|
| der Bahnhof | togstasjonen |
| der Zug | toget |
| die Fahrkarte | billetten |
| der Fahrplan | rutetabellen |
| das Gleis | plattformen/sporet |
| einfach | enveisbillett |
| hin und zurück | tur-retur |
| Wann fährt der nächste Zug nach ...? | Nar gar neste tog til ...? |
| Von welchem Gleis fährt der Zug? | Fra hvilket spor gar toget? |`
    },
    {
      id: 'tysk-1-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Am Fahrkartenschalter (I billettluken)',
      problem: `Les denne dialogen i billettluken:

**Reisender:** Guten Tag! Ich möchte eine Fahrkarte nach München, bitte.
**Angestellter:** Einfach oder hin und zurück?
**Reisender:** Hin und zurück, bitte. Für morgen.
**Angestellter:** Wann möchten Sie fahren?
**Reisender:** Am Vormittag, so gegen 9 Uhr.
**Angestellter:** Es gibt einen ICE um 9:15 Uhr. Ankunft in München um 13:30 Uhr.
**Reisender:** Das passt gut. Was kostet die Fahrkarte?
**Angestellter:** 89 Euro für die Hin- und Rückfahrt.
**Reisender:** Okay, die nehme ich. Von welchem Gleis fährt der Zug?
**Angestellter:** Gleis 7. Gute Reise!
**Reisender:** Danke schön!`,
      solution: `**Viktige uttrykk:**
- *Ich möchte eine Fahrkarte nach ...* = Jeg vil gjerne ha en billett til ...
- *Einfach oder hin und zurück?* = Enveis eller tur-retur?
- *Was kostet die Fahrkarte?* = Hva koster billetten?
- *Von welchem Gleis fährt der Zug?* = Fra hvilket spor gar toget?
- *Gute Reise!* = God reise!`
    },
    {
      id: 'tysk-1-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "hin und zurück"?',
        options: [
          { id: 'a', text: 'Forsteklasse billett', isCorrect: false },
          { id: 'b', text: 'Enveisbillett', isCorrect: false },
          { id: 'c', text: 'Tur-retur billett', isCorrect: true },
          { id: 'd', text: 'Gruppebillett', isCorrect: false },
        ],
        solution: '"Hin und zurück" betyr bokstavelig "dit og tilbake", altsa en tur-retur-billett. "Einfach" brukes for enveisbillett.',
      },
    },
    {
      id: 'tysk-1-14-4-def-2',
      type: 'definition',
      title: 'Im Hotel (Pa hotellet)',
      content: `**Nyttige uttrykk pa hotellet:**

| Tysk | Norsk |
|------|-------|
| Ich habe ein Zimmer reserviert. | Jeg har reservert et rom. |
| Ein Einzelzimmer / Doppelzimmer | Enkeltrom / Dobbeltrom |
| Für wie viele Nächte? | For hvor mange netter? |
| Ist Frühstück inklusive? | Er frokost inkludert? |
| Wann ist Check-out? | Nar er utsjekk? |
| Wo ist der Aufzug? | Hvor er heisen? |
| Kann ich den Schlüssel haben? | Kan jeg fa nokkelen? |`
    },
    {
      id: 'tysk-1-14-4-example-2',
      type: 'example',
      title: 'Eksempel 2: An der Hotelrezeption (I hotellresepsjonen)',
      problem: `Les denne dialogen i hotellresepsjonen:

**Gast:** Guten Abend! Ich habe ein Zimmer reserviert, auf den Namen Larsen.
**Rezeptionist:** Einen Moment, bitte. Ja, hier habe ich Ihre Reservierung. Ein Doppelzimmer für drei Nächte.
**Gast:** Genau. Ist das Frühstück inklusive?
**Rezeptionist:** Ja, das Frühstück ist von 7 bis 10 Uhr im Restaurant im Erdgeschoss.
**Gast:** Wunderbar. Gibt es WLAN im Zimmer?
**Rezeptionist:** Ja, das Passwort steht auf der Zimmerkarte. Ihr Zimmer ist Nummer 305, im dritten Stock.
**Gast:** Wo ist der Aufzug?
**Rezeptionist:** Dort rechts am Ende des Flurs. Einen angenehmen Aufenthalt!
**Gast:** Vielen Dank!`,
      solution: `**Viktige uttrykk:**
- *Ich habe ein Zimmer reserviert, auf den Namen ...* = Jeg har reservert et rom i navnet ...
- *Ist Frühstück inklusive?* = Er frokost inkludert?
- *Gibt es WLAN?* = Er det Wi-Fi?
- *im dritten Stock* = i tredje etasje
- *Einen angenehmen Aufenthalt!* = Et godt opphold!`
    },
    {
      id: 'tysk-1-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse hotellfrasene til tysk.',
        subTasks: [
          { label: 'a', task: 'Jeg har reservert et rom.', solution: 'Ich habe ein Zimmer reserviert.' },
          { label: 'b', task: 'Er frokost inkludert?', solution: 'Ist Frühstück inklusive?' },
          { label: 'c', task: 'Hvor er heisen?', solution: 'Wo ist der Aufzug?' },
          { label: 'd', task: 'Tusen takk!', solution: 'Vielen Dank!' },
        ],
        solution: 'a) Ich habe ein Zimmer reserviert. b) Ist Frühstück inklusive? c) Wo ist der Aufzug? d) Vielen Dank!',
        hints: ['Bruk "habe ... reserviert" (perfektum) for "har reservert"', '"Frokost" pa tysk er "Frühstück"'],
      },
    },
    {
      id: 'tysk-1-14-4-def-3',
      type: 'definition',
      title: 'Beim Arzt (Hos legen)',
      content: `**Nyttige uttrykk hos legen:**

| Tysk | Norsk |
|------|-------|
| Ich habe Schmerzen. | Jeg har smerter. |
| Mir ist schlecht. | Jeg er kvalm. |
| Ich habe Fieber. | Jeg har feber. |
| Ich habe Kopfschmerzen. | Jeg har hodepine. |
| Ich habe Halsschmerzen. | Jeg har vondt i halsen. |
| Seit wann haben Sie die Beschwerden? | Hvor lenge har De hatt plagene? |
| Sind Sie allergisch gegen etwas? | Er De allergisk mot noe? |`
    },
    {
      id: 'tysk-1-14-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Beim Arzt (Hos legen)',
      problem: `Les denne dialogen hos legen:

**Arzt:** Guten Tag, was kann ich für Sie tun?
**Patient:** Guten Tag, Herr Doktor. Ich fühle mich nicht gut. Ich habe seit zwei Tagen Kopfschmerzen und Fieber.
**Arzt:** Haben Sie auch Halsschmerzen?
**Patient:** Ja, ein bisschen. Und ich bin sehr müde.
**Arzt:** Sind Sie allergisch gegen etwas?
**Patient:** Nein, gegen nichts.
**Arzt:** Ich verschreibe Ihnen ein Medikament. Nehmen Sie dreimal täglich eine Tablette.
**Patient:** Wie lange soll ich das Medikament nehmen?
**Arzt:** Fünf Tage. Und trinken Sie viel Wasser und ruhen Sie sich aus.
**Patient:** Danke, Herr Doktor!`,
      solution: `**Viktige uttrykk:**
- *Was kann ich für Sie tun?* = Hva kan jeg gjore for Dem?
- *Ich fühle mich nicht gut.* = Jeg foeler meg ikke bra.
- *seit zwei Tagen* = i to dager (siden to dager)
- *Ich verschreibe Ihnen ...* = Jeg skriver ut til Dem ...
- *dreimal täglich* = tre ganger daglig
- *Ruhen Sie sich aus.* = Hvil Dem.`
    },
    {
      id: 'tysk-1-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du er pa ferie i Tyskland og far vondt i magen. Hvilken setning bruker du hos legen?',
        options: [
          { id: 'a', text: 'Ich habe Kopfschmerzen.', isCorrect: false },
          { id: 'b', text: 'Ich habe Bauchschmerzen.', isCorrect: true },
          { id: 'c', text: 'Ich habe Halsschmerzen.', isCorrect: false },
          { id: 'd', text: 'Ich habe Rückenschmerzen.', isCorrect: false },
        ],
        solution: '"Bauchschmerzen" betyr magesmerter (Bauch = mage). Kopfschmerzen = hodepine, Halsschmerzen = vondt i halsen, Rückenschmerzen = ryggsmerter.',
      },
    },
    {
      id: 'tysk-1-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi oevd pa rollespill i tre situasjoner:

1. **Am Bahnhof** - kjoepe togbilletter, sporr om avgangstider og spor
2. **Im Hotel** - sjekke inn, sporr om fasiliteter
3. **Beim Arzt** - forklare symptomer, forsta legens instruksjoner

Rollespill er en effektiv mate a oeve pa, fordi du laerer a bruke spraket i realistiske situasjoner. Oev gjerne med en medelev!`
    },
    {
      id: 'tysk-1-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en kort dialog (6-8 replikker) pa en togstasjon der du kjoper en billett fra Berlin til Hamburg.',
        subTasks: [
          { label: 'a', task: 'Hilse og si at du vil ha en billett til Hamburg.', solution: 'Guten Tag! Ich möchte eine Fahrkarte nach Hamburg, bitte.' },
          { label: 'b', task: 'Spesifiser at du vil ha tur-retur og sporr om prisen.', solution: 'Hin und zurück, bitte. Was kostet die Fahrkarte?' },
          { label: 'c', task: 'Sporr om fra hvilket spor toget gar og takk for hjelpen.', solution: 'Von welchem Gleis fährt der Zug? ... Vielen Dank! Auf Wiedersehen!' },
        ],
        solution: 'En fullstendig dialog med hoeflige fraser, relevant ordforrad for togstasjonen, og riktig bruk av Sie-form.',
        hints: ['Bruk "Ich möchte ... bitte" for hoeflige foresporsler', 'Husk a sporr om pris med "Was kostet ...?"'],
      },
    },
    {
      id: 'tysk-1-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Du ringer et hotell for a reservere et rom. Hvilken setning er mest passende?',
        options: [
          { id: 'a', text: 'Gib mir ein Zimmer!', isCorrect: false },
          { id: 'b', text: 'Ich will ein Zimmer, jetzt!', isCorrect: false },
          { id: 'c', text: 'Ich möchte gerne ein Doppelzimmer für zwei Nächte reservieren.', isCorrect: true },
          { id: 'd', text: 'Hast du ein Zimmer frei?', isCorrect: false },
        ],
        solution: 'Den korrekte setningen bruker hoeflig form med "möchte gerne" og "reservieren". De andre er enten uhoefilige (a, b) eller for uformelle (d - bruker "du" i stedet for "Sie").',
      },
    },
    {
      id: 'tysk-1-14-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-14-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv en dialog hos legen (8-10 replikker). Du har vaert forkjoelet i tre dager med feber, hoste og hodepine.',
        subTasks: [
          { label: 'a', task: 'Legen hilser og sporr hva som er galt. Du forklarer symptomene dine.', solution: 'Arzt: Guten Tag, was fehlt Ihnen? Patient: Ich bin seit drei Tagen erkältet. Ich habe Fieber, Husten und Kopfschmerzen.' },
          { label: 'b', task: 'Legen sporr om du har andre plager. Du svarer.', solution: 'Arzt: Haben Sie auch Halsschmerzen? Patient: Ja, und mir ist manchmal schwindelig.' },
          { label: 'c', task: 'Legen gir deg rad og skriver ut medisin. Du takker.', solution: 'Arzt: Ich verschreibe Ihnen ein Medikament gegen die Erkältung. Nehmen Sie zweimal täglich eine Tablette und ruhen Sie sich aus. Patient: Vielen Dank, Herr Doktor!' },
        ],
        solution: 'En fullstendig legedialod med riktig medisinsk ordforrad, Sie-form og hoeflige uttrykk.',
        hints: ['Bruk "seit + tidsuttrykk" for a si hvor lenge du har vaert syk', 'Husk Sie-formen: "Haben Sie ...?", "Nehmen Sie ..."'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Rollenspiel', definition: 'Rollespill' },
    { term: 'die Fahrkarte', definition: 'Billett (tog, buss)' },
    { term: 'hin und zurück', definition: 'Tur-retur' },
    { term: 'das Einzelzimmer', definition: 'Enkeltrom' },
    { term: 'das Doppelzimmer', definition: 'Dobbeltrom' },
    { term: 'die Schmerzen', definition: 'Smerter' },
    { term: 'das Medikament', definition: 'Medisin/medikament' },
  ],
};

// ============================================================================
// KAPITTEL 15.1: E-Mails und Briefe - E-poster og brev
// ============================================================================

export const CHAPTER_TYSK_1_15_1: TextbookChapter = {
  id: 'tysk-1-15-1',
  courseId: 'tysk-1',
  chapterNumber: '15.1',
  title: 'E-Mails und Briefe',
  subtitle: 'E-poster og brev',
  description: 'Laer a skrive formelle og uformelle e-poster og brev pa tysk.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive enkle formelle og uformelle e-poster og brev pa tysk'],
  content: [
    {
      id: 'tysk-1-15-1-intro',
      type: 'text',
      content: `## E-Mails und Briefe - E-poster og brev

A skrive e-poster og brev pa tysk er en viktig ferdighet, enten det er til en venn, en vertsfamilie eller en formell henvendelse. Pa tysk skiller man tydelig mellom formelt og uformelt sprak, og det er viktig a vite hvilke hilsener og avslutninger man bruker i ulike situasjoner.`
    },
    {
      id: 'tysk-1-15-1-def-1',
      type: 'definition',
      title: 'Informelle E-Mails (Uformelle e-poster)',
      content: `**Uformelle e-poster** skriver du til venner, familie og jevnaldrende. Du bruker **du/ihr**-formen.

**Hilsener (Anrede):**
- *Liebe/Lieber ...* - Kjaere ... (Liebe til jenter/kvinner, Lieber til gutter/menn)
- *Hallo ...* - Hei ...
- *Hi ...* - Hei ...

**Avslutninger (Grußformel):**
- *Liebe Grüße* - Kjaerlig hilsen
- *Viele Grüße* - Mange hilsener
- *Bis bald!* - Snakkes snart!
- *Dein/Deine ...* - Din ... (Dein til gutter/menn, Deine til jenter/kvinner)

**Viktig:** Pa tysk skrives **du**, **dir**, **dein** osv. med liten bokstav i e-poster (men stor bokstav er ogsa akseptert).`
    },
    {
      id: 'tysk-1-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Uformell e-post til en venn',
      problem: `Les denne uformelle e-posten:

---
**Betreff:** Sommerferien!

Lieber Max,

wie geht es dir? Ich hoffe, es geht dir gut!

Ich schreibe dir, weil ich dir von meinen Sommerferien erzählen möchte. Ich war zwei Wochen in Spanien mit meiner Familie. Das Wetter war super - jeden Tag Sonne und 30 Grad! Wir waren am Strand und haben viel geschwommen.

Was hast du in den Ferien gemacht? Warst du auch im Urlaub?

Schreib mir bald zurück!

Liebe Grüße
Emma
---`,
      solution: `**Struktur i en uformell e-post:**
1. **Betreff (Emne):** Kort beskrivelse av innholdet
2. **Anrede (Hilsen):** "Lieber Max," (komma etter navnet!)
3. **Einleitung:** Sporr hvordan det gar
4. **Hauptteil:** Hovedinnholdet
5. **Frage:** Still et spoersmal tilbake
6. **Schluss:** "Schreib mir bald zurück!" (skriv snart tilbake)
7. **Grußformel:** "Liebe Grüße" + navnet ditt`
    },
    {
      id: 'tysk-1-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hilsen passer best i en uformell e-post til en mannlig venn?',
        options: [
          { id: 'a', text: 'Sehr geehrter Herr Schmidt,', isCorrect: false },
          { id: 'b', text: 'Lieber Max,', isCorrect: true },
          { id: 'c', text: 'Sehr geehrte Damen und Herren,', isCorrect: false },
          { id: 'd', text: 'An die Schulleitung,', isCorrect: false },
        ],
        solution: '"Lieber Max," er riktig for en uformell e-post til en mannlig venn. "Lieber" brukes for gutter/menn, "Liebe" for jenter/kvinner. De andre alternativene er formelle.',
      },
    },
    {
      id: 'tysk-1-15-1-def-2',
      type: 'definition',
      title: 'Formelle E-Mails (Formelle e-poster)',
      content: `**Formelle e-poster** skriver du til laerere, bedrifter, myndigheter og andre du ikke kjenner personlig. Du bruker **Sie**-formen.

**Hilsener (Anrede):**
- *Sehr geehrter Herr [Etternavn],* - AErede herr ...
- *Sehr geehrte Frau [Etternavn],* - AErede fru ...
- *Sehr geehrte Damen und Herren,* - AErede damer og herrer (nar du ikke vet navnet)

**Avslutninger (Grußformel):**
- *Mit freundlichen Grüßen* - Med vennlig hilsen
- *Hochachtungsvoll* - Med hoeyaktelse (veldig formelt)

**Viktig:** Pa tysk skrives **Sie**, **Ihr**, **Ihnen** osv. ALLTID med stor bokstav i formelle e-poster.`
    },
    {
      id: 'tysk-1-15-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Formell e-post til en skole',
      problem: `Les denne formelle e-posten:

---
**Betreff:** Anfrage zum Austauschprogramm

Sehr geehrte Frau Müller,

mein Name ist Lars Olsen und ich bin Schüler an der Nydalen Videregående Schule in Oslo, Norwegen.

Ich schreibe Ihnen, weil ich mich für das Austauschprogramm Ihrer Schule interessiere. Ich lerne seit zwei Jahren Deutsch und möchte gerne ein Semester an Ihrer Schule verbringen.

Könnten Sie mir bitte mehr Informationen über das Programm senden? Ich würde mich auch über Informationen zu den Gastfamilien freuen.

Vielen Dank im Voraus für Ihre Hilfe.

Mit freundlichen Grüßen
Lars Olsen
---`,
      solution: `**Strukturen i en formell e-post:**
1. **Betreff:** Tydelig emne
2. **Anrede:** "Sehr geehrte Frau Müller," (formell hilsen)
3. **Vorstellung:** Presenter deg selv
4. **Anliegen:** Forklar hva du onsker
5. **Höfliche Bitte:** Hoeflig foresporsler ("Könnten Sie ...?")
6. **Dank:** Takk pa forhand
7. **Grußformel:** "Mit freundlichen Grüßen" + fullt navn

**Viktige formelle uttrykk:**
- *Ich schreibe Ihnen, weil ...* = Jeg skriver til Dem fordi ...
- *Könnten Sie mir bitte ...?* = Kunne De vaer sa snill a ...?
- *Vielen Dank im Voraus* = Tusen takk pa forhand`
    },
    {
      id: 'tysk-1-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken avslutning er korrekt i en formell e-post?',
        options: [
          { id: 'a', text: 'Bis bald! Dein Lars', isCorrect: false },
          { id: 'b', text: 'Liebe Grüße, Lars', isCorrect: false },
          { id: 'c', text: 'Mit freundlichen Grüßen\nLars Olsen', isCorrect: true },
          { id: 'd', text: 'Tschüss! Lars', isCorrect: false },
        ],
        solution: '"Mit freundlichen Grüßen" (med vennlig hilsen) er den korrekte formelle avslutningen. De andre er for uformelle for en formell e-post.',
      },
    },
    {
      id: 'tysk-1-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse e-postfrasene til tysk.',
        subTasks: [
          { label: 'a', task: 'Kjaere Anna, (uformelt, til jente)', solution: 'Liebe Anna,' },
          { label: 'b', task: 'Hvordan har du det? (uformelt)', solution: 'Wie geht es dir?' },
          { label: 'c', task: 'Med vennlig hilsen (formelt)', solution: 'Mit freundlichen Grüßen' },
          { label: 'd', task: 'Tusen takk pa forhand. (formelt)', solution: 'Vielen Dank im Voraus.' },
        ],
        solution: 'a) Liebe Anna, b) Wie geht es dir? c) Mit freundlichen Grüßen d) Vielen Dank im Voraus.',
        hints: ['Liebe = til jenter/kvinner, Lieber = til gutter/menn', 'Im Voraus = pa forhand'],
      },
    },
    {
      id: 'tysk-1-15-1-def-3',
      type: 'definition',
      title: 'Nützliche Phrasen für E-Mails (Nyttige e-postfraser)',
      content: `**Innledning:**
- *Danke für deine/Ihre E-Mail.* - Takk for e-posten din/Deres.
- *Es tut mir leid, dass ich erst jetzt antworte.* - Beklager at jeg svarer forst na.

**Hovedinnhold:**
- *Ich möchte dir/Ihnen mitteilen, dass ...* - Jeg vil informere deg/Dem om at ...
- *Ich habe eine Frage zu ...* - Jeg har et spoersmal om ...
- *Ich würde gerne wissen, ob ...* - Jeg vil gjerne vite om ...

**Avslutning:**
- *Ich freue mich auf deine/Ihre Antwort.* - Jeg ser frem til svaret ditt/Deres.
- *Schreib mir bald zurück!* - Skriv snart tilbake! (uformelt)
- *Ich hoffe, bald von Ihnen zu hören.* - Jeg haper a hore fra Dem snart. (formelt)`
    },
    {
      id: 'tysk-1-15-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert:

- **Uformelle e-poster:** "Liebe/Lieber ..." + du-form + "Liebe Grüße"
- **Formelle e-poster:** "Sehr geehrte/r ..." + Sie-form + "Mit freundlichen Grüßen"
- **E-poststruktur:** Betreff → Anrede → Einleitung → Hauptteil → Schluss → Grußformel
- **Viktige forskjeller:** Stor/liten bokstav, ulik tone og ordvalg

Husk: Det er bedre a vaere for formell enn for uformell nar du er usikker!`
    },
    {
      id: 'tysk-1-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en uformell e-post pa tysk til en tysk venn. Fortell om helgen din og still minst to spoersmal.',
        subTasks: [
          { label: 'a', task: 'Skriv hilsen og innledning (2 setninger).', solution: 'Liebe/Lieber [navn], wie geht es dir? Ich hoffe, alles ist gut bei dir!' },
          { label: 'b', task: 'Skriv hoveddelen om helgen din (3-4 setninger).', solution: 'Am Wochenende war ich mit meinen Freunden im Kino. Wir haben einen lustigen Film gesehen. Danach sind wir Pizza essen gegangen. Es war ein toller Tag!' },
          { label: 'c', task: 'Skriv avslutning med spoersmal og hilsen.', solution: 'Was hast du am Wochenende gemacht? Hast du Lust, nächste Woche etwas zusammen zu machen? Schreib mir bald zurück! Liebe Grüße, [ditt navn]' },
        ],
        solution: 'En komplett uformell e-post med riktig hilsen, innledning, hoveddel, spoersmal og avslutning.',
        hints: ['Start med "Liebe/Lieber" + komma', 'Avslutt med "Liebe Grüße" eller "Viele Grüße"'],
      },
    },
    {
      id: 'tysk-1-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken hilsen bruker du nar du skriver en formell e-post og ikke vet navnet pa mottakeren?',
        options: [
          { id: 'a', text: 'Hallo!', isCorrect: false },
          { id: 'b', text: 'Lieber Herr oder Frau,', isCorrect: false },
          { id: 'c', text: 'Sehr geehrte Damen und Herren,', isCorrect: true },
          { id: 'd', text: 'An wen es betrifft,', isCorrect: false },
        ],
        solution: '"Sehr geehrte Damen und Herren," er den korrekte formelle hilsenen nar du ikke vet navnet pa mottakeren. Det tilsvarer "Til rette vedkommende" pa norsk.',
      },
    },
    {
      id: 'tysk-1-15-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv en formell e-post pa tysk til en skole i Tyskland. Du onsker informasjon om et utvekslingsprogram. Bruk riktig formell struktur.',
        subTasks: [
          { label: 'a', task: 'Skriv emne, hilsen og presenter deg selv.', solution: 'Betreff: Anfrage zum Schüleraustausch. Sehr geehrte Damen und Herren, mein Name ist [navn] und ich bin Schüler/Schülerin an einer Schule in Norwegen.' },
          { label: 'b', task: 'Forklar hva du onsker og still et hoeflig spoersmal.', solution: 'Ich interessiere mich für Ihr Austauschprogramm und würde gerne mehr darüber erfahren. Könnten Sie mir bitte Informationen über die Bewerbungsfrist und die Kosten senden?' },
          { label: 'c', task: 'Skriv hoeflig avslutning med takk.', solution: 'Vielen Dank im Voraus für Ihre Hilfe. Ich freue mich auf Ihre Antwort. Mit freundlichen Grüßen, [fullt navn]' },
        ],
        solution: 'En komplett formell e-post med riktig struktur, Sie-form, hoeflige foresporsler og formell avslutning.',
        hints: ['Bruk "Könnten Sie mir bitte ...?" for hoeflige foresporsler', 'Avslutt alltid med "Mit freundlichen Grüßen"'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Betreff', definition: 'Emne (i e-post)' },
    { term: 'die Anrede', definition: 'Hilsen/tiltale (i begynnelsen av brev/e-post)' },
    { term: 'die Grußformel', definition: 'Avslutningshilsen (i slutten av brev/e-post)' },
    { term: 'Sehr geehrte/r', definition: 'AErede (formell hilsen)' },
    { term: 'Mit freundlichen Grüßen', definition: 'Med vennlig hilsen (formell avslutning)' },
    { term: 'Liebe Grüße', definition: 'Kjaerlig hilsen (uformell avslutning)' },
  ],
};

// ============================================================================
// KAPITTEL 15.2: Postkarten und Nachrichten - Postkort og meldinger
// ============================================================================

export const CHAPTER_TYSK_1_15_2: TextbookChapter = {
  id: 'tysk-1-15-2',
  courseId: 'tysk-1',
  chapterNumber: '15.2',
  title: 'Postkarten und Nachrichten',
  subtitle: 'Postkort og meldinger',
  description: 'Laer a skrive postkort fra ferien og korte meldinger pa tysk.',
  estimatedMinutes: 40,
  competenceGoals: ['skrive korte tekster som postkort og meldinger pa tysk'],
  content: [
    {
      id: 'tysk-1-15-2-intro',
      type: 'text',
      content: `## Postkarten und Nachrichten - Postkort og meldinger

Postkort og korte meldinger er noe av det enkleste du kan skrive pa tysk. De krever ikke sa mye tekst, men du ma likevel kunne uttrykke deg klart og riktig. I dette kapittelet laerer du a skrive feriepostkort og hverdagsmeldinger.`
    },
    {
      id: 'tysk-1-15-2-def-1',
      type: 'definition',
      title: 'Die Postkarte (Postkortet)',
      content: `Et typisk tysk postkort inneholder:

1. **Anrede:** Kort hilsen - *Liebe/Lieber ...* eller *Hallo ...*
2. **Ort und Wetter:** Hvor du er og hvordan vaeret er
3. **Aktivitäten:** Hva du har gjort/gjoer
4. **Gefühle:** Hvordan du har det
5. **Grüße:** Avslutningshilsen

**Nyttige uttrykk:**
- *Viele Grüße aus [sted]!* - Mange hilsener fra [sted]!
- *Das Wetter ist ...* - Vaeret er ...
- *Hier ist es sehr schön.* - Her er det veldig fint.
- *Ich vermisse euch!* - Jeg savner dere!
- *Bis bald!* - Pa gjensyn snart!`
    },
    {
      id: 'tysk-1-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Postkort fra ferien',
      problem: `Les dette postkortet:

---
Liebe Oma und lieber Opa,

viele Grüße aus Berlin! Wir sind seit drei Tagen hier und es gefällt uns sehr gut. Das Wetter ist sonnig und warm.

Gestern haben wir das Brandenburger Tor besucht und sind an der Berliner Mauer spazieren gegangen. Heute gehen wir ins Deutsche Museum.

Das Essen hier ist lecker - ich esse jeden Tag Currywurst!

Ich vermisse euch! Bis bald!

Eure Emma
---`,
      solution: `**Strukturen i postkortet:**
1. **Hilsen:** "Liebe Oma und lieber Opa,"
2. **Sted:** "Grüße aus Berlin!"
3. **Vaer:** "sonnig und warm"
4. **Aktiviteter:** Brandenburger Tor, Berliner Mauer, museum
5. **Mat:** Currywurst
6. **Folelser:** "Ich vermisse euch!"
7. **Avslutning:** "Bis bald! Eure Emma"

*Eure = Deres (til flere personer, uformelt)*`
    },
    {
      id: 'tysk-1-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "Viele Grüße aus Berlin"?',
        options: [
          { id: 'a', text: 'Velkommen til Berlin', isCorrect: false },
          { id: 'b', text: 'Mange hilsener fra Berlin', isCorrect: true },
          { id: 'c', text: 'Vi reiser til Berlin', isCorrect: false },
          { id: 'd', text: 'Berlin er en fin by', isCorrect: false },
        ],
        solution: '"Viele Grüße aus Berlin" betyr "Mange hilsener fra Berlin". "Grüße" = hilsener, "aus" = fra.',
      },
    },
    {
      id: 'tysk-1-15-2-def-2',
      type: 'definition',
      title: 'Nachrichten und SMS (Meldinger)',
      content: `**Korte meldinger pa tysk** likner pa norske meldinger - de er uformelle og korte:

**Vanlige forkortelser:**
| Forkortelse | Fullstendig | Norsk |
|-------------|-------------|-------|
| LG | Liebe Grüße | Kh (kjaerlig hilsen) |
| VG | Viele Grüße | Mvh |
| HDL | Hab dich lieb | Glad i deg |
| WE | Wochenende | Helg |
| vllt | vielleicht | kanskje |
| bzgl | bezüglich | angaende |

**Vanlige meldingsfraser:**
- *Hast du Lust auf ...?* - Har du lyst pa ...?
- *Wann und wo treffen wir uns?* - Nar og hvor moetes vi?
- *Bin in 5 Min da.* - Er der om 5 min.
- *Geht klar!* - Det ordner seg! / OK!`
    },
    {
      id: 'tysk-1-15-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Meldingsutveksling',
      problem: `Les denne meldingsutvekslingen mellom to venner:

**Max:** Hey! Hast du morgen Nachmittag Zeit?
**Emma:** Hi! Ja, ab 14 Uhr. Warum?
**Max:** Wollen wir ins Kino gehen? Es läuft ein neuer Film.
**Emma:** Ja, gerne! Welcher Film?
**Max:** Der neue Actionfilm. Er soll gut sein.
**Emma:** Cool! Wann fängt er an?
**Max:** Um 15:30. Treffen wir uns um 15 Uhr vor dem Kino?
**Emma:** Perfekt! Bis morgen dann! :)
**Max:** Bis morgen! LG`,
      solution: `**Typisk for tyske meldinger:**
- Korte setninger
- Uformell tone med "du"
- Forkortelser som "LG"
- Sporr om tid: "Hast du ... Zeit?"
- Foreslaa noe: "Wollen wir ...?"
- Avtale sted og tid: "Treffen wir uns um ... vor ..."
- Bekrefte: "Perfekt!", "Bis morgen!"`
    },
    {
      id: 'tysk-1-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse korte meldingene til tysk.',
        subTasks: [
          { label: 'a', task: 'Har du tid i morgen?', solution: 'Hast du morgen Zeit?' },
          { label: 'b', task: 'Skal vi ga pa kino?', solution: 'Wollen wir ins Kino gehen?' },
          { label: 'c', task: 'Vi moetes klokka 15 foran kinoen.', solution: 'Wir treffen uns um 15 Uhr vor dem Kino.' },
          { label: 'd', task: 'Sees i morgen!', solution: 'Bis morgen!' },
        ],
        solution: 'a) Hast du morgen Zeit? b) Wollen wir ins Kino gehen? c) Wir treffen uns um 15 Uhr vor dem Kino. d) Bis morgen!',
        hints: ['"Ins Kino" = "in das Kino" (sammentrukket form)', '"Vor dem Kino" = foran kinoen (dativ etter "vor")'],
      },
    },
    {
      id: 'tysk-1-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr forkortelsen "HDL" i en tysk melding?',
        options: [
          { id: 'a', text: 'Ha det bra, lansen!', isCorrect: false },
          { id: 'b', text: 'Hab dich lieb (Glad i deg)', isCorrect: true },
          { id: 'c', text: 'Herzlichen Dank, Lieber', isCorrect: false },
          { id: 'd', text: 'Heute der Letzte', isCorrect: false },
        ],
        solution: 'HDL star for "Hab dich lieb" som betyr "Glad i deg". Det er en vanlig forkortelse i tyske meldinger mellom venner og familie.',
      },
    },
    {
      id: 'tysk-1-15-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskjed om a vaere forsinket',
      problem: `Les denne meldingsutvekslingen:

**Emma:** Hey, wo bist du? Wir warten vor dem Restaurant.
**Max:** Sorry! Bin noch im Bus. Komme in 10 Minuten.
**Emma:** OK, kein Problem. Wir gehen schon rein und bestellen Getränke.
**Max:** Super, danke! Bin gleich da!`,
      solution: `**Nyttige uttrykk for a gi beskjed:**
- *Wo bist du?* = Hvor er du?
- *Bin noch im Bus.* = Er fortsatt pa bussen. (kort for "Ich bin ...")
- *Komme in 10 Minuten.* = Kommer om 10 minutter. (kort for "Ich komme ...")
- *Kein Problem.* = Ikke noe problem.
- *Bin gleich da!* = Er snart der!

I meldinger dropper man ofte "Ich" i begynnelsen av setningen.`
    },
    {
      id: 'tysk-1-15-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert a skrive:

- **Postkort:** Hilsen + sted + vaer + aktiviteter + folelser + avslutning
- **Meldinger:** Korte, uformelle tekster med forkortelser
- **Vanlige meldingsfraser:** "Hast du Zeit?", "Wollen wir ...?", "Bis morgen!"
- **Forkortelser:** LG, VG, HDL, vllt

Husk at bade postkort og meldinger er uformelle - bruk du-form og enkle setninger!`
    },
    {
      id: 'tysk-1-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv et postkort pa tysk fra en tenkt ferie. Inkluder sted, vaer, aktiviteter og hilsen.',
        subTasks: [
          { label: 'a', task: 'Skriv hilsen og fortell hvor du er.', solution: 'Liebe Mama, lieber Papa, viele Grüße aus Wien! Wir sind seit zwei Tagen in Österreich.' },
          { label: 'b', task: 'Beskriv vaeret og hva du har gjort.', solution: 'Das Wetter ist wunderbar - sonnig und 25 Grad. Gestern haben wir das Schloss Schönbrunn besucht und Sachertorte gegessen.' },
          { label: 'c', task: 'Avslutt postkortet med folelser og hilsen.', solution: 'Es gefällt mir hier sehr gut! Ich vermisse euch. Bis bald! Eure/Euer [navn]' },
        ],
        solution: 'Et komplett postkort med alle elementer: hilsen, sted, vaer, aktiviteter, folelser og avslutning.',
        hints: ['Bruk perfektum for a fortelle om hva du har gjort: "haben ... besucht"', 'Husk "Viele Grüße aus ..."'],
      },
    },
    {
      id: 'tysk-1-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv en meldingsutveksling (6-8 meldinger) pa tysk der du inviterer en venn til a gjore noe i helgen.',
        subTasks: [
          { label: 'a', task: 'Sporr om vennen har tid i helgen og foreslaa en aktivitet.', solution: 'Hey! Hast du am Wochenende Zeit? Wollen wir schwimmen gehen?' },
          { label: 'b', task: 'Vennen svarer og dere avtaler tid og sted.', solution: 'Ja, gerne! Wann denn? - Samstag um 11 Uhr? Treffen wir uns am Schwimmbad? - Perfekt, passt!' },
          { label: 'c', task: 'Bekreft avtalen og avslutt meldingene.', solution: 'Super! Ich bringe Snacks mit. - Cool, danke! Bis Samstag dann! LG' },
        ],
        solution: 'En naturlig meldingsutveksling med spoersmal, svar, avtale og bekreftelse. Bruk uformelt sprak og vanlige meldingsforkortelser.',
        hints: ['Bruk "Wollen wir ...?" for a foreslaa noe', 'Bruk "Treffen wir uns ..." for a avtale sted'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Postkarte', definition: 'Postkort' },
    { term: 'die Nachricht', definition: 'Melding/beskjed' },
    { term: 'Viele Grüße aus ...', definition: 'Mange hilsener fra ...' },
    { term: 'Ich vermisse dich/euch', definition: 'Jeg savner deg/dere' },
    { term: 'Bis bald!', definition: 'Pa gjensyn snart! / Sees snart!' },
    { term: 'LG (Liebe Grüße)', definition: 'Kh (kjaerlig hilsen) - forkortelse i meldinger' },
  ],
};

// ============================================================================
// KAPITTEL 15.3: Kurze Texte schreiben - Skrive korte tekster
// ============================================================================

export const CHAPTER_TYSK_1_15_3: TextbookChapter = {
  id: 'tysk-1-15-3',
  courseId: 'tysk-1',
  chapterNumber: '15.3',
  title: 'Kurze Texte schreiben',
  subtitle: 'Skrive korte tekster',
  description: 'Laer a skrive korte beskrivelser, blogginnlegg og dagboktekster pa tysk.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive korte sammenhengende tekster pa tysk om kjente emner'],
  content: [
    {
      id: 'tysk-1-15-3-intro',
      type: 'text',
      content: `## Kurze Texte schreiben - Skrive korte tekster

A kunne skrive korte, sammenhengende tekster pa tysk er en sentral ferdighet. Det kan vaere en personbeskrivelse, et blogginnlegg om hobbyen din, eller en dagboktekst om hva du har gjort i dag. Det viktigste er a skrive klart og bruke enkle, korrekte setninger.`
    },
    {
      id: 'tysk-1-15-3-def-1',
      type: 'definition',
      title: 'Textstruktur (Tekststruktur)',
      content: `En god kort tekst pa tysk folger en enkel struktur:

**1. Einleitung (Innledning):** Introduser emnet i 1-2 setninger.
**2. Hauptteil (Hoveddel):** Utvikle emnet med detaljer, eksempler og beskrivelser.
**3. Schluss (Avslutning):** Oppsummer eller gi din mening.

**Tips for gode tekster:**
- Bruk korte, klare setninger
- Bruk bindeord (und, aber, weil, deshalb)
- Varier setningsstrukturen
- Bruk adjektiver for a gjore teksten mer levende`
    },
    {
      id: 'tysk-1-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Personbeskrivelse (Personenbeschreibung)',
      problem: `Les denne personbeskrivelsen:

**Meine beste Freundin**

Meine beste Freundin heißt Sophie. Sie ist 16 Jahre alt und geht in meine Klasse. Sophie hat lange, braune Haare und grüne Augen. Sie ist groß und schlank.

Sophie ist sehr sportlich und freundlich. Sie spielt gerne Volleyball und hört am liebsten Popmusik. Außerdem liest sie viel - besonders Fantasy-Bücher.

Wir kennen uns seit der Grundschule und machen fast alles zusammen. Sophie ist immer für mich da und bringt mich oft zum Lachen. Ich bin froh, dass sie meine Freundin ist!`,
      solution: `**Strukturen i personbeskrivelsen:**
1. **Innledning:** Navn, alder, relasjon
2. **Utseende:** Har, oyne, kroppsbygning
3. **Egenskaper og hobbyer:** Personlighet og interesser
4. **Avslutning:** Forholdet mellom dere, personlig mening

**Nyttige adjektiver:**
- Utseende: groß (hoey), klein (liten), schlank (slank), hübsch (pen)
- Har: lang (langt), kurz (kort), blond, braun, schwarz, rot
- Personlighet: freundlich (vennlig), lustig (morsom), nett (snill), sportlich (sporty)`
    },
    {
      id: 'tysk-1-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord betyr "vennlig" pa tysk?',
        options: [
          { id: 'a', text: 'lustig', isCorrect: false },
          { id: 'b', text: 'freundlich', isCorrect: true },
          { id: 'c', text: 'sportlich', isCorrect: false },
          { id: 'd', text: 'schlank', isCorrect: false },
        ],
        solution: '"Freundlich" betyr "vennlig". Lustig = morsom, sportlich = sporty, schlank = slank.',
      },
    },
    {
      id: 'tysk-1-15-3-def-2',
      type: 'definition',
      title: 'Bindeord og setningskobling',
      content: `For a skrive gode tekster trenger du **Konnektoren** (bindeord) som binder setninger sammen:

**Koordinerende (hovedsetning + hovedsetning):**
| Tysk | Norsk | Eksempel |
|------|-------|----------|
| und | og | Ich spiele Gitarre **und** singe gerne. |
| aber | men | Das Wetter ist kalt, **aber** sonnig. |
| oder | eller | Wir können ins Kino **oder** ins Restaurant gehen. |
| denn | for/fordi | Ich bleibe zu Hause, **denn** ich bin krank. |

**Subordinerende (bisetning - verbet til slutt!):**
| Tysk | Norsk | Eksempel |
|------|-------|----------|
| weil | fordi | Ich lerne Deutsch, **weil** es interessant **ist**. |
| dass | at | Ich finde, **dass** Deutschland schön **ist**. |
| wenn | nar/hvis | **Wenn** ich Zeit **habe**, lese ich gerne. |
| obwohl | selv om | Ich gehe spazieren, **obwohl** es **regnet**. |`
    },
    {
      id: 'tysk-1-15-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Blogginnlegg (Blogbeitrag)',
      problem: `Les dette blogginnlegget:

**Mein Wochenende in Hamburg**

Letztes Wochenende war ich in Hamburg und es war einfach toll! Ich möchte euch davon erzählen.

Am Samstag bin ich früh aufgestanden, weil ich den Fischmarkt besuchen wollte. Der Markt war riesig und es gab frischen Fisch, Obst und Souvenirs. Danach habe ich eine Hafenrundfahrt gemacht. Die Aussicht auf die Speicherstadt war wunderschön!

Am Abend sind wir in ein typisches Restaurant gegangen und haben Hamburger Labskaus gegessen - ein traditionelles Gericht mit Kartoffeln und Fisch. Es hat mir gut geschmeckt, obwohl es etwas komisch aussah.

Am Sonntag haben wir die Elbphilharmonie besichtigt. Das Gebäude ist wirklich beeindruckend! Danach sind wir durch die Altstadt spaziert und haben Kaffee getrunken.

Ich kann Hamburg nur empfehlen. Die Stadt ist lebendig, interessant und hat viel zu bieten!`,
      solution: `**Strukturen i blogginnlegget:**
1. **Overskrift:** Kort og fengslende
2. **Innledning:** Hvor og nar + positiv vurdering
3. **Kronologisk fortelling:** Lordag morgen → lordag kveld → sondag
4. **Detaljer:** Mat, severdigheter, opplevelser
5. **Avslutning:** Personlig anbefaling

**Bindeord brukt:** weil, danach, obwohl, und`
    },
    {
      id: 'tysk-1-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer med verbet i en bisetning med "weil"?',
        options: [
          { id: 'a', text: 'Verbet star pa andre plass som vanlig', isCorrect: false },
          { id: 'b', text: 'Verbet star foerst i setningen', isCorrect: false },
          { id: 'c', text: 'Verbet flyttes til slutten av setningen', isCorrect: true },
          { id: 'd', text: 'Verbet forsvinner', isCorrect: false },
        ],
        solution: 'I bisetninger med "weil", "dass", "wenn" osv. flyttes det boyede verbet til slutten: "Ich lerne Deutsch, weil es interessant IST."',
      },
    },
    {
      id: 'tysk-1-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bind sammen disse setningsparene med det oppgitte bindeordet.',
        subTasks: [
          { label: 'a', task: 'Ich lerne Deutsch. Es macht Spaß. (weil)', solution: 'Ich lerne Deutsch, weil es Spaß macht.' },
          { label: 'b', task: 'Das Wetter ist schlecht. Wir gehen spazieren. (aber)', solution: 'Das Wetter ist schlecht, aber wir gehen spazieren.' },
          { label: 'c', task: 'Ich finde. Deutschland ist schön. (dass)', solution: 'Ich finde, dass Deutschland schön ist.' },
        ],
        solution: 'a) Ich lerne Deutsch, weil es Spaß macht. b) Das Wetter ist schlecht, aber wir gehen spazieren. c) Ich finde, dass Deutschland schön ist.',
        hints: ['Med "weil" og "dass" gar verbet til slutten av bisetningen', 'Med "aber" beholder begge setningene normal ordstilling'],
      },
    },
    {
      id: 'tysk-1-15-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Dagbok (Tagebuch)',
      problem: `Les denne dagbokteksten:

**Montag, 15. März**

Heute war ein guter Tag! In der Schule hatten wir einen Deutschtest, und ich glaube, er ist gut gelaufen. Wir haben Grammatik und Vokabeln geübt, und ich hatte fleißig gelernt.

Nach der Schule bin ich mit meiner Freundin ins Café gegangen. Wir haben heiße Schokolade getrunken und über die Sommerferien gesprochen. Sie möchte nach Deutschland fahren, und ich finde die Idee toll!

Am Abend habe ich ein neues Buch angefangen. Es heißt "Der Vorleser" und ist sehr spannend. Ich bin gespannt, wie es weitergeht.

Jetzt bin ich müde und gehe schlafen. Gute Nacht!`,
      solution: `**Dagboktekstens kjennetegn:**
- **Dato** i overskriften
- **Personlig tone** med "ich"
- **Kronologisk oppbygging:** skole → ettermiddag → kveld
- **Perfektum** for a fortelle om hva som har skjedd: "hatten", "bin ... gegangen", "habe ... getrunken"
- **Folelser og meninger:** "guter Tag", "toll", "spannend", "müde"`
    },
    {
      id: 'tysk-1-15-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert a skrive tre typer korte tekster:

1. **Personbeskrivelse:** Utseende + egenskaper + hobbyer + personlig mening
2. **Blogginnlegg:** Overskrift + innledning + kronologisk hoveddel + avslutning med mening
3. **Dagbok:** Dato + personlige opplevelser i kronologisk rekkefolgje

**Viktige verktoy:**
- Bindeord: und, aber, weil, dass, wenn, obwohl
- Adjektiver for a gjore teksten levende
- Bisetningsstruktur: verbet til slutt etter weil/dass/wenn`
    },
    {
      id: 'tysk-1-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en kort personbeskrivelse (6-8 setninger) av en person du kjenner godt. Inkluder utseende, egenskaper og hobbyer.',
        subTasks: [
          { label: 'a', task: 'Skriv innledning med navn, alder og relasjon.', solution: 'F.eks.: Mein bester Freund heißt Erik. Er ist 17 Jahre alt und wir gehen in die gleiche Klasse.' },
          { label: 'b', task: 'Beskriv utseende og personlighet.', solution: 'F.eks.: Erik hat kurze, blonde Haare und blaue Augen. Er ist groß und sportlich. Er ist immer lustig und freundlich.' },
          { label: 'c', task: 'Skriv om hobbyer og avslutt med din mening.', solution: 'F.eks.: In seiner Freizeit spielt er gerne Fußball und hört Musik. Ich bin froh, dass er mein Freund ist, weil man mit ihm immer Spaß hat.' },
        ],
        solution: 'En fullstendig personbeskrivelse med utseende (Haare, Augen, Größe), egenskaper (freundlich, lustig) og hobbyer.',
        hints: ['Bruk adjektiver for utseende: groß, klein, schlank, blond, braun', 'Bruk "weil" for a forklare hvorfor personen er viktig for deg'],
      },
    },
    {
      id: 'tysk-1-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning har riktig ordstilling?',
        options: [
          { id: 'a', text: 'Ich lerne Deutsch, weil ist es interessant.', isCorrect: false },
          { id: 'b', text: 'Ich lerne Deutsch, weil es interessant ist.', isCorrect: true },
          { id: 'c', text: 'Ich lerne Deutsch, weil es ist interessant.', isCorrect: false },
          { id: 'd', text: 'Ich lerne Deutsch, weil interessant es ist.', isCorrect: false },
        ],
        solution: 'I en bisetning med "weil" gar det boyede verbet ("ist") til slutten av setningen. Riktig: "... weil es interessant ist."',
      },
    },
    {
      id: 'tysk-1-15-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv et kort blogginnlegg pa tysk (8-10 setninger) om en utflukt eller opplevelse. Bruk minst tre ulike bindeord.',
        subTasks: [
          { label: 'a', task: 'Skriv overskrift og innledning (2-3 setninger).', solution: 'F.eks.: Mein Ausflug nach Kopenhagen. Letztes Wochenende war ich mit meiner Familie in Kopenhagen, und es war fantastisch!' },
          { label: 'b', task: 'Skriv hoveddelen med aktiviteter og detaljer (4-5 setninger). Bruk bindeord.', solution: 'F.eks.: Zuerst haben wir den Tivoli besucht, weil mein Bruder Achterbahnen liebt. Danach sind wir zur kleinen Meerjungfrau gegangen, obwohl es geregnet hat. Am Abend haben wir in einem dänischen Restaurant gegessen und Smørrebrød probiert.' },
          { label: 'c', task: 'Skriv avslutning med personlig mening (1-2 setninger).', solution: 'F.eks.: Ich finde, dass Kopenhagen eine tolle Stadt ist. Ich möchte unbedingt noch einmal dorthin fahren!' },
        ],
        solution: 'Et komplett blogginnlegg med overskrift, innledning, kronologisk hoveddel med bindeord (weil, obwohl, und, aber, dass), og personlig avslutning.',
        hints: ['Bruk perfektum for a fortelle om fortiden', 'Varier bindeordene: weil, obwohl, dass, aber, und, deshalb'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Text', definition: 'Tekst' },
    { term: 'die Beschreibung', definition: 'Beskrivelse' },
    { term: 'der Blogbeitrag', definition: 'Blogginnlegg' },
    { term: 'das Tagebuch', definition: 'Dagbok' },
    { term: 'die Konnektoren', definition: 'Bindeord (und, aber, weil, dass, wenn ...)' },
    { term: 'der Nebensatz', definition: 'Bisetning (setning der verbet star til slutt)' },
  ],
};

// ============================================================================
// KAPITTEL 15.4: Kreatives Schreiben - Kreativ skriving
// ============================================================================

export const CHAPTER_TYSK_1_15_4: TextbookChapter = {
  id: 'tysk-1-15-4',
  courseId: 'tysk-1',
  chapterNumber: '15.4',
  title: 'Kreatives Schreiben',
  subtitle: 'Kreativ skriving',
  description: 'Utforsk kreativ skriving pa tysk: dikt, korte historier og fantasitekster.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive kreative tekster pa tysk med bruk av fantasi og spraaklige virkemidler'],
  content: [
    {
      id: 'tysk-1-15-4-intro',
      type: 'text',
      content: `## Kreatives Schreiben - Kreativ skriving

Kreativ skriving handler om a bruke fantasien din og uttrykke deg fritt pa tysk. Du trenger ikke skrive perfekt - det viktigste er a proeve og ha det goy med spraket! I dette kapittelet ser vi pa enkle dikt, korte historier og fantasitekster.`
    },
    {
      id: 'tysk-1-15-4-def-1',
      type: 'definition',
      title: 'Elfchen (Elvedikt)',
      content: `Et **Elfchen** er en enkel diktform med noyaktig 11 ord fordelt pa fem linjer:

- **Linje 1:** 1 ord (farge, egenskap eller folelse)
- **Linje 2:** 2 ord (hva/hvem)
- **Linje 3:** 3 ord (hvor/hva skjer)
- **Linje 4:** 4 ord (mer om emnet / folelse)
- **Linje 5:** 1 ord (avslutning / konklusjon)

Elfchen er en fin mate a begynne med kreativ skriving, fordi det er kort og har klar struktur.`
    },
    {
      id: 'tysk-1-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Elfchen',
      problem: `Her er to eksempler pa Elfchen:

**Elfchen 1: Sommer**
Warm
Die Sonne
scheint am Himmel
Kinder spielen im Garten
Glück

**Elfchen 2: Freundschaft**
Schön
Meine Freundin
lacht mit mir
Wir haben immer Spaß
Zusammen

Proev a skrive ditt eget Elfchen om vinteren!`,
      solution: `Et mulig Elfchen om vinteren:

**Kalt**
**Der Schnee**
**fällt leise nieder**
**Wir trinken heißen Kakao**
**Gemütlich**

Forklaring:
1. Kalt (1 ord - egenskap)
2. Der Schnee (2 ord - hva)
3. fällt leise nieder (3 ord - hva skjer)
4. Wir trinken heißen Kakao (4 ord - mer detalj)
5. Gemütlich (1 ord - folelse/avslutning)`
    },
    {
      id: 'tysk-1-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Elfchen (11-ords dikt) pa tysk om et av disse emnene: Schule (skole), Musik (musikk) eller Natur (natur).',
        subTasks: [
          { label: 'a', task: 'Skriv linje 1 og 2 (1 ord + 2 ord).', solution: 'F.eks. Natur: Grün / Die Bäume' },
          { label: 'b', task: 'Skriv linje 3 og 4 (3 ord + 4 ord).', solution: 'F.eks.: stehen im Wald / Vögel singen ein Lied' },
          { label: 'c', task: 'Skriv linje 5 (1 ord).', solution: 'F.eks.: Frieden (fred)' },
        ],
        solution: 'Et komplett Elfchen med noyaktig 11 ord: 1+2+3+4+1. F.eks.: Grün / Die Bäume / stehen im Wald / Vögel singen ein Lied / Frieden',
        hints: ['Tell ordene noeye: 1-2-3-4-1 = 11 ord totalt', 'Start med et adjektiv eller en folelse'],
      },
    },
    {
      id: 'tysk-1-15-4-def-2',
      type: 'definition',
      title: 'Kurzgeschichte (Korthistorie)',
      content: `En **Kurzgeschichte** (korthistorie) pa nybegynnerniva kan vaere veldig enkel. Bruk disse elementene:

**Struktur:**
1. **Wer?** (Hvem?) - Presenter hovedpersonen
2. **Wo?** (Hvor?) - Beskriv stedet
3. **Was passiert?** (Hva skjer?) - Fortellingen
4. **Ende** (Slutten) - Hvordan det ender

**Nyttige tidsuttrykk:**
- *eines Tages* - en dag
- *plötzlich* - plutselig
- *am nächsten Tag* - neste dag
- *zum Glück* - heldigvis
- *am Ende* - til slutt`
    },
    {
      id: 'tysk-1-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: En kort historie',
      problem: `Les denne korte historien:

**Der verlorene Hund**

Eines Tages ging Anna im Park spazieren. Plötzlich hörte sie ein leises Winseln hinter einem Busch. Sie schaute nach und fand einen kleinen Hund. Er war braun und weiß und sah sehr traurig aus.

"Armer Hund!", sagte Anna. "Wo ist dein Besitzer?" Der Hund hatte ein Halsband mit einer Telefonnummer. Anna rief die Nummer an.

Zehn Minuten später kam ein Mann gerannt. "Bruno! Da bist du ja!", rief er glücklich. "Vielen Dank, dass Sie ihn gefunden haben!"

Anna war froh, dass sie helfen konnte. Am Abend erzählte sie ihrer Familie von dem Abenteuer.`,
      solution: `**Analyse av historien:**
1. **Hvem:** Anna
2. **Hvor:** I parken
3. **Hva skjer:** Anna finner en hund, ringer eieren
4. **Slutt:** Eieren henter hunden, alle er glade

**Spraaklige virkemidler:**
- *Plötzlich* skaper spenning
- Direkte tale: "Armer Hund!" gjor teksten levende
- Folelser: traurig, glücklich, froh
- Kronologisk: eines Tages → plötzlich → zehn Minuten später → am Abend`
    },
    {
      id: 'tysk-1-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr "plötzlich" pa norsk?',
        options: [
          { id: 'a', text: 'Langsomt', isCorrect: false },
          { id: 'b', text: 'Plutselig', isCorrect: true },
          { id: 'c', text: 'Heldigvis', isCorrect: false },
          { id: 'd', text: 'Til slutt', isCorrect: false },
        ],
        solution: '"Plötzlich" betyr "plutselig" og brukes ofte i fortellinger for a skape spenning. Det signaliserer at noe uventet skjer.',
      },
    },
    {
      id: 'tysk-1-15-4-def-3',
      type: 'definition',
      title: 'Beschreibende Adjektive (Beskrivende adjektiver)',
      content: `For a gjore kreative tekster mer levende, bruk mange **adjektiver**:

**Folelser:**
| Tysk | Norsk |
|------|-------|
| glücklich | lykkelig |
| traurig | trist |
| aufgeregt | begeistret/spent |
| ängstlich | engstelig |
| überrascht | overrasket |
| neugierig | nysgjerrig |

**Stemning og atmosfaere:**
| Tysk | Norsk |
|------|-------|
| gemütlich | koselig/hyggelig |
| geheimnisvoll | mystisk |
| still | stille |
| laut | hoey (lyd) |
| dunkel | mork |
| hell | lys |`
    },
    {
      id: 'tysk-1-15-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fantasitekst med bilder',
      problem: `Beskriv dette bildet med en kort tekst:

*Tenk deg: Et gammelt slott pa en hoey fjelltopp, omgitt av tykt taake. Det er kveld, og et ensomt lys skinner i et av vinduene.*

Her er en mulig tekst:

**Das geheimnisvolle Schloss**

Auf einem hohen Berg steht ein altes Schloss. Es ist Abend und dichter Nebel umgibt das Gebäude. Alles ist still und dunkel - nur in einem Fenster im höchsten Turm scheint ein einsames Licht.

Wer lebt dort oben? Ist es ein alter König? Eine geheimnisvolle Hexe? Oder vielleicht ein Forscher, der ein großes Geheimnis hütet?

Niemand im Dorf wagt es, den Berg hinaufzugehen. Aber eines Nachts beschließt ein mutiges Mädchen, das Rätsel zu lösen ...`,
      solution: `**Virkemidler i fantasiteksten:**
- **Stemningsbeskrivelse:** still, dunkel, Nebel (taake), einsames Licht
- **Retoriske spoersmal:** "Wer lebt dort oben?" - skaper nysgjerrighet
- **Spenning:** "Niemand wagt es ..." + et modig jente
- **Aapen slutt:** "..." - leseren kan fantasere videre

Legg merke til at selv med enkelt sprak kan man skape en stemning!`
    },
    {
      id: 'tysk-1-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre setninger som beskriver en stemning. Velg et av disse stedene: en mork skog, en solskinnsdag pa stranda, eller et marked om julen.',
        subTasks: [
          { label: 'a', task: 'Beskriv hva du ser.', solution: 'F.eks. (skog): Hohe, dunkle Bäume stehen überall. Ein schmaler Pfad führt tiefer in den Wald.' },
          { label: 'b', task: 'Beskriv hva du hoerer.', solution: 'F.eks.: Es ist sehr still. Nur manchmal hört man einen Vogel rufen.' },
          { label: 'c', task: 'Beskriv en folelse.', solution: 'F.eks.: Man fühlt sich klein und ein bisschen ängstlich.' },
        ],
        solution: 'Tre setninger som sammen skaper en stemning med bruk av adjektiver og sanseinntrykk.',
        hints: ['Bruk adjektiver som dunkel, hell, still, laut, warm, kalt', 'Beskriv flere sanser: syn, horsel, folelse'],
      },
    },
    {
      id: 'tysk-1-15-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi oevd pa kreativ skriving:

1. **Elfchen:** Enkle 11-ords dikt med fast struktur (1-2-3-4-1)
2. **Kurzgeschichte:** Kort fortelling med hvem, hvor, hva skjer og slutt
3. **Fantasitekst:** Stemningsbeskrivelser med adjektiver og sanseinntrykk

**Viktige verktoy for kreativ skriving:**
- Tidsuttrykk: eines Tages, plötzlich, am Ende
- Stemningsord: geheimnisvoll, still, dunkel, gemütlich
- Folelseord: glücklich, traurig, aufgeregt, neugierig`
    },
    {
      id: 'tysk-1-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv begynnelsen av en kort historie (5-7 setninger) pa tysk. Bruk tidsuttrykk og adjektiver for a skape stemning.',
        subTasks: [
          { label: 'a', task: 'Introduser hovedpersonen og stedet (2 setninger).', solution: 'F.eks.: Es war ein kalter Winterabend. Die 16-jährige Lena ging allein durch die dunkle Stadt.' },
          { label: 'b', task: 'La noe uventet skje (2-3 setninger). Bruk "plötzlich".', solution: 'F.eks.: Plötzlich hörte sie Musik. Sie kam aus einem alten Haus am Ende der Straße. Neugierig ging Lena näher.' },
          { label: 'c', task: 'Lag en spennende avslutning eller cliffhanger (1-2 setninger).', solution: 'F.eks.: Die Tür des Hauses stand offen. Was würde sie dort drinnen finden?' },
        ],
        solution: 'En kort fortelling med tydelig setting, spenningselement (plötzlich) og en cliffhanger.',
        hints: ['Start med tid og sted: "Es war ein ... Tag/Abend"', 'Bruk "plötzlich" for a introdusere noe uventet'],
      },
    },
    {
      id: 'tysk-1-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse ordene betyr "nysgjerrig" pa tysk?',
        options: [
          { id: 'a', text: 'ängstlich', isCorrect: false },
          { id: 'b', text: 'glücklich', isCorrect: false },
          { id: 'c', text: 'neugierig', isCorrect: true },
          { id: 'd', text: 'überrascht', isCorrect: false },
        ],
        solution: '"Neugierig" betyr "nysgjerrig". Ängstlich = engstelig, glücklich = lykkelig, überrascht = overrasket.',
      },
    },
    {
      id: 'tysk-1-15-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-15-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv to ulike Elfchen pa tysk - ett om en positiv folelse og ett om en negativ folelse.',
        subTasks: [
          { label: 'a', task: 'Skriv et Elfchen om glaede (Freude) eller kjaerlighet (Liebe).', solution: 'F.eks.: Warm / Dein Lächeln / macht mich glücklich / Ich bin so froh / Liebe' },
          { label: 'b', task: 'Skriv et Elfchen om tristhet (Traurigkeit) eller ensomhet (Einsamkeit).', solution: 'F.eks.: Grau / Der Himmel / weint leise Tränen / Ich sitze hier allein / Sehnsucht' },
        ],
        solution: 'To Elfchen med korrekt struktur (1-2-3-4-1 = 11 ord) som formidler ulike stemninger gjennom ordvalg og bilder.',
        hints: ['Husk strukturen: 1 ord - 2 ord - 3 ord - 4 ord - 1 ord', 'Bruk stemningsord som passer foelsen: warm/kalt, hell/dunkel, Lachen/Weinen'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Elfchen', definition: 'Elvedikt - en diktform med 11 ord (1-2-3-4-1)' },
    { term: 'die Kurzgeschichte', definition: 'Korthistorie' },
    { term: 'plötzlich', definition: 'Plutselig - brukes for a skape spenning' },
    { term: 'geheimnisvoll', definition: 'Mystisk/hemmelighetsfullt' },
    { term: 'neugierig', definition: 'Nysgjerrig' },
    { term: 'eines Tages', definition: 'En dag (tidsuttrykk for fortellinger)' },
  ],
};

// ============================================================================
// KAPITTEL 16.1: Grammatiküberblick - Grammatikkoversikt
// ============================================================================

export const CHAPTER_TYSK_1_16_1: TextbookChapter = {
  id: 'tysk-1-16-1',
  courseId: 'tysk-1',
  chapterNumber: '16.1',
  title: 'Grammatiküberblick',
  subtitle: 'Grammatikkoversikt',
  description: 'Repetisjon av all grammatikk fra tysk niva 1: artikler, verb, kasus, preposisjoner og ordstilling.',
  estimatedMinutes: 60,
  competenceGoals: ['beherske grunnleggende tysk grammatikk inkludert artikler, verbboying, kasus og ordstilling'],
  content: [
    {
      id: 'tysk-1-16-1-intro',
      type: 'text',
      content: `## Grammatiküberblick - Grammatikkoversikt

I dette kapittelet repeterer vi ALL grammatikk fra tysk niva 1. Bruk dette kapittelet som et oppslagsverk og en repetisjonsguide. Vi gjennomgar artikler (der/die/das), verbboying i presens, kasus (Nominativ, Akkusativ, Dativ), preposisjoner og ordstilling.`
    },
    {
      id: 'tysk-1-16-1-def-1',
      type: 'definition',
      title: 'Artikel (Artikler: der, die, das)',
      content: `Pa tysk har alle substantiver et grammatisk kjonn. Det finnes tre kjonn:

| Kjonn | Bestemt artikkel | Ubestemt artikkel | Eksempel |
|-------|-----------------|-------------------|----------|
| Maskulin (hankjonn) | **der** | **ein** | der Tisch (bordet) |
| Feminin (hunkjonn) | **die** | **eine** | die Lampe (lampen) |
| Nøytrum (inkjekonn) | **das** | **ein** | das Buch (boken) |
| Flertall | **die** | **-** | die Bücher (bokene) |

**Tips for a huske kjoennet:**
- De fleste ord pa **-ung**, **-heit**, **-keit**, **-schaft**, **-tion** er feminin (die)
- De fleste ord pa **-chen** og **-lein** er noytrum (das)
- Dager, maneder og arstider er maskulin (der)
- Du ma laere kjoennet sammen med hvert nytt ord!`
    },
    {
      id: 'tysk-1-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Artikler i praksis',
      problem: `Sett inn riktig bestemt artikkel (der, die eller das):

1. ___ Schule (skole)
2. ___ Lehrer (laerer)
3. ___ Kind (barn)
4. ___ Zeitung (avis)
5. ___ Mädchen (jente)
6. ___ Montag (mandag)`,
      solution: `1. **die** Schule (feminin - ord pa -e er ofte feminin)
2. **der** Lehrer (maskulin - mannlig person)
3. **das** Kind (noytrum)
4. **die** Zeitung (feminin - ord pa -ung er alltid feminin)
5. **das** Mädchen (noytrum - ord pa -chen er alltid noytrum, selv om det betyr "jente"!)
6. **der** Montag (maskulin - ukedager er alltid maskuline)`
    },
    {
      id: 'tysk-1-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken artikkel er riktig: ___ Wohnung (leilighet)?',
        options: [
          { id: 'a', text: 'der Wohnung', isCorrect: false },
          { id: 'b', text: 'die Wohnung', isCorrect: true },
          { id: 'c', text: 'das Wohnung', isCorrect: false },
          { id: 'd', text: 'ein Wohnung', isCorrect: false },
        ],
        solution: 'Die Wohnung. Ord som slutter pa -ung er ALLTID feminin (die) pa tysk. Andre eksempler: die Zeitung, die Übung, die Werbung.',
      },
    },
    {
      id: 'tysk-1-16-1-def-2',
      type: 'definition',
      title: 'Verbkonjugation im Präsens (Verbboying i presens)',
      content: `Tyske verb boyes etter person i presens. De fleste verb folger et fast monster:

**Regelmessige verb (f.eks. spielen - a spille):**

| Person | Ending | Eksempel |
|--------|--------|----------|
| ich | -e | ich spiel**e** |
| du | -st | du spiel**st** |
| er/sie/es | -t | er spiel**t** |
| wir | -en | wir spiel**en** |
| ihr | -t | ihr spiel**t** |
| sie/Sie | -en | sie spiel**en** |

**Viktige uregelrette verb:**

| | sein (vaere) | haben (ha) | werden (bli) |
|---|---|---|---|
| ich | bin | habe | werde |
| du | bist | hast | wirst |
| er/sie/es | ist | hat | wird |
| wir | sind | haben | werden |
| ihr | seid | habt | werdet |
| sie/Sie | sind | haben | werden |

**Verb med vokalskifte (sterke verb):**
- **fahren** (a kjore): du f**ä**hrst, er f**ä**hrt
- **sprechen** (a snakke): du spr**i**chst, er spr**i**cht
- **lesen** (a lese): du l**ie**st, er l**ie**st
- **geben** (a gi): du g**i**bst, er g**i**bt`
    },
    {
      id: 'tysk-1-16-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Verbboying',
      problem: `Boy disse verbene i alle personer i presens:

1. **kommen** (a komme)
2. **essen** (a spise) - vokalskifte: e → i`,
      solution: `1. **kommen** (regelmessig):
ich komme, du kommst, er/sie/es kommt, wir kommen, ihr kommt, sie/Sie kommen

2. **essen** (vokalskifte e → i i 2. og 3. person entall):
ich esse, du **isst**, er/sie/es **isst**, wir essen, ihr esst, sie/Sie essen

Merk: "du isst" og "er isst" har vokalskifte fra e til i!`
    },
    {
      id: 'tysk-1-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn riktig form av verbet i parentes.',
        subTasks: [
          { label: 'a', task: 'Er ___ (sprechen) gut Deutsch.', solution: 'Er spricht gut Deutsch. (vokalskifte e → i)' },
          { label: 'b', task: 'Wir ___ (haben) ein neues Auto.', solution: 'Wir haben ein neues Auto.' },
          { label: 'c', task: 'Du ___ (fahren) morgen nach Berlin.', solution: 'Du fährst morgen nach Berlin. (vokalskifte a → ä)' },
          { label: 'd', task: 'Ich ___ (sein) 16 Jahre alt.', solution: 'Ich bin 16 Jahre alt.' },
        ],
        solution: 'a) spricht b) haben c) fährst d) bin',
        hints: ['Noen verb har vokalskifte i du- og er/sie/es-formen', 'Sein (vaere) er helt uregelrett'],
      },
    },
    {
      id: 'tysk-1-16-1-def-3',
      type: 'definition',
      title: 'Die Fälle / Kasus (Grammatiske kasus)',
      content: `Tysk har fire kasus som pavirker artiklene og pronomenene:

**Nominativ** - subjektet (hvem/hva gjoer noe):
*__Der__ Mann liest ein Buch.* (Mannen leser en bok.)

**Akkusativ** - det direkte objektet (hvem/hva det gjoeres med):
*Ich sehe __den__ Mann.* (Jeg ser mannen.)

**Dativ** - det indirekte objektet (til hvem/for hvem):
*Ich gebe __dem__ Mann ein Buch.* (Jeg gir mannen en bok.)

| | Maskulin | Feminin | Noytrum | Flertall |
|---|---|---|---|---|
| **Nominativ** | der / ein | die / eine | das / ein | die / - |
| **Akkusativ** | **den / einen** | die / eine | das / ein | die / - |
| **Dativ** | **dem / einem** | **der / einer** | **dem / einem** | **den / -** (+n) |

**Merk:** Bare maskulin endres i akkusativ (der → den). I dativ endres alle kjonn.`
    },
    {
      id: 'tysk-1-16-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Kasus i bruk',
      problem: `Bestem hvilken kasus som brukes i disse setningene og forklar hvorfor:

1. **Der** Hund schläft. (Hunden sover.)
2. Ich sehe **den** Hund. (Jeg ser hunden.)
3. Ich gebe **dem** Hund Futter. (Jeg gir hunden mat.)
4. Sie kauft **eine** Jacke. (Hun kjoper en jakke.)`,
      solution: `1. **Nominativ** - "der Hund" er subjektet (hvem sover? → hunden)
2. **Akkusativ** - "den Hund" er direkte objekt (hvem ser jeg? → hunden). Der → den.
3. **Dativ** - "dem Hund" er indirekte objekt (til hvem gir jeg mat? → til hunden). Der → dem.
4. **Akkusativ** - "eine Jacke" er direkte objekt. Feminin endres ikke i akkusativ (eine forblir eine).`
    },
    {
      id: 'tysk-1-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Velg riktig form: "Ich gebe ___ Frau ein Geschenk." (Jeg gir kvinnen en gave.)',
        options: [
          { id: 'a', text: 'die Frau', isCorrect: false },
          { id: 'b', text: 'der Frau', isCorrect: true },
          { id: 'c', text: 'den Frau', isCorrect: false },
          { id: 'd', text: 'dem Frau', isCorrect: false },
        ],
        solution: '"Der Frau" er riktig fordi "Frau" er indirekte objekt (til hvem gir jeg gaven?). Feminin i dativ: die → der. Merk: "dem" brukes for maskulin/noytrum i dativ, ikke for feminin.',
      },
    },
    {
      id: 'tysk-1-16-1-def-4',
      type: 'definition',
      title: 'Präpositionen und Wortstellung (Preposisjoner og ordstilling)',
      content: `**Preposisjoner styrer kasus:**

**Akkusativ-preposisjoner:** für, gegen, ohne, um, durch, bis
- *Ich kaufe ein Geschenk __für den__ Lehrer.* (for laereren)

**Dativ-preposisjoner:** mit, von, zu, aus, bei, nach, seit, gegenüber
- *Ich fahre __mit dem__ Bus.* (med bussen)

**Vekselpreposisjoner** (akkusativ ved bevegelse, dativ ved sted):
in, an, auf, über, unter, vor, hinter, neben, zwischen
- *Ich gehe __in den__ Park.* (akkusativ - bevegelse)
- *Ich bin __im__ (in dem) Park.* (dativ - sted)

**Ordstilling i hovedsetninger:**
Verbet star ALLTID pa andre plass: **Subjekt - VERB - resten**
- *Ich __spiele__ gerne Fußball.*
- *Morgen __fahre__ ich nach Berlin.* (Tidsuttrykk forst → verbet fortsatt pa plass 2)`
    },
    {
      id: 'tysk-1-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi repetert:

1. **Artikler:** der (m), die (f), das (n), die (fl)
2. **Verbboying:** Regelmessige verb + vokalskifte + uregelrette (sein, haben)
3. **Kasus:** Nominativ (subjekt), Akkusativ (direkte objekt), Dativ (indirekte objekt)
4. **Preposisjoner:** Akkusativ-prep., Dativ-prep., vekselpreposisjoner
5. **Ordstilling:** Verbet alltid pa andre plass i hovedsetninger

Dette er grunnmuren i tysk grammatikk - oev jevnlig!`
    },
    {
      id: 'tysk-1-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Sett inn riktig artikkel (bestemt) i riktig kasus.',
        subTasks: [
          { label: 'a', task: '___ Lehrer (m) gibt ___ Schülerin (f) ein Buch. (Laereren gir eleven en bok.)', solution: 'Der Lehrer gibt der Schülerin ein Buch. (Nominativ maskulin + Dativ feminin)' },
          { label: 'b', task: 'Ich sehe ___ Film (m) mit ___ Freunden (fl). (Jeg ser filmen med vennene.)', solution: 'Ich sehe den Film mit den Freunden. (Akkusativ maskulin + Dativ flertall)' },
          { label: 'c', task: '___ Kind (n) geht in ___ Schule (f). (Barnet gar til skolen.)', solution: 'Das Kind geht in die Schule. (Nominativ noytrum + Akkusativ feminin - bevegelse med "in")' },
        ],
        solution: 'a) Der ... der b) den ... den c) Das ... die',
        hints: ['Nominativ = subjekt, Akkusativ = direkte objekt, Dativ = indirekte objekt', 'Etter "mit" brukes alltid dativ'],
      },
    },
    {
      id: 'tysk-1-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken setning har riktig ordstilling?',
        options: [
          { id: 'a', text: 'Morgen ich fahre nach Hamburg.', isCorrect: false },
          { id: 'b', text: 'Morgen fahre ich nach Hamburg.', isCorrect: true },
          { id: 'c', text: 'Ich morgen fahre nach Hamburg.', isCorrect: false },
          { id: 'd', text: 'Fahre ich morgen nach Hamburg.', isCorrect: false },
        ],
        solution: '"Morgen fahre ich nach Hamburg." er riktig. Pa tysk star verbet ALLTID pa andre plass. Nar et tidsuttrykk (morgen) star foerst, ma verbet (fahre) komme pa andre plass, og subjektet (ich) flyttes etter verbet.',
      },
    },
    {
      id: 'tysk-1-16-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Rett feilene i disse setningene. Hver setning har en grammatikkfeil.',
        subTasks: [
          { label: 'a', task: 'Er sprecht gut Deutsch.', solution: 'Er spricht gut Deutsch. (vokalskifte: sprechen → spricht i 3. person)' },
          { label: 'b', task: 'Ich sehe der Mann.', solution: 'Ich sehe den Mann. (Akkusativ maskulin: der → den)' },
          { label: 'c', task: 'Ich fahre mit der Bus.', solution: 'Ich fahre mit dem Bus. ("mit" krever dativ: der → dem for maskulin)' },
          { label: 'd', task: 'Gestern ich habe Fußball gespielt.', solution: 'Gestern habe ich Fußball gespielt. (Verbet pa andre plass: "Gestern habe ich ...")' },
        ],
        solution: 'a) spricht (vokalskifte) b) den Mann (akkusativ) c) dem Bus (dativ etter mit) d) Gestern habe ich ... (verb pa plass 2)',
        hints: ['Sjekk verbboying, kasus og ordstilling', 'Husk: verbet star alltid pa andre plass'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Artikel', definition: 'Artikkel (der/die/das)' },
    { term: 'die Konjugation', definition: 'Verbboying' },
    { term: 'der Nominativ', definition: 'Foerste kasus - subjektet i setningen' },
    { term: 'der Akkusativ', definition: 'Fjerde kasus - direkte objekt' },
    { term: 'der Dativ', definition: 'Tredje kasus - indirekte objekt' },
    { term: 'die Präposition', definition: 'Preposisjon (mit, für, in, an, auf ...)' },
    { term: 'die Wortstellung', definition: 'Ordstilling - verbet star pa andre plass i hovedsetninger' },
  ],
};

// ============================================================================
// KAPITTEL 16.2: Wortbildung - Orddannelse
// ============================================================================

export const CHAPTER_TYSK_1_16_2: TextbookChapter = {
  id: 'tysk-1-16-2',
  courseId: 'tysk-1',
  chapterNumber: '16.2',
  title: 'Wortbildung',
  subtitle: 'Orddannelse',
  description: 'Laer om sammensatte ord, forstavelser og endelser pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: ['forsta og danne sammensatte ord og bruke forstavelser og endelser pa tysk'],
  content: [
    {
      id: 'tysk-1-16-2-intro',
      type: 'text',
      content: `## Wortbildung - Orddannelse

Tysk er kjent for sine lange, sammensatte ord. Men frykt ikke - nar du foerst forstar reglene for orddannelse, kan du bade forsta og lage nye ord selv! I dette kapittelet laerer du om sammensatte ord (Komposita), forstavelser (Vorsilben) og endelser (Nachsilben).`
    },
    {
      id: 'tysk-1-16-2-def-1',
      type: 'definition',
      title: 'Komposita (Sammensatte ord)',
      content: `Pa tysk kan du sette sammen to eller flere ord til ett nytt ord. Det siste ordet bestemmer kjoennet og grunnbetydningen:

**Regel: Bestemmelsesord + Grunnord = Sammensatt ord**

| Ord 1 | + | Ord 2 | = | Sammensatt ord | Betydning |
|-------|---|-------|---|----------------|-----------|
| Haus | + | Tür | = | die Haus**tür** | Husdoren |
| Schlaf | + | Zimmer | = | das Schlaf**zimmer** | Soverommet |
| Geburts | + | Tag | = | der Geburts**tag** | Bursdagen |
| Kühl | + | Schrank | = | der Kühl**schrank** | Kjoleskapet |
| Kranken | + | Haus | = | das Kranken**haus** | Sykehuset |

**Det siste ordet (grunnordet) bestemmer:**
1. **Kjoennet:** die Haus**tür** (die fordi Tür er feminin)
2. **Grunnbetydningen:** Schlaf**zimmer** er et rom (Zimmer), ikke en sovn (Schlaf)`
    },
    {
      id: 'tysk-1-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forsta sammensatte ord',
      problem: `Proev a forstaa disse sammensatte ordene ved a dele dem opp:

1. Handschuh
2. Kühlschrank
3. Fahrkarte
4. Fußballweltmeisterschaft`,
      solution: `1. **Hand** + **Schuh** = Hand + sko = hanske (bokstavelig: "handsko")
2. **Kühl** + **Schrank** = kjoel + skap = kjoleskap
3. **Fahr** + **Karte** = kjore + kort = billett (reisekort)
4. **Fuß** + **ball** + **welt** + **meister** + **schaft** = fot + ball + verden + mester + skap = fotball-verdensmesterskap

Legg merke til at du kan dele opp selv det lengste ordet i kjente deler!`
    },
    {
      id: 'tysk-1-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken artikkel har det sammensatte ordet "Haustür" (husdor)?',
        options: [
          { id: 'a', text: 'der (fordi Haus er das, men Tür er die)', isCorrect: false },
          { id: 'b', text: 'das (fordi Haus er das)', isCorrect: false },
          { id: 'c', text: 'die (fordi det siste ordet Tür er feminin)', isCorrect: true },
          { id: 'd', text: 'Man kan velge selv', isCorrect: false },
        ],
        solution: 'Die Haustür. Det SISTE ordet i et sammensatt ord bestemmer kjoennet. Tür er feminin (die), sa Haustür er ogsa feminin (die).',
      },
    },
    {
      id: 'tysk-1-16-2-def-2',
      type: 'definition',
      title: 'Vorsilben (Forstavelser / Prefikser)',
      content: `**Forstavelser** legges til foran et ord og endrer betydningen:

**un-** (negasjon, det motsatte):
- freundlich (vennlig) → **un**freundlich (uvennlig)
- möglich (mulig) → **un**möglich (umulig)
- glücklich (lykkelig) → **un**glücklich (ulykkelig)

**Delbare verbforstavelser** (skilles fra verbet i presens):
- **an**rufen (a ringe): Ich **rufe** dich **an**. (Jeg ringer deg.)
- **auf**stehen (a sta opp): Ich **stehe** um 7 Uhr **auf**. (Jeg star opp kl. 7.)
- **ein**kaufen (a handle): Wir **kaufen** im Supermarkt **ein**. (Vi handler i butikken.)
- **mit**bringen (a ta med): **Bring** bitte Brot **mit**! (Ta med brod!)
- **zurück**kommen (a komme tilbake): Wann **kommst** du **zurück**? (Nar kommer du tilbake?)`
    },
    {
      id: 'tysk-1-16-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Delbare verb i setninger',
      problem: `Sett inn det delbare verbet i riktig form:

1. (aufstehen) Ich ___ jeden Morgen um 7 Uhr ___.
2. (einkaufen) Meine Mutter ___ im Supermarkt ___.
3. (anrufen) ___ du mich heute Abend ___?
4. (mitbringen) Er ___ immer Kuchen ___.`,
      solution: `1. Ich **stehe** jeden Morgen um 7 Uhr **auf**.
2. Meine Mutter **kauft** im Supermarkt **ein**.
3. **Rufst** du mich heute Abend **an**?
4. Er **bringt** immer Kuchen **mit**.

**Regelen:** I presens deles verbet. Den boyede delen star pa andre plass, forstavelsen gar til slutten av setningen.`
    },
    {
      id: 'tysk-1-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setninger med disse delbare verbene i presens.',
        subTasks: [
          { label: 'a', task: 'fernsehen (a se pa TV) - ich', solution: 'Ich sehe jeden Abend fern.' },
          { label: 'b', task: 'zurückkommen (a komme tilbake) - er', solution: 'Er kommt morgen zurück.' },
          { label: 'c', task: 'aufräumen (a rydde) - wir', solution: 'Wir räumen das Zimmer auf.' },
        ],
        solution: 'a) Ich sehe ... fern. b) Er kommt ... zurück. c) Wir räumen ... auf.',
        hints: ['Husk: den boyede delen pa plass 2, forstavelsen til slutt', 'Boy verbet etter person: ich -e, er -t, wir -en'],
      },
    },
    {
      id: 'tysk-1-16-2-def-3',
      type: 'definition',
      title: 'Nachsilben (Endelser / Suffikser)',
      content: `**Endelser** legges til etter et ord og kan endre ordklasse og kjoenn:

**Substantivendelser:**
| Endelse | Kjoenn | Eksempel |
|---------|--------|----------|
| -ung | die (feminin) | die Wohn**ung** (leilighet), die Üb**ung** (oevelse) |
| -heit | die (feminin) | die Frei**heit** (frihet), die Krank**heit** (sykdom) |
| -keit | die (feminin) | die Möglich**keit** (mulighet) |
| -schaft | die (feminin) | die Freund**schaft** (vennskap) |
| -er | der (maskulin) | der Lehr**er** (laerer), der Arbeit**er** (arbeider) |
| -in | die (feminin) | die Lehrer**in** (kvinnelig laerer) |
| -chen | das (noytrum) | das Mäd**chen** (jente), das Häus**chen** (lite hus) |

**Adjektivendelser:**
| Endelse | Eksempel |
|---------|----------|
| -lich | freund**lich** (vennlig), herz**lich** (hjertelig) |
| -ig | sonn**ig** (solrikt), lust**ig** (morsom) |
| -isch | typ**isch** (typisk), norweg**isch** (norsk) |`
    },
    {
      id: 'tysk-1-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kjoennet til ordet "Freundschaft" (vennskap)?',
        options: [
          { id: 'a', text: 'der (maskulin)', isCorrect: false },
          { id: 'b', text: 'die (feminin)', isCorrect: true },
          { id: 'c', text: 'das (noytrum)', isCorrect: false },
          { id: 'd', text: 'Det kan vaere alle tre', isCorrect: false },
        ],
        solution: 'Die Freundschaft. Ord med endelsen -schaft er ALLTID feminin (die). Andre eksempler: die Landschaft, die Wissenschaft, die Mannschaft.',
      },
    },
    {
      id: 'tysk-1-16-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Lag nye ord med endelser',
      problem: `Bruk endelser til a lage nye ord:

1. Freund (venn) + -schaft → ?
2. krank (syk) + -heit → ?
3. Lehrer (laerer) + -in → ?
4. Haus (hus) + -chen → ?`,
      solution: `1. Freund + -schaft = **die Freundschaft** (vennskap)
2. krank + -heit = **die Krankheit** (sykdom)
3. Lehrer + -in = **die Lehrerin** (kvinnelig laerer)
4. Haus + -chen = **das Häuschen** (lite hus - med Umlaut!)

Merk at -chen ofte gir Umlaut: Haus → Häuschen, Hund → Hündchen`
    },
    {
      id: 'tysk-1-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om tre mater a danne nye ord pa tysk:

1. **Sammensatte ord (Komposita):** Sett sammen to+ ord. Siste ord bestemmer kjoenn og betydning.
2. **Forstavelser (Vorsilben):** un- (negasjon), og delbare verb (auf-, an-, ein-, mit-, zurück-)
3. **Endelser (Nachsilben):** -ung/-heit/-keit/-schaft (die), -er (der), -chen (das), -lich/-ig/-isch (adj.)

Med disse verktoyene kan du forsta og danne hundrevis av nye tyske ord!`
    },
    {
      id: 'tysk-1-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Del opp disse sammensatte ordene og forklar betydningen.',
        subTasks: [
          { label: 'a', task: 'Schlafzimmer', solution: 'Schlaf (sovn) + Zimmer (rom) = soverom. Artikkel: das (fordi Zimmer er noytrum).' },
          { label: 'b', task: 'Handschuhe', solution: 'Hand (hand) + Schuhe (sko) = hansker. Artikkel: die (flertall).' },
          { label: 'c', task: 'Geburtstagsfeier', solution: 'Geburts (fodsels) + Tag (dag) + s + Feier (feiring) = bursdagsfeiring. Artikkel: die (fordi Feier er feminin).' },
          { label: 'd', task: 'Weihnachtsgeschenk', solution: 'Weihnacht (jul) + s + Geschenk (gave) = julegave. Artikkel: das (fordi Geschenk er noytrum).' },
        ],
        solution: 'a) Schlaf+Zimmer = soverom (das) b) Hand+Schuhe = hansker (die) c) Geburtstag+s+Feier = bursdagsfeiring (die) d) Weihnacht+s+Geschenk = julegave (das)',
        hints: ['Det siste ordet bestemmer kjoennet', 'Noen sammensatte ord har en fugebokstav -s- mellom orddelene'],
      },
    },
    {
      id: 'tysk-1-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva betyr det sammensatte ordet "Handballweltmeisterschaft"?',
        options: [
          { id: 'a', text: 'Handballkamp', isCorrect: false },
          { id: 'b', text: 'Handball-verdensmesterskap', isCorrect: true },
          { id: 'c', text: 'Handballspiller', isCorrect: false },
          { id: 'd', text: 'Verdensrekord i handball', isCorrect: false },
        ],
        solution: 'Hand + ball + Welt (verden) + Meister (mester) + schaft (skap) = Handball-verdensmesterskap. Artikkelen er die (fordi -schaft er feminin).',
      },
    },
    {
      id: 'tysk-1-16-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Lag sammensatte ord eller bruk endelser for a danne nye ord. Oppgi artikkel.',
        subTasks: [
          { label: 'a', task: 'Lag et sammensatt ord med "Schule" (skole) og "Tasche" (veske).', solution: 'Die Schultasche (skolesekk) - die fordi Tasche er feminin.' },
          { label: 'b', task: 'Lag det motsatte av "freundlich" (vennlig) med en forstavelse.', solution: 'Unfreundlich (uvennlig) - forstavelsen un- gir motsatt betydning.' },
          { label: 'c', task: 'Lag et substantiv av "frei" (fri) med en endelse.', solution: 'Die Freiheit (frihet) - endelsen -heit gjor adjektivet til et feminint substantiv.' },
          { label: 'd', task: 'Lag et diminutiv (forminskning) av "Katze" (katt) med en endelse.', solution: 'Das Kätzchen (liten katt/kattunge) - endelsen -chen gjor det til noytrum og gir Umlaut.' },
        ],
        solution: 'a) die Schultasche b) unfreundlich c) die Freiheit d) das Kätzchen',
        hints: ['Det siste ordet bestemmer kjoennet i sammensatte ord', '-chen gir alltid noytrum (das) og ofte Umlaut'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Kompositum (Komposita)', definition: 'Sammensatt ord - satt sammen av to eller flere ord' },
    { term: 'die Vorsilbe', definition: 'Forstavelse/prefiks (un-, auf-, an-, ein- osv.)' },
    { term: 'die Nachsilbe', definition: 'Endelse/suffiks (-ung, -heit, -keit, -schaft, -chen osv.)' },
    { term: 'trennbare Verben', definition: 'Delbare verb - forstavelsen skilles fra verbet i presens' },
    { term: 'das Grundwort', definition: 'Grunnord - det siste ordet i et sammensatt ord (bestemmer kjoenn)' },
    { term: 'das Bestimmungswort', definition: 'Bestemmelsesord - det foerste ordet i et sammensatt ord (presiserer betydningen)' },
  ],
};

// ============================================================================
// KAPITTEL 16.3: Lernstrategien - Laeringsstrategier
// ============================================================================

export const CHAPTER_TYSK_1_16_3: TextbookChapter = {
  id: 'tysk-1-16-3',
  courseId: 'tysk-1',
  chapterNumber: '16.3',
  title: 'Lernstrategien',
  subtitle: 'Laeringsstrategier',
  description: 'Effektive strategier for a laere tysk: ordforrad, lesing, lytting og repetisjon.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke ulike laeringsstrategier for a utvikle egne tyskferdigheter'],
  content: [
    {
      id: 'tysk-1-16-3-intro',
      type: 'text',
      content: `## Lernstrategien - Laeringsstrategier

Hvordan laerer du best tysk? Alle er forskjellige, men det finnes noen strategier som har vist seg a vaere effektive for de fleste. I dette kapittelet ser vi pa strategier for ordlaering, lesing, lytting og generell spraklearing.`
    },
    {
      id: 'tysk-1-16-3-def-1',
      type: 'definition',
      title: 'Vokabellernen (Ordlaering)',
      content: `**Effektive metoder for a laere nye ord:**

1. **Ordkort (Vokabelkarten):** Skriv det tyske ordet pa den ene siden og det norske pa den andre. Inkluder alltid artikkelen (der/die/das)!

2. **Kontekst:** Laer ord i setninger, ikke alene:
   - Ikke bare: "der Hund = hund"
   - Bedre: "Der Hund spielt im Garten." (Hunden leker i hagen.)

3. **Ordgrupper:** Laer ord som hoerer sammen (temagrupper):
   - Mat: das Brot, der Käse, die Milch, das Obst
   - Klaesr: die Jacke, die Hose, das Hemd, der Schuh

4. **Repetisjonsintervaller:** Repeter nye ord etter oekende intervaller:
   - Dag 1: Laer ordene
   - Dag 2: Repeter
   - Dag 4: Repeter
   - Dag 7: Repeter
   - Dag 14: Repeter

5. **Bruk ordene!** Proev a bruke nye ord i setninger, samtaler og tekster.`
    },
    {
      id: 'tysk-1-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Hvordan lage gode ordkort',
      problem: `Her er et eksempel pa et godt og et darlig ordkort:

**Darlig ordkort:**
Forside: Hund
Bakside: dog

**Godt ordkort:**
Forside: **der** Hund, **die** Hunde (fl.)
Bakside: hund
Eksempelsetning: "Der Hund spielt im Park."
Bildeassosasjon: Tegn en enkel hund!`,
      solution: `**Et godt ordkort inneholder:**
1. **Artikkelen** (der/die/das) - helt avgjorende pa tysk!
2. **Flertallsformen** - fordi flertall er uregelrett pa tysk
3. **En eksempelsetning** - sa du ser ordet i kontekst
4. **Eventuelt en tegning eller assosasjon** - visuell hukommelse hjelper

**Tips:** Bruk ulike farger for kjoennene:
- Bla for maskulin (der)
- Rod for feminin (die)
- Gronn for noytrum (das)`
    },
    {
      id: 'tysk-1-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste informasjonen a ha med nar du laerer et nytt tysk substantiv?',
        options: [
          { id: 'a', text: 'Bare det tyske ordet', isCorrect: false },
          { id: 'b', text: 'Det tyske ordet med artikkel (der/die/das)', isCorrect: true },
          { id: 'c', text: 'Bare uttalen', isCorrect: false },
          { id: 'd', text: 'Etymologien (ordets opprinnelse)', isCorrect: false },
        ],
        solution: 'Du ma alltid laere artikkelen (der/die/das) sammen med substantivet, fordi kjoennet pavirker hele setningsstrukturen (kasus, adjektivboying osv.).',
      },
    },
    {
      id: 'tysk-1-16-3-def-2',
      type: 'definition',
      title: 'Lesestrategien (Lesestrategier)',
      content: `**Strategier for a lese tyske tekster:**

1. **Global lesing (Globales Lesen):** Les hele teksten raskt for a fa tak i hovedinnholdet. Ikke stopp for hvert ukjent ord.

2. **Detaljert lesing (Detailliertes Lesen):** Les teksten en gang til og fokuser pa detaljer og ukjente ord.

3. **Selektiv lesing (Selektives Lesen):** Let etter spesifikk informasjon i teksten (f.eks. navn, tall, datoer).

4. **Gjetting fra kontekst:** Proev a gjette betydningen av ukjente ord ut fra sammenhengen:
   - Hva handler teksten om?
   - Hvilken ordklasse er det? (verb, substantiv, adjektiv?)
   - Likner det pa et norsk eller engelsk ord?
   - Kan du dele opp ordet? (sammensatte ord)

5. **Ordbok som siste utvei:** Bruk ordbok forst nar du virkelig ikke kan gjette betydningen.`
    },
    {
      id: 'tysk-1-16-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Gjette ord fra kontekst',
      problem: `Les denne setningen og proev a gjette hva det uthevede ordet betyr:

"Im Winter ist es sehr kalt. Deshalb trage ich immer eine warme **Winterjacke** und **Handschuhe**."

Hva betyr Winterjacke og Handschuhe?`,
      solution: `**Winterjacke:**
- Sammensatt ord: Winter (vinter) + Jacke (jakke)
- Kontekst: Det er kaldt om vinteren, sa man tar pa seg varme klaer
- Betydning: **vinterjakke**

**Handschuhe:**
- Sammensatt ord: Hand (hand) + Schuhe (sko)
- Kontekst: Man tar dem pa for a holde seg varm
- Betydning: **hansker** (bokstavelig "handsko")

Begge ordene kunne gjettes ut fra delene de er satt sammen av OG konteksten (kalde vinterklaer).`
    },
    {
      id: 'tysk-1-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Proev a gjette betydningen av disse ordene ut fra konteksten og ordsammensettingen.',
        subTasks: [
          { label: 'a', task: '"Die Kinder spielen auf dem Spielplatz." - Hva er en Spielplatz?', solution: 'Spielplatz = Spiel (lek/spill) + Platz (plass) = lekeplass. Konteksten bekrefter det: barn leker der.' },
          { label: 'b', task: '"Zum Frühstück esse ich Orangensaft und Brot." - Hva er Orangensaft?', solution: 'Orangensaft = Orange(n) (appelsin) + Saft (juice) = appelsinjuice. Konteksten bekrefter: noe man drikker til frokost.' },
          { label: 'c', task: '"Meine Großeltern wohnen in einem kleinen Dorf auf dem Land." - Hva er Großeltern?', solution: 'Großeltern = Groß (stor/stor-) + Eltern (foreldre) = besteforeldre. Konteksten: de bor pa landsbygda.' },
        ],
        solution: 'a) Lekeplass b) Appelsinjuice c) Besteforeldre',
        hints: ['Del opp ordene i kjente deler', 'Bruk konteksten (resten av setningen) for a bekrefte gjettingen'],
      },
    },
    {
      id: 'tysk-1-16-3-def-3',
      type: 'definition',
      title: 'Hörstrategien und allgemeine Tipps (Lyttestrategier og generelle tips)',
      content: `**Lyttestrategier:**
1. **Lytt etter noekkelord** - du trenger ikke forsta hvert ord
2. **Bruk konteksten** - hvem snakker? hvor? om hva?
3. **Lytt flere ganger** - foerste gang for hovedinnhold, andre gang for detaljer
4. **Tysk musikk og podcaster** - fin mate a oeve pa utenfor skolen

**Generelle laeringstips:**
1. **Oev litt hver dag** - 15 minutter daglig er bedre enn 2 timer en gang i uken
2. **Feil er bra!** - Man laerer av feilene sine
3. **Vaer aktiv** - snakk, skriv, les, lytt - bruk alle ferdigheter
4. **Finn din motivasjon** - tysk musikk? tyske serier? reise? fotball?
5. **Bruk apper og nettsider** - som supplement til undervisningen`
    },
    {
      id: 'tysk-1-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den mest effektive maten a laere nye gloser pa?',
        options: [
          { id: 'a', text: 'Lese ordlisten kvelden for proeven', isCorrect: false },
          { id: 'b', text: 'Skrive hvert ord 50 ganger', isCorrect: false },
          { id: 'c', text: 'Laere ordene i kontekst og repetere med oekende intervaller', isCorrect: true },
          { id: 'd', text: 'Bare lytte til ordene uten a oeve aktivt', isCorrect: false },
        ],
        solution: 'Forskning viser at ord laeres best i kontekst (i setninger) og med repetisjonsintervaller (dag 1, 2, 4, 7, 14). Denne metoden kalles "spaced repetition".',
      },
    },
    {
      id: 'tysk-1-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om effektive laeringsstrategier:

1. **Ordlaering:** Ordkort med artikkel + flertall + eksempelsetning. Repeter med oekende intervaller.
2. **Lesing:** Global → detaljert → selektiv. Gjett fra kontekst for du slaar opp.
3. **Lytting:** Fokuser pa noekkelord, lytt flere ganger, bruk tysk media.
4. **Generelt:** Oev litt hver dag, vaer ikke redd for feil, bruk spraket aktivt!

Det viktigste er a finne metoder som fungerer for DEG og a vaere jevn i oevingen.`
    },
    {
      id: 'tysk-1-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Lag en personlig laeringsplan for tysk.',
        subTasks: [
          { label: 'a', task: 'Beskriv tre konkrete ting du kan gjore daglig for a forbedre tysken din (pa norsk).', solution: 'F.eks.: 1) Oeve 10 nye gloser med ordkort. 2) Lytte til en tysk sang og slaa opp teksten. 3) Skrive tre setninger pa tysk om dagen min.' },
          { label: 'b', task: 'Velg en lesestrategi og forklar hvordan du vil bruke den pa en tysk tekst.', solution: 'F.eks.: Jeg vil bruke global lesing foerst for a forsta hovedinnholdet, og sa lese teksten en gang til og proeve a gjette ukjente ord fra konteksten for jeg slaar dem opp.' },
          { label: 'c', task: 'Skriv tre tyske mediekilder (sanger, serier, apper) du kunne tenke deg a bruke.', solution: 'F.eks.: 1) Musikk: Rammstein eller Mark Forster. 2) Serie: Dark pa Netflix (med tyske undertekster). 3) App: Duolingo for daglig oving.' },
        ],
        solution: 'En personlig laeringsplan med konkrete, gjennomforbare tiltak for daglig oving, lesing og bruk av tyske medier.',
        hints: ['Vaer konkret - "oeve tysk" er for vagt, "laere 10 gloser med ordkort" er konkret', 'Velg medier du faktisk liker!'],
      },
    },
    {
      id: 'tysk-1-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du leser en tysk tekst og stoeter pa ordet "Geburtstagsfeier". Du vet at "Geburtstag" betyr "bursdag". Hva er den beste strategien?',
        options: [
          { id: 'a', text: 'Slaa opp hele ordet i ordboken umiddelbart', isCorrect: false },
          { id: 'b', text: 'Hoppe over ordet og lese videre', isCorrect: false },
          { id: 'c', text: 'Dele opp ordet: Geburtstag + Feier, og gjette at "Feier" betyr feiring', isCorrect: true },
          { id: 'd', text: 'Sporr laereren', isCorrect: false },
        ],
        solution: 'A dele opp sammensatte ord og gjette fra kjente deler er en veldig effektiv lesestrategi pa tysk. Geburtstag (bursdag) + Feier (feiring) = bursdagsfeiring.',
      },
    },
    {
      id: 'tysk-1-16-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Proev a gjette betydningen av disse ordene uten ordbok. Forklar strategien din.',
        subTasks: [
          { label: 'a', task: '"Der Regenschirm schützt vor Regen." (Regen = regn, schützen = beskytte)', solution: 'Regenschirm = Regen (regn) + Schirm (skjerm/skjold) = paraply. Strategi: delt opp sammensatt ord + brukt kontekst (beskytter mot regn).' },
          { label: 'b', task: '"Das Krankenhaus ist in der Nähe." (krank = syk)', solution: 'Krankenhaus = Kranken (syke) + Haus (hus) = sykehus. Strategi: sammensatt ord med kjente deler.' },
          { label: 'c', task: '"Die Geschwindigkeit des Autos war zu hoch." (Auto = bil, hoch = hoey)', solution: 'Geschwindigkeit = en egenskap (-keit) relatert til "geschwind" (rask/hurtig). Betydning: hastighet/fart. Kontekst: bilens ... var for hoey = farten.' },
        ],
        solution: 'a) Paraply (Regen+Schirm) b) Sykehus (Kranken+Haus) c) Hastighet (-keit endelse = egenskap)',
        hints: ['Del opp sammensatte ord i kjente deler', 'Se pa endelser: -keit betyr at det er en egenskap/tilstand'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Lernstrategie', definition: 'Laeringsstrategi' },
    { term: 'die Vokabelkarte', definition: 'Ordkort/glosekort' },
    { term: 'der Kontext', definition: 'Kontekst/sammenheng' },
    { term: 'die Wiederholung', definition: 'Repetisjon' },
    { term: 'globales Lesen', definition: 'Global lesing - lese for hovedinnhold' },
    { term: 'detailliertes Lesen', definition: 'Detaljert lesing - lese for detaljer og noyaktighet' },
  ],
};

// ============================================================================
// KAPITTEL 16.4: Selbstevaluation - Egenvurdering
// ============================================================================

export const CHAPTER_TYSK_1_16_4: TextbookChapter = {
  id: 'tysk-1-16-4',
  courseId: 'tysk-1',
  chapterNumber: '16.4',
  title: 'Selbstevaluation',
  subtitle: 'Egenvurdering',
  description: 'Vurder dine egne tyskferdigheter og sett mal for videre laering.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over egen spraklearing og sette realistiske mal for videre utvikling'],
  content: [
    {
      id: 'tysk-1-16-4-intro',
      type: 'text',
      content: `## Selbstevaluation - Egenvurdering

Egenvurdering er en viktig del av a laere et nytt sprak. Ved a reflektere over hva du kan og hva du trenger a oeve mer pa, kan du styre laeringa di mer effektivt. I dette kapittelet far du verktoy for a vurdere dine egne ferdigheter i tysk og sette mal for videre laering.`
    },
    {
      id: 'tysk-1-16-4-def-1',
      type: 'definition',
      title: 'Sprachkompetenzen (Sprakferdigheter)',
      content: `Sprakferdigheter deles inn i fire hovedomrader:

1. **Hören (Lytting):** Forsta talt tysk i ulike situasjoner
2. **Sprechen (Snakking):** Uttrykke seg muntlig pa tysk
3. **Lesen (Lesing):** Forsta skriftlige tyske tekster
4. **Schreiben (Skriving):** Uttrykke seg skriftlig pa tysk

I tillegg er det viktig med:
5. **Wortschatz (Ordforrad):** Hvor mange ord du kan og kan bruke
6. **Grammatik (Grammatikk):** Regler for setningsoppbygging

**Det europeiske rammeverket for sprak (GER):**
Etter niva 1 bor du vaere pa omtrent **A1-A2-niva**, som betyr at du kan:
- Forsta enkle setninger om kjente emner
- Kommunisere i enkle, dagligdagse situasjoner
- Skrive korte, enkle tekster
- Presentere deg selv og stille enkle spoersmal`
    },
    {
      id: 'tysk-1-16-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Egenvurderingsskjema',
      problem: `Her er et egenvurderingsskjema. Vurder deg selv pa en skala fra 1 til 5:
(1 = trenger mye oving, 5 = mestrer godt)

**LYTTING:**
- Jeg forstar enkle instruksjoner pa tysk: ___
- Jeg forstar hovedinnholdet i enkle dialoger: ___
- Jeg forstar tall, klokkeslett og datoer: ___

**SNAKKING:**
- Jeg kan presentere meg selv pa tysk: ___
- Jeg kan bestille mat pa en restaurant: ___
- Jeg kan sporr om veien: ___

**LESING:**
- Jeg kan lese og forsta korte tekster: ___
- Jeg kan forsta tyske skilt og oppslag: ___
- Jeg kan finne informasjon i enkle tekster: ___

**SKRIVING:**
- Jeg kan skrive en kort e-post pa tysk: ___
- Jeg kan beskrive meg selv og familien min: ___
- Jeg kan skrive om hverdagslige emner: ___`,
      solution: `**Slik bruker du skjemaet:**

1. Vaer aerlig med deg selv - det er ingen "riktige" svar
2. Omrader der du gir deg selv 1-2 = prioriter a oeve pa dette
3. Omrader der du gir deg selv 4-5 = gode sider du kan bygge videre pa
4. Gjenta vurderingen etter noen uker for a se fremgang

**Husk:** Det er helt normalt a vaere bedre i noen ferdigheter enn andre. De fleste er f.eks. bedre i lesing enn i snakking.`
    },
    {
      id: 'tysk-1-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke fire hovedferdigheter vurderer man i spraklaering?',
        options: [
          { id: 'a', text: 'Grammatikk, ordforrad, uttale, rettskriving', isCorrect: false },
          { id: 'b', text: 'Lytting, snakking, lesing, skriving', isCorrect: true },
          { id: 'c', text: 'Lesing, skriving, tegning, regning', isCorrect: false },
          { id: 'd', text: 'Uttale, ordforrad, kultur, historie', isCorrect: false },
        ],
        solution: 'De fire hovedferdighetene er: Hören (lytting), Sprechen (snakking), Lesen (lesing) og Schreiben (skriving). Grammatikk og ordforrad er verktoy som stoetter alle fire.',
      },
    },
    {
      id: 'tysk-1-16-4-def-2',
      type: 'definition',
      title: 'Lernziele setzen (A sette laeringsmal)',
      content: `Gode laeringsmal er **SMART:**

- **S**pezifisch (Spesifikk): Hva noyaktig vil du laere?
  - Darlig: "Bli bedre i tysk"
  - Bra: "Laere 20 nye ord om mat og drikke"

- **M**essbar (Malbart): Hvordan vet du at du har nadd malet?
  - "Jeg kan bestille mat pa en restaurant uten a slaa opp ord"

- **A**ttraktiv (Attraktivt): Malet bor motivere deg
  - "Jeg vil kunne forsta favoritt-sangen min pa tysk"

- **R**ealistisch (Realistisk): Malet bor vaere oppnaelig
  - Ikke: "Snakke flytende tysk om en maned"
  - Ja: "Holde en 2-minutters presentasjon pa tysk"

- **T**erminiert (Tidsbegrenset): Nar skal malet vaere nadd?
  - "Innen slutten av semesteret"`
    },
    {
      id: 'tysk-1-16-4-example-2',
      type: 'example',
      title: 'Eksempel 2: SMART laeringsmal',
      problem: `Her er tre eksempler pa SMART laeringsmal for tysk:

**Mal 1 - Ordforrad:**
"Innen to uker skal jeg laere 30 nye ord om reise og transport, og kunne bruke dem i setninger."

**Mal 2 - Muntlig:**
"Innen fredag skal jeg kunne presentere familien min pa tysk i 2 minutter uten manus."

**Mal 3 - Skriftlig:**
"For neste onsdag skal jeg skrive en e-post pa tysk til min tyske brevvenn pa minst 100 ord."

Vurder: Er disse malene spesifikke, malbare, attraktive, realistiske og tidsbestemte?`,
      solution: `**Vurdering av malene:**

**Mal 1:** Spesifikt (30 ord om reise), malbart (bruke i setninger), realistisk (30 ord pa 2 uker), tidsbestemt (2 uker). Bra mal!

**Mal 2:** Spesifikt (familiepresentasjon), malbart (2 minutter uten manus), realistisk (kort presentasjon), tidsbestemt (fredag). Bra mal!

**Mal 3:** Spesifikt (e-post til brevvenn), malbart (100 ord), realistisk (en e-post), tidsbestemt (neste onsdag). Bra mal!

Alle tre malene oppfyller SMART-kriteriene.`
    },
    {
      id: 'tysk-1-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Omformuler disse darlige laeringsmalene til SMART-mal.',
        subTasks: [
          { label: 'a', task: '"Bli bedre i tysk."', solution: '"Innen to uker skal jeg laere 20 nye ord om mat og kunne bestille pa en restaurant pa tysk."' },
          { label: 'b', task: '"Lese mer pa tysk."', solution: '"For neste mandag skal jeg lese en kort tysk tekst (f.eks. en nyhetssak) og skrive ned 10 nye ord med oversettelse."' },
          { label: 'c', task: '"Oeve pa grammatikk."', solution: '"Denne uken skal jeg oeve pa presensboying av 10 uregelrette verb og kunne dem utenat til fredag."' },
        ],
        solution: 'Hvert mal bor vaere spesifikt, malbart, realistisk og ha en tidsfrist.',
        hints: ['Gjor malet spesifikt: HVAD noyaktig vil du laere?', 'Legg til en tidsfrist: NAR skal du ha nadd malet?'],
      },
    },
    {
      id: 'tysk-1-16-4-def-3',
      type: 'definition',
      title: 'Reflexion über das Lernen (Refleksjon over laering)',
      content: `**Viktige refleksjonsspoersmal:**

Etter en laeringsperiode bor du stille deg selv disse spoersmalene:

1. **Hva har jeg laert?**
   - Nye ord, grammatikkregler, kulturkunnskap?

2. **Hva gikk bra?**
   - Hvilke metoder fungerte? Hva var lett?

3. **Hva var vanskelig?**
   - Grammatikk? Uttale? Ordforrad? Lytteforstaelse?

4. **Hva vil jeg forbedre?**
   - Konkrete omrader a jobbe med

5. **Hvordan skal jeg jobbe videre?**
   - Spesifikke tiltak og strategier

**Pa tysk:**
- *Was habe ich gelernt?* - Hva har jeg laert?
- *Was war schwierig?* - Hva var vanskelig?
- *Was möchte ich verbessern?* - Hva onsker jeg a forbedre?`
    },
    {
      id: 'tysk-1-16-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Refleksjonslogg',
      problem: `Les dette eksempelet pa en refleksjonslogg etter et semester med tysk:

**Min refleksjon - Tysk niva 1**

**Hva jeg har laert:**
Jeg har laert grunnleggende tysk: a presentere meg, bestille mat, handle i butikker og skrive enkle e-poster. Jeg kjenner de viktigste grammatikkreglene: artikler, presens verbboying og akkusativ/dativ.

**Hva som gikk bra:**
Lesing og skriving gar ganske bra. Jeg liker a lese korte tekster og kan forsta mye. Ordkortmetoden fungerte godt for meg.

**Hva som var vanskelig:**
Muntlig tysk er fortsatt vanskelig - jeg tenker for lenge for jeg snakker. Artikler (der/die/das) er ogsa utfordrende.

**Mitt mal for neste semester:**
Jeg vil oeve mer pa a snakke spontant. Mitt SMART-mal er: "Innen mars skal jeg kunne fore en 5-minutters samtale pa tysk om hverdagslige emner."`,
      solution: `**Hva som gjoer dette til en god refleksjon:**
1. Den er **konkret** - spesifikke ferdigheter nevnes
2. Den er **aerlig** - bade styrker og svakheter
3. Den er **fremtidsrettet** - et klart mal for neste periode
4. Den bruker **SMART-prinsippet** for malet

En slik refleksjon hjelper deg med a fokusere oevingen der du trenger det mest.`
    },
    {
      id: 'tysk-1-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Etter a ha jobbet med tysk i et halvt ar, finner du ut at du er god pa lesing men svaak pa lytting. Hva er den beste strategien?',
        options: [
          { id: 'a', text: 'Bare lese mer, siden det er det du er best pa', isCorrect: false },
          { id: 'b', text: 'Slutte a oeve pa lesing og bare fokusere pa lytting', isCorrect: false },
          { id: 'c', text: 'Oeve mer pa lytting (f.eks. tyske podcaster) mens du opprettholder leseferdighetene', isCorrect: true },
          { id: 'd', text: 'Vente til neste ar med a jobbe med lytting', isCorrect: false },
        ],
        solution: 'Den beste strategien er a oeke oevingen pa svake omrader (lytting) uten a stoppe oevingen pa sterke omrader (lesing). Balanse er nokkelen!',
      },
    },
    {
      id: 'tysk-1-16-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert om:

1. **Sprakferdigheter:** Lytting, snakking, lesing og skriving (+ ordforrad og grammatikk)
2. **Egenvurdering:** Vurder dine styrker og svakheter aerlig
3. **SMART-mal:** Sett spesifikke, malbare, attraktive, realistiske og tidsbestemte mal
4. **Refleksjon:** Still deg selv spoersmal om hva du har laert, hva som var vanskelig, og hvordan du vil jobbe videre

Egenvurdering er ikke noe du gjoer en gang - det er en lopende prosess gjennom hele spraklaeringen din!`
    },
    {
      id: 'tysk-1-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv din egen korte refleksjonslogg for tysklaeringa di (pa norsk). Svar pa alle fire punktene.',
        subTasks: [
          { label: 'a', task: 'Hva har du laert i tysk sa langt? Nevn minst tre konkrete ting.', solution: 'F.eks.: Jeg har laert a presentere meg pa tysk, grunnleggende grammatikk (artikler, verbboying, kasus) og a skrive korte tekster.' },
          { label: 'b', task: 'Hva er du god pa? Hva er vanskelig?', solution: 'F.eks.: Jeg er ganske god pa lesing og ordforrad. Grammatikk (spesielt kasus) og muntlig tysk er fortsatt vanskelig.' },
          { label: 'c', task: 'Sett et SMART-mal for de neste to ukene.', solution: 'F.eks.: Innen to uker skal jeg kunne boyningene av 15 uregelrette verb utenat og bruke dem i setninger.' },
        ],
        solution: 'En personlig og aerlig refleksjonslogg med konkrete eksempler, styrker/svakheter og et SMART-mal.',
        hints: ['Vaer aerlig - det er bare du som leser dette!', 'Bruk SMART-modellen: spesifikt, malbart, realistisk, tidsbestemt'],
      },
    },
    {
      id: 'tysk-1-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva star "S" for i SMART-modellen for laeringsmal?',
        options: [
          { id: 'a', text: 'Schnell (rask)', isCorrect: false },
          { id: 'b', text: 'Spezifisch (spesifikk)', isCorrect: true },
          { id: 'c', text: 'Sprache (sprak)', isCorrect: false },
          { id: 'd', text: 'Schreiben (skrive)', isCorrect: false },
        ],
        solution: 'S star for Spezifisch (spesifikk). Et godt laeringsmal er noyaktig og konkret, ikke vagt. "Laere 20 ord om reise" er spesifikt, "bli bedre i tysk" er det ikke.',
      },
    },
    {
      id: 'tysk-1-16-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-16-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv en kort tekst pa TYSK (5-8 setninger) der du reflekterer over hva du har laert i tysk og hva du onsker a forbedre.',
        subTasks: [
          { label: 'a', task: 'Skriv 2-3 setninger om hva du har laert pa tysk.', solution: 'F.eks.: In diesem Schuljahr habe ich viel Deutsch gelernt. Ich kann mich vorstellen, Essen bestellen und kurze Texte schreiben. Ich habe auch viele neue Wörter gelernt.' },
          { label: 'b', task: 'Skriv 2-3 setninger om hva som var vanskelig og hva du vil forbedre.', solution: 'F.eks.: Die Grammatik war manchmal schwierig, besonders die Artikel und die Fälle. Ich möchte besser Deutsch sprechen. Deshalb werde ich mehr üben.' },
          { label: 'c', task: 'Avslutt med et mal for fremtiden (1-2 setninger).', solution: 'F.eks.: Mein Ziel ist, im nächsten Jahr eine einfache Unterhaltung auf Deutsch führen zu können. Ich freue mich auf Deutsch 2!' },
        ],
        solution: 'En kort refleksjonstekst pa tysk med bruk av perfektum (habe gelernt), konjunktiv (möchte) og futurum (werde üben).',
        hints: ['Bruk "Ich habe ... gelernt" for a si hva du har laert', 'Bruk "Ich möchte ..." for a si hva du onsker', 'Bruk "Mein Ziel ist ..." for a sette et mal'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Selbstevaluation', definition: 'Egenvurdering' },
    { term: 'die Sprachkompetenz', definition: 'Sprakferdighet/sprakkompetanse' },
    { term: 'das Lernziel', definition: 'Laeringsmal' },
    { term: 'die Reflexion', definition: 'Refleksjon' },
    { term: 'SMART', definition: 'Spesifikk, Malbar, Attraktiv, Realistisk, Tidsbestemt' },
    { term: 'verbessern', definition: 'A forbedre' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const TYSK_1_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_TYSK_1_14_1, CHAPTER_TYSK_1_14_2, CHAPTER_TYSK_1_14_3, CHAPTER_TYSK_1_14_4,
  CHAPTER_TYSK_1_15_1, CHAPTER_TYSK_1_15_2, CHAPTER_TYSK_1_15_3, CHAPTER_TYSK_1_15_4,
  CHAPTER_TYSK_1_16_1, CHAPTER_TYSK_1_16_2, CHAPTER_TYSK_1_16_3, CHAPTER_TYSK_1_16_4,
];

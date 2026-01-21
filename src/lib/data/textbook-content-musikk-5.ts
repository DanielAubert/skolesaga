/**
 * Musikk 5. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for musikk på 5. trinn
 * Innhold tilpasset norske 10-11 åringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Sangglede og stemmekontroll
// ============================================================================

export const CHAPTER_MUSIKK_5_1: TextbookChapter = {
  id: 'musikk-5-1',
  courseId: 'musikk-5',
  chapterNumber: '1',
  title: 'Sangglede og stemmekontroll',
  description: 'Lær å bruke stemmen din på nye måter og opplev gleden ved å synge.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke stemmen variert i ulike uttrykk',
    'synge unisont og flerstemt i gruppe',
  ],
  content: [
    {
      id: 'musikk-5-1-intro',
      type: 'text',
      content: `Stemmen din er et fantastisk instrument som du alltid har med deg! Når du lærer å bruke stemmen godt, kan du synge vakrere, sterkere og mer avslappet. I dette kapitlet skal vi utforske hvordan stemmen fungerer og øve på teknikker som gjør det lettere å synge.`,
    },
    {
      id: 'musikk-5-1-def-1',
      type: 'definition',
      title: 'Stemmebånd',
      content: `Stemmebåndene er to små folder inne i halsen din. Når du puster ut og stemmebåndene vibrerer, lager du lyd. Jo strammere stemmebåndene er, jo lysere blir tonen.`,
    },
    {
      id: 'musikk-5-1-text-1',
      type: 'text',
      content: `**Hvordan lager vi lyd?**

Når du synger, skjer dette:
1. Du puster inn luft
2. Luften strømmer opp fra lungene
3. Stemmebåndene vibrerer når luften passerer
4. Munnen og nesen former lyden

Tenk på stemmen som en fløyte - luften er det som skaper lyden!`,
    },
    {
      id: 'musikk-5-1-text-2',
      type: 'text',
      content: `**God pusteteknikk**

For å synge godt må du puste riktig:
- **Magepust**: Legg hånden på magen. Når du puster inn, skal magen gå ut. Når du puster ut, går magen inn.
- **Avslappede skuldre**: Skuldrene skal ikke gå opp når du puster.
- **Langsomme pust**: Øv på å puste rolig og dypt.

Prøv dette: Legg deg på ryggen og pust. Da puster du automatisk riktig!`,
    },
    {
      id: 'musikk-5-1-tip-1',
      type: 'tip',
      title: 'Oppvarming',
      content: `Før du synger, bør du varme opp stemmen. Prøv å summe forsiktig, si "mmm" på ulike toner, eller gjør leppetrill (som en hest). Dette gjør stemmen klar for sang!`,
    },
    {
      id: 'musikk-5-1-text-3',
      type: 'text',
      content: `**Stemmeleier**

Alle stemmer er forskjellige. Noen synger lyst, andre synger mørkt:
- **Lyse stemmer**: Sopran (jenter/kvinner), tenor (gutter/menn)
- **Mørke stemmer**: Alt (jenter/kvinner), bass (gutter/menn)

Det viktigste er at du synger i det leiet som passer for deg. Ikke press stemmen til å synge for lyst eller for mørkt!`,
    },
    {
      id: 'musikk-5-1-example-1',
      type: 'example',
      title: 'Øvelse: Finn ditt stemmeleie',
      content: `1. Syng en tone som føles behagelig
2. Syng litt lysere - merker du at det blir vanskeligere?
3. Syng litt mørkere - merker du at det også blir vanskeligere?
4. Det området der det er lettest å synge, er ditt naturlige stemmeleie`,
    },
    {
      id: 'musikk-5-1-text-4',
      type: 'text',
      content: `**Å synge sammen**

Når vi synger sammen i klassen, er det viktig å:
- **Lytte** til de andre og ikke synge for høyt
- **Starte sammen** - følg med på læreren eller den som leder
- **Synge samme tone** (unisont) eller ulike stemmer som passer sammen

Å synge i kor er som å spille på lag - alle må samarbeide!`,
    },
    {
      id: 'musikk-5-1-note-1',
      type: 'note',
      title: 'Ta vare på stemmen',
      content: `- Drikk vann når du synger
- Ikke rop eller skrik unødvendig
- Hvisk ikke - det sliter på stemmen!
- Hvil stemmen hvis du er forkjølet`,
    },
    {
      id: 'musikk-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva skaper lyden når vi synger?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det som vibrerer og lager lyd når vi synger?',
            solution: 'Stemmebåndene',
            multipleChoiceOptions: ['Stemmebåndene', 'Tennene', 'Tungen', 'Leppene'],
          },
        ],
        solution: 'Stemmebåndene vibrerer når luften fra lungene passerer dem, og dette skaper lyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan bør du puste når du synger?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er riktig pusteteknikk for sang?',
            solution: 'Puste med magen',
            multipleChoiceOptions: ['Puste med magen', 'Puste høyt opp i brystet', 'Holde pusten', 'Puste så fort som mulig'],
          },
        ],
        solution: 'Magepust (diafragmapust) gir bedre kontroll og støtte når du synger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor skal vi ikke hviske når vi er forkjølet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er hvisking skadelig for stemmen?',
            solution: 'Det sliter på stemmebåndene',
            multipleChoiceOptions: ['Det sliter på stemmebåndene', 'Det er uhøflig', 'Det smitter andre', 'Det gjør vondt i halsen'],
          },
        ],
        solution: 'Hvisking presser stemmebåndene sammen på en unaturlig måte og kan skade stemmen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr det å synge unisont?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "unisont" i musikk?',
            solution: 'At alle synger samme tone',
            multipleChoiceOptions: ['At alle synger samme tone', 'At man synger alene', 'At man synger uten tekst', 'At man synger veldig høyt'],
          },
        ],
        solution: 'Unisont betyr at alle synger den samme melodien og de samme tonene samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Pust riktig!',
        solution: `Øv på magepust:
1. Legg hånden på magen
2. Pust inn gjennom nesen - magen skal gå ut
3. Pust ut gjennom munnen - magen skal gå inn
4. Gjenta 10 ganger

Når du mestrer dette, prøv å synge en lang tone mens du kontrollerer pusten.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Rytmeinstrumenter og melodiinstrumenter
// ============================================================================

export const CHAPTER_MUSIKK_5_2: TextbookChapter = {
  id: 'musikk-5-2',
  courseId: 'musikk-5',
  chapterNumber: '2',
  title: 'Rytmeinstrumenter og melodiinstrumenter',
  description: 'Lær om ulike instrumenter og hvordan du kan spille på dem.',
  estimatedMinutes: 50,
  competenceGoals: [
    'spille på ulike instrumenter',
    'samspille med andre',
  ],
  content: [
    {
      id: 'musikk-5-2-intro',
      type: 'text',
      content: `Musikkinstrumenter kan deles i to hovedgrupper: de som lager rytme, og de som spiller melodier. I dette kapitlet skal vi bli kjent med begge typene og lære å spille på dem!`,
    },
    {
      id: 'musikk-5-2-def-1',
      type: 'definition',
      title: 'Rytmeinstrumenter',
      content: `Rytmeinstrumenter er instrumenter som hovedsakelig brukes til å holde takten og lage rytme. Mange av dem har ikke bestemte toner - de lager bare lyd når du slår på dem.`,
    },
    {
      id: 'musikk-5-2-text-1',
      type: 'text',
      content: `**Vanlige rytmeinstrumenter**

- **Trommer**: Skarptromme, basstromme, tamtam
- **Rytmeegg og maracas**: Ristes for å lage lyd
- **Triangel**: Slås med en metallpinne
- **Bjeller**: Ristes eller slås
- **Claves**: To trepinner som slås mot hverandre
- **Tamburin**: Kan slås eller ristes

Alle disse instrumentene er med på å gi musikken driv og energi!`,
    },
    {
      id: 'musikk-5-2-example-1',
      type: 'example',
      title: 'Øvelse: Grunnrytme',
      content: `Prøv denne enkle rytmen med klapping eller rytmeinstrument:

**I 4/4-takt (tell 1-2-3-4):**
- Slag på 1 og 3 (sterke slag)
- Ingen slag på 2 og 4

Når du mestrer dette, prøv:
- Slag på alle fire (1-2-3-4)
- Slag på 1, pause, slag på 3 og 4`,
    },
    {
      id: 'musikk-5-2-def-2',
      type: 'definition',
      title: 'Melodiinstrumenter',
      content: `Melodiinstrumenter kan spille bestemte toner og melodier. Du kan spille en sang på disse instrumentene fordi de kan lage høye og lave toner.`,
    },
    {
      id: 'musikk-5-2-text-2',
      type: 'text',
      content: `**Vanlige melodiinstrumenter på skolen**

- **Xylofon**: Har trebrikker som du slår på med køller
- **Metallofon**: Som xylofon, men med metallbrikker
- **Klokkespill**: Små metallplater med lys klang
- **Blokkfløyte**: Blåseinstrument med huller
- **Keyboard/piano**: Tangentinstrument
- **Gitar/ukulele**: Strengeinstrument

**Tonerekken** på disse instrumentene er: C - D - E - F - G - A - H - C`,
    },
    {
      id: 'musikk-5-2-text-3',
      type: 'text',
      content: `**Spille på xylofon og metallofon**

Disse instrumentene er perfekte for nybegynnere:
1. Hold køllene løst - ikke klem!
2. Slå midt på brikkene for best lyd
3. La køllene sprette tilbake etter slaget
4. Øv først på én tone, så enkle melodier

**Tips**: De store brikkene gir mørke toner, de små gir lyse toner.`,
    },
    {
      id: 'musikk-5-2-tip-1',
      type: 'tip',
      title: 'Samspill',
      content: `Når dere spiller sammen i klassen:
- Lytt til de andre - ikke spill for høyt!
- Hold takten - følg med på den som leder
- Vent på tur hvis dere spiller ulike ting
- Stopp nøyaktig samtidig`,
    },
    {
      id: 'musikk-5-2-text-4',
      type: 'text',
      content: `**Blokkfløyte - grunnleggende**

Blokkfløyta er et fint instrument å starte med:

**Grepet:**
- Venstre hånd øverst (nærmest munnen)
- Høyre hånd nederst
- Tommelen på baksiden

**Enkle toner:**
- **H**: Venstre hånd - tommel + pekefinger
- **A**: Venstre hånd - tommel + pekefinger + langfinger
- **G**: Venstre hånd - tommel + alle tre fingre

Blås forsiktig og jevnt - ikke for hardt!`,
    },
    {
      id: 'musikk-5-2-example-2',
      type: 'example',
      title: 'Enkel melodi: "Alle fugler"',
      content: `Du kan spille starten av "Alle fugler" med bare tre toner:

G - G - A - G - G - A - G
"Al-le fug-ler små de er"

Øv langsomt først, så raskere når du kan det!`,
    },
    {
      id: 'musikk-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et rytmeinstrument?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner rytmeinstrumenter?',
            solution: 'De brukes til å holde takten',
            multipleChoiceOptions: ['De brukes til å holde takten', 'De kan bare spille melodier', 'De er alltid laget av tre', 'De er veldig store'],
          },
        ],
        solution: 'Rytmeinstrumenter brukes hovedsakelig til å holde takten og lage rytme, ikke melodier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke av disse er melodiinstrumenter?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke instrumenter kan spille melodier?',
            solution: 'Xylofon og blokkfløyte',
            multipleChoiceOptions: ['Xylofon og blokkfløyte', 'Maracas og triangel', 'Claves og tamburin', 'Bjeller og trommer'],
          },
        ],
        solution: 'Xylofon og blokkfløyte kan spille bestemte toner og dermed melodier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er tonerekken på et keyboard?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er rekkefølgen på tonene fra C til C?',
            solution: 'C - D - E - F - G - A - H - C',
            multipleChoiceOptions: ['C - D - E - F - G - A - H - C', 'A - B - C - D - E - F - G - A', 'C - E - G - A - H - D - F - C', 'D - E - F - G - A - H - C - D'],
          },
        ],
        solution: 'Tonerekken er C - D - E - F - G - A - H - C (i Norge bruker vi H i stedet for B).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan holder du køllene på xylofon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan bør du holde køllene når du spiller xylofon?',
            solution: 'Løst grep og la dem sprette tilbake',
            multipleChoiceOptions: ['Løst grep og la dem sprette tilbake', 'Hardt grep og press ned', 'Bare med to fingre', 'Det spiller ingen rolle'],
          },
        ],
        solution: 'Hold køllene løst og la dem sprette tilbake etter slaget for å få best lyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en rytme!',
        solution: `Lag din egen 4-takters rytme:
1. Velg et rytmeinstrument
2. Tell 1-2-3-4 jevnt
3. Bestem når du skal slå
4. Øv til du kan gjenta rytmen perfekt
5. Skriv ned rytmen din med X for slag og - for pause

Eksempel: X - X X | X - - X | X X - X | X - X - |`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Notelære - Rytme og takt
// ============================================================================

export const CHAPTER_MUSIKK_5_3: TextbookChapter = {
  id: 'musikk-5-3',
  courseId: 'musikk-5',
  chapterNumber: '3',
  title: 'Notelære - Rytme og takt',
  description: 'Lær om noter, pauser og hvordan musikken er organisert i tid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og skrive enkle rytmer med noter og pauser',
    'forstå taktarter og taktslag',
  ],
  content: [
    {
      id: 'musikk-5-3-intro',
      type: 'text',
      content: `Noter er musikkens skriftspråk. Når du kan lese noter, kan du spille musikk som noen har skrevet - selv om de levde for hundrevis av år siden! I dette kapitlet lærer vi om rytme, takt og de enkleste noteverdiene.`,
    },
    {
      id: 'musikk-5-3-def-1',
      type: 'definition',
      title: 'Puls',
      content: `Pulsen i musikken er som hjerterytmen din - en jevn, gjentakende markering av tid. Når du hører musikk og automatisk begynner å nikke med hodet eller trampe med foten, følger du pulsen!`,
    },
    {
      id: 'musikk-5-3-text-1',
      type: 'text',
      content: `**Takt og taktart**

Musikken er delt inn i takter - små "bokser" med et bestemt antall slag.

**4/4-takt** er den vanligste:
- 4 slag i hver takt
- Vi teller: 1 - 2 - 3 - 4 | 1 - 2 - 3 - 4 |
- Slag 1 er sterkest (vi markerer den litt ekstra)
- Brukes i de fleste poplåter

**3/4-takt** brukes i vals:
- 3 slag i hver takt
- Vi teller: 1 - 2 - 3 | 1 - 2 - 3 |
- Gir en "vuggende" følelse`,
    },
    {
      id: 'musikk-5-3-def-2',
      type: 'definition',
      title: 'Noteverdier',
      content: `Noteverdier forteller hvor lenge en tone skal vare. Ulike noteformer viser ulik lengde.`,
    },
    {
      id: 'musikk-5-3-text-2',
      type: 'text',
      content: `**De fire grunnleggende noteverdiene**

| Noteverdi | Utseende | Varighet i 4/4 |
|-----------|----------|----------------|
| Helnote | Oval uten strek | 4 slag |
| Halvnote | Oval med strek | 2 slag |
| Fjerdedelsnote | Fylt oval med strek | 1 slag |
| Åttendedelsnote | Fylt med strek og flagg | 1/2 slag |

**Huskeregel**: Hver gang du halverer, dobler du antallet!
- 1 helnote = 2 halvnoter = 4 fjerdedeler = 8 åttendeler`,
    },
    {
      id: 'musikk-5-3-example-1',
      type: 'example',
      title: 'Tell noteverdier',
      content: `I 4/4-takt, tell slik:

**Helnote**: 1 - 2 - 3 - 4 (hold tonen hele takten)
**Halvnote**: 1 - 2 (hold tonen to slag)
**Fjerdedelsnote**: 1 (ett slag per note)
**Åttendedelsnote**: 1-og (to noter per slag)

For åttendeler teller vi: 1-og-2-og-3-og-4-og`,
    },
    {
      id: 'musikk-5-3-text-3',
      type: 'text',
      content: `**Pauser**

I musikk er stillhet like viktig som lyd! Pauser viser når du IKKE skal spille.

Hver noteverdi har en tilsvarende pause:
- **Helnote-pause**: 4 slag stillhet
- **Halvnote-pause**: 2 slag stillhet
- **Fjerdedelspause**: 1 slag stillhet
- **Åttedelspause**: 1/2 slag stillhet

**Tips**: Tell pausene like nøye som notene!`,
    },
    {
      id: 'musikk-5-3-tip-1',
      type: 'tip',
      title: 'Øv med kroppen',
      content: `Bruk hele kroppen når du øver rytme:
- Klapp fjerdedelene
- Tramp halvnotene med foten
- Si "ta" for hver note, "mm" for pauser
- Gå i takt mens du klapper rytmen`,
    },
    {
      id: 'musikk-5-3-text-4',
      type: 'text',
      content: `**Taktstreker og repetisjon**

- **Taktstrek**: En loddrett strek som skiller taktene
- **Dobbel taktstrek**: Viser slutten av en del
- **Repetisjonstegn**: To prikker ved taktstreken betyr "gjenta"

Når du ser repetisjonstegn, spiller du delen på nytt fra der repetisjonen startet.`,
    },
    {
      id: 'musikk-5-3-example-2',
      type: 'example',
      title: 'Les en enkel rytme',
      content: `Her er en rytme i 4/4-takt (X = fjerdedelsnote, - = fjerdedelspause):

Takt 1: X  X  X  X
Takt 2: X  X  -  X
Takt 3: X  -  X  -
Takt 4: X  X  X  -

Klapp denne rytmen mens du teller 1-2-3-4!`,
    },
    {
      id: 'musikk-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange slag er det i en 4/4-takt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange slag har hver takt i 4/4-takt?',
            solution: '4 slag',
            multipleChoiceOptions: ['4 slag', '3 slag', '2 slag', '8 slag'],
          },
        ],
        solution: '4/4-takt har 4 slag i hver takt. Det øverste tallet viser antall slag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor lenge varer en halvnote i 4/4-takt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange slag varer en halvnote?',
            solution: '2 slag',
            multipleChoiceOptions: ['2 slag', '1 slag', '4 slag', '1/2 slag'],
          },
        ],
        solution: 'En halvnote varer i 2 slag - halvparten av en helnote.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor mange fjerdedelsnoter får plass i en helnote?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange fjerdedelsnoter tilsvarer en helnote?',
            solution: '4',
            multipleChoiceOptions: ['4', '2', '8', '1'],
          },
        ],
        solution: 'En helnote varer 4 slag, og en fjerdedelsnote varer 1 slag. 4 ÷ 1 = 4 fjerdedeler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er pulsen i musikken?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva beskriver pulsen i musikken best?',
            solution: 'En jevn, gjentakende markering av tid',
            multipleChoiceOptions: ['En jevn, gjentakende markering av tid', 'Hvor høyt man spiller', 'Hvilken tone man spiller', 'Hvem som synger'],
          },
        ],
        solution: 'Pulsen er den jevne, gjentakende markeringen av tid - som hjerteslagene i musikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Skriv en rytme!',
        solution: `Lag din egen 4-takters rytme i 4/4-takt:

1. Bruk fjerdedelsnoter (X) og fjerdedelspauser (-)
2. Hver takt skal ha nøyaktig 4 slag
3. Skriv ned rytmen din
4. Klapp rytmen for å sjekke at den fungerer

Eksempel:
Takt 1: X  X  X  X  (4 slag)
Takt 2: X  -  X  -  (4 slag)
Takt 3: X  X  -  X  (4 slag)
Takt 4: X  -  -  X  (4 slag)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Musikksjangre og instrumenter i orkesteret
// ============================================================================

export const CHAPTER_MUSIKK_5_4: TextbookChapter = {
  id: 'musikk-5-4',
  courseId: 'musikk-5',
  chapterNumber: '4',
  title: 'Musikksjangre og instrumenter i orkesteret',
  description: 'Utforsk ulike typer musikk og bli kjent med orkesterets instrumenter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne igjen ulike musikksjangre',
    'gjenkjenne instrumenter i et orkester',
    'lytte aktivt og beskrive musikk',
  ],
  content: [
    {
      id: 'musikk-5-4-intro',
      type: 'text',
      content: `Det finnes utrolig mange forskjellige typer musikk i verden! I dette kapitlet skal vi lytte til ulike sjangre og lære om instrumentene i et orkester. Du vil bli bedre til å beskrive musikk du hører!`,
    },
    {
      id: 'musikk-5-4-def-1',
      type: 'definition',
      title: 'Musikksjanger',
      content: `En musikksjanger er en kategori av musikk med felles kjennetegn. Musikk i samme sjanger har ofte lik rytme, instrumenter eller stemning.`,
    },
    {
      id: 'musikk-5-4-text-1',
      type: 'text',
      content: `**Populære sjangre**

**Pop**
- Fengende melodier og refreng
- Vanlig bandbesetning (gitar, bass, trommer, vokal)
- Ofte om kjærlighet og følelser

**Rock**
- Sterkere gitarlyd enn pop
- Tyngre trommer og bass
- Kan være rolig eller heftig

**Hip-hop/Rap**
- Rytmisk tale (rapping)
- Tunge beats
- Ofte samplet musikk

**Elektronisk musikk**
- Laget på datamaskin/synthesizer
- Repetitive beats
- Ofte dansemusikk`,
    },
    {
      id: 'musikk-5-4-text-2',
      type: 'text',
      content: `**Klassisk musikk og folkemusikk**

**Klassisk musikk**
- Orkester med mange instrumenter
- Komponister som Mozart, Beethoven, Grieg
- Ofte uten tekst (instrumentalmusikk)

**Norsk folkemusikk**
- Hardingfele, langspill
- Slåtter og stev
- Tradisjonell dansemusikk

**Jazz**
- Improvisasjon (musikerne finner på underveis)
- Swing-rytme
- Saksofon, trompet, piano`,
    },
    {
      id: 'musikk-5-4-example-1',
      type: 'example',
      title: 'Hvordan beskrive musikk',
      content: `Når du lytter til musikk, tenk på:

1. **Tempo**: Er det raskt eller sakte?
2. **Dynamikk**: Er det høyt eller lavt?
3. **Stemning**: Glad, trist, spennende, rolig?
4. **Instrumenter**: Hva hører du? Gitar? Piano? Trommer?
5. **Rytme**: Er det jevnt eller variert? Dansbart?

Eksempel: "Denne musikken er rask og glad. Jeg hører gitar og trommer. Det er dansbart!"`,
    },
    {
      id: 'musikk-5-4-def-2',
      type: 'definition',
      title: 'Symfoniorkester',
      content: `Et symfoniorkester er en stor gruppe musikere som spiller sammen. Det kan ha over 100 musikere med mange forskjellige instrumenter.`,
    },
    {
      id: 'musikk-5-4-text-3',
      type: 'text',
      content: `**Instrumentgruppene i orkesteret**

Et symfoniorkester har fire hovedgrupper:

**1. Strykerne** (sitter foran)
- Fiolin (de fleste)
- Bratsj (litt større enn fiolin)
- Cello (holdes mellom knærne)
- Kontrabass (størst, står på gulvet)

**2. Treblåserne**
- Fløyte (lys og klar)
- Obo (nasal, "ender-lyd")
- Klarinett (myk og varm)
- Fagott (dyp og morsom)`,
    },
    {
      id: 'musikk-5-4-text-4',
      type: 'text',
      content: `**Instrumentgruppene (fortsettelse)**

**3. Messingblåserne**
- Trompet (kraftig og skinende)
- Valthorn (rund og varm)
- Trombone (kan gli mellom toner)
- Tuba (dypest av alle)

**4. Slagverket**
- Pauker (store trommer med tonehøyde)
- Cymbaler (metallskiver)
- Triangel, xylofon, klokkespill
- Og mange flere!

I tillegg kan orkesteret ha harpe og piano.`,
    },
    {
      id: 'musikk-5-4-note-1',
      type: 'note',
      title: 'Dirigenten',
      content: `Dirigenten står foran orkesteret og leder musikerne. Med en pinne (taktstokk) viser dirigenten tempo, dynamikk og når hver gruppe skal spille. Uten dirigenten ville det være kaos!`,
    },
    {
      id: 'musikk-5-4-tip-1',
      type: 'tip',
      title: 'Aktiv lytting',
      content: `Når du lytter til orkestermusikk:
- Lukk øynene og konsentrer deg
- Prøv å høre de forskjellige instrumentene
- Følg melodien - hvem spiller den?
- Legg merke til når musikken forandrer seg`,
    },
    {
      id: 'musikk-5-4-text-5',
      type: 'text',
      content: `**Edvard Grieg - Norges store komponist**

Edvard Grieg (1843-1907) er Norges mest kjente komponist. Han skrev musikk som er elsket over hele verden:

- **"I Dovregubbens hall"** fra Peer Gynt
- **"Morgenstemning"** fra Peer Gynt
- **Klaverkonsert i a-moll**

Grieg brukte norsk folkemusikk som inspirasjon. Musikken hans maler bilder av norsk natur og eventyr.`,
    },
    {
      id: 'musikk-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken sjanger kjennetegnes av fengende refreng og bandbesetning?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken sjanger har fengende melodier og vanlig bandbesetning?',
            solution: 'Pop',
            multipleChoiceOptions: ['Pop', 'Klassisk', 'Jazz', 'Folkemusikk'],
          },
        ],
        solution: 'Pop-musikk kjennetegnes av fengende melodier, refreng og vanlig bandbesetning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken instrumentgruppe sitter lengst fram i orkesteret?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke instrumenter sitter foran i et symfoniorkester?',
            solution: 'Strykerne',
            multipleChoiceOptions: ['Strykerne', 'Messingblåserne', 'Slagverket', 'Treblåserne'],
          },
        ],
        solution: 'Strykerne (fiolin, bratsj, cello, kontrabass) sitter lengst fram, nærmest publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem er Norges mest kjente komponist?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem skrev "I Dovregubbens hall" og "Morgenstemning"?',
            solution: 'Edvard Grieg',
            multipleChoiceOptions: ['Edvard Grieg', 'Wolfgang Mozart', 'Ludwig van Beethoven', 'Ole Bull'],
          },
        ],
        solution: 'Edvard Grieg skrev disse verkene som del av musikken til Peer Gynt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva gjør dirigenten?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er dirigentens oppgave i et orkester?',
            solution: 'Lede musikerne og vise tempo',
            multipleChoiceOptions: ['Lede musikerne og vise tempo', 'Spille piano', 'Synge', 'Reparere instrumenter'],
          },
        ],
        solution: 'Dirigenten leder orkesteret, viser tempo og dynamikk, og koordinerer alle musikerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke instrumenter hører til treblåserne?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av disse er treblåseinstrumenter?',
            solution: 'Fløyte, obo, klarinett',
            multipleChoiceOptions: ['Fløyte, obo, klarinett', 'Trompet, trombone, tuba', 'Fiolin, bratsj, cello', 'Trommer, triangel, cymbal'],
          },
        ],
        solution: 'Fløyte, obo, klarinett og fagott er treblåseinstrumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-5-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Praktisk lytteoppgave',
        solution: `Lytt til et musikkstykke og beskriv det:

1. Hvilken sjanger er det?
2. Hva slags stemning har musikken?
3. Hvilke instrumenter hører du?
4. Er tempoet raskt eller sakte?
5. Er det høy eller lav musikk?

Skriv ned svarene dine og diskuter med en klassekamerat!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Musikkhistorie og sjangre
// ============================================================================

export const CHAPTER_MUSIKK_5_5: TextbookChapter = {
  id: 'musikk-5-5',
  courseId: 'musikk-5',
  chapterNumber: '5',
  title: 'Musikkhistorie og sjangre',
  description: 'Lær om ulike musikksjangre og musikk fra forskjellige tider.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjenkjenne ulike musikksjangre',
    'ha kunnskap om musikkhistorie',
  ],
  content: [
    { id: 'musikk-5-5-intro', type: 'text', content: 'Musikk finnes i mange ulike former og har eksistert i tusenvis av år. I dette kapitlet skal vi utforske ulike typer musikk - fra gammel klassisk musikk til moderne pop og hip-hop.' },
    { id: 'musikk-5-5-def-sjanger', type: 'definition', title: 'Musikksjanger', content: 'En **sjanger** er en type eller stil av musikk. Musikk i samme sjanger har lignende kjennetegn, som rytme, instrumenter og stemning.' },
    { id: 'musikk-5-5-klassisk', type: 'text', content: '**Klassisk musikk**\n\nKlassisk musikk ble skrevet av komponister for mange hundre år siden. Den spilles ofte av orkestre med strykere, blåsere og slagverk.\n\n**Kjente komponister:**\n- Mozart - skrev vakker musikk som barn!\n- Beethoven - komponerte selv da han ble døv\n- Grieg - norsk komponist som skrev \"Peer Gynt\"' },
    { id: 'musikk-5-5-folkemusikk', type: 'text', content: '**Folkemusikk**\n\nFolkemusikk er tradisjonell musikk fra et land eller område. Norsk folkemusikk har:\n- Hardingfele\n- Stev og kveding\n- Halling og springar\n\nFolkemusikk forteller om hvordan folk levde i gamle dager.' },
    { id: 'musikk-5-5-pop', type: 'text', content: '**Pop og rock**\n\nPop er kort for \"populærmusikk\". Denne musikken er laget for å være fengende og lett å like.\n\n**Kjennetegn:**\n- Enkel struktur (vers, refreng, vers)\n- Elektriske instrumenter (gitar, bass, keyboard)\n- Trommer som holder takten\n- Tekster om kjærlighet og følelser' },
    { id: 'musikk-5-5-hiphop', type: 'text', content: '**Hip-hop og rap**\n\nHip-hop startet i New York på 1970-tallet. Rap handler om å si tekst rytmisk over musikk.\n\n**Elementer i hip-hop:**\n- Rap (rytmisk tale)\n- DJ-ing (mikse musikk)\n- Breakdance\n- Grafitti-kunst' },
    { id: 'musikk-5-5-elektronisk', type: 'text', content: '**Elektronisk musikk**\n\nElektronisk musikk lages med datamaskiner og synthesizere. Lydene kan være helt nye og annerledes!\n\n**Typer:**\n- EDM (elektronisk dansemusikk)\n- Techno\n- House' },
    { id: 'musikk-5-5-ex1', type: 'exercise', exercise: { id: 'musikk-5-5-ex1', type: 'multiple-choice', task: 'Hva er en musikksjanger?', subTasks: [{ label: 'a', task: 'Velg riktig svar:', multipleChoiceOptions: ['En type eller stil av musikk med lignende kjennetegn', 'Et musikalsk instrument', 'En sang', 'Et musikkprogram på TV'], solution: 'En sjanger er en type eller stil av musikk som har lignende kjennetegn.' }] } },
    { id: 'musikk-5-5-ex2', type: 'exercise', exercise: { id: 'musikk-5-5-ex2', type: 'classic', task: 'Koble sjanger med kjennetegn:', subTasks: [{ label: 'a', task: 'Klassisk musikk', solution: 'Orkester, gamle komponister, strykere' }, { label: 'b', task: 'Hip-hop', solution: 'Rap, DJ, startet i New York' }, { label: 'c', task: 'Folkemusikk', solution: 'Tradisjonell musikk, hardingfele, lokale tradisjoner' }], solution: 'Se deloppgavene' } }
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Komponering og skapende arbeid
// ============================================================================

export const CHAPTER_MUSIKK_5_6: TextbookChapter = {
  id: 'musikk-5-6',
  courseId: 'musikk-5',
  chapterNumber: '6',
  title: 'Lag din egen musikk',
  description: 'Lær å lage egne melodier og rytmer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skape egne rytmer og melodier',
    'bruke digitale verktøy til å lage musikk',
  ],
  content: [
    { id: 'musikk-5-6-intro', type: 'text', content: 'Å lage egen musikk er spennende! Du trenger ikke være ekspert - alle kan skape musikk. I dette kapitlet lærer du hvordan du kan lage egne rytmer, melodier og til og med hele sanger.' },
    { id: 'musikk-5-6-rytme', type: 'text', content: '**Start med rytmen**\n\nRytme er grunnlaget for musikk. Du kan lage rytmer ved å:\n- Klappe i hendene\n- Trampe med føttene\n- Spille på trommer eller rytmeinstrumenter\n- Bruke ting rundt deg (bøker, blyanter, bokser)\n\n**Tips:** Start med en enkel rytme og gjenta den. Legg til flere lyder gradvis!' },
    { id: 'musikk-5-6-melodi', type: 'text', content: '**Lag en melodi**\n\nEn melodi er toner som følger etter hverandre.\n\n**Hvordan starte:**\n1. Velg noen få toner (f.eks. C, D, E, G)\n2. Prøv å sette dem sammen i ulik rekkefølge\n3. Gjenta en del av melodien\n4. La melodien gå opp og ned\n\nEn god melodi er ofte enkel å huske!' },
    { id: 'musikk-5-6-def-loop', type: 'definition', title: 'Loop', content: 'En **loop** er en kort musikkbit som gjentas om og om igjen. Loops brukes mye i moderne musikk.' },
    { id: 'musikk-5-6-digital', type: 'text', content: '**Digitale verktøy**\n\nI dag kan du lage musikk på datamaskiner og nettbrett!\n\n**Gratis programmer:**\n- GarageBand (Mac/iPad)\n- Soundtrap (nettleser)\n- BeepBox (nettleser, enkelt)\n\n**Du kan:**\n- Sette sammen loops\n- Spille inn egen sang\n- Legge til effekter\n- Dele musikken med andre' },
    { id: 'musikk-5-6-struktur', type: 'text', content: '**Oppbygning av en sang**\n\nDe fleste sanger har denne strukturen:\n\n1. **Intro** - Starten som introduserer sangen\n2. **Vers** - Forteller historien, samme melodi med ny tekst\n3. **Refreng** - Den fengende delen som gjentas\n4. **Bro** - En annerledes del som gir variasjon\n5. **Outro** - Avslutningen\n\nEksempel: Intro → Vers → Refreng → Vers → Refreng → Bro → Refreng → Outro' },
    { id: 'musikk-5-6-tips', type: 'tip', title: 'Kom i gang!', content: 'Du trenger ikke være perfekt! Alle store artister startet med å prøve og feile. Det viktigste er å ha det gøy og eksperimentere.' },
    { id: 'musikk-5-6-ex1', type: 'exercise', exercise: { id: 'musikk-5-6-ex1', type: 'classic', task: 'Lag din egen rytme:', subTasks: [{ label: 'a', task: 'Klapp en rytme med 4 slag. Skriv den ned (f.eks. TA-ta-TA-ta)', solution: 'Eksempel: TA-TA-ta-TA eller ta-TA-ta-TA' }, { label: 'b', task: 'Legg til fottramp på noen av slagene', solution: 'Eksempel: TA (tramp) - ta - TA (tramp) - ta' }], solution: 'Se eksempler' } },
    { id: 'musikk-5-6-ex2', type: 'exercise', exercise: { id: 'musikk-5-6-ex2', type: 'classic', task: 'Planlegg en enkel sang:', subTasks: [{ label: 'a', task: 'Hva skal sangen handle om?', solution: 'Eksempel: Sommerferie, en venn, et dyr du liker' }, { label: 'b', task: 'Skriv 2-4 linjer til et vers', solution: 'Eksempel: Sola skinner, det er sommer / Jeg er glad og helt fri / Bade i sjøen er gommer / Være med deg gjør meg bli (glad)' }, { label: 'c', task: 'Skriv 2 linjer til et refreng', solution: 'Eksempel: Sommersang, sommersang / La oss synge hele dagen lang' }], solution: 'Se eksempler' } }
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MUSIKK_5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MUSIKK_5_1,
  CHAPTER_MUSIKK_5_2,
  CHAPTER_MUSIKK_5_3,
  CHAPTER_MUSIKK_5_4,
  CHAPTER_MUSIKK_5_5,
  CHAPTER_MUSIKK_5_6,
];

/**
 * Musikk 7. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for musikk på 7. trinn
 * Innhold tilpasset norske 12-13 åringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Flerstemt sang
// ============================================================================

export const CHAPTER_MUSIKK_7_1_1: TextbookChapter = {
  id: 'musikk-7-1-1',
  courseId: 'musikk-7',
  chapterNumber: '1.1',
  title: 'Flerstemt sang',
  description: 'Lær å synge i harmonier og opplev gleden ved å skape vakre klanger sammen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'synge flerstemt i gruppe',
    'lytte til andre stemmer mens man synger',
    'forstå grunnleggende harmonibegreper',
  ],
  content: [
    {
      id: 'musikk-7-1-1-intro',
      type: 'text',
      content: `Når flere stemmer synger forskjellige toner samtidig, skapes harmonier som kan gi gåsehud! Flerstemt sang er en av de vakreste musikkformene vi har, og har vært brukt i tusenvis av år. I dette kapitlet skal du lære hvordan du kan synge sammen med andre og skape disse magiske klangene.`,
    },
    {
      id: 'musikk-7-1-1-def-1',
      type: 'definition',
      title: 'Flerstemt sang',
      content: `Flerstemt sang (også kalt polyfoni) er når to eller flere stemmer synger forskjellige melodier eller toner samtidig. Stemmene utfyller hverandre og skaper en rikere lydopplevelse enn unison sang.`,
    },
    {
      id: 'musikk-7-1-1-text-1',
      type: 'text',
      content: `**Ulike typer flerstemt sang**

**Kanon**
- Alle synger samme melodi, men starter på forskjellige tidspunkter
- Eksempler: "Broder Jakob", "Row Your Boat"
- Enkleste form for flerstemt sang
- Perfekt for nybegynnere!

**Homofoni**
- En hovedmelodi med akkompagnerende stemmer
- Understemmene følger hovedmelodien rytmisk
- Vanlig i salmer og popsanger

**Polyfoni**
- Flere selvstendige melodier samtidig
- Hver stemme er like viktig
- Mer avansert og kompleks`,
    },
    {
      id: 'musikk-7-1-1-def-2',
      type: 'definition',
      title: 'Harmoni',
      content: `Harmoni oppstår når flere toner klinger sammen. Noen kombinasjoner høres behagelige ut (konsonans), mens andre høres mer spente ut (dissonans). Begge typer brukes i musikk for å skape spenning og avspenning.`,
    },
    {
      id: 'musikk-7-1-1-text-2',
      type: 'text',
      content: `**Stemmeleier i kor**

I et kor deles stemmene vanligvis inn slik:

**Jenste-/kvinnestemmer:**
- **Sopran**: Høyeste stemmen, synger ofte melodien
- **Alt**: Dypere kvinnestemme, synger ofte harmonistemme

**Gutte-/mannestemmer:**
- **Tenor**: Høyeste mannsstemmen
- **Bass**: Dypeste stemmen, gir fundament

I et skolekor på ungdomstrinnet er det vanlig med to eller tre stemmer, ofte sopran, alt og en kombinert tenor/bass-stemme.`,
    },
    {
      id: 'musikk-7-1-1-example-1',
      type: 'example',
      title: 'Øvelse: Din første kanon',
      content: `Start med "Broder Jakob":

1. **Alle synger sammen først** - lær melodien godt
2. **Del klassen i to grupper**:
   - Gruppe 1 starter
   - Gruppe 2 starter når gruppe 1 synger "Sover du?"
3. **Øk til tre grupper** når dere mestrer to
4. **Utfordring**: Fire grupper!

**Tips**: Hold fast på din egen stemme! Ikke la deg forstyrre av de andre gruppene.`,
    },
    {
      id: 'musikk-7-1-1-tip-1',
      type: 'tip',
      title: 'Hvordan holde din stemme',
      content: `Når du synger flerstemt, kan det være fristende å "skli over" til de andre stemmene. Her er noen tips:
- **Lytt til deg selv** - fokuser på din egen tone
- **Bruk øret mot skulderen** - du hører deg selv bedre
- **Øv stemmen alene først** - lær den utenat
- **Start rolig** - ikke syng for høyt i starten
- **Pust sammen** - følg dirigenten eller lederen`,
    },
    {
      id: 'musikk-7-1-1-text-3',
      type: 'text',
      content: `**Tersesang - enkel tostemt sang**

En ters er avstanden mellom tre toner i en skala (f.eks. C til E). Tersesang er en vakker og enkel måte å synge tostemt på:

- **Hovedstemmen** synger melodien
- **Andrestemmen** synger samme rytme, men en ters over eller under

Mange norske folkeviser synges tradisjonelt med tersesang. Det gir en varm og vakker klang!

**Øv slik:**
1. Syng C-dur skalaen sammen (C-D-E-F-G-A-H-C)
2. Del i to grupper
3. Gruppe 1 synger: C - D - E - F - G
4. Gruppe 2 synger: E - F - G - A - H (en ters over)`,
    },
    {
      id: 'musikk-7-1-1-text-4',
      type: 'text',
      content: `**Lytting er nøkkelen**

Den viktigste ferdigheten i flerstemt sang er å lytte:

- **Lytt til helheten** - hvordan klinger alle stemmene sammen?
- **Lytt til de andre** - følger dere samme tempo?
- **Lytt til deg selv** - synger du riktig tone og styrke?
- **Lytt etter intonasjon** - synger alle rent?

En god korsanger bruker like mye energi på å lytte som på å synge!`,
    },
    {
      id: 'musikk-7-1-1-note-1',
      type: 'note',
      title: 'Dirigentens rolle',
      content: `Når dere synger flerstemt, er det viktig at noen leder. Dirigenten viser:
- Når dere skal starte
- Tempoet (hvor raskt)
- Dynamikken (hvor sterkt/svakt)
- Når dere skal slutte
Følg alltid dirigenten med blikket!`,
    },
    {
      id: 'musikk-7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er flerstemt sang?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner flerstemt sang?',
            solution: 'Flere stemmer synger forskjellige toner samtidig',
            multipleChoiceOptions: [
              'Flere stemmer synger forskjellige toner samtidig',
              'Alle synger samme tone',
              'En person synger alene',
              'Man synger uten tekst',
            ],
          },
        ],
        solution:
          'Flerstemt sang betyr at to eller flere stemmer synger forskjellige melodier eller toner samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en kanon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan synges en kanon?',
            solution: 'Alle synger samme melodi, men starter på forskjellige tidspunkter',
            multipleChoiceOptions: [
              'Alle synger samme melodi, men starter på forskjellige tidspunkter',
              'Alle synger forskjellige melodier',
              'Bare én person synger',
              'Man synger baklengs',
            ],
          },
        ],
        solution:
          'I en kanon synger alle gruppene samme melodi, men de starter etter hverandre slik at melodiene overlapper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke stemmer finnes i et blandet kor?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de fire hovedstemmene i et blandet kor?',
            solution: 'Sopran, alt, tenor og bass',
            multipleChoiceOptions: [
              'Sopran, alt, tenor og bass',
              'Høy, lav, midt og dyp',
              'Første, andre, tredje og fjerde',
              'Melodi, harmoni, rytme og bass',
            ],
          },
        ],
        solution:
          'Et blandet kor har fire stemmer: sopran og alt (kvinne/jentestemmer) og tenor og bass (manne/guttestemmer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er harmoni i musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skaper harmoni?',
            solution: 'Flere toner som klinger sammen',
            multipleChoiceOptions: [
              'Flere toner som klinger sammen',
              'En enkelt tone',
              'Bare rytme',
              'Bare tekst',
            ],
          },
        ],
        solution:
          'Harmoni oppstår når flere toner klinger samtidig og skaper en helhet som høres behagelig eller spent ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Syng en kanon',
        solution: `Øv "Broder Jakob" som kanon:

1. Lær melodien grundig - syng den unisont flere ganger
2. Del inn i grupper (start med to)
3. Gruppe 1 starter alene
4. Gruppe 2 begynner når gruppe 1 synger "Sover du?"
5. Syng hele sangen gjennom
6. Evaluer: Klarte dere å holde hver deres stemme?

Utfordring: Prøv med tre eller fire grupper!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Stemmepleie
// ============================================================================

export const CHAPTER_MUSIKK_7_1_2: TextbookChapter = {
  id: 'musikk-7-1-2',
  courseId: 'musikk-7',
  chapterNumber: '1.2',
  title: 'Stemmepleie',
  description: 'Lær hvordan du tar vare på stemmen din og synger sunt.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke stemmen bevisst og sunt',
    'forstå hvordan stemmen fungerer',
    'gjennomføre stemmeopppvarming',
  ],
  content: [
    {
      id: 'musikk-7-1-2-intro',
      type: 'text',
      content: `Stemmen din er et unikt instrument som bare du har! I motsetning til en gitar eller et piano, kan du ikke kjøpe en ny stemme hvis du ødelegger den. Derfor er det viktig å vite hvordan du tar vare på stemmen - både når du synger og i hverdagen.`,
    },
    {
      id: 'musikk-7-1-2-def-1',
      type: 'definition',
      title: 'Stemmebåndene',
      content: `Stemmebåndene er to små folder av slimhinne og muskel i strupehodet. De ligger vannrett og kan åpnes og lukkes. Når luft strømmer mellom dem og de vibrerer, skapes lyd. Jo raskere de vibrerer, jo høyere blir tonen.`,
    },
    {
      id: 'musikk-7-1-2-text-1',
      type: 'text',
      content: `**Hvordan stemmen fungerer**

Stemmen er et fantastisk samspill mellom flere deler av kroppen:

1. **Lungene** - pumper luft oppover
2. **Mellomgulvet (diafragma)** - kontrollerer luftstrømmen
3. **Stemmebåndene** - vibrerer og skaper lyd
4. **Strupehodet** - inneholder stemmebåndene
5. **Svelget, munnen og nesen** - former og forsterker lyden

Tenk på kroppen som et blåseinstrument: Lungene er belgene, stemmebåndene er rørbladet, og munnen er instrumentets kropp som former klangen.`,
    },
    {
      id: 'musikk-7-1-2-text-2',
      type: 'text',
      content: `**Stemmeskifte hos gutter**

I 12-15-årsalderen går gutter gjennom stemmeskifte (mutasjon):
- Strupehodet vokser og stemmebåndene blir lengre
- Stemmen blir dypere - opptil en oktav!
- I overgangsperioden kan stemmen være ustabil og "knekke"

**Dette er helt normalt!** Det tar noen måneder til et par år. I denne perioden:
- Ikke press stemmen
- Syng i et behagelig leie
- Vær tålmodig - den nye stemmen din blir fin!

Jenter har også et lite stemmeskifte, men det er mindre merkbart.`,
    },
    {
      id: 'musikk-7-1-2-warning-1',
      type: 'warning',
      title: 'Ting som skader stemmen',
      content: `Unngå disse tingene for å beskytte stemmen:
- **Roping og skriking** - sliter på stemmebåndene
- **Hvisking** - presser stemmebåndene unaturlig
- **Kremting** - irriterer stemmebåndene (drikk vann i stedet)
- **Røyking** - skader stemmebåndene permanent
- **For lite vann** - stemmebåndene trenger fuktighet
- **Synge når du er syk** - kan gi varige skader`,
    },
    {
      id: 'musikk-7-1-2-text-3',
      type: 'text',
      content: `**God pusteteknikk**

Pusten er drivkraften bak stemmen. God pusteteknikk gir:
- Bedre stemmekontroll
- Lengre fraser
- Mindre slitasje på stemmen

**Diafragmapust (magepust):**
1. Legg hånden på magen
2. Pust inn gjennom nesen - magen går UT
3. Pust ut gjennom munnen - magen går INN
4. Skuldrene skal være avslappet, ikke gå opp

**Øv daglig:** 5 minutter med bevisst magepust styrker mellomgulvet.`,
    },
    {
      id: 'musikk-7-1-2-example-1',
      type: 'example',
      title: 'Oppvarmingsrutine (10 minutter)',
      content: `**1. Kropp og pust (2 min)**
- Rulle skuldrene bakover
- Strekke nakken forsiktig til sidene
- Gjespe stort (åpner svelget)
- Dyp magepust x 5

**2. Summing og resonans (3 min)**
- Summe på "mmm" - kjenn vibrasjonene i ansiktet
- Variere tonehøyde opp og ned
- Leppetrill (pruste som en hest)

**3. Vokalarbeid (3 min)**
- Synge på "ma-me-mi-mo-mu" på en tone
- Gjenta på høyere toner
- Synge enkle skalaer på "la"

**4. Artikulasjon (2 min)**
- Tungespissøvelser: "la-la-la" raskt
- Leppegymnastikk: "ba-ba-ba"
- Taleøvelser: "Ibsen og Bjørnson spiste blåbær"`,
    },
    {
      id: 'musikk-7-1-2-tip-1',
      type: 'tip',
      title: 'Tips for sunn stemmebruk',
      content: `- **Drikk mye vann** - stemmebåndene trenger fuktighet (2 liter daglig)
- **Hvil stemmen** - ta pauser i løpet av dagen
- **Varm opp** - alltid før sang eller mye snakking
- **Unngå iskald drikke** - rett før sang
- **Sov godt** - stemmen trenger hvile
- **Bruk mikrofon** - når du må høres i store rom`,
    },
    {
      id: 'musikk-7-1-2-text-4',
      type: 'text',
      content: `**Registre i stemmen**

Stemmen har ulike "registre" som du kan bruke bevisst:

**Brystregister (modal stemme)**
- Normal talestemme
- Kraftig og full klang
- Føles som lyden kommer fra brystet

**Hovedregister (falsett/hodeklang)**
- Lysere og lettere klang
- Føles som lyden kommer fra hodet
- Gutter kan også synge i falsett!

**Blandregister (mixed voice)**
- Kombinasjon av bryst og hode
- Gir jevn overgang mellom registrene
- Profesjonelle sangere øver mye på dette`,
    },
    {
      id: 'musikk-7-1-2-note-1',
      type: 'note',
      title: 'Når bør du oppsøke lege?',
      content: `Oppsøk lege hvis:
- Stemmen er hes i mer enn 2 uker
- Du har smerter når du snakker eller synger
- Stemmen forsvinner helt
- Du føler en klump i halsen
Det kan være tegn på stemmebåndsknuter eller andre problemer som kan behandles.`,
    },
    {
      id: 'musikk-7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvordan skapes lyd i stemmen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det som vibrerer og skaper lyd?',
            solution: 'Stemmebåndene',
            multipleChoiceOptions: ['Stemmebåndene', 'Tungen', 'Leppene', 'Tennene'],
          },
        ],
        solution:
          'Stemmebåndene vibrerer når luft strømmer mellom dem, og dette skaper lyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er diafragmapust?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med magen når du puster inn med diafragmapust?',
            solution: 'Magen går ut',
            multipleChoiceOptions: [
              'Magen går ut',
              'Magen går inn',
              'Skuldrene går opp',
              'Brystet utvider seg mest',
            ],
          },
        ],
        solution:
          'Ved diafragmapust (magepust) går magen ut når du puster inn, fordi mellomgulvet senkes og presser innvollene ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva skader stemmen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken av disse tingene skader stemmen?',
            solution: 'Å hviske',
            multipleChoiceOptions: [
              'Å hviske',
              'Å drikke vann',
              'Å varme opp stemmen',
              'Å synge i behagelig leie',
            ],
          },
        ],
        solution:
          'Hvisking presser stemmebåndene sammen på en unaturlig måte og kan skade dem. Det er bedre å snakke lavt enn å hviske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er stemmeskifte?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med guttestemmen under stemmeskiftet?',
            solution: 'Stemmen blir dypere',
            multipleChoiceOptions: [
              'Stemmen blir dypere',
              'Stemmen blir lysere',
              'Stemmen forsvinner',
              'Ingenting skjer',
            ],
          },
        ],
        solution:
          'Under stemmeskiftet vokser guttenes strupehode og stemmebånd, noe som gjør stemmen dypere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Gjennomfør oppvarming',
        solution: `Gjennomfør oppvarmingsrutinen fra eksempelet:

1. Start med kropp og pust (2 min)
2. Fortsett med summøvelser (3 min)
3. Gjør vokalarbeid (3 min)
4. Avslutt med artikulasjon (2 min)

Evaluer etterpå:
- Hvordan føles stemmen nå sammenlignet med før?
- Hvilke øvelser likte du best?
- Er det noen øvelser du vil gjøre daglig?`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.1: Samspill og band
// ============================================================================

export const CHAPTER_MUSIKK_7_2_1: TextbookChapter = {
  id: 'musikk-7-2-1',
  courseId: 'musikk-7',
  chapterNumber: '2.1',
  title: 'Samspill og band',
  description: 'Lær å spille sammen med andre i en bandbesetning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'spille sammen med andre',
    'forstå ulike roller i en bandbesetning',
    'lytte og tilpasse seg i samspill',
  ],
  content: [
    {
      id: 'musikk-7-2-1-intro',
      type: 'text',
      content: `Å spille i band er en av de kuleste tingene du kan gjøre med musikk! Når flere musikere spiller sammen, blir summen større enn delene. I dette kapitlet skal du lære om de ulike instrumentene i et band og hvordan dere kan spille godt sammen.`,
    },
    {
      id: 'musikk-7-2-1-def-1',
      type: 'definition',
      title: 'Samspill',
      content: `Samspill er når flere musikere spiller sammen og tilpasser seg hverandre. Godt samspill krever at alle lytter til hverandre, holder samme tempo og dynamikk, og spiller sin rolle i helheten.`,
    },
    {
      id: 'musikk-7-2-1-text-1',
      type: 'text',
      content: `**Den klassiske bandbesetningen**

Et typisk rockeband har disse instrumentene:

**Trommer**
- Holder takten og gir rytmisk driv
- "Hjertet" i bandet - alle følger trommeslageren
- Spiller grooves og fills

**Bass**
- Binder sammen trommer og harmonikk
- Spiller grunntonene i akkordene
- Lager det dype fundamentet

**Gitar/Keyboard**
- Spiller akkorder og melodier
- Fyller ut lydbildet
- Kan spille riff og soloer

**Vokal**
- Synger melodien og teksten
- Kommuniserer budskapet
- Ofte "ansiktet" utad`,
    },
    {
      id: 'musikk-7-2-1-text-2',
      type: 'text',
      content: `**Trommenes rolle**

Trommeslageren er bandets "motor". Grunnleggende trommeoppsett:

- **Hi-hat**: To cymbaler som åpnes/lukkes - holder pulsen
- **Skarptromme**: Gir "backbeat" på slag 2 og 4
- **Basstromme**: Spilles med foten - gir det dype drivet
- **Cymbaler**: Crash og ride for aksenter og variasjon

**En enkel rock-groove:**
- Hi-hat: Spiller åttendeler (1-og-2-og-3-og-4-og)
- Skarptromme: Slag 2 og 4
- Basstromme: Slag 1 og 3

Dette kalles en "fire on the floor"-groove og er grunnlaget for utallige låter!`,
    },
    {
      id: 'musikk-7-2-1-example-1',
      type: 'example',
      title: 'Bassens jobb',
      content: `Bassen binder sammen rytmeseksjonen (trommer) med harmoni-instrumentene (gitar/keyboard).

**Grunnleggende basslinjer:**
- Spill **grunntonen** i akkorden på slag 1
- Hold tonen eller gjenta på slag 3
- Følg basstrommens rytme

**Eksempel i C-dur:**
Akkord: C | C | G | G |
Bass:   C | C | G | G | (spill grunntonen)

Når du blir bedre, kan du legge til flere toner, men start enkelt!`,
    },
    {
      id: 'musikk-7-2-1-text-3',
      type: 'text',
      content: `**Gitarens rolle**

Gitaren kan ha mange funksjoner i bandet:

**Rytmegitar**
- Spiller akkorder som følger sangen
- Gir harmonisk fylde
- Bruker ofte strumming (strøk over strengene)

**Melodigitar/Lead**
- Spiller melodier og riff
- Tar soloer
- Legger til "hooks" og kjennetegn

**I et typisk band:**
- Vers: Rolig rytmegitar
- Refreng: Kraftigere akkorder
- Mellomspill: Gitarsolo eller riff`,
    },
    {
      id: 'musikk-7-2-1-tip-1',
      type: 'tip',
      title: 'Nøkkelen til godt samspill',
      content: `**Lytt mer enn du spiller!**
- Juster volumet slik at alle høres
- Følg trommeslageren - hen bestemmer tempoet
- Gi rom til hverandre
- Øyekontakt hjelper med koordinering
- Spill enklere i starten - det viktigste er å spille SAMMEN`,
    },
    {
      id: 'musikk-7-2-1-text-4',
      type: 'text',
      content: `**Hvordan starte en låt**

Det finnes flere måter å starte en låt på i band:

**1. Inntellingen**
- Trommeslageren teller: "1-2-3-4" eller "1-2-1-2-3-4"
- Alle starter samtidig på neste "1"

**2. Trommene starter**
- Trommeslageren spiller en intro-groove
- De andre kommer inn etter noen takter

**3. Et instrument starter**
- F.eks. gitaren spiller introen alene
- De andre instrumentene kommer gradvis inn

**4. Nikket**
- Uten lyd - en i bandet nikker tempoet
- Alle starter på nikk nummer 4`,
    },
    {
      id: 'musikk-7-2-1-text-5',
      type: 'text',
      content: `**Vanlige låtstrukturer**

De fleste poplåter følger en struktur:

**Intro → Vers → Refreng → Vers → Refreng → Bro → Refreng → Outro**

- **Intro**: Instrumentalt, setter stemningen
- **Vers**: Forteller historien, roligere enn refrenget
- **Refreng**: Høydepunktet, mest energi, fengende melodi
- **Bro**: Ny del som bryter opp, ofte før siste refreng
- **Outro**: Avslutningen, kan fade ut eller ha markert slutt

Når dere øver, snakk om strukturen: "Vi tar verset to ganger, så refrenget..."`,
    },
    {
      id: 'musikk-7-2-1-note-1',
      type: 'note',
      title: 'Dynamikk i band',
      content: `Dynamikk handler om hvor sterkt eller svakt dere spiller. Tenk på låten som en reise:
- **Vers**: Roligere, mer tilbakeholden
- **Refreng**: Kraftigere, mer energi
- **Bro**: Kan være stille eller bygge opp
Kontrasten mellom sterkt og svakt gjør musikken interessant!`,
    },
    {
      id: 'musikk-7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er trommeslagerens rolle i bandet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er trommeslagerens viktigste oppgave?',
            solution: 'Holde takten og gi rytmisk driv',
            multipleChoiceOptions: [
              'Holde takten og gi rytmisk driv',
              'Spille melodien',
              'Synge teksten',
              'Spille akkordene',
            ],
          },
        ],
        solution:
          'Trommeslageren holder takten og er "hjertet" i bandet - alle de andre følger trommene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er bassens funksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør bassen i bandet?',
            solution: 'Binder sammen trommer og harmonikk',
            multipleChoiceOptions: [
              'Binder sammen trommer og harmonikk',
              'Spiller bare soloer',
              'Synger andrestemme',
              'Spiller bare på refrengene',
            ],
          },
        ],
        solution:
          'Bassen binder sammen rytmeseksjonen (trommer) med harmonien (gitar/keyboard) og spiller grunntonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor kommer skarptrommeslag i en typisk rockrytme?',
        subTasks: [
          {
            label: 'a',
            task: 'På hvilke slag spilles skarptromma vanligvis?',
            solution: 'Slag 2 og 4',
            multipleChoiceOptions: ['Slag 2 og 4', 'Slag 1 og 3', 'Bare slag 1', 'Alle fire slag'],
          },
        ],
        solution:
          'I rock og pop spilles skarptromma på slag 2 og 4, som gir den karakteristiske "backbeat".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er det viktigste for godt samspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er nøkkelen til godt samspill?',
            solution: 'Å lytte til de andre',
            multipleChoiceOptions: [
              'Å lytte til de andre',
              'Å spille så høyt som mulig',
              'Å spille så mange noter som mulig',
              'Å alltid ta soloer',
            ],
          },
        ],
        solution:
          'Godt samspill krever at alle lytter til hverandre, tilpasser seg og gir rom til alle instrumentene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Spill sammen',
        solution: `Prøv å spille en enkel låt sammen:

1. **Velg en enkel sang** med få akkorder (f.eks. en låt med C, G, Am, F)
2. **Fordel roller:**
   - Trommer: Enkel groove (hi-hat + skarptromme + basstromme)
   - Bass: Grunntonene i akkordene
   - Gitar: Akkordene med enkel strumming
   - Vokal/ekstra: Melodi eller andre instrumenter

3. **Start sakte** - tempo er viktigere enn fart
4. **Lytt til hverandre** - juster volum og timing
5. **Evaluer:** Hva fungerte? Hva kan forbedres?`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Akkorder og akkompagnement
// ============================================================================

export const CHAPTER_MUSIKK_7_2_2: TextbookChapter = {
  id: 'musikk-7-2-2',
  courseId: 'musikk-7',
  chapterNumber: '2.2',
  title: 'Akkorder og akkompagnement',
  description: 'Lær å spille akkorder og akkompagnere sanger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'akkompagnere sanger med enkle akkorder',
    'forstå oppbyggingen av dur- og mollakkorder',
    'spille akkordskjemaer på gitar eller keyboard',
  ],
  content: [
    {
      id: 'musikk-7-2-2-intro',
      type: 'text',
      content: `Akkorder er byggesteinene i populærmusikk. Når du kan noen få akkorder, kan du akkompagnere hundrevis av sanger! I dette kapitlet lærer du hva akkorder er, hvordan de bygges opp, og hvordan du spiller dem på gitar eller keyboard.`,
    },
    {
      id: 'musikk-7-2-2-def-1',
      type: 'definition',
      title: 'Akkord',
      content: `En akkord er tre eller flere toner som klinger samtidig. De vanligste akkordene har tre toner: en grunntone, en ters og en kvint. Akkorder gir musikken harmonisk fylde og danner grunnlaget for nesten all populærmusikk.`,
    },
    {
      id: 'musikk-7-2-2-text-1',
      type: 'text',
      content: `**Dur og moll**

De to grunnleggende akkordtypene er dur og moll:

**Dur-akkorder**
- Høres glade og lyse ut
- Har stor ters (4 halvtoner over grunntonen)
- Eksempler: C, G, D, F

**Moll-akkorder**
- Høres mer triste eller melankolske ut
- Har liten ters (3 halvtoner over grunntonen)
- Skrives med liten "m": Am, Em, Dm

Den eneste forskjellen er tersenens høyde - en halvtone utgjør hele forskjellen mellom glad og trist!`,
    },
    {
      id: 'musikk-7-2-2-text-2',
      type: 'text',
      content: `**Akkordoppbygging**

En dur-akkord bygges slik (fra grunntonen):
1. **Grunntone** - tonen akkorden er oppkalt etter
2. **Stor ters** - 4 halvtoner over grunntonen
3. **Ren kvint** - 7 halvtoner over grunntonen

**Eksempel: C-dur**
- C (grunntone)
- E (stor ters, 4 halvtoner over C)
- G (ren kvint, 7 halvtoner over C)

**Eksempel: A-moll**
- A (grunntone)
- C (liten ters, 3 halvtoner over A)
- E (ren kvint, 7 halvtoner over A)`,
    },
    {
      id: 'musikk-7-2-2-example-1',
      type: 'example',
      title: 'De fire magiske akkordene',
      content: `Med bare fire akkorder kan du spille tusenvis av sanger! Denne progresjonen er utrolig vanlig:

**C - G - Am - F** (eller i andre tonearter: I - V - vi - IV)

Sanger som bruker denne progresjonen:
- "Let It Be" (The Beatles)
- "No Woman No Cry" (Bob Marley)
- "With or Without You" (U2)
- "Someone Like You" (Adele)
- Utallige andre!

Øv disse fire akkordene, og du kan spille med på mange sanger!`,
    },
    {
      id: 'musikk-7-2-2-text-3',
      type: 'text',
      content: `**Gitar: Åpne akkorder**

På gitar er disse akkordene enklest å lære først:

**Em (E-moll)**
- Enkleste akkorden!
- Peke- og langfinger på 2. bånd, streng 5 og 4
- Alle strenger kan klinge

**Am (A-moll)**
- Peke-, lang- og ringfinger på 2., 3. og 4. streng
- Ikke spill streng 6

**C-dur**
- Ringfinger på streng 5, langfinger på streng 4, pekefinger på streng 2
- Ikke spill streng 6

**G-dur**
- Flere varianter finnes
- Ringfinger streng 6, langfinger streng 5, lillefinger streng 1`,
    },
    {
      id: 'musikk-7-2-2-text-4',
      type: 'text',
      content: `**Keyboard: Grunnleggende akkorder**

På keyboard er akkorder logiske å lære:

**C-dur**: C - E - G (hvite tangenter, hopp over én tangent mellom hver)
**D-moll**: D - F - A
**E-moll**: E - G - H
**F-dur**: F - A - C
**G-dur**: G - H - D
**A-moll**: A - C - E

**Tips for keyboard:**
- Spill med høyre hånd
- Bruk tommel, langfinger og lillefinger
- Venstre hånd kan spille grunntonen i bassen
- Start med å øve én akkord om gangen`,
    },
    {
      id: 'musikk-7-2-2-tip-1',
      type: 'tip',
      title: 'Øvetips for akkorder',
      content: `- **Start sakte** - bytt mellom to akkorder først
- **Tren fingerstyrke** - det tar tid å bygge muskler
- **Spill litt hver dag** - 15 minutter daglig slår 2 timer én gang i uka
- **Bruk akkorddiagrammer** - de viser hvor fingrene skal
- **Ikke se på fingrene hele tiden** - føl deg fram
- **Ha tålmodighet** - alle synes det er vanskelig i starten!`,
    },
    {
      id: 'musikk-7-2-2-text-5',
      type: 'text',
      content: `**Strumming på gitar**

Strumming er måten du slår over strengene:

**Grunnleggende strumming-mønstre:**

**Mønster 1 (enklest):**
↓ ↓ ↓ ↓ (slag ned på hvert taktslag)

**Mønster 2:**
↓ - ↓ ↑ ↓ ↑ (ned-pause-ned-opp-ned-opp)

**Mønster 3 (vanlig pop/rock):**
↓ ↓ ↑ - ↑ ↓ ↑

**Tips:**
- Hold håndleddet avslappet
- Bevegelsen kommer fra underarmen
- Armen beveger seg jevnt, men du treffer ikke strengene på alle slag
- Tell høyt mens du strummer: "1-og-2-og-3-og-4-og"`,
    },
    {
      id: 'musikk-7-2-2-note-1',
      type: 'note',
      title: 'Akkordskjema',
      content: `Et akkordskjema viser hvilke akkorder som brukes i en sang og når de skifter:

| C       | G       | Am      | F       |
| C       | G       | Am      | F       |

Hver rute = én takt. Spill akkorden og tell til 4, så bytt til neste.`,
    },
    {
      id: 'musikk-7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en akkord?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en akkord?',
            solution: 'Tre eller flere toner som klinger samtidig',
            multipleChoiceOptions: [
              'Tre eller flere toner som klinger samtidig',
              'En enkelt tone',
              'To toner etter hverandre',
              'Et rytmemønster',
            ],
          },
        ],
        solution:
          'En akkord består av tre eller flere toner som spilles samtidig og skaper harmoni.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på dur og moll?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan høres dur-akkorder ut sammenlignet med moll?',
            solution: 'Dur høres glad ut, moll høres trist ut',
            multipleChoiceOptions: [
              'Dur høres glad ut, moll høres trist ut',
              'Moll høres glad ut, dur høres trist ut',
              'De høres helt like ut',
              'Dur er høyere enn moll',
            ],
          },
        ],
        solution:
          'Dur-akkorder har stor ters og høres glade ut, mens moll-akkorder har liten ters og høres mer melankolske ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke toner er i en C-dur akkord?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke tre toner utgjør C-dur?',
            solution: 'C - E - G',
            multipleChoiceOptions: ['C - E - G', 'C - D - E', 'C - F - G', 'C - E - A'],
          },
        ],
        solution:
          'C-dur består av tonene C (grunntone), E (stor ters) og G (ren kvint).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr "Am" i et akkordskjema?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står "Am" for?',
            solution: 'A-moll',
            multipleChoiceOptions: ['A-moll', 'A-dur', 'Akkord med A', 'A-major'],
          },
        ],
        solution:
          'Am er forkortelsen for A-moll. Den lille m-en viser at det er en mollakkord.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Spill akkordrekke',
        solution: `Øv på akkordrekken C - G - Am - F:

**På gitar:**
1. Lær hver akkord for seg
2. Bytt mellom C og G - gjør dette 10 ganger
3. Bytt mellom Am og F - gjør dette 10 ganger
4. Sett sammen: C - G - Am - F
5. Spill med enkel strumming: 4 slag per akkord

**På keyboard:**
1. Finn tonene i hver akkord
2. Spill C (C-E-G), hold i 4 slag
3. Bytt til G (G-H-D), hold i 4 slag
4. Fortsett med Am og F
5. Gjenta hele rekken flere ganger`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-2-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Akkompagnere en sang',
        solution: `Velg en enkel sang og akkompagner den:

1. **Finn akkordskjemaet** på nettet (søk: "[sangtittel] chords")
2. **Øv akkordene** i sangen hver for seg
3. **Spill gjennom** sangen langsomt uten å synge
4. **Legg til sang** når akkordene sitter

**Forslag til enkle sanger:**
- "Knocking on Heaven's Door" (G - D - Am - Am)
- "Vise sull sansen" (norske folkeviser)
- "Imagine" (C - F - C - F...)

Del opp i mindre deler og mestre én del før du går videre!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.1: Komponering
// ============================================================================

export const CHAPTER_MUSIKK_7_3_1: TextbookChapter = {
  id: 'musikk-7-3-1',
  courseId: 'musikk-7',
  chapterNumber: '3.1',
  title: 'Komponering',
  description: 'Lær å lage din egen musikk fra bunnen av.',
  estimatedMinutes: 55,
  competenceGoals: [
    'komponere enkel melodi og tekst',
    'bruke musikalske virkemidler bevisst',
    'utvikle egne musikalske ideer',
  ],
  content: [
    {
      id: 'musikk-7-3-1-intro',
      type: 'text',
      content: `Har du noen gang ønsket å lage din egen sang? Komponering handler om å skape musikk - fra de første ideene til ferdig låt. Du trenger ikke være et musikkgeni for å komponere. Med noen enkle teknikker kan alle lage musikk som betyr noe for dem!`,
    },
    {
      id: 'musikk-7-3-1-def-1',
      type: 'definition',
      title: 'Komponering',
      content: `Komponering er prosessen med å skape ny musikk. Det kan være å lage en melodi, skrive en tekst, sette sammen akkorder, eller kombinere alle disse elementene til en ferdig sang eller et musikkstykke.`,
    },
    {
      id: 'musikk-7-3-1-text-1',
      type: 'text',
      content: `**Hvor begynner man?**

Det finnes ingen "riktig" måte å komponere på. Ulike komponister starter på ulike måter:

**Start med melodi**
- Nynn eller syng tilfeldige toner til noe høres bra ut
- Ta opp ideene på telefonen med en gang!
- Mange melodier kommer når man minst venter det

**Start med tekst**
- Skriv om noe som betyr noe for deg
- La ordene inspirere melodien
- Rytmen i teksten kan bli rytmen i musikken

**Start med akkorder**
- Spill akkordrekker til du finner noe du liker
- La akkordene inspirere melodi og tekst
- Mange hits starter med en god akkordprogresjon

**Start med rytme**
- Lag en beat eller groove
- Bygg resten av låten rundt rytmen
- Fungerer spesielt bra for hip-hop og elektronisk musikk`,
    },
    {
      id: 'musikk-7-3-1-text-2',
      type: 'text',
      content: `**Melodiens byggeklosser**

En god melodi har ofte disse elementene:

**Motiv**
- En kort musikalsk ide (2-4 toner)
- Gjentas og varieres gjennom låten
- Eksempel: "Da-da-da-daa" fra Beethovens 5. symfoni

**Fraer**
- Lengre melodilinjer (4-8 takter)
- Som setninger i musikk
- Ender ofte med en "pustepause"

**Sekvenser**
- Samme melodi gjentatt på forskjellig tonehøyde
- Skaper fremdrift og spenning

**Sprang og trinn**
- Trinnvis bevegelse (nabotoner) er sangbart
- Store sprang skaper oppmerksomhet
- Kombiner begge for variasjon`,
    },
    {
      id: 'musikk-7-3-1-example-1',
      type: 'example',
      title: 'Lag en enkel melodi',
      content: `**Steg for steg:**

1. **Velg en skala** - start med C-dur (bare hvite tangenter)
2. **Bestem rytmen** - bruk ordene i en setning:
   "Jeg vil spise pizza" = lang-kort-kort-kort-kort-lang
3. **Finn toner** - start på en tone, beveeg deg trinnvis
4. **Eksperimenter** - prøv ulike kombinasjoner
5. **Gjenta og varier** - la motivet komme tilbake

**Eksempel:**
Tekst: "Sol og regn og vind"
Rytme: lang - kort - lang - kort - lang
Toner: C - D - E - D - C (opp og ned igjen)

Prøv å lage din egen variant!`,
    },
    {
      id: 'musikk-7-3-1-text-3',
      type: 'text',
      content: `**Skrive tekst til sang**

God sangtekst er annerledes enn dikt:

**Bruk bilder og følelser**
- "Hjertet mitt brenner" i stedet for "Jeg er glad i deg"
- Vis, ikke fortell
- Konkrete detaljer skaper følelser

**Tenk på rim og rytme**
- Rim på slutten av linjene (enkelt og effektivt)
- Rytmen i ordene må passe med melodien
- Viktige ord bør komme på sterke slag

**Strukturer teksten**
- Vers: Forteller historien, ulik tekst hver gang
- Refreng: Hovedbudskapet, samme tekst hver gang
- Bro: Ny vinkel, overraskelse

**Tips:**
- Start med et tema du bryr deg om
- Skriv fritt først, redigér etterpå
- Ikke vær redd for å kaste det som ikke fungerer`,
    },
    {
      id: 'musikk-7-3-1-tip-1',
      type: 'tip',
      title: 'Overkom skrivesperre',
      content: `Alle komponister møter "blanke øyeblikk". Her er noen triks:
- **Sett en tidsbegrensning** - "Jeg skal skrive noe på 15 minutter"
- **Bruk begrensninger** - "Bare tre toner" tvinger kreativitet
- **Stjel med stil** - La deg inspirere av favorittlåter
- **Start midt i** - Du trenger ikke starte med introen
- **Aksepter det dårlige** - Første utkast skal bare eksistere`,
    },
    {
      id: 'musikk-7-3-1-text-4',
      type: 'text',
      content: `**Sette melodi og akkorder sammen**

Når melodien er klar, trenger den akkorder:

**Finn tonearten**
- Hvilken tone føles som "hjem" i melodien?
- Det er sannsynligvis tonearten

**Velg akkorder som passer**
- Akkorder som inneholder meloditonen fungerer ofte
- Eksempel: Hvis melodien synger E, prøv C-dur (C-E-G) eller Am (A-C-E)

**Vanlige progresjoner å prøve:**
- I - IV - V - I (C - F - G - C)
- I - V - vi - IV (C - G - Am - F)
- I - vi - IV - V (C - Am - F - G)

**Eksperimenter** - det finnes ingen regler!`,
    },
    {
      id: 'musikk-7-3-1-note-1',
      type: 'note',
      title: 'Dokumenter ideene dine',
      content: `Gode ideer forsvinner fort! Bruk telefonen til å:
- Ta opp melodiideer (syng inn!)
- Skrive ned tekstfragmenter i notat-appen
- Filme akkordprogresjoner
Bedre å ha 100 halvferdige ideer enn null ferdige låter.`,
    },
    {
      id: 'musikk-7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et motiv i musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner et musikalsk motiv?',
            solution: 'En kort musikalsk idé som gjentas og varieres',
            multipleChoiceOptions: [
              'En kort musikalsk idé som gjentas og varieres',
              'En hel sang',
              'Bare rytme uten toner',
              'Slutten av en låt',
            ],
          },
        ],
        solution:
          'Et motiv er en kort musikalsk idé (vanligvis 2-4 toner) som danner grunnlaget for en større komposisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på vers og refreng i en sang?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner et refreng?',
            solution: 'Samme tekst hver gang, ofte hovedbudskapet',
            multipleChoiceOptions: [
              'Samme tekst hver gang, ofte hovedbudskapet',
              'Ny tekst hver gang',
              'Alltid uten melodi',
              'Kommer bare én gang i sangen',
            ],
          },
        ],
        solution:
          'Refrenget har samme tekst og melodi hver gang det kommer, og inneholder ofte sangens hovedbudskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en sekvens i melodikomponering?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en musikalsk sekvens?',
            solution: 'Samme melodi gjentatt på forskjellig tonehøyde',
            multipleChoiceOptions: [
              'Samme melodi gjentatt på forskjellig tonehøyde',
              'Helt forskjellige melodier',
              'Bare akkorder uten melodi',
              'Et lydopptak',
            ],
          },
        ],
        solution:
          'En sekvens er når en melodisk frase gjentas på et høyere eller lavere tonalt nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et motiv',
        solution: `Lag et musikalsk motiv:

1. **Velg 3-4 toner** fra C-dur skalaen
2. **Gi dem en rytme** - eksempel: lang-kort-kort-lang
3. **Syng eller spill** motivet flere ganger
4. **Varier det:**
   - Høyere
   - Lavere
   - Raskere
   - Baklengs
5. **Ta opp** det du liker best

Eksempel på motiv: C-D-E-C (sol-la-ti-sol)
Variert: E-F-G-E (samme mønster, høyere)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Musikkteknologi
// ============================================================================

export const CHAPTER_MUSIKK_7_3_2: TextbookChapter = {
  id: 'musikk-7-3-2',
  courseId: 'musikk-7',
  chapterNumber: '3.2',
  title: 'Musikkteknologi',
  description: 'Lær å bruke digitale verktøy for å lage og produsere musikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke musikkteknologi til å skape og bearbeide musikk',
    'forstå grunnleggende prinsipper for lydopptak',
    'kjenne til ulike musikk-apper og programmer',
  ],
  content: [
    {
      id: 'musikk-7-3-2-intro',
      type: 'text',
      content: `I dag kan du lage profesjonell musikk med bare en telefon eller en datamaskin! Musikkteknologi har gjort det mulig for alle å bli produsenter, komponister og artister. I dette kapitlet lærer du om verktøyene som brukes til å lage, ta opp og bearbeide musikk.`,
    },
    {
      id: 'musikk-7-3-2-def-1',
      type: 'definition',
      title: 'DAW (Digital Audio Workstation)',
      content: `En DAW er et dataprogram for å ta opp, redigere og produsere musikk. Det er som et digitalt lydstudio. Kjente DAWs er GarageBand, Ableton Live, FL Studio og Logic Pro.`,
    },
    {
      id: 'musikk-7-3-2-text-1',
      type: 'text',
      content: `**Gratis og enkle verktøy**

Du trenger ikke dyre programmer for å komme i gang:

**GarageBand (gratis på Apple-enheter)**
- Perfekt for nybegynnere
- Ferdiglagde loops og instrumenter
- Enkelt å ta opp vokal og instrumenter

**Soundtrap (nettbasert)**
- Fungerer i nettleseren
- Gratis versjon tilgjengelig
- Kan samarbeide med andre online

**BandLab (gratis)**
- Nettbasert og mobil-app
- Mange gratisfunksjoner
- Stort bibliotek med lyder

**Audacity (gratis, datamaskin)**
- Enkel lydopptak og redigering
- Perfekt for podcaster og stemmopptak`,
    },
    {
      id: 'musikk-7-3-2-text-2',
      type: 'text',
      content: `**Grunnleggende i en DAW**

De fleste musikkprogrammer har disse elementene:

**Spor (tracks)**
- Hvert instrument/stemme har sitt eget spor
- Kan ha mange spor oppå hverandre
- Juster volum og panorering for hvert spor

**Tidslinje**
- Viser musikken fra venstre til høyre
- Taktstreker og tempo vises
- Dra og slipp elementer dit du vil ha dem

**Loops og samples**
- Ferdiglagde musikkbiter du kan bruke
- Dra inn i prosjektet og kombiner
- Perfekt for å komme raskt i gang

**Virtuelle instrumenter**
- Spill piano, trommer osv. med tastaturet
- Eller tegn inn noter med musen
- Høres ut som ekte instrumenter!`,
    },
    {
      id: 'musikk-7-3-2-example-1',
      type: 'example',
      title: 'Lag en beat i GarageBand',
      content: `**Steg for steg:**

1. **Opprett nytt prosjekt** - velg "Empty Project"
2. **Legg til trommer:**
   - Klikk "+" for nytt spor
   - Velg "Drummer" (automatisk trommeakkompagnement)
   - Eller velg "Software Instrument" → Drum Kit
3. **Juster grooven:**
   - Dra i "kompleksitet" for flere/færre trommer
   - Prøv ulike tromme-stiler
4. **Legg til bass:**
   - Nytt spor → Software Instrument → Bass
   - Spill inn eller tegn inn noter
5. **Legg til flere elementer** - loops, synth, gitar...
6. **Mikse** - juster volum på hvert spor så det balanserer`,
    },
    {
      id: 'musikk-7-3-2-text-3',
      type: 'text',
      content: `**Ta opp lyd**

For å ta opp sang eller akustiske instrumenter trenger du:

**Mikrofon**
- Innebygd mikrofon fungerer til øving
- USB-mikrofon gir bedre kvalitet
- Kondensatormikrofon er profesjonell standard

**Gode opptakstips:**
- Finn et stille rom uten ekko
- Mikrofonen 15-20 cm fra munnen
- Bruk hodetelefoner når du tar opp
- Ta opp flere versjoner (takes)
- Beste takes kan settes sammen etterpå

**Lydkort/interface**
- Kobler mikrofon og instrument til datamaskinen
- Gir bedre lydkvalitet enn innebygd
- Billige alternativer finnes (fra ca. 500 kr)`,
    },
    {
      id: 'musikk-7-3-2-tip-1',
      type: 'tip',
      title: 'Organiser prosjektet',
      content: `God organisering sparer tid:
- **Navngi sporene** - "Vokal", "Gitar", ikke "Spor 1"
- **Bruk farger** - samme farge på relaterte spor
- **Lag mapper** - grupper trommer, vokal, etc.
- **Lagre ofte** - bruk "Lagre som" for nye versjoner
- **Backup** - ha kopier på nett (Google Drive, iCloud)`,
    },
    {
      id: 'musikk-7-3-2-text-4',
      type: 'text',
      content: `**MIDI og lydopptak**

Det er to hovedtyper opptak:

**MIDI (Musical Instrument Digital Interface)**
- Tar opp hvilke toner du spiller, ikke selve lyden
- Kan endres etterpå (feil toner, timing)
- Brukes med virtuelle instrumenter
- Filene er små

**Lydopptak (audio)**
- Tar opp selve lydbølgene
- Vokal, akustiske instrumenter, mikrofon
- Kan ikke endre tonene etterpå
- Større filer

**Hva bør du bruke?**
- Keyboard/synth → MIDI
- Vokal → Lyd
- Gitar → Lyd (eller MIDI med spesialutstyr)
- Trommer → Begge deler (MIDI for programmering, lyd for ekte trommer)`,
    },
    {
      id: 'musikk-7-3-2-text-5',
      type: 'text',
      content: `**Grunnleggende miksing**

Miksing handler om å få alle elementer til å høres bra ut sammen:

**Volum**
- Balanser sporene så alt høres
- Viktigste elementer (vokal, melodi) fremst
- Ikke ha alt på maks - behold "headroom"

**Panorering (panning)**
- Plasser lyder til venstre eller høyre
- Slagverk gjerne spredt
- Bass og vokal ofte i midten

**EQ (equalization)**
- Juster frekvenser (bass, mellomtone, diskant)
- Fjern "mudder" i lave frekvenser
- Gi luft i høye frekvenser

**Effekter**
- Reverb: Gir romfølelse
- Delay: Ekko-effekt
- Kompresjon: Jevner ut dynamikk`,
    },
    {
      id: 'musikk-7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en DAW?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står DAW for?',
            solution: 'Digital Audio Workstation',
            multipleChoiceOptions: [
              'Digital Audio Workstation',
              'Digital Advanced Writing',
              'Direct Audio Wave',
              'Dynamic Audio Work',
            ],
          },
        ],
        solution:
          'DAW står for Digital Audio Workstation - et program for å ta opp, redigere og produsere musikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på MIDI og lydopptak?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva tar MIDI opp?',
            solution: 'Hvilke toner som spilles, ikke selve lyden',
            multipleChoiceOptions: [
              'Hvilke toner som spilles, ikke selve lyden',
              'Selve lydbølgene',
              'Bare vokal',
              'Video sammen med lyd',
            ],
          },
        ],
        solution:
          'MIDI tar opp informasjon om hvilke toner som spilles (tonehøyde, lengde, styrke), ikke selve lyden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør panorering (panning)?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva justerer panorering?',
            solution: 'Plasseringen av lyd mellom venstre og høyre',
            multipleChoiceOptions: [
              'Plasseringen av lyd mellom venstre og høyre',
              'Volumet på lyden',
              'Tempoet i musikken',
              'Tonehøyden',
            ],
          },
        ],
        solution:
          'Panorering plasserer lyden i stereobildet - fra venstre til høyre øre i hodetelefonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre gratis musikkprogrammer',
        solution: `Tre gratis musikkprogrammer:

1. **GarageBand** - Gratis på Apple-enheter, perfekt for nybegynnere
2. **Audacity** - Gratis for PC og Mac, bra for enkel lydopptak og redigering
3. **BandLab** - Nettbasert og app, fungerer på alle enheter

Andre alternativer:
- Soundtrap (nettbasert)
- LMMS (gratis DAW for PC/Mac/Linux)
- Cakewalk by BandLab (gratis for Windows)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en beat',
        solution: `Bruk GarageBand, Soundtrap eller BandLab til å lage en enkel beat:

1. **Åpne programmet** og start nytt prosjekt
2. **Legg til trommer:**
   - Bruk en trommeloop eller
   - Programmer en enkel groove med kick og snare
3. **Legg til bass:**
   - Bruk en bass-loop eller
   - Spill inn en enkel basslinje
4. **Legg til én ting til** - synth, gitar-loop, etc.
5. **Arranger:**
   - Intro: 4 takter
   - Hovedel: 8 takter
   - Variasjon: 4 takter
6. **Miks:** Juster volum på sporene
7. **Eksporter** og del med klassen!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.1: Musikkhistorie
// ============================================================================

export const CHAPTER_MUSIKK_7_4_1: TextbookChapter = {
  id: 'musikk-7-4-1',
  courseId: 'musikk-7',
  chapterNumber: '4.1',
  title: 'Musikkhistorie',
  description: 'En reise gjennom musikkens utvikling fra klassisk til moderne tid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige perioder i musikkhistorien',
    'gjenkjenne kjennetegn ved ulike musikkstiler',
    'se sammenhenger mellom musikk og samfunnsutvikling',
  ],
  content: [
    {
      id: 'musikk-7-4-1-intro',
      type: 'text',
      content: `Musikk har fulgt mennesker i tusenvis av år - fra de første trommene til dagens streaming. Ved å forstå musikkhistorien, forstår vi også hvordan samfunnet har utviklet seg. La oss reise gjennom tid og oppdage hvordan musikken har forandret seg!`,
    },
    {
      id: 'musikk-7-4-1-text-1',
      type: 'text',
      content: `**Barokken (ca. 1600-1750)**

Barokken var en tid med storslått og dekorert musikk:

**Kjennetegn:**
- Kompleks flerstemmighet (polyfoni)
- Ornamentert melodi med mange "krøller"
- Cembalo og orgel som viktige instrumenter
- Kontrastfylt dynamikk (sterkt-svakt)

**Viktige komponister:**
- **Johann Sebastian Bach** (Tyskland) - Mesterverk for orgel og kor
- **Antonio Vivaldi** (Italia) - "De fire årstider"
- **Georg Friedrich Händel** (Tyskland/England) - "Messias"

**Visste du?** Bach hadde 20 barn og skrev musikk nesten hver dag hele livet!`,
    },
    {
      id: 'musikk-7-4-1-text-2',
      type: 'text',
      content: `**Klassisismen (ca. 1750-1820)**

Klassisismen søkte balanse, klarhet og eleganse:

**Kjennetegn:**
- Klare melodier med akkompagnement
- Symmetriske former (sonateform)
- Orkesteret vokser - pianoet tar over for cembalo
- Mer dynamiske nyanser

**Viktige komponister:**
- **Wolfgang Amadeus Mozart** (Østerrike) - Vidunderbarn, skrev operaer og symfonier
- **Joseph Haydn** (Østerrike) - "Symfoniens far"
- **Ludwig van Beethoven** (Tyskland) - Brobygger til romantikken

**Visste du?** Mozart begynte å komponere da han var 5 år gammel!`,
    },
    {
      id: 'musikk-7-4-1-text-3',
      type: 'text',
      content: `**Romantikken (ca. 1820-1900)**

Romantikken handlet om følelser og det personlige uttrykket:

**Kjennetegn:**
- Sterke følelser og dramatikk
- Store orkestre med mange instrumenter
- Nasjonalromantikk - bruk av folketoner
- Programmusikk (musikk som forteller historier)

**Viktige komponister:**
- **Edvard Grieg** (Norge) - Peer Gynt, Klaverkonsert
- **Pjotr Tsjajkovskij** (Russland) - Nøtteknekkeren, Svanesjøen
- **Johannes Brahms** (Tyskland) - Symfonier og kammermusikk
- **Frédéric Chopin** (Polen) - Mesterverk for piano

**Norsk musikk:** Grieg brukte norsk folkemusikk som inspirasjon og gjorde Norge kjent i Europa!`,
    },
    {
      id: 'musikk-7-4-1-example-1',
      type: 'example',
      title: 'Lytt og sammenlign',
      content: `Prøv å lytte til disse verkene og legg merke til forskjellene:

**Barokk:** Bach - "Toccata og fuge i d-moll"
- Mektig orgellyd, komplekse stemmer

**Klassisk:** Mozart - "Eine kleine Nachtmusik"
- Elegant, balansert, lett å følge melodien

**Romantisk:** Grieg - "I Dovregubbens hall"
- Dramatisk, bygger opp spenning, forteller en historie

Hvilken periode liker du best? Hvorfor?`,
    },
    {
      id: 'musikk-7-4-1-text-4',
      type: 'text',
      content: `**Blues og jazz (ca. 1900-1950)**

Afroamerikansk musikk revolusjonerte musikkverden:

**Blues:**
- Oppsto blant afroamerikanere i USA
- "Blue notes" - toner mellom dur og moll
- 12-takters akkordskjema
- Tekster om lidelse, kjærlighet, håp

**Jazz:**
- Utviklet fra blues i New Orleans
- Improvisasjon er sentralt
- Swing-rytme og synkoper
- Louis Armstrong, Duke Ellington, Ella Fitzgerald

**Visste du?** Blues og jazz la grunnlaget for nesten all moderne populærmusikk!`,
    },
    {
      id: 'musikk-7-4-1-text-5',
      type: 'text',
      content: `**Rock 'n' roll og pop (1950-1980)**

Ungdomskultur møtte musikk:

**Rock 'n' roll (1950-tallet):**
- Elvis Presley, Chuck Berry, Little Richard
- Blanding av blues, country og R&B
- Opprørsk og energisk
- Sjokkerte foreldregenerasjonen!

**1960-tallet:**
- The Beatles revolusjonerte popmusikk
- The Rolling Stones - tøffere rock
- Motown - soulmusikk fra Detroit
- Hippie-bevegelsen og psykedelisk rock

**1970-tallet:**
- Disco (ABBA, Bee Gees)
- Punk (Sex Pistols, The Clash)
- Progressiv rock (Pink Floyd)
- Tung metal (Black Sabbath)`,
    },
    {
      id: 'musikk-7-4-1-text-6',
      type: 'text',
      content: `**Moderne musikk (1980-i dag)**

Teknologi forandret alt:

**1980-tallet:**
- Synthesizer og drum machines
- Michael Jackson - "popens konge"
- MTV og musikkvideoer
- Hip-hop vokser fram

**1990-tallet:**
- Grunge (Nirvana)
- Britpop (Oasis, Blur)
- Elektronisk dansemusikk
- Hip-hop blir mainstream

**2000-tallet og fremover:**
- Streaming endrer musikkbransjen
- Hjemmestudio blir vanlig
- Sjangre blandes mer enn før
- Globale hits fra hele verden

**I dag:** Du har tilgang til ALL verdens musikk i lommen!`,
    },
    {
      id: 'musikk-7-4-1-note-1',
      type: 'note',
      title: 'Musikk og teknologi',
      content: `Teknologiske oppfinnelser har forandret musikken:
- **1877**: Fonografen (første lydopptak)
- **1920-tallet**: Radio
- **1950-tallet**: Vinyl-LP
- **1980-tallet**: CD og synthesizer
- **2000-tallet**: MP3 og streaming
Hver ny teknologi har skapt nye muligheter for musikere!`,
    },
    {
      id: 'musikk-7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken periode tilhører Bach?',
        subTasks: [
          {
            label: 'a',
            task: 'I hvilken musikkhistorisk periode levde Johann Sebastian Bach?',
            solution: 'Barokken',
            multipleChoiceOptions: ['Barokken', 'Klassisismen', 'Romantikken', 'Moderne tid'],
          },
        ],
        solution:
          'Bach levde fra 1685-1750 og er en av de viktigste komponistene fra barokken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvem skrev "Peer Gynt"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken norsk komponist skrev musikken til Peer Gynt?',
            solution: 'Edvard Grieg',
            multipleChoiceOptions: ['Edvard Grieg', 'Johan Svendsen', 'Ole Bull', 'Halfdan Kjerulf'],
          },
        ],
        solution:
          'Edvard Grieg skrev musikken til Henrik Ibsens skuespill Peer Gynt i 1875.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner romantikken?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var typisk for romantisk musikk?',
            solution: 'Sterke følelser og dramatikk',
            multipleChoiceOptions: [
              'Sterke følelser og dramatikk',
              'Enkel og udekorert',
              'Bare rytmeinstrumenter',
              'Kun elektroniske lyder',
            ],
          },
        ],
        solution:
          'Romantisk musikk fokuserte på sterke følelser, dramatikk og personlig uttrykk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor oppsto jazz?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor i USA utviklet jazzen seg?',
            solution: 'New Orleans',
            multipleChoiceOptions: ['New Orleans', 'New York', 'Los Angeles', 'Chicago'],
          },
        ],
        solution:
          'Jazz utviklet seg i New Orleans tidlig på 1900-tallet, som en blanding av blues, ragtime og europeisk musikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva var blues sitt kjennetegn?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er typisk for bluesmusikk?',
            solution: '12-takters akkordskjema og "blue notes"',
            multipleChoiceOptions: [
              '12-takters akkordskjema og "blue notes"',
              'Klassisk orkester',
              'Bare elektroniske instrumenter',
              'Ingen sang, bare instrumenter',
            ],
          },
        ],
        solution:
          'Blues kjennetegnes av 12-takters akkordskjema, "blue notes" og tekster om livets oppturer og nedturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en musikkhistorisk tidslinje',
        solution: `Lag en tidslinje med musikkhistoriens perioder:

**Tidslinje:**
| 1600-1750 | Barokk | Bach, Vivaldi |
| 1750-1820 | Klassisisme | Mozart, Haydn, Beethoven |
| 1820-1900 | Romantikk | Grieg, Tsjajkovskij, Chopin |
| 1900-1950 | Blues & Jazz | Armstrong, Ellington |
| 1950-1980 | Rock & Pop | Elvis, Beatles, ABBA |
| 1980-i dag | Moderne | Michael Jackson, hip-hop, EDM |

Inkluder:
- Viktige komponister/artister
- Kjennetegn ved hver periode
- En låt du liker fra hver periode`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Musikk i samfunnet
// ============================================================================

export const CHAPTER_MUSIKK_7_4_2: TextbookChapter = {
  id: 'musikk-7-4-2',
  courseId: 'musikk-7',
  chapterNumber: '4.2',
  title: 'Musikk i samfunnet',
  description: 'Forstå musikkens rolle i kultur, identitet og samfunn.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå musikkens rolle i samfunnet',
    'reflektere over musikk og identitet',
    'kjenne til musikk fra ulike kulturer',
  ],
  content: [
    {
      id: 'musikk-7-4-2-intro',
      type: 'text',
      content: `Musikk er ikke bare underholdning - den former hvem vi er, bringer mennesker sammen, og kan til og med forandre verden! I dette kapitlet skal vi utforske hvordan musikk påvirker samfunnet og våre liv.`,
    },
    {
      id: 'musikk-7-4-2-def-1',
      type: 'definition',
      title: 'Musikalsk identitet',
      content: `Musikalsk identitet handler om hvordan musikk er en del av hvem du er. Musikken du liker, sier noe om deg, dine verdier og hvilke grupper du føler tilhørighet til.`,
    },
    {
      id: 'musikk-7-4-2-text-1',
      type: 'text',
      content: `**Musikk og identitet**

Tenk på musikken DU liker. Den sier noe om deg:

**Personlig identitet**
- Favorittartistene dine speiler ofte verdiene dine
- Musikk kan uttrykke følelser du ikke klarer å sette ord på
- Minner knyttes til sanger ("vår sang")

**Gruppeidentitet**
- Fans av samme artist danner fellesskap
- Sjangre har ofte tilhørende subkulturer
- Festival og konserter skaper tilhørighet

**Nasjonal identitet**
- Nasjonalsanger og nasjonalromantikk
- Tradisjonell folkemusikk
- Artister som "representerer" landet

**Spørsmål til refleksjon:** Hvilken musikk beskriver deg best? Hvorfor?`,
    },
    {
      id: 'musikk-7-4-2-text-2',
      type: 'text',
      content: `**Musikk som protest**

Musikk har alltid vært et redskap for forandring:

**Borgerrettighetsbevegelsen (1960-tallet)**
- "We Shall Overcome" - kampen for like rettigheter
- Bob Dylan - "Blowin' in the Wind"
- Sam Cooke - "A Change is Gonna Come"

**Antikrigsbevegelsen**
- John Lennon - "Imagine"
- Edwin Starr - "War"
- Protestsanger mot Vietnam-krigen

**Moderne protestmusikk**
- Hip-hop tar opp sosiale problemer
- Klimaaktivisme i musikk
- #MeToo-tematikk

Musikk når ut til millioner og kan forandre holdninger!`,
    },
    {
      id: 'musikk-7-4-2-text-3',
      type: 'text',
      content: `**Musikk i ritualer og tradisjoner**

Musikk markerer livets viktige øyeblikk:

**Høytider og fester**
- Julesanger
- Bursdagssangen
- Bryllupsmarsjen
- 17. mai-melodier

**Religiøse ritualer**
- Kirkemusikk og salmer
- Bønnerop i islam
- Hinduistisk bhajan
- Buddhistisk mantra-resitasjon

**Rites of passage**
- Vuggesanger
- Konfirmasjonssanger
- Gravferdsmusikk

Musikk gir øyeblikkene dypere mening og knytter oss til tradisjon.`,
    },
    {
      id: 'musikk-7-4-2-example-1',
      type: 'example',
      title: 'Verdens musikk',
      content: `Musikk høres forskjellig ut rundt om i verden:

**Afrika**
- Sterke rytmer og polyrytmikk
- Call and response (rop og svar)
- Trommer som djembe og talking drum

**India**
- Raga (melodiske mønstre)
- Tala (rytmemønstre)
- Sitar og tabla

**Latin-Amerika**
- Salsa, reggaeton, bossa nova
- Synkoperte rytmer
- Maracas, congas, pandeiro

**Norden**
- Folkemusikk med hardingfele
- Joik fra samisk kultur
- Moderne nordisk pop og metal

Alle disse tradisjonene påvirker hverandre i dagens globaliserte musikk!`,
    },
    {
      id: 'musikk-7-4-2-text-4',
      type: 'text',
      content: `**Musikkbransjen**

Hvordan fungerer musikk som business?

**Før (tradisjonell modell):**
- Plateselskap fant og utviklet artister
- Radio bestemte hva folk hørte
- Fysiske album (vinyl, CD) var inntektskilden
- Turnéer for å promotere album

**Nå (strømmemodell):**
- Artister kan gi ut musikk selv
- Spillelister og algoritmer styrer lytting
- Strømming gir øre per avspilling
- Turnéer er hovedinntekten
- Sosiale medier er viktigere enn radio

**Utfordringer:**
- Vanskelig å tjene penger på strømming
- Mye musikk = hard konkurranse
- Algoritmer favoriserer populær musikk`,
    },
    {
      id: 'musikk-7-4-2-tip-1',
      type: 'tip',
      title: 'Vær en bevisst lytter',
      content: `Tenk over musikken du hører:
- Hvem tjener penger når du strømmer?
- Hvilke verdier uttrykker teksten?
- Hvordan påvirker musikken humøret ditt?
- Prøver noen å selge deg noe gjennom musikken?
- Utforsk musikk fra andre kulturer!`,
    },
    {
      id: 'musikk-7-4-2-text-5',
      type: 'text',
      content: `**Samisk musikk - joik**

Joik er en unik sangform fra samisk kultur:

**Kjennetegn:**
- Ikke sang OM noe, men joik AV noe
- Man joiker en person, et dyr, et sted
- Personlig og ofte improvisert
- Ingen instrumenter tradisjonelt

**Moderne joik:**
- Mari Boine - blander joik med rock/jazz
- Sofia Jannok - pop med joikelementer
- Joik brukes i film og TV (Frozen 2!)

**Viktig:** Joik har spirituell betydning i samisk kultur og ble lenge forbudt. I dag er den et viktig symbol på samisk identitet.`,
    },
    {
      id: 'musikk-7-4-2-text-6',
      type: 'text',
      content: `**Musikk og helse**

Musikk påvirker kropp og sinn:

**Fysiske effekter:**
- Kan senke blodtrykk og puls
- Lindrer smerte
- Hjelper med motorikk og koordinasjon

**Psykiske effekter:**
- Regulerer følelser
- Reduserer stress og angst
- Forbedrer hukommelse
- Motiverer trening

**Musikkterapi:**
- Brukes i behandling av mange tilstander
- Hjelper ved demens, autisme, depresjon
- Profesjonelt yrke med egen utdanning

Musikk er medisin - bokstavelig talt!`,
    },
    {
      id: 'musikk-7-4-2-note-1',
      type: 'note',
      title: 'Opphavsrett og musikk',
      content: `Når noen lager musikk, eier de rettighetene til den:
- **Streaming:** Artisten får betalt (litt) hver gang du lytter
- **Sampling:** Man må spørre om lov for å bruke andres musikk
- **Cover:** Kan fremføres, men originalkompanist får royalties
- **Piratkopiering:** Ulovlig og tar inntekt fra artister
Respekter musikkens skapere!`,
    },
    {
      id: 'musikk-7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er musikalsk identitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva handler musikalsk identitet om?',
            solution: 'Hvordan musikk er en del av hvem du er',
            multipleChoiceOptions: [
              'Hvordan musikk er en del av hvem du er',
              'Navnet på en artist',
              'ID-kortet til en musiker',
              'Lyden av et instrument',
            ],
          },
        ],
        solution:
          'Musikalsk identitet handler om hvordan musikksmaken din speiler dine verdier, følelser og tilhørighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på en protestsang',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken av disse er en kjent protestsang?',
            solution: '"Imagine" av John Lennon',
            multipleChoiceOptions: [
              '"Imagine" av John Lennon',
              '"Happy Birthday"',
              '"Jingle Bells"',
              '"Bruremarsjen"',
            ],
          },
        ],
        solution:
          '"Imagine" av John Lennon drømmer om en verden uten krig, religion og eiendom, og er en av historiens mest kjente protestsanger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er joik?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner samisk joik?',
            solution: 'En sangform der man joiker AV noe, ikke OM noe',
            multipleChoiceOptions: [
              'En sangform der man joiker AV noe, ikke OM noe',
              'En type dans',
              'Et instrument',
              'En norsk poplåt',
            ],
          },
        ],
        solution:
          'Joik er en samisk sangform der man ikke synger om noe, men joiker av det - fanger essensen av en person, et dyr eller et sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan har strømming endret musikkbransjen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den største forskjellen fra før?',
            solution: 'Artister kan gi ut musikk selv uten plateselskap',
            multipleChoiceOptions: [
              'Artister kan gi ut musikk selv uten plateselskap',
              'Det finnes ikke lenger musikk',
              'Alle artister blir rike',
              'Folk hører mindre på musikk',
            ],
          },
        ],
        solution:
          'Strømming har gjort det mulig for artister å nå publikum direkte, uten å gå via plateselskap, men har også gjort det vanskeligere å tjene penger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan musikk påvirke helsen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en helsemessig effekt av musikk?',
            solution: 'Reduserer stress og angst',
            multipleChoiceOptions: [
              'Reduserer stress og angst',
              'Gjør deg syk',
              'Har ingen effekt',
              'Skader ørene alltid',
            ],
          },
        ],
        solution:
          'Musikk har dokumenterte helseeffekter: den kan redusere stress, lindre smerte, forbedre humør og brukes i profesjonell musikkterapi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-7-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-7-4-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Refleksjonsoppgave: Din musikalske identitet',
        solution: `Skriv en tekst om din musikalske identitet:

**Spørsmål å svare på:**
1. Hvilken musikk liker du best? Hvorfor?
2. Hva sier musikksmaken din om deg?
3. Hvilke minner har du knyttet til spesielle sanger?
4. Er det musikk du deler med venner? Familie?
5. Har musikksmaken din forandret seg?
6. Finnes det musikk du er nysgjerrig på?

**Utfordring:**
- Lytt til musikk fra en kultur du ikke kjenner
- Skriv ned førsteinntrykket ditt
- Hva var annerledes? Hva var gjenkjennelig?`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MUSIKK_7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MUSIKK_7_1_1,
  CHAPTER_MUSIKK_7_1_2,
  CHAPTER_MUSIKK_7_2_1,
  CHAPTER_MUSIKK_7_2_2,
  CHAPTER_MUSIKK_7_3_1,
  CHAPTER_MUSIKK_7_3_2,
  CHAPTER_MUSIKK_7_4_1,
  CHAPTER_MUSIKK_7_4_2,
];

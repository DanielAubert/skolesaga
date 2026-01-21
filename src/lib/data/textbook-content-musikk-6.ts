/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Musikk 6. klasse - Kapittelinnhold
 *
 * Fullstendig innhold for alle kapitler med teori, definisjoner, eksempler og oppgaver.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: MUSIKKTEORI
// ============================================================================

export const CHAPTER_MUSIKK_6_1_1: TextbookChapter = {
  id: 'musikk-6-1-1',
  courseId: 'musikk-6',
  chapterNumber: '1.1',
  title: 'Notasjon',
  description: 'Lær å lese og skrive noter på notelinjen.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['bruke musikkens grunnelementer i skapende arbeid'],
  content: [
    {
      id: 'musikk-6-1-1-intro',
      type: 'text',
      content: `## Musikkens språk

Noter er musikkens skriftspråk. Akkurat som bokstaver forteller oss hvilke ord vi skal lese, forteller noter oss hvilke toner vi skal spille og hvor lenge de skal vare.

### Hvorfor lære noter?
- Du kan lese musikk som andre har skrevet
- Du kan skrive ned musikk du selv lager
- Du kan kommunisere med andre musikere
- Det åpner døren til all slags musikk`
    },
    {
      id: 'musikk-6-1-1-def-1',
      type: 'definition',
      title: 'Notelinje',
      content: 'Fem horisontale linjer som noter skrives på og mellom. Notene plasseres på linjene eller i mellomrommene, og plasseringen bestemmer hvilken tone det er.'
    },
    {
      id: 'musikk-6-1-1-def-2',
      type: 'definition',
      title: 'G-nøkkel (diskantøkkel)',
      content: 'Et tegn i begynnelsen av notelinjen som viser at linjen som nøkkelen kroller seg rundt er G. Den brukes for høye toner, som i sang og fløyte.'
    },
    {
      id: 'musikk-6-1-1-text-2',
      type: 'text',
      content: `## Notenavnene

I musikk bruker vi syv toner som gjentar seg: C - D - E - F - G - A - H (og så C igjen, bare høyere).

### Huskeregel for linjene (nedenfra og opp):
**E - G - H - D - F** - "Edvard Grieg Har Dårlig Feber"

### Huskeregel for mellomrommene (nedenfra og opp):
**F - A - C - E** - dette staver nesten "FACE"!

### Midt-C
Den første C-en som ligger under notelinjen (på en hjelpelinj) kalles midt-C. Det er utgangspunktet for mange instrumenter.`
    },
    {
      id: 'musikk-6-1-1-example-1',
      type: 'example',
      title: 'Finne en note',
      problem: 'Hvordan finner du hvilken tone en note er?',
      solution: `1. Se på notelinjen og finn G-nøkkelen
2. Tell fra en note du kjenner (for eksempel G på 2. linje)
3. Tell opp eller ned i alfabetet: A-H-C-D-E-F-G
4. Husk: Etter H kommer C igjen

Eksempel: Hvis noten ligger på 3. linje, og 2. linje er G, så må 3. linje være H (G-A-H, opp to trinn).`
    },
    {
      id: 'musikk-6-1-1-text-3',
      type: 'text',
      content: `## Noteverdier

Notene har også ulik lengde - hvor lenge tonen skal holdes:

### Helnote ○
Varer 4 slag - en åpen, rund form uten stav

### Halvnote 𝅗𝅥
Varer 2 slag - åpen form med stav

### Firedel (kvart) ♩
Varer 1 slag - fylte form med stav

### Åttedel ♪
Varer ½ slag - fylt form med stav og flagg

### Sekstendel ♬
Varer ¼ slag - fylt form med stav og to flagg`
    },
    {
      id: 'musikk-6-1-1-def-3',
      type: 'definition',
      title: 'Pause',
      content: 'Et tegn som viser stillhet i musikken. Det finnes pauser som tilsvarer alle noteverdiene - helnote-pause, halvnote-pause, firedels-pause, osv.'
    },
    {
      id: 'musikk-6-1-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-1',
        number: '1.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange linjer har en notelinje?',
        solution: '5',
        multipleChoiceOptions: [
          { id: 'a', text: '3', isCorrect: false },
          { id: 'b', text: '4', isCorrect: false },
          { id: 'c', text: '5', isCorrect: true },
          { id: 'd', text: '6', isCorrect: false }
        ],
        hints: ['Tell linjene på et notebilde'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-2',
        number: '1.1.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvilke syv noter bruker vi i musikk?',
        solution: 'C, D, E, F, G, A, H (og så starter det på C igjen)',
        hints: ['Det er som en del av alfabetet, men det starter på C'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-3',
        number: '1.1.3',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvor mange slag varer en halvnote?',
        solution: '2 slag. En halvnote varer halvparten av en helnote (som varer 4 slag).',
        hints: ['Halvnote = halve av helnote'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-4',
        number: '1.1.4',
        type: 'practical',
        difficulty: 'medium',
        task: 'Skriv ned notene C-D-E-F-G på en notelinje.',
        subTasks: [
          'Tegn en notelinje med 5 linjer',
          'Tegn en G-nøkkel i begynnelsen',
          'Skriv C på hjelpelinje under',
          'Skriv D, E, F og G på riktige plasser'
        ],
        solution: 'C ligger på en hjelpelinje under notelinjen, D under 1. linje, E på 1. linje, F mellom 1. og 2. linje, G på 2. linje.',
        hints: ['G-nøkkelen kroller seg rundt G-linjen (2. linje)'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-5',
        number: '1.1.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken noteverdi varer 4 slag?',
        solution: 'Helnote',
        multipleChoiceOptions: [
          { id: 'a', text: 'Åttedel', isCorrect: false },
          { id: 'b', text: 'Firedel', isCorrect: false },
          { id: 'c', text: 'Halvnote', isCorrect: false },
          { id: 'd', text: 'Helnote', isCorrect: true }
        ],
        hints: ['Det er den lengste av de vanlige noteverdiene'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-6',
        number: '1.1.6',
        type: 'short-answer',
        difficulty: 'vanskelig',
        task: 'Hvor mange åttedeler går det i en helnote?',
        solution: '8 åttedeler. En helnote = 4 slag, en åttedel = ½ slag. 4 ÷ 0,5 = 8.',
        hints: ['Hvor mange halve slag er det i 4 slag?'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-7',
        number: '1.1.7',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Skriv en enkel melodi med forskjellige noteverdier.',
        subTasks: [
          'Bruk 8 takter i 4/4-takt',
          'Bruk minst 3 forskjellige noteverdier',
          'Bruk minst 5 forskjellige toner',
          'Syng eller spill melodien din'
        ],
        solution: 'Melodien skal ha riktig antall slag i hver takt (4), bruke ulike noteverdier, og kunne spilles eller synges.',
        hints: ['Husk at hvert takt skal ha 4 slag til sammen'],
      }
    },
    {
      id: 'musikk-6-1-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-1-ex-8',
        number: '1.1.8',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er en pause i musikk?',
        solution: 'En pause er et tegn som viser stillhet i musikken - perioder der man ikke spiller eller synger.',
        hints: ['Det er det motsatte av en tone'],
      }
    }
  ],
};

export const CHAPTER_MUSIKK_6_1_2: TextbookChapter = {
  id: 'musikk-6-1-2',
  courseId: 'musikk-6',
  chapterNumber: '1.2',
  title: 'Rytme',
  description: 'Utforsk rytmer, taktarter og tempi.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['øve inn og fremføre sang og musikk'],
  content: [
    {
      id: 'musikk-6-1-2-intro',
      type: 'text',
      content: `## Musikkens puls

Rytme er musikkens hjerteslag. Det er mønsteret av lange og korte lyder som gir musikken liv og bevegelse.

### Hva er rytme?
- Pulsen - det jevne slaget som holder musikken sammen
- Mønsteret - hvordan korte og lange toner er organisert
- Betoningen - hvilke slag som er sterkere enn andre`
    },
    {
      id: 'musikk-6-1-2-def-1',
      type: 'definition',
      title: 'Takt',
      content: 'En måte å dele opp musikken i like enheter. Taktstreker viser hvor hver takt slutter og neste begynner.'
    },
    {
      id: 'musikk-6-1-2-def-2',
      type: 'definition',
      title: 'Taktart',
      content: 'Et tall som viser hvor mange slag det er i hver takt. 4/4-takt har 4 slag, 3/4-takt har 3 slag.'
    },
    {
      id: 'musikk-6-1-2-text-2',
      type: 'text',
      content: `## Vanlige taktarter

### 4/4-takt (firetakt)
- 4 slag per takt
- Den vanligste taktarten
- Brukes i pop, rock og mye annen musikk
- Tellmåte: 1 - 2 - 3 - 4

### 3/4-takt (tretakt)
- 3 slag per takt
- Brukes i valser og mye folkemusikk
- Tellmåte: 1 - 2 - 3
- Første slag er sterkest

### 2/4-takt (totakt)
- 2 slag per takt
- Brukes i marsjer og polka
- Tellmåte: 1 - 2`
    },
    {
      id: 'musikk-6-1-2-def-3',
      type: 'definition',
      title: 'Tempo',
      content: 'Hvor fort musikken går. Tempo måles i slag per minutt (BPM - beats per minute). Vanlige tempoer er 60 BPM (rolig) til 120 BPM (hurtig).'
    },
    {
      id: 'musikk-6-1-2-example-1',
      type: 'example',
      title: 'Klappe en rytme',
      problem: 'Hvordan klapper du rytmen til "Bæ, bæ, lille lam"?',
      solution: `Tekst med rytme:
BÆ, bæ, LI-lle LAM (4 slag)
HAR du U-lle NÅ (4 slag)

Klappemønster:
Slag 1: klapp (BÆ)
Slag 2: klapp (bæ)
Slag 3: klapp-klapp (LI-lle) - to raske klapp
Slag 4: klapp (LAM)

De store bokstavene viser de sterke slagene.`
    },
    {
      id: 'musikk-6-1-2-text-3',
      type: 'text',
      content: `## Synkope

En synkope er når du betoner et slag som vanligvis er svakt. Dette skaper en spennende, "hoppende" følelse i musikken.

### Eksempel:
Vanlig: **1** - 2 - **3** - 4 (betoning på 1 og 3)
Synkope: 1 - **2** - 3 - **4** (betoning på 2 og 4)

Synkoper brukes mye i:
- Jazz
- Reggae
- Pop og R&B
- Latinamerikansk musikk`
    },
    {
      id: 'musikk-6-1-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-1',
        number: '1.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange slag er det i en 4/4-takt?',
        solution: '4 slag',
        multipleChoiceOptions: [
          { id: 'a', text: '2 slag', isCorrect: false },
          { id: 'b', text: '3 slag', isCorrect: false },
          { id: 'c', text: '4 slag', isCorrect: true },
          { id: 'd', text: '5 slag', isCorrect: false }
        ],
        hints: ['Se på det første tallet i taktarten'],
      }
    },
    {
      id: 'musikk-6-1-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-2',
        number: '1.2.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva betyr tempo i musikk?',
        solution: 'Tempo er hvor fort musikken går. Det måles i slag per minutt (BPM).',
        hints: ['Det handler om fart'],
      }
    },
    {
      id: 'musikk-6-1-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-3',
        number: '1.2.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Klapp eller tramp pulsen mens du synger en sang du kan.',
        subTasks: [
          'Velg en sang du kan godt',
          'Finn pulsen (det jevne slaget)',
          'Klapp eller tramp pulsen mens du synger',
          'Hold pulsen jevn gjennom hele sangen'
        ],
        solution: 'Du skal kunne holde en jevn puls gjennom hele sangen uten at den blir raskere eller saktere.',
        hints: ['Prøv med "Happy Birthday" eller "Ja, vi elsker"'],
      }
    },
    {
      id: 'musikk-6-1-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-4',
        number: '1.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken taktart brukes ofte i valser?',
        solution: '3/4-takt',
        multipleChoiceOptions: [
          { id: 'a', text: '2/4-takt', isCorrect: false },
          { id: 'b', text: '3/4-takt', isCorrect: true },
          { id: 'c', text: '4/4-takt', isCorrect: false },
          { id: 'd', text: '6/8-takt', isCorrect: false }
        ],
        hints: ['Vals har tre slag: 1-2-3, 1-2-3'],
      }
    },
    {
      id: 'musikk-6-1-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-5',
        number: '1.2.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag et rytmemønster med klapping og tramping.',
        subTasks: [
          'Lag et mønster som varer 4 takter',
          'Bruk både klapping og tramping',
          'Øv til du kan det utenat',
          'Lær det bort til en annen'
        ],
        solution: 'Rytmemønsteret skal være tydelig og kunne gjentas. Det skal ha en blanding av klapp og tramp.',
        hints: ['Start enkelt, for eksempel: klapp-klapp-tramp, klapp-klapp-tramp...'],
      }
    },
    {
      id: 'musikk-6-1-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-6',
        number: '1.2.6',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hva er en synkope?',
        solution: 'En synkope er når du betoner et slag som vanligvis er svakt. Det skaper en spennende, "hoppende" følelse i musikken.',
        hints: ['Det handler om betoning på uventede steder'],
      }
    },
    {
      id: 'musikk-6-1-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-2-ex-7',
        number: '1.2.7',
        type: 'practical',
        difficulty: 'medium',
        task: 'Finn tre forskjellige sanger og bestem hvilken taktart de har.',
        solution: 'Du skal kunne identifisere om sangene er i 4/4-takt, 3/4-takt eller 2/4-takt ved å telle slagene.',
        hints: ['Tell med på pulsen: er det 1-2-3-4 eller 1-2-3?'],
      }
    }
  ],
};

export const CHAPTER_MUSIKK_6_1_3: TextbookChapter = {
  id: 'musikk-6-1-3',
  courseId: 'musikk-6',
  chapterNumber: '1.3',
  title: 'Melodi og akkorder',
  description: 'Forstå hvordan melodier og akkorder bygges opp.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske sammenhenger mellom musikk og følelser'],
  content: [
    {
      id: 'musikk-6-1-3-intro',
      type: 'text',
      content: `## Melodiens språk

En melodi er en rekke av toner som følger etter hverandre og danner en musikalsk setning. Det er melodien vi ofte husker og nynner på etter å ha hørt en sang.

### Hva gjør en god melodi?
- Den er lett å huske
- Den har en interessant form - opp og ned
- Den har et mønster som gjentas
- Den passer til teksten eller stemningen`
    },
    {
      id: 'musikk-6-1-3-def-1',
      type: 'definition',
      title: 'Skala',
      content: 'En rekke av toner ordnet etter tonehøyde. Den vanligste er dur-skalaen (C-D-E-F-G-A-H-C) som lyder lys og glad, og moll-skalaen som lyder mørkere og mer alvorlig.'
    },
    {
      id: 'musikk-6-1-3-text-2',
      type: 'text',
      content: `## Dur og moll

De to viktigste skalaene i vestlig musikk er dur og moll.

### Dur
- Lyder lys, glad og positiv
- Brukes ofte i glade sanger
- Eksempel: "Happy Birthday", "Ja, vi elsker"
- C-dur skala: C-D-E-F-G-A-H-C

### Moll
- Lyder mørkere, mer alvorlig eller trist
- Brukes i triste eller dramatiske sanger
- Eksempel: "Trollmors voggesang", "Smoke on the Water"
- A-moll skala: A-H-C-D-E-F-G-A`
    },
    {
      id: 'musikk-6-1-3-def-2',
      type: 'definition',
      title: 'Akkord',
      content: 'Tre eller flere toner som klinger samtidig. Akkorder gir harmonisk støtte til melodien og skaper fylde i musikken.'
    },
    {
      id: 'musikk-6-1-3-text-3',
      type: 'text',
      content: `## Akkorder

Akkorder er byggesteiner i musikk. De vanligste akkordene er:

### C-dur akkord
Tonene C - E - G spilt samtidig

### G-dur akkord
Tonene G - H - D spilt samtidig

### A-moll akkord
Tonene A - C - E spilt samtidig

### Akkordprogresjon
Når akkorder følger etter hverandre i et mønster, kaller vi det en akkordprogresjon. Mange populære sanger bruker de samme akkordprogresjonene!`
    },
    {
      id: 'musikk-6-1-3-example-1',
      type: 'example',
      title: 'Dur og moll i praksis',
      problem: 'Hvordan hører du forskjell på dur og moll?',
      solution: `Prøv dette eksperimentet:

1. Syng eller spill C-dur skalaen: C-D-E-F-G-A-H-C
   - Legg merke til den lyse, glade stemningen

2. Syng eller spill A-moll skalaen: A-H-C-D-E-F-G-A
   - Legg merke til den mørkere, mer alvorlige stemningen

3. Spill de samme meloditonene, men bytt mellom dur og moll
   - Hør hvordan stemningen forandres!

Den største forskjellen er det tredje trinnet i skalaen.`
    },
    {
      id: 'musikk-6-1-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-3-ex-1',
        number: '1.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner dur-skalaen?',
        solution: 'Den lyder lys og glad',
        multipleChoiceOptions: [
          { id: 'a', text: 'Den lyder lys og glad', isCorrect: true },
          { id: 'b', text: 'Den lyder mørk og trist', isCorrect: false },
          { id: 'c', text: 'Den har bare 5 toner', isCorrect: false },
          { id: 'd', text: 'Den brukes bare i klassisk musikk', isCorrect: false }
        ],
        hints: ['Tenk på sanger som "Happy Birthday"'],
      }
    },
    {
      id: 'musikk-6-1-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-3-ex-2',
        number: '1.3.2',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er en akkord?',
        solution: 'En akkord er tre eller flere toner som klinger samtidig. Akkorder gir harmonisk støtte til melodien.',
        hints: ['Det handler om toner som spilles på samme tid'],
      }
    },
    {
      id: 'musikk-6-1-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-3-ex-3',
        number: '1.3.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Finn tre sanger - en i dur og en i moll - og beskriv stemningen.',
        subTasks: [
          'Lytt til tre sanger du liker',
          'Prøv å høre om de er i dur eller moll',
          'Beskriv stemningen i hver sang',
          'Forklar hvordan dur/moll påvirker stemningen'
        ],
        solution: 'Du skal kunne identifisere dur/moll og beskrive hvordan det påvirker stemningen.',
        hints: ['Lys og glad = dur, mørkere og alvorlig = moll'],
      }
    },
    {
      id: 'musikk-6-1-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-3-ex-4',
        number: '1.3.4',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Hvilke tre toner er i C-dur akkorden?',
        solution: 'C, E og G. Disse tre tonene spilt sammen danner C-dur akkorden.',
        hints: ['Start på C og telle til hvert annet trinn i skalaen'],
      }
    },
    {
      id: 'musikk-6-1-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-3-ex-5',
        number: '1.3.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag en enkel melodi i dur og spill eller syng den.',
        subTasks: [
          'Bruk tonene i C-dur (C-D-E-F-G-A-H-C)',
          'Lag en melodi på 8 takter',
          'Start og slutt på C',
          'Øv til du kan den utenat'
        ],
        solution: 'Melodien skal bruke toner fra C-dur skalaen og ha en tydelig start og slutt.',
        hints: ['Start enkelt - bruk bare noen få toner i begynnelsen'],
      }
    },
    {
      id: 'musikk-6-1-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-1-3-ex-6',
        number: '1.3.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner moll-skalaen?',
        solution: 'Den lyder mørkere og mer alvorlig enn dur',
        multipleChoiceOptions: [
          { id: 'a', text: 'Den har færre toner enn dur', isCorrect: false },
          { id: 'b', text: 'Den lyder mørkere og mer alvorlig enn dur', isCorrect: true },
          { id: 'c', text: 'Den brukes bare i triste sanger', isCorrect: false },
          { id: 'd', text: 'Den har samme stemning som dur', isCorrect: false }
        ],
        hints: ['Tenk på dramatisk filmmusikk'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 2: SPILL OG SANG
// ============================================================================

export const CHAPTER_MUSIKK_6_2_1: TextbookChapter = {
  id: 'musikk-6-2-1',
  courseId: 'musikk-6',
  chapterNumber: '2.1',
  title: 'Instrumentspill',
  description: 'Lær å spille enkle melodier på ukulele, keyboard eller blokkfløyte.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['spille melodier og akkompagnement på ulike instrumenter'],
  content: [
    {
      id: 'musikk-6-2-1-intro',
      type: 'text',
      content: `## Å spille et instrument

Å lære seg et instrument er en fantastisk reise! Det krever øvelse og tålmodighet, men belønningen er stor - du kan lage musikk selv.

### Gode tips for øving:
- Øv litt hver dag (15-20 minutter er bedre enn 2 timer én gang i uken)
- Start sakte og øk tempoet gradvis
- Øv på de vanskelige delene ekstra
- Ha det gøy!`
    },
    {
      id: 'musikk-6-2-1-text-2',
      type: 'text',
      content: `## Keyboard/Piano

Keyboardet har svarte og hvite tangenter. De hvite tangentene er C-D-E-F-G-A-H.

### Finne C:
Se etter de to svarte tangentene som ligger sammen. Den hvite tangenten til venstre for disse er C!

### Spille en enkel melodi:
1. Sett tommelen på C (midt-C)
2. Pekefinger på D
3. Langfinger på E
4. Ringfinger på F
5. Lillefinger på G

Prøv å spille: C-D-E-C-D-E (Bukkene Bruse-starten)`
    },
    {
      id: 'musikk-6-2-1-text-3',
      type: 'text',
      content: `## Ukulele

Ukulelen har 4 strenger. Fra toppen (tykkeste streng): G-C-E-A

### Grunnleggende akkorder:
**C-dur:** En finger på 3. streng, 1. bånd
**Am (A-moll):** En finger på 4. streng, 2. bånd
**F:** To fingre - 2. streng 1. bånd, og 4. streng 2. bånd
**G:** Tre fingre - lag en liten trekant i 2. bånd

### Spilleteknikk:
- Hold ukulelen mot kroppen
- Høyre hånd strummer (slår over strengene)
- Venstre hånd holder akkordene
- Strum ned med tommelen eller pekefingeren`
    },
    {
      id: 'musikk-6-2-1-text-4',
      type: 'text',
      content: `## Blokkfløyte

Blokkfløyten er et godt førsteinstrument fordi den er lett å få lyd i.

### Grunnleggende grep:
- Venstre hånd øverst, høyre hånd nederst
- Tommelen på baksiden dekker hullet
- Fingrene dekker hullene på forsiden
- Pust rolig og jevnt

### De første tonene:
**H:** Bare tommel og pekefinger (venstre hånd)
**A:** Tommel, pekefinger og langfinger
**G:** Tommel, pekefinger, langfinger og ringfinger`
    },
    {
      id: 'musikk-6-2-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan finner du C på et keyboard?',
        solution: 'Den hvite tangenten til venstre for de to svarte tangentene',
        multipleChoiceOptions: [
          { id: 'a', text: 'Den første hvite tangenten', isCorrect: false },
          { id: 'b', text: 'Den hvite tangenten til venstre for de to svarte tangentene', isCorrect: true },
          { id: 'c', text: 'En av de svarte tangentene', isCorrect: false },
          { id: 'd', text: 'Den midterste hvite tangenten', isCorrect: false }
        ],
        hints: ['Se etter de svarte tangentene som ligger i par'],
      }
    },
    {
      id: 'musikk-6-2-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-1-ex-2',
        number: '2.1.2',
        type: 'practical',
        difficulty: 'medium',
        task: 'Spill C-dur skalaen på et keyboard eller blokkfløyte.',
        subTasks: [
          'Finn startonen C',
          'Spill alle tonene oppover: C-D-E-F-G-A-H-C',
          'Spill alle tonene nedover igjen',
          'Gjenta til det går jevnt'
        ],
        solution: 'Du skal kunne spille skalaen jevnt opp og ned uten å stoppe.',
        hints: ['Ta det sakte i begynnelsen'],
      }
    },
    {
      id: 'musikk-6-2-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-1-ex-3',
        number: '2.1.3',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvor mange strenger har en ukulele?',
        solution: '4 strenger',
        hints: ['Det er færre enn på en gitar'],
      }
    },
    {
      id: 'musikk-6-2-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-1-ex-4',
        number: '2.1.4',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lær deg tre akkorder på ukulele og spill dem i en rekkefølge.',
        subTasks: [
          'Lær C-dur akkorden',
          'Lær Am akkorden',
          'Lær F akkorden',
          'Bytt mellom akkordene i et jevnt tempo'
        ],
        solution: 'Du skal kunne bytte mellom akkordene uten lange pauser.',
        hints: ['Øv på å bytte mellom to akkorder først'],
      }
    },
    {
      id: 'musikk-6-2-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-1-ex-5',
        number: '2.1.5',
        type: 'practical',
        difficulty: 'medium',
        task: 'Spill melodien til "Mary had a little lamb" på keyboard eller blokkfløyte.',
        subTasks: [
          'Lær tonene: E-D-C-D-E-E-E',
          'Øv første linje sakte',
          'Legg til resten av melodien',
          'Spill hele melodien sammenhengende'
        ],
        solution: 'Melodien skal spilles jevnt og med riktige toner.',
        hints: ['Start på E og jobb deg nedover til C'],
      }
    }
  ],
};

export const CHAPTER_MUSIKK_6_2_2: TextbookChapter = {
  id: 'musikk-6-2-2',
  courseId: 'musikk-6',
  chapterNumber: '2.2',
  title: 'Samspill',
  description: 'Spill sammen med andre i band eller ensemble.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['delta i ulike typer samspill'],
  content: [
    {
      id: 'musikk-6-2-2-intro',
      type: 'text',
      content: `## Å spille sammen

Samspill er når flere musikere spiller sammen. Det kan være et band, et kor, et orkester eller bare to venner som spiller sammen.

### Hvorfor er samspill viktig?
- Du lærer å lytte til andre
- Musikken blir rikere med flere stemmer
- Du lærer å holde tiden sammen med andre
- Det er morsomt å lage musikk sammen!`
    },
    {
      id: 'musikk-6-2-2-def-1',
      type: 'definition',
      title: 'Ensemble',
      content: 'En gruppe musikere som spiller sammen. Det kan være alt fra to til mange hundre musikere, avhengig av type ensemble.'
    },
    {
      id: 'musikk-6-2-2-text-2',
      type: 'text',
      content: `## Roller i et band

I et typisk band har alle en jobb:

### Trommer
- Holder takten og pulsen
- Gir energi og driv
- "Hjertet" i bandet

### Bass
- Spiller de dype tonene
- Binder sammen trommer og akkordinstrumenter
- Gir fundamentet i musikken

### Gitar/Keyboard
- Spiller akkorder
- Kan spille melodier og soloer
- Fyller ut lydbildet

### Sang
- Bærer melodien
- Formidler teksten
- Ofte det første man legger merke til`
    },
    {
      id: 'musikk-6-2-2-text-3',
      type: 'text',
      content: `## Tips for godt samspill

### Lytt!
Det viktigste er å lytte til de andre. Ikke bare spill din egen del, men hør hvordan den passer med de andre.

### Hold takten
Følg pulsen. Hvis dere har en trommeslager, lytt til den. Hvis ikke, bestem dere for hvem som leder.

### Vær dynamisk
Ikke spill like høyt hele tiden. Varier styrken sammen med gruppen.

### Kommuniser
Se på hverandre, nikk eller gi tegn. Bestem på forhånd hvordan dere starter og slutter.`
    },
    {
      id: 'musikk-6-2-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-2-ex-1',
        number: '2.2.1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er det viktigste å gjøre når du spiller sammen med andre?',
        solution: 'Det viktigste er å lytte til de andre. Du må høre hvordan din del passer med det de andre spiller.',
        hints: ['Det handler om ørene, ikke bare fingrene'],
      }
    },
    {
      id: 'musikk-6-2-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket instrument holder vanligvis takten i et band?',
        solution: 'Trommer',
        multipleChoiceOptions: [
          { id: 'a', text: 'Gitar', isCorrect: false },
          { id: 'b', text: 'Bass', isCorrect: false },
          { id: 'c', text: 'Trommer', isCorrect: true },
          { id: 'd', text: 'Sang', isCorrect: false }
        ],
        hints: ['Det er det instrumentet som slår pulsen'],
      }
    },
    {
      id: 'musikk-6-2-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-2-ex-3',
        number: '2.2.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Klapp en rytme sammen med en annen person.',
        subTasks: [
          'Bestem en enkel rytme',
          'Klapp rytmen i kor',
          'Varier - én holder pulsen mens den andre klapper en melodi',
          'Bytt roller'
        ],
        solution: 'Dere skal klare å holde rytmen sammen uten at den faller fra hverandre.',
        hints: ['Start med å telle 1-2-3-4 høyt'],
      }
    },
    {
      id: 'musikk-6-2-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-2-ex-4',
        number: '2.2.4',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Spill en enkel sang sammen med andre (2-4 personer).',
        subTasks: [
          'Velg en sang alle kan',
          'Fordel roller (melodi, akkorder, rytme)',
          'Øv sammen',
          'Fremfør sangen for noen'
        ],
        solution: 'Dere skal kunne spille sangen sammenhengende fra start til slutt.',
        hints: ['Velg en enkel sang med få akkorder'],
      }
    }
  ],
};

export const CHAPTER_MUSIKK_6_2_3: TextbookChapter = {
  id: 'musikk-6-2-3',
  courseId: 'musikk-6',
  chapterNumber: '2.3',
  title: 'Sangteknikk',
  description: 'Utvikle sangstemmen din med teknikker for pust og klang.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['bruke stemmen på varierte måter'],
  content: [
    {
      id: 'musikk-6-2-3-intro',
      type: 'text',
      content: `## Din stemme

Stemmen din er et instrument du alltid har med deg! Ved å lære noen grunnleggende teknikker kan du synge bedre og mer komfortabelt.

### Hvorfor lære sangteknikk?
- Synge renere og tydeligere
- Unngå å bli sliten i stemmen
- Få bedre kontroll over tonene
- Synge sterkere uten å skrike`
    },
    {
      id: 'musikk-6-2-3-def-1',
      type: 'definition',
      title: 'Diafragma',
      content: 'En stor muskel under lungene som hjelper oss å puste. Ved å bruke diafragmaen aktivt får vi bedre støtte når vi synger.'
    },
    {
      id: 'musikk-6-2-3-text-2',
      type: 'text',
      content: `## Pusten

God pust er grunnlaget for god sang.

### Diafragmapust:
1. Legg hånden på magen
2. Pust inn og kjenn at magen beveger seg ut
3. Pust ut og kjenn at magen beveger seg inn
4. Skuldrene skal ikke bevege seg opp!

### Støtte:
Støtte handler om å kontrollere utpusten når du synger. Tenk på at du holder igjen luften litt mens du synger, i stedet for å slippe alt ut på en gang.`
    },
    {
      id: 'musikk-6-2-3-text-3',
      type: 'text',
      content: `## Klang

Klangen er "fargen" på stemmen din.

### Tips for god klang:
- Tenk at du gjesper på innsiden av munnen (åpent svelg)
- Syng "fremover" - mot leppene og nesen
- Senk kjeven - ikke klem den sammen
- Smil lett - det gir lysere klang

### Uttale:
Tydelig uttale gjør at folk forstår hva du synger:
- Overdriv vokalene (A, E, I, O, U)
- Uttal konsonantene tydelig, spesielt i slutten av ord
- Åpne munnen mer enn du tror du må`
    },
    {
      id: 'musikk-6-2-3-example-1',
      type: 'example',
      title: 'Oppvarming',
      problem: 'Hvordan varmer du opp stemmen før du synger?',
      solution: `1. **Pust**: Pust dypt 5-10 ganger med diafragmapust
2. **Nynning**: Nynn på "mmm" i forskjellige tonehøyder
3. **Leppe-trill**: Blås luft gjennom slappet lepper (som en hest)
4. **Vokaler**: Syng "ma-me-mi-mo-mu" på ulike toner
5. **Skalaer**: Syng enkle skalaer opp og ned

Bruk 5-10 minutter på oppvarming før du synger ordentlig.`
    },
    {
      id: 'musikk-6-2-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-3-ex-1',
        number: '2.3.1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er diafragmaen?',
        solution: 'Diafragmaen er en stor muskel under lungene som hjelper oss å puste. Når vi bruker den aktivt, får vi bedre støtte når vi synger.',
        hints: ['Det er en muskel som har med pusten å gjøre'],
      }
    },
    {
      id: 'musikk-6-2-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-3-ex-2',
        number: '2.3.2',
        type: 'practical',
        difficulty: 'lett',
        task: 'Øv på diafragmapust.',
        subTasks: [
          'Legg hånden på magen',
          'Pust inn og kjenn at magen beveger seg ut',
          'Pust ut sakte mens du sier "ssss"',
          'Gjenta 10 ganger'
        ],
        solution: 'Magen skal bevege seg ut når du puster inn, og skuldrene skal ikke løfte seg.',
        hints: ['Tenk på at du fyller en ballong i magen'],
      }
    },
    {
      id: 'musikk-6-2-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-3-ex-3',
        number: '2.3.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Varm opp stemmen din og syng en sang du kan.',
        subTasks: [
          'Gjør 5 minutter oppvarming',
          'Syng en sang du kan godt',
          'Tenk på pust og støtte mens du synger',
          'Syng sangen en gang til med bedre teknikk'
        ],
        solution: 'Du skal merke forskjell i hvordan stemmen føles etter oppvarming.',
        hints: ['Ikke hopp over oppvarmingen!'],
      }
    },
    {
      id: 'musikk-6-2-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-3-ex-4',
        number: '2.3.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre for å få tydelig uttale når du synger?',
        solution: 'Overdrive vokalene og uttale konsonantene tydelig',
        multipleChoiceOptions: [
          { id: 'a', text: 'Synge så lavt som mulig', isCorrect: false },
          { id: 'b', text: 'Overdrive vokalene og uttale konsonantene tydelig', isCorrect: true },
          { id: 'c', text: 'Holde munnen nesten lukket', isCorrect: false },
          { id: 'd', text: 'Synge så fort som mulig', isCorrect: false }
        ],
        hints: ['Det handler om å åpne munnen og bruke leppene'],
      }
    },
    {
      id: 'musikk-6-2-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-2-3-ex-5',
        number: '2.3.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Syng en enkel sang med flerstemmig sang (kanon eller andrestemme).',
        subTasks: [
          'Velg en sang som passer for kanon (f.eks. "Broder Jakob")',
          'Øv på sangen alene først',
          'Del gruppen i to og syng kanon',
          'Klarer dere å holde egne stemmer?'
        ],
        solution: 'Begge gruppene skal kunne holde sin stemme uten å bli dratt over til den andre.',
        hints: ['Start med å la én gruppe synge hele sangen først'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 3: KOMPONERING
// ============================================================================

export const CHAPTER_MUSIKK_6_3_1: TextbookChapter = {
  id: 'musikk-6-3-1',
  courseId: 'musikk-6',
  chapterNumber: '3.1',
  title: 'Lage musikk',
  description: 'Komponer egne melodier og rytmer.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['skape og formidle egne musikalske uttrykk'],
  content: [
    {
      id: 'musikk-6-3-1-intro',
      type: 'text',
      content: `## Bli en komponist!

Å lage musikk selv er en av de mest kreative tingene du kan gjøre. Du trenger ikke være et geni - alle kan lage musikk!

### Du kan lage:
- Melodier til tekster
- Rytmer med kroppen eller instrumenter
- Lydbilder som forteller en historie
- Beats og bakgrunnsspor`
    },
    {
      id: 'musikk-6-3-1-def-1',
      type: 'definition',
      title: 'Komposisjon',
      content: 'Et musikkstykke som noen har laget. En komposisjon kan være alt fra en enkel melodi til en hel symfoni.'
    },
    {
      id: 'musikk-6-3-1-def-2',
      type: 'definition',
      title: 'Improvisasjon',
      content: 'Å lage musikk i øyeblikket, uten å planlegge på forhånd. Det er som å snakke musikk - du lager det mens du går.'
    },
    {
      id: 'musikk-6-3-1-text-2',
      type: 'text',
      content: `## Tips for å lage melodi

### Start enkelt
- Bruk bare noen få toner (f.eks. C, D, E, G, A)
- Hold deg til en skala (dur eller moll)
- Start og slutt på grunntonen

### Lag mønster
- Gjenta en idé
- Varier litt på det du har laget
- Kontrast - gjør noe helt annet før du går tilbake

### Tenk form
- Begynnelse - midtdel - slutt
- Eller: vers - refreng - vers - refreng
- Gjentakelse gjør det lett å huske`
    },
    {
      id: 'musikk-6-3-1-example-1',
      type: 'example',
      title: 'Lage en melodi',
      problem: 'Hvordan lager du en enkel melodi?',
      solution: `1. **Velg toner**: Bruk tonene C, D, E, G, A (pentatonisk skala)
2. **Lag en kort frase**: For eksempel: C-D-E-E-D
3. **Gjenta med variasjon**: E-G-A-A-G
4. **Lag en avslutning**: G-E-D-C

Nå har du en melodi med tre deler:
- Frase 1: C-D-E-E-D
- Frase 2: E-G-A-A-G (høyere)
- Frase 3: G-E-D-C (tilbake til start)`
    },
    {
      id: 'musikk-6-3-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-1-ex-1',
        number: '3.1.1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er forskjellen på komposisjon og improvisasjon?',
        solution: 'Komposisjon er musikk som er planlagt og skrevet ned på forhånd. Improvisasjon er musikk du lager i øyeblikket, uten å planlegge.',
        hints: ['Det ene er planlagt, det andre er spontant'],
      }
    },
    {
      id: 'musikk-6-3-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-1-ex-2',
        number: '3.1.2',
        type: 'practical',
        difficulty: 'medium',
        task: 'Lag en enkel rytme med klapping.',
        subTasks: [
          'Lag et mønster på 4 slag',
          'Gjenta mønsteret 4 ganger',
          'Legg til en variasjon',
          'Øv til du kan det utenat'
        ],
        solution: 'Rytmen skal ha et tydelig mønster som gjentas og varieres.',
        hints: ['Start med: klapp-klapp-pause-klapp'],
      }
    },
    {
      id: 'musikk-6-3-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-1-ex-3',
        number: '3.1.3',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Komponer en melodi på 8 takter.',
        subTasks: [
          'Velg en skala (dur eller moll)',
          'Lag to fraser som ligner på hverandre',
          'Lag en avslutning som føles ferdig',
          'Skriv ned melodien eller spill den inn'
        ],
        solution: 'Melodien skal ha en tydelig form med begynnelse, midt og slutt.',
        hints: ['Start og slutt på grunntonen for at det skal føles ferdig'],
      }
    },
    {
      id: 'musikk-6-3-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-1-ex-4',
        number: '3.1.4',
        type: 'practical',
        difficulty: 'medium',
        task: 'Improviser over en enkel akkordprogresjon.',
        subTasks: [
          'Spill eller syng akkordene C - Am - F - G',
          'Mens akkordene spilles, syng eller spill frie toner',
          'Prøv å lage melodier som passer til akkordene',
          'Gjør det flere ganger - bli mer komfortabel'
        ],
        solution: 'Du skal kunne lage spontane melodier som passer til akkordene.',
        hints: ['Bruk tonene C, D, E, G, A - de passer til alle disse akkordene'],
      }
    }
  ],
};

export const CHAPTER_MUSIKK_6_3_2: TextbookChapter = {
  id: 'musikk-6-3-2',
  courseId: 'musikk-6',
  chapterNumber: '3.2',
  title: 'Digital musikk',
  description: 'Bruk digitale verktøy til å lage og redigere musikk.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske digitale verktøy for musikkskaping'],
  content: [
    {
      id: 'musikk-6-3-2-intro',
      type: 'text',
      content: `## Musikk på data

I dag kan hvem som helst lage profesjonell musikk hjemme! Med en datamaskin eller nettbrett og riktig programvare kan du komponere, spille inn og mikse musikk.

### Fordeler med digital musikk:
- Du trenger ikke dyre instrumenter
- Du kan angre og gjøre om
- Lett å dele musikken din med andre
- Mange gratis verktøy tilgjengelig`
    },
    {
      id: 'musikk-6-3-2-def-1',
      type: 'definition',
      title: 'DAW (Digital Audio Workstation)',
      content: 'Et program for å lage musikk på datamaskin. Eksempler er GarageBand, Soundtrap og BandLab. Du kan spille inn, redigere og mikse musikk.'
    },
    {
      id: 'musikk-6-3-2-def-2',
      type: 'definition',
      title: 'Loops',
      content: 'Korte musikkfiler som gjentas. Du kan sette sammen loops for å lage et helt musikkstykke uten å spille noe selv.'
    },
    {
      id: 'musikk-6-3-2-text-2',
      type: 'text',
      content: `## GarageBand og lignende

GarageBand (Mac/iPad) er et populært program for nybegynnere.

### Det kan du gjøre:
- Bruke ferdiglagede loops
- Spille virtuelle instrumenter
- Spille inn egen stemme eller instrument
- Legge på effekter
- Mikse og eksportere

### Andre alternativer:
- **Soundtrap** - fungerer i nettleseren
- **BandLab** - gratis online
- **Audacity** - gratis for opptak og redigering`
    },
    {
      id: 'musikk-6-3-2-text-3',
      type: 'text',
      content: `## Lage musikk med loops

### Steg for steg:
1. **Velg tempo og toneart**
2. **Finn en trommeloop** - dette blir grunnlaget
3. **Legg til bass** - velg en som passer
4. **Legg til akkorder** - gitar, piano eller synth
5. **Legg til melodier** - synth-leads eller andre loops
6. **Arranger** - bestem hva som skal spille hvor

### Tips:
- Ikke bruk for mange loops samtidig
- La noen deler være rolige, andre mer intense
- Fjern elementer innimellom for variasjon`
    },
    {
      id: 'musikk-6-3-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-2-ex-1',
        number: '3.2.1',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hva er en loop i musikkproduksjon?',
        solution: 'En loop er en kort musikkfil som gjentas. Du kan sette sammen loops for å lage et helt musikkstykke.',
        hints: ['Tenk på noe som går rundt og rundt'],
      }
    },
    {
      id: 'musikk-6-3-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står DAW for?',
        solution: 'Digital Audio Workstation',
        multipleChoiceOptions: [
          { id: 'a', text: 'Digital Audio Workstation', isCorrect: true },
          { id: 'b', text: 'Diverse Audio Windows', isCorrect: false },
          { id: 'c', text: 'Download All Work', isCorrect: false },
          { id: 'd', text: 'Digital App for Writing', isCorrect: false }
        ],
        hints: ['Det er et program for å lage musikk'],
      }
    },
    {
      id: 'musikk-6-3-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-2-ex-3',
        number: '3.2.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Lag et enkelt beat med loops i GarageBand eller lignende.',
        subTasks: [
          'Åpne programmet og start nytt prosjekt',
          'Finn og legg inn en trommeloop',
          'Legg til en bassloop',
          'La det spille i 16 takter'
        ],
        solution: 'Du skal ha et enkelt beat med trommer og bass som høres bra ut sammen.',
        hints: ['Velg loops som er i samme tempo og toneart'],
      }
    },
    {
      id: 'musikk-6-3-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-3-2-ex-4',
        number: '3.2.4',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag en komplett låt på 1-2 minutter med digitale verktøy.',
        subTasks: [
          'Planlegg strukturen (intro-vers-refreng-vers-refreng-outro)',
          'Lag grunnlaget med trommer og bass',
          'Legg til akkorder og melodier',
          'Arranger så det er variasjon',
          'Eksporter som lydfil'
        ],
        solution: 'Låten skal ha en tydelig struktur med variasjon og føles som en ferdig låt.',
        hints: ['Kopier og lim inn det som fungerer, men gjør endringer'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 4: MUSIKKHISTORIE
// ============================================================================

export const CHAPTER_MUSIKK_6_4_1: TextbookChapter = {
  id: 'musikk-6-4-1',
  courseId: 'musikk-6',
  chapterNumber: '4.1',
  title: 'Musikk fra ulike tider',
  description: 'Utforsk musikkhistorien fra klassisk til moderne musikk.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['utforske musikk fra ulike tidsperioder'],
  content: [
    {
      id: 'musikk-6-4-1-intro',
      type: 'text',
      content: `## Musikkens historie

Musikk har eksistert så lenge mennesker har levd. Gjennom historien har musikken endret seg med samfunnet, teknologien og smaken.

### Hvorfor lære musikkhistorie?
- Forstå hvor dagens musikk kommer fra
- Oppdage musikk du kanskje ikke kjente til
- Se hvordan musikk speiler sin tid
- Bli inspirert av ulike stiler`
    },
    {
      id: 'musikk-6-4-1-text-2',
      type: 'text',
      content: `## Klassisk musikk (ca. 1750-1820)

### Kjennetegn:
- Elegant og balansert
- Tydelige melodier
- Orkestermusikk og kammermusikk
- Ofte skrevet for kongelige

### Kjente komponister:
- **Wolfgang Amadeus Mozart** (1756-1791)
  - Østerriksk barnegeni
  - Skrev over 600 verk
  - Kjent for operaer og symfonier

- **Ludwig van Beethoven** (1770-1827)
  - Tysk komponist
  - Bro mellom klassisk og romantikk
  - Skrev musikk selv etter han ble døv`
    },
    {
      id: 'musikk-6-4-1-text-3',
      type: 'text',
      content: `## Jazz (fra ca. 1900)

### Kjennetegn:
- Improvisasjon
- Synkoperte rytmer (swing)
- Oppsto i USA, spesielt New Orleans
- Blanding av afrikanske og europeiske tradisjoner

### Undersjangre:
- Dixieland (tidlig jazz)
- Swing (1930-40-tallet)
- Bebop (raskere, mer kompleks)
- Cool jazz, fusion og mer

### Kjente jazznavn:
- Louis Armstrong (trompet og sang)
- Ella Fitzgerald (sang)
- Miles Davis (trompet)`
    },
    {
      id: 'musikk-6-4-1-text-4',
      type: 'text',
      content: `## Rock (fra ca. 1950)

### Kjennetegn:
- Elektrisk gitar, bass, trommer
- Sterk beat
- Ofte opprørsk eller ungdommelig
- Utviklet seg fra blues og country

### Viktige artister:
- **Elvis Presley** - "The King of Rock and Roll"
- **The Beatles** - revolusjonerte popmusikk på 1960-tallet
- **Led Zeppelin** - hardere rock
- **Queen** - teatralsk rock

### Rock-undersjangre:
- Pop-rock
- Heavy metal
- Punk
- Alternativ rock`
    },
    {
      id: 'musikk-6-4-1-text-5',
      type: 'text',
      content: `## Pop og moderne musikk

### Pop:
- "Populærmusikk" - laget for å appellere til mange
- Fengende refreng og hooks
- Ofte produsert i studio
- Artister som Taylor Swift, Ed Sheeran, BTS

### Hip-hop/Rap:
- Oppsto i New York på 1970-tallet
- Fokus på tekst og rytme
- Ofte med samples og beats
- Artister som Eminem, Kendrick Lamar, Karpe

### Elektronisk musikk:
- Laget med synther og datamaskiner
- Dansemusikk, ambient, techno
- DJ-er som David Guetta, Kygo`
    },
    {
      id: 'musikk-6-4-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sjanger oppsto i New Orleans rundt 1900?',
        solution: 'Jazz',
        multipleChoiceOptions: [
          { id: 'a', text: 'Rock', isCorrect: false },
          { id: 'b', text: 'Jazz', isCorrect: true },
          { id: 'c', text: 'Hip-hop', isCorrect: false },
          { id: 'd', text: 'Klassisk', isCorrect: false }
        ],
        hints: ['Det er en sjanger med mye improvisasjon'],
      }
    },
    {
      id: 'musikk-6-4-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-4-1-ex-2',
        number: '4.1.2',
        type: 'short-answer',
        difficulty: 'medium',
        task: 'Nevn to kjennetegn ved klassisk musikk.',
        solution: 'Klassisk musikk er ofte elegant og balansert, med tydelige melodier. Den ble ofte skrevet for orkester og var populær blant kongelige.',
        hints: ['Tenk på Mozart og Beethoven'],
      }
    },
    {
      id: 'musikk-6-4-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-4-1-ex-3',
        number: '4.1.3',
        type: 'practical',
        difficulty: 'medium',
        task: 'Lytt til ett eksempel fra hver av disse sjangrene: klassisk, jazz, rock.',
        subTasks: [
          'Finn et stykke klassisk musikk (f.eks. Mozart)',
          'Finn en jazzsang (f.eks. Louis Armstrong)',
          'Finn en rockelåt (f.eks. Queen)',
          'Beskriv hva som er ulikt mellom dem'
        ],
        solution: 'Du skal kunne beskrive forskjeller i instrumenter, rytme, stemning og stil.',
        hints: ['Bruk en strømmetjeneste eller YouTube for å finne eksempler'],
      }
    },
    {
      id: 'musikk-6-4-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-4-1-ex-4',
        number: '4.1.4',
        type: 'short-answer',
        difficulty: 'lett',
        task: 'Hvem kalles "The King of Rock and Roll"?',
        solution: 'Elvis Presley kalles "The King of Rock and Roll". Han var en av de første store rockestjernene på 1950-tallet.',
        hints: ['Han er fra USA og levde på 1900-tallet'],
      }
    },
    {
      id: 'musikk-6-4-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-6-4-1-ex-5',
        number: '4.1.5',
        type: 'practical',
        difficulty: 'vanskelig',
        task: 'Lag en tidslinje over musikkhistorien med de viktigste sjangrene.',
        subTasks: [
          'Tegn en linje fra 1750 til i dag',
          'Marker når hver sjanger oppsto',
          'Tegn inn kjente artister/komponister',
          'Legg til bilder eller symboler'
        ],
        solution: 'Tidslinjen skal vise klassisk (1750), jazz (1900), rock (1950), pop/hip-hop (1970-i dag).',
        hints: ['Du kan bruke fargekoder for ulike sjangre'],
      }
    }
  ],
};

// Eksporter alle kapitler
export const MUSIKK_6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MUSIKK_6_1_1,
  CHAPTER_MUSIKK_6_1_2,
  CHAPTER_MUSIKK_6_1_3,
  CHAPTER_MUSIKK_6_2_1,
  CHAPTER_MUSIKK_6_2_2,
  CHAPTER_MUSIKK_6_2_3,
  CHAPTER_MUSIKK_6_3_1,
  CHAPTER_MUSIKK_6_3_2,
  CHAPTER_MUSIKK_6_4_1,
];

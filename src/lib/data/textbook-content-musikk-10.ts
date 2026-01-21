/**
 * Musikk 10. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for musikk på 10. trinn (eksamensår)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Musikkhistorie
// ============================================================================

export const CHAPTER_MUSIKK_10_1: TextbookChapter = {
  id: 'musikk-10-1',
  courseId: 'musikk-10',
  chapterNumber: '1',
  title: 'Musikkhistorie',
  description: 'En reise gjennom musikkens historie fra antikken til moderne tid.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og reflektere over musikkens rolle i ulike historiske perioder og kulturer',
  ],
  content: [
    {
      id: 'musikk-10-1-intro',
      type: 'text',
      content: `Musikkhistorien strekker seg over tusenvis av år og avspeiler menneskets utvikling, kultur og samfunn. Ved å forstå musikkens historie får vi dypere innsikt i hvordan musikk har formet og blitt formet av samfunnet.`,
    },
    {
      id: 'musikk-10-1-def-1',
      type: 'definition',
      title: 'Musikkhistoriske epoker',
      content: `Musikkhistorien deles tradisjonelt inn i epoker: Middelalder (500-1400), Renessanse (1400-1600), Barokk (1600-1750), Wienerklassisisme (1750-1820), Romantikk (1820-1900) og Moderne tid (1900-).`,
    },
    {
      id: 'musikk-10-1-text-1',
      type: 'text',
      content: `**Middelalderen (ca. 500-1400)**

Middelalderens musikk var dominert av kirken:
- **Gregoriansk sang**: Enstemmig, religiøs sang uten akkompagnement
- **Trubadurer og trouverer**: Verdslige sangere som sang om kjærlighet og ridderskap
- **Polyfoni**: Flerstemmighet utviklet seg gradvis

Musikken ble nedskrevet med neumer, en tidlig form for noter.`,
    },
    {
      id: 'musikk-10-1-text-2',
      type: 'text',
      content: `**Renessansen (ca. 1400-1600)**

Renessansen brakte en gjenoppdagelse av antikkens idealer:
- **Polyfoni**: Kompleks flerstemmighet med opptil 40 stemmer
- **A cappella**: Vokalmusikk uten instrumenter
- **Madrigaler**: Verdslige flerstemte sanger
- **Instrumentalmusikk**: Selvstendig musikkform

**Viktige komponister**: Palestrina, Josquin des Prez`,
    },
    {
      id: 'musikk-10-1-text-3',
      type: 'text',
      content: `**Fra barokk til romantikk**

Disse epokene dannet grunnlaget for klassisk musikk slik vi kjenner den:

- **Barokk (1600-1750)**: Ornamentert stil, opera oppstår, basso continuo
- **Wienerklassisisme (1750-1820)**: Klarere struktur, symfoni og sonateform
- **Romantikk (1820-1900)**: Følelser, nasjonalisme, virtuositet

**Epokegjørende komponister**: Bach, Mozart, Beethoven, Chopin, Grieg`,
    },
    {
      id: 'musikk-10-1-text-4',
      type: 'text',
      content: `**Moderne tid (1900-)**

1900-tallet brakte revolusjonerende endringer:

- **Impresjonisme**: Stemninger fremfor struktur (Debussy)
- **Ekspresjonisme og atonalitet**: Brøt med tradisjonelle harmonier (Schönberg)
- **Jazz og blues**: Afroamerikansk musikk påvirket all populærmusikk
- **Rock and roll**: Oppsto på 1950-tallet
- **Elektronisk musikk**: Fra synthesizere til digital produksjon

I dag er musikksjangerne utallige, og grensene mellom dem er ofte flytende.`,
    },
    {
      id: 'musikk-10-1-example-1',
      type: 'example',
      title: 'Norsk musikkhistorie',
      content: `Norsk musikkhistorie er preget av folkemusikk og nasjonalromantikk:

- **Folkemusikk**: Slåtter, stev og religiøse folketoner har røtter tilbake flere hundre år
- **Nasjonalromantikken**: Edvard Grieg (1843-1907) brukte folketoner i sin klassiske musikk
- **Moderne tid**: Fra a-ha på 1980-tallet til dagens artister som Aurora og Kygo

Hardingfela er et særnorsk instrument med undertoner som gir den karakteristiske klangen.`,
    },
    {
      id: 'musikk-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken epoke var dominert av kirkelig musikk som gregoriansk sang?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken epoke var dominert av kirkelig musikk som gregoriansk sang?',
            solution: 'Middelalderen',
            multipleChoiceOptions: ['Middelalderen', 'Renessansen', 'Barokken', 'Romantikken'],
          },
        ],
        solution: 'Middelalderen (ca. 500-1400) var preget av kirkelig musikk, særlig gregoriansk sang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner romantikkens musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner romantikkens musikk mest?',
            solution: 'Sterke følelser og nasjonalisme',
            multipleChoiceOptions: ['Sterke følelser og nasjonalisme', 'Streng symmetri og balanse', 'Kun religiøs musikk', 'Elektroniske instrumenter'],
          },
        ],
        solution: 'Romantikken (1820-1900) var preget av sterke følelser, nasjonalisme og virtuose solister.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem er Norges mest kjente klassiske komponist?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er Norges mest kjente klassiske komponist?',
            solution: 'Edvard Grieg',
            multipleChoiceOptions: ['Edvard Grieg', 'Ole Bull', 'Johan Svendsen', 'Halfdan Kjerulf'],
          },
        ],
        solution: 'Edvard Grieg (1843-1907) er Norges mest kjente klassiske komponist, kjent for Peer Gynt og Klaverkonsert i a-moll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er polyfoni?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med polyfoni i musikk?',
            solution: 'Flerstemmighet med selvstendige melodilinjer',
            multipleChoiceOptions: ['Flerstemmighet med selvstendige melodilinjer', 'Enstemmig sang', 'Musikk med bare rytme', 'Elektronisk musikk'],
          },
        ],
        solution: 'Polyfoni er flerstemmig musikk der flere selvstendige melodilinjer klinger samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilken musikksjanger oppsto i afroamerikanske miljøer på begynnelsen av 1900-tallet og påvirket all senere populærmusikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken musikksjanger oppsto i afroamerikanske miljøer og påvirket all senere populærmusikk?',
            solution: 'Jazz og blues',
            multipleChoiceOptions: ['Jazz og blues', 'Klassisk musikk', 'Gregorisk sang', 'Opera'],
          },
        ],
        solution: 'Jazz og blues oppsto i afroamerikanske miljøer tidlig på 1900-tallet og la grunnlaget for rock, pop, R&B og hip-hop.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en tidslinje som viser de musikkhistoriske epokene fra middelalder til romantikk.',
        solution: 'Middelalder (500-1400) -> Renessanse (1400-1600) -> Barokk (1600-1750) -> Wienerklassisisme (1750-1820) -> Romantikk (1820-1900)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Musikkteori og analyse
// ============================================================================

export const CHAPTER_MUSIKK_10_2: TextbookChapter = {
  id: 'musikk-10-2',
  courseId: 'musikk-10',
  chapterNumber: '2',
  title: 'Musikkteori og analyse',
  description: 'Lær å analysere musikkens byggesteiner og strukturer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke musikkfaglige begreper i samtale og analyse av musikk',
  ],
  content: [
    {
      id: 'musikk-10-2-intro',
      type: 'text',
      content: `Musikkteori gir oss verktøy til å forstå hvordan musikk er bygget opp. Ved å analysere musikk kan vi oppdage mønstre, forstå valg komponisten har gjort, og utvikle vår egen musikalske forståelse.`,
    },
    {
      id: 'musikk-10-2-def-1',
      type: 'definition',
      title: 'Skala',
      content: `En skala er en ordnet rekke av toner som utgjør grunnlaget for melodi og harmoni. De vanligste er durskala (lys) og mollskala (mørk). En skala har 7 ulike toner før den gjentar seg i neste oktav.`,
    },
    {
      id: 'musikk-10-2-text-1',
      type: 'text',
      content: `**Durskala og mollskala**

**Durskala** (C-dur som eksempel):
C - D - E - F - G - A - H - C
Intervallmønster: hel - hel - halv - hel - hel - hel - halv

**Mollskala** (a-moll som eksempel):
A - H - C - D - E - F - G - A
Intervallmønster: hel - halv - hel - hel - halv - hel - hel

Dur gir en lys, glad klang, mens moll gir en mørkere, mer melankolsk stemning.`,
    },
    {
      id: 'musikk-10-2-def-2',
      type: 'definition',
      title: 'Akkord',
      content: `En akkord er tre eller flere toner som klinger samtidig. Grunnakkordene er treklanger bygget på grunntone, ters og kvint.`,
    },
    {
      id: 'musikk-10-2-text-2',
      type: 'text',
      content: `**Akkorder og funksjoner**

De viktigste akkordene i en toneart:

| Funksjon | Trinn | I C-dur | Rolle |
|----------|-------|---------|-------|
| Tonika | I | C | Hvilepunkt, hjemme |
| Subdominant | IV | F | Bevegelse bort |
| Dominant | V | G | Spenning, vil tilbake |

**Vanlige akkordprogresjoner:**
- I - IV - V - I (klassisk)
- I - V - vi - IV (pop-progresjon)
- ii - V - I (jazz)`,
    },
    {
      id: 'musikk-10-2-text-3',
      type: 'text',
      content: `**Formanalyse**

Musikalske former beskriver strukturen i et stykke:

- **Vers-refreng**: A - B - A - B (pop/rock)
- **Sonateform**: Eksposisjon - Gjennomføring - Rekapitulasjon (klassisk)
- **Rondo**: A - B - A - C - A (hovedtema som gjentas)
- **12-takters blues**: Fast skjema med I - IV - V akkorder
- **Strofisk form**: Samme melodi, ulik tekst (folketoner, salmer)

Ved analyse identifiserer vi deler, gjentakelser og kontraster.`,
    },
    {
      id: 'musikk-10-2-text-4',
      type: 'text',
      content: `**Analysemodell**

Når du analyserer musikk, se på:

1. **Melodi**: Bevegelse, omfang, karakteristiske intervaller
2. **Harmoni**: Akkorder, progresjoner, spenning og avspenning
3. **Rytme**: Taktart, tempo, særegne rytmemønstre
4. **Klang**: Instrumenter, dynamikk, tekstur
5. **Form**: Struktur, deler, gjentakelser
6. **Tekst**: Tema, rim, forhold til melodien (vokalmusikk)`,
    },
    {
      id: 'musikk-10-2-example-1',
      type: 'example',
      title: 'Analyse av en poplåt',
      content: `La oss analysere en typisk poplåt:

**Struktur**: Intro - Vers - Refreng - Vers - Refreng - Bro - Refreng - Outro

**Akkorder**: Ofte fire akkorder som gjentas (f.eks. C - G - Am - F)

**Melodi**: Enkel, sangbar, med tydelig hook i refrenget

**Rytme**: 4/4-takt, backbeat på slag 2 og 4

**Klang**: Trommer, bass, gitarer, synthesizer, vokal

Popmusikk er designet for å være fengende og lett å huske.`,
    },
    {
      id: 'musikk-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom dur og moll?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom dur og moll?',
            solution: 'Dur er lys/glad, moll er mørk/melankolsk',
            multipleChoiceOptions: ['Dur er lys/glad, moll er mørk/melankolsk', 'Dur har flere toner', 'Moll er raskere', 'Det er ingen forskjell'],
          },
        ],
        solution: 'Durskalaen gir en lys, glad klang, mens mollskalaen gir en mørkere, mer melankolsk stemning på grunn av ulike intervallmønstre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er funksjonen til dominantakkorden?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonen til dominantakkorden (V)?',
            solution: 'Skape spenning som vil løses til tonika',
            multipleChoiceOptions: ['Skape spenning som vil løses til tonika', 'Være hvilepunktet', 'Avslutte stykket', 'Øke tempoet'],
          },
        ],
        solution: 'Dominantakkorden (V) skaper spenning som naturlig vil løses til tonika (I). Dette er grunnlaget for vestlig harmoni.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er 12-takters blues?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner 12-takters blues?',
            solution: 'Et fast akkordskjema over 12 takter med I, IV og V',
            multipleChoiceOptions: ['Et fast akkordskjema over 12 takter med I, IV og V', 'En sang som varer i 12 minutter', '12 ulike melodier', 'Kun trommer i 12 takter'],
          },
        ],
        solution: '12-takters blues er et akkordskjema: 4 takter I, 2 takter IV, 2 takter I, 2 takter V, 2 takter I.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke tre akkorder er de viktigste i en toneart?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke tre akkorder er de viktigste i en toneart?',
            solution: 'Tonika (I), subdominant (IV) og dominant (V)',
            multipleChoiceOptions: ['Tonika (I), subdominant (IV) og dominant (V)', 'A, B og C', 'Dur, moll og dim', 'Piano, gitar og bass'],
          },
        ],
        solution: 'Tonika (I), subdominant (IV) og dominant (V) er hovedfunksjonene som danner grunnlaget for harmonikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en sang du liker og analyser strukturen. Identifiser vers, refreng og eventuelle andre deler.',
        solution: 'En typisk popstruktur er: Intro - Vers 1 - Refreng - Vers 2 - Refreng - Bro - Refreng - Outro. Noter hvilke deler som gjentas og hvor det er kontraster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva bør du se på når du analyserer et musikkstykke?',
        solution: 'Ved analyse bør du se på: melodi (bevegelse, omfang), harmoni (akkorder), rytme (taktart, tempo), klang (instrumenter, dynamikk), form (struktur) og eventuelt tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Komposisjon
// ============================================================================

export const CHAPTER_MUSIKK_10_3: TextbookChapter = {
  id: 'musikk-10-3',
  courseId: 'musikk-10',
  chapterNumber: '3',
  title: 'Komposisjon',
  description: 'Lær å skape egen musikk gjennom ulike komposisjonsteknikker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'skape og uttrykke egne musikalske ideer',
    'bruke ulike komposisjonsteknikker',
  ],
  content: [
    {
      id: 'musikk-10-3-intro',
      type: 'text',
      content: `Komposisjon er kunsten å skape musikk. Enten du skriver en enkel melodi eller en hel låt, bruker du kreativitet sammen med musikalsk kunnskap. Alle kan lære å komponere!`,
    },
    {
      id: 'musikk-10-3-def-1',
      type: 'definition',
      title: 'Motiv',
      content: `Et motiv er den minste musikalske enheten med gjenkjennelig karakter. Det kan være en kort melodisk eller rytmisk figur som gjentas og varieres gjennom et stykke.`,
    },
    {
      id: 'musikk-10-3-text-1',
      type: 'text',
      content: `**Melodiskriving**

Gode melodier har ofte disse kjennetegnene:

1. **Tydelig kontur**: Kurve som stiger, faller eller buer
2. **Gjentakelse og variasjon**: Gjenbruk ideer med små endringer
3. **Klimaks**: Et høydepunkt melodien bygger mot
4. **Sangbart omfang**: Ikke for store sprang eller for høyt/lavt

**Tips**: Start med å nynne. De beste melodiene er ofte de som kommer naturlig.`,
    },
    {
      id: 'musikk-10-3-text-2',
      type: 'text',
      content: `**Komposisjonsteknikker**

- **Sekvens**: Gjenta et motiv på et annet tonenivå
- **Imitasjon**: En stemme kopierer en annen (som i kanon)
- **Inversjon**: Speilvend melodien (opp blir ned)
- **Retrograd**: Spill melodien baklengs
- **Augmentasjon**: Forleng notevarighetene
- **Diminusjon**: Forkort notevarighetene
- **Variasjon**: Endre et tema gradvis`,
    },
    {
      id: 'musikk-10-3-text-3',
      type: 'text',
      content: `**Tekstskriving til musikk**

Når du skriver tekst til en melodi:

1. **Prosodi**: La ordenes naturlige betoning følge melodien
2. **Rim**: Bruk rim for å binde linjer sammen (ikke obligatorisk)
3. **Billedspråk**: Vis fremfor å fortelle
4. **Hook**: Lag en fengende tekstlinje til refrenget
5. **Struktur**: Vers forteller historien, refreng oppsummerer følelsen

**Rimtyper**: Parrim (aa bb), kryssrim (ab ab), kiastisk rim (abba)`,
    },
    {
      id: 'musikk-10-3-text-4',
      type: 'text',
      content: `**Arrangeringens grunnprinsipper**

Arrangement handler om å fordele musikken mellom instrumenter:

- **Grunnkomp**: Bass, trommer, gitar/piano holder rytme og harmoni
- **Melodi**: Vokal eller ledeinstrument har hovedmelodien
- **Fylde**: Strykere, synth, backing gir fylde
- **Orkestrering**: Ulike instrumenter i ulike deler skaper variasjon

**Dynamisk kurve**: Start rolig, bygg opp til klimaks, avrund.`,
    },
    {
      id: 'musikk-10-3-example-1',
      type: 'example',
      title: 'Fra ide til ferdig lat',
      content: `**Prosessen:**

1. **Idefase**: Nynn en melodifrase, ta den opp pa mobilen
2. **Utvikling**: Finn akkorder som passer, utvid melodien
3. **Struktur**: Bestem form (vers, refreng, bro)
4. **Tekst**: Skriv tekst som passer til melodien
5. **Arrangement**: Fordel musikken pa instrumenter
6. **Innspilling**: Spill inn en demo
7. **Redigering**: Finjuster og forbedre

Det finnes ingen "riktig" rekkefølge - noen starter med tekst, andre med rytme.`,
    },
    {
      id: 'musikk-10-3-tip-1',
      type: 'tip',
      title: 'Kreativ blokkering',
      content: `Sitter du fast? Prøv disse tipsene:
- Sett begrensninger (bare tre akkorder, ett instrument)
- Lytt til musikk fra en sjanger du vanligvis ikke hører på
- Samarbeid med noen
- Gå en tur og kom tilbake med friske ører`,
    },
    {
      id: 'musikk-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et musikalsk motiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er et musikalsk motiv?',
            solution: 'En kort melodisk eller rytmisk figur med gjenkjennelig karakter',
            multipleChoiceOptions: ['En kort melodisk eller rytmisk figur med gjenkjennelig karakter', 'Et helt refreng', 'Slutten av en sang', 'Et instrument'],
          },
        ],
        solution: 'Et motiv er den minste musikalske enheten - en kort figur som kan gjentas og varieres gjennom et stykke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en sekvens i komposisjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en sekvens som komposisjonsteknikk?',
            solution: 'A gjenta et motiv pa et annet toneniva',
            multipleChoiceOptions: ['A gjenta et motiv pa et annet toneniva', 'A spille baklengs', 'A spille raskere', 'A skifte toneart'],
          },
        ],
        solution: 'En sekvens er nar du gjentar et motiv eller en frase pa et høyere eller lavere toneniva.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med prosodi i tekstskriving til musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr prosodi i sangskriving?',
            solution: 'At ordenes betoning følger melodiens betoning',
            multipleChoiceOptions: ['At ordenes betoning følger melodiens betoning', 'At teksten rimer', 'At sangen handler om noe trist', 'At man synger høyt'],
          },
        ],
        solution: 'Prosodi betyr at de naturlige betoningene i ordene følger betoningene i melodien, slik at teksten føles naturlig a synge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag et kort melodisk motiv (4-8 toner) og skriv det ned. Vis deretter hvordan du kan variere det med sekvens og inversjon.',
        solution: 'Eksempel: Originalt motiv: C-D-E-G. Sekvens (en tone opp): D-E-F#-A. Inversjon (speilvendt): C-Bb-Ab-F. Noter melodien pa notelinjer eller beskriv tonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen pa vers og refreng i en lat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom vers og refreng?',
            solution: 'Vers forteller historien og varierer, refreng er fengende og gjentas likt',
            multipleChoiceOptions: ['Vers forteller historien og varierer, refreng er fengende og gjentas likt', 'Det er ingen forskjell', 'Verset synges høyere', 'Refrenget kommer alltid først'],
          },
        ],
        solution: 'Verset forteller historien og har ofte ny tekst for hvert vers. Refrenget er det fengende partiet som gjentas med samme tekst og melodi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv et kort vers (4 linjer) om et valgfritt tema. Bruk gjerne rim.',
        solution: 'Et eksempel med kryssrim: "Jeg ser ut gjennom vinduet mitt (a) / Og tenker pa alt som har skjedd (b) / Minnen kommer som et lite blits (a) / Av alle stedene vi har vært (b)"',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Musikkteknologi
// ============================================================================

export const CHAPTER_MUSIKK_10_4: TextbookChapter = {
  id: 'musikk-10-4',
  courseId: 'musikk-10',
  chapterNumber: '4',
  title: 'Musikkteknologi',
  description: 'Utforsk digitale verktøy for musikkskaping og produksjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke digitale verktøy til a skape og bearbeide musikk',
  ],
  content: [
    {
      id: 'musikk-10-4-intro',
      type: 'text',
      content: `Musikkteknologi har revolusjonert hvordan vi lager, spiller inn og lytter til musikk. I dag kan hvem som helst produsere profesjonelt lydende musikk hjemme med en datamaskin og de riktige programmene.`,
    },
    {
      id: 'musikk-10-4-def-1',
      type: 'definition',
      title: 'DAW (Digital Audio Workstation)',
      content: `En DAW er et program for musikkproduksjon. Her kan du spille inn, redigere, mikse og masterere musikk. Eksempler: GarageBand, Ableton Live, FL Studio, Logic Pro, Pro Tools.`,
    },
    {
      id: 'musikk-10-4-text-1',
      type: 'text',
      content: `**Grunnleggende DAW-konsepter**

- **Spor (track)**: En lydkilde, f.eks. vokal, gitar eller synth
- **Tidslinje**: Horisontal visning av tid der du plasserer lyd
- **Mikser**: Kontrollerer volum, panorering og effekter for hvert spor
- **Transport**: Play, stopp, opptak, loop
- **Prosjektfil**: Lagrer hele oppsettet ditt`,
    },
    {
      id: 'musikk-10-4-text-2',
      type: 'text',
      content: `**MIDI vs. Audio**

| MIDI | Audio |
|------|-------|
| Noteinformasjon | Faktisk lyd |
| Kan enkelt redigeres | Vanskeligere a endre |
| Krever lydkilde (synth) | Selvstendig lydfil |
| Liten filstørrelse | Større filer |
| F.eks. keyboard-innspilling | F.eks. vokalopptak |

MIDI lagrer hvilke toner som spilles, hvor hardt, og hvor lenge - ikke selve lyden.`,
    },
    {
      id: 'musikk-10-4-text-3',
      type: 'text',
      content: `**Vanlige effekter**

- **EQ (Equalizer)**: Justerer bass, mellomtone og diskant
- **Kompressor**: Jevner ut dynamikken
- **Reverb**: Legger til romklang
- **Delay**: Ekkoeffekt
- **Chorus**: Gjør lyden fyldigere
- **Distortion**: Forvrengt lyd (gitar)
- **Auto-tune**: Korrigerer tonehøyde`,
    },
    {
      id: 'musikk-10-4-text-4',
      type: 'text',
      content: `**Lyddesign og sampling**

**Synthesizer (synth)**: Skaper lyder elektronisk
- **Oscillator**: Genererer grunnlyden
- **Filter**: Former klangen
- **Envelope**: Kontrollerer hvordan lyden utvikler seg over tid

**Sampling**: Bruke opptak av andre lyder
- **Sample**: Et lydklipp
- **Sampler**: Instrument som spiller samples
- **Loop**: Sample som gjentas sømløst`,
    },
    {
      id: 'musikk-10-4-text-5',
      type: 'text',
      content: `**Produksjonsprosessen**

1. **Pre-produksjon**: Planlegging, latskriving, arrangering
2. **Innspilling**: Opptak av instrumenter og vokal
3. **Redigering**: Klipping, timing, tuning
4. **Miksing**: Balansere lyder, legge til effekter
5. **Mastering**: Siste finpuss for optimal lyd pa alle systemer

**Tips**: Lagre ofte og lag backup av prosjektene dine!`,
    },
    {
      id: 'musikk-10-4-tip-1',
      type: 'tip',
      title: 'Gratis programvare',
      content: `Starter du ut? Her er gratis alternativer:
- **GarageBand** (Mac/iOS): Komplett DAW for nybegynnere
- **Audacity**: Enkel lydredaktør for alle plattformer
- **LMMS**: Gratis DAW likt FL Studio
- **Cakewalk**: Profesjonell DAW, helt gratis`,
    },
    {
      id: 'musikk-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva star DAW for, og hva brukes det til?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva star DAW for?',
            solution: 'Digital Audio Workstation',
            multipleChoiceOptions: ['Digital Audio Workstation', 'Digital And Wireless', 'Direct Audio Wave', 'Double Audio Width'],
          },
        ],
        solution: 'DAW star for Digital Audio Workstation og er et program for a spille inn, redigere og produsere musikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom MIDI og audio?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom MIDI og audio?',
            solution: 'MIDI er noteinformasjon, audio er faktisk lyd',
            multipleChoiceOptions: ['MIDI er noteinformasjon, audio er faktisk lyd', 'Det er ingen forskjell', 'MIDI er bedre kvalitet', 'Audio kan bare spilles pa telefon'],
          },
        ],
        solution: 'MIDI lagrer informasjon om hvilke noter som spilles (som et notesystem), mens audio er en opptak av faktisk lyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør en kompressor?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonen til en kompressor i musikkproduksjon?',
            solution: 'Jevner ut dynamikken i lyden',
            multipleChoiceOptions: ['Jevner ut dynamikken i lyden', 'Legger til ekko', 'Gjør lyden dypere', 'Øker tempoet'],
          },
        ],
        solution: 'En kompressor reduserer forskjellen mellom de høyeste og laveste volumene, noe som gir en jevnere og ofte mer "profesjonell" lyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn de fem hovedfasene i musikkproduksjon.',
        solution: 'De fem hovedfasene er: 1) Pre-produksjon (planlegging), 2) Innspilling (opptak), 3) Redigering (klipping), 4) Miksing (balansering), 5) Mastering (finpuss).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er sampling?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr sampling i musikkproduksjon?',
            solution: 'A bruke opptak av eksisterende lyder i ny musikk',
            multipleChoiceOptions: ['A bruke opptak av eksisterende lyder i ny musikk', 'A spille gitar', 'A synge i mikrofon', 'A skrive noter'],
          },
        ],
        solution: 'Sampling er a ta opptak (samples) av lyder eller musikk og bruke dem i egne produksjoner, enten som loops eller enkelttoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en kort produksjon i GarageBand eller et lignende program. Bruk minst 4 spor og en effekt. Beskriv valgene du har gjort.',
        solution: 'Eksempel: Spor 1: Trommeloop (rytme), Spor 2: Basssynth (fundament), Spor 3: Piano (akkorder), Spor 4: Melodisynth (melodi). Effekt: Reverb pa melodien for a gi den rom og dybde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Verdensmusikk
// ============================================================================

export const CHAPTER_MUSIKK_10_5: TextbookChapter = {
  id: 'musikk-10-5',
  courseId: 'musikk-10',
  chapterNumber: '5',
  title: 'Verdensmusikk',
  description: 'Utforsk musikk fra ulike kulturer og verdensdeler.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og reflektere over musikk fra ulike kulturer',
  ],
  content: [
    {
      id: 'musikk-10-5-intro',
      type: 'text',
      content: `Musikk finnes i alle kulturer verden over, men uttrykkene varierer enormt. Ved a utforske verdensmusikk lærer vi om andre kulturer og far nye perspektiver pa hva musikk kan være.`,
    },
    {
      id: 'musikk-10-5-def-1',
      type: 'definition',
      title: 'Verdensmusikk',
      content: `Verdensmusikk er en samlebetegnelse for tradisjonell og folkemusikk fra hele verden, samt sjangre som blander disse tradisjonene med vestlig populærmusikk.`,
    },
    {
      id: 'musikk-10-5-text-1',
      type: 'text',
      content: `**Afrikansk musikk**

Afrika har utrolig musikalsk mangfold:

- **Polyrytmikk**: Flere rytmer spilles samtidig
- **Call and response**: Veksling mellom forsanger og kor
- **Trommer**: Djembe, talking drum, dunun
- **Mbira/kalimba**: Tommelpiano
- **Kora**: 21-strenget harpe

Afrikansk rytmikk har pavirket jazz, blues, funk, hip-hop og elektronisk musikk.`,
    },
    {
      id: 'musikk-10-5-text-2',
      type: 'text',
      content: `**Asiatisk musikk**

Asias musikktradisjoner er like varierte som kontinentet:

**India**:
- Raga: Melodisk system med regler for stigning og synking
- Tala: Sykliske rytmemønstre
- Sitar, tabla, harmonium

**Kina og Japan**:
- Pentatonisk skala (5 toner)
- Erhu, pipa, shamisen, koto
- Tradisjonelle operaformer

**Indonesia**:
- Gamelan: Orkester med gongs og metallofoner
- Sykliske strukturer`,
    },
    {
      id: 'musikk-10-5-text-3',
      type: 'text',
      content: `**Latin-Amerika**

Latin-amerikansk musikk er kjent for livlige rytmer:

- **Samba** (Brasil): Synkopert trommerytme, karnevalmusikk
- **Salsa** (Cuba/Puerto Rico): Dans og musikk med clave-rytme
- **Tango** (Argentina): Lidenskapelig par-dans
- **Reggaeton**: Moderne urban sjanger
- **Mariachi** (Mexico): Tradisjonelle ensembler

Instrumenter: Congas, bongos, maracas, pandeiro, bandoneon`,
    },
    {
      id: 'musikk-10-5-text-4',
      type: 'text',
      content: `**Nordisk folkemusikk**

Skandinavisk tradisjon har særegne trekk:

**Norge**:
- Hardingfele med undertoner
- Slatter (spillestykker)
- Stev og kveding
- Joik (samisk)

**Sverige**: Nyckelharpa, polska (dans)
**Finland**: Kantele (sitertype)
**Island**: Rimur (episk sang)

Mange moderne artister blander folkemusikk med pop og elektronika.`,
    },
    {
      id: 'musikk-10-5-example-1',
      type: 'example',
      title: 'Fusjon og kulturmøter',
      content: `Moderne verdensmusikk blander ofte tradisjoner:

- **Afrobeat**: Vestafrikansk musikk + jazz + funk (Fela Kuti)
- **Reggae**: Jamaicansk musikk med afrikanske og karibiske røtter
- **Bhangra**: Punjabi folkemusikk + vestlig elektronika
- **Nordic folk-pop**: Norsk folkemusikk + moderne produksjon (Wardruna, Aurora)

Slike fusjoner skaper nye sjangre og bygger broer mellom kulturer.`,
    },
    {
      id: 'musikk-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er polyrytmikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med polyrytmikk?',
            solution: 'Flere ulike rytmer som spilles samtidig',
            multipleChoiceOptions: ['Flere ulike rytmer som spilles samtidig', 'En rytme som gjentas', 'Musikk uten rytme', 'Veldig rask rytme'],
          },
        ],
        solution: 'Polyrytmikk er nar flere ulike rytmemønstre spilles samtidig og skaper et komplekst, lagdelt rytmisk vev.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en raga i indisk musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en raga i indisk musikk?',
            solution: 'Et melodisk system med regler for tonebruk',
            multipleChoiceOptions: ['Et melodisk system med regler for tonebruk', 'En type tromme', 'En dans', 'Et instrument'],
          },
        ],
        solution: 'En raga er et melodisk rammeverk i indisk musikk med spesifikke toner og regler for hvordan de kan brukes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er særegent med hardingfela?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør hardingfela spesiell sammenlignet med vanlig fiolin?',
            solution: 'Den har understrenger som gir resonans',
            multipleChoiceOptions: ['Den har understrenger som gir resonans', 'Den er mye større', 'Den har bare to strenger', 'Den spilles med pinner'],
          },
        ],
        solution: 'Hardingfela har 4-5 understrenger som klinger med nar man spiller, noe som gir den karakteristiske, rike klangen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilket kontinent har musikktradisjoner som har pavirket jazz, blues og hip-hop sterkt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken verdensdel har pavirket jazz, blues og hip-hop mest?',
            solution: 'Afrika',
            multipleChoiceOptions: ['Afrika', 'Europa', 'Asia', 'Australia'],
          },
        ],
        solution: 'Afrikansk musikk, særlig rytmikk og call-and-response, har vært grunnleggende for utviklingen av afroamerikanske sjangre som jazz, blues og hip-hop.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lytt til et musikkstykke fra en kultur du ikke kjenner godt. Beskriv hva du hører (instrumenter, rytme, stemning).',
        solution: 'Eksempel pa analyse: "Jeg lyttet til gamelan-musikk fra Indonesia. Jeg hørte metalliske klanger fra gongs og xylofon-lignende instrumenter. Rytmen var syklisk og repeterende. Stemningen var meditativ og hypnotisk."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Finn en artist som blander tradisjonell musikk med moderne elementer. Beskriv hvordan de kombinerer det gamle og det nye.',
        solution: 'Eksempel: Wardruna kombinerer norrøne instrumenter som lur og bukkehorn med moderne studioproduksjon. De bruker gamle norrøne tekster og tradisjoner, men presenterer det i et format som appellerer til moderne lyttere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Musikk og samfunn
// ============================================================================

export const CHAPTER_MUSIKK_10_6: TextbookChapter = {
  id: 'musikk-10-6',
  courseId: 'musikk-10',
  chapterNumber: '6',
  title: 'Musikk og samfunn',
  description: 'Forsta hvordan musikk pavirker og pavirkes av samfunnet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere over musikkens rolle i samfunnet og i eget liv',
  ],
  content: [
    {
      id: 'musikk-10-6-intro',
      type: 'text',
      content: `Musikk er mer enn underholdning - den speiler samfunnet, skaper tilhørighet, formidler budskap og kan til og med forandre verden. Gjennom historien har musikk vært et kraftfullt verktøy for sosial endring.`,
    },
    {
      id: 'musikk-10-6-text-1',
      type: 'text',
      content: `**Musikk som identitetsmarkør**

Musikk former hvem vi er og hvem vi identifiserer oss med:

- **Personlig identitet**: Musikksmak sier noe om hvem vi er
- **Gruppetilhørighet**: Sjangre samler mennesker (metalheads, hip-hop fans)
- **Nasjonal identitet**: Nasjonalsanger, folkemusikk
- **Generasjonsidentitet**: Musikken til en generasjon definerer den

I ungdomsarene er musikk spesielt viktig for identitetsdannelse.`,
    },
    {
      id: 'musikk-10-6-text-2',
      type: 'text',
      content: `**Protestmusikk**

Musikk har alltid vært brukt til a uttrykke motstand:

- **1960-tallet**: Bob Dylan, Joan Baez (borgerrettigheter, Vietnam)
- **Punk**: Sex Pistols, The Clash (anti-establishment)
- **Hip-hop**: Public Enemy, Kendrick Lamar (rasisme, ulikhet)
- **Norge**: Alf Prøysen, Age Aleksandersen (sosiale forhold)

"We Shall Overcome" og "Imagine" er blant historiens mest kjente protestsanger.`,
    },
    {
      id: 'musikk-10-6-text-3',
      type: 'text',
      content: `**Musikkindustrien**

Moderne musikkbransje er en milliard-industri:

**Inntektskilder for artister**:
- Strømming (Spotify, Apple Music)
- Konserter og festivaler
- Merchandise
- Synkronisering (musikk i film/TV/reklame)
- Rettigheter (TONO i Norge)

**Utfordringer**:
- Lav betaling fra strømmetjenester
- Maktkonsentrasjon hos store selskaper
- Algoritmer styrer hva vi hører`,
    },
    {
      id: 'musikk-10-6-text-4',
      type: 'text',
      content: `**Musikk og helse**

Forskning viser at musikk pavirker oss fysisk og psykisk:

- **Stress**: Rolig musikk senker kortisol og blodtrykk
- **Humør**: Musikk kan løfte eller forsterke følelser
- **Hukommelse**: Demenspasienter kan huske musikk
- **Trening**: Tempoet i musikk pavirker ytelse
- **Sosial tilknytning**: Sang i fellesskap styrker band

Musikkterapi brukes aktivt i helsevesenet.`,
    },
    {
      id: 'musikk-10-6-text-5',
      type: 'text',
      content: `**Opphavsrett og musikkjuridikk**

Som musiker har du rettigheter:

- **Opphavsrett**: Du eier musikken du skaper automatisk
- **TONO**: Forvalter rettigheter i Norge, samler inn for avspilling
- **Sampling**: Krever tillatelse hvis originalen er gjenkjennelig
- **Creative Commons**: Alternative lisenser for deling
- **Plagiering**: Kopiering uten tillatelse er ulovlig

Det er viktig a respektere andres verk og beskytte egne.`,
    },
    {
      id: 'musikk-10-6-example-1',
      type: 'example',
      title: 'Musikk som endret verden',
      content: `Noen sanger som gjorde en forskjell:

- "Strange Fruit" (Billie Holiday): Kraftfull protest mot lynsjing i USA
- "Blowin' in the Wind" (Bob Dylan): Ble en hymne for borgerrettighetsbevegelsen
- "Sunday Bloody Sunday" (U2): Om konflikten i Nord-Irland
- "Alright" (Kendrick Lamar): Ble brukt i Black Lives Matter-protester

Musikk kan gi stemme til de stemmeløse og samle folk rundt en sak.`,
    },
    {
      id: 'musikk-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor er musikk viktig for identitet, særlig i ungdomsarene?',
        solution: 'Musikk hjelper oss a uttrykke hvem vi er, finne tilhørighet i grupper, og skille oss ut fra foreldre/andre generasjoner. I ungdomsarene, nar identiteten formes, blir musikk særlig viktig for selvforstaelse og sosial tilhørighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel pa en protestsang og forklar hva den protesterer mot.',
        solution: 'Eksempel: "Imagine" av John Lennon protesterer mot krig, religion og nasjonalisme ved a be lytteren forestille seg en verden uten disse skillene. Sangen har blitt en fredsanthem verden over.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er TONO, og hva gjør de?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er TONOs hovedoppgave?',
            solution: 'Forvalte opphavsrettigheter og samle inn penger for musikere',
            multipleChoiceOptions: ['Forvalte opphavsrettigheter og samle inn penger for musikere', 'Lære folk a spille gitar', 'Selge konsertbilletter', 'Produsere musikk'],
          },
        ],
        solution: 'TONO er en organisasjon som forvalter opphavsrettigheter for musikkskapere i Norge. De samler inn vederlag nar musikk spilles offentlig og fordeler dette til rettighetshaverne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan tjener artister penger i dag?',
        solution: 'Artister tjener penger gjennom: 1) Strømming (ofte lav betaling), 2) Konserter og festivaler (ofte hovedinntekt), 3) Merchandise (t-skjorter, plakater), 4) Synkronisering i film/TV/reklame, 5) Rettigheter via TONO.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan musikk pavirke helse og velvære?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn minst to mater musikk kan pavirke helsen pa.',
            solution: 'Musikk kan senke stress/blodtrykk, forbedre humør, hjelpe hukommelse, øke treningsytelse',
          },
        ],
        solution: 'Musikk kan senke stress og blodtrykk, pavirke humør positivt eller negativt, hjelpe demenspasienter huske, øke treningsytelse, og styrke sosiale band. Dette brukes aktivt i musikkterapi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over hvilken rolle musikk spiller i ditt eget liv. Nar lytter du til musikk, og hvordan pavirker den deg?',
        solution: 'Personlig refleksjon. Eksempel: "Jeg lytter til musikk nar jeg gjør lekser, trener og slapper av. Rolig musikk hjelper meg konsentrere meg, mens energisk musikk motiverer meg til trening. Musikk kan ogsa trøste meg nar jeg er lei meg."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Scenisk framføring
// ============================================================================

export const CHAPTER_MUSIKK_10_7: TextbookChapter = {
  id: 'musikk-10-7',
  courseId: 'musikk-10',
  chapterNumber: '7',
  title: 'Scenisk framføring',
  description: 'Lær om opptreden, sceneteknikk og publikumskontakt.',
  estimatedMinutes: 60,
  competenceGoals: [
    'formidle og framføre musikk for publikum',
  ],
  content: [
    {
      id: 'musikk-10-7-intro',
      type: 'text',
      content: `En scenisk framføring er mer enn bare a spille eller synge riktige noter - det handler om a formidle musikken til publikum og skape en opplevelse. God sceneteknikk kan læres!`,
    },
    {
      id: 'musikk-10-7-def-1',
      type: 'definition',
      title: 'Scenetilstedeværelse',
      content: `Scenetilstedeværelse er evnen til a fange og holde publikums oppmerksomhet gjennom kroppssprak, blikk, bevegelse og utstraling. Det handler om a være "til stede" i øyeblikket.`,
    },
    {
      id: 'musikk-10-7-text-1',
      type: 'text',
      content: `**Forberedelse til opptreden**

God forberedelse gir trygghet:

1. **Øving**: Kunne stoffet sa godt at du kan fokusere pa formidling
2. **Generalprøve**: Øv pa scenen hvis mulig
3. **Sjekkliste**: Instrumenter, kabler, noter, klær
4. **Lydprøve**: Test utstyr og monitorer
5. **Mental forberedelse**: Visualisering, pusteøvelser

Jo bedre forberedt du er, jo mer kan du slappe av pa scenen.`,
    },
    {
      id: 'musikk-10-7-text-2',
      type: 'text',
      content: `**Kroppssprak og kommunikasjon**

Pa scenen kommuniserer du med hele kroppen:

- **Holdning**: Sta rett og apent, ikke krumbøyd
- **Blikk**: Se pa publikum, ikke bare i gulvet
- **Bevegelse**: Beveg deg naturlig, ikke stiv
- **Ansiktsuttrykk**: La følelsene synes
- **Hender**: Unnga nervøse bevegelser

**Tips**: Finn noen vennlige fjes i publikum a fokusere pa.`,
    },
    {
      id: 'musikk-10-7-text-3',
      type: 'text',
      content: `**Handtering av sceneskrekk**

De fleste opplever nervøsitet, men det kan mestres:

**Fysiske teknikker**:
- Dyp pusting (inn gjennom nesen, ut gjennom munnen)
- Strekke og løse opp muskelspenninger
- Bevege seg for a løse opp stivhet

**Mentale teknikker**:
- Fokuser pa musikken, ikke pa deg selv
- Tenk at nervøsiteten er energi du kan bruke
- Visualiser en vellykket opptreden
- Husk: Publikum heier pa deg!`,
    },
    {
      id: 'musikk-10-7-text-4',
      type: 'text',
      content: `**Samspill pa scenen**

Nar du opptrer med andre:

- **Kommuniser**: Bruk blikk og nikk for a signalisere
- **Lytt**: Tilpass deg de andre
- **Støtt**: Gi plass nar andre har soloer
- **Delt oppmerksomhet**: Ikke overskygge andre
- **Felles energi**: Bygg opp og ned sammen

Et band som fungerer pa scenen kommuniserer konstant, ofte uten ord.`,
    },
    {
      id: 'musikk-10-7-text-5',
      type: 'text',
      content: `**Teknisk oppsett**

Grunnleggende sceneteknisk kunnskap:

- **Mikrofon**: Hold riktig avstand, unnga feedback
- **Monitorer**: Lyd tilbake til deg selv pa scenen
- **PA-anlegg**: Hovedlyden ut til publikum
- **Lysdesign**: Understreker stemning og fokus
- **Scenografi**: Kulisser og rekvisitter

Vær forberedt pa tekniske problemer - de skjer!`,
    },
    {
      id: 'musikk-10-7-tip-1',
      type: 'tip',
      title: 'Hvis noe gar galt',
      content: `Feil skjer selv for profesjonelle:
- Ta det med ro, de fleste merker ikke feil
- Fortsett uansett, ikke stopp opp
- Smil om det blir synlig feil - det menneskeliggjør deg
- Husk at publikum vil at du skal lykkes!`,
    },
    {
      id: 'musikk-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med scenetilstedeværelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva innebærer god scenetilstedeværelse?',
            solution: 'Evnen til a fange publikums oppmerksomhet gjennom kroppssprak og utstraling',
            multipleChoiceOptions: ['Evnen til a fange publikums oppmerksomhet gjennom kroppssprak og utstraling', 'A sta stille pa scenen', 'A se ned i gulvet', 'A snakke mest mulig'],
          },
        ],
        solution: 'Scenetilstedeværelse er evnen til a være "til stede" pa scenen og kommunisere med publikum gjennom blikk, kroppssprak og utstraling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre ting du kan gjøre for a handtere sceneskrekk.',
        solution: 'Tre teknikker: 1) Dyp pusting for a roe nervene, 2) Fokusere pa musikken fremfor pa seg selv, 3) Visualisere en vellykket opptreden. Andre: strekkeøvelser, tenke at nervøsitet er energi, huske at publikum heier pa deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er monitorer pa en scene, og hvorfor er de viktige?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonen til monitorer pa en scene?',
            solution: 'Gi lyd tilbake til utøverne sa de hører seg selv',
            multipleChoiceOptions: ['Gi lyd tilbake til utøverne sa de hører seg selv', 'Vise bilder til publikum', 'Kontrollere lyset', 'Spille inn konserten'],
          },
        ],
        solution: 'Monitorer er høyttalere som peker mot musikerne pa scenen, slik at de kan høre seg selv og hverandre. Dette er viktig for a holde takt og synge rent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kommuniserer bandmedlemmer med hverandre pa scenen?',
        solution: 'Bandmedlemmer kommuniserer gjennom: blikk (for a signalisere skifte), nikk (for a bekrefte), kroppssprak (vise nar solo kommer), og lytting (tilpasse seg dynamikk og tempo).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør du gjøre hvis noe gar galt under en opptreden?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det viktigste a gjøre hvis du gjør en feil pa scenen?',
            solution: 'Fortsette uten a stoppe opp',
            multipleChoiceOptions: ['Fortsette uten a stoppe opp', 'Stoppe og si unnskyld', 'Ga av scenen', 'Begynne helt pa nytt'],
          },
        ],
        solution: 'Det viktigste er a fortsette uten a stoppe opp. De fleste feil gar publikum ikke en gang a merke. Ta det med ro, smil hvis feilen er synlig, og husk at publikum heier pa deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en kort opptreden (2-3 sanger). Beskriv forberedelsene, sceneoppsett og hvordan du vil kommunisere med publikum.',
        solution: 'Eksempel: Repertoar: Tre sanger i økende energi. Forberedelse: Øve daglig i en uke, generalprøve dagen før. Oppsett: Mikrofon pa stativ, gitar med forsterker, enkel belysning. Kommunikasjon: Presenter sangene kort, søk blikkontakt, takk publikum etter hver sang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Musikkproduksjon
// ============================================================================

export const CHAPTER_MUSIKK_10_8: TextbookChapter = {
  id: 'musikk-10-8',
  courseId: 'musikk-10',
  chapterNumber: '8',
  title: 'Musikkproduksjon',
  description: 'Fordyp deg i moderne musikkproduksjon og lydteknikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke digitale verktøy til a skape, øve inn og formidle musikk',
  ],
  content: [
    {
      id: 'musikk-10-8-intro',
      type: 'text',
      content: `Musikkproduksjon er kunstformen a skape ferdig musikk fra en ide. Det innebærer kunnskap om lyd, teknologi og estetikk. I dette kapittelet gar vi dypere inn i produksjonsprosessen.`,
    },
    {
      id: 'musikk-10-8-def-1',
      type: 'definition',
      title: 'Miksing',
      content: `Miksing er prosessen der alle sporene i en produksjon balanseres i volum, panorering og frekvenser. Malet er at alle elementer høres klart og fungerer sammen som en helhet.`,
    },
    {
      id: 'musikk-10-8-text-1',
      type: 'text',
      content: `**Innspillingsteknikk**

God innspilling er grunnlaget for god produksjon:

**Mikrofonteknikk**:
- **Dynamisk mikrofon**: Robust, god for høye lydnivaer (Shure SM58)
- **Kondensatormikrofon**: Sensitiv, detaljert lyd (vokal i studio)
- **Nærhet**: Nærmere = mer bass (proximity effect)
- **Romklang**: Avstand fra vegger pavirker lyd

**Signal flow**: Mikrofon -> Forforsterker -> Lydkort -> DAW`,
    },
    {
      id: 'musikk-10-8-text-2',
      type: 'text',
      content: `**EQ (Equalization)**

EQ lar deg forme lyden ved a justere frekvenser:

| Frekvensomrade | Beskrivelse | Effekt av boost |
|----------------|-------------|-----------------|
| 20-200 Hz | Bass | Fylde, rumling |
| 200-500 Hz | Lav mellomtone | Varme, mudder |
| 500 Hz-2 kHz | Mellomtone | Fylde, nasal |
| 2-4 kHz | Øvre mellomtone | Klarhet, hardhet |
| 4-8 kHz | Tilstedeværelse | Skarphet, sibilans |
| 8-20 kHz | Diskant | Luft, sus |

**Tips**: Kutt heller enn a booste - det gir renere lyd.`,
    },
    {
      id: 'musikk-10-8-text-3',
      type: 'text',
      content: `**Kompressor i detalj**

Kompressor jevner ut dynamikken:

**Parametere**:
- **Threshold**: Nivaet der kompresjonen starter
- **Ratio**: Hvor mye som komprimeres (f.eks. 4:1)
- **Attack**: Hvor raskt den reagerer
- **Release**: Hvor raskt den slipper
- **Makeup gain**: Kompenserer for tap i volum

**Bruksomrader**: Vokal (jevne ut), trommer (punch), bass (konsistent).`,
    },
    {
      id: 'musikk-10-8-text-4',
      type: 'text',
      content: `**Romeffekter**

Reverb og delay plasserer lyden i et rom:

**Reverb-typer**:
- **Hall**: Stor konsertsal
- **Room**: Lite rom
- **Plate**: Metallisk, klassisk
- **Chamber**: Mellomstort rom

**Delay-typer**:
- **Slapback**: Kort, rockabilly-lyd
- **Ping-pong**: Hopper mellom høyre og venstre
- **Tape delay**: Varm, analog karakter

**Tips**: Bruk effekter pa aux-spor for bedre kontroll og CPU-sparing.`,
    },
    {
      id: 'musikk-10-8-text-5',
      type: 'text',
      content: `**Mastering**

Mastering er siste finpuss før utgivelse:

**Mal**:
- Optimal lydniva for plattformene
- Konsistent lyd mellom sanger (album)
- Sikre at miksen fungerer pa alle systemer

**Vanlige verktøy**:
- EQ (subtile justeringer)
- Kompressor/limiter (kontroll av topper)
- Stereoforbedring
- Loudness metering

**LUFS**: Maleenhet for opplevd lydstyrke (-14 LUFS er vanlig for strømming).`,
    },
    {
      id: 'musikk-10-8-tip-1',
      type: 'tip',
      title: 'Lyttefatigue',
      content: `Ørene blir trette etter lang tid med produksjon. Ta pauser! Hør pa referansespor (profesjonelle mikser) for a kalibrere ørene. Miks pa moderat volum - det sparer hørselen og gir bedre beslutninger.`,
    },
    {
      id: 'musikk-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom dynamisk mikrofon og kondensatormikrofon?',
        solution: 'Dynamiske mikrofoner er robuste og handterer høye lydnivaer godt, mens kondensatormikrofoner er mer sensitive og fanger flere detaljer. Dynamiske brukes ofte live og pa gitarforsterkere, kondensator brukes ofte for vokal i studio.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer hvis du booter bassfrekvensene (20-200 Hz) for mye?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kan skje med miksen hvis du booter for mye bass?',
            solution: 'Miksen blir uklar og mudret',
            multipleChoiceOptions: ['Miksen blir uklar og mudret', 'Miksen blir skarpere', 'Ingenting', 'Vokalen blir tydeligere'],
          },
        ],
        solution: 'For mye bass gjør miksen uklar og mudret. Det kan ogsa forarsakke problemer pa sma høyttalere og i rom med darlig akustikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva threshold og ratio gjør pa en kompressor.',
        solution: 'Threshold er nivaet der kompresjonen starter - lyd under threshold pavirkes ikke. Ratio bestemmer hvor mye lyden komprimeres, f.eks. 4:1 betyr at 4 dB over threshold blir til 1 dB.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom reverb og delay?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hovedforskjellen mellom reverb og delay?',
            solution: 'Reverb simulerer rom, delay gir distinkte ekko',
            multipleChoiceOptions: ['Reverb simulerer rom, delay gir distinkte ekko', 'De er det samme', 'Delay er sterkere', 'Reverb brukes bare pa trommer'],
          },
        ],
        solution: 'Reverb simulerer lyden av et rom med mange sma refleksjoner, mens delay gir tydelige, separate gjentakelser av lyden (ekko).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er mastering, og hvorfor er det viktig?',
        solution: 'Mastering er siste finpuss av en ferdig miks for a optimalisere lydniva, sikre konsistens (pa album), og sørge for at musikken høres bra ut pa alle avspillingssystemer fra hodetelefoner til store anlegg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Apne et musikkprogram og eksperimenter med EQ pa et lydspor. Beskriv hva som skjer nar du kutter eller booster ulike frekvensomrader.',
        solution: 'Eksempel: "Nar jeg kuttet 200-500 Hz pa vokalen, ble den klarere og mindre mudret. Nar jeg bootet 2-4 kHz, ble den tydeligere i miksen. For mye boost i diskant (8-20 kHz) ga en skarp, slitsom lyd."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Musikk som karriere
// ============================================================================

export const CHAPTER_MUSIKK_10_9: TextbookChapter = {
  id: 'musikk-10-9',
  courseId: 'musikk-10',
  chapterNumber: '9',
  title: 'Musikk som karriere',
  description: 'Utforsk muligheter for utdanning og arbeid innen musikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og vurdere muligheter innen musikkfaglige utdanninger og yrker',
  ],
  content: [
    {
      id: 'musikk-10-9-intro',
      type: 'text',
      content: `Musikkbransjen tilbyr mange karrieremuligheter utover det a være utøvende artist. Fra teknikk til undervisning, fra management til terapi - mulighetene er mange for den som brenner for musikk.`,
    },
    {
      id: 'musikk-10-9-text-1',
      type: 'text',
      content: `**Utøvende musikere**

- **Soloartist**: Egen karriere med innspillinger og konserter
- **Bandmusiker**: Fast eller løst tilknyttet band
- **Studiomusiker**: Spiller inn for andre artister
- **Orkestermusiker**: Fast ansatt i orkester
- **Sessionmusiker**: Freelance for ulike prosjekter
- **DJ**: Spiller og mikser musikk live

Utøvende karrierer krever ofte kombinasjon av talent, hardt arbeid og noe flaks.`,
    },
    {
      id: 'musikk-10-9-text-2',
      type: 'text',
      content: `**Bak scenen**

Mange jobber skjer bak kulissene:

**Teknisk**:
- Lydtekniker (studio/live)
- Lystekniker
- Scenetekniker
- Musikkprodusent
- Miksetekniker
- Mastering-ingeniør

**Administrativt**:
- Manager (artist-representant)
- Bookingagent
- Promotør
- A&R (artist & repertoire, platebransje)
- Musikkjournalist
- Forlegger (noter og rettigheter)`,
    },
    {
      id: 'musikk-10-9-text-3',
      type: 'text',
      content: `**Undervisning og terapi**

Musikk brukes til læring og helse:

- **Musikklærer**: Grunnskole, videregaende, kulturskole
- **Instrumentallærer**: Privat eller i kulturskole
- **Høgskolelektor**: Underviser pa høyere niva
- **Musikkterapeut**: Bruker musikk i behandling
- **Dirigent/kordirigent**: Leder orkestre og kor

Disse karrierene gir stabil inntekt og meningsfylte jobber.`,
    },
    {
      id: 'musikk-10-9-text-4',
      type: 'text',
      content: `**Utdanningsveier**

**Videregaende**:
- Musikk, dans og drama (MDD)
- Studiespesialisering med musikk

**Høyere utdanning**:
- Norges musikkhøgskole
- Universiteter (UiO, UiB, NTNU, UiT, UiA)
- Kunsthøgskoler
- Folkehøgskoler (musikklinjer)
- Private skoler (NISS, Westerdals)

**Utdanninger**: Utøvende, musikkproduksjon, lydteknikk, musikkvitenskap, musikkterapi, musikkpedagogikk`,
    },
    {
      id: 'musikk-10-9-text-5',
      type: 'text',
      content: `**Entreprenørskap i musikk**

Mange musikere skaper sin egen karriere:

- **Eget plateselskap**: Gi ut egen og andres musikk
- **Produksjonsstudio**: Tilby innspillingstjenester
- **Musikkskole**: Start egen undervisningsvirksomhet
- **Konsertarrangør**: Arrangere konserter og festivaler
- **Utstyrssalg**: Instrumenter og teknisk utstyr

**Tips**: Bygg nettverk, vær synlig pa sosiale medier, ha flere ben a sta pa.`,
    },
    {
      id: 'musikk-10-9-tip-1',
      type: 'tip',
      title: 'Portefølje-karriere',
      content: `De fleste musikere kombinerer flere inntektskilder: undervisning, studio-arbeid, konserter, streaming, komposisjon. Denne "portefølje-karrieren" gir stabilitet og variasjon.`,
    },
    {
      id: 'musikk-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre forskjellige yrker innen musikkbransjen som ikke innebærer a sta pa scenen.',
        solution: 'Eksempler: Lydtekniker, musikkprodusent, manager, bookingagent, musikkterapeut, musikklærer, miksetekniker, A&R-representant, musikkjournalist, lystekniker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom en manager og en bookingagent?',
        solution: 'En manager representerer artisten i alle deler av karrieren (strategi, kontrakter, image), mens en bookingagent spesifikt jobber med a skaffe og forhandle konserter og arrangementer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke videregaende linjer kan man velge hvis man vil satse pa musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken studieretning er mest aktuell for musikkinteresserte?',
            solution: 'Musikk, dans og drama (MDD)',
            multipleChoiceOptions: ['Musikk, dans og drama (MDD)', 'Idrettsfag', 'Helse- og oppvekstfag', 'Elektrofag'],
          },
        ],
        solution: 'Musikk, dans og drama (MDD) er hovedvalget. Alternativt kan man ta studiespesialisering med musikk som valgfag, eller velge folkehøgskole med musikklinje etter ungdomsskolen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva innebærer en musikkterapeuts jobb?',
        solution: 'En musikkterapeut bruker musikk som verktøy i behandling og rehabilitering. De jobber med pasienter innen psykiatri, eldreomsorg, funksjonshemming, rusomsorg og andre felt der musikk kan bidra til bedre helse og livskvalitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva menes med en "portefølje-karriere" innen musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en portefølje-karriere?',
            solution: 'A kombinere flere inntektskilder innen musikk',
            multipleChoiceOptions: ['A kombinere flere inntektskilder innen musikk', 'A ha en fast jobb', 'A være student', 'A jobbe gratis'],
          },
        ],
        solution: 'En portefølje-karriere betyr at man kombinerer flere inntektskilder, f.eks. undervisning, studio-arbeid, konserter og streaming. Dette gir økonomisk stabilitet og variasjon i arbeidshverdagen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvis du skulle jobbe med musikk i fremtiden, hvilket yrke ville du valgt? Forklar hvorfor og hvilken utdanning du ville trengt.',
        solution: 'Eksempel: "Jeg ville blitt musikkprodusent fordi jeg liker a skape musikk i studio og eksperimentere med lyd. Jeg ville tatt lydteknikk-utdanning eller studert musikkproduksjon ved Norges Musikkhøgskole eller en privatskole som NISS."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Eksamensforberedelse
// ============================================================================

export const CHAPTER_MUSIKK_10_10: TextbookChapter = {
  id: 'musikk-10-10',
  courseId: 'musikk-10',
  chapterNumber: '10',
  title: 'Eksamensforberedelse',
  description: 'Forbered deg til muntlig eksamen i musikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'uttrykke og formidle musikkfaglig kunnskap og forstaelse',
  ],
  content: [
    {
      id: 'musikk-10-10-intro',
      type: 'text',
      content: `Muntlig eksamen i musikk tester bade teoretisk kunnskap og praktiske ferdigheter. God forberedelse gir trygghet og bedre resultater. Dette kapittelet hjelper deg a forberede deg effektivt.`,
    },
    {
      id: 'musikk-10-10-text-1',
      type: 'text',
      content: `**Eksamensformen**

Muntlig eksamen i musikk bestar vanligvis av:

1. **Forberedelsestid**: Ca. 30 minutter med oppgitt tema
2. **Presentasjon**: Du legger frem din forberedte del (ca. 10 min)
3. **Samtale**: Eksaminator stiller oppfølgingsspørsmal (ca. 20 min)

Du kan bli bedt om a:
- Fremføre et musikkstykke
- Analysere et lydeksempel
- Reflektere over et musikkfaglig tema
- Demonstrere praktiske ferdigheter`,
    },
    {
      id: 'musikk-10-10-text-2',
      type: 'text',
      content: `**Temaomrader a beherske**

Repeter disse hovedomradene:

**Teori**:
- Noter, skalaer, akkorder
- Taktarter og rytme
- Musikkens grunnelementer

**Historie**:
- Epoker fra middelalder til moderne tid
- Viktige komponister
- Sjangre i populærmusikken

**Praktisk**:
- Samspill
- Komponering
- Bruk av digitale verktøy`,
    },
    {
      id: 'musikk-10-10-text-3',
      type: 'text',
      content: `**Analysemetode**

Nar du analyserer et musikkstykke:

1. **Første inntrykk**: Stemning, sjanger, tempo
2. **Melodi**: Bevegelse, omfang, særtrekk
3. **Harmoni**: Akkorder, dur/moll, spenning
4. **Rytme**: Taktart, særpreg, groove
5. **Klang**: Instrumenter, produksjon, dynamikk
6. **Form**: Struktur, deler, gjentakelser
7. **Kontekst**: Historisk, kulturell, sosial sammenheng

Bruk musikkfaglige begreper i analysen!`,
    },
    {
      id: 'musikk-10-10-text-4',
      type: 'text',
      content: `**Tips for presentasjonen**

- **Struktur**: Ha en tydelig innledning, hoveddel og avslutning
- **Begreper**: Bruk musikkfaglige ord korrekt
- **Eksempler**: Underbygg pastander med konkrete eksempler
- **Lydeksempler**: Ha klare klipp klare hvis aktuelt
- **Engasjement**: Vis at du brenner for faget
- **Tid**: Øv pa a holde tiden

**Ikke**: Les opp fra manus, snakk for fort, vær for generell.`,
    },
    {
      id: 'musikk-10-10-text-5',
      type: 'text',
      content: `**Typiske spørsmal**

Vær forberedt pa spørsmal som:

- "Hvordan pavirker musikk samfunnet?"
- "Sammenlign to musikkstykker fra ulike epoker"
- "Forklar hvordan du komponerte dette stykket"
- "Hvilke instrumenter hører du i dette klippet?"
- "Hvordan har teknologi endret musikkbransjen?"
- "Hva kjennetegner jazz/rock/klassisk musikk?"

Øv pa a svare utfyllende, men konsist.`,
    },
    {
      id: 'musikk-10-10-tip-1',
      type: 'tip',
      title: 'Forberedelsestiden',
      content: `Bruk de 30 minuttene effektivt:
- Les oppgaven nøye (5 min)
- Brainstorm stikkord (5 min)
- Lag struktur/disposisjon (10 min)
- Forbered eksempler (5 min)
- Gjennomga og pust rolig (5 min)`,
    },
    {
      id: 'musikk-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva bør du se pa nar du analyserer et musikkstykke til eksamen?',
        solution: 'Ved analyse bør du vurdere: melodi (bevegelse, omfang), harmoni (akkorder, dur/moll), rytme (taktart, særpreg), klang (instrumenter, dynamikk), form (struktur, deler), og kontekst (historisk/kulturell sammenheng).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Øv deg pa a forklare forskjellen mellom barokk og romantikk til noen som ikke kan noe om musikk.',
        solution: 'Barokken (1600-1750): Ornamentert, komplisert, ofte religiøs, med cembalo og orgel. Romantikken (1820-1900): Følelsesladet, dramatisk, store orkestre, nasjonale særtrekk. Barokk er "pyntet", romantikk er "følelsesfullt".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en sang du kjenner godt og lag en kort analyse du kunne presentert pa eksamen.',
        solution: 'Eksempel for "Bohemian Rhapsody" av Queen: Form: Intro - ballade - opera - rock - outro. Harmoni: Komplekse modulasjoner. Klang: Piano, kor, heavy gitar. Særtrekk: Sjangerblandingen og den dramatiske operadelen. Kontekst: 1975, britisk rock, Freddie Mercurys kunstneriske visjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en liste over 10 musikkfaglige begreper du bør kunne bruke pa eksamen, med korte forklaringer.',
        solution: 'Eksempler: 1) Akkord - flere toner samtidig. 2) Taktart - organisering av slag. 3) Melodi - rekke av enkelttoner. 4) Harmoni - samklang. 5) Rytme - tidsmønster. 6) Dynamikk - styrkegrad. 7) Tempo - hastighet. 8) Klang - lydkarakter. 9) Form - struktur. 10) Sjanger - musikkategori.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et tankekart over temaet "Musikk og samfunn" som du kunne brukt pa eksamen.',
        solution: 'Sentrale grener: 1) Identitet (personlig, gruppe, nasjonal). 2) Protestmusikk (historiske eksempler). 3) Musikkbransjen (strømming, konserter). 4) Kulturmøter (verdensmusikk, fusjon). 5) Helse (terapi, velvære). 6) Teknologi (produksjon, distribusjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Øv deg: Du far 30 minutter til a forberede en presentasjon om "Hvordan har teknologi endret musikken?" Lag en disposisjon.',
        solution: 'Eksempel disposisjon: 1) Innledning: Teknologi har revolusjonert musikk. 2) Innspilling: Fra live til studio. 3) Produksjon: DAW gjør alle til produsenter. 4) Distribusjon: Fra vinyl til strømming. 5) Lytting: Personlige spillelister, algoritmer. 6) Konklusjon: Bade muligheter og utfordringer. Lydeksempler: Gammelt opptak vs. moderne produksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'musikk-10-10-ex-7',
        number: '7',
        type: 'classic',
        task: 'Reflekter over din egen musikalske utvikling gjennom ungdomsskolen. Hva har du lært, og hvordan har forholdet ditt til musikk endret seg?',
        solution: 'Personlig refleksjon. Eksempel: "I løpet av ungdomsskolen har jeg lært a spille gitar, forsta grunnleggende musikkteori, og analysere musikk. Jeg har oppdaget nye sjangre og begynt a lage egen musikk. Forholdet mitt til musikk har gatt fra bare a lytte til a aktivt delta og skape."',
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

export const MUSIKK_10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MUSIKK_10_1,
  CHAPTER_MUSIKK_10_2,
  CHAPTER_MUSIKK_10_3,
  CHAPTER_MUSIKK_10_4,
  CHAPTER_MUSIKK_10_5,
  CHAPTER_MUSIKK_10_6,
  CHAPTER_MUSIKK_10_7,
  CHAPTER_MUSIKK_10_8,
  CHAPTER_MUSIKK_10_9,
  CHAPTER_MUSIKK_10_10,
];

/**
 * Musikk 8. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for musikk på 8. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Musikkteori
// ============================================================================

export const CHAPTER_MUSIKK_8_1_1: TextbookChapter = {
  id: 'musikk-8-1-1',
  courseId: 'musikk-8',
  chapterNumber: '1.1',
  title: 'Noter og notesystemet',
  description: 'Lær om noter, noteverdier og hvordan musikk skrives ned.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og skrive noter i G-nøkkel',
  ],
  content: [
    {
      id: 'musikk-8-1-1-intro',
      type: 'text',
      content: `Noter er musikkens skriftspråk. Ved å lære å lese noter kan du spille musikk andre har skrevet, og skrive ned din egen musikk slik at andre kan spille den.`,
    },
    {
      id: 'musikk-8-1-1-def-1',
      type: 'definition',
      title: 'Notesystemet',
      content: `Notesystemet består av fem linjer og fire mellomrom. Noter plasseres på linjene eller i mellomrommene for å vise hvilken tone som skal spilles.`,
    },
    {
      id: 'musikk-8-1-1-text-1',
      type: 'text',
      content: `**G-nøkkelen (diskantøkkelen)**

G-nøkkelen er den vanligste nøkkelen. Den viser at linjen den krøller seg rundt er tonen G.

**Tonene på linjene** (nedenfra og opp): E - G - H - D - F
**Tonene i mellomrommene**: F - A - C - E

Huskeregel for linjene: "En Gris Hoppet Der Fansen"
Huskeregel for mellomrommene: "FACE" (som det engelske ordet for ansikt)`,
    },
    {
      id: 'musikk-8-1-1-def-2',
      type: 'definition',
      title: 'Noteverdier',
      content: `Noteverdier viser hvor lenge en tone skal vare. Helnoter varer lengst, deretter halvnoter, fjerdedelsnoter, åttendedelsnoter osv.`,
    },
    {
      id: 'musikk-8-1-1-text-2',
      type: 'text',
      content: `**Noteverdier og pauser**

| Noteverdi | Slag (i 4/4-takt) |
|-----------|-------------------|
| Helnote | 4 slag |
| Halvnote | 2 slag |
| Fjerdedelsnote | 1 slag |
| Åttedelsnote | 1/2 slag |
| Sekstendedelsnote | 1/4 slag |

Til hver noteverdi finnes en tilsvarende pause som viser stillhet.`,
    },
    {
      id: 'musikk-8-1-1-tip-1',
      type: 'tip',
      title: 'Øvingstips',
      content: `Start med å øve på å lese noter i et rolig tempo. Bruk en app eller nettside for notelæring for å få rask tilbakemelding.`,
    },
    {
      id: 'musikk-8-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva viser G-nøkkelen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva viser G-nøkkelen i et notesystem?',
            solution: 'Hvilken linje som er tonen G',
            multipleChoiceOptions: ['Hvilken linje som er tonen G', 'Tempoet i musikken', 'Hvor høyt man skal spille', 'Hvilke instrumenter som spiller'],
          },
        ],
        solution: 'G-nøkkelen krøller seg rundt den linjen som representerer tonen G.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange slag varer en halvnote i 4/4-takt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange slag varer en halvnote i 4/4-takt?',
            solution: '2 slag',
            multipleChoiceOptions: ['2 slag', '1 slag', '4 slag', '1/2 slag'],
          },
        ],
        solution: 'En halvnote varer i 2 slag, altså halvparten av en helnote.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke toner ligger på linjene i G-nøkkel (nedenfra og opp)?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke toner ligger på linjene i G-nøkkel (nedenfra og opp)?',
            solution: 'E - G - H - D - F',
            multipleChoiceOptions: ['E - G - H - D - F', 'C - E - G - H - D', 'F - A - C - E - G', 'D - F - A - C - E'],
          },
        ],
        solution: 'Tonene på linjene i G-nøkkel er E-G-H-D-F. Huskeregelen er "En Gris Hoppet Der Fansen".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvis en fjerdedelsnote varer i 1 slag, hvor mange åttedelsnoter får plass i samme tid?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange åttedelsnoter får plass i én fjerdedelsnote?',
            solution: '2',
            multipleChoiceOptions: ['2', '1', '4', '8'],
          },
        ],
        solution: 'En åttedelsnote er halvparten av en fjerdedelsnote, så 2 åttedelsnoter = 1 fjerdedelsnote.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_8_1_2: TextbookChapter = {
  id: 'musikk-8-1-2',
  courseId: 'musikk-8',
  chapterNumber: '1.2',
  title: 'Rytme og taktarter',
  description: 'Lær om rytme, taktarter og hvordan musikk organiseres i tid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og eksperimentere med rytmer',
  ],
  content: [
    {
      id: 'musikk-8-1-2-intro',
      type: 'text',
      content: `Rytme er musikkens puls og bevegelse. Den organiserer musikken i tid og gir den driv og energi. Taktart forteller hvordan slagene er gruppert.`,
    },
    {
      id: 'musikk-8-1-2-def-1',
      type: 'definition',
      title: 'Taktart',
      content: `Taktart vises som to tall over hverandre i begynnelsen av et notestykke. Øverste tall viser antall slag per takt, nederste tall viser hvilken noteverdi som tilsvarer ett slag.`,
    },
    {
      id: 'musikk-8-1-2-text-1',
      type: 'text',
      content: `**Vanlige taktarter**

- **4/4-takt**: 4 slag per takt, mest vanlig i pop og rock
- **3/4-takt**: 3 slag per takt, vals-rytme
- **2/4-takt**: 2 slag per takt, marsjrytme
- **6/8-takt**: 6 slag per takt, ofte i folkemusikk

I 4/4-takt teller vi: 1-2-3-4, 1-2-3-4...
I 3/4-takt teller vi: 1-2-3, 1-2-3...`,
    },
    {
      id: 'musikk-8-1-2-text-2',
      type: 'text',
      content: `**Betoning**

Ikke alle slag i en takt er like sterke:

- **4/4-takt**: STERK-svak-halvsterk-svak
- **3/4-takt**: STERK-svak-svak

Første slag i takten (eneren) er alltid sterkest. Dette gir musikken sin karakteristiske følelse.`,
    },
    {
      id: 'musikk-8-1-2-def-2',
      type: 'definition',
      title: 'Synkope',
      content: `Synkope oppstår når tyngden flyttes fra de sterke slagene til de svake. Dette skaper spenning og driv i musikken.`,
    },
    {
      id: 'musikk-8-1-2-example-1',
      type: 'example',
      title: 'Rytmemønster i pop',
      content: `I pop-musikk er et vanlig trommemønster:
- Basstromme på slag 1 og 3
- Skarptromme på slag 2 og 4 (backbeat)
- Hi-hat på alle åttedelene

Dette mønsteret gir den karakteristiske "grooven" vi kjenner fra pop og rock.`,
    },
    {
      id: 'musikk-8-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange slag er det per takt i 3/4-takt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange slag er det per takt i 3/4-takt?',
            solution: '3 slag',
            multipleChoiceOptions: ['3 slag', '2 slag', '4 slag', '6 slag'],
          },
        ],
        solution: '3/4-takt har 3 slag per takt. Dette er typisk valsrytme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken taktart er mest vanlig i pop- og rockemusikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken taktart er mest vanlig i pop- og rockemusikk?',
            solution: '4/4-takt',
            multipleChoiceOptions: ['4/4-takt', '3/4-takt', '6/8-takt', '5/4-takt'],
          },
        ],
        solution: '4/4-takt er den desidert vanligste taktarten i pop- og rockemusikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er synkope?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er synkope i musikk?',
            solution: 'Når tyngden flyttes til svake slag',
            multipleChoiceOptions: ['Når tyngden flyttes til svake slag', 'Når musikken stopper', 'Når alle spiller samme tone', 'Når tempoet øker'],
          },
        ],
        solution: 'Synkope er når betoningen flyttes fra sterke til svake slag, noe som skaper driv og spenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'I 4/4-takt, hvilket slag er det "halvsterke" slaget?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket slag er det halvsterke slaget i 4/4-takt?',
            solution: 'Slag 3',
            multipleChoiceOptions: ['Slag 3', 'Slag 1', 'Slag 2', 'Slag 4'],
          },
        ],
        solution: 'I 4/4-takt er betoningsmønsteret: STERK (1) - svak (2) - halvsterk (3) - svak (4).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Musikkhistorie
// ============================================================================

export const CHAPTER_MUSIKK_8_2_1: TextbookChapter = {
  id: 'musikk-8-2-1',
  courseId: 'musikk-8',
  chapterNumber: '2.1',
  title: 'Klassisk musikk',
  description: 'Lær om den klassiske musikkens epoker fra barokk til romantikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over musikkens rolle i ulike historiske perioder',
  ],
  content: [
    {
      id: 'musikk-8-2-1-intro',
      type: 'text',
      content: `Den klassiske musikken har utviklet seg gjennom flere epoker, hver med sine kjennetegn og store komponister. Denne musikken danner grunnlaget for mye av musikken vi hører i dag.`,
    },
    {
      id: 'musikk-8-2-1-text-1',
      type: 'text',
      content: `**Barokken (ca. 1600-1750)**

Kjennetegn:
- Ornamentert og utsmykket stil
- Kontrapunkt (flere melodilinjer samtidig)
- Cembalo og orgel som viktige instrumenter
- Utviklingen av operaen

**Store komponister**: Johann Sebastian Bach, Georg Friedrich Händel, Antonio Vivaldi`,
    },
    {
      id: 'musikk-8-2-1-text-2',
      type: 'text',
      content: `**Wienerklassisismen (ca. 1750-1820)**

Kjennetegn:
- Enklere, klarere struktur
- Balanse og symmetri
- Symfoniorkesteret utvikles
- Sonateformen blir viktig

**Store komponister**: Joseph Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven (tidlig)`,
    },
    {
      id: 'musikk-8-2-1-text-3',
      type: 'text',
      content: `**Romantikken (ca. 1820-1900)**

Kjennetegn:
- Sterke følelser og dramatikk
- Større orkestre
- Nasjonalromantikk - bruk av folketoner
- Virtuose solister

**Store komponister**: Frédéric Chopin, Edvard Grieg, Pyotr Tjajkovskij, Johannes Brahms`,
    },
    {
      id: 'musikk-8-2-1-note-1',
      type: 'note',
      title: 'Edvard Grieg',
      content: `Edvard Grieg (1843-1907) er Norges mest kjente komponist. Han er kjent for Peer Gynt-suitene og Klaverkonsert i a-moll. Grieg brukte norske folketoner og var en sentral skikkelse i nasjonalromantikken.`,
    },
    {
      id: 'musikk-8-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvem er Norges mest kjente klassiske komponist?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er Norges mest kjente klassiske komponist?',
            solution: 'Edvard Grieg',
            multipleChoiceOptions: ['Edvard Grieg', 'Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven'],
          },
        ],
        solution: 'Edvard Grieg (1843-1907) er Norges mest kjente klassiske komponist, kjent for bl.a. Peer Gynt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken epoke kjennetegnes av sterke følelser og større orkestre?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken musikalsk epoke kjennetegnes av sterke følelser og større orkestre?',
            solution: 'Romantikken',
            multipleChoiceOptions: ['Romantikken', 'Barokken', 'Wienerklassisismen', 'Renessansen'],
          },
        ],
        solution: 'Romantikken (ca. 1820-1900) kjennetegnes av sterke følelser, dramatikk og større orkestre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken komponist er kjent for "De fire årstider"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken barokkomponist er kjent for "De fire årstider"?',
            solution: 'Vivaldi',
            multipleChoiceOptions: ['Vivaldi', 'Bach', 'Mozart', 'Grieg'],
          },
        ],
        solution: 'Antonio Vivaldi skrev "De fire årstider" (Le quattro stagioni), et av barokkens mest kjente verk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er kontrapunkt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kontrapunkt i musikk?',
            solution: 'Flere selvstendige melodilinjer samtidig',
            multipleChoiceOptions: ['Flere selvstendige melodilinjer samtidig', 'Et slag på trommene', 'En type fløyte', 'Slutten av et stykke'],
          },
        ],
        solution: 'Kontrapunkt er en komposisjonsteknikk der flere selvstendige melodilinjer klinger samtidig og skaper harmonier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_8_2_2: TextbookChapter = {
  id: 'musikk-8-2-2',
  courseId: 'musikk-8',
  chapterNumber: '2.2',
  title: 'Populærmusikkens historie',
  description: 'Lær om utviklingen av pop, rock og andre moderne sjangre.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over musikkens rolle i samfunnet',
  ],
  content: [
    {
      id: 'musikk-8-2-2-intro',
      type: 'text',
      content: `Populærmusikken slik vi kjenner den i dag har røtter tilbake til tidlig 1900-tall. Fra blues og jazz har det utviklet seg en rekke sjangre som preger musikkverdenen i dag.`,
    },
    {
      id: 'musikk-8-2-2-text-1',
      type: 'text',
      content: `**Blues og jazz (tidlig 1900-tall)**

Blues oppsto blant afroamerikanere i sørstatene i USA:
- 12-takters bluesskjema
- "Blue notes" - senket terts og septim
- Improvisasjon

Jazz utviklet seg fra blues:
- Swing-rytme
- Improvisasjon
- Komplekse harmonier`,
    },
    {
      id: 'musikk-8-2-2-text-2',
      type: 'text',
      content: `**Rock and roll (1950-tallet)**

Rock and roll kombinerte blues, country og gospel:
- Elektrisk gitar ble viktig
- Sterk backbeat
- Ungdomsopprør

**Pionerer**: Elvis Presley, Chuck Berry, Little Richard`,
    },
    {
      id: 'musikk-8-2-2-text-3',
      type: 'text',
      content: `**Moderne sjangre**

- **Pop** (1960-tallet→): Fengende melodier, kommersielt tilgjengelig
- **Rock** (1960-tallet→): Hardere gitarlyd, mange undersjangre
- **Hip-hop** (1970-tallet→): Rapping, sampling, DJ-kultur
- **Elektronisk musikk** (1980-tallet→): Synthesizere, programmerte beats
- **R&B** (1940-tallet→): Soul-inspirert, vokalfokusert`,
    },
    {
      id: 'musikk-8-2-2-example-1',
      type: 'example',
      title: 'The Beatles',
      content: `The Beatles (1960-1970) regnes som det mest innflytelsesrike bandet i populærmusikkens historie. De eksperimenterte med nye innspillingsteknikker, instrumenter og sjangre, og forandret popmusikken for alltid.`,
    },
    {
      id: 'musikk-8-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor oppsto blues?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor oppsto blues som musikksjanger?',
            solution: 'Sørstatene i USA',
            multipleChoiceOptions: ['Sørstatene i USA', 'England', 'Afrika', 'Norge'],
          },
        ],
        solution: 'Blues oppsto blant afroamerikanere i sørstatene i USA tidlig på 1900-tallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvem regnes som "The King of Rock and Roll"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem regnes som "The King of Rock and Roll"?',
            solution: 'Elvis Presley',
            multipleChoiceOptions: ['Elvis Presley', 'Chuck Berry', 'Michael Jackson', 'John Lennon'],
          },
        ],
        solution: 'Elvis Presley fikk tilnavnet "The King of Rock and Roll" for sin innflytelse på sjangeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner hip-hop?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner hip-hop som sjanger?',
            solution: 'Rapping, sampling og DJ-kultur',
            multipleChoiceOptions: ['Rapping, sampling og DJ-kultur', 'Klassiske orkesterinstrumenter', 'Akustisk gitar og fløyte', 'Bare instrumentalmusikk'],
          },
        ],
        solution: 'Hip-hop kjennetegnes av rapping (rytmisk tale), sampling av andre låter, og DJ-kultur med scratching og beats.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er "backbeat"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er backbeat i musikk?',
            solution: 'Skarptromme på slag 2 og 4',
            multipleChoiceOptions: ['Skarptromme på slag 2 og 4', 'Bass på slag 1 og 3', 'Gitarsolo', 'Når sangen spilles baklengs'],
          },
        ],
        solution: 'Backbeat er når skarptrommen spilles på slag 2 og 4 i 4/4-takt. Dette er karakteristisk for rock og pop.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Instrumenter
// ============================================================================

export const CHAPTER_MUSIKK_8_3_1: TextbookChapter = {
  id: 'musikk-8-3-1',
  courseId: 'musikk-8',
  chapterNumber: '3.1',
  title: 'Instrumentfamilier',
  description: 'Lær om de ulike instrumentgruppene og hvordan de lager lyd.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive ulike instrumenter og deres klang',
  ],
  content: [
    {
      id: 'musikk-8-3-1-intro',
      type: 'text',
      content: `Instrumenter deles inn i familier basert på hvordan de lager lyd. Hver familie har sin karakteristiske klang og rolle i musikken.`,
    },
    {
      id: 'musikk-8-3-1-text-1',
      type: 'text',
      content: `**Strengeinstrumenter**

Lyden oppstår når strenger vibrerer:

- **Stryke**: Fiolin, bratsj, cello, kontrabass
- **Knipse/slå**: Gitar, bass, harpe, banjo
- **Slå med hammer**: Piano (har også tangenter)

Lyden forsterkes av instrumentets kropp (resonanskasse).`,
    },
    {
      id: 'musikk-8-3-1-text-2',
      type: 'text',
      content: `**Blåseinstrumenter**

Lyden oppstår når luft vibrerer:

**Treblåsere** (opprinnelig laget av tre):
- Fløyte, klarinett, obo, fagott, saksofon

**Messingblåsere** (laget av metall):
- Trompet, trombone, valthorn, tuba`,
    },
    {
      id: 'musikk-8-3-1-text-3',
      type: 'text',
      content: `**Perkusjon (slaginstrumenter)**

Lyden oppstår når man slår på instrumentet:

- **Med bestemt tonehøyde**: Pauker, xylofon, marimba, klokkespill
- **Uten bestemt tonehøyde**: Trommer, cymbaler, triangel, tamburin

**Tangentinstrumenter**

Instrumenter med tangenter (noen regnes også til andre familier):
- Piano, orgel, cembalo, synthesizer`,
    },
    {
      id: 'musikk-8-3-1-def-1',
      type: 'definition',
      title: 'Resonanskasse',
      content: `Resonanskasse er den hule delen av et strengeinstrument som forsterker lyden. Formen og materialet påvirker klangen.`,
    },
    {
      id: 'musikk-8-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken instrumentfamilie tilhører fiolinen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken instrumentfamilie tilhører fiolinen?',
            solution: 'Strengeinstrumenter',
            multipleChoiceOptions: ['Strengeinstrumenter', 'Blåseinstrumenter', 'Perkusjon', 'Tangentinstrumenter'],
          },
        ],
        solution: 'Fiolinen er et strengeinstrument der man stryker buen over strengene for å lage lyd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor regnes saksofonen som et treblåseinstrument selv om den er laget av metall?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor regnes saksofonen som et treblåseinstrument?',
            solution: 'Fordi den har rørblad av tre/siv',
            multipleChoiceOptions: ['Fordi den har rørblad av tre/siv', 'Fordi den er billig', 'Fordi den er gammel', 'Fordi den er liten'],
          },
        ],
        solution: 'Saksofonen bruker et rørblad av siv (tidligere tre) for å lage lyd, akkurat som klarinetten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke instrumenter er messingblåsere?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av disse instrumentene er messingblåsere?',
            solution: 'Trompet og trombone',
            multipleChoiceOptions: ['Trompet og trombone', 'Fløyte og klarinett', 'Gitar og bass', 'Trommer og cymbal'],
          },
        ],
        solution: 'Trompet og trombone er messingblåsere, laget av metall og med munnstykke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen på pauker og vanlige trommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den viktigste forskjellen mellom pauker og vanlige trommer?',
            solution: 'Pauker kan stemmes til bestemte toner',
            multipleChoiceOptions: ['Pauker kan stemmes til bestemte toner', 'Pauker er mindre', 'Pauker brukes bare i jazz', 'Det er ingen forskjell'],
          },
        ],
        solution: 'Pauker kan stemmes til bestemte toner ved hjelp av en pedal, mens vanlige trommer ikke har bestemt tonehøyde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_8_3_2: TextbookChapter = {
  id: 'musikk-8-3-2',
  courseId: 'musikk-8',
  chapterNumber: '3.2',
  title: 'Bandbesetning',
  description: 'Lær om instrumentene i et band og deres roller.',
  estimatedMinutes: 45,
  competenceGoals: [
    'samspill med andre på ulike instrumenter',
  ],
  content: [
    {
      id: 'musikk-8-3-2-intro',
      type: 'text',
      content: `Et band består vanligvis av flere instrumenter som sammen skaper musikken. Hvert instrument har sin rolle og bidrar til helheten.`,
    },
    {
      id: 'musikk-8-3-2-text-1',
      type: 'text',
      content: `**Grunnbesetning i et rockeband**

- **Vokal**: Synger melodien og teksten
- **Elektrisk gitar**: Akkorder, riff og soloer
- **Bass**: Binder rytme og harmoni sammen
- **Trommer**: Holder takten og gir energi
- **Keyboard**: Akkorder, fylde, evt. soloer`,
    },
    {
      id: 'musikk-8-3-2-def-1',
      type: 'definition',
      title: 'Komp',
      content: `Komp er akkompagnementet som støtter melodien. Det inkluderer rytmeseksjonen (bass og trommer) og harmoniseksjonen (gitar, keyboard).`,
    },
    {
      id: 'musikk-8-3-2-text-2',
      type: 'text',
      content: `**Instrumentenes roller**

**Bass og trommer (rytmeseksjonen)**:
- Skaper "grooven" og drivet
- Holder bandet sammen rytmisk
- Fundamentet som alt annet bygger på

**Gitar og keyboard (harmoni)**:
- Spiller akkorder
- Fyller lydbildet
- Kan spille soloer

**Vokal**:
- Formidler teksten
- Bærer melodien
- Fronter bandet`,
    },
    {
      id: 'musikk-8-3-2-tip-1',
      type: 'tip',
      title: 'Samspill',
      content: `Godt samspill handler om å lytte til de andre. Spill ikke for høyt, og gi plass til hverandre. Bass og trommer må "låse seg" sammen for å skape god groove.`,
    },
    {
      id: 'musikk-8-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er rytmeseksjonens oppgave i et band?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er rytmeseksjonens hovedoppgave i et band?',
            solution: 'Å holde takten og skape groove',
            multipleChoiceOptions: ['Å holde takten og skape groove', 'Å synge melodien', 'Å spille soloer', 'Å skrive tekster'],
          },
        ],
        solution: 'Rytmeseksjonen (bass og trommer) holder takten og skaper grooven som bandet bygger på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke instrumenter utgjør vanligvis rytmeseksjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke instrumenter utgjør vanligvis rytmeseksjonen i et band?',
            solution: 'Bass og trommer',
            multipleChoiceOptions: ['Bass og trommer', 'Gitar og keyboard', 'Vokal og gitar', 'Fløyte og fiolin'],
          },
        ],
        solution: 'Bass og trommer utgjør rytmeseksjonen, også kalt "kompet" eller "backline".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er komp?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med komp i musikk?',
            solution: 'Akkompagnementet som støtter melodien',
            multipleChoiceOptions: ['Akkompagnementet som støtter melodien', 'Sangmelodien', 'Slutten av en sang', 'En type mikrofon'],
          },
        ],
        solution: 'Komp er akkompagnementet - det rytmiske og harmoniske underlaget som støtter melodien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig at bass og trommer "låser seg" sammen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig at bass og trommer spiller tett sammen?',
            solution: 'For å skape en stabil groove som bandet kan bygge på',
            multipleChoiceOptions: ['For å skape en stabil groove som bandet kan bygge på', 'For å spare plass på scenen', 'For å overdøve de andre instrumentene', 'Det er ikke viktig'],
          },
        ],
        solution: 'Når bass og trommer spiller tett sammen, skaper de et stabilt fundament som resten av bandet kan bygge på.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Sang og stemme
// ============================================================================

export const CHAPTER_MUSIKK_8_4_1: TextbookChapter = {
  id: 'musikk-8-4-1',
  courseId: 'musikk-8',
  chapterNumber: '4.1',
  title: 'Stemmen som instrument',
  description: 'Lær om hvordan stemmen fungerer og ulike sangteknikker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke stemmen variert i ulike uttrykk',
  ],
  content: [
    {
      id: 'musikk-8-4-1-intro',
      type: 'text',
      content: `Stemmen er det mest naturlige instrumentet vi har. Alle kan synge, og med riktig teknikk kan du forbedre stemmen din betydelig.`,
    },
    {
      id: 'musikk-8-4-1-def-1',
      type: 'definition',
      title: 'Stemmebånd',
      content: `Stemmebåndene er to folder av slimhinne i strupen. Når luft passerer, vibrerer de og skaper lyd. Spenningen i stemmebåndene bestemmer tonehøyden.`,
    },
    {
      id: 'musikk-8-4-1-text-1',
      type: 'text',
      content: `**Stemmeleier**

- **Sopran**: Høy kvinnestemme
- **Alt**: Lav kvinnestemme
- **Tenor**: Høy mannsstemme
- **Bass**: Lav mannsstemme

I puberteten går guttenes stemme ned (stemmeskiftet), mens jentenes stemme endres mindre.`,
    },
    {
      id: 'musikk-8-4-1-text-2',
      type: 'text',
      content: `**Grunnleggende sangteknikk**

1. **Pust**: Pust med magen (diafragma), ikke bare brystet
2. **Holdning**: Stå rett med avslappede skuldre
3. **Åpning**: Hold svelget åpent, tenk "gjesp"
4. **Støtte**: Bruk magemusklene til å kontrollere luften

**Oppvarming**: Start alltid med oppvarming før du synger. Summing, leppetrill og enkle skalaer gjør stemmen klar.`,
    },
    {
      id: 'musikk-8-4-1-tip-1',
      type: 'tip',
      title: 'Ta vare på stemmen',
      content: `Drikk mye vann, unngå å rope, og hvisk ikke (det sliter på stemmen!). Hvis du er forkjølet, bør du la stemmen hvile.`,
    },
    {
      id: 'musikk-8-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva bestemmer tonehøyden når vi synger?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bestemmer tonehøyden når vi synger?',
            solution: 'Spenningen i stemmebåndene',
            multipleChoiceOptions: ['Spenningen i stemmebåndene', 'Størrelsen på munnen', 'Lengden på halsen', 'Hvor mye luft vi bruker'],
          },
        ],
        solution: 'Tonehøyden bestemmes av hvor stramme stemmebåndene er. Strammere stemmebånd gir høyere toner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er riktig pusteteknikk for sang?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er riktig pusteteknikk for sang?',
            solution: 'Puste med magen/diafragma',
            multipleChoiceOptions: ['Puste med magen/diafragma', 'Puste høyt opp i brystet', 'Holde pusten lengst mulig', 'Puste så fort som mulig'],
          },
        ],
        solution: 'Diafragmapust (magepust) gir bedre kontroll og støtte enn brystpust.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken stemme er den laveste mannsstemmen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken stemmetype er den laveste mannsstemmen?',
            solution: 'Bass',
            multipleChoiceOptions: ['Bass', 'Tenor', 'Alt', 'Sopran'],
          },
        ],
        solution: 'Bass er den laveste mannsstemmen. Rekkefølgen fra lavt til høyt er: bass, tenor, alt, sopran.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør man ikke hviske når man er forkjølet?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det skadelig å hviske når man er forkjølet?',
            solution: 'Fordi hvisking sliter mer på stemmen enn vanlig tale',
            multipleChoiceOptions: ['Fordi hvisking sliter mer på stemmen enn vanlig tale', 'Fordi hvisking er uhøflig', 'Fordi man blir fortere frisk av å snakke høyt', 'Det er greit å hviske'],
          },
        ],
        solution: 'Hvisking krever at man presser stemmebåndene sammen på en unaturlig måte, noe som sliter på stemmen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_8_4_2: TextbookChapter = {
  id: 'musikk-8-4-2',
  courseId: 'musikk-8',
  chapterNumber: '4.2',
  title: 'Flerstemt sang',
  description: 'Lær om korsang, harmonier og hvordan stemmer klinger sammen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'synge flerstemt i gruppe',
  ],
  content: [
    {
      id: 'musikk-8-4-2-intro',
      type: 'text',
      content: `Flerstemt sang oppstår når flere stemmer synger ulike toner samtidig. Dette skaper harmonier som beriker musikken.`,
    },
    {
      id: 'musikk-8-4-2-def-1',
      type: 'definition',
      title: 'Harmoni',
      content: `Harmoni er når flere toner klinger sammen. Harmonier kan være konsonante (behagelige) eller dissonante (spente).`,
    },
    {
      id: 'musikk-8-4-2-text-1',
      type: 'text',
      content: `**Typer flerstemmighet**

- **Kanon**: Samme melodi startes på ulike tidspunkt ("Fader Jakob")
- **Bordun**: En tone holdes mens andre synger melodien
- **Parallelle terser**: To stemmer synger samme melodi med 2 toners avstand
- **Fri flerstemmighet**: Hver stemme har sin egen melodilinje`,
    },
    {
      id: 'musikk-8-4-2-text-2',
      type: 'text',
      content: `**Tips for flerstemt sang**

1. **Lytt**: Hør på de andre stemmene, ikke bare din egen
2. **Hold melodien**: Ikke la deg dra med av andre stemmer
3. **Blend**: Tilpass styrken så ingen dominerer
4. **Intonasjon**: Syng rent så harmoniene klinger

**Kortyper**: Barnekor, ungdomskor, damekor, mannskor, blandakor`,
    },
    {
      id: 'musikk-8-4-2-example-1',
      type: 'example',
      title: 'Kanon',
      content: `"Fader Jakob" er en kjent kanon. Den kan synges i 4 grupper som starter etter hverandre:

1. "Fader Jakob, Fader Jakob"
2. (gruppe 2 starter) "Sover du, sover du"
3. (gruppe 3 starter) "Hører du ei klokken"
4. (gruppe 4 starter) "Ding dang dong"

Når alle synger samtidig, skapes flerstemmig harmoni.`,
    },
    {
      id: 'musikk-8-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en kanon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en kanon i musikk?',
            solution: 'Samme melodi sunget med forskjellig start',
            multipleChoiceOptions: ['Samme melodi sunget med forskjellig start', 'Et slag på trommen', 'En type mikrofon', 'Et instrument'],
          },
        ],
        solution: 'En kanon er når samme melodi synges av flere grupper som starter på ulike tidspunkt, for eksempel "Fader Jakob".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er harmoni?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva menes med harmoni i musikk?',
            solution: 'Når flere toner klinger sammen',
            multipleChoiceOptions: ['Når flere toner klinger sammen', 'Når alle synger samme tone', 'Når man synger alene', 'Når musikken slutter'],
          },
        ],
        solution: 'Harmoni oppstår når flere toner klinger sammen og skaper en fyldigere klang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er bordun?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er bordun som sangteknikk?',
            solution: 'En lang tone som holdes mens andre synger melodi',
            multipleChoiceOptions: ['En lang tone som holdes mens andre synger melodi', 'Et instrument', 'En type kor', 'Det samme som kanon'],
          },
        ],
        solution: 'Bordun er når en stemme holder en lang tone (ofte grunntonen) mens andre synger melodien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er viktigst for god flerstemt sang?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det viktigste for god flerstemt sang?',
            solution: 'Å lytte til de andre stemmene',
            multipleChoiceOptions: ['Å lytte til de andre stemmene', 'Å synge høyest mulig', 'Å synge raskest', 'Å synge flest noter'],
          },
        ],
        solution: 'Det viktigste for god flerstemmighet er å lytte til de andre stemmene slik at man harmonerer og holder balansen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Musikkproduksjon
// ============================================================================

export const CHAPTER_MUSIKK_8_5_1: TextbookChapter = {
  id: 'musikk-8-5-1',
  courseId: 'musikk-8',
  chapterNumber: '5.1',
  title: 'Komponering og låtskriving',
  description: 'Lær grunnleggende om å skrive egne låter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skape og uttrykke egne musikalske ideer',
  ],
  content: [
    {
      id: 'musikk-8-5-1-intro',
      type: 'text',
      content: `Å skrive musikk er en kreativ prosess der du uttrykker ideer og følelser gjennom lyd. Alle kan lære å komponere, og det finnes mange veier til et ferdig resultat.`,
    },
    {
      id: 'musikk-8-5-1-text-1',
      type: 'text',
      content: `**Grunnleggende låtstruktur**

De fleste poplåter følger en fast struktur:

- **Intro**: Innledning som setter stemningen
- **Vers**: Forteller historien, endres fra vers til vers
- **Refreng**: Det fengende partiet som gjentas
- **Bro/mellomspill**: Kontrast før siste refreng
- **Outro**: Avslutning

Vanlig struktur: Intro - Vers - Refreng - Vers - Refreng - Bro - Refreng - Outro`,
    },
    {
      id: 'musikk-8-5-1-def-1',
      type: 'definition',
      title: 'Hook',
      content: `Hook er det mest fengende elementet i en låt - det som "hekter" seg fast i hodet. Ofte er det en melodifrase eller tekstlinje i refrenget.`,
    },
    {
      id: 'musikk-8-5-1-text-2',
      type: 'text',
      content: `**Melodi og akkorder**

**Melodi**: Sekvens av enkelttoner som utgjør "sangen"
- Start med å nynne eller synge en idé
- Prøv deg frem på et instrument

**Akkorder**: Flere toner samtidig som skaper harmoni
- De vanligste akkordene: C, G, Am, F (i C-dur)
- Mange hitlåter bruker bare 4 akkorder!`,
    },
    {
      id: 'musikk-8-5-1-tip-1',
      type: 'tip',
      title: 'Kom i gang',
      content: `Start enkelt! Velg 4 akkorder, finn en rytme, og nynn en melodi over. Ta opp ideene dine på mobilen så du ikke glemmer dem.`,
    },
    {
      id: 'musikk-8-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er refrenget i en låt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er refrenget i en låt?',
            solution: 'Det fengende partiet som gjentas',
            multipleChoiceOptions: ['Det fengende partiet som gjentas', 'Innledningen', 'Avslutningen', 'Gitarsoloen'],
          },
        ],
        solution: 'Refrenget er det fengende, gjentatte partiet i en låt - ofte det man husker best.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en hook?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en hook i låtskriving?',
            solution: 'Det mest fengende elementet i låten',
            multipleChoiceOptions: ['Det mest fengende elementet i låten', 'En type mikrofon', 'Slutten av en sang', 'En type trommestikke'],
          },
        ],
        solution: 'Hook er det elementet i låten som "hekter" seg fast - det du går og nynner på etterpå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kommer vanligvis mellom versene og refrenget?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kan komme mellom andre refreng og siste refreng?',
            solution: 'En bro kan komme før siste refreng',
            multipleChoiceOptions: ['En bro kan komme før siste refreng', 'Outro', 'Ingenting', 'Intro'],
          },
        ],
        solution: 'En bro (bridge) kommer ofte mellom andre refreng og siste refreng som en kontrast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det lurt å ta opp låtideer på mobilen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det lurt å ta opp låtideer på mobilen?',
            solution: 'For å ikke glemme ideene',
            multipleChoiceOptions: ['For å ikke glemme ideene', 'For å imponere vennene dine', 'For å legge ut på internett', 'Det er ikke lurt'],
          },
        ],
        solution: 'Musikalske ideer kan forsvinne fort. Ved å ta dem opp med en gang, sikrer du at du husker dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_8_5_2: TextbookChapter = {
  id: 'musikk-8-5-2',
  courseId: 'musikk-8',
  chapterNumber: '5.2',
  title: 'Digital musikkproduksjon',
  description: 'Lær om DAW, innspilling og produksjon av musikk på datamaskin.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til å skape og bearbeide musikk',
  ],
  content: [
    {
      id: 'musikk-8-5-2-intro',
      type: 'text',
      content: `I dag kan hvem som helst lage profesjonell musikk hjemme med en datamaskin. Digitale verktøy gjør det mulig å spille inn, redigere og produsere musikk.`,
    },
    {
      id: 'musikk-8-5-2-def-1',
      type: 'definition',
      title: 'DAW (Digital Audio Workstation)',
      content: `DAW er et program for musikkproduksjon. Eksempler: GarageBand, Ableton Live, FL Studio, Logic Pro. Her kan du spille inn, redigere og mikse musikk.`,
    },
    {
      id: 'musikk-8-5-2-text-1',
      type: 'text',
      content: `**Grunnleggende begreper**

- **Spor (track)**: Én lydkilde, f.eks. vokal eller gitar
- **MIDI**: Digitalt noteformat som kan redigeres
- **Audio**: Faktisk lydopptak
- **Loop**: En lydsekvens som kan gjentas
- **Sample**: Et lydklipp som brukes i produksjonen`,
    },
    {
      id: 'musikk-8-5-2-text-2',
      type: 'text',
      content: `**Produksjonsprosessen**

1. **Skissefase**: Lag en enkel demo med grunnleggende elementer
2. **Innspilling**: Spill inn instrumenter og vokal
3. **Redigering**: Klipp, flytt og korriger
4. **Miksing**: Balansér lydnivåer og legg til effekter
5. **Mastering**: Siste finpuss for ferdig lyd

**Vanlige effekter**: Reverb (romklang), delay (ekko), EQ (klangbalanse), kompressor`,
    },
    {
      id: 'musikk-8-5-2-tip-1',
      type: 'tip',
      title: 'Kom i gang gratis',
      content: `GarageBand (Mac/iOS) og Audacity (alle plattformer) er gratis og gode for nybegynnere. Start med å eksperimentere med loops før du spiller inn selv.`,
    },
    {
      id: 'musikk-8-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står DAW for?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva står forkortelsen DAW for?',
            solution: 'Digital Audio Workstation',
            multipleChoiceOptions: ['Digital Audio Workstation', 'Digital And Wireless', 'Direct Audio Wire', 'Double Audio Wave'],
          },
        ],
        solution: 'DAW står for Digital Audio Workstation - et program for musikkproduksjon på datamaskin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom MIDI og audio?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den viktigste forskjellen mellom MIDI og audio?',
            solution: 'MIDI er notedata, audio er lydopptak',
            multipleChoiceOptions: ['MIDI er notedata, audio er lydopptak', 'Det er ingen forskjell', 'Audio er bedre kvalitet', 'MIDI er bare for trommer'],
          },
        ],
        solution: 'MIDI er digital noteinformasjon som kan redigeres, mens audio er et faktisk lydopptak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en loop?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en loop i musikkproduksjon?',
            solution: 'En lydsekvens som gjentas',
            multipleChoiceOptions: ['En lydsekvens som gjentas', 'En type mikrofon', 'En effekt som gjør stemmen dypere', 'En type høyttaler'],
          },
        ],
        solution: 'En loop er en lydsekvens (f.eks. trommer) som kan gjentas sømløst gjennom hele låten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-8-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-8-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er miksing i musikkproduksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva innebærer miksing i musikkproduksjon?',
            solution: 'Å balansere lydnivåer og legge til effekter',
            multipleChoiceOptions: ['Å balansere lydnivåer og legge til effekter', 'Å spille inn vokal', 'Å skrive tekst', 'Å øve på et instrument'],
          },
        ],
        solution: 'Miksing er prosessen der alle sporene balanseres i volum og panorering, og effekter legges til.',
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

export const MUSIKK_8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MUSIKK_8_1_1,
  CHAPTER_MUSIKK_8_1_2,
  CHAPTER_MUSIKK_8_2_1,
  CHAPTER_MUSIKK_8_2_2,
  CHAPTER_MUSIKK_8_3_1,
  CHAPTER_MUSIKK_8_3_2,
  CHAPTER_MUSIKK_8_4_1,
  CHAPTER_MUSIKK_8_4_2,
  CHAPTER_MUSIKK_8_5_1,
  CHAPTER_MUSIKK_8_5_2,
];

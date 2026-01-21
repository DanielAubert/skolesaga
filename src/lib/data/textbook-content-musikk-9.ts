/**
 * Musikk 9. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for musikk på 9. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Avansert musikkteori
// ============================================================================

export const CHAPTER_MUSIKK_9_1_1: TextbookChapter = {
  id: 'musikk-9-1-1',
  courseId: 'musikk-9',
  chapterNumber: '1.1',
  title: 'Akkorder og harmonikk',
  description: 'Lær om akkordoppbygning, funksjonsharmonikk og akkordprogresjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke musikalske grunnbegreper',
    'analysere musikalske strukturer',
  ],
  content: [
    {
      id: 'musikk-9-1-1-intro',
      type: 'text',
      content: `Akkorder er fundamentet i vestlig musikk. Ved å forstå hvordan akkorder bygges opp og fungerer sammen, kan du spille, skrive og forstå musikk på et dypere nivå.`,
    },
    {
      id: 'musikk-9-1-1-def-1',
      type: 'definition',
      title: 'Akkord',
      content: `En akkord er tre eller flere toner som klinger samtidig. Grunnleggende treklanger bygges av grunntone, ters og kvint.`,
    },
    {
      id: 'musikk-9-1-1-text-2',
      type: 'text',
      content: `**Akkordtyper**

- **Dur-akkord**: Stor ters + liten ters = lys, glad klang (C-E-G)
- **Moll-akkord**: Liten ters + stor ters = mørk, melankolsk klang (C-Eb-G)
- **Forminsket**: Liten ters + liten ters = spent, ustabil (C-Eb-Gb)
- **Forstørret**: Stor ters + stor ters = svevende, drømmende (C-E-G#)

**Firklanger** legger til septimen:
- Dur7 (C-E-G-B): Jazz/blues-klang
- Moll7 (C-Eb-G-Bb): Myk, melankolsk
- Dominant7 (C-E-G-Bb): Spent, vil løses opp`,
    },
    {
      id: 'musikk-9-1-1-text-3',
      type: 'text',
      content: `**Funksjonsharmonikk**

I dur og moll har akkordene ulike funksjoner:

- **Tonika (I)**: "Hjemme" - hvile og stabilitet
- **Subdominant (IV)**: Bevegelse bort fra tonika
- **Dominant (V)**: Spenning som vil tilbake til tonika

I C-dur: C = tonika, F = subdominant, G = dominant

**Vanlig progresjon**: I - IV - V - I (C - F - G - C)
**Pop-progresjon**: I - V - vi - IV (C - G - Am - F)`,
    },
    {
      id: 'musikk-9-1-1-example-1',
      type: 'example',
      title: 'Akkordprogresjoner i pop',
      content: `Mange hitlåter bruker samme fire akkorder:
- "Let It Be" (Beatles): C - G - Am - F
- "No Woman No Cry" (Bob Marley): C - G - Am - F
- "Someone Like You" (Adele): A - E - F#m - D

Dette kalles ofte "fire magiske akkorder" eller "pop-punk-progresjonen".`,
    },
    {
      id: 'musikk-9-1-1-tip-1',
      type: 'tip',
      title: 'Lær akkorder på gitar eller piano',
      content: `Start med de grunnleggende akkordene: C, G, Am, F, D, Em. Med disse seks akkordene kan du spille hundrevis av låter.`,
    },
    {
      id: 'musikk-9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom dur- og moll-akkord?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Dur har stor ters, moll har liten ters',
            multipleChoiceOptions: ['Dur har stor ters, moll har liten ters', 'De har samme oppbygning', 'Moll er høyere enn dur', 'Dur spilles bare på piano'],
          },
        ],
        solution: 'Forskjellen ligger i tersen: dur-akkord har stor ters (4 halvtoner), moll har liten ters (3 halvtoner).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er tonika i funksjonsharmonikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hvileakkorden - "hjemme"',
            multipleChoiceOptions: ['Hvileakkorden - "hjemme"', 'Den mest spente akkorden', 'En akkordtype med syv toner', 'Slutten av en sang'],
          },
        ],
        solution: 'Tonika er hvileakkorden i en toneart - den akkorden som føles som "hjemme" og gir stabilitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en dominant7-akkord?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En durakkord med liten septim',
            multipleChoiceOptions: ['En durakkord med liten septim', 'En mollakkord', 'En akkord med bare to toner', 'Den første akkorden i en sang'],
          },
        ],
        solution: 'Dominant7 er en durakkord med tillagt liten septim (f.eks. G7 = G-B-D-F). Den skaper spenning som vil løses til tonika.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er "pop-progresjonen"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'I - V - vi - IV (f.eks. C - G - Am - F)',
            multipleChoiceOptions: ['I - V - vi - IV (f.eks. C - G - Am - F)', 'Bare moll-akkorder', 'Bare dur-akkorder', 'I - II - III - IV'],
          },
        ],
        solution: 'Pop-progresjonen er I - V - vi - IV, som i C-dur blir C - G - Am - F. Brukes i utallige hitlåter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_9_1_2: TextbookChapter = {
  id: 'musikk-9-1-2',
  courseId: 'musikk-9',
  chapterNumber: '1.2',
  title: 'Skalaer og tonearter',
  description: 'Lær om dur- og mollskalaer, modale skalaer og transponering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke musikalske grunnbegreper',
  ],
  content: [
    {
      id: 'musikk-9-1-2-intro',
      type: 'text',
      content: `Skalaer er grunnlaget for melodier og harmonier. Ved å forstå hvordan skalaer bygges opp, kan du improvisere, komponere og forstå musikkens logikk.`,
    },
    {
      id: 'musikk-9-1-2-def-1',
      type: 'definition',
      title: 'Skala',
      content: `En skala er en samling toner ordnet stigende eller synkende. Mønsteret av hele og halve tonetrinn gir skalaen sin karakteristiske klang.`,
    },
    {
      id: 'musikk-9-1-2-text-2',
      type: 'text',
      content: `**Dur-skala**

Mønster: hel - hel - halv - hel - hel - hel - halv

C-durskalaen: C - D - E - F - G - A - H - C

Dur-skalaen gir en lys, glad karakter og er den vanligste skalaen i vestlig musikk.

**Moll-skala (naturlig moll)**

Mønster: hel - halv - hel - hel - halv - hel - hel

A-mollskalaen: A - H - C - D - E - F - G - A

Moll gir en mørkere, mer melankolsk karakter.`,
    },
    {
      id: 'musikk-9-1-2-text-3',
      type: 'text',
      content: `**Parallelle tonearter**

Hver durtoneart har en parallell molltoneart som deler de samme fortegnene:
- C-dur / A-moll (ingen fortegn)
- G-dur / E-moll (1 kryss: F#)
- F-dur / D-moll (1 b: Bb)

**Kvintakkelen** viser sammenhengen mellom tonearter og antall fortegn.`,
    },
    {
      id: 'musikk-9-1-2-text-4',
      type: 'text',
      content: `**Modale skalaer**

Modale skalaer gir ulike stemninger:
- **Jonisk** (dur): Lys, glad
- **Dorisk**: Jazz, noe mørkere
- **Frygisk**: Spansk, eksotisk
- **Lydisk**: Drømmende, svevende
- **Miksolydisk**: Rock, blues
- **Eolisk** (naturlig moll): Melankolsk
- **Lokrisk**: Mørk, ustabil

**Pentatonisk skala**: Fem toner, mye brukt i rock og blues (C-D-E-G-A i C-dur).`,
    },
    {
      id: 'musikk-9-1-2-tip-1',
      type: 'tip',
      title: 'Pentatonisk improvisasjon',
      content: `Pentatonisk moll-skala er perfekt for improvisasjon over blues og rock. I A-moll: A-C-D-E-G. Prøv å improvisere over en bluesakkordrekke!`,
    },
    {
      id: 'musikk-9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er mønsteret for en durskala?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hel-hel-halv-hel-hel-hel-halv',
            multipleChoiceOptions: ['Hel-hel-halv-hel-hel-hel-halv', 'Hel-halv-hel-hel-halv-hel-hel', 'Bare hele toner', 'Bare halve toner'],
          },
        ],
        solution: 'Durskalaen følger mønsteret: hel - hel - halv - hel - hel - hel - halv tonetrinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er den parallelle molltonearten til G-dur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'E-moll',
            multipleChoiceOptions: ['E-moll', 'A-moll', 'D-moll', 'C-moll'],
          },
        ],
        solution: 'E-moll er parallell til G-dur. Begge har ett kryss (F#) i notesystemet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor mange toner har en pentatonisk skala?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '5 toner',
            multipleChoiceOptions: ['5 toner', '7 toner', '8 toner', '12 toner'],
          },
        ],
        solution: 'Pentatonisk betyr "fem toner" (penta = fem). Skalaen utelater de mest dissonante tonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilken modal skala forbindes ofte med spansk musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Frygisk',
            multipleChoiceOptions: ['Frygisk', 'Jonisk', 'Lydisk', 'Dorisk'],
          },
        ],
        solution: 'Den frygiske skalaen har en karakteristisk lav sekund som gir en spansk eller orientalsk klang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Musikkhistorie - 1900-tallet
// ============================================================================

export const CHAPTER_MUSIKK_9_2_1: TextbookChapter = {
  id: 'musikk-9-2-1',
  courseId: 'musikk-9',
  chapterNumber: '2.1',
  title: 'Musikk i det 20. århundre',
  description: 'Lær om modernisme, jazz og utviklingen av populærmusikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over musikkens rolle i historiske perioder',
  ],
  content: [
    {
      id: 'musikk-9-2-1-intro',
      type: 'text',
      content: `1900-tallet var en periode med enorme musikalske omveltninger. Fra modernismens eksperimenter til jazzens fremvekst og rockemusikkens revolusjon endret musikken seg radikalt.`,
    },
    {
      id: 'musikk-9-2-1-text-1',
      type: 'text',
      content: `**Modernisme i klassisk musikk (ca. 1900-1960)**

Komponister brøt med tradisjonelle regler:

- **Claude Debussy**: Impresjonisme - atmosfære fremfor struktur
- **Igor Stravinsky**: Primitivisme, komplekse rytmer ("Vårofferet")
- **Arnold Schönberg**: Tolvtonemusikk - frigjøring fra tonearter
- **John Cage**: Eksperimentell musikk ("4'33"" - stille)

Disse komponistene utvidet radikalt hva musikk kunne være.`,
    },
    {
      id: 'musikk-9-2-1-def-1',
      type: 'definition',
      title: 'Atonalitet',
      content: `Atonal musikk har ingen tonal gravitasjon - ingen "hjemmetone" eller toneart. Tolvtonemusikk bruker alle 12 halvtoner like mye.`,
    },
    {
      id: 'musikk-9-2-1-text-2',
      type: 'text',
      content: `**Jazzens utvikling**

- **1900-1920**: New Orleans jazz - kollektiv improvisasjon
- **1920-tallet**: Swing - storbandæra
- **1940-tallet**: Bebop - virtuos, kompleks (Charlie Parker)
- **1950-60-tallet**: Cool jazz, hardbop, modal jazz (Miles Davis)
- **1960-tallet→**: Free jazz, fusion, nyjazz

Jazz var revolusjonerende: afroamerikansk musikk som ble verdensomspennende kunstform.`,
    },
    {
      id: 'musikk-9-2-1-text-3',
      type: 'text',
      content: `**Rock and roll og ungdomskultur**

- **1950-tallet**: Rock and roll (Elvis, Chuck Berry) - ungdomsopprør
- **1960-tallet**: British Invasion (Beatles), psykedelisk rock
- **1970-tallet**: Hardrock, punk, disco
- **1980-tallet**: Synthpop, heavy metal, hip-hop vokser
- **1990-tallet**: Grunge, alternativ rock, elektronika
- **2000-tallet→**: Indie, EDM, streaming-æra

Musikk ble tett knyttet til ungdomsidentitet og subkulturer.`,
    },
    {
      id: 'musikk-9-2-1-example-1',
      type: 'example',
      title: 'Miles Davis og "Kind of Blue"',
      content: `"Kind of Blue" (1959) av Miles Davis regnes som det beste jazz-albumet noensinne. Det introduserte modal jazz - improvisasjon basert på skalaer fremfor akkordprogresjoner. Albumet solgte millioner og påvirket utallige musikere.`,
    },
    {
      id: 'musikk-9-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er tolvtonemusikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En teknikk der alle 12 halvtoner brukes like mye',
            multipleChoiceOptions: ['En teknikk der alle 12 halvtoner brukes like mye', 'Musikk som varer i 12 minutter', 'Musikk med 12 instrumenter', 'Musikk i 12/8-takt'],
          },
        ],
        solution: 'Tolvtonemusikk er en komposisjonsteknikk utviklet av Schönberg der ingen tone gjentas før alle 12 har vært spilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken jazzstil utviklet seg på 1940-tallet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Bebop',
            multipleChoiceOptions: ['Bebop', 'Swing', 'Cool jazz', 'Free jazz'],
          },
        ],
        solution: 'Bebop utviklet seg på 1940-tallet med musikere som Charlie Parker og Dizzy Gillespie. Det var raskere og mer komplekst enn swing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket verk av Igor Stravinsky skapte skandale ved premieren i 1913?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Vårofferet',
            multipleChoiceOptions: ['Vårofferet', 'De fire årstider', 'Nøtteknekkeren', 'Carmen'],
          },
        ],
        solution: 'Vårofferet (Le Sacre du printemps) hadde premiere i Paris 1913 og skapte opprør med sine primitive rytmer og dissonanser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kalles fenomenet når britiske band dominerte USA på 1960-tallet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'British Invasion',
            multipleChoiceOptions: ['British Invasion', 'American Dream', 'Rock Revolution', 'Pop Explosion'],
          },
        ],
        solution: 'British Invasion var når britiske band som Beatles og Rolling Stones erobret de amerikanske hitlistene på 1960-tallet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_9_2_2: TextbookChapter = {
  id: 'musikk-9-2-2',
  courseId: 'musikk-9',
  chapterNumber: '2.2',
  title: 'Verdensmusikk',
  description: 'Utforsk musikktradisjoner fra ulike kulturer og verdensdeler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og reflektere over musikk fra ulike kulturer',
  ],
  content: [
    {
      id: 'musikk-9-2-2-intro',
      type: 'text',
      content: `Verden er full av unike musikktradisjoner. Fra afrikanske polyrtmer til indiske raga-er - hver kultur har utviklet sine egne musikalske uttrykk som forteller om historie, tro og levesett.`,
    },
    {
      id: 'musikk-9-2-2-def-1',
      type: 'definition',
      title: 'Verdensmusikk',
      content: `Verdensmusikk (world music) er et samlebegrep for tradisjonell og moderne musikk fra kulturer utenfor den vestlige mainstream. Begrepet inkluderer også fusjonssjangre.`,
    },
    {
      id: 'musikk-9-2-2-text-2',
      type: 'text',
      content: `**Afrikansk musikk**

- **Polyrtmikk**: Flere kryssende rytmer samtidig
- **Call and response**: Veksling mellom solist og gruppe
- **Djembe, talking drums, kora**: Karakteristiske instrumenter
- **Griot-tradisjon**: Musikalske historiefortellere i Vest-Afrika

Afrikansk rytmikk er grunnlaget for mye moderne populærmusikk, inkludert jazz, blues og hip-hop.`,
    },
    {
      id: 'musikk-9-2-2-text-3',
      type: 'text',
      content: `**Asiatisk musikk**

**Indisk klassisk musikk**:
- Raga: Melodiske rammeverk med bestemte regler
- Tala: Rytmiske sykluser
- Sitar, tabla, tanpura: Sentrale instrumenter
- Improvisasjon innenfor strenge rammer

**Kinesisk og japansk musikk**:
- Pentatoniske skalaer
- Guzheng (Kina), koto (Japan): Strengeinstrumenter
- Shakuhachi: Japansk bambusfløyte`,
    },
    {
      id: 'musikk-9-2-2-text-4',
      type: 'text',
      content: `**Latin-amerikansk musikk**

- **Samba** (Brasil): Synkopert rytme, karnevalmusikk
- **Salsa** (Cuba/Puerto Rico): Clave-rytme, dansemusikk
- **Tango** (Argentina): Melankolsk, dragende
- **Reggae** (Jamaica): Off-beat-rytme, roots og dub
- **Cumbia** (Colombia): Sprer seg over hele Latin-Amerika

**Flamenco** (Spania): Gitarspill, sang og dans med sterke følelser`,
    },
    {
      id: 'musikk-9-2-2-note-1',
      type: 'note',
      title: 'Samisk musikk - joik',
      content: `Joik er den tradisjonelle sangformen til det samiske folket. En joik er ikke en sang "om" noe - den ER tingen eller personen. Joiken har ingen fast tekst og kan improviseres.`,
    },
    {
      id: 'musikk-9-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er polyrtmikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Flere kryssende rytmer samtidig',
            multipleChoiceOptions: ['Flere kryssende rytmer samtidig', 'Bare én rytme', 'Musikk uten rytme', 'Veldig rask rytme'],
          },
        ],
        solution: 'Polyrtmikk er når flere ulike rytmiske mønstre spilles samtidig og krysser hverandre. Det er særlig vanlig i afrikansk musikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en raga i indisk musikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et melodisk rammeverk med bestemte regler',
            multipleChoiceOptions: ['Et melodisk rammeverk med bestemte regler', 'Et rytmisk mønster', 'Et instrument', 'En type dans'],
          },
        ],
        solution: 'En raga er et melodisk rammeverk i indisk musikk med spesifikke toner, bevegelser og stemninger. Musikeren improviserer innenfor raga-ens regler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket land kommer samba fra?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Brasil',
            multipleChoiceOptions: ['Brasil', 'Cuba', 'Argentina', 'Mexico'],
          },
        ],
        solution: 'Samba kommer fra Brasil og er tett knyttet til karnevalet i Rio de Janeiro.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er joik?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tradisjonell samisk sangform',
            multipleChoiceOptions: ['Tradisjonell samisk sangform', 'En japansk dans', 'Et afrikansk instrument', 'En spansk gitarteknikk'],
          },
        ],
        solution: 'Joik er den tradisjonelle sangformen til det samiske folket. Den joiker ikke om noe, men er tingen eller personen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Instrumentkunnskap
// ============================================================================

export const CHAPTER_MUSIKK_9_3_1: TextbookChapter = {
  id: 'musikk-9-3-1',
  courseId: 'musikk-9',
  chapterNumber: '3.1',
  title: 'Orkesterets oppbygning',
  description: 'Lær om symfoniorkesterets instrumentgrupper og deres roller.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive ulike instrumenter og musikalske uttrykk',
  ],
  content: [
    {
      id: 'musikk-9-3-1-intro',
      type: 'text',
      content: `Symfoniorkesteret er det største ensemblet i klassisk musikk, med opptil 100 musikere. Instrumentene er organisert i seksjoner med ulike roller i lydbildet.`,
    },
    {
      id: 'musikk-9-3-1-text-1',
      type: 'text',
      content: `**Strykerseksjonen** (50-60 musikere)

Den største gruppen, delt i:
- **1. fioliner**: Ofte melodien
- **2. fioliner**: Akkompagnement, motmelodier
- **Bratsjer**: Fylde i mellomregisteret
- **Celloer**: Bass og melodier
- **Kontrabasser**: Dypeste toner, fundament

Strykerne utgjør orkesterets "kjerne" og spiller nesten hele tiden.`,
    },
    {
      id: 'musikk-9-3-1-text-2',
      type: 'text',
      content: `**Treblåserseksjonen** (10-12 musikere)

- **Fløyter** (2-3): Høyt, klart register
- **Oboer** (2-3): Nasalt, uttrykksfull klang
- **Klarinetter** (2-3): Stort register, allsidig
- **Fagotter** (2-3): Dypt, varmt

**Messingblåserseksjonen** (10-12 musikere)

- **Horn (4)**: Varm, rund klang
- **Trompeter (2-4)**: Kraftig, lysende
- **Tromboner (3)**: Majestetisk
- **Tuba (1)**: Dypest messing`,
    },
    {
      id: 'musikk-9-3-1-text-3',
      type: 'text',
      content: `**Slagverksseksjonen** (3-5 musikere)

- **Pauker**: Stemte tromler, dramatisk
- **Cymbal, triangel, tamburin**: Farger og aksenter
- **Stor tromme, skarptromme**: Rytmisk kraft
- **Xylofon, klokkespill, vibrafon**: Melodiske

**Andre instrumenter**

- **Harpe**: Glissandoer og akkorder
- **Piano/celeste**: Spesielle klangfarger
- **Orgel**: I enkelte verk`,
    },
    {
      id: 'musikk-9-3-1-def-1',
      type: 'definition',
      title: 'Dirigent',
      content: `Dirigenten leder orkesteret ved hjelp av taktslag og gester. Dirigenten tolker partituret, bestemmer tempo og dynamikk, og former det musikalske uttrykket.`,
    },
    {
      id: 'musikk-9-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken seksjon er størst i et symfoniorkester?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Strykerseksjonen',
            multipleChoiceOptions: ['Strykerseksjonen', 'Messingblåserseksjonen', 'Treblåserseksjonen', 'Slagverksseksjonen'],
          },
        ],
        solution: 'Strykerseksjonen er klart størst med 50-60 musikere av totalt ca. 80-100 i et fullt orkester.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket instrument er dypest i messingblåserseksjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tuba',
            multipleChoiceOptions: ['Tuba', 'Trompet', 'Horn', 'Trombone'],
          },
        ],
        solution: 'Tubaen er det dypeste messingblåseinstrumentet og gir fundamentet i blåserseksjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er dirigentens rolle?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Lede orkesteret og tolke musikken',
            multipleChoiceOptions: ['Lede orkesteret og tolke musikken', 'Spille fiolin', 'Skrive noter', 'Selge billetter'],
          },
        ],
        solution: 'Dirigenten leder orkesteret med gester, bestemmer tempo og dynamikk, og former den musikalske tolkningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor regnes obo som et treblåseinstrument selv om det er laget av plast eller tre?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi lyden lages av et vibrerende rørblad',
            multipleChoiceOptions: ['Fordi lyden lages av et vibrerende rørblad', 'Fordi det er billig', 'Fordi det er lite', 'Fordi det er gammelt'],
          },
        ],
        solution: 'Klassifiseringen handler om hvordan lyden lages. Treblåsere bruker rørblad eller luftstråle mot en kant, mens messing bruker vibrerende lepper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_9_3_2: TextbookChapter = {
  id: 'musikk-9-3-2',
  courseId: 'musikk-9',
  chapterNumber: '3.2',
  title: 'Elektroniske instrumenter',
  description: 'Lær om synthesizere, samplere og elektronisk lydproduksjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy i musikalsk utforskning',
  ],
  content: [
    {
      id: 'musikk-9-3-2-intro',
      type: 'text',
      content: `Elektroniske instrumenter har revolusjonert musikken. Fra de første synthesizerne til moderne software kan vi nå skape lyder som aldri har eksistert før.`,
    },
    {
      id: 'musikk-9-3-2-def-1',
      type: 'definition',
      title: 'Synthesizer',
      content: `En synthesizer genererer lyd elektronisk ved å manipulere signaler. Den kan imitere andre instrumenter eller skape helt nye lyder.`,
    },
    {
      id: 'musikk-9-3-2-text-2',
      type: 'text',
      content: `**Typer synthesizere**

- **Analog**: Bruker elektriske signaler direkte (varme, organiske lyder)
- **Digital**: Bruker dataprosessering (presis, allsidig)
- **FM-syntese**: Modulerer frekvenser (metalliske, glassaktige lyder)
- **Wavetable**: Bruker bølgeformer som lydkilde
- **Software/VST**: Synthesizere som programmer på datamaskinen

**Grunnleggende komponenter**:
- Oscillator: Genererer grunnlyd
- Filter: Former klangen
- Envelope (ADSR): Kontrollerer lydforløp
- LFO: Skaper modulasjon/bevegelse`,
    },
    {
      id: 'musikk-9-3-2-text-3',
      type: 'text',
      content: `**Samplere og sampling**

En sampler spiller av opptak av lyder:
- Kan spille hvilken som helst lyd ved ulike tonehøyder
- Drum machines bruker samples av trommer
- Kan sample fra plater (hip-hop-tradisjon)
- Moderne samplere har enorme biblioteker

**MIDI-kontrollere**:
- Keyboard uten egen lyd
- Pad-kontrollere (Akai MPC, Novation Launchpad)
- Styrer software-instrumenter`,
    },
    {
      id: 'musikk-9-3-2-text-4',
      type: 'text',
      content: `**Effektprosessorer**

- **Reverb**: Simulerer romklang
- **Delay**: Ekko-effekt
- **Distortion**: Forvrengning (rock-gitar)
- **Chorus/flanger/phaser**: Modulasjonseffekter
- **Auto-tune**: Tonehøydekorreksjon
- **Vocoderen**: "Robot-stemme"

Effekter kan være hardware (pedaler, rack) eller software (plugins).`,
    },
    {
      id: 'musikk-9-3-2-tip-1',
      type: 'tip',
      title: 'Gratis software-synther',
      content: `Prøv gratis synthesizere som Vital, Dexed eller Helm. De kan produsere profesjonelle lyder og er perfekte for å lære lyddesign.`,
    },
    {
      id: 'musikk-9-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva gjør en oscillator i en synthesizer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Genererer grunnlyden',
            multipleChoiceOptions: ['Genererer grunnlyden', 'Legger til ekko', 'Spiller samples', 'Lagrer data'],
          },
        ],
        solution: 'Oscillatoren genererer den grunnleggende lydbølgen som deretter formes av filter, envelope og andre komponenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er ADSR?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Attack, Decay, Sustain, Release - kontrollerer lydforløpet',
            multipleChoiceOptions: ['Attack, Decay, Sustain, Release - kontrollerer lydforløpet', 'En type effekt', 'En type synthesizer', 'Et programmeringssprpråk'],
          },
        ],
        solution: 'ADSR-envelope kontrollerer hvordan lyden utvikler seg: Attack (start), Decay (fall), Sustain (vedlikehold), Release (utklinging).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom en sampler og en synthesizer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Sampler spiller opptak, synthesizer genererer lyd',
            multipleChoiceOptions: ['Sampler spiller opptak, synthesizer genererer lyd', 'Det er ingen forskjell', 'Synthesizer er større', 'Sampler er dyrere'],
          },
        ],
        solution: 'En sampler spiller av innspilte lyder (samples), mens en synthesizer genererer lyd elektronisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er reverb?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En effekt som simulerer romklang',
            multipleChoiceOptions: ['En effekt som simulerer romklang', 'En type synthesizer', 'Et trommemønster', 'En type mikrofon'],
          },
        ],
        solution: 'Reverb simulerer romklang - lyden av at lydbølger reflekteres fra vegger i et rom, fra lite bad til stor katedral.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Samspill og fremføring
// ============================================================================

export const CHAPTER_MUSIKK_9_4_1: TextbookChapter = {
  id: 'musikk-9-4-1',
  courseId: 'musikk-9',
  chapterNumber: '4.1',
  title: 'Ensemblespill',
  description: 'Lær om samspill i gruppe, arrangering og musikalsk kommunikasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'samspille med andre og reflektere over samspillprosesser',
  ],
  content: [
    {
      id: 'musikk-9-4-1-intro',
      type: 'text',
      content: `Å spille sammen med andre er en av musikkens store gleder. Godt samspill krever lytting, kommunikasjon og evne til å tilpasse seg helheten.`,
    },
    {
      id: 'musikk-9-4-1-def-1',
      type: 'definition',
      title: 'Ensemble',
      content: `Et ensemble er en gruppe musikere som spiller sammen. Det kan være alt fra duo til storband eller orkester.`,
    },
    {
      id: 'musikk-9-4-1-text-2',
      type: 'text',
      content: `**Grunnleggende samspillprinsipper**

1. **Lytt aktivt**: Hør de andre like mye som deg selv
2. **Hold tempo**: Følg felles puls, ikke dra eller slep
3. **Dynamikk**: Tilpass volumet til helheten
4. **Gi plass**: Ikke spill hele tiden - stillhet er også musikk
5. **Øyekontakt**: Kommuniser med blikk og gester

**"Lock-in"**: Når alle musikere føler samme puls og spiller som én organisme.`,
    },
    {
      id: 'musikk-9-4-1-text-3',
      type: 'text',
      content: `**Arrangering**

Arrangering handler om å tilpasse musikk til et ensemble:

- **Melodi**: Hvem spiller melodien?
- **Harmonikk**: Fordeling av akkordtoner
- **Bass**: Grunnlaget i harmonien
- **Rytme**: Hvem holder takten?
- **Fylde**: Bakgrunnstemmer og effekter

Et godt arrangement gir alle en meningsfull rolle og utnytter instrumentenes styrker.`,
    },
    {
      id: 'musikk-9-4-1-text-4',
      type: 'text',
      content: `**Prøvesituasjonen**

Effektiv bandøving:
- Kom forberedt - øv din del hjemme
- Start med å stemme/sjekke lyd
- Begynn med enkleste låten for oppvarming
- Jobb i seksjoner - ikke bare spill hele låten om igjen
- Ta pauser - slitne musikere gjør feil
- Avtal hvem som leder øvingen

**Kommunikasjon**: Vær konstruktiv i tilbakemeldinger. Si hva som fungerer, ikke bare hva som er feil.`,
    },
    {
      id: 'musikk-9-4-1-tip-1',
      type: 'tip',
      title: 'Ta opp øvingen',
      content: `Bruk mobilen til å ta opp øving. Når du lytter tilbake, hører du ting du ikke la merke til i øyeblikket. Veldig nyttig for å identifisere problemer!`,
    },
    {
      id: 'musikk-9-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er det viktigste for godt samspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å lytte til de andre',
            multipleChoiceOptions: ['Å lytte til de andre', 'Å spille høyest', 'Å spille mest', 'Å ha dyrest utstyr'],
          },
        ],
        solution: 'Aktiv lytting er det viktigste for godt samspill. Du må høre helheten, ikke bare din egen stemme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr "lock-in" i samspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Når alle musikere føler samme puls',
            multipleChoiceOptions: ['Når alle musikere føler samme puls', 'Når øvingslokalet er låst', 'Når alle spiller samme tone', 'Når ingen får pause'],
          },
        ],
        solution: 'Lock-in er den magiske følelsen når alle musikere er i perfekt synk og spiller som én organisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er arrangering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å tilpasse musikk til et bestemt ensemble',
            multipleChoiceOptions: ['Å tilpasse musikk til et bestemt ensemble', 'Å komponere ny musikk', 'Å øve på en låt', 'Å spille inn musikk'],
          },
        ],
        solution: 'Arrangering er å tilpasse musikk til et spesifikt ensemble - bestemme hvem som spiller hva.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør man ta opp bandøvinger?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å høre ting man ikke la merke til i øyeblikket',
            multipleChoiceOptions: ['For å høre ting man ikke la merke til i øyeblikket', 'For å legge ut på internett', 'For å slette det etterpå', 'Det er ikke nyttig'],
          },
        ],
        solution: 'Opptak avslører problemer du ikke legger merke til mens du spiller, fordi oppmerksomheten din er på spillingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_9_4_2: TextbookChapter = {
  id: 'musikk-9-4-2',
  courseId: 'musikk-9',
  chapterNumber: '4.2',
  title: 'Scenepresentasjon',
  description: 'Lær om konserter, scenevaner og profesjonell fremføring.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fremføre musikk for et publikum',
  ],
  content: [
    {
      id: 'musikk-9-4-2-intro',
      type: 'text',
      content: `Å spille for publikum er målet for mye musikkøving. God scenepresentasjon handler ikke bare om å spille riktig, men om å kommunisere med og engasjere publikum.`,
    },
    {
      id: 'musikk-9-4-2-text-1',
      type: 'text',
      content: `**Før konserten**

- **Soundcheck**: Test lyd og monitor (det du hører selv)
- **Scenelayout**: Hvor står alle? Kan alle se hverandre?
- **Setliste**: Planlegg rekkefølgen - tenk på energi og variasjon
- **Tekniske behov**: Strøm, kabler, reserveutstyr
- **Oppvarming**: Spill deg varm, senk stressnivået`,
    },
    {
      id: 'musikk-9-4-2-text-2',
      type: 'text',
      content: `**På scenen**

- **Kroppsspråk**: Stå selvsikkert, bruk rommet
- **Øyekontakt**: Se på publikum, ikke bare på instrumentet
- **Kommunikasjon**: Presenter låter, snakk mellom låtene
- **Feil**: Ikke stopp! Fortsett som om ingenting skjedde
- **Energi**: Gi energi til publikum, få det tilbake

**Scenefrykt er normalt**: Selv profesjonelle er nervøse. Bruk nervøsiteten som energi.`,
    },
    {
      id: 'musikk-9-4-2-text-3',
      type: 'text',
      content: `**Etter konserten**

- Takk publikum og eventuelle hjelpere
- Pakk utstyret trygt og ryddig
- Evaluér: Hva fungerte? Hva kan forbedres?
- Del opplevelsen - sosiale medier, dokumentasjon

**Booking og promotering**:
- Kontakt steder direkte
- Ha demo/video klar
- Lag plakater og bruk sosiale medier
- Bygg nettverk med andre musikere`,
    },
    {
      id: 'musikk-9-4-2-tip-1',
      type: 'tip',
      title: 'Håndtering av feil',
      content: `Hvis du spiller feil, la det passere. Publikum legger sjelden merke til feil hvis du ikke viser det i ansiktet. De verste feilene er de du dveler ved!`,
    },
    {
      id: 'musikk-9-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva bør du gjøre hvis du spiller feil på scenen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fortsette som om ingenting skjedde',
            multipleChoiceOptions: ['Fortsette som om ingenting skjedde', 'Stoppe og starte på nytt', 'Be om unnskyldning', 'Forlate scenen'],
          },
        ],
        solution: 'Du bør alltid fortsette. Publikum legger ofte ikke merke til feil med mindre du stopper eller viser at noe gikk galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er soundcheck?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Testing av lyd og utstyr før konserten',
            multipleChoiceOptions: ['Testing av lyd og utstyr før konserten', 'Slutten av konserten', 'En type mikrofon', 'En musikksjanger'],
          },
        ],
        solution: 'Soundcheck er lydprøven der man sjekker at alt utstyr fungerer og at lydnivåene er riktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er monitor (i konsertsammenheng)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Høyttaleren som lar musikeren høre seg selv',
            multipleChoiceOptions: ['Høyttaleren som lar musikeren høre seg selv', 'En skjerm som viser teksten', 'En type tromme', 'Konsertens vakt'],
          },
        ],
        solution: 'Monitor er høyttaleren rettet mot musikeren på scenen, slik at vedkommende kan høre seg selv og de andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør en god setliste ta hensyn til?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Energi og variasjon gjennom konserten',
            multipleChoiceOptions: ['Energi og variasjon gjennom konserten', 'Bare alfabetisk rekkefølge', 'Bare rolige låter først', 'Tilfeldig rekkefølge'],
          },
        ],
        solution: 'En god setliste planlegger energikurven gjennom konserten - variasjon i tempo, stemning og intensitet holder publikum engasjert.',
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

export const CHAPTER_MUSIKK_9_5_1: TextbookChapter = {
  id: 'musikk-9-5-1',
  courseId: 'musikk-9',
  chapterNumber: '5.1',
  title: 'Avansert låtskriving',
  description: 'Lær om tekstskriving, melodiutvikling og arrangeringsteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skape og uttrykke egne musikalske ideer',
  ],
  content: [
    {
      id: 'musikk-9-5-1-intro',
      type: 'text',
      content: `Låtskriving er en ferdighet som kan læres og utvikles. Ved å forstå teknikker og strukturer kan du uttrykke deg mer effektivt gjennom musikk.`,
    },
    {
      id: 'musikk-9-5-1-text-1',
      type: 'text',
      content: `**Tekstskriving (lyrikk)**

**Tema og budskap**:
- Hva vil du si? Hva er den emosjonelle kjernen?
- Vis, ikke fortell - bruk konkrete bilder

**Rim og rytme**:
- Enderim: rose/rose, perfekt rim
- Halvrim: rose/hose, nesten rim
- Ingen rim: mer talepreg, frihet

**Prosodi**: Hvordan teksten passer til melodiens rytme og betoning. Viktige ord bør havne på sterke slag.`,
    },
    {
      id: 'musikk-9-5-1-text-2',
      type: 'text',
      content: `**Melodiutvikling**

- **Motiv**: Et kort melodisk fragment som gjentas og utvikles
- **Sekvensering**: Gjenta motivet på en annen tonehøyde
- **Variasjon**: Endre rytme eller intervaller
- **Kontrast**: Vers vs. refreng bør føles annerledes

**Melodisk spenning**:
- Stigende melodi = økende spenning
- Fallende melodi = avspenning
- Store sprang = dramatikk
- Små steg = ro`,
    },
    {
      id: 'musikk-9-5-1-text-3',
      type: 'text',
      content: `**Arrangering for ulike formater**

**Akustisk/strippet**:
- Fokus på melodi og tekst
- Minimalt komp

**Full band**:
- Fordel roller: bass, trommer, harmoni, melodi
- Dynamikk: bygg opp og ned

**Elektronisk**:
- Layers av synther og samples
- Drop og build-ups
- Effekter som del av uttrykket

**Pre-chorus**: Del mellom vers og refreng som bygger forventning.`,
    },
    {
      id: 'musikk-9-5-1-tip-1',
      type: 'tip',
      title: 'Co-writing',
      content: `Skriv sammen med andre! To hoder tenker bedre enn ett. Mange hitlåtskrivere jobber i team der én fokuserer på tekst, én på melodi, osv.`,
    },
    {
      id: 'musikk-9-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er prosodi i låtskriving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hvordan teksten passer til melodiens rytme',
            multipleChoiceOptions: ['Hvordan teksten passer til melodiens rytme', 'En type rim', 'En akkordprogresjon', 'Et instrument'],
          },
        ],
        solution: 'Prosodi handler om samspillet mellom tekst og melodi - at viktige ord faller på sterke slag og at rytmen i teksten passer musikken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et musikalsk motiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et kort melodisk fragment som gjentas og utvikles',
            multipleChoiceOptions: ['Et kort melodisk fragment som gjentas og utvikles', 'Grunnen til å skrive en sang', 'Et helt vers', 'En type akkord'],
          },
        ],
        solution: 'Et motiv er en kort melodisk idé som brukes som byggestein. Det gjentas, varieres og utvikles gjennom låten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er pre-chorus?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En del som bygger opp til refrenget',
            multipleChoiceOptions: ['En del som bygger opp til refrenget', 'Innledningen til sangen', 'Et annet ord for vers', 'Slutten av sangen'],
          },
        ],
        solution: 'Pre-chorus er en kort seksjon mellom vers og refreng som bygger spenning og forventning før refrenget "slår inn".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er sekvensering i melodiutvikling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å gjenta et motiv på en annen tonehøyde',
            multipleChoiceOptions: ['Å gjenta et motiv på en annen tonehøyde', 'Å sette låter i rekkefølge', 'Å spille inn flere spor', 'En type software'],
          },
        ],
        solution: 'Sekvensering er å gjenta et melodisk motiv på en høyere eller lavere tonehøyde, noe som skaper utvikling og bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MUSIKK_9_5_2: TextbookChapter = {
  id: 'musikk-9-5-2',
  courseId: 'musikk-9',
  chapterNumber: '5.2',
  title: 'Miksing og mastering',
  description: 'Lær om lydbehandling, mikseprosessen og ferdigstilling av musikk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke digitale verktøy til å skape og bearbeide musikk',
  ],
  content: [
    {
      id: 'musikk-9-5-2-intro',
      type: 'text',
      content: `Miksing og mastering er de siste stegene i musikkproduksjon. Her formes den endelige lyden som lytterne vil høre. God miksing kan løfte en låt fra demo til profesjonelt nivå.`,
    },
    {
      id: 'musikk-9-5-2-def-1',
      type: 'definition',
      title: 'Miksing',
      content: `Miksing er prosessen der alle sporene balanseres og behandles for å skape en helhetlig lyd. Det inkluderer nivåer, panorering, EQ og effekter.`,
    },
    {
      id: 'musikk-9-5-2-text-2',
      type: 'text',
      content: `**Grunnleggende mikseprinsipper**

**Volum (nivå)**:
- Start med de viktigste elementene (vokal, trommer)
- La ingenting overdøve helheten

**Panorering**:
- Fordel instrumenter i stereobildet
- Vokal og bass vanligvis i midten
- Gitarer, keys, etc. kan panoreres ut til sidene

**EQ (equalization)**:
- Kutt frekvenser som "mudrer"
- Gi hvert instrument sin plass i frekvensspekteret
- Boost med forsiktighet, kutt oftere`,
    },
    {
      id: 'musikk-9-5-2-text-3',
      type: 'text',
      content: `**Dynamikkbehandling**

**Kompressor**:
- Reduserer forskjellen mellom svakeste og sterkeste deler
- Gjør lyden jevnere og "tettere"
- Attack, release, ratio, threshold

**Limiter**:
- Absolutt tak på volum
- Brukes mye i mastering

**Gate**:
- Kutter lyd under en terskel
- Fjerner støy mellom trommeslag etc.`,
    },
    {
      id: 'musikk-9-5-2-text-4',
      type: 'text',
      content: `**Mastering**

Mastering er siste finpuss på den ferdige miksen:

- **Stereobalanse**: Sjekk at venstre/høyre er balansert
- **EQ**: Subtile justeringer av totallyden
- **Kompresjon/limiting**: Øke volum, "lime" låten sammen
- **Stereobredde**: Justere romfølelsen
- **Fade in/out**: Avslutning av låten

**Loudness**: Moderne strømmetjenester normaliserer volum, så ekstrem loudness er ikke lenger nødvendig.`,
    },
    {
      id: 'musikk-9-5-2-tip-1',
      type: 'tip',
      title: 'Referanselåter',
      content: `Bruk profesjonelle låter i samme sjanger som referanse. A/B-test din miks mot referansen for å sjekke frekvensbalanse og lydnivå.`,
    },
    {
      id: 'musikk-9-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er EQ?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et verktøy for å justere frekvensbalansen',
            multipleChoiceOptions: ['Et verktøy for å justere frekvensbalansen', 'En type mikrofon', 'Et mål for volum', 'En musikksjanger'],
          },
        ],
        solution: 'EQ (equalizer) lar deg øke eller redusere spesifikke frekvenser - bass, mellomtone, diskant - for å forme lyden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva gjør en kompressor?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Reduserer dynamisk omfang (forskjell mellom svakt og sterkt)',
            multipleChoiceOptions: ['Reduserer dynamisk omfang (forskjell mellom svakt og sterkt)', 'Gjør lyden høyere', 'Legger til ekko', 'Endrer tonehøyden'],
          },
        ],
        solution: 'En kompressor reduserer forskjellen mellom de svakeste og sterkeste delene av lyden, noe som gjør den jevnere og mer kontrollert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er panorering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordeling av lyd mellom venstre og høyre høyttaler',
            multipleChoiceOptions: ['Fordeling av lyd mellom venstre og høyre høyttaler', 'Justering av volum', 'Justering av tonehøyde', 'En type reverb'],
          },
        ],
        solution: 'Panorering plasserer lyden i stereobildet - helt til venstre, helt til høyre, eller et sted imellom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'musikk-9-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'musikk-9-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom miksing og mastering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Miksing behandler enkeltsporene, mastering behandler den ferdige miksen',
            multipleChoiceOptions: ['Miksing behandler enkeltsporene, mastering behandler den ferdige miksen', 'Det er det samme', 'Mastering kommer først', 'Miksing er bare for vokal'],
          },
        ],
        solution: 'Miksing balanserer og behandler alle de individuelle sporene, mens mastering er siste finpuss på den ferdig miksede låten.',
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

export const MUSIKK_9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MUSIKK_9_1_1,
  CHAPTER_MUSIKK_9_1_2,
  CHAPTER_MUSIKK_9_2_1,
  CHAPTER_MUSIKK_9_2_2,
  CHAPTER_MUSIKK_9_3_1,
  CHAPTER_MUSIKK_9_3_2,
  CHAPTER_MUSIKK_9_4_1,
  CHAPTER_MUSIKK_9_4_2,
  CHAPTER_MUSIKK_9_5_1,
  CHAPTER_MUSIKK_9_5_2,
];

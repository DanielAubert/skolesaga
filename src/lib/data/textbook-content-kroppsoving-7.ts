/**
 * Kroppsøving 7. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på 7. trinn
 * Fokus på styrke/utholdenhet, lagidrett, friluftsliv og identitet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Styrke og utholdenhet
// ============================================================================

export const CHAPTER_KROPPSOVING_7_1_1: TextbookChapter = {
  id: 'kroppsoving-7-1-1',
  courseId: 'kroppsoving-7',
  chapterNumber: '1.1',
  title: 'Styrketrening for ungdom',
  description: 'Lær om hvordan du kan trene styrke på en trygg og effektiv måte.',
  estimatedMinutes: 45,
  competenceGoals: [
    'trene på og utvikle ferdigheter i varierte bevegelsesformer',
    'forstå hvordan trening påvirker kroppen',
  ],
  content: [
    {
      id: 'kroppsoving-7-1-1-intro',
      type: 'text',
      content: `Når du er 12-13 år, går kroppen din gjennom store forandringer. Dette er en perfekt tid til å bygge et godt grunnlag med styrketrening. Du trenger ikke tunge vekter - kroppen din er det beste treningsapparatet du har!`,
    },
    {
      id: 'kroppsoving-7-1-1-def-1',
      type: 'definition',
      title: 'Styrke',
      content: `Styrke er musklenes evne til å utvikle kraft. Det finnes flere typer styrke: maksimal styrke (hvor mye du kan løfte), utholdenhetsstyrke (hvor lenge du kan holde ut), og eksplosiv styrke (hvor raskt du kan utvikle kraft).`,
    },
    {
      id: 'kroppsoving-7-1-1-text-1',
      type: 'text',
      content: `**Hvorfor trene styrke?**

**For kroppen**:
- Sterkere muskler og skjelett
- Bedre holdning
- Mindre risiko for skader
- Økt forbrenning
- Bedre prestasjon i idrett

**For hodet**:
- Økt selvtillit
- Bedre konsentrasjon
- Mestringsfølelse
- Positiv effekt på humøret

**Viktige muskelgrupper**:
- **Kjernemuskulatur**: Mage, rygg og hofter - viktig for all bevegelse
- **Bein**: Lår, sete og legger - gir kraft og stabilitet
- **Overkropp**: Bryst, rygg, skuldre og armer`,
    },
    {
      id: 'kroppsoving-7-1-1-text-2',
      type: 'text',
      content: `**Øvelser med egen kroppsvekt**

**For kjernen**:
- **Planken**: Hold kroppen strak som en planke, støtt på underarmer og tær
- **Sideplank**: Samme prinsipp, men liggende på siden
- **Knebøy**: Står rett, senk deg ned som om du setter deg på en stol

**For overkroppen**:
- **Armhevinger**: Start gjerne med knærne i bakken
- **Dipper**: Bruk en benk eller stol, senk kroppen ved å bøye armene
- **Roing**: Med en partner eller elastikk

**For beina**:
- **Utfall**: Langt steg frem, senk bakre kne mot bakken
- **Ettbeinsknebøy**: Utfordrende variasjon av vanlig knebøy
- **Hoppknebøy**: Eksplosiv styrke

**Antall og serier**:
- Begynn med 8-12 repetisjoner
- Gjør 2-3 serier av hver øvelse
- Ha pause mellom seriene`,
    },
    {
      id: 'kroppsoving-7-1-1-tip-1',
      type: 'tip',
      title: 'Kvalitet fremfor kvantitet',
      content: `Det er bedre å gjøre 5 perfekte armhevinger enn 20 dårlige. Fokuser alltid på riktig teknikk. Når øvelsen blir lett, kan du øke antallet eller gjøre en vanskeligere variant.`,
    },
    {
      id: 'kroppsoving-7-1-1-warning-1',
      type: 'warning',
      title: 'Ikke tren med for tunge vekter',
      content: `Kroppen din er fortsatt i vekst. Tung vekttrening kan skade vekstsonene i skjelettet. Hold deg til øvelser med egen kroppsvekt eller lette vekter inntil du er ferdig utvokst.`,
    },
    {
      id: 'kroppsoving-7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke tre typer styrke finnes?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre hovedtypene av styrke.',
            solution: 'Maksimal styrke, utholdenhetsstyrke og eksplosiv styrke',
            multipleChoiceOptions: [
              'Maksimal styrke, utholdenhetsstyrke og eksplosiv styrke',
              'Arm-styrke, bein-styrke og mage-styrke',
              'Rask styrke, langsom styrke og middels styrke',
              'Indre styrke, ytre styrke og mental styrke',
            ],
          },
        ],
        solution: 'De tre hovedtypene av styrke er maksimal styrke (hvor mye kraft), utholdenhetsstyrke (hvor lenge) og eksplosiv styrke (hvor raskt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kjernemuskulaturen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvilke muskler som utgjor kjernemuskulaturen.',
            solution: 'Mage, rygg og hofter',
            multipleChoiceOptions: [
              'Mage, rygg og hofter',
              'Bare magemuskler',
              'Armer og skuldre',
              'Bein og sete',
            ],
          },
        ],
        solution: 'Kjernemuskulaturen inkluderer mage, rygg og hofter. Disse musklene stabiliserer kroppen i all bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bor du unnga tunge vekter som ungdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen til a unnga tunge vekter.',
            solution: 'Det kan skade vekstsonene i skjelettet',
            multipleChoiceOptions: [
              'Det kan skade vekstsonene i skjelettet',
              'Det er kjedelig',
              'Man blir for sterk',
              'Det finnes ingen grunn',
            ],
          },
        ],
        solution: 'Nar kroppen fortsatt vokser, kan tung belastning skade vekstsonene (epifyseskivene) i skjelettet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er viktigst nar du trener styrke?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste prinsippet for styrketrening.',
            solution: 'Riktig teknikk',
            multipleChoiceOptions: [
              'Riktig teknikk',
              'A gjore flest mulig repetisjoner',
              'A bruke tunge vekter',
              'A trene sa lenge som mulig',
            ],
          },
        ],
        solution: 'Riktig teknikk er det aller viktigste. Det forebygger skader og gjor treningen mer effektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et enkelt styrkeprogram med tre ovelser.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv tre ovelser du ville inkludert i et styrkeprogram og forklar hvilke muskler hver ovelse trener.',
            solution: 'Eksempel: 1) Planke - trener kjernemuskulaturen. 2) Knebøy - trener lår og sete. 3) Armhevinger - trener bryst, skuldre og armer.',
          },
        ],
        solution: 'Et godt styrkeprogram bor inneholde ovelser for ulike muskelgrupper, for eksempel kjerne, bein og overkropp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_7_1_2: TextbookChapter = {
  id: 'kroppsoving-7-1-2',
  courseId: 'kroppsoving-7',
  chapterNumber: '1.2',
  title: 'Utholdenhetstrening og koordinasjon',
  description: 'Lær om hvordan du kan forbedre kondisjon og koordinasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'trene på og utvikle ferdigheter i varierte bevegelsesformer',
    'forstå sammenhengen mellom fysisk aktivitet, trening og helse',
  ],
  content: [
    {
      id: 'kroppsoving-7-1-2-intro',
      type: 'text',
      content: `Utholdenhet handler om hvor lenge kroppen din kan jobbe uten å bli sliten. God utholdenhet gjør at du kan løpe lenger, spille en hel fotballkamp og ha energi til overs. Kombinert med god koordinasjon blir du en allsidig utøver!`,
    },
    {
      id: 'kroppsoving-7-1-2-def-1',
      type: 'definition',
      title: 'Utholdenhet',
      content: `Utholdenhet er kroppens evne til å arbeide over lengre tid. Det finnes aerob utholdenhet (med oksygen, f.eks. jogging) og anaerob utholdenhet (uten tilstrekkelig oksygen, f.eks. sprint).`,
    },
    {
      id: 'kroppsoving-7-1-2-def-2',
      type: 'definition',
      title: 'Koordinasjon',
      content: `Koordinasjon er evnen til å samordne bevegelser på en effektiv måte. God koordinasjon gjør at du kan utføre komplekse bevegelser smidige og presist.`,
    },
    {
      id: 'kroppsoving-7-1-2-text-1',
      type: 'text',
      content: `**Hvordan trene utholdenhet**

**Kontinuerlig trening**:
- Løping, sykling eller svømming i jevnt tempo
- 20-60 minutter
- Moderat intensitet (kan snakke, men litt andpusten)
- Bygger grunnkondisjon

**Intervalltrening**:
- Veksler mellom hard innsats og hvile
- Eksempel: Løp hardt i 30 sekunder, gå i 30 sekunder
- 15-30 minutter totalt
- Øker maksimal kapasitet

**Pulssoner**:
- **Lav intensitet (60-70%)**: Lett jogg, kan føre samtale
- **Moderat intensitet (70-80%)**: Tyngre å snakke
- **Høy intensitet (80-90%)**: Kan bare si korte setninger
- **Maksimal intensitet (90-100%)**: Full innsats, kan ikke snakke

**Makspuls**: Ca. 220 minus alder (din makspuls er ca. 207-208 slag/min)`,
    },
    {
      id: 'kroppsoving-7-1-2-text-2',
      type: 'text',
      content: `**Koordinasjonstrening**

**Koordinasjon kan trenes!**
Hjernen og nervesystemet lærer bevegelser gjennom øvelse. Jo mer du trener, jo bedre blir signalene fra hjernen til musklene.

**Øvelser for bedre koordinasjon**:

**Stigeøvelser (agility ladder)**:
- Raske føtter inn og ut av stigetrinn
- Sidelengs bevegelser
- Kombinasjoner

**Hoppøvelser**:
- Hoppe tau (enkel og dobbel)
- Hinkehopp i mønster
- Sideskift

**Ball-koordinasjon**:
- Drible med to baller samtidig
- Kaste og fange mens du gjør andre bevegelser
- Jonglering (begynn med to baller)

**Balanse og reaksjon**:
- Stå på ett bein og fange ball
- Reaksjonsøvelser med partner
- Balansegang med lukkede øyne

**Tips**:
- Tren koordinasjon når du er uthvilt
- Varier øvelsene ofte
- Øk vanskelighetsgraden gradvis`,
    },
    {
      id: 'kroppsoving-7-1-2-tip-1',
      type: 'tip',
      title: 'Kombiner utholdenhet og koordinasjon',
      content: `Mange aktiviteter trener både utholdenhet og koordinasjon samtidig. Dans, kampsport, lagspill og hinderløp er gode eksempler. Slik får du mye ut av treningen!`,
    },
    {
      id: 'kroppsoving-7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på aerob og anaerob utholdenhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Aerob bruker oksygen (f.eks. jogging), anaerob klarer seg uten tilstrekkelig oksygen (f.eks. sprint)',
            multipleChoiceOptions: [
              'Aerob bruker oksygen (f.eks. jogging), anaerob klarer seg uten tilstrekkelig oksygen (f.eks. sprint)',
              'Aerob er for armer, anaerob er for bein',
              'De er det samme',
              'Aerob er raskere enn anaerob',
            ],
          },
        ],
        solution: 'Aerob utholdenhet bruker oksygen til å produsere energi og kan holdes lenge. Anaerob utholdenhet produserer energi uten nok oksygen og kan bare holdes kort tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner intervalltrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av intervalltrening.',
            solution: 'Veksling mellom perioder med hard innsats og hvile',
            multipleChoiceOptions: [
              'Veksling mellom perioder med hard innsats og hvile',
              'Å løpe i samme tempo hele tiden',
              'Bare å trene styrke',
              'Å hvile mellom treningsøkter',
            ],
          },
        ],
        solution: 'Intervalltrening veksler mellom perioder med høy intensitet og perioder med lavere intensitet eller hvile.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er koordinasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av koordinasjon.',
            solution: 'Evnen til å samordne bevegelser på en effektiv måte',
            multipleChoiceOptions: [
              'Evnen til å samordne bevegelser på en effektiv måte',
              'Evnen til å løfte tungt',
              'Evnen til å løpe fort',
              'Evnen til å hoppe høyt',
            ],
          },
        ],
        solution: 'Koordinasjon er samspillet mellom sanser, nervesystem og muskler som gjør at vi kan utføre bevegelser effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan regner du ut din omtrentlige makspuls?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig formel for makspuls.',
            solution: '220 minus din alder',
            multipleChoiceOptions: [
              '220 minus din alder',
              'Din alder ganger 2',
              '100 pluss din alder',
              'Makspuls er alltid 150',
            ],
          },
        ],
        solution: 'Makspuls kan estimeres med formelen 220 minus alder. For en 13-åring blir det ca. 207 slag per minutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et intervallprogram',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv et enkelt intervallprogram du kan gjøre utendørs. Inkluder oppvarming, intervaller og nedtrapping.',
            solution: 'Eksempel: 5 min lett jogg som oppvarming, deretter 6x30 sekunder rask løping med 30 sekunder gange mellom, avslutt med 5 min rolig jogg.',
          },
        ],
        solution: 'Et godt intervallprogram har oppvarming, flere intervaller med hvile mellom, og en rolig avslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Lagidrett og individuelle idretter
// ============================================================================

export const CHAPTER_KROPPSOVING_7_2_1: TextbookChapter = {
  id: 'kroppsoving-7-2-1',
  courseId: 'kroppsoving-7',
  chapterNumber: '2.1',
  title: 'Lagidrett og spilleforståelse',
  description: 'Lær om strategi og taktikk i lagspill.',
  estimatedMinutes: 50,
  competenceGoals: [
    'delta i lagspill og samarbeide med andre',
    'bruke og utvikle regler i ulike aktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-7-2-1-intro',
      type: 'text',
      content: `I lagspill handler det ikke bare om å være teknisk god - du må også forstå spillet! Spilleforståelse betyr å lese situasjoner, forutse hva som vil skje, og ta gode valg. De beste lagspillerne er ofte ikke de raskeste eller sterkeste, men de som tenker smartest.`,
    },
    {
      id: 'kroppsoving-7-2-1-def-1',
      type: 'definition',
      title: 'Spilleforståelse',
      content: `Spilleforståelse er evnen til å lese spillsituasjoner, forutse handlinger og ta gode beslutninger i et lagspill. Det handler om å forstå både egne og motstanderens bevegelser.`,
    },
    {
      id: 'kroppsoving-7-2-1-def-2',
      type: 'definition',
      title: 'Taktikk',
      content: `Taktikk er planlagte måter å spille på for å oppnå et mål. Det kan være angrepstaktikk (hvordan score) eller forsvarstaktikk (hvordan hindre mål).`,
    },
    {
      id: 'kroppsoving-7-2-1-text-1',
      type: 'text',
      content: `**Grunnleggende spillprinsipper**

**I angrep (når ditt lag har ballen)**:
- **Skape bredde**: Spre laget utover for å lage rom
- **Skape dybde**: Ha spillere på ulike avstander fra mål
- **Støttespill**: Alltid ha en pasningsalternativ for ballholder
- **Bevegelse**: Stå aldri stille - løp deg fri

**I forsvar (når motstanderen har ballen)**:
- **Press**: Gå på ballholder og gjør det vanskelig
- **Sikring**: Dekk rom bak den som presser
- **Kompakthet**: Hold laget tett sammen
- **Kommunikasjon**: Rope og gi beskjeder

**Overganger**:
- **Fra forsvar til angrep**: Rask omstilling når dere vinner ballen
- **Fra angrep til forsvar**: Ikke bli stående når dere mister ballen`,
    },
    {
      id: 'kroppsoving-7-2-1-text-2',
      type: 'text',
      content: `**Forskjellige formasjoner**

**Fotball (11 mot 11)**:
- 4-4-2: Fire forsvarere, fire midtbanespillere, to spisser
- 4-3-3: Fire forsvarere, tre midtbanespillere, tre angripere
- 3-5-2: Tre forsvarere, fem midtbanespillere, to spisser

**Håndball (7 mot 7 inkl. keeper)**:
- 6-0 forsvar: Alle seks utespillere på linje
- 5-1 forsvar: Fem på linje, en spiller lengre ut
- Angrep: Strekspiller, kantspillere, bakspillere

**Basketball (5 mot 5)**:
- Point guard: Spillmaker, styrer angrepet
- Shooting guard: God skytter
- Small forward: Allrounder
- Power forward: Sterk, god under kurven
- Center: Høyest, spiller nær kurven

**Spillerroller**:
Ulike posisjoner har ulike oppgaver. Lær din posisjon godt, men forstå også hva lagkameratene skal gjøre!`,
    },
    {
      id: 'kroppsoving-7-2-1-tip-1',
      type: 'tip',
      title: 'Se opp og les spillet',
      content: `Prøv å ha "hodet oppe" så mye som mulig. Se hvor medspillere og motstandere er før du får ballen. Da kan du ta raskere og bedre avgjørelser.`,
    },
    {
      id: 'kroppsoving-7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr "å skape bredde" i angrep?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Å spre laget utover for å lage rom',
            multipleChoiceOptions: [
              'Å spre laget utover for å lage rom',
              'Å stå tett sammen',
              'Å løpe rett frem',
              'Å spille ballen bakover',
            ],
          },
        ],
        solution: 'Når laget sprer seg utover banen, blir det vanskeligere for forsvaret å dekke alle, og det skapes rom å spille i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de to hoveddelene av forsvarsspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de to viktigste elementene i forsvar.',
            solution: 'Press og sikring',
            multipleChoiceOptions: [
              'Press og sikring',
              'Løping og hopping',
              'Bredde og dybde',
              'Scoring og feiring',
            ],
          },
        ],
        solution: 'Press betyr å gå på ballholder, mens sikring betyr å dekke rommet bak for å fange opp pasninger eller gjennombrudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr 4-4-2 i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva tallene betyr.',
            solution: 'Fire forsvarere, fire midtbanespillere, to spisser',
            multipleChoiceOptions: [
              'Fire forsvarere, fire midtbanespillere, to spisser',
              'Fire mål, fire assist, to røde kort',
              'Bare formasjonen brukt i cupen',
              'Antall spillerbytter',
            ],
          },
        ],
        solution: 'Tallene viser hvordan utespillerne er plassert på banen, fra forsvar til angrep. Keeperen regnes ikke med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er kommunikasjon viktig i lagspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste grunnen.',
            solution: 'For å koordinere bevegelser og unngå misforståelser',
            multipleChoiceOptions: [
              'For å koordinere bevegelser og unngå misforståelser',
              'For å skremme motstanderen',
              'Fordi det er en regel',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'God kommunikasjon hjelper laget å jobbe sammen, unngå at to går på samme spiller, og gjøre raske overganger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv en angrepssituasjon',
        subTasks: [
          {
            label: 'a',
            task: 'Du har ballen på midtbanen i fotball. Beskriv hva du ser etter og hvilke valg du kan ta.',
            solution: 'Eksempel: Jeg ser etter medspillere i rom, om det er mulighet for å drible, eller om jeg bør spille tilbake. Jeg vurderer hvor motstanderne er og om det er løpemuligheter for spisser.',
          },
        ],
        solution: 'God spilleforståelse innebærer å scanne banen for alternativer og velge det som gir best mulighet for laget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_7_2_2: TextbookChapter = {
  id: 'kroppsoving-7-2-2',
  courseId: 'kroppsoving-7',
  chapterNumber: '2.2',
  title: 'Friidrett og turn',
  description: 'Lær grunnleggende teknikker i individuelle idretter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og gjennomføre øvelser i friidrett og turn',
    'trene på og utvikle teknikk i ulike øvelser',
  ],
  content: [
    {
      id: 'kroppsoving-7-2-2-intro',
      type: 'text',
      content: `Friidrett og turn er idretter der du konkurrerer med deg selv og dine egne grenser. I friidrett handler det om å løpe fortere, hoppe lengre eller høyere, og kaste lengst. I turn handler det om å mestre kroppen din i krevende øvelser. Begge idrettene bygger grunnleggende ferdigheter som er nyttige i mange andre idretter.`,
    },
    {
      id: 'kroppsoving-7-2-2-def-1',
      type: 'definition',
      title: 'Friidrett',
      content: `Friidrett er en samlebetegnelse for idretter som løp, hopp og kast. Det regnes som grunnlaget for all idrett fordi det trener fundamentale bevegelser som løping, hopping og kasting.`,
    },
    {
      id: 'kroppsoving-7-2-2-def-2',
      type: 'definition',
      title: 'Turn',
      content: `Turn (gymnastikk) er en idrett som innebærer øvelser på apparater og gulv, med fokus på styrke, smidighet, balanse og koordinasjon. Det inkluderer øvelser som rulle, hodestående og hjul.`,
    },
    {
      id: 'kroppsoving-7-2-2-text-1',
      type: 'text',
      content: `**Friidrett - Løp**

**Sprint (60m, 100m)**:
- Eksplosiv start fra startblokk
- Korte, raske skritt i starten
- Lengre skritt når du kommer i fart
- Hold kroppen lett fremoverlent
- Pump med armene

**Mellomdistanse (800m, 1500m)**:
- Finn riktig tempo fra start
- Ikke gå ut for hardt
- Spar krefter til siste runde
- Jevn rytme i pustingen

**Langdistanse (3000m+)**:
- Kontrollert tempo
- Økonomisk løpestil
- Mental utholdenhet er viktig

**Friidrett - Hopp**

**Lengdehopp**:
1. Tilløp: Akselerere mot brettet
2. Satsen: Kraft oppover og fremover fra ett bein
3. Svev: Trekk beina mot brystet eller "gå" i lufta
4. Landing: Land med begge føtter, fall fremover

**Høydehopp (Fosbury Flop)**:
1. Buet tilløp fra siden
2. Sats på ytterste fot
3. Roter kroppen i lufta
4. Krum ryggen over lista
5. Land på ryggen på matten`,
    },
    {
      id: 'kroppsoving-7-2-2-text-2',
      type: 'text',
      content: `**Friidrett - Kast**

**Kulestøt**:
- Hold kulen mot halsen
- Stå sidelengs i ringen
- Skyv fra bein og hofte
- Strekk armen eksplosivt
- Støt, ikke kast!

**Turn - Grunnøvelser**

**Fremoverrulle**:
1. Start stående med armene opp
2. Bøy deg ned og sett hendene i gulvet
3. Bøy nakken inn og rull over skuldrene
4. Trekk knærne mot brystet
5. Reis deg opp

**Bakoverrulle**:
1. Start sittende eller stående
2. Sett deg/rull bakover
3. Plasser hendene ved skuldrene
4. Rull over og press deg opp
5. Stå opp

**Hodestående**:
- Lag trekant med hode og hender
- Løft beina sakte opp
- Hold balansen med kjernemusklene
- Bruk vegg som støtte til å begynne med

**Hjul**:
1. Start med armene opp
2. Sett første hånd ned
3. Spark opp med første bein
4. Sett andre hånd ned
5. Land på første bein, så andre
6. Stå opp`,
    },
    {
      id: 'kroppsoving-7-2-2-warning-1',
      type: 'warning',
      title: 'Sikkerhet i turn',
      content: `Gjør alltid turnøvelser på mykt underlag (matter). Ha hjelp av lærer eller spotter ved vanskelige øvelser. Ikke prøv øvelser du ikke er klar for uten hjelp.`,
    },
    {
      id: 'kroppsoving-7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er viktig i starten av et sprintløp?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig teknikk for sprintstart.',
            solution: 'Eksplosiv start med korte, raske skritt',
            multipleChoiceOptions: [
              'Eksplosiv start med korte, raske skritt',
              'Lange, rolige skritt fra start',
              'Starte sakte og øke tempoet gradvis',
              'Holde overkroppen helt rett',
            ],
          },
        ],
        solution: 'I sprint er det viktig med en eksplosiv start og korte, raske skritt til du kommer i fart. Kroppen bør være lett fremoverlent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de fire fasene i lengdehopp?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig rekkefølge på fasene.',
            solution: 'Tilløp, sats, svev, landing',
            multipleChoiceOptions: [
              'Tilløp, sats, svev, landing',
              'Hopp, fly, lande, gå',
              'Start, løp, hopp, slutt',
              'Sving, spark, land, rull',
            ],
          },
        ],
        solution: 'Lengdehopp består av tilløp (bygge fart), sats (hoppe fra brettet), svev (i lufta) og landing (i sandgropa).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på kulestøt og kast?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av kulestøt.',
            solution: 'Kulen skyves fra halsen med en støtende bevegelse',
            multipleChoiceOptions: [
              'Kulen skyves fra halsen med en støtende bevegelse',
              'Kulen kastes med sving over hodet',
              'Kulen trilles langs bakken',
              'Det er ingen forskjell',
            ],
          },
        ],
        solution: 'I kulestøt holder man kulen mot halsen og støter den ut med en eksplosiv armbevegelse. Det er ikke tillatt å kaste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er viktig når du gjør en fremoverrulle?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste sikkerhetspunktet.',
            solution: 'Bøye nakken inn og rulle over skuldrene',
            multipleChoiceOptions: [
              'Bøye nakken inn og rulle over skuldrene',
              'Holde hodet opp',
              'Strekke beina ut',
              'Rulle over hodet',
            ],
          },
        ],
        solution: 'Ved å bøye nakken inn og rulle over skuldrene (ikke hodet), beskytter du nakken og får en kontrollert rulle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en friidrettsøvelse',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en friidrettsøvelse (løp, hopp eller kast) og beskriv teknikken steg for steg.',
            solution: 'Eksempel for høydehopp: 1) Buet tilløp fra siden, 2) Sats på ytterste fot, 3) Roter kroppen i lufta, 4) Krum ryggen over lista, 5) Land på ryggen på matten.',
          },
        ],
        solution: 'En god teknikkbeskrivelse inkluderer alle fasene i øvelsen og viktige detaljer for hver fase.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Friluftsliv
// ============================================================================

export const CHAPTER_KROPPSOVING_7_3_1: TextbookChapter = {
  id: 'kroppsoving-7-3-1',
  courseId: 'kroppsoving-7',
  chapterNumber: '3.1',
  title: 'Planlegging av turer',
  description: 'Lær å planlegge og gjennomføre turer i naturen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre turer i nærmiljøet',
    'bruke kart og kompass til orientering',
  ],
  content: [
    {
      id: 'kroppsoving-7-3-1-intro',
      type: 'text',
      content: `Å planlegge en tur handler om mer enn bare å bestemme hvor du skal gå. God planlegging gjør turen tryggere og morsommere. Når du kan planlegge turer selv, åpner det for mange opplevelser i naturen - enten det er en dagstur i nærmiljøet eller en lengre fjelltur.`,
    },
    {
      id: 'kroppsoving-7-3-1-def-1',
      type: 'definition',
      title: 'Turplanlegging',
      content: `Turplanlegging innebærer å velge rute, sjekke vær og føre, pakke riktig utstyr, og informere andre om turen. God planlegging reduserer risiko og øker sjansen for en vellykket tur.`,
    },
    {
      id: 'kroppsoving-7-3-1-text-1',
      type: 'text',
      content: `**Fjellvettreglene**

Fjellvettreglene er råd utviklet av DNT og Røde Kors for trygg ferdsel i fjellet:

1. **Planlegg turen og meld fra hvor du går**
2. **Tilpass turen etter evne og forhold**
3. **Ta hensyn til vær- og skredvarsel**
4. **Vær forberedt på uvær og kulde, selv på korte turer**
5. **Ta med nødvendig utstyr for å kunne hjelpe deg selv og andre**
6. **Ta trygge veivalg, gjenkjenn skredfarlig terreng og usikker is**
7. **Bruk kart og kompass, vit alltid hvor du er**
8. **Vend i tide, det er ingen skam å snu**
9. **Spar på kreftene og søk ly om nødvendig**

**Disse reglene gjelder også for turer i skogen og nærmiljøet!**`,
    },
    {
      id: 'kroppsoving-7-3-1-text-2',
      type: 'text',
      content: `**Planlegging steg for steg**

**1. Velg mål og rute**
- Hvor vil du gå?
- Hvor lang er ruten?
- Hvor krevende er terrenget?
- Er ruten merket?
- Finnes det alternative ruter?

**2. Sjekk forhold**
- Været (yr.no, storm.no)
- Føreforhold (skredvarsel om vinteren: varsom.no)
- Dagslys (når blir det mørkt?)

**3. Tilpass etter gruppa**
- Hvem er med?
- Erfaring og kondisjon
- Spesielle behov

**4. Pakk sekken**
- Mat og drikke (mer enn du tror du trenger)
- Ekstra klær (ull innerst!)
- Førstehjelpsutstyr
- Kart og kompass
- Hodelykt
- Mobiltelefon (ladet!)

**5. Meld fra**
- Si fra til noen hjemme
- Oppgi rute og forventet hjemkomst
- Hva skal de gjøre om de ikke hører fra deg?`,
    },
    {
      id: 'kroppsoving-7-3-1-tip-1',
      type: 'tip',
      title: 'Beregn tidsbruk',
      content: `En tommelfingerregel er 4-5 km i timen på flat sti, pluss 1 time per 300 høydemeter oppover. Legg til pauser. Det er bedre å planlegge for lang tid og komme tidlig hjem enn å bli forsinket i mørket.`,
    },
    {
      id: 'kroppsoving-7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken av fjellvettreglene handler om å være ydmyk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg regelen som handler om å vurdere å snu.',
            solution: 'Vend i tide, det er ingen skam å snu',
            multipleChoiceOptions: [
              'Vend i tide, det er ingen skam å snu',
              'Planlegg turen og meld fra',
              'Ta med nødvendig utstyr',
              'Bruk kart og kompass',
            ],
          },
        ],
        solution: 'Det er viktig å vite at det å snu før du når målet kan være den beste avgjørelsen. Det viser god dømmekraft, ikke svakhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor kan du sjekke skredvarselet i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig nettside for skredvarsel.',
            solution: 'varsom.no',
            multipleChoiceOptions: [
              'varsom.no',
              'facebook.com',
              'google.no',
              'vg.no',
            ],
          },
        ],
        solution: 'Varsom.no er Norges offisielle side for snøskred-, flom- og jordskredvarsel. Den bør sjekkes før vinterturer i fjellet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig å melde fra om turen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen til å melde fra.',
            solution: 'Slik at noen kan varsle hjelp om du ikke kommer tilbake',
            multipleChoiceOptions: [
              'Slik at noen kan varsle hjelp om du ikke kommer tilbake',
              'Fordi det er en regel',
              'For å få lov til å gå',
              'For å vise frem på sosiale medier',
            ],
          },
        ],
        solution: 'Om noe går galt og du ikke kommer hjem til avtalt tid, kan de du har meldt fra til varsle hjelpemannskaper som vet hvor de skal lete.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor fort kan du regne med å gå på flat sti?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg omtrentlig ganghastighet på flat sti.',
            solution: '4-5 km i timen',
            multipleChoiceOptions: [
              '4-5 km i timen',
              '10-15 km i timen',
              '1 km i timen',
              '20 km i timen',
            ],
          },
        ],
        solution: 'På flat sti regner man med 4-5 km i timen. Bratt terreng, tungt underlag og tung sekk reduserer farten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Planlegg en tur',
        subTasks: [
          {
            label: 'a',
            task: 'Planlegg en dagstur i nærmiljøet ditt. Beskriv: 1) Mål og rute, 2) Hva du ville pakket, 3) Hvem du ville meldt fra til og hva du ville sagt.',
            solution: 'Eksempel: Tur til Vettakollen (Oslo). Rute: T-bane til Sognsvann, sti til toppen (ca. 3 km), ned igjen. Pakker: Matpakke, vann, ekstra genser, mobil, kart. Melder fra til foreldre: rute, ca. 4 timer, ring meg hvis jeg ikke er hjemme til kl. 18.',
          },
        ],
        solution: 'En god turplan inkluderer konkret informasjon om rute, utstyr og kommunikasjon med hjemmet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_7_3_2: TextbookChapter = {
  id: 'kroppsoving-7-3-2',
  courseId: 'kroppsoving-7',
  chapterNumber: '3.2',
  title: 'Orientering med kart og kompass',
  description: 'Lær å finne veien ved hjelp av kart og kompass.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kart og kompass til orientering',
    'orientere seg i ukjent terreng',
  ],
  content: [
    {
      id: 'kroppsoving-7-3-2-intro',
      type: 'text',
      content: `Selv med GPS og mobilapper kan det være avgjørende å kunne bruke kart og kompass. Batterier går tomme, og mobildekning finnes ikke overalt. Å mestre orientering gir deg trygghet og frihet til å utforske nye steder.`,
    },
    {
      id: 'kroppsoving-7-3-2-def-1',
      type: 'definition',
      title: 'Orientering',
      content: `Orientering er kunsten å finne veien fra ett sted til et annet ved hjelp av kart, kompass og terrengforståelse. Det er også en idrett der man skal finne poster i terrenget på kortest mulig tid.`,
    },
    {
      id: 'kroppsoving-7-3-2-def-2',
      type: 'definition',
      title: 'Høydekurver',
      content: `Høydekurver er linjer på kartet som forbinder punkter med samme høyde over havet. Tette kurver betyr bratt terreng, spredte kurver betyr slakt terreng.`,
    },
    {
      id: 'kroppsoving-7-3-2-text-1',
      type: 'text',
      content: `**Kartlesing**

**Kartets målestokk**
- 1:50 000 betyr at 1 cm på kartet = 500 m i virkeligheten
- 1:25 000 betyr at 1 cm på kartet = 250 m i virkeligheten
- 1:10 000 (orienteringskart) betyr at 1 cm = 100 m

**Farger på kartet**:
- **Blått**: Vann (innsjøer, elver, bekker, myr)
- **Grønt**: Tett vegetasjon (skog du ikke lett kan gå gjennom)
- **Hvitt**: Løpbar skog (lett å gå gjennom)
- **Gult**: Åpen mark (eng, beite, over tregrensen)
- **Brunt**: Høydekurver og terrengformer
- **Svart**: Stier, veier, bygninger, steiner

**Høydekurver**:
- Viser høydeforskjell (ofte 5 eller 20 meter mellom)
- Tette kurver = bratt
- Spredte kurver = slakt
- Kurver som peker innover = dal/bekkedrag
- Kurver som peker utover = rygg/høyde`,
    },
    {
      id: 'kroppsoving-7-3-2-text-2',
      type: 'text',
      content: `**Bruk av kompass**

**Kompassets deler**:
- **Kompasshus**: Den runde delen med graderinger (0-360°)
- **Kompassnål**: Rød del peker alltid mot magnetisk nord
- **Rettningslinjer**: Linjer i bunnen av kompasshuset
- **Peilepil**: Pilen på kompassplaten som viser retning

**Orientere kartet**:
1. Legg kartet flatt
2. Legg kompasset på kartet med rettningslinjene langs nord-sør-linjene
3. Drei kartet til kompassnålen peker samme vei som nord på kartet
4. Nå er kartet orientert - det viser samme retning som virkeligheten

**Ta ut en peiling**:
1. Legg kompasset på kartet
2. Legg langsiden fra der du er til dit du skal
3. Drei kompasshuset til rettningslinjene er parallelle med nord-sør
4. Løft kompasset og hold det vannrett foran deg
5. Drei deg selv til nålen ligger i "hytta" (nordmerket)
6. Gå i retningen peilepilen viser

**Gå på peiling**:
- Sikt på et punkt i terrenget i peilingsretningen
- Gå til punktet, sikt på nytt punkt
- Fortsett til du er fremme`,
    },
    {
      id: 'kroppsoving-7-3-2-tip-1',
      type: 'tip',
      title: 'Sted-kart-sted',
      content: `Øv på å se noe i terrenget, finne det på kartet, og så se tilbake i terrenget. Dette kaller vi sted-kart-sted og er grunnleggende for god orientering.`,
    },
    {
      id: 'kroppsoving-7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr målestokken 1:25 000?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på målestokken.',
            solution: '1 cm på kartet = 250 meter i virkeligheten',
            multipleChoiceOptions: [
              '1 cm på kartet = 250 meter i virkeligheten',
              '1 km på kartet = 25 km i virkeligheten',
              '1 meter på kartet = 25 000 meter i virkeligheten',
              'Kartet er 25 000 cm stort',
            ],
          },
        ],
        solution: 'Målestokken 1:25 000 betyr at alt på kartet er 25 000 ganger mindre enn i virkeligheten. 1 cm blir da 250 m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva viser tette høydekurver på kartet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva tette høydekurver betyr.',
            solution: 'Bratt terreng',
            multipleChoiceOptions: [
              'Bratt terreng',
              'Flatt terreng',
              'Vann',
              'Skog',
            ],
          },
        ],
        solution: 'Når høydekurvene ligger tett, betyr det at høyden endrer seg mye på kort avstand - altså at terrenget er bratt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva peker den røde kompassnålen mot?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva kompassnålen peker mot.',
            solution: 'Magnetisk nord',
            multipleChoiceOptions: [
              'Magnetisk nord',
              'Geografisk nord (Nordpolen)',
              'Sør',
              'Sola',
            ],
          },
        ],
        solution: 'Kompassnålen peker mot magnetisk nord, som er litt forskjellig fra geografisk nord (Nordpolen). Denne forskjellen kalles misvisning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er det første du gjør når du skal bruke kart og kompass sammen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg første steg.',
            solution: 'Orientere kartet så det viser samme retning som terrenget',
            multipleChoiceOptions: [
              'Orientere kartet så det viser samme retning som terrenget',
              'Løpe mot målet',
              'Sette kompasset i lomma',
              'Brette kartet sammen',
            ],
          },
        ],
        solution: 'Det første steget er å orientere kartet. Når kartet viser samme retning som virkeligheten, er det mye lettere å lese terrenget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv hvordan du tar ut en peiling',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar steg for steg hvordan du bruker kompasset til å finne retningen fra der du står til dit du skal.',
            solution: '1) Legg kompasset på kartet med langsiden fra start til mål. 2) Drei kompasshuset til linjene er parallelle med kartets nord-sør-linjer. 3) Løft kompasset og hold det vannrett. 4) Drei deg til nålen peker på nord-merket. 5) Gå i retningen peilepilen viser.',
          },
        ],
        solution: 'En peiling tas ut ved å bruke kartet for å stille inn riktig retning på kompasset, for så å følge peilepilen i terrenget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Kropp, identitet og fair play
// ============================================================================

export const CHAPTER_KROPPSOVING_7_4_1: TextbookChapter = {
  id: 'kroppsoving-7-4-1',
  courseId: 'kroppsoving-7',
  chapterNumber: '4.1',
  title: 'Kropp og selvbilde',
  description: 'Lær om kroppen i utvikling og hvordan ha et sunt forhold til egen kropp.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over hvordan ulike fysiske aktiviteter og kroppsidealer påvirker selvbilde',
    'forstå kroppens utvikling i puberteten',
  ],
  content: [
    {
      id: 'kroppsoving-7-4-1-intro',
      type: 'text',
      content: `I 7. klasse går kroppen din gjennom store forandringer. Puberteten gjør at du vokser, får nye former og kanskje føler deg annerledes enn før. Dette er helt normalt, men det kan også påvirke hvordan du ser på deg selv. La oss snakke om kropp, selvbilde og hvordan du kan ha det bra med deg selv.`,
    },
    {
      id: 'kroppsoving-7-4-1-def-1',
      type: 'definition',
      title: 'Selvbilde',
      content: `Selvbilde er hvordan du ser på deg selv - både utseende, evner og personlighet. Et positivt selvbilde betyr ikke at du synes du er perfekt, men at du aksepterer og er fornøyd med den du er.`,
    },
    {
      id: 'kroppsoving-7-4-1-def-2',
      type: 'definition',
      title: 'Kroppspress',
      content: `Kroppspress er presset vi kan føle til å se ut på en bestemt måte. Det kan komme fra sosiale medier, venner, reklame eller samfunnet generelt.`,
    },
    {
      id: 'kroppsoving-7-4-1-text-1',
      type: 'text',
      content: `**Puberteten og kroppens forandringer**

**For alle**:
- Kroppen vokser - noen får vekstspurter
- Svetter mer og får kroppslukt
- Får kviser
- Humøret kan svinge
- Blir mer bevisst på egen kropp

**Individuelle forskjeller**:
- Alle utvikler seg i ulikt tempo
- Noen starter tidlig, andre sent
- Begge deler er helt normalt
- Sammenligning med andre er ofte meningsløst

**Hva påvirker selvbildet?**
- Sosiale medier (ofte redigerte bilder)
- Venner og familie
- Idrettsprestasjoner
- Kroppsidealer i samfunnet
- Egne tanker og tolkninger`,
    },
    {
      id: 'kroppsoving-7-4-1-text-2',
      type: 'text',
      content: `**Et sunt forhold til kroppen**

**Fokus på funksjon, ikke utseende**:
- Hva kan kroppen din gjøre?
- Den bærer deg gjennom dagen
- Den lar deg løpe, hoppe og leke
- Den reparerer seg selv når du er syk
- Den tilpasser seg trening

**Sunne tankevaner**:
- Ikke sammenlign deg med andre
- Sosiale medier viser ikke virkeligheten
- Snakk positivt om deg selv
- Finn ting du liker med kroppen din
- Vær takknemlig for det kroppen kan gjøre

**Når noe er vanskelig**:
- Snakk med noen du stoler på
- Det er normalt å ha dårlige dager
- Alle strever med selvbildet noen ganger
- Profesjonell hjelp finnes hvis du trenger det

**Aktivitet og selvbilde**:
- Fysisk aktivitet frigjør gledeshormoner
- Å mestre noe gir selvtillit
- Finn aktiviteter du liker
- Konkurranse er ikke alt - bevegelsesglede teller mest`,
    },
    {
      id: 'kroppsoving-7-4-1-note-1',
      type: 'note',
      title: 'Husk',
      content: `Kroppen din er unik. Den vil aldri se ut som noen andres, og det er helt greit. Det viktigste er ikke hvordan kroppen ser ut, men at den fungerer og at du har det bra med den.`,
    },
    {
      id: 'kroppsoving-7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er selvbilde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av selvbilde.',
            solution: 'Hvordan du ser på deg selv',
            multipleChoiceOptions: [
              'Hvordan du ser på deg selv',
              'Hvordan andre ser på deg',
              'Hvordan du ser ut i speilet',
              'Et bilde av deg selv',
            ],
          },
        ],
        solution: 'Selvbilde handler om dine egne tanker og følelser om deg selv, ikke hva andre mener eller hvordan du faktisk ser ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er viktig å huske om utviklingstempo i puberteten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig påstand om utvikling.',
            solution: 'Alle utvikler seg i ulikt tempo, og begge deler er normalt',
            multipleChoiceOptions: [
              'Alle utvikler seg i ulikt tempo, og begge deler er normalt',
              'Alle bør utvikle seg likt',
              'Tidlig utvikling er best',
              'Sen utvikling er et problem',
            ],
          },
        ],
        solution: 'Det er store individuelle forskjeller i når puberteten starter og hvor fort den går. Alt fra tidlig til sen utvikling er normalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor kan sosiale medier gi et feil bilde av virkeligheten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen til at sosiale medier ikke viser virkeligheten.',
            solution: 'Bildene er ofte redigerte og viser bare det beste',
            multipleChoiceOptions: [
              'Bildene er ofte redigerte og viser bare det beste',
              'Alle på sosiale medier lyver',
              'Sosiale medier er forbudt',
              'Det er ingen grunn',
            ],
          },
        ],
        solution: 'På sosiale medier viser folk gjerne bare sine beste øyeblikk, og mange bilder er redigert med filter. Dette gir et urealistisk bilde av hvordan folk egentlig ser ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en sunn måte å tenke om kroppen på?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den sunneste tankemåten.',
            solution: 'Fokusere på hva kroppen kan gjøre fremfor hvordan den ser ut',
            multipleChoiceOptions: [
              'Fokusere på hva kroppen kan gjøre fremfor hvordan den ser ut',
              'Sammenligne seg med andre hele tiden',
              'Prøve å se ut som folk på sosiale medier',
              'Tenke negativt om kroppen sin',
            ],
          },
        ],
        solution: 'Ved å fokusere på kroppens funksjon - hva den kan gjøre for deg - bygger du et mer positivt og realistisk forhold til kroppen din.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Refleksjon: Nevn tre ting kroppen din kan gjøre som du er takknemlig for.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv ned tre ting kroppen din kan gjøre som du setter pris på. Forklar kort hvorfor.',
            solution: 'Eksempel: 1) Løpe - jeg kan spille fotball med venner, 2) Se - jeg kan nyte vakker natur, 3) Klemme - jeg kan vise omsorg for de jeg er glad i.',
          },
        ],
        solution: 'Å fokusere på hva kroppen kan gjøre bygger takknemlighet og et positivt forhold til egen kropp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_7_4_2: TextbookChapter = {
  id: 'kroppsoving-7-4-2',
  courseId: 'kroppsoving-7',
  chapterNumber: '4.2',
  title: 'Fair play og inkludering',
  description: 'Lær om betydningen av fair play, respekt og inkludering i idrett.',
  estimatedMinutes: 45,
  competenceGoals: [
    'praktisere fair play ved å inkludere andre og vise respekt',
    'bidra til et trygt og inkluderende miljø i aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-7-4-2-intro',
      type: 'text',
      content: `Fair play handler om mer enn å følge reglene - det handler om å behandle andre slik du selv vil bli behandlet. I idrett og aktivitet møter vi mennesker med ulik bakgrunn og ulike ferdigheter. Hvordan vi oppfører oss mot hverandre påvirker om alle får en god opplevelse.`,
    },
    {
      id: 'kroppsoving-7-4-2-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play er å opptre rettferdig, respektfullt og inkluderende i idrett og aktivitet. Det innebærer å følge regler, respektere motstandere og dommere, og behandle alle med verdighet.`,
    },
    {
      id: 'kroppsoving-7-4-2-def-2',
      type: 'definition',
      title: 'Inkludering',
      content: `Inkludering betyr at alle får delta og føle seg velkommen, uavhengig av ferdigheter, bakgrunn eller andre forskjeller. Et inkluderende miljø tilpasser seg slik at alle kan bidra.`,
    },
    {
      id: 'kroppsoving-7-4-2-text-1',
      type: 'text',
      content: `**Fair play i praksis**

**Respekt for regler**:
- Følg spillets regler
- Innrøm hvis du brøt en regel
- Aksepter dommerens avgjørelser
- Ikke prøv å lure andre

**Respekt for motstandere**:
- Motstandere er ikke fiender
- Uten dem ville det ikke vært noe spill
- Gratulerer med gode prestasjoner
- Ikke provoserer eller mobber

**Respekt for lagkamerater**:
- Oppmuntre hverandre
- Ikke kritiserer ved feil
- Del æren for seier
- Støtt hverandre ved tap

**Respekt for dommere**:
- De gjør så godt de kan
- Alle gjør feil noen ganger
- Diskuter saklig, ikke sint
- Takk for innsatsen

**Vinne med ydmykhet**:
- Ikke skryt eller ert taperne
- Anerkjenn motstanderens innsats
- Vis takknemlighet

**Tape med verdighet**:
- Gratulerer vinneren
- Ikke skylde på andre
- Lær av nederlaget
- Prøv igjen neste gang`,
    },
    {
      id: 'kroppsoving-7-4-2-text-2',
      type: 'text',
      content: `**Inkludering - alle skal med**

**Hvorfor inkludering?**
- Alle fortjener å delta
- Mangfold gjør aktiviteten rikere
- Vi lærer av hverandre
- Det er rett og riktig

**Hvem kan føle seg utenfor?**
- De som ikke er så gode teknisk
- De som er nye
- De som er annerledes på noen måte
- De som er stille eller sjenerte

**Slik inkluderer du**:
- Inviter andre med
- Pass ballen til alle, ikke bare de beste
- Oppmuntre forsøk, ikke bare suksess
- Stå opp mot ekskludering og mobbing
- Tilpass aktiviteten om nødvendig

**Tilpasning av aktiviteter**:
- Gjør reglene enklere
- Gi noen fordeler (handicap)
- Lag jevne lag
- Bytt på roller og posisjoner

**Alle har et ansvar**:
- Læreren/treneren leder an
- Men alle deltakere må bidra
- Si fra hvis noen holdes utenfor
- Vær den som tar initiativ`,
    },
    {
      id: 'kroppsoving-7-4-2-note-1',
      type: 'note',
      title: 'Husk',
      content: `Du husker sjelden hvem som vant en lek i gymtimen for ti år siden. Men du husker hvordan det føltes å bli inkludert - eller ekskludert. Hvordan du behandler andre setter spor.`,
    },
    {
      id: 'kroppsoving-7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste definisjonen.',
            solution: 'Å opptre rettferdig, respektfullt og inkluderende',
            multipleChoiceOptions: [
              'Å opptre rettferdig, respektfullt og inkluderende',
              'Å vinne for enhver pris',
              'Å følge alle regler slavisk',
              'Å være best',
            ],
          },
        ],
        solution: 'Fair play handler om rettferdighet, respekt og inkludering - ikke bare å følge reglene, men å behandle andre godt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør du gjøre når laget ditt vinner?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppførsel ved seier.',
            solution: 'Feire uten å erte taperne og anerkjenne motstanderens innsats',
            multipleChoiceOptions: [
              'Feire uten å erte taperne og anerkjenne motstanderens innsats',
              'Skryte og danse foran taperne',
              'Si at motstanderne var dårlige',
              'Late som ingenting skjedde',
            ],
          },
        ],
        solution: 'En god vinner feirer med ydmykhet, takker motstanderne for kampen og skryter ikke overdrevent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan kan du inkludere noen som ikke får ballen så ofte?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste måten å inkludere.',
            solution: 'Passe ballen til dem og oppmuntre når de prøver',
            multipleChoiceOptions: [
              'Passe ballen til dem og oppmuntre når de prøver',
              'Ignorere dem og bare spille med de beste',
              'Si at de bør trene mer hjemme',
              'La dem stå i mål hver gang',
            ],
          },
        ],
        solution: 'Ved å aktivt involvere alle og gi positiv tilbakemelding, føler alle seg som en del av laget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du gjøre hvis dommeren gjør en avgjørelse du er uenig i?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig reaksjon.',
            solution: 'Akseptere avgjørelsen og fortsette å spille',
            multipleChoiceOptions: [
              'Akseptere avgjørelsen og fortsette å spille',
              'Rope og klage høylytt',
              'Nekte å spille videre',
              'Fortelle alle at dommeren er dårlig',
            ],
          },
        ],
        solution: 'Dommere gjør feil, men respekt for avgjørelser er en viktig del av fair play. Man kan snakke rolig etterpå hvis man er uenig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-7-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-7-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Case: Hva ville du gjort?',
        subTasks: [
          {
            label: 'a',
            task: 'Du merker at en elev i klassen aldri blir valgt på lag, og ser lei seg ut. Hva kunne du gjort for å forbedre situasjonen?',
            solution: 'Eksempel: Jeg kunne foreslå å være på lag med personen, oppmuntre andre til å inkludere, foreslå en annen måte å dele lag på (f.eks. trekke lodd), eller snakke med læreren om problemet.',
          },
        ],
        solution: 'Det krever mot å stå opp for andre, men det kan gjøre stor forskjell for noen som føler seg utenfor.',
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

export const KROPPSOVING_7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_7_1_1,
  CHAPTER_KROPPSOVING_7_1_2,
  CHAPTER_KROPPSOVING_7_2_1,
  CHAPTER_KROPPSOVING_7_2_2,
  CHAPTER_KROPPSOVING_7_3_1,
  CHAPTER_KROPPSOVING_7_3_2,
  CHAPTER_KROPPSOVING_7_4_1,
  CHAPTER_KROPPSOVING_7_4_2,
];

/**
 * Mat og helse 5. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for mat og helse på 5. trinn
 * Målgruppe: 10-11 åringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Næringsstoffer
// ============================================================================

export const CHAPTER_MAT_5_1_1: TextbookChapter = {
  id: 'mat-5-1-1',
  courseId: 'mat-5',
  chapterNumber: '1.1',
  title: 'Næringsstoffer',
  description: 'Lær om hva kroppen trenger av næring for å fungere godt.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hvorfor kroppen trenger ulike næringsstoffer',
  ],
  content: [
    {
      id: 'mat-5-1-1-intro',
      type: 'text',
      content: `Visste du at maten du spiser er som drivstoff for kroppen din? Akkurat som en bil trenger bensin for å kjøre, trenger kroppen din mat for å ha energi til å leke, lære og vokse!`,
    },
    {
      id: 'mat-5-1-1-def-1',
      type: 'definition',
      title: 'Næringsstoffer',
      content: `Næringsstoffer er de viktige stoffene i maten som kroppen trenger. De gir oss energi, hjelper oss å vokse, og holder oss friske.`,
    },
    {
      id: 'mat-5-1-1-text-1',
      type: 'text',
      content: `**De viktigste næringsstoffene**

Kroppen trenger mange ulike næringsstoffer. Her er de viktigste:

**Karbohydrater - Gir deg energi**
- Finnes i brød, pasta, ris, poteter og frukt
- Gir kroppen kraft til å bevege seg og tenke
- Tenk på karbohydrater som "strøm" til kroppen

**Proteiner - Bygger kroppen**
- Finnes i kjøtt, fisk, egg, melk og bønner
- Hjelper musklene å vokse og bli sterke
- Reparerer kroppen når du slår deg`,
    },
    {
      id: 'mat-5-1-1-text-2',
      type: 'text',
      content: `**Fett - Lagrer energi**
- Finnes i smør, olje, nøtter og ost
- Hjelper kroppen å ta opp viktige vitaminer
- Holder deg varm og beskytter organene dine

**Vitaminer og mineraler - Holder deg frisk**
- Finnes i frukt, grønnsaker og melk
- Hjelper kroppen å fungere riktig
- Gjør at du ikke blir syk så lett`,
    },
    {
      id: 'mat-5-1-1-tip-1',
      type: 'tip',
      title: 'Spis regnbuens farger!',
      content: `Prøv å spise frukt og grønnsaker i mange forskjellige farger hver dag. Røde tomater, oransje gulrøtter, grønn brokkoli og blå blåbær gir deg ulike vitaminer!`,
    },
    {
      id: 'mat-5-1-1-text-3',
      type: 'text',
      content: `**Vann - Det viktigste av alt**

Kroppen din består av over halvparten vann! Vann er viktig fordi det:
- Frakter næringsstoffer rundt i kroppen
- Holder temperaturen din riktig
- Hjelper deg å tenke klart

Du bør drikke vann flere ganger om dagen, spesielt når du er aktiv eller det er varmt.`,
    },
    {
      id: 'mat-5-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilket næringsstoff gir kroppen energi til å leke og bevege seg?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket næringsstoff gir kroppen energi til å leke og bevege seg?',
            solution: 'Karbohydrater',
            multipleChoiceOptions: ['Karbohydrater', 'Proteiner', 'Vann', 'Vitaminer'],
          },
        ],
        solution: 'Karbohydrater er kroppens viktigste energikilde og gir deg kraft til aktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva hjelper proteiner kroppen med?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva hjelper proteiner kroppen med?',
            solution: 'Å bygge muskler og vokse',
            multipleChoiceOptions: ['Å bygge muskler og vokse', 'Å sove godt', 'Å se i mørket', 'Å lukte mat'],
          },
        ],
        solution: 'Proteiner er byggesteinene som hjelper kroppen å vokse og reparere seg selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor finner du mye proteiner?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor finner du mye proteiner?',
            solution: 'I egg, kjøtt og fisk',
            multipleChoiceOptions: ['I egg, kjøtt og fisk', 'I godteri', 'I brus', 'I chips'],
          },
        ],
        solution: 'Egg, kjøtt, fisk, melk og bønner er alle gode kilder til protein.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å drikke vann?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det viktig å drikke vann?',
            solution: 'Fordi kroppen trenger vann for å fungere',
            multipleChoiceOptions: ['Fordi kroppen trenger vann for å fungere', 'Fordi det smaker godt', 'Fordi det er gratis', 'Det er ikke viktig'],
          },
        ],
        solution: 'Kroppen består av mye vann, og vi trenger vann for å frakte næringsstoffer og holde riktig temperatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_5_1_2: TextbookChapter = {
  id: 'mat-5-1-2',
  courseId: 'mat-5',
  chapterNumber: '1.2',
  title: 'Et balansert kosthold',
  description: 'Lær hvordan du setter sammen et sunt og variert kosthold.',
  estimatedMinutes: 40,
  competenceGoals: [
    'sette sammen måltider som gir kroppen det den trenger',
  ],
  content: [
    {
      id: 'mat-5-1-2-intro',
      type: 'text',
      content: `Et balansert kosthold betyr at du spiser litt av alt det kroppen trenger. Det er som å bygge med legoklosser - du trenger mange forskjellige typer for å lage noe fint!`,
    },
    {
      id: 'mat-5-1-2-def-1',
      type: 'definition',
      title: 'Balansert kosthold',
      content: `Et balansert kosthold er når du spiser variert og får i deg alle næringsstoffene kroppen trenger i riktige mengder.`,
    },
    {
      id: 'mat-5-1-2-text-1',
      type: 'text',
      content: `**Tallerkenmodellen - En enkel guide**

Tallerkenmodellen viser deg hvordan du kan sette sammen et sunt måltid. Tenk deg en tallerken delt i tre deler:

- **Halve tallerkenen**: Grønnsaker (brokkoli, gulrot, salat)
- **En fjerdedel**: Karbohydrater (poteter, pasta, brød)
- **En fjerdedel**: Proteiner (kylling, fisk, egg, bønner)

I tillegg kan du ha et glass melk eller vann og gjerne litt frukt til dessert!`,
    },
    {
      id: 'mat-5-1-2-text-2',
      type: 'text',
      content: `**5 om dagen**

Visste du at du bør spise minst 5 porsjoner frukt og grønnsaker hver dag? En porsjon er for eksempel:
- Ett eple eller en banan
- En neve med bær
- En gulrot
- En håndfull med grønnsaker

**Tips for å få i deg 5 om dagen:**
- Ha frukt på frokostblandingen
- Ta med en gulrot i matpakken
- Spis grønnsaker til middag
- Ha frukt som mellommåltid`,
    },
    {
      id: 'mat-5-1-2-tip-1',
      type: 'tip',
      title: 'Frokost er viktig!',
      content: `Frokost gir deg energi til å konsentrere deg på skolen. En god frokost kan være grovt brød med ost og et glass melk, eller havregrøt med bær.`,
    },
    {
      id: 'mat-5-1-2-text-3',
      type: 'text',
      content: `**Gode og mindre gode valg**

Noen matvarer er bedre for kroppen enn andre:

**Spis mye av:**
- Grønnsaker og frukt
- Grove kornprodukter (grovt brød, havregryn)
- Fisk og magert kjøtt
- Melk og vann

**Spis mindre av:**
- Godteri og kaker
- Brus og saft med sukker
- Chips og annen snacks
- Pølser og hamburgere

Det er greit å spise godteri av og til, men ikke hver dag!`,
    },
    {
      id: 'mat-5-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Ifølge tallerkenmodellen, hvor mye av tallerkenen bør være grønnsaker?',
        subTasks: [
          {
            label: 'a',
            task: 'Ifølge tallerkenmodellen, hvor mye av tallerkenen bør være grønnsaker?',
            solution: 'Halvparten',
            multipleChoiceOptions: ['Halvparten', 'En fjerdedel', 'Alt', 'Ingenting'],
          },
        ],
        solution: 'Halvparten av tallerkenen bør fylles med grønnsaker for å få et sunt måltid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange porsjoner frukt og grønnsaker bør du spise hver dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange porsjoner frukt og grønnsaker bør du spise hver dag?',
            solution: 'Minst 5',
            multipleChoiceOptions: ['Minst 5', '1', '10', 'Så mye du orker'],
          },
        ],
        solution: 'Vi bør spise minst 5 porsjoner frukt og grønnsaker hver dag for å holde oss friske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er frokost viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er frokost viktig?',
            solution: 'Den gir energi til å konsentrere seg på skolen',
            multipleChoiceOptions: ['Den gir energi til å konsentrere seg på skolen', 'Fordi foreldrene sier det', 'Det er ikke viktig', 'For å bli trøtt'],
          },
        ],
        solution: 'Frokost gir deg energi til skolearbeid og hjelper deg å konsentrere deg bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du drikke mest av?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du drikke mest av?',
            solution: 'Vann og melk',
            multipleChoiceOptions: ['Vann og melk', 'Brus', 'Saft med sukker', 'Energidrikker'],
          },
        ],
        solution: 'Vann og melk er de beste drikkene. Brus og saft inneholder mye sukker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Mathygiene og mattrygghet
// ============================================================================

export const CHAPTER_MAT_5_2_1: TextbookChapter = {
  id: 'mat-5-2-1',
  courseId: 'mat-5',
  chapterNumber: '2.1',
  title: 'Hygiene på kjøkkenet',
  description: 'Lær hvorfor det er viktig å være ren når du lager mat.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå betydningen av god hygiene ved matlaging',
  ],
  content: [
    {
      id: 'mat-5-2-1-intro',
      type: 'text',
      content: `Når du lager mat, er det viktig å være ren og ryddig. Bakterier er så små at du ikke kan se dem, men de kan gjøre deg syk hvis de havner i maten din!`,
    },
    {
      id: 'mat-5-2-1-def-1',
      type: 'definition',
      title: 'Hygiene',
      content: `Hygiene handler om å holde seg ren for å unngå sykdom. På kjøkkenet betyr det å vaske hender, holde redskaper rene, og behandle mat riktig.`,
    },
    {
      id: 'mat-5-2-1-text-1',
      type: 'text',
      content: `**Vask hendene - den viktigste regelen!**

Du må alltid vaske hendene:
- Før du begynner å lage mat
- Etter at du har tatt på rått kjøtt eller fisk
- Etter at du har vært på toalettet
- Etter at du har klappet et dyr
- Etter at du har hostet eller nyst

**Slik vasker du hendene riktig:**
1. Bruk varmt vann og såpe
2. Gni hendene godt sammen i minst 20 sekunder
3. Vask mellom fingrene og under neglene
4. Skyll godt med rent vann
5. Tørk med et rent håndkle`,
    },
    {
      id: 'mat-5-2-1-tip-1',
      type: 'tip',
      title: 'Synge-trikset',
      content: `For å vaske hendene lenge nok, kan du synge "Gratulerer med dagen" inni deg mens du vasker. Når du er ferdig med sangen, har du vasket lenge nok!`,
    },
    {
      id: 'mat-5-2-1-text-2',
      type: 'text',
      content: `**Rene redskaper og overflater**

Det er ikke bare hendene som må være rene:

- **Skjærebrett**: Vask godt etter bruk, spesielt etter å ha kuttet rått kjøtt
- **Kniver**: Hold knivene rene og bruk ulike kniver til rått og ferdig mat
- **Kjøkkenbenken**: Tørk av benken før og etter matlaging
- **Oppvaskkost og kluter**: Bytt ofte, de samler bakterier

**Unngå å spre bakterier:**
Ikke bruk samme skjærebrett til rått kjøtt og salat uten å vaske det først!`,
    },
    {
      id: 'mat-5-2-1-warning-1',
      type: 'warning',
      title: 'Rått kjøtt og fisk',
      content: `Rått kjøtt og fisk kan inneholde bakterier. Vask alltid hendene og redskapene grundig etter at du har tatt på rått kjøtt eller fisk.`,
    },
    {
      id: 'mat-5-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Når må du vaske hendene på kjøkkenet?',
        subTasks: [
          {
            label: 'a',
            task: 'Når må du vaske hendene på kjøkkenet?',
            solution: 'Før du lager mat og etter å ha tatt på rått kjøtt',
            multipleChoiceOptions: ['Før du lager mat og etter å ha tatt på rått kjøtt', 'Bare før du spiser', 'Bare når de er synlig skitne', 'Det trenger du ikke'],
          },
        ],
        solution: 'Du må vaske hendene før matlaging, etter å ha tatt på rått kjøtt/fisk, etter toalettbesøk og etter å ha klappet dyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor lenge bør du vaske hendene?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor lenge bør du vaske hendene?',
            solution: 'Minst 20 sekunder',
            multipleChoiceOptions: ['Minst 20 sekunder', '5 sekunder', '1 sekund', 'Det spiller ingen rolle'],
          },
        ],
        solution: 'Du bør vaske hendene i minst 20 sekunder med såpe for å fjerne bakterier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva må du gjøre med skjærebrettet etter å ha kuttet rått kjøtt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva må du gjøre med skjærebrettet etter å ha kuttet rått kjøtt?',
            solution: 'Vaske det grundig før du bruker det til annen mat',
            multipleChoiceOptions: ['Vaske det grundig før du bruker det til annen mat', 'Bare tørke av det', 'Ingenting', 'Kaste det'],
          },
        ],
        solution: 'Skjærebrettet må vaskes grundig med såpe og varmt vann for å fjerne bakterier fra rått kjøtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er hygiene viktig når vi lager mat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er hygiene viktig når vi lager mat?',
            solution: 'For å unngå at bakterier gjør oss syke',
            multipleChoiceOptions: ['For å unngå at bakterier gjør oss syke', 'For at maten skal smake bedre', 'For at det skal se pent ut', 'Det er ikke viktig'],
          },
        ],
        solution: 'God hygiene hindrer bakterier i å spre seg til maten og gjøre oss syke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_5_2_2: TextbookChapter = {
  id: 'mat-5-2-2',
  courseId: 'mat-5',
  chapterNumber: '2.2',
  title: 'Oppbevaring av mat',
  description: 'Lær hvordan du oppbevarer mat riktig så den holder seg god.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå hvordan mat skal oppbevares for å holde seg trygg',
  ],
  content: [
    {
      id: 'mat-5-2-2-intro',
      type: 'text',
      content: `Mat som oppbevares feil kan bli dårlig og gjøre deg syk. Ved å lære noen enkle regler kan du sørge for at maten holder seg god og trygg å spise!`,
    },
    {
      id: 'mat-5-2-2-def-1',
      type: 'definition',
      title: 'Holdbarhet',
      content: `Holdbarhet forteller hvor lenge maten er trygg og god å spise. Datoen på pakken viser deg når maten bør brukes.`,
    },
    {
      id: 'mat-5-2-2-text-1',
      type: 'text',
      content: `**Kjøleskapet - Matens beste venn**

Mange matvarer må oppbevares kaldt for å holde seg:

- **Melk og meieriprodukter**: Alltid i kjøleskapet
- **Kjøtt og fisk**: I kjøleskapet, og spis innen få dager
- **Egg**: I kjøleskapet
- **Ost**: I kjøleskapet
- **Rester fra middag**: I kjøleskapet, og spis innen 2-3 dager

Kjøleskapet bør være kaldt, mellom 0 og 4 grader.`,
    },
    {
      id: 'mat-5-2-2-text-2',
      type: 'text',
      content: `**Fryseren - For langtidslagring**

I fryseren kan mat holde seg i mange måneder:
- Brød
- Kjøtt og fisk
- Bær og grønnsaker
- Rester fra middag

Husk å merke maten med dato når du fryser den, så vet du hvor gammel den er!`,
    },
    {
      id: 'mat-5-2-2-text-3',
      type: 'text',
      content: `**Mat som kan stå i romtemperatur**

Noen matvarer trenger ikke kjøleskap:
- Brød (men det holder lenger i fryseren)
- Epler og bananer
- Poteter og løk (mørkt sted)
- Hermetikk (uåpnet)
- Tørrmat som pasta og ris

**Men husk:** Når du åpner en pakke, les på den om den skal i kjøleskapet!`,
    },
    {
      id: 'mat-5-2-2-tip-1',
      type: 'tip',
      title: 'Bruk sansene dine!',
      content: `Før du spiser mat, bruk sansene: Se på den - ser den rar ut? Lukt på den - lukter den vondt? Kjenn på den - er den slimete? Hvis noe virker galt, ikke spis den!`,
    },
    {
      id: 'mat-5-2-2-text-4',
      type: 'text',
      content: `**"Best før" og "Siste forbruksdag"**

På matvarer finner du to typer datoer:

**"Best før"**: Maten er best før denne datoen, men kan ofte spises etter. Bruk sansene dine til å sjekke!

**"Siste forbruksdag"**: Ikke spis maten etter denne datoen. Dette står på mat som kan bli farlig, som kjøtt og fisk.`,
    },
    {
      id: 'mat-5-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor bør melk oppbevares?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor bør melk oppbevares?',
            solution: 'I kjøleskapet',
            multipleChoiceOptions: ['I kjøleskapet', 'På kjøkkenbenken', 'I skapet', 'I fryseren'],
          },
        ],
        solution: 'Melk må stå i kjøleskapet for å holde seg frisk og ikke bli sur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på "best før" og "siste forbruksdag"?',
            solution: '"Best før" kan ofte spises etter, "siste forbruksdag" ikke',
            multipleChoiceOptions: ['"Best før" kan ofte spises etter, "siste forbruksdag" ikke', 'Det er ingen forskjell', 'Begge betyr at maten er farlig', '"Siste forbruksdag" er mindre viktig'],
          },
        ],
        solution: 'Mat med "best før" kan ofte spises etter datoen. Mat med "siste forbruksdag" bør ikke spises etter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke sanser kan du bruke for å sjekke om mat er god?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke sanser kan du bruke for å sjekke om mat er god?',
            solution: 'Syn, lukt og følelse',
            multipleChoiceOptions: ['Syn, lukt og følelse', 'Bare smak', 'Bare syn', 'Bare lukt'],
          },
        ],
        solution: 'Du kan se på maten, lukte på den og kjenne på den for å finne ut om den er god.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor kaldt bør kjøleskapet være?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor kaldt bør kjøleskapet være?',
            solution: 'Mellom 0 og 4 grader',
            multipleChoiceOptions: ['Mellom 0 og 4 grader', '10 grader', '20 grader', 'Under null grader'],
          },
        ],
        solution: 'Kjøleskapet bør holde mellom 0 og 4 grader for at maten skal holde seg trygg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Matlaging
// ============================================================================

export const CHAPTER_MAT_5_3_1: TextbookChapter = {
  id: 'mat-5-3-1',
  courseId: 'mat-5',
  chapterNumber: '3.1',
  title: 'Bruke oppskrifter',
  description: 'Lær å lese og følge oppskrifter når du lager mat.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forstå og følge enkle oppskrifter',
  ],
  content: [
    {
      id: 'mat-5-3-1-intro',
      type: 'text',
      content: `En oppskrift er som en bruksanvisning for å lage mat. Ved å følge oppskriften steg for steg, kan du lage deilige retter selv!`,
    },
    {
      id: 'mat-5-3-1-def-1',
      type: 'definition',
      title: 'Oppskrift',
      content: `En oppskrift er en veiledning som viser hvilke ingredienser du trenger og hvordan du skal lage en rett.`,
    },
    {
      id: 'mat-5-3-1-text-1',
      type: 'text',
      content: `**Slik leser du en oppskrift**

En oppskrift har vanligvis disse delene:

1. **Navn på retten**: Hva du skal lage
2. **Antall porsjoner**: Hvor mange den rekker til
3. **Ingrediensliste**: Alt du trenger
4. **Fremgangsmåte**: Hvordan du gjør det, steg for steg
5. **Tips**: Ekstra gode råd`,
    },
    {
      id: 'mat-5-3-1-text-2',
      type: 'text',
      content: `**Mål og vekt**

I oppskrifter brukes ulike mål. Her er de vanligste:

- **dl** = desiliter (brukes til væsker og tørrvarer)
- **ss** = spiseskje (ca. 15 ml)
- **ts** = teskje (ca. 5 ml)
- **g** = gram (vekt)
- **stk** = stykker

**Huskeregel:**
- 1 dl = 10 spiseskjeer
- 1 liter = 10 dl`,
    },
    {
      id: 'mat-5-3-1-tip-1',
      type: 'tip',
      title: 'Les hele oppskriften først!',
      content: `Før du begynner å lage mat, les hele oppskriften fra start til slutt. Da vet du hva du trenger og unngår overraskelser underveis.`,
    },
    {
      id: 'mat-5-3-1-text-3',
      type: 'text',
      content: `**Gjør klart før du starter**

Før du begynner å lage mat:

1. Les hele oppskriften
2. Finn frem alle ingrediensene
3. Mål opp det du trenger
4. Finn frem redskaper (skåler, stekepanne, osv.)
5. Vask hendene!

Når alt er klart, er det mye enklere å lage maten.`,
    },
    {
      id: 'mat-5-3-1-text-4',
      type: 'text',
      content: `**Vanlige ord i oppskrifter**

- **Bland**: Rør ingrediensene sammen
- **Visp**: Rør raskt med visp
- **Hakk**: Kutt i små biter
- **Riv**: Bruk rivjern til å lage fine strimler
- **Stek**: Lag mat i panne på komfyr
- **Kok**: Lag mat i varmt vann
- **Avkjøl**: La maten bli kald`,
    },
    {
      id: 'mat-5-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva bør du gjøre før du begynner å lage mat etter en oppskrift?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du gjøre før du begynner å lage mat etter en oppskrift?',
            solution: 'Lese hele oppskriften og finne frem ingrediensene',
            multipleChoiceOptions: ['Lese hele oppskriften og finne frem ingrediensene', 'Bare begynne med en gang', 'Slå på ovnen', 'Ringe en venn'],
          },
        ],
        solution: 'Det er lurt å lese hele oppskriften først og finne frem alt du trenger før du begynner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr "dl" i en oppskrift?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr "dl" i en oppskrift?',
            solution: 'Desiliter',
            multipleChoiceOptions: ['Desiliter', 'Dråper', 'Dobbel liter', 'Dager'],
          },
        ],
        solution: 'dl betyr desiliter og er et mål for volum. 10 dl = 1 liter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr det å "hakke" i matlaging?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det å "hakke" i matlaging?',
            solution: 'Å kutte i små biter',
            multipleChoiceOptions: ['Å kutte i små biter', 'Å kaste', 'Å blande', 'Å smake'],
          },
        ],
        solution: 'Å hakke betyr å kutte ingredienser i små biter med en kniv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor mange spiseskjeer er det i 1 desiliter?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange spiseskjeer er det i 1 desiliter?',
            solution: '10',
            multipleChoiceOptions: ['10', '5', '20', '100'],
          },
        ],
        solution: '1 desiliter tilsvarer omtrent 10 spiseskjeer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_5_3_2: TextbookChapter = {
  id: 'mat-5-3-2',
  courseId: 'mat-5',
  chapterNumber: '3.2',
  title: 'Enkle retter',
  description: 'Lær å lage enkle og sunne retter selv.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lage enkle måltider på en trygg måte',
  ],
  content: [
    {
      id: 'mat-5-3-2-intro',
      type: 'text',
      content: `Å lage mat selv er både gøy og nyttig! Her lærer du noen enkle retter som du kan lage hjemme. Husk å spørre en voksen om hjelp med ovn og skarpe kniver.`,
    },
    {
      id: 'mat-5-3-2-text-1',
      type: 'text',
      content: `**Oppskrift: Frukt med yoghurt**

En enkel og sunn frokost eller mellommåltid!

**Ingredienser (1 porsjon):**
- 1 dl naturell yoghurt
- 1 banan
- Litt honning eller bær

**Fremgangsmåte:**
1. Hell yoghurten i en skål
2. Skjær bananen i skiver
3. Legg bananskivene oppå yoghurten
4. Dryss på litt honning eller bær
5. Ferdig!`,
    },
    {
      id: 'mat-5-3-2-text-2',
      type: 'text',
      content: `**Oppskrift: Enkel salat**

En god salat ved siden av middagen!

**Ingredienser (2 porsjoner):**
- 4 salatblader
- 1 tomat
- 1/2 agurk
- 1 ss olivenolje
- Litt salt

**Fremgangsmåte:**
1. Vask grønnsakene
2. Riv salatbladene i biter
3. Skjær tomaten i båter
4. Skjær agurken i skiver
5. Bland alt i en skål
6. Drypp på olivenolje og litt salt
7. Rør forsiktig`,
    },
    {
      id: 'mat-5-3-2-text-3',
      type: 'text',
      content: `**Oppskrift: Toast med egg**

En mettende og god rett!

**Ingredienser (1 porsjon):**
- 2 skiver brød
- 1 egg
- Litt smør
- Salt og pepper

**Fremgangsmåte (med hjelp fra voksen):**
1. Rist brødskivene i brødristeren
2. Kok egg i kokende vann i 6-8 minutter
3. Avkjøl egget i kaldt vann
4. Skrell egget og skjær det i skiver
5. Smør brødskivene
6. Legg eggskivene på toasten
7. Strø på litt salt og pepper`,
    },
    {
      id: 'mat-5-3-2-warning-1',
      type: 'warning',
      title: 'Sikkerhet på kjøkkenet',
      content: `Be alltid en voksen om hjelp når du bruker komfyr, ovn eller skarpe kniver. Det er viktig å lære seg sikker matlaging!`,
    },
    {
      id: 'mat-5-3-2-tip-1',
      type: 'tip',
      title: 'Rydd mens du lager mat',
      content: `Det er lurt å rydde og vaske opp mens du venter på at maten blir ferdig. Da slipper du mye oppvask etterpå!`,
    },
    {
      id: 'mat-5-3-2-text-4',
      type: 'text',
      content: `**Oppskrift: Smoothie**

En deilig og sunn drikk!

**Ingredienser (2 porsjoner):**
- 1 banan
- 1 dl frosne bær
- 2 dl melk
- 1 ss honning (valgfritt)

**Fremgangsmåte:**
1. Del bananen i biter
2. Legg banan og frosne bær i blenderen
3. Hell på melk
4. Tilsett honning hvis du vil
5. Blend til det blir glatt
6. Hell i glass og nyt!`,
    },
    {
      id: 'mat-5-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva trenger du for å lage frukt med yoghurt?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva trenger du for å lage frukt med yoghurt?',
            solution: 'Yoghurt, banan og eventuelt honning eller bær',
            multipleChoiceOptions: ['Yoghurt, banan og eventuelt honning eller bær', 'Brød og smør', 'Pasta og saus', 'Egg og bacon'],
          },
        ],
        solution: 'Til frukt med yoghurt trenger du yoghurt, banan og kanskje litt honning eller bær på toppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør du alltid gjøre med grønnsaker før du bruker dem i salat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bør du alltid gjøre med grønnsaker før du bruker dem i salat?',
            solution: 'Vaske dem',
            multipleChoiceOptions: ['Vaske dem', 'Fryse dem', 'Steke dem', 'Kaste dem'],
          },
        ],
        solution: 'Grønnsaker må alltid vaskes før de spises for å fjerne jord og bakterier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når trenger du hjelp fra en voksen?',
        subTasks: [
          {
            label: 'a',
            task: 'Når trenger du hjelp fra en voksen?',
            solution: 'Når du bruker komfyr, ovn eller skarpe kniver',
            multipleChoiceOptions: ['Når du bruker komfyr, ovn eller skarpe kniver', 'Bare når du lager dessert', 'Aldri', 'Bare når du skal spise'],
          },
        ],
        solution: 'Komfyr, ovn og skarpe kniver kan være farlige. Be alltid en voksen om hjelp med disse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det lurt å rydde mens du lager mat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det lurt å rydde mens du lager mat?',
            solution: 'Fordi du slipper mye oppvask etterpå',
            multipleChoiceOptions: ['Fordi du slipper mye oppvask etterpå', 'Fordi maten blir bedre', 'Det er ikke lurt', 'Fordi du må'],
          },
        ],
        solution: 'Ved å rydde underveis blir det mindre rot og du får mindre oppvask når maten er ferdig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Matkultur
// ============================================================================

export const CHAPTER_MAT_5_4_1: TextbookChapter = {
  id: 'mat-5-4-1',
  courseId: 'mat-5',
  chapterNumber: '4.1',
  title: 'Norsk matkultur',
  description: 'Lær om tradisjonell norsk mat og matskikker.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til tradisjonelle norske matretter og matskikker',
  ],
  content: [
    {
      id: 'mat-5-4-1-intro',
      type: 'text',
      content: `Norge har en spennende mathistorie! Gjennom mange hundre år har nordmenn laget mat av det som finnes i naturen rundt oss. La oss lære om norsk matkultur!`,
    },
    {
      id: 'mat-5-4-1-def-1',
      type: 'definition',
      title: 'Matkultur',
      content: `Matkultur handler om hvilken mat vi lager og spiser, og hvordan vi gjør det. Den varierer fra land til land og har utviklet seg over lang tid.`,
    },
    {
      id: 'mat-5-4-1-text-1',
      type: 'text',
      content: `**Tradisjonelle norske råvarer**

Norge har mye flott natur som gir oss gode råvarer:

**Fra havet:**
- Fisk (torsk, laks, sild, makrell)
- Reker og krabbe

**Fra fjell og skog:**
- Vilt (elg, rein, rype)
- Bær (blåbær, tyttebær, multe)
- Sopp

**Fra gården:**
- Melk og ost
- Kjøtt fra sau, ku og gris
- Korn (havre, bygg)
- Poteter og rotgrønnsaker`,
    },
    {
      id: 'mat-5-4-1-text-2',
      type: 'text',
      content: `**Kjente norske retter**

Her er noen typiske norske retter:

- **Fårikål**: Sau (får) kokt med kål - spises ofte om høsten
- **Pinnekjøtt**: Saltet og tørket lammeribbe - vanlig julemat
- **Kjøttkaker**: Kjøttboller i brun saus med kålstuing
- **Raspeballer**: Potetballer fylt med flesk
- **Rømmegrøt**: Kremet grøt laget av rømme
- **Brunost**: Brun, søt ost laget av myse
- **Lefse**: Tynne, myke brød laget av potet`,
    },
    {
      id: 'mat-5-4-1-text-3',
      type: 'text',
      content: `**Mat til høytider**

I Norge har vi spesiell mat til ulike anledninger:

**Jul:**
- Pinnekjøtt, ribbe eller torsk
- Julekaker og pepperkaker
- Risgrøt med rød saus

**17. mai:**
- Pølser i brød
- Is og kaker
- Brusbrus

**Påske:**
- Lam
- Egg
- Appelsiner og kvikk lunsj (på fjellet)`,
    },
    {
      id: 'mat-5-4-1-tip-1',
      type: 'tip',
      title: 'Prøv norsk tradisjonsmat!',
      content: `Spør besteforeldrene eller andre voksne om de kan lage tradisjonsmat sammen med deg. De kjenner kanskje oppskrifter som har gått i familien i mange generasjoner!`,
    },
    {
      id: 'mat-5-4-1-text-4',
      type: 'text',
      content: `**Matpakken - typisk norsk!**

Visste du at matpakken er typisk norsk? I mange andre land spiser barn varm mat på skolen. I Norge har vi tradisjon for å ta med oss matpakke med brødskiver.

En typisk norsk matpakke inneholder:
- Grovt brød med pålegg
- Gjerne litt frukt eller grønnsaker
- Vann eller melk å drikke`,
    },
    {
      id: 'mat-5-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fårikål?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er fårikål?',
            solution: 'Sau kokt med kål',
            multipleChoiceOptions: ['Sau kokt med kål', 'Fisk med poteter', 'Suppe med grønnsaker', 'Dessert med bær'],
          },
        ],
        solution: 'Fårikål er en tradisjonell norsk rett med sauekjøtt (får) kokt sammen med kål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er brunost laget av?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er brunost laget av?',
            solution: 'Myse (som blir til overs når man lager ost)',
            multipleChoiceOptions: ['Myse (som blir til overs når man lager ost)', 'Sjokolade', 'Brunt sukker', 'Kaffe'],
          },
        ],
        solution: 'Brunost lages av myse, som er væsken som blir til overs når man lager vanlig ost av melk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er typisk norsk julemat?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er typisk norsk julemat?',
            solution: 'Pinnekjøtt, ribbe eller torsk',
            multipleChoiceOptions: ['Pinnekjøtt, ribbe eller torsk', 'Pizza', 'Taco', 'Hamburger'],
          },
        ],
        solution: 'Typisk norsk julemat er pinnekjøtt, ribbe eller torsk, ofte med tilbehør som surkål og poteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er spesielt med matpakketradisjonen i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er spesielt med matpakketradisjonen i Norge?',
            solution: 'I mange andre land spiser barn varm mat på skolen',
            multipleChoiceOptions: ['I mange andre land spiser barn varm mat på skolen', 'Alle land har matpakke', 'Matpakke finnes bare i Norge', 'Nordmenn liker ikke matpakke'],
          },
        ],
        solution: 'Matpakke med brødskiver er typisk norsk. I mange andre land serveres varm skolemat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_5_4_2: TextbookChapter = {
  id: 'mat-5-4-2',
  courseId: 'mat-5',
  chapterNumber: '4.2',
  title: 'Mat fra andre land',
  description: 'Opplev spennende matretter fra hele verden.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til mat fra ulike kulturer og land',
  ],
  content: [
    {
      id: 'mat-5-4-2-intro',
      type: 'text',
      content: `I dag kan vi spise mat fra hele verden! Mange familier i Norge kommer fra andre land og har med seg spennende matretter og mattradisjoner.`,
    },
    {
      id: 'mat-5-4-2-text-1',
      type: 'text',
      content: `**Mat fra Italia**

Italia er kjent for deilig mat:

- **Pizza**: Deig med tomatsaus, ost og pålegg
- **Pasta**: Nudler i mange former (spaghetti, penne, fusilli)
- **Risotto**: Kremete risrett
- **Gelato**: Italiensk iskrem

Italienerne bruker mye olivenolje, tomater, basilikum og parmesan-ost i matlagingen.`,
    },
    {
      id: 'mat-5-4-2-text-2',
      type: 'text',
      content: `**Mat fra Mexico**

Meksikansk mat er fargerik og smakfull:

- **Taco**: Tortilla med kjøttdeig, salat og saus
- **Nachos**: Chips med ost og salsa
- **Burrito**: Rullet tortilla med fyll
- **Guacamole**: Dip laget av avokado

Meksikanere bruker mye bønner, mais, chili og koriander.`,
    },
    {
      id: 'mat-5-4-2-text-3',
      type: 'text',
      content: `**Mat fra Asia**

Asia har mange ulike mattradisjoner:

**Japan:**
- Sushi (ris med fisk og grønnsaker)
- Ramen (nudelsuppe)

**Kina:**
- Nudler og ris
- Vårruller
- Wok med grønnsaker

**India:**
- Curry (krydret gryte)
- Naan (indisk brød)
- Raita (yoghurtsaus)

**Thailand:**
- Pad Thai (stekte nudler)
- Grønn og rød curry`,
    },
    {
      id: 'mat-5-4-2-tip-1',
      type: 'tip',
      title: 'Prøv noe nytt!',
      content: `Neste gang du er på restaurant eller i butikken, prøv mat fra et land du aldri har smakt før. Du kan oppdage en ny favorittrett!`,
    },
    {
      id: 'mat-5-4-2-text-4',
      type: 'text',
      content: `**Mat fra Midtøsten**

Midtøsten har spennende smaker:

- **Hummus**: Dip laget av kikerter
- **Falafel**: Friterte boller av kikerter
- **Kebab**: Grillet kjøtt i brød
- **Pita**: Mykt, rundt brød

Krydder som spisskummen, koriander og mynte brukes mye.`,
    },
    {
      id: 'mat-5-4-2-text-5',
      type: 'text',
      content: `**Fredagstaco - norsk tradisjon!**

Visste du at "fredagstaco" nesten bare finnes i Norge? Nordmenn har gjort taco til en egen tradisjon som vi spiser nesten hver fredag. I Mexico spiser de taco på helt andre måter enn vi gjør!

**Hvorfor er mat fra andre land viktig?**
- Vi lærer om andre kulturer
- Vi får smake nye smaker
- Vi får ideer til variert kosthold
- Det er spennende og gøy!`,
    },
    {
      id: 'mat-5-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilket land kommer pizza opprinnelig fra?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket land kommer pizza opprinnelig fra?',
            solution: 'Italia',
            multipleChoiceOptions: ['Italia', 'Norge', 'USA', 'Mexico'],
          },
        ],
        solution: 'Pizza kommer opprinnelig fra Italia, selv om den nå er populær over hele verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er hummus laget av?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er hummus laget av?',
            solution: 'Kikerter',
            multipleChoiceOptions: ['Kikerter', 'Poteter', 'Egg', 'Fisk'],
          },
        ],
        solution: 'Hummus er en kremete dip laget av kikerter, og kommer fra Midtøsten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er sushi?',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sushi?',
            solution: 'Japansk rett med ris, fisk og grønnsaker',
            multipleChoiceOptions: ['Japansk rett med ris, fisk og grønnsaker', 'Indisk curry', 'Meksikansk taco', 'Italiensk pasta'],
          },
        ],
        solution: 'Sushi er en japansk rett som består av ris kombinert med fisk, sjømat eller grønnsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-5-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-5-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det fint å prøve mat fra andre land?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er det fint å prøve mat fra andre land?',
            solution: 'Vi lærer om andre kulturer og får et variert kosthold',
            multipleChoiceOptions: ['Vi lærer om andre kulturer og får et variert kosthold', 'Det er dyrt', 'Det er ikke fint', 'Norsk mat er alltid best'],
          },
        ],
        solution: 'Ved å prøve mat fra andre land lærer vi om ulike kulturer, får nye smaker og et mer variert kosthold.',
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

export const MAT_5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MAT_5_1_1,
  CHAPTER_MAT_5_1_2,
  CHAPTER_MAT_5_2_1,
  CHAPTER_MAT_5_2_2,
  CHAPTER_MAT_5_3_1,
  CHAPTER_MAT_5_3_2,
  CHAPTER_MAT_5_4_1,
  CHAPTER_MAT_5_4_2,
];

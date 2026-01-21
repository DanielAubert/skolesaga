/**
 * Mat og helse 9. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for mat og helse på 9. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Avansert ernæring
// ============================================================================

export const CHAPTER_MAT_9_1_1: TextbookChapter = {
  id: 'mat-9-1-1',
  courseId: 'mat-9',
  chapterNumber: '1.1',
  title: 'Fordøyelse og stoffskifte',
  description: 'Lær om hvordan kroppen bryter ned og bruker næringsstoffer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare sammenhenger mellom kosthold og helse',
  ],
  content: [
    {
      id: 'mat-9-1-1-intro',
      type: 'text',
      content: `Fordøyelsen er prosessen der maten brytes ned til næringsstoffer som kroppen kan bruke. Stoffskiftet bestemmer hvordan disse næringsstoffene omdannes til energi og byggestoff.`,
    },
    {
      id: 'mat-9-1-1-def-1',
      type: 'definition',
      title: 'Metabolisme',
      content: `Metabolisme (stoffskifte) er alle kjemiske prosesser i kroppen som omdanner mat til energi og byggematerialer. Det inkluderer anabolisme (oppbygging) og katabolisme (nedbrytning).`,
    },
    {
      id: 'mat-9-1-1-text-2',
      type: 'text',
      content: `**Fordøyelsessystemet**

1. **Munnen**: Maten tygges og blandes med spytt (stivelse begynner å brytes ned)
2. **Spiserøret**: Transporterer maten til magesekken
3. **Magesekken**: Saltsyre og enzymer bryter ned protein
4. **Tynntarmen**: Hovedabsorpsjon - næringsstoffer tas opp i blodet
5. **Tykktarmen**: Vann og mineraler absorberes, avfall komprimeres
6. **Lever og bukspyttkjertel**: Produserer galle og fordøyelsesenzymer`,
    },
    {
      id: 'mat-9-1-1-text-3',
      type: 'text',
      content: `**Energiomsetning**

**Basalstoffskifte (BMR)**: Energien kroppen bruker i hvile for å opprettholde livsviktige funksjoner (pust, hjerteslag, kroppstemperatur).

**Totalt energibehov** = Basalstoffskifte + Aktivitetsnivå + Fordøyelse

Faktorer som påvirker stoffskiftet:
- Alder (synker med alderen)
- Kjønn (menn har ofte høyere)
- Muskelmasse (mer muskler = høyere stoffskifte)
- Genetikk
- Hormoner (spesielt skjoldbruskkjertel)`,
    },
    {
      id: 'mat-9-1-1-text-4',
      type: 'text',
      content: `**Blodsukkeret og insulin**

Karbohydrater brytes ned til glukose (blodsukker):
- **Høyt blodsukker**: Bukspyttkjertelen frigjør insulin
- **Insulin**: Hjelper cellene ta opp glukose
- **Overskudd**: Lagres som glykogen eller fett
- **Lavt blodsukker**: Glukagon frigjør lagret energi

**Glykemisk indeks (GI)** viser hvor raskt karbohydrater øker blodsukkeret. Lav GI gir mer stabil energi.`,
    },
    {
      id: 'mat-9-1-1-tip-1',
      type: 'tip',
      title: 'Stabilt blodsukker',
      content: `Velg mat med lav GI (fullkorn, belgfrukter, grønnsaker) for jevnere energinivå gjennom dagen. Unngå mye sukker og hvitt brød som gir raske svingninger.`,
    },
    {
      id: 'mat-9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor skjer hovedabsorpsjonen av næringsstoffer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tynntarmen',
            multipleChoiceOptions: ['Tynntarmen', 'Magesekken', 'Munnen', 'Tykktarmen'],
          },
        ],
        solution: 'Hovedabsorpsjonen skjer i tynntarmen, der næringsstoffer tas opp gjennom tarmveggen og inn i blodet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er basalstoffskifte?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Energien kroppen bruker i hvile',
            multipleChoiceOptions: ['Energien kroppen bruker i hvile', 'Energi fra trening', 'Mat som fordøyes', 'Kroppsvekt'],
          },
        ],
        solution: 'Basalstoffskiftet er energien kroppen bruker for å opprettholde livsviktige funksjoner når du hviler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør insulin?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hjelper cellene ta opp glukose fra blodet',
            multipleChoiceOptions: ['Hjelper cellene ta opp glukose fra blodet', 'Bryter ned fett', 'Bygger muskler', 'Fordøyer protein'],
          },
        ],
        solution: 'Insulin frigjøres når blodsukkeret er høyt og hjelper cellene ta opp glukose slik at blodsukkeret synker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva viser glykemisk indeks (GI)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Hvor raskt mat øker blodsukkeret',
            multipleChoiceOptions: ['Hvor raskt mat øker blodsukkeret', 'Kaloriinnhold', 'Fettmengde', 'Proteininnhold'],
          },
        ],
        solution: 'GI viser hvor raskt karbohydrater fra mat tas opp og øker blodsukkernivået. Lav GI gir saktere, jevnere økning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_9_1_2: TextbookChapter = {
  id: 'mat-9-1-2',
  courseId: 'mat-9',
  chapterNumber: '1.2',
  title: 'Spesielle kostholdsbehov',
  description: 'Lær om allergier, intoleranser og tilpasset kosthold.',
  estimatedMinutes: 50,
  competenceGoals: [
    'tilberede mat for personer med ulike behov',
  ],
  content: [
    {
      id: 'mat-9-1-2-intro',
      type: 'text',
      content: `Mange mennesker har spesielle kostholdsbehov på grunn av allergier, intoleranser, sykdommer eller livsstilsvalg. God kjennskap til disse behovene er viktig for trygg matlaging.`,
    },
    {
      id: 'mat-9-1-2-def-1',
      type: 'definition',
      title: 'Matallergi vs. intoleranse',
      content: `**Allergi**: Immunsystemet reagerer på et stoff (kan være livstruende). **Intoleranse**: Fordøyelsesproblemer uten immunreaksjon (ubehagelig, men ikke farlig).`,
    },
    {
      id: 'mat-9-1-2-text-2',
      type: 'text',
      content: `**Vanlige matallergier**

De 14 allergene som må merkes:
1. Gluten (hvete, rug, bygg, havre)
2. Melk og melkeprodukter
3. Egg
4. Fisk
5. Skalldyr (krepsdyr, bløtdyr)
6. Peanøtter
7. Nøtter
8. Soya
9. Selleri
10. Sennep
11. Sesamfrø
12. Sulfitter
13. Lupiner
14. Bløtdyr

**Anafylaksi** er en alvorlig allergisk reaksjon som kan være livstruende. Ring 113 ved mistanke.`,
    },
    {
      id: 'mat-9-1-2-text-3',
      type: 'text',
      content: `**Kosthold ved sykdom**

**Diabetes type 2**:
- Jevne måltider, lav GI
- Begrenset sukker
- Mye fiber og grønnsaker

**Cøliaki (glutenintoleranse)**:
- Helt glutenfritt kosthold
- Unngå hvete, rug, bygg
- Pas på kryssforurensning

**Laktoseintoleranse**:
- Unngå eller begrens melkesukker
- Laktosefrie produkter fungerer
- Hard ost og smør inneholder lite laktose`,
    },
    {
      id: 'mat-9-1-2-text-4',
      type: 'text',
      content: `**Vegetarisk og vegansk kosthold**

**Vegetarisk**: Unngår kjøtt og fisk
**Vegansk**: Unngår alle animalske produkter

Viktige næringsstoffer å tenke på:
- **Protein**: Belgfrukter, soya, nøtter, frø
- **Jern**: Linser, spinat, fullkorn (ta med C-vitamin)
- **B12**: Kun i animalske produkter (tilskudd nødvendig for veganere)
- **Kalsium**: Berikede plantemelker, grønne bladgrønnsaker
- **Omega-3**: Linfrø, valnøtter, alger`,
    },
    {
      id: 'mat-9-1-2-warning-1',
      type: 'warning',
      title: 'Kryssforurensning',
      content: `Ved matallergi kan selv små spor være farlige. Bruk separate redskaper, rengjør grundig, og les alltid ingredienslisten - selv på produkter du har kjøpt før.`,
    },
    {
      id: 'mat-9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på allergi og intoleranse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Allergi involverer immunsystemet, intoleranse gjør det ikke',
            multipleChoiceOptions: ['Allergi involverer immunsystemet, intoleranse gjør det ikke', 'De er det samme', 'Intoleranse er farligere', 'Allergi gir bare utslett'],
          },
        ],
        solution: 'Ved allergi reagerer immunsystemet, noe som kan være livstruende. Intoleranse gir ubehag men er ikke farlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilket vitamin må veganere ta som tilskudd?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'B12',
            multipleChoiceOptions: ['B12', 'C-vitamin', 'D-vitamin', 'A-vitamin'],
          },
        ],
        solution: 'Vitamin B12 finnes naturlig kun i animalske produkter, så veganere må ta tilskudd eller spise berikede produkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva må personer med cøliaki unngå?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gluten',
            multipleChoiceOptions: ['Gluten', 'Laktose', 'Sukker', 'Fett'],
          },
        ],
        solution: 'Cøliaki er en autoimmun sykdom der gluten skader tarmen. Glutenfri kost er den eneste behandlingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er anafylaksi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En alvorlig, livstruende allergisk reaksjon',
            multipleChoiceOptions: ['En alvorlig, livstruende allergisk reaksjon', 'En mild intoleranse', 'En type matallergi', 'Ubehag etter mat'],
          },
        ],
        solution: 'Anafylaksi er en akutt, livstruende allergisk reaksjon som kan gi pustevansker og blodtrykksfall. Ring 113!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Matvvitenskap
// ============================================================================

export const CHAPTER_MAT_9_2_1: TextbookChapter = {
  id: 'mat-9-2-1',
  courseId: 'mat-9',
  chapterNumber: '2.1',
  title: 'Matkjemi',
  description: 'Lær om de kjemiske prosessene som skjer når vi lager mat.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive kjemiske prosesser i matlaging',
  ],
  content: [
    {
      id: 'mat-9-2-1-intro',
      type: 'text',
      content: `Matlaging er anvendt kjemi. Når vi varmer, blander og tilbereder mat, skjer det kjemiske reaksjoner som påvirker smak, tekstur, farge og næringsinnhold.`,
    },
    {
      id: 'mat-9-2-1-def-1',
      type: 'definition',
      title: 'Maillard-reaksjonen',
      content: `Maillard-reaksjonen er en kjemisk reaksjon mellom aminosyrer og sukkerarter ved høy temperatur. Den gir bruning og den dype, komplekse smaken vi forbinder med stekt kjøtt, brød og kaffe.`,
    },
    {
      id: 'mat-9-2-1-text-2',
      type: 'text',
      content: `**Viktige matlagingsreaksjoner**

**Maillard-reaksjonen** (110-165°C):
- Gir brun farge og smak
- Skjer ved steking, baking, grilling
- Eksempler: Skorpe på brød, brunet kjøtt

**Karamellisering** (160°C+):
- Sukker brytes ned og blir brunt
- Gir søt, nøtteaktig smak
- Eksempler: Løk som brunes, karamellsaus

**Denaturering** av protein:
- Proteiner endrer struktur ved varme eller syre
- Eksempler: Egg som stivner, ceviche (fisk "kokt" i lime)`,
    },
    {
      id: 'mat-9-2-1-text-3',
      type: 'text',
      content: `**Emulsjoner og gelering**

**Emulsjon**: Blanding av to væsker som normalt ikke blandes (olje og vann)
- Majones: Olje emulgert i eggeplomme (lecithin er emulgator)
- Vinaigrette: Ustabil emulsjon som skiller seg

**Gelering**:
- Gelatin: Protein som danner gel ved avkjøling
- Pektin: Karbohydrat fra frukt (syltetøy)
- Stivelse: Jevner sauser ved oppvarming`,
    },
    {
      id: 'mat-9-2-1-text-4',
      type: 'text',
      content: `**pH og syrer i mat**

pH-skalaen: 0 (sterkt surt) - 7 (nøytralt) - 14 (sterkt basisk)

Syre i matlaging:
- Eddik, sitronsaft, vin: pH 2-4
- Denaturerer protein (ceviche, marinering)
- Forhindrer bruning av frukt
- Gir smak og balanse

**Osmose og salting**:
- Salt trekker vann ut av mat
- Brukes til konservering og tekstur
- Eksempel: Salte agurker, gravlaks`,
    },
    {
      id: 'mat-9-2-1-example-1',
      type: 'example',
      title: 'Hvorfor hviler kjøtt?',
      content: `Når du steker kjøtt, trekker proteinene seg sammen og presser væske mot midten. Hvis du skjærer opp med en gang, renner saften ut. Ved å la kjøttet hvile 5-10 minutter, redistribueres væsken og kjøttet blir saftigere.`,
    },
    {
      id: 'mat-9-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Maillard-reaksjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Reaksjon mellom aminosyrer og sukker som gir bruning',
            multipleChoiceOptions: ['Reaksjon mellom aminosyrer og sukker som gir bruning', 'Når sukker smelter', 'Når vann koker', 'Når fett brennes'],
          },
        ],
        solution: 'Maillard-reaksjonen skjer ved høy temperatur og gir den brune fargen og smaken vi får ved steking og baking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en emulsjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En blanding av to væsker som normalt ikke blandes',
            multipleChoiceOptions: ['En blanding av to væsker som normalt ikke blandes', 'En type saus', 'En tilberedningsmetode', 'Sukker som smelter'],
          },
        ],
        solution: 'En emulsjon er en stabil blanding av to væsker som vanligvis ikke blandes, som olje og vann i majones.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva skjer når protein denatureres?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Proteinstrukturen endres ved varme eller syre',
            multipleChoiceOptions: ['Proteinstrukturen endres ved varme eller syre', 'Protein forsvinner', 'Protein blir giftig', 'Ingenting'],
          },
        ],
        solution: 'Denaturering endrer proteinets struktur. Dette er hvorfor egg stivner ved oppvarming og fisk "koker" i sitronsyre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør stekt kjøtt hvile før det skjæres?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Slik at væsken redistribueres og kjøttet blir saftigere',
            multipleChoiceOptions: ['Slik at væsken redistribueres og kjøttet blir saftigere', 'For at det skal bli kaldt', 'For å spare tid', 'Det trenger ikke hvile'],
          },
        ],
        solution: 'Under steking presses væske mot midten. Hvile lar væsken fordele seg jevnt, noe som gir saftigere kjøtt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_9_2_2: TextbookChapter = {
  id: 'mat-9-2-2',
  courseId: 'mat-9',
  chapterNumber: '2.2',
  title: 'Matkonservering',
  description: 'Lær om metoder for å forlenge holdbarheten til mat.',
  estimatedMinutes: 50,
  competenceGoals: [
    'anvende prinsipper for matkonservering',
  ],
  content: [
    {
      id: 'mat-9-2-2-intro',
      type: 'text',
      content: `Matkonservering har vært avgjørende for menneskers overlevelse gjennom historien. Ved å hemme veksten av mikroorganismer kan vi forlenge matens holdbarhet betydelig.`,
    },
    {
      id: 'mat-9-2-2-def-1',
      type: 'definition',
      title: 'Konservering',
      content: `Konservering er metoder som forhindrer eller forsinker forråtnelse av mat ved å stoppe eller bremse veksten av bakterier, mugg og gjær.`,
    },
    {
      id: 'mat-9-2-2-text-2',
      type: 'text',
      content: `**Temperaturbaserte metoder**

**Frysing** (-18°C eller kaldere):
- Stopper bakterievekst nesten helt
- Ødelegger noen teksturer (is-krystaller)
- Kan oppbevares i måneder

**Kjøling** (0-4°C):
- Bremser bakterievekst
- Kort holdbarhet (dager til uker)

**Pasteurisering** (72°C i 15 sek):
- Dreper de fleste sykdomsfremkallende bakterier
- Brukes på melk, juice

**Sterilisering** (høyere temperatur):
- Dreper alle mikroorganismer
- Hermetikk, UHT-melk`,
    },
    {
      id: 'mat-9-2-2-text-3',
      type: 'text',
      content: `**Kjemiske metoder**

**Salting**:
- Trekker ut vann (osmose)
- Gravlaks, salt kjøtt, salt fisk

**Sukkering**:
- Samme prinsipp som salting
- Syltetøy, kandisering

**Syring (pickling)**:
- Lav pH hemmer bakterier
- Pickles, surkål, kimchi

**Røyking**:
- Kombinerer tørking og antimikrobielle stoffer
- Røkt laks, spekemat`,
    },
    {
      id: 'mat-9-2-2-text-4',
      type: 'text',
      content: `**Andre metoder**

**Tørking**:
- Fjerner vann bakterier trenger
- Tørkede frukter, jerky, tørrfisk

**Vakuumpakking**:
- Fjerner oksygen
- Forsinker oksidasjon og aerob bakterievekst

**Fermentering**:
- Kontrollert vekst av gunstige mikroorganismer
- Produserer syre eller alkohol som konserverer
- Eksempler: Ost, vin, øl, yoghurt, surkål`,
    },
    {
      id: 'mat-9-2-2-tip-1',
      type: 'tip',
      title: 'Hjemmekonservering',
      content: `Sylting, tørking og fermentering er morsomme å prøve hjemme. Start enkelt med pickles eller syltetøy. Følg oppskrifter nøye for trygg konservering.`,
    },
    {
      id: 'mat-9-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er hovedprinsippet bak konservering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å hemme veksten av mikroorganismer',
            multipleChoiceOptions: ['Å hemme veksten av mikroorganismer', 'Å gjøre maten mer smakfull', 'Å øke næringsinnholdet', 'Å gjøre maten penere'],
          },
        ],
        solution: 'Konservering handler om å stoppe eller bremse veksten av bakterier, mugg og gjær som bryter ned mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor fungerer salting som konserveringsmetode?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Salt trekker ut vann som bakterier trenger',
            multipleChoiceOptions: ['Salt trekker ut vann som bakterier trenger', 'Salt dreper alle bakterier', 'Salt gjør maten kaldere', 'Salt endrer pH'],
          },
        ],
        solution: 'Salt trekker vann ut av maten (osmose). Uten vann kan ikke bakterier vokse effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er fermentering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kontrollert vekst av gunstige mikroorganismer',
            multipleChoiceOptions: ['Kontrollert vekst av gunstige mikroorganismer', 'Frysing av mat', 'Tørking av mat', 'Koking av mat'],
          },
        ],
        solution: 'Fermentering bruker gunstige bakterier eller gjær som produserer syre eller alkohol, noe som konserverer maten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er pasteurisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Oppvarming som dreper de fleste sykdomsfremkallende bakterier',
            multipleChoiceOptions: ['Oppvarming som dreper de fleste sykdomsfremkallende bakterier', 'Fullstendig sterilisering', 'Frysing av væsker', 'Tilsetting av konserveringsmidler'],
          },
        ],
        solution: 'Pasteurisering varmer mat/drikke til ca. 72°C i kort tid for å drepe skadelige bakterier, men uten å sterilisere fullstendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Avansert matlaging
// ============================================================================

export const CHAPTER_MAT_9_3_1: TextbookChapter = {
  id: 'mat-9-3-1',
  courseId: 'mat-9',
  chapterNumber: '3.1',
  title: 'Profesjonelle teknikker',
  description: 'Lær avanserte tilberedningsteknikker fra profesjonelle kjøkken.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike tilberedningsteknikker',
  ],
  content: [
    {
      id: 'mat-9-3-1-intro',
      type: 'text',
      content: `Profesjonelle kokker bruker teknikker som gir bedre smak, tekstur og presentasjon. Mange av disse kan du lære og bruke hjemme med litt øvelse.`,
    },
    {
      id: 'mat-9-3-1-text-1',
      type: 'text',
      content: `**Knivteknikker**

**Julienne**: Tynne strimler (ca. 3mm x 5cm)
**Brunoise**: Små terninger (ca. 3mm)
**Chiffonade**: Tynnskårne strimler av blader
**Concassé**: Skrelt, frøfri, hakket tomat

**Riktig knivgrep**:
- Klohånd på maten (fingertuppene inn)
- Kniven hviler mot knokene
- La kniven gjøre jobben - ikke press`,
    },
    {
      id: 'mat-9-3-1-def-1',
      type: 'definition',
      title: 'Sous vide',
      content: `Sous vide betyr "under vakuum" på fransk. Mat vakuumpakkes og tilberedes i temperaturkontrollert vannbad over lang tid, noe som gir presis temperatur og mørt resultat.`,
    },
    {
      id: 'mat-9-3-1-text-2',
      type: 'text',
      content: `**Temperaturkontroll**

**Kjernetemperaturer**:
- Kylling: 75°C (må være gjennomstekt)
- Svinekjøtt: 65-70°C
- Biff (medium): 54-58°C
- Fisk: 50-55°C (avhenger av type)

**Sous vide-fordeler**:
- Presis temperatur gjennom hele stykket
- Umulig å steke over
- Mørt resultat
- Kan tilberedes på forhånd`,
    },
    {
      id: 'mat-9-3-1-text-3',
      type: 'text',
      content: `**Sauser og fond**

**Fond (kraft)**:
- Kokte bein, grønnsaker og urter
- Grunnlag for sauser og supper

**De fem morsausene**:
1. Béchamel (hvit, melkebasert)
2. Velouté (lys fond + roux)
3. Espagnole (brun fond + tomatpuré)
4. Tomat (tomatbasert)
5. Hollandaise (egg og smør)

**Roux**: Like deler smør og mel, kokt sammen - basis for mange sauser`,
    },
    {
      id: 'mat-9-3-1-tip-1',
      type: 'tip',
      title: 'Hvil kjøttet!',
      content: `Kjøtt bør hvile like lenge som det ble stekt. En biff som stektes i 3 minutter per side bør hvile i 6 minutter. Dette gir saftigere resultat.`,
    },
    {
      id: 'mat-9-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er julienne-kutt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tynne strimler (ca. 3mm x 5cm)',
            multipleChoiceOptions: ['Tynne strimler (ca. 3mm x 5cm)', 'Små terninger', 'Store biter', 'Skiver'],
          },
        ],
        solution: 'Julienne er tynne, matchstick-lignende strimler, ofte brukt til grønnsaker i wok eller salater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er sous vide?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Tilberedning i vakuumpakning i temperaturkontrollert vann',
            multipleChoiceOptions: ['Tilberedning i vakuumpakning i temperaturkontrollert vann', 'Rask steking på høy varme', 'Koking i saltet vann', 'Grilling over åpen flamme'],
          },
        ],
        solution: 'Sous vide bruker presis temperaturkontroll i vannbad for å tilberede vakuumpakket mat jevnt og mørt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er roux?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Like deler smør og mel kokt sammen',
            multipleChoiceOptions: ['Like deler smør og mel kokt sammen', 'En type grønnsak', 'Et krydder', 'En tilberedningsmetode'],
          },
        ],
        solution: 'Roux er en blanding av like deler smør og mel som brukes til å jevne sauser og supper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er anbefalt kjernetemperatur for kylling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '75°C',
            multipleChoiceOptions: ['75°C', '55°C', '100°C', '40°C'],
          },
        ],
        solution: 'Kylling må ha kjernetemperatur på minst 75°C for å drepe sykdomsfremkallende bakterier som salmonella.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_9_3_2: TextbookChapter = {
  id: 'mat-9-3-2',
  courseId: 'mat-9',
  chapterNumber: '3.2',
  title: 'Baking og konditori',
  description: 'Lær om bakefysikk, deiger og konditoriteknikker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke ulike tilberedningsteknikker',
  ],
  content: [
    {
      id: 'mat-9-3-2-intro',
      type: 'text',
      content: `Baking er presis kjemi der ingrediensenes proporsjoner og teknikk er avgjørende. Ved å forstå prinsippene kan du tilpasse oppskrifter og løse problemer.`,
    },
    {
      id: 'mat-9-3-2-def-1',
      type: 'definition',
      title: 'Gluten',
      content: `Gluten er et protein i hvete som dannes når mel blandes med vann og eltes. Det gir deigen elastisitet og struktur, og holder på gassen fra gjær.`,
    },
    {
      id: 'mat-9-3-2-text-2',
      type: 'text',
      content: `**Typer deiger**

**Gjærdeig**:
- Mel, vann, gjær, salt, evt. fett/sukker
- Gjær produserer CO₂ som hever deigen
- Trenger tid til heving
- Eksempler: Brød, boller, pizza

**Mørdeig**:
- Mel, smør, evt. sukker/egg
- Smør forhindrer glutendannelse
- Sprø tekstur
- Eksempler: Paibunner, kjeks

**Butterdeig/Wienerdeig**:
- Lag på lag med smør og deig
- Dampen fra smøret skaper lag
- Eksempel: Croissant, wienerbrød`,
    },
    {
      id: 'mat-9-3-2-text-3',
      type: 'text',
      content: `**Hevemidler**

**Gjær**:
- Levende organisme, produserer CO₂
- Trenger tid, varme, sukker
- Gir smak og tekstur

**Bakepulver**:
- Kjemisk hevemiddel (reaksjon med væske og varme)
- Virker raskt
- Brukes i kaker, muffins

**Natron** (bakesoda):
- Trenger syre for å reagere (kjernemelk, sitronsaft)
- Sterkere enn bakepulver`,
    },
    {
      id: 'mat-9-3-2-text-4',
      type: 'text',
      content: `**Konditoriteknikker**

**Pisking**:
- Eggehviter: Stiv skum som holder luft
- Fløte: Pisk til ønsket konsistens
- Romtemperatur gir bedre resultat

**Temperering av sjokolade**:
- Kontrollert smelting og avkjøling
- Gir blank overflate og knekk

**Karamell**:
- Sukker kokt til ulike temperaturer
- 110°C: Sirup | 140°C: Myk karamell | 160°C: Hard karamell`,
    },
    {
      id: 'mat-9-3-2-tip-1',
      type: 'tip',
      title: 'Romtemperatur',
      content: `Egg, smør og melk bør ha romtemperatur før baking. Kalde ingredienser blandes dårligere og kan gi ujevn tekstur.`,
    },
    {
      id: 'mat-9-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva gjør gluten i deig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gir elastisitet og holder på gassen',
            multipleChoiceOptions: ['Gir elastisitet og holder på gassen', 'Gir søt smak', 'Gjør deigen kald', 'Fargelegger deigen'],
          },
        ],
        solution: 'Gluten danner et nettverk som gir deigen elastisitet og evne til å holde på CO₂ fra gjær, så deigen hever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva produserer gjær?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'CO₂ (karbondioksid)',
            multipleChoiceOptions: ['CO₂ (karbondioksid)', 'Oksygen', 'Nitrogen', 'Helium'],
          },
        ],
        solution: 'Gjær er levende organismer som spiser sukker og produserer CO₂ og alkohol. CO₂-gassen får deigen til å heve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor brukes smør i mørdeig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å forhindre glutendannelse og gi sprøhet',
            multipleChoiceOptions: ['For å forhindre glutendannelse og gi sprøhet', 'For å gi gul farge', 'For å få deigen til å heve', 'For å gjøre deigen seig'],
          },
        ],
        solution: 'Smør dekker melet og forhindrer gluten fra å utvikle seg, noe som gir mørdeig sin karakteristiske sprøhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva trenger natron for å fungere som hevemiddel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En syre (f.eks. kjernemelk)',
            multipleChoiceOptions: ['En syre (f.eks. kjernemelk)', 'Sukker', 'Salt', 'Vann'],
          },
        ],
        solution: 'Natron reagerer med syre og produserer CO₂. Vanlige syrekilder er kjernemelk, sitronsaft eller yoghurt.',
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

export const CHAPTER_MAT_9_4_1: TextbookChapter = {
  id: 'mat-9-4-1',
  courseId: 'mat-9',
  chapterNumber: '4.1',
  title: 'Mattradisjoner og kultur',
  description: 'Utforsk mattradisjoner fra Norge og verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og presentere mattradisjoner fra ulike kulturer',
  ],
  content: [
    {
      id: 'mat-9-4-1-intro',
      type: 'text',
      content: `Mat er mer enn næring - det er kultur, historie og identitet. Mattradisjoner forteller om klima, tilgjengelige råvarer, religion og sosiale skikker.`,
    },
    {
      id: 'mat-9-4-1-text-1',
      type: 'text',
      content: `**Norske mattradisjoner**

**Historiske retter**:
- Lutefisk, pinnekjøtt, ribbe (julemat)
- Fårikål (nasjonalrett)
- Rakfisk, spekemat (konservering)
- Lefser, rømmegrøt (melkemat)

**Regionale spesialiteter**:
- Bergensk fiskesuppe
- Trøndersodd
- Finnbiff (Nord-Norge)
- Smalahove (Vestlandet)

Mange tradisjonsretter oppsto fra nødvendighet - man måtte konservere mat til vinteren.`,
    },
    {
      id: 'mat-9-4-1-text-2',
      type: 'text',
      content: `**Mattradisjoner fra verden**

**Middelhavslandene**:
- Oliveolje, grønnsaker, fisk
- Ferske råvarer, enkle tilberedninger
- Sosiale måltider som varer lenge

**Asia**:
- Ris som grunnlag
- Balanse mellom smaker (søtt, salt, surt, bittert, umami)
- Wok og dampkoking

**Latin-Amerika**:
- Mais, bønner, chili
- Sterke smaker og krydder
- Tortillas, tacos, tamales`,
    },
    {
      id: 'mat-9-4-1-text-3',
      type: 'text',
      content: `**Mat og religion**

**Halal (islam)**:
- Tillatte matvarer tilberedt etter religiøse regler
- Svin og alkohol forbudt
- Kjøtt må slaktes på bestemt måte

**Kosher (jødedommen)**:
- Lignende regler som halal
- Kjøtt og melk holdes adskilt
- Spesifikke dyr tillatt

**Vegetarisme i hinduismen**:
- Ku ansett som hellig
- Mange er vegetarianere`,
    },
    {
      id: 'mat-9-4-1-note-1',
      type: 'note',
      title: 'Matkultur i endring',
      content: `Globaliseringen har gjort at vi har tilgang til mat fra hele verden. Samtidig øker interessen for lokale tradisjoner og bærekraftig mat.`,
    },
    {
      id: 'mat-9-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Norges nasjonalrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fårikål',
            multipleChoiceOptions: ['Fårikål', 'Lutefisk', 'Pizza', 'Taco'],
          },
        ],
        solution: 'Fårikål er kåret til Norges nasjonalrett og har en egen dag (siste torsdag i september).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr halal?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Mat som er tillatt ifølge islamsk lov',
            multipleChoiceOptions: ['Mat som er tillatt ifølge islamsk lov', 'En type krydder', 'Vegetarisk mat', 'Økologisk mat'],
          },
        ],
        solution: 'Halal betyr "tillatt" på arabisk og refererer til mat som er tillatt å spise ifølge islamsk lov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor utviklet nordmenn mange konserveringsmetoder?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å bevare mat til den lange vinteren',
            multipleChoiceOptions: ['For å bevare mat til den lange vinteren', 'Fordi de likte salt mat best', 'For å eksportere mat', 'Fordi det var lovpålagt'],
          },
        ],
        solution: 'Norge har lange, kalde vintre med begrenset mattilgang. Salting, tørking og røyking var nødvendig for å overleve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner middelhavskost?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Mye oliveolje, grønnsaker og fisk',
            multipleChoiceOptions: ['Mye oliveolje, grønnsaker og fisk', 'Mye kjøtt og poteter', 'Mye sukker og smør', 'Mest ferdigmat'],
          },
        ],
        solution: 'Middelhavskost er kjent for oliveolje, ferske grønnsaker, fisk og fullkorn - og er assosiert med god helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_9_4_2: TextbookChapter = {
  id: 'mat-9-4-2',
  courseId: 'mat-9',
  chapterNumber: '4.2',
  title: 'Måltidsverting',
  description: 'Lær om planlegging, presentasjon og servering av måltider.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre vertskap',
  ],
  content: [
    {
      id: 'mat-9-4-2-intro',
      type: 'text',
      content: `God vertskap handler om å skape en hyggelig opplevelse for gjestene. Det innebærer planlegging, tilberedning, presentasjon og atmosfære.`,
    },
    {
      id: 'mat-9-4-2-text-1',
      type: 'text',
      content: `**Planlegging av selskap**

1. **Gjester**: Hvem kommer? Allergier? Preferanser?
2. **Meny**: Velg retter som passer sammen og kan forberedes
3. **Tidslinje**: Når må hva forberedes/tilberedes?
4. **Innkjøp**: Lag handleliste, sjekk hva du har
5. **Dekning**: Bord, servise, dekorasjoner

**Tips**: Velg retter du mestrer. Et selskap er ikke tidspunktet for å eksperimentere med helt nye oppskrifter.`,
    },
    {
      id: 'mat-9-4-2-text-2',
      type: 'text',
      content: `**Menysammensetning**

Klassisk rekkefølge:
1. **Forrett**: Lett og appetittvekkende
2. **Hovedrett**: Det mest mettende
3. **Dessert**: Søt avslutning

**Balanse**:
- Varier teksturer (mykt, sprøtt)
- Varier smaker (salt, søtt, surt)
- Tenk farger - maten skal se innbydende ut
- Ikke server samme ingrediens i flere retter`,
    },
    {
      id: 'mat-9-4-2-text-3',
      type: 'text',
      content: `**Anretning og presentasjon**

**Prinsipper**:
- Odd numbers: Bruk 3, 5 eller 7 elementer
- Høyde: Lag variasjon i høyde
- Saus: Legg under eller ved siden, ikke over
- Kant: Hold kantene på tallerkenen rene
- Farger: Bruk kontraster og urter som garnering

**Servering**:
- Mat serveres fra venstre, drikke fra høyre
- Kvinner serveres først (tradisjonelt)
- Alle gjester bør serveres samtidig hvis mulig`,
    },
    {
      id: 'mat-9-4-2-tip-1',
      type: 'tip',
      title: 'Forbered det du kan',
      content: `Lag forrett og dessert dagen før. Klargjør grønnsaker på forhånd. Jo mer du forbereder, jo mer kan du nyte festen med gjestene.`,
    },
    {
      id: 'mat-9-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er første steg når du planlegger et selskap?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Finne ut hvem gjestene er og deres behov',
            multipleChoiceOptions: ['Finne ut hvem gjestene er og deres behov', 'Handle inn mat', 'Dekke bordet', 'Lage maten'],
          },
        ],
        solution: 'Du må vite hvem som kommer, allergier og preferanser før du planlegger menyen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er riktig rekkefølge på et måltid?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Forrett, hovedrett, dessert',
            multipleChoiceOptions: ['Forrett, hovedrett, dessert', 'Dessert, hovedrett, forrett', 'Hovedrett, forrett, dessert', 'Det spiller ingen rolle'],
          },
        ],
        solution: 'Tradisjonelt serveres forrett først (lett), deretter hovedrett (mettende), og til slutt dessert (søt avslutning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør man ikke eksperimentere med nye oppskrifter på et selskap?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Fordi risikoen for at noe går galt er høyere',
            multipleChoiceOptions: ['Fordi risikoen for at noe går galt er høyere', 'Fordi gjester liker bare gammel mat', 'Fordi det er forbudt', 'Fordi det tar for lang tid'],
          },
        ],
        solution: 'Nye oppskrifter har høyere risiko for å mislykkes. Velg retter du mestrer når du har gjester.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med "odd numbers" i anretning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At oddetall (3, 5, 7) ser mer tiltalende ut',
            multipleChoiceOptions: ['At oddetall (3, 5, 7) ser mer tiltalende ut', 'At man bare bruker runde tall', 'At man ikke teller elementene', 'At tallerkenen må være rund'],
          },
        ],
        solution: 'Oddetall av elementer ser ofte mer visuelt tiltalende ut enn partall. Tre stykker kjøtt ser bedre ut enn to.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Bærekraft og forbrukerbevissthet
// ============================================================================

export const CHAPTER_MAT_9_5_1: TextbookChapter = {
  id: 'mat-9-5-1',
  courseId: 'mat-9',
  chapterNumber: '5.1',
  title: 'Global matproduksjon',
  description: 'Lær om verdens matsystem, ressurser og utfordringer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drøfte etiske problemstillinger knyttet til matproduksjon',
  ],
  content: [
    {
      id: 'mat-9-5-1-intro',
      type: 'text',
      content: `Verdens matproduksjon står overfor store utfordringer: Vi må brødfø en voksende befolkning samtidig som vi reduserer miljøpåvirkningen. Forståelse av matsystemet er viktig for å ta informerte valg.`,
    },
    {
      id: 'mat-9-5-1-text-1',
      type: 'text',
      content: `**Matsystemets utfordringer**

**Befolkningsvekst**:
- 8 milliarder mennesker i dag
- Forventet 10 milliarder i 2050
- 30-50% mer mat trengs

**Ressursbruk**:
- 70% av ferskvann brukes til jordbruk
- 40% av landareal er jordbruk
- Matproduksjon står for 25-30% av klimagassutslipp

**Fordeling**:
- Nok mat produseres til alle
- 800+ millioner sulter likevel
- Samtidig kastes 1/3 av all mat`,
    },
    {
      id: 'mat-9-5-1-def-1',
      type: 'definition',
      title: 'Matsikkerhet',
      content: `Matsikkerhet betyr at alle mennesker til enhver tid har tilgang til nok, trygg og næringsrik mat for et aktivt og sunt liv.`,
    },
    {
      id: 'mat-9-5-1-text-2',
      type: 'text',
      content: `**Bærekraftig matproduksjon**

**Økologisk landbruk**:
- Ingen syntetiske sprøytemidler eller kunstgjødsel
- Bedre for biologisk mangfold
- Ofte lavere avlinger

**Regenerativt landbruk**:
- Fokus på jordhelses
- Karbon lagres i jorda
- Redusert pløying

**Akvkultur (oppdrett)**:
- Viktig proteinkilde
- Utfordringer med forurensning og fôr
- Kan være mer effektivt enn landdyr`,
    },
    {
      id: 'mat-9-5-1-text-3',
      type: 'text',
      content: `**Fremtidens mat?**

**Plantebasert protein**:
- Soyaprodukter, linser, kikerter
- Plantekjøtt (Beyond Meat, Impossible Foods)
- Lavere klimaavtrykk

**Insekter**:
- Høyt proteininnhold
- Lavt ressursforbruk
- Vanlig mat i mange kulturer

**Labdyrket kjøtt**:
- Kjøtt dyrket fra celler
- Under utvikling
- Potensielt lavere miljøpåvirkning`,
    },
    {
      id: 'mat-9-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mye av verdens ferskvann brukes til jordbruk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ca. 70%',
            multipleChoiceOptions: ['Ca. 70%', 'Ca. 10%', 'Ca. 30%', 'Ca. 90%'],
          },
        ],
        solution: 'Jordbruket bruker omtrent 70% av verdens ferskvann, hovedsakelig til vanning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er matsikkerhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At alle har tilgang til nok og trygg mat',
            multipleChoiceOptions: ['At alle har tilgang til nok og trygg mat', 'At maten er låst inne', 'At maten er gratis', 'At man spiser mye'],
          },
        ],
        solution: 'Matsikkerhet handler om at alle mennesker til enhver tid har tilgang til nok, trygg og næringsrik mat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner økologisk landbruk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ingen syntetiske sprøytemidler eller kunstgjødsel',
            multipleChoiceOptions: ['Ingen syntetiske sprøytemidler eller kunstgjødsel', 'Høyere avlinger', 'Billigere mat', 'Mer maskinbruk'],
          },
        ],
        solution: 'Økologisk landbruk unngår syntetiske sprøytemidler og kunstgjødsel, og fokuserer på naturlige metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor regnes insekter som potensielt bærekraftig mat?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Høyt protein med lavt ressursforbruk',
            multipleChoiceOptions: ['Høyt protein med lavt ressursforbruk', 'Fordi de smaker godt', 'Fordi de er vakre', 'Fordi de er store'],
          },
        ],
        solution: 'Insekter gir mye protein per ressursinnsats - de krever mindre fôr, vann og plass enn tradisjonelle husdyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_MAT_9_5_2: TextbookChapter = {
  id: 'mat-9-5-2',
  courseId: 'mat-9',
  chapterNumber: '5.2',
  title: 'Kritisk forbrukerbevissthet',
  description: 'Lær å ta informerte valg som forbruker av mat.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere valg av matvarer ut fra etikk, bærekraft og økonomi',
  ],
  content: [
    {
      id: 'mat-9-5-2-intro',
      type: 'text',
      content: `Som forbrukere påvirker vi matproduksjonen med valgene våre. Ved å være bevisste og kritiske kan vi støtte bærekraftige og etiske praksiser.`,
    },
    {
      id: 'mat-9-5-2-text-1',
      type: 'text',
      content: `**Matvaremerking**

**Sertifiseringsordninger**:
- **Debio (økologisk)**: Norsk økologisertifisering
- **Fairtrade**: Rettferdig handel, bedre betingelser for bønder
- **MSC/ASC**: Bærekraftig fisk/sjømat
- **Rainforest Alliance**: Bærekraftig tropisk landbruk
- **UTZ**: Bærekraftig kakao, kaffe, te

**Les merkingen kritisk** - hva garanterer ordningen egentlig?`,
    },
    {
      id: 'mat-9-5-2-text-2',
      type: 'text',
      content: `**Grønnvasking**

Grønnvasking er når selskaper gir inntrykk av å være mer miljøvennlige enn de er.

**Advarselstegn**:
- Vage påstander ("naturlig", "grønn")
- Fokus på én positiv egenskap mens annet ignoreres
- Ingen dokumentasjon eller sertifisering
- Vakre naturbilder på usunne produkter

**Vær kritisk**: Sjekk faktiske ingredienser og sertifiseringer, ikke bare markedsføring.`,
    },
    {
      id: 'mat-9-5-2-text-3',
      type: 'text',
      content: `**Ta informerte valg**

**Spørsmål å stille**:
1. Hvor kommer maten fra?
2. Hvordan er den produsert?
3. Hva inneholder den egentlig?
4. Er prisen realistisk for kvaliteten?
5. Trenger jeg dette produktet?

**Tiltak du kan gjøre**:
- Velg sesong- og lokalmat når mulig
- Reduser matsvinn
- Spis mer plantebasert
- Velg sertifiserte produkter
- Støtt lokale produsenter`,
    },
    {
      id: 'mat-9-5-2-tip-1',
      type: 'tip',
      title: 'Forbrukermakt',
      content: `Dine valg påvirker markedet. Når nok forbrukere etterspør bærekraftige produkter, tilpasser produsentene seg. Stem med lommeboken!`,
    },
    {
      id: 'mat-9-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er grønnvasking?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Når selskaper later som de er mer miljøvennlige enn de er',
            multipleChoiceOptions: ['Når selskaper later som de er mer miljøvennlige enn de er', 'Når man vasker grønnsaker', 'Når man sorterer søppel', 'Når man bruker grønn strøm'],
          },
        ],
        solution: 'Grønnvasking er villedende markedsføring der selskaper fremstår mer bærekraftige enn de faktisk er.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva garanterer Fairtrade-merket?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Bedre betingelser for bønder og arbeidere',
            multipleChoiceOptions: ['Bedre betingelser for bønder og arbeidere', 'At maten er økologisk', 'At maten er sunn', 'At maten er norsk'],
          },
        ],
        solution: 'Fairtrade sikrer at bønder og arbeidere i utviklingsland får bedre betalt og arbeidsforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr MSC-merket på fisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At fisken er fanget bærekraftig',
            multipleChoiceOptions: ['At fisken er fanget bærekraftig', 'At fisken er billig', 'At fisken er frossen', 'At fisken er norsk'],
          },
        ],
        solution: 'MSC (Marine Stewardship Council) sertifiserer villfanget fisk fra bærekraftige fiskerier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'mat-9-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mat-9-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan du som forbruker påvirke matproduksjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ved å velge produkter som er produsert bærekraftig',
            multipleChoiceOptions: ['Ved å velge produkter som er produsert bærekraftig', 'Du kan ikke påvirke noe', 'Ved å klage til butikken', 'Ved å spise mer'],
          },
        ],
        solution: 'Forbrukerne har makt - når vi velger bærekraftige produkter, tilpasser produsentene seg til etterspørselen.',
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

export const MAT_9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MAT_9_1_1,
  CHAPTER_MAT_9_1_2,
  CHAPTER_MAT_9_2_1,
  CHAPTER_MAT_9_2_2,
  CHAPTER_MAT_9_3_1,
  CHAPTER_MAT_9_3_2,
  CHAPTER_MAT_9_4_1,
  CHAPTER_MAT_9_4_2,
  CHAPTER_MAT_9_5_1,
  CHAPTER_MAT_9_5_2,
];
